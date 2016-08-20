// Load glTF
var monster = new XEO.Model({
    src: "../../../sampleModels/Monster/glTF-Embedded/Monster.gltf"
});

var view = monster.scene.camera.view;
view.eye = [
    0.0,
    0.0,
    -50.0
];
view.look = [
    0.0,
    10.0,
    10.0
];
view.up = [
    0.0,
    1.0,
    0.0
];

new XEO.CameraControl();
monster.scene.on("tick",
    function () {
        view.rotateEyeY(1.0);
        //view.rotateEyeX(1.0);
    });
