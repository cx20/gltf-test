// TODO: Since the let variable of the external file cannot be referenced from the ES6 module in Safari, I temporarily changed it back to var.
//let TutorialExtensionTestModelIndex = {};
var TutorialExtensionTestModelIndex = {};

TutorialExtensionTestModelIndex.List = [
    {category:'tutorialModels', name:'ABeautifulGame', scale:8.0},
    {category:'tutorialModels', name:'AudioSimple', scale:1.0},
    {category:'tutorialModels', name:'AttenuationTest', scale:0.2},
    {category:'tutorialModels', name:'CarbonFrameBike', scale:1.0},
    {category:'tutorialModels', name:'ClearCoatCarbonFibre', scale:2.0},
    {category:'tutorialModels', name:'ClearCoatCarPaint', scale:2.0},
    {category:'tutorialModels', name:'ClearcoatRing', scale:5.0},
    {category:'tutorialModels', name:'ClearcoatSphere', scale:1.0},
    {category:'tutorialModels', name:'ClearCoatTest', scale:0.3},
    {category:'tutorialModels', name:'ClearcoatWicker', scale:2.0},
    {category:'tutorialModels', name:'DirectionalLight', scale:10.0},
    {category:'tutorialModels', name:'DragonAttenuation', scale:1.0},
    {category:'tutorialModels', name:'EmissiveStrengthTest', scale:0.3},
    {category:'tutorialModels', name:'EnvironmentTest', scale:0.3},
    {category:'tutorialModels', name:'GlamVelvetSofa', scale:2.0},
    {category:'tutorialModels', name:'IridescenceDielectricSpheres', scale:0.1},
    {category:'tutorialModels', name:'IridescenceLamp', scale:4.0},
    {category:'tutorialModels', name:'IridescenceMetallicSpheres', scale:0.1},
    {category:'tutorialModels', name:'IridescenceSuzanne', scale:1.0},
    {category:'tutorialModels', name:'IridescentDishWithOlives', scale:8.0},
    {category:'tutorialModels', name:'Lights', scale:1.0},
    {category:'tutorialModels', name:'LightsPunctualLamp', scale:1.0},
    {category:'tutorialModels', name:'MaterialsVariantsChair', scale:0.7},
    {category:'tutorialModels', name:'MaterialsVariantsShoe', scale:10.0},
    {category:'tutorialModels', name:'MosquitoInAmber', scale:30.0},
    {category:'tutorialModels', name:'SheenChair', scale:3.0},
    {category:'tutorialModels', name:'SheenCloth', scale:50.0},
    {category:'tutorialModels', name:'SheenDamask', scale:0.1},
    {category:'tutorialModels', name:'SheenHighHeel', scale:0.1},
    {category:'tutorialModels', name:'SpecGlossVsMetalRough', scale:10.0},
    {category:'tutorialModels', name:'SpecularTest', scale:5.0},
    {category:'tutorialModels', name:'StainedGlassLamp', scale:3.0},
    {category:'tutorialModels', name:'TeapotsGalore', scale:0.1},
    {category:'tutorialModels', name:'TextureTransformTest', scale:1.0},
    {category:'tutorialModels', name:'TextureTransformMultiTest', scale:1.0},
    {category:'tutorialModels', name:'ToyCar', scale:100.0},
    {category:'tutorialModels', name:'ToyCarSpecular', scale:10.0},
    {category:'tutorialModels', name:'TransmissionRoughnessTest', scale:3.0},
    {category:'tutorialModels', name:'TransmissionSphere', scale:2.0},
    {category:'tutorialModels', name:'TransmissionSuzanne', scale:1.0},
    {category:'tutorialModels', name:'TransmissionTest', scale:3.0},
    {category:'tutorialModels', name:'UnlitTest', scale:1.0}
];

TutorialExtensionTestModelIndex.HasJpgScreenshot = [ // List of only models that have *.jpg screenshots
    'ABeautifulGame',
    'AttenuationTest',
    'ClearCoatCarbonFibre',
    'ClearCoatCarPaint',
    'ClearcoatRing',
    'ClearcoatSphere',
    'ClearCoatTest',
    'ClearcoatWicker',
    'DirectionalLight',
    'DragonAttenuation',
    'GlamVelvetSofa',
    'EmissiveStrengthTest',
    'IridescenceDielectricSpheres',
    'IridescenceLamp',
    'IridescenceMetallicSpheres',
    'IridescenceSuzanne',
    'IridescentDishWithOlives',
    'MaterialsVariantsChair',
    'MaterialsVariantsShoe',
    'MosquitoInAmber',
    'SheenChair',
    'SheenCloth',
    'SheenDamask',
    'SheenHighHeel',
    'SpecGlossVsMetalRough',
    'SpecularTest',
    'StainedGlassLamp',
    'TeapotsGalore',
    'TextureTransformTest',
    'TextureTransformMultiTest',
    'ToyCar',
    'ToyCarSpecular',
    'TransmissionRoughnessTest',
    'TransmissionSphere',
    'TransmissionSuzanne',
    'TransmissionTest'
];

TutorialExtensionTestModelIndex.getScreenshot = function(name) {
    let extension = ((TutorialExtensionTestModelIndex.HasJpgScreenshot.indexOf(name) < 0) ? 'png' : 'jpg');
    return name + '/screenshot/screenshot.' + extension;
};

//TutorialExtensionTestModelIndex.getEmbeddedFolderName = function(name) {
//    let suffixHash = {
//        'SimpleMaterial': '-buffer',
//        'AdvancedMaterial': '-buffer',
//        'SimpleOpacity': '-buffer',
//        'SimpleTexture': '-buffer',
//        'SimpleSkin': '-buffers'
//    };
//    let suffix = suffixHash[name] === undefined ? '' : suffixHash[name];
//    return 'glTF-Embedded' + suffix;
//};

TutorialExtensionTestModelIndex.getModelInfoCollection = function() {
    let numModels = TutorialExtensionTestModelIndex.List.length;
    let modelInfoCollection = {};
    for (let i = 0; i < numModels; ++i) {
        let category = TutorialExtensionTestModelIndex.List[i].category;
        let name = TutorialExtensionTestModelIndex.List[i].name;
        let scale = TutorialExtensionTestModelIndex.List[i].scale;
        modelInfoCollection[name] = {
            category: category,
            name: name,
            scale: scale
        };
    }
    return modelInfoCollection;
}

TutorialExtensionTestModelIndex.getCurrentModel = function() {
    let modelInfoCollection = TutorialExtensionTestModelIndex.getModelInfoCollection();
    let queryString = window.location.search.substring(1);
    let parts = queryString.replace(/\+/g, '%20').split('&');
    let options = {};
    for (let i = 0, len = parts.length; i < len; ++i) {
        let subparts = parts[i].split('=');

        let name = decodeURIComponent(subparts[0]);
        let value = subparts[1];
        if (value) {
            options[name] = decodeURIComponent(value);
        }
    }
    if (options.type === undefined) {
        options.type = 'glTF';
    }
    if (options.model && modelInfoCollection.hasOwnProperty(options.model)) {
        document.title += ' + ' + options.model + '.gltf';
        if (options.scale !== undefined) {
            modelInfoCollection[options.model].scale = options.scale;
        }
        if (options.variant !== undefined) {
            modelInfoCollection[options.model].variant = options.variant;
        }
        if (options.type == 'glTF-Binary' 
         || options.type == 'glTF-Draco'        && options.model == 'MorphPrimitivesTest'
         || options.type == 'glTF-Draco'        && options.model == 'CarbonFrameBike'
         || options.type == 'glTF-Draco-KTX2'   && options.model == 'CarbonFrameBike'
         || options.type == 'glTF-KTX2'         && options.model == 'CarbonFrameBike'
         || options.type == 'glTF-Meshopt'      && options.model == 'CarbonFrameBike'
         || options.type == 'glTF-Meshopt-KTX2' && options.model == 'CarbonFrameBike') {
            modelInfoCollection[options.model].path = modelInfoCollection[options.model].name + '/' + options.type + '/' + modelInfoCollection[options.model].name + '.glb';
        } else {
            modelInfoCollection[options.model].path = modelInfoCollection[options.model].name + '/' + options.type + '/' + modelInfoCollection[options.model].name + '.gltf';
        }
        return modelInfoCollection[options.model];
    }
    return undefined;
};