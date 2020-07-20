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
        app.renderNextFrame = true;                     // ensure we render again when the cubemap arrives
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
        "../../libs/playcanvas/v1.33.0-dev/orbit-camera.js",
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

    // disable autorender
    app.autoRender = false;
    self.prevCameraMat = new pc.Mat4();
    app.on('update', self.update.bind(self));

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
        if (this.entity && this.entity.animation) {
            this.entity.animation.enabled = true;
            if (animationName) {
                this.entity.animation.play(this.animationMap[animationName], 1);
            } else {
                this.entity.animation.playing = true;
            }
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
            this.renderNextFrame();
        }
    },
    update: function () {
        // if the camera has moved since the last render
        var cameraWorldTransform = this.camera.getWorldTransform();
        if (!this.prevCameraMat.equals(cameraWorldTransform)) {
            this.prevCameraMat.copy(cameraWorldTransform);
            this.app.renderNextFrame = true;
        }
        // or an animation is loaded and we're animating
        if (this.entity && this.entity.animation && this.entity.animation.playing) {
            this.app.renderNextFrame = true;
        }
    },
    renderNextFrame: function () {
        this.app.renderNextFrame = true;
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
                entity.addComponent('animation', {
                    assets: resource.animations.map(function(asset) {
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
        loadWasmModuleAsync('DracoDecoderModule', '../../libs/playcanvas/v1.33.0-dev/draco.wasm.js', '../../libs/playcanvas/v1.33.0-dev/draco.wasm.wasm', startViewer);
    } else {
        loadWasmModuleAsync('DracoDecoderModule', '../../libs/playcanvas/v1.33.0-dev/draco.js', '', startViewer);
    }
}

main();
