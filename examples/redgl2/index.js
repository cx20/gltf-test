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

var canvas;
canvas = document.getElementById('canvas');
document.body.appendChild(canvas);
RedGL(canvas, function (v) {
    if (v) {
        var tWorld, tView, tScene, tController, tRenderer;
        this['world'] = tWorld = RedWorld();
        tScene = RedScene(this);
        tController = RedObitController(this);
        tController.pan = 30;
        tController.tilt = -30;
        tController.distance = 4;
        tRenderer = RedRenderer();
        tView = RedView('HelloRedGL', this, tScene, tController);
        tWorld.addView(tView);
        tScene['grid'] = RedGrid(this);
        //tScene['axis'] = RedAxis(this);
        tScene.skyBox = RedSkyBox(this, [
            '../../textures/cube/skybox/px.jpg',
            '../../textures/cube/skybox/nx.jpg',
            '../../textures/cube/skybox/py.jpg',
            '../../textures/cube/skybox/ny.jpg',
            '../../textures/cube/skybox/pz.jpg',
            '../../textures/cube/skybox/nz.jpg'
        ]);
        var tDLight = RedDirectionalLight(this)
        tScene.addLight(tDLight)
        tDLight.x = 1;
        tDLight.y = 1;
        tDLight.z = 1;
        tRenderer.start(this, function (time) {
          //console.log(time)
        });
        //tRenderer.setDebugButton();
        console.log(this);

        RedGLTFLoader(
            this, // redGL
            base, // assetRootPath
            file, // fileName
            function (v) { // callBack
                v['resultMesh'].scaleX = scale;
                v['resultMesh'].scaleY = scale;
                v['resultMesh'].scaleZ = scale;
                
                if (modelInfo.name == "GearboxAssy" ) {
                    v['resultMesh'].x = -159.20 * scale;
                    v['resultMesh'].y =  -17.02 * scale;
                    v['resultMesh'].z =   -3.21 * scale;
                }
                
                tScene.addChild(v['resultMesh']);
            },
            RedBitmapCubeTexture(this, // environmentTexture
                [
                    '../../textures/cube/skybox/px.jpg',
                    '../../textures/cube/skybox/nx.jpg',
                    '../../textures/cube/skybox/py.jpg',
                    '../../textures/cube/skybox/ny.jpg',
                    '../../textures/cube/skybox/pz.jpg',
                    '../../textures/cube/skybox/nz.jpg'
                ]
            )
        );
    }
});
