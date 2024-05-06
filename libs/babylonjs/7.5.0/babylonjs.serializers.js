(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("babylonjs"));
	else if(typeof define === 'function' && define.amd)
		define("babylonjs-serializers", ["babylonjs"], factory);
	else if(typeof exports === 'object')
		exports["babylonjs-serializers"] = factory(require("babylonjs"));
	else
		root["SERIALIZERS"] = factory(root["BABYLON"]);
})((typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : this), (__WEBPACK_EXTERNAL_MODULE_babylonjs_Maths_math_vector__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../../dev/serializers/src/OBJ/index.ts":
/*!*************************************************!*\
  !*** ../../../dev/serializers/src/OBJ/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OBJExport: () => (/* reexport safe */ _objSerializer__WEBPACK_IMPORTED_MODULE_0__.OBJExport)
/* harmony export */ });
/* harmony import */ var _objSerializer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objSerializer */ "../../../dev/serializers/src/OBJ/objSerializer.ts");



/***/ }),

/***/ "../../../dev/serializers/src/OBJ/objSerializer.ts":
/*!*********************************************************!*\
  !*** ../../../dev/serializers/src/OBJ/objSerializer.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OBJExport: () => (/* binding */ OBJExport)
/* harmony export */ });
/* harmony import */ var babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Misc/tools */ "babylonjs/Maths/math.vector");
/* harmony import */ var babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Class for generating OBJ data from a Babylon scene.
 */
var OBJExport = /** @class */ (function () {
    function OBJExport() {
    }
    /**
     * Exports the geometry of a Mesh array in .OBJ file format (text)
     * @param meshes defines the list of meshes to serialize
     * @param materials defines if materials should be exported
     * @param matlibname defines the name of the associated mtl file
     * @param globalposition defines if the exported positions are globals or local to the exported mesh
     * @returns the OBJ content
     */
    OBJExport.OBJ = function (meshes, materials, matlibname, globalposition) {
        var output = [];
        var v = 1;
        // keep track of uv index in case mixed meshes are passed in
        var textureV = 1;
        if (materials) {
            if (!matlibname) {
                matlibname = "mat";
            }
            output.push("mtllib " + matlibname + ".mtl");
        }
        for (var j = 0; j < meshes.length; j++) {
            var objectName = meshes[j].name || "mesh".concat(j, "}");
            output.push("o ".concat(objectName));
            //Uses the position of the item in the scene, to the file (this back to normal in the end)
            var inverseTransform = null;
            if (globalposition) {
                var transform = meshes[j].computeWorldMatrix(true);
                inverseTransform = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Matrix();
                transform.invertToRef(inverseTransform);
                meshes[j].bakeTransformIntoVertices(transform);
            }
            //TODO: submeshes (groups)
            //TODO: smoothing groups (s 1, s off);
            if (materials) {
                var mat = meshes[j].material;
                if (mat) {
                    output.push("usemtl " + mat.id);
                }
            }
            var g = meshes[j].geometry;
            if (!g) {
                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Warn("No geometry is present on the mesh");
                continue;
            }
            var trunkVerts = g.getVerticesData("position");
            var trunkNormals = g.getVerticesData("normal");
            var trunkUV = g.getVerticesData("uv");
            var trunkFaces = g.getIndices();
            var currentV = 0;
            var currentTextureV = 0;
            if (!trunkVerts || !trunkFaces) {
                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Warn("There are no position vertices or indices on the mesh!");
                continue;
            }
            var useRightHandedSystem = meshes[0].getScene().useRightHandedSystem;
            var handednessSign = useRightHandedSystem ? 1 : -1;
            for (var i = 0; i < trunkVerts.length; i += 3) {
                output.push("v " + trunkVerts[i] * handednessSign + " " + trunkVerts[i + 1] + " " + trunkVerts[i + 2]);
                currentV++;
            }
            if (trunkNormals != null) {
                for (var i = 0; i < trunkNormals.length; i += 3) {
                    output.push("vn " + trunkNormals[i] * handednessSign + " " + trunkNormals[i + 1] + " " + trunkNormals[i + 2]);
                }
            }
            if (trunkUV != null) {
                for (var i = 0; i < trunkUV.length; i += 2) {
                    output.push("vt " + trunkUV[i] + " " + trunkUV[i + 1]);
                    currentTextureV++;
                }
            }
            var blanks = ["", "", ""];
            var _a = useRightHandedSystem ? [2, 1] : [1, 2], offset1 = _a[0], offset2 = _a[1];
            for (var i = 0; i < trunkFaces.length; i += 3) {
                var indices = [String(trunkFaces[i] + v), String(trunkFaces[i + offset1] + v), String(trunkFaces[i + offset2] + v)];
                var textureIndices = [String(trunkFaces[i] + textureV), String(trunkFaces[i + offset1] + textureV), String(trunkFaces[i + offset2] + textureV)];
                var facePositions = indices;
                var faceUVs = trunkUV != null ? textureIndices : blanks;
                var faceNormals = trunkNormals != null ? indices : blanks;
                output.push("f " +
                    facePositions[0] +
                    "/" +
                    faceUVs[0] +
                    "/" +
                    faceNormals[0] +
                    " " +
                    facePositions[1] +
                    "/" +
                    faceUVs[1] +
                    "/" +
                    faceNormals[1] +
                    " " +
                    facePositions[2] +
                    "/" +
                    faceUVs[2] +
                    "/" +
                    faceNormals[2]);
            }
            //back de previous matrix, to not change the original mesh in the scene
            if (globalposition && inverseTransform) {
                meshes[j].bakeTransformIntoVertices(inverseTransform);
            }
            v += currentV;
            textureV += currentTextureV;
        }
        var text = output.join("\n");
        return text;
    };
    /**
     * Exports the material(s) of a mesh in .MTL file format (text)
     * @param mesh defines the mesh to extract the material from
     * @returns the mtl content
     */
    //TODO: Export the materials of mesh array
    OBJExport.MTL = function (mesh) {
        var output = [];
        var m = mesh.material;
        output.push("newmtl mat1");
        output.push("  Ns " + m.specularPower.toFixed(4));
        output.push("  Ni 1.5000");
        output.push("  d " + m.alpha.toFixed(4));
        output.push("  Tr 0.0000");
        output.push("  Tf 1.0000 1.0000 1.0000");
        output.push("  illum 2");
        output.push("  Ka " + m.ambientColor.r.toFixed(4) + " " + m.ambientColor.g.toFixed(4) + " " + m.ambientColor.b.toFixed(4));
        output.push("  Kd " + m.diffuseColor.r.toFixed(4) + " " + m.diffuseColor.g.toFixed(4) + " " + m.diffuseColor.b.toFixed(4));
        output.push("  Ks " + m.specularColor.r.toFixed(4) + " " + m.specularColor.g.toFixed(4) + " " + m.specularColor.b.toFixed(4));
        output.push("  Ke " + m.emissiveColor.r.toFixed(4) + " " + m.emissiveColor.g.toFixed(4) + " " + m.emissiveColor.b.toFixed(4));
        //TODO: uv scale, offset, wrap
        //TODO: UV mirrored in Blender? second UV channel? lightMap? reflection textures?
        var uvscale = "";
        if (m.ambientTexture) {
            output.push("  map_Ka " + uvscale + m.ambientTexture.name);
        }
        if (m.diffuseTexture) {
            output.push("  map_Kd " + uvscale + m.diffuseTexture.name);
            //TODO: alpha testing, opacity in diffuse texture alpha channel (diffuseTexture.hasAlpha -> map_d)
        }
        if (m.specularTexture) {
            output.push("  map_Ks " + uvscale + m.specularTexture.name);
            /* TODO: glossiness = specular highlight component is in alpha channel of specularTexture. (???)
            if (m.useGlossinessFromSpecularMapAlpha)  {
                output.push("  map_Ns "+uvscale + m.specularTexture.name);
            }
            */
        }
        /* TODO: emissive texture not in .MAT format (???)
        if (m.emissiveTexture) {
            output.push("  map_d "+uvscale+m.emissiveTexture.name);
        }
        */
        if (m.bumpTexture) {
            output.push("  map_bump -imfchan z " + uvscale + m.bumpTexture.name);
        }
        if (m.opacityTexture) {
            output.push("  map_d " + uvscale + m.opacityTexture.name);
        }
        var text = output.join("\n");
        return text;
    };
    return OBJExport;
}());



/***/ }),

/***/ "../../../dev/serializers/src/glTF/2.0/Extensions/EXT_mesh_gpu_instancing.ts":
/*!***********************************************************************************!*\
  !*** ../../../dev/serializers/src/glTF/2.0/Extensions/EXT_mesh_gpu_instancing.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EXT_mesh_gpu_instancing: () => (/* binding */ EXT_mesh_gpu_instancing)
/* harmony export */ });
/* harmony import */ var _glTFExporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../glTFExporter */ "../../../dev/serializers/src/glTF/2.0/glTFExporter.ts");
/* harmony import */ var babylonjs_Meshes_mesh__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs/Buffers/buffer */ "babylonjs/Maths/math.vector");
/* harmony import */ var babylonjs_Meshes_mesh__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Meshes_mesh__WEBPACK_IMPORTED_MODULE_1__);





var NAME = "EXT_mesh_gpu_instancing";
/**
 * [Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Vendor/EXT_mesh_gpu_instancing/README.md)
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
var EXT_mesh_gpu_instancing = /** @class */ (function () {
    function EXT_mesh_gpu_instancing(exporter) {
        /** Name of this extension */
        this.name = NAME;
        /** Defines whether this extension is enabled */
        this.enabled = true;
        /** Defines whether this extension is required */
        this.required = false;
        this._wasUsed = false;
        this._exporter = exporter;
    }
    EXT_mesh_gpu_instancing.prototype.dispose = function () { };
    Object.defineProperty(EXT_mesh_gpu_instancing.prototype, "wasUsed", {
        /** @internal */
        get: function () {
            return this._wasUsed;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * After node is exported
     * @param context the GLTF context when loading the asset
     * @param node the node exported
     * @param babylonNode the corresponding babylon node
     * @param nodeMap map from babylon node id to node index
     * @param binaryWriter binary writer
     * @returns nullable promise, resolves with the node
     */
    EXT_mesh_gpu_instancing.prototype.postExportNodeAsync = function (context, node, babylonNode, nodeMap, binaryWriter) {
        var _this = this;
        return new Promise(function (resolve) {
            if (node && babylonNode instanceof babylonjs_Meshes_mesh__WEBPACK_IMPORTED_MODULE_1__.Mesh) {
                if (babylonNode.hasThinInstances && binaryWriter) {
                    _this._wasUsed = true;
                    var noTranslation = babylonjs_Meshes_mesh__WEBPACK_IMPORTED_MODULE_1__.Vector3.Zero();
                    var noRotation = babylonjs_Meshes_mesh__WEBPACK_IMPORTED_MODULE_1__.Quaternion.Identity();
                    var noScale = babylonjs_Meshes_mesh__WEBPACK_IMPORTED_MODULE_1__.Vector3.One();
                    // retrieve all the instance world matrix
                    var matrix = babylonNode.thinInstanceGetWorldMatrices();
                    var iwt = babylonjs_Meshes_mesh__WEBPACK_IMPORTED_MODULE_1__.TmpVectors.Vector3[2];
                    var iwr = babylonjs_Meshes_mesh__WEBPACK_IMPORTED_MODULE_1__.TmpVectors.Quaternion[1];
                    var iws = babylonjs_Meshes_mesh__WEBPACK_IMPORTED_MODULE_1__.TmpVectors.Vector3[3];
                    var hasAnyInstanceWorldTranslation = false;
                    var hasAnyInstanceWorldRotation = false;
                    var hasAnyInstanceWorldScale = false;
                    // prepare temp buffers
                    var translationBuffer = new Float32Array(babylonNode.thinInstanceCount * 3);
                    var rotationBuffer = new Float32Array(babylonNode.thinInstanceCount * 4);
                    var scaleBuffer = new Float32Array(babylonNode.thinInstanceCount * 3);
                    var i = 0;
                    for (var _i = 0, matrix_1 = matrix; _i < matrix_1.length; _i++) {
                        var m = matrix_1[_i];
                        m.decompose(iws, iwr, iwt);
                        // fill the temp buffer
                        translationBuffer.set(iwt.asArray(), i * 3);
                        rotationBuffer.set(iwr.normalize().asArray(), i * 4); // ensure the quaternion is normalized
                        scaleBuffer.set(iws.asArray(), i * 3);
                        // this is where we decide if there is any transformation
                        hasAnyInstanceWorldTranslation = hasAnyInstanceWorldTranslation || !iwt.equalsWithEpsilon(noTranslation);
                        hasAnyInstanceWorldRotation = hasAnyInstanceWorldRotation || !iwr.equalsWithEpsilon(noRotation);
                        hasAnyInstanceWorldScale = hasAnyInstanceWorldScale || !iws.equalsWithEpsilon(noScale);
                        i++;
                    }
                    var extension = {
                        attributes: {},
                    };
                    // do we need to write TRANSLATION ?
                    if (hasAnyInstanceWorldTranslation) {
                        extension.attributes["TRANSLATION"] = _this._buildAccessor(translationBuffer, "VEC3" /* AccessorType.VEC3 */, babylonNode.thinInstanceCount, binaryWriter, 5126 /* AccessorComponentType.FLOAT */);
                    }
                    // do we need to write ROTATION ?
                    if (hasAnyInstanceWorldRotation) {
                        var componentType = 5126 /* AccessorComponentType.FLOAT */; // we decided to stay on FLOAT for now see https://github.com/BabylonJS/Babylon.js/pull/12495
                        extension.attributes["ROTATION"] = _this._buildAccessor(rotationBuffer, "VEC4" /* AccessorType.VEC4 */, babylonNode.thinInstanceCount, binaryWriter, componentType);
                    }
                    // do we need to write SCALE ?
                    if (hasAnyInstanceWorldScale) {
                        extension.attributes["SCALE"] = _this._buildAccessor(scaleBuffer, "VEC3" /* AccessorType.VEC3 */, babylonNode.thinInstanceCount, binaryWriter, 5126 /* AccessorComponentType.FLOAT */);
                    }
                    /* eslint-enable @typescript-eslint/naming-convention*/
                    node.extensions = node.extensions || {};
                    node.extensions[NAME] = extension;
                }
            }
            resolve(node);
        });
    };
    EXT_mesh_gpu_instancing.prototype._buildAccessor = function (buffer, type, count, binaryWriter, componentType) {
        // write the buffer
        var bufferOffset = binaryWriter.getByteOffset();
        switch (componentType) {
            case 5126 /* AccessorComponentType.FLOAT */: {
                for (var i = 0; i != buffer.length; i++) {
                    binaryWriter.setFloat32(buffer[i]);
                }
                break;
            }
            case 5120 /* AccessorComponentType.BYTE */: {
                for (var i = 0; i != buffer.length; i++) {
                    binaryWriter.setByte(buffer[i] * 127);
                }
                break;
            }
            case 5122 /* AccessorComponentType.SHORT */: {
                for (var i = 0; i != buffer.length; i++) {
                    binaryWriter.setInt16(buffer[i] * 32767);
                }
                break;
            }
        }
        // build the buffer view
        var bv = { buffer: 0, byteOffset: bufferOffset, byteLength: buffer.length * babylonjs_Meshes_mesh__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.GetTypeByteLength(componentType) };
        var bufferViewIndex = this._exporter._bufferViews.length;
        this._exporter._bufferViews.push(bv);
        // finally build the accessor
        var accessorIndex = this._exporter._accessors.length;
        var accessor = {
            bufferView: bufferViewIndex,
            componentType: componentType,
            count: count,
            type: type,
            normalized: componentType == 5120 /* AccessorComponentType.BYTE */ || componentType == 5122 /* AccessorComponentType.SHORT */,
        };
        this._exporter._accessors.push(accessor);
        return accessorIndex;
    };
    return EXT_mesh_gpu_instancing;
}());

// eslint-disable-next-line @typescript-eslint/no-unused-vars
_glTFExporter__WEBPACK_IMPORTED_MODULE_0__._Exporter.RegisterExtension(NAME, function (exporter) { return new EXT_mesh_gpu_instancing(exporter); });


/***/ }),

/***/ "../../../dev/serializers/src/glTF/2.0/Extensions/KHR_lights_punctual.ts":
/*!*******************************************************************************!*\
  !*** ../../../dev/serializers/src/glTF/2.0/Extensions/KHR_lights_punctual.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KHR_lights_punctual: () => (/* binding */ KHR_lights_punctual)
/* harmony export */ });
/* harmony import */ var babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Misc/logger */ "babylonjs/Maths/math.vector");
/* harmony import */ var babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _glTFExporter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../glTFExporter */ "../../../dev/serializers/src/glTF/2.0/glTFExporter.ts");






var NAME = "KHR_lights_punctual";
/**
 * [Specification](https://github.com/KhronosGroup/glTF/blob/master/extensions/2.0/Khronos/KHR_lights_punctual/README.md)
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
var KHR_lights_punctual = /** @class */ (function () {
    /**
     * @internal
     */
    function KHR_lights_punctual(exporter) {
        /** The name of this extension. */
        this.name = NAME;
        /** Defines whether this extension is enabled. */
        this.enabled = true;
        /** Defines whether this extension is required */
        this.required = false;
        this._exporter = exporter;
    }
    /** @internal */
    KHR_lights_punctual.prototype.dispose = function () {
        this._lights = null;
    };
    Object.defineProperty(KHR_lights_punctual.prototype, "wasUsed", {
        /** @internal */
        get: function () {
            return !!this._lights;
        },
        enumerable: false,
        configurable: true
    });
    /** @internal */
    KHR_lights_punctual.prototype.onExporting = function () {
        this._exporter._glTF.extensions[NAME] = this._lights;
    };
    /**
     * Define this method to modify the default behavior when exporting a node
     * @param context The context when exporting the node
     * @param node glTF node
     * @param babylonNode BabylonJS node
     * @param nodeMap Node mapping of unique id to glTF node index
     * @returns nullable INode promise
     */
    KHR_lights_punctual.prototype.postExportNodeAsync = function (context, node, babylonNode, nodeMap) {
        var _this = this;
        return new Promise(function (resolve) {
            if (node && babylonNode instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.ShadowLight) {
                var light = void 0;
                var lightType = babylonNode.getTypeID() == babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Light.LIGHTTYPEID_POINTLIGHT
                    ? "point" /* KHRLightsPunctual_LightType.POINT */
                    : babylonNode.getTypeID() == babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Light.LIGHTTYPEID_DIRECTIONALLIGHT
                        ? "directional" /* KHRLightsPunctual_LightType.DIRECTIONAL */
                        : babylonNode.getTypeID() == babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Light.LIGHTTYPEID_SPOTLIGHT
                            ? "spot" /* KHRLightsPunctual_LightType.SPOT */
                            : null;
                if (lightType == null) {
                    babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Logger.Warn("".concat(context, ": Light ").concat(babylonNode.name, " is not supported in ").concat(NAME));
                }
                else {
                    if (!babylonNode.position.equalsToFloats(0, 0, 0)) {
                        node.translation = babylonNode.position.asArray();
                    }
                    if (lightType !== "point" /* KHRLightsPunctual_LightType.POINT */) {
                        var localAxis = babylonNode.direction;
                        var yaw = -Math.atan2(localAxis.z, localAxis.x) + Math.PI / 2;
                        var len = Math.sqrt(localAxis.x * localAxis.x + localAxis.z * localAxis.z);
                        var pitch = -Math.atan2(localAxis.y, len);
                        var lightRotationQuaternion = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.RotationYawPitchRoll(yaw + Math.PI, pitch, 0);
                        if (!babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.IsIdentity(lightRotationQuaternion)) {
                            node.rotation = lightRotationQuaternion.asArray();
                        }
                    }
                    if (babylonNode.falloffType !== babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Light.FALLOFF_GLTF) {
                        babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Logger.Warn("".concat(context, ": Light falloff for ").concat(babylonNode.name, " does not match the ").concat(NAME, " specification!"));
                    }
                    light = {
                        type: lightType,
                    };
                    if (!babylonNode.diffuse.equals(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Color3.White())) {
                        light.color = babylonNode.diffuse.asArray();
                    }
                    if (babylonNode.intensity !== 1.0) {
                        light.intensity = babylonNode.intensity;
                    }
                    if (babylonNode.range !== Number.MAX_VALUE) {
                        light.range = babylonNode.range;
                    }
                    if (lightType === "spot" /* KHRLightsPunctual_LightType.SPOT */) {
                        var babylonSpotLight = babylonNode;
                        if (babylonSpotLight.angle !== Math.PI / 2.0) {
                            if (light.spot == null) {
                                light.spot = {};
                            }
                            light.spot.outerConeAngle = babylonSpotLight.angle / 2.0;
                        }
                        if (babylonSpotLight.innerAngle !== 0) {
                            if (light.spot == null) {
                                light.spot = {};
                            }
                            light.spot.innerConeAngle = babylonSpotLight.innerAngle / 2.0;
                        }
                    }
                    _this._lights || (_this._lights = {
                        lights: [],
                    });
                    _this._lights.lights.push(light);
                    var lightReference = {
                        light: _this._lights.lights.length - 1,
                    };
                    // Avoid duplicating the Light's parent node if possible.
                    var parentBabylonNode = babylonNode.parent;
                    if (parentBabylonNode && parentBabylonNode.getChildren().length == 1) {
                        var parentNode = _this._exporter._nodes[nodeMap[parentBabylonNode.uniqueId]];
                        if (parentNode) {
                            var parentTranslation = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArrayToRef(parentNode.translation || [0, 0, 0], 0, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Vector3[0]);
                            var parentRotation = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.FromArrayToRef(parentNode.rotation || [0, 0, 0, 1], 0, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Quaternion[0]);
                            var parentScale = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArrayToRef(parentNode.scale || [1, 1, 1], 0, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Vector3[1]);
                            var parentMatrix = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Matrix.ComposeToRef(parentScale, parentRotation, parentTranslation, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Matrix[0]);
                            var translation = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArrayToRef(node.translation || [0, 0, 0], 0, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Vector3[2]);
                            var rotation = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.FromArrayToRef(node.rotation || [0, 0, 0, 1], 0, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Quaternion[1]);
                            var matrix = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Matrix.ComposeToRef(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.OneReadOnly, rotation, translation, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Matrix[1]);
                            parentMatrix.multiplyToRef(matrix, matrix);
                            matrix.decompose(parentScale, parentRotation, parentTranslation);
                            if (parentTranslation.equalsToFloats(0, 0, 0)) {
                                delete parentNode.translation;
                            }
                            else {
                                parentNode.translation = parentTranslation.asArray();
                            }
                            if (babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.IsIdentity(parentRotation)) {
                                delete parentNode.rotation;
                            }
                            else {
                                parentNode.rotation = parentRotation.asArray();
                            }
                            if (parentScale.equalsToFloats(1, 1, 1)) {
                                delete parentNode.scale;
                            }
                            else {
                                parentNode.scale = parentScale.asArray();
                            }
                            parentNode.extensions || (parentNode.extensions = {});
                            parentNode.extensions[NAME] = lightReference;
                            // Do not export the original node
                            resolve(null);
                            return;
                        }
                    }
                    node.extensions || (node.extensions = {});
                    node.extensions[NAME] = lightReference;
                }
            }
            resolve(node);
        });
    };
    return KHR_lights_punctual;
}());

_glTFExporter__WEBPACK_IMPORTED_MODULE_1__._Exporter.RegisterExtension(NAME, function (exporter) { return new KHR_lights_punctual(exporter); });


/***/ }),

/***/ "../../../dev/serializers/src/glTF/2.0/Extensions/KHR_materials_anisotropy.ts":
/*!************************************************************************************!*\
  !*** ../../../dev/serializers/src/glTF/2.0/Extensions/KHR_materials_anisotropy.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KHR_materials_anisotropy: () => (/* binding */ KHR_materials_anisotropy)
/* harmony export */ });
/* harmony import */ var _glTFExporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../glTFExporter */ "../../../dev/serializers/src/glTF/2.0/glTFExporter.ts");
/* harmony import */ var babylonjs_Materials_PBR_pbrBaseMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs/Materials/PBR/pbrBaseMaterial */ "babylonjs/Maths/math.vector");
/* harmony import */ var babylonjs_Materials_PBR_pbrBaseMaterial__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Materials_PBR_pbrBaseMaterial__WEBPACK_IMPORTED_MODULE_1__);


var NAME = "KHR_materials_anisotropy";
/**
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
var KHR_materials_anisotropy = /** @class */ (function () {
    function KHR_materials_anisotropy(exporter) {
        /** Name of this extension */
        this.name = NAME;
        /** Defines whether this extension is enabled */
        this.enabled = true;
        /** Defines whether this extension is required */
        this.required = false;
        this._wasUsed = false;
        this._exporter = exporter;
    }
    KHR_materials_anisotropy.prototype.dispose = function () { };
    Object.defineProperty(KHR_materials_anisotropy.prototype, "wasUsed", {
        /** @internal */
        get: function () {
            return this._wasUsed;
        },
        enumerable: false,
        configurable: true
    });
    KHR_materials_anisotropy.prototype.postExportMaterialAdditionalTextures = function (context, node, babylonMaterial) {
        var additionalTextures = [];
        if (babylonMaterial instanceof babylonjs_Materials_PBR_pbrBaseMaterial__WEBPACK_IMPORTED_MODULE_1__.PBRBaseMaterial) {
            if (babylonMaterial.anisotropy.isEnabled && !babylonMaterial.anisotropy.legacy) {
                if (babylonMaterial.anisotropy.texture) {
                    additionalTextures.push(babylonMaterial.anisotropy.texture);
                }
                return additionalTextures;
            }
        }
        return [];
    };
    KHR_materials_anisotropy.prototype.postExportMaterialAsync = function (context, node, babylonMaterial) {
        var _this = this;
        return new Promise(function (resolve) {
            if (babylonMaterial instanceof babylonjs_Materials_PBR_pbrBaseMaterial__WEBPACK_IMPORTED_MODULE_1__.PBRBaseMaterial) {
                if (!babylonMaterial.anisotropy.isEnabled || babylonMaterial.anisotropy.legacy) {
                    resolve(node);
                    return;
                }
                _this._wasUsed = true;
                node.extensions = node.extensions || {};
                var anisotropyTextureInfo = _this._exporter._glTFMaterialExporter._getTextureInfo(babylonMaterial.anisotropy.texture);
                var anisotropyInfo_1 = {
                    anisotropyStrength: babylonMaterial.anisotropy.intensity,
                    anisotropyRotation: babylonMaterial.anisotropy.angle,
                    anisotropyTexture: anisotropyTextureInfo !== null && anisotropyTextureInfo !== void 0 ? anisotropyTextureInfo : undefined,
                    hasTextures: function () {
                        return anisotropyInfo_1.anisotropyTexture !== null;
                    },
                };
                node.extensions[NAME] = anisotropyInfo_1;
            }
            resolve(node);
        });
    };
    return KHR_materials_anisotropy;
}());

_glTFExporter__WEBPACK_IMPORTED_MODULE_0__._Exporter.RegisterExtension(NAME, function (exporter) { return new KHR_materials_anisotropy(exporter); });


/***/ }),

/***/ "../../../dev/serializers/src/glTF/2.0/Extensions/KHR_materials_clearcoat.ts":
/*!***********************************************************************************!*\
  !*** ../../../dev/serializers/src/glTF/2.0/Extensions/KHR_materials_clearcoat.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KHR_materials_clearcoat: () => (/* binding */ KHR_materials_clearcoat)
/* harmony export */ });
/* harmony import */ var _glTFExporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../glTFExporter */ "../../../dev/serializers/src/glTF/2.0/glTFExporter.ts");
/* harmony import */ var babylonjs_Materials_PBR_pbrBaseMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs/Misc/tools */ "babylonjs/Maths/math.vector");
/* harmony import */ var babylonjs_Materials_PBR_pbrBaseMaterial__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Materials_PBR_pbrBaseMaterial__WEBPACK_IMPORTED_MODULE_1__);



var NAME = "KHR_materials_clearcoat";
/**
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
var KHR_materials_clearcoat = /** @class */ (function () {
    function KHR_materials_clearcoat(exporter) {
        /** Name of this extension */
        this.name = NAME;
        /** Defines whether this extension is enabled */
        this.enabled = true;
        /** Defines whether this extension is required */
        this.required = false;
        this._wasUsed = false;
        this._exporter = exporter;
    }
    KHR_materials_clearcoat.prototype.dispose = function () { };
    Object.defineProperty(KHR_materials_clearcoat.prototype, "wasUsed", {
        /** @internal */
        get: function () {
            return this._wasUsed;
        },
        enumerable: false,
        configurable: true
    });
    KHR_materials_clearcoat.prototype.postExportMaterialAdditionalTextures = function (context, node, babylonMaterial) {
        var additionalTextures = [];
        if (babylonMaterial instanceof babylonjs_Materials_PBR_pbrBaseMaterial__WEBPACK_IMPORTED_MODULE_1__.PBRBaseMaterial) {
            if (babylonMaterial.clearCoat.isEnabled) {
                if (babylonMaterial.clearCoat.texture) {
                    additionalTextures.push(babylonMaterial.clearCoat.texture);
                }
                if (!babylonMaterial.clearCoat.useRoughnessFromMainTexture && babylonMaterial.clearCoat.textureRoughness) {
                    additionalTextures.push(babylonMaterial.clearCoat.textureRoughness);
                }
                if (babylonMaterial.clearCoat.bumpTexture) {
                    additionalTextures.push(babylonMaterial.clearCoat.bumpTexture);
                }
                return additionalTextures;
            }
        }
        return [];
    };
    KHR_materials_clearcoat.prototype.postExportMaterialAsync = function (context, node, babylonMaterial) {
        var _this = this;
        return new Promise(function (resolve) {
            if (babylonMaterial instanceof babylonjs_Materials_PBR_pbrBaseMaterial__WEBPACK_IMPORTED_MODULE_1__.PBRBaseMaterial) {
                if (!babylonMaterial.clearCoat.isEnabled) {
                    resolve(node);
                    return;
                }
                _this._wasUsed = true;
                node.extensions = node.extensions || {};
                var clearCoatTextureInfo = _this._exporter._glTFMaterialExporter._getTextureInfo(babylonMaterial.clearCoat.texture);
                var clearCoatTextureRoughnessInfo = void 0;
                if (babylonMaterial.clearCoat.useRoughnessFromMainTexture) {
                    clearCoatTextureRoughnessInfo = _this._exporter._glTFMaterialExporter._getTextureInfo(babylonMaterial.clearCoat.texture);
                }
                else {
                    clearCoatTextureRoughnessInfo = _this._exporter._glTFMaterialExporter._getTextureInfo(babylonMaterial.clearCoat.textureRoughness);
                }
                if (babylonMaterial.clearCoat.isTintEnabled) {
                    babylonjs_Materials_PBR_pbrBaseMaterial__WEBPACK_IMPORTED_MODULE_1__.Tools.Warn("Clear Color tint is not supported for glTF export. Ignoring for: ".concat(babylonMaterial.name));
                }
                if (babylonMaterial.clearCoat.remapF0OnInterfaceChange) {
                    babylonjs_Materials_PBR_pbrBaseMaterial__WEBPACK_IMPORTED_MODULE_1__.Tools.Warn("Clear Color F0 remapping is not supported for glTF export. Ignoring for: ".concat(babylonMaterial.name));
                }
                var clearCoatNormalTextureInfo = _this._exporter._glTFMaterialExporter._getTextureInfo(babylonMaterial.clearCoat.bumpTexture);
                var clearCoatInfo_1 = {
                    clearcoatFactor: babylonMaterial.clearCoat.intensity,
                    clearcoatTexture: clearCoatTextureInfo !== null && clearCoatTextureInfo !== void 0 ? clearCoatTextureInfo : undefined,
                    clearcoatRoughnessFactor: babylonMaterial.clearCoat.roughness,
                    clearcoatRoughnessTexture: clearCoatTextureRoughnessInfo !== null && clearCoatTextureRoughnessInfo !== void 0 ? clearCoatTextureRoughnessInfo : undefined,
                    clearcoatNormalTexture: clearCoatNormalTextureInfo !== null && clearCoatNormalTextureInfo !== void 0 ? clearCoatNormalTextureInfo : undefined,
                    hasTextures: function () {
                        return clearCoatInfo_1.clearcoatTexture !== null || clearCoatInfo_1.clearcoatRoughnessTexture !== null || clearCoatInfo_1.clearcoatRoughnessTexture !== null;
                    },
                };
                node.extensions[NAME] = clearCoatInfo_1;
            }
            resolve(node);
        });
    };
    return KHR_materials_clearcoat;
}());

_glTFExporter__WEBPACK_IMPORTED_MODULE_0__._Exporter.RegisterExtension(NAME, function (exporter) { return new KHR_materials_clearcoat(exporter); });


/***/ }),

/***/ "../../../dev/serializers/src/glTF/2.0/Extensions/KHR_materials_diffuse_transmission.ts":
/*!**********************************************************************************************!*\
  !*** ../../../dev/serializers/src/glTF/2.0/Extensions/KHR_materials_diffuse_transmission.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KHR_materials_diffuse_transmission: () => (/* binding */ KHR_materials_diffuse_transmission)
/* harmony export */ });
/* harmony import */ var _glTFExporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../glTFExporter */ "../../../dev/serializers/src/glTF/2.0/glTFExporter.ts");
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs/Materials/PBR/pbrMaterial */ "babylonjs/Maths/math.vector");
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__);


var NAME = "KHR_materials_diffuse_transmission";
/**
 * [Proposed Specification](https://github.com/KhronosGroup/glTF/pull/1825)
 * !!! Experimental Extension Subject to Changes !!!
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
var KHR_materials_diffuse_transmission = /** @class */ (function () {
    function KHR_materials_diffuse_transmission(exporter) {
        /** Name of this extension */
        this.name = NAME;
        /** Defines whether this extension is enabled */
        this.enabled = true;
        /** Defines whether this extension is required */
        this.required = false;
        this._wasUsed = false;
        this._exporter = exporter;
    }
    KHR_materials_diffuse_transmission.prototype.dispose = function () { };
    Object.defineProperty(KHR_materials_diffuse_transmission.prototype, "wasUsed", {
        /** @internal */
        get: function () {
            return this._wasUsed;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * After exporting a material, deal with additional textures
     * @param context GLTF context of the material
     * @param node exported GLTF node
     * @param babylonMaterial corresponding babylon material
     * @returns array of additional textures to export
     */
    KHR_materials_diffuse_transmission.prototype.postExportMaterialAdditionalTextures = function (context, node, babylonMaterial) {
        var additionalTextures = [];
        if (babylonMaterial instanceof babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__.PBRMaterial) {
            if (this._isExtensionEnabled(babylonMaterial)) {
                if (babylonMaterial.subSurface.thicknessTexture) {
                    additionalTextures.push(babylonMaterial.subSurface.thicknessTexture);
                }
                return additionalTextures;
            }
        }
        return additionalTextures;
    };
    KHR_materials_diffuse_transmission.prototype._isExtensionEnabled = function (mat) {
        // This extension must not be used on a material that also uses KHR_materials_unlit
        if (mat.unlit) {
            return false;
        }
        var subs = mat.subSurface;
        if (!subs.isTranslucencyEnabled) {
            return false;
        }
        return (!mat.unlit &&
            !subs.useAlbedoToTintTranslucency &&
            subs.useGltfStyleTextures &&
            subs.volumeIndexOfRefraction === 1 &&
            subs.minimumThickness === 0 &&
            subs.maximumThickness === 0);
    };
    KHR_materials_diffuse_transmission.prototype._hasTexturesExtension = function (mat) {
        return mat.subSurface.translucencyIntensityTexture != null || mat.subSurface.translucencyColorTexture != null;
    };
    /**
     * After exporting a material
     * @param context GLTF context of the material
     * @param node exported GLTF node
     * @param babylonMaterial corresponding babylon material
     * @returns promise that resolves with the updated node
     */
    KHR_materials_diffuse_transmission.prototype.postExportMaterialAsync = function (context, node, babylonMaterial) {
        var _this = this;
        return new Promise(function (resolve) {
            var _a, _b;
            if (babylonMaterial instanceof babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__.PBRMaterial && _this._isExtensionEnabled(babylonMaterial)) {
                _this._wasUsed = true;
                var subs = babylonMaterial.subSurface;
                var diffuseTransmissionFactor = subs.translucencyIntensity == 1 ? undefined : subs.translucencyIntensity;
                var diffuseTransmissionTexture = (_a = _this._exporter._glTFMaterialExporter._getTextureInfo(subs.translucencyIntensityTexture)) !== null && _a !== void 0 ? _a : undefined;
                var diffuseTransmissionColorFactor = !subs.translucencyColor || subs.translucencyColor.equalsFloats(1.0, 1.0, 1.0) ? undefined : subs.translucencyColor.asArray();
                var diffuseTransmissionColorTexture = (_b = _this._exporter._glTFMaterialExporter._getTextureInfo(subs.translucencyColorTexture)) !== null && _b !== void 0 ? _b : undefined;
                var diffuseTransmissionInfo = {
                    diffuseTransmissionFactor: diffuseTransmissionFactor,
                    diffuseTransmissionTexture: diffuseTransmissionTexture,
                    diffuseTransmissionColorFactor: diffuseTransmissionColorFactor,
                    diffuseTransmissionColorTexture: diffuseTransmissionColorTexture,
                    hasTextures: function () {
                        return _this._hasTexturesExtension(babylonMaterial);
                    },
                };
                node.extensions = node.extensions || {};
                node.extensions[NAME] = diffuseTransmissionInfo;
            }
            resolve(node);
        });
    };
    return KHR_materials_diffuse_transmission;
}());

_glTFExporter__WEBPACK_IMPORTED_MODULE_0__._Exporter.RegisterExtension(NAME, function (exporter) { return new KHR_materials_diffuse_transmission(exporter); });


/***/ }),

/***/ "../../../dev/serializers/src/glTF/2.0/Extensions/KHR_materials_dispersion.ts":
/*!************************************************************************************!*\
  !*** ../../../dev/serializers/src/glTF/2.0/Extensions/KHR_materials_dispersion.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KHR_materials_dispersion: () => (/* binding */ KHR_materials_dispersion)
/* harmony export */ });
/* harmony import */ var _glTFExporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../glTFExporter */ "../../../dev/serializers/src/glTF/2.0/glTFExporter.ts");
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs/Materials/PBR/pbrMaterial */ "babylonjs/Maths/math.vector");
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__);


var NAME = "KHR_materials_dispersion";
/**
 * [Specification](https://github.com/KhronosGroup/glTF/blob/87bd64a7f5e23c84b6aef2e6082069583ed0ddb4/extensions/2.0/Khronos/KHR_materials_dispersion/README.md)
 * @experimental
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
var KHR_materials_dispersion = /** @class */ (function () {
    /** Constructor */
    function KHR_materials_dispersion() {
        /** Name of this extension */
        this.name = NAME;
        /** Defines whether this extension is enabled */
        this.enabled = true;
        /** Defines whether this extension is required */
        this.required = false;
        this._wasUsed = false;
    }
    /** Dispose */
    KHR_materials_dispersion.prototype.dispose = function () { };
    Object.defineProperty(KHR_materials_dispersion.prototype, "wasUsed", {
        /** @internal */
        get: function () {
            return this._wasUsed;
        },
        enumerable: false,
        configurable: true
    });
    KHR_materials_dispersion.prototype._isExtensionEnabled = function (mat) {
        // This extension must not be used on a material that also uses KHR_materials_unlit
        if (mat.unlit) {
            return false;
        }
        var subs = mat.subSurface;
        // this extension requires refraction to be enabled.
        if (!subs.isRefractionEnabled && !subs.isDispersionEnabled) {
            return false;
        }
        return true;
    };
    /**
     * After exporting a material
     * @param context GLTF context of the material
     * @param node exported GLTF node
     * @param babylonMaterial corresponding babylon material
     * @returns promise, resolves with the material
     */
    KHR_materials_dispersion.prototype.postExportMaterialAsync = function (context, node, babylonMaterial) {
        var _this = this;
        return new Promise(function (resolve) {
            if (babylonMaterial instanceof babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__.PBRMaterial && _this._isExtensionEnabled(babylonMaterial)) {
                _this._wasUsed = true;
                var subs = babylonMaterial.subSurface;
                var dispersion = subs.dispersion;
                var dispersionInfo = {
                    dispersion: dispersion,
                };
                node.extensions = node.extensions || {};
                node.extensions[NAME] = dispersionInfo;
            }
            resolve(node);
        });
    };
    return KHR_materials_dispersion;
}());

_glTFExporter__WEBPACK_IMPORTED_MODULE_0__._Exporter.RegisterExtension(NAME, function () { return new KHR_materials_dispersion(); });


/***/ }),

/***/ "../../../dev/serializers/src/glTF/2.0/Extensions/KHR_materials_emissive_strength.ts":
/*!*******************************************************************************************!*\
  !*** ../../../dev/serializers/src/glTF/2.0/Extensions/KHR_materials_emissive_strength.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KHR_materials_emissive_strength: () => (/* binding */ KHR_materials_emissive_strength)
/* harmony export */ });
/* harmony import */ var _glTFExporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../glTFExporter */ "../../../dev/serializers/src/glTF/2.0/glTFExporter.ts");
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs/Materials/PBR/pbrMaterial */ "babylonjs/Maths/math.vector");
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__);


var NAME = "KHR_materials_emissive_strength";
/**
 * [Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_materials_emissive_strength/README.md)
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
var KHR_materials_emissive_strength = /** @class */ (function () {
    function KHR_materials_emissive_strength() {
        /** Name of this extension */
        this.name = NAME;
        /** Defines whether this extension is enabled */
        this.enabled = true;
        /** Defines whether this extension is required */
        this.required = false;
        this._wasUsed = false;
    }
    /** Dispose */
    KHR_materials_emissive_strength.prototype.dispose = function () { };
    Object.defineProperty(KHR_materials_emissive_strength.prototype, "wasUsed", {
        /** @internal */
        get: function () {
            return this._wasUsed;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * After exporting a material
     * @param context GLTF context of the material
     * @param node exported GLTF node
     * @param babylonMaterial corresponding babylon material
     * @returns promise, resolves with the material
     */
    KHR_materials_emissive_strength.prototype.postExportMaterialAsync = function (context, node, babylonMaterial) {
        var _this = this;
        return new Promise(function (resolve) {
            if (!(babylonMaterial instanceof babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__.PBRMaterial)) {
                return resolve(node);
            }
            var emissiveColor = babylonMaterial.emissiveColor.asArray();
            var tempEmissiveStrength = Math.max.apply(Math, emissiveColor);
            if (tempEmissiveStrength > 1) {
                _this._wasUsed = true;
                node.extensions || (node.extensions = {});
                var emissiveStrengthInfo = {
                    emissiveStrength: tempEmissiveStrength,
                };
                // Normalize each value of the emissive factor to have a max value of 1
                var newEmissiveFactor = babylonMaterial.emissiveColor.scale(1 / emissiveStrengthInfo.emissiveStrength);
                node.emissiveFactor = newEmissiveFactor.asArray();
                node.extensions[NAME] = emissiveStrengthInfo;
            }
            return resolve(node);
        });
    };
    return KHR_materials_emissive_strength;
}());

_glTFExporter__WEBPACK_IMPORTED_MODULE_0__._Exporter.RegisterExtension(NAME, function (exporter) { return new KHR_materials_emissive_strength(); });


/***/ }),

/***/ "../../../dev/serializers/src/glTF/2.0/Extensions/KHR_materials_ior.ts":
/*!*****************************************************************************!*\
  !*** ../../../dev/serializers/src/glTF/2.0/Extensions/KHR_materials_ior.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KHR_materials_ior: () => (/* binding */ KHR_materials_ior)
/* harmony export */ });
/* harmony import */ var _glTFExporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../glTFExporter */ "../../../dev/serializers/src/glTF/2.0/glTFExporter.ts");
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs/Materials/PBR/pbrMaterial */ "babylonjs/Maths/math.vector");
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__);


var NAME = "KHR_materials_ior";
/**
 * [Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_materials_ior/README.md)
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
var KHR_materials_ior = /** @class */ (function () {
    function KHR_materials_ior() {
        /** Name of this extension */
        this.name = NAME;
        /** Defines whether this extension is enabled */
        this.enabled = true;
        /** Defines whether this extension is required */
        this.required = false;
        this._wasUsed = false;
    }
    /** Dispose */
    KHR_materials_ior.prototype.dispose = function () { };
    Object.defineProperty(KHR_materials_ior.prototype, "wasUsed", {
        /** @internal */
        get: function () {
            return this._wasUsed;
        },
        enumerable: false,
        configurable: true
    });
    KHR_materials_ior.prototype._isExtensionEnabled = function (mat) {
        // This extension must not be used on a material that also uses KHR_materials_unlit
        if (mat.unlit) {
            return false;
        }
        return mat.indexOfRefraction != undefined && mat.indexOfRefraction != 1.5; // 1.5 is normative default value.
    };
    /**
     * After exporting a material
     * @param context GLTF context of the material
     * @param node exported GLTF node
     * @param babylonMaterial corresponding babylon material
     * @returns promise, resolves with the material
     */
    KHR_materials_ior.prototype.postExportMaterialAsync = function (context, node, babylonMaterial) {
        var _this = this;
        return new Promise(function (resolve) {
            if (babylonMaterial instanceof babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__.PBRMaterial && _this._isExtensionEnabled(babylonMaterial)) {
                _this._wasUsed = true;
                var iorInfo = {
                    ior: babylonMaterial.indexOfRefraction,
                };
                node.extensions = node.extensions || {};
                node.extensions[NAME] = iorInfo;
            }
            resolve(node);
        });
    };
    return KHR_materials_ior;
}());

// eslint-disable-next-line @typescript-eslint/no-unused-vars
_glTFExporter__WEBPACK_IMPORTED_MODULE_0__._Exporter.RegisterExtension(NAME, function (exporter) { return new KHR_materials_ior(); });


/***/ }),

/***/ "../../../dev/serializers/src/glTF/2.0/Extensions/KHR_materials_iridescence.ts":
/*!*************************************************************************************!*\
  !*** ../../../dev/serializers/src/glTF/2.0/Extensions/KHR_materials_iridescence.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KHR_materials_iridescence: () => (/* binding */ KHR_materials_iridescence)
/* harmony export */ });
/* harmony import */ var _glTFExporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../glTFExporter */ "../../../dev/serializers/src/glTF/2.0/glTFExporter.ts");
/* harmony import */ var babylonjs_Materials_PBR_pbrBaseMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs/Materials/PBR/pbrBaseMaterial */ "babylonjs/Maths/math.vector");
/* harmony import */ var babylonjs_Materials_PBR_pbrBaseMaterial__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Materials_PBR_pbrBaseMaterial__WEBPACK_IMPORTED_MODULE_1__);


var NAME = "KHR_materials_iridescence";
/**
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
var KHR_materials_iridescence = /** @class */ (function () {
    function KHR_materials_iridescence(exporter) {
        /** Name of this extension */
        this.name = NAME;
        /** Defines whether this extension is enabled */
        this.enabled = true;
        /** Defines whether this extension is required */
        this.required = false;
        this._wasUsed = false;
        this._exporter = exporter;
    }
    KHR_materials_iridescence.prototype.dispose = function () { };
    Object.defineProperty(KHR_materials_iridescence.prototype, "wasUsed", {
        /** @internal */
        get: function () {
            return this._wasUsed;
        },
        enumerable: false,
        configurable: true
    });
    KHR_materials_iridescence.prototype.postExportMaterialAdditionalTextures = function (context, node, babylonMaterial) {
        var additionalTextures = [];
        if (babylonMaterial instanceof babylonjs_Materials_PBR_pbrBaseMaterial__WEBPACK_IMPORTED_MODULE_1__.PBRBaseMaterial) {
            if (babylonMaterial.iridescence.isEnabled) {
                if (babylonMaterial.iridescence.texture) {
                    additionalTextures.push(babylonMaterial.iridescence.texture);
                }
                if (babylonMaterial.iridescence.thicknessTexture && babylonMaterial.iridescence.thicknessTexture !== babylonMaterial.iridescence.texture) {
                    additionalTextures.push(babylonMaterial.iridescence.thicknessTexture);
                }
                return additionalTextures;
            }
        }
        return [];
    };
    KHR_materials_iridescence.prototype.postExportMaterialAsync = function (context, node, babylonMaterial) {
        var _this = this;
        return new Promise(function (resolve) {
            if (babylonMaterial instanceof babylonjs_Materials_PBR_pbrBaseMaterial__WEBPACK_IMPORTED_MODULE_1__.PBRBaseMaterial) {
                if (!babylonMaterial.iridescence.isEnabled) {
                    resolve(node);
                    return;
                }
                _this._wasUsed = true;
                node.extensions = node.extensions || {};
                var iridescenceTextureInfo = _this._exporter._glTFMaterialExporter._getTextureInfo(babylonMaterial.iridescence.texture);
                var iridescenceThicknessTextureInfo = _this._exporter._glTFMaterialExporter._getTextureInfo(babylonMaterial.iridescence.thicknessTexture);
                var iridescenceInfo_1 = {
                    iridescenceFactor: babylonMaterial.iridescence.intensity,
                    iridescenceIor: babylonMaterial.iridescence.indexOfRefraction,
                    iridescenceThicknessMinimum: babylonMaterial.iridescence.minimumThickness,
                    iridescenceThicknessMaximum: babylonMaterial.iridescence.maximumThickness,
                    iridescenceTexture: iridescenceTextureInfo !== null && iridescenceTextureInfo !== void 0 ? iridescenceTextureInfo : undefined,
                    iridescenceThicknessTexture: iridescenceThicknessTextureInfo !== null && iridescenceThicknessTextureInfo !== void 0 ? iridescenceThicknessTextureInfo : undefined,
                    hasTextures: function () {
                        return iridescenceInfo_1.iridescenceTexture !== null || iridescenceInfo_1.iridescenceThicknessTexture !== null;
                    },
                };
                node.extensions[NAME] = iridescenceInfo_1;
            }
            resolve(node);
        });
    };
    return KHR_materials_iridescence;
}());

_glTFExporter__WEBPACK_IMPORTED_MODULE_0__._Exporter.RegisterExtension(NAME, function (exporter) { return new KHR_materials_iridescence(exporter); });


/***/ }),

/***/ "../../../dev/serializers/src/glTF/2.0/Extensions/KHR_materials_sheen.ts":
/*!*******************************************************************************!*\
  !*** ../../../dev/serializers/src/glTF/2.0/Extensions/KHR_materials_sheen.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KHR_materials_sheen: () => (/* binding */ KHR_materials_sheen)
/* harmony export */ });
/* harmony import */ var _glTFExporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../glTFExporter */ "../../../dev/serializers/src/glTF/2.0/glTFExporter.ts");
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs/Materials/PBR/pbrMaterial */ "babylonjs/Maths/math.vector");
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__);


var NAME = "KHR_materials_sheen";
/**
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
var KHR_materials_sheen = /** @class */ (function () {
    function KHR_materials_sheen(exporter) {
        /** Name of this extension */
        this.name = NAME;
        /** Defines whether this extension is enabled */
        this.enabled = true;
        /** Defines whether this extension is required */
        this.required = false;
        this._wasUsed = false;
        this._exporter = exporter;
    }
    KHR_materials_sheen.prototype.dispose = function () { };
    Object.defineProperty(KHR_materials_sheen.prototype, "wasUsed", {
        /** @internal */
        get: function () {
            return this._wasUsed;
        },
        enumerable: false,
        configurable: true
    });
    KHR_materials_sheen.prototype.postExportMaterialAdditionalTextures = function (context, node, babylonMaterial) {
        if (babylonMaterial instanceof babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__.PBRMaterial) {
            if (babylonMaterial.sheen.isEnabled && babylonMaterial.sheen.texture) {
                return [babylonMaterial.sheen.texture];
            }
        }
        return [];
    };
    KHR_materials_sheen.prototype.postExportMaterialAsync = function (context, node, babylonMaterial) {
        var _this = this;
        return new Promise(function (resolve) {
            var _a, _b, _c, _d;
            if (babylonMaterial instanceof babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__.PBRMaterial) {
                if (!babylonMaterial.sheen.isEnabled) {
                    resolve(node);
                    return;
                }
                _this._wasUsed = true;
                if (node.extensions == null) {
                    node.extensions = {};
                }
                var sheenInfo_1 = {
                    sheenColorFactor: babylonMaterial.sheen.color.asArray(),
                    sheenRoughnessFactor: (_a = babylonMaterial.sheen.roughness) !== null && _a !== void 0 ? _a : 0,
                    hasTextures: function () {
                        return sheenInfo_1.sheenColorTexture !== null || sheenInfo_1.sheenRoughnessTexture !== null;
                    },
                };
                if (babylonMaterial.sheen.texture) {
                    sheenInfo_1.sheenColorTexture = (_b = _this._exporter._glTFMaterialExporter._getTextureInfo(babylonMaterial.sheen.texture)) !== null && _b !== void 0 ? _b : undefined;
                }
                if (babylonMaterial.sheen.textureRoughness && !babylonMaterial.sheen.useRoughnessFromMainTexture) {
                    sheenInfo_1.sheenRoughnessTexture = (_c = _this._exporter._glTFMaterialExporter._getTextureInfo(babylonMaterial.sheen.textureRoughness)) !== null && _c !== void 0 ? _c : undefined;
                }
                else if (babylonMaterial.sheen.texture && babylonMaterial.sheen.useRoughnessFromMainTexture) {
                    sheenInfo_1.sheenRoughnessTexture = (_d = _this._exporter._glTFMaterialExporter._getTextureInfo(babylonMaterial.sheen.texture)) !== null && _d !== void 0 ? _d : undefined;
                }
                node.extensions[NAME] = sheenInfo_1;
            }
            resolve(node);
        });
    };
    return KHR_materials_sheen;
}());

_glTFExporter__WEBPACK_IMPORTED_MODULE_0__._Exporter.RegisterExtension(NAME, function (exporter) { return new KHR_materials_sheen(exporter); });


/***/ }),

/***/ "../../../dev/serializers/src/glTF/2.0/Extensions/KHR_materials_specular.ts":
/*!**********************************************************************************!*\
  !*** ../../../dev/serializers/src/glTF/2.0/Extensions/KHR_materials_specular.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KHR_materials_specular: () => (/* binding */ KHR_materials_specular)
/* harmony export */ });
/* harmony import */ var _glTFExporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../glTFExporter */ "../../../dev/serializers/src/glTF/2.0/glTFExporter.ts");
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs/Materials/PBR/pbrMaterial */ "babylonjs/Maths/math.vector");
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__);


var NAME = "KHR_materials_specular";
/**
 * [Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_materials_specular/README.md)
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
var KHR_materials_specular = /** @class */ (function () {
    function KHR_materials_specular(exporter) {
        /** Name of this extension */
        this.name = NAME;
        /** Defines whether this extension is enabled */
        this.enabled = true;
        /** Defines whether this extension is required */
        this.required = false;
        this._wasUsed = false;
        this._exporter = exporter;
    }
    /** Dispose */
    KHR_materials_specular.prototype.dispose = function () { };
    Object.defineProperty(KHR_materials_specular.prototype, "wasUsed", {
        /** @internal */
        get: function () {
            return this._wasUsed;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * After exporting a material, deal with the additional textures
     * @param context GLTF context of the material
     * @param node exported GLTF node
     * @param babylonMaterial corresponding babylon material
     * @returns array of additional textures to export
     */
    KHR_materials_specular.prototype.postExportMaterialAdditionalTextures = function (context, node, babylonMaterial) {
        var additionalTextures = [];
        if (babylonMaterial instanceof babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__.PBRMaterial) {
            if (this._isExtensionEnabled(babylonMaterial)) {
                if (babylonMaterial.metallicReflectanceTexture) {
                    additionalTextures.push(babylonMaterial.metallicReflectanceTexture);
                }
                if (babylonMaterial.reflectanceTexture) {
                    additionalTextures.push(babylonMaterial.reflectanceTexture);
                }
                return additionalTextures;
            }
        }
        return additionalTextures;
    };
    KHR_materials_specular.prototype._isExtensionEnabled = function (mat) {
        // This extension must not be used on a material that also uses KHR_materials_unlit
        if (mat.unlit) {
            return false;
        }
        return ((mat.metallicF0Factor != undefined && mat.metallicF0Factor != 1.0) ||
            (mat.metallicReflectanceColor != undefined && !mat.metallicReflectanceColor.equalsFloats(1.0, 1.0, 1.0)) ||
            this._hasTexturesExtension(mat));
    };
    KHR_materials_specular.prototype._hasTexturesExtension = function (mat) {
        return mat.metallicReflectanceTexture != null || mat.reflectanceTexture != null;
    };
    /**
     * After exporting a material
     * @param context GLTF context of the material
     * @param node exported GLTF node
     * @param babylonMaterial corresponding babylon material
     * @returns promise, resolves with the material
     */
    KHR_materials_specular.prototype.postExportMaterialAsync = function (context, node, babylonMaterial) {
        var _this = this;
        return new Promise(function (resolve) {
            var _a, _b;
            if (babylonMaterial instanceof babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__.PBRMaterial && _this._isExtensionEnabled(babylonMaterial)) {
                _this._wasUsed = true;
                node.extensions = node.extensions || {};
                var metallicReflectanceTexture = (_a = _this._exporter._glTFMaterialExporter._getTextureInfo(babylonMaterial.metallicReflectanceTexture)) !== null && _a !== void 0 ? _a : undefined;
                var reflectanceTexture = (_b = _this._exporter._glTFMaterialExporter._getTextureInfo(babylonMaterial.reflectanceTexture)) !== null && _b !== void 0 ? _b : undefined;
                var metallicF0Factor = babylonMaterial.metallicF0Factor == 1.0 ? undefined : babylonMaterial.metallicF0Factor;
                var metallicReflectanceColor = babylonMaterial.metallicReflectanceColor.equalsFloats(1.0, 1.0, 1.0)
                    ? undefined
                    : babylonMaterial.metallicReflectanceColor.asArray();
                var specularInfo = {
                    specularFactor: metallicF0Factor,
                    specularTexture: metallicReflectanceTexture,
                    specularColorFactor: metallicReflectanceColor,
                    specularColorTexture: reflectanceTexture,
                    hasTextures: function () {
                        return _this._hasTexturesExtension(babylonMaterial);
                    },
                };
                node.extensions[NAME] = specularInfo;
            }
            resolve(node);
        });
    };
    return KHR_materials_specular;
}());

_glTFExporter__WEBPACK_IMPORTED_MODULE_0__._Exporter.RegisterExtension(NAME, function (exporter) { return new KHR_materials_specular(exporter); });


/***/ }),

/***/ "../../../dev/serializers/src/glTF/2.0/Extensions/KHR_materials_transmission.ts":
/*!**************************************************************************************!*\
  !*** ../../../dev/serializers/src/glTF/2.0/Extensions/KHR_materials_transmission.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KHR_materials_transmission: () => (/* binding */ KHR_materials_transmission)
/* harmony export */ });
/* harmony import */ var _glTFExporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../glTFExporter */ "../../../dev/serializers/src/glTF/2.0/glTFExporter.ts");
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs/Materials/PBR/pbrMaterial */ "babylonjs/Maths/math.vector");
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__);


var NAME = "KHR_materials_transmission";
/**
 * [Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_materials_transmission/README.md)
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
var KHR_materials_transmission = /** @class */ (function () {
    function KHR_materials_transmission(exporter) {
        /** Name of this extension */
        this.name = NAME;
        /** Defines whether this extension is enabled */
        this.enabled = true;
        /** Defines whether this extension is required */
        this.required = false;
        this._wasUsed = false;
        this._exporter = exporter;
    }
    /** Dispose */
    KHR_materials_transmission.prototype.dispose = function () { };
    Object.defineProperty(KHR_materials_transmission.prototype, "wasUsed", {
        /** @internal */
        get: function () {
            return this._wasUsed;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * After exporting a material, deal with additional textures
     * @param context GLTF context of the material
     * @param node exported GLTF node
     * @param babylonMaterial corresponding babylon material
     * @returns array of additional textures to export
     */
    KHR_materials_transmission.prototype.postExportMaterialAdditionalTextures = function (context, node, babylonMaterial) {
        var additionalTextures = [];
        if (babylonMaterial instanceof babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__.PBRMaterial) {
            if (this._isExtensionEnabled(babylonMaterial)) {
                if (babylonMaterial.subSurface.thicknessTexture) {
                    additionalTextures.push(babylonMaterial.subSurface.thicknessTexture);
                }
                return additionalTextures;
            }
        }
        return additionalTextures;
    };
    KHR_materials_transmission.prototype._isExtensionEnabled = function (mat) {
        // This extension must not be used on a material that also uses KHR_materials_unlit
        if (mat.unlit) {
            return false;
        }
        var subs = mat.subSurface;
        return (subs.isRefractionEnabled && subs.refractionIntensity != undefined && subs.refractionIntensity != 0) || this._hasTexturesExtension(mat);
    };
    KHR_materials_transmission.prototype._hasTexturesExtension = function (mat) {
        return mat.subSurface.refractionIntensityTexture != null;
    };
    /**
     * After exporting a material
     * @param context GLTF context of the material
     * @param node exported GLTF node
     * @param babylonMaterial corresponding babylon material
     * @returns true if successful
     */
    KHR_materials_transmission.prototype.postExportMaterialAsync = function (context, node, babylonMaterial) {
        var _this = this;
        return new Promise(function (resolve) {
            var _a;
            if (babylonMaterial instanceof babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__.PBRMaterial && _this._isExtensionEnabled(babylonMaterial)) {
                _this._wasUsed = true;
                var subs = babylonMaterial.subSurface;
                var transmissionFactor = subs.refractionIntensity === 0 ? undefined : subs.refractionIntensity;
                var transmissionTexture = (_a = _this._exporter._glTFMaterialExporter._getTextureInfo(subs.refractionIntensityTexture)) !== null && _a !== void 0 ? _a : undefined;
                var volumeInfo = {
                    transmissionFactor: transmissionFactor,
                    transmissionTexture: transmissionTexture,
                    hasTextures: function () {
                        return _this._hasTexturesExtension(babylonMaterial);
                    },
                };
                node.extensions = node.extensions || {};
                node.extensions[NAME] = volumeInfo;
            }
            resolve(node);
        });
    };
    return KHR_materials_transmission;
}());

_glTFExporter__WEBPACK_IMPORTED_MODULE_0__._Exporter.RegisterExtension(NAME, function (exporter) { return new KHR_materials_transmission(exporter); });


/***/ }),

/***/ "../../../dev/serializers/src/glTF/2.0/Extensions/KHR_materials_unlit.ts":
/*!*******************************************************************************!*\
  !*** ../../../dev/serializers/src/glTF/2.0/Extensions/KHR_materials_unlit.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KHR_materials_unlit: () => (/* binding */ KHR_materials_unlit)
/* harmony export */ });
/* harmony import */ var _glTFExporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../glTFExporter */ "../../../dev/serializers/src/glTF/2.0/glTFExporter.ts");
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs/Materials/standardMaterial */ "babylonjs/Maths/math.vector");
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__);



var NAME = "KHR_materials_unlit";
/**
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
var KHR_materials_unlit = /** @class */ (function () {
    function KHR_materials_unlit() {
        /** Name of this extension */
        this.name = NAME;
        /** Defines whether this extension is enabled */
        this.enabled = true;
        /** Defines whether this extension is required */
        this.required = false;
        this._wasUsed = false;
    }
    Object.defineProperty(KHR_materials_unlit.prototype, "wasUsed", {
        /** @internal */
        get: function () {
            return this._wasUsed;
        },
        enumerable: false,
        configurable: true
    });
    KHR_materials_unlit.prototype.dispose = function () { };
    KHR_materials_unlit.prototype.postExportMaterialAsync = function (context, node, babylonMaterial) {
        var _this = this;
        return new Promise(function (resolve) {
            var unlitMaterial = false;
            if (babylonMaterial instanceof babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__.PBRMaterial) {
                unlitMaterial = babylonMaterial.unlit;
            }
            else if (babylonMaterial instanceof babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__.StandardMaterial) {
                unlitMaterial = babylonMaterial.disableLighting;
            }
            if (unlitMaterial) {
                _this._wasUsed = true;
                if (node.extensions == null) {
                    node.extensions = {};
                }
                node.extensions[NAME] = {};
            }
            resolve(node);
        });
    };
    return KHR_materials_unlit;
}());

_glTFExporter__WEBPACK_IMPORTED_MODULE_0__._Exporter.RegisterExtension(NAME, function () { return new KHR_materials_unlit(); });


/***/ }),

/***/ "../../../dev/serializers/src/glTF/2.0/Extensions/KHR_materials_volume.ts":
/*!********************************************************************************!*\
  !*** ../../../dev/serializers/src/glTF/2.0/Extensions/KHR_materials_volume.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KHR_materials_volume: () => (/* binding */ KHR_materials_volume)
/* harmony export */ });
/* harmony import */ var _glTFExporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../glTFExporter */ "../../../dev/serializers/src/glTF/2.0/glTFExporter.ts");
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs/Maths/math.color */ "babylonjs/Maths/math.vector");
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__);



var NAME = "KHR_materials_volume";
/**
 * [Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_materials_volume/README.md)
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
var KHR_materials_volume = /** @class */ (function () {
    function KHR_materials_volume(exporter) {
        /** Name of this extension */
        this.name = NAME;
        /** Defines whether this extension is enabled */
        this.enabled = true;
        /** Defines whether this extension is required */
        this.required = false;
        this._wasUsed = false;
        this._exporter = exporter;
    }
    KHR_materials_volume.prototype.dispose = function () { };
    Object.defineProperty(KHR_materials_volume.prototype, "wasUsed", {
        /** @internal */
        get: function () {
            return this._wasUsed;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * After exporting a material, deal with additional textures
     * @param context GLTF context of the material
     * @param node exported GLTF node
     * @param babylonMaterial corresponding babylon material
     * @returns array of additional textures to export
     */
    KHR_materials_volume.prototype.postExportMaterialAdditionalTextures = function (context, node, babylonMaterial) {
        var additionalTextures = [];
        if (babylonMaterial instanceof babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__.PBRMaterial) {
            if (this._isExtensionEnabled(babylonMaterial)) {
                if (babylonMaterial.subSurface.thicknessTexture) {
                    additionalTextures.push(babylonMaterial.subSurface.thicknessTexture);
                }
                return additionalTextures;
            }
        }
        return additionalTextures;
    };
    KHR_materials_volume.prototype._isExtensionEnabled = function (mat) {
        // This extension must not be used on a material that also uses KHR_materials_unlit
        if (mat.unlit) {
            return false;
        }
        var subs = mat.subSurface;
        // this extension requires either the KHR_materials_transmission or KHR_materials_diffuse_transmission extensions.
        if (!subs.isRefractionEnabled && !subs.isTranslucencyEnabled) {
            return false;
        }
        return ((subs.maximumThickness != undefined && subs.maximumThickness != 0) ||
            (subs.tintColorAtDistance != undefined && subs.tintColorAtDistance != Number.POSITIVE_INFINITY) ||
            (subs.tintColor != undefined && subs.tintColor != babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__.Color3.White()) ||
            this._hasTexturesExtension(mat));
    };
    KHR_materials_volume.prototype._hasTexturesExtension = function (mat) {
        return mat.subSurface.thicknessTexture != null;
    };
    /**
     * After exporting a material
     * @param context GLTF context of the material
     * @param node exported GLTF node
     * @param babylonMaterial corresponding babylon material
     * @returns promise that resolves with the updated node
     */
    KHR_materials_volume.prototype.postExportMaterialAsync = function (context, node, babylonMaterial) {
        var _this = this;
        return new Promise(function (resolve) {
            var _a;
            if (babylonMaterial instanceof babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__.PBRMaterial && _this._isExtensionEnabled(babylonMaterial)) {
                _this._wasUsed = true;
                var subs = babylonMaterial.subSurface;
                var thicknessFactor = subs.maximumThickness == 0 ? undefined : subs.maximumThickness;
                var thicknessTexture = (_a = _this._exporter._glTFMaterialExporter._getTextureInfo(subs.thicknessTexture)) !== null && _a !== void 0 ? _a : undefined;
                var attenuationDistance = subs.tintColorAtDistance == Number.POSITIVE_INFINITY ? undefined : subs.tintColorAtDistance;
                var attenuationColor = subs.tintColor.equalsFloats(1.0, 1.0, 1.0) ? undefined : subs.tintColor.asArray();
                var volumeInfo = {
                    thicknessFactor: thicknessFactor,
                    thicknessTexture: thicknessTexture,
                    attenuationDistance: attenuationDistance,
                    attenuationColor: attenuationColor,
                    hasTextures: function () {
                        return _this._hasTexturesExtension(babylonMaterial);
                    },
                };
                node.extensions = node.extensions || {};
                node.extensions[NAME] = volumeInfo;
            }
            resolve(node);
        });
    };
    return KHR_materials_volume;
}());

_glTFExporter__WEBPACK_IMPORTED_MODULE_0__._Exporter.RegisterExtension(NAME, function (exporter) { return new KHR_materials_volume(exporter); });


/***/ }),

/***/ "../../../dev/serializers/src/glTF/2.0/Extensions/KHR_texture_transform.ts":
/*!*********************************************************************************!*\
  !*** ../../../dev/serializers/src/glTF/2.0/Extensions/KHR_texture_transform.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KHR_texture_transform: () => (/* binding */ KHR_texture_transform)
/* harmony export */ });
/* harmony import */ var babylonjs_Misc_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Misc/tools */ "babylonjs/Maths/math.vector");
/* harmony import */ var babylonjs_Misc_tools__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Misc_tools__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _glTFExporter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../glTFExporter */ "../../../dev/serializers/src/glTF/2.0/glTFExporter.ts");


var NAME = "KHR_texture_transform";
/**
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
var KHR_texture_transform = /** @class */ (function () {
    function KHR_texture_transform() {
        /** Name of this extension */
        this.name = NAME;
        /** Defines whether this extension is enabled */
        this.enabled = true;
        /** Defines whether this extension is required */
        this.required = false;
        /** Reference to the glTF exporter */
        this._wasUsed = false;
    }
    KHR_texture_transform.prototype.dispose = function () { };
    Object.defineProperty(KHR_texture_transform.prototype, "wasUsed", {
        /** @internal */
        get: function () {
            return this._wasUsed;
        },
        enumerable: false,
        configurable: true
    });
    KHR_texture_transform.prototype.postExportTexture = function (context, textureInfo, babylonTexture) {
        var canUseExtension = babylonTexture &&
            ((babylonTexture.uAng === 0 && babylonTexture.wAng === 0 && babylonTexture.vAng === 0) ||
                (babylonTexture.uRotationCenter === 0 && babylonTexture.vRotationCenter === 0));
        if (canUseExtension) {
            var textureTransform = {};
            var transformIsRequired = false;
            if (babylonTexture.uOffset !== 0 || babylonTexture.vOffset !== 0) {
                textureTransform.offset = [babylonTexture.uOffset, babylonTexture.vOffset];
                transformIsRequired = true;
            }
            if (babylonTexture.uScale !== 1 || babylonTexture.vScale !== 1) {
                textureTransform.scale = [babylonTexture.uScale, babylonTexture.vScale];
                transformIsRequired = true;
            }
            if (babylonTexture.wAng !== 0) {
                textureTransform.rotation = -babylonTexture.wAng;
                transformIsRequired = true;
            }
            if (babylonTexture.coordinatesIndex !== 0) {
                textureTransform.texCoord = babylonTexture.coordinatesIndex;
                transformIsRequired = true;
            }
            if (!transformIsRequired) {
                return;
            }
            this._wasUsed = true;
            if (!textureInfo.extensions) {
                textureInfo.extensions = {};
            }
            textureInfo.extensions[NAME] = textureTransform;
        }
    };
    KHR_texture_transform.prototype.preExportTextureAsync = function (context, babylonTexture) {
        return new Promise(function (resolve, reject) {
            var scene = babylonTexture.getScene();
            if (!scene) {
                reject("".concat(context, ": \"scene\" is not defined for Babylon texture ").concat(babylonTexture.name, "!"));
                return;
            }
            /*
             * The KHR_texture_transform schema only supports w rotation around the origin.
             * See https://github.com/KhronosGroup/glTF/tree/main/extensions/2.0/Khronos/KHR_texture_transform#gltf-schema-updates.
             */
            if (babylonTexture.uAng !== 0 || babylonTexture.vAng !== 0) {
                babylonjs_Misc_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.Warn("".concat(context, ": Texture ").concat(babylonTexture.name, " with rotation in the u or v axis is not supported in glTF."));
                resolve(null);
            }
            else if (babylonTexture.wAng !== 0 && (babylonTexture.uRotationCenter !== 0 || babylonTexture.vRotationCenter !== 0)) {
                babylonjs_Misc_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.Warn("".concat(context, ": Texture ").concat(babylonTexture.name, " with rotation not centered at the origin cannot be exported with ").concat(NAME));
                resolve(null);
            }
            else {
                resolve(babylonTexture);
            }
        });
    };
    return KHR_texture_transform;
}());

_glTFExporter__WEBPACK_IMPORTED_MODULE_1__._Exporter.RegisterExtension(NAME, function () { return new KHR_texture_transform(); });


/***/ }),

/***/ "../../../dev/serializers/src/glTF/2.0/Extensions/index.ts":
/*!*****************************************************************!*\
  !*** ../../../dev/serializers/src/glTF/2.0/Extensions/index.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EXT_mesh_gpu_instancing: () => (/* reexport safe */ _EXT_mesh_gpu_instancing__WEBPACK_IMPORTED_MODULE_12__.EXT_mesh_gpu_instancing),
/* harmony export */   KHR_lights_punctual: () => (/* reexport safe */ _KHR_lights_punctual__WEBPACK_IMPORTED_MODULE_1__.KHR_lights_punctual),
/* harmony export */   KHR_materials_anisotropy: () => (/* reexport safe */ _KHR_materials_anisotropy__WEBPACK_IMPORTED_MODULE_4__.KHR_materials_anisotropy),
/* harmony export */   KHR_materials_clearcoat: () => (/* reexport safe */ _KHR_materials_clearcoat__WEBPACK_IMPORTED_MODULE_2__.KHR_materials_clearcoat),
/* harmony export */   KHR_materials_diffuse_transmission: () => (/* reexport safe */ _KHR_materials_diffuse_transmission__WEBPACK_IMPORTED_MODULE_14__.KHR_materials_diffuse_transmission),
/* harmony export */   KHR_materials_dispersion: () => (/* reexport safe */ _KHR_materials_dispersion__WEBPACK_IMPORTED_MODULE_10__.KHR_materials_dispersion),
/* harmony export */   KHR_materials_emissive_strength: () => (/* reexport safe */ _KHR_materials_emissive_strength__WEBPACK_IMPORTED_MODULE_13__.KHR_materials_emissive_strength),
/* harmony export */   KHR_materials_ior: () => (/* reexport safe */ _KHR_materials_ior__WEBPACK_IMPORTED_MODULE_7__.KHR_materials_ior),
/* harmony export */   KHR_materials_iridescence: () => (/* reexport safe */ _KHR_materials_iridescence__WEBPACK_IMPORTED_MODULE_3__.KHR_materials_iridescence),
/* harmony export */   KHR_materials_sheen: () => (/* reexport safe */ _KHR_materials_sheen__WEBPACK_IMPORTED_MODULE_5__.KHR_materials_sheen),
/* harmony export */   KHR_materials_specular: () => (/* reexport safe */ _KHR_materials_specular__WEBPACK_IMPORTED_MODULE_8__.KHR_materials_specular),
/* harmony export */   KHR_materials_transmission: () => (/* reexport safe */ _KHR_materials_transmission__WEBPACK_IMPORTED_MODULE_11__.KHR_materials_transmission),
/* harmony export */   KHR_materials_unlit: () => (/* reexport safe */ _KHR_materials_unlit__WEBPACK_IMPORTED_MODULE_6__.KHR_materials_unlit),
/* harmony export */   KHR_materials_volume: () => (/* reexport safe */ _KHR_materials_volume__WEBPACK_IMPORTED_MODULE_9__.KHR_materials_volume),
/* harmony export */   KHR_texture_transform: () => (/* reexport safe */ _KHR_texture_transform__WEBPACK_IMPORTED_MODULE_0__.KHR_texture_transform)
/* harmony export */ });
/* harmony import */ var _KHR_texture_transform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KHR_texture_transform */ "../../../dev/serializers/src/glTF/2.0/Extensions/KHR_texture_transform.ts");
/* harmony import */ var _KHR_lights_punctual__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KHR_lights_punctual */ "../../../dev/serializers/src/glTF/2.0/Extensions/KHR_lights_punctual.ts");
/* harmony import */ var _KHR_materials_clearcoat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./KHR_materials_clearcoat */ "../../../dev/serializers/src/glTF/2.0/Extensions/KHR_materials_clearcoat.ts");
/* harmony import */ var _KHR_materials_iridescence__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./KHR_materials_iridescence */ "../../../dev/serializers/src/glTF/2.0/Extensions/KHR_materials_iridescence.ts");
/* harmony import */ var _KHR_materials_anisotropy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./KHR_materials_anisotropy */ "../../../dev/serializers/src/glTF/2.0/Extensions/KHR_materials_anisotropy.ts");
/* harmony import */ var _KHR_materials_sheen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./KHR_materials_sheen */ "../../../dev/serializers/src/glTF/2.0/Extensions/KHR_materials_sheen.ts");
/* harmony import */ var _KHR_materials_unlit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./KHR_materials_unlit */ "../../../dev/serializers/src/glTF/2.0/Extensions/KHR_materials_unlit.ts");
/* harmony import */ var _KHR_materials_ior__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./KHR_materials_ior */ "../../../dev/serializers/src/glTF/2.0/Extensions/KHR_materials_ior.ts");
/* harmony import */ var _KHR_materials_specular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./KHR_materials_specular */ "../../../dev/serializers/src/glTF/2.0/Extensions/KHR_materials_specular.ts");
/* harmony import */ var _KHR_materials_volume__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./KHR_materials_volume */ "../../../dev/serializers/src/glTF/2.0/Extensions/KHR_materials_volume.ts");
/* harmony import */ var _KHR_materials_dispersion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./KHR_materials_dispersion */ "../../../dev/serializers/src/glTF/2.0/Extensions/KHR_materials_dispersion.ts");
/* harmony import */ var _KHR_materials_transmission__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./KHR_materials_transmission */ "../../../dev/serializers/src/glTF/2.0/Extensions/KHR_materials_transmission.ts");
/* harmony import */ var _EXT_mesh_gpu_instancing__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./EXT_mesh_gpu_instancing */ "../../../dev/serializers/src/glTF/2.0/Extensions/EXT_mesh_gpu_instancing.ts");
/* harmony import */ var _KHR_materials_emissive_strength__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./KHR_materials_emissive_strength */ "../../../dev/serializers/src/glTF/2.0/Extensions/KHR_materials_emissive_strength.ts");
/* harmony import */ var _KHR_materials_diffuse_transmission__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./KHR_materials_diffuse_transmission */ "../../../dev/serializers/src/glTF/2.0/Extensions/KHR_materials_diffuse_transmission.ts");

















/***/ }),

/***/ "../../../dev/serializers/src/glTF/2.0/glTFAnimation.ts":
/*!**************************************************************!*\
  !*** ../../../dev/serializers/src/glTF/2.0/glTFAnimation.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _GLTFAnimation: () => (/* binding */ _GLTFAnimation)
/* harmony export */ });
/* harmony import */ var babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Lights/light */ "babylonjs/Maths/math.vector");
/* harmony import */ var babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _glTFUtilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./glTFUtilities */ "../../../dev/serializers/src/glTF/2.0/glTFUtilities.ts");










/**
 * @internal
 * Enum for handling in tangent and out tangent.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
var _TangentType;
(function (_TangentType) {
    /**
     * Specifies that input tangents are used.
     */
    _TangentType[_TangentType["INTANGENT"] = 0] = "INTANGENT";
    /**
     * Specifies that output tangents are used.
     */
    _TangentType[_TangentType["OUTTANGENT"] = 1] = "OUTTANGENT";
})(_TangentType || (_TangentType = {}));
/**
 * @internal
 * Utility class for generating glTF animation data from BabylonJS.
 */
var _GLTFAnimation = /** @class */ (function () {
    function _GLTFAnimation() {
    }
    /**
     * Determine if a node is transformable - ie has properties it should be part of animation of transformation.
     * @param babylonNode the node to test
     * @returns true if can be animated, false otherwise. False if the parameter is null or undefined.
     */
    _GLTFAnimation._IsTransformable = function (babylonNode) {
        return babylonNode && (babylonNode instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TransformNode || babylonNode instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Camera || babylonNode instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Light);
    };
    /**
     * @ignore
     *
     * Creates glTF channel animation from BabylonJS animation.
     * @param babylonTransformNode - BabylonJS mesh.
     * @param animation - animation.
     * @param animationChannelTargetPath - The target animation channel.
     * @param useQuaternion - Specifies if quaternions are used.
     * @returns nullable IAnimationData
     */
    _GLTFAnimation._CreateNodeAnimation = function (babylonTransformNode, animation, animationChannelTargetPath, useQuaternion, animationSampleRate) {
        if (this._IsTransformable(babylonTransformNode)) {
            var inputs = [];
            var outputs = [];
            var keyFrames = animation.getKeys();
            var minMaxKeyFrames = _GLTFAnimation._CalculateMinMaxKeyFrames(keyFrames);
            var interpolationOrBake = _GLTFAnimation._DeduceInterpolation(keyFrames, animationChannelTargetPath, useQuaternion);
            var interpolation = interpolationOrBake.interpolationType;
            var shouldBakeAnimation = interpolationOrBake.shouldBakeAnimation;
            if (shouldBakeAnimation) {
                _GLTFAnimation._CreateBakedAnimation(babylonTransformNode, animation, animationChannelTargetPath, minMaxKeyFrames.min, minMaxKeyFrames.max, animation.framePerSecond, animationSampleRate, inputs, outputs, minMaxKeyFrames, useQuaternion);
            }
            else {
                if (interpolation === "LINEAR" /* AnimationSamplerInterpolation.LINEAR */ || interpolation === "STEP" /* AnimationSamplerInterpolation.STEP */) {
                    _GLTFAnimation._CreateLinearOrStepAnimation(babylonTransformNode, animation, animationChannelTargetPath, inputs, outputs, useQuaternion);
                }
                else if (interpolation === "CUBICSPLINE" /* AnimationSamplerInterpolation.CUBICSPLINE */) {
                    _GLTFAnimation._CreateCubicSplineAnimation(babylonTransformNode, animation, animationChannelTargetPath, inputs, outputs, useQuaternion);
                }
                else {
                    _GLTFAnimation._CreateBakedAnimation(babylonTransformNode, animation, animationChannelTargetPath, minMaxKeyFrames.min, minMaxKeyFrames.max, animation.framePerSecond, animationSampleRate, inputs, outputs, minMaxKeyFrames, useQuaternion);
                }
            }
            if (inputs.length && outputs.length) {
                var result = {
                    inputs: inputs,
                    outputs: outputs,
                    samplerInterpolation: interpolation,
                    inputsMin: shouldBakeAnimation ? minMaxKeyFrames.min : babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.FloatRound(minMaxKeyFrames.min / animation.framePerSecond),
                    inputsMax: shouldBakeAnimation ? minMaxKeyFrames.max : babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.FloatRound(minMaxKeyFrames.max / animation.framePerSecond),
                };
                return result;
            }
        }
        return null;
    };
    _GLTFAnimation._DeduceAnimationInfo = function (animation) {
        var animationChannelTargetPath = null;
        var dataAccessorType = "VEC3" /* AccessorType.VEC3 */;
        var useQuaternion = false;
        var property = animation.targetProperty.split(".");
        switch (property[0]) {
            case "scaling": {
                animationChannelTargetPath = "scale" /* AnimationChannelTargetPath.SCALE */;
                break;
            }
            case "position": {
                animationChannelTargetPath = "translation" /* AnimationChannelTargetPath.TRANSLATION */;
                break;
            }
            case "rotation": {
                dataAccessorType = "VEC4" /* AccessorType.VEC4 */;
                animationChannelTargetPath = "rotation" /* AnimationChannelTargetPath.ROTATION */;
                break;
            }
            case "rotationQuaternion": {
                dataAccessorType = "VEC4" /* AccessorType.VEC4 */;
                useQuaternion = true;
                animationChannelTargetPath = "rotation" /* AnimationChannelTargetPath.ROTATION */;
                break;
            }
            case "influence": {
                dataAccessorType = "SCALAR" /* AccessorType.SCALAR */;
                animationChannelTargetPath = "weights" /* AnimationChannelTargetPath.WEIGHTS */;
                break;
            }
            default: {
                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Error("Unsupported animatable property ".concat(property[0]));
            }
        }
        if (animationChannelTargetPath) {
            return { animationChannelTargetPath: animationChannelTargetPath, dataAccessorType: dataAccessorType, useQuaternion: useQuaternion };
        }
        else {
            babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Error("animation channel target path and data accessor type could be deduced");
        }
        return null;
    };
    /**
     * @ignore
     * Create node animations from the transform node animations
     * @param babylonNode
     * @param runtimeGLTFAnimation
     * @param idleGLTFAnimations
     * @param nodeMap
     * @param nodes
     * @param binaryWriter
     * @param bufferViews
     * @param accessors
     * @param animationSampleRate
     */
    _GLTFAnimation._CreateNodeAnimationFromNodeAnimations = function (babylonNode, runtimeGLTFAnimation, idleGLTFAnimations, nodeMap, nodes, binaryWriter, bufferViews, accessors, animationSampleRate, shouldExportAnimation) {
        var glTFAnimation;
        if (_GLTFAnimation._IsTransformable(babylonNode)) {
            if (babylonNode.animations) {
                for (var _i = 0, _a = babylonNode.animations; _i < _a.length; _i++) {
                    var animation = _a[_i];
                    if (shouldExportAnimation && !shouldExportAnimation(animation)) {
                        continue;
                    }
                    var animationInfo = _GLTFAnimation._DeduceAnimationInfo(animation);
                    if (animationInfo) {
                        glTFAnimation = {
                            name: animation.name,
                            samplers: [],
                            channels: [],
                        };
                        _GLTFAnimation._AddAnimation("".concat(animation.name), animation.hasRunningRuntimeAnimations ? runtimeGLTFAnimation : glTFAnimation, babylonNode, animation, animationInfo.dataAccessorType, animationInfo.animationChannelTargetPath, nodeMap, binaryWriter, bufferViews, accessors, animationInfo.useQuaternion, animationSampleRate);
                        if (glTFAnimation.samplers.length && glTFAnimation.channels.length) {
                            idleGLTFAnimations.push(glTFAnimation);
                        }
                    }
                }
            }
        }
    };
    /**
     * @ignore
     * Create individual morph animations from the mesh's morph target animation tracks
     * @param babylonNode
     * @param runtimeGLTFAnimation
     * @param idleGLTFAnimations
     * @param nodeMap
     * @param nodes
     * @param binaryWriter
     * @param bufferViews
     * @param accessors
     * @param animationSampleRate
     */
    _GLTFAnimation._CreateMorphTargetAnimationFromMorphTargetAnimations = function (babylonNode, runtimeGLTFAnimation, idleGLTFAnimations, nodeMap, nodes, binaryWriter, bufferViews, accessors, animationSampleRate, shouldExportAnimation) {
        var glTFAnimation;
        if (babylonNode instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Mesh) {
            var morphTargetManager = babylonNode.morphTargetManager;
            if (morphTargetManager) {
                for (var i = 0; i < morphTargetManager.numTargets; ++i) {
                    var morphTarget = morphTargetManager.getTarget(i);
                    for (var _i = 0, _a = morphTarget.animations; _i < _a.length; _i++) {
                        var animation = _a[_i];
                        if (shouldExportAnimation && !shouldExportAnimation(animation)) {
                            continue;
                        }
                        var combinedAnimation = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Animation("".concat(animation.name), "influence", animation.framePerSecond, animation.dataType, animation.loopMode, animation.enableBlending);
                        var combinedAnimationKeys = [];
                        var animationKeys = animation.getKeys();
                        for (var j = 0; j < animationKeys.length; ++j) {
                            var animationKey = animationKeys[j];
                            for (var k = 0; k < morphTargetManager.numTargets; ++k) {
                                if (k == i) {
                                    combinedAnimationKeys.push(animationKey);
                                }
                                else {
                                    combinedAnimationKeys.push({ frame: animationKey.frame, value: 0 });
                                }
                            }
                        }
                        combinedAnimation.setKeys(combinedAnimationKeys);
                        var animationInfo = _GLTFAnimation._DeduceAnimationInfo(combinedAnimation);
                        if (animationInfo) {
                            glTFAnimation = {
                                name: combinedAnimation.name,
                                samplers: [],
                                channels: [],
                            };
                            _GLTFAnimation._AddAnimation(animation.name, animation.hasRunningRuntimeAnimations ? runtimeGLTFAnimation : glTFAnimation, babylonNode, combinedAnimation, animationInfo.dataAccessorType, animationInfo.animationChannelTargetPath, nodeMap, binaryWriter, bufferViews, accessors, animationInfo.useQuaternion, animationSampleRate, morphTargetManager.numTargets);
                            if (glTFAnimation.samplers.length && glTFAnimation.channels.length) {
                                idleGLTFAnimations.push(glTFAnimation);
                            }
                        }
                    }
                }
            }
        }
    };
    /**
     * @internal
     * Create node and morph animations from the animation groups
     * @param babylonScene
     * @param glTFAnimations
     * @param nodeMap
     * @param nodes
     * @param binaryWriter
     * @param bufferViews
     * @param accessors
     * @param animationSampleRate
     */
    _GLTFAnimation._CreateNodeAndMorphAnimationFromAnimationGroups = function (babylonScene, glTFAnimations, nodeMap, binaryWriter, bufferViews, accessors, animationSampleRate, shouldExportAnimation) {
        var _a;
        var glTFAnimation;
        if (babylonScene.animationGroups) {
            var animationGroups = babylonScene.animationGroups;
            var _loop_1 = function (animationGroup) {
                var morphAnimations = new Map();
                var sampleAnimations = new Map();
                var morphAnimationMeshes = new Set();
                var animationGroupFrameDiff = animationGroup.to - animationGroup.from;
                glTFAnimation = {
                    name: animationGroup.name,
                    channels: [],
                    samplers: [],
                };
                var _loop_2 = function (i) {
                    var targetAnimation = animationGroup.targetedAnimations[i];
                    var target = targetAnimation.target;
                    var animation = targetAnimation.animation;
                    if (shouldExportAnimation && !shouldExportAnimation(animation)) {
                        return "continue";
                    }
                    if (this_1._IsTransformable(target) || (target.length === 1 && this_1._IsTransformable(target[0]))) {
                        var animationInfo = _GLTFAnimation._DeduceAnimationInfo(targetAnimation.animation);
                        if (animationInfo) {
                            var babylonTransformNode = this_1._IsTransformable(target) ? target : this_1._IsTransformable(target[0]) ? target[0] : null;
                            if (babylonTransformNode) {
                                _GLTFAnimation._AddAnimation("".concat(animation.name), glTFAnimation, babylonTransformNode, animation, animationInfo.dataAccessorType, animationInfo.animationChannelTargetPath, nodeMap, binaryWriter, bufferViews, accessors, animationInfo.useQuaternion, animationSampleRate);
                            }
                        }
                    }
                    else if (target instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.MorphTarget || (target.length === 1 && target[0] instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.MorphTarget)) {
                        var animationInfo = _GLTFAnimation._DeduceAnimationInfo(targetAnimation.animation);
                        if (animationInfo) {
                            var babylonMorphTarget_1 = target instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.MorphTarget ? target : target[0];
                            if (babylonMorphTarget_1) {
                                var babylonMorphTargetManager_1 = babylonScene.morphTargetManagers.find(function (morphTargetManager) {
                                    for (var j = 0; j < morphTargetManager.numTargets; ++j) {
                                        if (morphTargetManager.getTarget(j) === babylonMorphTarget_1) {
                                            return true;
                                        }
                                    }
                                    return false;
                                });
                                if (babylonMorphTargetManager_1) {
                                    var babylonMesh = babylonScene.meshes.find(function (mesh) {
                                        return mesh.morphTargetManager === babylonMorphTargetManager_1;
                                    });
                                    if (babylonMesh) {
                                        if (!morphAnimations.has(babylonMesh)) {
                                            morphAnimations.set(babylonMesh, new Map());
                                        }
                                        (_a = morphAnimations.get(babylonMesh)) === null || _a === void 0 ? void 0 : _a.set(babylonMorphTarget_1, animation);
                                        morphAnimationMeshes.add(babylonMesh);
                                        sampleAnimations.set(babylonMesh, animation);
                                    }
                                }
                            }
                        }
                    }
                    else {
                        // this is the place for the KHR_animation_pointer.
                    }
                };
                for (var i = 0; i < animationGroup.targetedAnimations.length; ++i) {
                    _loop_2(i);
                }
                morphAnimationMeshes.forEach(function (mesh) {
                    var morphTargetManager = mesh.morphTargetManager;
                    var combinedAnimationGroup = null;
                    var animationKeys = [];
                    var sampleAnimation = sampleAnimations.get(mesh);
                    var sampleAnimationKeys = sampleAnimation.getKeys();
                    var numAnimationKeys = sampleAnimationKeys.length;
                    /*
                        Due to how glTF expects morph target animation data to be formatted, we need to rearrange the individual morph target animation tracks,
                        such that we have a single animation, where a given keyframe input value has successive output values for each morph target belonging to the manager.
                        See: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#animations

                        We do this via constructing a new Animation track, and interleaving the frames of each morph target animation track in the current Animation Group
                        We reuse the Babylon Animation data structure for ease of handling export of cubic spline animation keys, and to reuse the
                        existing _GLTFAnimation.AddAnimation codepath with minimal modification, however the constructed Babylon Animation is NOT intended for use in-engine.
                    */
                    for (var i = 0; i < numAnimationKeys; ++i) {
                        for (var j = 0; j < morphTargetManager.numTargets; ++j) {
                            var morphTarget = morphTargetManager.getTarget(j);
                            var animationsByMorphTarget = morphAnimations.get(mesh);
                            if (animationsByMorphTarget) {
                                var morphTargetAnimation = animationsByMorphTarget.get(morphTarget);
                                if (morphTargetAnimation) {
                                    if (!combinedAnimationGroup) {
                                        combinedAnimationGroup = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Animation("".concat(animationGroup.name, "_").concat(mesh.name, "_MorphWeightAnimation"), "influence", morphTargetAnimation.framePerSecond, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, morphTargetAnimation.loopMode, morphTargetAnimation.enableBlending);
                                    }
                                    animationKeys.push(morphTargetAnimation.getKeys()[i]);
                                }
                                else {
                                    animationKeys.push({
                                        frame: animationGroup.from + (animationGroupFrameDiff / numAnimationKeys) * i,
                                        value: morphTarget.influence,
                                        inTangent: sampleAnimationKeys[0].inTangent ? 0 : undefined,
                                        outTangent: sampleAnimationKeys[0].outTangent ? 0 : undefined,
                                    });
                                }
                            }
                        }
                    }
                    combinedAnimationGroup.setKeys(animationKeys);
                    var animationInfo = _GLTFAnimation._DeduceAnimationInfo(combinedAnimationGroup);
                    if (animationInfo) {
                        _GLTFAnimation._AddAnimation("".concat(animationGroup.name, "_").concat(mesh.name, "_MorphWeightAnimation"), glTFAnimation, mesh, combinedAnimationGroup, animationInfo.dataAccessorType, animationInfo.animationChannelTargetPath, nodeMap, binaryWriter, bufferViews, accessors, animationInfo.useQuaternion, animationSampleRate, morphTargetManager === null || morphTargetManager === void 0 ? void 0 : morphTargetManager.numTargets);
                    }
                });
                if (glTFAnimation.channels.length && glTFAnimation.samplers.length) {
                    glTFAnimations.push(glTFAnimation);
                }
            };
            var this_1 = this;
            for (var _i = 0, animationGroups_1 = animationGroups; _i < animationGroups_1.length; _i++) {
                var animationGroup = animationGroups_1[_i];
                _loop_1(animationGroup);
            }
        }
    };
    _GLTFAnimation._AddAnimation = function (name, glTFAnimation, babylonTransformNode, animation, dataAccessorType, animationChannelTargetPath, nodeMap, binaryWriter, bufferViews, accessors, useQuaternion, animationSampleRate, morphAnimationChannels) {
        var animationData = _GLTFAnimation._CreateNodeAnimation(babylonTransformNode, animation, animationChannelTargetPath, useQuaternion, animationSampleRate);
        var bufferView;
        var accessor;
        var keyframeAccessorIndex;
        var dataAccessorIndex;
        var outputLength;
        var animationSampler;
        var animationChannel;
        if (animationData) {
            /*
             * Now that we have the glTF converted morph target animation data,
             * we can remove redundant input data so that we have n input frames,
             * and morphAnimationChannels * n output frames
             */
            if (morphAnimationChannels) {
                var index = 0;
                var currentInput = 0;
                var newInputs = [];
                while (animationData.inputs.length > 0) {
                    currentInput = animationData.inputs.shift();
                    if (index % morphAnimationChannels == 0) {
                        newInputs.push(currentInput);
                    }
                    index++;
                }
                animationData.inputs = newInputs;
            }
            var nodeIndex = nodeMap[babylonTransformNode.uniqueId];
            // Creates buffer view and accessor for key frames.
            var byteLength = animationData.inputs.length * 4;
            bufferView = _glTFUtilities__WEBPACK_IMPORTED_MODULE_1__._GLTFUtilities._CreateBufferView(0, binaryWriter.getByteOffset(), byteLength, undefined, "".concat(name, "  keyframe data view"));
            bufferViews.push(bufferView);
            animationData.inputs.forEach(function (input) {
                binaryWriter.setFloat32(input);
            });
            accessor = _glTFUtilities__WEBPACK_IMPORTED_MODULE_1__._GLTFUtilities._CreateAccessor(bufferViews.length - 1, "".concat(name, "  keyframes"), "SCALAR" /* AccessorType.SCALAR */, 5126 /* AccessorComponentType.FLOAT */, animationData.inputs.length, null, [animationData.inputsMin], [animationData.inputsMax]);
            accessors.push(accessor);
            keyframeAccessorIndex = accessors.length - 1;
            // create bufferview and accessor for keyed values.
            outputLength = animationData.outputs.length;
            byteLength = _glTFUtilities__WEBPACK_IMPORTED_MODULE_1__._GLTFUtilities._GetDataAccessorElementCount(dataAccessorType) * 4 * animationData.outputs.length;
            // check for in and out tangents
            bufferView = _glTFUtilities__WEBPACK_IMPORTED_MODULE_1__._GLTFUtilities._CreateBufferView(0, binaryWriter.getByteOffset(), byteLength, undefined, "".concat(name, "  data view"));
            bufferViews.push(bufferView);
            animationData.outputs.forEach(function (output) {
                output.forEach(function (entry) {
                    binaryWriter.setFloat32(entry);
                });
            });
            accessor = _glTFUtilities__WEBPACK_IMPORTED_MODULE_1__._GLTFUtilities._CreateAccessor(bufferViews.length - 1, "".concat(name, "  data"), dataAccessorType, 5126 /* AccessorComponentType.FLOAT */, outputLength, null, null, null);
            accessors.push(accessor);
            dataAccessorIndex = accessors.length - 1;
            // create sampler
            animationSampler = {
                interpolation: animationData.samplerInterpolation,
                input: keyframeAccessorIndex,
                output: dataAccessorIndex,
            };
            glTFAnimation.samplers.push(animationSampler);
            // create channel
            animationChannel = {
                sampler: glTFAnimation.samplers.length - 1,
                target: {
                    node: nodeIndex,
                    path: animationChannelTargetPath,
                },
            };
            glTFAnimation.channels.push(animationChannel);
        }
    };
    /**
     * Create a baked animation
     * @param babylonTransformNode BabylonJS mesh
     * @param animation BabylonJS animation corresponding to the BabylonJS mesh
     * @param animationChannelTargetPath animation target channel
     * @param minFrame minimum animation frame
     * @param maxFrame maximum animation frame
     * @param fps frames per second of the animation
     * @param sampleRate
     * @param inputs input key frames of the animation
     * @param outputs output key frame data of the animation
     * @param minMaxFrames
     * @param minMaxFrames.min
     * @param minMaxFrames.max
     * @param useQuaternion specifies if quaternions should be used
     */
    _GLTFAnimation._CreateBakedAnimation = function (babylonTransformNode, animation, animationChannelTargetPath, minFrame, maxFrame, fps, sampleRate, inputs, outputs, minMaxFrames, useQuaternion) {
        var value;
        var quaternionCache = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.Identity();
        var previousTime = null;
        var time;
        var maxUsedFrame = null;
        var currKeyFrame = null;
        var nextKeyFrame = null;
        var prevKeyFrame = null;
        var endFrame = null;
        minMaxFrames.min = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.FloatRound(minFrame / fps);
        var keyFrames = animation.getKeys();
        for (var i = 0, length_1 = keyFrames.length; i < length_1; ++i) {
            endFrame = null;
            currKeyFrame = keyFrames[i];
            if (i + 1 < length_1) {
                nextKeyFrame = keyFrames[i + 1];
                if ((currKeyFrame.value.equals && currKeyFrame.value.equals(nextKeyFrame.value)) || currKeyFrame.value === nextKeyFrame.value) {
                    if (i === 0) {
                        // set the first frame to itself
                        endFrame = currKeyFrame.frame;
                    }
                    else {
                        continue;
                    }
                }
                else {
                    endFrame = nextKeyFrame.frame;
                }
            }
            else {
                // at the last key frame
                prevKeyFrame = keyFrames[i - 1];
                if ((currKeyFrame.value.equals && currKeyFrame.value.equals(prevKeyFrame.value)) || currKeyFrame.value === prevKeyFrame.value) {
                    continue;
                }
                else {
                    endFrame = maxFrame;
                }
            }
            if (endFrame) {
                for (var f = currKeyFrame.frame; f <= endFrame; f += sampleRate) {
                    time = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.FloatRound(f / fps);
                    if (time === previousTime) {
                        continue;
                    }
                    previousTime = time;
                    maxUsedFrame = time;
                    var state = {
                        key: 0,
                        repeatCount: 0,
                        loopMode: animation.loopMode,
                    };
                    value = animation._interpolate(f, state);
                    _GLTFAnimation._SetInterpolatedValue(babylonTransformNode, value, time, animation, animationChannelTargetPath, quaternionCache, inputs, outputs, useQuaternion);
                }
            }
        }
        if (maxUsedFrame) {
            minMaxFrames.max = maxUsedFrame;
        }
    };
    _GLTFAnimation._ConvertFactorToVector3OrQuaternion = function (factor, babylonTransformNode, animation, animationChannelTargetPath, useQuaternion) {
        var basePositionRotationOrScale = _GLTFAnimation._GetBasePositionRotationOrScale(babylonTransformNode, animationChannelTargetPath, useQuaternion);
        // handles single component x, y, z or w component animation by using a base property and animating over a component.
        var property = animation.targetProperty.split(".");
        var componentName = property ? property[1] : ""; // x, y, z, or w component
        var value = useQuaternion ? babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.FromArray(basePositionRotationOrScale).normalize() : babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArray(basePositionRotationOrScale);
        switch (componentName) {
            case "x":
            case "y":
            case "z": {
                value[componentName] = factor;
                break;
            }
            case "w": {
                value.w = factor;
                break;
            }
            default: {
                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Error("glTFAnimation: Unsupported component name \"".concat(componentName, "\"!"));
            }
        }
        return value;
    };
    _GLTFAnimation._SetInterpolatedValue = function (babylonTransformNode, value, time, animation, animationChannelTargetPath, quaternionCache, inputs, outputs, useQuaternion) {
        var cacheValue;
        inputs.push(time);
        if (animationChannelTargetPath === "weights" /* AnimationChannelTargetPath.WEIGHTS */) {
            outputs.push([value]);
            return;
        }
        if (animation.dataType === babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT) {
            value = this._ConvertFactorToVector3OrQuaternion(value, babylonTransformNode, animation, animationChannelTargetPath, useQuaternion);
        }
        if (animationChannelTargetPath === "rotation" /* AnimationChannelTargetPath.ROTATION */) {
            if (useQuaternion) {
                quaternionCache = value;
            }
            else {
                cacheValue = value;
                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.RotationYawPitchRollToRef(cacheValue.y, cacheValue.x, cacheValue.z, quaternionCache);
            }
            outputs.push(quaternionCache.asArray());
        }
        else {
            // scaling and position animation
            cacheValue = value;
            outputs.push(cacheValue.asArray());
        }
    };
    /**
     * Creates linear animation from the animation key frames
     * @param babylonTransformNode BabylonJS mesh
     * @param animation BabylonJS animation
     * @param animationChannelTargetPath The target animation channel
     * @param inputs Array to store the key frame times
     * @param outputs Array to store the key frame data
     * @param useQuaternion Specifies if quaternions are used in the animation
     */
    _GLTFAnimation._CreateLinearOrStepAnimation = function (babylonTransformNode, animation, animationChannelTargetPath, inputs, outputs, useQuaternion) {
        for (var _i = 0, _a = animation.getKeys(); _i < _a.length; _i++) {
            var keyFrame = _a[_i];
            inputs.push(keyFrame.frame / animation.framePerSecond); // keyframes in seconds.
            _GLTFAnimation._AddKeyframeValue(keyFrame, animation, outputs, animationChannelTargetPath, babylonTransformNode, useQuaternion);
        }
    };
    /**
     * Creates cubic spline animation from the animation key frames
     * @param babylonTransformNode BabylonJS mesh
     * @param animation BabylonJS animation
     * @param animationChannelTargetPath The target animation channel
     * @param inputs Array to store the key frame times
     * @param outputs Array to store the key frame data
     * @param useQuaternion Specifies if quaternions are used in the animation
     */
    _GLTFAnimation._CreateCubicSplineAnimation = function (babylonTransformNode, animation, animationChannelTargetPath, inputs, outputs, useQuaternion) {
        animation.getKeys().forEach(function (keyFrame) {
            inputs.push(keyFrame.frame / animation.framePerSecond); // keyframes in seconds.
            _GLTFAnimation._AddSplineTangent(_TangentType.INTANGENT, outputs, animationChannelTargetPath, "CUBICSPLINE" /* AnimationSamplerInterpolation.CUBICSPLINE */, keyFrame, useQuaternion);
            _GLTFAnimation._AddKeyframeValue(keyFrame, animation, outputs, animationChannelTargetPath, babylonTransformNode, useQuaternion);
            _GLTFAnimation._AddSplineTangent(_TangentType.OUTTANGENT, outputs, animationChannelTargetPath, "CUBICSPLINE" /* AnimationSamplerInterpolation.CUBICSPLINE */, keyFrame, useQuaternion);
        });
    };
    _GLTFAnimation._GetBasePositionRotationOrScale = function (babylonTransformNode, animationChannelTargetPath, useQuaternion) {
        var basePositionRotationOrScale;
        if (animationChannelTargetPath === "rotation" /* AnimationChannelTargetPath.ROTATION */) {
            if (useQuaternion) {
                var q = babylonTransformNode.rotationQuaternion;
                basePositionRotationOrScale = (q !== null && q !== void 0 ? q : babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.Identity()).asArray();
            }
            else {
                var r = babylonTransformNode.rotation;
                basePositionRotationOrScale = (r !== null && r !== void 0 ? r : babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Zero()).asArray();
            }
        }
        else if (animationChannelTargetPath === "translation" /* AnimationChannelTargetPath.TRANSLATION */) {
            var p = babylonTransformNode.position;
            basePositionRotationOrScale = (p !== null && p !== void 0 ? p : babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Zero()).asArray();
        }
        else {
            // scale
            var s = babylonTransformNode.scaling;
            basePositionRotationOrScale = (s !== null && s !== void 0 ? s : babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.One()).asArray();
        }
        return basePositionRotationOrScale;
    };
    /**
     * Adds a key frame value
     * @param keyFrame
     * @param animation
     * @param outputs
     * @param animationChannelTargetPath
     * @param babylonTransformNode
     * @param useQuaternion
     */
    _GLTFAnimation._AddKeyframeValue = function (keyFrame, animation, outputs, animationChannelTargetPath, babylonTransformNode, useQuaternion) {
        var newPositionRotationOrScale;
        var animationType = animation.dataType;
        if (animationType === babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_VECTOR3) {
            var value = keyFrame.value.asArray();
            if (animationChannelTargetPath === "rotation" /* AnimationChannelTargetPath.ROTATION */) {
                var array = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArray(value);
                var rotationQuaternion = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.RotationYawPitchRoll(array.y, array.x, array.z);
                value = rotationQuaternion.asArray();
            }
            outputs.push(value); // scale  vector.
        }
        else if (animationType === babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT) {
            if (animationChannelTargetPath === "weights" /* AnimationChannelTargetPath.WEIGHTS */) {
                outputs.push([keyFrame.value]);
            }
            else {
                // handles single component x, y, z or w component animation by using a base property and animating over a component.
                newPositionRotationOrScale = this._ConvertFactorToVector3OrQuaternion(keyFrame.value, babylonTransformNode, animation, animationChannelTargetPath, useQuaternion);
                if (newPositionRotationOrScale) {
                    if (animationChannelTargetPath === "rotation" /* AnimationChannelTargetPath.ROTATION */) {
                        var posRotScale = useQuaternion
                            ? newPositionRotationOrScale
                            : babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.RotationYawPitchRoll(newPositionRotationOrScale.y, newPositionRotationOrScale.x, newPositionRotationOrScale.z).normalize();
                        outputs.push(posRotScale.asArray());
                    }
                    outputs.push(newPositionRotationOrScale.asArray());
                }
            }
        }
        else if (animationType === babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_QUATERNION) {
            outputs.push(keyFrame.value.normalize().asArray());
        }
        else {
            babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Error("glTFAnimation: Unsupported key frame values for animation!");
        }
    };
    /**
     * @internal
     * Determine the interpolation based on the key frames
     * @param keyFrames
     * @param animationChannelTargetPath
     * @param useQuaternion
     */
    _GLTFAnimation._DeduceInterpolation = function (keyFrames, animationChannelTargetPath, useQuaternion) {
        var interpolationType;
        var shouldBakeAnimation = false;
        var key;
        if (animationChannelTargetPath === "rotation" /* AnimationChannelTargetPath.ROTATION */ && !useQuaternion) {
            return { interpolationType: "LINEAR" /* AnimationSamplerInterpolation.LINEAR */, shouldBakeAnimation: true };
        }
        for (var i = 0, length_2 = keyFrames.length; i < length_2; ++i) {
            key = keyFrames[i];
            if (key.inTangent || key.outTangent) {
                if (interpolationType) {
                    if (interpolationType !== "CUBICSPLINE" /* AnimationSamplerInterpolation.CUBICSPLINE */) {
                        interpolationType = "LINEAR" /* AnimationSamplerInterpolation.LINEAR */;
                        shouldBakeAnimation = true;
                        break;
                    }
                }
                else {
                    interpolationType = "CUBICSPLINE" /* AnimationSamplerInterpolation.CUBICSPLINE */;
                }
            }
            else {
                if (interpolationType) {
                    if (interpolationType === "CUBICSPLINE" /* AnimationSamplerInterpolation.CUBICSPLINE */ ||
                        (key.interpolation && key.interpolation === babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.AnimationKeyInterpolation.STEP && interpolationType !== "STEP" /* AnimationSamplerInterpolation.STEP */)) {
                        interpolationType = "LINEAR" /* AnimationSamplerInterpolation.LINEAR */;
                        shouldBakeAnimation = true;
                        break;
                    }
                }
                else {
                    if (key.interpolation && key.interpolation === babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.AnimationKeyInterpolation.STEP) {
                        interpolationType = "STEP" /* AnimationSamplerInterpolation.STEP */;
                    }
                    else {
                        interpolationType = "LINEAR" /* AnimationSamplerInterpolation.LINEAR */;
                    }
                }
            }
        }
        if (!interpolationType) {
            interpolationType = "LINEAR" /* AnimationSamplerInterpolation.LINEAR */;
        }
        return { interpolationType: interpolationType, shouldBakeAnimation: shouldBakeAnimation };
    };
    /**
     * Adds an input tangent or output tangent to the output data
     * If an input tangent or output tangent is missing, it uses the zero vector or zero quaternion
     * @param tangentType Specifies which type of tangent to handle (inTangent or outTangent)
     * @param outputs The animation data by keyframe
     * @param animationChannelTargetPath The target animation channel
     * @param interpolation The interpolation type
     * @param keyFrame The key frame with the animation data
     * @param useQuaternion Specifies if quaternions are used
     */
    _GLTFAnimation._AddSplineTangent = function (tangentType, outputs, animationChannelTargetPath, interpolation, keyFrame, useQuaternion) {
        var tangent;
        var tangentValue = tangentType === _TangentType.INTANGENT ? keyFrame.inTangent : keyFrame.outTangent;
        if (interpolation === "CUBICSPLINE" /* AnimationSamplerInterpolation.CUBICSPLINE */) {
            if (animationChannelTargetPath === "rotation" /* AnimationChannelTargetPath.ROTATION */) {
                if (tangentValue) {
                    if (useQuaternion) {
                        tangent = tangentValue.asArray();
                    }
                    else {
                        var array = tangentValue;
                        tangent = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.RotationYawPitchRoll(array.y, array.x, array.z).asArray();
                    }
                }
                else {
                    tangent = [0, 0, 0, 0];
                }
            }
            else if (animationChannelTargetPath === "weights" /* AnimationChannelTargetPath.WEIGHTS */) {
                if (tangentValue) {
                    tangent = [tangentValue];
                }
                else {
                    tangent = [0];
                }
            }
            else {
                if (tangentValue) {
                    tangent = tangentValue.asArray();
                }
                else {
                    tangent = [0, 0, 0];
                }
            }
            outputs.push(tangent);
        }
    };
    /**
     * Get the minimum and maximum key frames' frame values
     * @param keyFrames animation key frames
     * @returns the minimum and maximum key frame value
     */
    _GLTFAnimation._CalculateMinMaxKeyFrames = function (keyFrames) {
        var min = Infinity;
        var max = -Infinity;
        keyFrames.forEach(function (keyFrame) {
            min = Math.min(min, keyFrame.frame);
            max = Math.max(max, keyFrame.frame);
        });
        return { min: min, max: max };
    };
    return _GLTFAnimation;
}());



/***/ }),

/***/ "../../../dev/serializers/src/glTF/2.0/glTFData.ts":
/*!*********************************************************!*\
  !*** ../../../dev/serializers/src/glTF/2.0/glTFData.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GLTFData: () => (/* binding */ GLTFData)
/* harmony export */ });
/**
 * Class for holding and downloading glTF file data
 */
var GLTFData = /** @class */ (function () {
    /**
     * Initializes the glTF file object
     */
    function GLTFData() {
        this.glTFFiles = {};
    }
    /**
     * Downloads the glTF data as files based on their names and data
     */
    GLTFData.prototype.downloadFiles = function () {
        /**
         * Checks for a matching suffix at the end of a string (for ES5 and lower)
         * @param str Source string
         * @param suffix Suffix to search for in the source string
         * @returns Boolean indicating whether the suffix was found (true) or not (false)
         */
        function endsWith(str, suffix) {
            return str.indexOf(suffix, str.length - suffix.length) !== -1;
        }
        for (var key in this.glTFFiles) {
            var link = document.createElement("a");
            document.body.appendChild(link);
            link.setAttribute("type", "hidden");
            link.download = key;
            var blob = this.glTFFiles[key];
            var mimeType = void 0;
            if (endsWith(key, ".glb")) {
                mimeType = { type: "model/gltf-binary" };
            }
            else if (endsWith(key, ".bin")) {
                mimeType = { type: "application/octet-stream" };
            }
            else if (endsWith(key, ".gltf")) {
                mimeType = { type: "model/gltf+json" };
            }
            else if (endsWith(key, ".jpeg") || endsWith(key, ".jpg")) {
                mimeType = { type: "image/jpeg" /* ImageMimeType.JPEG */ };
            }
            else if (endsWith(key, ".png")) {
                mimeType = { type: "image/png" /* ImageMimeType.PNG */ };
            }
            link.href = window.URL.createObjectURL(new Blob([blob], mimeType));
            link.click();
        }
    };
    return GLTFData;
}());



/***/ }),

/***/ "../../../dev/serializers/src/glTF/2.0/glTFExporter.ts":
/*!*************************************************************!*\
  !*** ../../../dev/serializers/src/glTF/2.0/glTFExporter.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _BinaryWriter: () => (/* binding */ _BinaryWriter),
/* harmony export */   _Exporter: () => (/* binding */ _Exporter)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Materials/multiMaterial */ "babylonjs/Maths/math.vector");
/* harmony import */ var babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _glTFMaterialExporter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./glTFMaterialExporter */ "../../../dev/serializers/src/glTF/2.0/glTFMaterialExporter.ts");
/* harmony import */ var _glTFUtilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./glTFUtilities */ "../../../dev/serializers/src/glTF/2.0/glTFUtilities.ts");
/* harmony import */ var _glTFData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./glTFData */ "../../../dev/serializers/src/glTF/2.0/glTFData.ts");
/* harmony import */ var _glTFAnimation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./glTFAnimation */ "../../../dev/serializers/src/glTF/2.0/glTFAnimation.ts");


















// Matrix that converts handedness on the X-axis.
var convertHandednessMatrix = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Matrix.Compose(new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3(-1, 1, 1), babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.Identity(), babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Zero());
// 180 degrees rotation in Y.
var rotation180Y = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion(0, 1, 0, 0);
function isNoopNode(node, useRightHandedSystem) {
    if (!(node instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TransformNode)) {
        return false;
    }
    // Transform
    if (useRightHandedSystem) {
        var matrix = node.getWorldMatrix();
        if (!matrix.isIdentity()) {
            return false;
        }
    }
    else {
        var matrix = node.getWorldMatrix().multiplyToRef(convertHandednessMatrix, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Matrix[0]);
        if (!matrix.isIdentity()) {
            return false;
        }
    }
    // Geometry
    if ((node instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Mesh && node.geometry) || (node instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.InstancedMesh && node.sourceMesh.geometry)) {
        return false;
    }
    return true;
}
function convertNodeHandedness(node) {
    var translation = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArrayToRef(node.translation || [0, 0, 0], 0, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Vector3[0]);
    var rotation = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.FromArrayToRef(node.rotation || [0, 0, 0, 1], 0, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Quaternion[0]);
    var scale = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArrayToRef(node.scale || [1, 1, 1], 0, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Vector3[1]);
    var matrix = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Matrix.ComposeToRef(scale, rotation, translation, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Matrix[0]).multiplyToRef(convertHandednessMatrix, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Matrix[0]);
    matrix.decompose(scale, rotation, translation);
    if (translation.equalsToFloats(0, 0, 0)) {
        delete node.translation;
    }
    else {
        node.translation = translation.asArray();
    }
    if (babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.IsIdentity(rotation)) {
        delete node.rotation;
    }
    else {
        node.rotation = rotation.asArray();
    }
    if (scale.equalsToFloats(1, 1, 1)) {
        delete node.scale;
    }
    else {
        node.scale = scale.asArray();
    }
}
/**
 * Converts Babylon Scene into glTF 2.0.
 * @internal
 */
var _Exporter = /** @class */ (function () {
    /**
     * Creates a glTF Exporter instance, which can accept optional exporter options
     * @param babylonScene Babylon scene object
     * @param options Options to modify the behavior of the exporter
     */
    function _Exporter(babylonScene, options) {
        this._extensions = {};
        this._glTF = {
            asset: { generator: "Babylon.js v".concat(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Engine.Version), version: "2.0" },
        };
        babylonScene = babylonScene || babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.EngineStore.LastCreatedScene;
        if (!babylonScene) {
            return;
        }
        this._babylonScene = babylonScene;
        this._bufferViews = [];
        this._accessors = [];
        this._meshes = [];
        this._scenes = [];
        this._cameras = [];
        this._nodes = [];
        this._images = [];
        this._materials = [];
        this._materialMap = [];
        this._textures = [];
        this._samplers = [];
        this._skins = [];
        this._animations = [];
        this._imageData = {};
        this._orderedImageData = [];
        this._options = options || {};
        this._animationSampleRate = this._options.animationSampleRate || 1 / 60;
        this._glTFMaterialExporter = new _glTFMaterialExporter__WEBPACK_IMPORTED_MODULE_1__._GLTFMaterialExporter(this);
        this._loadExtensions();
    }
    _Exporter.prototype._applyExtension = function (node, extensions, index, actionAsync) {
        var _this = this;
        if (index >= extensions.length) {
            return Promise.resolve(node);
        }
        var currentPromise = actionAsync(extensions[index], node);
        if (!currentPromise) {
            return this._applyExtension(node, extensions, index + 1, actionAsync);
        }
        return currentPromise.then(function (newNode) { return _this._applyExtension(newNode, extensions, index + 1, actionAsync); });
    };
    _Exporter.prototype._applyExtensions = function (node, actionAsync) {
        var extensions = [];
        for (var _i = 0, _a = _Exporter._ExtensionNames; _i < _a.length; _i++) {
            var name_1 = _a[_i];
            extensions.push(this._extensions[name_1]);
        }
        return this._applyExtension(node, extensions, 0, actionAsync);
    };
    _Exporter.prototype._extensionsPreExportTextureAsync = function (context, babylonTexture, mimeType) {
        return this._applyExtensions(babylonTexture, function (extension, node) { return extension.preExportTextureAsync && extension.preExportTextureAsync(context, node, mimeType); });
    };
    _Exporter.prototype._extensionsPostExportMeshPrimitiveAsync = function (context, meshPrimitive, babylonSubMesh, binaryWriter) {
        return this._applyExtensions(meshPrimitive, function (extension, node) { return extension.postExportMeshPrimitiveAsync && extension.postExportMeshPrimitiveAsync(context, node, babylonSubMesh, binaryWriter); });
    };
    _Exporter.prototype._extensionsPostExportNodeAsync = function (context, node, babylonNode, nodeMap, binaryWriter) {
        return this._applyExtensions(node, function (extension, node) { return extension.postExportNodeAsync && extension.postExportNodeAsync(context, node, babylonNode, nodeMap, binaryWriter); });
    };
    _Exporter.prototype._extensionsPostExportMaterialAsync = function (context, material, babylonMaterial) {
        return this._applyExtensions(material, function (extension, node) { return extension.postExportMaterialAsync && extension.postExportMaterialAsync(context, node, babylonMaterial); });
    };
    _Exporter.prototype._extensionsPostExportMaterialAdditionalTextures = function (context, material, babylonMaterial) {
        var output = [];
        for (var _i = 0, _a = _Exporter._ExtensionNames; _i < _a.length; _i++) {
            var name_2 = _a[_i];
            var extension = this._extensions[name_2];
            if (extension.postExportMaterialAdditionalTextures) {
                output.push.apply(output, extension.postExportMaterialAdditionalTextures(context, material, babylonMaterial));
            }
        }
        return output;
    };
    _Exporter.prototype._extensionsPostExportTextures = function (context, textureInfo, babylonTexture) {
        for (var _i = 0, _a = _Exporter._ExtensionNames; _i < _a.length; _i++) {
            var name_3 = _a[_i];
            var extension = this._extensions[name_3];
            if (extension.postExportTexture) {
                extension.postExportTexture(context, textureInfo, babylonTexture);
            }
        }
    };
    _Exporter.prototype._forEachExtensions = function (action) {
        for (var _i = 0, _a = _Exporter._ExtensionNames; _i < _a.length; _i++) {
            var name_4 = _a[_i];
            var extension = this._extensions[name_4];
            if (extension.enabled) {
                action(extension);
            }
        }
    };
    _Exporter.prototype._extensionsOnExporting = function () {
        var _this = this;
        this._forEachExtensions(function (extension) {
            if (extension.wasUsed) {
                if (_this._glTF.extensionsUsed == null) {
                    _this._glTF.extensionsUsed = [];
                }
                if (_this._glTF.extensionsUsed.indexOf(extension.name) === -1) {
                    _this._glTF.extensionsUsed.push(extension.name);
                }
                if (extension.required) {
                    if (_this._glTF.extensionsRequired == null) {
                        _this._glTF.extensionsRequired = [];
                    }
                    if (_this._glTF.extensionsRequired.indexOf(extension.name) === -1) {
                        _this._glTF.extensionsRequired.push(extension.name);
                    }
                }
                if (_this._glTF.extensions == null) {
                    _this._glTF.extensions = {};
                }
                if (extension.onExporting) {
                    extension.onExporting();
                }
            }
        });
    };
    /**
     * Load glTF serializer extensions
     */
    _Exporter.prototype._loadExtensions = function () {
        for (var _i = 0, _a = _Exporter._ExtensionNames; _i < _a.length; _i++) {
            var name_5 = _a[_i];
            var extension = _Exporter._ExtensionFactories[name_5](this);
            this._extensions[name_5] = extension;
        }
    };
    _Exporter.prototype.dispose = function () {
        for (var extensionKey in this._extensions) {
            var extension = this._extensions[extensionKey];
            extension.dispose();
        }
    };
    Object.defineProperty(_Exporter.prototype, "options", {
        get: function () {
            return this._options;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Registers a glTF exporter extension
     * @param name Name of the extension to export
     * @param factory The factory function that creates the exporter extension
     */
    _Exporter.RegisterExtension = function (name, factory) {
        if (_Exporter.UnregisterExtension(name)) {
            babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Warn("Extension with the name ".concat(name, " already exists"));
        }
        _Exporter._ExtensionFactories[name] = factory;
        _Exporter._ExtensionNames.push(name);
    };
    /**
     * Un-registers an exporter extension
     * @param name The name fo the exporter extension
     * @returns A boolean indicating whether the extension has been un-registered
     */
    _Exporter.UnregisterExtension = function (name) {
        if (!_Exporter._ExtensionFactories[name]) {
            return false;
        }
        delete _Exporter._ExtensionFactories[name];
        var index = _Exporter._ExtensionNames.indexOf(name);
        if (index !== -1) {
            _Exporter._ExtensionNames.splice(index, 1);
        }
        return true;
    };
    _Exporter.prototype._reorderIndicesBasedOnPrimitiveMode = function (submesh, primitiveMode, babylonIndices, byteOffset, binaryWriter) {
        switch (primitiveMode) {
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Material.TriangleFillMode: {
                if (!byteOffset) {
                    byteOffset = 0;
                }
                for (var i = submesh.indexStart, length_1 = submesh.indexStart + submesh.indexCount; i < length_1; i = i + 3) {
                    var index = byteOffset + i * 4;
                    // swap the second and third indices
                    var secondIndex = binaryWriter.getUInt32(index + 4);
                    var thirdIndex = binaryWriter.getUInt32(index + 8);
                    binaryWriter.setUInt32(thirdIndex, index + 4);
                    binaryWriter.setUInt32(secondIndex, index + 8);
                }
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Material.TriangleFanDrawMode: {
                for (var i = submesh.indexStart + submesh.indexCount - 1, start = submesh.indexStart; i >= start; --i) {
                    binaryWriter.setUInt32(babylonIndices[i], byteOffset);
                    byteOffset += 4;
                }
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Material.TriangleStripDrawMode: {
                if (submesh.indexCount >= 3) {
                    binaryWriter.setUInt32(babylonIndices[submesh.indexStart + 2], byteOffset + 4);
                    binaryWriter.setUInt32(babylonIndices[submesh.indexStart + 1], byteOffset + 8);
                }
                break;
            }
        }
    };
    /**
     * Reorders the vertex attribute data based on the primitive mode.  This is necessary when indices are not available and the winding order is
     * clock-wise during export to glTF
     * @param submesh BabylonJS submesh
     * @param primitiveMode Primitive mode of the mesh
     * @param vertexBufferKind The type of vertex attribute
     * @param meshAttributeArray The vertex attribute data
     * @param byteOffset The offset to the binary data
     * @param binaryWriter The binary data for the glTF file
     */
    _Exporter.prototype._reorderVertexAttributeDataBasedOnPrimitiveMode = function (submesh, primitiveMode, vertexBufferKind, meshAttributeArray, byteOffset, binaryWriter) {
        switch (primitiveMode) {
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Material.TriangleFillMode: {
                this._reorderTriangleFillMode(submesh, vertexBufferKind, meshAttributeArray, byteOffset, binaryWriter);
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Material.TriangleStripDrawMode: {
                this._reorderTriangleStripDrawMode(submesh, vertexBufferKind, meshAttributeArray, byteOffset, binaryWriter);
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Material.TriangleFanDrawMode: {
                this._reorderTriangleFanMode(submesh, vertexBufferKind, meshAttributeArray, byteOffset, binaryWriter);
                break;
            }
        }
    };
    /**
     * Reorders the vertex attributes in the correct triangle mode order .  This is necessary when indices are not available and the winding order is
     * clock-wise during export to glTF
     * @param submesh BabylonJS submesh
     * @param vertexBufferKind The type of vertex attribute
     * @param meshAttributeArray The vertex attribute data
     * @param byteOffset The offset to the binary data
     * @param binaryWriter The binary data for the glTF file
     */
    _Exporter.prototype._reorderTriangleFillMode = function (submesh, vertexBufferKind, meshAttributeArray, byteOffset, binaryWriter) {
        var vertexBuffer = this._getVertexBufferFromMesh(vertexBufferKind, submesh.getMesh());
        if (vertexBuffer) {
            var stride = vertexBuffer.byteStride / babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.GetTypeByteLength(vertexBuffer.type);
            if (submesh.verticesCount % 3 !== 0) {
                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Error("The submesh vertices for the triangle fill mode is not divisible by 3!");
            }
            else {
                var vertexData = [];
                var index = 0;
                switch (vertexBufferKind) {
                    case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.PositionKind:
                    case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.NormalKind: {
                        for (var x = submesh.verticesStart; x < submesh.verticesStart + submesh.verticesCount; x = x + 3) {
                            index = x * stride;
                            vertexData.push(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArray(meshAttributeArray, index));
                            vertexData.push(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArray(meshAttributeArray, index + 2 * stride));
                            vertexData.push(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArray(meshAttributeArray, index + stride));
                        }
                        break;
                    }
                    case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.TangentKind: {
                        for (var x = submesh.verticesStart; x < submesh.verticesStart + submesh.verticesCount; x = x + 3) {
                            index = x * stride;
                            vertexData.push(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector4.FromArray(meshAttributeArray, index));
                            vertexData.push(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector4.FromArray(meshAttributeArray, index + 2 * stride));
                            vertexData.push(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector4.FromArray(meshAttributeArray, index + stride));
                        }
                        break;
                    }
                    case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.ColorKind: {
                        var size = vertexBuffer.getSize();
                        for (var x = submesh.verticesStart; x < submesh.verticesStart + submesh.verticesCount; x = x + size) {
                            index = x * stride;
                            if (size === 4) {
                                vertexData.push(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector4.FromArray(meshAttributeArray, index));
                                vertexData.push(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector4.FromArray(meshAttributeArray, index + 2 * stride));
                                vertexData.push(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector4.FromArray(meshAttributeArray, index + stride));
                            }
                            else {
                                vertexData.push(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArray(meshAttributeArray, index));
                                vertexData.push(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArray(meshAttributeArray, index + 2 * stride));
                                vertexData.push(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArray(meshAttributeArray, index + stride));
                            }
                        }
                        break;
                    }
                    case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UVKind:
                    case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UV2Kind: {
                        for (var x = submesh.verticesStart; x < submesh.verticesStart + submesh.verticesCount; x = x + 3) {
                            index = x * stride;
                            vertexData.push(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector2.FromArray(meshAttributeArray, index));
                            vertexData.push(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector2.FromArray(meshAttributeArray, index + 2 * stride));
                            vertexData.push(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector2.FromArray(meshAttributeArray, index + stride));
                        }
                        break;
                    }
                    default: {
                        babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Error("Unsupported Vertex Buffer type: ".concat(vertexBufferKind));
                    }
                }
                this._writeVertexAttributeData(vertexData, byteOffset, vertexBufferKind, binaryWriter);
            }
        }
        else {
            babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Warn("reorderTriangleFillMode: Vertex Buffer Kind ".concat(vertexBufferKind, " not present!"));
        }
    };
    /**
     * Reorders the vertex attributes in the correct triangle strip order.  This is necessary when indices are not available and the winding order is
     * clock-wise during export to glTF
     * @param submesh BabylonJS submesh
     * @param vertexBufferKind The type of vertex attribute
     * @param meshAttributeArray The vertex attribute data
     * @param byteOffset The offset to the binary data
     * @param binaryWriter The binary data for the glTF file
     */
    _Exporter.prototype._reorderTriangleStripDrawMode = function (submesh, vertexBufferKind, meshAttributeArray, byteOffset, binaryWriter) {
        var vertexBuffer = this._getVertexBufferFromMesh(vertexBufferKind, submesh.getMesh());
        if (vertexBuffer) {
            var stride = vertexBuffer.byteStride / babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.GetTypeByteLength(vertexBuffer.type);
            var vertexData = [];
            var index = 0;
            switch (vertexBufferKind) {
                case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.PositionKind:
                case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.NormalKind: {
                    index = submesh.verticesStart;
                    vertexData.push(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArray(meshAttributeArray, index + 2 * stride));
                    vertexData.push(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArray(meshAttributeArray, index + stride));
                    break;
                }
                case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.TangentKind: {
                    for (var x = submesh.verticesStart + submesh.verticesCount - 1; x >= submesh.verticesStart; --x) {
                        index = x * stride;
                        vertexData.push(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector4.FromArray(meshAttributeArray, index));
                    }
                    break;
                }
                case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.ColorKind: {
                    for (var x = submesh.verticesStart + submesh.verticesCount - 1; x >= submesh.verticesStart; --x) {
                        index = x * stride;
                        vertexBuffer.getSize() === 4
                            ? vertexData.push(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector4.FromArray(meshAttributeArray, index))
                            : vertexData.push(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArray(meshAttributeArray, index));
                    }
                    break;
                }
                case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UVKind:
                case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UV2Kind: {
                    for (var x = submesh.verticesStart + submesh.verticesCount - 1; x >= submesh.verticesStart; --x) {
                        index = x * stride;
                        vertexData.push(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector2.FromArray(meshAttributeArray, index));
                    }
                    break;
                }
                default: {
                    babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Error("Unsupported Vertex Buffer type: ".concat(vertexBufferKind));
                }
            }
            this._writeVertexAttributeData(vertexData, byteOffset + 12, vertexBufferKind, binaryWriter);
        }
        else {
            babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Warn("reorderTriangleStripDrawMode: Vertex buffer kind ".concat(vertexBufferKind, " not present!"));
        }
    };
    /**
     * Reorders the vertex attributes in the correct triangle fan order.  This is necessary when indices are not available and the winding order is
     * clock-wise during export to glTF
     * @param submesh BabylonJS submesh
     * @param vertexBufferKind The type of vertex attribute
     * @param meshAttributeArray The vertex attribute data
     * @param byteOffset The offset to the binary data
     * @param binaryWriter The binary data for the glTF file
     */
    _Exporter.prototype._reorderTriangleFanMode = function (submesh, vertexBufferKind, meshAttributeArray, byteOffset, binaryWriter) {
        var vertexBuffer = this._getVertexBufferFromMesh(vertexBufferKind, submesh.getMesh());
        if (vertexBuffer) {
            var stride = vertexBuffer.byteStride / babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.GetTypeByteLength(vertexBuffer.type);
            var vertexData = [];
            var index = 0;
            switch (vertexBufferKind) {
                case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.PositionKind:
                case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.NormalKind: {
                    for (var x = submesh.verticesStart + submesh.verticesCount - 1; x >= submesh.verticesStart; --x) {
                        index = x * stride;
                        vertexData.push(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArray(meshAttributeArray, index));
                    }
                    break;
                }
                case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.TangentKind: {
                    for (var x = submesh.verticesStart + submesh.verticesCount - 1; x >= submesh.verticesStart; --x) {
                        index = x * stride;
                        vertexData.push(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector4.FromArray(meshAttributeArray, index));
                    }
                    break;
                }
                case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.ColorKind: {
                    for (var x = submesh.verticesStart + submesh.verticesCount - 1; x >= submesh.verticesStart; --x) {
                        index = x * stride;
                        vertexData.push(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector4.FromArray(meshAttributeArray, index));
                        vertexBuffer.getSize() === 4
                            ? vertexData.push(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector4.FromArray(meshAttributeArray, index))
                            : vertexData.push(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArray(meshAttributeArray, index));
                    }
                    break;
                }
                case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UVKind:
                case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UV2Kind: {
                    for (var x = submesh.verticesStart + submesh.verticesCount - 1; x >= submesh.verticesStart; --x) {
                        index = x * stride;
                        vertexData.push(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector2.FromArray(meshAttributeArray, index));
                    }
                    break;
                }
                default: {
                    babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Error("Unsupported Vertex Buffer type: ".concat(vertexBufferKind));
                }
            }
            this._writeVertexAttributeData(vertexData, byteOffset, vertexBufferKind, binaryWriter);
        }
        else {
            babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Warn("reorderTriangleFanMode: Vertex buffer kind ".concat(vertexBufferKind, " not present!"));
        }
    };
    /**
     * Writes the vertex attribute data to binary
     * @param vertices The vertices to write to the binary writer
     * @param byteOffset The offset into the binary writer to overwrite binary data
     * @param vertexAttributeKind The vertex attribute type
     * @param binaryWriter The writer containing the binary data
     */
    _Exporter.prototype._writeVertexAttributeData = function (vertices, byteOffset, vertexAttributeKind, binaryWriter) {
        for (var _i = 0, vertices_1 = vertices; _i < vertices_1.length; _i++) {
            var vertex = vertices_1[_i];
            if (vertexAttributeKind === babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.NormalKind) {
                vertex.normalize();
            }
            else if (vertexAttributeKind === babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.TangentKind && vertex instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector4) {
                _glTFUtilities__WEBPACK_IMPORTED_MODULE_2__._GLTFUtilities._NormalizeTangentFromRef(vertex);
            }
            for (var _a = 0, _b = vertex.asArray(); _a < _b.length; _a++) {
                var component = _b[_a];
                binaryWriter.setFloat32(component, byteOffset);
                byteOffset += 4;
            }
        }
    };
    /**
     * Writes mesh attribute data to a data buffer
     * Returns the bytelength of the data
     * @param vertexBufferKind Indicates what kind of vertex data is being passed in
     * @param attributeComponentKind
     * @param meshAttributeArray Array containing the attribute data
     * @param stride Specifies the space between data
     * @param binaryWriter The buffer to write the binary data to
     * @param babylonTransformNode
     */
    _Exporter.prototype._writeAttributeData = function (vertexBufferKind, attributeComponentKind, meshAttributeArray, stride, binaryWriter, babylonTransformNode) {
        var vertexAttributes = [];
        var index;
        switch (vertexBufferKind) {
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.PositionKind: {
                for (var k = 0, length_2 = meshAttributeArray.length / stride; k < length_2; ++k) {
                    index = k * stride;
                    var vertexData = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArray(meshAttributeArray, index);
                    vertexAttributes.push(vertexData.asArray());
                }
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.NormalKind: {
                for (var k = 0, length_3 = meshAttributeArray.length / stride; k < length_3; ++k) {
                    index = k * stride;
                    var vertexData = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArray(meshAttributeArray, index);
                    vertexAttributes.push(vertexData.normalize().asArray());
                }
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.TangentKind: {
                for (var k = 0, length_4 = meshAttributeArray.length / stride; k < length_4; ++k) {
                    index = k * stride;
                    var vertexData = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector4.FromArray(meshAttributeArray, index);
                    _glTFUtilities__WEBPACK_IMPORTED_MODULE_2__._GLTFUtilities._NormalizeTangentFromRef(vertexData);
                    vertexAttributes.push(vertexData.asArray());
                }
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.ColorKind: {
                var meshMaterial = babylonTransformNode.material;
                var convertToLinear = meshMaterial ? meshMaterial.getClassName() === "StandardMaterial" : true;
                var vertexData = stride === 3 ? new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Color3() : new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Color4();
                var useExactSrgbConversions = this._babylonScene.getEngine().useExactSrgbConversions;
                for (var k = 0, length_5 = meshAttributeArray.length / stride; k < length_5; ++k) {
                    index = k * stride;
                    if (stride === 3) {
                        babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Color3.FromArrayToRef(meshAttributeArray, index, vertexData);
                        if (convertToLinear) {
                            vertexData.toLinearSpaceToRef(vertexData, useExactSrgbConversions);
                        }
                    }
                    else {
                        babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Color4.FromArrayToRef(meshAttributeArray, index, vertexData);
                        if (convertToLinear) {
                            vertexData.toLinearSpaceToRef(vertexData, useExactSrgbConversions);
                        }
                    }
                    vertexAttributes.push(vertexData.asArray());
                }
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UVKind:
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UV2Kind: {
                for (var k = 0, length_6 = meshAttributeArray.length / stride; k < length_6; ++k) {
                    index = k * stride;
                    var vertexData = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector2.FromArray(meshAttributeArray, index);
                    vertexAttributes.push(vertexData.asArray());
                }
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.MatricesIndicesKind:
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.MatricesIndicesExtraKind: {
                for (var k = 0, length_7 = meshAttributeArray.length / stride; k < length_7; ++k) {
                    index = k * stride;
                    var vertexData = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector4.FromArray(meshAttributeArray, index);
                    vertexAttributes.push(vertexData.asArray());
                }
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.MatricesWeightsKind:
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.MatricesWeightsExtraKind: {
                for (var k = 0, length_8 = meshAttributeArray.length / stride; k < length_8; ++k) {
                    index = k * stride;
                    var vertexData = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector4.FromArray(meshAttributeArray, index);
                    vertexAttributes.push(vertexData.asArray());
                }
                break;
            }
            default: {
                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Warn("Unsupported Vertex Buffer Type: " + vertexBufferKind);
                vertexAttributes = [];
            }
        }
        var writeBinaryFunc;
        switch (attributeComponentKind) {
            case 5121 /* AccessorComponentType.UNSIGNED_BYTE */: {
                writeBinaryFunc = binaryWriter.setUInt8.bind(binaryWriter);
                break;
            }
            case 5123 /* AccessorComponentType.UNSIGNED_SHORT */: {
                writeBinaryFunc = binaryWriter.setUInt16.bind(binaryWriter);
                break;
            }
            case 5125 /* AccessorComponentType.UNSIGNED_INT */: {
                writeBinaryFunc = binaryWriter.setUInt32.bind(binaryWriter);
                break;
            }
            case 5126 /* AccessorComponentType.FLOAT */: {
                writeBinaryFunc = binaryWriter.setFloat32.bind(binaryWriter);
                break;
            }
            default: {
                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Warn("Unsupported Attribute Component kind: " + attributeComponentKind);
                return;
            }
        }
        for (var _i = 0, vertexAttributes_1 = vertexAttributes; _i < vertexAttributes_1.length; _i++) {
            var vertexAttribute = vertexAttributes_1[_i];
            for (var _a = 0, vertexAttribute_1 = vertexAttribute; _a < vertexAttribute_1.length; _a++) {
                var component = vertexAttribute_1[_a];
                writeBinaryFunc(component);
            }
        }
    };
    /**
     * Writes mesh attribute data to a data buffer
     * Returns the bytelength of the data
     * @param vertexBufferKind Indicates what kind of vertex data is being passed in
     * @param attributeComponentKind attribute component type
     * @param meshPrimitive the mesh primitive
     * @param meshAttributeArray Array containing the attribute data
     * @param morphTargetAttributeArray
     * @param stride Specifies the space between data
     * @param binaryWriter The buffer to write the binary data to
     * @param minMax
     */
    _Exporter.prototype.writeMorphTargetAttributeData = function (vertexBufferKind, attributeComponentKind, meshPrimitive, meshAttributeArray, morphTargetAttributeArray, stride, binaryWriter, minMax) {
        var vertexAttributes = [];
        var index;
        var difference = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3();
        var difference4 = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector4(0, 0, 0, 0);
        switch (vertexBufferKind) {
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.PositionKind: {
                for (var k = meshPrimitive.verticesStart; k < meshPrimitive.verticesCount; ++k) {
                    index = meshPrimitive.indexStart + k * stride;
                    var vertexData = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArray(meshAttributeArray, index);
                    var morphData = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArray(morphTargetAttributeArray, index);
                    difference = morphData.subtractToRef(vertexData, difference);
                    if (minMax) {
                        minMax.min.copyFromFloats(Math.min(difference.x, minMax.min.x), Math.min(difference.y, minMax.min.y), Math.min(difference.z, minMax.min.z));
                        minMax.max.copyFromFloats(Math.max(difference.x, minMax.max.x), Math.max(difference.y, minMax.max.y), Math.max(difference.z, minMax.max.z));
                    }
                    vertexAttributes.push(difference.asArray());
                }
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.NormalKind: {
                for (var k = meshPrimitive.verticesStart; k < meshPrimitive.verticesCount; ++k) {
                    index = meshPrimitive.indexStart + k * stride;
                    var vertexData = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArray(meshAttributeArray, index).normalize();
                    var morphData = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArray(morphTargetAttributeArray, index).normalize();
                    difference = morphData.subtractToRef(vertexData, difference);
                    vertexAttributes.push(difference.asArray());
                }
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.TangentKind: {
                for (var k = meshPrimitive.verticesStart; k < meshPrimitive.verticesCount; ++k) {
                    index = meshPrimitive.indexStart + k * (stride + 1);
                    var vertexData = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector4.FromArray(meshAttributeArray, index);
                    _glTFUtilities__WEBPACK_IMPORTED_MODULE_2__._GLTFUtilities._NormalizeTangentFromRef(vertexData);
                    var morphData = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector4.FromArray(morphTargetAttributeArray, index);
                    _glTFUtilities__WEBPACK_IMPORTED_MODULE_2__._GLTFUtilities._NormalizeTangentFromRef(morphData);
                    difference4 = morphData.subtractToRef(vertexData, difference4);
                    vertexAttributes.push([difference4.x, difference4.y, difference4.z]);
                }
                break;
            }
            default: {
                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Warn("Unsupported Vertex Buffer Type: " + vertexBufferKind);
                vertexAttributes = [];
            }
        }
        var writeBinaryFunc;
        switch (attributeComponentKind) {
            case 5121 /* AccessorComponentType.UNSIGNED_BYTE */: {
                writeBinaryFunc = binaryWriter.setUInt8.bind(binaryWriter);
                break;
            }
            case 5123 /* AccessorComponentType.UNSIGNED_SHORT */: {
                writeBinaryFunc = binaryWriter.setUInt16.bind(binaryWriter);
                break;
            }
            case 5125 /* AccessorComponentType.UNSIGNED_INT */: {
                writeBinaryFunc = binaryWriter.setUInt32.bind(binaryWriter);
                break;
            }
            case 5126 /* AccessorComponentType.FLOAT */: {
                writeBinaryFunc = binaryWriter.setFloat32.bind(binaryWriter);
                break;
            }
            default: {
                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Warn("Unsupported Attribute Component kind: " + attributeComponentKind);
                return;
            }
        }
        for (var _i = 0, vertexAttributes_2 = vertexAttributes; _i < vertexAttributes_2.length; _i++) {
            var vertexAttribute = vertexAttributes_2[_i];
            for (var _a = 0, vertexAttribute_2 = vertexAttribute; _a < vertexAttribute_2.length; _a++) {
                var component = vertexAttribute_2[_a];
                writeBinaryFunc(component);
            }
        }
    };
    /**
     * Generates glTF json data
     * @param shouldUseGlb Indicates whether the json should be written for a glb file
     * @param glTFPrefix Text to use when prefixing a glTF file
     * @param prettyPrint Indicates whether the json file should be pretty printed (true) or not (false)
     * @returns json data as string
     */
    _Exporter.prototype._generateJSON = function (shouldUseGlb, glTFPrefix, prettyPrint) {
        var _this = this;
        var buffer = { byteLength: this._totalByteLength };
        var imageName;
        var imageData;
        var bufferView;
        var byteOffset = this._totalByteLength;
        if (buffer.byteLength) {
            this._glTF.buffers = [buffer];
        }
        if (this._nodes && this._nodes.length) {
            this._glTF.nodes = this._nodes;
        }
        if (this._meshes && this._meshes.length) {
            this._glTF.meshes = this._meshes;
        }
        if (this._scenes && this._scenes.length) {
            this._glTF.scenes = this._scenes;
            this._glTF.scene = 0;
        }
        if (this._cameras && this._cameras.length) {
            this._glTF.cameras = this._cameras;
        }
        if (this._bufferViews && this._bufferViews.length) {
            this._glTF.bufferViews = this._bufferViews;
        }
        if (this._accessors && this._accessors.length) {
            this._glTF.accessors = this._accessors;
        }
        if (this._animations && this._animations.length) {
            this._glTF.animations = this._animations;
        }
        if (this._materials && this._materials.length) {
            this._glTF.materials = this._materials;
        }
        if (this._textures && this._textures.length) {
            this._glTF.textures = this._textures;
        }
        if (this._samplers && this._samplers.length) {
            this._glTF.samplers = this._samplers;
        }
        if (this._skins && this._skins.length) {
            this._glTF.skins = this._skins;
        }
        if (this._images && this._images.length) {
            if (!shouldUseGlb) {
                this._glTF.images = this._images;
            }
            else {
                this._glTF.images = [];
                this._images.forEach(function (image) {
                    if (image.uri) {
                        imageData = _this._imageData[image.uri];
                        _this._orderedImageData.push(imageData);
                        imageName = image.uri.split(".")[0] + " image";
                        bufferView = _glTFUtilities__WEBPACK_IMPORTED_MODULE_2__._GLTFUtilities._CreateBufferView(0, byteOffset, imageData.data.byteLength, undefined, imageName);
                        byteOffset += imageData.data.byteLength;
                        _this._bufferViews.push(bufferView);
                        image.bufferView = _this._bufferViews.length - 1;
                        image.name = imageName;
                        image.mimeType = imageData.mimeType;
                        image.uri = undefined;
                        if (!_this._glTF.images) {
                            _this._glTF.images = [];
                        }
                        _this._glTF.images.push(image);
                    }
                });
                // Replace uri with bufferview and mime type for glb
                buffer.byteLength = byteOffset;
            }
        }
        if (!shouldUseGlb) {
            buffer.uri = glTFPrefix + ".bin";
        }
        var jsonText = prettyPrint ? JSON.stringify(this._glTF, null, 2) : JSON.stringify(this._glTF);
        return jsonText;
    };
    /**
     * Generates data for .gltf and .bin files based on the glTF prefix string
     * @param glTFPrefix Text to use when prefixing a glTF file
     * @param dispose Dispose the exporter
     * @returns GLTFData with glTF file data
     */
    _Exporter.prototype._generateGLTFAsync = function (glTFPrefix, dispose) {
        var _this = this;
        if (dispose === void 0) { dispose = true; }
        return this._generateBinaryAsync().then(function (binaryBuffer) {
            _this._extensionsOnExporting();
            var jsonText = _this._generateJSON(false, glTFPrefix, true);
            var bin = new Blob([binaryBuffer], { type: "application/octet-stream" });
            var glTFFileName = glTFPrefix + ".gltf";
            var glTFBinFile = glTFPrefix + ".bin";
            var container = new _glTFData__WEBPACK_IMPORTED_MODULE_3__.GLTFData();
            container.glTFFiles[glTFFileName] = jsonText;
            container.glTFFiles[glTFBinFile] = bin;
            if (_this._imageData) {
                for (var image in _this._imageData) {
                    container.glTFFiles[image] = new Blob([_this._imageData[image].data], { type: _this._imageData[image].mimeType });
                }
            }
            if (dispose) {
                _this.dispose();
            }
            return container;
        });
    };
    /**
     * Creates a binary buffer for glTF
     * @returns array buffer for binary data
     */
    _Exporter.prototype._generateBinaryAsync = function () {
        var _this = this;
        var binaryWriter = new _BinaryWriter(4);
        return this._createSceneAsync(binaryWriter).then(function () {
            if (_this._localEngine) {
                _this._localEngine.dispose();
            }
            return binaryWriter.getArrayBuffer();
        });
    };
    /**
     * Pads the number to a multiple of 4
     * @param num number to pad
     * @returns padded number
     */
    _Exporter.prototype._getPadding = function (num) {
        var remainder = num % 4;
        var padding = remainder === 0 ? remainder : 4 - remainder;
        return padding;
    };
    /**
     * @internal
     */
    _Exporter.prototype._generateGLBAsync = function (glTFPrefix, dispose) {
        var _this = this;
        if (dispose === void 0) { dispose = true; }
        return this._generateBinaryAsync().then(function (binaryBuffer) {
            _this._extensionsOnExporting();
            var jsonText = _this._generateJSON(true);
            var glbFileName = glTFPrefix + ".glb";
            var headerLength = 12;
            var chunkLengthPrefix = 8;
            var jsonLength = jsonText.length;
            var encodedJsonText;
            var imageByteLength = 0;
            // make use of TextEncoder when available
            if (typeof TextEncoder !== "undefined") {
                var encoder = new TextEncoder();
                encodedJsonText = encoder.encode(jsonText);
                jsonLength = encodedJsonText.length;
            }
            for (var i = 0; i < _this._orderedImageData.length; ++i) {
                imageByteLength += _this._orderedImageData[i].data.byteLength;
            }
            var jsonPadding = _this._getPadding(jsonLength);
            var binPadding = _this._getPadding(binaryBuffer.byteLength);
            var imagePadding = _this._getPadding(imageByteLength);
            var byteLength = headerLength + 2 * chunkLengthPrefix + jsonLength + jsonPadding + binaryBuffer.byteLength + binPadding + imageByteLength + imagePadding;
            //header
            var headerBuffer = new ArrayBuffer(headerLength);
            var headerBufferView = new DataView(headerBuffer);
            headerBufferView.setUint32(0, 0x46546c67, true); //glTF
            headerBufferView.setUint32(4, 2, true); // version
            headerBufferView.setUint32(8, byteLength, true); // total bytes in file
            //json chunk
            var jsonChunkBuffer = new ArrayBuffer(chunkLengthPrefix + jsonLength + jsonPadding);
            var jsonChunkBufferView = new DataView(jsonChunkBuffer);
            jsonChunkBufferView.setUint32(0, jsonLength + jsonPadding, true);
            jsonChunkBufferView.setUint32(4, 0x4e4f534a, true);
            //json chunk bytes
            var jsonData = new Uint8Array(jsonChunkBuffer, chunkLengthPrefix);
            // if TextEncoder was available, we can simply copy the encoded array
            if (encodedJsonText) {
                jsonData.set(encodedJsonText);
            }
            else {
                var blankCharCode = "_".charCodeAt(0);
                for (var i = 0; i < jsonLength; ++i) {
                    var charCode = jsonText.charCodeAt(i);
                    // if the character doesn't fit into a single UTF-16 code unit, just put a blank character
                    if (charCode != jsonText.codePointAt(i)) {
                        jsonData[i] = blankCharCode;
                    }
                    else {
                        jsonData[i] = charCode;
                    }
                }
            }
            //json padding
            var jsonPaddingView = new Uint8Array(jsonChunkBuffer, chunkLengthPrefix + jsonLength);
            for (var i = 0; i < jsonPadding; ++i) {
                jsonPaddingView[i] = 0x20;
            }
            //binary chunk
            var binaryChunkBuffer = new ArrayBuffer(chunkLengthPrefix);
            var binaryChunkBufferView = new DataView(binaryChunkBuffer);
            binaryChunkBufferView.setUint32(0, binaryBuffer.byteLength + imageByteLength + imagePadding, true);
            binaryChunkBufferView.setUint32(4, 0x004e4942, true);
            // binary padding
            var binPaddingBuffer = new ArrayBuffer(binPadding);
            var binPaddingView = new Uint8Array(binPaddingBuffer);
            for (var i = 0; i < binPadding; ++i) {
                binPaddingView[i] = 0;
            }
            var imagePaddingBuffer = new ArrayBuffer(imagePadding);
            var imagePaddingView = new Uint8Array(imagePaddingBuffer);
            for (var i = 0; i < imagePadding; ++i) {
                imagePaddingView[i] = 0;
            }
            var glbData = [headerBuffer, jsonChunkBuffer, binaryChunkBuffer, binaryBuffer];
            // binary data
            for (var i = 0; i < _this._orderedImageData.length; ++i) {
                glbData.push(_this._orderedImageData[i].data);
            }
            glbData.push(binPaddingBuffer);
            glbData.push(imagePaddingBuffer);
            var glbFile = new Blob(glbData, { type: "application/octet-stream" });
            var container = new _glTFData__WEBPACK_IMPORTED_MODULE_3__.GLTFData();
            container.glTFFiles[glbFileName] = glbFile;
            if (_this._localEngine != null) {
                _this._localEngine.dispose();
            }
            if (dispose) {
                _this.dispose();
            }
            return container;
        });
    };
    /**
     * Sets the TRS for each node
     * @param node glTF Node for storing the transformation data
     * @param babylonTransformNode Babylon mesh used as the source for the transformation data
     */
    _Exporter.prototype._setNodeTransformation = function (node, babylonTransformNode) {
        if (!babylonTransformNode.getPivotPoint().equalsToFloats(0, 0, 0)) {
            babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Warn("Pivot points are not supported in the glTF serializer");
        }
        if (!babylonTransformNode.position.equalsToFloats(0, 0, 0)) {
            node.translation = babylonTransformNode.position.asArray();
        }
        if (!babylonTransformNode.scaling.equalsToFloats(1, 1, 1)) {
            node.scale = babylonTransformNode.scaling.asArray();
        }
        var rotationQuaternion = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.FromEulerAngles(babylonTransformNode.rotation.x, babylonTransformNode.rotation.y, babylonTransformNode.rotation.z);
        if (babylonTransformNode.rotationQuaternion) {
            rotationQuaternion.multiplyInPlace(babylonTransformNode.rotationQuaternion);
        }
        if (!babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.IsIdentity(rotationQuaternion)) {
            node.rotation = rotationQuaternion.normalize().asArray();
        }
    };
    _Exporter.prototype._setCameraTransformation = function (node, babylonCamera) {
        var translation = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Vector3[0];
        var rotation = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Quaternion[0];
        babylonCamera.getWorldMatrix().decompose(undefined, rotation, translation);
        if (!translation.equalsToFloats(0, 0, 0)) {
            node.translation = translation.asArray();
        }
        // // Rotation by 180 as glTF has a different convention than Babylon.
        rotation.multiplyInPlace(rotation180Y);
        if (!babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.IsIdentity(rotation)) {
            node.rotation = rotation.asArray();
        }
    };
    _Exporter.prototype._getVertexBufferFromMesh = function (attributeKind, bufferMesh) {
        if (bufferMesh.isVerticesDataPresent(attributeKind, true)) {
            var vertexBuffer = bufferMesh.getVertexBuffer(attributeKind, true);
            if (vertexBuffer) {
                return vertexBuffer;
            }
        }
        return null;
    };
    /**
     * Creates a bufferview based on the vertices type for the Babylon mesh
     * @param kind Indicates the type of vertices data
     * @param attributeComponentKind Indicates the numerical type used to store the data
     * @param babylonTransformNode The Babylon mesh to get the vertices data from
     * @param binaryWriter The buffer to write the bufferview data to
     * @param byteStride
     */
    _Exporter.prototype._createBufferViewKind = function (kind, attributeComponentKind, babylonTransformNode, binaryWriter, byteStride) {
        var bufferMesh = babylonTransformNode instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Mesh
            ? babylonTransformNode
            : babylonTransformNode instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.InstancedMesh
                ? babylonTransformNode.sourceMesh
                : null;
        if (bufferMesh) {
            var vertexBuffer = bufferMesh.getVertexBuffer(kind, true);
            var vertexData = bufferMesh.getVerticesData(kind, undefined, undefined, true);
            if (vertexBuffer && vertexData) {
                var typeByteLength = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.GetTypeByteLength(attributeComponentKind);
                var byteLength = vertexData.length * typeByteLength;
                var bufferView = _glTFUtilities__WEBPACK_IMPORTED_MODULE_2__._GLTFUtilities._CreateBufferView(0, binaryWriter.getByteOffset(), byteLength, byteStride, kind + " - " + bufferMesh.name);
                this._bufferViews.push(bufferView);
                this._writeAttributeData(kind, attributeComponentKind, vertexData, byteStride / typeByteLength, binaryWriter, babylonTransformNode);
            }
        }
    };
    /**
     * Creates a bufferview based on the vertices type for the Babylon mesh
     * @param babylonSubMesh The Babylon submesh that the morph target is applied to
     * @param meshPrimitive
     * @param babylonMorphTarget the morph target to be exported
     * @param binaryWriter The buffer to write the bufferview data to
     */
    _Exporter.prototype._setMorphTargetAttributes = function (babylonSubMesh, meshPrimitive, babylonMorphTarget, binaryWriter) {
        if (babylonMorphTarget) {
            if (!meshPrimitive.targets) {
                meshPrimitive.targets = [];
            }
            var target = {};
            var mesh = babylonSubMesh.getMesh();
            if (babylonMorphTarget.hasNormals) {
                var vertexNormals = mesh.getVerticesData(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.NormalKind, undefined, undefined, true);
                var morphNormals = babylonMorphTarget.getNormals();
                var count = babylonSubMesh.verticesCount;
                var byteStride = 12; // 3 x 4 byte floats
                var byteLength = count * byteStride;
                var bufferView = _glTFUtilities__WEBPACK_IMPORTED_MODULE_2__._GLTFUtilities._CreateBufferView(0, binaryWriter.getByteOffset(), byteLength, byteStride, babylonMorphTarget.name + "_NORMAL");
                this._bufferViews.push(bufferView);
                var bufferViewIndex = this._bufferViews.length - 1;
                var accessor = _glTFUtilities__WEBPACK_IMPORTED_MODULE_2__._GLTFUtilities._CreateAccessor(bufferViewIndex, babylonMorphTarget.name + " - " + "NORMAL", "VEC3" /* AccessorType.VEC3 */, 5126 /* AccessorComponentType.FLOAT */, count, 0, null, null);
                this._accessors.push(accessor);
                target.NORMAL = this._accessors.length - 1;
                this.writeMorphTargetAttributeData(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.NormalKind, 5126 /* AccessorComponentType.FLOAT */, babylonSubMesh, vertexNormals, morphNormals, byteStride / 4, binaryWriter);
            }
            if (babylonMorphTarget.hasPositions) {
                var vertexPositions = mesh.getVerticesData(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.PositionKind, undefined, undefined, true);
                var morphPositions = babylonMorphTarget.getPositions();
                var count = babylonSubMesh.verticesCount;
                var byteStride = 12; // 3 x 4 byte floats
                var byteLength = count * byteStride;
                var bufferView = _glTFUtilities__WEBPACK_IMPORTED_MODULE_2__._GLTFUtilities._CreateBufferView(0, binaryWriter.getByteOffset(), byteLength, byteStride, babylonMorphTarget.name + "_POSITION");
                this._bufferViews.push(bufferView);
                var bufferViewIndex = this._bufferViews.length - 1;
                var minMax = { min: new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3(Infinity, Infinity, Infinity), max: new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3(-Infinity, -Infinity, -Infinity) };
                var accessor = _glTFUtilities__WEBPACK_IMPORTED_MODULE_2__._GLTFUtilities._CreateAccessor(bufferViewIndex, babylonMorphTarget.name + " - " + "POSITION", "VEC3" /* AccessorType.VEC3 */, 5126 /* AccessorComponentType.FLOAT */, count, 0, null, null);
                this._accessors.push(accessor);
                target.POSITION = this._accessors.length - 1;
                this.writeMorphTargetAttributeData(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.PositionKind, 5126 /* AccessorComponentType.FLOAT */, babylonSubMesh, vertexPositions, morphPositions, byteStride / 4, binaryWriter, minMax);
                accessor.min = minMax.min.asArray();
                accessor.max = minMax.max.asArray();
            }
            if (babylonMorphTarget.hasTangents) {
                var vertexTangents = mesh.getVerticesData(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.TangentKind, undefined, undefined, true);
                var morphTangents = babylonMorphTarget.getTangents();
                var count = babylonSubMesh.verticesCount;
                var byteStride = 12; // 3 x 4 byte floats
                var byteLength = count * byteStride;
                var bufferView = _glTFUtilities__WEBPACK_IMPORTED_MODULE_2__._GLTFUtilities._CreateBufferView(0, binaryWriter.getByteOffset(), byteLength, byteStride, babylonMorphTarget.name + "_NORMAL");
                this._bufferViews.push(bufferView);
                var bufferViewIndex = this._bufferViews.length - 1;
                var accessor = _glTFUtilities__WEBPACK_IMPORTED_MODULE_2__._GLTFUtilities._CreateAccessor(bufferViewIndex, babylonMorphTarget.name + " - " + "TANGENT", "VEC3" /* AccessorType.VEC3 */, 5126 /* AccessorComponentType.FLOAT */, count, 0, null, null);
                this._accessors.push(accessor);
                target.TANGENT = this._accessors.length - 1;
                this.writeMorphTargetAttributeData(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.TangentKind, 5126 /* AccessorComponentType.FLOAT */, babylonSubMesh, vertexTangents, morphTangents, byteStride / 4, binaryWriter);
            }
            meshPrimitive.targets.push(target);
        }
    };
    /**
     * The primitive mode of the Babylon mesh
     * @param babylonMesh The BabylonJS mesh
     * @returns Unsigned integer of the primitive mode or null
     */
    _Exporter.prototype._getMeshPrimitiveMode = function (babylonMesh) {
        if (babylonMesh instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.LinesMesh) {
            return babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Material.LineListDrawMode;
        }
        if (babylonMesh instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.InstancedMesh || babylonMesh instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Mesh) {
            var baseMesh = babylonMesh instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Mesh ? babylonMesh : babylonMesh.sourceMesh;
            if (typeof baseMesh.overrideRenderingFillMode === "number") {
                return baseMesh.overrideRenderingFillMode;
            }
        }
        return babylonMesh.material ? babylonMesh.material.fillMode : babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Material.TriangleFillMode;
    };
    /**
     * Sets the primitive mode of the glTF mesh primitive
     * @param meshPrimitive glTF mesh primitive
     * @param primitiveMode The primitive mode
     */
    _Exporter.prototype._setPrimitiveMode = function (meshPrimitive, primitiveMode) {
        switch (primitiveMode) {
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Material.TriangleFillMode: {
                // glTF defaults to using Triangle Mode
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Material.TriangleStripDrawMode: {
                meshPrimitive.mode = 5 /* MeshPrimitiveMode.TRIANGLE_STRIP */;
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Material.TriangleFanDrawMode: {
                meshPrimitive.mode = 6 /* MeshPrimitiveMode.TRIANGLE_FAN */;
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Material.PointListDrawMode: {
                meshPrimitive.mode = 0 /* MeshPrimitiveMode.POINTS */;
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Material.PointFillMode: {
                meshPrimitive.mode = 0 /* MeshPrimitiveMode.POINTS */;
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Material.LineLoopDrawMode: {
                meshPrimitive.mode = 2 /* MeshPrimitiveMode.LINE_LOOP */;
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Material.LineListDrawMode: {
                meshPrimitive.mode = 1 /* MeshPrimitiveMode.LINES */;
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Material.LineStripDrawMode: {
                meshPrimitive.mode = 3 /* MeshPrimitiveMode.LINE_STRIP */;
                break;
            }
        }
    };
    /**
     * Sets the vertex attribute accessor based of the glTF mesh primitive
     * @param meshPrimitive glTF mesh primitive
     * @param attributeKind vertex attribute
     */
    _Exporter.prototype._setAttributeKind = function (meshPrimitive, attributeKind) {
        switch (attributeKind) {
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.PositionKind: {
                meshPrimitive.attributes.POSITION = this._accessors.length - 1;
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.NormalKind: {
                meshPrimitive.attributes.NORMAL = this._accessors.length - 1;
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.ColorKind: {
                meshPrimitive.attributes.COLOR_0 = this._accessors.length - 1;
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.TangentKind: {
                meshPrimitive.attributes.TANGENT = this._accessors.length - 1;
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UVKind: {
                meshPrimitive.attributes.TEXCOORD_0 = this._accessors.length - 1;
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UV2Kind: {
                meshPrimitive.attributes.TEXCOORD_1 = this._accessors.length - 1;
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.MatricesIndicesKind: {
                meshPrimitive.attributes.JOINTS_0 = this._accessors.length - 1;
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.MatricesIndicesExtraKind: {
                meshPrimitive.attributes.JOINTS_1 = this._accessors.length - 1;
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.MatricesWeightsKind: {
                meshPrimitive.attributes.WEIGHTS_0 = this._accessors.length - 1;
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.MatricesWeightsExtraKind: {
                meshPrimitive.attributes.WEIGHTS_1 = this._accessors.length - 1;
                break;
            }
            default: {
                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Warn("Unsupported Vertex Buffer Type: " + attributeKind);
            }
        }
    };
    /**
     * Sets data for the primitive attributes of each submesh
     * @param mesh glTF Mesh object to store the primitive attribute information
     * @param babylonTransformNode Babylon mesh to get the primitive attribute data from
     * @param binaryWriter Buffer to write the attribute data to
     * @returns promise that resolves when done setting the primitive attributes
     */
    _Exporter.prototype._setPrimitiveAttributesAsync = function (mesh, babylonTransformNode, binaryWriter) {
        var promises = [];
        var bufferMesh = null;
        var bufferView;
        var minMax;
        if (babylonTransformNode instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Mesh) {
            bufferMesh = babylonTransformNode;
        }
        else if (babylonTransformNode instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.InstancedMesh) {
            bufferMesh = babylonTransformNode.sourceMesh;
        }
        var attributeData = [
            { kind: babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.PositionKind, accessorType: "VEC3" /* AccessorType.VEC3 */, accessorComponentType: 5126 /* AccessorComponentType.FLOAT */, byteStride: 12 },
            { kind: babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.NormalKind, accessorType: "VEC3" /* AccessorType.VEC3 */, accessorComponentType: 5126 /* AccessorComponentType.FLOAT */, byteStride: 12 },
            { kind: babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.ColorKind, accessorType: "VEC4" /* AccessorType.VEC4 */, accessorComponentType: 5126 /* AccessorComponentType.FLOAT */, byteStride: 16 },
            { kind: babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.TangentKind, accessorType: "VEC4" /* AccessorType.VEC4 */, accessorComponentType: 5126 /* AccessorComponentType.FLOAT */, byteStride: 16 },
            { kind: babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UVKind, accessorType: "VEC2" /* AccessorType.VEC2 */, accessorComponentType: 5126 /* AccessorComponentType.FLOAT */, byteStride: 8 },
            { kind: babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UV2Kind, accessorType: "VEC2" /* AccessorType.VEC2 */, accessorComponentType: 5126 /* AccessorComponentType.FLOAT */, byteStride: 8 },
            { kind: babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.MatricesIndicesKind, accessorType: "VEC4" /* AccessorType.VEC4 */, accessorComponentType: 5123 /* AccessorComponentType.UNSIGNED_SHORT */, byteStride: 8 },
            { kind: babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.MatricesIndicesExtraKind, accessorType: "VEC4" /* AccessorType.VEC4 */, accessorComponentType: 5123 /* AccessorComponentType.UNSIGNED_SHORT */, byteStride: 8 },
            { kind: babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.MatricesWeightsKind, accessorType: "VEC4" /* AccessorType.VEC4 */, accessorComponentType: 5126 /* AccessorComponentType.FLOAT */, byteStride: 16 },
            { kind: babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.MatricesWeightsExtraKind, accessorType: "VEC4" /* AccessorType.VEC4 */, accessorComponentType: 5126 /* AccessorComponentType.FLOAT */, byteStride: 16 },
        ];
        if (bufferMesh) {
            var indexBufferViewIndex = null;
            var primitiveMode = this._getMeshPrimitiveMode(bufferMesh);
            var vertexAttributeBufferViews = {};
            var morphTargetManager = bufferMesh.morphTargetManager;
            // For each BabylonMesh, create bufferviews for each 'kind'
            for (var _i = 0, attributeData_1 = attributeData; _i < attributeData_1.length; _i++) {
                var attribute = attributeData_1[_i];
                var attributeKind = attribute.kind;
                var attributeComponentKind = attribute.accessorComponentType;
                if (bufferMesh.isVerticesDataPresent(attributeKind, true)) {
                    var vertexBuffer = this._getVertexBufferFromMesh(attributeKind, bufferMesh);
                    attribute.byteStride = vertexBuffer
                        ? vertexBuffer.getSize() * babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.GetTypeByteLength(attribute.accessorComponentType)
                        : babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.DeduceStride(attributeKind) * 4;
                    if (attribute.byteStride === 12) {
                        attribute.accessorType = "VEC3" /* AccessorType.VEC3 */;
                    }
                    this._createBufferViewKind(attributeKind, attributeComponentKind, babylonTransformNode, binaryWriter, attribute.byteStride);
                    attribute.bufferViewIndex = this._bufferViews.length - 1;
                    vertexAttributeBufferViews[attributeKind] = attribute.bufferViewIndex;
                }
            }
            if (bufferMesh.getTotalIndices()) {
                var indices = bufferMesh.getIndices();
                if (indices) {
                    var byteLength = indices.length * 4;
                    bufferView = _glTFUtilities__WEBPACK_IMPORTED_MODULE_2__._GLTFUtilities._CreateBufferView(0, binaryWriter.getByteOffset(), byteLength, undefined, "Indices - " + bufferMesh.name);
                    this._bufferViews.push(bufferView);
                    indexBufferViewIndex = this._bufferViews.length - 1;
                    for (var k = 0, length_9 = indices.length; k < length_9; ++k) {
                        binaryWriter.setUInt32(indices[k]);
                    }
                }
            }
            if (bufferMesh.subMeshes) {
                // go through all mesh primitives (submeshes)
                for (var _a = 0, _b = bufferMesh.subMeshes; _a < _b.length; _a++) {
                    var submesh = _b[_a];
                    var babylonMaterial = submesh.getMaterial() || bufferMesh.getScene().defaultMaterial;
                    var materialIndex = null;
                    if (babylonMaterial) {
                        if (bufferMesh instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.LinesMesh) {
                            // get the color from the lines mesh and set it in the material
                            var material = {
                                name: bufferMesh.name + " material",
                            };
                            if (!bufferMesh.color.equals(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Color3.White()) || bufferMesh.alpha < 1) {
                                material.pbrMetallicRoughness = {
                                    baseColorFactor: bufferMesh.color.asArray().concat([bufferMesh.alpha]),
                                };
                            }
                            this._materials.push(material);
                            materialIndex = this._materials.length - 1;
                        }
                        else if (babylonMaterial instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.MultiMaterial) {
                            var subMaterial = babylonMaterial.subMaterials[submesh.materialIndex];
                            if (subMaterial) {
                                babylonMaterial = subMaterial;
                                materialIndex = this._materialMap[babylonMaterial.uniqueId];
                            }
                        }
                        else {
                            materialIndex = this._materialMap[babylonMaterial.uniqueId];
                        }
                    }
                    var glTFMaterial = materialIndex != null ? this._materials[materialIndex] : null;
                    var meshPrimitive = { attributes: {} };
                    this._setPrimitiveMode(meshPrimitive, primitiveMode);
                    for (var _c = 0, attributeData_2 = attributeData; _c < attributeData_2.length; _c++) {
                        var attribute = attributeData_2[_c];
                        var attributeKind = attribute.kind;
                        if ((attributeKind === babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UVKind || attributeKind === babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UV2Kind) && !this._options.exportUnusedUVs) {
                            if (!glTFMaterial || !this._glTFMaterialExporter._hasTexturesPresent(glTFMaterial)) {
                                continue;
                            }
                        }
                        var vertexData = bufferMesh.getVerticesData(attributeKind, undefined, undefined, true);
                        if (vertexData) {
                            var vertexBuffer = this._getVertexBufferFromMesh(attributeKind, bufferMesh);
                            if (vertexBuffer) {
                                var stride = vertexBuffer.getSize();
                                var bufferViewIndex = attribute.bufferViewIndex;
                                if (bufferViewIndex != undefined) {
                                    // check to see if bufferviewindex has a numeric value assigned.
                                    minMax = { min: null, max: null };
                                    if (attributeKind == babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.PositionKind) {
                                        minMax = _glTFUtilities__WEBPACK_IMPORTED_MODULE_2__._GLTFUtilities._CalculateMinMaxPositions(vertexData, 0, vertexData.length / stride);
                                    }
                                    var accessor = _glTFUtilities__WEBPACK_IMPORTED_MODULE_2__._GLTFUtilities._CreateAccessor(bufferViewIndex, attributeKind + " - " + babylonTransformNode.name, attribute.accessorType, attribute.accessorComponentType, vertexData.length / stride, 0, minMax.min, minMax.max);
                                    this._accessors.push(accessor);
                                    this._setAttributeKind(meshPrimitive, attributeKind);
                                }
                            }
                        }
                    }
                    if (indexBufferViewIndex) {
                        // Create accessor
                        var accessor = _glTFUtilities__WEBPACK_IMPORTED_MODULE_2__._GLTFUtilities._CreateAccessor(indexBufferViewIndex, "indices - " + babylonTransformNode.name, "SCALAR" /* AccessorType.SCALAR */, 5125 /* AccessorComponentType.UNSIGNED_INT */, submesh.indexCount, submesh.indexStart * 4, null, null);
                        this._accessors.push(accessor);
                        meshPrimitive.indices = this._accessors.length - 1;
                    }
                    if (Object.keys(meshPrimitive.attributes).length > 0) {
                        var sideOrientation = bufferMesh.overrideMaterialSideOrientation !== null ? bufferMesh.overrideMaterialSideOrientation : babylonMaterial.sideOrientation;
                        if (sideOrientation === (this._babylonScene.useRightHandedSystem ? babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Material.ClockWiseSideOrientation : babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Material.CounterClockWiseSideOrientation)) {
                            var byteOffset = indexBufferViewIndex != null ? this._bufferViews[indexBufferViewIndex].byteOffset : null;
                            if (byteOffset == null) {
                                byteOffset = 0;
                            }
                            var babylonIndices = null;
                            if (indexBufferViewIndex != null) {
                                babylonIndices = bufferMesh.getIndices();
                            }
                            if (babylonIndices) {
                                this._reorderIndicesBasedOnPrimitiveMode(submesh, primitiveMode, babylonIndices, byteOffset, binaryWriter);
                            }
                            else {
                                for (var _d = 0, attributeData_3 = attributeData; _d < attributeData_3.length; _d++) {
                                    var attribute = attributeData_3[_d];
                                    var vertexData = bufferMesh.getVerticesData(attribute.kind, undefined, undefined, true);
                                    if (vertexData) {
                                        var byteOffset_1 = this._bufferViews[vertexAttributeBufferViews[attribute.kind]].byteOffset || 0;
                                        this._reorderVertexAttributeDataBasedOnPrimitiveMode(submesh, primitiveMode, attribute.kind, vertexData, byteOffset_1, binaryWriter);
                                    }
                                }
                            }
                        }
                        if (materialIndex != null) {
                            meshPrimitive.material = materialIndex;
                        }
                    }
                    if (morphTargetManager) {
                        // By convention, morph target names are stored in the mesh extras.
                        if (!mesh.extras) {
                            mesh.extras = {};
                        }
                        mesh.extras.targetNames = [];
                        for (var i = 0; i < morphTargetManager.numTargets; ++i) {
                            var target = morphTargetManager.getTarget(i);
                            this._setMorphTargetAttributes(submesh, meshPrimitive, target, binaryWriter);
                            mesh.extras.targetNames.push(target.name);
                        }
                    }
                    mesh.primitives.push(meshPrimitive);
                    this._extensionsPostExportMeshPrimitiveAsync("postExport", meshPrimitive, submesh, binaryWriter);
                    promises.push();
                }
            }
        }
        return Promise.all(promises).then(function () {
            /* do nothing */
        });
    };
    /**
     * Creates a glTF scene based on the array of meshes
     * Returns the total byte offset
     * @param binaryWriter Buffer to write binary data to
     * @returns a promise that resolves when done
     */
    _Exporter.prototype._createSceneAsync = function (binaryWriter) {
        var _a;
        var _this = this;
        var _b;
        var scene = { nodes: [] };
        var glTFNodeIndex;
        var glTFNode;
        var directDescendents;
        var nodes = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_5__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_5__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_5__.__spreadArray)([], this._babylonScene.transformNodes, true), this._babylonScene.meshes, true), this._babylonScene.lights, true), this._babylonScene.cameras, true);
        var removedRootNodes = new Set();
        // Scene metadata
        if (this._babylonScene.metadata) {
            if (this._options.metadataSelector) {
                scene.extras = this._options.metadataSelector(this._babylonScene.metadata);
            }
            else if (this._babylonScene.metadata.gltf) {
                scene.extras = this._babylonScene.metadata.gltf.extras;
            }
        }
        // Remove no-op root nodes
        if (((_b = this._options.removeNoopRootNodes) !== null && _b !== void 0 ? _b : true) && !this._options.includeCoordinateSystemConversionNodes) {
            for (var _i = 0, _c = this._babylonScene.rootNodes; _i < _c.length; _i++) {
                var rootNode = _c[_i];
                if (isNoopNode(rootNode, this._babylonScene.useRightHandedSystem)) {
                    removedRootNodes.add(rootNode);
                    // Exclude the node from list of nodes to export
                    nodes.splice(nodes.indexOf(rootNode), 1);
                }
            }
        }
        // Export babylon cameras to glTFCamera
        var cameraMap = new Map();
        this._babylonScene.cameras.forEach(function (camera) {
            if (_this._options.shouldExportNode && !_this._options.shouldExportNode(camera)) {
                return;
            }
            var glTFCamera = {
                type: camera.mode === babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Camera.PERSPECTIVE_CAMERA ? "perspective" /* CameraType.PERSPECTIVE */ : "orthographic" /* CameraType.ORTHOGRAPHIC */,
            };
            if (camera.name) {
                glTFCamera.name = camera.name;
            }
            if (glTFCamera.type === "perspective" /* CameraType.PERSPECTIVE */) {
                glTFCamera.perspective = {
                    aspectRatio: camera.getEngine().getAspectRatio(camera),
                    yfov: camera.fovMode === babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Camera.FOVMODE_VERTICAL_FIXED ? camera.fov : camera.fov * camera.getEngine().getAspectRatio(camera),
                    znear: camera.minZ,
                    zfar: camera.maxZ,
                };
            }
            else if (glTFCamera.type === "orthographic" /* CameraType.ORTHOGRAPHIC */) {
                var halfWidth = camera.orthoLeft && camera.orthoRight ? 0.5 * (camera.orthoRight - camera.orthoLeft) : camera.getEngine().getRenderWidth() * 0.5;
                var halfHeight = camera.orthoBottom && camera.orthoTop ? 0.5 * (camera.orthoTop - camera.orthoBottom) : camera.getEngine().getRenderHeight() * 0.5;
                glTFCamera.orthographic = {
                    xmag: halfWidth,
                    ymag: halfHeight,
                    znear: camera.minZ,
                    zfar: camera.maxZ,
                };
            }
            cameraMap.set(camera, _this._cameras.length);
            _this._cameras.push(glTFCamera);
        });
        var exportNodes = (_a = this._getExportNodes(nodes), _a[0]), exportMaterials = _a[1];
        return this._glTFMaterialExporter._convertMaterialsToGLTFAsync(exportMaterials, "image/png" /* ImageMimeType.PNG */, true).then(function () {
            return _this._createNodeMapAndAnimationsAsync(exportNodes, binaryWriter).then(function (nodeMap) {
                return _this._createSkinsAsync(nodeMap, binaryWriter).then(function (skinMap) {
                    _this._nodeMap = nodeMap;
                    _this._totalByteLength = binaryWriter.getByteOffset();
                    if (_this._totalByteLength == undefined) {
                        throw new Error("undefined byte length!");
                    }
                    // Build Hierarchy with the node map.
                    for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
                        var babylonNode = nodes_1[_i];
                        glTFNodeIndex = _this._nodeMap[babylonNode.uniqueId];
                        if (glTFNodeIndex !== undefined) {
                            glTFNode = _this._nodes[glTFNodeIndex];
                            if (babylonNode.metadata) {
                                if (_this._options.metadataSelector) {
                                    glTFNode.extras = _this._options.metadataSelector(babylonNode.metadata);
                                }
                                else if (babylonNode.metadata.gltf) {
                                    glTFNode.extras = babylonNode.metadata.gltf.extras;
                                }
                            }
                            if (babylonNode instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Camera) {
                                glTFNode.camera = cameraMap.get(babylonNode);
                            }
                            if (_this._options.shouldExportNode && !_this._options.shouldExportNode(babylonNode)) {
                                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Log("Omitting " + babylonNode.name + " from scene.");
                            }
                            else {
                                if (!babylonNode.parent && !_this._babylonScene.useRightHandedSystem) {
                                    convertNodeHandedness(glTFNode);
                                }
                                if (!babylonNode.parent || removedRootNodes.has(babylonNode.parent)) {
                                    scene.nodes.push(glTFNodeIndex);
                                }
                            }
                            if (babylonNode instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Mesh) {
                                if (babylonNode.skeleton) {
                                    glTFNode.skin = skinMap[babylonNode.skeleton.uniqueId];
                                }
                            }
                            directDescendents = babylonNode.getDescendants(true);
                            if (!glTFNode.children && directDescendents && directDescendents.length) {
                                var children = [];
                                for (var _a = 0, directDescendents_1 = directDescendents; _a < directDescendents_1.length; _a++) {
                                    var descendent = directDescendents_1[_a];
                                    if (_this._nodeMap[descendent.uniqueId] != null) {
                                        children.push(_this._nodeMap[descendent.uniqueId]);
                                    }
                                }
                                if (children.length) {
                                    glTFNode.children = children;
                                }
                            }
                        }
                    }
                    if (scene.nodes.length) {
                        _this._scenes.push(scene);
                    }
                });
            });
        });
    };
    /**
     * Getting the nodes and materials that would be exported.
     * @param nodes Babylon transform nodes
     * @returns Set of materials which would be exported.
     */
    _Exporter.prototype._getExportNodes = function (nodes) {
        var exportNodes = [];
        var exportMaterials = new Set();
        for (var _i = 0, nodes_2 = nodes; _i < nodes_2.length; _i++) {
            var babylonNode = nodes_2[_i];
            if (!this._options.shouldExportNode || this._options.shouldExportNode(babylonNode)) {
                exportNodes.push(babylonNode);
                var babylonMesh = babylonNode;
                if (babylonMesh.subMeshes && babylonMesh.subMeshes.length > 0) {
                    var material = babylonMesh.material || babylonMesh.getScene().defaultMaterial;
                    if (material instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.MultiMaterial) {
                        for (var _a = 0, _b = material.subMaterials; _a < _b.length; _a++) {
                            var subMaterial = _b[_a];
                            if (subMaterial) {
                                exportMaterials.add(subMaterial);
                            }
                        }
                    }
                    else {
                        exportMaterials.add(material);
                    }
                }
            }
            else {
                "Excluding node ".concat(babylonNode.name);
            }
        }
        return [exportNodes, exportMaterials];
    };
    /**
     * Creates a mapping of Node unique id to node index and handles animations
     * @param nodes Babylon transform nodes
     * @param binaryWriter Buffer to write binary data to
     * @returns Node mapping of unique id to index
     */
    _Exporter.prototype._createNodeMapAndAnimationsAsync = function (nodes, binaryWriter) {
        var _this = this;
        var promiseChain = Promise.resolve();
        var nodeMap = {};
        var nodeIndex;
        var runtimeGLTFAnimation = {
            name: "runtime animations",
            channels: [],
            samplers: [],
        };
        var idleGLTFAnimations = [];
        var _loop_1 = function (babylonNode) {
            promiseChain = promiseChain.then(function () {
                return _this._createNodeAsync(babylonNode, binaryWriter).then(function (node) {
                    var promise = _this._extensionsPostExportNodeAsync("createNodeAsync", node, babylonNode, nodeMap, binaryWriter);
                    if (promise == null) {
                        babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Warn("Not exporting node ".concat(babylonNode.name));
                        return Promise.resolve();
                    }
                    else {
                        return promise.then(function (node) {
                            if (!node) {
                                return;
                            }
                            _this._nodes.push(node);
                            nodeIndex = _this._nodes.length - 1;
                            nodeMap[babylonNode.uniqueId] = nodeIndex;
                            if (!_this._babylonScene.animationGroups.length) {
                                _glTFAnimation__WEBPACK_IMPORTED_MODULE_4__._GLTFAnimation._CreateMorphTargetAnimationFromMorphTargetAnimations(babylonNode, runtimeGLTFAnimation, idleGLTFAnimations, nodeMap, _this._nodes, binaryWriter, _this._bufferViews, _this._accessors, _this._animationSampleRate, _this._options.shouldExportAnimation);
                                if (babylonNode.animations.length) {
                                    _glTFAnimation__WEBPACK_IMPORTED_MODULE_4__._GLTFAnimation._CreateNodeAnimationFromNodeAnimations(babylonNode, runtimeGLTFAnimation, idleGLTFAnimations, nodeMap, _this._nodes, binaryWriter, _this._bufferViews, _this._accessors, _this._animationSampleRate, _this._options.shouldExportAnimation);
                                }
                            }
                        });
                    }
                });
            });
        };
        for (var _i = 0, nodes_3 = nodes; _i < nodes_3.length; _i++) {
            var babylonNode = nodes_3[_i];
            _loop_1(babylonNode);
        }
        return promiseChain.then(function () {
            if (runtimeGLTFAnimation.channels.length && runtimeGLTFAnimation.samplers.length) {
                _this._animations.push(runtimeGLTFAnimation);
            }
            idleGLTFAnimations.forEach(function (idleGLTFAnimation) {
                if (idleGLTFAnimation.channels.length && idleGLTFAnimation.samplers.length) {
                    _this._animations.push(idleGLTFAnimation);
                }
            });
            if (_this._babylonScene.animationGroups.length) {
                _glTFAnimation__WEBPACK_IMPORTED_MODULE_4__._GLTFAnimation._CreateNodeAndMorphAnimationFromAnimationGroups(_this._babylonScene, _this._animations, nodeMap, binaryWriter, _this._bufferViews, _this._accessors, _this._animationSampleRate, _this._options.shouldExportAnimation);
            }
            return nodeMap;
        });
    };
    /**
     * Creates a glTF node from a Babylon mesh
     * @param babylonNode Source Babylon mesh
     * @param binaryWriter Buffer for storing geometry data
     * @returns glTF node
     */
    _Exporter.prototype._createNodeAsync = function (babylonNode, binaryWriter) {
        var _this = this;
        return Promise.resolve().then(function () {
            // create node to hold translation/rotation/scale and the mesh
            var node = {};
            // create mesh
            var mesh = { primitives: [] };
            if (babylonNode.name) {
                node.name = babylonNode.name;
            }
            if (babylonNode instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TransformNode) {
                // Set transformation
                _this._setNodeTransformation(node, babylonNode);
                if (babylonNode instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Mesh) {
                    var morphTargetManager = babylonNode.morphTargetManager;
                    if (morphTargetManager && morphTargetManager.numTargets > 0) {
                        mesh.weights = [];
                        for (var i = 0; i < morphTargetManager.numTargets; ++i) {
                            mesh.weights.push(morphTargetManager.getTarget(i).influence);
                        }
                    }
                }
                return _this._setPrimitiveAttributesAsync(mesh, babylonNode, binaryWriter).then(function () {
                    if (mesh.primitives.length) {
                        _this._meshes.push(mesh);
                        node.mesh = _this._meshes.length - 1;
                    }
                    return node;
                });
            }
            else if (babylonNode instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Camera) {
                _this._setCameraTransformation(node, babylonNode);
                return node;
            }
            else {
                return node;
            }
        });
    };
    /**
     * Creates a glTF skin from a Babylon skeleton
     * @param nodeMap Babylon transform nodes
     * @param binaryWriter Buffer to write binary data to
     * @returns Node mapping of unique id to index
     */
    _Exporter.prototype._createSkinsAsync = function (nodeMap, binaryWriter) {
        var _a;
        var promiseChain = Promise.resolve();
        var skinMap = {};
        for (var _i = 0, _b = this._babylonScene.skeletons; _i < _b.length; _i++) {
            var skeleton = _b[_i];
            if (skeleton.bones.length <= 0) {
                continue;
            }
            // create skin
            var skin = { joints: [] };
            var inverseBindMatrices = [];
            var boneIndexMap = {};
            var maxBoneIndex = -1;
            for (var i = 0; i < skeleton.bones.length; ++i) {
                var bone = skeleton.bones[i];
                var boneIndex = (_a = bone.getIndex()) !== null && _a !== void 0 ? _a : i;
                if (boneIndex !== -1) {
                    boneIndexMap[boneIndex] = bone;
                    if (boneIndex > maxBoneIndex) {
                        maxBoneIndex = boneIndex;
                    }
                }
            }
            for (var boneIndex = 0; boneIndex <= maxBoneIndex; ++boneIndex) {
                var bone = boneIndexMap[boneIndex];
                inverseBindMatrices.push(bone.getInvertedAbsoluteTransform());
                var transformNode = bone.getTransformNode();
                if (transformNode && nodeMap[transformNode.uniqueId] !== null && nodeMap[transformNode.uniqueId] !== undefined) {
                    skin.joints.push(nodeMap[transformNode.uniqueId]);
                }
                else {
                    babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Warn("Exporting a bone without a linked transform node is currently unsupported");
                }
            }
            if (skin.joints.length > 0) {
                // create buffer view for inverse bind matrices
                var byteStride = 64; // 4 x 4 matrix of 32 bit float
                var byteLength = inverseBindMatrices.length * byteStride;
                var bufferViewOffset = binaryWriter.getByteOffset();
                var bufferView = _glTFUtilities__WEBPACK_IMPORTED_MODULE_2__._GLTFUtilities._CreateBufferView(0, bufferViewOffset, byteLength, undefined, "InverseBindMatrices" + " - " + skeleton.name);
                this._bufferViews.push(bufferView);
                var bufferViewIndex = this._bufferViews.length - 1;
                var bindMatrixAccessor = _glTFUtilities__WEBPACK_IMPORTED_MODULE_2__._GLTFUtilities._CreateAccessor(bufferViewIndex, "InverseBindMatrices" + " - " + skeleton.name, "MAT4" /* AccessorType.MAT4 */, 5126 /* AccessorComponentType.FLOAT */, inverseBindMatrices.length, null, null, null);
                var inverseBindAccessorIndex = this._accessors.push(bindMatrixAccessor) - 1;
                skin.inverseBindMatrices = inverseBindAccessorIndex;
                this._skins.push(skin);
                skinMap[skeleton.uniqueId] = this._skins.length - 1;
                inverseBindMatrices.forEach(function (mat) {
                    mat.m.forEach(function (cell) {
                        binaryWriter.setFloat32(cell);
                    });
                });
            }
        }
        return promiseChain.then(function () {
            return skinMap;
        });
    };
    _Exporter._ExtensionNames = new Array();
    _Exporter._ExtensionFactories = {};
    return _Exporter;
}());
/**
 * @internal
 *
 * Stores glTF binary data.  If the array buffer byte length is exceeded, it doubles in size dynamically
 */
var _BinaryWriter = /** @class */ (function () {
    /**
     * Initialize binary writer with an initial byte length
     * @param byteLength Initial byte length of the array buffer
     */
    function _BinaryWriter(byteLength) {
        this._arrayBuffer = new ArrayBuffer(byteLength);
        this._dataView = new DataView(this._arrayBuffer);
        this._byteOffset = 0;
    }
    /**
     * Resize the array buffer to the specified byte length
     * @param byteLength The new byte length
     * @returns The resized array buffer
     */
    _BinaryWriter.prototype._resizeBuffer = function (byteLength) {
        var newBuffer = new ArrayBuffer(byteLength);
        var copyOldBufferSize = Math.min(this._arrayBuffer.byteLength, byteLength);
        var oldUint8Array = new Uint8Array(this._arrayBuffer, 0, copyOldBufferSize);
        var newUint8Array = new Uint8Array(newBuffer);
        newUint8Array.set(oldUint8Array, 0);
        this._arrayBuffer = newBuffer;
        this._dataView = new DataView(this._arrayBuffer);
        return newBuffer;
    };
    /**
     * Get an array buffer with the length of the byte offset
     * @returns ArrayBuffer resized to the byte offset
     */
    _BinaryWriter.prototype.getArrayBuffer = function () {
        return this._resizeBuffer(this.getByteOffset());
    };
    /**
     * Get the byte offset of the array buffer
     * @returns byte offset
     */
    _BinaryWriter.prototype.getByteOffset = function () {
        if (this._byteOffset == undefined) {
            throw new Error("Byte offset is undefined!");
        }
        return this._byteOffset;
    };
    /**
     * Stores an UInt8 in the array buffer
     * @param entry
     * @param byteOffset If defined, specifies where to set the value as an offset.
     */
    _BinaryWriter.prototype.setUInt8 = function (entry, byteOffset) {
        if (byteOffset != null) {
            if (byteOffset < this._byteOffset) {
                this._dataView.setUint8(byteOffset, entry);
            }
            else {
                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Error("BinaryWriter: byteoffset is greater than the current binary buffer length!");
            }
        }
        else {
            if (this._byteOffset + 1 > this._arrayBuffer.byteLength) {
                this._resizeBuffer(this._arrayBuffer.byteLength * 2);
            }
            this._dataView.setUint8(this._byteOffset, entry);
            this._byteOffset += 1;
        }
    };
    /**
     * Stores an UInt16 in the array buffer
     * @param entry
     * @param byteOffset If defined, specifies where to set the value as an offset.
     */
    _BinaryWriter.prototype.setUInt16 = function (entry, byteOffset) {
        if (byteOffset != null) {
            if (byteOffset < this._byteOffset) {
                this._dataView.setUint16(byteOffset, entry, true);
            }
            else {
                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Error("BinaryWriter: byteoffset is greater than the current binary buffer length!");
            }
        }
        else {
            if (this._byteOffset + 2 > this._arrayBuffer.byteLength) {
                this._resizeBuffer(this._arrayBuffer.byteLength * 2);
            }
            this._dataView.setUint16(this._byteOffset, entry, true);
            this._byteOffset += 2;
        }
    };
    /**
     * Gets an UInt32 in the array buffer
     * @param byteOffset If defined, specifies where to set the value as an offset.
     * @returns entry
     */
    _BinaryWriter.prototype.getUInt32 = function (byteOffset) {
        if (byteOffset < this._byteOffset) {
            return this._dataView.getUint32(byteOffset, true);
        }
        else {
            babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Error("BinaryWriter: byteoffset is greater than the current binary buffer length!");
            throw new Error("BinaryWriter: byteoffset is greater than the current binary buffer length!");
        }
    };
    _BinaryWriter.prototype.getVector3Float32FromRef = function (vector3, byteOffset) {
        if (byteOffset + 8 > this._byteOffset) {
            babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Error("BinaryWriter: byteoffset is greater than the current binary buffer length!");
        }
        else {
            vector3.x = this._dataView.getFloat32(byteOffset, true);
            vector3.y = this._dataView.getFloat32(byteOffset + 4, true);
            vector3.z = this._dataView.getFloat32(byteOffset + 8, true);
        }
    };
    _BinaryWriter.prototype.setVector3Float32FromRef = function (vector3, byteOffset) {
        if (byteOffset + 8 > this._byteOffset) {
            babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Error("BinaryWriter: byteoffset is greater than the current binary buffer length!");
        }
        else {
            this._dataView.setFloat32(byteOffset, vector3.x, true);
            this._dataView.setFloat32(byteOffset + 4, vector3.y, true);
            this._dataView.setFloat32(byteOffset + 8, vector3.z, true);
        }
    };
    _BinaryWriter.prototype.getVector4Float32FromRef = function (vector4, byteOffset) {
        if (byteOffset + 12 > this._byteOffset) {
            babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Error("BinaryWriter: byteoffset is greater than the current binary buffer length!");
        }
        else {
            vector4.x = this._dataView.getFloat32(byteOffset, true);
            vector4.y = this._dataView.getFloat32(byteOffset + 4, true);
            vector4.z = this._dataView.getFloat32(byteOffset + 8, true);
            vector4.w = this._dataView.getFloat32(byteOffset + 12, true);
        }
    };
    _BinaryWriter.prototype.setVector4Float32FromRef = function (vector4, byteOffset) {
        if (byteOffset + 12 > this._byteOffset) {
            babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Error("BinaryWriter: byteoffset is greater than the current binary buffer length!");
        }
        else {
            this._dataView.setFloat32(byteOffset, vector4.x, true);
            this._dataView.setFloat32(byteOffset + 4, vector4.y, true);
            this._dataView.setFloat32(byteOffset + 8, vector4.z, true);
            this._dataView.setFloat32(byteOffset + 12, vector4.w, true);
        }
    };
    /**
     * Stores a Float32 in the array buffer
     * @param entry
     * @param byteOffset
     */
    _BinaryWriter.prototype.setFloat32 = function (entry, byteOffset) {
        if (isNaN(entry)) {
            babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Error("Invalid data being written!");
        }
        if (byteOffset != null) {
            if (byteOffset < this._byteOffset) {
                this._dataView.setFloat32(byteOffset, entry, true);
            }
            else {
                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Error("BinaryWriter: byteoffset is greater than the current binary length!");
            }
        }
        if (this._byteOffset + 4 > this._arrayBuffer.byteLength) {
            this._resizeBuffer(this._arrayBuffer.byteLength * 2);
        }
        this._dataView.setFloat32(this._byteOffset, entry, true);
        this._byteOffset += 4;
    };
    /**
     * Stores an UInt32 in the array buffer
     * @param entry
     * @param byteOffset If defined, specifies where to set the value as an offset.
     */
    _BinaryWriter.prototype.setUInt32 = function (entry, byteOffset) {
        if (byteOffset != null) {
            if (byteOffset < this._byteOffset) {
                this._dataView.setUint32(byteOffset, entry, true);
            }
            else {
                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Error("BinaryWriter: byteoffset is greater than the current binary buffer length!");
            }
        }
        else {
            if (this._byteOffset + 4 > this._arrayBuffer.byteLength) {
                this._resizeBuffer(this._arrayBuffer.byteLength * 2);
            }
            this._dataView.setUint32(this._byteOffset, entry, true);
            this._byteOffset += 4;
        }
    };
    /**
     * Stores an Int16 in the array buffer
     * @param entry
     * @param byteOffset If defined, specifies where to set the value as an offset.
     */
    _BinaryWriter.prototype.setInt16 = function (entry, byteOffset) {
        if (byteOffset != null) {
            if (byteOffset < this._byteOffset) {
                this._dataView.setInt16(byteOffset, entry, true);
            }
            else {
                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Error("BinaryWriter: byteoffset is greater than the current binary buffer length!");
            }
        }
        else {
            if (this._byteOffset + 2 > this._arrayBuffer.byteLength) {
                this._resizeBuffer(this._arrayBuffer.byteLength * 2);
            }
            this._dataView.setInt16(this._byteOffset, entry, true);
            this._byteOffset += 2;
        }
    };
    /**
     * Stores a byte in the array buffer
     * @param entry
     * @param byteOffset If defined, specifies where to set the value as an offset.
     */
    _BinaryWriter.prototype.setByte = function (entry, byteOffset) {
        if (byteOffset != null) {
            if (byteOffset < this._byteOffset) {
                this._dataView.setInt8(byteOffset, entry);
            }
            else {
                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Error("BinaryWriter: byteoffset is greater than the current binary buffer length!");
            }
        }
        else {
            if (this._byteOffset + 1 > this._arrayBuffer.byteLength) {
                this._resizeBuffer(this._arrayBuffer.byteLength * 2);
            }
            this._dataView.setInt8(this._byteOffset, entry);
            this._byteOffset++;
        }
    };
    return _BinaryWriter;
}());



/***/ }),

/***/ "../../../dev/serializers/src/glTF/2.0/glTFExporterExtension.ts":
/*!**********************************************************************!*\
  !*** ../../../dev/serializers/src/glTF/2.0/glTFExporterExtension.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __IGLTFExporterExtensionV2: () => (/* binding */ __IGLTFExporterExtensionV2)
/* harmony export */ });
/** @internal */
// eslint-disable-next-line no-var, @typescript-eslint/naming-convention
var __IGLTFExporterExtensionV2 = 0; // I am here to allow dts to be created


/***/ }),

/***/ "../../../dev/serializers/src/glTF/2.0/glTFMaterialExporter.ts":
/*!*********************************************************************!*\
  !*** ../../../dev/serializers/src/glTF/2.0/glTFMaterialExporter.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _GLTFMaterialExporter: () => (/* binding */ _GLTFMaterialExporter)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Misc/dumpTools */ "babylonjs/Maths/math.vector");
/* harmony import */ var babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__);










function getFileExtensionFromMimeType(mimeType) {
    switch (mimeType) {
        case "image/jpeg" /* ImageMimeType.JPEG */:
            return ".jpg";
        case "image/png" /* ImageMimeType.PNG */:
            return ".png";
        case "image/webp" /* ImageMimeType.WEBP */:
            return ".webp";
        case "image/avif" /* ImageMimeType.AVIF */:
            return ".avif";
    }
}
/**
 * Utility methods for working with glTF material conversion properties.  This class should only be used internally
 * @internal
 */
var _GLTFMaterialExporter = /** @class */ (function () {
    function _GLTFMaterialExporter(exporter) {
        /**
         * Mapping to store textures
         */
        this._textureMap = {};
        // Mapping of internal textures to images to avoid exporting duplicate images.
        this._internalTextureToImage = {};
        this._textureMap = {};
        this._exporter = exporter;
    }
    /**
     * Specifies if two colors are approximately equal in value
     * @param color1 first color to compare to
     * @param color2 second color to compare to
     * @param epsilon threshold value
     * @returns boolean specifying if the colors are approximately equal in value
     */
    _GLTFMaterialExporter._FuzzyEquals = function (color1, color2, epsilon) {
        return babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Scalar.WithinEpsilon(color1.r, color2.r, epsilon) && babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Scalar.WithinEpsilon(color1.g, color2.g, epsilon) && babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Scalar.WithinEpsilon(color1.b, color2.b, epsilon);
    };
    /**
     * Gets the materials from a Babylon scene and converts them to glTF materials
     * @param exportMaterials
     * @param mimeType texture mime type
     * @param hasTextureCoords specifies if texture coordinates are present on the material
     * @returns promise that resolves after all materials have been converted
     */
    _GLTFMaterialExporter.prototype._convertMaterialsToGLTFAsync = function (exportMaterials, mimeType, hasTextureCoords) {
        var _this = this;
        var promises = [];
        exportMaterials.forEach(function (material) {
            if (material.getClassName() === "StandardMaterial") {
                promises.push(_this._convertStandardMaterialAsync(material, mimeType, hasTextureCoords));
            }
            else if (material.getClassName().indexOf("PBR") !== -1) {
                promises.push(_this._convertPBRMaterialAsync(material, mimeType, hasTextureCoords));
            }
            else {
                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Warn("Unsupported material type: ".concat(material.name));
            }
        });
        return Promise.all(promises).then(function () {
            /* do nothing */
        });
    };
    /**
     * Makes a copy of the glTF material without the texture parameters
     * @param originalMaterial original glTF material
     * @returns glTF material without texture parameters
     */
    _GLTFMaterialExporter.prototype._stripTexturesFromMaterial = function (originalMaterial) {
        var newMaterial = {};
        if (originalMaterial) {
            newMaterial.name = originalMaterial.name;
            newMaterial.doubleSided = originalMaterial.doubleSided;
            newMaterial.alphaMode = originalMaterial.alphaMode;
            newMaterial.alphaCutoff = originalMaterial.alphaCutoff;
            newMaterial.emissiveFactor = originalMaterial.emissiveFactor;
            var originalPBRMetallicRoughness = originalMaterial.pbrMetallicRoughness;
            if (originalPBRMetallicRoughness) {
                newMaterial.pbrMetallicRoughness = {};
                newMaterial.pbrMetallicRoughness.baseColorFactor = originalPBRMetallicRoughness.baseColorFactor;
                newMaterial.pbrMetallicRoughness.metallicFactor = originalPBRMetallicRoughness.metallicFactor;
                newMaterial.pbrMetallicRoughness.roughnessFactor = originalPBRMetallicRoughness.roughnessFactor;
            }
        }
        return newMaterial;
    };
    /**
     * Specifies if the material has any texture parameters present
     * @param material glTF Material
     * @returns boolean specifying if texture parameters are present
     */
    _GLTFMaterialExporter.prototype._hasTexturesPresent = function (material) {
        var _a;
        if (material.emissiveTexture || material.normalTexture || material.occlusionTexture) {
            return true;
        }
        var pbrMat = material.pbrMetallicRoughness;
        if (pbrMat) {
            if (pbrMat.baseColorTexture || pbrMat.metallicRoughnessTexture) {
                return true;
            }
        }
        if (material.extensions) {
            for (var extension in material.extensions) {
                var extensionObject = material.extensions[extension];
                if (extensionObject) {
                    return (_a = extensionObject.hasTextures) === null || _a === void 0 ? void 0 : _a.call(extensionObject);
                }
            }
        }
        return false;
    };
    _GLTFMaterialExporter.prototype._getTextureInfo = function (babylonTexture) {
        if (babylonTexture) {
            var textureUid = babylonTexture.uid;
            if (textureUid in this._textureMap) {
                return this._textureMap[textureUid];
            }
        }
        return null;
    };
    /**
     * Converts a Babylon StandardMaterial to a glTF Metallic Roughness Material
     * @param babylonStandardMaterial
     * @returns glTF Metallic Roughness Material representation
     */
    _GLTFMaterialExporter.prototype._convertToGLTFPBRMetallicRoughness = function (babylonStandardMaterial) {
        // Defines a cubic bezier curve where x is specular power and y is roughness
        var P0 = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector2(0, 1);
        var P1 = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector2(0, 0.1);
        var P2 = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector2(0, 0.1);
        var P3 = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector2(1300, 0.1);
        /**
         * Given the control points, solve for x based on a given t for a cubic bezier curve
         * @param t a value between 0 and 1
         * @param p0 first control point
         * @param p1 second control point
         * @param p2 third control point
         * @param p3 fourth control point
         * @returns number result of cubic bezier curve at the specified t
         */
        function cubicBezierCurve(t, p0, p1, p2, p3) {
            return (1 - t) * (1 - t) * (1 - t) * p0 + 3 * (1 - t) * (1 - t) * t * p1 + 3 * (1 - t) * t * t * p2 + t * t * t * p3;
        }
        /**
         * Evaluates a specified specular power value to determine the appropriate roughness value,
         * based on a pre-defined cubic bezier curve with specular on the abscissa axis (x-axis)
         * and roughness on the ordinant axis (y-axis)
         * @param specularPower specular power of standard material
         * @returns Number representing the roughness value
         */
        function solveForRoughness(specularPower) {
            // Given P0.x = 0, P1.x = 0, P2.x = 0
            //   x = t * t * t * P3.x
            //   t = (x / P3.x)^(1/3)
            var t = Math.pow(specularPower / P3.x, 0.333333);
            return cubicBezierCurve(t, P0.y, P1.y, P2.y, P3.y);
        }
        var diffuse = babylonStandardMaterial.diffuseColor.toLinearSpace(babylonStandardMaterial.getScene().getEngine().useExactSrgbConversions).scale(0.5);
        var opacity = babylonStandardMaterial.alpha;
        var specularPower = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Scalar.Clamp(babylonStandardMaterial.specularPower, 0, _GLTFMaterialExporter._MaxSpecularPower);
        var roughness = solveForRoughness(specularPower);
        var glTFPbrMetallicRoughness = {
            baseColorFactor: [diffuse.r, diffuse.g, diffuse.b, opacity],
            metallicFactor: 0,
            roughnessFactor: roughness,
        };
        return glTFPbrMetallicRoughness;
    };
    /**
     * Computes the metallic factor
     * @param diffuse diffused value
     * @param specular specular value
     * @param oneMinusSpecularStrength one minus the specular strength
     * @returns metallic value
     */
    _GLTFMaterialExporter._SolveMetallic = function (diffuse, specular, oneMinusSpecularStrength) {
        if (specular < this._DielectricSpecular.r) {
            this._DielectricSpecular;
            return 0;
        }
        var a = this._DielectricSpecular.r;
        var b = (diffuse * oneMinusSpecularStrength) / (1.0 - this._DielectricSpecular.r) + specular - 2.0 * this._DielectricSpecular.r;
        var c = this._DielectricSpecular.r - specular;
        var D = b * b - 4.0 * a * c;
        return babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Scalar.Clamp((-b + Math.sqrt(D)) / (2.0 * a), 0, 1);
    };
    /**
     * Sets the glTF alpha mode to a glTF material from the Babylon Material
     * @param glTFMaterial glTF material
     * @param babylonMaterial Babylon material
     */
    _GLTFMaterialExporter._SetAlphaMode = function (glTFMaterial, babylonMaterial) {
        if (babylonMaterial.needAlphaBlending()) {
            glTFMaterial.alphaMode = "BLEND" /* MaterialAlphaMode.BLEND */;
        }
        else if (babylonMaterial.needAlphaTesting()) {
            glTFMaterial.alphaMode = "MASK" /* MaterialAlphaMode.MASK */;
            glTFMaterial.alphaCutoff = babylonMaterial.alphaCutOff;
        }
    };
    /**
     * Converts a Babylon Standard Material to a glTF Material
     * @param babylonStandardMaterial BJS Standard Material
     * @param mimeType mime type to use for the textures
     * @param hasTextureCoords specifies if texture coordinates are present on the submesh to determine if textures should be applied
     * @returns promise, resolved with the material
     */
    _GLTFMaterialExporter.prototype._convertStandardMaterialAsync = function (babylonStandardMaterial, mimeType, hasTextureCoords) {
        var materialMap = this._exporter._materialMap;
        var materials = this._exporter._materials;
        var promises = [];
        var pbrMetallicRoughness = this._convertToGLTFPBRMetallicRoughness(babylonStandardMaterial);
        var material = { name: babylonStandardMaterial.name };
        if (babylonStandardMaterial.backFaceCulling != null && !babylonStandardMaterial.backFaceCulling) {
            if (!babylonStandardMaterial.twoSidedLighting) {
                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Warn(babylonStandardMaterial.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF.");
            }
            material.doubleSided = true;
        }
        if (hasTextureCoords) {
            if (babylonStandardMaterial.diffuseTexture) {
                promises.push(this._exportTextureAsync(babylonStandardMaterial.diffuseTexture, mimeType).then(function (textureInfo) {
                    if (textureInfo) {
                        pbrMetallicRoughness.baseColorTexture = textureInfo;
                    }
                }));
            }
            var bumpTexture_1 = babylonStandardMaterial.bumpTexture;
            if (bumpTexture_1) {
                promises.push(this._exportTextureAsync(bumpTexture_1, mimeType).then(function (textureInfo) {
                    if (textureInfo) {
                        material.normalTexture = textureInfo;
                        if (bumpTexture_1.level !== 1) {
                            material.normalTexture.scale = bumpTexture_1.level;
                        }
                    }
                }));
            }
            if (babylonStandardMaterial.emissiveTexture) {
                material.emissiveFactor = [1.0, 1.0, 1.0];
                promises.push(this._exportTextureAsync(babylonStandardMaterial.emissiveTexture, mimeType).then(function (textureInfo) {
                    if (textureInfo) {
                        material.emissiveTexture = textureInfo;
                    }
                }));
            }
            if (babylonStandardMaterial.ambientTexture) {
                promises.push(this._exportTextureAsync(babylonStandardMaterial.ambientTexture, mimeType).then(function (textureInfo) {
                    if (textureInfo) {
                        var occlusionTexture = {
                            index: textureInfo.index,
                        };
                        material.occlusionTexture = occlusionTexture;
                    }
                }));
            }
        }
        if (babylonStandardMaterial.alpha < 1.0 || babylonStandardMaterial.opacityTexture) {
            if (babylonStandardMaterial.alphaMode === babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Constants.ALPHA_COMBINE) {
                material.alphaMode = "BLEND" /* MaterialAlphaMode.BLEND */;
            }
            else {
                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Warn(babylonStandardMaterial.name + ": glTF 2.0 does not support alpha mode: " + babylonStandardMaterial.alphaMode.toString());
            }
        }
        if (babylonStandardMaterial.emissiveColor && !_GLTFMaterialExporter._FuzzyEquals(babylonStandardMaterial.emissiveColor, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Color3.Black(), _GLTFMaterialExporter._Epsilon)) {
            material.emissiveFactor = babylonStandardMaterial.emissiveColor.asArray();
        }
        material.pbrMetallicRoughness = pbrMetallicRoughness;
        _GLTFMaterialExporter._SetAlphaMode(material, babylonStandardMaterial);
        materials.push(material);
        materialMap[babylonStandardMaterial.uniqueId] = materials.length - 1;
        return this._finishMaterial(promises, material, babylonStandardMaterial, mimeType);
    };
    _GLTFMaterialExporter.prototype._finishMaterial = function (promises, glTFMaterial, babylonMaterial, mimeType) {
        var _this = this;
        return Promise.all(promises).then(function () {
            var textures = _this._exporter._extensionsPostExportMaterialAdditionalTextures("exportMaterial", glTFMaterial, babylonMaterial);
            var tasks = null;
            for (var _i = 0, textures_1 = textures; _i < textures_1.length; _i++) {
                var texture = textures_1[_i];
                if (!tasks) {
                    tasks = [];
                }
                tasks.push(_this._exportTextureAsync(texture, mimeType));
            }
            if (!tasks) {
                tasks = [Promise.resolve(null)];
            }
            return Promise.all(tasks).then(function () {
                var extensionWork = _this._exporter._extensionsPostExportMaterialAsync("exportMaterial", glTFMaterial, babylonMaterial);
                if (!extensionWork) {
                    return glTFMaterial;
                }
                return extensionWork.then(function () { return glTFMaterial; });
            });
        });
    };
    /**
     * Converts an image typed array buffer to a base64 image
     * @param buffer typed array buffer
     * @param width width of the image
     * @param height height of the image
     * @param mimeType mimetype of the image
     * @returns base64 image string
     */
    _GLTFMaterialExporter.prototype._getImageDataAsync = function (buffer, width, height, mimeType) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function () {
            var textureType, hostingScene, engine, tempTexture, data;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        textureType = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Constants.TEXTURETYPE_UNSIGNED_INT;
                        hostingScene = this._exporter._babylonScene;
                        engine = hostingScene.getEngine();
                        tempTexture = engine.createRawTexture(buffer, width, height, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Constants.TEXTUREFORMAT_RGBA, false, true, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Texture.NEAREST_SAMPLINGMODE, null, textureType);
                        return [4 /*yield*/, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TextureTools.ApplyPostProcess("pass", tempTexture, hostingScene, textureType, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Constants.TEXTURE_NEAREST_SAMPLINGMODE, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Constants.TEXTUREFORMAT_RGBA)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, engine._readTexturePixels(tempTexture, width, height)];
                    case 2:
                        data = _a.sent();
                        return [4 /*yield*/, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.DumpTools.DumpDataAsync(width, height, data, mimeType, undefined, true, true)];
                    case 3: return [2 /*return*/, (_a.sent())];
                }
            });
        });
    };
    /**
     * Generates a white texture based on the specified width and height
     * @param width width of the texture in pixels
     * @param height height of the texture in pixels
     * @param scene babylonjs scene
     * @returns white texture
     */
    _GLTFMaterialExporter.prototype._createWhiteTexture = function (width, height, scene) {
        var data = new Uint8Array(width * height * 4);
        for (var i = 0; i < data.length; i = i + 4) {
            data[i] = data[i + 1] = data[i + 2] = data[i + 3] = 0xff;
        }
        var rawTexture = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.RawTexture.CreateRGBATexture(data, width, height, scene);
        return rawTexture;
    };
    /**
     * Resizes the two source textures to the same dimensions.  If a texture is null, a default white texture is generated.  If both textures are null, returns null
     * @param texture1 first texture to resize
     * @param texture2 second texture to resize
     * @param scene babylonjs scene
     * @returns resized textures or null
     */
    _GLTFMaterialExporter.prototype._resizeTexturesToSameDimensions = function (texture1, texture2, scene) {
        var texture1Size = texture1 ? texture1.getSize() : { width: 0, height: 0 };
        var texture2Size = texture2 ? texture2.getSize() : { width: 0, height: 0 };
        var resizedTexture1;
        var resizedTexture2;
        if (texture1Size.width < texture2Size.width) {
            if (texture1 && texture1 instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Texture) {
                resizedTexture1 = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TextureTools.CreateResizedCopy(texture1, texture2Size.width, texture2Size.height, true);
            }
            else {
                resizedTexture1 = this._createWhiteTexture(texture2Size.width, texture2Size.height, scene);
            }
            resizedTexture2 = texture2;
        }
        else if (texture1Size.width > texture2Size.width) {
            if (texture2 && texture2 instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Texture) {
                resizedTexture2 = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TextureTools.CreateResizedCopy(texture2, texture1Size.width, texture1Size.height, true);
            }
            else {
                resizedTexture2 = this._createWhiteTexture(texture1Size.width, texture1Size.height, scene);
            }
            resizedTexture1 = texture1;
        }
        else {
            resizedTexture1 = texture1;
            resizedTexture2 = texture2;
        }
        return {
            texture1: resizedTexture1,
            texture2: resizedTexture2,
        };
    };
    /**
     * Converts an array of pixels to a Float32Array
     * Throws an error if the pixel format is not supported
     * @param pixels - array buffer containing pixel values
     * @returns Float32 of pixels
     */
    _GLTFMaterialExporter.prototype._convertPixelArrayToFloat32 = function (pixels) {
        if (pixels instanceof Uint8Array) {
            var length_1 = pixels.length;
            var buffer = new Float32Array(pixels.length);
            for (var i = 0; i < length_1; ++i) {
                buffer[i] = pixels[i] / 255;
            }
            return buffer;
        }
        else if (pixels instanceof Float32Array) {
            return pixels;
        }
        else {
            throw new Error("Unsupported pixel format!");
        }
    };
    /**
     * Convert Specular Glossiness Textures to Metallic Roughness
     * See link below for info on the material conversions from PBR Metallic/Roughness and Specular/Glossiness
     * @link https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Archived/KHR_materials_pbrSpecularGlossiness/examples/convert-between-workflows-bjs/js/babylon.pbrUtilities.js
     * @param diffuseTexture texture used to store diffuse information
     * @param specularGlossinessTexture texture used to store specular and glossiness information
     * @param factors specular glossiness material factors
     * @param mimeType the mime type to use for the texture
     * @returns pbr metallic roughness interface or null
     */
    _GLTFMaterialExporter.prototype._convertSpecularGlossinessTexturesToMetallicRoughnessAsync = function (diffuseTexture, specularGlossinessTexture, factors, mimeType) {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function () {
            var promises, scene, resizedTextures, diffuseSize, diffuseBuffer, specularGlossinessBuffer, width, height, diffusePixels, specularPixels, byteLength, metallicRoughnessBuffer, baseColorBuffer, strideSize, maxBaseColor, maxMetallic, maxRoughness, h, w, offset, diffuseColor, specularColor, glossiness, specularGlossiness, metallicRoughness, metallicRoughnessFactors_1, writeOutMetallicRoughnessTexture, writeOutBaseColorTexture, h, w, destinationOffset, linearBaseColorPixel, sRGBBaseColorPixel, metallicRoughnessPixel;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        promises = new Array();
                        if (!(diffuseTexture || specularGlossinessTexture)) {
                            return [2 /*return*/, Promise.reject("_ConvertSpecularGlosinessTexturesToMetallicRoughness: diffuse and specular glossiness textures are not defined!")];
                        }
                        scene = diffuseTexture ? diffuseTexture.getScene() : specularGlossinessTexture ? specularGlossinessTexture.getScene() : null;
                        if (!scene) return [3 /*break*/, 3];
                        resizedTextures = this._resizeTexturesToSameDimensions(diffuseTexture, specularGlossinessTexture, scene);
                        diffuseSize = (_a = resizedTextures.texture1) === null || _a === void 0 ? void 0 : _a.getSize();
                        diffuseBuffer = void 0;
                        specularGlossinessBuffer = void 0;
                        width = diffuseSize.width;
                        height = diffuseSize.height;
                        return [4 /*yield*/, resizedTextures.texture1.readPixels()];
                    case 1:
                        diffusePixels = _b.sent();
                        return [4 /*yield*/, resizedTextures.texture2.readPixels()];
                    case 2:
                        specularPixels = _b.sent();
                        if (diffusePixels) {
                            diffuseBuffer = this._convertPixelArrayToFloat32(diffusePixels);
                        }
                        else {
                            return [2 /*return*/, Promise.reject("Failed to retrieve pixels from diffuse texture!")];
                        }
                        if (specularPixels) {
                            specularGlossinessBuffer = this._convertPixelArrayToFloat32(specularPixels);
                        }
                        else {
                            return [2 /*return*/, Promise.reject("Failed to retrieve pixels from specular glossiness texture!")];
                        }
                        byteLength = specularGlossinessBuffer.byteLength;
                        metallicRoughnessBuffer = new Uint8Array(byteLength);
                        baseColorBuffer = new Uint8Array(byteLength);
                        strideSize = 4;
                        maxBaseColor = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Color3.Black();
                        maxMetallic = 0;
                        maxRoughness = 0;
                        for (h = 0; h < height; ++h) {
                            for (w = 0; w < width; ++w) {
                                offset = (width * h + w) * strideSize;
                                diffuseColor = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Color3(diffuseBuffer[offset], diffuseBuffer[offset + 1], diffuseBuffer[offset + 2])
                                    .toLinearSpace(scene.getEngine().useExactSrgbConversions)
                                    .multiply(factors.diffuseColor);
                                specularColor = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Color3(specularGlossinessBuffer[offset], specularGlossinessBuffer[offset + 1], specularGlossinessBuffer[offset + 2])
                                    .toLinearSpace(scene.getEngine().useExactSrgbConversions)
                                    .multiply(factors.specularColor);
                                glossiness = specularGlossinessBuffer[offset + 3] * factors.glossiness;
                                specularGlossiness = {
                                    diffuseColor: diffuseColor,
                                    specularColor: specularColor,
                                    glossiness: glossiness,
                                };
                                metallicRoughness = this._convertSpecularGlossinessToMetallicRoughness(specularGlossiness);
                                maxBaseColor.r = Math.max(maxBaseColor.r, metallicRoughness.baseColor.r);
                                maxBaseColor.g = Math.max(maxBaseColor.g, metallicRoughness.baseColor.g);
                                maxBaseColor.b = Math.max(maxBaseColor.b, metallicRoughness.baseColor.b);
                                maxMetallic = Math.max(maxMetallic, metallicRoughness.metallic);
                                maxRoughness = Math.max(maxRoughness, metallicRoughness.roughness);
                                baseColorBuffer[offset] = metallicRoughness.baseColor.r * 255;
                                baseColorBuffer[offset + 1] = metallicRoughness.baseColor.g * 255;
                                baseColorBuffer[offset + 2] = metallicRoughness.baseColor.b * 255;
                                baseColorBuffer[offset + 3] = resizedTextures.texture1.hasAlpha ? diffuseBuffer[offset + 3] * 255 : 255;
                                metallicRoughnessBuffer[offset] = 0;
                                metallicRoughnessBuffer[offset + 1] = metallicRoughness.roughness * 255;
                                metallicRoughnessBuffer[offset + 2] = metallicRoughness.metallic * 255;
                                metallicRoughnessBuffer[offset + 3] = 255;
                            }
                        }
                        metallicRoughnessFactors_1 = {
                            baseColor: maxBaseColor,
                            metallic: maxMetallic,
                            roughness: maxRoughness,
                        };
                        writeOutMetallicRoughnessTexture = false;
                        writeOutBaseColorTexture = false;
                        for (h = 0; h < height; ++h) {
                            for (w = 0; w < width; ++w) {
                                destinationOffset = (width * h + w) * strideSize;
                                baseColorBuffer[destinationOffset] /= metallicRoughnessFactors_1.baseColor.r > _GLTFMaterialExporter._Epsilon ? metallicRoughnessFactors_1.baseColor.r : 1;
                                baseColorBuffer[destinationOffset + 1] /= metallicRoughnessFactors_1.baseColor.g > _GLTFMaterialExporter._Epsilon ? metallicRoughnessFactors_1.baseColor.g : 1;
                                baseColorBuffer[destinationOffset + 2] /= metallicRoughnessFactors_1.baseColor.b > _GLTFMaterialExporter._Epsilon ? metallicRoughnessFactors_1.baseColor.b : 1;
                                linearBaseColorPixel = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Color3.FromInts(baseColorBuffer[destinationOffset], baseColorBuffer[destinationOffset + 1], baseColorBuffer[destinationOffset + 2]);
                                sRGBBaseColorPixel = linearBaseColorPixel.toGammaSpace(scene.getEngine().useExactSrgbConversions);
                                baseColorBuffer[destinationOffset] = sRGBBaseColorPixel.r * 255;
                                baseColorBuffer[destinationOffset + 1] = sRGBBaseColorPixel.g * 255;
                                baseColorBuffer[destinationOffset + 2] = sRGBBaseColorPixel.b * 255;
                                if (!_GLTFMaterialExporter._FuzzyEquals(sRGBBaseColorPixel, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Color3.White(), _GLTFMaterialExporter._Epsilon)) {
                                    writeOutBaseColorTexture = true;
                                }
                                metallicRoughnessBuffer[destinationOffset + 1] /=
                                    metallicRoughnessFactors_1.roughness > _GLTFMaterialExporter._Epsilon ? metallicRoughnessFactors_1.roughness : 1;
                                metallicRoughnessBuffer[destinationOffset + 2] /= metallicRoughnessFactors_1.metallic > _GLTFMaterialExporter._Epsilon ? metallicRoughnessFactors_1.metallic : 1;
                                metallicRoughnessPixel = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Color3.FromInts(255, metallicRoughnessBuffer[destinationOffset + 1], metallicRoughnessBuffer[destinationOffset + 2]);
                                if (!_GLTFMaterialExporter._FuzzyEquals(metallicRoughnessPixel, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Color3.White(), _GLTFMaterialExporter._Epsilon)) {
                                    writeOutMetallicRoughnessTexture = true;
                                }
                            }
                        }
                        if (writeOutMetallicRoughnessTexture) {
                            promises.push(this._getImageDataAsync(metallicRoughnessBuffer, width, height, mimeType).then(function (data) {
                                metallicRoughnessFactors_1.metallicRoughnessTextureData = data;
                            }));
                        }
                        if (writeOutBaseColorTexture) {
                            promises.push(this._getImageDataAsync(baseColorBuffer, width, height, mimeType).then(function (data) {
                                metallicRoughnessFactors_1.baseColorTextureData = data;
                            }));
                        }
                        return [2 /*return*/, Promise.all(promises).then(function () {
                                return metallicRoughnessFactors_1;
                            })];
                    case 3: return [2 /*return*/, Promise.reject("_ConvertSpecularGlossinessTexturesToMetallicRoughness: Scene from textures is missing!")];
                }
            });
        });
    };
    /**
     * Converts specular glossiness material properties to metallic roughness
     * @param specularGlossiness interface with specular glossiness material properties
     * @returns interface with metallic roughness material properties
     */
    _GLTFMaterialExporter.prototype._convertSpecularGlossinessToMetallicRoughness = function (specularGlossiness) {
        var diffusePerceivedBrightness = this._getPerceivedBrightness(specularGlossiness.diffuseColor);
        var specularPerceivedBrightness = this._getPerceivedBrightness(specularGlossiness.specularColor);
        var oneMinusSpecularStrength = 1 - this._getMaxComponent(specularGlossiness.specularColor);
        var metallic = _GLTFMaterialExporter._SolveMetallic(diffusePerceivedBrightness, specularPerceivedBrightness, oneMinusSpecularStrength);
        var baseColorFromDiffuse = specularGlossiness.diffuseColor.scale(oneMinusSpecularStrength / (1.0 - _GLTFMaterialExporter._DielectricSpecular.r) / Math.max(1 - metallic, _GLTFMaterialExporter._Epsilon));
        var baseColorFromSpecular = specularGlossiness.specularColor
            .subtract(_GLTFMaterialExporter._DielectricSpecular.scale(1 - metallic))
            .scale(1 / Math.max(metallic, _GLTFMaterialExporter._Epsilon));
        var baseColor = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Color3.Lerp(baseColorFromDiffuse, baseColorFromSpecular, metallic * metallic);
        baseColor = baseColor.clampToRef(0, 1, baseColor);
        var metallicRoughness = {
            baseColor: baseColor,
            metallic: metallic,
            roughness: 1 - specularGlossiness.glossiness,
        };
        return metallicRoughness;
    };
    /**
     * Calculates the surface reflectance, independent of lighting conditions
     * @param color Color source to calculate brightness from
     * @returns number representing the perceived brightness, or zero if color is undefined
     */
    _GLTFMaterialExporter.prototype._getPerceivedBrightness = function (color) {
        if (color) {
            return Math.sqrt(0.299 * color.r * color.r + 0.587 * color.g * color.g + 0.114 * color.b * color.b);
        }
        return 0;
    };
    /**
     * Returns the maximum color component value
     * @param color
     * @returns maximum color component value, or zero if color is null or undefined
     */
    _GLTFMaterialExporter.prototype._getMaxComponent = function (color) {
        if (color) {
            return Math.max(color.r, Math.max(color.g, color.b));
        }
        return 0;
    };
    /**
     * Convert a PBRMaterial (Metallic/Roughness) to Metallic Roughness factors
     * @param babylonPBRMaterial BJS PBR Metallic Roughness Material
     * @param mimeType mime type to use for the textures
     * @param glTFPbrMetallicRoughness glTF PBR Metallic Roughness interface
     * @param hasTextureCoords specifies if texture coordinates are present on the submesh to determine if textures should be applied
     * @returns glTF PBR Metallic Roughness factors
     */
    _GLTFMaterialExporter.prototype._convertMetalRoughFactorsToMetallicRoughnessAsync = function (babylonPBRMaterial, mimeType, glTFPbrMetallicRoughness, hasTextureCoords) {
        var promises = [];
        var baseColor = babylonPBRMaterial._albedoColor;
        var metallic = babylonPBRMaterial._metallic;
        var roughness = babylonPBRMaterial._roughness;
        var metallicRoughness = {
            baseColor: baseColor,
            metallic: metallic,
            roughness: roughness,
        };
        if (hasTextureCoords) {
            var albedoTexture = babylonPBRMaterial._albedoTexture;
            if (albedoTexture) {
                promises.push(this._exportTextureAsync(babylonPBRMaterial._albedoTexture, mimeType).then(function (glTFTexture) {
                    if (glTFTexture) {
                        glTFPbrMetallicRoughness.baseColorTexture = glTFTexture;
                    }
                }));
            }
            var metallicTexture = babylonPBRMaterial._metallicTexture;
            if (metallicTexture) {
                promises.push(this._exportTextureAsync(metallicTexture, mimeType).then(function (glTFTexture) {
                    if (glTFTexture) {
                        glTFPbrMetallicRoughness.metallicRoughnessTexture = glTFTexture;
                    }
                }));
            }
        }
        return Promise.all(promises).then(function () {
            return metallicRoughness;
        });
    };
    _GLTFMaterialExporter.prototype._getTextureSampler = function (texture) {
        var sampler = {};
        if (!texture || !(texture instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Texture)) {
            return sampler;
        }
        var wrapS = this._getGLTFTextureWrapMode(texture.wrapU);
        if (wrapS !== 10497 /* TextureWrapMode.REPEAT */) {
            sampler.wrapS = wrapS;
        }
        var wrapT = this._getGLTFTextureWrapMode(texture.wrapV);
        if (wrapT !== 10497 /* TextureWrapMode.REPEAT */) {
            sampler.wrapT = wrapT;
        }
        switch (texture.samplingMode) {
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Texture.LINEAR_LINEAR: {
                sampler.magFilter = 9729 /* TextureMagFilter.LINEAR */;
                sampler.minFilter = 9729 /* TextureMinFilter.LINEAR */;
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Texture.LINEAR_NEAREST: {
                sampler.magFilter = 9729 /* TextureMagFilter.LINEAR */;
                sampler.minFilter = 9728 /* TextureMinFilter.NEAREST */;
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Texture.NEAREST_LINEAR: {
                sampler.magFilter = 9728 /* TextureMagFilter.NEAREST */;
                sampler.minFilter = 9729 /* TextureMinFilter.LINEAR */;
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Texture.NEAREST_LINEAR_MIPLINEAR: {
                sampler.magFilter = 9728 /* TextureMagFilter.NEAREST */;
                sampler.minFilter = 9987 /* TextureMinFilter.LINEAR_MIPMAP_LINEAR */;
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Texture.NEAREST_NEAREST: {
                sampler.magFilter = 9728 /* TextureMagFilter.NEAREST */;
                sampler.minFilter = 9728 /* TextureMinFilter.NEAREST */;
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Texture.NEAREST_LINEAR_MIPNEAREST: {
                sampler.magFilter = 9728 /* TextureMagFilter.NEAREST */;
                sampler.minFilter = 9985 /* TextureMinFilter.LINEAR_MIPMAP_NEAREST */;
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Texture.LINEAR_NEAREST_MIPNEAREST: {
                sampler.magFilter = 9729 /* TextureMagFilter.LINEAR */;
                sampler.minFilter = 9984 /* TextureMinFilter.NEAREST_MIPMAP_NEAREST */;
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Texture.LINEAR_NEAREST_MIPLINEAR: {
                sampler.magFilter = 9729 /* TextureMagFilter.LINEAR */;
                sampler.minFilter = 9986 /* TextureMinFilter.NEAREST_MIPMAP_LINEAR */;
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Texture.NEAREST_NEAREST_MIPLINEAR: {
                sampler.magFilter = 9728 /* TextureMagFilter.NEAREST */;
                sampler.minFilter = 9986 /* TextureMinFilter.NEAREST_MIPMAP_LINEAR */;
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Texture.LINEAR_LINEAR_MIPLINEAR: {
                sampler.magFilter = 9729 /* TextureMagFilter.LINEAR */;
                sampler.minFilter = 9987 /* TextureMinFilter.LINEAR_MIPMAP_LINEAR */;
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Texture.LINEAR_LINEAR_MIPNEAREST: {
                sampler.magFilter = 9729 /* TextureMagFilter.LINEAR */;
                sampler.minFilter = 9985 /* TextureMinFilter.LINEAR_MIPMAP_NEAREST */;
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Texture.NEAREST_NEAREST_MIPNEAREST: {
                sampler.magFilter = 9728 /* TextureMagFilter.NEAREST */;
                sampler.minFilter = 9984 /* TextureMinFilter.NEAREST_MIPMAP_NEAREST */;
                break;
            }
        }
        return sampler;
    };
    _GLTFMaterialExporter.prototype._getGLTFTextureWrapMode = function (wrapMode) {
        switch (wrapMode) {
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Texture.WRAP_ADDRESSMODE: {
                return 10497 /* TextureWrapMode.REPEAT */;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Texture.CLAMP_ADDRESSMODE: {
                return 33071 /* TextureWrapMode.CLAMP_TO_EDGE */;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Texture.MIRROR_ADDRESSMODE: {
                return 33648 /* TextureWrapMode.MIRRORED_REPEAT */;
            }
            default: {
                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Error("Unsupported Texture Wrap Mode ".concat(wrapMode, "!"));
                return 10497 /* TextureWrapMode.REPEAT */;
            }
        }
    };
    /**
     * Convert a PBRMaterial (Specular/Glossiness) to Metallic Roughness factors
     * @param babylonPBRMaterial BJS PBR Metallic Roughness Material
     * @param mimeType mime type to use for the textures
     * @param pbrMetallicRoughness glTF PBR Metallic Roughness interface
     * @param hasTextureCoords specifies if texture coordinates are present on the submesh to determine if textures should be applied
     * @returns glTF PBR Metallic Roughness factors
     */
    _GLTFMaterialExporter.prototype._convertSpecGlossFactorsToMetallicRoughnessAsync = function (babylonPBRMaterial, mimeType, pbrMetallicRoughness, hasTextureCoords) {
        var _this = this;
        return Promise.resolve().then(function () {
            var specGloss = {
                diffuseColor: babylonPBRMaterial._albedoColor,
                specularColor: babylonPBRMaterial._reflectivityColor,
                glossiness: babylonPBRMaterial._microSurface,
            };
            var albedoTexture = babylonPBRMaterial._albedoTexture;
            var reflectivityTexture = babylonPBRMaterial._reflectivityTexture;
            var useMicrosurfaceFromReflectivityMapAlpha = babylonPBRMaterial._useMicroSurfaceFromReflectivityMapAlpha;
            if (reflectivityTexture && !useMicrosurfaceFromReflectivityMapAlpha) {
                return Promise.reject("_ConvertPBRMaterial: Glossiness values not included in the reflectivity texture are currently not supported");
            }
            if ((albedoTexture || reflectivityTexture) && hasTextureCoords) {
                var samplerIndex_1 = _this._exportTextureSampler(albedoTexture || reflectivityTexture);
                return _this._convertSpecularGlossinessTexturesToMetallicRoughnessAsync(albedoTexture, reflectivityTexture, specGloss, mimeType).then(function (metallicRoughnessFactors) {
                    var textures = _this._exporter._textures;
                    if (metallicRoughnessFactors.baseColorTextureData) {
                        var imageIndex = _this._exportImage("baseColor".concat(textures.length), mimeType, metallicRoughnessFactors.baseColorTextureData);
                        pbrMetallicRoughness.baseColorTexture = _this._exportTextureInfo(imageIndex, samplerIndex_1, albedoTexture === null || albedoTexture === void 0 ? void 0 : albedoTexture.coordinatesIndex);
                    }
                    if (metallicRoughnessFactors.metallicRoughnessTextureData) {
                        var imageIndex = _this._exportImage("metallicRoughness".concat(textures.length), mimeType, metallicRoughnessFactors.metallicRoughnessTextureData);
                        pbrMetallicRoughness.metallicRoughnessTexture = _this._exportTextureInfo(imageIndex, samplerIndex_1, reflectivityTexture === null || reflectivityTexture === void 0 ? void 0 : reflectivityTexture.coordinatesIndex);
                    }
                    return metallicRoughnessFactors;
                });
            }
            else {
                return _this._convertSpecularGlossinessToMetallicRoughness(specGloss);
            }
        });
    };
    /**
     * Converts a Babylon PBR Base Material to a glTF Material
     * @param babylonPBRMaterial BJS PBR Base Material
     * @param mimeType mime type to use for the textures
     * @param hasTextureCoords specifies if texture coordinates are present on the submesh to determine if textures should be applied
     * @returns async glTF Material representation
     */
    _GLTFMaterialExporter.prototype._convertPBRMaterialAsync = function (babylonPBRMaterial, mimeType, hasTextureCoords) {
        var _this = this;
        var glTFPbrMetallicRoughness = {};
        var glTFMaterial = {
            name: babylonPBRMaterial.name,
        };
        var useMetallicRoughness = babylonPBRMaterial.isMetallicWorkflow();
        if (useMetallicRoughness) {
            var albedoColor = babylonPBRMaterial._albedoColor;
            var alpha = babylonPBRMaterial.alpha;
            if (albedoColor) {
                glTFPbrMetallicRoughness.baseColorFactor = [albedoColor.r, albedoColor.g, albedoColor.b, alpha];
            }
            return this._convertMetalRoughFactorsToMetallicRoughnessAsync(babylonPBRMaterial, mimeType, glTFPbrMetallicRoughness, hasTextureCoords).then(function (metallicRoughness) {
                return _this._setMetallicRoughnessPbrMaterial(metallicRoughness, babylonPBRMaterial, glTFMaterial, glTFPbrMetallicRoughness, mimeType, hasTextureCoords);
            });
        }
        else {
            return this._convertSpecGlossFactorsToMetallicRoughnessAsync(babylonPBRMaterial, mimeType, glTFPbrMetallicRoughness, hasTextureCoords).then(function (metallicRoughness) {
                return _this._setMetallicRoughnessPbrMaterial(metallicRoughness, babylonPBRMaterial, glTFMaterial, glTFPbrMetallicRoughness, mimeType, hasTextureCoords);
            });
        }
    };
    _GLTFMaterialExporter.prototype._setMetallicRoughnessPbrMaterial = function (metallicRoughness, babylonPBRMaterial, glTFMaterial, glTFPbrMetallicRoughness, mimeType, hasTextureCoords) {
        var materialMap = this._exporter._materialMap;
        var materials = this._exporter._materials;
        var promises = [];
        if (metallicRoughness) {
            _GLTFMaterialExporter._SetAlphaMode(glTFMaterial, babylonPBRMaterial);
            if (!(_GLTFMaterialExporter._FuzzyEquals(metallicRoughness.baseColor, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Color3.White(), _GLTFMaterialExporter._Epsilon) &&
                babylonPBRMaterial.alpha >= _GLTFMaterialExporter._Epsilon)) {
                glTFPbrMetallicRoughness.baseColorFactor = [metallicRoughness.baseColor.r, metallicRoughness.baseColor.g, metallicRoughness.baseColor.b, babylonPBRMaterial.alpha];
            }
            if (metallicRoughness.metallic != null && metallicRoughness.metallic !== 1) {
                glTFPbrMetallicRoughness.metallicFactor = metallicRoughness.metallic;
            }
            if (metallicRoughness.roughness != null && metallicRoughness.roughness !== 1) {
                glTFPbrMetallicRoughness.roughnessFactor = metallicRoughness.roughness;
            }
            if (babylonPBRMaterial.backFaceCulling != null && !babylonPBRMaterial.backFaceCulling) {
                if (!babylonPBRMaterial._twoSidedLighting) {
                    babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Warn(babylonPBRMaterial.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF.");
                }
                glTFMaterial.doubleSided = true;
            }
            if (hasTextureCoords) {
                var bumpTexture_2 = babylonPBRMaterial._bumpTexture;
                if (bumpTexture_2) {
                    var promise = this._exportTextureAsync(bumpTexture_2, mimeType).then(function (glTFTexture) {
                        if (glTFTexture) {
                            glTFMaterial.normalTexture = glTFTexture;
                            if (bumpTexture_2.level !== 1) {
                                glTFMaterial.normalTexture.scale = bumpTexture_2.level;
                            }
                        }
                    });
                    promises.push(promise);
                }
                var ambientTexture = babylonPBRMaterial._ambientTexture;
                if (ambientTexture) {
                    var promise = this._exportTextureAsync(ambientTexture, mimeType).then(function (glTFTexture) {
                        if (glTFTexture) {
                            var occlusionTexture = {
                                index: glTFTexture.index,
                                texCoord: glTFTexture.texCoord,
                                extensions: glTFTexture.extensions,
                            };
                            glTFMaterial.occlusionTexture = occlusionTexture;
                            var ambientTextureStrength = babylonPBRMaterial._ambientTextureStrength;
                            if (ambientTextureStrength) {
                                occlusionTexture.strength = ambientTextureStrength;
                            }
                        }
                    });
                    promises.push(promise);
                }
                var emissiveTexture = babylonPBRMaterial._emissiveTexture;
                if (emissiveTexture) {
                    var promise = this._exportTextureAsync(emissiveTexture, mimeType).then(function (glTFTexture) {
                        if (glTFTexture) {
                            glTFMaterial.emissiveTexture = glTFTexture;
                        }
                    });
                    promises.push(promise);
                }
            }
            var emissiveColor = babylonPBRMaterial._emissiveColor;
            if (!_GLTFMaterialExporter._FuzzyEquals(emissiveColor, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Color3.Black(), _GLTFMaterialExporter._Epsilon)) {
                glTFMaterial.emissiveFactor = emissiveColor.asArray();
            }
            glTFMaterial.pbrMetallicRoughness = glTFPbrMetallicRoughness;
            materials.push(glTFMaterial);
            materialMap[babylonPBRMaterial.uniqueId] = materials.length - 1;
        }
        return this._finishMaterial(promises, glTFMaterial, babylonPBRMaterial, mimeType);
    };
    _GLTFMaterialExporter.prototype._getPixelsFromTexture = function (babylonTexture) {
        var pixels = babylonTexture.textureType === babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Constants.TEXTURETYPE_UNSIGNED_INT
            ? babylonTexture.readPixels()
            : babylonTexture.readPixels();
        return pixels;
    };
    /**
     * Extracts a texture from a Babylon texture into file data and glTF data
     * @param babylonTexture Babylon texture to extract
     * @param mimeType Mime Type of the babylonTexture
     * @returns glTF texture info, or null if the texture format is not supported
     */
    _GLTFMaterialExporter.prototype._exportTextureAsync = function (babylonTexture, mimeType) {
        var _this = this;
        var extensionPromise = this._exporter._extensionsPreExportTextureAsync("exporter", babylonTexture, mimeType);
        if (!extensionPromise) {
            return this._exportTextureInfoAsync(babylonTexture, mimeType);
        }
        return extensionPromise.then(function (texture) {
            if (!texture) {
                return _this._exportTextureInfoAsync(babylonTexture, mimeType);
            }
            return _this._exportTextureInfoAsync(texture, mimeType);
        });
    };
    _GLTFMaterialExporter.prototype._exportTextureInfoAsync = function (babylonTexture, mimeType) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function () {
            var textureUid, pixels_1, samplerIndex, textureMimeType, internalTextureToImage, internalTextureUniqueId, imageIndexPromise, size_1, textureInfo, _a;
            var _this = this;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        textureUid = babylonTexture.uid;
                        if (!!(textureUid in this._textureMap)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this._getPixelsFromTexture(babylonTexture)];
                    case 1:
                        pixels_1 = _b.sent();
                        if (!pixels_1) {
                            return [2 /*return*/, null];
                        }
                        samplerIndex = this._exportTextureSampler(babylonTexture);
                        textureMimeType = babylonTexture.mimeType;
                        if (textureMimeType) {
                            switch (textureMimeType) {
                                case "image/jpeg":
                                case "image/png":
                                case "image/webp":
                                    mimeType = textureMimeType;
                                    break;
                                default:
                                    babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Warn("Unsupported media type: ".concat(textureMimeType));
                                    break;
                            }
                        }
                        internalTextureToImage = this._internalTextureToImage;
                        internalTextureUniqueId = babylonTexture.getInternalTexture().uniqueId;
                        internalTextureToImage[internalTextureUniqueId] || (internalTextureToImage[internalTextureUniqueId] = {});
                        imageIndexPromise = internalTextureToImage[internalTextureUniqueId][mimeType];
                        if (imageIndexPromise === undefined) {
                            size_1 = babylonTexture.getSize();
                            imageIndexPromise = (function () { return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(_this, void 0, void 0, function () {
                                var data;
                                return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__generator)(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this._getImageDataAsync(pixels_1, size_1.width, size_1.height, mimeType)];
                                        case 1:
                                            data = _a.sent();
                                            return [2 /*return*/, this._exportImage(babylonTexture.name, mimeType, data)];
                                    }
                                });
                            }); })();
                            internalTextureToImage[internalTextureUniqueId][mimeType] = imageIndexPromise;
                        }
                        _a = this._exportTextureInfo;
                        return [4 /*yield*/, imageIndexPromise];
                    case 2:
                        textureInfo = _a.apply(this, [_b.sent(), samplerIndex, babylonTexture.coordinatesIndex]);
                        this._textureMap[textureUid] = textureInfo;
                        this._exporter._extensionsPostExportTextures("exporter", this._textureMap[textureUid], babylonTexture);
                        _b.label = 3;
                    case 3: return [2 /*return*/, this._textureMap[textureUid]];
                }
            });
        });
    };
    _GLTFMaterialExporter.prototype._exportImage = function (name, mimeType, data) {
        var imageData = this._exporter._imageData;
        var baseName = name.replace(/\.\/|\/|\.\\|\\/g, "_");
        var extension = getFileExtensionFromMimeType(mimeType);
        var fileName = baseName + extension;
        if (fileName in imageData) {
            fileName = "".concat(baseName, "_").concat(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.RandomId()).concat(extension);
        }
        imageData[fileName] = {
            data: data,
            mimeType: mimeType,
        };
        var images = this._exporter._images;
        images.push({
            name: name,
            uri: fileName,
        });
        return images.length - 1;
    };
    _GLTFMaterialExporter.prototype._exportTextureInfo = function (imageIndex, samplerIndex, coordinatesIndex) {
        var textures = this._exporter._textures;
        var textureIndex = textures.findIndex(function (t) { return t.sampler == samplerIndex && t.source === imageIndex; });
        if (textureIndex === -1) {
            textureIndex = textures.length;
            textures.push({
                source: imageIndex,
                sampler: samplerIndex,
            });
        }
        var textureInfo = { index: textureIndex };
        if (coordinatesIndex) {
            textureInfo.texCoord = coordinatesIndex;
        }
        return textureInfo;
    };
    _GLTFMaterialExporter.prototype._exportTextureSampler = function (texture) {
        var sampler = this._getTextureSampler(texture);
        // if a pre-existing sampler with identical parameters exists, then reuse the previous sampler
        var samplers = this._exporter._samplers;
        var samplerIndex = samplers.findIndex(function (s) { return s.minFilter === sampler.minFilter && s.magFilter === sampler.magFilter && s.wrapS === sampler.wrapS && s.wrapT === sampler.wrapT; });
        if (samplerIndex !== -1) {
            return samplerIndex;
        }
        samplers.push(sampler);
        return samplers.length - 1;
    };
    /**
     * Represents the dielectric specular values for R, G and B
     */
    _GLTFMaterialExporter._DielectricSpecular = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Color3(0.04, 0.04, 0.04);
    /**
     * Allows the maximum specular power to be defined for material calculations
     */
    _GLTFMaterialExporter._MaxSpecularPower = 1024;
    /**
     * Numeric tolerance value
     */
    _GLTFMaterialExporter._Epsilon = 1e-6;
    return _GLTFMaterialExporter;
}());


/***/ }),

/***/ "../../../dev/serializers/src/glTF/2.0/glTFSerializer.ts":
/*!***************************************************************!*\
  !*** ../../../dev/serializers/src/glTF/2.0/glTFSerializer.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GLTF2Export: () => (/* binding */ GLTF2Export)
/* harmony export */ });
/* harmony import */ var _glTFExporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glTFExporter */ "../../../dev/serializers/src/glTF/2.0/glTFExporter.ts");

/**
 * Class for generating glTF data from a Babylon scene.
 */
var GLTF2Export = /** @class */ (function () {
    function GLTF2Export() {
    }
    /**
     * Exports the geometry of the scene to .gltf file format asynchronously
     * @param scene Babylon scene with scene hierarchy information
     * @param filePrefix File prefix to use when generating the glTF file
     * @param options Exporter options
     * @returns Returns an object with a .gltf file and associates texture names
     * as keys and their data and paths as values
     */
    GLTF2Export.GLTFAsync = function (scene, filePrefix, options) {
        return scene.whenReadyAsync().then(function () {
            var glTFPrefix = filePrefix.replace(/\.[^/.]+$/, "");
            var gltfGenerator = new _glTFExporter__WEBPACK_IMPORTED_MODULE_0__._Exporter(scene, options);
            return gltfGenerator._generateGLTFAsync(glTFPrefix);
        });
    };
    GLTF2Export._PreExportAsync = function (scene, options) {
        return Promise.resolve().then(function () {
            if (options && options.exportWithoutWaitingForScene) {
                return Promise.resolve();
            }
            else {
                return scene.whenReadyAsync();
            }
        });
    };
    GLTF2Export._PostExportAsync = function (scene, glTFData, options) {
        return Promise.resolve().then(function () {
            if (options && options.exportWithoutWaitingForScene) {
                return glTFData;
            }
            else {
                return glTFData;
            }
        });
    };
    /**
     * Exports the geometry of the scene to .glb file format asychronously
     * @param scene Babylon scene with scene hierarchy information
     * @param filePrefix File prefix to use when generating glb file
     * @param options Exporter options
     * @returns Returns an object with a .glb filename as key and data as value
     */
    GLTF2Export.GLBAsync = function (scene, filePrefix, options) {
        var _this = this;
        return this._PreExportAsync(scene, options).then(function () {
            var glTFPrefix = filePrefix.replace(/\.[^/.]+$/, "");
            var gltfGenerator = new _glTFExporter__WEBPACK_IMPORTED_MODULE_0__._Exporter(scene, options);
            return gltfGenerator._generateGLBAsync(glTFPrefix).then(function (glTFData) {
                return _this._PostExportAsync(scene, glTFData, options);
            });
        });
    };
    return GLTF2Export;
}());



/***/ }),

/***/ "../../../dev/serializers/src/glTF/2.0/glTFUtilities.ts":
/*!**************************************************************!*\
  !*** ../../../dev/serializers/src/glTF/2.0/glTFUtilities.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _GLTFUtilities: () => (/* binding */ _GLTFUtilities)
/* harmony export */ });
/* harmony import */ var babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Maths/math.vector */ "babylonjs/Maths/math.vector");
/* harmony import */ var babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @internal
 */
var _GLTFUtilities = /** @class */ (function () {
    function _GLTFUtilities() {
    }
    /**
     * Creates a buffer view based on the supplied arguments
     * @param bufferIndex index value of the specified buffer
     * @param byteOffset byte offset value
     * @param byteLength byte length of the bufferView
     * @param byteStride byte distance between conequential elements
     * @param name name of the buffer view
     * @returns bufferView for glTF
     */
    _GLTFUtilities._CreateBufferView = function (bufferIndex, byteOffset, byteLength, byteStride, name) {
        var bufferview = { buffer: bufferIndex, byteLength: byteLength };
        if (byteOffset) {
            bufferview.byteOffset = byteOffset;
        }
        if (name) {
            bufferview.name = name;
        }
        if (byteStride) {
            bufferview.byteStride = byteStride;
        }
        return bufferview;
    };
    /**
     * Creates an accessor based on the supplied arguments
     * @param bufferviewIndex The index of the bufferview referenced by this accessor
     * @param name The name of the accessor
     * @param type The type of the accessor
     * @param componentType The datatype of components in the attribute
     * @param count The number of attributes referenced by this accessor
     * @param byteOffset The offset relative to the start of the bufferView in bytes
     * @param min Minimum value of each component in this attribute
     * @param max Maximum value of each component in this attribute
     * @returns accessor for glTF
     */
    _GLTFUtilities._CreateAccessor = function (bufferviewIndex, name, type, componentType, count, byteOffset, min, max) {
        var accessor = { name: name, bufferView: bufferviewIndex, componentType: componentType, count: count, type: type };
        if (min != null) {
            accessor.min = min;
        }
        if (max != null) {
            accessor.max = max;
        }
        if (byteOffset != null) {
            accessor.byteOffset = byteOffset;
        }
        return accessor;
    };
    /**
     * Calculates the minimum and maximum values of an array of position floats
     * @param positions Positions array of a mesh
     * @param vertexStart Starting vertex offset to calculate min and max values
     * @param vertexCount Number of vertices to check for min and max values
     * @returns min number array and max number array
     */
    _GLTFUtilities._CalculateMinMaxPositions = function (positions, vertexStart, vertexCount) {
        var min = [Infinity, Infinity, Infinity];
        var max = [-Infinity, -Infinity, -Infinity];
        var positionStrideSize = 3;
        var indexOffset;
        var position;
        var vector;
        if (vertexCount) {
            for (var i = vertexStart, length_1 = vertexStart + vertexCount; i < length_1; ++i) {
                indexOffset = positionStrideSize * i;
                position = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArray(positions, indexOffset);
                vector = position.asArray();
                for (var j = 0; j < positionStrideSize; ++j) {
                    var num = vector[j];
                    if (num < min[j]) {
                        min[j] = num;
                    }
                    if (num > max[j]) {
                        max[j] = num;
                    }
                    ++indexOffset;
                }
            }
        }
        return { min: min, max: max };
    };
    _GLTFUtilities._NormalizeTangentFromRef = function (tangent) {
        var length = Math.sqrt(tangent.x * tangent.x + tangent.y * tangent.y + tangent.z * tangent.z);
        if (length > 0) {
            tangent.x /= length;
            tangent.y /= length;
            tangent.z /= length;
        }
    };
    _GLTFUtilities._GetDataAccessorElementCount = function (accessorType) {
        switch (accessorType) {
            case "MAT2" /* AccessorType.MAT2 */:
                return 4;
            case "MAT3" /* AccessorType.MAT3 */:
                return 9;
            case "MAT4" /* AccessorType.MAT4 */:
                return 16;
            case "SCALAR" /* AccessorType.SCALAR */:
                return 1;
            case "VEC2" /* AccessorType.VEC2 */:
                return 2;
            case "VEC3" /* AccessorType.VEC3 */:
                return 3;
            case "VEC4" /* AccessorType.VEC4 */:
                return 4;
        }
    };
    return _GLTFUtilities;
}());



/***/ }),

/***/ "../../../dev/serializers/src/glTF/2.0/index.ts":
/*!******************************************************!*\
  !*** ../../../dev/serializers/src/glTF/2.0/index.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EXT_mesh_gpu_instancing: () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_7__.EXT_mesh_gpu_instancing),
/* harmony export */   GLTF2Export: () => (/* reexport safe */ _glTFSerializer__WEBPACK_IMPORTED_MODULE_5__.GLTF2Export),
/* harmony export */   GLTFData: () => (/* reexport safe */ _glTFData__WEBPACK_IMPORTED_MODULE_1__.GLTFData),
/* harmony export */   KHR_lights_punctual: () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_7__.KHR_lights_punctual),
/* harmony export */   KHR_materials_anisotropy: () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_7__.KHR_materials_anisotropy),
/* harmony export */   KHR_materials_clearcoat: () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_7__.KHR_materials_clearcoat),
/* harmony export */   KHR_materials_diffuse_transmission: () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_7__.KHR_materials_diffuse_transmission),
/* harmony export */   KHR_materials_dispersion: () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_7__.KHR_materials_dispersion),
/* harmony export */   KHR_materials_emissive_strength: () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_7__.KHR_materials_emissive_strength),
/* harmony export */   KHR_materials_ior: () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_7__.KHR_materials_ior),
/* harmony export */   KHR_materials_iridescence: () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_7__.KHR_materials_iridescence),
/* harmony export */   KHR_materials_sheen: () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_7__.KHR_materials_sheen),
/* harmony export */   KHR_materials_specular: () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_7__.KHR_materials_specular),
/* harmony export */   KHR_materials_transmission: () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_7__.KHR_materials_transmission),
/* harmony export */   KHR_materials_unlit: () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_7__.KHR_materials_unlit),
/* harmony export */   KHR_materials_volume: () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_7__.KHR_materials_volume),
/* harmony export */   KHR_texture_transform: () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_7__.KHR_texture_transform),
/* harmony export */   _BinaryWriter: () => (/* reexport safe */ _glTFExporter__WEBPACK_IMPORTED_MODULE_2__._BinaryWriter),
/* harmony export */   _Exporter: () => (/* reexport safe */ _glTFExporter__WEBPACK_IMPORTED_MODULE_2__._Exporter),
/* harmony export */   _GLTFAnimation: () => (/* reexport safe */ _glTFAnimation__WEBPACK_IMPORTED_MODULE_0__._GLTFAnimation),
/* harmony export */   _GLTFMaterialExporter: () => (/* reexport safe */ _glTFMaterialExporter__WEBPACK_IMPORTED_MODULE_4__._GLTFMaterialExporter),
/* harmony export */   _GLTFUtilities: () => (/* reexport safe */ _glTFUtilities__WEBPACK_IMPORTED_MODULE_6__._GLTFUtilities),
/* harmony export */   __IGLTFExporterExtensionV2: () => (/* reexport safe */ _glTFExporterExtension__WEBPACK_IMPORTED_MODULE_3__.__IGLTFExporterExtensionV2)
/* harmony export */ });
/* harmony import */ var _glTFAnimation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glTFAnimation */ "../../../dev/serializers/src/glTF/2.0/glTFAnimation.ts");
/* harmony import */ var _glTFData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./glTFData */ "../../../dev/serializers/src/glTF/2.0/glTFData.ts");
/* harmony import */ var _glTFExporter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./glTFExporter */ "../../../dev/serializers/src/glTF/2.0/glTFExporter.ts");
/* harmony import */ var _glTFExporterExtension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./glTFExporterExtension */ "../../../dev/serializers/src/glTF/2.0/glTFExporterExtension.ts");
/* harmony import */ var _glTFMaterialExporter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./glTFMaterialExporter */ "../../../dev/serializers/src/glTF/2.0/glTFMaterialExporter.ts");
/* harmony import */ var _glTFSerializer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./glTFSerializer */ "../../../dev/serializers/src/glTF/2.0/glTFSerializer.ts");
/* harmony import */ var _glTFUtilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./glTFUtilities */ "../../../dev/serializers/src/glTF/2.0/glTFUtilities.ts");
/* harmony import */ var _Extensions_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Extensions/index */ "../../../dev/serializers/src/glTF/2.0/Extensions/index.ts");
/* eslint-disable import/no-internal-modules */










/***/ }),

/***/ "../../../dev/serializers/src/glTF/glTFFileExporter.ts":
/*!*************************************************************!*\
  !*** ../../../dev/serializers/src/glTF/glTFFileExporter.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __IGLTFExporterExtension: () => (/* binding */ __IGLTFExporterExtension)
/* harmony export */ });
/** @internal */
// eslint-disable-next-line no-var, @typescript-eslint/naming-convention
var __IGLTFExporterExtension = 0; // I am here to allow dts to be created


/***/ }),

/***/ "../../../dev/serializers/src/glTF/index.ts":
/*!**************************************************!*\
  !*** ../../../dev/serializers/src/glTF/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EXT_mesh_gpu_instancing: () => (/* reexport safe */ _2_0_index__WEBPACK_IMPORTED_MODULE_1__.EXT_mesh_gpu_instancing),
/* harmony export */   GLTF2Export: () => (/* reexport safe */ _2_0_index__WEBPACK_IMPORTED_MODULE_1__.GLTF2Export),
/* harmony export */   GLTFData: () => (/* reexport safe */ _2_0_index__WEBPACK_IMPORTED_MODULE_1__.GLTFData),
/* harmony export */   KHR_lights_punctual: () => (/* reexport safe */ _2_0_index__WEBPACK_IMPORTED_MODULE_1__.KHR_lights_punctual),
/* harmony export */   KHR_materials_anisotropy: () => (/* reexport safe */ _2_0_index__WEBPACK_IMPORTED_MODULE_1__.KHR_materials_anisotropy),
/* harmony export */   KHR_materials_clearcoat: () => (/* reexport safe */ _2_0_index__WEBPACK_IMPORTED_MODULE_1__.KHR_materials_clearcoat),
/* harmony export */   KHR_materials_diffuse_transmission: () => (/* reexport safe */ _2_0_index__WEBPACK_IMPORTED_MODULE_1__.KHR_materials_diffuse_transmission),
/* harmony export */   KHR_materials_dispersion: () => (/* reexport safe */ _2_0_index__WEBPACK_IMPORTED_MODULE_1__.KHR_materials_dispersion),
/* harmony export */   KHR_materials_emissive_strength: () => (/* reexport safe */ _2_0_index__WEBPACK_IMPORTED_MODULE_1__.KHR_materials_emissive_strength),
/* harmony export */   KHR_materials_ior: () => (/* reexport safe */ _2_0_index__WEBPACK_IMPORTED_MODULE_1__.KHR_materials_ior),
/* harmony export */   KHR_materials_iridescence: () => (/* reexport safe */ _2_0_index__WEBPACK_IMPORTED_MODULE_1__.KHR_materials_iridescence),
/* harmony export */   KHR_materials_sheen: () => (/* reexport safe */ _2_0_index__WEBPACK_IMPORTED_MODULE_1__.KHR_materials_sheen),
/* harmony export */   KHR_materials_specular: () => (/* reexport safe */ _2_0_index__WEBPACK_IMPORTED_MODULE_1__.KHR_materials_specular),
/* harmony export */   KHR_materials_transmission: () => (/* reexport safe */ _2_0_index__WEBPACK_IMPORTED_MODULE_1__.KHR_materials_transmission),
/* harmony export */   KHR_materials_unlit: () => (/* reexport safe */ _2_0_index__WEBPACK_IMPORTED_MODULE_1__.KHR_materials_unlit),
/* harmony export */   KHR_materials_volume: () => (/* reexport safe */ _2_0_index__WEBPACK_IMPORTED_MODULE_1__.KHR_materials_volume),
/* harmony export */   KHR_texture_transform: () => (/* reexport safe */ _2_0_index__WEBPACK_IMPORTED_MODULE_1__.KHR_texture_transform),
/* harmony export */   _BinaryWriter: () => (/* reexport safe */ _2_0_index__WEBPACK_IMPORTED_MODULE_1__._BinaryWriter),
/* harmony export */   _Exporter: () => (/* reexport safe */ _2_0_index__WEBPACK_IMPORTED_MODULE_1__._Exporter),
/* harmony export */   _GLTFAnimation: () => (/* reexport safe */ _2_0_index__WEBPACK_IMPORTED_MODULE_1__._GLTFAnimation),
/* harmony export */   _GLTFMaterialExporter: () => (/* reexport safe */ _2_0_index__WEBPACK_IMPORTED_MODULE_1__._GLTFMaterialExporter),
/* harmony export */   _GLTFUtilities: () => (/* reexport safe */ _2_0_index__WEBPACK_IMPORTED_MODULE_1__._GLTFUtilities),
/* harmony export */   __IGLTFExporterExtension: () => (/* reexport safe */ _glTFFileExporter__WEBPACK_IMPORTED_MODULE_0__.__IGLTFExporterExtension),
/* harmony export */   __IGLTFExporterExtensionV2: () => (/* reexport safe */ _2_0_index__WEBPACK_IMPORTED_MODULE_1__.__IGLTFExporterExtensionV2)
/* harmony export */ });
/* harmony import */ var _glTFFileExporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glTFFileExporter */ "../../../dev/serializers/src/glTF/glTFFileExporter.ts");
/* harmony import */ var _2_0_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./2.0/index */ "../../../dev/serializers/src/glTF/2.0/index.ts");
/* eslint-disable import/no-internal-modules */




/***/ }),

/***/ "../../../dev/serializers/src/index.ts":
/*!*********************************************!*\
  !*** ../../../dev/serializers/src/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EXT_mesh_gpu_instancing: () => (/* reexport safe */ _glTF_index__WEBPACK_IMPORTED_MODULE_1__.EXT_mesh_gpu_instancing),
/* harmony export */   GLTF2Export: () => (/* reexport safe */ _glTF_index__WEBPACK_IMPORTED_MODULE_1__.GLTF2Export),
/* harmony export */   GLTFData: () => (/* reexport safe */ _glTF_index__WEBPACK_IMPORTED_MODULE_1__.GLTFData),
/* harmony export */   KHR_lights_punctual: () => (/* reexport safe */ _glTF_index__WEBPACK_IMPORTED_MODULE_1__.KHR_lights_punctual),
/* harmony export */   KHR_materials_anisotropy: () => (/* reexport safe */ _glTF_index__WEBPACK_IMPORTED_MODULE_1__.KHR_materials_anisotropy),
/* harmony export */   KHR_materials_clearcoat: () => (/* reexport safe */ _glTF_index__WEBPACK_IMPORTED_MODULE_1__.KHR_materials_clearcoat),
/* harmony export */   KHR_materials_diffuse_transmission: () => (/* reexport safe */ _glTF_index__WEBPACK_IMPORTED_MODULE_1__.KHR_materials_diffuse_transmission),
/* harmony export */   KHR_materials_dispersion: () => (/* reexport safe */ _glTF_index__WEBPACK_IMPORTED_MODULE_1__.KHR_materials_dispersion),
/* harmony export */   KHR_materials_emissive_strength: () => (/* reexport safe */ _glTF_index__WEBPACK_IMPORTED_MODULE_1__.KHR_materials_emissive_strength),
/* harmony export */   KHR_materials_ior: () => (/* reexport safe */ _glTF_index__WEBPACK_IMPORTED_MODULE_1__.KHR_materials_ior),
/* harmony export */   KHR_materials_iridescence: () => (/* reexport safe */ _glTF_index__WEBPACK_IMPORTED_MODULE_1__.KHR_materials_iridescence),
/* harmony export */   KHR_materials_sheen: () => (/* reexport safe */ _glTF_index__WEBPACK_IMPORTED_MODULE_1__.KHR_materials_sheen),
/* harmony export */   KHR_materials_specular: () => (/* reexport safe */ _glTF_index__WEBPACK_IMPORTED_MODULE_1__.KHR_materials_specular),
/* harmony export */   KHR_materials_transmission: () => (/* reexport safe */ _glTF_index__WEBPACK_IMPORTED_MODULE_1__.KHR_materials_transmission),
/* harmony export */   KHR_materials_unlit: () => (/* reexport safe */ _glTF_index__WEBPACK_IMPORTED_MODULE_1__.KHR_materials_unlit),
/* harmony export */   KHR_materials_volume: () => (/* reexport safe */ _glTF_index__WEBPACK_IMPORTED_MODULE_1__.KHR_materials_volume),
/* harmony export */   KHR_texture_transform: () => (/* reexport safe */ _glTF_index__WEBPACK_IMPORTED_MODULE_1__.KHR_texture_transform),
/* harmony export */   OBJExport: () => (/* reexport safe */ _OBJ_index__WEBPACK_IMPORTED_MODULE_0__.OBJExport),
/* harmony export */   STLExport: () => (/* reexport safe */ _stl_index__WEBPACK_IMPORTED_MODULE_2__.STLExport),
/* harmony export */   _BinaryWriter: () => (/* reexport safe */ _glTF_index__WEBPACK_IMPORTED_MODULE_1__._BinaryWriter),
/* harmony export */   _Exporter: () => (/* reexport safe */ _glTF_index__WEBPACK_IMPORTED_MODULE_1__._Exporter),
/* harmony export */   _GLTFAnimation: () => (/* reexport safe */ _glTF_index__WEBPACK_IMPORTED_MODULE_1__._GLTFAnimation),
/* harmony export */   _GLTFMaterialExporter: () => (/* reexport safe */ _glTF_index__WEBPACK_IMPORTED_MODULE_1__._GLTFMaterialExporter),
/* harmony export */   _GLTFUtilities: () => (/* reexport safe */ _glTF_index__WEBPACK_IMPORTED_MODULE_1__._GLTFUtilities),
/* harmony export */   __IGLTFExporterExtension: () => (/* reexport safe */ _glTF_index__WEBPACK_IMPORTED_MODULE_1__.__IGLTFExporterExtension),
/* harmony export */   __IGLTFExporterExtensionV2: () => (/* reexport safe */ _glTF_index__WEBPACK_IMPORTED_MODULE_1__.__IGLTFExporterExtensionV2)
/* harmony export */ });
/* harmony import */ var _OBJ_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OBJ/index */ "../../../dev/serializers/src/OBJ/index.ts");
/* harmony import */ var _glTF_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./glTF/index */ "../../../dev/serializers/src/glTF/index.ts");
/* harmony import */ var _stl_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stl/index */ "../../../dev/serializers/src/stl/index.ts");
/* eslint-disable import/no-internal-modules */





/***/ }),

/***/ "../../../dev/serializers/src/stl/index.ts":
/*!*************************************************!*\
  !*** ../../../dev/serializers/src/stl/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   STLExport: () => (/* reexport safe */ _stlSerializer__WEBPACK_IMPORTED_MODULE_0__.STLExport)
/* harmony export */ });
/* harmony import */ var _stlSerializer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stlSerializer */ "../../../dev/serializers/src/stl/stlSerializer.ts");



/***/ }),

/***/ "../../../dev/serializers/src/stl/stlSerializer.ts":
/*!*********************************************************!*\
  !*** ../../../dev/serializers/src/stl/stlSerializer.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   STLExport: () => (/* binding */ STLExport)
/* harmony export */ });
/* harmony import */ var babylonjs_Meshes_mesh__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Maths/math.vector */ "babylonjs/Maths/math.vector");
/* harmony import */ var babylonjs_Meshes_mesh__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Meshes_mesh__WEBPACK_IMPORTED_MODULE_0__);




/**
 * Class for generating STL data from a Babylon scene.
 */
var STLExport = /** @class */ (function () {
    function STLExport() {
    }
    /**
     * Exports the geometry of a Mesh array in .STL file format (ASCII)
     * @param meshes list defines the mesh to serialize
     * @param download triggers the automatic download of the file.
     * @param fileName changes the downloads fileName.
     * @param binary changes the STL to a binary type.
     * @param isLittleEndian toggle for binary type exporter.
     * @param doNotBakeTransform toggle if meshes transforms should be baked or not.
     * @param supportInstancedMeshes toggle to export instanced Meshes. Enabling support for instanced meshes will override doNoBakeTransform as true
     * @param exportIndividualMeshes toggle to export each mesh as an independent mesh. By default, all the meshes are combined into one mesh. This property has no effect when exporting in binary format
     * @returns the STL as UTF8 string
     */
    STLExport.CreateSTL = function (meshes, download, fileName, binary, isLittleEndian, doNotBakeTransform, supportInstancedMeshes, exportIndividualMeshes) {
        //Binary support adapted from https://gist.github.com/paulkaplan/6d5f0ab2c7e8fdc68a61
        if (download === void 0) { download = true; }
        if (fileName === void 0) { fileName = "stlmesh"; }
        if (binary === void 0) { binary = false; }
        if (isLittleEndian === void 0) { isLittleEndian = true; }
        if (doNotBakeTransform === void 0) { doNotBakeTransform = false; }
        if (supportInstancedMeshes === void 0) { supportInstancedMeshes = false; }
        if (exportIndividualMeshes === void 0) { exportIndividualMeshes = false; }
        var getFaceData = function (indices, vertices, i) {
            var id = [indices[i] * 3, indices[i + 1] * 3, indices[i + 2] * 3];
            var v = [
                new babylonjs_Meshes_mesh__WEBPACK_IMPORTED_MODULE_0__.Vector3(vertices[id[0]], vertices[id[0] + 2], vertices[id[0] + 1]),
                new babylonjs_Meshes_mesh__WEBPACK_IMPORTED_MODULE_0__.Vector3(vertices[id[1]], vertices[id[1] + 2], vertices[id[1] + 1]),
                new babylonjs_Meshes_mesh__WEBPACK_IMPORTED_MODULE_0__.Vector3(vertices[id[2]], vertices[id[2] + 2], vertices[id[2] + 1]),
            ];
            var p1p2 = v[0].subtract(v[1]);
            var p3p2 = v[2].subtract(v[1]);
            var n = babylonjs_Meshes_mesh__WEBPACK_IMPORTED_MODULE_0__.Vector3.Cross(p3p2, p1p2).normalize();
            return { v: v, n: n };
        };
        var writeVector = function (dataview, offset, vector, isLittleEndian) {
            offset = writeFloat(dataview, offset, vector.x, isLittleEndian);
            offset = writeFloat(dataview, offset, vector.y, isLittleEndian);
            return writeFloat(dataview, offset, vector.z, isLittleEndian);
        };
        var writeFloat = function (dataview, offset, value, isLittleEndian) {
            dataview.setFloat32(offset, value, isLittleEndian);
            return offset + 4;
        };
        var getVerticesData = function (mesh) {
            if (supportInstancedMeshes) {
                var sourceMesh = mesh;
                if (mesh instanceof babylonjs_Meshes_mesh__WEBPACK_IMPORTED_MODULE_0__.InstancedMesh) {
                    sourceMesh = mesh.sourceMesh;
                }
                var data_1 = sourceMesh.getVerticesData(babylonjs_Meshes_mesh__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.PositionKind, true, true);
                if (!data_1)
                    return [];
                var temp = babylonjs_Meshes_mesh__WEBPACK_IMPORTED_MODULE_0__.Vector3.Zero();
                var index = void 0;
                for (index = 0; index < data_1.length; index += 3) {
                    babylonjs_Meshes_mesh__WEBPACK_IMPORTED_MODULE_0__.Vector3.TransformCoordinatesFromFloatsToRef(data_1[index], data_1[index + 1], data_1[index + 2], mesh.computeWorldMatrix(true), temp).toArray(data_1, index);
                }
                return data_1;
            }
            else {
                return mesh.getVerticesData(babylonjs_Meshes_mesh__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.PositionKind) || [];
            }
        };
        if (supportInstancedMeshes) {
            doNotBakeTransform = true;
        }
        var data = "";
        var faceCount = 0;
        var offset = 0;
        if (binary) {
            for (var i = 0; i < meshes.length; i++) {
                var mesh = meshes[i];
                var indices = mesh.getIndices();
                faceCount += indices ? indices.length / 3 : 0;
            }
            var bufferSize = 84 + 50 * faceCount;
            var buffer = new ArrayBuffer(bufferSize);
            data = new DataView(buffer);
            offset += 80;
            data.setUint32(offset, faceCount, isLittleEndian);
            offset += 4;
        }
        else {
            if (!exportIndividualMeshes) {
                data = "solid stlmesh\r\n";
            }
        }
        for (var i = 0; i < meshes.length; i++) {
            var mesh = meshes[i];
            if (!binary && exportIndividualMeshes) {
                data += "solid " + mesh.name + "\r\n";
            }
            if (!doNotBakeTransform && mesh instanceof babylonjs_Meshes_mesh__WEBPACK_IMPORTED_MODULE_0__.Mesh) {
                mesh.bakeCurrentTransformIntoVertices();
            }
            var vertices = getVerticesData(mesh);
            var indices = mesh.getIndices() || [];
            for (var i_1 = 0; i_1 < indices.length; i_1 += 3) {
                var fd = getFaceData(indices, vertices, i_1);
                if (binary) {
                    offset = writeVector(data, offset, fd.n, isLittleEndian);
                    offset = writeVector(data, offset, fd.v[0], isLittleEndian);
                    offset = writeVector(data, offset, fd.v[1], isLittleEndian);
                    offset = writeVector(data, offset, fd.v[2], isLittleEndian);
                    offset += 2;
                }
                else {
                    data += "\tfacet normal " + fd.n.x + " " + fd.n.y + " " + fd.n.z + "\r\n";
                    data += "\t\touter loop\r\n";
                    data += "\t\t\tvertex " + fd.v[0].x + " " + fd.v[0].y + " " + fd.v[0].z + "\r\n";
                    data += "\t\t\tvertex " + fd.v[1].x + " " + fd.v[1].y + " " + fd.v[1].z + "\r\n";
                    data += "\t\t\tvertex " + fd.v[2].x + " " + fd.v[2].y + " " + fd.v[2].z + "\r\n";
                    data += "\t\tendloop\r\n";
                    data += "\tendfacet\r\n";
                }
            }
            if (!binary && exportIndividualMeshes) {
                data += "endsolid " + name + "\r\n";
            }
        }
        if (!binary && !exportIndividualMeshes) {
            data += "endsolid stlmesh";
        }
        if (download) {
            var a = document.createElement("a");
            var blob = new Blob([data], { type: "application/octet-stream" });
            a.href = window.URL.createObjectURL(blob);
            a.download = fileName + ".stl";
            a.click();
        }
        return data;
    };
    return STLExport;
}());



/***/ }),

/***/ "../../../lts/serializers/src/legacy/legacy-glTF2Serializer.ts":
/*!*********************************************************************!*\
  !*** ../../../lts/serializers/src/legacy/legacy-glTF2Serializer.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EXT_mesh_gpu_instancing: () => (/* reexport safe */ serializers_glTF_2_0_index__WEBPACK_IMPORTED_MODULE_4__.EXT_mesh_gpu_instancing),
/* harmony export */   GLTF2Export: () => (/* reexport safe */ serializers_glTF_2_0_index__WEBPACK_IMPORTED_MODULE_4__.GLTF2Export),
/* harmony export */   GLTFData: () => (/* reexport safe */ serializers_glTF_2_0_index__WEBPACK_IMPORTED_MODULE_4__.GLTFData),
/* harmony export */   KHR_lights_punctual: () => (/* reexport safe */ serializers_glTF_2_0_index__WEBPACK_IMPORTED_MODULE_4__.KHR_lights_punctual),
/* harmony export */   KHR_materials_anisotropy: () => (/* reexport safe */ serializers_glTF_2_0_index__WEBPACK_IMPORTED_MODULE_4__.KHR_materials_anisotropy),
/* harmony export */   KHR_materials_clearcoat: () => (/* reexport safe */ serializers_glTF_2_0_index__WEBPACK_IMPORTED_MODULE_4__.KHR_materials_clearcoat),
/* harmony export */   KHR_materials_diffuse_transmission: () => (/* reexport safe */ serializers_glTF_2_0_index__WEBPACK_IMPORTED_MODULE_4__.KHR_materials_diffuse_transmission),
/* harmony export */   KHR_materials_dispersion: () => (/* reexport safe */ serializers_glTF_2_0_index__WEBPACK_IMPORTED_MODULE_4__.KHR_materials_dispersion),
/* harmony export */   KHR_materials_emissive_strength: () => (/* reexport safe */ serializers_glTF_2_0_index__WEBPACK_IMPORTED_MODULE_4__.KHR_materials_emissive_strength),
/* harmony export */   KHR_materials_ior: () => (/* reexport safe */ serializers_glTF_2_0_index__WEBPACK_IMPORTED_MODULE_4__.KHR_materials_ior),
/* harmony export */   KHR_materials_iridescence: () => (/* reexport safe */ serializers_glTF_2_0_index__WEBPACK_IMPORTED_MODULE_4__.KHR_materials_iridescence),
/* harmony export */   KHR_materials_sheen: () => (/* reexport safe */ serializers_glTF_2_0_index__WEBPACK_IMPORTED_MODULE_4__.KHR_materials_sheen),
/* harmony export */   KHR_materials_specular: () => (/* reexport safe */ serializers_glTF_2_0_index__WEBPACK_IMPORTED_MODULE_4__.KHR_materials_specular),
/* harmony export */   KHR_materials_transmission: () => (/* reexport safe */ serializers_glTF_2_0_index__WEBPACK_IMPORTED_MODULE_4__.KHR_materials_transmission),
/* harmony export */   KHR_materials_unlit: () => (/* reexport safe */ serializers_glTF_2_0_index__WEBPACK_IMPORTED_MODULE_4__.KHR_materials_unlit),
/* harmony export */   KHR_materials_volume: () => (/* reexport safe */ serializers_glTF_2_0_index__WEBPACK_IMPORTED_MODULE_4__.KHR_materials_volume),
/* harmony export */   KHR_texture_transform: () => (/* reexport safe */ serializers_glTF_2_0_index__WEBPACK_IMPORTED_MODULE_4__.KHR_texture_transform),
/* harmony export */   _BinaryWriter: () => (/* reexport safe */ serializers_glTF_2_0_index__WEBPACK_IMPORTED_MODULE_4__._BinaryWriter),
/* harmony export */   _Exporter: () => (/* reexport safe */ serializers_glTF_2_0_index__WEBPACK_IMPORTED_MODULE_4__._Exporter),
/* harmony export */   _GLTFAnimation: () => (/* reexport safe */ serializers_glTF_2_0_index__WEBPACK_IMPORTED_MODULE_4__._GLTFAnimation),
/* harmony export */   _GLTFMaterialExporter: () => (/* reexport safe */ serializers_glTF_2_0_index__WEBPACK_IMPORTED_MODULE_4__._GLTFMaterialExporter),
/* harmony export */   _GLTFUtilities: () => (/* reexport safe */ serializers_glTF_2_0_index__WEBPACK_IMPORTED_MODULE_4__._GLTFUtilities),
/* harmony export */   __IGLTFExporterExtension: () => (/* reexport safe */ serializers_glTF_glTFFileExporter__WEBPACK_IMPORTED_MODULE_0__.__IGLTFExporterExtension),
/* harmony export */   __IGLTFExporterExtensionV2: () => (/* reexport safe */ serializers_glTF_2_0_index__WEBPACK_IMPORTED_MODULE_4__.__IGLTFExporterExtensionV2)
/* harmony export */ });
/* harmony import */ var serializers_glTF_glTFFileExporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! serializers/glTF/glTFFileExporter */ "../../../dev/serializers/src/glTF/glTFFileExporter.ts");
/* harmony import */ var serializers_glTF_2_0_glTFData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! serializers/glTF/2.0/glTFData */ "../../../dev/serializers/src/glTF/2.0/glTFData.ts");
/* harmony import */ var serializers_glTF_2_0_glTFSerializer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! serializers/glTF/2.0/glTFSerializer */ "../../../dev/serializers/src/glTF/2.0/glTFSerializer.ts");
/* harmony import */ var serializers_glTF_2_0_Extensions_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! serializers/glTF/2.0/Extensions/index */ "../../../dev/serializers/src/glTF/2.0/Extensions/index.ts");
/* harmony import */ var serializers_glTF_2_0_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! serializers/glTF/2.0/index */ "../../../dev/serializers/src/glTF/2.0/index.ts");
/* eslint-disable import/no-internal-modules */





/**
 * This is the entry point for the UMD module.
 * The entry point for a future ESM package should be index.ts
 */
var globalObject = typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : typeof window !== "undefined" ? window : undefined;
if (typeof globalObject !== "undefined") {
    globalObject.BABYLON = globalObject.BABYLON || {};
    var BABYLON_1 = globalObject.BABYLON;
    BABYLON_1.GLTF2 = BABYLON_1.GLTF2 || {};
    BABYLON_1.GLTF2.Exporter = BABYLON_1.GLTF2.Exporter || {};
    BABYLON_1.GLTF2.Exporter.Extensions = BABYLON_1.GLTF2.Exporter.Extensions || {};
    var keys = [];
    for (var key in serializers_glTF_glTFFileExporter__WEBPACK_IMPORTED_MODULE_0__) {
        BABYLON_1[key] = serializers_glTF_glTFFileExporter__WEBPACK_IMPORTED_MODULE_0__[key];
        keys.push(key);
    }
    for (var key in serializers_glTF_2_0_glTFData__WEBPACK_IMPORTED_MODULE_1__) {
        BABYLON_1[key] = serializers_glTF_2_0_glTFData__WEBPACK_IMPORTED_MODULE_1__[key];
        keys.push(key);
    }
    for (var key in serializers_glTF_2_0_glTFSerializer__WEBPACK_IMPORTED_MODULE_2__) {
        BABYLON_1[key] = serializers_glTF_2_0_glTFSerializer__WEBPACK_IMPORTED_MODULE_2__[key];
        keys.push(key);
    }
    for (var key in serializers_glTF_2_0_Extensions_index__WEBPACK_IMPORTED_MODULE_3__) {
        BABYLON_1.GLTF2.Exporter.Extensions[key] = serializers_glTF_2_0_Extensions_index__WEBPACK_IMPORTED_MODULE_3__[key];
        keys.push(key);
    }
    for (var key in serializers_glTF_2_0_index__WEBPACK_IMPORTED_MODULE_4__) {
        // Prevent Reassignment.
        if (keys.indexOf(key) > -1) {
            continue;
        }
        BABYLON_1.GLTF2.Exporter[key] = serializers_glTF_2_0_index__WEBPACK_IMPORTED_MODULE_4__[key];
    }
}




/***/ }),

/***/ "../../../lts/serializers/src/legacy/legacy-objSerializer.ts":
/*!*******************************************************************!*\
  !*** ../../../lts/serializers/src/legacy/legacy-objSerializer.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OBJExport: () => (/* reexport safe */ serializers_OBJ_index__WEBPACK_IMPORTED_MODULE_0__.OBJExport)
/* harmony export */ });
/* harmony import */ var serializers_OBJ_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! serializers/OBJ/index */ "../../../dev/serializers/src/OBJ/index.ts");
/* eslint-disable import/no-internal-modules */

/**
 * This is the entry point for the UMD module.
 * The entry point for a future ESM package should be index.ts
 */
var globalObject = typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : typeof window !== "undefined" ? window : undefined;
if (typeof globalObject !== "undefined") {
    for (var serializer in serializers_OBJ_index__WEBPACK_IMPORTED_MODULE_0__) {
        globalObject.BABYLON[serializer] = serializers_OBJ_index__WEBPACK_IMPORTED_MODULE_0__[serializer];
    }
}



/***/ }),

/***/ "../../../lts/serializers/src/legacy/legacy-stlSerializer.ts":
/*!*******************************************************************!*\
  !*** ../../../lts/serializers/src/legacy/legacy-stlSerializer.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   STLExport: () => (/* reexport safe */ serializers_stl_index__WEBPACK_IMPORTED_MODULE_0__.STLExport)
/* harmony export */ });
/* harmony import */ var serializers_stl_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! serializers/stl/index */ "../../../dev/serializers/src/stl/index.ts");
/* eslint-disable import/no-internal-modules */

/**
 * This is the entry point for the UMD module.
 * The entry point for a future ESM package should be index.ts
 */
var globalObject = typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : typeof window !== "undefined" ? window : undefined;
if (typeof globalObject !== "undefined") {
    for (var serializer in serializers_stl_index__WEBPACK_IMPORTED_MODULE_0__) {
        globalObject.BABYLON[serializer] = serializers_stl_index__WEBPACK_IMPORTED_MODULE_0__[serializer];
    }
}



/***/ }),

/***/ "../../../lts/serializers/src/legacy/legacy.ts":
/*!*****************************************************!*\
  !*** ../../../lts/serializers/src/legacy/legacy.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EXT_mesh_gpu_instancing: () => (/* reexport safe */ _legacy_glTF2Serializer__WEBPACK_IMPORTED_MODULE_1__.EXT_mesh_gpu_instancing),
/* harmony export */   GLTF2Export: () => (/* reexport safe */ _legacy_glTF2Serializer__WEBPACK_IMPORTED_MODULE_1__.GLTF2Export),
/* harmony export */   GLTFData: () => (/* reexport safe */ _legacy_glTF2Serializer__WEBPACK_IMPORTED_MODULE_1__.GLTFData),
/* harmony export */   KHR_lights_punctual: () => (/* reexport safe */ _legacy_glTF2Serializer__WEBPACK_IMPORTED_MODULE_1__.KHR_lights_punctual),
/* harmony export */   KHR_materials_anisotropy: () => (/* reexport safe */ _legacy_glTF2Serializer__WEBPACK_IMPORTED_MODULE_1__.KHR_materials_anisotropy),
/* harmony export */   KHR_materials_clearcoat: () => (/* reexport safe */ _legacy_glTF2Serializer__WEBPACK_IMPORTED_MODULE_1__.KHR_materials_clearcoat),
/* harmony export */   KHR_materials_diffuse_transmission: () => (/* reexport safe */ _legacy_glTF2Serializer__WEBPACK_IMPORTED_MODULE_1__.KHR_materials_diffuse_transmission),
/* harmony export */   KHR_materials_dispersion: () => (/* reexport safe */ _legacy_glTF2Serializer__WEBPACK_IMPORTED_MODULE_1__.KHR_materials_dispersion),
/* harmony export */   KHR_materials_emissive_strength: () => (/* reexport safe */ _legacy_glTF2Serializer__WEBPACK_IMPORTED_MODULE_1__.KHR_materials_emissive_strength),
/* harmony export */   KHR_materials_ior: () => (/* reexport safe */ _legacy_glTF2Serializer__WEBPACK_IMPORTED_MODULE_1__.KHR_materials_ior),
/* harmony export */   KHR_materials_iridescence: () => (/* reexport safe */ _legacy_glTF2Serializer__WEBPACK_IMPORTED_MODULE_1__.KHR_materials_iridescence),
/* harmony export */   KHR_materials_sheen: () => (/* reexport safe */ _legacy_glTF2Serializer__WEBPACK_IMPORTED_MODULE_1__.KHR_materials_sheen),
/* harmony export */   KHR_materials_specular: () => (/* reexport safe */ _legacy_glTF2Serializer__WEBPACK_IMPORTED_MODULE_1__.KHR_materials_specular),
/* harmony export */   KHR_materials_transmission: () => (/* reexport safe */ _legacy_glTF2Serializer__WEBPACK_IMPORTED_MODULE_1__.KHR_materials_transmission),
/* harmony export */   KHR_materials_unlit: () => (/* reexport safe */ _legacy_glTF2Serializer__WEBPACK_IMPORTED_MODULE_1__.KHR_materials_unlit),
/* harmony export */   KHR_materials_volume: () => (/* reexport safe */ _legacy_glTF2Serializer__WEBPACK_IMPORTED_MODULE_1__.KHR_materials_volume),
/* harmony export */   KHR_texture_transform: () => (/* reexport safe */ _legacy_glTF2Serializer__WEBPACK_IMPORTED_MODULE_1__.KHR_texture_transform),
/* harmony export */   OBJExport: () => (/* reexport safe */ _legacy_objSerializer__WEBPACK_IMPORTED_MODULE_2__.OBJExport),
/* harmony export */   STLExport: () => (/* reexport safe */ _legacy_stlSerializer__WEBPACK_IMPORTED_MODULE_3__.STLExport),
/* harmony export */   _BinaryWriter: () => (/* reexport safe */ _legacy_glTF2Serializer__WEBPACK_IMPORTED_MODULE_1__._BinaryWriter),
/* harmony export */   _Exporter: () => (/* reexport safe */ _legacy_glTF2Serializer__WEBPACK_IMPORTED_MODULE_1__._Exporter),
/* harmony export */   _GLTFAnimation: () => (/* reexport safe */ _legacy_glTF2Serializer__WEBPACK_IMPORTED_MODULE_1__._GLTFAnimation),
/* harmony export */   _GLTFMaterialExporter: () => (/* reexport safe */ _legacy_glTF2Serializer__WEBPACK_IMPORTED_MODULE_1__._GLTFMaterialExporter),
/* harmony export */   _GLTFUtilities: () => (/* reexport safe */ _legacy_glTF2Serializer__WEBPACK_IMPORTED_MODULE_1__._GLTFUtilities),
/* harmony export */   __IGLTFExporterExtension: () => (/* reexport safe */ _legacy_glTF2Serializer__WEBPACK_IMPORTED_MODULE_1__.__IGLTFExporterExtension),
/* harmony export */   __IGLTFExporterExtensionV2: () => (/* reexport safe */ _legacy_glTF2Serializer__WEBPACK_IMPORTED_MODULE_1__.__IGLTFExporterExtensionV2)
/* harmony export */ });
/* harmony import */ var serializers_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! serializers/index */ "../../../dev/serializers/src/index.ts");
/* harmony import */ var _legacy_glTF2Serializer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./legacy-glTF2Serializer */ "../../../lts/serializers/src/legacy/legacy-glTF2Serializer.ts");
/* harmony import */ var _legacy_objSerializer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./legacy-objSerializer */ "../../../lts/serializers/src/legacy/legacy-objSerializer.ts");
/* harmony import */ var _legacy_stlSerializer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./legacy-stlSerializer */ "../../../lts/serializers/src/legacy/legacy-stlSerializer.ts");
/* eslint-disable import/export */
/* eslint-disable import/no-internal-modules */






/***/ }),

/***/ "babylonjs/Maths/math.vector":
/*!****************************************************************************************************!*\
  !*** external {"root":"BABYLON","commonjs":"babylonjs","commonjs2":"babylonjs","amd":"babylonjs"} ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_babylonjs_Maths_math_vector__;

/***/ }),

/***/ "../../../../node_modules/tslib/tslib.es6.mjs":
/*!****************************************************!*\
  !*** ../../../../node_modules/tslib/tslib.es6.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __addDisposableResource: () => (/* binding */ __addDisposableResource),
/* harmony export */   __assign: () => (/* binding */ __assign),
/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),
/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),
/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),
/* harmony export */   __await: () => (/* binding */ __await),
/* harmony export */   __awaiter: () => (/* binding */ __awaiter),
/* harmony export */   __classPrivateFieldGet: () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   __classPrivateFieldIn: () => (/* binding */ __classPrivateFieldIn),
/* harmony export */   __classPrivateFieldSet: () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   __createBinding: () => (/* binding */ __createBinding),
/* harmony export */   __decorate: () => (/* binding */ __decorate),
/* harmony export */   __disposeResources: () => (/* binding */ __disposeResources),
/* harmony export */   __esDecorate: () => (/* binding */ __esDecorate),
/* harmony export */   __exportStar: () => (/* binding */ __exportStar),
/* harmony export */   __extends: () => (/* binding */ __extends),
/* harmony export */   __generator: () => (/* binding */ __generator),
/* harmony export */   __importDefault: () => (/* binding */ __importDefault),
/* harmony export */   __importStar: () => (/* binding */ __importStar),
/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),
/* harmony export */   __metadata: () => (/* binding */ __metadata),
/* harmony export */   __param: () => (/* binding */ __param),
/* harmony export */   __propKey: () => (/* binding */ __propKey),
/* harmony export */   __read: () => (/* binding */ __read),
/* harmony export */   __rest: () => (/* binding */ __rest),
/* harmony export */   __runInitializers: () => (/* binding */ __runInitializers),
/* harmony export */   __setFunctionName: () => (/* binding */ __setFunctionName),
/* harmony export */   __spread: () => (/* binding */ __spread),
/* harmony export */   __spreadArray: () => (/* binding */ __spreadArray),
/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays),
/* harmony export */   __values: () => (/* binding */ __values),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  }
  return __assign.apply(this, arguments);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};

function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};

function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
  function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose;
    if (async) {
        if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
        dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
        if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
        dispose = value[Symbol.dispose];
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  function next() {
    while (env.stack.length) {
      var rec = env.stack.pop();
      try {
        var result = rec.dispose && rec.dispose.call(rec.value);
        if (rec.async) return Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
      }
      catch (e) {
          fail(e);
      }
    }
    if (env.hasError) throw env.error;
  }
  return next();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   serializers: () => (/* reexport module object */ _lts_serializers_legacy_legacy__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _lts_serializers_legacy_legacy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lts/serializers/legacy/legacy */ "../../../lts/serializers/src/legacy/legacy.ts");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_lts_serializers_legacy_legacy__WEBPACK_IMPORTED_MODULE_0__);

})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFieWxvbmpzLnNlcmlhbGl6ZXJzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0NBO0FBQ0E7QUFLQTs7QUFFQTtBQUNBO0FBQUE7QUEwTEE7QUF6TEE7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFFQTs7OztBQUlBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hNQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFjQTtBQWJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBR0E7QUFDQTtBQUVBO0FBR0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFFQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQUE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RMQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFHQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQWVBOztBQUVBO0FBQ0E7QUFqQkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBV0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNMQTtBQUVBO0FBR0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFjQTtBQWJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBR0E7QUFDQTtBQUVBO0FBR0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRkE7QUFFQTtBQUdBO0FBRUE7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFjQTtBQWJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBR0E7QUFDQTtBQUVBO0FBR0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFHQTtBQUVBO0FBR0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBY0E7QUFiQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUdBO0FBQ0E7QUFFQTtBQUdBO0FBREE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUFBO0FBQ0E7O0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2SEE7QUFFQTtBQUVBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQVlBO0FBQ0E7QUFaQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUdBO0FBRUE7QUFDQTtBQUdBO0FBREE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRUE7QUFFQTtBQUdBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQTZDQTtBQTNDQTtBQUNBO0FBR0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25FQTtBQUVBO0FBRUE7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFZQTtBQVhBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBR0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hFQTtBQUVBO0FBR0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFjQTtBQWJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBR0E7QUFDQTtBQUVBO0FBR0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUVBO0FBR0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFjQTtBQWJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUVBO0FBR0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BGQTtBQUVBO0FBR0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFjQTtBQWJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQURBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQUE7QUFDQTs7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkhBO0FBRUE7QUFHQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQWNBO0FBYkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBREE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQUE7QUFDQTs7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4R0E7QUFFQTtBQUNBO0FBRUE7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFZQTtBQVhBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFHQTtBQURBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUVBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pEQTtBQUVBO0FBRUE7QUFFQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQWNBO0FBYkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFHQTtBQUNBO0FBRUE7QUFHQTtBQURBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQUE7QUFDQTs7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JIQTtBQUlBO0FBRUE7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFhQTtBQVpBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBR0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUVBO0FBRUE7QUFDQTtBQWlEQTs7O0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFBQTtBQW84QkE7QUFuOEJBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBYUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFhQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7O0FBWUE7QUFDQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7QUFZQTtBQUNBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7QUFXQTtBQUNBOztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7O0FBMURBO0FBQUE7QUEyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBeklBO0FBQUE7QUFBQTtBQTBJQTtBQUNBO0FBQ0E7QUFFQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQWVBO0FBQ0E7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQVdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7O0FBUUE7QUFDQTtBQVFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7OztBQVFBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3poQ0E7O0FBRUE7QUFDQTtBQU1BOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBOEJBOzs7QUFHQTtBQUNBO0FBdU9BOzs7O0FBSUE7QUFDQTtBQWpKQTtBQWtKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQXpLQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBTUE7QUFJQTtBQUVBO0FBT0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBc0NBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBOzs7QUFBQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBUUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7O0FBV0E7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7QUFPQTtBQUNBO0FBT0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFVQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFVQTtBQUNBO0FBRUE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQVVBO0FBQ0E7QUFFQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBOztBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBWUE7QUFDQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUEvQ0E7QUFBQTtBQUFBO0FBZ0RBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQVVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXozREE7QUFDQTtBQXkzREE7QUFBQTtBQUVBOzs7O0FBSUE7QUFDQTtBQWFBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FDeDBFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUtBO0FBQ0E7QUF1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUE2QkE7QUFsQkE7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFhQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7O0FBT0E7QUFDQTs7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFFQTs7QUFBQTtBQUVBOztBQUFBO0FBRUE7QUFBQTs7OztBQUNBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7OztBQVNBO0FBQ0E7Ozs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7QUFBQTtBQUNBOztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7QUFFQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7O0FBT0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7OztBQU9BO0FBQ0E7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFDQTs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBOztBQUFBO0FBQ0E7QUFDQTs7QUFHQTs7OztBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUF6a0NBOztBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBVUE7O0FBRUE7QUFDQTtBQXFqQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2hxQ0E7QUFzREE7O0FBRUE7QUFDQTtBQUFBO0FBcURBO0FBcERBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdHQTtBQUVBOztBQUVBO0FBQ0E7QUFBQTtBQThIQTtBQTdIQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7O0FBV0E7QUFDQTtBQVVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQUE7QUFtSkE7QUFsSkE7Ozs7Ozs7Ozs7O0FBV0E7QUFDQTtBQVVBO0FBUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqREE7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNMQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNqWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2Rldi9zZXJpYWxpemVycy9zcmMvT0JKL2luZGV4LnRzIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2Rldi9zZXJpYWxpemVycy9zcmMvT0JKL29ialNlcmlhbGl6ZXIudHMiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvLi4vLi4vLi4vZGV2L3NlcmlhbGl6ZXJzL3NyYy9nbFRGLzIuMC9FeHRlbnNpb25zL0VYVF9tZXNoX2dwdV9pbnN0YW5jaW5nLnRzIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2Rldi9zZXJpYWxpemVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9LSFJfbGlnaHRzX3B1bmN0dWFsLnRzIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2Rldi9zZXJpYWxpemVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9LSFJfbWF0ZXJpYWxzX2FuaXNvdHJvcHkudHMiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvLi4vLi4vLi4vZGV2L3NlcmlhbGl6ZXJzL3NyYy9nbFRGLzIuMC9FeHRlbnNpb25zL0tIUl9tYXRlcmlhbHNfY2xlYXJjb2F0LnRzIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2Rldi9zZXJpYWxpemVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9LSFJfbWF0ZXJpYWxzX2RpZmZ1c2VfdHJhbnNtaXNzaW9uLnRzIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2Rldi9zZXJpYWxpemVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9LSFJfbWF0ZXJpYWxzX2Rpc3BlcnNpb24udHMiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvLi4vLi4vLi4vZGV2L3NlcmlhbGl6ZXJzL3NyYy9nbFRGLzIuMC9FeHRlbnNpb25zL0tIUl9tYXRlcmlhbHNfZW1pc3NpdmVfc3RyZW5ndGgudHMiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvLi4vLi4vLi4vZGV2L3NlcmlhbGl6ZXJzL3NyYy9nbFRGLzIuMC9FeHRlbnNpb25zL0tIUl9tYXRlcmlhbHNfaW9yLnRzIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2Rldi9zZXJpYWxpemVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9LSFJfbWF0ZXJpYWxzX2lyaWRlc2NlbmNlLnRzIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2Rldi9zZXJpYWxpemVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9LSFJfbWF0ZXJpYWxzX3NoZWVuLnRzIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2Rldi9zZXJpYWxpemVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9LSFJfbWF0ZXJpYWxzX3NwZWN1bGFyLnRzIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2Rldi9zZXJpYWxpemVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9LSFJfbWF0ZXJpYWxzX3RyYW5zbWlzc2lvbi50cyIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy8uLi8uLi8uLi9kZXYvc2VyaWFsaXplcnMvc3JjL2dsVEYvMi4wL0V4dGVuc2lvbnMvS0hSX21hdGVyaWFsc191bmxpdC50cyIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy8uLi8uLi8uLi9kZXYvc2VyaWFsaXplcnMvc3JjL2dsVEYvMi4wL0V4dGVuc2lvbnMvS0hSX21hdGVyaWFsc192b2x1bWUudHMiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvLi4vLi4vLi4vZGV2L3NlcmlhbGl6ZXJzL3NyYy9nbFRGLzIuMC9FeHRlbnNpb25zL0tIUl90ZXh0dXJlX3RyYW5zZm9ybS50cyIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy8uLi8uLi8uLi9kZXYvc2VyaWFsaXplcnMvc3JjL2dsVEYvMi4wL0V4dGVuc2lvbnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvLi4vLi4vLi4vZGV2L3NlcmlhbGl6ZXJzL3NyYy9nbFRGLzIuMC9nbFRGQW5pbWF0aW9uLnRzIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2Rldi9zZXJpYWxpemVycy9zcmMvZ2xURi8yLjAvZ2xURkRhdGEudHMiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvLi4vLi4vLi4vZGV2L3NlcmlhbGl6ZXJzL3NyYy9nbFRGLzIuMC9nbFRGRXhwb3J0ZXIudHMiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvLi4vLi4vLi4vZGV2L3NlcmlhbGl6ZXJzL3NyYy9nbFRGLzIuMC9nbFRGRXhwb3J0ZXJFeHRlbnNpb24udHMiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvLi4vLi4vLi4vZGV2L3NlcmlhbGl6ZXJzL3NyYy9nbFRGLzIuMC9nbFRGTWF0ZXJpYWxFeHBvcnRlci50cyIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy8uLi8uLi8uLi9kZXYvc2VyaWFsaXplcnMvc3JjL2dsVEYvMi4wL2dsVEZTZXJpYWxpemVyLnRzIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2Rldi9zZXJpYWxpemVycy9zcmMvZ2xURi8yLjAvZ2xURlV0aWxpdGllcy50cyIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy8uLi8uLi8uLi9kZXYvc2VyaWFsaXplcnMvc3JjL2dsVEYvMi4wL2luZGV4LnRzIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2Rldi9zZXJpYWxpemVycy9zcmMvZ2xURi9nbFRGRmlsZUV4cG9ydGVyLnRzIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2Rldi9zZXJpYWxpemVycy9zcmMvZ2xURi9pbmRleC50cyIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy8uLi8uLi8uLi9kZXYvc2VyaWFsaXplcnMvc3JjL2luZGV4LnRzIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2Rldi9zZXJpYWxpemVycy9zcmMvc3RsL2luZGV4LnRzIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2Rldi9zZXJpYWxpemVycy9zcmMvc3RsL3N0bFNlcmlhbGl6ZXIudHMiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvLi4vLi4vLi4vbHRzL3NlcmlhbGl6ZXJzL3NyYy9sZWdhY3kvbGVnYWN5LWdsVEYyU2VyaWFsaXplci50cyIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy8uLi8uLi8uLi9sdHMvc2VyaWFsaXplcnMvc3JjL2xlZ2FjeS9sZWdhY3ktb2JqU2VyaWFsaXplci50cyIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy8uLi8uLi8uLi9sdHMvc2VyaWFsaXplcnMvc3JjL2xlZ2FjeS9sZWdhY3ktc3RsU2VyaWFsaXplci50cyIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy8uLi8uLi8uLi9sdHMvc2VyaWFsaXplcnMvc3JjL2xlZ2FjeS9sZWdhY3kudHMiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvZXh0ZXJuYWwgdW1kIHtcInJvb3RcIjpcIkJBQllMT05cIixcImNvbW1vbmpzXCI6XCJiYWJ5bG9uanNcIixcImNvbW1vbmpzMlwiOlwiYmFieWxvbmpzXCIsXCJhbWRcIjpcImJhYnlsb25qc1wifSIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2Lm1qcyIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL1NFUklBTElaRVJTL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiYmFieWxvbmpzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiYmFieWxvbmpzLXNlcmlhbGl6ZXJzXCIsIFtcImJhYnlsb25qc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJiYWJ5bG9uanMtc2VyaWFsaXplcnNcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJiYWJ5bG9uanNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlNFUklBTElaRVJTXCJdID0gZmFjdG9yeShyb290W1wiQkFCWUxPTlwiXSk7XG59KSgodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHRoaXMpLCAoX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9iYWJ5bG9uanNfTWF0aHNfbWF0aF92ZWN0b3JfXykgPT4ge1xucmV0dXJuICIsImV4cG9ydCAqIGZyb20gXCIuL29ialNlcmlhbGl6ZXJcIjtcclxuIiwiaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCJjb3JlL3R5cGVzXCI7XHJcbmltcG9ydCB7IE1hdHJpeCB9IGZyb20gXCJjb3JlL01hdGhzL21hdGgudmVjdG9yXCI7XHJcbmltcG9ydCB7IFRvb2xzIH0gZnJvbSBcImNvcmUvTWlzYy90b29sc1wiO1xyXG5pbXBvcnQgdHlwZSB7IFN0YW5kYXJkTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvc3RhbmRhcmRNYXRlcmlhbFwiO1xyXG5pbXBvcnQgdHlwZSB7IEdlb21ldHJ5IH0gZnJvbSBcImNvcmUvTWVzaGVzL2dlb21ldHJ5XCI7XHJcbmltcG9ydCB0eXBlIHsgTWVzaCB9IGZyb20gXCJjb3JlL01lc2hlcy9tZXNoXCI7XHJcblxyXG4vKipcclxuICogQ2xhc3MgZm9yIGdlbmVyYXRpbmcgT0JKIGRhdGEgZnJvbSBhIEJhYnlsb24gc2NlbmUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgT0JKRXhwb3J0IHtcclxuICAgIC8qKlxyXG4gICAgICogRXhwb3J0cyB0aGUgZ2VvbWV0cnkgb2YgYSBNZXNoIGFycmF5IGluIC5PQkogZmlsZSBmb3JtYXQgKHRleHQpXHJcbiAgICAgKiBAcGFyYW0gbWVzaGVzIGRlZmluZXMgdGhlIGxpc3Qgb2YgbWVzaGVzIHRvIHNlcmlhbGl6ZVxyXG4gICAgICogQHBhcmFtIG1hdGVyaWFscyBkZWZpbmVzIGlmIG1hdGVyaWFscyBzaG91bGQgYmUgZXhwb3J0ZWRcclxuICAgICAqIEBwYXJhbSBtYXRsaWJuYW1lIGRlZmluZXMgdGhlIG5hbWUgb2YgdGhlIGFzc29jaWF0ZWQgbXRsIGZpbGVcclxuICAgICAqIEBwYXJhbSBnbG9iYWxwb3NpdGlvbiBkZWZpbmVzIGlmIHRoZSBleHBvcnRlZCBwb3NpdGlvbnMgYXJlIGdsb2JhbHMgb3IgbG9jYWwgdG8gdGhlIGV4cG9ydGVkIG1lc2hcclxuICAgICAqIEByZXR1cm5zIHRoZSBPQkogY29udGVudFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIE9CSihtZXNoZXM6IE1lc2hbXSwgbWF0ZXJpYWxzPzogYm9vbGVhbiwgbWF0bGlibmFtZT86IHN0cmluZywgZ2xvYmFscG9zaXRpb24/OiBib29sZWFuKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBvdXRwdXQ6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgbGV0IHYgPSAxO1xyXG4gICAgICAgIC8vIGtlZXAgdHJhY2sgb2YgdXYgaW5kZXggaW4gY2FzZSBtaXhlZCBtZXNoZXMgYXJlIHBhc3NlZCBpblxyXG4gICAgICAgIGxldCB0ZXh0dXJlViA9IDE7XHJcblxyXG4gICAgICAgIGlmIChtYXRlcmlhbHMpIHtcclxuICAgICAgICAgICAgaWYgKCFtYXRsaWJuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBtYXRsaWJuYW1lID0gXCJtYXRcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvdXRwdXQucHVzaChcIm10bGxpYiBcIiArIG1hdGxpYm5hbWUgKyBcIi5tdGxcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbWVzaGVzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9iamVjdE5hbWUgPSBtZXNoZXNbal0ubmFtZSB8fCBgbWVzaCR7an19YDtcclxuICAgICAgICAgICAgb3V0cHV0LnB1c2goYG8gJHtvYmplY3ROYW1lfWApO1xyXG5cclxuICAgICAgICAgICAgLy9Vc2VzIHRoZSBwb3NpdGlvbiBvZiB0aGUgaXRlbSBpbiB0aGUgc2NlbmUsIHRvIHRoZSBmaWxlICh0aGlzIGJhY2sgdG8gbm9ybWFsIGluIHRoZSBlbmQpXHJcbiAgICAgICAgICAgIGxldCBpbnZlcnNlVHJhbnNmb3JtOiBOdWxsYWJsZTxNYXRyaXg+ID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKGdsb2JhbHBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0cmFuc2Zvcm0gPSBtZXNoZXNbal0uY29tcHV0ZVdvcmxkTWF0cml4KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgaW52ZXJzZVRyYW5zZm9ybSA9IG5ldyBNYXRyaXgoKTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybS5pbnZlcnRUb1JlZihpbnZlcnNlVHJhbnNmb3JtKTtcclxuXHJcbiAgICAgICAgICAgICAgICBtZXNoZXNbal0uYmFrZVRyYW5zZm9ybUludG9WZXJ0aWNlcyh0cmFuc2Zvcm0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL1RPRE86IHN1Ym1lc2hlcyAoZ3JvdXBzKVxyXG4gICAgICAgICAgICAvL1RPRE86IHNtb290aGluZyBncm91cHMgKHMgMSwgcyBvZmYpO1xyXG4gICAgICAgICAgICBpZiAobWF0ZXJpYWxzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYXQgPSBtZXNoZXNbal0ubWF0ZXJpYWw7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG1hdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG91dHB1dC5wdXNoKFwidXNlbXRsIFwiICsgbWF0LmlkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBnOiBOdWxsYWJsZTxHZW9tZXRyeT4gPSBtZXNoZXNbal0uZ2VvbWV0cnk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWcpIHtcclxuICAgICAgICAgICAgICAgIFRvb2xzLldhcm4oXCJObyBnZW9tZXRyeSBpcyBwcmVzZW50IG9uIHRoZSBtZXNoXCIpO1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRydW5rVmVydHMgPSBnLmdldFZlcnRpY2VzRGF0YShcInBvc2l0aW9uXCIpO1xyXG4gICAgICAgICAgICBjb25zdCB0cnVua05vcm1hbHMgPSBnLmdldFZlcnRpY2VzRGF0YShcIm5vcm1hbFwiKTtcclxuICAgICAgICAgICAgY29uc3QgdHJ1bmtVViA9IGcuZ2V0VmVydGljZXNEYXRhKFwidXZcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHRydW5rRmFjZXMgPSBnLmdldEluZGljZXMoKTtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRWID0gMDtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRUZXh0dXJlViA9IDA7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRydW5rVmVydHMgfHwgIXRydW5rRmFjZXMpIHtcclxuICAgICAgICAgICAgICAgIFRvb2xzLldhcm4oXCJUaGVyZSBhcmUgbm8gcG9zaXRpb24gdmVydGljZXMgb3IgaW5kaWNlcyBvbiB0aGUgbWVzaCFcIik7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgdXNlUmlnaHRIYW5kZWRTeXN0ZW0gPSBtZXNoZXNbMF0uZ2V0U2NlbmUoKS51c2VSaWdodEhhbmRlZFN5c3RlbTtcclxuICAgICAgICAgICAgY29uc3QgaGFuZGVkbmVzc1NpZ24gPSB1c2VSaWdodEhhbmRlZFN5c3RlbSA/IDEgOiAtMTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdHJ1bmtWZXJ0cy5sZW5ndGg7IGkgKz0gMykge1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0LnB1c2goXCJ2IFwiICsgdHJ1bmtWZXJ0c1tpXSAqIGhhbmRlZG5lc3NTaWduICsgXCIgXCIgKyB0cnVua1ZlcnRzW2kgKyAxXSArIFwiIFwiICsgdHJ1bmtWZXJ0c1tpICsgMl0pO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFYrKztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRydW5rTm9ybWFscyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRydW5rTm9ybWFscy5sZW5ndGg7IGkgKz0gMykge1xyXG4gICAgICAgICAgICAgICAgICAgIG91dHB1dC5wdXNoKFwidm4gXCIgKyB0cnVua05vcm1hbHNbaV0gKiBoYW5kZWRuZXNzU2lnbiArIFwiIFwiICsgdHJ1bmtOb3JtYWxzW2kgKyAxXSArIFwiIFwiICsgdHJ1bmtOb3JtYWxzW2kgKyAyXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRydW5rVVYgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0cnVua1VWLmxlbmd0aDsgaSArPSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0LnB1c2goXCJ2dCBcIiArIHRydW5rVVZbaV0gKyBcIiBcIiArIHRydW5rVVZbaSArIDFdKTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VGV4dHVyZVYrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgYmxhbmtzOiBzdHJpbmdbXSA9IFtcIlwiLCBcIlwiLCBcIlwiXTtcclxuICAgICAgICAgICAgY29uc3QgW29mZnNldDEsIG9mZnNldDJdID0gdXNlUmlnaHRIYW5kZWRTeXN0ZW0gPyBbMiwgMV0gOiBbMSwgMl07XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRydW5rRmFjZXMubGVuZ3RoOyBpICs9IDMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGluZGljZXMgPSBbU3RyaW5nKHRydW5rRmFjZXNbaV0gKyB2KSwgU3RyaW5nKHRydW5rRmFjZXNbaSArIG9mZnNldDFdICsgdiksIFN0cmluZyh0cnVua0ZhY2VzW2kgKyBvZmZzZXQyXSArIHYpXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRleHR1cmVJbmRpY2VzID0gW1N0cmluZyh0cnVua0ZhY2VzW2ldICsgdGV4dHVyZVYpLCBTdHJpbmcodHJ1bmtGYWNlc1tpICsgb2Zmc2V0MV0gKyB0ZXh0dXJlViksIFN0cmluZyh0cnVua0ZhY2VzW2kgKyBvZmZzZXQyXSArIHRleHR1cmVWKV07XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZmFjZVBvc2l0aW9ucyA9IGluZGljZXM7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmYWNlVVZzID0gdHJ1bmtVViAhPSBudWxsID8gdGV4dHVyZUluZGljZXMgOiBibGFua3M7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmYWNlTm9ybWFscyA9IHRydW5rTm9ybWFscyAhPSBudWxsID8gaW5kaWNlcyA6IGJsYW5rcztcclxuXHJcbiAgICAgICAgICAgICAgICBvdXRwdXQucHVzaChcclxuICAgICAgICAgICAgICAgICAgICBcImYgXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWNlUG9zaXRpb25zWzBdICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCIvXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWNlVVZzWzBdICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCIvXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWNlTm9ybWFsc1swXSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmFjZVBvc2l0aW9uc1sxXSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiL1wiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmFjZVVWc1sxXSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiL1wiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmFjZU5vcm1hbHNbMV0gK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhY2VQb3NpdGlvbnNbMl0gK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIi9cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhY2VVVnNbMl0gK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIi9cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhY2VOb3JtYWxzWzJdXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vYmFjayBkZSBwcmV2aW91cyBtYXRyaXgsIHRvIG5vdCBjaGFuZ2UgdGhlIG9yaWdpbmFsIG1lc2ggaW4gdGhlIHNjZW5lXHJcbiAgICAgICAgICAgIGlmIChnbG9iYWxwb3NpdGlvbiAmJiBpbnZlcnNlVHJhbnNmb3JtKSB7XHJcbiAgICAgICAgICAgICAgICBtZXNoZXNbal0uYmFrZVRyYW5zZm9ybUludG9WZXJ0aWNlcyhpbnZlcnNlVHJhbnNmb3JtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2ICs9IGN1cnJlbnRWO1xyXG4gICAgICAgICAgICB0ZXh0dXJlViArPSBjdXJyZW50VGV4dHVyZVY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHRleHQ6IHN0cmluZyA9IG91dHB1dC5qb2luKFwiXFxuXCIpO1xyXG4gICAgICAgIHJldHVybiB0ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRXhwb3J0cyB0aGUgbWF0ZXJpYWwocykgb2YgYSBtZXNoIGluIC5NVEwgZmlsZSBmb3JtYXQgKHRleHQpXHJcbiAgICAgKiBAcGFyYW0gbWVzaCBkZWZpbmVzIHRoZSBtZXNoIHRvIGV4dHJhY3QgdGhlIG1hdGVyaWFsIGZyb21cclxuICAgICAqIEByZXR1cm5zIHRoZSBtdGwgY29udGVudFxyXG4gICAgICovXHJcbiAgICAvL1RPRE86IEV4cG9ydCB0aGUgbWF0ZXJpYWxzIG9mIG1lc2ggYXJyYXlcclxuICAgIHB1YmxpYyBzdGF0aWMgTVRMKG1lc2g6IE1lc2gpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IG91dHB1dCA9IFtdO1xyXG4gICAgICAgIGNvbnN0IG0gPSA8U3RhbmRhcmRNYXRlcmlhbD5tZXNoLm1hdGVyaWFsO1xyXG4gICAgICAgIG91dHB1dC5wdXNoKFwibmV3bXRsIG1hdDFcIik7XHJcbiAgICAgICAgb3V0cHV0LnB1c2goXCIgIE5zIFwiICsgbS5zcGVjdWxhclBvd2VyLnRvRml4ZWQoNCkpO1xyXG4gICAgICAgIG91dHB1dC5wdXNoKFwiICBOaSAxLjUwMDBcIik7XHJcbiAgICAgICAgb3V0cHV0LnB1c2goXCIgIGQgXCIgKyBtLmFscGhhLnRvRml4ZWQoNCkpO1xyXG4gICAgICAgIG91dHB1dC5wdXNoKFwiICBUciAwLjAwMDBcIik7XHJcbiAgICAgICAgb3V0cHV0LnB1c2goXCIgIFRmIDEuMDAwMCAxLjAwMDAgMS4wMDAwXCIpO1xyXG4gICAgICAgIG91dHB1dC5wdXNoKFwiICBpbGx1bSAyXCIpO1xyXG4gICAgICAgIG91dHB1dC5wdXNoKFwiICBLYSBcIiArIG0uYW1iaWVudENvbG9yLnIudG9GaXhlZCg0KSArIFwiIFwiICsgbS5hbWJpZW50Q29sb3IuZy50b0ZpeGVkKDQpICsgXCIgXCIgKyBtLmFtYmllbnRDb2xvci5iLnRvRml4ZWQoNCkpO1xyXG4gICAgICAgIG91dHB1dC5wdXNoKFwiICBLZCBcIiArIG0uZGlmZnVzZUNvbG9yLnIudG9GaXhlZCg0KSArIFwiIFwiICsgbS5kaWZmdXNlQ29sb3IuZy50b0ZpeGVkKDQpICsgXCIgXCIgKyBtLmRpZmZ1c2VDb2xvci5iLnRvRml4ZWQoNCkpO1xyXG4gICAgICAgIG91dHB1dC5wdXNoKFwiICBLcyBcIiArIG0uc3BlY3VsYXJDb2xvci5yLnRvRml4ZWQoNCkgKyBcIiBcIiArIG0uc3BlY3VsYXJDb2xvci5nLnRvRml4ZWQoNCkgKyBcIiBcIiArIG0uc3BlY3VsYXJDb2xvci5iLnRvRml4ZWQoNCkpO1xyXG4gICAgICAgIG91dHB1dC5wdXNoKFwiICBLZSBcIiArIG0uZW1pc3NpdmVDb2xvci5yLnRvRml4ZWQoNCkgKyBcIiBcIiArIG0uZW1pc3NpdmVDb2xvci5nLnRvRml4ZWQoNCkgKyBcIiBcIiArIG0uZW1pc3NpdmVDb2xvci5iLnRvRml4ZWQoNCkpO1xyXG5cclxuICAgICAgICAvL1RPRE86IHV2IHNjYWxlLCBvZmZzZXQsIHdyYXBcclxuICAgICAgICAvL1RPRE86IFVWIG1pcnJvcmVkIGluIEJsZW5kZXI/IHNlY29uZCBVViBjaGFubmVsPyBsaWdodE1hcD8gcmVmbGVjdGlvbiB0ZXh0dXJlcz9cclxuICAgICAgICBjb25zdCB1dnNjYWxlID0gXCJcIjtcclxuXHJcbiAgICAgICAgaWYgKG0uYW1iaWVudFRleHR1cmUpIHtcclxuICAgICAgICAgICAgb3V0cHV0LnB1c2goXCIgIG1hcF9LYSBcIiArIHV2c2NhbGUgKyBtLmFtYmllbnRUZXh0dXJlLm5hbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG0uZGlmZnVzZVRleHR1cmUpIHtcclxuICAgICAgICAgICAgb3V0cHV0LnB1c2goXCIgIG1hcF9LZCBcIiArIHV2c2NhbGUgKyBtLmRpZmZ1c2VUZXh0dXJlLm5hbWUpO1xyXG4gICAgICAgICAgICAvL1RPRE86IGFscGhhIHRlc3RpbmcsIG9wYWNpdHkgaW4gZGlmZnVzZSB0ZXh0dXJlIGFscGhhIGNoYW5uZWwgKGRpZmZ1c2VUZXh0dXJlLmhhc0FscGhhIC0+IG1hcF9kKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG0uc3BlY3VsYXJUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgIG91dHB1dC5wdXNoKFwiICBtYXBfS3MgXCIgKyB1dnNjYWxlICsgbS5zcGVjdWxhclRleHR1cmUubmFtZSk7XHJcbiAgICAgICAgICAgIC8qIFRPRE86IGdsb3NzaW5lc3MgPSBzcGVjdWxhciBoaWdobGlnaHQgY29tcG9uZW50IGlzIGluIGFscGhhIGNoYW5uZWwgb2Ygc3BlY3VsYXJUZXh0dXJlLiAoPz8/KVxyXG4gICAgICAgICAgICBpZiAobS51c2VHbG9zc2luZXNzRnJvbVNwZWN1bGFyTWFwQWxwaGEpICB7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXQucHVzaChcIiAgbWFwX05zIFwiK3V2c2NhbGUgKyBtLnNwZWN1bGFyVGV4dHVyZS5uYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAqL1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogVE9ETzogZW1pc3NpdmUgdGV4dHVyZSBub3QgaW4gLk1BVCBmb3JtYXQgKD8/PylcclxuICAgICAgICBpZiAobS5lbWlzc2l2ZVRleHR1cmUpIHtcclxuICAgICAgICAgICAgb3V0cHV0LnB1c2goXCIgIG1hcF9kIFwiK3V2c2NhbGUrbS5lbWlzc2l2ZVRleHR1cmUubmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICovXHJcblxyXG4gICAgICAgIGlmIChtLmJ1bXBUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgIG91dHB1dC5wdXNoKFwiICBtYXBfYnVtcCAtaW1mY2hhbiB6IFwiICsgdXZzY2FsZSArIG0uYnVtcFRleHR1cmUubmFtZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobS5vcGFjaXR5VGV4dHVyZSkge1xyXG4gICAgICAgICAgICBvdXRwdXQucHVzaChcIiAgbWFwX2QgXCIgKyB1dnNjYWxlICsgbS5vcGFjaXR5VGV4dHVyZS5uYW1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHRleHQgPSBvdXRwdXQuam9pbihcIlxcblwiKTtcclxuICAgICAgICByZXR1cm4gdGV4dDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgdHlwZSB7IElCdWZmZXJWaWV3LCBJQWNjZXNzb3IsIElOb2RlLCBJRVhUTWVzaEdwdUluc3RhbmNpbmcgfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IEFjY2Vzc29yVHlwZSwgQWNjZXNzb3JDb21wb25lbnRUeXBlIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgdHlwZSB7IElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMiB9IGZyb20gXCIuLi9nbFRGRXhwb3J0ZXJFeHRlbnNpb25cIjtcclxuaW1wb3J0IHR5cGUgeyBfQmluYXJ5V3JpdGVyIH0gZnJvbSBcIi4uL2dsVEZFeHBvcnRlclwiO1xyXG5pbXBvcnQgeyBfRXhwb3J0ZXIgfSBmcm9tIFwiLi4vZ2xURkV4cG9ydGVyXCI7XHJcbmltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xyXG5pbXBvcnQgdHlwZSB7IE5vZGUgfSBmcm9tIFwiY29yZS9ub2RlXCI7XHJcbmltcG9ydCB7IE1lc2ggfSBmcm9tIFwiY29yZS9NZXNoZXMvbWVzaFwiO1xyXG5pbXBvcnQgXCJjb3JlL01lc2hlcy90aGluSW5zdGFuY2VNZXNoXCI7XHJcbmltcG9ydCB7IFRtcFZlY3RvcnMsIFF1YXRlcm5pb24sIFZlY3RvcjMgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLnZlY3RvclwiO1xyXG5pbXBvcnQgeyBWZXJ0ZXhCdWZmZXIgfSBmcm9tIFwiY29yZS9CdWZmZXJzL2J1ZmZlclwiO1xyXG5cclxuY29uc3QgTkFNRSA9IFwiRVhUX21lc2hfZ3B1X2luc3RhbmNpbmdcIjtcclxuXHJcbi8qKlxyXG4gKiBbU3BlY2lmaWNhdGlvbl0oaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFpbi9leHRlbnNpb25zLzIuMC9WZW5kb3IvRVhUX21lc2hfZ3B1X2luc3RhbmNpbmcvUkVBRE1FLm1kKVxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgY2xhc3MgRVhUX21lc2hfZ3B1X2luc3RhbmNpbmcgaW1wbGVtZW50cyBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIge1xyXG4gICAgLyoqIE5hbWUgb2YgdGhpcyBleHRlbnNpb24gKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lID0gTkFNRTtcclxuXHJcbiAgICAvKiogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIGVuYWJsZWQgKi9cclxuICAgIHB1YmxpYyBlbmFibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAvKiogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIHJlcXVpcmVkICovXHJcbiAgICBwdWJsaWMgcmVxdWlyZWQgPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIF9leHBvcnRlcjogX0V4cG9ydGVyO1xyXG5cclxuICAgIHByaXZhdGUgX3dhc1VzZWQgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihleHBvcnRlcjogX0V4cG9ydGVyKSB7XHJcbiAgICAgICAgdGhpcy5fZXhwb3J0ZXIgPSBleHBvcnRlcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHt9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGdldCB3YXNVc2VkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl93YXNVc2VkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWZ0ZXIgbm9kZSBpcyBleHBvcnRlZFxyXG4gICAgICogQHBhcmFtIGNvbnRleHQgdGhlIEdMVEYgY29udGV4dCB3aGVuIGxvYWRpbmcgdGhlIGFzc2V0XHJcbiAgICAgKiBAcGFyYW0gbm9kZSB0aGUgbm9kZSBleHBvcnRlZFxyXG4gICAgICogQHBhcmFtIGJhYnlsb25Ob2RlIHRoZSBjb3JyZXNwb25kaW5nIGJhYnlsb24gbm9kZVxyXG4gICAgICogQHBhcmFtIG5vZGVNYXAgbWFwIGZyb20gYmFieWxvbiBub2RlIGlkIHRvIG5vZGUgaW5kZXhcclxuICAgICAqIEBwYXJhbSBiaW5hcnlXcml0ZXIgYmluYXJ5IHdyaXRlclxyXG4gICAgICogQHJldHVybnMgbnVsbGFibGUgcHJvbWlzZSwgcmVzb2x2ZXMgd2l0aCB0aGUgbm9kZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcG9zdEV4cG9ydE5vZGVBc3luYyhcclxuICAgICAgICBjb250ZXh0OiBzdHJpbmcsXHJcbiAgICAgICAgbm9kZTogTnVsbGFibGU8SU5vZGU+LFxyXG4gICAgICAgIGJhYnlsb25Ob2RlOiBOb2RlLFxyXG4gICAgICAgIG5vZGVNYXA6IHsgW2tleTogbnVtYmVyXTogbnVtYmVyIH0sXHJcbiAgICAgICAgYmluYXJ5V3JpdGVyOiBfQmluYXJ5V3JpdGVyXHJcbiAgICApOiBQcm9taXNlPE51bGxhYmxlPElOb2RlPj4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobm9kZSAmJiBiYWJ5bG9uTm9kZSBpbnN0YW5jZW9mIE1lc2gpIHtcclxuICAgICAgICAgICAgICAgIGlmIChiYWJ5bG9uTm9kZS5oYXNUaGluSW5zdGFuY2VzICYmIGJpbmFyeVdyaXRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3dhc1VzZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBub1RyYW5zbGF0aW9uID0gVmVjdG9yMy5aZXJvKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm9Sb3RhdGlvbiA9IFF1YXRlcm5pb24uSWRlbnRpdHkoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBub1NjYWxlID0gVmVjdG9yMy5PbmUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcmV0cmlldmUgYWxsIHRoZSBpbnN0YW5jZSB3b3JsZCBtYXRyaXhcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRyaXggPSBiYWJ5bG9uTm9kZS50aGluSW5zdGFuY2VHZXRXb3JsZE1hdHJpY2VzKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGl3dCA9IFRtcFZlY3RvcnMuVmVjdG9yM1syXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpd3IgPSBUbXBWZWN0b3JzLlF1YXRlcm5pb25bMV07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXdzID0gVG1wVmVjdG9ycy5WZWN0b3IzWzNdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgaGFzQW55SW5zdGFuY2VXb3JsZFRyYW5zbGF0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGhhc0FueUluc3RhbmNlV29ybGRSb3RhdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBoYXNBbnlJbnN0YW5jZVdvcmxkU2NhbGUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcHJlcGFyZSB0ZW1wIGJ1ZmZlcnNcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0cmFuc2xhdGlvbkJ1ZmZlciA9IG5ldyBGbG9hdDMyQXJyYXkoYmFieWxvbk5vZGUudGhpbkluc3RhbmNlQ291bnQgKiAzKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByb3RhdGlvbkJ1ZmZlciA9IG5ldyBGbG9hdDMyQXJyYXkoYmFieWxvbk5vZGUudGhpbkluc3RhbmNlQ291bnQgKiA0KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzY2FsZUJ1ZmZlciA9IG5ldyBGbG9hdDMyQXJyYXkoYmFieWxvbk5vZGUudGhpbkluc3RhbmNlQ291bnQgKiAzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgbSBvZiBtYXRyaXgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbS5kZWNvbXBvc2UoaXdzLCBpd3IsIGl3dCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBmaWxsIHRoZSB0ZW1wIGJ1ZmZlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGlvbkJ1ZmZlci5zZXQoaXd0LmFzQXJyYXkoKSwgaSAqIDMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3RhdGlvbkJ1ZmZlci5zZXQoaXdyLm5vcm1hbGl6ZSgpLmFzQXJyYXkoKSwgaSAqIDQpOyAvLyBlbnN1cmUgdGhlIHF1YXRlcm5pb24gaXMgbm9ybWFsaXplZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY2FsZUJ1ZmZlci5zZXQoaXdzLmFzQXJyYXkoKSwgaSAqIDMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyBpcyB3aGVyZSB3ZSBkZWNpZGUgaWYgdGhlcmUgaXMgYW55IHRyYW5zZm9ybWF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhc0FueUluc3RhbmNlV29ybGRUcmFuc2xhdGlvbiA9IGhhc0FueUluc3RhbmNlV29ybGRUcmFuc2xhdGlvbiB8fCAhaXd0LmVxdWFsc1dpdGhFcHNpbG9uKG5vVHJhbnNsYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYXNBbnlJbnN0YW5jZVdvcmxkUm90YXRpb24gPSBoYXNBbnlJbnN0YW5jZVdvcmxkUm90YXRpb24gfHwgIWl3ci5lcXVhbHNXaXRoRXBzaWxvbihub1JvdGF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFzQW55SW5zdGFuY2VXb3JsZFNjYWxlID0gaGFzQW55SW5zdGFuY2VXb3JsZFNjYWxlIHx8ICFpd3MuZXF1YWxzV2l0aEVwc2lsb24obm9TY2FsZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBleHRlbnNpb246IElFWFRNZXNoR3B1SW5zdGFuY2luZyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlczoge30sXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZG8gd2UgbmVlZCB0byB3cml0ZSBUUkFOU0xBVElPTiA/XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhhc0FueUluc3RhbmNlV29ybGRUcmFuc2xhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHRlbnNpb24uYXR0cmlidXRlc1tcIlRSQU5TTEFUSU9OXCJdID0gdGhpcy5fYnVpbGRBY2Nlc3NvcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0aW9uQnVmZmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQWNjZXNzb3JUeXBlLlZFQzMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uTm9kZS50aGluSW5zdGFuY2VDb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpbmFyeVdyaXRlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFjY2Vzc29yQ29tcG9uZW50VHlwZS5GTE9BVFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBkbyB3ZSBuZWVkIHRvIHdyaXRlIFJPVEFUSU9OID9cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaGFzQW55SW5zdGFuY2VXb3JsZFJvdGF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudFR5cGUgPSBBY2Nlc3NvckNvbXBvbmVudFR5cGUuRkxPQVQ7IC8vIHdlIGRlY2lkZWQgdG8gc3RheSBvbiBGTE9BVCBmb3Igbm93IHNlZSBodHRwczovL2dpdGh1Yi5jb20vQmFieWxvbkpTL0JhYnlsb24uanMvcHVsbC8xMjQ5NVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHRlbnNpb24uYXR0cmlidXRlc1tcIlJPVEFUSU9OXCJdID0gdGhpcy5fYnVpbGRBY2Nlc3Nvcihyb3RhdGlvbkJ1ZmZlciwgQWNjZXNzb3JUeXBlLlZFQzQsIGJhYnlsb25Ob2RlLnRoaW5JbnN0YW5jZUNvdW50LCBiaW5hcnlXcml0ZXIsIGNvbXBvbmVudFR5cGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBkbyB3ZSBuZWVkIHRvIHdyaXRlIFNDQUxFID9cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaGFzQW55SW5zdGFuY2VXb3JsZFNjYWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4dGVuc2lvbi5hdHRyaWJ1dGVzW1wiU0NBTEVcIl0gPSB0aGlzLl9idWlsZEFjY2Vzc29yKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGVCdWZmZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBY2Nlc3NvclR5cGUuVkVDMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhYnlsb25Ob2RlLnRoaW5JbnN0YW5jZUNvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmluYXJ5V3JpdGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQWNjZXNzb3JDb21wb25lbnRUeXBlLkZMT0FUXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiovXHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5leHRlbnNpb25zID0gbm9kZS5leHRlbnNpb25zIHx8IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuZXh0ZW5zaW9uc1tOQU1FXSA9IGV4dGVuc2lvbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXNvbHZlKG5vZGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2J1aWxkQWNjZXNzb3IoYnVmZmVyOiBGbG9hdDMyQXJyYXksIHR5cGU6IEFjY2Vzc29yVHlwZSwgY291bnQ6IG51bWJlciwgYmluYXJ5V3JpdGVyOiBfQmluYXJ5V3JpdGVyLCBjb21wb25lbnRUeXBlOiBBY2Nlc3NvckNvbXBvbmVudFR5cGUpOiBudW1iZXIge1xyXG4gICAgICAgIC8vIHdyaXRlIHRoZSBidWZmZXJcclxuICAgICAgICBjb25zdCBidWZmZXJPZmZzZXQgPSBiaW5hcnlXcml0ZXIuZ2V0Qnl0ZU9mZnNldCgpO1xyXG4gICAgICAgIHN3aXRjaCAoY29tcG9uZW50VHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIEFjY2Vzc29yQ29tcG9uZW50VHlwZS5GTE9BVDoge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgIT0gYnVmZmVyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmluYXJ5V3JpdGVyLnNldEZsb2F0MzIoYnVmZmVyW2ldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgQWNjZXNzb3JDb21wb25lbnRUeXBlLkJZVEU6IHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpICE9IGJ1ZmZlci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGJpbmFyeVdyaXRlci5zZXRCeXRlKGJ1ZmZlcltpXSAqIDEyNyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIEFjY2Vzc29yQ29tcG9uZW50VHlwZS5TSE9SVDoge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgIT0gYnVmZmVyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmluYXJ5V3JpdGVyLnNldEludDE2KGJ1ZmZlcltpXSAqIDMyNzY3KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBidWlsZCB0aGUgYnVmZmVyIHZpZXdcclxuICAgICAgICBjb25zdCBidjogSUJ1ZmZlclZpZXcgPSB7IGJ1ZmZlcjogMCwgYnl0ZU9mZnNldDogYnVmZmVyT2Zmc2V0LCBieXRlTGVuZ3RoOiBidWZmZXIubGVuZ3RoICogVmVydGV4QnVmZmVyLkdldFR5cGVCeXRlTGVuZ3RoKGNvbXBvbmVudFR5cGUpIH07XHJcbiAgICAgICAgY29uc3QgYnVmZmVyVmlld0luZGV4ID0gdGhpcy5fZXhwb3J0ZXIuX2J1ZmZlclZpZXdzLmxlbmd0aDtcclxuICAgICAgICB0aGlzLl9leHBvcnRlci5fYnVmZmVyVmlld3MucHVzaChidik7XHJcblxyXG4gICAgICAgIC8vIGZpbmFsbHkgYnVpbGQgdGhlIGFjY2Vzc29yXHJcbiAgICAgICAgY29uc3QgYWNjZXNzb3JJbmRleCA9IHRoaXMuX2V4cG9ydGVyLl9hY2Nlc3NvcnMubGVuZ3RoO1xyXG4gICAgICAgIGNvbnN0IGFjY2Vzc29yOiBJQWNjZXNzb3IgPSB7XHJcbiAgICAgICAgICAgIGJ1ZmZlclZpZXc6IGJ1ZmZlclZpZXdJbmRleCxcclxuICAgICAgICAgICAgY29tcG9uZW50VHlwZTogY29tcG9uZW50VHlwZSxcclxuICAgICAgICAgICAgY291bnQ6IGNvdW50LFxyXG4gICAgICAgICAgICB0eXBlOiB0eXBlLFxyXG4gICAgICAgICAgICBub3JtYWxpemVkOiBjb21wb25lbnRUeXBlID09IEFjY2Vzc29yQ29tcG9uZW50VHlwZS5CWVRFIHx8IGNvbXBvbmVudFR5cGUgPT0gQWNjZXNzb3JDb21wb25lbnRUeXBlLlNIT1JULFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5fZXhwb3J0ZXIuX2FjY2Vzc29ycy5wdXNoKGFjY2Vzc29yKTtcclxuICAgICAgICByZXR1cm4gYWNjZXNzb3JJbmRleDtcclxuICAgIH1cclxufVxyXG5cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xyXG5fRXhwb3J0ZXIuUmVnaXN0ZXJFeHRlbnNpb24oTkFNRSwgKGV4cG9ydGVyKSA9PiBuZXcgRVhUX21lc2hfZ3B1X2luc3RhbmNpbmcoZXhwb3J0ZXIpKTtcclxuIiwiaW1wb3J0IHR5cGUgeyBTcG90TGlnaHQgfSBmcm9tIFwiY29yZS9MaWdodHMvc3BvdExpZ2h0XCI7XHJcbmltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xyXG5pbXBvcnQgeyBWZWN0b3IzLCBRdWF0ZXJuaW9uLCBUbXBWZWN0b3JzLCBNYXRyaXggfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLnZlY3RvclwiO1xyXG5pbXBvcnQgeyBDb2xvcjMgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLmNvbG9yXCI7XHJcbmltcG9ydCB7IExpZ2h0IH0gZnJvbSBcImNvcmUvTGlnaHRzL2xpZ2h0XCI7XHJcbmltcG9ydCB0eXBlIHsgTm9kZSB9IGZyb20gXCJjb3JlL25vZGVcIjtcclxuaW1wb3J0IHsgU2hhZG93TGlnaHQgfSBmcm9tIFwiY29yZS9MaWdodHMvc2hhZG93TGlnaHRcIjtcclxuaW1wb3J0IHR5cGUgeyBJTm9kZSwgSUtIUkxpZ2h0c1B1bmN0dWFsX0xpZ2h0UmVmZXJlbmNlLCBJS0hSTGlnaHRzUHVuY3R1YWxfTGlnaHQsIElLSFJMaWdodHNQdW5jdHVhbCB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgS0hSTGlnaHRzUHVuY3R1YWxfTGlnaHRUeXBlIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgdHlwZSB7IElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMiB9IGZyb20gXCIuLi9nbFRGRXhwb3J0ZXJFeHRlbnNpb25cIjtcclxuaW1wb3J0IHsgX0V4cG9ydGVyIH0gZnJvbSBcIi4uL2dsVEZFeHBvcnRlclwiO1xyXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiY29yZS9NaXNjL2xvZ2dlclwiO1xyXG5pbXBvcnQgeyBfR0xURlV0aWxpdGllcyB9IGZyb20gXCIuLi9nbFRGVXRpbGl0aWVzXCI7XHJcblxyXG5jb25zdCBOQU1FID0gXCJLSFJfbGlnaHRzX3B1bmN0dWFsXCI7XHJcblxyXG4vKipcclxuICogW1NwZWNpZmljYXRpb25dKGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9ibG9iL21hc3Rlci9leHRlbnNpb25zLzIuMC9LaHJvbm9zL0tIUl9saWdodHNfcHVuY3R1YWwvUkVBRE1FLm1kKVxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgY2xhc3MgS0hSX2xpZ2h0c19wdW5jdHVhbCBpbXBsZW1lbnRzIElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMiB7XHJcbiAgICAvKiogVGhlIG5hbWUgb2YgdGhpcyBleHRlbnNpb24uICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZSA9IE5BTUU7XHJcblxyXG4gICAgLyoqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyBlbmFibGVkLiAqL1xyXG4gICAgcHVibGljIGVuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgIC8qKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgcmVxdWlyZWQgKi9cclxuICAgIHB1YmxpYyByZXF1aXJlZCA9IGZhbHNlO1xyXG5cclxuICAgIC8qKiBSZWZlcmVuY2UgdG8gdGhlIGdsVEYgZXhwb3J0ZXIgKi9cclxuICAgIHByaXZhdGUgX2V4cG9ydGVyOiBfRXhwb3J0ZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBfbGlnaHRzOiBJS0hSTGlnaHRzUHVuY3R1YWw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoZXhwb3J0ZXI6IF9FeHBvcnRlcikge1xyXG4gICAgICAgIHRoaXMuX2V4cG9ydGVyID0gZXhwb3J0ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgKHRoaXMuX2xpZ2h0cyBhcyBhbnkpID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgZ2V0IHdhc1VzZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fbGlnaHRzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBvbkV4cG9ydGluZygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9leHBvcnRlciEuX2dsVEYuZXh0ZW5zaW9ucyFbTkFNRV0gPSB0aGlzLl9saWdodHM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIERlZmluZSB0aGlzIG1ldGhvZCB0byBtb2RpZnkgdGhlIGRlZmF1bHQgYmVoYXZpb3Igd2hlbiBleHBvcnRpbmcgYSBub2RlXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBUaGUgY29udGV4dCB3aGVuIGV4cG9ydGluZyB0aGUgbm9kZVxyXG4gICAgICogQHBhcmFtIG5vZGUgZ2xURiBub2RlXHJcbiAgICAgKiBAcGFyYW0gYmFieWxvbk5vZGUgQmFieWxvbkpTIG5vZGVcclxuICAgICAqIEBwYXJhbSBub2RlTWFwIE5vZGUgbWFwcGluZyBvZiB1bmlxdWUgaWQgdG8gZ2xURiBub2RlIGluZGV4XHJcbiAgICAgKiBAcmV0dXJucyBudWxsYWJsZSBJTm9kZSBwcm9taXNlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwb3N0RXhwb3J0Tm9kZUFzeW5jKGNvbnRleHQ6IHN0cmluZywgbm9kZTogTnVsbGFibGU8SU5vZGU+LCBiYWJ5bG9uTm9kZTogTm9kZSwgbm9kZU1hcDogeyBba2V5OiBudW1iZXJdOiBudW1iZXIgfSk6IFByb21pc2U8TnVsbGFibGU8SU5vZGU+PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChub2RlICYmIGJhYnlsb25Ob2RlIGluc3RhbmNlb2YgU2hhZG93TGlnaHQpIHtcclxuICAgICAgICAgICAgICAgIGxldCBsaWdodDogSUtIUkxpZ2h0c1B1bmN0dWFsX0xpZ2h0O1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGxpZ2h0VHlwZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgYmFieWxvbk5vZGUuZ2V0VHlwZUlEKCkgPT0gTGlnaHQuTElHSFRUWVBFSURfUE9JTlRMSUdIVFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IEtIUkxpZ2h0c1B1bmN0dWFsX0xpZ2h0VHlwZS5QT0lOVFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGJhYnlsb25Ob2RlLmdldFR5cGVJRCgpID09IExpZ2h0LkxJR0hUVFlQRUlEX0RJUkVDVElPTkFMTElHSFRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IEtIUkxpZ2h0c1B1bmN0dWFsX0xpZ2h0VHlwZS5ESVJFQ1RJT05BTFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogYmFieWxvbk5vZGUuZ2V0VHlwZUlEKCkgPT0gTGlnaHQuTElHSFRUWVBFSURfU1BPVExJR0hUXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IEtIUkxpZ2h0c1B1bmN0dWFsX0xpZ2h0VHlwZS5TUE9UXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICBpZiAobGlnaHRUeXBlID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2dnZXIuV2FybihgJHtjb250ZXh0fTogTGlnaHQgJHtiYWJ5bG9uTm9kZS5uYW1lfSBpcyBub3Qgc3VwcG9ydGVkIGluICR7TkFNRX1gKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFiYWJ5bG9uTm9kZS5wb3NpdGlvbi5lcXVhbHNUb0Zsb2F0cygwLCAwLCAwKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnRyYW5zbGF0aW9uID0gYmFieWxvbk5vZGUucG9zaXRpb24uYXNBcnJheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAobGlnaHRUeXBlICE9PSBLSFJMaWdodHNQdW5jdHVhbF9MaWdodFR5cGUuUE9JTlQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbG9jYWxBeGlzID0gYmFieWxvbk5vZGUuZGlyZWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB5YXcgPSAtTWF0aC5hdGFuMihsb2NhbEF4aXMueiwgbG9jYWxBeGlzLngpICsgTWF0aC5QSSAvIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxlbiA9IE1hdGguc3FydChsb2NhbEF4aXMueCAqIGxvY2FsQXhpcy54ICsgbG9jYWxBeGlzLnogKiBsb2NhbEF4aXMueik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBpdGNoID0gLU1hdGguYXRhbjIobG9jYWxBeGlzLnksIGxlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpZ2h0Um90YXRpb25RdWF0ZXJuaW9uID0gUXVhdGVybmlvbi5Sb3RhdGlvbllhd1BpdGNoUm9sbCh5YXcgKyBNYXRoLlBJLCBwaXRjaCwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghUXVhdGVybmlvbi5Jc0lkZW50aXR5KGxpZ2h0Um90YXRpb25RdWF0ZXJuaW9uKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5yb3RhdGlvbiA9IGxpZ2h0Um90YXRpb25RdWF0ZXJuaW9uLmFzQXJyYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJhYnlsb25Ob2RlLmZhbGxvZmZUeXBlICE9PSBMaWdodC5GQUxMT0ZGX0dMVEYpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9nZ2VyLldhcm4oYCR7Y29udGV4dH06IExpZ2h0IGZhbGxvZmYgZm9yICR7YmFieWxvbk5vZGUubmFtZX0gZG9lcyBub3QgbWF0Y2ggdGhlICR7TkFNRX0gc3BlY2lmaWNhdGlvbiFgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbGlnaHQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGxpZ2h0VHlwZSxcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghYmFieWxvbk5vZGUuZGlmZnVzZS5lcXVhbHMoQ29sb3IzLldoaXRlKCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpZ2h0LmNvbG9yID0gYmFieWxvbk5vZGUuZGlmZnVzZS5hc0FycmF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChiYWJ5bG9uTm9kZS5pbnRlbnNpdHkgIT09IDEuMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaWdodC5pbnRlbnNpdHkgPSBiYWJ5bG9uTm9kZS5pbnRlbnNpdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChiYWJ5bG9uTm9kZS5yYW5nZSAhPT0gTnVtYmVyLk1BWF9WQUxVRSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaWdodC5yYW5nZSA9IGJhYnlsb25Ob2RlLnJhbmdlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxpZ2h0VHlwZSA9PT0gS0hSTGlnaHRzUHVuY3R1YWxfTGlnaHRUeXBlLlNQT1QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmFieWxvblNwb3RMaWdodCA9IGJhYnlsb25Ob2RlIGFzIFNwb3RMaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJhYnlsb25TcG90TGlnaHQuYW5nbGUgIT09IE1hdGguUEkgLyAyLjApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsaWdodC5zcG90ID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaWdodC5zcG90ID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaWdodC5zcG90Lm91dGVyQ29uZUFuZ2xlID0gYmFieWxvblNwb3RMaWdodC5hbmdsZSAvIDIuMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmFieWxvblNwb3RMaWdodC5pbm5lckFuZ2xlICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGlnaHQuc3BvdCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlnaHQuc3BvdCA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlnaHQuc3BvdC5pbm5lckNvbmVBbmdsZSA9IGJhYnlsb25TcG90TGlnaHQuaW5uZXJBbmdsZSAvIDIuMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbGlnaHRzIHx8PSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpZ2h0czogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbGlnaHRzLmxpZ2h0cy5wdXNoKGxpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGlnaHRSZWZlcmVuY2U6IElLSFJMaWdodHNQdW5jdHVhbF9MaWdodFJlZmVyZW5jZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlnaHQ6IHRoaXMuX2xpZ2h0cy5saWdodHMubGVuZ3RoIC0gMSxcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBBdm9pZCBkdXBsaWNhdGluZyB0aGUgTGlnaHQncyBwYXJlbnQgbm9kZSBpZiBwb3NzaWJsZS5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnRCYWJ5bG9uTm9kZSA9IGJhYnlsb25Ob2RlLnBhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocGFyZW50QmFieWxvbk5vZGUgJiYgcGFyZW50QmFieWxvbk5vZGUuZ2V0Q2hpbGRyZW4oKS5sZW5ndGggPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnROb2RlID0gdGhpcy5fZXhwb3J0ZXIuX25vZGVzW25vZGVNYXBbcGFyZW50QmFieWxvbk5vZGUudW5pcXVlSWRdXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmVudE5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudFRyYW5zbGF0aW9uID0gVmVjdG9yMy5Gcm9tQXJyYXlUb1JlZihwYXJlbnROb2RlLnRyYW5zbGF0aW9uIHx8IFswLCAwLCAwXSwgMCwgVG1wVmVjdG9ycy5WZWN0b3IzWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudFJvdGF0aW9uID0gUXVhdGVybmlvbi5Gcm9tQXJyYXlUb1JlZihwYXJlbnROb2RlLnJvdGF0aW9uIHx8IFswLCAwLCAwLCAxXSwgMCwgVG1wVmVjdG9ycy5RdWF0ZXJuaW9uWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudFNjYWxlID0gVmVjdG9yMy5Gcm9tQXJyYXlUb1JlZihwYXJlbnROb2RlLnNjYWxlIHx8IFsxLCAxLCAxXSwgMCwgVG1wVmVjdG9ycy5WZWN0b3IzWzFdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudE1hdHJpeCA9IE1hdHJpeC5Db21wb3NlVG9SZWYocGFyZW50U2NhbGUsIHBhcmVudFJvdGF0aW9uLCBwYXJlbnRUcmFuc2xhdGlvbiwgVG1wVmVjdG9ycy5NYXRyaXhbMF0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zbGF0aW9uID0gVmVjdG9yMy5Gcm9tQXJyYXlUb1JlZihub2RlLnRyYW5zbGF0aW9uIHx8IFswLCAwLCAwXSwgMCwgVG1wVmVjdG9ycy5WZWN0b3IzWzJdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvdGF0aW9uID0gUXVhdGVybmlvbi5Gcm9tQXJyYXlUb1JlZihub2RlLnJvdGF0aW9uIHx8IFswLCAwLCAwLCAxXSwgMCwgVG1wVmVjdG9ycy5RdWF0ZXJuaW9uWzFdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdHJpeCA9IE1hdHJpeC5Db21wb3NlVG9SZWYoVmVjdG9yMy5PbmVSZWFkT25seSwgcm90YXRpb24sIHRyYW5zbGF0aW9uLCBUbXBWZWN0b3JzLk1hdHJpeFsxXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50TWF0cml4Lm11bHRpcGx5VG9SZWYobWF0cml4LCBtYXRyaXgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0cml4LmRlY29tcG9zZShwYXJlbnRTY2FsZSwgcGFyZW50Um90YXRpb24sIHBhcmVudFRyYW5zbGF0aW9uKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyZW50VHJhbnNsYXRpb24uZXF1YWxzVG9GbG9hdHMoMCwgMCwgMCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgcGFyZW50Tm9kZS50cmFuc2xhdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Tm9kZS50cmFuc2xhdGlvbiA9IHBhcmVudFRyYW5zbGF0aW9uLmFzQXJyYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoUXVhdGVybmlvbi5Jc0lkZW50aXR5KHBhcmVudFJvdGF0aW9uKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBwYXJlbnROb2RlLnJvdGF0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnROb2RlLnJvdGF0aW9uID0gcGFyZW50Um90YXRpb24uYXNBcnJheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJlbnRTY2FsZS5lcXVhbHNUb0Zsb2F0cygxLCAxLCAxKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBwYXJlbnROb2RlLnNjYWxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnROb2RlLnNjYWxlID0gcGFyZW50U2NhbGUuYXNBcnJheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudE5vZGUuZXh0ZW5zaW9ucyB8fD0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnROb2RlLmV4dGVuc2lvbnNbTkFNRV0gPSBsaWdodFJlZmVyZW5jZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBEbyBub3QgZXhwb3J0IHRoZSBvcmlnaW5hbCBub2RlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBub2RlLmV4dGVuc2lvbnMgfHw9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuZXh0ZW5zaW9uc1tOQU1FXSA9IGxpZ2h0UmVmZXJlbmNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc29sdmUobm9kZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbl9FeHBvcnRlci5SZWdpc3RlckV4dGVuc2lvbihOQU1FLCAoZXhwb3J0ZXIpID0+IG5ldyBLSFJfbGlnaHRzX3B1bmN0dWFsKGV4cG9ydGVyKSk7XHJcbiIsImltcG9ydCB0eXBlIHsgSU1hdGVyaWFsLCBJS0hSTWF0ZXJpYWxzQW5pc290cm9weSB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHR5cGUgeyBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIgfSBmcm9tIFwiLi4vZ2xURkV4cG9ydGVyRXh0ZW5zaW9uXCI7XHJcbmltcG9ydCB7IF9FeHBvcnRlciB9IGZyb20gXCIuLi9nbFRGRXhwb3J0ZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBQQlJCYXNlTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvUEJSL3BickJhc2VNYXRlcmlhbFwiO1xyXG5pbXBvcnQgdHlwZSB7IEJhc2VUZXh0dXJlIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1RleHR1cmVzL2Jhc2VUZXh0dXJlXCI7XHJcblxyXG5jb25zdCBOQU1FID0gXCJLSFJfbWF0ZXJpYWxzX2FuaXNvdHJvcHlcIjtcclxuXHJcbi8qKlxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGNsYXNzIEtIUl9tYXRlcmlhbHNfYW5pc290cm9weSBpbXBsZW1lbnRzIElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMiB7XHJcbiAgICAvKiogTmFtZSBvZiB0aGlzIGV4dGVuc2lvbiAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBOQU1FO1xyXG5cclxuICAgIC8qKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgZW5hYmxlZCAqL1xyXG4gICAgcHVibGljIGVuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgIC8qKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgcmVxdWlyZWQgKi9cclxuICAgIHB1YmxpYyByZXF1aXJlZCA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgX2V4cG9ydGVyOiBfRXhwb3J0ZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBfd2FzVXNlZCA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGV4cG9ydGVyOiBfRXhwb3J0ZXIpIHtcclxuICAgICAgICB0aGlzLl9leHBvcnRlciA9IGV4cG9ydGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge31cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgZ2V0IHdhc1VzZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dhc1VzZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBvc3RFeHBvcnRNYXRlcmlhbEFkZGl0aW9uYWxUZXh0dXJlcz8oY29udGV4dDogc3RyaW5nLCBub2RlOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBCYXNlVGV4dHVyZVtdIHtcclxuICAgICAgICBjb25zdCBhZGRpdGlvbmFsVGV4dHVyZXM6IEJhc2VUZXh0dXJlW10gPSBbXTtcclxuICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsIGluc3RhbmNlb2YgUEJSQmFzZU1hdGVyaWFsKSB7XHJcbiAgICAgICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwuYW5pc290cm9weS5pc0VuYWJsZWQgJiYgIWJhYnlsb25NYXRlcmlhbC5hbmlzb3Ryb3B5LmxlZ2FjeSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbC5hbmlzb3Ryb3B5LnRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRpdGlvbmFsVGV4dHVyZXMucHVzaChiYWJ5bG9uTWF0ZXJpYWwuYW5pc290cm9weS50ZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBhZGRpdGlvbmFsVGV4dHVyZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcG9zdEV4cG9ydE1hdGVyaWFsQXN5bmM/KGNvbnRleHQ6IHN0cmluZywgbm9kZTogSU1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsKTogUHJvbWlzZTxJTWF0ZXJpYWw+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbCBpbnN0YW5jZW9mIFBCUkJhc2VNYXRlcmlhbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFiYWJ5bG9uTWF0ZXJpYWwuYW5pc290cm9weS5pc0VuYWJsZWQgfHwgYmFieWxvbk1hdGVyaWFsLmFuaXNvdHJvcHkubGVnYWN5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShub2RlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5fd2FzVXNlZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgbm9kZS5leHRlbnNpb25zID0gbm9kZS5leHRlbnNpb25zIHx8IHt9O1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGFuaXNvdHJvcHlUZXh0dXJlSW5mbyA9IHRoaXMuX2V4cG9ydGVyLl9nbFRGTWF0ZXJpYWxFeHBvcnRlci5fZ2V0VGV4dHVyZUluZm8oYmFieWxvbk1hdGVyaWFsLmFuaXNvdHJvcHkudGV4dHVyZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgYW5pc290cm9weUluZm86IElLSFJNYXRlcmlhbHNBbmlzb3Ryb3B5ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaXNvdHJvcHlTdHJlbmd0aDogYmFieWxvbk1hdGVyaWFsLmFuaXNvdHJvcHkuaW50ZW5zaXR5LFxyXG4gICAgICAgICAgICAgICAgICAgIGFuaXNvdHJvcHlSb3RhdGlvbjogYmFieWxvbk1hdGVyaWFsLmFuaXNvdHJvcHkuYW5nbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgYW5pc290cm9weVRleHR1cmU6IGFuaXNvdHJvcHlUZXh0dXJlSW5mbyA/PyB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgaGFzVGV4dHVyZXM6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFuaXNvdHJvcHlJbmZvLmFuaXNvdHJvcHlUZXh0dXJlICE9PSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIG5vZGUuZXh0ZW5zaW9uc1tOQU1FXSA9IGFuaXNvdHJvcHlJbmZvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc29sdmUobm9kZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbl9FeHBvcnRlci5SZWdpc3RlckV4dGVuc2lvbihOQU1FLCAoZXhwb3J0ZXIpID0+IG5ldyBLSFJfbWF0ZXJpYWxzX2FuaXNvdHJvcHkoZXhwb3J0ZXIpKTtcclxuIiwiaW1wb3J0IHR5cGUgeyBJTWF0ZXJpYWwsIElLSFJNYXRlcmlhbHNDbGVhcmNvYXQgfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB0eXBlIHsgSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyIH0gZnJvbSBcIi4uL2dsVEZFeHBvcnRlckV4dGVuc2lvblwiO1xyXG5pbXBvcnQgeyBfRXhwb3J0ZXIgfSBmcm9tIFwiLi4vZ2xURkV4cG9ydGVyXCI7XHJcbmltcG9ydCB0eXBlIHsgTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgUEJSQmFzZU1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1BCUi9wYnJCYXNlTWF0ZXJpYWxcIjtcclxuaW1wb3J0IHR5cGUgeyBCYXNlVGV4dHVyZSB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9UZXh0dXJlcy9iYXNlVGV4dHVyZVwiO1xyXG5cclxuaW1wb3J0IHsgVG9vbHMgfSBmcm9tIFwiY29yZS9NaXNjL3Rvb2xzXCI7XHJcblxyXG5jb25zdCBOQU1FID0gXCJLSFJfbWF0ZXJpYWxzX2NsZWFyY29hdFwiO1xyXG5cclxuLyoqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgY2xhc3MgS0hSX21hdGVyaWFsc19jbGVhcmNvYXQgaW1wbGVtZW50cyBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIge1xyXG4gICAgLyoqIE5hbWUgb2YgdGhpcyBleHRlbnNpb24gKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lID0gTkFNRTtcclxuXHJcbiAgICAvKiogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIGVuYWJsZWQgKi9cclxuICAgIHB1YmxpYyBlbmFibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAvKiogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIHJlcXVpcmVkICovXHJcbiAgICBwdWJsaWMgcmVxdWlyZWQgPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIF9leHBvcnRlcjogX0V4cG9ydGVyO1xyXG5cclxuICAgIHByaXZhdGUgX3dhc1VzZWQgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihleHBvcnRlcjogX0V4cG9ydGVyKSB7XHJcbiAgICAgICAgdGhpcy5fZXhwb3J0ZXIgPSBleHBvcnRlcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHt9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGdldCB3YXNVc2VkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl93YXNVc2VkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwb3N0RXhwb3J0TWF0ZXJpYWxBZGRpdGlvbmFsVGV4dHVyZXM/KGNvbnRleHQ6IHN0cmluZywgbm9kZTogSU1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsKTogQmFzZVRleHR1cmVbXSB7XHJcbiAgICAgICAgY29uc3QgYWRkaXRpb25hbFRleHR1cmVzOiBCYXNlVGV4dHVyZVtdID0gW107XHJcbiAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbCBpbnN0YW5jZW9mIFBCUkJhc2VNYXRlcmlhbCkge1xyXG4gICAgICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsLmNsZWFyQ29hdC5pc0VuYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwuY2xlYXJDb2F0LnRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRpdGlvbmFsVGV4dHVyZXMucHVzaChiYWJ5bG9uTWF0ZXJpYWwuY2xlYXJDb2F0LnRleHR1cmUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCFiYWJ5bG9uTWF0ZXJpYWwuY2xlYXJDb2F0LnVzZVJvdWdobmVzc0Zyb21NYWluVGV4dHVyZSAmJiBiYWJ5bG9uTWF0ZXJpYWwuY2xlYXJDb2F0LnRleHR1cmVSb3VnaG5lc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRpdGlvbmFsVGV4dHVyZXMucHVzaChiYWJ5bG9uTWF0ZXJpYWwuY2xlYXJDb2F0LnRleHR1cmVSb3VnaG5lc3MpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbC5jbGVhckNvYXQuYnVtcFRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRpdGlvbmFsVGV4dHVyZXMucHVzaChiYWJ5bG9uTWF0ZXJpYWwuY2xlYXJDb2F0LmJ1bXBUZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBhZGRpdGlvbmFsVGV4dHVyZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcG9zdEV4cG9ydE1hdGVyaWFsQXN5bmM/KGNvbnRleHQ6IHN0cmluZywgbm9kZTogSU1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsKTogUHJvbWlzZTxJTWF0ZXJpYWw+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbCBpbnN0YW5jZW9mIFBCUkJhc2VNYXRlcmlhbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFiYWJ5bG9uTWF0ZXJpYWwuY2xlYXJDb2F0LmlzRW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUobm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX3dhc1VzZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIG5vZGUuZXh0ZW5zaW9ucyA9IG5vZGUuZXh0ZW5zaW9ucyB8fCB7fTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjbGVhckNvYXRUZXh0dXJlSW5mbyA9IHRoaXMuX2V4cG9ydGVyLl9nbFRGTWF0ZXJpYWxFeHBvcnRlci5fZ2V0VGV4dHVyZUluZm8oYmFieWxvbk1hdGVyaWFsLmNsZWFyQ29hdC50ZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgIGxldCBjbGVhckNvYXRUZXh0dXJlUm91Z2huZXNzSW5mbztcclxuICAgICAgICAgICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwuY2xlYXJDb2F0LnVzZVJvdWdobmVzc0Zyb21NYWluVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyQ29hdFRleHR1cmVSb3VnaG5lc3NJbmZvID0gdGhpcy5fZXhwb3J0ZXIuX2dsVEZNYXRlcmlhbEV4cG9ydGVyLl9nZXRUZXh0dXJlSW5mbyhiYWJ5bG9uTWF0ZXJpYWwuY2xlYXJDb2F0LnRleHR1cmUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhckNvYXRUZXh0dXJlUm91Z2huZXNzSW5mbyA9IHRoaXMuX2V4cG9ydGVyLl9nbFRGTWF0ZXJpYWxFeHBvcnRlci5fZ2V0VGV4dHVyZUluZm8oYmFieWxvbk1hdGVyaWFsLmNsZWFyQ29hdC50ZXh0dXJlUm91Z2huZXNzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsLmNsZWFyQ29hdC5pc1RpbnRFbmFibGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgVG9vbHMuV2FybihgQ2xlYXIgQ29sb3IgdGludCBpcyBub3Qgc3VwcG9ydGVkIGZvciBnbFRGIGV4cG9ydC4gSWdub3JpbmcgZm9yOiAke2JhYnlsb25NYXRlcmlhbC5uYW1lfWApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwuY2xlYXJDb2F0LnJlbWFwRjBPbkludGVyZmFjZUNoYW5nZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIFRvb2xzLldhcm4oYENsZWFyIENvbG9yIEYwIHJlbWFwcGluZyBpcyBub3Qgc3VwcG9ydGVkIGZvciBnbFRGIGV4cG9ydC4gSWdub3JpbmcgZm9yOiAke2JhYnlsb25NYXRlcmlhbC5uYW1lfWApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGNsZWFyQ29hdE5vcm1hbFRleHR1cmVJbmZvID0gdGhpcy5fZXhwb3J0ZXIuX2dsVEZNYXRlcmlhbEV4cG9ydGVyLl9nZXRUZXh0dXJlSW5mbyhiYWJ5bG9uTWF0ZXJpYWwuY2xlYXJDb2F0LmJ1bXBUZXh0dXJlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjbGVhckNvYXRJbmZvOiBJS0hSTWF0ZXJpYWxzQ2xlYXJjb2F0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyY29hdEZhY3RvcjogYmFieWxvbk1hdGVyaWFsLmNsZWFyQ29hdC5pbnRlbnNpdHksXHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJjb2F0VGV4dHVyZTogY2xlYXJDb2F0VGV4dHVyZUluZm8gPz8gdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyY29hdFJvdWdobmVzc0ZhY3RvcjogYmFieWxvbk1hdGVyaWFsLmNsZWFyQ29hdC5yb3VnaG5lc3MsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJjb2F0Um91Z2huZXNzVGV4dHVyZTogY2xlYXJDb2F0VGV4dHVyZVJvdWdobmVzc0luZm8gPz8gdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyY29hdE5vcm1hbFRleHR1cmU6IGNsZWFyQ29hdE5vcm1hbFRleHR1cmVJbmZvID8/IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICAgICBoYXNUZXh0dXJlczogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2xlYXJDb2F0SW5mby5jbGVhcmNvYXRUZXh0dXJlICE9PSBudWxsIHx8IGNsZWFyQ29hdEluZm8uY2xlYXJjb2F0Um91Z2huZXNzVGV4dHVyZSAhPT0gbnVsbCB8fCBjbGVhckNvYXRJbmZvLmNsZWFyY29hdFJvdWdobmVzc1RleHR1cmUgIT09IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgbm9kZS5leHRlbnNpb25zW05BTUVdID0gY2xlYXJDb2F0SW5mbztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXNvbHZlKG5vZGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5fRXhwb3J0ZXIuUmVnaXN0ZXJFeHRlbnNpb24oTkFNRSwgKGV4cG9ydGVyKSA9PiBuZXcgS0hSX21hdGVyaWFsc19jbGVhcmNvYXQoZXhwb3J0ZXIpKTtcclxuIiwiaW1wb3J0IHR5cGUgeyBJTWF0ZXJpYWwsIElLSFJNYXRlcmlhbHNEaWZmdXNlVHJhbnNtaXNzaW9uIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgdHlwZSB7IElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMiB9IGZyb20gXCIuLi9nbFRGRXhwb3J0ZXJFeHRlbnNpb25cIjtcclxuaW1wb3J0IHsgX0V4cG9ydGVyIH0gZnJvbSBcIi4uL2dsVEZFeHBvcnRlclwiO1xyXG5pbXBvcnQgdHlwZSB7IE1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IFBCUk1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1BCUi9wYnJNYXRlcmlhbFwiO1xyXG5pbXBvcnQgdHlwZSB7IEJhc2VUZXh0dXJlIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1RleHR1cmVzL2Jhc2VUZXh0dXJlXCI7XHJcblxyXG5jb25zdCBOQU1FID0gXCJLSFJfbWF0ZXJpYWxzX2RpZmZ1c2VfdHJhbnNtaXNzaW9uXCI7XHJcblxyXG4vKipcclxuICogW1Byb3Bvc2VkIFNwZWNpZmljYXRpb25dKGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9wdWxsLzE4MjUpXHJcbiAqICEhISBFeHBlcmltZW50YWwgRXh0ZW5zaW9uIFN1YmplY3QgdG8gQ2hhbmdlcyAhISFcclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGNsYXNzIEtIUl9tYXRlcmlhbHNfZGlmZnVzZV90cmFuc21pc3Npb24gaW1wbGVtZW50cyBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIge1xyXG4gICAgLyoqIE5hbWUgb2YgdGhpcyBleHRlbnNpb24gKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lID0gTkFNRTtcclxuXHJcbiAgICAvKiogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIGVuYWJsZWQgKi9cclxuICAgIHB1YmxpYyBlbmFibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAvKiogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIHJlcXVpcmVkICovXHJcbiAgICBwdWJsaWMgcmVxdWlyZWQgPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIF9leHBvcnRlcjogX0V4cG9ydGVyO1xyXG5cclxuICAgIHByaXZhdGUgX3dhc1VzZWQgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihleHBvcnRlcjogX0V4cG9ydGVyKSB7XHJcbiAgICAgICAgdGhpcy5fZXhwb3J0ZXIgPSBleHBvcnRlcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHt9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGdldCB3YXNVc2VkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl93YXNVc2VkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWZ0ZXIgZXhwb3J0aW5nIGEgbWF0ZXJpYWwsIGRlYWwgd2l0aCBhZGRpdGlvbmFsIHRleHR1cmVzXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBHTFRGIGNvbnRleHQgb2YgdGhlIG1hdGVyaWFsXHJcbiAgICAgKiBAcGFyYW0gbm9kZSBleHBvcnRlZCBHTFRGIG5vZGVcclxuICAgICAqIEBwYXJhbSBiYWJ5bG9uTWF0ZXJpYWwgY29ycmVzcG9uZGluZyBiYWJ5bG9uIG1hdGVyaWFsXHJcbiAgICAgKiBAcmV0dXJucyBhcnJheSBvZiBhZGRpdGlvbmFsIHRleHR1cmVzIHRvIGV4cG9ydFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcG9zdEV4cG9ydE1hdGVyaWFsQWRkaXRpb25hbFRleHR1cmVzPyhjb250ZXh0OiBzdHJpbmcsIG5vZGU6IElNYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCk6IEJhc2VUZXh0dXJlW10ge1xyXG4gICAgICAgIGNvbnN0IGFkZGl0aW9uYWxUZXh0dXJlczogQmFzZVRleHR1cmVbXSA9IFtdO1xyXG5cclxuICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsIGluc3RhbmNlb2YgUEJSTWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2lzRXh0ZW5zaW9uRW5hYmxlZChiYWJ5bG9uTWF0ZXJpYWwpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsLnN1YlN1cmZhY2UudGhpY2tuZXNzVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZGl0aW9uYWxUZXh0dXJlcy5wdXNoKGJhYnlsb25NYXRlcmlhbC5zdWJTdXJmYWNlLnRoaWNrbmVzc1RleHR1cmUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFkZGl0aW9uYWxUZXh0dXJlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGFkZGl0aW9uYWxUZXh0dXJlcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9pc0V4dGVuc2lvbkVuYWJsZWQobWF0OiBQQlJNYXRlcmlhbCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIC8vIFRoaXMgZXh0ZW5zaW9uIG11c3Qgbm90IGJlIHVzZWQgb24gYSBtYXRlcmlhbCB0aGF0IGFsc28gdXNlcyBLSFJfbWF0ZXJpYWxzX3VubGl0XHJcbiAgICAgICAgaWYgKG1hdC51bmxpdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHN1YnMgPSBtYXQuc3ViU3VyZmFjZTtcclxuICAgICAgICBpZiAoIXN1YnMuaXNUcmFuc2x1Y2VuY3lFbmFibGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICFtYXQudW5saXQgJiZcclxuICAgICAgICAgICAgIXN1YnMudXNlQWxiZWRvVG9UaW50VHJhbnNsdWNlbmN5ICYmXHJcbiAgICAgICAgICAgIHN1YnMudXNlR2x0ZlN0eWxlVGV4dHVyZXMgJiZcclxuICAgICAgICAgICAgc3Vicy52b2x1bWVJbmRleE9mUmVmcmFjdGlvbiA9PT0gMSAmJlxyXG4gICAgICAgICAgICBzdWJzLm1pbmltdW1UaGlja25lc3MgPT09IDAgJiZcclxuICAgICAgICAgICAgc3Vicy5tYXhpbXVtVGhpY2tuZXNzID09PSAwXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9oYXNUZXh0dXJlc0V4dGVuc2lvbihtYXQ6IFBCUk1hdGVyaWFsKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIG1hdC5zdWJTdXJmYWNlLnRyYW5zbHVjZW5jeUludGVuc2l0eVRleHR1cmUgIT0gbnVsbCB8fCBtYXQuc3ViU3VyZmFjZS50cmFuc2x1Y2VuY3lDb2xvclRleHR1cmUgIT0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFmdGVyIGV4cG9ydGluZyBhIG1hdGVyaWFsXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBHTFRGIGNvbnRleHQgb2YgdGhlIG1hdGVyaWFsXHJcbiAgICAgKiBAcGFyYW0gbm9kZSBleHBvcnRlZCBHTFRGIG5vZGVcclxuICAgICAqIEBwYXJhbSBiYWJ5bG9uTWF0ZXJpYWwgY29ycmVzcG9uZGluZyBiYWJ5bG9uIG1hdGVyaWFsXHJcbiAgICAgKiBAcmV0dXJucyBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgdXBkYXRlZCBub2RlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwb3N0RXhwb3J0TWF0ZXJpYWxBc3luYz8oY29udGV4dDogc3RyaW5nLCBub2RlOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBQcm9taXNlPElNYXRlcmlhbD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsIGluc3RhbmNlb2YgUEJSTWF0ZXJpYWwgJiYgdGhpcy5faXNFeHRlbnNpb25FbmFibGVkKGJhYnlsb25NYXRlcmlhbCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3dhc1VzZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHN1YnMgPSBiYWJ5bG9uTWF0ZXJpYWwuc3ViU3VyZmFjZTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkaWZmdXNlVHJhbnNtaXNzaW9uRmFjdG9yID0gc3Vicy50cmFuc2x1Y2VuY3lJbnRlbnNpdHkgPT0gMSA/IHVuZGVmaW5lZCA6IHN1YnMudHJhbnNsdWNlbmN5SW50ZW5zaXR5O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGlmZnVzZVRyYW5zbWlzc2lvblRleHR1cmUgPSB0aGlzLl9leHBvcnRlci5fZ2xURk1hdGVyaWFsRXhwb3J0ZXIuX2dldFRleHR1cmVJbmZvKHN1YnMudHJhbnNsdWNlbmN5SW50ZW5zaXR5VGV4dHVyZSkgPz8gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGlmZnVzZVRyYW5zbWlzc2lvbkNvbG9yRmFjdG9yID0gIXN1YnMudHJhbnNsdWNlbmN5Q29sb3IgfHwgc3Vicy50cmFuc2x1Y2VuY3lDb2xvci5lcXVhbHNGbG9hdHMoMS4wLCAxLjAsIDEuMCkgPyB1bmRlZmluZWQgOiBzdWJzLnRyYW5zbHVjZW5jeUNvbG9yLmFzQXJyYXkoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpZmZ1c2VUcmFuc21pc3Npb25Db2xvclRleHR1cmUgPSB0aGlzLl9leHBvcnRlci5fZ2xURk1hdGVyaWFsRXhwb3J0ZXIuX2dldFRleHR1cmVJbmZvKHN1YnMudHJhbnNsdWNlbmN5Q29sb3JUZXh0dXJlKSA/PyB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZGlmZnVzZVRyYW5zbWlzc2lvbkluZm86IElLSFJNYXRlcmlhbHNEaWZmdXNlVHJhbnNtaXNzaW9uID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpZmZ1c2VUcmFuc21pc3Npb25GYWN0b3IsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlmZnVzZVRyYW5zbWlzc2lvblRleHR1cmUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlmZnVzZVRyYW5zbWlzc2lvbkNvbG9yRmFjdG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpZmZ1c2VUcmFuc21pc3Npb25Db2xvclRleHR1cmUsXHJcbiAgICAgICAgICAgICAgICAgICAgaGFzVGV4dHVyZXM6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2hhc1RleHR1cmVzRXh0ZW5zaW9uKGJhYnlsb25NYXRlcmlhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBub2RlLmV4dGVuc2lvbnMgPSBub2RlLmV4dGVuc2lvbnMgfHwge307XHJcbiAgICAgICAgICAgICAgICBub2RlLmV4dGVuc2lvbnNbTkFNRV0gPSBkaWZmdXNlVHJhbnNtaXNzaW9uSW5mbztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXNvbHZlKG5vZGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5fRXhwb3J0ZXIuUmVnaXN0ZXJFeHRlbnNpb24oTkFNRSwgKGV4cG9ydGVyKSA9PiBuZXcgS0hSX21hdGVyaWFsc19kaWZmdXNlX3RyYW5zbWlzc2lvbihleHBvcnRlcikpO1xyXG4iLCJpbXBvcnQgdHlwZSB7IElNYXRlcmlhbCwgSUtIUk1hdGVyaWFsc0Rpc3BlcnNpb24gfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB0eXBlIHsgSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyIH0gZnJvbSBcIi4uL2dsVEZFeHBvcnRlckV4dGVuc2lvblwiO1xyXG5pbXBvcnQgeyBfRXhwb3J0ZXIgfSBmcm9tIFwiLi4vZ2xURkV4cG9ydGVyXCI7XHJcbmltcG9ydCB0eXBlIHsgTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgUEJSTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvUEJSL3Bick1hdGVyaWFsXCI7XHJcblxyXG5jb25zdCBOQU1FID0gXCJLSFJfbWF0ZXJpYWxzX2Rpc3BlcnNpb25cIjtcclxuXHJcbi8qKlxyXG4gKiBbU3BlY2lmaWNhdGlvbl0oaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvODdiZDY0YTdmNWUyM2M4NGI2YWVmMmU2MDgyMDY5NTgzZWQwZGRiNC9leHRlbnNpb25zLzIuMC9LaHJvbm9zL0tIUl9tYXRlcmlhbHNfZGlzcGVyc2lvbi9SRUFETUUubWQpXHJcbiAqIEBleHBlcmltZW50YWxcclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGNsYXNzIEtIUl9tYXRlcmlhbHNfZGlzcGVyc2lvbiBpbXBsZW1lbnRzIElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMiB7XHJcbiAgICAvKiogTmFtZSBvZiB0aGlzIGV4dGVuc2lvbiAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBOQU1FO1xyXG5cclxuICAgIC8qKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgZW5hYmxlZCAqL1xyXG4gICAgcHVibGljIGVuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgIC8qKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgcmVxdWlyZWQgKi9cclxuICAgIHB1YmxpYyByZXF1aXJlZCA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgX3dhc1VzZWQgPSBmYWxzZTtcclxuXHJcbiAgICAvKiogQ29uc3RydWN0b3IgKi9cclxuICAgIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgICAvKiogRGlzcG9zZSAqL1xyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7fVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBnZXQgd2FzVXNlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fd2FzVXNlZDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9pc0V4dGVuc2lvbkVuYWJsZWQobWF0OiBQQlJNYXRlcmlhbCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIC8vIFRoaXMgZXh0ZW5zaW9uIG11c3Qgbm90IGJlIHVzZWQgb24gYSBtYXRlcmlhbCB0aGF0IGFsc28gdXNlcyBLSFJfbWF0ZXJpYWxzX3VubGl0XHJcbiAgICAgICAgaWYgKG1hdC51bmxpdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHN1YnMgPSBtYXQuc3ViU3VyZmFjZTtcclxuICAgICAgICAvLyB0aGlzIGV4dGVuc2lvbiByZXF1aXJlcyByZWZyYWN0aW9uIHRvIGJlIGVuYWJsZWQuXHJcbiAgICAgICAgaWYgKCFzdWJzLmlzUmVmcmFjdGlvbkVuYWJsZWQgJiYgIXN1YnMuaXNEaXNwZXJzaW9uRW5hYmxlZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWZ0ZXIgZXhwb3J0aW5nIGEgbWF0ZXJpYWxcclxuICAgICAqIEBwYXJhbSBjb250ZXh0IEdMVEYgY29udGV4dCBvZiB0aGUgbWF0ZXJpYWxcclxuICAgICAqIEBwYXJhbSBub2RlIGV4cG9ydGVkIEdMVEYgbm9kZVxyXG4gICAgICogQHBhcmFtIGJhYnlsb25NYXRlcmlhbCBjb3JyZXNwb25kaW5nIGJhYnlsb24gbWF0ZXJpYWxcclxuICAgICAqIEByZXR1cm5zIHByb21pc2UsIHJlc29sdmVzIHdpdGggdGhlIG1hdGVyaWFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwb3N0RXhwb3J0TWF0ZXJpYWxBc3luYz8oY29udGV4dDogc3RyaW5nLCBub2RlOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBQcm9taXNlPElNYXRlcmlhbD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsIGluc3RhbmNlb2YgUEJSTWF0ZXJpYWwgJiYgdGhpcy5faXNFeHRlbnNpb25FbmFibGVkKGJhYnlsb25NYXRlcmlhbCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3dhc1VzZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHN1YnMgPSBiYWJ5bG9uTWF0ZXJpYWwuc3ViU3VyZmFjZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpc3BlcnNpb24gPSBzdWJzLmRpc3BlcnNpb247XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZGlzcGVyc2lvbkluZm86IElLSFJNYXRlcmlhbHNEaXNwZXJzaW9uID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BlcnNpb246IGRpc3BlcnNpb24sXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgbm9kZS5leHRlbnNpb25zID0gbm9kZS5leHRlbnNpb25zIHx8IHt9O1xyXG4gICAgICAgICAgICAgICAgbm9kZS5leHRlbnNpb25zW05BTUVdID0gZGlzcGVyc2lvbkluZm87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzb2x2ZShub2RlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuX0V4cG9ydGVyLlJlZ2lzdGVyRXh0ZW5zaW9uKE5BTUUsICgpID0+IG5ldyBLSFJfbWF0ZXJpYWxzX2Rpc3BlcnNpb24oKSk7XHJcbiIsImltcG9ydCB0eXBlIHsgSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyIH0gZnJvbSBcIi4uL2dsVEZFeHBvcnRlckV4dGVuc2lvblwiO1xyXG5pbXBvcnQgeyBfRXhwb3J0ZXIgfSBmcm9tIFwiLi4vZ2xURkV4cG9ydGVyXCI7XHJcbmltcG9ydCB0eXBlIHsgTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgUEJSTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvUEJSL3Bick1hdGVyaWFsXCI7XHJcbmltcG9ydCB0eXBlIHsgSU1hdGVyaWFsLCBJS0hSTWF0ZXJpYWxzRW1pc3NpdmVTdHJlbmd0aCB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuXHJcbmNvbnN0IE5BTUUgPSBcIktIUl9tYXRlcmlhbHNfZW1pc3NpdmVfc3RyZW5ndGhcIjtcclxuXHJcbi8qKlxyXG4gKiBbU3BlY2lmaWNhdGlvbl0oaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFpbi9leHRlbnNpb25zLzIuMC9LaHJvbm9zL0tIUl9tYXRlcmlhbHNfZW1pc3NpdmVfc3RyZW5ndGgvUkVBRE1FLm1kKVxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgY2xhc3MgS0hSX21hdGVyaWFsc19lbWlzc2l2ZV9zdHJlbmd0aCBpbXBsZW1lbnRzIElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMiB7XHJcbiAgICAvKiogTmFtZSBvZiB0aGlzIGV4dGVuc2lvbiAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBOQU1FO1xyXG5cclxuICAgIC8qKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgZW5hYmxlZCAqL1xyXG4gICAgcHVibGljIGVuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgIC8qKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgcmVxdWlyZWQgKi9cclxuICAgIHB1YmxpYyByZXF1aXJlZCA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgX3dhc1VzZWQgPSBmYWxzZTtcclxuXHJcbiAgICAvKiogRGlzcG9zZSAqL1xyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7fVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBnZXQgd2FzVXNlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fd2FzVXNlZDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFmdGVyIGV4cG9ydGluZyBhIG1hdGVyaWFsXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBHTFRGIGNvbnRleHQgb2YgdGhlIG1hdGVyaWFsXHJcbiAgICAgKiBAcGFyYW0gbm9kZSBleHBvcnRlZCBHTFRGIG5vZGVcclxuICAgICAqIEBwYXJhbSBiYWJ5bG9uTWF0ZXJpYWwgY29ycmVzcG9uZGluZyBiYWJ5bG9uIG1hdGVyaWFsXHJcbiAgICAgKiBAcmV0dXJucyBwcm9taXNlLCByZXNvbHZlcyB3aXRoIHRoZSBtYXRlcmlhbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcG9zdEV4cG9ydE1hdGVyaWFsQXN5bmMoY29udGV4dDogc3RyaW5nLCBub2RlOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBQcm9taXNlPElNYXRlcmlhbD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIShiYWJ5bG9uTWF0ZXJpYWwgaW5zdGFuY2VvZiBQQlJNYXRlcmlhbCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKG5vZGUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBlbWlzc2l2ZUNvbG9yID0gYmFieWxvbk1hdGVyaWFsLmVtaXNzaXZlQ29sb3IuYXNBcnJheSgpO1xyXG4gICAgICAgICAgICBjb25zdCB0ZW1wRW1pc3NpdmVTdHJlbmd0aCA9IE1hdGgubWF4KC4uLmVtaXNzaXZlQ29sb3IpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRlbXBFbWlzc2l2ZVN0cmVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fd2FzVXNlZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgbm9kZS5leHRlbnNpb25zIHx8PSB7fTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbWlzc2l2ZVN0cmVuZ3RoSW5mbzogSUtIUk1hdGVyaWFsc0VtaXNzaXZlU3RyZW5ndGggPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW1pc3NpdmVTdHJlbmd0aDogdGVtcEVtaXNzaXZlU3RyZW5ndGgsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIE5vcm1hbGl6ZSBlYWNoIHZhbHVlIG9mIHRoZSBlbWlzc2l2ZSBmYWN0b3IgdG8gaGF2ZSBhIG1heCB2YWx1ZSBvZiAxXHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdFbWlzc2l2ZUZhY3RvciA9IGJhYnlsb25NYXRlcmlhbC5lbWlzc2l2ZUNvbG9yLnNjYWxlKDEgLyBlbWlzc2l2ZVN0cmVuZ3RoSW5mby5lbWlzc2l2ZVN0cmVuZ3RoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBub2RlLmVtaXNzaXZlRmFjdG9yID0gbmV3RW1pc3NpdmVGYWN0b3IuYXNBcnJheSgpO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5leHRlbnNpb25zW05BTUVdID0gZW1pc3NpdmVTdHJlbmd0aEluZm87XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKG5vZGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5fRXhwb3J0ZXIuUmVnaXN0ZXJFeHRlbnNpb24oTkFNRSwgKGV4cG9ydGVyKSA9PiBuZXcgS0hSX21hdGVyaWFsc19lbWlzc2l2ZV9zdHJlbmd0aCgpKTtcclxuIiwiaW1wb3J0IHR5cGUgeyBJTWF0ZXJpYWwsIElLSFJNYXRlcmlhbHNJb3IgfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB0eXBlIHsgSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyIH0gZnJvbSBcIi4uL2dsVEZFeHBvcnRlckV4dGVuc2lvblwiO1xyXG5pbXBvcnQgeyBfRXhwb3J0ZXIgfSBmcm9tIFwiLi4vZ2xURkV4cG9ydGVyXCI7XHJcbmltcG9ydCB0eXBlIHsgTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgUEJSTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvUEJSL3Bick1hdGVyaWFsXCI7XHJcblxyXG5jb25zdCBOQU1FID0gXCJLSFJfbWF0ZXJpYWxzX2lvclwiO1xyXG5cclxuLyoqXHJcbiAqIFtTcGVjaWZpY2F0aW9uXShodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi9tYWluL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX21hdGVyaWFsc19pb3IvUkVBRE1FLm1kKVxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgY2xhc3MgS0hSX21hdGVyaWFsc19pb3IgaW1wbGVtZW50cyBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIge1xyXG4gICAgLyoqIE5hbWUgb2YgdGhpcyBleHRlbnNpb24gKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lID0gTkFNRTtcclxuXHJcbiAgICAvKiogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIGVuYWJsZWQgKi9cclxuICAgIHB1YmxpYyBlbmFibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAvKiogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIHJlcXVpcmVkICovXHJcbiAgICBwdWJsaWMgcmVxdWlyZWQgPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIF93YXNVc2VkID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICAgIC8qKiBEaXNwb3NlICovXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHt9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGdldCB3YXNVc2VkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl93YXNVc2VkO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2lzRXh0ZW5zaW9uRW5hYmxlZChtYXQ6IFBCUk1hdGVyaWFsKTogYm9vbGVhbiB7XHJcbiAgICAgICAgLy8gVGhpcyBleHRlbnNpb24gbXVzdCBub3QgYmUgdXNlZCBvbiBhIG1hdGVyaWFsIHRoYXQgYWxzbyB1c2VzIEtIUl9tYXRlcmlhbHNfdW5saXRcclxuICAgICAgICBpZiAobWF0LnVubGl0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1hdC5pbmRleE9mUmVmcmFjdGlvbiAhPSB1bmRlZmluZWQgJiYgbWF0LmluZGV4T2ZSZWZyYWN0aW9uICE9IDEuNTsgLy8gMS41IGlzIG5vcm1hdGl2ZSBkZWZhdWx0IHZhbHVlLlxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWZ0ZXIgZXhwb3J0aW5nIGEgbWF0ZXJpYWxcclxuICAgICAqIEBwYXJhbSBjb250ZXh0IEdMVEYgY29udGV4dCBvZiB0aGUgbWF0ZXJpYWxcclxuICAgICAqIEBwYXJhbSBub2RlIGV4cG9ydGVkIEdMVEYgbm9kZVxyXG4gICAgICogQHBhcmFtIGJhYnlsb25NYXRlcmlhbCBjb3JyZXNwb25kaW5nIGJhYnlsb24gbWF0ZXJpYWxcclxuICAgICAqIEByZXR1cm5zIHByb21pc2UsIHJlc29sdmVzIHdpdGggdGhlIG1hdGVyaWFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwb3N0RXhwb3J0TWF0ZXJpYWxBc3luYz8oY29udGV4dDogc3RyaW5nLCBub2RlOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBQcm9taXNlPElNYXRlcmlhbD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsIGluc3RhbmNlb2YgUEJSTWF0ZXJpYWwgJiYgdGhpcy5faXNFeHRlbnNpb25FbmFibGVkKGJhYnlsb25NYXRlcmlhbCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3dhc1VzZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGlvckluZm86IElLSFJNYXRlcmlhbHNJb3IgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW9yOiBiYWJ5bG9uTWF0ZXJpYWwuaW5kZXhPZlJlZnJhY3Rpb24sXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgbm9kZS5leHRlbnNpb25zID0gbm9kZS5leHRlbnNpb25zIHx8IHt9O1xyXG4gICAgICAgICAgICAgICAgbm9kZS5leHRlbnNpb25zW05BTUVdID0gaW9ySW5mbztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXNvbHZlKG5vZGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXHJcbl9FeHBvcnRlci5SZWdpc3RlckV4dGVuc2lvbihOQU1FLCAoZXhwb3J0ZXIpID0+IG5ldyBLSFJfbWF0ZXJpYWxzX2lvcigpKTtcclxuIiwiaW1wb3J0IHR5cGUgeyBJTWF0ZXJpYWwsIElLSFJNYXRlcmlhbHNJcmlkZXNjZW5jZSB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHR5cGUgeyBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIgfSBmcm9tIFwiLi4vZ2xURkV4cG9ydGVyRXh0ZW5zaW9uXCI7XHJcbmltcG9ydCB7IF9FeHBvcnRlciB9IGZyb20gXCIuLi9nbFRGRXhwb3J0ZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBQQlJCYXNlTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvUEJSL3BickJhc2VNYXRlcmlhbFwiO1xyXG5pbXBvcnQgdHlwZSB7IEJhc2VUZXh0dXJlIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1RleHR1cmVzL2Jhc2VUZXh0dXJlXCI7XHJcblxyXG5jb25zdCBOQU1FID0gXCJLSFJfbWF0ZXJpYWxzX2lyaWRlc2NlbmNlXCI7XHJcblxyXG4vKipcclxuICogQGludGVybmFsXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBjbGFzcyBLSFJfbWF0ZXJpYWxzX2lyaWRlc2NlbmNlIGltcGxlbWVudHMgSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyIHtcclxuICAgIC8qKiBOYW1lIG9mIHRoaXMgZXh0ZW5zaW9uICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZSA9IE5BTUU7XHJcblxyXG4gICAgLyoqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyBlbmFibGVkICovXHJcbiAgICBwdWJsaWMgZW5hYmxlZCA9IHRydWU7XHJcblxyXG4gICAgLyoqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyByZXF1aXJlZCAqL1xyXG4gICAgcHVibGljIHJlcXVpcmVkID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBfZXhwb3J0ZXI6IF9FeHBvcnRlcjtcclxuXHJcbiAgICBwcml2YXRlIF93YXNVc2VkID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZXhwb3J0ZXI6IF9FeHBvcnRlcikge1xyXG4gICAgICAgIHRoaXMuX2V4cG9ydGVyID0gZXhwb3J0ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7fVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBnZXQgd2FzVXNlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fd2FzVXNlZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcG9zdEV4cG9ydE1hdGVyaWFsQWRkaXRpb25hbFRleHR1cmVzPyhjb250ZXh0OiBzdHJpbmcsIG5vZGU6IElNYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCk6IEJhc2VUZXh0dXJlW10ge1xyXG4gICAgICAgIGNvbnN0IGFkZGl0aW9uYWxUZXh0dXJlczogQmFzZVRleHR1cmVbXSA9IFtdO1xyXG4gICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwgaW5zdGFuY2VvZiBQQlJCYXNlTWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbC5pcmlkZXNjZW5jZS5pc0VuYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwuaXJpZGVzY2VuY2UudGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZGl0aW9uYWxUZXh0dXJlcy5wdXNoKGJhYnlsb25NYXRlcmlhbC5pcmlkZXNjZW5jZS50ZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwuaXJpZGVzY2VuY2UudGhpY2tuZXNzVGV4dHVyZSAmJiBiYWJ5bG9uTWF0ZXJpYWwuaXJpZGVzY2VuY2UudGhpY2tuZXNzVGV4dHVyZSAhPT0gYmFieWxvbk1hdGVyaWFsLmlyaWRlc2NlbmNlLnRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRpdGlvbmFsVGV4dHVyZXMucHVzaChiYWJ5bG9uTWF0ZXJpYWwuaXJpZGVzY2VuY2UudGhpY2tuZXNzVGV4dHVyZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYWRkaXRpb25hbFRleHR1cmVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBvc3RFeHBvcnRNYXRlcmlhbEFzeW5jPyhjb250ZXh0OiBzdHJpbmcsIG5vZGU6IElNYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCk6IFByb21pc2U8SU1hdGVyaWFsPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwgaW5zdGFuY2VvZiBQQlJCYXNlTWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgICAgIGlmICghYmFieWxvbk1hdGVyaWFsLmlyaWRlc2NlbmNlLmlzRW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUobm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX3dhc1VzZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIG5vZGUuZXh0ZW5zaW9ucyA9IG5vZGUuZXh0ZW5zaW9ucyB8fCB7fTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBpcmlkZXNjZW5jZVRleHR1cmVJbmZvID0gdGhpcy5fZXhwb3J0ZXIuX2dsVEZNYXRlcmlhbEV4cG9ydGVyLl9nZXRUZXh0dXJlSW5mbyhiYWJ5bG9uTWF0ZXJpYWwuaXJpZGVzY2VuY2UudGV4dHVyZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpcmlkZXNjZW5jZVRoaWNrbmVzc1RleHR1cmVJbmZvID0gdGhpcy5fZXhwb3J0ZXIuX2dsVEZNYXRlcmlhbEV4cG9ydGVyLl9nZXRUZXh0dXJlSW5mbyhiYWJ5bG9uTWF0ZXJpYWwuaXJpZGVzY2VuY2UudGhpY2tuZXNzVGV4dHVyZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgaXJpZGVzY2VuY2VJbmZvOiBJS0hSTWF0ZXJpYWxzSXJpZGVzY2VuY2UgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXJpZGVzY2VuY2VGYWN0b3I6IGJhYnlsb25NYXRlcmlhbC5pcmlkZXNjZW5jZS5pbnRlbnNpdHksXHJcbiAgICAgICAgICAgICAgICAgICAgaXJpZGVzY2VuY2VJb3I6IGJhYnlsb25NYXRlcmlhbC5pcmlkZXNjZW5jZS5pbmRleE9mUmVmcmFjdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBpcmlkZXNjZW5jZVRoaWNrbmVzc01pbmltdW06IGJhYnlsb25NYXRlcmlhbC5pcmlkZXNjZW5jZS5taW5pbXVtVGhpY2tuZXNzLFxyXG4gICAgICAgICAgICAgICAgICAgIGlyaWRlc2NlbmNlVGhpY2tuZXNzTWF4aW11bTogYmFieWxvbk1hdGVyaWFsLmlyaWRlc2NlbmNlLm1heGltdW1UaGlja25lc3MsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlyaWRlc2NlbmNlVGV4dHVyZTogaXJpZGVzY2VuY2VUZXh0dXJlSW5mbyA/PyB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgaXJpZGVzY2VuY2VUaGlja25lc3NUZXh0dXJlOiBpcmlkZXNjZW5jZVRoaWNrbmVzc1RleHR1cmVJbmZvID8/IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICAgICBoYXNUZXh0dXJlczogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXJpZGVzY2VuY2VJbmZvLmlyaWRlc2NlbmNlVGV4dHVyZSAhPT0gbnVsbCB8fCBpcmlkZXNjZW5jZUluZm8uaXJpZGVzY2VuY2VUaGlja25lc3NUZXh0dXJlICE9PSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIG5vZGUuZXh0ZW5zaW9uc1tOQU1FXSA9IGlyaWRlc2NlbmNlSW5mbztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXNvbHZlKG5vZGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5fRXhwb3J0ZXIuUmVnaXN0ZXJFeHRlbnNpb24oTkFNRSwgKGV4cG9ydGVyKSA9PiBuZXcgS0hSX21hdGVyaWFsc19pcmlkZXNjZW5jZShleHBvcnRlcikpO1xyXG4iLCJpbXBvcnQgdHlwZSB7IElNYXRlcmlhbCwgSUtIUk1hdGVyaWFsc1NoZWVuIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgdHlwZSB7IElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMiB9IGZyb20gXCIuLi9nbFRGRXhwb3J0ZXJFeHRlbnNpb25cIjtcclxuaW1wb3J0IHsgX0V4cG9ydGVyIH0gZnJvbSBcIi4uL2dsVEZFeHBvcnRlclwiO1xyXG5pbXBvcnQgdHlwZSB7IE1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IFBCUk1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1BCUi9wYnJNYXRlcmlhbFwiO1xyXG5pbXBvcnQgdHlwZSB7IEJhc2VUZXh0dXJlIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1RleHR1cmVzL2Jhc2VUZXh0dXJlXCI7XHJcblxyXG5jb25zdCBOQU1FID0gXCJLSFJfbWF0ZXJpYWxzX3NoZWVuXCI7XHJcblxyXG4vKipcclxuICogQGludGVybmFsXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBjbGFzcyBLSFJfbWF0ZXJpYWxzX3NoZWVuIGltcGxlbWVudHMgSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyIHtcclxuICAgIC8qKiBOYW1lIG9mIHRoaXMgZXh0ZW5zaW9uICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZSA9IE5BTUU7XHJcblxyXG4gICAgLyoqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyBlbmFibGVkICovXHJcbiAgICBwdWJsaWMgZW5hYmxlZCA9IHRydWU7XHJcblxyXG4gICAgLyoqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyByZXF1aXJlZCAqL1xyXG4gICAgcHVibGljIHJlcXVpcmVkID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBfd2FzVXNlZCA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgX2V4cG9ydGVyOiBfRXhwb3J0ZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZXhwb3J0ZXI6IF9FeHBvcnRlcikge1xyXG4gICAgICAgIHRoaXMuX2V4cG9ydGVyID0gZXhwb3J0ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7fVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBnZXQgd2FzVXNlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fd2FzVXNlZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcG9zdEV4cG9ydE1hdGVyaWFsQWRkaXRpb25hbFRleHR1cmVzKGNvbnRleHQ6IHN0cmluZywgbm9kZTogSU1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsKTogQmFzZVRleHR1cmVbXSB7XHJcbiAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbCBpbnN0YW5jZW9mIFBCUk1hdGVyaWFsKSB7XHJcbiAgICAgICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwuc2hlZW4uaXNFbmFibGVkICYmIGJhYnlsb25NYXRlcmlhbC5zaGVlbi50ZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW2JhYnlsb25NYXRlcmlhbC5zaGVlbi50ZXh0dXJlXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwb3N0RXhwb3J0TWF0ZXJpYWxBc3luYyhjb250ZXh0OiBzdHJpbmcsIG5vZGU6IElNYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCk6IFByb21pc2U8SU1hdGVyaWFsPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwgaW5zdGFuY2VvZiBQQlJNYXRlcmlhbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFiYWJ5bG9uTWF0ZXJpYWwuc2hlZW4uaXNFbmFibGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShub2RlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5fd2FzVXNlZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG5vZGUuZXh0ZW5zaW9ucyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5leHRlbnNpb25zID0ge307XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzaGVlbkluZm86IElLSFJNYXRlcmlhbHNTaGVlbiA9IHtcclxuICAgICAgICAgICAgICAgICAgICBzaGVlbkNvbG9yRmFjdG9yOiBiYWJ5bG9uTWF0ZXJpYWwuc2hlZW4uY29sb3IuYXNBcnJheSgpLFxyXG4gICAgICAgICAgICAgICAgICAgIHNoZWVuUm91Z2huZXNzRmFjdG9yOiBiYWJ5bG9uTWF0ZXJpYWwuc2hlZW4ucm91Z2huZXNzID8/IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgaGFzVGV4dHVyZXM6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNoZWVuSW5mby5zaGVlbkNvbG9yVGV4dHVyZSAhPT0gbnVsbCB8fCBzaGVlbkluZm8uc2hlZW5Sb3VnaG5lc3NUZXh0dXJlICE9PSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwuc2hlZW4udGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNoZWVuSW5mby5zaGVlbkNvbG9yVGV4dHVyZSA9IHRoaXMuX2V4cG9ydGVyLl9nbFRGTWF0ZXJpYWxFeHBvcnRlci5fZ2V0VGV4dHVyZUluZm8oYmFieWxvbk1hdGVyaWFsLnNoZWVuLnRleHR1cmUpID8/IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsLnNoZWVuLnRleHR1cmVSb3VnaG5lc3MgJiYgIWJhYnlsb25NYXRlcmlhbC5zaGVlbi51c2VSb3VnaG5lc3NGcm9tTWFpblRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBzaGVlbkluZm8uc2hlZW5Sb3VnaG5lc3NUZXh0dXJlID0gdGhpcy5fZXhwb3J0ZXIuX2dsVEZNYXRlcmlhbEV4cG9ydGVyLl9nZXRUZXh0dXJlSW5mbyhiYWJ5bG9uTWF0ZXJpYWwuc2hlZW4udGV4dHVyZVJvdWdobmVzcykgPz8gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChiYWJ5bG9uTWF0ZXJpYWwuc2hlZW4udGV4dHVyZSAmJiBiYWJ5bG9uTWF0ZXJpYWwuc2hlZW4udXNlUm91Z2huZXNzRnJvbU1haW5UZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hlZW5JbmZvLnNoZWVuUm91Z2huZXNzVGV4dHVyZSA9IHRoaXMuX2V4cG9ydGVyLl9nbFRGTWF0ZXJpYWxFeHBvcnRlci5fZ2V0VGV4dHVyZUluZm8oYmFieWxvbk1hdGVyaWFsLnNoZWVuLnRleHR1cmUpID8/IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBub2RlLmV4dGVuc2lvbnNbTkFNRV0gPSBzaGVlbkluZm87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzb2x2ZShub2RlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuX0V4cG9ydGVyLlJlZ2lzdGVyRXh0ZW5zaW9uKE5BTUUsIChleHBvcnRlcikgPT4gbmV3IEtIUl9tYXRlcmlhbHNfc2hlZW4oZXhwb3J0ZXIpKTtcclxuIiwiaW1wb3J0IHR5cGUgeyBJTWF0ZXJpYWwsIElLSFJNYXRlcmlhbHNTcGVjdWxhciB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHR5cGUgeyBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIgfSBmcm9tIFwiLi4vZ2xURkV4cG9ydGVyRXh0ZW5zaW9uXCI7XHJcbmltcG9ydCB7IF9FeHBvcnRlciB9IGZyb20gXCIuLi9nbFRGRXhwb3J0ZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBQQlJNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9QQlIvcGJyTWF0ZXJpYWxcIjtcclxuaW1wb3J0IHR5cGUgeyBCYXNlVGV4dHVyZSB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9UZXh0dXJlcy9iYXNlVGV4dHVyZVwiO1xyXG5cclxuY29uc3QgTkFNRSA9IFwiS0hSX21hdGVyaWFsc19zcGVjdWxhclwiO1xyXG5cclxuLyoqXHJcbiAqIFtTcGVjaWZpY2F0aW9uXShodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi9tYWluL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX21hdGVyaWFsc19zcGVjdWxhci9SRUFETUUubWQpXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBjbGFzcyBLSFJfbWF0ZXJpYWxzX3NwZWN1bGFyIGltcGxlbWVudHMgSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyIHtcclxuICAgIC8qKiBOYW1lIG9mIHRoaXMgZXh0ZW5zaW9uICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZSA9IE5BTUU7XHJcblxyXG4gICAgLyoqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyBlbmFibGVkICovXHJcbiAgICBwdWJsaWMgZW5hYmxlZCA9IHRydWU7XHJcblxyXG4gICAgLyoqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyByZXF1aXJlZCAqL1xyXG4gICAgcHVibGljIHJlcXVpcmVkID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBfZXhwb3J0ZXI6IF9FeHBvcnRlcjtcclxuXHJcbiAgICBwcml2YXRlIF93YXNVc2VkID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZXhwb3J0ZXI6IF9FeHBvcnRlcikge1xyXG4gICAgICAgIHRoaXMuX2V4cG9ydGVyID0gZXhwb3J0ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIERpc3Bvc2UgKi9cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge31cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgZ2V0IHdhc1VzZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dhc1VzZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZnRlciBleHBvcnRpbmcgYSBtYXRlcmlhbCwgZGVhbCB3aXRoIHRoZSBhZGRpdGlvbmFsIHRleHR1cmVzXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBHTFRGIGNvbnRleHQgb2YgdGhlIG1hdGVyaWFsXHJcbiAgICAgKiBAcGFyYW0gbm9kZSBleHBvcnRlZCBHTFRGIG5vZGVcclxuICAgICAqIEBwYXJhbSBiYWJ5bG9uTWF0ZXJpYWwgY29ycmVzcG9uZGluZyBiYWJ5bG9uIG1hdGVyaWFsXHJcbiAgICAgKiBAcmV0dXJucyBhcnJheSBvZiBhZGRpdGlvbmFsIHRleHR1cmVzIHRvIGV4cG9ydFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcG9zdEV4cG9ydE1hdGVyaWFsQWRkaXRpb25hbFRleHR1cmVzPyhjb250ZXh0OiBzdHJpbmcsIG5vZGU6IElNYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCk6IEJhc2VUZXh0dXJlW10ge1xyXG4gICAgICAgIGNvbnN0IGFkZGl0aW9uYWxUZXh0dXJlczogQmFzZVRleHR1cmVbXSA9IFtdO1xyXG5cclxuICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsIGluc3RhbmNlb2YgUEJSTWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2lzRXh0ZW5zaW9uRW5hYmxlZChiYWJ5bG9uTWF0ZXJpYWwpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsLm1ldGFsbGljUmVmbGVjdGFuY2VUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkaXRpb25hbFRleHR1cmVzLnB1c2goYmFieWxvbk1hdGVyaWFsLm1ldGFsbGljUmVmbGVjdGFuY2VUZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwucmVmbGVjdGFuY2VUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkaXRpb25hbFRleHR1cmVzLnB1c2goYmFieWxvbk1hdGVyaWFsLnJlZmxlY3RhbmNlVGV4dHVyZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYWRkaXRpb25hbFRleHR1cmVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYWRkaXRpb25hbFRleHR1cmVzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2lzRXh0ZW5zaW9uRW5hYmxlZChtYXQ6IFBCUk1hdGVyaWFsKTogYm9vbGVhbiB7XHJcbiAgICAgICAgLy8gVGhpcyBleHRlbnNpb24gbXVzdCBub3QgYmUgdXNlZCBvbiBhIG1hdGVyaWFsIHRoYXQgYWxzbyB1c2VzIEtIUl9tYXRlcmlhbHNfdW5saXRcclxuICAgICAgICBpZiAobWF0LnVubGl0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgKG1hdC5tZXRhbGxpY0YwRmFjdG9yICE9IHVuZGVmaW5lZCAmJiBtYXQubWV0YWxsaWNGMEZhY3RvciAhPSAxLjApIHx8XHJcbiAgICAgICAgICAgIChtYXQubWV0YWxsaWNSZWZsZWN0YW5jZUNvbG9yICE9IHVuZGVmaW5lZCAmJiAhbWF0Lm1ldGFsbGljUmVmbGVjdGFuY2VDb2xvci5lcXVhbHNGbG9hdHMoMS4wLCAxLjAsIDEuMCkpIHx8XHJcbiAgICAgICAgICAgIHRoaXMuX2hhc1RleHR1cmVzRXh0ZW5zaW9uKG1hdClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2hhc1RleHR1cmVzRXh0ZW5zaW9uKG1hdDogUEJSTWF0ZXJpYWwpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gbWF0Lm1ldGFsbGljUmVmbGVjdGFuY2VUZXh0dXJlICE9IG51bGwgfHwgbWF0LnJlZmxlY3RhbmNlVGV4dHVyZSAhPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWZ0ZXIgZXhwb3J0aW5nIGEgbWF0ZXJpYWxcclxuICAgICAqIEBwYXJhbSBjb250ZXh0IEdMVEYgY29udGV4dCBvZiB0aGUgbWF0ZXJpYWxcclxuICAgICAqIEBwYXJhbSBub2RlIGV4cG9ydGVkIEdMVEYgbm9kZVxyXG4gICAgICogQHBhcmFtIGJhYnlsb25NYXRlcmlhbCBjb3JyZXNwb25kaW5nIGJhYnlsb24gbWF0ZXJpYWxcclxuICAgICAqIEByZXR1cm5zIHByb21pc2UsIHJlc29sdmVzIHdpdGggdGhlIG1hdGVyaWFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwb3N0RXhwb3J0TWF0ZXJpYWxBc3luYz8oY29udGV4dDogc3RyaW5nLCBub2RlOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBQcm9taXNlPElNYXRlcmlhbD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsIGluc3RhbmNlb2YgUEJSTWF0ZXJpYWwgJiYgdGhpcy5faXNFeHRlbnNpb25FbmFibGVkKGJhYnlsb25NYXRlcmlhbCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3dhc1VzZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIG5vZGUuZXh0ZW5zaW9ucyA9IG5vZGUuZXh0ZW5zaW9ucyB8fCB7fTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBtZXRhbGxpY1JlZmxlY3RhbmNlVGV4dHVyZSA9IHRoaXMuX2V4cG9ydGVyLl9nbFRGTWF0ZXJpYWxFeHBvcnRlci5fZ2V0VGV4dHVyZUluZm8oYmFieWxvbk1hdGVyaWFsLm1ldGFsbGljUmVmbGVjdGFuY2VUZXh0dXJlKSA/PyB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZWZsZWN0YW5jZVRleHR1cmUgPSB0aGlzLl9leHBvcnRlci5fZ2xURk1hdGVyaWFsRXhwb3J0ZXIuX2dldFRleHR1cmVJbmZvKGJhYnlsb25NYXRlcmlhbC5yZWZsZWN0YW5jZVRleHR1cmUpID8/IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1ldGFsbGljRjBGYWN0b3IgPSBiYWJ5bG9uTWF0ZXJpYWwubWV0YWxsaWNGMEZhY3RvciA9PSAxLjAgPyB1bmRlZmluZWQgOiBiYWJ5bG9uTWF0ZXJpYWwubWV0YWxsaWNGMEZhY3RvcjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1ldGFsbGljUmVmbGVjdGFuY2VDb2xvciA9IGJhYnlsb25NYXRlcmlhbC5tZXRhbGxpY1JlZmxlY3RhbmNlQ29sb3IuZXF1YWxzRmxvYXRzKDEuMCwgMS4wLCAxLjApXHJcbiAgICAgICAgICAgICAgICAgICAgPyB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICA6IGJhYnlsb25NYXRlcmlhbC5tZXRhbGxpY1JlZmxlY3RhbmNlQ29sb3IuYXNBcnJheSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHNwZWN1bGFySW5mbzogSUtIUk1hdGVyaWFsc1NwZWN1bGFyID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNwZWN1bGFyRmFjdG9yOiBtZXRhbGxpY0YwRmFjdG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwZWN1bGFyVGV4dHVyZTogbWV0YWxsaWNSZWZsZWN0YW5jZVRleHR1cmUsXHJcbiAgICAgICAgICAgICAgICAgICAgc3BlY3VsYXJDb2xvckZhY3RvcjogbWV0YWxsaWNSZWZsZWN0YW5jZUNvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwZWN1bGFyQ29sb3JUZXh0dXJlOiByZWZsZWN0YW5jZVRleHR1cmUsXHJcbiAgICAgICAgICAgICAgICAgICAgaGFzVGV4dHVyZXM6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2hhc1RleHR1cmVzRXh0ZW5zaW9uKGJhYnlsb25NYXRlcmlhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBub2RlLmV4dGVuc2lvbnNbTkFNRV0gPSBzcGVjdWxhckluZm87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzb2x2ZShub2RlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuX0V4cG9ydGVyLlJlZ2lzdGVyRXh0ZW5zaW9uKE5BTUUsIChleHBvcnRlcikgPT4gbmV3IEtIUl9tYXRlcmlhbHNfc3BlY3VsYXIoZXhwb3J0ZXIpKTtcclxuIiwiaW1wb3J0IHR5cGUgeyBJTWF0ZXJpYWwsIElLSFJNYXRlcmlhbHNUcmFuc21pc3Npb24gfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB0eXBlIHsgSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyIH0gZnJvbSBcIi4uL2dsVEZFeHBvcnRlckV4dGVuc2lvblwiO1xyXG5pbXBvcnQgeyBfRXhwb3J0ZXIgfSBmcm9tIFwiLi4vZ2xURkV4cG9ydGVyXCI7XHJcbmltcG9ydCB0eXBlIHsgTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgUEJSTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvUEJSL3Bick1hdGVyaWFsXCI7XHJcbmltcG9ydCB0eXBlIHsgQmFzZVRleHR1cmUgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvYmFzZVRleHR1cmVcIjtcclxuXHJcbmNvbnN0IE5BTUUgPSBcIktIUl9tYXRlcmlhbHNfdHJhbnNtaXNzaW9uXCI7XHJcblxyXG4vKipcclxuICogW1NwZWNpZmljYXRpb25dKGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9ibG9iL21haW4vZXh0ZW5zaW9ucy8yLjAvS2hyb25vcy9LSFJfbWF0ZXJpYWxzX3RyYW5zbWlzc2lvbi9SRUFETUUubWQpXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBjbGFzcyBLSFJfbWF0ZXJpYWxzX3RyYW5zbWlzc2lvbiBpbXBsZW1lbnRzIElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMiB7XHJcbiAgICAvKiogTmFtZSBvZiB0aGlzIGV4dGVuc2lvbiAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBOQU1FO1xyXG5cclxuICAgIC8qKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgZW5hYmxlZCAqL1xyXG4gICAgcHVibGljIGVuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgIC8qKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgcmVxdWlyZWQgKi9cclxuICAgIHB1YmxpYyByZXF1aXJlZCA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgX2V4cG9ydGVyOiBfRXhwb3J0ZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBfd2FzVXNlZCA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGV4cG9ydGVyOiBfRXhwb3J0ZXIpIHtcclxuICAgICAgICB0aGlzLl9leHBvcnRlciA9IGV4cG9ydGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBEaXNwb3NlICovXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHt9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGdldCB3YXNVc2VkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl93YXNVc2VkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWZ0ZXIgZXhwb3J0aW5nIGEgbWF0ZXJpYWwsIGRlYWwgd2l0aCBhZGRpdGlvbmFsIHRleHR1cmVzXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBHTFRGIGNvbnRleHQgb2YgdGhlIG1hdGVyaWFsXHJcbiAgICAgKiBAcGFyYW0gbm9kZSBleHBvcnRlZCBHTFRGIG5vZGVcclxuICAgICAqIEBwYXJhbSBiYWJ5bG9uTWF0ZXJpYWwgY29ycmVzcG9uZGluZyBiYWJ5bG9uIG1hdGVyaWFsXHJcbiAgICAgKiBAcmV0dXJucyBhcnJheSBvZiBhZGRpdGlvbmFsIHRleHR1cmVzIHRvIGV4cG9ydFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcG9zdEV4cG9ydE1hdGVyaWFsQWRkaXRpb25hbFRleHR1cmVzPyhjb250ZXh0OiBzdHJpbmcsIG5vZGU6IElNYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCk6IEJhc2VUZXh0dXJlW10ge1xyXG4gICAgICAgIGNvbnN0IGFkZGl0aW9uYWxUZXh0dXJlczogQmFzZVRleHR1cmVbXSA9IFtdO1xyXG5cclxuICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsIGluc3RhbmNlb2YgUEJSTWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2lzRXh0ZW5zaW9uRW5hYmxlZChiYWJ5bG9uTWF0ZXJpYWwpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsLnN1YlN1cmZhY2UudGhpY2tuZXNzVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZGl0aW9uYWxUZXh0dXJlcy5wdXNoKGJhYnlsb25NYXRlcmlhbC5zdWJTdXJmYWNlLnRoaWNrbmVzc1RleHR1cmUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFkZGl0aW9uYWxUZXh0dXJlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGFkZGl0aW9uYWxUZXh0dXJlcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9pc0V4dGVuc2lvbkVuYWJsZWQobWF0OiBQQlJNYXRlcmlhbCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIC8vIFRoaXMgZXh0ZW5zaW9uIG11c3Qgbm90IGJlIHVzZWQgb24gYSBtYXRlcmlhbCB0aGF0IGFsc28gdXNlcyBLSFJfbWF0ZXJpYWxzX3VubGl0XHJcbiAgICAgICAgaWYgKG1hdC51bmxpdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHN1YnMgPSBtYXQuc3ViU3VyZmFjZTtcclxuICAgICAgICByZXR1cm4gKHN1YnMuaXNSZWZyYWN0aW9uRW5hYmxlZCAmJiBzdWJzLnJlZnJhY3Rpb25JbnRlbnNpdHkgIT0gdW5kZWZpbmVkICYmIHN1YnMucmVmcmFjdGlvbkludGVuc2l0eSAhPSAwKSB8fCB0aGlzLl9oYXNUZXh0dXJlc0V4dGVuc2lvbihtYXQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2hhc1RleHR1cmVzRXh0ZW5zaW9uKG1hdDogUEJSTWF0ZXJpYWwpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gbWF0LnN1YlN1cmZhY2UucmVmcmFjdGlvbkludGVuc2l0eVRleHR1cmUgIT0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFmdGVyIGV4cG9ydGluZyBhIG1hdGVyaWFsXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBHTFRGIGNvbnRleHQgb2YgdGhlIG1hdGVyaWFsXHJcbiAgICAgKiBAcGFyYW0gbm9kZSBleHBvcnRlZCBHTFRGIG5vZGVcclxuICAgICAqIEBwYXJhbSBiYWJ5bG9uTWF0ZXJpYWwgY29ycmVzcG9uZGluZyBiYWJ5bG9uIG1hdGVyaWFsXHJcbiAgICAgKiBAcmV0dXJucyB0cnVlIGlmIHN1Y2Nlc3NmdWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIHBvc3RFeHBvcnRNYXRlcmlhbEFzeW5jPyhjb250ZXh0OiBzdHJpbmcsIG5vZGU6IElNYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCk6IFByb21pc2U8SU1hdGVyaWFsPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwgaW5zdGFuY2VvZiBQQlJNYXRlcmlhbCAmJiB0aGlzLl9pc0V4dGVuc2lvbkVuYWJsZWQoYmFieWxvbk1hdGVyaWFsKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fd2FzVXNlZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3VicyA9IGJhYnlsb25NYXRlcmlhbC5zdWJTdXJmYWNlO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdHJhbnNtaXNzaW9uRmFjdG9yID0gc3Vicy5yZWZyYWN0aW9uSW50ZW5zaXR5ID09PSAwID8gdW5kZWZpbmVkIDogc3Vicy5yZWZyYWN0aW9uSW50ZW5zaXR5O1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zbWlzc2lvblRleHR1cmUgPSB0aGlzLl9leHBvcnRlci5fZ2xURk1hdGVyaWFsRXhwb3J0ZXIuX2dldFRleHR1cmVJbmZvKHN1YnMucmVmcmFjdGlvbkludGVuc2l0eVRleHR1cmUpID8/IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCB2b2x1bWVJbmZvOiBJS0hSTWF0ZXJpYWxzVHJhbnNtaXNzaW9uID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbWlzc2lvbkZhY3RvcjogdHJhbnNtaXNzaW9uRmFjdG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbWlzc2lvblRleHR1cmU6IHRyYW5zbWlzc2lvblRleHR1cmUsXHJcbiAgICAgICAgICAgICAgICAgICAgaGFzVGV4dHVyZXM6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2hhc1RleHR1cmVzRXh0ZW5zaW9uKGJhYnlsb25NYXRlcmlhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBub2RlLmV4dGVuc2lvbnMgPSBub2RlLmV4dGVuc2lvbnMgfHwge307XHJcbiAgICAgICAgICAgICAgICBub2RlLmV4dGVuc2lvbnNbTkFNRV0gPSB2b2x1bWVJbmZvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc29sdmUobm9kZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbl9FeHBvcnRlci5SZWdpc3RlckV4dGVuc2lvbihOQU1FLCAoZXhwb3J0ZXIpID0+IG5ldyBLSFJfbWF0ZXJpYWxzX3RyYW5zbWlzc2lvbihleHBvcnRlcikpO1xyXG4iLCJpbXBvcnQgdHlwZSB7IElNYXRlcmlhbCB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHR5cGUgeyBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIgfSBmcm9tIFwiLi4vZ2xURkV4cG9ydGVyRXh0ZW5zaW9uXCI7XHJcbmltcG9ydCB7IF9FeHBvcnRlciB9IGZyb20gXCIuLi9nbFRGRXhwb3J0ZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBQQlJNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9QQlIvcGJyTWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgU3RhbmRhcmRNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9zdGFuZGFyZE1hdGVyaWFsXCI7XHJcblxyXG5jb25zdCBOQU1FID0gXCJLSFJfbWF0ZXJpYWxzX3VubGl0XCI7XHJcblxyXG4vKipcclxuICogQGludGVybmFsXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBjbGFzcyBLSFJfbWF0ZXJpYWxzX3VubGl0IGltcGxlbWVudHMgSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyIHtcclxuICAgIC8qKiBOYW1lIG9mIHRoaXMgZXh0ZW5zaW9uICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZSA9IE5BTUU7XHJcblxyXG4gICAgLyoqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyBlbmFibGVkICovXHJcbiAgICBwdWJsaWMgZW5hYmxlZCA9IHRydWU7XHJcblxyXG4gICAgLyoqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyByZXF1aXJlZCAqL1xyXG4gICAgcHVibGljIHJlcXVpcmVkID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBfd2FzVXNlZCA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgZ2V0IHdhc1VzZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dhc1VzZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7fVxyXG5cclxuICAgIHB1YmxpYyBwb3N0RXhwb3J0TWF0ZXJpYWxBc3luYz8oY29udGV4dDogc3RyaW5nLCBub2RlOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBQcm9taXNlPElNYXRlcmlhbD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdW5saXRNYXRlcmlhbCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbCBpbnN0YW5jZW9mIFBCUk1hdGVyaWFsKSB7XHJcbiAgICAgICAgICAgICAgICB1bmxpdE1hdGVyaWFsID0gYmFieWxvbk1hdGVyaWFsLnVubGl0O1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGJhYnlsb25NYXRlcmlhbCBpbnN0YW5jZW9mIFN0YW5kYXJkTWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgICAgIHVubGl0TWF0ZXJpYWwgPSBiYWJ5bG9uTWF0ZXJpYWwuZGlzYWJsZUxpZ2h0aW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodW5saXRNYXRlcmlhbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fd2FzVXNlZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG5vZGUuZXh0ZW5zaW9ucyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5leHRlbnNpb25zID0ge307XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbm9kZS5leHRlbnNpb25zW05BTUVdID0ge307XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJlc29sdmUobm9kZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbl9FeHBvcnRlci5SZWdpc3RlckV4dGVuc2lvbihOQU1FLCAoKSA9PiBuZXcgS0hSX21hdGVyaWFsc191bmxpdCgpKTtcclxuIiwiaW1wb3J0IHR5cGUgeyBJTWF0ZXJpYWwsIElLSFJNYXRlcmlhbHNWb2x1bWUgfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB0eXBlIHsgSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyIH0gZnJvbSBcIi4uL2dsVEZFeHBvcnRlckV4dGVuc2lvblwiO1xyXG5pbXBvcnQgeyBfRXhwb3J0ZXIgfSBmcm9tIFwiLi4vZ2xURkV4cG9ydGVyXCI7XHJcbmltcG9ydCB0eXBlIHsgTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgUEJSTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvUEJSL3Bick1hdGVyaWFsXCI7XHJcbmltcG9ydCB0eXBlIHsgQmFzZVRleHR1cmUgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvYmFzZVRleHR1cmVcIjtcclxuaW1wb3J0IHsgQ29sb3IzIH0gZnJvbSBcImNvcmUvTWF0aHMvbWF0aC5jb2xvclwiO1xyXG5cclxuY29uc3QgTkFNRSA9IFwiS0hSX21hdGVyaWFsc192b2x1bWVcIjtcclxuXHJcbi8qKlxyXG4gKiBbU3BlY2lmaWNhdGlvbl0oaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFpbi9leHRlbnNpb25zLzIuMC9LaHJvbm9zL0tIUl9tYXRlcmlhbHNfdm9sdW1lL1JFQURNRS5tZClcclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGNsYXNzIEtIUl9tYXRlcmlhbHNfdm9sdW1lIGltcGxlbWVudHMgSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyIHtcclxuICAgIC8qKiBOYW1lIG9mIHRoaXMgZXh0ZW5zaW9uICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZSA9IE5BTUU7XHJcblxyXG4gICAgLyoqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyBlbmFibGVkICovXHJcbiAgICBwdWJsaWMgZW5hYmxlZCA9IHRydWU7XHJcblxyXG4gICAgLyoqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyByZXF1aXJlZCAqL1xyXG4gICAgcHVibGljIHJlcXVpcmVkID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBfZXhwb3J0ZXI6IF9FeHBvcnRlcjtcclxuXHJcbiAgICBwcml2YXRlIF93YXNVc2VkID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZXhwb3J0ZXI6IF9FeHBvcnRlcikge1xyXG4gICAgICAgIHRoaXMuX2V4cG9ydGVyID0gZXhwb3J0ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7fVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBnZXQgd2FzVXNlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fd2FzVXNlZDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFmdGVyIGV4cG9ydGluZyBhIG1hdGVyaWFsLCBkZWFsIHdpdGggYWRkaXRpb25hbCB0ZXh0dXJlc1xyXG4gICAgICogQHBhcmFtIGNvbnRleHQgR0xURiBjb250ZXh0IG9mIHRoZSBtYXRlcmlhbFxyXG4gICAgICogQHBhcmFtIG5vZGUgZXhwb3J0ZWQgR0xURiBub2RlXHJcbiAgICAgKiBAcGFyYW0gYmFieWxvbk1hdGVyaWFsIGNvcnJlc3BvbmRpbmcgYmFieWxvbiBtYXRlcmlhbFxyXG4gICAgICogQHJldHVybnMgYXJyYXkgb2YgYWRkaXRpb25hbCB0ZXh0dXJlcyB0byBleHBvcnRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHBvc3RFeHBvcnRNYXRlcmlhbEFkZGl0aW9uYWxUZXh0dXJlcz8oY29udGV4dDogc3RyaW5nLCBub2RlOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBCYXNlVGV4dHVyZVtdIHtcclxuICAgICAgICBjb25zdCBhZGRpdGlvbmFsVGV4dHVyZXM6IEJhc2VUZXh0dXJlW10gPSBbXTtcclxuXHJcbiAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbCBpbnN0YW5jZW9mIFBCUk1hdGVyaWFsKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9pc0V4dGVuc2lvbkVuYWJsZWQoYmFieWxvbk1hdGVyaWFsKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbC5zdWJTdXJmYWNlLnRoaWNrbmVzc1RleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRpdGlvbmFsVGV4dHVyZXMucHVzaChiYWJ5bG9uTWF0ZXJpYWwuc3ViU3VyZmFjZS50aGlja25lc3NUZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBhZGRpdGlvbmFsVGV4dHVyZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBhZGRpdGlvbmFsVGV4dHVyZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfaXNFeHRlbnNpb25FbmFibGVkKG1hdDogUEJSTWF0ZXJpYWwpOiBib29sZWFuIHtcclxuICAgICAgICAvLyBUaGlzIGV4dGVuc2lvbiBtdXN0IG5vdCBiZSB1c2VkIG9uIGEgbWF0ZXJpYWwgdGhhdCBhbHNvIHVzZXMgS0hSX21hdGVyaWFsc191bmxpdFxyXG4gICAgICAgIGlmIChtYXQudW5saXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzdWJzID0gbWF0LnN1YlN1cmZhY2U7XHJcbiAgICAgICAgLy8gdGhpcyBleHRlbnNpb24gcmVxdWlyZXMgZWl0aGVyIHRoZSBLSFJfbWF0ZXJpYWxzX3RyYW5zbWlzc2lvbiBvciBLSFJfbWF0ZXJpYWxzX2RpZmZ1c2VfdHJhbnNtaXNzaW9uIGV4dGVuc2lvbnMuXHJcbiAgICAgICAgaWYgKCFzdWJzLmlzUmVmcmFjdGlvbkVuYWJsZWQgJiYgIXN1YnMuaXNUcmFuc2x1Y2VuY3lFbmFibGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgKHN1YnMubWF4aW11bVRoaWNrbmVzcyAhPSB1bmRlZmluZWQgJiYgc3Vicy5tYXhpbXVtVGhpY2tuZXNzICE9IDApIHx8XHJcbiAgICAgICAgICAgIChzdWJzLnRpbnRDb2xvckF0RGlzdGFuY2UgIT0gdW5kZWZpbmVkICYmIHN1YnMudGludENvbG9yQXREaXN0YW5jZSAhPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFkpIHx8XHJcbiAgICAgICAgICAgIChzdWJzLnRpbnRDb2xvciAhPSB1bmRlZmluZWQgJiYgc3Vicy50aW50Q29sb3IgIT0gQ29sb3IzLldoaXRlKCkpIHx8XHJcbiAgICAgICAgICAgIHRoaXMuX2hhc1RleHR1cmVzRXh0ZW5zaW9uKG1hdClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2hhc1RleHR1cmVzRXh0ZW5zaW9uKG1hdDogUEJSTWF0ZXJpYWwpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gbWF0LnN1YlN1cmZhY2UudGhpY2tuZXNzVGV4dHVyZSAhPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWZ0ZXIgZXhwb3J0aW5nIGEgbWF0ZXJpYWxcclxuICAgICAqIEBwYXJhbSBjb250ZXh0IEdMVEYgY29udGV4dCBvZiB0aGUgbWF0ZXJpYWxcclxuICAgICAqIEBwYXJhbSBub2RlIGV4cG9ydGVkIEdMVEYgbm9kZVxyXG4gICAgICogQHBhcmFtIGJhYnlsb25NYXRlcmlhbCBjb3JyZXNwb25kaW5nIGJhYnlsb24gbWF0ZXJpYWxcclxuICAgICAqIEByZXR1cm5zIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSB1cGRhdGVkIG5vZGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHBvc3RFeHBvcnRNYXRlcmlhbEFzeW5jPyhjb250ZXh0OiBzdHJpbmcsIG5vZGU6IElNYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCk6IFByb21pc2U8SU1hdGVyaWFsPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwgaW5zdGFuY2VvZiBQQlJNYXRlcmlhbCAmJiB0aGlzLl9pc0V4dGVuc2lvbkVuYWJsZWQoYmFieWxvbk1hdGVyaWFsKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fd2FzVXNlZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3VicyA9IGJhYnlsb25NYXRlcmlhbC5zdWJTdXJmYWNlO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGhpY2tuZXNzRmFjdG9yID0gc3Vicy5tYXhpbXVtVGhpY2tuZXNzID09IDAgPyB1bmRlZmluZWQgOiBzdWJzLm1heGltdW1UaGlja25lc3M7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0aGlja25lc3NUZXh0dXJlID0gdGhpcy5fZXhwb3J0ZXIuX2dsVEZNYXRlcmlhbEV4cG9ydGVyLl9nZXRUZXh0dXJlSW5mbyhzdWJzLnRoaWNrbmVzc1RleHR1cmUpID8/IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGF0dGVudWF0aW9uRGlzdGFuY2UgPSBzdWJzLnRpbnRDb2xvckF0RGlzdGFuY2UgPT0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZID8gdW5kZWZpbmVkIDogc3Vicy50aW50Q29sb3JBdERpc3RhbmNlO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXR0ZW51YXRpb25Db2xvciA9IHN1YnMudGludENvbG9yLmVxdWFsc0Zsb2F0cygxLjAsIDEuMCwgMS4wKSA/IHVuZGVmaW5lZCA6IHN1YnMudGludENvbG9yLmFzQXJyYXkoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCB2b2x1bWVJbmZvOiBJS0hSTWF0ZXJpYWxzVm9sdW1lID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaWNrbmVzc0ZhY3RvcjogdGhpY2tuZXNzRmFjdG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaWNrbmVzc1RleHR1cmU6IHRoaWNrbmVzc1RleHR1cmUsXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0ZW51YXRpb25EaXN0YW5jZTogYXR0ZW51YXRpb25EaXN0YW5jZSxcclxuICAgICAgICAgICAgICAgICAgICBhdHRlbnVhdGlvbkNvbG9yOiBhdHRlbnVhdGlvbkNvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIGhhc1RleHR1cmVzOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9oYXNUZXh0dXJlc0V4dGVuc2lvbihiYWJ5bG9uTWF0ZXJpYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgbm9kZS5leHRlbnNpb25zID0gbm9kZS5leHRlbnNpb25zIHx8IHt9O1xyXG4gICAgICAgICAgICAgICAgbm9kZS5leHRlbnNpb25zW05BTUVdID0gdm9sdW1lSW5mbztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXNvbHZlKG5vZGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5fRXhwb3J0ZXIuUmVnaXN0ZXJFeHRlbnNpb24oTkFNRSwgKGV4cG9ydGVyKSA9PiBuZXcgS0hSX21hdGVyaWFsc192b2x1bWUoZXhwb3J0ZXIpKTtcclxuIiwiaW1wb3J0IHR5cGUgeyBJVGV4dHVyZUluZm8sIElLSFJUZXh0dXJlVHJhbnNmb3JtIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBUb29scyB9IGZyb20gXCJjb3JlL01pc2MvdG9vbHNcIjtcclxuaW1wb3J0IHR5cGUgeyBUZXh0dXJlIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1RleHR1cmVzL3RleHR1cmVcIjtcclxuaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCJjb3JlL3R5cGVzXCI7XHJcbmltcG9ydCB0eXBlIHsgSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyIH0gZnJvbSBcIi4uL2dsVEZFeHBvcnRlckV4dGVuc2lvblwiO1xyXG5pbXBvcnQgeyBfRXhwb3J0ZXIgfSBmcm9tIFwiLi4vZ2xURkV4cG9ydGVyXCI7XHJcblxyXG5jb25zdCBOQU1FID0gXCJLSFJfdGV4dHVyZV90cmFuc2Zvcm1cIjtcclxuXHJcbi8qKlxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGNsYXNzIEtIUl90ZXh0dXJlX3RyYW5zZm9ybSBpbXBsZW1lbnRzIElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMiB7XHJcbiAgICAvKiogTmFtZSBvZiB0aGlzIGV4dGVuc2lvbiAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBOQU1FO1xyXG5cclxuICAgIC8qKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgZW5hYmxlZCAqL1xyXG4gICAgcHVibGljIGVuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgIC8qKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgcmVxdWlyZWQgKi9cclxuICAgIHB1YmxpYyByZXF1aXJlZCA9IGZhbHNlO1xyXG5cclxuICAgIC8qKiBSZWZlcmVuY2UgdG8gdGhlIGdsVEYgZXhwb3J0ZXIgKi9cclxuICAgIHByaXZhdGUgX3dhc1VzZWQgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7fVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBnZXQgd2FzVXNlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fd2FzVXNlZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcG9zdEV4cG9ydFRleHR1cmU/KGNvbnRleHQ6IHN0cmluZywgdGV4dHVyZUluZm86IElUZXh0dXJlSW5mbywgYmFieWxvblRleHR1cmU6IFRleHR1cmUpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBjYW5Vc2VFeHRlbnNpb24gPVxyXG4gICAgICAgICAgICBiYWJ5bG9uVGV4dHVyZSAmJlxyXG4gICAgICAgICAgICAoKGJhYnlsb25UZXh0dXJlLnVBbmcgPT09IDAgJiYgYmFieWxvblRleHR1cmUud0FuZyA9PT0gMCAmJiBiYWJ5bG9uVGV4dHVyZS52QW5nID09PSAwKSB8fFxyXG4gICAgICAgICAgICAgICAgKGJhYnlsb25UZXh0dXJlLnVSb3RhdGlvbkNlbnRlciA9PT0gMCAmJiBiYWJ5bG9uVGV4dHVyZS52Um90YXRpb25DZW50ZXIgPT09IDApKTtcclxuXHJcbiAgICAgICAgaWYgKGNhblVzZUV4dGVuc2lvbikge1xyXG4gICAgICAgICAgICBjb25zdCB0ZXh0dXJlVHJhbnNmb3JtOiBJS0hSVGV4dHVyZVRyYW5zZm9ybSA9IHt9O1xyXG4gICAgICAgICAgICBsZXQgdHJhbnNmb3JtSXNSZXF1aXJlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgaWYgKGJhYnlsb25UZXh0dXJlLnVPZmZzZXQgIT09IDAgfHwgYmFieWxvblRleHR1cmUudk9mZnNldCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGV4dHVyZVRyYW5zZm9ybS5vZmZzZXQgPSBbYmFieWxvblRleHR1cmUudU9mZnNldCwgYmFieWxvblRleHR1cmUudk9mZnNldF07XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1Jc1JlcXVpcmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGJhYnlsb25UZXh0dXJlLnVTY2FsZSAhPT0gMSB8fCBiYWJ5bG9uVGV4dHVyZS52U2NhbGUgIT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHRleHR1cmVUcmFuc2Zvcm0uc2NhbGUgPSBbYmFieWxvblRleHR1cmUudVNjYWxlLCBiYWJ5bG9uVGV4dHVyZS52U2NhbGVdO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtSXNSZXF1aXJlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChiYWJ5bG9uVGV4dHVyZS53QW5nICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0dXJlVHJhbnNmb3JtLnJvdGF0aW9uID0gLWJhYnlsb25UZXh0dXJlLndBbmc7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1Jc1JlcXVpcmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGJhYnlsb25UZXh0dXJlLmNvb3JkaW5hdGVzSW5kZXggIT09IDApIHtcclxuICAgICAgICAgICAgICAgIHRleHR1cmVUcmFuc2Zvcm0udGV4Q29vcmQgPSBiYWJ5bG9uVGV4dHVyZS5jb29yZGluYXRlc0luZGV4O1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtSXNSZXF1aXJlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghdHJhbnNmb3JtSXNSZXF1aXJlZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLl93YXNVc2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKCF0ZXh0dXJlSW5mby5leHRlbnNpb25zKSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0dXJlSW5mby5leHRlbnNpb25zID0ge307XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGV4dHVyZUluZm8uZXh0ZW5zaW9uc1tOQU1FXSA9IHRleHR1cmVUcmFuc2Zvcm07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwcmVFeHBvcnRUZXh0dXJlQXN5bmMoY29udGV4dDogc3RyaW5nLCBiYWJ5bG9uVGV4dHVyZTogVGV4dHVyZSk6IFByb21pc2U8TnVsbGFibGU8VGV4dHVyZT4+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzY2VuZSA9IGJhYnlsb25UZXh0dXJlLmdldFNjZW5lKCk7XHJcbiAgICAgICAgICAgIGlmICghc2NlbmUpIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChgJHtjb250ZXh0fTogXCJzY2VuZVwiIGlzIG5vdCBkZWZpbmVkIGZvciBCYWJ5bG9uIHRleHR1cmUgJHtiYWJ5bG9uVGV4dHVyZS5uYW1lfSFgKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICogVGhlIEtIUl90ZXh0dXJlX3RyYW5zZm9ybSBzY2hlbWEgb25seSBzdXBwb3J0cyB3IHJvdGF0aW9uIGFyb3VuZCB0aGUgb3JpZ2luLlxyXG4gICAgICAgICAgICAgKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFpbi9leHRlbnNpb25zLzIuMC9LaHJvbm9zL0tIUl90ZXh0dXJlX3RyYW5zZm9ybSNnbHRmLXNjaGVtYS11cGRhdGVzLlxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgaWYgKGJhYnlsb25UZXh0dXJlLnVBbmcgIT09IDAgfHwgYmFieWxvblRleHR1cmUudkFuZyAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgVG9vbHMuV2FybihgJHtjb250ZXh0fTogVGV4dHVyZSAke2JhYnlsb25UZXh0dXJlLm5hbWV9IHdpdGggcm90YXRpb24gaW4gdGhlIHUgb3IgdiBheGlzIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZ2xURi5gKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYmFieWxvblRleHR1cmUud0FuZyAhPT0gMCAmJiAoYmFieWxvblRleHR1cmUudVJvdGF0aW9uQ2VudGVyICE9PSAwIHx8IGJhYnlsb25UZXh0dXJlLnZSb3RhdGlvbkNlbnRlciAhPT0gMCkpIHtcclxuICAgICAgICAgICAgICAgIFRvb2xzLldhcm4oYCR7Y29udGV4dH06IFRleHR1cmUgJHtiYWJ5bG9uVGV4dHVyZS5uYW1lfSB3aXRoIHJvdGF0aW9uIG5vdCBjZW50ZXJlZCBhdCB0aGUgb3JpZ2luIGNhbm5vdCBiZSBleHBvcnRlZCB3aXRoICR7TkFNRX1gKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKGJhYnlsb25UZXh0dXJlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5fRXhwb3J0ZXIuUmVnaXN0ZXJFeHRlbnNpb24oTkFNRSwgKCkgPT4gbmV3IEtIUl90ZXh0dXJlX3RyYW5zZm9ybSgpKTtcclxuIiwiZXhwb3J0ICogZnJvbSBcIi4vS0hSX3RleHR1cmVfdHJhbnNmb3JtXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL0tIUl9saWdodHNfcHVuY3R1YWxcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vS0hSX21hdGVyaWFsc19jbGVhcmNvYXRcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vS0hSX21hdGVyaWFsc19pcmlkZXNjZW5jZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9LSFJfbWF0ZXJpYWxzX2FuaXNvdHJvcHlcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vS0hSX21hdGVyaWFsc19zaGVlblwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9LSFJfbWF0ZXJpYWxzX3VubGl0XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL0tIUl9tYXRlcmlhbHNfaW9yXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL0tIUl9tYXRlcmlhbHNfc3BlY3VsYXJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vS0hSX21hdGVyaWFsc192b2x1bWVcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vS0hSX21hdGVyaWFsc19kaXNwZXJzaW9uXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL0tIUl9tYXRlcmlhbHNfdHJhbnNtaXNzaW9uXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL0VYVF9tZXNoX2dwdV9pbnN0YW5jaW5nXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL0tIUl9tYXRlcmlhbHNfZW1pc3NpdmVfc3RyZW5ndGhcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vS0hSX21hdGVyaWFsc19kaWZmdXNlX3RyYW5zbWlzc2lvblwiO1xyXG4iLCJpbXBvcnQgdHlwZSB7IElBbmltYXRpb24sIElOb2RlLCBJQnVmZmVyVmlldywgSUFjY2Vzc29yLCBJQW5pbWF0aW9uU2FtcGxlciwgSUFuaW1hdGlvbkNoYW5uZWwgfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IEFuaW1hdGlvblNhbXBsZXJJbnRlcnBvbGF0aW9uLCBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCwgQWNjZXNzb3JUeXBlLCBBY2Nlc3NvckNvbXBvbmVudFR5cGUgfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB0eXBlIHsgTm9kZSB9IGZyb20gXCJjb3JlL25vZGVcIjtcclxuaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCJjb3JlL3R5cGVzXCI7XHJcbmltcG9ydCB7IFZlY3RvcjMsIFF1YXRlcm5pb24gfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLnZlY3RvclwiO1xyXG5pbXBvcnQgeyBUb29scyB9IGZyb20gXCJjb3JlL01pc2MvdG9vbHNcIjtcclxuaW1wb3J0IHsgQW5pbWF0aW9uIH0gZnJvbSBcImNvcmUvQW5pbWF0aW9ucy9hbmltYXRpb25cIjtcclxuaW1wb3J0IHsgVHJhbnNmb3JtTm9kZSB9IGZyb20gXCJjb3JlL01lc2hlcy90cmFuc2Zvcm1Ob2RlXCI7XHJcbmltcG9ydCB0eXBlIHsgU2NlbmUgfSBmcm9tIFwiY29yZS9zY2VuZVwiO1xyXG5pbXBvcnQgeyBNb3JwaFRhcmdldCB9IGZyb20gXCJjb3JlL01vcnBoL21vcnBoVGFyZ2V0XCI7XHJcbmltcG9ydCB7IE1lc2ggfSBmcm9tIFwiY29yZS9NZXNoZXMvbWVzaFwiO1xyXG5cclxuaW1wb3J0IHR5cGUgeyBfQmluYXJ5V3JpdGVyIH0gZnJvbSBcIi4vZ2xURkV4cG9ydGVyXCI7XHJcbmltcG9ydCB7IF9HTFRGVXRpbGl0aWVzIH0gZnJvbSBcIi4vZ2xURlV0aWxpdGllc1wiO1xyXG5pbXBvcnQgdHlwZSB7IElBbmltYXRpb25LZXkgfSBmcm9tIFwiY29yZS9BbmltYXRpb25zL2FuaW1hdGlvbktleVwiO1xyXG5pbXBvcnQgeyBBbmltYXRpb25LZXlJbnRlcnBvbGF0aW9uIH0gZnJvbSBcImNvcmUvQW5pbWF0aW9ucy9hbmltYXRpb25LZXlcIjtcclxuXHJcbmltcG9ydCB7IENhbWVyYSB9IGZyb20gXCJjb3JlL0NhbWVyYXMvY2FtZXJhXCI7XHJcbmltcG9ydCB7IExpZ2h0IH0gZnJvbSBcImNvcmUvTGlnaHRzL2xpZ2h0XCI7XHJcblxyXG4vKipcclxuICogQGludGVybmFsXHJcbiAqIEludGVyZmFjZSB0byBzdG9yZSBhbmltYXRpb24gZGF0YS5cclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGludGVyZmFjZSBfSUFuaW1hdGlvbkRhdGEge1xyXG4gICAgLyoqXHJcbiAgICAgKiBLZXlmcmFtZSBkYXRhLlxyXG4gICAgICovXHJcbiAgICBpbnB1dHM6IG51bWJlcltdO1xyXG4gICAgLyoqXHJcbiAgICAgKiBWYWx1ZSBkYXRhLlxyXG4gICAgICovXHJcbiAgICBvdXRwdXRzOiBudW1iZXJbXVtdO1xyXG4gICAgLyoqXHJcbiAgICAgKiBBbmltYXRpb24gaW50ZXJwb2xhdGlvbiBkYXRhLlxyXG4gICAgICovXHJcbiAgICBzYW1wbGVySW50ZXJwb2xhdGlvbjogQW5pbWF0aW9uU2FtcGxlckludGVycG9sYXRpb247XHJcbiAgICAvKipcclxuICAgICAqIE1pbmltdW0ga2V5ZnJhbWUgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIGlucHV0c01pbjogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBNYXhpbXVtIGtleWZyYW1lIHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBpbnB1dHNNYXg6IG51bWJlcjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgaW50ZXJmYWNlIF9JQW5pbWF0aW9uSW5mbyB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSB0YXJnZXQgY2hhbm5lbCBmb3IgdGhlIGFuaW1hdGlvblxyXG4gICAgICovXHJcbiAgICBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aDogQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGg7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBnbFRGIGFjY2Vzc29yIHR5cGUgZm9yIHRoZSBkYXRhLlxyXG4gICAgICovXHJcbiAgICBkYXRhQWNjZXNzb3JUeXBlOiBBY2Nlc3NvclR5cGUuVkVDMyB8IEFjY2Vzc29yVHlwZS5WRUM0IHwgQWNjZXNzb3JUeXBlLlNDQUxBUjtcclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIGlmIHF1YXRlcm5pb25zIHNob3VsZCBiZSB1c2VkLlxyXG4gICAgICovXHJcbiAgICB1c2VRdWF0ZXJuaW9uOiBib29sZWFuO1xyXG59XHJcblxyXG4vKipcclxuICogQGludGVybmFsXHJcbiAqIEVudW0gZm9yIGhhbmRsaW5nIGluIHRhbmdlbnQgYW5kIG91dCB0YW5nZW50LlxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5lbnVtIF9UYW5nZW50VHlwZSB7XHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGF0IGlucHV0IHRhbmdlbnRzIGFyZSB1c2VkLlxyXG4gICAgICovXHJcbiAgICBJTlRBTkdFTlQsXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGF0IG91dHB1dCB0YW5nZW50cyBhcmUgdXNlZC5cclxuICAgICAqL1xyXG4gICAgT1VUVEFOR0VOVCxcclxufVxyXG5cclxuLyoqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKiBVdGlsaXR5IGNsYXNzIGZvciBnZW5lcmF0aW5nIGdsVEYgYW5pbWF0aW9uIGRhdGEgZnJvbSBCYWJ5bG9uSlMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgX0dMVEZBbmltYXRpb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBEZXRlcm1pbmUgaWYgYSBub2RlIGlzIHRyYW5zZm9ybWFibGUgLSBpZSBoYXMgcHJvcGVydGllcyBpdCBzaG91bGQgYmUgcGFydCBvZiBhbmltYXRpb24gb2YgdHJhbnNmb3JtYXRpb24uXHJcbiAgICAgKiBAcGFyYW0gYmFieWxvbk5vZGUgdGhlIG5vZGUgdG8gdGVzdFxyXG4gICAgICogQHJldHVybnMgdHJ1ZSBpZiBjYW4gYmUgYW5pbWF0ZWQsIGZhbHNlIG90aGVyd2lzZS4gRmFsc2UgaWYgdGhlIHBhcmFtZXRlciBpcyBudWxsIG9yIHVuZGVmaW5lZC5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX0lzVHJhbnNmb3JtYWJsZShiYWJ5bG9uTm9kZTogTm9kZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBiYWJ5bG9uTm9kZSAmJiAoYmFieWxvbk5vZGUgaW5zdGFuY2VvZiBUcmFuc2Zvcm1Ob2RlIHx8IGJhYnlsb25Ob2RlIGluc3RhbmNlb2YgQ2FtZXJhIHx8IGJhYnlsb25Ob2RlIGluc3RhbmNlb2YgTGlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGlnbm9yZVxyXG4gICAgICpcclxuICAgICAqIENyZWF0ZXMgZ2xURiBjaGFubmVsIGFuaW1hdGlvbiBmcm9tIEJhYnlsb25KUyBhbmltYXRpb24uXHJcbiAgICAgKiBAcGFyYW0gYmFieWxvblRyYW5zZm9ybU5vZGUgLSBCYWJ5bG9uSlMgbWVzaC5cclxuICAgICAqIEBwYXJhbSBhbmltYXRpb24gLSBhbmltYXRpb24uXHJcbiAgICAgKiBAcGFyYW0gYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGggLSBUaGUgdGFyZ2V0IGFuaW1hdGlvbiBjaGFubmVsLlxyXG4gICAgICogQHBhcmFtIHVzZVF1YXRlcm5pb24gLSBTcGVjaWZpZXMgaWYgcXVhdGVybmlvbnMgYXJlIHVzZWQuXHJcbiAgICAgKiBAcmV0dXJucyBudWxsYWJsZSBJQW5pbWF0aW9uRGF0YVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIF9DcmVhdGVOb2RlQW5pbWF0aW9uKFxyXG4gICAgICAgIGJhYnlsb25UcmFuc2Zvcm1Ob2RlOiBOb2RlLFxyXG4gICAgICAgIGFuaW1hdGlvbjogQW5pbWF0aW9uLFxyXG4gICAgICAgIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoOiBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCxcclxuICAgICAgICB1c2VRdWF0ZXJuaW9uOiBib29sZWFuLFxyXG4gICAgICAgIGFuaW1hdGlvblNhbXBsZVJhdGU6IG51bWJlclxyXG4gICAgKTogTnVsbGFibGU8X0lBbmltYXRpb25EYXRhPiB7XHJcbiAgICAgICAgaWYgKHRoaXMuX0lzVHJhbnNmb3JtYWJsZShiYWJ5bG9uVHJhbnNmb3JtTm9kZSkpIHtcclxuICAgICAgICAgICAgY29uc3QgaW5wdXRzOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgICAgICAgICBjb25zdCBvdXRwdXRzOiBudW1iZXJbXVtdID0gW107XHJcbiAgICAgICAgICAgIGNvbnN0IGtleUZyYW1lcyA9IGFuaW1hdGlvbi5nZXRLZXlzKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1pbk1heEtleUZyYW1lcyA9IF9HTFRGQW5pbWF0aW9uLl9DYWxjdWxhdGVNaW5NYXhLZXlGcmFtZXMoa2V5RnJhbWVzKTtcclxuICAgICAgICAgICAgY29uc3QgaW50ZXJwb2xhdGlvbk9yQmFrZSA9IF9HTFRGQW5pbWF0aW9uLl9EZWR1Y2VJbnRlcnBvbGF0aW9uKGtleUZyYW1lcywgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsIHVzZVF1YXRlcm5pb24pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaW50ZXJwb2xhdGlvbiA9IGludGVycG9sYXRpb25PckJha2UuaW50ZXJwb2xhdGlvblR5cGU7XHJcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZEJha2VBbmltYXRpb24gPSBpbnRlcnBvbGF0aW9uT3JCYWtlLnNob3VsZEJha2VBbmltYXRpb247XHJcblxyXG4gICAgICAgICAgICBpZiAoc2hvdWxkQmFrZUFuaW1hdGlvbikge1xyXG4gICAgICAgICAgICAgICAgX0dMVEZBbmltYXRpb24uX0NyZWF0ZUJha2VkQW5pbWF0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgIGJhYnlsb25UcmFuc2Zvcm1Ob2RlLFxyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCxcclxuICAgICAgICAgICAgICAgICAgICBtaW5NYXhLZXlGcmFtZXMubWluLFxyXG4gICAgICAgICAgICAgICAgICAgIG1pbk1heEtleUZyYW1lcy5tYXgsXHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLmZyYW1lUGVyU2Vjb25kLFxyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvblNhbXBsZVJhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRzLFxyXG4gICAgICAgICAgICAgICAgICAgIG91dHB1dHMsXHJcbiAgICAgICAgICAgICAgICAgICAgbWluTWF4S2V5RnJhbWVzLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZVF1YXRlcm5pb25cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW50ZXJwb2xhdGlvbiA9PT0gQW5pbWF0aW9uU2FtcGxlckludGVycG9sYXRpb24uTElORUFSIHx8IGludGVycG9sYXRpb24gPT09IEFuaW1hdGlvblNhbXBsZXJJbnRlcnBvbGF0aW9uLlNURVApIHtcclxuICAgICAgICAgICAgICAgICAgICBfR0xURkFuaW1hdGlvbi5fQ3JlYXRlTGluZWFyT3JTdGVwQW5pbWF0aW9uKGJhYnlsb25UcmFuc2Zvcm1Ob2RlLCBhbmltYXRpb24sIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLCBpbnB1dHMsIG91dHB1dHMsIHVzZVF1YXRlcm5pb24pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpbnRlcnBvbGF0aW9uID09PSBBbmltYXRpb25TYW1wbGVySW50ZXJwb2xhdGlvbi5DVUJJQ1NQTElORSkge1xyXG4gICAgICAgICAgICAgICAgICAgIF9HTFRGQW5pbWF0aW9uLl9DcmVhdGVDdWJpY1NwbGluZUFuaW1hdGlvbihiYWJ5bG9uVHJhbnNmb3JtTm9kZSwgYW5pbWF0aW9uLCBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCwgaW5wdXRzLCBvdXRwdXRzLCB1c2VRdWF0ZXJuaW9uKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX0dMVEZBbmltYXRpb24uX0NyZWF0ZUJha2VkQW5pbWF0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uVHJhbnNmb3JtTm9kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluTWF4S2V5RnJhbWVzLm1pbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluTWF4S2V5RnJhbWVzLm1heCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLmZyYW1lUGVyU2Vjb25kLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25TYW1wbGVSYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbk1heEtleUZyYW1lcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlUXVhdGVybmlvblxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChpbnB1dHMubGVuZ3RoICYmIG91dHB1dHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQ6IF9JQW5pbWF0aW9uRGF0YSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dHM6IGlucHV0cyxcclxuICAgICAgICAgICAgICAgICAgICBvdXRwdXRzOiBvdXRwdXRzLFxyXG4gICAgICAgICAgICAgICAgICAgIHNhbXBsZXJJbnRlcnBvbGF0aW9uOiBpbnRlcnBvbGF0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0c01pbjogc2hvdWxkQmFrZUFuaW1hdGlvbiA/IG1pbk1heEtleUZyYW1lcy5taW4gOiBUb29scy5GbG9hdFJvdW5kKG1pbk1heEtleUZyYW1lcy5taW4gLyBhbmltYXRpb24uZnJhbWVQZXJTZWNvbmQpLFxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0c01heDogc2hvdWxkQmFrZUFuaW1hdGlvbiA/IG1pbk1heEtleUZyYW1lcy5tYXggOiBUb29scy5GbG9hdFJvdW5kKG1pbk1heEtleUZyYW1lcy5tYXggLyBhbmltYXRpb24uZnJhbWVQZXJTZWNvbmQpLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfRGVkdWNlQW5pbWF0aW9uSW5mbyhhbmltYXRpb246IEFuaW1hdGlvbik6IE51bGxhYmxlPF9JQW5pbWF0aW9uSW5mbz4ge1xyXG4gICAgICAgIGxldCBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aDogTnVsbGFibGU8QW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGg+ID0gbnVsbDtcclxuICAgICAgICBsZXQgZGF0YUFjY2Vzc29yVHlwZSA9IEFjY2Vzc29yVHlwZS5WRUMzO1xyXG4gICAgICAgIGxldCB1c2VRdWF0ZXJuaW9uOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAgICAgY29uc3QgcHJvcGVydHkgPSBhbmltYXRpb24udGFyZ2V0UHJvcGVydHkuc3BsaXQoXCIuXCIpO1xyXG4gICAgICAgIHN3aXRjaCAocHJvcGVydHlbMF0pIHtcclxuICAgICAgICAgICAgY2FzZSBcInNjYWxpbmdcIjoge1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGggPSBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aC5TQ0FMRTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJwb3NpdGlvblwiOiB7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCA9IEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLlRSQU5TTEFUSU9OO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcInJvdGF0aW9uXCI6IHtcclxuICAgICAgICAgICAgICAgIGRhdGFBY2Nlc3NvclR5cGUgPSBBY2Nlc3NvclR5cGUuVkVDNDtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoID0gQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGguUk9UQVRJT047XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwicm90YXRpb25RdWF0ZXJuaW9uXCI6IHtcclxuICAgICAgICAgICAgICAgIGRhdGFBY2Nlc3NvclR5cGUgPSBBY2Nlc3NvclR5cGUuVkVDNDtcclxuICAgICAgICAgICAgICAgIHVzZVF1YXRlcm5pb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGggPSBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aC5ST1RBVElPTjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJpbmZsdWVuY2VcIjoge1xyXG4gICAgICAgICAgICAgICAgZGF0YUFjY2Vzc29yVHlwZSA9IEFjY2Vzc29yVHlwZS5TQ0FMQVI7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCA9IEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLldFSUdIVFM7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgICAgICBUb29scy5FcnJvcihgVW5zdXBwb3J0ZWQgYW5pbWF0YWJsZSBwcm9wZXJ0eSAke3Byb3BlcnR5WzBdfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4geyBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aDogYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsIGRhdGFBY2Nlc3NvclR5cGU6IGRhdGFBY2Nlc3NvclR5cGUsIHVzZVF1YXRlcm5pb246IHVzZVF1YXRlcm5pb24gfTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBUb29scy5FcnJvcihcImFuaW1hdGlvbiBjaGFubmVsIHRhcmdldCBwYXRoIGFuZCBkYXRhIGFjY2Vzc29yIHR5cGUgY291bGQgYmUgZGVkdWNlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaWdub3JlXHJcbiAgICAgKiBDcmVhdGUgbm9kZSBhbmltYXRpb25zIGZyb20gdGhlIHRyYW5zZm9ybSBub2RlIGFuaW1hdGlvbnNcclxuICAgICAqIEBwYXJhbSBiYWJ5bG9uTm9kZVxyXG4gICAgICogQHBhcmFtIHJ1bnRpbWVHTFRGQW5pbWF0aW9uXHJcbiAgICAgKiBAcGFyYW0gaWRsZUdMVEZBbmltYXRpb25zXHJcbiAgICAgKiBAcGFyYW0gbm9kZU1hcFxyXG4gICAgICogQHBhcmFtIG5vZGVzXHJcbiAgICAgKiBAcGFyYW0gYmluYXJ5V3JpdGVyXHJcbiAgICAgKiBAcGFyYW0gYnVmZmVyVmlld3NcclxuICAgICAqIEBwYXJhbSBhY2Nlc3NvcnNcclxuICAgICAqIEBwYXJhbSBhbmltYXRpb25TYW1wbGVSYXRlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgX0NyZWF0ZU5vZGVBbmltYXRpb25Gcm9tTm9kZUFuaW1hdGlvbnMoXHJcbiAgICAgICAgYmFieWxvbk5vZGU6IE5vZGUsXHJcbiAgICAgICAgcnVudGltZUdMVEZBbmltYXRpb246IElBbmltYXRpb24sXHJcbiAgICAgICAgaWRsZUdMVEZBbmltYXRpb25zOiBJQW5pbWF0aW9uW10sXHJcbiAgICAgICAgbm9kZU1hcDogeyBba2V5OiBudW1iZXJdOiBudW1iZXIgfSxcclxuICAgICAgICBub2RlczogSU5vZGVbXSxcclxuICAgICAgICBiaW5hcnlXcml0ZXI6IF9CaW5hcnlXcml0ZXIsXHJcbiAgICAgICAgYnVmZmVyVmlld3M6IElCdWZmZXJWaWV3W10sXHJcbiAgICAgICAgYWNjZXNzb3JzOiBJQWNjZXNzb3JbXSxcclxuICAgICAgICBhbmltYXRpb25TYW1wbGVSYXRlOiBudW1iZXIsXHJcbiAgICAgICAgc2hvdWxkRXhwb3J0QW5pbWF0aW9uPzogKGFuaW1hdGlvbjogQW5pbWF0aW9uKSA9PiBib29sZWFuXHJcbiAgICApIHtcclxuICAgICAgICBsZXQgZ2xURkFuaW1hdGlvbjogSUFuaW1hdGlvbjtcclxuICAgICAgICBpZiAoX0dMVEZBbmltYXRpb24uX0lzVHJhbnNmb3JtYWJsZShiYWJ5bG9uTm9kZSkpIHtcclxuICAgICAgICAgICAgaWYgKGJhYnlsb25Ob2RlLmFuaW1hdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYW5pbWF0aW9uIG9mIGJhYnlsb25Ob2RlLmFuaW1hdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2hvdWxkRXhwb3J0QW5pbWF0aW9uICYmICFzaG91bGRFeHBvcnRBbmltYXRpb24oYW5pbWF0aW9uKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYW5pbWF0aW9uSW5mbyA9IF9HTFRGQW5pbWF0aW9uLl9EZWR1Y2VBbmltYXRpb25JbmZvKGFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFuaW1hdGlvbkluZm8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2xURkFuaW1hdGlvbiA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGFuaW1hdGlvbi5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FtcGxlcnM6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbm5lbHM6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfR0xURkFuaW1hdGlvbi5fQWRkQW5pbWF0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7YW5pbWF0aW9uLm5hbWV9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi5oYXNSdW5uaW5nUnVudGltZUFuaW1hdGlvbnMgPyBydW50aW1lR0xURkFuaW1hdGlvbiA6IGdsVEZBbmltYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uTm9kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkluZm8uZGF0YUFjY2Vzc29yVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkluZm8uYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlTWFwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmluYXJ5V3JpdGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyVmlld3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2Nlc3NvcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25JbmZvLnVzZVF1YXRlcm5pb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25TYW1wbGVSYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnbFRGQW5pbWF0aW9uLnNhbXBsZXJzLmxlbmd0aCAmJiBnbFRGQW5pbWF0aW9uLmNoYW5uZWxzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRsZUdMVEZBbmltYXRpb25zLnB1c2goZ2xURkFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaWdub3JlXHJcbiAgICAgKiBDcmVhdGUgaW5kaXZpZHVhbCBtb3JwaCBhbmltYXRpb25zIGZyb20gdGhlIG1lc2gncyBtb3JwaCB0YXJnZXQgYW5pbWF0aW9uIHRyYWNrc1xyXG4gICAgICogQHBhcmFtIGJhYnlsb25Ob2RlXHJcbiAgICAgKiBAcGFyYW0gcnVudGltZUdMVEZBbmltYXRpb25cclxuICAgICAqIEBwYXJhbSBpZGxlR0xURkFuaW1hdGlvbnNcclxuICAgICAqIEBwYXJhbSBub2RlTWFwXHJcbiAgICAgKiBAcGFyYW0gbm9kZXNcclxuICAgICAqIEBwYXJhbSBiaW5hcnlXcml0ZXJcclxuICAgICAqIEBwYXJhbSBidWZmZXJWaWV3c1xyXG4gICAgICogQHBhcmFtIGFjY2Vzc29yc1xyXG4gICAgICogQHBhcmFtIGFuaW1hdGlvblNhbXBsZVJhdGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBfQ3JlYXRlTW9ycGhUYXJnZXRBbmltYXRpb25Gcm9tTW9ycGhUYXJnZXRBbmltYXRpb25zKFxyXG4gICAgICAgIGJhYnlsb25Ob2RlOiBOb2RlLFxyXG4gICAgICAgIHJ1bnRpbWVHTFRGQW5pbWF0aW9uOiBJQW5pbWF0aW9uLFxyXG4gICAgICAgIGlkbGVHTFRGQW5pbWF0aW9uczogSUFuaW1hdGlvbltdLFxyXG4gICAgICAgIG5vZGVNYXA6IHsgW2tleTogbnVtYmVyXTogbnVtYmVyIH0sXHJcbiAgICAgICAgbm9kZXM6IElOb2RlW10sXHJcbiAgICAgICAgYmluYXJ5V3JpdGVyOiBfQmluYXJ5V3JpdGVyLFxyXG4gICAgICAgIGJ1ZmZlclZpZXdzOiBJQnVmZmVyVmlld1tdLFxyXG4gICAgICAgIGFjY2Vzc29yczogSUFjY2Vzc29yW10sXHJcbiAgICAgICAgYW5pbWF0aW9uU2FtcGxlUmF0ZTogbnVtYmVyLFxyXG4gICAgICAgIHNob3VsZEV4cG9ydEFuaW1hdGlvbj86IChhbmltYXRpb246IEFuaW1hdGlvbikgPT4gYm9vbGVhblxyXG4gICAgKSB7XHJcbiAgICAgICAgbGV0IGdsVEZBbmltYXRpb246IElBbmltYXRpb247XHJcbiAgICAgICAgaWYgKGJhYnlsb25Ob2RlIGluc3RhbmNlb2YgTWVzaCkge1xyXG4gICAgICAgICAgICBjb25zdCBtb3JwaFRhcmdldE1hbmFnZXIgPSBiYWJ5bG9uTm9kZS5tb3JwaFRhcmdldE1hbmFnZXI7XHJcbiAgICAgICAgICAgIGlmIChtb3JwaFRhcmdldE1hbmFnZXIpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbW9ycGhUYXJnZXRNYW5hZ2VyLm51bVRhcmdldHM7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vcnBoVGFyZ2V0ID0gbW9ycGhUYXJnZXRNYW5hZ2VyLmdldFRhcmdldChpKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGFuaW1hdGlvbiBvZiBtb3JwaFRhcmdldC5hbmltYXRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaG91bGRFeHBvcnRBbmltYXRpb24gJiYgIXNob3VsZEV4cG9ydEFuaW1hdGlvbihhbmltYXRpb24pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21iaW5lZEFuaW1hdGlvbiA9IG5ldyBBbmltYXRpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHthbmltYXRpb24ubmFtZX1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpbmZsdWVuY2VcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi5mcmFtZVBlclNlY29uZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi5kYXRhVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi5sb29wTW9kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi5lbmFibGVCbGVuZGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21iaW5lZEFuaW1hdGlvbktleXM6IElBbmltYXRpb25LZXlbXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhbmltYXRpb25LZXlzID0gYW5pbWF0aW9uLmdldEtleXMoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYW5pbWF0aW9uS2V5cy5sZW5ndGg7ICsraikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYW5pbWF0aW9uS2V5ID0gYW5pbWF0aW9uS2V5c1tqXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgbW9ycGhUYXJnZXRNYW5hZ2VyLm51bVRhcmdldHM7ICsraykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrID09IGkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tYmluZWRBbmltYXRpb25LZXlzLnB1c2goYW5pbWF0aW9uS2V5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21iaW5lZEFuaW1hdGlvbktleXMucHVzaCh7IGZyYW1lOiBhbmltYXRpb25LZXkuZnJhbWUsIHZhbHVlOiAwIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21iaW5lZEFuaW1hdGlvbi5zZXRLZXlzKGNvbWJpbmVkQW5pbWF0aW9uS2V5cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFuaW1hdGlvbkluZm8gPSBfR0xURkFuaW1hdGlvbi5fRGVkdWNlQW5pbWF0aW9uSW5mbyhjb21iaW5lZEFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbmltYXRpb25JbmZvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbFRGQW5pbWF0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGNvbWJpbmVkQW5pbWF0aW9uLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FtcGxlcnM6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5uZWxzOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfR0xURkFuaW1hdGlvbi5fQWRkQW5pbWF0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi5oYXNSdW5uaW5nUnVudGltZUFuaW1hdGlvbnMgPyBydW50aW1lR0xURkFuaW1hdGlvbiA6IGdsVEZBbmltYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFieWxvbk5vZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tYmluZWRBbmltYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uSW5mby5kYXRhQWNjZXNzb3JUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkluZm8uYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZU1hcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaW5hcnlXcml0ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyVmlld3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXNzb3JzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkluZm8udXNlUXVhdGVybmlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25TYW1wbGVSYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vcnBoVGFyZ2V0TWFuYWdlci5udW1UYXJnZXRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdsVEZBbmltYXRpb24uc2FtcGxlcnMubGVuZ3RoICYmIGdsVEZBbmltYXRpb24uY2hhbm5lbHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRsZUdMVEZBbmltYXRpb25zLnB1c2goZ2xURkFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqIENyZWF0ZSBub2RlIGFuZCBtb3JwaCBhbmltYXRpb25zIGZyb20gdGhlIGFuaW1hdGlvbiBncm91cHNcclxuICAgICAqIEBwYXJhbSBiYWJ5bG9uU2NlbmVcclxuICAgICAqIEBwYXJhbSBnbFRGQW5pbWF0aW9uc1xyXG4gICAgICogQHBhcmFtIG5vZGVNYXBcclxuICAgICAqIEBwYXJhbSBub2Rlc1xyXG4gICAgICogQHBhcmFtIGJpbmFyeVdyaXRlclxyXG4gICAgICogQHBhcmFtIGJ1ZmZlclZpZXdzXHJcbiAgICAgKiBAcGFyYW0gYWNjZXNzb3JzXHJcbiAgICAgKiBAcGFyYW0gYW5pbWF0aW9uU2FtcGxlUmF0ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIF9DcmVhdGVOb2RlQW5kTW9ycGhBbmltYXRpb25Gcm9tQW5pbWF0aW9uR3JvdXBzKFxyXG4gICAgICAgIGJhYnlsb25TY2VuZTogU2NlbmUsXHJcbiAgICAgICAgZ2xURkFuaW1hdGlvbnM6IElBbmltYXRpb25bXSxcclxuICAgICAgICBub2RlTWFwOiB7IFtrZXk6IG51bWJlcl06IG51bWJlciB9LFxyXG4gICAgICAgIGJpbmFyeVdyaXRlcjogX0JpbmFyeVdyaXRlcixcclxuICAgICAgICBidWZmZXJWaWV3czogSUJ1ZmZlclZpZXdbXSxcclxuICAgICAgICBhY2Nlc3NvcnM6IElBY2Nlc3NvcltdLFxyXG4gICAgICAgIGFuaW1hdGlvblNhbXBsZVJhdGU6IG51bWJlcixcclxuICAgICAgICBzaG91bGRFeHBvcnRBbmltYXRpb24/OiAoYW5pbWF0aW9uOiBBbmltYXRpb24pID0+IGJvb2xlYW5cclxuICAgICkge1xyXG4gICAgICAgIGxldCBnbFRGQW5pbWF0aW9uOiBJQW5pbWF0aW9uO1xyXG4gICAgICAgIGlmIChiYWJ5bG9uU2NlbmUuYW5pbWF0aW9uR3JvdXBzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFuaW1hdGlvbkdyb3VwcyA9IGJhYnlsb25TY2VuZS5hbmltYXRpb25Hcm91cHM7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgYW5pbWF0aW9uR3JvdXAgb2YgYW5pbWF0aW9uR3JvdXBzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtb3JwaEFuaW1hdGlvbnM6IE1hcDxNZXNoLCBNYXA8TW9ycGhUYXJnZXQsIEFuaW1hdGlvbj4+ID0gbmV3IE1hcCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2FtcGxlQW5pbWF0aW9uczogTWFwPE1lc2gsIEFuaW1hdGlvbj4gPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtb3JwaEFuaW1hdGlvbk1lc2hlczogU2V0PE1lc2g+ID0gbmV3IFNldCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYW5pbWF0aW9uR3JvdXBGcmFtZURpZmYgPSBhbmltYXRpb25Hcm91cC50byAtIGFuaW1hdGlvbkdyb3VwLmZyb207XHJcbiAgICAgICAgICAgICAgICBnbFRGQW5pbWF0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGFuaW1hdGlvbkdyb3VwLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgY2hhbm5lbHM6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgIHNhbXBsZXJzOiBbXSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFuaW1hdGlvbkdyb3VwLnRhcmdldGVkQW5pbWF0aW9ucy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldEFuaW1hdGlvbiA9IGFuaW1hdGlvbkdyb3VwLnRhcmdldGVkQW5pbWF0aW9uc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSB0YXJnZXRBbmltYXRpb24udGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFuaW1hdGlvbiA9IHRhcmdldEFuaW1hdGlvbi5hbmltYXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNob3VsZEV4cG9ydEFuaW1hdGlvbiAmJiAhc2hvdWxkRXhwb3J0QW5pbWF0aW9uKGFuaW1hdGlvbikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9Jc1RyYW5zZm9ybWFibGUodGFyZ2V0KSB8fCAodGFyZ2V0Lmxlbmd0aCA9PT0gMSAmJiB0aGlzLl9Jc1RyYW5zZm9ybWFibGUodGFyZ2V0WzBdKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYW5pbWF0aW9uSW5mbyA9IF9HTFRGQW5pbWF0aW9uLl9EZWR1Y2VBbmltYXRpb25JbmZvKHRhcmdldEFuaW1hdGlvbi5hbmltYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYW5pbWF0aW9uSW5mbykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmFieWxvblRyYW5zZm9ybU5vZGUgPSB0aGlzLl9Jc1RyYW5zZm9ybWFibGUodGFyZ2V0KSA/IHRhcmdldCA6IHRoaXMuX0lzVHJhbnNmb3JtYWJsZSh0YXJnZXRbMF0pID8gdGFyZ2V0WzBdIDogbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiYWJ5bG9uVHJhbnNmb3JtTm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9HTFRGQW5pbWF0aW9uLl9BZGRBbmltYXRpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2FuaW1hdGlvbi5uYW1lfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsVEZBbmltYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhYnlsb25UcmFuc2Zvcm1Ob2RlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkluZm8uZGF0YUFjY2Vzc29yVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uSW5mby5hbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZU1hcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmluYXJ5V3JpdGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZmZXJWaWV3cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXNzb3JzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25JbmZvLnVzZVF1YXRlcm5pb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvblNhbXBsZVJhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBNb3JwaFRhcmdldCB8fCAodGFyZ2V0Lmxlbmd0aCA9PT0gMSAmJiB0YXJnZXRbMF0gaW5zdGFuY2VvZiBNb3JwaFRhcmdldCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYW5pbWF0aW9uSW5mbyA9IF9HTFRGQW5pbWF0aW9uLl9EZWR1Y2VBbmltYXRpb25JbmZvKHRhcmdldEFuaW1hdGlvbi5hbmltYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYW5pbWF0aW9uSW5mbykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmFieWxvbk1vcnBoVGFyZ2V0ID0gdGFyZ2V0IGluc3RhbmNlb2YgTW9ycGhUYXJnZXQgPyAodGFyZ2V0IGFzIE1vcnBoVGFyZ2V0KSA6ICh0YXJnZXRbMF0gYXMgTW9ycGhUYXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJhYnlsb25Nb3JwaFRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhYnlsb25Nb3JwaFRhcmdldE1hbmFnZXIgPSBiYWJ5bG9uU2NlbmUubW9ycGhUYXJnZXRNYW5hZ2Vycy5maW5kKChtb3JwaFRhcmdldE1hbmFnZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBtb3JwaFRhcmdldE1hbmFnZXIubnVtVGFyZ2V0czsgKytqKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9ycGhUYXJnZXRNYW5hZ2VyLmdldFRhcmdldChqKSA9PT0gYmFieWxvbk1vcnBoVGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiYWJ5bG9uTW9ycGhUYXJnZXRNYW5hZ2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhYnlsb25NZXNoID0gYmFieWxvblNjZW5lLm1lc2hlcy5maW5kKChtZXNoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKG1lc2ggYXMgTWVzaCkubW9ycGhUYXJnZXRNYW5hZ2VyID09PSBiYWJ5bG9uTW9ycGhUYXJnZXRNYW5hZ2VyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSBhcyBNZXNoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmFieWxvbk1lc2gpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbW9ycGhBbmltYXRpb25zLmhhcyhiYWJ5bG9uTWVzaCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3JwaEFuaW1hdGlvbnMuc2V0KGJhYnlsb25NZXNoLCBuZXcgTWFwKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9ycGhBbmltYXRpb25zLmdldChiYWJ5bG9uTWVzaCk/LnNldChiYWJ5bG9uTW9ycGhUYXJnZXQsIGFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3JwaEFuaW1hdGlvbk1lc2hlcy5hZGQoYmFieWxvbk1lc2gpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FtcGxlQW5pbWF0aW9ucy5zZXQoYmFieWxvbk1lc2gsIGFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIGlzIHRoZSBwbGFjZSBmb3IgdGhlIEtIUl9hbmltYXRpb25fcG9pbnRlci5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBtb3JwaEFuaW1hdGlvbk1lc2hlcy5mb3JFYWNoKChtZXNoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9ycGhUYXJnZXRNYW5hZ2VyID0gbWVzaC5tb3JwaFRhcmdldE1hbmFnZXIhO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb21iaW5lZEFuaW1hdGlvbkdyb3VwOiBOdWxsYWJsZTxBbmltYXRpb24+ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhbmltYXRpb25LZXlzOiBJQW5pbWF0aW9uS2V5W10gPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzYW1wbGVBbmltYXRpb24gPSBzYW1wbGVBbmltYXRpb25zLmdldChtZXNoKSE7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2FtcGxlQW5pbWF0aW9uS2V5cyA9IHNhbXBsZUFuaW1hdGlvbi5nZXRLZXlzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbnVtQW5pbWF0aW9uS2V5cyA9IHNhbXBsZUFuaW1hdGlvbktleXMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIER1ZSB0byBob3cgZ2xURiBleHBlY3RzIG1vcnBoIHRhcmdldCBhbmltYXRpb24gZGF0YSB0byBiZSBmb3JtYXR0ZWQsIHdlIG5lZWQgdG8gcmVhcnJhbmdlIHRoZSBpbmRpdmlkdWFsIG1vcnBoIHRhcmdldCBhbmltYXRpb24gdHJhY2tzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNoIHRoYXQgd2UgaGF2ZSBhIHNpbmdsZSBhbmltYXRpb24sIHdoZXJlIGEgZ2l2ZW4ga2V5ZnJhbWUgaW5wdXQgdmFsdWUgaGFzIHN1Y2Nlc3NpdmUgb3V0cHV0IHZhbHVlcyBmb3IgZWFjaCBtb3JwaCB0YXJnZXQgYmVsb25naW5nIHRvIHRoZSBtYW5hZ2VyLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9zcGVjaWZpY2F0aW9uLzIuMCNhbmltYXRpb25zXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBXZSBkbyB0aGlzIHZpYSBjb25zdHJ1Y3RpbmcgYSBuZXcgQW5pbWF0aW9uIHRyYWNrLCBhbmQgaW50ZXJsZWF2aW5nIHRoZSBmcmFtZXMgb2YgZWFjaCBtb3JwaCB0YXJnZXQgYW5pbWF0aW9uIHRyYWNrIGluIHRoZSBjdXJyZW50IEFuaW1hdGlvbiBHcm91cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBXZSByZXVzZSB0aGUgQmFieWxvbiBBbmltYXRpb24gZGF0YSBzdHJ1Y3R1cmUgZm9yIGVhc2Ugb2YgaGFuZGxpbmcgZXhwb3J0IG9mIGN1YmljIHNwbGluZSBhbmltYXRpb24ga2V5cywgYW5kIHRvIHJldXNlIHRoZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZyBfR0xURkFuaW1hdGlvbi5BZGRBbmltYXRpb24gY29kZXBhdGggd2l0aCBtaW5pbWFsIG1vZGlmaWNhdGlvbiwgaG93ZXZlciB0aGUgY29uc3RydWN0ZWQgQmFieWxvbiBBbmltYXRpb24gaXMgTk9UIGludGVuZGVkIGZvciB1c2UgaW4tZW5naW5lLlxyXG4gICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1BbmltYXRpb25LZXlzOyArK2kpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBtb3JwaFRhcmdldE1hbmFnZXIubnVtVGFyZ2V0czsgKytqKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtb3JwaFRhcmdldCA9IG1vcnBoVGFyZ2V0TWFuYWdlci5nZXRUYXJnZXQoaik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhbmltYXRpb25zQnlNb3JwaFRhcmdldCA9IG1vcnBoQW5pbWF0aW9ucy5nZXQobWVzaCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYW5pbWF0aW9uc0J5TW9ycGhUYXJnZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtb3JwaFRhcmdldEFuaW1hdGlvbiA9IGFuaW1hdGlvbnNCeU1vcnBoVGFyZ2V0LmdldChtb3JwaFRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vcnBoVGFyZ2V0QW5pbWF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY29tYmluZWRBbmltYXRpb25Hcm91cCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tYmluZWRBbmltYXRpb25Hcm91cCA9IG5ldyBBbmltYXRpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7YW5pbWF0aW9uR3JvdXAubmFtZX1fJHttZXNoLm5hbWV9X01vcnBoV2VpZ2h0QW5pbWF0aW9uYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImluZmx1ZW5jZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vcnBoVGFyZ2V0QW5pbWF0aW9uLmZyYW1lUGVyU2Vjb25kLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFuaW1hdGlvbi5BTklNQVRJT05UWVBFX0ZMT0FULFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vcnBoVGFyZ2V0QW5pbWF0aW9uLmxvb3BNb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vcnBoVGFyZ2V0QW5pbWF0aW9uLmVuYWJsZUJsZW5kaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbktleXMucHVzaChtb3JwaFRhcmdldEFuaW1hdGlvbi5nZXRLZXlzKClbaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbktleXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFtZTogYW5pbWF0aW9uR3JvdXAuZnJvbSArIChhbmltYXRpb25Hcm91cEZyYW1lRGlmZiAvIG51bUFuaW1hdGlvbktleXMpICogaSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBtb3JwaFRhcmdldC5pbmZsdWVuY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpblRhbmdlbnQ6IHNhbXBsZUFuaW1hdGlvbktleXNbMF0uaW5UYW5nZW50ID8gMCA6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dFRhbmdlbnQ6IHNhbXBsZUFuaW1hdGlvbktleXNbMF0ub3V0VGFuZ2VudCA/IDAgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb21iaW5lZEFuaW1hdGlvbkdyb3VwIS5zZXRLZXlzKGFuaW1hdGlvbktleXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFuaW1hdGlvbkluZm8gPSBfR0xURkFuaW1hdGlvbi5fRGVkdWNlQW5pbWF0aW9uSW5mbyhjb21iaW5lZEFuaW1hdGlvbkdyb3VwISk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFuaW1hdGlvbkluZm8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX0dMVEZBbmltYXRpb24uX0FkZEFuaW1hdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2FuaW1hdGlvbkdyb3VwLm5hbWV9XyR7bWVzaC5uYW1lfV9Nb3JwaFdlaWdodEFuaW1hdGlvbmAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbFRGQW5pbWF0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzaCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbWJpbmVkQW5pbWF0aW9uR3JvdXAhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uSW5mby5kYXRhQWNjZXNzb3JUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uSW5mby5hbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVNYXAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaW5hcnlXcml0ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZmZXJWaWV3cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY2Vzc29ycyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkluZm8udXNlUXVhdGVybmlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvblNhbXBsZVJhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3JwaFRhcmdldE1hbmFnZXI/Lm51bVRhcmdldHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmIChnbFRGQW5pbWF0aW9uLmNoYW5uZWxzLmxlbmd0aCAmJiBnbFRGQW5pbWF0aW9uLnNhbXBsZXJzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGdsVEZBbmltYXRpb25zLnB1c2goZ2xURkFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX0FkZEFuaW1hdGlvbihcclxuICAgICAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgZ2xURkFuaW1hdGlvbjogSUFuaW1hdGlvbixcclxuICAgICAgICBiYWJ5bG9uVHJhbnNmb3JtTm9kZTogTm9kZSxcclxuICAgICAgICBhbmltYXRpb246IEFuaW1hdGlvbixcclxuICAgICAgICBkYXRhQWNjZXNzb3JUeXBlOiBBY2Nlc3NvclR5cGUsXHJcbiAgICAgICAgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGg6IEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLFxyXG4gICAgICAgIG5vZGVNYXA6IHsgW2tleTogbnVtYmVyXTogbnVtYmVyIH0sXHJcbiAgICAgICAgYmluYXJ5V3JpdGVyOiBfQmluYXJ5V3JpdGVyLFxyXG4gICAgICAgIGJ1ZmZlclZpZXdzOiBJQnVmZmVyVmlld1tdLFxyXG4gICAgICAgIGFjY2Vzc29yczogSUFjY2Vzc29yW10sXHJcbiAgICAgICAgdXNlUXVhdGVybmlvbjogYm9vbGVhbixcclxuICAgICAgICBhbmltYXRpb25TYW1wbGVSYXRlOiBudW1iZXIsXHJcbiAgICAgICAgbW9ycGhBbmltYXRpb25DaGFubmVscz86IG51bWJlclxyXG4gICAgKSB7XHJcbiAgICAgICAgY29uc3QgYW5pbWF0aW9uRGF0YSA9IF9HTFRGQW5pbWF0aW9uLl9DcmVhdGVOb2RlQW5pbWF0aW9uKGJhYnlsb25UcmFuc2Zvcm1Ob2RlLCBhbmltYXRpb24sIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLCB1c2VRdWF0ZXJuaW9uLCBhbmltYXRpb25TYW1wbGVSYXRlKTtcclxuICAgICAgICBsZXQgYnVmZmVyVmlldzogSUJ1ZmZlclZpZXc7XHJcbiAgICAgICAgbGV0IGFjY2Vzc29yOiBJQWNjZXNzb3I7XHJcbiAgICAgICAgbGV0IGtleWZyYW1lQWNjZXNzb3JJbmRleDogbnVtYmVyO1xyXG4gICAgICAgIGxldCBkYXRhQWNjZXNzb3JJbmRleDogbnVtYmVyO1xyXG4gICAgICAgIGxldCBvdXRwdXRMZW5ndGg6IG51bWJlcjtcclxuICAgICAgICBsZXQgYW5pbWF0aW9uU2FtcGxlcjogSUFuaW1hdGlvblNhbXBsZXI7XHJcbiAgICAgICAgbGV0IGFuaW1hdGlvbkNoYW5uZWw6IElBbmltYXRpb25DaGFubmVsO1xyXG5cclxuICAgICAgICBpZiAoYW5pbWF0aW9uRGF0YSkge1xyXG4gICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICAgKiBOb3cgdGhhdCB3ZSBoYXZlIHRoZSBnbFRGIGNvbnZlcnRlZCBtb3JwaCB0YXJnZXQgYW5pbWF0aW9uIGRhdGEsXHJcbiAgICAgICAgICAgICAqIHdlIGNhbiByZW1vdmUgcmVkdW5kYW50IGlucHV0IGRhdGEgc28gdGhhdCB3ZSBoYXZlIG4gaW5wdXQgZnJhbWVzLFxyXG4gICAgICAgICAgICAgKiBhbmQgbW9ycGhBbmltYXRpb25DaGFubmVscyAqIG4gb3V0cHV0IGZyYW1lc1xyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgaWYgKG1vcnBoQW5pbWF0aW9uQ2hhbm5lbHMpIHtcclxuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudElucHV0OiBudW1iZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3SW5wdXRzOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKGFuaW1hdGlvbkRhdGEuaW5wdXRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50SW5wdXQgPSBhbmltYXRpb25EYXRhLmlucHV0cy5zaGlmdCgpITtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggJSBtb3JwaEFuaW1hdGlvbkNoYW5uZWxzID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3SW5wdXRzLnB1c2goY3VycmVudElucHV0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXgrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbkRhdGEuaW5wdXRzID0gbmV3SW5wdXRzO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBub2RlSW5kZXggPSBub2RlTWFwW2JhYnlsb25UcmFuc2Zvcm1Ob2RlLnVuaXF1ZUlkXTtcclxuXHJcbiAgICAgICAgICAgIC8vIENyZWF0ZXMgYnVmZmVyIHZpZXcgYW5kIGFjY2Vzc29yIGZvciBrZXkgZnJhbWVzLlxyXG4gICAgICAgICAgICBsZXQgYnl0ZUxlbmd0aCA9IGFuaW1hdGlvbkRhdGEuaW5wdXRzLmxlbmd0aCAqIDQ7XHJcbiAgICAgICAgICAgIGJ1ZmZlclZpZXcgPSBfR0xURlV0aWxpdGllcy5fQ3JlYXRlQnVmZmVyVmlldygwLCBiaW5hcnlXcml0ZXIuZ2V0Qnl0ZU9mZnNldCgpLCBieXRlTGVuZ3RoLCB1bmRlZmluZWQsIGAke25hbWV9ICBrZXlmcmFtZSBkYXRhIHZpZXdgKTtcclxuICAgICAgICAgICAgYnVmZmVyVmlld3MucHVzaChidWZmZXJWaWV3KTtcclxuICAgICAgICAgICAgYW5pbWF0aW9uRGF0YS5pbnB1dHMuZm9yRWFjaChmdW5jdGlvbiAoaW5wdXQpIHtcclxuICAgICAgICAgICAgICAgIGJpbmFyeVdyaXRlci5zZXRGbG9hdDMyKGlucHV0KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBhY2Nlc3NvciA9IF9HTFRGVXRpbGl0aWVzLl9DcmVhdGVBY2Nlc3NvcihcclxuICAgICAgICAgICAgICAgIGJ1ZmZlclZpZXdzLmxlbmd0aCAtIDEsXHJcbiAgICAgICAgICAgICAgICBgJHtuYW1lfSAga2V5ZnJhbWVzYCxcclxuICAgICAgICAgICAgICAgIEFjY2Vzc29yVHlwZS5TQ0FMQVIsXHJcbiAgICAgICAgICAgICAgICBBY2Nlc3NvckNvbXBvbmVudFR5cGUuRkxPQVQsXHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb25EYXRhLmlucHV0cy5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgW2FuaW1hdGlvbkRhdGEuaW5wdXRzTWluXSxcclxuICAgICAgICAgICAgICAgIFthbmltYXRpb25EYXRhLmlucHV0c01heF1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgYWNjZXNzb3JzLnB1c2goYWNjZXNzb3IpO1xyXG4gICAgICAgICAgICBrZXlmcmFtZUFjY2Vzc29ySW5kZXggPSBhY2Nlc3NvcnMubGVuZ3RoIC0gMTtcclxuXHJcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBidWZmZXJ2aWV3IGFuZCBhY2Nlc3NvciBmb3Iga2V5ZWQgdmFsdWVzLlxyXG4gICAgICAgICAgICBvdXRwdXRMZW5ndGggPSBhbmltYXRpb25EYXRhLm91dHB1dHMubGVuZ3RoO1xyXG4gICAgICAgICAgICBieXRlTGVuZ3RoID0gX0dMVEZVdGlsaXRpZXMuX0dldERhdGFBY2Nlc3NvckVsZW1lbnRDb3VudChkYXRhQWNjZXNzb3JUeXBlKSAqIDQgKiBhbmltYXRpb25EYXRhLm91dHB1dHMubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgLy8gY2hlY2sgZm9yIGluIGFuZCBvdXQgdGFuZ2VudHNcclxuICAgICAgICAgICAgYnVmZmVyVmlldyA9IF9HTFRGVXRpbGl0aWVzLl9DcmVhdGVCdWZmZXJWaWV3KDAsIGJpbmFyeVdyaXRlci5nZXRCeXRlT2Zmc2V0KCksIGJ5dGVMZW5ndGgsIHVuZGVmaW5lZCwgYCR7bmFtZX0gIGRhdGEgdmlld2ApO1xyXG4gICAgICAgICAgICBidWZmZXJWaWV3cy5wdXNoKGJ1ZmZlclZpZXcpO1xyXG5cclxuICAgICAgICAgICAgYW5pbWF0aW9uRGF0YS5vdXRwdXRzLmZvckVhY2goZnVuY3Rpb24gKG91dHB1dCkge1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0LmZvckVhY2goZnVuY3Rpb24gKGVudHJ5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmluYXJ5V3JpdGVyLnNldEZsb2F0MzIoZW50cnkpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgYWNjZXNzb3IgPSBfR0xURlV0aWxpdGllcy5fQ3JlYXRlQWNjZXNzb3IoYnVmZmVyVmlld3MubGVuZ3RoIC0gMSwgYCR7bmFtZX0gIGRhdGFgLCBkYXRhQWNjZXNzb3JUeXBlLCBBY2Nlc3NvckNvbXBvbmVudFR5cGUuRkxPQVQsIG91dHB1dExlbmd0aCwgbnVsbCwgbnVsbCwgbnVsbCk7XHJcbiAgICAgICAgICAgIGFjY2Vzc29ycy5wdXNoKGFjY2Vzc29yKTtcclxuICAgICAgICAgICAgZGF0YUFjY2Vzc29ySW5kZXggPSBhY2Nlc3NvcnMubGVuZ3RoIC0gMTtcclxuXHJcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBzYW1wbGVyXHJcbiAgICAgICAgICAgIGFuaW1hdGlvblNhbXBsZXIgPSB7XHJcbiAgICAgICAgICAgICAgICBpbnRlcnBvbGF0aW9uOiBhbmltYXRpb25EYXRhLnNhbXBsZXJJbnRlcnBvbGF0aW9uLFxyXG4gICAgICAgICAgICAgICAgaW5wdXQ6IGtleWZyYW1lQWNjZXNzb3JJbmRleCxcclxuICAgICAgICAgICAgICAgIG91dHB1dDogZGF0YUFjY2Vzc29ySW5kZXgsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGdsVEZBbmltYXRpb24uc2FtcGxlcnMucHVzaChhbmltYXRpb25TYW1wbGVyKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBjaGFubmVsXHJcbiAgICAgICAgICAgIGFuaW1hdGlvbkNoYW5uZWwgPSB7XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVyOiBnbFRGQW5pbWF0aW9uLnNhbXBsZXJzLmxlbmd0aCAtIDEsXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlOiBub2RlSW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBnbFRGQW5pbWF0aW9uLmNoYW5uZWxzLnB1c2goYW5pbWF0aW9uQ2hhbm5lbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgYmFrZWQgYW5pbWF0aW9uXHJcbiAgICAgKiBAcGFyYW0gYmFieWxvblRyYW5zZm9ybU5vZGUgQmFieWxvbkpTIG1lc2hcclxuICAgICAqIEBwYXJhbSBhbmltYXRpb24gQmFieWxvbkpTIGFuaW1hdGlvbiBjb3JyZXNwb25kaW5nIHRvIHRoZSBCYWJ5bG9uSlMgbWVzaFxyXG4gICAgICogQHBhcmFtIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoIGFuaW1hdGlvbiB0YXJnZXQgY2hhbm5lbFxyXG4gICAgICogQHBhcmFtIG1pbkZyYW1lIG1pbmltdW0gYW5pbWF0aW9uIGZyYW1lXHJcbiAgICAgKiBAcGFyYW0gbWF4RnJhbWUgbWF4aW11bSBhbmltYXRpb24gZnJhbWVcclxuICAgICAqIEBwYXJhbSBmcHMgZnJhbWVzIHBlciBzZWNvbmQgb2YgdGhlIGFuaW1hdGlvblxyXG4gICAgICogQHBhcmFtIHNhbXBsZVJhdGVcclxuICAgICAqIEBwYXJhbSBpbnB1dHMgaW5wdXQga2V5IGZyYW1lcyBvZiB0aGUgYW5pbWF0aW9uXHJcbiAgICAgKiBAcGFyYW0gb3V0cHV0cyBvdXRwdXQga2V5IGZyYW1lIGRhdGEgb2YgdGhlIGFuaW1hdGlvblxyXG4gICAgICogQHBhcmFtIG1pbk1heEZyYW1lc1xyXG4gICAgICogQHBhcmFtIG1pbk1heEZyYW1lcy5taW5cclxuICAgICAqIEBwYXJhbSBtaW5NYXhGcmFtZXMubWF4XHJcbiAgICAgKiBAcGFyYW0gdXNlUXVhdGVybmlvbiBzcGVjaWZpZXMgaWYgcXVhdGVybmlvbnMgc2hvdWxkIGJlIHVzZWRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX0NyZWF0ZUJha2VkQW5pbWF0aW9uKFxyXG4gICAgICAgIGJhYnlsb25UcmFuc2Zvcm1Ob2RlOiBOb2RlLFxyXG4gICAgICAgIGFuaW1hdGlvbjogQW5pbWF0aW9uLFxyXG4gICAgICAgIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoOiBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCxcclxuICAgICAgICBtaW5GcmFtZTogbnVtYmVyLFxyXG4gICAgICAgIG1heEZyYW1lOiBudW1iZXIsXHJcbiAgICAgICAgZnBzOiBudW1iZXIsXHJcbiAgICAgICAgc2FtcGxlUmF0ZTogbnVtYmVyLFxyXG4gICAgICAgIGlucHV0czogbnVtYmVyW10sXHJcbiAgICAgICAgb3V0cHV0czogbnVtYmVyW11bXSxcclxuICAgICAgICBtaW5NYXhGcmFtZXM6IHsgbWluOiBudW1iZXI7IG1heDogbnVtYmVyIH0sXHJcbiAgICAgICAgdXNlUXVhdGVybmlvbjogYm9vbGVhblxyXG4gICAgKSB7XHJcbiAgICAgICAgbGV0IHZhbHVlOiBudW1iZXIgfCBWZWN0b3IzIHwgUXVhdGVybmlvbjtcclxuICAgICAgICBjb25zdCBxdWF0ZXJuaW9uQ2FjaGU6IFF1YXRlcm5pb24gPSBRdWF0ZXJuaW9uLklkZW50aXR5KCk7XHJcbiAgICAgICAgbGV0IHByZXZpb3VzVGltZTogTnVsbGFibGU8bnVtYmVyPiA9IG51bGw7XHJcbiAgICAgICAgbGV0IHRpbWU6IG51bWJlcjtcclxuICAgICAgICBsZXQgbWF4VXNlZEZyYW1lOiBOdWxsYWJsZTxudW1iZXI+ID0gbnVsbDtcclxuICAgICAgICBsZXQgY3VycktleUZyYW1lOiBOdWxsYWJsZTxJQW5pbWF0aW9uS2V5PiA9IG51bGw7XHJcbiAgICAgICAgbGV0IG5leHRLZXlGcmFtZTogTnVsbGFibGU8SUFuaW1hdGlvbktleT4gPSBudWxsO1xyXG4gICAgICAgIGxldCBwcmV2S2V5RnJhbWU6IE51bGxhYmxlPElBbmltYXRpb25LZXk+ID0gbnVsbDtcclxuICAgICAgICBsZXQgZW5kRnJhbWU6IE51bGxhYmxlPG51bWJlcj4gPSBudWxsO1xyXG4gICAgICAgIG1pbk1heEZyYW1lcy5taW4gPSBUb29scy5GbG9hdFJvdW5kKG1pbkZyYW1lIC8gZnBzKTtcclxuXHJcbiAgICAgICAgY29uc3Qga2V5RnJhbWVzID0gYW5pbWF0aW9uLmdldEtleXMoKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbmd0aCA9IGtleUZyYW1lcy5sZW5ndGg7IGkgPCBsZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBlbmRGcmFtZSA9IG51bGw7XHJcbiAgICAgICAgICAgIGN1cnJLZXlGcmFtZSA9IGtleUZyYW1lc1tpXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpICsgMSA8IGxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgbmV4dEtleUZyYW1lID0ga2V5RnJhbWVzW2kgKyAxXTtcclxuICAgICAgICAgICAgICAgIGlmICgoY3VycktleUZyYW1lLnZhbHVlLmVxdWFscyAmJiBjdXJyS2V5RnJhbWUudmFsdWUuZXF1YWxzKG5leHRLZXlGcmFtZS52YWx1ZSkpIHx8IGN1cnJLZXlGcmFtZS52YWx1ZSA9PT0gbmV4dEtleUZyYW1lLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2V0IHRoZSBmaXJzdCBmcmFtZSB0byBpdHNlbGZcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kRnJhbWUgPSBjdXJyS2V5RnJhbWUuZnJhbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBlbmRGcmFtZSA9IG5leHRLZXlGcmFtZS5mcmFtZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIGF0IHRoZSBsYXN0IGtleSBmcmFtZVxyXG4gICAgICAgICAgICAgICAgcHJldktleUZyYW1lID0ga2V5RnJhbWVzW2kgLSAxXTtcclxuICAgICAgICAgICAgICAgIGlmICgoY3VycktleUZyYW1lLnZhbHVlLmVxdWFscyAmJiBjdXJyS2V5RnJhbWUudmFsdWUuZXF1YWxzKHByZXZLZXlGcmFtZS52YWx1ZSkpIHx8IGN1cnJLZXlGcmFtZS52YWx1ZSA9PT0gcHJldktleUZyYW1lLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuZEZyYW1lID0gbWF4RnJhbWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGVuZEZyYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBmID0gY3VycktleUZyYW1lLmZyYW1lOyBmIDw9IGVuZEZyYW1lOyBmICs9IHNhbXBsZVJhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lID0gVG9vbHMuRmxvYXRSb3VuZChmIC8gZnBzKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGltZSA9PT0gcHJldmlvdXNUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1RpbWUgPSB0aW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heFVzZWRGcmFtZSA9IHRpbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVwZWF0Q291bnQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvb3BNb2RlOiBhbmltYXRpb24ubG9vcE1vZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGFuaW1hdGlvbi5faW50ZXJwb2xhdGUoZiwgc3RhdGUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBfR0xURkFuaW1hdGlvbi5fU2V0SW50ZXJwb2xhdGVkVmFsdWUoYmFieWxvblRyYW5zZm9ybU5vZGUsIHZhbHVlLCB0aW1lLCBhbmltYXRpb24sIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLCBxdWF0ZXJuaW9uQ2FjaGUsIGlucHV0cywgb3V0cHV0cywgdXNlUXVhdGVybmlvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1heFVzZWRGcmFtZSkge1xyXG4gICAgICAgICAgICBtaW5NYXhGcmFtZXMubWF4ID0gbWF4VXNlZEZyYW1lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfQ29udmVydEZhY3RvclRvVmVjdG9yM09yUXVhdGVybmlvbihcclxuICAgICAgICBmYWN0b3I6IG51bWJlcixcclxuICAgICAgICBiYWJ5bG9uVHJhbnNmb3JtTm9kZTogTm9kZSxcclxuICAgICAgICBhbmltYXRpb246IEFuaW1hdGlvbixcclxuICAgICAgICBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aDogQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsXHJcbiAgICAgICAgdXNlUXVhdGVybmlvbjogYm9vbGVhblxyXG4gICAgKTogVmVjdG9yMyB8IFF1YXRlcm5pb24ge1xyXG4gICAgICAgIGNvbnN0IGJhc2VQb3NpdGlvblJvdGF0aW9uT3JTY2FsZSA9IF9HTFRGQW5pbWF0aW9uLl9HZXRCYXNlUG9zaXRpb25Sb3RhdGlvbk9yU2NhbGUoYmFieWxvblRyYW5zZm9ybU5vZGUsIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLCB1c2VRdWF0ZXJuaW9uKTtcclxuICAgICAgICAvLyBoYW5kbGVzIHNpbmdsZSBjb21wb25lbnQgeCwgeSwgeiBvciB3IGNvbXBvbmVudCBhbmltYXRpb24gYnkgdXNpbmcgYSBiYXNlIHByb3BlcnR5IGFuZCBhbmltYXRpbmcgb3ZlciBhIGNvbXBvbmVudC5cclxuICAgICAgICBjb25zdCBwcm9wZXJ0eSA9IGFuaW1hdGlvbi50YXJnZXRQcm9wZXJ0eS5zcGxpdChcIi5cIik7XHJcbiAgICAgICAgY29uc3QgY29tcG9uZW50TmFtZSA9IHByb3BlcnR5ID8gcHJvcGVydHlbMV0gOiBcIlwiOyAvLyB4LCB5LCB6LCBvciB3IGNvbXBvbmVudFxyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdXNlUXVhdGVybmlvbiA/IFF1YXRlcm5pb24uRnJvbUFycmF5KGJhc2VQb3NpdGlvblJvdGF0aW9uT3JTY2FsZSkubm9ybWFsaXplKCkgOiBWZWN0b3IzLkZyb21BcnJheShiYXNlUG9zaXRpb25Sb3RhdGlvbk9yU2NhbGUpO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKGNvbXBvbmVudE5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcInhcIjpcclxuICAgICAgICAgICAgY2FzZSBcInlcIjpcclxuICAgICAgICAgICAgY2FzZSBcInpcIjoge1xyXG4gICAgICAgICAgICAgICAgdmFsdWVbY29tcG9uZW50TmFtZV0gPSBmYWN0b3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwid1wiOiB7XHJcbiAgICAgICAgICAgICAgICAodmFsdWUgYXMgUXVhdGVybmlvbikudyA9IGZhY3RvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgICAgIFRvb2xzLkVycm9yKGBnbFRGQW5pbWF0aW9uOiBVbnN1cHBvcnRlZCBjb21wb25lbnQgbmFtZSBcIiR7Y29tcG9uZW50TmFtZX1cIiFgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9TZXRJbnRlcnBvbGF0ZWRWYWx1ZShcclxuICAgICAgICBiYWJ5bG9uVHJhbnNmb3JtTm9kZTogTm9kZSxcclxuICAgICAgICB2YWx1ZTogbnVtYmVyIHwgVmVjdG9yMyB8IFF1YXRlcm5pb24sXHJcbiAgICAgICAgdGltZTogbnVtYmVyLFxyXG4gICAgICAgIGFuaW1hdGlvbjogQW5pbWF0aW9uLFxyXG4gICAgICAgIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoOiBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCxcclxuICAgICAgICBxdWF0ZXJuaW9uQ2FjaGU6IFF1YXRlcm5pb24sXHJcbiAgICAgICAgaW5wdXRzOiBudW1iZXJbXSxcclxuICAgICAgICBvdXRwdXRzOiBudW1iZXJbXVtdLFxyXG4gICAgICAgIHVzZVF1YXRlcm5pb246IGJvb2xlYW5cclxuICAgICkge1xyXG4gICAgICAgIGxldCBjYWNoZVZhbHVlOiBWZWN0b3IzIHwgUXVhdGVybmlvbiB8IG51bWJlcjtcclxuICAgICAgICBpbnB1dHMucHVzaCh0aW1lKTtcclxuXHJcbiAgICAgICAgaWYgKGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoID09PSBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aC5XRUlHSFRTKSB7XHJcbiAgICAgICAgICAgIG91dHB1dHMucHVzaChbdmFsdWUgYXMgbnVtYmVyXSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChhbmltYXRpb24uZGF0YVR5cGUgPT09IEFuaW1hdGlvbi5BTklNQVRJT05UWVBFX0ZMT0FUKSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5fQ29udmVydEZhY3RvclRvVmVjdG9yM09yUXVhdGVybmlvbih2YWx1ZSBhcyBudW1iZXIsIGJhYnlsb25UcmFuc2Zvcm1Ob2RlLCBhbmltYXRpb24sIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLCB1c2VRdWF0ZXJuaW9uKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCA9PT0gQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGguUk9UQVRJT04pIHtcclxuICAgICAgICAgICAgaWYgKHVzZVF1YXRlcm5pb24pIHtcclxuICAgICAgICAgICAgICAgIHF1YXRlcm5pb25DYWNoZSA9IHZhbHVlIGFzIFF1YXRlcm5pb247XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjYWNoZVZhbHVlID0gdmFsdWUgYXMgVmVjdG9yMztcclxuICAgICAgICAgICAgICAgIFF1YXRlcm5pb24uUm90YXRpb25ZYXdQaXRjaFJvbGxUb1JlZihjYWNoZVZhbHVlLnksIGNhY2hlVmFsdWUueCwgY2FjaGVWYWx1ZS56LCBxdWF0ZXJuaW9uQ2FjaGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG91dHB1dHMucHVzaChxdWF0ZXJuaW9uQ2FjaGUuYXNBcnJheSgpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBzY2FsaW5nIGFuZCBwb3NpdGlvbiBhbmltYXRpb25cclxuICAgICAgICAgICAgY2FjaGVWYWx1ZSA9IHZhbHVlIGFzIFZlY3RvcjM7XHJcbiAgICAgICAgICAgIG91dHB1dHMucHVzaChjYWNoZVZhbHVlLmFzQXJyYXkoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBsaW5lYXIgYW5pbWF0aW9uIGZyb20gdGhlIGFuaW1hdGlvbiBrZXkgZnJhbWVzXHJcbiAgICAgKiBAcGFyYW0gYmFieWxvblRyYW5zZm9ybU5vZGUgQmFieWxvbkpTIG1lc2hcclxuICAgICAqIEBwYXJhbSBhbmltYXRpb24gQmFieWxvbkpTIGFuaW1hdGlvblxyXG4gICAgICogQHBhcmFtIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoIFRoZSB0YXJnZXQgYW5pbWF0aW9uIGNoYW5uZWxcclxuICAgICAqIEBwYXJhbSBpbnB1dHMgQXJyYXkgdG8gc3RvcmUgdGhlIGtleSBmcmFtZSB0aW1lc1xyXG4gICAgICogQHBhcmFtIG91dHB1dHMgQXJyYXkgdG8gc3RvcmUgdGhlIGtleSBmcmFtZSBkYXRhXHJcbiAgICAgKiBAcGFyYW0gdXNlUXVhdGVybmlvbiBTcGVjaWZpZXMgaWYgcXVhdGVybmlvbnMgYXJlIHVzZWQgaW4gdGhlIGFuaW1hdGlvblxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfQ3JlYXRlTGluZWFyT3JTdGVwQW5pbWF0aW9uKFxyXG4gICAgICAgIGJhYnlsb25UcmFuc2Zvcm1Ob2RlOiBOb2RlLFxyXG4gICAgICAgIGFuaW1hdGlvbjogQW5pbWF0aW9uLFxyXG4gICAgICAgIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoOiBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCxcclxuICAgICAgICBpbnB1dHM6IG51bWJlcltdLFxyXG4gICAgICAgIG91dHB1dHM6IG51bWJlcltdW10sXHJcbiAgICAgICAgdXNlUXVhdGVybmlvbjogYm9vbGVhblxyXG4gICAgKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXlGcmFtZSBvZiBhbmltYXRpb24uZ2V0S2V5cygpKSB7XHJcbiAgICAgICAgICAgIGlucHV0cy5wdXNoKGtleUZyYW1lLmZyYW1lIC8gYW5pbWF0aW9uLmZyYW1lUGVyU2Vjb25kKTsgLy8ga2V5ZnJhbWVzIGluIHNlY29uZHMuXHJcbiAgICAgICAgICAgIF9HTFRGQW5pbWF0aW9uLl9BZGRLZXlmcmFtZVZhbHVlKGtleUZyYW1lLCBhbmltYXRpb24sIG91dHB1dHMsIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLCBiYWJ5bG9uVHJhbnNmb3JtTm9kZSwgdXNlUXVhdGVybmlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBjdWJpYyBzcGxpbmUgYW5pbWF0aW9uIGZyb20gdGhlIGFuaW1hdGlvbiBrZXkgZnJhbWVzXHJcbiAgICAgKiBAcGFyYW0gYmFieWxvblRyYW5zZm9ybU5vZGUgQmFieWxvbkpTIG1lc2hcclxuICAgICAqIEBwYXJhbSBhbmltYXRpb24gQmFieWxvbkpTIGFuaW1hdGlvblxyXG4gICAgICogQHBhcmFtIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoIFRoZSB0YXJnZXQgYW5pbWF0aW9uIGNoYW5uZWxcclxuICAgICAqIEBwYXJhbSBpbnB1dHMgQXJyYXkgdG8gc3RvcmUgdGhlIGtleSBmcmFtZSB0aW1lc1xyXG4gICAgICogQHBhcmFtIG91dHB1dHMgQXJyYXkgdG8gc3RvcmUgdGhlIGtleSBmcmFtZSBkYXRhXHJcbiAgICAgKiBAcGFyYW0gdXNlUXVhdGVybmlvbiBTcGVjaWZpZXMgaWYgcXVhdGVybmlvbnMgYXJlIHVzZWQgaW4gdGhlIGFuaW1hdGlvblxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfQ3JlYXRlQ3ViaWNTcGxpbmVBbmltYXRpb24oXHJcbiAgICAgICAgYmFieWxvblRyYW5zZm9ybU5vZGU6IE5vZGUsXHJcbiAgICAgICAgYW5pbWF0aW9uOiBBbmltYXRpb24sXHJcbiAgICAgICAgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGg6IEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLFxyXG4gICAgICAgIGlucHV0czogbnVtYmVyW10sXHJcbiAgICAgICAgb3V0cHV0czogbnVtYmVyW11bXSxcclxuICAgICAgICB1c2VRdWF0ZXJuaW9uOiBib29sZWFuXHJcbiAgICApIHtcclxuICAgICAgICBhbmltYXRpb24uZ2V0S2V5cygpLmZvckVhY2goZnVuY3Rpb24gKGtleUZyYW1lKSB7XHJcbiAgICAgICAgICAgIGlucHV0cy5wdXNoKGtleUZyYW1lLmZyYW1lIC8gYW5pbWF0aW9uLmZyYW1lUGVyU2Vjb25kKTsgLy8ga2V5ZnJhbWVzIGluIHNlY29uZHMuXHJcbiAgICAgICAgICAgIF9HTFRGQW5pbWF0aW9uLl9BZGRTcGxpbmVUYW5nZW50KF9UYW5nZW50VHlwZS5JTlRBTkdFTlQsIG91dHB1dHMsIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLCBBbmltYXRpb25TYW1wbGVySW50ZXJwb2xhdGlvbi5DVUJJQ1NQTElORSwga2V5RnJhbWUsIHVzZVF1YXRlcm5pb24pO1xyXG4gICAgICAgICAgICBfR0xURkFuaW1hdGlvbi5fQWRkS2V5ZnJhbWVWYWx1ZShrZXlGcmFtZSwgYW5pbWF0aW9uLCBvdXRwdXRzLCBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCwgYmFieWxvblRyYW5zZm9ybU5vZGUsIHVzZVF1YXRlcm5pb24pO1xyXG5cclxuICAgICAgICAgICAgX0dMVEZBbmltYXRpb24uX0FkZFNwbGluZVRhbmdlbnQoX1RhbmdlbnRUeXBlLk9VVFRBTkdFTlQsIG91dHB1dHMsIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLCBBbmltYXRpb25TYW1wbGVySW50ZXJwb2xhdGlvbi5DVUJJQ1NQTElORSwga2V5RnJhbWUsIHVzZVF1YXRlcm5pb24pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9HZXRCYXNlUG9zaXRpb25Sb3RhdGlvbk9yU2NhbGUoYmFieWxvblRyYW5zZm9ybU5vZGU6IE5vZGUsIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoOiBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCwgdXNlUXVhdGVybmlvbjogYm9vbGVhbikge1xyXG4gICAgICAgIGxldCBiYXNlUG9zaXRpb25Sb3RhdGlvbk9yU2NhbGU6IG51bWJlcltdO1xyXG4gICAgICAgIGlmIChhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCA9PT0gQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGguUk9UQVRJT04pIHtcclxuICAgICAgICAgICAgaWYgKHVzZVF1YXRlcm5pb24pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHEgPSAoYmFieWxvblRyYW5zZm9ybU5vZGUgYXMgVHJhbnNmb3JtTm9kZSkucm90YXRpb25RdWF0ZXJuaW9uO1xyXG4gICAgICAgICAgICAgICAgYmFzZVBvc2l0aW9uUm90YXRpb25PclNjYWxlID0gKHEgPz8gUXVhdGVybmlvbi5JZGVudGl0eSgpKS5hc0FycmF5KCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByOiBWZWN0b3IzID0gKGJhYnlsb25UcmFuc2Zvcm1Ob2RlIGFzIFRyYW5zZm9ybU5vZGUpLnJvdGF0aW9uO1xyXG4gICAgICAgICAgICAgICAgYmFzZVBvc2l0aW9uUm90YXRpb25PclNjYWxlID0gKHIgPz8gVmVjdG9yMy5aZXJvKCkpLmFzQXJyYXkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGggPT09IEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLlRSQU5TTEFUSU9OKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHA6IFZlY3RvcjMgPSAoYmFieWxvblRyYW5zZm9ybU5vZGUgYXMgVHJhbnNmb3JtTm9kZSkucG9zaXRpb247XHJcbiAgICAgICAgICAgIGJhc2VQb3NpdGlvblJvdGF0aW9uT3JTY2FsZSA9IChwID8/IFZlY3RvcjMuWmVybygpKS5hc0FycmF5KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gc2NhbGVcclxuICAgICAgICAgICAgY29uc3QgczogVmVjdG9yMyA9IChiYWJ5bG9uVHJhbnNmb3JtTm9kZSBhcyBUcmFuc2Zvcm1Ob2RlKS5zY2FsaW5nO1xyXG4gICAgICAgICAgICBiYXNlUG9zaXRpb25Sb3RhdGlvbk9yU2NhbGUgPSAocyA/PyBWZWN0b3IzLk9uZSgpKS5hc0FycmF5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBiYXNlUG9zaXRpb25Sb3RhdGlvbk9yU2NhbGU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGRzIGEga2V5IGZyYW1lIHZhbHVlXHJcbiAgICAgKiBAcGFyYW0ga2V5RnJhbWVcclxuICAgICAqIEBwYXJhbSBhbmltYXRpb25cclxuICAgICAqIEBwYXJhbSBvdXRwdXRzXHJcbiAgICAgKiBAcGFyYW0gYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGhcclxuICAgICAqIEBwYXJhbSBiYWJ5bG9uVHJhbnNmb3JtTm9kZVxyXG4gICAgICogQHBhcmFtIHVzZVF1YXRlcm5pb25cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX0FkZEtleWZyYW1lVmFsdWUoXHJcbiAgICAgICAga2V5RnJhbWU6IElBbmltYXRpb25LZXksXHJcbiAgICAgICAgYW5pbWF0aW9uOiBBbmltYXRpb24sXHJcbiAgICAgICAgb3V0cHV0czogbnVtYmVyW11bXSxcclxuICAgICAgICBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aDogQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsXHJcbiAgICAgICAgYmFieWxvblRyYW5zZm9ybU5vZGU6IE5vZGUsXHJcbiAgICAgICAgdXNlUXVhdGVybmlvbjogYm9vbGVhblxyXG4gICAgKSB7XHJcbiAgICAgICAgbGV0IG5ld1Bvc2l0aW9uUm90YXRpb25PclNjYWxlOiBOdWxsYWJsZTxWZWN0b3IzIHwgUXVhdGVybmlvbiB8IG51bWJlcj47XHJcbiAgICAgICAgY29uc3QgYW5pbWF0aW9uVHlwZSA9IGFuaW1hdGlvbi5kYXRhVHlwZTtcclxuICAgICAgICBpZiAoYW5pbWF0aW9uVHlwZSA9PT0gQW5pbWF0aW9uLkFOSU1BVElPTlRZUEVfVkVDVE9SMykge1xyXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBrZXlGcmFtZS52YWx1ZS5hc0FycmF5KCk7XHJcbiAgICAgICAgICAgIGlmIChhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCA9PT0gQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGguUk9UQVRJT04pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFycmF5ID0gVmVjdG9yMy5Gcm9tQXJyYXkodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgcm90YXRpb25RdWF0ZXJuaW9uID0gUXVhdGVybmlvbi5Sb3RhdGlvbllhd1BpdGNoUm9sbChhcnJheS55LCBhcnJheS54LCBhcnJheS56KTtcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gcm90YXRpb25RdWF0ZXJuaW9uLmFzQXJyYXkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvdXRwdXRzLnB1c2godmFsdWUpOyAvLyBzY2FsZSAgdmVjdG9yLlxyXG4gICAgICAgIH0gZWxzZSBpZiAoYW5pbWF0aW9uVHlwZSA9PT0gQW5pbWF0aW9uLkFOSU1BVElPTlRZUEVfRkxPQVQpIHtcclxuICAgICAgICAgICAgaWYgKGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoID09PSBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aC5XRUlHSFRTKSB7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXRzLnB1c2goW2tleUZyYW1lLnZhbHVlXSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGVzIHNpbmdsZSBjb21wb25lbnQgeCwgeSwgeiBvciB3IGNvbXBvbmVudCBhbmltYXRpb24gYnkgdXNpbmcgYSBiYXNlIHByb3BlcnR5IGFuZCBhbmltYXRpbmcgb3ZlciBhIGNvbXBvbmVudC5cclxuICAgICAgICAgICAgICAgIG5ld1Bvc2l0aW9uUm90YXRpb25PclNjYWxlID0gdGhpcy5fQ29udmVydEZhY3RvclRvVmVjdG9yM09yUXVhdGVybmlvbihcclxuICAgICAgICAgICAgICAgICAgICBrZXlGcmFtZS52YWx1ZSBhcyBudW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFieWxvblRyYW5zZm9ybU5vZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZVF1YXRlcm5pb25cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBpZiAobmV3UG9zaXRpb25Sb3RhdGlvbk9yU2NhbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGggPT09IEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLlJPVEFUSU9OKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvc1JvdFNjYWxlID0gdXNlUXVhdGVybmlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAobmV3UG9zaXRpb25Sb3RhdGlvbk9yU2NhbGUgYXMgUXVhdGVybmlvbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogUXVhdGVybmlvbi5Sb3RhdGlvbllhd1BpdGNoUm9sbChuZXdQb3NpdGlvblJvdGF0aW9uT3JTY2FsZS55LCBuZXdQb3NpdGlvblJvdGF0aW9uT3JTY2FsZS54LCBuZXdQb3NpdGlvblJvdGF0aW9uT3JTY2FsZS56KS5ub3JtYWxpemUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0cy5wdXNoKHBvc1JvdFNjYWxlLmFzQXJyYXkoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG91dHB1dHMucHVzaChuZXdQb3NpdGlvblJvdGF0aW9uT3JTY2FsZS5hc0FycmF5KCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChhbmltYXRpb25UeXBlID09PSBBbmltYXRpb24uQU5JTUFUSU9OVFlQRV9RVUFURVJOSU9OKSB7XHJcbiAgICAgICAgICAgIG91dHB1dHMucHVzaCgoa2V5RnJhbWUudmFsdWUgYXMgUXVhdGVybmlvbikubm9ybWFsaXplKCkuYXNBcnJheSgpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBUb29scy5FcnJvcihcImdsVEZBbmltYXRpb246IFVuc3VwcG9ydGVkIGtleSBmcmFtZSB2YWx1ZXMgZm9yIGFuaW1hdGlvbiFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKiBEZXRlcm1pbmUgdGhlIGludGVycG9sYXRpb24gYmFzZWQgb24gdGhlIGtleSBmcmFtZXNcclxuICAgICAqIEBwYXJhbSBrZXlGcmFtZXNcclxuICAgICAqIEBwYXJhbSBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aFxyXG4gICAgICogQHBhcmFtIHVzZVF1YXRlcm5pb25cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX0RlZHVjZUludGVycG9sYXRpb24oXHJcbiAgICAgICAga2V5RnJhbWVzOiBJQW5pbWF0aW9uS2V5W10sXHJcbiAgICAgICAgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGg6IEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLFxyXG4gICAgICAgIHVzZVF1YXRlcm5pb246IGJvb2xlYW5cclxuICAgICk6IHsgaW50ZXJwb2xhdGlvblR5cGU6IEFuaW1hdGlvblNhbXBsZXJJbnRlcnBvbGF0aW9uOyBzaG91bGRCYWtlQW5pbWF0aW9uOiBib29sZWFuIH0ge1xyXG4gICAgICAgIGxldCBpbnRlcnBvbGF0aW9uVHlwZTogQW5pbWF0aW9uU2FtcGxlckludGVycG9sYXRpb24gfCB1bmRlZmluZWQ7XHJcbiAgICAgICAgbGV0IHNob3VsZEJha2VBbmltYXRpb24gPSBmYWxzZTtcclxuICAgICAgICBsZXQga2V5OiBJQW5pbWF0aW9uS2V5O1xyXG5cclxuICAgICAgICBpZiAoYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGggPT09IEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLlJPVEFUSU9OICYmICF1c2VRdWF0ZXJuaW9uKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IGludGVycG9sYXRpb25UeXBlOiBBbmltYXRpb25TYW1wbGVySW50ZXJwb2xhdGlvbi5MSU5FQVIsIHNob3VsZEJha2VBbmltYXRpb246IHRydWUgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW5ndGggPSBrZXlGcmFtZXMubGVuZ3RoOyBpIDwgbGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAga2V5ID0ga2V5RnJhbWVzW2ldO1xyXG4gICAgICAgICAgICBpZiAoa2V5LmluVGFuZ2VudCB8fCBrZXkub3V0VGFuZ2VudCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGludGVycG9sYXRpb25UeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGludGVycG9sYXRpb25UeXBlICE9PSBBbmltYXRpb25TYW1wbGVySW50ZXJwb2xhdGlvbi5DVUJJQ1NQTElORSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnBvbGF0aW9uVHlwZSA9IEFuaW1hdGlvblNhbXBsZXJJbnRlcnBvbGF0aW9uLkxJTkVBUjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdWxkQmFrZUFuaW1hdGlvbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJwb2xhdGlvblR5cGUgPSBBbmltYXRpb25TYW1wbGVySW50ZXJwb2xhdGlvbi5DVUJJQ1NQTElORTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChpbnRlcnBvbGF0aW9uVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwb2xhdGlvblR5cGUgPT09IEFuaW1hdGlvblNhbXBsZXJJbnRlcnBvbGF0aW9uLkNVQklDU1BMSU5FIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChrZXkuaW50ZXJwb2xhdGlvbiAmJiBrZXkuaW50ZXJwb2xhdGlvbiA9PT0gQW5pbWF0aW9uS2V5SW50ZXJwb2xhdGlvbi5TVEVQICYmIGludGVycG9sYXRpb25UeXBlICE9PSBBbmltYXRpb25TYW1wbGVySW50ZXJwb2xhdGlvbi5TVEVQKVxyXG4gICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnBvbGF0aW9uVHlwZSA9IEFuaW1hdGlvblNhbXBsZXJJbnRlcnBvbGF0aW9uLkxJTkVBUjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdWxkQmFrZUFuaW1hdGlvbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleS5pbnRlcnBvbGF0aW9uICYmIGtleS5pbnRlcnBvbGF0aW9uID09PSBBbmltYXRpb25LZXlJbnRlcnBvbGF0aW9uLlNURVApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwb2xhdGlvblR5cGUgPSBBbmltYXRpb25TYW1wbGVySW50ZXJwb2xhdGlvbi5TVEVQO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGludGVycG9sYXRpb25UeXBlID0gQW5pbWF0aW9uU2FtcGxlckludGVycG9sYXRpb24uTElORUFSO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWludGVycG9sYXRpb25UeXBlKSB7XHJcbiAgICAgICAgICAgIGludGVycG9sYXRpb25UeXBlID0gQW5pbWF0aW9uU2FtcGxlckludGVycG9sYXRpb24uTElORUFSO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHsgaW50ZXJwb2xhdGlvblR5cGU6IGludGVycG9sYXRpb25UeXBlLCBzaG91bGRCYWtlQW5pbWF0aW9uOiBzaG91bGRCYWtlQW5pbWF0aW9uIH07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGRzIGFuIGlucHV0IHRhbmdlbnQgb3Igb3V0cHV0IHRhbmdlbnQgdG8gdGhlIG91dHB1dCBkYXRhXHJcbiAgICAgKiBJZiBhbiBpbnB1dCB0YW5nZW50IG9yIG91dHB1dCB0YW5nZW50IGlzIG1pc3NpbmcsIGl0IHVzZXMgdGhlIHplcm8gdmVjdG9yIG9yIHplcm8gcXVhdGVybmlvblxyXG4gICAgICogQHBhcmFtIHRhbmdlbnRUeXBlIFNwZWNpZmllcyB3aGljaCB0eXBlIG9mIHRhbmdlbnQgdG8gaGFuZGxlIChpblRhbmdlbnQgb3Igb3V0VGFuZ2VudClcclxuICAgICAqIEBwYXJhbSBvdXRwdXRzIFRoZSBhbmltYXRpb24gZGF0YSBieSBrZXlmcmFtZVxyXG4gICAgICogQHBhcmFtIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoIFRoZSB0YXJnZXQgYW5pbWF0aW9uIGNoYW5uZWxcclxuICAgICAqIEBwYXJhbSBpbnRlcnBvbGF0aW9uIFRoZSBpbnRlcnBvbGF0aW9uIHR5cGVcclxuICAgICAqIEBwYXJhbSBrZXlGcmFtZSBUaGUga2V5IGZyYW1lIHdpdGggdGhlIGFuaW1hdGlvbiBkYXRhXHJcbiAgICAgKiBAcGFyYW0gdXNlUXVhdGVybmlvbiBTcGVjaWZpZXMgaWYgcXVhdGVybmlvbnMgYXJlIHVzZWRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX0FkZFNwbGluZVRhbmdlbnQoXHJcbiAgICAgICAgdGFuZ2VudFR5cGU6IF9UYW5nZW50VHlwZSxcclxuICAgICAgICBvdXRwdXRzOiBudW1iZXJbXVtdLFxyXG4gICAgICAgIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoOiBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCxcclxuICAgICAgICBpbnRlcnBvbGF0aW9uOiBBbmltYXRpb25TYW1wbGVySW50ZXJwb2xhdGlvbixcclxuICAgICAgICBrZXlGcmFtZTogSUFuaW1hdGlvbktleSxcclxuICAgICAgICB1c2VRdWF0ZXJuaW9uOiBib29sZWFuXHJcbiAgICApIHtcclxuICAgICAgICBsZXQgdGFuZ2VudDogbnVtYmVyW107XHJcbiAgICAgICAgY29uc3QgdGFuZ2VudFZhbHVlOiBWZWN0b3IzIHwgUXVhdGVybmlvbiB8IG51bWJlciA9IHRhbmdlbnRUeXBlID09PSBfVGFuZ2VudFR5cGUuSU5UQU5HRU5UID8ga2V5RnJhbWUuaW5UYW5nZW50IDoga2V5RnJhbWUub3V0VGFuZ2VudDtcclxuICAgICAgICBpZiAoaW50ZXJwb2xhdGlvbiA9PT0gQW5pbWF0aW9uU2FtcGxlckludGVycG9sYXRpb24uQ1VCSUNTUExJTkUpIHtcclxuICAgICAgICAgICAgaWYgKGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoID09PSBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aC5ST1RBVElPTikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRhbmdlbnRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh1c2VRdWF0ZXJuaW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhbmdlbnQgPSAodGFuZ2VudFZhbHVlIGFzIFF1YXRlcm5pb24pLmFzQXJyYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhcnJheSA9IHRhbmdlbnRWYWx1ZSBhcyBWZWN0b3IzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YW5nZW50ID0gUXVhdGVybmlvbi5Sb3RhdGlvbllhd1BpdGNoUm9sbChhcnJheS55LCBhcnJheS54LCBhcnJheS56KS5hc0FycmF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0YW5nZW50ID0gWzAsIDAsIDAsIDBdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoID09PSBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aC5XRUlHSFRTKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGFuZ2VudFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFuZ2VudCA9IFt0YW5nZW50VmFsdWUgYXMgbnVtYmVyXTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFuZ2VudCA9IFswXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICh0YW5nZW50VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0YW5nZW50ID0gKHRhbmdlbnRWYWx1ZSBhcyBWZWN0b3IzKS5hc0FycmF5KCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhbmdlbnQgPSBbMCwgMCwgMF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG91dHB1dHMucHVzaCh0YW5nZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIG1pbmltdW0gYW5kIG1heGltdW0ga2V5IGZyYW1lcycgZnJhbWUgdmFsdWVzXHJcbiAgICAgKiBAcGFyYW0ga2V5RnJhbWVzIGFuaW1hdGlvbiBrZXkgZnJhbWVzXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgbWluaW11bSBhbmQgbWF4aW11bSBrZXkgZnJhbWUgdmFsdWVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX0NhbGN1bGF0ZU1pbk1heEtleUZyYW1lcyhrZXlGcmFtZXM6IElBbmltYXRpb25LZXlbXSk6IHsgbWluOiBudW1iZXI7IG1heDogbnVtYmVyIH0ge1xyXG4gICAgICAgIGxldCBtaW46IG51bWJlciA9IEluZmluaXR5O1xyXG4gICAgICAgIGxldCBtYXg6IG51bWJlciA9IC1JbmZpbml0eTtcclxuICAgICAgICBrZXlGcmFtZXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5RnJhbWUpIHtcclxuICAgICAgICAgICAgbWluID0gTWF0aC5taW4obWluLCBrZXlGcmFtZS5mcmFtZSk7XHJcbiAgICAgICAgICAgIG1heCA9IE1hdGgubWF4KG1heCwga2V5RnJhbWUuZnJhbWUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4geyBtaW46IG1pbiwgbWF4OiBtYXggfTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbWFnZU1pbWVUeXBlIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5cclxuLyoqXHJcbiAqIENsYXNzIGZvciBob2xkaW5nIGFuZCBkb3dubG9hZGluZyBnbFRGIGZpbGUgZGF0YVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEdMVEZEYXRhIHtcclxuICAgIC8qKlxyXG4gICAgICogT2JqZWN0IHdoaWNoIGNvbnRhaW5zIHRoZSBmaWxlIG5hbWUgYXMgdGhlIGtleSBhbmQgaXRzIGRhdGEgYXMgdGhlIHZhbHVlXHJcbiAgICAgKi9cclxuICAgIGdsVEZGaWxlczogeyBbZmlsZU5hbWU6IHN0cmluZ106IHN0cmluZyB8IEJsb2IgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpemVzIHRoZSBnbFRGIGZpbGUgb2JqZWN0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmdsVEZGaWxlcyA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRG93bmxvYWRzIHRoZSBnbFRGIGRhdGEgYXMgZmlsZXMgYmFzZWQgb24gdGhlaXIgbmFtZXMgYW5kIGRhdGFcclxuICAgICAqL1xyXG4gICAgcHVibGljIGRvd25sb2FkRmlsZXMoKTogdm9pZCB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ2hlY2tzIGZvciBhIG1hdGNoaW5nIHN1ZmZpeCBhdCB0aGUgZW5kIG9mIGEgc3RyaW5nIChmb3IgRVM1IGFuZCBsb3dlcilcclxuICAgICAgICAgKiBAcGFyYW0gc3RyIFNvdXJjZSBzdHJpbmdcclxuICAgICAgICAgKiBAcGFyYW0gc3VmZml4IFN1ZmZpeCB0byBzZWFyY2ggZm9yIGluIHRoZSBzb3VyY2Ugc3RyaW5nXHJcbiAgICAgICAgICogQHJldHVybnMgQm9vbGVhbiBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIHN1ZmZpeCB3YXMgZm91bmQgKHRydWUpIG9yIG5vdCAoZmFsc2UpXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gZW5kc1dpdGgoc3RyOiBzdHJpbmcsIHN1ZmZpeDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdHIuaW5kZXhPZihzdWZmaXgsIHN0ci5sZW5ndGggLSBzdWZmaXgubGVuZ3RoKSAhPT0gLTE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLmdsVEZGaWxlcykge1xyXG4gICAgICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGluayk7XHJcbiAgICAgICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgbGluay5kb3dubG9hZCA9IGtleTtcclxuICAgICAgICAgICAgY29uc3QgYmxvYiA9IHRoaXMuZ2xURkZpbGVzW2tleV07XHJcbiAgICAgICAgICAgIGxldCBtaW1lVHlwZTtcclxuXHJcbiAgICAgICAgICAgIGlmIChlbmRzV2l0aChrZXksIFwiLmdsYlwiKSkge1xyXG4gICAgICAgICAgICAgICAgbWltZVR5cGUgPSB7IHR5cGU6IFwibW9kZWwvZ2x0Zi1iaW5hcnlcIiB9O1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVuZHNXaXRoKGtleSwgXCIuYmluXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBtaW1lVHlwZSA9IHsgdHlwZTogXCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIiB9O1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVuZHNXaXRoKGtleSwgXCIuZ2x0ZlwiKSkge1xyXG4gICAgICAgICAgICAgICAgbWltZVR5cGUgPSB7IHR5cGU6IFwibW9kZWwvZ2x0Zitqc29uXCIgfTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChlbmRzV2l0aChrZXksIFwiLmpwZWdcIikgfHwgZW5kc1dpdGgoa2V5LCBcIi5qcGdcIikpIHtcclxuICAgICAgICAgICAgICAgIG1pbWVUeXBlID0geyB0eXBlOiBJbWFnZU1pbWVUeXBlLkpQRUcgfTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChlbmRzV2l0aChrZXksIFwiLnBuZ1wiKSkge1xyXG4gICAgICAgICAgICAgICAgbWltZVR5cGUgPSB7IHR5cGU6IEltYWdlTWltZVR5cGUuUE5HIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxpbmsuaHJlZiA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKG5ldyBCbG9iKFtibG9iXSwgbWltZVR5cGUpKTtcclxuICAgICAgICAgICAgbGluay5jbGljaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgdHlwZSB7XHJcbiAgICBJQnVmZmVyVmlldyxcclxuICAgIElBY2Nlc3NvcixcclxuICAgIElOb2RlLFxyXG4gICAgSVNjZW5lLFxyXG4gICAgSU1lc2gsXHJcbiAgICBJTWF0ZXJpYWwsXHJcbiAgICBJVGV4dHVyZSxcclxuICAgIElJbWFnZSxcclxuICAgIElTYW1wbGVyLFxyXG4gICAgSUFuaW1hdGlvbixcclxuICAgIElNZXNoUHJpbWl0aXZlLFxyXG4gICAgSUJ1ZmZlcixcclxuICAgIElHTFRGLFxyXG4gICAgSVRleHR1cmVJbmZvLFxyXG4gICAgSVNraW4sXHJcbiAgICBJQ2FtZXJhLFxyXG59IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgQWNjZXNzb3JUeXBlLCBJbWFnZU1pbWVUeXBlLCBNZXNoUHJpbWl0aXZlTW9kZSwgQWNjZXNzb3JDb21wb25lbnRUeXBlLCBDYW1lcmFUeXBlIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5cclxuaW1wb3J0IHR5cGUgeyBGbG9hdEFycmF5LCBJbmRpY2VzQXJyYXksIE51bGxhYmxlIH0gZnJvbSBcImNvcmUvdHlwZXNcIjtcclxuaW1wb3J0IHsgTWF0cml4LCBUbXBWZWN0b3JzLCBWZWN0b3IyLCBWZWN0b3IzLCBWZWN0b3I0LCBRdWF0ZXJuaW9uIH0gZnJvbSBcImNvcmUvTWF0aHMvbWF0aC52ZWN0b3JcIjtcclxuaW1wb3J0IHsgQ29sb3IzLCBDb2xvcjQgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLmNvbG9yXCI7XHJcbmltcG9ydCB7IFRvb2xzIH0gZnJvbSBcImNvcmUvTWlzYy90b29sc1wiO1xyXG5pbXBvcnQgeyBWZXJ0ZXhCdWZmZXIgfSBmcm9tIFwiY29yZS9CdWZmZXJzL2J1ZmZlclwiO1xyXG5pbXBvcnQgdHlwZSB7IE5vZGUgfSBmcm9tIFwiY29yZS9ub2RlXCI7XHJcbmltcG9ydCB7IFRyYW5zZm9ybU5vZGUgfSBmcm9tIFwiY29yZS9NZXNoZXMvdHJhbnNmb3JtTm9kZVwiO1xyXG5pbXBvcnQgdHlwZSB7IEFic3RyYWN0TWVzaCB9IGZyb20gXCJjb3JlL01lc2hlcy9hYnN0cmFjdE1lc2hcIjtcclxuaW1wb3J0IHR5cGUgeyBTdWJNZXNoIH0gZnJvbSBcImNvcmUvTWVzaGVzL3N1Yk1lc2hcIjtcclxuaW1wb3J0IHsgTWVzaCB9IGZyb20gXCJjb3JlL01lc2hlcy9tZXNoXCI7XHJcbmltcG9ydCB0eXBlIHsgTW9ycGhUYXJnZXQgfSBmcm9tIFwiY29yZS9Nb3JwaC9tb3JwaFRhcmdldFwiO1xyXG5pbXBvcnQgeyBMaW5lc01lc2ggfSBmcm9tIFwiY29yZS9NZXNoZXMvbGluZXNNZXNoXCI7XHJcbmltcG9ydCB7IEluc3RhbmNlZE1lc2ggfSBmcm9tIFwiY29yZS9NZXNoZXMvaW5zdGFuY2VkTWVzaFwiO1xyXG5pbXBvcnQgdHlwZSB7IEJvbmUgfSBmcm9tIFwiY29yZS9Cb25lcy9ib25lXCI7XHJcbmltcG9ydCB0eXBlIHsgQmFzZVRleHR1cmUgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvYmFzZVRleHR1cmVcIjtcclxuaW1wb3J0IHR5cGUgeyBUZXh0dXJlIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1RleHR1cmVzL3RleHR1cmVcIjtcclxuaW1wb3J0IHsgTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgRW5naW5lIH0gZnJvbSBcImNvcmUvRW5naW5lcy9lbmdpbmVcIjtcclxuaW1wb3J0IHR5cGUgeyBTY2VuZSB9IGZyb20gXCJjb3JlL3NjZW5lXCI7XHJcblxyXG5pbXBvcnQgdHlwZSB7IElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMiB9IGZyb20gXCIuL2dsVEZFeHBvcnRlckV4dGVuc2lvblwiO1xyXG5pbXBvcnQgeyBfR0xURk1hdGVyaWFsRXhwb3J0ZXIgfSBmcm9tIFwiLi9nbFRGTWF0ZXJpYWxFeHBvcnRlclwiO1xyXG5pbXBvcnQgdHlwZSB7IElFeHBvcnRPcHRpb25zIH0gZnJvbSBcIi4vZ2xURlNlcmlhbGl6ZXJcIjtcclxuaW1wb3J0IHsgX0dMVEZVdGlsaXRpZXMgfSBmcm9tIFwiLi9nbFRGVXRpbGl0aWVzXCI7XHJcbmltcG9ydCB7IEdMVEZEYXRhIH0gZnJvbSBcIi4vZ2xURkRhdGFcIjtcclxuaW1wb3J0IHsgX0dMVEZBbmltYXRpb24gfSBmcm9tIFwiLi9nbFRGQW5pbWF0aW9uXCI7XHJcbmltcG9ydCB7IENhbWVyYSB9IGZyb20gXCJjb3JlL0NhbWVyYXMvY2FtZXJhXCI7XHJcbmltcG9ydCB7IEVuZ2luZVN0b3JlIH0gZnJvbSBcImNvcmUvRW5naW5lcy9lbmdpbmVTdG9yZVwiO1xyXG5pbXBvcnQgeyBNdWx0aU1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL211bHRpTWF0ZXJpYWxcIjtcclxuXHJcbi8vIE1hdHJpeCB0aGF0IGNvbnZlcnRzIGhhbmRlZG5lc3Mgb24gdGhlIFgtYXhpcy5cclxuY29uc3QgY29udmVydEhhbmRlZG5lc3NNYXRyaXggPSBNYXRyaXguQ29tcG9zZShuZXcgVmVjdG9yMygtMSwgMSwgMSksIFF1YXRlcm5pb24uSWRlbnRpdHkoKSwgVmVjdG9yMy5aZXJvKCkpO1xyXG5cclxuLy8gMTgwIGRlZ3JlZXMgcm90YXRpb24gaW4gWS5cclxuY29uc3Qgcm90YXRpb24xODBZID0gbmV3IFF1YXRlcm5pb24oMCwgMSwgMCwgMCk7XHJcblxyXG5mdW5jdGlvbiBpc05vb3BOb2RlKG5vZGU6IE5vZGUsIHVzZVJpZ2h0SGFuZGVkU3lzdGVtOiBib29sZWFuKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIShub2RlIGluc3RhbmNlb2YgVHJhbnNmb3JtTm9kZSkpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVHJhbnNmb3JtXHJcbiAgICBpZiAodXNlUmlnaHRIYW5kZWRTeXN0ZW0pIHtcclxuICAgICAgICBjb25zdCBtYXRyaXggPSBub2RlLmdldFdvcmxkTWF0cml4KCk7XHJcbiAgICAgICAgaWYgKCFtYXRyaXguaXNJZGVudGl0eSgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IG1hdHJpeCA9IG5vZGUuZ2V0V29ybGRNYXRyaXgoKS5tdWx0aXBseVRvUmVmKGNvbnZlcnRIYW5kZWRuZXNzTWF0cml4LCBUbXBWZWN0b3JzLk1hdHJpeFswXSk7XHJcbiAgICAgICAgaWYgKCFtYXRyaXguaXNJZGVudGl0eSgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2VvbWV0cnlcclxuICAgIGlmICgobm9kZSBpbnN0YW5jZW9mIE1lc2ggJiYgbm9kZS5nZW9tZXRyeSkgfHwgKG5vZGUgaW5zdGFuY2VvZiBJbnN0YW5jZWRNZXNoICYmIG5vZGUuc291cmNlTWVzaC5nZW9tZXRyeSkpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbnZlcnROb2RlSGFuZGVkbmVzcyhub2RlOiBJTm9kZSk6IHZvaWQge1xyXG4gICAgY29uc3QgdHJhbnNsYXRpb24gPSBWZWN0b3IzLkZyb21BcnJheVRvUmVmKG5vZGUudHJhbnNsYXRpb24gfHwgWzAsIDAsIDBdLCAwLCBUbXBWZWN0b3JzLlZlY3RvcjNbMF0pO1xyXG4gICAgY29uc3Qgcm90YXRpb24gPSBRdWF0ZXJuaW9uLkZyb21BcnJheVRvUmVmKG5vZGUucm90YXRpb24gfHwgWzAsIDAsIDAsIDFdLCAwLCBUbXBWZWN0b3JzLlF1YXRlcm5pb25bMF0pO1xyXG4gICAgY29uc3Qgc2NhbGUgPSBWZWN0b3IzLkZyb21BcnJheVRvUmVmKG5vZGUuc2NhbGUgfHwgWzEsIDEsIDFdLCAwLCBUbXBWZWN0b3JzLlZlY3RvcjNbMV0pO1xyXG4gICAgY29uc3QgbWF0cml4ID0gTWF0cml4LkNvbXBvc2VUb1JlZihzY2FsZSwgcm90YXRpb24sIHRyYW5zbGF0aW9uLCBUbXBWZWN0b3JzLk1hdHJpeFswXSkubXVsdGlwbHlUb1JlZihjb252ZXJ0SGFuZGVkbmVzc01hdHJpeCwgVG1wVmVjdG9ycy5NYXRyaXhbMF0pO1xyXG5cclxuICAgIG1hdHJpeC5kZWNvbXBvc2Uoc2NhbGUsIHJvdGF0aW9uLCB0cmFuc2xhdGlvbik7XHJcblxyXG4gICAgaWYgKHRyYW5zbGF0aW9uLmVxdWFsc1RvRmxvYXRzKDAsIDAsIDApKSB7XHJcbiAgICAgICAgZGVsZXRlIG5vZGUudHJhbnNsYXRpb247XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5vZGUudHJhbnNsYXRpb24gPSB0cmFuc2xhdGlvbi5hc0FycmF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKFF1YXRlcm5pb24uSXNJZGVudGl0eShyb3RhdGlvbikpIHtcclxuICAgICAgICBkZWxldGUgbm9kZS5yb3RhdGlvbjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbm9kZS5yb3RhdGlvbiA9IHJvdGF0aW9uLmFzQXJyYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc2NhbGUuZXF1YWxzVG9GbG9hdHMoMSwgMSwgMSkpIHtcclxuICAgICAgICBkZWxldGUgbm9kZS5zY2FsZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbm9kZS5zY2FsZSA9IHNjYWxlLmFzQXJyYXkoKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFV0aWxpdHkgaW50ZXJmYWNlIGZvciBzdG9yaW5nIHZlcnRleCBhdHRyaWJ1dGUgZGF0YVxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuaW50ZXJmYWNlIF9JVmVydGV4QXR0cmlidXRlRGF0YSB7XHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgQmFieWxvbiBWZXJ0ZXggQnVmZmVyIFR5cGUgKFBvc2l0aW9uLCBOb3JtYWwsIENvbG9yLCBldGMuKVxyXG4gICAgICovXHJcbiAgICBraW5kOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIGdsVEYgQWNjZXNzb3IgVHlwZSAoVkVDMiwgVkVDMywgZXRjLilcclxuICAgICAqL1xyXG4gICAgYWNjZXNzb3JUeXBlOiBBY2Nlc3NvclR5cGU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIGdsVEYgQWNjZXNzb3IgQ29tcG9uZW50IFR5cGUgKEJZVEUsIFVOU0lHTkVEX0JZVEUsIEZMT0FULCBTSE9SVCwgSU5ULCBldGMuLilcclxuICAgICAqL1xyXG4gICAgYWNjZXNzb3JDb21wb25lbnRUeXBlOiBBY2Nlc3NvckNvbXBvbmVudFR5cGU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIEJ1ZmZlclZpZXcgaW5kZXggZm9yIHRoZSB2ZXJ0ZXggYXR0cmlidXRlIGRhdGFcclxuICAgICAqL1xyXG4gICAgYnVmZmVyVmlld0luZGV4PzogbnVtYmVyO1xyXG5cclxuICAgIGJ5dGVTdHJpZGU/OiBudW1iZXI7XHJcbn1cclxuLyoqXHJcbiAqIENvbnZlcnRzIEJhYnlsb24gU2NlbmUgaW50byBnbFRGIDIuMC5cclxuICogQGludGVybmFsXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgX0V4cG9ydGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogU3RvcmVzIHRoZSBnbFRGIHRvIGV4cG9ydFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgX2dsVEY6IElHTFRGO1xyXG4gICAgLyoqXHJcbiAgICAgKiBTdG9yZXMgYWxsIGdlbmVyYXRlZCBidWZmZXIgdmlld3MsIHdoaWNoIHJlcHJlc2VudHMgdmlld3MgaW50byB0aGUgbWFpbiBnbFRGIGJ1ZmZlciBkYXRhXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfYnVmZmVyVmlld3M6IElCdWZmZXJWaWV3W107XHJcbiAgICAvKipcclxuICAgICAqIFN0b3JlcyBhbGwgdGhlIGdlbmVyYXRlZCBhY2Nlc3NvcnMsIHdoaWNoIGlzIHVzZWQgZm9yIGFjY2Vzc2luZyB0aGUgZGF0YSB3aXRoaW4gdGhlIGJ1ZmZlciB2aWV3cyBpbiBnbFRGXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfYWNjZXNzb3JzOiBJQWNjZXNzb3JbXTtcclxuICAgIC8qKlxyXG4gICAgICogU3RvcmVzIGFsbCB0aGUgZ2VuZXJhdGVkIG5vZGVzLCB3aGljaCBjb250YWlucyB0cmFuc2Zvcm0gYW5kL29yIG1lc2ggaW5mb3JtYXRpb24gcGVyIG5vZGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIF9ub2RlczogSU5vZGVbXTtcclxuICAgIC8qKlxyXG4gICAgICogU3RvcmVzIGFsbCB0aGUgZ2VuZXJhdGVkIGdsVEYgc2NlbmVzLCB3aGljaCBzdG9yZXMgbXVsdGlwbGUgbm9kZSBoaWVyYXJjaGllc1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9zY2VuZXM6IElTY2VuZVtdO1xyXG4gICAgLyoqXHJcbiAgICAgKiBTdG9yZXMgYWxsIHRoZSBnZW5lcmF0ZWQgZ2xURiBjYW1lcmFzXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX2NhbWVyYXM6IElDYW1lcmFbXTtcclxuICAgIC8qKlxyXG4gICAgICogU3RvcmVzIGFsbCB0aGUgZ2VuZXJhdGVkIG1lc2ggaW5mb3JtYXRpb24sIGVhY2ggY29udGFpbmluZyBhIHNldCBvZiBwcmltaXRpdmVzIHRvIHJlbmRlciBpbiBnbFRGXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX21lc2hlczogSU1lc2hbXTtcclxuICAgIC8qKlxyXG4gICAgICogU3RvcmVzIGFsbCB0aGUgZ2VuZXJhdGVkIG1hdGVyaWFsIGluZm9ybWF0aW9uLCB3aGljaCByZXByZXNlbnRzIHRoZSBhcHBlYXJhbmNlIG9mIGVhY2ggcHJpbWl0aXZlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfbWF0ZXJpYWxzOiBJTWF0ZXJpYWxbXTtcclxuXHJcbiAgICBwdWJsaWMgX21hdGVyaWFsTWFwOiB7IFttYXRlcmlhbElEOiBudW1iZXJdOiBudW1iZXIgfTtcclxuICAgIC8qKlxyXG4gICAgICogU3RvcmVzIGFsbCB0aGUgZ2VuZXJhdGVkIHRleHR1cmUgaW5mb3JtYXRpb24sIHdoaWNoIGlzIHJlZmVyZW5jZWQgYnkgZ2xURiBtYXRlcmlhbHNcclxuICAgICAqL1xyXG4gICAgcHVibGljIF90ZXh0dXJlczogSVRleHR1cmVbXTtcclxuICAgIC8qKlxyXG4gICAgICogU3RvcmVzIGFsbCB0aGUgZ2VuZXJhdGVkIGltYWdlIGluZm9ybWF0aW9uLCB3aGljaCBpcyByZWZlcmVuY2VkIGJ5IGdsVEYgdGV4dHVyZXNcclxuICAgICAqL1xyXG4gICAgcHVibGljIF9pbWFnZXM6IElJbWFnZVtdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RvcmVzIGFsbCB0aGUgdGV4dHVyZSBzYW1wbGVyc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgX3NhbXBsZXJzOiBJU2FtcGxlcltdO1xyXG4gICAgLyoqXHJcbiAgICAgKiBTdG9yZXMgYWxsIHRoZSBnZW5lcmF0ZWQgZ2xURiBza2luc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgX3NraW5zOiBJU2tpbltdO1xyXG4gICAgLyoqXHJcbiAgICAgKiBTdG9yZXMgYWxsIHRoZSBnZW5lcmF0ZWQgYW5pbWF0aW9uIHNhbXBsZXJzLCB3aGljaCBpcyByZWZlcmVuY2VkIGJ5IGdsVEYgYW5pbWF0aW9uc1xyXG4gICAgICovXHJcbiAgICAvKipcclxuICAgICAqIFN0b3JlcyB0aGUgYW5pbWF0aW9ucyBmb3IgZ2xURiBtb2RlbHNcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfYW5pbWF0aW9uczogSUFuaW1hdGlvbltdO1xyXG4gICAgLyoqXHJcbiAgICAgKiBTdG9yZXMgdGhlIHRvdGFsIGFtb3VudCBvZiBieXRlcyBzdG9yZWQgaW4gdGhlIGdsVEYgYnVmZmVyXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX3RvdGFsQnl0ZUxlbmd0aDogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBTdG9yZXMgYSByZWZlcmVuY2UgdG8gdGhlIEJhYnlsb24gc2NlbmUgY29udGFpbmluZyB0aGUgc291cmNlIGdlb21ldHJ5IGFuZCBtYXRlcmlhbCBpbmZvcm1hdGlvblxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgX2JhYnlsb25TY2VuZTogU2NlbmU7XHJcbiAgICAvKipcclxuICAgICAqIFN0b3JlcyBhIG1hcCBvZiB0aGUgaW1hZ2UgZGF0YSwgd2hlcmUgdGhlIGtleSBpcyB0aGUgZmlsZSBuYW1lIGFuZCB0aGUgdmFsdWVcclxuICAgICAqIGlzIHRoZSBpbWFnZSBkYXRhXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfaW1hZ2VEYXRhOiB7IFtmaWxlTmFtZTogc3RyaW5nXTogeyBkYXRhOiBBcnJheUJ1ZmZlcjsgbWltZVR5cGU6IEltYWdlTWltZVR5cGUgfSB9O1xyXG5cclxuICAgIHByaXZhdGUgX29yZGVyZWRJbWFnZURhdGE6IEFycmF5PHsgZGF0YTogQXJyYXlCdWZmZXI7IG1pbWVUeXBlOiBJbWFnZU1pbWVUeXBlIH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RvcmVzIGEgbWFwIG9mIHRoZSB1bmlxdWUgaWQgb2YgYSBub2RlIHRvIGl0cyBpbmRleCBpbiB0aGUgbm9kZSBhcnJheVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9ub2RlTWFwOiB7IFtrZXk6IG51bWJlcl06IG51bWJlciB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQmFrZWQgYW5pbWF0aW9uIHNhbXBsZSByYXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX2FuaW1hdGlvblNhbXBsZVJhdGU6IG51bWJlcjtcclxuXHJcbiAgICBwcml2YXRlIF9vcHRpb25zOiBJRXhwb3J0T3B0aW9ucztcclxuXHJcbiAgICBwcml2YXRlIF9sb2NhbEVuZ2luZTogRW5naW5lO1xyXG5cclxuICAgIHB1YmxpYyBfZ2xURk1hdGVyaWFsRXhwb3J0ZXI6IF9HTFRGTWF0ZXJpYWxFeHBvcnRlcjtcclxuXHJcbiAgICBwcml2YXRlIF9leHRlbnNpb25zOiB7IFtuYW1lOiBzdHJpbmddOiBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIgfSA9IHt9O1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9FeHRlbnNpb25OYW1lcyA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfRXh0ZW5zaW9uRmFjdG9yaWVzOiB7IFtuYW1lOiBzdHJpbmddOiAoZXhwb3J0ZXI6IF9FeHBvcnRlcikgPT4gSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyIH0gPSB7fTtcclxuXHJcbiAgICBwcml2YXRlIF9hcHBseUV4dGVuc2lvbjxUPihcclxuICAgICAgICBub2RlOiBOdWxsYWJsZTxUPixcclxuICAgICAgICBleHRlbnNpb25zOiBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjJbXSxcclxuICAgICAgICBpbmRleDogbnVtYmVyLFxyXG4gICAgICAgIGFjdGlvbkFzeW5jOiAoZXh0ZW5zaW9uOiBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIsIG5vZGU6IE51bGxhYmxlPFQ+KSA9PiBQcm9taXNlPE51bGxhYmxlPFQ+PiB8IHVuZGVmaW5lZFxyXG4gICAgKTogUHJvbWlzZTxOdWxsYWJsZTxUPj4ge1xyXG4gICAgICAgIGlmIChpbmRleCA+PSBleHRlbnNpb25zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5vZGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgY3VycmVudFByb21pc2UgPSBhY3Rpb25Bc3luYyhleHRlbnNpb25zW2luZGV4XSwgbm9kZSk7XHJcblxyXG4gICAgICAgIGlmICghY3VycmVudFByb21pc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FwcGx5RXh0ZW5zaW9uKG5vZGUsIGV4dGVuc2lvbnMsIGluZGV4ICsgMSwgYWN0aW9uQXN5bmMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRQcm9taXNlLnRoZW4oKG5ld05vZGUpID0+IHRoaXMuX2FwcGx5RXh0ZW5zaW9uKG5ld05vZGUsIGV4dGVuc2lvbnMsIGluZGV4ICsgMSwgYWN0aW9uQXN5bmMpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9hcHBseUV4dGVuc2lvbnM8VD4oXHJcbiAgICAgICAgbm9kZTogTnVsbGFibGU8VD4sXHJcbiAgICAgICAgYWN0aW9uQXN5bmM6IChleHRlbnNpb246IElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMiwgbm9kZTogTnVsbGFibGU8VD4pID0+IFByb21pc2U8TnVsbGFibGU8VD4+IHwgdW5kZWZpbmVkXHJcbiAgICApOiBQcm9taXNlPE51bGxhYmxlPFQ+PiB7XHJcbiAgICAgICAgY29uc3QgZXh0ZW5zaW9uczogSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyW10gPSBbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IG5hbWUgb2YgX0V4cG9ydGVyLl9FeHRlbnNpb25OYW1lcykge1xyXG4gICAgICAgICAgICBleHRlbnNpb25zLnB1c2godGhpcy5fZXh0ZW5zaW9uc1tuYW1lXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fYXBwbHlFeHRlbnNpb24obm9kZSwgZXh0ZW5zaW9ucywgMCwgYWN0aW9uQXN5bmMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBfZXh0ZW5zaW9uc1ByZUV4cG9ydFRleHR1cmVBc3luYyhjb250ZXh0OiBzdHJpbmcsIGJhYnlsb25UZXh0dXJlOiBOdWxsYWJsZTxUZXh0dXJlPiwgbWltZVR5cGU6IEltYWdlTWltZVR5cGUpOiBQcm9taXNlPE51bGxhYmxlPEJhc2VUZXh0dXJlPj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hcHBseUV4dGVuc2lvbnMoYmFieWxvblRleHR1cmUsIChleHRlbnNpb24sIG5vZGUpID0+IGV4dGVuc2lvbi5wcmVFeHBvcnRUZXh0dXJlQXN5bmMgJiYgZXh0ZW5zaW9uLnByZUV4cG9ydFRleHR1cmVBc3luYyhjb250ZXh0LCBub2RlLCBtaW1lVHlwZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBfZXh0ZW5zaW9uc1Bvc3RFeHBvcnRNZXNoUHJpbWl0aXZlQXN5bmMoXHJcbiAgICAgICAgY29udGV4dDogc3RyaW5nLFxyXG4gICAgICAgIG1lc2hQcmltaXRpdmU6IElNZXNoUHJpbWl0aXZlLFxyXG4gICAgICAgIGJhYnlsb25TdWJNZXNoOiBTdWJNZXNoLFxyXG4gICAgICAgIGJpbmFyeVdyaXRlcjogX0JpbmFyeVdyaXRlclxyXG4gICAgKTogUHJvbWlzZTxOdWxsYWJsZTxJTWVzaFByaW1pdGl2ZT4+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXBwbHlFeHRlbnNpb25zKFxyXG4gICAgICAgICAgICBtZXNoUHJpbWl0aXZlLFxyXG4gICAgICAgICAgICAoZXh0ZW5zaW9uLCBub2RlKSA9PiBleHRlbnNpb24ucG9zdEV4cG9ydE1lc2hQcmltaXRpdmVBc3luYyAmJiBleHRlbnNpb24ucG9zdEV4cG9ydE1lc2hQcmltaXRpdmVBc3luYyhjb250ZXh0LCBub2RlLCBiYWJ5bG9uU3ViTWVzaCwgYmluYXJ5V3JpdGVyKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIF9leHRlbnNpb25zUG9zdEV4cG9ydE5vZGVBc3luYyhcclxuICAgICAgICBjb250ZXh0OiBzdHJpbmcsXHJcbiAgICAgICAgbm9kZTogTnVsbGFibGU8SU5vZGU+LFxyXG4gICAgICAgIGJhYnlsb25Ob2RlOiBOb2RlLFxyXG4gICAgICAgIG5vZGVNYXA6IHsgW2tleTogbnVtYmVyXTogbnVtYmVyIH0sXHJcbiAgICAgICAgYmluYXJ5V3JpdGVyOiBfQmluYXJ5V3JpdGVyXHJcbiAgICApOiBQcm9taXNlPE51bGxhYmxlPElOb2RlPj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hcHBseUV4dGVuc2lvbnMobm9kZSwgKGV4dGVuc2lvbiwgbm9kZSkgPT4gZXh0ZW5zaW9uLnBvc3RFeHBvcnROb2RlQXN5bmMgJiYgZXh0ZW5zaW9uLnBvc3RFeHBvcnROb2RlQXN5bmMoY29udGV4dCwgbm9kZSwgYmFieWxvbk5vZGUsIG5vZGVNYXAsIGJpbmFyeVdyaXRlcikpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBfZXh0ZW5zaW9uc1Bvc3RFeHBvcnRNYXRlcmlhbEFzeW5jKGNvbnRleHQ6IHN0cmluZywgbWF0ZXJpYWw6IE51bGxhYmxlPElNYXRlcmlhbD4sIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBQcm9taXNlPE51bGxhYmxlPElNYXRlcmlhbD4+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXBwbHlFeHRlbnNpb25zKG1hdGVyaWFsLCAoZXh0ZW5zaW9uLCBub2RlKSA9PiBleHRlbnNpb24ucG9zdEV4cG9ydE1hdGVyaWFsQXN5bmMgJiYgZXh0ZW5zaW9uLnBvc3RFeHBvcnRNYXRlcmlhbEFzeW5jKGNvbnRleHQsIG5vZGUsIGJhYnlsb25NYXRlcmlhbCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBfZXh0ZW5zaW9uc1Bvc3RFeHBvcnRNYXRlcmlhbEFkZGl0aW9uYWxUZXh0dXJlcyhjb250ZXh0OiBzdHJpbmcsIG1hdGVyaWFsOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBCYXNlVGV4dHVyZVtdIHtcclxuICAgICAgICBjb25zdCBvdXRwdXQ6IEJhc2VUZXh0dXJlW10gPSBbXTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBuYW1lIG9mIF9FeHBvcnRlci5fRXh0ZW5zaW9uTmFtZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgZXh0ZW5zaW9uID0gdGhpcy5fZXh0ZW5zaW9uc1tuYW1lXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChleHRlbnNpb24ucG9zdEV4cG9ydE1hdGVyaWFsQWRkaXRpb25hbFRleHR1cmVzKSB7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXQucHVzaCguLi5leHRlbnNpb24ucG9zdEV4cG9ydE1hdGVyaWFsQWRkaXRpb25hbFRleHR1cmVzKGNvbnRleHQsIG1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWwpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgX2V4dGVuc2lvbnNQb3N0RXhwb3J0VGV4dHVyZXMoY29udGV4dDogc3RyaW5nLCB0ZXh0dXJlSW5mbzogSVRleHR1cmVJbmZvLCBiYWJ5bG9uVGV4dHVyZTogQmFzZVRleHR1cmUpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGNvbnN0IG5hbWUgb2YgX0V4cG9ydGVyLl9FeHRlbnNpb25OYW1lcykge1xyXG4gICAgICAgICAgICBjb25zdCBleHRlbnNpb24gPSB0aGlzLl9leHRlbnNpb25zW25hbWVdO1xyXG5cclxuICAgICAgICAgICAgaWYgKGV4dGVuc2lvbi5wb3N0RXhwb3J0VGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgZXh0ZW5zaW9uLnBvc3RFeHBvcnRUZXh0dXJlKGNvbnRleHQsIHRleHR1cmVJbmZvLCBiYWJ5bG9uVGV4dHVyZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZm9yRWFjaEV4dGVuc2lvbnMoYWN0aW9uOiAoZXh0ZW5zaW9uOiBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGNvbnN0IG5hbWUgb2YgX0V4cG9ydGVyLl9FeHRlbnNpb25OYW1lcykge1xyXG4gICAgICAgICAgICBjb25zdCBleHRlbnNpb24gPSB0aGlzLl9leHRlbnNpb25zW25hbWVdO1xyXG4gICAgICAgICAgICBpZiAoZXh0ZW5zaW9uLmVuYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbihleHRlbnNpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2V4dGVuc2lvbnNPbkV4cG9ydGluZygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9mb3JFYWNoRXh0ZW5zaW9ucygoZXh0ZW5zaW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChleHRlbnNpb24ud2FzVXNlZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2dsVEYuZXh0ZW5zaW9uc1VzZWQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2dsVEYuZXh0ZW5zaW9uc1VzZWQgPSBbXTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fZ2xURi5leHRlbnNpb25zVXNlZC5pbmRleE9mKGV4dGVuc2lvbi5uYW1lKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9nbFRGLmV4dGVuc2lvbnNVc2VkLnB1c2goZXh0ZW5zaW9uLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChleHRlbnNpb24ucmVxdWlyZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fZ2xURi5leHRlbnNpb25zUmVxdWlyZWQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9nbFRGLmV4dGVuc2lvbnNSZXF1aXJlZCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fZ2xURi5leHRlbnNpb25zUmVxdWlyZWQuaW5kZXhPZihleHRlbnNpb24ubmFtZSkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2dsVEYuZXh0ZW5zaW9uc1JlcXVpcmVkLnB1c2goZXh0ZW5zaW9uLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fZ2xURi5leHRlbnNpb25zID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9nbFRGLmV4dGVuc2lvbnMgPSB7fTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZXh0ZW5zaW9uLm9uRXhwb3J0aW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXh0ZW5zaW9uLm9uRXhwb3J0aW5nKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIExvYWQgZ2xURiBzZXJpYWxpemVyIGV4dGVuc2lvbnNcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfbG9hZEV4dGVuc2lvbnMoKTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChjb25zdCBuYW1lIG9mIF9FeHBvcnRlci5fRXh0ZW5zaW9uTmFtZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgZXh0ZW5zaW9uID0gX0V4cG9ydGVyLl9FeHRlbnNpb25GYWN0b3JpZXNbbmFtZV0odGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMuX2V4dGVuc2lvbnNbbmFtZV0gPSBleHRlbnNpb247XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIGdsVEYgRXhwb3J0ZXIgaW5zdGFuY2UsIHdoaWNoIGNhbiBhY2NlcHQgb3B0aW9uYWwgZXhwb3J0ZXIgb3B0aW9uc1xyXG4gICAgICogQHBhcmFtIGJhYnlsb25TY2VuZSBCYWJ5bG9uIHNjZW5lIG9iamVjdFxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgT3B0aW9ucyB0byBtb2RpZnkgdGhlIGJlaGF2aW9yIG9mIHRoZSBleHBvcnRlclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoYmFieWxvblNjZW5lPzogTnVsbGFibGU8U2NlbmU+LCBvcHRpb25zPzogSUV4cG9ydE9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLl9nbFRGID0ge1xyXG4gICAgICAgICAgICBhc3NldDogeyBnZW5lcmF0b3I6IGBCYWJ5bG9uLmpzIHYke0VuZ2luZS5WZXJzaW9ufWAsIHZlcnNpb246IFwiMi4wXCIgfSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGJhYnlsb25TY2VuZSA9IGJhYnlsb25TY2VuZSB8fCBFbmdpbmVTdG9yZS5MYXN0Q3JlYXRlZFNjZW5lO1xyXG4gICAgICAgIGlmICghYmFieWxvblNjZW5lKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fYmFieWxvblNjZW5lID0gYmFieWxvblNjZW5lO1xyXG4gICAgICAgIHRoaXMuX2J1ZmZlclZpZXdzID0gW107XHJcbiAgICAgICAgdGhpcy5fYWNjZXNzb3JzID0gW107XHJcbiAgICAgICAgdGhpcy5fbWVzaGVzID0gW107XHJcbiAgICAgICAgdGhpcy5fc2NlbmVzID0gW107XHJcbiAgICAgICAgdGhpcy5fY2FtZXJhcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuX25vZGVzID0gW107XHJcbiAgICAgICAgdGhpcy5faW1hZ2VzID0gW107XHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWxzID0gW107XHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWxNYXAgPSBbXTtcclxuICAgICAgICB0aGlzLl90ZXh0dXJlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuX3NhbXBsZXJzID0gW107XHJcbiAgICAgICAgdGhpcy5fc2tpbnMgPSBbXTtcclxuICAgICAgICB0aGlzLl9hbmltYXRpb25zID0gW107XHJcbiAgICAgICAgdGhpcy5faW1hZ2VEYXRhID0ge307XHJcbiAgICAgICAgdGhpcy5fb3JkZXJlZEltYWdlRGF0YSA9IFtdO1xyXG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG4gICAgICAgIHRoaXMuX2FuaW1hdGlvblNhbXBsZVJhdGUgPSB0aGlzLl9vcHRpb25zLmFuaW1hdGlvblNhbXBsZVJhdGUgfHwgMSAvIDYwO1xyXG5cclxuICAgICAgICB0aGlzLl9nbFRGTWF0ZXJpYWxFeHBvcnRlciA9IG5ldyBfR0xURk1hdGVyaWFsRXhwb3J0ZXIodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fbG9hZEV4dGVuc2lvbnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGV4dGVuc2lvbktleSBpbiB0aGlzLl9leHRlbnNpb25zKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IHRoaXMuX2V4dGVuc2lvbnNbZXh0ZW5zaW9uS2V5XTtcclxuXHJcbiAgICAgICAgICAgIGV4dGVuc2lvbi5kaXNwb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgb3B0aW9ucygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fb3B0aW9ucztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlZ2lzdGVycyBhIGdsVEYgZXhwb3J0ZXIgZXh0ZW5zaW9uXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBleHRlbnNpb24gdG8gZXhwb3J0XHJcbiAgICAgKiBAcGFyYW0gZmFjdG9yeSBUaGUgZmFjdG9yeSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlIGV4cG9ydGVyIGV4dGVuc2lvblxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFJlZ2lzdGVyRXh0ZW5zaW9uKG5hbWU6IHN0cmluZywgZmFjdG9yeTogKGV4cG9ydGVyOiBfRXhwb3J0ZXIpID0+IElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMik6IHZvaWQge1xyXG4gICAgICAgIGlmIChfRXhwb3J0ZXIuVW5yZWdpc3RlckV4dGVuc2lvbihuYW1lKSkge1xyXG4gICAgICAgICAgICBUb29scy5XYXJuKGBFeHRlbnNpb24gd2l0aCB0aGUgbmFtZSAke25hbWV9IGFscmVhZHkgZXhpc3RzYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBfRXhwb3J0ZXIuX0V4dGVuc2lvbkZhY3Rvcmllc1tuYW1lXSA9IGZhY3Rvcnk7XHJcbiAgICAgICAgX0V4cG9ydGVyLl9FeHRlbnNpb25OYW1lcy5wdXNoKG5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVW4tcmVnaXN0ZXJzIGFuIGV4cG9ydGVyIGV4dGVuc2lvblxyXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgZm8gdGhlIGV4cG9ydGVyIGV4dGVuc2lvblxyXG4gICAgICogQHJldHVybnMgQSBib29sZWFuIGluZGljYXRpbmcgd2hldGhlciB0aGUgZXh0ZW5zaW9uIGhhcyBiZWVuIHVuLXJlZ2lzdGVyZWRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBVbnJlZ2lzdGVyRXh0ZW5zaW9uKG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICghX0V4cG9ydGVyLl9FeHRlbnNpb25GYWN0b3JpZXNbbmFtZV0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWxldGUgX0V4cG9ydGVyLl9FeHRlbnNpb25GYWN0b3JpZXNbbmFtZV07XHJcblxyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gX0V4cG9ydGVyLl9FeHRlbnNpb25OYW1lcy5pbmRleE9mKG5hbWUpO1xyXG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgX0V4cG9ydGVyLl9FeHRlbnNpb25OYW1lcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfcmVvcmRlckluZGljZXNCYXNlZE9uUHJpbWl0aXZlTW9kZShzdWJtZXNoOiBTdWJNZXNoLCBwcmltaXRpdmVNb2RlOiBudW1iZXIsIGJhYnlsb25JbmRpY2VzOiBJbmRpY2VzQXJyYXksIGJ5dGVPZmZzZXQ6IG51bWJlciwgYmluYXJ5V3JpdGVyOiBfQmluYXJ5V3JpdGVyKSB7XHJcbiAgICAgICAgc3dpdGNoIChwcmltaXRpdmVNb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgTWF0ZXJpYWwuVHJpYW5nbGVGaWxsTW9kZToge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFieXRlT2Zmc2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnl0ZU9mZnNldCA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gc3VibWVzaC5pbmRleFN0YXJ0LCBsZW5ndGggPSBzdWJtZXNoLmluZGV4U3RhcnQgKyBzdWJtZXNoLmluZGV4Q291bnQ7IGkgPCBsZW5ndGg7IGkgPSBpICsgMykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gYnl0ZU9mZnNldCArIGkgKiA0O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHN3YXAgdGhlIHNlY29uZCBhbmQgdGhpcmQgaW5kaWNlc1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlY29uZEluZGV4ID0gYmluYXJ5V3JpdGVyLmdldFVJbnQzMihpbmRleCArIDQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRoaXJkSW5kZXggPSBiaW5hcnlXcml0ZXIuZ2V0VUludDMyKGluZGV4ICsgOCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYmluYXJ5V3JpdGVyLnNldFVJbnQzMih0aGlyZEluZGV4LCBpbmRleCArIDQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJpbmFyeVdyaXRlci5zZXRVSW50MzIoc2Vjb25kSW5kZXgsIGluZGV4ICsgOCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIE1hdGVyaWFsLlRyaWFuZ2xlRmFuRHJhd01vZGU6IHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBzdWJtZXNoLmluZGV4U3RhcnQgKyBzdWJtZXNoLmluZGV4Q291bnQgLSAxLCBzdGFydCA9IHN1Ym1lc2guaW5kZXhTdGFydDsgaSA+PSBzdGFydDsgLS1pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmluYXJ5V3JpdGVyLnNldFVJbnQzMihiYWJ5bG9uSW5kaWNlc1tpXSwgYnl0ZU9mZnNldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnl0ZU9mZnNldCArPSA0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBNYXRlcmlhbC5UcmlhbmdsZVN0cmlwRHJhd01vZGU6IHtcclxuICAgICAgICAgICAgICAgIGlmIChzdWJtZXNoLmluZGV4Q291bnQgPj0gMykge1xyXG4gICAgICAgICAgICAgICAgICAgIGJpbmFyeVdyaXRlci5zZXRVSW50MzIoYmFieWxvbkluZGljZXNbc3VibWVzaC5pbmRleFN0YXJ0ICsgMl0sIGJ5dGVPZmZzZXQgKyA0KTtcclxuICAgICAgICAgICAgICAgICAgICBiaW5hcnlXcml0ZXIuc2V0VUludDMyKGJhYnlsb25JbmRpY2VzW3N1Ym1lc2guaW5kZXhTdGFydCArIDFdLCBieXRlT2Zmc2V0ICsgOCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlb3JkZXJzIHRoZSB2ZXJ0ZXggYXR0cmlidXRlIGRhdGEgYmFzZWQgb24gdGhlIHByaW1pdGl2ZSBtb2RlLiAgVGhpcyBpcyBuZWNlc3Nhcnkgd2hlbiBpbmRpY2VzIGFyZSBub3QgYXZhaWxhYmxlIGFuZCB0aGUgd2luZGluZyBvcmRlciBpc1xyXG4gICAgICogY2xvY2std2lzZSBkdXJpbmcgZXhwb3J0IHRvIGdsVEZcclxuICAgICAqIEBwYXJhbSBzdWJtZXNoIEJhYnlsb25KUyBzdWJtZXNoXHJcbiAgICAgKiBAcGFyYW0gcHJpbWl0aXZlTW9kZSBQcmltaXRpdmUgbW9kZSBvZiB0aGUgbWVzaFxyXG4gICAgICogQHBhcmFtIHZlcnRleEJ1ZmZlcktpbmQgVGhlIHR5cGUgb2YgdmVydGV4IGF0dHJpYnV0ZVxyXG4gICAgICogQHBhcmFtIG1lc2hBdHRyaWJ1dGVBcnJheSBUaGUgdmVydGV4IGF0dHJpYnV0ZSBkYXRhXHJcbiAgICAgKiBAcGFyYW0gYnl0ZU9mZnNldCBUaGUgb2Zmc2V0IHRvIHRoZSBiaW5hcnkgZGF0YVxyXG4gICAgICogQHBhcmFtIGJpbmFyeVdyaXRlciBUaGUgYmluYXJ5IGRhdGEgZm9yIHRoZSBnbFRGIGZpbGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfcmVvcmRlclZlcnRleEF0dHJpYnV0ZURhdGFCYXNlZE9uUHJpbWl0aXZlTW9kZShcclxuICAgICAgICBzdWJtZXNoOiBTdWJNZXNoLFxyXG4gICAgICAgIHByaW1pdGl2ZU1vZGU6IG51bWJlcixcclxuICAgICAgICB2ZXJ0ZXhCdWZmZXJLaW5kOiBzdHJpbmcsXHJcbiAgICAgICAgbWVzaEF0dHJpYnV0ZUFycmF5OiBGbG9hdEFycmF5LFxyXG4gICAgICAgIGJ5dGVPZmZzZXQ6IG51bWJlcixcclxuICAgICAgICBiaW5hcnlXcml0ZXI6IF9CaW5hcnlXcml0ZXJcclxuICAgICk6IHZvaWQge1xyXG4gICAgICAgIHN3aXRjaCAocHJpbWl0aXZlTW9kZSkge1xyXG4gICAgICAgICAgICBjYXNlIE1hdGVyaWFsLlRyaWFuZ2xlRmlsbE1vZGU6IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Jlb3JkZXJUcmlhbmdsZUZpbGxNb2RlKHN1Ym1lc2gsIHZlcnRleEJ1ZmZlcktpbmQsIG1lc2hBdHRyaWJ1dGVBcnJheSwgYnl0ZU9mZnNldCwgYmluYXJ5V3JpdGVyKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgTWF0ZXJpYWwuVHJpYW5nbGVTdHJpcERyYXdNb2RlOiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW9yZGVyVHJpYW5nbGVTdHJpcERyYXdNb2RlKHN1Ym1lc2gsIHZlcnRleEJ1ZmZlcktpbmQsIG1lc2hBdHRyaWJ1dGVBcnJheSwgYnl0ZU9mZnNldCwgYmluYXJ5V3JpdGVyKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgTWF0ZXJpYWwuVHJpYW5nbGVGYW5EcmF3TW9kZToge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVvcmRlclRyaWFuZ2xlRmFuTW9kZShzdWJtZXNoLCB2ZXJ0ZXhCdWZmZXJLaW5kLCBtZXNoQXR0cmlidXRlQXJyYXksIGJ5dGVPZmZzZXQsIGJpbmFyeVdyaXRlcik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlb3JkZXJzIHRoZSB2ZXJ0ZXggYXR0cmlidXRlcyBpbiB0aGUgY29ycmVjdCB0cmlhbmdsZSBtb2RlIG9yZGVyIC4gIFRoaXMgaXMgbmVjZXNzYXJ5IHdoZW4gaW5kaWNlcyBhcmUgbm90IGF2YWlsYWJsZSBhbmQgdGhlIHdpbmRpbmcgb3JkZXIgaXNcclxuICAgICAqIGNsb2NrLXdpc2UgZHVyaW5nIGV4cG9ydCB0byBnbFRGXHJcbiAgICAgKiBAcGFyYW0gc3VibWVzaCBCYWJ5bG9uSlMgc3VibWVzaFxyXG4gICAgICogQHBhcmFtIHZlcnRleEJ1ZmZlcktpbmQgVGhlIHR5cGUgb2YgdmVydGV4IGF0dHJpYnV0ZVxyXG4gICAgICogQHBhcmFtIG1lc2hBdHRyaWJ1dGVBcnJheSBUaGUgdmVydGV4IGF0dHJpYnV0ZSBkYXRhXHJcbiAgICAgKiBAcGFyYW0gYnl0ZU9mZnNldCBUaGUgb2Zmc2V0IHRvIHRoZSBiaW5hcnkgZGF0YVxyXG4gICAgICogQHBhcmFtIGJpbmFyeVdyaXRlciBUaGUgYmluYXJ5IGRhdGEgZm9yIHRoZSBnbFRGIGZpbGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfcmVvcmRlclRyaWFuZ2xlRmlsbE1vZGUoc3VibWVzaDogU3ViTWVzaCwgdmVydGV4QnVmZmVyS2luZDogc3RyaW5nLCBtZXNoQXR0cmlidXRlQXJyYXk6IEZsb2F0QXJyYXksIGJ5dGVPZmZzZXQ6IG51bWJlciwgYmluYXJ5V3JpdGVyOiBfQmluYXJ5V3JpdGVyKSB7XHJcbiAgICAgICAgY29uc3QgdmVydGV4QnVmZmVyID0gdGhpcy5fZ2V0VmVydGV4QnVmZmVyRnJvbU1lc2godmVydGV4QnVmZmVyS2luZCwgc3VibWVzaC5nZXRNZXNoKCkgYXMgTWVzaCk7XHJcbiAgICAgICAgaWYgKHZlcnRleEJ1ZmZlcikge1xyXG4gICAgICAgICAgICBjb25zdCBzdHJpZGUgPSB2ZXJ0ZXhCdWZmZXIuYnl0ZVN0cmlkZSAvIFZlcnRleEJ1ZmZlci5HZXRUeXBlQnl0ZUxlbmd0aCh2ZXJ0ZXhCdWZmZXIudHlwZSk7XHJcbiAgICAgICAgICAgIGlmIChzdWJtZXNoLnZlcnRpY2VzQ291bnQgJSAzICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBUb29scy5FcnJvcihcIlRoZSBzdWJtZXNoIHZlcnRpY2VzIGZvciB0aGUgdHJpYW5nbGUgZmlsbCBtb2RlIGlzIG5vdCBkaXZpc2libGUgYnkgMyFcIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2ZXJ0ZXhEYXRhOiBWZWN0b3IyW10gfCBWZWN0b3IzW10gfCBWZWN0b3I0W10gPSBbXTtcclxuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHZlcnRleEJ1ZmZlcktpbmQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5Qb3NpdGlvbktpbmQ6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuTm9ybWFsS2luZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB4ID0gc3VibWVzaC52ZXJ0aWNlc1N0YXJ0OyB4IDwgc3VibWVzaC52ZXJ0aWNlc1N0YXJ0ICsgc3VibWVzaC52ZXJ0aWNlc0NvdW50OyB4ID0geCArIDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ID0geCAqIHN0cmlkZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh2ZXJ0ZXhEYXRhIGFzIFZlY3RvcjNbXSkucHVzaChWZWN0b3IzLkZyb21BcnJheShtZXNoQXR0cmlidXRlQXJyYXksIGluZGV4KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodmVydGV4RGF0YSBhcyBWZWN0b3IzW10pLnB1c2goVmVjdG9yMy5Gcm9tQXJyYXkobWVzaEF0dHJpYnV0ZUFycmF5LCBpbmRleCArIDIgKiBzdHJpZGUpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh2ZXJ0ZXhEYXRhIGFzIFZlY3RvcjNbXSkucHVzaChWZWN0b3IzLkZyb21BcnJheShtZXNoQXR0cmlidXRlQXJyYXksIGluZGV4ICsgc3RyaWRlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLlRhbmdlbnRLaW5kOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHggPSBzdWJtZXNoLnZlcnRpY2VzU3RhcnQ7IHggPCBzdWJtZXNoLnZlcnRpY2VzU3RhcnQgKyBzdWJtZXNoLnZlcnRpY2VzQ291bnQ7IHggPSB4ICsgMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggPSB4ICogc3RyaWRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHZlcnRleERhdGEgYXMgVmVjdG9yNFtdKS5wdXNoKFZlY3RvcjQuRnJvbUFycmF5KG1lc2hBdHRyaWJ1dGVBcnJheSwgaW5kZXgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh2ZXJ0ZXhEYXRhIGFzIFZlY3RvcjRbXSkucHVzaChWZWN0b3I0LkZyb21BcnJheShtZXNoQXR0cmlidXRlQXJyYXksIGluZGV4ICsgMiAqIHN0cmlkZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHZlcnRleERhdGEgYXMgVmVjdG9yNFtdKS5wdXNoKFZlY3RvcjQuRnJvbUFycmF5KG1lc2hBdHRyaWJ1dGVBcnJheSwgaW5kZXggKyBzdHJpZGUpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuQ29sb3JLaW5kOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNpemUgPSB2ZXJ0ZXhCdWZmZXIuZ2V0U2l6ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB4ID0gc3VibWVzaC52ZXJ0aWNlc1N0YXJ0OyB4IDwgc3VibWVzaC52ZXJ0aWNlc1N0YXJ0ICsgc3VibWVzaC52ZXJ0aWNlc0NvdW50OyB4ID0geCArIHNpemUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ID0geCAqIHN0cmlkZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaXplID09PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHZlcnRleERhdGEgYXMgVmVjdG9yNFtdKS5wdXNoKFZlY3RvcjQuRnJvbUFycmF5KG1lc2hBdHRyaWJ1dGVBcnJheSwgaW5kZXgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodmVydGV4RGF0YSBhcyBWZWN0b3I0W10pLnB1c2goVmVjdG9yNC5Gcm9tQXJyYXkobWVzaEF0dHJpYnV0ZUFycmF5LCBpbmRleCArIDIgKiBzdHJpZGUpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodmVydGV4RGF0YSBhcyBWZWN0b3I0W10pLnB1c2goVmVjdG9yNC5Gcm9tQXJyYXkobWVzaEF0dHJpYnV0ZUFycmF5LCBpbmRleCArIHN0cmlkZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodmVydGV4RGF0YSBhcyBWZWN0b3IzW10pLnB1c2goVmVjdG9yMy5Gcm9tQXJyYXkobWVzaEF0dHJpYnV0ZUFycmF5LCBpbmRleCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh2ZXJ0ZXhEYXRhIGFzIFZlY3RvcjNbXSkucHVzaChWZWN0b3IzLkZyb21BcnJheShtZXNoQXR0cmlidXRlQXJyYXksIGluZGV4ICsgMiAqIHN0cmlkZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh2ZXJ0ZXhEYXRhIGFzIFZlY3RvcjNbXSkucHVzaChWZWN0b3IzLkZyb21BcnJheShtZXNoQXR0cmlidXRlQXJyYXksIGluZGV4ICsgc3RyaWRlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLlVWS2luZDpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5VVjJLaW5kOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHggPSBzdWJtZXNoLnZlcnRpY2VzU3RhcnQ7IHggPCBzdWJtZXNoLnZlcnRpY2VzU3RhcnQgKyBzdWJtZXNoLnZlcnRpY2VzQ291bnQ7IHggPSB4ICsgMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggPSB4ICogc3RyaWRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHZlcnRleERhdGEgYXMgVmVjdG9yMltdKS5wdXNoKFZlY3RvcjIuRnJvbUFycmF5KG1lc2hBdHRyaWJ1dGVBcnJheSwgaW5kZXgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh2ZXJ0ZXhEYXRhIGFzIFZlY3RvcjJbXSkucHVzaChWZWN0b3IyLkZyb21BcnJheShtZXNoQXR0cmlidXRlQXJyYXksIGluZGV4ICsgMiAqIHN0cmlkZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHZlcnRleERhdGEgYXMgVmVjdG9yMltdKS5wdXNoKFZlY3RvcjIuRnJvbUFycmF5KG1lc2hBdHRyaWJ1dGVBcnJheSwgaW5kZXggKyBzdHJpZGUpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBUb29scy5FcnJvcihgVW5zdXBwb3J0ZWQgVmVydGV4IEJ1ZmZlciB0eXBlOiAke3ZlcnRleEJ1ZmZlcktpbmR9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fd3JpdGVWZXJ0ZXhBdHRyaWJ1dGVEYXRhKHZlcnRleERhdGEsIGJ5dGVPZmZzZXQsIHZlcnRleEJ1ZmZlcktpbmQsIGJpbmFyeVdyaXRlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBUb29scy5XYXJuKGByZW9yZGVyVHJpYW5nbGVGaWxsTW9kZTogVmVydGV4IEJ1ZmZlciBLaW5kICR7dmVydGV4QnVmZmVyS2luZH0gbm90IHByZXNlbnQhYCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVvcmRlcnMgdGhlIHZlcnRleCBhdHRyaWJ1dGVzIGluIHRoZSBjb3JyZWN0IHRyaWFuZ2xlIHN0cmlwIG9yZGVyLiAgVGhpcyBpcyBuZWNlc3Nhcnkgd2hlbiBpbmRpY2VzIGFyZSBub3QgYXZhaWxhYmxlIGFuZCB0aGUgd2luZGluZyBvcmRlciBpc1xyXG4gICAgICogY2xvY2std2lzZSBkdXJpbmcgZXhwb3J0IHRvIGdsVEZcclxuICAgICAqIEBwYXJhbSBzdWJtZXNoIEJhYnlsb25KUyBzdWJtZXNoXHJcbiAgICAgKiBAcGFyYW0gdmVydGV4QnVmZmVyS2luZCBUaGUgdHlwZSBvZiB2ZXJ0ZXggYXR0cmlidXRlXHJcbiAgICAgKiBAcGFyYW0gbWVzaEF0dHJpYnV0ZUFycmF5IFRoZSB2ZXJ0ZXggYXR0cmlidXRlIGRhdGFcclxuICAgICAqIEBwYXJhbSBieXRlT2Zmc2V0IFRoZSBvZmZzZXQgdG8gdGhlIGJpbmFyeSBkYXRhXHJcbiAgICAgKiBAcGFyYW0gYmluYXJ5V3JpdGVyIFRoZSBiaW5hcnkgZGF0YSBmb3IgdGhlIGdsVEYgZmlsZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9yZW9yZGVyVHJpYW5nbGVTdHJpcERyYXdNb2RlKHN1Ym1lc2g6IFN1Yk1lc2gsIHZlcnRleEJ1ZmZlcktpbmQ6IHN0cmluZywgbWVzaEF0dHJpYnV0ZUFycmF5OiBGbG9hdEFycmF5LCBieXRlT2Zmc2V0OiBudW1iZXIsIGJpbmFyeVdyaXRlcjogX0JpbmFyeVdyaXRlcikge1xyXG4gICAgICAgIGNvbnN0IHZlcnRleEJ1ZmZlciA9IHRoaXMuX2dldFZlcnRleEJ1ZmZlckZyb21NZXNoKHZlcnRleEJ1ZmZlcktpbmQsIHN1Ym1lc2guZ2V0TWVzaCgpIGFzIE1lc2gpO1xyXG4gICAgICAgIGlmICh2ZXJ0ZXhCdWZmZXIpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3RyaWRlID0gdmVydGV4QnVmZmVyLmJ5dGVTdHJpZGUgLyBWZXJ0ZXhCdWZmZXIuR2V0VHlwZUJ5dGVMZW5ndGgodmVydGV4QnVmZmVyLnR5cGUpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdmVydGV4RGF0YTogVmVjdG9yMltdIHwgVmVjdG9yM1tdIHwgVmVjdG9yNFtdID0gW107XHJcbiAgICAgICAgICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodmVydGV4QnVmZmVyS2luZCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuUG9zaXRpb25LaW5kOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuTm9ybWFsS2luZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID0gc3VibWVzaC52ZXJ0aWNlc1N0YXJ0O1xyXG4gICAgICAgICAgICAgICAgICAgICh2ZXJ0ZXhEYXRhIGFzIFZlY3RvcjNbXSkucHVzaChWZWN0b3IzLkZyb21BcnJheShtZXNoQXR0cmlidXRlQXJyYXksIGluZGV4ICsgMiAqIHN0cmlkZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICh2ZXJ0ZXhEYXRhIGFzIFZlY3RvcjNbXSkucHVzaChWZWN0b3IzLkZyb21BcnJheShtZXNoQXR0cmlidXRlQXJyYXksIGluZGV4ICsgc3RyaWRlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5UYW5nZW50S2luZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHggPSBzdWJtZXNoLnZlcnRpY2VzU3RhcnQgKyBzdWJtZXNoLnZlcnRpY2VzQ291bnQgLSAxOyB4ID49IHN1Ym1lc2gudmVydGljZXNTdGFydDsgLS14KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ID0geCAqIHN0cmlkZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHZlcnRleERhdGEgYXMgVmVjdG9yNFtdKS5wdXNoKFZlY3RvcjQuRnJvbUFycmF5KG1lc2hBdHRyaWJ1dGVBcnJheSwgaW5kZXgpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5Db2xvcktpbmQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB4ID0gc3VibWVzaC52ZXJ0aWNlc1N0YXJ0ICsgc3VibWVzaC52ZXJ0aWNlc0NvdW50IC0gMTsgeCA+PSBzdWJtZXNoLnZlcnRpY2VzU3RhcnQ7IC0teCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleCA9IHggKiBzdHJpZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRleEJ1ZmZlci5nZXRTaXplKCkgPT09IDRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gKHZlcnRleERhdGEgYXMgVmVjdG9yNFtdKS5wdXNoKFZlY3RvcjQuRnJvbUFycmF5KG1lc2hBdHRyaWJ1dGVBcnJheSwgaW5kZXgpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAodmVydGV4RGF0YSBhcyBWZWN0b3IzW10pLnB1c2goVmVjdG9yMy5Gcm9tQXJyYXkobWVzaEF0dHJpYnV0ZUFycmF5LCBpbmRleCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLlVWS2luZDpcclxuICAgICAgICAgICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLlVWMktpbmQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB4ID0gc3VibWVzaC52ZXJ0aWNlc1N0YXJ0ICsgc3VibWVzaC52ZXJ0aWNlc0NvdW50IC0gMTsgeCA+PSBzdWJtZXNoLnZlcnRpY2VzU3RhcnQ7IC0teCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleCA9IHggKiBzdHJpZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh2ZXJ0ZXhEYXRhIGFzIFZlY3RvcjJbXSkucHVzaChWZWN0b3IyLkZyb21BcnJheShtZXNoQXR0cmlidXRlQXJyYXksIGluZGV4KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICAgICAgICAgIFRvb2xzLkVycm9yKGBVbnN1cHBvcnRlZCBWZXJ0ZXggQnVmZmVyIHR5cGU6ICR7dmVydGV4QnVmZmVyS2luZH1gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl93cml0ZVZlcnRleEF0dHJpYnV0ZURhdGEodmVydGV4RGF0YSwgYnl0ZU9mZnNldCArIDEyLCB2ZXJ0ZXhCdWZmZXJLaW5kLCBiaW5hcnlXcml0ZXIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIFRvb2xzLldhcm4oYHJlb3JkZXJUcmlhbmdsZVN0cmlwRHJhd01vZGU6IFZlcnRleCBidWZmZXIga2luZCAke3ZlcnRleEJ1ZmZlcktpbmR9IG5vdCBwcmVzZW50IWApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlb3JkZXJzIHRoZSB2ZXJ0ZXggYXR0cmlidXRlcyBpbiB0aGUgY29ycmVjdCB0cmlhbmdsZSBmYW4gb3JkZXIuICBUaGlzIGlzIG5lY2Vzc2FyeSB3aGVuIGluZGljZXMgYXJlIG5vdCBhdmFpbGFibGUgYW5kIHRoZSB3aW5kaW5nIG9yZGVyIGlzXHJcbiAgICAgKiBjbG9jay13aXNlIGR1cmluZyBleHBvcnQgdG8gZ2xURlxyXG4gICAgICogQHBhcmFtIHN1Ym1lc2ggQmFieWxvbkpTIHN1Ym1lc2hcclxuICAgICAqIEBwYXJhbSB2ZXJ0ZXhCdWZmZXJLaW5kIFRoZSB0eXBlIG9mIHZlcnRleCBhdHRyaWJ1dGVcclxuICAgICAqIEBwYXJhbSBtZXNoQXR0cmlidXRlQXJyYXkgVGhlIHZlcnRleCBhdHRyaWJ1dGUgZGF0YVxyXG4gICAgICogQHBhcmFtIGJ5dGVPZmZzZXQgVGhlIG9mZnNldCB0byB0aGUgYmluYXJ5IGRhdGFcclxuICAgICAqIEBwYXJhbSBiaW5hcnlXcml0ZXIgVGhlIGJpbmFyeSBkYXRhIGZvciB0aGUgZ2xURiBmaWxlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX3Jlb3JkZXJUcmlhbmdsZUZhbk1vZGUoc3VibWVzaDogU3ViTWVzaCwgdmVydGV4QnVmZmVyS2luZDogc3RyaW5nLCBtZXNoQXR0cmlidXRlQXJyYXk6IEZsb2F0QXJyYXksIGJ5dGVPZmZzZXQ6IG51bWJlciwgYmluYXJ5V3JpdGVyOiBfQmluYXJ5V3JpdGVyKSB7XHJcbiAgICAgICAgY29uc3QgdmVydGV4QnVmZmVyID0gdGhpcy5fZ2V0VmVydGV4QnVmZmVyRnJvbU1lc2godmVydGV4QnVmZmVyS2luZCwgc3VibWVzaC5nZXRNZXNoKCkgYXMgTWVzaCk7XHJcbiAgICAgICAgaWYgKHZlcnRleEJ1ZmZlcikge1xyXG4gICAgICAgICAgICBjb25zdCBzdHJpZGUgPSB2ZXJ0ZXhCdWZmZXIuYnl0ZVN0cmlkZSAvIFZlcnRleEJ1ZmZlci5HZXRUeXBlQnl0ZUxlbmd0aCh2ZXJ0ZXhCdWZmZXIudHlwZSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB2ZXJ0ZXhEYXRhOiBWZWN0b3IyW10gfCBWZWN0b3IzW10gfCBWZWN0b3I0W10gPSBbXTtcclxuICAgICAgICAgICAgbGV0IGluZGV4ID0gMDtcclxuICAgICAgICAgICAgc3dpdGNoICh2ZXJ0ZXhCdWZmZXJLaW5kKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5Qb3NpdGlvbktpbmQ6XHJcbiAgICAgICAgICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5Ob3JtYWxLaW5kOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgeCA9IHN1Ym1lc2gudmVydGljZXNTdGFydCArIHN1Ym1lc2gudmVydGljZXNDb3VudCAtIDE7IHggPj0gc3VibWVzaC52ZXJ0aWNlc1N0YXJ0OyAtLXgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggPSB4ICogc3RyaWRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAodmVydGV4RGF0YSBhcyBWZWN0b3IzW10pLnB1c2goVmVjdG9yMy5Gcm9tQXJyYXkobWVzaEF0dHJpYnV0ZUFycmF5LCBpbmRleCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLlRhbmdlbnRLaW5kOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgeCA9IHN1Ym1lc2gudmVydGljZXNTdGFydCArIHN1Ym1lc2gudmVydGljZXNDb3VudCAtIDE7IHggPj0gc3VibWVzaC52ZXJ0aWNlc1N0YXJ0OyAtLXgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggPSB4ICogc3RyaWRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAodmVydGV4RGF0YSBhcyBWZWN0b3I0W10pLnB1c2goVmVjdG9yNC5Gcm9tQXJyYXkobWVzaEF0dHJpYnV0ZUFycmF5LCBpbmRleCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLkNvbG9yS2luZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHggPSBzdWJtZXNoLnZlcnRpY2VzU3RhcnQgKyBzdWJtZXNoLnZlcnRpY2VzQ291bnQgLSAxOyB4ID49IHN1Ym1lc2gudmVydGljZXNTdGFydDsgLS14KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ID0geCAqIHN0cmlkZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHZlcnRleERhdGEgYXMgVmVjdG9yNFtdKS5wdXNoKFZlY3RvcjQuRnJvbUFycmF5KG1lc2hBdHRyaWJ1dGVBcnJheSwgaW5kZXgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGV4QnVmZmVyLmdldFNpemUoKSA9PT0gNFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAodmVydGV4RGF0YSBhcyBWZWN0b3I0W10pLnB1c2goVmVjdG9yNC5Gcm9tQXJyYXkobWVzaEF0dHJpYnV0ZUFycmF5LCBpbmRleCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICh2ZXJ0ZXhEYXRhIGFzIFZlY3RvcjNbXSkucHVzaChWZWN0b3IzLkZyb21BcnJheShtZXNoQXR0cmlidXRlQXJyYXksIGluZGV4KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuVVZLaW5kOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuVVYyS2luZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHggPSBzdWJtZXNoLnZlcnRpY2VzU3RhcnQgKyBzdWJtZXNoLnZlcnRpY2VzQ291bnQgLSAxOyB4ID49IHN1Ym1lc2gudmVydGljZXNTdGFydDsgLS14KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ID0geCAqIHN0cmlkZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHZlcnRleERhdGEgYXMgVmVjdG9yMltdKS5wdXNoKFZlY3RvcjIuRnJvbUFycmF5KG1lc2hBdHRyaWJ1dGVBcnJheSwgaW5kZXgpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgVG9vbHMuRXJyb3IoYFVuc3VwcG9ydGVkIFZlcnRleCBCdWZmZXIgdHlwZTogJHt2ZXJ0ZXhCdWZmZXJLaW5kfWApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX3dyaXRlVmVydGV4QXR0cmlidXRlRGF0YSh2ZXJ0ZXhEYXRhLCBieXRlT2Zmc2V0LCB2ZXJ0ZXhCdWZmZXJLaW5kLCBiaW5hcnlXcml0ZXIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIFRvb2xzLldhcm4oYHJlb3JkZXJUcmlhbmdsZUZhbk1vZGU6IFZlcnRleCBidWZmZXIga2luZCAke3ZlcnRleEJ1ZmZlcktpbmR9IG5vdCBwcmVzZW50IWApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFdyaXRlcyB0aGUgdmVydGV4IGF0dHJpYnV0ZSBkYXRhIHRvIGJpbmFyeVxyXG4gICAgICogQHBhcmFtIHZlcnRpY2VzIFRoZSB2ZXJ0aWNlcyB0byB3cml0ZSB0byB0aGUgYmluYXJ5IHdyaXRlclxyXG4gICAgICogQHBhcmFtIGJ5dGVPZmZzZXQgVGhlIG9mZnNldCBpbnRvIHRoZSBiaW5hcnkgd3JpdGVyIHRvIG92ZXJ3cml0ZSBiaW5hcnkgZGF0YVxyXG4gICAgICogQHBhcmFtIHZlcnRleEF0dHJpYnV0ZUtpbmQgVGhlIHZlcnRleCBhdHRyaWJ1dGUgdHlwZVxyXG4gICAgICogQHBhcmFtIGJpbmFyeVdyaXRlciBUaGUgd3JpdGVyIGNvbnRhaW5pbmcgdGhlIGJpbmFyeSBkYXRhXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX3dyaXRlVmVydGV4QXR0cmlidXRlRGF0YSh2ZXJ0aWNlczogVmVjdG9yMltdIHwgVmVjdG9yM1tdIHwgVmVjdG9yNFtdLCBieXRlT2Zmc2V0OiBudW1iZXIsIHZlcnRleEF0dHJpYnV0ZUtpbmQ6IHN0cmluZywgYmluYXJ5V3JpdGVyOiBfQmluYXJ5V3JpdGVyKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCB2ZXJ0ZXggb2YgdmVydGljZXMpIHtcclxuICAgICAgICAgICAgaWYgKHZlcnRleEF0dHJpYnV0ZUtpbmQgPT09IFZlcnRleEJ1ZmZlci5Ob3JtYWxLaW5kKSB7XHJcbiAgICAgICAgICAgICAgICB2ZXJ0ZXgubm9ybWFsaXplKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmVydGV4QXR0cmlidXRlS2luZCA9PT0gVmVydGV4QnVmZmVyLlRhbmdlbnRLaW5kICYmIHZlcnRleCBpbnN0YW5jZW9mIFZlY3RvcjQpIHtcclxuICAgICAgICAgICAgICAgIF9HTFRGVXRpbGl0aWVzLl9Ob3JtYWxpemVUYW5nZW50RnJvbVJlZih2ZXJ0ZXgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNvbXBvbmVudCBvZiB2ZXJ0ZXguYXNBcnJheSgpKSB7XHJcbiAgICAgICAgICAgICAgICBiaW5hcnlXcml0ZXIuc2V0RmxvYXQzMihjb21wb25lbnQsIGJ5dGVPZmZzZXQpO1xyXG4gICAgICAgICAgICAgICAgYnl0ZU9mZnNldCArPSA0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogV3JpdGVzIG1lc2ggYXR0cmlidXRlIGRhdGEgdG8gYSBkYXRhIGJ1ZmZlclxyXG4gICAgICogUmV0dXJucyB0aGUgYnl0ZWxlbmd0aCBvZiB0aGUgZGF0YVxyXG4gICAgICogQHBhcmFtIHZlcnRleEJ1ZmZlcktpbmQgSW5kaWNhdGVzIHdoYXQga2luZCBvZiB2ZXJ0ZXggZGF0YSBpcyBiZWluZyBwYXNzZWQgaW5cclxuICAgICAqIEBwYXJhbSBhdHRyaWJ1dGVDb21wb25lbnRLaW5kXHJcbiAgICAgKiBAcGFyYW0gbWVzaEF0dHJpYnV0ZUFycmF5IEFycmF5IGNvbnRhaW5pbmcgdGhlIGF0dHJpYnV0ZSBkYXRhXHJcbiAgICAgKiBAcGFyYW0gc3RyaWRlIFNwZWNpZmllcyB0aGUgc3BhY2UgYmV0d2VlbiBkYXRhXHJcbiAgICAgKiBAcGFyYW0gYmluYXJ5V3JpdGVyIFRoZSBidWZmZXIgdG8gd3JpdGUgdGhlIGJpbmFyeSBkYXRhIHRvXHJcbiAgICAgKiBAcGFyYW0gYmFieWxvblRyYW5zZm9ybU5vZGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIF93cml0ZUF0dHJpYnV0ZURhdGEoXHJcbiAgICAgICAgdmVydGV4QnVmZmVyS2luZDogc3RyaW5nLFxyXG4gICAgICAgIGF0dHJpYnV0ZUNvbXBvbmVudEtpbmQ6IEFjY2Vzc29yQ29tcG9uZW50VHlwZSxcclxuICAgICAgICBtZXNoQXR0cmlidXRlQXJyYXk6IEZsb2F0QXJyYXksXHJcbiAgICAgICAgc3RyaWRlOiBudW1iZXIsXHJcbiAgICAgICAgYmluYXJ5V3JpdGVyOiBfQmluYXJ5V3JpdGVyLFxyXG4gICAgICAgIGJhYnlsb25UcmFuc2Zvcm1Ob2RlOiBUcmFuc2Zvcm1Ob2RlXHJcbiAgICApIHtcclxuICAgICAgICBsZXQgdmVydGV4QXR0cmlidXRlczogbnVtYmVyW11bXSA9IFtdO1xyXG4gICAgICAgIGxldCBpbmRleDogbnVtYmVyO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHZlcnRleEJ1ZmZlcktpbmQpIHtcclxuICAgICAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuUG9zaXRpb25LaW5kOiB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMCwgbGVuZ3RoID0gbWVzaEF0dHJpYnV0ZUFycmF5Lmxlbmd0aCAvIHN0cmlkZTsgayA8IGxlbmd0aDsgKytrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXggPSBrICogc3RyaWRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZlcnRleERhdGEgPSBWZWN0b3IzLkZyb21BcnJheShtZXNoQXR0cmlidXRlQXJyYXksIGluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICB2ZXJ0ZXhBdHRyaWJ1dGVzLnB1c2godmVydGV4RGF0YS5hc0FycmF5KCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuTm9ybWFsS2luZDoge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgayA9IDAsIGxlbmd0aCA9IG1lc2hBdHRyaWJ1dGVBcnJheS5sZW5ndGggLyBzdHJpZGU7IGsgPCBsZW5ndGg7ICsraykge1xyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID0gayAqIHN0cmlkZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2ZXJ0ZXhEYXRhID0gVmVjdG9yMy5Gcm9tQXJyYXkobWVzaEF0dHJpYnV0ZUFycmF5LCBpbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGV4QXR0cmlidXRlcy5wdXNoKHZlcnRleERhdGEubm9ybWFsaXplKCkuYXNBcnJheSgpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLlRhbmdlbnRLaW5kOiB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMCwgbGVuZ3RoID0gbWVzaEF0dHJpYnV0ZUFycmF5Lmxlbmd0aCAvIHN0cmlkZTsgayA8IGxlbmd0aDsgKytrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXggPSBrICogc3RyaWRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZlcnRleERhdGEgPSBWZWN0b3I0LkZyb21BcnJheShtZXNoQXR0cmlidXRlQXJyYXksIGluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICBfR0xURlV0aWxpdGllcy5fTm9ybWFsaXplVGFuZ2VudEZyb21SZWYodmVydGV4RGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGV4QXR0cmlidXRlcy5wdXNoKHZlcnRleERhdGEuYXNBcnJheSgpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLkNvbG9yS2luZDoge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWVzaE1hdGVyaWFsID0gKGJhYnlsb25UcmFuc2Zvcm1Ob2RlIGFzIE1lc2gpLm1hdGVyaWFsO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29udmVydFRvTGluZWFyID0gbWVzaE1hdGVyaWFsID8gbWVzaE1hdGVyaWFsLmdldENsYXNzTmFtZSgpID09PSBcIlN0YW5kYXJkTWF0ZXJpYWxcIiA6IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2ZXJ0ZXhEYXRhOiBDb2xvcjMgfCBDb2xvcjQgPSBzdHJpZGUgPT09IDMgPyBuZXcgQ29sb3IzKCkgOiBuZXcgQ29sb3I0KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VFeGFjdFNyZ2JDb252ZXJzaW9ucyA9IHRoaXMuX2JhYnlsb25TY2VuZS5nZXRFbmdpbmUoKS51c2VFeGFjdFNyZ2JDb252ZXJzaW9ucztcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwLCBsZW5ndGggPSBtZXNoQXR0cmlidXRlQXJyYXkubGVuZ3RoIC8gc3RyaWRlOyBrIDwgbGVuZ3RoOyArK2spIHtcclxuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IGsgKiBzdHJpZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cmlkZSA9PT0gMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb2xvcjMuRnJvbUFycmF5VG9SZWYobWVzaEF0dHJpYnV0ZUFycmF5LCBpbmRleCwgdmVydGV4RGF0YSBhcyBDb2xvcjMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29udmVydFRvTGluZWFyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodmVydGV4RGF0YSBhcyBDb2xvcjMpLnRvTGluZWFyU3BhY2VUb1JlZih2ZXJ0ZXhEYXRhIGFzIENvbG9yMywgdXNlRXhhY3RTcmdiQ29udmVyc2lvbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29sb3I0LkZyb21BcnJheVRvUmVmKG1lc2hBdHRyaWJ1dGVBcnJheSwgaW5kZXgsIHZlcnRleERhdGEgYXMgQ29sb3I0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnZlcnRUb0xpbmVhcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHZlcnRleERhdGEgYXMgQ29sb3I0KS50b0xpbmVhclNwYWNlVG9SZWYodmVydGV4RGF0YSBhcyBDb2xvcjQsIHVzZUV4YWN0U3JnYkNvbnZlcnNpb25zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2ZXJ0ZXhBdHRyaWJ1dGVzLnB1c2godmVydGV4RGF0YS5hc0FycmF5KCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuVVZLaW5kOlxyXG4gICAgICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5VVjJLaW5kOiB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMCwgbGVuZ3RoID0gbWVzaEF0dHJpYnV0ZUFycmF5Lmxlbmd0aCAvIHN0cmlkZTsgayA8IGxlbmd0aDsgKytrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXggPSBrICogc3RyaWRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZlcnRleERhdGEgPSBWZWN0b3IyLkZyb21BcnJheShtZXNoQXR0cmlidXRlQXJyYXksIGluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICB2ZXJ0ZXhBdHRyaWJ1dGVzLnB1c2godmVydGV4RGF0YS5hc0FycmF5KCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuTWF0cmljZXNJbmRpY2VzS2luZDpcclxuICAgICAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuTWF0cmljZXNJbmRpY2VzRXh0cmFLaW5kOiB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMCwgbGVuZ3RoID0gbWVzaEF0dHJpYnV0ZUFycmF5Lmxlbmd0aCAvIHN0cmlkZTsgayA8IGxlbmd0aDsgKytrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXggPSBrICogc3RyaWRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZlcnRleERhdGEgPSBWZWN0b3I0LkZyb21BcnJheShtZXNoQXR0cmlidXRlQXJyYXksIGluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICB2ZXJ0ZXhBdHRyaWJ1dGVzLnB1c2godmVydGV4RGF0YS5hc0FycmF5KCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuTWF0cmljZXNXZWlnaHRzS2luZDpcclxuICAgICAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuTWF0cmljZXNXZWlnaHRzRXh0cmFLaW5kOiB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMCwgbGVuZ3RoID0gbWVzaEF0dHJpYnV0ZUFycmF5Lmxlbmd0aCAvIHN0cmlkZTsgayA8IGxlbmd0aDsgKytrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXggPSBrICogc3RyaWRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZlcnRleERhdGEgPSBWZWN0b3I0LkZyb21BcnJheShtZXNoQXR0cmlidXRlQXJyYXksIGluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICB2ZXJ0ZXhBdHRyaWJ1dGVzLnB1c2godmVydGV4RGF0YS5hc0FycmF5KCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICAgICAgVG9vbHMuV2FybihcIlVuc3VwcG9ydGVkIFZlcnRleCBCdWZmZXIgVHlwZTogXCIgKyB2ZXJ0ZXhCdWZmZXJLaW5kKTtcclxuICAgICAgICAgICAgICAgIHZlcnRleEF0dHJpYnV0ZXMgPSBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHdyaXRlQmluYXJ5RnVuYztcclxuICAgICAgICBzd2l0Y2ggKGF0dHJpYnV0ZUNvbXBvbmVudEtpbmQpIHtcclxuICAgICAgICAgICAgY2FzZSBBY2Nlc3NvckNvbXBvbmVudFR5cGUuVU5TSUdORURfQllURToge1xyXG4gICAgICAgICAgICAgICAgd3JpdGVCaW5hcnlGdW5jID0gYmluYXJ5V3JpdGVyLnNldFVJbnQ4LmJpbmQoYmluYXJ5V3JpdGVyKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgQWNjZXNzb3JDb21wb25lbnRUeXBlLlVOU0lHTkVEX1NIT1JUOiB7XHJcbiAgICAgICAgICAgICAgICB3cml0ZUJpbmFyeUZ1bmMgPSBiaW5hcnlXcml0ZXIuc2V0VUludDE2LmJpbmQoYmluYXJ5V3JpdGVyKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgQWNjZXNzb3JDb21wb25lbnRUeXBlLlVOU0lHTkVEX0lOVDoge1xyXG4gICAgICAgICAgICAgICAgd3JpdGVCaW5hcnlGdW5jID0gYmluYXJ5V3JpdGVyLnNldFVJbnQzMi5iaW5kKGJpbmFyeVdyaXRlcik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIEFjY2Vzc29yQ29tcG9uZW50VHlwZS5GTE9BVDoge1xyXG4gICAgICAgICAgICAgICAgd3JpdGVCaW5hcnlGdW5jID0gYmluYXJ5V3JpdGVyLnNldEZsb2F0MzIuYmluZChiaW5hcnlXcml0ZXIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICAgICAgVG9vbHMuV2FybihcIlVuc3VwcG9ydGVkIEF0dHJpYnV0ZSBDb21wb25lbnQga2luZDogXCIgKyBhdHRyaWJ1dGVDb21wb25lbnRLaW5kKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChjb25zdCB2ZXJ0ZXhBdHRyaWJ1dGUgb2YgdmVydGV4QXR0cmlidXRlcykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNvbXBvbmVudCBvZiB2ZXJ0ZXhBdHRyaWJ1dGUpIHtcclxuICAgICAgICAgICAgICAgIHdyaXRlQmluYXJ5RnVuYyhjb21wb25lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogV3JpdGVzIG1lc2ggYXR0cmlidXRlIGRhdGEgdG8gYSBkYXRhIGJ1ZmZlclxyXG4gICAgICogUmV0dXJucyB0aGUgYnl0ZWxlbmd0aCBvZiB0aGUgZGF0YVxyXG4gICAgICogQHBhcmFtIHZlcnRleEJ1ZmZlcktpbmQgSW5kaWNhdGVzIHdoYXQga2luZCBvZiB2ZXJ0ZXggZGF0YSBpcyBiZWluZyBwYXNzZWQgaW5cclxuICAgICAqIEBwYXJhbSBhdHRyaWJ1dGVDb21wb25lbnRLaW5kIGF0dHJpYnV0ZSBjb21wb25lbnQgdHlwZVxyXG4gICAgICogQHBhcmFtIG1lc2hQcmltaXRpdmUgdGhlIG1lc2ggcHJpbWl0aXZlXHJcbiAgICAgKiBAcGFyYW0gbWVzaEF0dHJpYnV0ZUFycmF5IEFycmF5IGNvbnRhaW5pbmcgdGhlIGF0dHJpYnV0ZSBkYXRhXHJcbiAgICAgKiBAcGFyYW0gbW9ycGhUYXJnZXRBdHRyaWJ1dGVBcnJheVxyXG4gICAgICogQHBhcmFtIHN0cmlkZSBTcGVjaWZpZXMgdGhlIHNwYWNlIGJldHdlZW4gZGF0YVxyXG4gICAgICogQHBhcmFtIGJpbmFyeVdyaXRlciBUaGUgYnVmZmVyIHRvIHdyaXRlIHRoZSBiaW5hcnkgZGF0YSB0b1xyXG4gICAgICogQHBhcmFtIG1pbk1heFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgd3JpdGVNb3JwaFRhcmdldEF0dHJpYnV0ZURhdGEoXHJcbiAgICAgICAgdmVydGV4QnVmZmVyS2luZDogc3RyaW5nLFxyXG4gICAgICAgIGF0dHJpYnV0ZUNvbXBvbmVudEtpbmQ6IEFjY2Vzc29yQ29tcG9uZW50VHlwZSxcclxuICAgICAgICBtZXNoUHJpbWl0aXZlOiBTdWJNZXNoLFxyXG4gICAgICAgIG1lc2hBdHRyaWJ1dGVBcnJheTogRmxvYXRBcnJheSxcclxuICAgICAgICBtb3JwaFRhcmdldEF0dHJpYnV0ZUFycmF5OiBGbG9hdEFycmF5LFxyXG4gICAgICAgIHN0cmlkZTogbnVtYmVyLFxyXG4gICAgICAgIGJpbmFyeVdyaXRlcjogX0JpbmFyeVdyaXRlcixcclxuICAgICAgICBtaW5NYXg/OiBhbnlcclxuICAgICkge1xyXG4gICAgICAgIGxldCB2ZXJ0ZXhBdHRyaWJ1dGVzOiBudW1iZXJbXVtdID0gW107XHJcbiAgICAgICAgbGV0IGluZGV4OiBudW1iZXI7XHJcbiAgICAgICAgbGV0IGRpZmZlcmVuY2U6IFZlY3RvcjMgPSBuZXcgVmVjdG9yMygpO1xyXG4gICAgICAgIGxldCBkaWZmZXJlbmNlNDogVmVjdG9yNCA9IG5ldyBWZWN0b3I0KDAsIDAsIDAsIDApO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHZlcnRleEJ1ZmZlcktpbmQpIHtcclxuICAgICAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuUG9zaXRpb25LaW5kOiB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gbWVzaFByaW1pdGl2ZS52ZXJ0aWNlc1N0YXJ0OyBrIDwgbWVzaFByaW1pdGl2ZS52ZXJ0aWNlc0NvdW50OyArK2spIHtcclxuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IG1lc2hQcmltaXRpdmUuaW5kZXhTdGFydCArIGsgKiBzdHJpZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmVydGV4RGF0YSA9IFZlY3RvcjMuRnJvbUFycmF5KG1lc2hBdHRyaWJ1dGVBcnJheSwgaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vcnBoRGF0YSA9IFZlY3RvcjMuRnJvbUFycmF5KG1vcnBoVGFyZ2V0QXR0cmlidXRlQXJyYXksIGluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICBkaWZmZXJlbmNlID0gbW9ycGhEYXRhLnN1YnRyYWN0VG9SZWYodmVydGV4RGF0YSwgZGlmZmVyZW5jZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1pbk1heCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5NYXgubWluLmNvcHlGcm9tRmxvYXRzKE1hdGgubWluKGRpZmZlcmVuY2UueCwgbWluTWF4Lm1pbi54KSwgTWF0aC5taW4oZGlmZmVyZW5jZS55LCBtaW5NYXgubWluLnkpLCBNYXRoLm1pbihkaWZmZXJlbmNlLnosIG1pbk1heC5taW4ueikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5NYXgubWF4LmNvcHlGcm9tRmxvYXRzKE1hdGgubWF4KGRpZmZlcmVuY2UueCwgbWluTWF4Lm1heC54KSwgTWF0aC5tYXgoZGlmZmVyZW5jZS55LCBtaW5NYXgubWF4LnkpLCBNYXRoLm1heChkaWZmZXJlbmNlLnosIG1pbk1heC5tYXgueikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2ZXJ0ZXhBdHRyaWJ1dGVzLnB1c2goZGlmZmVyZW5jZS5hc0FycmF5KCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuTm9ybWFsS2luZDoge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgayA9IG1lc2hQcmltaXRpdmUudmVydGljZXNTdGFydDsgayA8IG1lc2hQcmltaXRpdmUudmVydGljZXNDb3VudDsgKytrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXggPSBtZXNoUHJpbWl0aXZlLmluZGV4U3RhcnQgKyBrICogc3RyaWRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZlcnRleERhdGEgPSBWZWN0b3IzLkZyb21BcnJheShtZXNoQXR0cmlidXRlQXJyYXksIGluZGV4KS5ub3JtYWxpemUoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtb3JwaERhdGEgPSBWZWN0b3IzLkZyb21BcnJheShtb3JwaFRhcmdldEF0dHJpYnV0ZUFycmF5LCBpbmRleCkubm9ybWFsaXplKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlmZmVyZW5jZSA9IG1vcnBoRGF0YS5zdWJ0cmFjdFRvUmVmKHZlcnRleERhdGEsIGRpZmZlcmVuY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRleEF0dHJpYnV0ZXMucHVzaChkaWZmZXJlbmNlLmFzQXJyYXkoKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5UYW5nZW50S2luZDoge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgayA9IG1lc2hQcmltaXRpdmUudmVydGljZXNTdGFydDsgayA8IG1lc2hQcmltaXRpdmUudmVydGljZXNDb3VudDsgKytrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXggPSBtZXNoUHJpbWl0aXZlLmluZGV4U3RhcnQgKyBrICogKHN0cmlkZSArIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZlcnRleERhdGEgPSBWZWN0b3I0LkZyb21BcnJheShtZXNoQXR0cmlidXRlQXJyYXksIGluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICBfR0xURlV0aWxpdGllcy5fTm9ybWFsaXplVGFuZ2VudEZyb21SZWYodmVydGV4RGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9ycGhEYXRhID0gVmVjdG9yNC5Gcm9tQXJyYXkobW9ycGhUYXJnZXRBdHRyaWJ1dGVBcnJheSwgaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF9HTFRGVXRpbGl0aWVzLl9Ob3JtYWxpemVUYW5nZW50RnJvbVJlZihtb3JwaERhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpZmZlcmVuY2U0ID0gbW9ycGhEYXRhLnN1YnRyYWN0VG9SZWYodmVydGV4RGF0YSwgZGlmZmVyZW5jZTQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRleEF0dHJpYnV0ZXMucHVzaChbZGlmZmVyZW5jZTQueCwgZGlmZmVyZW5jZTQueSwgZGlmZmVyZW5jZTQuel0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICAgICAgVG9vbHMuV2FybihcIlVuc3VwcG9ydGVkIFZlcnRleCBCdWZmZXIgVHlwZTogXCIgKyB2ZXJ0ZXhCdWZmZXJLaW5kKTtcclxuICAgICAgICAgICAgICAgIHZlcnRleEF0dHJpYnV0ZXMgPSBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHdyaXRlQmluYXJ5RnVuYztcclxuICAgICAgICBzd2l0Y2ggKGF0dHJpYnV0ZUNvbXBvbmVudEtpbmQpIHtcclxuICAgICAgICAgICAgY2FzZSBBY2Nlc3NvckNvbXBvbmVudFR5cGUuVU5TSUdORURfQllURToge1xyXG4gICAgICAgICAgICAgICAgd3JpdGVCaW5hcnlGdW5jID0gYmluYXJ5V3JpdGVyLnNldFVJbnQ4LmJpbmQoYmluYXJ5V3JpdGVyKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgQWNjZXNzb3JDb21wb25lbnRUeXBlLlVOU0lHTkVEX1NIT1JUOiB7XHJcbiAgICAgICAgICAgICAgICB3cml0ZUJpbmFyeUZ1bmMgPSBiaW5hcnlXcml0ZXIuc2V0VUludDE2LmJpbmQoYmluYXJ5V3JpdGVyKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgQWNjZXNzb3JDb21wb25lbnRUeXBlLlVOU0lHTkVEX0lOVDoge1xyXG4gICAgICAgICAgICAgICAgd3JpdGVCaW5hcnlGdW5jID0gYmluYXJ5V3JpdGVyLnNldFVJbnQzMi5iaW5kKGJpbmFyeVdyaXRlcik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIEFjY2Vzc29yQ29tcG9uZW50VHlwZS5GTE9BVDoge1xyXG4gICAgICAgICAgICAgICAgd3JpdGVCaW5hcnlGdW5jID0gYmluYXJ5V3JpdGVyLnNldEZsb2F0MzIuYmluZChiaW5hcnlXcml0ZXIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICAgICAgVG9vbHMuV2FybihcIlVuc3VwcG9ydGVkIEF0dHJpYnV0ZSBDb21wb25lbnQga2luZDogXCIgKyBhdHRyaWJ1dGVDb21wb25lbnRLaW5kKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChjb25zdCB2ZXJ0ZXhBdHRyaWJ1dGUgb2YgdmVydGV4QXR0cmlidXRlcykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNvbXBvbmVudCBvZiB2ZXJ0ZXhBdHRyaWJ1dGUpIHtcclxuICAgICAgICAgICAgICAgIHdyaXRlQmluYXJ5RnVuYyhjb21wb25lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2VuZXJhdGVzIGdsVEYganNvbiBkYXRhXHJcbiAgICAgKiBAcGFyYW0gc2hvdWxkVXNlR2xiIEluZGljYXRlcyB3aGV0aGVyIHRoZSBqc29uIHNob3VsZCBiZSB3cml0dGVuIGZvciBhIGdsYiBmaWxlXHJcbiAgICAgKiBAcGFyYW0gZ2xURlByZWZpeCBUZXh0IHRvIHVzZSB3aGVuIHByZWZpeGluZyBhIGdsVEYgZmlsZVxyXG4gICAgICogQHBhcmFtIHByZXR0eVByaW50IEluZGljYXRlcyB3aGV0aGVyIHRoZSBqc29uIGZpbGUgc2hvdWxkIGJlIHByZXR0eSBwcmludGVkICh0cnVlKSBvciBub3QgKGZhbHNlKVxyXG4gICAgICogQHJldHVybnMganNvbiBkYXRhIGFzIHN0cmluZ1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9nZW5lcmF0ZUpTT04oc2hvdWxkVXNlR2xiOiBib29sZWFuLCBnbFRGUHJlZml4Pzogc3RyaW5nLCBwcmV0dHlQcmludD86IGJvb2xlYW4pOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IGJ1ZmZlcjogSUJ1ZmZlciA9IHsgYnl0ZUxlbmd0aDogdGhpcy5fdG90YWxCeXRlTGVuZ3RoIH07XHJcbiAgICAgICAgbGV0IGltYWdlTmFtZTogc3RyaW5nO1xyXG4gICAgICAgIGxldCBpbWFnZURhdGE6IHsgZGF0YTogQXJyYXlCdWZmZXI7IG1pbWVUeXBlOiBJbWFnZU1pbWVUeXBlIH07XHJcbiAgICAgICAgbGV0IGJ1ZmZlclZpZXc6IElCdWZmZXJWaWV3O1xyXG4gICAgICAgIGxldCBieXRlT2Zmc2V0OiBudW1iZXIgPSB0aGlzLl90b3RhbEJ5dGVMZW5ndGg7XHJcblxyXG4gICAgICAgIGlmIChidWZmZXIuYnl0ZUxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLl9nbFRGLmJ1ZmZlcnMgPSBbYnVmZmVyXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX25vZGVzICYmIHRoaXMuX25vZGVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLl9nbFRGLm5vZGVzID0gdGhpcy5fbm9kZXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9tZXNoZXMgJiYgdGhpcy5fbWVzaGVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLl9nbFRGLm1lc2hlcyA9IHRoaXMuX21lc2hlcztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX3NjZW5lcyAmJiB0aGlzLl9zY2VuZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2dsVEYuc2NlbmVzID0gdGhpcy5fc2NlbmVzO1xyXG4gICAgICAgICAgICB0aGlzLl9nbFRGLnNjZW5lID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX2NhbWVyYXMgJiYgdGhpcy5fY2FtZXJhcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5fZ2xURi5jYW1lcmFzID0gdGhpcy5fY2FtZXJhcztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX2J1ZmZlclZpZXdzICYmIHRoaXMuX2J1ZmZlclZpZXdzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLl9nbFRGLmJ1ZmZlclZpZXdzID0gdGhpcy5fYnVmZmVyVmlld3M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9hY2Nlc3NvcnMgJiYgdGhpcy5fYWNjZXNzb3JzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLl9nbFRGLmFjY2Vzc29ycyA9IHRoaXMuX2FjY2Vzc29ycztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX2FuaW1hdGlvbnMgJiYgdGhpcy5fYW5pbWF0aW9ucy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5fZ2xURi5hbmltYXRpb25zID0gdGhpcy5fYW5pbWF0aW9ucztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX21hdGVyaWFscyAmJiB0aGlzLl9tYXRlcmlhbHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2dsVEYubWF0ZXJpYWxzID0gdGhpcy5fbWF0ZXJpYWxzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fdGV4dHVyZXMgJiYgdGhpcy5fdGV4dHVyZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2dsVEYudGV4dHVyZXMgPSB0aGlzLl90ZXh0dXJlcztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX3NhbXBsZXJzICYmIHRoaXMuX3NhbXBsZXJzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLl9nbFRGLnNhbXBsZXJzID0gdGhpcy5fc2FtcGxlcnM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9za2lucyAmJiB0aGlzLl9za2lucy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5fZ2xURi5za2lucyA9IHRoaXMuX3NraW5zO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5faW1hZ2VzICYmIHRoaXMuX2ltYWdlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgaWYgKCFzaG91bGRVc2VHbGIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2dsVEYuaW1hZ2VzID0gdGhpcy5faW1hZ2VzO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZ2xURi5pbWFnZXMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pbWFnZXMuZm9yRWFjaCgoaW1hZ2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW1hZ2UudXJpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlRGF0YSA9IHRoaXMuX2ltYWdlRGF0YVtpbWFnZS51cmldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9vcmRlcmVkSW1hZ2VEYXRhLnB1c2goaW1hZ2VEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VOYW1lID0gaW1hZ2UudXJpLnNwbGl0KFwiLlwiKVswXSArIFwiIGltYWdlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlclZpZXcgPSBfR0xURlV0aWxpdGllcy5fQ3JlYXRlQnVmZmVyVmlldygwLCBieXRlT2Zmc2V0LCBpbWFnZURhdGEuZGF0YS5ieXRlTGVuZ3RoLCB1bmRlZmluZWQsIGltYWdlTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ5dGVPZmZzZXQgKz0gaW1hZ2VEYXRhLmRhdGEuYnl0ZUxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fYnVmZmVyVmlld3MucHVzaChidWZmZXJWaWV3KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2UuYnVmZmVyVmlldyA9IHRoaXMuX2J1ZmZlclZpZXdzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlLm5hbWUgPSBpbWFnZU5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlLm1pbWVUeXBlID0gaW1hZ2VEYXRhLm1pbWVUeXBlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZS51cmkgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5fZ2xURi5pbWFnZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2dsVEYuaW1hZ2VzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZ2xURi5pbWFnZXMucHVzaChpbWFnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAvLyBSZXBsYWNlIHVyaSB3aXRoIGJ1ZmZlcnZpZXcgYW5kIG1pbWUgdHlwZSBmb3IgZ2xiXHJcbiAgICAgICAgICAgICAgICBidWZmZXIuYnl0ZUxlbmd0aCA9IGJ5dGVPZmZzZXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghc2hvdWxkVXNlR2xiKSB7XHJcbiAgICAgICAgICAgIGJ1ZmZlci51cmkgPSBnbFRGUHJlZml4ICsgXCIuYmluXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBqc29uVGV4dCA9IHByZXR0eVByaW50ID8gSlNPTi5zdHJpbmdpZnkodGhpcy5fZ2xURiwgbnVsbCwgMikgOiBKU09OLnN0cmluZ2lmeSh0aGlzLl9nbFRGKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGpzb25UZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2VuZXJhdGVzIGRhdGEgZm9yIC5nbHRmIGFuZCAuYmluIGZpbGVzIGJhc2VkIG9uIHRoZSBnbFRGIHByZWZpeCBzdHJpbmdcclxuICAgICAqIEBwYXJhbSBnbFRGUHJlZml4IFRleHQgdG8gdXNlIHdoZW4gcHJlZml4aW5nIGEgZ2xURiBmaWxlXHJcbiAgICAgKiBAcGFyYW0gZGlzcG9zZSBEaXNwb3NlIHRoZSBleHBvcnRlclxyXG4gICAgICogQHJldHVybnMgR0xURkRhdGEgd2l0aCBnbFRGIGZpbGUgZGF0YVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgX2dlbmVyYXRlR0xURkFzeW5jKGdsVEZQcmVmaXg6IHN0cmluZywgZGlzcG9zZSA9IHRydWUpOiBQcm9taXNlPEdMVEZEYXRhPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dlbmVyYXRlQmluYXJ5QXN5bmMoKS50aGVuKChiaW5hcnlCdWZmZXIpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fZXh0ZW5zaW9uc09uRXhwb3J0aW5nKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGpzb25UZXh0ID0gdGhpcy5fZ2VuZXJhdGVKU09OKGZhbHNlLCBnbFRGUHJlZml4LCB0cnVlKTtcclxuICAgICAgICAgICAgY29uc3QgYmluID0gbmV3IEJsb2IoW2JpbmFyeUJ1ZmZlcl0sIHsgdHlwZTogXCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIiB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGdsVEZGaWxlTmFtZSA9IGdsVEZQcmVmaXggKyBcIi5nbHRmXCI7XHJcbiAgICAgICAgICAgIGNvbnN0IGdsVEZCaW5GaWxlID0gZ2xURlByZWZpeCArIFwiLmJpblwiO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gbmV3IEdMVEZEYXRhKCk7XHJcblxyXG4gICAgICAgICAgICBjb250YWluZXIuZ2xURkZpbGVzW2dsVEZGaWxlTmFtZV0gPSBqc29uVGV4dDtcclxuICAgICAgICAgICAgY29udGFpbmVyLmdsVEZGaWxlc1tnbFRGQmluRmlsZV0gPSBiaW47XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5faW1hZ2VEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGltYWdlIGluIHRoaXMuX2ltYWdlRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5nbFRGRmlsZXNbaW1hZ2VdID0gbmV3IEJsb2IoW3RoaXMuX2ltYWdlRGF0YVtpbWFnZV0uZGF0YV0sIHsgdHlwZTogdGhpcy5faW1hZ2VEYXRhW2ltYWdlXS5taW1lVHlwZSB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGRpc3Bvc2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gY29udGFpbmVyO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIGJpbmFyeSBidWZmZXIgZm9yIGdsVEZcclxuICAgICAqIEByZXR1cm5zIGFycmF5IGJ1ZmZlciBmb3IgYmluYXJ5IGRhdGFcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfZ2VuZXJhdGVCaW5hcnlBc3luYygpOiBQcm9taXNlPEFycmF5QnVmZmVyPiB7XHJcbiAgICAgICAgY29uc3QgYmluYXJ5V3JpdGVyID0gbmV3IF9CaW5hcnlXcml0ZXIoNCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NyZWF0ZVNjZW5lQXN5bmMoYmluYXJ5V3JpdGVyKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2xvY2FsRW5naW5lKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2NhbEVuZ2luZS5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGJpbmFyeVdyaXRlci5nZXRBcnJheUJ1ZmZlcigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUGFkcyB0aGUgbnVtYmVyIHRvIGEgbXVsdGlwbGUgb2YgNFxyXG4gICAgICogQHBhcmFtIG51bSBudW1iZXIgdG8gcGFkXHJcbiAgICAgKiBAcmV0dXJucyBwYWRkZWQgbnVtYmVyXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX2dldFBhZGRpbmcobnVtOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IHJlbWFpbmRlciA9IG51bSAlIDQ7XHJcbiAgICAgICAgY29uc3QgcGFkZGluZyA9IHJlbWFpbmRlciA9PT0gMCA/IHJlbWFpbmRlciA6IDQgLSByZW1haW5kZXI7XHJcblxyXG4gICAgICAgIHJldHVybiBwYWRkaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfZ2VuZXJhdGVHTEJBc3luYyhnbFRGUHJlZml4OiBzdHJpbmcsIGRpc3Bvc2UgPSB0cnVlKTogUHJvbWlzZTxHTFRGRGF0YT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZW5lcmF0ZUJpbmFyeUFzeW5jKCkudGhlbigoYmluYXJ5QnVmZmVyKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2V4dGVuc2lvbnNPbkV4cG9ydGluZygpO1xyXG4gICAgICAgICAgICBjb25zdCBqc29uVGV4dCA9IHRoaXMuX2dlbmVyYXRlSlNPTih0cnVlKTtcclxuICAgICAgICAgICAgY29uc3QgZ2xiRmlsZU5hbWUgPSBnbFRGUHJlZml4ICsgXCIuZ2xiXCI7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlckxlbmd0aCA9IDEyO1xyXG4gICAgICAgICAgICBjb25zdCBjaHVua0xlbmd0aFByZWZpeCA9IDg7XHJcbiAgICAgICAgICAgIGxldCBqc29uTGVuZ3RoID0ganNvblRleHQubGVuZ3RoO1xyXG4gICAgICAgICAgICBsZXQgZW5jb2RlZEpzb25UZXh0O1xyXG4gICAgICAgICAgICBsZXQgaW1hZ2VCeXRlTGVuZ3RoID0gMDtcclxuICAgICAgICAgICAgLy8gbWFrZSB1c2Ugb2YgVGV4dEVuY29kZXIgd2hlbiBhdmFpbGFibGVcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBUZXh0RW5jb2RlciAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZW5jb2RlciA9IG5ldyBUZXh0RW5jb2RlcigpO1xyXG4gICAgICAgICAgICAgICAgZW5jb2RlZEpzb25UZXh0ID0gZW5jb2Rlci5lbmNvZGUoanNvblRleHQpO1xyXG4gICAgICAgICAgICAgICAganNvbkxlbmd0aCA9IGVuY29kZWRKc29uVGV4dC5sZW5ndGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9vcmRlcmVkSW1hZ2VEYXRhLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICBpbWFnZUJ5dGVMZW5ndGggKz0gdGhpcy5fb3JkZXJlZEltYWdlRGF0YVtpXS5kYXRhLmJ5dGVMZW5ndGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QganNvblBhZGRpbmcgPSB0aGlzLl9nZXRQYWRkaW5nKGpzb25MZW5ndGgpO1xyXG4gICAgICAgICAgICBjb25zdCBiaW5QYWRkaW5nID0gdGhpcy5fZ2V0UGFkZGluZyhiaW5hcnlCdWZmZXIuYnl0ZUxlbmd0aCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGltYWdlUGFkZGluZyA9IHRoaXMuX2dldFBhZGRpbmcoaW1hZ2VCeXRlTGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGJ5dGVMZW5ndGggPSBoZWFkZXJMZW5ndGggKyAyICogY2h1bmtMZW5ndGhQcmVmaXggKyBqc29uTGVuZ3RoICsganNvblBhZGRpbmcgKyBiaW5hcnlCdWZmZXIuYnl0ZUxlbmd0aCArIGJpblBhZGRpbmcgKyBpbWFnZUJ5dGVMZW5ndGggKyBpbWFnZVBhZGRpbmc7XHJcblxyXG4gICAgICAgICAgICAvL2hlYWRlclxyXG4gICAgICAgICAgICBjb25zdCBoZWFkZXJCdWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoaGVhZGVyTGVuZ3RoKTtcclxuICAgICAgICAgICAgY29uc3QgaGVhZGVyQnVmZmVyVmlldyA9IG5ldyBEYXRhVmlldyhoZWFkZXJCdWZmZXIpO1xyXG4gICAgICAgICAgICBoZWFkZXJCdWZmZXJWaWV3LnNldFVpbnQzMigwLCAweDQ2NTQ2YzY3LCB0cnVlKTsgLy9nbFRGXHJcbiAgICAgICAgICAgIGhlYWRlckJ1ZmZlclZpZXcuc2V0VWludDMyKDQsIDIsIHRydWUpOyAvLyB2ZXJzaW9uXHJcbiAgICAgICAgICAgIGhlYWRlckJ1ZmZlclZpZXcuc2V0VWludDMyKDgsIGJ5dGVMZW5ndGgsIHRydWUpOyAvLyB0b3RhbCBieXRlcyBpbiBmaWxlXHJcblxyXG4gICAgICAgICAgICAvL2pzb24gY2h1bmtcclxuICAgICAgICAgICAgY29uc3QganNvbkNodW5rQnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKGNodW5rTGVuZ3RoUHJlZml4ICsganNvbkxlbmd0aCArIGpzb25QYWRkaW5nKTtcclxuICAgICAgICAgICAgY29uc3QganNvbkNodW5rQnVmZmVyVmlldyA9IG5ldyBEYXRhVmlldyhqc29uQ2h1bmtCdWZmZXIpO1xyXG4gICAgICAgICAgICBqc29uQ2h1bmtCdWZmZXJWaWV3LnNldFVpbnQzMigwLCBqc29uTGVuZ3RoICsganNvblBhZGRpbmcsIHRydWUpO1xyXG4gICAgICAgICAgICBqc29uQ2h1bmtCdWZmZXJWaWV3LnNldFVpbnQzMig0LCAweDRlNGY1MzRhLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgIC8vanNvbiBjaHVuayBieXRlc1xyXG4gICAgICAgICAgICBjb25zdCBqc29uRGF0YSA9IG5ldyBVaW50OEFycmF5KGpzb25DaHVua0J1ZmZlciwgY2h1bmtMZW5ndGhQcmVmaXgpO1xyXG4gICAgICAgICAgICAvLyBpZiBUZXh0RW5jb2RlciB3YXMgYXZhaWxhYmxlLCB3ZSBjYW4gc2ltcGx5IGNvcHkgdGhlIGVuY29kZWQgYXJyYXlcclxuICAgICAgICAgICAgaWYgKGVuY29kZWRKc29uVGV4dCkge1xyXG4gICAgICAgICAgICAgICAganNvbkRhdGEuc2V0KGVuY29kZWRKc29uVGV4dCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBibGFua0NoYXJDb2RlID0gXCJfXCIuY2hhckNvZGVBdCgwKTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwganNvbkxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hhckNvZGUgPSBqc29uVGV4dC5jaGFyQ29kZUF0KGkpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBjaGFyYWN0ZXIgZG9lc24ndCBmaXQgaW50byBhIHNpbmdsZSBVVEYtMTYgY29kZSB1bml0LCBqdXN0IHB1dCBhIGJsYW5rIGNoYXJhY3RlclxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGFyQ29kZSAhPSBqc29uVGV4dC5jb2RlUG9pbnRBdChpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqc29uRGF0YVtpXSA9IGJsYW5rQ2hhckNvZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAganNvbkRhdGFbaV0gPSBjaGFyQ29kZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vanNvbiBwYWRkaW5nXHJcbiAgICAgICAgICAgIGNvbnN0IGpzb25QYWRkaW5nVmlldyA9IG5ldyBVaW50OEFycmF5KGpzb25DaHVua0J1ZmZlciwgY2h1bmtMZW5ndGhQcmVmaXggKyBqc29uTGVuZ3RoKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBqc29uUGFkZGluZzsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICBqc29uUGFkZGluZ1ZpZXdbaV0gPSAweDIwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL2JpbmFyeSBjaHVua1xyXG4gICAgICAgICAgICBjb25zdCBiaW5hcnlDaHVua0J1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcihjaHVua0xlbmd0aFByZWZpeCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGJpbmFyeUNodW5rQnVmZmVyVmlldyA9IG5ldyBEYXRhVmlldyhiaW5hcnlDaHVua0J1ZmZlcik7XHJcbiAgICAgICAgICAgIGJpbmFyeUNodW5rQnVmZmVyVmlldy5zZXRVaW50MzIoMCwgYmluYXJ5QnVmZmVyLmJ5dGVMZW5ndGggKyBpbWFnZUJ5dGVMZW5ndGggKyBpbWFnZVBhZGRpbmcsIHRydWUpO1xyXG4gICAgICAgICAgICBiaW5hcnlDaHVua0J1ZmZlclZpZXcuc2V0VWludDMyKDQsIDB4MDA0ZTQ5NDIsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgLy8gYmluYXJ5IHBhZGRpbmdcclxuICAgICAgICAgICAgY29uc3QgYmluUGFkZGluZ0J1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcihiaW5QYWRkaW5nKTtcclxuICAgICAgICAgICAgY29uc3QgYmluUGFkZGluZ1ZpZXcgPSBuZXcgVWludDhBcnJheShiaW5QYWRkaW5nQnVmZmVyKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiaW5QYWRkaW5nOyArK2kpIHtcclxuICAgICAgICAgICAgICAgIGJpblBhZGRpbmdWaWV3W2ldID0gMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgaW1hZ2VQYWRkaW5nQnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKGltYWdlUGFkZGluZyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGltYWdlUGFkZGluZ1ZpZXcgPSBuZXcgVWludDhBcnJheShpbWFnZVBhZGRpbmdCdWZmZXIpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGltYWdlUGFkZGluZzsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICBpbWFnZVBhZGRpbmdWaWV3W2ldID0gMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgZ2xiRGF0YSA9IFtoZWFkZXJCdWZmZXIsIGpzb25DaHVua0J1ZmZlciwgYmluYXJ5Q2h1bmtCdWZmZXIsIGJpbmFyeUJ1ZmZlcl07XHJcblxyXG4gICAgICAgICAgICAvLyBiaW5hcnkgZGF0YVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX29yZGVyZWRJbWFnZURhdGEubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgICAgIGdsYkRhdGEucHVzaCh0aGlzLl9vcmRlcmVkSW1hZ2VEYXRhW2ldLmRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBnbGJEYXRhLnB1c2goYmluUGFkZGluZ0J1ZmZlcik7XHJcblxyXG4gICAgICAgICAgICBnbGJEYXRhLnB1c2goaW1hZ2VQYWRkaW5nQnVmZmVyKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGdsYkZpbGUgPSBuZXcgQmxvYihnbGJEYXRhLCB7IHR5cGU6IFwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCIgfSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBuZXcgR0xURkRhdGEoKTtcclxuICAgICAgICAgICAgY29udGFpbmVyLmdsVEZGaWxlc1tnbGJGaWxlTmFtZV0gPSBnbGJGaWxlO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2xvY2FsRW5naW5lICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvY2FsRW5naW5lLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGRpc3Bvc2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gY29udGFpbmVyO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgVFJTIGZvciBlYWNoIG5vZGVcclxuICAgICAqIEBwYXJhbSBub2RlIGdsVEYgTm9kZSBmb3Igc3RvcmluZyB0aGUgdHJhbnNmb3JtYXRpb24gZGF0YVxyXG4gICAgICogQHBhcmFtIGJhYnlsb25UcmFuc2Zvcm1Ob2RlIEJhYnlsb24gbWVzaCB1c2VkIGFzIHRoZSBzb3VyY2UgZm9yIHRoZSB0cmFuc2Zvcm1hdGlvbiBkYXRhXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX3NldE5vZGVUcmFuc2Zvcm1hdGlvbihub2RlOiBJTm9kZSwgYmFieWxvblRyYW5zZm9ybU5vZGU6IFRyYW5zZm9ybU5vZGUpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIWJhYnlsb25UcmFuc2Zvcm1Ob2RlLmdldFBpdm90UG9pbnQoKS5lcXVhbHNUb0Zsb2F0cygwLCAwLCAwKSkge1xyXG4gICAgICAgICAgICBUb29scy5XYXJuKFwiUGl2b3QgcG9pbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluIHRoZSBnbFRGIHNlcmlhbGl6ZXJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghYmFieWxvblRyYW5zZm9ybU5vZGUucG9zaXRpb24uZXF1YWxzVG9GbG9hdHMoMCwgMCwgMCkpIHtcclxuICAgICAgICAgICAgbm9kZS50cmFuc2xhdGlvbiA9IGJhYnlsb25UcmFuc2Zvcm1Ob2RlLnBvc2l0aW9uLmFzQXJyYXkoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghYmFieWxvblRyYW5zZm9ybU5vZGUuc2NhbGluZy5lcXVhbHNUb0Zsb2F0cygxLCAxLCAxKSkge1xyXG4gICAgICAgICAgICBub2RlLnNjYWxlID0gYmFieWxvblRyYW5zZm9ybU5vZGUuc2NhbGluZy5hc0FycmF5KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCByb3RhdGlvblF1YXRlcm5pb24gPSBRdWF0ZXJuaW9uLkZyb21FdWxlckFuZ2xlcyhiYWJ5bG9uVHJhbnNmb3JtTm9kZS5yb3RhdGlvbi54LCBiYWJ5bG9uVHJhbnNmb3JtTm9kZS5yb3RhdGlvbi55LCBiYWJ5bG9uVHJhbnNmb3JtTm9kZS5yb3RhdGlvbi56KTtcclxuICAgICAgICBpZiAoYmFieWxvblRyYW5zZm9ybU5vZGUucm90YXRpb25RdWF0ZXJuaW9uKSB7XHJcbiAgICAgICAgICAgIHJvdGF0aW9uUXVhdGVybmlvbi5tdWx0aXBseUluUGxhY2UoYmFieWxvblRyYW5zZm9ybU5vZGUucm90YXRpb25RdWF0ZXJuaW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFRdWF0ZXJuaW9uLklzSWRlbnRpdHkocm90YXRpb25RdWF0ZXJuaW9uKSkge1xyXG4gICAgICAgICAgICBub2RlLnJvdGF0aW9uID0gcm90YXRpb25RdWF0ZXJuaW9uLm5vcm1hbGl6ZSgpLmFzQXJyYXkoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfc2V0Q2FtZXJhVHJhbnNmb3JtYXRpb24obm9kZTogSU5vZGUsIGJhYnlsb25DYW1lcmE6IENhbWVyYSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHRyYW5zbGF0aW9uID0gVG1wVmVjdG9ycy5WZWN0b3IzWzBdO1xyXG4gICAgICAgIGNvbnN0IHJvdGF0aW9uID0gVG1wVmVjdG9ycy5RdWF0ZXJuaW9uWzBdO1xyXG4gICAgICAgIGJhYnlsb25DYW1lcmEuZ2V0V29ybGRNYXRyaXgoKS5kZWNvbXBvc2UodW5kZWZpbmVkLCByb3RhdGlvbiwgdHJhbnNsYXRpb24pO1xyXG5cclxuICAgICAgICBpZiAoIXRyYW5zbGF0aW9uLmVxdWFsc1RvRmxvYXRzKDAsIDAsIDApKSB7XHJcbiAgICAgICAgICAgIG5vZGUudHJhbnNsYXRpb24gPSB0cmFuc2xhdGlvbi5hc0FycmF5KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAvLyBSb3RhdGlvbiBieSAxODAgYXMgZ2xURiBoYXMgYSBkaWZmZXJlbnQgY29udmVudGlvbiB0aGFuIEJhYnlsb24uXHJcbiAgICAgICAgcm90YXRpb24ubXVsdGlwbHlJblBsYWNlKHJvdGF0aW9uMTgwWSk7XHJcblxyXG4gICAgICAgIGlmICghUXVhdGVybmlvbi5Jc0lkZW50aXR5KHJvdGF0aW9uKSkge1xyXG4gICAgICAgICAgICBub2RlLnJvdGF0aW9uID0gcm90YXRpb24uYXNBcnJheSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9nZXRWZXJ0ZXhCdWZmZXJGcm9tTWVzaChhdHRyaWJ1dGVLaW5kOiBzdHJpbmcsIGJ1ZmZlck1lc2g6IE1lc2gpOiBOdWxsYWJsZTxWZXJ0ZXhCdWZmZXI+IHtcclxuICAgICAgICBpZiAoYnVmZmVyTWVzaC5pc1ZlcnRpY2VzRGF0YVByZXNlbnQoYXR0cmlidXRlS2luZCwgdHJ1ZSkpIHtcclxuICAgICAgICAgICAgY29uc3QgdmVydGV4QnVmZmVyID0gYnVmZmVyTWVzaC5nZXRWZXJ0ZXhCdWZmZXIoYXR0cmlidXRlS2luZCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIGlmICh2ZXJ0ZXhCdWZmZXIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2ZXJ0ZXhCdWZmZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgYnVmZmVydmlldyBiYXNlZCBvbiB0aGUgdmVydGljZXMgdHlwZSBmb3IgdGhlIEJhYnlsb24gbWVzaFxyXG4gICAgICogQHBhcmFtIGtpbmQgSW5kaWNhdGVzIHRoZSB0eXBlIG9mIHZlcnRpY2VzIGRhdGFcclxuICAgICAqIEBwYXJhbSBhdHRyaWJ1dGVDb21wb25lbnRLaW5kIEluZGljYXRlcyB0aGUgbnVtZXJpY2FsIHR5cGUgdXNlZCB0byBzdG9yZSB0aGUgZGF0YVxyXG4gICAgICogQHBhcmFtIGJhYnlsb25UcmFuc2Zvcm1Ob2RlIFRoZSBCYWJ5bG9uIG1lc2ggdG8gZ2V0IHRoZSB2ZXJ0aWNlcyBkYXRhIGZyb21cclxuICAgICAqIEBwYXJhbSBiaW5hcnlXcml0ZXIgVGhlIGJ1ZmZlciB0byB3cml0ZSB0aGUgYnVmZmVydmlldyBkYXRhIHRvXHJcbiAgICAgKiBAcGFyYW0gYnl0ZVN0cmlkZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9jcmVhdGVCdWZmZXJWaWV3S2luZChcclxuICAgICAgICBraW5kOiBzdHJpbmcsXHJcbiAgICAgICAgYXR0cmlidXRlQ29tcG9uZW50S2luZDogQWNjZXNzb3JDb21wb25lbnRUeXBlLFxyXG4gICAgICAgIGJhYnlsb25UcmFuc2Zvcm1Ob2RlOiBUcmFuc2Zvcm1Ob2RlLFxyXG4gICAgICAgIGJpbmFyeVdyaXRlcjogX0JpbmFyeVdyaXRlcixcclxuICAgICAgICBieXRlU3RyaWRlOiBudW1iZXJcclxuICAgICkge1xyXG4gICAgICAgIGNvbnN0IGJ1ZmZlck1lc2ggPVxyXG4gICAgICAgICAgICBiYWJ5bG9uVHJhbnNmb3JtTm9kZSBpbnN0YW5jZW9mIE1lc2hcclxuICAgICAgICAgICAgICAgID8gKGJhYnlsb25UcmFuc2Zvcm1Ob2RlIGFzIE1lc2gpXHJcbiAgICAgICAgICAgICAgICA6IGJhYnlsb25UcmFuc2Zvcm1Ob2RlIGluc3RhbmNlb2YgSW5zdGFuY2VkTWVzaFxyXG4gICAgICAgICAgICAgICAgICA/IChiYWJ5bG9uVHJhbnNmb3JtTm9kZSBhcyBJbnN0YW5jZWRNZXNoKS5zb3VyY2VNZXNoXHJcbiAgICAgICAgICAgICAgICAgIDogbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKGJ1ZmZlck1lc2gpIHtcclxuICAgICAgICAgICAgY29uc3QgdmVydGV4QnVmZmVyID0gYnVmZmVyTWVzaC5nZXRWZXJ0ZXhCdWZmZXIoa2luZCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHZlcnRleERhdGEgPSBidWZmZXJNZXNoLmdldFZlcnRpY2VzRGF0YShraW5kLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodmVydGV4QnVmZmVyICYmIHZlcnRleERhdGEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHR5cGVCeXRlTGVuZ3RoID0gVmVydGV4QnVmZmVyLkdldFR5cGVCeXRlTGVuZ3RoKGF0dHJpYnV0ZUNvbXBvbmVudEtpbmQpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYnl0ZUxlbmd0aCA9IHZlcnRleERhdGEubGVuZ3RoICogdHlwZUJ5dGVMZW5ndGg7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBidWZmZXJWaWV3ID0gX0dMVEZVdGlsaXRpZXMuX0NyZWF0ZUJ1ZmZlclZpZXcoMCwgYmluYXJ5V3JpdGVyLmdldEJ5dGVPZmZzZXQoKSwgYnl0ZUxlbmd0aCwgYnl0ZVN0cmlkZSwga2luZCArIFwiIC0gXCIgKyBidWZmZXJNZXNoLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYnVmZmVyVmlld3MucHVzaChidWZmZXJWaWV3KTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl93cml0ZUF0dHJpYnV0ZURhdGEoa2luZCwgYXR0cmlidXRlQ29tcG9uZW50S2luZCwgdmVydGV4RGF0YSwgYnl0ZVN0cmlkZSAvIHR5cGVCeXRlTGVuZ3RoLCBiaW5hcnlXcml0ZXIsIGJhYnlsb25UcmFuc2Zvcm1Ob2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBidWZmZXJ2aWV3IGJhc2VkIG9uIHRoZSB2ZXJ0aWNlcyB0eXBlIGZvciB0aGUgQmFieWxvbiBtZXNoXHJcbiAgICAgKiBAcGFyYW0gYmFieWxvblN1Yk1lc2ggVGhlIEJhYnlsb24gc3VibWVzaCB0aGF0IHRoZSBtb3JwaCB0YXJnZXQgaXMgYXBwbGllZCB0b1xyXG4gICAgICogQHBhcmFtIG1lc2hQcmltaXRpdmVcclxuICAgICAqIEBwYXJhbSBiYWJ5bG9uTW9ycGhUYXJnZXQgdGhlIG1vcnBoIHRhcmdldCB0byBiZSBleHBvcnRlZFxyXG4gICAgICogQHBhcmFtIGJpbmFyeVdyaXRlciBUaGUgYnVmZmVyIHRvIHdyaXRlIHRoZSBidWZmZXJ2aWV3IGRhdGEgdG9cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfc2V0TW9ycGhUYXJnZXRBdHRyaWJ1dGVzKGJhYnlsb25TdWJNZXNoOiBTdWJNZXNoLCBtZXNoUHJpbWl0aXZlOiBJTWVzaFByaW1pdGl2ZSwgYmFieWxvbk1vcnBoVGFyZ2V0OiBNb3JwaFRhcmdldCwgYmluYXJ5V3JpdGVyOiBfQmluYXJ5V3JpdGVyKSB7XHJcbiAgICAgICAgaWYgKGJhYnlsb25Nb3JwaFRhcmdldCkge1xyXG4gICAgICAgICAgICBpZiAoIW1lc2hQcmltaXRpdmUudGFyZ2V0cykge1xyXG4gICAgICAgICAgICAgICAgbWVzaFByaW1pdGl2ZS50YXJnZXRzID0gW107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0OiB7IFthdHRyaWJ1dGU6IHN0cmluZ106IG51bWJlciB9ID0ge307XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc2ggPSBiYWJ5bG9uU3ViTWVzaC5nZXRNZXNoKCkgYXMgTWVzaDtcclxuICAgICAgICAgICAgaWYgKGJhYnlsb25Nb3JwaFRhcmdldC5oYXNOb3JtYWxzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2ZXJ0ZXhOb3JtYWxzID0gbWVzaC5nZXRWZXJ0aWNlc0RhdGEoVmVydGV4QnVmZmVyLk5vcm1hbEtpbmQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0cnVlKSE7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtb3JwaE5vcm1hbHMgPSBiYWJ5bG9uTW9ycGhUYXJnZXQuZ2V0Tm9ybWFscygpITtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvdW50ID0gYmFieWxvblN1Yk1lc2gudmVydGljZXNDb3VudDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJ5dGVTdHJpZGUgPSAxMjsgLy8gMyB4IDQgYnl0ZSBmbG9hdHNcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJ5dGVMZW5ndGggPSBjb3VudCAqIGJ5dGVTdHJpZGU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBidWZmZXJWaWV3ID0gX0dMVEZVdGlsaXRpZXMuX0NyZWF0ZUJ1ZmZlclZpZXcoMCwgYmluYXJ5V3JpdGVyLmdldEJ5dGVPZmZzZXQoKSwgYnl0ZUxlbmd0aCwgYnl0ZVN0cmlkZSwgYmFieWxvbk1vcnBoVGFyZ2V0Lm5hbWUgKyBcIl9OT1JNQUxcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9idWZmZXJWaWV3cy5wdXNoKGJ1ZmZlclZpZXcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGJ1ZmZlclZpZXdJbmRleCA9IHRoaXMuX2J1ZmZlclZpZXdzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhY2Nlc3NvciA9IF9HTFRGVXRpbGl0aWVzLl9DcmVhdGVBY2Nlc3NvcihcclxuICAgICAgICAgICAgICAgICAgICBidWZmZXJWaWV3SW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFieWxvbk1vcnBoVGFyZ2V0Lm5hbWUgKyBcIiAtIFwiICsgXCJOT1JNQUxcIixcclxuICAgICAgICAgICAgICAgICAgICBBY2Nlc3NvclR5cGUuVkVDMyxcclxuICAgICAgICAgICAgICAgICAgICBBY2Nlc3NvckNvbXBvbmVudFR5cGUuRkxPQVQsXHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hY2Nlc3NvcnMucHVzaChhY2Nlc3Nvcik7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQuTk9STUFMID0gdGhpcy5fYWNjZXNzb3JzLmxlbmd0aCAtIDE7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy53cml0ZU1vcnBoVGFyZ2V0QXR0cmlidXRlRGF0YShWZXJ0ZXhCdWZmZXIuTm9ybWFsS2luZCwgQWNjZXNzb3JDb21wb25lbnRUeXBlLkZMT0FULCBiYWJ5bG9uU3ViTWVzaCwgdmVydGV4Tm9ybWFscywgbW9ycGhOb3JtYWxzLCBieXRlU3RyaWRlIC8gNCwgYmluYXJ5V3JpdGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYmFieWxvbk1vcnBoVGFyZ2V0Lmhhc1Bvc2l0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmVydGV4UG9zaXRpb25zID0gbWVzaC5nZXRWZXJ0aWNlc0RhdGEoVmVydGV4QnVmZmVyLlBvc2l0aW9uS2luZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRydWUpITtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1vcnBoUG9zaXRpb25zID0gYmFieWxvbk1vcnBoVGFyZ2V0LmdldFBvc2l0aW9ucygpITtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvdW50ID0gYmFieWxvblN1Yk1lc2gudmVydGljZXNDb3VudDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJ5dGVTdHJpZGUgPSAxMjsgLy8gMyB4IDQgYnl0ZSBmbG9hdHNcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJ5dGVMZW5ndGggPSBjb3VudCAqIGJ5dGVTdHJpZGU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBidWZmZXJWaWV3ID0gX0dMVEZVdGlsaXRpZXMuX0NyZWF0ZUJ1ZmZlclZpZXcoMCwgYmluYXJ5V3JpdGVyLmdldEJ5dGVPZmZzZXQoKSwgYnl0ZUxlbmd0aCwgYnl0ZVN0cmlkZSwgYmFieWxvbk1vcnBoVGFyZ2V0Lm5hbWUgKyBcIl9QT1NJVElPTlwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2J1ZmZlclZpZXdzLnB1c2goYnVmZmVyVmlldyk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgYnVmZmVyVmlld0luZGV4ID0gdGhpcy5fYnVmZmVyVmlld3MubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1pbk1heCA9IHsgbWluOiBuZXcgVmVjdG9yMyhJbmZpbml0eSwgSW5maW5pdHksIEluZmluaXR5KSwgbWF4OiBuZXcgVmVjdG9yMygtSW5maW5pdHksIC1JbmZpbml0eSwgLUluZmluaXR5KSB9O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYWNjZXNzb3IgPSBfR0xURlV0aWxpdGllcy5fQ3JlYXRlQWNjZXNzb3IoXHJcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyVmlld0luZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgIGJhYnlsb25Nb3JwaFRhcmdldC5uYW1lICsgXCIgLSBcIiArIFwiUE9TSVRJT05cIixcclxuICAgICAgICAgICAgICAgICAgICBBY2Nlc3NvclR5cGUuVkVDMyxcclxuICAgICAgICAgICAgICAgICAgICBBY2Nlc3NvckNvbXBvbmVudFR5cGUuRkxPQVQsXHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hY2Nlc3NvcnMucHVzaChhY2Nlc3Nvcik7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQuUE9TSVRJT04gPSB0aGlzLl9hY2Nlc3NvcnMubGVuZ3RoIC0gMTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLndyaXRlTW9ycGhUYXJnZXRBdHRyaWJ1dGVEYXRhKFxyXG4gICAgICAgICAgICAgICAgICAgIFZlcnRleEJ1ZmZlci5Qb3NpdGlvbktpbmQsXHJcbiAgICAgICAgICAgICAgICAgICAgQWNjZXNzb3JDb21wb25lbnRUeXBlLkZMT0FULFxyXG4gICAgICAgICAgICAgICAgICAgIGJhYnlsb25TdWJNZXNoLFxyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRleFBvc2l0aW9ucyxcclxuICAgICAgICAgICAgICAgICAgICBtb3JwaFBvc2l0aW9ucyxcclxuICAgICAgICAgICAgICAgICAgICBieXRlU3RyaWRlIC8gNCxcclxuICAgICAgICAgICAgICAgICAgICBiaW5hcnlXcml0ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWluTWF4XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYWNjZXNzb3IubWluID0gbWluTWF4Lm1pbiEuYXNBcnJheSgpO1xyXG4gICAgICAgICAgICAgICAgYWNjZXNzb3IubWF4ID0gbWluTWF4Lm1heCEuYXNBcnJheSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChiYWJ5bG9uTW9ycGhUYXJnZXQuaGFzVGFuZ2VudHMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZlcnRleFRhbmdlbnRzID0gbWVzaC5nZXRWZXJ0aWNlc0RhdGEoVmVydGV4QnVmZmVyLlRhbmdlbnRLaW5kLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdHJ1ZSkhO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbW9ycGhUYW5nZW50cyA9IGJhYnlsb25Nb3JwaFRhcmdldC5nZXRUYW5nZW50cygpITtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvdW50ID0gYmFieWxvblN1Yk1lc2gudmVydGljZXNDb3VudDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJ5dGVTdHJpZGUgPSAxMjsgLy8gMyB4IDQgYnl0ZSBmbG9hdHNcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJ5dGVMZW5ndGggPSBjb3VudCAqIGJ5dGVTdHJpZGU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBidWZmZXJWaWV3ID0gX0dMVEZVdGlsaXRpZXMuX0NyZWF0ZUJ1ZmZlclZpZXcoMCwgYmluYXJ5V3JpdGVyLmdldEJ5dGVPZmZzZXQoKSwgYnl0ZUxlbmd0aCwgYnl0ZVN0cmlkZSwgYmFieWxvbk1vcnBoVGFyZ2V0Lm5hbWUgKyBcIl9OT1JNQUxcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9idWZmZXJWaWV3cy5wdXNoKGJ1ZmZlclZpZXcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGJ1ZmZlclZpZXdJbmRleCA9IHRoaXMuX2J1ZmZlclZpZXdzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhY2Nlc3NvciA9IF9HTFRGVXRpbGl0aWVzLl9DcmVhdGVBY2Nlc3NvcihcclxuICAgICAgICAgICAgICAgICAgICBidWZmZXJWaWV3SW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFieWxvbk1vcnBoVGFyZ2V0Lm5hbWUgKyBcIiAtIFwiICsgXCJUQU5HRU5UXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgQWNjZXNzb3JUeXBlLlZFQzMsXHJcbiAgICAgICAgICAgICAgICAgICAgQWNjZXNzb3JDb21wb25lbnRUeXBlLkZMT0FULFxyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYWNjZXNzb3JzLnB1c2goYWNjZXNzb3IpO1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LlRBTkdFTlQgPSB0aGlzLl9hY2Nlc3NvcnMubGVuZ3RoIC0gMTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLndyaXRlTW9ycGhUYXJnZXRBdHRyaWJ1dGVEYXRhKFxyXG4gICAgICAgICAgICAgICAgICAgIFZlcnRleEJ1ZmZlci5UYW5nZW50S2luZCxcclxuICAgICAgICAgICAgICAgICAgICBBY2Nlc3NvckNvbXBvbmVudFR5cGUuRkxPQVQsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFieWxvblN1Yk1lc2gsXHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGV4VGFuZ2VudHMsXHJcbiAgICAgICAgICAgICAgICAgICAgbW9ycGhUYW5nZW50cyxcclxuICAgICAgICAgICAgICAgICAgICBieXRlU3RyaWRlIC8gNCxcclxuICAgICAgICAgICAgICAgICAgICBiaW5hcnlXcml0ZXJcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbWVzaFByaW1pdGl2ZS50YXJnZXRzLnB1c2godGFyZ2V0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgcHJpbWl0aXZlIG1vZGUgb2YgdGhlIEJhYnlsb24gbWVzaFxyXG4gICAgICogQHBhcmFtIGJhYnlsb25NZXNoIFRoZSBCYWJ5bG9uSlMgbWVzaFxyXG4gICAgICogQHJldHVybnMgVW5zaWduZWQgaW50ZWdlciBvZiB0aGUgcHJpbWl0aXZlIG1vZGUgb3IgbnVsbFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9nZXRNZXNoUHJpbWl0aXZlTW9kZShiYWJ5bG9uTWVzaDogQWJzdHJhY3RNZXNoKTogbnVtYmVyIHtcclxuICAgICAgICBpZiAoYmFieWxvbk1lc2ggaW5zdGFuY2VvZiBMaW5lc01lc2gpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGVyaWFsLkxpbmVMaXN0RHJhd01vZGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChiYWJ5bG9uTWVzaCBpbnN0YW5jZW9mIEluc3RhbmNlZE1lc2ggfHwgYmFieWxvbk1lc2ggaW5zdGFuY2VvZiBNZXNoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJhc2VNZXNoID0gYmFieWxvbk1lc2ggaW5zdGFuY2VvZiBNZXNoID8gYmFieWxvbk1lc2ggOiBiYWJ5bG9uTWVzaC5zb3VyY2VNZXNoO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGJhc2VNZXNoLm92ZXJyaWRlUmVuZGVyaW5nRmlsbE1vZGUgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBiYXNlTWVzaC5vdmVycmlkZVJlbmRlcmluZ0ZpbGxNb2RlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBiYWJ5bG9uTWVzaC5tYXRlcmlhbCA/IGJhYnlsb25NZXNoLm1hdGVyaWFsLmZpbGxNb2RlIDogTWF0ZXJpYWwuVHJpYW5nbGVGaWxsTW9kZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIHByaW1pdGl2ZSBtb2RlIG9mIHRoZSBnbFRGIG1lc2ggcHJpbWl0aXZlXHJcbiAgICAgKiBAcGFyYW0gbWVzaFByaW1pdGl2ZSBnbFRGIG1lc2ggcHJpbWl0aXZlXHJcbiAgICAgKiBAcGFyYW0gcHJpbWl0aXZlTW9kZSBUaGUgcHJpbWl0aXZlIG1vZGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfc2V0UHJpbWl0aXZlTW9kZShtZXNoUHJpbWl0aXZlOiBJTWVzaFByaW1pdGl2ZSwgcHJpbWl0aXZlTW9kZTogbnVtYmVyKSB7XHJcbiAgICAgICAgc3dpdGNoIChwcmltaXRpdmVNb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgTWF0ZXJpYWwuVHJpYW5nbGVGaWxsTW9kZToge1xyXG4gICAgICAgICAgICAgICAgLy8gZ2xURiBkZWZhdWx0cyB0byB1c2luZyBUcmlhbmdsZSBNb2RlXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIE1hdGVyaWFsLlRyaWFuZ2xlU3RyaXBEcmF3TW9kZToge1xyXG4gICAgICAgICAgICAgICAgbWVzaFByaW1pdGl2ZS5tb2RlID0gTWVzaFByaW1pdGl2ZU1vZGUuVFJJQU5HTEVfU1RSSVA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIE1hdGVyaWFsLlRyaWFuZ2xlRmFuRHJhd01vZGU6IHtcclxuICAgICAgICAgICAgICAgIG1lc2hQcmltaXRpdmUubW9kZSA9IE1lc2hQcmltaXRpdmVNb2RlLlRSSUFOR0xFX0ZBTjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgTWF0ZXJpYWwuUG9pbnRMaXN0RHJhd01vZGU6IHtcclxuICAgICAgICAgICAgICAgIG1lc2hQcmltaXRpdmUubW9kZSA9IE1lc2hQcmltaXRpdmVNb2RlLlBPSU5UUztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgTWF0ZXJpYWwuUG9pbnRGaWxsTW9kZToge1xyXG4gICAgICAgICAgICAgICAgbWVzaFByaW1pdGl2ZS5tb2RlID0gTWVzaFByaW1pdGl2ZU1vZGUuUE9JTlRTO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBNYXRlcmlhbC5MaW5lTG9vcERyYXdNb2RlOiB7XHJcbiAgICAgICAgICAgICAgICBtZXNoUHJpbWl0aXZlLm1vZGUgPSBNZXNoUHJpbWl0aXZlTW9kZS5MSU5FX0xPT1A7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIE1hdGVyaWFsLkxpbmVMaXN0RHJhd01vZGU6IHtcclxuICAgICAgICAgICAgICAgIG1lc2hQcmltaXRpdmUubW9kZSA9IE1lc2hQcmltaXRpdmVNb2RlLkxJTkVTO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBNYXRlcmlhbC5MaW5lU3RyaXBEcmF3TW9kZToge1xyXG4gICAgICAgICAgICAgICAgbWVzaFByaW1pdGl2ZS5tb2RlID0gTWVzaFByaW1pdGl2ZU1vZGUuTElORV9TVFJJUDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgdmVydGV4IGF0dHJpYnV0ZSBhY2Nlc3NvciBiYXNlZCBvZiB0aGUgZ2xURiBtZXNoIHByaW1pdGl2ZVxyXG4gICAgICogQHBhcmFtIG1lc2hQcmltaXRpdmUgZ2xURiBtZXNoIHByaW1pdGl2ZVxyXG4gICAgICogQHBhcmFtIGF0dHJpYnV0ZUtpbmQgdmVydGV4IGF0dHJpYnV0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9zZXRBdHRyaWJ1dGVLaW5kKG1lc2hQcmltaXRpdmU6IElNZXNoUHJpbWl0aXZlLCBhdHRyaWJ1dGVLaW5kOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBzd2l0Y2ggKGF0dHJpYnV0ZUtpbmQpIHtcclxuICAgICAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuUG9zaXRpb25LaW5kOiB7XHJcbiAgICAgICAgICAgICAgICBtZXNoUHJpbWl0aXZlLmF0dHJpYnV0ZXMuUE9TSVRJT04gPSB0aGlzLl9hY2Nlc3NvcnMubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLk5vcm1hbEtpbmQ6IHtcclxuICAgICAgICAgICAgICAgIG1lc2hQcmltaXRpdmUuYXR0cmlidXRlcy5OT1JNQUwgPSB0aGlzLl9hY2Nlc3NvcnMubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLkNvbG9yS2luZDoge1xyXG4gICAgICAgICAgICAgICAgbWVzaFByaW1pdGl2ZS5hdHRyaWJ1dGVzLkNPTE9SXzAgPSB0aGlzLl9hY2Nlc3NvcnMubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLlRhbmdlbnRLaW5kOiB7XHJcbiAgICAgICAgICAgICAgICBtZXNoUHJpbWl0aXZlLmF0dHJpYnV0ZXMuVEFOR0VOVCA9IHRoaXMuX2FjY2Vzc29ycy5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuVVZLaW5kOiB7XHJcbiAgICAgICAgICAgICAgICBtZXNoUHJpbWl0aXZlLmF0dHJpYnV0ZXMuVEVYQ09PUkRfMCA9IHRoaXMuX2FjY2Vzc29ycy5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuVVYyS2luZDoge1xyXG4gICAgICAgICAgICAgICAgbWVzaFByaW1pdGl2ZS5hdHRyaWJ1dGVzLlRFWENPT1JEXzEgPSB0aGlzLl9hY2Nlc3NvcnMubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLk1hdHJpY2VzSW5kaWNlc0tpbmQ6IHtcclxuICAgICAgICAgICAgICAgIG1lc2hQcmltaXRpdmUuYXR0cmlidXRlcy5KT0lOVFNfMCA9IHRoaXMuX2FjY2Vzc29ycy5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuTWF0cmljZXNJbmRpY2VzRXh0cmFLaW5kOiB7XHJcbiAgICAgICAgICAgICAgICBtZXNoUHJpbWl0aXZlLmF0dHJpYnV0ZXMuSk9JTlRTXzEgPSB0aGlzLl9hY2Nlc3NvcnMubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLk1hdHJpY2VzV2VpZ2h0c0tpbmQ6IHtcclxuICAgICAgICAgICAgICAgIG1lc2hQcmltaXRpdmUuYXR0cmlidXRlcy5XRUlHSFRTXzAgPSB0aGlzLl9hY2Nlc3NvcnMubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLk1hdHJpY2VzV2VpZ2h0c0V4dHJhS2luZDoge1xyXG4gICAgICAgICAgICAgICAgbWVzaFByaW1pdGl2ZS5hdHRyaWJ1dGVzLldFSUdIVFNfMSA9IHRoaXMuX2FjY2Vzc29ycy5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICAgICAgVG9vbHMuV2FybihcIlVuc3VwcG9ydGVkIFZlcnRleCBCdWZmZXIgVHlwZTogXCIgKyBhdHRyaWJ1dGVLaW5kKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgZGF0YSBmb3IgdGhlIHByaW1pdGl2ZSBhdHRyaWJ1dGVzIG9mIGVhY2ggc3VibWVzaFxyXG4gICAgICogQHBhcmFtIG1lc2ggZ2xURiBNZXNoIG9iamVjdCB0byBzdG9yZSB0aGUgcHJpbWl0aXZlIGF0dHJpYnV0ZSBpbmZvcm1hdGlvblxyXG4gICAgICogQHBhcmFtIGJhYnlsb25UcmFuc2Zvcm1Ob2RlIEJhYnlsb24gbWVzaCB0byBnZXQgdGhlIHByaW1pdGl2ZSBhdHRyaWJ1dGUgZGF0YSBmcm9tXHJcbiAgICAgKiBAcGFyYW0gYmluYXJ5V3JpdGVyIEJ1ZmZlciB0byB3cml0ZSB0aGUgYXR0cmlidXRlIGRhdGEgdG9cclxuICAgICAqIEByZXR1cm5zIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIGRvbmUgc2V0dGluZyB0aGUgcHJpbWl0aXZlIGF0dHJpYnV0ZXNcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfc2V0UHJpbWl0aXZlQXR0cmlidXRlc0FzeW5jKG1lc2g6IElNZXNoLCBiYWJ5bG9uVHJhbnNmb3JtTm9kZTogVHJhbnNmb3JtTm9kZSwgYmluYXJ5V3JpdGVyOiBfQmluYXJ5V3JpdGVyKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZXM6IFByb21pc2U8SU1lc2hQcmltaXRpdmU+W10gPSBbXTtcclxuICAgICAgICBsZXQgYnVmZmVyTWVzaDogTnVsbGFibGU8TWVzaD4gPSBudWxsO1xyXG4gICAgICAgIGxldCBidWZmZXJWaWV3OiBJQnVmZmVyVmlldztcclxuICAgICAgICBsZXQgbWluTWF4OiB7IG1pbjogTnVsbGFibGU8bnVtYmVyW10+OyBtYXg6IE51bGxhYmxlPG51bWJlcltdPiB9O1xyXG5cclxuICAgICAgICBpZiAoYmFieWxvblRyYW5zZm9ybU5vZGUgaW5zdGFuY2VvZiBNZXNoKSB7XHJcbiAgICAgICAgICAgIGJ1ZmZlck1lc2ggPSBiYWJ5bG9uVHJhbnNmb3JtTm9kZSBhcyBNZXNoO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYmFieWxvblRyYW5zZm9ybU5vZGUgaW5zdGFuY2VvZiBJbnN0YW5jZWRNZXNoKSB7XHJcbiAgICAgICAgICAgIGJ1ZmZlck1lc2ggPSAoYmFieWxvblRyYW5zZm9ybU5vZGUgYXMgSW5zdGFuY2VkTWVzaCkuc291cmNlTWVzaDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYXR0cmlidXRlRGF0YTogX0lWZXJ0ZXhBdHRyaWJ1dGVEYXRhW10gPSBbXHJcbiAgICAgICAgICAgIHsga2luZDogVmVydGV4QnVmZmVyLlBvc2l0aW9uS2luZCwgYWNjZXNzb3JUeXBlOiBBY2Nlc3NvclR5cGUuVkVDMywgYWNjZXNzb3JDb21wb25lbnRUeXBlOiBBY2Nlc3NvckNvbXBvbmVudFR5cGUuRkxPQVQsIGJ5dGVTdHJpZGU6IDEyIH0sXHJcbiAgICAgICAgICAgIHsga2luZDogVmVydGV4QnVmZmVyLk5vcm1hbEtpbmQsIGFjY2Vzc29yVHlwZTogQWNjZXNzb3JUeXBlLlZFQzMsIGFjY2Vzc29yQ29tcG9uZW50VHlwZTogQWNjZXNzb3JDb21wb25lbnRUeXBlLkZMT0FULCBieXRlU3RyaWRlOiAxMiB9LFxyXG4gICAgICAgICAgICB7IGtpbmQ6IFZlcnRleEJ1ZmZlci5Db2xvcktpbmQsIGFjY2Vzc29yVHlwZTogQWNjZXNzb3JUeXBlLlZFQzQsIGFjY2Vzc29yQ29tcG9uZW50VHlwZTogQWNjZXNzb3JDb21wb25lbnRUeXBlLkZMT0FULCBieXRlU3RyaWRlOiAxNiB9LFxyXG4gICAgICAgICAgICB7IGtpbmQ6IFZlcnRleEJ1ZmZlci5UYW5nZW50S2luZCwgYWNjZXNzb3JUeXBlOiBBY2Nlc3NvclR5cGUuVkVDNCwgYWNjZXNzb3JDb21wb25lbnRUeXBlOiBBY2Nlc3NvckNvbXBvbmVudFR5cGUuRkxPQVQsIGJ5dGVTdHJpZGU6IDE2IH0sXHJcbiAgICAgICAgICAgIHsga2luZDogVmVydGV4QnVmZmVyLlVWS2luZCwgYWNjZXNzb3JUeXBlOiBBY2Nlc3NvclR5cGUuVkVDMiwgYWNjZXNzb3JDb21wb25lbnRUeXBlOiBBY2Nlc3NvckNvbXBvbmVudFR5cGUuRkxPQVQsIGJ5dGVTdHJpZGU6IDggfSxcclxuICAgICAgICAgICAgeyBraW5kOiBWZXJ0ZXhCdWZmZXIuVVYyS2luZCwgYWNjZXNzb3JUeXBlOiBBY2Nlc3NvclR5cGUuVkVDMiwgYWNjZXNzb3JDb21wb25lbnRUeXBlOiBBY2Nlc3NvckNvbXBvbmVudFR5cGUuRkxPQVQsIGJ5dGVTdHJpZGU6IDggfSxcclxuICAgICAgICAgICAgeyBraW5kOiBWZXJ0ZXhCdWZmZXIuTWF0cmljZXNJbmRpY2VzS2luZCwgYWNjZXNzb3JUeXBlOiBBY2Nlc3NvclR5cGUuVkVDNCwgYWNjZXNzb3JDb21wb25lbnRUeXBlOiBBY2Nlc3NvckNvbXBvbmVudFR5cGUuVU5TSUdORURfU0hPUlQsIGJ5dGVTdHJpZGU6IDggfSxcclxuICAgICAgICAgICAgeyBraW5kOiBWZXJ0ZXhCdWZmZXIuTWF0cmljZXNJbmRpY2VzRXh0cmFLaW5kLCBhY2Nlc3NvclR5cGU6IEFjY2Vzc29yVHlwZS5WRUM0LCBhY2Nlc3NvckNvbXBvbmVudFR5cGU6IEFjY2Vzc29yQ29tcG9uZW50VHlwZS5VTlNJR05FRF9TSE9SVCwgYnl0ZVN0cmlkZTogOCB9LFxyXG4gICAgICAgICAgICB7IGtpbmQ6IFZlcnRleEJ1ZmZlci5NYXRyaWNlc1dlaWdodHNLaW5kLCBhY2Nlc3NvclR5cGU6IEFjY2Vzc29yVHlwZS5WRUM0LCBhY2Nlc3NvckNvbXBvbmVudFR5cGU6IEFjY2Vzc29yQ29tcG9uZW50VHlwZS5GTE9BVCwgYnl0ZVN0cmlkZTogMTYgfSxcclxuICAgICAgICAgICAgeyBraW5kOiBWZXJ0ZXhCdWZmZXIuTWF0cmljZXNXZWlnaHRzRXh0cmFLaW5kLCBhY2Nlc3NvclR5cGU6IEFjY2Vzc29yVHlwZS5WRUM0LCBhY2Nlc3NvckNvbXBvbmVudFR5cGU6IEFjY2Vzc29yQ29tcG9uZW50VHlwZS5GTE9BVCwgYnl0ZVN0cmlkZTogMTYgfSxcclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICBpZiAoYnVmZmVyTWVzaCkge1xyXG4gICAgICAgICAgICBsZXQgaW5kZXhCdWZmZXJWaWV3SW5kZXg6IE51bGxhYmxlPG51bWJlcj4gPSBudWxsO1xyXG4gICAgICAgICAgICBjb25zdCBwcmltaXRpdmVNb2RlID0gdGhpcy5fZ2V0TWVzaFByaW1pdGl2ZU1vZGUoYnVmZmVyTWVzaCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHZlcnRleEF0dHJpYnV0ZUJ1ZmZlclZpZXdzOiB7IFthdHRyaWJ1dGVLaW5kOiBzdHJpbmddOiBudW1iZXIgfSA9IHt9O1xyXG4gICAgICAgICAgICBjb25zdCBtb3JwaFRhcmdldE1hbmFnZXIgPSBidWZmZXJNZXNoLm1vcnBoVGFyZ2V0TWFuYWdlcjtcclxuXHJcbiAgICAgICAgICAgIC8vIEZvciBlYWNoIEJhYnlsb25NZXNoLCBjcmVhdGUgYnVmZmVydmlld3MgZm9yIGVhY2ggJ2tpbmQnXHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgYXR0cmlidXRlIG9mIGF0dHJpYnV0ZURhdGEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZUtpbmQgPSBhdHRyaWJ1dGUua2luZDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZUNvbXBvbmVudEtpbmQgPSBhdHRyaWJ1dGUuYWNjZXNzb3JDb21wb25lbnRUeXBlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJ1ZmZlck1lc2guaXNWZXJ0aWNlc0RhdGFQcmVzZW50KGF0dHJpYnV0ZUtpbmQsIHRydWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmVydGV4QnVmZmVyID0gdGhpcy5fZ2V0VmVydGV4QnVmZmVyRnJvbU1lc2goYXR0cmlidXRlS2luZCwgYnVmZmVyTWVzaCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlLmJ5dGVTdHJpZGUgPSB2ZXJ0ZXhCdWZmZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyB2ZXJ0ZXhCdWZmZXIuZ2V0U2l6ZSgpICogVmVydGV4QnVmZmVyLkdldFR5cGVCeXRlTGVuZ3RoKGF0dHJpYnV0ZS5hY2Nlc3NvckNvbXBvbmVudFR5cGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogVmVydGV4QnVmZmVyLkRlZHVjZVN0cmlkZShhdHRyaWJ1dGVLaW5kKSAqIDQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZS5ieXRlU3RyaWRlID09PSAxMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGUuYWNjZXNzb3JUeXBlID0gQWNjZXNzb3JUeXBlLlZFQzM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jcmVhdGVCdWZmZXJWaWV3S2luZChhdHRyaWJ1dGVLaW5kLCBhdHRyaWJ1dGVDb21wb25lbnRLaW5kLCBiYWJ5bG9uVHJhbnNmb3JtTm9kZSwgYmluYXJ5V3JpdGVyLCBhdHRyaWJ1dGUuYnl0ZVN0cmlkZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlLmJ1ZmZlclZpZXdJbmRleCA9IHRoaXMuX2J1ZmZlclZpZXdzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGV4QXR0cmlidXRlQnVmZmVyVmlld3NbYXR0cmlidXRlS2luZF0gPSBhdHRyaWJ1dGUuYnVmZmVyVmlld0luZGV4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoYnVmZmVyTWVzaC5nZXRUb3RhbEluZGljZXMoKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5kaWNlcyA9IGJ1ZmZlck1lc2guZ2V0SW5kaWNlcygpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGluZGljZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBieXRlTGVuZ3RoID0gaW5kaWNlcy5sZW5ndGggKiA0O1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1ZmZlclZpZXcgPSBfR0xURlV0aWxpdGllcy5fQ3JlYXRlQnVmZmVyVmlldygwLCBiaW5hcnlXcml0ZXIuZ2V0Qnl0ZU9mZnNldCgpLCBieXRlTGVuZ3RoLCB1bmRlZmluZWQsIFwiSW5kaWNlcyAtIFwiICsgYnVmZmVyTWVzaC5uYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9idWZmZXJWaWV3cy5wdXNoKGJ1ZmZlclZpZXcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4QnVmZmVyVmlld0luZGV4ID0gdGhpcy5fYnVmZmVyVmlld3MubGVuZ3RoIC0gMTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgayA9IDAsIGxlbmd0aCA9IGluZGljZXMubGVuZ3RoOyBrIDwgbGVuZ3RoOyArK2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmluYXJ5V3JpdGVyLnNldFVJbnQzMihpbmRpY2VzW2tdKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChidWZmZXJNZXNoLnN1Yk1lc2hlcykge1xyXG4gICAgICAgICAgICAgICAgLy8gZ28gdGhyb3VnaCBhbGwgbWVzaCBwcmltaXRpdmVzIChzdWJtZXNoZXMpXHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHN1Ym1lc2ggb2YgYnVmZmVyTWVzaC5zdWJNZXNoZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYmFieWxvbk1hdGVyaWFsID0gc3VibWVzaC5nZXRNYXRlcmlhbCgpIHx8IGJ1ZmZlck1lc2guZ2V0U2NlbmUoKS5kZWZhdWx0TWF0ZXJpYWw7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBtYXRlcmlhbEluZGV4OiBOdWxsYWJsZTxudW1iZXI+ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChidWZmZXJNZXNoIGluc3RhbmNlb2YgTGluZXNNZXNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBnZXQgdGhlIGNvbG9yIGZyb20gdGhlIGxpbmVzIG1lc2ggYW5kIHNldCBpdCBpbiB0aGUgbWF0ZXJpYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsOiBJTWF0ZXJpYWwgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogYnVmZmVyTWVzaC5uYW1lICsgXCIgbWF0ZXJpYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWJ1ZmZlck1lc2guY29sb3IuZXF1YWxzKENvbG9yMy5XaGl0ZSgpKSB8fCBidWZmZXJNZXNoLmFscGhhIDwgMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsLnBick1ldGFsbGljUm91Z2huZXNzID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlQ29sb3JGYWN0b3I6IGJ1ZmZlck1lc2guY29sb3IuYXNBcnJheSgpLmNvbmNhdChbYnVmZmVyTWVzaC5hbHBoYV0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9tYXRlcmlhbHMucHVzaChtYXRlcmlhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRlcmlhbEluZGV4ID0gdGhpcy5fbWF0ZXJpYWxzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYmFieWxvbk1hdGVyaWFsIGluc3RhbmNlb2YgTXVsdGlNYXRlcmlhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ViTWF0ZXJpYWwgPSBiYWJ5bG9uTWF0ZXJpYWwuc3ViTWF0ZXJpYWxzW3N1Ym1lc2gubWF0ZXJpYWxJbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3ViTWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwgPSBzdWJNYXRlcmlhbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRlcmlhbEluZGV4ID0gdGhpcy5fbWF0ZXJpYWxNYXBbYmFieWxvbk1hdGVyaWFsLnVuaXF1ZUlkXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsSW5kZXggPSB0aGlzLl9tYXRlcmlhbE1hcFtiYWJ5bG9uTWF0ZXJpYWwudW5pcXVlSWRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBnbFRGTWF0ZXJpYWw6IE51bGxhYmxlPElNYXRlcmlhbD4gPSBtYXRlcmlhbEluZGV4ICE9IG51bGwgPyB0aGlzLl9tYXRlcmlhbHNbbWF0ZXJpYWxJbmRleF0gOiBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXNoUHJpbWl0aXZlOiBJTWVzaFByaW1pdGl2ZSA9IHsgYXR0cmlidXRlczoge30gfTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zZXRQcmltaXRpdmVNb2RlKG1lc2hQcmltaXRpdmUsIHByaW1pdGl2ZU1vZGUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGF0dHJpYnV0ZSBvZiBhdHRyaWJ1dGVEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZUtpbmQgPSBhdHRyaWJ1dGUua2luZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChhdHRyaWJ1dGVLaW5kID09PSBWZXJ0ZXhCdWZmZXIuVVZLaW5kIHx8IGF0dHJpYnV0ZUtpbmQgPT09IFZlcnRleEJ1ZmZlci5VVjJLaW5kKSAmJiAhdGhpcy5fb3B0aW9ucy5leHBvcnRVbnVzZWRVVnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZ2xURk1hdGVyaWFsIHx8ICF0aGlzLl9nbFRGTWF0ZXJpYWxFeHBvcnRlci5faGFzVGV4dHVyZXNQcmVzZW50KGdsVEZNYXRlcmlhbCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2ZXJ0ZXhEYXRhID0gYnVmZmVyTWVzaC5nZXRWZXJ0aWNlc0RhdGEoYXR0cmlidXRlS2luZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmVydGV4RGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmVydGV4QnVmZmVyID0gdGhpcy5fZ2V0VmVydGV4QnVmZmVyRnJvbU1lc2goYXR0cmlidXRlS2luZCwgYnVmZmVyTWVzaCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmVydGV4QnVmZmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RyaWRlID0gdmVydGV4QnVmZmVyLmdldFNpemUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBidWZmZXJWaWV3SW5kZXggPSBhdHRyaWJ1dGUuYnVmZmVyVmlld0luZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChidWZmZXJWaWV3SW5kZXggIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIHRvIHNlZSBpZiBidWZmZXJ2aWV3aW5kZXggaGFzIGEgbnVtZXJpYyB2YWx1ZSBhc3NpZ25lZC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluTWF4ID0geyBtaW46IG51bGwsIG1heDogbnVsbCB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXR0cmlidXRlS2luZCA9PSBWZXJ0ZXhCdWZmZXIuUG9zaXRpb25LaW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5NYXggPSBfR0xURlV0aWxpdGllcy5fQ2FsY3VsYXRlTWluTWF4UG9zaXRpb25zKHZlcnRleERhdGEsIDAsIHZlcnRleERhdGEubGVuZ3RoIC8gc3RyaWRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhY2Nlc3NvciA9IF9HTFRGVXRpbGl0aWVzLl9DcmVhdGVBY2Nlc3NvcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlclZpZXdJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZUtpbmQgKyBcIiAtIFwiICsgYmFieWxvblRyYW5zZm9ybU5vZGUubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZS5hY2Nlc3NvclR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGUuYWNjZXNzb3JDb21wb25lbnRUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGV4RGF0YS5sZW5ndGggLyBzdHJpZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluTWF4Lm1pbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbk1heC5tYXhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fYWNjZXNzb3JzLnB1c2goYWNjZXNzb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zZXRBdHRyaWJ1dGVLaW5kKG1lc2hQcmltaXRpdmUsIGF0dHJpYnV0ZUtpbmQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4QnVmZmVyVmlld0luZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBhY2Nlc3NvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhY2Nlc3NvciA9IF9HTFRGVXRpbGl0aWVzLl9DcmVhdGVBY2Nlc3NvcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4QnVmZmVyVmlld0luZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpbmRpY2VzIC0gXCIgKyBiYWJ5bG9uVHJhbnNmb3JtTm9kZS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQWNjZXNzb3JUeXBlLlNDQUxBUixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFjY2Vzc29yQ29tcG9uZW50VHlwZS5VTlNJR05FRF9JTlQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJtZXNoLmluZGV4Q291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJtZXNoLmluZGV4U3RhcnQgKiA0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fYWNjZXNzb3JzLnB1c2goYWNjZXNzb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNoUHJpbWl0aXZlLmluZGljZXMgPSB0aGlzLl9hY2Nlc3NvcnMubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhtZXNoUHJpbWl0aXZlLmF0dHJpYnV0ZXMpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2lkZU9yaWVudGF0aW9uID0gYnVmZmVyTWVzaC5vdmVycmlkZU1hdGVyaWFsU2lkZU9yaWVudGF0aW9uICE9PSBudWxsID8gYnVmZmVyTWVzaC5vdmVycmlkZU1hdGVyaWFsU2lkZU9yaWVudGF0aW9uIDogYmFieWxvbk1hdGVyaWFsLnNpZGVPcmllbnRhdGlvbjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaWRlT3JpZW50YXRpb24gPT09ICh0aGlzLl9iYWJ5bG9uU2NlbmUudXNlUmlnaHRIYW5kZWRTeXN0ZW0gPyBNYXRlcmlhbC5DbG9ja1dpc2VTaWRlT3JpZW50YXRpb24gOiBNYXRlcmlhbC5Db3VudGVyQ2xvY2tXaXNlU2lkZU9yaWVudGF0aW9uKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJ5dGVPZmZzZXQgPSBpbmRleEJ1ZmZlclZpZXdJbmRleCAhPSBudWxsID8gdGhpcy5fYnVmZmVyVmlld3NbaW5kZXhCdWZmZXJWaWV3SW5kZXhdLmJ5dGVPZmZzZXQgOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJ5dGVPZmZzZXQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ5dGVPZmZzZXQgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJhYnlsb25JbmRpY2VzOiBOdWxsYWJsZTxJbmRpY2VzQXJyYXk+ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleEJ1ZmZlclZpZXdJbmRleCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFieWxvbkluZGljZXMgPSBidWZmZXJNZXNoLmdldEluZGljZXMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiYWJ5bG9uSW5kaWNlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3Jlb3JkZXJJbmRpY2VzQmFzZWRPblByaW1pdGl2ZU1vZGUoc3VibWVzaCwgcHJpbWl0aXZlTW9kZSwgYmFieWxvbkluZGljZXMsIGJ5dGVPZmZzZXQsIGJpbmFyeVdyaXRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYXR0cmlidXRlIG9mIGF0dHJpYnV0ZURhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmVydGV4RGF0YSA9IGJ1ZmZlck1lc2guZ2V0VmVydGljZXNEYXRhKGF0dHJpYnV0ZS5raW5kLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2ZXJ0ZXhEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBieXRlT2Zmc2V0ID0gdGhpcy5fYnVmZmVyVmlld3NbdmVydGV4QXR0cmlidXRlQnVmZmVyVmlld3NbYXR0cmlidXRlLmtpbmRdXS5ieXRlT2Zmc2V0IHx8IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZW9yZGVyVmVydGV4QXR0cmlidXRlRGF0YUJhc2VkT25QcmltaXRpdmVNb2RlKHN1Ym1lc2gsIHByaW1pdGl2ZU1vZGUsIGF0dHJpYnV0ZS5raW5kLCB2ZXJ0ZXhEYXRhLCBieXRlT2Zmc2V0LCBiaW5hcnlXcml0ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0ZXJpYWxJbmRleCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNoUHJpbWl0aXZlLm1hdGVyaWFsID0gbWF0ZXJpYWxJbmRleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAobW9ycGhUYXJnZXRNYW5hZ2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEJ5IGNvbnZlbnRpb24sIG1vcnBoIHRhcmdldCBuYW1lcyBhcmUgc3RvcmVkIGluIHRoZSBtZXNoIGV4dHJhcy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFtZXNoLmV4dHJhcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzaC5leHRyYXMgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNoLmV4dHJhcy50YXJnZXROYW1lcyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb3JwaFRhcmdldE1hbmFnZXIubnVtVGFyZ2V0czsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBtb3JwaFRhcmdldE1hbmFnZXIuZ2V0VGFyZ2V0KGkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2V0TW9ycGhUYXJnZXRBdHRyaWJ1dGVzKHN1Ym1lc2gsIG1lc2hQcmltaXRpdmUsIHRhcmdldCwgYmluYXJ5V3JpdGVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc2guZXh0cmFzLnRhcmdldE5hbWVzLnB1c2godGFyZ2V0Lm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBtZXNoLnByaW1pdGl2ZXMucHVzaChtZXNoUHJpbWl0aXZlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXh0ZW5zaW9uc1Bvc3RFeHBvcnRNZXNoUHJpbWl0aXZlQXN5bmMoXCJwb3N0RXhwb3J0XCIsIG1lc2hQcmltaXRpdmUsIHN1Ym1lc2gsIGJpbmFyeVdyaXRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIC8qIGRvIG5vdGhpbmcgKi9cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBnbFRGIHNjZW5lIGJhc2VkIG9uIHRoZSBhcnJheSBvZiBtZXNoZXNcclxuICAgICAqIFJldHVybnMgdGhlIHRvdGFsIGJ5dGUgb2Zmc2V0XHJcbiAgICAgKiBAcGFyYW0gYmluYXJ5V3JpdGVyIEJ1ZmZlciB0byB3cml0ZSBiaW5hcnkgZGF0YSB0b1xyXG4gICAgICogQHJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBkb25lXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX2NyZWF0ZVNjZW5lQXN5bmMoYmluYXJ5V3JpdGVyOiBfQmluYXJ5V3JpdGVyKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgY29uc3Qgc2NlbmU6IElTY2VuZSA9IHsgbm9kZXM6IFtdIH07XHJcbiAgICAgICAgbGV0IGdsVEZOb2RlSW5kZXg6IG51bWJlcjtcclxuICAgICAgICBsZXQgZ2xURk5vZGU6IElOb2RlO1xyXG4gICAgICAgIGxldCBkaXJlY3REZXNjZW5kZW50czogTm9kZVtdO1xyXG4gICAgICAgIGNvbnN0IG5vZGVzOiBOb2RlW10gPSBbLi4udGhpcy5fYmFieWxvblNjZW5lLnRyYW5zZm9ybU5vZGVzLCAuLi50aGlzLl9iYWJ5bG9uU2NlbmUubWVzaGVzLCAuLi50aGlzLl9iYWJ5bG9uU2NlbmUubGlnaHRzLCAuLi50aGlzLl9iYWJ5bG9uU2NlbmUuY2FtZXJhc107XHJcbiAgICAgICAgY29uc3QgcmVtb3ZlZFJvb3ROb2RlcyA9IG5ldyBTZXQ8Tm9kZT4oKTtcclxuXHJcbiAgICAgICAgLy8gU2NlbmUgbWV0YWRhdGFcclxuICAgICAgICBpZiAodGhpcy5fYmFieWxvblNjZW5lLm1ldGFkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9vcHRpb25zLm1ldGFkYXRhU2VsZWN0b3IpIHtcclxuICAgICAgICAgICAgICAgIHNjZW5lLmV4dHJhcyA9IHRoaXMuX29wdGlvbnMubWV0YWRhdGFTZWxlY3Rvcih0aGlzLl9iYWJ5bG9uU2NlbmUubWV0YWRhdGEpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JhYnlsb25TY2VuZS5tZXRhZGF0YS5nbHRmKSB7XHJcbiAgICAgICAgICAgICAgICBzY2VuZS5leHRyYXMgPSB0aGlzLl9iYWJ5bG9uU2NlbmUubWV0YWRhdGEuZ2x0Zi5leHRyYXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFJlbW92ZSBuby1vcCByb290IG5vZGVzXHJcbiAgICAgICAgaWYgKCh0aGlzLl9vcHRpb25zLnJlbW92ZU5vb3BSb290Tm9kZXMgPz8gdHJ1ZSkgJiYgIXRoaXMuX29wdGlvbnMuaW5jbHVkZUNvb3JkaW5hdGVTeXN0ZW1Db252ZXJzaW9uTm9kZXMpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCByb290Tm9kZSBvZiB0aGlzLl9iYWJ5bG9uU2NlbmUucm9vdE5vZGVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNOb29wTm9kZShyb290Tm9kZSwgdGhpcy5fYmFieWxvblNjZW5lLnVzZVJpZ2h0SGFuZGVkU3lzdGVtKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZWRSb290Tm9kZXMuYWRkKHJvb3ROb2RlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRXhjbHVkZSB0aGUgbm9kZSBmcm9tIGxpc3Qgb2Ygbm9kZXMgdG8gZXhwb3J0XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZXMuc3BsaWNlKG5vZGVzLmluZGV4T2Yocm9vdE5vZGUpLCAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gRXhwb3J0IGJhYnlsb24gY2FtZXJhcyB0byBnbFRGQ2FtZXJhXHJcbiAgICAgICAgY29uc3QgY2FtZXJhTWFwID0gbmV3IE1hcDxDYW1lcmEsIG51bWJlcj4oKTtcclxuICAgICAgICB0aGlzLl9iYWJ5bG9uU2NlbmUuY2FtZXJhcy5mb3JFYWNoKChjYW1lcmEpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX29wdGlvbnMuc2hvdWxkRXhwb3J0Tm9kZSAmJiAhdGhpcy5fb3B0aW9ucy5zaG91bGRFeHBvcnROb2RlKGNhbWVyYSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgZ2xURkNhbWVyYTogSUNhbWVyYSA9IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IGNhbWVyYS5tb2RlID09PSBDYW1lcmEuUEVSU1BFQ1RJVkVfQ0FNRVJBID8gQ2FtZXJhVHlwZS5QRVJTUEVDVElWRSA6IENhbWVyYVR5cGUuT1JUSE9HUkFQSElDLFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgaWYgKGNhbWVyYS5uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBnbFRGQ2FtZXJhLm5hbWUgPSBjYW1lcmEubmFtZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGdsVEZDYW1lcmEudHlwZSA9PT0gQ2FtZXJhVHlwZS5QRVJTUEVDVElWRSkge1xyXG4gICAgICAgICAgICAgICAgZ2xURkNhbWVyYS5wZXJzcGVjdGl2ZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBhc3BlY3RSYXRpbzogY2FtZXJhLmdldEVuZ2luZSgpLmdldEFzcGVjdFJhdGlvKGNhbWVyYSksXHJcbiAgICAgICAgICAgICAgICAgICAgeWZvdjogY2FtZXJhLmZvdk1vZGUgPT09IENhbWVyYS5GT1ZNT0RFX1ZFUlRJQ0FMX0ZJWEVEID8gY2FtZXJhLmZvdiA6IGNhbWVyYS5mb3YgKiBjYW1lcmEuZ2V0RW5naW5lKCkuZ2V0QXNwZWN0UmF0aW8oY2FtZXJhKSxcclxuICAgICAgICAgICAgICAgICAgICB6bmVhcjogY2FtZXJhLm1pblosXHJcbiAgICAgICAgICAgICAgICAgICAgemZhcjogY2FtZXJhLm1heFosXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGdsVEZDYW1lcmEudHlwZSA9PT0gQ2FtZXJhVHlwZS5PUlRIT0dSQVBISUMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGhhbGZXaWR0aCA9IGNhbWVyYS5vcnRob0xlZnQgJiYgY2FtZXJhLm9ydGhvUmlnaHQgPyAwLjUgKiAoY2FtZXJhLm9ydGhvUmlnaHQgLSBjYW1lcmEub3J0aG9MZWZ0KSA6IGNhbWVyYS5nZXRFbmdpbmUoKS5nZXRSZW5kZXJXaWR0aCgpICogMC41O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaGFsZkhlaWdodCA9IGNhbWVyYS5vcnRob0JvdHRvbSAmJiBjYW1lcmEub3J0aG9Ub3AgPyAwLjUgKiAoY2FtZXJhLm9ydGhvVG9wIC0gY2FtZXJhLm9ydGhvQm90dG9tKSA6IGNhbWVyYS5nZXRFbmdpbmUoKS5nZXRSZW5kZXJIZWlnaHQoKSAqIDAuNTtcclxuICAgICAgICAgICAgICAgIGdsVEZDYW1lcmEub3J0aG9ncmFwaGljID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHhtYWc6IGhhbGZXaWR0aCxcclxuICAgICAgICAgICAgICAgICAgICB5bWFnOiBoYWxmSGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgIHpuZWFyOiBjYW1lcmEubWluWixcclxuICAgICAgICAgICAgICAgICAgICB6ZmFyOiBjYW1lcmEubWF4WixcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNhbWVyYU1hcC5zZXQoY2FtZXJhLCB0aGlzLl9jYW1lcmFzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2NhbWVyYXMucHVzaChnbFRGQ2FtZXJhKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgW2V4cG9ydE5vZGVzLCBleHBvcnRNYXRlcmlhbHNdID0gdGhpcy5fZ2V0RXhwb3J0Tm9kZXMobm9kZXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nbFRGTWF0ZXJpYWxFeHBvcnRlci5fY29udmVydE1hdGVyaWFsc1RvR0xURkFzeW5jKGV4cG9ydE1hdGVyaWFscywgSW1hZ2VNaW1lVHlwZS5QTkcsIHRydWUpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY3JlYXRlTm9kZU1hcEFuZEFuaW1hdGlvbnNBc3luYyhleHBvcnROb2RlcywgYmluYXJ5V3JpdGVyKS50aGVuKChub2RlTWFwKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fY3JlYXRlU2tpbnNBc3luYyhub2RlTWFwLCBiaW5hcnlXcml0ZXIpLnRoZW4oKHNraW5NYXApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ub2RlTWFwID0gbm9kZU1hcDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdG90YWxCeXRlTGVuZ3RoID0gYmluYXJ5V3JpdGVyLmdldEJ5dGVPZmZzZXQoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fdG90YWxCeXRlTGVuZ3RoID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1bmRlZmluZWQgYnl0ZSBsZW5ndGghXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQnVpbGQgSGllcmFyY2h5IHdpdGggdGhlIG5vZGUgbWFwLlxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYmFieWxvbk5vZGUgb2Ygbm9kZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2xURk5vZGVJbmRleCA9IHRoaXMuX25vZGVNYXBbYmFieWxvbk5vZGUudW5pcXVlSWRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2xURk5vZGVJbmRleCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbFRGTm9kZSA9IHRoaXMuX25vZGVzW2dsVEZOb2RlSW5kZXhdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiYWJ5bG9uTm9kZS5tZXRhZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9vcHRpb25zLm1ldGFkYXRhU2VsZWN0b3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xURk5vZGUuZXh0cmFzID0gdGhpcy5fb3B0aW9ucy5tZXRhZGF0YVNlbGVjdG9yKGJhYnlsb25Ob2RlLm1ldGFkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGJhYnlsb25Ob2RlLm1ldGFkYXRhLmdsdGYpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xURk5vZGUuZXh0cmFzID0gYmFieWxvbk5vZGUubWV0YWRhdGEuZ2x0Zi5leHRyYXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiYWJ5bG9uTm9kZSBpbnN0YW5jZW9mIENhbWVyYSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsVEZOb2RlLmNhbWVyYSA9IGNhbWVyYU1hcC5nZXQoYmFieWxvbk5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9vcHRpb25zLnNob3VsZEV4cG9ydE5vZGUgJiYgIXRoaXMuX29wdGlvbnMuc2hvdWxkRXhwb3J0Tm9kZShiYWJ5bG9uTm9kZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb29scy5Mb2coXCJPbWl0dGluZyBcIiArIGJhYnlsb25Ob2RlLm5hbWUgKyBcIiBmcm9tIHNjZW5lLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFiYWJ5bG9uTm9kZS5wYXJlbnQgJiYgIXRoaXMuX2JhYnlsb25TY2VuZS51c2VSaWdodEhhbmRlZFN5c3RlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb252ZXJ0Tm9kZUhhbmRlZG5lc3MoZ2xURk5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFiYWJ5bG9uTm9kZS5wYXJlbnQgfHwgcmVtb3ZlZFJvb3ROb2Rlcy5oYXMoYmFieWxvbk5vZGUucGFyZW50KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2VuZS5ub2Rlcy5wdXNoKGdsVEZOb2RlSW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmFieWxvbk5vZGUgaW5zdGFuY2VvZiBNZXNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJhYnlsb25Ob2RlLnNrZWxldG9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsVEZOb2RlLnNraW4gPSBza2luTWFwW2JhYnlsb25Ob2RlLnNrZWxldG9uLnVuaXF1ZUlkXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0RGVzY2VuZGVudHMgPSBiYWJ5bG9uTm9kZS5nZXREZXNjZW5kYW50cyh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZ2xURk5vZGUuY2hpbGRyZW4gJiYgZGlyZWN0RGVzY2VuZGVudHMgJiYgZGlyZWN0RGVzY2VuZGVudHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hpbGRyZW46IG51bWJlcltdID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBkZXNjZW5kZW50IG9mIGRpcmVjdERlc2NlbmRlbnRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9ub2RlTWFwW2Rlc2NlbmRlbnQudW5pcXVlSWRdICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuLnB1c2godGhpcy5fbm9kZU1hcFtkZXNjZW5kZW50LnVuaXF1ZUlkXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkcmVuLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbFRGTm9kZS5jaGlsZHJlbiA9IGNoaWxkcmVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2NlbmUubm9kZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3NjZW5lcy5wdXNoKHNjZW5lKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXR0aW5nIHRoZSBub2RlcyBhbmQgbWF0ZXJpYWxzIHRoYXQgd291bGQgYmUgZXhwb3J0ZWQuXHJcbiAgICAgKiBAcGFyYW0gbm9kZXMgQmFieWxvbiB0cmFuc2Zvcm0gbm9kZXNcclxuICAgICAqIEByZXR1cm5zIFNldCBvZiBtYXRlcmlhbHMgd2hpY2ggd291bGQgYmUgZXhwb3J0ZWQuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX2dldEV4cG9ydE5vZGVzKG5vZGVzOiBOb2RlW10pOiBbTm9kZVtdLCBTZXQ8TWF0ZXJpYWw+XSB7XHJcbiAgICAgICAgY29uc3QgZXhwb3J0Tm9kZXM6IE5vZGVbXSA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGV4cG9ydE1hdGVyaWFsczogU2V0PE1hdGVyaWFsPiA9IG5ldyBTZXQ8TWF0ZXJpYWw+KCk7XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgYmFieWxvbk5vZGUgb2Ygbm9kZXMpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9vcHRpb25zLnNob3VsZEV4cG9ydE5vZGUgfHwgdGhpcy5fb3B0aW9ucy5zaG91bGRFeHBvcnROb2RlKGJhYnlsb25Ob2RlKSkge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0Tm9kZXMucHVzaChiYWJ5bG9uTm9kZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgYmFieWxvbk1lc2ggPSBiYWJ5bG9uTm9kZSBhcyBBYnN0cmFjdE1lc2g7XHJcbiAgICAgICAgICAgICAgICBpZiAoYmFieWxvbk1lc2guc3ViTWVzaGVzICYmIGJhYnlsb25NZXNoLnN1Yk1lc2hlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWwgPSBiYWJ5bG9uTWVzaC5tYXRlcmlhbCB8fCBiYWJ5bG9uTWVzaC5nZXRTY2VuZSgpLmRlZmF1bHRNYXRlcmlhbDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobWF0ZXJpYWwgaW5zdGFuY2VvZiBNdWx0aU1hdGVyaWFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgc3ViTWF0ZXJpYWwgb2YgbWF0ZXJpYWwuc3ViTWF0ZXJpYWxzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3ViTWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBvcnRNYXRlcmlhbHMuYWRkKHN1Yk1hdGVyaWFsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cG9ydE1hdGVyaWFscy5hZGQobWF0ZXJpYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGBFeGNsdWRpbmcgbm9kZSAke2JhYnlsb25Ob2RlLm5hbWV9YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFtleHBvcnROb2RlcywgZXhwb3J0TWF0ZXJpYWxzXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBtYXBwaW5nIG9mIE5vZGUgdW5pcXVlIGlkIHRvIG5vZGUgaW5kZXggYW5kIGhhbmRsZXMgYW5pbWF0aW9uc1xyXG4gICAgICogQHBhcmFtIG5vZGVzIEJhYnlsb24gdHJhbnNmb3JtIG5vZGVzXHJcbiAgICAgKiBAcGFyYW0gYmluYXJ5V3JpdGVyIEJ1ZmZlciB0byB3cml0ZSBiaW5hcnkgZGF0YSB0b1xyXG4gICAgICogQHJldHVybnMgTm9kZSBtYXBwaW5nIG9mIHVuaXF1ZSBpZCB0byBpbmRleFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9jcmVhdGVOb2RlTWFwQW5kQW5pbWF0aW9uc0FzeW5jKG5vZGVzOiBOb2RlW10sIGJpbmFyeVdyaXRlcjogX0JpbmFyeVdyaXRlcik6IFByb21pc2U8eyBba2V5OiBudW1iZXJdOiBudW1iZXIgfT4ge1xyXG4gICAgICAgIGxldCBwcm9taXNlQ2hhaW4gPSBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICBjb25zdCBub2RlTWFwOiB7IFtrZXk6IG51bWJlcl06IG51bWJlciB9ID0ge307XHJcbiAgICAgICAgbGV0IG5vZGVJbmRleDogbnVtYmVyO1xyXG4gICAgICAgIGNvbnN0IHJ1bnRpbWVHTFRGQW5pbWF0aW9uOiBJQW5pbWF0aW9uID0ge1xyXG4gICAgICAgICAgICBuYW1lOiBcInJ1bnRpbWUgYW5pbWF0aW9uc1wiLFxyXG4gICAgICAgICAgICBjaGFubmVsczogW10sXHJcbiAgICAgICAgICAgIHNhbXBsZXJzOiBbXSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGlkbGVHTFRGQW5pbWF0aW9uczogSUFuaW1hdGlvbltdID0gW107XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgYmFieWxvbk5vZGUgb2Ygbm9kZXMpIHtcclxuICAgICAgICAgICAgcHJvbWlzZUNoYWluID0gcHJvbWlzZUNoYWluLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NyZWF0ZU5vZGVBc3luYyhiYWJ5bG9uTm9kZSwgYmluYXJ5V3JpdGVyKS50aGVuKChub2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IHRoaXMuX2V4dGVuc2lvbnNQb3N0RXhwb3J0Tm9kZUFzeW5jKFwiY3JlYXRlTm9kZUFzeW5jXCIsIG5vZGUsIGJhYnlsb25Ob2RlLCBub2RlTWFwLCBiaW5hcnlXcml0ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9taXNlID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVG9vbHMuV2FybihgTm90IGV4cG9ydGluZyBub2RlICR7YmFieWxvbk5vZGUubmFtZX1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlLnRoZW4oKG5vZGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX25vZGVzLnB1c2gobm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlSW5kZXggPSB0aGlzLl9ub2Rlcy5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZU1hcFtiYWJ5bG9uTm9kZS51bmlxdWVJZF0gPSBub2RlSW5kZXg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9iYWJ5bG9uU2NlbmUuYW5pbWF0aW9uR3JvdXBzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9HTFRGQW5pbWF0aW9uLl9DcmVhdGVNb3JwaFRhcmdldEFuaW1hdGlvbkZyb21Nb3JwaFRhcmdldEFuaW1hdGlvbnMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhYnlsb25Ob2RlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydW50aW1lR0xURkFuaW1hdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRsZUdMVEZBbmltYXRpb25zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlTWFwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9ub2RlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmluYXJ5V3JpdGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9idWZmZXJWaWV3cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fYWNjZXNzb3JzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9hbmltYXRpb25TYW1wbGVSYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9vcHRpb25zLnNob3VsZEV4cG9ydEFuaW1hdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJhYnlsb25Ob2RlLmFuaW1hdGlvbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9HTFRGQW5pbWF0aW9uLl9DcmVhdGVOb2RlQW5pbWF0aW9uRnJvbU5vZGVBbmltYXRpb25zKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFieWxvbk5vZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydW50aW1lR0xURkFuaW1hdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkbGVHTFRGQW5pbWF0aW9ucyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVNYXAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9ub2RlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpbmFyeVdyaXRlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2J1ZmZlclZpZXdzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fYWNjZXNzb3JzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fYW5pbWF0aW9uU2FtcGxlUmF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX29wdGlvbnMuc2hvdWxkRXhwb3J0QW5pbWF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcHJvbWlzZUNoYWluLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocnVudGltZUdMVEZBbmltYXRpb24uY2hhbm5lbHMubGVuZ3RoICYmIHJ1bnRpbWVHTFRGQW5pbWF0aW9uLnNhbXBsZXJzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYW5pbWF0aW9ucy5wdXNoKHJ1bnRpbWVHTFRGQW5pbWF0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZGxlR0xURkFuaW1hdGlvbnMuZm9yRWFjaCgoaWRsZUdMVEZBbmltYXRpb24pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpZGxlR0xURkFuaW1hdGlvbi5jaGFubmVscy5sZW5ndGggJiYgaWRsZUdMVEZBbmltYXRpb24uc2FtcGxlcnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYW5pbWF0aW9ucy5wdXNoKGlkbGVHTFRGQW5pbWF0aW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5fYmFieWxvblNjZW5lLmFuaW1hdGlvbkdyb3Vwcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIF9HTFRGQW5pbWF0aW9uLl9DcmVhdGVOb2RlQW5kTW9ycGhBbmltYXRpb25Gcm9tQW5pbWF0aW9uR3JvdXBzKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2JhYnlsb25TY2VuZSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9hbmltYXRpb25zLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vZGVNYXAsXHJcbiAgICAgICAgICAgICAgICAgICAgYmluYXJ5V3JpdGVyLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2J1ZmZlclZpZXdzLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2FjY2Vzc29ycyxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9hbmltYXRpb25TYW1wbGVSYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX29wdGlvbnMuc2hvdWxkRXhwb3J0QW5pbWF0aW9uXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbm9kZU1hcDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBnbFRGIG5vZGUgZnJvbSBhIEJhYnlsb24gbWVzaFxyXG4gICAgICogQHBhcmFtIGJhYnlsb25Ob2RlIFNvdXJjZSBCYWJ5bG9uIG1lc2hcclxuICAgICAqIEBwYXJhbSBiaW5hcnlXcml0ZXIgQnVmZmVyIGZvciBzdG9yaW5nIGdlb21ldHJ5IGRhdGFcclxuICAgICAqIEByZXR1cm5zIGdsVEYgbm9kZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9jcmVhdGVOb2RlQXN5bmMoYmFieWxvbk5vZGU6IE5vZGUsIGJpbmFyeVdyaXRlcjogX0JpbmFyeVdyaXRlcik6IFByb21pc2U8SU5vZGU+IHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBub2RlIHRvIGhvbGQgdHJhbnNsYXRpb24vcm90YXRpb24vc2NhbGUgYW5kIHRoZSBtZXNoXHJcbiAgICAgICAgICAgIGNvbnN0IG5vZGU6IElOb2RlID0ge307XHJcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBtZXNoXHJcbiAgICAgICAgICAgIGNvbnN0IG1lc2g6IElNZXNoID0geyBwcmltaXRpdmVzOiBbXSB9O1xyXG5cclxuICAgICAgICAgICAgaWYgKGJhYnlsb25Ob2RlLm5hbWUpIHtcclxuICAgICAgICAgICAgICAgIG5vZGUubmFtZSA9IGJhYnlsb25Ob2RlLm5hbWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChiYWJ5bG9uTm9kZSBpbnN0YW5jZW9mIFRyYW5zZm9ybU5vZGUpIHtcclxuICAgICAgICAgICAgICAgIC8vIFNldCB0cmFuc2Zvcm1hdGlvblxyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2V0Tm9kZVRyYW5zZm9ybWF0aW9uKG5vZGUsIGJhYnlsb25Ob2RlKTtcclxuICAgICAgICAgICAgICAgIGlmIChiYWJ5bG9uTm9kZSBpbnN0YW5jZW9mIE1lc2gpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtb3JwaFRhcmdldE1hbmFnZXIgPSBiYWJ5bG9uTm9kZS5tb3JwaFRhcmdldE1hbmFnZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1vcnBoVGFyZ2V0TWFuYWdlciAmJiBtb3JwaFRhcmdldE1hbmFnZXIubnVtVGFyZ2V0cyA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzaC53ZWlnaHRzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbW9ycGhUYXJnZXRNYW5hZ2VyLm51bVRhcmdldHM7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzaC53ZWlnaHRzLnB1c2gobW9ycGhUYXJnZXRNYW5hZ2VyLmdldFRhcmdldChpKS5pbmZsdWVuY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NldFByaW1pdGl2ZUF0dHJpYnV0ZXNBc3luYyhtZXNoLCBiYWJ5bG9uTm9kZSwgYmluYXJ5V3JpdGVyKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobWVzaC5wcmltaXRpdmVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9tZXNoZXMucHVzaChtZXNoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5tZXNoID0gdGhpcy5fbWVzaGVzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYmFieWxvbk5vZGUgaW5zdGFuY2VvZiBDYW1lcmEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NldENhbWVyYVRyYW5zZm9ybWF0aW9uKG5vZGUsIGJhYnlsb25Ob2RlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBnbFRGIHNraW4gZnJvbSBhIEJhYnlsb24gc2tlbGV0b25cclxuICAgICAqIEBwYXJhbSBub2RlTWFwIEJhYnlsb24gdHJhbnNmb3JtIG5vZGVzXHJcbiAgICAgKiBAcGFyYW0gYmluYXJ5V3JpdGVyIEJ1ZmZlciB0byB3cml0ZSBiaW5hcnkgZGF0YSB0b1xyXG4gICAgICogQHJldHVybnMgTm9kZSBtYXBwaW5nIG9mIHVuaXF1ZSBpZCB0byBpbmRleFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9jcmVhdGVTa2luc0FzeW5jKG5vZGVNYXA6IHsgW2tleTogbnVtYmVyXTogbnVtYmVyIH0sIGJpbmFyeVdyaXRlcjogX0JpbmFyeVdyaXRlcik6IFByb21pc2U8eyBba2V5OiBudW1iZXJdOiBudW1iZXIgfT4ge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2VDaGFpbiA9IFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgIGNvbnN0IHNraW5NYXA6IHsgW2tleTogbnVtYmVyXTogbnVtYmVyIH0gPSB7fTtcclxuICAgICAgICBmb3IgKGNvbnN0IHNrZWxldG9uIG9mIHRoaXMuX2JhYnlsb25TY2VuZS5za2VsZXRvbnMpIHtcclxuICAgICAgICAgICAgaWYgKHNrZWxldG9uLmJvbmVzLmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBjcmVhdGUgc2tpblxyXG4gICAgICAgICAgICBjb25zdCBza2luOiBJU2tpbiA9IHsgam9pbnRzOiBbXSB9O1xyXG4gICAgICAgICAgICBjb25zdCBpbnZlcnNlQmluZE1hdHJpY2VzOiBNYXRyaXhbXSA9IFtdO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYm9uZUluZGV4TWFwOiB7IFtpbmRleDogbnVtYmVyXTogQm9uZSB9ID0ge307XHJcbiAgICAgICAgICAgIGxldCBtYXhCb25lSW5kZXggPSAtMTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBza2VsZXRvbi5ib25lcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYm9uZSA9IHNrZWxldG9uLmJvbmVzW2ldO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYm9uZUluZGV4ID0gYm9uZS5nZXRJbmRleCgpID8/IGk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYm9uZUluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleE1hcFtib25lSW5kZXhdID0gYm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYm9uZUluZGV4ID4gbWF4Qm9uZUluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heEJvbmVJbmRleCA9IGJvbmVJbmRleDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGJvbmVJbmRleCA9IDA7IGJvbmVJbmRleCA8PSBtYXhCb25lSW5kZXg7ICsrYm9uZUluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBib25lID0gYm9uZUluZGV4TWFwW2JvbmVJbmRleF07XHJcbiAgICAgICAgICAgICAgICBpbnZlcnNlQmluZE1hdHJpY2VzLnB1c2goYm9uZS5nZXRJbnZlcnRlZEFic29sdXRlVHJhbnNmb3JtKCkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zZm9ybU5vZGUgPSBib25lLmdldFRyYW5zZm9ybU5vZGUoKTtcclxuICAgICAgICAgICAgICAgIGlmICh0cmFuc2Zvcm1Ob2RlICYmIG5vZGVNYXBbdHJhbnNmb3JtTm9kZS51bmlxdWVJZF0gIT09IG51bGwgJiYgbm9kZU1hcFt0cmFuc2Zvcm1Ob2RlLnVuaXF1ZUlkXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2tpbi5qb2ludHMucHVzaChub2RlTWFwW3RyYW5zZm9ybU5vZGUudW5pcXVlSWRdKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgVG9vbHMuV2FybihcIkV4cG9ydGluZyBhIGJvbmUgd2l0aG91dCBhIGxpbmtlZCB0cmFuc2Zvcm0gbm9kZSBpcyBjdXJyZW50bHkgdW5zdXBwb3J0ZWRcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChza2luLmpvaW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgYnVmZmVyIHZpZXcgZm9yIGludmVyc2UgYmluZCBtYXRyaWNlc1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYnl0ZVN0cmlkZSA9IDY0OyAvLyA0IHggNCBtYXRyaXggb2YgMzIgYml0IGZsb2F0XHJcbiAgICAgICAgICAgICAgICBjb25zdCBieXRlTGVuZ3RoID0gaW52ZXJzZUJpbmRNYXRyaWNlcy5sZW5ndGggKiBieXRlU3RyaWRlO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYnVmZmVyVmlld09mZnNldCA9IGJpbmFyeVdyaXRlci5nZXRCeXRlT2Zmc2V0KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBidWZmZXJWaWV3ID0gX0dMVEZVdGlsaXRpZXMuX0NyZWF0ZUJ1ZmZlclZpZXcoMCwgYnVmZmVyVmlld09mZnNldCwgYnl0ZUxlbmd0aCwgdW5kZWZpbmVkLCBcIkludmVyc2VCaW5kTWF0cmljZXNcIiArIFwiIC0gXCIgKyBza2VsZXRvbi5uYW1lKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2J1ZmZlclZpZXdzLnB1c2goYnVmZmVyVmlldyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBidWZmZXJWaWV3SW5kZXggPSB0aGlzLl9idWZmZXJWaWV3cy5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYmluZE1hdHJpeEFjY2Vzc29yID0gX0dMVEZVdGlsaXRpZXMuX0NyZWF0ZUFjY2Vzc29yKFxyXG4gICAgICAgICAgICAgICAgICAgIGJ1ZmZlclZpZXdJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICBcIkludmVyc2VCaW5kTWF0cmljZXNcIiArIFwiIC0gXCIgKyBza2VsZXRvbi5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIEFjY2Vzc29yVHlwZS5NQVQ0LFxyXG4gICAgICAgICAgICAgICAgICAgIEFjY2Vzc29yQ29tcG9uZW50VHlwZS5GTE9BVCxcclxuICAgICAgICAgICAgICAgICAgICBpbnZlcnNlQmluZE1hdHJpY2VzLmxlbmd0aCxcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGludmVyc2VCaW5kQWNjZXNzb3JJbmRleCA9IHRoaXMuX2FjY2Vzc29ycy5wdXNoKGJpbmRNYXRyaXhBY2Nlc3NvcikgLSAxO1xyXG4gICAgICAgICAgICAgICAgc2tpbi5pbnZlcnNlQmluZE1hdHJpY2VzID0gaW52ZXJzZUJpbmRBY2Nlc3NvckluZGV4O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2tpbnMucHVzaChza2luKTtcclxuICAgICAgICAgICAgICAgIHNraW5NYXBbc2tlbGV0b24udW5pcXVlSWRdID0gdGhpcy5fc2tpbnMubGVuZ3RoIC0gMTtcclxuXHJcbiAgICAgICAgICAgICAgICBpbnZlcnNlQmluZE1hdHJpY2VzLmZvckVhY2goKG1hdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hdC5tLmZvckVhY2goKGNlbGw6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiaW5hcnlXcml0ZXIuc2V0RmxvYXQzMihjZWxsKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwcm9taXNlQ2hhaW4udGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBza2luTWFwO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQGludGVybmFsXHJcbiAqXHJcbiAqIFN0b3JlcyBnbFRGIGJpbmFyeSBkYXRhLiAgSWYgdGhlIGFycmF5IGJ1ZmZlciBieXRlIGxlbmd0aCBpcyBleGNlZWRlZCwgaXQgZG91YmxlcyBpbiBzaXplIGR5bmFtaWNhbGx5XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgX0JpbmFyeVdyaXRlciB7XHJcbiAgICAvKipcclxuICAgICAqIEFycmF5IGJ1ZmZlciB3aGljaCBzdG9yZXMgYWxsIGJpbmFyeSBkYXRhXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX2FycmF5QnVmZmVyOiBBcnJheUJ1ZmZlcjtcclxuICAgIC8qKlxyXG4gICAgICogVmlldyBvZiB0aGUgYXJyYXkgYnVmZmVyXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX2RhdGFWaWV3OiBEYXRhVmlldztcclxuICAgIC8qKlxyXG4gICAgICogYnl0ZSBvZmZzZXQgb2YgZGF0YSBpbiBhcnJheSBidWZmZXJcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfYnl0ZU9mZnNldDogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXplIGJpbmFyeSB3cml0ZXIgd2l0aCBhbiBpbml0aWFsIGJ5dGUgbGVuZ3RoXHJcbiAgICAgKiBAcGFyYW0gYnl0ZUxlbmd0aCBJbml0aWFsIGJ5dGUgbGVuZ3RoIG9mIHRoZSBhcnJheSBidWZmZXJcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoYnl0ZUxlbmd0aDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fYXJyYXlCdWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoYnl0ZUxlbmd0aCk7XHJcbiAgICAgICAgdGhpcy5fZGF0YVZpZXcgPSBuZXcgRGF0YVZpZXcodGhpcy5fYXJyYXlCdWZmZXIpO1xyXG4gICAgICAgIHRoaXMuX2J5dGVPZmZzZXQgPSAwO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXNpemUgdGhlIGFycmF5IGJ1ZmZlciB0byB0aGUgc3BlY2lmaWVkIGJ5dGUgbGVuZ3RoXHJcbiAgICAgKiBAcGFyYW0gYnl0ZUxlbmd0aCBUaGUgbmV3IGJ5dGUgbGVuZ3RoXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgcmVzaXplZCBhcnJheSBidWZmZXJcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfcmVzaXplQnVmZmVyKGJ5dGVMZW5ndGg6IG51bWJlcik6IEFycmF5QnVmZmVyIHtcclxuICAgICAgICBjb25zdCBuZXdCdWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoYnl0ZUxlbmd0aCk7XHJcbiAgICAgICAgY29uc3QgY29weU9sZEJ1ZmZlclNpemUgPSBNYXRoLm1pbih0aGlzLl9hcnJheUJ1ZmZlci5ieXRlTGVuZ3RoLCBieXRlTGVuZ3RoKTtcclxuICAgICAgICBjb25zdCBvbGRVaW50OEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5fYXJyYXlCdWZmZXIsIDAsIGNvcHlPbGRCdWZmZXJTaXplKTtcclxuICAgICAgICBjb25zdCBuZXdVaW50OEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkobmV3QnVmZmVyKTtcclxuICAgICAgICBuZXdVaW50OEFycmF5LnNldChvbGRVaW50OEFycmF5LCAwKTtcclxuICAgICAgICB0aGlzLl9hcnJheUJ1ZmZlciA9IG5ld0J1ZmZlcjtcclxuICAgICAgICB0aGlzLl9kYXRhVmlldyA9IG5ldyBEYXRhVmlldyh0aGlzLl9hcnJheUJ1ZmZlcik7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXdCdWZmZXI7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCBhbiBhcnJheSBidWZmZXIgd2l0aCB0aGUgbGVuZ3RoIG9mIHRoZSBieXRlIG9mZnNldFxyXG4gICAgICogQHJldHVybnMgQXJyYXlCdWZmZXIgcmVzaXplZCB0byB0aGUgYnl0ZSBvZmZzZXRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldEFycmF5QnVmZmVyKCk6IEFycmF5QnVmZmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcmVzaXplQnVmZmVyKHRoaXMuZ2V0Qnl0ZU9mZnNldCgpKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBieXRlIG9mZnNldCBvZiB0aGUgYXJyYXkgYnVmZmVyXHJcbiAgICAgKiBAcmV0dXJucyBieXRlIG9mZnNldFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0Qnl0ZU9mZnNldCgpOiBudW1iZXIge1xyXG4gICAgICAgIGlmICh0aGlzLl9ieXRlT2Zmc2V0ID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJCeXRlIG9mZnNldCBpcyB1bmRlZmluZWQhXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5fYnl0ZU9mZnNldDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU3RvcmVzIGFuIFVJbnQ4IGluIHRoZSBhcnJheSBidWZmZXJcclxuICAgICAqIEBwYXJhbSBlbnRyeVxyXG4gICAgICogQHBhcmFtIGJ5dGVPZmZzZXQgSWYgZGVmaW5lZCwgc3BlY2lmaWVzIHdoZXJlIHRvIHNldCB0aGUgdmFsdWUgYXMgYW4gb2Zmc2V0LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0VUludDgoZW50cnk6IG51bWJlciwgYnl0ZU9mZnNldD86IG51bWJlcikge1xyXG4gICAgICAgIGlmIChieXRlT2Zmc2V0ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKGJ5dGVPZmZzZXQgPCB0aGlzLl9ieXRlT2Zmc2V0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kYXRhVmlldy5zZXRVaW50OChieXRlT2Zmc2V0LCBlbnRyeSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBUb29scy5FcnJvcihcIkJpbmFyeVdyaXRlcjogYnl0ZW9mZnNldCBpcyBncmVhdGVyIHRoYW4gdGhlIGN1cnJlbnQgYmluYXJ5IGJ1ZmZlciBsZW5ndGghXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2J5dGVPZmZzZXQgKyAxID4gdGhpcy5fYXJyYXlCdWZmZXIuYnl0ZUxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVzaXplQnVmZmVyKHRoaXMuX2FycmF5QnVmZmVyLmJ5dGVMZW5ndGggKiAyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9kYXRhVmlldy5zZXRVaW50OCh0aGlzLl9ieXRlT2Zmc2V0LCBlbnRyeSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2J5dGVPZmZzZXQgKz0gMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTdG9yZXMgYW4gVUludDE2IGluIHRoZSBhcnJheSBidWZmZXJcclxuICAgICAqIEBwYXJhbSBlbnRyeVxyXG4gICAgICogQHBhcmFtIGJ5dGVPZmZzZXQgSWYgZGVmaW5lZCwgc3BlY2lmaWVzIHdoZXJlIHRvIHNldCB0aGUgdmFsdWUgYXMgYW4gb2Zmc2V0LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0VUludDE2KGVudHJ5OiBudW1iZXIsIGJ5dGVPZmZzZXQ/OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoYnl0ZU9mZnNldCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmIChieXRlT2Zmc2V0IDwgdGhpcy5fYnl0ZU9mZnNldCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZGF0YVZpZXcuc2V0VWludDE2KGJ5dGVPZmZzZXQsIGVudHJ5LCB0cnVlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIFRvb2xzLkVycm9yKFwiQmluYXJ5V3JpdGVyOiBieXRlb2Zmc2V0IGlzIGdyZWF0ZXIgdGhhbiB0aGUgY3VycmVudCBiaW5hcnkgYnVmZmVyIGxlbmd0aCFcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fYnl0ZU9mZnNldCArIDIgPiB0aGlzLl9hcnJheUJ1ZmZlci5ieXRlTGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXNpemVCdWZmZXIodGhpcy5fYXJyYXlCdWZmZXIuYnl0ZUxlbmd0aCAqIDIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2RhdGFWaWV3LnNldFVpbnQxNih0aGlzLl9ieXRlT2Zmc2V0LCBlbnRyeSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2J5dGVPZmZzZXQgKz0gMjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIGFuIFVJbnQzMiBpbiB0aGUgYXJyYXkgYnVmZmVyXHJcbiAgICAgKiBAcGFyYW0gYnl0ZU9mZnNldCBJZiBkZWZpbmVkLCBzcGVjaWZpZXMgd2hlcmUgdG8gc2V0IHRoZSB2YWx1ZSBhcyBhbiBvZmZzZXQuXHJcbiAgICAgKiBAcmV0dXJucyBlbnRyeVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0VUludDMyKGJ5dGVPZmZzZXQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKGJ5dGVPZmZzZXQgPCB0aGlzLl9ieXRlT2Zmc2V0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9kYXRhVmlldy5nZXRVaW50MzIoYnl0ZU9mZnNldCwgdHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgVG9vbHMuRXJyb3IoXCJCaW5hcnlXcml0ZXI6IGJ5dGVvZmZzZXQgaXMgZ3JlYXRlciB0aGFuIHRoZSBjdXJyZW50IGJpbmFyeSBidWZmZXIgbGVuZ3RoIVwiKTtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQmluYXJ5V3JpdGVyOiBieXRlb2Zmc2V0IGlzIGdyZWF0ZXIgdGhhbiB0aGUgY3VycmVudCBiaW5hcnkgYnVmZmVyIGxlbmd0aCFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRWZWN0b3IzRmxvYXQzMkZyb21SZWYodmVjdG9yMzogVmVjdG9yMywgYnl0ZU9mZnNldDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGJ5dGVPZmZzZXQgKyA4ID4gdGhpcy5fYnl0ZU9mZnNldCkge1xyXG4gICAgICAgICAgICBUb29scy5FcnJvcihgQmluYXJ5V3JpdGVyOiBieXRlb2Zmc2V0IGlzIGdyZWF0ZXIgdGhhbiB0aGUgY3VycmVudCBiaW5hcnkgYnVmZmVyIGxlbmd0aCFgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2ZWN0b3IzLnggPSB0aGlzLl9kYXRhVmlldy5nZXRGbG9hdDMyKGJ5dGVPZmZzZXQsIHRydWUpO1xyXG4gICAgICAgICAgICB2ZWN0b3IzLnkgPSB0aGlzLl9kYXRhVmlldy5nZXRGbG9hdDMyKGJ5dGVPZmZzZXQgKyA0LCB0cnVlKTtcclxuICAgICAgICAgICAgdmVjdG9yMy56ID0gdGhpcy5fZGF0YVZpZXcuZ2V0RmxvYXQzMihieXRlT2Zmc2V0ICsgOCwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRWZWN0b3IzRmxvYXQzMkZyb21SZWYodmVjdG9yMzogVmVjdG9yMywgYnl0ZU9mZnNldDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGJ5dGVPZmZzZXQgKyA4ID4gdGhpcy5fYnl0ZU9mZnNldCkge1xyXG4gICAgICAgICAgICBUb29scy5FcnJvcihgQmluYXJ5V3JpdGVyOiBieXRlb2Zmc2V0IGlzIGdyZWF0ZXIgdGhhbiB0aGUgY3VycmVudCBiaW5hcnkgYnVmZmVyIGxlbmd0aCFgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9kYXRhVmlldy5zZXRGbG9hdDMyKGJ5dGVPZmZzZXQsIHZlY3RvcjMueCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2RhdGFWaWV3LnNldEZsb2F0MzIoYnl0ZU9mZnNldCArIDQsIHZlY3RvcjMueSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2RhdGFWaWV3LnNldEZsb2F0MzIoYnl0ZU9mZnNldCArIDgsIHZlY3RvcjMueiwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRWZWN0b3I0RmxvYXQzMkZyb21SZWYodmVjdG9yNDogVmVjdG9yNCwgYnl0ZU9mZnNldDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGJ5dGVPZmZzZXQgKyAxMiA+IHRoaXMuX2J5dGVPZmZzZXQpIHtcclxuICAgICAgICAgICAgVG9vbHMuRXJyb3IoYEJpbmFyeVdyaXRlcjogYnl0ZW9mZnNldCBpcyBncmVhdGVyIHRoYW4gdGhlIGN1cnJlbnQgYmluYXJ5IGJ1ZmZlciBsZW5ndGghYCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmVjdG9yNC54ID0gdGhpcy5fZGF0YVZpZXcuZ2V0RmxvYXQzMihieXRlT2Zmc2V0LCB0cnVlKTtcclxuICAgICAgICAgICAgdmVjdG9yNC55ID0gdGhpcy5fZGF0YVZpZXcuZ2V0RmxvYXQzMihieXRlT2Zmc2V0ICsgNCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHZlY3RvcjQueiA9IHRoaXMuX2RhdGFWaWV3LmdldEZsb2F0MzIoYnl0ZU9mZnNldCArIDgsIHRydWUpO1xyXG4gICAgICAgICAgICB2ZWN0b3I0LncgPSB0aGlzLl9kYXRhVmlldy5nZXRGbG9hdDMyKGJ5dGVPZmZzZXQgKyAxMiwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRWZWN0b3I0RmxvYXQzMkZyb21SZWYodmVjdG9yNDogVmVjdG9yNCwgYnl0ZU9mZnNldDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGJ5dGVPZmZzZXQgKyAxMiA+IHRoaXMuX2J5dGVPZmZzZXQpIHtcclxuICAgICAgICAgICAgVG9vbHMuRXJyb3IoYEJpbmFyeVdyaXRlcjogYnl0ZW9mZnNldCBpcyBncmVhdGVyIHRoYW4gdGhlIGN1cnJlbnQgYmluYXJ5IGJ1ZmZlciBsZW5ndGghYCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fZGF0YVZpZXcuc2V0RmxvYXQzMihieXRlT2Zmc2V0LCB2ZWN0b3I0LngsIHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLl9kYXRhVmlldy5zZXRGbG9hdDMyKGJ5dGVPZmZzZXQgKyA0LCB2ZWN0b3I0LnksIHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLl9kYXRhVmlldy5zZXRGbG9hdDMyKGJ5dGVPZmZzZXQgKyA4LCB2ZWN0b3I0LnosIHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLl9kYXRhVmlldy5zZXRGbG9hdDMyKGJ5dGVPZmZzZXQgKyAxMiwgdmVjdG9yNC53LCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFN0b3JlcyBhIEZsb2F0MzIgaW4gdGhlIGFycmF5IGJ1ZmZlclxyXG4gICAgICogQHBhcmFtIGVudHJ5XHJcbiAgICAgKiBAcGFyYW0gYnl0ZU9mZnNldFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0RmxvYXQzMihlbnRyeTogbnVtYmVyLCBieXRlT2Zmc2V0PzogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKGlzTmFOKGVudHJ5KSkge1xyXG4gICAgICAgICAgICBUb29scy5FcnJvcihcIkludmFsaWQgZGF0YSBiZWluZyB3cml0dGVuIVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGJ5dGVPZmZzZXQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZiAoYnl0ZU9mZnNldCA8IHRoaXMuX2J5dGVPZmZzZXQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2RhdGFWaWV3LnNldEZsb2F0MzIoYnl0ZU9mZnNldCwgZW50cnksIHRydWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgVG9vbHMuRXJyb3IoXCJCaW5hcnlXcml0ZXI6IGJ5dGVvZmZzZXQgaXMgZ3JlYXRlciB0aGFuIHRoZSBjdXJyZW50IGJpbmFyeSBsZW5ndGghXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9ieXRlT2Zmc2V0ICsgNCA+IHRoaXMuX2FycmF5QnVmZmVyLmJ5dGVMZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5fcmVzaXplQnVmZmVyKHRoaXMuX2FycmF5QnVmZmVyLmJ5dGVMZW5ndGggKiAyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fZGF0YVZpZXcuc2V0RmxvYXQzMih0aGlzLl9ieXRlT2Zmc2V0LCBlbnRyeSwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5fYnl0ZU9mZnNldCArPSA0O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBTdG9yZXMgYW4gVUludDMyIGluIHRoZSBhcnJheSBidWZmZXJcclxuICAgICAqIEBwYXJhbSBlbnRyeVxyXG4gICAgICogQHBhcmFtIGJ5dGVPZmZzZXQgSWYgZGVmaW5lZCwgc3BlY2lmaWVzIHdoZXJlIHRvIHNldCB0aGUgdmFsdWUgYXMgYW4gb2Zmc2V0LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0VUludDMyKGVudHJ5OiBudW1iZXIsIGJ5dGVPZmZzZXQ/OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoYnl0ZU9mZnNldCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmIChieXRlT2Zmc2V0IDwgdGhpcy5fYnl0ZU9mZnNldCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZGF0YVZpZXcuc2V0VWludDMyKGJ5dGVPZmZzZXQsIGVudHJ5LCB0cnVlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIFRvb2xzLkVycm9yKFwiQmluYXJ5V3JpdGVyOiBieXRlb2Zmc2V0IGlzIGdyZWF0ZXIgdGhhbiB0aGUgY3VycmVudCBiaW5hcnkgYnVmZmVyIGxlbmd0aCFcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fYnl0ZU9mZnNldCArIDQgPiB0aGlzLl9hcnJheUJ1ZmZlci5ieXRlTGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXNpemVCdWZmZXIodGhpcy5fYXJyYXlCdWZmZXIuYnl0ZUxlbmd0aCAqIDIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2RhdGFWaWV3LnNldFVpbnQzMih0aGlzLl9ieXRlT2Zmc2V0LCBlbnRyeSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2J5dGVPZmZzZXQgKz0gNDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFN0b3JlcyBhbiBJbnQxNiBpbiB0aGUgYXJyYXkgYnVmZmVyXHJcbiAgICAgKiBAcGFyYW0gZW50cnlcclxuICAgICAqIEBwYXJhbSBieXRlT2Zmc2V0IElmIGRlZmluZWQsIHNwZWNpZmllcyB3aGVyZSB0byBzZXQgdGhlIHZhbHVlIGFzIGFuIG9mZnNldC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldEludDE2KGVudHJ5OiBudW1iZXIsIGJ5dGVPZmZzZXQ/OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoYnl0ZU9mZnNldCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmIChieXRlT2Zmc2V0IDwgdGhpcy5fYnl0ZU9mZnNldCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZGF0YVZpZXcuc2V0SW50MTYoYnl0ZU9mZnNldCwgZW50cnksIHRydWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgVG9vbHMuRXJyb3IoXCJCaW5hcnlXcml0ZXI6IGJ5dGVvZmZzZXQgaXMgZ3JlYXRlciB0aGFuIHRoZSBjdXJyZW50IGJpbmFyeSBidWZmZXIgbGVuZ3RoIVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9ieXRlT2Zmc2V0ICsgMiA+IHRoaXMuX2FycmF5QnVmZmVyLmJ5dGVMZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Jlc2l6ZUJ1ZmZlcih0aGlzLl9hcnJheUJ1ZmZlci5ieXRlTGVuZ3RoICogMik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fZGF0YVZpZXcuc2V0SW50MTYodGhpcy5fYnl0ZU9mZnNldCwgZW50cnksIHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLl9ieXRlT2Zmc2V0ICs9IDI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBTdG9yZXMgYSBieXRlIGluIHRoZSBhcnJheSBidWZmZXJcclxuICAgICAqIEBwYXJhbSBlbnRyeVxyXG4gICAgICogQHBhcmFtIGJ5dGVPZmZzZXQgSWYgZGVmaW5lZCwgc3BlY2lmaWVzIHdoZXJlIHRvIHNldCB0aGUgdmFsdWUgYXMgYW4gb2Zmc2V0LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0Qnl0ZShlbnRyeTogbnVtYmVyLCBieXRlT2Zmc2V0PzogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKGJ5dGVPZmZzZXQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZiAoYnl0ZU9mZnNldCA8IHRoaXMuX2J5dGVPZmZzZXQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2RhdGFWaWV3LnNldEludDgoYnl0ZU9mZnNldCwgZW50cnkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgVG9vbHMuRXJyb3IoXCJCaW5hcnlXcml0ZXI6IGJ5dGVvZmZzZXQgaXMgZ3JlYXRlciB0aGFuIHRoZSBjdXJyZW50IGJpbmFyeSBidWZmZXIgbGVuZ3RoIVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9ieXRlT2Zmc2V0ICsgMSA+IHRoaXMuX2FycmF5QnVmZmVyLmJ5dGVMZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Jlc2l6ZUJ1ZmZlcih0aGlzLl9hcnJheUJ1ZmZlci5ieXRlTGVuZ3RoICogMik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fZGF0YVZpZXcuc2V0SW50OCh0aGlzLl9ieXRlT2Zmc2V0LCBlbnRyeSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2J5dGVPZmZzZXQrKztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHR5cGUgeyBJbWFnZU1pbWVUeXBlLCBJTWVzaFByaW1pdGl2ZSwgSU5vZGUsIElNYXRlcmlhbCwgSVRleHR1cmVJbmZvIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgdHlwZSB7IE5vZGUgfSBmcm9tIFwiY29yZS9ub2RlXCI7XHJcbmltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xyXG5cclxuaW1wb3J0IHR5cGUgeyBUZXh0dXJlIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1RleHR1cmVzL3RleHR1cmVcIjtcclxuaW1wb3J0IHR5cGUgeyBTdWJNZXNoIH0gZnJvbSBcImNvcmUvTWVzaGVzL3N1Yk1lc2hcIjtcclxuaW1wb3J0IHR5cGUgeyBJRGlzcG9zYWJsZSB9IGZyb20gXCJjb3JlL3NjZW5lXCI7XHJcblxyXG5pbXBvcnQgdHlwZSB7IF9CaW5hcnlXcml0ZXIgfSBmcm9tIFwiLi9nbFRGRXhwb3J0ZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uIH0gZnJvbSBcIi4uL2dsVEZGaWxlRXhwb3J0ZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgdHlwZSB7IEJhc2VUZXh0dXJlIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1RleHR1cmVzL2Jhc2VUZXh0dXJlXCI7XHJcblxyXG4vKiogQGludGVybmFsICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby12YXIsIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgdmFyIF9fSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyID0gMDsgLy8gSSBhbSBoZXJlIHRvIGFsbG93IGR0cyB0byBiZSBjcmVhdGVkXHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBhIGdsVEYgZXhwb3J0ZXIgZXh0ZW5zaW9uXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIgZXh0ZW5kcyBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uLCBJRGlzcG9zYWJsZSB7XHJcbiAgICAvKipcclxuICAgICAqIERlZmluZSB0aGlzIG1ldGhvZCB0byBtb2RpZnkgdGhlIGRlZmF1bHQgYmVoYXZpb3IgYmVmb3JlIGV4cG9ydGluZyBhIHRleHR1cmVcclxuICAgICAqIEBwYXJhbSBjb250ZXh0IFRoZSBjb250ZXh0IHdoZW4gbG9hZGluZyB0aGUgYXNzZXRcclxuICAgICAqIEBwYXJhbSBiYWJ5bG9uVGV4dHVyZSBUaGUgQmFieWxvbi5qcyB0ZXh0dXJlXHJcbiAgICAgKiBAcGFyYW0gbWltZVR5cGUgVGhlIG1pbWUtdHlwZSBvZiB0aGUgZ2VuZXJhdGVkIGltYWdlXHJcbiAgICAgKiBAcmV0dXJucyBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBleHBvcnRlZCB0ZXh0dXJlXHJcbiAgICAgKi9cclxuICAgIHByZUV4cG9ydFRleHR1cmVBc3luYz8oY29udGV4dDogc3RyaW5nLCBiYWJ5bG9uVGV4dHVyZTogTnVsbGFibGU8VGV4dHVyZT4sIG1pbWVUeXBlOiBJbWFnZU1pbWVUeXBlKTogUHJvbWlzZTxOdWxsYWJsZTxUZXh0dXJlPj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmUgdGhpcyBtZXRob2QgdG8gZ2V0IG5vdGlmaWVkIHdoZW4gYSB0ZXh0dXJlIGluZm8gaXMgY3JlYXRlZFxyXG4gICAgICogQHBhcmFtIGNvbnRleHQgVGhlIGNvbnRleHQgd2hlbiBsb2FkaW5nIHRoZSBhc3NldFxyXG4gICAgICogQHBhcmFtIHRleHR1cmVJbmZvIFRoZSBnbFRGIHRleHR1cmUgaW5mb1xyXG4gICAgICogQHBhcmFtIGJhYnlsb25UZXh0dXJlIFRoZSBCYWJ5bG9uLmpzIHRleHR1cmVcclxuICAgICAqL1xyXG4gICAgcG9zdEV4cG9ydFRleHR1cmU/KGNvbnRleHQ6IHN0cmluZywgdGV4dHVyZUluZm86IElUZXh0dXJlSW5mbywgYmFieWxvblRleHR1cmU6IEJhc2VUZXh0dXJlKTogdm9pZDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZSB0aGlzIG1ldGhvZCB0byBtb2RpZnkgdGhlIGRlZmF1bHQgYmVoYXZpb3Igd2hlbiBleHBvcnRpbmcgdGV4dHVyZSBpbmZvXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBUaGUgY29udGV4dCB3aGVuIGxvYWRpbmcgdGhlIGFzc2V0XHJcbiAgICAgKiBAcGFyYW0gbWVzaFByaW1pdGl2ZSBnbFRGIG1lc2ggcHJpbWl0aXZlXHJcbiAgICAgKiBAcGFyYW0gYmFieWxvblN1Yk1lc2ggQmFieWxvbiBzdWJtZXNoXHJcbiAgICAgKiBAcGFyYW0gYmluYXJ5V3JpdGVyIGdsVEYgc2VyaWFsaXplciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXHJcbiAgICAgKiBAcmV0dXJucyBudWxsYWJsZSBJTWVzaFByaW1pdGl2ZSBwcm9taXNlXHJcbiAgICAgKi9cclxuICAgIHBvc3RFeHBvcnRNZXNoUHJpbWl0aXZlQXN5bmM/KGNvbnRleHQ6IHN0cmluZywgbWVzaFByaW1pdGl2ZTogTnVsbGFibGU8SU1lc2hQcmltaXRpdmU+LCBiYWJ5bG9uU3ViTWVzaDogU3ViTWVzaCwgYmluYXJ5V3JpdGVyOiBfQmluYXJ5V3JpdGVyKTogUHJvbWlzZTxJTWVzaFByaW1pdGl2ZT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmUgdGhpcyBtZXRob2QgdG8gbW9kaWZ5IHRoZSBkZWZhdWx0IGJlaGF2aW9yIHdoZW4gZXhwb3J0aW5nIGEgbm9kZVxyXG4gICAgICogQHBhcmFtIGNvbnRleHQgVGhlIGNvbnRleHQgd2hlbiBleHBvcnRpbmcgdGhlIG5vZGVcclxuICAgICAqIEBwYXJhbSBub2RlIGdsVEYgbm9kZVxyXG4gICAgICogQHBhcmFtIGJhYnlsb25Ob2RlIEJhYnlsb25KUyBub2RlXHJcbiAgICAgKiBAcmV0dXJucyBudWxsYWJsZSBJTm9kZSBwcm9taXNlXHJcbiAgICAgKi9cclxuICAgIHBvc3RFeHBvcnROb2RlQXN5bmM/KGNvbnRleHQ6IHN0cmluZywgbm9kZTogTnVsbGFibGU8SU5vZGU+LCBiYWJ5bG9uTm9kZTogTm9kZSwgbm9kZU1hcDogeyBba2V5OiBudW1iZXJdOiBudW1iZXIgfSwgYmluYXJ5V3JpdGVyOiBfQmluYXJ5V3JpdGVyKTogUHJvbWlzZTxOdWxsYWJsZTxJTm9kZT4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lIHRoaXMgbWV0aG9kIHRvIG1vZGlmeSB0aGUgZGVmYXVsdCBiZWhhdmlvciB3aGVuIGV4cG9ydGluZyBhIG1hdGVyaWFsXHJcbiAgICAgKiBAcGFyYW0gbWF0ZXJpYWwgZ2xURiBtYXRlcmlhbFxyXG4gICAgICogQHBhcmFtIGJhYnlsb25NYXRlcmlhbCBCYWJ5bG9uSlMgbWF0ZXJpYWxcclxuICAgICAqIEByZXR1cm5zIG51bGxhYmxlIElNYXRlcmlhbCBwcm9taXNlXHJcbiAgICAgKi9cclxuICAgIHBvc3RFeHBvcnRNYXRlcmlhbEFzeW5jPyhjb250ZXh0OiBzdHJpbmcsIG5vZGU6IE51bGxhYmxlPElNYXRlcmlhbD4sIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBQcm9taXNlPElNYXRlcmlhbD47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmUgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGFkZGl0aW9uYWwgdGV4dHVyZXMgdG8gZXhwb3J0IGZyb20gYSBtYXRlcmlhbFxyXG4gICAgICogQHBhcmFtIG1hdGVyaWFsIGdsVEYgbWF0ZXJpYWxcclxuICAgICAqIEBwYXJhbSBiYWJ5bG9uTWF0ZXJpYWwgQmFieWxvbkpTIG1hdGVyaWFsXHJcbiAgICAgKiBAcmV0dXJucyBMaXN0IG9mIHRleHR1cmVzXHJcbiAgICAgKi9cclxuICAgIHBvc3RFeHBvcnRNYXRlcmlhbEFkZGl0aW9uYWxUZXh0dXJlcz8oY29udGV4dDogc3RyaW5nLCBub2RlOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBCYXNlVGV4dHVyZVtdO1xyXG5cclxuICAgIC8qKiBHZXRzIGEgYm9vbGVhbiBpbmRpY2F0aW5nIHRoYXQgdGhpcyBleHRlbnNpb24gd2FzIHVzZWQgKi9cclxuICAgIHdhc1VzZWQ6IGJvb2xlYW47XHJcblxyXG4gICAgLyoqIEdldHMgYSBib29sZWFuIGluZGljYXRpbmcgdGhhdCB0aGlzIGV4dGVuc2lvbiBpcyByZXF1aXJlZCBmb3IgdGhlIGZpbGUgdG8gd29yayAqL1xyXG4gICAgcmVxdWlyZWQ6IGJvb2xlYW47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgYWZ0ZXIgdGhlIGV4cG9ydGVyIHN0YXRlIGNoYW5nZXMgdG8gRVhQT1JUSU5HXHJcbiAgICAgKi9cclxuICAgIG9uRXhwb3J0aW5nPygpOiB2b2lkO1xyXG59XHJcbiIsImltcG9ydCB0eXBlIHsgSVRleHR1cmVJbmZvLCBJTWF0ZXJpYWwsIElNYXRlcmlhbFBick1ldGFsbGljUm91Z2huZXNzLCBJTWF0ZXJpYWxPY2NsdXNpb25UZXh0dXJlSW5mbywgSVNhbXBsZXIsIElNYXRlcmlhbEV4dGVuc2lvbiB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgSW1hZ2VNaW1lVHlwZSwgTWF0ZXJpYWxBbHBoYU1vZGUsIFRleHR1cmVNYWdGaWx0ZXIsIFRleHR1cmVNaW5GaWx0ZXIsIFRleHR1cmVXcmFwTW9kZSB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuXHJcbmltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xyXG5pbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcImNvcmUvTWF0aHMvbWF0aC52ZWN0b3JcIjtcclxuaW1wb3J0IHsgQ29sb3IzIH0gZnJvbSBcImNvcmUvTWF0aHMvbWF0aC5jb2xvclwiO1xyXG5pbXBvcnQgeyBTY2FsYXIgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLnNjYWxhclwiO1xyXG5pbXBvcnQgeyBUb29scyB9IGZyb20gXCJjb3JlL01pc2MvdG9vbHNcIjtcclxuaW1wb3J0IHsgVGV4dHVyZVRvb2xzIH0gZnJvbSBcImNvcmUvTWlzYy90ZXh0dXJlVG9vbHNcIjtcclxuaW1wb3J0IHR5cGUgeyBCYXNlVGV4dHVyZSB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9UZXh0dXJlcy9iYXNlVGV4dHVyZVwiO1xyXG5pbXBvcnQgeyBUZXh0dXJlIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1RleHR1cmVzL3RleHR1cmVcIjtcclxuaW1wb3J0IHsgUmF3VGV4dHVyZSB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9UZXh0dXJlcy9yYXdUZXh0dXJlXCI7XHJcblxyXG5pbXBvcnQgdHlwZSB7IFNjZW5lIH0gZnJvbSBcImNvcmUvc2NlbmVcIjtcclxuXHJcbmltcG9ydCB0eXBlIHsgX0V4cG9ydGVyIH0gZnJvbSBcIi4vZ2xURkV4cG9ydGVyXCI7XHJcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCJjb3JlL0VuZ2luZXMvY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IER1bXBUb29scyB9IGZyb20gXCJjb3JlL01pc2MvZHVtcFRvb2xzXCI7XHJcblxyXG5pbXBvcnQgdHlwZSB7IE1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL21hdGVyaWFsXCI7XHJcbmltcG9ydCB0eXBlIHsgU3RhbmRhcmRNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9zdGFuZGFyZE1hdGVyaWFsXCI7XHJcbmltcG9ydCB0eXBlIHsgUEJSQmFzZU1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1BCUi9wYnJCYXNlTWF0ZXJpYWxcIjtcclxuaW1wb3J0IHR5cGUgeyBQQlJNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9QQlIvcGJyTWF0ZXJpYWxcIjtcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIHN0b3Jpbmcgc3BlY3VsYXIgZ2xvc3NpbmVzcyBmYWN0b3JzXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5pbnRlcmZhY2UgX0lQQlJTcGVjdWxhckdsb3NzaW5lc3Mge1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXByZXNlbnRzIHRoZSBsaW5lYXIgZGlmZnVzZSBmYWN0b3JzIG9mIHRoZSBtYXRlcmlhbFxyXG4gICAgICovXHJcbiAgICBkaWZmdXNlQ29sb3I6IENvbG9yMztcclxuICAgIC8qKlxyXG4gICAgICogUmVwcmVzZW50cyB0aGUgbGluZWFyIHNwZWN1bGFyIGZhY3RvcnMgb2YgdGhlIG1hdGVyaWFsXHJcbiAgICAgKi9cclxuICAgIHNwZWN1bGFyQ29sb3I6IENvbG9yMztcclxuICAgIC8qKlxyXG4gICAgICogUmVwcmVzZW50cyB0aGUgc21vb3RobmVzcyBvZiB0aGUgbWF0ZXJpYWxcclxuICAgICAqL1xyXG4gICAgZ2xvc3NpbmVzczogbnVtYmVyO1xyXG59XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBzdG9yaW5nIG1ldGFsbGljIHJvdWdobmVzcyBmYWN0b3JzXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5pbnRlcmZhY2UgX0lQQlJNZXRhbGxpY1JvdWdobmVzcyB7XHJcbiAgICAvKipcclxuICAgICAqIFJlcHJlc2VudHMgdGhlIGFsYmVkbyBjb2xvciBvZiB0aGUgbWF0ZXJpYWxcclxuICAgICAqL1xyXG4gICAgYmFzZUNvbG9yOiBDb2xvcjM7XHJcbiAgICAvKipcclxuICAgICAqIFJlcHJlc2VudHMgdGhlIG1ldGFsbmVzcyBvZiB0aGUgbWF0ZXJpYWxcclxuICAgICAqL1xyXG4gICAgbWV0YWxsaWM6IE51bGxhYmxlPG51bWJlcj47XHJcbiAgICAvKipcclxuICAgICAqIFJlcHJlc2VudHMgdGhlIHJvdWdobmVzcyBvZiB0aGUgbWF0ZXJpYWxcclxuICAgICAqL1xyXG4gICAgcm91Z2huZXNzOiBOdWxsYWJsZTxudW1iZXI+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbWV0YWxsaWMgcm91Z2huZXNzIHRleHR1cmUgZGF0YVxyXG4gICAgICovXHJcbiAgICBtZXRhbGxpY1JvdWdobmVzc1RleHR1cmVEYXRhPzogTnVsbGFibGU8QXJyYXlCdWZmZXI+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgYmFzZSBjb2xvciB0ZXh0dXJlIGRhdGFcclxuICAgICAqL1xyXG4gICAgYmFzZUNvbG9yVGV4dHVyZURhdGE/OiBOdWxsYWJsZTxBcnJheUJ1ZmZlcj47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEZpbGVFeHRlbnNpb25Gcm9tTWltZVR5cGUobWltZVR5cGU6IEltYWdlTWltZVR5cGUpOiBzdHJpbmcge1xyXG4gICAgc3dpdGNoIChtaW1lVHlwZSkge1xyXG4gICAgICAgIGNhc2UgSW1hZ2VNaW1lVHlwZS5KUEVHOlxyXG4gICAgICAgICAgICByZXR1cm4gXCIuanBnXCI7XHJcbiAgICAgICAgY2FzZSBJbWFnZU1pbWVUeXBlLlBORzpcclxuICAgICAgICAgICAgcmV0dXJuIFwiLnBuZ1wiO1xyXG4gICAgICAgIGNhc2UgSW1hZ2VNaW1lVHlwZS5XRUJQOlxyXG4gICAgICAgICAgICByZXR1cm4gXCIud2VicFwiO1xyXG4gICAgICAgIGNhc2UgSW1hZ2VNaW1lVHlwZS5BVklGOlxyXG4gICAgICAgICAgICByZXR1cm4gXCIuYXZpZlwiO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogVXRpbGl0eSBtZXRob2RzIGZvciB3b3JraW5nIHdpdGggZ2xURiBtYXRlcmlhbCBjb252ZXJzaW9uIHByb3BlcnRpZXMuICBUaGlzIGNsYXNzIHNob3VsZCBvbmx5IGJlIHVzZWQgaW50ZXJuYWxseVxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbmV4cG9ydCBjbGFzcyBfR0xURk1hdGVyaWFsRXhwb3J0ZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXByZXNlbnRzIHRoZSBkaWVsZWN0cmljIHNwZWN1bGFyIHZhbHVlcyBmb3IgUiwgRyBhbmQgQlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBfRGllbGVjdHJpY1NwZWN1bGFyOiBDb2xvcjMgPSBuZXcgQ29sb3IzKDAuMDQsIDAuMDQsIDAuMDQpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWxsb3dzIHRoZSBtYXhpbXVtIHNwZWN1bGFyIHBvd2VyIHRvIGJlIGRlZmluZWQgZm9yIG1hdGVyaWFsIGNhbGN1bGF0aW9uc1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBfTWF4U3BlY3VsYXJQb3dlciA9IDEwMjQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYXBwaW5nIHRvIHN0b3JlIHRleHR1cmVzXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX3RleHR1cmVNYXA6IHsgW3RleHR1cmVJZDogc3RyaW5nXTogSVRleHR1cmVJbmZvIH0gPSB7fTtcclxuXHJcbiAgICAvLyBNYXBwaW5nIG9mIGludGVybmFsIHRleHR1cmVzIHRvIGltYWdlcyB0byBhdm9pZCBleHBvcnRpbmcgZHVwbGljYXRlIGltYWdlcy5cclxuICAgIHByaXZhdGUgX2ludGVybmFsVGV4dHVyZVRvSW1hZ2U6IHsgW3VuaXF1ZUlkOiBudW1iZXJdOiB7IFttaW1lVHlwZTogc3RyaW5nXTogUHJvbWlzZTxudW1iZXI+IH0gfSA9IHt9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogTnVtZXJpYyB0b2xlcmFuY2UgdmFsdWVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgX0Vwc2lsb24gPSAxZS02O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVmZXJlbmNlIHRvIHRoZSBnbFRGIEV4cG9ydGVyXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX2V4cG9ydGVyOiBfRXhwb3J0ZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZXhwb3J0ZXI6IF9FeHBvcnRlcikge1xyXG4gICAgICAgIHRoaXMuX3RleHR1cmVNYXAgPSB7fTtcclxuICAgICAgICB0aGlzLl9leHBvcnRlciA9IGV4cG9ydGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIGlmIHR3byBjb2xvcnMgYXJlIGFwcHJveGltYXRlbHkgZXF1YWwgaW4gdmFsdWVcclxuICAgICAqIEBwYXJhbSBjb2xvcjEgZmlyc3QgY29sb3IgdG8gY29tcGFyZSB0b1xyXG4gICAgICogQHBhcmFtIGNvbG9yMiBzZWNvbmQgY29sb3IgdG8gY29tcGFyZSB0b1xyXG4gICAgICogQHBhcmFtIGVwc2lsb24gdGhyZXNob2xkIHZhbHVlXHJcbiAgICAgKiBAcmV0dXJucyBib29sZWFuIHNwZWNpZnlpbmcgaWYgdGhlIGNvbG9ycyBhcmUgYXBwcm94aW1hdGVseSBlcXVhbCBpbiB2YWx1ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfRnV6enlFcXVhbHMoY29sb3IxOiBDb2xvcjMsIGNvbG9yMjogQ29sb3IzLCBlcHNpbG9uOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gU2NhbGFyLldpdGhpbkVwc2lsb24oY29sb3IxLnIsIGNvbG9yMi5yLCBlcHNpbG9uKSAmJiBTY2FsYXIuV2l0aGluRXBzaWxvbihjb2xvcjEuZywgY29sb3IyLmcsIGVwc2lsb24pICYmIFNjYWxhci5XaXRoaW5FcHNpbG9uKGNvbG9yMS5iLCBjb2xvcjIuYiwgZXBzaWxvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBtYXRlcmlhbHMgZnJvbSBhIEJhYnlsb24gc2NlbmUgYW5kIGNvbnZlcnRzIHRoZW0gdG8gZ2xURiBtYXRlcmlhbHNcclxuICAgICAqIEBwYXJhbSBleHBvcnRNYXRlcmlhbHNcclxuICAgICAqIEBwYXJhbSBtaW1lVHlwZSB0ZXh0dXJlIG1pbWUgdHlwZVxyXG4gICAgICogQHBhcmFtIGhhc1RleHR1cmVDb29yZHMgc3BlY2lmaWVzIGlmIHRleHR1cmUgY29vcmRpbmF0ZXMgYXJlIHByZXNlbnQgb24gdGhlIG1hdGVyaWFsXHJcbiAgICAgKiBAcmV0dXJucyBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgYWZ0ZXIgYWxsIG1hdGVyaWFscyBoYXZlIGJlZW4gY29udmVydGVkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfY29udmVydE1hdGVyaWFsc1RvR0xURkFzeW5jKGV4cG9ydE1hdGVyaWFsczogU2V0PE1hdGVyaWFsPiwgbWltZVR5cGU6IEltYWdlTWltZVR5cGUsIGhhc1RleHR1cmVDb29yZHM6IGJvb2xlYW4pIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlczogUHJvbWlzZTxJTWF0ZXJpYWw+W10gPSBbXTtcclxuICAgICAgICBleHBvcnRNYXRlcmlhbHMuZm9yRWFjaCgobWF0ZXJpYWwpID0+IHtcclxuICAgICAgICAgICAgaWYgKG1hdGVyaWFsLmdldENsYXNzTmFtZSgpID09PSBcIlN0YW5kYXJkTWF0ZXJpYWxcIikge1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaCh0aGlzLl9jb252ZXJ0U3RhbmRhcmRNYXRlcmlhbEFzeW5jKG1hdGVyaWFsIGFzIFN0YW5kYXJkTWF0ZXJpYWwsIG1pbWVUeXBlLCBoYXNUZXh0dXJlQ29vcmRzKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWF0ZXJpYWwuZ2V0Q2xhc3NOYW1lKCkuaW5kZXhPZihcIlBCUlwiKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5fY29udmVydFBCUk1hdGVyaWFsQXN5bmMobWF0ZXJpYWwgYXMgUEJSTWF0ZXJpYWwsIG1pbWVUeXBlLCBoYXNUZXh0dXJlQ29vcmRzKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBUb29scy5XYXJuKGBVbnN1cHBvcnRlZCBtYXRlcmlhbCB0eXBlOiAke21hdGVyaWFsLm5hbWV9YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgLyogZG8gbm90aGluZyAqL1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWFrZXMgYSBjb3B5IG9mIHRoZSBnbFRGIG1hdGVyaWFsIHdpdGhvdXQgdGhlIHRleHR1cmUgcGFyYW1ldGVyc1xyXG4gICAgICogQHBhcmFtIG9yaWdpbmFsTWF0ZXJpYWwgb3JpZ2luYWwgZ2xURiBtYXRlcmlhbFxyXG4gICAgICogQHJldHVybnMgZ2xURiBtYXRlcmlhbCB3aXRob3V0IHRleHR1cmUgcGFyYW1ldGVyc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgX3N0cmlwVGV4dHVyZXNGcm9tTWF0ZXJpYWwob3JpZ2luYWxNYXRlcmlhbDogSU1hdGVyaWFsKTogSU1hdGVyaWFsIHtcclxuICAgICAgICBjb25zdCBuZXdNYXRlcmlhbDogSU1hdGVyaWFsID0ge307XHJcbiAgICAgICAgaWYgKG9yaWdpbmFsTWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgbmV3TWF0ZXJpYWwubmFtZSA9IG9yaWdpbmFsTWF0ZXJpYWwubmFtZTtcclxuICAgICAgICAgICAgbmV3TWF0ZXJpYWwuZG91YmxlU2lkZWQgPSBvcmlnaW5hbE1hdGVyaWFsLmRvdWJsZVNpZGVkO1xyXG4gICAgICAgICAgICBuZXdNYXRlcmlhbC5hbHBoYU1vZGUgPSBvcmlnaW5hbE1hdGVyaWFsLmFscGhhTW9kZTtcclxuICAgICAgICAgICAgbmV3TWF0ZXJpYWwuYWxwaGFDdXRvZmYgPSBvcmlnaW5hbE1hdGVyaWFsLmFscGhhQ3V0b2ZmO1xyXG4gICAgICAgICAgICBuZXdNYXRlcmlhbC5lbWlzc2l2ZUZhY3RvciA9IG9yaWdpbmFsTWF0ZXJpYWwuZW1pc3NpdmVGYWN0b3I7XHJcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsUEJSTWV0YWxsaWNSb3VnaG5lc3MgPSBvcmlnaW5hbE1hdGVyaWFsLnBick1ldGFsbGljUm91Z2huZXNzO1xyXG4gICAgICAgICAgICBpZiAob3JpZ2luYWxQQlJNZXRhbGxpY1JvdWdobmVzcykge1xyXG4gICAgICAgICAgICAgICAgbmV3TWF0ZXJpYWwucGJyTWV0YWxsaWNSb3VnaG5lc3MgPSB7fTtcclxuICAgICAgICAgICAgICAgIG5ld01hdGVyaWFsLnBick1ldGFsbGljUm91Z2huZXNzLmJhc2VDb2xvckZhY3RvciA9IG9yaWdpbmFsUEJSTWV0YWxsaWNSb3VnaG5lc3MuYmFzZUNvbG9yRmFjdG9yO1xyXG4gICAgICAgICAgICAgICAgbmV3TWF0ZXJpYWwucGJyTWV0YWxsaWNSb3VnaG5lc3MubWV0YWxsaWNGYWN0b3IgPSBvcmlnaW5hbFBCUk1ldGFsbGljUm91Z2huZXNzLm1ldGFsbGljRmFjdG9yO1xyXG4gICAgICAgICAgICAgICAgbmV3TWF0ZXJpYWwucGJyTWV0YWxsaWNSb3VnaG5lc3Mucm91Z2huZXNzRmFjdG9yID0gb3JpZ2luYWxQQlJNZXRhbGxpY1JvdWdobmVzcy5yb3VnaG5lc3NGYWN0b3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ld01hdGVyaWFsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIGlmIHRoZSBtYXRlcmlhbCBoYXMgYW55IHRleHR1cmUgcGFyYW1ldGVycyBwcmVzZW50XHJcbiAgICAgKiBAcGFyYW0gbWF0ZXJpYWwgZ2xURiBNYXRlcmlhbFxyXG4gICAgICogQHJldHVybnMgYm9vbGVhbiBzcGVjaWZ5aW5nIGlmIHRleHR1cmUgcGFyYW1ldGVycyBhcmUgcHJlc2VudFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgX2hhc1RleHR1cmVzUHJlc2VudChtYXRlcmlhbDogSU1hdGVyaWFsKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKG1hdGVyaWFsLmVtaXNzaXZlVGV4dHVyZSB8fCBtYXRlcmlhbC5ub3JtYWxUZXh0dXJlIHx8IG1hdGVyaWFsLm9jY2x1c2lvblRleHR1cmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHBick1hdCA9IG1hdGVyaWFsLnBick1ldGFsbGljUm91Z2huZXNzO1xyXG4gICAgICAgIGlmIChwYnJNYXQpIHtcclxuICAgICAgICAgICAgaWYgKHBick1hdC5iYXNlQ29sb3JUZXh0dXJlIHx8IHBick1hdC5tZXRhbGxpY1JvdWdobmVzc1RleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobWF0ZXJpYWwuZXh0ZW5zaW9ucykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGV4dGVuc2lvbiBpbiBtYXRlcmlhbC5leHRlbnNpb25zKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBleHRlbnNpb25PYmplY3QgPSBtYXRlcmlhbC5leHRlbnNpb25zW2V4dGVuc2lvbl07XHJcbiAgICAgICAgICAgICAgICBpZiAoZXh0ZW5zaW9uT2JqZWN0IGFzIElNYXRlcmlhbEV4dGVuc2lvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBleHRlbnNpb25PYmplY3QuaGFzVGV4dHVyZXM/LigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIF9nZXRUZXh0dXJlSW5mbyhiYWJ5bG9uVGV4dHVyZTogTnVsbGFibGU8QmFzZVRleHR1cmU+KTogTnVsbGFibGU8SVRleHR1cmVJbmZvPiB7XHJcbiAgICAgICAgaWYgKGJhYnlsb25UZXh0dXJlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHR1cmVVaWQgPSBiYWJ5bG9uVGV4dHVyZS51aWQ7XHJcbiAgICAgICAgICAgIGlmICh0ZXh0dXJlVWlkIGluIHRoaXMuX3RleHR1cmVNYXApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl90ZXh0dXJlTWFwW3RleHR1cmVVaWRdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydHMgYSBCYWJ5bG9uIFN0YW5kYXJkTWF0ZXJpYWwgdG8gYSBnbFRGIE1ldGFsbGljIFJvdWdobmVzcyBNYXRlcmlhbFxyXG4gICAgICogQHBhcmFtIGJhYnlsb25TdGFuZGFyZE1hdGVyaWFsXHJcbiAgICAgKiBAcmV0dXJucyBnbFRGIE1ldGFsbGljIFJvdWdobmVzcyBNYXRlcmlhbCByZXByZXNlbnRhdGlvblxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgX2NvbnZlcnRUb0dMVEZQQlJNZXRhbGxpY1JvdWdobmVzcyhiYWJ5bG9uU3RhbmRhcmRNYXRlcmlhbDogU3RhbmRhcmRNYXRlcmlhbCk6IElNYXRlcmlhbFBick1ldGFsbGljUm91Z2huZXNzIHtcclxuICAgICAgICAvLyBEZWZpbmVzIGEgY3ViaWMgYmV6aWVyIGN1cnZlIHdoZXJlIHggaXMgc3BlY3VsYXIgcG93ZXIgYW5kIHkgaXMgcm91Z2huZXNzXHJcbiAgICAgICAgY29uc3QgUDAgPSBuZXcgVmVjdG9yMigwLCAxKTtcclxuICAgICAgICBjb25zdCBQMSA9IG5ldyBWZWN0b3IyKDAsIDAuMSk7XHJcbiAgICAgICAgY29uc3QgUDIgPSBuZXcgVmVjdG9yMigwLCAwLjEpO1xyXG4gICAgICAgIGNvbnN0IFAzID0gbmV3IFZlY3RvcjIoMTMwMCwgMC4xKTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogR2l2ZW4gdGhlIGNvbnRyb2wgcG9pbnRzLCBzb2x2ZSBmb3IgeCBiYXNlZCBvbiBhIGdpdmVuIHQgZm9yIGEgY3ViaWMgYmV6aWVyIGN1cnZlXHJcbiAgICAgICAgICogQHBhcmFtIHQgYSB2YWx1ZSBiZXR3ZWVuIDAgYW5kIDFcclxuICAgICAgICAgKiBAcGFyYW0gcDAgZmlyc3QgY29udHJvbCBwb2ludFxyXG4gICAgICAgICAqIEBwYXJhbSBwMSBzZWNvbmQgY29udHJvbCBwb2ludFxyXG4gICAgICAgICAqIEBwYXJhbSBwMiB0aGlyZCBjb250cm9sIHBvaW50XHJcbiAgICAgICAgICogQHBhcmFtIHAzIGZvdXJ0aCBjb250cm9sIHBvaW50XHJcbiAgICAgICAgICogQHJldHVybnMgbnVtYmVyIHJlc3VsdCBvZiBjdWJpYyBiZXppZXIgY3VydmUgYXQgdGhlIHNwZWNpZmllZCB0XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gY3ViaWNCZXppZXJDdXJ2ZSh0OiBudW1iZXIsIHAwOiBudW1iZXIsIHAxOiBudW1iZXIsIHAyOiBudW1iZXIsIHAzOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgICAgICByZXR1cm4gKDEgLSB0KSAqICgxIC0gdCkgKiAoMSAtIHQpICogcDAgKyAzICogKDEgLSB0KSAqICgxIC0gdCkgKiB0ICogcDEgKyAzICogKDEgLSB0KSAqIHQgKiB0ICogcDIgKyB0ICogdCAqIHQgKiBwMztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEV2YWx1YXRlcyBhIHNwZWNpZmllZCBzcGVjdWxhciBwb3dlciB2YWx1ZSB0byBkZXRlcm1pbmUgdGhlIGFwcHJvcHJpYXRlIHJvdWdobmVzcyB2YWx1ZSxcclxuICAgICAgICAgKiBiYXNlZCBvbiBhIHByZS1kZWZpbmVkIGN1YmljIGJlemllciBjdXJ2ZSB3aXRoIHNwZWN1bGFyIG9uIHRoZSBhYnNjaXNzYSBheGlzICh4LWF4aXMpXHJcbiAgICAgICAgICogYW5kIHJvdWdobmVzcyBvbiB0aGUgb3JkaW5hbnQgYXhpcyAoeS1heGlzKVxyXG4gICAgICAgICAqIEBwYXJhbSBzcGVjdWxhclBvd2VyIHNwZWN1bGFyIHBvd2VyIG9mIHN0YW5kYXJkIG1hdGVyaWFsXHJcbiAgICAgICAgICogQHJldHVybnMgTnVtYmVyIHJlcHJlc2VudGluZyB0aGUgcm91Z2huZXNzIHZhbHVlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gc29sdmVGb3JSb3VnaG5lc3Moc3BlY3VsYXJQb3dlcjogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICAgICAgLy8gR2l2ZW4gUDAueCA9IDAsIFAxLnggPSAwLCBQMi54ID0gMFxyXG4gICAgICAgICAgICAvLyAgIHggPSB0ICogdCAqIHQgKiBQMy54XHJcbiAgICAgICAgICAgIC8vICAgdCA9ICh4IC8gUDMueCleKDEvMylcclxuICAgICAgICAgICAgY29uc3QgdCA9IE1hdGgucG93KHNwZWN1bGFyUG93ZXIgLyBQMy54LCAwLjMzMzMzMyk7XHJcbiAgICAgICAgICAgIHJldHVybiBjdWJpY0JlemllckN1cnZlKHQsIFAwLnksIFAxLnksIFAyLnksIFAzLnkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZGlmZnVzZSA9IGJhYnlsb25TdGFuZGFyZE1hdGVyaWFsLmRpZmZ1c2VDb2xvci50b0xpbmVhclNwYWNlKGJhYnlsb25TdGFuZGFyZE1hdGVyaWFsLmdldFNjZW5lKCkuZ2V0RW5naW5lKCkudXNlRXhhY3RTcmdiQ29udmVyc2lvbnMpLnNjYWxlKDAuNSk7XHJcbiAgICAgICAgY29uc3Qgb3BhY2l0eSA9IGJhYnlsb25TdGFuZGFyZE1hdGVyaWFsLmFscGhhO1xyXG4gICAgICAgIGNvbnN0IHNwZWN1bGFyUG93ZXIgPSBTY2FsYXIuQ2xhbXAoYmFieWxvblN0YW5kYXJkTWF0ZXJpYWwuc3BlY3VsYXJQb3dlciwgMCwgX0dMVEZNYXRlcmlhbEV4cG9ydGVyLl9NYXhTcGVjdWxhclBvd2VyKTtcclxuXHJcbiAgICAgICAgY29uc3Qgcm91Z2huZXNzID0gc29sdmVGb3JSb3VnaG5lc3Moc3BlY3VsYXJQb3dlcik7XHJcblxyXG4gICAgICAgIGNvbnN0IGdsVEZQYnJNZXRhbGxpY1JvdWdobmVzczogSU1hdGVyaWFsUGJyTWV0YWxsaWNSb3VnaG5lc3MgPSB7XHJcbiAgICAgICAgICAgIGJhc2VDb2xvckZhY3RvcjogW2RpZmZ1c2UuciwgZGlmZnVzZS5nLCBkaWZmdXNlLmIsIG9wYWNpdHldLFxyXG4gICAgICAgICAgICBtZXRhbGxpY0ZhY3RvcjogMCxcclxuICAgICAgICAgICAgcm91Z2huZXNzRmFjdG9yOiByb3VnaG5lc3MsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGdsVEZQYnJNZXRhbGxpY1JvdWdobmVzcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbXB1dGVzIHRoZSBtZXRhbGxpYyBmYWN0b3JcclxuICAgICAqIEBwYXJhbSBkaWZmdXNlIGRpZmZ1c2VkIHZhbHVlXHJcbiAgICAgKiBAcGFyYW0gc3BlY3VsYXIgc3BlY3VsYXIgdmFsdWVcclxuICAgICAqIEBwYXJhbSBvbmVNaW51c1NwZWN1bGFyU3RyZW5ndGggb25lIG1pbnVzIHRoZSBzcGVjdWxhciBzdHJlbmd0aFxyXG4gICAgICogQHJldHVybnMgbWV0YWxsaWMgdmFsdWVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBfU29sdmVNZXRhbGxpYyhkaWZmdXNlOiBudW1iZXIsIHNwZWN1bGFyOiBudW1iZXIsIG9uZU1pbnVzU3BlY3VsYXJTdHJlbmd0aDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBpZiAoc3BlY3VsYXIgPCB0aGlzLl9EaWVsZWN0cmljU3BlY3VsYXIucikge1xyXG4gICAgICAgICAgICB0aGlzLl9EaWVsZWN0cmljU3BlY3VsYXI7XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYSA9IHRoaXMuX0RpZWxlY3RyaWNTcGVjdWxhci5yO1xyXG4gICAgICAgIGNvbnN0IGIgPSAoZGlmZnVzZSAqIG9uZU1pbnVzU3BlY3VsYXJTdHJlbmd0aCkgLyAoMS4wIC0gdGhpcy5fRGllbGVjdHJpY1NwZWN1bGFyLnIpICsgc3BlY3VsYXIgLSAyLjAgKiB0aGlzLl9EaWVsZWN0cmljU3BlY3VsYXIucjtcclxuICAgICAgICBjb25zdCBjID0gdGhpcy5fRGllbGVjdHJpY1NwZWN1bGFyLnIgLSBzcGVjdWxhcjtcclxuICAgICAgICBjb25zdCBEID0gYiAqIGIgLSA0LjAgKiBhICogYztcclxuICAgICAgICByZXR1cm4gU2NhbGFyLkNsYW1wKCgtYiArIE1hdGguc3FydChEKSkgLyAoMi4wICogYSksIDAsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgZ2xURiBhbHBoYSBtb2RlIHRvIGEgZ2xURiBtYXRlcmlhbCBmcm9tIHRoZSBCYWJ5bG9uIE1hdGVyaWFsXHJcbiAgICAgKiBAcGFyYW0gZ2xURk1hdGVyaWFsIGdsVEYgbWF0ZXJpYWxcclxuICAgICAqIEBwYXJhbSBiYWJ5bG9uTWF0ZXJpYWwgQmFieWxvbiBtYXRlcmlhbFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfU2V0QWxwaGFNb2RlKGdsVEZNYXRlcmlhbDogSU1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsICYgeyBhbHBoYUN1dE9mZjogbnVtYmVyIH0pOiB2b2lkIHtcclxuICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsLm5lZWRBbHBoYUJsZW5kaW5nKCkpIHtcclxuICAgICAgICAgICAgZ2xURk1hdGVyaWFsLmFscGhhTW9kZSA9IE1hdGVyaWFsQWxwaGFNb2RlLkJMRU5EO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYmFieWxvbk1hdGVyaWFsLm5lZWRBbHBoYVRlc3RpbmcoKSkge1xyXG4gICAgICAgICAgICBnbFRGTWF0ZXJpYWwuYWxwaGFNb2RlID0gTWF0ZXJpYWxBbHBoYU1vZGUuTUFTSztcclxuICAgICAgICAgICAgZ2xURk1hdGVyaWFsLmFscGhhQ3V0b2ZmID0gYmFieWxvbk1hdGVyaWFsLmFscGhhQ3V0T2ZmO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnRzIGEgQmFieWxvbiBTdGFuZGFyZCBNYXRlcmlhbCB0byBhIGdsVEYgTWF0ZXJpYWxcclxuICAgICAqIEBwYXJhbSBiYWJ5bG9uU3RhbmRhcmRNYXRlcmlhbCBCSlMgU3RhbmRhcmQgTWF0ZXJpYWxcclxuICAgICAqIEBwYXJhbSBtaW1lVHlwZSBtaW1lIHR5cGUgdG8gdXNlIGZvciB0aGUgdGV4dHVyZXNcclxuICAgICAqIEBwYXJhbSBoYXNUZXh0dXJlQ29vcmRzIHNwZWNpZmllcyBpZiB0ZXh0dXJlIGNvb3JkaW5hdGVzIGFyZSBwcmVzZW50IG9uIHRoZSBzdWJtZXNoIHRvIGRldGVybWluZSBpZiB0ZXh0dXJlcyBzaG91bGQgYmUgYXBwbGllZFxyXG4gICAgICogQHJldHVybnMgcHJvbWlzZSwgcmVzb2x2ZWQgd2l0aCB0aGUgbWF0ZXJpYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIF9jb252ZXJ0U3RhbmRhcmRNYXRlcmlhbEFzeW5jKGJhYnlsb25TdGFuZGFyZE1hdGVyaWFsOiBTdGFuZGFyZE1hdGVyaWFsLCBtaW1lVHlwZTogSW1hZ2VNaW1lVHlwZSwgaGFzVGV4dHVyZUNvb3JkczogYm9vbGVhbik6IFByb21pc2U8SU1hdGVyaWFsPiB7XHJcbiAgICAgICAgY29uc3QgbWF0ZXJpYWxNYXAgPSB0aGlzLl9leHBvcnRlci5fbWF0ZXJpYWxNYXA7XHJcbiAgICAgICAgY29uc3QgbWF0ZXJpYWxzID0gdGhpcy5fZXhwb3J0ZXIuX21hdGVyaWFscztcclxuICAgICAgICBjb25zdCBwcm9taXNlcyA9IFtdO1xyXG4gICAgICAgIGNvbnN0IHBick1ldGFsbGljUm91Z2huZXNzID0gdGhpcy5fY29udmVydFRvR0xURlBCUk1ldGFsbGljUm91Z2huZXNzKGJhYnlsb25TdGFuZGFyZE1hdGVyaWFsKTtcclxuXHJcbiAgICAgICAgY29uc3QgbWF0ZXJpYWw6IElNYXRlcmlhbCA9IHsgbmFtZTogYmFieWxvblN0YW5kYXJkTWF0ZXJpYWwubmFtZSB9O1xyXG4gICAgICAgIGlmIChiYWJ5bG9uU3RhbmRhcmRNYXRlcmlhbC5iYWNrRmFjZUN1bGxpbmcgIT0gbnVsbCAmJiAhYmFieWxvblN0YW5kYXJkTWF0ZXJpYWwuYmFja0ZhY2VDdWxsaW5nKSB7XHJcbiAgICAgICAgICAgIGlmICghYmFieWxvblN0YW5kYXJkTWF0ZXJpYWwudHdvU2lkZWRMaWdodGluZykge1xyXG4gICAgICAgICAgICAgICAgVG9vbHMuV2FybihiYWJ5bG9uU3RhbmRhcmRNYXRlcmlhbC5uYW1lICsgXCI6IEJhY2stZmFjZSBjdWxsaW5nIGRpc2FibGVkIGFuZCB0d28tc2lkZWQgbGlnaHRpbmcgZGlzYWJsZWQgaXMgbm90IHN1cHBvcnRlZCBpbiBnbFRGLlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtYXRlcmlhbC5kb3VibGVTaWRlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChoYXNUZXh0dXJlQ29vcmRzKSB7XHJcbiAgICAgICAgICAgIGlmIChiYWJ5bG9uU3RhbmRhcmRNYXRlcmlhbC5kaWZmdXNlVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9leHBvcnRUZXh0dXJlQXN5bmMoYmFieWxvblN0YW5kYXJkTWF0ZXJpYWwuZGlmZnVzZVRleHR1cmUsIG1pbWVUeXBlKS50aGVuKCh0ZXh0dXJlSW5mbykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGV4dHVyZUluZm8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBick1ldGFsbGljUm91Z2huZXNzLmJhc2VDb2xvclRleHR1cmUgPSB0ZXh0dXJlSW5mbztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGJ1bXBUZXh0dXJlID0gYmFieWxvblN0YW5kYXJkTWF0ZXJpYWwuYnVtcFRleHR1cmU7XHJcbiAgICAgICAgICAgIGlmIChidW1wVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9leHBvcnRUZXh0dXJlQXN5bmMoYnVtcFRleHR1cmUsIG1pbWVUeXBlKS50aGVuKCh0ZXh0dXJlSW5mbykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGV4dHVyZUluZm8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsLm5vcm1hbFRleHR1cmUgPSB0ZXh0dXJlSW5mbztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChidW1wVGV4dHVyZS5sZXZlbCAhPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsLm5vcm1hbFRleHR1cmUuc2NhbGUgPSBidW1wVGV4dHVyZS5sZXZlbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChiYWJ5bG9uU3RhbmRhcmRNYXRlcmlhbC5lbWlzc2l2ZVRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgIG1hdGVyaWFsLmVtaXNzaXZlRmFjdG9yID0gWzEuMCwgMS4wLCAxLjBdO1xyXG5cclxuICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXhwb3J0VGV4dHVyZUFzeW5jKGJhYnlsb25TdGFuZGFyZE1hdGVyaWFsLmVtaXNzaXZlVGV4dHVyZSwgbWltZVR5cGUpLnRoZW4oKHRleHR1cmVJbmZvKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ZXh0dXJlSW5mbykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYWwuZW1pc3NpdmVUZXh0dXJlID0gdGV4dHVyZUluZm87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYmFieWxvblN0YW5kYXJkTWF0ZXJpYWwuYW1iaWVudFRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXhwb3J0VGV4dHVyZUFzeW5jKGJhYnlsb25TdGFuZGFyZE1hdGVyaWFsLmFtYmllbnRUZXh0dXJlLCBtaW1lVHlwZSkudGhlbigodGV4dHVyZUluZm8pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRleHR1cmVJbmZvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvY2NsdXNpb25UZXh0dXJlOiBJTWF0ZXJpYWxPY2NsdXNpb25UZXh0dXJlSW5mbyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogdGV4dHVyZUluZm8uaW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYWwub2NjbHVzaW9uVGV4dHVyZSA9IG9jY2x1c2lvblRleHR1cmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGJhYnlsb25TdGFuZGFyZE1hdGVyaWFsLmFscGhhIDwgMS4wIHx8IGJhYnlsb25TdGFuZGFyZE1hdGVyaWFsLm9wYWNpdHlUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgIGlmIChiYWJ5bG9uU3RhbmRhcmRNYXRlcmlhbC5hbHBoYU1vZGUgPT09IENvbnN0YW50cy5BTFBIQV9DT01CSU5FKSB7XHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbC5hbHBoYU1vZGUgPSBNYXRlcmlhbEFscGhhTW9kZS5CTEVORDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIFRvb2xzLldhcm4oYmFieWxvblN0YW5kYXJkTWF0ZXJpYWwubmFtZSArIFwiOiBnbFRGIDIuMCBkb2VzIG5vdCBzdXBwb3J0IGFscGhhIG1vZGU6IFwiICsgYmFieWxvblN0YW5kYXJkTWF0ZXJpYWwuYWxwaGFNb2RlLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChiYWJ5bG9uU3RhbmRhcmRNYXRlcmlhbC5lbWlzc2l2ZUNvbG9yICYmICFfR0xURk1hdGVyaWFsRXhwb3J0ZXIuX0Z1enp5RXF1YWxzKGJhYnlsb25TdGFuZGFyZE1hdGVyaWFsLmVtaXNzaXZlQ29sb3IsIENvbG9yMy5CbGFjaygpLCBfR0xURk1hdGVyaWFsRXhwb3J0ZXIuX0Vwc2lsb24pKSB7XHJcbiAgICAgICAgICAgIG1hdGVyaWFsLmVtaXNzaXZlRmFjdG9yID0gYmFieWxvblN0YW5kYXJkTWF0ZXJpYWwuZW1pc3NpdmVDb2xvci5hc0FycmF5KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtYXRlcmlhbC5wYnJNZXRhbGxpY1JvdWdobmVzcyA9IHBick1ldGFsbGljUm91Z2huZXNzO1xyXG4gICAgICAgIF9HTFRGTWF0ZXJpYWxFeHBvcnRlci5fU2V0QWxwaGFNb2RlKG1hdGVyaWFsLCBiYWJ5bG9uU3RhbmRhcmRNYXRlcmlhbCk7XHJcblxyXG4gICAgICAgIG1hdGVyaWFscy5wdXNoKG1hdGVyaWFsKTtcclxuICAgICAgICBtYXRlcmlhbE1hcFtiYWJ5bG9uU3RhbmRhcmRNYXRlcmlhbC51bmlxdWVJZF0gPSBtYXRlcmlhbHMubGVuZ3RoIC0gMTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZpbmlzaE1hdGVyaWFsKHByb21pc2VzLCBtYXRlcmlhbCwgYmFieWxvblN0YW5kYXJkTWF0ZXJpYWwsIG1pbWVUeXBlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9maW5pc2hNYXRlcmlhbDxUPihwcm9taXNlczogUHJvbWlzZTxUPltdLCBnbFRGTWF0ZXJpYWw6IElNYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCwgbWltZVR5cGU6IEltYWdlTWltZVR5cGUpIHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0ZXh0dXJlcyA9IHRoaXMuX2V4cG9ydGVyLl9leHRlbnNpb25zUG9zdEV4cG9ydE1hdGVyaWFsQWRkaXRpb25hbFRleHR1cmVzKFwiZXhwb3J0TWF0ZXJpYWxcIiwgZ2xURk1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWwpO1xyXG4gICAgICAgICAgICBsZXQgdGFza3M6IE51bGxhYmxlPFByb21pc2U8TnVsbGFibGU8SVRleHR1cmVJbmZvPj5bXT4gPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgZm9yIChjb25zdCB0ZXh0dXJlIG9mIHRleHR1cmVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRhc2tzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFza3MgPSBbXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRhc2tzLnB1c2godGhpcy5fZXhwb3J0VGV4dHVyZUFzeW5jKHRleHR1cmUsIG1pbWVUeXBlKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghdGFza3MpIHtcclxuICAgICAgICAgICAgICAgIHRhc2tzID0gW1Byb21pc2UucmVzb2x2ZShudWxsKV07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbCh0YXNrcykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBleHRlbnNpb25Xb3JrID0gdGhpcy5fZXhwb3J0ZXIuX2V4dGVuc2lvbnNQb3N0RXhwb3J0TWF0ZXJpYWxBc3luYyhcImV4cG9ydE1hdGVyaWFsXCIsIGdsVEZNYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsKTtcclxuICAgICAgICAgICAgICAgIGlmICghZXh0ZW5zaW9uV29yaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBnbFRGTWF0ZXJpYWw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXh0ZW5zaW9uV29yay50aGVuKCgpID0+IGdsVEZNYXRlcmlhbCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydHMgYW4gaW1hZ2UgdHlwZWQgYXJyYXkgYnVmZmVyIHRvIGEgYmFzZTY0IGltYWdlXHJcbiAgICAgKiBAcGFyYW0gYnVmZmVyIHR5cGVkIGFycmF5IGJ1ZmZlclxyXG4gICAgICogQHBhcmFtIHdpZHRoIHdpZHRoIG9mIHRoZSBpbWFnZVxyXG4gICAgICogQHBhcmFtIGhlaWdodCBoZWlnaHQgb2YgdGhlIGltYWdlXHJcbiAgICAgKiBAcGFyYW0gbWltZVR5cGUgbWltZXR5cGUgb2YgdGhlIGltYWdlXHJcbiAgICAgKiBAcmV0dXJucyBiYXNlNjQgaW1hZ2Ugc3RyaW5nXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgYXN5bmMgX2dldEltYWdlRGF0YUFzeW5jKGJ1ZmZlcjogVWludDhBcnJheSB8IEZsb2F0MzJBcnJheSwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIG1pbWVUeXBlOiBJbWFnZU1pbWVUeXBlKTogUHJvbWlzZTxBcnJheUJ1ZmZlcj4ge1xyXG4gICAgICAgIGNvbnN0IHRleHR1cmVUeXBlID0gQ29uc3RhbnRzLlRFWFRVUkVUWVBFX1VOU0lHTkVEX0lOVDtcclxuXHJcbiAgICAgICAgY29uc3QgaG9zdGluZ1NjZW5lID0gdGhpcy5fZXhwb3J0ZXIuX2JhYnlsb25TY2VuZTtcclxuICAgICAgICBjb25zdCBlbmdpbmUgPSBob3N0aW5nU2NlbmUuZ2V0RW5naW5lKCk7XHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSBhIHRlbXBvcmFyeSB0ZXh0dXJlIHdpdGggdGhlIHRleHR1cmUgYnVmZmVyIGRhdGFcclxuICAgICAgICBjb25zdCB0ZW1wVGV4dHVyZSA9IGVuZ2luZS5jcmVhdGVSYXdUZXh0dXJlKGJ1ZmZlciwgd2lkdGgsIGhlaWdodCwgQ29uc3RhbnRzLlRFWFRVUkVGT1JNQVRfUkdCQSwgZmFsc2UsIHRydWUsIFRleHR1cmUuTkVBUkVTVF9TQU1QTElOR01PREUsIG51bGwsIHRleHR1cmVUeXBlKTtcclxuXHJcbiAgICAgICAgYXdhaXQgVGV4dHVyZVRvb2xzLkFwcGx5UG9zdFByb2Nlc3MoXCJwYXNzXCIsIHRlbXBUZXh0dXJlLCBob3N0aW5nU2NlbmUsIHRleHR1cmVUeXBlLCBDb25zdGFudHMuVEVYVFVSRV9ORUFSRVNUX1NBTVBMSU5HTU9ERSwgQ29uc3RhbnRzLlRFWFRVUkVGT1JNQVRfUkdCQSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBlbmdpbmUuX3JlYWRUZXh0dXJlUGl4ZWxzKHRlbXBUZXh0dXJlLCB3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChhd2FpdCBEdW1wVG9vbHMuRHVtcERhdGFBc3luYyh3aWR0aCwgaGVpZ2h0LCBkYXRhLCBtaW1lVHlwZSwgdW5kZWZpbmVkLCB0cnVlLCB0cnVlKSkgYXMgQXJyYXlCdWZmZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZW5lcmF0ZXMgYSB3aGl0ZSB0ZXh0dXJlIGJhc2VkIG9uIHRoZSBzcGVjaWZpZWQgd2lkdGggYW5kIGhlaWdodFxyXG4gICAgICogQHBhcmFtIHdpZHRoIHdpZHRoIG9mIHRoZSB0ZXh0dXJlIGluIHBpeGVsc1xyXG4gICAgICogQHBhcmFtIGhlaWdodCBoZWlnaHQgb2YgdGhlIHRleHR1cmUgaW4gcGl4ZWxzXHJcbiAgICAgKiBAcGFyYW0gc2NlbmUgYmFieWxvbmpzIHNjZW5lXHJcbiAgICAgKiBAcmV0dXJucyB3aGl0ZSB0ZXh0dXJlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX2NyZWF0ZVdoaXRlVGV4dHVyZSh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgc2NlbmU6IFNjZW5lKTogVGV4dHVyZSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IG5ldyBVaW50OEFycmF5KHdpZHRoICogaGVpZ2h0ICogNCk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkgPSBpICsgNCkge1xyXG4gICAgICAgICAgICBkYXRhW2ldID0gZGF0YVtpICsgMV0gPSBkYXRhW2kgKyAyXSA9IGRhdGFbaSArIDNdID0gMHhmZjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJhd1RleHR1cmUgPSBSYXdUZXh0dXJlLkNyZWF0ZVJHQkFUZXh0dXJlKGRhdGEsIHdpZHRoLCBoZWlnaHQsIHNjZW5lKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJhd1RleHR1cmU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXNpemVzIHRoZSB0d28gc291cmNlIHRleHR1cmVzIHRvIHRoZSBzYW1lIGRpbWVuc2lvbnMuICBJZiBhIHRleHR1cmUgaXMgbnVsbCwgYSBkZWZhdWx0IHdoaXRlIHRleHR1cmUgaXMgZ2VuZXJhdGVkLiAgSWYgYm90aCB0ZXh0dXJlcyBhcmUgbnVsbCwgcmV0dXJucyBudWxsXHJcbiAgICAgKiBAcGFyYW0gdGV4dHVyZTEgZmlyc3QgdGV4dHVyZSB0byByZXNpemVcclxuICAgICAqIEBwYXJhbSB0ZXh0dXJlMiBzZWNvbmQgdGV4dHVyZSB0byByZXNpemVcclxuICAgICAqIEBwYXJhbSBzY2VuZSBiYWJ5bG9uanMgc2NlbmVcclxuICAgICAqIEByZXR1cm5zIHJlc2l6ZWQgdGV4dHVyZXMgb3IgbnVsbFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9yZXNpemVUZXh0dXJlc1RvU2FtZURpbWVuc2lvbnModGV4dHVyZTE6IE51bGxhYmxlPEJhc2VUZXh0dXJlPiwgdGV4dHVyZTI6IE51bGxhYmxlPEJhc2VUZXh0dXJlPiwgc2NlbmU6IFNjZW5lKTogeyB0ZXh0dXJlMTogQmFzZVRleHR1cmU7IHRleHR1cmUyOiBCYXNlVGV4dHVyZSB9IHtcclxuICAgICAgICBjb25zdCB0ZXh0dXJlMVNpemUgPSB0ZXh0dXJlMSA/IHRleHR1cmUxLmdldFNpemUoKSA6IHsgd2lkdGg6IDAsIGhlaWdodDogMCB9O1xyXG4gICAgICAgIGNvbnN0IHRleHR1cmUyU2l6ZSA9IHRleHR1cmUyID8gdGV4dHVyZTIuZ2V0U2l6ZSgpIDogeyB3aWR0aDogMCwgaGVpZ2h0OiAwIH07XHJcbiAgICAgICAgbGV0IHJlc2l6ZWRUZXh0dXJlMTogQmFzZVRleHR1cmU7XHJcbiAgICAgICAgbGV0IHJlc2l6ZWRUZXh0dXJlMjogQmFzZVRleHR1cmU7XHJcblxyXG4gICAgICAgIGlmICh0ZXh0dXJlMVNpemUud2lkdGggPCB0ZXh0dXJlMlNpemUud2lkdGgpIHtcclxuICAgICAgICAgICAgaWYgKHRleHR1cmUxICYmIHRleHR1cmUxIGluc3RhbmNlb2YgVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgcmVzaXplZFRleHR1cmUxID0gVGV4dHVyZVRvb2xzLkNyZWF0ZVJlc2l6ZWRDb3B5KHRleHR1cmUxLCB0ZXh0dXJlMlNpemUud2lkdGgsIHRleHR1cmUyU2l6ZS5oZWlnaHQsIHRydWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVzaXplZFRleHR1cmUxID0gdGhpcy5fY3JlYXRlV2hpdGVUZXh0dXJlKHRleHR1cmUyU2l6ZS53aWR0aCwgdGV4dHVyZTJTaXplLmhlaWdodCwgc2NlbmUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc2l6ZWRUZXh0dXJlMiA9IHRleHR1cmUyITtcclxuICAgICAgICB9IGVsc2UgaWYgKHRleHR1cmUxU2l6ZS53aWR0aCA+IHRleHR1cmUyU2l6ZS53aWR0aCkge1xyXG4gICAgICAgICAgICBpZiAodGV4dHVyZTIgJiYgdGV4dHVyZTIgaW5zdGFuY2VvZiBUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICByZXNpemVkVGV4dHVyZTIgPSBUZXh0dXJlVG9vbHMuQ3JlYXRlUmVzaXplZENvcHkodGV4dHVyZTIsIHRleHR1cmUxU2l6ZS53aWR0aCwgdGV4dHVyZTFTaXplLmhlaWdodCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXNpemVkVGV4dHVyZTIgPSB0aGlzLl9jcmVhdGVXaGl0ZVRleHR1cmUodGV4dHVyZTFTaXplLndpZHRoLCB0ZXh0dXJlMVNpemUuaGVpZ2h0LCBzY2VuZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzaXplZFRleHR1cmUxID0gdGV4dHVyZTEhO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlc2l6ZWRUZXh0dXJlMSA9IHRleHR1cmUxITtcclxuICAgICAgICAgICAgcmVzaXplZFRleHR1cmUyID0gdGV4dHVyZTIhO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdGV4dHVyZTE6IHJlc2l6ZWRUZXh0dXJlMSEsXHJcbiAgICAgICAgICAgIHRleHR1cmUyOiByZXNpemVkVGV4dHVyZTIhLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0cyBhbiBhcnJheSBvZiBwaXhlbHMgdG8gYSBGbG9hdDMyQXJyYXlcclxuICAgICAqIFRocm93cyBhbiBlcnJvciBpZiB0aGUgcGl4ZWwgZm9ybWF0IGlzIG5vdCBzdXBwb3J0ZWRcclxuICAgICAqIEBwYXJhbSBwaXhlbHMgLSBhcnJheSBidWZmZXIgY29udGFpbmluZyBwaXhlbCB2YWx1ZXNcclxuICAgICAqIEByZXR1cm5zIEZsb2F0MzIgb2YgcGl4ZWxzXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX2NvbnZlcnRQaXhlbEFycmF5VG9GbG9hdDMyKHBpeGVsczogQXJyYXlCdWZmZXJWaWV3KTogRmxvYXQzMkFycmF5IHtcclxuICAgICAgICBpZiAocGl4ZWxzIGluc3RhbmNlb2YgVWludDhBcnJheSkge1xyXG4gICAgICAgICAgICBjb25zdCBsZW5ndGggPSBwaXhlbHMubGVuZ3RoO1xyXG4gICAgICAgICAgICBjb25zdCBidWZmZXIgPSBuZXcgRmxvYXQzMkFycmF5KHBpeGVscy5sZW5ndGgpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICBidWZmZXJbaV0gPSBwaXhlbHNbaV0gLyAyNTU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGJ1ZmZlcjtcclxuICAgICAgICB9IGVsc2UgaWYgKHBpeGVscyBpbnN0YW5jZW9mIEZsb2F0MzJBcnJheSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcGl4ZWxzO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuc3VwcG9ydGVkIHBpeGVsIGZvcm1hdCFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCBTcGVjdWxhciBHbG9zc2luZXNzIFRleHR1cmVzIHRvIE1ldGFsbGljIFJvdWdobmVzc1xyXG4gICAgICogU2VlIGxpbmsgYmVsb3cgZm9yIGluZm8gb24gdGhlIG1hdGVyaWFsIGNvbnZlcnNpb25zIGZyb20gUEJSIE1ldGFsbGljL1JvdWdobmVzcyBhbmQgU3BlY3VsYXIvR2xvc3NpbmVzc1xyXG4gICAgICogQGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFpbi9leHRlbnNpb25zLzIuMC9BcmNoaXZlZC9LSFJfbWF0ZXJpYWxzX3BiclNwZWN1bGFyR2xvc3NpbmVzcy9leGFtcGxlcy9jb252ZXJ0LWJldHdlZW4td29ya2Zsb3dzLWJqcy9qcy9iYWJ5bG9uLnBiclV0aWxpdGllcy5qc1xyXG4gICAgICogQHBhcmFtIGRpZmZ1c2VUZXh0dXJlIHRleHR1cmUgdXNlZCB0byBzdG9yZSBkaWZmdXNlIGluZm9ybWF0aW9uXHJcbiAgICAgKiBAcGFyYW0gc3BlY3VsYXJHbG9zc2luZXNzVGV4dHVyZSB0ZXh0dXJlIHVzZWQgdG8gc3RvcmUgc3BlY3VsYXIgYW5kIGdsb3NzaW5lc3MgaW5mb3JtYXRpb25cclxuICAgICAqIEBwYXJhbSBmYWN0b3JzIHNwZWN1bGFyIGdsb3NzaW5lc3MgbWF0ZXJpYWwgZmFjdG9yc1xyXG4gICAgICogQHBhcmFtIG1pbWVUeXBlIHRoZSBtaW1lIHR5cGUgdG8gdXNlIGZvciB0aGUgdGV4dHVyZVxyXG4gICAgICogQHJldHVybnMgcGJyIG1ldGFsbGljIHJvdWdobmVzcyBpbnRlcmZhY2Ugb3IgbnVsbFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGFzeW5jIF9jb252ZXJ0U3BlY3VsYXJHbG9zc2luZXNzVGV4dHVyZXNUb01ldGFsbGljUm91Z2huZXNzQXN5bmMoXHJcbiAgICAgICAgZGlmZnVzZVRleHR1cmU6IE51bGxhYmxlPEJhc2VUZXh0dXJlPixcclxuICAgICAgICBzcGVjdWxhckdsb3NzaW5lc3NUZXh0dXJlOiBOdWxsYWJsZTxCYXNlVGV4dHVyZT4sXHJcbiAgICAgICAgZmFjdG9yczogX0lQQlJTcGVjdWxhckdsb3NzaW5lc3MsXHJcbiAgICAgICAgbWltZVR5cGU6IEltYWdlTWltZVR5cGVcclxuICAgICk6IFByb21pc2U8X0lQQlJNZXRhbGxpY1JvdWdobmVzcz4ge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gbmV3IEFycmF5PFByb21pc2U8dm9pZD4+KCk7XHJcbiAgICAgICAgaWYgKCEoZGlmZnVzZVRleHR1cmUgfHwgc3BlY3VsYXJHbG9zc2luZXNzVGV4dHVyZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFwiX0NvbnZlcnRTcGVjdWxhckdsb3NpbmVzc1RleHR1cmVzVG9NZXRhbGxpY1JvdWdobmVzczogZGlmZnVzZSBhbmQgc3BlY3VsYXIgZ2xvc3NpbmVzcyB0ZXh0dXJlcyBhcmUgbm90IGRlZmluZWQhXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc2NlbmU6IE51bGxhYmxlPFNjZW5lPiA9IGRpZmZ1c2VUZXh0dXJlID8gZGlmZnVzZVRleHR1cmUuZ2V0U2NlbmUoKSA6IHNwZWN1bGFyR2xvc3NpbmVzc1RleHR1cmUgPyBzcGVjdWxhckdsb3NzaW5lc3NUZXh0dXJlLmdldFNjZW5lKCkgOiBudWxsO1xyXG4gICAgICAgIGlmIChzY2VuZSkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNpemVkVGV4dHVyZXMgPSB0aGlzLl9yZXNpemVUZXh0dXJlc1RvU2FtZURpbWVuc2lvbnMoZGlmZnVzZVRleHR1cmUsIHNwZWN1bGFyR2xvc3NpbmVzc1RleHR1cmUsIHNjZW5lKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRpZmZ1c2VTaXplID0gcmVzaXplZFRleHR1cmVzLnRleHR1cmUxPy5nZXRTaXplKCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgZGlmZnVzZUJ1ZmZlcjogRmxvYXQzMkFycmF5O1xyXG4gICAgICAgICAgICBsZXQgc3BlY3VsYXJHbG9zc2luZXNzQnVmZmVyOiBGbG9hdDMyQXJyYXk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IGRpZmZ1c2VTaXplLndpZHRoO1xyXG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSBkaWZmdXNlU2l6ZS5oZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkaWZmdXNlUGl4ZWxzID0gYXdhaXQgcmVzaXplZFRleHR1cmVzLnRleHR1cmUxLnJlYWRQaXhlbHMoKTtcclxuICAgICAgICAgICAgY29uc3Qgc3BlY3VsYXJQaXhlbHMgPSBhd2FpdCByZXNpemVkVGV4dHVyZXMudGV4dHVyZTIucmVhZFBpeGVscygpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRpZmZ1c2VQaXhlbHMpIHtcclxuICAgICAgICAgICAgICAgIGRpZmZ1c2VCdWZmZXIgPSB0aGlzLl9jb252ZXJ0UGl4ZWxBcnJheVRvRmxvYXQzMihkaWZmdXNlUGl4ZWxzKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcIkZhaWxlZCB0byByZXRyaWV2ZSBwaXhlbHMgZnJvbSBkaWZmdXNlIHRleHR1cmUhXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzcGVjdWxhclBpeGVscykge1xyXG4gICAgICAgICAgICAgICAgc3BlY3VsYXJHbG9zc2luZXNzQnVmZmVyID0gdGhpcy5fY29udmVydFBpeGVsQXJyYXlUb0Zsb2F0MzIoc3BlY3VsYXJQaXhlbHMpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFwiRmFpbGVkIHRvIHJldHJpZXZlIHBpeGVscyBmcm9tIHNwZWN1bGFyIGdsb3NzaW5lc3MgdGV4dHVyZSFcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGJ5dGVMZW5ndGggPSBzcGVjdWxhckdsb3NzaW5lc3NCdWZmZXIuYnl0ZUxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG1ldGFsbGljUm91Z2huZXNzQnVmZmVyID0gbmV3IFVpbnQ4QXJyYXkoYnl0ZUxlbmd0aCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGJhc2VDb2xvckJ1ZmZlciA9IG5ldyBVaW50OEFycmF5KGJ5dGVMZW5ndGgpO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc3RyaWRlU2l6ZSA9IDQ7XHJcbiAgICAgICAgICAgIGNvbnN0IG1heEJhc2VDb2xvciA9IENvbG9yMy5CbGFjaygpO1xyXG4gICAgICAgICAgICBsZXQgbWF4TWV0YWxsaWMgPSAwO1xyXG4gICAgICAgICAgICBsZXQgbWF4Um91Z2huZXNzID0gMDtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGggPSAwOyBoIDwgaGVpZ2h0OyArK2gpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHcgPSAwOyB3IDwgd2lkdGg7ICsrdykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9mZnNldCA9ICh3aWR0aCAqIGggKyB3KSAqIHN0cmlkZVNpemU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpZmZ1c2VDb2xvciA9IG5ldyBDb2xvcjMoZGlmZnVzZUJ1ZmZlcltvZmZzZXRdLCBkaWZmdXNlQnVmZmVyW29mZnNldCArIDFdLCBkaWZmdXNlQnVmZmVyW29mZnNldCArIDJdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudG9MaW5lYXJTcGFjZShzY2VuZS5nZXRFbmdpbmUoKS51c2VFeGFjdFNyZ2JDb252ZXJzaW9ucylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm11bHRpcGx5KGZhY3RvcnMuZGlmZnVzZUNvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzcGVjdWxhckNvbG9yID0gbmV3IENvbG9yMyhzcGVjdWxhckdsb3NzaW5lc3NCdWZmZXJbb2Zmc2V0XSwgc3BlY3VsYXJHbG9zc2luZXNzQnVmZmVyW29mZnNldCArIDFdLCBzcGVjdWxhckdsb3NzaW5lc3NCdWZmZXJbb2Zmc2V0ICsgMl0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50b0xpbmVhclNwYWNlKHNjZW5lLmdldEVuZ2luZSgpLnVzZUV4YWN0U3JnYkNvbnZlcnNpb25zKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAubXVsdGlwbHkoZmFjdG9ycy5zcGVjdWxhckNvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBnbG9zc2luZXNzID0gc3BlY3VsYXJHbG9zc2luZXNzQnVmZmVyW29mZnNldCArIDNdICogZmFjdG9ycy5nbG9zc2luZXNzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzcGVjdWxhckdsb3NzaW5lc3M6IF9JUEJSU3BlY3VsYXJHbG9zc2luZXNzID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaWZmdXNlQ29sb3I6IGRpZmZ1c2VDb2xvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3BlY3VsYXJDb2xvcjogc3BlY3VsYXJDb2xvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2xvc3NpbmVzczogZ2xvc3NpbmVzcyxcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXRhbGxpY1JvdWdobmVzcyA9IHRoaXMuX2NvbnZlcnRTcGVjdWxhckdsb3NzaW5lc3NUb01ldGFsbGljUm91Z2huZXNzKHNwZWN1bGFyR2xvc3NpbmVzcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4QmFzZUNvbG9yLnIgPSBNYXRoLm1heChtYXhCYXNlQ29sb3IuciwgbWV0YWxsaWNSb3VnaG5lc3MuYmFzZUNvbG9yLnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heEJhc2VDb2xvci5nID0gTWF0aC5tYXgobWF4QmFzZUNvbG9yLmcsIG1ldGFsbGljUm91Z2huZXNzLmJhc2VDb2xvci5nKTtcclxuICAgICAgICAgICAgICAgICAgICBtYXhCYXNlQ29sb3IuYiA9IE1hdGgubWF4KG1heEJhc2VDb2xvci5iLCBtZXRhbGxpY1JvdWdobmVzcy5iYXNlQ29sb3IuYik7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4TWV0YWxsaWMgPSBNYXRoLm1heChtYXhNZXRhbGxpYywgbWV0YWxsaWNSb3VnaG5lc3MubWV0YWxsaWMhKTtcclxuICAgICAgICAgICAgICAgICAgICBtYXhSb3VnaG5lc3MgPSBNYXRoLm1heChtYXhSb3VnaG5lc3MsIG1ldGFsbGljUm91Z2huZXNzLnJvdWdobmVzcyEpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBiYXNlQ29sb3JCdWZmZXJbb2Zmc2V0XSA9IG1ldGFsbGljUm91Z2huZXNzLmJhc2VDb2xvci5yICogMjU1O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhc2VDb2xvckJ1ZmZlcltvZmZzZXQgKyAxXSA9IG1ldGFsbGljUm91Z2huZXNzLmJhc2VDb2xvci5nICogMjU1O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhc2VDb2xvckJ1ZmZlcltvZmZzZXQgKyAyXSA9IG1ldGFsbGljUm91Z2huZXNzLmJhc2VDb2xvci5iICogMjU1O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhc2VDb2xvckJ1ZmZlcltvZmZzZXQgKyAzXSA9IHJlc2l6ZWRUZXh0dXJlcy50ZXh0dXJlMS5oYXNBbHBoYSA/IGRpZmZ1c2VCdWZmZXJbb2Zmc2V0ICsgM10gKiAyNTUgOiAyNTU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG1ldGFsbGljUm91Z2huZXNzQnVmZmVyW29mZnNldF0gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGFsbGljUm91Z2huZXNzQnVmZmVyW29mZnNldCArIDFdID0gbWV0YWxsaWNSb3VnaG5lc3Mucm91Z2huZXNzISAqIDI1NTtcclxuICAgICAgICAgICAgICAgICAgICBtZXRhbGxpY1JvdWdobmVzc0J1ZmZlcltvZmZzZXQgKyAyXSA9IG1ldGFsbGljUm91Z2huZXNzLm1ldGFsbGljISAqIDI1NTtcclxuICAgICAgICAgICAgICAgICAgICBtZXRhbGxpY1JvdWdobmVzc0J1ZmZlcltvZmZzZXQgKyAzXSA9IDI1NTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gUmV0cmlldmVzIHRoZSBtZXRhbGxpYyByb3VnaG5lc3MgZmFjdG9ycyBmcm9tIHRoZSBtYXhpbXVtIHRleHR1cmUgdmFsdWVzLlxyXG4gICAgICAgICAgICBjb25zdCBtZXRhbGxpY1JvdWdobmVzc0ZhY3RvcnM6IF9JUEJSTWV0YWxsaWNSb3VnaG5lc3MgPSB7XHJcbiAgICAgICAgICAgICAgICBiYXNlQ29sb3I6IG1heEJhc2VDb2xvcixcclxuICAgICAgICAgICAgICAgIG1ldGFsbGljOiBtYXhNZXRhbGxpYyxcclxuICAgICAgICAgICAgICAgIHJvdWdobmVzczogbWF4Um91Z2huZXNzLFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgbGV0IHdyaXRlT3V0TWV0YWxsaWNSb3VnaG5lc3NUZXh0dXJlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGxldCB3cml0ZU91dEJhc2VDb2xvclRleHR1cmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGggPSAwOyBoIDwgaGVpZ2h0OyArK2gpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHcgPSAwOyB3IDwgd2lkdGg7ICsrdykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uT2Zmc2V0ID0gKHdpZHRoICogaCArIHcpICogc3RyaWRlU2l6ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZUNvbG9yQnVmZmVyW2Rlc3RpbmF0aW9uT2Zmc2V0XSAvPSBtZXRhbGxpY1JvdWdobmVzc0ZhY3RvcnMuYmFzZUNvbG9yLnIgPiBfR0xURk1hdGVyaWFsRXhwb3J0ZXIuX0Vwc2lsb24gPyBtZXRhbGxpY1JvdWdobmVzc0ZhY3RvcnMuYmFzZUNvbG9yLnIgOiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhc2VDb2xvckJ1ZmZlcltkZXN0aW5hdGlvbk9mZnNldCArIDFdIC89IG1ldGFsbGljUm91Z2huZXNzRmFjdG9ycy5iYXNlQ29sb3IuZyA+IF9HTFRGTWF0ZXJpYWxFeHBvcnRlci5fRXBzaWxvbiA/IG1ldGFsbGljUm91Z2huZXNzRmFjdG9ycy5iYXNlQ29sb3IuZyA6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZUNvbG9yQnVmZmVyW2Rlc3RpbmF0aW9uT2Zmc2V0ICsgMl0gLz0gbWV0YWxsaWNSb3VnaG5lc3NGYWN0b3JzLmJhc2VDb2xvci5iID4gX0dMVEZNYXRlcmlhbEV4cG9ydGVyLl9FcHNpbG9uID8gbWV0YWxsaWNSb3VnaG5lc3NGYWN0b3JzLmJhc2VDb2xvci5iIDogMTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluZWFyQmFzZUNvbG9yUGl4ZWwgPSBDb2xvcjMuRnJvbUludHMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VDb2xvckJ1ZmZlcltkZXN0aW5hdGlvbk9mZnNldF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VDb2xvckJ1ZmZlcltkZXN0aW5hdGlvbk9mZnNldCArIDFdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlQ29sb3JCdWZmZXJbZGVzdGluYXRpb25PZmZzZXQgKyAyXVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc1JHQkJhc2VDb2xvclBpeGVsID0gbGluZWFyQmFzZUNvbG9yUGl4ZWwudG9HYW1tYVNwYWNlKHNjZW5lLmdldEVuZ2luZSgpLnVzZUV4YWN0U3JnYkNvbnZlcnNpb25zKTtcclxuICAgICAgICAgICAgICAgICAgICBiYXNlQ29sb3JCdWZmZXJbZGVzdGluYXRpb25PZmZzZXRdID0gc1JHQkJhc2VDb2xvclBpeGVsLnIgKiAyNTU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZUNvbG9yQnVmZmVyW2Rlc3RpbmF0aW9uT2Zmc2V0ICsgMV0gPSBzUkdCQmFzZUNvbG9yUGl4ZWwuZyAqIDI1NTtcclxuICAgICAgICAgICAgICAgICAgICBiYXNlQ29sb3JCdWZmZXJbZGVzdGluYXRpb25PZmZzZXQgKyAyXSA9IHNSR0JCYXNlQ29sb3JQaXhlbC5iICogMjU1O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIV9HTFRGTWF0ZXJpYWxFeHBvcnRlci5fRnV6enlFcXVhbHMoc1JHQkJhc2VDb2xvclBpeGVsLCBDb2xvcjMuV2hpdGUoKSwgX0dMVEZNYXRlcmlhbEV4cG9ydGVyLl9FcHNpbG9uKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3cml0ZU91dEJhc2VDb2xvclRleHR1cmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbWV0YWxsaWNSb3VnaG5lc3NCdWZmZXJbZGVzdGluYXRpb25PZmZzZXQgKyAxXSAvPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRhbGxpY1JvdWdobmVzc0ZhY3RvcnMucm91Z2huZXNzISA+IF9HTFRGTWF0ZXJpYWxFeHBvcnRlci5fRXBzaWxvbiA/IG1ldGFsbGljUm91Z2huZXNzRmFjdG9ycy5yb3VnaG5lc3MhIDogMTtcclxuICAgICAgICAgICAgICAgICAgICBtZXRhbGxpY1JvdWdobmVzc0J1ZmZlcltkZXN0aW5hdGlvbk9mZnNldCArIDJdIC89IG1ldGFsbGljUm91Z2huZXNzRmFjdG9ycy5tZXRhbGxpYyEgPiBfR0xURk1hdGVyaWFsRXhwb3J0ZXIuX0Vwc2lsb24gPyBtZXRhbGxpY1JvdWdobmVzc0ZhY3RvcnMubWV0YWxsaWMhIDogMTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWV0YWxsaWNSb3VnaG5lc3NQaXhlbCA9IENvbG9yMy5Gcm9tSW50cygyNTUsIG1ldGFsbGljUm91Z2huZXNzQnVmZmVyW2Rlc3RpbmF0aW9uT2Zmc2V0ICsgMV0sIG1ldGFsbGljUm91Z2huZXNzQnVmZmVyW2Rlc3RpbmF0aW9uT2Zmc2V0ICsgMl0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIV9HTFRGTWF0ZXJpYWxFeHBvcnRlci5fRnV6enlFcXVhbHMobWV0YWxsaWNSb3VnaG5lc3NQaXhlbCwgQ29sb3IzLldoaXRlKCksIF9HTFRGTWF0ZXJpYWxFeHBvcnRlci5fRXBzaWxvbikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3JpdGVPdXRNZXRhbGxpY1JvdWdobmVzc1RleHR1cmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHdyaXRlT3V0TWV0YWxsaWNSb3VnaG5lc3NUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2dldEltYWdlRGF0YUFzeW5jKG1ldGFsbGljUm91Z2huZXNzQnVmZmVyLCB3aWR0aCwgaGVpZ2h0LCBtaW1lVHlwZSkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRhbGxpY1JvdWdobmVzc0ZhY3RvcnMubWV0YWxsaWNSb3VnaG5lc3NUZXh0dXJlRGF0YSA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHdyaXRlT3V0QmFzZUNvbG9yVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9nZXRJbWFnZURhdGFBc3luYyhiYXNlQ29sb3JCdWZmZXIsIHdpZHRoLCBoZWlnaHQsIG1pbWVUeXBlKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGFsbGljUm91Z2huZXNzRmFjdG9ycy5iYXNlQ29sb3JUZXh0dXJlRGF0YSA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWV0YWxsaWNSb3VnaG5lc3NGYWN0b3JzO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXCJfQ29udmVydFNwZWN1bGFyR2xvc3NpbmVzc1RleHR1cmVzVG9NZXRhbGxpY1JvdWdobmVzczogU2NlbmUgZnJvbSB0ZXh0dXJlcyBpcyBtaXNzaW5nIVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0cyBzcGVjdWxhciBnbG9zc2luZXNzIG1hdGVyaWFsIHByb3BlcnRpZXMgdG8gbWV0YWxsaWMgcm91Z2huZXNzXHJcbiAgICAgKiBAcGFyYW0gc3BlY3VsYXJHbG9zc2luZXNzIGludGVyZmFjZSB3aXRoIHNwZWN1bGFyIGdsb3NzaW5lc3MgbWF0ZXJpYWwgcHJvcGVydGllc1xyXG4gICAgICogQHJldHVybnMgaW50ZXJmYWNlIHdpdGggbWV0YWxsaWMgcm91Z2huZXNzIG1hdGVyaWFsIHByb3BlcnRpZXNcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfY29udmVydFNwZWN1bGFyR2xvc3NpbmVzc1RvTWV0YWxsaWNSb3VnaG5lc3Moc3BlY3VsYXJHbG9zc2luZXNzOiBfSVBCUlNwZWN1bGFyR2xvc3NpbmVzcyk6IF9JUEJSTWV0YWxsaWNSb3VnaG5lc3Mge1xyXG4gICAgICAgIGNvbnN0IGRpZmZ1c2VQZXJjZWl2ZWRCcmlnaHRuZXNzID0gdGhpcy5fZ2V0UGVyY2VpdmVkQnJpZ2h0bmVzcyhzcGVjdWxhckdsb3NzaW5lc3MuZGlmZnVzZUNvbG9yKTtcclxuICAgICAgICBjb25zdCBzcGVjdWxhclBlcmNlaXZlZEJyaWdodG5lc3MgPSB0aGlzLl9nZXRQZXJjZWl2ZWRCcmlnaHRuZXNzKHNwZWN1bGFyR2xvc3NpbmVzcy5zcGVjdWxhckNvbG9yKTtcclxuICAgICAgICBjb25zdCBvbmVNaW51c1NwZWN1bGFyU3RyZW5ndGggPSAxIC0gdGhpcy5fZ2V0TWF4Q29tcG9uZW50KHNwZWN1bGFyR2xvc3NpbmVzcy5zcGVjdWxhckNvbG9yKTtcclxuICAgICAgICBjb25zdCBtZXRhbGxpYyA9IF9HTFRGTWF0ZXJpYWxFeHBvcnRlci5fU29sdmVNZXRhbGxpYyhkaWZmdXNlUGVyY2VpdmVkQnJpZ2h0bmVzcywgc3BlY3VsYXJQZXJjZWl2ZWRCcmlnaHRuZXNzLCBvbmVNaW51c1NwZWN1bGFyU3RyZW5ndGgpO1xyXG4gICAgICAgIGNvbnN0IGJhc2VDb2xvckZyb21EaWZmdXNlID0gc3BlY3VsYXJHbG9zc2luZXNzLmRpZmZ1c2VDb2xvci5zY2FsZShcclxuICAgICAgICAgICAgb25lTWludXNTcGVjdWxhclN0cmVuZ3RoIC8gKDEuMCAtIF9HTFRGTWF0ZXJpYWxFeHBvcnRlci5fRGllbGVjdHJpY1NwZWN1bGFyLnIpIC8gTWF0aC5tYXgoMSAtIG1ldGFsbGljLCBfR0xURk1hdGVyaWFsRXhwb3J0ZXIuX0Vwc2lsb24pXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBiYXNlQ29sb3JGcm9tU3BlY3VsYXIgPSBzcGVjdWxhckdsb3NzaW5lc3Muc3BlY3VsYXJDb2xvclxyXG4gICAgICAgICAgICAuc3VidHJhY3QoX0dMVEZNYXRlcmlhbEV4cG9ydGVyLl9EaWVsZWN0cmljU3BlY3VsYXIuc2NhbGUoMSAtIG1ldGFsbGljKSlcclxuICAgICAgICAgICAgLnNjYWxlKDEgLyBNYXRoLm1heChtZXRhbGxpYywgX0dMVEZNYXRlcmlhbEV4cG9ydGVyLl9FcHNpbG9uKSk7XHJcbiAgICAgICAgbGV0IGJhc2VDb2xvciA9IENvbG9yMy5MZXJwKGJhc2VDb2xvckZyb21EaWZmdXNlLCBiYXNlQ29sb3JGcm9tU3BlY3VsYXIsIG1ldGFsbGljICogbWV0YWxsaWMpO1xyXG4gICAgICAgIGJhc2VDb2xvciA9IGJhc2VDb2xvci5jbGFtcFRvUmVmKDAsIDEsIGJhc2VDb2xvcik7XHJcblxyXG4gICAgICAgIGNvbnN0IG1ldGFsbGljUm91Z2huZXNzOiBfSVBCUk1ldGFsbGljUm91Z2huZXNzID0ge1xyXG4gICAgICAgICAgICBiYXNlQ29sb3I6IGJhc2VDb2xvcixcclxuICAgICAgICAgICAgbWV0YWxsaWM6IG1ldGFsbGljLFxyXG4gICAgICAgICAgICByb3VnaG5lc3M6IDEgLSBzcGVjdWxhckdsb3NzaW5lc3MuZ2xvc3NpbmVzcyxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gbWV0YWxsaWNSb3VnaG5lc3M7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxjdWxhdGVzIHRoZSBzdXJmYWNlIHJlZmxlY3RhbmNlLCBpbmRlcGVuZGVudCBvZiBsaWdodGluZyBjb25kaXRpb25zXHJcbiAgICAgKiBAcGFyYW0gY29sb3IgQ29sb3Igc291cmNlIHRvIGNhbGN1bGF0ZSBicmlnaHRuZXNzIGZyb21cclxuICAgICAqIEByZXR1cm5zIG51bWJlciByZXByZXNlbnRpbmcgdGhlIHBlcmNlaXZlZCBicmlnaHRuZXNzLCBvciB6ZXJvIGlmIGNvbG9yIGlzIHVuZGVmaW5lZFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9nZXRQZXJjZWl2ZWRCcmlnaHRuZXNzKGNvbG9yOiBDb2xvcjMpOiBudW1iZXIge1xyXG4gICAgICAgIGlmIChjb2xvcikge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KDAuMjk5ICogY29sb3IuciAqIGNvbG9yLnIgKyAwLjU4NyAqIGNvbG9yLmcgKiBjb2xvci5nICsgMC4xMTQgKiBjb2xvci5iICogY29sb3IuYik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgbWF4aW11bSBjb2xvciBjb21wb25lbnQgdmFsdWVcclxuICAgICAqIEBwYXJhbSBjb2xvclxyXG4gICAgICogQHJldHVybnMgbWF4aW11bSBjb2xvciBjb21wb25lbnQgdmFsdWUsIG9yIHplcm8gaWYgY29sb3IgaXMgbnVsbCBvciB1bmRlZmluZWRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfZ2V0TWF4Q29tcG9uZW50KGNvbG9yOiBDb2xvcjMpOiBudW1iZXIge1xyXG4gICAgICAgIGlmIChjb2xvcikge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoY29sb3IuciwgTWF0aC5tYXgoY29sb3IuZywgY29sb3IuYikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgYSBQQlJNYXRlcmlhbCAoTWV0YWxsaWMvUm91Z2huZXNzKSB0byBNZXRhbGxpYyBSb3VnaG5lc3MgZmFjdG9yc1xyXG4gICAgICogQHBhcmFtIGJhYnlsb25QQlJNYXRlcmlhbCBCSlMgUEJSIE1ldGFsbGljIFJvdWdobmVzcyBNYXRlcmlhbFxyXG4gICAgICogQHBhcmFtIG1pbWVUeXBlIG1pbWUgdHlwZSB0byB1c2UgZm9yIHRoZSB0ZXh0dXJlc1xyXG4gICAgICogQHBhcmFtIGdsVEZQYnJNZXRhbGxpY1JvdWdobmVzcyBnbFRGIFBCUiBNZXRhbGxpYyBSb3VnaG5lc3MgaW50ZXJmYWNlXHJcbiAgICAgKiBAcGFyYW0gaGFzVGV4dHVyZUNvb3JkcyBzcGVjaWZpZXMgaWYgdGV4dHVyZSBjb29yZGluYXRlcyBhcmUgcHJlc2VudCBvbiB0aGUgc3VibWVzaCB0byBkZXRlcm1pbmUgaWYgdGV4dHVyZXMgc2hvdWxkIGJlIGFwcGxpZWRcclxuICAgICAqIEByZXR1cm5zIGdsVEYgUEJSIE1ldGFsbGljIFJvdWdobmVzcyBmYWN0b3JzXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX2NvbnZlcnRNZXRhbFJvdWdoRmFjdG9yc1RvTWV0YWxsaWNSb3VnaG5lc3NBc3luYyhcclxuICAgICAgICBiYWJ5bG9uUEJSTWF0ZXJpYWw6IFBCUkJhc2VNYXRlcmlhbCxcclxuICAgICAgICBtaW1lVHlwZTogSW1hZ2VNaW1lVHlwZSxcclxuICAgICAgICBnbFRGUGJyTWV0YWxsaWNSb3VnaG5lc3M6IElNYXRlcmlhbFBick1ldGFsbGljUm91Z2huZXNzLFxyXG4gICAgICAgIGhhc1RleHR1cmVDb29yZHM6IGJvb2xlYW5cclxuICAgICk6IFByb21pc2U8X0lQQlJNZXRhbGxpY1JvdWdobmVzcz4ge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gW107XHJcbiAgICAgICAgY29uc3QgYmFzZUNvbG9yID0gYmFieWxvblBCUk1hdGVyaWFsLl9hbGJlZG9Db2xvcjtcclxuICAgICAgICBjb25zdCBtZXRhbGxpYyA9IGJhYnlsb25QQlJNYXRlcmlhbC5fbWV0YWxsaWM7XHJcbiAgICAgICAgY29uc3Qgcm91Z2huZXNzID0gYmFieWxvblBCUk1hdGVyaWFsLl9yb3VnaG5lc3M7XHJcbiAgICAgICAgY29uc3QgbWV0YWxsaWNSb3VnaG5lc3M6IF9JUEJSTWV0YWxsaWNSb3VnaG5lc3MgPSB7XHJcbiAgICAgICAgICAgIGJhc2VDb2xvcjogYmFzZUNvbG9yLFxyXG4gICAgICAgICAgICBtZXRhbGxpYzogbWV0YWxsaWMsXHJcbiAgICAgICAgICAgIHJvdWdobmVzczogcm91Z2huZXNzLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmIChoYXNUZXh0dXJlQ29vcmRzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFsYmVkb1RleHR1cmUgPSBiYWJ5bG9uUEJSTWF0ZXJpYWwuX2FsYmVkb1RleHR1cmU7XHJcbiAgICAgICAgICAgIGlmIChhbGJlZG9UZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2V4cG9ydFRleHR1cmVBc3luYyhiYWJ5bG9uUEJSTWF0ZXJpYWwuX2FsYmVkb1RleHR1cmUhLCBtaW1lVHlwZSkudGhlbigoZ2xURlRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdsVEZUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbFRGUGJyTWV0YWxsaWNSb3VnaG5lc3MuYmFzZUNvbG9yVGV4dHVyZSA9IGdsVEZUZXh0dXJlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgbWV0YWxsaWNUZXh0dXJlID0gYmFieWxvblBCUk1hdGVyaWFsLl9tZXRhbGxpY1RleHR1cmU7XHJcbiAgICAgICAgICAgIGlmIChtZXRhbGxpY1RleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXhwb3J0VGV4dHVyZUFzeW5jKG1ldGFsbGljVGV4dHVyZSwgbWltZVR5cGUpLnRoZW4oKGdsVEZUZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnbFRGVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xURlBick1ldGFsbGljUm91Z2huZXNzLm1ldGFsbGljUm91Z2huZXNzVGV4dHVyZSA9IGdsVEZUZXh0dXJlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIG1ldGFsbGljUm91Z2huZXNzO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2dldFRleHR1cmVTYW1wbGVyKHRleHR1cmU6IE51bGxhYmxlPEJhc2VUZXh0dXJlPik6IElTYW1wbGVyIHtcclxuICAgICAgICBjb25zdCBzYW1wbGVyOiBJU2FtcGxlciA9IHt9O1xyXG4gICAgICAgIGlmICghdGV4dHVyZSB8fCAhKHRleHR1cmUgaW5zdGFuY2VvZiBUZXh0dXJlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gc2FtcGxlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHdyYXBTID0gdGhpcy5fZ2V0R0xURlRleHR1cmVXcmFwTW9kZSh0ZXh0dXJlLndyYXBVKTtcclxuICAgICAgICBpZiAod3JhcFMgIT09IFRleHR1cmVXcmFwTW9kZS5SRVBFQVQpIHtcclxuICAgICAgICAgICAgc2FtcGxlci53cmFwUyA9IHdyYXBTO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgd3JhcFQgPSB0aGlzLl9nZXRHTFRGVGV4dHVyZVdyYXBNb2RlKHRleHR1cmUud3JhcFYpO1xyXG4gICAgICAgIGlmICh3cmFwVCAhPT0gVGV4dHVyZVdyYXBNb2RlLlJFUEVBVCkge1xyXG4gICAgICAgICAgICBzYW1wbGVyLndyYXBUID0gd3JhcFQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzd2l0Y2ggKHRleHR1cmUuc2FtcGxpbmdNb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgVGV4dHVyZS5MSU5FQVJfTElORUFSOiB7XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVyLm1hZ0ZpbHRlciA9IFRleHR1cmVNYWdGaWx0ZXIuTElORUFSO1xyXG4gICAgICAgICAgICAgICAgc2FtcGxlci5taW5GaWx0ZXIgPSBUZXh0dXJlTWluRmlsdGVyLkxJTkVBUjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgVGV4dHVyZS5MSU5FQVJfTkVBUkVTVDoge1xyXG4gICAgICAgICAgICAgICAgc2FtcGxlci5tYWdGaWx0ZXIgPSBUZXh0dXJlTWFnRmlsdGVyLkxJTkVBUjtcclxuICAgICAgICAgICAgICAgIHNhbXBsZXIubWluRmlsdGVyID0gVGV4dHVyZU1pbkZpbHRlci5ORUFSRVNUO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBUZXh0dXJlLk5FQVJFU1RfTElORUFSOiB7XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVyLm1hZ0ZpbHRlciA9IFRleHR1cmVNYWdGaWx0ZXIuTkVBUkVTVDtcclxuICAgICAgICAgICAgICAgIHNhbXBsZXIubWluRmlsdGVyID0gVGV4dHVyZU1pbkZpbHRlci5MSU5FQVI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFRleHR1cmUuTkVBUkVTVF9MSU5FQVJfTUlQTElORUFSOiB7XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVyLm1hZ0ZpbHRlciA9IFRleHR1cmVNYWdGaWx0ZXIuTkVBUkVTVDtcclxuICAgICAgICAgICAgICAgIHNhbXBsZXIubWluRmlsdGVyID0gVGV4dHVyZU1pbkZpbHRlci5MSU5FQVJfTUlQTUFQX0xJTkVBUjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgVGV4dHVyZS5ORUFSRVNUX05FQVJFU1Q6IHtcclxuICAgICAgICAgICAgICAgIHNhbXBsZXIubWFnRmlsdGVyID0gVGV4dHVyZU1hZ0ZpbHRlci5ORUFSRVNUO1xyXG4gICAgICAgICAgICAgICAgc2FtcGxlci5taW5GaWx0ZXIgPSBUZXh0dXJlTWluRmlsdGVyLk5FQVJFU1Q7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFRleHR1cmUuTkVBUkVTVF9MSU5FQVJfTUlQTkVBUkVTVDoge1xyXG4gICAgICAgICAgICAgICAgc2FtcGxlci5tYWdGaWx0ZXIgPSBUZXh0dXJlTWFnRmlsdGVyLk5FQVJFU1Q7XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVyLm1pbkZpbHRlciA9IFRleHR1cmVNaW5GaWx0ZXIuTElORUFSX01JUE1BUF9ORUFSRVNUO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBUZXh0dXJlLkxJTkVBUl9ORUFSRVNUX01JUE5FQVJFU1Q6IHtcclxuICAgICAgICAgICAgICAgIHNhbXBsZXIubWFnRmlsdGVyID0gVGV4dHVyZU1hZ0ZpbHRlci5MSU5FQVI7XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVyLm1pbkZpbHRlciA9IFRleHR1cmVNaW5GaWx0ZXIuTkVBUkVTVF9NSVBNQVBfTkVBUkVTVDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgVGV4dHVyZS5MSU5FQVJfTkVBUkVTVF9NSVBMSU5FQVI6IHtcclxuICAgICAgICAgICAgICAgIHNhbXBsZXIubWFnRmlsdGVyID0gVGV4dHVyZU1hZ0ZpbHRlci5MSU5FQVI7XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVyLm1pbkZpbHRlciA9IFRleHR1cmVNaW5GaWx0ZXIuTkVBUkVTVF9NSVBNQVBfTElORUFSO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBUZXh0dXJlLk5FQVJFU1RfTkVBUkVTVF9NSVBMSU5FQVI6IHtcclxuICAgICAgICAgICAgICAgIHNhbXBsZXIubWFnRmlsdGVyID0gVGV4dHVyZU1hZ0ZpbHRlci5ORUFSRVNUO1xyXG4gICAgICAgICAgICAgICAgc2FtcGxlci5taW5GaWx0ZXIgPSBUZXh0dXJlTWluRmlsdGVyLk5FQVJFU1RfTUlQTUFQX0xJTkVBUjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgVGV4dHVyZS5MSU5FQVJfTElORUFSX01JUExJTkVBUjoge1xyXG4gICAgICAgICAgICAgICAgc2FtcGxlci5tYWdGaWx0ZXIgPSBUZXh0dXJlTWFnRmlsdGVyLkxJTkVBUjtcclxuICAgICAgICAgICAgICAgIHNhbXBsZXIubWluRmlsdGVyID0gVGV4dHVyZU1pbkZpbHRlci5MSU5FQVJfTUlQTUFQX0xJTkVBUjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgVGV4dHVyZS5MSU5FQVJfTElORUFSX01JUE5FQVJFU1Q6IHtcclxuICAgICAgICAgICAgICAgIHNhbXBsZXIubWFnRmlsdGVyID0gVGV4dHVyZU1hZ0ZpbHRlci5MSU5FQVI7XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVyLm1pbkZpbHRlciA9IFRleHR1cmVNaW5GaWx0ZXIuTElORUFSX01JUE1BUF9ORUFSRVNUO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBUZXh0dXJlLk5FQVJFU1RfTkVBUkVTVF9NSVBORUFSRVNUOiB7XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVyLm1hZ0ZpbHRlciA9IFRleHR1cmVNYWdGaWx0ZXIuTkVBUkVTVDtcclxuICAgICAgICAgICAgICAgIHNhbXBsZXIubWluRmlsdGVyID0gVGV4dHVyZU1pbkZpbHRlci5ORUFSRVNUX01JUE1BUF9ORUFSRVNUO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBzYW1wbGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2dldEdMVEZUZXh0dXJlV3JhcE1vZGUod3JhcE1vZGU6IG51bWJlcik6IFRleHR1cmVXcmFwTW9kZSB7XHJcbiAgICAgICAgc3dpdGNoICh3cmFwTW9kZSkge1xyXG4gICAgICAgICAgICBjYXNlIFRleHR1cmUuV1JBUF9BRERSRVNTTU9ERToge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFRleHR1cmVXcmFwTW9kZS5SRVBFQVQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBUZXh0dXJlLkNMQU1QX0FERFJFU1NNT0RFOiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gVGV4dHVyZVdyYXBNb2RlLkNMQU1QX1RPX0VER0U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBUZXh0dXJlLk1JUlJPUl9BRERSRVNTTU9ERToge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFRleHR1cmVXcmFwTW9kZS5NSVJST1JFRF9SRVBFQVQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICAgICAgVG9vbHMuRXJyb3IoYFVuc3VwcG9ydGVkIFRleHR1cmUgV3JhcCBNb2RlICR7d3JhcE1vZGV9IWApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFRleHR1cmVXcmFwTW9kZS5SRVBFQVQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IGEgUEJSTWF0ZXJpYWwgKFNwZWN1bGFyL0dsb3NzaW5lc3MpIHRvIE1ldGFsbGljIFJvdWdobmVzcyBmYWN0b3JzXHJcbiAgICAgKiBAcGFyYW0gYmFieWxvblBCUk1hdGVyaWFsIEJKUyBQQlIgTWV0YWxsaWMgUm91Z2huZXNzIE1hdGVyaWFsXHJcbiAgICAgKiBAcGFyYW0gbWltZVR5cGUgbWltZSB0eXBlIHRvIHVzZSBmb3IgdGhlIHRleHR1cmVzXHJcbiAgICAgKiBAcGFyYW0gcGJyTWV0YWxsaWNSb3VnaG5lc3MgZ2xURiBQQlIgTWV0YWxsaWMgUm91Z2huZXNzIGludGVyZmFjZVxyXG4gICAgICogQHBhcmFtIGhhc1RleHR1cmVDb29yZHMgc3BlY2lmaWVzIGlmIHRleHR1cmUgY29vcmRpbmF0ZXMgYXJlIHByZXNlbnQgb24gdGhlIHN1Ym1lc2ggdG8gZGV0ZXJtaW5lIGlmIHRleHR1cmVzIHNob3VsZCBiZSBhcHBsaWVkXHJcbiAgICAgKiBAcmV0dXJucyBnbFRGIFBCUiBNZXRhbGxpYyBSb3VnaG5lc3MgZmFjdG9yc1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9jb252ZXJ0U3BlY0dsb3NzRmFjdG9yc1RvTWV0YWxsaWNSb3VnaG5lc3NBc3luYyhcclxuICAgICAgICBiYWJ5bG9uUEJSTWF0ZXJpYWw6IFBCUkJhc2VNYXRlcmlhbCxcclxuICAgICAgICBtaW1lVHlwZTogSW1hZ2VNaW1lVHlwZSxcclxuICAgICAgICBwYnJNZXRhbGxpY1JvdWdobmVzczogSU1hdGVyaWFsUGJyTWV0YWxsaWNSb3VnaG5lc3MsXHJcbiAgICAgICAgaGFzVGV4dHVyZUNvb3JkczogYm9vbGVhblxyXG4gICAgKTogUHJvbWlzZTxfSVBCUk1ldGFsbGljUm91Z2huZXNzPiB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzcGVjR2xvc3M6IF9JUEJSU3BlY3VsYXJHbG9zc2luZXNzID0ge1xyXG4gICAgICAgICAgICAgICAgZGlmZnVzZUNvbG9yOiBiYWJ5bG9uUEJSTWF0ZXJpYWwuX2FsYmVkb0NvbG9yLFxyXG4gICAgICAgICAgICAgICAgc3BlY3VsYXJDb2xvcjogYmFieWxvblBCUk1hdGVyaWFsLl9yZWZsZWN0aXZpdHlDb2xvcixcclxuICAgICAgICAgICAgICAgIGdsb3NzaW5lc3M6IGJhYnlsb25QQlJNYXRlcmlhbC5fbWljcm9TdXJmYWNlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zdCBhbGJlZG9UZXh0dXJlID0gYmFieWxvblBCUk1hdGVyaWFsLl9hbGJlZG9UZXh0dXJlO1xyXG4gICAgICAgICAgICBjb25zdCByZWZsZWN0aXZpdHlUZXh0dXJlID0gYmFieWxvblBCUk1hdGVyaWFsLl9yZWZsZWN0aXZpdHlUZXh0dXJlO1xyXG4gICAgICAgICAgICBjb25zdCB1c2VNaWNyb3N1cmZhY2VGcm9tUmVmbGVjdGl2aXR5TWFwQWxwaGEgPSBiYWJ5bG9uUEJSTWF0ZXJpYWwuX3VzZU1pY3JvU3VyZmFjZUZyb21SZWZsZWN0aXZpdHlNYXBBbHBoYTtcclxuICAgICAgICAgICAgaWYgKHJlZmxlY3Rpdml0eVRleHR1cmUgJiYgIXVzZU1pY3Jvc3VyZmFjZUZyb21SZWZsZWN0aXZpdHlNYXBBbHBoYSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFwiX0NvbnZlcnRQQlJNYXRlcmlhbDogR2xvc3NpbmVzcyB2YWx1ZXMgbm90IGluY2x1ZGVkIGluIHRoZSByZWZsZWN0aXZpdHkgdGV4dHVyZSBhcmUgY3VycmVudGx5IG5vdCBzdXBwb3J0ZWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKChhbGJlZG9UZXh0dXJlIHx8IHJlZmxlY3Rpdml0eVRleHR1cmUpICYmIGhhc1RleHR1cmVDb29yZHMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNhbXBsZXJJbmRleCA9IHRoaXMuX2V4cG9ydFRleHR1cmVTYW1wbGVyKGFsYmVkb1RleHR1cmUgfHwgcmVmbGVjdGl2aXR5VGV4dHVyZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fY29udmVydFNwZWN1bGFyR2xvc3NpbmVzc1RleHR1cmVzVG9NZXRhbGxpY1JvdWdobmVzc0FzeW5jKGFsYmVkb1RleHR1cmUsIHJlZmxlY3Rpdml0eVRleHR1cmUsIHNwZWNHbG9zcywgbWltZVR5cGUpLnRoZW4oKG1ldGFsbGljUm91Z2huZXNzRmFjdG9ycykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHR1cmVzID0gdGhpcy5fZXhwb3J0ZXIuX3RleHR1cmVzO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtZXRhbGxpY1JvdWdobmVzc0ZhY3RvcnMuYmFzZUNvbG9yVGV4dHVyZURhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1hZ2VJbmRleCA9IHRoaXMuX2V4cG9ydEltYWdlKGBiYXNlQ29sb3Ike3RleHR1cmVzLmxlbmd0aH1gLCBtaW1lVHlwZSwgbWV0YWxsaWNSb3VnaG5lc3NGYWN0b3JzLmJhc2VDb2xvclRleHR1cmVEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGJyTWV0YWxsaWNSb3VnaG5lc3MuYmFzZUNvbG9yVGV4dHVyZSA9IHRoaXMuX2V4cG9ydFRleHR1cmVJbmZvKGltYWdlSW5kZXgsIHNhbXBsZXJJbmRleCwgYWxiZWRvVGV4dHVyZT8uY29vcmRpbmF0ZXNJbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtZXRhbGxpY1JvdWdobmVzc0ZhY3RvcnMubWV0YWxsaWNSb3VnaG5lc3NUZXh0dXJlRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWFnZUluZGV4ID0gdGhpcy5fZXhwb3J0SW1hZ2UoYG1ldGFsbGljUm91Z2huZXNzJHt0ZXh0dXJlcy5sZW5ndGh9YCwgbWltZVR5cGUsIG1ldGFsbGljUm91Z2huZXNzRmFjdG9ycy5tZXRhbGxpY1JvdWdobmVzc1RleHR1cmVEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGJyTWV0YWxsaWNSb3VnaG5lc3MubWV0YWxsaWNSb3VnaG5lc3NUZXh0dXJlID0gdGhpcy5fZXhwb3J0VGV4dHVyZUluZm8oaW1hZ2VJbmRleCwgc2FtcGxlckluZGV4LCByZWZsZWN0aXZpdHlUZXh0dXJlPy5jb29yZGluYXRlc0luZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtZXRhbGxpY1JvdWdobmVzc0ZhY3RvcnM7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9jb252ZXJ0U3BlY3VsYXJHbG9zc2luZXNzVG9NZXRhbGxpY1JvdWdobmVzcyhzcGVjR2xvc3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0cyBhIEJhYnlsb24gUEJSIEJhc2UgTWF0ZXJpYWwgdG8gYSBnbFRGIE1hdGVyaWFsXHJcbiAgICAgKiBAcGFyYW0gYmFieWxvblBCUk1hdGVyaWFsIEJKUyBQQlIgQmFzZSBNYXRlcmlhbFxyXG4gICAgICogQHBhcmFtIG1pbWVUeXBlIG1pbWUgdHlwZSB0byB1c2UgZm9yIHRoZSB0ZXh0dXJlc1xyXG4gICAgICogQHBhcmFtIGhhc1RleHR1cmVDb29yZHMgc3BlY2lmaWVzIGlmIHRleHR1cmUgY29vcmRpbmF0ZXMgYXJlIHByZXNlbnQgb24gdGhlIHN1Ym1lc2ggdG8gZGV0ZXJtaW5lIGlmIHRleHR1cmVzIHNob3VsZCBiZSBhcHBsaWVkXHJcbiAgICAgKiBAcmV0dXJucyBhc3luYyBnbFRGIE1hdGVyaWFsIHJlcHJlc2VudGF0aW9uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfY29udmVydFBCUk1hdGVyaWFsQXN5bmMoYmFieWxvblBCUk1hdGVyaWFsOiBQQlJCYXNlTWF0ZXJpYWwsIG1pbWVUeXBlOiBJbWFnZU1pbWVUeXBlLCBoYXNUZXh0dXJlQ29vcmRzOiBib29sZWFuKTogUHJvbWlzZTxJTWF0ZXJpYWw+IHtcclxuICAgICAgICBjb25zdCBnbFRGUGJyTWV0YWxsaWNSb3VnaG5lc3M6IElNYXRlcmlhbFBick1ldGFsbGljUm91Z2huZXNzID0ge307XHJcbiAgICAgICAgY29uc3QgZ2xURk1hdGVyaWFsOiBJTWF0ZXJpYWwgPSB7XHJcbiAgICAgICAgICAgIG5hbWU6IGJhYnlsb25QQlJNYXRlcmlhbC5uYW1lLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgdXNlTWV0YWxsaWNSb3VnaG5lc3MgPSBiYWJ5bG9uUEJSTWF0ZXJpYWwuaXNNZXRhbGxpY1dvcmtmbG93KCk7XHJcblxyXG4gICAgICAgIGlmICh1c2VNZXRhbGxpY1JvdWdobmVzcykge1xyXG4gICAgICAgICAgICBjb25zdCBhbGJlZG9Db2xvciA9IGJhYnlsb25QQlJNYXRlcmlhbC5fYWxiZWRvQ29sb3I7XHJcbiAgICAgICAgICAgIGNvbnN0IGFscGhhID0gYmFieWxvblBCUk1hdGVyaWFsLmFscGhhO1xyXG4gICAgICAgICAgICBpZiAoYWxiZWRvQ29sb3IpIHtcclxuICAgICAgICAgICAgICAgIGdsVEZQYnJNZXRhbGxpY1JvdWdobmVzcy5iYXNlQ29sb3JGYWN0b3IgPSBbYWxiZWRvQ29sb3IuciwgYWxiZWRvQ29sb3IuZywgYWxiZWRvQ29sb3IuYiwgYWxwaGFdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jb252ZXJ0TWV0YWxSb3VnaEZhY3RvcnNUb01ldGFsbGljUm91Z2huZXNzQXN5bmMoYmFieWxvblBCUk1hdGVyaWFsLCBtaW1lVHlwZSwgZ2xURlBick1ldGFsbGljUm91Z2huZXNzLCBoYXNUZXh0dXJlQ29vcmRzKS50aGVuKChtZXRhbGxpY1JvdWdobmVzcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NldE1ldGFsbGljUm91Z2huZXNzUGJyTWF0ZXJpYWwobWV0YWxsaWNSb3VnaG5lc3MsIGJhYnlsb25QQlJNYXRlcmlhbCwgZ2xURk1hdGVyaWFsLCBnbFRGUGJyTWV0YWxsaWNSb3VnaG5lc3MsIG1pbWVUeXBlLCBoYXNUZXh0dXJlQ29vcmRzKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbnZlcnRTcGVjR2xvc3NGYWN0b3JzVG9NZXRhbGxpY1JvdWdobmVzc0FzeW5jKGJhYnlsb25QQlJNYXRlcmlhbCwgbWltZVR5cGUsIGdsVEZQYnJNZXRhbGxpY1JvdWdobmVzcywgaGFzVGV4dHVyZUNvb3JkcykudGhlbigobWV0YWxsaWNSb3VnaG5lc3MpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9zZXRNZXRhbGxpY1JvdWdobmVzc1Bick1hdGVyaWFsKG1ldGFsbGljUm91Z2huZXNzLCBiYWJ5bG9uUEJSTWF0ZXJpYWwsIGdsVEZNYXRlcmlhbCwgZ2xURlBick1ldGFsbGljUm91Z2huZXNzLCBtaW1lVHlwZSwgaGFzVGV4dHVyZUNvb3Jkcyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9zZXRNZXRhbGxpY1JvdWdobmVzc1Bick1hdGVyaWFsKFxyXG4gICAgICAgIG1ldGFsbGljUm91Z2huZXNzOiBOdWxsYWJsZTxfSVBCUk1ldGFsbGljUm91Z2huZXNzPixcclxuICAgICAgICBiYWJ5bG9uUEJSTWF0ZXJpYWw6IFBCUkJhc2VNYXRlcmlhbCxcclxuICAgICAgICBnbFRGTWF0ZXJpYWw6IElNYXRlcmlhbCxcclxuICAgICAgICBnbFRGUGJyTWV0YWxsaWNSb3VnaG5lc3M6IElNYXRlcmlhbFBick1ldGFsbGljUm91Z2huZXNzLFxyXG4gICAgICAgIG1pbWVUeXBlOiBJbWFnZU1pbWVUeXBlLFxyXG4gICAgICAgIGhhc1RleHR1cmVDb29yZHM6IGJvb2xlYW5cclxuICAgICk6IFByb21pc2U8SU1hdGVyaWFsPiB7XHJcbiAgICAgICAgY29uc3QgbWF0ZXJpYWxNYXAgPSB0aGlzLl9leHBvcnRlci5fbWF0ZXJpYWxNYXA7XHJcbiAgICAgICAgY29uc3QgbWF0ZXJpYWxzID0gdGhpcy5fZXhwb3J0ZXIuX21hdGVyaWFscztcclxuICAgICAgICBjb25zdCBwcm9taXNlcyA9IFtdO1xyXG4gICAgICAgIGlmIChtZXRhbGxpY1JvdWdobmVzcykge1xyXG4gICAgICAgICAgICBfR0xURk1hdGVyaWFsRXhwb3J0ZXIuX1NldEFscGhhTW9kZShnbFRGTWF0ZXJpYWwsIGJhYnlsb25QQlJNYXRlcmlhbCBhcyBQQlJNYXRlcmlhbCk7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICEoXHJcbiAgICAgICAgICAgICAgICAgICAgX0dMVEZNYXRlcmlhbEV4cG9ydGVyLl9GdXp6eUVxdWFscyhtZXRhbGxpY1JvdWdobmVzcy5iYXNlQ29sb3IsIENvbG9yMy5XaGl0ZSgpLCBfR0xURk1hdGVyaWFsRXhwb3J0ZXIuX0Vwc2lsb24pICYmXHJcbiAgICAgICAgICAgICAgICAgICAgYmFieWxvblBCUk1hdGVyaWFsLmFscGhhID49IF9HTFRGTWF0ZXJpYWxFeHBvcnRlci5fRXBzaWxvblxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIGdsVEZQYnJNZXRhbGxpY1JvdWdobmVzcy5iYXNlQ29sb3JGYWN0b3IgPSBbbWV0YWxsaWNSb3VnaG5lc3MuYmFzZUNvbG9yLnIsIG1ldGFsbGljUm91Z2huZXNzLmJhc2VDb2xvci5nLCBtZXRhbGxpY1JvdWdobmVzcy5iYXNlQ29sb3IuYiwgYmFieWxvblBCUk1hdGVyaWFsLmFscGhhXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKG1ldGFsbGljUm91Z2huZXNzLm1ldGFsbGljICE9IG51bGwgJiYgbWV0YWxsaWNSb3VnaG5lc3MubWV0YWxsaWMgIT09IDEpIHtcclxuICAgICAgICAgICAgICAgIGdsVEZQYnJNZXRhbGxpY1JvdWdobmVzcy5tZXRhbGxpY0ZhY3RvciA9IG1ldGFsbGljUm91Z2huZXNzLm1ldGFsbGljO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChtZXRhbGxpY1JvdWdobmVzcy5yb3VnaG5lc3MgIT0gbnVsbCAmJiBtZXRhbGxpY1JvdWdobmVzcy5yb3VnaG5lc3MgIT09IDEpIHtcclxuICAgICAgICAgICAgICAgIGdsVEZQYnJNZXRhbGxpY1JvdWdobmVzcy5yb3VnaG5lc3NGYWN0b3IgPSBtZXRhbGxpY1JvdWdobmVzcy5yb3VnaG5lc3M7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChiYWJ5bG9uUEJSTWF0ZXJpYWwuYmFja0ZhY2VDdWxsaW5nICE9IG51bGwgJiYgIWJhYnlsb25QQlJNYXRlcmlhbC5iYWNrRmFjZUN1bGxpbmcpIHtcclxuICAgICAgICAgICAgICAgIGlmICghYmFieWxvblBCUk1hdGVyaWFsLl90d29TaWRlZExpZ2h0aW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgVG9vbHMuV2FybihiYWJ5bG9uUEJSTWF0ZXJpYWwubmFtZSArIFwiOiBCYWNrLWZhY2UgY3VsbGluZyBkaXNhYmxlZCBhbmQgdHdvLXNpZGVkIGxpZ2h0aW5nIGRpc2FibGVkIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZ2xURi5cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBnbFRGTWF0ZXJpYWwuZG91YmxlU2lkZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoaGFzVGV4dHVyZUNvb3Jkcykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYnVtcFRleHR1cmUgPSBiYWJ5bG9uUEJSTWF0ZXJpYWwuX2J1bXBUZXh0dXJlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJ1bXBUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IHRoaXMuX2V4cG9ydFRleHR1cmVBc3luYyhidW1wVGV4dHVyZSwgbWltZVR5cGUpLnRoZW4oKGdsVEZUZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnbFRGVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xURk1hdGVyaWFsLm5vcm1hbFRleHR1cmUgPSBnbFRGVGV4dHVyZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChidW1wVGV4dHVyZS5sZXZlbCAhPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsVEZNYXRlcmlhbC5ub3JtYWxUZXh0dXJlLnNjYWxlID0gYnVtcFRleHR1cmUubGV2ZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKHByb21pc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgYW1iaWVudFRleHR1cmUgPSBiYWJ5bG9uUEJSTWF0ZXJpYWwuX2FtYmllbnRUZXh0dXJlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFtYmllbnRUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IHRoaXMuX2V4cG9ydFRleHR1cmVBc3luYyhhbWJpZW50VGV4dHVyZSwgbWltZVR5cGUpLnRoZW4oKGdsVEZUZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnbFRGVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2NjbHVzaW9uVGV4dHVyZTogSU1hdGVyaWFsT2NjbHVzaW9uVGV4dHVyZUluZm8gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGdsVEZUZXh0dXJlLmluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleENvb3JkOiBnbFRGVGV4dHVyZS50ZXhDb29yZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHRlbnNpb25zOiBnbFRGVGV4dHVyZS5leHRlbnNpb25zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbFRGTWF0ZXJpYWwub2NjbHVzaW9uVGV4dHVyZSA9IG9jY2x1c2lvblRleHR1cmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhbWJpZW50VGV4dHVyZVN0cmVuZ3RoID0gYmFieWxvblBCUk1hdGVyaWFsLl9hbWJpZW50VGV4dHVyZVN0cmVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFtYmllbnRUZXh0dXJlU3RyZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvY2NsdXNpb25UZXh0dXJlLnN0cmVuZ3RoID0gYW1iaWVudFRleHR1cmVTdHJlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2gocHJvbWlzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbWlzc2l2ZVRleHR1cmUgPSBiYWJ5bG9uUEJSTWF0ZXJpYWwuX2VtaXNzaXZlVGV4dHVyZTtcclxuICAgICAgICAgICAgICAgIGlmIChlbWlzc2l2ZVRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9taXNlID0gdGhpcy5fZXhwb3J0VGV4dHVyZUFzeW5jKGVtaXNzaXZlVGV4dHVyZSwgbWltZVR5cGUpLnRoZW4oKGdsVEZUZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnbFRGVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xURk1hdGVyaWFsLmVtaXNzaXZlVGV4dHVyZSA9IGdsVEZUZXh0dXJlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChwcm9taXNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBlbWlzc2l2ZUNvbG9yID0gYmFieWxvblBCUk1hdGVyaWFsLl9lbWlzc2l2ZUNvbG9yO1xyXG4gICAgICAgICAgICBpZiAoIV9HTFRGTWF0ZXJpYWxFeHBvcnRlci5fRnV6enlFcXVhbHMoZW1pc3NpdmVDb2xvciwgQ29sb3IzLkJsYWNrKCksIF9HTFRGTWF0ZXJpYWxFeHBvcnRlci5fRXBzaWxvbikpIHtcclxuICAgICAgICAgICAgICAgIGdsVEZNYXRlcmlhbC5lbWlzc2l2ZUZhY3RvciA9IGVtaXNzaXZlQ29sb3IuYXNBcnJheSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBnbFRGTWF0ZXJpYWwucGJyTWV0YWxsaWNSb3VnaG5lc3MgPSBnbFRGUGJyTWV0YWxsaWNSb3VnaG5lc3M7XHJcbiAgICAgICAgICAgIG1hdGVyaWFscy5wdXNoKGdsVEZNYXRlcmlhbCk7XHJcbiAgICAgICAgICAgIG1hdGVyaWFsTWFwW2JhYnlsb25QQlJNYXRlcmlhbC51bmlxdWVJZF0gPSBtYXRlcmlhbHMubGVuZ3RoIC0gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9maW5pc2hNYXRlcmlhbChwcm9taXNlcywgZ2xURk1hdGVyaWFsLCBiYWJ5bG9uUEJSTWF0ZXJpYWwsIG1pbWVUeXBlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9nZXRQaXhlbHNGcm9tVGV4dHVyZShiYWJ5bG9uVGV4dHVyZTogQmFzZVRleHR1cmUpOiBQcm9taXNlPE51bGxhYmxlPFVpbnQ4QXJyYXkgfCBGbG9hdDMyQXJyYXk+PiB7XHJcbiAgICAgICAgY29uc3QgcGl4ZWxzID1cclxuICAgICAgICAgICAgYmFieWxvblRleHR1cmUudGV4dHVyZVR5cGUgPT09IENvbnN0YW50cy5URVhUVVJFVFlQRV9VTlNJR05FRF9JTlRcclxuICAgICAgICAgICAgICAgID8gKGJhYnlsb25UZXh0dXJlLnJlYWRQaXhlbHMoKSBhcyBQcm9taXNlPFVpbnQ4QXJyYXk+KVxyXG4gICAgICAgICAgICAgICAgOiAoYmFieWxvblRleHR1cmUucmVhZFBpeGVscygpIGFzIFByb21pc2U8RmxvYXQzMkFycmF5Pik7XHJcbiAgICAgICAgcmV0dXJuIHBpeGVscztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEV4dHJhY3RzIGEgdGV4dHVyZSBmcm9tIGEgQmFieWxvbiB0ZXh0dXJlIGludG8gZmlsZSBkYXRhIGFuZCBnbFRGIGRhdGFcclxuICAgICAqIEBwYXJhbSBiYWJ5bG9uVGV4dHVyZSBCYWJ5bG9uIHRleHR1cmUgdG8gZXh0cmFjdFxyXG4gICAgICogQHBhcmFtIG1pbWVUeXBlIE1pbWUgVHlwZSBvZiB0aGUgYmFieWxvblRleHR1cmVcclxuICAgICAqIEByZXR1cm5zIGdsVEYgdGV4dHVyZSBpbmZvLCBvciBudWxsIGlmIHRoZSB0ZXh0dXJlIGZvcm1hdCBpcyBub3Qgc3VwcG9ydGVkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfZXhwb3J0VGV4dHVyZUFzeW5jKGJhYnlsb25UZXh0dXJlOiBCYXNlVGV4dHVyZSwgbWltZVR5cGU6IEltYWdlTWltZVR5cGUpOiBQcm9taXNlPE51bGxhYmxlPElUZXh0dXJlSW5mbz4+IHtcclxuICAgICAgICBjb25zdCBleHRlbnNpb25Qcm9taXNlID0gdGhpcy5fZXhwb3J0ZXIuX2V4dGVuc2lvbnNQcmVFeHBvcnRUZXh0dXJlQXN5bmMoXCJleHBvcnRlclwiLCBiYWJ5bG9uVGV4dHVyZSBhcyBUZXh0dXJlLCBtaW1lVHlwZSk7XHJcbiAgICAgICAgaWYgKCFleHRlbnNpb25Qcm9taXNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9leHBvcnRUZXh0dXJlSW5mb0FzeW5jKGJhYnlsb25UZXh0dXJlLCBtaW1lVHlwZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZXh0ZW5zaW9uUHJvbWlzZS50aGVuKCh0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghdGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2V4cG9ydFRleHR1cmVJbmZvQXN5bmMoYmFieWxvblRleHR1cmUsIG1pbWVUeXBlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZXhwb3J0VGV4dHVyZUluZm9Bc3luYyh0ZXh0dXJlLCBtaW1lVHlwZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIF9leHBvcnRUZXh0dXJlSW5mb0FzeW5jKGJhYnlsb25UZXh0dXJlOiBCYXNlVGV4dHVyZSwgbWltZVR5cGU6IEltYWdlTWltZVR5cGUpOiBQcm9taXNlPE51bGxhYmxlPElUZXh0dXJlSW5mbz4+IHtcclxuICAgICAgICBjb25zdCB0ZXh0dXJlVWlkID0gYmFieWxvblRleHR1cmUudWlkO1xyXG4gICAgICAgIGlmICghKHRleHR1cmVVaWQgaW4gdGhpcy5fdGV4dHVyZU1hcCkpIHtcclxuICAgICAgICAgICAgY29uc3QgcGl4ZWxzID0gYXdhaXQgdGhpcy5fZ2V0UGl4ZWxzRnJvbVRleHR1cmUoYmFieWxvblRleHR1cmUpO1xyXG4gICAgICAgICAgICBpZiAoIXBpeGVscykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNhbXBsZXJJbmRleCA9IHRoaXMuX2V4cG9ydFRleHR1cmVTYW1wbGVyKGJhYnlsb25UZXh0dXJlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFByZXNlcnZlIHRleHR1cmUgbWltZSB0eXBlIGlmIGRlZmluZWRcclxuICAgICAgICAgICAgY29uc3QgdGV4dHVyZU1pbWVUeXBlID0gKGJhYnlsb25UZXh0dXJlIGFzIFRleHR1cmUpLm1pbWVUeXBlO1xyXG4gICAgICAgICAgICBpZiAodGV4dHVyZU1pbWVUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRleHR1cmVNaW1lVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpbWFnZS9qcGVnXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImltYWdlL3BuZ1wiOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpbWFnZS93ZWJwXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbWVUeXBlID0gdGV4dHVyZU1pbWVUeXBlIGFzIEltYWdlTWltZVR5cGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRvb2xzLldhcm4oYFVuc3VwcG9ydGVkIG1lZGlhIHR5cGU6ICR7dGV4dHVyZU1pbWVUeXBlfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgaW50ZXJuYWxUZXh0dXJlVG9JbWFnZSA9IHRoaXMuX2ludGVybmFsVGV4dHVyZVRvSW1hZ2U7XHJcbiAgICAgICAgICAgIGNvbnN0IGludGVybmFsVGV4dHVyZVVuaXF1ZUlkID0gYmFieWxvblRleHR1cmUuZ2V0SW50ZXJuYWxUZXh0dXJlKCkhLnVuaXF1ZUlkO1xyXG4gICAgICAgICAgICBpbnRlcm5hbFRleHR1cmVUb0ltYWdlW2ludGVybmFsVGV4dHVyZVVuaXF1ZUlkXSB8fD0ge307XHJcbiAgICAgICAgICAgIGxldCBpbWFnZUluZGV4UHJvbWlzZSA9IGludGVybmFsVGV4dHVyZVRvSW1hZ2VbaW50ZXJuYWxUZXh0dXJlVW5pcXVlSWRdW21pbWVUeXBlXTtcclxuICAgICAgICAgICAgaWYgKGltYWdlSW5kZXhQcm9taXNlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNpemUgPSBiYWJ5bG9uVGV4dHVyZS5nZXRTaXplKCk7XHJcbiAgICAgICAgICAgICAgICBpbWFnZUluZGV4UHJvbWlzZSA9IChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuX2dldEltYWdlRGF0YUFzeW5jKHBpeGVscywgc2l6ZS53aWR0aCwgc2l6ZS5oZWlnaHQsIG1pbWVUeXBlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZXhwb3J0SW1hZ2UoYmFieWxvblRleHR1cmUubmFtZSwgbWltZVR5cGUsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSkoKTtcclxuICAgICAgICAgICAgICAgIGludGVybmFsVGV4dHVyZVRvSW1hZ2VbaW50ZXJuYWxUZXh0dXJlVW5pcXVlSWRdW21pbWVUeXBlXSA9IGltYWdlSW5kZXhQcm9taXNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0ZXh0dXJlSW5mbyA9IHRoaXMuX2V4cG9ydFRleHR1cmVJbmZvKGF3YWl0IGltYWdlSW5kZXhQcm9taXNlLCBzYW1wbGVySW5kZXgsIGJhYnlsb25UZXh0dXJlLmNvb3JkaW5hdGVzSW5kZXgpO1xyXG4gICAgICAgICAgICB0aGlzLl90ZXh0dXJlTWFwW3RleHR1cmVVaWRdID0gdGV4dHVyZUluZm87XHJcbiAgICAgICAgICAgIHRoaXMuX2V4cG9ydGVyLl9leHRlbnNpb25zUG9zdEV4cG9ydFRleHR1cmVzKFwiZXhwb3J0ZXJcIiwgdGhpcy5fdGV4dHVyZU1hcFt0ZXh0dXJlVWlkXSwgYmFieWxvblRleHR1cmUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RleHR1cmVNYXBbdGV4dHVyZVVpZF07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZXhwb3J0SW1hZ2UobmFtZTogc3RyaW5nLCBtaW1lVHlwZTogSW1hZ2VNaW1lVHlwZSwgZGF0YTogQXJyYXlCdWZmZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IGltYWdlRGF0YSA9IHRoaXMuX2V4cG9ydGVyLl9pbWFnZURhdGE7XHJcblxyXG4gICAgICAgIGNvbnN0IGJhc2VOYW1lID0gbmFtZS5yZXBsYWNlKC9cXC5cXC98XFwvfFxcLlxcXFx8XFxcXC9nLCBcIl9cIik7XHJcbiAgICAgICAgY29uc3QgZXh0ZW5zaW9uID0gZ2V0RmlsZUV4dGVuc2lvbkZyb21NaW1lVHlwZShtaW1lVHlwZSk7XHJcbiAgICAgICAgbGV0IGZpbGVOYW1lID0gYmFzZU5hbWUgKyBleHRlbnNpb247XHJcbiAgICAgICAgaWYgKGZpbGVOYW1lIGluIGltYWdlRGF0YSkge1xyXG4gICAgICAgICAgICBmaWxlTmFtZSA9IGAke2Jhc2VOYW1lfV8ke1Rvb2xzLlJhbmRvbUlkKCl9JHtleHRlbnNpb259YDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGltYWdlRGF0YVtmaWxlTmFtZV0gPSB7XHJcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgIG1pbWVUeXBlOiBtaW1lVHlwZSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBpbWFnZXMgPSB0aGlzLl9leHBvcnRlci5faW1hZ2VzO1xyXG4gICAgICAgIGltYWdlcy5wdXNoKHtcclxuICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgdXJpOiBmaWxlTmFtZSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGltYWdlcy5sZW5ndGggLSAxO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2V4cG9ydFRleHR1cmVJbmZvKGltYWdlSW5kZXg6IG51bWJlciwgc2FtcGxlckluZGV4OiBudW1iZXIsIGNvb3JkaW5hdGVzSW5kZXg/OiBudW1iZXIpOiBJVGV4dHVyZUluZm8ge1xyXG4gICAgICAgIGNvbnN0IHRleHR1cmVzID0gdGhpcy5fZXhwb3J0ZXIuX3RleHR1cmVzO1xyXG4gICAgICAgIGxldCB0ZXh0dXJlSW5kZXggPSB0ZXh0dXJlcy5maW5kSW5kZXgoKHQpID0+IHQuc2FtcGxlciA9PSBzYW1wbGVySW5kZXggJiYgdC5zb3VyY2UgPT09IGltYWdlSW5kZXgpO1xyXG4gICAgICAgIGlmICh0ZXh0dXJlSW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRleHR1cmVJbmRleCA9IHRleHR1cmVzLmxlbmd0aDtcclxuICAgICAgICAgICAgdGV4dHVyZXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2U6IGltYWdlSW5kZXgsXHJcbiAgICAgICAgICAgICAgICBzYW1wbGVyOiBzYW1wbGVySW5kZXgsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdGV4dHVyZUluZm86IElUZXh0dXJlSW5mbyA9IHsgaW5kZXg6IHRleHR1cmVJbmRleCB9O1xyXG4gICAgICAgIGlmIChjb29yZGluYXRlc0luZGV4KSB7XHJcbiAgICAgICAgICAgIHRleHR1cmVJbmZvLnRleENvb3JkID0gY29vcmRpbmF0ZXNJbmRleDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRleHR1cmVJbmZvO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2V4cG9ydFRleHR1cmVTYW1wbGVyKHRleHR1cmU6IE51bGxhYmxlPEJhc2VUZXh0dXJlPik6IG51bWJlciB7XHJcbiAgICAgICAgY29uc3Qgc2FtcGxlciA9IHRoaXMuX2dldFRleHR1cmVTYW1wbGVyKHRleHR1cmUpO1xyXG5cclxuICAgICAgICAvLyBpZiBhIHByZS1leGlzdGluZyBzYW1wbGVyIHdpdGggaWRlbnRpY2FsIHBhcmFtZXRlcnMgZXhpc3RzLCB0aGVuIHJldXNlIHRoZSBwcmV2aW91cyBzYW1wbGVyXHJcbiAgICAgICAgY29uc3Qgc2FtcGxlcnMgPSB0aGlzLl9leHBvcnRlci5fc2FtcGxlcnM7XHJcbiAgICAgICAgY29uc3Qgc2FtcGxlckluZGV4ID0gc2FtcGxlcnMuZmluZEluZGV4KFxyXG4gICAgICAgICAgICAocykgPT4gcy5taW5GaWx0ZXIgPT09IHNhbXBsZXIubWluRmlsdGVyICYmIHMubWFnRmlsdGVyID09PSBzYW1wbGVyLm1hZ0ZpbHRlciAmJiBzLndyYXBTID09PSBzYW1wbGVyLndyYXBTICYmIHMud3JhcFQgPT09IHNhbXBsZXIud3JhcFRcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmIChzYW1wbGVySW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzYW1wbGVySW5kZXg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzYW1wbGVycy5wdXNoKHNhbXBsZXIpO1xyXG4gICAgICAgIHJldHVybiBzYW1wbGVycy5sZW5ndGggLSAxO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB0eXBlIHsgTm9kZSB9IGZyb20gXCJjb3JlL25vZGVcIjtcclxuaW1wb3J0IHR5cGUgeyBTY2VuZSB9IGZyb20gXCJjb3JlL3NjZW5lXCI7XHJcbmltcG9ydCB0eXBlIHsgQW5pbWF0aW9uIH0gZnJvbSBcImNvcmUvQW5pbWF0aW9ucy9hbmltYXRpb25cIjtcclxuaW1wb3J0IHR5cGUgeyBHTFRGRGF0YSB9IGZyb20gXCIuL2dsVEZEYXRhXCI7XHJcbmltcG9ydCB7IF9FeHBvcnRlciB9IGZyb20gXCIuL2dsVEZFeHBvcnRlclwiO1xyXG5cclxuLyoqXHJcbiAqIEhvbGRzIGEgY29sbGVjdGlvbiBvZiBleHBvcnRlciBvcHRpb25zIGFuZCBwYXJhbWV0ZXJzXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElFeHBvcnRPcHRpb25zIHtcclxuICAgIC8qKlxyXG4gICAgICogRnVuY3Rpb24gd2hpY2ggaW5kaWNhdGVzIHdoZXRoZXIgYSBiYWJ5bG9uIG5vZGUgc2hvdWxkIGJlIGV4cG9ydGVkIG9yIG5vdFxyXG4gICAgICogQHBhcmFtIG5vZGUgc291cmNlIEJhYnlsb24gbm9kZS4gSXQgaXMgdXNlZCB0byBjaGVjayB3aGV0aGVyIGl0IHNob3VsZCBiZSBleHBvcnRlZCB0byBnbFRGIG9yIG5vdFxyXG4gICAgICogQHJldHVybnMgYm9vbGVhbiwgd2hpY2ggaW5kaWNhdGVzIHdoZXRoZXIgdGhlIG5vZGUgc2hvdWxkIGJlIGV4cG9ydGVkICh0cnVlKSBvciBub3QgKGZhbHNlKVxyXG4gICAgICovXHJcbiAgICBzaG91bGRFeHBvcnROb2RlPyhub2RlOiBOb2RlKTogYm9vbGVhbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEZ1bmN0aW9uIHdoaWNoIGluZGljYXRlcyB3aGV0aGVyIGFuIGFuaW1hdGlvbiBvbiB0aGUgc2NlbmUgc2hvdWxkIGJlIGV4cG9ydGVkIG9yIG5vdFxyXG4gICAgICogQHBhcmFtIGFuaW1hdGlvbiBzb3VyY2UgYW5pbWF0aW9uXHJcbiAgICAgKiBAcmV0dXJucyBib29sZWFuLCB3aGljaCBpbmRpY2F0ZXMgd2hldGhlciB0aGUgYW5pbWF0aW9uIHNob3VsZCBiZSBleHBvcnRlZCAodHJ1ZSkgb3Igbm90IChmYWxzZSlcclxuICAgICAqL1xyXG4gICAgc2hvdWxkRXhwb3J0QW5pbWF0aW9uPyhhbmltYXRpb246IEFuaW1hdGlvbik6IGJvb2xlYW47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGdW5jdGlvbiB1c2VkIHRvIGV4dHJhY3QgdGhlIHBhcnQgb2Ygbm9kZSdzIG1ldGFkYXRhIHRoYXQgd2lsbCBiZSBleHBvcnRlZCBpbnRvIGdsVEYgbm9kZSBleHRyYXNcclxuICAgICAqIEBwYXJhbSBtZXRhZGF0YSBzb3VyY2UgbWV0YWRhdGEgdG8gcmVhZCBmcm9tXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgZGF0YSB0byBzdG9yZSB0byBnbFRGIG5vZGUgZXh0cmFzXHJcbiAgICAgKi9cclxuICAgIG1ldGFkYXRhU2VsZWN0b3I/KG1ldGFkYXRhOiBhbnkpOiBhbnk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgc2FtcGxlIHJhdGUgdG8gYmFrZSBhbmltYXRpb24gY3VydmVzLiBEZWZhdWx0cyB0byAxIC8gNjAuXHJcbiAgICAgKi9cclxuICAgIGFuaW1hdGlvblNhbXBsZVJhdGU/OiBudW1iZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBCZWdpbiBzZXJpYWxpemF0aW9uIHdpdGhvdXQgd2FpdGluZyBmb3IgdGhlIHNjZW5lIHRvIGJlIHJlYWR5LiBEZWZhdWx0cyB0byBmYWxzZS5cclxuICAgICAqL1xyXG4gICAgZXhwb3J0V2l0aG91dFdhaXRpbmdGb3JTY2VuZT86IGJvb2xlYW47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbmRpY2F0ZXMgaWYgdW51c2VkIHZlcnRleCB1diBhdHRyaWJ1dGVzIHNob3VsZCBiZSBpbmNsdWRlZCBpbiBleHBvcnQuIERlZmF1bHRzIHRvIGZhbHNlLlxyXG4gICAgICovXHJcbiAgICBleHBvcnRVbnVzZWRVVnM/OiBib29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlIG5vLW9wIHJvb3Qgbm9kZXMgd2hlbiBwb3NzaWJsZS4gRGVmYXVsdHMgdG8gdHJ1ZS5cclxuICAgICAqL1xyXG4gICAgcmVtb3ZlTm9vcFJvb3ROb2Rlcz86IGJvb2xlYW47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbmRpY2F0ZXMgaWYgY29vcmRpbmF0ZSBzeXN0ZW0gc3dhcHBpbmcgcm9vdCBub2RlcyBzaG91bGQgYmUgaW5jbHVkZWQgaW4gZXhwb3J0LiBEZWZhdWx0cyB0byBmYWxzZS5cclxuICAgICAqIEBkZXByZWNhdGVkIFBsZWFzZSB1c2UgcmVtb3ZlTm9vcFJvb3ROb2RlcyBpbnN0ZWFkXHJcbiAgICAgKi9cclxuICAgIGluY2x1ZGVDb29yZGluYXRlU3lzdGVtQ29udmVyc2lvbk5vZGVzPzogYm9vbGVhbjtcclxufVxyXG5cclxuLyoqXHJcbiAqIENsYXNzIGZvciBnZW5lcmF0aW5nIGdsVEYgZGF0YSBmcm9tIGEgQmFieWxvbiBzY2VuZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBHTFRGMkV4cG9ydCB7XHJcbiAgICAvKipcclxuICAgICAqIEV4cG9ydHMgdGhlIGdlb21ldHJ5IG9mIHRoZSBzY2VuZSB0byAuZ2x0ZiBmaWxlIGZvcm1hdCBhc3luY2hyb25vdXNseVxyXG4gICAgICogQHBhcmFtIHNjZW5lIEJhYnlsb24gc2NlbmUgd2l0aCBzY2VuZSBoaWVyYXJjaHkgaW5mb3JtYXRpb25cclxuICAgICAqIEBwYXJhbSBmaWxlUHJlZml4IEZpbGUgcHJlZml4IHRvIHVzZSB3aGVuIGdlbmVyYXRpbmcgdGhlIGdsVEYgZmlsZVxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgRXhwb3J0ZXIgb3B0aW9uc1xyXG4gICAgICogQHJldHVybnMgUmV0dXJucyBhbiBvYmplY3Qgd2l0aCBhIC5nbHRmIGZpbGUgYW5kIGFzc29jaWF0ZXMgdGV4dHVyZSBuYW1lc1xyXG4gICAgICogYXMga2V5cyBhbmQgdGhlaXIgZGF0YSBhbmQgcGF0aHMgYXMgdmFsdWVzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgR0xURkFzeW5jKHNjZW5lOiBTY2VuZSwgZmlsZVByZWZpeDogc3RyaW5nLCBvcHRpb25zPzogSUV4cG9ydE9wdGlvbnMpOiBQcm9taXNlPEdMVEZEYXRhPiB7XHJcbiAgICAgICAgcmV0dXJuIHNjZW5lLndoZW5SZWFkeUFzeW5jKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdsVEZQcmVmaXggPSBmaWxlUHJlZml4LnJlcGxhY2UoL1xcLlteLy5dKyQvLCBcIlwiKTtcclxuICAgICAgICAgICAgY29uc3QgZ2x0ZkdlbmVyYXRvciA9IG5ldyBfRXhwb3J0ZXIoc2NlbmUsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICByZXR1cm4gZ2x0ZkdlbmVyYXRvci5fZ2VuZXJhdGVHTFRGQXN5bmMoZ2xURlByZWZpeCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX1ByZUV4cG9ydEFzeW5jKHNjZW5lOiBTY2VuZSwgb3B0aW9ucz86IElFeHBvcnRPcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmV4cG9ydFdpdGhvdXRXYWl0aW5nRm9yU2NlbmUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzY2VuZS53aGVuUmVhZHlBc3luYygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX1Bvc3RFeHBvcnRBc3luYyhzY2VuZTogU2NlbmUsIGdsVEZEYXRhOiBHTFRGRGF0YSwgb3B0aW9ucz86IElFeHBvcnRPcHRpb25zKTogUHJvbWlzZTxHTFRGRGF0YT4ge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5leHBvcnRXaXRob3V0V2FpdGluZ0ZvclNjZW5lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2xURkRhdGE7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2xURkRhdGE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEV4cG9ydHMgdGhlIGdlb21ldHJ5IG9mIHRoZSBzY2VuZSB0byAuZ2xiIGZpbGUgZm9ybWF0IGFzeWNocm9ub3VzbHlcclxuICAgICAqIEBwYXJhbSBzY2VuZSBCYWJ5bG9uIHNjZW5lIHdpdGggc2NlbmUgaGllcmFyY2h5IGluZm9ybWF0aW9uXHJcbiAgICAgKiBAcGFyYW0gZmlsZVByZWZpeCBGaWxlIHByZWZpeCB0byB1c2Ugd2hlbiBnZW5lcmF0aW5nIGdsYiBmaWxlXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBFeHBvcnRlciBvcHRpb25zXHJcbiAgICAgKiBAcmV0dXJucyBSZXR1cm5zIGFuIG9iamVjdCB3aXRoIGEgLmdsYiBmaWxlbmFtZSBhcyBrZXkgYW5kIGRhdGEgYXMgdmFsdWVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBHTEJBc3luYyhzY2VuZTogU2NlbmUsIGZpbGVQcmVmaXg6IHN0cmluZywgb3B0aW9ucz86IElFeHBvcnRPcHRpb25zKTogUHJvbWlzZTxHTFRGRGF0YT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9QcmVFeHBvcnRBc3luYyhzY2VuZSwgb3B0aW9ucykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdsVEZQcmVmaXggPSBmaWxlUHJlZml4LnJlcGxhY2UoL1xcLlteLy5dKyQvLCBcIlwiKTtcclxuICAgICAgICAgICAgY29uc3QgZ2x0ZkdlbmVyYXRvciA9IG5ldyBfRXhwb3J0ZXIoc2NlbmUsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICByZXR1cm4gZ2x0ZkdlbmVyYXRvci5fZ2VuZXJhdGVHTEJBc3luYyhnbFRGUHJlZml4KS50aGVuKChnbFRGRGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX1Bvc3RFeHBvcnRBc3luYyhzY2VuZSwgZ2xURkRhdGEsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgdHlwZSB7IElCdWZmZXJWaWV3LCBBY2Nlc3NvckNvbXBvbmVudFR5cGUsIElBY2Nlc3NvciB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgQWNjZXNzb3JUeXBlIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5cclxuaW1wb3J0IHR5cGUgeyBGbG9hdEFycmF5LCBOdWxsYWJsZSB9IGZyb20gXCJjb3JlL3R5cGVzXCI7XHJcbmltcG9ydCB0eXBlIHsgVmVjdG9yNCB9IGZyb20gXCJjb3JlL01hdGhzL21hdGgudmVjdG9yXCI7XHJcbmltcG9ydCB7IFZlY3RvcjMgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLnZlY3RvclwiO1xyXG5cclxuLyoqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIF9HTFRGVXRpbGl0aWVzIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIGJ1ZmZlciB2aWV3IGJhc2VkIG9uIHRoZSBzdXBwbGllZCBhcmd1bWVudHNcclxuICAgICAqIEBwYXJhbSBidWZmZXJJbmRleCBpbmRleCB2YWx1ZSBvZiB0aGUgc3BlY2lmaWVkIGJ1ZmZlclxyXG4gICAgICogQHBhcmFtIGJ5dGVPZmZzZXQgYnl0ZSBvZmZzZXQgdmFsdWVcclxuICAgICAqIEBwYXJhbSBieXRlTGVuZ3RoIGJ5dGUgbGVuZ3RoIG9mIHRoZSBidWZmZXJWaWV3XHJcbiAgICAgKiBAcGFyYW0gYnl0ZVN0cmlkZSBieXRlIGRpc3RhbmNlIGJldHdlZW4gY29uZXF1ZW50aWFsIGVsZW1lbnRzXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBuYW1lIG9mIHRoZSBidWZmZXIgdmlld1xyXG4gICAgICogQHJldHVybnMgYnVmZmVyVmlldyBmb3IgZ2xURlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIF9DcmVhdGVCdWZmZXJWaWV3KGJ1ZmZlckluZGV4OiBudW1iZXIsIGJ5dGVPZmZzZXQ6IG51bWJlciwgYnl0ZUxlbmd0aDogbnVtYmVyLCBieXRlU3RyaWRlPzogbnVtYmVyLCBuYW1lPzogc3RyaW5nKTogSUJ1ZmZlclZpZXcge1xyXG4gICAgICAgIGNvbnN0IGJ1ZmZlcnZpZXc6IElCdWZmZXJWaWV3ID0geyBidWZmZXI6IGJ1ZmZlckluZGV4LCBieXRlTGVuZ3RoOiBieXRlTGVuZ3RoIH07XHJcbiAgICAgICAgaWYgKGJ5dGVPZmZzZXQpIHtcclxuICAgICAgICAgICAgYnVmZmVydmlldy5ieXRlT2Zmc2V0ID0gYnl0ZU9mZnNldDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5hbWUpIHtcclxuICAgICAgICAgICAgYnVmZmVydmlldy5uYW1lID0gbmFtZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGJ5dGVTdHJpZGUpIHtcclxuICAgICAgICAgICAgYnVmZmVydmlldy5ieXRlU3RyaWRlID0gYnl0ZVN0cmlkZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBidWZmZXJ2aWV3O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhbiBhY2Nlc3NvciBiYXNlZCBvbiB0aGUgc3VwcGxpZWQgYXJndW1lbnRzXHJcbiAgICAgKiBAcGFyYW0gYnVmZmVydmlld0luZGV4IFRoZSBpbmRleCBvZiB0aGUgYnVmZmVydmlldyByZWZlcmVuY2VkIGJ5IHRoaXMgYWNjZXNzb3JcclxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBhY2Nlc3NvclxyXG4gICAgICogQHBhcmFtIHR5cGUgVGhlIHR5cGUgb2YgdGhlIGFjY2Vzc29yXHJcbiAgICAgKiBAcGFyYW0gY29tcG9uZW50VHlwZSBUaGUgZGF0YXR5cGUgb2YgY29tcG9uZW50cyBpbiB0aGUgYXR0cmlidXRlXHJcbiAgICAgKiBAcGFyYW0gY291bnQgVGhlIG51bWJlciBvZiBhdHRyaWJ1dGVzIHJlZmVyZW5jZWQgYnkgdGhpcyBhY2Nlc3NvclxyXG4gICAgICogQHBhcmFtIGJ5dGVPZmZzZXQgVGhlIG9mZnNldCByZWxhdGl2ZSB0byB0aGUgc3RhcnQgb2YgdGhlIGJ1ZmZlclZpZXcgaW4gYnl0ZXNcclxuICAgICAqIEBwYXJhbSBtaW4gTWluaW11bSB2YWx1ZSBvZiBlYWNoIGNvbXBvbmVudCBpbiB0aGlzIGF0dHJpYnV0ZVxyXG4gICAgICogQHBhcmFtIG1heCBNYXhpbXVtIHZhbHVlIG9mIGVhY2ggY29tcG9uZW50IGluIHRoaXMgYXR0cmlidXRlXHJcbiAgICAgKiBAcmV0dXJucyBhY2Nlc3NvciBmb3IgZ2xURlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIF9DcmVhdGVBY2Nlc3NvcihcclxuICAgICAgICBidWZmZXJ2aWV3SW5kZXg6IG51bWJlcixcclxuICAgICAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgdHlwZTogQWNjZXNzb3JUeXBlLFxyXG4gICAgICAgIGNvbXBvbmVudFR5cGU6IEFjY2Vzc29yQ29tcG9uZW50VHlwZSxcclxuICAgICAgICBjb3VudDogbnVtYmVyLFxyXG4gICAgICAgIGJ5dGVPZmZzZXQ6IE51bGxhYmxlPG51bWJlcj4sXHJcbiAgICAgICAgbWluOiBOdWxsYWJsZTxudW1iZXJbXT4sXHJcbiAgICAgICAgbWF4OiBOdWxsYWJsZTxudW1iZXJbXT5cclxuICAgICk6IElBY2Nlc3NvciB7XHJcbiAgICAgICAgY29uc3QgYWNjZXNzb3I6IElBY2Nlc3NvciA9IHsgbmFtZTogbmFtZSwgYnVmZmVyVmlldzogYnVmZmVydmlld0luZGV4LCBjb21wb25lbnRUeXBlOiBjb21wb25lbnRUeXBlLCBjb3VudDogY291bnQsIHR5cGU6IHR5cGUgfTtcclxuXHJcbiAgICAgICAgaWYgKG1pbiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGFjY2Vzc29yLm1pbiA9IG1pbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1heCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGFjY2Vzc29yLm1heCA9IG1heDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGJ5dGVPZmZzZXQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBhY2Nlc3Nvci5ieXRlT2Zmc2V0ID0gYnl0ZU9mZnNldDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBhY2Nlc3NvcjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGN1bGF0ZXMgdGhlIG1pbmltdW0gYW5kIG1heGltdW0gdmFsdWVzIG9mIGFuIGFycmF5IG9mIHBvc2l0aW9uIGZsb2F0c1xyXG4gICAgICogQHBhcmFtIHBvc2l0aW9ucyBQb3NpdGlvbnMgYXJyYXkgb2YgYSBtZXNoXHJcbiAgICAgKiBAcGFyYW0gdmVydGV4U3RhcnQgU3RhcnRpbmcgdmVydGV4IG9mZnNldCB0byBjYWxjdWxhdGUgbWluIGFuZCBtYXggdmFsdWVzXHJcbiAgICAgKiBAcGFyYW0gdmVydGV4Q291bnQgTnVtYmVyIG9mIHZlcnRpY2VzIHRvIGNoZWNrIGZvciBtaW4gYW5kIG1heCB2YWx1ZXNcclxuICAgICAqIEByZXR1cm5zIG1pbiBudW1iZXIgYXJyYXkgYW5kIG1heCBudW1iZXIgYXJyYXlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBfQ2FsY3VsYXRlTWluTWF4UG9zaXRpb25zKHBvc2l0aW9uczogRmxvYXRBcnJheSwgdmVydGV4U3RhcnQ6IG51bWJlciwgdmVydGV4Q291bnQ6IG51bWJlcik6IHsgbWluOiBudW1iZXJbXTsgbWF4OiBudW1iZXJbXSB9IHtcclxuICAgICAgICBjb25zdCBtaW4gPSBbSW5maW5pdHksIEluZmluaXR5LCBJbmZpbml0eV07XHJcbiAgICAgICAgY29uc3QgbWF4ID0gWy1JbmZpbml0eSwgLUluZmluaXR5LCAtSW5maW5pdHldO1xyXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uU3RyaWRlU2l6ZSA9IDM7XHJcbiAgICAgICAgbGV0IGluZGV4T2Zmc2V0OiBudW1iZXI7XHJcbiAgICAgICAgbGV0IHBvc2l0aW9uOiBWZWN0b3IzO1xyXG4gICAgICAgIGxldCB2ZWN0b3I6IG51bWJlcltdO1xyXG5cclxuICAgICAgICBpZiAodmVydGV4Q291bnQpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHZlcnRleFN0YXJ0LCBsZW5ndGggPSB2ZXJ0ZXhTdGFydCArIHZlcnRleENvdW50OyBpIDwgbGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgICAgIGluZGV4T2Zmc2V0ID0gcG9zaXRpb25TdHJpZGVTaXplICogaTtcclxuXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IFZlY3RvcjMuRnJvbUFycmF5KHBvc2l0aW9ucywgaW5kZXhPZmZzZXQpO1xyXG4gICAgICAgICAgICAgICAgdmVjdG9yID0gcG9zaXRpb24uYXNBcnJheSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcG9zaXRpb25TdHJpZGVTaXplOyArK2opIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBudW0gPSB2ZWN0b3Jbal07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG51bSA8IG1pbltqXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5bal0gPSBudW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChudW0gPiBtYXhbal0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4W2pdID0gbnVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICArK2luZGV4T2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7IG1pbiwgbWF4IH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBfTm9ybWFsaXplVGFuZ2VudEZyb21SZWYodGFuZ2VudDogVmVjdG9yNCkge1xyXG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IE1hdGguc3FydCh0YW5nZW50LnggKiB0YW5nZW50LnggKyB0YW5nZW50LnkgKiB0YW5nZW50LnkgKyB0YW5nZW50LnogKiB0YW5nZW50LnopO1xyXG4gICAgICAgIGlmIChsZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRhbmdlbnQueCAvPSBsZW5ndGg7XHJcbiAgICAgICAgICAgIHRhbmdlbnQueSAvPSBsZW5ndGg7XHJcbiAgICAgICAgICAgIHRhbmdlbnQueiAvPSBsZW5ndGg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgX0dldERhdGFBY2Nlc3NvckVsZW1lbnRDb3VudChhY2Nlc3NvclR5cGU6IEFjY2Vzc29yVHlwZSkge1xyXG4gICAgICAgIHN3aXRjaCAoYWNjZXNzb3JUeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgQWNjZXNzb3JUeXBlLk1BVDI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gNDtcclxuICAgICAgICAgICAgY2FzZSBBY2Nlc3NvclR5cGUuTUFUMzpcclxuICAgICAgICAgICAgICAgIHJldHVybiA5O1xyXG4gICAgICAgICAgICBjYXNlIEFjY2Vzc29yVHlwZS5NQVQ0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDE2O1xyXG4gICAgICAgICAgICBjYXNlIEFjY2Vzc29yVHlwZS5TQ0FMQVI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICAgICAgY2FzZSBBY2Nlc3NvclR5cGUuVkVDMjpcclxuICAgICAgICAgICAgICAgIHJldHVybiAyO1xyXG4gICAgICAgICAgICBjYXNlIEFjY2Vzc29yVHlwZS5WRUMzOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDM7XHJcbiAgICAgICAgICAgIGNhc2UgQWNjZXNzb3JUeXBlLlZFQzQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gNDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWludGVybmFsLW1vZHVsZXMgKi9cclxuZXhwb3J0ICogZnJvbSBcIi4vZ2xURkFuaW1hdGlvblwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9nbFRGRGF0YVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9nbFRGRXhwb3J0ZXJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vZ2xURkV4cG9ydGVyRXh0ZW5zaW9uXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2dsVEZNYXRlcmlhbEV4cG9ydGVyXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2dsVEZTZXJpYWxpemVyXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2dsVEZVdGlsaXRpZXNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vRXh0ZW5zaW9ucy9pbmRleFwiO1xyXG4iLCIvKiogQGludGVybmFsICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby12YXIsIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgdmFyIF9fSUdMVEZFeHBvcnRlckV4dGVuc2lvbiA9IDA7IC8vIEkgYW0gaGVyZSB0byBhbGxvdyBkdHMgdG8gYmUgY3JlYXRlZFxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgZXh0ZW5kaW5nIHRoZSBleHBvcnRlclxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUdMVEZFeHBvcnRlckV4dGVuc2lvbiB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBuYW1lIG9mIHRoaXMgZXh0ZW5zaW9uXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIGVuYWJsZWRcclxuICAgICAqL1xyXG4gICAgZW5hYmxlZDogYm9vbGVhbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyByZXF1aXJlZFxyXG4gICAgICovXHJcbiAgICByZXF1aXJlZDogYm9vbGVhbjtcclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8taW50ZXJuYWwtbW9kdWxlcyAqL1xyXG5leHBvcnQgKiBmcm9tIFwiLi9nbFRGRmlsZUV4cG9ydGVyXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuLzIuMC9pbmRleFwiO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8taW50ZXJuYWwtbW9kdWxlcyAqL1xyXG5leHBvcnQgKiBmcm9tIFwiLi9PQkovaW5kZXhcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vZ2xURi9pbmRleFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9zdGwvaW5kZXhcIjtcclxuIiwiZXhwb3J0ICogZnJvbSBcIi4vc3RsU2VyaWFsaXplclwiO1xyXG4iLCJpbXBvcnQgeyBNZXNoIH0gZnJvbSBcImNvcmUvTWVzaGVzL21lc2hcIjtcclxuaW1wb3J0IHsgSW5zdGFuY2VkTWVzaCB9IGZyb20gXCJjb3JlL01lc2hlcy9pbnN0YW5jZWRNZXNoXCI7XHJcbmltcG9ydCB7IFZlcnRleEJ1ZmZlciB9IGZyb20gXCJjb3JlL0J1ZmZlcnMvYnVmZmVyXCI7XHJcbmltcG9ydCB7IFZlY3RvcjMgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLnZlY3RvclwiO1xyXG5cclxuLyoqXHJcbiAqIENsYXNzIGZvciBnZW5lcmF0aW5nIFNUTCBkYXRhIGZyb20gYSBCYWJ5bG9uIHNjZW5lLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNUTEV4cG9ydCB7XHJcbiAgICAvKipcclxuICAgICAqIEV4cG9ydHMgdGhlIGdlb21ldHJ5IG9mIGEgTWVzaCBhcnJheSBpbiAuU1RMIGZpbGUgZm9ybWF0IChBU0NJSSlcclxuICAgICAqIEBwYXJhbSBtZXNoZXMgbGlzdCBkZWZpbmVzIHRoZSBtZXNoIHRvIHNlcmlhbGl6ZVxyXG4gICAgICogQHBhcmFtIGRvd25sb2FkIHRyaWdnZXJzIHRoZSBhdXRvbWF0aWMgZG93bmxvYWQgb2YgdGhlIGZpbGUuXHJcbiAgICAgKiBAcGFyYW0gZmlsZU5hbWUgY2hhbmdlcyB0aGUgZG93bmxvYWRzIGZpbGVOYW1lLlxyXG4gICAgICogQHBhcmFtIGJpbmFyeSBjaGFuZ2VzIHRoZSBTVEwgdG8gYSBiaW5hcnkgdHlwZS5cclxuICAgICAqIEBwYXJhbSBpc0xpdHRsZUVuZGlhbiB0b2dnbGUgZm9yIGJpbmFyeSB0eXBlIGV4cG9ydGVyLlxyXG4gICAgICogQHBhcmFtIGRvTm90QmFrZVRyYW5zZm9ybSB0b2dnbGUgaWYgbWVzaGVzIHRyYW5zZm9ybXMgc2hvdWxkIGJlIGJha2VkIG9yIG5vdC5cclxuICAgICAqIEBwYXJhbSBzdXBwb3J0SW5zdGFuY2VkTWVzaGVzIHRvZ2dsZSB0byBleHBvcnQgaW5zdGFuY2VkIE1lc2hlcy4gRW5hYmxpbmcgc3VwcG9ydCBmb3IgaW5zdGFuY2VkIG1lc2hlcyB3aWxsIG92ZXJyaWRlIGRvTm9CYWtlVHJhbnNmb3JtIGFzIHRydWVcclxuICAgICAqIEBwYXJhbSBleHBvcnRJbmRpdmlkdWFsTWVzaGVzIHRvZ2dsZSB0byBleHBvcnQgZWFjaCBtZXNoIGFzIGFuIGluZGVwZW5kZW50IG1lc2guIEJ5IGRlZmF1bHQsIGFsbCB0aGUgbWVzaGVzIGFyZSBjb21iaW5lZCBpbnRvIG9uZSBtZXNoLiBUaGlzIHByb3BlcnR5IGhhcyBubyBlZmZlY3Qgd2hlbiBleHBvcnRpbmcgaW4gYmluYXJ5IGZvcm1hdFxyXG4gICAgICogQHJldHVybnMgdGhlIFNUTCBhcyBVVEY4IHN0cmluZ1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIENyZWF0ZVNUTChcclxuICAgICAgICBtZXNoZXM6IChNZXNoIHwgSW5zdGFuY2VkTWVzaClbXSxcclxuICAgICAgICBkb3dubG9hZDogYm9vbGVhbiA9IHRydWUsXHJcbiAgICAgICAgZmlsZU5hbWU6IHN0cmluZyA9IFwic3RsbWVzaFwiLFxyXG4gICAgICAgIGJpbmFyeTogYm9vbGVhbiA9IGZhbHNlLFxyXG4gICAgICAgIGlzTGl0dGxlRW5kaWFuOiBib29sZWFuID0gdHJ1ZSxcclxuICAgICAgICBkb05vdEJha2VUcmFuc2Zvcm06IGJvb2xlYW4gPSBmYWxzZSxcclxuICAgICAgICBzdXBwb3J0SW5zdGFuY2VkTWVzaGVzOiBib29sZWFuID0gZmFsc2UsXHJcbiAgICAgICAgZXhwb3J0SW5kaXZpZHVhbE1lc2hlczogYm9vbGVhbiA9IGZhbHNlXHJcbiAgICApOiBhbnkge1xyXG4gICAgICAgIC8vQmluYXJ5IHN1cHBvcnQgYWRhcHRlZCBmcm9tIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL3BhdWxrYXBsYW4vNmQ1ZjBhYjJjN2U4ZmRjNjhhNjFcclxuXHJcbiAgICAgICAgY29uc3QgZ2V0RmFjZURhdGEgPSBmdW5jdGlvbiAoaW5kaWNlczogYW55LCB2ZXJ0aWNlczogYW55LCBpOiBudW1iZXIpIHtcclxuICAgICAgICAgICAgY29uc3QgaWQgPSBbaW5kaWNlc1tpXSAqIDMsIGluZGljZXNbaSArIDFdICogMywgaW5kaWNlc1tpICsgMl0gKiAzXTtcclxuICAgICAgICAgICAgY29uc3QgdiA9IFtcclxuICAgICAgICAgICAgICAgIG5ldyBWZWN0b3IzKHZlcnRpY2VzW2lkWzBdXSwgdmVydGljZXNbaWRbMF0gKyAyXSwgdmVydGljZXNbaWRbMF0gKyAxXSksXHJcbiAgICAgICAgICAgICAgICBuZXcgVmVjdG9yMyh2ZXJ0aWNlc1tpZFsxXV0sIHZlcnRpY2VzW2lkWzFdICsgMl0sIHZlcnRpY2VzW2lkWzFdICsgMV0pLFxyXG4gICAgICAgICAgICAgICAgbmV3IFZlY3RvcjModmVydGljZXNbaWRbMl1dLCB2ZXJ0aWNlc1tpZFsyXSArIDJdLCB2ZXJ0aWNlc1tpZFsyXSArIDFdKSxcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgY29uc3QgcDFwMiA9IHZbMF0uc3VidHJhY3QodlsxXSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHAzcDIgPSB2WzJdLnN1YnRyYWN0KHZbMV0pO1xyXG4gICAgICAgICAgICBjb25zdCBuID0gVmVjdG9yMy5Dcm9zcyhwM3AyLCBwMXAyKS5ub3JtYWxpemUoKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7IHYsIG4gfTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCB3cml0ZVZlY3RvciA9IGZ1bmN0aW9uIChkYXRhdmlldzogYW55LCBvZmZzZXQ6IG51bWJlciwgdmVjdG9yOiBWZWN0b3IzLCBpc0xpdHRsZUVuZGlhbjogYm9vbGVhbikge1xyXG4gICAgICAgICAgICBvZmZzZXQgPSB3cml0ZUZsb2F0KGRhdGF2aWV3LCBvZmZzZXQsIHZlY3Rvci54LCBpc0xpdHRsZUVuZGlhbik7XHJcbiAgICAgICAgICAgIG9mZnNldCA9IHdyaXRlRmxvYXQoZGF0YXZpZXcsIG9mZnNldCwgdmVjdG9yLnksIGlzTGl0dGxlRW5kaWFuKTtcclxuICAgICAgICAgICAgcmV0dXJuIHdyaXRlRmxvYXQoZGF0YXZpZXcsIG9mZnNldCwgdmVjdG9yLnosIGlzTGl0dGxlRW5kaWFuKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCB3cml0ZUZsb2F0ID0gZnVuY3Rpb24gKGRhdGF2aWV3OiBhbnksIG9mZnNldDogbnVtYmVyLCB2YWx1ZTogbnVtYmVyLCBpc0xpdHRsZUVuZGlhbjogYm9vbGVhbikge1xyXG4gICAgICAgICAgICBkYXRhdmlldy5zZXRGbG9hdDMyKG9mZnNldCwgdmFsdWUsIGlzTGl0dGxlRW5kaWFuKTtcclxuICAgICAgICAgICAgcmV0dXJuIG9mZnNldCArIDQ7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgZ2V0VmVydGljZXNEYXRhID0gZnVuY3Rpb24gKG1lc2g6IEluc3RhbmNlZE1lc2ggfCBNZXNoKSB7XHJcbiAgICAgICAgICAgIGlmIChzdXBwb3J0SW5zdGFuY2VkTWVzaGVzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc291cmNlTWVzaCA9IG1lc2g7XHJcbiAgICAgICAgICAgICAgICBpZiAobWVzaCBpbnN0YW5jZW9mIEluc3RhbmNlZE1lc2gpIHtcclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VNZXNoID0gbWVzaC5zb3VyY2VNZXNoO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHNvdXJjZU1lc2guZ2V0VmVydGljZXNEYXRhKFZlcnRleEJ1ZmZlci5Qb3NpdGlvbktpbmQsIHRydWUsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFkYXRhKSByZXR1cm4gW107XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZW1wID0gVmVjdG9yMy5aZXJvKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXg7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCBkYXRhLmxlbmd0aDsgaW5kZXggKz0gMykge1xyXG4gICAgICAgICAgICAgICAgICAgIFZlY3RvcjMuVHJhbnNmb3JtQ29vcmRpbmF0ZXNGcm9tRmxvYXRzVG9SZWYoZGF0YVtpbmRleF0sIGRhdGFbaW5kZXggKyAxXSwgZGF0YVtpbmRleCArIDJdLCBtZXNoLmNvbXB1dGVXb3JsZE1hdHJpeCh0cnVlKSwgdGVtcCkudG9BcnJheShkYXRhLCBpbmRleCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBtZXNoLmdldFZlcnRpY2VzRGF0YShWZXJ0ZXhCdWZmZXIuUG9zaXRpb25LaW5kKSB8fCBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmIChzdXBwb3J0SW5zdGFuY2VkTWVzaGVzKSB7XHJcbiAgICAgICAgICAgIGRvTm90QmFrZVRyYW5zZm9ybSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZGF0YTogRGF0YVZpZXcgfCBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgICAgICBsZXQgZmFjZUNvdW50ID0gMDtcclxuICAgICAgICBsZXQgb2Zmc2V0ID0gMDtcclxuXHJcbiAgICAgICAgaWYgKGJpbmFyeSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lc2hlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWVzaCA9IG1lc2hlc1tpXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGluZGljZXMgPSBtZXNoLmdldEluZGljZXMoKTtcclxuICAgICAgICAgICAgICAgIGZhY2VDb3VudCArPSBpbmRpY2VzID8gaW5kaWNlcy5sZW5ndGggLyAzIDogMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgYnVmZmVyU2l6ZSA9IDg0ICsgNTAgKiBmYWNlQ291bnQ7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcihidWZmZXJTaXplKTtcclxuICAgICAgICAgICAgZGF0YSA9IG5ldyBEYXRhVmlldyhidWZmZXIpO1xyXG5cclxuICAgICAgICAgICAgb2Zmc2V0ICs9IDgwO1xyXG4gICAgICAgICAgICBkYXRhLnNldFVpbnQzMihvZmZzZXQsIGZhY2VDb3VudCwgaXNMaXR0bGVFbmRpYW4pO1xyXG4gICAgICAgICAgICBvZmZzZXQgKz0gNDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIWV4cG9ydEluZGl2aWR1YWxNZXNoZXMpIHtcclxuICAgICAgICAgICAgICAgIGRhdGEgPSBcInNvbGlkIHN0bG1lc2hcXHJcXG5cIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZXNoZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgbWVzaCA9IG1lc2hlc1tpXTtcclxuICAgICAgICAgICAgaWYgKCFiaW5hcnkgJiYgZXhwb3J0SW5kaXZpZHVhbE1lc2hlcykge1xyXG4gICAgICAgICAgICAgICAgZGF0YSArPSBcInNvbGlkIFwiICsgbWVzaC5uYW1lICsgXCJcXHJcXG5cIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWRvTm90QmFrZVRyYW5zZm9ybSAmJiBtZXNoIGluc3RhbmNlb2YgTWVzaCkge1xyXG4gICAgICAgICAgICAgICAgbWVzaC5iYWtlQ3VycmVudFRyYW5zZm9ybUludG9WZXJ0aWNlcygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHZlcnRpY2VzID0gZ2V0VmVydGljZXNEYXRhKG1lc2gpO1xyXG4gICAgICAgICAgICBjb25zdCBpbmRpY2VzID0gbWVzaC5nZXRJbmRpY2VzKCkgfHwgW107XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluZGljZXMubGVuZ3RoOyBpICs9IDMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZkID0gZ2V0RmFjZURhdGEoaW5kaWNlcywgdmVydGljZXMsIGkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChiaW5hcnkpIHtcclxuICAgICAgICAgICAgICAgICAgICBvZmZzZXQgPSB3cml0ZVZlY3RvcihkYXRhLCBvZmZzZXQsIGZkLm4sIGlzTGl0dGxlRW5kaWFuKTtcclxuICAgICAgICAgICAgICAgICAgICBvZmZzZXQgPSB3cml0ZVZlY3RvcihkYXRhLCBvZmZzZXQsIGZkLnZbMF0sIGlzTGl0dGxlRW5kaWFuKTtcclxuICAgICAgICAgICAgICAgICAgICBvZmZzZXQgPSB3cml0ZVZlY3RvcihkYXRhLCBvZmZzZXQsIGZkLnZbMV0sIGlzTGl0dGxlRW5kaWFuKTtcclxuICAgICAgICAgICAgICAgICAgICBvZmZzZXQgPSB3cml0ZVZlY3RvcihkYXRhLCBvZmZzZXQsIGZkLnZbMl0sIGlzTGl0dGxlRW5kaWFuKTtcclxuICAgICAgICAgICAgICAgICAgICBvZmZzZXQgKz0gMjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YSArPSBcIlxcdGZhY2V0IG5vcm1hbCBcIiArIGZkLm4ueCArIFwiIFwiICsgZmQubi55ICsgXCIgXCIgKyBmZC5uLnogKyBcIlxcclxcblwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEgKz0gXCJcXHRcXHRvdXRlciBsb29wXFxyXFxuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YSArPSBcIlxcdFxcdFxcdHZlcnRleCBcIiArIGZkLnZbMF0ueCArIFwiIFwiICsgZmQudlswXS55ICsgXCIgXCIgKyBmZC52WzBdLnogKyBcIlxcclxcblwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEgKz0gXCJcXHRcXHRcXHR2ZXJ0ZXggXCIgKyBmZC52WzFdLnggKyBcIiBcIiArIGZkLnZbMV0ueSArIFwiIFwiICsgZmQudlsxXS56ICsgXCJcXHJcXG5cIjtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhICs9IFwiXFx0XFx0XFx0dmVydGV4IFwiICsgZmQudlsyXS54ICsgXCIgXCIgKyBmZC52WzJdLnkgKyBcIiBcIiArIGZkLnZbMl0ueiArIFwiXFxyXFxuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YSArPSBcIlxcdFxcdGVuZGxvb3BcXHJcXG5cIjtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhICs9IFwiXFx0ZW5kZmFjZXRcXHJcXG5cIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWJpbmFyeSAmJiBleHBvcnRJbmRpdmlkdWFsTWVzaGVzKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhICs9IFwiZW5kc29saWQgXCIgKyBuYW1lICsgXCJcXHJcXG5cIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFiaW5hcnkgJiYgIWV4cG9ydEluZGl2aWR1YWxNZXNoZXMpIHtcclxuICAgICAgICAgICAgZGF0YSArPSBcImVuZHNvbGlkIHN0bG1lc2hcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChkb3dubG9hZCkge1xyXG4gICAgICAgICAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbZGF0YV0sIHsgdHlwZTogXCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIiB9KTtcclxuICAgICAgICAgICAgYS5ocmVmID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAgICAgICAgICAgIGEuZG93bmxvYWQgPSBmaWxlTmFtZSArIFwiLnN0bFwiO1xyXG4gICAgICAgICAgICBhLmNsaWNrKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8taW50ZXJuYWwtbW9kdWxlcyAqL1xyXG5pbXBvcnQgKiBhcyBFeHBvcnRlcnMgZnJvbSBcInNlcmlhbGl6ZXJzL2dsVEYvZ2xURkZpbGVFeHBvcnRlclwiO1xyXG5pbXBvcnQgKiBhcyBEYXRhcyBmcm9tIFwic2VyaWFsaXplcnMvZ2xURi8yLjAvZ2xURkRhdGFcIjtcclxuaW1wb3J0ICogYXMgU2VyaWFsaXplcnMgZnJvbSBcInNlcmlhbGl6ZXJzL2dsVEYvMi4wL2dsVEZTZXJpYWxpemVyXCI7XHJcbmltcG9ydCAqIGFzIEV4dGVuc2lvbnMgZnJvbSBcInNlcmlhbGl6ZXJzL2dsVEYvMi4wL0V4dGVuc2lvbnMvaW5kZXhcIjtcclxuaW1wb3J0ICogYXMgR0xURjIgZnJvbSBcInNlcmlhbGl6ZXJzL2dsVEYvMi4wL2luZGV4XCI7XHJcblxyXG4vKipcclxuICogVGhpcyBpcyB0aGUgZW50cnkgcG9pbnQgZm9yIHRoZSBVTUQgbW9kdWxlLlxyXG4gKiBUaGUgZW50cnkgcG9pbnQgZm9yIGEgZnV0dXJlIEVTTSBwYWNrYWdlIHNob3VsZCBiZSBpbmRleC50c1xyXG4gKi9cclxuY29uc3QgZ2xvYmFsT2JqZWN0ID0gdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB1bmRlZmluZWQ7XHJcbmlmICh0eXBlb2YgZ2xvYmFsT2JqZWN0ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAoPGFueT5nbG9iYWxPYmplY3QpLkJBQllMT04gPSAoPGFueT5nbG9iYWxPYmplY3QpLkJBQllMT04gfHwge307XHJcbiAgICBjb25zdCBCQUJZTE9OID0gKDxhbnk+Z2xvYmFsT2JqZWN0KS5CQUJZTE9OO1xyXG4gICAgQkFCWUxPTi5HTFRGMiA9IEJBQllMT04uR0xURjIgfHwge307XHJcbiAgICBCQUJZTE9OLkdMVEYyLkV4cG9ydGVyID0gQkFCWUxPTi5HTFRGMi5FeHBvcnRlciB8fCB7fTtcclxuICAgIEJBQllMT04uR0xURjIuRXhwb3J0ZXIuRXh0ZW5zaW9ucyA9IEJBQllMT04uR0xURjIuRXhwb3J0ZXIuRXh0ZW5zaW9ucyB8fCB7fTtcclxuXHJcbiAgICBjb25zdCBrZXlzID0gW107XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBFeHBvcnRlcnMpIHtcclxuICAgICAgICBCQUJZTE9OW2tleV0gPSAoPGFueT5FeHBvcnRlcnMpW2tleV07XHJcbiAgICAgICAga2V5cy5wdXNoKGtleSk7XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBEYXRhcykge1xyXG4gICAgICAgIEJBQllMT05ba2V5XSA9ICg8YW55PkRhdGFzKVtrZXldO1xyXG4gICAgICAgIGtleXMucHVzaChrZXkpO1xyXG4gICAgfVxyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gU2VyaWFsaXplcnMpIHtcclxuICAgICAgICBCQUJZTE9OW2tleV0gPSAoPGFueT5TZXJpYWxpemVycylba2V5XTtcclxuICAgICAgICBrZXlzLnB1c2goa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBFeHRlbnNpb25zKSB7XHJcbiAgICAgICAgQkFCWUxPTi5HTFRGMi5FeHBvcnRlci5FeHRlbnNpb25zW2tleV0gPSAoPGFueT5FeHRlbnNpb25zKVtrZXldO1xyXG4gICAgICAgIGtleXMucHVzaChrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAoY29uc3Qga2V5IGluIEdMVEYyKSB7XHJcbiAgICAgICAgLy8gUHJldmVudCBSZWFzc2lnbm1lbnQuXHJcbiAgICAgICAgaWYgKGtleXMuaW5kZXhPZihrZXkpID4gLTEpIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBCQUJZTE9OLkdMVEYyLkV4cG9ydGVyW2tleV0gPSAoPGFueT5HTFRGMilba2V5XTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0ICogZnJvbSBcInNlcmlhbGl6ZXJzL2dsVEYvZ2xURkZpbGVFeHBvcnRlclwiO1xyXG5leHBvcnQgKiBmcm9tIFwic2VyaWFsaXplcnMvZ2xURi8yLjAvaW5kZXhcIjtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWludGVybmFsLW1vZHVsZXMgKi9cclxuaW1wb3J0ICogYXMgU2VyaWFsaXplcnMgZnJvbSBcInNlcmlhbGl6ZXJzL09CSi9pbmRleFwiO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgaXMgdGhlIGVudHJ5IHBvaW50IGZvciB0aGUgVU1EIG1vZHVsZS5cclxuICogVGhlIGVudHJ5IHBvaW50IGZvciBhIGZ1dHVyZSBFU00gcGFja2FnZSBzaG91bGQgYmUgaW5kZXgudHNcclxuICovXHJcbmNvbnN0IGdsb2JhbE9iamVjdCA9IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDogdW5kZWZpbmVkO1xyXG5pZiAodHlwZW9mIGdsb2JhbE9iamVjdCAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgZm9yIChjb25zdCBzZXJpYWxpemVyIGluIFNlcmlhbGl6ZXJzKSB7XHJcbiAgICAgICAgKDxhbnk+Z2xvYmFsT2JqZWN0KS5CQUJZTE9OW3NlcmlhbGl6ZXJdID0gKDxhbnk+U2VyaWFsaXplcnMpW3NlcmlhbGl6ZXJdO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgKiBmcm9tIFwic2VyaWFsaXplcnMvT0JKL2luZGV4XCI7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1pbnRlcm5hbC1tb2R1bGVzICovXHJcbmltcG9ydCAqIGFzIFNlcmlhbGl6ZXJzIGZyb20gXCJzZXJpYWxpemVycy9zdGwvaW5kZXhcIjtcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGlzIHRoZSBlbnRyeSBwb2ludCBmb3IgdGhlIFVNRCBtb2R1bGUuXHJcbiAqIFRoZSBlbnRyeSBwb2ludCBmb3IgYSBmdXR1cmUgRVNNIHBhY2thZ2Ugc2hvdWxkIGJlIGluZGV4LnRzXHJcbiAqL1xyXG5jb25zdCBnbG9iYWxPYmplY3QgPSB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHVuZGVmaW5lZDtcclxuaWYgKHR5cGVvZiBnbG9iYWxPYmplY3QgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGZvciAoY29uc3Qgc2VyaWFsaXplciBpbiBTZXJpYWxpemVycykge1xyXG4gICAgICAgICg8YW55Pmdsb2JhbE9iamVjdCkuQkFCWUxPTltzZXJpYWxpemVyXSA9ICg8YW55PlNlcmlhbGl6ZXJzKVtzZXJpYWxpemVyXTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0ICogZnJvbSBcInNlcmlhbGl6ZXJzL3N0bC9pbmRleFwiO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvZXhwb3J0ICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1pbnRlcm5hbC1tb2R1bGVzICovXHJcbmltcG9ydCBcInNlcmlhbGl6ZXJzL2luZGV4XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2xlZ2FjeS1nbFRGMlNlcmlhbGl6ZXJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbGVnYWN5LW9ialNlcmlhbGl6ZXJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbGVnYWN5LXN0bFNlcmlhbGl6ZXJcIjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2JhYnlsb25qc19NYXRoc19tYXRoX3ZlY3Rvcl9fOyIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxuXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlLCBTdXBwcmVzc2VkRXJyb3IsIFN5bWJvbCAqL1xuXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcbiAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcbiAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbn1cblxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xuICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xuICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHQ7XG4gIH1cbiAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xuICB2YXIgdCA9IHt9O1xuICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgIHRbcF0gPSBzW3BdO1xuICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxuICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgIH1cbiAgcmV0dXJuIHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xuICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fZXNEZWNvcmF0ZShjdG9yLCBkZXNjcmlwdG9ySW4sIGRlY29yYXRvcnMsIGNvbnRleHRJbiwgaW5pdGlhbGl6ZXJzLCBleHRyYUluaXRpYWxpemVycykge1xuICBmdW5jdGlvbiBhY2NlcHQoZikgeyBpZiAoZiAhPT0gdm9pZCAwICYmIHR5cGVvZiBmICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJGdW5jdGlvbiBleHBlY3RlZFwiKTsgcmV0dXJuIGY7IH1cbiAgdmFyIGtpbmQgPSBjb250ZXh0SW4ua2luZCwga2V5ID0ga2luZCA9PT0gXCJnZXR0ZXJcIiA/IFwiZ2V0XCIgOiBraW5kID09PSBcInNldHRlclwiID8gXCJzZXRcIiA6IFwidmFsdWVcIjtcbiAgdmFyIHRhcmdldCA9ICFkZXNjcmlwdG9ySW4gJiYgY3RvciA/IGNvbnRleHRJbltcInN0YXRpY1wiXSA/IGN0b3IgOiBjdG9yLnByb3RvdHlwZSA6IG51bGw7XG4gIHZhciBkZXNjcmlwdG9yID0gZGVzY3JpcHRvckluIHx8ICh0YXJnZXQgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwgY29udGV4dEluLm5hbWUpIDoge30pO1xuICB2YXIgXywgZG9uZSA9IGZhbHNlO1xuICBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgdmFyIGNvbnRleHQgPSB7fTtcbiAgICAgIGZvciAodmFyIHAgaW4gY29udGV4dEluKSBjb250ZXh0W3BdID0gcCA9PT0gXCJhY2Nlc3NcIiA/IHt9IDogY29udGV4dEluW3BdO1xuICAgICAgZm9yICh2YXIgcCBpbiBjb250ZXh0SW4uYWNjZXNzKSBjb250ZXh0LmFjY2Vzc1twXSA9IGNvbnRleHRJbi5hY2Nlc3NbcF07XG4gICAgICBjb250ZXh0LmFkZEluaXRpYWxpemVyID0gZnVuY3Rpb24gKGYpIHsgaWYgKGRvbmUpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgYWRkIGluaXRpYWxpemVycyBhZnRlciBkZWNvcmF0aW9uIGhhcyBjb21wbGV0ZWRcIik7IGV4dHJhSW5pdGlhbGl6ZXJzLnB1c2goYWNjZXB0KGYgfHwgbnVsbCkpOyB9O1xuICAgICAgdmFyIHJlc3VsdCA9ICgwLCBkZWNvcmF0b3JzW2ldKShraW5kID09PSBcImFjY2Vzc29yXCIgPyB7IGdldDogZGVzY3JpcHRvci5nZXQsIHNldDogZGVzY3JpcHRvci5zZXQgfSA6IGRlc2NyaXB0b3Jba2V5XSwgY29udGV4dCk7XG4gICAgICBpZiAoa2luZCA9PT0gXCJhY2Nlc3NvclwiKSB7XG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gdm9pZCAwKSBjb250aW51ZTtcbiAgICAgICAgICBpZiAocmVzdWx0ID09PSBudWxsIHx8IHR5cGVvZiByZXN1bHQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3QgZXhwZWN0ZWRcIik7XG4gICAgICAgICAgaWYgKF8gPSBhY2NlcHQocmVzdWx0LmdldCkpIGRlc2NyaXB0b3IuZ2V0ID0gXztcbiAgICAgICAgICBpZiAoXyA9IGFjY2VwdChyZXN1bHQuc2V0KSkgZGVzY3JpcHRvci5zZXQgPSBfO1xuICAgICAgICAgIGlmIChfID0gYWNjZXB0KHJlc3VsdC5pbml0KSkgaW5pdGlhbGl6ZXJzLnVuc2hpZnQoXyk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChfID0gYWNjZXB0KHJlc3VsdCkpIHtcbiAgICAgICAgICBpZiAoa2luZCA9PT0gXCJmaWVsZFwiKSBpbml0aWFsaXplcnMudW5zaGlmdChfKTtcbiAgICAgICAgICBlbHNlIGRlc2NyaXB0b3Jba2V5XSA9IF87XG4gICAgICB9XG4gIH1cbiAgaWYgKHRhcmdldCkgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgY29udGV4dEluLm5hbWUsIGRlc2NyaXB0b3IpO1xuICBkb25lID0gdHJ1ZTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3J1bkluaXRpYWxpemVycyh0aGlzQXJnLCBpbml0aWFsaXplcnMsIHZhbHVlKSB7XG4gIHZhciB1c2VWYWx1ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGluaXRpYWxpemVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFsdWUgPSB1c2VWYWx1ZSA/IGluaXRpYWxpemVyc1tpXS5jYWxsKHRoaXNBcmcsIHZhbHVlKSA6IGluaXRpYWxpemVyc1tpXS5jYWxsKHRoaXNBcmcpO1xuICB9XG4gIHJldHVybiB1c2VWYWx1ZSA/IHZhbHVlIDogdm9pZCAwO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fcHJvcEtleSh4KSB7XG4gIHJldHVybiB0eXBlb2YgeCA9PT0gXCJzeW1ib2xcIiA/IHggOiBcIlwiLmNvbmNhdCh4KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3NldEZ1bmN0aW9uTmFtZShmLCBuYW1lLCBwcmVmaXgpIHtcbiAgaWYgKHR5cGVvZiBuYW1lID09PSBcInN5bWJvbFwiKSBuYW1lID0gbmFtZS5kZXNjcmlwdGlvbiA/IFwiW1wiLmNvbmNhdChuYW1lLmRlc2NyaXB0aW9uLCBcIl1cIikgOiBcIlwiO1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGYsIFwibmFtZVwiLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHByZWZpeCA/IFwiXCIuY29uY2F0KHByZWZpeCwgXCIgXCIsIG5hbWUpIDogbmFtZSB9KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XG4gIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgd2hpbGUgKGcgJiYgKGcgPSAwLCBvcFswXSAmJiAoXyA9IDApKSwgXykgdHJ5IHtcbiAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICB9XG59XG5cbmV4cG9ydCB2YXIgX19jcmVhdGVCaW5kaW5nID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XG4gIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XG4gICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xuICB9XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICBvW2syXSA9IG1ba107XG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBvKSB7XG4gIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcbiAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcbiAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XG4gIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcbiAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xuICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcbiAgICAgIH1cbiAgfTtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcbiAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xuICBpZiAoIW0pIHJldHVybiBvO1xuICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcbiAgdHJ5IHtcbiAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xuICB9XG4gIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxuICBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XG4gICAgICB9XG4gICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cbiAgfVxuICByZXR1cm4gYXI7XG59XG5cbi8qKiBAZGVwcmVjYXRlZCAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xuICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcbiAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcbiAgcmV0dXJuIGFyO1xufVxuXG4vKiogQGRlcHJlY2F0ZWQgKi9cbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcbiAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XG4gIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcbiAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxuICAgICAgICAgIHJba10gPSBhW2pdO1xuICByZXR1cm4gcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXkodG8sIGZyb20sIHBhY2spIHtcbiAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcbiAgICAgIGlmIChhciB8fCAhKGkgaW4gZnJvbSkpIHtcbiAgICAgICAgICBpZiAoIWFyKSBhciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20sIDAsIGkpO1xuICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcbiAgICAgIH1cbiAgfVxuICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xuICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XG4gIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XG4gIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XG4gIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcbiAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XG4gIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cbiAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XG4gIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cbiAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxuICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcbiAgdmFyIGksIHA7XG4gIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XG4gIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IGZhbHNlIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcbiAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcbiAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcbiAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xuICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XG4gIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XG4gIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XG4gIHJldHVybiBjb29rZWQ7XG59O1xuXG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xuICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcbiAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XG4gIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcbiAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcbiAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xuICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBzZXR0ZXJcIik7XG4gIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEluKHN0YXRlLCByZWNlaXZlcikge1xuICBpZiAocmVjZWl2ZXIgPT09IG51bGwgfHwgKHR5cGVvZiByZWNlaXZlciAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgcmVjZWl2ZXIgIT09IFwiZnVuY3Rpb25cIikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgdXNlICdpbicgb3BlcmF0b3Igb24gbm9uLW9iamVjdFwiKTtcbiAgcmV0dXJuIHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgPT09IHN0YXRlIDogc3RhdGUuaGFzKHJlY2VpdmVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fYWRkRGlzcG9zYWJsZVJlc291cmNlKGVudiwgdmFsdWUsIGFzeW5jKSB7XG4gIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdm9pZCAwKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgdmFsdWUgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdCBleHBlY3RlZC5cIik7XG4gICAgdmFyIGRpc3Bvc2U7XG4gICAgaWYgKGFzeW5jKSB7XG4gICAgICAgIGlmICghU3ltYm9sLmFzeW5jRGlzcG9zZSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0Rpc3Bvc2UgaXMgbm90IGRlZmluZWQuXCIpO1xuICAgICAgICBkaXNwb3NlID0gdmFsdWVbU3ltYm9sLmFzeW5jRGlzcG9zZV07XG4gICAgfVxuICAgIGlmIChkaXNwb3NlID09PSB2b2lkIDApIHtcbiAgICAgICAgaWYgKCFTeW1ib2wuZGlzcG9zZSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5kaXNwb3NlIGlzIG5vdCBkZWZpbmVkLlwiKTtcbiAgICAgICAgZGlzcG9zZSA9IHZhbHVlW1N5bWJvbC5kaXNwb3NlXTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBkaXNwb3NlICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3Qgbm90IGRpc3Bvc2FibGUuXCIpO1xuICAgIGVudi5zdGFjay5wdXNoKHsgdmFsdWU6IHZhbHVlLCBkaXNwb3NlOiBkaXNwb3NlLCBhc3luYzogYXN5bmMgfSk7XG4gIH1cbiAgZWxzZSBpZiAoYXN5bmMpIHtcbiAgICBlbnYuc3RhY2sucHVzaCh7IGFzeW5jOiB0cnVlIH0pO1xuICB9XG4gIHJldHVybiB2YWx1ZTtcbn1cblxudmFyIF9TdXBwcmVzc2VkRXJyb3IgPSB0eXBlb2YgU3VwcHJlc3NlZEVycm9yID09PSBcImZ1bmN0aW9uXCIgPyBTdXBwcmVzc2VkRXJyb3IgOiBmdW5jdGlvbiAoZXJyb3IsIHN1cHByZXNzZWQsIG1lc3NhZ2UpIHtcbiAgdmFyIGUgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIHJldHVybiBlLm5hbWUgPSBcIlN1cHByZXNzZWRFcnJvclwiLCBlLmVycm9yID0gZXJyb3IsIGUuc3VwcHJlc3NlZCA9IHN1cHByZXNzZWQsIGU7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19kaXNwb3NlUmVzb3VyY2VzKGVudikge1xuICBmdW5jdGlvbiBmYWlsKGUpIHtcbiAgICBlbnYuZXJyb3IgPSBlbnYuaGFzRXJyb3IgPyBuZXcgX1N1cHByZXNzZWRFcnJvcihlLCBlbnYuZXJyb3IsIFwiQW4gZXJyb3Igd2FzIHN1cHByZXNzZWQgZHVyaW5nIGRpc3Bvc2FsLlwiKSA6IGU7XG4gICAgZW52Lmhhc0Vycm9yID0gdHJ1ZTtcbiAgfVxuICBmdW5jdGlvbiBuZXh0KCkge1xuICAgIHdoaWxlIChlbnYuc3RhY2subGVuZ3RoKSB7XG4gICAgICB2YXIgcmVjID0gZW52LnN0YWNrLnBvcCgpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlYy5kaXNwb3NlICYmIHJlYy5kaXNwb3NlLmNhbGwocmVjLnZhbHVlKTtcbiAgICAgICAgaWYgKHJlYy5hc3luYykgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXN1bHQpLnRoZW4obmV4dCwgZnVuY3Rpb24oZSkgeyBmYWlsKGUpOyByZXR1cm4gbmV4dCgpOyB9KTtcbiAgICAgIH1cbiAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgZmFpbChlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVudi5oYXNFcnJvcikgdGhyb3cgZW52LmVycm9yO1xuICB9XG4gIHJldHVybiBuZXh0KCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgX19leHRlbmRzLFxuICBfX2Fzc2lnbixcbiAgX19yZXN0LFxuICBfX2RlY29yYXRlLFxuICBfX3BhcmFtLFxuICBfX21ldGFkYXRhLFxuICBfX2F3YWl0ZXIsXG4gIF9fZ2VuZXJhdG9yLFxuICBfX2NyZWF0ZUJpbmRpbmcsXG4gIF9fZXhwb3J0U3RhcixcbiAgX192YWx1ZXMsXG4gIF9fcmVhZCxcbiAgX19zcHJlYWQsXG4gIF9fc3ByZWFkQXJyYXlzLFxuICBfX3NwcmVhZEFycmF5LFxuICBfX2F3YWl0LFxuICBfX2FzeW5jR2VuZXJhdG9yLFxuICBfX2FzeW5jRGVsZWdhdG9yLFxuICBfX2FzeW5jVmFsdWVzLFxuICBfX21ha2VUZW1wbGF0ZU9iamVjdCxcbiAgX19pbXBvcnRTdGFyLFxuICBfX2ltcG9ydERlZmF1bHQsXG4gIF9fY2xhc3NQcml2YXRlRmllbGRHZXQsXG4gIF9fY2xhc3NQcml2YXRlRmllbGRTZXQsXG4gIF9fY2xhc3NQcml2YXRlRmllbGRJbixcbiAgX19hZGREaXNwb3NhYmxlUmVzb3VyY2UsXG4gIF9fZGlzcG9zZVJlc291cmNlcyxcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgKiBhcyBzZXJpYWxpemVycyBmcm9tIFwiQGx0cy9zZXJpYWxpemVycy9sZWdhY3kvbGVnYWN5XCI7XHJcbmV4cG9ydCB7IHNlcmlhbGl6ZXJzIH07XHJcbmV4cG9ydCBkZWZhdWx0IHNlcmlhbGl6ZXJzO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=