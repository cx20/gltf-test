import {
    createEngine,
    resizeEngine,
    createSceneContext,
    loadGltf,
    addToScene,
    createDefaultCamera,
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
} from "babylon-lite";

const ENV_URL = "../../textures/env/papermillSpecularHDR.env";
const BRDF_URL = "https://cdn.jsdelivr.net/gh/BabylonJS/Babylon-Lite@master/packages/babylon-lite/assets/brdf-lut.png";

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
    TONEMAP: 'Standard',
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
        throw new Error("`.glb` または `.gltf` ファイルを含めてドロップしてください。");
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

// ── Tonemap helper ───────────────────────────────────────────────────────────

function applyTonemap(scene, value) {
    if (value === 'None') {
        scene.imageProcessing.toneMappingEnabled = false;
    } else {
        scene.imageProcessing.toneMappingEnabled = true;
        scene.imageProcessing.toneMappingType = value.toLowerCase();
    }
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

// Fetch a .gltf URL, parse its cameras, and return their world positions
// (in glTF right-handed coordinates) together with per-camera perspective params.
// Returns [] for non-.gltf URLs, on fetch/parse failure, or when no cameras are
// defined in the file.
async function extractGltfCameras(url) {
    if (!url.toLowerCase().endsWith('.gltf')) return [];
    let json;
    try {
        const resp = await fetch(url);
        if (!resp.ok) return [];
        json = await resp.json();
    } catch (e) {
        return [];
    }

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

    const [loadedAsset, envTextures, gltfCameras] = await Promise.all([
        loadGltf(engine, absolutePath),
        loadEnvironment(scene, ENV_URL, {
            brdfUrl: BRDF_URL,
            skyboxUrl: ENV_URL,
            skyboxSize: 10000,
            skipGround: true,
        }),
        // Fetch camera nodes in parallel with model loading; returns [] for GLB/blob URLs.
        extractGltfCameras(absolutePath),
    ]);

    addToScene(scene, loadedAsset);

    const light1 = createDirectionalLight([0.0, -1.0, 0.5], 0);
    const light2 = createDirectionalLight([-0.5, -0.5, -0.5], 0);
    addToScene(scene, light1);
    addToScene(scene, light2);

    const cam = createDefaultCamera(scene);
    // Lite default is alpha=-π/2 (camera at -Z); match babylonjs_webgpu which
    // uses setPosition(0,3,5), equivalent to alpha=+π/2 (camera at +Z, front view).
    cam.alpha = Math.PI / 2;
    // createDefaultCamera auto-sizes farPlane to radius*1000. For small models
    // (e.g. Triangle, radius≈2) this gives farPlane≈2000, clipping the 10000-unit
    // skybox. Ensure a minimum that always covers it.
    cam.farPlane = Math.max(cam.farPlane, 20000);
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
    };

    return scene;
}

function setupSceneGui(scene) {
    const { asset, envTextures, variantNames, cam, gltfCameras, defaultCamParams, light1, light2 } = scene._sceneData;

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

    const tonemaps = ['None', 'Standard', 'ACES'];
    params.TONEMAP = 'Standard';
    gui.add(params, 'TONEMAP', tonemaps).name('Tonemap').onChange(function(value) {
        applyTonemap(scene, value);
    });
    applyTonemap(scene, params.TONEMAP);

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
    // the glTF JSON ourselves (extractGltfCameras) to enumerate all camera nodes.
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
        showDropZone("読み込みに失敗しました: " + error.message, true);
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
        showDropZone("読み込みに失敗しました: " + error.message, true);
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
