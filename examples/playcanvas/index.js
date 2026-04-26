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

    // Per-frame KHR physics wireframe debug overlay.
    app.on('update', () => {
        if (!obj.PHYSICS_DEBUG) return;
        if (!self.physicsDebugEntities || self.physicsDebugEntities.length === 0) return;
        drawPhysicsDebug(app, self.physicsDebugEntities);
    });

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

            // KHR_physics_rigid_bodies: attach rigidbody/collision components if extension is present
            const gltfJson = resource.data?.gltf;
            if (gltfJson && (gltfJson.extensions?.KHR_physics_rigid_bodies || gltfJson.extensions?.KHR_implicit_shapes)) {
                if (typeof Ammo === 'undefined' || !this.app.systems.rigidbody) {
                    console.warn('KHR physics: Ammo.js / rigidbody system unavailable; physics will not run');
                } else {
                    const entityMap = buildEntityMap(resource.data, entity);
                    const debugEntities = initPhysics(gltfJson, entityMap);
                    this.physicsDebugEntities = debugEntities;
                }
            }

            let variants;

            // update mesh stats
            variants = variants || (resource.getMaterialVariants && resource.getMaterialVariants());
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
    const map = new Array(data.gltf.nodes.length).fill(null);
    const sceneRoots = data.scenes.length === 1 ? [clonedRoot] : clonedRoot.children;
    for (let s = 0; s < data.scenes.length; s++) {
        zipChildren(data.scenes[s], sceneRoots[s], data.nodes, map);
    }
    return map;
}

function zipChildren(orig, clone, dataNodes, map) {
    if (!orig || !clone) return;
    let cursor = 0;
    for (const oc of orig.children) {
        let matched = null;
        for (let j = cursor; j < clone.children.length; j++) {
            if (clone.children[j].name === oc.name) {
                matched = clone.children[j];
                cursor = j + 1;
                break;
            }
        }
        if (!matched) continue;
        const idx = dataNodes.indexOf(oc);
        if (idx >= 0) map[idx] = matched;
        zipChildren(oc, matched, dataNodes, map);
    }
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

function initPhysics(gltfJson, entityMap) {
    const matDefs   = gltfJson.extensions?.KHR_physics_rigid_bodies?.physicsMaterials ?? [];
    const shapeDefs = gltfJson.extensions?.KHR_implicit_shapes?.shapes ?? [];
    const nodes     = gltfJson.nodes ?? [];

    // First pass: create components; remember per-body the assigned KHR material.
    const dynamicInfos = []; // { entity, mat }
    const staticInfos  = []; // { entity, mat }
    const gravityOverrides = []; // { entity, factor }
    let bodyCount = 0;
    for (let i = 0; i < nodes.length; i++) {
        const physExt = nodes[i].extensions?.KHR_physics_rigid_bodies;
        if (!physExt) continue;
        const entity = entityMap[i];
        if (!entity) continue;
        const motionDef = physExt.motion ?? null;
        const collider  = physExt.collider ?? null;

        // Build collision component from the implicit shape attached to this node,
        // or from a glTF mesh primitive if the collider references one directly.
        let needsRenderWiring = false;
        if (collider?.geometry) {
            const geomDef    = collider.geometry;
            const shapeIndex = geomDef.shape;
            const worldScale = entity.getLocalScale().clone();
            let cd = null;
            if (shapeIndex !== undefined) {
                const shapeDef = shapeDefs[shapeIndex];
                if (!shapeDef) {
                    console.warn('KHR physics: shape index not found:', shapeIndex);
                    continue;
                }
                cd = getCollisionDataFromImplicit(shapeDef, worldScale);
            } else if (geomDef.mesh !== undefined) {
                // Mesh collider: build from the entity's already-instantiated
                // render component. Bullet's btBvhTriangleMeshShape (concave,
                // static) and btConvexHullShape (dynamic) are handled by
                // PlayCanvas's `mesh` collision implementation.
                cd = { type: 'mesh', convexHull: !!geomDef.convexHull };
                needsRenderWiring = true;
            } else {
                console.warn('KHR physics: collider geometry has neither shape nor mesh');
                continue;
            }
            if (!cd) continue;
            entity.addComponent('collision', cd);
            if (needsRenderWiring && entity.render?.meshInstances?.length) {
                // PlayCanvas's mesh-collision implementation expects a Render
                // *resource* with a `meshes` array (not the render component
                // itself). Build a minimal duck-typed object from the entity's
                // already-instantiated render component to trigger the shape
                // build via Ammo's btBvhTriangleMesh / btConvexHullShape.
                const meshes = entity.render.meshInstances.map(mi => mi.mesh);
                entity.collision.render = { meshes };
            }
        }

        // Rigid body component: dynamic when motion is present, static otherwise
        // (collider-only nodes act as the static world).
        const isKinematic = !!(motionDef?.isKinematic);
        const mass        = motionDef?.mass ?? 1;
        const bodyType    = !motionDef
            ? pc.BODYTYPE_STATIC
            : (isKinematic ? pc.BODYTYPE_KINEMATIC : pc.BODYTYPE_DYNAMIC);
        const rbConfig = { type: bodyType };
        if (bodyType === pc.BODYTYPE_DYNAMIC) rbConfig.mass = mass;
        entity.addComponent('rigidbody', rbConfig);

        const mat = (collider?.physicsMaterial !== undefined)
            ? (matDefs[collider.physicsMaterial] ?? {})
            : {};
        if (bodyType === pc.BODYTYPE_DYNAMIC) {
            dynamicInfos.push({ entity, mat });
        } else {
            staticInfos.push({ entity, mat });
        }

        // KHR motion.gravityFactor: 1 = normal gravity, 0 = none, -1 = inverted.
        if (bodyType === pc.BODYTYPE_DYNAMIC && motionDef?.gravityFactor !== undefined) {
            gravityOverrides.push({ entity, factor: motionDef.gravityFactor });
        }
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

    // Apply per-body gravity overrides via Bullet's setGravity. Must run after
    // the rigid body has been created and added to the dynamics world.
    if (gravityOverrides.length > 0 && typeof Ammo !== 'undefined') {
        for (const { entity, factor } of gravityOverrides) {
            const body = entity.rigidbody?.body;
            if (!body) continue;
            const g = new Ammo.btVector3(0, -9.81 * factor, 0);
            body.setGravity(g);
            Ammo.destroy(g);
        }
    }

    console.log('KHR physics initialized:', bodyCount, 'bodies (Ammo / PlayCanvas)');

    // Return the list of entities that own a collision component so the viewer
    // can draw wireframe debug overlays for them each frame.
    const debugEntities = [];
    for (const info of dynamicInfos) debugEntities.push(info.entity);
    for (const info of staticInfos)  debugEntities.push(info.entity);
    return debugEntities;
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

function drawPhysicsDebug(app, entities) {
    for (const entity of entities) {
        const col = entity.collision;
        if (!col || !col.type) continue;
        const isDynamic = entity.rigidbody?.type === pc.BODYTYPE_DYNAMIC;
        const color = isDynamic ? _DBG_COLOR_DYNAMIC : _DBG_COLOR_STATIC;
        const mat = entity.getWorldTransform();
        switch (col.type) {
            case 'box': {
                const h = col.halfExtents;
                _drawWireBoxLocal(app, mat, h.x, h.y, h.z, color);
                break;
            }
            case 'sphere': {
                _drawWireSphereLocal(app, mat, col.radius, color);
                break;
            }
            case 'capsule': {
                // PlayCanvas/Ammo: capsule.height is the length of the
                // cylindrical section *including* the two hemispheres on
                // construction, but the Ammo shape encodes cylinderHalfHeight.
                // We previously set height = cylinderLength + 2*radius, so
                // cylinderHalfHeight = (height - 2r) / 2.
                const r = col.radius;
                const cylHalf = Math.max(0, (col.height - 2 * r) * 0.5);
                _drawWireCapsuleLocal(app, mat, r, cylHalf, col.axis ?? 1, color);
                break;
            }
            case 'cylinder': {
                _drawWireCylinderLocal(app, mat, col.radius, col.height * 0.5, col.axis ?? 1, color);
                break;
            }
            case 'mesh': {
                _drawWireMesh(app, entity, mat, color);
                break;
            }
            default:
                break;
        }
    }
}
