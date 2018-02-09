(function () {
    function AnimKey(time, value) {
        this.time = time;
        this.value = value;
    }

    function AnimCurve() {
        this.keys = [];
    }

    AnimCurve.prototype.addKey = function (key) {
        this.keys.push(key);
        this.keys.sort(function (a, b) {
            return a.time - b.time;
        });
    }

    AnimCurve.prototype.evaluate = function (time) {
        var keys = this.keys;
        for (var i = 0; i < keys.length - 1; i++) {
            var k0 = keys[i];
            var k1 = keys[i + 1];

            if (time > k0.time && time < k1.time) {
                var interval = k1.time - k0.time;
                var delta = time - k0.time;
                var value = pc.math.lerp(k0.value, k1.value, delta / interval);
                return value;
            }
        }

        return 0;
    };

    var Anim;

    function initAnim() {
        if (Anim) return;

        Anim = pc.createScript('anim');

        Anim.prototype.initialize = function () {
            this.time = 0;
        };

        Anim.prototype.update = function (dt) {
            this.time += dt;
            var numKeys = this.curves[0].keys.length;
            var duration = (this.curves[0].keys[numKeys - 1]).time;
            if (this.time > duration) {
                this.time = 0;
            }

            if (this.entity.model) {
                var meshInstances = this.entity.model.meshInstances;
                for (var i = 0; i < meshInstances.length; i++) {
                    var morphInstance = meshInstances[i].morphInstance;
                    if (morphInstance) {
                        for (var j = 0; j < this.curves.length; j++) {
                            var curve = this.curves[j];
                            var value = curve.evaluate(this.time);
                            morphInstance.setWeight(j, value);
                        }
                    }
                }
            }
        };
    }

    // Math utility functions
    function nearestPow2(n) {
      return Math.pow(2, Math.round(Math.log(n) / Math.log(2))); 
    }

    function isPowerOf2(n) {
        return n && (n & (n - 1)) === 0;
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

    function isDataURI(s) {
        var regex = /^data:.+\/(.+);base64,(.*)$/;
        return !!s.match(regex);
    }

    function getAccessorData(gltf, accessor, buffers) {
        var bufferView = gltf.bufferViews[accessor.bufferView];
        var arrayBuffer = buffers[bufferView.buffer];
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

    function resampleImage(image) {
        var srcW = image.width;
        var srcH = image.height;

        var dstW = nearestPow2(srcW);
        var dstH = nearestPow2(srcH);

        var canvas = document.createElement('canvas');
        canvas.width = dstW;
        canvas.height = dstH;

        var context = canvas.getContext('2d');
        context.drawImage(image, 0, 0, srcW, srcH, 0, 0, dstW, dstH);

        return canvas.toDataURL();
    }

    function translateImage(data, resources) {
        var image = new Image();
        image.addEventListener('load', function () {
            var gltf = resources.gltf;

            var imageIndex = resources.images.indexOf(image);
            gltf.textures.forEach(function (texture, idx) {
                if (texture.hasOwnProperty('source')) {
                    if (texture.source === imageIndex) {
                        var t = resources.textures[idx];
                        if ((!isPowerOf2(image.width) || !isPowerOf2(image.width)) &&
                            ((t.addressU === pc.ADDRESS_REPEAT) || (t.addressU === pc.ADDRESS_MIRRORED_REPEAT) ||
                             (t.addressV === pc.ADDRESS_REPEAT) || (t.addressV === pc.ADDRESS_MIRRORED_REPEAT) ||
                             (t.minFilter === pc.FILTER_LINEAR_MIPMAP_LINEAR) || (t.minFilter === pc.FILTER_NEAREST_MIPMAP_LINEAR) ||
                             (t.minFilter === pc.FILTER_LINEAR_MIPMAP_NEAREST) || (t.minFilter === pc.FILTER_NEAREST_MIPMAP_NEAREST))) {
                            var potImage = new Image();
                            potImage.addEventListener('load', function () {
                                t.setSource(potImage);
                            });
                            potImage.src = resampleImage(image);
                        } else {
                            t.setSource(image);
                        }
                    }
                }
            });
        }, false);

        if (data.hasOwnProperty('uri')) {
            if (isDataURI(data.uri)) {
                image.src = data.uri;
            } else if (resources.processUri) {
                resources.processUri(data.uri, function(uri) {
                    image.src = uri;
                });
            } else {
                image.src = resources.basePath + data.uri;
            }
        }

        if (data.hasOwnProperty('bufferView')) {
            var gltf = resources.gltf;
            var buffers = resources.buffers;
            var bufferView = gltf.bufferViews[data.bufferView];
            var arrayBuffer = buffers[bufferView.buffer];
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

        material.chunks.glossMapPS = [
            "#ifdef MAPFLOAT",
            "uniform float material_shininess;",
            "#endif",
            "",
            "#ifdef MAPTEXTURE",
            "uniform sampler2D texture_glossMap;",
            "#endif",
            "",
            "void getGlossiness() {",
            "    dGlossiness = 1.0;",
            "",
            "    #ifdef MAPFLOAT",
            "        dGlossiness *= material_shininess;",
            "    #endif",
            "",
            "    #ifdef MAPTEXTURE",
            "        dGlossiness *= 1.0 - texture2D(texture_glossMap, $UV).$CH;",
            "    #endif",
            "",
            "    #ifdef MAPVERTEX",
            "        dGlossiness *= 1.0 - saturate(vVertexColor.$VC);",
            "    #endif",
            "",
            "    dGlossiness += 0.0000001;",
            "}"
        ].join('\n');

        // glTF dooesn't define how to occlude specular
        material.occludeSpecular = false;
        material.diffuseMapTint = true;
        material.diffuseMapVertexColor = true;

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
                var baseColorTexture = pbrData.baseColorTexture;
                material.diffuseMap = resources.textures[baseColorTexture.index];
                if (baseColorTexture.hasOwnProperty('texCoord')) {
                    material.diffuseMapUv = baseColorTexture.texCoord;
                }
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
                var metallicRoughnessTexture = pbrData.metallicRoughnessTexture;
                material.metalnessMap = resources.textures[metallicRoughnessTexture.index];
                material.metalnessMapChannel = 'b';
                material.glossMap = resources.textures[metallicRoughnessTexture.index];
                material.glossMapChannel = 'g';
                if (!roughnessFloat) material.shininess = 100;
                if (metallicRoughnessTexture.hasOwnProperty('texCoord')) {
                    material.glossMapUv = metallicRoughnessTexture.texCoord;
                    material.metalnessMapUv = metallicRoughnessTexture.texCoord;
                }
            }
        }
        if (data.hasOwnProperty('normalTexture')) {
            var normalTexture = data.normalTexture;
            material.normalMap = resources.textures[normalTexture.index];
            if (normalTexture.hasOwnProperty('texCoord')) {
                material.normalMapUv = normalTexture.texCoord;
            }
            if (normalTexture.hasOwnProperty('scale')) {
                material.bumpiness = normalTexture.scale;
            }
        }
        if (data.hasOwnProperty('occlusionTexture')) {
            var occlusionTexture = data.occlusionTexture;
            material.aoMap = resources.textures[occlusionTexture.index];
            if (occlusionTexture.hasOwnProperty('texCoord')) {
                material.aoMapUv = occlusionTexture.texCoord;
            }
            // TODO: support 'strength'
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

    // Specification:
    //   https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#reference-node
    function translateNode(data, resources) {
        var entity = new pc.Entity();

        if (data.hasOwnProperty('name')) {
            entity.name = data.name;
        } else {
            entity.name = 'Entity' + resources.counter++;
        }

        // Parse transformation properties
        if (data.hasOwnProperty('matrix')) {
            var m = new pc.Mat4(data.matrix);
            entity.setLocalPosition(m.getTranslation());
            entity.setLocalEulerAngles(m.getEulerAngles());
            entity.setLocalScale(m.getScale());
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

        if (data.hasOwnProperty('camera')) {
            var gltf = resources.gltf;
            var camera = gltf.cameras[data.camera];

            var options = {};

            if (camera.type === 'perspective') {
                options.type = pc.PROJECTION_PERSPECTIVE;

                if (camera.hasOwnProperty('perspective')) {
                    var perspective = camera.perspective;
                    if (perspective.hasOwnProperty('aspectRatio')) {
                        options.aspectRatio = perspective.aspectRatio;
                    }
                    options.fov = perspective.yfov;
                    if (perspective.hasOwnProperty('zfar')) {
                        options.farClip = perspective.zfar;
                    }
                    options.nearClip = perspective.znear;
                }
            } else if (camera.type === 'orthographic') {
                options.type = pc.PROJECTION_ORTHOGRAPHIC;

                if (camera.hasOwnProperty('orthographic')) {
                    var orthographic = camera.orthographic;

                    options.aspectRatio = orthographic.xmag / orthographic.ymag;
                    options.orthoHeight = orthographic.ymag * 0.5;
                    options.farClip = orthographic.zfar;
                    options.nearClip = orthographic.znear;
                }
            }

            entity.addComponent('camera', options);

            // Diable loaded cameras by default and leave it to the application to enable them
            entity.camera.enabled = false;
        }

        if (data.hasOwnProperty('mesh')) {
            var meshGroup = resources.meshes[data.mesh];
            if (meshGroup.length > 0) {
                var model = new pc.Model();
                model.graph = new pc.Entity();
                for (var i = 0; i < meshGroup.length; i++) {
                    var material;
                    if (meshGroup[i].materialIndex === undefined) {
                        material = resources.defaultMaterial;
                    } else {
                        material = resources.materials[meshGroup[i].materialIndex];
                    }
                    var meshInstance = new pc.MeshInstance(model.graph, meshGroup[i], material);
                    if (meshGroup[i].morph) {
                        meshInstance.morphInstance = new pc.MorphInstance(meshGroup[i].morph);

                        // HACK: need to force calculation of the morph's AABB due to a bug
                        // in the engine. This is a private function and will be rmoved!
                        meshInstance.morphInstance.updateBounds(meshInstance.mesh);
                    }
                    model.meshInstances.push(meshInstance);
                }

                entity.addComponent('model');
                entity.model.model = model;
            }
        }

        return entity;
    }

    function translateAnimation(data, resources) {
        var gltf = resources.gltf;

        if (data.hasOwnProperty('name')) {

        }

        // parse animation data
        data.channels.forEach(function (channel) {
            var sampler = data.samplers[channel.sampler];

            var times = getAccessorData(gltf, gltf.accessors[sampler.input], resources.buffers);
            var values = getAccessorData(gltf, gltf.accessors[sampler.output], resources.buffers);

            var target = channel.target;
            var path = target.path;

            var curves = [];

            if (path === 'weights') {
                var numCurves = values.length / times.length;
                for (var i = 0; i < numCurves; i++) {
                    curves[i] = new AnimCurve();
                    for (var j = 0; j < times.length; j++) {
                        var time = times[j];
                        var value = values[numCurves * j + i];
                        var key = new AnimKey(time, value);
                        curves[i].addKey(key);
                    }
                }
            }

            var entity = resources.nodes[target.node];
            entity.addComponent('script');
            entity.script.create('anim');
            entity.script.anim.curves = curves;
        });
    }

    function translateMesh(data, resources) {
        var gltf = resources.gltf;
        var meshes = [];

        data.primitives.forEach(function (primitive) {
            var attributes = primitive.attributes;
            var positions = null;
            var normals = null;
            var tangents = null;
            var texCoord0 = null;
            var texCoord1 = null;
            var colors = null;
            var indices = null;
            var numVertices;
            var aabb;

            var vertexDesc = [
                { semantic: pc.SEMANTIC_POSITION, components: 3, type: pc.TYPE_FLOAT32 },
                { semantic: pc.SEMANTIC_NORMAL, components: 3, type: pc.TYPE_FLOAT32 },
                { semantic: pc.SEMANTIC_TANGENT, components: 4, type: pc.TYPE_FLOAT32 }
            ];

            // Grab typed arrays for all vertex data
            if (attributes.hasOwnProperty('POSITION')) {
                accessor = gltf.accessors[primitive.attributes.POSITION];
                positions = getAccessorData(gltf, accessor, resources.buffers);
                numVertices = accessor.count;
                var min = accessor.min;
                var max = accessor.max;
                aabb = new pc.BoundingBox(
                    new pc.Vec3((max[0] + min[0]) / 2, (max[1] + min[1]) / 2, (max[2] + min[2]) / 2),
                    new pc.Vec3((max[0] - min[0]) / 2, (max[1] - min[1]) / 2, (max[2] - min[2]) / 2)
                );
            }
            if (attributes.hasOwnProperty('NORMAL')) {
                accessor = gltf.accessors[primitive.attributes.NORMAL];
                normals = getAccessorData(gltf, accessor, resources.buffers);
            }
            if (attributes.hasOwnProperty('TANGENT')) {
                accessor = gltf.accessors[primitive.attributes.TANGENT];
                tangents = getAccessorData(gltf, accessor, resources.buffers);
            }
            if (attributes.hasOwnProperty('TEXCOORD_0')) {
                accessor = gltf.accessors[primitive.attributes.TEXCOORD_0];
                texCoord0 = getAccessorData(gltf, accessor, resources.buffers);
                vertexDesc.push({ semantic: pc.SEMANTIC_TEXCOORD0, components: 2, type: pc.TYPE_FLOAT32 });
            }
            if (attributes.hasOwnProperty('TEXCOORD_1')) {
                accessor = gltf.accessors[primitive.attributes.TEXCOORD_1];
                texCoord1 = getAccessorData(gltf, accessor, resources.buffers);
                vertexDesc.push({ semantic: pc.SEMANTIC_TEXCOORD1, components: 2, type: pc.TYPE_FLOAT32 });
            }
            if (attributes.hasOwnProperty('COLOR_0')) {
                accessor = gltf.accessors[primitive.attributes.COLOR_0];
                colors = getAccessorData(gltf, accessor, resources.buffers);
                vertexDesc.push({ semantic: pc.SEMANTIC_COLOR, components: 4, type: pc.TYPE_FLOAT32 });
            }
            if (primitive.hasOwnProperty('indices')) {
                accessor = gltf.accessors[primitive.indices];
                indices = getAccessorData(gltf, accessor, resources.buffers);
            }

            if (positions !== null && indices !== null && normals === null) {
                normals = pc.calculateNormals(positions, indices);
            }
            if (positions !== null && normals !== null && texCoord0 !== null && indices !== null && tangents === null) {
                tangents = pc.calculateTangents(positions, normals, texCoord0, indices);
            }

            var vertexFormat = new pc.VertexFormat(resources.device, vertexDesc);
            var vertexBuffer = new pc.VertexBuffer(resources.device, vertexFormat, numVertices, pc.BUFFER_STATIC);
            var vertexData = vertexBuffer.lock();

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

                o += 8;
            }

            if (texCoord1 !== null) {
                for (k = 0; k < numVertices; k++) {
                    offset = k * vertexFormat.size + o;
                    dataView.setFloat32(offset + 0, texCoord1[k * 2 + 0], true);
                    dataView.setFloat32(offset + 4, texCoord1[k * 2 + 1], true);
                }

                o += 8;
            }

            if (colors !== null) {
                for (k = 0; k < numVertices; k++) {
                    offset = k * vertexFormat.size + o;
                    dataView.setFloat32(offset + 0,  colors[k * 4 + 0], true);
                    dataView.setFloat32(offset + 4,  colors[k * 4 + 1], true);
                    dataView.setFloat32(offset + 8,  colors[k * 4 + 2], true);
                    dataView.setFloat32(offset + 12, colors[k * 4 + 3], true);
                }

                o += 16;
            }

            vertexBuffer.unlock();

            var mesh = new pc.Mesh();
            mesh.vertexBuffer = vertexBuffer;
            mesh.indexBuffer[0] = indexBuffer;
            mesh.primitive[0].type = getPrimitiveType(primitive);
            mesh.primitive[0].base = 0;

            var indexBuffer = null;
            mesh.primitive[0].indexed = (indices !== null);
            if (indices !== null) {
                accessor = gltf.accessors[primitive.indices];
                var indexFormat;
                switch (accessor.componentType) {
                    case 5121:
                        indexFormat = pc.INDEXFORMAT_UINT8;
                        break;
                    default:
                    case 5123:
                        indexFormat = pc.INDEXFORMAT_UINT16;
                        break;
                    case 5125:
                        indexFormat = pc.INDEXFORMAT_UINT32;
                        break;
                }
                indexBuffer = new pc.IndexBuffer(resources.device, indexFormat, accessor.count, pc.USAGE_STATIC, indices);
                mesh.indexBuffer[0] = indexBuffer;
                mesh.primitive[0].count = indices.length;
            } else {
                mesh.primitive[0].count = numVertices;
            }

            mesh.materialIndex = primitive.material;

            mesh.aabb = aabb;

            if (primitive.hasOwnProperty('targets')) {
                var targets = [];

                primitive.targets.forEach(function (target) {
                    var options = {};
                    if (target.hasOwnProperty('POSITION')) {
                        accessor = gltf.accessors[target.POSITION];
                        options.deltaPositions = getAccessorData(gltf, accessor, resources.buffers);
                    }
                    if (target.hasOwnProperty('NORMAL')) {
                        accessor = gltf.accessors[target.NORMAL];
                        options.deltaNormals = getAccessorData(gltf, accessor, resources.buffers);
                    }
                    if (target.hasOwnProperty('TANGENT')) {
                        accessor = gltf.accessors[target.TANGENT];
                        options.deltaTangents = getAccessorData(gltf, accessor, resources.buffers);
                    }

                    targets.push(new pc.MorphTarget(options));
                });

                mesh.morph = new pc.Morph(targets);
            }

            meshes.push(mesh);
        });

        return meshes;
    }

    function loadBuffers(resources, success) {
        // buffers already loaded so early out
        if (resources.buffers) success();

        var gltf = resources.gltf;
        resources.buffers = [];

        if (gltf.hasOwnProperty('buffers')) {
            var numLoaded = 0;
            gltf.buffers.forEach(function (buffer, idx) {
                if (buffer.hasOwnProperty('uri')) {
                    if (isDataURI(buffer.uri)) {
                        // convert base64 to raw binary data held in a string
                        // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
                        var byteString = atob(buffer.uri.split(',')[1]);

                        // write the bytes of the string to an ArrayBuffer
                        resources.buffers[idx] = new ArrayBuffer(byteString.length);

                        // create a view into the buffer
                        var uint8Array = new Uint8Array(resources.buffers[idx]);

                        // set the bytes of the buffer to the correct values
                        for (var i = 0; i < byteString.length; i++) {
                            uint8Array[i] = byteString.charCodeAt(i);
                        }

                        if (gltf.buffers.length === ++numLoaded) {
                            success();
                        }
                    } else if (resources.processUri) {
                        resources.processUri(buffer.uri, function(result) {
                            resources.buffers[idx] = result;
                            if (gltf.buffers.length === ++numLoaded) {
                                success();
                            }
                        });
                    } else {
                        var xhr = new XMLHttpRequest();
                        xhr.open('GET', resources.basePath + buffer.uri, true);
                        xhr.responseType = 'arraybuffer';
                         
                        xhr.onload = function(e) {
                            // response is unsigned 8 bit integer
                            resources.buffers[idx] = this.response;

                            if (gltf.buffers.length === ++numLoaded) {
                                success();
                            }
                        };
                         
                        xhr.send();
                    }
                }
            });
        }
    }

    function parse(property, translator, resources) {
        if (resources.gltf.hasOwnProperty(property)) {
            resources[property] = resources.gltf[property].map(function (item) {
                return translator(item, resources);
            });
        }
    }

    function buildHierarchy(resources) {
        var gltf = resources.gltf;
        gltf.nodes.forEach(function (node, idx) {
            if (node.hasOwnProperty('children')) {
                node.children.forEach(function (childIdx) {
                    var child = resources.nodes[childIdx];
                    if (!child.parent) {
                        var parent = resources.nodes[idx];
                        parent.addChild(child);
                    } else {
                        console.warn('Child node ' + child.name + ' has more than one parent.');
                    }
                });
            }
        });
    }

    function loadGltf(gltf, device, success, options) {
        initAnim();

        var buffers = options ? options.buffers : undefined;
        var basePath = options ? options.basePath : undefined;
        var processUri = options ? options.processUri : undefined;

        var resources = {
            buffers: buffers,
            basePath: basePath,
            processUri: processUri,
            counter: 0,
            gltf: gltf,
            device: device,
            defaultMaterial: translateMaterial({})
        };

        loadBuffers(resources, function () {
            parse('textures', translateTexture, resources);
            parse('images', translateImage, resources);
            parse('materials', translateMaterial, resources);
            parse('meshes', translateMesh, resources);
            parse('nodes', translateNode, resources);
            parse('animations', translateAnimation, resources);

            buildHierarchy(resources);

            var rootNodes = [];
            if (gltf.hasOwnProperty('scenes')) {
                var sceneIndex = 0;
                if (gltf.hasOwnProperty('scene')) {
                    sceneIndex = gltf.scene;
                }
                var nodes = gltf.scenes[sceneIndex].nodes;
                for (var i = 0; i < nodes.length; i++) {
                    rootNodes.push(resources.nodes[nodes[i]]);
                }
            } else {
                rootNodes.push(resources.nodes[0]);
            }

            success(rootNodes);
        });
    }

    function loadGlb(glb, device, success) {
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

            var buffer = glb.slice(byteOffset + 8, byteOffset + 8 + chunkLength);
            buffers.push(buffer);

            byteOffset += chunkLength + 8;
        }

        var decoder = new TextDecoder('utf-8');
        var json = decoder.decode(jsonData);
        json = JSON.parse(json);

        loadGltf(json, device, function (rootNodes) {
            success(rootNodes);
        }, {
            buffers: buffers
        });
    }

    window.loadGltf = loadGltf;
    window.loadGlb = loadGlb;
}());