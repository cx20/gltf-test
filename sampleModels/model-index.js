let ModelIndex = {};

ModelIndex.List = [
    {category:'sampleModels', name:'Box', scale:1.0},
    //{category:'sampleModels', name:'BoxWithoutIndices', scale:1.0},
    {category:'sampleModels', name:'BoxInterleaved', scale:1.0},
    {category:'sampleModels', name:'BoxTextured', scale:1.0},
    {category:'sampleModels', name:'BoxTexturedNonPowerOfTwo', scale:1.0},
    {category:'sampleModels', name:'BoxVertexColors', scale:1.0},
    {category:'sampleModels', name:'Duck', scale:1.0},
    {category:'sampleModels', name:'2CylinderEngine', scale:0.005},
    {category:'sampleModels', name:'ReciprocatingSaw', scale:0.01},
    {category:'sampleModels', name:'GearboxAssy', scale:0.2},
    {category:'sampleModels', name:'Buggy', scale:0.02},
    {category:'sampleModels', name:'BoxAnimated', scale:0.5},
    {category:'sampleModels', name:'CesiumMilkTruck', scale:0.5},
    {category:'sampleModels', name:'RiggedSimple', scale:0.2},
    {category:'sampleModels', name:'RiggedFigure', scale:1.0},
    {category:'sampleModels', name:'CesiumMan', scale:1.0},
    {category:'sampleModels', name:'Monster', scale:0.05},
    {category:'sampleModels', name:'BrainStem', scale:1.0},
    {category:'sampleModels', name:'VC', scale:0.2},
    {category:'sampleModels', name:'WalkingLady', scale:1.0}
];

ModelIndex.HasGifScreenshot = [ // List of only models that have *.gif screenshots (as opposed to *.png)
    'BoxAnimated',
    'BrainStem',
    'CesiumMan',
    'CesiumMilkTruck',
    'Monster',
    'RiggedFigure',
    'RiggedSimple',
    'VC',
    'WalkingLady'
];

ModelIndex.getScreenshot = function(name) {
    let extension = ((ModelIndex.HasGifScreenshot.indexOf(name) < 0) ? 'png' : 'gif');
    return name + '/screenshot/screenshot.' + extension;
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