var modelInfo = ModelIndex.getCurrentModel();
if (!modelInfo) {
    modelInfo = TutorialModelIndex.getCurrentModel();
}
if (!modelInfo) {
    document.getElementById('container').innerHTML = 'Please specify a model to load';
    throw new Error('Model not specified or not found in list.');
}

var createScene = function(engine) {

    var scene = new BABYLON.Scene(engine);
    var mesh;
    scene.clearColor = new BABYLON.Color3(1, 1, 1);

    var scale = modelInfo.scale;
    //var path = "../../sampleModels/" + modelInfo.path;
    var path = "../../" + modelInfo.category + "/" + modelInfo.path;
    var base = path.substr(0, path.lastIndexOf("/") + 1);
    var file = path.substr(path.lastIndexOf("/") + 1);

    function findParentForMesh(mesh) {
        var parentMesh = mesh;
        if (mesh.parent !== null) {
            parentMesh = findParentForMesh(mesh);
        }
        return parentMesh;
    }

    function findParentForMeshes(meshes) {
        var parentMesh = meshes[0];
        for (var i = 0; i < meshes.length; i++) {
            if (scene.meshes[i].parent !== null) {
                parentMesh = scene.meshes[i].parent;
                break;
            }
        }
        parentMesh = findParentForMesh(parentMesh);
        return parentMesh;
    }

    BABYLON.SceneLoader.Load(base, file, engine, function(newScene) {

        scene = newScene;
        var parentMesh = findParentForMeshes(scene.meshes);

        if ( modelInfo.name == "GearboxAssy" ) {
            scale = 0.2;
            parentMesh.position.x -= 159.20;
            parentMesh.position.y -= 17.02;
            parentMesh.position.z -= 3.21;
        }
        //parentMesh.scaling = new BABYLON.Vector3(scale, scale, scale);
        camera = new BABYLON.ArcRotateCamera("camera", 0, 1, 5, BABYLON.Vector3.Zero(), scene);
        camera.setPosition( new BABYLON.Vector3(0, 0, -5/scale) );
        camera.attachControl(canvas, false, false);
        scene.activeCamera = camera;
        
        //scene.forceShowBoundingBoxes = true;
        //scene.debugLayer.show(true, camera);

        engine.runRenderLoop(function() {
            scene.activeCamera.alpha += 0.01;
            scene.render();
        });
    });
    return scene;
}

var canvas = document.querySelector("#renderCanvas");
var engine = new BABYLON.Engine(canvas, true);
window.addEventListener('resize', function() {
    engine.resize();
});
var scene = createScene(engine);
