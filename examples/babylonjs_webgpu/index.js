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
    BOUNDING_BOX: false,
    CUBEMAP: true,
    IBL: true,
    LIGHTS: false,
    BLOOM: true,
    DEBUG: false,
    PHYSICS_DEBUG: true,
    VARIANT: DEFAULT_NAME,
    CAMERA: DEFAULT_NAME,
    TONEMAP: "None"
}

const canvas = document.querySelector("#renderCanvas");
const dropZone = document.getElementById("dropZone");
const dropZoneMessage = document.getElementById("dropZoneMessage");
const fileInput = document.getElementById("fileInput");

let currentScene = null;
let currentGui = null;
let currentObjectUrls = [];
let activeLoadToken = 0;
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

function getFileStem(name) {
    const basename = getBasename(name || "scene");
    const lastDot = basename.lastIndexOf(".");
    return lastDot >= 0 ? basename.slice(0, lastDot) : basename;
}

function getExportName(modelSource, modelInfo, path) {
    if (modelSource.displayName) {
        return getFileStem(modelSource.displayName);
    }
    if (modelInfo?.name && modelInfo.name !== "Other") {
        return modelInfo.name;
    }
    return getFileStem(path);
}

function getCaptureUrl(sceneSource) {
    if (sceneSource.sceneFilename.startsWith("blob:") || sceneSource.sceneFilename.startsWith("data:")) {
        return sceneSource.sceneFilename;
    }
    return sceneSource.rootUrl + sceneSource.sceneFilename;
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
            pluginExtension: ".glb",
            scale: 1,
            allAnimations: true,
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
        pluginExtension: ".gltf",
        scale: 1,
        allAnimations: true,
        objectUrls: objectUrls,
    };
}

function registerRigidBodyExtensions() {
    const register = BABYLON.GLTF2?.registerGLTFExtension || BABYLON.registerGLTFExtension;
    const unregister = BABYLON.GLTF2?.unregisterGLTFExtension || BABYLON.unregisterGLTFExtension;
    const loaderExtensions = BABYLON?.GLTF2?.Loader?.Extensions;
    const rigidBodyLoader = globalThis.GLTFRigidBodyLoader;

    if (!rigidBodyLoader) {
        return;
    }

    const registerExtension = function(name, pluginType) {
        if (typeof pluginType !== "function") {
            return;
        }
        if (typeof register === "function") {
            if (typeof unregister === "function") {
                unregister(name);
            }
            register(name, true, function(loader) {
                return new pluginType(loader);
            });
            return;
        }
        if (loaderExtensions) {
            loaderExtensions[name] = pluginType;
        }
    };

    registerExtension("KHR_implicit_shapes", rigidBodyLoader.KHR_ImplicitShapes_Plugin);
    registerExtension("KHR_physics_rigid_bodies", rigidBodyLoader.KHR_PhysicsRigidBodies_Plugin);
    registerExtension("MSFT_rigid_bodies", rigidBodyLoader.MSFT_RigidBodies_Plugin);
}

registerRigidBodyExtensions();

async function initializeRigidBodyPhysics() {
    const rigidBodyLoader = globalThis.GLTFRigidBodyLoader;
    if (!rigidBodyLoader || typeof globalThis.HavokPhysics !== "function") {
        return;
    }

    const havokInterface = await globalThis.HavokPhysics();
    if (typeof rigidBodyLoader.KHR_PhysicsRigidBodies_Plugin === "function") {
        rigidBodyLoader.KHR_PhysicsRigidBodies_Plugin.s_havokInterface = havokInterface;
    }
    if (typeof rigidBodyLoader.MSFT_RigidBodies_Plugin === "function") {
        rigidBodyLoader.MSFT_RigidBodies_Plugin.s_havokInterface = havokInterface;
    }
}

function createEmptyScene(engine) {
    const scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color4(1, 1, 1, 1);

    const camera = new BABYLON.ArcRotateCamera(DEFAULT_NAME, -Math.PI / 2, Math.PI / 2.4, 8, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, false, false);
    camera.wheelDeltaPercentage = 0.005;
    scene.activeCamera = camera;

    const light = new BABYLON.HemisphericLight("dropZoneLight", new BABYLON.Vector3(0, 1, 0), scene);
    light.intensity = 0.8;

    return scene;
}

function getPluginExtension(modelSource, path, modelInfo) {
    if (modelSource.pluginExtension) {
        return modelSource.pluginExtension;
    }
    if (modelInfo?.path) {
        return getFileExtension(modelInfo.path);
    }
    if (modelInfo?.url) {
        return getFileExtension(modelInfo.url);
    }
    return getFileExtension(path);
}

function splitScenePath(path) {
    if (!path) {
        return { rootUrl: "", sceneFilename: "" };
    }
    if (path.startsWith("blob:") || path.startsWith("data:")) {
        return { rootUrl: "", sceneFilename: path };
    }
    const lastSlash = path.lastIndexOf("/");
    if (lastSlash === -1) {
        return { rootUrl: "", sceneFilename: path };
    }
    return {
        rootUrl: path.slice(0, lastSlash + 1),
        sceneFilename: path.slice(lastSlash + 1),
    };
}

let createScene = function(engine, modelSource) {
    let scene = new BABYLON.Scene(engine);
    let cubeTexture;
    scene.clearColor = new BABYLON.Color3(1, 1, 1);

    const modelInfo = modelSource.modelInfo;
    let scale = modelSource.scale || 1;
    let path = modelSource.url;
    if (!path && modelInfo) {
        path = "../../" + modelInfo.category + "/" + modelInfo.path;
        if (modelInfo.url) {
            path = modelInfo.url;
        }
    }
    const pluginExtension = getPluginExtension(modelSource, path, modelInfo);
    const sceneSource = splitScenePath(path);
    const exportName = getExportName(modelSource, modelInfo, path);

    let gui = new dat.GUI();
    let pipeline = null;
    let guiRotate = gui.add(params, 'ROTATE').name('Rotate');
    let guiBoundingBox = gui.add(params, 'BOUNDING_BOX').name('Bounding Box');
    let guiCubeMap = gui.add(params, 'CUBEMAP').name('CubeMap');
    let guiIbl = gui.add(params, 'IBL').name('IBL');
    let guiLights = gui.add(params, 'LIGHTS').name('Lights');
    let guiBloom = gui.add(params, 'BLOOM').name('Bloom');
    const tonemaps = ["None", "Standard", "ACES", "PBR Neutral"];
    let guiTonemap = gui.add(params, 'TONEMAP', tonemaps).name('Tonemap');
    let guiDebug = gui.add(params, 'DEBUG').name('Debug');
    let guiPhysicsDebug = gui.add(params, 'PHYSICS_DEBUG').name('Physics Debug');
    let guiExport = gui.add({
        exportGLTFPhysics: function() {
            if (!BABYLON.GLTFPhysicsExport) {
                console.warn("[glTF Physics Export] Exporter is not loaded.");
                return;
            }
            BABYLON.GLTFPhysicsExport.GLBAsync(scene, exportName).catch(function(error) {
                console.error("[glTF Physics Export] Export failed:", error);
            });
        }
    }, "exportGLTFPhysics").name("Export glTF Physics");
    let guiVariants = null;
    let guiCameras = null;

    let variants = null;
    let variantsExtension = null;
    let emissiveStrengthExtension = null;
    let physicsExtensionLoaded = false;

    BABYLON.SceneLoader.OnPluginActivatedObservable.addOnce(function (loader) {
        loader.animationStartMode = modelSource.allAnimations ? BABYLON.GLTFLoaderAnimationStartMode.ALL : BABYLON.GLTFLoaderAnimationStartMode.FIRST;

        if (!loader.onExtensionLoadedObservable) {
            return;
        }

        loader.onExtensionLoadedObservable.add(function (extension) {
            if (extension.name === "KHR_materials_variants") {
                variantsExtension = extension;
            } else if (extension.name === "KHR_materials_emissive_strength") {
                emissiveStrengthExtension = extension;
            } else if (extension.name === "KHR_physics_rigid_bodies" || extension.name === "MSFT_rigid_bodies") {
                physicsExtensionLoaded = true;
            }
        });
    });

    const captureUrl = getCaptureUrl(sceneSource);
    // Drag-dropped / data-URI models resolve their external buffers and
    // textures through an in-memory file map that appendTaggedAsync can't
    // see, so only http(s) sources take the tagged path.
    const isRemoteSource = !(sceneSource.sceneFilename.startsWith("blob:")
        || sceneSource.sceneFilename.startsWith("data:"));

    let loadPromise;
    if (isRemoteSource
        && BABYLON.GLTFPhysicsExport
        && typeof BABYLON.GLTFPhysicsExport.appendTaggedAsync === "function") {
        // Stamp every source node with its index and splice in any missing
        // top-level physics extension blocks before the loader runs, so
        // KHR_physics_rigid_bodies round-trips through the exporter even for
        // nameless / duplicate-named nodes (e.g. the RigidBodies_* tests,
        // whose nodes are unnamed and whose top-level rigid-bodies block is
        // omitted). Non-physics models pass through untouched.
        const taggedScene = new BABYLON.Scene(engine);
        loadPromise = BABYLON.GLTFPhysicsExport.appendTaggedAsync(taggedScene, captureUrl)
            .then(function () { return taggedScene; })
            .catch(function (error) {
                console.warn("[glTF Physics Export] Tagged load failed, falling back to plain loader:", error);
                taggedScene.dispose();
                return BABYLON.SceneLoader.LoadAsync(
                    sceneSource.rootUrl, sceneSource.sceneFilename, engine, undefined, pluginExtension);
            });
    } else {
        loadPromise = BABYLON.SceneLoader.LoadAsync(
            sceneSource.rootUrl, sceneSource.sceneFilename, engine, undefined, pluginExtension);
    }

    return loadPromise.then(async function (newScene) {
        scene = newScene;

        if (BABYLON.GLTFPhysicsExport) {
            // Capture for a self-contained .glb always, and for any remote
            // model (so .gltf + .bin test models round-trip too).
            if (pluginExtension === ".glb" || isRemoteSource) {
                try {
                    await BABYLON.GLTFPhysicsExport.captureLoadedAsync(scene, captureUrl);
                } catch (error) {
                    console.warn("[glTF Physics Export] Failed to capture loaded physics extensions:", error);
                }
            }
            BABYLON.GLTFPhysicsExport.snapshot(scene);
        } else {
            console.warn("[glTF Physics Export] Exporter is not loaded.");
        }

        const physicsEngine = scene.getPhysicsEngine && scene.getPhysicsEngine();
        // The loader's onExtensionLoadedObservable can miss the physics
        // extension when another model was already loaded earlier in the
        // session (e.g. a model opened via URL args before a drag-and-drop),
        // so fall back to inspecting the loaded scene directly. This keeps the
        // pause-on-load and Physics Debug behaviour working in that case.
        if (!physicsExtensionLoaded) {
            physicsExtensionLoaded = !!physicsEngine
                || scene.meshes.concat(scene.transformNodes).some(function(node) {
                    return node.physicsBody;
                });
        }
        if (physicsExtensionLoaded && physicsEngine && typeof physicsEngine.setTimeStep === 'function') {
            const originalTimeStep = typeof physicsEngine.getTimeStep === 'function'
                ? physicsEngine.getTimeStep()
                : 1 / 60;
            physicsEngine.setTimeStep(0);

            const resumePhysics = function() {
                physicsEngine.setTimeStep(originalTimeStep);
            };

            const originalHideLoadingUI = engine.hideLoadingUI.bind(engine);
            let resumed = false;
            engine.hideLoadingUI = function() {
                originalHideLoadingUI();
                if (!resumed) {
                    resumed = true;
                    setTimeout(resumePhysics, 200);
                }
            };
            setTimeout(function() {
                if (!resumed) {
                    resumed = true;
                    resumePhysics();
                }
            }, 3000);
        }

        let parentMesh = scene.rootNodes[0] || scene.meshes[0] || null;

        if (variantsExtension != null && parentMesh != null) {
            variants = variantsExtension.getAvailableVariants(parentMesh);
            if (variants.length > 0) {
                params.VARIANT = modelInfo?.variant == undefined ? DEFAULT_NAME : modelInfo.variant;
                let variantNames = variants.reduce(function (allNames, name) {
                    allNames[name] = name;
                    return allNames
                }, {});
                variantNames[DEFAULT_NAME] = DEFAULT_NAME;
                guiVariants = gui.add(params, 'VARIANT', variantNames).name("Variant");
                variantsExtension.selectVariant(parentMesh, params.VARIANT);

                guiVariants.onChange(function (value) {
                    if (value == DEFAULT_NAME) {
                        variantsExtension.reset(parentMesh);
                    } else {
                        variantsExtension.selectVariant(parentMesh, value);
                    }
                });
            }
        }

        if (modelInfo?.name == "GearboxAssy" && parentMesh) {
            parentMesh.position.x += 159.20;
            parentMesh.position.y -= 17.02;
            parentMesh.position.z += 3.21;
        } else if (modelInfo?.name == "Fox") {
            scene.animationGroups[2].play(true);
        } else if (modelInfo?.name == "MorphStressTest") {
            scene.animationGroups[1].play(true);
        }

        let camera = new BABYLON.ArcRotateCamera(DEFAULT_NAME, 0, 1, 5, BABYLON.Vector3.Zero(), scene);
        camera.minZ /= 100;
        camera.setPosition(new BABYLON.Vector3(0 / scale, 3 / scale, 5 / scale));
        camera.attachControl(canvas, false, false);
        camera.wheelDeltaPercentage = 0.005;
        scene.activeCamera = camera;

        if (scene.cameras.length > 1) {
            if (modelInfo?.name == "VC" || modelInfo?.name == "VirtualCity") {
                scene.cameras.forEach(camera => camera.name == DEFAULT_NAME ? camera.minZ : camera.minZ /= 100);
            }

            let cameraNames = scene.cameras.map(camera => camera.name);
            guiCameras = gui.add(params, 'CAMERA', cameraNames).name("Camera");

            guiCameras.onChange(function (value) {
                var camera = scene.cameras.find(function(camera) {
                    return camera.name === value;
                });
                camera.attachControl(canvas, false, false);
                scene.activeCamera = camera;
            });
        }

        if (emissiveStrengthExtension != null) {
            pipeline = new BABYLON.DefaultRenderingPipeline(
                "defaultPipeline",
                true,
                scene,
                scene.cameras
            );
            pipeline.bloomEnabled = true;
        }

        let light1 = new BABYLON.DirectionalLight("dir01", new BABYLON.Vector3(0.0, -1.0, 0.5), scene);
        let light2 = new BABYLON.DirectionalLight("dir02", new BABYLON.Vector3(-0.5, -0.5, -0.5), scene);
        light1.setEnabled(params.LIGHTS);
        light2.setEnabled(params.LIGHTS);

        let environmentTexture;
        let skybox;
        if (scene.environmentTexture) {
            environmentTexture = scene.environmentTexture;
            let skyboxBlur = 0;
            skybox = scene.createDefaultSkybox(environmentTexture.clone(), true,
                (scene.activeCamera.maxZ - scene.activeCamera.minZ) / 2, skyboxBlur);
        } else {
            cubeTexture = new BABYLON.CubeTexture("../../textures/env/papermillSpecularHDR.env", scene);
            skybox = scene.createDefaultSkybox(cubeTexture, true, 10000);
            environmentTexture = cubeTexture;
        }

        guiBoundingBox.onChange(function (value) {
            scene.forceShowBoundingBoxes = value;
        });

        guiCubeMap.onChange(function (value) {
            skybox.visibility = value ? 1 : 0;
        });

        guiIbl.onChange(function (value) {
            scene.environmentTexture = value ? environmentTexture : null;
        });

        guiLights.onChange(function (value) {
            light1.setEnabled(value);
            light2.setEnabled(value);
        });

        guiBloom.onChange(function (value) {
            if (pipeline) {
                pipeline.bloomEnabled = value;
            }
        });

        guiTonemap.onChange(function (value) {
            if (value == "None") {
                scene.imageProcessingConfiguration.toneMappingEnabled = false;
            } else if (value == "Standard") {
                scene.imageProcessingConfiguration.toneMappingEnabled = true;
                scene.imageProcessingConfiguration.toneMappingType = BABYLON.ImageProcessingConfiguration.TONEMAPPING_STANDARD;
            } else if (value == "ACES") {
                scene.imageProcessingConfiguration.toneMappingEnabled = true;
                scene.imageProcessingConfiguration.toneMappingType = BABYLON.ImageProcessingConfiguration.TONEMAPPING_ACES;
            } else if (value == "PBR Neutral") {
                scene.imageProcessingConfiguration.toneMappingEnabled = true;
                scene.imageProcessingConfiguration.toneMappingType = BABYLON.ImageProcessingConfiguration.TONEMAPPING_KHR_PBR_NEUTRAL;
            }
        });

        guiDebug.onChange(function (value) {
            scene.debugLayer.show({embedMode: value});
        });

        let physicsViewer = null;
        const shownPhysicsBodies = new Set();
        // Hand every rigid body in the scene to the PhysicsViewer. Bodies
        // attach to whichever glTF node carries the extension, which is often a
        // TransformNode (not present in scene.meshes), so walk both lists.
        // showBody can throw while the underlying Havok body is still
        // initializing (notably on the tagged remote-load path used when a
        // model is opened via URL); those bodies are left out of the shown set
        // so the per-frame refresh below retries them.
        function refreshPhysicsDebug() {
            const nodes = scene.meshes.concat(scene.transformNodes);
            // Only spin up a PhysicsViewer (and its utility layer) once there
            // is a body to show, so non-physics models never create one.
            if (!nodes.some(function(node) { return node.physicsBody; })) {
                return;
            }
            if (!physicsViewer && BABYLON.PhysicsViewer) {
                physicsViewer = new BABYLON.PhysicsViewer(scene);
            }
            if (!physicsViewer) {
                return;
            }
            nodes.forEach(function(node) {
                const body = node.physicsBody;
                if (body && !shownPhysicsBodies.has(body)) {
                    try {
                        physicsViewer.showBody(body);
                        shownPhysicsBodies.add(body);
                    } catch(e) {}
                }
            });
        }
        function pendingPhysicsBodies() {
            return scene.meshes.concat(scene.transformNodes).some(function(node) {
                return node.physicsBody && !shownPhysicsBodies.has(node.physicsBody);
            });
        }
        function showPhysicsDebug(value) {
            if (value) {
                refreshPhysicsDebug();
            } else if (physicsViewer) {
                physicsViewer.dispose();
                physicsViewer = null;
                shownPhysicsBodies.clear();
            }
        }
        // Keep Physics Debug on for glTF physics models and make sure every
        // shape gets a wireframe. Rigid bodies (and their Havok handles) can
        // finish initializing several frames after the load resolves - notably
        // on the tagged remote-load path - so refresh the viewer each frame
        // until no body is left pending (with a safety cap).
        //
        // The viewer is created from the refresh loop (first run on the next
        // rendered frame), NOT synchronously here: this scene only becomes
        // current - and the previous scene plus its PhysicsViewer utility
        // layer get disposed - after createScene returns. Creating a second
        // utility layer while the previous one is still alive leaves the new
        // wireframes unrendered (e.g. after first opening a model via URL).
        if (physicsExtensionLoaded && !params.PHYSICS_DEBUG) {
            params.PHYSICS_DEBUG = true;
            guiPhysicsDebug.updateDisplay();
        }
        if (params.PHYSICS_DEBUG) {
            let frames = 0;
            let settledFrames = 0;
            const refreshObserver = scene.onAfterRenderObservable.add(function() {
                frames++;
                if (!params.PHYSICS_DEBUG) {
                    scene.onAfterRenderObservable.remove(refreshObserver);
                    return;
                }
                refreshPhysicsDebug();
                settledFrames = pendingPhysicsBodies() ? 0 : settledFrames + 1;
                const done = (shownPhysicsBodies.size > 0 && settledFrames >= 10) // all bodies shown and stable
                    || (shownPhysicsBodies.size === 0 && frames >= 60)            // no physics in this model
                    || frames >= 180;                                            // safety cap (~3s at 60fps)
                if (done) {
                    if (physicsExtensionLoaded || shownPhysicsBodies.size > 0) {
                        console.log('[Physics] Physics debug wireframes shown for', shownPhysicsBodies.size, 'bodies');
                    }
                    scene.onAfterRenderObservable.remove(refreshObserver);
                }
            });
        }
        guiPhysicsDebug.onChange(showPhysicsDebug);

        scene._viewerGui = gui;
        return scene;
    }).catch(function(error) {
        gui.destroy();
        throw error;
    });
};

async function loadSceneFromSource(engine, modelSource) {
    const loadToken = ++activeLoadToken;
    showDropZone("Loading model...");

    try {
        const nextScene = await createScene(engine, modelSource);
        if (loadToken !== activeLoadToken) {
            nextScene.dispose();
            if (modelSource.objectUrls) {
                modelSource.objectUrls.forEach(function(url) {
                    URL.revokeObjectURL(url);
                });
            }
            return;
        }

        const previousScene = currentScene;
        const previousGui = currentGui;

        currentScene = nextScene;
        currentGui = nextScene._viewerGui || null;

        if (previousGui) {
            previousGui.destroy();
        }
        if (previousScene) {
            previousScene.dispose();
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

let engine = new BABYLON.WebGPUEngine(canvas);
await engine.initAsync();
engine.enableOfflineSupport = false;

window.addEventListener('resize', function() {
    engine.resize();
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

await initializeRigidBodyPhysics();
emptyScene = createEmptyScene(engine);
currentScene = emptyScene;

engine.runRenderLoop(function() {
    if (currentScene?.activeCamera && params.ROTATE) {
        currentScene.activeCamera.alpha += 0.005;
    }
    currentScene?.render();
});

if (initialModelInfo) {
    await loadSceneFromSource(engine, {
        modelInfo: initialModelInfo,
        pluginExtension: getFileExtension(initialModelInfo.path || initialModelInfo.url || ""),
        scale: initialModelInfo.scale,
        allAnimations: initialModelInfo.allAnimations,
    });
} else {
    showDropZone("Drag & drop a .glb or .gltf model here, or click to choose files.");
}
