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
    modelInfo = TutorialExtensionTestModelIndex.getCurrentModel();
}
if (!modelInfo) {
    document.getElementById('container').innerHTML = 'Please specify a model to load';
    throw new Error('Model not specified or not found in list.');
}

var ROTATE = true;
var BOUNDING_BOX = false;
var CUBEMAP = true;
var IBL = true;
var LIGHTS = false; // The default is to use IBL instead of lights
var DEBUG = false;
var VARIANT = "";
var CAMERA = "";

let createScene = function(engine) {

    let scene = new BABYLON.Scene(engine);
    let mesh;
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
    let guiRotate = gui.add(window, 'ROTATE').name('Rotate');
    let guiBoundingBox = gui.add(window, 'BOUNDING_BOX').name('Bounding Box');
    let guiCubeMap = gui.add(window, 'CUBEMAP').name('CubeMap');
    let guiIbl = gui.add(window, 'IBL').name('IBL');
    let guiLights = gui.add(window, 'LIGHTS').name('Lights');
    let guiDebug = gui.add(window, 'DEBUG').name('Debug');
    let guiVariants = null;
    let guiCameras = null;

    let variantsExtension = null;

    BABYLON.SceneLoader.OnPluginActivatedObservable.addOnce(function (loader) {
        loader.animationStartMode = modelInfo.allAnimations ? BABYLON.GLTFLoaderAnimationStartMode.ALL : BABYLON.GLTFLoaderAnimationStartMode.FIRST;

        loader.onExtensionLoadedObservable.add(function (extension) {
            if (extension.name === "KHR_materials_variants") {
                variantsExtension = extension;
            }
        });
    });

    return BABYLON.SceneLoader.LoadAsync(path).then(function (newScene) {

        scene = newScene;
        
        let parentMesh = scene.rootNodes[0];
        
        if ( variantsExtension != null ) {
            variants = variantsExtension.getAvailableVariants(parentMesh);
            if (variants.length > 0 ) {
                VARIANT = modelInfo.variant == undefined ? variants[0] : modelInfo.variant;
                let variantNames = variants.reduce(function (allNames, name) { 
                    allNames[name] = name;
                    return allNames
                }, {});
                guiVariants = gui.add(window, 'VARIANT', variantNames).name("Variant");
                variantsExtension.selectVariant(parentMesh, VARIANT)

                guiVariants.onChange(function (value) {
                    variantsExtension.selectVariant(parentMesh, value);
                });
            }
        }
        
        if ( scene.cameras.length > 0 ) {
            scene.cameras.forEach(camera => camera.minZ /= 1000); // TODO: If near is 1, the model is missing, so adjusted
            let cameraNames = scene.cameras.map(camera => camera.name).reverse();
            guiCameras = gui.add(window, 'CAMERA', cameraNames).name("Camera");

            guiCameras.onChange(function (value) {
                var camera = scene.cameras.find(function(camera) {
                    return camera.name === value;
                });
                scene.activeCamera = camera;
            });
        }

        if ( modelInfo.name == "GearboxAssy" ) {
            // TODO: Position adjustment required
            parentMesh.position.x += 159.20 * scale;
            parentMesh.position.y -= 17.02 * scale;
            parentMesh.position.z += 3.21 * scale;
        } else if ( modelInfo.name == "Fox" ) {
            scene.animationGroups[2].play(true); // 0:Survey, 1:Walk, 2:Run
        }
        let modelScaling = parentMesh.scaling;
        parentMesh.scaling = new BABYLON.Vector3(modelScaling.x * scale, modelScaling.y * scale, modelScaling.z * scale);
        let camera = new BABYLON.ArcRotateCamera("camera", 0, 1, 5, BABYLON.Vector3.Zero(), scene);
        camera.setPosition( new BABYLON.Vector3(0, 3, -5) );
        camera.attachControl(canvas, false, false);
        camera.wheelDeltaPercentage = 0.005;
        scene.activeCamera = camera;

        let light1 = new BABYLON.DirectionalLight("dir01", new BABYLON.Vector3(0.0, -1.0, 0.5), scene);
        let light2 = new BABYLON.DirectionalLight("dir02", new BABYLON.Vector3(-0.5, -0.5, -0.5), scene);
        light1.setEnabled(LIGHTS);
        light2.setEnabled(LIGHTS);

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
        //scene.debugLayer.show(true, camera);

        guiBoundingBox.onChange(function (value) {
            scene.forceShowBoundingBoxes = value;
        });

        guiCubeMap.onChange(function (value) {
            skybox.visibility = value ? 1 : 0;
            
            variantsExtension.selectVariant(scene.rootNodes[0], "street")
        });

        guiIbl.onChange(function (value) {
            scene.environmentTexture = value ? environmentTexture : null;
        });

        guiLights.onChange(function (value) {
            light1.setEnabled(value);
            light2.setEnabled(value);
        });

        guiDebug.onChange(function (value) {
            scene.debugLayer.show({popup: value});
        });

        engine.runRenderLoop(function() {
            scene.activeCamera.alpha += ROTATE ? 0.005 : 0;
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
