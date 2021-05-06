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

// GUI
let gui = new dat.GUI();

var ROTATE = false;
var CAMERA = "";
var LIGHTS = false;
var IBL = true;
let guiRotate = gui.add(window, 'ROTATE').name('Rotate');
let guiLights = gui.add(window, 'LIGHTS').name('Lights');
let guiIBL    = gui.add(window, 'IBL').name('IBL');
let guiCameras = null;

let decoderModule;

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

    // set a prefiltered cubemap as the skybox
    // Please refer to the following when setting a 6-sided texture different from the prefiltered texture
    // 
    // How to dynamically configure Skybox with JavaScript?
    // https://forum.playcanvas.com/t/how-to-dynamically-configure-skybox-with-javascript/12980
    // 
    // 1. rgbm specification of cubemap is changed to default
    // 2. After constructing the cubemap asset, do cubemapAsset.loadFaces = true; then kick off asset load.
    // 3. Leave resource[0] as `default` and set the rest (resource[1]...resource[6]) to `rgbm`.
    // 
    let cubemapAsset = new pc.Asset('papermill', 'cubemap', {
        url: "../../textures/dds/papermill.dds"
    }, {
        "textures": [
/*
            "../../textures/papermill/specular/specular_right_0.jpg",
            "../../textures/papermill/specular/specular_left_0.jpg",
            "../../textures/papermill/specular/specular_top_0.jpg",
            "../../textures/papermill/specular/specular_bottom_0.jpg",
            "../../textures/papermill/specular/specular_front_0.jpg",
            "../../textures/papermill/specular/specular_back_0.jpg",
*/
            // How do I apply gamma correct to CubeMap textures?
            // https://forum.playcanvas.com/t/how-do-i-apply-gamma-correct-to-cubemap-textures/14741/5
            // 
            // > I suggest re-saving the images with a plain old sRGB color profile instead. 
            // > (GIMP's built in sRGB profile seems to work fine).
            // 
            "../../textures/papermill/environment_GIMP_builtin_sRGB_profile/environment_right_0.jpg",
            "../../textures/papermill/environment_GIMP_builtin_sRGB_profile/environment_left_0.jpg",
            "../../textures/papermill/environment_GIMP_builtin_sRGB_profile/environment_top_0.jpg",
            "../../textures/papermill/environment_GIMP_builtin_sRGB_profile/environment_bottom_0.jpg",
            "../../textures/papermill/environment_GIMP_builtin_sRGB_profile/environment_front_0.jpg",
            "../../textures/papermill/environment_GIMP_builtin_sRGB_profile/environment_back_0.jpg",
        ],
        "magFilter": 1,
        "minFilter": 5,
        "anisotropy": 1,
        "name": "Papermill",
        // 1. rgbm specification of cubemap is changed to default
        // https://forum.playcanvas.com/t/how-to-dynamically-configure-skybox-with-javascript/12980/8
        //"rgbm": true,
        "prefiltered": "papermill.dds"
    });

    cubemapAsset.ready(function () {
        app.scene.gammaCorrection = pc.GAMMA_SRGB;
        app.scene.toneMapping = pc.TONEMAP_ACES;
        app.scene.skyboxMip = 0;
        // 3. Leave resource[0] as `default` and set the rest (resource[1]...resource[6]) to `rgbm`.
        // https://forum.playcanvas.com/t/how-to-dynamically-configure-skybox-with-javascript/12980/10
        for (let i = 1; i < cubemapAsset.resources.length; i++ ) {
            cubemapAsset.resources[i].type = "rgbm";
        }
        app.scene.setSkybox(cubemapAsset.resources);
    });
    app.assets.add(cubemapAsset);
    // 2. After constructing the cubemap asset, do cubemapAsset.loadFaces = true; then kick off asset load.
    // https://forum.playcanvas.com/t/how-to-dynamically-configure-skybox-with-javascript/12980/6
    cubemapAsset.loadFaces = true;
    app.assets.load(cubemapAsset);

    guiIBL.onChange(function(value) {
        if ( value ) {
            app.scene.skyboxIntensity = 1.0;
        } else {
            app.scene.skyboxIntensity = 0.0;
        }
    });

    // create the orbit camera
    var camera = new pc.Entity("Camera");
    camera.addComponent("camera", {
        fov: 60,
        clearColor: new pc.Color(0.4, 0.45, 0.5)
    });

    // load orbit script
    app.assets.loadFromUrl(
        "../../libs/playcanvas/v1.41.2/orbit-camera.js",
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

            var timer = 0;
            app.on("update", function (deltaTime) {
                if ( ROTATE ) {
                    timer += deltaTime * 20;
                    viewer.camera.camera.entity.script.orbitCamera.yaw = timer;
                }
            });
        });

    // create the light
    var light = new pc.Entity();
    light.addComponent("light", {
        type: "directional",
        color: new pc.Color(1, 1, 1),
        castShadows: true,
        intensity: 0.5,
        shadowBias: 0.2,
        shadowDistance: 5,
        normalOffsetBias: 0.05,
        shadowResolution: 2048
    });
    light.setLocalEulerAngles(45, 30, 0);
    app.root.addChild(light);

    light.enabled = LIGHTS;
    guiLights.onChange(function(value) {
        if ( value ) {
            viewer.light.enabled = true;
        } else {
            viewer.light.enabled = false;
        }
    });

    // store things
    this.app = app;
    this.camera = camera;
    this.light = light;
    this.entity = null;

    let url = "../../" + modelInfo.category + "/" + modelInfo.path;
    url = getAbsolutePathFromRelativePath(url);
    if(modelInfo.url) {
        url = modelInfo.url;
    }
    var filename = url.split('/').pop();
    self.load(url, filename);

    // start the application
    app.start();
};

Object.assign(Viewer.prototype, {
    // reset the viewer, unloading resources
    resetScene: function() {
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

        this.animationMap = {};
        //onAnimationsLoaded([]);
    },

    // move the camera to view the loaded object
    focusCamera: function() {
        var entity = this.entity;
        if (entity) {
            var camera = this.camera;

            if (camera.script && camera.script.orbitCamera) {
                var orbitCamera = camera.script.orbitCamera;
                orbitCamera.focus(entity);

                var distance = orbitCamera.distance;
                camera.camera.nearClip = distance / 10;
                camera.camera.farClip = distance * 10;

                var light = this.light;
                light.light.shadowDistance = distance * 2;
            }
        }
    },

    // load model at the url
    load: function(url, filename) {
        this.app.assets.loadFromUrlAndFilename(url, filename, "container", this._onLoaded.bind(this));
    },

    // play the animation
    play: function(animationName) {
        if (!animationName) {
            for (var key in this.animationMap) {
                if (this.animationMap.hasOwnProperty(key)) {
                    if (animationName) {
                        this.animationMap[key].pause();
                    } else {
                        this.animationMap[key].play('default');
                    }
                }
            }
        }
        if (animationName) {
            this.animationMap[animationName].play('default');
        }
    },

    // stop playing animations
    stop: function() {
        if (this.entity && this.entity.animation) {
            this.entity.animation.enabled = false;
            this.entity.animation.playing = false;
        }
    },

    setSpeed: function(speed) {
        if (this.entity && this.entity.animation) {
            var entity = this.entity;
            if (entity) {
                entity.animation.speed = speed;
            }
        }
    },
    // set the morphing value
    setMorphWeight: function (name, weight) {
        if (this.morphMap.hasOwnProperty(name)) {
            var morphs = this.morphMap[name];
            morphs.forEach(function (morph) {
                morph.instance.setWeight(morph.targetIndex, weight);
            });
            this.dirtyNormals = true;
        }
    },
    _onLoaded: function(err, asset) {
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

                // create the anim component if there isn't one already
                if (!entity.anim) {
                    entity.addComponent('anim', {
                        activate: true
                    });
                }

                var stateGraph = {
                    layers: [],
                    parameters: { }
                };

                // create a layer per animation so we can play them all simultaniously if needed
                for (i = 0; i < resource.animations.length; ++i) {
                    // construct a state graph to include the loaded animations
                    stateGraph.layers.push( {
                        name: asset.name + '_layer_' + i,
                        states: [
                            { name: 'START' },
                            { name: 'default', speed: 1 },
                            { name: 'END' }
                        ],
                        transitions: [
                            {
                                "from": "START",
                                "to": "default",
                                "time": 0,
                                "priority": 0
                            }
                        ]
                    } );
                }

                // construct an anim layer for this set of animations
                entity.anim.loadStateGraph(new pc.AnimStateGraph(stateGraph));

                var animationMap = {};

                // set animations on each layer
                for (i = 0; i < resource.animations.length; ++i) {
                    var animTrack = resource.animations[i].resource;
                    var layer = entity.anim.findAnimationLayer(asset.name + '_layer_' + i);
                    layer.assignAnimation('default', animTrack);
                    layer.pause();
                    animationMap[animTrack.name] = layer;
                }
            

                this.animationMap = animationMap;
                //onAnimationsLoaded(Object.keys(this.animationMap));
            }

            // setup morph targets
            if (entity.model && entity.model.model && entity.model.model.morphInstances.length > 0) {
                var morphInstances = entity.model.model.morphInstances;
                // make a list of all the morph instance target names
                var morphMap = { };
                morphInstances.forEach(function (morphInstance) {
                    morphInstance.morph._targets.forEach(function (target, targetIndex) {
                        if (!morphMap.hasOwnProperty(target.name)) {
                            morphMap[target.name] = [{ instance: morphInstance, targetIndex: targetIndex }];
                        } else {
                            morphMap[target.name].push({ instance: morphInstance, targetIndex: targetIndex });
                        }
                    });
                });

                this.morphMap = morphMap;
               // onMorphTargetsLoaded(Object.keys(morphMap));
            }

            this.app.root.addChild(entity);
            this.entity = entity;
            this.asset = asset;

            this.focusCamera();
            if (resource.model.name == "Fox.gltf/model/0" || resource.model.name == "Fox.glb/model/0") {
                this.play("Run");
            } else if (resource.model.name == "InterpolationTest.gltf/model/0") {
                // TODO: Investigate how to run multiple animations simultaneously
                // InterpolationTest.gltf contains the following animations
                // "Step Scale
                // "Linear Scale"
                // "CubicSpline Scale"
                // "Step Rotation"
                // "CubicSpline Rotation"
                // "Linear Rotation"
                // "Step Translation"
                // "CubicSpline Translation"
                // "Linear Translation"
                this.play("Step Scale");
                this.play("Linear Scale");
                this.play("CubicSpline Scale");
                this.play("Step Rotation");
                this.play("CubicSpline Rotation");
                this.play("Linear Rotation");
                this.play("Step Translation");
                this.play("CubicSpline Translation");
                this.play("Linear Translation");
            } else {
                this.play();
            }
        }
    }
});

var viewer;
function startViewer() {
    viewer = new Viewer(document.getElementById("application"));
}

function main(){
    if (wasmSupported()) {
        loadWasmModuleAsync('DracoDecoderModule', '../../libs/playcanvas/v1.41.2/draco.wasm.js', '../../libs/playcanvas/v1.41.2/draco.wasm.wasm', startViewer);
    } else {
        loadWasmModuleAsync('DracoDecoderModule', '../../libs/playcanvas/v1.41.2/draco.js', '', startViewer);
    }
}

main();
