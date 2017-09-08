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

var scale = modelInfo.scale;

// Load glTF
var model = new xeogl.GLTFModel({
    src: "../../" + modelInfo.category + "/" + modelInfo.path,
    transform: new xeogl.Scale({
        xyz: [scale,scale,scale]
    })
});

xeogl.scene.lights.lights = [
    new xeogl.AmbientLight({
        color: [1.0, 0.7, 0.7]
    })
];

var view = model.scene.camera.view;
if (modelInfo.name == "GearboxAssy" ) {
    view.eye = [184.21, 10.54, -7.03];
    view.look = [159.20, 17.02, 3.21];
    view.up = [-0.15, 0.97, 0.13];
} else {
    view.eye = [0.0, 0.0, -3.0];
    view.look = [0.0, 0.0, 0.0];
    view.up = [0.0, 1.0, 0.0];
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

var lights = xeogl.scene.lights;
lights.lights = dirLights;

 
new xeogl.CameraControl();
model.scene.on("tick",
    function () {
        view.rotateEyeY(1.0);
        //view.rotateEyeX(1.0);
    });
