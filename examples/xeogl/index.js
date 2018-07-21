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

var scale = modelInfo.scale;
var url = "../../" + modelInfo.category + "/" + modelInfo.path;
if(modelInfo.url) {
    url = modelInfo.url;
}
var ROTATE = true;
var gui = new dat.GUI();
var guiRotate = gui.add(window, 'ROTATE').name('Rotate');

// Load glTF
var model = new xeogl.GLTFModel({
    //src: "../../" + modelInfo.category + "/" + modelInfo.path,
    src: url,
    transform: new xeogl.Scale({
        xyz: [scale,scale,scale]
    })
});

var skybox = new xeogl.Skybox({
    src: "../../textures/skybox/cloudySkyBox.jpg",
    active: true
});

// Get the default Scene off the Skybox
var scene = skybox.scene;

scene.lights.lights = [
    new xeogl.AmbientLight({
        color: [1.0, 0.7, 0.7]
    })
];

var camera = scene.camera;
if (modelInfo.name == "GearboxAssy" ) {
    camera.eye = [184.21, 10.54, -7.03];
    camera.look = [159.20, 17.02, 3.21];
    camera.up = [-0.15, 0.97, 0.13];
} else {
    camera.eye = [0.0, 1.0, -3.0];
    camera.look = [0.0, 0.0, 0.0];
    camera.up = [0.0, 1.0, 0.0];
}

var dirLights = [
    new xeogl.DirLight({
        id: "keyLight",
        dir: [0.8, -0.6, -0.8],
        color: [0.8, 0.8, 0.8],
        intensity: 1.0,
        space: "world"
    }),

    new xeogl.DirLight({
        id: "fillLight",
        dir: [-0.8, -0.4, -0.4],
        color: [0.4, 0.4, 0.5],
        intensity: 1.0,
        space: "world"
    }),

    new xeogl.DirLight({
        id: "rimLight",
        dir: [0.2, -0.8, 0.8],
        color: [0.8, 0.8, 0.8],
        intensity: 1.0,
        space: "world"
    })
];

var reflectionMap = new xeogl.CubeTexture({
    src: [
        "../../textures/cube/skybox/px.jpg",
        "../../textures/cube/skybox/nx.jpg",
        "../../textures/cube/skybox/py.jpg",
        "../../textures/cube/skybox/ny.jpg",
        "../../textures/cube/skybox/pz.jpg",
        "../../textures/cube/skybox/nz.jpg"
    ],
    encoding: "linear"
});

var lights = scene.lights;
lights.lights = dirLights;

lights.reflectionMap = reflectionMap;
 

new xeogl.CameraControl();
scene.on("tick",
    function () {
        if ( ROTATE ) {
            camera.orbitYaw(0.2);
        }
    });
