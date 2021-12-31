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

const load = async function () {
  Rn.Config.maxCameraNumber = 20;
  Rn.Config.isUboEnabled = false; // TODO: Currently, using UBO in Safari causes an error, so it is temporarily turned off.
  await Rn.ModuleManager.getInstance().loadModule('webgl');
  await Rn.ModuleManager.getInstance().loadModule('pbr');
  const system = Rn.System.getInstance();
  //const gl = system.setProcessApproachAndCanvas(Rn.ProcessApproach.UniformWebGL1, canvas);
  //const gl = system.setProcessApproachAndCanvas(Rn.ProcessApproach.FastestWebGL1, canvas);
  //const gl = system.setProcessApproachAndCanvas(Rn.ProcessApproach.UniformWebGL2, canvas);
  const gl = system.setProcessApproachAndCanvas(Rn.ProcessApproach.FastestWebGL2, canvas);
  
  // expressions
  const expressions = [];

  // camera
  const entityRepository = Rn.EntityRepository.getInstance();
  const cameraEntity = entityRepository.createEntity([Rn.TransformComponent, Rn.SceneGraphComponent, Rn.CameraComponent, Rn.CameraControllerComponent]);
  const cameraComponent = cameraEntity.getComponent(Rn.CameraComponent);
  cameraComponent.zNear = 0.1;
  cameraComponent.zFar = 1000.0;
  cameraComponent.setFovyAndChangeFocalLength(75.0);
  cameraComponent.aspect = canvas.width / canvas.height;

  // Lights
  const lightEntity1 = entityRepository.createEntity([Rn.TransformComponent, Rn.SceneGraphComponent, Rn.LightComponent])
  lightEntity1.getTransform().translate = Rn.Vector3.fromCopyArray([1.0, 1.0, 100000.0]);
  //lightEntity1.getComponent(Rn.LightComponent).intensity = Rn.Vector3.fromCopyArray([1, 1, 1]);
  lightEntity1.getComponent(Rn.LightComponent).intensity = Rn.Vector3.fromCopyArray([0, 0, 0]);
  lightEntity1.getComponent(Rn.LightComponent).type = Rn.LightType.Directional;
  lightEntity1.getTransform().rotate = Rn.Vector3.fromCopyArray([-Math.PI / 2, -Math.PI / 4, Math.PI / 4]);

  const lightEntity2 = entityRepository.createEntity([Rn.TransformComponent, Rn.SceneGraphComponent, Rn.LightComponent])
  lightEntity2.getTransform().translate = Rn.Vector3.fromCopyArray([1.0, 1.0, 100000.0]);
  //lightEntity2.getComponent(Rn.LightComponent).intensity = Rn.Vector3.fromCopyArray([1, 1, 1]);
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
  const gltfImporter = Rn.GltfImporter.getInstance();
  const mainExpression = await gltfImporter.import(url, {
      defaultMaterialHelperArgumentArray: [
        {
          makeOutputSrgb: false,
        },
      ],
      cameraComponent: cameraComponent
  });
  const mainRenderPass = mainExpression.renderPasses[0];
  expressions.push(mainExpression);
  
  // env
  const envExpression = createEnvCubeExpression('../../textures/papermill_hdr');
  // TODO: VC.gltf has been removed from Cubemap due to inconsistencies with automatic camera calculations
  if (modelInfo.name != "VC") {
    expressions.push(envExpression);
  }

  // post effects
  const expressionPostEffect = new Rn.Expression();
  expressions.push(expressionPostEffect);

  // gamma correction
  const gammaTargetFramebuffer = Rn.RenderableHelper.createTexturesForRenderTarget(2048, 2048, 1, {});
  for (let renderPass of mainExpression.renderPasses) {
    renderPass.setFramebuffer(gammaTargetFramebuffer);
    renderPass.toClearColorBuffer = false;
    renderPass.toClearDepthBuffer = false;
  }
  mainExpression.renderPasses[0].toClearColorBuffer = true;
  mainExpression.renderPasses[0].toClearDepthBuffer = true;
  mainExpression.renderPasses[0].clearColor = Rn.Vector4.fromCopyArray4([0, 0, 0, 0]);
  
  const gammaRenderPass = createPostEffectRenderPass('createGammaCorrectionMaterial');
  setTextureParameterForMeshComponents(gammaRenderPass.meshComponents, Rn.ShaderSemantics.BaseColorTexture, gammaTargetFramebuffer.colorAttachments[0]);

  expressionPostEffect.addRenderPasses([gammaRenderPass]);
  
  // cameraController
  const componentRepository = Rn.ComponentRepository.getInstance();
  // Exclude a specific camera from the camera list
  const cameraComponents = componentRepository.getComponentsWithType(Rn.CameraComponent).filter(camera => camera.uniqueName.substring(0,1) !== "-");
  
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
    const boardEntity = generateEntity();
    const boardMeshComponent = boardEntity.getComponent(Rn.MeshComponent);
    boardMeshComponent.setMesh(boardMesh);

    // If there is more than one camera, the selected camera will be used
    // (For some reason, it seems that there are two default cameras, so the condition is more than two.)
    if (cameraComponents.length > 1 && cameraIndex > 0) {
      if (selectedCameraComponent.type === Rn.CameraType.Perspective) {
        selectedCameraComponent.aspect = canvas.width / canvas.height; // Apply the aspect of the actual window instead of the glTF aspect information
      }
      mainRenderPass.cameraComponent = selectedCameraComponent;
      //controller.setTarget(mainRenderPass.sceneTopLevelGraphComponents[0].entity);
      controller.setTarget(boardEntity);
      // If cameraIndex is 0, the default camera is used
    } else {
      mainRenderPass.cameraComponent = cameraComponent;
      //controller.setTarget(mainRenderPass.sceneTopLevelGraphComponents[0].entity);
      controller.setTarget(boardEntity);
    }
  }

  // lighting
  setIBL('../../textures/papermill_hdr');

  guiIBL.onChange(function(value) {
    const componentRepository = Rn.ComponentRepository.getInstance();
    const meshRendererComponents = componentRepository.getComponentsWithType(Rn.MeshRendererComponent);
    for (let i = 0; i < meshRendererComponents.length; i++) {
      const meshRendererComponent = meshRendererComponents[i];
      meshRendererComponent.specularCubeMapContribution = value ? 1.0 : 0.0;
      meshRendererComponent.diffuseCubeMapContribution = value ? 1.0 : 0.0;
    }
  });
  
  let startTime = Date.now();
  let count = 0;
  let angle = 0;

  const draw = function () {
    angle += 0.2;
    const date = new Date();
    const rotation = 0.001 * (date.getTime() - startTime);
    const time = (date.getTime() - startTime) / 1000;
    Rn.AnimationComponent.globalTime = time;
    if (time > Rn.AnimationComponent.endInputValue) {
      startTime = date.getTime();
    }

    if ( ROTATE ) {
      const mainCameraControllerComponent = cameraEntity.getComponent(Rn.CameraControllerComponent);
      const controller = mainCameraControllerComponent.controller;
      controller.rotX = angle;
    }

    system.process(expressions);
    count++;
    requestAnimationFrame(draw);
  };

  draw();

  function createEnvCubeExpression(baseuri) {
    const environmentCubeTexture = new Rn.CubeTexture();
    environmentCubeTexture.baseUriToLoad = baseuri + '/environment/environment';
    environmentCubeTexture.isNamePosNeg = true;
    environmentCubeTexture.hdriFormat = Rn.HdriFormat.LDR_LINEAR;
    environmentCubeTexture.mipmapLevelNumber = 1;
    environmentCubeTexture.loadTextureImagesAsync();

    const sphereMaterial = Rn.MaterialHelper.createEnvConstantMaterial();
    sphereMaterial.setTextureParameter(Rn.ShaderSemantics.ColorEnvTexture, environmentCubeTexture);
    sphereMaterial.setParameter(Rn.EnvConstantSingleMaterialNode.EnvHdriFormat, Rn.HdriFormat.LDR_LINEAR.index);
    sphereMaterial.setParameter(Rn.ShaderSemantics.MakeOutputSrgb, false);

    const spherePrimitive = new Rn.Sphere();
    spherePrimitive.generate({ radius: 50, widthSegments: 40, heightSegments: 40, material: sphereMaterial });

    const sphereMesh = new Rn.Mesh();
    sphereMesh.addPrimitive(spherePrimitive);

    const entityRepository = Rn.EntityRepository.getInstance();
    const sphereEntity = entityRepository.createEntity([Rn.TransformComponent, Rn.SceneGraphComponent, Rn.MeshComponent, Rn.MeshRendererComponent]);
    sphereEntity.getTransform().scale = Rn.Vector3.fromCopyArray([-1/scale, 1/scale, 1/scale]);

    const sphereMeshComponent = sphereEntity.getComponent(Rn.MeshComponent);
    sphereMeshComponent.setMesh(sphereMesh);

    const sphereRenderPass = new Rn.RenderPass();
    sphereRenderPass.addEntities([sphereEntity]);

    const sphereExpression = new Rn.Expression();
    sphereExpression.addRenderPasses([sphereRenderPass]);

    return sphereExpression;
  }

  function setIBL(baseUri) {
    const specularCubeTexture = new Rn.CubeTexture();
    specularCubeTexture.baseUriToLoad = baseUri + '/specular/specular';
    specularCubeTexture.isNamePosNeg = true;
    specularCubeTexture.hdriFormat = Rn.HdriFormat.HDR_LINEAR;
    specularCubeTexture.mipmapLevelNumber = 10;

    const diffuseCubeTexture = new Rn.CubeTexture();
    diffuseCubeTexture.baseUriToLoad = baseUri + '/diffuse/diffuse';
    diffuseCubeTexture.isNamePosNeg = true;
    diffuseCubeTexture.hdriFormat = Rn.HdriFormat.HDR_LINEAR;
    diffuseCubeTexture.mipmapLevelNumber = 1;

    const componentRepository = Rn.ComponentRepository.getInstance();
    const meshRendererComponents = componentRepository.getComponentsWithType(Rn.MeshRendererComponent);
    for (let i = 0; i < meshRendererComponents.length; i++) {
      const meshRendererComponent = meshRendererComponents[i];
      meshRendererComponent.specularCubeMap = specularCubeTexture;
      meshRendererComponent.diffuseCubeMap = diffuseCubeTexture;
    }
  }

  function createPostEffectRenderPass(materialHelperFunctionStr, arrayOfHelperFunctionArgument = []) {
    const boardPrimitive = new Rn.Plane();
    const material = Rn.MaterialHelper[materialHelperFunctionStr].apply(this, arrayOfHelperFunctionArgument);
    material.alphaMode = Rn.AlphaMode.Translucent;
    boardPrimitive.generate({
      width: 1, height: 1, uSpan: 1, vSpan: 1, isUVRepeat: false,
      material: material
    });

    const boardEntity = generateEntity();
    boardEntity.getTransform().rotate = Rn.Vector3.fromCopyArray([Math.PI / 2, 0.0, 0.0]);
    boardEntity.getTransform().translate = Rn.Vector3.fromCopyArray([0.0, 0.0, -0.5]);

    const boardMesh = new Rn.Mesh();
    boardMesh.addPrimitive(boardPrimitive);
    const boardMeshComponent = boardEntity.getComponent(Rn.MeshComponent);
    boardMeshComponent.setMesh(boardMesh);

    const entityRepository = Rn.EntityRepository.getInstance();
    const cameraEntity = entityRepository.createEntity([Rn.TransformComponent, Rn.SceneGraphComponent, Rn.CameraComponent]);
    const cameraComponent = cameraEntity.getComponent(Rn.CameraComponent);
    cameraComponent.zFarInner = 1.0;
    // Rename to exclude certain cameras from the list of cameras.
    cameraComponent.tryToSetUniqueName("-" + cameraComponent.uniqueName);

    const renderPass = new Rn.RenderPass();
    renderPass.toClearColorBuffer = false;
    renderPass.toClearDepthBuffer = false;
    renderPass.cameraComponent = cameraComponent;
    renderPass.addEntities([boardEntity]);

    return renderPass;
  }

  function generateEntity() {
    const repo = Rn.EntityRepository.getInstance();
    const entity = repo.createEntity([Rn.TransformComponent, Rn.SceneGraphComponent, Rn.MeshComponent, Rn.MeshRendererComponent]);
    return entity;
  }

  function setTextureParameterForMeshComponents(meshComponents, shaderSemantic, value) {
    for (let i = 0; i < meshComponents.length; i++) {
      const mesh = meshComponents[i].mesh;
      if (!mesh) continue;

      const primitiveNumber = mesh.getPrimitiveNumber();
      for (let j = 0; j < primitiveNumber; j++) {
        const primitive = mesh.getPrimitiveAt(j);
        primitive.material.setTextureParameter(shaderSemantic, value);
      }
    }
  }
};

document.body.onload = load;

function exportGltf2() {
  const exporter = Rn.Gltf2Exporter.getInstance();
  exporter.export('Rhodonite');
}
