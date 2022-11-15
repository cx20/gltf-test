let modelInfo = ModelIndex.getCurrentModel()
if (!modelInfo) {
  modelInfo = TutorialModelIndex.getCurrentModel()
}
if (!modelInfo) {
  modelInfo = TutorialPbrModelIndex.getCurrentModel()
}
if (!modelInfo) {
  modelInfo = TutorialFurtherPbrModelIndex.getCurrentModel()
}
if (!modelInfo) {
  modelInfo = TutorialFeatureTestModelIndex.getCurrentModel()
}
if (!modelInfo) {
  modelInfo = TutorialExtensionTestModelIndex.getCurrentModel()
}
if (!modelInfo) {
  modelInfo = TutorialWipExtensionTestModelIndex.getCurrentModel()
}
if (!modelInfo) {
  document.getElementById('container').innerHTML =
    'Please specify a model to load'
  throw new Error('Model not specified or not found in list.')
}

function getModelUrl() {
  if (modelInfo.url) return modelInfo.url

  return `../../${modelInfo.category}/${modelInfo.path}`
}

const State = {
  rotate: false,
  axis: true,
  lights: true,
  skybox: true
}

const createRenderer = pexRenderer
const createContext = pexContext
const { loadJSON, loadBinary } = pexIo
const { vec3, quat } = pexMath

const aabb = {
  size(aabb, out) {
    if (out === undefined) {
      out = [0, 0, 0]
    }
    out[0] = Math.abs(aabb[1][0] - aabb[0][0])
    out[1] = Math.abs(aabb[1][1] - aabb[0][1])
    out[2] = Math.abs(aabb[1][2] - aabb[0][2])
    return out
  },
  center(aabb, out) {
    if (out === undefined) {
      out = [0, 0, 0]
    }
    out[0] = (aabb[0][0] + aabb[1][0]) / 2
    out[1] = (aabb[0][1] + aabb[1][1]) / 2
    out[2] = (aabb[0][2] + aabb[1][2]) / 2
    return out
  },
  isEmpty(aabb) {
    return (
      aabb[0][0] > aabb[1][0] ||
      aabb[0][1] > aabb[1][1] ||
      aabb[0][2] > aabb[1][2]
    )
  }
}

function rescaleScene(scene) {
  const sceneBounds = scene.root.transform.worldBounds
  const sceneSize = aabb.size(scene.root.transform.worldBounds)
  const sceneCenter = aabb.center(scene.root.transform.worldBounds)
  const sceneScale =
    1 / (Math.max(sceneSize[0], Math.max(sceneSize[1], sceneSize[2])) || 1)

  if (!aabb.isEmpty(sceneBounds)) {
    scene.root.transform.set({
      position: vec3.scale(
        [-sceneCenter[0], -sceneBounds[0][1], -sceneCenter[2]],
        sceneScale
      ),
      scale: [sceneScale, sceneScale, sceneScale]
    })
  }
}

// Start
const ctx = createContext({
  powerPreference: 'high-performance'
})
ctx.gl.getExtension('EXT_shader_texture_lod')
ctx.gl.getExtension('OES_standard_derivatives')
ctx.gl.getExtension('WEBGL_draw_buffers')
ctx.gl.getExtension('OES_texture_float')

const renderer = createRenderer({
  ctx,
  shadowQuality: 3
})

const sunEntity = renderer.entity([
  renderer.transform({
    rotation: quat.fromTo(
      quat.create(),
      [0, 0, 1],
      vec3.normalize([-2, -2, -2])
    )
  }),
  renderer.directionalLight({
    color: [1, 1, 0.95, 1],
    intensity: 2,
    castShadows: true,
    bias: 0.2
  })
])
renderer.add(sunEntity)

const skyboxEntity = renderer.entity([
  renderer.skybox({
    sunPosition: [1, 1, 1]
  })
])
renderer.add(skyboxEntity)

const reflectionProbeEntity = renderer.entity([renderer.reflectionProbe()])
renderer.add(reflectionProbeEntity)

const addEnvmap = async () => {
  if (!parseHdr) return
  //const buffer = await loadBinary(`../../textures/hdr/pisa.hdr`)
  const buffer = await loadBinary(`../../textures/hdr/papermill.hdr`)
  const hdrImg = parseHdr(buffer)
  const panorama = ctx.texture2D({
    data: hdrImg.data,
    width: hdrImg.shape[0],
    height: hdrImg.shape[1],
    pixelFormat: ctx.PixelFormat.RGBA32F,
    encoding: ctx.Encoding.Linear,
    mipmap: true,
    min: ctx.Filter.LinearMipmapLinear,
    mag: ctx.Filter.Linear,
    flipY: true
  })

  skyboxEntity.getComponent('Skybox').set({ texture: panorama })
  reflectionProbeEntity.getComponent('ReflectionProbe').set({ dirty: true })
}

addEnvmap()

function makeAxes(size = 10) {
  // prettier-ignore
  return [
    // X axis
    [0, 0, 0],
    [size, 0, 0],
    // Y axis
    [0, 0, 0],
    [0, size, 0],
    // Z axis
    [0, 0, 0],
    [0, 0, size]
  ]
}

const axes = makeAxes(1)
const axesEntity = renderer.entity([
  renderer.transform(),
  renderer.geometry({
    positions: axes,
    primitive: ctx.Primitive.Lines,
    count: axes.length,
    vertexColors: [
      [1, 0, 0, 1],
      [1, 0.8, 0, 1],
      [0, 1, 0, 1],
      [0.8, 1, 0, 1],
      [0, 0, 1, 1],
      [0, 0.8, 1, 1]
    ]
  }),
  renderer.material({
    baseColor: [1, 1, 1, 1]
  })
])
renderer.add(axesEntity)

// glTF
let cameraEntity

async function loadScene(url) {
  let scene

  try {
    scene = await renderer.loadScene(url, {
      includeCameras: false
    })
  } catch (e) {
    return e
  }

  renderer.add(scene.root)
  renderer.update()
  rescaleScene(scene)

  const distance = 5
  const far = 1000

  cameraEntity = renderer.entity([
    renderer.camera({
      near: 0.5,
      far,
      fov: Math.PI / 4,
      aspect: ctx.gl.drawingBufferWidth / ctx.gl.drawingBufferHeight
    }),
    renderer.orbiter({
      distance,
      currentDistance: distance,
      maxDistance: far,
      lat: 45,
      lon: -45
    })
  ])
  scene.entities.push(cameraEntity)
  renderer.add(cameraEntity)

  return scene
}

window.addEventListener('resize', () => {
  const W = window.innerWidth
  const H = window.innerHeight
  ctx.set({
    width: W,
    height: H
  })
  if (cameraEntity) {
    cameraEntity.getComponent('Camera').set({
      viewport: [0, 0, W, H]
    })
  }
})

const clearCmd = {
  pass: ctx.pass({
    clearColor: [0.1, 0.1, 0.1, 1],
    clearDepth: 1
  })
}

ctx.frame(() => {
  if (State.rotate && cameraEntity) {
    cameraEntity.getComponent('Orbiter').lon += 0.25
  }

  ctx.submit(clearCmd)

  renderer.draw()
})

async function init() {
  const modelUrl = getModelUrl()
  console.time(`Loading ${modelUrl}`)
  await loadScene(modelUrl)
  console.timeEnd(`Loading ${modelUrl}`)

  // GUI
  const gui = new dat.GUI()
  gui.add(State, 'rotate').name('Rotate')
  gui
    .add(State, 'axis')
    .name('Axis')
    .onChange(function(value) {
      axesEntity.getComponent('Transform').enabled = value
    })
  gui
    .add(State, 'lights')
    .name('Lights')
    .onChange(function(value) {
      sunEntity.getComponent('Transform').enabled = value
    })
}

init()
