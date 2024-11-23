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
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { HDRCubeTextureLoader } from 'three/addons/loaders/HDRCubeTextureLoader.js';
import { KTX2Loader } from 'three/addons/loaders/KTX2Loader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';

const params = {
    exposure: 1,
    // for THREE.ACESFilmicToneMapping
    bloomStrength: 0.15,
    bloomThreshold: 0.1,
    bloomRadius: 0.05
};

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
    //BLOOM: true,
    TONEMAP: "NoToneMapping",
    CAMERA: DEFAULT_NAME,
    VARIANT: DEFAULT_NAME
}

let renderer, scene, camera, controls;
let width;
let height;

init();

function resize() {
    let container = document.getElementById('container');
    width = container.offsetWidth;
    height = container.offsetHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize( width, height );
}

async function init() {

    renderer = new THREE.WebGPURenderer( { antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setAnimationLoop( render );
    renderer.toneMapping = THREE.ACESFilmicToneMapping;

    scene = new THREE.Scene();

    hemispheric = new THREE.HemisphereLight( 0xffffff, 0x222222, 3.0 );
    hemispheric.visible = state.LIGHTS; // The default is to use IBL instead of lights
    scene.add(hemispheric);

    camera = new THREE.PerspectiveCamera( 75, 1, 0.1, 10000 );
    camera.position.set(0, 2, 3);
    camera.name = DEFAULT_NAME;
    scene.add( camera );
    
    let manager = new THREE.LoadingManager();
    manager.onProgress = function ( item, loaded, total ) {
        console.log( item, loaded, total );
    };
    
    const rgbeLoader = new RGBELoader(manager);
    const gltfLoader = new GLTFLoader(manager);

    const scale = modelInfo.scale;
    let url = "../../" + modelInfo.category + "/" + modelInfo.path;
    if(modelInfo.url) {
        url = modelInfo.url;
    }
    
    const [ texture, gltf ] = await Promise.all( [
        rgbeLoader.loadAsync( '../../textures/hdr/papermill.hdr' ),
        gltfLoader.loadAsync( url ),
    ] );

    // environment
    texture.mapping = THREE.EquirectangularReflectionMapping;

    scene.background = texture;
    scene.environment = texture;
    
    gltf.scene.scale.set(scale, scale, scale);

    // model
    scene.add( gltf.scene );

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
    //let guiBloom = gui.add(state, 'BLOOM').name('Bloom'); // TODO:
    const tonemaps = ["NoToneMapping", "ReinhardToneMapping", "ACESFilmicToneMapping", "NeutralToneMapping"];
    let guiTonemap = gui.add(state, 'TONEMAP', tonemaps).name('Tonemap');

    guiRotate.onChange(function (value) {
        controls.autoRotate = value;
    });
    guiAxis.onChange(function (value) {
        axis.visible = value;
    });
    guiCubeMap.onChange(function (value) {
        //scene.background = value ? cubeMap : null;
        scene.background = value ? texture : null;
    });
    guiIbl.onChange(function (value) {
        let object = scene;
        //let newEnvMap = (renderTarget && value) ? renderTarget.texture : null;
        //applyEnvMap(object, newEnvMap);
        scene.environment = value ? texture : null;
    });
    guiLights.onChange(function (value) {
        // TODO: Improvement is needed when displaying KHR_lights_punctual samples.
        hemispheric.visible = value;
    });
    //guiBloom.onChange(function (value) {
    //});
    guiTonemap.onChange(function(value) {
        if (value == "NoToneMapping") {
            renderer.toneMapping = THREE.NoToneMapping;
            renderer.toneMappingExposure = 1.0;
        } else if (value == "ReinhardToneMapping") {
            renderer.toneMapping = THREE.ReinhardToneMapping;
            renderer.toneMappingExposure = Math.pow(params.exposure, 4.0);
        } else if (value == "ACESFilmicToneMapping") {
            renderer.toneMapping = THREE.ACESFilmicToneMapping;
            renderer.toneMappingExposure = Math.pow(params.exposure, 4.0);
        } else if (value == "NeutralToneMapping") {
            renderer.toneMapping = THREE.NeutralToneMapping;
            renderer.toneMappingExposure = Math.pow(params.exposure, 4.0);
        }
    });

    // TODO:
/*
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
            //renderScene.camera = camera;
            scene.camera = camera;
        });
    }
*/

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

function render() {

    renderer.renderAsync( scene, camera );

}
