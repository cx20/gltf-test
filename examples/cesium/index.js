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
    document.getElementById('cesiumContainer').innerHTML = 'Please specify a model to load';
    throw new Error('Model not specified or not found in list.');
}

let terrain = Cesium.createDefaultTerrainProviderViewModels();

let viewer = new Cesium.Viewer('cesiumContainer', {
    selectionIndicator : false,
    terrainProviderViewModels: terrain,
    selectedTerrainProviderViewModel: terrain[1],
    shouldAnimate: true
});

function createModel(url, height) {
    viewer.entities.removeAll();

    let position = Cesium.Cartesian3.fromDegrees(139.691706, 35.689487, height);
    let heading = Cesium.Math.toRadians(135);
    let pitch = 0;
    let roll = 0;
/*
    let heading = Cesium.Math.toRadians(30);
    let pitch = Cesium.Math.toRadians(0);
    let roll = Cesium.Math.toRadians(0);
*/
    
    let hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
    let orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);

    let entity = viewer.entities.add({
        //name : modelInfo.filename, // TODO: The `name` property is not available in Cesium 1.52
        position : position,
        orientation : orientation,
        model : {
            uri : url,
            scale : 1000.0
        }
    });
    viewer.flyTo(entity, { duration: 4 }).then(function() {
        viewer.trackedEntity = entity;
    });
}

let url = "../../" + modelInfo.category + "/" + modelInfo.path;
if(modelInfo.url) {
    url = modelInfo.url;
}
//createModel('../../' + modelInfo.category + '/' + modelInfo.path, 10000);
createModel(url, 10000);
