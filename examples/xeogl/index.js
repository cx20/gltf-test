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

let scale = modelInfo.scale;
let url = "../../" + modelInfo.category + "/" + modelInfo.path;
if(modelInfo.url) {
    url = modelInfo.url;
}
var ROTATE = true;
let gui = new dat.GUI();
let guiRotate = gui.add(window, 'ROTATE').name('Rotate');

// Load glTF
let model = new xeogl.GLTFModel({
    src: url,
    scale: [scale,scale,scale]
});

let skybox = new xeogl.Skybox({
    src: "../../textures/skybox/cloudySkyBox.jpg",
    active: true
});

// Get the default Scene off the Skybox
let scene = skybox.scene;

scene.clearLights();

let ambientLight = new xeogl.AmbientLight({
    //color: [1.0, 0.3, 0.7]
    color: [0.06, 0.06, 0.18]
});

new xeogl.DirLight({
    id: "keyLight",
    dir: [0.0, 0.0, 1.0],
    color: [1.0, 0.9, 0.9],
    intensity: 0.5,
    space: "view"
});

new xeogl.DirLight({
    id: "fillLight",
    dir: [0, 0, -5],
    color: [1.0, 0.9, 0.9],
    intensity: 0.5,
    space: "view"
});

let camera = scene.camera;
if (modelInfo.name == "GearboxAssy" ) {
    camera.eye = [184.21, 10.54, -7.03];
    camera.look = [159.20, 17.02, 3.21];
    camera.up = [-0.15, 0.97, 0.13];
} else {
    camera.eye = [0.0, 1.0, -3.0];
    camera.look = [0.0, 0.0, 0.0];
    camera.up = [0.0, 1.0, 0.0];
}

new xeogl.CameraControl();
scene.on("tick",
    function () {
        if ( ROTATE ) {
            camera.orbitYaw(0.2);
        }
    });

