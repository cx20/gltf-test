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
    modelInfo = TutorialAgiPbrModelIndex.getCurrentModel();
}
if (!modelInfo) {
    document.getElementById('container').innerHTML = 'Please specify a model to load';
    throw new Error('Model not specified or not found in list.');
}

var drawBoundingBox = true;
var boundingBoxType = 'obb';


var canvas = document.getElementById("world");
var gl = canvas.getContext( 'webgl2', { antialias: true } );
resizeCanvas();
window.addEventListener("resize", function(){
    resizeCanvas();
});
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    gl.viewport(0, 0, canvas.width, canvas.height);
}
// Scene object for runtime renderer
var Scene = function(glTFScene, glTF) {
    this.glTFScene = glTFScene;
    // runtime renderer context
    this.rootTransform = mat4.create();
    // @temp, assume every node is in current scene
    this.nodeMatrix = new Array(glTF.nodes.length);
    for(var i = 0, len = this.nodeMatrix.length; i < len; i++) {
        this.nodeMatrix[i] = mat4.create();
    }
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

    program: createProgram(gl, getShaderSource('vs-bbox'), getShaderSource('fs-bbox')),
    positionLocation: 0,
    uniformMvpLocation: 0, 

    
    draw: (function() {
        var MVP = mat4.create();
        return (function(bbox, nodeTransform, V, P) {
            gl.useProgram(this.program);

            mat4.mul(MVP, nodeTransform, bbox.transform);
            mat4.mul(MVP, V, MVP);
            mat4.mul(MVP, P, MVP);

            gl.uniformMatrix4fv(this.uniformMvpLocation, false, MVP);
            gl.bindVertexArray(this.vertexArray);
            gl.drawArrays(gl.LINES, 0, 24);
            gl.bindVertexArray(null);
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



// // -- Initialize program
// var program = createProgram(gl, getShaderSource('vs-normal'), getShaderSource('fs-normal'));
// var uniformMvpLocation = gl.getUniformLocation(program, "u_MVP");
// var uniformMvNormalLocation = gl.getUniformLocation(program, "u_MVNormal");

// var program = createProgram(gl, getShaderSource('vs-normal'), getShaderSource('fs-base-color'));
// var uniformMvpLocation = gl.getUniformLocation(program, "u_MVP");
// var uniformMvNormalLocation = gl.getUniformLocation(program, "u_MVNormal");
// var uniformBaseColorFactorLocation = gl.getUniformLocation(program, "u_baseColorFactor");

var program = createProgram(gl, getShaderSource('vs-normal'), getShaderSource('fs-base-color'));
var programBaseColor = {
    program: program,
    uniformMvpLocation: gl.getUniformLocation(program, "u_MVP"),
    uniformMvNormalLocation: gl.getUniformLocation(program, "u_MVNormal"),
    uniformBaseColorFactorLocation: gl.getUniformLocation(program, "u_baseColorFactor")
};
program = createProgram(gl, getShaderSource('vs-texture'), getShaderSource('fs-texture'));
var programBaseTexture = {
    program: program,
    uniformMvpLocation: gl.getUniformLocation(program, "u_MVP"),
    uniformMvNormalLocation: gl.getUniformLocation(program, "u_MVNormal"),
    uniformBaseColorFactorLocation: gl.getUniformLocation(program, "u_baseColorFactor"),
    uniformBaseColorTextureLocation: gl.getUniformLocation(program, "u_baseColorTexture"),
};
// @temp test
program = createProgram(gl, getShaderSource('vs-texture'), getShaderSource('fs-texture-normal-map'));
var programBaseTextureNormalMap = {
    program: program,
    uniformMvpLocation: gl.getUniformLocation(program, "u_MVP"),
    uniformMvNormalLocation: gl.getUniformLocation(program, "u_MVNormal"),
    uniformBaseColorFactorLocation: gl.getUniformLocation(program, "u_baseColorFactor"),
    uniformBaseColorTextureLocation: gl.getUniformLocation(program, "u_baseColorTexture"),
    // uniformNormalTextureScaleLocation: gl.getUniformLocation(program, "u_normalTextureScale"),
    uniformNormalTextureLocation: gl.getUniformLocation(program, "u_normalTexture")
};
        
// -- Mouse Behaviour
var s = 1;
var eulerX = 0;
// var s = 1;
// var t = -100;
var translate = vec3.create();
// var t = -5;
var modelMatrix = mat4.create();
var mouseDown = false;
var lastMouseY = 0;
var identityQ = quat.create();
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
    
    // s *= (1 + deltaY / 1000);
    eulerX += -deltaY * 0.01;
    
    lastMouseY = newY;
};
window.onwheel = function(event) {
    translate[2] += -event.deltaY * 0.004;
    // translate[2] *= 1 + (-event.deltaY * 0.01);
};
// -- Load glTF then render
//var gltfUrl = "../../sampleModels/" + modelInfo.path;
var gltfUrl = "../../" + modelInfo.category + "/" + modelInfo.path;

var glTFLoader = new MinimalGLTFLoader.glTFLoader(gl);
var glTFModelCount = 1;
var scenes = [];
glTFLoader.loadGLTF(gltfUrl, function(glTF) {
    var curScene = glTF.scenes[glTF.defaultScene];
    // // draw multiple copies of the glTF scene
    // // to build a relative complex scene for octree and occlusion query test
    // var sceneRootTransforms = [mat4.create(), mat4.create()];
    // var sceneDeltaTranslate = vec3.fromValues(curScene.boundingBox.transform[0] * 1.2, 0, 0);
    // mat4.fromTranslation(sceneRootTransforms[1], sceneDeltaTranslate);
    var sceneDeltaTranslate = vec3.fromValues(curScene.boundingBox.transform[0] * 1.2, 0, 0);
    var tmpVec3Translate = vec3.create();
    for (i = 0, len = glTFModelCount; i < len; i++) {
        scenes.push(new Scene(curScene, glTF));
        vec3.scale(tmpVec3Translate, sceneDeltaTranslate, i);
        mat4.fromTranslation(scenes[i].rootTransform, tmpVec3Translate);
    }
    
    
    
    // center
    s = 1.0 / Math.max( curScene.boundingBox.transform[0], Math.max(curScene.boundingBox.transform[5], curScene.boundingBox.transform[10]) );
    mat4.getTranslation(translate, curScene.boundingBox.transform);
    vec3.scale(translate, translate, -1);
    translate[0] += - 0.5 * curScene.boundingBox.transform[0];
    translate[1] += - 0.5 * curScene.boundingBox.transform[5];
    translate[2] += - 0.5 * curScene.boundingBox.transform[10];
    s *= 0.5;
    modelMatrix[0] = s;
    modelMatrix[5] = s;
    modelMatrix[10] = s;
    mat4.translate(modelMatrix, modelMatrix, translate);
    vec3.set(translate, 0, 0, -1.5);
    s = 1;
    // -- Initialize vertex array
    var POSITION_LOCATION = 0; // set with GLSL layout qualifier
    var NORMAL_LOCATION = 1; // set with GLSL layout qualifier
    var TEXCOORD_0_LOCATION = 2; // set with GLSL layout qualifier
    // var vertexArrayMaps = {};
    // var vertexArrayMaps = [];
    // var in loop
    var mesh;
    var primitive;
    var vertexBuffer;
    var indexBuffer;
    var vertexArray;
    var nid, lenNodes;
    var mid, lenMeshes;
    var i, len;
    var attribute;
    var image, texture, sampler;
    var accessor, bufferView;
    var animation, animationSampler, channel;
    program = programBaseColor;
    // // animations typed array
    // for (i = 0, len = glTF.animations.length; i < len; i++) {
    //     animation = glTF.animations[i];
        
    // }
    // create buffers
    for (i = 0, len = glTF.bufferViews.length; i < len; i++) {
        bufferView = glTF.bufferViews[i];
        // bufferView.buffer = gl.createBuffer();
        // if (bufferView.target) {
        //     gl.bindBuffer(bufferView.target, bufferView.buffer);
        //     gl.bufferData(bufferView.target, bufferView.data, gl.STATIC_DRAW);
        //     gl.bindBuffer(bufferView.target, null);
        // }
        bufferView.createBuffer(gl);
        bufferView.bindData(gl);
    }
    
    // create textures
    if (this.glTF.textures) {
        for (i = 0, len = glTF.textures.length; i < len; i++) {
            texture = glTF.textures[i];
            // texture.texture = gl.createTexture();
            // gl.bindTexture(gl.TEXTURE_2D, texture.texture);
            // gl.texImage2D(
            //     gl.TEXTURE_2D,  // assumed
            //     0,        // Level of details
            //     gl.RGBA, // Format
            //     gl.RGBA,
            //     gl.UNSIGNED_BYTE, // Size of each channel
            //     texture.source
            // );
            texture.createTexture(i, gl);
        }
    }
    // create samplers
    if (this.glTF.samplers) {
        for (i = 0, len = glTF.samplers.length; i < len; i++) {
            sampler = glTF.samplers[i];
            
            sampler.createSampler(gl);
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
            
            // attributes
            // for (attribute in primitive.attributes) {
            //     accessor = glTF.accessors[ primitive.attributes[attribute] ];
            // }
            accessor = glTF.accessors[ primitive.attributes.POSITION ];
            bufferView = accessor.bufferView;
            if (bufferView.target === null) {
                gl.bindBuffer(gl.ARRAY_BUFFER, bufferView.buffer);
                gl.bufferData(gl.ARRAY_BUFFER, bufferView.data, gl.STATIC_DRAW);
            } else {
                gl.bindBuffer(bufferView.target, bufferView.buffer);
            }
            
            gl.vertexAttribPointer(
                POSITION_LOCATION,
                accessor.size,
                accessor.componentType,
                accessor.normalized,
                accessor.byteStride,
                accessor.byteOffset
                );
            gl.enableVertexAttribArray(POSITION_LOCATION);
            accessor = glTF.accessors[ primitive.attributes.NORMAL ];
            bufferView = accessor.bufferView;
            if (bufferView.target === null) {
                gl.bindBuffer(gl.ARRAY_BUFFER, bufferView.buffer);
                gl.bufferData(gl.ARRAY_BUFFER, bufferView.data, gl.STATIC_DRAW);
            } else {
                gl.bindBuffer(bufferView.target, bufferView.buffer);
            }
            
            gl.vertexAttribPointer(
                NORMAL_LOCATION,
                accessor.size,
                accessor.componentType,
                accessor.normalized,
                accessor.byteStride,
                accessor.byteOffset
                );
            gl.enableVertexAttribArray(NORMAL_LOCATION);
            // @tmp, should consider together with material
            if (primitive.attributes.TEXCOORD_0 !== undefined) {
                accessor = glTF.accessors[ primitive.attributes.TEXCOORD_0 ];
                bufferView = accessor.bufferView;
                if (bufferView.target === null) {
                    gl.bindBuffer(gl.ARRAY_BUFFER, bufferView.buffer);
                    gl.bufferData(gl.ARRAY_BUFFER, bufferView.data, gl.STATIC_DRAW);
                } else {
                    gl.bindBuffer(bufferView.target, bufferView.buffer);
                }
                
                gl.vertexAttribPointer(
                    TEXCOORD_0_LOCATION,
                    accessor.size,
                    accessor.componentType,
                    accessor.normalized,
                    accessor.byteStride,
                    accessor.byteOffset
                    );
                gl.enableVertexAttribArray(TEXCOORD_0_LOCATION);
            }
            
            // indices ( assume use indices )
            accessor = glTF.accessors[ primitive.indices ];
            bufferView = accessor.bufferView;
            if (bufferView.target === null) {
                gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, bufferView.buffer);
                gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, bufferView.data, gl.STATIC_DRAW);
            } else {
                gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, bufferView.buffer);
            }
            
            gl.bindVertexArray(null);
            gl.bindBuffer(gl.ARRAY_BUFFER, null);
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
        }
        
    }
    
    // -- Render preparation
    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);
    
    var scale = vec3.create();
    
    var r = 0.0;
    var rotationSpeedY= 0.01;
    var perspective = mat4.create();
    mat4.perspective(perspective, 0.785, canvas.width / canvas.height, 0.1, 100);
    var modelView = mat4.create();
    var localMV = mat4.create();
    var localMVP = mat4.create();
    var localMVNormal = mat4.create();
    var VP = mat4.create();
    // var nodeMatrix = new Array(glTF.nodes.length);
    // for(i = 0, len = nodeMatrix.length; i < len; i++) {
    //     nodeMatrix[i] = mat4.create();
    // }
    var defaultColor = [1.0, 1.0, 1.0, 1.0];
    function drawPrimitive(primitive, matrix) {
        mat4.multiply(localMV, modelView, matrix);
        mat4.multiply(localMVP, perspective, localMV);
        // mat4.multiply(localMVP, VP, matrix);
        mat4.invert(localMVNormal, localMV);
        mat4.transpose(localMVNormal, localMVNormal);
        // @tmp: material
        var baseColor = defaultColor;
        if (primitive.material !== null) {
            if (primitive.material.pbrMetallicRoughness !== null) {
                if ( primitive.material.pbrMetallicRoughness.baseColorFactor ) {
                    baseColor = primitive.material.pbrMetallicRoughness.baseColorFactor;
                    if (program != programBaseColor) {
                        gl.useProgram(programBaseColor.program);
                        program = programBaseColor;
                    }
                }
                if ( primitive.material.pbrMetallicRoughness.baseColorTexture ) {
                    if (primitive.material.normalTexture) {
                        if (program != programBaseTextureNormalMap) {
                            gl.useProgram(programBaseTextureNormalMap.program);
                            program = programBaseTextureNormalMap;
                        }
                        gl.uniform1i(program.uniformNormalTextureLocation, primitive.material.normalTexture.index);
                        gl.activeTexture(gl.TEXTURE0 + primitive.material.normalTexture.index);
                        texture = glTF.textures[ primitive.material.normalTexture.index ];
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
                    gl.uniform1i(program.uniformBaseColorTextureLocation, primitive.material.pbrMetallicRoughness.baseColorTexture.index);
                    gl.activeTexture(gl.TEXTURE0 + primitive.material.pbrMetallicRoughness.baseColorTexture.index);
                    // gl.activeTexture(gl.TEXTURE1);
                    texture = glTF.textures[ primitive.material.pbrMetallicRoughness.baseColorTexture.index ];
                    gl.bindTexture(gl.TEXTURE_2D, texture.texture);
                    if (texture.sampler) {
                        sampler = texture.sampler.sampler;
                    } else {
                        sampler = defaultSampler;
                    }
                    gl.bindSampler(primitive.material.pbrMetallicRoughness.baseColorTexture.index, sampler);
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
    
    function drawNode(node, nodeID, nodeMatrix, parentModelMatrix) {
        var matrix = nodeMatrix[nodeID];
        
        if (parentModelMatrix !== undefined) {
            mat4.mul(matrix, parentModelMatrix, node.matrix);
        } else {
            // from scene root, parent is identity
            mat4.copy(matrix, node.matrix);
        }
        // mat4.mul(matrix, parentModelMatrix, node.matrix);
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
        
        // draw children
        
        var childNodeID;
        for (i = 0, len = node.children.length; i < len; i++) {
            // childNodeID = node.children[i];
            // drawNode(glTF.nodes[childNodeID], childNodeID, matrix);
            drawNode(node.children[i], node.children[i].nodeID, nodeMatrix, matrix);
        }
    }
    function drawScene(scene) {
        // for (var i = 0, len = scene.nodes.length; i < len; i++) {
        //     drawNode( scene.nodes[i], scene.nodes[i].nodeID, rootTransform );
        // }
        for (var i = 0, len = scene.glTFScene.nodes.length; i < len; i++) {
            drawNode( scene.glTFScene.nodes[i], scene.glTFScene.nodes[i].nodeID, scene.nodeMatrix, scene.rootTransform );
        }
    }
    function drawSceneBBox(glTF, scene, bboxType) {
        var node, mesh, bbox;
        // @temp: assume all nodes are in cur scene
        // @potential fix: can label each node's scene at the setup
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
    (function render() {
        var i, len;
        
        // animation
        if (glTF.animations) {
            var j, lenj;
            var node;
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
        r += rotationSpeedY;
        
        mat4.rotateY(modelView, modelView, r);
        mat4.rotateX(modelView, modelView, eulerX);
        
        mat4.scale(modelView, modelView, scale);
        mat4.mul(modelView, modelView, modelMatrix);
        // mat4.perspective(perspective, 0.785, canvas.width / canvas.height, 0.1, translate[2] + curScene.boundingBox.transform[10]);
        
        mat4.mul(VP, perspective, modelView);
        gl.useProgram(program.program);
        for (i = 0, len = scenes.length; i < len; i++) {
            drawScene(scenes[i]);
        }
        // drawScene(curScene);
        // drawScene(curScene, sceneRootTransforms[1]);
        if (drawBoundingBox) {
            gl.useProgram(BOUNDING_BOX.program);
            gl.bindVertexArray(BOUNDING_BOX.vertexArray);
            for (i = 0, len = scenes.length; i < len; i++) {
                drawSceneBBox(glTF, scenes[i], boundingBoxType);
            }
            gl.bindVertexArray(null);
            gl.useProgram(program.program);
        }
        requestAnimationFrame(render);
        timeParameter += 0.01;
    })();
});