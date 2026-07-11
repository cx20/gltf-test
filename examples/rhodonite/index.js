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

import Rn from 'rhodonite';
import * as dat from 'dat.gui';

const initialModelInfo = getInitialModelInfo();

// DOM
const canvas = document.getElementById('world');
const dropZone = document.getElementById('dropZone');
const dropZoneMessage = document.getElementById('dropZoneMessage');
const fileInput = document.getElementById('fileInput');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// GUI
let gui = new dat.GUI();

var obj = {
    ROTATE: false,
    CAMERA: "",
    IBL: true,
    LIGHTS: false,
    //BLOOM: true, // TODO:
    VARIANT: ""
}
let guiRotate = gui.add(obj, 'ROTATE').name('Rotate');
let guiIBL    = gui.add(obj, 'IBL').name('IBL');
let guiLights = gui.add(obj, 'LIGHTS').name('Lights');
//let guiBloom = gui.add(obj, 'BLOOM').name('Bloom'); // TODO:
let guiCameras = null;
let guiVariantNames = null;

// Engine state (initialized once by initEngine)
let engine;
let forwardRenderPipeline;
let cameraEntity;
let cameraComponent;
let lightEntity1;
let lightEntity2;
let envExpression;
let diffuseCubeTexture;
let specularCubeTexture;

// Per-model state (rebuilt on every load)
let scale = 1;
let cameraComponents = [];
let currentMainExpression = null;
let currentModelEntities = null;

function hasModel() {
    return currentMainExpression != null;
}

// ---- Drop zone helpers ----
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

// ---- Dropped file helpers ----
function getFileExtension(name) {
    const lastDot = name.lastIndexOf('.');
    return lastDot >= 0 ? name.slice(lastDot).toLowerCase() : '';
}

function getBasename(path) {
    return path.split('/').pop();
}

function isExternalUri(uri) {
    return uri
        && !uri.startsWith('data:')
        && !uri.startsWith('blob:')
        && !/^[a-z]+:/i.test(uri);
}

// Build a { fileName: ArrayBuffer } map suitable for Rn.GltfImporter.importFromArrayBuffers.
// For .gltf assets, external buffer/image URIs are rewritten to their basenames so they
// match the keys of the dropped resource files.
async function createDroppedModelSource(fileList) {
    const files = Array.from(fileList);
    const modelFile = files.find(function(file) {
        const extension = getFileExtension(file.name);
        return extension === '.glb' || extension === '.gltf';
    });

    if (!modelFile) {
        throw new Error('Please drop a .glb or .gltf file.');
    }

    if (getFileExtension(modelFile.name) === '.glb') {
        const map = {};
        map[modelFile.name] = await modelFile.arrayBuffer();
        return { files: map, name: modelFile.name, scale: 1 };
    }

    const byBasename = new Map();
    files.forEach(function(file) {
        byBasename.set(getBasename(file.name), file);
        if (file.webkitRelativePath) {
            byBasename.set(getBasename(file.webkitRelativePath), file);
        }
    });

    const gltfJson = JSON.parse(await modelFile.text());
    const map = {};

    async function includeResource(uri) {
        if (!isExternalUri(uri)) {
            return uri;
        }
        const base = getBasename(decodeURIComponent(uri));
        const file = byBasename.get(base);
        if (!file) {
            return uri;
        }
        if (!(base in map)) {
            map[base] = await file.arrayBuffer();
        }
        return base;
    }

    if (Array.isArray(gltfJson.buffers)) {
        for (const buffer of gltfJson.buffers) {
            if (buffer.uri) {
                buffer.uri = await includeResource(buffer.uri);
            }
        }
    }
    if (Array.isArray(gltfJson.images)) {
        for (const image of gltfJson.images) {
            if (image.uri) {
                image.uri = await includeResource(image.uri);
            }
        }
    }

    map[modelFile.name] = new TextEncoder().encode(JSON.stringify(gltfJson)).buffer;
    return { files: map, name: modelFile.name, scale: 1 };
}

function buildModelSourceFromInfo(modelInfo) {
    let url = "../../" + modelInfo.category + "/" + modelInfo.path;
    if (modelInfo.url) {
        url = modelInfo.url;
    }
    return { url: url, scale: modelInfo.scale, name: modelInfo.name };
}

// ---- Engine setup (once) ----
async function initEngine() {
    const config = new Rn.Config({
        isUboEnabled: false
    });
    engine = await Rn.Engine.init({
        approach: Rn.ProcessApproach.DataTexture,
        canvas,
        config,
    });

    Rn.MeshRendererComponent.isDepthMaskTrueForTransparencies = true;

    // create ForwardRenderPipeline
    forwardRenderPipeline = new Rn.ForwardRenderPipeline(engine);
    forwardRenderPipeline.setup(canvas.width, canvas.height, {
        isBloom: false, // TODO: Set to true to enable Bloom. This is a heavy process, so it is turned off in this sample.
        isShadow: false,
    });

    // camera
    cameraEntity = Rn.createCameraControllerEntity(engine);
    cameraComponent = cameraEntity.getCamera();

    cameraComponent.zNear = 0.1;
    cameraComponent.zFar = 1000.0;
    cameraComponent.setFovyAndChangeFocalLength(75.0);
    cameraComponent.aspect = canvas.width / canvas.height;

    // Lights
    lightEntity1 = Rn.createLightEntity(engine);
    const lightComponent1 = lightEntity1.getLight();
    lightComponent1.type = Rn.LightType.Directional;
    lightEntity1.getTransform().localPosition = Rn.Vector3.fromCopyArray([1.0, 1.0, 100000.0]);
    lightEntity1.getComponent(Rn.LightComponent).intensity = 0;
    lightEntity1.getComponent(Rn.LightComponent).type = Rn.LightType.Directional;
    lightEntity1.getTransform().localEulerAngles = Rn.Vector3.fromCopyArray([-Math.PI / 2, -Math.PI / 4, Math.PI / 4]);

    lightEntity2 = Rn.createLightEntity(engine);
    const lightComponent2 = lightEntity2.getLight();
    lightComponent1.type = Rn.LightType.Directional;
    lightEntity2.getTransform().localPosition = Rn.Vector3.fromCopyArray([1.0, 1.0, 100000.0]);
    lightEntity2.getComponent(Rn.LightComponent).intensity = 0;
    lightEntity2.getComponent(Rn.LightComponent).type = Rn.LightType.Directional;
    lightEntity2.getTransform().localEulerAngles = Rn.Vector3.fromCopyArray([Math.PI / 2, Math.PI / 4, -Math.PI / 4]);

    guiLights.onChange(function(value) {
        if (value) {
            lightEntity1.getComponent(Rn.LightComponent).intensity = 1;
            lightEntity2.getComponent(Rn.LightComponent).intensity = 1;
        } else {
            lightEntity1.getComponent(Rn.LightComponent).intensity = 0;
            lightEntity2.getComponent(Rn.LightComponent).intensity = 0;
        }
    });

    guiIBL.onChange(function(value) {
        const meshRendererComponents = engine.componentRepository.getComponentsWithType(Rn.MeshRendererComponent);
        for (let i = 0; i < meshRendererComponents.length; i++) {
            const meshRendererComponent = meshRendererComponents[i];
            meshRendererComponent.specularCubeMapContribution = value ? 1.0 : 0.0;
            meshRendererComponent.diffuseCubeMapContribution = value ? 1.0 : 0.0;
        }
    });

    // env
    envExpression = await createEnvCubeExpression(engine, '../../textures/papermill_hdr', cameraEntity);

    // IBL textures
    diffuseCubeTexture = new Rn.CubeTexture(engine);
    await diffuseCubeTexture.loadTextureImages({
        baseUrl: "../../textures/papermill_hdr/diffuse/diffuse",
        isNamePosNeg: true,
        hdriFormat: Rn.HdriFormat.RGBE_PNG,
        mipmapLevelNumber: 1
    });

    specularCubeTexture = new Rn.CubeTexture(engine);
    await specularCubeTexture.loadTextureImages({
        baseUrl: "../../textures/papermill_hdr/specular/specular",
        isNamePosNeg: true,
        hdriFormat: Rn.HdriFormat.RGBE_PNG,
        mipmapLevelNumber: 10
    });

    // Show the environment even before any model is loaded (drag & drop viewer state).
    forwardRenderPipeline.setExpressions([envExpression]);

    forwardRenderPipeline.startRenderLoop(draw);
}

// ---- Model loading (re-entrant) ----
function disposeCurrentModel() {
    if (guiCameras) {
        gui.remove(guiCameras);
        guiCameras = null;
    }
    if (guiVariantNames) {
        gui.remove(guiVariantNames);
        guiVariantNames = null;
    }
    obj.CAMERA = "";
    obj.VARIANT = "";

    if (currentModelEntities) {
        // Delete only the top-level roots; deleteEntityRecursively removes their descendants.
        for (let i = 0; i < currentModelEntities.length; i++) {
            const sceneGraph = currentModelEntities[i].tryToGetSceneGraph();
            if (sceneGraph && sceneGraph.isTopLevel) {
                try {
                    engine.entityRepository.deleteEntityRecursively(currentModelEntities[i].entityUID);
                } catch (error) {
                    console.warn(error);
                }
            }
        }
        currentModelEntities = null;
    }
    currentMainExpression = null;
}

async function loadModel(source) {
    disposeCurrentModel();

    scale = source.scale || 1;

    const options = {
        // GltfImporter reads the ArrayBuffers from options.files (the positional
        // `files` argument is only used to enumerate the entry file names), so the
        // map must be supplied here too. Ignored for URL imports.
        files: source.files,
        defaultMaterialHelperArgumentArray: [
            {
                makeOutputSrgb: false,
            },
        ],
    };
    const importPromise = source.files
        ? Rn.GltfImporter.importFromArrayBuffers(engine, source.files, options)
        : Rn.GltfImporter.importFromUrl(engine, source.url, options);

    const assets = await Rn.defaultAssetLoader.load({
        mainExpression: importPromise
    });

    currentMainExpression = assets.mainExpression;
    const mainRenderPass = currentMainExpression.renderPasses[0];
    currentModelEntities = mainRenderPass.entities;

    // cameraController
    const mainCameraControllerComponent = cameraEntity.getCameraController();
    const controller = mainCameraControllerComponent.controller;
    const entities = mainRenderPass.entities;
    controller.setTargets(entities);
    controller.dolly = 0.83;

    // KHR_materials_variants support
    for (let i = 0; i < mainRenderPass.entities.length; i++) {
        let entity = mainRenderPass.entities[i];
        let meshEntity = entity.tryToGetMesh();
        if (meshEntity != undefined) {
            let mesh = meshEntity.mesh;
            let primitive = mesh.primitives[0];
            if (primitive != undefined) {
                let variantNames = primitive.getVariantNames();
                if (variantNames.length > 0) {
                    guiVariantNames = gui.add(obj, 'VARIANT', variantNames).name("Variant");
                    break;
                }
            }
        }
    }

    if (guiVariantNames != null) {
        guiVariantNames.onChange(function(value) {
            for (let i = 0; i < mainRenderPass.entities.length; i++) {
                let entity = mainRenderPass.entities[i];
                let meshEntity = entity.tryToGetMesh();
                if (meshEntity != undefined) {
                    let mesh = meshEntity.mesh;
                    mesh.applyMaterialVariant(value);
                }
            }
        });
    }

    if (source.name != "VirtualCity") {
        await forwardRenderPipeline.setExpressions([envExpression, currentMainExpression]);
    } else {
        await forwardRenderPipeline.setExpressions([currentMainExpression]);
    }

    forwardRenderPipeline.setIBLTextures(diffuseCubeTexture, specularCubeTexture);

    // cameraController
    // Exclude a specific camera from the camera list
    cameraComponents = engine.componentRepository.getComponentsWithType(Rn.CameraComponent).filter(
        camera => camera.entity.getTagValue("type") !== "background-assets");

    if (cameraComponents.length > 1) {
        //let cameraNames = cameraComponents.map(camera => camera.uniqueName);
        let cameraNames = cameraComponents.map((value, index) => "camera" + index); // TODO: Set to [default] for default
        const defaultIndex = Math.floor(Math.random() * cameraNames.length); // Randomly switch if there are multiple cameras
        obj.CAMERA = cameraNames[defaultIndex];
        guiCameras = gui.add(obj, 'CAMERA', cameraNames).name("Camera");
        guiCameras.onChange(function(value) {
            const selectedIndex = cameraNames.indexOf(value);
            selectCameraByIndex(selectedIndex);
        });
        selectCameraByIndex(defaultIndex);
    } else {
        selectCameraByIndex(0);
    }

    hideDropZone();
}

async function loadModelSource(source) {
    try {
        showDropZone('Loading model...');
        await loadModel(source);
    } catch (error) {
        console.error(error);
        showDropZone('Failed to load model: ' + error.message, true);
    }
}

function selectCameraByIndex(cameraIndex) {
    let selectedCameraComponent = cameraComponents[cameraIndex];
    const mainCameraControllerComponent = cameraEntity.getComponent(Rn.CameraControllerComponent);
    const controller = mainCameraControllerComponent.controller;

    controller.dolly = 0.82;
    // TODO: The following code is a monkey patch to enable the dat.gui pull-down event
    controller.unregisterEventListeners();
    controller.registerEventListeners(canvas);

    // Prepare Entity to fix the camera target
    const boardPrimitive = new Rn.Plane(engine);
    boardPrimitive.generate({width: 3 / scale, height: 3 / scale, uSpan: 1, vSpan: 1, isUVRepeat: false});
    const boardMesh = new Rn.Mesh(engine);
    boardMesh.addPrimitive(boardPrimitive);
    const boardEntity = Rn.createMeshEntity(engine);
    const boardMeshComponent = boardEntity.getMesh();
    boardMeshComponent.setMesh(boardMesh);

    // If there is more than one camera, the selected camera will be used
    // (For some reason, it seems that there are two default cameras, so the condition is more than two.)
    if (cameraComponents.length > 1 && cameraIndex > 0) {
        if (selectedCameraComponent.type === Rn.CameraType.Perspective) {
            selectedCameraComponent.aspect = canvas.width / canvas.height; // Apply the aspect of the actual window instead of the glTF aspect information
        }
        Rn.CameraComponent.setCurrent(engine, selectedCameraComponent.componentSID);
        const zFar = selectedCameraComponent.zFar * 0.95;
        envExpression.renderPasses[0].entities[0].getTransform().localScale = Rn.Vector3.fromCopy3(-zFar, zFar, zFar)
    } else {
        Rn.CameraComponent.setCurrent(engine, cameraComponent.componentSID);
        const zFar = cameraComponent.zFar * 0.95;
        envExpression.renderPasses[0].entities[0].getTransform().localScale = Rn.Vector3.fromCopy3(-zFar, zFar, zFar)
    }
}

let angle = 0;
let startTime = Date.now();

function draw(frame) {
    angle += 0.2;
    //if (window.isAnimating) {
        const date = new Date();
        const time = (date.getTime() - startTime) / 1000;
        Rn.AnimationComponent.globalTime = time;
        if (time > Rn.AnimationComponent.endInputValue) {
            startTime = date.getTime();
        }
    //}

    if ( obj.ROTATE ) {
        const mainCameraControllerComponent = cameraEntity.getComponent(Rn.CameraControllerComponent);
        const controller = mainCameraControllerComponent.controller;
        controller.rotX = angle;
    }

    engine.process(frame);
}

// ---- Drag & drop wiring ----
function handleDragEvent(event) {
    event.preventDefault();
    event.stopPropagation();
}

function setDragActive(isActive) {
    dropZone.classList.toggle('dragover', isActive);
    if (isActive) {
        setDropZoneMessage('Drop glTF/glb files here');
        dropZone.classList.remove('hidden');
    } else if (!hasModel()) {
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
        const source = await createDroppedModelSource(fileList);
        await loadModelSource(source);
    } catch (error) {
        console.error(error);
        showDropZone('Failed to load model: ' + error.message, true);
    }
}

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

// ---- Boot ----
(async () => {
    await initEngine();
    if (initialModelInfo) {
        await loadModelSource(buildModelSourceFromInfo(initialModelInfo));
    } else {
        showDropZone('Drag & drop a .glb or .gltf model here, or click to choose files.');
    }
})();

async function createEnvCubeExpression(engine, baseuri, cameraEntity) {
  const environmentCubeTexture = new Rn.CubeTexture(engine);
  await environmentCubeTexture.loadTextureImages({
    baseUrl: baseuri + '/environment/environment',
    isNamePosNeg: true,
    hdriFormat: Rn.HdriFormat.LDR_SRGB,
    mipmapLevelNumber: 1
  });

  const sphereMaterial = Rn.MaterialHelper.createEnvConstantMaterial(engine);
  const sampler = new Rn.Sampler(engine, {
    wrapS: Rn.TextureParameter.ClampToEdge,
    wrapT: Rn.TextureParameter.ClampToEdge,
    minFilter: Rn.TextureParameter.Linear,
    magFilter: Rn.TextureParameter.Linear,
  });
  sphereMaterial.setTextureParameter("colorEnvTexture", environmentCubeTexture, sampler);
  sphereMaterial.setParameter("envHdriFormat", Rn.HdriFormat.LDR_SRGB.index);
  sphereMaterial.setParameter("makeOutputSrgb", 0);

  const spherePrimitive = new Rn.Sphere(engine);
  spherePrimitive.generate({
    radius: 1,
    widthSegments: 40,
    heightSegments: 40,
    material: sphereMaterial,
  });

  const sphereMesh = new Rn.Mesh(engine);
  sphereMesh.addPrimitive(spherePrimitive);

  const sphereEntity = Rn.createMeshEntity(engine);
  sphereEntity.getTransform().localScale = Rn.Vector3.fromCopyArray([-1, 1, 1]);
  sphereEntity.getTransform().localPosition = Rn.Vector3.fromCopyArray([0, 0, 0]);

  const sphereMeshComponent = sphereEntity.getMesh();
  sphereMeshComponent.setMesh(sphereMesh);

  const sphereRenderPass = new Rn.RenderPass(engine);
  sphereRenderPass.addEntities([sphereEntity]);

  const sphereExpression = new Rn.Expression();
  sphereExpression.addRenderPasses([sphereRenderPass]);

  return sphereExpression;
}
