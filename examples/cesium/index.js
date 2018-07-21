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
    document.getElementById('cesiumContainer').innerHTML = 'Please specify a model to load';
    throw new Error('Model not specified or not found in list.');
}

var terrain = Cesium.createDefaultTerrainProviderViewModels();

var viewer = new Cesium.Viewer('cesiumContainer', {
    selectionIndicator : false,
    terrainProviderViewModels: terrain,
    selectedTerrainProviderViewModel: terrain[1],
    shouldAnimate: true
});

function createModel(url, height) {
    viewer.entities.removeAll();

    var position = Cesium.Cartesian3.fromDegrees(139.691706, 35.689487, height);
    var heading = Cesium.Math.toRadians(135);
    var pitch = 0;
    var roll = 0;
/*
    var heading = Cesium.Math.toRadians(30);
    var pitch = Cesium.Math.toRadians(0);
    var roll = Cesium.Math.toRadians(0);
*/
    
    var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
    var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);

    var entity = viewer.entities.add({
        name : modelInfo.filename,
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

var url = "../../" + modelInfo.category + "/" + modelInfo.path;
if(modelInfo.url) {
    url = modelInfo.url;
}
//createModel('../../' + modelInfo.category + '/' + modelInfo.path, 10000);
createModel(url, 10000);
