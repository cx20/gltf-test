let modelInfo = ModelIndex.getCurrentModel();
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

let url = "../../" + modelInfo.category + "/" + modelInfo.path;
if(modelInfo.url) {
    url = modelInfo.url;
}
let scale = modelInfo.scale;
let modelName = modelInfo.name;
let axis;
let diffuseEnvMap;
let specularEnvMap;
let brfdTexture;
let model;
let skybox;

var ROTATE = false;
var AXIS = true;
var CUBEMAP = true;
var IBL = true;
var LIGHTS = false; // The default is to use IBL instead of lights

let gui = new dat.GUI();
let guiRotate = gui.add(window, 'ROTATE').name('Rotate');
let guiAxis = gui.add(window, 'AXIS').name('Axis');
let guiCubeMap = gui.add(window, 'CUBEMAP').name('CubeMap');
let guiIbl = gui.add(window, 'IBL').name('IBL');
let guiLights = gui.add(window, 'LIGHTS').name('Lights');

let camera = new Hilo3d.PerspectiveCamera({
    aspect: innerWidth / innerHeight,
    fov:75,
    far: 2000,
    near: 0.1,
    z:3
});

let stage = new Hilo3d.Stage({
    container: document.body,
    camera: camera,
    clearColor: new Hilo3d.Color(0,0,0),
    width: innerWidth,
    height: innerHeight,
    pixelRatio:1
});

let container = new Hilo3d.Node({
    onUpdate:function(){
        this.rotationY -= ROTATE ? 0.2 : 0;
    }
}).addTo(stage);

let directionLight = new Hilo3d.DirectionalLight({
    color:new Hilo3d.Color(0.8, 0.8, 0.8),
    direction:new Hilo3d.Vector3(1, -1, 0)
}).addTo(stage);
directionLight.enabled = LIGHTS; // The default is to use IBL instead of lights

let ticker = new Hilo3d.Ticker(60);
ticker.addTick(stage);
ticker.addTick(Hilo3d.Tween);
ticker.addTick(Hilo3d.Animation);
ticker.start(true);

let loadingElem = document.getElementById('loading');
let loadQueue = new Hilo3d.LoadQueue([{
    type: 'CubeTexture',
    images: [
/*
        '../../textures/cube/skybox/diffuse/bakedDiffuse_01.jpg',
        '../../textures/cube/skybox/diffuse/bakedDiffuse_02.jpg',
        '../../textures/cube/skybox/diffuse/bakedDiffuse_03.jpg',
        '../../textures/cube/skybox/diffuse/bakedDiffuse_04.jpg',
        '../../textures/cube/skybox/diffuse/bakedDiffuse_05.jpg',
        '../../textures/cube/skybox/diffuse/bakedDiffuse_06.jpg'
*/
        '../../textures/papermill/diffuse/diffuse_right_0.jpg',
        '../../textures/papermill/diffuse/diffuse_left_0.jpg',
        '../../textures/papermill/diffuse/diffuse_top_0.jpg',
        '../../textures/papermill/diffuse/diffuse_bottom_0.jpg',
        '../../textures/papermill/diffuse/diffuse_front_0.jpg',
        '../../textures/papermill/diffuse/diffuse_back_0.jpg',
    ]
}, {
    type: 'CubeTexture',
/*
    right: '../../textures/cube/skybox/px.jpg',
    left: '../../textures/cube/skybox/nx.jpg',
    top: '../../textures/cube/skybox/py.jpg',
    bottom: '../../textures/cube/skybox/ny.jpg',
    front: '../../textures/cube/skybox/pz.jpg',
    back: '../../textures/cube/skybox/nz.jpg',
*/
    right: '../../textures/papermill/specular/specular_right_0.jpg',
    left: '../../textures/papermill/specular/specular_left_0.jpg',
    top: '../../textures/papermill/specular/specular_top_0.jpg',
    bottom: '../../textures/papermill/specular/specular_bottom_0.jpg',
    front: '../../textures/papermill/specular/specular_front_0.jpg',
    back: '../../textures/papermill/specular/specular_back_0.jpg',
    magFilter: Hilo3d.constants.LINEAR,
    minFilter: Hilo3d.constants.LINEAR_MIPMAP_LINEAR
},{
    type:'Texture',
    src: '../../textures/brdfLUT.png',
    wrapS: Hilo3d.constants.CLAMP_TO_EDGE,
    wrapT: Hilo3d.constants.CLAMP_TO_EDGE
},{
    src:url,
    isMultiAnim: modelInfo.allAnimations !== true
}]).on('load', function(e){
    let progress = loadQueue.getLoaded()/loadQueue.getTotal();
    if(progress >= 1){
        loadingElem.parentNode.removeChild(loadingElem);
    }
    else{
        loadingElem.innerHTML = 'loading ' + (progress*100).toFixed(2) + '% ...';
    }
}).on('complete', function () {
    let result = loadQueue.getAllContent();
    diffuseEnvMap = result[0];
    specularEnvMap = result[1];
    brfdTexture = result[2];
    model = window.model = result[3];
    let node = model.node;

    switch(modelName){
        case 'VC':
            stage.camera = model.cameras[4];
            break;
        case 'Cameras':
            // stage.camera = model.cameras[0];
            break;
        case 'GearboxAssy':
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

    skybox = new Hilo3d.Mesh({
        geometry: new Hilo3d.BoxGeometry(),
        material: new Hilo3d.BasicMaterial({
            lightType: 'NONE',
            side: Hilo3d.constants.BACK,
            diffuse: specularEnvMap
        })
    }).addTo(container);
    skybox.setScale(50);

    let orbitControls = new OrbitControls(stage, {
        isLockMove:true,
        isLockZ:true,
    });
}).start();

guiAxis.onChange(function (value) {
    axis.visible = value;
});

guiCubeMap.onChange(function (value) {
    skybox.visible = value;
});

guiIbl.onChange(function (value) {
    if ( value ) {
        model.materials.forEach(function (material) {
            material.brdfLUT = brfdTexture;
            material.diffuseEnvMap = diffuseEnvMap;
            material.specularEnvMap = specularEnvMap;
            material.isDirty = true;
        });
    } else {
        model.materials.forEach(function (material) {
            material.brdfLUT = null;
            material.diffuseEnvMap = null;
            material.specularEnvMap = null;
            material.isDirty = true;
        });
    }
});

guiLights.onChange(function (value) {
    directionLight.enabled = value;
});
