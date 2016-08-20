var createScene = function(engine) {

    var scene = new BABYLON.Scene(engine);
    var mesh;
    scene.clearColor = new BABYLON.Color3(1, 1, 1);

    // RiggedSimple.gltf
    BABYLON.SceneLoader.Load("../../../sampleModels/RiggedSimple/glTF-Embedded/", "RiggedSimple.gltf", engine, function (newScene) {

        scene = newScene;
        mesh = scene.meshes[0];
        mesh.scaling = new BABYLON.Vector3(0.2, 0.2, 0.2);

        var camera = new BABYLON.ArcRotateCamera("camera", 0, 0, 5, BABYLON.Vector3.Zero(), scene);
        camera.lowerBetaLimit = 1.0;
        camera.upperBetaLimit = (Math.PI / 2) * 0.9;
        camera.lowerRadiusLimit = 3;
        camera.upperRadiusLimit = 15;
        camera.attachControl(canvas, false, false);
        camera.panningSensibility = 50.0;
        camera.angularSensibility = 500;
        scene.activeCamera = camera;

        var rad = 0.0;
        engine.runRenderLoop(function () {
            scene.activeCamera.alpha += 0.02;
            scene.render();
        });        
    });
    return scene;
}

var canvas = document.querySelector("#c");
var engine = new BABYLON.Engine(canvas, true);
var scene = createScene(engine);
