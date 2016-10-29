var modelInfo = ModelIndex.getCurrentModel();
if (!modelInfo) {
    document.getElementById('container').innerHTML = 'Please specify a model to load';
    throw new Error('Model not specified or not found in list.');
}

var gltf = null;

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

    camera = new THREE.PerspectiveCamera( 75, width / height, 1, 2000 );
    camera.position.set(0, 2, 3);

    var manager = new THREE.LoadingManager();
    manager.onProgress = function ( item, loaded, total ) {
        console.log( item, loaded, total );
    };

    var loader = new THREE.GLTFLoader();

    var scale = modelInfo.scale;
    var url = "../../sampleModels/" + modelInfo.path;
    loader.load(url, function (data) {
        gltf = data;
        var object = gltf.scene;
        if (modelInfo.name == "GearboxAssy" ) {
            scale = 0.2;
            object.scale.set(scale, scale, scale);
            object.position.set(-159.20*scale, -17.02*scale, -3.21*scale);
        } else {
            object.scale.set(scale, scale, scale);
        }

        if (gltf.animations && gltf.animations.length) {

            for (i = 0; i < gltf.animations.length; i++) {
                var animation = gltf.animations[i];
                animation.loop = true;
                animation.play();
            }
        }

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

function animate() {
    requestAnimationFrame( animate );
    THREE.GLTFLoader.Animations.update();
    THREE.GLTFLoader.Shaders.update(scene, camera);
    renderer.render( scene, camera );
    controls.update();
}
