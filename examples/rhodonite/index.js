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

let url = "../../" + modelInfo.category + "/" + modelInfo.path;
if(modelInfo.url) {
    url = modelInfo.url;
}

let p = null;
let scale = modelInfo.scale;

const c = document.getElementById('world');
c.width = window.innerWidth;
c.height = window.innerHeight;

const load = async function () {
  await Rn.ModuleManager.getInstance().loadModule('webgl');
  await Rn.ModuleManager.getInstance().loadModule('pbr');
  const system = Rn.System.getInstance();
  //const c = document.getElementById('world');
  //const gl = system.setProcessApproachAndCanvas(Rn.ProcessApproach.UniformWebGL1, c);
  const gl = system.setProcessApproachAndCanvas(Rn.ProcessApproach.FastestWebGL1, c);
  
  // expressions
  const expressions = [];

  // camera
  const entityRepository = Rn.EntityRepository.getInstance();
  const cameraEntity = entityRepository.createEntity([Rn.TransformComponent, Rn.SceneGraphComponent, Rn.CameraComponent, Rn.CameraControllerComponent]);
  const cameraComponent = cameraEntity.getComponent(Rn.CameraComponent);
  cameraComponent.zNear = 0.1;
  cameraComponent.zFar = 1000.0;
  cameraComponent.setFovyAndChangeFocalLength(75.0);
  cameraComponent.aspect = c.width / c.height;

  // gltf
  const gltfImporter = Rn.GltfImporter.getInstance();
  const mainExpression = await gltfImporter.import(url, {
    cameraComponent: cameraComponent
  });
  expressions.push(mainExpression);

  // env
  const envExpression = createEnvCubeExpression('../../textures/papermill');
  expressions.push(envExpression);

  // post effects
  const expressionPostEffect = new Rn.Expression();
  expressions.push(expressionPostEffect);

  // gamma correction
  const gammaTargetFramebuffer = Rn.RenderableHelper.createTexturesForRenderTarget(1024, 1024, 1, {});
  for (let renderPass of mainExpression.renderPasses) {
    renderPass.setFramebuffer(gammaTargetFramebuffer);
    renderPass.toClearColorBuffer = false;
    renderPass.toClearDepthBuffer = false;
  }
  mainExpression.renderPasses[0].toClearColorBuffer = true;
  mainExpression.renderPasses[0].toClearDepthBuffer = true;
  mainExpression.renderPasses[0].clearColor = new Rn.Vector4(0, 0, 0, 0);

  const gammaRenderPass = createPostEffectRenderPass('createGammaCorrectionMaterial');
  setTextureParameterForMeshComponents(gammaRenderPass.meshComponents, Rn.ShaderSemantics.BaseColorTexture, gammaTargetFramebuffer.colorAttachments[0]);

  expressionPostEffect.addRenderPasses([gammaRenderPass]);

  // cameraController
  const mainRenderPass = mainExpression.renderPasses[0];
  const mainCameraControllerComponent = cameraEntity.getComponent(Rn.CameraControllerComponent);
  const controller = mainCameraControllerComponent.controller;
  controller.dolly = 0.82;
  controller.setTarget(mainRenderPass.sceneTopLevelGraphComponents[0].entity);

  // lighting
  setIBL('../../textures/papermill');

  let startTime = Date.now();
  let count = 0;

  const draw = function () {
    const date = new Date();
    const rotation = 0.001 * (date.getTime() - startTime);
    const time = (date.getTime() - startTime) / 1000;
    Rn.AnimationComponent.globalTime = time;
    if (time > Rn.AnimationComponent.endInputValue) {
      startTime = date.getTime();
    }

    system.process(expressions);
    count++;
    requestAnimationFrame(draw);
  };

  draw();

  function createEnvCubeExpression(baseuri) {
    const environmentCubeTexture = new Rn.CubeTexture();
    environmentCubeTexture.baseUriToLoad = baseuri + '/environment/environment';
    environmentCubeTexture.isNamePosNeg = false;
    environmentCubeTexture.hdriFormat = Rn.HdriFormat.LDR_LINEAR;
    environmentCubeTexture.mipmapLevelNumber = 1;
    environmentCubeTexture.loadTextureImagesAsync();

    const sphereMaterial = Rn.MaterialHelper.createEnvConstantMaterial();
    sphereMaterial.setTextureParameter(Rn.ShaderSemantics.ColorEnvTexture, environmentCubeTexture);
    sphereMaterial.setParameter(Rn.EnvConstantSingleMaterialNode.EnvHdriFormat, Rn.HdriFormat.LDR_LINEAR.index);

    const spherePrimitive = new Rn.Sphere();
    spherePrimitive.generate({ radius: 50, widthSegments: 40, heightSegments: 40, material: sphereMaterial });

    const sphereMesh = new Rn.Mesh();
    sphereMesh.addPrimitive(spherePrimitive);

    const entityRepository = Rn.EntityRepository.getInstance();
    const sphereEntity = entityRepository.createEntity([Rn.TransformComponent, Rn.SceneGraphComponent, Rn.MeshComponent, Rn.MeshRendererComponent]);
    sphereEntity.getTransform().scale = new Rn.Vector3(-1/scale, 1/scale, 1/scale);

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
    specularCubeTexture.isNamePosNeg = false;
    specularCubeTexture.hdriFormat = Rn.HdriFormat.LDR_SRGB;
    specularCubeTexture.mipmapLevelNumber = 10;

    const diffuseCubeTexture = new Rn.CubeTexture();
    diffuseCubeTexture.baseUriToLoad = baseUri + '/diffuse/diffuse';
    diffuseCubeTexture.hdriFormat = Rn.HdriFormat.LDR_SRGB;
    diffuseCubeTexture.mipmapLevelNumber = 1;
    diffuseCubeTexture.isNamePosNeg = false;

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
    boardEntity.getTransform().rotate = new Rn.Vector3(Math.PI / 2, 0.0, 0.0);
    boardEntity.getTransform().translate = new Rn.Vector3(0.0, 0.0, -0.5);

    const boardMesh = new Rn.Mesh();
    boardMesh.addPrimitive(boardPrimitive);
    const boardMeshComponent = boardEntity.getComponent(Rn.MeshComponent);
    boardMeshComponent.setMesh(boardMesh);

    const entityRepository = Rn.EntityRepository.getInstance();
    const cameraEntity = entityRepository.createEntity([Rn.TransformComponent, Rn.SceneGraphComponent, Rn.CameraComponent]);
    const cameraComponent = cameraEntity.getComponent(Rn.CameraComponent);
    cameraComponent.zFarInner = 1.0;

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
