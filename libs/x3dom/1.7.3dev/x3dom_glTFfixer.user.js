// ==UserScript==
// @name        glTFTransformFixer
// @namespace   aplesch
// @description use glTF node transforms for meshes
// @version     0.34
// @include     *
// @grant       none
// ==/UserScript==

//glTFLoader.js

x3dom.glTF.glTFLoader.prototype.updateScene = function(shape, shaderProgram, gl, scene)
{
    var nodes = scene["nodes"];

    for(var i = 0; i<nodes.length;++i)
    {
        var nodeID = nodes[i];
        var worldTransform = new x3dom.fields.SFMatrix4f(); // identity
        this.traverseNode(shape, shaderProgram, gl, this.scene.nodes[nodeID], worldTransform);
    }
};

x3dom.glTF.glTFLoader.prototype.getTransform = function (node) {
    var transform = new x3dom.fields.SFMatrix4f();// start with identity
    if ( node.matrix ) {
        transform.setFromArray(node.matrix);
        return transform;
    }
    if ( node.scale && node.scale.length == 3) {
        var s = node.scale;
        transform.setScale(new x3dom.fields.SFVec3f(s[0], s[1], s[2]));
    }
    if ( node.rotation && node.rotation.length == 4) {
        var r = node.rotation;
        var rotationMatrix = new x3dom.fields.SFMatrix4f();
        rotationMatrix.setRotate(
            new x3dom.fields.Quaternion(r[0], r[1], r[2], r[3]));
        transform = rotationMatrix.mult(transform);
    }
    if ( node.translation && node.translation.length == 3 ) {
        var t = node.translation;
        var translationMatrix = x3dom.fields.SFMatrix4f.translation(
            new x3dom.fields.SFVec3f(t[0], t[1], t[2]));
        transform = translationMatrix.mult(transform);
    }
    return transform;
};

x3dom.glTF.glTFLoader.prototype.traverseNode = function(shape, shaderProgram, gl, node, transform)
{
    var worldTransform = transform.mult(this.getTransform(node));
    var children = node["children"];
    if(children != null)
        for(var i = 0; i<children.length;++i)
        {
            var childID = children[i];
            this.traverseNode(shape, shaderProgram, gl, this.scene.nodes[childID], worldTransform);
        }

    var meshes = node["meshes"];
    if(meshes != null && meshes.length > 0)
        for (var i = 0; i < meshes.length; ++i) {
            var meshID = meshes[i];
            //if (this.loaded.meshes[meshID] == null)
            {
                this.updateMesh(shape, shaderProgram, gl, this.scene.meshes[meshID], worldTransform);
                this.loaded.meshes[meshID] = 1;
            }
        }
};

x3dom.glTF.glTFLoader.prototype.updateMesh = function(shape, shaderProgram, gl, mesh, worldTransform)
{
    var primitives = mesh["primitives"];
    for(var i = 0; i<primitives.length; ++i){
        this.loadglTFMesh(shape, shaderProgram, gl, primitives[i], worldTransform);
    }
};

x3dom.glTF.glTFLoader.prototype.loadglTFMesh =  function(shape, shaderProgram, gl, primitive, worldTransform)
{
    "use strict";

    var mesh = new x3dom.glTF.glTFMesh();

    mesh.primitiveType = primitive["mode"];

    var indexed = (primitive.indices != null && primitive.indices != "");

    if(indexed == true){
        var indicesAccessor = this.scene.accessors[primitive.indices];

        mesh.buffers[glTF_BUFFER_IDX.INDEX] = {};
        mesh.buffers[glTF_BUFFER_IDX.INDEX].offset = indicesAccessor["byteOffset"];
        mesh.buffers[glTF_BUFFER_IDX.INDEX].type =  indicesAccessor["componentType"];
        mesh.buffers[glTF_BUFFER_IDX.INDEX].idx = this.loaded.bufferViews[indicesAccessor["bufferView"]];

        mesh.drawCount = indicesAccessor["count"];
        this._mesh._numFaces += indicesAccessor["count"] / 3;
    }

    var attributes = primitive["attributes"];

    for (var attributeID in attributes)
    {
        var accessorName = attributes[attributeID];
        var accessor = this.scene.accessors[accessorName];

        var idx = null;

        //the current renderer does not support generic vertex attributes, so simply look for useable cases
        switch (attributeID)
        {
            case "POSITION":
                idx = glTF_BUFFER_IDX.POSITION;

                //for non-indexed rendering, we assume that all attributes have the same count
                if (indexed == false)
                {
                    mesh.drawCount = accessor["count"];
                    this._mesh._numFaces += accessor["count"] / 3;
                }
                this._mesh.numCoords += accessor["count"];
                break;

            case "NORMAL":
                idx = glTF_BUFFER_IDX.NORMAL;
                break;

            case "TEXCOORD_0":
                idx = glTF_BUFFER_IDX.TEXCOORD;
                break;

            case "COLOR":
                idx = glTF_BUFFER_IDX.COLOR;
                break;
        }

        if(idx != null){
            mesh.buffers[idx] = {};
            mesh.buffers[idx].idx = this.loaded.bufferViews[accessor["bufferView"]];
            mesh.buffers[idx].offset = accessor["byteOffset"];
            mesh.buffers[idx].stride = accessor["byteStride"];

            mesh.buffers[idx].type = accessor["componentType"];
            mesh.buffers[idx].numComponents = this.getNumComponentsForType(accessor["type"]);
        }
    }

    this.loaded.meshCount += 1;

    shape._dirty.shader = true;
    shape._nameSpace.doc.needRender = true;
    x3dom.BinaryContainerLoader.checkError(gl);

    if(primitive.material != null && !this.meshOnly) {
        mesh.material = this.loadMaterial(gl, this.scene.materials[primitive.material]);
        mesh.material.worldTransform = worldTransform;
    }

    if(shape.meshes == null)
        shape.meshes = [];
    shape.meshes.push(mesh);
};




// glTFContainer.js

x3dom.glTF.glTFMaterial.prototype.updateTransforms = function(shaderParameter)
{
    function glMultMatrix4 (gl, m) {
        var glM = new x3dom.fields.SFMatrix4f();
        glM.setFromArray(gl);
        return glM.mult(m).toGL(); //optimize by multiplying gl matrixes directly
    }
    
    if(this.program !== null)
    {
        this.program.bind();

        for(var key in this.semanticMapping){
            if(!this.semanticMapping.hasOwnProperty(key))continue;

            var mapping = this.semanticMapping[key];

            switch(mapping){
                case "modelViewMatrix":
                    this.program[key] = glMultMatrix4(shaderParameter.modelViewMatrix, this.worldTransform);
                    break;
                case "viewMatrix":
                    this.program[key] = shaderParameter.viewMatrix;
                    break;
                case "modelViewInverseTransposeMatrix":
                    var mat = shaderParameter.normalMatrix;
                    //not sure how to factor in worldTransform
                    //modelViewMatrix * worldTransform . inverse . transpose . toGL ?

                    var model_view_inv_gl =
                        [mat[0], mat[1], mat[2],
                            mat[4],mat[5],mat[6],
                            mat[8],mat[9],mat[10]];

                    this.program[key] = model_view_inv_gl;
                    break;
                case "modelViewInverseMatrix":
                    // not sure; perhaps work with worldTransform.inverse
                    this.program[key] = shaderParameter.modelViewMatrixInverse;
                    break;
                case "modelViewProjectionMatrix":
                    this.program[key] = glMultMatrix4(shaderParameter.modelViewProjectionMatrix, this.worldTransform);
                    break;
                case "modelMatrix":
                    this.program[key] = glMultMatrix4(shaderParameter.model, this.worldTransform);
                    break;
                case "projectionMatrix":
                    this.program[key] = shaderParameter.projectionMatrix;
                    break;
                default:
                    break;
            }
        }
    }
};
