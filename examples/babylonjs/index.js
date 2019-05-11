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
var SKYBOX = true;
var DEBUG = false;

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
    let guiSkybox = gui.add(window, 'SKYBOX').name('IBL');
    let guiDebug = gui.add(window, 'DEBUG').name('Debug');

    BABYLON.SceneLoader.OnPluginActivatedObservable.addOnce(function (plugin) {
        plugin.animationStartMode = modelInfo.allAnimations ? BABYLON.GLTFLoaderAnimationStartMode.ALL : BABYLON.GLTFLoaderAnimationStartMode.FIRST;
    });

    let loader = BABYLON.SceneLoader.Load(base, file, engine, function(newScene) {

        scene = newScene;
        let parentMesh = scene.rootNodes[0];

        if ( modelInfo.name == "GearboxAssy" ) {
            // TODO: Position adjustment required
            parentMesh.position.x += 159.20 * scale;
            parentMesh.position.y -= 17.02 * scale;
            parentMesh.position.z += 3.21 * scale;
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

        let environmentTexture;
        let skyBox;
        if (scene.environmentTexture) {
            // Models with "EXT_lights_image_based" can supply their own environmentTexture.
            environmentTexture = scene.environmentTexture;
            let skyboxBlur = 0;
            skybox = scene.createDefaultSkybox(environmentTexture.clone(), true,
                (scene.activeCamera.maxZ - scene.activeCamera.minZ) / 2, skyboxBlur);
        } else {
            // Skybox
            cubeTexture = new BABYLON.CubeTexture(
                "../../textures/cube/skybox/",
                scene,
                ["px.jpg", "py.jpg", "pz.jpg", "nx.jpg", "ny.jpg", "nz.jpg"]
            );
            scene.createDefaultSkybox(cubeTexture, true, 10000);
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

        guiSkybox.onChange(function (value) {
            scene.environmentTexture = value ? environmentTexture : null;
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
