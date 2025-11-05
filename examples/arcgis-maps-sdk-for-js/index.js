let hasUnsupportedFeature = false;
const viewElement = document.querySelector("arcgis-scene");

const displayErrorNotice = (title, message) => {
  const alert = document.createElement("calcite-notice");
  alert.kind = "danger";
  alert.icon = true;
  alert.open = true;
  alert.slot = "top-right";

  const titleElement = document.createElement("div");
  titleElement.slot = "title";
  titleElement.textContent = title;
  alert.append(titleElement);

  if (message) {
    const messageElement = document.createElement("div");
    messageElement.slot = "message";
    messageElement.textContent = message;
    alert.append(messageElement);
  }

  viewElement.appendChild(alert);

  hasUnsupportedFeature = true;
};

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
  displayErrorNotice("Model not specified or not found in list.");
}

const esriConfig = await $arcgis.import("@arcgis/core/config.js");
const esriNS = await $arcgis.import("@arcgis/core/kernel.js");
esriConfig.log.interceptors.push((level, module, ...args) => {
  if (module !== "esri.views.3d.layers.graphics.Graphics3DSymbolLayer") {
    return false;
  }
  for (const arg of args) {
    if (arg.includes("unsupported feature")) {
      const title = `glTF Model not supported in ArGIS Maps SDK for Javascript ${esriNS.fullVersion}`;

      const matches = arg.match(/Required extensions:.*/);
      const requiredExtensions = matches?.[0];

      let message = `${modelInfo.name}`;
      if (requiredExtensions) {
        message += " -- ";
        message += `${requiredExtensions}`;
      }
      displayErrorNotice(title, message);
    }
  }

  // Return false so that the default log handler still writes log messages to the console
  return false;
});

// ************ Setup measurement tools **************

const directLineMeasurement3d = document.querySelector(
  "arcgis-direct-line-measurement-3d",
);
const areaMeasurement3d = document.querySelector("arcgis-area-measurement-3d");
const expandDirectLine = document.getElementById("expandLine");
const expandArea = document.getElementById("expandArea");

const onExpand = (expandElement, measurmentTool) => (event) => {
  if (event.detail.name !== "expanded") {
    return;
  }

  if (expandElement.expanded) {
    measurmentTool.start();
  } else {
    directLineMeasurement3d.clear();
    areaMeasurement3d.clear();
  }
};

expandDirectLine.addEventListener(
  "arcgisPropertyChange",
  onExpand(expandDirectLine, directLineMeasurement3d),
);

expandArea.addEventListener(
  "arcgisPropertyChange",
  onExpand(expandArea, areaMeasurement3d),
);

viewElement.camera = {
  position: {
    spatialReference: { wkid: 4326 },
    x: -122.792,
    y: 45.452,
    z: 10000,
  },
  heading: 0,
  tilt: 60,
};

await viewElement.viewOnReady();

// ************ Create the glTF graphic to add to the SceneView **************
if (modelInfo) {
  const GraphicsLayer = await $arcgis.import(
    "@arcgis/core/layers/GraphicsLayer.js",
  );
  const Graphic = await $arcgis.import("@arcgis/core/Graphic.js");
  const scheduling = await $arcgis.import("@arcgis/core/core/scheduling.js");
  const reactiveUtils = await $arcgis.import(
    "@arcgis/core/core/reactiveUtils.js",
  );
  const graphicsLayer = new GraphicsLayer();
  // point at the Head Quarter of khronos group (Beaverton, USA -> https://www.khronos.org/about/contact/)
  const point = {
    type: "point", // autocasts as new Point()
    x: -122.792,
    y: 45.452,
    z: 1000,
  };

  const url =
    modelInfo.url || "../../" + modelInfo.category + "/" + modelInfo.path;

  const gltfSymbol = {
    type: "point-3d",
    symbolLayers: [
      {
        type: "object",
        height: 1000, // * modelInfo.scale,
        resource: {
          href: url,
        },
      },
    ],
  };

  if (
    modelInfo.name === "MorphPrimitivesTest" ||
    modelInfo.name === "TwoSidedPlane"
  ) {
    gltfSymbol.symbolLayers[0].width = 1000; // add stretch on width
    gltfSymbol.symbolLayers[0].height = undefined; // remove stretch on height
  }

  if (modelInfo.name === "GearboxAssy") {
    gltfSymbol.symbolLayers[0].anchor = "relative";
    gltfSymbol.symbolLayers[0].anchorPosition = {
      x: 0,
      y: 0,
      z: 0,
    };
  }

  const pointGraphic = new Graphic({
    geometry: point,
    symbol: gltfSymbol,
  });

  graphicsLayer.add(pointGraphic);
  viewElement.map.add(graphicsLayer);

  // get the rotate element to start/stop rotating
  const rotateToggle = document.getElementById("rotateToggle");

  const { view } = viewElement;
  view
    .whenLayerView(graphicsLayer)
    .then((layerView) => {
      // Prepare the schedule task for rotating the glTF model
      scheduling.addFrameTask({
        update: () => {
          if (rotateToggle.checked && !hasUnsupportedFeature) {
            if (!view.interacting) {
              // rotate the GLTF model
              const graphic = layerView.layer.graphics.items[0];
              const rotatedSymbol = graphic.symbol.clone();
              const symbolLayer = rotatedSymbol.symbolLayers.items[0];
              symbolLayer.heading = (symbolLayer.heading + 1) % 360;
              graphic.symbol = rotatedSymbol;
            } else {
              rotateToggle.checked = false;
            }
          }
        },
      });

      // disable the loading overlay as soon the glTF model is loaded
      reactiveUtils
        .whenOnce(() => !layerView.updating && !hasUnsupportedFeature)
        .then(() => {
          document.getElementById("loadingOverlay").style.display = "none";
          rotateToggle.checked = true;
        });

      // zoom to the glTF model
      view.goTo(
        {
          center: layerView.layer.graphics.items[0].geometry,
          zoom: 15,
          tilt: 60,
        },
        {
          animate: false,
        },
      );
    })
    .catch((error) => {
      console.error(error);
    });
}
