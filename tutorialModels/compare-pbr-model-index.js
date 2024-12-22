// TODO: Since the let variable of the external file cannot be referenced from the ES6 module in Safari, I temporarily changed it back to var.
//let TutorialComparePbrModelIndex = {};
var TutorialComparePbrModelIndex = {};

TutorialComparePbrModelIndex.List = [
    {category:'tutorialModels', name:'CompareAlphaCoverage', screenshot:'screenshot/screenshot.jpg', scale:2},
    {category:'tutorialModels', name:'CompareAmbientOcclusion', screenshot:'screenshot/screenshot.jpg', scale:5},
    {category:'tutorialModels', name:'CompareAnisotropy', screenshot:'screenshot/screenshot.jpg', scale:2},
    {category:'tutorialModels', name:'CompareBaseColor', screenshot:'screenshot/screenshot.jpg', scale:2},
    {category:'tutorialModels', name:'CompareClearcoat', screenshot:'screenshot/screenshot.jpg', scale:2},
    {category:'tutorialModels', name:'CompareDispersion', screenshot:'screenshot/screenshot.jpg', scale:2},
    {category:'tutorialModels', name:'CompareEmissiveStrength', screenshot:'screenshot/screenshot.jpg', scale:2},
    {category:'tutorialModels', name:'CompareIor', screenshot:'screenshot/screenshot.jpg', scale:2},
    {category:'tutorialModels', name:'CompareIridescence', screenshot:'screenshot/screenshot.jpg', scale:2},
    {category:'tutorialModels', name:'CompareMetallic', screenshot:'screenshot/screenshot.jpg', scale:2},
    {category:'tutorialModels', name:'CompareNormal', screenshot:'screenshot/screenshot.jpg', scale:2},
    {category:'tutorialModels', name:'CompareRoughness', screenshot:'screenshot/screenshot.jpg', scale:2},
    {category:'tutorialModels', name:'CompareSheen', screenshot:'screenshot/screenshot.jpg', scale:2},
    {category:'tutorialModels', name:'CompareSpecular', screenshot:'screenshot/screenshot.jpg', scale:2},
    {category:'tutorialModels', name:'CompareTransmission', screenshot:'screenshot/screenshot.jpg', scale:2},
    {category:'tutorialModels', name:'CompareVolume', screenshot:'screenshot/screenshot.jpg', scale:2},
];

TutorialComparePbrModelIndex.getScreenshot = function(name) {
    const model = this.List.find(model => model.name === name);
    const defaultScreenshot = 'screenshot/screenshot.png';
    return model ? `${name}/${model.screenshot || defaultScreenshot}` : `${name}/${defaultScreenshot}`;
};

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