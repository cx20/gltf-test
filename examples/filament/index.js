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

//const env = 'syferfontein_18d_clear_2k';
const env = 'papermill';
const ibl_url = `../../textures/ktx/${env}/${env}_ibl.ktx`;
const sky_url = `../../textures/ktx/${env}/${env}_skybox.ktx`;
let mesh_url = "../../" + modelInfo.category + "/" + modelInfo.path;
if(modelInfo.url) {
    mesh_url = modelInfo.url;
}
let basePath = convertRelativeToAbsUrl(getPathNameFromUrl(mesh_url)) + "/";
let scale = modelInfo.scale;

function getPathNameFromUrl(path) {
    let result = path.replace(/\\/g, '/').replace(/\/[^/]*$/, '');
    if (result.match(/^[^/]*\.[^/\.]*$/)) {
        result = '';
    }
    return result;
}

function convertRelativeToAbsUrl(relativePath) {
    let anchor = document.createElement("a");
    anchor.href = relativePath;
    return anchor.href;
}

Filament.init([mesh_url, ibl_url, sky_url], () => {
    window.gltfio = Filament.gltfio;
    window.Fov = Filament.Camera$Fov;
    window.LightType = Filament.LightManager$Type;
    window.app = new App(document.getElementsByTagName('canvas')[0]);
});

class App {
    constructor(canvas) {
        this.canvas = canvas;
        const engine = this.engine = Filament.Engine.create(this.canvas);
        const scene = this.scene = engine.createScene();
        //this.trackball = new Trackball(canvas, {startSpin: 0.006});
        this.trackball = new Trackball(canvas, {startSpin: 0.000});
        const sunlight = Filament.EntityManager.get().create();
        Filament.LightManager.Builder(LightType.SUN)
            .color([0.98, 0.92, 0.89])
            .intensity(50000.0)
            .direction([0.6, -1.0, -0.8])
            .sunAngularRadius(1.9)
            .sunHaloSize(10.0)
            .sunHaloFalloff(80.0)
            .build(engine, sunlight);
        this.scene.addEntity(sunlight);

        const indirectLight = this.ibl = engine.createIblFromKtx(ibl_url);
        this.scene.setIndirectLight(indirectLight);
        indirectLight.setIntensity(50000);

        const skybox = engine.createSkyFromKtx(sky_url);
        this.scene.setSkybox(skybox);

        const loader = engine.createAssetLoader();
        if (mesh_url.split('.').pop() == 'glb') {
            this.asset= loader.createAssetFromBinary(mesh_url);
        } else {
            this.asset= loader.createAssetFromJson(mesh_url);
        }
        const asset = this.asset;
        const messages = document.getElementById('messages');

        // Crudely indicate progress by printing the URI of each resource as it is loaded.
        const onFetched = (uri) => messages.innerText += `Downloaded ${uri}\n`;
        const onDone = () => {
            // Destroy the asset loader.
            loader.delete();
            
            // Enable shadows on every renderable.
            const entities = asset.getEntities();
            const rm = engine.getRenderableManager();
            for (const entity of entities) {
                const instance = rm.getInstance(entity);
                rm.setCastShadows(instance, true);
                instance.delete();
            }

            const cameras = asset.getCameraEntities();
            if (cameras.length > 0) {
                const index = Math.floor(Math.random() * cameras.length);
                const c = engine.getCameraComponent(cameras[index]);
                const aspect = window.innerWidth / window.innerHeight;
                const fov = aspect < 1 ? Fov.HORIZONTAL : Fov.VERTICAL;
                c.setScaling([1, aspect, 1, 1]);
                this.view.setCamera(c);
            }

            messages.remove();
            this.animator = asset.getAnimator();
            this.animationStartTime = Date.now();
        };
        asset.loadResources(onDone, onFetched, basePath);

        this.swapChain = engine.createSwapChain();
        this.renderer = engine.createRenderer();
        this.camera = engine.createCamera(Filament.EntityManager.get().create());
        this.view = engine.createView();
        this.view.setCamera(this.camera);
        this.view.setScene(this.scene);
        this.resize();
        this.render = this.render.bind(this);
        this.resize = this.resize.bind(this);
        window.addEventListener('resize', this.resize);
        window.requestAnimationFrame(this.render);
    }

    render() {
        const tcm = this.engine.getTransformManager();
        const inst = tcm.getInstance(this.asset.getRoot());
        let m = mat4.create();
        let s = vec3.create();
        let t = vec3.create();
        vec3.set(s, scale, scale, scale);
        mat4.scale(m, m, s);
/*
        if (modelInfo.name == "GearboxAssy" ) {
            vec3.set(t, -159.20, -17.02, -3.21);
            mat4.translate(m, m, t);
        }
*/
        //mat4.multiply(m, m, this.trackball.getMatrix());
        tcm.setTransform(inst, m);
        inst.delete();

        // Add renderable entities to the scene as they become ready.
        let entity;
        const popRenderable = () => {
            entity = this.asset.popRenderable();
            return entity.getId() != 0;
        }
        while (popRenderable()) {
            this.scene.addEntity(entity);
        }

        if (this.animator) {
            const ms = Date.now() - this.animationStartTime;
            for (let i = 0; i < this.asset.getAnimator().getAnimationCount(); i++ ) {
                //this.animator.applyAnimation(i, (ms / 1000) % 1.0); // TODO: not animated correctly
                this.animator.applyAnimation(i, ms / 1000);
                this.animator.updateBoneMatrices();
            }
        }
        const eye = [0, 2, 3];
        const center = [0, 0, 0];
        const up = [0, 1, 0];
        const radians = Date.now() / 10000;
        vec3.rotateY(eye, eye, center, radians);
        vec3.transformMat4(eye, eye, this.trackball.getMatrix());
        this.camera.lookAt(eye, center, up);
        this.renderer.render(this.swapChain, this.view);
        window.requestAnimationFrame(this.render);
    }

    resize() {
        const dpr = window.devicePixelRatio;
        const width = this.canvas.width = window.innerWidth * dpr;
        const height = this.canvas.height = window.innerHeight * dpr;
        this.view.setViewport([0, 0, width, height]);
        const eye = [0, 2, 3];
        const center = [0, 0, 0];
        const up = [0, 1, 0];
        this.camera.lookAt(eye, center, up);
        const aspect = width / height;
        const fov = aspect < 1 ? Fov.HORIZONTAL : Fov.VERTICAL;
        this.camera.setProjectionFov(75, aspect, 0.01, 10000.0, fov);
    }
}
