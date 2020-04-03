let modelInfo = ModelIndex.getCurrentModel();
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

let decoderModule;

/*
let decoderModule;

// create a PlayCanvas application
let canvas = document.getElementById('application');
let app = new pc.Application(canvas, {
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
let camera = new pc.Entity('camera');
camera.addComponent('camera');
camera.addComponent('script');
app.root.addChild(camera);
camera.setLocalPosition(0, 0, 1);

// make the camera interactive
app.assets.loadFromUrl('../../libs/playcanvas/v1.26.0-dev/orbit-camera.js', 'script', function (err, asset) {
    camera.script.create('orbitCamera');
    camera.script.create('keyboardInput');
    camera.script.create('mouseInput');
});

// set a prefiltered cubemap as the skybox
let cubemapAsset = new pc.Asset('papermill', 'cubemap', {
    url: "../../textures/dds/papermill.dds"
}, {
    "textures": [
        "../../textures/papermill/specular/specular_right_0.jpg",
        "../../textures/papermill/specular/specular_left_0.jpg",
        "../../textures/papermill/specular/specular_top_0.jpg",
        "../../textures/papermill/specular/specular_bottom_0.jpg",
        "../../textures/papermill/specular/specular_front_0.jpg",
        "../../textures/papermill/specular/specular_back_0.jpg",
    ],
    "magFilter": 1,
    "minFilter": 5,
    "anisotropy": 1,
    "name": "Papermill",
    "rgbm": true,
    "prefiltered": "papermill.dds"
});
app.assets.add(cubemapAsset);
app.assets.load(cubemapAsset);
cubemapAsset.ready(function () {
    app.scene.skyboxMip = 1;
    app.scene.setSkybox(cubemapAsset.resources);
});

// root entity for loaded gltf scenes which can have more than one root entity
let gltfRoot = new pc.Entity('gltf');
app.root.addChild(gltfRoot);


function loadScript(src) {
    let head = document.getElementsByTagName('head')[0];
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    return new Promise(function (resolve) {
        script.onload = resolve;
        head.appendChild(script);
    });
}

function init(){
    if (true) {//typeof WebAssembly !== 'object') {
        loadScript('../../libs/playcanvas/v1.26.0-dev/draco_decoder.js').then(function () {
            decoderModule = DracoDecoderModule();
            onLoad();
        });
    } else {
        loadScript('../../libs/playcanvas/v1.26.0-dev/draco_wasm_wrapper.js').then(function () {
            fetch('../../libs/playcanvas/v1.26.0-dev/draco_decoder.wasm').then(function (response) {
                response.arrayBuffer().then(function (arrayBuffer) {
                    decoderModule = DracoDecoderModule({ wasmBinary: arrayBuffer });
                    onLoad();
                });
            });
        });
    }
}

function onLoad() {
    let url = "../../" + modelInfo.category + "/" + modelInfo.path;
    if(modelInfo.url) {
        url = modelInfo.url;
    }
    let scale = modelInfo.scale;
    let basePath = url.substring(0, url.lastIndexOf("/")) + "/";
    let ext = url.split(".").pop();
    let isGlb = (ext == "glb") ? true : false;

    // create directional light entity
    let light = new pc.Entity('light');
    light.addComponent('light',);
    app.root.addChild(light);
    light.setEulerAngles(45, 0, 45);
 
    // rotator script
    let Rotate = pc.createScript('rotate');
    Rotate.prototype.update = function (deltaTime) {
        this.entity.rotate(0, -deltaTime * 20, 0);
    };
    // glTF scene root that rotates
    let gltfRoot = new pc.Entity('gltf');

    var localScale = gltfRoot.getLocalScale();
    localScale.x = scale / 5;
    localScale.y = scale / 5;
    localScale.z = scale / 5;
    gltfRoot.setLocalScale(localScale);

    gltfRoot.addComponent('script');
    gltfRoot.script.create('rotate');
    app.root.addChild(gltfRoot);

    if ( isGlb ) {
        let req = new XMLHttpRequest();
        req.open("get", url, true);
        req.responseType = isGlb ? "arraybuffer" : "";
        req.send(null);

        req.onload = function(){
            let arrayBuffer = req.response;
            loadGlb(arrayBuffer, app.graphicsDevice, function (err, res) {
                // Wrap the model as an asset and add to the asset registry
                let asset = new pc.Asset('gltf', 'model', {
                    url: ''
                });
                asset.resource = res.model;
                asset.loaded = true;
                app.assets.add(asset);
                var textures = res.textures;
                var animationClips = res.animations;
        
                // add the loaded scene to the hierarchy
                gltfRoot.addComponent('model', {
                    asset: asset
                });

                // Now that the model is created, after translateAnimation, we have to hook here
                if (animationClips) {
                    for (i = 0; i < animationClips.length; i++) {
                        for(let c = 0; c < animationClips[i].animCurves.length; c++) {
                            let curve = animationClips[i].animCurves[c];
                            if (curve.animTargets[0].targetNode === "model")
                                curve.animTargets[0].targetNode = gltfRoot;
                        }
                    }
                }

                gltfRoot.model.model = res.model;
                if ( animationClips && animationClips.length > 0 ) {
                    gltfRoot.animComponent = new AnimationComponent();
                }
                if ( gltfRoot.animComponent ) {
                    // Add all animations to the model's animation component
                    for (let i = 0; i < animationClips.length; i++) {
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
            let json = asset.resource;
            let gltf = JSON.parse(json);
            loadGltf(gltf, app.graphicsDevice, function (err, res) {
                // Wrap the model as an asset and add to the asset registry
                let asset = new pc.Asset('gltf', 'model', {
                    url: ''
                });
                asset.resource = res.model;
                asset.loaded = true;
                app.assets.add(asset);
                var textures = res.textures;
                var animationClips = res.animations;

                // add the loaded scene to the hierarchy
                gltfRoot.addComponent('model', {
                    asset: asset
                });

                // Now that the model is created, after translateAnimation, we have to hook here
                if (animationClips) {
                    for (i = 0; i < animationClips.length; i++) {
                        for(let c = 0; c < animationClips[i].animCurves.length; c++) {
                            let curve = animationClips[i].animCurves[c];
                            if (curve.animTargets[0].targetNode === "model")
                                curve.animTargets[0].targetNode = gltfRoot;
                        }
                    }
                }

                gltfRoot.model.model = res.model;
                if ( animationClips && animationClips.length > 0 ) {
                    gltfRoot.animComponent = new AnimationComponent();
                }
                if ( gltfRoot.animComponent ) {
                    // Add all animations to the model's animation component
                    for (let i = 0; i < animationClips.length; i++) {
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
*/

var getAbsolutePathFromRelativePath = function(href) {
    var link = document.createElement("a");
    link.href = href;
    return link.href;
}

var Viewer = function (canvas) {

    var self = this;

    // create the application
    var app = new pc.Application(canvas, {
        mouse: new pc.Mouse(canvas),
        touch: new pc.TouchDevice(canvas)
    });

    var getCanvasSize = function () {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        };
    };

    app.graphicsDevice.maxPixelRatio = window.devicePixelRatio;

    // Set the canvas to fill the window and automatically change resolution to be the same as the canvas size
    var canvasSize = getCanvasSize();
    app.setCanvasFillMode(pc.FILLMODE_NONE, canvasSize.width, canvasSize.height);
    app.setCanvasResolution(pc.RESOLUTION_AUTO);
    window.addEventListener("resize", function () {
        var canvasSize = getCanvasSize();
        app.resizeCanvas(canvasSize.width, canvasSize.height);
    });

    // load cubemap background
    //var cubemapAsset = new pc.Asset('helipad.dds', 'cubemap', {
    //    url: assetsFolder + "/cubemaps/helipad.dds"
    //}, {
    //    rgbm: true
    //});
    // set a prefiltered cubemap as the skybox
    let cubemapAsset = new pc.Asset('papermill', 'cubemap', {
        url: "../../textures/dds/papermill.dds"
    }, {
        "textures": [
            "../../textures/papermill/specular/specular_right_0.jpg",
            "../../textures/papermill/specular/specular_left_0.jpg",
            "../../textures/papermill/specular/specular_top_0.jpg",
            "../../textures/papermill/specular/specular_bottom_0.jpg",
            "../../textures/papermill/specular/specular_front_0.jpg",
            "../../textures/papermill/specular/specular_back_0.jpg",
        ],
        "magFilter": 1,
        "minFilter": 5,
        "anisotropy": 1,
        "name": "Papermill",
        "rgbm": true,
        "prefiltered": "papermill.dds"
    });
    cubemapAsset.ready(function () {
        app.scene.gammaCorrection = pc.GAMMA_SRGB;
        app.scene.toneMapping = pc.TONEMAP_ACES;
        app.scene.skyboxMip = 1;                        // Set the skybox to the 128x128 cubemap mipmap level
        app.scene.setSkybox(cubemapAsset.resources);
    });
    app.assets.add(cubemapAsset);
    app.assets.load(cubemapAsset);

    // create the orbit camera
    var camera = new pc.Entity("Camera");
    camera.addComponent("camera", {
        fov: 60,
        clearColor: new pc.Color(0.4, 0.45, 0.5)
    });

    // load orbit script
    app.assets.loadFromUrl(
        "../../libs/playcanvas/v1.26.0-dev/orbit-camera.js",
        "script",
        function (err, asset) {
            // setup orbit script component
            camera.addComponent("script");
            camera.script.create("orbitCamera", {
                attributes: {
                    inertiaFactor: 0.1
                }
            });
            camera.script.create("orbitCameraInputMouse");
            camera.script.create("orbitCameraInputTouch");
            app.root.addChild(camera);
        });

    // create the light
    var light = new pc.Entity();
    light.addComponent("light", {
        type: "directional",
        color: new pc.Color(1, 1, 1),
        castShadows: true,
        intensity: 2,
        shadowBias: 0.2,
        shadowDistance: 5,
        normalOffsetBias: 0.05,
        shadowResolution: 2048
    });
    light.setLocalEulerAngles(45, 30, 0);
    app.root.addChild(light);

    app.start();

    // configure drag and drop
    var preventDefault = function (ev) {
        ev.preventDefault();
    };

//    var dropHandler = function (ev) {
//        ev.preventDefault();
//
//        if (ev.dataTransfer) {
//            var items = ev.dataTransfer.items;
//            if (items && items.length === 1 && items[0].kind === 'file') {
//                var file = items[0].getAsFile();
//                self.load(file.name, URL.createObjectURL(file));
//            }
//        }
//    };

    //window.addEventListener('dragenter', preventDefault, false);
    //window.addEventListener('dragover', preventDefault, false);
    //window.addEventListener('drop', dropHandler, false);

    var graph = new Graph(app, 128);
    app.on('prerender', function () {
        if (self.showGraphs) {
            graph.update();
            graph.render();
        }
    });

    // store things
    this.app = app;
    this.camera = camera;
    this.light = light;
    this.entity = null;
    this.graph = graph;
    this.showGraphs = false;

    let url = "../../" + modelInfo.category + "/" + modelInfo.path;
    url = getAbsolutePathFromRelativePath(url);
    if(modelInfo.url) {
        url = modelInfo.url;
    }
    var filename = url.split('/').pop();
    self.load(filename, url);
};

Object.assign(Viewer.prototype, {
    // reset the viewer, unloading resources
    resetScene: function () {
        var app = this.app;

        var entity = this.entity;
        if (entity) {
            app.root.removeChild(entity);
            entity.destroy();
            this.entity = null;
        }

        if (this.asset) {
            app.assets.remove(this.asset);
            this.asset.unload();
            this.asset = null;
        }

        this.graph.clear();

        this.animationMap = { };
        //onAnimationsLoaded([]);
    },

    // move the camera to view the loaded object
    focusCamera: function () {
        var entity = this.entity;
        if (entity) {
            var camera = this.camera;

            var orbitCamera = camera.script.orbitCamera;
            orbitCamera.focus(entity);

            var distance = orbitCamera.distance;
            camera.camera.nearClip = distance / 10;
            camera.camera.farClip = distance * 10;

            var light = this.light;
            light.light.shadowDistance = distance * 2;
        }
    },

    // load model from the url
    load: function (filename, url) {
        this.app.assets.loadFromUrl(url, "container", this._onLoaded.bind(this), filename);
    },

    // play the animation
    play: function (animationName) {
        if (animationName) {
            this.entity.animation.play(this.animationMap[animationName], 1);
        } else {
            this.entity.animation.playing = true;
        }
    },

    // stop playing animations
    stop: function () {
        this.entity.animation.playing = false;
    },

    setSpeed: function (speed) {
        var entity = this.entity;
        if (entity) {
            entity.animation.speed = speed;
        }
    },

    setGraphs: function (show) {
        this.showGraphs = show;
    },

    _onLoaded: function (err, asset) {
        if (!err) {

            this.resetScene();

            var resource = asset.resource;

            // create entity and add model
            var entity = new pc.Entity();
            entity.addComponent("model", {
                type: "asset",
                asset: resource.model,
                castShadows: true
            });

            // create animations
            if (resource.animations && resource.animations.length > 0) {
                entity.addComponent('animation', {
                    assets: resource.animations.map(function (asset) {
                        return asset.id;
                    }),
                    speed: 1
                });

                var animationMap = {};
                for (var i = 0; i < resource.animations.length; ++i) {
                    var animAsset = resource.animations[i];
                    animationMap[animAsset.resource.name] = animAsset.name;
                }

                this.animationMap = animationMap;
                //onAnimationsLoaded(Object.keys(this.animationMap));

                var createAnimGraphs = function () {
                    var extract = function (index) {
                        return this[index];
                    };

                    var graph = this.graph;
                    var animController = entity.animation.data.animController;
                    var nodes = animController._nodes;
                    var activePose = animController._activePose;

                    for (var i = 0; i < nodes.length; ++i) {
                        var node = nodes[i];

                        graph.addGraph(node,
                                       new pc.Color(1, 0, 0, 1),
                                       extract.bind(activePose, i * 10 + 0));
                        graph.addGraph(node,
                                       new pc.Color(0, 1, 0, 1),
                                       extract.bind(activePose, i * 10 + 1));
                        graph.addGraph(node,
                                       new pc.Color(0, 0, 1, 1),
                                       extract.bind(activePose, i * 10 + 2));

                        graph.addGraph(node,
                                       new pc.Color(1, 0, 0, 1),
                                       extract.bind(activePose, i * 10 + 3));
                        graph.addGraph(node,
                                       new pc.Color(0, 1, 0, 1),
                                       extract.bind(activePose, i * 10 + 4));
                        graph.addGraph(node,
                                       new pc.Color(0, 0, 1, 1),
                                       extract.bind(activePose, i * 10 + 5));
                        graph.addGraph(node,
                                       new pc.Color(1, 1, 0, 1),
                                       extract.bind(activePose, i * 10 + 6));

                        graph.addGraph(node,
                                       new pc.Color(1, 0, 0, 1),
                                       extract.bind(activePose, i * 10 + 7));
                        graph.addGraph(node,
                                       new pc.Color(0, 1, 0, 1),
                                       extract.bind(activePose, i * 10 + 8));
                        graph.addGraph(node,
                                       new pc.Color(0, 0, 1, 1),
                                       extract.bind(activePose, i * 10 + 9));
                    }
                };

                // create animation graphs
                setTimeout(createAnimGraphs.bind(this), 1000);
            }

            this.app.root.addChild(entity);
            this.entity = entity;
            this.asset = asset;

            this.focusCamera();
        }
    }
});

var viewer;

function main(){
    if (true) {//typeof WebAssembly !== 'object') {
        loadScript('../../libs/playcanvas/v1.26.0-dev/draco_decoder.js').then(function () {
            decoderModule = DracoDecoderModule();
            onLoad();
        });
    } else {
        loadScript('../../libs/playcanvas/v1.26.0-dev/draco_wasm_wrapper.js').then(function () {
            fetch('../../libs/playcanvas/v1.26.0-dev/draco_decoder.wasm').then(function (response) {
                response.arrayBuffer().then(function (arrayBuffer) {
                    decoderModule = DracoDecoderModule({ wasmBinary: arrayBuffer });
                    onLoad();
                });
            });
        });
    }
}

function loadScript(src) {
    let head = document.getElementsByTagName('head')[0];
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    return new Promise(function (resolve) {
        script.onload = resolve;
        head.appendChild(script);
    });
}

function onLoad() {
    viewer = new Viewer(document.getElementById("application"));
}

main();
