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

// GUI
let gui = new dat.GUI();
var VARIANT = "";
let guiVariants = null;

const name = localStorage.getItem('sample') || 'DamagedHelmet';
const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let url = "../../" + modelInfo.category + "/" + modelInfo.path;
if(modelInfo.url) {
    url = modelInfo.url;
}

const renderer = new redcube.RedCube(
    url,
    canvas,
    [],
    //'../../../../textures/hdr/pisa'
    '../../../../textures/hdr/papermill'
);

renderer.init(() => {
    variants = {};
    renderer.scene.variants.forEach((it,i) => {
        variants[it.name] = i;
    });
    guiVariants = gui.add(window, 'VARIANT', variants).name("Variant");
    guiVariants.onChange(function (value) {
        renderer.setVariant(value);
    });
});
