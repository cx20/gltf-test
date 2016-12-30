var TutorialModelIndex = {};

TutorialModelIndex.List = [
    {category:'tutorialModels', name:'TriangleWithoutIndices', scale:1.0},
    {category:'tutorialModels', name:'Triangle', scale:1.0},
    {category:'tutorialModels', name:'AnimatedTriangle', scale:1.0},
    {category:'tutorialModels', name:'SimpleMaterial', scale:1.0},
    {category:'tutorialModels', name:'SimpleMeshes', scale:1.0},
    {category:'tutorialModels', name:'AdvancedMaterial', scale:1.0},
    {category:'tutorialModels', name:'SimpleOpacity', scale:1.0},
    {category:'tutorialModels', name:'SimpleTexture', scale:1.0},
    {category:'tutorialModels', name:'Cameras', scale:1.0},
    {category:'tutorialModels', name:'SimpleSkin', scale:1.0}
];

TutorialModelIndex.HasGifScreenshot = [ // List of only models that have *.gif screenshots (as opposed to *.png)
    'AnimatedTriangle',
    'SimpleSkin'
];

TutorialModelIndex.getScreenshot = function(name) {
    var extension = ((TutorialModelIndex.HasGifScreenshot.indexOf(name) < 0) ? 'png' : 'gif');
    return name + '/screenshot/screenshot.' + extension;
};

TutorialModelIndex.getEmbeddedFolderName = function(name) {
    var suffixHash = {
        'SimpleMaterial': '-buffer',
        'AdvancedMaterial': '-buffer',
        'SimpleOpacity': '-buffer',
        'SimpleTexture': '-buffer',
        'SimpleSkin': '-buffers'
    };
    var suffix = suffixHash[name] === undefined ? '' : suffixHash[name];
    return 'glTF-Embedded' + suffix;
};

TutorialModelIndex.getModelInfoCollection = function() {
    var numModels = TutorialModelIndex.List.length;
    var modelInfoCollection = {};
    for (var i = 0; i < numModels; ++i) {
        var category = TutorialModelIndex.List[i].category;
        var name = TutorialModelIndex.List[i].name;
        var scale = TutorialModelIndex.List[i].scale;
        modelInfoCollection[name] = {
            category: category,
            name: name,
            scale: scale
        };
    }
    return modelInfoCollection;
}

TutorialModelIndex.getCurrentModel = function() {
    var modelInfoCollection = TutorialModelIndex.getModelInfoCollection();
    var queryString = window.location.search.substring(1);
    var parts = queryString.replace(/\+/g, '%20').split('&');
    var options = {};
    for (var i = 0, len = parts.length; i < len; ++i) {
        var subparts = parts[i].split('=');

        var name = decodeURIComponent(subparts[0]);
        var value = subparts[1];
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