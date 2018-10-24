var modelInfo = ModelIndex.getCurrentModel();
if (!modelInfo) {
    modelInfo = TutorialModelIndex.getCurrentModel();
}
if (!modelInfo) {
    modelInfo = TutorialPbrModelIndex.getCurrentModel();
}
if (!modelInfo) {
    modelInfo = TutorialFurtherPbrModelIndex.getCurrentModel();
}
if (!modelInfo) {
    modelInfo = TutorialFeatureTestModelIndex.getCurrentModel();
}
if (!modelInfo) {
    modelInfo = TutorialExtensionTestModelIndex.getCurrentModel();
}
if (!modelInfo) {
    throw new Error('Model not specified or not found in list.');
}

var decoderModule;

// create a PlayCanvas application
var canvas = document.getElementById('application');
var app = new pc.Application(canvas, {
    mouse: new pc.Mouse(document.body),
    keyboard: new pc.Keyboard(window)
});
app.start();
// fill the available space at full resolution
app.setCanvasFillMode(pc.FILLMODE_FILL_WINDOW);
app.setCanvasResolution(pc.RESOLUTION_AUTO);
app.scene.gammaCorrection = pc.GAMMA_SRGB;
app.scene.toneMapping = pc.TONEMAP_ACES;
// ensure canvas is resized when window changes size
window.addEventListener('resize', function() {
    app.resizeCanvas();
});
// create camera entity
var camera = new pc.Entity('camera');
camera.addComponent('camera');
camera.addComponent('script');
app.root.addChild(camera);
camera.setLocalPosition(0, 0, 1);

// make the camera interactive
app.assets.loadFromUrl('../../libs/playcanvas/v1.9.0-dev/orbit-camera.js', 'script', function (err, asset) {
    camera.script.create('orbitCamera', {
        attributes: {
            inertiaFactor: 0,
            distanceMin: 0,
            distanceMax: 0,
            pitchAngleMax: 90,
            pitchAngleMin: -90,
            frameOnStart: true
        }
    });
    camera.script.create('keyboardInput');
    camera.script.create('mouseInput', {
        attributes: {
            orbitSensitivity: 0.3,
            distanceSensitivity: 0.15
        }
    });
});
// set a prefiltered cubemap as the skybox
var cubemapAsset = new pc.Asset('helipad', 'cubemap', {
    url: "https://cdn.rawgit.com/playcanvas/playcanvas-gltf/5489ff62/viewer/cubemap/6079289/Helipad.dds"
}, {
    "textures": [
        "https://cdn.rawgit.com/playcanvas/playcanvas-gltf/tree/master/viewer/cubemap/6079292/Helipad_posx.png",
        "https://cdn.rawgit.com/playcanvas/playcanvas-gltf/tree/master/viewer/cubemap/6079290/Helipad_negx.png",
        "https://cdn.rawgit.com/playcanvas/playcanvas-gltf/tree/master/viewer/cubemap/6079293/Helipad_posy.png",
        "https://cdn.rawgit.com/playcanvas/playcanvas-gltf/tree/master/viewer/cubemap/6079298/Helipad_negy.png",
        "https://cdn.rawgit.com/playcanvas/playcanvas-gltf/tree/master/viewer/cubemap/6079294/Helipad_posz.png",
        "https://cdn.rawgit.com/playcanvas/playcanvas-gltf/tree/master/viewer/cubemap/6079300/Helipad_negz.png"
    ],
    "magFilter": 1,
    "minFilter": 5,
    "anisotropy": 1,
    "name": "Helipad",
    "rgbm": true,
    "prefiltered": "Helipad.dds"
});
app.assets.add(cubemapAsset);
app.assets.load(cubemapAsset);
cubemapAsset.ready(function () {
    app.scene.skyboxMip = 2;
    app.scene.setSkybox(cubemapAsset.resources);
});

// root entity for loaded gltf scenes which can have more than one root entity
var gltfRoot = new pc.Entity('gltf');
app.root.addChild(gltfRoot);


function loadScript(src) {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    return new Promise(function (resolve) {
        script.onload = resolve;
        head.appendChild(script);
    });
}

function init(){
    if (true) {//typeof WebAssembly !== 'object') {
        loadScript('../../libs/playcanvas/v1.9.0-dev/draco_decoder.js').then(function () {
            decoderModule = DracoDecoderModule();
            onLoad();
        });
    } else {
        loadScript('../../libs/playcanvas/v1.9.0-dev/draco_wasm_wrapper.js').then(function () {
            fetch('../../libs/playcanvas/v1.9.0-dev//draco_decoder.wasm').then(function (response) {
                response.arrayBuffer().then(function (arrayBuffer) {
                    decoderModule = DracoDecoderModule({ wasmBinary: arrayBuffer });
                    onLoad();
                });
            });
        });
    }
}

function onLoad() {
    var url = "../../" + modelInfo.category + "/" + modelInfo.path;
    if(modelInfo.url) {
        url = modelInfo.url;
    }
    var scale = modelInfo.scale;
    var basePath = url.substring(0, url.lastIndexOf("/")) + "/";
    var ext = url.split(".").pop();
    var isGlb = (ext == "glb") ? true : false;

    // create directional light entity
    var light = new pc.Entity('light');
    light.addComponent('light',);
    app.root.addChild(light);
    light.setEulerAngles(45, 0, 45);
 
    // rotator script
    var Rotate = pc.createScript('rotate');
    Rotate.prototype.update = function (deltaTime) {
        this.entity.rotate(0, -deltaTime * 20, 0);
    };
    // glTF scene root that rotates
    var gltfRoot = new pc.Entity('gltf');
    gltfRoot.addComponent('script');
    gltfRoot.script.create('rotate');
    app.root.addChild(gltfRoot);

    if ( isGlb ) {
        var req = new XMLHttpRequest();
        req.open("get", url, true);
        req.responseType = isGlb ? "arraybuffer" : "";
        req.send(null);

        req.onload = function(){
            var arrayBuffer = req.response;
            loadGlb(arrayBuffer, app.graphicsDevice, function (model, textures, animationClips) {
                // Wrap the model as an asset and add to the asset registry
                var asset = new pc.Asset('gltf', 'model', {
                    url: ''
                });
                asset.resource = model;
                asset.loaded = true;
                app.assets.add(asset);

                // add the loaded scene to the hierarchy
                gltfRoot.addComponent('model', {
                    asset: asset
                });

                // Now that the model is created, after translateAnimation, we have to hook here
                if (animationClips) {
                    for (i = 0; i < animationClips.length; i++) {
                        for(var c = 0; c < animationClips[i].animCurves.length; c++) {
                            var curve = animationClips[i].animCurves[c];
                            if (curve.animTargets[0].targetNode === "model")
                                curve.animTargets[0].targetNode = gltfRoot;
                        }
                    }
                }

                gltfRoot.model.model = model;
                if ( animationClips && animationClips.length > 0 ) {
                    gltfRoot.animComponent = new AnimationComponent();
                }
                if ( gltfRoot.animComponent ) {
                    // Add all animations to the model's animation component
                    for (var i = 0; i < animationClips.length; i++) {
                        animationClips[i].transferToRoot(gltfRoot);
                        gltfRoot.animComponent.addClip(animationClips[i]);
                    }
                    gltfRoot.animComponent.playClip(animationClips[0].name);
                }
                // focus the camera on the newly loaded scene
                camera.script.orbitCamera.focusEntity = gltfRoot;
            }, {
                decoderModule: decoderModule
            });
        }
    } else {
        app.assets.loadFromUrl(url, 'json', function (err, asset) {
            var json = asset.resource;
            var gltf = JSON.parse(json);
            loadGltf(gltf, app.graphicsDevice, function (model, textures, animationClips) {
                // Wrap the model as an asset and add to the asset registry
                var asset = new pc.Asset('gltf', 'model', {
                    url: ''
                });
                asset.resource = model;
                asset.loaded = true;
                app.assets.add(asset);

                // add the loaded scene to the hierarchy
                gltfRoot.addComponent('model', {
                    asset: asset
                });

                // Now that the model is created, after translateAnimation, we have to hook here
                if (animationClips) {
                    for (i = 0; i < animationClips.length; i++) {
                        for(var c = 0; c < animationClips[i].animCurves.length; c++) {
                            var curve = animationClips[i].animCurves[c];
                            if (curve.animTargets[0].targetNode === "model")
                                curve.animTargets[0].targetNode = gltfRoot;
                        }
                    }
                }

                gltfRoot.model.model = model;
                if ( animationClips && animationClips.length > 0 ) {
                    gltfRoot.animComponent = new AnimationComponent();
                }
                if ( gltfRoot.animComponent ) {
                    // Add all animations to the model's animation component
                    for (var i = 0; i < animationClips.length; i++) {
                        animationClips[i].transferToRoot(gltfRoot);
                        gltfRoot.animComponent.addClip(animationClips[i]);
                    }
                    gltfRoot.animComponent.playClip(animationClips[0].name);
                }
                // focus the camera on the newly loaded scene
                camera.script.orbitCamera.focusEntity = gltfRoot;
            }, {
                decoderModule: decoderModule,
                basePath: basePath
            });
        });
    }
}

init();
