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
    camera.position.z = 300;

    var manager = new THREE.LoadingManager();
    manager.onProgress = function ( item, loaded, total ) {
        console.log( item, loaded, total );
    };

    var loader = new THREE.GLTFLoader();

    var url = "../../../sampleModels/Box/glTF-Embedded/Box.gltf";
    loader.load(url, function (data) {
        var object = data.scene;
        camera.position.copy(new THREE.Vector3(0, 2, 3));
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
    controls.autoRotate = true;     //true:Ž©“®‰ñ“]‚·‚é,false:Ž©“®‰ñ“]‚µ‚È‚¢
    controls.autoRotateSpeed = -10.0;    //Ž©“®‰ñ“]‚·‚éŽž‚Ì‘¬“x

    renderer.setSize( width, height );
    document.body.appendChild( renderer.domElement );
}

function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
    controls.update();
}
