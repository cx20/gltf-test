// Load glTF
var model = new XEO.Model({
    src: "../../../sampleModels/RiggedFigure/glTF-Embedded/RiggedFigure.gltf"
});

var view = model.scene.camera.view;
view.eye = [
    0.0,
    0.0,
    -3.0
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
