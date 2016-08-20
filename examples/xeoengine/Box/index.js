// Load glTF
var gearbox = new XEO.Import({
    src: "../../../sampleModels/Box/glTF-Embedded/Box.gltf"
});

var view = gearbox.scene.camera.view;
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
gearbox.scene.on("tick",
    function () {
        view.rotateEyeY(1.0);
        view.rotateEyeX(1.0);
    });
