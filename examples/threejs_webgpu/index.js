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

const scale = modelInfo.scale;
let url = "../../" + modelInfo.category + "/" + modelInfo.path;
if(modelInfo.url) {
    url = modelInfo.url;
}

const urlParams = new URLSearchParams(window.location.search);
const scaleParam = parseFloat(urlParams.get('scale'));
const resolvedScale = Number.isFinite(scaleParam) ? scaleParam : scale;

import * as THREE from 'three/webgpu';
import { RenderPipeline } from 'three/webgpu';

import { HDRLoader } from 'three/addons/loaders/HDRLoader.js';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
import { pass, uniform, vec4, max, sub } from 'three/tsl';

const clock = new THREE.Clock();
const DEFAULT_NAME = '[default]';

let camera, scene, renderer;
let controls, axis, hemispheric, envTexture, modelRoot, mixer;
let gui;
let guiCameras, guiVariants;
let gltfCameras = [];
let renderPipeline, scenePass;
let bloomMixNode, bloomStrengthNode, bloomThresholdNode, bloomRadiusNode;

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

init().catch(function (error) {
    console.error(error);
});

async function init() {

    const container = document.getElementById('container');

    camera = new THREE.PerspectiveCamera( 75, 1, 0.1, 10000 );
    camera.position.set( 0, 2, 3 );
    camera.name = DEFAULT_NAME;

    scene = new THREE.Scene();

    let manager = new THREE.LoadingManager();
    manager.onProgress = function ( item, loaded, total ) {
        console.log( item, loaded, total );
    };
    
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

    const loader = new GLTFLoader(manager);
    loader.setCrossOrigin( 'anonymous' );
    loader.load( url, function ( gltf ) {

        modelRoot = gltf.scene || gltf.scenes[0];
        modelRoot.scale.set( resolvedScale, resolvedScale, resolvedScale );
        if ( modelInfo.name === 'GearboxAssy' ) {
            modelRoot.position.set( -159.20 * resolvedScale, -17.02 * resolvedScale, -3.21 * resolvedScale );
        }

        if ( gltf.animations && gltf.animations.length ) {
            mixer = new THREE.AnimationMixer( modelRoot );
            if ( modelInfo.name === 'Fox' ) {
                mixer.clipAction( gltf.animations[2] ).play();
            } else {
                for ( let i = 0; i < gltf.animations.length; i ++ ) {
                    mixer.clipAction( gltf.animations[i] ).play();
                }
            }
        }

        scene.add( modelRoot );

        if ( gltf.cameras && gltf.cameras.length > 0 ) {
            gltfCameras = [camera].concat(gltf.cameras);

            const container = document.getElementById('container');
            const width = container.offsetWidth;
            const height = container.offsetHeight;

            for ( let i = 0; i < gltfCameras.length; i ++ ) {
                const c = gltfCameras[i];
                c.name = c.name && c.name !== '' ? c.name : 'camera' + i;
                c.aspect = width / height;
                c.updateProjectionMatrix();
            }

            const cameraNames = gltfCameras.map(function (c) { return c.name; });
            if ( guiCameras ) gui.remove(guiCameras);
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
                if ( guiVariants ) gui.remove(guiVariants);
                guiVariants = gui.add(state, 'VARIANT', variants).name('Variant');
                selectVariant(modelRoot, parser, variantsExtension, state.VARIANT);
                guiVariants.onChange(function (value) {
                    selectVariant(modelRoot, parser, variantsExtension, value);
                });
            }
        }

        updateEnvironment();

    } );

    new HDRLoader()
        .setPath( '../../textures/hdr/' )
        .load( 'papermill.hdr', function ( texture ) {

            texture.mapping = THREE.EquirectangularReflectionMapping;
            envTexture = texture;

            updateEnvironment();

        }, undefined, function () {

            console.warn('Failed to load local HDR environment map. Rendering without environment map.');
            updateEnvironment();

        } );

    window.addEventListener( 'resize', onWindowResize );

    onWindowResize();
    animate();

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
