var ModelIndex = {};

ModelIndex.List = [
    '2CylinderEngine',
    'Box',
    'BoxAnimated',
    'BoxSemantics',
    'BoxTextured',
    'BoxWithoutIndices',
    'BrainStem',
    'Buggy',
    'CesiumMan',
    'CesiumMilkTruck',
    'Duck',
    'GearboxAssy',
    'Monster',
    'ReciprocatingSaw',
    'RiggedFigure',
    'RiggedSimple',
    'VC'
];

ModelIndex.HasGifScreenshot = [  // List of only models that have *.gif screenshots (as opposed to *.png)
    'BoxAnimated',
    'BrainStem',
    'CesiumMan',
    'CesiumMilkTruck',
    'Monster',
    'RiggedFigure',
    'RiggedSimple',
    'VC'
];

ModelIndex.getScreenshot = function(name) {
    var extension = ((ModelIndex.HasGifScreenshot.indexOf(name) < 0) ? 'png' : 'gif');
    return name + '/screenshot/screenshot.' + extension;
};

ModelIndex.getModelInfoCollection = function() {
    var numModels = ModelIndex.List.length;
    var modelInfoCollection = {};
    for (var i = 0; i < numModels; ++i) {
        var name = ModelIndex.List[i];
        modelInfoCollection[name] = {
            filename: name + '.gltf',
            path: name + '/glTF-Embedded/' + name + '.gltf'
        };
    }
    return modelInfoCollection;
}

ModelIndex.getCurrentModel = function () {
    var modelInfoCollection = ModelIndex.getModelInfoCollection();
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
    if (options.model && modelInfoCollection.hasOwnProperty(options.model)) {
        document.title += ' + ' + options.model + '.gltf';
        return modelInfoCollection[options.model];
    }
    return undefined;
};
