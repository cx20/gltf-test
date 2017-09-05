var modelInfo = ModelIndex.getCurrentModel();
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
    modelInfo = TutorialAgiPbrModelIndex.getCurrentModel();
}
if (!modelInfo) {
    document.getElementById('container').innerHTML = 'Please specify a model to load';
    throw new Error('Model not specified or not found in list.');
}

var gltf = null;
var mixer = null;
var clock = new THREE.Clock();

init();
animate();
  
function init() {
    width = window.innerWidth;
    height = window.innerHeight;
    
    scene = new THREE.Scene();
    
    var ambient = new THREE.AmbientLight( 0x101030 );
    scene.add( ambient );

    var directionalLight = new THREE.DirectionalLight( 0xffeedd );
    directionalLight.position.set( 0, 0, 1 );
    scene.add( directionalLight );

    var directionalLight2 = new THREE.DirectionalLight( 0xffeedd );
    directionalLight2.position.set( 0, 5, -5 );
    scene.add( directionalLight2 );

    camera = new THREE.PerspectiveCamera( 75, width / height, 1, 2000 );
    camera.position.set(0, 2, 3);
    scene.add( camera );

    var manager = new THREE.LoadingManager();
    manager.onProgress = function ( item, loaded, total ) {
        console.log( item, loaded, total );
    };
    
    // monkeypatch 
    // https://github.com/mrdoob/three.js/pull/11498#issuecomment-308136310
    THREE.PropertyBinding.sanitizeNodeName = (n) => n;
    
    var loader = new THREE.GLTFLoader();
    loader.setCrossOrigin( 'anonymous' );

    var scale = modelInfo.scale;
    var url = "../../" + modelInfo.category + "/" + modelInfo.path;
    loader.load(url, function (data) {
        gltf = data;
        var object;
        if ( gltf.scene !== undefined ) {
            object = gltf.scene; // default scene
        } else if ( gltf.scenes.length > 0 ) {
            object = gltf.scenes[0]; // other scene
        }
        if (modelInfo.name == "GearboxAssy" ) {
            scale = 0.2;
            object.scale.set(scale, scale, scale);
            object.position.set(-159.20*scale, -17.02*scale, -3.21*scale);
        } else {
            object.scale.set(scale, scale, scale);
        }
        var animations = gltf.animations;
        if ( animations && animations.length ) {
            mixer = new THREE.AnimationMixer( object );
            for ( var i = 0; i < animations.length; i ++ ) {
                var animation = animations[ i ];
                mixer.clipAction( animation ).play();
            }
        }
        
        var envMap = getEnvMap();
        object.traverse( function( node ) {
            if ( node.material ) {
                node.material.envMap = envMap;
                node.material.needsUpdate = true;
            }
        } );
        scene.background = envMap;

        scene.add(object);
    });

    var axis = new THREE.AxisHelper(1000);   
    scene.add(axis);

    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor( 0xaaaaaa );

    controls = new THREE.OrbitControls( camera, renderer.domElement );
    controls.userPan = false;
    controls.userPanSpeed = 0.0;
    controls.maxDistance = 5000.0;
    controls.maxPolarAngle = Math.PI * 0.495;
    controls.autoRotate = true;
    controls.autoRotateSpeed = -10.0;

    renderer.setSize( width, height );
    document.body.appendChild( renderer.domElement );
}

// https://github.com/mrdoob/three.js/tree/dev/examples/textures/cube/skybox
function getEnvMap() {
    var path = '../../textures/cube/skybox/';
    var format = '.jpg';
    var urls = [
        path + 'px' + format, path + 'nx' + format,
        path + 'py' + format, path + 'ny' + format,
        path + 'pz' + format, path + 'nz' + format
    ];
    var loader = new THREE.CubeTextureLoader();
    loader.setCrossOrigin( 'anonymous' );
    var envMap = loader.load( urls );
    envMap.format = THREE.RGBFormat;
    return envMap;
}

function animate() {
    requestAnimationFrame( animate );
    if (mixer) mixer.update(clock.getDelta());
    controls.update();
    render();
}

function render() {
    renderer.render( scene, camera );
}
