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
    modelInfo = TutorialWipExtensionTestModelIndex.getCurrentModel();
}
if (!modelInfo) {
    document.getElementById('container').innerHTML = 'Please specify a model to load';
    throw new Error('Model not specified or not found in list.');
}

let { Asset, EntityMgr, Camera, vec3, quat, Screen, OrbitControl, Filter, Shader, Material, QuadMesh, MeshRenderer, Texture, aabb, octree, glsl, BoxMesh } = Ashes;
let {Vignetting} = Ashes;
let {Bloom} = Ashes;

let assetRoot = 'https://but0n.github.io/Ashes/'
Material.SHADER_PATH = assetRoot + Material.SHADER_PATH;

let scale = modelInfo.scale;
let path = "../../" + modelInfo.category + "/" + modelInfo.path;
if(modelInfo.url) {
    path = modelInfo.url;
}
let base = path.substr(0, path.lastIndexOf("/") + 1);
let file = path.substr(path.lastIndexOf("/") + 1);
let gltf = path;

async function main() {

    let screen = new Screen('#screen');
    screen.bgColor = [0.23,0.23,0.23, 1];

    Asset.cubemapOrder = (() => {
        let r = [];
        for(let i = 1; i < 7; i++)
            r.push('prefilter_fixup' + i + '.');
        return r;
    })();
    console.log(Asset.cubemapOrder);

    let skybox = await Asset.loadCubemap(assetRoot + 'res/envmap/HDR_textures/kiara_1_dawn/', 'hdr');
    let {diffuseSPH} = await (await fetch(assetRoot + 'res/envmap/HDR_textures/kiara_1_dawn/config.json')).json();
    diffuseSPH = new Float32Array(diffuseSPH.slice(0, 9 * 3));
    
    let scene = EntityMgr.create('root - (Click each bar which has yellow border to toggle visible)');

    // Camera and controls
    let mainCamera = scene.appendChild(EntityMgr.create('camera'));
    let cameraTrans = mainCamera.components.Transform;
    let cam = mainCamera.addComponent(new Camera(screen.width / screen.height));
 
    // TODO: It should be fixed for interim correspondence
    if (file == "project_polly.glb") {
        vec3.set(cameraTrans.translate, 0, 0, 0.1); // set a little bit z offset to allow you orbit around
    } else {
        vec3.set(cameraTrans.translate, 0, 0, 2); // set a little bit z offset to allow you orbit around
    }
    
    mainCamera.addComponent(new OrbitControl(screen, mainCamera));
 
    document.querySelector('body').appendChild(scene);

    let gltfroot = scene.appendChild(await Asset.loadGLTF(gltf, screen, skybox));
    let root = gltfroot.components.Transform;
    vec3.scale(root.scale, root.scale, scale || 200);

    let bg = new Background(screen, skybox);
    scene.appendChild(bg.entity);

    let mats = EntityMgr.getComponents('Material', scene);
    console.log(mats)
    for(let mat of mats) {
        Material.setUniform(mat, 'u_irrSH[0]', diffuseSPH);
    }
}

class Background {
    entity;
    mat;
    constructor(screen, tex) {
        this.entity = EntityMgr.create('background');
        vec3.scale(this.entity.components.Transform.scale, this.entity.components.Transform.scale, 1000);

        this.mat = new Material(new Shader(glsl.stylize2.vs, glsl.background.fs), 'environment', true);
        let sph = new Float32Array([
            2.88155, 2.49064, 2.27529, -0.028137, -0.107787, -0.167439, -0.309737, -0.402905, -0.592546, -1.01617, -1.05222, -1.18249, -0.0971646, -0.0669507, -0.0340848, 0.0206835, 0.0277634, 0.0390906, -0.0765265, -0.0434109, -0.00250546, 0.205739, 0.262281, 0.371874, 0.190714, 0.234196, 0.292022
        ]);
        Material.setUniform(this.mat, 'u_irrSH[0]', sph);
        if(tex) {
            Material.setTexture(this.mat, 'env', tex);
            this.mat.shader.macros['HAS_ENV_MAP'] = '';
        }

        let mesh = new BoxMesh();
        mesh.mode = WebGL2RenderingContext.TRIANGLES;
        let mr = new MeshRenderer(screen, mesh, this.mat);
        this.entity.addComponent(mr);
        this.entity.addComponent(this.mat);
    }
}

main();
