var ModelIndex = {};

ModelIndex.List = {
    "Box": {
        "path": "Box/glTF-Embedded/Box.gltf",
        "screenshot": "Box/screenshot/screenshot.png"
    },
    "BoxAnimated": {
        "path": "BoxAnimated/glTF-Embedded/BoxAnimated.gltf",
        "screenshot": "BoxAnimated/screenshot/screenshot.gif"
    },
    "BoxSemantics": {
        "path": "BoxSemantics/glTF-Embedded/BoxSemantics.gltf",
        "screenshot": "BoxSemantics/screenshot/screenshot.png"
    },
    "BoxTextured": {
        "path": "BoxTextured/glTF-Embedded/BoxTextured.gltf",
        "screenshot": "BoxTextured/screenshot/screenshot.png"
    },
    "BoxWithoutIndices": {
        "path": "BoxWithoutIndices/glTF-Embedded/BoxWithoutIndices.gltf",
        "screenshot": "BoxWithoutIndices/screenshot/screenshot.png"
    },
    "Duck": {
        "path": "Duck/glTF-Embedded/Duck.gltf",
        "screenshot": "Duck/screenshot/screenshot.png"
    },
    "Monster": {
        "path": "Monster/glTF-Embedded/Monster.gltf",
        "screenshot": "Monster/screenshot/screenshot.gif"
    },
    "RiggedFigure": {
        "path": "RiggedFigure/glTF-Embedded/RiggedFigure.gltf",
        "screenshot": "RiggedFigure/screenshot/screenshot.gif"
    },
    "RiggedSimple": {
        "path": "RiggedSimple/glTF-Embedded/RiggedSimple.gltf",
        "screenshot": "RiggedSimple/screenshot/screenshot.gif"
    },
};

ModelIndex.getCurrentModel = function () {
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
    if (options.model) {
        document.title += ' + ' + options.model + '.gltf';
        return ModelIndex.List[options.model];
    }
    return undefined;
};
