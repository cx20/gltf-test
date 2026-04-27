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
if (!modelInfo) {
    document.getElementById('container').innerHTML = 'Please specify a model to load';
    throw new Error('Model not specified or not found in list.');
}

const DEFAULT_NAME = "[default]";

let params = {
    ROTATE: false,
    BOUNDING_BOX: false,
    CUBEMAP: true,
    IBL: true,
    LIGHTS: false, // The default is to use IBL instead of lights
    BLOOM: true,
    DEBUG: false,
    PHYSICS_DEBUG: true,
    VARIANT: DEFAULT_NAME,
    CAMERA: DEFAULT_NAME,
    TONEMAP: "None"
}

function registerRigidBodyExtensions() {
    const register = BABYLON.GLTF2?.registerGLTFExtension || BABYLON.registerGLTFExtension;
    const unregister = BABYLON.GLTF2?.unregisterGLTFExtension || BABYLON.unregisterGLTFExtension;
    const loaderExtensions = BABYLON?.GLTF2?.Loader?.Extensions;
    const rigidBodyLoader = globalThis.GLTFRigidBodyLoader;

    console.log('[Physics] registerRigidBodyExtensions called');
    console.log('[Physics] GLTFRigidBodyLoader:', rigidBodyLoader ? 'found' : 'NOT FOUND');
    console.log('[Physics] HavokPhysics:', typeof globalThis.HavokPhysics === 'function' ? 'found' : 'NOT FOUND');
    console.log('[Physics] BABYLON.GLTF2.registerGLTFExtension:', typeof register);
    console.log('[Physics] KHR_ImplicitShapes_Plugin:', typeof rigidBodyLoader?.KHR_ImplicitShapes_Plugin);
    console.log('[Physics] KHR_PhysicsRigidBodies_Plugin:', typeof rigidBodyLoader?.KHR_PhysicsRigidBodies_Plugin);
    console.log('[Physics] MSFT_RigidBodies_Plugin:', typeof rigidBodyLoader?.MSFT_RigidBodies_Plugin);

    if (!rigidBodyLoader) {
        console.warn('[Physics] GLTFRigidBodyLoader not found - physics extensions will NOT be registered');
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
    console.log('[Physics] Extension registration complete');
}

registerRigidBodyExtensions();

async function initializeRigidBodyPhysics() {
    const rigidBodyLoader = globalThis.GLTFRigidBodyLoader;
    console.log('[Physics] initializeRigidBodyPhysics called');
    if (!rigidBodyLoader) {
        console.warn('[Physics] GLTFRigidBodyLoader not found - skipping Havok initialization');
        return;
    }
    if (typeof globalThis.HavokPhysics !== "function") {
        console.warn('[Physics] HavokPhysics function not found - skipping Havok initialization');
        return;
    }

    console.log('[Physics] Initializing HavokPhysics...');
    const havokInterface = await globalThis.HavokPhysics();
    console.log('[Physics] HavokPhysics initialized:', havokInterface);
    if (typeof rigidBodyLoader.KHR_PhysicsRigidBodies_Plugin === "function") {
        rigidBodyLoader.KHR_PhysicsRigidBodies_Plugin.s_havokInterface = havokInterface;
        console.log('[Physics] Set s_havokInterface on KHR_PhysicsRigidBodies_Plugin');
    }
    if (typeof rigidBodyLoader.MSFT_RigidBodies_Plugin === "function") {
        rigidBodyLoader.MSFT_RigidBodies_Plugin.s_havokInterface = havokInterface;
        console.log('[Physics] Set s_havokInterface on MSFT_RigidBodies_Plugin');
    }
}

let createScene = function(engine) {

    let scene = new BABYLON.Scene(engine);
    let mesh;
    let cubeTexture;
    scene.clearColor = new BABYLON.Color3(1, 1, 1);

    let scale = modelInfo.scale;
    //let path = "../../sampleModels/" + modelInfo.path;
    let path = "../../" + modelInfo.category + "/" + modelInfo.path;
    if(modelInfo.url) {
        path = modelInfo.url;
    }
    let base = path.substr(0, path.lastIndexOf("/") + 1);
    let file = path.substr(path.lastIndexOf("/") + 1);

    // GUI
    let gui = new dat.GUI();
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
    let guiVariants = null;
    let guiCameras = null;

    let variants = null;
    let variantsExtension = null;
    let emissiveStrengthExtension = null;
    let physicsExtensionLoaded = false;

    BABYLON.SceneLoader.OnPluginActivatedObservable.addOnce(function (loader) {
        loader.animationStartMode = modelInfo.allAnimations ? BABYLON.GLTFLoaderAnimationStartMode.ALL : BABYLON.GLTFLoaderAnimationStartMode.FIRST;

        loader.onExtensionLoadedObservable.add(function (extension) {
            console.log('[Physics] glTF extension loaded:', extension.name);
            if (extension.name === "KHR_materials_variants") {
                variantsExtension = extension;
            } else if (extension.name === "KHR_materials_emissive_strength") {
                emissiveStrengthExtension = extension;
            } else if (extension.name === "KHR_physics_rigid_bodies" || extension.name === "MSFT_rigid_bodies") {
                physicsExtensionLoaded = true;
            }
        });
    });

    return BABYLON.SceneLoader.LoadAsync(path).then(function (newScene) {

        scene = newScene;

        // Physics diagnostics
        console.log('[Physics] Scene loaded');
        console.log('[Physics] scene.physicsEnabled:', scene.physicsEnabled);
        console.log('[Physics] scene.getPhysicsEngine():', scene.getPhysicsEngine());
        const physicsEngine = scene.getPhysicsEngine();
        if (physicsEngine) {
            console.log('[Physics] Physics engine name:', physicsEngine.name);
            console.log('[Physics] Gravity:', physicsEngine.gravity ? physicsEngine.gravity.toString() : physicsEngine._gravity ? physicsEngine._gravity.toString() : 'unknown');
        } else {
            console.warn('[Physics] No physics engine attached to scene');
        }

        const meshesWithPhysics = scene.meshes.filter(m => m.physicsBody);
        console.log('[Physics] Total meshes:', scene.meshes.length);
        console.log('[Physics] Meshes with physicsBody:', meshesWithPhysics.length);
        scene.meshes.forEach(function(m) {
            if (m.physicsBody) {
                const motionType = m.physicsBody.motionType;
                const motionTypeStr = motionType === 0 ? 'STATIC(0)'
                    : motionType === 1 ? 'ANIMATED(1)'
                    : motionType === 2 ? 'DYNAMIC(2)'
                    : String(motionType);
                console.log('[Physics] Mesh:', m.name,
                    '| motionType:', motionTypeStr,
                    '| position:', m.position.toString(),
                    '| physicsBody:', m.physicsBody);
            } else {
                console.log('[Physics] Mesh (no physicsBody):', m.name, '| position:', m.position.toString());
            }
        });

        // フレームごとの位置変化を監視（最初の120フレーム、10フレームおき）
        const dynamicMesh = scene.meshes.find(m => m.physicsBody && m.physicsBody.motionType === 2);
        if (!dynamicMesh) {
            console.warn('[Physics] No DYNAMIC mesh found');
        }

        // Pause physics until the loading spinner is hidden, so users can see the
        // simulation start (e.g. balls falling) instead of seeing it already settled.
        if (physicsExtensionLoaded && physicsEngine && typeof physicsEngine.setTimeStep === 'function') {
            const originalTimeStep = typeof physicsEngine.getTimeStep === 'function'
                ? physicsEngine.getTimeStep()
                : 1 / 60;
            physicsEngine.setTimeStep(0);
            console.log('[Physics] Simulation paused (timeStep=0). Will resume after loading UI hides. Original timeStep:', originalTimeStep);

            const resumePhysics = function() {
                physicsEngine.setTimeStep(originalTimeStep);
                console.log('[Physics] Simulation resumed (timeStep=' + originalTimeStep + ')');
            };

            // Hook into engine.hideLoadingUI so we resume right after the spinner hides.
            // Add a small extra delay so the first rendered frame is visible before things move.
            const originalHideLoadingUI = engine.hideLoadingUI.bind(engine);
            let resumed = false;
            engine.hideLoadingUI = function() {
                originalHideLoadingUI();
                if (!resumed) {
                    resumed = true;
                    setTimeout(resumePhysics, 200);
                }
            };
            // Fallback: in case hideLoadingUI is not invoked for some reason
            setTimeout(function() {
                if (!resumed) {
                    resumed = true;
                    console.log('[Physics] Fallback resume (hideLoadingUI was not called within 3s)');
                    resumePhysics();
                }
            }, 3000);
        }

        let parentMesh = scene.rootNodes[0];
        
        if ( variantsExtension != null ) {
            variants = variantsExtension.getAvailableVariants(parentMesh);
            if (variants.length > 0 ) {
                params.VARIANT = modelInfo.variant == undefined ? DEFAULT_NAME : modelInfo.variant;
                let variantNames = variants.reduce(function (allNames, name) { 
                    allNames[name] = name;
                    return allNames
                }, {});
                variantNames[DEFAULT_NAME] = DEFAULT_NAME;
                guiVariants = gui.add(params, 'VARIANT', variantNames).name("Variant");
                variantsExtension.selectVariant(parentMesh, params.VARIANT)

                guiVariants.onChange(function (value) {
                    if (value == DEFAULT_NAME) {
                         variantsExtension.reset(parentMesh);
                    } else {
                         variantsExtension.selectVariant(parentMesh, value);
                    }
                });
            }
        }
        
        if ( modelInfo.name == "GearboxAssy" ) {
            // TODO: Position adjustment required
            parentMesh.position.x += 159.20;
            parentMesh.position.y -= 17.02;
            parentMesh.position.z += 3.21;
        } else if ( modelInfo.name == "Fox" ) {
            scene.animationGroups[2].play(true); // 0:Survey, 1:Walk, 2:Run
        } else if ( modelInfo.name == "MorphStressTest" ) {
            scene.animationGroups[1].play(true); // 0:Individuals, 1:TheWave, 2:Pulse
        }
        let modelScaling = parentMesh.scaling;
        let camera = new BABYLON.ArcRotateCamera(DEFAULT_NAME, 0, 1, 5, BABYLON.Vector3.Zero(), scene);
        
        camera.minZ /= 100; // TODO: If near is 1, the model is missing, so adjusted
        camera.setPosition(new BABYLON.Vector3(0 / scale, 3 / scale, 5 / scale));
        
        camera.attachControl(canvas, false, false);
        camera.wheelDeltaPercentage = 0.005;
        scene.activeCamera = camera;

        if ( scene.cameras.length > 1 ) {
            if ( modelInfo.name == "VC" || modelInfo.name == "VirtualCity" ) {
                scene.cameras.forEach(camera => camera.name == DEFAULT_NAME ? camera.minZ : camera.minZ /= 100); // TODO: If near is 1, the model is missing, so adjusted
            }
            
            // TODO: Some models feel that the camera is not in ascending order, so you need to investigate
            //let cameraNames = scene.cameras.map(camera => camera.name).reverse();
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

        if ( emissiveStrengthExtension != null ) {
            var pipeline = new BABYLON.DefaultRenderingPipeline(
                "defaultPipeline", // The name of the pipeline
                true, // Do you want the pipeline to use HDR texture?
                scene, // The scene instance
                scene.cameras // The list of cameras to be attached to
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
            // Models with "EXT_lights_image_based" can supply their own environmentTexture.
            environmentTexture = scene.environmentTexture;
            let skyboxBlur = 0;
            skybox = scene.createDefaultSkybox(environmentTexture.clone(), true,
                (scene.activeCamera.maxZ - scene.activeCamera.minZ) / 2, skyboxBlur);
        } else {
            // Skybox
            
            // Using CubeTexture can reduce the size of the texture, but it will take longer to load because of the need to calculate spherical harmonics.
            //cubeTexture = new BABYLON.CubeTexture("../../textures/cube/skybox/", scene, ["px.jpg", "py.jpg", "pz.jpg", "nx.jpg", "ny.jpg", "nz.jpg"]);
            //cubeTexture = new BABYLON.CubeTexture("../../textures/papermill/environment/", scene, ["environment_right_0.jpg", "environment_top_0.jpg", "environment_front_0.jpg", "environment_left_0.jpg", "environment_bottom_0.jpg", "environment_back_0.jpg"]);
            
            // If you are worried about performance, you can speed up reading by using a .dds or .env file.
            // https://doc.babylonjs.com/how_to/use_hdr_environment
            cubeTexture = new BABYLON.CubeTexture("../../textures/env/papermillSpecularHDR.env", scene);
            //cubeTexture = new BABYLON.CubeTexture.CreateFromPrefilteredData("../../textures/dds/papermillSpecularHDR.dds", scene);
            
            //cubeTexture.gammaSpace = true;
            
            skybox = scene.createDefaultSkybox(cubeTexture, true, 10000);
/*
            // If you care about the performance of createDefaultSkybox(), The following code can be used to avoid this. However, the environmental texture will not be applied.
            // http://www.html5gamedevs.com/topic/36997-using-skybox-takes-time-to-display-is-it-a-usage-problem/?tab=comments#comment-211765
            let skybox = BABYLON.Mesh.CreateBox("skyBox", 10000, scene);
            let skyboxMaterial = new BABYLON.StandardMaterial("skyBoxMaterial", scene);
            skyboxMaterial.backFaceCulling = false;
            skyboxMaterial.reflectionTexture = cubeTexture;
            skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
            skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
            skyboxMaterial.disableLighting = true;
            skybox.material = skyboxMaterial;
*/
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
            pipeline.bloomEnabled = value;
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
        function showPhysicsDebug(value) {
            if (value) {
                if (!physicsViewer && BABYLON.PhysicsViewer) {
                    physicsViewer = new BABYLON.PhysicsViewer(scene);
                }
                if (physicsViewer) {
                    scene.meshes.forEach(function(m) {
                        if (m.physicsBody) {
                            try { physicsViewer.showBody(m.physicsBody); } catch(e) {}
                        }
                    });
                }
            } else if (physicsViewer) {
                physicsViewer.dispose();
                physicsViewer = null;
            }
        }
        if (params.PHYSICS_DEBUG) showPhysicsDebug(true);
        guiPhysicsDebug.onChange(showPhysicsDebug);

        engine.runRenderLoop(function() {
            scene.activeCamera.alpha += params.ROTATE ? 0.005 : 0;
            scene.render();
        });
    });

    return scene;
};

let canvas = document.querySelector("#renderCanvas");
let engine = new BABYLON.Engine(canvas, true);
engine.enableOfflineSupport = false; // Suppress manifest reference

window.addEventListener('resize', function() {
    engine.resize();
});
await initializeRigidBodyPhysics();
let scene = createScene(engine);
