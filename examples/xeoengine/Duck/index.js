// Load glTF
var duck = new XEO.Model({
    src: "../../../sampleModels/Duck/glTF-Embedded/Duck.gltf"
});

var view = duck.scene.camera.view;
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
duck.scene.on("tick",
    function () {
        view.rotateEyeY(1.0);
        view.rotateEyeX(1.0);
    });
