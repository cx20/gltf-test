var modelInfo = ModelIndex.getCurrentModel();
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
  modelInfo = TutorialWipExtensionTestModelIndex.getCurrentModel();
}
if (!modelInfo) {
  document.getElementById("messagepanel").style.display = "block";
  document.getElementById("messagepanel").innerHTML =
    "Model not specified or not found in list.";
  throw new Error("Model not specified or not found in list.");
}

require([
  "esri/kernel",
  "esri/Map",
  "esri/views/SceneView",
  "esri/layers/GraphicsLayer",
  "esri/Graphic",
  "esri/core/scheduling",
  "esri/core/watchUtils",
  "esri/widgets/DirectLineMeasurement3D",
  "esri/widgets/AreaMeasurement3D",
  "esri/widgets/Slice",
  "esri/widgets/BasemapGallery",
  "esri/widgets/Expand",
  "esri/core/Logger"
], function(
  esriNS,
  Map,
  SceneView,
  GraphicsLayer,
  Graphic,
  scheduling,
  watchUtils,
  DirectLineMeasurement3D,
  AreaMeasurement3D,
  Slice,
  BasemapGallery,
  Expand,
  Logger
) {
  
  // add the logger to check if the glTF contains unsupported features
  var logger = Logger.getLogger("esri.views.3d.glTF");
  logger.writer = function(level, module, message) {
    if (message.toLowerCase().includes("unsupported feature")) {
      document.getElementById("messagepanel").style.display = "block";
      document.getElementById("messagepanel").innerHTML =
        "<b>ArcGIS JS API Version " +
        esriNS.version +
        "<br>does not support this GLTF model: </b><br><br>" +
        message;
    }
    switch (level) {
      case "info":
          console.info("[" + module + "] " + message);
        break;
      case "warn":
            console.warn("[" + module + "] " + message);
        break;
      case "error":
            console.error("[" + module + "] " + message);
        break;
      default:
        break;
    }
  };

  // get the rotate element to start/stop rotating
  var rotatetoggle = document.getElementById("rotate");

  // create the map and add it to the sceneview
  var map = new Map({
    basemap: "dark-gray"
  });
  var view = new SceneView({
    container: "viewDiv",
    qualityProfile: "high",
    map: map,
    camera: {
      position: {
        spatialReference: { wkid: 4326 },
        x: -122.792,
        y: 45.452,
        z: 10000
      },
      heading: 0,
      tilt: 60
    }
  });

  // ************ Create the glTF graphic to add to the SceneView **************
  var graphicsLayer = new GraphicsLayer();
  // point at the Head Quarter of khronos group (Beaverton, USA -> https://www.khronos.org/about/contact/)
  var point = {
    type: "point", // autocasts as new Point()
    x: -122.792,
    y: 45.452,
    z: 1000
  };

  var url =
    modelInfo.url || "../../" + modelInfo.category + "/" + modelInfo.path;

  var gltfSymbol = {
    type: "point-3d",
    symbolLayers: [
      {
        type: "object",
        height: 1000, // * modelInfo.scale,
        resource: {
          href: url
        }
      }
    ]
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
      z: 0
    };
  }

  var pointGraphic = new Graphic({
    geometry: point,
    symbol: gltfSymbol
  });

  graphicsLayer.add(pointGraphic);
  map.add(graphicsLayer);
  // *******************************************************


  view
    .whenLayerView(graphicsLayer)
    .then(function(layerView) {
      // Prepare the schedule task for rotating the GLTF model
      scheduling.addFrameTask({
        update: function() {
          if (rotatetoggle.checked) {
            if (!view.interacting) {
              // rotate the GLTF model
              var symbol = layerView.layer.graphics.items[0].symbol.clone();
              symbol.symbolLayers.items[0].heading = (symbol.symbolLayers.items[0].heading + 1) % 360;
              layerView.layer.graphics.items[0].symbol = symbol;
            } else {
              rotatetoggle.checked = false;
            }
          }
        }
      });

      // Disable the loading overlay as soon the GLTF model is loaded
      watchUtils.whenFalseOnce(layerView, "updating", function() {
        document.getElementById("loadingOverlay").style.display = "none";
        rotatetoggle.checked = true;
      });

      // Zoom to the GTLF model
      view.goTo(
        {
          center: layerView.layer.graphics.items[0].geometry,
          zoom: 15,
          tilt: 60
        },
        {
          animate: false
        }
      );

      // add the toolbars
      view.ui.add(["rotateToggle"], "top-right");
      view.ui.add(
        ["topbar", expandslice, expandbasemapgallery],
        "bottom-right"
      );
    })
    .catch(function(error) {
      console.error(error);
    });

  // ************ Add the different tools/widgets **************
  var basemapgalleryWidget = new BasemapGallery({
    view: view,
    container: document.createElement("div")
  });

  var expandbasemapgallery = new Expand({
    view: view,
    content: basemapgalleryWidget
  });

  var sliceWidget = new Slice({
    view: view
  });

  var expandslice = new Expand({
    view: view,
    content: sliceWidget
  });

  document
    .getElementById("distanceButton")
    .addEventListener("click", function() {
      setActiveWidget(null);
      if (!this.classList.contains("active")) {
        setActiveWidget("distance");
      } else {
        setActiveButton(null);
      }
    });

  document.getElementById("areaButton").addEventListener("click", function() {
    setActiveWidget(null);
    if (!this.classList.contains("active")) {
      setActiveWidget("area");
    } else {
      setActiveButton(null);
    }
  });

  // *******************************************************
  var activeWidget = null;
  function setActiveWidget(type) {
    switch (type) {
      case "distance":
        activeWidget = new DirectLineMeasurement3D({
          view: view
        });
        activeWidget.viewModel.newMeasurement();
        view.ui.add(activeWidget, "top-right");
        setActiveButton(document.getElementById("distanceButton"));
        break;
      case "area":
        activeWidget = new AreaMeasurement3D({
          view: view
        });
        activeWidget.viewModel.newMeasurement();
        view.ui.add(activeWidget, "top-right");
        setActiveButton(document.getElementById("areaButton"));
        break;
      case null:
        if (activeWidget) {
          view.ui.remove(activeWidget);
          activeWidget.destroy();
          activeWidget = null;
        }
        break;
    }
  }

  function setActiveButton(selectedButton) {
    // focus the view to activate keyboard shortcuts for sketching
    view.focus();
    var elements = document.getElementsByClassName("active");
    for (var i = 0; i < elements.length; i++) {
      elements[i].classList.remove("active");
    }
    if (selectedButton) {
      selectedButton.classList.add("active");
    }
  }
});
