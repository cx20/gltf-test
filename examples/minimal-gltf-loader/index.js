'use strict';

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
    document.getElementById('container').innerHTML = 'Please specify a model to load';
    throw new Error('Model not specified or not found in list.');
}

var canvas = document.getElementById("world");
var gl = canvas.getContext( 'webgl', { antialias: false } );

// -- Mouse Behaviour
//var s = 0.1;
var s = modelInfo.scale;
//var t = [0, 0, -100];
var t = [0,-1,-5];
var mouseDown = false;
var lastMouseY = 0;
window.onmousedown = function(event) {
    mouseDown = true;
    lastMouseY = event.clientY;
};
window.onmouseup = function(event) {
    mouseDown = false;  
};
window.onmousemove = function(event) {
    if(!mouseDown) {
        return;
    }
    var newY = event.clientY;
    
    var deltaY = newY - lastMouseY;
    
    s += deltaY / 1000;
    
    lastMouseY = newY;
};
window.onwheel = function(event) {
    t[2] += -event.deltaY / 10;
};
// -- Load glTF then render
//var gltfUrl = "../../sampleModels/" + modelInfo.path;
var gltfUrl = "../../" + modelInfo.category + "/" + modelInfo.path;
var glTFLoader = new MinimalGLTFLoader.glTFLoader(gl);
glTFLoader.loadGLTF(gltfUrl, function(glTF) {
    var curScene = glTF.scenes[glTF.defaultScene];
    
    
    // -- Initialize program
    
    // -- Initialize vertex array
    var POSITION_LOCATION = 0; // set with GLSL layout qualifier
    var NORMAL_LOCATION = 1; // set with GLSL layout qualifier
    
    
    var mesh;
    var primitive;
    var vertexBuffer;
    var indicesBuffer;
    var primitiveWebGLBufferNames = [];
    var material;
    var technique;
    var program;
    var programsLocations = {};
    var a_locations;
    var u_locations;
    var attributeInfo;
    var indicesInfo;
    var webGLTextures = {};
    var webGLSamplers = {};
    // temp var
    var i,len;
    var primitiveOrderID;
    // textures setting
    var textureID = 0;
    var textureInfo;
    var samplerInfo;
    var target, format, internalFormat, type;   // texture info
    var magFilter, minFilter, wrapS, wrapT;
    var image;
    var texture;
    var sampler;
    // textures
    for (var tid in glTF.json.textures) {
        textureInfo = glTF.json.textures[tid];
        target = textureInfo.target || gl.TEXTURE_2D;
        format = textureInfo.format || gl.RGBA;
        internalFormat = textureInfo.format || gl.RGBA;
        type = textureInfo.type || gl.UNSIGNED_BYTE;
        image = glTF.images[textureInfo.source];
        texture = gl.createTexture();
        gl.activeTexture(gl.TEXTURE0 + textureID);
        gl.bindTexture(target, texture);
        switch(target) {
            case 3553: // gl.TEXTURE_2D
                gl.texImage2D(target, 0, internalFormat, format, type, image);
                break;
                // TODO
        }
        // !! Sampler
        // raw WebGL 1, no sampler object, set magfilter, wrapS, etc
        samplerInfo = glTF.json.samplers[textureInfo.sampler];
        minFilter = samplerInfo.minFilter || gl.NEAREST_MIPMAP_LINEAR;
        magFilter = samplerInfo.magFilter || gl.LINEAR;
        wrapS = samplerInfo.wrapS || gl.REPEAT;
        wrapT = samplerInfo.wrapT || gl.REPEAT;
        gl.texParameteri(target, gl.TEXTURE_MIN_FILTER, minFilter);
        gl.texParameteri(target, gl.TEXTURE_MAG_FILTER, magFilter);
        gl.texParameteri(target, gl.TEXTURE_WRAP_S, wrapS);
        gl.texParameteri(target, gl.TEXTURE_WRAP_T, wrapT);
        if (minFilter == gl.NEAREST_MIPMAP_NEAREST || 
            minFilter == gl.NEAREST_MIPMAP_LINEAR || 
            minFilter == gl.LINEAR_MIPMAP_NEAREST ||
            minFilter == gl.LINEAR_MIPMAP_LINEAR ) {
            gl.generateMipmap(target);
        }
        gl.bindTexture(target, null);
        webGLTextures[tid] = {
            texture: texture,
            target: target,
            id: textureID
        };
        textureID++;
    }
    
    
    for (var mid in curScene.meshes) {
        mesh = curScene.meshes[mid];
        for (i = 0, len = mesh.primitives.length; i < len; ++i) {
            primitive = mesh.primitives[i];
            // program setting
            material = primitive.material;
            technique = primitive.technique;
            programsLocations[technique.program] = {
                attributeLocations: {}, 
                uniformLocations: {}
            };
            a_locations = programsLocations[technique.program].attributeLocations;
            u_locations = programsLocations[technique.program].uniformLocations;
            program = glTF.programs[technique.program].program;
            
            for (var attribute in technique.attributes) {
                a_locations[attribute] = gl.getAttribLocation(program, attribute);
            }
            for (var uniform in technique.uniforms) {
                u_locations[uniform] = gl.getUniformLocation(program, uniform);
            }
            
            // create buffers
            vertexBuffer = gl.createBuffer();
            indicesBuffer = gl.createBuffer();
            primitiveWebGLBufferNames.push({
                vertexBufferName: vertexBuffer,
                indicesBufferName: indicesBuffer
            });
            // initialize buffer
            var vertices = primitive.vertexBuffer;
            gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
            gl.bindBuffer(gl.ARRAY_BUFFER, null);
            var indices = primitive.indices;
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indicesBuffer);
            gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW);
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
        }
        
    }
    
    // -- Render preparation
    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);
    var translate = vec3.create();
    
    var scale = vec3.create();
    
    var r = 0.0;
    var rotationSpeedY= 0.01;
    var perspective = mat4.create();
    mat4.perspective(perspective, 0.785, 1, 1, 1000);
    var modelView = mat4.create();
    var localMV = mat4.create();
    var localMVP = mat4.create();
    
    var localMVNormal = mat3.create();
    // -- Render loop
    (function render() {
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        vec3.set(translate, t[0], t[1], t[2]);
        vec3.set(scale, s, s, s);
        mat4.identity(modelView);
        mat4.translate(modelView, modelView, translate);
        mat4.scale(modelView, modelView, scale);
        r += rotationSpeedY;
        mat4.rotateY(modelView, modelView, r);
        primitiveOrderID = 0;
        for (var mid in curScene.meshes) {
            mesh = curScene.meshes[mid];
            for (i = 0, len = mesh.primitives.length; i < len; ++i, ++primitiveOrderID) {
                primitive = mesh.primitives[i];
                // prepare transformation matrix
                mat4.multiply(localMV, modelView, primitive.matrix);
                //mat4.copy(localMV, modelView);
                mat4.multiply(localMVP, perspective, localMV);
                mat3.normalFromMat4(localMVNormal, primitive.matrix);
                material = primitive.material;
                technique = primitive.technique;
                a_locations = programsLocations[technique.program].attributeLocations;
                u_locations = programsLocations[technique.program].uniformLocations;
                
                program = glTF.programs[technique.program].program;
                texture = null;
                sampler = null;
                gl.useProgram(program);
                // bind data
                // uniforms
                for (var uniform in technique.uniforms) {
                    var u = technique.uniforms[uniform];    // u: parameter name without u_
                    var p = technique.parameters[u];
                    if(p.semantic) {
                        switch(p.semantic) {
                            case 'MODELVIEW':
                                gl.uniformMatrix4fv(u_locations[uniform], false, p.node ? glTF.nodeMatrix[p.node]: localMV);
                                break;
                                
                            case 'MODELVIEWINVERSETRANSPOSE': 
                                gl.uniformMatrix3fv(u_locations[uniform], false, localMVNormal);
                                break;
                                
                            case 'PROJECTION':
                                gl.uniformMatrix4fv(u_locations[uniform], false, perspective);  // ? from node ?
                                break;
                                
                                // TODO
                                
                            default:
                                console.log('missing uniform matrix semantic');
                                break;
                        }
                    } else {
                        var value = p.value || material.values[u];
                        // TODO: when material doesn't have value, use some default
                        switch(p.type) {
                                // case 5120: // BYTE
                                // gl.uniform1f(u_locations[uniform], value);
                                // break;
                                
                            case 5124: // INT
                                gl.uniform1i(u_locations[uniform], value);
                                break;
                            case 5126: // FLOAT
                                gl.uniform1f(u_locations[uniform], value);
                                break;
                                
                            case 35664: // FLOAT_VEC2
                                gl.uniform2f(u_locations[uniform], value[0], value[1]);
                                break;
                                
                            case 35665: // FLOAT_VEC3
                                gl.uniform3f(u_locations[uniform], value[0], value[1], value[2]);
                                break;
                                
                            case 35666: // FLOAT_VEC4
                                gl.uniform4f(u_locations[uniform], value[0], value[1], value[2], value[3]);
                                break;
                            case 35667: // INT_VEC2
                                gl.uniform2i(u_locations[uniform], value[0], value[1]);
                                break;
                                
                            case 35668: // INT_VEC3
                                gl.uniform3i(u_locations[uniform], value[0], value[1], value[2]);
                                break;
                                
                            case 35669: // INT_VEC4
                                gl.uniform4i(u_locations[uniform], value[0], value[1], value[2], value[3]);
                                break;
                            case 35678: // SAMPLER_2D
                                texture = webGLTextures[value];
                                gl.uniform1i(u_locations[uniform], texture.id);
                                //sampler = webGLSamplers[texture.sampler];
                                //gl.uniform1i(u_locations[uniform], sampler);
                                break;
                                //TODO
                                
                            default:
                                console.log('missing uniform type');
                                break;
                        }
                    }
                    
                }
                // attributes
                //gl.bindBuffer(gl.ARRAY_BUFFER, primitive.vertexWebGLBufferName);
                gl.bindBuffer(gl.ARRAY_BUFFER, primitiveWebGLBufferNames[primitiveOrderID].vertexBufferName);
                for (var attribute in technique.attributes) {
                    attributeInfo = primitive.attributes[technique.parameters[technique.attributes[attribute]].semantic];
                    gl.vertexAttribPointer(
                        a_locations[attribute],
                        attributeInfo.size,
                        attributeInfo.type,
                        false,
                        attributeInfo.stride,
                        attributeInfo.offset
                    );
                    gl.enableVertexAttribArray(a_locations[attribute]);
                }
                
                //gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, primitive.indicesWebGLBufferName);
                gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, primitiveWebGLBufferNames[primitiveOrderID].indicesBufferName);
                if (texture) {
                    gl.activeTexture(gl.TEXTURE0 + texture.id);
                    gl.bindTexture(texture.target, texture.texture);
                    //gl.bindSampler(0, sampler);
                }
                
                // TODO: when no indices, do drawArrays
                gl.drawElements(primitive.mode, primitive.indices.length, primitive.indicesComponentType, 0);
                gl.bindBuffer(gl.ARRAY_BUFFER, null);
                gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
            }
        }
        
        requestAnimationFrame(render);
    })();
});
