(function () {
    function dataURItoArrayBuffer(dataURI) {
        // convert base64 to raw binary data held in a string
        // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
        var byteString = atob(dataURI.split(',')[1]);

        // write the bytes of the string to an ArrayBuffer
        var arrayBuffer = new ArrayBuffer(byteString.length);

        // create a view into the buffer
        var uint8Array = new Uint8Array(arrayBuffer);

        // set the bytes of the buffer to the correct values
        for (var i = 0; i < byteString.length; i++) {
            uint8Array[i] = byteString.charCodeAt(i);
        }

        return arrayBuffer;
    }

    function getPrimitiveType(primitive) {
        var primType = pc.PRIMITIVE_TRIANGLES;

        if (primitive.hasOwnProperty('mode')) {
            switch (primitive.mode) {
                case 0: primType = pc.PRIMITIVE_POINTS; break;
                case 1: primType = pc.PRIMITIVE_LINES; break;
                case 2: primType = pc.PRIMITIVE_LINELOOP; break;
                case 3: primType = pc.PRIMITIVE_LINESTRIP; break;
                case 4: primType = pc.PRIMITIVE_TRIANGLES; break;
                case 5: primType = pc.PRIMITIVE_TRISTRIP; break;
                case 6: primType = pc.PRIMITIVE_TRIFAN; break;
            }
        }

        return primType;
    }

    function getAccessorComponentType(accessor) {
        var pcType = pc.TYPE_FLOAT32;

        switch (accessor.componentType) {
            case 5120: pcType = pc.TYPE_INT8; break;
            case 5121: pcType = pc.TYPE_UINT8; break;
            case 5122: pcType = pc.TYPE_INT16; break;
            case 5123: pcType = pc.TYPE_UINT16; break;
            // The glTF spec doesn't mention signed ints. Bug?
            case 5125: pcType = pc.TYPE_UINT32; break;
            case 5126: pcType = pc.TYPE_FLOAT32; break;
        }

        return pcType;
    }

    function getAccessorTypeSize(type) {
        var size = 3;

        switch (type) {
            case 'SCALAR': size = 1; break;
            case 'VEC2': size = 2; break;
            case 'VEC3': size = 3; break;
            case 'VEC4': size = 4; break;
            case 'MAT2': size = 4; break;
            case 'MAT3': size = 9; break;
            case 'MAT4': size = 16; break;
        }

        return size;
    }

    function getFilter(filter) {
        var pcFilter = pc.FILTER_LINEAR;

        switch (filter) {
            case 9728: pcFilter = pc.FILTER_NEAREST; break;
            case 9729: pcFilter = pc.FILTER_LINEAR; break;
            case 9984: pcFilter = pc.FILTER_NEAREST_MIPMAP_NEAREST; break;
            case 9985: pcFilter = pc.FILTER_LINEAR_MIPMAP_NEAREST; break;
            case 9986: pcFilter = pc.FILTER_NEAREST_MIPMAP_LINEAR; break;
            case 9987: pcFilter = pc.FILTER_LINEAR_MIPMAP_LINEAR; break;
        }

        return pcFilter;
    }

    function getWrap(wrap) {
        var pcWrap = pc.ADDRESS_REPEAT;

        switch (wrap) {
            case 33071: pcWrap = pc.ADDRESS_CLAMP_TO_EDGE; break;
            case 33648: pcWrap = pc.ADDRESS_MIRRORED_REPEAT; break;
            case 10497: pcWrap = pc.ADDRESS_REPEAT; break;
        }

        return pcWrap;
    }

    function translateImage(data, resources) {
        var image = new Image();
        image.addEventListener('load', function () {
            var gltf = resources.gltf;

            var imageIndex = resources.images.indexOf(image);
            for (var i = 0; i < gltf.textures.length; i++) {
                var t = gltf.textures[i];
                if (t.hasOwnProperty('source')) {
                    if (t.source === imageIndex) {
                        resources.textures[i].setSource(image);
                    }
                }
            }
        }, false);

        if (data.hasOwnProperty('uri')) {
            image.src = data.uri;
        }
        if (data.hasOwnProperty('bufferView')) {
            var gltf = resources.gltf;
            var arrayBuffers = resources.arrayBuffers;
            var bufferView = gltf.bufferViews[data.bufferView];
            var arrayBuffer = arrayBuffers[bufferView.buffer];
            var byteOffset = bufferView.hasOwnProperty('byteOffset') ? bufferView.byteOffset : 0;
            var imageBuffer = arrayBuffer.slice(byteOffset, byteOffset + bufferView.byteLength);
            var blob = new Blob([ imageBuffer ], { type: data.mimeType });
            image.src = URL.createObjectURL(blob);
        }

        return image;
    }

    function translateTexture(data, resources) {
        var texture = new pc.Texture(resources.device, {
            flipY: false
        });

        if (data.hasOwnProperty('name')) {
            texture.name = data.name;
        }

        if (data.hasOwnProperty('sampler')) {
            var gltf = resources.gltf;
            var sampler = gltf.samplers[data.sampler];

            if (sampler.hasOwnProperty('minFilter')) {
                texture.minFilter = getFilter(sampler.minFilter);
            }
            if (sampler.hasOwnProperty('magFilter')) {
                texture.magFilter = getFilter(sampler.magFilter);
            }
            if (sampler.hasOwnProperty('wrapS')) {
                texture.addressU = getWrap(sampler.wrapS);
            }
            if (sampler.hasOwnProperty('wrapT')) {
                texture.addressV = getWrap(sampler.wrapT);
            }
        }

        return texture;
    }

    function translateMaterial(data, resources) {
        var material = new pc.StandardMaterial();
        material.chunks.glossTexPS = pc.shaderChunks.glossTexGltfPS;
        material.chunks.glossTexConstPS = pc.shaderChunks.glossTexConstGltfPS;
        material.occludeSpecular = false; // GLTF dooesn't define how to occlude specular
        var roughnessFloat;
        var color;

        if (data.hasOwnProperty('name')) {
            material.name = data.name;
        }

        if (data.hasOwnProperty('pbrMetallicRoughness')) {
            var pbrData = data.pbrMetallicRoughness;

            if (pbrData.hasOwnProperty('baseColorFactor')) {
                color = pbrData.baseColorFactor;
                material.diffuse.set(color[0], color[1], color[2]);
                material.diffuseMapTint = true;
                material.opacity = color[3];
            } else {
                material.diffuse.set(1, 1, 1);
                material.diffuseMapTint = false;
                material.opacity = 1;
            }
            if (pbrData.hasOwnProperty('baseColorTexture')) {
                material.diffuseMap = resources.textures[pbrData.baseColorTexture.index];
            }
            material.useMetalness = true;
            if (pbrData.hasOwnProperty('metallicFactor')) {
                material.metalness = pbrData.metallicFactor;
            } else {
                material.metalness = 1;
            }
            if (pbrData.hasOwnProperty('roughnessFactor')) {
                material.shininess = 100 * (1 - pbrData.roughnessFactor);
                roughnessFloat = true;
            } else {
                material.shininess = 0;
                roughnessFloat = false;
            }
            if (pbrData.hasOwnProperty('metallicRoughnessTexture')) {
                material.metalnessMap = resources.textures[pbrData.metallicRoughnessTexture.index];
                material.metalnessMapChannel = 'b';
                material.glossMap = resources.textures[pbrData.metallicRoughnessTexture.index];
                material.glossMapChannel = 'g';
                if (!roughnessFloat) material.shininess = 100;
            }
        }
        if (data.hasOwnProperty('normalTexture')) {
            material.normalMap = resources.textures[data.normalTexture.index];
        }
        if (data.hasOwnProperty('occlusionTexture')) {
            material.aoMap = resources.textures[data.occlusionTexture.index];
        }
        if (data.hasOwnProperty('emissiveFactor')) {
            color = data.emissiveFactor;
            material.emissive.set(color[0], color[1], color[2]);
            material.emissiveMapTint = true;
        } else {
            material.emissive.set(0, 0, 0);
            material.emissiveMapTint = false;
        }
        if (data.hasOwnProperty('emissiveTexture')) {
            material.emissiveMap = resources.textures[data.emissiveTexture.index];
        }
        if (data.hasOwnProperty('alphaMode')) {
            switch (data.alphaMode) {
                case 'MASK':
                    material.blendType = pc.BLEND_NONE;
                    break;
                case 'BLEND':
                    material.blendType = pc.BLEND_NORMAL;
                    break;
                default:
                case 'OPAQUE':
                    material.blendType = pc.BLEND_NONE;
                    break;
            }
        } else {
            material.blendType = pc.BLEND_NONE;
        }
        if (data.hasOwnProperty('alphaCutoff')) {
            material.alphaTest = data.alphaCutoff;
        } else {
            material.alphaTest = 0.5;
        }
        if (data.hasOwnProperty('doubleSided')) {
            material.twoSidedLighting = data.doubleSided;
            material.cull = data.doubleSided ? pc.CULLFACE_NONE : pc.CULLFACE_BACK;
        } else {
            material.twoSidedLighting = false;
            material.cull = pc.CULLFACE_BACK;
        }

        material.update();

        return material;
    }

    function translateNode(data, resources) {
        var entity = new pc.Entity();

        if (data.hasOwnProperty('name')) {
            entity.name = data.name;
        }

        // Parse transformation properties
        if (data.hasOwnProperty('matrix')) {
            var m = new pc.Mat4(data.matrix);
            entity.setLocalPosition(m.getTranslation());
            entity.setLocalEulerAngles(m.getEulerAngles());
            entity.setLocalScale(m.getScale());
        }

        if (data.hasOwnProperty('mesh')) {
            var meshGroup = resources.meshGroups[data.mesh];
            if (meshGroup.length > 0) {
                entity.addComponent('model');

                var model = new pc.Model();
                model.graph = new pc.Entity();
                for (var i = 0; i < meshGroup.length; i++) {
                    var material;
                    if (meshGroup[i].materialIndex === undefined) {
                        material = resources.defaultMaterial;
                    } else {
                        material = resources.materials[meshGroup[i].materialIndex];
                    }
                    model.meshInstances.push(new pc.MeshInstance(model.graph, meshGroup[i], material));
                }

                entity.model.model = model;
            }
        }

        if (data.hasOwnProperty('rotation')) {
            var r = data.rotation;
            entity.setLocalRotation(r[0], r[1], r[2], r[3]);
        }

        if (data.hasOwnProperty('translation')) {
            var t = data.translation;
            entity.setLocalPosition(t[0], t[1], t[2]);
        }

        if (data.hasOwnProperty('scale')) {
            var s = data.scale;
            entity.setLocalScale(s[0], s[1], s[2]);
        }

        return entity;
    }

    function getAccessorData(gltf, accessor, arrayBuffers) {
        var bufferView = gltf.bufferViews[accessor.bufferView];
        var arrayBuffer = arrayBuffers[bufferView.buffer];
        var accessorByteOffset = accessor.hasOwnProperty('byteOffset') ? accessor.byteOffset : 0;
        var bufferViewByteOffset = bufferView.hasOwnProperty('byteOffset') ? bufferView.byteOffset : 0;
        var byteOffset = accessorByteOffset + bufferViewByteOffset;
        var length = accessor.count * getAccessorTypeSize(accessor.type);

        var data = null;

        switch (accessor.componentType) {
            case 5120: data = new Int8Array(arrayBuffer, byteOffset, length); break;
            case 5121: data = new Uint8Array(arrayBuffer, byteOffset, length); break;
            case 5122: data = new Int16Array(arrayBuffer, byteOffset, length); break;
            case 5123: data = new Uint16Array(arrayBuffer, byteOffset, length); break;
            case 5125: data = new Uint32Array(arrayBuffer, byteOffset, length); break;
            case 5126: data = new Float32Array(arrayBuffer, byteOffset, length); break;
        }

        return data;
    }

    function loadMeshes(gltf, resources) {
        var i, j;
        var mesh, meshes, numMeshes;
        var primitive, primitives, numPrimitives;
        var attribute, attributes, numAttributes;
        var primType;
        var numVertices;
        var aabb;
        var min, max;
        var vertexBuffer, vertexFormat;
        var vertexData, vertexDataF32;
        var bufferView, bufferViewIndex;
        var accessorByteOffset, bufferViewByteOffset;

        var pcMeshGroups = [];
        var pcMeshes;

        meshes = gltf.meshes;
        numMeshes = meshes.length;

        for (i = 0; i < numMeshes; i++) {
            mesh = meshes[i];
            primitives = mesh.primitives;
            numPrimitives = primitives.length;

            pcMeshes = [];

            for (j = 0; j < numPrimitives; j++) {
                primitive = primitives[j];

                attributes = primitive.attributes;

                var vertexDesc = [];
                vertexDesc.push({ semantic: pc.SEMANTIC_POSITION, components: 3, type: pc.TYPE_FLOAT32 });
                vertexDesc.push({ semantic: pc.SEMANTIC_NORMAL, components: 3, type: pc.TYPE_FLOAT32 });
                vertexDesc.push({ semantic: pc.SEMANTIC_TANGENT, components: 4, type: pc.TYPE_FLOAT32 });

                var positions = null;
                var normals = null;
                var tangents = null;
                var texCoord0 = null;
                var texCoord1 = null;
                var indices = null;

                // Grab typed arrays for all vertex data
                if (attributes.hasOwnProperty('POSITION')) {
                    accessor = gltf.accessors[primitive.attributes.POSITION];
                    positions = getAccessorData(gltf, accessor, resources.arrayBuffers);
                    numVertices = accessor.count;
                    min = new pc.Vec3(accessor.min);
                    max = new pc.Vec3(accessor.max);
                    aabb = new pc.BoundingBox(
                        new pc.Vec3((max.x + min.x) / 2, (max.y + min.y) / 2, (max.z + min.z) / 2),
                        new pc.Vec3((max.x - min.x) / 2, (max.y - min.y) / 2, (max.z - min.z) / 2)
                    );
                }
                if (attributes.hasOwnProperty('NORMAL')) {
                    accessor = gltf.accessors[primitive.attributes.NORMAL];
                    normals = getAccessorData(gltf, accessor, resources.arrayBuffers);
                }
                if (attributes.hasOwnProperty('TANGENT')) {
                    accessor = gltf.accessors[primitive.attributes.TANGENT];
                    tangents = getAccessorData(gltf, accessor, resources.arrayBuffers);
                }
                if (attributes.hasOwnProperty('TEXCOORD_0')) {
                    accessor = gltf.accessors[primitive.attributes.TEXCOORD_0];
                    texCoord0 = getAccessorData(gltf, accessor, resources.arrayBuffers);
                    vertexDesc.push({ semantic: pc.SEMANTIC_TEXCOORD0, components: 2, type: pc.TYPE_FLOAT32 });
                }
                if (attributes.hasOwnProperty('TEXCOORD_1')) {
                    accessor = gltf.accessors[primitive.attributes.TEXCOORD_1];
                    texCoord1 = getAccessorData(gltf, accessor, resources.arrayBuffers);
                    vertexDesc.push({ semantic: pc.SEMANTIC_TEXCOORD1, components: 2, type: pc.TYPE_FLOAT32 });
                }
                if (primitive.hasOwnProperty('indices')) {
                    accessor = gltf.accessors[primitive.indices];
                    indices = getAccessorData(gltf, accessor, resources.arrayBuffers);
                }

                if (positions !== null && indices !== null && normals === null) {
                    normals = pc.calculateNormals(positions, indices);
                }
                if (positions !== null && normals !== null && texCoord0 !== null && indices !== null && tangents === null) {
                    tangents = pc.calculateTangents(positions, normals, texCoord0, indices);
                }

                vertexFormat = new pc.VertexFormat(resources.device, vertexDesc);
                vertexBuffer = new pc.VertexBuffer(resources.device, vertexFormat, numVertices, pc.BUFFER_STATIC);
                vertexData = vertexBuffer.lock();

                var dataView = new DataView(vertexData);
                var o = 0;

                if (positions !== null) {
                    for (k = 0; k < numVertices; k++) {
                        offset = k * vertexFormat.size;
                        dataView.setFloat32(offset + 0, positions[k * 3 + 0], true);
                        dataView.setFloat32(offset + 4, positions[k * 3 + 1], true);
                        dataView.setFloat32(offset + 8, positions[k * 3 + 2], true);
                    }

                    o += 12;
                }

                if (normals !== null) {
                    for (k = 0; k < numVertices; k++) {
                        offset = k * vertexFormat.size + o;
                        dataView.setFloat32(offset + 0, normals[k * 3 + 0], true);
                        dataView.setFloat32(offset + 4, normals[k * 3 + 1], true);
                        dataView.setFloat32(offset + 8, normals[k * 3 + 2], true);
                    }

                    o += 12;
                }

                if (tangents !== null) {
                    for (k = 0; k < numVertices; k++) {
                        offset = k * vertexFormat.size + o;
                        dataView.setFloat32(offset + 0,  tangents[k * 4 + 0], true);
                        dataView.setFloat32(offset + 4,  tangents[k * 4 + 1], true);
                        dataView.setFloat32(offset + 8,  tangents[k * 4 + 2], true);
                        dataView.setFloat32(offset + 12, tangents[k * 4 + 3], true);
                    }

                    o += 16;
                }

                if (texCoord0 !== null) {
                    for (k = 0; k < numVertices; k++) {
                        offset = k * vertexFormat.size + o;
                        dataView.setFloat32(offset + 0, texCoord0[k * 2 + 0], true);
                        dataView.setFloat32(offset + 4, texCoord0[k * 2 + 1], true);
                    }
                }

                if (texCoord1 !== null) {
                    for (k = 0; k < numVertices; k++) {
                        offset = k * vertexFormat.size + o;
                        dataView.setFloat32(offset + 0, texCoord1[k * 2 + 0], true);
                        dataView.setFloat32(offset + 4, texCoord1[k * 2 + 1], true);
                    }
                }

                vertexBuffer.unlock();

                var pcMesh = new pc.Mesh();
                pcMesh.vertexBuffer = vertexBuffer;
                pcMesh.indexBuffer[0] = indexBuffer;
                pcMesh.primitive[0].type = getPrimitiveType(primitive);
                pcMesh.primitive[0].base = 0;

                var indexBuffer = null;
                pcMesh.primitive[0].indexed = (indices !== null);
                if (indices !== null) {
                    indexBuffer = new pc.IndexBuffer(resources.device, pc.INDEXFORMAT_UINT16, accessor.count, pc.USAGE_STATIC, indices);
                    pcMesh.indexBuffer[0] = indexBuffer;
                    pcMesh.primitive[0].count = indices.length;
                } else {
                    pcMesh.primitive[0].count = numVertices;
                }

                pcMesh.materialIndex = primitive.material;

                pcMesh.aabb = aabb;

                pcMeshes.push(pcMesh);
            }

            pcMeshGroups.push(pcMeshes);
        }

        return pcMeshGroups;
    }

    function loadBuffers(gltf, resources) {
        var arrayBuffers = [];

        if (gltf.hasOwnProperty('buffers')) {
            gltf.buffers.forEach(function (buffer) {
                arrayBuffers.push(dataURItoArrayBuffer(buffer.uri));
            });
        }

        return arrayBuffers;
    }

    function loadTextures(gltf, resources) {
        var textures = [];

        if (gltf.hasOwnProperty('textures')) {
            gltf.textures.forEach(function (texture) {
                textures.push(translateTexture(texture, resources));
            });
        }

        return textures;
    }

    function loadImages(gltf, resources) {
        var textures = [];

        if (gltf.hasOwnProperty('images')) {
            gltf.images.forEach(function (image) {
                textures.push(translateImage(image, resources));
            });
        }

        return textures;
    }

    function loadMaterials(gltf, resources) {
        var materials = [];

        if (gltf.hasOwnProperty('materials')) {
            gltf.materials.forEach(function (data) {
                materials.push(translateMaterial(data, resources));
            });
        }

        return materials;
    }

    function loadNodes(gltf, resources) {
        // Create entities
        var entities = [];

        if (gltf.hasOwnProperty('nodes')) {
            gltf.nodes.forEach(function (node) {
                entities.push(translateNode(node, resources));
            });

            // Build hierarchy
            gltf.nodes.forEach(function (node, idx) {
                if (node.hasOwnProperty('children')) {
                    node.children.forEach(function (childIdx) {
                        entities[idx].addChild(entities[childIdx]);
                    });
                }
            });
        }

        return entities;
    }

    function loadGltf(gltf, device, buffers) {

        // Add GLTF shaders, if needed (roughness -> glossiness remap)
        if (!pc.shaderChunks.glossTexGltfPS) {
            pc.shaderChunks.glossTexGltfPS = "uniform sampler2D texture_glossMap;\
                void getGlossiness() {\
                dGlossiness = 1.0 - texture2D(texture_glossMap, $UV).$CH;\
            }\n";

            pc.shaderChunks.glossTexConstGltfPS = "uniform sampler2D texture_glossMap;\
            uniform float material_shininess;\
            void getGlossiness() {\
                dGlossiness = 1.0 - material_shininess * texture2D(texture_glossMap, $UV).$CH;\
            }\n";
        }

        var resources = {
            gltf: gltf,
            device: device,
            defaultMaterial: translateMaterial({})
        };
        resources.arrayBuffers = buffers ? buffers : loadBuffers(gltf, resources);
        resources.textures = loadTextures(gltf, resources);
        resources.images = loadImages(gltf, resources);
        resources.materials = loadMaterials(gltf, resources);
        resources.meshGroups = loadMeshes(gltf, resources);
        resources.entities = loadNodes(gltf, resources);

        var root;
        if (gltf.hasOwnProperty('scenes')) {
            var sceneIndex = 0;
            if (gltf.hasOwnProperty('scene')) {
                sceneIndex = gltf.scene;
            }
            root = resources.entities[gltf.scenes[sceneIndex].nodes[0]];
        } else {
            root = resources.entities[0];
        }

        return root;
    }

    function loadGlb(glb, device) {
        var dataView = new DataView(glb);

        // Read header
        var magic = dataView.getUint32(0, true);
        if (magic !== 0x46546C67) {
            console.error("Invalid magic number found in glb header. Expected 0x46546C67, found 0x" + magic.toString(16));
            return null;
        } 
        var version = dataView.getUint32(4, true);
        var length = dataView.getUint32(8, true);

        // Read JSON chunk
        var chunkLength = dataView.getUint32(12, true);
        var chunkType = dataView.getUint32(16, true);
        if (chunkType !== 0x4E4F534A) {
            console.error("Invalid chunk type found in glb file. Expected 0x4E4F534A, found 0x" + chunkType.toString(16));
            return null;
        } 
        var jsonData = new Uint8Array(glb, 20, chunkLength);

        var buffers = [];
        var byteOffset = 20 + chunkLength;
        while (byteOffset < length) {
            chunkLength = dataView.getUint32(byteOffset, true);
            chunkType = dataView.getUint32(byteOffset + 4, true);
            if (chunkType !== 0x004E4942) {
                console.error("Invalid chunk type found in glb file. Expected 0x004E4942, found 0x" + chunkType.toString(16));
                return null;
            }

//            var buffer = new Uint8Array(glb, byteOffset + 8, chunkLength);
            var buffer = glb.slice(byteOffset + 8, byteOffset + 8 + chunkLength);
            buffers.push(buffer);

            byteOffset += chunkLength + 8;
        }

        var decoder = new TextDecoder('utf-8');
        var json = decoder.decode(jsonData);
        json = JSON.parse(json);
        return loadGltf(json, device, buffers);
    }

    window.loadGltf = loadGltf;
    window.loadGlb = loadGlb;
}());