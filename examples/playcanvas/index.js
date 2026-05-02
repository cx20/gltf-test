import * as pc from 'playcanvas';
import { CameraControls } from 'camera-controls';
import * as dat from 'dat.gui';

function getInitialModelInfo() {
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
    return modelInfo;
}

const pcRoot = '../../libs/playcanvas/v2.14.2';
const DEFAULT_NAME = "[default]";
const initialModelInfo = getInitialModelInfo();
const dropZone = document.getElementById('dropZone');
const dropZoneMessage = document.getElementById('dropZoneMessage');
const fileInput = document.getElementById('fileInput');

// GUI
let gui = new dat.GUI();

var obj = {
//    ROTATE: false, // TODO:
    CAMERA: "",
    LIGHTS: false,
    IBL: true,
    PHYSICS_DEBUG: true,
    VARIANT: "",
}

//let guiRotate = gui.add(obj, 'ROTATE').name('Rotate');
let guiLights = gui.add(obj, 'LIGHTS').name('Lights');
let guiIBL    = gui.add(obj, 'IBL').name('IBL');
let guiPhysicsDebug = gui.add(obj, 'PHYSICS_DEBUG').name('Physics Debug');
let guiVariants = DEFAULT_NAME;
let guiCameras = null;

let decoderModule;

let getAbsolutePathFromRelativePath = function(href) {
    let link = document.createElement("a");
    link.href = href;
    return link.href;
}

function setDropZoneMessage(message, isError) {
    dropZoneMessage.textContent = message;
    dropZone.classList.toggle('error', !!isError);
}

function showDropZone(message, isError) {
    if (message) {
        setDropZoneMessage(message, isError);
    }
    dropZone.classList.remove('hidden');
}

function hideDropZone() {
    dropZone.classList.add('hidden');
    dropZone.classList.remove('dragover');
    dropZone.classList.remove('error');
}

function getFileExtension(name) {
    const lastDot = name.lastIndexOf('.');
    return lastDot >= 0 ? name.slice(lastDot).toLowerCase() : '';
}

function isExternalUri(uri) {
    return uri
        && !uri.startsWith('data:')
        && !uri.startsWith('blob:')
        && !/^[a-z]+:/i.test(uri);
}

function getBasename(path) {
    return path.split('/').pop();
}

function createTrackedObjectUrl(fileOrBlob, objectUrls) {
    const url = URL.createObjectURL(fileOrBlob);
    objectUrls.push(url);
    return url;
}

async function createDroppedModelSource(fileList) {
    const files = Array.from(fileList);
    const modelFile = files.find(function(file) {
        const extension = getFileExtension(file.name);
        return extension === '.glb' || extension === '.gltf';
    });

    if (!modelFile) {
        throw new Error('Please drop a .glb or .gltf file.');
    }

    const fileMap = new Map();
    files.forEach(function(file) {
        fileMap.set(file.name, file);
        fileMap.set(getBasename(file.name), file);
        if (file.webkitRelativePath) {
            fileMap.set(file.webkitRelativePath, file);
            fileMap.set(getBasename(file.webkitRelativePath), file);
        }
    });

    const objectUrls = [];
    const resourceUrls = new Map();

    if (getFileExtension(modelFile.name) === '.glb') {
        return {
            url: createTrackedObjectUrl(modelFile, objectUrls),
            filename: modelFile.name,
            displayName: modelFile.name,
            scale: 1,
            objectUrls: objectUrls,
        };
    }

    const gltfJson = JSON.parse(await modelFile.text());

    function resolveObjectUrl(uri) {
        if (!isExternalUri(uri)) {
            return uri;
        }
        const decodedUri = decodeURIComponent(uri);
        const file = fileMap.get(decodedUri) || fileMap.get(getBasename(decodedUri));
        if (!file) {
            return uri;
        }
        if (!resourceUrls.has(file)) {
            resourceUrls.set(file, createTrackedObjectUrl(file, objectUrls));
        }
        return resourceUrls.get(file);
    }

    if (Array.isArray(gltfJson.buffers)) {
        gltfJson.buffers.forEach(function(buffer) {
            if (buffer.uri) buffer.uri = resolveObjectUrl(buffer.uri);
        });
    }
    if (Array.isArray(gltfJson.images)) {
        gltfJson.images.forEach(function(image) {
            if (image.uri) image.uri = resolveObjectUrl(image.uri);
        });
    }

    const gltfBlob = new Blob([JSON.stringify(gltfJson)], { type: 'model/gltf+json' });
    return {
        url: createTrackedObjectUrl(gltfBlob, objectUrls),
        filename: modelFile.name,
        displayName: modelFile.name,
        scale: 1,
        objectUrls: objectUrls,
    };
}

function buildModelSourceFromInfo(modelInfo) {
    let url = "../../" + modelInfo.category + "/" + modelInfo.path;
    url = getAbsolutePathFromRelativePath(url);
    if (modelInfo.url) {
        url = modelInfo.url;
    }
    return {
        modelInfo: modelInfo,
        url: url,
        filename: url.split('/').pop(),
        displayName: modelInfo.name || url.split('/').pop(),
        scale: modelInfo.scale,
    };
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

    // Initialize Ammo-based physics if Ammo.js loaded successfully
    if (typeof Ammo !== 'undefined' && app.systems.rigidbody) {
        app.systems.rigidbody.gravity.set(0, -9.81, 0);
        app.systems.rigidbody.onLibraryLoaded();
    }

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
    
    let scale = initialModelInfo?.scale || 1;

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
    this.cameraControls = script;
    
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

    light.enabled = obj.LIGHTS;
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
    this.physicsDebugEntities = [];
    this.dynamicEntities = [];
    this.gravityOverrides = [];
    this.gravityApplied = false;
    this.manualDynamicBodies = [];
    this.meshStaticEntities = [];
    this.asset = null;
    this.animationMap = {};
    this.morphMap = {};
    this.currentObjectUrls = [];
    this.currentModelInfo = initialModelInfo;
    this.currentScale = scale;

    // Per-frame updates: sync manual Ammo bodies, apply deferred gravity overrides on
    // first frame (PlayCanvas Ammo bodies are created during the first physics update,
    // not synchronously during addComponent), then draw the physics debug overlay.
    let tmpAmmoTransform = null;
    app.on('update', () => {
        if (self.manualDynamicBodies.length > 0 && typeof Ammo !== 'undefined') {
            if (!tmpAmmoTransform) tmpAmmoTransform = new Ammo.btTransform();
            for (const mb of self.manualDynamicBodies) {
                mb.motionState.getWorldTransform(tmpAmmoTransform);
                const o = tmpAmmoTransform.getOrigin();
                const r = tmpAmmoTransform.getRotation();
                mb.entity.setPosition(o.x(), o.y(), o.z());
                mb.entity.setRotation(r.x(), r.y(), r.z(), r.w());
            }
        }
        if (!self.gravityApplied && self.gravityOverrides.length > 0 && typeof Ammo !== 'undefined') {
            self.gravityApplied = true;
            const BT_DISABLE_WORLD_GRAVITY = 1;
            for (const { entity, factor } of self.gravityOverrides) {
                const body = entity.rigidbody?.body;
                if (!body) continue;
                body.setFlags(body.getFlags() | BT_DISABLE_WORLD_GRAVITY);
                const g = new Ammo.btVector3(0, -9.81 * factor, 0);
                body.setGravity(g);
                body.activate(true);
                Ammo.destroy(g);
            }
        }
        if (!obj.PHYSICS_DEBUG) return;
        drawPhysicsDebug(app, self.physicsDebugEntities);
        for (const mb of self.manualDynamicBodies) {
            if (mb.entity.render) {
                for (const mi of mb.entity.render.meshInstances) {
                    const c = mi.aabb.center, h = mi.aabb.halfExtents;
                    const mat = new pc.Mat4().setTranslate(c.x, c.y, c.z);
                    _drawWireBoxLocal(app, mat, h.x, h.y, h.z, _DBG_COLOR_DYNAMIC);
                }
            }
        }
        for (const e of self.meshStaticEntities) {
            if (e.render) {
                for (const mi of e.render.meshInstances) {
                    const c = mi.aabb.center, h = mi.aabb.halfExtents;
                    const mat = new pc.Mat4().setTranslate(c.x, c.y, c.z);
                    _drawWireBoxLocal(app, mat, h.x, h.y, h.z, _DBG_COLOR_STATIC);
                }
            }
        }
    });

    // start the application
    app.start();

    if (initialModelInfo) {
        self.loadModelSource(buildModelSourceFromInfo(initialModelInfo));
    } else {
        showDropZone('Drag & drop a .glb or .gltf model here, or click to choose files.');
    }
};

Object.assign(Viewer.prototype, {
    revokeCurrentObjectUrls: function() {
        this.currentObjectUrls.forEach(function(url) {
            URL.revokeObjectURL(url);
        });
        this.currentObjectUrls = [];
    },

    clearModelControls: function() {
        obj.VARIANT = DEFAULT_NAME;
        if (guiVariants && guiVariants !== DEFAULT_NAME) {
            gui.remove(guiVariants);
            guiVariants = DEFAULT_NAME;
        }
        if (guiCameras) {
            gui.remove(guiCameras);
            guiCameras = null;
        }
    },

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

        this.entities = [];
        this.physicsDebugEntities = [];
        this.dynamicEntities = [];
        this.gravityOverrides = [];
        this.gravityApplied = false;
        this.manualDynamicBodies = [];
        this.meshStaticEntities = [];
        this.animationMap = {};
        this.morphMap = {};
    },

    // move the camera to view the loaded object
    focusCamera: function() {
        let entity = this.entity;
        if (!entity) return;
        const camera = this.camera;
        const controls = this.cameraControls;
        if (!controls) return;

        if (this.dynamicEntities && this.dynamicEntities.length > 0) {
            // For enclosed physics scenes, focus on dynamic bodies only to avoid
            // the room/ceiling geometry placing the camera inside the structure.
            const { center, radius } = computeBodyBounds(this.dynamicEntities);
            const startPos = new pc.Vec3(center.x, center.y + 1.5, center.z + radius);
            controls.reset(center, startPos);
            camera.camera.nearClip = radius / 100;
            camera.camera.farClip = radius * 20;
            this.light.light.shadowDistance = radius * 2;
        } else {
            const scale = this.currentScale || 1;
            const renderComps = entity.findComponents('render');
            let aabb = null;
            renderComps.forEach((rc) => {
                rc.meshInstances.forEach((mi) => {
                    if (!aabb) { aabb = mi.aabb.clone(); }
                    else { aabb.add(mi.aabb); }
                });
            });
            const center = aabb ? aabb.center.clone() : new pc.Vec3(0, 0, 0);
            const radius = aabb ? aabb.halfExtents.length() * 2.5 : (5 / scale);
            const startPos = new pc.Vec3(center.x, center.y, center.z + radius);
            controls.reset(center, startPos);
            camera.camera.nearClip = radius / 10;
            camera.camera.farClip = radius * 10;
            this.light.light.shadowDistance = radius * 2;
        }
    },

    // load model at the url
    load: function(url, filename) {
        this.app.assets.loadFromUrlAndFilename(url, filename, "container", this._onLoaded.bind(this));
    },

    loadModelSource: function(modelSource) {
        this.currentModelInfo = modelSource.modelInfo || null;
        this.currentScale = modelSource.scale || 1;
        this.revokeCurrentObjectUrls();
        this.currentObjectUrls = modelSource.objectUrls || [];
        this.clearModelControls();
        showDropZone('Loading model...');
        this.load(modelSource.url, modelSource.filename);
    },

    // play the animation
    play: function(animationName) {
        if (!animationName) {
            for (let key in this.animationMap) {
                if (this.animationMap.hasOwnProperty(key)) {
                    try {
                        this.animationMap[key].play('default');
                    } catch (e) {
                        console.warn('Animation play error:', key, e.message);
                    }
                }
            }
        }
        if (animationName && this.animationMap[animationName]) {
            try {
                this.animationMap[animationName].play('default');
            } catch (e) {
                console.warn('Animation play error:', animationName, e.message);
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
        if (err) {
            console.error(err);
            if (this.currentObjectUrls.length > 0) {
                this.revokeCurrentObjectUrls();
            }
            showDropZone('Failed to load model: ' + (err.message || err), true);
            return;
        }

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
        }

        this.app.root.addChild(entity);
        this.entities.push(entity);
        this.entity = entity;
        this.asset = asset;

        // KHR_physics_rigid_bodies: attach rigidbody/collision components if extension is present
        const gltfJson = resource.data?.gltf;
        if (gltfJson && (gltfJson.extensions?.KHR_physics_rigid_bodies || gltfJson.extensions?.KHR_implicit_shapes)) {
            if (typeof Ammo === 'undefined' || !this.app.systems.rigidbody) {
                console.warn('KHR physics: Ammo.js / rigidbody system unavailable; physics will not run');
            } else {
                const dynamicsWorld = this.app.systems.rigidbody.dynamicsWorld;
                const entityMap = buildEntityMap(resource.data, entity);
                const { debugEntities, dynamicEntities, gravityOverrides, manualDynamicBodies, meshStaticEntities } =
                    initPhysics(gltfJson, entityMap, dynamicsWorld, resource.data);
                this.physicsDebugEntities = debugEntities;
                this.dynamicEntities = dynamicEntities;
                this.gravityOverrides = gravityOverrides;
                this.manualDynamicBodies = manualDynamicBodies;
                this.meshStaticEntities = meshStaticEntities;
                this.gravityApplied = false;
            }
        }

        let variants;

        // update mesh stats
        variants = variants || (resource.getMaterialVariants && resource.getMaterialVariants()) || [];
        let variantNames = variants.reduce(function (allNames, name) { 
            allNames[name] = name;
            return allNames
        }, {});

        if (variants.length > 0 ) {
            variantNames[DEFAULT_NAME] = DEFAULT_NAME;
            guiVariants = gui.add(obj, 'VARIANT', variantNames).name("Variant");
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
        hideDropZone();
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

function handleDragEvent(event) {
    event.preventDefault();
    event.stopPropagation();
}

function setDragActive(isActive) {
    dropZone.classList.toggle('dragover', isActive);
    if (isActive) {
        setDropZoneMessage('Drop glTF/glb files here');
        dropZone.classList.remove('hidden');
    } else if (!viewer || !viewer.entity) {
        showDropZone('Drag & drop a .glb or .gltf model here, or click to choose files.');
    } else {
        hideDropZone();
    }
}

async function handleModelFiles(fileList) {
    if (!fileList || fileList.length === 0) {
        return;
    }
    if (!viewer) {
        showDropZone('Viewer is still starting. Please try again in a moment.', true);
        return;
    }
    try {
        const modelSource = await createDroppedModelSource(fileList);
        viewer.loadModelSource(modelSource);
    } catch (error) {
        console.error(error);
        showDropZone('Failed to load model: ' + error.message, true);
    }
}

function setupDropZone() {
    dropZone.addEventListener('click', function() {
        fileInput.click();
    });
    dropZone.addEventListener('dragenter', function(event) {
        handleDragEvent(event);
        setDragActive(true);
    });
    dropZone.addEventListener('dragover', function(event) {
        handleDragEvent(event);
        setDragActive(true);
    });
    dropZone.addEventListener('dragleave', function(event) {
        handleDragEvent(event);
        if (event.target === dropZone) {
            setDragActive(false);
        }
    });
    dropZone.addEventListener('drop', async function(event) {
        handleDragEvent(event);
        setDragActive(false);
        await handleModelFiles(event.dataTransfer.files);
    });
    fileInput.addEventListener('change', async function(event) {
        await handleModelFiles(event.target.files);
        fileInput.value = '';
    });
    document.addEventListener('dragenter', function(event) {
        handleDragEvent(event);
        setDragActive(true);
    });
    document.addEventListener('dragover', handleDragEvent);
    document.addEventListener('drop', async function(event) {
        handleDragEvent(event);
        setDragActive(false);
        await handleModelFiles(event.dataTransfer.files);
    });
}

setupDropZone();

// Configure Ammo.js (PlayCanvas's recommended physics backend) and start the
// app once the runtime is ready. If Ammo fails to load (e.g. offline), the
// physics extension simply will not be applied.
pc.WasmModule.setConfig('Ammo', {
    glueUrl:     pcRoot + '/ammo/ammo.wasm.js',
    wasmUrl:     pcRoot + '/ammo/ammo.wasm.wasm',
    fallbackUrl: pcRoot + '/ammo/ammo.js',
});
pc.WasmModule.getInstance('Ammo', () => main());

// ---- KHR_physics_rigid_bodies helpers (PlayCanvas / Ammo) ----

// Map a glTF node index -> cloned PlayCanvas Entity by walking the original
// glTF hierarchy and the cloned entity tree in parallel. Children are matched
// by name with a forward cursor so cloned light/camera children inserted by
// PlayCanvas do not break alignment.
function buildEntityMap(data, clonedRoot) {
    const gltfJson = data.gltf;
    const nodes = gltfJson.nodes ?? [];
    const map = new Array(nodes.length).fill(null);

    function nameMap(children) {
        const m = new Map();
        for (const child of children) {
            const n = child.name ?? '';
            if (!m.has(n)) m.set(n, []);
            m.get(n).push(child);
        }
        return m;
    }

    function walk(nodeIndex, entity) {
        if (!entity || nodeIndex < 0) return;
        map[nodeIndex] = entity;
        const childIndices = nodes[nodeIndex].children ?? [];
        if (!childIndices.length) return;
        const byName = nameMap(entity.children);
        for (const ci of childIndices) {
            const cName = nodes[ci]?.name ?? '';
            const candidates = byName.get(cName);
            if (candidates?.length) walk(ci, candidates.shift());
        }
    }

    const scenes = gltfJson.scenes ?? [];
    const sceneRoots = scenes.length === 1 ? [clonedRoot] : clonedRoot.children;
    for (let s = 0; s < scenes.length; s++) {
        const sceneRoot = sceneRoots[s];
        if (!sceneRoot) continue;
        const rootIndices = scenes[s].nodes ?? [];
        if (rootIndices.length === 1 && sceneRoot.name === (nodes[rootIndices[0]]?.name ?? '')) {
            walk(rootIndices[0], sceneRoot);
            continue;
        }
        const byName = nameMap(sceneRoot.children);
        for (const ri of rootIndices) {
            const rName = nodes[ri]?.name ?? '';
            const candidates = byName.get(rName);
            if (candidates?.length) walk(ri, candidates.shift());
        }
    }
    return map;
}

function getCollisionDataFromImplicit(shapeDef, worldScale) {
    const sx = Math.abs(worldScale.x);
    const sy = Math.abs(worldScale.y);
    const sz = Math.abs(worldScale.z);
    if (shapeDef.sphere) {
        const r = (shapeDef.sphere.radius ?? 0.5) * Math.max(sx, sy, sz);
        return { type: 'sphere', radius: r };
    }
    if (shapeDef.box) {
        const s = shapeDef.box.size ?? [1, 1, 1];
        return {
            type: 'box',
            halfExtents: new pc.Vec3(
                Math.abs(s[0] * sx) / 2,
                Math.abs(s[1] * sy) / 2,
                Math.abs(s[2] * sz) / 2
            )
        };
    }
    if (shapeDef.capsule) {
        const r  = ((shapeDef.capsule.radiusTop ?? shapeDef.capsule.radius ?? 0.5) +
                    (shapeDef.capsule.radiusBottom ?? shapeDef.capsule.radius ?? 0.5)) / 2 *
                   Math.max(sx, sz);
        const h  = (shapeDef.capsule.height ?? 1.0) * sy + 2 * r;
        return { type: 'capsule', radius: r, height: h, axis: 1 };
    }
    if (shapeDef.cylinder) {
        const r = Math.max(shapeDef.cylinder.radiusTop    ?? shapeDef.cylinder.radius ?? 0.5,
                           shapeDef.cylinder.radiusBottom ?? shapeDef.cylinder.radius ?? 0.5) *
                  Math.max(sx, sz);
        const h = (shapeDef.cylinder.height ?? 1.0) * sy;
        return { type: 'cylinder', radius: r, height: h, axis: 1 };
    }
    console.warn('KHR physics: unsupported implicit shape', shapeDef);
    return null;
}

function getFriction(matDef) {
    if (!matDef) return undefined;
    return matDef.dynamicFriction ?? matDef.staticFriction;
}

// KHR combine rule priority: AVERAGE < MINIMUM < MAXIMUM < MULTIPLY
// When two materials specify different rules, the higher priority wins.
const COMBINE_PRIORITY = { average: 1, minimum: 2, maximum: 3, multiply: 4 };
function pickCombineRule(rule0, rule1) {
    const r0 = rule0 || 'average';
    const r1 = rule1 || 'average';
    return (COMBINE_PRIORITY[r1] > COMBINE_PRIORITY[r0]) ? r1 : r0;
}
function applyCombine(rule, a, b) {
    switch (rule) {
        case 'minimum':  return Math.min(a, b);
        case 'maximum':  return Math.max(a, b);
        case 'multiply': return a * b;
        case 'average':
        default:         return (a + b) * 0.5;
    }
}

// Build a table mapping each glTF collisionFilter index to a PlayCanvas/Bullet
// {group, mask} 16-bit pair. System names are assigned bits in first-seen
// order (max 16, since Bullet's broadphase filter pair is 16-bit).
function buildCollisionFilterTable(gltfJson) {
    const filters = gltfJson.extensions?.KHR_physics_rigid_bodies?.collisionFilters ?? [];
    if (filters.length === 0) {
        console.log('[Physics] No collisionFilters in glTF.');
        return [];
    }
    const systemBit = new Map();
    let nextBit = 0;
    function bitFor(name) {
        if (!systemBit.has(name)) {
            if (nextBit >= 16) {
                console.warn('[Physics] Too many collision systems (>16), ignoring:', name);
                systemBit.set(name, 0);
            } else {
                systemBit.set(name, (1 << nextBit) & 0xFFFF);
                nextBit++;
            }
        }
        return systemBit.get(name);
    }
    const ALL = 0xFFFF;
    const table = filters.map(function (f) {
        let group = 0;
        for (const n of (f.collisionSystems ?? [])) group = (group | bitFor(n)) & 0xFFFF;
        let mask;
        if (Array.isArray(f.collideWithSystems)) {
            mask = 0;
            for (const n of f.collideWithSystems) mask = (mask | bitFor(n)) & 0xFFFF;
        } else if (Array.isArray(f.notCollideWithSystems)) {
            let m = 0;
            for (const n of f.notCollideWithSystems) m = (m | bitFor(n)) & 0xFFFF;
            mask = (ALL & ~m) & 0xFFFF;
        } else {
            mask = ALL;
        }
        return { group: group || ALL, mask };
    });
    const sysDump = {};
    for (const [name, bit] of systemBit) sysDump[name] = '0x' + bit.toString(16).padStart(4, '0');
    console.log('[Physics] systemBit:', sysDump);
    console.log('[Physics] filterTable:', table.map((f, i) => ({
        idx: i,
        raw: filters[i],
        group: '0x' + f.group.toString(16).padStart(4, '0'),
        mask:  '0x' + f.mask.toString(16).padStart(4, '0'),
    })));
    return table;
}

// Compute orbit camera bounds from dynamic bodies only.
// For enclosed scenes (room with ceiling), this avoids the room geometry
// dominating the bounds and placing the camera above/inside the ceiling.
function computeBodyBounds(dynamicEntities) {
    if (!dynamicEntities.length) return { center: new pc.Vec3(0, 2, 0), radius: 15 };
    let minX = Infinity, minY = Infinity, minZ = Infinity;
    let maxX = -Infinity, maxY = -Infinity, maxZ = -Infinity;
    for (const e of dynamicEntities) {
        const p = e.getPosition();
        minX = Math.min(minX, p.x); maxX = Math.max(maxX, p.x);
        minY = Math.min(minY, p.y); maxY = Math.max(maxY, p.y);
        minZ = Math.min(minZ, p.z); maxZ = Math.max(maxZ, p.z);
    }
    const center = new pc.Vec3((minX + maxX) * 0.5, (minY + maxY) * 0.5, (minZ + maxZ) * 0.5);
    const dx = maxX - minX, dy = maxY - minY, dz = maxZ - minZ;
    const diagonal = Math.sqrt(dx * dx + dy * dy + dz * dz);
    return { center, radius: Math.max(diagonal + 8, 15) };
}

// Create a static btBvhTriangleMeshShape from a PlayCanvas entity's render meshes.
// pcMeshes (optional): array of pc.Mesh from containerData.meshes[N] — used when the
// collider references a mesh that isn't on the entity's render component (physics-only nodes).
// Falls back to entity.render.meshInstances when pcMeshes is not supplied.
// Pre-scales vertices by world scale because btBvhTriangleMeshShape.setLocalScaling()
// in Ammo.js does NOT rebuild the internal BVH.
function addAmmoStaticMeshBodyFromEntity(entity, friction, restitution, dynamicsWorld, pcMeshes) {
    const meshes = pcMeshes ?? entity.render?.meshInstances?.map(mi => mi.mesh);
    if (!meshes?.length) {
        console.warn('[Physics] static mesh: no mesh data for "' + (entity?.name ?? '?') + '"');
        return null;
    }
    const ws = entity.getWorldTransform().getScale();
    const sx = Math.abs(ws.x), sy = Math.abs(ws.y), sz = Math.abs(ws.z);
    const btTriMesh = new Ammo.btTriangleMesh(true, true);
    let triCount = 0;
    for (const mesh of meshes) {
        const positions = [], indices = [];
        mesh.getPositions(positions);
        mesh.getIndices(indices);
        for (let t = 0; t < indices.length / 3; t++) {
            const i0 = indices[t*3]   * 3, i1 = indices[t*3+1] * 3, i2 = indices[t*3+2] * 3;
            const v0 = new Ammo.btVector3(positions[i0]*sx, positions[i0+1]*sy, positions[i0+2]*sz);
            const v1 = new Ammo.btVector3(positions[i1]*sx, positions[i1+1]*sy, positions[i1+2]*sz);
            const v2 = new Ammo.btVector3(positions[i2]*sx, positions[i2+1]*sy, positions[i2+2]*sz);
            btTriMesh.addTriangle(v0, v1, v2, false);
            Ammo.destroy(v0); Ammo.destroy(v1); Ammo.destroy(v2);
            triCount++;
        }
    }
    if (triCount === 0) { Ammo.destroy(btTriMesh); return null; }
    const shape = new Ammo.btBvhTriangleMeshShape(btTriMesh, true);
    const p = entity.getPosition(), q = entity.getRotation();
    const xform = new Ammo.btTransform();
    xform.setIdentity();
    xform.setOrigin(new Ammo.btVector3(p.x, p.y, p.z));
    xform.setRotation(new Ammo.btQuaternion(q.x, q.y, q.z, q.w));
    const ms = new Ammo.btDefaultMotionState(xform);
    const li = new Ammo.btVector3(0, 0, 0);
    const rbi = new Ammo.btRigidBodyConstructionInfo(0, ms, shape, li);
    const body = new Ammo.btRigidBody(rbi);
    body.setFriction(friction ?? 0.5);
    body.setRestitution(restitution ?? 0);
    dynamicsWorld.addRigidBody(body);
    Ammo.destroy(xform); Ammo.destroy(li); Ammo.destroy(rbi);
    console.log('[Physics] static mesh body for "' + (entity.name ?? '?') + '", tris=' + triCount +
        ', pos=(' + p.x.toFixed(2) + ',' + p.y.toFixed(2) + ',' + p.z.toFixed(2) + ')' +
        ', scale=(' + sx.toFixed(3) + ',' + sy.toFixed(3) + ',' + sz.toFixed(3) + ')');
    return body;
}

// Create a dynamic btRigidBody for an implicit shape (sphere/box/capsule/cylinder) using
// raw Ammo.js instead of PlayCanvas's collision+rigidbody system. This bypasses any
// PlayCanvas compound-shape timing issues and is the preferred path for single-shape
// dynamic bodies declared via KHR_implicit_shapes.
function addAmmoDynamicImplicitBody(entity, shapeDef, motionDef, worldScale, dynamicsWorld) {
    const sx = Math.abs(worldScale.x);
    const sy = Math.abs(worldScale.y);
    const sz = Math.abs(worldScale.z);
    let shape = null;
    if (shapeDef.sphere) {
        const r = (shapeDef.sphere.radius ?? 0.5) * Math.max(sx, sy, sz);
        shape = new Ammo.btSphereShape(r);
    } else if (shapeDef.box) {
        const s = shapeDef.box.size ?? [1, 1, 1];
        const hx = Math.abs(s[0] * sx) / 2;
        const hy = Math.abs(s[1] * sy) / 2;
        const hz = Math.abs(s[2] * sz) / 2;
        const he = new Ammo.btVector3(hx, hy, hz);
        shape = new Ammo.btBoxShape(he);
        Ammo.destroy(he);
    } else if (shapeDef.capsule) {
        const r = ((shapeDef.capsule.radiusTop    ?? shapeDef.capsule.radius ?? 0.5) +
                   (shapeDef.capsule.radiusBottom ?? shapeDef.capsule.radius ?? 0.5)) / 2 *
                  Math.max(sx, sz);
        const h = (shapeDef.capsule.height ?? 1.0) * sy;
        shape = new Ammo.btCapsuleShape(r, h);
    } else if (shapeDef.cylinder) {
        const r = Math.max(shapeDef.cylinder.radiusTop    ?? shapeDef.cylinder.radius ?? 0.5,
                           shapeDef.cylinder.radiusBottom ?? shapeDef.cylinder.radius ?? 0.5) *
                  Math.max(sx, sz);
        const h = (shapeDef.cylinder.height ?? 1.0) * sy;
        const he = new Ammo.btVector3(r, h / 2, r);
        shape = new Ammo.btCylinderShape(he);
        Ammo.destroy(he);
    } else {
        console.warn('[Physics] unsupported implicit shape for dynamic body', shapeDef);
        return null;
    }
    const rawMass = motionDef?.mass ?? 1;
    const infiniteMass = rawMass === 0 || !Number.isFinite(rawMass);
    const workingMass = infiniteMass ? 1 : rawMass;
    const inertiaDiag = motionDef?.inertiaDiagonal;
    const li = new Ammo.btVector3(0, 0, 0);
    if (inertiaDiag) {
        li.setValue(inertiaDiag[0] ?? 0, inertiaDiag[1] ?? 0, inertiaDiag[2] ?? 0);
    } else {
        shape.calculateLocalInertia(workingMass, li);
    }
    const p = entity.getPosition(), q = entity.getRotation();
    const xform = new Ammo.btTransform();
    xform.setIdentity();
    xform.setOrigin(new Ammo.btVector3(p.x, p.y, p.z));
    xform.setRotation(new Ammo.btQuaternion(q.x, q.y, q.z, q.w));
    const ms = new Ammo.btDefaultMotionState(xform);
    const rbi = new Ammo.btRigidBodyConstructionInfo(workingMass, ms, shape, li);
    const body = new Ammo.btRigidBody(rbi);
    if (infiniteMass) {
        const zero = new Ammo.btVector3(0, 0, 0);
        body.setLinearFactor(zero);
        Ammo.destroy(zero);
    }
    dynamicsWorld.addRigidBody(body);
    Ammo.destroy(xform); Ammo.destroy(li); Ammo.destroy(rbi);
    return { body, motionState: ms };
}

// Create a dynamic btConvexHullShape from a PlayCanvas entity's render meshes.
function addAmmoDynamicConvexBodyFromEntity(entity, motionDef, dynamicsWorld) {
    if (!entity.render?.meshInstances?.length) return null;
    const rawMass = motionDef?.mass ?? 1;
    const infiniteMass = rawMass === 0 || !Number.isFinite(rawMass);
    const workingMass = infiniteMass ? 1 : rawMass;
    const inertiaDiag = motionDef?.inertiaDiagonal;
    const shape = new Ammo.btConvexHullShape();
    let ptCount = 0;
    for (const mi of entity.render.meshInstances) {
        const mesh = mi.mesh;
        const positions = [];
        mesh.getPositions(positions);
        for (let i = 0; i < positions.length; i += 3) {
            const v = new Ammo.btVector3(positions[i], positions[i+1], positions[i+2]);
            shape.addPoint(v, false);
            Ammo.destroy(v);
            ptCount++;
        }
    }
    if (ptCount === 0) { Ammo.destroy(shape); return null; }
    shape.recalcLocalAabb();
    const ws = entity.getWorldTransform().getScale();
    const ls = new Ammo.btVector3(Math.abs(ws.x), Math.abs(ws.y), Math.abs(ws.z));
    shape.setLocalScaling(ls); Ammo.destroy(ls);
    const p = entity.getPosition(), q = entity.getRotation();
    const xform = new Ammo.btTransform();
    xform.setIdentity();
    xform.setOrigin(new Ammo.btVector3(p.x, p.y, p.z));
    xform.setRotation(new Ammo.btQuaternion(q.x, q.y, q.z, q.w));
    const ms = new Ammo.btDefaultMotionState(xform);
    const li = new Ammo.btVector3(0, 0, 0);
    if (inertiaDiag) {
        li.setValue(inertiaDiag[0] ?? 0, inertiaDiag[1] ?? 0, inertiaDiag[2] ?? 0);
    } else {
        shape.calculateLocalInertia(workingMass, li);
    }
    const rbi = new Ammo.btRigidBodyConstructionInfo(workingMass, ms, shape, li);
    const body = new Ammo.btRigidBody(rbi);
    if (infiniteMass) {
        const zero = new Ammo.btVector3(0, 0, 0);
        body.setLinearFactor(zero);
        Ammo.destroy(zero);
    }
    dynamicsWorld.addRigidBody(body);
    Ammo.destroy(xform); Ammo.destroy(li); Ammo.destroy(rbi);
    return { body, motionState: ms };
}

function initPhysics(gltfJson, entityMap, dynamicsWorld, containerData) {
    const matDefs   = gltfJson.extensions?.KHR_physics_rigid_bodies?.physicsMaterials ?? [];
    const shapeDefs = gltfJson.extensions?.KHR_implicit_shapes?.shapes ?? [];
    const nodes     = gltfJson.nodes ?? [];
    const filterTable = buildCollisionFilterTable(gltfJson);

    // Resolve {group, mask} for a body. Bullet has one filter pair per body,
    // so for compound bodies we pick the first collisionFilter found by
    // walking the body-owner subtree (own collider first, then descendants).
    function getFilterForBody(rootIdx) {
        const stack = [rootIdx];
        let firstChildHit = -1;
        while (stack.length) {
            const idx = stack.pop();
            const physExt = nodes[idx]?.extensions?.KHR_physics_rigid_bodies;
            const cf = physExt?.collider?.collisionFilter;
            if (typeof cf === 'number') {
                if (idx === rootIdx) return filterTable[cf] ?? null;
                if (firstChildHit < 0) firstChildHit = cf;
            }
            const ch = nodes[idx]?.children;
            if (ch) for (const c of ch) stack.push(c);
        }
        return firstChildHit >= 0 ? (filterTable[firstChildHit] ?? null) : null;
    }
    function getFilterForCollider(colliderDef) {
        const cf = colliderDef?.collisionFilter;
        if (typeof cf !== 'number') return null;
        return filterTable[cf] ?? null;
    }

    // Build child -> parent index map so we can resolve the nearest ancestor
    // node that owns a rigid body (i.e. has KHR_physics_rigid_bodies.motion).
    // KHR allows compound bodies: a dynamic node provides `motion`, while its
    // descendants supply the actual `collider` shapes. We must group those
    // colliders under the dynamic body via PlayCanvas's `compound` collision.
    const parentOf = new Array(nodes.length).fill(-1);
    for (let i = 0; i < nodes.length; i++) {
        const ch = nodes[i].children;
        if (!ch) continue;
        for (const c of ch) parentOf[c] = i;
    }
    const hasMotion = (i) => !!nodes[i]?.extensions?.KHR_physics_rigid_bodies?.motion;
    function findBodyOwner(nodeIdx) {
        // Returns ancestor (including self) index that has a `motion`, or -1.
        let cur = nodeIdx;
        while (cur >= 0) {
            if (hasMotion(cur)) return cur;
            cur = parentOf[cur];
        }
        return -1;
    }

    // Helper: build a PlayCanvas collision data object from a KHR collider def.
    function buildCollisionData(collider, entity) {
        const geomDef = collider.geometry;
        if (!geomDef) return null;
        const worldScale = entity.getWorldTransform().getScale();
        if (geomDef.shape !== undefined) {
            const shapeDef = shapeDefs[geomDef.shape];
            if (!shapeDef) {
                console.warn('KHR physics: shape index not found:', geomDef.shape);
                return null;
            }
            return { cd: getCollisionDataFromImplicit(shapeDef, worldScale), wireRender: false };
        }
        if (geomDef.mesh !== undefined) {
            return { cd: { type: 'mesh', convexHull: !!geomDef.convexHull }, wireRender: true };
        }
        console.warn('KHR physics: collider geometry has neither shape nor mesh');
        return null;
    }

    // Pass 1: install collision components.
    //  - Body-owner nodes (have `motion`): collision type='compound'. Their own
    //    `collider` (if any) is attached to a child entity so it composes with
    //    descendant colliders into a single compound shape.
    //  - Collider nodes whose body-owner ancestor exists: plain collision
    //    component (no rigidbody) → becomes a child shape of the compound body.
    //  - Collider nodes with no body-owner ancestor: plain collision component
    //    plus a static rigidbody on the same entity.
    const dynamicInfos = []; // { entity, mat }   for materials / debug
    const staticInfos  = []; // { entity, mat }
    const compoundShapeOwners = []; // entities that hold a compound rigidbody
    const standaloneStaticEntities = []; // static collider+rigidbody entities
    const gravityOverrides = [];
    const manualDynamicBodies = []; // raw Ammo bodies for dynamic mesh colliders
    const meshStaticEntities = []; // entities with raw Ammo static mesh bodies (for debug)
    let bodyCount = 0;

    // Categorise every body-owner node:
    //   manualMeshOwners      – own collider is a mesh → raw Ammo (static BVH or dynamic convex)
    //   directImplicitOwners  – own collider is an implicit shape → raw Ammo btSphere/Box/etc.
    //                           (bypasses PlayCanvas collision+rigidbody to avoid compound
    //                           timing issues and shape double-scaling)
    //   (everything else)     – compound body via PlayCanvas collision type='compound'
    const bodyOwnerNodes = [];
    const manualMeshOwners = new Set();
    const directImplicitOwners = new Set();
    for (let i = 0; i < nodes.length; i++) {
        if (!hasMotion(i)) continue;
        const entity = entityMap[i];
        if (!entity) continue;
        const ownGeom = nodes[i].extensions?.KHR_physics_rigid_bodies?.collider?.geometry;
        if (ownGeom?.mesh !== undefined) {
            manualMeshOwners.add(i); // raw Ammo in Pass 2
        } else if (ownGeom?.shape !== undefined) {
            // Simple body: own implicit shape, no compound wrapper needed.
            directImplicitOwners.add(i);
        } else {
            // Compound body (children supply the shapes, or no collider at all).
            entity.addComponent('collision', { type: 'compound' });
        }
        bodyOwnerNodes.push(i);
    }

    // Then walk every node with a collider and place it appropriately.
    for (let i = 0; i < nodes.length; i++) {
        const physExt = nodes[i].extensions?.KHR_physics_rigid_bodies;
        if (!physExt) continue;
        const collider = physExt.collider;
        if (!collider) continue;
        const ownerIdx = findBodyOwner(i);

        if (ownerIdx === i) {
            if (manualMeshOwners.has(i)) continue; // mesh owner → handled as raw Ammo in Pass 2
            if (directImplicitOwners.has(i)) continue; // implicit-shape owner → raw Ammo in Pass 2
            const parentEntity = entityMap[i];
            if (!parentEntity) continue;
            // Compound body that also carries its own collider: reparent the
            // collider onto a synthetic child so the compound gathers it.
            const child = new pc.Entity('__khrCollider');
            parentEntity.addChild(child);
            const built = buildCollisionData(collider, child);
            if (!built || !built.cd) continue;
            child.addComponent('collision', built.cd);
        } else {
            const entity = entityMap[i];
            if (!entity) continue;
            const geomDef = collider.geometry;
            if (!geomDef) continue;

            // Standalone static with mesh collider → raw Ammo btBvhTriangleMeshShape.
            // Look up the pc.Mesh objects from containerData.meshes[N] so the body is
            // built correctly even when the node has no visual mesh (physics-only nodes).
            if (geomDef.mesh !== undefined && ownerIdx < 0 && dynamicsWorld) {
                const mat = collider.physicsMaterial !== undefined
                    ? (matDefs[collider.physicsMaterial] ?? {}) : {};
                const pcMeshes = containerData?.meshes?.[geomDef.mesh];
                const body = addAmmoStaticMeshBodyFromEntity(
                    entity,
                    mat.dynamicFriction ?? mat.staticFriction ?? 0.5,
                    mat.restitution ?? 0,
                    dynamicsWorld,
                    pcMeshes);
                if (body) meshStaticEntities.push(entity);
                bodyCount++;
                continue;
            }

            const built = buildCollisionData(collider, entity);
            if (!built || !built.cd) continue;
            entity.addComponent('collision', built.cd);
            if (ownerIdx < 0) {
                standaloneStaticEntities.push({ entity, collider });
            }
            // else: descendant of a body-owner; the compound parent handles it.
        }
    }

    // Helper used in Pass 2: apply velocity / gravity to a raw Ammo body from motionDef.
    function applyMotionExtras(body, motionDef) {
        if (Array.isArray(motionDef?.linearVelocity)) {
            const v = new Ammo.btVector3(...motionDef.linearVelocity);
            body.setLinearVelocity(v); Ammo.destroy(v);
        }
        if (Array.isArray(motionDef?.angularVelocity)) {
            const v = new Ammo.btVector3(...motionDef.angularVelocity);
            body.setAngularVelocity(v); Ammo.destroy(v);
        }
        if (motionDef?.gravityFactor !== undefined) {
            const BT_DISABLE_WORLD_GRAVITY = 1;
            body.setFlags(body.getFlags() | BT_DISABLE_WORLD_GRAVITY);
            const g = new Ammo.btVector3(0, -9.81 * motionDef.gravityFactor, 0);
            body.setGravity(g); body.activate(true); Ammo.destroy(g);
        }
    }

    // Pass 2: add the rigidbody components.
    for (const i of bodyOwnerNodes) {
        const entity = entityMap[i];
        const motionDef = nodes[i].extensions.KHR_physics_rigid_bodies.motion;
        const isKinematic = !!motionDef?.isKinematic;

        // Mesh-collider body owners: use raw Ammo instead of PlayCanvas compound.
        // If mass=0: static btBvhTriangleMeshShape (correct for floors/walls).
        // If mass>0: dynamic btConvexHullShape (correct for dynamic mesh bodies).
        if (manualMeshOwners.has(i)) {
            if (!isKinematic && dynamicsWorld) {
                const ownCollider0 = nodes[i].extensions.KHR_physics_rigid_bodies.collider;
                const geomDef0 = ownCollider0?.geometry;
                const rawMass0 = motionDef?.mass ?? 1;
                const isZeroMass = rawMass0 === 0 || !Number.isFinite(rawMass0);
                if (isZeroMass) {
                    // Static mesh body — use btBvhTriangleMeshShape for correct concave collisions.
                    const mat0 = (ownCollider0?.physicsMaterial !== undefined)
                        ? (matDefs[ownCollider0.physicsMaterial] ?? {}) : {};
                    const pcMeshes0 = containerData?.meshes?.[geomDef0?.mesh];
                    addAmmoStaticMeshBodyFromEntity(
                        entity,
                        mat0.dynamicFriction ?? mat0.staticFriction ?? 0.5,
                        mat0.restitution ?? 0,
                        dynamicsWorld, pcMeshes0);
                } else {
                    const result = addAmmoDynamicConvexBodyFromEntity(entity, motionDef, dynamicsWorld);
                    if (result) {
                        const { body, motionState } = result;
                        applyMotionExtras(body, motionDef);
                        manualDynamicBodies.push({
                            entity, body, motionState, motionDef,
                            initialPosition: entity.getPosition().clone(),
                            initialRotation: entity.getRotation().clone()
                        });
                    }
                }
            }
            bodyCount++;
            continue;
        }

        // Implicit-shape body owners (sphere/box/capsule/cylinder): bypass PlayCanvas
        // collision+rigidbody system entirely — use raw Ammo shapes to avoid compound
        // timing issues and double-scaling of shape dimensions.
        if (directImplicitOwners.has(i)) {
            if (!isKinematic && dynamicsWorld) {
                const ownCollider1 = nodes[i].extensions.KHR_physics_rigid_bodies.collider;
                const geomDef1 = ownCollider1?.geometry;
                if (geomDef1?.shape !== undefined) {
                    const shapeDef1 = shapeDefs[geomDef1.shape];
                    if (shapeDef1) {
                        const worldScale1 = entity.getWorldTransform().getScale();
                        const result = addAmmoDynamicImplicitBody(
                            entity, shapeDef1, motionDef, worldScale1, dynamicsWorld);
                        if (result) {
                            const { body, motionState } = result;
                            applyMotionExtras(body, motionDef);
                            manualDynamicBodies.push({
                                entity, body, motionState, motionDef,
                                initialPosition: entity.getPosition().clone(),
                                initialRotation: entity.getRotation().clone()
                            });
                        }
                    }
                }
            }
            bodyCount++;
            continue;
        }

        const mass = motionDef?.mass ?? 1;
        const bodyType = isKinematic ? pc.BODYTYPE_KINEMATIC : pc.BODYTYPE_DYNAMIC;
        const rbConfig = { type: bodyType };
        if (bodyType === pc.BODYTYPE_DYNAMIC) rbConfig.mass = mass;
        const filter = getFilterForBody(i);
        if (filter) { rbConfig.group = filter.group; rbConfig.mask = filter.mask; }
        entity.addComponent('rigidbody', rbConfig);
        {
            const rb = entity.rigidbody;
            console.log('[Physics] body(compound) node=' + i + ' name="' + (nodes[i].name ?? '') + '"',
                'type=' + (isKinematic ? 'KINEMATIC' : 'DYNAMIC'),
                'cfgGroup=' + (filter ? '0x' + filter.group.toString(16) : 'default'),
                'cfgMask='  + (filter ? '0x' + filter.mask.toString(16)  : 'default'),
                'rb.group=0x' + (rb?.group ?? 0).toString(16),
                'rb.mask=0x'  + (rb?.mask  ?? 0).toString(16));
        }
        // Material from own collider if any (otherwise default).
        const ownCollider = nodes[i].extensions.KHR_physics_rigid_bodies.collider;
        const mat = (ownCollider?.physicsMaterial !== undefined)
            ? (matDefs[ownCollider.physicsMaterial] ?? {})
            : {};
        compoundShapeOwners.push(entity);
        if (bodyType === pc.BODYTYPE_DYNAMIC) {
            dynamicInfos.push({ entity, mat });
            if (motionDef?.gravityFactor !== undefined) {
                gravityOverrides.push({ entity, factor: motionDef.gravityFactor });
            }
        } else {
            staticInfos.push({ entity, mat });
        }
        bodyCount++;
    }
    for (const { entity, collider } of standaloneStaticEntities) {
        const rbConfig = { type: pc.BODYTYPE_STATIC };
        const filter = getFilterForCollider(collider);
        if (filter) { rbConfig.group = filter.group; rbConfig.mask = filter.mask; }
        entity.addComponent('rigidbody', rbConfig);
        {
            const rb = entity.rigidbody;
            console.log('[Physics] body(static) name="' + (entity.name ?? '') + '"',
                'cfgGroup=' + (filter ? '0x' + filter.group.toString(16) : 'default'),
                'cfgMask='  + (filter ? '0x' + filter.mask.toString(16)  : 'default'),
                'rb.group=0x' + (rb?.group ?? 0).toString(16),
                'rb.mask=0x'  + (rb?.mask  ?? 0).toString(16));
        }
        const mat = (collider.physicsMaterial !== undefined)
            ? (matDefs[collider.physicsMaterial] ?? {})
            : {};
        staticInfos.push({ entity, mat });
        bodyCount++;
    }

    // Second pass: emulate KHR combine rules on top of Bullet's hard-coded
    // multiplicative pair combine. Strategy: pick a representative "ground"
    // material from the static bodies, pre-combine each dynamic body's
    // friction / restitution against it using the KHR rule, then set every
    // static body's friction = restitution = 1 (multiplicative identity)
    // so the dynamic body's pre-combined values pass through unchanged.
    const ground = staticInfos[0]?.mat ?? {};
    for (const info of dynamicInfos) {
        const dynFr = getFriction(info.mat);
        const grdFr = getFriction(ground);
        if (dynFr !== undefined || grdFr !== undefined) {
            const a = dynFr ?? 0.5;
            const b = grdFr ?? 0.5;
            const rule = pickCombineRule(info.mat.frictionCombine, ground.frictionCombine);
            info.entity.rigidbody.friction = applyCombine(rule, a, b);
        }
        const dynRe = info.mat.restitution;
        const grdRe = ground.restitution;
        if (dynRe !== undefined || grdRe !== undefined) {
            const a = dynRe ?? 0;
            const b = grdRe ?? 0;
            const rule = pickCombineRule(info.mat.restitutionCombine, ground.restitutionCombine);
            info.entity.rigidbody.restitution = applyCombine(rule, a, b);
        }
    }
    for (const info of staticInfos) {
        info.entity.rigidbody.friction    = 1;
        info.entity.rigidbody.restitution = 1;
    }

    console.log('KHR physics initialized:', bodyCount, 'bodies (Ammo / PlayCanvas)');

    // Return every entity that ended up with a non-compound collision component
    // (compound parents themselves don't draw — only their child shapes do).
    const debugEntities = [];
    const visit = (e) => {
        if (e.collision && e.collision.type && e.collision.type !== 'compound') {
            debugEntities.push(e);
        }
        for (const c of e.children) visit(c);
    };
    for (const info of dynamicInfos) visit(info.entity);
    for (const info of staticInfos)  visit(info.entity);
    return {
        debugEntities,
        dynamicEntities: [
            ...dynamicInfos.map(info => info.entity),
            ...manualDynamicBodies.map(mb => mb.entity),
        ],
        gravityOverrides,
        manualDynamicBodies,
        meshStaticEntities,
    };
}

// ---- Physics wireframe debug overlay ------------------------------------

const _DBG_COLOR_DYNAMIC = new pc.Color(0, 1, 0, 1);
const _DBG_COLOR_STATIC  = new pc.Color(1, 1, 0, 1);

function _ringPoints(axis, radius, segments, out, mat) {
    // Generates lines forming one ring of `segments` points perpendicular to
    // `axis` (0=X, 1=Y, 2=Z) with given `radius`, and pushes line-pair Vec3s
    // (already transformed by `mat`) into `out`.
    const tmp = new pc.Vec3();
    const transformed = new pc.Vec3();
    let prev = null;
    for (let i = 0; i <= segments; i++) {
        const t = (i / segments) * Math.PI * 2;
        const c = Math.cos(t) * radius;
        const s = Math.sin(t) * radius;
        if      (axis === 0) tmp.set(0, c, s);
        else if (axis === 1) tmp.set(c, 0, s);
        else                 tmp.set(c, s, 0);
        mat.transformPoint(tmp, transformed);
        const cur = transformed.clone();
        if (prev) { out.push(prev); out.push(cur); }
        prev = cur;
    }
}

function _drawWireSphereLocal(app, mat, radius, color) {
    const pts = [];
    const segs = 16;
    _ringPoints(0, radius, segs, pts, mat);
    _ringPoints(1, radius, segs, pts, mat);
    _ringPoints(2, radius, segs, pts, mat);
    const colors = pts.map(() => color);
    app.drawLines(pts, colors, false);
}

function _drawWireBoxLocal(app, mat, hx, hy, hz, color) {
    // Use the engine helper which accepts a transform.
    app.drawWireAlignedBox(
        new pc.Vec3(-hx, -hy, -hz),
        new pc.Vec3( hx,  hy,  hz),
        color, false, undefined, mat
    );
}

function _drawWireCylinderLocal(app, mat, radius, halfHeight, axis, color) {
    const pts = [];
    const segs = 16;
    // axis 0=X, 1=Y, 2=Z. Build two end caps offset along that axis.
    const offsetA = new pc.Vec3();
    const offsetB = new pc.Vec3();
    if      (axis === 0) { offsetA.set(-halfHeight, 0, 0); offsetB.set(halfHeight, 0, 0); }
    else if (axis === 1) { offsetA.set(0, -halfHeight, 0); offsetB.set(0, halfHeight, 0); }
    else                 { offsetA.set(0, 0, -halfHeight); offsetB.set(0, 0, halfHeight); }

    const tmp = new pc.Vec3();
    const transformed = new pc.Vec3();
    const verts = [];
    for (const off of [offsetA, offsetB]) {
        const ring = [];
        for (let i = 0; i <= segs; i++) {
            const t = (i / segs) * Math.PI * 2;
            const c = Math.cos(t) * radius;
            const s = Math.sin(t) * radius;
            if      (axis === 0) tmp.set(off.x, c, s);
            else if (axis === 1) tmp.set(c, off.y, s);
            else                 tmp.set(c, s, off.z);
            mat.transformPoint(tmp, transformed);
            ring.push(transformed.clone());
        }
        verts.push(ring);
        for (let i = 0; i < segs; i++) { pts.push(ring[i]); pts.push(ring[i + 1]); }
    }
    // 4 connecting lines between caps.
    const stepIdx = Math.floor(segs / 4);
    for (let k = 0; k < 4; k++) {
        const idx = k * stepIdx;
        pts.push(verts[0][idx]);
        pts.push(verts[1][idx]);
    }
    const colors = pts.map(() => color);
    app.drawLines(pts, colors, false);
}

function _drawWireCapsuleLocal(app, mat, radius, cylinderHalfHeight, axis, color) {
    // Cylinder body + two hemispheres at the ends.
    _drawWireCylinderLocal(app, mat, radius, cylinderHalfHeight, axis, color);
    // Build a translation matrix to each end and draw a sphere.
    const off = new pc.Vec3();
    for (const sign of [-1, 1]) {
        if      (axis === 0) off.set(sign * cylinderHalfHeight, 0, 0);
        else if (axis === 1) off.set(0, sign * cylinderHalfHeight, 0);
        else                 off.set(0, 0, sign * cylinderHalfHeight);
        const local = new pc.Mat4().setTranslate(off.x, off.y, off.z);
        const world = new pc.Mat4().mul2(mat, local);
        _drawWireSphereLocal(app, world, radius, color);
    }
}

const _meshLineCache = new WeakMap();

function _drawWireMesh(app, entity, mat, color) {
    if (!entity.render || !entity.render.meshInstances) return;
    for (const mi of entity.render.meshInstances) {
        const mesh = mi.mesh;
        if (!mesh) continue;
        let cached = _meshLineCache.get(mesh);
        if (!cached) {
            const positions = [];
            const indices = [];
            mesh.getPositions(positions);
            mesh.getIndices(indices);
            // Cap to keep debug overlay fast on big meshes.
            const maxTris = 4096;
            const triCount = Math.min(indices.length / 3, maxTris);
            const linePairs = new Float32Array(triCount * 3 * 2 * 3);
            let w = 0;
            for (let t = 0; t < triCount; t++) {
                const i0 = indices[t * 3] * 3;
                const i1 = indices[t * 3 + 1] * 3;
                const i2 = indices[t * 3 + 2] * 3;
                const ax = positions[i0], ay = positions[i0 + 1], az = positions[i0 + 2];
                const bx = positions[i1], by = positions[i1 + 1], bz = positions[i1 + 2];
                const cx = positions[i2], cy = positions[i2 + 1], cz = positions[i2 + 2];
                linePairs[w++] = ax; linePairs[w++] = ay; linePairs[w++] = az;
                linePairs[w++] = bx; linePairs[w++] = by; linePairs[w++] = bz;
                linePairs[w++] = bx; linePairs[w++] = by; linePairs[w++] = bz;
                linePairs[w++] = cx; linePairs[w++] = cy; linePairs[w++] = cz;
                linePairs[w++] = cx; linePairs[w++] = cy; linePairs[w++] = cz;
                linePairs[w++] = ax; linePairs[w++] = ay; linePairs[w++] = az;
            }
            cached = linePairs;
            _meshLineCache.set(mesh, cached);
        }
        // Transform each line endpoint by mat (entity world transform) and draw.
        const pts = [];
        const tmp = new pc.Vec3();
        const transformed = new pc.Vec3();
        for (let i = 0; i < cached.length; i += 3) {
            tmp.set(cached[i], cached[i + 1], cached[i + 2]);
            mat.transformPoint(tmp, transformed);
            pts.push(transformed.clone());
        }
        const colors = pts.map(() => color);
        app.drawLines(pts, colors, false);
    }
}

// Build a matrix with the entity's world position and rotation but unit scale.
// Shape dimensions (halfExtents, radius, height) are stored in world-space units
// (already multiplied by the entity's world scale during initPhysics), so we must
// NOT apply scale again when drawing — otherwise shapes appear at scale².
function _getPosRotMat(entity) {
    return new pc.Mat4().setTRS(entity.getPosition(), entity.getRotation(), pc.Vec3.ONE);
}

function drawPhysicsDebug(app, entities) {
    for (const entity of entities) {
        const col = entity.collision;
        if (!col || !col.type) continue;
        // Walk up to find the rigidbody owner (compound children don't carry one).
        let rbOwner = entity;
        while (rbOwner && !rbOwner.rigidbody) rbOwner = rbOwner.parent;
        const isDynamic = rbOwner?.rigidbody?.type === pc.BODYTYPE_DYNAMIC;
        const color = isDynamic ? _DBG_COLOR_DYNAMIC : _DBG_COLOR_STATIC;
        switch (col.type) {
            case 'box': {
                const mat = _getPosRotMat(entity);
                const h = col.halfExtents;
                _drawWireBoxLocal(app, mat, h.x, h.y, h.z, color);
                break;
            }
            case 'sphere': {
                const mat = _getPosRotMat(entity);
                _drawWireSphereLocal(app, mat, col.radius, color);
                break;
            }
            case 'capsule': {
                const mat = _getPosRotMat(entity);
                const r = col.radius;
                const cylHalf = Math.max(0, (col.height - 2 * r) * 0.5);
                _drawWireCapsuleLocal(app, mat, r, cylHalf, col.axis ?? 1, color);
                break;
            }
            case 'cylinder': {
                const mat = _getPosRotMat(entity);
                _drawWireCylinderLocal(app, mat, col.radius, col.height * 0.5, col.axis ?? 1, color);
                break;
            }
            case 'mesh': {
                // Mesh vertices are in local space; full world transform (incl. scale) is correct here.
                _drawWireMesh(app, entity, entity.getWorldTransform(), color);
                break;
            }
            default:
                break;
        }
    }
}
