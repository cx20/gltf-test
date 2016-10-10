var engines = [{
    name: 'Three.js + new loader',
    path: 'examples/threejs_new/{model}/index.html'
}, {
    name: 'Babylon.js',
    path: 'examples/babylonjs/{model}/index.html'
}, {
    name: 'Cesium',
    path: 'examples/cesium/index.html?model={model}'
}, {
    name: 'xeoEngine',
    path: 'examples/xeoengine/{model}/index.html'
}, {
    name: 'GLBoost',
    path: 'examples/glboost/{model}/index.html'
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
    var modelName = modelList[j];
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
        var a = document.createElement('a');
        a.textContent = 'Link';
        a.setAttribute('href', engines[i].path.replace('{model}', modelName));
        a.setAttribute('target', '_blank');
        td.appendChild(a);
        tr.appendChild(td);
    }
    tableBody.appendChild(tr);
}
