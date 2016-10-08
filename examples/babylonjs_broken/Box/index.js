var createScene = function(engine) {

    var scene = new BABYLON.Scene(engine);
    var mesh;
    scene.clearColor = new BABYLON.Color3(1, 1, 1);

    // Box.gltf
    BABYLON.SceneLoader.Load("../../../sampleModels/Box/glTF-Embedded/", "Box.gltf", engine, function (newScene) {

        scene = newScene;
        mesh = scene.meshes[0];

        camera = new BABYLON.ArcRotateCamera("camera", 0, 0, 5, BABYLON.Vector3.Zero(), scene);
        camera.attachControl(canvas, false, false);
        camera.panningSensibility = 50.0;
        camera.angularSensibility = 500;
        scene.activeCamera = camera;

        var rad = 0.0;
        engine.runRenderLoop(function () {
            scene.render();
            rad += Math.PI * 1.0 / 180.0;
            // quaternion
            mesh.rotate(BABYLON.Axis.X, Math.PI * 1.0 / 180.0, BABYLON.Space.LOCAL);
            mesh.rotate(BABYLON.Axis.Y, Math.PI * 1.0 / 180.0, BABYLON.Space.LOCAL);
            mesh.rotate(BABYLON.Axis.Z, Math.PI * 1.0 / 180.0, BABYLON.Space.LOCAL);
            scene.render();
        });
    });
    return scene;
}

var canvas = document.querySelector("#c");
var engine = new BABYLON.Engine(canvas, true);
var scene = createScene(engine);
