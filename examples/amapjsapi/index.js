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

let url = "../../" + modelInfo.category + "/" + modelInfo.path;
if(modelInfo.url) {
    url = modelInfo.url;
}
let scale = modelInfo.scale;

function mapInit() {
    let map = new AMap.Map("container", {
        viewMode: '3D',
        pitch: 62,
        rotation: 0,
        zoom: 16,
//        center: [121.499809, 31.236666],
        center: [121.495000, 31.233366],
        mapStyle: 'amap://styles/macaron',
        showIndoorMap: false
    });

    let object3Dlayer = new AMap.Object3DLayer();
    map.add(object3Dlayer);

    map.plugin(["AMap.GltfLoader"], function () {
        let param = {
            position: new AMap.LngLat(121.495000, 31.233366),
            scale: 2000 * scale,
            height: -100,
            scene: 0,
        };

        let gltfObj = new AMap.GltfLoader();

        gltfObj.load(url, function (gltf) {
            gltf.setOption(param);
            gltf.rotateX(90);
            gltf.rotateZ(0);
            object3Dlayer.add(gltf);
        });
    });
}

mapInit();
