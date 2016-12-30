var modelInfo = ModelIndex.getCurrentModel();
if (!modelInfo) {
    modelInfo = TutorialModelIndex.getCurrentModel();
}
if (!modelInfo) {
    document.getElementById('container').innerHTML = 'Please specify a model to load';
    throw new Error('Model not specified or not found in list.');
}


gr.registerComponent('Rotate', {
  attributes: {
    speed: {
      default: '1',
      converter: 'Number',
    },
  },
  $mount: function () {
    this.phi = 0;
  },
  $update: function () {
    this.phi += this.getAttribute('speed');
    this.node.setAttribute('rotation', 0 + ',' + this.phi + ',' + 0);
  },
});

gr(function () {
  var $$ = gr('#canvas');
  var scale = modelInfo.scale;
  if (modelInfo.name == "GearboxAssy" ) {
      scale = 0.2;
      //$$('scene').append('<model src="' + "../../sampleModels/" + modelInfo.path + '" scale="' + scale + '" position="-31.84,-3.404,-0.642"/>');
      $$('scene').append('<model src="' + "../../" + modelInfo.category + "/" + modelInfo.path + '" scale="' + scale + '" position="-31.84,-3.404,-0.642"/>');
  } else {
      //$$('scene').append('<model src="' + "../../sampleModels/" + modelInfo.path + '" scale="' + scale + '"/>');
      $$('scene').append('<model src="' + "../../" + modelInfo.category + "/" + modelInfo.path + '" scale="' + scale + '"/>');
  }
  
  $$('model').addComponent('Rotate');
  //$$('model')('Rotate').setAttribute('speed', 1);
});
