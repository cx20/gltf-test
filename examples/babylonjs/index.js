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
        parentMesh.scaling = new BABYLON.Vector3(scale, scale, scale);

        if ( modelInfo.name == "GearboxAssy" ) {
            camera = new BABYLON.ArcRotateCamera("camera", 0, 1, 200, BABYLON.Vector3.Zero(), scene);
        } else {
            camera = new BABYLON.ArcRotateCamera("camera", 0, 1, 5, BABYLON.Vector3.Zero(), scene);
        }
        
        camera.attachControl(canvas, false);
        scene.forceShowBoundingBoxes = true;
        scene.debugLayer.show(true, camera);

        engine.runRenderLoop(function() {
            scene.activeCamera.alpha += 0.01;
            scene.render();
        });
    });
    return scene;
}

var canvas = document.querySelector("#renderCanvas");
var engine = new BABYLON.Engine(canvas, true);
var scene = createScene(engine);
