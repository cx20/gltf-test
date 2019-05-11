let modelInfo = ModelIndex.getCurrentModel();
if (!modelInfo) {
    document.getElementById('container').innerHTML = 'Please specify a model to load';
    throw new Error('Model not specified or not found in list.');
}

let scale = modelInfo.scale;

// Load glTF
let model = new XEO.Model({
    src: "../../sampleModels/" + modelInfo.path
});

let view = model.scene.camera.view;
view.eye = [
    0.0,
    0.0,
    -3.0 * (1/scale)
];
view.look = [
    0.0,
    0.0,
    0.0
];
view.up = [
    0.0,
    1.0,
    0.0
];

new XEO.CameraControl();
model.scene.on("tick",
    function () {
        view.rotateEyeY(1.0);
        //view.rotateEyeX(1.0);
    });
