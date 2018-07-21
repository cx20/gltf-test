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

var url = "../../" + modelInfo.category + "/" + modelInfo.path;
if(modelInfo.url) {
    url = modelInfo.url;
}

var ROTATE = true;
var gui = new dat.GUI();
var guiRotate = gui.add(window, 'ROTATE').name('Rotate');
var scale = modelInfo.scale;

var app = clay.application.create('#main', {
    init: function (app) {
        // Create camera
        this._camera = app.createCamera([0, 2, 3], [0, 0, 0]);

        // Create light
        app.createDirectionalLight([0.0, -1.0, 0.5]);
        app.createDirectionalLight([-1, -1, -1]);

        // Use orbit control
        this._control = new clay.plugin.OrbitControl({
            // The target or orbit control. Usually is a camera.
            target: this._camera,
            // The HTMLDomElement where we need to addEventListener.
            domElement: app.container,
        });
        this._control.autoRotateSpeed = 20;

        //var cube = app.createSphere();
        // Skybox need a cubemap texture.
        app.loadTextureCube({
            px: '../../textures/cube/skybox/px.jpg',
            nx: '../../textures/cube/skybox/nx.jpg',
            py: '../../textures/cube/skybox/py.jpg',
            ny: '../../textures/cube/skybox/ny.jpg',
            pz: '../../textures/cube/skybox/pz.jpg',
            nz: '../../textures/cube/skybox/nz.jpg'
        }).then(function (cubemap) {
            var skybox = new clay.plugin.Skybox({
                // Attach skybox to the scene.
                scene: app.scene,
                // Use the cubemap as environment
                environmentMap: cubemap
            });
        });
        
        app.createAmbientCubemapLight('../../textures/hdr/pisa.hdr', 0.7, 0.7);

        // Load specified model. return a load promise to make sure the look will be start after model loaded.
        return app.loadModel(url, {textureConvertToPOT: true}).then((function (result) {
            this._gltfModel = result.rootNode;
            this._gltfModel.scale.set(scale, scale, scale);
        }).bind(this));
    },
    loop: function (app) {
        this._control.autoRotate = ROTATE;
        this._control.update(app.frameTime);
    }
});

window.onresize = function () {
    app.resize()
};

