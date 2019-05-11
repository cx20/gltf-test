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

let gui = new dat.GUI();
var ROTATE = true;
let guiRotate = gui.add(window, 'ROTATE').name('Rotate');

gr.registerComponent('Rotate', {
  attributes: {
    speed: {
      default: '0.2',
      converter: 'Number',
    },
  },
  $mount: function () {
    this.phi = 0;
  },
  $update: function () {
    this.phi += ROTATE ? this.getAttribute('speed') : 0;
    this.node.setAttribute('rotation', 0 + ',' + this.phi + ',' + 0);
  },
});

gr(function () {
  let $$ = gr('#canvas');
  $$('#group').addComponent('Rotate');
  let scale = modelInfo.scale;
  let url = "../../" + modelInfo.category + "/" + modelInfo.path;
  if(modelInfo.url) {
    url = modelInfo.url;
  }
  $$('#model-container').append('<model src="' + url + '" scale="' + scale + '"/>');
  if (modelInfo.name == "GearboxAssy" ) {
      $$('model').setAttribute('position', '-31.84,-3.404,-0.642');
  }
});
