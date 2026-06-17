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
    VARIANT: DEFAULT_NAME,
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
        return {
            url: createTrackedObjectUrl(modelFile),
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

    const [loadedAsset, envTextures] = await Promise.all([
        loadGltf(engine, absolutePath),
        loadEnvironment(scene, ENV_URL, {
            brdfUrl: BRDF_URL,
            skyboxUrl: ENV_URL,
            skyboxSize: 10000,
        }),
    ]);

    addToScene(scene, loadedAsset);

    const cam = createDefaultCamera(scene);
    attachControl(cam, canvas, scene);

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
    };

    return scene;
}

function setupSceneGui(scene) {
    const { asset, envTextures, variantNames } = scene._sceneData;

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
        scene.imageProcessing.toneMappingEnabled = value;
    });

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

        await registerScene(nextScene);
        // Setup GUI after registerScene so skybox renderable (built by deferred
        // builder) is available in scene._renderables for the CubeMap toggle.
        const nextGui = setupSceneGui(nextScene);

        if (!engineStarted) {
            engineStarted = true;
            startEngine(engine).catch(console.error);
        }

        if (previousScene) {
            unregisterScene(previousScene);
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
