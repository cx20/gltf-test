'use strict';

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
    modelInfo = TutorialWipExtensionTestModelIndex.getCurrentModel();
}
if (!modelInfo) {
    throw new Error('Model not specified or not found in list.');
}

const pcRoot = '../../libs/playcanvas/v1.69.0';

const DEFAULT_NAME = "[default]";

// GUI
let gui = new dat.GUI();

var ROTATE = false;
var CAMERA = "";
var LIGHTS = false;
var IBL = true;
var VARIANT = "";
let guiRotate = gui.add(window, 'ROTATE').name('Rotate');
let guiLights = gui.add(window, 'LIGHTS').name('Lights');
let guiIBL    = gui.add(window, 'IBL').name('IBL');
let guiVariants = DEFAULT_NAME;
let guiCameras = null;

let decoderModule;

let getAbsolutePathFromRelativePath = function(href) {
    let link = document.createElement("a");
    link.href = href;
    return link.href;
}

let Viewer = function (canvas) {

    let self = this;

    // create the application
    let app = new pc.Application(canvas, {
        graphicsDeviceOptions: {
            alpha: true
        },
        mouse: new pc.Mouse(canvas),
        touch: new pc.TouchDevice(canvas)
    });

    let getCanvasSize = function () {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        };
    };

    app.graphicsDevice.maxPixelRatio = window.devicePixelRatio;
    app.scene.gammaCorrection = pc.GAMMA_SRGB;

    // Set the canvas to fill the window and automatically change resolution to be the same as the canvas size
    let canvasSize = getCanvasSize();
    app.setCanvasFillMode(pc.FILLMODE_NONE, canvasSize.width, canvasSize.height);
    app.setCanvasResolution(pc.RESOLUTION_AUTO);
    window.addEventListener("resize", function () {
        let canvasSize = getCanvasSize();
        app.resizeCanvas(canvasSize.width, canvasSize.height);
    });

    pc.basisInitialize({
        glueUrl:     pcRoot + '/basis/basis.wasm.js',
        wasmUrl:     pcRoot + '/basis/basis.wasm.wasm',
        fallbackUrl: pcRoot + '/basis/basis.js'
    });

    // set a prefiltered cubemap as the skybox
    let envAsset = new pc.Asset('papermill', 'texture', {
        //url: '../../textures/hdr/papermill.hdr'
        url: '../../textures/hdr/papermill_playcanvas_texture-tool.hdr'	// Notes: For v1.62, it seems that HDR reconverted with the following tools is required. https://playcanvas.com/texture-tool
    });
    envAsset.ready(() => {
        const env = envAsset.resource;

        // set the skybox
        const skybox = pc.EnvLighting.generateSkyboxCubemap(env);
        app.scene.skybox = skybox;

        // generate prefiltered lighting (reflections and ambient)
        const lighting = pc.EnvLighting.generateLightingSource(env);
        const envAtlas = pc.EnvLighting.generateAtlas(lighting);
        app.scene.envAtlas = envAtlas;
        lighting.destroy();
    });
    app.assets.add(envAsset);
    app.assets.load(envAsset);

    guiIBL.onChange(function(value) {
        if ( value ) {
            app.scene.skyboxIntensity = 1.0;
        } else {
            app.scene.skyboxIntensity = 0.0;
        }
    });

    // Depth layer is where the framebuffer is copied to a texture to be used in the following layers.
    // Move the depth layer to take place after World and Skydome layers, to capture both of them.
    const depthLayer = app.scene.layers.getLayerById(pc.LAYERID_DEPTH);
    app.scene.layers.remove(depthLayer);
    app.scene.layers.insertOpaque(depthLayer, 2);

    // create the orbit camera
    let camera = new pc.Entity("Camera");
    camera.addComponent("camera", {
        fov: 60,
        clearColor: new pc.Color(0.4, 0.45, 0.5),
        frustumCulling: true	
    });
    camera.camera.requestSceneColorMap(true);

    // load orbit script
    app.assets.loadFromUrl(
        pcRoot + "/orbit-camera.js",
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

            let timer = 0;
            app.on("update", function (deltaTime) {
                if ( ROTATE ) {
                    timer += deltaTime * 20;
                    viewer.camera.camera.entity.script.orbitCamera.yaw = timer;
                }
            });
        });

    // create the light
    let light = new pc.Entity();
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
    this.entities = [];

    let url = "../../" + modelInfo.category + "/" + modelInfo.path;
    url = getAbsolutePathFromRelativePath(url);
    if(modelInfo.url) {
        url = modelInfo.url;
    }
    let filename = url.split('/').pop();
    self.load(url, filename);

    // start the application
    app.start();
};

Object.assign(Viewer.prototype, {
    // reset the viewer, unloading resources
    resetScene: function() {
        let app = this.app;

        let entity = this.entity;
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
        let entity = this.entity;
        if (entity) {
            let camera = this.camera;

            if (camera.script && camera.script.orbitCamera) {
                let orbitCamera = camera.script.orbitCamera;
                orbitCamera.focus(entity);

                // Adjust the camera distance according to the scale parameter
                const scale = modelInfo.scale;
                orbitCamera.distance = 1 / scale * 5; 

                let distance = orbitCamera.distance;
                camera.camera.nearClip = distance / 10;
                camera.camera.farClip = distance * 10;

                let light = this.light;
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
            for (let key in this.animationMap) {
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
            let entity = this.entity;
            if (entity) {
                entity.animation.speed = speed;
            }
        }
    },
    // set the morphing value
    setMorphWeight: function (name, weight) {
        if (this.morphMap.hasOwnProperty(name)) {
            let morphs = this.morphMap[name];
            morphs.forEach(function (morph) {
                morph.instance.setWeight(morph.targetIndex, weight);
            });
            this.dirtyNormals = true;
        }
    },
    _onLoaded: function(err, asset) {
        if (!err) {

            this.resetScene();

            let resource = asset.resource;
            // create entity and add model
            let entity = resource.instantiateRenderEntity({
                castShadows: true
            });
            
            // enable all lights from the glb
            const lightComponents = entity.findComponents("light");
            lightComponents.forEach((component) => {
                component.enabled = true;
            });

            // create animations
            if (resource.animations && resource.animations.length > 0) {

                // create the anim component if there isn't one already
                if (!entity.anim) {
                    entity.addComponent('anim', {
                        activate: true
                    });
                }

                let stateGraph = {
                    layers: [],
                    parameters: { }
                };

                // create a layer per animation so we can play them all simultaniously if needed
                for (let i = 0; i < resource.animations.length; ++i) {
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

                let animationMap = {};

                // set animations on each layer
                for (let i = 0; i < resource.animations.length; ++i) {
                    let animTrack = resource.animations[i].resource;
                    let layer = entity.anim.findAnimationLayer(asset.name + '_layer_' + i);
                    layer.assignAnimation('default', animTrack);
                    layer.pause();
                    animationMap[animTrack.name] = layer;
                }
            

                this.animationMap = animationMap;
                //onAnimationsLoaded(Object.keys(this.animationMap));
            }

            // setup morph targets
            if (entity.model && entity.model.model && entity.model.model.morphInstances.length > 0) {
                let morphInstances = entity.model.model.morphInstances;
                // make a list of all the morph instance target names
                let morphMap = { };
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
            this.entities.push(entity);
            this.entity = entity;
            this.asset = asset;
            
            let variants;

            // update mesh stats
            variants = variants || (resource.getMaterialVariants && resource.getMaterialVariants());
            let variantNames = variants.reduce(function (allNames, name) { 
                allNames[name] = name;
                return allNames
            }, {});

            if (variants.length > 0 ) {
                variantNames[DEFAULT_NAME] = DEFAULT_NAME;
                guiVariants = gui.add(window, 'VARIANT', variantNames).name("Variant");
                let that = this;
                guiVariants.onChange(function (variantName) {
                    if (variantName == DEFAULT_NAME) {
                        // TODO: reset
                    } else {
                        // change variant
                        that.entities.forEach((entity) => {
                            that.asset.resource.applyMaterialVariant(entity, variantName);
                        });
                    }
                });
            }

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

let viewer;
function startViewer() {
    viewer = new Viewer(document.getElementById("application"));
}

function main(){
    pc.WasmModule.setConfig("DracoDecoderModule", {
        glueUrl:     pcRoot + "/draco/draco.wasm.js",
        wasmUrl:     pcRoot + "/draco/draco.wasm.wasm",
        fallbackUrl: pcRoot + "/draco/draco.js",
    });
    
    pc.WasmModule.getInstance("DracoDecoderModule", startViewer);
}

main();
