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

var url = "../../" + modelInfo.category + "/" + modelInfo.path;
var scale = modelInfo.scale;
var camera = new Hilo3d.PerspectiveCamera({
    aspect: innerWidth / innerHeight,
    fov:75,
    far: 2000,
    near: 1,
    z:3
});

var stage = new Hilo3d.Stage({
    container: document.body,
    camera: camera,
    clearColor: new Hilo3d.Color(0,0,0),
    width: innerWidth,
    height: innerHeight,
    pixelRatio:1,
    rotationY:20,
    rotationX:10,
    onUpdate:function(){
        this.rotationY += 0.1;
    }
});

var directionLight = new Hilo3d.DirectionalLight({
    color:new Hilo3d.Color(0.8, 0.8, 0.8),
    direction:new Hilo3d.Vector3(1, -1, 0)
}).addTo(stage);

var ambientLight = new Hilo3d.AmbientLight({
    color:new Hilo3d.Color(1, 1, 1),
    amount: .5
}).addTo(stage);

var orbitControls = new OrbitControls(stage, {
    isLockMove:true
});

var ticker = new Hilo3d.Ticker(60);
ticker.addTick(stage);
ticker.addTick(Hilo3d.Tween);
ticker.addTick(Hilo3d.Animation);
ticker.start(true);

var loadQueue = new Hilo3d.LoadQueue([{
    type: 'CubeTexture',
    images: [
        '//gw.alicdn.com/tfs/TB1bZT_RFXXXXXmaXXXXXXXXXXX-128-128.jpg',
        '//gw.alicdn.com/tfs/TB1Ipz8RFXXXXbeaXXXXXXXXXXX-128-128.jpg',
        '//gw.alicdn.com/tfs/TB1HRUrRFXXXXaWXFXXXXXXXXXX-128-128.jpg',
        '//gw.alicdn.com/tfs/TB1FDYWRFXXXXX6aXXXXXXXXXXX-128-128.jpg',
        '//gw.alicdn.com/tfs/TB1wUAHRFXXXXcKXXXXXXXXXXXX-128-128.jpg',
        '//gw.alicdn.com/tfs/TB1mz3vRFXXXXXIXFXXXXXXXXXX-128-128.jpg'
    ]
}, {
    type: 'CubeTexture',
    right: '//gw.alicdn.com/tfs/TB1DqMoRFXXXXcdXFXXXXXXXXXX-512-512.jpg',
    left: '//gw.alicdn.com/tfs/TB1KlAuOVXXXXb9apXXXXXXXXXX-512-512.jpg',
    top: '//gw.alicdn.com/tfs/TB15asiRFXXXXXtXVXXXXXXXXXX-512-512.jpg',
    bottom: '//gw.alicdn.com/tfs/TB1KQ.oRFXXXXciXFXXXXXXXXXX-512-512.jpg',
    front: '//gw.alicdn.com/tfs/TB1w_7hRFXXXXaoXVXXXXXXXXXX-512-512.jpg',
    back: '//gw.alicdn.com/tfs/TB1pzZbRFXXXXcNXVXXXXXXXXXX-512-512.jpg'
},{
    src:'//gw.alicdn.com/tfs/TB1EvwBRFXXXXbNXpXXXXXXXXXX-256-256.png',
    type:'Texture'
},{
    src:url
}]).on('complete', function () {
    var result = loadQueue.getAllContent();
    var diffuseEnvMap = result[0];
    var specularEnvMap = result[1];
    var brfdTexture = result[2];
    var model = window.model = result[3];
    var node = model.node;

    switch(modelInfo.name){
        case 'VC':
            stage.camera = model.cameras[4];
            break;
        case 'GearboxAssy':
            scale = 0.1;
            node.setPosition(-159.20*scale, -17.02*scale, -3.21*scale);
            break;
    }

    model.materials.forEach(function (material) {
        material.brdfLUT = brfdTexture;
        material.diffuseEnvMap = diffuseEnvMap;
        material.specularEnvMap = specularEnvMap;
    });

    node.setScale(scale);
    stage.addChild(node);
}).start();