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
var scale = modelInfo.scale;
var modelName = modelInfo.name;
var axis;

var ROTATE = true;
var AXIS = true;
var gui = new dat.GUI();
var guiRotate = gui.add(window, 'ROTATE').name('Rotate');
var guiAxis = gui.add(window, 'AXIS').name('Axis');

var camera = new Hilo3d.PerspectiveCamera({
    aspect: innerWidth / innerHeight,
    fov:75,
    far: 2000,
    near: 0.1,
    z:3
});

var stage = new Hilo3d.Stage({
    container: document.body,
    camera: camera,
    clearColor: new Hilo3d.Color(0,0,0),
    width: innerWidth,
    height: innerHeight,
    pixelRatio:1
});

var container = new Hilo3d.Node({
    onUpdate:function(){
        this.rotationY -= ROTATE ? 0.2 : 0;
    }
}).addTo(stage);

var directionLight = new Hilo3d.DirectionalLight({
    color:new Hilo3d.Color(0.8, 0.8, 0.8),
    direction:new Hilo3d.Vector3(1, -1, 0)
}).addTo(stage);

var ambientLight = new Hilo3d.AmbientLight({
    color:new Hilo3d.Color(1, 1, 1),
    amount: .5
}).addTo(stage);

var ticker = new Hilo3d.Ticker(60);
ticker.addTick(stage);
ticker.addTick(Hilo3d.Tween);
ticker.addTick(Hilo3d.Animation);
ticker.start(true);

var loadingElem = document.getElementById('loading');
var loadQueue = new Hilo3d.LoadQueue([{
    type: 'CubeTexture',
    images: [
        '../../textures/cube/skybox/diffuse/bakedDiffuse_01.jpg',
        '../../textures/cube/skybox/diffuse/bakedDiffuse_02.jpg',
        '../../textures/cube/skybox/diffuse/bakedDiffuse_03.jpg',
        '../../textures/cube/skybox/diffuse/bakedDiffuse_04.jpg',
        '../../textures/cube/skybox/diffuse/bakedDiffuse_05.jpg',
        '../../textures/cube/skybox/diffuse/bakedDiffuse_06.jpg'
    ]
}, {
    type: 'CubeTexture',
    right: '../../textures/cube/skybox/px.jpg',
    left: '../../textures/cube/skybox/nx.jpg',
    top: '../../textures/cube/skybox/py.jpg',
    bottom: '../../textures/cube/skybox/ny.jpg',
    front: '../../textures/cube/skybox/pz.jpg',
    back: '../../textures/cube/skybox/nz.jpg',
    magFilter: Hilo3d.constants.LINEAR,
    minFilter: Hilo3d.constants.LINEAR_MIPMAP_LINEAR
},{
    type:'Texture',
    src: '../../textures/brdfLUT.png',
    wrapS: Hilo3d.constants.CLAMP_TO_EDGE,
    wrapT: Hilo3d.constants.CLAMP_TO_EDGE
},{
    src:url
}]).on('load', function(e){
    var progress = loadQueue.getLoaded()/loadQueue.getTotal();
    if(progress >= 1){
        loadingElem.parentNode.removeChild(loadingElem);
    }
    else{
        loadingElem.innerHTML = 'loading ' + (progress*100).toFixed(2) + '% ...';
    }
}).on('complete', function () {
    var result = loadQueue.getAllContent();
    var diffuseEnvMap = result[0];
    var specularEnvMap = result[1];
    var brfdTexture = result[2];
    var model = window.model = result[3];
    var node = model.node;

    switch(modelName){
        case 'VC':
            stage.camera = model.cameras[4];
            break;
        case 'Cameras':
            // stage.camera = model.cameras[0];
            break;
        case 'GearboxAssy':
            scale = 0.1;
            node.setPosition(-159.20*scale, -17.02*scale, -3.21*scale);
            break;
        case 'AnimatedMorphSphere':
            diffuseEnvMap = null;
            break;
    }

    model.materials.forEach(function (material) {
        material.brdfLUT = brfdTexture;
        material.diffuseEnvMap = diffuseEnvMap;
        material.specularEnvMap = specularEnvMap;
    });

    node.setScale(scale);
    container.addChild(node);
    axis = new Hilo3d.AxisHelper();
    container.addChild(axis);

    var skybox = new Hilo3d.Mesh({
        geometry: new Hilo3d.BoxGeometry(),
        material: new Hilo3d.BasicMaterial({
            lightType: 'NONE',
            side: Hilo3d.constants.BACK,
            diffuse: specularEnvMap
        })
    }).addTo(container);
    skybox.setScale(50);

    var orbitControls = new OrbitControls(stage, {
        isLockMove:true,
        isLockZ:true,
    });
}).start();

guiAxis.onChange(function (value) {
    axis.visible = value;
});
