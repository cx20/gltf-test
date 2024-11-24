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
    VARIANT: DEFAULT_NAME,
    CAMERA: DEFAULT_NAME,
    TONEMAP: "None"
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
    let guiVariants = null;
    let guiCameras = null;

    let variants = null;
    let variantsExtension = null;
    let emissiveStrengthExtension = null;

    BABYLON.SceneLoader.OnPluginActivatedObservable.addOnce(function (loader) {
        loader.animationStartMode = modelInfo.allAnimations ? BABYLON.GLTFLoaderAnimationStartMode.ALL : BABYLON.GLTFLoaderAnimationStartMode.FIRST;

        loader.onExtensionLoadedObservable.add(function (extension) {
            if (extension.name === "KHR_materials_variants") {
                variantsExtension = extension;
            } else if (extension.name === "KHR_materials_emissive_strength") {
                emissiveStrengthExtension = extension;
            }
        });
    });

    return BABYLON.SceneLoader.LoadAsync(path).then(function (newScene) {

        scene = newScene;
        
        let parentMesh = scene.rootNodes[0];
        
        if ( variantsExtension != null ) {
            variants = variantsExtension.getAvailableVariants(parentMesh);
            if (variants.length > 0 ) {
                VARIANT = modelInfo.variant == undefined ? DEFAULT_NAME : modelInfo.variant;
                let variantNames = variants.reduce(function (allNames, name) { 
                    allNames[name] = name;
                    return allNames
                }, {});
                variantNames[DEFAULT_NAME] = DEFAULT_NAME;
                guiVariants = gui.add(params, 'VARIANT', variantNames).name("Variant");
                variantsExtension.selectVariant(parentMesh, VARIANT)

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
            if ( modelInfo.name == "VC" ) {
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
let scene = createScene(engine);
