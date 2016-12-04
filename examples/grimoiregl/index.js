var modelInfo = ModelIndex.getCurrentModel();
if (!modelInfo) {
    document.getElementById('container').innerHTML = 'Please specify a model to load';
    throw new Error('Model not specified or not found in list.');
}


gr.registerComponent('Rotate', {
  attributes: {
    speed: {
      defaultValue: '1',
      converter: 'Number',
    },
  },
  $mount: function () {
    this.phi = 0;
  },
  $update: function () {
    this.phi += this.getValue('speed');
    this.node.setAttribute('rotation', 0 + ',' + this.phi + ',' + 0);
  },
});

gr(function () {
  var MAIN = gr('#canvas');
  var scale = modelInfo.scale;
  if (modelInfo.name == "GearboxAssy" ) {
      scale = 0.2;
      //MAIN('scene').append('<model src="' + "../../sampleModels/" + modelInfo.path + '" scale="' + scale + '" position="-159.20,-17.02,-3.21"/>');
      MAIN('scene').append('<model src="' + "../../sampleModels/" + modelInfo.path + '" scale="' + scale + '" position="-31.84,-3.404,-0.642"/>');
  } else {
      MAIN('scene').append('<model src="' + "../../sampleModels/" + modelInfo.path + '" scale="' + scale + '"/>');
  }
  
  MAIN('model').addComponent('Rotate');
  MAIN('model')('Rotate').setAttribute('speed', Math.PI*1/180);
});
