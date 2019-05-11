let TutorialModelIndex = {};

TutorialModelIndex.List = [
    {category:'tutorialModels', name:'TriangleWithoutIndices', scale:1.0},
    {category:'tutorialModels', name:'Triangle', scale:1.0},
    {category:'tutorialModels', name:'AnimatedTriangle', scale:1.0},
    {category:'tutorialModels', name:'SimpleMorph', scale:1.0},
    {category:'tutorialModels', name:'SimpleSparseAccessor', scale:1.0},
    {category:'tutorialModels', name:'AnimatedMorphCube', scale:1.0},
    {category:'tutorialModels', name:'AnimatedMorphSphere', scale:1.0},
    {category:'tutorialModels', name:'SimpleMaterial', scale:1.0},
    {category:'tutorialModels', name:'SimpleMeshes', scale:1.0},
    {category:'tutorialModels', name:'SimpleTexture', scale:1.0},
    {category:'tutorialModels', name:'Cameras', scale:1.0},
    {category:'tutorialModels', name:'SimpleSkin', scale:1.0},
    {category:'tutorialModels', name:'InterpolationTest', scale:1.0, allAnimations:true},  // Play all model animations at the same time
];

TutorialModelIndex.HasGifScreenshot = [ // List of only models that have *.gif screenshots (as opposed to *.png)
    'AnimatedTriangle',
    'AnimatedMorphCube',
    'AnimatedMorphSphere',
    'SimpleSkin',
    'InterpolationTest'
];

TutorialModelIndex.getScreenshot = function(name) {
    let extension = ((TutorialModelIndex.HasGifScreenshot.indexOf(name) < 0) ? 'png' : 'gif');
    return name + '/screenshot/screenshot.' + extension;
};

TutorialModelIndex.getEmbeddedFolderName = function(name) {
    let suffixHash = {
        'AnimatedMorphCube': '-Binary',
        'AnimatedMorphSphere': '-Binary',
        'SimpleMaterial': '-Embedded-buffer',
        'AdvancedMaterial': '-Embedded-buffer',
        'SimpleOpacity': '-Embedded-buffer',
        'SimpleTexture': '-Embedded-buffer',
        //'SimpleSkin': '-Embedded-buffers'
    };
    let suffix = suffixHash[name] === undefined ? '-Embedded' : suffixHash[name];
    return 'glTF' + suffix;
};

TutorialModelIndex.getModelInfoCollection = function() {
    let numModels = TutorialModelIndex.List.length;
    let modelInfoCollection = {};
    for (let i = 0; i < numModels; ++i) {
        let category = TutorialModelIndex.List[i].category;
        let name = TutorialModelIndex.List[i].name;
        let scale = TutorialModelIndex.List[i].scale;
        let allAnimations = TutorialModelIndex.List[i].allAnimations;
        modelInfoCollection[name] = {
            category: category,
            name: name,
            scale: scale,
            allAnimations: allAnimations
        };
    }
    return modelInfoCollection;
};

TutorialModelIndex.getCurrentModel = function() {
    let modelInfoCollection = TutorialModelIndex.getModelInfoCollection();
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
