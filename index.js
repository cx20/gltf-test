let engines = [{
    name: 'Three.js',
    path: 'examples/threejs/index.html?category={category}&model={model}&scale={scale}&type={type}'
}, {
    name: 'Babylon.js',
    path: 'examples/babylonjs/index.html?category={category}&model={model}&scale={scale}&type={type}'
}, {
    name: 'Cesium',
    path: 'examples/cesium/index.html?category={category}&model={model}&scale={scale}&type={type}'
}, {
    name: 'Grimore.js',
    path: 'examples/grimoiregl/index.html?category={category}&model={model}&scale={scale}&type={type}'
}, {
    name: 'xeogl',
    path: 'examples/xeogl/index.html?category={category}&model={model}&scale={scale}&type={type}'
}, {
    name: 'minimal-gltf-loader',
    path: 'examples/minimal-gltf-loader/index.html?category={category}&model={model}&scale={scale}&type={type}'
}, {
    name: 'Khronos glTF Loader',
    path: 'examples/khronos-gltf-loader/index.html?category={category}&model={model}&scale={scale}&type={type}'
}, {
    name: 'ClayGL',
    path: 'examples/claygl/index.html?category={category}&model={model}&scale={scale}&type={type}'
},{
    name: 'Hilo3d',
    path: 'examples/Hilo3d/index.html?category={category}&model={model}&scale={scale}&type={type}'
},{
    name: 'PlayCanvas',
    path: 'examples/playcanvas/index.html?category={category}&model={model}&scale={scale}&type={type}'
}, {
    name: 'X3DOM',
    path: 'examples/x3dom/index.html?category={category}&model={model}&scale={scale}&type={type}'
}, {
    name: 'CZPG.js',
    path: 'examples/czpg/index.html?category={category}&model={model}&scale={scale}&type={type}'
}, {
    name: 'GLBoost',
    path: 'examples/glboost/index.html?category={category}&model={model}&scale={scale}&type={type}'
}, {
    name: 'RedCube.js',
    path: 'examples/redcube/index.html?category={category}&model={model}&scale={scale}&type={type}'
}, {
    name: 'RedGL',
    path: 'examples/redgl2/index.html?category={category}&model={model}&scale={scale}&type={type}'
}, {
    name: 'Ashes',
    path: 'examples/ashes3d/index.html?category={category}&model={model}&scale={scale}&type={type}'
}, {
    name: 'Unity',
    path: 'examples/unity/index.html?category={category}&model={model}&scale={scale}&type={type}'
}];

function queryEngines(){
    let res = location.search.match(/engines=([\w\.,]+)/);
    if(res && res[1]){
        let engineDict = {};
        engines.forEach(function(engine){
            engineDict[engine.name] = engine;
        });

        engines = [];
        res[1].split(',').forEach(function(engineName){
            let engine = engineDict[engineName];
            if(engine){
                engines.push(engine);
            }
        });
    }
}

function getEngineByName(name) {
    let result;
    let numEngines = engines.length;
    let i;
    for (i = 0; i < numEngines; ++i) {
        if (engines[i].name == name ) {
            break;
        }
    }
    return engines[i];
}

function makeSampleModelLinks() {
    let modelList = ModelIndex.List;
    let numModels = modelList.length;
    let numEngines = engines.length;

    let tableHead = document.querySelector('#modelTable thead tr');
    let tableBody = document.querySelector('#modelTable tbody');

    let i, j;
    for (i = 0; i < numEngines; ++i) {
        let th = document.createElement('th');
        th.textContent = engines[i].name;
        tableHead.appendChild(th);
    }

    for (j = 0; j < numModels; ++j) {
        let modelName = modelList[j].name;
        let scale = modelList[j].scale;
        let tr = document.createElement('tr');
        let tdName = document.createElement('td');
        tdName.textContent = modelName;
        tr.appendChild(tdName);
        let tdPic = document.createElement('td');
        let img = document.createElement('img');
        img.setAttribute('src', 'sampleModels/' + ModelIndex.getScreenshot(modelName));
        tdPic.appendChild(img);
        tr.appendChild(tdPic);
        for (i = 0; i < numEngines; ++i) {
            let td = document.createElement('td');
            td.appendChild(createlink(engines[i].name, 'sampleModels', modelName, 'glTF', scale));
            td.appendChild(document.createElement('br'));
            td.appendChild(createlink(engines[i].name, 'sampleModels', modelName, 'glTF-Embedded', scale));
            td.appendChild(document.createElement('br'));
            td.appendChild(createlink(engines[i].name, 'sampleModels', modelName, 'glTF-Binary', scale));
            //td.appendChild(document.createElement('br'));
            //td.appendChild(createlink(engines[i].name, 'sampleModels', modelName, 'glTF-MaterialsCommon', scale));
            //td.appendChild(document.createElement('br'));
            //td.appendChild(createlink(engines[i].name, 'sampleModels', modelName, 'glTF-pbrSpecularGlossiness', scale));
            //td.appendChild(document.createElement('br'));
            //td.appendChild(createlink(engines[i].name, 'sampleModels', modelName, 'glTF-techniqueWebGL', scale));
            td.appendChild(document.createElement('br'));
            td.appendChild(createlink(engines[i].name, 'sampleModels', modelName, 'glTF-Draco', scale));
            tr.appendChild(td);
        }
        tableBody.appendChild(tr);
    }
}

function makeTutorialModelLinks() {
    let modelList = TutorialModelIndex.List;
    let numModels = modelList.length;
    let numEngines = engines.length;

    let tableHead = document.querySelector('#tutorialModelTable thead tr');
    let tableBody = document.querySelector('#tutorialModelTable tbody');

    let i, j;
    for (i = 0; i < numEngines; ++i) {
        let th = document.createElement('th');
        th.textContent = engines[i].name;
        tableHead.appendChild(th);
    }

    for (j = 0; j < numModels; ++j) {
        let modelName = modelList[j].name;
        let scale = modelList[j].scale;
        let tr = document.createElement('tr');
        let tdName = document.createElement('td');
        tdName.textContent = modelName;
        tr.appendChild(tdName);
        let tdPic = document.createElement('td');
        let img = document.createElement('img');
        img.setAttribute('src', 'tutorialModels/' + TutorialModelIndex.getScreenshot(modelName));
        img.setAttribute('width', 128);
        img.setAttribute('height', 128);
        tdPic.appendChild(img);
        tr.appendChild(tdPic);
        for (i = 0; i < numEngines; ++i) {
            let td = document.createElement('td');
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
    let modelList = TutorialPbrModelIndex.List;
    let numModels = modelList.length;
    let numEngines = engines.length;

    let tableHead = document.querySelector('#tutorialPbrModelTable thead tr');
    let tableBody = document.querySelector('#tutorialPbrModelTable tbody');

    let i, j;
    for (i = 0; i < numEngines; ++i) {
        let th = document.createElement('th');
        th.textContent = engines[i].name;
        tableHead.appendChild(th);
    }

    for (j = 0; j < numModels; ++j) {
        let modelName = modelList[j].name;
        let scale = modelList[j].scale;
        let tr = document.createElement('tr');
        let tdName = document.createElement('td');
        tdName.textContent = modelName;
        tr.appendChild(tdName);
        let tdPic = document.createElement('td');
        let img = document.createElement('img');
        img.setAttribute('src', 'tutorialModels/' + TutorialPbrModelIndex.getScreenshot(modelName));
        img.setAttribute('width', 128);
        img.setAttribute('height', 128);
        tdPic.appendChild(img);
        tr.appendChild(tdPic);
        for (i = 0; i < numEngines; ++i) {
            let td = document.createElement('td');
            td.appendChild(createlink(engines[i].name, 'tutorialModels', modelName, 'glTF', scale));
            td.appendChild(document.createElement('br'));
            td.appendChild(createlink(engines[i].name, 'tutorialModels', modelName, 'glTF-Binary', scale));
            td.appendChild(document.createElement('br'));
            td.appendChild(createlink(engines[i].name, 'tutorialModels', modelName, 'glTF-pbrSpecularGlossiness', scale));
            td.appendChild(document.createElement('br'));
            td.appendChild(createlink(engines[i].name, 'tutorialModels', modelName, 'glTF-Draco', scale));
            tr.appendChild(td);
        }
        tableBody.appendChild(tr);
    }
}

function makeTutorialFurtherPbrModelLinks() {
    let modelList = TutorialFurtherPbrModelIndex.List;
    let numModels = modelList.length;
    let numEngines = engines.length;

    let tableHead = document.querySelector('#tutorialFurtherPbrModelTable thead tr');
    let tableBody = document.querySelector('#tutorialFurtherPbrModelTable tbody');

    let i, j;
    for (i = 0; i < numEngines; ++i) {
        let th = document.createElement('th');
        th.textContent = engines[i].name;
        tableHead.appendChild(th);
    }

    for (j = 0; j < numModels; ++j) {
        let modelName = modelList[j].name;
        let scale = modelList[j].scale;
        let tr = document.createElement('tr');
        let tdName = document.createElement('td');
        tdName.textContent = modelName;
        tr.appendChild(tdName);
        let tdPic = document.createElement('td');
        let img = document.createElement('img');
        img.setAttribute('src', 'tutorialModels/' + TutorialFurtherPbrModelIndex.getScreenshot(modelName));
        img.setAttribute('width', 170);
        img.setAttribute('height', 128);
        tdPic.appendChild(img);
        tr.appendChild(tdPic);
        for (i = 0; i < numEngines; ++i) {
            let td = document.createElement('td');
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

function makeTutorialFeatureTestModelLinks() {
    let modelList = TutorialFeatureTestModelIndex.List;
    let numModels = modelList.length;
    let numEngines = engines.length;

    let tableHead = document.querySelector('#tutorialFeatureTestModelTable thead tr');
    let tableBody = document.querySelector('#tutorialFeatureTestModelTable tbody');

    let i, j;
    for (i = 0; i < numEngines; ++i) {
        let th = document.createElement('th');
        th.textContent = engines[i].name;
        tableHead.appendChild(th);
    }

    for (j = 0; j < numModels; ++j) {
        let modelName = modelList[j].name;
        let scale = modelList[j].scale;
        let tr = document.createElement('tr');
        let tdName = document.createElement('td');
        tdName.textContent = modelName;
        tr.appendChild(tdName);
        let tdPic = document.createElement('td');
        let img = document.createElement('img');
        img.setAttribute('src', 'tutorialModels/' + TutorialFeatureTestModelIndex.getScreenshot(modelName));
        img.setAttribute('width', 170);
        img.setAttribute('height', 128);
        tdPic.appendChild(img);
        tr.appendChild(tdPic);
        for (i = 0; i < numEngines; ++i) {
            let td = document.createElement('td');
            td.setAttribute('width', '100');
            if ( modelName == 'MorphPrimitivesTest' ) {
                td.appendChild(createlink(engines[i].name, 'tutorialModels', modelName, 'glTF', scale));
                td.appendChild(document.createElement('br'));
                td.appendChild(createlink(engines[i].name, 'tutorialModels', modelName, 'glTF-Binary', scale));
                td.appendChild(document.createElement('br'));
                td.appendChild(createlink(engines[i].name, 'tutorialModels', modelName, 'glTF-Draco', scale));
            } else {
                td.appendChild(createlink(engines[i].name, 'tutorialModels', modelName, 'glTF', scale));
                td.appendChild(document.createElement('br'));
                td.appendChild(createlink(engines[i].name, 'tutorialModels', modelName, 'glTF-Binary', scale));
                //td.appendChild(document.createElement('br'));
                //td.appendChild(createlink(engines[i].name, 'tutorialModels', modelName, 'glTF-pbrSpecularGlossiness', scale));
                td.appendChild(document.createElement('br'));
                td.appendChild(createlink(engines[i].name, 'tutorialModels', modelName, 'glTF-Embedded', scale));
            }
            tr.appendChild(td);
        }
        tableBody.appendChild(tr);
    }
}

function makeTutorialExtensionTestModelLinks() {
    let modelList = TutorialExtensionTestModelIndex.List;
    let numModels = modelList.length;
    let numEngines = engines.length;

    let tableHead = document.querySelector('#tutorialExtensionTestModelTable thead tr');
    let tableBody = document.querySelector('#tutorialExtensionTestModelTable tbody');

    let i, j;
    for (i = 0; i < numEngines; ++i) {
        let th = document.createElement('th');
        th.textContent = engines[i].name;
        tableHead.appendChild(th);
    }

    for (j = 0; j < numModels; ++j) {
        let modelName = modelList[j].name;
        let scale = modelList[j].scale;
        let tr = document.createElement('tr');
        let tdName = document.createElement('td');
        tdName.textContent = modelName;
        tr.appendChild(tdName);
        let tdPic = document.createElement('td');
        let img = document.createElement('img');
        img.setAttribute('src', 'tutorialModels/' + TutorialExtensionTestModelIndex.getScreenshot(modelName));
        img.setAttribute('width', 170);
        img.setAttribute('height', 128);
        tdPic.appendChild(img);
        tr.appendChild(tdPic);
        for (i = 0; i < numEngines; ++i) {
            let td = document.createElement('td');
            td.setAttribute('width', '100');
            if ( modelName == 'EnvironmentTest' ) {
                td.appendChild(createlink(engines[i].name, 'tutorialModels', modelName, 'glTF', scale));
                td.appendChild(document.createElement('br'));
                td.appendChild(createlink(engines[i].name, 'tutorialModels', modelName, 'glTF-IBL', scale));
            } else {
                td.appendChild(createlink(engines[i].name, 'tutorialModels', modelName, 'glTF', scale));
            }
            tr.appendChild(td);
        }
        tableBody.appendChild(tr);
    }
}

function replaceContentName(type) {
    let hashMap = {
        "glTF": "[glTF]",
        "glTF-Embedded": "[Embed]",
        "glTF-Embedded-buffer": "[Embed]",
        "glTF-Binary": "[Binary]",
        "glTF-pbrSpecularGlossiness": "[SpecGloss]",
        "glTF-Draco": "[Draco]",
        "glTF-IBL": "[glTF-IBL]"
    }
    return hashMap[type] ? hashMap[type] : type;
}

function createlink(engineName, categoryName, modelName, type, scale)
{
    let a = document.createElement('a');
    a.textContent = replaceContentName(type);
    a.title = engineName + " : " + type;
    //let uri = engines[i].path;
    let engine = getEngineByName(engineName);
    let uri = engine.path;
    uri = uri.replace('{category}', categoryName);
    uri = uri.replace('{model}', modelName);
    uri = uri.replace('{type}', type);
    uri = uri.replace('{scale}', scale);
    a.setAttribute('href', uri);
    a.setAttribute('target', '_blank');
    return a;
}

queryEngines();
makeTutorialModelLinks();
makeTutorialPbrModelLinks();
makeTutorialFurtherPbrModelLinks();
makeTutorialFeatureTestModelLinks();
makeTutorialExtensionTestModelLinks();
makeSampleModelLinks();
