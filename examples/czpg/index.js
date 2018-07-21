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

var sceneNode;
window.addEventListener('load', function() {
    const renderer = new CZPG.Renderer('glpaper', { antialias: true, preserveDrawingBuffer: true }).setSize('100%', '100%').clear();
    const context = renderer.context;
    const scene = new CZPG.Scene(renderer);
    const controler = scene.controler;

    let camera = new CZPG.PerspectiveCamera(75, context.canvas.width/context.canvas.height, 0.01, 2000);
    camera.transform.position = [0, 2, 3];
    let cameraControler = new CZPG.OrbitControls(camera, context.canvas, controler);
    cameraControler.enableDamping = true;
    cameraControler.autoRotate = true;

    const textures = CZPG.createTextures(context, {
        scalar: {
            mag: context.NEAREST,
            min: context.NEAREST,
            src: [
                200, 100, 100, 255,
            ],
        },
        env: {
            target: context.TEXTURE_CUBE_MAP,
            src: [
                '../../textures/cube/skybox/px.jpg',
                '../../textures/cube/skybox/nx.jpg',
                '../../textures/cube/skybox/py.jpg',
                '../../textures/cube/skybox/ny.jpg',
                '../../textures/cube/skybox/pz.jpg',
                '../../textures/cube/skybox/nz.jpg',
            ]
        },
        diffuse: {
            target: context.TEXTURE_CUBE_MAP,
            src: [
                '../../textures/cube/skybox/diffuse/bakedDiffuse_01.jpg',
                '../../textures/cube/skybox/diffuse/bakedDiffuse_02.jpg',
                '../../textures/cube/skybox/diffuse/bakedDiffuse_03.jpg',
                '../../textures/cube/skybox/diffuse/bakedDiffuse_04.jpg',
                '../../textures/cube/skybox/diffuse/bakedDiffuse_05.jpg',
                '../../textures/cube/skybox/diffuse/bakedDiffuse_06.jpg'
           ]
        },
        lut: {
            mag: context.NEAREST,
            min: context.NEAREST,
            src: '../../textures/brdfLUT.png',
        }
    });

    //let file = './resource/gltf/buster_drone/scene.gltf';
    let file = url;
    //let gltfShader = new CZPG.GLTFShader(context, camera).setUniformObj({
    let gltfShader = new CZPG.GLTFShader(context).setUniformObj({
        u_lightDirection: [0, 1, 1],
        u_lightColor: [1, 1, 1],
        u_diffuseEnvMap: textures.diffuse,
        u_specularEnvMap: textures.env,
        u_brdfLUT: textures.lut,
    });
    let gltfLoader = new CZPG.GLTFLoader();
    let animator;
    gltfLoader.load(file)
        .then( res => {
            const {rootNode, textures, animations, cameras} = res;
            sceneNode = rootNode;

            if (modelInfo.name == "GearboxAssy" ) {
                scale = 0.2;
                sceneNode.scale = [scale, scale, scale];
                sceneNode.transform.position = [-159.20*scale, -17.02*scale, -3.21*scale];
            } else {
                sceneNode.scale = [scale, scale, scale];
            }

            const gltfTextures = CZPG.createTextures(context, textures);
            sceneNode.traverse((node)=> {
                if(node.model && node.model.textures !== undefined) {
                    Object.keys(node.model.textures).forEach(uniformName => node.model.textures[uniformName] = gltfTextures[node.model.textures[uniformName]])
                    node.model.setUniformObj(node.model.textures);
                }
            });

            if(cameras.length > 0) {
                allCamera = [camera, ...cameras];
                allCameraName = ['Default', ...cameras.map(c => c.name)];
                datgui.add(controlObj, 'camera', allCameraName)
                    .onFinishChange(value => {
                        let target = allCamera.filter(c => c.name === value);
                        scene.setCamera(allCamera[allCameraName.indexOf(value)]);
                        if(scene.currentCamera === camera) {
                            cameraControler.enable = true;
                        } else {
                            cameraControler.enable = false;
                        }
                    });
            }

            animator = new CZPG.Animator(animations);
            let animates = animator.animations;
            if(animates.length > 0) {
                let animateMap = animates.map(ani => ani.name);
                animateMap = ['None'].concat(animateMap);
                datgui.add(controlObj, 'animate', animateMap)
                    .onFinishChange(value => {
                        animator.resetAll().playAnimation(value);
                    });
            }

            scene.add([
                {shader: gltfShader, model: sceneNode},
            ]);
        });

    let gridShader = new CZPG.GridAxisShader(context);
    let gridModal = CZPG.GridAxis.createModel()

    let skymapShader = new CZPG.DynamicSkyboxShader(context, textures.env);
    let skyCubeModal = new CZPG.Model(CZPG.Cube.createMesh('sky', 200, 200, 200, 0, 0, 0));

    scene.add([
        // {shader: gridShader, model: gridModal},
        {shader: skymapShader, model: skyCubeModal},
    ]).setCamera(camera);

    let resized = false;
    let loop = new CZPG.Render(function(timespan) {
        resized = renderer.clear(0.05,0.05,0.05,1).fixCanvasToDisplay(window.devicePixelRatio);
        if(resized) camera.updateProjMatrix( context.canvas.width / context.canvas.height );
        cameraControler.update();
        if(animator) animator.update(timespan);
        scene.render();
    }).start();

    let controlObj = {
        showgrid: false,
        autoRotate: true,
        animate: 'None',
        camera: 'Default'
    }
    let datgui = new dat.GUI();
    datgui.add(controlObj, 'showgrid')
        .onFinishChange(value => {
            if(value)
                scene.add({shader: gridShader, model: gridModal});
            else
                scene.remove({shader: gridShader, model: gridModal});
        });
    datgui.add(controlObj, 'autoRotate')
        .onFinishChange(value => {
                cameraControler.autoRotate = value;
        });
});
