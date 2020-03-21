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
var CUBEMAP = true;
var IBL = true;
var LIGHTS = false; // The default is to use IBL instead of lights

let scene;
let camera;
let renderer;
let controls;
let hdrCubeMap;
let hdrCubeRenderTarget;
let renderTarget;
let cubeMap;

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
    hemispheric.visible = LIGHTS; // The default is to use IBL instead of lights
    scene.add(hemispheric);

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

    var dracoLoader = new THREE.DRACOLoader();
    dracoLoader.setDecoderPath( '../../libs/three.js/r115dev/draco/gltf/' );
    loader.setDRACOLoader( dracoLoader );

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
            if (modelInfo.name == "Fox" ) {
                let animation = animations[2]; // 0:Survey, 1:Walk, 2:Run
                mixer.clipAction( animation ).play();
            } else {
                for ( let i = 0; i < animations.length; i ++ ) {
                    let animation = animations[ i ];
                    mixer.clipAction( animation ).play();
                }
            }
        }
        var hdrUrls = [
            'specular_right_0.hdr',
            'specular_left_0.hdr',
            'specular_top_0.hdr',
            'specular_bottom_0.hdr',
            'specular_front_0.hdr',
            'specular_back_0.hdr'
        ];
        hdrCubeMap = new THREE.HDRCubeTextureLoader()
            .setPath( 'https://rawcdn.githack.com/ux3d/glTF-Sample-Environments/4eace30f795fa77f6e059e3b31aa640c08a82133/papermill/specular/' )
            .setDataType( THREE.UnsignedByteType )
            .load( hdrUrls, function () {

                var pmremGenerator = new THREE.PMREMGenerator( renderer );
                pmremGenerator.compileCubemapShader();

                hdrCubeRenderTarget = pmremGenerator.fromCubemap( hdrCubeMap );

                hdrCubeMap.magFilter = THREE.LinearFilter;
                hdrCubeMap.needsUpdate = true;

                renderTarget = hdrCubeRenderTarget;
                cubeMap = hdrCubeMap;

                var newEnvMap = renderTarget ? renderTarget.texture : null;
                applyEnvMap(object, newEnvMap);

                scene.background = cubeMap;
            } );

        scene.add(object);
        window.scene = scene;
    });

    axis = new THREE.AxesHelper(1000);
    scene.add(axis);

    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.outputEncoding = THREE.sRGBEncoding; // if >r112, specify outputEncoding instead of gammaOutput
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
    let guiCubeMap = gui.add(window, 'CUBEMAP').name('CubeMap');
    let guiIbl = gui.add(window, 'IBL').name('IBL');
    let guiLights = gui.add(window, 'LIGHTS').name('Lights');

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
        var name = modelInfo.name;
        var object = scene.getObjectByName(name);
        var newEnvMap = (renderTarget && value) ? renderTarget.texture : null;
        applyEnvMap(object, newEnvMap);
    });
    guiLights.onChange(function (value) {
        // TODO: Improvement is needed when displaying KHR_lights_punctual samples.
        hemispheric.visible = value;
    });

    document.body.appendChild( renderer.domElement );

    resize();
    window.addEventListener( 'resize', resize, false );
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
	
}
