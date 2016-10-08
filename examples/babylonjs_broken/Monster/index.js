var createScene = function(engine) {

    var scene = new BABYLON.Scene(engine);
    var mesh;
    scene.clearColor = new BABYLON.Color3(1, 1, 1);

    // Monster.gltf
    BABYLON.SceneLoader.Load("../../../sampleModels/Monster/glTF-Embedded/", "Monster.gltf", engine, function (newScene) {

        scene = newScene;
        mesh = scene.meshes[0];
        mesh.scaling = new BABYLON.Vector3(0.1, 0.1, 0.1);

        var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0.8, 100, new BABYLON.Vector3.Zero(), scene);
        camera.setPosition(new BABYLON.Vector3(0, 0, 100));
        
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
