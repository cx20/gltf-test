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
    modelInfo = TutorialAgiPbrModelIndex.getCurrentModel();
}
if (!modelInfo) {
    document.getElementById('container').innerHTML = 'Please specify a model to load';
    throw new Error('Model not specified or not found in list.');
}

var gui;
var ROTATE = true;
var BOUNDING_BOX = false;

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
        if (mesh.parent !== null && mesh.parent !== undefined) {
            parentMesh = findParentForMesh(mesh);
        }
        return parentMesh;
    }

    function findParentForMeshes(meshes) {
        var parentMesh = meshes[0];
        for (var i = 0; i < meshes.length; i++) {
            if (scene.meshes[i].parent !== null && scene.meshes[i].parent !== undefined) {
                parentMesh = scene.meshes[i].parent;
                break;
            }
        }
        parentMesh = findParentForMesh(parentMesh);
        return parentMesh;
    }

    // GUI
    gui = new dat.GUI();
    var mapRotate = gui.add(window, 'ROTATE').name('Rotate');
    var mapBoundingBox = gui.add(window, 'BOUNDING_BOX').name('Bounding Box');

    BABYLON.SceneLoader.Load(base, file, engine, function(newScene) {

        scene = newScene;
        var parentMesh = findParentForMeshes(scene.meshes);

        if ( modelInfo.name == "GearboxAssy" ) {
            scale = 0.2;
            parentMesh.position.x -= 159.20;
            parentMesh.position.y -= 17.02;
            parentMesh.position.z -= 3.21;
        }
        var modelScaling = parentMesh.scaling;
        parentMesh.scaling = new BABYLON.Vector3(modelScaling.x * scale, modelScaling.y * scale, modelScaling.z * scale);
        var camera = new BABYLON.ArcRotateCamera("camera", 0, 1, 5, BABYLON.Vector3.Zero(), scene);
        camera.setPosition( new BABYLON.Vector3(0, 3, -5) );
        camera.attachControl(canvas, false, false);
        scene.activeCamera = camera;
        
        var light1 = new BABYLON.DirectionalLight("dir01", new BABYLON.Vector3(0.0, -1.0, 0.5), scene);
        var light2 = new BABYLON.DirectionalLight("dir02", new BABYLON.Vector3(-0.5, -0.5, -0.5), scene);

        // Skybox
        var skybox = BABYLON.Mesh.CreateBox("skyBox", 1000.0, scene);
        var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
        skyboxMaterial.backFaceCulling = false;
        skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture(
            "../../textures/cube/skybox/",
            scene,
            ["px.jpg", "py.jpg", "pz.jpg", "nx.jpg", "ny.jpg", "nz.jpg"]
            );
        skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
        skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
        skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
        skyboxMaterial.disableLighting = true;
        skybox.material = skyboxMaterial;

        //scene.forceShowBoundingBoxes = true;
        //scene.debugLayer.show(true, camera);

        mapBoundingBox.onChange(function (value) {
            scene.forceShowBoundingBoxes = value;
        });

        engine.runRenderLoop(function() {
            scene.activeCamera.alpha += ROTATE ? 0.005 : 0;
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
