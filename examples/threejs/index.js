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
    document.getElementById('container').innerHTML = 'Please specify a model to load';
    throw new Error('Model not specified or not found in list.');
}

import * as THREE from 'three';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { HDRCubeTextureLoader } from 'three/addons/loaders/HDRCubeTextureLoader.js';
import { KTX2Loader } from 'three/addons/loaders/KTX2Loader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';

import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';

import { GLTFAnimationPointerExtension } from '@needle-tools/three-animation-pointer';

const params = {
    exposure: 1,
    // for THREE.ACESFilmicToneMapping
    bloomStrength: 0.15,
    bloomThreshold: 0.1,
    bloomRadius: 0.05
};

let gltf = null;
let mixer = null;
let clock = new THREE.Clock();
let axis;
let hemispheric;
let gui;
const DEFAULT_NAME = "[default]";

let state = {
    ROTATE: false,
    AXIS: true,
    CUBEMAP: true,
    IBL: true,
    LIGHTS: false, // The default is to use IBL instead of lights
    BLOOM: false,
    TONEMAP: "NoToneMapping",
    CAMERA: DEFAULT_NAME,
    VARIANT: DEFAULT_NAME,
    PHYSICS_DEBUG: true
}

let scene;
let camera;
let renderer;
let controls;
let hdrCubeMap;
let hdrCubeRenderTarget;
let renderTarget;
let cubeMap;
let width;
let height;
let physicsDebugLines = null;

let composer;

// ---- Physics (Rapier / KHR_physics_rigid_bodies) ----
const RAPIER_PATH = 'https://cdn.skypack.dev/@dimforge/rapier3d-compat@0.17.3';
const RESET_Y_THRESHOLD = -20;
let RAPIER = await import(RAPIER_PATH);
await RAPIER.init();
let physicsWorld = null;
const dynamicBodies = [];

init();
animate();

function resize() {
    let container = document.getElementById('container');
    width = container.offsetWidth;
    height = container.offsetHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize( width, height );
    composer.setSize( width, height );
}

function init() {
    scene = new THREE.Scene();

    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.outputEncoding = THREE.sRGBEncoding; // if >r112, specify outputEncoding instead of gammaOutput
    renderer.setClearColor( 0xaaaaaa );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.physicallyCorrectLights = true; // This will be required for matching the glTF spec.

    hemispheric = new THREE.HemisphereLight( 0xffffff, 0x222222, 3.0 );
    hemispheric.visible = state.LIGHTS; // The default is to use IBL instead of lights
    scene.add(hemispheric);

    camera = new THREE.PerspectiveCamera( 75, 1, 0.1, 10000 );
    camera.position.set(0, 2, 3);
    camera.name = DEFAULT_NAME;
    scene.add( camera );

    const renderScene = new RenderPass( scene, camera );

    const bloomPass = new UnrealBloomPass( new THREE.Vector2( width, height ), 1.0, 0.0, 0.0 );
    bloomPass.threshold = params.bloomThreshold;
    bloomPass.strength = params.bloomStrength;
    bloomPass.radius = params.bloomRadius;

    composer = new EffectComposer( renderer );

    let manager = new THREE.LoadingManager();
    manager.onProgress = function ( item, loaded, total ) {
        console.log( item, loaded, total );
    };

    const loader = new GLTFLoader(manager);
    loader.setCrossOrigin( 'anonymous' );

    const dracoLoader = new DRACOLoader().setDecoderPath( '../../libs/three.js/r184/examples/jsm/libs/draco/gltf/' );
    loader.setDRACOLoader( dracoLoader );

    const ktx2Loader = new KTX2Loader().setTranscoderPath( '../../libs/three.js/r184/examples/jsm/libs/basis/' );
    ktx2Loader.detectSupport( renderer );
    loader.setKTX2Loader( ktx2Loader );
    loader.setMeshoptDecoder( MeshoptDecoder );

    loader.register(p => {
        return new GLTFAnimationPointerExtension(p);
    });
    loader.register(() => ({ name: 'KHR_implicit_shapes',      afterRoot: () => Promise.resolve() }));
    loader.register(() => ({ name: 'KHR_physics_rigid_bodies', afterRoot: () => Promise.resolve() }));

    const scale = modelInfo.scale;
    let url = "../../" + modelInfo.category + "/" + modelInfo.path;
    if(modelInfo.url) {
        url = modelInfo.url;
    }
    loader.load(url, async function (data) {
        gltf = data;
        let object;
        if ( gltf.scene !== undefined ) {
            object = gltf.scene; // default scene
        } else if ( gltf.scenes.length > 0 ) {
            object = gltf.scenes[0]; // other scene
        }
        object.scale.set(scale, scale, scale);
        if (modelInfo.name == "GearboxAssy" ) {
            object.position.set(-159.20*scale, -17.02*scale, -3.21*scale);
        }

        if ( gltf.cameras.length > 0 ) {
            gltf.cameras.push( camera );
            for (let i = 0; i < gltf.cameras.length; i++ ) {
                let camera_ = gltf.cameras[i];
                camera_.name = camera_.name == "" ? "camera" + i : camera_.name;
                camera_.aspect = width / height;
            }
            let cameraNames = gltf.cameras.map(camera => camera.name);
            let guiCameras = gui.add(state, 'CAMERA', cameraNames).name("Camera");

            guiCameras.onChange(function (value) {
                var camera_ = gltf.cameras.find(function(camera_) {
                    return camera_.name === value;
                });
                camera = camera_;
                camera.updateProjectionMatrix();
                renderScene.camera = camera;
            });
        }

        let animations = gltf.animations;
        if ( animations && animations.length ) {
            mixer = new THREE.AnimationMixer( object );
            if (modelInfo.name == "Fox" ) {
                let animation = animations[2]; // 0:Survey, 1:Walk, 2:Run
                mixer.clipAction( animation ).play();
            } else if (modelInfo.name == "MorphStressTest" ) {
                let animation = animations[1]; // 0:Individuals, 1:TheWave, 2:Pulse
                mixer.clipAction( animation ).play();
            } else {
                for ( let i = 0; i < animations.length; i ++ ) {
                    let animation = animations[ i ];
                    mixer.clipAction( animation ).play();
                }
            }
        }
        const hdrUrls = [
            'specular_posx_0.hdr',
            'specular_negx_0.hdr',
            'specular_posy_0.hdr',
            'specular_negy_0.hdr',
            'specular_posz_0.hdr',
            'specular_negz_0.hdr'
        ];
        hdrCubeMap = new HDRCubeTextureLoader()
            .setPath( '../../textures/papermill_hdr/specular/' )
            .load( hdrUrls, function () {

                let pmremGenerator = new THREE.PMREMGenerator( renderer );
                pmremGenerator.compileCubemapShader();

                hdrCubeRenderTarget = pmremGenerator.fromCubemap( hdrCubeMap );

                hdrCubeMap.magFilter = THREE.LinearFilter;
                hdrCubeMap.needsUpdate = true;

                renderTarget = hdrCubeRenderTarget;
                cubeMap = hdrCubeMap;

                let newEnvMap = renderTarget ? renderTarget.texture : null;
                applyEnvMap(object, newEnvMap);

                scene.background = cubeMap;

                renderer.toneMapping = THREE.NoToneMapping;
                //renderer.toneMapping = THREE.ReinhardToneMapping;
                //renderer.toneMapping = THREE.ACESFilmicToneMapping;
                renderer.toneMappingExposure = Math.pow(params.exposure, 4.0);
                composer.addPass( renderScene );
                composer.addPass( bloomPass );
            } );

        scene.add(object);

        // KHR_physics_rigid_bodies: initialize physics if extension is present
        const gltfJson = gltf.parser.json;
        if (gltfJson.extensions?.KHR_physics_rigid_bodies || gltfJson.extensions?.KHR_implicit_shapes) {
            const nodeCount = (gltfJson.nodes ?? []).length;
            scene.updateMatrixWorld(true);
            const threeNodes = await Promise.all(
                Array.from({ length: nodeCount }, (_, i) =>
                    gltf.parser.getDependency('node', i).catch(() => null)
                )
            );
            scene.updateMatrixWorld(true);
            initPhysics(gltfJson, threeNodes);
        }

        // Details of the KHR_materials_variants extension used here can be found below
        // https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_variants
        const parser = gltf.parser;
        if (gltf.userData.gltfExtensions !== undefined) {
            const variantsExtension = gltf.userData.gltfExtensions[ 'KHR_materials_variants' ];
            if (variantsExtension !== undefined) {
                const variants = variantsExtension.variants.map( ( variant ) => variant.name );
                variants.push(DEFAULT_NAME);
                const variantsCtrl = gui.add( state, 'VARIANT', variants ).name( 'Variant' );
                selectVariant( scene, parser, variantsExtension, state.VARIANT );
                variantsCtrl.onChange( ( value ) => selectVariant( scene, parser, variantsExtension, value ) );
            }
        }
    });

    axis = new THREE.AxesHelper(1000);
    scene.add(axis);

    controls = new OrbitControls( camera, renderer.domElement );
    controls.userPan = false;
    controls.userPanSpeed = 0.0;
    controls.maxDistance = 5000.0;
    //controls.maxPolarAngle = Math.PI * 0.495;
    controls.autoRotate = state.ROTATE;
    controls.autoRotateSpeed = -3.0;

    // GUI
    gui = new GUI();
    let guiRotate = gui.add(state, 'ROTATE').name('Rotate');
    let guiAxis = gui.add(state, 'AXIS').name('Axis');
    let guiCubeMap = gui.add(state, 'CUBEMAP').name('CubeMap');
    let guiIbl = gui.add(state, 'IBL').name('IBL');
    let guiLights = gui.add(state, 'LIGHTS').name('Lights');
    let guiBloom = gui.add(state, 'BLOOM').name('Bloom');
    const tonemaps = ["NoToneMapping", "ReinhardToneMapping", "ACESFilmicToneMapping", "NeutralToneMapping"];
    let guiTonemap = gui.add(state, 'TONEMAP', tonemaps).name('Tonemap');
    let guiPhysicsDebug = gui.add(state, 'PHYSICS_DEBUG').name('Physics Debug');

    guiRotate.onChange(function (value) {
        controls.autoRotate = value;
    });
    guiAxis.onChange(function (value) {
        axis.visible = value;
    });
    guiCubeMap.onChange(function (value) {
        scene.background = value ? cubeMap : null;
    });
    guiIbl.onChange(function (value) {
        let object = scene;
        let newEnvMap = (renderTarget && value) ? renderTarget.texture : null;
        applyEnvMap(object, newEnvMap);
    });
    guiLights.onChange(function (value) {
        // TODO: Improvement is needed when displaying KHR_lights_punctual samples.
        hemispheric.visible = value;
    });
    guiBloom.onChange(function (value) {
    });
    guiTonemap.onChange(function(value) {
        if (value == "NoToneMapping") {
            renderer.toneMapping = THREE.NoToneMapping;
            renderer.toneMappingExposure = 1.0;
            bloomPass.strength = 0.15;
            bloomPass.threshold = 0.1;
            bloomPass.radius = 0.05;
        } else if (value == "ReinhardToneMapping") {
            renderer.toneMapping = THREE.ReinhardToneMapping;
            renderer.toneMappingExposure = Math.pow(params.exposure, 4.0);
            bloomPass.strength = 0.15;
            bloomPass.threshold = 0.1;
            bloomPass.radius = 0.05;
        } else if (value == "ACESFilmicToneMapping") {
            renderer.toneMapping = THREE.ACESFilmicToneMapping;
            renderer.toneMappingExposure = Math.pow(params.exposure, 4.0);
            bloomPass.strength = 0.15;
            bloomPass.threshold = 0.1;
            bloomPass.radius = 0.05;
        } else if (value == "NeutralToneMapping") {
            renderer.toneMapping = THREE.NeutralToneMapping;
            renderer.toneMappingExposure = Math.pow(params.exposure, 4.0);
            bloomPass.strength = 0.15;
            bloomPass.threshold = 0.1;
            bloomPass.radius = 0.05;
        }
    });
    document.body.appendChild( renderer.domElement );

    resize();
    window.addEventListener( 'resize', resize, false );
}

function selectVariant( scene, parser, extension, variantName ) {
    const variantIndex = extension.variants.findIndex( ( v ) => v.name.includes( variantName ) );
    scene.traverse( async ( object ) => {
        if ( ! object.isMesh || ! object.userData.gltfExtensions ) return;
        const meshVariantDef = object.userData.gltfExtensions[ 'KHR_materials_variants' ];
        if ( ! meshVariantDef ) return;
        if ( ! object.userData.originalMaterial ) {
            object.userData.originalMaterial = object.material;
        }
        const mapping = meshVariantDef.mappings
            .find( ( mapping ) => mapping.variants.includes( variantIndex ) );
        if ( mapping ) {
            object.material = await parser.getDependency( 'material', mapping.material );
            parser.assignFinalMaterial(object);
            let newEnvMap = renderTarget ? renderTarget.texture : null;
            applyEnvMap(object, newEnvMap);
        } else {
            object.material = object.userData.originalMaterial;
        }
    } );
}

function applyEnvMap(object, envMap) {
    object.traverse( function( node ) {
        if ( node.isMesh ) {
            let materials = Array.isArray( node.material ) ? node.material : [ node.material ];
            materials.forEach( function( material ) {
                // MeshBasicMaterial means that KHR_materials_unlit is set, so reflections are not needed.
                if ( 'envMap' in material && !material.isMeshBasicMaterial ) {
                    material.envMap = envMap;
                    material.needsUpdate = true;
                }
            } );
        }
    } );
}

/*
// https://github.com/mrdoob/three.js/tree/dev/examples/textures/cube/skybox
function getEnvMap() {
    let path = '../../textures/cube/skybox/';
    let format = '.jpg';
    let urls = [
        path + 'px' + format, path + 'nx' + format,
        path + 'py' + format, path + 'ny' + format,
        path + 'pz' + format, path + 'nz' + format
    ];
    let loader = new THREE.CubeTextureLoader();
    loader.setCrossOrigin( 'anonymous' );
    let envMap = loader.load( urls );
    envMap.format = THREE.RGBFormat;
    // The color of the environment map is displayed brighter than r98
    // https://github.com/mrdoob/three.js/issues/15285
    envMap.encoding = THREE.sRGBEncoding;
    return envMap;
}
*/
function getEnvMap() {
    let path = '../../textures/papermill/specular/specular_';
    let format = '.jpg';
    let urls = [
        path + 'right_0' + format, path + 'left_0' + format,
        path + 'top_0' + format, path + 'bottom_0' + format,
        path + 'front_0' + format, path + 'back_0' + format
    ];
    let loader = new THREE.CubeTextureLoader();
    loader.setCrossOrigin( 'anonymous' );
    let envMap = loader.load( urls );
    envMap.format = THREE.RGBFormat;
    // The color of the environment map is displayed brighter than r98
    // https://github.com/mrdoob/three.js/issues/15285
    envMap.encoding = THREE.sRGBEncoding;
    return envMap;
}

function animate() {
    requestAnimationFrame( animate );
    const delta = clock.getDelta();
    if ( mixer ) mixer.update( delta );
    physicsStep(delta);
    controls.update();
    render();
}

function render() {
    renderer.render( scene, camera );
    if (state.BLOOM) {
        composer.render();
    }
}

// ---- KHR_physics_rigid_bodies helpers ----

function collectDescendantColliders(nodes, nodeIndex, result, excludedSet) {
    const node = nodes[nodeIndex];
    for (const ci of (node.children ?? [])) {
        const childExt = nodes[ci].extensions?.KHR_physics_rigid_bodies;
        if (childExt?.motion) continue;
        if (childExt?.collider?.geometry) {
            result.push(ci);
            excludedSet.add(ci);
        }
        collectDescendantColliders(nodes, ci, result, excludedSet);
    }
}

function colliderDescFromImplicit(shapeDef, worldScale) {
    if (shapeDef.sphere) {
        const r = shapeDef.sphere.radius * Math.max(worldScale.x, worldScale.y, worldScale.z);
        return RAPIER.ColliderDesc.ball(r);
    }
    if (shapeDef.capsule) {
        const radiusTop    = shapeDef.capsule.radiusTop    ?? shapeDef.capsule.radius ?? 0.5;
        const radiusBottom = shapeDef.capsule.radiusBottom ?? shapeDef.capsule.radius ?? 0.5;
        const r         = ((radiusTop + radiusBottom) / 2) * Math.max(worldScale.x, worldScale.z);
        const halfShaft = (shapeDef.capsule.height ?? 1.0) * worldScale.y / 2;
        return RAPIER.ColliderDesc.capsule(halfShaft, r);
    }
    if (shapeDef.cylinder) {
        const radiusTop    = shapeDef.cylinder.radiusTop    ?? shapeDef.cylinder.radius ?? 0.5;
        const radiusBottom = shapeDef.cylinder.radiusBottom ?? shapeDef.cylinder.radius ?? 0.5;
        const r     = Math.max(radiusTop, radiusBottom) * Math.max(worldScale.x, worldScale.z);
        const halfH = (shapeDef.cylinder.height ?? 1.0) * worldScale.y / 2;
        return RAPIER.ColliderDesc.cylinder(halfH, r);
    }
    if (shapeDef.box) {
        const s = shapeDef.box.size ?? [1, 1, 1];
        return RAPIER.ColliderDesc.cuboid(
            Math.abs(s[0] * worldScale.x) / 2,
            Math.abs(s[1] * worldScale.y) / 2,
            Math.abs(s[2] * worldScale.z) / 2
        );
    }
    console.warn('KHR physics: unsupported implicit shape', shapeDef);
    return null;
}

function colliderDescFromMeshObject(object3D, isConvex, worldScale) {
    let geometry = null;
    object3D.traverseVisible(o => { if (!geometry && o.isMesh && o.geometry) geometry = o.geometry; });
    if (!geometry) return null;
    const posAttr = geometry.getAttribute('position');
    if (!posAttr) return null;
    const verts = [];
    for (let i = 0; i < posAttr.count; i++) {
        verts.push(
            posAttr.getX(i) * worldScale.x,
            posAttr.getY(i) * worldScale.y,
            posAttr.getZ(i) * worldScale.z
        );
    }
    const posFloat32 = new Float32Array(verts);
    if (isConvex) return RAPIER.ColliderDesc.convexHull(posFloat32) ?? null;
    const rawIdx = geometry.getIndex();
    const indices = rawIdx
        ? new Uint32Array(rawIdx.array)
        : Uint32Array.from({ length: posAttr.count }, (_, i) => i);
    return RAPIER.ColliderDesc.trimesh(posFloat32, indices) ?? null;
}

function makeRigidBodyDesc(threeNode, motionDef, isKinematic) {
    const pos  = new THREE.Vector3();
    const quat = new THREE.Quaternion();
    threeNode.getWorldPosition(pos);
    threeNode.getWorldQuaternion(quat);
    let desc;
    if (!motionDef)       desc = RAPIER.RigidBodyDesc.fixed();
    else if (isKinematic) desc = RAPIER.RigidBodyDesc.kinematicPositionBased();
    else                  desc = RAPIER.RigidBodyDesc.dynamic();
    desc.setTranslation(pos.x, pos.y, pos.z);
    desc.setRotation({ x: quat.x, y: quat.y, z: quat.z, w: quat.w });
    if (motionDef?.gravityFactor !== undefined) desc.setGravityScale(motionDef.gravityFactor);
    // mass=0 means infinite translational mass → lock translations
    if (motionDef?.mass === 0) desc.lockTranslations();
    // inertiaDiagonal: 0 component means infinite rotational inertia for that axis → lock it.
    // Rapier's enabledRotations uses world-space axes, so transform principal axes
    // from body-local space (via inertiaOrientation then body world rotation) first.
    if (motionDef?.inertiaDiagonal) {
        const [ix, iy, iz] = motionDef.inertiaDiagonal;
        if (ix === 0 || iy === 0 || iz === 0) {
            const bodyWorldQuat = new THREE.Quaternion();
            threeNode.getWorldQuaternion(bodyWorldQuat);
            const io = motionDef.inertiaOrientation;
            if (io) bodyWorldQuat.multiply(new THREE.Quaternion(io[0], io[1], io[2], io[3]));
            const diag = [ix, iy, iz];
            const localAxes = [[1,0,0],[0,1,0],[0,0,1]];
            let allowX = false, allowY = false, allowZ = false;
            for (let j = 0; j < 3; j++) {
                if (diag[j] !== 0) {
                    const v = new THREE.Vector3(...localAxes[j]).applyQuaternion(bodyWorldQuat);
                    const ax = Math.abs(v.x), ay = Math.abs(v.y), az = Math.abs(v.z);
                    if (ax >= ay && ax >= az) allowX = true;
                    else if (ay >= ax && ay >= az) allowY = true;
                    else allowZ = true;
                }
            }
            desc.enabledRotations(allowX, allowY, allowZ);
        }
    }
    return desc;
}

function buildColliderDesc(gltfJson, threeNode, geomDef, worldScale, matDef) {
    const shapeDefs  = gltfJson.extensions?.KHR_implicit_shapes?.shapes ?? [];
    const shapeIndex = geomDef.shape;
    let desc = null;
    if (shapeIndex !== undefined) {
        const shapeDef = shapeDefs[shapeIndex];
        if (!shapeDef) { console.warn('KHR physics: shape index not found:', shapeIndex); return null; }
        desc = colliderDescFromImplicit(shapeDef, worldScale);
    } else {
        desc = colliderDescFromMeshObject(threeNode, !!geomDef.convexHull, worldScale);
    }
    if (!desc) { console.warn('KHR physics: failed to build collider for', threeNode.name); return null; }
    if (matDef) {
        if (matDef.staticFriction !== undefined) desc.setFriction(matDef.staticFriction);
        if (matDef.restitution    !== undefined) desc.setRestitution(matDef.restitution);
        // KHR_physics_rigid_bodies combine rules: "average" | "minimum" | "maximum" | "multiply"
        // Rapier defaults to Average, so explicitly forwarding the rule is required for
        // assets like RigidBodies_Materials_01 where two spheres differ only by combine.
        const combineMap = {
            average:  RAPIER.CoefficientCombineRule.Average,
            minimum:  RAPIER.CoefficientCombineRule.Min,
            maximum:  RAPIER.CoefficientCombineRule.Max,
            multiply: RAPIER.CoefficientCombineRule.Multiply,
        };
        if (matDef.frictionCombine && combineMap[matDef.frictionCombine] !== undefined) {
            desc.setFrictionCombineRule(combineMap[matDef.frictionCombine]);
        }
        if (matDef.restitutionCombine && combineMap[matDef.restitutionCombine] !== undefined) {
            desc.setRestitutionCombineRule(combineMap[matDef.restitutionCombine]);
        }
    }
    return desc;
}

function computeApproxInertia(mass, geomDef, gltfJson, worldScale) {
    const shapeDefs = gltfJson.extensions?.KHR_implicit_shapes?.shapes ?? [];
    if (geomDef.shape !== undefined) {
        const s = shapeDefs[geomDef.shape];
        if (s?.sphere) {
            const r = (s.sphere.radius ?? 0.5) * Math.max(worldScale.x, worldScale.y, worldScale.z);
            const I = 0.4 * mass * r * r;
            return { x: I, y: I, z: I };
        }
        if (s?.capsule) {
            const r = ((s.capsule.radiusTop ?? 0.5) + (s.capsule.radiusBottom ?? 0.5)) / 2 * Math.max(worldScale.x, worldScale.z);
            const h = (s.capsule.height ?? 1.0) * worldScale.y;
            const Iy = 0.5 * mass * r * r;
            const Ixz = mass * (r * r / 4 + h * h / 12);
            return { x: Ixz, y: Iy, z: Ixz };
        }
        if (s?.cylinder) {
            const r = Math.max(s.cylinder.radiusTop ?? 0.5, s.cylinder.radiusBottom ?? 0.5) * Math.max(worldScale.x, worldScale.z);
            const h = (s.cylinder.height ?? 1.0) * worldScale.y;
            const Iy = 0.5 * mass * r * r;
            const Ixz = mass * (r * r / 4 + h * h / 12);
            return { x: Ixz, y: Iy, z: Ixz };
        }
        if (s?.box) {
            const sz = s.box.size ?? [1, 1, 1];
            const bx = Math.abs(sz[0] * worldScale.x), by = Math.abs(sz[1] * worldScale.y), bz = Math.abs(sz[2] * worldScale.z);
            return { x: mass / 12 * (by * by + bz * bz), y: mass / 12 * (bx * bx + bz * bz), z: mass / 12 * (bx * bx + by * by) };
        }
    }
    return { x: 0.1 * mass, y: 0.1 * mass, z: 0.1 * mass };
}

function initPhysics(gltfJson, threeNodes) {
    physicsWorld = new RAPIER.World({ x: 0, y: -9.81, z: 0 });
    dynamicBodies.length = 0;
    const matDefs = gltfJson.extensions?.KHR_physics_rigid_bodies?.physicsMaterials ?? [];
    const nodes   = gltfJson.nodes ?? [];
    const excludedIndices = new Set();

    // --- First pass: compound bodies (motion present, no collider on root) ---
    for (let i = 0; i < nodes.length; i++) {
        const physExt = nodes[i].extensions?.KHR_physics_rigid_bodies;
        if (!physExt?.motion || physExt?.collider) continue;
        const childColliderIndices = [];
        collectDescendantColliders(nodes, i, childColliderIndices, excludedIndices);
        if (childColliderIndices.length === 0) continue;
        const threeNode = threeNodes[i];
        if (!threeNode) continue;
        const motionDef   = physExt.motion;
        const isKinematic = !!(motionDef.isKinematic);
        const body        = physicsWorld.createRigidBody(makeRigidBodyDesc(threeNode, motionDef, isKinematic));
        const parentPos  = new THREE.Vector3();
        const parentQuat = new THREE.Quaternion();
        threeNode.getWorldPosition(parentPos);
        threeNode.getWorldQuaternion(parentQuat);
        const parentQuatInv = parentQuat.clone().invert();
        for (const ci of childColliderIndices) {
            const childNode    = threeNodes[ci];
            if (!childNode) continue;
            const childPhys    = nodes[ci].extensions?.KHR_physics_rigid_bodies;
            const childGeomDef = childPhys.collider.geometry;
            const childMatDef  = childPhys.collider.physicsMaterial !== undefined
                ? matDefs[childPhys.collider.physicsMaterial] : null;
            const childPos   = new THREE.Vector3();
            const childQuat  = new THREE.Quaternion();
            const childScale = new THREE.Vector3();
            childNode.getWorldPosition(childPos);
            childNode.getWorldQuaternion(childQuat);
            childNode.getWorldScale(childScale);
            const localPos  = childPos.clone().sub(parentPos).applyQuaternion(parentQuatInv);
            const localQuat = childQuat.clone().premultiply(parentQuatInv).normalize();
            const desc = buildColliderDesc(gltfJson, childNode, childGeomDef, childScale, childMatDef);
            if (!desc) continue;
            desc.setTranslation(localPos.x, localPos.y, localPos.z);
            desc.setRotation({ x: localQuat.x, y: localQuat.y, z: localQuat.z, w: localQuat.w });
            physicsWorld.createCollider(desc, body);
        }
        if (!isKinematic) {
            const ip = new THREE.Vector3(), iq = new THREE.Quaternion();
            threeNode.getWorldPosition(ip);
            threeNode.getWorldQuaternion(iq);
            dynamicBodies.push({ node: threeNode, body, initPos: ip.clone(), initQuat: iq.clone() });
        }
    }

    // --- Second pass: single-shape bodies ---
    for (let i = 0; i < nodes.length; i++) {
        if (excludedIndices.has(i)) continue;
        const physExt = nodes[i].extensions?.KHR_physics_rigid_bodies;
        if (!physExt?.collider?.geometry) continue;
        const threeNode = threeNodes[i];
        if (!threeNode) continue;
        const motionDef   = physExt.motion ?? null;
        const isKinematic = !!(motionDef?.isKinematic);
        const matDef      = physExt.collider.physicsMaterial !== undefined
            ? matDefs[physExt.collider.physicsMaterial] : null;
        const worldScale = new THREE.Vector3();
        threeNode.getWorldScale(worldScale);
        const desc = buildColliderDesc(gltfJson, threeNode, physExt.collider.geometry, worldScale, matDef);
        if (!desc) continue;
        // centerOfMass: make collider massless, set mass props explicitly so Rapier uses the correct COM
        const hasCom = !!(motionDef?.centerOfMass);
        if (hasCom) {
            desc.setDensity(0);
        } else if (motionDef?.mass !== undefined && motionDef.mass > 0) {
            desc.setMass(motionDef.mass);
        }
        if (motionDef?.restitution !== undefined) desc.setRestitution(motionDef.restitution);
        const body = physicsWorld.createRigidBody(makeRigidBodyDesc(threeNode, motionDef, isKinematic));
        physicsWorld.createCollider(desc, body);
        if (hasCom && motionDef) {
            const [cx, cy, cz] = motionDef.centerOfMass;
            const mass = motionDef.mass ?? 1.0;
            const inertia = computeApproxInertia(mass, physExt.collider.geometry, gltfJson, worldScale);
            body.setAdditionalMassProperties(mass, { x: cx, y: cy, z: cz }, inertia, { x: 0, y: 0, z: 0, w: 1 }, true);
        }
        if (motionDef && !isKinematic) {
            const ip = new THREE.Vector3(), iq = new THREE.Quaternion();
            threeNode.getWorldPosition(ip);
            threeNode.getWorldQuaternion(iq);
            dynamicBodies.push({ node: threeNode, body, initPos: ip.clone(), initQuat: iq.clone() });
        }
    }
    console.log('KHR physics initialized:', dynamicBodies.length, 'dynamic bodies');
}

function physicsStep(delta) {
    if (!physicsWorld) return;
    physicsWorld.timestep = Math.min(delta, 1 / 30);
    physicsWorld.step();
    for (const entry of dynamicBodies) {
        const t = entry.body.translation();
        const r = entry.body.rotation();
        if (t.y < RESET_Y_THRESHOLD) {
            entry.body.setTranslation(entry.initPos, true);
            entry.body.setRotation({ x: entry.initQuat.x, y: entry.initQuat.y,
                z: entry.initQuat.z, w: entry.initQuat.w }, true);
            entry.body.setLinvel({ x: 0, y: 0, z: 0 }, true);
            entry.body.setAngvel({ x: 0, y: 0, z: 0 }, true);
            continue;
        }
        const worldPos  = new THREE.Vector3(t.x, t.y, t.z);
        const worldQuat = new THREE.Quaternion(r.x, r.y, r.z, r.w);
        const parent = entry.node.parent;
        if (parent) {
            parent.updateWorldMatrix(true, false);
            // Convert world transform to parent-local without touching node.scale.
            // Decomposing a (compose * invParent) matrix would feed node.scale back
            // into itself when the parent has non-identity scale, causing the local
            // scale to drift exponentially every frame.
            const invParentMat = parent.matrixWorld.clone().invert();
            entry.node.position.copy(worldPos).applyMatrix4(invParentMat);
            const parentWorldQuat = new THREE.Quaternion();
            parent.getWorldQuaternion(parentWorldQuat);
            entry.node.quaternion.copy(parentWorldQuat).invert().multiply(worldQuat);
        } else {
            entry.node.position.copy(worldPos);
            entry.node.quaternion.copy(worldQuat);
        }
    }
    // Rapier physics debug wireframe
    if (state.PHYSICS_DEBUG) {
        const buffers = physicsWorld.debugRender();
        if (!physicsDebugLines) {
            const geo = new THREE.BufferGeometry();
            const mat = new THREE.LineBasicMaterial({ vertexColors: true });
            physicsDebugLines = new THREE.LineSegments(geo, mat);
            scene.add(physicsDebugLines);
        }
        physicsDebugLines.geometry.setAttribute('position', new THREE.BufferAttribute(buffers.vertices, 3));
        // Rapier returns RGBA (4 floats/vertex); LineBasicMaterial needs RGB (3 floats/vertex)
        const rgba = buffers.colors;
        const rgb  = new Float32Array(rgba.length / 4 * 3);
        for (let i = 0; i < rgba.length / 4; i++) {
            rgb[i * 3] = rgba[i * 4]; rgb[i * 3 + 1] = rgba[i * 4 + 1]; rgb[i * 3 + 2] = rgba[i * 4 + 2];
        }
        physicsDebugLines.geometry.setAttribute('color', new THREE.BufferAttribute(rgb, 3));
        physicsDebugLines.visible = true;
    } else if (physicsDebugLines) {
        physicsDebugLines.visible = false;
    }
}
