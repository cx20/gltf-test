var TutorialPbrModelIndex = {};

TutorialPbrModelIndex.List = [
    {category:'tutorialModels', name:'Avocado', scale:30.0},	// copied from sampleModels
    {category:'tutorialModels', name:'BarramundiFish', scale:5.0},	// copied from sampleModels
    {category:'tutorialModels', name:'BoomBox', scale:80.0},
    {category:'tutorialModels', name:'Corset', scale:25.0},
    {category:'tutorialModels', name:'Lantern', scale:0.06},
    {category:'tutorialModels', name:'WaterBottle', scale:10.0},
    {category:'tutorialModels', name:'DamagedHelmet', scale:1.0},
];

TutorialPbrModelIndex.HasGifScreenshot = [ // List of only models that have *.gif screenshots (as opposed to *.png)
];

TutorialPbrModelIndex.HasPngScreenshot = [ // List of only models that have *.png screenshots
    'DamagedHelmet',
];


TutorialPbrModelIndex.getScreenshot = function(name) {
    //var extension = ((TutorialPbrModelIndex.HasGifScreenshot.indexOf(name) < 0) ? 'png' : 'gif');
    var extension = ((TutorialPbrModelIndex.HasGifScreenshot.indexOf(name) < 0) ? 'jpg' : 'gif');
    extension = ((TutorialPbrModelIndex.HasPngScreenshot.indexOf(name) < 0) ? extension : 'png');
    return name + '/screenshot/screenshot.' + extension;
};

//TutorialPbrModelIndex.getEmbeddedFolderName = function(name) {
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

TutorialPbrModelIndex.getModelInfoCollection = function() {
    var numModels = TutorialPbrModelIndex.List.length;
    var modelInfoCollection = {};
    for (var i = 0; i < numModels; ++i) {
        var category = TutorialPbrModelIndex.List[i].category;
        var name = TutorialPbrModelIndex.List[i].name;
        var scale = TutorialPbrModelIndex.List[i].scale;
        modelInfoCollection[name] = {
            category: category,
            name: name,
            scale: scale
        };
    }
    return modelInfoCollection;
}

TutorialPbrModelIndex.getCurrentModel = function() {
    var modelInfoCollection = TutorialPbrModelIndex.getModelInfoCollection();
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