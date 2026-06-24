import {
    createEngine,
    resizeEngine,
    createSceneContext,
    loadGltf,
    addToScene,
    createDefaultCamera,
    createArcRotateCamera,
    attachControl,
    loadEnvironment,
    startEngine,
    onBeforeRender,
    registerScene,
    unregisterScene,
    disposeScene,
    getVariantNames,
    selectVariant,
    resetVariant,
    createDirectionalLight,
    createHavokWorld,
    createPhysicsViewer,
    createPhysicsBody,
    createPhysicsShape,
    createTransformNode,
    addPhysicsShapeChildFromParent,
    createPhysicsConstraint,
    onPhysicsAfterStep,
    setPhysicsBodyShape,
    setPhysicsBodyMassProperties,
    setPhysicsBodyLinearVelocity,
    setPhysicsBodyAngularVelocity,
    setPhysicsShapeFilterMembershipMask,
    setPhysicsShapeFilterCollideMask,
    showPhysicsBody,
    hidePhysicsBody,
    PhysicsMotionType,
    PhysicsShapeType,
    PhysicsConstraintType,
} from "babylon-lite";
import HavokPhysics from "@babylonjs/havok";

const ENV_URL = "../../textures/env/papermillSpecularHDR.env";
const BRDF_URL = "https://esm.sh/gh/BabylonJS/Babylon-Lite@master/packages/babylon-lite/assets/brdf-lut.png";

// Physics simulation step rate for KHR_physics_rigid_bodies models.
const PHYSICS_FPS = 60;

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

const initialModelInfo = getInitialModelInfo();
const DEFAULT_NAME = "[default]";

let params = {
    ROTATE: false,
    CUBEMAP: true,
    IBL: true,
    LIGHTS: false,
    PHYSICS_DEBUG: true,
    VARIANT: DEFAULT_NAME,
    CAMERA: DEFAULT_NAME,
};

const canvas = document.querySelector("#renderCanvas");
const dropZone = document.getElementById("dropZone");
const dropZoneMessage = document.getElementById("dropZoneMessage");
const fileInput = document.getElementById("fileInput");

let currentScene = null;
let currentGui = null;
let currentObjectUrls = [];
let activeLoadToken = 0;
let engineStarted = false;
let emptyScene = null;

function setDropZoneMessage(message, isError) {
    dropZoneMessage.textContent = message;
    dropZone.classList.toggle("error", !!isError);
}

function showDropZone(message, isError) {
    if (message) {
        setDropZoneMessage(message, isError);
    }
    dropZone.classList.remove("hidden");
}

function hideDropZone() {
    dropZone.classList.add("hidden");
    dropZone.classList.remove("dragover");
    dropZone.classList.remove("error");
}

function revokeCurrentObjectUrls() {
    currentObjectUrls.forEach(function(url) {
        URL.revokeObjectURL(url);
    });
    currentObjectUrls = [];
}

function getFileExtension(name) {
    const lastDot = name.lastIndexOf(".");
    return lastDot >= 0 ? name.slice(lastDot).toLowerCase() : "";
}

function isExternalUri(uri) {
    return uri
        && !uri.startsWith("data:")
        && !uri.startsWith("blob:")
        && !/^[a-z]+:/i.test(uri);
}

function getBasename(path) {
    return path.split("/").pop();
}

// Convert a dropped GLB file into a gltf+blob-URL pair that loadGltf can load.
// loadGltf detects GLB via url.endsWith(".glb"), which blob: URLs lack, so we
// parse the binary ourselves and hand back a .gltf JSON blob URL instead.
async function convertGlbToBlobGltf(file, objectUrls) {
    const buffer = await file.arrayBuffer();
    const dv = new DataView(buffer);

    if (dv.getUint32(0, true) !== 0x46546C67) {
        throw new Error("Not a valid GLB file (bad magic)");
    }

    // JSON chunk starts at offset 20
    const jsonLength = dv.getUint32(12, true);
    const json = JSON.parse(new TextDecoder().decode(new Uint8Array(buffer, 20, jsonLength)));

    // BIN chunk (optional) immediately follows JSON chunk
    const binOffset = 20 + jsonLength;
    if (binOffset + 8 <= buffer.byteLength && dv.getUint32(binOffset + 4, true) === 0x004E4942) {
        const binLength = dv.getUint32(binOffset, true);
        const binBlob = new Blob([buffer.slice(binOffset + 8, binOffset + 8 + binLength)], { type: "application/octet-stream" });
        const binUrl = URL.createObjectURL(binBlob);
        objectUrls.push(binUrl);
        // The embedded BIN has no URI in the JSON; add our blob URL so the loader can fetch it
        if (json.buffers && json.buffers.length > 0) {
            json.buffers[0].uri = binUrl;
        }
    }

    const gltfBlob = new Blob([JSON.stringify(json)], { type: "model/gltf+json" });
    const gltfUrl = URL.createObjectURL(gltfBlob);
    objectUrls.push(gltfUrl);
    return gltfUrl;
}

async function createDroppedModelSource(fileList) {
    const files = Array.from(fileList);
    const modelFile = files.find(function(file) {
        const extension = getFileExtension(file.name);
        return extension === ".glb" || extension === ".gltf";
    });

    if (!modelFile) {
        throw new Error("Please drop a `.glb` or `.gltf` file.");
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

    function createTrackedObjectUrl(fileOrBlob) {
        const url = URL.createObjectURL(fileOrBlob);
        objectUrls.push(url);
        return url;
    }

    if (getFileExtension(modelFile.name) === ".glb") {
        // Convert GLB → gltf blob URL so loadGltf (which detects format by extension) works
        const gltfUrl = await convertGlbToBlobGltf(modelFile, objectUrls);
        return {
            url: gltfUrl,
            displayName: modelFile.name,
            objectUrls: objectUrls,
        };
    }

    const gltf = JSON.parse(await modelFile.text());
    const resourceUrls = new Map();

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
            resourceUrls.set(file, createTrackedObjectUrl(file));
        }
        return resourceUrls.get(file);
    }

    if (Array.isArray(gltf.buffers)) {
        gltf.buffers.forEach(function(buffer) {
            if (buffer.uri) {
                buffer.uri = resolveObjectUrl(buffer.uri);
            }
        });
    }

    if (Array.isArray(gltf.images)) {
        gltf.images.forEach(function(image) {
            if (image.uri) {
                image.uri = resolveObjectUrl(image.uri);
            }
        });
    }

    const gltfBlob = new Blob([JSON.stringify(gltf)], { type: "model/gltf+json" });

    return {
        url: createTrackedObjectUrl(gltfBlob),
        displayName: modelFile.name,
        objectUrls: objectUrls,
    };
}

// ── glTF camera helpers ──────────────────────────────────────────────────────

function _qMul(a, b) {
    return {
        x: a.w*b.x + a.x*b.w + a.y*b.z - a.z*b.y,
        y: a.w*b.y - a.x*b.z + a.y*b.w + a.z*b.x,
        z: a.w*b.z + a.x*b.y - a.y*b.x + a.z*b.w,
        w: a.w*b.w - a.x*b.x - a.y*b.y - a.z*b.z,
    };
}

// Rotate vector v by unit quaternion q using Rodrigues' formula
function _rotateByQ(q, v) {
    const tx = 2 * (q.y*v.z - q.z*v.y);
    const ty = 2 * (q.z*v.x - q.x*v.z);
    const tz = 2 * (q.x*v.y - q.y*v.x);
    return {
        x: v.x + q.w*tx + q.y*tz - q.z*ty,
        y: v.y + q.w*ty + q.z*tx - q.x*tz,
        z: v.z + q.w*tz + q.x*ty - q.y*tx,
    };
}

// Fetch a glTF asset URL and return { json, glbBin } where glbBin is the GLB binary
// chunk (ArrayBuffer) or null. Handles .gltf, .glb (binary), and blob: URLs
// (drag-dropped models are normalised to a .gltf JSON blob upstream). Returns
// { json: null, glbBin: null } on fetch/parse failure.
async function fetchGltfAsset(url) {
    try {
        const resp = await fetch(url);
        if (!resp.ok) return { json: null, glbBin: null };
        const buffer = await resp.arrayBuffer();
        const dv = new DataView(buffer);
        // GLB magic "glTF" → walk the binary chunks for the JSON and BIN chunks.
        if (buffer.byteLength >= 12 && dv.getUint32(0, true) === 0x46546C67) {
            let json = null;
            let glbBin = null;
            let offset = 12;
            while (offset + 8 <= dv.byteLength) {
                const chunkLength = dv.getUint32(offset, true);
                const chunkType = dv.getUint32(offset + 4, true);
                const dataStart = offset + 8;
                if (chunkType === 0x4E4F534A) { // "JSON"
                    json = JSON.parse(new TextDecoder().decode(new Uint8Array(buffer, dataStart, chunkLength)));
                } else if (chunkType === 0x004E4942) { // "BIN\0"
                    glbBin = buffer.slice(dataStart, dataStart + chunkLength);
                }
                offset = dataStart + chunkLength;
            }
            return { json, glbBin };
        }
        return { json: JSON.parse(new TextDecoder().decode(new Uint8Array(buffer))), glbBin: null };
    } catch (e) {
        return { json: null, glbBin: null };
    }
}

// Resolve every glTF buffer to an ArrayBuffer: the embedded GLB binary chunk for the
// uri-less buffer, data: URIs decoded inline, and external URIs fetched relative to
// the model. Used to decode collision-only mesh geometry the visual loader skips.
async function resolveGltfBuffers(json, baseUrl, glbBin) {
    const buffers = [];
    for (const buffer of (json.buffers || [])) {
        if (!buffer.uri) {
            buffers.push(glbBin);
        } else if (buffer.uri.startsWith("data:")) {
            const base64 = buffer.uri.slice(buffer.uri.indexOf(",") + 1);
            const binary = atob(base64);
            const bytes = new Uint8Array(binary.length);
            for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
            buffers.push(bytes.buffer);
        } else {
            const resp = await fetch(new URL(buffer.uri, baseUrl).href);
            buffers.push(await resp.arrayBuffer());
        }
    }
    return buffers;
}

// Read a VEC3 FLOAT accessor (e.g. POSITION) as a flat Float32Array, honouring bufferView stride.
function readAccessorVec3(json, buffers, accessorIndex) {
    const acc = json.accessors[accessorIndex];
    const bv = json.bufferViews[acc.bufferView];
    const dv = new DataView(buffers[bv.buffer]);
    const base = (bv.byteOffset || 0) + (acc.byteOffset || 0);
    const stride = bv.byteStride || 12;
    const out = new Float32Array(acc.count * 3);
    for (let i = 0; i < acc.count; i++) {
        const o = base + i * stride;
        out[i * 3] = dv.getFloat32(o, true);
        out[i * 3 + 1] = dv.getFloat32(o + 4, true);
        out[i * 3 + 2] = dv.getFloat32(o + 8, true);
    }
    return out;
}

// Read a SCALAR index accessor (ubyte/ushort/uint) as a Uint32Array.
function readAccessorIndices(json, buffers, accessorIndex) {
    const acc = json.accessors[accessorIndex];
    const bv = json.bufferViews[acc.bufferView];
    const dv = new DataView(buffers[bv.buffer]);
    const base = (bv.byteOffset || 0) + (acc.byteOffset || 0);
    const size = acc.componentType === 5125 ? 4 : acc.componentType === 5123 ? 2 : 1;
    const stride = bv.byteStride || size;
    const out = new Uint32Array(acc.count);
    for (let i = 0; i < acc.count; i++) {
        const o = base + i * stride;
        out[i] = acc.componentType === 5125 ? dv.getUint32(o, true)
            : acc.componentType === 5123 ? dv.getUint16(o, true)
            : dv.getUint8(o);
    }
    return out;
}

// Build a minimal mesh-like object (positions + indices + a pure-scale world matrix) from a glTF
// mesh's accessors, for collider meshes the visual loader never instantiates (collision-only or a
// mesh index differing from the node's own). It exposes exactly what Lite's MeshAccumulator reads.
function buildColliderMeshFromGltf(json, buffers, meshIndex, scale) {
    const positions = [];
    const indices = [];
    let vertexOffset = 0;
    for (const prim of (json.meshes[meshIndex].primitives || [])) {
        if (prim.attributes?.POSITION === undefined) continue;
        const pos = readAccessorVec3(json, buffers, prim.attributes.POSITION);
        for (let i = 0; i < pos.length; i++) positions.push(pos[i]);
        if (prim.indices !== undefined) {
            const idx = readAccessorIndices(json, buffers, prim.indices);
            for (let i = 0; i < idx.length; i++) indices.push(idx[i] + vertexOffset);
        } else {
            const count = pos.length / 3;
            for (let i = 0; i < count; i++) indices.push(i + vertexOffset);
        }
        vertexOffset += pos.length / 3;
    }
    const [sx, sy, sz] = scale;
    return {
        _gpu: {},
        _cpuPositions: Float32Array.from(positions),
        _cpuIndices: Uint32Array.from(indices),
        scaling: { x: sx, y: sy, z: sz },
        worldMatrix: [sx, 0, 0, 0, 0, sy, 0, 0, 0, 0, sz, 0, 0, 0, 0, 1],
        children: [],
    };
}

// Read a MAT4 FLOAT accessor (e.g. inverseBindMatrices) as a flat Float32Array (16 per element).
function readAccessorMat4(json, buffers, accessorIndex) {
    const acc = json.accessors[accessorIndex];
    const bv = json.bufferViews[acc.bufferView];
    const dv = new DataView(buffers[bv.buffer]);
    const base = (bv.byteOffset || 0) + (acc.byteOffset || 0);
    const out = new Float32Array(acc.count * 16);
    for (let i = 0; i < acc.count * 16; i++) {
        out[i] = dv.getFloat32(base + i * 4, true);
    }
    return out;
}

// Invert a column-major 4x4 matrix (16-element array). Returns null when singular.
function mat4Invert(m) {
    const inv = new Array(16);
    inv[0] = m[5]*m[10]*m[15] - m[5]*m[11]*m[14] - m[9]*m[6]*m[15] + m[9]*m[7]*m[14] + m[13]*m[6]*m[11] - m[13]*m[7]*m[10];
    inv[4] = -m[4]*m[10]*m[15] + m[4]*m[11]*m[14] + m[8]*m[6]*m[15] - m[8]*m[7]*m[14] - m[12]*m[6]*m[11] + m[12]*m[7]*m[10];
    inv[8] = m[4]*m[9]*m[15] - m[4]*m[11]*m[13] - m[8]*m[5]*m[15] + m[8]*m[7]*m[13] + m[12]*m[5]*m[11] - m[12]*m[7]*m[9];
    inv[12] = -m[4]*m[9]*m[14] + m[4]*m[10]*m[13] + m[8]*m[5]*m[14] - m[8]*m[6]*m[13] - m[12]*m[5]*m[10] + m[12]*m[6]*m[9];
    inv[1] = -m[1]*m[10]*m[15] + m[1]*m[11]*m[14] + m[9]*m[2]*m[15] - m[9]*m[3]*m[14] - m[13]*m[2]*m[11] + m[13]*m[3]*m[10];
    inv[5] = m[0]*m[10]*m[15] - m[0]*m[11]*m[14] - m[8]*m[2]*m[15] + m[8]*m[3]*m[14] + m[12]*m[2]*m[11] - m[12]*m[3]*m[10];
    inv[9] = -m[0]*m[9]*m[15] + m[0]*m[11]*m[13] + m[8]*m[1]*m[15] - m[8]*m[3]*m[13] - m[12]*m[1]*m[11] + m[12]*m[3]*m[9];
    inv[13] = m[0]*m[9]*m[14] - m[0]*m[10]*m[13] - m[8]*m[1]*m[14] + m[8]*m[2]*m[13] + m[12]*m[1]*m[10] - m[12]*m[2]*m[9];
    inv[2] = m[1]*m[6]*m[15] - m[1]*m[7]*m[14] - m[5]*m[2]*m[15] + m[5]*m[3]*m[14] + m[13]*m[2]*m[7] - m[13]*m[3]*m[6];
    inv[6] = -m[0]*m[6]*m[15] + m[0]*m[7]*m[14] + m[4]*m[2]*m[15] - m[4]*m[3]*m[14] - m[12]*m[2]*m[7] + m[12]*m[3]*m[6];
    inv[10] = m[0]*m[5]*m[15] - m[0]*m[7]*m[13] - m[4]*m[1]*m[15] + m[4]*m[3]*m[13] + m[12]*m[1]*m[7] - m[12]*m[3]*m[5];
    inv[14] = -m[0]*m[5]*m[14] + m[0]*m[6]*m[13] + m[4]*m[1]*m[14] - m[4]*m[2]*m[13] - m[12]*m[1]*m[6] + m[12]*m[2]*m[5];
    inv[3] = -m[1]*m[6]*m[11] + m[1]*m[7]*m[10] + m[5]*m[2]*m[11] - m[5]*m[3]*m[10] - m[9]*m[2]*m[7] + m[9]*m[3]*m[6];
    inv[7] = m[0]*m[6]*m[11] - m[0]*m[7]*m[10] - m[4]*m[2]*m[11] + m[4]*m[3]*m[10] + m[8]*m[2]*m[7] - m[8]*m[3]*m[6];
    inv[11] = -m[0]*m[5]*m[11] + m[0]*m[7]*m[9] + m[4]*m[1]*m[11] - m[4]*m[3]*m[9] - m[8]*m[1]*m[7] + m[8]*m[3]*m[5];
    inv[15] = m[0]*m[5]*m[10] - m[0]*m[6]*m[9] - m[4]*m[1]*m[10] + m[4]*m[2]*m[9] + m[8]*m[1]*m[6] - m[8]*m[2]*m[5];
    let det = m[0]*inv[0] + m[1]*inv[4] + m[2]*inv[8] + m[3]*inv[12];
    if (det === 0) return null;
    det = 1 / det;
    for (let i = 0; i < 16; i++) inv[i] *= det;
    return inv;
}

// Parse the cameras from a glTF JSON object and return their world positions
// (in glTF right-handed coordinates) together with per-camera perspective params.
// Returns [] when no cameras are defined in the file.
function parseGltfCameras(json) {
    const nodes = json.nodes || [];
    const cameras = json.cameras || [];
    if (cameras.length === 0) return [];

    // Map child index → parent index
    const parentOf = new Map();
    for (let i = 0; i < nodes.length; i++) {
        for (const childIdx of (nodes[i].children || [])) {
            parentOf.set(childIdx, i);
        }
    }

    // Compute the world position of a node by walking up to the root and
    // accumulating TRS transforms (scale ignored for position accuracy).
    function computeWorldPos(startIdx) {
        const chain = [startIdx];
        let cur = startIdx;
        while (parentOf.has(cur)) { cur = parentOf.get(cur); chain.push(cur); }
        chain.reverse();

        let pos = { x: 0, y: 0, z: 0 };
        let rot = { x: 0, y: 0, z: 0, w: 1 }; // identity
        for (const idx of chain) {
            const n = nodes[idx];
            const lt = n.translation || [0, 0, 0];
            const lr = n.rotation   || [0, 0, 0, 1]; // [x,y,z,w]
            const localPos = { x: lt[0], y: lt[1], z: lt[2] };
            const localRot = { x: lr[0], y: lr[1], z: lr[2], w: lr[3] };
            const rotated = _rotateByQ(rot, localPos);
            pos.x += rotated.x; pos.y += rotated.y; pos.z += rotated.z;
            rot = _qMul(rot, localRot);
        }
        return pos;
    }

    const result = [];
    for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        if (node.camera === undefined) continue;
        const camDef = cameras[node.camera];
        if (!camDef) continue;
        result.push({
            name: node.name || camDef.name || `Camera ${node.camera}`,
            worldPos: computeWorldPos(i),
            fov:       camDef.perspective?.yfov  ?? 0.8,
            nearPlane: camDef.perspective?.znear  ?? 0.1,
            farPlane:  camDef.perspective?.zfar   ?? 1000,
        });
    }
    return result;
}

// ── glTF Physics (KHR_physics_rigid_bodies + KHR_implicit_shapes) ─────────────
//
// Babylon Lite has no built-in glTF-physics loader, so we parse the asset's
// physics extensions ourselves and drive each body with the Lite Havok wrapper.
// Bodies are reconstructed at the Babylon left-handed world pose
// decompose(F * node-world), F = diag(-1, 1, 1), to match Babylon's glTF importer.
// Adapted from cx20/webgl-physics-examples (babylon-lite/havok/gltf_physics_*).

// HavokPhysics() loads a multi-MB WASM module; load it lazily and only once, the
// first time a physics-enabled model is opened.
let havokInstancePromise = null;
function loadHavok() {
    if (!havokInstancePromise) {
        havokInstancePromise = HavokPhysics();
    }
    return havokInstancePromise;
}

function composeTRS(t, q, s) {
    const [x, y, z, w] = q;
    const [sx, sy, sz] = s;
    const m00 = 1 - 2 * (y * y + z * z), m01 = 2 * (x * y - z * w), m02 = 2 * (x * z + y * w);
    const m10 = 2 * (x * y + z * w), m11 = 1 - 2 * (x * x + z * z), m12 = 2 * (y * z - x * w);
    const m20 = 2 * (x * z - y * w), m21 = 2 * (y * z + x * w), m22 = 1 - 2 * (x * x + y * y);
    return [m00 * sx, m10 * sx, m20 * sx, 0, m01 * sy, m11 * sy, m21 * sy, 0, m02 * sz, m12 * sz, m22 * sz, 0, t[0], t[1], t[2], 1];
}

function mat4Multiply(a, b) {
    const o = new Array(16);
    for (let c = 0; c < 4; c++) for (let r = 0; r < 4; r++) {
        let v = 0;
        for (let k = 0; k < 4; k++) v += a[k * 4 + r] * b[c * 4 + k];
        o[c * 4 + r] = v;
    }
    return o;
}

function nodeLocalMatrix(node) {
    if (node.matrix) return node.matrix.slice();
    return composeTRS(node.translation || [0, 0, 0], node.rotation || [0, 0, 0, 1], node.scale || [1, 1, 1]);
}

function nodeWorldMatrix(json, parentMap, index) {
    let m = nodeLocalMatrix(json.nodes[index]);
    for (let p = parentMap[index]; p !== undefined; p = parentMap[p]) m = mat4Multiply(nodeLocalMatrix(json.nodes[p]), m);
    return m;
}

function applyLeftHandedFlip(m) {
    const o = m.slice();
    o[0] = -o[0]; o[4] = -o[4]; o[8] = -o[8]; o[12] = -o[12];
    return o;
}

function matrixToQuaternion(r) {
    const m00 = r[0], m10 = r[1], m20 = r[2], m01 = r[4], m11 = r[5], m21 = r[6], m02 = r[8], m12 = r[9], m22 = r[10];
    const trace = m00 + m11 + m22;
    let x, y, z, w, s;
    if (trace > 0) {
        s = Math.sqrt(trace + 1) * 2; w = 0.25 * s; x = (m21 - m12) / s; y = (m02 - m20) / s; z = (m10 - m01) / s;
    } else if (m00 > m11 && m00 > m22) {
        s = Math.sqrt(1 + m00 - m11 - m22) * 2; w = (m21 - m12) / s; x = 0.25 * s; y = (m01 + m10) / s; z = (m02 + m20) / s;
    } else if (m11 > m22) {
        s = Math.sqrt(1 + m11 - m00 - m22) * 2; w = (m02 - m20) / s; x = (m01 + m10) / s; y = 0.25 * s; z = (m12 + m21) / s;
    } else {
        s = Math.sqrt(1 + m22 - m00 - m11) * 2; w = (m10 - m01) / s; x = (m02 + m20) / s; y = (m12 + m21) / s; z = 0.25 * s;
    }
    return [x, y, z, w];
}

function decomposeMatrix(m) {
    const position = [m[12], m[13], m[14]];
    let sx = Math.hypot(m[0], m[1], m[2]);
    const sy = Math.hypot(m[4], m[5], m[6]);
    const sz = Math.hypot(m[8], m[9], m[10]);
    const det = m[0] * (m[5] * m[10] - m[6] * m[9]) - m[4] * (m[1] * m[10] - m[2] * m[9]) + m[8] * (m[1] * m[6] - m[2] * m[5]);
    if (det < 0) sx = -sx;
    const r = [m[0] / sx, m[1] / sx, m[2] / sx, 0, m[4] / sy, m[5] / sy, m[6] / sy, 0, m[8] / sz, m[9] / sz, m[10] / sz, 0];
    return { position, quaternion: matrixToQuaternion(r), scale: [sx, sy, sz] };
}

function quatRotate(q, v) {
    const [x, y, z, w] = q;
    const [vx, vy, vz] = v;
    const ix = w * vx + y * vz - z * vy;
    const iy = w * vy + z * vx - x * vz;
    const iz = w * vz + x * vy - y * vx;
    const iw = -x * vx - y * vy - z * vz;
    return [
        ix * w + iw * -x + iy * -z - iz * -y,
        iy * w + iw * -y + iz * -x - ix * -z,
        iz * w + iw * -z + ix * -y - iy * -x,
    ];
}

function normalizeVec(v) {
    const l = Math.hypot(v[0], v[1], v[2]) || 1;
    return { x: v[0] / l, y: v[1] / l, z: v[2] / l };
}

function multiplyQuat(a, b) {
    const [ax, ay, az, aw] = a;
    const [bx, by, bz, bw] = b;
    return [
        aw * bx + ax * bw + ay * bz - az * by,
        aw * by - ax * bz + ay * bw + az * bx,
        aw * bz + ax * by - ay * bx + az * bw,
        aw * bw - ax * bx - ay * by - az * bz,
    ];
}

function buildParentMap(json) {
    const parent = {};
    json.nodes.forEach((node, i) => (node.children || []).forEach((c) => (parent[c] = i)));
    return parent;
}

function reparentNode(child, newParent) {
    const old = child.parent;
    if (old && Array.isArray(old.children)) {
        const i = old.children.indexOf(child);
        if (i >= 0) old.children.splice(i, 1);
    }
    child.parent = newParent;
    newParent.children.push(child);
}

// Map every glTF node index to the Lite TransformNode created by loadGltf. The Lite
// loader mirrors the glTF node hierarchy, so root.children[i] matches scene root i.
function buildNodeToTransformNode(json, root) {
    const map = new Map();
    const walk = (nodeIndex, tn) => {
        map.set(nodeIndex, tn);
        const childIndices = json.nodes[nodeIndex].children || [];
        for (let i = 0; i < childIndices.length; i++) walk(childIndices[i], tn.children[i]);
    };
    const sceneRoots = json.scenes?.[json.scene ?? 0]?.nodes ?? [];
    for (let i = 0; i < sceneRoots.length; i++) walk(sceneRoots[i], root.children[i]);
    return map;
}

function primitiveShapeOptions(shapeDef, absScale) {
    const maxXZ = Math.max(absScale[0], absScale[2]);
    const maxAll = Math.max(absScale[0], absScale[1], absScale[2]);
    if (shapeDef.type === 'box') {
        const s = shapeDef.box?.size || [1, 1, 1];
        return { type: PhysicsShapeType.BOX, parameters: { center: { x: 0, y: 0, z: 0 }, extents: { x: s[0] * absScale[0], y: s[1] * absScale[1], z: s[2] * absScale[2] } } };
    }
    if (shapeDef.type === 'sphere') {
        return { type: PhysicsShapeType.SPHERE, parameters: { center: { x: 0, y: 0, z: 0 }, radius: (shapeDef.sphere?.radius ?? 0.5) * maxAll } };
    }
    if (shapeDef.type === 'capsule') {
        const c = shapeDef.capsule || {};
        const radius = ((c.radiusTop ?? 0.5) + (c.radiusBottom ?? 0.5)) * 0.5 * maxXZ;
        const half = (c.height ?? 1) * 0.5 * absScale[1];
        return { type: PhysicsShapeType.CAPSULE, parameters: { pointA: { x: 0, y: -half, z: 0 }, pointB: { x: 0, y: half, z: 0 }, radius } };
    }
    if (shapeDef.type === 'cylinder') {
        const c = shapeDef.cylinder || {};
        const radius = Math.max(c.radiusTop ?? 0.5, c.radiusBottom ?? 0.5) * maxXZ;
        const half = (c.height ?? 1) * 0.5 * absScale[1];
        return { type: PhysicsShapeType.CYLINDER, parameters: { pointA: { x: 0, y: -half, z: 0 }, pointB: { x: 0, y: half, z: 0 }, radius } };
    }
    return null;
}

// Apply a KHR_physics_rigid_bodies "motion" block to a dynamic body: mass, centre of
// mass, inertia, gravity factor (negative = floating balloons), and initial velocities.
// absScale is the body's world scale (magnitude); the centre of mass is given in unscaled
// node-local units, so it must be scaled to match (the official loader does the same).
// defaultInertia supplies a fallback inertia for shapeless bodies (empty collider) whose
// inertia Havok cannot derive from a shape.
function applyMotionProperties(world, hknp, body, motion, absScale, defaultInertia) {
    const s = absScale || [1, 1, 1];
    const massProps = { mass: motion.mass ?? 1 };
    if (Array.isArray(motion.centerOfMass)) massProps.centerOfMass = { x: motion.centerOfMass[0] * s[0], y: motion.centerOfMass[1] * s[1], z: motion.centerOfMass[2] * s[2] };
    if (Array.isArray(motion.inertiaDiagonal)) massProps.inertia = { x: motion.inertiaDiagonal[0], y: motion.inertiaDiagonal[1], z: motion.inertiaDiagonal[2] };
    else if (defaultInertia) massProps.inertia = { x: 1, y: 1, z: 1 };
    if (Array.isArray(motion.inertiaOrientation)) massProps.inertiaOrientation = { x: motion.inertiaOrientation[0], y: motion.inertiaOrientation[1], z: motion.inertiaOrientation[2], w: motion.inertiaOrientation[3] };
    setPhysicsBodyMassProperties(world, body, massProps);

    // gravityFactor has no Lite wrapper setter -> use the raw Havok call.
    if (motion.gravityFactor !== undefined && typeof hknp.HP_Body_SetGravityFactor === 'function') {
        hknp.HP_Body_SetGravityFactor(body._hkBody, motion.gravityFactor);
    }
    // Velocities are in the glTF (right-handed) world frame; convert to the left-handed scene
    // (F = diag(-1,1,1)). A linear velocity is a true vector (negate X); an angular velocity is a
    // pseudovector (preserve X, negate Y and Z).
    if (Array.isArray(motion.linearVelocity)) setPhysicsBodyLinearVelocity(world, body, { x: -motion.linearVelocity[0], y: motion.linearVelocity[1], z: motion.linearVelocity[2] });
    if (Array.isArray(motion.angularVelocity)) setPhysicsBodyAngularVelocity(world, body, { x: motion.angularVelocity[0], y: -motion.angularVelocity[1], z: -motion.angularVelocity[2] });
}

// Returns true when the asset declares any KHR_physics_rigid_bodies node bodies.
function hasGltfPhysics(json) {
    if (!json || !json.nodes) return false;
    return json.nodes.some(function(n) { return n.extensions && n.extensions.KHR_physics_rigid_bodies; });
}

// A node owns a rigid body when it declares motion and/or a collider (compound parents and shapeless
// "driver" bodies carry motion but no collider; static colliders carry no motion).
function isPhysicsBodyRoot(json, nodeIndex) {
    const p = json.nodes[nodeIndex].extensions?.KHR_physics_rigid_bodies;
    return !!(p && (p.motion || p.collider));
}

// The joint frames are built with axisA = F·gltfX, perpAxisA = F·gltfY (F = diag(-1,1,1), the
// left-handed flip baked into the body scale). Havok derives the frame's Z as axisA × perpAxisA, so
// the improper flip (det F = -1) lands on the Z basis and on the rotation sense. Mapping a glTF
// limit/target onto this frame therefore needs a per-axis sign: linear flips Z only; angular flips
// X and Y (not Z). Locked (0) and symmetric ranges are unaffected.
function jointAxisSign(isLinear, axisIndex) {
    return isLinear ? (axisIndex === 2 ? -1 : 1) : (axisIndex === 2 ? 1 : -1);
}

// Apply a glTF joint's drives (motors) to a constraint, best-effort. The Lite wrapper exposes only
// limits, so the motor functions are called on the raw Havok constraint handle. glTF drives are
// spring motors (PD controllers): stiffness pulls toward positionTarget, damping toward
// velocityTarget; mode "force" vs "acceleration" selects the spring type. maxForce defaults to a
// large value (matching the official loader) so the motor actually drives. Failures are swallowed so
// a missing/renamed enum never aborts the rest of the physics setup.
function applyJointDrives(hknp, constraint, jointDef) {
    const drives = jointDef.drives;
    if (!drives || !drives.length) return;
    const CA = hknp.ConstraintAxis;
    const MT = hknp.ConstraintMotorType;
    const joint = constraint._hkConstraint;
    if (!CA || !MT || !joint) return;
    const linAxes = [CA.LINEAR_X, CA.LINEAR_Y, CA.LINEAR_Z];
    const angAxes = [CA.ANGULAR_X, CA.ANGULAR_Y, CA.ANGULAR_Z];
    for (const d of drives) {
        try {
            const isLinear = d.type === "linear";
            const axisIndex = d.axis ?? 0;
            const nativeAxis = (isLinear ? linAxes : angAxes)[axisIndex];
            if (nativeAxis === undefined) continue;
            const motorType = d.mode === "force" ? MT.SPRING_FORCE : MT.SPRING_ACCELERATION;
            hknp.HP_Constraint_SetAxisMotorType(joint, nativeAxis, motorType);
            const sign = jointAxisSign(isLinear, axisIndex);
            if (d.velocityTarget !== undefined) hknp.HP_Constraint_SetAxisMotorVelocityTarget(joint, nativeAxis, d.velocityTarget * sign);
            if (d.positionTarget !== undefined) hknp.HP_Constraint_SetAxisMotorPositionTarget(joint, nativeAxis, d.positionTarget * sign);
            hknp.HP_Constraint_SetAxisMotorStiffness(joint, nativeAxis, d.stiffness ?? 0);
            hknp.HP_Constraint_SetAxisMotorDamping(joint, nativeAxis, d.damping ?? 0);
            hknp.HP_Constraint_SetAxisMotorMaxForce(joint, nativeAxis, d.maxForce ?? 34e37);
        } catch (error) {
            console.warn("[glTF Physics] Failed to apply joint drive:", error);
        }
    }
}

// Build the SIX_DOF constraints declared by KHR_physics_rigid_bodies joints. glTF joints are
// generic 6-DoF definitions (per-axis min/max limits); each jointSpace node owns one joint and
// references the connected node's frame. Adapted from the gltf_physics_JointTypes reference.
function buildGltfJoints(world, hknp, scene, json, parentMap, jointDefs, bodyByNode) {
    if (!jointDefs.length) return;

    // Resolve a jointSpace node to its owning body plus the anchor frame in that body's local space,
    // or null when the node has no body-root ancestor (= a world-fixed connection, handled below).
    const resolveBodyFrame = (jointSpaceIndex) => {
        let m = nodeLocalMatrix(json.nodes[jointSpaceIndex]);
        for (let cur = parentMap[jointSpaceIndex]; cur !== undefined; cur = parentMap[cur]) {
            if (isPhysicsBodyRoot(json, cur)) {
                const entry = bodyByNode.get(cur);
                if (!entry) return null;
                const d = decomposeMatrix(m);
                const sc = entry.scale; // body's decomposed scale (carries the -X flip)
                const pivot = { x: d.position[0] * sc[0], y: d.position[1] * sc[1], z: d.position[2] * sc[2] };
                const ax = quatRotate(d.quaternion, [1, 0, 0]);
                const pe = quatRotate(d.quaternion, [0, 1, 0]);
                const axis = normalizeVec([ax[0] * sc[0], ax[1] * sc[1], ax[2] * sc[2]]);
                const perp = normalizeVec([pe[0] * sc[0], pe[1] * sc[1], pe[2] * sc[2]]);
                return { body: entry.body, pivot, axis, perp };
            }
            m = mat4Multiply(nodeLocalMatrix(json.nodes[cur]), m);
        }
        return null;
    };

    // Create a static, shapeless world-anchor body at a node's left-handed world pose, for joints
    // whose connected node has no rigid body (a fixed-to-world connection). The frame is identity.
    const worldAnchorFrame = (jointSpaceIndex) => {
        const lh = decomposeMatrix(applyLeftHandedFlip(nodeWorldMatrix(json, parentMap, jointSpaceIndex)));
        const anchor = createTransformNode("worldAnchor_" + jointSpaceIndex);
        anchor.position.set(lh.position[0], lh.position[1], lh.position[2]);
        anchor.rotationQuaternion.set(lh.quaternion[0], lh.quaternion[1], lh.quaternion[2], lh.quaternion[3]);
        addToScene(scene, anchor);
        const body = createPhysicsBody(world, anchor, PhysicsMotionType.STATIC);
        setPhysicsBodyShape(world, body, createPhysicsShape(world, { type: PhysicsShapeType.CONTAINER }));
        return { body, pivot: { x: 0, y: 0, z: 0 }, axis: { x: 1, y: 0, z: 0 }, perp: { x: 0, y: 1, z: 0 } };
    };

    // Convert a glTF joint's per-axis limits to Lite SIX_DOF limits (LINEAR_X/Y/Z = 0..2,
    // ANGULAR_X/Y/Z = 3..5, LINEAR_DISTANCE = 6). Listed axes are locked (min==max==0) or limited;
    // unlisted axes stay free. Each axis takes the same left-handed sign as its drive
    // (see jointAxisSign); a negated range [min,max] becomes [-max,-min] to keep min<=max.
    const limitRange = (sign, min, max) => sign < 0
        ? { minLimit: max != null ? -max : undefined, maxLimit: min != null ? -min : undefined }
        : { minLimit: min, maxLimit: max };
    const buildLimits = (jointDef) => {
        const out = [];
        for (const lim of (jointDef.limits || [])) {
            if (lim.linearAxes && lim.linearAxes.length === 3) {
                out.push({ axis: 6, minLimit: lim.min, maxLimit: lim.max, stiffness: lim.stiffness, damping: lim.damping });
                continue;
            }
            for (const a of (lim.linearAxes || [])) {
                const r = limitRange(jointAxisSign(true, a), lim.min, lim.max);
                out.push({ axis: a, minLimit: r.minLimit, maxLimit: r.maxLimit, stiffness: lim.stiffness, damping: lim.damping });
            }
            for (const a of (lim.angularAxes || [])) {
                const r = limitRange(jointAxisSign(false, a), lim.min, lim.max);
                out.push({ axis: 3 + a, minLimit: r.minLimit, maxLimit: r.maxLimit, stiffness: lim.stiffness, damping: lim.damping });
            }
        }
        return out;
    };

    for (let nodeIndex = 0; nodeIndex < json.nodes.length; nodeIndex++) {
        const joint = json.nodes[nodeIndex].extensions?.KHR_physics_rigid_bodies?.joint;
        if (!joint) continue;
        try {
            const frameA = resolveBodyFrame(nodeIndex) || worldAnchorFrame(nodeIndex);
            const frameB = resolveBodyFrame(joint.connectedNode) || worldAnchorFrame(joint.connectedNode);
            const jointDef = jointDefs[joint.joint] || {};
            const constraint = createPhysicsConstraint(
                world,
                frameA.body,
                frameB.body,
                PhysicsConstraintType.SIX_DOF,
                {
                    pivotA: frameA.pivot, axisA: frameA.axis, perpAxisA: frameA.perp,
                    pivotB: frameB.pivot, axisB: frameB.axis, perpAxisB: frameB.perp,
                    collision: !!joint.enableCollision,
                },
                buildLimits(jointDef),
            );
            applyJointDrives(hknp, constraint, jointDef);
        } catch (error) {
            console.warn("[glTF Physics] Failed to build joint at node " + nodeIndex + ":", error);
        }
    }
}

// Skinned meshes deform from Lite's animation system, not from live node transforms, so a skin bound
// to physics-driven bones (a ragdoll, e.g. Robot_skinned) stays at its bind pose while the bones move.
// Each frame, nudge every bone matrix by the bone's world-space motion since the bind pose and
// re-upload the bone texture so the skin follows the physics bodies.
//
// A convention-agnostic delta keeps us independent of how Lite stores its inverse bind matrices:
//   boneMatrix_live = invMeshWorld . liveBoneWorld . invBindBoneWorld . meshWorld . boneMatrix_bind
// Bind matrices (meshWorld/boneWorld) are taken from the glTF, left-hand-flipped exactly like the
// physics bodies (F = diag(-1,1,1) = Lite's RH_TO_LH); boneMatrix_bind is Lite's own value captured
// on the first frame. At the bind pose this reduces to boneMatrix_bind, so there is no pop.
// Best-effort: any missing internal field disables it for that mesh (skin stays at bind pose).
function setupSkinnedMeshFollow(scene, engine, json, parentMap, nodeToTN) {
    const device = engine?._device;
    if (!device || !json.skins) return;
    for (let nodeIndex = 0; nodeIndex < json.nodes.length; nodeIndex++) {
        const node = json.nodes[nodeIndex];
        if (node.mesh === undefined || node.skin === undefined) continue;
        // The skeleton lives on the renderable mesh, which may be the node's transform node or a
        // descendant of it; search the subtree for the object that carries it.
        let skel = null;
        (function walk(n, depth) {
            if (!n || skel || depth > 4) return;
            if (n.skeleton) { skel = n.skeleton; return; }
            if (Array.isArray(n.children)) for (const c of n.children) walk(c, depth + 1);
        })(nodeToTN.get(nodeIndex), 0);
        if (!skel || !skel.boneMatrices || !skel.boneTexture) continue;

        const skin = json.skins[node.skin];
        const joints = skin && skin.joints;
        if (!joints || !joints.length) continue;
        const boneNodes = joints.map((j) => nodeToTN.get(j));
        if (boneNodes.some((b) => !b || !b.worldMatrix)) continue;

        const meshWorldBind = applyLeftHandedFlip(nodeWorldMatrix(json, parentMap, nodeIndex));
        const invMeshWorldBind = mat4Invert(meshWorldBind);
        if (!invMeshWorldBind) continue;
        // invBindBoneWorld[bi] . meshWorldBind, finished with boneMatrix_bind on the first frame.
        const partial = joints.map((j) => {
            const inv = mat4Invert(applyLeftHandedFlip(nodeWorldMatrix(json, parentMap, j)));
            return inv ? mat4Multiply(inv, meshWorldBind) : null;
        });
        if (partial.some((p) => !p)) continue;

        const boneData = skel.boneMatrices;
        const boneCount = joints.length;
        const texWidth = boneCount * 4;
        let rhs = null; // invBindBoneWorld . meshWorld . boneMatrix_bind, per bone (captured once)
        onBeforeRender(scene, function() {
            try {
                if (!rhs) {
                    rhs = partial.map((p, bi) => mat4Multiply(p, boneData.slice(bi * 16, bi * 16 + 16)));
                }
                for (let bi = 0; bi < boneCount; bi++) {
                    const toMesh = mat4Multiply(boneNodes[bi].worldMatrix, rhs[bi]);
                    const bm = mat4Multiply(invMeshWorldBind, toMesh);
                    for (let k = 0; k < 16; k++) boneData[bi * 16 + k] = bm[k];
                }
                device.queue.writeTexture({ texture: skel.boneTexture }, boneData.buffer, { bytesPerRow: texWidth * 16 }, { width: texWidth, height: 1 });
            } catch (e) { /* keep the last computed pose */ }
        });
    }
}

// Build Havok rigid bodies from a model's glTF physics extensions and reparent the
// matching visual subtrees under physics anchors so they follow the simulation.
// Returns { world, viewer, bodies } or null when the asset has no physics.
async function setupGltfPhysics(scene, engine, json, loadedAsset, glbBin, baseUrl) {
    const shapeDefs = json.extensions?.KHR_implicit_shapes?.shapes || [];
    const scenePhysics = json.extensions?.KHR_physics_rigid_bodies || {};
    const materialDefs = scenePhysics.physicsMaterials || [];
    const jointDefs = scenePhysics.physicsJoints || [];
    const collisionFilters = scenePhysics.collisionFilters || [];
    const parentMap = buildParentMap(json);

    // Collider meshes the visual loader never instantiates (collision-only, or a mesh index
    // differing from the node's own) must be decoded straight from the glTF buffers.
    const needsBuffers = json.nodes.some(function(n) {
        const g = n.extensions?.KHR_physics_rigid_bodies?.collider?.geometry;
        return g && g.shape === undefined && g.mesh !== undefined && n.mesh !== g.mesh;
    });
    let buffers = null;
    if (needsBuffers) {
        try {
            buffers = await resolveGltfBuffers(json, baseUrl, glbBin);
        } catch (error) {
            console.warn("[glTF Physics] Failed to resolve buffers for collision-only meshes:", error);
        }
    }

    const hknp = await loadHavok();
    const world = createHavokWorld(scene, hknp, { x: 0, y: -9.8, z: 0 });
    const viewer = createPhysicsViewer(scene, world, { color: [0, 1, 0, 1] });
    const combine = hknp.MaterialCombine;
    const bodies = [];
    // nodeIndex -> { body, scale } for joint frame resolution; kinematic spinners driven each step.
    const bodyByNode = new Map();
    const spinners = [];

    const root = loadedAsset.entities[0];
    const nodeToTN = buildNodeToTransformNode(json, root);

    // Map a glTF physicsMaterial combine string to a native Havok combine mode.
    const combineMode = (name, fallback) => {
        switch (name) {
            case "average": return combine.ARITHMETIC_MEAN;
            case "minimum": return combine.MINIMUM;
            case "maximum": return combine.MAXIMUM;
            case "multiply": return combine.MULTIPLY;
            default: return fallback;
        }
    };
    // The Havok material array is [staticFriction, dynamicFriction, restitution, frictionCombine,
    // restitutionCombine]. Defaults follow the official loader: friction MAXIMUM, restitution MINIMUM.
    const setMaterial = (shape, matIndex) => {
        const matDef = matIndex !== undefined ? materialDefs[matIndex] : null;
        const staticFriction = matDef?.staticFriction ?? 0.5;
        const dynamicFriction = matDef?.dynamicFriction ?? 0.5;
        const restitution = matDef?.restitution ?? 0;
        const frictionCombine = combineMode(matDef?.frictionCombine, combine.MAXIMUM);
        const restitutionCombine = combineMode(matDef?.restitutionCombine, combine.MINIMUM);
        hknp.HP_Shape_SetMaterial(shape._hkShape, [staticFriction, dynamicFriction, restitution, frictionCombine, restitutionCombine]);
    };

    // Collision filtering (KHR_physics_rigid_bodies collisionFilters), per collider shape. Each named
    // collision system maps to a bit, assigned in first-seen order across the asset (matching the
    // official Babylon loader). A shape collides with another only when each side's membership mask
    // intersects the other's collide mask. Mirrors the loader's _layerNamesToMask / filter setup.
    const layerNames = [];
    const layerNamesToMask = (names) => {
        let mask = 0;
        for (const name of names) {
            let idx = layerNames.indexOf(name);
            if (idx === -1) { idx = layerNames.length; layerNames.push(name); }
            mask |= 1 << idx;
        }
        return mask;
    };
    const applyShapeFilter = (shape, filterIndex) => {
        if (filterIndex === undefined) return; // no filter -> Havok default (collides with everything)
        const filter = collisionFilters[filterIndex];
        if (!filter) return;
        if (filter.collisionSystems) {
            setPhysicsShapeFilterMembershipMask(world, shape, layerNamesToMask(filter.collisionSystems) >>> 0);
        }
        if (filter.collideWithSystems) {
            setPhysicsShapeFilterCollideMask(world, shape, layerNamesToMask(filter.collideWithSystems) >>> 0);
        } else if (filter.notCollideWithSystems) {
            setPhysicsShapeFilterCollideMask(world, shape, (~layerNamesToMask(filter.notCollideWithSystems)) >>> 0);
        }
    };

    // A compound body has motion but no collider of its own. Collect its descendant
    // collider nodes and mark every descendant carrying physics as consumed so the
    // main loop skips them — descendant triggers just ride along visually.
    const consumed = new Set();
    const compounds = [];
    const collectCompoundChildren = (nodeIndex, out) => {
        for (const childIndex of (json.nodes[nodeIndex].children || [])) {
            const cp = json.nodes[childIndex].extensions?.KHR_physics_rigid_bodies;
            if (cp?.collider?.geometry) { out.push(childIndex); consumed.add(childIndex); }
            else if (cp?.trigger) consumed.add(childIndex);
            collectCompoundChildren(childIndex, out);
        }
    };
    for (let i = 0; i < json.nodes.length; i++) {
        const physics = json.nodes[i].extensions?.KHR_physics_rigid_bodies;
        if (physics?.motion && !physics.collider && !physics.trigger && (json.nodes[i].children || []).length) {
            const childColliders = [];
            collectCompoundChildren(i, childColliders);
            if (childColliders.length) compounds.push({ index: i, childColliders });
        }
    }
    const compoundByIndex = new Map(compounds.map((c) => [c.index, c]));

    const placeAnchor = (nodeIndex) => {
        const lh = decomposeMatrix(applyLeftHandedFlip(nodeWorldMatrix(json, parentMap, nodeIndex)));
        const anchor = createTransformNode('body_' + nodeIndex);
        anchor.position.set(lh.position[0], lh.position[1], lh.position[2]);
        anchor.rotationQuaternion.set(lh.quaternion[0], lh.quaternion[1], lh.quaternion[2], lh.quaternion[3]);
        addToScene(scene, anchor);
        const subtree = nodeToTN.get(nodeIndex);
        if (subtree) {
            subtree.position.set(0, 0, 0);
            if (subtree.rotationQuaternion) subtree.rotationQuaternion.set(0, 0, 0, 1);
            subtree.scaling.set(lh.scale[0], lh.scale[1], lh.scale[2]);
            reparentNode(subtree, anchor);
        }
        return { anchor, lh };
    };

    const buildShapeFor = (nodeIndex, geometry, anchorForMesh, absScale, meshScale) => {
        if (geometry.shape !== undefined) {
            return createPhysicsShape(world, primitiveShapeOptions(shapeDefs[geometry.shape], absScale));
        }
        const type = geometry.convexHull ? PhysicsShapeType.CONVEX_HULL : PhysicsShapeType.MESH;
        // Collision-only / mismatched collider mesh: decode geometry.mesh straight from the buffers.
        // Otherwise the node renders exactly the collider mesh, so accumulate its loaded subtree.
        if (geometry.mesh !== undefined && json.nodes[nodeIndex]?.mesh !== geometry.mesh && buffers) {
            const meshLike = buildColliderMeshFromGltf(json, buffers, geometry.mesh, meshScale || absScale);
            return createPhysicsShape(world, { type, mesh: meshLike, includeChildMeshes: false });
        }
        return createPhysicsShape(world, { type, mesh: anchorForMesh, includeChildMeshes: true });
    };

    for (let nodeIndex = 0; nodeIndex < json.nodes.length; nodeIndex++) {
        if (consumed.has(nodeIndex)) continue;
        const physics = json.nodes[nodeIndex].extensions?.KHR_physics_rigid_bodies;
        if (!physics) continue;
        const motion = physics.motion || null;

        // Compound body: a container of its descendant collider shapes.
        const compound = compoundByIndex.get(nodeIndex);
        if (compound) {
            const { anchor, lh } = placeAnchor(nodeIndex);
            const container = createPhysicsShape(world, { type: PhysicsShapeType.CONTAINER });
            for (const childIndex of compound.childColliders) {
                const childGeom = json.nodes[childIndex].extensions.KHR_physics_rigid_bodies.collider.geometry;
                // Primitive child: base size; the parent-relative transform carries the world scale.
                const childShape = buildShapeFor(childIndex, childGeom, nodeToTN.get(childIndex), [1, 1, 1], [1, 1, 1]);
                const childCollider = json.nodes[childIndex].extensions.KHR_physics_rigid_bodies.collider;
                setMaterial(childShape, childCollider.physicsMaterial);
                applyShapeFilter(childShape, childCollider.collisionFilter);
                addPhysicsShapeChildFromParent(world, container, anchor, childShape, nodeToTN.get(childIndex));
            }
            const body = createPhysicsBody(world, anchor, PhysicsMotionType.DYNAMIC);
            setPhysicsBodyShape(world, body, container);
            applyMotionProperties(world, hknp, body, motion, lh.scale.map(Math.abs));
            bodies.push(body);
            bodyByNode.set(nodeIndex, { body, scale: lh.scale });
            continue;
        }

        const geometry = physics.collider?.geometry;
        if (!geometry) {
            // Shapeless body: a motion-only "driver"/anchor (no collider) used by joints. Give it an
            // empty container shape so Havok has a valid body; supply a default inertia.
            if (motion) {
                const { anchor, lh } = placeAnchor(nodeIndex);
                const isKinematic = !!motion.isKinematic;
                const body = createPhysicsBody(world, anchor, isKinematic ? PhysicsMotionType.ANIMATED : PhysicsMotionType.DYNAMIC);
                setPhysicsBodyShape(world, body, createPhysicsShape(world, { type: PhysicsShapeType.CONTAINER }));
                if (!isKinematic) {
                    applyMotionProperties(world, hknp, body, motion, lh.scale.map(Math.abs), true);
                } else if (Array.isArray(motion.angularVelocity)) {
                    spinners.push({ anchor, omega: [motion.angularVelocity[0], -motion.angularVelocity[1], -motion.angularVelocity[2]] });
                }
                bodyByNode.set(nodeIndex, { body, scale: lh.scale });
            }
            continue; // standalone triggers (no motion) are skipped
        }

        const { anchor, lh } = placeAnchor(nodeIndex);
        const absScale = lh.scale.map(Math.abs);
        const shape = buildShapeFor(nodeIndex, geometry, anchor, absScale, lh.scale);
        setMaterial(shape, physics.collider.physicsMaterial);
        applyShapeFilter(shape, physics.collider.collisionFilter);
        // A kinematic body is ANIMATED: Lite snaps it to its node each pre-step, so it is driven
        // by rotating its anchor (see spinners below) rather than by a set velocity.
        const isKinematic = !!(motion && motion.isKinematic);
        const motionType = motion
            ? (isKinematic ? PhysicsMotionType.ANIMATED : PhysicsMotionType.DYNAMIC)
            : PhysicsMotionType.STATIC;
        const body = createPhysicsBody(world, anchor, motionType);
        setPhysicsBodyShape(world, body, shape);
        if (motion && !isKinematic) {
            applyMotionProperties(world, hknp, body, motion, absScale);
        } else if (isKinematic && Array.isArray(motion.angularVelocity)) {
            // Angular velocity is a pseudovector: under F = diag(-1,1,1) it maps (wx,wy,wz)->(wx,-wy,-wz).
            spinners.push({ anchor, omega: [motion.angularVelocity[0], -motion.angularVelocity[1], -motion.angularVelocity[2]] });
        }
        bodies.push(body);
        bodyByNode.set(nodeIndex, { body, scale: lh.scale });
    }

    buildGltfJoints(world, hknp, scene, json, parentMap, jointDefs, bodyByNode);

    // Drive kinematic spinners: rotate each anchor by its angular velocity every physics step
    // (world-frame increment); Lite's pre-step teleport carries the body, driving its joint.
    if (spinners.length) {
        onPhysicsAfterStep(world, (dt) => {
            for (const sp of spinners) {
                const mag = Math.hypot(sp.omega[0], sp.omega[1], sp.omega[2]);
                if (mag < 1e-6) continue;
                const half = (mag * dt) / 2;
                const s = Math.sin(half) / mag;
                const dq = [sp.omega[0] * s, sp.omega[1] * s, sp.omega[2] * s, Math.cos(half)];
                const q = sp.anchor.rotationQuaternion;
                const nq = multiplyQuat(dq, [q.x, q.y, q.z, q.w]);
                q.set(nq[0], nq[1], nq[2], nq[3]);
            }
        });
    }

    // Make skinned meshes (ragdolls) follow their physics-driven bones.
    setupSkinnedMeshFollow(scene, engine, json, parentMap, nodeToTN);

    if (params.PHYSICS_DEBUG) {
        for (const body of bodies) showPhysicsBody(viewer, body);
    }

    return { world, viewer, bodies };
}

// ────────────────────────────────────────────────────────────────────────────

async function createScene(engine, modelSource) {
    const scene = createSceneContext(engine);
    scene.clearColor = { r: 1, g: 1, b: 1, a: 1 };

    const modelInfo = modelSource.modelInfo;
    let path = modelSource.url;
    if (!path && modelInfo) {
        path = "../../" + modelInfo.category + "/" + modelInfo.path;
        if (modelInfo.url) {
            path = modelInfo.url;
        }
    }

    const absolutePath = new URL(path, window.location.href).href;

    const [loadedAsset, envTextures, gltfAsset] = await Promise.all([
        loadGltf(engine, absolutePath),
        loadEnvironment(scene, ENV_URL, {
            brdfUrl: BRDF_URL,
            skyboxUrl: ENV_URL,
            skyboxSize: 10000,
            skipGround: true,
        }),
        // Fetch the glTF JSON (+ GLB binary) in parallel with model loading, for cameras and physics.
        fetchGltfAsset(absolutePath),
    ]);

    const gltfJson = gltfAsset.json;
    const gltfCameras = gltfJson ? parseGltfCameras(gltfJson) : [];

    addToScene(scene, loadedAsset);

    // Build Havok rigid bodies when the asset declares glTF physics extensions.
    // This reparents the matching visual subtrees, so it must run before the
    // camera is auto-framed below.
    let physicsData = null;
    if (hasGltfPhysics(gltfJson)) {
        scene.fixedDeltaMs = 1000 / PHYSICS_FPS;
        try {
            physicsData = await setupGltfPhysics(scene, engine, gltfJson, loadedAsset, gltfAsset.glbBin, absolutePath);
        } catch (error) {
            console.error("[glTF Physics] Failed to set up physics:", error);
        }
    }

    const light1 = createDirectionalLight([0.0, -1.0, 0.5], 0);
    const light2 = createDirectionalLight([-0.5, -0.5, -0.5], 0);
    addToScene(scene, light1);
    addToScene(scene, light2);

    let cam;
    if (modelInfo) {
        // Indexed / URL models: match the babylonjs (full) viewer's framing instead of auto-fitting
        // the bounding box — an ArcRotateCamera looking at the origin from (0, 3/scale, 5/scale),
        // where `scale` is the per-model camera-distance hint from the model index (default 1).
        // Lite's eye = target + radius·(cosα·sinβ, cosβ, sinα·sinβ); solving for that position gives
        // α = +π/2 (camera on +Z, front view), β = atan2(5,3), radius = √34 / scale.
        const scale = modelInfo.scale || 1;
        const camRadius = Math.sqrt(34) / scale;
        cam = createArcRotateCamera(Math.PI / 2, Math.atan2(5, 3), camRadius, { x: 0, y: 0, z: 0 });
        scene.camera = cam;
        // Near relative to distance (matches the full viewer's reduced near plane); far always
        // covers the 10000-unit skybox.
        cam.nearPlane = camRadius * 0.01;
        cam.farPlane = Math.max(camRadius * 1000, 20000);
    } else {
        // Drag-dropped models have no scale hint, so auto-fit to the bounding box and view from +Z.
        cam = createDefaultCamera(scene);
        cam.alpha = Math.PI / 2;
        cam.farPlane = Math.max(cam.farPlane, 20000);
    }
    attachControl(cam, canvas, scene);

    // Snapshot default camera pose so the GUI can reset to it.
    const defaultCamParams = {
        alpha:  cam.alpha,
        beta:   cam.beta,
        radius: cam.radius,
        target: { x: cam.target.x, y: cam.target.y, z: cam.target.z },
    };

    onBeforeRender(scene, function() {
        if (params.ROTATE) {
            cam.alpha += 0.005;
        }
    });

    // Store for GUI setup after registerScene (when skybox renderable is available)
    scene._sceneData = {
        cam,
        asset: loadedAsset,
        envTextures,
        variantNames: getVariantNames(loadedAsset),
        gltfCameras,
        defaultCamParams,
        light1,
        light2,
        physicsData,
    };

    return scene;
}

function setupSceneGui(scene) {
    const { asset, envTextures, variantNames, cam, gltfCameras, defaultCamParams, light1, light2, physicsData } = scene._sceneData;

    const gui = new dat.GUI();
    gui.add(params, 'ROTATE').name('Rotate');

    // Skybox renderable is order:0 — built by loadEnvironment's deferred builder
    // during registerScene, so it is present in scene._renderables by this point.
    const skyboxRenderable = scene._renderables.find(function(r) {
        return r.order === 0 && !r.isTransparent;
    });

    params.CUBEMAP = true;
    gui.add(params, 'CUBEMAP').name('CubeMap').onChange(function(value) {
        if (!skyboxRenderable) return;
        const idx = scene._renderables.indexOf(skyboxRenderable);
        if (value && idx === -1) {
            scene._renderables.unshift(skyboxRenderable);
        } else if (!value && idx >= 0) {
            scene._renderables.splice(idx, 1);
        }
        // Increment _renderableVersion so the render task detects the change and
        // re-records its GPU render bundle on the next frame.
        scene._renderableVersion++;
    });

    params.IBL = true;
    gui.add(params, 'IBL').name('IBL').onChange(function(value) {
        scene._envTextures = value ? envTextures : null;
        scene.imageProcessing.exposure = value ? 0.8 : 1.0;
    });

    params.LIGHTS = false;
    gui.add(params, 'LIGHTS').name('Lights').onChange(function(value) {
        light1.intensity = value ? 1.0 : 0;
        light2.intensity = value ? 1.0 : 0;
    });

    // Physics Debug — toggle Havok collider wireframes. Shown only for models that
    // declare glTF physics extensions (KHR_physics_rigid_bodies).
    if (physicsData) {
        gui.add(params, 'PHYSICS_DEBUG').name('Physics Debug').onChange(function(value) {
            for (const body of physicsData.bodies) {
                if (value) {
                    showPhysicsBody(physicsData.viewer, body);
                } else {
                    hidePhysicsBody(physicsData.viewer, body);
                }
            }
        });
    }

    if (variantNames.length > 0) {
        const variantOptions = {};
        variantOptions[DEFAULT_NAME] = DEFAULT_NAME;
        variantNames.forEach(function(name) {
            variantOptions[name] = name;
        });
        params.VARIANT = DEFAULT_NAME;
        gui.add(params, 'VARIANT', variantOptions).name('Variant').onChange(function(value) {
            if (value === DEFAULT_NAME) {
                resetVariant(asset);
            } else {
                selectVariant(asset, value);
            }
        });
    }

    // Camera selection — shown only when the glTF file contains embedded cameras.
    // Lite's API only exposes a single camera from the loaded asset, so we parse
    // the glTF JSON ourselves (parseGltfCameras) to enumerate all camera nodes.
    // Each camera is represented as an ArcRotateCamera positioned at the glTF
    // camera's world location, orbiting around the scene centre.
    if (gltfCameras.length > 0) {
        const cameraOptions = {};
        cameraOptions[DEFAULT_NAME] = DEFAULT_NAME;
        gltfCameras.forEach(function(entry) {
            cameraOptions[entry.name] = entry.name;
        });
        params.CAMERA = DEFAULT_NAME;
        gui.add(params, 'CAMERA', cameraOptions).name('Camera').onChange(function(value) {
            if (value === DEFAULT_NAME) {
                // Restore the auto-framed pose
                cam.alpha  = defaultCamParams.alpha;
                cam.beta   = defaultCamParams.beta;
                cam.radius = defaultCamParams.radius;
                cam.target.x = defaultCamParams.target.x;
                cam.target.y = defaultCamParams.target.y;
                cam.target.z = defaultCamParams.target.z;
            } else {
                const entry = gltfCameras.find(function(c) { return c.name === value; });
                if (!entry) return;
                // glTF is right-handed (+Z toward viewer); Babylon.js is left-handed (negate Z).
                const px = entry.worldPos.x;
                const py = entry.worldPos.y;
                const pz = -entry.worldPos.z;
                // Reset orbit target to scene centre so the camera looks inward.
                const cx = defaultCamParams.target.x;
                const cy = defaultCamParams.target.y;
                const cz = defaultCamParams.target.z;
                cam.target.x = cx;
                cam.target.y = cy;
                cam.target.z = cz;
                // Derive ArcRotateCamera params from the glTF camera's world position.
                const dx = px - cx, dy = py - cy, dz = pz - cz;
                const radius = Math.sqrt(dx*dx + dy*dy + dz*dz) || defaultCamParams.radius;
                cam.radius = radius;
                cam.alpha  = Math.atan2(dx, dz);
                cam.beta   = Math.acos(Math.max(-1, Math.min(1, dy / radius)));
            }
        });
    }

    return gui;
}

async function createEmptyScene(engine) {
    const scene = createSceneContext(engine);
    scene.clearColor = { r: 1, g: 1, b: 1, a: 1 };
    const cam = createDefaultCamera(scene);
    attachControl(cam, canvas, scene);
    return scene;
}

async function loadSceneFromSource(engine, modelSource) {
    const loadToken = ++activeLoadToken;
    showDropZone("Loading model...");

    try {
        const nextScene = await createScene(engine, modelSource);

        if (loadToken !== activeLoadToken) {
            disposeScene(nextScene);
            if (modelSource.objectUrls) {
                modelSource.objectUrls.forEach(function(url) {
                    URL.revokeObjectURL(url);
                });
            }
            return;
        }

        const previousScene = currentScene;
        const previousGui = currentGui;

        // Unregister the previous scene BEFORE registering the next one.
        // If any scene is already registered when registerScene() runs, Lite
        // marks the new scene as a swapchain overlay (loadOp:"load"), which
        // skips the per-frame clear and causes ghosting with animated models.
        if (previousScene) {
            unregisterScene(previousScene);
        }

        await registerScene(nextScene);
        // Setup GUI after registerScene so skybox renderable (built by deferred
        // builder) is available in scene._renderables for the CubeMap toggle.
        const nextGui = setupSceneGui(nextScene);

        if (!engineStarted) {
            engineStarted = true;
            startEngine(engine).catch(console.error);
        }

        currentScene = nextScene;
        currentGui = nextGui;

        if (previousGui) {
            previousGui.destroy();
        }
        if (previousScene) {
            disposeScene(previousScene);
        }

        revokeCurrentObjectUrls();
        currentObjectUrls = modelSource.objectUrls || [];
        hideDropZone();
    } catch (error) {
        console.error(error);
        if (modelSource.objectUrls) {
            modelSource.objectUrls.forEach(function(url) {
                URL.revokeObjectURL(url);
            });
        }
        showDropZone("Failed to load: " + error.message, true);
    }
}

function handleDragEvent(event) {
    event.preventDefault();
    event.stopPropagation();
}

function setDragActive(isActive) {
    dropZone.classList.toggle("dragover", isActive);
    if (isActive) {
        setDropZoneMessage("Drop glTF/glb files here");
        dropZone.classList.remove("hidden");
    } else if (!currentScene || currentScene === emptyScene) {
        showDropZone("Drag & drop a .glb or .gltf model here, or click to choose files.");
    } else {
        hideDropZone();
    }
}

async function handleModelFiles(engine, fileList) {
    if (!fileList || fileList.length === 0) {
        return;
    }

    try {
        const modelSource = await createDroppedModelSource(fileList);
        await loadSceneFromSource(engine, modelSource);
    } catch (error) {
        console.error(error);
        showDropZone("Failed to load: " + error.message, true);
    }
}

const engine = await createEngine(canvas);

window.addEventListener('resize', function() {
    resizeEngine(engine);
});

dropZone.addEventListener("click", function() {
    fileInput.click();
});

dropZone.addEventListener("dragenter", function(event) {
    handleDragEvent(event);
    setDragActive(true);
});

dropZone.addEventListener("dragover", function(event) {
    handleDragEvent(event);
    setDragActive(true);
});

dropZone.addEventListener("dragleave", function(event) {
    handleDragEvent(event);
    if (event.target === dropZone) {
        setDragActive(false);
    }
});

dropZone.addEventListener("drop", async function(event) {
    handleDragEvent(event);
    setDragActive(false);
    await handleModelFiles(engine, event.dataTransfer.files);
});

fileInput.addEventListener("change", async function(event) {
    await handleModelFiles(engine, event.target.files);
    fileInput.value = "";
});

document.addEventListener("dragenter", function(event) {
    handleDragEvent(event);
    setDragActive(true);
});

document.addEventListener("dragover", handleDragEvent);

document.addEventListener("drop", async function(event) {
    handleDragEvent(event);
    setDragActive(false);
    await handleModelFiles(engine, event.dataTransfer.files);
});

emptyScene = await createEmptyScene(engine);
currentScene = emptyScene;
await registerScene(emptyScene);
engineStarted = true;
startEngine(engine).catch(console.error);

if (initialModelInfo) {
    await loadSceneFromSource(engine, {
        modelInfo: initialModelInfo,
    });
} else {
    showDropZone("Drag & drop a .glb or .gltf model here, or click to choose files.");
}
