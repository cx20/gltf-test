let engines = [{
    name: 'Three.js',
    path: 'examples/threejs/index.html?category={category}&model={model}&scale={scale}&type={type}'
}, {
    name: 'Babylon.js',
    path: 'examples/babylonjs/index.html?category={category}&model={model}&scale={scale}&type={type}'
}, {
    name: 'Filament',
    path: 'examples/filament/index.html?category={category}&model={model}&scale={scale}&type={type}'
},{
    name: 'PlayCanvas',
    path: 'examples/playcanvas/index.html?category={category}&model={model}&scale={scale}&type={type}'
}, {
    name: 'Cesium',
    path: 'examples/cesium/index.html?category={category}&model={model}&scale={scale}&type={type}'
}, {
    name: 'ArcGISJSAPI',
    path: 'examples/arcgisjsapi/index.html?category={category}&model={model}&scale={scale}&type={type}'
}, {
    name: 'AMAPJSAPI',
    path: 'examples/amapjsapi/index.html?category={category}&model={model}&scale={scale}&type={type}'
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
    name: 'Khronos glTF Viewer',
    path: 'examples/khronos-gltf-rv/index.html?category={category}&model={model}&scale={scale}&type={type}'
}, {
    name: 'ClayGL',
    path: 'examples/claygl/index.html?category={category}&model={model}&scale={scale}&type={type}'
},{
    name: 'Hilo3d',
    path: 'examples/Hilo3d/index.html?category={category}&model={model}&scale={scale}&type={type}'
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
}, {
    name: 'pex',
    path: 'examples/pex/index.html?category={category}&model={model}&scale={scale}&type={type}'
}, {
    name: 'Rhodonite',
    path: 'examples/rhodonite/index.html?category={category}&model={model}&scale={scale}&type={type}'
}];

function queryEngines(){
    let res = decodeURIComponent(location.search).match(/engines=([\w\.\s,]+)/);
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
        tdName.setAttribute('width', '100');
        tr.appendChild(tdName);
        let tdPic = document.createElement('td');
        tdPic.setAttribute('width', '100');
        let img = document.createElement('img');
        img.setAttribute('src', 'sampleModels/' + ModelIndex.getScreenshot(modelName));
        tdPic.appendChild(img);
        tr.appendChild(tdPic);
        for (i = 0; i < numEngines; ++i) {
            let td = document.createElement('td');
            td.setAttribute('width', '100');
            td.appendChild(createlink(engines[i].name, 'sampleModels', modelName, 'glTF', scale));
            if (modelName != 'Box With Spaces') {
                if (modelName != 'Fox') {
                    td.appendChild(document.createElement('br'));
                    td.appendChild(createlink(engines[i].name, 'sampleModels', modelName, 'glTF-Embedded', scale));
                }
                td.appendChild(document.createElement('br'));
                td.appendChild(createlink(engines[i].name, 'sampleModels', modelName, 'glTF-Binary', scale));
            }
            if (modelName != 'BoxInterleaved' 
             && modelName != 'BoxTextured' 
             && modelName != 'BoxTexturedNonPowerOfTwo' 
             && modelName != 'BoxVertexColors' 
             && modelName != 'Box With Spaces' 
             && modelName != 'Fox') {
                td.appendChild(document.createElement('br'));
                td.appendChild(createlink(engines[i].name, 'sampleModels', modelName, 'glTF-Draco', scale));
            }
            if (modelName == 'Duck') {
                td.appendChild(document.createElement('br'));
                td.appendChild(createlink(engines[i].name, 'tutorialModels', modelName, 'glTF-Quantized', scale));
            }
            if (modelName == 'BrainStem') {
                td.appendChild(document.createElement('br'));
                td.appendChild(createlink(engines[i].name, 'tutorialModels', modelName, 'glTF-Meshopt', scale));
            }
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
        tdName.setAttribute('width', '100');
        tdName.textContent = modelName;
        tr.appendChild(tdName);
        let tdPic = document.createElement('td');
        tdPic.setAttribute('width', '100');
        let img = document.createElement('img');
        img.setAttribute('src', 'tutorialModels/' + TutorialModelIndex.getScreenshot(modelName));
        img.setAttribute('width', 128);
        //img.setAttribute('height', 128);
        img.setAttribute('height', '100%');
        tdPic.appendChild(img);
        tr.appendChild(tdPic);
        for (i = 0; i < numEngines; ++i) {
            let td = document.createElement('td');
            td.setAttribute('width', '100');
            td.appendChild(createlink(engines[i].name, 'tutorialModels', modelName, 'glTF', scale));
            td.appendChild(document.createElement('br'));
            td.appendChild(createlink(engines[i].name, 'tutorialModels', modelName, TutorialModelIndex.getEmbeddedFolderName(modelName), scale));
            if (modelName == 'AnimatedMorphCube') {
                td.appendChild(document.createElement('br'));
                td.appendChild(createlink(engines[i].name, 'tutorialModels', modelName, 'glTF-Quantized', scale));
            }
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
        tdName.setAttribute('width', '100');
        tdName.textContent = modelName;
        tr.appendChild(tdName);
        let tdPic = document.createElement('td');
        tdPic.setAttribute('width', '100');
        let img = document.createElement('img');
        img.setAttribute('src', 'tutorialModels/' + TutorialPbrModelIndex.getScreenshot(modelName));
        img.setAttribute('width', 128);
        //img.setAttribute('height', 128);
        img.setAttribute('height', '100%');
        tdPic.appendChild(img);
        tr.appendChild(tdPic);
        for (i = 0; i < numEngines; ++i) {
            let td = document.createElement('td');
            td.setAttribute('width', '100');
            if (modelName == 'Sponza') {
                td.appendChild(createlink(engines[i].name, 'tutorialModels', modelName, 'glTF', scale));
            } else if (modelName == 'FlightHelmet') {
                td.appendChild(createlink(engines[i].name, 'tutorialModels', modelName, 'glTF', scale));
                td.appendChild(document.createElement('br'));
                td.appendChild(createlink(engines[i].name, 'tutorialModels', modelName, 'glTF-KTX-BasisU', scale));
            } else if (modelName == 'DamagedHelmet') {
                td.appendChild(createlink(engines[i].name, 'tutorialModels', modelName, 'glTF', scale));
                td.appendChild(document.createElement('br'));
                td.appendChild(createlink(engines[i].name, 'tutorialModels', modelName, 'glTF-Binary', scale));
                td.appendChild(document.createElement('br'));
                td.appendChild(createlink(engines[i].name, 'tutorialModels', modelName, 'glTF-Embedded', scale));
            } else {
                td.appendChild(createlink(engines[i].name, 'tutorialModels', modelName, 'glTF', scale));
                td.appendChild(document.createElement('br'));
                td.appendChild(createlink(engines[i].name, 'tutorialModels', modelName, 'glTF-Binary', scale));
                //td.appendChild(document.createElement('br'));
                //td.appendChild(createlink(engines[i].name, 'tutorialModels', modelName, 'glTF-pbrSpecularGlossiness', scale));
                td.appendChild(document.createElement('br'));
                td.appendChild(createlink(engines[i].name, 'tutorialModels', modelName, 'glTF-Draco', scale));
                if (modelName == 'Avocado' || modelName == 'Lantern') {
                    td.appendChild(document.createElement('br'));
                    td.appendChild(createlink(engines[i].name, 'tutorialModels', modelName, 'glTF-Quantized', scale));
                }
            }
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
        tdName.setAttribute('width', '100');
        tdName.textContent = modelName;
        tr.appendChild(tdName);
        let tdPic = document.createElement('td');
        tdPic.setAttribute('width', '100');
        let img = document.createElement('img');
        img.setAttribute('src', 'tutorialModels/' + TutorialFurtherPbrModelIndex.getScreenshot(modelName));
        img.setAttribute('width', 170);
        //img.setAttribute('height', 128);
        img.setAttribute('height', '100%');
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
        tdName.setAttribute('width', '100');
        tdName.textContent = modelName;
        tr.appendChild(tdName);
        let tdPic = document.createElement('td');
        tdPic.setAttribute('width', '100');
        let img = document.createElement('img');
        img.setAttribute('src', 'tutorialModels/' + TutorialFeatureTestModelIndex.getScreenshot(modelName));
        img.setAttribute('width', 170);
        //img.setAttribute('height', 128);
        img.setAttribute('height', '100%');
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
            } else if ( modelName == 'MetalRoughSpheresNoTextures' 
                     || modelName == 'MorphStressTest' 
                     || modelName == 'NegativeScaleTest' 
                     || modelName == 'SuzanneMorphSparse' 
                     || modelName == 'TextureEncodingTest' 
                     || modelName == 'TextureLinearInterpolationTest' 
                     || modelName == 'VertexColorAlphaClipTest' ) {
                td.appendChild(createlink(engines[i].name, 'tutorialModels', modelName, 'glTF', scale));
                td.appendChild(document.createElement('br'));
                td.appendChild(createlink(engines[i].name, 'tutorialModels', modelName, 'glTF-Binary', scale));
            } else if ( modelName == 'RecursiveSkeletons' 
                     || modelName == 'PrimitiveModeNormalsTest' ) {
                td.appendChild(createlink(engines[i].name, 'tutorialModels', modelName, 'glTF', scale));
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

function makeTutorialComparePbrModelLinks() {
    let modelList = TutorialComparePbrModelIndex.List;
    let numModels = modelList.length;
    let numEngines = engines.length;

    let tableHead = document.querySelector('#tutorialComparePbrModelTable thead tr');
    let tableBody = document.querySelector('#tutorialComparePbrModelTable tbody');

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
        tdName.setAttribute('width', '100');
        tdName.textContent = modelName;
        tr.appendChild(tdName);
        let tdPic = document.createElement('td');
        tdPic.setAttribute('width', '100');
        let img = document.createElement('img');
        img.setAttribute('src', 'tutorialModels/' + TutorialComparePbrModelIndex.getScreenshot(modelName));
        img.setAttribute('width', 170);
        //img.setAttribute('height', 128);
        img.setAttribute('height', '100%');
        tdPic.appendChild(img);
        tr.appendChild(tdPic);
        for (i = 0; i < numEngines; ++i) {
            let td = document.createElement('td');
            td.setAttribute('width', '100');
if ( modelName == 'CompareAlphaCoverage'
                     || modelName == 'CompareAmbientOcclusion'
                     || modelName == 'CompareAnisotropy'
                     || modelName == 'CompareBaseColor'
                     || modelName == 'CompareClearcoat'
                     || modelName == 'CompareDispersion'
                     || modelName == 'CompareEmissiveStrength'
                     || modelName == 'CompareIor'
                     || modelName == 'CompareIridescence'
                     || modelName == 'CompareMetallic'
                     || modelName == 'CompareNormal'
                     || modelName == 'CompareRoughness'
                     || modelName == 'CompareSheen'
                     || modelName == 'CompareSpecular'
                     || modelName == 'CompareTransmission'
                     || modelName == 'CompareVolume' ) {
                td.appendChild(createlink(engines[i].name, 'tutorialModels', modelName, 'glTF', scale));
                td.appendChild(document.createElement('br'));
                td.appendChild(createlink(engines[i].name, 'tutorialModels', modelName, 'glTF-Binary', scale));
            } else {
                td.appendChild(createlink(engines[i].name, 'tutorialModels', modelName, 'glTF', scale));
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
        tdName.setAttribute('width', '100');
        tdName.textContent = modelName;
        tr.appendChild(tdName);
        let tdPic = document.createElement('td');
        tdPic.setAttribute('width', '100');
        let img = document.createElement('img');
        img.setAttribute('src', 'tutorialModels/' + TutorialExtensionTestModelIndex.getScreenshot(modelName));
        img.setAttribute('width', 170);
        //img.setAttribute('height', 128);
        img.setAttribute('height', '100%');
        tdPic.appendChild(img);
        tr.appendChild(tdPic);
        for (i = 0; i < numEngines; ++i) {
            let td = document.createElement('td');
            td.setAttribute('width', '100');
            if ( modelName == 'EnvironmentTest' ) {
                td.appendChild(createlink(engines[i].name, 'tutorialModels', modelName, 'glTF', scale));
                td.appendChild(document.createElement('br'));
                td.appendChild(createlink(engines[i].name, 'tutorialModels', modelName, 'glTF-IBL', scale));
            } else if ( modelName == 'AttenuationTest'
                     || modelName == 'ClearCoatCarbonFibre'
                     || modelName == 'ClearCoatCarPaint'
                     || modelName == 'ClearCoatTest'
                     || modelName == 'ClearcoatWicker'
                     || modelName == 'CommercialRefrigerator'
                     || modelName == 'DiffuseTransmissionPlant'
                     || modelName == 'DiffuseTransmissionTeacup'
                     || modelName == 'DiffuseTransmissionTest'
                     || modelName == 'DirectionalLight'
                     || modelName == 'DispersionTest'
                     || modelName == 'DragonDispersion'
                     || modelName == 'EmissiveStrengthTest'
                     || modelName == 'GlamVelvetSofa'
                     || modelName == 'GlassBrokenWindow'
                     || modelName == 'GlassHurricaneCandleHolder'
                     || modelName == 'GlassVaseFlowers'
                     || modelName == 'IORTestGrid'
                     || modelName == 'IridescenceAbalone'
                     || modelName == 'IridescenceLamp'
                     || modelName == 'IridescenceSuzanne'
                     || modelName == 'IridescentDishWithOlives'
                     || modelName == 'Lights'
                     || modelName == 'LightsPunctualLamp'
                     || modelName == 'MaterialsVariantsChair'
                     || modelName == 'MaterialsVariantsShoe'
                     || modelName == 'MosquitoInAmber'
                     || modelName == 'PointLightIntensityTest'
                     || modelName == 'PotOfCoals'
                     || modelName == 'PotOfCoalsAnimationPointer'
                     || modelName == 'SheenChair'
                     || modelName == 'SheenTestGrid'
                     || modelName == 'SpecGlossVsMetalRough'
                     || modelName == 'SpecularSilkPouf'
                     || modelName == 'SpecularTest'
                     || modelName == 'TextureTransformMultiTest'
                     || modelName == 'ToyCar'
                     || modelName == 'TransmissionRoughnessTest'
                     || modelName == 'TransmissionSphere'
                     || modelName == 'TransmissionTest'
                     || modelName == 'TransmissionThinwallTestGrid'
                     || modelName == 'UnlitTest'
                     || modelName == 'XmpMetadataRoundedCube' ) {
                td.appendChild(createlink(engines[i].name, 'tutorialModels', modelName, 'glTF', scale));
                td.appendChild(document.createElement('br'));
                td.appendChild(createlink(engines[i].name, 'tutorialModels', modelName, 'glTF-Binary', scale));
            } else if ( modelName == 'SunglassesKhronos' ) {
                td.appendChild(createlink(engines[i].name, 'tutorialModels', modelName, 'glTF', scale));
                td.appendChild(document.createElement('br'));
                td.appendChild(createlink(engines[i].name, 'tutorialModels', modelName, 'glTF-Binary', scale));
                td.appendChild(document.createElement('br'));
                td.appendChild(createlink(engines[i].name, 'tutorialModels', modelName, 'glTF-Draco', scale));
            } else if ( modelName == 'StainedGlassLamp' ) {
                td.appendChild(createlink(engines[i].name, 'tutorialModels', modelName, 'glTF', scale));
                td.appendChild(document.createElement('br'));
                td.appendChild(createlink(engines[i].name, 'tutorialModels', modelName, 'glTF-JPG-PNG', scale));
                td.appendChild(document.createElement('br'));
                td.appendChild(createlink(engines[i].name, 'tutorialModels', modelName, 'glTF-KTX-BasisU', scale));
            } else if ( modelName == 'CarConcept' ) {
                td.appendChild(createlink(engines[i].name, 'tutorialModels', modelName, 'glTF', scale));
                td.appendChild(document.createElement('br'));
                td.appendChild(createlink(engines[i].name, 'tutorialModels', modelName, 'glTF-JPG', scale));
                td.appendChild(document.createElement('br'));
                td.appendChild(createlink(engines[i].name, 'tutorialModels', modelName, 'glTF-KTX-BasisU-Draco', scale));
                td.appendChild(document.createElement('br'));
                td.appendChild(createlink(engines[i].name, 'tutorialModels', modelName, 'glTF-WEBP', scale));
            } else if (modelName == 'DragonAttenuation') {
                td.appendChild(createlink(engines[i].name, 'tutorialModels', modelName, 'glTF', scale));
                td.appendChild(document.createElement('br'));
                td.appendChild(createlink(engines[i].name, 'tutorialModels', modelName, 'glTF-Meshopt', scale));
            } else if (modelName == 'CarbonFrameBike') {
                td.appendChild(createlink(engines[i].name, 'tutorialModels', modelName, 'glTF', scale));
                td.appendChild(document.createElement('br'));
                td.appendChild(createlink(engines[i].name, 'tutorialModels', modelName, 'glTF-Binary', scale));
                td.appendChild(document.createElement('br'));
                td.appendChild(createlink(engines[i].name, 'tutorialModels', modelName, 'glTF-Draco', scale));
                td.appendChild(document.createElement('br'));
                td.appendChild(createlink(engines[i].name, 'tutorialModels', modelName, 'glTF-Draco-KTX2', scale));
                td.appendChild(document.createElement('br'));
                td.appendChild(createlink(engines[i].name, 'tutorialModels', modelName, 'glTF-KTX2', scale));
                td.appendChild(document.createElement('br'));
                td.appendChild(createlink(engines[i].name, 'tutorialModels', modelName, 'glTF-Meshopt', scale));
                td.appendChild(document.createElement('br'));
                td.appendChild(createlink(engines[i].name, 'tutorialModels', modelName, 'glTF-Meshopt-KTX2', scale));
            } else {
                td.appendChild(createlink(engines[i].name, 'tutorialModels', modelName, 'glTF', scale));
            }
            tr.appendChild(td);
        }
        tableBody.appendChild(tr);
    }
}

function makeTutorialWipExtensionTestModelLinks() {
    let modelList = TutorialWipExtensionTestModelIndex.List;
    let numModels = modelList.length;
    let numEngines = engines.length;

    let tableHead = document.querySelector('#tutorialWipExtensionTestModelTable thead tr');
    let tableBody = document.querySelector('#tutorialWipExtensionTestModelTable tbody');

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
        tdName.setAttribute('width', '100');
        tdName.textContent = modelName;
        tr.appendChild(tdName);
        let tdPic = document.createElement('td');
        tdPic.setAttribute('width', '100');
        let img = document.createElement('img');
        img.setAttribute('src', 'tutorialModels/' + TutorialWipExtensionTestModelIndex.getScreenshot(modelName));
        img.setAttribute('width', 170);
        //img.setAttribute('height', 128);
        img.setAttribute('height', '100%');
        tdPic.appendChild(img);
        tr.appendChild(tdPic);
        for (i = 0; i < numEngines; ++i) {
            let td = document.createElement('td');
            td.setAttribute('width', '100');

            td.appendChild(createlink(engines[i].name, 'tutorialModels', modelName, 'glTF', scale));
            td.appendChild(document.createElement('br'));
            td.appendChild(createlink(engines[i].name, 'tutorialModels', modelName, 'glTF-Binary', scale));

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
        "glTF-Quantized": "[Quantized]",
        "glTF-IBL": "[glTF-IBL]",
        "glTF-BasisU": "[BasisU]",
        "glTF-JPG": "[JPG]",
        "glTF-JPG-PNG": "[JPG/PNG]",
        "glTF-KTX-BasisU": "[KTX/BasisU]",
        "glTF-KTX-BasisU-Draco": "[KTX/BasisU/Draco]",
        "glTF-Draco-KTX2": "[Draco-KTX2]",
        "glTF-KTX2": "[KTX2]",
        "glTF-WEBP": "[WEBP]",
        "glTF-Meshopt": "[Meshopt]",
        "glTF-Meshopt-KTX2": "[Meshopt-KTX2]",
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
makeTutorialComparePbrModelLinks();
makeTutorialExtensionTestModelLinks();
makeTutorialWipExtensionTestModelLinks();
makeSampleModelLinks();

$(document).ready(function () {
    function activateTabFromHash() {
        var hash = window.location.hash; // Get the hash part of the URL
        if (hash) {
            var tabSelector = 'a[href="' + hash + '"]'; // Find the corresponding tab selector
            var tabElement = $(tabSelector);
            if (tabElement.length) {
                tabElement.tab('show'); // Show the Bootstrap tab
            }
        }
    }

    // Activate the corresponding tab on page load if a hash exists
    activateTabFromHash();

    // Switch the tab when the hash changes
    $(window).on('hashchange', function () {
        activateTabFromHash();
    });

    // Update the URL hash when a tab is clicked
    $('.nav-tabs a').on('click', function (e) {
        var newHash = $(this).attr('href');
        history.pushState(null, null, newHash);
    });
});
