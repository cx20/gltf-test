// TODO: Since the let variable of the external file cannot be referenced from the ES6 module in Safari, I temporarily changed it back to var.
//let TutorialComparePbrModelIndex = {};
var TutorialComparePbrModelIndex = {};

TutorialComparePbrModelIndex.List = [
    {category:'tutorialModels', name:'CompareAlphaCoverage', scale:2.0},
    {category:'tutorialModels', name:'CompareAmbientOcclusion', scale:5.0},
    {category:'tutorialModels', name:'CompareAnisotropy', scale:2.0},
    {category:'tutorialModels', name:'CompareBaseColor', scale:2.0},
    {category:'tutorialModels', name:'CompareClearcoat', scale:2.0},
    {category:'tutorialModels', name:'CompareDispersion', scale:2.0},
    {category:'tutorialModels', name:'CompareEmissiveStrength', scale:2.0},
    {category:'tutorialModels', name:'CompareIor', scale:2.0},
    {category:'tutorialModels', name:'CompareIridescence', scale:2.0},
    {category:'tutorialModels', name:'CompareMetallic', scale:2.0},
    {category:'tutorialModels', name:'CompareNormal', scale:2.0},
    {category:'tutorialModels', name:'CompareRoughness', scale:2.0},
    {category:'tutorialModels', name:'CompareSheen', scale:2.0},
    {category:'tutorialModels', name:'CompareSpecular', scale:2.0},
    {category:'tutorialModels', name:'CompareTransmission', scale:2.0},
    {category:'tutorialModels', name:'CompareVolume', scale:2.0},
];

TutorialComparePbrModelIndex.HasJpgScreenshot = [ // List of only models that have *.jpg screenshots
    'CompareAlphaCoverage',
    'CompareAmbientOcclusion',
    'CompareAnisotropy',
    'CompareBaseColor',
    'CompareClearcoat',
    'CompareDispersion',
    'CompareEmissiveStrength',
    'CompareIor',
    'CompareIridescence',
    'CompareMetallic',
    'CompareNormal',
    'CompareRoughness',
    'CompareSheen',
    'CompareSpecular',
    'CompareTransmission',
    'CompareVolume',
];

TutorialComparePbrModelIndex.getScreenshot = function(name) {
    let extension = ((TutorialComparePbrModelIndex.HasJpgScreenshot.indexOf(name) < 0) ? 'png' : 'jpg');
    return name + '/screenshot/screenshot.' + extension;
};

//TutorialComparePbrModelIndex.getEmbeddedFolderName = function(name) {
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

TutorialComparePbrModelIndex.getModelInfoCollection = function() {
    let numModels = TutorialComparePbrModelIndex.List.length;
    let modelInfoCollection = {};
    for (let i = 0; i < numModels; ++i) {
        let category = TutorialComparePbrModelIndex.List[i].category;
        let name = TutorialComparePbrModelIndex.List[i].name;
        let scale = TutorialComparePbrModelIndex.List[i].scale;
        modelInfoCollection[name] = {
            category: category,
            name: name,
            scale: scale
        };
    }
    return modelInfoCollection;
}

TutorialComparePbrModelIndex.getCurrentModel = function() {
    let modelInfoCollection = TutorialComparePbrModelIndex.getModelInfoCollection();
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