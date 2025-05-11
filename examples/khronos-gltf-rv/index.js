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

let url = "../../" + modelInfo.category + "/" + modelInfo.path;
if(modelInfo.url) {
    url = modelInfo.url;
}

import { GltfView } from "gltf-viewer";
import * as dat from 'dat.gui';

// GUI
let gui = new dat.GUI();

var obj = {
	ROTATE: false,
	CAMERA: "",
	IBL: true,
	VARIANT: ""
}
let guiRotate = gui.add(obj, 'ROTATE').name('Rotate');
let guiIBL    = gui.add(obj, 'IBL').name('IBL');
let guiCameras = null;
let guiVariantNames = null;

let isRotating = false;
guiRotate.onChange(function (value) {
    isRotating = value;
});

const canvas = document.getElementById('canvas');
const context = canvas.getContext('webgl2', {
    alpha: false,
    antialias: true
});

const dracoLib = undefined;
const ktxLib = undefined;
const libPath = "../../libs/khronos-gltf-rv/1.0.11/libs/";

const view = new GltfView(context);
//const resourceLoader = view.createResourceLoader();
const resourceLoader = view.createResourceLoader(dracoLib, ktxLib, libPath);
const state = view.createState();

const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    state.userCamera.aspectRatio = canvas.width / canvas.height;
};

const hdrFile = 'https://cx20.github.io/gltf-test/textures/hdr/papermill.hdr';
//const lurFile = {lut_sheen_E_file: 'https://github.khronos.org/glTF-Sample-Viewer-Release/assets/images/lut_sheen_E.png'};
const lurFile = {lut_sheen_E_file: '../../libs/khronos-gltf-rv/1.0.11/assets/lut_sheen_E.png'};

await resourceLoader
    .loadEnvironment(hdrFile, lurFile)
    .then((environment) => {
        console.log('environment loaded');
        state.environment = environment;
        state.renderingParameters.blurEnvironmentMap = false;

        guiIBL.onChange(function(value) {
            state.environment = value ? environment : undefined;
        });
    });

await resourceLoader
    .loadGltf(
        //'https://cx20.github.io/gltf-test/sampleModels/Duck/glTF/Duck.gltf'
        url
    )
    .then((gltf) => {
        resizeCanvas();
        
        console.log('model loaded');
        state.gltf = gltf;
        const defaultScene = state.gltf.scene;
        state.sceneIndex = defaultScene === undefined ? 0 : defaultScene;
        state.cameraIndex = undefined;

        if (state.gltf.cameras.length > 0) {
            let cameraNames = ["User Camera"].concat(state.gltf.cameras.map((value, index) => "camera" + index));
            const defaultIndex = Math.floor(Math.random() * cameraNames.length); // Randomly switch if there are multiple cameras
            obj.CAMERA = cameraNames[defaultIndex];
            guiCameras = gui.add(obj, 'CAMERA', cameraNames).name("Camera");

            guiCameras.onChange(function(value) {
                if (value === "User Camera") {
                    state.cameraIndex = undefined;
                } else {
                    const selectedIndex = cameraNames.indexOf(value) - 1;
                    state.cameraIndex = selectedIndex;
                }
            });

            state.cameraIndex = defaultIndex - 1;
        } else {
            state.cameraIndex = undefined;
        }
        
        if (state.gltf.scenes.length != 0) {
            if (state.sceneIndex > state.gltf.scenes.length - 1) {
                state.sceneIndex = 0;
            }
            const scene = state.gltf.scenes[state.sceneIndex];
            scene.applyTransformHierarchy(state.gltf);
            state.userCamera.aspectRatio = canvas.width / canvas.height;
            state.userCamera.fitViewToScene(state.gltf, state.sceneIndex);

            state.animationIndices = [];
            for (let i = 0; i < gltf.animations.length; i++) {
                if (
                    !gltf
                        .nonDisjointAnimations(state.animationIndices)
                        .includes(i)
                ) {
                    state.animationIndices.push(i);
                }
            }
            state.animationTimer.start();
        }
    });

let angle = 0;
const update = () => {
    view.renderFrame(state, canvas.clientWidth, canvas.clientHeight);

    if (isRotating) {
        const rotationSpeed = 2;
        state.userCamera.orbit(rotationSpeed, 0);
    }
    
    window.requestAnimationFrame(update);
};

window.addEventListener('resize', resizeCanvas);

window.requestAnimationFrame(update);

let isDragging = false;
let previousMousePosition = { x: 0, y: 0 };

canvas.addEventListener('mousedown', (event) => {
    isDragging = true;
    previousMousePosition.x = event.clientX;
    previousMousePosition.y = event.clientY;
});

canvas.addEventListener('mouseup', () => {
    isDragging = false;
});

canvas.addEventListener('mousemove', (event) => {
    if (!isDragging) return;

    const deltaX = event.clientX - previousMousePosition.x;
    const deltaY = event.clientY - previousMousePosition.y;

    state.userCamera.orbit(deltaX, deltaY);

    previousMousePosition.x = event.clientX;
    previousMousePosition.y = event.clientY;
});

canvas.addEventListener('wheel', (event) => {
    const deltaZoom = event.deltaY * -0.01;
    state.userCamera.zoomBy(deltaZoom);
});

