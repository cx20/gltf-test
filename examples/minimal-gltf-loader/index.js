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

// -- Mouse Behaviour
//var s = 0.1;
var s = modelInfo.scale * 100;
// var s = 1;
//var t = -100;
// var t = -5;
var t = -5 * 100;
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
    t += -event.deltaY / 10;
};
// -- Load glTF then render
//var gltfUrl = "../../sampleModels/" + modelInfo.path;
var gltfUrl = "../../" + modelInfo.category + "/" + modelInfo.path;

var glTFLoader = new MinimalGLTFLoader.glTFLoader(gl);

glTFLoader.loadGLTF(gltfUrl, function(glTF) {

    var curScene = glTF.scenes[glTF.defaultScene];
    
    // // -- Initialize program
    // var program = createProgram(gl, getShaderSource('vs-normal'), getShaderSource('fs-normal'));
    // var uniformMvpLocation = gl.getUniformLocation(program, "u_MVP");
    // var uniformMvNormalLocation = gl.getUniformLocation(program, "u_MVNormal");

    var program = createProgram(gl, getShaderSource('vs-normal'), getShaderSource('fs-base-color'));
    var uniformMvpLocation = gl.getUniformLocation(program, "u_MVP");
    var uniformMvNormalLocation = gl.getUniformLocation(program, "u_MVNormal");
    var uniformBaseColorFactorLocation = gl.getUniformLocation(program, "u_baseColorFactor");

    // -- Initialize vertex array
    var POSITION_LOCATION = 0; // set with GLSL layout qualifier
    var NORMAL_LOCATION = 1; // set with GLSL layout qualifier

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

    var accessor, bufferView;

    // console.log(glTF.bufferViews);
    // console.log(glTF.accessors);

    // create buffers
    for (i = 0, len = glTF.bufferViews.length; i < len; i++) {
        bufferView = glTF.bufferViews[i];
        bufferView.buffer = gl.createBuffer();
        if (bufferView.target) {
            gl.bindBuffer(bufferView.target, bufferView.buffer);
            gl.bufferData(bufferView.target, bufferView.data, gl.STATIC_DRAW);
            gl.bindBuffer(bufferView.target, null);
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
            accessor = glTF.accessors[ primitive.attributes['POSITION'] ];
            bufferView = accessor.bufferView;
            if (bufferView.target === null) {
                // bufferView.target = gl.ARRAY_BUFFER;
                gl.bindBuffer(gl.ARRAY_BUFFER, bufferView.buffer);
                gl.bufferData(gl.ARRAY_BUFFER, bufferView.data, gl.STATIC_DRAW);
            } else {
                gl.bindBuffer(gl.ARRAY_BUFFER, bufferView.buffer);
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

            accessor = glTF.accessors[ primitive.attributes['NORMAL'] ];
            bufferView = accessor.bufferView;
            if (bufferView.target === null) {
                // bufferView.target = gl.ARRAY_BUFFER;
                gl.bindBuffer(gl.ARRAY_BUFFER, bufferView.buffer);
                gl.bufferData(gl.ARRAY_BUFFER, bufferView.data, gl.STATIC_DRAW);
            } else {
                gl.bindBuffer(gl.ARRAY_BUFFER, bufferView.buffer);
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

            // indices ( assume use indices )
            accessor = glTF.accessors[ primitive.indices ];
            bufferView = accessor.bufferView;
            if (bufferView.target === null) {
                // bufferView.target = gl.ARRAY_BUFFER;
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

    var translate = vec3.create();
    
    var scale = vec3.create();
    
    var r = 0.0;
    var rotationSpeedY= 0.01;

    var perspective = mat4.create();
    //mat4.perspective(perspective, 0.785, 1, 1, 1000);
    mat4.perspective(perspective, 0.785, window.innerWidth/window.innerHeight, 1, 1000);

    var modelView = mat4.create();

    var localMV = mat4.create();
    var localMVP = mat4.create();
    var localMVNormal = mat4.create();

    var nodeMatrix = new Array(glTF.nodes.length);
    for(i = 0, len = nodeMatrix.length; i < len; i++) {
        nodeMatrix[i] = mat4.create();
    }

    var defaultColor = [1.0, 1.0, 1.0, 1.0];
    function drawPrimitive(primitive, matrix) {
        mat4.multiply(localMV, modelView, matrix);
        mat4.multiply(localMVP, perspective, localMV);

        mat4.invert(localMVNormal, localMV);
        mat4.transpose(localMVNormal, localMVNormal);

        gl.uniformMatrix4fv(uniformMvpLocation, false, localMVP);
        gl.uniformMatrix4fv(uniformMvNormalLocation, false, localMVNormal);

        var baseColor = defaultColor;
        if (primitive.material) {
            if (primitive.material.pbrMetallicRoughness !== undefined) {
                if ( primitive.material.pbrMetallicRoughness.baseColorFactor ) {
                    baseColor = primitive.material.pbrMetallicRoughness.baseColorFactor;
                }
            }
        }

        gl.uniform4fv(uniformBaseColorFactorLocation, baseColor);

        gl.bindVertexArray(primitive.vertexArray);

        // TODO: when no indices, do drawArrays
        gl.drawElements(primitive.mode, primitive.indicesLength, primitive.indicesComponentType, primitive.indicesOffset);
        // gl.drawElements(primitive.mode, 3, primitive.indicesComponentType, primitive.indicesOffset);

        gl.bindVertexArray(null);

    }

    // function drawMesh(mesh, matrix) {
    // }
    
    function drawNode(node, nodeID, parentModelMatrix) {
        var matrix = nodeMatrix[nodeID];
        
        if (parentModelMatrix !== undefined) {
            mat4.mul(matrix, parentModelMatrix, node.matrix);
        } else {
            // from scene root, parent is identity
            mat4.copy(matrix, node.matrix);
        }

        var i, len;

        // draw cur node's mesh
        if (node.mesh !== null) {
            // drawMesh(glTF.meshes[node.mesh], matrix);
            var mesh = glTF.meshes[node.mesh];
            for (i = 0, len = mesh.primitives.length; i < len; i++) {
                // draw primitive
                drawPrimitive(mesh.primitives[i], matrix);
            }
        }
        

        // draw children
        
        var childNodeID;
        for (i = 0, len = node.children.length; i < len; i++) {
            childNodeID = node.children[i];
            drawNode(glTF.nodes[childNodeID], childNodeID, matrix);
        }
    }



    // -- Render loop
    (function render() {
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);

        vec3.set(translate, 0, 0, t);
        vec3.set(scale, s, s, s);
        mat4.identity(modelView);
        mat4.translate(modelView, modelView, translate);
        mat4.scale(modelView, modelView, scale);

        r += rotationSpeedY;
        mat4.rotateY(modelView, modelView, r);


        gl.useProgram(program);
        
        for (i = 0, lenNodes = curScene.nodes.length; i < lenNodes; i++) {
            drawNode( glTF.nodes[curScene.nodes[i]], curScene.nodes[i] );
        }

        requestAnimationFrame(render);
    })();
});
