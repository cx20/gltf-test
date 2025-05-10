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

import Rn from 'rhodonite';
import * as dat from 'dat.gui';

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

let url = "../../" + modelInfo.category + "/" + modelInfo.path;
if(modelInfo.url) {
    url = modelInfo.url;
}

let p = null;
let scale = modelInfo.scale;

const canvas = document.getElementById('world');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

(async () => {
  await Rn.ModuleManager.getInstance().loadModule('webgpu');
  
  Rn.Config.isUboEnabled = false;
  Rn.Config.maxLightNumberInShader = 8;
  Rn.Config.maxMorphTargetNumber = 8;
  Rn.Config.maxSkeletalBoneNumber = 400
  Rn.Config.maxSkeletonNumber = 84;
  await Rn.System.init({
    approach: Rn.ProcessApproach.WebGPU,
    canvas,
  });

  Rn.MeshRendererComponent.isDepthMaskTrueForTransparencies = true;

  // create ForwardRenderPipeline
  const forwardRenderPipeline = new Rn.ForwardRenderPipeline();
  forwardRenderPipeline.setup(canvas.width, canvas.height, {
    //isBloom: true,
    isBloom: false, // TODO: Set to true to enable Bloom. This is a heavy process, so it is turned off in this sample.
    isShadow: false,
  });
  
  // camera
  //const {cameraComponent, cameraEntity} = createCamera();
  const cameraEntity = Rn.createCameraControllerEntity();
  const cameraComponent = cameraEntity.getCamera();

  cameraComponent.zNear = 0.1;
  cameraComponent.zFar = 1000.0;
  cameraComponent.setFovyAndChangeFocalLength(75.0);
  cameraComponent.aspect = canvas.width / canvas.height;

  // Lights
  const lightEntity1 = Rn.createLightEntity();
  const lightComponent1 = lightEntity1.getLight();
  lightComponent1.type = Rn.LightType.Directional;
  lightEntity1.getTransform().localPosition = Rn.Vector3.fromCopyArray([1.0, 1.0, 100000.0]);
  lightEntity1.getComponent(Rn.LightComponent).intensity = 0;
  lightEntity1.getComponent(Rn.LightComponent).type = Rn.LightType.Directional;
  lightEntity1.getTransform().localEulerAngles = Rn.Vector3.fromCopyArray([-Math.PI / 2, -Math.PI / 4, Math.PI / 4]);

  const lightEntity2 = Rn.createLightEntity();
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

  // TODO:
/*
  guiBloom.onChange(function(value) {
    forwardRenderPipeline.setup(canvas.width, canvas.height, {
      isBloom: value,
      isShadow: false,
    });
  });
*/

  // gltf
  const mainExpression = (await Rn.GltfImporter.importFromUri(
    url,
    {
      defaultMaterialHelperArgumentArray: [
        {
          makeOutputSrgb: false,
        },
      ],
    }
  )).unwrapForce();

  // env
  const envExpression = createEnvCubeExpression('../../textures/papermill_hdr', cameraEntity);

  const mainRenderPass = mainExpression.renderPasses[0];
  // cameraController
  const mainCameraControllerComponent = cameraEntity.getCameraController();
  const controller = mainCameraControllerComponent.controller;
  const entities = mainRenderPass.entities;
  controller.setTargets(entities);
  controller.dolly = 0.83;

  // TODO: KHR_materials_variants support
  let variantNames = [];
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

  if (modelInfo.name != "VirtualCity") {
    await forwardRenderPipeline.setExpressions([envExpression, mainExpression]);
  } else {
    await forwardRenderPipeline.setExpressions([mainExpression]);
  }

  const diffuseCubeTexture = new Rn.CubeTexture();
  diffuseCubeTexture.baseUriToLoad = "../../textures/papermill_hdr/diffuse/diffuse";
  diffuseCubeTexture.isNamePosNeg = true;
  diffuseCubeTexture.hdriFormat = Rn.HdriFormat.RGBE_PNG;
  diffuseCubeTexture.mipmapLevelNumber = 1;
  
  const specularCubeTexture = new Rn.CubeTexture();
  specularCubeTexture.baseUriToLoad = "../../textures/papermill_hdr/specular/specular";
  specularCubeTexture.isNamePosNeg = true;
  specularCubeTexture.hdriFormat = Rn.HdriFormat.RGBE_PNG;
  specularCubeTexture.mipmapLevelNumber = 10;

  await forwardRenderPipeline.setIBLTextures(diffuseCubeTexture, specularCubeTexture);

  // cameraController
  // Exclude a specific camera from the camera list
  const cameraComponents = Rn.ComponentRepository.getComponentsWithType(Rn.CameraComponent).filter(
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
  
  function selectCameraByIndex(cameraIndex) {
    let selectedCameraComponent = cameraComponents[cameraIndex];
    const mainCameraControllerComponent = cameraEntity.getComponent(Rn.CameraControllerComponent);
    const controller = mainCameraControllerComponent.controller;

    controller.dolly = 0.82;
    // TODO: The following code is a monkey patch to enable the dat.gui pull-down event
    controller.unregisterEventListeners();
    controller.registerEventListeners(canvas);

    // Prepare Entity to fix the camera target
    const boardPrimitive = new Rn.Plane();
    boardPrimitive.generate({width: 3 / scale, height: 3 / scale, uSpan: 1, vSpan: 1, isUVRepeat: false});
    const boardMesh = new Rn.Mesh();
    boardMesh.addPrimitive(boardPrimitive);
    const boardEntity = Rn.createMeshEntity();
    const boardMeshComponent = boardEntity.getMesh();
    boardMeshComponent.setMesh(boardMesh);

    // If there is more than one camera, the selected camera will be used
    // (For some reason, it seems that there are two default cameras, so the condition is more than two.)
    if (cameraComponents.length > 1 && cameraIndex > 0) {
      if (selectedCameraComponent.type === Rn.CameraType.Perspective) {
        selectedCameraComponent.aspect = canvas.width / canvas.height; // Apply the aspect of the actual window instead of the glTF aspect information
      }
      Rn.CameraComponent.current = selectedCameraComponent.componentSID;
      const zFar = selectedCameraComponent.zFar * 0.95;
      envExpression.renderPasses[0].entities[0].getTransform().localScale = Rn.Vector3.fromCopy3(-zFar, zFar, zFar)
    } else {
      Rn.CameraComponent.current = cameraComponent.componentSID;
      const zFar = cameraComponent.zFar * 0.95;
      envExpression.renderPasses[0].entities[0].getTransform().localScale = Rn.Vector3.fromCopy3(-zFar, zFar, zFar)
    }
  }

  guiIBL.onChange(function(value) {
    const meshRendererComponents = Rn.ComponentRepository.getComponentsWithType(Rn.MeshRendererComponent);
    for (let i = 0; i < meshRendererComponents.length; i++) {
      const meshRendererComponent = meshRendererComponents[i];
      meshRendererComponent.specularCubeMapContribution = value ? 1.0 : 0.0;
      meshRendererComponent.diffuseCubeMapContribution = value ? 1.0 : 0.0;
    }
  });

  let count = 0;
  let angle = 0;
  let startTime = Date.now();

  const draw = function (frame) {
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

    Rn.System.process(frame);

    count++;
  };

  forwardRenderPipeline.startRenderLoop(draw);
})();

function createCamera() {
  const cameraEntity = Rn.createCameraControllerEntity();
  const cameraComponent = cameraEntity.getCamera();
  cameraComponent.zNear = 0.1;
  cameraComponent.zFar = 1000.0;
  cameraComponent.setFovyAndChangeFocalLength(30.0);
  cameraComponent.aspect = 1.0;
  return {cameraComponent, cameraEntity};
}

function createEnvCubeExpression(baseuri, cameraEntity) {
  const environmentCubeTexture = new Rn.CubeTexture();
  environmentCubeTexture.baseUriToLoad = baseuri + '/environment/environment';
  environmentCubeTexture.isNamePosNeg = true;
  environmentCubeTexture.hdriFormat = Rn.HdriFormat.LDR_SRGB;
  environmentCubeTexture.mipmapLevelNumber = 1;
  environmentCubeTexture.loadTextureImagesAsync();

  const sphereMaterial = Rn.MaterialHelper.createEnvConstantMaterial();
  const sampler = new Rn.Sampler({
    wrapS: Rn.TextureParameter.ClampToEdge,
    wrapT: Rn.TextureParameter.ClampToEdge,
    minFilter: Rn.TextureParameter.Linear,
    magFilter: Rn.TextureParameter.Linear,
  });
  sphereMaterial.setTextureParameter("colorEnvTexture", environmentCubeTexture, sampler);
  sphereMaterial.setParameter("envHdriFormat", Rn.HdriFormat.LDR_SRGB.index);
  sphereMaterial.setParameter("makeOutputSrgb", 0);
  
  const spherePrimitive = new Rn.Sphere();
  spherePrimitive.generate({
    radius: 1,
    widthSegments: 40,
    heightSegments: 40,
    material: sphereMaterial,
  });

  const sphereMesh = new Rn.Mesh();
  sphereMesh.addPrimitive(spherePrimitive);

  const sphereEntity = Rn.createMeshEntity();
  sphereEntity.getTransform().localScale = Rn.Vector3.fromCopyArray([-1, 1, 1]);
  sphereEntity.getTransform().localPosition = Rn.Vector3.fromCopyArray([0, 0, 0]);

  const sphereMeshComponent = sphereEntity.getMesh();
  sphereMeshComponent.setMesh(sphereMesh);

  const sphereRenderPass = new Rn.RenderPass();
  sphereRenderPass.addEntities([sphereEntity]);

  const sphereExpression = new Rn.Expression();
  sphereExpression.addRenderPasses([sphereRenderPass]);

  return sphereExpression;
}