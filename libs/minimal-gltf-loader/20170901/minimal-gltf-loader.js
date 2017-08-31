var MinimalGLTFLoader = MinimalGLTFLoader || {};
(function() {
    'use strict';

    // var curGltfModel = null;

    // Data classes
    var Scene = MinimalGLTFLoader.Scene = function () {
        this.nodes = [];    // root node object of this scene

        this.boundingBox = null;    // actually a bvh
    };

    /**
     * 
     * @param {vec3} min
     * @param {vec3} max
     */
    var BoundingBox = MinimalGLTFLoader.BoundingBox = function (min, max, isClone) {
        // this.min = min;
        // this.max = max;
        min = min || vec3.fromValues(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY);
        max = max || vec3.fromValues(Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY);

        if (isClone === undefined || isClone === true) {
            this.min = vec3.clone(min);
            this.max = vec3.clone(max);
        } else {
            this.min = min;
            this.max = max;
        }
        

        this.transform = mat4.create();
    };

    BoundingBox.prototype.updateBoundingBox = function (bbox) {
        vec3.min(this.min, this.min, bbox.min);
        vec3.max(this.max, this.max, bbox.max);
    };

    BoundingBox.prototype.calculateTransform = function () {
        // transform from a unit cube whose min = (0, 0, 0) and max = (1, 1, 1)

        // scale
        this.transform[0] = this.max[0] - this.min[0];
        this.transform[5] = this.max[1] - this.min[1];
        this.transform[10] = this.max[2] - this.min[2];
        // translate
        this.transform[12] = this.min[0];
        this.transform[13] = this.min[1];
        this.transform[14] = this.min[2];
    };

    BoundingBox.getAABBFromOBB = (function() {
        var transformRight = vec3.create();
        var transformUp = vec3.create();
        var transformBackward = vec3.create();

        var tmpVec3a = vec3.create();
        var tmpVec3b = vec3.create();

        return (function (obb, matrix) {
            vec3.set(transformRight, matrix[0], matrix[1], matrix[2]);
            vec3.set(transformUp, matrix[4], matrix[5], matrix[6]);
            vec3.set(transformBackward, matrix[8], matrix[9], matrix[10]);

            var min = vec3.fromValues(matrix[12], matrix[13], matrix[14]);  // init with matrix translation
            var max = vec3.clone(min);

            vec3.scale(tmpVec3a, transformRight, obb.min[0]);
            vec3.scale(tmpVec3b, transformRight, obb.max[0]);
            vec3.min(transformRight, tmpVec3a, tmpVec3b);
            vec3.add(min, min, transformRight);
            vec3.max(transformRight, tmpVec3a, tmpVec3b);
            vec3.add(max, max, transformRight);

            vec3.scale(tmpVec3a, transformUp, obb.min[1]);
            vec3.scale(tmpVec3b, transformUp, obb.max[1]);
            vec3.min(transformUp, tmpVec3a, tmpVec3b);
            vec3.add(min, min, transformUp);
            vec3.max(transformUp, tmpVec3a, tmpVec3b);
            vec3.add(max, max, transformUp);

            vec3.scale(tmpVec3a, transformBackward, obb.min[2]);
            vec3.scale(tmpVec3b, transformBackward, obb.max[2]);
            vec3.min(transformBackward, tmpVec3a, tmpVec3b);
            vec3.add(min, min, transformBackward);
            vec3.max(transformBackward, tmpVec3a, tmpVec3b);
            vec3.add(max, max, transformBackward);

            var bbox = new BoundingBox(min, max, false);
            bbox.calculateTransform();
            return bbox;
        });
    })();



    var Accessor = MinimalGLTFLoader.Accessor = function (a, bufferViewObject) {
        this.bufferView = bufferViewObject;
        this.componentType = a.componentType;   // required
        this.byteOffset = a.byteOffset !== undefined ? a.byteOffset : 0;
        this.byteStride = bufferViewObject.byteStride;
        this.normalized = a.normalized !== undefined ? a.normalized : false;
        this.count = a.count;   // required
        this.type = a.type;     // required
        this.size = Type2NumOfComponent[this.type];

        this.min = a.min;   // @tmp assume required for now (for bbox)
        this.max = a.max;   // @tmp assume required for now (for bbox)
    };

    Accessor.prototype.prepareVertexAttrib = function(location, gl) {
        gl.vertexAttribPointer(
            location,
            this.size,
            this.componentType,
            this.normalized,
            this.byteStride,
            this.byteOffset
            );
        gl.enableVertexAttribArray(location);
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
        
        this.translation = null;
        this.rotation = null;
        this.scale = null;

        this.children = [];  // node object
        // this.meshIDs = [];
        this.mesh = null;   // mesh object

        this.skin = null;
        this.jointID = null;

        // this.scenes = [];

        this.aabb = null;   // axis aligned bounding box, not need to apply node transform to aabb

        // this.bvh = null;    // bbox of all children, used for (occlusion culling)
        this.bvh = new BoundingBox();
    };

    Node.prototype.traverse = function(parent, executeFunc) {
        executeFunc(this, parent);
        for (var i = 0, len = this.children.length; i < len; i++) {
            this.children[i].traverse(this, executeFunc);
        }
    };

    Node.prototype.traversePostOrder = function(parent, executeFunc) {
        for (var i = 0, len = this.children.length; i < len; i++) {
            this.children[i].traversePostOrder(this, executeFunc);
        }
        executeFunc(this, parent);
    };

    Node.prototype.traverseTwoExecFun = function(parent, execFunPre, execFunPos) {
        execFunPre(this, parent);
        for (var i = 0, len = this.children.length; i < len; i++) {
            this.children[i].traverseTwoExecFun(this, execFunPre, execFunPos);
        }
        execFunPos(this, parent);
    };


    // var translationVec3 = vec3.create();
    // var rotationQuat = quat.create();
    // var scaleVec3 = vec3.create();
    var TRSMatrix = mat4.create();

    Node.prototype.getTransformMatrixFromTRS = function(translation, rotation, scale) {

        // this.translation = translation !== undefined ? translation : [0, 0, 0];
        // this.rotation = rotation !== undefined ? rotation : [0, 0, 0, 1];
        // this.scale = scale !== undefined ? scale : [1, 1, 1];
        this.translation = translation !== undefined ? vec3.fromValues(translation[0], translation[1], translation[2]) : vec3.fromValues(0, 0, 0);
        this.rotation = rotation !== undefined ? vec4.fromValues(rotation[0], rotation[1], rotation[2], rotation[3]) : vec4.fromValues(0, 0, 0, 1);
        this.scale = scale !== undefined ? vec3.fromValues(scale[0], scale[1], scale[2]) : vec3.fromValues(1, 1, 1);

        // vec3.set(translationVec3, this.translation[0], this.translation[1], this.translation[2]);
        // quat.set(rotationQuat, this.rotation[0], this.rotation[1], this.rotation[2], this.rotation[3]);
        // vec3.set(scaleVec3, this.scale[0], this.scale[1], this.scale[2]);
        // mat4.fromRotationTranslation(TRSMatrix, rotationQuat, translationVec3);
        // mat4.scale(this.matrix, TRSMatrix, scaleVec3);

        this.updateMatrixFromTRS();
    };

    Node.prototype.updateMatrixFromTRS = function() {
        mat4.fromRotationTranslation(TRSMatrix, this.rotation, this.translation);
        mat4.scale(this.matrix, TRSMatrix, this.scale);
    };



    var Mesh = MinimalGLTFLoader.Mesh = function () {
        this.meshID = -1;     // mesh id name in glTF json meshes
        this.primitives = [];

        this.boundingBox = null;    // kind of function as an OBB
    };

    var Primitive = MinimalGLTFLoader.Primitive = function (gltf, p) {
        // <attribute name, accessor id>, required
        // get hook up with accessor object in _postprocessing
        this.attributes = p.attributes;
        this.indices = p.indices !== undefined ? p.indices : null;  // accessor id


        // temp
        this.indicesComponentType = gltf.json.accessors[this.indices].componentType;
        this.indicesLength = gltf.json.accessors[this.indices].count;
        this.indicesOffset = (gltf.json.accessors[this.indices].byteOffset || 0);


        this.material = p.material !== undefined ? gltf.materials[p.material] : null;


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

    var TextureInfo = MinimalGLTFLoader.TextureInfo = function (json) {
        this.index = json.index;
        this.texCoord = json.texCoord !== undefined ? json.texCoord : 0 ;
    };

    var PbrMetallicRoughness = MinimalGLTFLoader.PbrMetallicRoughness = function (json) {
        this.baseColorFactor = json.baseColorFactor !== undefined ? json.baseColorFactor : [1, 1, 1, 1];
        this.baseColorTexture = json.baseColorTexture !== undefined ? new TextureInfo(json.baseColorTexture): null;
        this.metallicFactor = json.metallicFactor !== undefined ? json.metallicFactor : 1 ;
        this.roughnessFactor = json.roughnessFactor !== undefined ? json.roughnessFactor : 1 ;
        this.metallicRoughnessTexture = json.metallicRoughnessTexture !== undefined ? new TextureInfo(json.metallicRoughnessTexture): null;

    };

    var NormalTextureInfo = MinimalGLTFLoader.NormalTextureInfo = function (json) {
        this.index = json.index;
        this.texCoord = json.texCoord !== undefined ? json.texCoord : 0 ;
        this.scale = json.scale !== undefined ? json.scale : 1 ;
    };

    var Material = MinimalGLTFLoader.Material = function (m) {
        this.name = m.name !== undefined ? m.name : null;
        
        this.pbrMetallicRoughness = m.pbrMetallicRoughness !== undefined ? m.pbrMetallicRoughness : null;
        // this.normalTexture = m.normalTexture !== undefined ? m.normalTexture : null;
        this.normalTexture = m.normalTexture !== undefined ? new NormalTextureInfo(m.normalTexture) : null;
        this.occlusionTexture = m.occlusionTexture !== undefined ? m.occlusionTexture : null;
        this.emissiveTexture = m.emissiveTexture !== undefined ? m.emissiveTexture : null;

        this.emissiveFactor = m.emissiveFactor !== undefined ? m.emissiveFactor : [0, 0, 0];
        this.alphaMode = m.alphaMode !== undefined ? m.alphaMode : "OPAQUE";
        this.alphaCutoff = m.alphaCutoff !== undefined ? m.alphaCutoff : 0.5;
        this.doubleSided = m.doubleSided || false;
    };

    
    var Skin = MinimalGLTFLoader.Skin = function (gltf, s) {
        this.name = s.name !== undefined ? s.name : null;

        this.joints = new Array(s.joints.length);   // required
        var i, len;
        for (i = 0, len = this.joints.length; i < len; i++) {
            this.joints[i] = gltf.nodes[s.joints[i]];
        }

        this.skeleton = s.skeleton !== undefined ? gltf.nodes[s.skeleton] : null;
        this.inverseBindMatrices = s.inverseBindMatrices !== undefined ? gltf.accessors[s.inverseBindMatrices] : null;


        // runtime

        if (this.inverseBindMatrices) {
            // should be a mat4
            this.inverseBindMatricesData = _getAccessorData(this.inverseBindMatrices);
            // this.inverseBindMatricesMat4 = mat4.fromValues(this.inverseBindMatricesData);

            this.jointMatrix = [];  // for calculation
            this.jointMatrixUniformBuffer = null;
            // this.jointMatrixUnidormBufferData = _arrayBuffer2TypedArray(
            //     this.inverseBindMatricesData, 
            //     0, 
            //     this.inverseBindMatricesData.length, 
            //     this.inverseBindMatrices.componentType
            // );      // for copy to UBO

            // @tmp: fixed length to coordinate with shader, for copy to UBO
            this.jointMatrixUnidormBufferData = new Float32Array(32 * 16);

            for (i = 0, len = this.inverseBindMatricesData.length; i < len; i += 16) {
                this.jointMatrix.push(mat4.fromValues(
                    this.inverseBindMatricesData[i],
                    this.inverseBindMatricesData[i + 1],
                    this.inverseBindMatricesData[i + 2],
                    this.inverseBindMatricesData[i + 3],
                    this.inverseBindMatricesData[i + 4],
                    this.inverseBindMatricesData[i + 5],
                    this.inverseBindMatricesData[i + 6],
                    this.inverseBindMatricesData[i + 7],
                    this.inverseBindMatricesData[i + 8],
                    this.inverseBindMatricesData[i + 9],
                    this.inverseBindMatricesData[i + 10],
                    this.inverseBindMatricesData[i + 11],
                    this.inverseBindMatricesData[i + 12],
                    this.inverseBindMatricesData[i + 13],
                    this.inverseBindMatricesData[i + 14],
                    this.inverseBindMatricesData[i + 15]
                ));
            }
        }


        
    };




    // animation has no potential plan for progressive rendering I guess
    // so everything happens after all buffers are loaded

    var Target = MinimalGLTFLoader.Target = function (t) {
        this.nodeID = t.node !== undefined ? t.node : null ;  //id, to be hooked up to object later
        this.path = t.path;     //required, string
    };

    var Channel = MinimalGLTFLoader.Channel = function (c, animation) {
        this.sampler = animation.samplers[c.sampler];   //required
        this.target = new Target(c.target);     //required
    };

    var AnimationSampler = MinimalGLTFLoader.AnimationSampler = function (gltf, s) {
        this.input = gltf.accessors[s.input];   //required, accessor object
        this.output = gltf.accessors[s.output]; //required, accessor object

        this.inputTypedArray = _getAccessorData(this.input);
        this.outputTypedArray = _getAccessorData(this.output);


        // "LINEAR"
        // "STEP"
        // "CATMULLROMSPLINE"
        // "CUBICSPLINE"
        this.interpolation = s.interpolation !== undefined ? s.interpolation : 'LINEAR' ;
        
        // ------- extra runtime info -----------
        // runtime status thing
        this.curIdx = 0;
        // this.curValue = 0;
        this.curValue = vec4.create();
        this.inputMax = this.inputTypedArray[this.inputTypedArray.length - 1];

        this.loopOffset = 0;
    };

    var animationOutputValueVec4a = vec4.create();
    var animationOutputValueVec4b = vec4.create();

    AnimationSampler.prototype.getValue = function (t) {
        t -= this.loopOffset;
        var len = this.inputTypedArray.length;
        while (this.curIdx <= len - 2 && t >= this.inputTypedArray[this.curIdx + 1]) {
            this.curIdx++;
        }


        if (this.curIdx >= len - 1) {
            // loop
            
            this.loopOffset += this.inputMax;
            t -= this.inputMax;
            this.curIdx = 0;
        }

        // @tmp: assume no stride
        var count = Type2NumOfComponent[this.output.type];
        
        var v4lerp = count === 4 ? quat.slerp: vec4.lerp;

        var i = this.curIdx;
        var o = i * count;
        var on = o + count;

        var u = Math.max( 0, t - this.inputTypedArray[i] ) / (this.inputTypedArray[i+1] - this.inputTypedArray[i]);

        for (var j = 0; j < count; j++ ) {
            animationOutputValueVec4a[j] = this.outputTypedArray[o + j];
            animationOutputValueVec4b[j] = this.outputTypedArray[on + j];
        }

        switch(this.interpolation) {
            case 'LINEAR': 
            // v4lerp(this.curValue, animationOutputValueVec4a, animationOutputValueVec4b, t - this.loopOffset - this.inputTypedArray[i]);
            v4lerp(this.curValue, animationOutputValueVec4a, animationOutputValueVec4b, u);
            break;

            default:
            break;
        }
    };



    var Animation = MinimalGLTFLoader.Animation = function (gltf, a) {
        this.name = a.name !== undefined ? a.name : null;

        var i, len;

        

        this.samplers = []; // required, array of animation sampler
        
        for (i = 0, len = a.samplers.length; i < len; i++) {
            this.samplers[i] = new AnimationSampler(gltf, a.samplers[i]);
        }

        this.channels = [];     //required, array of channel
        
        for (i = 0, len = a.channels.length; i < len; i++) {
            this.channels[i] = new Channel(a.channels[i], this);
        }
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

        if (gltf.materials) {
            this.materials = new Array(gltf.materials.length);  // store material object
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


        if (gltf.skins) {
            this.skins = new Array(gltf.skins.length);
        }

        if (gltf.animations) {
            this.animations = new Array(gltf.animations.length);
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


        // tmp fix
        function getBufferViewCallbackExec() {
            var accessor = json.accessors[i];
            var ii = i;
            return function(bufferView) {
                loader.glTF.accessors[ii] = new Accessor(accessor, bufferView);
            };
        }

        // load all accessors (and their dependent bufferView)
        if (json.accessors) {
            for (i = 0, len = json.accessors.length; i < len; i++) {
                a = json.accessors[i];
                if (a.bufferView !== undefined) {
                    // this._getBufferViewData(json, a.bufferView, callbackAccessor);
                    this._getBufferViewData(json, a.bufferView, 
                        getBufferViewCallbackExec()
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

        // load all materials
        if (json.materials) {
            for (i = 0, len = json.materials.length; i < len; i++) {
                this.glTF.materials[i] = new Material(json.materials[i]);
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
            newMesh.primitives.push(new Primitive(this.glTF, primitive));
        }

        return newMesh;
    };






    
    
    glTFLoader.prototype._parseNode = function(json, nodeID) {
        if (this.glTF.nodes[nodeID] !== undefined) {
            // node is already loaded
            return this.glTF.nodes[nodeID];
        }

        var node = json.nodes[nodeID];

        // @tmp, need refine (old structure code...)
        var newNode = new Node(nodeID);
        newNode.skin = node.skin !== undefined ? node.skin : null;


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

            

            newNode.getTransformMatrixFromTRS(node.translation, node.rotation, node.scale);
            
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

            // curGltfModel = loader.glTF = new glTFModel(json);
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
        // if there's no plan for progressive loading (streaming)
        // than simply everything should be placed here
        
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
            // mesh.boundingBox = new BoundingBox( vec3.fromValues(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY), vec3.fromValues(Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY), false );
            mesh.boundingBox = new BoundingBox();
            
            for (j = 0, lenj = mesh.primitives.length; j < lenj; j++) {
                primitive = mesh.primitives[j];

                if (primitive.attributes.POSITION !== undefined) {
                    accessor = this.glTF.accessors[ primitive.attributes.POSITION ];
                    if (accessor.max) {
                        // @todo: handle cases where no min max are provided

                        // assume vec3
                        if (accessor.type === 'VEC3') {
                            primitive.boundingBox = new BoundingBox(
                                vec3.fromValues(accessor.min[0], accessor.min[1], accessor.min[2]),
                                vec3.fromValues(accessor.max[0], accessor.max[1], accessor.max[2]),
                                false
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
        var nodeMatrix = new Array(this.glTF.nodes.length);
        for(i = 0, leni = nodeMatrix.length; i < leni; i++) {
            nodeMatrix[i] = mat4.create();
        }

        function execUpdateTransform(n, parent) {
            var tmpMat4 = nodeMatrix[n.nodeID];

            if (parent !== null) {
                mat4.mul(tmpMat4, nodeMatrix[parent.nodeID], n.matrix);
            } else {
                mat4.copy(tmpMat4, n.matrix);
            }
        }

        function execUpdateBBox(n, parent){
            var tmpMat4 = nodeMatrix[n.nodeID];
            var parentBVH;

            if (parent !== null) {
                parentBVH = parent.bvh;
            } else {
                parentBVH = scene.boundingBox;
            }

            if (n.mesh) {
                mesh = n.mesh;
                if (mesh.boundingBox) {

                    n.aabb = BoundingBox.getAABBFromOBB(mesh.boundingBox, tmpMat4);

                    // vec3.min(scene.boundingBox.min, scene.boundingBox.min, n.aabb.min);
                    // vec3.max(scene.boundingBox.max, scene.boundingBox.max, n.aabb.max);
                    
                    // vec3.min(parentBVH.min, parentBVH.min, n.aabb.min);
                    // vec3.max(parentBVH.max, parentBVH.max, n.aabb.max);

                    if (n.children.length === 0) {
                        // n.bvh = n.aabb;
                        vec3.copy(n.bvh.min, n.aabb.min);
                        vec3.copy(n.bvh.max, n.aabb.max);
                    }
                }
            }

            vec3.min(parentBVH.min, parentBVH.min, n.bvh.min);
            vec3.max(parentBVH.max, parentBVH.max, n.bvh.max);
        }


        for (i = 0, leni = this.glTF.scenes.length; i < leni; i++) {
            scene = this.glTF.scenes[i];
            // scene.boundingBox = new BoundingBox(
            //     vec3.fromValues(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY), 
            //     vec3.fromValues(Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY),
            //     false
            // );
            scene.boundingBox = new BoundingBox();


            for (j = 0, lenj = scene.nodes.length; j < lenj; j++) {
                node = scene.nodes[j];
                // node.traverse(null, execUpdateBBox);
                node.traverseTwoExecFun(null, execUpdateTransform, execUpdateBBox);
            }

            scene.boundingBox.calculateTransform();
        }


        for (j = 0, lenj = this.glTF.nodes.length; j < lenj; j++) {
            node = this.glTF.nodes[j];
            if (node.bvh !== null) {
                node.bvh.calculateTransform();
            }
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





        // load animations (when all accessors are loaded correctly)
        if (this.glTF.animations) {
            for (i = 0, leni = this.glTF.animations.length; i < leni; i++) {
                this.glTF.animations[i] = new Animation(this.glTF, this.glTF.json.animations[i]);
            }
        }

        var joints;
        if (this.glTF.skins) {
            for (i = 0, leni = this.glTF.skins.length; i < leni; i++) {
                this.glTF.skins[i] = new Skin(this.glTF, this.glTF.json.skins[i]);
                

                joints = this.glTF.skins[i].joints;
                for (j = 0, lenj = joints.length; j < lenj; j++) {
                    // this.glTF.nodes[ joints[j] ].jointID = j;
                    joints[j].jointID = j;
                }
            } 
        }

        for (i = 0, leni = this.glTF.nodes.length; i < leni; i++) {
            node = this.glTF.nodes[i];
            if (node.skin !== null) {
                node.skin = this.glTF.skins[ node.skin ];
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


    // for animation use
    function _arrayBuffer2TypedArray(buffer, byteOffset, countOfComponentType, componentType) {
        switch(componentType) {
            // @todo: finish
            case 5122: return new Int16Array(buffer, byteOffset, countOfComponentType);
            case 5123: return new Uint16Array(buffer, byteOffset, countOfComponentType);
            case 5124: return new Int32Array(buffer, byteOffset, countOfComponentType);
            case 5125: return new Uint32Array(buffer, byteOffset, countOfComponentType);
            case 5126: return new Float32Array(buffer, byteOffset, countOfComponentType);
            default: return null; 
        }
    }

    function _getAccessorData(accessor) {
        return _arrayBuffer2TypedArray(
            accessor.bufferView.data, 
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