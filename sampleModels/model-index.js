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

ModelIndex.getModelList = function() {
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
    var modelInfoCollection = ModelIndex.getModelList();
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
