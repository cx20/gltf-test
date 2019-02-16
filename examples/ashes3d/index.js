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

var scale = modelInfo.scale;
//var path = "../../sampleModels/" + modelInfo.path;
var path = "../../" + modelInfo.category + "/" + modelInfo.path;
if(modelInfo.url) {
    path = modelInfo.url;
}
var base = path.substr(0, path.lastIndexOf("/") + 1);
var file = path.substr(path.lastIndexOf("/") + 1);

async function run() {
    Ashes.Asset.taskObserve = (finished, total) => {
        let p = finished/total;
    }
    let gltf = path;
    let yoffset = 0;

    let screen = new Ashes.Screen('#screen');
    let skybox = await Ashes.Asset.loadCubemap('https://but0n.github.io/Ashes/res/envmap/GoldenGateBridge2/');

    let scene = Ashes.EntityMgr.create('root');
    //let gltfroot = await Ashes.Asset.loadGLTF(gltf, screen, 'res/envmap/GoldenGateBridge2/');
    let gltfroot = await Ashes.Asset.loadGLTF(gltf, screen, skybox);
    scene.appendChild(gltfroot);
    //progressBar.parentElement.style.display = 'none';
    let root = gltfroot.components.Transform;
    if(yoffset)
        root.translate[1] = yoffset;
    if(scale)
        root.scale[0] = root.scale[1] = root.scale[2] = scale;


    let mainCamera = Ashes.EntityMgr.create('camera');
    let cameraTrans = mainCamera.components.Transform;
    let cam = Ashes.EntityMgr.addComponent(mainCamera, new Ashes.Camera(screen.width / screen.height));
    Ashes.vec3.set(cameraTrans.translate, 0, 0, 5);

    scene.appendChild(mainCamera);
    let control = new Ashes.OrbitControl(screen, mainCamera);

    // IBL test
    let testmat = await Ashes.Asset.LoadMaterial('test');
    // let brdfLUT = await Ashes.Asset.loadImage('https://raw.githubusercontent.com/KhronosGroup/glTF-WebGL-PBR/master/textures/brdfLUT.png');
    // let map = await Ashes.Asset.loadCubemap('https://but0n.github.io/Ashes/res/envmap/GoldenGateBridge2/');

    // Ashes.Material.setTexture(testmat, 'brdfLUT', new Ashes.Texture(brdfLUT, { minFilter: screen.gl.LINEAR }));
    // Ashes.Material.setTexture(testmat, 'baseColorTexture', Ashes.MeshRendererSystem);

    // let quad = Ashes.EntityMgr.create('test-quad');
    // let qmesh = new Ashes.QuadMesh();
    // let quadMR = new Ashes.MeshRenderer(screen, qmesh, testmat);
    // Ashes.EntityMgr.addComponent(quad, quadMR);
    // console.log(quadMR);
    // quad.components.Transform.translate[0] = 2;

    // scene.appendChild(quad);

    document.querySelector('body').appendChild(scene);
}

run();

