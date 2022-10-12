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


// GUI
let gui = new dat.GUI();

var ROTATE = false;
var CAMERA = "";
var LIGHTS = false;
var IBL = true;
let guiRotate = gui.add(window, 'ROTATE').name('Rotate');
let guiLights = gui.add(window, 'LIGHTS').name('Lights');
let guiIBL    = gui.add(window, 'IBL').name('IBL');
let guiCameras = null;

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
  Rn.Config.isUboEnabled = false;
  await Rn.System.init({
    approach: Rn.ProcessApproach.DataTexture,
    canvas,
  });

  Rn.MeshRendererComponent.isDepthMaskTrueForTransparencies = true;

  // create ForwardRenderPipeline
  const forwardRenderPipeline = new Rn.ForwardRenderPipeline();
  forwardRenderPipeline.setup(canvas.width, canvas.height);

  // camera
  //const {cameraComponent, cameraEntity} = createCamera();
  const cameraEntity = Rn.EntityHelper.createCameraControllerEntity();
  const cameraComponent = cameraEntity.getCamera();

  cameraComponent.zNear = 0.1;
  cameraComponent.zFar = 1000.0;
  cameraComponent.setFovyAndChangeFocalLength(75.0);
  cameraComponent.aspect = canvas.width / canvas.height;

  // Lights
  const lightEntity1 = Rn.EntityHelper.createLightEntity();
  const lightComponent1 = lightEntity1.getLight();
  lightComponent1.type = Rn.LightType.Directional;
  lightEntity1.getTransform().translate = Rn.Vector3.fromCopyArray([1.0, 1.0, 100000.0]);
  lightEntity1.getComponent(Rn.LightComponent).intensity = Rn.Vector3.fromCopyArray([0, 0, 0]);
  lightEntity1.getComponent(Rn.LightComponent).type = Rn.LightType.Directional;
  lightEntity1.getTransform().rotate = Rn.Vector3.fromCopyArray([-Math.PI / 2, -Math.PI / 4, Math.PI / 4]);

  const lightEntity2 = Rn.EntityHelper.createLightEntity();
  const lightComponent2 = lightEntity2.getLight();
  lightComponent1.type = Rn.LightType.Directional;
  lightEntity2.getTransform().translate = Rn.Vector3.fromCopyArray([1.0, 1.0, 100000.0]);
  lightEntity2.getComponent(Rn.LightComponent).intensity = Rn.Vector3.fromCopyArray([0, 0, 0]);
  lightEntity2.getComponent(Rn.LightComponent).type = Rn.LightType.Directional;
  lightEntity2.getTransform().rotate = Rn.Vector3.fromCopyArray([Math.PI / 2, Math.PI / 4, -Math.PI / 4]);

  guiLights.onChange(function(value) {
    if (value) {
      lightEntity1.getComponent(Rn.LightComponent).intensity = Rn.Vector3.fromCopyArray([1, 1, 1]);
      lightEntity2.getComponent(Rn.LightComponent).intensity = Rn.Vector3.fromCopyArray([1, 1, 1]);
    } else {
      lightEntity1.getComponent(Rn.LightComponent).intensity = Rn.Vector3.fromCopyArray([0, 0, 0]);
      lightEntity2.getComponent(Rn.LightComponent).intensity = Rn.Vector3.fromCopyArray([0, 0, 0]);
    }
  });

  // gltf
  const mainExpression = (await Rn.GltfImporter.importFromUri(
    url,
    {
      cameraComponent: cameraComponent,
      defaultMaterialHelperArgumentArray: [
        {
          makeOutputSrgb: false,
        },
      ],
    }
  )).unwrapForce();

  // env
  const envExpression = createEnvCubeExpression(
    '../../textures/papermill_hdr',
    cameraEntity
  );

  const mainRenderPass = mainExpression.renderPasses[0];
  // cameraController
  const mainCameraControllerComponent = cameraEntity.getCameraController();
/*
  const controller = mainCameraControllerComponent.controller;
  controller.setTarget(mainRenderPass.sceneTopLevelGraphComponents[0].entity);
  controller.dolly = 0.83;
*/

  if (modelInfo.name != "VC") {
    forwardRenderPipeline.setExpressions([envExpression, mainExpression]);
  } else {
    forwardRenderPipeline.setExpressions([mainExpression]);
  }

  // lighting
  forwardRenderPipeline.setIBL({
    diffuse: {
      baseUri: '../../textures/papermill_hdr/diffuse/diffuse',
      hdriFormat: Rn.HdriFormat.RGBE_PNG,
      isNamePosNeg: true,
      mipmapLevelNumber: 1,
    },
    specular: {
      baseUri: '../../textures/papermill_hdr/specular/specular',
      hdriFormat: Rn.HdriFormat.RGBE_PNG,
      isNamePosNeg: true,
      mipmapLevelNumber: 10,
    },
  });

  // cameraController
  // Exclude a specific camera from the camera list
  const cameraComponents = Rn.ComponentRepository.getComponentsWithType(Rn.CameraComponent).filter(camera => camera.uniqueName.substring(0,1) !== "-");
  
  if (cameraComponents.length > 1) {
    //let cameraNames = cameraComponents.map(camera => camera.uniqueName);
    let cameraNames = cameraComponents.map((value, index) => "camera" + index); // TODO: Set to [default] for default
    const defaultIndex = Math.floor(Math.random() * cameraNames.length); // Randomly switch if there are multiple cameras
    CAMERA = cameraNames[defaultIndex];
    guiCameras = gui.add(window, 'CAMERA', cameraNames).name("Camera");
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
    const boardEntity = Rn.EntityHelper.createMeshEntity();
    const boardMeshComponent = boardEntity.getMesh();
    boardMeshComponent.setMesh(boardMesh);

    // If there is more than one camera, the selected camera will be used
    // (For some reason, it seems that there are two default cameras, so the condition is more than two.)
    if (cameraComponents.length > 1 && cameraIndex > 0) {
      if (selectedCameraComponent.type === Rn.CameraType.Perspective) {
        selectedCameraComponent.aspect = canvas.width / canvas.height; // Apply the aspect of the actual window instead of the glTF aspect information
      }
      mainRenderPass.cameraComponent = selectedCameraComponent;
      controller.setTarget(boardEntity);
      // If cameraIndex is 0, the default camera is used
    } else {
      mainRenderPass.cameraComponent = cameraComponent;
      controller.setTarget(boardEntity);
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

    if ( ROTATE ) {
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
  const cameraEntity = Rn.EntityHelper.createCameraControllerEntity();
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
  sphereMaterial.setTextureParameter(
    Rn.ShaderSemantics.ColorEnvTexture,
    environmentCubeTexture
  );
  sphereMaterial.setParameter(
    Rn.EnvConstantMaterialContent.EnvHdriFormat,
    Rn.HdriFormat.LDR_SRGB.index
  );

  const spherePrimitive = new Rn.Sphere();
  spherePrimitive.generate({
    radius: 20,
    widthSegments: 40,
    heightSegments: 40,
    material: sphereMaterial,
  });

  const sphereMesh = new Rn.Mesh();
  sphereMesh.addPrimitive(spherePrimitive);

  const sphereEntity = Rn.EntityHelper.createMeshEntity();
  sphereEntity.getTransform().scale = Rn.Vector3.fromCopyArray([-1, 1, 1]);
  sphereEntity.getTransform().translate = Rn.Vector3.fromCopyArray([0, 0, 0]);

  const sphereMeshComponent = sphereEntity.getMesh();
  sphereMeshComponent.setMesh(sphereMesh);

  const sphereRenderPass = new Rn.RenderPass();
  sphereRenderPass.addEntities([sphereEntity]);
  sphereRenderPass.cameraComponent = cameraEntity.getCamera();

  const sphereExpression = new Rn.Expression();
  sphereExpression.addRenderPasses([sphereRenderPass]);

  return sphereExpression;
}