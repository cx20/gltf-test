// TODO: Since the let variable of the external file cannot be referenced from the ES6 module in Safari, I temporarily changed it back to var.
//let ModelIndex = {};
var ModelIndex = {};

ModelIndex.List = [
    {category:'sampleModels', name:'Box', screenshot:'screenshot/screenshot.png', scale:1},
    {category:'sampleModels', name:'BoxInterleaved', screenshot:'screenshot/screenshot.png', scale:1},
    {category:'sampleModels', name:'BoxTextured', screenshot:'screenshot/screenshot.png', scale:1},
    {category:'sampleModels', name:'BoxTexturedNonPowerOfTwo', screenshot:'screenshot/screenshot.png', scale:1},
    {category:'sampleModels', name:'Box With Spaces', screenshot:'screenshot/screenshot.png', scale:1},
    {category:'sampleModels', name:'BoxVertexColors', screenshot:'screenshot/screenshot.png', scale:1},
    {category:'sampleModels', name:'Duck', screenshot:'screenshot/screenshot.png', scale:1},
    {category:'sampleModels', name:'2CylinderEngine', screenshot:'screenshot/screenshot.png', scale:0.005},
    {category:'sampleModels', name:'ReciprocatingSaw', screenshot:'screenshot/screenshot.png', scale:0.01},
    {category:'sampleModels', name:'GearboxAssy', screenshot:'screenshot/screenshot.png', scale:0.2},
    {category:'sampleModels', name:'Buggy', screenshot:'screenshot/screenshot.png', scale:0.02},
    {category:'sampleModels', name:'BoxAnimated', screenshot:'screenshot/screenshot.gif', scale:0.5},
    {category:'sampleModels', name:'CesiumMilkTruck', screenshot:'screenshot/screenshot.gif', scale:0.5},
    {category:'sampleModels', name:'RiggedSimple', screenshot:'screenshot/screenshot.gif', scale:0.2},
    {category:'sampleModels', name:'RiggedFigure', screenshot:'screenshot/screenshot.gif', scale:1},
    {category:'sampleModels', name:'CesiumMan', screenshot:'screenshot/screenshot.gif', scale:1},
    {category:'sampleModels', name:'Fox', screenshot:'screenshot/screenshot.jpg', scale:0.02},
    {category:'sampleModels', name:'BrainStem', screenshot:'screenshot/screenshot.gif', scale:1},
    {category:'sampleModels', name:'VirtualCity', screenshot:'screenshot/screenshot.gif', scale:0.2},
];

ModelIndex.getScreenshot = function(name) {
    const model = this.List.find(model => model.name === name);
    const defaultScreenshot = 'screenshot/screenshot.png';
    return model ? `${name}/${model.screenshot || defaultScreenshot}` : `${name}/${defaultScreenshot}`;
};

ModelIndex.getModelInfoCollection = function() {
    let numModels = ModelIndex.List.length;
    let modelInfoCollection = {};
    for (let i = 0; i < numModels; ++i) {
        let category = ModelIndex.List[i].category;
        let name = ModelIndex.List[i].name;
        let scale = ModelIndex.List[i].scale;
        modelInfoCollection[name] = {
            category: category,
            name: name,
            scale: scale
        };
    }
    return modelInfoCollection;
}

ModelIndex.getCurrentModel = function() {
    let modelInfoCollection = ModelIndex.getModelInfoCollection();
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
    if (options.scale === undefined) {
        options.scale = 1.0;
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
    if (options.url) {
    	return {category:"Other", name:"Other", scale: options.scale, url: options.url};
    }
    return undefined;
};