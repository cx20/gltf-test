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
  MAIN('scene').append('<model src="' + "../../sampleModels/" + modelInfo.path + '" scale="' + modelInfo.scale + '"/>');
  MAIN('model').addComponent('Rotate');
  MAIN('model')('Rotate').setAttribute('speed', Math.PI*1/180);
});
