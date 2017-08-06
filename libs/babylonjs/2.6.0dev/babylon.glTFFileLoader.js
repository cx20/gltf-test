/// <reference path="../../../dist/preview release/babylon.d.ts"/>
var BABYLON;
(function (BABYLON) {
    /**
    * Enums
    */
    var EBinaryContentFormat;
    (function (EBinaryContentFormat) {
        EBinaryContentFormat[EBinaryContentFormat["JSON"] = 0] = "JSON";
    })(EBinaryContentFormat = BABYLON.EBinaryContentFormat || (BABYLON.EBinaryContentFormat = {}));
    var EBufferViewTarget;
    (function (EBufferViewTarget) {
        EBufferViewTarget[EBufferViewTarget["ARRAY_BUFFER"] = 34962] = "ARRAY_BUFFER";
        EBufferViewTarget[EBufferViewTarget["ELEMENT_ARRAY_BUFFER"] = 34963] = "ELEMENT_ARRAY_BUFFER";
    })(EBufferViewTarget = BABYLON.EBufferViewTarget || (BABYLON.EBufferViewTarget = {}));
    var EComponentType;
    (function (EComponentType) {
        EComponentType[EComponentType["BYTE"] = 5120] = "BYTE";
        EComponentType[EComponentType["UNSIGNED_BYTE"] = 5121] = "UNSIGNED_BYTE";
        EComponentType[EComponentType["SHORT"] = 5122] = "SHORT";
        EComponentType[EComponentType["UNSIGNED_SHORT"] = 5123] = "UNSIGNED_SHORT";
        EComponentType[EComponentType["FLOAT"] = 5126] = "FLOAT";
    })(EComponentType = BABYLON.EComponentType || (BABYLON.EComponentType = {}));
    var EMeshPrimitiveMode;
    (function (EMeshPrimitiveMode) {
        EMeshPrimitiveMode[EMeshPrimitiveMode["POINTS"] = 0] = "POINTS";
        EMeshPrimitiveMode[EMeshPrimitiveMode["LINES"] = 1] = "LINES";
        EMeshPrimitiveMode[EMeshPrimitiveMode["LINE_LOOP"] = 2] = "LINE_LOOP";
        EMeshPrimitiveMode[EMeshPrimitiveMode["LINE_STRIP"] = 3] = "LINE_STRIP";
        EMeshPrimitiveMode[EMeshPrimitiveMode["TRIANGLES"] = 4] = "TRIANGLES";
        EMeshPrimitiveMode[EMeshPrimitiveMode["TRIANGLE_STRIP"] = 5] = "TRIANGLE_STRIP";
        EMeshPrimitiveMode[EMeshPrimitiveMode["TRIANGLE_FAN"] = 6] = "TRIANGLE_FAN";
    })(EMeshPrimitiveMode = BABYLON.EMeshPrimitiveMode || (BABYLON.EMeshPrimitiveMode = {}));
    var EParameterType;
    (function (EParameterType) {
        EParameterType[EParameterType["BYTE"] = 5120] = "BYTE";
        EParameterType[EParameterType["UNSIGNED_BYTE"] = 5121] = "UNSIGNED_BYTE";
        EParameterType[EParameterType["SHORT"] = 5122] = "SHORT";
        EParameterType[EParameterType["UNSIGNED_SHORT"] = 5123] = "UNSIGNED_SHORT";
        EParameterType[EParameterType["INT"] = 5124] = "INT";
        EParameterType[EParameterType["UNSIGNED_INT"] = 5125] = "UNSIGNED_INT";
        EParameterType[EParameterType["FLOAT"] = 5126] = "FLOAT";
        EParameterType[EParameterType["FLOAT_VEC2"] = 35664] = "FLOAT_VEC2";
        EParameterType[EParameterType["FLOAT_VEC3"] = 35665] = "FLOAT_VEC3";
        EParameterType[EParameterType["FLOAT_VEC4"] = 35666] = "FLOAT_VEC4";
        EParameterType[EParameterType["INT_VEC2"] = 35667] = "INT_VEC2";
        EParameterType[EParameterType["INT_VEC3"] = 35668] = "INT_VEC3";
        EParameterType[EParameterType["INT_VEC4"] = 35669] = "INT_VEC4";
        EParameterType[EParameterType["BOOL"] = 35670] = "BOOL";
        EParameterType[EParameterType["BOOL_VEC2"] = 35671] = "BOOL_VEC2";
        EParameterType[EParameterType["BOOL_VEC3"] = 35672] = "BOOL_VEC3";
        EParameterType[EParameterType["BOOL_VEC4"] = 35673] = "BOOL_VEC4";
        EParameterType[EParameterType["FLOAT_MAT2"] = 35674] = "FLOAT_MAT2";
        EParameterType[EParameterType["FLOAT_MAT3"] = 35675] = "FLOAT_MAT3";
        EParameterType[EParameterType["FLOAT_MAT4"] = 35676] = "FLOAT_MAT4";
        EParameterType[EParameterType["SAMPLER_2D"] = 35678] = "SAMPLER_2D";
    })(EParameterType = BABYLON.EParameterType || (BABYLON.EParameterType = {}));
    var ETextureMagFilter;
    (function (ETextureMagFilter) {
        ETextureMagFilter[ETextureMagFilter["NEAREST"] = 9728] = "NEAREST";
        ETextureMagFilter[ETextureMagFilter["LINEAR"] = 9728] = "LINEAR";
    })(ETextureMagFilter = BABYLON.ETextureMagFilter || (BABYLON.ETextureMagFilter = {}));
    var ETextureMinFilter;
    (function (ETextureMinFilter) {
        ETextureMinFilter[ETextureMinFilter["NEAREST"] = 9728] = "NEAREST";
        ETextureMinFilter[ETextureMinFilter["LINEAR"] = 9728] = "LINEAR";
        ETextureMinFilter[ETextureMinFilter["NEAREST_MIPMAP_NEAREST"] = 9984] = "NEAREST_MIPMAP_NEAREST";
        ETextureMinFilter[ETextureMinFilter["LINEAR_MIPMAP_NEAREST"] = 9985] = "LINEAR_MIPMAP_NEAREST";
        ETextureMinFilter[ETextureMinFilter["NEAREST_MIPMAP_LINEAR"] = 9986] = "NEAREST_MIPMAP_LINEAR";
        ETextureMinFilter[ETextureMinFilter["LINEAR_MIPMAP_LINEAR"] = 9987] = "LINEAR_MIPMAP_LINEAR";
    })(ETextureMinFilter = BABYLON.ETextureMinFilter || (BABYLON.ETextureMinFilter = {}));
    var ETextureFormat;
    (function (ETextureFormat) {
        ETextureFormat[ETextureFormat["ALPHA"] = 6406] = "ALPHA";
        ETextureFormat[ETextureFormat["RGB"] = 6407] = "RGB";
        ETextureFormat[ETextureFormat["RGBA"] = 6408] = "RGBA";
        ETextureFormat[ETextureFormat["LUMINANCE"] = 6409] = "LUMINANCE";
        ETextureFormat[ETextureFormat["LUMINANCE_ALPHA"] = 6410] = "LUMINANCE_ALPHA";
    })(ETextureFormat = BABYLON.ETextureFormat || (BABYLON.ETextureFormat = {}));
    var ETextureTarget;
    (function (ETextureTarget) {
        ETextureTarget[ETextureTarget["TEXTURE_2D"] = 3553] = "TEXTURE_2D";
    })(ETextureTarget = BABYLON.ETextureTarget || (BABYLON.ETextureTarget = {}));
    var ETextureType;
    (function (ETextureType) {
        ETextureType[ETextureType["UNSIGNED_BYTE"] = 5121] = "UNSIGNED_BYTE";
        ETextureType[ETextureType["UNSIGNED_SHORT_5_6_5"] = 33635] = "UNSIGNED_SHORT_5_6_5";
        ETextureType[ETextureType["UNSIGNED_SHORT_4_4_4_4"] = 32819] = "UNSIGNED_SHORT_4_4_4_4";
        ETextureType[ETextureType["UNSIGNED_SHORT_5_5_5_1"] = 32820] = "UNSIGNED_SHORT_5_5_5_1";
    })(ETextureType = BABYLON.ETextureType || (BABYLON.ETextureType = {}));
    var ETextureWrapMode;
    (function (ETextureWrapMode) {
        ETextureWrapMode[ETextureWrapMode["CLAMP_TO_EDGE"] = 33071] = "CLAMP_TO_EDGE";
        ETextureWrapMode[ETextureWrapMode["MIRRORED_REPEAT"] = 33648] = "MIRRORED_REPEAT";
        ETextureWrapMode[ETextureWrapMode["REPEAT"] = 10497] = "REPEAT";
    })(ETextureWrapMode = BABYLON.ETextureWrapMode || (BABYLON.ETextureWrapMode = {}));
    var EMaterialAlphaMode;
    (function (EMaterialAlphaMode) {
        EMaterialAlphaMode[EMaterialAlphaMode["MASK"] = 0] = "MASK";
        EMaterialAlphaMode[EMaterialAlphaMode["BLEND"] = 1] = "BLEND";
    })(EMaterialAlphaMode = BABYLON.EMaterialAlphaMode || (BABYLON.EMaterialAlphaMode = {}));
})(BABYLON || (BABYLON = {}));

//# sourceMappingURL=babylon.glTFFileLoaderInterfaces.js.map

/// <reference path="../../../dist/preview release/babylon.d.ts"/>
var BABYLON;
(function (BABYLON) {
    /**
    * Values
    */
    var glTFAnimationPaths = ["translation", "rotation", "scale"];
    var babylonAnimationPaths = ["position", "rotationQuaternion", "scaling"];
    /**
    * Utils
    */
    var normalizeUVs = function (buffer) {
        if (!buffer) {
            return;
        }
        for (var i = 0; i < buffer.length / 2; i++) {
            buffer[i * 2 + 1] = 1.0 - buffer[i * 2 + 1];
        }
    };
    /**
    * Returns the animation path (glTF -> Babylon)
    */
    var getAnimationPath = function (path) {
        var index = glTFAnimationPaths.indexOf(path);
        if (index !== -1) {
            return babylonAnimationPaths[index];
        }
        return path;
    };
    /**
    * Loads and creates animations
    */
    var loadAnimations = function (runtime) {
        var animations = runtime.gltf.animations;
        if (!animations) {
            return;
        }
        for (var animationIndex = 0; animationIndex < animations.length; animationIndex++) {
            var animation = animations[animationIndex];
            if (!animation || !animation.channels) {
                continue;
            }
            var lastAnimation = null;
            for (var channelIndex = 0; channelIndex < animation.channels.length; channelIndex++) {
                var channel = animation.channels[channelIndex];
                if (!channel) {
                    continue;
                }
                var sampler = animation.samplers[channel.sampler];
                if (!sampler) {
                    continue;
                }
                var inputData = sampler.input;
                var outputData = sampler.output;
                var bufferInput = BABYLON.GLTFUtils.GetBufferFromAccessor(runtime, runtime.gltf.accessors[inputData]);
                var bufferOutput = BABYLON.GLTFUtils.GetBufferFromAccessor(runtime, runtime.gltf.accessors[outputData]);
                var targetID = channel.target.id;
                var targetNode = runtime.gltf.nodes[channel.target.id].babylonNode;
                if (targetNode === null) {
                    BABYLON.Tools.Warn("Creating animation index " + animationIndex + " but cannot find node index " + targetID + " to attach to");
                    continue;
                }
                var isBone = targetNode instanceof BABYLON.Bone;
                // Get target path (position, rotation or scaling)
                var targetPath = channel.target.path;
                var targetPathIndex = glTFAnimationPaths.indexOf(targetPath);
                if (targetPathIndex !== -1) {
                    targetPath = babylonAnimationPaths[targetPathIndex];
                }
                // Determine animation type
                var animationType = BABYLON.Animation.ANIMATIONTYPE_MATRIX;
                if (!isBone) {
                    if (targetPath === "rotationQuaternion") {
                        animationType = BABYLON.Animation.ANIMATIONTYPE_QUATERNION;
                        targetNode.rotationQuaternion = new BABYLON.Quaternion();
                    }
                    else {
                        animationType = BABYLON.Animation.ANIMATIONTYPE_VECTOR3;
                    }
                }
                // Create animation and key frames
                var babylonAnimation = null;
                var keys = [];
                var arrayOffset = 0;
                var modifyKey = false;
                if (isBone && lastAnimation && lastAnimation.getKeys().length === bufferInput.length) {
                    babylonAnimation = lastAnimation;
                    modifyKey = true;
                }
                if (!modifyKey) {
                    var animationName = animation.name || "anim" + animationIndex;
                    babylonAnimation = new BABYLON.Animation(animationName, isBone ? "_matrix" : targetPath, 1, animationType, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
                }
                // For each frame
                for (var j = 0; j < bufferInput.length; j++) {
                    var value = null;
                    if (targetPath === "rotationQuaternion") {
                        value = BABYLON.Quaternion.FromArray([bufferOutput[arrayOffset], bufferOutput[arrayOffset + 1], bufferOutput[arrayOffset + 2], bufferOutput[arrayOffset + 3]]);
                        arrayOffset += 4;
                    }
                    else {
                        value = BABYLON.Vector3.FromArray([bufferOutput[arrayOffset], bufferOutput[arrayOffset + 1], bufferOutput[arrayOffset + 2]]);
                        arrayOffset += 3;
                    }
                    if (isBone) {
                        var bone = targetNode;
                        var translation = BABYLON.Vector3.Zero();
                        var rotationQuaternion = new BABYLON.Quaternion();
                        var scaling = BABYLON.Vector3.Zero();
                        // Warning on decompose
                        var mat = bone.getBaseMatrix();
                        if (modifyKey) {
                            mat = lastAnimation.getKeys()[j].value;
                        }
                        mat.decompose(scaling, rotationQuaternion, translation);
                        if (targetPath === "position") {
                            translation = value;
                        }
                        else if (targetPath === "rotationQuaternion") {
                            rotationQuaternion = value;
                        }
                        else {
                            scaling = value;
                        }
                        value = BABYLON.Matrix.Compose(scaling, rotationQuaternion, translation);
                    }
                    if (!modifyKey) {
                        keys.push({
                            frame: bufferInput[j],
                            value: value
                        });
                    }
                    else {
                        lastAnimation.getKeys()[j].value = value;
                    }
                }
                // Finish
                if (!modifyKey) {
                    babylonAnimation.setKeys(keys);
                    targetNode.animations.push(babylonAnimation);
                }
                lastAnimation = babylonAnimation;
                runtime.babylonScene.stopAnimation(targetNode);
                runtime.babylonScene.beginAnimation(targetNode, 0, bufferInput[bufferInput.length - 1], true, 1.0);
            }
        }
    };
    /**
    * Returns the bones transformation matrix
    */
    var configureBoneTransformation = function (node) {
        var mat = null;
        if (node.translation || node.rotation || node.scale) {
            var scale = BABYLON.Vector3.FromArray(node.scale || [1, 1, 1]);
            var rotation = BABYLON.Quaternion.FromArray(node.rotation || [0, 0, 0, 1]);
            var position = BABYLON.Vector3.FromArray(node.translation || [0, 0, 0]);
            mat = BABYLON.Matrix.Compose(scale, rotation, position);
        }
        else {
            mat = BABYLON.Matrix.FromArray(node.matrix);
        }
        return mat;
    };
    /**
    * Returns the parent bone
    */
    var getParentBone = function (runtime, skin, jointName, newSkeleton) {
        // TODO: animation schema broken
        /*
        // Try to find
        for (var i = 0; i < newSkeleton.bones.length; i++) {
            if (newSkeleton.bones[i].name === jointName) {
                return newSkeleton.bones[i];
            }
        }

        // Not found, search in gltf nodes
        var nodes = runtime.gltf.nodes;
        for (var nde in nodes) {
            var node: IGLTFNode = nodes[nde];

            if (!node.jointName) {
                continue;
            }

            var children = node.children;
            for (var i = 0; i < children.length; i++) {
                var child: IGLTFNode = runtime.gltf.nodes[children[i]];
                if (!child.jointName) {
                    continue;
                }

                if (child.jointName === jointName) {
                    var mat = configureBoneTransformation(node);
                    var bone = new Bone(node.name, newSkeleton, getParentBone(runtime, skin, node.jointName, newSkeleton), mat);
                    bone.id = nde;
                    return bone;
                }
            }
        }
        */
        return null;
    };
    /**
    * Returns the appropriate root node
    */
    var getNodeToRoot = function (nodesToRoot, id) {
        // TODO: animation schema broken
        /*
        for (var i = 0; i < nodesToRoot.length; i++) {
            var nodeToRoot = nodesToRoot[i];

            for (var j = 0; j < nodeToRoot.node.children.length; j++) {
                var child = nodeToRoot.node.children[j];
                if (child === id) {
                    return nodeToRoot.bone;
                }
            }
        }
        */
        return null;
    };
    /**
    * Returns the node with the joint name
    */
    var getJointNode = function (runtime, jointName) {
        // TODO: animation schema broken
        /*
        var nodes = runtime.nodes;
        var node: IGLTFNode = nodes[jointName];
        if (node) {
            return {
                node: node,
                id: jointName
            };
        }

        for (var nde in nodes) {
            node = nodes[nde];
            if (node.jointName === jointName) {
                return {
                    node: node,
                    id: nde
                };
            }
        }
        */
        return null;
    };
    /**
    * Checks if a nodes is in joints
    */
    var nodeIsInJoints = function (skin, id) {
        // TODO: animation schema broken
        /*
        for (var i = 0; i < skin.jointNames.length; i++) {
            if (skin.jointNames[i] === id) {
                return true;
            }
        }
        */
        return false;
    };
    /**
    * Fills the nodes to root for bones and builds hierarchy
    */
    var getNodesToRoot = function (runtime, newSkeleton, skin, nodesToRoot) {
        // TODO: animation schema broken
        /*
        // Creates nodes for root
        for (var nde in runtime.nodes) {
            var node: IGLTFNode = runtime.nodes[nde];
            var id = nde;

            if (!node.jointName || nodeIsInJoints(skin, node.jointName)) {
                continue;
            }

            // Create node to root bone
            var mat = configureBoneTransformation(node);
            var bone = new Bone(node.name, newSkeleton, null, mat);
            bone.id = id;
            nodesToRoot.push({ bone: bone, node: node, id: id });
        }

        // Parenting
        for (var i = 0; i < nodesToRoot.length; i++) {
            var nodeToRoot = nodesToRoot[i];
            var children = nodeToRoot.node.children;

            for (var j = 0; j < children.length; j++) {
                var child: INodeToRoot = null;

                for (var k = 0; k < nodesToRoot.length; k++) {
                    if (nodesToRoot[k].id === children[j]) {
                        child = nodesToRoot[k];
                        break;
                    }
                }

                if (child) {
                    (<any>child.bone)._parent = nodeToRoot.bone;
                    nodeToRoot.bone.children.push(child.bone);
                }
            }
        }
        */
    };
    /**
    * Imports a skeleton
    */
    var importSkeleton = function (runtime, skin, mesh, newSkeleton, index) {
        // TODO: animation schema broken
        return null;
        /*
        if (!newSkeleton) {
            newSkeleton = new Skeleton(skin.name, "", runtime.scene);
        }

        if (!skin.babylonSkeleton) {
            return newSkeleton;
        }

        // Matrices
        var accessor = runtime.accessors[skin.inverseBindMatrices];
        var buffer = GLTFUtils.GetBufferFromAccessor(runtime, accessor);

        var bindShapeMatrix = Matrix.FromArray(skin.bindShapeMatrix);

        // Find the root bones
        var nodesToRoot: INodeToRoot[] = [];
        var nodesToRootToAdd: Bone[] = [];

        getNodesToRoot(runtime, newSkeleton, skin, nodesToRoot);
        newSkeleton.bones = [];

        if (nodesToRoot.length === 0) {
            newSkeleton.needInitialSkinMatrix = true;
        }

        // Joints
        for (var i = 0; i < skin.jointNames.length; i++) {
            var jointNode = getJointNode(runtime, skin.jointNames[i]);
            var node = jointNode.node;

            if (!node) {
                Tools.Warn("Joint named " + skin.jointNames[i] + " does not exist");
                continue;
            }

            var id = jointNode.id;

            // Optimize, if the bone already exists...
            var existingBone = runtime.scene.getBoneByID(id);
            if (existingBone) {
                newSkeleton.bones.push(existingBone);
                continue;
            }

            // Search for parent bone
            var foundBone = false;
            var parentBone: Bone = null;

            for (var j = 0; j < i; j++) {
                var joint: IGLTFNode = getJointNode(runtime, skin.jointNames[j]).node;

                if (!joint) {
                    Tools.Warn("Joint named " + skin.jointNames[j] + " does not exist when looking for parent");
                    continue;
                }

                var children = joint.children;
                foundBone = false;

                for (var k = 0; k < children.length; k++) {
                    if (children[k] === id) {
                        parentBone = getParentBone(runtime, skin, skin.jointNames[j], newSkeleton);
                        foundBone = true;
                        break;
                    }
                }

                if (foundBone) {
                    break;
                }
            }

            // Create bone
            var mat = configureBoneTransformation(node);

            if (!parentBone && nodesToRoot.length > 0) {
                parentBone = getNodeToRoot(nodesToRoot, id);

                if (parentBone) {
                    if (nodesToRootToAdd.indexOf(parentBone) === -1) {
                        nodesToRootToAdd.push(parentBone);
                    }
                }
            }

            var bone = new Bone(node.jointName, newSkeleton, parentBone, mat);
            bone.id = id;
        }

        // Polish
        var bones = newSkeleton.bones;
        newSkeleton.bones = [];
        
        for (var i = 0; i < skin.jointNames.length; i++) {
            var jointNode: IJointNode = getJointNode(runtime, skin.jointNames[i]);

            if (!jointNode) {
                continue;
            }

            for (var j = 0; j < bones.length; j++) {
                if (bones[j].id === jointNode.id) {
                    newSkeleton.bones.push(bones[j]);
                    break;
                }
            }
        }

        newSkeleton.prepare();

        // Finish
        for (var i = 0; i < nodesToRootToAdd.length; i++) {
            newSkeleton.bones.push(nodesToRootToAdd[i]);
        }

        return newSkeleton;
        */
    };
    /**
    * Imports a mesh and its geometries
    */
    var importMesh = function (runtime, node, mesh) {
        var name = mesh.name || node.name || "mesh" + node.mesh;
        var babylonMesh = node.babylonNode;
        if (!babylonMesh) {
            babylonMesh = new BABYLON.Mesh(name, runtime.babylonScene);
        }
        if (!node.babylonNode) {
            return babylonMesh;
        }
        var multiMat = new BABYLON.MultiMaterial(name, runtime.babylonScene);
        if (!babylonMesh.material) {
            babylonMesh.material = multiMat;
        }
        var vertexData = new BABYLON.VertexData();
        var geometry = new BABYLON.Geometry(name, runtime.babylonScene, vertexData, false, babylonMesh);
        var verticesStarts = [];
        var verticesCounts = [];
        var indexStarts = [];
        var indexCounts = [];
        // Positions, normals and UVs
        for (var index = 0; index < mesh.primitives.length; index++) {
            // Temporary vertex data
            var tempVertexData = new BABYLON.VertexData();
            var primitive = mesh.primitives[index];
            if (primitive.mode !== BABYLON.EMeshPrimitiveMode.TRIANGLES) {
            }
            var attributes = primitive.attributes;
            var accessor = null;
            var buffer = null;
            // Set positions, normal and uvs
            for (var semantic in attributes) {
                // Link accessor and buffer view
                accessor = runtime.gltf.accessors[attributes[semantic]];
                buffer = BABYLON.GLTFUtils.GetBufferFromAccessor(runtime, accessor);
                if (semantic === "NORMAL") {
                    tempVertexData.normals = new Float32Array(buffer.length);
                    tempVertexData.normals.set(buffer);
                }
                else if (semantic === "POSITION") {
                    if (GLTFFileLoader.HomogeneousCoordinates) {
                        tempVertexData.positions = new Float32Array(buffer.length - buffer.length / 4);
                        for (var j = 0; j < buffer.length; j += 4) {
                            tempVertexData.positions[j] = buffer[j];
                            tempVertexData.positions[j + 1] = buffer[j + 1];
                            tempVertexData.positions[j + 2] = buffer[j + 2];
                        }
                    }
                    else {
                        tempVertexData.positions = new Float32Array(buffer.length);
                        tempVertexData.positions.set(buffer);
                    }
                    verticesCounts.push(tempVertexData.positions.length);
                }
                else if (semantic.indexOf("TEXCOORD_") !== -1) {
                    var channel = Number(semantic.split("_")[1]);
                    var uvKind = BABYLON.VertexBuffer.UVKind + (channel === 0 ? "" : (channel + 1));
                    var uvs = new Float32Array(buffer.length);
                    uvs.set(buffer);
                    normalizeUVs(uvs);
                    tempVertexData.set(uvs, uvKind);
                }
                else if (semantic === "JOINT") {
                    tempVertexData.matricesIndices = new Float32Array(buffer.length);
                    tempVertexData.matricesIndices.set(buffer);
                }
                else if (semantic === "WEIGHT") {
                    tempVertexData.matricesWeights = new Float32Array(buffer.length);
                    tempVertexData.matricesWeights.set(buffer);
                }
                else if (semantic === "COLOR") {
                    tempVertexData.colors = new Float32Array(buffer.length);
                    tempVertexData.colors.set(buffer);
                }
            }
            // Indices
            accessor = runtime.gltf.accessors[primitive.indices];
            if (accessor) {
                buffer = BABYLON.GLTFUtils.GetBufferFromAccessor(runtime, accessor);
                tempVertexData.indices = new Int32Array(buffer.length);
                tempVertexData.indices.set(buffer);
                indexCounts.push(tempVertexData.indices.length);
            }
            else {
                // Set indices on the fly
                var indices = [];
                for (var j = 0; j < tempVertexData.positions.length / 3; j++) {
                    indices.push(j);
                }
                tempVertexData.indices = new Int32Array(indices);
                indexCounts.push(tempVertexData.indices.length);
            }
            vertexData.merge(tempVertexData);
            tempVertexData = undefined;
            // Sub material
            var material = runtime.gltf.materials[primitive.material].babylonMaterial;
            multiMat.subMaterials.push(material === undefined ? BABYLON.GLTFUtils.GetDefaultMaterial(runtime.babylonScene) : material);
            // Update vertices start and index start
            verticesStarts.push(verticesStarts.length === 0 ? 0 : verticesStarts[verticesStarts.length - 1] + verticesCounts[verticesCounts.length - 2]);
            indexStarts.push(indexStarts.length === 0 ? 0 : indexStarts[indexStarts.length - 1] + indexCounts[indexCounts.length - 2]);
        }
        // Apply geometry
        geometry.setAllVerticesData(vertexData, false);
        babylonMesh.computeWorldMatrix(true);
        // Apply submeshes
        babylonMesh.subMeshes = [];
        for (var index = 0; index < mesh.primitives.length; index++) {
            if (mesh.primitives[index].mode !== BABYLON.EMeshPrimitiveMode.TRIANGLES) {
            }
            var subMesh = new BABYLON.SubMesh(index, verticesStarts[index], verticesCounts[index], indexStarts[index], indexCounts[index], babylonMesh, babylonMesh, true);
        }
        // Finish
        return babylonMesh;
    };
    /**
    * Configure node transformation from position, rotation and scaling
    */
    var configureNode = function (newNode, position, rotation, scaling) {
        if (newNode.position) {
            newNode.position = position;
        }
        if (newNode.rotationQuaternion || newNode.rotation) {
            newNode.rotationQuaternion = rotation;
        }
        if (newNode.scaling) {
            newNode.scaling = scaling;
        }
    };
    /**
    * Configures node transformation
    */
    var configureNodeFromGLTFNode = function (newNode, node, parent) {
        if (node.matrix) {
            var position = new BABYLON.Vector3(0, 0, 0);
            var rotation = new BABYLON.Quaternion();
            var scaling = new BABYLON.Vector3(0, 0, 0);
            var mat = BABYLON.Matrix.FromArray(node.matrix);
            mat.decompose(scaling, rotation, position);
            configureNode(newNode, position, rotation, scaling);
            newNode.computeWorldMatrix(true);
        }
        else {
            configureNode(newNode, BABYLON.Vector3.FromArray(node.translation || [0, 0, 0]), BABYLON.Quaternion.FromArray(node.rotation || [0, 0, 0, 1]), BABYLON.Vector3.FromArray(node.scale || [1, 1, 1]));
        }
    };
    /**
    * Imports a node
    */
    var importNode = function (runtime, node, parent) {
        var babylonNode = null;
        if (runtime.importOnlyMeshes && (node.skin !== undefined || node.mesh !== undefined)) {
            if (runtime.importMeshesNames.length > 0 && runtime.importMeshesNames.indexOf(node.name) === -1) {
                return null;
            }
        }
        // Meshes
        if (node.skin !== undefined) {
        }
        else if (node.mesh !== undefined) {
            babylonNode = importMesh(runtime, node, runtime.gltf.meshes[node.mesh]);
        }
        else if (node.camera !== undefined && !node.babylonNode && !runtime.importOnlyMeshes) {
            var camera = runtime.gltf.cameras[node.camera];
            if (camera) {
                if (camera.type === "orthographic") {
                    var orthographicCamera = camera.orthographic;
                    var orthoCamera = new BABYLON.FreeCamera(node.name || "camera" + node.camera, BABYLON.Vector3.Zero(), runtime.babylonScene);
                    orthoCamera.name = node.name;
                    orthoCamera.mode = BABYLON.Camera.ORTHOGRAPHIC_CAMERA;
                    orthoCamera.attachControl(runtime.babylonScene.getEngine().getRenderingCanvas());
                    babylonNode = orthoCamera;
                }
                else if (camera.type === "perspective") {
                    var perspectiveCamera = camera.perspective;
                    var persCamera = new BABYLON.FreeCamera(node.name || "camera" + node.camera, BABYLON.Vector3.Zero(), runtime.babylonScene);
                    persCamera.name = node.name;
                    persCamera.attachControl(runtime.babylonScene.getEngine().getRenderingCanvas());
                    if (!perspectiveCamera.aspectRatio) {
                        perspectiveCamera.aspectRatio = runtime.babylonScene.getEngine().getRenderWidth() / runtime.babylonScene.getEngine().getRenderHeight();
                    }
                    if (perspectiveCamera.znear && perspectiveCamera.zfar) {
                        persCamera.maxZ = perspectiveCamera.zfar;
                        persCamera.minZ = perspectiveCamera.znear;
                    }
                    babylonNode = persCamera;
                }
            }
        }
        // Empty node
        if (node.jointName === undefined) {
            if (node.babylonNode) {
                return node.babylonNode;
            }
            else if (babylonNode === null) {
                var dummy = new BABYLON.Mesh(node.name, runtime.babylonScene);
                node.babylonNode = dummy;
                babylonNode = dummy;
            }
        }
        if (babylonNode !== null) {
            if (babylonNode instanceof BABYLON.Mesh) {
                configureNodeFromGLTFNode(babylonNode, node, parent);
            }
            else {
                var translation = node.translation || [0, 0, 0];
                var rotation = node.rotation || [0, 0, 0, 1];
                var scale = node.scale || [1, 1, 1];
                configureNode(babylonNode, BABYLON.Vector3.FromArray(translation), BABYLON.Quaternion.RotationAxis(BABYLON.Vector3.FromArray(rotation).normalize(), rotation[3]), BABYLON.Vector3.FromArray(scale));
            }
            babylonNode.updateCache(true);
            node.babylonNode = babylonNode;
        }
        return babylonNode;
    };
    /**
    * Traverses nodes and creates them
    */
    var traverseNodes = function (runtime, index, parent, meshIncluded) {
        var node = runtime.gltf.nodes[index];
        var newNode = null;
        if (runtime.importOnlyMeshes && !meshIncluded) {
            if (runtime.importMeshesNames.indexOf(node.name) !== -1 || runtime.importMeshesNames.length === 0) {
                meshIncluded = true;
            }
            else {
                meshIncluded = false;
            }
        }
        else {
            meshIncluded = true;
        }
        if (node.jointName === undefined && meshIncluded) {
            newNode = importNode(runtime, node, parent);
            if (newNode !== null) {
                newNode.parent = parent;
            }
        }
        if (node.children) {
            for (var i = 0; i < node.children.length; i++) {
                traverseNodes(runtime, node.children[i], newNode, meshIncluded);
            }
        }
    };
    var importScene = function (runtime) {
        var scene = runtime.gltf.scene || 0;
        var scenes = runtime.gltf.scenes;
        if (scenes) {
            var nodes = scenes[scene].nodes;
            for (var i = 0; i < nodes.length; i++) {
                traverseNodes(runtime, nodes[i], null);
            }
        }
        else {
            for (var i = 0; i < runtime.gltf.nodes.length; i++) {
                traverseNodes(runtime, i, null);
            }
        }
    };
    /**
    * do stuff after buffers are loaded (e.g. hook up materials, load animations, etc.)
    */
    var postLoad = function (runtime) {
        importScene(runtime);
        // Set animations
        loadAnimations(runtime);
        for (var i = 0; i < runtime.babylonScene.skeletons.length; i++) {
            var skeleton = runtime.babylonScene.skeletons[i];
            runtime.babylonScene.beginAnimation(skeleton, 0, Number.MAX_VALUE, true, 1.0);
        }
    };
    var importMaterials = function (runtime) {
        for (var i = 0; i < runtime.gltf.materials.length; i++) {
            BABYLON.GLTFFileLoaderExtension.LoadMaterial(runtime, i);
        }
    };
    var BinaryReader = (function () {
        function BinaryReader(arrayBuffer) {
            this._arrayBuffer = arrayBuffer;
            this._dataView = new DataView(arrayBuffer);
            this._byteOffset = 0;
        }
        BinaryReader.prototype.getPosition = function () {
            return this._byteOffset;
        };
        BinaryReader.prototype.getLength = function () {
            return this._arrayBuffer.byteLength;
        };
        BinaryReader.prototype.readUint32 = function () {
            var value = this._dataView.getUint32(this._byteOffset, true);
            this._byteOffset += 4;
            return value;
        };
        BinaryReader.prototype.readUint8Array = function (length) {
            var value = new Uint8Array(this._arrayBuffer, this._byteOffset, length);
            this._byteOffset += length;
            return value;
        };
        return BinaryReader;
    }());
    /**
    * glTF File Loader Plugin
    */
    var GLTFFileLoader = (function () {
        function GLTFFileLoader() {
            /**
            * Public members
            */
            this.extensions = {
                ".gltf": { isBinary: false },
                ".glb": { isBinary: true }
            };
        }
        GLTFFileLoader.RegisterExtension = function (extension) {
            if (GLTFFileLoader.Extensions[extension.name]) {
                BABYLON.Tools.Error("Tool with the same name \"" + extension.name + "\" already exists");
                return;
            }
            GLTFFileLoader.Extensions[extension.name] = extension;
        };
        GLTFFileLoader.LoadMaterial = function (runtime, index) {
            var material = runtime.gltf.materials[index];
            if (!material)
                return null;
            material.babylonMaterial = new BABYLON.PBRMaterial(material.name || "mat" + index, runtime.babylonScene);
            material.babylonMaterial.sideOrientation = BABYLON.Material.CounterClockWiseSideOrientation;
            material.babylonMaterial.useScalarInLinearSpace = true;
            return material;
        };
        GLTFFileLoader.LoadCommonMaterialProperties = function (runtime, material) {
            if (material.normalTexture) {
                GLTFFileLoader.LoadTextureAsync(runtime, material.normalTexture, function (babylonTexture) {
                    material.babylonMaterial.bumpTexture = babylonTexture;
                    if (material.normalTexture.scale !== undefined) {
                        material.babylonMaterial.bumpTexture.level = material.normalTexture.scale;
                    }
                }, function () { return BABYLON.Tools.Warn("Failed to load normal texture"); });
            }
            if (material.occlusionTexture) {
                GLTFFileLoader.LoadTextureAsync(runtime, material.occlusionTexture, function (babylonTexture) {
                    material.babylonMaterial.ambientTexture = babylonTexture;
                    if (material.occlusionTexture.strength !== undefined) {
                        material.babylonMaterial.ambientTextureStrength = material.occlusionTexture.strength;
                    }
                }, function () { return BABYLON.Tools.Warn("Failed to load normal texture"); });
            }
            material.babylonMaterial.useEmissiveAsIllumination = (material.emissiveFactor || material.emissiveTexture) ? true : false;
            material.babylonMaterial.emissiveColor = material.emissiveFactor ? BABYLON.Color3.FromArray(material.emissiveFactor) : new BABYLON.Color3(0, 0, 0);
            if (material.emissiveTexture) {
                GLTFFileLoader.LoadTextureAsync(runtime, material.emissiveTexture, function (babylonTexture) {
                    material.babylonMaterial.emissiveTexture = babylonTexture;
                }, function () { return BABYLON.Tools.Warn("Failed to load normal texture"); });
            }
        };
        GLTFFileLoader.LoadAlphaProperties = function (runtime, material) {
            if (material.alphaMode) {
                material.babylonMaterial.albedoTexture.hasAlpha = true;
                switch (material.alphaMode) {
                    case "MASK":
                        material.babylonMaterial.useAlphaFromAlbedoTexture = false;
                        material.babylonMaterial.alphaMode = BABYLON.Engine.ALPHA_DISABLE;
                        break;
                    case "BLEND":
                        material.babylonMaterial.useAlphaFromAlbedoTexture = true;
                        material.babylonMaterial.alphaMode = BABYLON.Engine.ALPHA_COMBINE;
                        break;
                    default:
                        BABYLON.Tools.Error("Invalid alpha mode '" + material.alphaMode + "'");
                }
            }
        };
        GLTFFileLoader.LoadTextureAsync = function (runtime, textureInfo, onSuccess, onError) {
            var texture = runtime.gltf.textures[textureInfo.index];
            if (!texture || texture.source === undefined || texture.sampler === undefined) {
                onError();
                return;
            }
            if (texture.babylonTexture) {
                onSuccess(texture.babylonTexture);
                return;
            }
            var source = runtime.gltf.images[texture.source];
            if (source.uri === undefined) {
                var bufferView = runtime.gltf.bufferViews[source.bufferView];
                var buffer = BABYLON.GLTFUtils.GetBufferFromBufferView(runtime, bufferView, 0, bufferView.byteLength, BABYLON.EComponentType.UNSIGNED_BYTE);
                GLTFFileLoader.CreateTextureAsync(runtime, textureInfo, buffer, source.mimeType, onSuccess, onError);
            }
            else if (BABYLON.GLTFUtils.IsBase64(source.uri)) {
                GLTFFileLoader.CreateTextureAsync(runtime, textureInfo, new Uint8Array(BABYLON.GLTFUtils.DecodeBase64(source.uri)), source.mimeType, onSuccess, onError);
            }
            else {
                BABYLON.Tools.LoadFile(runtime.rootUrl + source.uri, function (data) {
                    GLTFFileLoader.CreateTextureAsync(runtime, textureInfo, new Uint8Array(data), source.mimeType, onSuccess, onError);
                }, null, null, true, onError);
            }
        };
        GLTFFileLoader.CreateTextureAsync = function (runtime, textureInfo, buffer, mimeType, onSuccess, onError) {
            var texture = runtime.gltf.textures[textureInfo.index];
            if (!texture || texture.source === undefined || texture.sampler === undefined) {
                onError();
                return;
            }
            if (texture.babylonTexture) {
                onSuccess(texture.babylonTexture);
                return;
            }
            var sampler = runtime.gltf.samplers[texture.sampler];
            var createMipMaps = (sampler.minFilter === BABYLON.ETextureMinFilter.NEAREST_MIPMAP_NEAREST) ||
                (sampler.minFilter === BABYLON.ETextureMinFilter.NEAREST_MIPMAP_LINEAR) ||
                (sampler.minFilter === BABYLON.ETextureMinFilter.LINEAR_MIPMAP_NEAREST) ||
                (sampler.minFilter === BABYLON.ETextureMinFilter.LINEAR_MIPMAP_LINEAR);
            var samplingMode = BABYLON.Texture.BILINEAR_SAMPLINGMODE;
            var blob = new Blob([buffer], { type: mimeType });
            var blobURL = URL.createObjectURL(blob);
            var revokeBlobURL = function () { return URL.revokeObjectURL(blobURL); };
            texture.babylonTexture = new BABYLON.Texture(blobURL, runtime.babylonScene, !createMipMaps, true, samplingMode, revokeBlobURL, revokeBlobURL);
            texture.babylonTexture.coordinatesIndex = textureInfo.texCoord === undefined ? 0 : textureInfo.texCoord;
            texture.babylonTexture.wrapU = BABYLON.GLTFUtils.GetWrapMode(sampler.wrapS);
            texture.babylonTexture.wrapV = BABYLON.GLTFUtils.GetWrapMode(sampler.wrapT);
            texture.babylonTexture.name = texture.name;
            onSuccess(texture.babylonTexture);
        };
        /**
        * Import meshes
        */
        GLTFFileLoader.prototype.importMeshAsync = function (meshesNames, scene, data, rootUrl, onSuccess, onError) {
            scene.useRightHandedSystem = true;
            var runtime = this._createRuntime(scene, data, rootUrl, true);
            if (!runtime) {
                if (onError)
                    onError();
                return;
            }
            if (meshesNames === "") {
                runtime.importMeshesNames = [];
            }
            else if (typeof meshesNames === "string") {
                runtime.importMeshesNames = [meshesNames];
            }
            else if (meshesNames && !(meshesNames instanceof Array)) {
                runtime.importMeshesNames = [meshesNames];
            }
            else {
                runtime.importMeshesNames = [];
                BABYLON.Tools.Warn("Argument meshesNames must be of type string or string[]");
            }
            // Load scene
            importScene(runtime);
            var meshes = [];
            var skeletons = [];
            // Fill arrays of meshes and skeletons
            for (var nde in runtime.gltf.nodes) {
                var node = runtime.gltf.nodes[nde];
                if (node.babylonNode instanceof BABYLON.AbstractMesh) {
                    meshes.push(node.babylonNode);
                }
            }
            for (var skl in runtime.gltf.skins) {
                var skin = runtime.gltf.skins[skl];
                if (skin.babylonSkeleton instanceof BABYLON.Skeleton) {
                    skeletons.push(skin.babylonSkeleton);
                }
            }
            // Load buffers, materials, etc.
            this._loadBuffersAsync(runtime, function () {
                importMaterials(runtime);
                postLoad(runtime);
                if (!GLTFFileLoader.IncrementalLoading && onSuccess) {
                    onSuccess(meshes, null, skeletons);
                }
            }, onError);
            if (GLTFFileLoader.IncrementalLoading && onSuccess) {
                onSuccess(meshes, null, skeletons);
            }
            return true;
        };
        /**
        * Load scene
        */
        GLTFFileLoader.prototype.loadAsync = function (scene, data, rootUrl, onSuccess, onError) {
            scene.useRightHandedSystem = true;
            var runtime = this._createRuntime(scene, data, rootUrl, false);
            if (!runtime) {
                if (onError)
                    onError();
                return;
            }
            importScene(runtime);
            this._loadBuffersAsync(runtime, function () {
                importMaterials(runtime);
                postLoad(runtime);
                if (!GLTFFileLoader.IncrementalLoading) {
                    onSuccess();
                }
            }, onError);
            if (GLTFFileLoader.IncrementalLoading) {
                onSuccess();
            }
            return true;
        };
        GLTFFileLoader.prototype._loadBuffersAsync = function (runtime, onSuccess, onError) {
            var _this = this;
            if (runtime.gltf.buffers.length == 0) {
                onSuccess();
                return;
            }
            var loadedCount = 0;
            runtime.gltf.buffers.forEach(function (buffer, index) {
                _this._loadBufferAsync(runtime, index, function () {
                    if (++loadedCount >= runtime.gltf.buffers.length) {
                        onSuccess();
                    }
                }, onError);
            });
        };
        GLTFFileLoader.prototype._loadBufferAsync = function (runtime, index, onSuccess, onError) {
            var buffer = runtime.gltf.buffers[index];
            if (buffer.uri === undefined) {
                // buffer.loadedBufferView should already be set in _parseBinary
                onSuccess();
            }
            else if (BABYLON.GLTFUtils.IsBase64(buffer.uri)) {
                var data = BABYLON.GLTFUtils.DecodeBase64(buffer.uri);
                setTimeout(function () {
                    buffer.loadedBufferView = new Uint8Array(data);
                    onSuccess();
                });
            }
            else {
                BABYLON.Tools.LoadFile(runtime.rootUrl + buffer.uri, function (data) {
                    buffer.loadedBufferView = new Uint8Array(data);
                    onSuccess();
                }, null, null, true, onError);
            }
        };
        GLTFFileLoader.prototype._createRuntime = function (scene, data, rootUrl, importOnlyMeshes) {
            var runtime = {
                gltf: null,
                babylonScene: scene,
                rootUrl: rootUrl,
                importOnlyMeshes: importOnlyMeshes,
                dummyNodes: []
            };
            if (data instanceof ArrayBuffer) {
                if (!this._parseBinary(runtime, data)) {
                    return null;
                }
            }
            else {
                runtime.gltf = JSON.parse(data);
            }
            BABYLON.GLTFFileLoaderExtension.PostCreateRuntime(runtime);
            return runtime;
        };
        GLTFFileLoader.prototype._parseBinary = function (runtime, data) {
            var binaryReader = new BinaryReader(data);
            var magic = BABYLON.GLTFUtils.DecodeBufferToText(binaryReader.readUint8Array(4));
            if (magic != "glTF") {
                BABYLON.Tools.Error("Unexpected magic: " + magic);
                return false;
            }
            var version = binaryReader.readUint32();
            if (version != 1) {
                BABYLON.Tools.Error("Unsupported version: " + version);
                return false;
            }
            var length = binaryReader.readUint32();
            if (length != data.byteLength) {
                BABYLON.Tools.Error("Length in header does not match actual data length: " + length + " != " + data.byteLength);
                return false;
            }
            var contentLength = binaryReader.readUint32();
            var contentFormat = binaryReader.readUint32();
            switch (contentFormat) {
                case BABYLON.EBinaryContentFormat.JSON:
                    var jsonText = BABYLON.GLTFUtils.DecodeBufferToText(binaryReader.readUint8Array(contentLength));
                    runtime.gltf = JSON.parse(jsonText);
                    break;
                default:
                    BABYLON.Tools.Error("Unexpected content format: " + contentFormat);
                    return false;
            }
            var buffers = runtime.gltf.buffers;
            if (buffers.length > 0 && buffers[0].uri === undefined) {
                buffers[0].loadedBufferView = binaryReader.readUint8Array(buffers[0].byteLength);
            }
            if (binaryReader.getPosition() < binaryReader.getLength()) {
                BABYLON.Tools.Error("Unexpected extra bytes at end of data");
                return false;
            }
            return true;
        };
        ;
        return GLTFFileLoader;
    }());
    /**
    * Private members
    */
    // None
    /**
    * Static members
    */
    GLTFFileLoader.HomogeneousCoordinates = false;
    GLTFFileLoader.IncrementalLoading = true;
    GLTFFileLoader.Extensions = {};
    GLTFFileLoader.LoadMetallicRoughnessMaterialProperties = function (runtime, material) {
        var properties = material.pbrMetallicRoughness;
        if (!properties)
            return;
        material.babylonMaterial.albedoColor = properties.baseColorFactor ? BABYLON.Color3.FromArray(properties.baseColorFactor) : new BABYLON.Color3(1, 1, 1);
        material.babylonMaterial.metallic = properties.metallicFactor === undefined ? 1 : properties.metallicFactor;
        material.babylonMaterial.roughness = properties.roughnessFactor === undefined ? 1 : properties.roughnessFactor;
        if (properties.baseColorTexture) {
            GLTFFileLoader.LoadTextureAsync(runtime, properties.baseColorTexture, function (texture) {
                material.babylonMaterial.albedoTexture = texture;
                GLTFFileLoader.LoadAlphaProperties(runtime, material);
            }, function () {
                BABYLON.Tools.Warn("Failed to load base color texture");
            });
        }
        if (properties.metallicRoughnessTexture) {
            GLTFFileLoader.LoadTextureAsync(runtime, properties.metallicRoughnessTexture, function (texture) {
                material.babylonMaterial.metallicTexture = texture;
                material.babylonMaterial.useRoughnessFromMetallicTextureGreen = true;
                material.babylonMaterial.useRoughnessFromMetallicTextureAlpha = false;
            }, function () {
                BABYLON.Tools.Warn("Failed to load metallic roughness texture");
            });
        }
    };
    BABYLON.GLTFFileLoader = GLTFFileLoader;
    ;
    BABYLON.SceneLoader.RegisterPlugin(new GLTFFileLoader());
})(BABYLON || (BABYLON = {}));

//# sourceMappingURL=babylon.glTFFileLoader.js.map

/// <reference path="../../../dist/preview release/babylon.d.ts"/>
var BABYLON;
(function (BABYLON) {
    /**
    * Utils functions for GLTF
    */
    var GLTFUtils = (function () {
        function GLTFUtils() {
        }
        /**
        * If the uri is a base64 string
        * @param uri: the uri to test
        */
        GLTFUtils.IsBase64 = function (uri) {
            return uri.length < 5 ? false : uri.substr(0, 5) === "data:";
        };
        /**
        * Decode the base64 uri
        * @param uri: the uri to decode
        */
        GLTFUtils.DecodeBase64 = function (uri) {
            var decodedString = atob(uri.split(",")[1]);
            var bufferLength = decodedString.length;
            var bufferView = new Uint8Array(new ArrayBuffer(bufferLength));
            for (var i = 0; i < bufferLength; i++) {
                bufferView[i] = decodedString.charCodeAt(i);
            }
            return bufferView.buffer;
        };
        /**
        * Returns the wrap mode of the texture
        * @param mode: the mode value
        */
        GLTFUtils.GetWrapMode = function (mode) {
            switch (mode) {
                case BABYLON.ETextureWrapMode.CLAMP_TO_EDGE: return BABYLON.Texture.CLAMP_ADDRESSMODE;
                case BABYLON.ETextureWrapMode.MIRRORED_REPEAT: return BABYLON.Texture.MIRROR_ADDRESSMODE;
                case BABYLON.ETextureWrapMode.REPEAT: return BABYLON.Texture.WRAP_ADDRESSMODE;
                default: return BABYLON.Texture.WRAP_ADDRESSMODE;
            }
        };
        /**
         * Returns the byte stride giving an accessor
         * @param accessor: the GLTF accessor objet
         */
        GLTFUtils.GetByteStrideFromType = function (accessor) {
            // Needs this function since "byteStride" isn't requiered in glTF format
            var type = accessor.type;
            switch (type) {
                case "VEC2": return 2;
                case "VEC3": return 3;
                case "VEC4": return 4;
                case "MAT2": return 4;
                case "MAT3": return 9;
                case "MAT4": return 16;
                default: return 1;
            }
        };
        /**
         * Returns the texture filter mode giving a mode value
         * @param mode: the filter mode value
         */
        GLTFUtils.GetTextureFilterMode = function (mode) {
            switch (mode) {
                case BABYLON.ETextureMinFilter.LINEAR:
                case BABYLON.ETextureMinFilter.LINEAR_MIPMAP_NEAREST:
                case BABYLON.ETextureMinFilter.LINEAR_MIPMAP_LINEAR: return BABYLON.Texture.TRILINEAR_SAMPLINGMODE;
                case BABYLON.ETextureMinFilter.NEAREST:
                case BABYLON.ETextureMinFilter.NEAREST_MIPMAP_NEAREST: return BABYLON.Texture.NEAREST_SAMPLINGMODE;
                default: return BABYLON.Texture.BILINEAR_SAMPLINGMODE;
            }
        };
        GLTFUtils.GetBufferFromBufferView = function (runtime, bufferView, byteOffset, byteLength, componentType) {
            var byteOffset = bufferView.byteOffset + byteOffset;
            var loadedBufferView = runtime.gltf.buffers[bufferView.buffer].loadedBufferView;
            if (byteOffset + byteLength > loadedBufferView.byteLength) {
                throw new Error("Buffer access is out of range");
            }
            var buffer = loadedBufferView.buffer;
            byteOffset += loadedBufferView.byteOffset;
            switch (componentType) {
                case BABYLON.EComponentType.BYTE: return new Int8Array(buffer, byteOffset, byteLength);
                case BABYLON.EComponentType.UNSIGNED_BYTE: return new Uint8Array(buffer, byteOffset, byteLength);
                case BABYLON.EComponentType.SHORT: return new Int16Array(buffer, byteOffset, byteLength);
                case BABYLON.EComponentType.UNSIGNED_SHORT: return new Uint16Array(buffer, byteOffset, byteLength);
                default: return new Float32Array(buffer, byteOffset, byteLength);
            }
        };
        /**
         * Returns a buffer from its accessor
         * @param runtime: the GLTF runtime
         * @param accessor: the GLTF accessor
         */
        GLTFUtils.GetBufferFromAccessor = function (runtime, accessor) {
            var bufferView = runtime.gltf.bufferViews[accessor.bufferView];
            var byteLength = accessor.count * GLTFUtils.GetByteStrideFromType(accessor);
            return GLTFUtils.GetBufferFromBufferView(runtime, bufferView, accessor.byteOffset, byteLength, accessor.componentType);
        };
        /**
         * Decodes a buffer view into a string
         * @param view: the buffer view
         */
        GLTFUtils.DecodeBufferToText = function (view) {
            var result = "";
            var length = view.byteLength;
            for (var i = 0; i < length; ++i) {
                result += String.fromCharCode(view[i]);
            }
            return result;
        };
        /**
         * Returns the default material of gltf.
         * @param scene: the Babylon.js scene
         */
        GLTFUtils.GetDefaultMaterial = function (scene) {
            if (!GLTFUtils._DefaultMaterial) {
                var material = new BABYLON.PBRMaterial("gltf_default", scene);
                material.sideOrientation = BABYLON.Material.CounterClockWiseSideOrientation;
                material.albedoColor = new BABYLON.Color3(0.5, 0.5, 0.5);
                material.metallic = 0;
                material.roughness = 0.5;
                GLTFUtils._DefaultMaterial = material;
            }
            return GLTFUtils._DefaultMaterial;
        };
        return GLTFUtils;
    }());
    // The GLTF default material
    GLTFUtils._DefaultMaterial = null;
    BABYLON.GLTFUtils = GLTFUtils;
})(BABYLON || (BABYLON = {}));

//# sourceMappingURL=babylon.glTFFileLoaderUtils.js.map

/// <reference path="../../../dist/preview release/babylon.d.ts"/>
var BABYLON;
(function (BABYLON) {
    var GLTFFileLoaderExtension = (function () {
        function GLTFFileLoaderExtension(name) {
            this._name = name;
        }
        Object.defineProperty(GLTFFileLoaderExtension.prototype, "name", {
            get: function () {
                return this._name;
            },
            enumerable: true,
            configurable: true
        });
        GLTFFileLoaderExtension.prototype.postCreateRuntime = function (runtime) { };
        // Return true to stop other extensions from loading materials.
        GLTFFileLoaderExtension.prototype.loadMaterial = function (runtime, index) { return false; };
        // ---------
        // Utilities
        // ---------
        GLTFFileLoaderExtension.PostCreateRuntime = function (runtime) {
            for (var extensionName in BABYLON.GLTFFileLoader.Extensions) {
                var extension = BABYLON.GLTFFileLoader.Extensions[extensionName];
                extension.postCreateRuntime(runtime);
            }
        };
        GLTFFileLoaderExtension.LoadMaterial = function (runtime, index) {
            for (var extensionName in BABYLON.GLTFFileLoader.Extensions) {
                var extension = BABYLON.GLTFFileLoader.Extensions[extensionName];
                if (extension.loadMaterial(runtime, index)) {
                    return;
                }
            }
            var material = BABYLON.GLTFFileLoader.LoadMaterial(runtime, index);
            if (material) {
                BABYLON.GLTFFileLoader.LoadMetallicRoughnessMaterialProperties(runtime, material);
                BABYLON.GLTFFileLoader.LoadCommonMaterialProperties(runtime, material);
            }
        };
        return GLTFFileLoaderExtension;
    }());
    BABYLON.GLTFFileLoaderExtension = GLTFFileLoaderExtension;
})(BABYLON || (BABYLON = {}));

//# sourceMappingURL=babylon.glTFFileLoaderExtension.js.map

/// <reference path="../../../dist/preview release/babylon.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BABYLON;
(function (BABYLON) {
    ;
    ;
    ;
    var GLTFMaterialsCommonExtension = (function (_super) {
        __extends(GLTFMaterialsCommonExtension, _super);
        function GLTFMaterialsCommonExtension() {
            return _super.call(this, "KHR_materials_common") || this;
        }
        GLTFMaterialsCommonExtension.prototype.postCreateRuntime = function (runtime) {
            if (!runtime.gltf.extensions)
                return;
            var extension = runtime.gltf.extensions[this.name];
            if (!extension)
                return;
            // Create lights
            var lights = extension.lights;
            if (lights) {
                for (var thing in lights) {
                    var light = lights[thing];
                    switch (light.type) {
                        case "ambient":
                            var ambientLight = new BABYLON.HemisphericLight(light.name, new BABYLON.Vector3(0, 1, 0), runtime.babylonScene);
                            var ambient = light.ambient;
                            ambientLight.diffuse = BABYLON.Color3.FromArray(ambient.color || [1, 1, 1]);
                            break;
                        case "point":
                            var pointLight = new BABYLON.PointLight(light.name, new BABYLON.Vector3(10, 10, 10), runtime.babylonScene);
                            var point = light.point;
                            pointLight.diffuse = BABYLON.Color3.FromArray(point.color || [1, 1, 1]);
                            break;
                        case "directional":
                            var dirLight = new BABYLON.DirectionalLight(light.name, new BABYLON.Vector3(0, -1, 0), runtime.babylonScene);
                            var directional = light.directional;
                            dirLight.diffuse = BABYLON.Color3.FromArray(directional.color || [1, 1, 1]);
                            break;
                        case "spot":
                            var spot = light.spot;
                            var spotLight = new BABYLON.SpotLight(light.name, new BABYLON.Vector3(0, 10, 0), new BABYLON.Vector3(0, -1, 0), light.spot.fallOffAngle || Math.PI, light.spot.fallOffExponent || 0.0, runtime.babylonScene);
                            spotLight.diffuse = BABYLON.Color3.FromArray(spot.color || [1, 1, 1]);
                            break;
                        default:
                            BABYLON.Tools.Warn("GLTF Materials Common extension: light type \"" + light.type + "\” not supported");
                            break;
                    }
                }
            }
        };
        GLTFMaterialsCommonExtension.prototype.loadMaterial = function (runtime, index) {
            var material = runtime.gltf.materials[index];
            if (!material || !material.extensions)
                return false;
            var extension = material.extensions[this.name];
            if (!extension)
                return false;
            var standardMaterial = new BABYLON.StandardMaterial(material.name || "mat" + index, runtime.babylonScene);
            standardMaterial.sideOrientation = BABYLON.Material.CounterClockWiseSideOrientation;
            if (extension.technique === "CONSTANT") {
                standardMaterial.disableLighting = true;
            }
            standardMaterial.backFaceCulling = extension.doubleSided === undefined ? false : !extension.doubleSided;
            standardMaterial.alpha = extension.values.transparency === undefined ? 1.0 : extension.values.transparency;
            standardMaterial.specularPower = extension.values.shininess === undefined ? 0.0 : extension.values.shininess;
            /*
            // Ambient
            if (typeof extension.values.ambient === "string") {
                this._loadTexture(runtime, extension.values.ambient, standardMaterial, "ambientTexture", onError);
            }
            else {
                standardMaterial.ambientColor = Color3.FromArray(extension.values.ambient || [0, 0, 0]);
            }

            // Diffuse
            if (typeof extension.values.diffuse === "string") {
                this._loadTexture(runtime, extension.values.diffuse, standardMaterial, "diffuseTexture", onError);
            }
            else {
                standardMaterial.diffuseColor = Color3.FromArray(extension.values.diffuse || [0, 0, 0]);
            }

            // Emission
            if (typeof extension.values.emission === "string") {
                this._loadTexture(runtime, extension.values.emission, standardMaterial, "emissiveTexture", onError);
            }
            else {
                standardMaterial.emissiveColor = Color3.FromArray(extension.values.emission || [0, 0, 0]);
            }

            // Specular
            if (typeof extension.values.specular === "string") {
                this._loadTexture(runtime, extension.values.specular, standardMaterial, "specularTexture", onError);
            }
            else {
                standardMaterial.specularColor = Color3.FromArray(extension.values.specular || [0, 0, 0]);
            }
            */
            return true;
        };
        return GLTFMaterialsCommonExtension;
    }(BABYLON.GLTFFileLoaderExtension));
    BABYLON.GLTFMaterialsCommonExtension = GLTFMaterialsCommonExtension;
    BABYLON.GLTFFileLoader.RegisterExtension(new GLTFMaterialsCommonExtension());
})(BABYLON || (BABYLON = {}));

//# sourceMappingURL=babylon.glTFMaterialsCommonExtension.js.map

/// <reference path="../../../dist/preview release/babylon.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BABYLON;
(function (BABYLON) {
    var GLTFMaterialsPbrSpecularGlossinessExtension = (function (_super) {
        __extends(GLTFMaterialsPbrSpecularGlossinessExtension, _super);
        function GLTFMaterialsPbrSpecularGlossinessExtension() {
            return _super.call(this, "KHR_materials_pbrSpecularGlossiness") || this;
        }
        GLTFMaterialsPbrSpecularGlossinessExtension.prototype.loadMaterial = function (runtime, index) {
            var material = BABYLON.GLTFFileLoader.LoadMaterial(runtime, index);
            if (!material || !material.extensions)
                return false;
            var properties = material.extensions[this.name];
            if (!properties)
                return false;
            material.babylonMaterial.albedoColor = properties.diffuseFactor ? BABYLON.Color3.FromArray(properties.diffuseFactor) : new BABYLON.Color3(1, 1, 1);
            material.babylonMaterial.reflectivityColor = properties.specularFactor ? BABYLON.Color3.FromArray(properties.specularFactor) : new BABYLON.Color3(1, 1, 1);
            material.babylonMaterial.microSurface = properties.glossinessFactor === undefined ? 1 : properties.glossinessFactor;
            if (properties.diffuseTexture) {
                BABYLON.GLTFFileLoader.LoadTextureAsync(runtime, properties.diffuseTexture, function (texture) {
                    material.babylonMaterial.albedoTexture = texture;
                    BABYLON.GLTFFileLoader.LoadAlphaProperties(runtime, material);
                }, function () {
                    BABYLON.Tools.Warn("Failed to load diffuse texture");
                });
            }
            if (properties.specularGlossinessTexture) {
                BABYLON.GLTFFileLoader.LoadTextureAsync(runtime, properties.specularGlossinessTexture, function (texture) {
                    material.babylonMaterial.reflectivityTexture = texture;
                    material.babylonMaterial.useMicroSurfaceFromReflectivityMapAlpha = true;
                }, function () {
                    BABYLON.Tools.Warn("Failed to load metallic roughness texture");
                });
            }
            BABYLON.GLTFFileLoader.LoadCommonMaterialProperties(runtime, material);
            return true;
        };
        return GLTFMaterialsPbrSpecularGlossinessExtension;
    }(BABYLON.GLTFFileLoaderExtension));
    BABYLON.GLTFMaterialsPbrSpecularGlossinessExtension = GLTFMaterialsPbrSpecularGlossinessExtension;
    BABYLON.GLTFFileLoader.RegisterExtension(new GLTFMaterialsPbrSpecularGlossinessExtension());
})(BABYLON || (BABYLON = {}));

//# sourceMappingURL=babylon.glTFMaterialsPbrSpecularGlossinessExtension.js.map
