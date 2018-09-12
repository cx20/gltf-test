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

let canvas = document.getElementById("world");
let width = window.innerWidth;
let height = window.innerHeight;
let url = "../../" + modelInfo.category + "/" + modelInfo.path;
if(modelInfo.url) {
    url = modelInfo.url;
}
let scale = modelInfo.scale;

console.log(GLBoost.VERSION);

let glBoostContext = new GLBoost.GLBoostMiddleContext(canvas);
let renderer = glBoostContext.createRenderer({
    clearColor: {
        red: 0.6,
        green: 0.6,
        blue: 0.6,
        alpha: 1
    }
});

renderer.resize(width, height);

let scene = glBoostContext.createScene();

let pointLight = glBoostContext.createPointLight(new GLBoost.Vector3(1.0, 1.0, 1.0));
pointLight.translate = new GLBoost.Vector3(10, 10, 10);
scene.addChild(pointLight);
let camera = glBoostContext.createPerspectiveCamera({
    eye: new GLBoost.Vector3(0.0, 2.0, 3.0),
    center: new GLBoost.Vector3(0.0, 0.0, 0.0),
    up: new GLBoost.Vector3(0.0, 1.0, 0.0)
}, {
    fovy: 75.0,
    aspect: width/height,
    zNear: 0.1,
    zFar: 3000.0
});
camera.cameraController = glBoostContext.createCameraController();
//camera.cameraController.zFarAdjustingFactorBasedOnAABB = 3;
scene.addChild(camera);

(async () => {
    let gtime = 0;
    const fileType = await GLBoost.formatDetector(url);
    let glTFLoader = null;
    let modelConverter = null;
    let promise = null;
    let loadOption = {
        loaderExtension: null,
        isNeededToMultiplyAlphaToColorOfPixelOutput: true,
        isTextureImageToLoadPreMultipliedAlphaAsDefault: false,
        isExistJointGizmo: false,
        isBlend: true,
        isDepthTest: true,
        defaultShaderClass: null,
        isMeshTransparentAsDefault: true
    };
    if (fileType === 'glTF2') {
        glTFLoader = GLBoost.GLTF2Loader.getInstance();
        modelConverter = GLBoost.ModelConverter.getInstance();
        promise = glTFLoader.loadGLTF(url, loadOption);
    } else if (fileType === 'glTF1') {
        glTFLoader = GLBoost.GLTFLoader.getInstance();
        promise = glTFLoader.loadGLTF(glBoostContext, url, loadOption);
    }

    promise.then(function(gltfObj) {
        let group = null;
        if (fileType === 'glTF2') {
            group = modelConverter.convertToGLBoostModel(glBoostContext, gltfObj);
        } else {
            group = gltfObj;
        }

        // TODO: Experiment to force enabling Occlusion map
        for (let meshKey in group.allMeshes) {
            let mesh = group.allMeshes[meshKey];
            let materials = mesh.getAppropriateMaterials();
            for (let materialKey in materials) {
                let material = materials[materialKey];
                material.occlusionRateForDirectionalLight = 1.0;
            }
        }
        
        //camera.cameraController.target = group;
        console.log(group);
        //console.log(group);
        if (modelInfo.name == "GearboxAssy" ) {
            scale = 0.2;
            group.scale = new GLBoost.Vector3(scale, scale, scale);
            group.translate = new GLBoost.Vector3(-159.20*scale, -17.02*scale, -3.21*scale);
        } else {
            group.scale = new GLBoost.Vector3(scale, scale, scale);
        }
        scene.addChild(group);

        let expression = glBoostContext.createExpressionAndRenderPasses(1);
        expression.renderPasses[0].scene = scene;
        expression.prepareToRender();
        
        const animationLength = group.getEndAnimationInputValue('time');
        let lastAnimatedTime = Date.now();
        renderer.doConvenientRenderLoop(expression, function() {
            let currentMillisecondDeltaFromStart = Date.now() - lastAnimatedTime;
            scene.setCurrentAnimationValue('time', currentMillisecondDeltaFromStart / 1000);
            if (currentMillisecondDeltaFromStart / 1000 > animationLength) {
                lastAnimatedTime = Date.now();
            }

            let rotateMatrix = GLBoost.Matrix33.rotateY(0.75);
            let rotatedVector = rotateMatrix.multiplyVector(camera.eye);
            camera.eye = rotatedVector;
        });
    });
})();
