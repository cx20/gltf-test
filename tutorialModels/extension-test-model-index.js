let TutorialExtensionTestModelIndex = {};

TutorialExtensionTestModelIndex.List = [
    {category:'tutorialModels', name:'EnvironmentTest', scale:0.3},
    {category:'tutorialModels', name:'Lights', scale:1.0},
    {category:'tutorialModels', name:'SpecGlossVsMetalRough', scale:10.0},
    {category:'tutorialModels', name:'TechniquesWebGLTest', scale:1.0},
    {category:'tutorialModels', name:'TextureTransformTest', scale:1.0},
    {category:'tutorialModels', name:'UnlitTest', scale:1.0}
];

TutorialExtensionTestModelIndex.HasJpgScreenshot = [ // List of only models that have *.jpg screenshots
    'SpecGlossVsMetalRough',
    'TextureTransformTest',
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
        if (options.type == 'glTF-Binary' || options.type == 'glTF-Draco' && options.model == 'MorphPrimitivesTest') {
            modelInfoCollection[options.model].path = modelInfoCollection[options.model].name + '/' + options.type + '/' + modelInfoCollection[options.model].name + '.glb';
        } else {
            modelInfoCollection[options.model].path = modelInfoCollection[options.model].name + '/' + options.type + '/' + modelInfoCollection[options.model].name + '.gltf';
        }
        return modelInfoCollection[options.model];
    }
    return undefined;
};