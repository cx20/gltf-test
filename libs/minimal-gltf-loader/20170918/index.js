import {vec3, vec4, quat, mat4} from 'gl-matrix';
// import {MinimalGLTFLoader} from 'Lib/minimal-gltf-loader.js';
import {MinimalGLTFLoader} from './minimal-gltf-loader.js';
// require('./lib/minimal-gltf-loader.js');
import '../css/style.css';



// utils
(function () {
    'use strict';

    window.getShaderSource = function(id) {
        return document.getElementById(id).textContent.replace(/^\s+|\s+$/g, '');
    };

    function createShader(gl, source, type) {
        var shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        return shader;
    }

    window.createProgram = function(gl, vertexShaderSource, fragmentShaderSource) {
        var program = gl.createProgram();
        var vshader = createShader(gl, vertexShaderSource, gl.VERTEX_SHADER);
        var fshader = createShader(gl, fragmentShaderSource, gl.FRAGMENT_SHADER);
        gl.attachShader(program, vshader);
        gl.deleteShader(vshader);
        gl.attachShader(program, fshader);
        gl.deleteShader(fshader);
        gl.linkProgram(program);

        var log = gl.getProgramInfoLog(program);
        if (log) {
            console.log(log);
        }

        log = gl.getShaderInfoLog(vshader);
        if (log) {
            console.log(log);
        }

        log = gl.getShaderInfoLog(fshader);
        if (log) {
            console.log(log);
        }

        return program;
    };

    window.loadImage = function(url, onload) {
        var img = new Image();
        img.crossOrigin = "Anonymous";
        img.src = url;
        // img.onload = function() {
        //     onload(img);
        // };
        img.onload = onload;
        return img;
    };

    window.loadImages = function(urls, onload) {
        var imgs = [];
        var imgsToLoad = urls.length;

        function onImgLoad() {
            if (--imgsToLoad <= 0) {
                onload(imgs);
            }
        }

        for (var i = 0; i < imgsToLoad; ++i) {
            imgs.push(loadImage(urls[i], onImgLoad));
        }
    };

    window.loadObj = function(url, onload) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'text';
        xhr.onload = function(e) {
            var mesh = new OBJ.Mesh(this.response);
            onload(mesh);
        };
        xhr.send();
    };
})();





(function()  {
    'use strict';


    var drawBoundingBox = false;
    var boundingBoxType = 'obb';

    document.getElementById("bbox-toggle").addEventListener("change", function() {
        drawBoundingBox = this.checked;
    });

    document.getElementById("bbox-type").addEventListener("change", function() {
        boundingBoxType = this.value;
    });

    var canvas = document.createElement('canvas');
    // canvas.width = Math.min(window.innerWidth, window.innerHeight);
    // canvas.height = canvas.width;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);

    var gl = canvas.getContext( 'webgl2', { antialias: true } );
    var isWebGL2 = !!gl;
    if(!isWebGL2) {
        document.getElementById('info').innerHTML = 'WebGL 2 is not available.  See <a href="https://www.khronos.org/webgl/wiki/Getting_a_WebGL_Implementation">How to get a WebGL 2 implementation</a>';
        return;
    }

    canvas.oncontextmenu = function (e) {
        e.preventDefault();
    };

    // Scene object for runtime renderer
    var Scene = function(glTFScene, glTF, id) {
        this.glTFScene = glTFScene;
        this.glTF = glTF;
        this.id = id;

        // runtime renderer context
        this.rootTransform = mat4.create();
        // @temp, assume every node is in current scene
        this.nodeMatrix = new Array(glTF.nodes.length);
        var i, len;
        for(i = 0, len = this.nodeMatrix.length; i < len; i++) {
            this.nodeMatrix[i] = mat4.create();
        }

        // TODO: runtime joint matrix
    };

    var BOUNDING_BOX = {
        vertexData: new Float32Array([
            0.0, 0.0, 0.0,
            1.0, 0.0, 0.0,
            0.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 0.0,
            0.0, 0.0, 1.0,

            0.0, 1.0, 1.0,
            1.0, 1.0, 1.0,
            0.0, 1.0, 1.0,
            0.0, 1.0, 0.0,
            0.0, 1.0, 1.0,
            0.0, 0.0, 1.0,

            1.0, 1.0, 0.0,
            1.0, 1.0, 1.0,
            1.0, 1.0, 0.0,
            0.0, 1.0, 0.0,
            1.0, 1.0, 0.0,
            1.0, 0.0, 0.0,

            1.0, 0.0, 1.0,
            1.0, 0.0, 0.0,
            1.0, 0.0, 1.0,
            1.0, 1.0, 1.0,
            1.0, 0.0, 1.0,
            0.0, 0.0, 1.0
        ]),

        vertexArray: gl.createVertexArray(),
        vertexBuffer: gl.createBuffer(),

        // program: createProgram(gl, require('./shaders/vs-bbox'), require('./shaders/fs-bbox')),
        program: createProgram(gl, require('./shaders/vs-bbox.glsl'), require('./shaders/fs-bbox.glsl')),
        positionLocation: 0,
        uniformMvpLocation: 0, 

        
        draw: (function() {
            var MVP = mat4.create();
            return (function(bbox, nodeTransform, V, P) {
                // gl.useProgram(this.program);

                mat4.mul(MVP, nodeTransform, bbox.transform);
                mat4.mul(MVP, V, MVP);
                mat4.mul(MVP, P, MVP);

                gl.uniformMatrix4fv(this.uniformMvpLocation, false, MVP);
                // gl.bindVertexArray(this.vertexArray);
                gl.drawArrays(gl.LINES, 0, 24);
                // gl.bindVertexArray(null);
            });
        })()
    };

    

    var defaultSampler = gl.createSampler();
    gl.samplerParameteri(defaultSampler, gl.TEXTURE_MIN_FILTER, gl.NEAREST_MIPMAP_LINEAR);
    gl.samplerParameteri(defaultSampler, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.samplerParameteri(defaultSampler, gl.TEXTURE_WRAP_S, gl.REPEAT);
    gl.samplerParameteri(defaultSampler, gl.TEXTURE_WRAP_T, gl.REPEAT);
    // gl.samplerParameteri(defaultSampler, gl.TEXTURE_WRAP_R, gl.REPEAT);
    // gl.samplerParameterf(defaultSampler, gl.TEXTURE_MIN_LOD, -1000.0);
    // gl.samplerParameterf(defaultSampler, gl.TEXTURE_MAX_LOD, 1000.0);
    // gl.samplerParameteri(defaultSampler, gl.TEXTURE_COMPARE_MODE, gl.NONE);
    // gl.samplerParameteri(defaultSampler, gl.TEXTURE_COMPARE_FUNC, gl.LEQUAL);








    BOUNDING_BOX.uniformMvpLocation = gl.getUniformLocation(BOUNDING_BOX.program, "u_MVP");

    gl.bindVertexArray(BOUNDING_BOX.vertexArray);

    gl.bindBuffer(gl.ARRAY_BUFFER, BOUNDING_BOX.vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, BOUNDING_BOX.vertexData, gl.STATIC_DRAW);
    gl.vertexAttribPointer(BOUNDING_BOX.positionLocation, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(BOUNDING_BOX.positionLocation);

    gl.bindVertexArray(null);


    var BRDF_LUT = {
        texture: null,
        textureIndex: 14,

        createTexture: function (img) {
            this.texture = gl.createTexture();
            gl.bindTexture(gl.TEXTURE_2D, this.texture);
            gl.texImage2D(
                gl.TEXTURE_2D,  // assumed
                0,        // Level of details
                // gl.RGB, // Format
                // gl.RGB,
                gl.RGBA, // Format
                gl.RGBA,
                gl.UNSIGNED_BYTE, // Size of each channel
                // gl.FLOAT,
                img
            );
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
            gl.bindTexture(gl.TEXTURE_2D, null);
        }
    }


    // Environment maps
    var CUBE_MAP = {
        textureIndex: 15,

        // loading asset --------------------
        uris: [
            '../textures/environment/px.jpg',
            '../textures/environment/nx.jpg',
            '../textures/environment/py.jpg',
            '../textures/environment/ny.jpg',
            '../textures/environment/pz.jpg',
            '../textures/environment/nz.jpg',

            // @tmp, ugly, load brdfLUT here
            '../textures/brdfLUT.png'
        ],

        images: null,

        loadAll: function() {
            loadImages(this.uris, this.onloadAll.bind(this));
        },

        onloadAll: function(imgs) {
            this.images = imgs;
            console.log('all cube maps loaded');

            this.texture = gl.createTexture();
            
            gl.bindTexture(gl.TEXTURE_CUBE_MAP, this.texture);
            gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
            gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
            gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_COMPARE_MODE, gl.NONE);
            gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_COMPARE_FUNC, gl.LEQUAL);

            for (var i = 0; i < 6; i++) {
                gl.texImage2D(
                    gl.TEXTURE_CUBE_MAP_POSITIVE_X + i,
                    0,
                    gl.RGBA,
                    gl.RGBA,
                    gl.UNSIGNED_BYTE,
                    this.images[i]
                );
            }

            gl.bindTexture(gl.TEXTURE_CUBE_MAP, null);

            // @tmp
            BRDF_LUT.createTexture(this.images[6]);
            // @hack
            gl.useProgram(programPBR.program);
            gl.activeTexture(gl.TEXTURE0 + BRDF_LUT.textureIndex);
            gl.bindTexture(gl.TEXTURE_2D, BRDF_LUT.texture);
            gl.uniform1i(programPBR.uniformBrdfLUTLocation, BRDF_LUT.textureIndex);

            gl.activeTexture(gl.TEXTURE0 + CUBE_MAP.textureIndex);
            gl.bindTexture(gl.TEXTURE_CUBE_MAP, CUBE_MAP.texture);
            gl.uniform1i(programPBR.uniformDiffuseEnvSamplerLocation, CUBE_MAP.textureIndex);
            gl.uniform1i(programPBR.uniformSpecularEnvSamplerLocation, CUBE_MAP.textureIndex);
            gl.useProgram(null);

            if (this.finishLoadingCallback) {
                this.finishLoadingCallback();
            }
        },

        finishLoadingCallback: null,


        // runtime stuffs -------------------------
        vertexData: new Float32Array([         
            -1.0,  1.0, -1.0,
            -1.0, -1.0, -1.0,
            1.0, -1.0, -1.0,
            1.0, -1.0, -1.0,
            1.0,  1.0, -1.0,
            -1.0,  1.0, -1.0,

            -1.0, -1.0,  1.0,
            -1.0, -1.0, -1.0,
            -1.0,  1.0, -1.0,
            -1.0,  1.0, -1.0,
            -1.0,  1.0,  1.0,
            -1.0, -1.0,  1.0,

            1.0, -1.0, -1.0,
            1.0, -1.0,  1.0,
            1.0,  1.0,  1.0,
            1.0,  1.0,  1.0,
            1.0,  1.0, -1.0,
            1.0, -1.0, -1.0,

            -1.0, -1.0,  1.0,
            -1.0,  1.0,  1.0,
            1.0,  1.0,  1.0,
            1.0,  1.0,  1.0,
            1.0, -1.0,  1.0,
            -1.0, -1.0,  1.0,

            -1.0,  1.0, -1.0,
            1.0,  1.0, -1.0,
            1.0,  1.0,  1.0,
            1.0,  1.0,  1.0,
            -1.0,  1.0,  1.0,
            -1.0,  1.0, -1.0,

            -1.0, -1.0, -1.0,
            -1.0, -1.0,  1.0,
            1.0, -1.0, -1.0,
            1.0, -1.0, -1.0,
            -1.0, -1.0,  1.0,
            1.0, -1.0,  1.0
        ]),

        texture: null,

        vertexArray: gl.createVertexArray(),
        vertexBuffer: gl.createBuffer(),

        // program: createProgram(gl, require('./shaders/vs-bbox'), require('./shaders/fs-bbox')),
        program: createProgram(gl, require('./shaders/vs-cube-map.glsl'), require('./shaders/fs-cube-map.glsl')),
        positionLocation: 0,
        uniformMvpLocation: 0, 
        uniformEnvironmentLocation: 0,

        
        draw: (function() {
            var MVP = mat4.create();
            return (function(V, P) {
                mat4.copy(MVP, V);
                MVP[12] = 0.0;
                MVP[13] = 0.0;
                MVP[14] = 0.0;
                MVP[15] = 1.0;
                mat4.mul(MVP, P, MVP);

                gl.useProgram(this.program);
                gl.activeTexture(gl.TEXTURE0 + this.textureIndex);
                gl.bindTexture(gl.TEXTURE_CUBE_MAP, this.texture);
                gl.uniformMatrix4fv(this.uniformMvpLocation, false, MVP);
                gl.uniform1i(this.uniformEnvironmentLocation, this.textureIndex);
                gl.bindVertexArray(this.vertexArray);
                gl.drawArrays(gl.TRIANGLES, 0, 36);
                gl.bindVertexArray(null);
            });
        })()
    };

    CUBE_MAP.uniformMvpLocation = gl.getUniformLocation(CUBE_MAP.program, "u_MVP");
    CUBE_MAP.uniformEnvironmentLocation = gl.getUniformLocation(CUBE_MAP.program, "u_environment");

    gl.bindVertexArray(CUBE_MAP.vertexArray);
    
    gl.bindBuffer(gl.ARRAY_BUFFER, CUBE_MAP.vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, CUBE_MAP.vertexData, gl.STATIC_DRAW);
    gl.vertexAttribPointer(CUBE_MAP.positionLocation, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(CUBE_MAP.positionLocation);

    gl.bindVertexArray(null);






    // // -- Initialize program

    var program = createProgram(gl, require('./shaders/vs-normal.glsl'), require('./shaders/fs-base-color.glsl'));
    var programBaseColor = {
        program: program,
        uniformMvpLocation: gl.getUniformLocation(program, "u_MVP"),
        uniformMvNormalLocation: gl.getUniformLocation(program, "u_MVNormal"),
        uniformBaseColorFactorLocation: gl.getUniformLocation(program, "u_baseColorFactor")
    };

    program = createProgram(gl, require('./shaders/vs-texture.glsl'), require('./shaders/fs-texture.glsl'));
    var programBaseTexture = {
        program: program,
        uniformMvpLocation: gl.getUniformLocation(program, "u_MVP"),
        uniformMvNormalLocation: gl.getUniformLocation(program, "u_MVNormal"),
        uniformBaseColorFactorLocation: gl.getUniformLocation(program, "u_baseColorFactor"),
        uniformBaseColorTextureLocation: gl.getUniformLocation(program, "u_baseColorTexture")
    };

    // @temp test
    program = createProgram(gl, require('./shaders/vs-texture.glsl'), require('./shaders/fs-texture-normal-map.glsl'));
    var programBaseTextureNormalMap = {
        program: program,
        uniformMvpLocation: gl.getUniformLocation(program, "u_MVP"),
        uniformMvNormalLocation: gl.getUniformLocation(program, "u_MVNormal"),
        uniformBaseColorFactorLocation: gl.getUniformLocation(program, "u_baseColorFactor"),
        uniformBaseColorTextureLocation: gl.getUniformLocation(program, "u_baseColorTexture"),
        // uniformNormalTextureScaleLocation: gl.getUniformLocation(program, "u_normalTextureScale"),
        uniformNormalTextureLocation: gl.getUniformLocation(program, "u_normalTexture")
    };

    // @temp PBR
    program = createProgram(gl, require('./shaders/vs-pbr.glsl'), require('./shaders/fs-pbr.glsl'));
    var programPBR = {
        program: program,

        uniformMvpLocation: gl.getUniformLocation(program, "u_MVP"),
        uniformMvNormalLocation: gl.getUniformLocation(program, "u_MVNormal"),
        uniformBaseColorFactorLocation: gl.getUniformLocation(program, "u_baseColorFactor"),
        uniformBaseColorTextureLocation: gl.getUniformLocation(program, "u_baseColorTexture"),

        uniformNormalTextureScaleLocation: gl.getUniformLocation(program, "u_normalTextureScale"),
        uniformNormalTextureLocation: gl.getUniformLocation(program, "u_normalTexture"),

        uniformDiffuseEnvSamplerLocation: gl.getUniformLocation(program, "u_DiffuseEnvSampler"),
        uniformSpecularEnvSamplerLocation: gl.getUniformLocation(program, "u_SpecularEnvSampler"),
        uniformBrdfLUTLocation: gl.getUniformLocation(program, "u_brdfLUT"),
        
        
        uniformMetallicRoughnessTextureLocation: gl.getUniformLocation(program, "u_metallicRoughnessTexture"),
        uniformMetallicFactorLocation: gl.getUniformLocation(program, "u_metallicFactor"),
        uniformRoughnessFactorLocation: gl.getUniformLocation(program, "u_roughnessFactor"),

        uniformOcclusionTextureLocation: gl.getUniformLocation(program, "u_occlusionTexture"),
        uniformOcclusionStrengthLocation: gl.getUniformLocation(program, "u_occlusionStrength"),

        uniformEmissiveTextureLocation: gl.getUniformLocation(program, "u_emissiveTexture"),
        uniformEmissiveFactorLocation: gl.getUniformLocation(program, "u_emissiveFactor")
    };

    



    program = createProgram(gl, require('./shaders/vs-skin-normal.glsl'), require('./shaders/fs-base-color.glsl'));
    var programSkinBaseColor = {
        program: program,
        uniformMvpLocation: gl.getUniformLocation(program, "u_MVP"),
        uniformMvNormalLocation: gl.getUniformLocation(program, "u_MVNormal"),
        uniformBaseColorFactorLocation: gl.getUniformLocation(program, "u_baseColorFactor"),
        uniformBlockIndexJointMatrix: gl.getUniformBlockIndex(program, "JointMatrix")
    };

    program = createProgram(gl, require('./shaders/vs-skin-normal-8.glsl'), require('./shaders/fs-base-color.glsl'));
    var programSkinBaseColorVec8 = {
        program: program,
        uniformMvpLocation: gl.getUniformLocation(program, "u_MVP"),
        uniformMvNormalLocation: gl.getUniformLocation(program, "u_MVNormal"),
        uniformBaseColorFactorLocation: gl.getUniformLocation(program, "u_baseColorFactor"),
        uniformBlockIndexJointMatrix: gl.getUniformBlockIndex(program, "JointMatrix")
    };

    // temp
    program = createProgram(gl, require('./shaders/vs-skin-texture.glsl'), require('./shaders/fs-texture.glsl'));
    var programSkinBaseTexture = {
        program: program,
        uniformMvpLocation: gl.getUniformLocation(program, "u_MVP"),
        uniformMvNormalLocation: gl.getUniformLocation(program, "u_MVNormal"),
        uniformBaseColorFactorLocation: gl.getUniformLocation(program, "u_baseColorFactor"),
        uniformBaseColorTextureLocation: gl.getUniformLocation(program, "u_baseColorTexture"),
        uniformBlockIndexJointMatrix: gl.getUniformBlockIndex(program, "JointMatrix")
    };

    program = createProgram(gl, require('./shaders/vs-skin-texture-8.glsl'), require('./shaders/fs-texture.glsl'));
    var programSkinBaseTextureVec8 = {
        program: program,
        uniformMvpLocation: gl.getUniformLocation(program, "u_MVP"),
        uniformMvNormalLocation: gl.getUniformLocation(program, "u_MVNormal"),
        uniformBaseColorFactorLocation: gl.getUniformLocation(program, "u_baseColorFactor"),
        uniformBaseColorTextureLocation: gl.getUniformLocation(program, "u_baseColorTexture"),
        uniformBlockIndexJointMatrix: gl.getUniformBlockIndex(program, "JointMatrix")
    };

    // -- Initialize vertex array
    var POSITION_LOCATION = 0; // set with GLSL layout qualifier
    var NORMAL_LOCATION = 1; // set with GLSL layout qualifier
    var TEXCOORD_0_LOCATION = 2; // set with GLSL layout qualifier
    var JOINTS_0_LOCATION = 3; // set with GLSL layout qualifier
    var JOINTS_1_LOCATION = 5; // set with GLSL layout qualifier
    var WEIGHTS_0_LOCATION = 4; // set with GLSL layout qualifier
    var WEIGHTS_1_LOCATION = 6; // set with GLSL layout qualifier
    
    // -- Mouse Behaviour
    var isDisplayRotation = true;
    var s = 1;
    var eulerX = 0;
    var eulerY = 0;
    // var s = 1;
    // var t = -100;
    var translate = vec3.create();
    // var t = -5;
    var modelMatrix = mat4.create();
    var mouseDown = false;
    var mouseButtonId = 0;
    var lastMouseY = 0;
    var lastMouseX = 0;
    var identityQ = quat.create();
    window.onmousedown = function(event) {
        mouseDown = true;
        mouseButtonId = event.which;
        lastMouseY = event.clientY;
        lastMouseX = event.clientX;
        if (mouseButtonId === 1) {
            isDisplayRotation = false;
        }
    };
    window.onmouseup = function(event) {
        mouseDown = false;
        isDisplayRotation = true;
    };
    window.onmousemove = function(event) {
        if(!mouseDown) {
            return;
        }
        var newY = event.clientY;
        var newX = event.clientX;
        
        var deltaY = newY - lastMouseY;
        var deltaX = newX - lastMouseX;
        
        // s *= (1 + deltaY / 1000);

        switch(mouseButtonId) {
            case 1:
            // left: rotation
            eulerX += -deltaY * 0.01;
            eulerY += deltaX * 0.01;
            break;
            case 3:
            // right
            translate[0] += deltaX * 0.001;
            translate[1] += -deltaY * 0.001;
            break;
        }
        
        
        lastMouseY = newY;
        lastMouseX = newX;
    };
    window.onwheel = function(event) {
        translate[2] += -event.deltaY * 0.001;
        // translate[2] *= 1 + (-event.deltaY * 0.01);
    };

    
    // 2.0
    // var gltfUrl = '../glTFs/glTF_version_2/Duck/glTF/Duck.gltf';
    // var gltfUrl = '../glTFs/glTF_version_2/2CylinderEngine/glTF/2CylinderEngine.gltf';
    // var gltfUrl = '../glTFs/glTF_version_2/GearboxAssy/glTF/GearboxAssy.gltf';
    // var gltfUrl = '../glTFs/glTF_version_2/Buggy/glTF/Buggy.gltf';
    var gltfUrl = '../glTFs/glTF_version_2/DamagedHelmet/glTF/DamagedHelmet.gltf';
    // var gltfUrl = '../glTFs/glTF_version_2/Avocado/glTF/Avocado.gltf';
    // var gltfUrl = '../glTFs/glTF_version_2/BoomBox/glTF/BoomBox.gltf';

    // var gltfUrl = '../glTFs/glTF_version_2/BoxAnimated/glTF/BoxAnimated.gltf';
    // var gltfUrl = '../glTFs/glTF_version_2/CesiumMilkTruck/glTF/CesiumMilkTruck.gltf';

    // var gltfUrl = '../glTFs/glTF_version_2/RiggedSimple/glTF/RiggedSimple.gltf';
    // var gltfUrl = '../glTFs/glTF_version_2/RiggedFigure/glTF/RiggedFigure.gltf';
    // var gltfUrl = '../glTFs/glTF_version_2/BrainStem/glTF/BrainStem.gltf';
    // var gltfUrl = '../glTFs/glTF_version_2/CesiumMan/glTF/CesiumMan.gltf';

    // var gltfUrl = 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Monster/glTF/Monster.gltf';
    // var gltfUrl = 'https://raw.githubusercontent.com/mrdoob/rome-gltf/master/files/models/black_soup/quadruped_wolf.gltf';
    // var gltfUrl = 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/VC/glTF/VC.gltf';
    // var gltfUrl = 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Buggy/glTF/Buggy.gltf';
    // var gltfUrl = 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/DamagedHelmet/glTF/DamagedHelmet.gltf';
    // var gltfUrl = 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/TextureSettingsTest/glTF/TextureSettingsTest.gltf';
    // var gltfUrl = 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/TwoSidedPlane/glTF/TwoSidedPlane.gltf';
    // var gltfUrl = 'https://raw.githubusercontent.com/pjcozzi/pjcozzi.github.io/master/img/models/patrick.gltf';
    
    // var gltfUrl = 'https://raw.githubusercontent.com/shrekshao/glAvatar/master/demo/models/patrick_no_shirt/patrick-no-shirt.gltf';
    // var gltfUrl = 'models/patrick_no_shirt/patrick-no-shirt.gltf';
    // var gltfUrl = 'models/girl16/scene.gltf';

    var glTFLoader = new MinimalGLTFLoader.glTFLoader(gl);

    var glTFModelCount = 1;
    var scenes = [];

    gl.enable(gl.CULL_FACE);
    gl.cullFace(gl.BACK);
    gl.frontFace(gl.CCW);
    var isFaceCulling = true;


    function setupScene(glTF, replaceScene) {
        var i, len;

        
        var curGltfScene = glTF.scenes[glTF.defaultScene];

        var sceneDeltaTranslate = vec3.fromValues(curGltfScene.boundingBox.transform[0] * 1.2, 0, 0);
        var tmpVec3Translate = vec3.create();

        var newGltfRuntimeScene;
        if (!replaceScene) {
            newGltfRuntimeScene = new Scene(curGltfScene, glTF, scenes.length);
            scenes.push(newGltfRuntimeScene);
        } else {
            newGltfRuntimeScene = scenes[replaceScene.id] = new Scene(curGltfScene, glTF, replaceScene.id);
        }
        
        // for (i = 0, len = glTFModelCount; i < len; i++) {
        //     scenes.push(new Scene(curGltfScene, glTF));
        //     // vec3.scale(tmpVec3Translate, sceneDeltaTranslate, i);
        //     // mat4.fromTranslation(scenes[i].rootTransform, tmpVec3Translate);
        // }
        

        
        if (scenes.length === 1) {
            // first model, adjust camera
            
            // center
            s = 1.0 / Math.max( curGltfScene.boundingBox.transform[0], Math.max(curGltfScene.boundingBox.transform[5], curGltfScene.boundingBox.transform[10]) );
            mat4.getTranslation(translate, curGltfScene.boundingBox.transform);
            vec3.scale(translate, translate, -1);
            translate[0] += - 0.5 * curGltfScene.boundingBox.transform[0];
            translate[1] += - 0.5 * curGltfScene.boundingBox.transform[5];
            translate[2] += - 0.5 * curGltfScene.boundingBox.transform[10];
    
            s *= 0.5;
    
            modelMatrix[0] = s;
            modelMatrix[5] = s;
            modelMatrix[10] = s;
            mat4.translate(modelMatrix, modelMatrix, translate);
    
            vec3.set(translate, 0, 0, -1.5);
            s = 1;
        }
        


        // var in loop
        var mesh;
        var primitive;
        var vertexBuffer;
        var indexBuffer;
        var vertexArray;

        var nid, lenNodes;
        var mid, lenMeshes;
        
        var attribute;

        var image, texture, sampler;

        var accessor, bufferView;

        var animation, animationSampler, channel;

        var skin;

        // var curScene;   // runtime scene object (not gltf scene object)

        program = programBaseColor;



        // // animations typed array
        // for (i = 0, len = glTF.animations.length; i < len; i++) {
        //     animation = glTF.animations[i];

            
        // }

        


        // create buffers
        for (i = 0, len = glTF.bufferViews.length; i < len; i++) {
            bufferView = glTF.bufferViews[i];
            bufferView.createBuffer(gl);
            bufferView.bindData(gl);
        }

        
        // create textures
        if (glTF.textures) {
            for (i = 0, len = glTF.textures.length; i < len; i++) {
                texture = glTF.textures[i];
                texture.createTexture(gl);
            }
        }

        // create samplers
        if (glTF.samplers) {
            for (i = 0, len = glTF.samplers.length; i < len; i++) {
                sampler = glTF.samplers[i];
                
                sampler.createSampler(gl);
            }
        }

        if (glTF.skins) {
            // gl.useProgram(programSkinBaseColor.program);
            // gl.uniformBlockBinding(programSkinBaseColor.program, programSkinBaseColor.uniformBlockIndexJointMatrix, 0);
            // gl.useProgram(null);
            for (i = 0, len = glTF.skins.length; i < len; i++) {
                skin = glTF.skins[i];
                
                skin.jointMatrixUniformBuffer = gl.createBuffer();

                // gl.bindBufferBase(gl.UNIFORM_BUFFER, i, skin.jointMatrixUniformBuffer);
                gl.bindBufferBase(gl.UNIFORM_BUFFER, skin.uniformBlockID, skin.jointMatrixUniformBuffer);

                gl.bindBuffer(gl.UNIFORM_BUFFER, skin.jointMatrixUniformBuffer);
                gl.bufferData(gl.UNIFORM_BUFFER, skin.jointMatrixUnidormBufferData, gl.DYNAMIC_DRAW);
                gl.bufferSubData(gl.UNIFORM_BUFFER, 0, skin.jointMatrixUnidormBufferData);
                gl.bindBuffer(gl.UNIFORM_BUFFER, null);
            }
        }



        function setupAttribuite(attrib, location) {
            if (attrib !== undefined) {
                // var accessor = glTF.accessors[ attrib ];
                var accessor = attrib;
                var bufferView = accessor.bufferView;
                if (bufferView.target === null) {
                    // console.log('WARNING: the bufferview of this accessor should have a target, or it should represent non buffer data (like animation)');
                    gl.bindBuffer(gl.ARRAY_BUFFER, bufferView.buffer);
                    gl.bufferData(gl.ARRAY_BUFFER, bufferView.data, gl.STATIC_DRAW);
                } else {
                    gl.bindBuffer(bufferView.target, bufferView.buffer);
                }
                accessor.prepareVertexAttrib(location, gl);
            }
        }

        // create vaos
        for (mid = 0, lenMeshes = glTF.meshes.length; mid < lenMeshes; mid++) {
            mesh = glTF.meshes[mid];
            // vertexArrayMaps[mid] = [];

            for (i = 0, len = mesh.primitives.length; i < len; ++i) {
                primitive = mesh.primitives[i];
                // WebGL2: create vertexArray
                primitive.vertexArray = vertexArray = gl.createVertexArray();
                gl.bindVertexArray(vertexArray);
                
                
                setupAttribuite(primitive.attributes.POSITION, POSITION_LOCATION);
                setupAttribuite(primitive.attributes.NORMAL, NORMAL_LOCATION);

                // @tmp, should consider together with material
                setupAttribuite(primitive.attributes.TEXCOORD_0, TEXCOORD_0_LOCATION);
                

                setupAttribuite(primitive.attributes.JOINTS_0, JOINTS_0_LOCATION);
                setupAttribuite(primitive.attributes.WEIGHTS_0, WEIGHTS_0_LOCATION);

                setupAttribuite(primitive.attributes.JOINTS_1, JOINTS_1_LOCATION);
                setupAttribuite(primitive.attributes.WEIGHTS_1, WEIGHTS_1_LOCATION);

                

                // indices ( assume use indices )
                if (primitive.indices !== undefined) {
                    accessor = glTF.accessors[ primitive.indices ];
                    bufferView = accessor.bufferView;
                    if (bufferView.target === null) {
                        // console.log('WARNING: the bufferview of this accessor should have a target, or it should represent non buffer data (like animation)');
                        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, bufferView.buffer);
                        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, bufferView.data, gl.STATIC_DRAW);
                    } else {
                        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, bufferView.buffer);
                    }
                }
                
                

                gl.bindVertexArray(null);

                gl.bindBuffer(gl.ARRAY_BUFFER, null);
                gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
            }
            
        }


        return newGltfRuntimeScene;
    }




    // -- Render preparation
    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);



    var Renderer = Renderer || {};

    (function() {
        'use strict';


        var scale = vec3.create();
        
        var r = 0.0;
        var rotationSpeedY= 0.01;
        // var rotationSpeedY= 0.0;

        var perspective = mat4.create();
        mat4.perspective(perspective, 0.785, canvas.width / canvas.height, 0.01, 100);

        var modelView = mat4.create();

        var localMV = mat4.create();
        var localMVP = mat4.create();
        var localMVNormal = mat4.create();

        var VP = mat4.create();

        var hasIndices = true;

        var hasSkin = false;
        var uniformBlockID;     // same for uniform block binding id


        var curScene;


        function activeAndBindTexture(uniformLocation, textureInfo) {
            gl.uniform1i(uniformLocation, textureInfo.index);
            gl.activeTexture(gl.TEXTURE0 + textureInfo.index);
            var texture = curScene.glTF.textures[ textureInfo.index ];
            gl.bindTexture(gl.TEXTURE_2D, texture.texture);
            var sampler;
            if (texture.sampler) {
                sampler = texture.sampler.sampler;
            } else {
                sampler = defaultSampler;
            }

            gl.bindSampler(textureInfo.index, sampler);
        }
        

        var defaultColor = [1.0, 1.0, 1.0, 1.0];
        var drawPrimitive = Renderer.drawPrimitive = function(primitive, matrix) {
            mat4.multiply(localMV, modelView, matrix);
            mat4.multiply(localMVP, perspective, localMV);
            // mat4.multiply(localMVP, VP, matrix);

            mat4.invert(localMVNormal, localMV);
            mat4.transpose(localMVNormal, localMVNormal);


            if (primitive.material !== null) {
                if (primitive.material.doubleSided === isFaceCulling) {
                    isFaceCulling = !primitive.material.doubleSided;
                    if (isFaceCulling) {
                        gl.enable(gl.CULL_FACE);
                    } else {
                        gl.disable(gl.CULL_FACE);
                    }
                }
            }
            

            // @tmp: program choice
            // super ugly code

            var texture, sampler;
            var baseColor = defaultColor;
            // hasSkin = false;
            if (hasSkin) {
                if (primitive.material !== null) {

                    if (primitive.material.pbrMetallicRoughness !== null) {
                        

                        if ( primitive.material.pbrMetallicRoughness.baseColorTexture ) {

                            if (primitive.attributes.JOINTS_1 === undefined) {
                                if (program != programSkinBaseTexture) {
                                    gl.useProgram(programSkinBaseTexture.program);
                                    program = programSkinBaseTexture;
                                }
                            } else {
                                if (program != programSkinBaseTextureVec8) {
                                    gl.useProgram(programSkinBaseTextureVec8.program);
                                    program = programSkinBaseTextureVec8;
                                }
                            }

                            gl.uniform1i(program.uniformBaseColorTextureLocation, primitive.material.pbrMetallicRoughness.baseColorTexture.index);
                            gl.activeTexture(gl.TEXTURE0 + primitive.material.pbrMetallicRoughness.baseColorTexture.index);
                            // gl.activeTexture(gl.TEXTURE1);
                            texture = curScene.glTF.textures[ primitive.material.pbrMetallicRoughness.baseColorTexture.index ];
                            gl.bindTexture(gl.TEXTURE_2D, texture.texture);
                            if (texture.sampler) {
                                sampler = texture.sampler.sampler;
                            } else {
                                sampler = defaultSampler;
                            }

                            gl.bindSampler(primitive.material.pbrMetallicRoughness.baseColorTexture.index, sampler);

                            if (primitive.material.pbrMetallicRoughness.baseColorFactor) {
                                baseColor = primitive.material.pbrMetallicRoughness.baseColorFactor;
                            }
                        } else if ( primitive.material.pbrMetallicRoughness.baseColorFactor ) {
                            baseColor = primitive.material.pbrMetallicRoughness.baseColorFactor;

                            if (primitive.attributes.JOINTS_1 === undefined) {
                                if (program != programSkinBaseColor) {
                                    gl.useProgram(programSkinBaseColor.program);
                                    program = programSkinBaseColor;
                                }
                            } else {
                                if (program != programSkinBaseColorVec8) {
                                    gl.useProgram(programSkinBaseColorVec8.program);
                                    program = programSkinBaseColorVec8;
                                }
                            }
                        }
                    }
                }

                gl.uniformBlockBinding(program.program, program.uniformBlockIndexJointMatrix, uniformBlockID);
            } else {

                if (primitive.material !== null) {
                    if (primitive.material.pbrMetallicRoughness !== null) {
                        var material = primitive.material;
                        var pbrMetallicRoughness = primitive.material.pbrMetallicRoughness;
                        // @tmp: ugly code...
                        if (
                            pbrMetallicRoughness.baseColorTexture
                            && pbrMetallicRoughness.metallicRoughnessTexture
                            && material.occlusionTexture
                            && material.emissiveTexture
                        ) {
                            // @tmp full PBR

                            if (program != programPBR) {
                                program = programPBR;
                                gl.useProgram(program.program);
                            }

                            // normal texture
                            activeAndBindTexture(program.uniformNormalTextureLocation, material.normalTexture);
                            gl.uniform1f(program.uniformNormalTextureScaleLocation, material.normalTexture.scale);

                            // metallic roughness texture
                            activeAndBindTexture(program.uniformMetallicRoughnessTextureLocation, pbrMetallicRoughness.metallicRoughnessTexture);
                            gl.uniform1f(program.uniformMetallicFactorLocation, pbrMetallicRoughness.metallicFactor);
                            gl.uniform1f(program.uniformRoughnessFactorLocation, pbrMetallicRoughness.roughnessFactor);

                            // occlusion texture
                            activeAndBindTexture(program.uniformOcclusionTextureLocation, material.occlusionTexture);
                            gl.uniform1f(program.uniformOcclusionStrengthLocation, material.occlusionTexture.strength);

                            // emissive texture
                            activeAndBindTexture(program.uniformEmissiveTextureLocation, material.emissiveTexture);
                            gl.uniform3fv(program.uniformEmissiveFactorLocation, material.emissiveFactor);

                            // base color texture
                            activeAndBindTexture(program.uniformBaseColorTextureLocation, pbrMetallicRoughness.baseColorTexture);

                            gl.activeTexture(gl.TEXTURE0 + BRDF_LUT.textureIndex);
                            gl.bindTexture(gl.TEXTURE_2D, BRDF_LUT.texture);

                            gl.activeTexture(gl.TEXTURE0 + CUBE_MAP.textureIndex);
                            gl.bindTexture(gl.TEXTURE_CUBE_MAP, CUBE_MAP.texture);


                            if (pbrMetallicRoughness.baseColorFactor) {
                                baseColor = pbrMetallicRoughness.baseColorFactor;
                            }
                        } else {

                            if ( pbrMetallicRoughness.baseColorTexture ) {
                                if (primitive.material.normalTexture) {
                                    if (program != programBaseTextureNormalMap) {
                                        gl.useProgram(programBaseTextureNormalMap.program);
                                        program = programBaseTextureNormalMap;
                                    }

                                    gl.uniform1i(program.uniformNormalTextureLocation, primitive.material.normalTexture.index);
                                    gl.activeTexture(gl.TEXTURE0 + primitive.material.normalTexture.index);
                                    texture = curScene.glTF.textures[ primitive.material.normalTexture.index ];
                                    gl.bindTexture(gl.TEXTURE_2D, texture.texture);
                                    if (texture.sampler) {
                                        sampler = texture.sampler.sampler;
                                    } else {
                                        sampler = defaultSampler;
                                    }

                                    gl.bindSampler(primitive.material.normalTexture.index, sampler);
                                } else {
                                    if (program != programBaseTexture) {
                                        gl.useProgram(programBaseTexture.program);
                                        program = programBaseTexture;
                                    }
                                }


                                gl.uniform1i(program.uniformBaseColorTextureLocation, pbrMetallicRoughness.baseColorTexture.index);
                                gl.activeTexture(gl.TEXTURE0 + pbrMetallicRoughness.baseColorTexture.index);
                                texture = curScene.glTF.textures[ pbrMetallicRoughness.baseColorTexture.index ];
                                gl.bindTexture(gl.TEXTURE_2D, texture.texture);
                                if (texture.sampler) {
                                    sampler = texture.sampler.sampler;
                                } else {
                                    sampler = defaultSampler;
                                }

                                gl.bindSampler(pbrMetallicRoughness.baseColorTexture.index, sampler);

                                if (pbrMetallicRoughness.baseColorFactor) {
                                    baseColor = pbrMetallicRoughness.baseColorFactor;
                                }
                            } else if (pbrMetallicRoughness.baseColorFactor) {
                                baseColor = pbrMetallicRoughness.baseColorFactor;
                                if (program != programBaseColor) {
                                    gl.useProgram(programBaseColor.program);
                                    program = programBaseColor;
                                }
                            }

                        }

                    }
                }

            }

            gl.uniform4fv(program.uniformBaseColorFactorLocation, baseColor);

            gl.uniformMatrix4fv(program.uniformMvpLocation, false, localMVP);
            gl.uniformMatrix4fv(program.uniformMvNormalLocation, false, localMVNormal);

            gl.bindVertexArray(primitive.vertexArray);

            // TODO: when no indices, do drawArrays
            gl.drawElements(primitive.mode, primitive.indicesLength, primitive.indicesComponentType, primitive.indicesOffset);
            // gl.drawElements(primitive.mode, 3, primitive.indicesComponentType, primitive.indicesOffset);

            gl.bindVertexArray(null);

        }

        // function drawMesh(mesh, matrix) {
        // }
        var tmpMat4 = mat4.create();
        var inverseTransformMat4 = mat4.create();
        
        // @todo: 
        // in a real engine, it is better to simply parse the node tree stucture
        // to compute transform matrices,
        // then sort node array by material and render use a for loop
        // to minimize context switch
        var drawNode = Renderer.drawNode = function (node, nodeID, nodeMatrix, parentModelMatrix) {
            var matrix = nodeMatrix[nodeID];
            
            if (parentModelMatrix !== undefined) {
                mat4.mul(matrix, parentModelMatrix, node.matrix);
            } else {
                // from scene root, parent is identity
                mat4.copy(matrix, node.matrix);
            }
            // mat4.mul(matrix, parentModelMatrix, node.matrix);

            hasSkin = false;
            if (node.skin !== null) {
                // mesh node with skin
                hasSkin = true;
                var skin = node.skin;
                uniformBlockID = skin.uniformBlockID;
                var joints = node.skin.joints;
                var jointNode;

                mat4.invert(inverseTransformMat4, matrix);


                // @tmp: assume joint nodes are always in the front of the scene node list
                // so that their matrices are ready to use
                for (i = 0, len = joints.length; i < len; i++) {
                    jointNode = joints[i];
                    mat4.mul(tmpMat4, nodeMatrix[jointNode.nodeID], skin.inverseBindMatrix[i]);
                    
                    
                    
                    mat4.mul(tmpMat4, inverseTransformMat4, tmpMat4);

                    // if (skin.skeleton !== null) {
                    //     mat4.mul(tmpMat4, inverseSkeletonRootMat4, tmpMat4);
                    // }

                    skin.jointMatrixUnidormBufferData.set(tmpMat4, i * 16);
                }

                gl.bindBuffer(gl.UNIFORM_BUFFER, skin.jointMatrixUniformBuffer);
                // gl.bufferSubData(gl.UNIFORM_BUFFER, 0, skin.jointMatrixUnidormBufferData);
                gl.bufferSubData(gl.UNIFORM_BUFFER, 0, skin.jointMatrixUnidormBufferData, 0, skin.jointMatrixUnidormBufferData.length);

                // if (program != programSkinBaseColor) {
                //     gl.useProgram(programSkinBaseColor.program);
                //     program = programSkinBaseColor;

                //     // @todo: uniform bind
                //     gl.uniformBlockBinding(program.program, program.uniformBlockIndexJointMatrix, 0);
                // }
                
            }


            var i, len;

            // draw cur node's mesh
            if (node.mesh !== null) {
                // drawMesh(glTF.meshes[node.mesh], matrix);

                // var mesh = glTF.meshes[node.mesh];
                var mesh = node.mesh;
                for (i = 0, len = mesh.primitives.length; i < len; i++) {
                    // draw primitive
                    drawPrimitive(mesh.primitives[i], matrix);
                }

                // BOUNDING_BOX.draw(mesh.boundingBox, matrix, modelView, perspective);
                // gl.useProgram(program);
            }
            
            if (node.skin !== null) {
                gl.bindBuffer(gl.UNIFORM_BUFFER, null);
            }
            

            // draw children
            
            var childNodeID;
            for (i = 0, len = node.children.length; i < len; i++) {
                // childNodeID = node.children[i];
                // drawNode(glTF.nodes[childNodeID], childNodeID, matrix);
                drawNode(node.children[i], node.children[i].nodeID, nodeMatrix, matrix);
            }
        }


        var drawScene = Renderer.drawScene = function (scene) {
            // for (var i = 0, len = scene.nodes.length; i < len; i++) {
            //     drawNode( scene.nodes[i], scene.nodes[i].nodeID, rootTransform );
            // }
            // animation
            var animation;
            var i, len, j, lenj;
            var channel, animationSampler, node;

            var glTF = scene.glTF;
            if (glTF.animations) {
                for (i = 0, len = glTF.animations.length; i < len; i++) {
                    animation = glTF.animations[i];
                    for (j = 0, lenj = animation.samplers.length; j < lenj; j++) {
                        animation.samplers[j].getValue(timeParameter);
                    }

                    for (j = 0, lenj = animation.channels.length; j < lenj; j++) {
                        channel = animation.channels[j];
                        animationSampler = channel.sampler;
                        node = glTF.nodes[channel.target.nodeID];

                        switch (channel.target.path) {
                            case 'rotation':
                            vec4.copy(node.rotation, animationSampler.curValue);
                            break;

                            case 'translation':
                            vec3.copy(node.translation, animationSampler.curValue);
                            break;

                            case 'scale':
                            vec3.copy(node.scale, animationSampler.curValue);
                            break;
                        }
                        // switch (channel.target.path) {
                        //     case 'rotation':
                        //     vec4.copy(node.rotation, animationSampler.curValue);
                        //     break;

                        //     case 'translation':
                        //     vec3.copy(node.translation, animationSampler.curValue);
                        //     break;

                        //     case 'scale':
                        //     vec3.copy(node.scale, animationSampler.curValue);
                        //     break;
                        // }

                        node.updateMatrixFromTRS();
                        
                    }
                }
            }


            for (var i = 0, len = scene.glTFScene.nodes.length; i < len; i++) {
                drawNode( scene.glTFScene.nodes[i], scene.glTFScene.nodes[i].nodeID, scene.nodeMatrix, scene.rootTransform );
            }
        }

        var drawSceneBBox = Renderer.drawSceneBBox = function (glTF, scene, bboxType) {
            var node, mesh, bbox;
            // @temp: assume all nodes are in cur scene
            // @potential fix: can label each node's scene at the setup
            var i, len;
            for (i = 0, len = scene.nodeMatrix.length; i < len; i++) {
                node = glTF.nodes[i];

                if (bboxType == 'bvh') {
                    // bvh
                    mat4.mul(localMVP, scene.rootTransform, node.bvh.transform);
                    mat4.mul(localMVP, VP, localMVP);
                    gl.uniformMatrix4fv(BOUNDING_BOX.uniformMvpLocation, false, localMVP);
                    gl.drawArrays(gl.LINES, 0, 24);
                }
                else if (node.mesh !== null) {
                    // mesh = glTF.meshes[node.mesh];
                    mesh = node.mesh;

                    if (bboxType == 'aabb') {
                        // aabb
                        mat4.mul(localMVP, scene.rootTransform, node.aabb.transform);
                        mat4.mul(localMVP, VP, localMVP);
                    } else {
                        // obb (assume object node is static)
                        mat4.mul(localMVP, scene.nodeMatrix[i], mesh.boundingBox.transform);
                        mat4.mul(localMVP, VP, localMVP);
                    }

                    gl.uniformMatrix4fv(BOUNDING_BOX.uniformMvpLocation, false, localMVP);
                        
                    gl.drawArrays(gl.LINES, 0, 24);

                }   
            }

            // scene bounding box
            mat4.mul(localMVP, scene.rootTransform, scene.glTFScene.boundingBox.transform);
            mat4.mul(localMVP, VP, localMVP);
            gl.uniformMatrix4fv(BOUNDING_BOX.uniformMvpLocation, false, localMVP);
            gl.drawArrays(gl.LINES, 0, 24);
        }
        

        var timeParameter = 0;





        // -- Render loop
        // function render() {
        var render = Renderer.render = function() {
            var i, len;
            var j, lenj;
            var node;


            gl.clearColor(0.0, 0.0, 0.0, 1.0);
            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

            vec3.set(scale, s, s, s);
            // mat4.identity(modelView);
            // mat4.translate(modelView, modelView, translate);
            // mat4.scale(modelView, modelView, scale);
            // mat4.fromRotationTranslationScale(modelView, identityQ, translate, scale);
            // mat4.mul(modelView, modelView, modelMatrix);
            mat4.identity(modelView);
            mat4.translate(modelView, modelView, translate);
            if (isDisplayRotation) {
                r += rotationSpeedY;
            }
            

            mat4.rotateX(modelView, modelView, eulerX);
            mat4.rotateY(modelView, modelView, r);
            mat4.scale(modelView, modelView, scale);
            
            mat4.mul(modelView, modelView, modelMatrix);

            mat4.rotateY(modelView, modelView, eulerY); 

            

            mat4.mul(VP, perspective, modelView);

            gl.useProgram(program.program);

            for (i = 0, len = scenes.length; i < len; i++) {
                curScene = scenes[i];

                drawScene(scenes[i]);
            }

            if (drawBoundingBox) {
                gl.useProgram(BOUNDING_BOX.program);
                gl.bindVertexArray(BOUNDING_BOX.vertexArray);

                for (i = 0, len = scenes.length; i < len; i++) {
                    drawSceneBBox(scenes[i].glTF, scenes[i], boundingBoxType);
                }


                gl.bindVertexArray(null);
                gl.useProgram(program.program);
            }


            // cube map

            CUBE_MAP.draw(modelView, perspective);



            requestAnimationFrame(render);
            timeParameter += 0.01;
        }

    })();





    // glTFLoader.loadGLTF(gltfUrl, function(glTF) {

    //     setupScene(glTF);
        

    //     // render();
    //     Renderer.render();
        

    // });

    CUBE_MAP.finishLoadingCallback = function() {
        glTFLoader.loadGLTF(gltfUrl, function(glTF) {
            setupScene(glTF);
            Renderer.render();
        });
    };

    CUBE_MAP.loadAll();

})();
