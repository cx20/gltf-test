var modelInfo = ModelIndex.getCurrentModel();
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
var DEBUG = false;

var createScene = function(engine) {

    var scene = new BABYLON.Scene(engine);
    var mesh;
    scene.clearColor = new BABYLON.Color3(1, 1, 1);

    var scale = modelInfo.scale;
    //var path = "../../sampleModels/" + modelInfo.path;
    var path = "../../" + modelInfo.category + "/" + modelInfo.path;
    if(modelInfo.url) {
        path = modelInfo.url;
    }
    var base = path.substr(0, path.lastIndexOf("/") + 1);
    var file = path.substr(path.lastIndexOf("/") + 1);

    // GUI
    var gui = new dat.GUI();
    var guiRotate = gui.add(window, 'ROTATE').name('Rotate');
    var guiBoundingBox = gui.add(window, 'BOUNDING_BOX').name('Bounding Box');
    var guiDebug = gui.add(window, 'DEBUG').name('Debug');

    BABYLON.SceneLoader.OnPluginActivatedObservable.add(function (plugin) {
        plugin.animationStartMode = modelInfo.allAnimations ? BABYLON.GLTFLoaderAnimationStartMode.ALL : BABYLON.GLTFLoaderAnimationStartMode.FIRST;
    }, undefined, undefined, undefined, true);

    var loader = BABYLON.SceneLoader.Load(base, file, engine, function(newScene) {

        scene = newScene;
        var parentMesh = scene.rootNodes[0];

        if ( modelInfo.name == "GearboxAssy" ) {
            // TODO: Position adjustment required
            parentMesh.position.x += 159.20 * scale;
            parentMesh.position.y -= 17.02 * scale;
            parentMesh.position.z += 3.21 * scale;
        }
        var modelScaling = parentMesh.scaling;
        parentMesh.scaling = new BABYLON.Vector3(modelScaling.x * scale, modelScaling.y * scale, modelScaling.z * scale);
        var camera = new BABYLON.ArcRotateCamera("camera", 0, 1, 5, BABYLON.Vector3.Zero(), scene);
        camera.setPosition( new BABYLON.Vector3(0, 3, -5) );
        camera.attachControl(canvas, false, false);
        camera.wheelDeltaPercentage = 0.005;
        scene.activeCamera = camera;

        var light1 = new BABYLON.DirectionalLight("dir01", new BABYLON.Vector3(0.0, -1.0, 0.5), scene);
        var light2 = new BABYLON.DirectionalLight("dir02", new BABYLON.Vector3(-0.5, -0.5, -0.5), scene);

        // Skybox
        var cubeTexture = new BABYLON.CubeTexture(
            "../../textures/cube/skybox/",
            scene,
            ["px.jpg", "py.jpg", "pz.jpg", "nx.jpg", "ny.jpg", "nz.jpg"]
        );
        scene.createDefaultSkybox(cubeTexture, true, 10000);
/*
        // If you care about the performance of createDefaultSkybox(), The following code can be used to avoid this. However, the environmental texture will not be applied.
        // http://www.html5gamedevs.com/topic/36997-using-skybox-takes-time-to-display-is-it-a-usage-problem/?tab=comments#comment-211765
        var skybox = BABYLON.Mesh.CreateBox("skyBox", 10000, scene);
        var skyboxMaterial = new BABYLON.StandardMaterial("skyBoxMaterial", scene);
        skyboxMaterial.backFaceCulling = false;
        skyboxMaterial.reflectionTexture = cubeTexture;
        skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
        skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
        skyboxMaterial.disableLighting = true;
        skybox.material = skyboxMaterial;
*/
        //scene.debugLayer.show(true, camera);

        guiBoundingBox.onChange(function (value) {
            scene.forceShowBoundingBoxes = value;
        });

        guiDebug.onChange(function (value) {
            if ( value ) {
                scene.debugLayer.show({popup: true});
            }
        });

        engine.runRenderLoop(function() {
            scene.activeCamera.alpha += ROTATE ? 0.005 : 0;
            scene.render();
        });
    });

    return scene;
};

var canvas = document.querySelector("#renderCanvas");
var engine = new BABYLON.Engine(canvas, true);
engine.enableOfflineSupport = false; // Suppress manifest reference

window.addEventListener('resize', function() {
    engine.resize();
});
var scene = createScene(engine);
