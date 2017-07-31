var MinimalGLTFLoader = MinimalGLTFLoader || {};
(function() {
    'use strict';

    // Data classes
    var Scene = MinimalGLTFLoader.Scene = function () {
        this.nodes = [];    // root node id of this scene, reference to glTFModel.nodes

        this.boundingBox = null;
    };

    /**
     * 
     * @param {vec3} min
     * @param {vec3} max
     */
    var BoundingBox = MinimalGLTFLoader.BoundingBox = function (min, max) {
        this.min = min;
        this.max = max;

        this.transform = mat4.create();
    };

    BoundingBox.prototype.updateBoundingBox = function (bbox) {
        vec3.min(this.min, this.min, bbox.min);
        vec3.max(this.max, this.max, bbox.max);
    }

    BoundingBox.prototype.calculateTransform = function () {
        this.transform[0] = this.max[0] - this.min[0];
        this.transform[5] = this.max[1] - this.min[1];
        this.transform[10] = this.max[2] - this.min[2];
        this.transform[12] = this.min[0];
        this.transform[13] = this.min[1];
        this.transform[14] = this.min[2];
    }




    var Accessor = MinimalGLTFLoader.Accessor = function (a, bufferViewObject) {
        this.bufferView = bufferViewObject;
        this.componentType = a.componentType;   // required
        this.byteOffset = a.byteOffset !== undefined ? a.byteOffset : 0;
        this.byteStride = bufferViewObject.byteStride;
        this.normalized = a.normalized !== undefined ? a.normalized : false;
        this.count = a.count;   // required
        this.type = a.type;     // required
        this.size = Type2NumOfComponent[this.type];

        this.min = a.min;
        this.max = a.max;
    };

    var BufferView = MinimalGLTFLoader.BufferView = function(bf, bufferData) {
        this.byteLength = bf.byteLength;    //required
        this.byteOffset = bf.byteOffset !== undefined ? bf.byteOffset : 0;
        this.byteStride = bf.byteStride !== undefined ? bf.byteStride : 0;
        this.target = bf.target !== undefined ? bf.target : null;

        this.data = bufferData.slice(this.byteOffset, this.byteOffset + this.byteLength);

        this.buffer = null;     // gl buffer
    };

    BufferView.prototype.createBuffer = function(gl) {
        this.buffer = gl.createBuffer();
    };

    BufferView.prototype.bindData = function(gl) {
        if (this.target) {
            gl.bindBuffer(this.target, this.buffer);
            gl.bufferData(this.target, this.data, gl.STATIC_DRAW);
            gl.bindBuffer(this.target, null);
            return true;
        }
        return false;
    };



    var Node = MinimalGLTFLoader.Node = function (nodeID) {
        this.nodeID = nodeID;
        this.matrix = mat4.create();
        this.children = [];  // node object
        // this.meshIDs = [];
        this.mesh = null;   // mesh object


        // this.scenes = [];
    };

    Node.prototype.traverse = function(parent, executeFunc) {
        executeFunc(this, parent);
        for (var i = 0, len = this.children.length; i < len; i++) {
            this.children[i].traverse(this, executeFunc);
        }
    }



    var Mesh = MinimalGLTFLoader.Mesh = function () {
        this.meshID = -1;     // mesh id name in glTF json meshes
        this.primitives = [];

        this.boundingBox = null;
    };

    var Primitive = MinimalGLTFLoader.Primitive = function (json, p) {
        // <attribute name, accessor id>, required
        // get hook up with accessor object in _postprocessing
        this.attributes = p.attributes;
        this.indices = p.indices !== undefined ? p.indices : null;  // accessor id


        // temp
        this.indicesComponentType = json.accessors[this.indices].componentType;
        this.indicesLength = json.accessors[this.indices].count;
        this.indicesOffset = (json.accessors[this.indices].byteOffset || 0);

        // temp
        this.material = p.material !== undefined ? json.materials[p.material] : null;

        this.mode = p.mode !== undefined ? p.mode : 4; // default: gl.TRIANGLES

        

        // morph related
        this.targets = p.targets;


        // gl run time related
        this.vertexArray = null;    //vao
        
        this.vertexBuffer = null;
        this.indexBuffer = null;


        this.boundingBox = null;
    };


    var Texture = MinimalGLTFLoader.Texture = function (t) {
        this.sampler = t.sampler !== undefined ? t.sampler : null;  // id for now, hook to object later
        this.source = t.source !== undefined ? t.source : null; // id for now, hook to object later

        this.texture = null;
    };

    Texture.prototype.createTexture = function(i, gl) {
        gl.activeTexture(gl.TEXTURE0 + i);
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
            this.source
        );
        gl.generateMipmap(gl.TEXTURE_2D);
        gl.bindTexture(gl.TEXTURE_2D, null);
    };

    var Sampler = MinimalGLTFLoader.Sampler = function (s) {
        this.magFilter = s.magFilter !== undefined ? s.magFilter : null;
        this.minFilter = s.minFilter !== undefined ? s.minFilter : null;
        this.wrapS = s.wrapS !== undefined ? s.wrapS : 10497;
        this.wrapT = s.wrapT !== undefined ? s.wrapT : 10497;

        this.sampler = null;
    };

    Sampler.prototype.createSampler = function(gl) {
        this.sampler = gl.createSampler();
        if (this.minFilter) {
            gl.samplerParameteri(this.sampler, gl.TEXTURE_MIN_FILTER, this.minFilter);
        } else {
            gl.samplerParameteri(this.sampler, gl.TEXTURE_MIN_FILTER, gl.NEAREST_MIPMAP_LINEAR);
        }
        if (this.magFilter) {
            gl.samplerParameteri(this.sampler, gl.TEXTURE_MAG_FILTER, this.magFilter);
        } else {
            gl.samplerParameteri(this.sampler, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        }
        gl.samplerParameteri(this.sampler, gl.TEXTURE_WRAP_S, this.wrapS);
        gl.samplerParameteri(this.sampler, gl.TEXTURE_WRAP_T, this.wrapT);
    };

    // Sampler.prototype.bindSampler = function(i, gl) {
    //     gl.bindSampler(i, this.sampler);
    // }

    var Material = MinimalGLTFLoader.Material = function (m) {

    };

    /**
     * 
     */
    var glTFModel = MinimalGLTFLoader.glTFModel = function (gltf) {
        this.json = gltf;
        this.defaultScene = gltf.scene;

        this.version = Number(gltf.asset.version);

        if (gltf.accessors) {
            this.accessors = new Array(gltf.accessors.length);
        }

        if (gltf.bufferViews) {
            this.bufferViews = new Array(gltf.bufferViews.length);
        }

        if (gltf.scenes) {
            this.scenes = new Array(gltf.scenes.length);   // store Scene object
        }

        if (gltf.nodes) {
            this.nodes = new Array(gltf.nodes.length);    // store Node object
        }

        if (gltf.meshes) {
            this.meshes = new Array(gltf.meshes.length);    // store mesh object
        }

        // this.shaders = {};      //glTF 1.0, deprecated in 2.0 core
        // this.programs = {};     //glTF 1.0, deprecated in 2.0 core

        if (gltf.textures) {
            this.textures = new Array(gltf.textures.length);
        }

        if (gltf.samplers) {
            this.samplers = new Array(gltf.samplers.length);
        }

        if (gltf.images) {
            this.images = new Array(gltf.images.length);
        }

    };



    var gl;

    var glTFLoader = MinimalGLTFLoader.glTFLoader = function (glContext) {
        gl = glContext !== undefined ? glContext : null;
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



        this._shaderRequested = 0;
        this._shaderLoaded = 0;

        this._imageRequested = 0;
        this._imageLoaded = 0;

        this._pendingTasks = 0;
        this._finishedPendingTasks = 0;

        this.onload = null;

    };


    glTFLoader.prototype._getBufferViewData = function(json, bufferViewID, callback) {
        // var bufferViewData = this._bufferViews[bufferViewID];
        var bufferViewObject = this.glTF.bufferViews[bufferViewID];
        if(bufferViewObject === undefined) {
            // load bufferView for the first time

            var bufferView = json.bufferViews[bufferViewID];
            var bufferData = this._buffers[bufferView.buffer];
            if (bufferData) {
                // buffer already loaded
                console.log('dependent buffer data ready (instant), create bufferView ' + bufferViewID);
                this.glTF.bufferViews[bufferViewID] = bufferViewObject = new BufferView( bufferView, bufferData );
                callback(bufferViewObject);
                this._checkComplete();
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
                    
                    loader._finishedPendingTasks++;

                    bufferViewObject = loader.glTF.bufferViews[bufferViewID];
                    if (bufferViewObject === undefined) {
                        console.log('create new BufferView Data for ' + bufferViewID);
                        bufferViewObject = loader.glTF.bufferViews[bufferViewID] = new BufferView( bufferView, newBufferData );
                    } else {
                        console.log('dependent buffer data ready (queued), create bufferView ' + bufferViewID);
                    }
                    
                    callback(bufferViewObject);
                    // loader._checkComplete();

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
            console.log("use cached bufferView " + bufferViewID);
            callback(bufferViewObject);
        }
    };
    
    // glTFLoader.prototype._doNextLoadTaskInList = function () {
    // };

    glTFLoader.prototype._checkComplete = function () {
        if (this._bufferRequested == this._bufferLoaded && 
            // this._shaderRequested == this._shaderLoaded && 
            this._imageRequested == this._imageLoaded 
            // && other resources finish loading
            ) {
            this._loadDone = true;
        }

        if (this._loadDone && this._parseDone && this._pendingTasks == this._finishedPendingTasks) {

            this._postprocess();

            this.onload(this.glTF);
        }
    };


    glTFLoader.prototype._parseGLTF = function (json) {
        var i, len;
        var a;  // acccessor json

        // var callbackAccessor = (function(bufferView) {
        //     this.glTF.accessors[i] = new Accessor(a, bufferView);
        // }).bind(this);
        var loader = this;

        // load all accessors (and their dependent bufferView)
        if (json.accessors) {
            for (i = 0, len = json.accessors.length; i < len; i++) {
                a = json.accessors[i];
                if (a.bufferView !== undefined) {
                    // this._getBufferViewData(json, a.bufferView, callbackAccessor);
                    this._getBufferViewData(json, a.bufferView, 
                        (function(){
                            var accessor = json.accessors[i];
                            var ii = i;
                            return function(bufferView) {
                                
                                loader.glTF.accessors[ii] = new Accessor(accessor, bufferView);
                            };
                        })()
                    );
                }
            }
        }

        // load all textures
        if (json.textures) {
            for (i = 0, len = json.textures.length; i < len; i++) {
                this.glTF.textures[i] = new Texture(json.textures[i]);
            }
        }

        // load all samplers 
        if (json.samplers) {
            for (i = 0, len = json.samplers.length; i < len; i++) {
                this.glTF.samplers[i] = new Sampler(json.samplers[i]);
            } 
        }


        // Iterate through every scene
        if (json.scenes) {
            // for (var sceneID in json.scenes) {
            for (var sceneID = 0, lenS = json.scenes.length; sceneID < lenS; sceneID ++) {
                var newScene = new Scene();
                this.glTF.scenes[sceneID] = newScene;

                var scene = json.scenes[sceneID];
                var nodes = scene.nodes;
                var nodeLen = nodes.length;

                // Iterate through every node within scene
                for (var n = 0; n < nodeLen; ++n) {
                    var nodeID = nodes[n];

                    // Traverse node
                    newScene.nodes[n] = this._parseNode(json, nodeID);
                }
            }
        }

        this._parseDone = true;
        this._checkComplete();
    };


    glTFLoader.prototype._parseMesh = function(json, meshID) {
        if (this.glTF.meshes[meshID] !== undefined) {
            // mesh is already loaded
            return this.glTF.meshes[meshID];
        }

        var newMesh = new Mesh();
        this.glTF.meshes[meshID] = newMesh;

        var mesh = json.meshes[meshID];

        // newMesh.meshID = meshID;

        // Iterate through primitives
        var primitives = mesh.primitives;
        var primitiveLen = primitives.length;
        var primitive;  // primitive json

        for (var p = 0; p < primitiveLen; ++p) {
            primitive = primitives[p];
            newMesh.primitives.push(new Primitive(json, primitive));
        }

        return newMesh;
    };






    var translationVec3 = vec3.create();
    var rotationQuat = quat.create();
    var scaleVec3 = vec3.create();
    var TRSMatrix = mat4.create();
    
    glTFLoader.prototype._parseNode = function(json, nodeID) {
        if (this.glTF.nodes[nodeID] !== undefined) {
            // node is already loaded
            return this.glTF.nodes[nodeID];
        }

        var node = json.nodes[nodeID];
        var newNode = new Node(nodeID);
        this.glTF.nodes[nodeID] = newNode;

        // parentNodeIdsArray.push(nodeID);


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
            // newNode.mesh = node.mesh;
            newNode.mesh = this._parseMesh(json, node.mesh);
        }


        // Go through all the children recursively
        var children = node.children;
        if (children) {
            var childreLen = children.length;
            for (var c = 0; c < childreLen; ++c) {
                var childNodeID = children[c];
                newNode.children[c] = this._parseNode(json, childNodeID);
            }
        }
        
        return newNode;
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


            // // load shaders
            // var pid;
            // var newProgram;

            // var loadVertexShaderFileCallback = function (resource) {
            //     loader._shaderLoaded++;
            //     newProgram.vertexShader = resource;
            //     if (newProgram.fragmentShader) {
            //         // create Program
            //         newProgram.program = _createProgram(gl, newProgram.vertexShader, newProgram.fragmentShader);
            //         loader._checkComplete();
            //     }
            // };
            // var loadFragmentShaderFileCallback = function (resource) {
            //     loader._shaderLoaded++;
            //     newProgram.fragmentShader = resource;
            //     if (newProgram.vertexShader) {
            //         // create Program
            //         newProgram.program = _createProgram(gl, newProgram.vertexShader, newProgram.fragmentShader);
            //         loader._checkComplete();
            //     }
            // };

            // if (json.programs) {
            //     for (pid in json.programs) {
            //         newProgram = loader.glTF.programs[pid] = {
            //             vertexShader: null,
            //             fragmentShader: null,
            //             program: null
            //         };
            //         var program = json.programs[pid];
            //         loader._shaderRequested += 2;

            //         _loadShaderFile(loader.baseUri + json.shaders[program.vertexShader].uri, loadVertexShaderFileCallback);
            //         _loadShaderFile(loader.baseUri + json.shaders[program.fragmentShader].uri, loadFragmentShaderFileCallback);
            //     }
            // }




            // start glTF scene parsing
            loader._parseGLTF(json);
        });
    };


    glTFLoader.prototype._postprocess = function () {
        console.log('finish loading all assets, do a second pass postprocess');

        
        // @todo: ?? hook up pointers, get scene bounding box, etc.
        var i, leni, j, lenj;

        var scene;
        var node;
        var mesh, primitive, accessor;

        // for (i = 0, leni = this.glTF.nodes.length; i < leni; i++) {
        //     node = this.glTF.nodes[i];
        //     if (node.mesh !== null) {
        //         node.mesh = this.glTF.meshes[ node.mesh ];
        //     }
        // } 



        // bounding box
        
        for (i = 0, leni = this.glTF.meshes.length; i < leni; i++) {
            mesh = this.glTF.meshes[i];
            mesh.boundingBox = new BoundingBox( vec3.fromValues(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY), vec3.fromValues(Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY) );
            
            for (j = 0, lenj = mesh.primitives.length; j < lenj; j++) {
                primitive = mesh.primitives[j];

                if (primitive.attributes['POSITION'] !== undefined) {
                    accessor = this.glTF.accessors[ primitive.attributes['POSITION'] ];
                    if (accessor.max) {
                        // @todo: handle cases where no min max are provided

                        // assume vec3
                        if (accessor.type === 'VEC3') {
                            primitive.boundingBox = new BoundingBox(
                                vec3.fromValues(accessor.min[0], accessor.min[1], accessor.min[2]),
                                vec3.fromValues(accessor.max[0], accessor.max[1], accessor.max[2])
                            );
                            primitive.boundingBox.calculateTransform();
                            

                            mesh.boundingBox.updateBoundingBox(primitive.boundingBox);
                        }
                        
                    }
                }


                // // hook up accessors
                // for (var att in primitive.attributes) {
                //     primitive.attributes[att] = this.glTF.accessors[ primitive.attributes[att] ];
                // }

            }

            mesh.boundingBox.calculateTransform();
        }


        // scene Bounding box
        // var tmpVec4a = vec4.create();
        // var tmpVec4b = vec4.create();
        var tmpVec3a = vec3.create();
        var tmpVec3b = vec3.create();
        // var tmpMat4 = mat4.create();
        var nodeMatrix = new Array(this.glTF.nodes.length);
        for(i = 0, leni = nodeMatrix.length; i < leni; i++) {
            nodeMatrix[i] = mat4.create();
        }

        function execUpdateBBox(n, parent){
            var tmpMat4 = nodeMatrix[n.nodeID];
            if (parent !== null) {
                mat4.mul(tmpMat4, nodeMatrix[parent.nodeID], n.matrix);
            } else {
                mat4.copy(tmpMat4, n.matrix);
            }
            
            
            if (n.mesh) {
                mesh = n.mesh;
                if (mesh.boundingBox) {
                    // vec4.set(tmpVec4a, mesh.boundingBox.min[0], mesh.boundingBox.min[1], mesh.boundingBox.min[2], 1.0);
                    // vec4.set(tmpVec4b, mesh.boundingBox.max[0], mesh.boundingBox.max[1], mesh.boundingBox.max[2], 1.0);
                    // vec4.transformMat4(tmpVec4a, tmpVec4a, tmpMat4);
                    // vec4.transformMat4(tmpVec4b, tmpVec4b, tmpMat4);
                    vec3.transformMat4(tmpVec3a, mesh.boundingBox.min, tmpMat4);
                    vec3.transformMat4(tmpVec3b, mesh.boundingBox.max, tmpMat4);

                    // scene.boundingBox.updateBoundingBox(mesh.boundingBox);
                    vec3.min(scene.boundingBox.min, scene.boundingBox.min, tmpVec3a);
                    vec3.min(scene.boundingBox.min, scene.boundingBox.min, tmpVec3b);
                    vec3.max(scene.boundingBox.max, scene.boundingBox.max, tmpVec3b);
                    vec3.max(scene.boundingBox.max, scene.boundingBox.max, tmpVec3a);
                }
            }
        }


        for (i = 0, leni = this.glTF.scenes.length; i < leni; i++) {
            scene = this.glTF.scenes[i];
            scene.boundingBox = new BoundingBox(
                vec3.fromValues(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY), 
                vec3.fromValues(Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY)
            );


            // @todo: !! this is not AABB, but an AABB after rotation.. this update is not correct...
            for (j = 0, lenj = scene.nodes.length; j < lenj; j++) {
                node = scene.nodes[j];
                // mat4.identity(tmpMat4);
                node.traverse(null, execUpdateBBox);
            }

            scene.boundingBox.calculateTransform();
        }



        // hook up image object
        if (this.glTF.textures) {
            for (i = 0, leni = this.glTF.textures.length; i < leni; i++) {
                if (this.glTF.samplers && this.glTF.textures[i].sampler !== null) {
                    this.glTF.textures[i].sampler = this.glTF.samplers[ this.glTF.textures[i].sampler ];
                }
                
                if (this.glTF.images && this.glTF.textures[i].source !== null) {
                    this.glTF.textures[i].source = this.glTF.images[ this.glTF.textures[i].source ];
                }
            }
        }
        

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

    // function _loadShaderFile(url, callback) {
    //     var xobj = new XMLHttpRequest();
    //     xobj.responseType = 'text';
    //     xobj.open('GET', url, true);
    //     xobj.onreadystatechange = function () {
    //         if (xobj.readyState == 4 && // Request finished, response ready
    //             xobj.status == "200") { // Status OK
    //             var file = xobj.response;
    //             if (file && callback) {
    //                 callback(file);
    //             }
    //         }
    //     };
    //     xobj.send(null);
    // }

    function _loadImage(url, iid, onload) {
        var img = new Image();
        img.crossOrigin = "Anonymous";
        img.src = url;
        img.onload = function() {
            onload(img, iid);
        };
    }


    // function _createShader(gl, source, type) {
    //     var shader = gl.createShader(type);
    //     gl.shaderSource(shader, source);
    //     gl.compileShader(shader);
    //     return shader;
    // }

    // function _createProgram(gl, vertexShaderSource, fragmentShaderSource) {
    //     var program = gl.createProgram();
    //     var vshader = _createShader(gl, vertexShaderSource, gl.VERTEX_SHADER);
    //     var fshader = _createShader(gl, fragmentShaderSource, gl.FRAGMENT_SHADER);
    //     gl.attachShader(program, vshader);
    //     gl.deleteShader(vshader);
    //     gl.attachShader(program, fshader);
    //     gl.deleteShader(fshader);
    //     gl.linkProgram(program);

    //     var log = gl.getProgramInfoLog(program);
    //     if (log) {
    //         console.log(log);
    //     }

    //     log = gl.getShaderInfoLog(vshader);
    //     if (log) {
    //         console.log(log);
    //     }

    //     log = gl.getShaderInfoLog(fshader);
    //     if (log) {
    //         console.log(log);
    //     }

    //     return program;
    // }

})();