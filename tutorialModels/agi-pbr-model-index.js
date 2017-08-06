var TutorialAgiPbrModelIndex = {};

TutorialAgiPbrModelIndex.List = [
    {category:'tutorialModels', name:'MetalRoughSpheres', scale:0.2},
    {category:'tutorialModels', name:'NormalTangentTest', scale:1.0},
    {category:'tutorialModels', name:'TextureSettingsTest', scale:0.2},
    {category:'tutorialModels', name:'TextureCoordinateTest', scale:1.0},
];

TutorialAgiPbrModelIndex.HasGifScreenshot = [ // List of only models that have *.gif screenshots (as opposed to *.png)
];

TutorialAgiPbrModelIndex.getScreenshot = function(name) {
    var extension = ((TutorialAgiPbrModelIndex.HasGifScreenshot.indexOf(name) < 0) ? 'png' : 'gif');
    //var extension = ((TutorialAgiPbrModelIndex.HasGifScreenshot.indexOf(name) < 0) ? 'jpg' : 'gif');
    return name + '/screenshot/screenshot.' + extension;
};

//TutorialAgiPbrModelIndex.getEmbeddedFolderName = function(name) {
//    var suffixHash = {
//        'SimpleMaterial': '-buffer',
//        'AdvancedMaterial': '-buffer',
//        'SimpleOpacity': '-buffer',
//        'SimpleTexture': '-buffer',
//        'SimpleSkin': '-buffers'
//    };
//    var suffix = suffixHash[name] === undefined ? '' : suffixHash[name];
//    return 'glTF-Embedded' + suffix;
//};

TutorialAgiPbrModelIndex.getModelInfoCollection = function() {
    var numModels = TutorialAgiPbrModelIndex.List.length;
    var modelInfoCollection = {};
    for (var i = 0; i < numModels; ++i) {
        var category = TutorialAgiPbrModelIndex.List[i].category;
        var name = TutorialAgiPbrModelIndex.List[i].name;
        var scale = TutorialAgiPbrModelIndex.List[i].scale;
        modelInfoCollection[name] = {
            category: category,
            name: name,
            scale: scale
        };
    }
    return modelInfoCollection;
}

TutorialAgiPbrModelIndex.getCurrentModel = function() {
    var modelInfoCollection = TutorialAgiPbrModelIndex.getModelInfoCollection();
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