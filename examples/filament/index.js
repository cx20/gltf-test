// ---- Physics (Havok / KHR_physics_rigid_bodies) ----
const HAVOK_WASM_URL      = 'https://cx20.github.io/gltf-test/libs/babylonjs/dev/HavokPhysics.wasm';
const RESET_Y_THRESHOLD   = -20;
const IDENTITY_QUATERNION = [0, 0, 0, 1];

let HK = null;
let physicsWorldId = null;
let physicsFilamentEngine = null;
let physicsFilamentScene = null;    // unused (kept for signature compat)
let physicsFilamentAsset = null;    // reference to the asset for entity enumeration
let physicsModelScale = 1.0;  // mirror of the display scale passed to initPhysicsFromUrl
const physicsNodesList = [];   // all non-kinematic bodies needing transform sync
const dynamicNodesList = [];   // subset needing Y-reset
const physicsStaticBodies = []; // static bodies for diagnostic logging

function resetPhysicsState() {
    physicsWorldId = null;
    physicsFilamentEngine = null;
    physicsFilamentScene = null;
    physicsFilamentAsset = null;
    physicsModelScale = 1.0;
    physicsNodesList.length = 0;
    dynamicNodesList.length = 0;
    physicsStaticBodies.length = 0;
}

// ---- Physics debug wireframe overlay ----
let physicsDebugCanvas = null;
let physicsDebugGl     = null;
let physicsDebugProg   = null;
let physicsDebugVbo    = null;
let physicsDebugEnabled = true; // set to false to hide overlay

const PHYSICS_DEBUG_COLORS = [
    [1.0, 0.25, 0.25, 1.0],  // [0] sphere1 = red
    [0.25, 0.75, 1.0, 1.0],  // [1] sphere2 = cyan
    [0.25, 1.0, 0.25, 1.0],  // [2] floor   = green
    [1.0, 1.0, 0.25, 1.0],   // [3] extra   = yellow
];

// --- Havok helpers (mirrored from khronos-gltf-rv) ---
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
    const df = materialDef.dynamicFriction ?? 0.5;
    const sf = materialDef.staticFriction  ?? 0.5;
    const re = materialDef.restitution     ?? 0.0;
    const combineMap = {
        'minimum': HK.MaterialCombine.MINIMUM, 'maximum': HK.MaterialCombine.MAXIMUM,
        'multiply': HK.MaterialCombine.MULTIPLY,
        'average': HK.MaterialCombine.ARITHMETIC_MEAN ?? HK.MaterialCombine.MINIMUM,
    };
    const frictionCombine    = combineMap[materialDef.frictionCombine]    ?? HK.MaterialCombine.MINIMUM;
    const restitutionCombine = combineMap[materialDef.restitutionCombine] ?? HK.MaterialCombine.MAXIMUM;
    HK.HP_Shape_SetMaterial(shapeId, [df, sf, re, frictionCombine, restitutionCombine]);
}

// ---- KHR_physics_rigid_bodies collision filter ----
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

// Extract rotation quaternion from a transform matrix that may have non-uniform scale.
// gl-matrix's mat4.getRotation produces wrong results when columns have different
// magnitudes, so we normalize each basis column first.
function getRotationFromMat(out, mat) {
    const sx = Math.hypot(mat[0], mat[1], mat[2])  || 1;
    const sy = Math.hypot(mat[4], mat[5], mat[6])  || 1;
    const sz = Math.hypot(mat[8], mat[9], mat[10]) || 1;
    const m = [
        mat[0]/sx, mat[1]/sx, mat[2]/sx, 0,
        mat[4]/sy, mat[5]/sy, mat[6]/sy, 0,
        mat[8]/sz, mat[9]/sz, mat[10]/sz, 0,
        0, 0, 0, 1,
    ];
    return mat4.getRotation(out, m);
}

// Build world transforms for all nodes in the glTF JSON.
// Returns an array of Float32Array(16) (column-major mat4), indexed by node index.
function buildWorldTransforms(gltfJson) {
    const nodes = gltfJson.nodes ?? [];
    const worldMats = nodes.map(() => mat4.create());
    // Build parent map
    const parentMap = new Map();
    for (let i = 0; i < nodes.length; i++) {
        for (const c of (nodes[i].children ?? [])) parentMap.set(c, i);
    }
    // Topological sort via DFS from roots
    const scenes = gltfJson.scenes ?? [];
    const sceneIdx = gltfJson.scene ?? 0;
    const roots = scenes[sceneIdx]?.nodes ?? [];
    function computeNode(i, parentMat) {
        const n = nodes[i];
        const local = mat4.create();
        if (n.matrix) {
            mat4.set(local, ...n.matrix);
        } else {
            const t = n.translation ?? [0,0,0];
            const r = n.rotation    ?? [0,0,0,1];
            const s = n.scale       ?? [1,1,1];
            mat4.fromRotationTranslationScale(local,
                quat.fromValues(r[0], r[1], r[2], r[3]),
                vec3.fromValues(t[0], t[1], t[2]),
                vec3.fromValues(s[0], s[1], s[2]));
        }
        mat4.multiply(worldMats[i], parentMat, local);
        for (const c of (n.children ?? [])) computeNode(c, worldMats[i]);
    }
    for (const r of roots) computeNode(r, mat4.create());
    return worldMats;
}

function createMeshPhysicsShapeFromJson(gltfJson, accessors, nodeWorldMat, geomDef, motionDef, matDef) {
    const isConvex = !!geomDef.convexHull;
    let meshIndex   = geomDef.mesh;
    if (meshIndex === undefined && geomDef.node !== undefined) {
        const rn = gltfJson.nodes[geomDef.node];
        if (rn?.mesh !== undefined) meshIndex = rn.mesh;
    }
    if (meshIndex === undefined) { console.warn('Physics: mesh collider has no mesh reference, skipping.'); return null; }
    const meshDef = gltfJson.meshes[meshIndex];
    const worldScale = vec3.create();
    mat4.getScaling(worldScale, nodeWorldMat);
    const allPositions = [], allIndices = [], wireIndices = [];
    let vertexOffset = 0;
    for (const prim of meshDef.primitives) {
        const posAcc  = prim.attributes.POSITION;
        const posData = accessors[posAcc];
        for (let j = 0; j < posData.length; j += 3) {
            allPositions.push(posData[j]*worldScale[0], posData[j+1]*worldScale[1], posData[j+2]*worldScale[2]);
        }
        // Triangle indices for wireframe (always collected, regardless of isConvex)
        const primIndices = [];
        if (prim.indices !== undefined) {
            const idxData = accessors[prim.indices];
            for (let j = 0; j < idxData.length; j++) primIndices.push(idxData[j] + vertexOffset);
        } else {
            const vc = posData.length / 3;
            for (let j = 0; j+2 < vc; j+=3) primIndices.push(vertexOffset+j, vertexOffset+j+1, vertexOffset+j+2);
        }
        for (const k of primIndices) wireIndices.push(k);
        // Trimesh shape uses the same indices
        if (!isConvex) for (const k of primIndices) allIndices.push(k);
        vertexOffset += posData.length / 3;
    }
    if (!isConvex && !motionDef) {
        const base = allIndices.length;
        for (let j = 0; j+2 < base; j+=3) allIndices.push(allIndices[j], allIndices[j+2], allIndices[j+1]);
    }
    const posFloat32  = new Float32Array(allPositions);
    const numVertices = allPositions.length / 3;
    let shapeId;
    if (typeof HK._malloc === 'function' && HK.HEAPU8) {
        const posBytes = posFloat32.byteLength, posOffset = HK._malloc(posBytes);
        new Float32Array(HK.HEAPU8.buffer, posOffset, posFloat32.length).set(posFloat32);
        try {
            if (isConvex) {
                const c = HK.HP_Shape_CreateConvexHull(posOffset, numVertices);
                checkResult(c[0], 'HP_Shape_CreateConvexHull'); shapeId = c[1];
            } else {
                const triOffset = HK._malloc(allIndices.length * 4);
                const triView   = new Int32Array(HK.HEAPU8.buffer, triOffset, allIndices.length);
                for (let j = 0; j < allIndices.length; j++) triView[j] = allIndices[j];
                try {
                    const c = HK.HP_Shape_CreateMesh(posOffset, numVertices, triOffset, allIndices.length/3);
                    checkResult(c[0], 'HP_Shape_CreateMesh'); shapeId = c[1];
                } finally { HK._free(triOffset); }
            }
        } finally { HK._free(posOffset); }
    } else {
        if (isConvex) {
            const c = HK.HP_Shape_CreateConvexHull(posFloat32); checkResult(c[0], 'HP_Shape_CreateConvexHull'); shapeId = c[1];
        } else {
            const c = HK.HP_Shape_CreateMesh(posFloat32, new Uint32Array(allIndices)); checkResult(c[0], 'HP_Shape_CreateMesh'); shapeId = c[1];
        }
    }
    if (typeof shapeId === 'bigint') shapeId = Number(shapeId);
    if (!shapeId || shapeId <= 0) {
        console.warn('Physics: mesh shape failed, using bounding box fallback.');
        let minX=Infinity, minY=Infinity, minZ=Infinity, maxX=-Infinity, maxY=-Infinity, maxZ=-Infinity;
        for (let j=0; j<allPositions.length; j+=3) {
            minX=Math.min(minX,allPositions[j]); maxX=Math.max(maxX,allPositions[j]);
            minY=Math.min(minY,allPositions[j+1]); maxY=Math.max(maxY,allPositions[j+1]);
            minZ=Math.min(minZ,allPositions[j+2]); maxZ=Math.max(maxZ,allPositions[j+2]);
        }
        // HP_Shape_CreateBox takes full extents (not half-extents)
        const fb = HK.HP_Shape_CreateBox([0,0,0], IDENTITY_QUATERNION, [maxX-minX, maxY-minY, maxZ-minZ]);
        checkResult(fb[0], 'HP_Shape_CreateBox (fallback)'); shapeId = fb[1];
        if (typeof shapeId === 'bigint') shapeId = Number(shapeId);
    }
    let minX=Infinity, minY=Infinity, minZ=Infinity, maxX=-Infinity, maxY=-Infinity, maxZ=-Infinity;
    for (let j=0; j<allPositions.length; j+=3) {
        minX=Math.min(minX,allPositions[j]); maxX=Math.max(maxX,allPositions[j]);
        minY=Math.min(minY,allPositions[j+1]); maxY=Math.max(maxY,allPositions[j+1]);
        minZ=Math.min(minZ,allPositions[j+2]); maxZ=Math.max(maxZ,allPositions[j+2]);
    }
    const bbVol = Math.max((maxX-minX)*(maxY-minY)*(maxZ-minZ), 0.0001);
    if (motionDef) {
        const density = (motionDef.mass !== undefined && motionDef.mass > 0) ? motionDef.mass / bbVol : 1;
        checkResult(HK.HP_Shape_SetDensity(shapeId, density), 'HP_Shape_SetDensity');
    }
    applyPhysicsMaterial(shapeId, matDef);
    // Build wireframe edge list from triangles for debug display.
    const edgeVerts = [];
    for (let j = 0; j + 2 < wireIndices.length; j += 3) {
        const a = wireIndices[j] * 3, b = wireIndices[j+1] * 3, c = wireIndices[j+2] * 3;
        edgeVerts.push(allPositions[a], allPositions[a+1], allPositions[a+2],
                       allPositions[b], allPositions[b+1], allPositions[b+2]);
        edgeVerts.push(allPositions[b], allPositions[b+1], allPositions[b+2],
                       allPositions[c], allPositions[c+1], allPositions[c+2]);
        edgeVerts.push(allPositions[c], allPositions[c+1], allPositions[c+2],
                       allPositions[a], allPositions[a+1], allPositions[a+2]);
    }
    return {
        shapeId,
        aabb: { min: [minX, minY, minZ], max: [maxX, maxY, maxZ] },
        meshVerts: edgeVerts.length > 0 ? new Float32Array(edgeVerts) : null,
    };
}

function createImplicitShapeFromDef(shapeDef, worldScale, motionDef, matDef) {
    let shapeId;
    if (shapeDef.sphere) {
        const r = shapeDef.sphere.radius * Math.max(worldScale[0], worldScale[1], worldScale[2]);
        const c = HK.HP_Shape_CreateSphere([0,0,0], r); checkResult(c[0], 'HP_Shape_CreateSphere'); shapeId = c[1];
        if (motionDef) { const vol = Math.max(4/3*Math.PI*r**3, 0.0001); checkResult(HK.HP_Shape_SetDensity(shapeId, motionDef.mass!=null ? motionDef.mass/vol : 1), 'SetDensity'); }
    } else if (shapeDef.capsule) {
        const rt = shapeDef.capsule.radiusTop ?? shapeDef.capsule.radius ?? 0.5;
        const rb = shapeDef.capsule.radiusBottom ?? shapeDef.capsule.radius ?? 0.5;
        const r  = (rt+rb)/2 * Math.max(worldScale[0], worldScale[2]);
        const hh = (shapeDef.capsule.height ?? 1.0) * worldScale[1] / 2;
        const c  = HK.HP_Shape_CreateCapsule([0,-hh,0], [0,hh,0], r); checkResult(c[0], 'HP_Shape_CreateCapsule'); shapeId = c[1];
        if (motionDef) { const vol = Math.max(Math.PI*r**2*hh*2 + 4/3*Math.PI*r**3, 0.0001); checkResult(HK.HP_Shape_SetDensity(shapeId, motionDef.mass!=null ? motionDef.mass/vol : 1), 'SetDensity'); }
    } else if (shapeDef.cylinder) {
        const rt = shapeDef.cylinder.radiusTop    ?? shapeDef.cylinder.radius ?? 0.5;
        const rb = shapeDef.cylinder.radiusBottom ?? shapeDef.cylinder.radius ?? 0.5;
        const r  = Math.max(rt,rb) * Math.max(worldScale[0], worldScale[2]);
        const hh = (shapeDef.cylinder.height ?? 1.0) * worldScale[1] / 2;
        let c;
        if (typeof HK.HP_Shape_CreateCylinder === 'function') {
            c = HK.HP_Shape_CreateCylinder([0,-hh,0], [0,hh,0], r); checkResult(c[0], 'HP_Shape_CreateCylinder');
        } else {
            c = HK.HP_Shape_CreateBox([0,0,0], IDENTITY_QUATERNION, [r*2, hh*2, r*2]); checkResult(c[0], 'HP_Shape_CreateBox (cyl)');
        }
        shapeId = c[1];
        if (motionDef) { const vol = Math.max(Math.PI*r**2*hh*2, 0.0001); checkResult(HK.HP_Shape_SetDensity(shapeId, motionDef.mass!=null ? motionDef.mass/vol : 1), 'SetDensity'); }
    } else if (shapeDef.box) {
        const bs = shapeDef.box.size ?? [1,1,1];
        // HP_Shape_CreateBox takes full extents (verified against khronos-gltf-rv reference)
        const sz = [Math.abs(bs[0]*worldScale[0]), Math.abs(bs[1]*worldScale[1]), Math.abs(bs[2]*worldScale[2])];
        const c  = HK.HP_Shape_CreateBox([0,0,0], IDENTITY_QUATERNION, sz); checkResult(c[0], 'HP_Shape_CreateBox'); shapeId = c[1];
        if (motionDef) { const vol = Math.max(sz[0]*sz[1]*sz[2], 0.0001); checkResult(HK.HP_Shape_SetDensity(shapeId, motionDef.mass!=null ? motionDef.mass/vol : 1), 'SetDensity'); }
    } else {
        console.warn('Physics: unsupported implicit shape type:', shapeDef?.type); return null;
    }
    applyPhysicsMaterial(shapeId, matDef);
    return shapeId;
}

function applyMotionMassProperties(bodyId, motionDef) {
    if (!motionDef) return;
    if (typeof HK.HP_Body_GetMassProperties !== 'function' ||
        typeof HK.HP_Body_SetMassProperties !== 'function') return;
    const hasMass = motionDef.mass !== undefined;
    const hasDiag = Array.isArray(motionDef.inertiaDiagonal);
    const hasOrient = Array.isArray(motionDef.inertiaOrientation);
    const hasCom  = Array.isArray(motionDef.centerOfMass);
    if (!hasMass && !hasDiag && !hasOrient && !hasCom) return;
    const mpRes = HK.HP_Body_GetMassProperties(bodyId);
    checkResult(mpRes[0], 'HP_Body_GetMassProperties');
    const mp = mpRes[1]; let changed = false;
    if (Array.isArray(mp)) {
        let vec3Count = 0;
        for (let i = 0; i < mp.length; i++) {
            const slot = mp[i];
            if (!Array.isArray(slot)) { if (hasMass) { mp[i] = motionDef.mass; changed = true; } continue; }
            if (slot.length === 4 && hasOrient) {
                slot[0]=motionDef.inertiaOrientation[0]; slot[1]=motionDef.inertiaOrientation[1];
                slot[2]=motionDef.inertiaOrientation[2]; slot[3]=motionDef.inertiaOrientation[3];
                changed = true; continue;
            }
            if (slot.length === 3) {
                if (vec3Count === 0 && hasCom) {
                    slot[0]=motionDef.centerOfMass[0]; slot[1]=motionDef.centerOfMass[1]; slot[2]=motionDef.centerOfMass[2]; changed = true;
                } else if (vec3Count === 1 && hasDiag) {
                    slot[0]=motionDef.inertiaDiagonal[0]; slot[1]=motionDef.inertiaDiagonal[1]; slot[2]=motionDef.inertiaDiagonal[2]; changed = true;
                }
                vec3Count++;
            }
        }
    }
    if (changed) checkResult(HK.HP_Body_SetMassProperties(bodyId, mp), 'HP_Body_SetMassProperties');
}

function createPhysicsBody(shapeId, motionType, position, rotation, setMass, gravityFactor, motionDef) {
    const c = HK.HP_Body_Create(); checkResult(c[0], 'HP_Body_Create');
    const bodyId = c[1];
    checkResult(HK.HP_Body_SetShape(bodyId, shapeId), 'HP_Body_SetShape');
    checkResult(HK.HP_Body_SetMotionType(bodyId, motionType), 'HP_Body_SetMotionType');
    if (setMass) {
        const mr = HK.HP_Shape_BuildMassProperties(shapeId); checkResult(mr[0], 'HP_Shape_BuildMassProperties');
        checkResult(HK.HP_Body_SetMassProperties(bodyId, mr[1]), 'HP_Body_SetMassProperties');
        applyMotionMassProperties(bodyId, motionDef);
    }
    if (gravityFactor !== undefined && typeof HK.HP_Body_SetGravityFactor === 'function')
        checkResult(HK.HP_Body_SetGravityFactor(bodyId, gravityFactor), 'HP_Body_SetGravityFactor');
    checkResult(HK.HP_Body_SetPosition(bodyId, position), 'HP_Body_SetPosition');
    checkResult(HK.HP_Body_SetOrientation(bodyId, rotation), 'HP_Body_SetOrientation');
    checkResult(HK.HP_World_AddBody(physicsWorldId, bodyId, false), 'HP_World_AddBody');
    return bodyId;
}

function collectDescendantColliders(gltfNodes, nodeIndex, result, excludedSet) {
    const node = gltfNodes[nodeIndex];
    for (const childIdx of (node.children ?? [])) {
        const child = gltfNodes[childIdx];
        const ext   = child.extensions?.KHR_physics_rigid_bodies;
        if (ext?.motion) continue;
        if (ext?.collider?.geometry) { result.push(childIdx); excludedSet.add(childIdx); }
        collectDescendantColliders(gltfNodes, childIdx, result, excludedSet);
    }
}

// Build a map from glTF node index → Filament entity.
// Filament's getEntities() does NOT preserve glTF node order: AssetLoader applies
// std::partition() to put renderables first, which can shuffle siblings. Matching
// by initial local translation is robust against any ordering.
function buildNodeEntityMap(gltfJson, filamentAsset, filamentEngine) {
    const allEntities = filamentAsset.getEntities();
    const rootId = filamentAsset.getRoot().getId();
    const nodeEntities = allEntities.filter(e => e.getId() !== rootId);
    const tcm = filamentEngine.getTransformManager();
    const nodes = gltfJson.nodes ?? [];
    const nodeToEntity = new Map();

    const entityProbes = nodeEntities.map(e => {
        const tInst = tcm.getInstance(e);
        const lm = tcm.getTransform(tInst);
        tInst.delete();
        return { entity: e, trans: [lm[12], lm[13], lm[14]] };
    });

    const usedEntities = new Set();
    for (let ni = 0; ni < nodes.length; ni++) {
        const t = nodes[ni].translation ?? [0, 0, 0];
        let bestIdx = -1, bestDist = Infinity;
        for (let i = 0; i < entityProbes.length; i++) {
            if (usedEntities.has(i)) continue;
            const ep = entityProbes[i];
            const dx = ep.trans[0] - t[0], dy = ep.trans[1] - t[1], dz = ep.trans[2] - t[2];
            const dist = dx*dx + dy*dy + dz*dz;
            if (dist < bestDist) { bestDist = dist; bestIdx = i; }
        }
        if (bestIdx >= 0 && bestDist < 0.01) {
            nodeToEntity.set(ni, entityProbes[bestIdx].entity);
            usedEntities.add(bestIdx);
        }
    }
    return nodeToEntity;
}

// Read all accessors from a fetched ArrayBuffer + glTF JSON into flat Float32Array / Uint32Array map.
function buildAccessorCache(gltfJson, bufferData) {
    const accCache = {};
    const bufferViews = gltfJson.bufferViews ?? [];
    (gltfJson.accessors ?? []).forEach((acc, idx) => {
        if (acc.bufferView === undefined) { accCache[idx] = new Float32Array(0); return; }
        const bv       = bufferViews[acc.bufferView];
        const byteOff  = (bv.byteOffset ?? 0) + (acc.byteOffset ?? 0);
        const count    = acc.count;
        const compMap  = { 5120:1, 5121:1, 5122:2, 5123:2, 5125:4, 5126:4 };
        const typeMap  = { SCALAR:1, VEC2:2, VEC3:3, VEC4:4, MAT2:4, MAT3:9, MAT4:16 };
        const compBytes = compMap[acc.componentType] ?? 4;
        const numComps  = typeMap[acc.type] ?? 1;
        const stride    = bv.byteStride ?? (compBytes * numComps);
        const isIndex   = (acc.componentType === 5123 || acc.componentType === 5125);
        const ArrType   = isIndex ? Uint32Array : Float32Array;
        const out = new ArrType(count * numComps);
        const srcBytes = (acc.componentType === 5123) ? Uint16Array
                       : (acc.componentType === 5125) ? Uint32Array
                       : (acc.componentType === 5121) ? Uint8Array
                       : Float32Array;
        for (let i = 0; i < count; i++) {
            const src = new srcBytes(bufferData, byteOff + i * stride, numComps);
            for (let k = 0; k < numComps; k++) out[i*numComps+k] = src[k];
        }
        accCache[idx] = out;
    });
    return accCache;
}

async function initPhysicsFromUrl(meshUrl, filamentAsset, filamentEngine, modelScale, filamentScene) {
    // Fetch glTF JSON (supports .gltf + embedded .glb)
    const resp = await fetch(meshUrl);
    let gltfJson, bufferData;
    const ab = await resp.arrayBuffer();
    const header = new Uint8Array(ab, 0, Math.min(4, ab.byteLength));
    const isGlb = header.length === 4
        && header[0] === 0x67
        && header[1] === 0x6c
        && header[2] === 0x54
        && header[3] === 0x46;
    if (isGlb) {
        const dv  = new DataView(ab);
        const jsonLen = dv.getUint32(12, true);
        gltfJson  = JSON.parse(new TextDecoder().decode(new Uint8Array(ab, 20, jsonLen)));
        const binStart = 20 + jsonLen + 8;
        bufferData = ab.slice(binStart);
    } else {
        gltfJson  = JSON.parse(new TextDecoder().decode(new Uint8Array(ab)));
        // Load the first .bin buffer relative to the model URL
        if (gltfJson.buffers?.[0]?.uri) {
            const binUrl = new URL(gltfJson.buffers[0].uri, new URL(meshUrl, location.href).href).href;
            const binResp = await fetch(binUrl);
            bufferData = await binResp.arrayBuffer();
        } else {
            bufferData = new ArrayBuffer(0);
        }
    }

    const gltfExt   = gltfJson.extensions ?? {};
    const hasPhysics = gltfExt.KHR_physics_rigid_bodies || gltfExt.KHR_implicit_shapes;
    if (!hasPhysics) return;

    const shapeDefs = gltfExt.KHR_implicit_shapes?.shapes ?? [];
    const matDefs   = gltfExt.KHR_physics_rigid_bodies?.physicsMaterials ?? [];
    buildCollisionFilterTable(gltfJson);
    const accCache  = buildAccessorCache(gltfJson, bufferData);
    const worldMats = buildWorldTransforms(gltfJson);
    // Physics runs in glTF world space (full scale, NOT multiplied by modelScale).
    // The Filament asset root has scale=modelScale applied each frame in render().
    // Child node local transforms are in glTF space, so physics positions written via
    // setTransform automatically get the root scale applied → correct visual result.

    // Build parent map
    const parentMap = new Map();
    const nodes = gltfJson.nodes ?? [];
    for (let i = 0; i < nodes.length; i++)
        for (const c of (nodes[i].children ?? [])) parentMap.set(c, i);

    // Build node-index → Filament entity map via transform position matching.
    const nodeEntityMap = buildNodeEntityMap(gltfJson, filamentAsset, filamentEngine);

    // Store engine for use in physicsStep
    physicsFilamentEngine = filamentEngine;
    physicsFilamentScene  = filamentScene;
    physicsFilamentAsset  = filamentAsset;
    physicsModelScale = modelScale ?? 1.0;  // model display scale, used to convert physics ↔ visual coords

    // Init Havok world
    const wr = HK.HP_World_Create(); checkResult(wr[0], 'HP_World_Create');
    physicsWorldId = wr[1];
    checkResult(HK.HP_World_SetGravity(physicsWorldId, [0, -9.8, 0]), 'HP_World_SetGravity');
    checkResult(HK.HP_World_SetIdealStepTime(physicsWorldId, 1/60),   'HP_World_SetIdealStepTime');

    const excludedIndices = new Set();

    // ---- First pass: compound bodies ----
    for (let i = 0; i < nodes.length; i++) {
        const physExt = nodes[i].extensions?.KHR_physics_rigid_bodies;
        if (!physExt?.motion || physExt?.collider) continue;
        const childColliderIndices = [];
        collectDescendantColliders(nodes, i, childColliderIndices, excludedIndices);
        if (childColliderIndices.length === 0) continue;
        if (typeof HK.HP_Shape_CreateContainer !== 'function') {
            console.warn('[WARN] HP_Shape_CreateContainer not available, skipping compound:', nodes[i].name || i);
            continue;
        }
        const cr = HK.HP_Shape_CreateContainer(); checkResult(cr[0], 'HP_Shape_CreateContainer');
        const containerShapeId = cr[1];
        const parentPos = vec3.create(), parentRot = quat.create();
        mat4.getTranslation(parentPos, worldMats[i]);
        getRotationFromMat(parentRot, worldMats[i]);
        const parentRotInv = quat.invert(quat.create(), parentRot);
        const compoundChildren = []; // for debug viz

        for (const ci of childColliderIndices) {
            const cPhys   = nodes[ci].extensions?.KHR_physics_rigid_bodies;
            const cGeom   = cPhys.collider.geometry;
            const cMatDef = cPhys.collider.physicsMaterial !== undefined ? matDefs[cPhys.collider.physicsMaterial] : null;
            const cScale  = vec3.create(); mat4.getScaling(cScale, worldMats[ci]);
            let cShapeId, cAabb = null, cShapeDef = null, cMeshVerts = null;
            if (cGeom.shape === undefined) {
                const r = createMeshPhysicsShapeFromJson(gltfJson, accCache, worldMats[ci], cGeom, null, cMatDef);
                if (r) { cShapeId = r.shapeId; cAabb = r.aabb; cMeshVerts = r.meshVerts; }
            } else {
                cShapeDef = shapeDefs[cGeom.shape]; if (!cShapeDef) continue;
                cShapeId = createImplicitShapeFromDef(cShapeDef, cScale, null, cMatDef);
            }
            if (!cShapeId) continue;
            applyCollisionFilterToShape(cShapeId, cPhys.collider);
            const cPos = vec3.create(), cRot = quat.create();
            mat4.getTranslation(cPos, worldMats[ci]);
            getRotationFromMat(cRot, worldMats[ci]);
            const relPos   = vec3.subtract(vec3.create(), cPos, parentPos);
            const localPos = vec3.transformQuat(vec3.create(), relPos, parentRotInv);
            const localRot = quat.normalize(quat.create(),
                quat.multiply(quat.create(), parentRotInv, cRot));
            HK.HP_Shape_AddChild(containerShapeId, cShapeId,
                [[localPos[0],localPos[1],localPos[2]], [localRot[0],localRot[1],localRot[2],localRot[3]], [1,1,1]]);
            compoundChildren.push({
                shapeDef: cShapeDef, aabb: cAabb, meshVerts: cMeshVerts,
                localPos: [localPos[0], localPos[1], localPos[2]],
                localRot: [localRot[0], localRot[1], localRot[2], localRot[3]],
            });
        }

        const motionDef    = physExt.motion;
        const isKinematic  = !!(motionDef.isKinematic);
        const motionType   = isKinematic ? HK.MotionType.KINEMATIC : HK.MotionType.DYNAMIC;
        const initPos      = [parentPos[0], parentPos[1], parentPos[2]];
        const initRot      = [parentRot[0], parentRot[1], parentRot[2], parentRot[3]];
        const bodyId       = createPhysicsBody(containerShapeId, motionType, initPos, initRot,
            !isKinematic, motionDef.gravityFactor, motionDef);

        if (!isKinematic) {
            const nodeScale = vec3.create(); mat4.getScaling(nodeScale, worldMats[i]);
            const parentInvWorldMat = mat4.create();
            const pIdx = parentMap.get(i);
            if (pIdx !== undefined) mat4.invert(parentInvWorldMat, worldMats[pIdx]);
            // Entity lookup: by name first, then DFS-index fallback (for unnamed nodes)
            const nodeName = nodes[i].name;
            const namedEntities = nodeName ? filamentAsset.getEntitiesByName(nodeName) : [];
            const entity = namedEntities.length > 0 ? namedEntities[0] : (nodeEntityMap.get(i) ?? null);
            if (!entity) console.warn('[physics] compound: no entity for node', i, nodeName ? `"${nodeName}"` : '(unnamed)');
            physicsNodesList.push({ entity, bodyId, nodeScale: [nodeScale[0],nodeScale[1],nodeScale[2]], initPos, initRot, parentInvWorldMat, compoundChildren });
            dynamicNodesList.push(physicsNodesList[physicsNodesList.length - 1]);
        }
    }

    // ---- Second pass: single-shape bodies ----
    for (let i = 0; i < nodes.length; i++) {
        if (excludedIndices.has(i)) continue;
        const physExt = nodes[i].extensions?.KHR_physics_rigid_bodies;
        if (!physExt?.collider?.geometry) continue;
        const motionDef  = physExt.motion ?? null;
        const matDef     = physExt.collider.physicsMaterial !== undefined ? matDefs[physExt.collider.physicsMaterial] : null;
        const worldScale = vec3.create(); mat4.getScaling(worldScale, worldMats[i]);
        let shapeId, sd, meshAabb = null, meshVerts = null;
        if (physExt.collider.geometry.shape === undefined) {
            const r = createMeshPhysicsShapeFromJson(gltfJson, accCache, worldMats[i], physExt.collider.geometry, motionDef, matDef);
            if (!r) continue;
            shapeId = r.shapeId; meshAabb = r.aabb; meshVerts = r.meshVerts;
        } else {
            sd = shapeDefs[physExt.collider.geometry.shape];
            if (!sd) continue;
            shapeId = createImplicitShapeFromDef(sd, worldScale, motionDef, matDef);
        }
        if (!shapeId) continue;
        applyCollisionFilterToShape(shapeId, physExt.collider);
        const wPos = vec3.create(), wRot = quat.create();
        mat4.getTranslation(wPos, worldMats[i]);
        getRotationFromMat(wRot, worldMats[i]);
        const initPos   = [wPos[0], wPos[1], wPos[2]];
        const initRot   = [wRot[0], wRot[1], wRot[2], wRot[3]];
        const isKinematic = !!(motionDef?.isKinematic);
        const motionType  = !motionDef ? HK.MotionType.STATIC : isKinematic ? HK.MotionType.KINEMATIC : HK.MotionType.DYNAMIC;
        const bodyId = createPhysicsBody(shapeId, motionType, initPos, initRot,
            !!motionDef && !isKinematic, motionDef?.gravityFactor, motionDef);
        if (motionDef && !isKinematic) {
            const nodeScale = vec3.create(); mat4.getScaling(nodeScale, worldMats[i]);
            const parentInvWorldMat = mat4.create();
            const pIdx = parentMap.get(i);
            if (pIdx !== undefined) mat4.invert(parentInvWorldMat, worldMats[pIdx]);
            // Entity lookup: by name first, then DFS-index fallback (for unnamed nodes)
            const nodeName = nodes[i].name;
            const namedEntities = nodeName ? filamentAsset.getEntitiesByName(nodeName) : [];
            const entity = namedEntities.length > 0 ? namedEntities[0] : (nodeEntityMap.get(i) ?? null);
            if (!entity) console.warn('[physics] single: no entity for node', i, nodeName ? `"${nodeName}"` : '(unnamed)');
            physicsNodesList.push({ entity, bodyId, nodeScale: [nodeScale[0],nodeScale[1],nodeScale[2]], initPos, initRot, parentInvWorldMat, shapeDef: sd, aabb: meshAabb, meshVerts });
            dynamicNodesList.push(physicsNodesList[physicsNodesList.length - 1]);
        } else if (!motionDef) {
            physicsStaticBodies.push({ nodeIndex: i, bodyId, initPos, shapeDef: sd, aabb: meshAabb, meshVerts });
        }
    }
    const foundCount = physicsNodesList.filter(e => e.entity).length;

    // Disable frustum culling on dynamic entities so they remain visible
    // when their AABB is not updated (avoids scene.remove/addEntity every frame).
    if (foundCount > 0) {
        const rm = filamentEngine.getRenderableManager();
        for (const entry of physicsNodesList) {
            if (!entry.entity) continue;
            const rmInst = rm.getInstance(entry.entity);
            if (rmInst) { rm.setCulling(rmInst, false); rmInst.delete(); }
        }
    }
    console.log('Filament KHR physics initialized:', physicsNodesList.length, 'dynamic bodies, entities found:', foundCount);
}

// ---- Debug wireframe helper geometry ----
function makeSphereLineVerts(radius, segments = 48) {
    const v = [];
    for (let c = 0; c < 3; c++) {
        for (let i = 0; i < segments; i++) {
            const a0 = (i / segments) * Math.PI * 2;
            const a1 = ((i + 1) / segments) * Math.PI * 2;
            const c0 = Math.cos(a0) * radius, s0 = Math.sin(a0) * radius;
            const c1 = Math.cos(a1) * radius, s1 = Math.sin(a1) * radius;
            if (c === 0)      v.push(c0, s0, 0,  c1, s1, 0);   // XY plane
            else if (c === 1) v.push(c0, 0,  s0, c1, 0,  s1);  // XZ plane
            else              v.push(0,  c0, s0, 0,  c1, s1);  // YZ plane
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

function makeAabbLineVerts(min, max) {
    return makeBoxLineVerts(max[0]-min[0], max[1]-min[1], max[2]-min[2])
        .map((val, i) => val + ((min[i%3] + max[i%3]) / 2));
}

function makeCapsuleLineVerts(radius, halfHeight, segments = 32) {
    const v = [];
    // Two end caps as full circles in XZ at +/- halfHeight
    for (let s = 0; s < 2; s++) {
        const y = s === 0 ? -halfHeight : halfHeight;
        for (let i = 0; i < segments; i++) {
            const a0 = (i / segments) * Math.PI * 2;
            const a1 = ((i + 1) / segments) * Math.PI * 2;
            v.push(Math.cos(a0)*radius, y, Math.sin(a0)*radius,
                   Math.cos(a1)*radius, y, Math.sin(a1)*radius);
        }
    }
    // Vertical lines connecting caps
    for (let i = 0; i < 4; i++) {
        const a = (i / 4) * Math.PI * 2;
        v.push(Math.cos(a)*radius, -halfHeight, Math.sin(a)*radius,
               Math.cos(a)*radius,  halfHeight, Math.sin(a)*radius);
    }
    // Hemisphere arcs at each end (XY and YZ planes)
    for (let s = 0; s < 2; s++) {
        const sign = s === 0 ? -1 : 1;
        const yOff = sign * halfHeight;
        const half = segments / 2;
        const baseAng = sign < 0 ? Math.PI : 0; // bottom: PI..2PI, top: 0..PI
        for (let plane = 0; plane < 2; plane++) {
            for (let i = 0; i < half; i++) {
                const a0 = baseAng + (i / half) * Math.PI;
                const a1 = baseAng + ((i + 1) / half) * Math.PI;
                const c0 = Math.cos(a0) * radius, s0 = Math.sin(a0) * radius;
                const c1 = Math.cos(a1) * radius, s1 = Math.sin(a1) * radius;
                if (plane === 0) v.push(c0, yOff + s0, 0,  c1, yOff + s1, 0);
                else             v.push(0, yOff + s0, c0,  0, yOff + s1, c1);
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
            const a0 = (i / segments) * Math.PI * 2;
            const a1 = ((i + 1) / segments) * Math.PI * 2;
            v.push(Math.cos(a0)*radius, y, Math.sin(a0)*radius,
                   Math.cos(a1)*radius, y, Math.sin(a1)*radius);
        }
    }
    for (let i = 0; i < 4; i++) {
        const a = (i / 4) * Math.PI * 2;
        v.push(Math.cos(a)*radius, -halfHeight, Math.sin(a)*radius,
               Math.cos(a)*radius,  halfHeight, Math.sin(a)*radius);
    }
    return new Float32Array(v);
}

// Build a wireframe Float32Array for any shape entry.
// Priority: explicit meshVerts → aabb → implicit shapeDef → fallback unit sphere.
function buildDebugVertsForEntry(entry, isStatic) {
    if (entry.meshVerts) return entry.meshVerts;
    if (entry.aabb) return makeAabbLineVerts(entry.aabb.min, entry.aabb.max);
    const sd = entry.shapeDef;
    if (sd?.sphere) return makeSphereLineVerts(sd.sphere.radius ?? 1.0);
    if (sd?.box)    return makeBoxLineVerts(...(sd.box.size ?? [1,1,1]));
    if (sd?.capsule) {
        const r = (sd.capsule.radiusTop ?? sd.capsule.radius ?? 0.5);
        const h = (sd.capsule.height ?? 1.0) / 2;
        return makeCapsuleLineVerts(r, h);
    }
    if (sd?.cylinder) {
        const r = Math.max(sd.cylinder.radiusTop ?? sd.cylinder.radius ?? 0.5,
                           sd.cylinder.radiusBottom ?? sd.cylinder.radius ?? 0.5);
        const h = (sd.cylinder.height ?? 1.0) / 2;
        return makeCylinderLineVerts(r, h);
    }
    return isStatic ? makeBoxLineVerts(1,1,1) : makeSphereLineVerts(1.0);
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
    gl.shaderSource(vs, `#version 300 es
in vec3 aPos; uniform mat4 uMVP;
void main(){gl_Position=uMVP*vec4(aPos,1.0);}`);
    gl.compileShader(vs);
    const fs = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fs, `#version 300 es
precision mediump float; uniform vec4 uColor; out vec4 o;
void main(){o=uColor;}`);
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

function drawPhysicsDebug(eye, center, up, aspect) {
    if (!physicsDebugGl || !physicsDebugProg || !physicsDebugVbo) return;
    const gl = physicsDebugGl;
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    if (!physicsDebugEnabled || !HK || !physicsWorldId) return;
    gl.enable(gl.DEPTH_TEST);
    gl.useProgram(physicsDebugProg);
    const aPos   = gl.getAttribLocation(physicsDebugProg, 'aPos');
    const uMVP   = gl.getUniformLocation(physicsDebugProg, 'uMVP');
    const uColor = gl.getUniformLocation(physicsDebugProg, 'uColor');
    const viewMat = mat4.lookAt(mat4.create(), eye, center, up);
    const projMat = mat4.perspective(mat4.create(), 75 * Math.PI / 180, aspect, 0.01, 10000.0);
    const vp       = mat4.multiply(mat4.create(), projMat, viewMat);
    const scaleMat = mat4.fromScaling(mat4.create(), [physicsModelScale, physicsModelScale, physicsModelScale]);
    gl.bindBuffer(gl.ARRAY_BUFFER, physicsDebugVbo);
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 3, gl.FLOAT, false, 0, 0);
    function drawEntry(verts, colorIdx, p, r) {
        const modelMat = mat4.fromRotationTranslation(mat4.create(),
            quat.fromValues(r[0], r[1], r[2], r[3]),
            vec3.fromValues(p[0], p[1], p[2]));
        const mvp = mat4.multiply(mat4.create(), vp,
            mat4.multiply(mat4.create(), scaleMat, modelMat));
        gl.uniformMatrix4fv(uMVP, false, mvp);
        gl.uniform4fv(uColor, PHYSICS_DEBUG_COLORS[colorIdx % PHYSICS_DEBUG_COLORS.length]);
        gl.bufferData(gl.ARRAY_BUFFER, verts, gl.DYNAMIC_DRAW);
        gl.drawArrays(gl.LINES, 0, verts.length / 3);
    }
    function drawEntryWithLocal(verts, colorIdx, p, r, lp, lr) {
        const bodyMat  = mat4.fromRotationTranslation(mat4.create(),
            quat.fromValues(r[0], r[1], r[2], r[3]), vec3.fromValues(p[0], p[1], p[2]));
        const localMat = mat4.fromRotationTranslation(mat4.create(),
            quat.fromValues(lr[0], lr[1], lr[2], lr[3]), vec3.fromValues(lp[0], lp[1], lp[2]));
        const modelMat = mat4.multiply(mat4.create(), bodyMat, localMat);
        const mvp = mat4.multiply(mat4.create(), vp,
            mat4.multiply(mat4.create(), scaleMat, modelMat));
        gl.uniformMatrix4fv(uMVP, false, mvp);
        gl.uniform4fv(uColor, PHYSICS_DEBUG_COLORS[colorIdx % PHYSICS_DEBUG_COLORS.length]);
        gl.bufferData(gl.ARRAY_BUFFER, verts, gl.DYNAMIC_DRAW);
        gl.drawArrays(gl.LINES, 0, verts.length / 3);
    }
    // Dynamic bodies
    for (let i = 0; i < physicsNodesList.length; i++) {
        const entry = physicsNodesList[i];
        const pr = HK.HP_Body_GetPosition(entry.bodyId);
        const qr = HK.HP_Body_GetOrientation(entry.bodyId);
        if (pr[0] !== HK.Result.RESULT_OK || qr[0] !== HK.Result.RESULT_OK) continue;
        if (entry.compoundChildren && entry.compoundChildren.length > 0) {
            for (const ch of entry.compoundChildren) {
                if (!ch.debugVerts) ch.debugVerts = buildDebugVertsForEntry(ch, false);
                drawEntryWithLocal(ch.debugVerts, i, pr[1], qr[1], ch.localPos, ch.localRot);
            }
            continue;
        }
        if (!entry.debugVerts) entry.debugVerts = buildDebugVertsForEntry(entry, false);
        drawEntry(entry.debugVerts, i, pr[1], qr[1]);
    }
    // Static bodies
    for (let j = 0; j < physicsStaticBodies.length; j++) {
        const sb = physicsStaticBodies[j];
        const pr = HK.HP_Body_GetPosition(sb.bodyId);
        const qr = HK.HP_Body_GetOrientation(sb.bodyId);
        if (pr[0] !== HK.Result.RESULT_OK || qr[0] !== HK.Result.RESULT_OK) continue;
        if (!sb.debugVerts) sb.debugVerts = buildDebugVertsForEntry(sb, true);
        drawEntry(sb.debugVerts, physicsNodesList.length + j, pr[1], qr[1]);
    }
    gl.disableVertexAttribArray(aPos);
}

let _physicsStepCount = 0;
function physicsStep() {
    if (!HK || !physicsWorldId) return;
    _physicsStepCount++;
    checkResult(HK.HP_World_Step(physicsWorldId, 1/60), 'HP_World_Step');
    // Reset bodies that fell below threshold
    for (const entry of dynamicNodesList) {
        const pr = HK.HP_Body_GetPosition(entry.bodyId);
        checkResult(pr[0], 'HP_Body_GetPosition');
        if (pr[1][1] < RESET_Y_THRESHOLD) {
            checkResult(HK.HP_Body_SetPosition(entry.bodyId,      entry.initPos), 'SetPosition');
            checkResult(HK.HP_Body_SetOrientation(entry.bodyId,   entry.initRot), 'SetOrientation');
            checkResult(HK.HP_Body_SetLinearVelocity(entry.bodyId,  [0,0,0]), 'SetLinVel');
            checkResult(HK.HP_Body_SetAngularVelocity(entry.bodyId, [0,0,0]), 'SetAngVel');
        }
    }
    // Sync transforms back to Filament entities.
    // Wrap all setTransform calls in a local transform transaction so Filament
    // flushes and recomputes world transforms before the next render call.
    if (physicsFilamentEngine) {
        const tcm = physicsFilamentEngine.getTransformManager();
        // Wrap setTransform in a transaction so Filament flushes its world-transform
        // cache before render() reads it (otherwise dynamic entities visually lag).
        tcm.openLocalTransformTransaction();
        for (const entry of physicsNodesList) {
            if (!entry.entity) continue;
            const pr = HK.HP_Body_GetPosition(entry.bodyId);    checkResult(pr[0], 'HP_Body_GetPosition');
            const qr = HK.HP_Body_GetOrientation(entry.bodyId); checkResult(qr[0], 'HP_Body_GetOrientation');
            const p = pr[1], r = qr[1];
            const physWorldMat = mat4.fromRotationTranslationScale(
                mat4.create(),
                quat.fromValues(r[0], r[1], r[2], r[3]),
                vec3.fromValues(p[0], p[1], p[2]),
                vec3.fromValues(entry.nodeScale[0], entry.nodeScale[1], entry.nodeScale[2])
            );
            const localMat = mat4.multiply(mat4.create(), entry.parentInvWorldMat, physWorldMat);
            try {
                const inst = tcm.getInstance(entry.entity);
                tcm.setTransform(inst, localMat);
                inst.delete();
            } catch (e) {
                console.warn('[physics] setTransform failed for entity:', entry.entity, e);
            }
        }
        tcm.commitLocalTransformTransaction();
    }
}

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

// GUI
let gui = new dat.GUI();
const DEFAULT_STRING = "[default]";
var ROTATE = false;
var CAMERA = DEFAULT_STRING;
var SKYBOX = true;
var LIGHTS = false;
var IBL = true;
var PHYSICS_DEBUG = true;
var aperture = 16.0;
var shutterSpeed = 125.0;
var ISO = 100.0;
var VARIANT = DEFAULT_STRING;
let guiRotate = gui.add(window, 'ROTATE').name('Rotate');
let guiSkybox = gui.add(window, 'SKYBOX').name('Skybox');
let guiLights = gui.add(window, 'LIGHTS').name('Lights');
let guiIBL    = gui.add(window, 'IBL').name('IBL');
let guiPhysicsDebug = gui.add(window, 'PHYSICS_DEBUG').name('Physics Debug');
let guiCameraFolder = gui.addFolder('Camera');
let guiAperture     = guiCameraFolder.add(window, 'aperture',     1,   32, 0.1).name('Aperture');
let guiShutterSpeed = guiCameraFolder.add(window, 'shutterSpeed', 1, 1000, 0.1).name('Speed (1/s)');
let guiISO          = guiCameraFolder.add(window, 'ISO',         24, 6400, 0.1).name('ISO');
let guiCameras = null;
guiCameraFolder.open();
let guiVariants = null;

const env = 'papermill';
const ibl_url = `../../textures/ktx/${env}/${env}_ibl.ktx`;
const sky_url = `../../textures/ktx/${env}/${env}_skybox.ktx`;
const initialModelInfo = getInitialModelInfo();
const dropZone = document.getElementById('dropZone');
const dropZoneMessage = document.getElementById('dropZoneMessage');
const fileInput = document.getElementById('fileInput');
const messages = document.getElementById('messages');

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
            filename: modelFile.name,
            displayName: modelFile.name,
            scale: 1,
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
        filename: modelFile.name,
        displayName: modelFile.name,
        scale: 1,
        objectUrls: objectUrls,
    };
}

function buildModelSourceFromInfo(modelInfo) {
    let meshUrl = "../../" + modelInfo.category + "/" + modelInfo.path;
    if (modelInfo.url) {
        meshUrl = modelInfo.url;
    }
    return {
        modelInfo: modelInfo,
        url: meshUrl,
        filename: meshUrl.split('/').pop(),
        displayName: modelInfo.name || meshUrl.split('/').pop(),
        scale: modelInfo.scale,
    };
}

function getPathNameFromUrl(path) {
    let result = path.replace(/\\/g, '/').replace(/\/[^/]*$/, '');
    if (result.match(/^[^/]*\.[^/\.]*$/)) {
        result = '';
    }
    return result;
}

function convertRelativeToAbsUrl(relativePath) {
    let anchor = document.createElement("a");
    anchor.href = relativePath;
    return anchor.href;
}

function handleDragEvent(event) {
    event.preventDefault();
    event.stopPropagation();
}

function setDragActive(isActive) {
    dropZone.classList.toggle('dragover', isActive);
    if (isActive) {
        setDropZoneMessage('Drop glTF/glb files here');
        dropZone.classList.remove('hidden');
    } else if (!window.app || !window.app.asset) {
        showDropZone('Drag & drop a .glb or .gltf model here, or click to choose files.');
    } else {
        hideDropZone();
    }
}

async function handleModelFiles(fileList) {
    if (!fileList || fileList.length === 0) {
        return;
    }
    if (!window.app) {
        showDropZone('Viewer is still starting. Please try again in a moment.', true);
        return;
    }
    try {
        const modelSource = await createDroppedModelSource(fileList);
        await window.app.loadModelSource(modelSource);
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

Filament.init([ibl_url, sky_url], () => {
    window.gltfio = Filament.gltfio;
    window.Fov = Filament.Camera$Fov;
    window.LightType = Filament.LightManager$Type;
    window.ToneMapping = Filament.ColorGrading$ToneMapping;
    window.app = new App(document.getElementsByTagName('canvas')[0]);

    app.camera.setExposure(aperture, 1/shutterSpeed, ISO);
    guiAperture.onChange(function (value) {
        aperture = value;
        updateExposure();
    });
    guiShutterSpeed.onChange(function (value) {
        shutterSpeed = value;
        updateExposure();
    });
    guiISO.onChange(function (value) {
        ISO = value;
        updateExposure();
    });

    function updateExposure() {
        app.camera.setExposure(aperture, 1/shutterSpeed, ISO);
    }

    guiLights.onChange(function (value) {
        if ( value ) {
            const sunlight = Filament.EntityManager.get().create();
            Filament.LightManager.Builder(LightType.SUN)
                .color([0.98, 0.92, 0.89])
                .intensity(50000.0)
                .direction([0.6, -1.0, -0.8])
                .sunAngularRadius(1.9)
                .sunHaloSize(10.0)
                .sunHaloFalloff(80.0)
                .build(app.engine, sunlight);
            app.sunlight = sunlight;
            app.scene.addEntity(sunlight);
        } else {
            app.scene.remove(app.sunlight);
        }
    });

    guiIBL.onChange(function (value) {
        if ( value ) {
            const indirectLight = app.ibl = app.engine.createIblFromKtx1(ibl_url);
            app.scene.setIndirectLight(indirectLight);
            indirectLight.setIntensity(50000);
        } else {
            const indirectLight = app.ibl = app.engine.createIblFromKtx1(ibl_url);
            app.scene.setIndirectLight(null);
        }
    });

    guiSkybox.onChange(function (value) {
        if ( value ) {
            const skybox = app.engine.createSkyFromKtx1(sky_url);
            app.scene.setSkybox(skybox);
        } else {
            app.scene.setSkybox(null);
        }
    });

    guiPhysicsDebug.onChange(function(value) {
        physicsDebugEnabled = value;
    });

});

class App {
    constructor(canvas) {
        this.canvas = canvas;
        const engine = this.engine = Filament.Engine.create(this.canvas);
        const scene = this.scene = engine.createScene();
        //this.trackball = new Trackball(canvas, {startSpin: 0.006});
        this.trackball = new Trackball(canvas, {startSpin: 0.000});

        if ( LIGHTS ) {
            const sunlight = this.sunlight = Filament.EntityManager.get().create();
            Filament.LightManager.Builder(LightType.SUN)
                .color([0.98, 0.92, 0.89])
                .intensity(50000.0)
                .direction([0.6, -1.0, -0.8])
                .sunAngularRadius(1.9)
                .sunHaloSize(10.0)
                .sunHaloFalloff(80.0)
                .build(engine, sunlight);
            this.scene.addEntity(sunlight);
        }

        // Added tone mapping support
        // See: https://github.com/google/filament/issues/3337#issuecomment-744058326
        const colorGrading = Filament.ColorGrading.Builder()
            .toneMapping(ToneMapping.LINEAR)
            .build(engine);
 
        const indirectLight = this.ibl = engine.createIblFromKtx1(ibl_url);
        this.scene.setIndirectLight(indirectLight);
        indirectLight.setIntensity(50000);

        const skybox = engine.createSkyFromKtx1(sky_url);
        this.scene.setSkybox(skybox);

        this.swapChain = engine.createSwapChain();
        this.renderer = engine.createRenderer();
        this.camera = engine.createCamera(Filament.EntityManager.get().create());
        this.defaultCamera = this.camera;
        this.view = engine.createView();
        this.view.setCamera(this.camera);
        this.view.setScene(this.scene);
        this.view.setColorGrading(colorGrading);
        this.renderer.setClearOptions({clearColor: [0.6, 0.6, 0.6, 1.0], clear: true});
        this.asset = null;
        this.instance = null;
        this.animator = null;
        this.animationStartTime = 0;
        this.currentModelInfo = initialModelInfo;
        this.currentModelUrl = null;
        this.currentBasePath = null;
        this.currentScale = initialModelInfo?.scale || 1;
        this.currentObjectUrls = [];
        this.resize();
        this.render = this.render.bind(this);
        this.resize = this.resize.bind(this);
        window.addEventListener('resize', this.resize);
        window.requestAnimationFrame(this.render);
        initPhysicsDebugCanvas(this.canvas);

        if (initialModelInfo) {
            this.loadModelSource(buildModelSourceFromInfo(initialModelInfo));
        } else {
            showDropZone('Drag & drop a .glb or .gltf model here, or click to choose files.');
        }
    }

    revokeCurrentObjectUrls() {
        this.currentObjectUrls.forEach(function(url) {
            URL.revokeObjectURL(url);
        });
        this.currentObjectUrls = [];
    }

    clearModelControls() {
        CAMERA = DEFAULT_STRING;
        VARIANT = DEFAULT_STRING;
        if (guiCameras) {
            guiCameraFolder.remove(guiCameras);
            guiCameras = null;
        }
        if (guiVariants) {
            gui.remove(guiVariants);
            guiVariants = null;
        }
        this.view.setCamera(this.defaultCamera);
        this.camera = this.defaultCamera;
        this.resize();
    }

    unloadCurrentAsset() {
        if (this.asset) {
            this.scene.removeEntities(this.asset.getEntities());
            this.asset = null;
        }
        this.instance = null;
        this.animator = null;
        this.animationStartTime = 0;
        this.clearModelControls();
        resetPhysicsState();
    }

    async loadModelSource(modelSource) {
        this.currentModelInfo = modelSource.modelInfo || null;
        this.currentScale = modelSource.scale || 1;
        this.currentModelUrl = modelSource.url;
        this.currentBasePath = convertRelativeToAbsUrl(getPathNameFromUrl(modelSource.url)) + "/";
        this.revokeCurrentObjectUrls();
        this.currentObjectUrls = modelSource.objectUrls || [];
        messages.textContent = '';
        showDropZone('Loading model...');
        this.unloadCurrentAsset();

        let assetLoader = null;
        try {
            const response = await fetch(modelSource.url);
            if (!response.ok) {
                throw new Error('Unable to fetch model data.');
            }
            const bytes = new Uint8Array(await response.arrayBuffer());
            assetLoader = this.engine.createAssetLoader();
            this.asset = assetLoader.createAsset(bytes);
            if (!this.asset) {
                throw new Error('Failed to create Filament asset.');
            }
            this.instance = this.asset.getInstance();
            await this.loadAssetResources(this.asset, this.instance, assetLoader);
            assetLoader = null;
            hideDropZone();
        } catch (error) {
            if (assetLoader) {
                assetLoader.delete();
            }
            this.unloadCurrentAsset();
            this.revokeCurrentObjectUrls();
            console.error(error);
            showDropZone('Failed to load model: ' + (error.message || error), true);
        }
    }

    async loadAssetResources(asset, instance, assetLoader) {
        const engine = this.engine;
        const onFetched = (uri) => {
            messages.textContent += `Downloaded ${uri}\n`;
        };
        await new Promise((resolve, reject) => {
            const onDone = () => {
                try {
                    assetLoader.delete();
                    const entities = asset.getEntities();
                    const rm = engine.getRenderableManager();
                    for (const entity of entities) {
                        const renderable = rm.getInstance(entity);
                        rm.setCastShadows(renderable, true);
                        renderable.delete();
                    }

                    const cameras = asset.getCameraEntities();
                    if (cameras.length > 0) {
                        let cameraNames = [];
                        for (let i = 0; i < cameras.length; i++) {
                            cameraNames.push("camera" + i);
                        }
                        cameraNames.push(DEFAULT_STRING);
                        let index = 0;
                        guiCameras = guiCameraFolder.add(window, 'CAMERA', cameraNames).name('Cameras');
                        guiCameras.onChange((value) => {
                            index = cameraNames.indexOf(value);
                            if (index < cameras.length) {
                                const c = engine.getCameraComponent(cameras[index]);
                                const aspect = window.innerWidth / window.innerHeight;
                                c.setScaling([1 / aspect, 1]);
                                this.view.setCamera(c);
                            } else {
                                this.view.setCamera(this.defaultCamera);
                                this.camera = this.defaultCamera;
                                this.resize();
                            }
                        });
                    }

                    const variantNames = instance.getMaterialVariantNames();
                    if (variantNames.length > 0) {
                        variantNames.push(DEFAULT_STRING);
                        guiVariants = gui.add(window, 'VARIANT', variantNames).name("Variants");
                        guiVariants.onChange((value) => {
                            const selectedIndex = value == DEFAULT_STRING ? 0 : variantNames.indexOf(value);
                            instance.applyMaterialVariant(selectedIndex);
                        });
                    }

                    const lights = asset.getLightEntities();
                    for (let i = 0; i < lights.length; i++) {
                        this.scene.addEntity(lights[i]);
                    }

                    this.animator = instance.getAnimator();
                    this.animationStartTime = Date.now();

                    if (typeof HavokPhysics !== 'undefined') {
                        HavokPhysics({
                            locateFile: (path) => path.endsWith('.wasm') ? HAVOK_WASM_URL : path
                        }).then((hk) => {
                            HK = hk;
                            return initPhysicsFromUrl(this.currentModelUrl, asset, engine, this.currentScale, this.scene);
                        }).catch((e) => console.warn('Physics init failed:', e));
                    }
                    resolve();
                } catch (error) {
                    reject(error);
                }
            };
            asset.loadResources(onDone, onFetched, this.currentBasePath);
        });
    }

    render() {
        window.requestAnimationFrame(this.render);

        // Step physics
        if (this.asset) {
            const tcm = this.engine.getTransformManager();
            const inst = tcm.getInstance(this.asset.getRoot());
            let m = mat4.create();
            let s = vec3.create();
            vec3.set(s, this.currentScale, this.currentScale, this.currentScale);
            mat4.scale(m, m, s);
            tcm.setTransform(inst, m);
            inst.delete();
        }

        // Add renderable entities to the scene as they become ready.
        let entity;
        const popRenderable = () => {
            if (!this.asset) {
                return false;
            }
            entity = this.asset.popRenderable();
            return entity.getId() != 0;
        }
        while (popRenderable()) {
            this.scene.addEntity(entity);
        }

        if (this.animator && this.instance) {
            const ms = Date.now() - this.animationStartTime;
            for (let i = 0; i < this.instance.getAnimator().getAnimationCount(); i++ ) {
                this.animator.applyAnimation(i, ms / 1000);
                this.animator.updateBoneMatrices();
            }
        }

        // Physics step runs AFTER animator so physics transforms overwrite any animation tracks.
        try { physicsStep(); } catch(e) { console.error('[physics] physicsStep error:', e); HK = null; }
        
        // TODO: Camera and auto-rotation control needs improvement
        let dbgEye, dbgCenter = [0, 0, 0], dbgUp = [0, 1, 0];
        if ( ROTATE ) {
            dbgEye = [0, 0, 3];
            const radians = Date.now() / 10000;
            vec3.rotateY(dbgEye, dbgEye, dbgCenter, radians);
            vec3.transformMat4(dbgEye, dbgEye, this.trackball.getMatrix());
        } else {
            dbgEye = [0, 0.5, 3];
            vec3.transformMat4(dbgEye, dbgEye, this.trackball.getMatrix());
        }
        this.camera.lookAt(dbgEye, dbgCenter, dbgUp);
        this.renderer.render(this.swapChain, this.view);
        const aspect = this.canvas.width / this.canvas.height;
        drawPhysicsDebug(dbgEye, dbgCenter, dbgUp, aspect);
    }

    resize() {
        const dpr = window.devicePixelRatio;
        const width = this.canvas.width = window.innerWidth * dpr;
        const height = this.canvas.height = window.innerHeight * dpr;
        if (physicsDebugCanvas) { physicsDebugCanvas.width = width; physicsDebugCanvas.height = height; }
        this.view.setViewport([0, 0, width, height]);
        const eye = [0, 0.5, 3];
        const center = [0, 0, 0];
        const up = [0, 1, 0];
        this.camera.lookAt(eye, center, up);
        const aspect = width / height;
        const fov = aspect < 1 ? Fov.HORIZONTAL : Fov.VERTICAL;
        this.camera.setProjectionFov(75, aspect, 0.01, 10000.0, fov);
    }
}
