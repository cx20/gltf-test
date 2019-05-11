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
    document.getElementById('container').innerHTML = 'Please specify a model to load';
    throw new Error('Model not specified or not found in list.');
}

let gltf = null;
let mixer = null;
let clock = new THREE.Clock();
let axis;
let hemispheric;
let gui;

var ROTATE = true;
var AXIS = true;
var LIGHTS = true;
var SKYBOX = true;

let scene;
let camera;
let renderer;
let controls;
let envMap;

init();
animate();

function resize() {
    let container = document.getElementById('container');
    let width = container.offsetWidth;
    let height = container.offsetHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize( width, height );
}

function init() {
    scene = new THREE.Scene();

    hemispheric = new THREE.HemisphereLight( 0xffffff, 0x222222, 3.0 );
    scene.add(hemispheric);
/*
    let ambient = new THREE.AmbientLight( 0xffffff, 0.3 );
    scene.add( ambient );

    let directionalLight = new THREE.DirectionalLight( 0xffffff, 0.8 );
    directionalLight.position.set( 0.5, 0, 0.866 );
    scene.add( directionalLight );
*/

    camera = new THREE.PerspectiveCamera( 75, 1, 1, 10000 );
    camera.position.set(0, 2, 3);
    scene.add( camera );

    let manager = new THREE.LoadingManager();
    manager.onProgress = function ( item, loaded, total ) {
        console.log( item, loaded, total );
    };

    // monkeypatch
    // https://github.com/mrdoob/three.js/pull/11498#issuecomment-308136310
    THREE.PropertyBinding.sanitizeNodeName = (n) => n;

    let loader = new THREE.GLTFLoader();
    loader.setCrossOrigin( 'anonymous' );

    THREE.DRACOLoader.setDecoderPath( '../../libs/three.js/r101dev/draco/gltf/' );
    loader.setDRACOLoader( new THREE.DRACOLoader() );

    let scale = modelInfo.scale;
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
        let animations = gltf.animations;
        if ( animations && animations.length ) {
            mixer = new THREE.AnimationMixer( object );
            for ( let i = 0; i < animations.length; i ++ ) {
                let animation = animations[ i ];
                mixer.clipAction( animation ).play();
            }
        }

        envMap = getEnvMap();
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
        scene.background = envMap;

        scene.add(object);
    });

    axis = new THREE.AxesHelper(1000);
    scene.add(axis);

    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.gammaOutput = true; // if >r88, models are dark unless you activate gammaOutput
    renderer.gammaFactor = 2.2;
    renderer.setClearColor( 0xaaaaaa );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.physicallyCorrectLights = true; // This will be required for matching the glTF spec.

    controls = new THREE.OrbitControls( camera, renderer.domElement );
    controls.userPan = false;
    controls.userPanSpeed = 0.0;
    controls.maxDistance = 5000.0;
    controls.maxPolarAngle = Math.PI * 0.495;
    controls.autoRotate = true;
    controls.autoRotateSpeed = -3.0;

    // GUI
    gui = new dat.GUI();
    let guiRotate = gui.add(window, 'ROTATE').name('Rotate');
    let guiAxis = gui.add(window, 'AXIS').name('Axis');
    let guiLights = gui.add(window, 'LIGHTS').name('Lights');
    let guiSkybox = gui.add(window, 'SKYBOX').name('IBL');

    guiRotate.onChange(function (value) {
        controls.autoRotate = value;
    });
    guiAxis.onChange(function (value) {
        axis.visible = value;
    });
    guiLights.onChange(function (value) {
        hemispheric.visible = value;
    });
    guiSkybox.onChange(function (value) {
        scene.background = value ? envMap : null;
    });

    document.body.appendChild( renderer.domElement );

    resize();
    window.addEventListener( 'resize', resize, false );
}

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

function animate() {
    requestAnimationFrame( animate );
    if ( mixer ) mixer.update( clock.getDelta() );
    controls.update();
    render();
}

function render() {
    renderer.render( scene, camera );
}
