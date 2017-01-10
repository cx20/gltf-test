var modelInfo = ModelIndex.getCurrentModel();
if (!modelInfo) {
    modelInfo = TutorialModelIndex.getCurrentModel();
}
if (!modelInfo) {
    document.getElementById('container').innerHTML = 'Please specify a model to load';
    throw new Error('Model not specified or not found in list.');
}


document.onload = function () {
    var shape = $("#gltf");
    var scale = modelInfo.scale;
    shape.attr({scale: scale + " " + scale + " " + scale});
    shape.append("<ExternalShape id='exshape' url='../../" + modelInfo.category + "/" + modelInfo.path + "' />");
}
