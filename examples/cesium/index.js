var modelInfo = ModelIndex.getCurrentModel();
if (!modelInfo) {
    document.getElementById('cesiumContainer').innerHTML = 'Please specify a model to load';
    throw new Error('Model not specified');
}

var terrain = Cesium.createDefaultTerrainProviderViewModels();

var viewer = new Cesium.Viewer('cesiumContainer', {
    infoBox : false,
    selectionIndicator : false,
    terrainProviderViewModels: terrain,
    selectedTerrainProviderViewModel: terrain[1]
});

function createModel(url, height) {
    viewer.entities.removeAll();

    var position = Cesium.Cartesian3.fromDegrees(139.691706, 35.689487, height);
    var heading = Cesium.Math.toRadians(135);
    var pitch = 0;
    var roll = 0;
    var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, heading, pitch, roll);

    var entity = viewer.entities.add({
        name : url,
        position : position,
        orientation : orientation,
        model : {
            uri : url,
            minimumPixelSize : 128,
            maximumScale : 20000
        }
    });
    //viewer.flyTo(entity, {
    //    offset: new Cesium.HeadingPitchRange(
    //        Cesium.Math.toRadians(-138.0), Cesium.Math.toRadians(-25.0), 100)
    //});
    //viewer.trackedEntity = entity;
    viewer.flyTo(entity).then(function() { viewer.trackedEntity = entity; });
}

function flyToHeadingPitchRoll() {
    viewer.camera.flyTo({
        destination : Cesium.Cartesian3.fromDegrees(139.691706 + 0.035, 35.689487 + 0.03, 12000.0),
        orientation : {
            heading : Cesium.Math.toRadians(-138.0),
            pitch : Cesium.Math.toRadians(-25.0),
            roll : 0.0
        }
    });
}

createModel('../../sampleModels/' + modelInfo.path, 10000);

//flyToHeadingPitchRoll();
