function getInitialModelInfo() {
    let modelInfo = ModelIndex.getCurrentModel();
    if (!modelInfo) {
        modelInfo = TutorialModelIndex.getCurrentModel();
    }
    if (!modelInfo) {
        modelInfo = TutorialPbrModelIndex.getCurrentModel();
    }
    if (!modelInfo) {
        modelInfo = TutorialFurtherPbrModelIndex.getCurrentModel();
    }
    if (!modelInfo) {
        modelInfo = TutorialFeatureTestModelIndex.getCurrentModel();
    }
    if (!modelInfo) {
        modelInfo = TutorialComparePbrModelIndex.getCurrentModel();
    }
    if (!modelInfo) {
        modelInfo = TutorialExtensionTestModelIndex.getCurrentModel();
    }
    if (!modelInfo) {
        modelInfo = TutorialWipExtensionTestModelIndex.getCurrentModel();
    }
    return modelInfo;
}

import { GltfView } from "gltf-viewer";
import * as dat from 'dat.gui';

// ---- Physics (Havok / KHR_physics_rigid_bodies) ----
const HAVOK_WASM_URL = 'https://cx20.github.io/gltf-test/libs/babylonjs/dev/HavokPhysics.wasm';
const RESET_Y_THRESHOLD = -20;
const IDENTITY_QUATERNION = [0, 0, 0, 1];

let HK = null;
let physicsWorldId = null;
const physicsNodesList = [];
const dynamicNodesList = [];
function resetPhysicsState() {
    physicsWorldId = null;
    physicsNodesList.length = 0;
    dynamicNodesList.length = 0;
}

// ---- Physics debug wireframe overlay ----
let physicsDebugEnabled = true;
let physicsDebugCanvas = null;
let physicsDebugGl     = null;
let physicsDebugProg   = null;
let physicsDebugVbo    = null;
const PHYSICS_DEBUG_COLORS = [
    [1.0, 0.25, 0.25, 1.0],
    [0.25, 0.75, 1.0, 1.0],
    [0.25, 1.0, 0.25, 1.0],
    [1.0, 1.0, 0.25, 1.0],
];

function enumToNumber(value) {
    if (typeof value === 'number') return value;
    if (typeof value === 'bigint') return Number(value);
    if (typeof value === 'string') { const p = Number(value.trim()); return Number.isNaN(p) ? NaN : p; }
    if (!value || typeof value !== 'object') return NaN;
    if (typeof value.value === 'number' || typeof value.value === 'bigint') return Number(value.value);
    if (typeof value.m_value === 'number' || typeof value.m_value === 'bigint') return Number(value.m_value);
    if (typeof value.value === 'function') { const n = enumToNumber(value.value()); if (!Number.isNaN(n)) return n; }
    if (typeof value.valueOf === 'function') {
        const v2 = value.valueOf();
        if (v2 !== value) { const n = enumToNumber(v2); if (!Number.isNaN(n)) return n; }
    }
    return NaN;
}

function checkResult(result, label) {
    if (result === HK.Result.RESULT_OK) return;
    const rc = enumToNumber(result), ok = enumToNumber(HK.Result.RESULT_OK);
    if (!Number.isNaN(rc) && !Number.isNaN(ok) && rc === ok) return;
    if (typeof result === 'object' && typeof HK.Result.RESULT_OK === 'object') {
        try { if (JSON.stringify(result) === JSON.stringify(HK.Result.RESULT_OK)) return; } catch (_e) {}
    }
    throw new Error(label + ' failed: ' + String(result));
}

function applyPhysicsMaterial(shapeId, materialDef) {
    if (!materialDef || typeof HK.HP_Shape_SetMaterial !== 'function') return;
    const df = materialDef.dynamicFriction !== undefined ? materialDef.dynamicFriction : 0.5;
    const sf = materialDef.staticFriction  !== undefined ? materialDef.staticFriction  : 0.5;
    const re = materialDef.restitution     !== undefined ? materialDef.restitution      : 0.0;

    const combineMap = {
        'minimum':  HK.MaterialCombine.MINIMUM,
        'maximum':  HK.MaterialCombine.MAXIMUM,
        'multiply': HK.MaterialCombine.MULTIPLY,
        'average':  HK.MaterialCombine.ARITHMETIC_MEAN ?? HK.MaterialCombine.MINIMUM,
    };
    const frictionCombine    = combineMap[materialDef.frictionCombine]    ?? HK.MaterialCombine.MINIMUM;
    const restitutionCombine = combineMap[materialDef.restitutionCombine] ?? HK.MaterialCombine.MAXIMUM;

    HK.HP_Shape_SetMaterial(shapeId, [df, sf, re, frictionCombine, restitutionCombine]);
}

// Build a table mapping each glTF collisionFilter index to a Havok [membership, collide] pair.
// Each value is a 32-bit mask; system names are assigned bits in first-seen order (max 32).
let collisionFilterTable = [];
function buildCollisionFilterTable(gltfJson) {
    const filters = gltfJson.extensions?.KHR_physics_rigid_bodies?.collisionFilters ?? [];
    if (filters.length === 0) { collisionFilterTable = []; return; }
    const systemBit = new Map();
    let nextBit = 0;
    function bitFor(name) {
        if (!systemBit.has(name)) {
            if (nextBit >= 32) {
                console.warn('[Physics] Too many collision systems (>32), ignoring:', name);
                systemBit.set(name, 0);
            } else {
                systemBit.set(name, (1 << nextBit) >>> 0);
                nextBit++;
            }
        }
        return systemBit.get(name);
    }
    const ALL = 0xFFFFFFFF >>> 0;
    collisionFilterTable = filters.map(function (f) {
        let membership = 0;
        for (const n of (f.collisionSystems ?? [])) membership = (membership | bitFor(n)) >>> 0;
        let collideMask;
        if (Array.isArray(f.collideWithSystems)) {
            collideMask = 0;
            for (const n of f.collideWithSystems) collideMask = (collideMask | bitFor(n)) >>> 0;
        } else if (Array.isArray(f.notCollideWithSystems)) {
            let mask = 0;
            for (const n of f.notCollideWithSystems) mask = (mask | bitFor(n)) >>> 0;
            collideMask = (ALL & ~mask) >>> 0;
        } else {
            collideMask = ALL;
        }
        return [membership || ALL, collideMask];
    });
}

function applyCollisionFilterToShape(shapeId, colliderDef) {
    if (!colliderDef || typeof HK.HP_Shape_SetFilterInfo !== 'function') return;
    const idx = colliderDef.collisionFilter;
    if (typeof idx !== 'number') return;
    const pair = collisionFilterTable[idx];
    if (!pair) return;
    HK.HP_Shape_SetFilterInfo(shapeId, [pair[0], pair[1]]);
}

// Create a physics shape from mesh data (convexHull or trimesh).
// geometry: physExt.collider.geometry when geometry.shape is undefined
function createMeshPhysicsShape(gltf, node, geomDef, motionDef, matDef) {
    const { vec3 } = glMatrix;
    const isConvex = !!geomDef.convexHull;

    // Resolve mesh index from geometry.mesh (new spec) or geometry.node (legacy)
    let meshIndex = geomDef.mesh;
    if (meshIndex === undefined && geomDef.node !== undefined) {
        const refNode = gltf.nodes[geomDef.node];
        if (refNode?.mesh !== undefined) meshIndex = refNode.mesh;
    }
    if (meshIndex === undefined) {
        console.warn('Physics: mesh-based collider has no mesh reference, skipping.');
        return null;
    }

    const meshDef = gltf.meshes[meshIndex];
    const worldScale = vec3.create();
    const { mat4 } = glMatrix;
    mat4.getScaling(worldScale, node.worldTransform);

    const allPositions = [];
    const allIndices   = [];
    let vertexOffset   = 0;

    for (const primitive of meshDef.primitives) {
        const posAccessor = gltf.accessors[primitive.attributes.POSITION];
        const positions   = posAccessor.getDeinterlacedView(gltf); // Float32Array, stride=3

        for (let j = 0; j < positions.length; j += 3) {
            allPositions.push(
                positions[j]     * worldScale[0],
                positions[j + 1] * worldScale[1],
                positions[j + 2] * worldScale[2]
            );
        }

        if (!isConvex) {
            if (primitive.indices !== undefined) {
                const idxAccessor = gltf.accessors[primitive.indices];
                const indices     = idxAccessor.getDeinterlacedView(gltf);
                for (let j = 0; j < indices.length; j++) {
                    allIndices.push(indices[j] + vertexOffset);
                }
            } else {
                const vertexCount = positions.length / 3;
                for (let j = 0; j + 2 < vertexCount; j += 3) {
                    allIndices.push(vertexOffset + j, vertexOffset + j + 1, vertexOffset + j + 2);
                }
            }
        }
        vertexOffset += positions.length / 3;
    }

    // For static trimesh, add back-faces so both sides collide
    if (!isConvex && !motionDef) {
        const base = allIndices.length;
        for (let j = 0; j + 2 < base; j += 3) {
            allIndices.push(allIndices[j], allIndices[j + 2], allIndices[j + 1]);
        }
    }

    const posFloat32  = new Float32Array(allPositions);
    const numVertices = allPositions.length / 3;
    let shapeId;

    if (typeof HK._malloc === 'function' && HK.HEAPU8) {
        // WASM heap allocation (required by this Havok build)
        const posBytes  = posFloat32.byteLength;
        const posOffset = HK._malloc(posBytes);
        new Float32Array(HK.HEAPU8.buffer, posOffset, posFloat32.length).set(posFloat32);
        try {
            if (isConvex) {
                const created = HK.HP_Shape_CreateConvexHull(posOffset, numVertices);
                checkResult(created[0], 'HP_Shape_CreateConvexHull');
                shapeId = created[1];
            } else {
                const numTriangles = allIndices.length / 3;
                const triBytes  = allIndices.length * 4;
                const triOffset = HK._malloc(triBytes);
                const triView   = new Int32Array(HK.HEAPU8.buffer, triOffset, allIndices.length);
                for (let j = 0; j < allIndices.length; j++) triView[j] = allIndices[j];
                try {
                    const created = HK.HP_Shape_CreateMesh(posOffset, numVertices, triOffset, numTriangles);
                    checkResult(created[0], 'HP_Shape_CreateMesh');
                    shapeId = created[1];
                } finally {
                    HK._free(triOffset);
                }
            }
        } finally {
            HK._free(posOffset);
        }
    } else {
        // Fallback: pass TypedArray directly
        if (isConvex) {
            const created = HK.HP_Shape_CreateConvexHull(posFloat32);
            checkResult(created[0], 'HP_Shape_CreateConvexHull');
            shapeId = Array.isArray(created[1]) && created[1].length > 0 ? created[1][0] : created[1];
        } else {
            const indicesUint32 = new Uint32Array(allIndices);
            const created = HK.HP_Shape_CreateMesh(posFloat32, indicesUint32);
            checkResult(created[0], 'HP_Shape_CreateMesh');
            shapeId = Array.isArray(created[1]) && created[1].length > 0 ? created[1][0] : created[1];
        }
    }
    if (typeof shapeId === 'bigint') shapeId = Number(shapeId);

    if (!shapeId || shapeId <= 0) {
        // Fallback: use bounding box for both convex and trimesh.
        // A box approximation preserves corners/edges that are critical for
        // correct contact behaviour (e.g. InfInertiaBox stopping against Cone).
        console.warn('Physics: mesh shape creation failed, using bounding box fallback.');
        let minX = Infinity, minY = Infinity, minZ = Infinity;
        let maxX = -Infinity, maxY = -Infinity, maxZ = -Infinity;
        for (let j = 0; j < allPositions.length; j += 3) {
            minX = Math.min(minX, allPositions[j]);     maxX = Math.max(maxX, allPositions[j]);
            minY = Math.min(minY, allPositions[j+1]);   maxY = Math.max(maxY, allPositions[j+1]);
            minZ = Math.min(minZ, allPositions[j+2]);   maxZ = Math.max(maxZ, allPositions[j+2]);
        }
        const fbSize = [maxX - minX, maxY - minY, maxZ - minZ];
        const fb = HK.HP_Shape_CreateBox([0, 0, 0], IDENTITY_QUATERNION, fbSize);
        checkResult(fb[0], 'HP_Shape_CreateBox (fallback)');
        shapeId = fb[1];
        if (typeof shapeId === 'bigint') shapeId = Number(shapeId);
    }

    // Compute bounding box for density estimate
    let minX = Infinity, minY = Infinity, minZ = Infinity;
    let maxX = -Infinity, maxY = -Infinity, maxZ = -Infinity;
    for (let j = 0; j < allPositions.length; j += 3) {
        minX = Math.min(minX, allPositions[j]);     maxX = Math.max(maxX, allPositions[j]);
        minY = Math.min(minY, allPositions[j + 1]); maxY = Math.max(maxY, allPositions[j + 1]);
        minZ = Math.min(minZ, allPositions[j + 2]); maxZ = Math.max(maxZ, allPositions[j + 2]);
    }
    const bbSize   = [maxX - minX, maxY - minY, maxZ - minZ];
    const bbVolume = Math.max(bbSize[0] * bbSize[1] * bbSize[2], 0.0001);

    if (motionDef) {
        const specMass = motionDef.mass;
        const density  = (specMass !== undefined && specMass > 0) ? specMass / bbVolume : 1;
        checkResult(HK.HP_Shape_SetDensity(shapeId, density), 'HP_Shape_SetDensity');
    }
    applyPhysicsMaterial(shapeId, matDef);

    return { shapeId, size: bbSize };
}

// Apply mass / inertiaDiagonal / inertiaOrientation / centerOfMass overrides from KHR spec.
// KHR spec: mass=0 means infinite mass; inertiaDiagonal component=0 means infinite inertia.
// Havok accepts these 0 values and treats them as infinity.
function applyMotionMassProperties(bodyId, motionDef) {
    if (!motionDef) return;
    if (typeof HK.HP_Body_GetMassProperties !== 'function' ||
        typeof HK.HP_Body_SetMassProperties !== 'function') return;

    const hasMass               = motionDef.mass !== undefined;
    const hasInertiaDiagonal    = Array.isArray(motionDef.inertiaDiagonal);
    const hasInertiaOrientation = Array.isArray(motionDef.inertiaOrientation);
    const hasCenterOfMass       = Array.isArray(motionDef.centerOfMass);
    if (!hasMass && !hasInertiaDiagonal && !hasInertiaOrientation && !hasCenterOfMass) return;

    const mpRes = HK.HP_Body_GetMassProperties(bodyId);
    checkResult(mpRes[0], 'HP_Body_GetMassProperties');
    const mp = mpRes[1];
    let changed = false;

    if (Array.isArray(mp)) {
        // Havok layout: [centerOfMass[3], mass(scalar), inertiaDiagonal[3], inertiaOrientation[4]]
        let vec3Count = 0;
        for (let i = 0; i < mp.length; i++) {
            const slot = mp[i];
            if (!Array.isArray(slot)) {
                if (hasMass) { mp[i] = motionDef.mass; changed = true; }
                continue;
            }
            if (slot.length === 4 && hasInertiaOrientation) {
                slot[0] = motionDef.inertiaOrientation[0];
                slot[1] = motionDef.inertiaOrientation[1];
                slot[2] = motionDef.inertiaOrientation[2];
                slot[3] = motionDef.inertiaOrientation[3];
                changed = true;
                continue;
            }
            if (slot.length === 3) {
                if (vec3Count === 0 && hasCenterOfMass) {
                    slot[0] = motionDef.centerOfMass[0];
                    slot[1] = motionDef.centerOfMass[1];
                    slot[2] = motionDef.centerOfMass[2];
                    changed = true;
                } else if (vec3Count === 1 && hasInertiaDiagonal) {
                    slot[0] = motionDef.inertiaDiagonal[0];
                    slot[1] = motionDef.inertiaDiagonal[1];
                    slot[2] = motionDef.inertiaDiagonal[2];
                    changed = true;
                }
                vec3Count++;
            }
        }
    }
    if (changed) {
        checkResult(HK.HP_Body_SetMassProperties(bodyId, mp), 'HP_Body_SetMassProperties (motion)');
    }
}

function createPhysicsBody(shapeId, motionType, position, rotation, setMass, gravityFactor, motionDef) {
    const created = HK.HP_Body_Create();
    checkResult(created[0], 'HP_Body_Create');
    const bodyId = created[1];
    checkResult(HK.HP_Body_SetShape(bodyId, shapeId),        'HP_Body_SetShape');
    checkResult(HK.HP_Body_SetMotionType(bodyId, motionType), 'HP_Body_SetMotionType');
    if (setMass) {
        const massRes = HK.HP_Shape_BuildMassProperties(shapeId);
        checkResult(massRes[0], 'HP_Shape_BuildMassProperties');
        checkResult(HK.HP_Body_SetMassProperties(bodyId, massRes[1]), 'HP_Body_SetMassProperties');
        applyMotionMassProperties(bodyId, motionDef);
    }
    if (gravityFactor !== undefined && typeof HK.HP_Body_SetGravityFactor === 'function') {
        checkResult(HK.HP_Body_SetGravityFactor(bodyId, gravityFactor), 'HP_Body_SetGravityFactor');
    }
    checkResult(HK.HP_Body_SetPosition(bodyId,    position), 'HP_Body_SetPosition');
    checkResult(HK.HP_Body_SetOrientation(bodyId, rotation), 'HP_Body_SetOrientation');
    checkResult(HK.HP_World_AddBody(physicsWorldId, bodyId, false), 'HP_World_AddBody');
    return bodyId;
}

// Collect descendant node indices that have a collider but no motion (compound children).
// Stops recursion into nodes with their own motion (they are separate bodies).
function collectDescendantColliders(gltf, nodeIndex, result, excludedSet) {
    const node = gltf.nodes[nodeIndex];
    for (const childIdx of (node.children || [])) {
        const child    = gltf.nodes[childIdx];
        const childExt = child.extensions?.KHR_physics_rigid_bodies;
        if (childExt?.motion) continue; // separate dynamic body
        if (childExt?.collider?.geometry) {
            result.push(childIdx);
            excludedSet.add(childIdx);
        }
        collectDescendantColliders(gltf, childIdx, result, excludedSet);
    }
}

// Create a KHR_implicit_shapes physics shape and return its shapeId, or null on failure.
// Pass motionDef=null for compound children (density/mass is set on the parent body).
function createImplicitShapeFromDef(shapeDef, worldScale, motionDef, matDef) {
    let shapeId;
    if (shapeDef.sphere) {
        const radius = shapeDef.sphere.radius * Math.max(worldScale[0], worldScale[1], worldScale[2]);
        const created = HK.HP_Shape_CreateSphere([0, 0, 0], radius);
        checkResult(created[0], 'HP_Shape_CreateSphere');
        shapeId = created[1];
        if (motionDef) {
            const volume  = Math.max((4 / 3) * Math.PI * radius ** 3, 0.0001);
            const density = motionDef.mass !== undefined ? motionDef.mass / volume : 1;
            checkResult(HK.HP_Shape_SetDensity(shapeId, density), 'HP_Shape_SetDensity');
        }
    } else if (shapeDef.capsule) {
        const radiusTop    = shapeDef.capsule.radiusTop    ?? shapeDef.capsule.radius ?? 0.5;
        const radiusBottom = shapeDef.capsule.radiusBottom ?? shapeDef.capsule.radius ?? 0.5;
        const radius    = ((radiusTop + radiusBottom) / 2) * Math.max(worldScale[0], worldScale[2]);
        const halfShaft = (shapeDef.capsule.height ?? 1.0) * worldScale[1] / 2;
        const created   = HK.HP_Shape_CreateCapsule([0, -halfShaft, 0], [0, halfShaft, 0], radius);
        checkResult(created[0], 'HP_Shape_CreateCapsule');
        shapeId = created[1];
        if (motionDef) {
            const shaftLen = halfShaft * 2;
            const volume  = Math.max(Math.PI * radius ** 2 * shaftLen + (4 / 3) * Math.PI * radius ** 3, 0.0001);
            const density = motionDef.mass !== undefined ? motionDef.mass / volume : 1;
            checkResult(HK.HP_Shape_SetDensity(shapeId, density), 'HP_Shape_SetDensity');
        }
    } else if (shapeDef.cylinder) {
        const radiusTop    = shapeDef.cylinder.radiusTop    ?? shapeDef.cylinder.radius ?? 0.5;
        const radiusBottom = shapeDef.cylinder.radiusBottom ?? shapeDef.cylinder.radius ?? 0.5;
        const radius     = Math.max(radiusTop, radiusBottom) * Math.max(worldScale[0], worldScale[2]);
        const halfHeight = (shapeDef.cylinder.height ?? 1.0) * worldScale[1] / 2;
        let cylCreated;
        if (typeof HK.HP_Shape_CreateCylinder === 'function') {
            cylCreated = HK.HP_Shape_CreateCylinder([0, -halfHeight, 0], [0, halfHeight, 0], radius);
            checkResult(cylCreated[0], 'HP_Shape_CreateCylinder');
        } else {
            const boxSize = [radius * 2, halfHeight * 2, radius * 2];
            cylCreated = HK.HP_Shape_CreateBox([0, 0, 0], IDENTITY_QUATERNION, boxSize);
            checkResult(cylCreated[0], 'HP_Shape_CreateBox (cylinder fallback)');
        }
        shapeId = cylCreated[1];
        if (motionDef) {
            const volume  = Math.max(Math.PI * radius ** 2 * (halfHeight * 2), 0.0001);
            const density = motionDef.mass !== undefined ? motionDef.mass / volume : 1;
            checkResult(HK.HP_Shape_SetDensity(shapeId, density), 'HP_Shape_SetDensity');
        }
    } else if (shapeDef.box) {
        const boxSize = shapeDef.box.size ?? [1, 1, 1];
        const size = [
            Math.abs(boxSize[0] * worldScale[0]),
            Math.abs(boxSize[1] * worldScale[1]),
            Math.abs(boxSize[2] * worldScale[2]),
        ];
        const created = HK.HP_Shape_CreateBox([0, 0, 0], IDENTITY_QUATERNION, size);
        checkResult(created[0], 'HP_Shape_CreateBox');
        shapeId = created[1];
        if (motionDef) {
            const volume  = Math.max(size[0] * size[1] * size[2], 0.0001);
            const density = motionDef.mass !== undefined ? motionDef.mass / volume : 1;
            checkResult(HK.HP_Shape_SetDensity(shapeId, density), 'HP_Shape_SetDensity');
        }
    } else {
        console.warn(`Physics: unsupported implicit shape type "${shapeDef?.type}", skipping.`);
        return null;
    }
    applyPhysicsMaterial(shapeId, matDef);
    return shapeId;
}

function initPhysics(gltf) {
    const { mat4, vec3, quat } = glMatrix;
    const gltfExt   = gltf.extensions || {};
    const shapeDefs = gltfExt.KHR_implicit_shapes?.shapes ?? [];
    const matDefs   = gltfExt.KHR_physics_rigid_bodies?.physicsMaterials ?? [];
    buildCollisionFilterTable(gltf);

    const worldRes = HK.HP_World_Create();
    checkResult(worldRes[0], 'HP_World_Create');
    physicsWorldId = worldRes[1];
    checkResult(HK.HP_World_SetGravity(physicsWorldId, [0, -9.8, 0]),  'HP_World_SetGravity');
    checkResult(HK.HP_World_SetIdealStepTime(physicsWorldId, 1 / 60),  'HP_World_SetIdealStepTime');

    // Build parent index map
    const parentMap = new Map();
    for (let i = 0; i < gltf.nodes.length; i++) {
        for (const child of (gltf.nodes[i].children || [])) parentMap.set(child, i);
    }

    // ---- First pass: compound bodies (motion present, no collider on root node) ----
    const excludedNodeIndices = new Set();
    for (let i = 0; i < gltf.nodes.length; i++) {
        const node    = gltf.nodes[i];
        const physExt = node.extensions?.KHR_physics_rigid_bodies;
        if (!physExt?.motion || physExt?.collider) continue; // not a compound root

        const childColliderIndices = [];
        collectDescendantColliders(gltf, i, childColliderIndices, excludedNodeIndices);
        if (childColliderIndices.length === 0) continue;

        if (typeof HK.HP_Shape_CreateContainer !== 'function') {
            console.warn('[WARN] HP_Shape_CreateContainer not available, skipping compound body:', node.name || i);
            continue;
        }

        const containerResult = HK.HP_Shape_CreateContainer();
        checkResult(containerResult[0], 'HP_Shape_CreateContainer');
        const containerShapeId = containerResult[1];

        const parentPos = vec3.create(), parentRot = quat.create();
        mat4.getTranslation(parentPos, node.worldTransform);
        mat4.getRotation(parentRot, node.worldTransform);
        const parentRotInv = quat.invert(quat.create(), parentRot);

        for (const childIdx of childColliderIndices) {
            const childNode     = gltf.nodes[childIdx];
            const childPhysExt  = childNode.extensions?.KHR_physics_rigid_bodies;
            const childGeom     = childPhysExt.collider.geometry;
            const childShapeIdx = childGeom.shape;
            const childMatDef   = childPhysExt.collider.physicsMaterial !== undefined
                ? matDefs[childPhysExt.collider.physicsMaterial] : null;

            const childWorldScale = vec3.create();
            mat4.getScaling(childWorldScale, childNode.worldTransform);

            let childShapeId;
            if (childShapeIdx === undefined) {
                const res = createMeshPhysicsShape(gltf, childNode, childGeom, null, childMatDef);
                if (!res) continue;
                childShapeId = res.shapeId;
            } else {
                const childShapeDef = shapeDefs[childShapeIdx];
                if (!childShapeDef) continue;
                childShapeId = createImplicitShapeFromDef(childShapeDef, childWorldScale, null, childMatDef);
                if (!childShapeId) continue;
            }
            applyCollisionFilterToShape(childShapeId, childPhysExt.collider);

            const childPos = vec3.create(), childRot = quat.create();
            mat4.getTranslation(childPos, childNode.worldTransform);
            mat4.getRotation(childRot, childNode.worldTransform);
            const relPos   = vec3.subtract(vec3.create(), childPos, parentPos);
            const localPos = vec3.transformQuat(vec3.create(), relPos, parentRotInv);
            const localRot = quat.normalize(quat.create(), quat.multiply(quat.create(), parentRotInv, childRot));
            HK.HP_Shape_AddChild(
                containerShapeId,
                childShapeId,
                [[localPos[0], localPos[1], localPos[2]],
                 [localRot[0], localRot[1], localRot[2], localRot[3]],
                 [1, 1, 1]]
            );
        }

        const motionDef    = physExt.motion;
        const isKinematic  = !!(motionDef.isKinematic);
        const motionType   = isKinematic ? HK.MotionType.KINEMATIC : HK.MotionType.DYNAMIC;
        const gravityFactor = motionDef.gravityFactor;
        const initPos = [parentPos[0], parentPos[1], parentPos[2]];
        const initRot = [parentRot[0], parentRot[1], parentRot[2], parentRot[3]];
        const bodyId  = createPhysicsBody(containerShapeId, motionType, initPos, initRot,
            !isKinematic, gravityFactor, motionDef);

        const worldScale = vec3.create();
        mat4.getScaling(worldScale, node.worldTransform);
        const parentInvWorldMat = mat4.create();
        const parentIdx = parentMap.get(i);
        if (parentIdx !== undefined) {
            mat4.invert(parentInvWorldMat, gltf.nodes[parentIdx].worldTransform);
        }
        const linearAxisLock  = motionDef.linearAxisLock  ?? 0;
        const angularAxisLock = motionDef.angularAxisLock ?? 0;
        const entry = { node, bodyId,
            worldScale: [worldScale[0], worldScale[1], worldScale[2]],
            initPos, initRot, parentInvWorldMat,
            linearAxisLock, angularAxisLock };
        if (!isKinematic) physicsNodesList.push(entry);
        if (!isKinematic) dynamicNodesList.push(entry);
    }

    // ---- Second pass: single-shape bodies (skip compound children) ----
    for (let i = 0; i < gltf.nodes.length; i++) {
        if (excludedNodeIndices.has(i)) continue;
        const node    = gltf.nodes[i];
        const physExt = node.extensions?.KHR_physics_rigid_bodies;
        if (!physExt?.collider?.geometry) continue;

        const shapeIndex = physExt.collider.geometry.shape;
        const motionDef  = physExt.motion ?? null;
        const matDef     = physExt.collider.physicsMaterial !== undefined
            ? matDefs[physExt.collider.physicsMaterial] : null;

        // World-space scale from pre-computed worldTransform
        const worldScale = vec3.create();
        mat4.getScaling(worldScale, node.worldTransform);

        let shapeId;

        if (shapeIndex === undefined) {
            // Mesh-based collider (convexHull or trimesh)
            const meshResult = createMeshPhysicsShape(gltf, node, physExt.collider.geometry, motionDef, matDef);
            if (!meshResult) continue;
            shapeId = meshResult.shapeId;
        } else {
            const shapeDef = shapeDefs[shapeIndex];
            if (!shapeDef) {
                console.warn(`Physics: shape index ${shapeIndex} not found on node ${i}, skipping.`);
                continue;
            }
            shapeId = createImplicitShapeFromDef(shapeDef, worldScale, motionDef, matDef);
            if (!shapeId) continue;
        }
        applyCollisionFilterToShape(shapeId, physExt.collider);

        // World-space initial pose
        const wPos = vec3.create(), wRot = quat.create();
        mat4.getTranslation(wPos, node.worldTransform);
        mat4.getRotation(wRot, node.worldTransform);
        const initPos = [wPos[0], wPos[1], wPos[2]];
        const initRot = [wRot[0], wRot[1], wRot[2], wRot[3]];

        const isKinematic   = !!(motionDef?.isKinematic);
        const motionType    = !motionDef          ? HK.MotionType.STATIC
                            : isKinematic         ? HK.MotionType.KINEMATIC
                            :                       HK.MotionType.DYNAMIC;
        const gravityFactor = motionDef?.gravityFactor;
        const bodyId = createPhysicsBody(shapeId, motionType, initPos, initRot,
            !!motionDef && !isKinematic, gravityFactor, motionDef);

        // Parent inverse world transform (static – valid for the whole simulation)
        const parentInvWorldMat = mat4.create(); // identity by default
        const parentIdx = parentMap.get(i);
        if (parentIdx !== undefined) {
            mat4.invert(parentInvWorldMat, gltf.nodes[parentIdx].worldTransform);
        }

        const linearAxisLock  = motionDef?.linearAxisLock  ?? 0;
        const angularAxisLock = motionDef?.angularAxisLock ?? 0;
        const debugShapeDef = shapeIndex !== undefined ? shapeDefs[shapeIndex] : null;
        const entry = { node, bodyId,
            worldScale: [worldScale[0], worldScale[1], worldScale[2]],
            initPos, initRot, parentInvWorldMat,
            linearAxisLock, angularAxisLock,
            shapeDef: debugShapeDef };
        if (!isKinematic) physicsNodesList.push(entry);
        if (motionDef && !isKinematic) dynamicNodesList.push(entry);
    }
}

function applyAxisLocks() {
    for (const entry of physicsNodesList) {
        const linLock = entry.linearAxisLock;
        const angLock = entry.angularAxisLock;
        if (!linLock && !angLock) continue;

        if (linLock) {
            const pRes = HK.HP_Body_GetPosition(entry.bodyId);
            checkResult(pRes[0], 'HP_Body_GetPosition (axisLock)');
            const pos = [pRes[1][0], pRes[1][1], pRes[1][2]];
            if (linLock & 1) pos[0] = entry.initPos[0];
            if (linLock & 2) pos[1] = entry.initPos[1];
            if (linLock & 4) pos[2] = entry.initPos[2];
            HK.HP_Body_SetPosition(entry.bodyId, pos);

            if (typeof HK.HP_Body_GetLinearVelocity === 'function') {
                const vRes = HK.HP_Body_GetLinearVelocity(entry.bodyId);
                const vel = [vRes[1][0], vRes[1][1], vRes[1][2]];
                if (linLock & 1) vel[0] = 0;
                if (linLock & 2) vel[1] = 0;
                if (linLock & 4) vel[2] = 0;
                HK.HP_Body_SetLinearVelocity(entry.bodyId, vel);
            }
        }

        if (angLock && typeof HK.HP_Body_GetAngularVelocity === 'function') {
            const vRes = HK.HP_Body_GetAngularVelocity(entry.bodyId);
            const vel = [vRes[1][0], vRes[1][1], vRes[1][2]];
            if (angLock & 1) vel[0] = 0;
            if (angLock & 2) vel[1] = 0;
            if (angLock & 4) vel[2] = 0;
            HK.HP_Body_SetAngularVelocity(entry.bodyId, vel);
        }
    }
}

function updatePhysicsTransforms() {
    const { mat4, vec3, quat } = glMatrix;
    for (const entry of physicsNodesList) {
        const pRes = HK.HP_Body_GetPosition(entry.bodyId);
        checkResult(pRes[0], 'HP_Body_GetPosition');
        const qRes = HK.HP_Body_GetOrientation(entry.bodyId);
        checkResult(qRes[0], 'HP_Body_GetOrientation');
        const p = pRes[1], r = qRes[1];

        // Rebuild world matrix: physics pos/rot + original scale
        const physWorldMat = mat4.fromRotationTranslationScale(
            mat4.create(),
            quat.fromValues(r[0], r[1], r[2], r[3]),
            vec3.fromValues(p[0], p[1], p[2]),
            vec3.fromValues(entry.worldScale[0], entry.worldScale[1], entry.worldScale[2])
        );
        // Convert to local space
        const localMat = mat4.multiply(mat4.create(), entry.parentInvWorldMat, physWorldMat);
        // Write back into node TRS (Float32Array in gltf-viewer)
        mat4.getTranslation(entry.node.translation, localMat);
        mat4.getRotation(entry.node.rotation,    localMat);
    }
}

function resetDynamicNodesIfNeeded() {
    for (const entry of dynamicNodesList) {
        const pRes = HK.HP_Body_GetPosition(entry.bodyId);
        checkResult(pRes[0], 'HP_Body_GetPosition');
        if (pRes[1][1] >= RESET_Y_THRESHOLD) continue;
        checkResult(HK.HP_Body_SetPosition(entry.bodyId,       entry.initPos),  'HP_Body_SetPosition');
        checkResult(HK.HP_Body_SetOrientation(entry.bodyId,    entry.initRot),  'HP_Body_SetOrientation');
        checkResult(HK.HP_Body_SetLinearVelocity(entry.bodyId,  [0, 0, 0]),     'HP_Body_SetLinearVelocity');
        checkResult(HK.HP_Body_SetAngularVelocity(entry.bodyId, [0, 0, 0]),     'HP_Body_SetAngularVelocity');
    }
}

// ---- Physics debug wireframe geometry helpers ----
function makeSphereLineVerts(r, segments = 32) {
    const v = [];
    for (let c = 0; c < 3; c++) {
        for (let i = 0; i < segments; i++) {
            const a0 = (i / segments) * Math.PI * 2;
            const a1 = ((i + 1) / segments) * Math.PI * 2;
            const c0 = Math.cos(a0) * r, s0 = Math.sin(a0) * r;
            const c1 = Math.cos(a1) * r, s1 = Math.sin(a1) * r;
            if      (c === 0) v.push(c0, s0, 0,  c1, s1, 0);
            else if (c === 1) v.push(c0, 0,  s0, c1, 0,  s1);
            else              v.push(0,  c0, s0, 0,  c1, s1);
        }
    }
    return new Float32Array(v);
}
function makeBoxLineVerts(sx, sy, sz) {
    const hx = sx / 2, hy = sy / 2, hz = sz / 2;
    const c = [
        [-hx,-hy,-hz], [hx,-hy,-hz], [hx,hy,-hz], [-hx,hy,-hz],
        [-hx,-hy, hz], [hx,-hy, hz], [hx,hy, hz], [-hx,hy, hz],
    ];
    const edges = [[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4],[1,5],[2,6],[3,7]];
    const v = [];
    for (const [a, b] of edges) v.push(...c[a], ...c[b]);
    return new Float32Array(v);
}
function makeCapsuleLineVerts(radius, halfHeight, segments = 32) {
    const v = [];
    for (let s = 0; s < 2; s++) {
        const y = s === 0 ? -halfHeight : halfHeight;
        for (let i = 0; i < segments; i++) {
            const a0 = (i / segments) * Math.PI * 2, a1 = ((i + 1) / segments) * Math.PI * 2;
            v.push(Math.cos(a0)*radius, y, Math.sin(a0)*radius, Math.cos(a1)*radius, y, Math.sin(a1)*radius);
        }
    }
    for (let i = 0; i < 4; i++) {
        const a = (i / 4) * Math.PI * 2;
        v.push(Math.cos(a)*radius, -halfHeight, Math.sin(a)*radius, Math.cos(a)*radius, halfHeight, Math.sin(a)*radius);
    }
    const half = segments / 2;
    for (let s = 0; s < 2; s++) {
        const sign = s === 0 ? -1 : 1, yOff = sign * halfHeight, baseAng = sign < 0 ? Math.PI : 0;
        for (let plane = 0; plane < 2; plane++) {
            for (let i = 0; i < half; i++) {
                const a0 = baseAng + (i / half) * Math.PI, a1 = baseAng + ((i + 1) / half) * Math.PI;
                const c0 = Math.cos(a0)*radius, s0 = Math.sin(a0)*radius;
                const c1 = Math.cos(a1)*radius, s1 = Math.sin(a1)*radius;
                if (plane === 0) v.push(c0, yOff + s0, 0, c1, yOff + s1, 0);
                else             v.push(0, yOff + s0, c0, 0, yOff + s1, c1);
            }
        }
    }
    return new Float32Array(v);
}
function makeCylinderLineVerts(radius, halfHeight, segments = 32) {
    const v = [];
    for (let s = 0; s < 2; s++) {
        const y = s === 0 ? -halfHeight : halfHeight;
        for (let i = 0; i < segments; i++) {
            const a0 = (i / segments) * Math.PI * 2, a1 = ((i + 1) / segments) * Math.PI * 2;
            v.push(Math.cos(a0)*radius, y, Math.sin(a0)*radius, Math.cos(a1)*radius, y, Math.sin(a1)*radius);
        }
    }
    for (let i = 0; i < 4; i++) {
        const a = (i / 4) * Math.PI * 2;
        v.push(Math.cos(a)*radius, -halfHeight, Math.sin(a)*radius, Math.cos(a)*radius, halfHeight, Math.sin(a)*radius);
    }
    return new Float32Array(v);
}
function buildDebugVertsForEntry(entry) {
    const sd = entry.shapeDef;
    if (sd?.sphere)  return makeSphereLineVerts(sd.sphere.radius ?? 1.0);
    if (sd?.box)     return makeBoxLineVerts(...(sd.box.size ?? [1, 1, 1]));
    if (sd?.capsule) {
        const r = sd.capsule.radiusTop ?? sd.capsule.radius ?? 0.5;
        const h = (sd.capsule.height ?? 1.0) / 2;
        return makeCapsuleLineVerts(r, h);
    }
    if (sd?.cylinder) {
        const r = Math.max(sd.cylinder.radiusTop ?? sd.cylinder.radius ?? 0.5,
                           sd.cylinder.radiusBottom ?? sd.cylinder.radius ?? 0.5);
        const h = (sd.cylinder.height ?? 1.0) / 2;
        return makeCylinderLineVerts(r, h);
    }
    return makeSphereLineVerts(0.5);
}
function initPhysicsDebugCanvas(mainCanvas) {
    physicsDebugCanvas = document.createElement('canvas');
    physicsDebugCanvas.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none';
    physicsDebugCanvas.width  = mainCanvas.width;
    physicsDebugCanvas.height = mainCanvas.height;
    mainCanvas.parentElement.appendChild(physicsDebugCanvas);
    const gl = physicsDebugGl = physicsDebugCanvas.getContext('webgl2');
    if (!gl) { console.warn('[debug] WebGL2 not available for debug overlay'); return; }
    const vs = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vs, `#version 300 es\nin vec3 aPos; uniform mat4 uMVP;\nvoid main(){gl_Position=uMVP*vec4(aPos,1.0);}`);
    gl.compileShader(vs);
    const fs = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fs, `#version 300 es\nprecision mediump float; uniform vec4 uColor; out vec4 o;\nvoid main(){o=uColor;}`);
    gl.compileShader(fs);
    physicsDebugProg = gl.createProgram();
    gl.attachShader(physicsDebugProg, vs); gl.attachShader(physicsDebugProg, fs);
    gl.linkProgram(physicsDebugProg);
    gl.deleteShader(vs); gl.deleteShader(fs);
    if (!gl.getProgramParameter(physicsDebugProg, gl.LINK_STATUS)) {
        console.warn('[debug] shader link error:', gl.getProgramInfoLog(physicsDebugProg));
        physicsDebugProg = null; return;
    }
    physicsDebugVbo = gl.createBuffer();
    console.log('[debug] physics wireframe overlay ready');
}
function drawPhysicsDebug() {
    if (!physicsDebugGl || !physicsDebugProg || !physicsDebugVbo) return;
    const { mat4, quat, vec3 } = glMatrix;
    const gl = physicsDebugGl;
    const w = physicsDebugCanvas.width = canvas.width;
    const h = physicsDebugCanvas.height = canvas.height;
    gl.viewport(0, 0, w, h);
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    if (!physicsDebugEnabled || !HK || !physicsWorldId) return;
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.enable(gl.DEPTH_TEST);
    gl.useProgram(physicsDebugProg);
    const aPos   = gl.getAttribLocation(physicsDebugProg, 'aPos');
    const uMVP   = gl.getUniformLocation(physicsDebugProg, 'uMVP');
    const uColor = gl.getUniformLocation(physicsDebugProg, 'uColor');
    const aspect = w / h;
    const viewMat = state.userCamera.getViewMatrix();
    const projMat = state.userCamera.getProjectionMatrix(aspect);
    const vp = mat4.multiply(mat4.create(), projMat, viewMat);
    gl.bindBuffer(gl.ARRAY_BUFFER, physicsDebugVbo);
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 3, gl.FLOAT, false, 0, 0);
    function drawEntry(verts, colorIdx, p, r) {
        const modelMat = mat4.fromRotationTranslation(mat4.create(),
            quat.fromValues(r[0], r[1], r[2], r[3]),
            vec3.fromValues(p[0], p[1], p[2]));
        const mvp = mat4.multiply(mat4.create(), vp, modelMat);
        gl.uniformMatrix4fv(uMVP, false, mvp);
        gl.uniform4fv(uColor, PHYSICS_DEBUG_COLORS[colorIdx % PHYSICS_DEBUG_COLORS.length]);
        gl.bufferData(gl.ARRAY_BUFFER, verts, gl.DYNAMIC_DRAW);
        gl.drawArrays(gl.LINES, 0, verts.length / 3);
    }
    for (let i = 0; i < physicsNodesList.length; i++) {
        const entry = physicsNodesList[i];
        const pr = HK.HP_Body_GetPosition(entry.bodyId);
        const qr = HK.HP_Body_GetOrientation(entry.bodyId);
        if (pr[0] !== HK.Result.RESULT_OK || qr[0] !== HK.Result.RESULT_OK) continue;
        if (!entry.debugVerts) entry.debugVerts = buildDebugVertsForEntry(entry);
        drawEntry(entry.debugVerts, i, pr[1], qr[1]);
    }
    gl.disableVertexAttribArray(aPos);
}

// GUI
let gui = new dat.GUI();

var obj = {
	ROTATE: false,
	CAMERA: "",
	IBL: true,
	PHYSICS_DEBUG: true,
	VARIANT: ""
}
let guiRotate = gui.add(obj, 'ROTATE').name('Rotate');
let guiIBL    = gui.add(obj, 'IBL').name('IBL');
let guiPhysicsDebug = gui.add(obj, 'PHYSICS_DEBUG').name('Physics Debug');
let guiCameras = null;
let guiVariantNames = null;
const initialModelInfo = getInitialModelInfo();
const dropZone = document.getElementById('dropZone');
const dropZoneMessage = document.getElementById('dropZoneMessage');
const fileInput = document.getElementById('fileInput');
let currentObjectUrls = [];

function setDropZoneMessage(message, isError) {
    dropZoneMessage.textContent = message;
    dropZone.classList.toggle('error', !!isError);
}

function showDropZone(message, isError) {
    if (message) {
        setDropZoneMessage(message, isError);
    }
    dropZone.classList.remove('hidden');
}

function hideDropZone() {
    dropZone.classList.add('hidden');
    dropZone.classList.remove('dragover');
    dropZone.classList.remove('error');
}

function revokeCurrentObjectUrls() {
    currentObjectUrls.forEach(function(url) {
        URL.revokeObjectURL(url);
    });
    currentObjectUrls = [];
}

function getFileExtension(name) {
    const lastDot = name.lastIndexOf('.');
    return lastDot >= 0 ? name.slice(lastDot).toLowerCase() : '';
}

function isExternalUri(uri) {
    return uri
        && !uri.startsWith('data:')
        && !uri.startsWith('blob:')
        && !/^[a-z]+:/i.test(uri);
}

function getBasename(path) {
    return path.split('/').pop();
}

function createTrackedObjectUrl(fileOrBlob, objectUrls) {
    const url = URL.createObjectURL(fileOrBlob);
    objectUrls.push(url);
    return url;
}

async function createDroppedModelSource(fileList) {
    const files = Array.from(fileList);
    const modelFile = files.find(function(file) {
        const extension = getFileExtension(file.name);
        return extension === '.glb' || extension === '.gltf';
    });

    if (!modelFile) {
        throw new Error('Please drop a .glb or .gltf file.');
    }

    const fileMap = new Map();
    files.forEach(function(file) {
        fileMap.set(file.name, file);
        fileMap.set(getBasename(file.name), file);
        if (file.webkitRelativePath) {
            fileMap.set(file.webkitRelativePath, file);
            fileMap.set(getBasename(file.webkitRelativePath), file);
        }
    });

    const objectUrls = [];
    const resourceUrls = new Map();

    if (getFileExtension(modelFile.name) === '.glb') {
        return {
            url: createTrackedObjectUrl(modelFile, objectUrls),
            displayName: modelFile.name,
            objectUrls: objectUrls,
        };
    }

    const gltfJson = JSON.parse(await modelFile.text());

    function resolveObjectUrl(uri) {
        if (!isExternalUri(uri)) {
            return uri;
        }
        const decodedUri = decodeURIComponent(uri);
        const file = fileMap.get(decodedUri) || fileMap.get(getBasename(decodedUri));
        if (!file) {
            return uri;
        }
        if (!resourceUrls.has(file)) {
            resourceUrls.set(file, createTrackedObjectUrl(file, objectUrls));
        }
        return resourceUrls.get(file);
    }

    if (Array.isArray(gltfJson.buffers)) {
        gltfJson.buffers.forEach(function(buffer) {
            if (buffer.uri) buffer.uri = resolveObjectUrl(buffer.uri);
        });
    }
    if (Array.isArray(gltfJson.images)) {
        gltfJson.images.forEach(function(image) {
            if (image.uri) image.uri = resolveObjectUrl(image.uri);
        });
    }

    const gltfBlob = new Blob([JSON.stringify(gltfJson)], { type: 'model/gltf+json' });
    return {
        url: createTrackedObjectUrl(gltfBlob, objectUrls),
        displayName: modelFile.name,
        objectUrls: objectUrls,
    };
}

function buildModelSourceFromInfo(modelInfo) {
    let url = "../../" + modelInfo.category + "/" + modelInfo.path;
    if (modelInfo.url) {
        url = modelInfo.url;
    }
    return {
        modelInfo: modelInfo,
        url: url,
    };
}

function clearModelControls() {
    obj.CAMERA = "";
    obj.VARIANT = "";
    if (guiCameras) {
        gui.remove(guiCameras);
        guiCameras = null;
    }
    if (guiVariantNames) {
        gui.remove(guiVariantNames);
        guiVariantNames = null;
    }
}

async function applyLoadedGltf(gltf) {
    resizeCanvas();
    console.log('model loaded');
    state.gltf = gltf;
    const defaultScene = state.gltf.scene;
    state.sceneIndex = defaultScene === undefined ? 0 : defaultScene;
    state.cameraIndex = undefined;

    if (state.gltf.cameras.length > 0) {
        let cameraNames = ["User Camera"].concat(state.gltf.cameras.map((value, index) => "camera" + index));
        obj.CAMERA = cameraNames[0];
        guiCameras = gui.add(obj, 'CAMERA', cameraNames).name("Camera");
        guiCameras.onChange(function(value) {
            if (value === "User Camera") {
                state.cameraIndex = undefined;
            } else {
                const selectedIndex = cameraNames.indexOf(value) - 1;
                state.cameraIndex = selectedIndex;
            }
        });
    } else {
        state.cameraIndex = undefined;
    }

    if (state.gltf.scenes.length !== 0) {
        if (state.sceneIndex > state.gltf.scenes.length - 1) {
            state.sceneIndex = 0;
        }
        const scene = state.gltf.scenes[state.sceneIndex];
        scene.applyTransformHierarchy(state.gltf);
        state.userCamera.aspectRatio = canvas.width / canvas.height;
        state.userCamera.fitViewToScene(state.gltf, state.sceneIndex);

        state.animationIndices = [];
        for (let i = 0; i < gltf.animations.length; i++) {
            if (!gltf.nonDisjointAnimations(state.animationIndices).includes(i)) {
                state.animationIndices.push(i);
            }
        }
        state.animationTimer.start();
    }

    resetPhysicsState();
    if (state.gltf?.extensions &&
        (state.gltf.extensions.KHR_physics_rigid_bodies || state.gltf.extensions.KHR_implicit_shapes) &&
        typeof HavokPhysics !== 'undefined') {
        HK = await HavokPhysics({
            locateFile: (path) => path.endsWith('.wasm') ? HAVOK_WASM_URL : path
        });
        initPhysics(state.gltf);
        if (!physicsDebugCanvas) {
            initPhysicsDebugCanvas(canvas);
        }
    }
    hideDropZone();
}

async function loadModelSource(modelSource) {
    clearModelControls();
    resetPhysicsState();
    revokeCurrentObjectUrls();
    currentObjectUrls = modelSource.objectUrls || [];
    showDropZone('Loading model...');
    try {
        const gltf = await resourceLoader.loadGltf(modelSource.url);
        await applyLoadedGltf(gltf);
    } catch (error) {
        if (modelSource.objectUrls) {
            modelSource.objectUrls.forEach(function(url) {
                URL.revokeObjectURL(url);
            });
        }
        console.error(error);
        showDropZone('Failed to load model: ' + (error.message || error), true);
    }
}

let isRotating = false;
guiRotate.onChange(function (value) {
    isRotating = value;
});
guiPhysicsDebug.onChange(function(value) {
    physicsDebugEnabled = value;
});

const canvas = document.getElementById('canvas');
const context = canvas.getContext('webgl2', {
    alpha: false,
    antialias: true
});

const dracoLib = undefined;
const ktxLib = undefined;
const libPath = "../../libs/khronos-gltf-rv/1.1.0/libs/";

const view = new GltfView(context);
//const resourceLoader = view.createResourceLoader();
const resourceLoader = view.createResourceLoader(dracoLib, ktxLib, libPath);
const state = view.createState();

const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    state.userCamera.aspectRatio = canvas.width / canvas.height;
};

const hdrFile = 'https://cx20.github.io/gltf-test/textures/hdr/papermill.hdr';
//const lurFile = {lut_sheen_E_file: 'https://github.khronos.org/glTF-Sample-Viewer-Release/assets/images/lut_sheen_E.png'};
const lurFile = {lut_sheen_E_file: '../../libs/khronos-gltf-rv/1.1.0/assets/lut_sheen_E.png'};

await resourceLoader
    .loadEnvironment(hdrFile, lurFile)
    .then((environment) => {
        console.log('environment loaded');
        state.environment = environment;
        state.renderingParameters.blurEnvironmentMap = false;

        guiIBL.onChange(function(value) {
            state.environment = value ? environment : undefined;
        });
    });

if (initialModelInfo) {
    await loadModelSource(buildModelSourceFromInfo(initialModelInfo));
} else {
    showDropZone('Drag & drop a .glb or .gltf model here, or click to choose files.');
}

let angle = 0;
const update = () => {
    if (HK && physicsWorldId) {
        checkResult(HK.HP_World_Step(physicsWorldId, 1 / 60), 'HP_World_Step');
        applyAxisLocks();
        resetDynamicNodesIfNeeded();
        updatePhysicsTransforms();
    }

    view.renderFrame(state, canvas.clientWidth, canvas.clientHeight);
    drawPhysicsDebug();

    if (isRotating) {
        const rotationSpeed = 2;
        state.userCamera.orbit(rotationSpeed, 0);
    }
    
    window.requestAnimationFrame(update);
};

window.addEventListener('resize', resizeCanvas);

window.requestAnimationFrame(update);

function handleDragEvent(event) {
    event.preventDefault();
    event.stopPropagation();
}

function setDragActive(isActive) {
    dropZone.classList.toggle('dragover', isActive);
    if (isActive) {
        setDropZoneMessage('Drop glTF/glb files here');
        dropZone.classList.remove('hidden');
    } else if (!state.gltf) {
        showDropZone('Drag & drop a .glb or .gltf model here, or click to choose files.');
    } else {
        hideDropZone();
    }
}

async function handleModelFiles(fileList) {
    if (!fileList || fileList.length === 0) {
        return;
    }
    try {
        const modelSource = await createDroppedModelSource(fileList);
        await loadModelSource(modelSource);
    } catch (error) {
        console.error(error);
        showDropZone('Failed to load model: ' + (error.message || error), true);
    }
}

function setupDropZone() {
    dropZone.addEventListener('click', function() {
        fileInput.click();
    });
    dropZone.addEventListener('dragenter', function(event) {
        handleDragEvent(event);
        setDragActive(true);
    });
    dropZone.addEventListener('dragover', function(event) {
        handleDragEvent(event);
        setDragActive(true);
    });
    dropZone.addEventListener('dragleave', function(event) {
        handleDragEvent(event);
        if (event.target === dropZone) {
            setDragActive(false);
        }
    });
    dropZone.addEventListener('drop', async function(event) {
        handleDragEvent(event);
        setDragActive(false);
        await handleModelFiles(event.dataTransfer.files);
    });
    fileInput.addEventListener('change', async function(event) {
        await handleModelFiles(event.target.files);
        fileInput.value = '';
    });
    document.addEventListener('dragenter', function(event) {
        handleDragEvent(event);
        setDragActive(true);
    });
    document.addEventListener('dragover', handleDragEvent);
    document.addEventListener('drop', async function(event) {
        handleDragEvent(event);
        setDragActive(false);
        await handleModelFiles(event.dataTransfer.files);
    });
}

setupDropZone();

let isDragging = false;
let previousMousePosition = { x: 0, y: 0 };

canvas.addEventListener('mousedown', (event) => {
    isDragging = true;
    previousMousePosition.x = event.clientX;
    previousMousePosition.y = event.clientY;
});

canvas.addEventListener('mouseup', () => {
    isDragging = false;
});

canvas.addEventListener('mousemove', (event) => {
    if (!isDragging) return;

    const deltaX = event.clientX - previousMousePosition.x;
    const deltaY = event.clientY - previousMousePosition.y;

    state.userCamera.orbit(deltaX, deltaY);

    previousMousePosition.x = event.clientX;
    previousMousePosition.y = event.clientY;
});

canvas.addEventListener('wheel', (event) => {
    const deltaZoom = event.deltaY * -0.01;
    state.userCamera.zoomBy(deltaZoom);
});

