var TutorialFeatureTestModelIndex = {};

TutorialFeatureTestModelIndex.List = [
    {category:'tutorialModels', name:'AlphaBlendModeTest', scale:0.5},
    {category:'tutorialModels', name:'BoomBoxWithAxes', scale:80.0},
    {category:'tutorialModels', name:'MetalRoughSpheres', scale:0.2},
    {category:'tutorialModels', name:'MultiUVTest', scale:1.0},
    {category:'tutorialModels', name:'NormalTangentTest', scale:1.0},
    {category:'tutorialModels', name:'NormalTangentMirrorTest', scale:1.0},
    {category:'tutorialModels', name:'OrientationTest', scale:0.2},
    {category:'tutorialModels', name:'TextureCoordinateTest', scale:1.0},
    {category:'tutorialModels', name:'TextureSettingsTest', scale:0.2},
    {category:'tutorialModels', name:'VertexColorTest', scale:1.0},
];

TutorialFeatureTestModelIndex.HasJpgScreenshot = [ // List of only models that have *.jpg screenshots
    'BoomBoxWithAxes',
    'MultiUVTest',
];

TutorialFeatureTestModelIndex.getScreenshot = function(name) {
    var extension = ((TutorialFeatureTestModelIndex.HasJpgScreenshot.indexOf(name) < 0) ? 'png' : 'jpg');
    return name + '/screenshot/screenshot.' + extension;
};

//TutorialFeatureTestModelIndex.getEmbeddedFolderName = function(name) {
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

TutorialFeatureTestModelIndex.getModelInfoCollection = function() {
    var numModels = TutorialFeatureTestModelIndex.List.length;
    var modelInfoCollection = {};
    for (var i = 0; i < numModels; ++i) {
        var category = TutorialFeatureTestModelIndex.List[i].category;
        var name = TutorialFeatureTestModelIndex.List[i].name;
        var scale = TutorialFeatureTestModelIndex.List[i].scale;
        modelInfoCollection[name] = {
            category: category,
            name: name,
            scale: scale
        };
    }
    return modelInfoCollection;
}

TutorialFeatureTestModelIndex.getCurrentModel = function() {
    var modelInfoCollection = TutorialFeatureTestModelIndex.getModelInfoCollection();
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