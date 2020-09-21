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

const load = function(time){
  const promises = [];
  promises.push(Rn.ModuleManager.getInstance().loadModule('webgl'));
  promises.push(Rn.ModuleManager.getInstance().loadModule('pbr'));
  Promise.all(promises).then(function(){
    const importer = Rn.Gltf2Importer.getInstance();
    const system = Rn.System.getInstance();
    const gl = system.setProcessApproachAndCanvas(Rn.ProcessApproach.UniformWebGL1, document.getElementById('world'));
  
    const entityRepository = Rn.EntityRepository.getInstance();
  
    // Camera
    const cameraEntity = entityRepository.createEntity([Rn.TransformComponent, Rn.SceneGraphComponent, Rn.CameraComponent, Rn.CameraControllerComponent])
    const cameraComponent = cameraEntity.getComponent(Rn.CameraComponent);
    //cameraComponent.type = Rn.CameraTyp]e.Orthographic;
    cameraComponent.parameters = new Rn.Vector4(0.1, 1000, 60, 1);
    cameraEntity.getTransform().translate = new Rn.Vector3(0.0, 0, 100);
  
/*  
*/
    // Lights
    const lightEntity = entityRepository.createEntity([Rn.TransformComponent, Rn.SceneGraphComponent, Rn.LightComponent])
    lightEntity.getTransform().translate = new Rn.Vector3(1.0, 1000.0, 1.0);
    lightEntity.getComponent(Rn.LightComponent).intensity = new Rn.Vector3(0.5, 0.5, 0.5);

    const lightEntity2 = entityRepository.createEntity([Rn.TransformComponent, Rn.SceneGraphComponent, Rn.LightComponent])
    lightEntity2.getTransform().translate = new Rn.Vector3(0.0, 0.0, 1.0);
    lightEntity2.getComponent(Rn.LightComponent).intensity = new Rn.Vector3(0.5, 0.5, 0.5);
    //lightEntity2.getTransform().rotate = new Rn.Vector3(Math.PI/2, 0, 0);
    //lightEntity2.getComponent(Rn.LightComponent).type = Rn.LightType.Directional;
  
    // const response = await importer.import('../../../assets/gltf/2.0/FlightHelmet/glTF/FlightHelmet.gltf');
    const promise= importer.import(url);
    promise.then(function(response){
      const modelConverter = Rn.ModelConverter.getInstance();
      const rootGroup = modelConverter.convertToRhodoniteObject(response);
      //rootGroup.getTransform().translate = new Rn.Vector3(1.0, 0, 0);
    //  rootGroup.getTransform().rotate = new Rn.Vector3(0, 1.0, 0.0);
    
    
      // CameraComponent
      const cameraControllerComponent = cameraEntity.getComponent(Rn.CameraControllerComponent);
      const controller = cameraControllerComponent.controller;
      controller.setTarget(rootGroup);
      //cameraControllerComponent.setTarget(rootGroup);
    
      // Env Map
      const specularCubeTexture = new Rn.CubeTexture();
      specularCubeTexture.baseUriToLoad = '../../textures/papermill/specular/specular';
      specularCubeTexture.mipmapLevelNumber = 10;
      const diffuseCubeTexture = new Rn.CubeTexture();
      diffuseCubeTexture.baseUriToLoad = '../../textures/papermill/diffuse/diffuse';
      diffuseCubeTexture.mipmapLevelNumber = 1;
      const componentRepository = Rn.ComponentRepository.getInstance();
      const meshRendererComponents = componentRepository.getComponentsWithType(Rn.MeshRendererComponent);
      for (let meshRendererComponent of meshRendererComponents) {
        meshRendererComponent.specularCubeMap = specularCubeTexture;
        meshRendererComponent.diffuseCubeMap = diffuseCubeTexture;
      }
    
      // renderPass
      const renderPass = new Rn.RenderPass();
      renderPass.clearColor = new Rn.Vector3(0.5, 0.5, 0.5);
      renderPass.toClearColorBuffer = true;
      renderPass.addEntities([rootGroup])

      // expression
      const expression = new Rn.Expression();
      expression.addRenderPasses([renderPass]);
    
      Rn.CameraComponent.main = 0;
      let startTime = Date.now();
      const rotationVec3 = Rn.MutableVector3.one();
      let count = 0;
      const draw = function(time) {
    
        if (p == null && count > 0) {
          if (response != null) {
    
            gl.enable(gl.DEPTH_TEST);
            gl.viewport(0, 0, 800, 800);
            gl.clearColor(0.8, 0.8, 0.8, 1.0);
            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
          }
    
          p = document.createElement('p');
          p.setAttribute("id", "rendered");
          p.innerText = 'Rendered.';
          document.body.appendChild(p);
    
        }
    
        const date = new Date();
        const globalTime = (date.getTime() - startTime) / 1000;
        Rn.AnimationComponent.globalTime = globalTime;
        if (globalTime > Rn.AnimationComponent.endInputValue) {
          startTime = date.getTime();
        }
    
        system.process([expression]);
        count++;
    
        requestAnimationFrame(draw);
      }
    
      draw();
    
    });
  });
}

document.body.onload = load;

function exportGltf2() {
  const exporter = Rn.Gltf2Exporter.getInstance();
  exporter.export('Rhodonite');
}
