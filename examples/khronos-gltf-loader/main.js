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

let scale = modelInfo.scale;

function loadCubeMap(gl, envMap, type, state) {
    let texture = gl.createTexture();
    let textureNumber = -1;
    let activeTextureEnum = gl.TEXTURE0;
    let mipLevels = 0;
    let uniformName = 'u_EnvSampler';
    if (type === "diffuse") {
        uniformName = 'u_DiffuseEnvSampler';
        activeTextureEnum = gl.TEXTURE1;
        textureNumber = 1;
        mipLevels = 1;
    }
    else if (type === "specular") {
        uniformName = 'u_SpecularEnvSampler';
        activeTextureEnum = gl.TEXTURE2;
        textureNumber = 2;
        mipLevels = 10;
    }
    else if (type === "environment") {
        uniformName = 'u_EnvSampler';
        activeTextureEnum = gl.TEXTURE0;
        textureNumber = 0;
        mipLevels = 1;
    }
    else {
        let error = document.getElementById('error');
        error.innerHTML += 'Invalid type of cubemap loaded<br>';
        return -1;
    }
    gl.activeTexture(activeTextureEnum);
    gl.bindTexture(gl.TEXTURE_CUBE_MAP, texture);
    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    if (mipLevels < 2) {
        gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    }
    else {
        gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
        gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    }

    let path = "../../textures/" + envMap + "/" + type + "/" + type;

    function onLoadEnvironmentImage(texture, face, image, j) {
        return function() {
            gl.activeTexture(activeTextureEnum);
            gl.bindTexture(gl.TEXTURE_CUBE_MAP, texture);
            gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
            // todo:  should this be srgb?  or rgba?  what's the HDR scale on this?
            gl.texImage2D(face, j, state.hasSRGBExt ? state.hasSRGBExt.SRGB_EXT : gl.RGBA, state.hasSRGBExt ? state.hasSRGBExt.SRGB_EXT : gl.RGBA, gl.UNSIGNED_BYTE, image);
        };
    }

    for (let j = 0; j < mipLevels; j++) {
        let faces = [[path + "_right_" + j + ".jpg", gl.TEXTURE_CUBE_MAP_POSITIVE_X],
        [path + "_left_" + j + ".jpg", gl.TEXTURE_CUBE_MAP_NEGATIVE_X],
        [path + "_top_" + j + ".jpg", gl.TEXTURE_CUBE_MAP_POSITIVE_Y],
        [path + "_bottom_" + j + ".jpg", gl.TEXTURE_CUBE_MAP_NEGATIVE_Y],
        [path + "_front_" + j + ".jpg", gl.TEXTURE_CUBE_MAP_POSITIVE_Z],
        [path + "_back_" + j + ".jpg", gl.TEXTURE_CUBE_MAP_NEGATIVE_Z]];
        for (let i = 0; i < faces.length; i++) {
            let face = faces[i][1];
            let image = new Image();
            image.onload = onLoadEnvironmentImage(texture, face, image, j);
            image.src = faces[i][0];
        }
    }

    state.uniforms[uniformName] = { 'funcName': 'uniform1i', 'vals': [textureNumber] };
    return 1;
}


// Update model from dat.gui change
//function updateModel(value, gl, glState, viewMatrix, projectionMatrix, backBuffer, frontBuffer) {
function updateModel(modelInfo, gl, glState, viewMatrix, projectionMatrix, backBuffer, frontBuffer) {
    let error = document.getElementById('error');
    glState.scene = null;
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    let canvas2d = document.getElementById('canvas2d');
    frontBuffer.clearRect(0, 0, canvas2d.width, canvas2d.height);
    document.getElementById('loadSpinner').style.display = 'block';
    resetCamera();
    let url = "../../" + modelInfo.category + "/" + modelInfo.path;
    if(modelInfo.url) {
        url = modelInfo.url;
    }

    $.ajax({
        //url: 'models/' + value + '/glTF/' + value + '.gltf',
        //url: "../../" + modelInfo.category + "/" + modelInfo.path,
        url: url,
        dataType: 'json',
        async: true,
        error: (jqXhr, textStatus, errorThrown) => {
            error.innerHTML += 'Failed to load model: ' + errorThrown + '<br>';
        },
        success: function(gltf) {
            //let scene = new Scene(gl, glState, "./models/" + value + "/glTF/", gltf);
            //let scene = new Scene(gl, glState, "../../" + modelInfo.category + "/" + modelInfo.path.split("/").reverse().slice(1).reverse().join("/") + "/", gltf);
            let scene = new Scene(gl, glState, url.split("/").reverse().slice(1).reverse().join("/") + "/", gltf);
            
            scene.projectionMatrix = projectionMatrix;
            scene.viewMatrix = viewMatrix;
            scene.backBuffer = backBuffer;
            scene.frontBuffer = frontBuffer;
            glState.scene = scene;
        }
    });
}

function main() {
    let error = document.getElementById('error');
    let vertDeferred = $.ajax({
        url: './shaders/pbr-vert.glsl',
        dataType: 'text',
        async: true,
        error: (jqXhr, textStatus, errorThrown) => {
            error.innerHTML += 'Failed to load the vertex shader: ' + errorThrown + '<br>';
        }
    });
    let fragDeferred = $.ajax({
        url: './shaders/pbr-frag.glsl',
        dataType: 'text',
        async: true,
        error: (jqXhr, textStatus, errorThrown) => {
            error.innerHTML += 'Failed to load the fragment shader: ' + errorThrown + '<br>';
        }
    });
    $.when(vertDeferred, fragDeferred).then((vertSource, fragSource) => {
        init(vertSource[0], fragSource[0]);
    });
}

function init(vertSource, fragSource) {
    let canvas = document.getElementById('canvas');
    let canvas2d = document.getElementById('canvas2d');
    let error = document.getElementById('error');
    if (!canvas) {
        error.innerHTML += 'Failed to retrieve the canvas element<br>';
        return;
    }
    let canvasWidth = -1;
    let canvasHeight = -1;
    canvas.hidden = true;

    let gl = canvas.getContext("webgl", {}) || canvas.getContext("experimental-webgl", {});
    if (!gl) {
        error.innerHTML += 'Failed to get the rendering context for WebGL<br>';
        return;
    }

    let ctx2d = canvas2d.getContext("2d");

    glState = {
        uniforms: {},
        attributes: {},
        vertSource: vertSource,
        fragSource: fragSource,
        scene: null,
        hasLODExtension:gl.getExtension('EXT_shader_texture_lod'),
        hasDerivativesExtension:gl.getExtension('OES_standard_derivatives'),
        hasSRGBExt:gl.getExtension('EXT_SRGB')
    };

    let projectionMatrix = mat4.create();
    function resizeCanvasIfNeeded() {
        let width = Math.max(1, window.innerWidth);
        let height = Math.max(1, window.innerHeight);
        if (width !== canvasWidth || height !== canvasHeight) {
            canvas.width = canvas2d.width = canvasWidth = width;
            canvas.height = canvas2d.height = canvasHeight = height;
            gl.viewport(0, 0, width, height);
            mat4.perspective(projectionMatrix, 45.0 * Math.PI / 180.0, width / height, 0.01, 100.0);
        }
    }

    // Create cube maps
    let envMap = "papermill";
    //loadCubeMap(gl, envMap, "environment");
    loadCubeMap(gl, envMap, "diffuse", glState);
    loadCubeMap(gl, envMap, "specular", glState);
    // Get location of mvp matrix uniform
    glState.uniforms['u_MVPMatrix'] = { 'funcName': 'uniformMatrix4fv' };
    // Get location of model matrix uniform
    glState.uniforms['u_ModelMatrix'] = { 'funcName': 'uniformMatrix4fv' };
    // Get location of normal matrix uniform
    glState.uniforms['u_NormalMatrix'] = { 'funcName': 'uniformMatrix4fv' };

    // Light
    glState.uniforms['u_LightDirection'] = { 'funcName': 'uniform3f', 'vals': [0.0, 0.5, 0.5] };
    glState.uniforms['u_LightColor'] = { 'funcName': 'uniform3f', 'vals': [1.0, 1.0, 1.0] };

    // Camera
    glState.uniforms['u_Camera'] = { 'funcName': 'uniform3f', vals: [0.0, 0.0, -4.0] };

    // Model matrix
    let modelMatrix = mat4.create();

    // View matrix
    let viewMatrix = mat4.create();
    let eye = vec3.fromValues(0.0, 0.0, 4.0 * (1/scale));
    let at = vec3.fromValues(0.0, 0.0, 0.0);
    let up = vec3.fromValues(0.0, 1.0, 0.0);
    mat4.lookAt(viewMatrix, eye, at, up);

    // get scaling stuff
    glState.uniforms['u_ScaleDiffBaseMR'] = { 'funcName': 'uniform4f', vals: [0.0, 0.0, 0.0, 0.0] };
    glState.uniforms['u_ScaleFGDSpec'] = { 'funcName': 'uniform4f', vals: [0.0, 0.0, 0.0, 0.0] };
    glState.uniforms['u_ScaleIBLAmbient'] = { 'funcName': 'uniform4f', vals: [1.0, 1.0, 1.0, 1.0] };

    // Load scene
    //let defaultModelName = 'DamagedHelmet';
    let defaultModelName = 'BoomBox';
    //updateModel(defaultModelName, gl, glState, viewMatrix, projectionMatrix, canvas, ctx2d);
    updateModel(modelInfo, gl, glState, viewMatrix, projectionMatrix, canvas, ctx2d);

    // Set clear color
    gl.clearColor(0.2, 0.2, 0.2, 1.0);

    // Enable depth test
    gl.enable(gl.DEPTH_TEST);

    let redrawQueued = false;
    let redraw = function() {
        if (!redrawQueued) {
            redrawQueued = true;
            window.requestAnimationFrame(function() {
                redrawQueued = false;
                resizeCanvasIfNeeded();
                let scene = glState.scene;
                if (scene) {
                    scene.drawScene(gl);
                }
            });
        }
    };

    // Set control callbacks
    canvas2d.onmousedown = function(ev) { handleMouseDown(ev); };
    document.onmouseup = function(ev) { handleMouseUp(ev); };
    document.onmousemove = function(ev) { handleMouseMove(ev, redraw); };
    document.onwheel = function(ev) { handleWheel(ev, redraw); };

/*
    // Initialize GUI
    let gui = new dat.GUI();
    let folder = gui.addFolder("Metallic-Roughness Material");


    let text = { Model: defaultModelName };
    folder.add(text, 'Model', ['MetalRoughSpheres', 'AppleTree', 'Avocado', 'BarramundiFish', 'BoomBox', 'Corset', 'DamagedHelmet', 'FarmLandDiorama', 'NormalTangentTest', 'Telephone', 'TextureSettingsTest', 'Triangle', 'WaterBottle', 'InterpolatedNormalsTest', 'NonUniformScalingTest']).onChange(function(value) {
        updateModel(value, gl, glState, viewMatrix, projectionMatrix, canvas, ctx2d);
    });
    folder.open();

    let light = gui.addFolder("Directional Light");
*/
    let lightProps = { lightColor: [255, 255, 255], lightScale: 1.0, lightRotation: 75, lightPitch: 40 };

    let updateLight = function(value) {
        glState.uniforms['u_LightColor'].vals = [lightProps.lightScale * lightProps.lightColor[0] / 255,
        lightProps.lightScale * lightProps.lightColor[1] / 255,
        lightProps.lightScale * lightProps.lightColor[2] / 255];

        let rot = lightProps.lightRotation * Math.PI / 180;
        let pitch = lightProps.lightPitch * Math.PI / 180;
        glState.uniforms['u_LightDirection'].vals = [Math.sin(rot) * Math.cos(pitch),
        Math.sin(pitch),
        Math.cos(rot) * Math.cos(pitch)];

        redraw();
    };
/*

    light.addColor(lightProps, "lightColor").onChange(updateLight);
    light.add(lightProps, "lightScale", 0, 10).onChange(updateLight);
    light.add(lightProps, "lightRotation", 0, 360).onChange(updateLight);
    light.add(lightProps, "lightPitch", -90, 90).onChange(updateLight);

    light.open();
*/
    updateLight();

    //mouseover scaling

    let scaleVals = {
        IBL: 1.0,
    };
    let updateMathScales = function(v) {
        let el = scaleVals.pinnedElement ? scaleVals.pinnedElement : scaleVals.activeElement;
        let elId = el ? el.attr('id') : null;

        glState.uniforms['u_ScaleDiffBaseMR'].vals = [elId == "mathDiff" ? 1.0 : 0.0, elId == "baseColor" ? 1.0 : 0.0, elId == "metallic" ? 1.0 : 0.0, elId == "roughness" ? 1.0 : 0.0];
        glState.uniforms['u_ScaleFGDSpec'].vals = [elId == "mathF" ? 1.0 : 0.0, elId == "mathG" ? 1.0 : 0.0, elId == "mathD" ? 1.0 : 0.0, elId == "mathSpec" ? 1.0 : 0.0];
        glState.uniforms['u_ScaleIBLAmbient'].vals = [scaleVals.IBL, scaleVals.IBL, 0.0, 0.0];

        redraw();
    };

    //gui.add(scaleVals, "IBL", 0, 4).onChange(updateMathScales);

    let setActiveComponent = function(el) {
        if (scaleVals.activeElement) {
            scaleVals.activeElement.removeClass("activeComponent");
        }
        if (el && !scaleVals.pinnedElement) {
            el.addClass("activeComponent");
        }
        scaleVals.activeElement = el;

        if (!scaleVals.pinnedElement) {
            updateMathScales();
        }
    };

    let setPinnedComponent = function(el) {
        if (scaleVals.activeElement) {
            if (el) {
                scaleVals.activeElement.removeClass("activeComponent");
            }
            else {
                scaleVals.activeElement.addClass("activeComponent");
            }
        }

        if (scaleVals.pinnedElement) {
            scaleVals.pinnedElement.removeClass("pinnedComponent");
        }
        if (el) {
            el.addClass("pinnedComponent");
        }

        scaleVals.pinnedElement = el;

        updateMathScales();
    };

    let createMouseOverScale = function() {
        let localArgs = arguments;
        let el = $(localArgs[0]);
        el.hover(
            function(ev) {
                setActiveComponent(el);
            },
            function(ev) {
                setActiveComponent(null);
            });

        el.click(
            function(ev) {
                if (scaleVals.pinnedElement) {
                    setPinnedComponent(null);
                }
                else {
                    setPinnedComponent(el);
                }
                ev.stopPropagation();
            }
        );
    };

    createMouseOverScale('#mathDiff', 'diff');
    createMouseOverScale('#mathSpec', 'spec');
    createMouseOverScale('#mathF', 'F');
    createMouseOverScale('#mathG', 'G');
    createMouseOverScale('#mathD', 'D');
    createMouseOverScale("#baseColor", "baseColor");
    createMouseOverScale("#metallic", "metallic");
    createMouseOverScale("#roughness", "roughness");

    $("#pbrMath").click(function(ev) {
        if (scaleVals.pinned && scaleVals.pinnedElement) {
            $(scaleVals.pinnedElement).removeClass("pinnedComponent");
        }
        scaleVals.pinned = false;
    });

    updateMathScales();

    function format255(p) {
        let str = p.toString();
        return ' '.repeat(3).substring(str.length) + str;
    }
/*
    // picker
    let pixelPickerText = document.getElementById('pixelPickerText');
    let pixelPickerColor = document.getElementById('pixelPickerColor');
    let pixelPickerPos = { x: 0, y: 0 };
    let pixelPickerScheduled = false;
    function sample2D() {
        pixelPickerScheduled = false;
        let x = pixelPickerPos.x;
        let y = pixelPickerPos.y;
        let p = ctx2d.getImageData(x, y, 1, 1).data;
        pixelPickerText.innerHTML =
            "r:  " + format255(p[0]) + " g:  " + format255(p[1]) + " b:  " + format255(p[2]) +
            "<br>r: " + (p[0] / 255).toFixed(2) + " g: " + (p[1] / 255).toFixed(2) + " b: " + (p[2] / 255).toFixed(2);
        pixelPickerColor.style.backgroundColor = 'rgb(' + p[0] + ',' + p[1] + ',' + p[2] + ')';
    }
    $(canvas2d).mousemove(function(e) {
        let pos = $(canvas2d).position();
        pixelPickerPos.x = e.pageX - pos.left;
        pixelPickerPos.y = e.pageY - pos.top;
        if (!pixelPickerScheduled) {
            pixelPickerScheduled = true;
            window.requestAnimationFrame(sample2D);
        }
    });
*/
    // Redraw the scene after window size changes.
    $(window).resize(redraw);

    let tick = function() {
        animate(roll);
        redraw();
        requestAnimationFrame(tick);
    };
    // Uncomment for turntable
    //tick();
}

// ***** Mouse Controls ***** //
let mouseDown;
let roll;
let pitch;
let translate;
let lastMouseX = null;
let lastMouseY = null;

function resetCamera() {
    roll = Math.PI;
    pitch = 0.0;
    translate = 4.0 * (1/scale);
    mouseDown = false;
}

function handleMouseDown(ev) {
    mouseDown = true;
    lastMouseX = ev.clientX;
    lastMouseY = ev.clientY;
}

function handleMouseUp(ev) {
    mouseDown = false;
}

function handleMouseMove(ev, redraw) {
    if (!mouseDown) {
        return;
    }
    let newX = ev.clientX;
    let newY = ev.clientY;

    let deltaX = newX - lastMouseX;
    roll += (deltaX / 100.0);

    let deltaY = newY - lastMouseY;
    pitch += (deltaY / 100.0);

    lastMouseX = newX;
    lastMouseY = newY;

    redraw();
}

let wheelSpeed = 1.04;
function handleWheel(ev, redraw) {
    ev.preventDefault();
    if (ev.deltaY > 0) {
        translate *= wheelSpeed;
    }
    else {
        translate /= wheelSpeed;
    }

    redraw();
}

let prev = Date.now();
function animate(angle) {
    let curr = Date.now();
    let elapsed = curr - prev;
    prev = curr;
    roll = angle + ((Math.PI / 4.0) * elapsed) / 1000.0;
}
