var modelInfo = ModelIndex.getCurrentModel();
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
    eye: new GLBoost.Vector3(0.0, 3.0/scale, 5.0/scale),
    center: new GLBoost.Vector3(0.0, 1.0, 0.0),
    up: new GLBoost.Vector3(0.0, 1.0, 0.0)
}, {
    fovy: 75.0,
    aspect: width/height,
    zNear: 0.1,
    zFar: 3000.0
});
scene.addChild(camera);

var gtime = 0;
var glTFLoader = GLBoost.GLTFLoader.getInstance();
var promise = glTFLoader.loadGLTF(glBoostContext, "../../sampleModels/" + modelInfo.path, 1, null);
promise.then(function(group) {
    //console.log(group);
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