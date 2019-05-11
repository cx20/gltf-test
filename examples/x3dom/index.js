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

let runtime;

document.onload = function () {
    x3d = document.getElementById("x3d");           
    x3d.addEventListener( "downloadsfinished", onDownloadsFinished );
    
    runtime = x3d.runtime;
    
    let file = "../../" + modelInfo.category + "/" + modelInfo.path;
    if(modelInfo.url) {
        file = modelInfo.url;
    }
    //let type = modelInfo.path.includes("glTF-Binary") ? "Binary" : "";
    let type = file.split('.').pop() == "glb" ? "Binary" : "";

    load(file, type);
}

function onDownloadsFinished()
{
    //runtime.showAll("posZ", true);
    runtime.showAll("negZ", true);
};

function load(file, type)
{
    let suffix = (type == "Binary") ? ".glb" : ".gltf"; 

    type = (type != undefined) ? "-" + type : "";
    
    url = file;
    document.getElementById("inline").setAttribute("url", url);

    //runtime.showAll("posZ", true);
    runtime.showAll("negZ", true);
}
