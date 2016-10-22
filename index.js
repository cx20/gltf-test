var engines = [{
    name: 'Three.js',
    path: 'examples/threejs/index.html?model={model}&scale={scale}&type={type}'
}, {
    name: 'Babylon.js',
    path: 'examples/babylonjs/index.html?model={model}&scale={scale}&type={type}'
}, {
    name: 'Cesium',
    path: 'examples/cesium/index.html?model={model}&scale={scale}&type={type}'
}, {
    name: 'xeoEngine',
    path: 'examples/xeoengine/index.html?model={model}&scale={scale}&type={type}'
}, {
    name: 'GLBoost',
    path: 'examples/glboost/index.html?model={model}&scale={scale}&type={type}'
}];

var modelList = ModelIndex.List;
var numModels = modelList.length;
var numEngines = engines.length;

var tableHead = document.querySelector('#modelTable thead tr');
var tableBody = document.querySelector('#modelTable tbody');

var i, j;
for (i = 0; i < numEngines; ++i) {
    var th = document.createElement('th');
    th.textContent = engines[i].name;
    tableHead.appendChild(th);
}

for (j = 0; j < numModels; ++j) {
    var modelName = modelList[j].name;
    var scale = modelList[j].scale;
    var tr = document.createElement('tr');
    var tdName = document.createElement('td');
    tdName.textContent = modelName;
    tr.appendChild(tdName);
    var tdPic = document.createElement('td');
    var img = document.createElement('img');
    img.setAttribute('src', 'sampleModels/' + ModelIndex.getScreenshot(modelName));
    tdPic.appendChild(img);
    tr.appendChild(tdPic);
    for (i = 0; i < numEngines; ++i) {
        var td = document.createElement('td');
        td.appendChild(createlink('glTF'));
        td.appendChild(document.createElement('br'));
        td.appendChild(createlink('glTF-Embedded'));
        td.appendChild(document.createElement('br'));
        td.appendChild(createlink('glTF-Binary'));
        tr.appendChild(td);
    }
    tableBody.appendChild(tr);
}


function createlink(type)
{
var a = document.createElement('a');
        a.textContent = type;
        var uri = engines[i].path;
        uri = uri.replace('{model}', modelName);
        uri = uri.replace('{type}', type);
        uri = uri.replace('{scale}', scale);
        a.setAttribute('href', uri);
        a.setAttribute('target', '_blank');
return a;
}