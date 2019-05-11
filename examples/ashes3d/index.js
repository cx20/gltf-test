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

let { Asset, EntityMgr, Camera, vec3, quat, Screen, OrbitControl, MeshRenderer, Filter, Shader, Material, QuadMesh } = Ashes;
let CDN = 'https://but0n.github.io/Ashes/'

let scale = modelInfo.scale;
let path = "../../" + modelInfo.category + "/" + modelInfo.path;
if(modelInfo.url) {
    path = modelInfo.url;
}
let base = path.substr(0, path.lastIndexOf("/") + 1);
let file = path.substr(path.lastIndexOf("/") + 1);

async function run() {
    let gltf = path;
    let yoffset = -0.1;

    let screen = new Screen('#screen');
    screen.bgColor = [0.2,0.2,0.2,1];
    let skybox = await Asset.loadCubemap(CDN + 'res/envmap/GoldenGateBridge2/');

    let scene = EntityMgr.create('root');

    // Create a camera entity
    let mainCamera = EntityMgr.create('camera');
    let cameraTrans = mainCamera.components.Transform;
    let cam = EntityMgr.addComponent(mainCamera, new Camera(screen.width / screen.height));

    // TODO: It should be fixed for interim correspondence
    if (file == "project_polly.glb") {
        vec3.set(cameraTrans.translate, 0, 0, 0.1); // set a little bit z offset to allow you orbit around
    } else {
        vec3.set(cameraTrans.translate, 0, 0, 2); // set a little bit z offset to allow you orbit around
    }

    scene.appendChild(mainCamera);
    EntityMgr.addComponent(mainCamera, new OrbitControl(screen, mainCamera));

    // Load gltf scene
    let gltfroot = await Asset.loadGLTF(gltf, screen, skybox);
    scene.appendChild(gltfroot);
    
    let root = gltfroot.components.Transform;
    root.translate[1] = yoffset || 0;
    vec3.scale(root.scale, root.scale, scale);
    
    document.querySelector('body').appendChild(scene);

    let cameras =  Ashes.EntityMgr.getComponents('Camera');
    if ( cameras.length > 0 ) {
        setInterval(function(){
            let cameraIndex = Math.floor(cameras.length * Math.random());
            screen.mainCamera = cameras[cameraIndex];
        }, 5000);
    }
}

run();

