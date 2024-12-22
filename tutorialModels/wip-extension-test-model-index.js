// TODO: Since the let variable of the external file cannot be referenced from the ES6 module in Safari, I temporarily changed it back to var.
//let TutorialWipExtensionTestModelIndex = {};
var TutorialWipExtensionTestModelIndex = {};

TutorialWipExtensionTestModelIndex.List = [
];

TutorialWipExtensionTestModelIndex.getScreenshot = function(name) {
    const model = this.List.find(model => model.name === name);
    const defaultScreenshot = 'screenshot/screenshot.png';
    return model ? `${name}/${model.screenshot || defaultScreenshot}` : `${name}/${defaultScreenshot}`;
};

TutorialWipExtensionTestModelIndex.getModelInfoCollection = function() {
    let numModels = TutorialWipExtensionTestModelIndex.List.length;
    let modelInfoCollection = {};
    for (let i = 0; i < numModels; ++i) {
        let category = TutorialWipExtensionTestModelIndex.List[i].category;
        let name = TutorialWipExtensionTestModelIndex.List[i].name;
        let scale = TutorialWipExtensionTestModelIndex.List[i].scale;
        modelInfoCollection[name] = {
            category: category,
            name: name,
            scale: scale
        };
    }
    return modelInfoCollection;
}

TutorialWipExtensionTestModelIndex.getCurrentModel = function() {
    let modelInfoCollection = TutorialWipExtensionTestModelIndex.getModelInfoCollection();
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
        if (options.type == 'glTF-Binary' || options.type == 'glTF-Draco' && options.model == 'MorphPrimitivesTest') {
            modelInfoCollection[options.model].path = modelInfoCollection[options.model].name + '/' + options.type + '/' + modelInfoCollection[options.model].name + '.glb';
        } else {
            modelInfoCollection[options.model].path = modelInfoCollection[options.model].name + '/' + options.type + '/' + modelInfoCollection[options.model].name + '.gltf';
        }
        return modelInfoCollection[options.model];
    }
    return undefined;
};