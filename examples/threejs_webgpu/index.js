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

import * as THREE from 'three/webgpu';
import { RenderPipeline } from 'three/webgpu';

import { HDRLoader } from 'three/addons/loaders/HDRLoader.js';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
import { pass, uniform, vec4, max, sub } from 'three/tsl';

// ---- Physics (Rapier / KHR_physics_rigid_bodies) ----
const RAPIER_PATH = 'https://cdn.skypack.dev/@dimforge/rapier3d-compat@0.17.3';
const RESET_Y_THRESHOLD = -20;
let RAPIER = null;
let physicsWorld = null;
let physicsReady = false;
let envReady = false;

function tryStartPhysics() {
    if (physicsReady) return;
    if (!physicsWorld) return;
    if (!envReady) return;
    setTimeout(function() { physicsReady = true; }, 200);
}
const dynamicBodies = [];

const clock = new THREE.Clock();
const DEFAULT_NAME = '[default]';
const initialModelInfo = getInitialModelInfo();
const container = document.getElementById('container');
const dropZone = document.getElementById('dropZone');
const dropZoneMessage = document.getElementById('dropZoneMessage');
const fileInput = document.getElementById('fileInput');

let camera, scene, renderer;
let controls, axis, hemispheric, envTexture, modelRoot, mixer;
let gui;
let guiCameras, guiVariants;
let gltfCameras = [];
let defaultCamera;
let renderPipeline, scenePass;
let bloomMixNode, bloomStrengthNode, bloomThresholdNode, bloomRadiusNode;
let currentObjectUrls = [];

const params = {
    bloomStrength: 0.15,
    bloomThreshold: 0.1,
    bloomRadius: 0.05
};

const state = {
    ROTATE: false,
    AXIS: true,
    CUBEMAP: true,
    IBL: true,
    LIGHTS: false,
    BLOOM: false,
    TONEMAP: 'NoToneMapping',
    CAMERA: DEFAULT_NAME,
    VARIANT: DEFAULT_NAME
};

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

function revokeCurrentObjectUrls() {
    currentObjectUrls.forEach(function(url) {
        URL.revokeObjectURL(url);
    });
    currentObjectUrls = [];
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
            displayName: modelFile.name,
            scale: 1,
            allAnimations: true,
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
        displayName: modelFile.name,
        scale: 1,
        allAnimations: true,
        objectUrls: objectUrls,
    };
}

function buildModelSourceFromInfo(modelInfo) {
    let url = '../../' + modelInfo.category + '/' + modelInfo.path;
    if (modelInfo.url) {
        url = modelInfo.url;
    }
    const urlParams = new URLSearchParams(window.location.search);
    const scaleParam = parseFloat(urlParams.get('scale'));
    const resolvedScale = Number.isFinite(scaleParam) ? scaleParam : modelInfo.scale;
    return {
        modelInfo: modelInfo,
        url: url,
        scale: resolvedScale,
        allAnimations: modelInfo.allAnimations,
    };
}

init().catch(function (error) {
    console.error(error);
});

async function init() {
    defaultCamera = new THREE.PerspectiveCamera( 75, 1, 0.1, 10000 );
    defaultCamera.position.set( 0, 2, 3 );
    defaultCamera.name = DEFAULT_NAME;
    camera = defaultCamera;

    scene = new THREE.Scene();

    renderer = new THREE.WebGPURenderer( { antialias: true/*, compatibilityMode: true*/ } );
    await renderer.init();
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( container.offsetWidth, container.offsetHeight );
    renderer.toneMapping = THREE.NoToneMapping;
    container.appendChild( renderer.domElement );

    scenePass = pass( scene, camera, {
        generateMipmaps: true,
        minFilter: THREE.LinearMipmapLinearFilter,
        magFilter: THREE.LinearFilter
    } );

    renderPipeline = new RenderPipeline( renderer );

    bloomMixNode = uniform( state.BLOOM ? 1.0 : 0.0 );
    bloomStrengthNode = uniform( params.bloomStrength );
    bloomThresholdNode = uniform( params.bloomThreshold );
    bloomRadiusNode = uniform( params.bloomRadius );

    updatePostProcessing();

    hemispheric = new THREE.HemisphereLight( 0xffffff, 0x222222, 3.0 );
    hemispheric.visible = state.LIGHTS;
    scene.add( hemispheric );

    axis = new THREE.AxesHelper( 1000 );
    axis.visible = state.AXIS;
    scene.add( axis );

    controls = new OrbitControls( camera, renderer.domElement );
    controls.userPan = false;
    controls.userPanSpeed = 0.0;
    controls.maxDistance = 5000.0;
    controls.autoRotate = state.ROTATE;
    controls.autoRotateSpeed = -3.0;
    controls.target.set( 0, 0, 0 );
    controls.update();

    gui = new GUI();
    gui.add(state, 'ROTATE').name('Rotate').onChange(function (value) {
        controls.autoRotate = value;
    });
    gui.add(state, 'AXIS').name('Axis').onChange(function (value) {
        axis.visible = value;
    });
    gui.add(state, 'CUBEMAP').name('CubeMap').onChange(updateEnvironment);
    gui.add(state, 'IBL').name('IBL').onChange(updateEnvironment);
    gui.add(state, 'LIGHTS').name('Lights').onChange(function (value) {
        hemispheric.visible = value;
    });
    gui.add(state, 'BLOOM').name('Bloom').onChange(function (value) {
        bloomMixNode.value = value ? 1.0 : 0.0;
    });
    gui.add(params, 'bloomStrength', 0.0, 3.0).name('BloomStrength').onChange(function (value) {
        bloomStrengthNode.value = value;
    });
    gui.add(params, 'bloomThreshold', 0.0, 1.0).name('BloomThreshold').onChange(function (value) {
        bloomThresholdNode.value = value;
    });
    gui.add(params, 'bloomRadius', 0.0, 1.0).name('BloomRadius').onChange(function (value) {
        bloomRadiusNode.value = value;
    });
    gui.add(state, 'TONEMAP', ['NoToneMapping', 'ReinhardToneMapping', 'ACESFilmicToneMapping', 'NeutralToneMapping']).name('Tonemap').onChange(function (value) {
        if (value === 'NoToneMapping') {
            renderer.toneMapping = THREE.NoToneMapping;
            renderer.toneMappingExposure = 1.0;
        } else if (value === 'ReinhardToneMapping') {
            renderer.toneMapping = THREE.ReinhardToneMapping;
            renderer.toneMappingExposure = 1.0;
        } else if (value === 'ACESFilmicToneMapping') {
            renderer.toneMapping = THREE.ACESFilmicToneMapping;
            renderer.toneMappingExposure = 1.0;
        } else if (value === 'NeutralToneMapping') {
            renderer.toneMapping = THREE.NeutralToneMapping;
            renderer.toneMappingExposure = 1.0;
        }
    });

    // Initialize Rapier
    RAPIER = await import(RAPIER_PATH);
    await RAPIER.init();

    new HDRLoader()
        .setPath( '../../textures/hdr/' )
        .load( 'papermill.hdr', function ( texture ) {

            texture.mapping = THREE.EquirectangularReflectionMapping;
            envTexture = texture;

            updateEnvironment();

            // Resources are now loaded. Allow physics to start after a short delay
            // so the first rendered frame shows the scene before bodies start moving.
            envReady = true;
            tryStartPhysics();

        }, undefined, function () {

            console.warn('Failed to load local HDR environment map. Rendering without environment map.');
            updateEnvironment();

            envReady = true;
            tryStartPhysics();

        } );

    window.addEventListener( 'resize', onWindowResize );

    onWindowResize();
    animate();

    setupDropZone();

    if (initialModelInfo) {
        await loadModelSource(buildModelSourceFromInfo(initialModelInfo));
    } else {
        showDropZone('Drag & drop a .glb or .gltf model here, or click to choose files.');
    }

}

function updateEnvironment() {

    scene.environment = (state.IBL && envTexture) ? envTexture : null;
    scene.background = (state.CUBEMAP && envTexture) ? envTexture : null;

}

function updatePostProcessing() {

    if ( !renderPipeline || !scenePass ) return;

    scenePass.camera = camera;

    const sceneColor = scenePass.getTextureNode();
    const blurred = sceneColor.blur( bloomRadiusNode ).rgb;
    const bloomColor = max( sub( blurred, bloomThresholdNode ), 0.0 ).mul( bloomStrengthNode ).mul( bloomMixNode );

    renderPipeline.outputNode = vec4( sceneColor.rgb.add( bloomColor ), sceneColor.a );

}

function resetPhysicsState() {
    dynamicBodies.length = 0;
    physicsWorld = null;
    physicsReady = false;
}

function unloadCurrentModel() {
    mixer = null;
    envReady = !!envTexture;
    resetPhysicsState();
    revokeCurrentObjectUrls();
    state.CAMERA = DEFAULT_NAME;
    state.VARIANT = DEFAULT_NAME;
    gltfCameras = [];
    if ( guiCameras ) {
        gui.remove( guiCameras );
        guiCameras = null;
    }
    if ( guiVariants ) {
        gui.remove( guiVariants );
        guiVariants = null;
    }
    camera = defaultCamera;
    controls.object = camera;
    scenePass.camera = camera;
    updatePostProcessing();
    controls.update();
    if ( modelRoot ) {
        scene.remove( modelRoot );
        modelRoot = null;
    }
}

function createGltfLoader(manager) {
    const loader = new GLTFLoader(manager);
    loader.setCrossOrigin( 'anonymous' );
    loader.register(() => ({ name: 'KHR_implicit_shapes',      afterRoot: () => Promise.resolve() }));
    loader.register(() => ({ name: 'KHR_physics_rigid_bodies', afterRoot: () => Promise.resolve() }));
    return loader;
}

async function loadModel(modelSource) {
    unloadCurrentModel();
    showDropZone('Loading model...');

    let manager = new THREE.LoadingManager();
    manager.onProgress = function ( item, loaded, total ) {
        console.log( item, loaded, total );
    };

    const loader = createGltfLoader(manager);
    const modelInfo = modelSource.modelInfo;
    const resolvedScale = modelSource.scale || 1;

    return new Promise(function(resolve, reject) {
        loader.load( modelSource.url, async function ( gltf ) {
            try {
                modelRoot = gltf.scene || gltf.scenes[0];
                if ( !modelRoot ) {
                    throw new Error('No scene found in the glTF asset.');
                }
                modelRoot.scale.set( resolvedScale, resolvedScale, resolvedScale );
                if ( modelInfo?.name === 'GearboxAssy' ) {
                    modelRoot.position.set( -159.20 * resolvedScale, -17.02 * resolvedScale, -3.21 * resolvedScale );
                }

                if ( gltf.animations && gltf.animations.length ) {
                    mixer = new THREE.AnimationMixer( modelRoot );
                    if ( modelInfo?.name === 'Fox' ) {
                        mixer.clipAction( gltf.animations[2] ).play();
                    } else {
                        for ( let i = 0; i < gltf.animations.length; i ++ ) {
                            mixer.clipAction( gltf.animations[i] ).play();
                        }
                    }
                }

                scene.add( modelRoot );

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

                if ( gltf.cameras && gltf.cameras.length > 0 ) {
                    gltfCameras = [ defaultCamera ].concat(gltf.cameras);
                    const width = container.offsetWidth;
                    const height = container.offsetHeight;

                    for ( let i = 0; i < gltfCameras.length; i ++ ) {
                        const c = gltfCameras[i];
                        c.name = c.name && c.name !== '' ? c.name : 'camera' + i;
                        c.aspect = width / height;
                        c.updateProjectionMatrix();
                    }

                    const cameraNames = gltfCameras.map(function (c) { return c.name; });
                    guiCameras = gui.add(state, 'CAMERA', cameraNames).name('Camera');
                    guiCameras.onChange(function (value) {
                        const selected = gltfCameras.find(function (c) { return c.name === value; });
                        if ( selected ) {
                            camera = selected;
                            controls.object = camera;
                            scenePass.camera = camera;
                            updatePostProcessing();
                            controls.update();
                        }
                    });
                }

                const parser = gltf.parser;
                if (gltf.userData.gltfExtensions !== undefined) {
                    const variantsExtension = gltf.userData.gltfExtensions['KHR_materials_variants'];
                    if (variantsExtension !== undefined) {
                        const variants = variantsExtension.variants.map(function (variant) { return variant.name; });
                        variants.push(DEFAULT_NAME);
                        guiVariants = gui.add(state, 'VARIANT', variants).name('Variant');
                        selectVariant(modelRoot, parser, variantsExtension, state.VARIANT);
                        guiVariants.onChange(function (value) {
                            selectVariant(modelRoot, parser, variantsExtension, value);
                        });
                    }
                }

                updateEnvironment();
                hideDropZone();
                resolve();
            } catch (error) {
                reject(error);
            }
        }, undefined, reject );
    });
}

async function loadModelSource(modelSource) {
    try {
        await loadModel(modelSource);
        currentObjectUrls = modelSource.objectUrls || [];
    } catch (error) {
        if (modelSource.objectUrls) {
            modelSource.objectUrls.forEach(function(url) {
                URL.revokeObjectURL(url);
            });
        }
        console.error(error);
        showDropZone('Failed to load model: ' + error.message, true);
    }
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
    } else if (!modelRoot) {
        showDropZone('Drag & drop a .glb or .gltf model here, or click to choose files.');
    } else {
        hideDropZone();
    }
}

async function handleModelFiles(fileList) {
    if (!fileList || fileList.length === 0) {
        return;
    }
    try {
        const modelSource = await createDroppedModelSource(fileList);
        await loadModelSource(modelSource);
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

function selectVariant(root, parser, extension, variantName) {
    const variantIndex = extension.variants.findIndex(function (v) {
        return v.name.includes(variantName);
    });

    root.traverse(async function (object) {
        if (!object.isMesh || !object.userData.gltfExtensions) return;

        const meshVariantDef = object.userData.gltfExtensions['KHR_materials_variants'];
        if (!meshVariantDef) return;

        if (!object.userData.originalMaterial) {
            object.userData.originalMaterial = object.material;
        }

        const mapping = meshVariantDef.mappings.find(function (m) {
            return m.variants.includes(variantIndex);
        });

        if (mapping) {
            object.material = await parser.getDependency('material', mapping.material);
        } else {
            object.material = object.userData.originalMaterial;
        }
    });
}

function onWindowResize() {

    const container = document.getElementById('container');
    const width = container.offsetWidth;
    const height = container.offsetHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    for ( let i = 0; i < gltfCameras.length; i ++ ) {
        gltfCameras[i].aspect = width / height;
        gltfCameras[i].updateProjectionMatrix();
    }

    if ( scenePass ) {
        scenePass.camera = camera;
    }

    renderer.setSize( width, height );

}

function animate() {

    requestAnimationFrame( animate );

    const delta = clock.getDelta();
    if ( mixer ) {
        mixer.update( delta );
    }
    physicsStep(delta);

    controls.update();

    render();

}

//

function render() {

    if ( renderPipeline ) {
        renderPipeline.render();
    } else {
        renderer.render( scene, camera );
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

// ---- KHR_physics_rigid_bodies collision filter ----
// Build a table mapping each glTF collisionFilter index to a Rapier collision-groups u32.
// Rapier format: high 16 bits = membership groups, low 16 bits = filter mask.
// Two colliders collide iff (A.mem & B.filter) != 0 AND (B.mem & A.filter) != 0.
function buildCollisionFilterTable(gltfJson) {
    const filters = gltfJson.extensions?.KHR_physics_rigid_bodies?.collisionFilters ?? [];
    if (filters.length === 0) return [];
    const systemBit = new Map();
    let nextBit = 0;
    function bitFor(name) {
        if (!systemBit.has(name)) {
            if (nextBit >= 16) {
                console.warn('[Physics] Too many collision systems (>16), ignoring:', name);
                systemBit.set(name, 0);
            } else {
                systemBit.set(name, 1 << nextBit);
                nextBit++;
            }
        }
        return systemBit.get(name);
    }
    const ALL = 0xFFFF;
    return filters.map(function (f) {
        let membership = 0;
        for (const n of (f.collisionSystems ?? [])) membership |= bitFor(n);
        let filterMask;
        if (Array.isArray(f.collideWithSystems)) {
            filterMask = 0;
            for (const n of f.collideWithSystems) filterMask |= bitFor(n);
        } else if (Array.isArray(f.notCollideWithSystems)) {
            let mask = 0;
            for (const n of f.notCollideWithSystems) mask |= bitFor(n);
            filterMask = ALL & ~mask;
        } else {
            filterMask = ALL;
        }
        return (((membership & ALL) << 16) | (filterMask & ALL)) >>> 0;
    });
}

function applyCollisionFilterToDesc(desc, colliderDef, table) {
    const idx = colliderDef?.collisionFilter;
    if (typeof idx !== 'number') return;
    const groups = table[idx];
    if (groups === undefined) return;
    desc.setCollisionGroups(groups);
}

function initPhysics(gltfJson, threeNodes) {
    physicsWorld = new RAPIER.World({ x: 0, y: -9.81, z: 0 });
    dynamicBodies.length = 0;
    const matDefs = gltfJson.extensions?.KHR_physics_rigid_bodies?.physicsMaterials ?? [];
    const nodes   = gltfJson.nodes ?? [];
    const excludedIndices = new Set();
    const collisionGroupsByFilterIndex = buildCollisionFilterTable(gltfJson);

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
            applyCollisionFilterToDesc(desc, childPhys.collider, collisionGroupsByFilterIndex);
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
        applyCollisionFilterToDesc(desc, physExt.collider, collisionGroupsByFilterIndex);
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
    // Try to start physics now (will only proceed if env is also ready).
    tryStartPhysics();
    // Fallback: in case the HDR environment fails to load, still start physics
    // so the simulation does not stay frozen forever.
    setTimeout(function() {
        if (!physicsReady) {
            console.log('[Physics] Fallback start (resources not ready within 5s)');
            physicsReady = true;
        }
    }, 5000);
}

function physicsStep(delta) {
    if (!physicsWorld) return;
    if (!physicsReady) return;
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
}
