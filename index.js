var engines = [{
    name: 'Three.js',
    path: 'examples/threejs/index.html?category={category}&model={model}&scale={scale}&type={type}'
}, {
    name: 'Babylon.js',
    path: 'examples/babylonjs/index.html?category={category}&model={model}&scale={scale}&type={type}'
}, {
    name: 'Cesium',
    path: 'examples/cesium/index.html?category={category}&model={model}&scale={scale}&type={type}'
}, {
    name: 'xeogl',
    path: 'examples/xeogl/index.html?category={category}&model={model}&scale={scale}&type={type}'
}, {
    name: 'GLBoost',
    path: 'examples/glboost/index.html?category={category}&model={model}&scale={scale}&type={type}'
}, {
    name: 'Grimore.js',
    path: 'examples/grimoiregl/index.html?category={category}&model={model}&scale={scale}&type={type}'
}, {
    name: 'X3DOM',
    path: 'examples/x3dom/index.html?category={category}&model={model}&scale={scale}&type={type}'
}, {
    name: 'minimal-gltf-loader',
    path: 'examples/minimal-gltf-loader/index.html?category={category}&model={model}&scale={scale}&type={type}'
}, {
    name: 'Khronos glTF Loader',
    path: 'examples/khronos-gltf-loader/index.html?category={category}&model={model}&scale={scale}&type={type}'
}, {
    name: 'qtek glTF Loader',
    path: 'examples/qtek/index.html?category={category}&model={model}&scale={scale}&type={type}'
},{
    name: 'Hilo3d',
    path: 'examples/Hilo3d/index.html?category={category}&model={model}&scale={scale}&type={type}'
}];

function getEngineByName(name) {
    var result;
    var numEngines = engines.length;
    for (var i = 0; i < numEngines; ++i) {
        if (engines[i].name == name ) {
            break;
        }
    }
    return engines[i];
}

function makeSampleModelLinks() {
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
            td.appendChild(createlink(engines[i].name, 'sampleModels', modelName, 'glTF', scale));
            td.appendChild(document.createElement('br'));
            td.appendChild(createlink(engines[i].name, 'sampleModels', modelName, 'glTF-Embedded', scale));
            td.appendChild(document.createElement('br'));
            td.appendChild(createlink(engines[i].name, 'sampleModels', modelName, 'glTF-Binary', scale));
            td.appendChild(document.createElement('br'));
            td.appendChild(createlink(engines[i].name, 'sampleModels', modelName, 'glTF-MaterialsCommon', scale));
            td.appendChild(document.createElement('br'));
            td.appendChild(createlink(engines[i].name, 'sampleModels', modelName, 'glTF-pbrSpecularGlossiness', scale));
            td.appendChild(document.createElement('br'));
            td.appendChild(createlink(engines[i].name, 'sampleModels', modelName, 'glTF-techniqueWebGL', scale));
            tr.appendChild(td);
        }
        tableBody.appendChild(tr);
    }
}

function makeTutorialModelLinks() {
    var modelList = TutorialModelIndex.List;
    var numModels = modelList.length;
    var numEngines = engines.length;

    var tableHead = document.querySelector('#tutorialModelTable thead tr');
    var tableBody = document.querySelector('#tutorialModelTable tbody');

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
        img.setAttribute('src', 'tutorialModels/' + TutorialModelIndex.getScreenshot(modelName));
        img.setAttribute('width', 128);
        img.setAttribute('height', 128);
        tdPic.appendChild(img);
        tr.appendChild(tdPic);
        for (i = 0; i < numEngines; ++i) {
            var td = document.createElement('td');
            td.appendChild(createlink(engines[i].name, 'tutorialModels', modelName, 'glTF', scale));
            td.appendChild(document.createElement('br'));
            //td.appendChild(createlink(engines[i].name, 'tutorialModels', modelName, 'glTF-Embedded', scale));
            //td.appendChild(document.createElement('br'));
            //td.appendChild(createlink(engines[i].name, 'tutorialModels', modelName, 'glTF-Embedded-buffer', scale));
            td.appendChild(createlink(engines[i].name, 'tutorialModels', modelName, TutorialModelIndex.getEmbeddedFolderName(modelName), scale));
            tr.appendChild(td);
        }
        tableBody.appendChild(tr);
    }
}

function makeTutorialPbrModelLinks() {
    var modelList = TutorialPbrModelIndex.List;
    var numModels = modelList.length;
    var numEngines = engines.length;

    var tableHead = document.querySelector('#tutorialPbrModelTable thead tr');
    var tableBody = document.querySelector('#tutorialPbrModelTable tbody');

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
        img.setAttribute('src', 'tutorialModels/' + TutorialPbrModelIndex.getScreenshot(modelName));
        img.setAttribute('width', 128);
        img.setAttribute('height', 128);
        tdPic.appendChild(img);
        tr.appendChild(tdPic);
        for (i = 0; i < numEngines; ++i) {
            var td = document.createElement('td');
            td.appendChild(createlink(engines[i].name, 'tutorialModels', modelName, 'glTF', scale));
            td.appendChild(document.createElement('br'));
            td.appendChild(createlink(engines[i].name, 'tutorialModels', modelName, 'glTF-Binary', scale));
            td.appendChild(document.createElement('br'));
            td.appendChild(createlink(engines[i].name, 'tutorialModels', modelName, 'glTF-pbrSpecularGlossiness', scale));
            tr.appendChild(td);
        }
        tableBody.appendChild(tr);
    }
}

function makeTutorialFurtherPbrModelLinks() {
    var modelList = TutorialFurtherPbrModelIndex.List;
    var numModels = modelList.length;
    var numEngines = engines.length;

    var tableHead = document.querySelector('#tutorialFurtherPbrModelTable thead tr');
    var tableBody = document.querySelector('#tutorialFurtherPbrModelTable tbody');

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
        img.setAttribute('src', 'tutorialModels/' + TutorialFurtherPbrModelIndex.getScreenshot(modelName));
        img.setAttribute('width', 170);
        img.setAttribute('height', 128);
        tdPic.appendChild(img);
        tr.appendChild(tdPic);
        for (i = 0; i < numEngines; ++i) {
            var td = document.createElement('td');
            td.setAttribute('width', '100');
            td.appendChild(createlink(engines[i].name, 'tutorialModels', modelName, 'glTF', scale));
            //td.appendChild(document.createElement('br'));
            //td.appendChild(createlink(engines[i].name, 'tutorialModels', modelName, 'glTF-Binary', scale));
            //td.appendChild(document.createElement('br'));
            //td.appendChild(createlink(engines[i].name, 'tutorialModels', modelName, 'glTF-pbrSpecularGlossiness', scale));
            tr.appendChild(td);
        }
        tableBody.appendChild(tr);
    }
}

function makeTutorialAgiPbrModelLinks() {
    var modelList = TutorialAgiPbrModelIndex.List;
    var numModels = modelList.length;
    var numEngines = engines.length;

    var tableHead = document.querySelector('#tutorialAgiPbrModelTable thead tr');
    var tableBody = document.querySelector('#tutorialAgiPbrModelTable tbody');

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
        img.setAttribute('src', 'tutorialModels/' + TutorialAgiPbrModelIndex.getScreenshot(modelName));
        img.setAttribute('width', 170);
        img.setAttribute('height', 128);
        tdPic.appendChild(img);
        tr.appendChild(tdPic);
        for (i = 0; i < numEngines; ++i) {
            var td = document.createElement('td');
            td.setAttribute('width', '100');
            td.appendChild(createlink(engines[i].name, 'tutorialModels', modelName, 'glTF', scale));
            td.appendChild(document.createElement('br'));
            td.appendChild(createlink(engines[i].name, 'tutorialModels', modelName, 'glTF-Binary', scale));
            //td.appendChild(document.createElement('br'));
            //td.appendChild(createlink(engines[i].name, 'tutorialModels', modelName, 'glTF-pbrSpecularGlossiness', scale));
            td.appendChild(document.createElement('br'));
            td.appendChild(createlink(engines[i].name, 'tutorialModels', modelName, 'glTF-Embedded', scale));
            tr.appendChild(td);
        }
        tableBody.appendChild(tr);
    }
}

function createlink(engineName, categoryName, modelName, type, scale)
{
    var a = document.createElement('a');
    a.textContent = type;
    //var uri = engines[i].path;
    var engine = getEngineByName(engineName);
    var uri = engine.path;
    uri = uri.replace('{category}', categoryName);
    uri = uri.replace('{model}', modelName);
    uri = uri.replace('{type}', type);
    uri = uri.replace('{scale}', scale);
    a.setAttribute('href', uri);
    a.setAttribute('target', '_blank');
    return a;
}

makeTutorialModelLinks();
makeTutorialPbrModelLinks();
makeTutorialFurtherPbrModelLinks();
makeTutorialAgiPbrModelLinks();
makeSampleModelLinks();
