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

const load = async function (time) {
  await Rn.ModuleManager.getInstance().loadModule('webgl');
  await Rn.ModuleManager.getInstance().loadModule('pbr');
  const system = Rn.System.getInstance();
  system.setProcessApproachAndCanvas(Rn.ProcessApproach.UniformWebGL1, document.getElementById('world'));

  // expressions
  const expressions = [];

  // env
  const envExpression = createEnvCubeExpression('../../textures/papermill');
  expressions.push(envExpression);

  // camera
  const entityRepository = Rn.EntityRepository.getInstance();
  const cameraEntity = entityRepository.createEntity([Rn.TransformComponent, Rn.SceneGraphComponent, Rn.CameraComponent, Rn.CameraControllerComponent]);
  const cameraComponent = cameraEntity.getComponent(Rn.CameraComponent);
  cameraComponent.zNear = 0.1;
  cameraComponent.zFar = 1000.0;
  cameraComponent.setFovyAndChangeFocalLength(20.0);
  cameraComponent.aspect = 1.0;

  // gltf
  const gltfImporter = Rn.GltfImporter.getInstance();
  //const mainExpression = await gltfImporter.import('../../../assets/gltf/2.0/AntiqueCamera/glTF/AntiqueCamera.gltf', {
  const mainExpression = await gltfImporter.import(url, {
    cameraComponent: cameraComponent
  });
  expressions.push(mainExpression);

  // cameraController
  const mainRenderPass = mainExpression.renderPasses[0];
  const mainCameraControllerComponent = cameraEntity.getComponent(Rn.CameraControllerComponent);
  const controller = mainCameraControllerComponent.controller;
  controller.setTarget(mainRenderPass.sceneTopLevelGraphComponents[0].entity);

  // lighting
  setIBL('../../textures/papermill');

  let count = 0;

  const draw = function () {
    //if (count > 100) {
    //  p.id = 'rendered';
    //  p.innerText = 'Rendered.';
    //}

    system.process(expressions);

    count++;

    requestAnimationFrame(draw);
  };

  draw();

  function createEnvCubeExpression(baseuri) {
    const environmentCubeTexture = new Rn.CubeTexture();
    environmentCubeTexture.baseUriToLoad = baseuri + '/environment/environment';
    //environmentCubeTexture.isNamePosNeg = true;
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
    sphereEntity.getTransform().scale = new Rn.Vector3(-1, 1, 1);
    sphereEntity.getTransform().translate = new Rn.Vector3(0, 20, -20);
    
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
    //specularCubeTexture.isNamePosNeg = true;
    specularCubeTexture.isNamePosNeg = false;
    specularCubeTexture.hdriFormat = Rn.HdriFormat.LDR_SRGB;
    specularCubeTexture.mipmapLevelNumber = 10;

    const diffuseCubeTexture = new Rn.CubeTexture();
    diffuseCubeTexture.baseUriToLoad = baseUri + '/diffuse/diffuse';
    diffuseCubeTexture.hdriFormat = Rn.HdriFormat.LDR_SRGB;
    diffuseCubeTexture.mipmapLevelNumber = 1;
    //diffuseCubeTexture.isNamePosNeg = true;
    diffuseCubeTexture.isNamePosNeg = false;

    const componentRepository = Rn.ComponentRepository.getInstance();
    const meshRendererComponents = componentRepository.getComponentsWithType(Rn.MeshRendererComponent);
    for (let i = 0; i < meshRendererComponents.length; i++) {
      const meshRendererComponent = meshRendererComponents[i];
      meshRendererComponent.specularCubeMap = specularCubeTexture;
      meshRendererComponent.diffuseCubeMap = diffuseCubeTexture;
    }
  }
};

document.body.onload = load;

function exportGltf2() {
  const exporter = Rn.Gltf2Exporter.getInstance();
  exporter.export('Rhodonite');
}
