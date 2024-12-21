// TODO: Since the let variable of the external file cannot be referenced from the ES6 module in Safari, I temporarily changed it back to var.
//let TutorialFeatureTestModelIndex = {};
var TutorialFeatureTestModelIndex = {};

TutorialFeatureTestModelIndex.List = [
    {category:'tutorialModels', name:'AlphaBlendModeTest', screenshot:'screenshot/screenshot.png', scale:0.5},
    {category:'tutorialModels', name:'BoomBoxWithAxes', screenshot:'screenshot/screenshot.jpg', scale:80},
    {category:'tutorialModels', name:'MetalRoughSpheres', screenshot:'screenshot/screenshot.png', scale:0.2},
    {category:'tutorialModels', name:'MetalRoughSpheresNoTextures', screenshot:'screenshot/screenshot.png', scale:200},
    {category:'tutorialModels', name:'MorphPrimitivesTest', screenshot:'screenshot/screenshot.jpg', scale:2},
    {category:'tutorialModels', name:'MorphStressTest', screenshot:'screenshot/screenshot.jpg', scale:1},
    {category:'tutorialModels', name:'MultiUVTest', screenshot:'screenshot/screenshot.jpg', scale:1},
    {category:'tutorialModels', name:'NegativeScaleTest', screenshot:'screenshot/screenshot.jpg', scale:0.5},
    {category:'tutorialModels', name:'NormalTangentTest', screenshot:'screenshot/screenshot.png', scale:1},
    {category:'tutorialModels', name:'NormalTangentMirrorTest', screenshot:'screenshot/screenshot.png', scale:1},
    {category:'tutorialModels', name:'OrientationTest', screenshot:'screenshot/screenshot.png', scale:0.2},
    {category:'tutorialModels', name:'PrimitiveModeNormalsTest', screenshot:'screenshot/screenshot.png', scale:0.2},
    {category:'tutorialModels', name:'RecursiveSkeletons', screenshot:'screenshot/screenshot.jpg', scale:0.01},
    {category:'tutorialModels', name:'SuzanneMorphSparse', screenshot:'screenshot/screenshot.png', scale:1},
    {category:'tutorialModels', name:'TextureCoordinateTest', screenshot:'screenshot/screenshot.png', scale:1},
    {category:'tutorialModels', name:'TextureEncodingTest', screenshot:'screenshot/screenshot.png', scale:0.3},
    {category:'tutorialModels', name:'TextureLinearInterpolationTest', screenshot:'screenshot/screenshot.png', scale:0.5},
    {category:'tutorialModels', name:'TextureSettingsTest', screenshot:'screenshot/screenshot.png', scale:0.2},
    {category:'tutorialModels', name:'VertexColorTest', screenshot:'screenshot/screenshot.png', scale:1},
];

//TutorialFeatureTestModelIndex.HasJpgScreenshot = [ // List of only models that have *.jpg screenshots
//    'BoomBoxWithAxes',
//    'MultiUVTest',
//    'MorphPrimitivesTest',
//    'MorphStressTest',
//    'NegativeScaleTest',
//    'RecursiveSkeletons'
//];

//TutorialFeatureTestModelIndex.HasGifScreenshot = [ // List of only models that have *.gif screenshots
//    'SuzanneMorphSparse'
//];

//TutorialFeatureTestModelIndex.getScreenshot = function(name) {
//    let extension = ((TutorialFeatureTestModelIndex.HasJpgScreenshot.indexOf(name) < 0) ? 'png' : 'jpg');
//    extension = ((TutorialFeatureTestModelIndex.HasGifScreenshot.indexOf(name) < 0) ? extension : 'gif');
//    return name + '/screenshot/screenshot.' + extension;
//};

TutorialFeatureTestModelIndex.getScreenshot = function(name) {
    const model = this.List.find(model => model.name === name);
    const defaultScreenshot = 'screenshot/screenshot.png';
    return model ? `${name}/${model.screenshot || defaultScreenshot}` : `${name}/${defaultScreenshot}`;
};

//TutorialFeatureTestModelIndex.getEmbeddedFolderName = function(name) {
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

TutorialFeatureTestModelIndex.getModelInfoCollection = function() {
    let numModels = TutorialFeatureTestModelIndex.List.length;
    let modelInfoCollection = {};
    for (let i = 0; i < numModels; ++i) {
        let category = TutorialFeatureTestModelIndex.List[i].category;
        let name = TutorialFeatureTestModelIndex.List[i].name;
        let scale = TutorialFeatureTestModelIndex.List[i].scale;
        modelInfoCollection[name] = {
            category: category,
            name: name,
            scale: scale
        };
    }
    return modelInfoCollection;
}

TutorialFeatureTestModelIndex.getCurrentModel = function() {
    let modelInfoCollection = TutorialFeatureTestModelIndex.getModelInfoCollection();
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