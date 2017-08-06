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

var canvas = document.getElementById("world");
var width = window.innerWidth;
var height = window.innerHeight;
var scale = modelInfo.scale;

var glBoostContext = new GLBoost.GLBoostMiddleContext(canvas);
var renderer = glBoostContext.createRenderer({
    clearColor: {
        red: 0.6,
        green: 0.6,
        blue: 0.6,
        alpha: 1
    }
});
renderer.resize(width, height);

var scene = glBoostContext.createScene();

var pointLight = glBoostContext.createPointLight(new GLBoost.Vector3(1.0, 1.0, 1.0));
pointLight.translate = new GLBoost.Vector3(10, 10, 10);
scene.addChild(pointLight);
var camera = glBoostContext.createPerspectiveCamera({
    eye: new GLBoost.Vector3(0.0, 3.0, 4.0),
    center: new GLBoost.Vector3(0.0, 1.0, 0.0),
    up: new GLBoost.Vector3(0.0, 1.0, 0.0)
}, {
    fovy: 75.0,
    aspect: width/height,
    zNear: 0.1,
    zFar: 3000.0
});
camera.cameraController = glBoostContext.createCameraController();
scene.addChild(camera);

var gtime = 0;
var glTFLoader = GLBoost.GLTFLoader.getInstance();
//var promise = glTFLoader.loadGLTF(glBoostContext, "../../sampleModels/" + modelInfo.path, null);
var promise = glTFLoader.loadGLTF(glBoostContext, "../../" + modelInfo.category + "/" + modelInfo.path, null);
promise.then(function(group) {
    //console.log(group);
    if (modelInfo.name == "GearboxAssy" ) {
        scale = 0.2;
        group.scale = new GLBoost.Vector3(scale, scale, scale);
        group.translate = new GLBoost.Vector3(-159.20*scale, -17.02*scale, -3.21*scale);
    } else {
        group.scale = new GLBoost.Vector3(scale, scale, scale);
    }
    scene.addChild(group);
    
    var expression = glBoostContext.createExpressionAndRenderPasses(1);
    expression.renderPasses[0].scene = scene;
    expression.prepareToRender();
    
    var render = function() {
        scene.setCurrentAnimationValue('time', gtime);
        renderer.clearCanvas();
        renderer.draw(expression);
        gtime += 0.03;
        if (gtime > 5) {
            gtime = 0.0;
        }
        var rotateMatrix = GLBoost.Matrix33.rotateY(-0.5);
        var rotatedVector = rotateMatrix.multiplyVector(camera.eye);
        camera.eye = rotatedVector;
        requestAnimationFrame(render);
    };
    render();
});