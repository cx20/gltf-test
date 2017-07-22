var MinimalGLTFLoader = MinimalGLTFLoader || {};
(function() {
    'use strict';

    // Data classes
    var Scene = MinimalGLTFLoader.Scene = function () {
        this.nodes = [];    // root node id of this scene, reference to glTFModel.nodes
        this.meshes = [];   // mesh id number, reference to glTFModel.meshes
    };

    // Node
    var Node = MinimalGLTFLoader.Node = function () {
        this.matrix = mat4.create();
        this.children = [];  // nodes
        // this.meshIDs = [];
        this.mesh = null;
    };

    var Mesh = MinimalGLTFLoader.Mesh = function () {
        this.meshID = -1;     // mesh id name in glTF json meshes
        this.primitives = [];
    };

    var Primitive = MinimalGLTFLoader.Primitive = function () {
        this.mode = 4; // default: gl.TRIANGLES

        this.indicesData = null;
        this.indicesComponentType = 5123;   // default: gl.UNSIGNED_SHORT

        // !!: assume vertex buffer is interleaved
        // see discussion https://github.com/KhronosGroup/glTF/issues/21
        // !!: not any more in glTF 2 ??
        this.verticesData = null;


        // attribute info (stride, offset, etc)
        this.attributes = {};

        // cur glTF spec supports only one material per primitive
        this.material = null;
        this.technique = null;


        this.vertexArray = null;

        // // Program gl buffer name 
        // // ?? reconsider if it's suitable to put it here
        // this.indicesWebGLBufferName = null;
        // this.vertexWebGLBufferName = null;

    };


    /**
     * 
     */
    var glTFModel = MinimalGLTFLoader.glTFModel = function (gltf) {
        this.json = gltf;
        this.defaultScene = gltf.scene;

        this.version = Number(gltf.asset.version);

        if (gltf.scenes) {
            this.scenes = new Array(gltf.scenes.length);   // store Scene object
        }

        if (gltf.nodes) {
            this.nodes = new Array(gltf.nodes.length);    // store Node object
        }

        if (gltf.meshes) {
            this.meshes = new Array(gltf.meshes.length);    // store mesh object
        }

        this.shaders = {};      //glTF 1.0, deprecated in 2.0 core
        this.programs = {};     //glTF 1.0, deprecated in 2.0 core

        if (gltf.images) {
            this.images = new Array(gltf.images.length);
        }

    };



    var gl;

    var glTFLoader = MinimalGLTFLoader.glTFLoader = function (glContext) {
        gl = glContext;
        this._init();
        this.glTF = null;
    };

    glTFLoader.prototype._init = function() {
        this._parseDone = false;
        this._loadDone = false;

        this._bufferRequested = 0;
        this._bufferLoaded = 0;
        this._buffers = {};
        this._bufferTasks = {};

        // ?? Move to glTFModel to avoid collected by GC ?? 
        this._bufferViews = {};

        this._shaderRequested = 0;
        this._shaderLoaded = 0;

        this._imageRequested = 0;
        this._imageLoaded = 0;

        this._pendingTasks = 0;
        this._finishedPendingTasks = 0;

        this.onload = null;

    };


    glTFLoader.prototype._getBufferViewData = function(json, bufferViewID, callback) {
        var bufferViewData = this._bufferViews[bufferViewID];
        if(!bufferViewData) {
            // load bufferView for the first time
            var bufferView = json.bufferViews[bufferViewID];
            var bufferData = this._buffers[bufferView.buffer];
            if (bufferData) {
                // buffer already loaded
                //console.log("dependent buffer ready, create bufferView" + bufferViewID);
                this._bufferViews[bufferViewID] = bufferData.slice(bufferView.byteOffset, bufferView.byteOffset + bufferView.byteLength);
                callback(bufferViewData);
            } else {
                // buffer not yet loaded
                // add pending task to _bufferTasks
                //console.log("pending Task: wait for buffer to load bufferView " + bufferViewID);
                this._pendingTasks++;
                var bufferTask = this._bufferTasks[bufferView.buffer];
                if (!bufferTask) {
                    this._bufferTasks[bufferView.buffer] = [];
                    bufferTask = this._bufferTasks[bufferView.buffer];
                }
                var loader = this;
                bufferTask.push(function(newBufferData) {
                    // share same bufferView
                    // hierarchy needs to be post processed in the renderer
                    var curBufferViewData = loader._bufferViews[bufferViewID];
                    if (!curBufferViewData) {
                        console.log('create new BufferView Data for ' + bufferViewID);
                        curBufferViewData = loader._bufferViews[bufferViewID] = newBufferData.slice(bufferView.byteOffset, bufferView.byteOffset + bufferView.byteLength);
                    }
                    loader._finishedPendingTasks++;
                    callback(curBufferViewData);

                    // // create new bufferView for each mesh access with a different hierarchy
                    // // hierarchy transformation will be prepared in this way
                    // console.log('create new BufferView Data for ' + bufferViewID);
                    // loader._bufferViews[bufferViewID] = newBufferData.slice(bufferView.byteOffset, bufferView.byteOffset + bufferView.byteLength);
                    // loader._finishedPendingTasks++;
                    // callback(loader._bufferViews[bufferViewID]);
                });
            }

        } else {
            // no need to load buffer from file
            // use cached ones
            //console.log("use cached bufferView " + bufferViewID);
            callback(bufferViewData);
        }
    };
    
    // glTFLoader.prototype._doNextLoadTaskInList = function () {
    // };

    glTFLoader.prototype._checkComplete = function () {
        if (this._bufferRequested == this._bufferLoaded && 
            this._shaderRequested == this._shaderLoaded && 
            this._imageRequested == this._imageLoaded 
            // && other resources finish loading
            ) {
            this._loadDone = true;
        }

        if (this._loadDone && this._parseDone && this._pendingTasks == this._finishedPendingTasks) {
            this.onload(this.glTF);
        }
    };


    glTFLoader.prototype._parseGLTF = function (json) {

        // Iterate through every scene
        if (json.scenes) {
            // for (var sceneID in json.scenes) {
            for (var sceneID = 0, len = json.scenes.length; sceneID < len; sceneID ++) {
                var newScene = new Scene();
                this.glTF.scenes[sceneID] = newScene;

                var scene = json.scenes[sceneID];
                var nodes = scene.nodes;
                var nodeLen = nodes.length;

                // Iterate through every node within scene
                for (var n = 0; n < nodeLen; ++n) {
                    var nodeID = nodes[n];

                    // Traverse node
                    this._parseNode(json, nodeID, newScene.nodes);
                }
            }
        }

        this._parseDone = true;
        this._checkComplete();
    };


    glTFLoader.prototype._parseMesh = function(json, meshID) {
        if (this.glTF.meshes[meshID] !== undefined) {
            // mesh is already loaded
            return;
        }

        var newMesh = new Mesh();
        this.glTF.meshes[meshID] = newMesh;

        var mesh = json.meshes[meshID];

        // newMesh.meshID = meshID;

        // Iterate through primitives
        var primitives = mesh.primitives;
        var primitiveLen = primitives.length;

        for (var p = 0; p < primitiveLen; ++p) {
            var newPrimitive = new Primitive();
            newMesh.primitives.push(newPrimitive);

            var primitive = primitives[p];
            
            if (primitive.indices != undefined) {
                this._parseIndices(json, primitive, newPrimitive);
            }
            
            this._parseAttributes(json, primitive, newPrimitive);

            // required
            newPrimitive.material = json.materials[primitive.material];
            
            if (newPrimitive.material.technique) {
                newPrimitive.technique = json.techniques[newPrimitive.material.technique];
            } else {
                // TODO: use default technique in glTF spec Appendix A
            }
                
        }
    };






    var translationVec3 = vec3.create();
    var rotationQuat = quat.create();
    var scaleVec3 = vec3.create();
    var TRSMatrix = mat4.create();
    
    glTFLoader.prototype._parseNode = function(json, nodeID, parentNodeIdsArray) {
        if (this.glTF.nodes[nodeID] !== undefined) {
            // node is already loaded
            return;
        }

        var node = json.nodes[nodeID];
        var newNode = new Node();
        this.glTF.nodes[nodeID] = newNode;

        parentNodeIdsArray.push(nodeID);

        // var curMatrix = mat4.create();
        var curMatrix = newNode.matrix;
        
        if (node.hasOwnProperty('matrix')) {
            // matrix
            for(var i = 0; i < 16; ++i) {
                curMatrix[i] = node.matrix[i];
            }
            // mat4.multiply(curMatrix, matrix, curMatrix);
        } else {
            // translation, rotation, scale (TRS)
            // TODO: these labels are optional
            if (node.translation) {
                vec3.set(translationVec3, node.translation[0], node.translation[1], node.translation[2]);
            } else {
                vec3.set(translationVec3, 0, 0, 0);
            }
            
            if (node.rotation) {
                quat.set(rotationQuat, node.rotation[0], node.rotation[1], node.rotation[2], node.rotation[3]);
            } else {
                quat.set(rotationQuat, 0, 0, 0, 1);
            }

            if (node.scale) {
                vec3.set(scaleVec3, node.scale[0], node.scale[1], node.scale[2]);
            } else {
                vec3.set(scaleVec3, 1, 1, 1);
            }
            
            mat4.fromRotationTranslation(TRSMatrix, rotationQuat, translationVec3);
            mat4.scale(curMatrix, TRSMatrix, scaleVec3);
            // mat4.multiply(curMatrix, matrix, curMatrix);
            
        }

        // store node matrix
        // this.glTF.nodeMatrix[nodeID] = curMatrix;


            
        
        // if(node.meshes) {
        //     // Iterate through every mesh within node 
        //     newNode.meshes = node.meshes;
        //     var meshes = node.meshes;
        //     var meshLen = meshes.length;
        //     for (var m = 0; m < meshLen; ++m) {
        //         this._parseMesh(json, meshes[m]);
        //     }
        // } 
        // else if (node.mesh !== undefined) {
        if (node.mesh !== undefined) {
            // !! each node contains only one mesh in glTF2
            // only this branch is valid in glTF2

            // newNode.meshes.push(node.mesh);
            newNode.mesh = node.mesh;
            this._parseMesh(json, node.mesh);
        }


        // Go through all the children recursively
        var children = node.children;
        if (children) {
            var childreLen = children.length;
            for (var c = 0; c < childreLen; ++c) {
                var childNodeID = children[c];
                this._parseNode(json, childNodeID, newNode.children);
            }
        }
        

    };


    glTFLoader.prototype._parseIndices = function(json, primitive, newPrimitive) {

        var accessorName = primitive.indices;
        var accessor = json.accessors[accessorName];

        newPrimitive.mode = primitive.mode || 4;
        newPrimitive.indicesComponentType = accessor.componentType;

        var loader = this;
        this._getBufferViewData(json, accessor.bufferView, function(bufferViewData) {
            newPrimitive.indicesData = _getAccessorData(bufferViewData, accessor);
            loader._checkComplete();
        });
    };




    //var tmpVec4 = vec4.create();
    //var inverseTransposeMatrix = mat4.create();

    glTFLoader.prototype._parseAttributes = function(json, primitive, newPrimitive) {
        // !! Assume interleaved vertex attributes
        // i.e., all attributes share one bufferView


        // vertex buffer processing
        var firstSemantic = Object.keys(primitive.attributes)[0];
        var firstAccessor = json.accessors[primitive.attributes[firstSemantic]];
        var vertexBufferViewID = firstAccessor.bufferView;
        var bufferView = json.bufferViews[vertexBufferViewID];

        var loader = this;

        this._getBufferViewData(json, vertexBufferViewID, function(bufferViewData) {
            var data = newPrimitive.verticesData = _arrayBuffer2TypedArray(
                    bufferViewData, 
                    0, 
                    bufferView.byteLength / ComponentType2ByteSize[firstAccessor.componentType],
                    firstAccessor.componentType
                    );
            
            for (var attributeName in primitive.attributes) {
                var accessorName = primitive.attributes[attributeName];
                var accessor = json.accessors[accessorName];
                
                var componentTypeByteSize = ComponentType2ByteSize[accessor.componentType];
                
                // !! TODO: if no bytestride, then it is separate buffer, not interleaved
                var stride = (accessor.byteStride !== undefined) ? accessor.byteStride / componentTypeByteSize : 0;
                var offset = accessor.byteOffset / componentTypeByteSize;
                var count  = accessor.count;

                // // Matrix transformation
                // if (attributeName === 'POSITION') {
                //     for (var i = 0; i < count; ++i) {
                //         // TODO: add vec2 and other(needed?) support 
                //         vec4.set(tmpVec4, data[stride * i + offset]
                //                         , data[stride * i + offset + 1]
                //                         , data[stride * i + offset + 2]
                //                         , 1);
                //         vec4.transformMat4(tmpVec4, tmpVec4, matrix);
                //         vec4.scale(tmpVec4, tmpVec4, 1 / tmpVec4[3]);
                //         data[stride * i + offset] = tmpVec4[0];
                //         data[stride * i + offset + 1] = tmpVec4[1];
                //         data[stride * i + offset + 2] = tmpVec4[2];
                //     }
                // } 
                // else if (attributeName === 'NORMAL') {
                //     mat4.invert(inverseTransposeMatrix, matrix);
                //     mat4.transpose(inverseTransposeMatrix, inverseTransposeMatrix);                    

                //     for (var i = 0; i < count; ++i) {
                //         // @todo: add vec2 and other(needed?) support
                //         vec4.set(tmpVec4, data[stride * i + offset]
                //                         , data[stride * i + offset + 1]
                //                         , data[stride * i + offset + 2]
                //                         , 0);
                //         vec4.transformMat4(tmpVec4, tmpVec4, inverseTransposeMatrix);
                //         vec4.normalize(tmpVec4, tmpVec4);
                //         data[stride * i + offset] = tmpVec4[0];
                //         data[stride * i + offset + 1] = tmpVec4[1];
                //         data[stride * i + offset + 2] = tmpVec4[2];
                //     }
                // }


                // local transform matrix

                // mat4.copy(newPrimitive.matrix, matrix);
                
                

                // for vertexAttribPointer
                newPrimitive.attributes[attributeName] = {
                    //GLuint program location,
                    size: Type2NumOfComponent[accessor.type],
                    type: accessor.componentType,
                    //GLboolean normalized
                    stride: accessor.byteStride,
                    offset: accessor.byteOffset
                };

            }

            loader._checkComplete();
        });

    };

    /**
     * load a glTF model
     * 
     * @param {String} uri uri of the .glTF file. Other resources (bins, images) are assumed to be in the same base path
     * @param {Function} callback the onload callback function
     */
    glTFLoader.prototype.loadGLTF = function (uri, callback) {

        this._init();

        this.onload = callback || function(glTF) {
            console.log('glTF model loaded.');
            console.log(glTF);
        };

        
        

        this.baseUri = _getBaseUri(uri);

        var loader = this;

        _loadJSON(uri, function (response) {
            // Parse JSON string into object
            var json = JSON.parse(response);

            loader.glTF = new glTFModel(json);

            var bid;

            var loadArrayBufferCallback = function (resource) {
                
                loader._buffers[bid] = resource;
                loader._bufferLoaded++;
                if (loader._bufferTasks[bid]) {
                    var i,len;
                    for (i = 0, len = loader._bufferTasks[bid].length; i < len; ++i) {
                        (loader._bufferTasks[bid][i])(resource);
                    }
                }
                loader._checkComplete();

            };

            // Launch loading resources task: buffers, etc.
            if (json.buffers) {
                for (bid in json.buffers) {

                    loader._bufferRequested++;

                    _loadArrayBuffer(loader.baseUri + json.buffers[bid].uri, loadArrayBufferCallback);

                }
            }

            // load images
            

            var loadImageCallback = function (img, iid) {
                loader._imageLoaded++;
                loader.glTF.images[iid] = img;
                loader._checkComplete();
            };

            var iid;

            if (json.images) {
                for (iid in json.images) {
                    loader._imageRequested++;
                    _loadImage(loader.baseUri + json.images[iid].uri, iid, loadImageCallback);
                }
            }


            // load shaders
            var pid;
            var newProgram;

            var loadVertexShaderFileCallback = function (resource) {
                loader._shaderLoaded++;
                newProgram.vertexShader = resource;
                if (newProgram.fragmentShader) {
                    // create Program
                    newProgram.program = _createProgram(gl, newProgram.vertexShader, newProgram.fragmentShader);
                    loader._checkComplete();
                }
            };
            var loadFragmentShaderFileCallback = function (resource) {
                loader._shaderLoaded++;
                newProgram.fragmentShader = resource;
                if (newProgram.vertexShader) {
                    // create Program
                    newProgram.program = _createProgram(gl, newProgram.vertexShader, newProgram.fragmentShader);
                    loader._checkComplete();
                }
            };

            if (json.programs) {
                for (pid in json.programs) {
                    newProgram = loader.glTF.programs[pid] = {
                        vertexShader: null,
                        fragmentShader: null,
                        program: null
                    };
                    var program = json.programs[pid];
                    loader._shaderRequested += 2;

                    _loadShaderFile(loader.baseUri + json.shaders[program.vertexShader].uri, loadVertexShaderFileCallback);
                    _loadShaderFile(loader.baseUri + json.shaders[program.fragmentShader].uri, loadFragmentShaderFileCallback);
                }
            }




            // start glTF scene parsing
            loader._parseGLTF(json);
        });
    };



   
    // TODO: get from gl context
    var ComponentType2ByteSize = {
        5120: 1, // BYTE
        5121: 1, // UNSIGNED_BYTE
        5122: 2, // SHORT
        5123: 2, // UNSIGNED_SHORT
        5126: 4  // FLOAT
    };

    var Type2NumOfComponent = {
        'SCALAR': 1,
        'VEC2': 2,
        'VEC3': 3,
        'VEC4': 4,
        'MAT2': 4,
        'MAT3': 9,
        'MAT4': 16
    };

    MinimalGLTFLoader.Attributes = [
        'POSITION',
        'NORMAL', 
        'TEXCOORD', 
        'COLOR', 
        'JOINT', 
        'WEIGHT'
    ];

    // MinimalGLTFLoader.UniformFunctionsBind = {
    //     35676: gl.uniformMatrix4fv      // FLOAT_MAT4 
    // };


    // ------ Scope limited private util functions---------------

    function _arrayBuffer2TypedArray(resource, byteOffset, countOfComponentType, componentType) {
        switch(componentType) {
            // @todo: finish
            case 5122: return new Int16Array(resource, byteOffset, countOfComponentType);
            case 5123: return new Uint16Array(resource, byteOffset, countOfComponentType);
            case 5124: return new Int32Array(resource, byteOffset, countOfComponentType);
            case 5125: return new Uint32Array(resource, byteOffset, countOfComponentType);
            case 5126: return new Float32Array(resource, byteOffset, countOfComponentType);
            default: return null; 
        }
    }

    function _getAccessorData(bufferViewData, accessor) {
        return _arrayBuffer2TypedArray(
            bufferViewData, 
            accessor.byteOffset, 
            accessor.count * Type2NumOfComponent[accessor.type],
            accessor.componentType
            );
    }

    function _getBaseUri(uri) {
        
        // https://github.com/AnalyticalGraphicsInc/cesium/blob/master/Source/Core/getBaseUri.js
        
        var basePath = '';
        var i = uri.lastIndexOf('/');
        if(i !== -1) {
            basePath = uri.substring(0, i + 1);
        }
        
        return basePath;
    }

    function _loadJSON(src, callback) {

        // native json loading technique from @KryptoniteDove:
        // http://codepen.io/KryptoniteDove/post/load-json-file-locally-using-pure-javascript

        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', src, true);
        xobj.onreadystatechange = function () {
            if (xobj.readyState == 4 && // Request finished, response ready
                xobj.status == "200") { // Status OK
                callback(xobj.responseText, this);
            }
        };
        xobj.send(null);
    }

    function _loadArrayBuffer(url, callback) {
        var xobj = new XMLHttpRequest();
        xobj.responseType = 'arraybuffer';
        xobj.open('GET', url, true);
        xobj.onreadystatechange = function () {
            if (xobj.readyState == 4 && // Request finished, response ready
                xobj.status == "200") { // Status OK
                var arrayBuffer = xobj.response;
                if (arrayBuffer && callback) {
                    callback(arrayBuffer);
                }
            }
        };
        xobj.send(null);
    }

    function _loadShaderFile(url, callback) {
        var xobj = new XMLHttpRequest();
        xobj.responseType = 'text';
        xobj.open('GET', url, true);
        xobj.onreadystatechange = function () {
            if (xobj.readyState == 4 && // Request finished, response ready
                xobj.status == "200") { // Status OK
                var file = xobj.response;
                if (file && callback) {
                    callback(file);
                }
            }
        };
        xobj.send(null);
    }

    function _loadImage(url, iid, onload) {
        var img = new Image();
        img.src = url;
        img.onload = function() {
            onload(img, iid);
        };
    }


    function _createShader(gl, source, type) {
        var shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        return shader;
    }

    function _createProgram(gl, vertexShaderSource, fragmentShaderSource) {
        var program = gl.createProgram();
        var vshader = _createShader(gl, vertexShaderSource, gl.VERTEX_SHADER);
        var fshader = _createShader(gl, fragmentShaderSource, gl.FRAGMENT_SHADER);
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
    }

})();