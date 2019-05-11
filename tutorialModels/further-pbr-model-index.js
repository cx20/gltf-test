let TutorialFurtherPbrModelIndex = {};

TutorialFurtherPbrModelIndex.List = [
    {category:'tutorialModels', name:'TwoSidedPlane', scale:1.0},
    {category:'tutorialModels', name:'Cube', scale:1.0},
    {category:'tutorialModels', name:'AnimatedCube', scale:1.0},
    {category:'tutorialModels', name:'Suzanne', scale:1.0},
    {category:'tutorialModels', name:'SciFiHelmet', scale:1.0},
    {category:'tutorialModels', name:'AntiqueCamera', scale:0.3},
];

TutorialFurtherPbrModelIndex.HasGifScreenshot = [ // List of only models that have *.gif screenshots (as opposed to *.png)
    'AnimatedCube',
];

TutorialFurtherPbrModelIndex.HasPngScreenshot = [ // List of only models that have *.png screenshots
    'AntiqueCamera',
];


TutorialFurtherPbrModelIndex.getScreenshot = function(name) {
    let extension = ((TutorialFurtherPbrModelIndex.HasGifScreenshot.indexOf(name) < 0) ? 'jpg' : 'gif');
    extension = ((TutorialFurtherPbrModelIndex.HasPngScreenshot.indexOf(name) < 0) ? extension : 'png');
    return name + '/screenshot/screenshot.' + extension;
};

//TutorialFurtherPbrModelIndex.getEmbeddedFolderName = function(name) {
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

TutorialFurtherPbrModelIndex.getModelInfoCollection = function() {
    let numModels = TutorialFurtherPbrModelIndex.List.length;
    let modelInfoCollection = {};
    for (let i = 0; i < numModels; ++i) {
        let category = TutorialFurtherPbrModelIndex.List[i].category;
        let name = TutorialFurtherPbrModelIndex.List[i].name;
        let scale = TutorialFurtherPbrModelIndex.List[i].scale;
        modelInfoCollection[name] = {
            category: category,
            name: name,
            scale: scale
        };
    }
    return modelInfoCollection;
}

TutorialFurtherPbrModelIndex.getCurrentModel = function() {
    let modelInfoCollection = TutorialFurtherPbrModelIndex.getModelInfoCollection();
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
        if (options.type == 'glTF-Binary') {
            modelInfoCollection[options.model].path = modelInfoCollection[options.model].name + '/' + options.type + '/' + modelInfoCollection[options.model].name + '.glb';
        } else {
            modelInfoCollection[options.model].path = modelInfoCollection[options.model].name + '/' + options.type + '/' + modelInfoCollection[options.model].name + '.gltf';
        }
        return modelInfoCollection[options.model];
    }
    return undefined;
};