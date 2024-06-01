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
    BLOOM: true,
    TONEMAP: "NoToneMapping",
    CAMERA: DEFAULT_NAME,
    VARIANT: DEFAULT_NAME
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

let composer;

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

    const dracoLoader = new DRACOLoader().setDecoderPath( '../../libs/three.js/r165/examples/jsm/libs/draco/gltf/' );
    loader.setDRACOLoader( dracoLoader );

    const ktx2Loader = new KTX2Loader().setTranscoderPath( '../../libs/three.js/r165/examples/jsm/libs/basis/' );
    ktx2Loader.detectSupport( renderer );
    loader.setKTX2Loader( ktx2Loader );
    loader.setMeshoptDecoder( MeshoptDecoder );

    const scale = modelInfo.scale;
    let url = "../../" + modelInfo.category + "/" + modelInfo.path;
    if(modelInfo.url) {
        url = modelInfo.url;
    }
    loader.load(url, function (data) {
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
    if ( mixer ) mixer.update( clock.getDelta() );
    controls.update();
    render();
}

function render() {
    renderer.render( scene, camera );
    if (state.BLOOM) {
        composer.render();
    }
}
