var modelInfo = ModelIndex.getCurrentModel();
if (!modelInfo) {
    document.getElementById('container').innerHTML = 'Please specify a model to load';
    throw new Error('Model not specified or not found in list.');
}

var createScene = function(engine) {

    var scene = new BABYLON.Scene(engine);
    var mesh;
    scene.clearColor = new BABYLON.Color3(1, 1, 1);

    var scale = modelInfo.scale;
    var path = "../../sampleModels/" + modelInfo.path;
    var base = path.substr(0, path.lastIndexOf("/")+1);
    var file = path.substr(path.lastIndexOf("/")+1);

    // Box.gltf
    BABYLON.SceneLoader.Load(base, file, engine, function (newScene) {

        scene = newScene;
        mesh = scene.meshes[0];
        mesh.scaling = new BABYLON.Vector3(scale, scale, scale);

        camera = new BABYLON.ArcRotateCamera("camera", 0, 1, 5, BABYLON.Vector3.Zero(), scene);
        camera.attachControl(canvas, false, false);
        camera.panningSensibility = 50.0;
        camera.angularSensibility = 500;
        scene.activeCamera = camera;

        engine.runRenderLoop(function () {
            scene.activeCamera.alpha += 0.01;
            scene.render();
        });
    });
    return scene;
}

var canvas = document.querySelector("#renderCanvas");
var engine = new BABYLON.Engine(canvas, true);
var scene = createScene(engine);
