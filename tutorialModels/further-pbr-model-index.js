// TODO: Since the let variable of the external file cannot be referenced from the ES6 module in Safari, I temporarily changed it back to var.
//let TutorialFurtherPbrModelIndex = {};
var TutorialFurtherPbrModelIndex = {};

TutorialFurtherPbrModelIndex.List = [
    {category:'tutorialModels', name:'TwoSidedPlane', screenshot:'screenshot/screenshot.jpg', scale:1},
    {category:'tutorialModels', name:'Cube', screenshot:'screenshot/screenshot.jpg', scale:1},
    {category:'tutorialModels', name:'AnimatedCube', screenshot:'screenshot/screenshot.gif', scale:1},
    {category:'tutorialModels', name:'Suzanne', screenshot:'screenshot/screenshot.jpg', scale:1},
    {category:'tutorialModels', name:'SciFiHelmet', screenshot:'screenshot/screenshot.jpg', scale:1},
    {category:'tutorialModels', name:'AntiqueCamera', screenshot:'screenshot/screenshot.png', scale:0.3},
];

TutorialFurtherPbrModelIndex.getScreenshot = function(name) {
    const model = this.List.find(model => model.name === name);
    const defaultScreenshot = 'screenshot/screenshot.png';
    return model ? `${name}/${model.screenshot || defaultScreenshot}` : `${name}/${defaultScreenshot}`;
};

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