import * as pc from 'playcanvas';
import { CameraControls } from 'camera-controls';
import * as dat from 'dat.gui';

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
    modelInfo = TutorialComparePbrModelIndex.getCurrentModel();
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

const pcRoot = '../../libs/playcanvas/v2.14.2';
const DEFAULT_NAME = "[default]";

// GUI
let gui = new dat.GUI();
var obj = {
    LIGHTS: false,
    IBL: true,
    VARIANT: "",
}

let guiLights = gui.add(obj, 'LIGHTS').name('Lights');
let guiIBL    = gui.add(obj, 'IBL').name('IBL');
let guiVariants = DEFAULT_NAME;
let guiCameras = null;

let getAbsolutePathFromRelativePath = function(href) {
    let link = document.createElement("a");
    link.href = href;
    return link.href;
}

class Viewer {
    constructor(canvas) {
        this.canvas = canvas;
        this.init(canvas);
    }

    async init(canvas) {
        const gfxOptions = {
            deviceTypes: ['webgpu'],
            glslangUrl: 'https://unpkg.com/@webgpu/glslang@0.0.15/dist/web-devel/glslang.js',
            twgslUrl: 'https://cx20.github.io/webgpu-test/libs/twgsl.js'
        };

        const device = await pc.createGraphicsDevice(canvas, gfxOptions);
        
        const createOptions = new pc.AppOptions();
        createOptions.graphicsDevice = device;
        createOptions.componentSystems = [
            pc.RenderComponentSystem,
            pc.CameraComponentSystem,
            pc.LightComponentSystem,
            pc.ScriptComponentSystem,
            pc.ElementComponentSystem
        ];
        createOptions.resourceHandlers = [
            pc.TextureHandler,
            pc.ContainerHandler,
            pc.ScriptHandler
        ];

        const app = new pc.AppBase(canvas);
        app.init(createOptions);

        let getCanvasSize = () => {
            return {
                width: window.innerWidth,
                height: window.innerHeight
            };
        };

        app.graphicsDevice.maxPixelRatio = window.devicePixelRatio;
        app.scene.gammaCorrection = pc.GAMMA_SRGB;

        let canvasSize = getCanvasSize();
        app.setCanvasFillMode(pc.FILLMODE_NONE, canvasSize.width, canvasSize.height);
        app.setCanvasResolution(pc.RESOLUTION_AUTO);
        
        window.addEventListener("resize", () => {
            let canvasSize = getCanvasSize();
            app.resizeCanvas(canvasSize.width, canvasSize.height);
        });

        await pc.basisInitialize({
            glueUrl:     pcRoot + '/basis/basis.wasm.js',
            wasmUrl:     pcRoot + '/basis/basis.wasm.wasm',
            fallbackUrl: pcRoot + '/basis/basis.js'
        });

        let envAsset = new pc.Asset('papermill', 'texture', {
            url: '../../textures/hdr/papermill_playcanvas_texture-tool.hdr'
        });
        
        app.assets.add(envAsset);
        await new Promise(resolve => {
            envAsset.ready(() => {
                const env = envAsset.resource;
                const skybox = pc.EnvLighting.generateSkyboxCubemap(env);
                app.scene.skybox = skybox;

                const lighting = pc.EnvLighting.generateLightingSource(env);
                const envAtlas = pc.EnvLighting.generateAtlas(lighting);
                app.scene.envAtlas = envAtlas;
                lighting.destroy();
                resolve();
            });
            app.assets.load(envAsset);
        });

        guiIBL.onChange((value) => {
            app.scene.skyboxIntensity = value ? 1.0 : 0.0;
        });

        const depthLayer = app.scene.layers.getLayerById(pc.LAYERID_DEPTH);
        app.scene.layers.remove(depthLayer);
        app.scene.layers.insertOpaque(depthLayer, 2);
        
        let scale = modelInfo.scale;

        const start = new pc.Vec3(0, 0, 5 / scale);
        const camera = new pc.Entity();
        camera.addComponent('camera');
        camera.addComponent('script');
        camera.setPosition(start);
        app.root.addChild(camera);

        const script = camera.script.create(CameraControls, {
            properties: {
                enableFly: false
            }
        });

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

        light.enabled = obj.LIGHTS;
        guiLights.onChange((value) => {
            light.enabled = value;
        });

        this.app = app;
        this.camera = camera;
        this.light = light;
        this.entity = null;
        this.entities = [];
        this.morphMap = {};
        this.animationMap = {};

        await pc.WasmModule.setConfig("DracoDecoderModule", {
            glueUrl:     pcRoot + "/draco/draco.wasm.js",
            wasmUrl:     pcRoot + "/draco/draco.wasm.wasm",
            fallbackUrl: pcRoot + "/draco/draco.js",
        });
        
        await pc.WasmModule.getInstance("DracoDecoderModule");

        let url = "../../" + modelInfo.category + "/" + modelInfo.path;
        url = getAbsolutePathFromRelativePath(url);
        if(modelInfo.url) {
            url = modelInfo.url;
        }
        let filename = url.split('/').pop();

        app.start();
        await this.load(url, filename);
    }

    resetScene() {
        if (this.entity) {
            this.app.root.removeChild(this.entity);
            this.entity.destroy();
            this.entity = null;
        }

        if (this.asset) {
            this.app.assets.remove(this.asset);
            this.asset.unload();
            this.asset = null;
        }

        this.animationMap = {};
        this.morphMap = {};
    }

    focusCamera() {
        if (this.entity) {
            if (this.camera.script && this.camera.script.orbitCamera) {
                let orbitCamera = this.camera.script.orbitCamera;
                orbitCamera.focus(this.entity);

                const scale = modelInfo.scale;
                orbitCamera.distance = 1 / scale * 5; 

                let distance = orbitCamera.distance;
                this.camera.camera.nearClip = distance / 10;
                this.camera.camera.farClip = distance * 10;

                this.light.light.shadowDistance = distance * 2;
            }
        }
    }

    async load(url, filename) {
        return new Promise((resolve, reject) => {
            this.app.assets.loadFromUrlAndFilename(url, filename, "container", (err, asset) => {
                if (err) {
                    reject(err);
                } else {
                    this._onLoaded(err, asset);
                    resolve(asset);
                }
            });
        });
    }

    play(animationName) {
        if (!animationName) {
            for (let key in this.animationMap) {
                if (this.animationMap.hasOwnProperty(key)) {
                    this.animationMap[key].play('default');
                }
            }
        } else {
            if (this.animationMap[animationName]) {
                this.animationMap[animationName].play('default');
            }
        }
    }

    stop() {
        if (this.entity && this.entity.animation) {
            this.entity.animation.enabled = false;
            this.entity.animation.playing = false;
        }
    }

    setSpeed(speed) {
        if (this.entity && this.entity.animation) {
            this.entity.animation.speed = speed;
        }
    }

    setMorphWeight(name, weight) {
        if (this.morphMap.hasOwnProperty(name)) {
            let morphs = this.morphMap[name];
            morphs.forEach(morph => {
                morph.instance.setWeight(morph.targetIndex, weight);
            });
            this.dirtyNormals = true;
        }
    }

    _onLoaded(err, asset) {
        if (!err) {
            this.resetScene();

            let resource = asset.resource;
            let entity = resource.instantiateRenderEntity({
                castShadows: true
            });
            
            const lightComponents = entity.findComponents("light");
            lightComponents.forEach(component => {
                component.enabled = true;
            });
            
            // TODO:
/*
            if (resource.animations && resource.animations.length > 0) {
                if (!entity.anim) {
                    entity.addComponent('anim', {
                        activate: true
                    });
                }

                let stateGraph = {
                    layers: [],
                    parameters: {}
                };

                for (let i = 0; i < resource.animations.length; ++i) {
                    stateGraph.layers.push({
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
                    });
                }

                entity.anim.loadStateGraph(new pc.AnimStateGraph(stateGraph));

                let animationMap = {};
                for (let i = 0; i < resource.animations.length; ++i) {
                    let animTrack = resource.animations[i].resource;
                    let layer = entity.anim.findAnimationLayer(asset.name + '_layer_' + i);
                    layer.assignAnimation('default', animTrack);
                    layer.pause();
                    animationMap[animTrack.name] = layer;
                }

                this.animationMap = animationMap;
            }

            if (entity.model && entity.model.model && entity.model.model.morphInstances.length > 0) {
                let morphInstances = entity.model.model.morphInstances;
                let morphMap = {};
                morphInstances.forEach(morphInstance => {
                    morphInstance.morph._targets.forEach((target, targetIndex) => {
                        if (!morphMap.hasOwnProperty(target.name)) {
                            morphMap[target.name] = [{ instance: morphInstance, targetIndex: targetIndex }];
                        } else {
                            morphMap[target.name].push({ instance: morphInstance, targetIndex: targetIndex });
                        }
                    });
                });

                this.morphMap = morphMap;
            }
*/
            this.app.root.addChild(entity);
            this.entities.push(entity);
            this.entity = entity;
            this.asset = asset;
            
            let variants = resource.getMaterialVariants && resource.getMaterialVariants();
            if (variants && variants.length > 0) {
                let variantNames = variants.reduce((allNames, name) => { 
                    allNames[name] = name;
                    return allNames;
                }, {});

                variantNames[DEFAULT_NAME] = DEFAULT_NAME;
                guiVariants = gui.add(obj, 'VARIANT', variantNames).name("Variant");
                
                guiVariants.onChange((variantName) => {
                    if (variantName !== DEFAULT_NAME) {
                        this.entities.forEach(entity => {
                            this.asset.resource.applyMaterialVariant(entity, variantName);
                        });
                    }
                });
            }

            this.focusCamera();

            if (resource.model.name === "Fox.gltf/model/0" || resource.model.name === "Fox.glb/model/0") {
                this.play("Run");
            } else if (resource.model.name === "InterpolationTest.gltf/model/0") {
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
}

async function startViewer() {
    const canvas = document.getElementById("application");
    return new Viewer(canvas);
}

startViewer();