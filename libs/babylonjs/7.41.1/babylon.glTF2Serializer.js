(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("babylonjs"));
	else if(typeof define === 'function' && define.amd)
		define("babylonjs-serializers", ["babylonjs"], factory);
	else if(typeof exports === 'object')
		exports["babylonjs-serializers"] = factory(require("babylonjs"));
	else
		root["SERIALIZERS"] = factory(root["BABYLON"]);
})((typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : this), (__WEBPACK_EXTERNAL_MODULE_babylonjs_Misc_tools__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/* harmony import */ var babylonjs_Meshes_mesh__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs/Buffers/buffer */ "babylonjs/Misc/tools");
/* harmony import */ var babylonjs_Meshes_mesh__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Meshes_mesh__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _glTFUtilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../glTFUtilities */ "../../../dev/serializers/src/glTF/2.0/glTFUtilities.ts");






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
     * @param convertToRightHanded true if we need to convert data from left hand to right hand system.
     * @param dataWriter binary writer
     * @returns nullable promise, resolves with the node
     */
    EXT_mesh_gpu_instancing.prototype.postExportNodeAsync = function (context, node, babylonNode, nodeMap, convertToRightHanded, dataWriter) {
        var _this = this;
        return new Promise(function (resolve) {
            if (node && babylonNode instanceof babylonjs_Meshes_mesh__WEBPACK_IMPORTED_MODULE_1__.Mesh) {
                if (babylonNode.hasThinInstances && _this._exporter) {
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
                        if (convertToRightHanded) {
                            (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_2__.ConvertToRightHandedPosition)(iwt);
                            (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_2__.ConvertToRightHandedRotation)(iwr);
                        }
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
                        extension.attributes["TRANSLATION"] = _this._buildAccessor(translationBuffer, "VEC3" /* AccessorType.VEC3 */, babylonNode.thinInstanceCount, dataWriter, 5126 /* AccessorComponentType.FLOAT */);
                    }
                    // do we need to write ROTATION ?
                    if (hasAnyInstanceWorldRotation) {
                        var componentType = 5126 /* AccessorComponentType.FLOAT */; // we decided to stay on FLOAT for now see https://github.com/BabylonJS/Babylon.js/pull/12495
                        extension.attributes["ROTATION"] = _this._buildAccessor(rotationBuffer, "VEC4" /* AccessorType.VEC4 */, babylonNode.thinInstanceCount, dataWriter, componentType);
                    }
                    // do we need to write SCALE ?
                    if (hasAnyInstanceWorldScale) {
                        extension.attributes["SCALE"] = _this._buildAccessor(scaleBuffer, "VEC3" /* AccessorType.VEC3 */, babylonNode.thinInstanceCount, dataWriter, 5126 /* AccessorComponentType.FLOAT */);
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
        var bufferOffset = binaryWriter.byteOffset;
        switch (componentType) {
            case 5126 /* AccessorComponentType.FLOAT */: {
                for (var i = 0; i != buffer.length; i++) {
                    binaryWriter.writeFloat32(buffer[i]);
                }
                break;
            }
            case 5120 /* AccessorComponentType.BYTE */: {
                for (var i = 0; i != buffer.length; i++) {
                    binaryWriter.writeInt8(buffer[i] * 127);
                }
                break;
            }
            case 5122 /* AccessorComponentType.SHORT */: {
                for (var i = 0; i != buffer.length; i++) {
                    binaryWriter.writeInt16(buffer[i] * 32767);
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
_glTFExporter__WEBPACK_IMPORTED_MODULE_0__.GLTFExporter.RegisterExtension(NAME, function (exporter) { return new EXT_mesh_gpu_instancing(exporter); });


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
/* harmony import */ var babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Misc/logger */ "babylonjs/Misc/tools");
/* harmony import */ var babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _glTFExporter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../glTFExporter */ "../../../dev/serializers/src/glTF/2.0/glTFExporter.ts");
/* harmony import */ var _glTFUtilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../glTFUtilities */ "../../../dev/serializers/src/glTF/2.0/glTFUtilities.ts");






var NAME = "KHR_lights_punctual";
var DEFAULTS = {
    name: "",
    color: [1, 1, 1],
    intensity: 1,
    range: Number.MAX_VALUE,
};
var SPOTDEFAULTS = {
    innerConeAngle: 0,
    outerConeAngle: Math.PI / 4.0,
};
var LIGHTDIRECTION = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Backward();
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
     * @param nodeMap Node mapping of babylon node to glTF node index
     * @param convertToRightHanded Flag to convert the values to right-handed
     * @returns nullable INode promise
     */
    KHR_lights_punctual.prototype.postExportNodeAsync = function (context, node, babylonNode, nodeMap, convertToRightHanded) {
        var _this = this;
        return new Promise(function (resolve) {
            if (!(babylonNode instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.ShadowLight)) {
                resolve(node);
                return;
            }
            var lightType = babylonNode.getTypeID() == babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Light.LIGHTTYPEID_POINTLIGHT
                ? "point" /* KHRLightsPunctual_LightType.POINT */
                : babylonNode.getTypeID() == babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Light.LIGHTTYPEID_DIRECTIONALLIGHT
                    ? "directional" /* KHRLightsPunctual_LightType.DIRECTIONAL */
                    : babylonNode.getTypeID() == babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Light.LIGHTTYPEID_SPOTLIGHT
                        ? "spot" /* KHRLightsPunctual_LightType.SPOT */
                        : null;
            if (!lightType) {
                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Logger.Warn("".concat(context, ": Light ").concat(babylonNode.name, " is not supported in ").concat(NAME));
                resolve(node);
                return;
            }
            if (babylonNode.falloffType !== babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Light.FALLOFF_GLTF) {
                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Logger.Warn("".concat(context, ": Light falloff for ").concat(babylonNode.name, " does not match the ").concat(NAME, " specification!"));
            }
            // Set the node's translation and rotation here, since lights are not handled in exportNodeAsync
            if (!babylonNode.position.equalsToFloats(0, 0, 0)) {
                var translation = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Vector3[0].copyFrom(babylonNode.position);
                if (convertToRightHanded) {
                    (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_2__.ConvertToRightHandedPosition)(translation);
                }
                node.translation = translation.asArray();
            }
            // Babylon lights have "constant" rotation and variable direction, while
            // glTF lights have variable rotation and constant direction. Therefore,
            // compute a quaternion that aligns the Babylon light's direction with glTF's constant one.
            if (lightType !== "point" /* KHRLightsPunctual_LightType.POINT */) {
                var direction = babylonNode.direction.normalizeToRef(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Vector3[0]);
                if (convertToRightHanded) {
                    (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_2__.ConvertToRightHandedPosition)(direction);
                }
                var angle = Math.acos(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Dot(LIGHTDIRECTION, direction));
                var axis = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Cross(LIGHTDIRECTION, direction);
                var lightRotationQuaternion = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.RotationAxisToRef(axis, angle, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Quaternion[0]);
                if (!babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.IsIdentity(lightRotationQuaternion)) {
                    node.rotation = lightRotationQuaternion.asArray();
                }
            }
            var light = {
                type: lightType,
                name: babylonNode.name,
                color: babylonNode.diffuse.asArray(),
                intensity: babylonNode.intensity,
                range: babylonNode.range,
            };
            (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_2__.OmitDefaultValues)(light, DEFAULTS);
            // Separately handle the required 'spot' field for spot lights
            if (lightType === "spot" /* KHRLightsPunctual_LightType.SPOT */) {
                var babylonSpotLight = babylonNode;
                light.spot = {
                    innerConeAngle: babylonSpotLight.innerAngle / 2.0,
                    outerConeAngle: babylonSpotLight.angle / 2.0,
                };
                (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_2__.OmitDefaultValues)(light.spot, SPOTDEFAULTS);
            }
            _this._lights || (_this._lights = {
                lights: [],
            });
            _this._lights.lights.push(light);
            var lightReference = {
                light: _this._lights.lights.length - 1,
            };
            // Assign the light to its parent node, if possible, to condense the glTF
            // Why and when: the glTF loader generates a new parent TransformNode for each light node, which we should undo on export
            var parentBabylonNode = babylonNode.parent;
            if (parentBabylonNode && (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_2__.IsParentAddedByImporter)(babylonNode, parentBabylonNode)) {
                var parentNodeIndex = nodeMap.get(parentBabylonNode);
                if (parentNodeIndex) {
                    // Combine the light's transformation with the parent's
                    var parentNode = _this._exporter._nodes[parentNodeIndex];
                    (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_2__.CollapseParentNode)(node, parentNode);
                    parentNode.extensions || (parentNode.extensions = {});
                    parentNode.extensions[NAME] = lightReference;
                    // Do not export the original node
                    resolve(null);
                    return;
                }
            }
            node.extensions || (node.extensions = {});
            node.extensions[NAME] = lightReference;
            resolve(node);
        });
    };
    return KHR_lights_punctual;
}());

_glTFExporter__WEBPACK_IMPORTED_MODULE_1__.GLTFExporter.RegisterExtension(NAME, function (exporter) { return new KHR_lights_punctual(exporter); });


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
/* harmony import */ var babylonjs_Materials_PBR_pbrBaseMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs/Materials/PBR/pbrBaseMaterial */ "babylonjs/Misc/tools");
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
                var anisotropyTextureInfo = _this._exporter._materialExporter.getTextureInfo(babylonMaterial.anisotropy.texture);
                var anisotropyInfo = {
                    anisotropyStrength: babylonMaterial.anisotropy.intensity,
                    anisotropyRotation: babylonMaterial.anisotropy.angle,
                    anisotropyTexture: anisotropyTextureInfo !== null && anisotropyTextureInfo !== void 0 ? anisotropyTextureInfo : undefined,
                };
                if (anisotropyInfo.anisotropyTexture !== null) {
                    _this._exporter._materialNeedsUVsSet.add(babylonMaterial);
                }
                node.extensions[NAME] = anisotropyInfo;
            }
            resolve(node);
        });
    };
    return KHR_materials_anisotropy;
}());

_glTFExporter__WEBPACK_IMPORTED_MODULE_0__.GLTFExporter.RegisterExtension(NAME, function (exporter) { return new KHR_materials_anisotropy(exporter); });


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
/* harmony import */ var babylonjs_Materials_PBR_pbrBaseMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs/Misc/tools */ "babylonjs/Misc/tools");
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
                var clearCoatTextureInfo = _this._exporter._materialExporter.getTextureInfo(babylonMaterial.clearCoat.texture);
                var clearCoatTextureRoughnessInfo = void 0;
                if (babylonMaterial.clearCoat.useRoughnessFromMainTexture) {
                    clearCoatTextureRoughnessInfo = _this._exporter._materialExporter.getTextureInfo(babylonMaterial.clearCoat.texture);
                }
                else {
                    clearCoatTextureRoughnessInfo = _this._exporter._materialExporter.getTextureInfo(babylonMaterial.clearCoat.textureRoughness);
                }
                if (babylonMaterial.clearCoat.isTintEnabled) {
                    babylonjs_Materials_PBR_pbrBaseMaterial__WEBPACK_IMPORTED_MODULE_1__.Tools.Warn("Clear Color tint is not supported for glTF export. Ignoring for: ".concat(babylonMaterial.name));
                }
                if (babylonMaterial.clearCoat.remapF0OnInterfaceChange) {
                    babylonjs_Materials_PBR_pbrBaseMaterial__WEBPACK_IMPORTED_MODULE_1__.Tools.Warn("Clear Color F0 remapping is not supported for glTF export. Ignoring for: ".concat(babylonMaterial.name));
                }
                var clearCoatNormalTextureInfo = _this._exporter._materialExporter.getTextureInfo(babylonMaterial.clearCoat.bumpTexture);
                var clearCoatInfo = {
                    clearcoatFactor: babylonMaterial.clearCoat.intensity,
                    clearcoatTexture: clearCoatTextureInfo !== null && clearCoatTextureInfo !== void 0 ? clearCoatTextureInfo : undefined,
                    clearcoatRoughnessFactor: babylonMaterial.clearCoat.roughness,
                    clearcoatRoughnessTexture: clearCoatTextureRoughnessInfo !== null && clearCoatTextureRoughnessInfo !== void 0 ? clearCoatTextureRoughnessInfo : undefined,
                    clearcoatNormalTexture: clearCoatNormalTextureInfo !== null && clearCoatNormalTextureInfo !== void 0 ? clearCoatNormalTextureInfo : undefined,
                };
                if (clearCoatInfo.clearcoatTexture !== null || clearCoatInfo.clearcoatRoughnessTexture !== null || clearCoatInfo.clearcoatRoughnessTexture !== null) {
                    _this._exporter._materialNeedsUVsSet.add(babylonMaterial);
                }
                node.extensions[NAME] = clearCoatInfo;
            }
            resolve(node);
        });
    };
    return KHR_materials_clearcoat;
}());

_glTFExporter__WEBPACK_IMPORTED_MODULE_0__.GLTFExporter.RegisterExtension(NAME, function (exporter) { return new KHR_materials_clearcoat(exporter); });


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
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs/Materials/PBR/pbrMaterial */ "babylonjs/Misc/tools");
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
                var diffuseTransmissionTexture = (_a = _this._exporter._materialExporter.getTextureInfo(subs.translucencyIntensityTexture)) !== null && _a !== void 0 ? _a : undefined;
                var diffuseTransmissionColorFactor = !subs.translucencyColor || subs.translucencyColor.equalsFloats(1.0, 1.0, 1.0) ? undefined : subs.translucencyColor.asArray();
                var diffuseTransmissionColorTexture = (_b = _this._exporter._materialExporter.getTextureInfo(subs.translucencyColorTexture)) !== null && _b !== void 0 ? _b : undefined;
                var diffuseTransmissionInfo = {
                    diffuseTransmissionFactor: diffuseTransmissionFactor,
                    diffuseTransmissionTexture: diffuseTransmissionTexture,
                    diffuseTransmissionColorFactor: diffuseTransmissionColorFactor,
                    diffuseTransmissionColorTexture: diffuseTransmissionColorTexture,
                };
                if (_this._hasTexturesExtension(babylonMaterial)) {
                    _this._exporter._materialNeedsUVsSet.add(babylonMaterial);
                }
                node.extensions = node.extensions || {};
                node.extensions[NAME] = diffuseTransmissionInfo;
            }
            resolve(node);
        });
    };
    return KHR_materials_diffuse_transmission;
}());

_glTFExporter__WEBPACK_IMPORTED_MODULE_0__.GLTFExporter.RegisterExtension(NAME, function (exporter) { return new KHR_materials_diffuse_transmission(exporter); });


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
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs/Materials/PBR/pbrMaterial */ "babylonjs/Misc/tools");
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

_glTFExporter__WEBPACK_IMPORTED_MODULE_0__.GLTFExporter.RegisterExtension(NAME, function () { return new KHR_materials_dispersion(); });


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
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs/Materials/PBR/pbrMaterial */ "babylonjs/Misc/tools");
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

_glTFExporter__WEBPACK_IMPORTED_MODULE_0__.GLTFExporter.RegisterExtension(NAME, function (exporter) { return new KHR_materials_emissive_strength(); });


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
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs/Materials/PBR/pbrMaterial */ "babylonjs/Misc/tools");
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
_glTFExporter__WEBPACK_IMPORTED_MODULE_0__.GLTFExporter.RegisterExtension(NAME, function (exporter) { return new KHR_materials_ior(); });


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
/* harmony import */ var babylonjs_Materials_PBR_pbrBaseMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs/Materials/PBR/pbrBaseMaterial */ "babylonjs/Misc/tools");
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
                var iridescenceTextureInfo = _this._exporter._materialExporter.getTextureInfo(babylonMaterial.iridescence.texture);
                var iridescenceThicknessTextureInfo = _this._exporter._materialExporter.getTextureInfo(babylonMaterial.iridescence.thicknessTexture);
                var iridescenceInfo = {
                    iridescenceFactor: babylonMaterial.iridescence.intensity,
                    iridescenceIor: babylonMaterial.iridescence.indexOfRefraction,
                    iridescenceThicknessMinimum: babylonMaterial.iridescence.minimumThickness,
                    iridescenceThicknessMaximum: babylonMaterial.iridescence.maximumThickness,
                    iridescenceTexture: iridescenceTextureInfo !== null && iridescenceTextureInfo !== void 0 ? iridescenceTextureInfo : undefined,
                    iridescenceThicknessTexture: iridescenceThicknessTextureInfo !== null && iridescenceThicknessTextureInfo !== void 0 ? iridescenceThicknessTextureInfo : undefined,
                };
                if (iridescenceInfo.iridescenceTexture !== null || iridescenceInfo.iridescenceThicknessTexture !== null) {
                    _this._exporter._materialNeedsUVsSet.add(babylonMaterial);
                }
                node.extensions[NAME] = iridescenceInfo;
            }
            resolve(node);
        });
    };
    return KHR_materials_iridescence;
}());

_glTFExporter__WEBPACK_IMPORTED_MODULE_0__.GLTFExporter.RegisterExtension(NAME, function (exporter) { return new KHR_materials_iridescence(exporter); });


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
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs/Materials/PBR/pbrMaterial */ "babylonjs/Misc/tools");
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
                var sheenInfo = {
                    sheenColorFactor: babylonMaterial.sheen.color.asArray(),
                    sheenRoughnessFactor: (_a = babylonMaterial.sheen.roughness) !== null && _a !== void 0 ? _a : 0,
                };
                if (sheenInfo.sheenColorTexture !== null || sheenInfo.sheenRoughnessTexture !== null) {
                    _this._exporter._materialNeedsUVsSet.add(babylonMaterial);
                }
                if (babylonMaterial.sheen.texture) {
                    sheenInfo.sheenColorTexture = (_b = _this._exporter._materialExporter.getTextureInfo(babylonMaterial.sheen.texture)) !== null && _b !== void 0 ? _b : undefined;
                }
                if (babylonMaterial.sheen.textureRoughness && !babylonMaterial.sheen.useRoughnessFromMainTexture) {
                    sheenInfo.sheenRoughnessTexture = (_c = _this._exporter._materialExporter.getTextureInfo(babylonMaterial.sheen.textureRoughness)) !== null && _c !== void 0 ? _c : undefined;
                }
                else if (babylonMaterial.sheen.texture && babylonMaterial.sheen.useRoughnessFromMainTexture) {
                    sheenInfo.sheenRoughnessTexture = (_d = _this._exporter._materialExporter.getTextureInfo(babylonMaterial.sheen.texture)) !== null && _d !== void 0 ? _d : undefined;
                }
                node.extensions[NAME] = sheenInfo;
            }
            resolve(node);
        });
    };
    return KHR_materials_sheen;
}());

_glTFExporter__WEBPACK_IMPORTED_MODULE_0__.GLTFExporter.RegisterExtension(NAME, function (exporter) { return new KHR_materials_sheen(exporter); });


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
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs/Materials/PBR/pbrMaterial */ "babylonjs/Misc/tools");
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
                var metallicReflectanceTexture = (_a = _this._exporter._materialExporter.getTextureInfo(babylonMaterial.metallicReflectanceTexture)) !== null && _a !== void 0 ? _a : undefined;
                var reflectanceTexture = (_b = _this._exporter._materialExporter.getTextureInfo(babylonMaterial.reflectanceTexture)) !== null && _b !== void 0 ? _b : undefined;
                var metallicF0Factor = babylonMaterial.metallicF0Factor == 1.0 ? undefined : babylonMaterial.metallicF0Factor;
                var metallicReflectanceColor = babylonMaterial.metallicReflectanceColor.equalsFloats(1.0, 1.0, 1.0)
                    ? undefined
                    : babylonMaterial.metallicReflectanceColor.asArray();
                var specularInfo = {
                    specularFactor: metallicF0Factor,
                    specularTexture: metallicReflectanceTexture,
                    specularColorFactor: metallicReflectanceColor,
                    specularColorTexture: reflectanceTexture,
                };
                if (_this._hasTexturesExtension(babylonMaterial)) {
                    _this._exporter._materialNeedsUVsSet.add(babylonMaterial);
                }
                node.extensions[NAME] = specularInfo;
            }
            resolve(node);
        });
    };
    return KHR_materials_specular;
}());

_glTFExporter__WEBPACK_IMPORTED_MODULE_0__.GLTFExporter.RegisterExtension(NAME, function (exporter) { return new KHR_materials_specular(exporter); });


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _glTFExporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../glTFExporter */ "../../../dev/serializers/src/glTF/2.0/glTFExporter.ts");
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs/Misc/logger */ "babylonjs/Misc/tools");
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function () {
            var subSurface, transmissionFactor, volumeInfo, transmissionTexture;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(babylonMaterial instanceof babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__.PBRMaterial && this._isExtensionEnabled(babylonMaterial))) return [3 /*break*/, 4];
                        this._wasUsed = true;
                        subSurface = babylonMaterial.subSurface;
                        transmissionFactor = subSurface.refractionIntensity === 0 ? undefined : subSurface.refractionIntensity;
                        volumeInfo = {
                            transmissionFactor: transmissionFactor,
                        };
                        if (this._hasTexturesExtension(babylonMaterial)) {
                            this._exporter._materialNeedsUVsSet.add(babylonMaterial);
                        }
                        if (!subSurface.refractionIntensityTexture) return [3 /*break*/, 3];
                        if (!subSurface.useGltfStyleTextures) return [3 /*break*/, 2];
                        return [4 /*yield*/, this._exporter._materialExporter.exportTextureAsync(subSurface.refractionIntensityTexture, "image/png" /* ImageMimeType.PNG */)];
                    case 1:
                        transmissionTexture = _a.sent();
                        if (transmissionTexture) {
                            volumeInfo.transmissionTexture = transmissionTexture;
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__.Logger.Warn("".concat(context, ": Exporting a subsurface refraction intensity texture without `useGltfStyleTextures` is not supported"));
                        _a.label = 3;
                    case 3:
                        node.extensions || (node.extensions = {});
                        node.extensions[NAME] = volumeInfo;
                        _a.label = 4;
                    case 4: return [2 /*return*/, node];
                }
            });
        });
    };
    return KHR_materials_transmission;
}());

_glTFExporter__WEBPACK_IMPORTED_MODULE_0__.GLTFExporter.RegisterExtension(NAME, function (exporter) { return new KHR_materials_transmission(exporter); });


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
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs/Materials/standardMaterial */ "babylonjs/Misc/tools");
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

_glTFExporter__WEBPACK_IMPORTED_MODULE_0__.GLTFExporter.RegisterExtension(NAME, function () { return new KHR_materials_unlit(); });


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
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs/Maths/math.color */ "babylonjs/Misc/tools");
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
                var thicknessTexture = (_a = _this._exporter._materialExporter.getTextureInfo(subs.thicknessTexture)) !== null && _a !== void 0 ? _a : undefined;
                var attenuationDistance = subs.tintColorAtDistance == Number.POSITIVE_INFINITY ? undefined : subs.tintColorAtDistance;
                var attenuationColor = subs.tintColor.equalsFloats(1.0, 1.0, 1.0) ? undefined : subs.tintColor.asArray();
                var volumeInfo = {
                    thicknessFactor: thicknessFactor,
                    thicknessTexture: thicknessTexture,
                    attenuationDistance: attenuationDistance,
                    attenuationColor: attenuationColor,
                };
                if (_this._hasTexturesExtension(babylonMaterial)) {
                    _this._exporter._materialNeedsUVsSet.add(babylonMaterial);
                }
                node.extensions = node.extensions || {};
                node.extensions[NAME] = volumeInfo;
            }
            resolve(node);
        });
    };
    return KHR_materials_volume;
}());

_glTFExporter__WEBPACK_IMPORTED_MODULE_0__.GLTFExporter.RegisterExtension(NAME, function (exporter) { return new KHR_materials_volume(exporter); });


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
/* harmony import */ var babylonjs_Misc_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Misc/tools */ "babylonjs/Misc/tools");
/* harmony import */ var babylonjs_Misc_tools__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Misc_tools__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _glTFExporter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../glTFExporter */ "../../../dev/serializers/src/glTF/2.0/glTFExporter.ts");


var NAME = "KHR_texture_transform";
/**
 * Computes the adjusted offset for a rotation centered about the origin.
 * @internal
 */
function AdjustOffsetForRotationCenter(babylonTexture) {
    var uOffset = babylonTexture.uOffset, vOffset = babylonTexture.vOffset, uRotationCenter = babylonTexture.uRotationCenter, vRotationCenter = babylonTexture.vRotationCenter, wAng = babylonTexture.wAng;
    var cosAngle = Math.cos(-wAng);
    var sinAngle = Math.sin(-wAng);
    var deltaU = uRotationCenter * (1 - cosAngle) - vRotationCenter * sinAngle;
    var deltaV = vRotationCenter * (1 - cosAngle) + uRotationCenter * sinAngle;
    return [uOffset + deltaU, vOffset + deltaV];
}
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
        var canUseExtension = babylonTexture && babylonTexture.uAng === 0 && babylonTexture.vAng === 0;
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
                if (babylonTexture.uRotationCenter !== 0 || babylonTexture.vRotationCenter !== 0) {
                    textureTransform.offset = AdjustOffsetForRotationCenter(babylonTexture);
                }
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
            if (babylonTexture.wAng !== 0 && (babylonTexture.uRotationCenter !== 0 || babylonTexture.vRotationCenter !== 0)) {
                babylonjs_Misc_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.Warn("".concat(context, ": Texture ").concat(babylonTexture.name, " with rotation not centered at the origin will be exported with an adjusted texture offset."));
            }
            resolve(babylonTexture);
        });
    };
    return KHR_texture_transform;
}());

_glTFExporter__WEBPACK_IMPORTED_MODULE_1__.GLTFExporter.RegisterExtension(NAME, function () { return new KHR_texture_transform(); });


/***/ }),

/***/ "../../../dev/serializers/src/glTF/2.0/Extensions/index.ts":
/*!*****************************************************************!*\
  !*** ../../../dev/serializers/src/glTF/2.0/Extensions/index.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EXT_mesh_gpu_instancing: () => (/* reexport safe */ _EXT_mesh_gpu_instancing__WEBPACK_IMPORTED_MODULE_0__.EXT_mesh_gpu_instancing),
/* harmony export */   KHR_lights_punctual: () => (/* reexport safe */ _KHR_lights_punctual__WEBPACK_IMPORTED_MODULE_1__.KHR_lights_punctual),
/* harmony export */   KHR_materials_anisotropy: () => (/* reexport safe */ _KHR_materials_anisotropy__WEBPACK_IMPORTED_MODULE_2__.KHR_materials_anisotropy),
/* harmony export */   KHR_materials_clearcoat: () => (/* reexport safe */ _KHR_materials_clearcoat__WEBPACK_IMPORTED_MODULE_3__.KHR_materials_clearcoat),
/* harmony export */   KHR_materials_diffuse_transmission: () => (/* reexport safe */ _KHR_materials_diffuse_transmission__WEBPACK_IMPORTED_MODULE_4__.KHR_materials_diffuse_transmission),
/* harmony export */   KHR_materials_dispersion: () => (/* reexport safe */ _KHR_materials_dispersion__WEBPACK_IMPORTED_MODULE_5__.KHR_materials_dispersion),
/* harmony export */   KHR_materials_emissive_strength: () => (/* reexport safe */ _KHR_materials_emissive_strength__WEBPACK_IMPORTED_MODULE_6__.KHR_materials_emissive_strength),
/* harmony export */   KHR_materials_ior: () => (/* reexport safe */ _KHR_materials_ior__WEBPACK_IMPORTED_MODULE_7__.KHR_materials_ior),
/* harmony export */   KHR_materials_iridescence: () => (/* reexport safe */ _KHR_materials_iridescence__WEBPACK_IMPORTED_MODULE_8__.KHR_materials_iridescence),
/* harmony export */   KHR_materials_sheen: () => (/* reexport safe */ _KHR_materials_sheen__WEBPACK_IMPORTED_MODULE_9__.KHR_materials_sheen),
/* harmony export */   KHR_materials_specular: () => (/* reexport safe */ _KHR_materials_specular__WEBPACK_IMPORTED_MODULE_10__.KHR_materials_specular),
/* harmony export */   KHR_materials_transmission: () => (/* reexport safe */ _KHR_materials_transmission__WEBPACK_IMPORTED_MODULE_11__.KHR_materials_transmission),
/* harmony export */   KHR_materials_unlit: () => (/* reexport safe */ _KHR_materials_unlit__WEBPACK_IMPORTED_MODULE_12__.KHR_materials_unlit),
/* harmony export */   KHR_materials_volume: () => (/* reexport safe */ _KHR_materials_volume__WEBPACK_IMPORTED_MODULE_13__.KHR_materials_volume),
/* harmony export */   KHR_texture_transform: () => (/* reexport safe */ _KHR_texture_transform__WEBPACK_IMPORTED_MODULE_14__.KHR_texture_transform)
/* harmony export */ });
/* harmony import */ var _EXT_mesh_gpu_instancing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EXT_mesh_gpu_instancing */ "../../../dev/serializers/src/glTF/2.0/Extensions/EXT_mesh_gpu_instancing.ts");
/* harmony import */ var _KHR_lights_punctual__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KHR_lights_punctual */ "../../../dev/serializers/src/glTF/2.0/Extensions/KHR_lights_punctual.ts");
/* harmony import */ var _KHR_materials_anisotropy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./KHR_materials_anisotropy */ "../../../dev/serializers/src/glTF/2.0/Extensions/KHR_materials_anisotropy.ts");
/* harmony import */ var _KHR_materials_clearcoat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./KHR_materials_clearcoat */ "../../../dev/serializers/src/glTF/2.0/Extensions/KHR_materials_clearcoat.ts");
/* harmony import */ var _KHR_materials_diffuse_transmission__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./KHR_materials_diffuse_transmission */ "../../../dev/serializers/src/glTF/2.0/Extensions/KHR_materials_diffuse_transmission.ts");
/* harmony import */ var _KHR_materials_dispersion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./KHR_materials_dispersion */ "../../../dev/serializers/src/glTF/2.0/Extensions/KHR_materials_dispersion.ts");
/* harmony import */ var _KHR_materials_emissive_strength__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./KHR_materials_emissive_strength */ "../../../dev/serializers/src/glTF/2.0/Extensions/KHR_materials_emissive_strength.ts");
/* harmony import */ var _KHR_materials_ior__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./KHR_materials_ior */ "../../../dev/serializers/src/glTF/2.0/Extensions/KHR_materials_ior.ts");
/* harmony import */ var _KHR_materials_iridescence__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./KHR_materials_iridescence */ "../../../dev/serializers/src/glTF/2.0/Extensions/KHR_materials_iridescence.ts");
/* harmony import */ var _KHR_materials_sheen__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./KHR_materials_sheen */ "../../../dev/serializers/src/glTF/2.0/Extensions/KHR_materials_sheen.ts");
/* harmony import */ var _KHR_materials_specular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./KHR_materials_specular */ "../../../dev/serializers/src/glTF/2.0/Extensions/KHR_materials_specular.ts");
/* harmony import */ var _KHR_materials_transmission__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./KHR_materials_transmission */ "../../../dev/serializers/src/glTF/2.0/Extensions/KHR_materials_transmission.ts");
/* harmony import */ var _KHR_materials_unlit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./KHR_materials_unlit */ "../../../dev/serializers/src/glTF/2.0/Extensions/KHR_materials_unlit.ts");
/* harmony import */ var _KHR_materials_volume__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./KHR_materials_volume */ "../../../dev/serializers/src/glTF/2.0/Extensions/KHR_materials_volume.ts");
/* harmony import */ var _KHR_texture_transform__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./KHR_texture_transform */ "../../../dev/serializers/src/glTF/2.0/Extensions/KHR_texture_transform.ts");

















/***/ }),

/***/ "../../../dev/serializers/src/glTF/2.0/dataWriter.ts":
/*!***********************************************************!*\
  !*** ../../../dev/serializers/src/glTF/2.0/dataWriter.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataWriter: () => (/* binding */ DataWriter)
/* harmony export */ });
/* eslint-disable babylonjs/available */
/** @internal */
var DataWriter = /** @class */ (function () {
    function DataWriter(byteLength) {
        this._data = new Uint8Array(byteLength);
        this._dataView = new DataView(this._data.buffer);
        this._byteOffset = 0;
    }
    Object.defineProperty(DataWriter.prototype, "byteOffset", {
        get: function () {
            return this._byteOffset;
        },
        enumerable: false,
        configurable: true
    });
    DataWriter.prototype.getOutputData = function () {
        return new Uint8Array(this._data.buffer, 0, this._byteOffset);
    };
    DataWriter.prototype.writeUInt8 = function (value) {
        this._checkGrowBuffer(1);
        this._dataView.setUint8(this._byteOffset, value);
        this._byteOffset++;
    };
    DataWriter.prototype.writeInt8 = function (value) {
        this._checkGrowBuffer(1);
        this._dataView.setInt8(this._byteOffset, value);
        this._byteOffset++;
    };
    DataWriter.prototype.writeInt16 = function (entry) {
        this._checkGrowBuffer(2);
        this._dataView.setInt16(this._byteOffset, entry, true);
        this._byteOffset += 2;
    };
    DataWriter.prototype.writeUInt16 = function (value) {
        this._checkGrowBuffer(2);
        this._dataView.setUint16(this._byteOffset, value, true);
        this._byteOffset += 2;
    };
    DataWriter.prototype.writeUInt32 = function (entry) {
        this._checkGrowBuffer(4);
        this._dataView.setUint32(this._byteOffset, entry, true);
        this._byteOffset += 4;
    };
    DataWriter.prototype.writeFloat32 = function (value) {
        this._checkGrowBuffer(4);
        this._dataView.setFloat32(this._byteOffset, value, true);
        this._byteOffset += 4;
    };
    DataWriter.prototype.writeUint8Array = function (value) {
        this._checkGrowBuffer(value.byteLength);
        this._data.set(value, this._byteOffset);
        this._byteOffset += value.byteLength;
    };
    DataWriter.prototype.writeUint16Array = function (value) {
        this._checkGrowBuffer(value.byteLength);
        this._data.set(value, this._byteOffset);
        this._byteOffset += value.byteLength;
    };
    DataWriter.prototype._checkGrowBuffer = function (byteLength) {
        var newByteLength = this.byteOffset + byteLength;
        if (newByteLength > this._data.byteLength) {
            var newData = new Uint8Array(newByteLength * 2);
            newData.set(this._data);
            this._data = newData;
            this._dataView = new DataView(this._data.buffer);
        }
    };
    return DataWriter;
}());



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
/* harmony import */ var babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Lights/light */ "babylonjs/Misc/tools");
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
    _GLTFAnimation._CreateNodeAnimationFromNodeAnimations = function (babylonNode, runtimeGLTFAnimation, idleGLTFAnimations, nodeMap, nodes, binaryWriter, bufferViews, accessors, animationSampleRate, useRightHanded, shouldExportAnimation) {
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
                        _GLTFAnimation._AddAnimation("".concat(animation.name), animation.hasRunningRuntimeAnimations ? runtimeGLTFAnimation : glTFAnimation, babylonNode, animation, animationInfo.dataAccessorType, animationInfo.animationChannelTargetPath, nodeMap, binaryWriter, bufferViews, accessors, animationInfo.useQuaternion, animationSampleRate, useRightHanded);
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
    _GLTFAnimation._CreateMorphTargetAnimationFromMorphTargetAnimations = function (babylonNode, runtimeGLTFAnimation, idleGLTFAnimations, nodeMap, nodes, binaryWriter, bufferViews, accessors, animationSampleRate, useRightHanded, shouldExportAnimation) {
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
                            _GLTFAnimation._AddAnimation(animation.name, animation.hasRunningRuntimeAnimations ? runtimeGLTFAnimation : glTFAnimation, babylonNode, combinedAnimation, animationInfo.dataAccessorType, animationInfo.animationChannelTargetPath, nodeMap, binaryWriter, bufferViews, accessors, animationInfo.useQuaternion, animationSampleRate, useRightHanded, morphTargetManager.numTargets);
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
    _GLTFAnimation._CreateNodeAndMorphAnimationFromAnimationGroups = function (babylonScene, glTFAnimations, nodeMap, binaryWriter, bufferViews, accessors, animationSampleRate, leftHandedNodes, shouldExportAnimation) {
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
                    var convertToRightHanded = leftHandedNodes.has(target);
                    if (this_1._IsTransformable(target) || (target.length === 1 && this_1._IsTransformable(target[0]))) {
                        var animationInfo = _GLTFAnimation._DeduceAnimationInfo(targetAnimation.animation);
                        if (animationInfo) {
                            var babylonTransformNode = this_1._IsTransformable(target) ? target : this_1._IsTransformable(target[0]) ? target[0] : null;
                            if (babylonTransformNode) {
                                _GLTFAnimation._AddAnimation("".concat(animation.name), glTFAnimation, babylonTransformNode, animation, animationInfo.dataAccessorType, animationInfo.animationChannelTargetPath, nodeMap, binaryWriter, bufferViews, accessors, animationInfo.useQuaternion, animationSampleRate, convertToRightHanded);
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
                        _GLTFAnimation._AddAnimation("".concat(animationGroup.name, "_").concat(mesh.name, "_MorphWeightAnimation"), glTFAnimation, mesh, combinedAnimationGroup, animationInfo.dataAccessorType, animationInfo.animationChannelTargetPath, nodeMap, binaryWriter, bufferViews, accessors, animationInfo.useQuaternion, animationSampleRate, false, morphTargetManager === null || morphTargetManager === void 0 ? void 0 : morphTargetManager.numTargets);
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
    _GLTFAnimation._AddAnimation = function (name, glTFAnimation, babylonTransformNode, animation, dataAccessorType, animationChannelTargetPath, nodeMap, binaryWriter, bufferViews, accessors, useQuaternion, animationSampleRate, convertToRightHanded, morphAnimationChannels) {
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
            var nodeIndex = nodeMap.get(babylonTransformNode);
            // Creates buffer view and accessor for key frames.
            var byteLength = animationData.inputs.length * 4;
            var offset = binaryWriter.byteOffset;
            bufferView = (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_1__.CreateBufferView)(0, offset, byteLength);
            bufferViews.push(bufferView);
            animationData.inputs.forEach(function (input) {
                binaryWriter.writeFloat32(input);
            });
            accessor = (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_1__.CreateAccessor)(bufferViews.length - 1, "SCALAR" /* AccessorType.SCALAR */, 5126 /* AccessorComponentType.FLOAT */, animationData.inputs.length, null, {
                min: [animationData.inputsMin],
                max: [animationData.inputsMax],
            });
            accessors.push(accessor);
            keyframeAccessorIndex = accessors.length - 1;
            // create bufferview and accessor for keyed values.
            outputLength = animationData.outputs.length;
            byteLength = (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_1__.GetAccessorElementCount)(dataAccessorType) * 4 * animationData.outputs.length;
            // check for in and out tangents
            bufferView = (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_1__.CreateBufferView)(0, binaryWriter.byteOffset, byteLength);
            bufferViews.push(bufferView);
            var rotationQuaternion_1 = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion();
            var eulerVec3_1 = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3();
            var position_1 = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3();
            var isCamera_1 = babylonTransformNode instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Camera;
            animationData.outputs.forEach(function (output) {
                if (convertToRightHanded) {
                    switch (animationChannelTargetPath) {
                        case "translation" /* AnimationChannelTargetPath.TRANSLATION */:
                            babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArrayToRef(output, 0, position_1);
                            (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_1__.ConvertToRightHandedPosition)(position_1);
                            binaryWriter.writeFloat32(position_1.x);
                            binaryWriter.writeFloat32(position_1.y);
                            binaryWriter.writeFloat32(position_1.z);
                            break;
                        case "rotation" /* AnimationChannelTargetPath.ROTATION */:
                            if (output.length === 4) {
                                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.FromArrayToRef(output, 0, rotationQuaternion_1);
                            }
                            else {
                                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArrayToRef(output, 0, eulerVec3_1);
                                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.FromEulerVectorToRef(eulerVec3_1, rotationQuaternion_1);
                            }
                            if (isCamera_1) {
                                (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_1__.ConvertCameraRotationToGLTF)(rotationQuaternion_1);
                            }
                            else {
                                if (!babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.IsIdentity(rotationQuaternion_1)) {
                                    (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_1__.ConvertToRightHandedRotation)(rotationQuaternion_1);
                                }
                            }
                            binaryWriter.writeFloat32(rotationQuaternion_1.x);
                            binaryWriter.writeFloat32(rotationQuaternion_1.y);
                            binaryWriter.writeFloat32(rotationQuaternion_1.z);
                            binaryWriter.writeFloat32(rotationQuaternion_1.w);
                            break;
                        default:
                            output.forEach(function (entry) {
                                binaryWriter.writeFloat32(entry);
                            });
                            break;
                    }
                }
                else {
                    switch (animationChannelTargetPath) {
                        case "rotation" /* AnimationChannelTargetPath.ROTATION */:
                            if (output.length === 4) {
                                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.FromArrayToRef(output, 0, rotationQuaternion_1);
                            }
                            else {
                                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArrayToRef(output, 0, eulerVec3_1);
                                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.FromEulerVectorToRef(eulerVec3_1, rotationQuaternion_1);
                            }
                            if (isCamera_1) {
                                (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_1__.ConvertCameraRotationToGLTF)(rotationQuaternion_1);
                            }
                            binaryWriter.writeFloat32(rotationQuaternion_1.x);
                            binaryWriter.writeFloat32(rotationQuaternion_1.y);
                            binaryWriter.writeFloat32(rotationQuaternion_1.z);
                            binaryWriter.writeFloat32(rotationQuaternion_1.w);
                            break;
                        default:
                            output.forEach(function (entry) {
                                binaryWriter.writeFloat32(entry);
                            });
                            break;
                    }
                }
            });
            accessor = (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_1__.CreateAccessor)(bufferViews.length - 1, dataAccessorType, 5126 /* AccessorComponentType.FLOAT */, outputLength, null);
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
                        (key.interpolation && key.interpolation === 1 /* AnimationKeyInterpolation.STEP */ && interpolationType !== "STEP" /* AnimationSamplerInterpolation.STEP */)) {
                        interpolationType = "LINEAR" /* AnimationSamplerInterpolation.LINEAR */;
                        shouldBakeAnimation = true;
                        break;
                    }
                }
                else {
                    if (key.interpolation && key.interpolation === 1 /* AnimationKeyInterpolation.STEP */) {
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
/* harmony import */ var babylonjs_Misc_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Misc/tools */ "babylonjs/Misc/tools");
/* harmony import */ var babylonjs_Misc_tools__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Misc_tools__WEBPACK_IMPORTED_MODULE_0__);

function GetMimeType(fileName) {
    if (fileName.endsWith(".glb")) {
        return "model/gltf-binary";
    }
    else if (fileName.endsWith(".bin")) {
        return "application/octet-stream";
    }
    else if (fileName.endsWith(".gltf")) {
        return "model/gltf+json";
    }
    else if (fileName.endsWith(".jpeg") || fileName.endsWith(".jpg")) {
        return "image/jpeg" /* ImageMimeType.JPEG */;
    }
    else if (fileName.endsWith(".png")) {
        return "image/png" /* ImageMimeType.PNG */;
    }
    else if (fileName.endsWith(".webp")) {
        return "image/webp" /* ImageMimeType.WEBP */;
    }
    return undefined;
}
/**
 * Class for holding and downloading glTF file data
 */
var GLTFData = /** @class */ (function () {
    function GLTFData() {
        /**
         * Object which contains the file name as the key and its data as the value
         */
        this.files = {};
    }
    Object.defineProperty(GLTFData.prototype, "glTFFiles", {
        /**
         * @deprecated Use files instead
         */
        get: function () {
            return this.files;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Downloads the glTF data as files based on their names and data
     */
    GLTFData.prototype.downloadFiles = function () {
        for (var key in this.files) {
            var value = this.files[key];
            var blob = new Blob([value], { type: GetMimeType(key) });
            babylonjs_Misc_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.Download(blob, key);
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
/* harmony export */   GLTFExporter: () => (/* binding */ GLTFExporter)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Maths/math.color */ "babylonjs/Misc/tools");
/* harmony import */ var babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _glTFMaterialExporter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./glTFMaterialExporter */ "../../../dev/serializers/src/glTF/2.0/glTFMaterialExporter.ts");
/* harmony import */ var _glTFData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./glTFData */ "../../../dev/serializers/src/glTF/2.0/glTFData.ts");
/* harmony import */ var _glTFUtilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./glTFUtilities */ "../../../dev/serializers/src/glTF/2.0/glTFUtilities.ts");
/* harmony import */ var _dataWriter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dataWriter */ "../../../dev/serializers/src/glTF/2.0/dataWriter.ts");
/* harmony import */ var _glTFAnimation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./glTFAnimation */ "../../../dev/serializers/src/glTF/2.0/glTFAnimation.ts");
/* harmony import */ var _glTFMorphTargetsUtilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./glTFMorphTargetsUtilities */ "../../../dev/serializers/src/glTF/2.0/glTFMorphTargetsUtilities.ts");
























var ExporterState = /** @class */ (function () {
    function ExporterState(convertToRightHanded, wasAddedByNoopNode) {
        // Babylon indices array, start, count, offset, flip -> glTF accessor index
        this._indicesAccessorMap = new Map();
        // Babylon buffer -> glTF buffer view index
        this._vertexBufferViewMap = new Map();
        // Babylon vertex buffer, start, count -> glTF accessor index
        this._vertexAccessorMap = new Map();
        this._remappedBufferView = new Map();
        this._meshMorphTargetMap = new Map();
        this._vertexMapColorAlpha = new Map();
        this._exportedNodes = new Set();
        // Babylon mesh -> glTF mesh index
        this._meshMap = new Map();
        // Only used when convertToRightHanded is true.
        this.convertedToRightHandedBuffers = new Map();
        this.convertToRightHanded = convertToRightHanded;
        this.wasAddedByNoopNode = wasAddedByNoopNode;
    }
    ExporterState.prototype.getIndicesAccessor = function (indices, start, count, offset, flip) {
        var _a, _b, _c, _d;
        return (_d = (_c = (_b = (_a = this._indicesAccessorMap.get(indices)) === null || _a === void 0 ? void 0 : _a.get(start)) === null || _b === void 0 ? void 0 : _b.get(count)) === null || _c === void 0 ? void 0 : _c.get(offset)) === null || _d === void 0 ? void 0 : _d.get(flip);
    };
    ExporterState.prototype.setIndicesAccessor = function (indices, start, count, offset, flip, accessorIndex) {
        var map1 = this._indicesAccessorMap.get(indices);
        if (!map1) {
            map1 = new Map();
            this._indicesAccessorMap.set(indices, map1);
        }
        var map2 = map1.get(start);
        if (!map2) {
            map2 = new Map();
            map1.set(start, map2);
        }
        var map3 = map2.get(count);
        if (!map3) {
            map3 = new Map();
            map2.set(count, map3);
        }
        var map4 = map3.get(offset);
        if (!map4) {
            map4 = new Map();
            map3.set(offset, map4);
        }
        map4.set(flip, accessorIndex);
    };
    ExporterState.prototype.pushExportedNode = function (node) {
        if (!this._exportedNodes.has(node)) {
            this._exportedNodes.add(node);
        }
    };
    ExporterState.prototype.getNodesSet = function () {
        return this._exportedNodes;
    };
    ExporterState.prototype.getVertexBufferView = function (buffer) {
        return this._vertexBufferViewMap.get(buffer);
    };
    ExporterState.prototype.setVertexBufferView = function (buffer, bufferViewIndex) {
        this._vertexBufferViewMap.set(buffer, bufferViewIndex);
    };
    ExporterState.prototype.setRemappedBufferView = function (buffer, vertexBuffer, bufferViewIndex) {
        this._remappedBufferView.set(buffer, new Map());
        this._remappedBufferView.get(buffer).set(vertexBuffer, bufferViewIndex);
    };
    ExporterState.prototype.getRemappedBufferView = function (buffer, vertexBuffer) {
        var _a;
        return (_a = this._remappedBufferView.get(buffer)) === null || _a === void 0 ? void 0 : _a.get(vertexBuffer);
    };
    ExporterState.prototype.getVertexAccessor = function (vertexBuffer, start, count) {
        var _a, _b;
        return (_b = (_a = this._vertexAccessorMap.get(vertexBuffer)) === null || _a === void 0 ? void 0 : _a.get(start)) === null || _b === void 0 ? void 0 : _b.get(count);
    };
    ExporterState.prototype.setVertexAccessor = function (vertexBuffer, start, count, accessorIndex) {
        var map1 = this._vertexAccessorMap.get(vertexBuffer);
        if (!map1) {
            map1 = new Map();
            this._vertexAccessorMap.set(vertexBuffer, map1);
        }
        var map2 = map1.get(start);
        if (!map2) {
            map2 = new Map();
            map1.set(start, map2);
        }
        map2.set(count, accessorIndex);
    };
    ExporterState.prototype.hasVertexColorAlpha = function (vertexBuffer) {
        return this._vertexMapColorAlpha.get(vertexBuffer) || false;
    };
    ExporterState.prototype.setHasVertexColorAlpha = function (vertexBuffer, hasAlpha) {
        return this._vertexMapColorAlpha.set(vertexBuffer, hasAlpha);
    };
    ExporterState.prototype.getMesh = function (mesh) {
        return this._meshMap.get(mesh);
    };
    ExporterState.prototype.setMesh = function (mesh, meshIndex) {
        this._meshMap.set(mesh, meshIndex);
    };
    ExporterState.prototype.bindMorphDataToMesh = function (mesh, morphData) {
        var morphTargets = this._meshMorphTargetMap.get(mesh) || [];
        this._meshMorphTargetMap.set(mesh, morphTargets);
        if (morphTargets.indexOf(morphData) === -1) {
            morphTargets.push(morphData);
        }
    };
    ExporterState.prototype.getMorphTargetsFromMesh = function (mesh) {
        return this._meshMorphTargetMap.get(mesh);
    };
    return ExporterState;
}());
/** @internal */
var GLTFExporter = /** @class */ (function () {
    function GLTFExporter(babylonScene, options) {
        if (babylonScene === void 0) { babylonScene = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.EngineStore.LastCreatedScene; }
        this._glTF = {
            asset: { generator: "Babylon.js v".concat(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Engine.Version), version: "2.0" },
        };
        this._animations = [];
        this._accessors = [];
        this._bufferViews = [];
        this._cameras = [];
        this._images = [];
        this._materials = [];
        this._meshes = [];
        this._nodes = [];
        this._samplers = [];
        this._scenes = [];
        this._skins = [];
        this._textures = [];
        this._imageData = {};
        this._orderedImageData = [];
        this._materialExporter = new _glTFMaterialExporter__WEBPACK_IMPORTED_MODULE_1__.GLTFMaterialExporter(this);
        this._extensions = {};
        this._dataWriter = new _dataWriter__WEBPACK_IMPORTED_MODULE_4__.DataWriter(4);
        this._shouldExportNodeMap = new Map();
        // Babylon node -> glTF node index
        this._nodeMap = new Map();
        // Babylon material -> glTF material index
        this._materialMap = new Map();
        this._camerasMap = new Map();
        this._nodesCameraMap = new Map();
        this._skinMap = new Map();
        this._nodesSkinMap = new Map();
        // A material in this set requires UVs
        this._materialNeedsUVsSet = new Set();
        if (!babylonScene) {
            throw new Error("No scene available to export");
        }
        this._babylonScene = babylonScene;
        this._options = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__assign)({ shouldExportNode: function () { return true; }, shouldExportAnimation: function () { return true; }, metadataSelector: function (metadata) { return metadata; }, animationSampleRate: 1 / 60, exportWithoutWaitingForScene: false, exportUnusedUVs: false, removeNoopRootNodes: true, includeCoordinateSystemConversionNodes: false }, options);
        this._loadExtensions();
    }
    GLTFExporter.prototype._applyExtension = function (node, extensions, index, actionAsync) {
        var _this = this;
        if (index >= extensions.length) {
            return Promise.resolve(node);
        }
        var currentPromise = actionAsync(extensions[index], node);
        if (!currentPromise) {
            return this._applyExtension(node, extensions, index + 1, actionAsync);
        }
        return currentPromise.then(function (newNode) { return (newNode ? _this._applyExtension(newNode, extensions, index + 1, actionAsync) : null); });
    };
    GLTFExporter.prototype._applyExtensions = function (node, actionAsync) {
        var extensions = [];
        for (var _i = 0, _a = GLTFExporter._ExtensionNames; _i < _a.length; _i++) {
            var name_1 = _a[_i];
            extensions.push(this._extensions[name_1]);
        }
        return this._applyExtension(node, extensions, 0, actionAsync);
    };
    GLTFExporter.prototype._extensionsPreExportTextureAsync = function (context, babylonTexture, mimeType) {
        return this._applyExtensions(babylonTexture, function (extension, node) { return extension.preExportTextureAsync && extension.preExportTextureAsync(context, node, mimeType); });
    };
    GLTFExporter.prototype._extensionsPostExportMeshPrimitiveAsync = function (context, meshPrimitive, babylonSubMesh) {
        return this._applyExtensions(meshPrimitive, function (extension, node) { return extension.postExportMeshPrimitiveAsync && extension.postExportMeshPrimitiveAsync(context, node, babylonSubMesh); });
    };
    GLTFExporter.prototype._extensionsPostExportNodeAsync = function (context, node, babylonNode, nodeMap, convertToRightHanded) {
        var _this = this;
        return this._applyExtensions(node, function (extension, node) { return extension.postExportNodeAsync && extension.postExportNodeAsync(context, node, babylonNode, nodeMap, convertToRightHanded, _this._dataWriter); });
    };
    GLTFExporter.prototype._extensionsPostExportMaterialAsync = function (context, material, babylonMaterial) {
        return this._applyExtensions(material, function (extension, node) { return extension.postExportMaterialAsync && extension.postExportMaterialAsync(context, node, babylonMaterial); });
    };
    GLTFExporter.prototype._extensionsPostExportMaterialAdditionalTextures = function (context, material, babylonMaterial) {
        var output = [];
        for (var _i = 0, _a = GLTFExporter._ExtensionNames; _i < _a.length; _i++) {
            var name_2 = _a[_i];
            var extension = this._extensions[name_2];
            if (extension.postExportMaterialAdditionalTextures) {
                output.push.apply(output, extension.postExportMaterialAdditionalTextures(context, material, babylonMaterial));
            }
        }
        return output;
    };
    GLTFExporter.prototype._extensionsPostExportTextures = function (context, textureInfo, babylonTexture) {
        for (var _i = 0, _a = GLTFExporter._ExtensionNames; _i < _a.length; _i++) {
            var name_3 = _a[_i];
            var extension = this._extensions[name_3];
            if (extension.postExportTexture) {
                extension.postExportTexture(context, textureInfo, babylonTexture);
            }
        }
    };
    GLTFExporter.prototype._forEachExtensions = function (action) {
        for (var _i = 0, _a = GLTFExporter._ExtensionNames; _i < _a.length; _i++) {
            var name_4 = _a[_i];
            var extension = this._extensions[name_4];
            if (extension.enabled) {
                action(extension);
            }
        }
    };
    GLTFExporter.prototype._extensionsOnExporting = function () {
        var _this = this;
        this._forEachExtensions(function (extension) {
            var _a, _b, _c;
            if (extension.wasUsed) {
                (_a = _this._glTF).extensionsUsed || (_a.extensionsUsed = []);
                if (_this._glTF.extensionsUsed.indexOf(extension.name) === -1) {
                    _this._glTF.extensionsUsed.push(extension.name);
                }
                if (extension.required) {
                    (_b = _this._glTF).extensionsRequired || (_b.extensionsRequired = []);
                    if (_this._glTF.extensionsRequired.indexOf(extension.name) === -1) {
                        _this._glTF.extensionsRequired.push(extension.name);
                    }
                }
                (_c = _this._glTF).extensions || (_c.extensions = {});
                if (extension.onExporting) {
                    extension.onExporting();
                }
            }
        });
    };
    GLTFExporter.prototype._loadExtensions = function () {
        for (var _i = 0, _a = GLTFExporter._ExtensionNames; _i < _a.length; _i++) {
            var name_5 = _a[_i];
            var extension = GLTFExporter._ExtensionFactories[name_5](this);
            this._extensions[name_5] = extension;
        }
    };
    GLTFExporter.prototype.dispose = function () {
        for (var key in this._extensions) {
            var extension = this._extensions[key];
            extension.dispose();
        }
    };
    Object.defineProperty(GLTFExporter.prototype, "options", {
        get: function () {
            return this._options;
        },
        enumerable: false,
        configurable: true
    });
    GLTFExporter.RegisterExtension = function (name, factory) {
        if (GLTFExporter.UnregisterExtension(name)) {
            babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Warn("Extension with the name ".concat(name, " already exists"));
        }
        GLTFExporter._ExtensionFactories[name] = factory;
        GLTFExporter._ExtensionNames.push(name);
    };
    GLTFExporter.UnregisterExtension = function (name) {
        if (!GLTFExporter._ExtensionFactories[name]) {
            return false;
        }
        delete GLTFExporter._ExtensionFactories[name];
        var index = GLTFExporter._ExtensionNames.indexOf(name);
        if (index !== -1) {
            GLTFExporter._ExtensionNames.splice(index, 1);
        }
        return true;
    };
    GLTFExporter.prototype._generateJSON = function (shouldUseGlb, bufferByteLength, fileName, prettyPrint) {
        var _this = this;
        var buffer = { byteLength: bufferByteLength };
        var imageName;
        var imageData;
        var bufferView;
        var byteOffset = bufferByteLength;
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
                        bufferView = (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_3__.CreateBufferView)(0, byteOffset, imageData.data.byteLength, undefined);
                        byteOffset += imageData.data.byteLength;
                        _this._bufferViews.push(bufferView);
                        image.bufferView = _this._bufferViews.length - 1;
                        image.name = imageName;
                        image.mimeType = imageData.mimeType;
                        image.uri = undefined;
                        _this._glTF.images.push(image);
                    }
                });
                // Replace uri with bufferview and mime type for glb
                buffer.byteLength = byteOffset;
            }
        }
        if (!shouldUseGlb) {
            buffer.uri = fileName + ".bin";
        }
        return prettyPrint ? JSON.stringify(this._glTF, null, 2) : JSON.stringify(this._glTF);
    };
    GLTFExporter.prototype.generateGLTFAsync = function (glTFPrefix) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function () {
            var binaryBuffer, jsonText, bin, glTFFileName, glTFBinFile, container, image;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._generateBinaryAsync()];
                    case 1:
                        binaryBuffer = _a.sent();
                        this._extensionsOnExporting();
                        jsonText = this._generateJSON(false, binaryBuffer.byteLength, glTFPrefix, true);
                        bin = new Blob([binaryBuffer], { type: "application/octet-stream" });
                        glTFFileName = glTFPrefix + ".gltf";
                        glTFBinFile = glTFPrefix + ".bin";
                        container = new _glTFData__WEBPACK_IMPORTED_MODULE_2__.GLTFData();
                        container.files[glTFFileName] = jsonText;
                        container.files[glTFBinFile] = bin;
                        if (this._imageData) {
                            for (image in this._imageData) {
                                container.files[image] = new Blob([this._imageData[image].data], { type: this._imageData[image].mimeType });
                            }
                        }
                        return [2 /*return*/, container];
                }
            });
        });
    };
    GLTFExporter.prototype._generateBinaryAsync = function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._exportSceneAsync()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this._dataWriter.getOutputData()];
                }
            });
        });
    };
    /**
     * Pads the number to a multiple of 4
     * @param num number to pad
     * @returns padded number
     */
    GLTFExporter.prototype._getPadding = function (num) {
        var remainder = num % 4;
        var padding = remainder === 0 ? remainder : 4 - remainder;
        return padding;
    };
    GLTFExporter.prototype.generateGLBAsync = function (glTFPrefix) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function () {
            var binaryBuffer, jsonText, glbFileName, headerLength, chunkLengthPrefix, jsonLength, encodedJsonText, imageByteLength, encoder, i, jsonPadding, binPadding, imagePadding, byteLength, headerBuffer, headerBufferView, jsonChunkBuffer, jsonChunkBufferView, jsonData, blankCharCode, i, charCode, jsonPaddingView, i, binaryChunkBuffer, binaryChunkBufferView, binPaddingBuffer, binPaddingView, i, imagePaddingBuffer, imagePaddingView, i, glbData, i, glbFile, container;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._generateBinaryAsync()];
                    case 1:
                        binaryBuffer = _a.sent();
                        this._extensionsOnExporting();
                        jsonText = this._generateJSON(true, binaryBuffer.byteLength);
                        glbFileName = glTFPrefix + ".glb";
                        headerLength = 12;
                        chunkLengthPrefix = 8;
                        jsonLength = jsonText.length;
                        imageByteLength = 0;
                        // make use of TextEncoder when available
                        if (typeof TextEncoder !== "undefined") {
                            encoder = new TextEncoder();
                            encodedJsonText = encoder.encode(jsonText);
                            jsonLength = encodedJsonText.length;
                        }
                        for (i = 0; i < this._orderedImageData.length; ++i) {
                            imageByteLength += this._orderedImageData[i].data.byteLength;
                        }
                        jsonPadding = this._getPadding(jsonLength);
                        binPadding = this._getPadding(binaryBuffer.byteLength);
                        imagePadding = this._getPadding(imageByteLength);
                        byteLength = headerLength + 2 * chunkLengthPrefix + jsonLength + jsonPadding + binaryBuffer.byteLength + binPadding + imageByteLength + imagePadding;
                        headerBuffer = new ArrayBuffer(headerLength);
                        headerBufferView = new DataView(headerBuffer);
                        headerBufferView.setUint32(0, 0x46546c67, true); //glTF
                        headerBufferView.setUint32(4, 2, true); // version
                        headerBufferView.setUint32(8, byteLength, true); // total bytes in file
                        jsonChunkBuffer = new ArrayBuffer(chunkLengthPrefix + jsonLength + jsonPadding);
                        jsonChunkBufferView = new DataView(jsonChunkBuffer);
                        jsonChunkBufferView.setUint32(0, jsonLength + jsonPadding, true);
                        jsonChunkBufferView.setUint32(4, 0x4e4f534a, true);
                        jsonData = new Uint8Array(jsonChunkBuffer, chunkLengthPrefix);
                        // if TextEncoder was available, we can simply copy the encoded array
                        if (encodedJsonText) {
                            jsonData.set(encodedJsonText);
                        }
                        else {
                            blankCharCode = "_".charCodeAt(0);
                            for (i = 0; i < jsonLength; ++i) {
                                charCode = jsonText.charCodeAt(i);
                                // if the character doesn't fit into a single UTF-16 code unit, just put a blank character
                                if (charCode != jsonText.codePointAt(i)) {
                                    jsonData[i] = blankCharCode;
                                }
                                else {
                                    jsonData[i] = charCode;
                                }
                            }
                        }
                        jsonPaddingView = new Uint8Array(jsonChunkBuffer, chunkLengthPrefix + jsonLength);
                        for (i = 0; i < jsonPadding; ++i) {
                            jsonPaddingView[i] = 0x20;
                        }
                        binaryChunkBuffer = new ArrayBuffer(chunkLengthPrefix);
                        binaryChunkBufferView = new DataView(binaryChunkBuffer);
                        binaryChunkBufferView.setUint32(0, binaryBuffer.byteLength + binPadding + imageByteLength + imagePadding, true);
                        binaryChunkBufferView.setUint32(4, 0x004e4942, true);
                        binPaddingBuffer = new ArrayBuffer(binPadding);
                        binPaddingView = new Uint8Array(binPaddingBuffer);
                        for (i = 0; i < binPadding; ++i) {
                            binPaddingView[i] = 0;
                        }
                        imagePaddingBuffer = new ArrayBuffer(imagePadding);
                        imagePaddingView = new Uint8Array(imagePaddingBuffer);
                        for (i = 0; i < imagePadding; ++i) {
                            imagePaddingView[i] = 0;
                        }
                        glbData = [headerBuffer, jsonChunkBuffer, binaryChunkBuffer, binaryBuffer];
                        // binary data
                        for (i = 0; i < this._orderedImageData.length; ++i) {
                            glbData.push(this._orderedImageData[i].data);
                        }
                        glbData.push(binPaddingBuffer);
                        glbData.push(imagePaddingBuffer);
                        glbFile = new Blob(glbData, { type: "application/octet-stream" });
                        container = new _glTFData__WEBPACK_IMPORTED_MODULE_2__.GLTFData();
                        container.files[glbFileName] = glbFile;
                        return [2 /*return*/, container];
                }
            });
        });
    };
    GLTFExporter.prototype._setNodeTransformation = function (node, babylonTransformNode, convertToRightHanded) {
        if (!babylonTransformNode.getPivotPoint().equalsToFloats(0, 0, 0)) {
            babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Warn("Pivot points are not supported in the glTF serializer");
        }
        if (!babylonTransformNode.position.equalsToFloats(0, 0, 0)) {
            var translation = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Vector3[0].copyFrom(babylonTransformNode.position);
            if (convertToRightHanded) {
                (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_3__.ConvertToRightHandedPosition)(translation);
            }
            node.translation = translation.asArray();
        }
        if (!babylonTransformNode.scaling.equalsToFloats(1, 1, 1)) {
            node.scale = babylonTransformNode.scaling.asArray();
        }
        var rotationQuaternion = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.FromEulerAngles(babylonTransformNode.rotation.x, babylonTransformNode.rotation.y, babylonTransformNode.rotation.z);
        if (babylonTransformNode.rotationQuaternion) {
            rotationQuaternion.multiplyInPlace(babylonTransformNode.rotationQuaternion);
        }
        if (!babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.IsIdentity(rotationQuaternion)) {
            if (convertToRightHanded) {
                (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_3__.ConvertToRightHandedRotation)(rotationQuaternion);
            }
            node.rotation = rotationQuaternion.normalize().asArray();
        }
    };
    GLTFExporter.prototype._setCameraTransformation = function (node, babylonCamera, convertToRightHanded, parent) {
        var translation = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Vector3[0];
        var rotation = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Quaternion[0];
        if (parent !== null) {
            // Camera.getWorldMatrix returns global coordinates. GLTF node must use local coordinates. If camera has parent we need to use local translation/rotation.
            var parentWorldMatrix = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Matrix.Invert(parent.getWorldMatrix());
            var cameraWorldMatrix = babylonCamera.getWorldMatrix();
            var cameraLocal = cameraWorldMatrix.multiply(parentWorldMatrix);
            cameraLocal.decompose(undefined, rotation, translation);
        }
        else {
            babylonCamera.getWorldMatrix().decompose(undefined, rotation, translation);
        }
        if (!translation.equalsToFloats(0, 0, 0)) {
            node.translation = translation.asArray();
        }
        if (!babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.IsIdentity(rotation)) {
            node.rotation = rotation.asArray();
        }
    };
    // Export babylon cameras to glTF cameras
    GLTFExporter.prototype._listAvailableCameras = function () {
        for (var _i = 0, _a = this._babylonScene.cameras; _i < _a.length; _i++) {
            var camera = _a[_i];
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
            this._camerasMap.set(camera, glTFCamera);
        }
    };
    // Cleanup unused cameras and assign index to nodes.
    GLTFExporter.prototype._exportAndAssignCameras = function () {
        var gltfCameras = Array.from(this._camerasMap.values());
        for (var _i = 0, gltfCameras_1 = gltfCameras; _i < gltfCameras_1.length; _i++) {
            var gltfCamera = gltfCameras_1[_i];
            var usedNodes = this._nodesCameraMap.get(gltfCamera);
            if (usedNodes !== undefined) {
                this._cameras.push(gltfCamera);
                for (var _a = 0, usedNodes_1 = usedNodes; _a < usedNodes_1.length; _a++) {
                    var node = usedNodes_1[_a];
                    node.camera = this._cameras.length - 1;
                }
            }
        }
    };
    // Builds all skins in the skins array so nodes can reference it during node parsing.
    GLTFExporter.prototype._listAvailableSkeletons = function () {
        for (var _i = 0, _a = this._babylonScene.skeletons; _i < _a.length; _i++) {
            var skeleton = _a[_i];
            if (skeleton.bones.length <= 0) {
                continue;
            }
            var skin = { joints: [] };
            this._skinMap.set(skeleton, skin);
        }
    };
    GLTFExporter.prototype._exportAndAssignSkeletons = function () {
        var _this = this;
        var _a;
        for (var _i = 0, _b = this._babylonScene.skeletons; _i < _b.length; _i++) {
            var skeleton = _b[_i];
            if (skeleton.bones.length <= 0) {
                continue;
            }
            var skin = this._skinMap.get(skeleton);
            if (skin == undefined) {
                continue;
            }
            var boneIndexMap = {};
            var inverseBindMatrices = [];
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
            // Set joints index to scene node.
            for (var boneIndex = 0; boneIndex <= maxBoneIndex; ++boneIndex) {
                var bone = boneIndexMap[boneIndex];
                inverseBindMatrices.push(bone.getAbsoluteInverseBindMatrix());
                var transformNode = bone.getTransformNode();
                if (transformNode !== null) {
                    var nodeID = this._nodeMap.get(transformNode);
                    if (transformNode && nodeID !== null && nodeID !== undefined) {
                        skin.joints.push(nodeID);
                    }
                    else {
                        babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Warn("Exporting a bone without a linked transform node is currently unsupported");
                    }
                }
                else {
                    babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Warn("Exporting a bone without a linked transform node is currently unsupported");
                }
            }
            // Nodes that use this skin.
            var skinedNodes = this._nodesSkinMap.get(skin);
            // Only create skeleton if it has at least one joint and is used by a mesh.
            if (skin.joints.length > 0 && skinedNodes !== undefined) {
                // create buffer view for inverse bind matrices
                var byteStride = 64; // 4 x 4 matrix of 32 bit float
                var byteLength = inverseBindMatrices.length * byteStride;
                var bufferViewOffset = this._dataWriter.byteOffset;
                var bufferView = (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_3__.CreateBufferView)(0, bufferViewOffset, byteLength, undefined);
                this._bufferViews.push(bufferView);
                var bufferViewIndex = this._bufferViews.length - 1;
                var bindMatrixAccessor = (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_3__.CreateAccessor)(bufferViewIndex, "MAT4" /* AccessorType.MAT4 */, 5126 /* AccessorComponentType.FLOAT */, inverseBindMatrices.length, null, null);
                var inverseBindAccessorIndex = this._accessors.push(bindMatrixAccessor) - 1;
                skin.inverseBindMatrices = inverseBindAccessorIndex;
                inverseBindMatrices.forEach(function (mat) {
                    mat.m.forEach(function (cell) {
                        _this._dataWriter.writeFloat32(cell);
                    });
                });
                this._skins.push(skin);
                for (var _c = 0, skinedNodes_1 = skinedNodes; _c < skinedNodes_1.length; _c++) {
                    var skinedNode = skinedNodes_1[_c];
                    skinedNode.skin = this._skins.length - 1;
                }
            }
        }
    };
    GLTFExporter.prototype._exportSceneAsync = function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function () {
            var scene, rootNodesRH, rootNodesLH, rootNoopNodesRH, _i, _a, rootNode, stateLH, _b, _c, _d, stateRH, _e, _f, _g, noopRH, _h, _j, _k;
            var _l, _m, _o;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__generator)(this, function (_p) {
                switch (_p.label) {
                    case 0:
                        scene = { nodes: [] };
                        // Scene metadata
                        if (this._babylonScene.metadata) {
                            if (this._options.metadataSelector) {
                                scene.extras = this._options.metadataSelector(this._babylonScene.metadata);
                            }
                            else if (this._babylonScene.metadata.gltf) {
                                scene.extras = this._babylonScene.metadata.gltf.extras;
                            }
                        }
                        rootNodesRH = new Array();
                        rootNodesLH = new Array();
                        rootNoopNodesRH = new Array();
                        for (_i = 0, _a = this._babylonScene.rootNodes; _i < _a.length; _i++) {
                            rootNode = _a[_i];
                            if (this._options.removeNoopRootNodes && !this._options.includeCoordinateSystemConversionNodes && (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_3__.IsNoopNode)(rootNode, this._babylonScene.useRightHandedSystem)) {
                                rootNoopNodesRH.push.apply(rootNoopNodesRH, rootNode.getChildren());
                            }
                            else if (this._babylonScene.useRightHandedSystem) {
                                rootNodesRH.push(rootNode);
                            }
                            else {
                                rootNodesLH.push(rootNode);
                            }
                        }
                        this._listAvailableCameras();
                        this._listAvailableSkeletons();
                        stateLH = new ExporterState(true, false);
                        _c = (_b = (_l = scene.nodes).push).apply;
                        _d = [_l];
                        return [4 /*yield*/, this._exportNodesAsync(rootNodesLH, stateLH)];
                    case 1:
                        _c.apply(_b, _d.concat([(_p.sent())]));
                        stateRH = new ExporterState(false, false);
                        _f = (_e = (_m = scene.nodes).push).apply;
                        _g = [_m];
                        return [4 /*yield*/, this._exportNodesAsync(rootNodesRH, stateRH)];
                    case 2:
                        _f.apply(_e, _g.concat([(_p.sent())]));
                        noopRH = new ExporterState(false, true);
                        _j = (_h = (_o = scene.nodes).push).apply;
                        _k = [_o];
                        return [4 /*yield*/, this._exportNodesAsync(rootNoopNodesRH, noopRH)];
                    case 3:
                        _j.apply(_h, _k.concat([(_p.sent())]));
                        if (scene.nodes.length) {
                            this._scenes.push(scene);
                        }
                        this._exportAndAssignCameras();
                        this._exportAndAssignSkeletons();
                        if (this._babylonScene.animationGroups.length) {
                            _glTFAnimation__WEBPACK_IMPORTED_MODULE_5__._GLTFAnimation._CreateNodeAndMorphAnimationFromAnimationGroups(this._babylonScene, this._animations, this._nodeMap, this._dataWriter, this._bufferViews, this._accessors, this._animationSampleRate, stateLH.getNodesSet());
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    GLTFExporter.prototype._shouldExportNode = function (babylonNode) {
        var result = this._shouldExportNodeMap.get(babylonNode);
        if (result === undefined) {
            result = this._options.shouldExportNode(babylonNode);
            this._shouldExportNodeMap.set(babylonNode, result);
        }
        return result;
    };
    GLTFExporter.prototype._exportNodesAsync = function (babylonRootNodes, state) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function () {
            var nodes, _i, babylonRootNodes_1, babylonNode;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        nodes = new Array();
                        this._exportBuffers(babylonRootNodes, state);
                        _i = 0, babylonRootNodes_1 = babylonRootNodes;
                        _a.label = 1;
                    case 1:
                        if (!(_i < babylonRootNodes_1.length)) return [3 /*break*/, 4];
                        babylonNode = babylonRootNodes_1[_i];
                        return [4 /*yield*/, this._exportNodeAsync(babylonNode, nodes, state)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, nodes];
                }
            });
        });
    };
    GLTFExporter.prototype._collectBuffers = function (babylonNode, bufferToVertexBuffersMap, vertexBufferToMeshesMap, morphTargetsToMeshesMap, state) {
        if (this._shouldExportNode(babylonNode) && babylonNode instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Mesh && babylonNode.geometry) {
            var vertexBuffers = babylonNode.geometry.getVertexBuffers();
            if (vertexBuffers) {
                for (var kind in vertexBuffers) {
                    var vertexBuffer = vertexBuffers[kind];
                    state.setHasVertexColorAlpha(vertexBuffer, babylonNode.hasVertexAlpha);
                    var buffer = vertexBuffer._buffer;
                    var vertexBufferArray = bufferToVertexBuffersMap.get(buffer) || [];
                    bufferToVertexBuffersMap.set(buffer, vertexBufferArray);
                    if (vertexBufferArray.indexOf(vertexBuffer) === -1) {
                        vertexBufferArray.push(vertexBuffer);
                    }
                    var meshes = vertexBufferToMeshesMap.get(vertexBuffer) || [];
                    vertexBufferToMeshesMap.set(vertexBuffer, meshes);
                    if (meshes.indexOf(babylonNode) === -1) {
                        meshes.push(babylonNode);
                    }
                }
            }
            var morphTargetManager = babylonNode.morphTargetManager;
            if (morphTargetManager) {
                for (var morphIndex = 0; morphIndex < morphTargetManager.numTargets; morphIndex++) {
                    var morphTarget = morphTargetManager.getTarget(morphIndex);
                    var meshes = morphTargetsToMeshesMap.get(morphTarget) || [];
                    morphTargetsToMeshesMap.set(morphTarget, meshes);
                    if (meshes.indexOf(babylonNode) === -1) {
                        meshes.push(babylonNode);
                    }
                }
            }
        }
        for (var _i = 0, _a = babylonNode.getChildren(); _i < _a.length; _i++) {
            var babylonChildNode = _a[_i];
            this._collectBuffers(babylonChildNode, bufferToVertexBuffersMap, vertexBufferToMeshesMap, morphTargetsToMeshesMap, state);
        }
    };
    GLTFExporter.prototype._exportBuffers = function (babylonRootNodes, state) {
        var bufferToVertexBuffersMap = new Map();
        var vertexBufferToMeshesMap = new Map();
        var morphTagetsMeshesMap = new Map();
        for (var _i = 0, babylonRootNodes_2 = babylonRootNodes; _i < babylonRootNodes_2.length; _i++) {
            var babylonNode = babylonRootNodes_2[_i];
            this._collectBuffers(babylonNode, bufferToVertexBuffersMap, vertexBufferToMeshesMap, morphTagetsMeshesMap, state);
        }
        var buffers = Array.from(bufferToVertexBuffersMap.keys());
        var _loop_1 = function (buffer) {
            var data = buffer.getData();
            if (!data) {
                throw new Error("Buffer data is not available");
            }
            var vertexBuffers = bufferToVertexBuffersMap.get(buffer);
            if (!vertexBuffers) {
                return "continue";
            }
            var byteStride = vertexBuffers[0].byteStride;
            if (vertexBuffers.some(function (vertexBuffer) { return vertexBuffer.byteStride !== byteStride; })) {
                throw new Error("Vertex buffers pointing to the same buffer must have the same byte stride");
            }
            var bytes = (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_3__.DataArrayToUint8Array)(data).slice();
            var _loop_2 = function (vertexBuffer) {
                var byteOffset_1 = vertexBuffer.byteOffset, byteStride_1 = vertexBuffer.byteStride, type = vertexBuffer.type, normalized = vertexBuffer.normalized;
                var size = vertexBuffer.getSize();
                var meshes = vertexBufferToMeshesMap.get(vertexBuffer);
                var maxTotalVertices = meshes.reduce(function (max, current) {
                    return current.getTotalVertices() > max ? current.getTotalVertices() : max;
                }, -Number.MAX_VALUE); // To ensure nothing is missed when enumerating, but may not be necessary.
                switch (vertexBuffer.getKind()) {
                    // Normalize normals and tangents.
                    case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.NormalKind:
                    case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.TangentKind: {
                        (0,babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.EnumerateFloatValues)(bytes, byteOffset_1, byteStride_1, size, type, maxTotalVertices * size, normalized, function (values) {
                            var invLength = 1 / Math.sqrt(values[0] * values[0] + values[1] * values[1] + values[2] * values[2]);
                            values[0] *= invLength;
                            values[1] *= invLength;
                            values[2] *= invLength;
                        });
                        break;
                    }
                    // Convert StandardMaterial vertex colors from gamma to linear space.
                    case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.ColorKind: {
                        var stdMaterialCount = meshes.filter(function (mesh) { return mesh.material instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.StandardMaterial || mesh.material == null; }).length;
                        if (stdMaterialCount == 0) {
                            break; // Buffer not used by StandardMaterials, so no conversion needed.
                        }
                        // TODO: Implement this case.
                        if (stdMaterialCount != meshes.length) {
                            babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Logger.Warn("Not converting vertex color space, as buffer is shared by StandardMaterials and other material types. Results may look incorrect.");
                            break;
                        }
                        if (type == babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UNSIGNED_BYTE) {
                            babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Logger.Warn("Converting uint8 vertex colors to linear space. Results may look incorrect.");
                        }
                        var vertexData3_1 = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Color3();
                        var vertexData4_1 = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Color4();
                        var useExactSrgbConversions_1 = this_1._babylonScene.getEngine().useExactSrgbConversions;
                        (0,babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.EnumerateFloatValues)(bytes, byteOffset_1, byteStride_1, size, type, maxTotalVertices * size, normalized, function (values) {
                            // Using separate Color3 and Color4 objects to ensure the right functions are called.
                            if (values.length === 3) {
                                vertexData3_1.fromArray(values, 0);
                                vertexData3_1.toLinearSpaceToRef(vertexData3_1, useExactSrgbConversions_1);
                                vertexData3_1.toArray(values, 0);
                            }
                            else {
                                vertexData4_1.fromArray(values, 0);
                                vertexData4_1.toLinearSpaceToRef(vertexData4_1, useExactSrgbConversions_1);
                                vertexData4_1.toArray(values, 0);
                            }
                        });
                    }
                }
            };
            // Apply conversions to buffer data in-place.
            for (var _d = 0, vertexBuffers_1 = vertexBuffers; _d < vertexBuffers_1.length; _d++) {
                var vertexBuffer = vertexBuffers_1[_d];
                _loop_2(vertexBuffer);
            }
            // Performs coordinate conversion if needed (only for position, normal and tanget).
            if (state.convertToRightHanded) {
                for (var _e = 0, vertexBuffers_2 = vertexBuffers; _e < vertexBuffers_2.length; _e++) {
                    var vertexBuffer = vertexBuffers_2[_e];
                    switch (vertexBuffer.getKind()) {
                        case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.PositionKind:
                        case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.NormalKind:
                        case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.TangentKind: {
                            for (var _f = 0, _g = vertexBufferToMeshesMap.get(vertexBuffer); _f < _g.length; _f++) {
                                var mesh = _g[_f];
                                var byteOffset_2 = vertexBuffer.byteOffset, byteStride_2 = vertexBuffer.byteStride, type = vertexBuffer.type, normalized = vertexBuffer.normalized;
                                var size = vertexBuffer.getSize();
                                (0,babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.EnumerateFloatValues)(bytes, byteOffset_2, byteStride_2, size, type, mesh.getTotalVertices() * size, normalized, function (values) {
                                    values[0] = -values[0];
                                });
                            }
                        }
                    }
                }
                // Save converted bytes for min/max computation.
                state.convertedToRightHandedBuffers.set(buffer, bytes);
            }
            var byteOffset = this_1._dataWriter.byteOffset;
            this_1._dataWriter.writeUint8Array(bytes);
            this_1._bufferViews.push((0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_3__.CreateBufferView)(0, byteOffset, bytes.length, byteStride));
            state.setVertexBufferView(buffer, this_1._bufferViews.length - 1);
            var floatMatricesIndices = new Map();
            // If buffers are of type MatricesWeightsKind and have float values, we need to create a new buffer instead.
            for (var _h = 0, vertexBuffers_3 = vertexBuffers; _h < vertexBuffers_3.length; _h++) {
                var vertexBuffer = vertexBuffers_3[_h];
                switch (vertexBuffer.getKind()) {
                    case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.MatricesIndicesKind:
                    case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.MatricesIndicesExtraKind: {
                        if (vertexBuffer.type == babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.FLOAT) {
                            for (var _j = 0, _k = vertexBufferToMeshesMap.get(vertexBuffer); _j < _k.length; _j++) {
                                var mesh = _k[_j];
                                var floatData = vertexBuffer.getFloatData(mesh.getTotalVertices());
                                if (floatData !== null) {
                                    floatMatricesIndices.set(vertexBuffer, floatData);
                                }
                            }
                        }
                    }
                }
            }
            if (floatMatricesIndices.size !== 0) {
                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Logger.Warn("Joints conversion needed: some joints are stored as floats in Babylon but GLTF requires UNSIGNED BYTES. We will perform the conversion but this might lead to unused data in the buffer.");
            }
            var floatArrayVertexBuffers = Array.from(floatMatricesIndices.keys());
            for (var _l = 0, floatArrayVertexBuffers_1 = floatArrayVertexBuffers; _l < floatArrayVertexBuffers_1.length; _l++) {
                var vertexBuffer = floatArrayVertexBuffers_1[_l];
                var array = floatMatricesIndices.get(vertexBuffer);
                if (!array) {
                    continue;
                }
                var byteOffset_3 = this_1._dataWriter.byteOffset;
                if ((0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_3__.FloatsNeed16BitInteger)(array)) {
                    var newArray = new Uint16Array(array.length);
                    for (var index = 0; index < array.length; index++) {
                        newArray[index] = array[index];
                    }
                    this_1._dataWriter.writeUint16Array(newArray);
                    this_1._bufferViews.push((0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_3__.CreateBufferView)(0, byteOffset_3, newArray.byteLength, 4 * 2));
                }
                else {
                    var newArray = new Uint8Array(array.length);
                    for (var index = 0; index < array.length; index++) {
                        newArray[index] = array[index];
                    }
                    this_1._dataWriter.writeUint8Array(newArray);
                    this_1._bufferViews.push((0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_3__.CreateBufferView)(0, byteOffset_3, newArray.byteLength, 4));
                }
                state.setRemappedBufferView(buffer, vertexBuffer, this_1._bufferViews.length - 1);
            }
        };
        var this_1 = this;
        for (var _a = 0, buffers_1 = buffers; _a < buffers_1.length; _a++) {
            var buffer = buffers_1[_a];
            _loop_1(buffer);
        }
        var morphTargets = Array.from(morphTagetsMeshesMap.keys());
        for (var _b = 0, morphTargets_1 = morphTargets; _b < morphTargets_1.length; _b++) {
            var morphTarget = morphTargets_1[_b];
            var meshes = morphTagetsMeshesMap.get(morphTarget);
            if (!meshes) {
                continue;
            }
            var glTFMorphTarget = (0,_glTFMorphTargetsUtilities__WEBPACK_IMPORTED_MODULE_6__.BuildMorphTargetBuffers)(morphTarget, meshes[0], this._dataWriter, this._bufferViews, this._accessors, state.convertToRightHanded);
            for (var _c = 0, meshes_1 = meshes; _c < meshes_1.length; _c++) {
                var mesh = meshes_1[_c];
                state.bindMorphDataToMesh(mesh, glTFMorphTarget);
            }
        }
    };
    /**
     * Processes a node to be exported to the glTF file
     * @returns A promise that resolves once the node has been exported
     * @internal
     */
    GLTFExporter.prototype._exportNodeAsync = function (babylonNode, parentNodeChildren, state) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function () {
            var nodeIndex, node, runtimeGLTFAnimation, idleGLTFAnimations, children, _i, _a, babylonChildNode;
            var _this = this;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        nodeIndex = this._nodeMap.get(babylonNode);
                        if (nodeIndex !== undefined) {
                            if (!parentNodeChildren.includes(nodeIndex)) {
                                parentNodeChildren.push(nodeIndex);
                            }
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this._createNodeAsync(babylonNode, state)];
                    case 1:
                        node = _b.sent();
                        if (node) {
                            nodeIndex = this._nodes.length;
                            this._nodes.push(node);
                            this._nodeMap.set(babylonNode, nodeIndex);
                            state.pushExportedNode(babylonNode);
                            parentNodeChildren.push(nodeIndex);
                            runtimeGLTFAnimation = {
                                name: "runtime animations",
                                channels: [],
                                samplers: [],
                            };
                            idleGLTFAnimations = [];
                            if (!this._babylonScene.animationGroups.length) {
                                _glTFAnimation__WEBPACK_IMPORTED_MODULE_5__._GLTFAnimation._CreateMorphTargetAnimationFromMorphTargetAnimations(babylonNode, runtimeGLTFAnimation, idleGLTFAnimations, this._nodeMap, this._nodes, this._dataWriter, this._bufferViews, this._accessors, this._animationSampleRate, state.convertToRightHanded, this._options.shouldExportAnimation);
                                if (babylonNode.animations.length) {
                                    _glTFAnimation__WEBPACK_IMPORTED_MODULE_5__._GLTFAnimation._CreateNodeAnimationFromNodeAnimations(babylonNode, runtimeGLTFAnimation, idleGLTFAnimations, this._nodeMap, this._nodes, this._dataWriter, this._bufferViews, this._accessors, this._animationSampleRate, state.convertToRightHanded, this._options.shouldExportAnimation);
                                }
                            }
                            if (runtimeGLTFAnimation.channels.length && runtimeGLTFAnimation.samplers.length) {
                                this._animations.push(runtimeGLTFAnimation);
                            }
                            idleGLTFAnimations.forEach(function (idleGLTFAnimation) {
                                if (idleGLTFAnimation.channels.length && idleGLTFAnimation.samplers.length) {
                                    _this._animations.push(idleGLTFAnimation);
                                }
                            });
                        }
                        children = node ? [] : parentNodeChildren;
                        _i = 0, _a = babylonNode.getChildren();
                        _b.label = 2;
                    case 2:
                        if (!(_i < _a.length)) return [3 /*break*/, 5];
                        babylonChildNode = _a[_i];
                        return [4 /*yield*/, this._exportNodeAsync(babylonChildNode, children, state)];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5:
                        if (node && children.length) {
                            node.children = children;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Creates a glTF node from a Babylon.js node. If skipped, returns null.
     * @internal
     */
    GLTFExporter.prototype._createNodeAsync = function (babylonNode, state) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function () {
            var node, babylonMesh, _a, skin, gltfCamera, parentBabylonNode, parentNodeIndex, parentNode, processedNode;
            var _b, _c, _d;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__generator)(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        if (!this._shouldExportNode(babylonNode)) {
                            return [2 /*return*/, null];
                        }
                        node = {};
                        if (babylonNode.name) {
                            node.name = babylonNode.name;
                        }
                        if (!(babylonNode instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TransformNode)) return [3 /*break*/, 3];
                        this._setNodeTransformation(node, babylonNode, state.convertToRightHanded);
                        if (!(babylonNode instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Mesh || babylonNode instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.InstancedMesh)) return [3 /*break*/, 3];
                        babylonMesh = babylonNode instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Mesh ? babylonNode : babylonNode.sourceMesh;
                        if (!(babylonMesh.subMeshes && babylonMesh.subMeshes.length > 0)) return [3 /*break*/, 2];
                        _a = node;
                        return [4 /*yield*/, this._exportMeshAsync(babylonMesh, state)];
                    case 1:
                        _a.mesh = _e.sent();
                        _e.label = 2;
                    case 2:
                        if (babylonNode.skeleton) {
                            skin = this._skinMap.get(babylonNode.skeleton);
                            if (skin !== undefined) {
                                if (this._nodesSkinMap.get(skin) === undefined) {
                                    this._nodesSkinMap.set(skin, []);
                                }
                                (_b = this._nodesSkinMap.get(skin)) === null || _b === void 0 ? void 0 : _b.push(node);
                            }
                        }
                        _e.label = 3;
                    case 3:
                        if (babylonNode instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Camera) {
                            gltfCamera = this._camerasMap.get(babylonNode);
                            if (gltfCamera) {
                                if (this._nodesCameraMap.get(gltfCamera) === undefined) {
                                    this._nodesCameraMap.set(gltfCamera, []);
                                }
                                parentBabylonNode = babylonNode.parent;
                                this._setCameraTransformation(node, babylonNode, state.convertToRightHanded, parentBabylonNode);
                                // If a camera has a node that was added by the GLTF importer, we can just use the parent node transform as the "camera" transform.
                                if (parentBabylonNode && (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_3__.IsParentAddedByImporter)(babylonNode, parentBabylonNode)) {
                                    parentNodeIndex = this._nodeMap.get(parentBabylonNode);
                                    if (parentNodeIndex) {
                                        parentNode = this._nodes[parentNodeIndex];
                                        (_c = this._nodesCameraMap.get(gltfCamera)) === null || _c === void 0 ? void 0 : _c.push(parentNode);
                                        return [2 /*return*/, null]; // Skip exporting this node
                                    }
                                }
                                if (state.convertToRightHanded) {
                                    (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_3__.ConvertToRightHandedNode)(node);
                                    (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_3__.RotateNode180Y)(node);
                                }
                                (_d = this._nodesCameraMap.get(gltfCamera)) === null || _d === void 0 ? void 0 : _d.push(node);
                            }
                        }
                        return [4 /*yield*/, this._extensionsPostExportNodeAsync("exportNodeAsync", node, babylonNode, this._nodeMap, state.convertToRightHanded)];
                    case 4:
                        processedNode = _e.sent();
                        if (!processedNode) {
                            babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Logger.Warn("Not exporting node ".concat(babylonNode.name));
                            return [2 /*return*/, null];
                        }
                        return [2 /*return*/, node];
                }
            });
        });
    };
    GLTFExporter.prototype._exportIndices = function (indices, start, count, offset, fillMode, sideOrientation, state, primitive) {
        var is32Bits = (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_3__.AreIndices32Bits)(indices, count);
        var indicesToExport = indices;
        primitive.mode = (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_3__.GetPrimitiveMode)(fillMode);
        // Flip if triangle winding order is not CCW as glTF is always CCW.
        var invertedMaterial = sideOrientation !== babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Material.CounterClockWiseSideOrientation;
        var flipWhenInvertedMaterial = !state.wasAddedByNoopNode && invertedMaterial;
        var flip = (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_3__.IsTriangleFillMode)(fillMode) && flipWhenInvertedMaterial;
        if (flip) {
            if (fillMode === babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Material.TriangleStripDrawMode || fillMode === babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Material.TriangleFanDrawMode) {
                throw new Error("Triangle strip/fan fill mode is not implemented");
            }
            primitive.mode = (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_3__.GetPrimitiveMode)(fillMode);
            var newIndices = is32Bits ? new Uint32Array(count) : new Uint16Array(count);
            if (indices) {
                for (var i = 0; i + 2 < count; i += 3) {
                    newIndices[i] = indices[start + i] + offset;
                    newIndices[i + 1] = indices[start + i + 2] + offset;
                    newIndices[i + 2] = indices[start + i + 1] + offset;
                }
            }
            else {
                for (var i = 0; i + 2 < count; i += 3) {
                    newIndices[i] = i;
                    newIndices[i + 1] = i + 2;
                    newIndices[i + 2] = i + 1;
                }
            }
            indicesToExport = newIndices;
        }
        else if (indices && offset !== 0) {
            var newIndices = is32Bits ? new Uint32Array(count) : new Uint16Array(count);
            for (var i = 0; i < count; i++) {
                newIndices[i] = indices[start + i] + offset;
            }
            indicesToExport = newIndices;
        }
        if (indicesToExport) {
            var accessorIndex = state.getIndicesAccessor(indices, start, count, offset, flip);
            if (accessorIndex === undefined) {
                var bufferViewByteOffset = this._dataWriter.byteOffset;
                var bytes = (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_3__.IndicesArrayToUint8Array)(indicesToExport, start, count, is32Bits);
                this._dataWriter.writeUint8Array(bytes);
                this._bufferViews.push((0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_3__.CreateBufferView)(0, bufferViewByteOffset, bytes.length));
                var bufferViewIndex = this._bufferViews.length - 1;
                var componentType = is32Bits ? 5125 /* AccessorComponentType.UNSIGNED_INT */ : 5123 /* AccessorComponentType.UNSIGNED_SHORT */;
                this._accessors.push((0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_3__.CreateAccessor)(bufferViewIndex, "SCALAR" /* AccessorType.SCALAR */, componentType, count, 0));
                accessorIndex = this._accessors.length - 1;
                state.setIndicesAccessor(indices, start, count, offset, flip, accessorIndex);
            }
            primitive.indices = accessorIndex;
        }
    };
    GLTFExporter.prototype._exportVertexBuffer = function (vertexBuffer, babylonMaterial, start, count, state, primitive) {
        var kind = vertexBuffer.getKind();
        if (!(0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_3__.IsStandardVertexAttribute)(kind)) {
            return;
        }
        if (kind.startsWith("uv") && !this._options.exportUnusedUVs) {
            if (!babylonMaterial || !this._materialNeedsUVsSet.has(babylonMaterial)) {
                return;
            }
        }
        var accessorIndex = state.getVertexAccessor(vertexBuffer, start, count);
        if (accessorIndex === undefined) {
            // Get min/max from converted or original data.
            var data = state.convertedToRightHandedBuffers.get(vertexBuffer._buffer) || vertexBuffer._buffer.getData();
            var minMax = kind === babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.PositionKind ? (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_3__.GetMinMax)(data, vertexBuffer, start, count) : null;
            if ((kind === babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.MatricesIndicesKind || kind === babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.MatricesIndicesExtraKind) && vertexBuffer.type === babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.FLOAT) {
                var bufferViewIndex = state.getRemappedBufferView(vertexBuffer._buffer, vertexBuffer);
                if (bufferViewIndex !== undefined) {
                    var byteOffset = vertexBuffer.byteOffset + start * vertexBuffer.byteStride;
                    this._accessors.push((0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_3__.CreateAccessor)(bufferViewIndex, (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_3__.GetAccessorType)(kind, state.hasVertexColorAlpha(vertexBuffer)), babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UNSIGNED_BYTE, count, byteOffset, minMax));
                    accessorIndex = this._accessors.length - 1;
                    state.setVertexAccessor(vertexBuffer, start, count, accessorIndex);
                    primitive.attributes[(0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_3__.GetAttributeType)(kind)] = accessorIndex;
                }
            }
            else {
                var bufferViewIndex = state.getVertexBufferView(vertexBuffer._buffer);
                var byteOffset = vertexBuffer.byteOffset + start * vertexBuffer.byteStride;
                this._accessors.push((0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_3__.CreateAccessor)(bufferViewIndex, (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_3__.GetAccessorType)(kind, state.hasVertexColorAlpha(vertexBuffer)), vertexBuffer.type, count, byteOffset, minMax, vertexBuffer.normalized // TODO: Find other places where this is needed.
                ));
                accessorIndex = this._accessors.length - 1;
                state.setVertexAccessor(vertexBuffer, start, count, accessorIndex);
                primitive.attributes[(0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_3__.GetAttributeType)(kind)] = accessorIndex;
            }
        }
        else {
            primitive.attributes[(0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_3__.GetAttributeType)(kind)] = accessorIndex;
        }
    };
    GLTFExporter.prototype._exportMaterialAsync = function (babylonMaterial, vertexBuffers, subMesh, primitive) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function () {
            var materialIndex, hasUVs;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        materialIndex = this._materialMap.get(babylonMaterial);
                        if (!(materialIndex === undefined)) return [3 /*break*/, 6];
                        hasUVs = vertexBuffers && Object.keys(vertexBuffers).some(function (kind) { return kind.startsWith("uv"); });
                        babylonMaterial = babylonMaterial instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.MultiMaterial ? babylonMaterial.subMaterials[subMesh.materialIndex] : babylonMaterial;
                        if (!(babylonMaterial instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.PBRMaterial)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this._materialExporter.exportPBRMaterialAsync(babylonMaterial, "image/png" /* ImageMimeType.PNG */, hasUVs)];
                    case 1:
                        materialIndex = _a.sent();
                        return [3 /*break*/, 5];
                    case 2:
                        if (!(babylonMaterial instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.StandardMaterial)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this._materialExporter.exportStandardMaterialAsync(babylonMaterial, "image/png" /* ImageMimeType.PNG */, hasUVs)];
                    case 3:
                        materialIndex = _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Logger.Warn("Unsupported material '".concat(babylonMaterial.name, "' with type ").concat(babylonMaterial.getClassName()));
                        return [2 /*return*/];
                    case 5:
                        this._materialMap.set(babylonMaterial, materialIndex);
                        _a.label = 6;
                    case 6:
                        primitive.material = materialIndex;
                        return [2 /*return*/];
                }
            });
        });
    };
    GLTFExporter.prototype._exportMeshAsync = function (babylonMesh, state) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function () {
            var meshIndex, mesh, indices, vertexBuffers, morphTargets, isLinesMesh, subMeshes, _i, subMeshes_1, subMesh, primitive, babylonMaterial, material, babylonLinesMesh, fillMode, sideOrientation, _a, _b, vertexBuffer, _c, morphTargets_2, gltfMorphTarget, _d, morphTargets_3, gltfMorphTarget;
            var _e, _f;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__generator)(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        meshIndex = state.getMesh(babylonMesh);
                        if (meshIndex !== undefined) {
                            return [2 /*return*/, meshIndex];
                        }
                        mesh = { primitives: [] };
                        meshIndex = this._meshes.length;
                        this._meshes.push(mesh);
                        state.setMesh(babylonMesh, meshIndex);
                        indices = babylonMesh.isUnIndexed ? null : babylonMesh.getIndices();
                        vertexBuffers = (_e = babylonMesh.geometry) === null || _e === void 0 ? void 0 : _e.getVertexBuffers();
                        morphTargets = state.getMorphTargetsFromMesh(babylonMesh);
                        isLinesMesh = false;
                        if (babylonMesh instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.LinesMesh) {
                            isLinesMesh = true;
                        }
                        subMeshes = babylonMesh.subMeshes;
                        if (!(vertexBuffers && subMeshes && subMeshes.length > 0)) return [3 /*break*/, 6];
                        _i = 0, subMeshes_1 = subMeshes;
                        _g.label = 1;
                    case 1:
                        if (!(_i < subMeshes_1.length)) return [3 /*break*/, 6];
                        subMesh = subMeshes_1[_i];
                        primitive = { attributes: {} };
                        babylonMaterial = subMesh.getMaterial() || this._babylonScene.defaultMaterial;
                        if (!isLinesMesh) return [3 /*break*/, 2];
                        material = {
                            name: babylonMaterial.name,
                        };
                        babylonLinesMesh = babylonMesh;
                        if (!babylonLinesMesh.color.equals(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Color3.White()) || babylonLinesMesh.alpha < 1) {
                            material.pbrMetallicRoughness = {
                                baseColorFactor: (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_7__.__spreadArray)([], babylonLinesMesh.color.asArray(), true), [babylonLinesMesh.alpha], false),
                            };
                        }
                        this._materials.push(material);
                        primitive.material = this._materials.length - 1;
                        return [3 /*break*/, 4];
                    case 2: 
                    // Material
                    return [4 /*yield*/, this._exportMaterialAsync(babylonMaterial, vertexBuffers, subMesh, primitive)];
                    case 3:
                        // Material
                        _g.sent();
                        _g.label = 4;
                    case 4:
                        fillMode = isLinesMesh ? babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Material.LineListDrawMode : ((_f = babylonMesh.overrideRenderingFillMode) !== null && _f !== void 0 ? _f : babylonMaterial.fillMode);
                        sideOrientation = babylonMaterial._getEffectiveOrientation(babylonMesh);
                        this._exportIndices(indices, subMesh.indexStart, subMesh.indexCount, -subMesh.verticesStart, fillMode, sideOrientation, state, primitive);
                        // Vertex buffers
                        for (_a = 0, _b = Object.values(vertexBuffers); _a < _b.length; _a++) {
                            vertexBuffer = _b[_a];
                            this._exportVertexBuffer(vertexBuffer, babylonMaterial, subMesh.verticesStart, subMesh.verticesCount, state, primitive);
                        }
                        mesh.primitives.push(primitive);
                        if (morphTargets) {
                            primitive.targets = [];
                            for (_c = 0, morphTargets_2 = morphTargets; _c < morphTargets_2.length; _c++) {
                                gltfMorphTarget = morphTargets_2[_c];
                                primitive.targets.push(gltfMorphTarget.attributes);
                            }
                        }
                        _g.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 1];
                    case 6:
                        if (morphTargets) {
                            mesh.weights = [];
                            if (!mesh.extras) {
                                mesh.extras = {};
                            }
                            mesh.extras.targetNames = [];
                            for (_d = 0, morphTargets_3 = morphTargets; _d < morphTargets_3.length; _d++) {
                                gltfMorphTarget = morphTargets_3[_d];
                                mesh.weights.push(gltfMorphTarget.influence);
                                mesh.extras.targetNames.push(gltfMorphTarget.name);
                            }
                        }
                        return [2 /*return*/, meshIndex];
                }
            });
        });
    };
    GLTFExporter._ExtensionNames = new Array();
    GLTFExporter._ExtensionFactories = {};
    return GLTFExporter;
}());



/***/ }),

/***/ "../../../dev/serializers/src/glTF/2.0/glTFMaterialExporter.ts":
/*!*********************************************************************!*\
  !*** ../../../dev/serializers/src/glTF/2.0/glTFMaterialExporter.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GLTFMaterialExporter: () => (/* binding */ GLTFMaterialExporter),
/* harmony export */   _ConvertToGLTFPBRMetallicRoughness: () => (/* binding */ _ConvertToGLTFPBRMetallicRoughness),
/* harmony export */   _SolveMetallic: () => (/* binding */ _SolveMetallic)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Misc/dumpTools */ "babylonjs/Misc/tools");
/* harmony import */ var babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable babylonjs/available */










var epsilon = 1e-6;
var dielectricSpecular = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Color3(0.04, 0.04, 0.04);
var maxSpecularPower = 1024;
var white = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Color3.White();
var black = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Color3.Black();
function GetFileExtensionFromMimeType(mimeType) {
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
 * Computes the metallic factor from specular glossiness values.
 * @param diffuse diffused value
 * @param specular specular value
 * @param oneMinusSpecularStrength one minus the specular strength
 * @returns metallic value
 * @internal
 */
function _SolveMetallic(diffuse, specular, oneMinusSpecularStrength) {
    if (specular < dielectricSpecular.r) {
        dielectricSpecular;
        return 0;
    }
    var a = dielectricSpecular.r;
    var b = (diffuse * oneMinusSpecularStrength) / (1.0 - dielectricSpecular.r) + specular - 2.0 * dielectricSpecular.r;
    var c = dielectricSpecular.r - specular;
    var d = b * b - 4.0 * a * c;
    return babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Scalar.Clamp((-b + Math.sqrt(d)) / (2.0 * a), 0, 1);
}
/**
 * Computes the metallic/roughness factors from a Standard Material.
 * @internal
 */
function _ConvertToGLTFPBRMetallicRoughness(babylonStandardMaterial) {
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
    var specularPower = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Scalar.Clamp(babylonStandardMaterial.specularPower, 0, maxSpecularPower);
    var roughness = solveForRoughness(specularPower);
    var glTFPbrMetallicRoughness = {
        baseColorFactor: [diffuse.r, diffuse.g, diffuse.b, opacity],
        metallicFactor: 0,
        roughnessFactor: roughness,
    };
    return glTFPbrMetallicRoughness;
}
/**
 * Sets the glTF alpha mode to a glTF material from the Babylon Material
 * @param glTFMaterial glTF material
 * @param babylonMaterial Babylon material
 */
function SetAlphaMode(glTFMaterial, babylonMaterial) {
    if (babylonMaterial.needAlphaBlending()) {
        glTFMaterial.alphaMode = "BLEND" /* MaterialAlphaMode.BLEND */;
    }
    else if (babylonMaterial.needAlphaTesting()) {
        glTFMaterial.alphaMode = "MASK" /* MaterialAlphaMode.MASK */;
        glTFMaterial.alphaCutoff = babylonMaterial.alphaCutOff;
    }
}
function CreateWhiteTexture(width, height, scene) {
    var data = new Uint8Array(width * height * 4);
    for (var i = 0; i < data.length; i = i + 4) {
        data[i] = data[i + 1] = data[i + 2] = data[i + 3] = 0xff;
    }
    var rawTexture = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.RawTexture.CreateRGBATexture(data, width, height, scene);
    return rawTexture;
}
function ConvertPixelArrayToFloat32(pixels) {
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
}
/**
 * Utility methods for working with glTF material conversion properties.
 * @internal
 */
var GLTFMaterialExporter = /** @class */ (function () {
    function GLTFMaterialExporter(_exporter) {
        this._exporter = _exporter;
        // Mapping to store textures
        this._textureMap = new Map();
        // Mapping of internal textures to images to avoid exporting duplicate images
        this._internalTextureToImage = {};
    }
    GLTFMaterialExporter.prototype.getTextureInfo = function (babylonTexture) {
        var _a;
        return babylonTexture ? ((_a = this._textureMap.get(babylonTexture)) !== null && _a !== void 0 ? _a : null) : null;
    };
    GLTFMaterialExporter.prototype.exportStandardMaterialAsync = function (babylonStandardMaterial, mimeType, hasUVs) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function () {
            var pbrMetallicRoughness, material, promises, diffuseTexture, bumpTexture_1, emissiveTexture, ambientTexture, materials;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pbrMetallicRoughness = _ConvertToGLTFPBRMetallicRoughness(babylonStandardMaterial);
                        material = { name: babylonStandardMaterial.name };
                        if (babylonStandardMaterial.backFaceCulling != null && !babylonStandardMaterial.backFaceCulling) {
                            if (!babylonStandardMaterial.twoSidedLighting) {
                                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Warn(babylonStandardMaterial.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF.");
                            }
                            material.doubleSided = true;
                        }
                        if (!hasUVs) return [3 /*break*/, 2];
                        promises = [];
                        diffuseTexture = babylonStandardMaterial.diffuseTexture;
                        if (diffuseTexture) {
                            promises.push(this.exportTextureAsync(diffuseTexture, mimeType).then(function (textureInfo) {
                                if (textureInfo) {
                                    pbrMetallicRoughness.baseColorTexture = textureInfo;
                                }
                            }));
                        }
                        bumpTexture_1 = babylonStandardMaterial.bumpTexture;
                        if (bumpTexture_1) {
                            promises.push(this.exportTextureAsync(bumpTexture_1, mimeType).then(function (textureInfo) {
                                if (textureInfo) {
                                    material.normalTexture = textureInfo;
                                    if (bumpTexture_1.level !== 1) {
                                        material.normalTexture.scale = bumpTexture_1.level;
                                    }
                                }
                            }));
                        }
                        emissiveTexture = babylonStandardMaterial.emissiveTexture;
                        if (emissiveTexture) {
                            material.emissiveFactor = [1.0, 1.0, 1.0];
                            promises.push(this.exportTextureAsync(emissiveTexture, mimeType).then(function (textureInfo) {
                                if (textureInfo) {
                                    material.emissiveTexture = textureInfo;
                                }
                            }));
                        }
                        ambientTexture = babylonStandardMaterial.ambientTexture;
                        if (ambientTexture) {
                            promises.push(this.exportTextureAsync(ambientTexture, mimeType).then(function (textureInfo) {
                                if (textureInfo) {
                                    var occlusionTexture = {
                                        index: textureInfo.index,
                                    };
                                    material.occlusionTexture = occlusionTexture;
                                }
                            }));
                        }
                        if (!(promises.length > 0)) return [3 /*break*/, 2];
                        this._exporter._materialNeedsUVsSet.add(babylonStandardMaterial);
                        return [4 /*yield*/, Promise.all(promises)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (babylonStandardMaterial.alpha < 1.0 || babylonStandardMaterial.opacityTexture) {
                            if (babylonStandardMaterial.alphaMode === babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Constants.ALPHA_COMBINE) {
                                material.alphaMode = "BLEND" /* MaterialAlphaMode.BLEND */;
                            }
                            else {
                                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Warn(babylonStandardMaterial.name + ": glTF 2.0 does not support alpha mode: " + babylonStandardMaterial.alphaMode.toString());
                            }
                        }
                        if (babylonStandardMaterial.emissiveColor && !babylonStandardMaterial.emissiveColor.equalsWithEpsilon(black, epsilon)) {
                            material.emissiveFactor = babylonStandardMaterial.emissiveColor.asArray();
                        }
                        material.pbrMetallicRoughness = pbrMetallicRoughness;
                        SetAlphaMode(material, babylonStandardMaterial);
                        return [4 /*yield*/, this._finishMaterialAsync(material, babylonStandardMaterial, mimeType)];
                    case 3:
                        _a.sent();
                        materials = this._exporter._materials;
                        materials.push(material);
                        return [2 /*return*/, materials.length - 1];
                }
            });
        });
    };
    GLTFMaterialExporter.prototype._finishMaterialAsync = function (glTFMaterial, babylonMaterial, mimeType) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function () {
            var textures, promises, _i, textures_1, texture;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        textures = this._exporter._extensionsPostExportMaterialAdditionalTextures("exportMaterial", glTFMaterial, babylonMaterial);
                        promises = [];
                        for (_i = 0, textures_1 = textures; _i < textures_1.length; _i++) {
                            texture = textures_1[_i];
                            promises.push(this.exportTextureAsync(texture, mimeType));
                        }
                        return [4 /*yield*/, Promise.all(promises)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this._exporter._extensionsPostExportMaterialAsync("exportMaterial", glTFMaterial, babylonMaterial)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    GLTFMaterialExporter.prototype._getImageDataAsync = function (buffer, width, height, mimeType) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function () {
            var textureType, hostingScene, engine, tempTexture, _a, data;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        textureType = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Constants.TEXTURETYPE_UNSIGNED_BYTE;
                        hostingScene = this._exporter._babylonScene;
                        engine = hostingScene.getEngine();
                        tempTexture = engine.createRawTexture(buffer, width, height, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Constants.TEXTUREFORMAT_RGBA, false, true, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Texture.NEAREST_SAMPLINGMODE, null, textureType);
                        if (!engine.isWebGPU) return [3 /*break*/, 2];
                        return [4 /*yield*/, Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! babylonjs/ShadersWGSL/pass.fragment */ "babylonjs/Misc/tools", 23))];
                    case 1:
                        _a = _b.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! babylonjs/Shaders/pass.fragment */ "babylonjs/Misc/tools", 23))];
                    case 3:
                        _a = _b.sent();
                        _b.label = 4;
                    case 4:
                        _a;
                        return [4 /*yield*/, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TextureTools.ApplyPostProcess("pass", tempTexture, hostingScene, textureType, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Constants.TEXTURE_NEAREST_SAMPLINGMODE, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Constants.TEXTUREFORMAT_RGBA)];
                    case 5:
                        _b.sent();
                        return [4 /*yield*/, engine._readTexturePixels(tempTexture, width, height)];
                    case 6:
                        data = _b.sent();
                        return [4 /*yield*/, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.DumpTools.DumpDataAsync(width, height, data, mimeType, undefined, true, true)];
                    case 7: return [2 /*return*/, (_b.sent())];
                }
            });
        });
    };
    /**
     * Resizes the two source textures to the same dimensions.  If a texture is null, a default white texture is generated.  If both textures are null, returns null
     * @param texture1 first texture to resize
     * @param texture2 second texture to resize
     * @param scene babylonjs scene
     * @returns resized textures or null
     */
    GLTFMaterialExporter.prototype._resizeTexturesToSameDimensions = function (texture1, texture2, scene) {
        var texture1Size = texture1 ? texture1.getSize() : { width: 0, height: 0 };
        var texture2Size = texture2 ? texture2.getSize() : { width: 0, height: 0 };
        var resizedTexture1;
        var resizedTexture2;
        if (texture1Size.width < texture2Size.width) {
            if (texture1 && texture1 instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Texture) {
                resizedTexture1 = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TextureTools.CreateResizedCopy(texture1, texture2Size.width, texture2Size.height, true);
            }
            else {
                resizedTexture1 = CreateWhiteTexture(texture2Size.width, texture2Size.height, scene);
            }
            resizedTexture2 = texture2;
        }
        else if (texture1Size.width > texture2Size.width) {
            if (texture2 && texture2 instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Texture) {
                resizedTexture2 = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TextureTools.CreateResizedCopy(texture2, texture1Size.width, texture1Size.height, true);
            }
            else {
                resizedTexture2 = CreateWhiteTexture(texture1Size.width, texture1Size.height, scene);
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
     * Convert Specular Glossiness Textures to Metallic Roughness
     * See link below for info on the material conversions from PBR Metallic/Roughness and Specular/Glossiness
     * @see https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Archived/KHR_materials_pbrSpecularGlossiness/examples/convert-between-workflows-bjs/js/babylon.pbrUtilities.js
     * @param diffuseTexture texture used to store diffuse information
     * @param specularGlossinessTexture texture used to store specular and glossiness information
     * @param factors specular glossiness material factors
     * @param mimeType the mime type to use for the texture
     * @returns pbr metallic roughness interface or null
     */
    GLTFMaterialExporter.prototype._convertSpecularGlossinessTexturesToMetallicRoughnessAsync = function (diffuseTexture, specularGlossinessTexture, factors, mimeType) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function () {
            var promises, scene, resizedTextures, diffuseSize, diffuseBuffer, specularGlossinessBuffer, width, height, diffusePixels, specularPixels, byteLength, metallicRoughnessBuffer, baseColorBuffer, strideSize, maxBaseColor, maxMetallic, maxRoughness, h, w, offset, diffuseColor, specularColor, glossiness, specularGlossiness, metallicRoughness, metallicRoughnessFactors_1, writeOutMetallicRoughnessTexture, writeOutBaseColorTexture, h, w, destinationOffset, linearBaseColorPixel, sRGBBaseColorPixel, metallicRoughnessPixel;
            var _a;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        promises = new Array();
                        if (!(diffuseTexture || specularGlossinessTexture)) {
                            return [2 /*return*/, Promise.reject("diffuse and specular glossiness textures are not defined!")];
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
                            diffuseBuffer = ConvertPixelArrayToFloat32(diffusePixels);
                        }
                        else {
                            return [2 /*return*/, Promise.reject("Failed to retrieve pixels from diffuse texture!")];
                        }
                        if (specularPixels) {
                            specularGlossinessBuffer = ConvertPixelArrayToFloat32(specularPixels);
                        }
                        else {
                            return [2 /*return*/, Promise.reject("Failed to retrieve pixels from specular glossiness texture!")];
                        }
                        byteLength = specularGlossinessBuffer.byteLength;
                        metallicRoughnessBuffer = new Uint8Array(byteLength);
                        baseColorBuffer = new Uint8Array(byteLength);
                        strideSize = 4;
                        maxBaseColor = black;
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
                                baseColorBuffer[destinationOffset] /= metallicRoughnessFactors_1.baseColor.r > epsilon ? metallicRoughnessFactors_1.baseColor.r : 1;
                                baseColorBuffer[destinationOffset + 1] /= metallicRoughnessFactors_1.baseColor.g > epsilon ? metallicRoughnessFactors_1.baseColor.g : 1;
                                baseColorBuffer[destinationOffset + 2] /= metallicRoughnessFactors_1.baseColor.b > epsilon ? metallicRoughnessFactors_1.baseColor.b : 1;
                                linearBaseColorPixel = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Color3.FromInts(baseColorBuffer[destinationOffset], baseColorBuffer[destinationOffset + 1], baseColorBuffer[destinationOffset + 2]);
                                sRGBBaseColorPixel = linearBaseColorPixel.toGammaSpace(scene.getEngine().useExactSrgbConversions);
                                baseColorBuffer[destinationOffset] = sRGBBaseColorPixel.r * 255;
                                baseColorBuffer[destinationOffset + 1] = sRGBBaseColorPixel.g * 255;
                                baseColorBuffer[destinationOffset + 2] = sRGBBaseColorPixel.b * 255;
                                if (!sRGBBaseColorPixel.equalsWithEpsilon(white, epsilon)) {
                                    writeOutBaseColorTexture = true;
                                }
                                metallicRoughnessBuffer[destinationOffset + 1] /= metallicRoughnessFactors_1.roughness > epsilon ? metallicRoughnessFactors_1.roughness : 1;
                                metallicRoughnessBuffer[destinationOffset + 2] /= metallicRoughnessFactors_1.metallic > epsilon ? metallicRoughnessFactors_1.metallic : 1;
                                metallicRoughnessPixel = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Color3.FromInts(255, metallicRoughnessBuffer[destinationOffset + 1], metallicRoughnessBuffer[destinationOffset + 2]);
                                if (!metallicRoughnessPixel.equalsWithEpsilon(white, epsilon)) {
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
    GLTFMaterialExporter.prototype._convertSpecularGlossinessToMetallicRoughness = function (specularGlossiness) {
        var diffusePerceivedBrightness = this._getPerceivedBrightness(specularGlossiness.diffuseColor);
        var specularPerceivedBrightness = this._getPerceivedBrightness(specularGlossiness.specularColor);
        var oneMinusSpecularStrength = 1 - this._getMaxComponent(specularGlossiness.specularColor);
        var metallic = _SolveMetallic(diffusePerceivedBrightness, specularPerceivedBrightness, oneMinusSpecularStrength);
        var baseColorFromDiffuse = specularGlossiness.diffuseColor.scale(oneMinusSpecularStrength / (1.0 - dielectricSpecular.r) / Math.max(1 - metallic));
        var baseColorFromSpecular = specularGlossiness.specularColor.subtract(dielectricSpecular.scale(1 - metallic)).scale(1 / Math.max(metallic));
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
    GLTFMaterialExporter.prototype._getPerceivedBrightness = function (color) {
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
    GLTFMaterialExporter.prototype._getMaxComponent = function (color) {
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
     * @param hasUVs specifies if texture coordinates are present on the submesh to determine if textures should be applied
     * @returns glTF PBR Metallic Roughness factors
     */
    GLTFMaterialExporter.prototype._convertMetalRoughFactorsToMetallicRoughnessAsync = function (babylonPBRMaterial, mimeType, glTFPbrMetallicRoughness, hasUVs) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function () {
            var promises, metallicRoughness, albedoTexture, metallicTexture;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        promises = [];
                        metallicRoughness = {
                            baseColor: babylonPBRMaterial._albedoColor,
                            metallic: babylonPBRMaterial._metallic,
                            roughness: babylonPBRMaterial._roughness,
                        };
                        if (hasUVs) {
                            albedoTexture = babylonPBRMaterial._albedoTexture;
                            if (albedoTexture) {
                                promises.push(this.exportTextureAsync(babylonPBRMaterial._albedoTexture, mimeType).then(function (glTFTexture) {
                                    if (glTFTexture) {
                                        glTFPbrMetallicRoughness.baseColorTexture = glTFTexture;
                                    }
                                }));
                            }
                            metallicTexture = babylonPBRMaterial._metallicTexture;
                            if (metallicTexture) {
                                promises.push(this.exportTextureAsync(metallicTexture, mimeType).then(function (glTFTexture) {
                                    if (glTFTexture) {
                                        glTFPbrMetallicRoughness.metallicRoughnessTexture = glTFTexture;
                                    }
                                }));
                            }
                        }
                        if (!(promises.length > 0)) return [3 /*break*/, 2];
                        this._exporter._materialNeedsUVsSet.add(babylonPBRMaterial);
                        return [4 /*yield*/, Promise.all(promises)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/, metallicRoughness];
                }
            });
        });
    };
    GLTFMaterialExporter.prototype._getTextureSampler = function (texture) {
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
    GLTFMaterialExporter.prototype._getGLTFTextureWrapMode = function (wrapMode) {
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
     * @param hasUVs specifies if texture coordinates are present on the submesh to determine if textures should be applied
     * @returns glTF PBR Metallic Roughness factors
     */
    GLTFMaterialExporter.prototype._convertSpecGlossFactorsToMetallicRoughnessAsync = function (babylonPBRMaterial, mimeType, pbrMetallicRoughness, hasUVs) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function () {
            var specGloss, albedoTexture, reflectivityTexture, useMicrosurfaceFromReflectivityMapAlpha, samplerIndex, metallicRoughnessFactors, textures, imageIndex, imageIndex;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        specGloss = {
                            diffuseColor: babylonPBRMaterial._albedoColor,
                            specularColor: babylonPBRMaterial._reflectivityColor,
                            glossiness: babylonPBRMaterial._microSurface,
                        };
                        albedoTexture = babylonPBRMaterial._albedoTexture;
                        reflectivityTexture = babylonPBRMaterial._reflectivityTexture;
                        useMicrosurfaceFromReflectivityMapAlpha = babylonPBRMaterial._useMicroSurfaceFromReflectivityMapAlpha;
                        if (reflectivityTexture && !useMicrosurfaceFromReflectivityMapAlpha) {
                            return [2 /*return*/, Promise.reject("_ConvertPBRMaterial: Glossiness values not included in the reflectivity texture are currently not supported")];
                        }
                        if (!((albedoTexture || reflectivityTexture) && hasUVs)) return [3 /*break*/, 2];
                        this._exporter._materialNeedsUVsSet.add(babylonPBRMaterial);
                        samplerIndex = this._exportTextureSampler(albedoTexture || reflectivityTexture);
                        return [4 /*yield*/, this._convertSpecularGlossinessTexturesToMetallicRoughnessAsync(albedoTexture, reflectivityTexture, specGloss, mimeType)];
                    case 1:
                        metallicRoughnessFactors = _a.sent();
                        textures = this._exporter._textures;
                        if (metallicRoughnessFactors.baseColorTextureData) {
                            imageIndex = this._exportImage("baseColor".concat(textures.length), mimeType, metallicRoughnessFactors.baseColorTextureData);
                            pbrMetallicRoughness.baseColorTexture = this._exportTextureInfo(imageIndex, samplerIndex, albedoTexture === null || albedoTexture === void 0 ? void 0 : albedoTexture.coordinatesIndex);
                        }
                        if (metallicRoughnessFactors.metallicRoughnessTextureData) {
                            imageIndex = this._exportImage("metallicRoughness".concat(textures.length), mimeType, metallicRoughnessFactors.metallicRoughnessTextureData);
                            pbrMetallicRoughness.metallicRoughnessTexture = this._exportTextureInfo(imageIndex, samplerIndex, reflectivityTexture === null || reflectivityTexture === void 0 ? void 0 : reflectivityTexture.coordinatesIndex);
                        }
                        return [2 /*return*/, metallicRoughnessFactors];
                    case 2: return [2 /*return*/, this._convertSpecularGlossinessToMetallicRoughness(specGloss)];
                }
            });
        });
    };
    GLTFMaterialExporter.prototype.exportPBRMaterialAsync = function (babylonPBRMaterial, mimeType, hasUVs) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function () {
            var glTFPbrMetallicRoughness, glTFMaterial, useMetallicRoughness, albedoColor, alpha, metallicRoughness, _a, materials;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        glTFPbrMetallicRoughness = {};
                        glTFMaterial = {
                            name: babylonPBRMaterial.name,
                        };
                        useMetallicRoughness = babylonPBRMaterial.isMetallicWorkflow();
                        if (useMetallicRoughness) {
                            albedoColor = babylonPBRMaterial._albedoColor;
                            alpha = babylonPBRMaterial.alpha;
                            if (albedoColor) {
                                glTFPbrMetallicRoughness.baseColorFactor = [albedoColor.r, albedoColor.g, albedoColor.b, alpha];
                            }
                        }
                        if (!useMetallicRoughness) return [3 /*break*/, 2];
                        return [4 /*yield*/, this._convertMetalRoughFactorsToMetallicRoughnessAsync(babylonPBRMaterial, mimeType, glTFPbrMetallicRoughness, hasUVs)];
                    case 1:
                        _a = _b.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this._convertSpecGlossFactorsToMetallicRoughnessAsync(babylonPBRMaterial, mimeType, glTFPbrMetallicRoughness, hasUVs)];
                    case 3:
                        _a = _b.sent();
                        _b.label = 4;
                    case 4:
                        metallicRoughness = _a;
                        return [4 /*yield*/, this._setMetallicRoughnessPbrMaterialAsync(metallicRoughness, babylonPBRMaterial, glTFMaterial, glTFPbrMetallicRoughness, mimeType, hasUVs)];
                    case 5:
                        _b.sent();
                        return [4 /*yield*/, this._finishMaterialAsync(glTFMaterial, babylonPBRMaterial, mimeType)];
                    case 6:
                        _b.sent();
                        materials = this._exporter._materials;
                        materials.push(glTFMaterial);
                        return [2 /*return*/, materials.length - 1];
                }
            });
        });
    };
    GLTFMaterialExporter.prototype._setMetallicRoughnessPbrMaterialAsync = function (metallicRoughness, babylonPBRMaterial, glTFMaterial, glTFPbrMetallicRoughness, mimeType, hasUVs) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function () {
            var promises, bumpTexture_2, ambientTexture, emissiveTexture, emissiveColor;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        SetAlphaMode(glTFMaterial, babylonPBRMaterial);
                        if (!metallicRoughness.baseColor.equalsWithEpsilon(white, epsilon) || !babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Scalar.WithinEpsilon(babylonPBRMaterial.alpha, 1, epsilon)) {
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
                        if (!hasUVs) return [3 /*break*/, 2];
                        promises = [];
                        bumpTexture_2 = babylonPBRMaterial._bumpTexture;
                        if (bumpTexture_2) {
                            promises.push(this.exportTextureAsync(bumpTexture_2, mimeType).then(function (glTFTexture) {
                                if (glTFTexture) {
                                    glTFMaterial.normalTexture = glTFTexture;
                                    if (bumpTexture_2.level !== 1) {
                                        glTFMaterial.normalTexture.scale = bumpTexture_2.level;
                                    }
                                }
                            }));
                        }
                        ambientTexture = babylonPBRMaterial._ambientTexture;
                        if (ambientTexture) {
                            promises.push(this.exportTextureAsync(ambientTexture, mimeType).then(function (glTFTexture) {
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
                            }));
                        }
                        emissiveTexture = babylonPBRMaterial._emissiveTexture;
                        if (emissiveTexture) {
                            promises.push(this.exportTextureAsync(emissiveTexture, mimeType).then(function (glTFTexture) {
                                if (glTFTexture) {
                                    glTFMaterial.emissiveTexture = glTFTexture;
                                }
                            }));
                        }
                        if (!(promises.length > 0)) return [3 /*break*/, 2];
                        this._exporter._materialNeedsUVsSet.add(babylonPBRMaterial);
                        return [4 /*yield*/, Promise.all(promises)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        emissiveColor = babylonPBRMaterial._emissiveColor;
                        if (!emissiveColor.equalsWithEpsilon(black, epsilon)) {
                            glTFMaterial.emissiveFactor = emissiveColor.asArray();
                        }
                        glTFMaterial.pbrMetallicRoughness = glTFPbrMetallicRoughness;
                        return [2 /*return*/];
                }
            });
        });
    };
    GLTFMaterialExporter.prototype._getPixelsFromTexture = function (babylonTexture) {
        var pixels = babylonTexture.textureType === babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Constants.TEXTURETYPE_UNSIGNED_BYTE
            ? babylonTexture.readPixels()
            : babylonTexture.readPixels();
        return pixels;
    };
    GLTFMaterialExporter.prototype.exportTextureAsync = function (babylonTexture, mimeType) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function () {
            var extensionPromise;
            var _this = this;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__generator)(this, function (_a) {
                extensionPromise = this._exporter._extensionsPreExportTextureAsync("exporter", babylonTexture, mimeType);
                if (!extensionPromise) {
                    return [2 /*return*/, this._exportTextureInfoAsync(babylonTexture, mimeType)];
                }
                return [2 /*return*/, extensionPromise.then(function (texture) {
                        if (!texture) {
                            return _this._exportTextureInfoAsync(babylonTexture, mimeType);
                        }
                        return _this._exportTextureInfoAsync(texture, mimeType);
                    })];
            });
        });
    };
    GLTFMaterialExporter.prototype._exportTextureInfoAsync = function (babylonTexture, mimeType) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function () {
            var textureInfo, pixels_1, samplerIndex, textureMimeType, internalTextureToImage, internalTextureUniqueId, imageIndexPromise, size_1, _a;
            var _this = this;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        textureInfo = this._textureMap.get(babylonTexture);
                        if (!!textureInfo) return [3 /*break*/, 3];
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
                        this._textureMap.set(babylonTexture, textureInfo);
                        this._exporter._extensionsPostExportTextures("exporter", textureInfo, babylonTexture);
                        _b.label = 3;
                    case 3: return [2 /*return*/, textureInfo];
                }
            });
        });
    };
    GLTFMaterialExporter.prototype._exportImage = function (name, mimeType, data) {
        var imageData = this._exporter._imageData;
        var baseName = name.replace(/\.\/|\/|\.\\|\\/g, "_");
        var extension = GetFileExtensionFromMimeType(mimeType);
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
    GLTFMaterialExporter.prototype._exportTextureInfo = function (imageIndex, samplerIndex, coordinatesIndex) {
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
    GLTFMaterialExporter.prototype._exportTextureSampler = function (texture) {
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
    return GLTFMaterialExporter;
}());



/***/ }),

/***/ "../../../dev/serializers/src/glTF/2.0/glTFMorphTargetsUtilities.ts":
/*!**************************************************************************!*\
  !*** ../../../dev/serializers/src/glTF/2.0/glTFMorphTargetsUtilities.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BuildMorphTargetBuffers: () => (/* binding */ BuildMorphTargetBuffers)
/* harmony export */ });
/* harmony import */ var _glTFUtilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glTFUtilities */ "../../../dev/serializers/src/glTF/2.0/glTFUtilities.ts");
/* harmony import */ var babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs/Misc/tools */ "babylonjs/Misc/tools");
/* harmony import */ var babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__);




function BuildMorphTargetBuffers(morphTarget, mesh, dataWriter, bufferViews, accessors, convertToRightHanded) {
    var result = {
        attributes: {},
        influence: morphTarget.influence,
        name: morphTarget.name,
    };
    var flipX = convertToRightHanded ? -1 : 1;
    var floatSize = 4;
    var difference = babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.Vector3.Zero();
    var vertexStart = 0;
    var vertexCount = 0;
    var byteOffset = 0;
    var bufferViewIndex = 0;
    if (morphTarget.hasPositions) {
        var morphPositions = morphTarget.getPositions();
        var originalPositions = mesh.getVerticesData(babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.PositionKind, undefined, undefined, true);
        if (originalPositions) {
            var min = [Infinity, Infinity, Infinity];
            var max = [-Infinity, -Infinity, -Infinity];
            vertexCount = originalPositions.length / 3;
            byteOffset = dataWriter.byteOffset;
            vertexStart = 0;
            for (var i = vertexStart; i < vertexCount; ++i) {
                var originalPosition = babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.Vector3.FromArray(originalPositions, i * 3);
                var morphPosition = babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.Vector3.FromArray(morphPositions, i * 3);
                morphPosition.subtractToRef(originalPosition, difference);
                difference.x *= flipX;
                min[0] = Math.min(min[0], difference.x);
                max[0] = Math.max(max[0], difference.x);
                min[1] = Math.min(min[1], difference.y);
                max[1] = Math.max(max[1], difference.y);
                min[2] = Math.min(min[2], difference.z);
                max[2] = Math.max(max[2], difference.z);
                dataWriter.writeFloat32(difference.x);
                dataWriter.writeFloat32(difference.y);
                dataWriter.writeFloat32(difference.z);
            }
            bufferViews.push((0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_0__.CreateBufferView)(0, byteOffset, morphPositions.length * floatSize, floatSize * 3));
            bufferViewIndex = bufferViews.length - 1;
            accessors.push((0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_0__.CreateAccessor)(bufferViewIndex, "VEC3" /* AccessorType.VEC3 */, 5126 /* AccessorComponentType.FLOAT */, morphPositions.length / 3, 0, { min: min, max: max }));
            result.attributes["POSITION"] = accessors.length - 1;
        }
        else {
            babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.Tools.Warn("Morph target positions for mesh ".concat(mesh.name, " were not exported. Mesh does not have position vertex data"));
        }
    }
    if (morphTarget.hasNormals) {
        var morphNormals = morphTarget.getNormals();
        var originalNormals = mesh.getVerticesData(babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.NormalKind, undefined, undefined, true);
        if (originalNormals) {
            vertexCount = originalNormals.length / 3;
            byteOffset = dataWriter.byteOffset;
            vertexStart = 0;
            for (var i = vertexStart; i < vertexCount; ++i) {
                var originalNormal = babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.Vector3.FromArray(originalNormals, i * 3).normalize();
                var morphNormal = babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.Vector3.FromArray(morphNormals, i * 3).normalize();
                morphNormal.subtractToRef(originalNormal, difference);
                dataWriter.writeFloat32(difference.x * flipX);
                dataWriter.writeFloat32(difference.y);
                dataWriter.writeFloat32(difference.z);
            }
            bufferViews.push((0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_0__.CreateBufferView)(0, byteOffset, morphNormals.length * floatSize, floatSize * 3));
            bufferViewIndex = bufferViews.length - 1;
            accessors.push((0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_0__.CreateAccessor)(bufferViewIndex, "VEC3" /* AccessorType.VEC3 */, 5126 /* AccessorComponentType.FLOAT */, morphNormals.length / 3, 0));
            result.attributes["NORMAL"] = accessors.length - 1;
        }
        else {
            babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.Tools.Warn("Morph target normals for mesh ".concat(mesh.name, " were not exported. Mesh does not have normals vertex data"));
        }
    }
    if (morphTarget.hasTangents) {
        var morphTangents = morphTarget.getTangents();
        var originalTangents = mesh.getVerticesData(babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.TangentKind, undefined, undefined, true);
        if (originalTangents) {
            vertexCount = originalTangents.length / 4;
            vertexStart = 0;
            byteOffset = dataWriter.byteOffset;
            for (var i = vertexStart; i < vertexCount; ++i) {
                // Only read the x, y, z components and ignore w
                var originalTangent = babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.Vector3.FromArray(originalTangents, i * 4);
                (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_0__.NormalizeTangent)(originalTangent);
                // Morph target tangents omit the w component so it won't be present in the data
                var morphTangent = babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.Vector3.FromArray(morphTangents, i * 3);
                (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_0__.NormalizeTangent)(morphTangent);
                morphTangent.subtractToRef(originalTangent, difference);
                dataWriter.writeFloat32(difference.x * flipX);
                dataWriter.writeFloat32(difference.y);
                dataWriter.writeFloat32(difference.z);
            }
            bufferViews.push((0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_0__.CreateBufferView)(0, byteOffset, vertexCount * floatSize * 3, floatSize * 3));
            bufferViewIndex = bufferViews.length - 1;
            accessors.push((0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_0__.CreateAccessor)(bufferViewIndex, "VEC3" /* AccessorType.VEC3 */, 5126 /* AccessorComponentType.FLOAT */, vertexCount, 0));
            result.attributes["TANGENT"] = accessors.length - 1;
        }
        else {
            babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.Tools.Warn("Morph target tangents for mesh ".concat(mesh.name, " were not exported. Mesh does not have tangents vertex data"));
        }
    }
    return result;
}


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _glTFExporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glTFExporter */ "../../../dev/serializers/src/glTF/2.0/glTFExporter.ts");


/**
 * Class for generating glTF data from a Babylon scene.
 */
var GLTF2Export = /** @class */ (function () {
    function GLTF2Export() {
    }
    /**
     * Exports the scene to .gltf file format
     * @param scene Babylon scene
     * @param fileName Name to use for the .gltf file
     * @param options Exporter options
     * @returns Returns the exported data
     */
    GLTF2Export.GLTFAsync = function (scene, fileName, options) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function () {
            var exporter, data;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(!options || !options.exportWithoutWaitingForScene)) return [3 /*break*/, 2];
                        return [4 /*yield*/, scene.whenReadyAsync()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        exporter = new _glTFExporter__WEBPACK_IMPORTED_MODULE_0__.GLTFExporter(scene, options);
                        return [4 /*yield*/, exporter.generateGLTFAsync(fileName.replace(/\.[^/.]+$/, ""))];
                    case 3:
                        data = _a.sent();
                        exporter.dispose();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    /**
     * Exports the scene to .glb file format
     * @param scene Babylon scene
     * @param fileName Name to use for the .glb file
     * @param options Exporter options
     * @returns Returns the exported data
     */
    GLTF2Export.GLBAsync = function (scene, fileName, options) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function () {
            var exporter, data;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(!options || !options.exportWithoutWaitingForScene)) return [3 /*break*/, 2];
                        return [4 /*yield*/, scene.whenReadyAsync()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        exporter = new _glTFExporter__WEBPACK_IMPORTED_MODULE_0__.GLTFExporter(scene, options);
                        return [4 /*yield*/, exporter.generateGLBAsync(fileName.replace(/\.[^/.]+$/, ""))];
                    case 3:
                        data = _a.sent();
                        exporter.dispose();
                        return [2 /*return*/, data];
                }
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
/* harmony export */   AreIndices32Bits: () => (/* binding */ AreIndices32Bits),
/* harmony export */   CollapseParentNode: () => (/* binding */ CollapseParentNode),
/* harmony export */   ConvertCameraRotationToGLTF: () => (/* binding */ ConvertCameraRotationToGLTF),
/* harmony export */   ConvertToRightHandedNode: () => (/* binding */ ConvertToRightHandedNode),
/* harmony export */   ConvertToRightHandedPosition: () => (/* binding */ ConvertToRightHandedPosition),
/* harmony export */   ConvertToRightHandedRotation: () => (/* binding */ ConvertToRightHandedRotation),
/* harmony export */   CreateAccessor: () => (/* binding */ CreateAccessor),
/* harmony export */   CreateBufferView: () => (/* binding */ CreateBufferView),
/* harmony export */   DataArrayToUint8Array: () => (/* binding */ DataArrayToUint8Array),
/* harmony export */   FloatsNeed16BitInteger: () => (/* binding */ FloatsNeed16BitInteger),
/* harmony export */   GetAccessorElementCount: () => (/* binding */ GetAccessorElementCount),
/* harmony export */   GetAccessorType: () => (/* binding */ GetAccessorType),
/* harmony export */   GetAttributeType: () => (/* binding */ GetAttributeType),
/* harmony export */   GetMinMax: () => (/* binding */ GetMinMax),
/* harmony export */   GetPrimitiveMode: () => (/* binding */ GetPrimitiveMode),
/* harmony export */   IndicesArrayToUint8Array: () => (/* binding */ IndicesArrayToUint8Array),
/* harmony export */   IsNoopNode: () => (/* binding */ IsNoopNode),
/* harmony export */   IsParentAddedByImporter: () => (/* binding */ IsParentAddedByImporter),
/* harmony export */   IsStandardVertexAttribute: () => (/* binding */ IsStandardVertexAttribute),
/* harmony export */   IsTriangleFillMode: () => (/* binding */ IsTriangleFillMode),
/* harmony export */   NormalizeTangent: () => (/* binding */ NormalizeTangent),
/* harmony export */   OmitDefaultValues: () => (/* binding */ OmitDefaultValues),
/* harmony export */   RotateNode180Y: () => (/* binding */ RotateNode180Y)
/* harmony export */ });
/* harmony import */ var babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Buffers/bufferUtils */ "babylonjs/Misc/tools");
/* harmony import */ var babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable jsdoc/require-jsdoc */







// Matrix that converts handedness on the X-axis.
var convertHandednessMatrix = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Matrix.Compose(new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3(-1, 1, 1), babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.Identity(), babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Zero());
// 180 degrees rotation in Y.
var rotation180Y = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion(0, 1, 0, 0);
// Default values for comparison.
var epsilon = 1e-6;
var defaultTranslation = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Zero();
var defaultScale = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.One();
/**
 * Creates a buffer view based on the supplied arguments
 * @param bufferIndex index value of the specified buffer
 * @param byteOffset byte offset value
 * @param byteLength byte length of the bufferView
 * @param byteStride byte distance between conequential elements
 * @returns bufferView for glTF
 */
function CreateBufferView(bufferIndex, byteOffset, byteLength, byteStride) {
    var bufferview = { buffer: bufferIndex, byteLength: byteLength };
    if (byteOffset) {
        bufferview.byteOffset = byteOffset;
    }
    if (byteStride) {
        bufferview.byteStride = byteStride;
    }
    return bufferview;
}
/**
 * Creates an accessor based on the supplied arguments
 * @param bufferViewIndex The index of the bufferview referenced by this accessor
 * @param type The type of the accessor
 * @param componentType The datatype of components in the attribute
 * @param count The number of attributes referenced by this accessor
 * @param byteOffset The offset relative to the start of the bufferView in bytes
 * @param minMax Minimum and maximum value of each component in this attribute
 * @param normalized Specifies whether integer data values are normalized before usage
 * @returns accessor for glTF
 */
function CreateAccessor(bufferViewIndex, type, componentType, count, byteOffset, minMax, normalized) {
    if (minMax === void 0) { minMax = null; }
    var accessor = { bufferView: bufferViewIndex, componentType: componentType, count: count, type: type };
    if (minMax != null) {
        accessor.min = minMax.min;
        accessor.max = minMax.max;
    }
    if (normalized) {
        accessor.normalized = normalized;
    }
    if (byteOffset != null) {
        accessor.byteOffset = byteOffset;
    }
    return accessor;
}
function GetAccessorElementCount(accessorType) {
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
}
function FloatsNeed16BitInteger(floatArray) {
    return floatArray.some(function (value) { return value >= 256; });
}
function IsStandardVertexAttribute(type) {
    switch (type) {
        case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.PositionKind:
        case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.NormalKind:
        case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.TangentKind:
        case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.ColorKind:
        case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.MatricesIndicesKind:
        case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.MatricesIndicesExtraKind:
        case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.MatricesWeightsKind:
        case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.MatricesWeightsExtraKind:
        case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UVKind:
        case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UV2Kind:
        case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UV3Kind:
        case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UV4Kind:
        case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UV5Kind:
        case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UV6Kind:
            return true;
    }
    return false;
}
function GetAccessorType(kind, hasVertexColorAlpha) {
    if (kind == babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.ColorKind) {
        return hasVertexColorAlpha ? "VEC4" /* AccessorType.VEC4 */ : "VEC3" /* AccessorType.VEC3 */;
    }
    switch (kind) {
        case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.PositionKind:
        case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.NormalKind:
            return "VEC3" /* AccessorType.VEC3 */;
        case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.TangentKind:
        case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.MatricesIndicesKind:
        case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.MatricesIndicesExtraKind:
        case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.MatricesWeightsKind:
        case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.MatricesWeightsExtraKind:
            return "VEC4" /* AccessorType.VEC4 */;
        case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UVKind:
        case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UV2Kind:
        case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UV3Kind:
        case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UV4Kind:
        case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UV5Kind:
        case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UV6Kind:
            return "VEC2" /* AccessorType.VEC2 */;
    }
    throw new Error("Unknown kind ".concat(kind));
}
function GetAttributeType(kind) {
    switch (kind) {
        case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.PositionKind:
            return "POSITION";
        case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.NormalKind:
            return "NORMAL";
        case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.TangentKind:
            return "TANGENT";
        case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.ColorKind:
            return "COLOR_0";
        case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UVKind:
            return "TEXCOORD_0";
        case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UV2Kind:
            return "TEXCOORD_1";
        case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UV3Kind:
            return "TEXCOORD_2";
        case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UV4Kind:
            return "TEXCOORD_3";
        case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UV5Kind:
            return "TEXCOORD_4";
        case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UV6Kind:
            return "TEXCOORD_5";
        case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.MatricesIndicesKind:
            return "JOINTS_0";
        case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.MatricesIndicesExtraKind:
            return "JOINTS_1";
        case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.MatricesWeightsKind:
            return "WEIGHTS_0";
        case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.MatricesWeightsExtraKind:
            return "WEIGHTS_1";
    }
    throw new Error("Unknown kind: ".concat(kind));
}
function GetPrimitiveMode(fillMode) {
    switch (fillMode) {
        case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Material.TriangleFillMode:
            return 4 /* MeshPrimitiveMode.TRIANGLES */;
        case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Material.TriangleStripDrawMode:
            return 5 /* MeshPrimitiveMode.TRIANGLE_STRIP */;
        case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Material.TriangleFanDrawMode:
            return 6 /* MeshPrimitiveMode.TRIANGLE_FAN */;
        case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Material.PointListDrawMode:
        case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Material.PointFillMode:
            return 0 /* MeshPrimitiveMode.POINTS */;
        case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Material.LineLoopDrawMode:
            return 2 /* MeshPrimitiveMode.LINE_LOOP */;
        case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Material.LineListDrawMode:
            return 1 /* MeshPrimitiveMode.LINES */;
        case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Material.LineStripDrawMode:
            return 3 /* MeshPrimitiveMode.LINE_STRIP */;
    }
    throw new Error("Unknown fill mode: ".concat(fillMode));
}
function IsTriangleFillMode(fillMode) {
    switch (fillMode) {
        case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Material.TriangleFillMode:
        case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Material.TriangleStripDrawMode:
        case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Material.TriangleFanDrawMode:
            return true;
    }
    return false;
}
function NormalizeTangent(tangent) {
    var length = Math.sqrt(tangent.x * tangent.x + tangent.y * tangent.y + tangent.z * tangent.z);
    if (length > 0) {
        tangent.x /= length;
        tangent.y /= length;
        tangent.z /= length;
    }
}
function ConvertToRightHandedPosition(value) {
    value.x *= -1;
    return value;
}
function ConvertToRightHandedRotation(value) {
    value.x *= -1;
    value.y *= -1;
    return value;
}
function ConvertToRightHandedNode(value) {
    var translation = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArrayToRef(value.translation || [0, 0, 0], 0, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Vector3[0]);
    var rotation = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.FromArrayToRef(value.rotation || [0, 0, 0, 1], 0, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Quaternion[0]);
    translation = ConvertToRightHandedPosition(translation);
    rotation = ConvertToRightHandedRotation(rotation);
    if (translation.equalsWithEpsilon(defaultTranslation, epsilon)) {
        delete value.translation;
    }
    else {
        value.translation = translation.asArray();
    }
    if (babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.IsIdentity(rotation)) {
        delete value.rotation;
    }
    else {
        value.rotation = rotation.asArray();
    }
}
/**
 * Rotation by 180 as glTF has a different convention than Babylon.
 * @param rotation Target camera rotation.
 * @returns Ref to camera rotation.
 */
function ConvertCameraRotationToGLTF(rotation) {
    return rotation.multiplyInPlace(rotation180Y);
}
function RotateNode180Y(node) {
    if (node.rotation) {
        var rotation = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.FromArrayToRef(node.rotation || [0, 0, 0, 1], 0, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Quaternion[1]);
        rotation180Y.multiplyToRef(rotation, rotation);
        node.rotation = rotation.asArray();
    }
}
/**
 * Collapses GLTF parent and node into a single node. This is useful for removing nodes that were added by the GLTF importer.
 * @param node Target parent node.
 * @param parentNode Original GLTF node (Light or Camera).
 */
function CollapseParentNode(node, parentNode) {
    var parentTranslation = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArrayToRef(parentNode.translation || [0, 0, 0], 0, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Vector3[0]);
    var parentRotation = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.FromArrayToRef(parentNode.rotation || [0, 0, 0, 1], 0, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Quaternion[0]);
    var parentScale = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArrayToRef(parentNode.scale || [1, 1, 1], 0, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Vector3[1]);
    var parentMatrix = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Matrix.ComposeToRef(parentScale, parentRotation, parentTranslation, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Matrix[0]);
    var translation = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArrayToRef(node.translation || [0, 0, 0], 0, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Vector3[2]);
    var rotation = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.FromArrayToRef(node.rotation || [0, 0, 0, 1], 0, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Quaternion[1]);
    var scale = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArrayToRef(node.scale || [1, 1, 1], 0, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Vector3[1]);
    var matrix = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Matrix.ComposeToRef(scale, rotation, translation, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Matrix[1]);
    parentMatrix.multiplyToRef(matrix, matrix);
    matrix.decompose(parentScale, parentRotation, parentTranslation);
    if (parentTranslation.equalsWithEpsilon(defaultTranslation, epsilon)) {
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
    if (parentScale.equalsWithEpsilon(defaultScale, epsilon)) {
        delete parentNode.scale;
    }
    else {
        parentNode.scale = parentScale.asArray();
    }
}
/**
 * Sometimes the GLTF Importer can add extra transform nodes (for lights and cameras). This checks if a parent node was added by the GLTF Importer. If so, it should be removed during serialization.
 * @param babylonNode Original GLTF node (Light or Camera).
 * @param parentBabylonNode Target parent node.
 * @returns True if the parent node was added by the GLTF importer.
 */
function IsParentAddedByImporter(babylonNode, parentBabylonNode) {
    return parentBabylonNode instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TransformNode && parentBabylonNode.getChildren().length == 1 && babylonNode.getChildren().length == 0;
}
function IsNoopNode(node, useRightHandedSystem) {
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
function AreIndices32Bits(indices, count) {
    if (indices) {
        if (indices instanceof Array) {
            return indices.some(function (value) { return value >= 65536; });
        }
        return indices.BYTES_PER_ELEMENT === 4;
    }
    return count >= 65536;
}
function IndicesArrayToUint8Array(indices, start, count, is32Bits) {
    if (indices instanceof Array) {
        var subarray = indices.slice(start, start + count);
        indices = is32Bits ? new Uint32Array(subarray) : new Uint16Array(subarray);
        return new Uint8Array(indices.buffer, indices.byteOffset, indices.byteLength);
    }
    return ArrayBuffer.isView(indices) ? new Uint8Array(indices.buffer, indices.byteOffset, indices.byteLength) : new Uint8Array(indices);
}
function DataArrayToUint8Array(data) {
    if (data instanceof Array) {
        var floatData = new Float32Array(data);
        return new Uint8Array(floatData.buffer, floatData.byteOffset, floatData.byteLength);
    }
    return ArrayBuffer.isView(data) ? new Uint8Array(data.buffer, data.byteOffset, data.byteLength) : new Uint8Array(data);
}
function GetMinMax(data, vertexBuffer, start, count) {
    var byteOffset = vertexBuffer.byteOffset, byteStride = vertexBuffer.byteStride, type = vertexBuffer.type, normalized = vertexBuffer.normalized;
    var size = vertexBuffer.getSize();
    var min = new Array(size).fill(Infinity);
    var max = new Array(size).fill(-Infinity);
    (0,babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.EnumerateFloatValues)(data, byteOffset + start * byteStride, byteStride, size, type, count * size, normalized, function (values) {
        for (var i = 0; i < size; i++) {
            min[i] = Math.min(min[i], values[i]);
            max[i] = Math.max(max[i], values[i]);
        }
    });
    return { min: min, max: max };
}
/**
 * Removes, in-place, object properties which have the same value as the default value.
 * Useful for avoiding unnecessary properties in the glTF JSON.
 * @param object the object to omit default values from
 * @param defaultValues a partial object with default values
 * @returns object with default values omitted
 */
function OmitDefaultValues(object, defaultValues) {
    for (var _i = 0, _a = Object.entries(object); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        var defaultValue = defaultValues[key];
        if ((Array.isArray(value) && Array.isArray(defaultValue) && AreArraysEqual(value, defaultValue)) || value === defaultValue) {
            delete object[key];
        }
    }
    return object;
}
function AreArraysEqual(array1, array2) {
    return array1.length === array2.length && array1.every(function (val, i) { return val === array2[i]; });
}


/***/ }),

/***/ "../../../dev/serializers/src/glTF/2.0/index.ts":
/*!******************************************************!*\
  !*** ../../../dev/serializers/src/glTF/2.0/index.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GLTF2Export: () => (/* reexport safe */ _glTFSerializer__WEBPACK_IMPORTED_MODULE_1__.GLTF2Export),
/* harmony export */   GLTFData: () => (/* reexport safe */ _glTFData__WEBPACK_IMPORTED_MODULE_0__.GLTFData),
/* harmony export */   _ConvertToGLTFPBRMetallicRoughness: () => (/* reexport safe */ _glTFMaterialExporter__WEBPACK_IMPORTED_MODULE_2__._ConvertToGLTFPBRMetallicRoughness),
/* harmony export */   _SolveMetallic: () => (/* reexport safe */ _glTFMaterialExporter__WEBPACK_IMPORTED_MODULE_2__._SolveMetallic)
/* harmony export */ });
/* harmony import */ var _glTFData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glTFData */ "../../../dev/serializers/src/glTF/2.0/glTFData.ts");
/* harmony import */ var _glTFSerializer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./glTFSerializer */ "../../../dev/serializers/src/glTF/2.0/glTFSerializer.ts");
/* harmony import */ var _glTFMaterialExporter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./glTFMaterialExporter */ "../../../dev/serializers/src/glTF/2.0/glTFMaterialExporter.ts");





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

/***/ "../../../lts/serializers/src/legacy/legacy-glTF2Serializer.ts":
/*!*********************************************************************!*\
  !*** ../../../lts/serializers/src/legacy/legacy-glTF2Serializer.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GLTF2Export: () => (/* reexport safe */ serializers_glTF_2_0_index__WEBPACK_IMPORTED_MODULE_4__.GLTF2Export),
/* harmony export */   GLTFData: () => (/* reexport safe */ serializers_glTF_2_0_index__WEBPACK_IMPORTED_MODULE_4__.GLTFData),
/* harmony export */   _ConvertToGLTFPBRMetallicRoughness: () => (/* reexport safe */ serializers_glTF_2_0_index__WEBPACK_IMPORTED_MODULE_4__._ConvertToGLTFPBRMetallicRoughness),
/* harmony export */   _SolveMetallic: () => (/* reexport safe */ serializers_glTF_2_0_index__WEBPACK_IMPORTED_MODULE_4__._SolveMetallic),
/* harmony export */   __IGLTFExporterExtension: () => (/* reexport safe */ serializers_glTF_glTFFileExporter__WEBPACK_IMPORTED_MODULE_0__.__IGLTFExporterExtension)
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

/***/ "babylonjs/Misc/tools":
/*!****************************************************************************************************!*\
  !*** external {"root":"BABYLON","commonjs":"babylonjs","commonjs2":"babylonjs","amd":"babylonjs"} ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_babylonjs_Misc_tools__;

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
/* harmony export */   __rewriteRelativeImportExtension: () => (/* binding */ __rewriteRelativeImportExtension),
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
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */

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
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
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
  return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
  function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
  function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
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

var ownKeys = function(o) {
  ownKeys = Object.getOwnPropertyNames || function (o) {
    var ar = [];
    for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
    return ar;
  };
  return ownKeys(o);
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
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
    var dispose, inner;
    if (async) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    if (inner) dispose = function() { try { inner.call(this); } catch (e) { return Promise.reject(e); } };
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
  var r, s = 0;
  function next() {
    while (r = env.stack.pop()) {
      try {
        if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
        if (r.dispose) {
          var result = r.dispose.call(r.value);
          if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
        }
        else s |= 1;
      }
      catch (e) {
        fail(e);
      }
    }
    if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
    if (env.hasError) throw env.error;
  }
  return next();
}

function __rewriteRelativeImportExtension(path, preserveJsx) {
  if (typeof path === "string" && /^\.\.?\//.test(path)) {
      return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (m, tsx, d, ext, cm) {
          return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : (d + ext + "." + cm.toLowerCase() + "js");
      });
  }
  return path;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __esDecorate,
  __runInitializers,
  __propKey,
  __setFunctionName,
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
  __rewriteRelativeImportExtension,
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
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/glTF2.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   serializers: () => (/* reexport module object */ _lts_serializers_legacy_legacy_glTF2Serializer__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _lts_serializers_legacy_legacy_glTF2Serializer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lts/serializers/legacy/legacy-glTF2Serializer */ "../../../lts/serializers/src/legacy/legacy-glTF2Serializer.ts");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_lts_serializers_legacy_legacy_glTF2Serializer__WEBPACK_IMPORTED_MODULE_0__);

})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFieWxvbi5nbFRGMlNlcmlhbGl6ZXIuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFjQTtBQWJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBR0E7QUFDQTtBQUVBO0FBR0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFFQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUFBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4TEE7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBZUE7O0FBRUE7QUFDQTtBQWpCQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFXQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQURBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FBUUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqTEE7QUFFQTtBQUdBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBY0E7QUFiQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUdBO0FBQ0E7QUFFQTtBQUdBO0FBREE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakZBO0FBRUE7QUFHQTtBQUVBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBY0E7QUFiQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUdBO0FBQ0E7QUFFQTtBQUdBO0FBREE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzR0E7QUFFQTtBQUdBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQWNBO0FBYkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFHQTtBQUNBO0FBRUE7QUFHQTtBQURBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFBQTtBQUNBOztBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekhBO0FBRUE7QUFFQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFZQTtBQUNBO0FBWkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFHQTtBQUVBO0FBQ0E7QUFHQTtBQURBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUVBO0FBRUE7QUFHQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUE2Q0E7QUEzQ0E7QUFDQTtBQUdBO0FBREE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRUE7QUFFQTtBQUVBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBWUE7QUFYQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUdBO0FBREE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRUE7QUFFQTtBQUdBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBY0E7QUFiQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUdBO0FBQ0E7QUFFQTtBQUdBO0FBREE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RkE7QUFFQTtBQUdBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBY0E7QUFiQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFFQTtBQUdBO0FBREE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRkE7QUFFQTtBQUdBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBY0E7QUFiQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUFBO0FBQ0E7O0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEhBO0FBRUE7QUFFQTtBQUVBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBY0E7QUFiQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7Ozs7OztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTs7O0FBSUE7QUFDQTs7QUFHQTs7OztBQUNBO0FBQ0E7QUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkhBO0FBRUE7QUFDQTtBQUVBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBWUE7QUFYQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBR0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFFQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6REE7QUFFQTtBQUVBO0FBRUE7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFjQTtBQWJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBR0E7QUFDQTtBQUVBO0FBR0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUFBO0FBQ0E7O0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2SEE7QUFJQTtBQUVBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQWFBO0FBWkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFHQTtBQURBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFFQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBOzs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFLQTtBQUNBO0FBRUE7QUF3REE7OztBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQUE7QUE4Z0NBO0FBN2dDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQWFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBYUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7OztBQVlBO0FBQ0E7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7O0FBWUE7QUFDQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7OztBQVdBO0FBQ0E7O0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFlQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBOztBQTlEQTtBQUFBO0FBK0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUE5SUE7QUFBQTtBQUFBO0FBK0lBO0FBQ0E7QUFDQTtBQUVBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FBZUE7QUFDQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBV0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBUUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7O0FBUUE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7OztBQVFBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzbUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQW1CQTtBQWRBO0FBSEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUdBO0FBRUE7QUFDQTtBQW9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFxQkE7QUFwQkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBV0E7QUFDQTtBQVRBO0FBQ0E7QUFDQTtBQVNBOztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFzS0E7QUFBQTtBQXJLQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBU0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQXVIQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBWUE7QUFDQTtBQXJJQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUVBO0FBQUE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7OztBQUNBOztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUNBO0FBRUE7Ozs7QUFDQTs7QUFBQTtBQUNBOzs7O0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7OztBQUNBOztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7O0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7OztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7O0FBQUE7O0FBQUE7QUFDQTtBQUNBOztBQUFBOztBQUFBO0FBQ0E7QUFDQTs7QUFBQTs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBVUE7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7OztBQUNBO0FBRUE7QUFFQTs7O0FBQUE7QUFBQTtBQUNBOztBQUFBOzs7QUFEQTs7QUFJQTs7OztBQUNBO0FBRUE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBeERBO0FBQ0E7QUFBQTtBQUFBO0FBd0RBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBRUE7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBN0pBO0FBQUE7QUFBQTtBQThKQTtBQUVBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQWFBO0FBQ0E7QUFhQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTs7O0FBQUE7QUFBQTtBQUNBOztBQUFBOzs7QUFEQTs7O0FBSUE7QUFDQTtBQUNBOzs7OztBQUNBO0FBRUE7OztBQUdBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUFBOzs7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7OztBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUNBO0FBRUE7QUFVQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFTQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQUE7OztBQUNBO0FBQ0E7O0FBQUE7OztBQUVBO0FBQ0E7O0FBR0E7OztBQUdBOzs7OztBQUNBO0FBRUE7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7OztBQUFBO0FBQUE7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFFQTtBQUNBOztBQURBO0FBQ0E7OztBQUlBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUE3Q0E7OztBQWlEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUNBO0FBNXdDQTtBQUNBO0FBNHdDQTtBQUFBO0FBL3pDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxTkE7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFLQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBT0E7QUFBQTtBQU5BO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTs7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBOztBQUFBOzs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOztBQUFBO0FBRUE7QUFDQTtBQUNBOzs7O0FBQ0E7QUFFQTs7Ozs7O0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBQUE7QUFFQTs7QUFBQTs7Ozs7QUFDQTtBQUVBOzs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUVBO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7OztBQUFBO0FBQ0E7O0FBQUE7QUFFQTs7QUFBQTtBQUVBO0FBQUE7Ozs7QUFDQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7O0FBU0E7QUFDQTs7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBOztBQUFBO0FBQ0E7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7QUFFQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7QUFPQTtBQUNBOzs7Ozs7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBQUE7O0FBR0E7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7QUFPQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7O0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7O0FBRUE7QUFFQTs7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFBQTs7QUFDQTs7QUFBQTs7O0FBRkE7QUFJQTs7QUFBQTtBQUNBOztBQUFBO0FBRUE7QUFDQTtBQUNBOzs7O0FBQ0E7QUFFQTs7Ozs7O0FBUUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBOztBQUFBOzs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBRUE7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFDQTs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBOztBQUFBO0FBQ0E7QUFDQTs7QUFHQTs7OztBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDci9CQTtBQUVBO0FBQ0E7QUFDQTtBQVlBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6SUE7QUFzREE7O0FBRUE7QUFDQTtBQUFBO0FBc0NBO0FBckNBOzs7Ozs7QUFNQTtBQUNBOzs7Ozs7QUFDQTtBQUNBOztBQUFBOzs7QUFHQTtBQUNBOztBQUFBO0FBQ0E7QUFFQTs7OztBQUNBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7Ozs7OztBQUNBO0FBQ0E7O0FBQUE7OztBQUdBO0FBQ0E7O0FBQUE7QUFDQTtBQUVBOzs7O0FBQ0E7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkdBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBTUE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0YUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7OztBQ2pEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNoWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2Rldi9zZXJpYWxpemVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9FWFRfbWVzaF9ncHVfaW5zdGFuY2luZy50cyIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy8uLi8uLi8uLi9kZXYvc2VyaWFsaXplcnMvc3JjL2dsVEYvMi4wL0V4dGVuc2lvbnMvS0hSX2xpZ2h0c19wdW5jdHVhbC50cyIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy8uLi8uLi8uLi9kZXYvc2VyaWFsaXplcnMvc3JjL2dsVEYvMi4wL0V4dGVuc2lvbnMvS0hSX21hdGVyaWFsc19hbmlzb3Ryb3B5LnRzIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2Rldi9zZXJpYWxpemVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9LSFJfbWF0ZXJpYWxzX2NsZWFyY29hdC50cyIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy8uLi8uLi8uLi9kZXYvc2VyaWFsaXplcnMvc3JjL2dsVEYvMi4wL0V4dGVuc2lvbnMvS0hSX21hdGVyaWFsc19kaWZmdXNlX3RyYW5zbWlzc2lvbi50cyIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy8uLi8uLi8uLi9kZXYvc2VyaWFsaXplcnMvc3JjL2dsVEYvMi4wL0V4dGVuc2lvbnMvS0hSX21hdGVyaWFsc19kaXNwZXJzaW9uLnRzIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2Rldi9zZXJpYWxpemVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9LSFJfbWF0ZXJpYWxzX2VtaXNzaXZlX3N0cmVuZ3RoLnRzIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2Rldi9zZXJpYWxpemVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9LSFJfbWF0ZXJpYWxzX2lvci50cyIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy8uLi8uLi8uLi9kZXYvc2VyaWFsaXplcnMvc3JjL2dsVEYvMi4wL0V4dGVuc2lvbnMvS0hSX21hdGVyaWFsc19pcmlkZXNjZW5jZS50cyIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy8uLi8uLi8uLi9kZXYvc2VyaWFsaXplcnMvc3JjL2dsVEYvMi4wL0V4dGVuc2lvbnMvS0hSX21hdGVyaWFsc19zaGVlbi50cyIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy8uLi8uLi8uLi9kZXYvc2VyaWFsaXplcnMvc3JjL2dsVEYvMi4wL0V4dGVuc2lvbnMvS0hSX21hdGVyaWFsc19zcGVjdWxhci50cyIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy8uLi8uLi8uLi9kZXYvc2VyaWFsaXplcnMvc3JjL2dsVEYvMi4wL0V4dGVuc2lvbnMvS0hSX21hdGVyaWFsc190cmFuc21pc3Npb24udHMiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvLi4vLi4vLi4vZGV2L3NlcmlhbGl6ZXJzL3NyYy9nbFRGLzIuMC9FeHRlbnNpb25zL0tIUl9tYXRlcmlhbHNfdW5saXQudHMiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvLi4vLi4vLi4vZGV2L3NlcmlhbGl6ZXJzL3NyYy9nbFRGLzIuMC9FeHRlbnNpb25zL0tIUl9tYXRlcmlhbHNfdm9sdW1lLnRzIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2Rldi9zZXJpYWxpemVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9LSFJfdGV4dHVyZV90cmFuc2Zvcm0udHMiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvLi4vLi4vLi4vZGV2L3NlcmlhbGl6ZXJzL3NyYy9nbFRGLzIuMC9FeHRlbnNpb25zL2luZGV4LnRzIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2Rldi9zZXJpYWxpemVycy9zcmMvZ2xURi8yLjAvZGF0YVdyaXRlci50cyIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy8uLi8uLi8uLi9kZXYvc2VyaWFsaXplcnMvc3JjL2dsVEYvMi4wL2dsVEZBbmltYXRpb24udHMiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvLi4vLi4vLi4vZGV2L3NlcmlhbGl6ZXJzL3NyYy9nbFRGLzIuMC9nbFRGRGF0YS50cyIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy8uLi8uLi8uLi9kZXYvc2VyaWFsaXplcnMvc3JjL2dsVEYvMi4wL2dsVEZFeHBvcnRlci50cyIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy8uLi8uLi8uLi9kZXYvc2VyaWFsaXplcnMvc3JjL2dsVEYvMi4wL2dsVEZNYXRlcmlhbEV4cG9ydGVyLnRzIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2Rldi9zZXJpYWxpemVycy9zcmMvZ2xURi8yLjAvZ2xURk1vcnBoVGFyZ2V0c1V0aWxpdGllcy50cyIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy8uLi8uLi8uLi9kZXYvc2VyaWFsaXplcnMvc3JjL2dsVEYvMi4wL2dsVEZTZXJpYWxpemVyLnRzIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2Rldi9zZXJpYWxpemVycy9zcmMvZ2xURi8yLjAvZ2xURlV0aWxpdGllcy50cyIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy8uLi8uLi8uLi9kZXYvc2VyaWFsaXplcnMvc3JjL2dsVEYvMi4wL2luZGV4LnRzIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2Rldi9zZXJpYWxpemVycy9zcmMvZ2xURi9nbFRGRmlsZUV4cG9ydGVyLnRzIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2x0cy9zZXJpYWxpemVycy9zcmMvbGVnYWN5L2xlZ2FjeS1nbFRGMlNlcmlhbGl6ZXIudHMiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvZXh0ZXJuYWwgdW1kIHtcInJvb3RcIjpcIkJBQllMT05cIixcImNvbW1vbmpzXCI6XCJiYWJ5bG9uanNcIixcImNvbW1vbmpzMlwiOlwiYmFieWxvbmpzXCIsXCJhbWRcIjpcImJhYnlsb25qc1wifSIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2Lm1qcyIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy93ZWJwYWNrL3J1bnRpbWUvY3JlYXRlIGZha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL1NFUklBTElaRVJTL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvLi9zcmMvZ2xURjIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiYmFieWxvbmpzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiYmFieWxvbmpzLXNlcmlhbGl6ZXJzXCIsIFtcImJhYnlsb25qc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJiYWJ5bG9uanMtc2VyaWFsaXplcnNcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJiYWJ5bG9uanNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlNFUklBTElaRVJTXCJdID0gZmFjdG9yeShyb290W1wiQkFCWUxPTlwiXSk7XG59KSgodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHRoaXMpLCAoX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9iYWJ5bG9uanNfTWlzY190b29sc19fKSA9PiB7XG5yZXR1cm4gIiwiaW1wb3J0IHR5cGUgeyBJQnVmZmVyVmlldywgSUFjY2Vzc29yLCBJTm9kZSwgSUVYVE1lc2hHcHVJbnN0YW5jaW5nIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBBY2Nlc3NvclR5cGUsIEFjY2Vzc29yQ29tcG9uZW50VHlwZSB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHR5cGUgeyBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIgfSBmcm9tIFwiLi4vZ2xURkV4cG9ydGVyRXh0ZW5zaW9uXCI7XHJcbmltcG9ydCB0eXBlIHsgRGF0YVdyaXRlciB9IGZyb20gXCIuLi9kYXRhV3JpdGVyXCI7XHJcbmltcG9ydCB7IEdMVEZFeHBvcnRlciB9IGZyb20gXCIuLi9nbFRGRXhwb3J0ZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCJjb3JlL3R5cGVzXCI7XHJcbmltcG9ydCB0eXBlIHsgTm9kZSB9IGZyb20gXCJjb3JlL25vZGVcIjtcclxuaW1wb3J0IHsgTWVzaCB9IGZyb20gXCJjb3JlL01lc2hlcy9tZXNoXCI7XHJcbmltcG9ydCBcImNvcmUvTWVzaGVzL3RoaW5JbnN0YW5jZU1lc2hcIjtcclxuaW1wb3J0IHsgVG1wVmVjdG9ycywgUXVhdGVybmlvbiwgVmVjdG9yMyB9IGZyb20gXCJjb3JlL01hdGhzL21hdGgudmVjdG9yXCI7XHJcbmltcG9ydCB7IFZlcnRleEJ1ZmZlciB9IGZyb20gXCJjb3JlL0J1ZmZlcnMvYnVmZmVyXCI7XHJcbmltcG9ydCB7IENvbnZlcnRUb1JpZ2h0SGFuZGVkUG9zaXRpb24sIENvbnZlcnRUb1JpZ2h0SGFuZGVkUm90YXRpb24gfSBmcm9tIFwiLi4vZ2xURlV0aWxpdGllc1wiO1xyXG5cclxuY29uc3QgTkFNRSA9IFwiRVhUX21lc2hfZ3B1X2luc3RhbmNpbmdcIjtcclxuXHJcbi8qKlxyXG4gKiBbU3BlY2lmaWNhdGlvbl0oaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFpbi9leHRlbnNpb25zLzIuMC9WZW5kb3IvRVhUX21lc2hfZ3B1X2luc3RhbmNpbmcvUkVBRE1FLm1kKVxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgY2xhc3MgRVhUX21lc2hfZ3B1X2luc3RhbmNpbmcgaW1wbGVtZW50cyBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIge1xyXG4gICAgLyoqIE5hbWUgb2YgdGhpcyBleHRlbnNpb24gKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lID0gTkFNRTtcclxuXHJcbiAgICAvKiogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIGVuYWJsZWQgKi9cclxuICAgIHB1YmxpYyBlbmFibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAvKiogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIHJlcXVpcmVkICovXHJcbiAgICBwdWJsaWMgcmVxdWlyZWQgPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIF9leHBvcnRlcjogR0xURkV4cG9ydGVyO1xyXG5cclxuICAgIHByaXZhdGUgX3dhc1VzZWQgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihleHBvcnRlcjogR0xURkV4cG9ydGVyKSB7XHJcbiAgICAgICAgdGhpcy5fZXhwb3J0ZXIgPSBleHBvcnRlcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHt9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGdldCB3YXNVc2VkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl93YXNVc2VkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWZ0ZXIgbm9kZSBpcyBleHBvcnRlZFxyXG4gICAgICogQHBhcmFtIGNvbnRleHQgdGhlIEdMVEYgY29udGV4dCB3aGVuIGxvYWRpbmcgdGhlIGFzc2V0XHJcbiAgICAgKiBAcGFyYW0gbm9kZSB0aGUgbm9kZSBleHBvcnRlZFxyXG4gICAgICogQHBhcmFtIGJhYnlsb25Ob2RlIHRoZSBjb3JyZXNwb25kaW5nIGJhYnlsb24gbm9kZVxyXG4gICAgICogQHBhcmFtIG5vZGVNYXAgbWFwIGZyb20gYmFieWxvbiBub2RlIGlkIHRvIG5vZGUgaW5kZXhcclxuICAgICAqIEBwYXJhbSBjb252ZXJ0VG9SaWdodEhhbmRlZCB0cnVlIGlmIHdlIG5lZWQgdG8gY29udmVydCBkYXRhIGZyb20gbGVmdCBoYW5kIHRvIHJpZ2h0IGhhbmQgc3lzdGVtLlxyXG4gICAgICogQHBhcmFtIGRhdGFXcml0ZXIgYmluYXJ5IHdyaXRlclxyXG4gICAgICogQHJldHVybnMgbnVsbGFibGUgcHJvbWlzZSwgcmVzb2x2ZXMgd2l0aCB0aGUgbm9kZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcG9zdEV4cG9ydE5vZGVBc3luYyhcclxuICAgICAgICBjb250ZXh0OiBzdHJpbmcsXHJcbiAgICAgICAgbm9kZTogTnVsbGFibGU8SU5vZGU+LFxyXG4gICAgICAgIGJhYnlsb25Ob2RlOiBOb2RlLFxyXG4gICAgICAgIG5vZGVNYXA6IE1hcDxOb2RlLCBudW1iZXI+LFxyXG4gICAgICAgIGNvbnZlcnRUb1JpZ2h0SGFuZGVkOiBib29sZWFuLFxyXG4gICAgICAgIGRhdGFXcml0ZXI6IERhdGFXcml0ZXJcclxuICAgICk6IFByb21pc2U8TnVsbGFibGU8SU5vZGU+PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChub2RlICYmIGJhYnlsb25Ob2RlIGluc3RhbmNlb2YgTWVzaCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGJhYnlsb25Ob2RlLmhhc1RoaW5JbnN0YW5jZXMgJiYgdGhpcy5fZXhwb3J0ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl93YXNVc2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm9UcmFuc2xhdGlvbiA9IFZlY3RvcjMuWmVybygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vUm90YXRpb24gPSBRdWF0ZXJuaW9uLklkZW50aXR5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm9TY2FsZSA9IFZlY3RvcjMuT25lKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHJldHJpZXZlIGFsbCB0aGUgaW5zdGFuY2Ugd29ybGQgbWF0cml4XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0cml4ID0gYmFieWxvbk5vZGUudGhpbkluc3RhbmNlR2V0V29ybGRNYXRyaWNlcygpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpd3QgPSBUbXBWZWN0b3JzLlZlY3RvcjNbMl07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXdyID0gVG1wVmVjdG9ycy5RdWF0ZXJuaW9uWzFdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGl3cyA9IFRtcFZlY3RvcnMuVmVjdG9yM1szXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGhhc0FueUluc3RhbmNlV29ybGRUcmFuc2xhdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBoYXNBbnlJbnN0YW5jZVdvcmxkUm90YXRpb24gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaGFzQW55SW5zdGFuY2VXb3JsZFNjYWxlID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHByZXBhcmUgdGVtcCBidWZmZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHJhbnNsYXRpb25CdWZmZXIgPSBuZXcgRmxvYXQzMkFycmF5KGJhYnlsb25Ob2RlLnRoaW5JbnN0YW5jZUNvdW50ICogMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm90YXRpb25CdWZmZXIgPSBuZXcgRmxvYXQzMkFycmF5KGJhYnlsb25Ob2RlLnRoaW5JbnN0YW5jZUNvdW50ICogNCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2NhbGVCdWZmZXIgPSBuZXcgRmxvYXQzMkFycmF5KGJhYnlsb25Ob2RlLnRoaW5JbnN0YW5jZUNvdW50ICogMyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG0gb2YgbWF0cml4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG0uZGVjb21wb3NlKGl3cywgaXdyLCBpd3QpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnZlcnRUb1JpZ2h0SGFuZGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb252ZXJ0VG9SaWdodEhhbmRlZFBvc2l0aW9uKGl3dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb252ZXJ0VG9SaWdodEhhbmRlZFJvdGF0aW9uKGl3cik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZpbGwgdGhlIHRlbXAgYnVmZmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0aW9uQnVmZmVyLnNldChpd3QuYXNBcnJheSgpLCBpICogMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0aW9uQnVmZmVyLnNldChpd3Iubm9ybWFsaXplKCkuYXNBcnJheSgpLCBpICogNCk7IC8vIGVuc3VyZSB0aGUgcXVhdGVybmlvbiBpcyBub3JtYWxpemVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlQnVmZmVyLnNldChpd3MuYXNBcnJheSgpLCBpICogMyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIGlzIHdoZXJlIHdlIGRlY2lkZSBpZiB0aGVyZSBpcyBhbnkgdHJhbnNmb3JtYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFzQW55SW5zdGFuY2VXb3JsZFRyYW5zbGF0aW9uID0gaGFzQW55SW5zdGFuY2VXb3JsZFRyYW5zbGF0aW9uIHx8ICFpd3QuZXF1YWxzV2l0aEVwc2lsb24obm9UcmFuc2xhdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhc0FueUluc3RhbmNlV29ybGRSb3RhdGlvbiA9IGhhc0FueUluc3RhbmNlV29ybGRSb3RhdGlvbiB8fCAhaXdyLmVxdWFsc1dpdGhFcHNpbG9uKG5vUm90YXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYXNBbnlJbnN0YW5jZVdvcmxkU2NhbGUgPSBoYXNBbnlJbnN0YW5jZVdvcmxkU2NhbGUgfHwgIWl3cy5lcXVhbHNXaXRoRXBzaWxvbihub1NjYWxlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGkrKztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4dGVuc2lvbjogSUVYVE1lc2hHcHVJbnN0YW5jaW5nID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiB7fSxcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBkbyB3ZSBuZWVkIHRvIHdyaXRlIFRSQU5TTEFUSU9OID9cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaGFzQW55SW5zdGFuY2VXb3JsZFRyYW5zbGF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4dGVuc2lvbi5hdHRyaWJ1dGVzW1wiVFJBTlNMQVRJT05cIl0gPSB0aGlzLl9idWlsZEFjY2Vzc29yKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRpb25CdWZmZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBY2Nlc3NvclR5cGUuVkVDMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhYnlsb25Ob2RlLnRoaW5JbnN0YW5jZUNvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVdyaXRlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFjY2Vzc29yQ29tcG9uZW50VHlwZS5GTE9BVFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBkbyB3ZSBuZWVkIHRvIHdyaXRlIFJPVEFUSU9OID9cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaGFzQW55SW5zdGFuY2VXb3JsZFJvdGF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudFR5cGUgPSBBY2Nlc3NvckNvbXBvbmVudFR5cGUuRkxPQVQ7IC8vIHdlIGRlY2lkZWQgdG8gc3RheSBvbiBGTE9BVCBmb3Igbm93IHNlZSBodHRwczovL2dpdGh1Yi5jb20vQmFieWxvbkpTL0JhYnlsb24uanMvcHVsbC8xMjQ5NVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHRlbnNpb24uYXR0cmlidXRlc1tcIlJPVEFUSU9OXCJdID0gdGhpcy5fYnVpbGRBY2Nlc3Nvcihyb3RhdGlvbkJ1ZmZlciwgQWNjZXNzb3JUeXBlLlZFQzQsIGJhYnlsb25Ob2RlLnRoaW5JbnN0YW5jZUNvdW50LCBkYXRhV3JpdGVyLCBjb21wb25lbnRUeXBlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZG8gd2UgbmVlZCB0byB3cml0ZSBTQ0FMRSA/XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhhc0FueUluc3RhbmNlV29ybGRTY2FsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHRlbnNpb24uYXR0cmlidXRlc1tcIlNDQUxFXCJdID0gdGhpcy5fYnVpbGRBY2Nlc3NvcihzY2FsZUJ1ZmZlciwgQWNjZXNzb3JUeXBlLlZFQzMsIGJhYnlsb25Ob2RlLnRoaW5JbnN0YW5jZUNvdW50LCBkYXRhV3JpdGVyLCBBY2Nlc3NvckNvbXBvbmVudFR5cGUuRkxPQVQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLyogZXNsaW50LWVuYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb24qL1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuZXh0ZW5zaW9ucyA9IG5vZGUuZXh0ZW5zaW9ucyB8fCB7fTtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLmV4dGVuc2lvbnNbTkFNRV0gPSBleHRlbnNpb247XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzb2x2ZShub2RlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9idWlsZEFjY2Vzc29yKGJ1ZmZlcjogRmxvYXQzMkFycmF5LCB0eXBlOiBBY2Nlc3NvclR5cGUsIGNvdW50OiBudW1iZXIsIGJpbmFyeVdyaXRlcjogRGF0YVdyaXRlciwgY29tcG9uZW50VHlwZTogQWNjZXNzb3JDb21wb25lbnRUeXBlKTogbnVtYmVyIHtcclxuICAgICAgICAvLyB3cml0ZSB0aGUgYnVmZmVyXHJcbiAgICAgICAgY29uc3QgYnVmZmVyT2Zmc2V0ID0gYmluYXJ5V3JpdGVyLmJ5dGVPZmZzZXQ7XHJcbiAgICAgICAgc3dpdGNoIChjb21wb25lbnRUeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgQWNjZXNzb3JDb21wb25lbnRUeXBlLkZMT0FUOiB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSAhPSBidWZmZXIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBiaW5hcnlXcml0ZXIud3JpdGVGbG9hdDMyKGJ1ZmZlcltpXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIEFjY2Vzc29yQ29tcG9uZW50VHlwZS5CWVRFOiB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSAhPSBidWZmZXIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBiaW5hcnlXcml0ZXIud3JpdGVJbnQ4KGJ1ZmZlcltpXSAqIDEyNyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIEFjY2Vzc29yQ29tcG9uZW50VHlwZS5TSE9SVDoge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgIT0gYnVmZmVyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmluYXJ5V3JpdGVyLndyaXRlSW50MTYoYnVmZmVyW2ldICogMzI3NjcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGJ1aWxkIHRoZSBidWZmZXIgdmlld1xyXG4gICAgICAgIGNvbnN0IGJ2OiBJQnVmZmVyVmlldyA9IHsgYnVmZmVyOiAwLCBieXRlT2Zmc2V0OiBidWZmZXJPZmZzZXQsIGJ5dGVMZW5ndGg6IGJ1ZmZlci5sZW5ndGggKiBWZXJ0ZXhCdWZmZXIuR2V0VHlwZUJ5dGVMZW5ndGgoY29tcG9uZW50VHlwZSkgfTtcclxuICAgICAgICBjb25zdCBidWZmZXJWaWV3SW5kZXggPSB0aGlzLl9leHBvcnRlci5fYnVmZmVyVmlld3MubGVuZ3RoO1xyXG4gICAgICAgIHRoaXMuX2V4cG9ydGVyLl9idWZmZXJWaWV3cy5wdXNoKGJ2KTtcclxuXHJcbiAgICAgICAgLy8gZmluYWxseSBidWlsZCB0aGUgYWNjZXNzb3JcclxuICAgICAgICBjb25zdCBhY2Nlc3NvckluZGV4ID0gdGhpcy5fZXhwb3J0ZXIuX2FjY2Vzc29ycy5sZW5ndGg7XHJcbiAgICAgICAgY29uc3QgYWNjZXNzb3I6IElBY2Nlc3NvciA9IHtcclxuICAgICAgICAgICAgYnVmZmVyVmlldzogYnVmZmVyVmlld0luZGV4LFxyXG4gICAgICAgICAgICBjb21wb25lbnRUeXBlOiBjb21wb25lbnRUeXBlLFxyXG4gICAgICAgICAgICBjb3VudDogY291bnQsXHJcbiAgICAgICAgICAgIHR5cGU6IHR5cGUsXHJcbiAgICAgICAgICAgIG5vcm1hbGl6ZWQ6IGNvbXBvbmVudFR5cGUgPT0gQWNjZXNzb3JDb21wb25lbnRUeXBlLkJZVEUgfHwgY29tcG9uZW50VHlwZSA9PSBBY2Nlc3NvckNvbXBvbmVudFR5cGUuU0hPUlQsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl9leHBvcnRlci5fYWNjZXNzb3JzLnB1c2goYWNjZXNzb3IpO1xyXG4gICAgICAgIHJldHVybiBhY2Nlc3NvckluZGV4O1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXHJcbkdMVEZFeHBvcnRlci5SZWdpc3RlckV4dGVuc2lvbihOQU1FLCAoZXhwb3J0ZXIpID0+IG5ldyBFWFRfbWVzaF9ncHVfaW5zdGFuY2luZyhleHBvcnRlcikpO1xyXG4iLCJpbXBvcnQgdHlwZSB7IFNwb3RMaWdodCB9IGZyb20gXCJjb3JlL0xpZ2h0cy9zcG90TGlnaHRcIjtcclxuaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCJjb3JlL3R5cGVzXCI7XHJcbmltcG9ydCB7IFZlY3RvcjMsIFF1YXRlcm5pb24sIFRtcFZlY3RvcnMgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLnZlY3RvclwiO1xyXG5pbXBvcnQgeyBMaWdodCB9IGZyb20gXCJjb3JlL0xpZ2h0cy9saWdodFwiO1xyXG5pbXBvcnQgdHlwZSB7IE5vZGUgfSBmcm9tIFwiY29yZS9ub2RlXCI7XHJcbmltcG9ydCB7IFNoYWRvd0xpZ2h0IH0gZnJvbSBcImNvcmUvTGlnaHRzL3NoYWRvd0xpZ2h0XCI7XHJcbmltcG9ydCB0eXBlIHsgSU5vZGUsIElLSFJMaWdodHNQdW5jdHVhbF9MaWdodFJlZmVyZW5jZSwgSUtIUkxpZ2h0c1B1bmN0dWFsX0xpZ2h0LCBJS0hSTGlnaHRzUHVuY3R1YWwgfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IEtIUkxpZ2h0c1B1bmN0dWFsX0xpZ2h0VHlwZSB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHR5cGUgeyBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIgfSBmcm9tIFwiLi4vZ2xURkV4cG9ydGVyRXh0ZW5zaW9uXCI7XHJcbmltcG9ydCB7IEdMVEZFeHBvcnRlciB9IGZyb20gXCIuLi9nbFRGRXhwb3J0ZXJcIjtcclxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSBcImNvcmUvTWlzYy9sb2dnZXJcIjtcclxuaW1wb3J0IHsgQ29udmVydFRvUmlnaHRIYW5kZWRQb3NpdGlvbiwgT21pdERlZmF1bHRWYWx1ZXMsIENvbGxhcHNlUGFyZW50Tm9kZSwgSXNQYXJlbnRBZGRlZEJ5SW1wb3J0ZXIgfSBmcm9tIFwiLi4vZ2xURlV0aWxpdGllc1wiO1xyXG5cclxuY29uc3QgTkFNRSA9IFwiS0hSX2xpZ2h0c19wdW5jdHVhbFwiO1xyXG5jb25zdCBERUZBVUxUUzogT21pdDxJS0hSTGlnaHRzUHVuY3R1YWxfTGlnaHQsIFwidHlwZVwiPiA9IHtcclxuICAgIG5hbWU6IFwiXCIsXHJcbiAgICBjb2xvcjogWzEsIDEsIDFdLFxyXG4gICAgaW50ZW5zaXR5OiAxLFxyXG4gICAgcmFuZ2U6IE51bWJlci5NQVhfVkFMVUUsXHJcbn07XHJcbmNvbnN0IFNQT1RERUZBVUxUUzogTm9uTnVsbGFibGU8SUtIUkxpZ2h0c1B1bmN0dWFsX0xpZ2h0W1wic3BvdFwiXT4gPSB7XHJcbiAgICBpbm5lckNvbmVBbmdsZTogMCxcclxuICAgIG91dGVyQ29uZUFuZ2xlOiBNYXRoLlBJIC8gNC4wLFxyXG59O1xyXG5jb25zdCBMSUdIVERJUkVDVElPTiA9IFZlY3RvcjMuQmFja3dhcmQoKTtcclxuXHJcbi8qKlxyXG4gKiBbU3BlY2lmaWNhdGlvbl0oaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFzdGVyL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX2xpZ2h0c19wdW5jdHVhbC9SRUFETUUubWQpXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBjbGFzcyBLSFJfbGlnaHRzX3B1bmN0dWFsIGltcGxlbWVudHMgSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyIHtcclxuICAgIC8qKiBUaGUgbmFtZSBvZiB0aGlzIGV4dGVuc2lvbi4gKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lID0gTkFNRTtcclxuXHJcbiAgICAvKiogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIGVuYWJsZWQuICovXHJcbiAgICBwdWJsaWMgZW5hYmxlZCA9IHRydWU7XHJcblxyXG4gICAgLyoqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyByZXF1aXJlZCAqL1xyXG4gICAgcHVibGljIHJlcXVpcmVkID0gZmFsc2U7XHJcblxyXG4gICAgLyoqIFJlZmVyZW5jZSB0byB0aGUgZ2xURiBleHBvcnRlciAqL1xyXG4gICAgcHJpdmF0ZSBfZXhwb3J0ZXI6IEdMVEZFeHBvcnRlcjtcclxuXHJcbiAgICBwcml2YXRlIF9saWdodHM6IElLSFJMaWdodHNQdW5jdHVhbDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihleHBvcnRlcjogR0xURkV4cG9ydGVyKSB7XHJcbiAgICAgICAgdGhpcy5fZXhwb3J0ZXIgPSBleHBvcnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHtcclxuICAgICAgICAodGhpcy5fbGlnaHRzIGFzIGFueSkgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBnZXQgd2FzVXNlZCgpIHtcclxuICAgICAgICByZXR1cm4gISF0aGlzLl9saWdodHM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIG9uRXhwb3J0aW5nKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2V4cG9ydGVyIS5fZ2xURi5leHRlbnNpb25zIVtOQU1FXSA9IHRoaXMuX2xpZ2h0cztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lIHRoaXMgbWV0aG9kIHRvIG1vZGlmeSB0aGUgZGVmYXVsdCBiZWhhdmlvciB3aGVuIGV4cG9ydGluZyBhIG5vZGVcclxuICAgICAqIEBwYXJhbSBjb250ZXh0IFRoZSBjb250ZXh0IHdoZW4gZXhwb3J0aW5nIHRoZSBub2RlXHJcbiAgICAgKiBAcGFyYW0gbm9kZSBnbFRGIG5vZGVcclxuICAgICAqIEBwYXJhbSBiYWJ5bG9uTm9kZSBCYWJ5bG9uSlMgbm9kZVxyXG4gICAgICogQHBhcmFtIG5vZGVNYXAgTm9kZSBtYXBwaW5nIG9mIGJhYnlsb24gbm9kZSB0byBnbFRGIG5vZGUgaW5kZXhcclxuICAgICAqIEBwYXJhbSBjb252ZXJ0VG9SaWdodEhhbmRlZCBGbGFnIHRvIGNvbnZlcnQgdGhlIHZhbHVlcyB0byByaWdodC1oYW5kZWRcclxuICAgICAqIEByZXR1cm5zIG51bGxhYmxlIElOb2RlIHByb21pc2VcclxuICAgICAqL1xyXG4gICAgcHVibGljIHBvc3RFeHBvcnROb2RlQXN5bmMoY29udGV4dDogc3RyaW5nLCBub2RlOiBJTm9kZSwgYmFieWxvbk5vZGU6IE5vZGUsIG5vZGVNYXA6IE1hcDxOb2RlLCBudW1iZXI+LCBjb252ZXJ0VG9SaWdodEhhbmRlZDogYm9vbGVhbik6IFByb21pc2U8TnVsbGFibGU8SU5vZGU+PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghKGJhYnlsb25Ob2RlIGluc3RhbmNlb2YgU2hhZG93TGlnaHQpKSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBsaWdodFR5cGUgPVxyXG4gICAgICAgICAgICAgICAgYmFieWxvbk5vZGUuZ2V0VHlwZUlEKCkgPT0gTGlnaHQuTElHSFRUWVBFSURfUE9JTlRMSUdIVFxyXG4gICAgICAgICAgICAgICAgICAgID8gS0hSTGlnaHRzUHVuY3R1YWxfTGlnaHRUeXBlLlBPSU5UXHJcbiAgICAgICAgICAgICAgICAgICAgOiBiYWJ5bG9uTm9kZS5nZXRUeXBlSUQoKSA9PSBMaWdodC5MSUdIVFRZUEVJRF9ESVJFQ1RJT05BTExJR0hUXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IEtIUkxpZ2h0c1B1bmN0dWFsX0xpZ2h0VHlwZS5ESVJFQ1RJT05BTFxyXG4gICAgICAgICAgICAgICAgICAgICAgOiBiYWJ5bG9uTm9kZS5nZXRUeXBlSUQoKSA9PSBMaWdodC5MSUdIVFRZUEVJRF9TUE9UTElHSFRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBLSFJMaWdodHNQdW5jdHVhbF9MaWdodFR5cGUuU1BPVFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG51bGw7XHJcbiAgICAgICAgICAgIGlmICghbGlnaHRUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICBMb2dnZXIuV2FybihgJHtjb250ZXh0fTogTGlnaHQgJHtiYWJ5bG9uTm9kZS5uYW1lfSBpcyBub3Qgc3VwcG9ydGVkIGluICR7TkFNRX1gKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUobm9kZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChiYWJ5bG9uTm9kZS5mYWxsb2ZmVHlwZSAhPT0gTGlnaHQuRkFMTE9GRl9HTFRGKSB7XHJcbiAgICAgICAgICAgICAgICBMb2dnZXIuV2FybihgJHtjb250ZXh0fTogTGlnaHQgZmFsbG9mZiBmb3IgJHtiYWJ5bG9uTm9kZS5uYW1lfSBkb2VzIG5vdCBtYXRjaCB0aGUgJHtOQU1FfSBzcGVjaWZpY2F0aW9uIWApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBTZXQgdGhlIG5vZGUncyB0cmFuc2xhdGlvbiBhbmQgcm90YXRpb24gaGVyZSwgc2luY2UgbGlnaHRzIGFyZSBub3QgaGFuZGxlZCBpbiBleHBvcnROb2RlQXN5bmNcclxuICAgICAgICAgICAgaWYgKCFiYWJ5bG9uTm9kZS5wb3NpdGlvbi5lcXVhbHNUb0Zsb2F0cygwLCAwLCAwKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdHJhbnNsYXRpb24gPSBUbXBWZWN0b3JzLlZlY3RvcjNbMF0uY29weUZyb20oYmFieWxvbk5vZGUucG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbnZlcnRUb1JpZ2h0SGFuZGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29udmVydFRvUmlnaHRIYW5kZWRQb3NpdGlvbih0cmFuc2xhdGlvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBub2RlLnRyYW5zbGF0aW9uID0gdHJhbnNsYXRpb24uYXNBcnJheSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBCYWJ5bG9uIGxpZ2h0cyBoYXZlIFwiY29uc3RhbnRcIiByb3RhdGlvbiBhbmQgdmFyaWFibGUgZGlyZWN0aW9uLCB3aGlsZVxyXG4gICAgICAgICAgICAvLyBnbFRGIGxpZ2h0cyBoYXZlIHZhcmlhYmxlIHJvdGF0aW9uIGFuZCBjb25zdGFudCBkaXJlY3Rpb24uIFRoZXJlZm9yZSxcclxuICAgICAgICAgICAgLy8gY29tcHV0ZSBhIHF1YXRlcm5pb24gdGhhdCBhbGlnbnMgdGhlIEJhYnlsb24gbGlnaHQncyBkaXJlY3Rpb24gd2l0aCBnbFRGJ3MgY29uc3RhbnQgb25lLlxyXG4gICAgICAgICAgICBpZiAobGlnaHRUeXBlICE9PSBLSFJMaWdodHNQdW5jdHVhbF9MaWdodFR5cGUuUE9JTlQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IGJhYnlsb25Ob2RlLmRpcmVjdGlvbi5ub3JtYWxpemVUb1JlZihUbXBWZWN0b3JzLlZlY3RvcjNbMF0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbnZlcnRUb1JpZ2h0SGFuZGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29udmVydFRvUmlnaHRIYW5kZWRQb3NpdGlvbihkaXJlY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgYW5nbGUgPSBNYXRoLmFjb3MoVmVjdG9yMy5Eb3QoTElHSFRESVJFQ1RJT04sIGRpcmVjdGlvbikpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXhpcyA9IFZlY3RvcjMuQ3Jvc3MoTElHSFRESVJFQ1RJT04sIGRpcmVjdGlvbik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsaWdodFJvdGF0aW9uUXVhdGVybmlvbiA9IFF1YXRlcm5pb24uUm90YXRpb25BeGlzVG9SZWYoYXhpcywgYW5nbGUsIFRtcFZlY3RvcnMuUXVhdGVybmlvblswXSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIVF1YXRlcm5pb24uSXNJZGVudGl0eShsaWdodFJvdGF0aW9uUXVhdGVybmlvbikpIHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLnJvdGF0aW9uID0gbGlnaHRSb3RhdGlvblF1YXRlcm5pb24uYXNBcnJheSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBsaWdodDogSUtIUkxpZ2h0c1B1bmN0dWFsX0xpZ2h0ID0ge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogbGlnaHRUeXBlLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogYmFieWxvbk5vZGUubmFtZSxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBiYWJ5bG9uTm9kZS5kaWZmdXNlLmFzQXJyYXkoKSxcclxuICAgICAgICAgICAgICAgIGludGVuc2l0eTogYmFieWxvbk5vZGUuaW50ZW5zaXR5LFxyXG4gICAgICAgICAgICAgICAgcmFuZ2U6IGJhYnlsb25Ob2RlLnJhbmdlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBPbWl0RGVmYXVsdFZhbHVlcyhsaWdodCwgREVGQVVMVFMpO1xyXG5cclxuICAgICAgICAgICAgLy8gU2VwYXJhdGVseSBoYW5kbGUgdGhlIHJlcXVpcmVkICdzcG90JyBmaWVsZCBmb3Igc3BvdCBsaWdodHNcclxuICAgICAgICAgICAgaWYgKGxpZ2h0VHlwZSA9PT0gS0hSTGlnaHRzUHVuY3R1YWxfTGlnaHRUeXBlLlNQT1QpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJhYnlsb25TcG90TGlnaHQgPSBiYWJ5bG9uTm9kZSBhcyBTcG90TGlnaHQ7XHJcbiAgICAgICAgICAgICAgICBsaWdodC5zcG90ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlubmVyQ29uZUFuZ2xlOiBiYWJ5bG9uU3BvdExpZ2h0LmlubmVyQW5nbGUgLyAyLjAsXHJcbiAgICAgICAgICAgICAgICAgICAgb3V0ZXJDb25lQW5nbGU6IGJhYnlsb25TcG90TGlnaHQuYW5nbGUgLyAyLjAsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgT21pdERlZmF1bHRWYWx1ZXMobGlnaHQuc3BvdCwgU1BPVERFRkFVTFRTKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5fbGlnaHRzIHx8PSB7XHJcbiAgICAgICAgICAgICAgICBsaWdodHM6IFtdLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLl9saWdodHMubGlnaHRzLnB1c2gobGlnaHQpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbGlnaHRSZWZlcmVuY2U6IElLSFJMaWdodHNQdW5jdHVhbF9MaWdodFJlZmVyZW5jZSA9IHtcclxuICAgICAgICAgICAgICAgIGxpZ2h0OiB0aGlzLl9saWdodHMubGlnaHRzLmxlbmd0aCAtIDEsXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvLyBBc3NpZ24gdGhlIGxpZ2h0IHRvIGl0cyBwYXJlbnQgbm9kZSwgaWYgcG9zc2libGUsIHRvIGNvbmRlbnNlIHRoZSBnbFRGXHJcbiAgICAgICAgICAgIC8vIFdoeSBhbmQgd2hlbjogdGhlIGdsVEYgbG9hZGVyIGdlbmVyYXRlcyBhIG5ldyBwYXJlbnQgVHJhbnNmb3JtTm9kZSBmb3IgZWFjaCBsaWdodCBub2RlLCB3aGljaCB3ZSBzaG91bGQgdW5kbyBvbiBleHBvcnRcclxuICAgICAgICAgICAgY29uc3QgcGFyZW50QmFieWxvbk5vZGUgPSBiYWJ5bG9uTm9kZS5wYXJlbnQ7XHJcblxyXG4gICAgICAgICAgICBpZiAocGFyZW50QmFieWxvbk5vZGUgJiYgSXNQYXJlbnRBZGRlZEJ5SW1wb3J0ZXIoYmFieWxvbk5vZGUsIHBhcmVudEJhYnlsb25Ob2RlKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50Tm9kZUluZGV4ID0gbm9kZU1hcC5nZXQocGFyZW50QmFieWxvbk5vZGUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudE5vZGVJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIENvbWJpbmUgdGhlIGxpZ2h0J3MgdHJhbnNmb3JtYXRpb24gd2l0aCB0aGUgcGFyZW50J3NcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnROb2RlID0gdGhpcy5fZXhwb3J0ZXIuX25vZGVzW3BhcmVudE5vZGVJbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgQ29sbGFwc2VQYXJlbnROb2RlKG5vZGUsIHBhcmVudE5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudE5vZGUuZXh0ZW5zaW9ucyB8fD0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5leHRlbnNpb25zW05BTUVdID0gbGlnaHRSZWZlcmVuY2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIERvIG5vdCBleHBvcnQgdGhlIG9yaWdpbmFsIG5vZGVcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbm9kZS5leHRlbnNpb25zIHx8PSB7fTtcclxuICAgICAgICAgICAgbm9kZS5leHRlbnNpb25zW05BTUVdID0gbGlnaHRSZWZlcmVuY2U7XHJcbiAgICAgICAgICAgIHJlc29sdmUobm9kZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkdMVEZFeHBvcnRlci5SZWdpc3RlckV4dGVuc2lvbihOQU1FLCAoZXhwb3J0ZXIpID0+IG5ldyBLSFJfbGlnaHRzX3B1bmN0dWFsKGV4cG9ydGVyKSk7XHJcbiIsImltcG9ydCB0eXBlIHsgSU1hdGVyaWFsLCBJS0hSTWF0ZXJpYWxzQW5pc290cm9weSB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHR5cGUgeyBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIgfSBmcm9tIFwiLi4vZ2xURkV4cG9ydGVyRXh0ZW5zaW9uXCI7XHJcbmltcG9ydCB7IEdMVEZFeHBvcnRlciB9IGZyb20gXCIuLi9nbFRGRXhwb3J0ZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBQQlJCYXNlTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvUEJSL3BickJhc2VNYXRlcmlhbFwiO1xyXG5pbXBvcnQgdHlwZSB7IEJhc2VUZXh0dXJlIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1RleHR1cmVzL2Jhc2VUZXh0dXJlXCI7XHJcblxyXG5jb25zdCBOQU1FID0gXCJLSFJfbWF0ZXJpYWxzX2FuaXNvdHJvcHlcIjtcclxuXHJcbi8qKlxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGNsYXNzIEtIUl9tYXRlcmlhbHNfYW5pc290cm9weSBpbXBsZW1lbnRzIElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMiB7XHJcbiAgICAvKiogTmFtZSBvZiB0aGlzIGV4dGVuc2lvbiAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBOQU1FO1xyXG5cclxuICAgIC8qKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgZW5hYmxlZCAqL1xyXG4gICAgcHVibGljIGVuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgIC8qKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgcmVxdWlyZWQgKi9cclxuICAgIHB1YmxpYyByZXF1aXJlZCA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgX2V4cG9ydGVyOiBHTFRGRXhwb3J0ZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBfd2FzVXNlZCA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGV4cG9ydGVyOiBHTFRGRXhwb3J0ZXIpIHtcclxuICAgICAgICB0aGlzLl9leHBvcnRlciA9IGV4cG9ydGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge31cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgZ2V0IHdhc1VzZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dhc1VzZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBvc3RFeHBvcnRNYXRlcmlhbEFkZGl0aW9uYWxUZXh0dXJlcz8oY29udGV4dDogc3RyaW5nLCBub2RlOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBCYXNlVGV4dHVyZVtdIHtcclxuICAgICAgICBjb25zdCBhZGRpdGlvbmFsVGV4dHVyZXM6IEJhc2VUZXh0dXJlW10gPSBbXTtcclxuICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsIGluc3RhbmNlb2YgUEJSQmFzZU1hdGVyaWFsKSB7XHJcbiAgICAgICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwuYW5pc290cm9weS5pc0VuYWJsZWQgJiYgIWJhYnlsb25NYXRlcmlhbC5hbmlzb3Ryb3B5LmxlZ2FjeSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbC5hbmlzb3Ryb3B5LnRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRpdGlvbmFsVGV4dHVyZXMucHVzaChiYWJ5bG9uTWF0ZXJpYWwuYW5pc290cm9weS50ZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBhZGRpdGlvbmFsVGV4dHVyZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcG9zdEV4cG9ydE1hdGVyaWFsQXN5bmM/KGNvbnRleHQ6IHN0cmluZywgbm9kZTogSU1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsKTogUHJvbWlzZTxJTWF0ZXJpYWw+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbCBpbnN0YW5jZW9mIFBCUkJhc2VNYXRlcmlhbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFiYWJ5bG9uTWF0ZXJpYWwuYW5pc290cm9weS5pc0VuYWJsZWQgfHwgYmFieWxvbk1hdGVyaWFsLmFuaXNvdHJvcHkubGVnYWN5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShub2RlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5fd2FzVXNlZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgbm9kZS5leHRlbnNpb25zID0gbm9kZS5leHRlbnNpb25zIHx8IHt9O1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGFuaXNvdHJvcHlUZXh0dXJlSW5mbyA9IHRoaXMuX2V4cG9ydGVyLl9tYXRlcmlhbEV4cG9ydGVyLmdldFRleHR1cmVJbmZvKGJhYnlsb25NYXRlcmlhbC5hbmlzb3Ryb3B5LnRleHR1cmUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGFuaXNvdHJvcHlJbmZvOiBJS0hSTWF0ZXJpYWxzQW5pc290cm9weSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBhbmlzb3Ryb3B5U3RyZW5ndGg6IGJhYnlsb25NYXRlcmlhbC5hbmlzb3Ryb3B5LmludGVuc2l0eSxcclxuICAgICAgICAgICAgICAgICAgICBhbmlzb3Ryb3B5Um90YXRpb246IGJhYnlsb25NYXRlcmlhbC5hbmlzb3Ryb3B5LmFuZ2xlLFxyXG4gICAgICAgICAgICAgICAgICAgIGFuaXNvdHJvcHlUZXh0dXJlOiBhbmlzb3Ryb3B5VGV4dHVyZUluZm8gPz8gdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYW5pc290cm9weUluZm8uYW5pc290cm9weVRleHR1cmUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9leHBvcnRlci5fbWF0ZXJpYWxOZWVkc1VWc1NldC5hZGQoYmFieWxvbk1hdGVyaWFsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBub2RlLmV4dGVuc2lvbnNbTkFNRV0gPSBhbmlzb3Ryb3B5SW5mbztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXNvbHZlKG5vZGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5HTFRGRXhwb3J0ZXIuUmVnaXN0ZXJFeHRlbnNpb24oTkFNRSwgKGV4cG9ydGVyKSA9PiBuZXcgS0hSX21hdGVyaWFsc19hbmlzb3Ryb3B5KGV4cG9ydGVyKSk7XHJcbiIsImltcG9ydCB0eXBlIHsgSU1hdGVyaWFsLCBJS0hSTWF0ZXJpYWxzQ2xlYXJjb2F0IH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgdHlwZSB7IElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMiB9IGZyb20gXCIuLi9nbFRGRXhwb3J0ZXJFeHRlbnNpb25cIjtcclxuaW1wb3J0IHsgR0xURkV4cG9ydGVyIH0gZnJvbSBcIi4uL2dsVEZFeHBvcnRlclwiO1xyXG5pbXBvcnQgdHlwZSB7IE1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IFBCUkJhc2VNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9QQlIvcGJyQmFzZU1hdGVyaWFsXCI7XHJcbmltcG9ydCB0eXBlIHsgQmFzZVRleHR1cmUgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvYmFzZVRleHR1cmVcIjtcclxuXHJcbmltcG9ydCB7IFRvb2xzIH0gZnJvbSBcImNvcmUvTWlzYy90b29sc1wiO1xyXG5cclxuY29uc3QgTkFNRSA9IFwiS0hSX21hdGVyaWFsc19jbGVhcmNvYXRcIjtcclxuXHJcbi8qKlxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGNsYXNzIEtIUl9tYXRlcmlhbHNfY2xlYXJjb2F0IGltcGxlbWVudHMgSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyIHtcclxuICAgIC8qKiBOYW1lIG9mIHRoaXMgZXh0ZW5zaW9uICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZSA9IE5BTUU7XHJcblxyXG4gICAgLyoqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyBlbmFibGVkICovXHJcbiAgICBwdWJsaWMgZW5hYmxlZCA9IHRydWU7XHJcblxyXG4gICAgLyoqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyByZXF1aXJlZCAqL1xyXG4gICAgcHVibGljIHJlcXVpcmVkID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBfZXhwb3J0ZXI6IEdMVEZFeHBvcnRlcjtcclxuXHJcbiAgICBwcml2YXRlIF93YXNVc2VkID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZXhwb3J0ZXI6IEdMVEZFeHBvcnRlcikge1xyXG4gICAgICAgIHRoaXMuX2V4cG9ydGVyID0gZXhwb3J0ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7fVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBnZXQgd2FzVXNlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fd2FzVXNlZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcG9zdEV4cG9ydE1hdGVyaWFsQWRkaXRpb25hbFRleHR1cmVzPyhjb250ZXh0OiBzdHJpbmcsIG5vZGU6IElNYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCk6IEJhc2VUZXh0dXJlW10ge1xyXG4gICAgICAgIGNvbnN0IGFkZGl0aW9uYWxUZXh0dXJlczogQmFzZVRleHR1cmVbXSA9IFtdO1xyXG4gICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwgaW5zdGFuY2VvZiBQQlJCYXNlTWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbC5jbGVhckNvYXQuaXNFbmFibGVkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsLmNsZWFyQ29hdC50ZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkaXRpb25hbFRleHR1cmVzLnB1c2goYmFieWxvbk1hdGVyaWFsLmNsZWFyQ29hdC50ZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghYmFieWxvbk1hdGVyaWFsLmNsZWFyQ29hdC51c2VSb3VnaG5lc3NGcm9tTWFpblRleHR1cmUgJiYgYmFieWxvbk1hdGVyaWFsLmNsZWFyQ29hdC50ZXh0dXJlUm91Z2huZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkaXRpb25hbFRleHR1cmVzLnB1c2goYmFieWxvbk1hdGVyaWFsLmNsZWFyQ29hdC50ZXh0dXJlUm91Z2huZXNzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwuY2xlYXJDb2F0LmJ1bXBUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkaXRpb25hbFRleHR1cmVzLnB1c2goYmFieWxvbk1hdGVyaWFsLmNsZWFyQ29hdC5idW1wVGV4dHVyZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYWRkaXRpb25hbFRleHR1cmVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBvc3RFeHBvcnRNYXRlcmlhbEFzeW5jPyhjb250ZXh0OiBzdHJpbmcsIG5vZGU6IElNYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCk6IFByb21pc2U8SU1hdGVyaWFsPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwgaW5zdGFuY2VvZiBQQlJCYXNlTWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgICAgIGlmICghYmFieWxvbk1hdGVyaWFsLmNsZWFyQ29hdC5pc0VuYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl93YXNVc2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBub2RlLmV4dGVuc2lvbnMgPSBub2RlLmV4dGVuc2lvbnMgfHwge307XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgY2xlYXJDb2F0VGV4dHVyZUluZm8gPSB0aGlzLl9leHBvcnRlci5fbWF0ZXJpYWxFeHBvcnRlci5nZXRUZXh0dXJlSW5mbyhiYWJ5bG9uTWF0ZXJpYWwuY2xlYXJDb2F0LnRleHR1cmUpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNsZWFyQ29hdFRleHR1cmVSb3VnaG5lc3NJbmZvO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbC5jbGVhckNvYXQudXNlUm91Z2huZXNzRnJvbU1haW5UZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJDb2F0VGV4dHVyZVJvdWdobmVzc0luZm8gPSB0aGlzLl9leHBvcnRlci5fbWF0ZXJpYWxFeHBvcnRlci5nZXRUZXh0dXJlSW5mbyhiYWJ5bG9uTWF0ZXJpYWwuY2xlYXJDb2F0LnRleHR1cmUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhckNvYXRUZXh0dXJlUm91Z2huZXNzSW5mbyA9IHRoaXMuX2V4cG9ydGVyLl9tYXRlcmlhbEV4cG9ydGVyLmdldFRleHR1cmVJbmZvKGJhYnlsb25NYXRlcmlhbC5jbGVhckNvYXQudGV4dHVyZVJvdWdobmVzcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbC5jbGVhckNvYXQuaXNUaW50RW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIFRvb2xzLldhcm4oYENsZWFyIENvbG9yIHRpbnQgaXMgbm90IHN1cHBvcnRlZCBmb3IgZ2xURiBleHBvcnQuIElnbm9yaW5nIGZvcjogJHtiYWJ5bG9uTWF0ZXJpYWwubmFtZX1gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsLmNsZWFyQ29hdC5yZW1hcEYwT25JbnRlcmZhY2VDaGFuZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBUb29scy5XYXJuKGBDbGVhciBDb2xvciBGMCByZW1hcHBpbmcgaXMgbm90IHN1cHBvcnRlZCBmb3IgZ2xURiBleHBvcnQuIElnbm9yaW5nIGZvcjogJHtiYWJ5bG9uTWF0ZXJpYWwubmFtZX1gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjbGVhckNvYXROb3JtYWxUZXh0dXJlSW5mbyA9IHRoaXMuX2V4cG9ydGVyLl9tYXRlcmlhbEV4cG9ydGVyLmdldFRleHR1cmVJbmZvKGJhYnlsb25NYXRlcmlhbC5jbGVhckNvYXQuYnVtcFRleHR1cmUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGNsZWFyQ29hdEluZm86IElLSFJNYXRlcmlhbHNDbGVhcmNvYXQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJjb2F0RmFjdG9yOiBiYWJ5bG9uTWF0ZXJpYWwuY2xlYXJDb2F0LmludGVuc2l0eSxcclxuICAgICAgICAgICAgICAgICAgICBjbGVhcmNvYXRUZXh0dXJlOiBjbGVhckNvYXRUZXh0dXJlSW5mbyA/PyB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJjb2F0Um91Z2huZXNzRmFjdG9yOiBiYWJ5bG9uTWF0ZXJpYWwuY2xlYXJDb2F0LnJvdWdobmVzcyxcclxuICAgICAgICAgICAgICAgICAgICBjbGVhcmNvYXRSb3VnaG5lc3NUZXh0dXJlOiBjbGVhckNvYXRUZXh0dXJlUm91Z2huZXNzSW5mbyA/PyB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJjb2F0Tm9ybWFsVGV4dHVyZTogY2xlYXJDb2F0Tm9ybWFsVGV4dHVyZUluZm8gPz8gdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY2xlYXJDb2F0SW5mby5jbGVhcmNvYXRUZXh0dXJlICE9PSBudWxsIHx8IGNsZWFyQ29hdEluZm8uY2xlYXJjb2F0Um91Z2huZXNzVGV4dHVyZSAhPT0gbnVsbCB8fCBjbGVhckNvYXRJbmZvLmNsZWFyY29hdFJvdWdobmVzc1RleHR1cmUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9leHBvcnRlci5fbWF0ZXJpYWxOZWVkc1VWc1NldC5hZGQoYmFieWxvbk1hdGVyaWFsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBub2RlLmV4dGVuc2lvbnNbTkFNRV0gPSBjbGVhckNvYXRJbmZvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc29sdmUobm9kZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkdMVEZFeHBvcnRlci5SZWdpc3RlckV4dGVuc2lvbihOQU1FLCAoZXhwb3J0ZXIpID0+IG5ldyBLSFJfbWF0ZXJpYWxzX2NsZWFyY29hdChleHBvcnRlcikpO1xyXG4iLCJpbXBvcnQgdHlwZSB7IElNYXRlcmlhbCwgSUtIUk1hdGVyaWFsc0RpZmZ1c2VUcmFuc21pc3Npb24gfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB0eXBlIHsgSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyIH0gZnJvbSBcIi4uL2dsVEZFeHBvcnRlckV4dGVuc2lvblwiO1xyXG5pbXBvcnQgeyBHTFRGRXhwb3J0ZXIgfSBmcm9tIFwiLi4vZ2xURkV4cG9ydGVyXCI7XHJcbmltcG9ydCB0eXBlIHsgTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgUEJSTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvUEJSL3Bick1hdGVyaWFsXCI7XHJcbmltcG9ydCB0eXBlIHsgQmFzZVRleHR1cmUgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvYmFzZVRleHR1cmVcIjtcclxuXHJcbmNvbnN0IE5BTUUgPSBcIktIUl9tYXRlcmlhbHNfZGlmZnVzZV90cmFuc21pc3Npb25cIjtcclxuXHJcbi8qKlxyXG4gKiBbUHJvcG9zZWQgU3BlY2lmaWNhdGlvbl0oaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3B1bGwvMTgyNSlcclxuICogISEhIEV4cGVyaW1lbnRhbCBFeHRlbnNpb24gU3ViamVjdCB0byBDaGFuZ2VzICEhIVxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgY2xhc3MgS0hSX21hdGVyaWFsc19kaWZmdXNlX3RyYW5zbWlzc2lvbiBpbXBsZW1lbnRzIElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMiB7XHJcbiAgICAvKiogTmFtZSBvZiB0aGlzIGV4dGVuc2lvbiAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBOQU1FO1xyXG5cclxuICAgIC8qKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgZW5hYmxlZCAqL1xyXG4gICAgcHVibGljIGVuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgIC8qKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgcmVxdWlyZWQgKi9cclxuICAgIHB1YmxpYyByZXF1aXJlZCA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgX2V4cG9ydGVyOiBHTFRGRXhwb3J0ZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBfd2FzVXNlZCA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGV4cG9ydGVyOiBHTFRGRXhwb3J0ZXIpIHtcclxuICAgICAgICB0aGlzLl9leHBvcnRlciA9IGV4cG9ydGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge31cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgZ2V0IHdhc1VzZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dhc1VzZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZnRlciBleHBvcnRpbmcgYSBtYXRlcmlhbCwgZGVhbCB3aXRoIGFkZGl0aW9uYWwgdGV4dHVyZXNcclxuICAgICAqIEBwYXJhbSBjb250ZXh0IEdMVEYgY29udGV4dCBvZiB0aGUgbWF0ZXJpYWxcclxuICAgICAqIEBwYXJhbSBub2RlIGV4cG9ydGVkIEdMVEYgbm9kZVxyXG4gICAgICogQHBhcmFtIGJhYnlsb25NYXRlcmlhbCBjb3JyZXNwb25kaW5nIGJhYnlsb24gbWF0ZXJpYWxcclxuICAgICAqIEByZXR1cm5zIGFycmF5IG9mIGFkZGl0aW9uYWwgdGV4dHVyZXMgdG8gZXhwb3J0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwb3N0RXhwb3J0TWF0ZXJpYWxBZGRpdGlvbmFsVGV4dHVyZXM/KGNvbnRleHQ6IHN0cmluZywgbm9kZTogSU1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsKTogQmFzZVRleHR1cmVbXSB7XHJcbiAgICAgICAgY29uc3QgYWRkaXRpb25hbFRleHR1cmVzOiBCYXNlVGV4dHVyZVtdID0gW107XHJcblxyXG4gICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwgaW5zdGFuY2VvZiBQQlJNYXRlcmlhbCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5faXNFeHRlbnNpb25FbmFibGVkKGJhYnlsb25NYXRlcmlhbCkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwuc3ViU3VyZmFjZS50aGlja25lc3NUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkaXRpb25hbFRleHR1cmVzLnB1c2goYmFieWxvbk1hdGVyaWFsLnN1YlN1cmZhY2UudGhpY2tuZXNzVGV4dHVyZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYWRkaXRpb25hbFRleHR1cmVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYWRkaXRpb25hbFRleHR1cmVzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2lzRXh0ZW5zaW9uRW5hYmxlZChtYXQ6IFBCUk1hdGVyaWFsKTogYm9vbGVhbiB7XHJcbiAgICAgICAgLy8gVGhpcyBleHRlbnNpb24gbXVzdCBub3QgYmUgdXNlZCBvbiBhIG1hdGVyaWFsIHRoYXQgYWxzbyB1c2VzIEtIUl9tYXRlcmlhbHNfdW5saXRcclxuICAgICAgICBpZiAobWF0LnVubGl0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc3VicyA9IG1hdC5zdWJTdXJmYWNlO1xyXG4gICAgICAgIGlmICghc3Vicy5pc1RyYW5zbHVjZW5jeUVuYWJsZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgIW1hdC51bmxpdCAmJlxyXG4gICAgICAgICAgICAhc3Vicy51c2VBbGJlZG9Ub1RpbnRUcmFuc2x1Y2VuY3kgJiZcclxuICAgICAgICAgICAgc3Vicy51c2VHbHRmU3R5bGVUZXh0dXJlcyAmJlxyXG4gICAgICAgICAgICBzdWJzLnZvbHVtZUluZGV4T2ZSZWZyYWN0aW9uID09PSAxICYmXHJcbiAgICAgICAgICAgIHN1YnMubWluaW11bVRoaWNrbmVzcyA9PT0gMCAmJlxyXG4gICAgICAgICAgICBzdWJzLm1heGltdW1UaGlja25lc3MgPT09IDBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2hhc1RleHR1cmVzRXh0ZW5zaW9uKG1hdDogUEJSTWF0ZXJpYWwpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gbWF0LnN1YlN1cmZhY2UudHJhbnNsdWNlbmN5SW50ZW5zaXR5VGV4dHVyZSAhPSBudWxsIHx8IG1hdC5zdWJTdXJmYWNlLnRyYW5zbHVjZW5jeUNvbG9yVGV4dHVyZSAhPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWZ0ZXIgZXhwb3J0aW5nIGEgbWF0ZXJpYWxcclxuICAgICAqIEBwYXJhbSBjb250ZXh0IEdMVEYgY29udGV4dCBvZiB0aGUgbWF0ZXJpYWxcclxuICAgICAqIEBwYXJhbSBub2RlIGV4cG9ydGVkIEdMVEYgbm9kZVxyXG4gICAgICogQHBhcmFtIGJhYnlsb25NYXRlcmlhbCBjb3JyZXNwb25kaW5nIGJhYnlsb24gbWF0ZXJpYWxcclxuICAgICAqIEByZXR1cm5zIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSB1cGRhdGVkIG5vZGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHBvc3RFeHBvcnRNYXRlcmlhbEFzeW5jPyhjb250ZXh0OiBzdHJpbmcsIG5vZGU6IElNYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCk6IFByb21pc2U8SU1hdGVyaWFsPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwgaW5zdGFuY2VvZiBQQlJNYXRlcmlhbCAmJiB0aGlzLl9pc0V4dGVuc2lvbkVuYWJsZWQoYmFieWxvbk1hdGVyaWFsKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fd2FzVXNlZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3VicyA9IGJhYnlsb25NYXRlcmlhbC5zdWJTdXJmYWNlO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpZmZ1c2VUcmFuc21pc3Npb25GYWN0b3IgPSBzdWJzLnRyYW5zbHVjZW5jeUludGVuc2l0eSA9PSAxID8gdW5kZWZpbmVkIDogc3Vicy50cmFuc2x1Y2VuY3lJbnRlbnNpdHk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkaWZmdXNlVHJhbnNtaXNzaW9uVGV4dHVyZSA9IHRoaXMuX2V4cG9ydGVyLl9tYXRlcmlhbEV4cG9ydGVyLmdldFRleHR1cmVJbmZvKHN1YnMudHJhbnNsdWNlbmN5SW50ZW5zaXR5VGV4dHVyZSkgPz8gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGlmZnVzZVRyYW5zbWlzc2lvbkNvbG9yRmFjdG9yID0gIXN1YnMudHJhbnNsdWNlbmN5Q29sb3IgfHwgc3Vicy50cmFuc2x1Y2VuY3lDb2xvci5lcXVhbHNGbG9hdHMoMS4wLCAxLjAsIDEuMCkgPyB1bmRlZmluZWQgOiBzdWJzLnRyYW5zbHVjZW5jeUNvbG9yLmFzQXJyYXkoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpZmZ1c2VUcmFuc21pc3Npb25Db2xvclRleHR1cmUgPSB0aGlzLl9leHBvcnRlci5fbWF0ZXJpYWxFeHBvcnRlci5nZXRUZXh0dXJlSW5mbyhzdWJzLnRyYW5zbHVjZW5jeUNvbG9yVGV4dHVyZSkgPz8gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpZmZ1c2VUcmFuc21pc3Npb25JbmZvOiBJS0hSTWF0ZXJpYWxzRGlmZnVzZVRyYW5zbWlzc2lvbiA9IHtcclxuICAgICAgICAgICAgICAgICAgICBkaWZmdXNlVHJhbnNtaXNzaW9uRmFjdG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpZmZ1c2VUcmFuc21pc3Npb25UZXh0dXJlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpZmZ1c2VUcmFuc21pc3Npb25Db2xvckZhY3RvcixcclxuICAgICAgICAgICAgICAgICAgICBkaWZmdXNlVHJhbnNtaXNzaW9uQ29sb3JUZXh0dXJlLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5faGFzVGV4dHVyZXNFeHRlbnNpb24oYmFieWxvbk1hdGVyaWFsKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2V4cG9ydGVyLl9tYXRlcmlhbE5lZWRzVVZzU2V0LmFkZChiYWJ5bG9uTWF0ZXJpYWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIG5vZGUuZXh0ZW5zaW9ucyA9IG5vZGUuZXh0ZW5zaW9ucyB8fCB7fTtcclxuICAgICAgICAgICAgICAgIG5vZGUuZXh0ZW5zaW9uc1tOQU1FXSA9IGRpZmZ1c2VUcmFuc21pc3Npb25JbmZvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc29sdmUobm9kZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkdMVEZFeHBvcnRlci5SZWdpc3RlckV4dGVuc2lvbihOQU1FLCAoZXhwb3J0ZXIpID0+IG5ldyBLSFJfbWF0ZXJpYWxzX2RpZmZ1c2VfdHJhbnNtaXNzaW9uKGV4cG9ydGVyKSk7XHJcbiIsImltcG9ydCB0eXBlIHsgSU1hdGVyaWFsLCBJS0hSTWF0ZXJpYWxzRGlzcGVyc2lvbiB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHR5cGUgeyBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIgfSBmcm9tIFwiLi4vZ2xURkV4cG9ydGVyRXh0ZW5zaW9uXCI7XHJcbmltcG9ydCB7IEdMVEZFeHBvcnRlciB9IGZyb20gXCIuLi9nbFRGRXhwb3J0ZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBQQlJNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9QQlIvcGJyTWF0ZXJpYWxcIjtcclxuXHJcbmNvbnN0IE5BTUUgPSBcIktIUl9tYXRlcmlhbHNfZGlzcGVyc2lvblwiO1xyXG5cclxuLyoqXHJcbiAqIFtTcGVjaWZpY2F0aW9uXShodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi84N2JkNjRhN2Y1ZTIzYzg0YjZhZWYyZTYwODIwNjk1ODNlZDBkZGI0L2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX21hdGVyaWFsc19kaXNwZXJzaW9uL1JFQURNRS5tZClcclxuICogQGV4cGVyaW1lbnRhbFxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgY2xhc3MgS0hSX21hdGVyaWFsc19kaXNwZXJzaW9uIGltcGxlbWVudHMgSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyIHtcclxuICAgIC8qKiBOYW1lIG9mIHRoaXMgZXh0ZW5zaW9uICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZSA9IE5BTUU7XHJcblxyXG4gICAgLyoqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyBlbmFibGVkICovXHJcbiAgICBwdWJsaWMgZW5hYmxlZCA9IHRydWU7XHJcblxyXG4gICAgLyoqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyByZXF1aXJlZCAqL1xyXG4gICAgcHVibGljIHJlcXVpcmVkID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBfd2FzVXNlZCA9IGZhbHNlO1xyXG5cclxuICAgIC8qKiBDb25zdHJ1Y3RvciAqL1xyXG4gICAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICAgIC8qKiBEaXNwb3NlICovXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHt9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGdldCB3YXNVc2VkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl93YXNVc2VkO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2lzRXh0ZW5zaW9uRW5hYmxlZChtYXQ6IFBCUk1hdGVyaWFsKTogYm9vbGVhbiB7XHJcbiAgICAgICAgLy8gVGhpcyBleHRlbnNpb24gbXVzdCBub3QgYmUgdXNlZCBvbiBhIG1hdGVyaWFsIHRoYXQgYWxzbyB1c2VzIEtIUl9tYXRlcmlhbHNfdW5saXRcclxuICAgICAgICBpZiAobWF0LnVubGl0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc3VicyA9IG1hdC5zdWJTdXJmYWNlO1xyXG4gICAgICAgIC8vIHRoaXMgZXh0ZW5zaW9uIHJlcXVpcmVzIHJlZnJhY3Rpb24gdG8gYmUgZW5hYmxlZC5cclxuICAgICAgICBpZiAoIXN1YnMuaXNSZWZyYWN0aW9uRW5hYmxlZCAmJiAhc3Vicy5pc0Rpc3BlcnNpb25FbmFibGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZnRlciBleHBvcnRpbmcgYSBtYXRlcmlhbFxyXG4gICAgICogQHBhcmFtIGNvbnRleHQgR0xURiBjb250ZXh0IG9mIHRoZSBtYXRlcmlhbFxyXG4gICAgICogQHBhcmFtIG5vZGUgZXhwb3J0ZWQgR0xURiBub2RlXHJcbiAgICAgKiBAcGFyYW0gYmFieWxvbk1hdGVyaWFsIGNvcnJlc3BvbmRpbmcgYmFieWxvbiBtYXRlcmlhbFxyXG4gICAgICogQHJldHVybnMgcHJvbWlzZSwgcmVzb2x2ZXMgd2l0aCB0aGUgbWF0ZXJpYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIHBvc3RFeHBvcnRNYXRlcmlhbEFzeW5jPyhjb250ZXh0OiBzdHJpbmcsIG5vZGU6IElNYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCk6IFByb21pc2U8SU1hdGVyaWFsPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwgaW5zdGFuY2VvZiBQQlJNYXRlcmlhbCAmJiB0aGlzLl9pc0V4dGVuc2lvbkVuYWJsZWQoYmFieWxvbk1hdGVyaWFsKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fd2FzVXNlZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3VicyA9IGJhYnlsb25NYXRlcmlhbC5zdWJTdXJmYWNlO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGlzcGVyc2lvbiA9IHN1YnMuZGlzcGVyc2lvbjtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkaXNwZXJzaW9uSW5mbzogSUtIUk1hdGVyaWFsc0Rpc3BlcnNpb24gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGVyc2lvbjogZGlzcGVyc2lvbixcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBub2RlLmV4dGVuc2lvbnMgPSBub2RlLmV4dGVuc2lvbnMgfHwge307XHJcbiAgICAgICAgICAgICAgICBub2RlLmV4dGVuc2lvbnNbTkFNRV0gPSBkaXNwZXJzaW9uSW5mbztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXNvbHZlKG5vZGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5HTFRGRXhwb3J0ZXIuUmVnaXN0ZXJFeHRlbnNpb24oTkFNRSwgKCkgPT4gbmV3IEtIUl9tYXRlcmlhbHNfZGlzcGVyc2lvbigpKTtcclxuIiwiaW1wb3J0IHR5cGUgeyBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIgfSBmcm9tIFwiLi4vZ2xURkV4cG9ydGVyRXh0ZW5zaW9uXCI7XHJcbmltcG9ydCB7IEdMVEZFeHBvcnRlciB9IGZyb20gXCIuLi9nbFRGRXhwb3J0ZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBQQlJNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9QQlIvcGJyTWF0ZXJpYWxcIjtcclxuaW1wb3J0IHR5cGUgeyBJTWF0ZXJpYWwsIElLSFJNYXRlcmlhbHNFbWlzc2l2ZVN0cmVuZ3RoIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5cclxuY29uc3QgTkFNRSA9IFwiS0hSX21hdGVyaWFsc19lbWlzc2l2ZV9zdHJlbmd0aFwiO1xyXG5cclxuLyoqXHJcbiAqIFtTcGVjaWZpY2F0aW9uXShodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi9tYWluL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX21hdGVyaWFsc19lbWlzc2l2ZV9zdHJlbmd0aC9SRUFETUUubWQpXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBjbGFzcyBLSFJfbWF0ZXJpYWxzX2VtaXNzaXZlX3N0cmVuZ3RoIGltcGxlbWVudHMgSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyIHtcclxuICAgIC8qKiBOYW1lIG9mIHRoaXMgZXh0ZW5zaW9uICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZSA9IE5BTUU7XHJcblxyXG4gICAgLyoqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyBlbmFibGVkICovXHJcbiAgICBwdWJsaWMgZW5hYmxlZCA9IHRydWU7XHJcblxyXG4gICAgLyoqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyByZXF1aXJlZCAqL1xyXG4gICAgcHVibGljIHJlcXVpcmVkID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBfd2FzVXNlZCA9IGZhbHNlO1xyXG5cclxuICAgIC8qKiBEaXNwb3NlICovXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHt9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGdldCB3YXNVc2VkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl93YXNVc2VkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWZ0ZXIgZXhwb3J0aW5nIGEgbWF0ZXJpYWxcclxuICAgICAqIEBwYXJhbSBjb250ZXh0IEdMVEYgY29udGV4dCBvZiB0aGUgbWF0ZXJpYWxcclxuICAgICAqIEBwYXJhbSBub2RlIGV4cG9ydGVkIEdMVEYgbm9kZVxyXG4gICAgICogQHBhcmFtIGJhYnlsb25NYXRlcmlhbCBjb3JyZXNwb25kaW5nIGJhYnlsb24gbWF0ZXJpYWxcclxuICAgICAqIEByZXR1cm5zIHByb21pc2UsIHJlc29sdmVzIHdpdGggdGhlIG1hdGVyaWFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwb3N0RXhwb3J0TWF0ZXJpYWxBc3luYyhjb250ZXh0OiBzdHJpbmcsIG5vZGU6IElNYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCk6IFByb21pc2U8SU1hdGVyaWFsPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghKGJhYnlsb25NYXRlcmlhbCBpbnN0YW5jZW9mIFBCUk1hdGVyaWFsKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUobm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGVtaXNzaXZlQ29sb3IgPSBiYWJ5bG9uTWF0ZXJpYWwuZW1pc3NpdmVDb2xvci5hc0FycmF5KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRlbXBFbWlzc2l2ZVN0cmVuZ3RoID0gTWF0aC5tYXgoLi4uZW1pc3NpdmVDb2xvcik7XHJcblxyXG4gICAgICAgICAgICBpZiAodGVtcEVtaXNzaXZlU3RyZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl93YXNVc2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBub2RlLmV4dGVuc2lvbnMgfHw9IHt9O1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGVtaXNzaXZlU3RyZW5ndGhJbmZvOiBJS0hSTWF0ZXJpYWxzRW1pc3NpdmVTdHJlbmd0aCA9IHtcclxuICAgICAgICAgICAgICAgICAgICBlbWlzc2l2ZVN0cmVuZ3RoOiB0ZW1wRW1pc3NpdmVTdHJlbmd0aCxcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gTm9ybWFsaXplIGVhY2ggdmFsdWUgb2YgdGhlIGVtaXNzaXZlIGZhY3RvciB0byBoYXZlIGEgbWF4IHZhbHVlIG9mIDFcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0VtaXNzaXZlRmFjdG9yID0gYmFieWxvbk1hdGVyaWFsLmVtaXNzaXZlQ29sb3Iuc2NhbGUoMSAvIGVtaXNzaXZlU3RyZW5ndGhJbmZvLmVtaXNzaXZlU3RyZW5ndGgpO1xyXG5cclxuICAgICAgICAgICAgICAgIG5vZGUuZW1pc3NpdmVGYWN0b3IgPSBuZXdFbWlzc2l2ZUZhY3Rvci5hc0FycmF5KCk7XHJcbiAgICAgICAgICAgICAgICBub2RlLmV4dGVuc2lvbnNbTkFNRV0gPSBlbWlzc2l2ZVN0cmVuZ3RoSW5mbztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUobm9kZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkdMVEZFeHBvcnRlci5SZWdpc3RlckV4dGVuc2lvbihOQU1FLCAoZXhwb3J0ZXIpID0+IG5ldyBLSFJfbWF0ZXJpYWxzX2VtaXNzaXZlX3N0cmVuZ3RoKCkpO1xyXG4iLCJpbXBvcnQgdHlwZSB7IElNYXRlcmlhbCwgSUtIUk1hdGVyaWFsc0lvciB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHR5cGUgeyBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIgfSBmcm9tIFwiLi4vZ2xURkV4cG9ydGVyRXh0ZW5zaW9uXCI7XHJcbmltcG9ydCB7IEdMVEZFeHBvcnRlciB9IGZyb20gXCIuLi9nbFRGRXhwb3J0ZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBQQlJNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9QQlIvcGJyTWF0ZXJpYWxcIjtcclxuXHJcbmNvbnN0IE5BTUUgPSBcIktIUl9tYXRlcmlhbHNfaW9yXCI7XHJcblxyXG4vKipcclxuICogW1NwZWNpZmljYXRpb25dKGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9ibG9iL21haW4vZXh0ZW5zaW9ucy8yLjAvS2hyb25vcy9LSFJfbWF0ZXJpYWxzX2lvci9SRUFETUUubWQpXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBjbGFzcyBLSFJfbWF0ZXJpYWxzX2lvciBpbXBsZW1lbnRzIElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMiB7XHJcbiAgICAvKiogTmFtZSBvZiB0aGlzIGV4dGVuc2lvbiAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBOQU1FO1xyXG5cclxuICAgIC8qKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgZW5hYmxlZCAqL1xyXG4gICAgcHVibGljIGVuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgIC8qKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgcmVxdWlyZWQgKi9cclxuICAgIHB1YmxpYyByZXF1aXJlZCA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgX3dhc1VzZWQgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gICAgLyoqIERpc3Bvc2UgKi9cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge31cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgZ2V0IHdhc1VzZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dhc1VzZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfaXNFeHRlbnNpb25FbmFibGVkKG1hdDogUEJSTWF0ZXJpYWwpOiBib29sZWFuIHtcclxuICAgICAgICAvLyBUaGlzIGV4dGVuc2lvbiBtdXN0IG5vdCBiZSB1c2VkIG9uIGEgbWF0ZXJpYWwgdGhhdCBhbHNvIHVzZXMgS0hSX21hdGVyaWFsc191bmxpdFxyXG4gICAgICAgIGlmIChtYXQudW5saXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbWF0LmluZGV4T2ZSZWZyYWN0aW9uICE9IHVuZGVmaW5lZCAmJiBtYXQuaW5kZXhPZlJlZnJhY3Rpb24gIT0gMS41OyAvLyAxLjUgaXMgbm9ybWF0aXZlIGRlZmF1bHQgdmFsdWUuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZnRlciBleHBvcnRpbmcgYSBtYXRlcmlhbFxyXG4gICAgICogQHBhcmFtIGNvbnRleHQgR0xURiBjb250ZXh0IG9mIHRoZSBtYXRlcmlhbFxyXG4gICAgICogQHBhcmFtIG5vZGUgZXhwb3J0ZWQgR0xURiBub2RlXHJcbiAgICAgKiBAcGFyYW0gYmFieWxvbk1hdGVyaWFsIGNvcnJlc3BvbmRpbmcgYmFieWxvbiBtYXRlcmlhbFxyXG4gICAgICogQHJldHVybnMgcHJvbWlzZSwgcmVzb2x2ZXMgd2l0aCB0aGUgbWF0ZXJpYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIHBvc3RFeHBvcnRNYXRlcmlhbEFzeW5jPyhjb250ZXh0OiBzdHJpbmcsIG5vZGU6IElNYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCk6IFByb21pc2U8SU1hdGVyaWFsPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwgaW5zdGFuY2VvZiBQQlJNYXRlcmlhbCAmJiB0aGlzLl9pc0V4dGVuc2lvbkVuYWJsZWQoYmFieWxvbk1hdGVyaWFsKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fd2FzVXNlZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgaW9ySW5mbzogSUtIUk1hdGVyaWFsc0lvciA9IHtcclxuICAgICAgICAgICAgICAgICAgICBpb3I6IGJhYnlsb25NYXRlcmlhbC5pbmRleE9mUmVmcmFjdGlvbixcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBub2RlLmV4dGVuc2lvbnMgPSBub2RlLmV4dGVuc2lvbnMgfHwge307XHJcbiAgICAgICAgICAgICAgICBub2RlLmV4dGVuc2lvbnNbTkFNRV0gPSBpb3JJbmZvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc29sdmUobm9kZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcclxuR0xURkV4cG9ydGVyLlJlZ2lzdGVyRXh0ZW5zaW9uKE5BTUUsIChleHBvcnRlcikgPT4gbmV3IEtIUl9tYXRlcmlhbHNfaW9yKCkpO1xyXG4iLCJpbXBvcnQgdHlwZSB7IElNYXRlcmlhbCwgSUtIUk1hdGVyaWFsc0lyaWRlc2NlbmNlIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgdHlwZSB7IElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMiB9IGZyb20gXCIuLi9nbFRGRXhwb3J0ZXJFeHRlbnNpb25cIjtcclxuaW1wb3J0IHsgR0xURkV4cG9ydGVyIH0gZnJvbSBcIi4uL2dsVEZFeHBvcnRlclwiO1xyXG5pbXBvcnQgdHlwZSB7IE1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IFBCUkJhc2VNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9QQlIvcGJyQmFzZU1hdGVyaWFsXCI7XHJcbmltcG9ydCB0eXBlIHsgQmFzZVRleHR1cmUgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvYmFzZVRleHR1cmVcIjtcclxuXHJcbmNvbnN0IE5BTUUgPSBcIktIUl9tYXRlcmlhbHNfaXJpZGVzY2VuY2VcIjtcclxuXHJcbi8qKlxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGNsYXNzIEtIUl9tYXRlcmlhbHNfaXJpZGVzY2VuY2UgaW1wbGVtZW50cyBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIge1xyXG4gICAgLyoqIE5hbWUgb2YgdGhpcyBleHRlbnNpb24gKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lID0gTkFNRTtcclxuXHJcbiAgICAvKiogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIGVuYWJsZWQgKi9cclxuICAgIHB1YmxpYyBlbmFibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAvKiogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIHJlcXVpcmVkICovXHJcbiAgICBwdWJsaWMgcmVxdWlyZWQgPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIF9leHBvcnRlcjogR0xURkV4cG9ydGVyO1xyXG5cclxuICAgIHByaXZhdGUgX3dhc1VzZWQgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihleHBvcnRlcjogR0xURkV4cG9ydGVyKSB7XHJcbiAgICAgICAgdGhpcy5fZXhwb3J0ZXIgPSBleHBvcnRlcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHt9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGdldCB3YXNVc2VkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl93YXNVc2VkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwb3N0RXhwb3J0TWF0ZXJpYWxBZGRpdGlvbmFsVGV4dHVyZXM/KGNvbnRleHQ6IHN0cmluZywgbm9kZTogSU1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsKTogQmFzZVRleHR1cmVbXSB7XHJcbiAgICAgICAgY29uc3QgYWRkaXRpb25hbFRleHR1cmVzOiBCYXNlVGV4dHVyZVtdID0gW107XHJcbiAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbCBpbnN0YW5jZW9mIFBCUkJhc2VNYXRlcmlhbCkge1xyXG4gICAgICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsLmlyaWRlc2NlbmNlLmlzRW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbC5pcmlkZXNjZW5jZS50ZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkaXRpb25hbFRleHR1cmVzLnB1c2goYmFieWxvbk1hdGVyaWFsLmlyaWRlc2NlbmNlLnRleHR1cmUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbC5pcmlkZXNjZW5jZS50aGlja25lc3NUZXh0dXJlICYmIGJhYnlsb25NYXRlcmlhbC5pcmlkZXNjZW5jZS50aGlja25lc3NUZXh0dXJlICE9PSBiYWJ5bG9uTWF0ZXJpYWwuaXJpZGVzY2VuY2UudGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZGl0aW9uYWxUZXh0dXJlcy5wdXNoKGJhYnlsb25NYXRlcmlhbC5pcmlkZXNjZW5jZS50aGlja25lc3NUZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBhZGRpdGlvbmFsVGV4dHVyZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcG9zdEV4cG9ydE1hdGVyaWFsQXN5bmM/KGNvbnRleHQ6IHN0cmluZywgbm9kZTogSU1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsKTogUHJvbWlzZTxJTWF0ZXJpYWw+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbCBpbnN0YW5jZW9mIFBCUkJhc2VNYXRlcmlhbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFiYWJ5bG9uTWF0ZXJpYWwuaXJpZGVzY2VuY2UuaXNFbmFibGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShub2RlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5fd2FzVXNlZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgbm9kZS5leHRlbnNpb25zID0gbm9kZS5leHRlbnNpb25zIHx8IHt9O1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGlyaWRlc2NlbmNlVGV4dHVyZUluZm8gPSB0aGlzLl9leHBvcnRlci5fbWF0ZXJpYWxFeHBvcnRlci5nZXRUZXh0dXJlSW5mbyhiYWJ5bG9uTWF0ZXJpYWwuaXJpZGVzY2VuY2UudGV4dHVyZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpcmlkZXNjZW5jZVRoaWNrbmVzc1RleHR1cmVJbmZvID0gdGhpcy5fZXhwb3J0ZXIuX21hdGVyaWFsRXhwb3J0ZXIuZ2V0VGV4dHVyZUluZm8oYmFieWxvbk1hdGVyaWFsLmlyaWRlc2NlbmNlLnRoaWNrbmVzc1RleHR1cmUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGlyaWRlc2NlbmNlSW5mbzogSUtIUk1hdGVyaWFsc0lyaWRlc2NlbmNlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlyaWRlc2NlbmNlRmFjdG9yOiBiYWJ5bG9uTWF0ZXJpYWwuaXJpZGVzY2VuY2UuaW50ZW5zaXR5LFxyXG4gICAgICAgICAgICAgICAgICAgIGlyaWRlc2NlbmNlSW9yOiBiYWJ5bG9uTWF0ZXJpYWwuaXJpZGVzY2VuY2UuaW5kZXhPZlJlZnJhY3Rpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgaXJpZGVzY2VuY2VUaGlja25lc3NNaW5pbXVtOiBiYWJ5bG9uTWF0ZXJpYWwuaXJpZGVzY2VuY2UubWluaW11bVRoaWNrbmVzcyxcclxuICAgICAgICAgICAgICAgICAgICBpcmlkZXNjZW5jZVRoaWNrbmVzc01heGltdW06IGJhYnlsb25NYXRlcmlhbC5pcmlkZXNjZW5jZS5tYXhpbXVtVGhpY2tuZXNzLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpcmlkZXNjZW5jZVRleHR1cmU6IGlyaWRlc2NlbmNlVGV4dHVyZUluZm8gPz8gdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgICAgIGlyaWRlc2NlbmNlVGhpY2tuZXNzVGV4dHVyZTogaXJpZGVzY2VuY2VUaGlja25lc3NUZXh0dXJlSW5mbyA/PyB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpcmlkZXNjZW5jZUluZm8uaXJpZGVzY2VuY2VUZXh0dXJlICE9PSBudWxsIHx8IGlyaWRlc2NlbmNlSW5mby5pcmlkZXNjZW5jZVRoaWNrbmVzc1RleHR1cmUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9leHBvcnRlci5fbWF0ZXJpYWxOZWVkc1VWc1NldC5hZGQoYmFieWxvbk1hdGVyaWFsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBub2RlLmV4dGVuc2lvbnNbTkFNRV0gPSBpcmlkZXNjZW5jZUluZm87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzb2x2ZShub2RlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuR0xURkV4cG9ydGVyLlJlZ2lzdGVyRXh0ZW5zaW9uKE5BTUUsIChleHBvcnRlcikgPT4gbmV3IEtIUl9tYXRlcmlhbHNfaXJpZGVzY2VuY2UoZXhwb3J0ZXIpKTtcclxuIiwiaW1wb3J0IHR5cGUgeyBJTWF0ZXJpYWwsIElLSFJNYXRlcmlhbHNTaGVlbiB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHR5cGUgeyBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIgfSBmcm9tIFwiLi4vZ2xURkV4cG9ydGVyRXh0ZW5zaW9uXCI7XHJcbmltcG9ydCB7IEdMVEZFeHBvcnRlciB9IGZyb20gXCIuLi9nbFRGRXhwb3J0ZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBQQlJNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9QQlIvcGJyTWF0ZXJpYWxcIjtcclxuaW1wb3J0IHR5cGUgeyBCYXNlVGV4dHVyZSB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9UZXh0dXJlcy9iYXNlVGV4dHVyZVwiO1xyXG5cclxuY29uc3QgTkFNRSA9IFwiS0hSX21hdGVyaWFsc19zaGVlblwiO1xyXG5cclxuLyoqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgY2xhc3MgS0hSX21hdGVyaWFsc19zaGVlbiBpbXBsZW1lbnRzIElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMiB7XHJcbiAgICAvKiogTmFtZSBvZiB0aGlzIGV4dGVuc2lvbiAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBOQU1FO1xyXG5cclxuICAgIC8qKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgZW5hYmxlZCAqL1xyXG4gICAgcHVibGljIGVuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgIC8qKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgcmVxdWlyZWQgKi9cclxuICAgIHB1YmxpYyByZXF1aXJlZCA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgX3dhc1VzZWQgPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIF9leHBvcnRlcjogR0xURkV4cG9ydGVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGV4cG9ydGVyOiBHTFRGRXhwb3J0ZXIpIHtcclxuICAgICAgICB0aGlzLl9leHBvcnRlciA9IGV4cG9ydGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge31cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgZ2V0IHdhc1VzZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dhc1VzZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBvc3RFeHBvcnRNYXRlcmlhbEFkZGl0aW9uYWxUZXh0dXJlcyhjb250ZXh0OiBzdHJpbmcsIG5vZGU6IElNYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCk6IEJhc2VUZXh0dXJlW10ge1xyXG4gICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwgaW5zdGFuY2VvZiBQQlJNYXRlcmlhbCkge1xyXG4gICAgICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsLnNoZWVuLmlzRW5hYmxlZCAmJiBiYWJ5bG9uTWF0ZXJpYWwuc2hlZW4udGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtiYWJ5bG9uTWF0ZXJpYWwuc2hlZW4udGV4dHVyZV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcG9zdEV4cG9ydE1hdGVyaWFsQXN5bmMoY29udGV4dDogc3RyaW5nLCBub2RlOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBQcm9taXNlPElNYXRlcmlhbD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsIGluc3RhbmNlb2YgUEJSTWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgICAgIGlmICghYmFieWxvbk1hdGVyaWFsLnNoZWVuLmlzRW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUobm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX3dhc1VzZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChub2RlLmV4dGVuc2lvbnMgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuZXh0ZW5zaW9ucyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2hlZW5JbmZvOiBJS0hSTWF0ZXJpYWxzU2hlZW4gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hlZW5Db2xvckZhY3RvcjogYmFieWxvbk1hdGVyaWFsLnNoZWVuLmNvbG9yLmFzQXJyYXkoKSxcclxuICAgICAgICAgICAgICAgICAgICBzaGVlblJvdWdobmVzc0ZhY3RvcjogYmFieWxvbk1hdGVyaWFsLnNoZWVuLnJvdWdobmVzcyA/PyAwLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc2hlZW5JbmZvLnNoZWVuQ29sb3JUZXh0dXJlICE9PSBudWxsIHx8IHNoZWVuSW5mby5zaGVlblJvdWdobmVzc1RleHR1cmUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9leHBvcnRlci5fbWF0ZXJpYWxOZWVkc1VWc1NldC5hZGQoYmFieWxvbk1hdGVyaWFsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsLnNoZWVuLnRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBzaGVlbkluZm8uc2hlZW5Db2xvclRleHR1cmUgPSB0aGlzLl9leHBvcnRlci5fbWF0ZXJpYWxFeHBvcnRlci5nZXRUZXh0dXJlSW5mbyhiYWJ5bG9uTWF0ZXJpYWwuc2hlZW4udGV4dHVyZSkgPz8gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwuc2hlZW4udGV4dHVyZVJvdWdobmVzcyAmJiAhYmFieWxvbk1hdGVyaWFsLnNoZWVuLnVzZVJvdWdobmVzc0Zyb21NYWluVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNoZWVuSW5mby5zaGVlblJvdWdobmVzc1RleHR1cmUgPSB0aGlzLl9leHBvcnRlci5fbWF0ZXJpYWxFeHBvcnRlci5nZXRUZXh0dXJlSW5mbyhiYWJ5bG9uTWF0ZXJpYWwuc2hlZW4udGV4dHVyZVJvdWdobmVzcykgPz8gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChiYWJ5bG9uTWF0ZXJpYWwuc2hlZW4udGV4dHVyZSAmJiBiYWJ5bG9uTWF0ZXJpYWwuc2hlZW4udXNlUm91Z2huZXNzRnJvbU1haW5UZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hlZW5JbmZvLnNoZWVuUm91Z2huZXNzVGV4dHVyZSA9IHRoaXMuX2V4cG9ydGVyLl9tYXRlcmlhbEV4cG9ydGVyLmdldFRleHR1cmVJbmZvKGJhYnlsb25NYXRlcmlhbC5zaGVlbi50ZXh0dXJlKSA/PyB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbm9kZS5leHRlbnNpb25zW05BTUVdID0gc2hlZW5JbmZvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc29sdmUobm9kZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkdMVEZFeHBvcnRlci5SZWdpc3RlckV4dGVuc2lvbihOQU1FLCAoZXhwb3J0ZXIpID0+IG5ldyBLSFJfbWF0ZXJpYWxzX3NoZWVuKGV4cG9ydGVyKSk7XHJcbiIsImltcG9ydCB0eXBlIHsgSU1hdGVyaWFsLCBJS0hSTWF0ZXJpYWxzU3BlY3VsYXIgfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB0eXBlIHsgSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyIH0gZnJvbSBcIi4uL2dsVEZFeHBvcnRlckV4dGVuc2lvblwiO1xyXG5pbXBvcnQgeyBHTFRGRXhwb3J0ZXIgfSBmcm9tIFwiLi4vZ2xURkV4cG9ydGVyXCI7XHJcbmltcG9ydCB0eXBlIHsgTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgUEJSTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvUEJSL3Bick1hdGVyaWFsXCI7XHJcbmltcG9ydCB0eXBlIHsgQmFzZVRleHR1cmUgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvYmFzZVRleHR1cmVcIjtcclxuXHJcbmNvbnN0IE5BTUUgPSBcIktIUl9tYXRlcmlhbHNfc3BlY3VsYXJcIjtcclxuXHJcbi8qKlxyXG4gKiBbU3BlY2lmaWNhdGlvbl0oaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFpbi9leHRlbnNpb25zLzIuMC9LaHJvbm9zL0tIUl9tYXRlcmlhbHNfc3BlY3VsYXIvUkVBRE1FLm1kKVxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgY2xhc3MgS0hSX21hdGVyaWFsc19zcGVjdWxhciBpbXBsZW1lbnRzIElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMiB7XHJcbiAgICAvKiogTmFtZSBvZiB0aGlzIGV4dGVuc2lvbiAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBOQU1FO1xyXG5cclxuICAgIC8qKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgZW5hYmxlZCAqL1xyXG4gICAgcHVibGljIGVuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgIC8qKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgcmVxdWlyZWQgKi9cclxuICAgIHB1YmxpYyByZXF1aXJlZCA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgX2V4cG9ydGVyOiBHTFRGRXhwb3J0ZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBfd2FzVXNlZCA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGV4cG9ydGVyOiBHTFRGRXhwb3J0ZXIpIHtcclxuICAgICAgICB0aGlzLl9leHBvcnRlciA9IGV4cG9ydGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBEaXNwb3NlICovXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHt9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGdldCB3YXNVc2VkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl93YXNVc2VkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWZ0ZXIgZXhwb3J0aW5nIGEgbWF0ZXJpYWwsIGRlYWwgd2l0aCB0aGUgYWRkaXRpb25hbCB0ZXh0dXJlc1xyXG4gICAgICogQHBhcmFtIGNvbnRleHQgR0xURiBjb250ZXh0IG9mIHRoZSBtYXRlcmlhbFxyXG4gICAgICogQHBhcmFtIG5vZGUgZXhwb3J0ZWQgR0xURiBub2RlXHJcbiAgICAgKiBAcGFyYW0gYmFieWxvbk1hdGVyaWFsIGNvcnJlc3BvbmRpbmcgYmFieWxvbiBtYXRlcmlhbFxyXG4gICAgICogQHJldHVybnMgYXJyYXkgb2YgYWRkaXRpb25hbCB0ZXh0dXJlcyB0byBleHBvcnRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHBvc3RFeHBvcnRNYXRlcmlhbEFkZGl0aW9uYWxUZXh0dXJlcz8oY29udGV4dDogc3RyaW5nLCBub2RlOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBCYXNlVGV4dHVyZVtdIHtcclxuICAgICAgICBjb25zdCBhZGRpdGlvbmFsVGV4dHVyZXM6IEJhc2VUZXh0dXJlW10gPSBbXTtcclxuXHJcbiAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbCBpbnN0YW5jZW9mIFBCUk1hdGVyaWFsKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9pc0V4dGVuc2lvbkVuYWJsZWQoYmFieWxvbk1hdGVyaWFsKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbC5tZXRhbGxpY1JlZmxlY3RhbmNlVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZGl0aW9uYWxUZXh0dXJlcy5wdXNoKGJhYnlsb25NYXRlcmlhbC5tZXRhbGxpY1JlZmxlY3RhbmNlVGV4dHVyZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsLnJlZmxlY3RhbmNlVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZGl0aW9uYWxUZXh0dXJlcy5wdXNoKGJhYnlsb25NYXRlcmlhbC5yZWZsZWN0YW5jZVRleHR1cmUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFkZGl0aW9uYWxUZXh0dXJlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGFkZGl0aW9uYWxUZXh0dXJlcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9pc0V4dGVuc2lvbkVuYWJsZWQobWF0OiBQQlJNYXRlcmlhbCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIC8vIFRoaXMgZXh0ZW5zaW9uIG11c3Qgbm90IGJlIHVzZWQgb24gYSBtYXRlcmlhbCB0aGF0IGFsc28gdXNlcyBLSFJfbWF0ZXJpYWxzX3VubGl0XHJcbiAgICAgICAgaWYgKG1hdC51bmxpdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIChtYXQubWV0YWxsaWNGMEZhY3RvciAhPSB1bmRlZmluZWQgJiYgbWF0Lm1ldGFsbGljRjBGYWN0b3IgIT0gMS4wKSB8fFxyXG4gICAgICAgICAgICAobWF0Lm1ldGFsbGljUmVmbGVjdGFuY2VDb2xvciAhPSB1bmRlZmluZWQgJiYgIW1hdC5tZXRhbGxpY1JlZmxlY3RhbmNlQ29sb3IuZXF1YWxzRmxvYXRzKDEuMCwgMS4wLCAxLjApKSB8fFxyXG4gICAgICAgICAgICB0aGlzLl9oYXNUZXh0dXJlc0V4dGVuc2lvbihtYXQpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9oYXNUZXh0dXJlc0V4dGVuc2lvbihtYXQ6IFBCUk1hdGVyaWFsKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIG1hdC5tZXRhbGxpY1JlZmxlY3RhbmNlVGV4dHVyZSAhPSBudWxsIHx8IG1hdC5yZWZsZWN0YW5jZVRleHR1cmUgIT0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFmdGVyIGV4cG9ydGluZyBhIG1hdGVyaWFsXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBHTFRGIGNvbnRleHQgb2YgdGhlIG1hdGVyaWFsXHJcbiAgICAgKiBAcGFyYW0gbm9kZSBleHBvcnRlZCBHTFRGIG5vZGVcclxuICAgICAqIEBwYXJhbSBiYWJ5bG9uTWF0ZXJpYWwgY29ycmVzcG9uZGluZyBiYWJ5bG9uIG1hdGVyaWFsXHJcbiAgICAgKiBAcmV0dXJucyBwcm9taXNlLCByZXNvbHZlcyB3aXRoIHRoZSBtYXRlcmlhbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcG9zdEV4cG9ydE1hdGVyaWFsQXN5bmM/KGNvbnRleHQ6IHN0cmluZywgbm9kZTogSU1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsKTogUHJvbWlzZTxJTWF0ZXJpYWw+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbCBpbnN0YW5jZW9mIFBCUk1hdGVyaWFsICYmIHRoaXMuX2lzRXh0ZW5zaW9uRW5hYmxlZChiYWJ5bG9uTWF0ZXJpYWwpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl93YXNVc2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBub2RlLmV4dGVuc2lvbnMgPSBub2RlLmV4dGVuc2lvbnMgfHwge307XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgbWV0YWxsaWNSZWZsZWN0YW5jZVRleHR1cmUgPSB0aGlzLl9leHBvcnRlci5fbWF0ZXJpYWxFeHBvcnRlci5nZXRUZXh0dXJlSW5mbyhiYWJ5bG9uTWF0ZXJpYWwubWV0YWxsaWNSZWZsZWN0YW5jZVRleHR1cmUpID8/IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlZmxlY3RhbmNlVGV4dHVyZSA9IHRoaXMuX2V4cG9ydGVyLl9tYXRlcmlhbEV4cG9ydGVyLmdldFRleHR1cmVJbmZvKGJhYnlsb25NYXRlcmlhbC5yZWZsZWN0YW5jZVRleHR1cmUpID8/IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1ldGFsbGljRjBGYWN0b3IgPSBiYWJ5bG9uTWF0ZXJpYWwubWV0YWxsaWNGMEZhY3RvciA9PSAxLjAgPyB1bmRlZmluZWQgOiBiYWJ5bG9uTWF0ZXJpYWwubWV0YWxsaWNGMEZhY3RvcjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1ldGFsbGljUmVmbGVjdGFuY2VDb2xvciA9IGJhYnlsb25NYXRlcmlhbC5tZXRhbGxpY1JlZmxlY3RhbmNlQ29sb3IuZXF1YWxzRmxvYXRzKDEuMCwgMS4wLCAxLjApXHJcbiAgICAgICAgICAgICAgICAgICAgPyB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICA6IGJhYnlsb25NYXRlcmlhbC5tZXRhbGxpY1JlZmxlY3RhbmNlQ29sb3IuYXNBcnJheSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHNwZWN1bGFySW5mbzogSUtIUk1hdGVyaWFsc1NwZWN1bGFyID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNwZWN1bGFyRmFjdG9yOiBtZXRhbGxpY0YwRmFjdG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwZWN1bGFyVGV4dHVyZTogbWV0YWxsaWNSZWZsZWN0YW5jZVRleHR1cmUsXHJcbiAgICAgICAgICAgICAgICAgICAgc3BlY3VsYXJDb2xvckZhY3RvcjogbWV0YWxsaWNSZWZsZWN0YW5jZUNvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwZWN1bGFyQ29sb3JUZXh0dXJlOiByZWZsZWN0YW5jZVRleHR1cmUsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9oYXNUZXh0dXJlc0V4dGVuc2lvbihiYWJ5bG9uTWF0ZXJpYWwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXhwb3J0ZXIuX21hdGVyaWFsTmVlZHNVVnNTZXQuYWRkKGJhYnlsb25NYXRlcmlhbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbm9kZS5leHRlbnNpb25zW05BTUVdID0gc3BlY3VsYXJJbmZvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc29sdmUobm9kZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkdMVEZFeHBvcnRlci5SZWdpc3RlckV4dGVuc2lvbihOQU1FLCAoZXhwb3J0ZXIpID0+IG5ldyBLSFJfbWF0ZXJpYWxzX3NwZWN1bGFyKGV4cG9ydGVyKSk7XHJcbiIsImltcG9ydCB0eXBlIHsgSU1hdGVyaWFsLCBJS0hSTWF0ZXJpYWxzVHJhbnNtaXNzaW9uIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBJbWFnZU1pbWVUeXBlIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgdHlwZSB7IElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMiB9IGZyb20gXCIuLi9nbFRGRXhwb3J0ZXJFeHRlbnNpb25cIjtcclxuaW1wb3J0IHsgR0xURkV4cG9ydGVyIH0gZnJvbSBcIi4uL2dsVEZFeHBvcnRlclwiO1xyXG5pbXBvcnQgdHlwZSB7IE1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IFBCUk1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1BCUi9wYnJNYXRlcmlhbFwiO1xyXG5pbXBvcnQgdHlwZSB7IEJhc2VUZXh0dXJlIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1RleHR1cmVzL2Jhc2VUZXh0dXJlXCI7XHJcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gXCJjb3JlL01pc2MvbG9nZ2VyXCI7XHJcblxyXG5jb25zdCBOQU1FID0gXCJLSFJfbWF0ZXJpYWxzX3RyYW5zbWlzc2lvblwiO1xyXG5cclxuLyoqXHJcbiAqIFtTcGVjaWZpY2F0aW9uXShodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi9tYWluL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX21hdGVyaWFsc190cmFuc21pc3Npb24vUkVBRE1FLm1kKVxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgY2xhc3MgS0hSX21hdGVyaWFsc190cmFuc21pc3Npb24gaW1wbGVtZW50cyBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIge1xyXG4gICAgLyoqIE5hbWUgb2YgdGhpcyBleHRlbnNpb24gKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lID0gTkFNRTtcclxuXHJcbiAgICAvKiogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIGVuYWJsZWQgKi9cclxuICAgIHB1YmxpYyBlbmFibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAvKiogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIHJlcXVpcmVkICovXHJcbiAgICBwdWJsaWMgcmVxdWlyZWQgPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIF9leHBvcnRlcjogR0xURkV4cG9ydGVyO1xyXG5cclxuICAgIHByaXZhdGUgX3dhc1VzZWQgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihleHBvcnRlcjogR0xURkV4cG9ydGVyKSB7XHJcbiAgICAgICAgdGhpcy5fZXhwb3J0ZXIgPSBleHBvcnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAvKiogRGlzcG9zZSAqL1xyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7fVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBnZXQgd2FzVXNlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fd2FzVXNlZDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFmdGVyIGV4cG9ydGluZyBhIG1hdGVyaWFsLCBkZWFsIHdpdGggYWRkaXRpb25hbCB0ZXh0dXJlc1xyXG4gICAgICogQHBhcmFtIGNvbnRleHQgR0xURiBjb250ZXh0IG9mIHRoZSBtYXRlcmlhbFxyXG4gICAgICogQHBhcmFtIG5vZGUgZXhwb3J0ZWQgR0xURiBub2RlXHJcbiAgICAgKiBAcGFyYW0gYmFieWxvbk1hdGVyaWFsIGNvcnJlc3BvbmRpbmcgYmFieWxvbiBtYXRlcmlhbFxyXG4gICAgICogQHJldHVybnMgYXJyYXkgb2YgYWRkaXRpb25hbCB0ZXh0dXJlcyB0byBleHBvcnRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHBvc3RFeHBvcnRNYXRlcmlhbEFkZGl0aW9uYWxUZXh0dXJlcz8oY29udGV4dDogc3RyaW5nLCBub2RlOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBCYXNlVGV4dHVyZVtdIHtcclxuICAgICAgICBjb25zdCBhZGRpdGlvbmFsVGV4dHVyZXM6IEJhc2VUZXh0dXJlW10gPSBbXTtcclxuXHJcbiAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbCBpbnN0YW5jZW9mIFBCUk1hdGVyaWFsKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9pc0V4dGVuc2lvbkVuYWJsZWQoYmFieWxvbk1hdGVyaWFsKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbC5zdWJTdXJmYWNlLnRoaWNrbmVzc1RleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRpdGlvbmFsVGV4dHVyZXMucHVzaChiYWJ5bG9uTWF0ZXJpYWwuc3ViU3VyZmFjZS50aGlja25lc3NUZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBhZGRpdGlvbmFsVGV4dHVyZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBhZGRpdGlvbmFsVGV4dHVyZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfaXNFeHRlbnNpb25FbmFibGVkKG1hdDogUEJSTWF0ZXJpYWwpOiBib29sZWFuIHtcclxuICAgICAgICAvLyBUaGlzIGV4dGVuc2lvbiBtdXN0IG5vdCBiZSB1c2VkIG9uIGEgbWF0ZXJpYWwgdGhhdCBhbHNvIHVzZXMgS0hSX21hdGVyaWFsc191bmxpdFxyXG4gICAgICAgIGlmIChtYXQudW5saXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzdWJzID0gbWF0LnN1YlN1cmZhY2U7XHJcbiAgICAgICAgcmV0dXJuIChzdWJzLmlzUmVmcmFjdGlvbkVuYWJsZWQgJiYgc3Vicy5yZWZyYWN0aW9uSW50ZW5zaXR5ICE9IHVuZGVmaW5lZCAmJiBzdWJzLnJlZnJhY3Rpb25JbnRlbnNpdHkgIT0gMCkgfHwgdGhpcy5faGFzVGV4dHVyZXNFeHRlbnNpb24obWF0KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9oYXNUZXh0dXJlc0V4dGVuc2lvbihtYXQ6IFBCUk1hdGVyaWFsKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIG1hdC5zdWJTdXJmYWNlLnJlZnJhY3Rpb25JbnRlbnNpdHlUZXh0dXJlICE9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZnRlciBleHBvcnRpbmcgYSBtYXRlcmlhbFxyXG4gICAgICogQHBhcmFtIGNvbnRleHQgR0xURiBjb250ZXh0IG9mIHRoZSBtYXRlcmlhbFxyXG4gICAgICogQHBhcmFtIG5vZGUgZXhwb3J0ZWQgR0xURiBub2RlXHJcbiAgICAgKiBAcGFyYW0gYmFieWxvbk1hdGVyaWFsIGNvcnJlc3BvbmRpbmcgYmFieWxvbiBtYXRlcmlhbFxyXG4gICAgICogQHJldHVybnMgdHJ1ZSBpZiBzdWNjZXNzZnVsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhc3luYyBwb3N0RXhwb3J0TWF0ZXJpYWxBc3luYz8oY29udGV4dDogc3RyaW5nLCBub2RlOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBQcm9taXNlPElNYXRlcmlhbD4ge1xyXG4gICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwgaW5zdGFuY2VvZiBQQlJNYXRlcmlhbCAmJiB0aGlzLl9pc0V4dGVuc2lvbkVuYWJsZWQoYmFieWxvbk1hdGVyaWFsKSkge1xyXG4gICAgICAgICAgICB0aGlzLl93YXNVc2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHN1YlN1cmZhY2UgPSBiYWJ5bG9uTWF0ZXJpYWwuc3ViU3VyZmFjZTtcclxuICAgICAgICAgICAgY29uc3QgdHJhbnNtaXNzaW9uRmFjdG9yID0gc3ViU3VyZmFjZS5yZWZyYWN0aW9uSW50ZW5zaXR5ID09PSAwID8gdW5kZWZpbmVkIDogc3ViU3VyZmFjZS5yZWZyYWN0aW9uSW50ZW5zaXR5O1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgdm9sdW1lSW5mbzogSUtIUk1hdGVyaWFsc1RyYW5zbWlzc2lvbiA9IHtcclxuICAgICAgICAgICAgICAgIHRyYW5zbWlzc2lvbkZhY3RvcjogdHJhbnNtaXNzaW9uRmFjdG9yLFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2hhc1RleHR1cmVzRXh0ZW5zaW9uKGJhYnlsb25NYXRlcmlhbCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2V4cG9ydGVyLl9tYXRlcmlhbE5lZWRzVVZzU2V0LmFkZChiYWJ5bG9uTWF0ZXJpYWwpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoc3ViU3VyZmFjZS5yZWZyYWN0aW9uSW50ZW5zaXR5VGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN1YlN1cmZhY2UudXNlR2x0ZlN0eWxlVGV4dHVyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0cmFuc21pc3Npb25UZXh0dXJlID0gYXdhaXQgdGhpcy5fZXhwb3J0ZXIuX21hdGVyaWFsRXhwb3J0ZXIuZXhwb3J0VGV4dHVyZUFzeW5jKHN1YlN1cmZhY2UucmVmcmFjdGlvbkludGVuc2l0eVRleHR1cmUsIEltYWdlTWltZVR5cGUuUE5HKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHJhbnNtaXNzaW9uVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2b2x1bWVJbmZvLnRyYW5zbWlzc2lvblRleHR1cmUgPSB0cmFuc21pc3Npb25UZXh0dXJlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nZ2VyLldhcm4oYCR7Y29udGV4dH06IEV4cG9ydGluZyBhIHN1YnN1cmZhY2UgcmVmcmFjdGlvbiBpbnRlbnNpdHkgdGV4dHVyZSB3aXRob3V0IFxcYHVzZUdsdGZTdHlsZVRleHR1cmVzXFxgIGlzIG5vdCBzdXBwb3J0ZWRgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbm9kZS5leHRlbnNpb25zIHx8PSB7fTtcclxuICAgICAgICAgICAgbm9kZS5leHRlbnNpb25zW05BTUVdID0gdm9sdW1lSW5mbztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgfVxyXG59XHJcblxyXG5HTFRGRXhwb3J0ZXIuUmVnaXN0ZXJFeHRlbnNpb24oTkFNRSwgKGV4cG9ydGVyKSA9PiBuZXcgS0hSX21hdGVyaWFsc190cmFuc21pc3Npb24oZXhwb3J0ZXIpKTtcclxuIiwiaW1wb3J0IHR5cGUgeyBJTWF0ZXJpYWwgfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB0eXBlIHsgSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyIH0gZnJvbSBcIi4uL2dsVEZFeHBvcnRlckV4dGVuc2lvblwiO1xyXG5pbXBvcnQgeyBHTFRGRXhwb3J0ZXIgfSBmcm9tIFwiLi4vZ2xURkV4cG9ydGVyXCI7XHJcbmltcG9ydCB0eXBlIHsgTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgUEJSTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvUEJSL3Bick1hdGVyaWFsXCI7XHJcbmltcG9ydCB7IFN0YW5kYXJkTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvc3RhbmRhcmRNYXRlcmlhbFwiO1xyXG5cclxuY29uc3QgTkFNRSA9IFwiS0hSX21hdGVyaWFsc191bmxpdFwiO1xyXG5cclxuLyoqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgY2xhc3MgS0hSX21hdGVyaWFsc191bmxpdCBpbXBsZW1lbnRzIElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMiB7XHJcbiAgICAvKiogTmFtZSBvZiB0aGlzIGV4dGVuc2lvbiAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBOQU1FO1xyXG5cclxuICAgIC8qKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgZW5hYmxlZCAqL1xyXG4gICAgcHVibGljIGVuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgIC8qKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgcmVxdWlyZWQgKi9cclxuICAgIHB1YmxpYyByZXF1aXJlZCA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgX3dhc1VzZWQgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGdldCB3YXNVc2VkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl93YXNVc2VkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge31cclxuXHJcbiAgICBwdWJsaWMgcG9zdEV4cG9ydE1hdGVyaWFsQXN5bmM/KGNvbnRleHQ6IHN0cmluZywgbm9kZTogSU1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsKTogUHJvbWlzZTxJTWF0ZXJpYWw+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgbGV0IHVubGl0TWF0ZXJpYWwgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwgaW5zdGFuY2VvZiBQQlJNYXRlcmlhbCkge1xyXG4gICAgICAgICAgICAgICAgdW5saXRNYXRlcmlhbCA9IGJhYnlsb25NYXRlcmlhbC51bmxpdDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChiYWJ5bG9uTWF0ZXJpYWwgaW5zdGFuY2VvZiBTdGFuZGFyZE1hdGVyaWFsKSB7XHJcbiAgICAgICAgICAgICAgICB1bmxpdE1hdGVyaWFsID0gYmFieWxvbk1hdGVyaWFsLmRpc2FibGVMaWdodGluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHVubGl0TWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3dhc1VzZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChub2RlLmV4dGVuc2lvbnMgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuZXh0ZW5zaW9ucyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIG5vZGUuZXh0ZW5zaW9uc1tOQU1FXSA9IHt9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXNvbHZlKG5vZGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5HTFRGRXhwb3J0ZXIuUmVnaXN0ZXJFeHRlbnNpb24oTkFNRSwgKCkgPT4gbmV3IEtIUl9tYXRlcmlhbHNfdW5saXQoKSk7XHJcbiIsImltcG9ydCB0eXBlIHsgSU1hdGVyaWFsLCBJS0hSTWF0ZXJpYWxzVm9sdW1lIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgdHlwZSB7IElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMiB9IGZyb20gXCIuLi9nbFRGRXhwb3J0ZXJFeHRlbnNpb25cIjtcclxuaW1wb3J0IHsgR0xURkV4cG9ydGVyIH0gZnJvbSBcIi4uL2dsVEZFeHBvcnRlclwiO1xyXG5pbXBvcnQgdHlwZSB7IE1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IFBCUk1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1BCUi9wYnJNYXRlcmlhbFwiO1xyXG5pbXBvcnQgdHlwZSB7IEJhc2VUZXh0dXJlIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1RleHR1cmVzL2Jhc2VUZXh0dXJlXCI7XHJcbmltcG9ydCB7IENvbG9yMyB9IGZyb20gXCJjb3JlL01hdGhzL21hdGguY29sb3JcIjtcclxuXHJcbmNvbnN0IE5BTUUgPSBcIktIUl9tYXRlcmlhbHNfdm9sdW1lXCI7XHJcblxyXG4vKipcclxuICogW1NwZWNpZmljYXRpb25dKGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9ibG9iL21haW4vZXh0ZW5zaW9ucy8yLjAvS2hyb25vcy9LSFJfbWF0ZXJpYWxzX3ZvbHVtZS9SRUFETUUubWQpXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBjbGFzcyBLSFJfbWF0ZXJpYWxzX3ZvbHVtZSBpbXBsZW1lbnRzIElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMiB7XHJcbiAgICAvKiogTmFtZSBvZiB0aGlzIGV4dGVuc2lvbiAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBOQU1FO1xyXG5cclxuICAgIC8qKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgZW5hYmxlZCAqL1xyXG4gICAgcHVibGljIGVuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgIC8qKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgcmVxdWlyZWQgKi9cclxuICAgIHB1YmxpYyByZXF1aXJlZCA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgX2V4cG9ydGVyOiBHTFRGRXhwb3J0ZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBfd2FzVXNlZCA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGV4cG9ydGVyOiBHTFRGRXhwb3J0ZXIpIHtcclxuICAgICAgICB0aGlzLl9leHBvcnRlciA9IGV4cG9ydGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge31cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgZ2V0IHdhc1VzZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dhc1VzZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZnRlciBleHBvcnRpbmcgYSBtYXRlcmlhbCwgZGVhbCB3aXRoIGFkZGl0aW9uYWwgdGV4dHVyZXNcclxuICAgICAqIEBwYXJhbSBjb250ZXh0IEdMVEYgY29udGV4dCBvZiB0aGUgbWF0ZXJpYWxcclxuICAgICAqIEBwYXJhbSBub2RlIGV4cG9ydGVkIEdMVEYgbm9kZVxyXG4gICAgICogQHBhcmFtIGJhYnlsb25NYXRlcmlhbCBjb3JyZXNwb25kaW5nIGJhYnlsb24gbWF0ZXJpYWxcclxuICAgICAqIEByZXR1cm5zIGFycmF5IG9mIGFkZGl0aW9uYWwgdGV4dHVyZXMgdG8gZXhwb3J0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwb3N0RXhwb3J0TWF0ZXJpYWxBZGRpdGlvbmFsVGV4dHVyZXM/KGNvbnRleHQ6IHN0cmluZywgbm9kZTogSU1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsKTogQmFzZVRleHR1cmVbXSB7XHJcbiAgICAgICAgY29uc3QgYWRkaXRpb25hbFRleHR1cmVzOiBCYXNlVGV4dHVyZVtdID0gW107XHJcblxyXG4gICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwgaW5zdGFuY2VvZiBQQlJNYXRlcmlhbCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5faXNFeHRlbnNpb25FbmFibGVkKGJhYnlsb25NYXRlcmlhbCkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwuc3ViU3VyZmFjZS50aGlja25lc3NUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkaXRpb25hbFRleHR1cmVzLnB1c2goYmFieWxvbk1hdGVyaWFsLnN1YlN1cmZhY2UudGhpY2tuZXNzVGV4dHVyZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYWRkaXRpb25hbFRleHR1cmVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYWRkaXRpb25hbFRleHR1cmVzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2lzRXh0ZW5zaW9uRW5hYmxlZChtYXQ6IFBCUk1hdGVyaWFsKTogYm9vbGVhbiB7XHJcbiAgICAgICAgLy8gVGhpcyBleHRlbnNpb24gbXVzdCBub3QgYmUgdXNlZCBvbiBhIG1hdGVyaWFsIHRoYXQgYWxzbyB1c2VzIEtIUl9tYXRlcmlhbHNfdW5saXRcclxuICAgICAgICBpZiAobWF0LnVubGl0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc3VicyA9IG1hdC5zdWJTdXJmYWNlO1xyXG4gICAgICAgIC8vIHRoaXMgZXh0ZW5zaW9uIHJlcXVpcmVzIGVpdGhlciB0aGUgS0hSX21hdGVyaWFsc190cmFuc21pc3Npb24gb3IgS0hSX21hdGVyaWFsc19kaWZmdXNlX3RyYW5zbWlzc2lvbiBleHRlbnNpb25zLlxyXG4gICAgICAgIGlmICghc3Vicy5pc1JlZnJhY3Rpb25FbmFibGVkICYmICFzdWJzLmlzVHJhbnNsdWNlbmN5RW5hYmxlZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIChzdWJzLm1heGltdW1UaGlja25lc3MgIT0gdW5kZWZpbmVkICYmIHN1YnMubWF4aW11bVRoaWNrbmVzcyAhPSAwKSB8fFxyXG4gICAgICAgICAgICAoc3Vicy50aW50Q29sb3JBdERpc3RhbmNlICE9IHVuZGVmaW5lZCAmJiBzdWJzLnRpbnRDb2xvckF0RGlzdGFuY2UgIT0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZKSB8fFxyXG4gICAgICAgICAgICAoc3Vicy50aW50Q29sb3IgIT0gdW5kZWZpbmVkICYmIHN1YnMudGludENvbG9yICE9IENvbG9yMy5XaGl0ZSgpKSB8fFxyXG4gICAgICAgICAgICB0aGlzLl9oYXNUZXh0dXJlc0V4dGVuc2lvbihtYXQpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9oYXNUZXh0dXJlc0V4dGVuc2lvbihtYXQ6IFBCUk1hdGVyaWFsKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIG1hdC5zdWJTdXJmYWNlLnRoaWNrbmVzc1RleHR1cmUgIT0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFmdGVyIGV4cG9ydGluZyBhIG1hdGVyaWFsXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBHTFRGIGNvbnRleHQgb2YgdGhlIG1hdGVyaWFsXHJcbiAgICAgKiBAcGFyYW0gbm9kZSBleHBvcnRlZCBHTFRGIG5vZGVcclxuICAgICAqIEBwYXJhbSBiYWJ5bG9uTWF0ZXJpYWwgY29ycmVzcG9uZGluZyBiYWJ5bG9uIG1hdGVyaWFsXHJcbiAgICAgKiBAcmV0dXJucyBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgdXBkYXRlZCBub2RlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwb3N0RXhwb3J0TWF0ZXJpYWxBc3luYz8oY29udGV4dDogc3RyaW5nLCBub2RlOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBQcm9taXNlPElNYXRlcmlhbD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsIGluc3RhbmNlb2YgUEJSTWF0ZXJpYWwgJiYgdGhpcy5faXNFeHRlbnNpb25FbmFibGVkKGJhYnlsb25NYXRlcmlhbCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3dhc1VzZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHN1YnMgPSBiYWJ5bG9uTWF0ZXJpYWwuc3ViU3VyZmFjZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRoaWNrbmVzc0ZhY3RvciA9IHN1YnMubWF4aW11bVRoaWNrbmVzcyA9PSAwID8gdW5kZWZpbmVkIDogc3Vicy5tYXhpbXVtVGhpY2tuZXNzO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGhpY2tuZXNzVGV4dHVyZSA9IHRoaXMuX2V4cG9ydGVyLl9tYXRlcmlhbEV4cG9ydGVyLmdldFRleHR1cmVJbmZvKHN1YnMudGhpY2tuZXNzVGV4dHVyZSkgPz8gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXR0ZW51YXRpb25EaXN0YW5jZSA9IHN1YnMudGludENvbG9yQXREaXN0YW5jZSA9PSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFkgPyB1bmRlZmluZWQgOiBzdWJzLnRpbnRDb2xvckF0RGlzdGFuY2U7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhdHRlbnVhdGlvbkNvbG9yID0gc3Vicy50aW50Q29sb3IuZXF1YWxzRmxvYXRzKDEuMCwgMS4wLCAxLjApID8gdW5kZWZpbmVkIDogc3Vicy50aW50Q29sb3IuYXNBcnJheSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHZvbHVtZUluZm86IElLSFJNYXRlcmlhbHNWb2x1bWUgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpY2tuZXNzRmFjdG9yOiB0aGlja25lc3NGYWN0b3IsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpY2tuZXNzVGV4dHVyZTogdGhpY2tuZXNzVGV4dHVyZSxcclxuICAgICAgICAgICAgICAgICAgICBhdHRlbnVhdGlvbkRpc3RhbmNlOiBhdHRlbnVhdGlvbkRpc3RhbmNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dGVudWF0aW9uQ29sb3I6IGF0dGVudWF0aW9uQ29sb3IsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9oYXNUZXh0dXJlc0V4dGVuc2lvbihiYWJ5bG9uTWF0ZXJpYWwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXhwb3J0ZXIuX21hdGVyaWFsTmVlZHNVVnNTZXQuYWRkKGJhYnlsb25NYXRlcmlhbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbm9kZS5leHRlbnNpb25zID0gbm9kZS5leHRlbnNpb25zIHx8IHt9O1xyXG4gICAgICAgICAgICAgICAgbm9kZS5leHRlbnNpb25zW05BTUVdID0gdm9sdW1lSW5mbztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXNvbHZlKG5vZGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5HTFRGRXhwb3J0ZXIuUmVnaXN0ZXJFeHRlbnNpb24oTkFNRSwgKGV4cG9ydGVyKSA9PiBuZXcgS0hSX21hdGVyaWFsc192b2x1bWUoZXhwb3J0ZXIpKTtcclxuIiwiaW1wb3J0IHR5cGUgeyBJVGV4dHVyZUluZm8sIElLSFJUZXh0dXJlVHJhbnNmb3JtIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBUb29scyB9IGZyb20gXCJjb3JlL01pc2MvdG9vbHNcIjtcclxuaW1wb3J0IHR5cGUgeyBUZXh0dXJlIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1RleHR1cmVzL3RleHR1cmVcIjtcclxuaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCJjb3JlL3R5cGVzXCI7XHJcbmltcG9ydCB0eXBlIHsgSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyIH0gZnJvbSBcIi4uL2dsVEZFeHBvcnRlckV4dGVuc2lvblwiO1xyXG5pbXBvcnQgeyBHTFRGRXhwb3J0ZXIgfSBmcm9tIFwiLi4vZ2xURkV4cG9ydGVyXCI7XHJcblxyXG5jb25zdCBOQU1FID0gXCJLSFJfdGV4dHVyZV90cmFuc2Zvcm1cIjtcclxuXHJcbi8qKlxyXG4gKiBDb21wdXRlcyB0aGUgYWRqdXN0ZWQgb2Zmc2V0IGZvciBhIHJvdGF0aW9uIGNlbnRlcmVkIGFib3V0IHRoZSBvcmlnaW4uXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuZnVuY3Rpb24gQWRqdXN0T2Zmc2V0Rm9yUm90YXRpb25DZW50ZXIoYmFieWxvblRleHR1cmU6IFRleHR1cmUpOiBbbnVtYmVyLCBudW1iZXJdIHtcclxuICAgIGNvbnN0IHsgdU9mZnNldCwgdk9mZnNldCwgdVJvdGF0aW9uQ2VudGVyLCB2Um90YXRpb25DZW50ZXIsIHdBbmcgfSA9IGJhYnlsb25UZXh0dXJlO1xyXG4gICAgY29uc3QgY29zQW5nbGUgPSBNYXRoLmNvcygtd0FuZyk7XHJcbiAgICBjb25zdCBzaW5BbmdsZSA9IE1hdGguc2luKC13QW5nKTtcclxuICAgIGNvbnN0IGRlbHRhVSA9IHVSb3RhdGlvbkNlbnRlciAqICgxIC0gY29zQW5nbGUpIC0gdlJvdGF0aW9uQ2VudGVyICogc2luQW5nbGU7XHJcbiAgICBjb25zdCBkZWx0YVYgPSB2Um90YXRpb25DZW50ZXIgKiAoMSAtIGNvc0FuZ2xlKSArIHVSb3RhdGlvbkNlbnRlciAqIHNpbkFuZ2xlO1xyXG4gICAgcmV0dXJuIFt1T2Zmc2V0ICsgZGVsdGFVLCB2T2Zmc2V0ICsgZGVsdGFWXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgY2xhc3MgS0hSX3RleHR1cmVfdHJhbnNmb3JtIGltcGxlbWVudHMgSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyIHtcclxuICAgIC8qKiBOYW1lIG9mIHRoaXMgZXh0ZW5zaW9uICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZSA9IE5BTUU7XHJcblxyXG4gICAgLyoqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyBlbmFibGVkICovXHJcbiAgICBwdWJsaWMgZW5hYmxlZCA9IHRydWU7XHJcblxyXG4gICAgLyoqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyByZXF1aXJlZCAqL1xyXG4gICAgcHVibGljIHJlcXVpcmVkID0gZmFsc2U7XHJcblxyXG4gICAgLyoqIFJlZmVyZW5jZSB0byB0aGUgZ2xURiBleHBvcnRlciAqL1xyXG4gICAgcHJpdmF0ZSBfd2FzVXNlZCA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHt9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGdldCB3YXNVc2VkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl93YXNVc2VkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwb3N0RXhwb3J0VGV4dHVyZT8oY29udGV4dDogc3RyaW5nLCB0ZXh0dXJlSW5mbzogSVRleHR1cmVJbmZvLCBiYWJ5bG9uVGV4dHVyZTogVGV4dHVyZSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGNhblVzZUV4dGVuc2lvbiA9IGJhYnlsb25UZXh0dXJlICYmIGJhYnlsb25UZXh0dXJlLnVBbmcgPT09IDAgJiYgYmFieWxvblRleHR1cmUudkFuZyA9PT0gMDtcclxuXHJcbiAgICAgICAgaWYgKGNhblVzZUV4dGVuc2lvbikge1xyXG4gICAgICAgICAgICBjb25zdCB0ZXh0dXJlVHJhbnNmb3JtOiBJS0hSVGV4dHVyZVRyYW5zZm9ybSA9IHt9O1xyXG4gICAgICAgICAgICBsZXQgdHJhbnNmb3JtSXNSZXF1aXJlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgaWYgKGJhYnlsb25UZXh0dXJlLnVPZmZzZXQgIT09IDAgfHwgYmFieWxvblRleHR1cmUudk9mZnNldCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGV4dHVyZVRyYW5zZm9ybS5vZmZzZXQgPSBbYmFieWxvblRleHR1cmUudU9mZnNldCwgYmFieWxvblRleHR1cmUudk9mZnNldF07XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1Jc1JlcXVpcmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGJhYnlsb25UZXh0dXJlLnVTY2FsZSAhPT0gMSB8fCBiYWJ5bG9uVGV4dHVyZS52U2NhbGUgIT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHRleHR1cmVUcmFuc2Zvcm0uc2NhbGUgPSBbYmFieWxvblRleHR1cmUudVNjYWxlLCBiYWJ5bG9uVGV4dHVyZS52U2NhbGVdO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtSXNSZXF1aXJlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChiYWJ5bG9uVGV4dHVyZS53QW5nICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0dXJlVHJhbnNmb3JtLnJvdGF0aW9uID0gLWJhYnlsb25UZXh0dXJlLndBbmc7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1Jc1JlcXVpcmVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYmFieWxvblRleHR1cmUudVJvdGF0aW9uQ2VudGVyICE9PSAwIHx8IGJhYnlsb25UZXh0dXJlLnZSb3RhdGlvbkNlbnRlciAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHR1cmVUcmFuc2Zvcm0ub2Zmc2V0ID0gQWRqdXN0T2Zmc2V0Rm9yUm90YXRpb25DZW50ZXIoYmFieWxvblRleHR1cmUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoYmFieWxvblRleHR1cmUuY29vcmRpbmF0ZXNJbmRleCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGV4dHVyZVRyYW5zZm9ybS50ZXhDb29yZCA9IGJhYnlsb25UZXh0dXJlLmNvb3JkaW5hdGVzSW5kZXg7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1Jc1JlcXVpcmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCF0cmFuc2Zvcm1Jc1JlcXVpcmVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3dhc1VzZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAoIXRleHR1cmVJbmZvLmV4dGVuc2lvbnMpIHtcclxuICAgICAgICAgICAgICAgIHRleHR1cmVJbmZvLmV4dGVuc2lvbnMgPSB7fTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0ZXh0dXJlSW5mby5leHRlbnNpb25zW05BTUVdID0gdGV4dHVyZVRyYW5zZm9ybTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHByZUV4cG9ydFRleHR1cmVBc3luYyhjb250ZXh0OiBzdHJpbmcsIGJhYnlsb25UZXh0dXJlOiBUZXh0dXJlKTogUHJvbWlzZTxOdWxsYWJsZTxUZXh0dXJlPj4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNjZW5lID0gYmFieWxvblRleHR1cmUuZ2V0U2NlbmUoKTtcclxuICAgICAgICAgICAgaWYgKCFzY2VuZSkge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGAke2NvbnRleHR9OiBcInNjZW5lXCIgaXMgbm90IGRlZmluZWQgZm9yIEJhYnlsb24gdGV4dHVyZSAke2JhYnlsb25UZXh0dXJlLm5hbWV9IWApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICAgKiBUaGUgS0hSX3RleHR1cmVfdHJhbnNmb3JtIHNjaGVtYSBvbmx5IHN1cHBvcnRzIHcgcm90YXRpb24gYXJvdW5kIHRoZSBvcmlnaW4uXHJcbiAgICAgICAgICAgICAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYWluL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX3RleHR1cmVfdHJhbnNmb3JtI2dsdGYtc2NoZW1hLXVwZGF0ZXMuXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBpZiAoYmFieWxvblRleHR1cmUudUFuZyAhPT0gMCB8fCBiYWJ5bG9uVGV4dHVyZS52QW5nICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBUb29scy5XYXJuKGAke2NvbnRleHR9OiBUZXh0dXJlICR7YmFieWxvblRleHR1cmUubmFtZX0gd2l0aCByb3RhdGlvbiBpbiB0aGUgdSBvciB2IGF4aXMgaXMgbm90IHN1cHBvcnRlZCBpbiBnbFRGLmApO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYmFieWxvblRleHR1cmUud0FuZyAhPT0gMCAmJiAoYmFieWxvblRleHR1cmUudVJvdGF0aW9uQ2VudGVyICE9PSAwIHx8IGJhYnlsb25UZXh0dXJlLnZSb3RhdGlvbkNlbnRlciAhPT0gMCkpIHtcclxuICAgICAgICAgICAgICAgIFRvb2xzLldhcm4oYCR7Y29udGV4dH06IFRleHR1cmUgJHtiYWJ5bG9uVGV4dHVyZS5uYW1lfSB3aXRoIHJvdGF0aW9uIG5vdCBjZW50ZXJlZCBhdCB0aGUgb3JpZ2luIHdpbGwgYmUgZXhwb3J0ZWQgd2l0aCBhbiBhZGp1c3RlZCB0ZXh0dXJlIG9mZnNldC5gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXNvbHZlKGJhYnlsb25UZXh0dXJlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuR0xURkV4cG9ydGVyLlJlZ2lzdGVyRXh0ZW5zaW9uKE5BTUUsICgpID0+IG5ldyBLSFJfdGV4dHVyZV90cmFuc2Zvcm0oKSk7XHJcbiIsImV4cG9ydCAqIGZyb20gXCIuL0VYVF9tZXNoX2dwdV9pbnN0YW5jaW5nXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL0tIUl9saWdodHNfcHVuY3R1YWxcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vS0hSX21hdGVyaWFsc19hbmlzb3Ryb3B5XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL0tIUl9tYXRlcmlhbHNfY2xlYXJjb2F0XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL0tIUl9tYXRlcmlhbHNfZGlmZnVzZV90cmFuc21pc3Npb25cIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vS0hSX21hdGVyaWFsc19kaXNwZXJzaW9uXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL0tIUl9tYXRlcmlhbHNfZW1pc3NpdmVfc3RyZW5ndGhcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vS0hSX21hdGVyaWFsc19pb3JcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vS0hSX21hdGVyaWFsc19pcmlkZXNjZW5jZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9LSFJfbWF0ZXJpYWxzX3NoZWVuXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL0tIUl9tYXRlcmlhbHNfc3BlY3VsYXJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vS0hSX21hdGVyaWFsc190cmFuc21pc3Npb25cIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vS0hSX21hdGVyaWFsc191bmxpdFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9LSFJfbWF0ZXJpYWxzX3ZvbHVtZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9LSFJfdGV4dHVyZV90cmFuc2Zvcm1cIjtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgYmFieWxvbmpzL2F2YWlsYWJsZSAqL1xyXG5cclxuLyoqIEBpbnRlcm5hbCAqL1xyXG5leHBvcnQgY2xhc3MgRGF0YVdyaXRlciB7XHJcbiAgICBwcml2YXRlIF9kYXRhOiBVaW50OEFycmF5O1xyXG4gICAgcHJpdmF0ZSBfZGF0YVZpZXc6IERhdGFWaWV3O1xyXG4gICAgcHJpdmF0ZSBfYnl0ZU9mZnNldDogbnVtYmVyO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihieXRlTGVuZ3RoOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9kYXRhID0gbmV3IFVpbnQ4QXJyYXkoYnl0ZUxlbmd0aCk7XHJcbiAgICAgICAgdGhpcy5fZGF0YVZpZXcgPSBuZXcgRGF0YVZpZXcodGhpcy5fZGF0YS5idWZmZXIpO1xyXG4gICAgICAgIHRoaXMuX2J5dGVPZmZzZXQgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgYnl0ZU9mZnNldCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ieXRlT2Zmc2V0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRPdXRwdXREYXRhKCk6IFVpbnQ4QXJyYXkge1xyXG4gICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheSh0aGlzLl9kYXRhLmJ1ZmZlciwgMCwgdGhpcy5fYnl0ZU9mZnNldCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHdyaXRlVUludDgodmFsdWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2NoZWNrR3Jvd0J1ZmZlcigxKTtcclxuICAgICAgICB0aGlzLl9kYXRhVmlldy5zZXRVaW50OCh0aGlzLl9ieXRlT2Zmc2V0LCB2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5fYnl0ZU9mZnNldCsrO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB3cml0ZUludDgodmFsdWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2NoZWNrR3Jvd0J1ZmZlcigxKTtcclxuICAgICAgICB0aGlzLl9kYXRhVmlldy5zZXRJbnQ4KHRoaXMuX2J5dGVPZmZzZXQsIHZhbHVlKTtcclxuICAgICAgICB0aGlzLl9ieXRlT2Zmc2V0Kys7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHdyaXRlSW50MTYoZW50cnk6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2NoZWNrR3Jvd0J1ZmZlcigyKTtcclxuICAgICAgICB0aGlzLl9kYXRhVmlldy5zZXRJbnQxNih0aGlzLl9ieXRlT2Zmc2V0LCBlbnRyeSwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5fYnl0ZU9mZnNldCArPSAyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB3cml0ZVVJbnQxNih2YWx1ZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fY2hlY2tHcm93QnVmZmVyKDIpO1xyXG4gICAgICAgIHRoaXMuX2RhdGFWaWV3LnNldFVpbnQxNih0aGlzLl9ieXRlT2Zmc2V0LCB2YWx1ZSwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5fYnl0ZU9mZnNldCArPSAyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB3cml0ZVVJbnQzMihlbnRyeTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fY2hlY2tHcm93QnVmZmVyKDQpO1xyXG4gICAgICAgIHRoaXMuX2RhdGFWaWV3LnNldFVpbnQzMih0aGlzLl9ieXRlT2Zmc2V0LCBlbnRyeSwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5fYnl0ZU9mZnNldCArPSA0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB3cml0ZUZsb2F0MzIodmFsdWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2NoZWNrR3Jvd0J1ZmZlcig0KTtcclxuICAgICAgICB0aGlzLl9kYXRhVmlldy5zZXRGbG9hdDMyKHRoaXMuX2J5dGVPZmZzZXQsIHZhbHVlLCB0cnVlKTtcclxuICAgICAgICB0aGlzLl9ieXRlT2Zmc2V0ICs9IDQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHdyaXRlVWludDhBcnJheSh2YWx1ZTogVWludDhBcnJheSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2NoZWNrR3Jvd0J1ZmZlcih2YWx1ZS5ieXRlTGVuZ3RoKTtcclxuICAgICAgICB0aGlzLl9kYXRhLnNldCh2YWx1ZSwgdGhpcy5fYnl0ZU9mZnNldCk7XHJcbiAgICAgICAgdGhpcy5fYnl0ZU9mZnNldCArPSB2YWx1ZS5ieXRlTGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB3cml0ZVVpbnQxNkFycmF5KHZhbHVlOiBVaW50MTZBcnJheSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2NoZWNrR3Jvd0J1ZmZlcih2YWx1ZS5ieXRlTGVuZ3RoKTtcclxuICAgICAgICB0aGlzLl9kYXRhLnNldCh2YWx1ZSwgdGhpcy5fYnl0ZU9mZnNldCk7XHJcbiAgICAgICAgdGhpcy5fYnl0ZU9mZnNldCArPSB2YWx1ZS5ieXRlTGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NoZWNrR3Jvd0J1ZmZlcihieXRlTGVuZ3RoOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBuZXdCeXRlTGVuZ3RoID0gdGhpcy5ieXRlT2Zmc2V0ICsgYnl0ZUxlbmd0aDtcclxuICAgICAgICBpZiAobmV3Qnl0ZUxlbmd0aCA+IHRoaXMuX2RhdGEuYnl0ZUxlbmd0aCkge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdEYXRhID0gbmV3IFVpbnQ4QXJyYXkobmV3Qnl0ZUxlbmd0aCAqIDIpO1xyXG4gICAgICAgICAgICBuZXdEYXRhLnNldCh0aGlzLl9kYXRhKTtcclxuICAgICAgICAgICAgdGhpcy5fZGF0YSA9IG5ld0RhdGE7XHJcbiAgICAgICAgICAgIHRoaXMuX2RhdGFWaWV3ID0gbmV3IERhdGFWaWV3KHRoaXMuX2RhdGEuYnVmZmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHR5cGUgeyBJQW5pbWF0aW9uLCBJTm9kZSwgSUJ1ZmZlclZpZXcsIElBY2Nlc3NvciwgSUFuaW1hdGlvblNhbXBsZXIsIElBbmltYXRpb25DaGFubmVsIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBBbmltYXRpb25TYW1wbGVySW50ZXJwb2xhdGlvbiwgQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsIEFjY2Vzc29yVHlwZSwgQWNjZXNzb3JDb21wb25lbnRUeXBlIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgdHlwZSB7IE5vZGUgfSBmcm9tIFwiY29yZS9ub2RlXCI7XHJcbmltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xyXG5pbXBvcnQgeyBWZWN0b3IzLCBRdWF0ZXJuaW9uIH0gZnJvbSBcImNvcmUvTWF0aHMvbWF0aC52ZWN0b3JcIjtcclxuaW1wb3J0IHsgVG9vbHMgfSBmcm9tIFwiY29yZS9NaXNjL3Rvb2xzXCI7XHJcbmltcG9ydCB7IEFuaW1hdGlvbiB9IGZyb20gXCJjb3JlL0FuaW1hdGlvbnMvYW5pbWF0aW9uXCI7XHJcbmltcG9ydCB7IFRyYW5zZm9ybU5vZGUgfSBmcm9tIFwiY29yZS9NZXNoZXMvdHJhbnNmb3JtTm9kZVwiO1xyXG5pbXBvcnQgdHlwZSB7IFNjZW5lIH0gZnJvbSBcImNvcmUvc2NlbmVcIjtcclxuaW1wb3J0IHsgTW9ycGhUYXJnZXQgfSBmcm9tIFwiY29yZS9Nb3JwaC9tb3JwaFRhcmdldFwiO1xyXG5pbXBvcnQgeyBNZXNoIH0gZnJvbSBcImNvcmUvTWVzaGVzL21lc2hcIjtcclxuXHJcbmltcG9ydCB0eXBlIHsgSUFuaW1hdGlvbktleSB9IGZyb20gXCJjb3JlL0FuaW1hdGlvbnMvYW5pbWF0aW9uS2V5XCI7XHJcbmltcG9ydCB7IEFuaW1hdGlvbktleUludGVycG9sYXRpb24gfSBmcm9tIFwiY29yZS9BbmltYXRpb25zL2FuaW1hdGlvbktleVwiO1xyXG5cclxuaW1wb3J0IHsgQ2FtZXJhIH0gZnJvbSBcImNvcmUvQ2FtZXJhcy9jYW1lcmFcIjtcclxuaW1wb3J0IHsgTGlnaHQgfSBmcm9tIFwiY29yZS9MaWdodHMvbGlnaHRcIjtcclxuaW1wb3J0IHR5cGUgeyBEYXRhV3JpdGVyIH0gZnJvbSBcIi4vZGF0YVdyaXRlclwiO1xyXG5pbXBvcnQge1xyXG4gICAgQ3JlYXRlQWNjZXNzb3IsXHJcbiAgICBDcmVhdGVCdWZmZXJWaWV3LFxyXG4gICAgR2V0QWNjZXNzb3JFbGVtZW50Q291bnQsXHJcbiAgICBDb252ZXJ0VG9SaWdodEhhbmRlZFBvc2l0aW9uLFxyXG4gICAgQ29udmVydENhbWVyYVJvdGF0aW9uVG9HTFRGLFxyXG4gICAgQ29udmVydFRvUmlnaHRIYW5kZWRSb3RhdGlvbixcclxufSBmcm9tIFwiLi9nbFRGVXRpbGl0aWVzXCI7XHJcblxyXG4vKipcclxuICogQGludGVybmFsXHJcbiAqIEludGVyZmFjZSB0byBzdG9yZSBhbmltYXRpb24gZGF0YS5cclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGludGVyZmFjZSBfSUFuaW1hdGlvbkRhdGEge1xyXG4gICAgLyoqXHJcbiAgICAgKiBLZXlmcmFtZSBkYXRhLlxyXG4gICAgICovXHJcbiAgICBpbnB1dHM6IG51bWJlcltdO1xyXG4gICAgLyoqXHJcbiAgICAgKiBWYWx1ZSBkYXRhLlxyXG4gICAgICovXHJcbiAgICBvdXRwdXRzOiBudW1iZXJbXVtdO1xyXG4gICAgLyoqXHJcbiAgICAgKiBBbmltYXRpb24gaW50ZXJwb2xhdGlvbiBkYXRhLlxyXG4gICAgICovXHJcbiAgICBzYW1wbGVySW50ZXJwb2xhdGlvbjogQW5pbWF0aW9uU2FtcGxlckludGVycG9sYXRpb247XHJcbiAgICAvKipcclxuICAgICAqIE1pbmltdW0ga2V5ZnJhbWUgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIGlucHV0c01pbjogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBNYXhpbXVtIGtleWZyYW1lIHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBpbnB1dHNNYXg6IG51bWJlcjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgaW50ZXJmYWNlIF9JQW5pbWF0aW9uSW5mbyB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSB0YXJnZXQgY2hhbm5lbCBmb3IgdGhlIGFuaW1hdGlvblxyXG4gICAgICovXHJcbiAgICBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aDogQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGg7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBnbFRGIGFjY2Vzc29yIHR5cGUgZm9yIHRoZSBkYXRhLlxyXG4gICAgICovXHJcbiAgICBkYXRhQWNjZXNzb3JUeXBlOiBBY2Nlc3NvclR5cGUuVkVDMyB8IEFjY2Vzc29yVHlwZS5WRUM0IHwgQWNjZXNzb3JUeXBlLlNDQUxBUjtcclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIGlmIHF1YXRlcm5pb25zIHNob3VsZCBiZSB1c2VkLlxyXG4gICAgICovXHJcbiAgICB1c2VRdWF0ZXJuaW9uOiBib29sZWFuO1xyXG59XHJcblxyXG4vKipcclxuICogQGludGVybmFsXHJcbiAqIEVudW0gZm9yIGhhbmRsaW5nIGluIHRhbmdlbnQgYW5kIG91dCB0YW5nZW50LlxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5lbnVtIF9UYW5nZW50VHlwZSB7XHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGF0IGlucHV0IHRhbmdlbnRzIGFyZSB1c2VkLlxyXG4gICAgICovXHJcbiAgICBJTlRBTkdFTlQsXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGF0IG91dHB1dCB0YW5nZW50cyBhcmUgdXNlZC5cclxuICAgICAqL1xyXG4gICAgT1VUVEFOR0VOVCxcclxufVxyXG5cclxuLyoqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKiBVdGlsaXR5IGNsYXNzIGZvciBnZW5lcmF0aW5nIGdsVEYgYW5pbWF0aW9uIGRhdGEgZnJvbSBCYWJ5bG9uSlMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgX0dMVEZBbmltYXRpb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBEZXRlcm1pbmUgaWYgYSBub2RlIGlzIHRyYW5zZm9ybWFibGUgLSBpZSBoYXMgcHJvcGVydGllcyBpdCBzaG91bGQgYmUgcGFydCBvZiBhbmltYXRpb24gb2YgdHJhbnNmb3JtYXRpb24uXHJcbiAgICAgKiBAcGFyYW0gYmFieWxvbk5vZGUgdGhlIG5vZGUgdG8gdGVzdFxyXG4gICAgICogQHJldHVybnMgdHJ1ZSBpZiBjYW4gYmUgYW5pbWF0ZWQsIGZhbHNlIG90aGVyd2lzZS4gRmFsc2UgaWYgdGhlIHBhcmFtZXRlciBpcyBudWxsIG9yIHVuZGVmaW5lZC5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX0lzVHJhbnNmb3JtYWJsZShiYWJ5bG9uTm9kZTogTm9kZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBiYWJ5bG9uTm9kZSAmJiAoYmFieWxvbk5vZGUgaW5zdGFuY2VvZiBUcmFuc2Zvcm1Ob2RlIHx8IGJhYnlsb25Ob2RlIGluc3RhbmNlb2YgQ2FtZXJhIHx8IGJhYnlsb25Ob2RlIGluc3RhbmNlb2YgTGlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGlnbm9yZVxyXG4gICAgICpcclxuICAgICAqIENyZWF0ZXMgZ2xURiBjaGFubmVsIGFuaW1hdGlvbiBmcm9tIEJhYnlsb25KUyBhbmltYXRpb24uXHJcbiAgICAgKiBAcGFyYW0gYmFieWxvblRyYW5zZm9ybU5vZGUgLSBCYWJ5bG9uSlMgbWVzaC5cclxuICAgICAqIEBwYXJhbSBhbmltYXRpb24gLSBhbmltYXRpb24uXHJcbiAgICAgKiBAcGFyYW0gYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGggLSBUaGUgdGFyZ2V0IGFuaW1hdGlvbiBjaGFubmVsLlxyXG4gICAgICogQHBhcmFtIHVzZVF1YXRlcm5pb24gLSBTcGVjaWZpZXMgaWYgcXVhdGVybmlvbnMgYXJlIHVzZWQuXHJcbiAgICAgKiBAcmV0dXJucyBudWxsYWJsZSBJQW5pbWF0aW9uRGF0YVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIF9DcmVhdGVOb2RlQW5pbWF0aW9uKFxyXG4gICAgICAgIGJhYnlsb25UcmFuc2Zvcm1Ob2RlOiBOb2RlLFxyXG4gICAgICAgIGFuaW1hdGlvbjogQW5pbWF0aW9uLFxyXG4gICAgICAgIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoOiBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCxcclxuICAgICAgICB1c2VRdWF0ZXJuaW9uOiBib29sZWFuLFxyXG4gICAgICAgIGFuaW1hdGlvblNhbXBsZVJhdGU6IG51bWJlclxyXG4gICAgKTogTnVsbGFibGU8X0lBbmltYXRpb25EYXRhPiB7XHJcbiAgICAgICAgaWYgKHRoaXMuX0lzVHJhbnNmb3JtYWJsZShiYWJ5bG9uVHJhbnNmb3JtTm9kZSkpIHtcclxuICAgICAgICAgICAgY29uc3QgaW5wdXRzOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgICAgICAgICBjb25zdCBvdXRwdXRzOiBudW1iZXJbXVtdID0gW107XHJcbiAgICAgICAgICAgIGNvbnN0IGtleUZyYW1lcyA9IGFuaW1hdGlvbi5nZXRLZXlzKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1pbk1heEtleUZyYW1lcyA9IF9HTFRGQW5pbWF0aW9uLl9DYWxjdWxhdGVNaW5NYXhLZXlGcmFtZXMoa2V5RnJhbWVzKTtcclxuICAgICAgICAgICAgY29uc3QgaW50ZXJwb2xhdGlvbk9yQmFrZSA9IF9HTFRGQW5pbWF0aW9uLl9EZWR1Y2VJbnRlcnBvbGF0aW9uKGtleUZyYW1lcywgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsIHVzZVF1YXRlcm5pb24pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaW50ZXJwb2xhdGlvbiA9IGludGVycG9sYXRpb25PckJha2UuaW50ZXJwb2xhdGlvblR5cGU7XHJcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZEJha2VBbmltYXRpb24gPSBpbnRlcnBvbGF0aW9uT3JCYWtlLnNob3VsZEJha2VBbmltYXRpb247XHJcblxyXG4gICAgICAgICAgICBpZiAoc2hvdWxkQmFrZUFuaW1hdGlvbikge1xyXG4gICAgICAgICAgICAgICAgX0dMVEZBbmltYXRpb24uX0NyZWF0ZUJha2VkQW5pbWF0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgIGJhYnlsb25UcmFuc2Zvcm1Ob2RlLFxyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCxcclxuICAgICAgICAgICAgICAgICAgICBtaW5NYXhLZXlGcmFtZXMubWluLFxyXG4gICAgICAgICAgICAgICAgICAgIG1pbk1heEtleUZyYW1lcy5tYXgsXHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLmZyYW1lUGVyU2Vjb25kLFxyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvblNhbXBsZVJhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRzLFxyXG4gICAgICAgICAgICAgICAgICAgIG91dHB1dHMsXHJcbiAgICAgICAgICAgICAgICAgICAgbWluTWF4S2V5RnJhbWVzLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZVF1YXRlcm5pb25cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW50ZXJwb2xhdGlvbiA9PT0gQW5pbWF0aW9uU2FtcGxlckludGVycG9sYXRpb24uTElORUFSIHx8IGludGVycG9sYXRpb24gPT09IEFuaW1hdGlvblNhbXBsZXJJbnRlcnBvbGF0aW9uLlNURVApIHtcclxuICAgICAgICAgICAgICAgICAgICBfR0xURkFuaW1hdGlvbi5fQ3JlYXRlTGluZWFyT3JTdGVwQW5pbWF0aW9uKGJhYnlsb25UcmFuc2Zvcm1Ob2RlLCBhbmltYXRpb24sIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLCBpbnB1dHMsIG91dHB1dHMsIHVzZVF1YXRlcm5pb24pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpbnRlcnBvbGF0aW9uID09PSBBbmltYXRpb25TYW1wbGVySW50ZXJwb2xhdGlvbi5DVUJJQ1NQTElORSkge1xyXG4gICAgICAgICAgICAgICAgICAgIF9HTFRGQW5pbWF0aW9uLl9DcmVhdGVDdWJpY1NwbGluZUFuaW1hdGlvbihiYWJ5bG9uVHJhbnNmb3JtTm9kZSwgYW5pbWF0aW9uLCBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCwgaW5wdXRzLCBvdXRwdXRzLCB1c2VRdWF0ZXJuaW9uKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX0dMVEZBbmltYXRpb24uX0NyZWF0ZUJha2VkQW5pbWF0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uVHJhbnNmb3JtTm9kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluTWF4S2V5RnJhbWVzLm1pbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluTWF4S2V5RnJhbWVzLm1heCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLmZyYW1lUGVyU2Vjb25kLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25TYW1wbGVSYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbk1heEtleUZyYW1lcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlUXVhdGVybmlvblxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChpbnB1dHMubGVuZ3RoICYmIG91dHB1dHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQ6IF9JQW5pbWF0aW9uRGF0YSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dHM6IGlucHV0cyxcclxuICAgICAgICAgICAgICAgICAgICBvdXRwdXRzOiBvdXRwdXRzLFxyXG4gICAgICAgICAgICAgICAgICAgIHNhbXBsZXJJbnRlcnBvbGF0aW9uOiBpbnRlcnBvbGF0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0c01pbjogc2hvdWxkQmFrZUFuaW1hdGlvbiA/IG1pbk1heEtleUZyYW1lcy5taW4gOiBUb29scy5GbG9hdFJvdW5kKG1pbk1heEtleUZyYW1lcy5taW4gLyBhbmltYXRpb24uZnJhbWVQZXJTZWNvbmQpLFxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0c01heDogc2hvdWxkQmFrZUFuaW1hdGlvbiA/IG1pbk1heEtleUZyYW1lcy5tYXggOiBUb29scy5GbG9hdFJvdW5kKG1pbk1heEtleUZyYW1lcy5tYXggLyBhbmltYXRpb24uZnJhbWVQZXJTZWNvbmQpLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfRGVkdWNlQW5pbWF0aW9uSW5mbyhhbmltYXRpb246IEFuaW1hdGlvbik6IE51bGxhYmxlPF9JQW5pbWF0aW9uSW5mbz4ge1xyXG4gICAgICAgIGxldCBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aDogTnVsbGFibGU8QW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGg+ID0gbnVsbDtcclxuICAgICAgICBsZXQgZGF0YUFjY2Vzc29yVHlwZSA9IEFjY2Vzc29yVHlwZS5WRUMzO1xyXG4gICAgICAgIGxldCB1c2VRdWF0ZXJuaW9uOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAgICAgY29uc3QgcHJvcGVydHkgPSBhbmltYXRpb24udGFyZ2V0UHJvcGVydHkuc3BsaXQoXCIuXCIpO1xyXG4gICAgICAgIHN3aXRjaCAocHJvcGVydHlbMF0pIHtcclxuICAgICAgICAgICAgY2FzZSBcInNjYWxpbmdcIjoge1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGggPSBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aC5TQ0FMRTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJwb3NpdGlvblwiOiB7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCA9IEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLlRSQU5TTEFUSU9OO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcInJvdGF0aW9uXCI6IHtcclxuICAgICAgICAgICAgICAgIGRhdGFBY2Nlc3NvclR5cGUgPSBBY2Nlc3NvclR5cGUuVkVDNDtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoID0gQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGguUk9UQVRJT047XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwicm90YXRpb25RdWF0ZXJuaW9uXCI6IHtcclxuICAgICAgICAgICAgICAgIGRhdGFBY2Nlc3NvclR5cGUgPSBBY2Nlc3NvclR5cGUuVkVDNDtcclxuICAgICAgICAgICAgICAgIHVzZVF1YXRlcm5pb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGggPSBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aC5ST1RBVElPTjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJpbmZsdWVuY2VcIjoge1xyXG4gICAgICAgICAgICAgICAgZGF0YUFjY2Vzc29yVHlwZSA9IEFjY2Vzc29yVHlwZS5TQ0FMQVI7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCA9IEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLldFSUdIVFM7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgICAgICBUb29scy5FcnJvcihgVW5zdXBwb3J0ZWQgYW5pbWF0YWJsZSBwcm9wZXJ0eSAke3Byb3BlcnR5WzBdfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4geyBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aDogYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsIGRhdGFBY2Nlc3NvclR5cGU6IGRhdGFBY2Nlc3NvclR5cGUsIHVzZVF1YXRlcm5pb246IHVzZVF1YXRlcm5pb24gfTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBUb29scy5FcnJvcihcImFuaW1hdGlvbiBjaGFubmVsIHRhcmdldCBwYXRoIGFuZCBkYXRhIGFjY2Vzc29yIHR5cGUgY291bGQgYmUgZGVkdWNlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaWdub3JlXHJcbiAgICAgKiBDcmVhdGUgbm9kZSBhbmltYXRpb25zIGZyb20gdGhlIHRyYW5zZm9ybSBub2RlIGFuaW1hdGlvbnNcclxuICAgICAqIEBwYXJhbSBiYWJ5bG9uTm9kZVxyXG4gICAgICogQHBhcmFtIHJ1bnRpbWVHTFRGQW5pbWF0aW9uXHJcbiAgICAgKiBAcGFyYW0gaWRsZUdMVEZBbmltYXRpb25zXHJcbiAgICAgKiBAcGFyYW0gbm9kZU1hcFxyXG4gICAgICogQHBhcmFtIG5vZGVzXHJcbiAgICAgKiBAcGFyYW0gYmluYXJ5V3JpdGVyXHJcbiAgICAgKiBAcGFyYW0gYnVmZmVyVmlld3NcclxuICAgICAqIEBwYXJhbSBhY2Nlc3NvcnNcclxuICAgICAqIEBwYXJhbSBhbmltYXRpb25TYW1wbGVSYXRlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgX0NyZWF0ZU5vZGVBbmltYXRpb25Gcm9tTm9kZUFuaW1hdGlvbnMoXHJcbiAgICAgICAgYmFieWxvbk5vZGU6IE5vZGUsXHJcbiAgICAgICAgcnVudGltZUdMVEZBbmltYXRpb246IElBbmltYXRpb24sXHJcbiAgICAgICAgaWRsZUdMVEZBbmltYXRpb25zOiBJQW5pbWF0aW9uW10sXHJcbiAgICAgICAgbm9kZU1hcDogTWFwPE5vZGUsIG51bWJlcj4sXHJcbiAgICAgICAgbm9kZXM6IElOb2RlW10sXHJcbiAgICAgICAgYmluYXJ5V3JpdGVyOiBEYXRhV3JpdGVyLFxyXG4gICAgICAgIGJ1ZmZlclZpZXdzOiBJQnVmZmVyVmlld1tdLFxyXG4gICAgICAgIGFjY2Vzc29yczogSUFjY2Vzc29yW10sXHJcbiAgICAgICAgYW5pbWF0aW9uU2FtcGxlUmF0ZTogbnVtYmVyLFxyXG4gICAgICAgIHVzZVJpZ2h0SGFuZGVkOiBib29sZWFuLFxyXG4gICAgICAgIHNob3VsZEV4cG9ydEFuaW1hdGlvbj86IChhbmltYXRpb246IEFuaW1hdGlvbikgPT4gYm9vbGVhblxyXG4gICAgKSB7XHJcbiAgICAgICAgbGV0IGdsVEZBbmltYXRpb246IElBbmltYXRpb247XHJcbiAgICAgICAgaWYgKF9HTFRGQW5pbWF0aW9uLl9Jc1RyYW5zZm9ybWFibGUoYmFieWxvbk5vZGUpKSB7XHJcbiAgICAgICAgICAgIGlmIChiYWJ5bG9uTm9kZS5hbmltYXRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGFuaW1hdGlvbiBvZiBiYWJ5bG9uTm9kZS5hbmltYXRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNob3VsZEV4cG9ydEFuaW1hdGlvbiAmJiAhc2hvdWxkRXhwb3J0QW5pbWF0aW9uKGFuaW1hdGlvbikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFuaW1hdGlvbkluZm8gPSBfR0xURkFuaW1hdGlvbi5fRGVkdWNlQW5pbWF0aW9uSW5mbyhhbmltYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhbmltYXRpb25JbmZvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdsVEZBbmltYXRpb24gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBhbmltYXRpb24ubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbXBsZXJzOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5uZWxzOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX0dMVEZBbmltYXRpb24uX0FkZEFuaW1hdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2FuaW1hdGlvbi5uYW1lfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24uaGFzUnVubmluZ1J1bnRpbWVBbmltYXRpb25zID8gcnVudGltZUdMVEZBbmltYXRpb24gOiBnbFRGQW5pbWF0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFieWxvbk5vZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25JbmZvLmRhdGFBY2Nlc3NvclR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25JbmZvLmFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZU1hcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpbmFyeVdyaXRlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlclZpZXdzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXNzb3JzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uSW5mby51c2VRdWF0ZXJuaW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uU2FtcGxlUmF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZVJpZ2h0SGFuZGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnbFRGQW5pbWF0aW9uLnNhbXBsZXJzLmxlbmd0aCAmJiBnbFRGQW5pbWF0aW9uLmNoYW5uZWxzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRsZUdMVEZBbmltYXRpb25zLnB1c2goZ2xURkFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaWdub3JlXHJcbiAgICAgKiBDcmVhdGUgaW5kaXZpZHVhbCBtb3JwaCBhbmltYXRpb25zIGZyb20gdGhlIG1lc2gncyBtb3JwaCB0YXJnZXQgYW5pbWF0aW9uIHRyYWNrc1xyXG4gICAgICogQHBhcmFtIGJhYnlsb25Ob2RlXHJcbiAgICAgKiBAcGFyYW0gcnVudGltZUdMVEZBbmltYXRpb25cclxuICAgICAqIEBwYXJhbSBpZGxlR0xURkFuaW1hdGlvbnNcclxuICAgICAqIEBwYXJhbSBub2RlTWFwXHJcbiAgICAgKiBAcGFyYW0gbm9kZXNcclxuICAgICAqIEBwYXJhbSBiaW5hcnlXcml0ZXJcclxuICAgICAqIEBwYXJhbSBidWZmZXJWaWV3c1xyXG4gICAgICogQHBhcmFtIGFjY2Vzc29yc1xyXG4gICAgICogQHBhcmFtIGFuaW1hdGlvblNhbXBsZVJhdGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBfQ3JlYXRlTW9ycGhUYXJnZXRBbmltYXRpb25Gcm9tTW9ycGhUYXJnZXRBbmltYXRpb25zKFxyXG4gICAgICAgIGJhYnlsb25Ob2RlOiBOb2RlLFxyXG4gICAgICAgIHJ1bnRpbWVHTFRGQW5pbWF0aW9uOiBJQW5pbWF0aW9uLFxyXG4gICAgICAgIGlkbGVHTFRGQW5pbWF0aW9uczogSUFuaW1hdGlvbltdLFxyXG4gICAgICAgIG5vZGVNYXA6IE1hcDxOb2RlLCBudW1iZXI+LFxyXG4gICAgICAgIG5vZGVzOiBJTm9kZVtdLFxyXG4gICAgICAgIGJpbmFyeVdyaXRlcjogRGF0YVdyaXRlcixcclxuICAgICAgICBidWZmZXJWaWV3czogSUJ1ZmZlclZpZXdbXSxcclxuICAgICAgICBhY2Nlc3NvcnM6IElBY2Nlc3NvcltdLFxyXG4gICAgICAgIGFuaW1hdGlvblNhbXBsZVJhdGU6IG51bWJlcixcclxuICAgICAgICB1c2VSaWdodEhhbmRlZDogYm9vbGVhbixcclxuICAgICAgICBzaG91bGRFeHBvcnRBbmltYXRpb24/OiAoYW5pbWF0aW9uOiBBbmltYXRpb24pID0+IGJvb2xlYW5cclxuICAgICkge1xyXG4gICAgICAgIGxldCBnbFRGQW5pbWF0aW9uOiBJQW5pbWF0aW9uO1xyXG4gICAgICAgIGlmIChiYWJ5bG9uTm9kZSBpbnN0YW5jZW9mIE1lc2gpIHtcclxuICAgICAgICAgICAgY29uc3QgbW9ycGhUYXJnZXRNYW5hZ2VyID0gYmFieWxvbk5vZGUubW9ycGhUYXJnZXRNYW5hZ2VyO1xyXG4gICAgICAgICAgICBpZiAobW9ycGhUYXJnZXRNYW5hZ2VyKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vcnBoVGFyZ2V0TWFuYWdlci5udW1UYXJnZXRzOyArK2kpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtb3JwaFRhcmdldCA9IG1vcnBoVGFyZ2V0TWFuYWdlci5nZXRUYXJnZXQoaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBhbmltYXRpb24gb2YgbW9ycGhUYXJnZXQuYW5pbWF0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hvdWxkRXhwb3J0QW5pbWF0aW9uICYmICFzaG91bGRFeHBvcnRBbmltYXRpb24oYW5pbWF0aW9uKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tYmluZWRBbmltYXRpb24gPSBuZXcgQW5pbWF0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7YW5pbWF0aW9uLm5hbWV9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaW5mbHVlbmNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24uZnJhbWVQZXJTZWNvbmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24uZGF0YVR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24ubG9vcE1vZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24uZW5hYmxlQmxlbmRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tYmluZWRBbmltYXRpb25LZXlzOiBJQW5pbWF0aW9uS2V5W10gPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYW5pbWF0aW9uS2V5cyA9IGFuaW1hdGlvbi5nZXRLZXlzKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFuaW1hdGlvbktleXMubGVuZ3RoOyArK2opIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFuaW1hdGlvbktleSA9IGFuaW1hdGlvbktleXNbal07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IG1vcnBoVGFyZ2V0TWFuYWdlci5udW1UYXJnZXRzOyArK2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoayA9PSBpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbWJpbmVkQW5pbWF0aW9uS2V5cy5wdXNoKGFuaW1hdGlvbktleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tYmluZWRBbmltYXRpb25LZXlzLnB1c2goeyBmcmFtZTogYW5pbWF0aW9uS2V5LmZyYW1lLCB2YWx1ZTogMCB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tYmluZWRBbmltYXRpb24uc2V0S2V5cyhjb21iaW5lZEFuaW1hdGlvbktleXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhbmltYXRpb25JbmZvID0gX0dMVEZBbmltYXRpb24uX0RlZHVjZUFuaW1hdGlvbkluZm8oY29tYmluZWRBbmltYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYW5pbWF0aW9uSW5mbykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xURkFuaW1hdGlvbiA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBjb21iaW5lZEFuaW1hdGlvbi5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbXBsZXJzOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFubmVsczogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX0dMVEZBbmltYXRpb24uX0FkZEFuaW1hdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24ubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24uaGFzUnVubmluZ1J1bnRpbWVBbmltYXRpb25zID8gcnVudGltZUdMVEZBbmltYXRpb24gOiBnbFRGQW5pbWF0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhYnlsb25Ob2RlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbWJpbmVkQW5pbWF0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkluZm8uZGF0YUFjY2Vzc29yVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25JbmZvLmFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVNYXAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmluYXJ5V3JpdGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlclZpZXdzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY2Vzc29ycyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25JbmZvLnVzZVF1YXRlcm5pb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uU2FtcGxlUmF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VSaWdodEhhbmRlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3JwaFRhcmdldE1hbmFnZXIubnVtVGFyZ2V0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnbFRGQW5pbWF0aW9uLnNhbXBsZXJzLmxlbmd0aCAmJiBnbFRGQW5pbWF0aW9uLmNoYW5uZWxzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkbGVHTFRGQW5pbWF0aW9ucy5wdXNoKGdsVEZBbmltYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKiBDcmVhdGUgbm9kZSBhbmQgbW9ycGggYW5pbWF0aW9ucyBmcm9tIHRoZSBhbmltYXRpb24gZ3JvdXBzXHJcbiAgICAgKiBAcGFyYW0gYmFieWxvblNjZW5lXHJcbiAgICAgKiBAcGFyYW0gZ2xURkFuaW1hdGlvbnNcclxuICAgICAqIEBwYXJhbSBub2RlTWFwXHJcbiAgICAgKiBAcGFyYW0gbm9kZXNcclxuICAgICAqIEBwYXJhbSBiaW5hcnlXcml0ZXJcclxuICAgICAqIEBwYXJhbSBidWZmZXJWaWV3c1xyXG4gICAgICogQHBhcmFtIGFjY2Vzc29yc1xyXG4gICAgICogQHBhcmFtIGFuaW1hdGlvblNhbXBsZVJhdGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBfQ3JlYXRlTm9kZUFuZE1vcnBoQW5pbWF0aW9uRnJvbUFuaW1hdGlvbkdyb3VwcyhcclxuICAgICAgICBiYWJ5bG9uU2NlbmU6IFNjZW5lLFxyXG4gICAgICAgIGdsVEZBbmltYXRpb25zOiBJQW5pbWF0aW9uW10sXHJcbiAgICAgICAgbm9kZU1hcDogTWFwPE5vZGUsIG51bWJlcj4sXHJcbiAgICAgICAgYmluYXJ5V3JpdGVyOiBEYXRhV3JpdGVyLFxyXG4gICAgICAgIGJ1ZmZlclZpZXdzOiBJQnVmZmVyVmlld1tdLFxyXG4gICAgICAgIGFjY2Vzc29yczogSUFjY2Vzc29yW10sXHJcbiAgICAgICAgYW5pbWF0aW9uU2FtcGxlUmF0ZTogbnVtYmVyLFxyXG4gICAgICAgIGxlZnRIYW5kZWROb2RlczogU2V0PE5vZGU+LFxyXG4gICAgICAgIHNob3VsZEV4cG9ydEFuaW1hdGlvbj86IChhbmltYXRpb246IEFuaW1hdGlvbikgPT4gYm9vbGVhblxyXG4gICAgKSB7XHJcbiAgICAgICAgbGV0IGdsVEZBbmltYXRpb246IElBbmltYXRpb247XHJcbiAgICAgICAgaWYgKGJhYnlsb25TY2VuZS5hbmltYXRpb25Hcm91cHMpIHtcclxuICAgICAgICAgICAgY29uc3QgYW5pbWF0aW9uR3JvdXBzID0gYmFieWxvblNjZW5lLmFuaW1hdGlvbkdyb3VwcztcclxuICAgICAgICAgICAgZm9yIChjb25zdCBhbmltYXRpb25Hcm91cCBvZiBhbmltYXRpb25Hcm91cHMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1vcnBoQW5pbWF0aW9uczogTWFwPE1lc2gsIE1hcDxNb3JwaFRhcmdldCwgQW5pbWF0aW9uPj4gPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzYW1wbGVBbmltYXRpb25zOiBNYXA8TWVzaCwgQW5pbWF0aW9uPiA9IG5ldyBNYXAoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1vcnBoQW5pbWF0aW9uTWVzaGVzOiBTZXQ8TWVzaD4gPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhbmltYXRpb25Hcm91cEZyYW1lRGlmZiA9IGFuaW1hdGlvbkdyb3VwLnRvIC0gYW5pbWF0aW9uR3JvdXAuZnJvbTtcclxuICAgICAgICAgICAgICAgIGdsVEZBbmltYXRpb24gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogYW5pbWF0aW9uR3JvdXAubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBjaGFubmVsczogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgc2FtcGxlcnM6IFtdLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYW5pbWF0aW9uR3JvdXAudGFyZ2V0ZWRBbmltYXRpb25zLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0QW5pbWF0aW9uID0gYW5pbWF0aW9uR3JvdXAudGFyZ2V0ZWRBbmltYXRpb25zW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IHRhcmdldEFuaW1hdGlvbi50YXJnZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYW5pbWF0aW9uID0gdGFyZ2V0QW5pbWF0aW9uLmFuaW1hdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2hvdWxkRXhwb3J0QW5pbWF0aW9uICYmICFzaG91bGRFeHBvcnRBbmltYXRpb24oYW5pbWF0aW9uKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnZlcnRUb1JpZ2h0SGFuZGVkID0gbGVmdEhhbmRlZE5vZGVzLmhhcyh0YXJnZXQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fSXNUcmFuc2Zvcm1hYmxlKHRhcmdldCkgfHwgKHRhcmdldC5sZW5ndGggPT09IDEgJiYgdGhpcy5fSXNUcmFuc2Zvcm1hYmxlKHRhcmdldFswXSkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFuaW1hdGlvbkluZm8gPSBfR0xURkFuaW1hdGlvbi5fRGVkdWNlQW5pbWF0aW9uSW5mbyh0YXJnZXRBbmltYXRpb24uYW5pbWF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFuaW1hdGlvbkluZm8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhYnlsb25UcmFuc2Zvcm1Ob2RlID0gdGhpcy5fSXNUcmFuc2Zvcm1hYmxlKHRhcmdldCkgPyB0YXJnZXQgOiB0aGlzLl9Jc1RyYW5zZm9ybWFibGUodGFyZ2V0WzBdKSA/IHRhcmdldFswXSA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmFieWxvblRyYW5zZm9ybU5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfR0xURkFuaW1hdGlvbi5fQWRkQW5pbWF0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHthbmltYXRpb24ubmFtZX1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbFRGQW5pbWF0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uVHJhbnNmb3JtTm9kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25JbmZvLmRhdGFBY2Nlc3NvclR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkluZm8uYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVNYXAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpbmFyeVdyaXRlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyVmlld3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY2Vzc29ycyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uSW5mby51c2VRdWF0ZXJuaW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25TYW1wbGVSYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb252ZXJ0VG9SaWdodEhhbmRlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldCBpbnN0YW5jZW9mIE1vcnBoVGFyZ2V0IHx8ICh0YXJnZXQubGVuZ3RoID09PSAxICYmIHRhcmdldFswXSBpbnN0YW5jZW9mIE1vcnBoVGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhbmltYXRpb25JbmZvID0gX0dMVEZBbmltYXRpb24uX0RlZHVjZUFuaW1hdGlvbkluZm8odGFyZ2V0QW5pbWF0aW9uLmFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbmltYXRpb25JbmZvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBiYWJ5bG9uTW9ycGhUYXJnZXQgPSB0YXJnZXQgaW5zdGFuY2VvZiBNb3JwaFRhcmdldCA/ICh0YXJnZXQgYXMgTW9ycGhUYXJnZXQpIDogKHRhcmdldFswXSBhcyBNb3JwaFRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmFieWxvbk1vcnBoVGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmFieWxvbk1vcnBoVGFyZ2V0TWFuYWdlciA9IGJhYnlsb25TY2VuZS5tb3JwaFRhcmdldE1hbmFnZXJzLmZpbmQoKG1vcnBoVGFyZ2V0TWFuYWdlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1vcnBoVGFyZ2V0TWFuYWdlci5udW1UYXJnZXRzOyArK2opIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb3JwaFRhcmdldE1hbmFnZXIuZ2V0VGFyZ2V0KGopID09PSBiYWJ5bG9uTW9ycGhUYXJnZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJhYnlsb25Nb3JwaFRhcmdldE1hbmFnZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmFieWxvbk1lc2ggPSBiYWJ5bG9uU2NlbmUubWVzaGVzLmZpbmQoKG1lc2gpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAobWVzaCBhcyBNZXNoKS5tb3JwaFRhcmdldE1hbmFnZXIgPT09IGJhYnlsb25Nb3JwaFRhcmdldE1hbmFnZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pIGFzIE1lc2g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiYWJ5bG9uTWVzaCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFtb3JwaEFuaW1hdGlvbnMuaGFzKGJhYnlsb25NZXNoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vcnBoQW5pbWF0aW9ucy5zZXQoYmFieWxvbk1lc2gsIG5ldyBNYXAoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3JwaEFuaW1hdGlvbnMuZ2V0KGJhYnlsb25NZXNoKT8uc2V0KGJhYnlsb25Nb3JwaFRhcmdldCwgYW5pbWF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vcnBoQW5pbWF0aW9uTWVzaGVzLmFkZChiYWJ5bG9uTWVzaCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYW1wbGVBbmltYXRpb25zLnNldChiYWJ5bG9uTWVzaCwgYW5pbWF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgaXMgdGhlIHBsYWNlIGZvciB0aGUgS0hSX2FuaW1hdGlvbl9wb2ludGVyLlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG1vcnBoQW5pbWF0aW9uTWVzaGVzLmZvckVhY2goKG1lc2gpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtb3JwaFRhcmdldE1hbmFnZXIgPSBtZXNoLm1vcnBoVGFyZ2V0TWFuYWdlciE7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbWJpbmVkQW5pbWF0aW9uR3JvdXA6IE51bGxhYmxlPEFuaW1hdGlvbj4gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFuaW1hdGlvbktleXM6IElBbmltYXRpb25LZXlbXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNhbXBsZUFuaW1hdGlvbiA9IHNhbXBsZUFuaW1hdGlvbnMuZ2V0KG1lc2gpITtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzYW1wbGVBbmltYXRpb25LZXlzID0gc2FtcGxlQW5pbWF0aW9uLmdldEtleXMoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBudW1BbmltYXRpb25LZXlzID0gc2FtcGxlQW5pbWF0aW9uS2V5cy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICAgICAgICAgICAgRHVlIHRvIGhvdyBnbFRGIGV4cGVjdHMgbW9ycGggdGFyZ2V0IGFuaW1hdGlvbiBkYXRhIHRvIGJlIGZvcm1hdHRlZCwgd2UgbmVlZCB0byByZWFycmFuZ2UgdGhlIGluZGl2aWR1YWwgbW9ycGggdGFyZ2V0IGFuaW1hdGlvbiB0cmFja3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2ggdGhhdCB3ZSBoYXZlIGEgc2luZ2xlIGFuaW1hdGlvbiwgd2hlcmUgYSBnaXZlbiBrZXlmcmFtZSBpbnB1dCB2YWx1ZSBoYXMgc3VjY2Vzc2l2ZSBvdXRwdXQgdmFsdWVzIGZvciBlYWNoIG1vcnBoIHRhcmdldCBiZWxvbmdpbmcgdG8gdGhlIG1hbmFnZXIuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL3NwZWNpZmljYXRpb24vMi4wI2FuaW1hdGlvbnNcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFdlIGRvIHRoaXMgdmlhIGNvbnN0cnVjdGluZyBhIG5ldyBBbmltYXRpb24gdHJhY2ssIGFuZCBpbnRlcmxlYXZpbmcgdGhlIGZyYW1lcyBvZiBlYWNoIG1vcnBoIHRhcmdldCBhbmltYXRpb24gdHJhY2sgaW4gdGhlIGN1cnJlbnQgQW5pbWF0aW9uIEdyb3VwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFdlIHJldXNlIHRoZSBCYWJ5bG9uIEFuaW1hdGlvbiBkYXRhIHN0cnVjdHVyZSBmb3IgZWFzZSBvZiBoYW5kbGluZyBleHBvcnQgb2YgY3ViaWMgc3BsaW5lIGFuaW1hdGlvbiBrZXlzLCBhbmQgdG8gcmV1c2UgdGhlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nIF9HTFRGQW5pbWF0aW9uLkFkZEFuaW1hdGlvbiBjb2RlcGF0aCB3aXRoIG1pbmltYWwgbW9kaWZpY2F0aW9uLCBob3dldmVyIHRoZSBjb25zdHJ1Y3RlZCBCYWJ5bG9uIEFuaW1hdGlvbiBpcyBOT1QgaW50ZW5kZWQgZm9yIHVzZSBpbi1lbmdpbmUuXHJcbiAgICAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUFuaW1hdGlvbktleXM7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1vcnBoVGFyZ2V0TWFuYWdlci5udW1UYXJnZXRzOyArK2opIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vcnBoVGFyZ2V0ID0gbW9ycGhUYXJnZXRNYW5hZ2VyLmdldFRhcmdldChqKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFuaW1hdGlvbnNCeU1vcnBoVGFyZ2V0ID0gbW9ycGhBbmltYXRpb25zLmdldChtZXNoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbmltYXRpb25zQnlNb3JwaFRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vcnBoVGFyZ2V0QW5pbWF0aW9uID0gYW5pbWF0aW9uc0J5TW9ycGhUYXJnZXQuZ2V0KG1vcnBoVGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9ycGhUYXJnZXRBbmltYXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjb21iaW5lZEFuaW1hdGlvbkdyb3VwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21iaW5lZEFuaW1hdGlvbkdyb3VwID0gbmV3IEFuaW1hdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHthbmltYXRpb25Hcm91cC5uYW1lfV8ke21lc2gubmFtZX1fTW9ycGhXZWlnaHRBbmltYXRpb25gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaW5mbHVlbmNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9ycGhUYXJnZXRBbmltYXRpb24uZnJhbWVQZXJTZWNvbmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQW5pbWF0aW9uLkFOSU1BVElPTlRZUEVfRkxPQVQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9ycGhUYXJnZXRBbmltYXRpb24ubG9vcE1vZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9ycGhUYXJnZXRBbmltYXRpb24uZW5hYmxlQmxlbmRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uS2V5cy5wdXNoKG1vcnBoVGFyZ2V0QW5pbWF0aW9uLmdldEtleXMoKVtpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uS2V5cy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lOiBhbmltYXRpb25Hcm91cC5mcm9tICsgKGFuaW1hdGlvbkdyb3VwRnJhbWVEaWZmIC8gbnVtQW5pbWF0aW9uS2V5cykgKiBpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG1vcnBoVGFyZ2V0LmluZmx1ZW5jZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluVGFuZ2VudDogc2FtcGxlQW5pbWF0aW9uS2V5c1swXS5pblRhbmdlbnQgPyAwIDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0VGFuZ2VudDogc2FtcGxlQW5pbWF0aW9uS2V5c1swXS5vdXRUYW5nZW50ID8gMCA6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbWJpbmVkQW5pbWF0aW9uR3JvdXAhLnNldEtleXMoYW5pbWF0aW9uS2V5cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYW5pbWF0aW9uSW5mbyA9IF9HTFRGQW5pbWF0aW9uLl9EZWR1Y2VBbmltYXRpb25JbmZvKGNvbWJpbmVkQW5pbWF0aW9uR3JvdXAhKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYW5pbWF0aW9uSW5mbykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfR0xURkFuaW1hdGlvbi5fQWRkQW5pbWF0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7YW5pbWF0aW9uR3JvdXAubmFtZX1fJHttZXNoLm5hbWV9X01vcnBoV2VpZ2h0QW5pbWF0aW9uYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsVEZBbmltYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tYmluZWRBbmltYXRpb25Hcm91cCEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25JbmZvLmRhdGFBY2Nlc3NvclR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25JbmZvLmFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZU1hcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpbmFyeVdyaXRlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlclZpZXdzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXNzb3JzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uSW5mby51c2VRdWF0ZXJuaW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uU2FtcGxlUmF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9ycGhUYXJnZXRNYW5hZ2VyPy5udW1UYXJnZXRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZ2xURkFuaW1hdGlvbi5jaGFubmVscy5sZW5ndGggJiYgZ2xURkFuaW1hdGlvbi5zYW1wbGVycy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBnbFRGQW5pbWF0aW9ucy5wdXNoKGdsVEZBbmltYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9BZGRBbmltYXRpb24oXHJcbiAgICAgICAgbmFtZTogc3RyaW5nLFxyXG4gICAgICAgIGdsVEZBbmltYXRpb246IElBbmltYXRpb24sXHJcbiAgICAgICAgYmFieWxvblRyYW5zZm9ybU5vZGU6IE5vZGUsXHJcbiAgICAgICAgYW5pbWF0aW9uOiBBbmltYXRpb24sXHJcbiAgICAgICAgZGF0YUFjY2Vzc29yVHlwZTogQWNjZXNzb3JUeXBlLFxyXG4gICAgICAgIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoOiBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCxcclxuICAgICAgICBub2RlTWFwOiBNYXA8Tm9kZSwgbnVtYmVyPixcclxuICAgICAgICBiaW5hcnlXcml0ZXI6IERhdGFXcml0ZXIsXHJcbiAgICAgICAgYnVmZmVyVmlld3M6IElCdWZmZXJWaWV3W10sXHJcbiAgICAgICAgYWNjZXNzb3JzOiBJQWNjZXNzb3JbXSxcclxuICAgICAgICB1c2VRdWF0ZXJuaW9uOiBib29sZWFuLFxyXG4gICAgICAgIGFuaW1hdGlvblNhbXBsZVJhdGU6IG51bWJlcixcclxuICAgICAgICBjb252ZXJ0VG9SaWdodEhhbmRlZDogYm9vbGVhbixcclxuICAgICAgICBtb3JwaEFuaW1hdGlvbkNoYW5uZWxzPzogbnVtYmVyXHJcbiAgICApIHtcclxuICAgICAgICBjb25zdCBhbmltYXRpb25EYXRhID0gX0dMVEZBbmltYXRpb24uX0NyZWF0ZU5vZGVBbmltYXRpb24oYmFieWxvblRyYW5zZm9ybU5vZGUsIGFuaW1hdGlvbiwgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsIHVzZVF1YXRlcm5pb24sIGFuaW1hdGlvblNhbXBsZVJhdGUpO1xyXG4gICAgICAgIGxldCBidWZmZXJWaWV3OiBJQnVmZmVyVmlldztcclxuICAgICAgICBsZXQgYWNjZXNzb3I6IElBY2Nlc3NvcjtcclxuICAgICAgICBsZXQga2V5ZnJhbWVBY2Nlc3NvckluZGV4OiBudW1iZXI7XHJcbiAgICAgICAgbGV0IGRhdGFBY2Nlc3NvckluZGV4OiBudW1iZXI7XHJcbiAgICAgICAgbGV0IG91dHB1dExlbmd0aDogbnVtYmVyO1xyXG4gICAgICAgIGxldCBhbmltYXRpb25TYW1wbGVyOiBJQW5pbWF0aW9uU2FtcGxlcjtcclxuICAgICAgICBsZXQgYW5pbWF0aW9uQ2hhbm5lbDogSUFuaW1hdGlvbkNoYW5uZWw7XHJcblxyXG4gICAgICAgIGlmIChhbmltYXRpb25EYXRhKSB7XHJcbiAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICAqIE5vdyB0aGF0IHdlIGhhdmUgdGhlIGdsVEYgY29udmVydGVkIG1vcnBoIHRhcmdldCBhbmltYXRpb24gZGF0YSxcclxuICAgICAgICAgICAgICogd2UgY2FuIHJlbW92ZSByZWR1bmRhbnQgaW5wdXQgZGF0YSBzbyB0aGF0IHdlIGhhdmUgbiBpbnB1dCBmcmFtZXMsXHJcbiAgICAgICAgICAgICAqIGFuZCBtb3JwaEFuaW1hdGlvbkNoYW5uZWxzICogbiBvdXRwdXQgZnJhbWVzXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBpZiAobW9ycGhBbmltYXRpb25DaGFubmVscykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50SW5wdXQ6IG51bWJlciA9IDA7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdJbnB1dHM6IG51bWJlcltdID0gW107XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAoYW5pbWF0aW9uRGF0YS5pbnB1dHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRJbnB1dCA9IGFuaW1hdGlvbkRhdGEuaW5wdXRzLnNoaWZ0KCkhO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCAlIG1vcnBoQW5pbWF0aW9uQ2hhbm5lbHMgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdJbnB1dHMucHVzaChjdXJyZW50SW5wdXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uRGF0YS5pbnB1dHMgPSBuZXdJbnB1dHM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG5vZGVJbmRleCA9IG5vZGVNYXAuZ2V0KGJhYnlsb25UcmFuc2Zvcm1Ob2RlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIENyZWF0ZXMgYnVmZmVyIHZpZXcgYW5kIGFjY2Vzc29yIGZvciBrZXkgZnJhbWVzLlxyXG4gICAgICAgICAgICBsZXQgYnl0ZUxlbmd0aCA9IGFuaW1hdGlvbkRhdGEuaW5wdXRzLmxlbmd0aCAqIDQ7XHJcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldCA9IGJpbmFyeVdyaXRlci5ieXRlT2Zmc2V0O1xyXG4gICAgICAgICAgICBidWZmZXJWaWV3ID0gQ3JlYXRlQnVmZmVyVmlldygwLCBvZmZzZXQsIGJ5dGVMZW5ndGgpO1xyXG4gICAgICAgICAgICBidWZmZXJWaWV3cy5wdXNoKGJ1ZmZlclZpZXcpO1xyXG4gICAgICAgICAgICBhbmltYXRpb25EYXRhLmlucHV0cy5mb3JFYWNoKGZ1bmN0aW9uIChpbnB1dCkge1xyXG4gICAgICAgICAgICAgICAgYmluYXJ5V3JpdGVyLndyaXRlRmxvYXQzMihpbnB1dCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgYWNjZXNzb3IgPSBDcmVhdGVBY2Nlc3NvcihidWZmZXJWaWV3cy5sZW5ndGggLSAxLCBBY2Nlc3NvclR5cGUuU0NBTEFSLCBBY2Nlc3NvckNvbXBvbmVudFR5cGUuRkxPQVQsIGFuaW1hdGlvbkRhdGEuaW5wdXRzLmxlbmd0aCwgbnVsbCwge1xyXG4gICAgICAgICAgICAgICAgbWluOiBbYW5pbWF0aW9uRGF0YS5pbnB1dHNNaW5dLFxyXG4gICAgICAgICAgICAgICAgbWF4OiBbYW5pbWF0aW9uRGF0YS5pbnB1dHNNYXhdLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGFjY2Vzc29ycy5wdXNoKGFjY2Vzc29yKTtcclxuICAgICAgICAgICAga2V5ZnJhbWVBY2Nlc3NvckluZGV4ID0gYWNjZXNzb3JzLmxlbmd0aCAtIDE7XHJcblxyXG4gICAgICAgICAgICAvLyBjcmVhdGUgYnVmZmVydmlldyBhbmQgYWNjZXNzb3IgZm9yIGtleWVkIHZhbHVlcy5cclxuICAgICAgICAgICAgb3V0cHV0TGVuZ3RoID0gYW5pbWF0aW9uRGF0YS5vdXRwdXRzLmxlbmd0aDtcclxuICAgICAgICAgICAgYnl0ZUxlbmd0aCA9IEdldEFjY2Vzc29yRWxlbWVudENvdW50KGRhdGFBY2Nlc3NvclR5cGUpICogNCAqIGFuaW1hdGlvbkRhdGEub3V0cHV0cy5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICAvLyBjaGVjayBmb3IgaW4gYW5kIG91dCB0YW5nZW50c1xyXG4gICAgICAgICAgICBidWZmZXJWaWV3ID0gQ3JlYXRlQnVmZmVyVmlldygwLCBiaW5hcnlXcml0ZXIuYnl0ZU9mZnNldCwgYnl0ZUxlbmd0aCk7XHJcbiAgICAgICAgICAgIGJ1ZmZlclZpZXdzLnB1c2goYnVmZmVyVmlldyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCByb3RhdGlvblF1YXRlcm5pb24gPSBuZXcgUXVhdGVybmlvbigpO1xyXG4gICAgICAgICAgICBjb25zdCBldWxlclZlYzMgPSBuZXcgVmVjdG9yMygpO1xyXG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IG5ldyBWZWN0b3IzKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzQ2FtZXJhID0gYmFieWxvblRyYW5zZm9ybU5vZGUgaW5zdGFuY2VvZiBDYW1lcmE7XHJcblxyXG4gICAgICAgICAgICBhbmltYXRpb25EYXRhLm91dHB1dHMuZm9yRWFjaChmdW5jdGlvbiAob3V0cHV0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29udmVydFRvUmlnaHRIYW5kZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGguVFJBTlNMQVRJT046XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBWZWN0b3IzLkZyb21BcnJheVRvUmVmKG91dHB1dCwgMCwgcG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29udmVydFRvUmlnaHRIYW5kZWRQb3NpdGlvbihwb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaW5hcnlXcml0ZXIud3JpdGVGbG9hdDMyKHBvc2l0aW9uLngpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmluYXJ5V3JpdGVyLndyaXRlRmxvYXQzMihwb3NpdGlvbi55KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpbmFyeVdyaXRlci53cml0ZUZsb2F0MzIocG9zaXRpb24ueik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGguUk9UQVRJT046XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3V0cHV0Lmxlbmd0aCA9PT0gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFF1YXRlcm5pb24uRnJvbUFycmF5VG9SZWYob3V0cHV0LCAwLCByb3RhdGlvblF1YXRlcm5pb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWZWN0b3IzLkZyb21BcnJheVRvUmVmKG91dHB1dCwgMCwgZXVsZXJWZWMzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBRdWF0ZXJuaW9uLkZyb21FdWxlclZlY3RvclRvUmVmKGV1bGVyVmVjMywgcm90YXRpb25RdWF0ZXJuaW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNDYW1lcmEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb252ZXJ0Q2FtZXJhUm90YXRpb25Ub0dMVEYocm90YXRpb25RdWF0ZXJuaW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFRdWF0ZXJuaW9uLklzSWRlbnRpdHkocm90YXRpb25RdWF0ZXJuaW9uKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb252ZXJ0VG9SaWdodEhhbmRlZFJvdGF0aW9uKHJvdGF0aW9uUXVhdGVybmlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpbmFyeVdyaXRlci53cml0ZUZsb2F0MzIocm90YXRpb25RdWF0ZXJuaW9uLngpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmluYXJ5V3JpdGVyLndyaXRlRmxvYXQzMihyb3RhdGlvblF1YXRlcm5pb24ueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaW5hcnlXcml0ZXIud3JpdGVGbG9hdDMyKHJvdGF0aW9uUXVhdGVybmlvbi56KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpbmFyeVdyaXRlci53cml0ZUZsb2F0MzIocm90YXRpb25RdWF0ZXJuaW9uLncpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dC5mb3JFYWNoKGZ1bmN0aW9uIChlbnRyeSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpbmFyeVdyaXRlci53cml0ZUZsb2F0MzIoZW50cnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aC5ST1RBVElPTjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvdXRwdXQubGVuZ3RoID09PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUXVhdGVybmlvbi5Gcm9tQXJyYXlUb1JlZihvdXRwdXQsIDAsIHJvdGF0aW9uUXVhdGVybmlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZlY3RvcjMuRnJvbUFycmF5VG9SZWYob3V0cHV0LCAwLCBldWxlclZlYzMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFF1YXRlcm5pb24uRnJvbUV1bGVyVmVjdG9yVG9SZWYoZXVsZXJWZWMzLCByb3RhdGlvblF1YXRlcm5pb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzQ2FtZXJhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29udmVydENhbWVyYVJvdGF0aW9uVG9HTFRGKHJvdGF0aW9uUXVhdGVybmlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaW5hcnlXcml0ZXIud3JpdGVGbG9hdDMyKHJvdGF0aW9uUXVhdGVybmlvbi54KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpbmFyeVdyaXRlci53cml0ZUZsb2F0MzIocm90YXRpb25RdWF0ZXJuaW9uLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmluYXJ5V3JpdGVyLndyaXRlRmxvYXQzMihyb3RhdGlvblF1YXRlcm5pb24ueik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaW5hcnlXcml0ZXIud3JpdGVGbG9hdDMyKHJvdGF0aW9uUXVhdGVybmlvbi53KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQuZm9yRWFjaChmdW5jdGlvbiAoZW50cnkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaW5hcnlXcml0ZXIud3JpdGVGbG9hdDMyKGVudHJ5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGFjY2Vzc29yID0gQ3JlYXRlQWNjZXNzb3IoYnVmZmVyVmlld3MubGVuZ3RoIC0gMSwgZGF0YUFjY2Vzc29yVHlwZSwgQWNjZXNzb3JDb21wb25lbnRUeXBlLkZMT0FULCBvdXRwdXRMZW5ndGgsIG51bGwpO1xyXG4gICAgICAgICAgICBhY2Nlc3NvcnMucHVzaChhY2Nlc3Nvcik7XHJcbiAgICAgICAgICAgIGRhdGFBY2Nlc3NvckluZGV4ID0gYWNjZXNzb3JzLmxlbmd0aCAtIDE7XHJcblxyXG4gICAgICAgICAgICAvLyBjcmVhdGUgc2FtcGxlclxyXG4gICAgICAgICAgICBhbmltYXRpb25TYW1wbGVyID0ge1xyXG4gICAgICAgICAgICAgICAgaW50ZXJwb2xhdGlvbjogYW5pbWF0aW9uRGF0YS5zYW1wbGVySW50ZXJwb2xhdGlvbixcclxuICAgICAgICAgICAgICAgIGlucHV0OiBrZXlmcmFtZUFjY2Vzc29ySW5kZXgsXHJcbiAgICAgICAgICAgICAgICBvdXRwdXQ6IGRhdGFBY2Nlc3NvckluZGV4LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBnbFRGQW5pbWF0aW9uLnNhbXBsZXJzLnB1c2goYW5pbWF0aW9uU2FtcGxlcik7XHJcblxyXG4gICAgICAgICAgICAvLyBjcmVhdGUgY2hhbm5lbFxyXG4gICAgICAgICAgICBhbmltYXRpb25DaGFubmVsID0ge1xyXG4gICAgICAgICAgICAgICAgc2FtcGxlcjogZ2xURkFuaW1hdGlvbi5zYW1wbGVycy5sZW5ndGggLSAxLFxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZTogbm9kZUluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZ2xURkFuaW1hdGlvbi5jaGFubmVscy5wdXNoKGFuaW1hdGlvbkNoYW5uZWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIGJha2VkIGFuaW1hdGlvblxyXG4gICAgICogQHBhcmFtIGJhYnlsb25UcmFuc2Zvcm1Ob2RlIEJhYnlsb25KUyBtZXNoXHJcbiAgICAgKiBAcGFyYW0gYW5pbWF0aW9uIEJhYnlsb25KUyBhbmltYXRpb24gY29ycmVzcG9uZGluZyB0byB0aGUgQmFieWxvbkpTIG1lc2hcclxuICAgICAqIEBwYXJhbSBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCBhbmltYXRpb24gdGFyZ2V0IGNoYW5uZWxcclxuICAgICAqIEBwYXJhbSBtaW5GcmFtZSBtaW5pbXVtIGFuaW1hdGlvbiBmcmFtZVxyXG4gICAgICogQHBhcmFtIG1heEZyYW1lIG1heGltdW0gYW5pbWF0aW9uIGZyYW1lXHJcbiAgICAgKiBAcGFyYW0gZnBzIGZyYW1lcyBwZXIgc2Vjb25kIG9mIHRoZSBhbmltYXRpb25cclxuICAgICAqIEBwYXJhbSBzYW1wbGVSYXRlXHJcbiAgICAgKiBAcGFyYW0gaW5wdXRzIGlucHV0IGtleSBmcmFtZXMgb2YgdGhlIGFuaW1hdGlvblxyXG4gICAgICogQHBhcmFtIG91dHB1dHMgb3V0cHV0IGtleSBmcmFtZSBkYXRhIG9mIHRoZSBhbmltYXRpb25cclxuICAgICAqIEBwYXJhbSBtaW5NYXhGcmFtZXNcclxuICAgICAqIEBwYXJhbSBtaW5NYXhGcmFtZXMubWluXHJcbiAgICAgKiBAcGFyYW0gbWluTWF4RnJhbWVzLm1heFxyXG4gICAgICogQHBhcmFtIHVzZVF1YXRlcm5pb24gc3BlY2lmaWVzIGlmIHF1YXRlcm5pb25zIHNob3VsZCBiZSB1c2VkXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIF9DcmVhdGVCYWtlZEFuaW1hdGlvbihcclxuICAgICAgICBiYWJ5bG9uVHJhbnNmb3JtTm9kZTogTm9kZSxcclxuICAgICAgICBhbmltYXRpb246IEFuaW1hdGlvbixcclxuICAgICAgICBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aDogQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsXHJcbiAgICAgICAgbWluRnJhbWU6IG51bWJlcixcclxuICAgICAgICBtYXhGcmFtZTogbnVtYmVyLFxyXG4gICAgICAgIGZwczogbnVtYmVyLFxyXG4gICAgICAgIHNhbXBsZVJhdGU6IG51bWJlcixcclxuICAgICAgICBpbnB1dHM6IG51bWJlcltdLFxyXG4gICAgICAgIG91dHB1dHM6IG51bWJlcltdW10sXHJcbiAgICAgICAgbWluTWF4RnJhbWVzOiB7IG1pbjogbnVtYmVyOyBtYXg6IG51bWJlciB9LFxyXG4gICAgICAgIHVzZVF1YXRlcm5pb246IGJvb2xlYW5cclxuICAgICkge1xyXG4gICAgICAgIGxldCB2YWx1ZTogbnVtYmVyIHwgVmVjdG9yMyB8IFF1YXRlcm5pb247XHJcbiAgICAgICAgY29uc3QgcXVhdGVybmlvbkNhY2hlOiBRdWF0ZXJuaW9uID0gUXVhdGVybmlvbi5JZGVudGl0eSgpO1xyXG4gICAgICAgIGxldCBwcmV2aW91c1RpbWU6IE51bGxhYmxlPG51bWJlcj4gPSBudWxsO1xyXG4gICAgICAgIGxldCB0aW1lOiBudW1iZXI7XHJcbiAgICAgICAgbGV0IG1heFVzZWRGcmFtZTogTnVsbGFibGU8bnVtYmVyPiA9IG51bGw7XHJcbiAgICAgICAgbGV0IGN1cnJLZXlGcmFtZTogTnVsbGFibGU8SUFuaW1hdGlvbktleT4gPSBudWxsO1xyXG4gICAgICAgIGxldCBuZXh0S2V5RnJhbWU6IE51bGxhYmxlPElBbmltYXRpb25LZXk+ID0gbnVsbDtcclxuICAgICAgICBsZXQgcHJldktleUZyYW1lOiBOdWxsYWJsZTxJQW5pbWF0aW9uS2V5PiA9IG51bGw7XHJcbiAgICAgICAgbGV0IGVuZEZyYW1lOiBOdWxsYWJsZTxudW1iZXI+ID0gbnVsbDtcclxuICAgICAgICBtaW5NYXhGcmFtZXMubWluID0gVG9vbHMuRmxvYXRSb3VuZChtaW5GcmFtZSAvIGZwcyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGtleUZyYW1lcyA9IGFuaW1hdGlvbi5nZXRLZXlzKCk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW5ndGggPSBrZXlGcmFtZXMubGVuZ3RoOyBpIDwgbGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgZW5kRnJhbWUgPSBudWxsO1xyXG4gICAgICAgICAgICBjdXJyS2V5RnJhbWUgPSBrZXlGcmFtZXNbaV07XHJcblxyXG4gICAgICAgICAgICBpZiAoaSArIDEgPCBsZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIG5leHRLZXlGcmFtZSA9IGtleUZyYW1lc1tpICsgMV07XHJcbiAgICAgICAgICAgICAgICBpZiAoKGN1cnJLZXlGcmFtZS52YWx1ZS5lcXVhbHMgJiYgY3VycktleUZyYW1lLnZhbHVlLmVxdWFscyhuZXh0S2V5RnJhbWUudmFsdWUpKSB8fCBjdXJyS2V5RnJhbWUudmFsdWUgPT09IG5leHRLZXlGcmFtZS52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNldCB0aGUgZmlyc3QgZnJhbWUgdG8gaXRzZWxmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZEZyYW1lID0gY3VycktleUZyYW1lLmZyYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5kRnJhbWUgPSBuZXh0S2V5RnJhbWUuZnJhbWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBhdCB0aGUgbGFzdCBrZXkgZnJhbWVcclxuICAgICAgICAgICAgICAgIHByZXZLZXlGcmFtZSA9IGtleUZyYW1lc1tpIC0gMV07XHJcbiAgICAgICAgICAgICAgICBpZiAoKGN1cnJLZXlGcmFtZS52YWx1ZS5lcXVhbHMgJiYgY3VycktleUZyYW1lLnZhbHVlLmVxdWFscyhwcmV2S2V5RnJhbWUudmFsdWUpKSB8fCBjdXJyS2V5RnJhbWUudmFsdWUgPT09IHByZXZLZXlGcmFtZS52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBlbmRGcmFtZSA9IG1heEZyYW1lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChlbmRGcmFtZSkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgZiA9IGN1cnJLZXlGcmFtZS5mcmFtZTsgZiA8PSBlbmRGcmFtZTsgZiArPSBzYW1wbGVSYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZSA9IFRvb2xzLkZsb2F0Um91bmQoZiAvIGZwcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRpbWUgPT09IHByZXZpb3VzVGltZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNUaW1lID0gdGltZTtcclxuICAgICAgICAgICAgICAgICAgICBtYXhVc2VkRnJhbWUgPSB0aW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcGVhdENvdW50OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb29wTW9kZTogYW5pbWF0aW9uLmxvb3BNb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBhbmltYXRpb24uX2ludGVycG9sYXRlKGYsIHN0YXRlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgX0dMVEZBbmltYXRpb24uX1NldEludGVycG9sYXRlZFZhbHVlKGJhYnlsb25UcmFuc2Zvcm1Ob2RlLCB2YWx1ZSwgdGltZSwgYW5pbWF0aW9uLCBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCwgcXVhdGVybmlvbkNhY2hlLCBpbnB1dHMsIG91dHB1dHMsIHVzZVF1YXRlcm5pb24pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtYXhVc2VkRnJhbWUpIHtcclxuICAgICAgICAgICAgbWluTWF4RnJhbWVzLm1heCA9IG1heFVzZWRGcmFtZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX0NvbnZlcnRGYWN0b3JUb1ZlY3RvcjNPclF1YXRlcm5pb24oXHJcbiAgICAgICAgZmFjdG9yOiBudW1iZXIsXHJcbiAgICAgICAgYmFieWxvblRyYW5zZm9ybU5vZGU6IE5vZGUsXHJcbiAgICAgICAgYW5pbWF0aW9uOiBBbmltYXRpb24sXHJcbiAgICAgICAgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGg6IEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLFxyXG4gICAgICAgIHVzZVF1YXRlcm5pb246IGJvb2xlYW5cclxuICAgICk6IFZlY3RvcjMgfCBRdWF0ZXJuaW9uIHtcclxuICAgICAgICBjb25zdCBiYXNlUG9zaXRpb25Sb3RhdGlvbk9yU2NhbGUgPSBfR0xURkFuaW1hdGlvbi5fR2V0QmFzZVBvc2l0aW9uUm90YXRpb25PclNjYWxlKGJhYnlsb25UcmFuc2Zvcm1Ob2RlLCBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCwgdXNlUXVhdGVybmlvbik7XHJcbiAgICAgICAgLy8gaGFuZGxlcyBzaW5nbGUgY29tcG9uZW50IHgsIHksIHogb3IgdyBjb21wb25lbnQgYW5pbWF0aW9uIGJ5IHVzaW5nIGEgYmFzZSBwcm9wZXJ0eSBhbmQgYW5pbWF0aW5nIG92ZXIgYSBjb21wb25lbnQuXHJcbiAgICAgICAgY29uc3QgcHJvcGVydHkgPSBhbmltYXRpb24udGFyZ2V0UHJvcGVydHkuc3BsaXQoXCIuXCIpO1xyXG4gICAgICAgIGNvbnN0IGNvbXBvbmVudE5hbWUgPSBwcm9wZXJ0eSA/IHByb3BlcnR5WzFdIDogXCJcIjsgLy8geCwgeSwgeiwgb3IgdyBjb21wb25lbnRcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHVzZVF1YXRlcm5pb24gPyBRdWF0ZXJuaW9uLkZyb21BcnJheShiYXNlUG9zaXRpb25Sb3RhdGlvbk9yU2NhbGUpLm5vcm1hbGl6ZSgpIDogVmVjdG9yMy5Gcm9tQXJyYXkoYmFzZVBvc2l0aW9uUm90YXRpb25PclNjYWxlKTtcclxuXHJcbiAgICAgICAgc3dpdGNoIChjb21wb25lbnROYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ4XCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJ5XCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJ6XCI6IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlW2NvbXBvbmVudE5hbWVdID0gZmFjdG9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcIndcIjoge1xyXG4gICAgICAgICAgICAgICAgKHZhbHVlIGFzIFF1YXRlcm5pb24pLncgPSBmYWN0b3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgICAgICBUb29scy5FcnJvcihgZ2xURkFuaW1hdGlvbjogVW5zdXBwb3J0ZWQgY29tcG9uZW50IG5hbWUgXCIke2NvbXBvbmVudE5hbWV9XCIhYCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfU2V0SW50ZXJwb2xhdGVkVmFsdWUoXHJcbiAgICAgICAgYmFieWxvblRyYW5zZm9ybU5vZGU6IE5vZGUsXHJcbiAgICAgICAgdmFsdWU6IG51bWJlciB8IFZlY3RvcjMgfCBRdWF0ZXJuaW9uLFxyXG4gICAgICAgIHRpbWU6IG51bWJlcixcclxuICAgICAgICBhbmltYXRpb246IEFuaW1hdGlvbixcclxuICAgICAgICBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aDogQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsXHJcbiAgICAgICAgcXVhdGVybmlvbkNhY2hlOiBRdWF0ZXJuaW9uLFxyXG4gICAgICAgIGlucHV0czogbnVtYmVyW10sXHJcbiAgICAgICAgb3V0cHV0czogbnVtYmVyW11bXSxcclxuICAgICAgICB1c2VRdWF0ZXJuaW9uOiBib29sZWFuXHJcbiAgICApIHtcclxuICAgICAgICBsZXQgY2FjaGVWYWx1ZTogVmVjdG9yMyB8IFF1YXRlcm5pb24gfCBudW1iZXI7XHJcbiAgICAgICAgaW5wdXRzLnB1c2godGltZSk7XHJcblxyXG4gICAgICAgIGlmIChhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCA9PT0gQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGguV0VJR0hUUykge1xyXG4gICAgICAgICAgICBvdXRwdXRzLnB1c2goW3ZhbHVlIGFzIG51bWJlcl0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYW5pbWF0aW9uLmRhdGFUeXBlID09PSBBbmltYXRpb24uQU5JTUFUSU9OVFlQRV9GTE9BVCkge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuX0NvbnZlcnRGYWN0b3JUb1ZlY3RvcjNPclF1YXRlcm5pb24odmFsdWUgYXMgbnVtYmVyLCBiYWJ5bG9uVHJhbnNmb3JtTm9kZSwgYW5pbWF0aW9uLCBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCwgdXNlUXVhdGVybmlvbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGggPT09IEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLlJPVEFUSU9OKSB7XHJcbiAgICAgICAgICAgIGlmICh1c2VRdWF0ZXJuaW9uKSB7XHJcbiAgICAgICAgICAgICAgICBxdWF0ZXJuaW9uQ2FjaGUgPSB2YWx1ZSBhcyBRdWF0ZXJuaW9uO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2FjaGVWYWx1ZSA9IHZhbHVlIGFzIFZlY3RvcjM7XHJcbiAgICAgICAgICAgICAgICBRdWF0ZXJuaW9uLlJvdGF0aW9uWWF3UGl0Y2hSb2xsVG9SZWYoY2FjaGVWYWx1ZS55LCBjYWNoZVZhbHVlLngsIGNhY2hlVmFsdWUueiwgcXVhdGVybmlvbkNhY2hlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvdXRwdXRzLnB1c2gocXVhdGVybmlvbkNhY2hlLmFzQXJyYXkoKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gc2NhbGluZyBhbmQgcG9zaXRpb24gYW5pbWF0aW9uXHJcbiAgICAgICAgICAgIGNhY2hlVmFsdWUgPSB2YWx1ZSBhcyBWZWN0b3IzO1xyXG4gICAgICAgICAgICBvdXRwdXRzLnB1c2goY2FjaGVWYWx1ZS5hc0FycmF5KCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgbGluZWFyIGFuaW1hdGlvbiBmcm9tIHRoZSBhbmltYXRpb24ga2V5IGZyYW1lc1xyXG4gICAgICogQHBhcmFtIGJhYnlsb25UcmFuc2Zvcm1Ob2RlIEJhYnlsb25KUyBtZXNoXHJcbiAgICAgKiBAcGFyYW0gYW5pbWF0aW9uIEJhYnlsb25KUyBhbmltYXRpb25cclxuICAgICAqIEBwYXJhbSBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCBUaGUgdGFyZ2V0IGFuaW1hdGlvbiBjaGFubmVsXHJcbiAgICAgKiBAcGFyYW0gaW5wdXRzIEFycmF5IHRvIHN0b3JlIHRoZSBrZXkgZnJhbWUgdGltZXNcclxuICAgICAqIEBwYXJhbSBvdXRwdXRzIEFycmF5IHRvIHN0b3JlIHRoZSBrZXkgZnJhbWUgZGF0YVxyXG4gICAgICogQHBhcmFtIHVzZVF1YXRlcm5pb24gU3BlY2lmaWVzIGlmIHF1YXRlcm5pb25zIGFyZSB1c2VkIGluIHRoZSBhbmltYXRpb25cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX0NyZWF0ZUxpbmVhck9yU3RlcEFuaW1hdGlvbihcclxuICAgICAgICBiYWJ5bG9uVHJhbnNmb3JtTm9kZTogTm9kZSxcclxuICAgICAgICBhbmltYXRpb246IEFuaW1hdGlvbixcclxuICAgICAgICBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aDogQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsXHJcbiAgICAgICAgaW5wdXRzOiBudW1iZXJbXSxcclxuICAgICAgICBvdXRwdXRzOiBudW1iZXJbXVtdLFxyXG4gICAgICAgIHVzZVF1YXRlcm5pb246IGJvb2xlYW5cclxuICAgICkge1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5RnJhbWUgb2YgYW5pbWF0aW9uLmdldEtleXMoKSkge1xyXG4gICAgICAgICAgICBpbnB1dHMucHVzaChrZXlGcmFtZS5mcmFtZSAvIGFuaW1hdGlvbi5mcmFtZVBlclNlY29uZCk7IC8vIGtleWZyYW1lcyBpbiBzZWNvbmRzLlxyXG4gICAgICAgICAgICBfR0xURkFuaW1hdGlvbi5fQWRkS2V5ZnJhbWVWYWx1ZShrZXlGcmFtZSwgYW5pbWF0aW9uLCBvdXRwdXRzLCBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCwgYmFieWxvblRyYW5zZm9ybU5vZGUsIHVzZVF1YXRlcm5pb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgY3ViaWMgc3BsaW5lIGFuaW1hdGlvbiBmcm9tIHRoZSBhbmltYXRpb24ga2V5IGZyYW1lc1xyXG4gICAgICogQHBhcmFtIGJhYnlsb25UcmFuc2Zvcm1Ob2RlIEJhYnlsb25KUyBtZXNoXHJcbiAgICAgKiBAcGFyYW0gYW5pbWF0aW9uIEJhYnlsb25KUyBhbmltYXRpb25cclxuICAgICAqIEBwYXJhbSBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCBUaGUgdGFyZ2V0IGFuaW1hdGlvbiBjaGFubmVsXHJcbiAgICAgKiBAcGFyYW0gaW5wdXRzIEFycmF5IHRvIHN0b3JlIHRoZSBrZXkgZnJhbWUgdGltZXNcclxuICAgICAqIEBwYXJhbSBvdXRwdXRzIEFycmF5IHRvIHN0b3JlIHRoZSBrZXkgZnJhbWUgZGF0YVxyXG4gICAgICogQHBhcmFtIHVzZVF1YXRlcm5pb24gU3BlY2lmaWVzIGlmIHF1YXRlcm5pb25zIGFyZSB1c2VkIGluIHRoZSBhbmltYXRpb25cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX0NyZWF0ZUN1YmljU3BsaW5lQW5pbWF0aW9uKFxyXG4gICAgICAgIGJhYnlsb25UcmFuc2Zvcm1Ob2RlOiBOb2RlLFxyXG4gICAgICAgIGFuaW1hdGlvbjogQW5pbWF0aW9uLFxyXG4gICAgICAgIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoOiBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCxcclxuICAgICAgICBpbnB1dHM6IG51bWJlcltdLFxyXG4gICAgICAgIG91dHB1dHM6IG51bWJlcltdW10sXHJcbiAgICAgICAgdXNlUXVhdGVybmlvbjogYm9vbGVhblxyXG4gICAgKSB7XHJcbiAgICAgICAgYW5pbWF0aW9uLmdldEtleXMoKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXlGcmFtZSkge1xyXG4gICAgICAgICAgICBpbnB1dHMucHVzaChrZXlGcmFtZS5mcmFtZSAvIGFuaW1hdGlvbi5mcmFtZVBlclNlY29uZCk7IC8vIGtleWZyYW1lcyBpbiBzZWNvbmRzLlxyXG4gICAgICAgICAgICBfR0xURkFuaW1hdGlvbi5fQWRkU3BsaW5lVGFuZ2VudChfVGFuZ2VudFR5cGUuSU5UQU5HRU5ULCBvdXRwdXRzLCBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCwgQW5pbWF0aW9uU2FtcGxlckludGVycG9sYXRpb24uQ1VCSUNTUExJTkUsIGtleUZyYW1lLCB1c2VRdWF0ZXJuaW9uKTtcclxuICAgICAgICAgICAgX0dMVEZBbmltYXRpb24uX0FkZEtleWZyYW1lVmFsdWUoa2V5RnJhbWUsIGFuaW1hdGlvbiwgb3V0cHV0cywgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsIGJhYnlsb25UcmFuc2Zvcm1Ob2RlLCB1c2VRdWF0ZXJuaW9uKTtcclxuXHJcbiAgICAgICAgICAgIF9HTFRGQW5pbWF0aW9uLl9BZGRTcGxpbmVUYW5nZW50KF9UYW5nZW50VHlwZS5PVVRUQU5HRU5ULCBvdXRwdXRzLCBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCwgQW5pbWF0aW9uU2FtcGxlckludGVycG9sYXRpb24uQ1VCSUNTUExJTkUsIGtleUZyYW1lLCB1c2VRdWF0ZXJuaW9uKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfR2V0QmFzZVBvc2l0aW9uUm90YXRpb25PclNjYWxlKGJhYnlsb25UcmFuc2Zvcm1Ob2RlOiBOb2RlLCBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aDogQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsIHVzZVF1YXRlcm5pb246IGJvb2xlYW4pIHtcclxuICAgICAgICBsZXQgYmFzZVBvc2l0aW9uUm90YXRpb25PclNjYWxlOiBudW1iZXJbXTtcclxuICAgICAgICBpZiAoYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGggPT09IEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLlJPVEFUSU9OKSB7XHJcbiAgICAgICAgICAgIGlmICh1c2VRdWF0ZXJuaW9uKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBxID0gKGJhYnlsb25UcmFuc2Zvcm1Ob2RlIGFzIFRyYW5zZm9ybU5vZGUpLnJvdGF0aW9uUXVhdGVybmlvbjtcclxuICAgICAgICAgICAgICAgIGJhc2VQb3NpdGlvblJvdGF0aW9uT3JTY2FsZSA9IChxID8/IFF1YXRlcm5pb24uSWRlbnRpdHkoKSkuYXNBcnJheSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcjogVmVjdG9yMyA9IChiYWJ5bG9uVHJhbnNmb3JtTm9kZSBhcyBUcmFuc2Zvcm1Ob2RlKS5yb3RhdGlvbjtcclxuICAgICAgICAgICAgICAgIGJhc2VQb3NpdGlvblJvdGF0aW9uT3JTY2FsZSA9IChyID8/IFZlY3RvcjMuWmVybygpKS5hc0FycmF5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoID09PSBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aC5UUkFOU0xBVElPTikge1xyXG4gICAgICAgICAgICBjb25zdCBwOiBWZWN0b3IzID0gKGJhYnlsb25UcmFuc2Zvcm1Ob2RlIGFzIFRyYW5zZm9ybU5vZGUpLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICBiYXNlUG9zaXRpb25Sb3RhdGlvbk9yU2NhbGUgPSAocCA/PyBWZWN0b3IzLlplcm8oKSkuYXNBcnJheSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIHNjYWxlXHJcbiAgICAgICAgICAgIGNvbnN0IHM6IFZlY3RvcjMgPSAoYmFieWxvblRyYW5zZm9ybU5vZGUgYXMgVHJhbnNmb3JtTm9kZSkuc2NhbGluZztcclxuICAgICAgICAgICAgYmFzZVBvc2l0aW9uUm90YXRpb25PclNjYWxlID0gKHMgPz8gVmVjdG9yMy5PbmUoKSkuYXNBcnJheSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYmFzZVBvc2l0aW9uUm90YXRpb25PclNjYWxlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkcyBhIGtleSBmcmFtZSB2YWx1ZVxyXG4gICAgICogQHBhcmFtIGtleUZyYW1lXHJcbiAgICAgKiBAcGFyYW0gYW5pbWF0aW9uXHJcbiAgICAgKiBAcGFyYW0gb3V0cHV0c1xyXG4gICAgICogQHBhcmFtIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoXHJcbiAgICAgKiBAcGFyYW0gYmFieWxvblRyYW5zZm9ybU5vZGVcclxuICAgICAqIEBwYXJhbSB1c2VRdWF0ZXJuaW9uXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIF9BZGRLZXlmcmFtZVZhbHVlKFxyXG4gICAgICAgIGtleUZyYW1lOiBJQW5pbWF0aW9uS2V5LFxyXG4gICAgICAgIGFuaW1hdGlvbjogQW5pbWF0aW9uLFxyXG4gICAgICAgIG91dHB1dHM6IG51bWJlcltdW10sXHJcbiAgICAgICAgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGg6IEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLFxyXG4gICAgICAgIGJhYnlsb25UcmFuc2Zvcm1Ob2RlOiBOb2RlLFxyXG4gICAgICAgIHVzZVF1YXRlcm5pb246IGJvb2xlYW5cclxuICAgICkge1xyXG4gICAgICAgIGxldCBuZXdQb3NpdGlvblJvdGF0aW9uT3JTY2FsZTogTnVsbGFibGU8VmVjdG9yMyB8IFF1YXRlcm5pb24gfCBudW1iZXI+O1xyXG4gICAgICAgIGNvbnN0IGFuaW1hdGlvblR5cGUgPSBhbmltYXRpb24uZGF0YVR5cGU7XHJcbiAgICAgICAgaWYgKGFuaW1hdGlvblR5cGUgPT09IEFuaW1hdGlvbi5BTklNQVRJT05UWVBFX1ZFQ1RPUjMpIHtcclxuICAgICAgICAgICAgbGV0IHZhbHVlID0ga2V5RnJhbWUudmFsdWUuYXNBcnJheSgpO1xyXG4gICAgICAgICAgICBpZiAoYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGggPT09IEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLlJPVEFUSU9OKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhcnJheSA9IFZlY3RvcjMuRnJvbUFycmF5KHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJvdGF0aW9uUXVhdGVybmlvbiA9IFF1YXRlcm5pb24uUm90YXRpb25ZYXdQaXRjaFJvbGwoYXJyYXkueSwgYXJyYXkueCwgYXJyYXkueik7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHJvdGF0aW9uUXVhdGVybmlvbi5hc0FycmF5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3V0cHV0cy5wdXNoKHZhbHVlKTsgLy8gc2NhbGUgIHZlY3Rvci5cclxuICAgICAgICB9IGVsc2UgaWYgKGFuaW1hdGlvblR5cGUgPT09IEFuaW1hdGlvbi5BTklNQVRJT05UWVBFX0ZMT0FUKSB7XHJcbiAgICAgICAgICAgIGlmIChhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCA9PT0gQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGguV0VJR0hUUykge1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0cy5wdXNoKFtrZXlGcmFtZS52YWx1ZV0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlcyBzaW5nbGUgY29tcG9uZW50IHgsIHksIHogb3IgdyBjb21wb25lbnQgYW5pbWF0aW9uIGJ5IHVzaW5nIGEgYmFzZSBwcm9wZXJ0eSBhbmQgYW5pbWF0aW5nIG92ZXIgYSBjb21wb25lbnQuXHJcbiAgICAgICAgICAgICAgICBuZXdQb3NpdGlvblJvdGF0aW9uT3JTY2FsZSA9IHRoaXMuX0NvbnZlcnRGYWN0b3JUb1ZlY3RvcjNPclF1YXRlcm5pb24oXHJcbiAgICAgICAgICAgICAgICAgICAga2V5RnJhbWUudmFsdWUgYXMgbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhYnlsb25UcmFuc2Zvcm1Ob2RlLFxyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCxcclxuICAgICAgICAgICAgICAgICAgICB1c2VRdWF0ZXJuaW9uXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgaWYgKG5ld1Bvc2l0aW9uUm90YXRpb25PclNjYWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoID09PSBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aC5ST1RBVElPTikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3NSb3RTY2FsZSA9IHVzZVF1YXRlcm5pb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gKG5ld1Bvc2l0aW9uUm90YXRpb25PclNjYWxlIGFzIFF1YXRlcm5pb24pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFF1YXRlcm5pb24uUm90YXRpb25ZYXdQaXRjaFJvbGwobmV3UG9zaXRpb25Sb3RhdGlvbk9yU2NhbGUueSwgbmV3UG9zaXRpb25Sb3RhdGlvbk9yU2NhbGUueCwgbmV3UG9zaXRpb25Sb3RhdGlvbk9yU2NhbGUueikubm9ybWFsaXplKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dHMucHVzaChwb3NSb3RTY2FsZS5hc0FycmF5KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBvdXRwdXRzLnB1c2gobmV3UG9zaXRpb25Sb3RhdGlvbk9yU2NhbGUuYXNBcnJheSgpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoYW5pbWF0aW9uVHlwZSA9PT0gQW5pbWF0aW9uLkFOSU1BVElPTlRZUEVfUVVBVEVSTklPTikge1xyXG4gICAgICAgICAgICBvdXRwdXRzLnB1c2goKGtleUZyYW1lLnZhbHVlIGFzIFF1YXRlcm5pb24pLm5vcm1hbGl6ZSgpLmFzQXJyYXkoKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgVG9vbHMuRXJyb3IoXCJnbFRGQW5pbWF0aW9uOiBVbnN1cHBvcnRlZCBrZXkgZnJhbWUgdmFsdWVzIGZvciBhbmltYXRpb24hXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICogRGV0ZXJtaW5lIHRoZSBpbnRlcnBvbGF0aW9uIGJhc2VkIG9uIHRoZSBrZXkgZnJhbWVzXHJcbiAgICAgKiBAcGFyYW0ga2V5RnJhbWVzXHJcbiAgICAgKiBAcGFyYW0gYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGhcclxuICAgICAqIEBwYXJhbSB1c2VRdWF0ZXJuaW9uXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIF9EZWR1Y2VJbnRlcnBvbGF0aW9uKFxyXG4gICAgICAgIGtleUZyYW1lczogSUFuaW1hdGlvbktleVtdLFxyXG4gICAgICAgIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoOiBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCxcclxuICAgICAgICB1c2VRdWF0ZXJuaW9uOiBib29sZWFuXHJcbiAgICApOiB7IGludGVycG9sYXRpb25UeXBlOiBBbmltYXRpb25TYW1wbGVySW50ZXJwb2xhdGlvbjsgc2hvdWxkQmFrZUFuaW1hdGlvbjogYm9vbGVhbiB9IHtcclxuICAgICAgICBsZXQgaW50ZXJwb2xhdGlvblR5cGU6IEFuaW1hdGlvblNhbXBsZXJJbnRlcnBvbGF0aW9uIHwgdW5kZWZpbmVkO1xyXG4gICAgICAgIGxldCBzaG91bGRCYWtlQW5pbWF0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGtleTogSUFuaW1hdGlvbktleTtcclxuXHJcbiAgICAgICAgaWYgKGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoID09PSBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aC5ST1RBVElPTiAmJiAhdXNlUXVhdGVybmlvbikge1xyXG4gICAgICAgICAgICByZXR1cm4geyBpbnRlcnBvbGF0aW9uVHlwZTogQW5pbWF0aW9uU2FtcGxlckludGVycG9sYXRpb24uTElORUFSLCBzaG91bGRCYWtlQW5pbWF0aW9uOiB0cnVlIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuZ3RoID0ga2V5RnJhbWVzLmxlbmd0aDsgaSA8IGxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIGtleSA9IGtleUZyYW1lc1tpXTtcclxuICAgICAgICAgICAgaWYgKGtleS5pblRhbmdlbnQgfHwga2V5Lm91dFRhbmdlbnQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpbnRlcnBvbGF0aW9uVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbnRlcnBvbGF0aW9uVHlwZSAhPT0gQW5pbWF0aW9uU2FtcGxlckludGVycG9sYXRpb24uQ1VCSUNTUExJTkUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwb2xhdGlvblR5cGUgPSBBbmltYXRpb25TYW1wbGVySW50ZXJwb2xhdGlvbi5MSU5FQVI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3VsZEJha2VBbmltYXRpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGludGVycG9sYXRpb25UeXBlID0gQW5pbWF0aW9uU2FtcGxlckludGVycG9sYXRpb24uQ1VCSUNTUExJTkU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW50ZXJwb2xhdGlvblR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGludGVycG9sYXRpb25UeXBlID09PSBBbmltYXRpb25TYW1wbGVySW50ZXJwb2xhdGlvbi5DVUJJQ1NQTElORSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoa2V5LmludGVycG9sYXRpb24gJiYga2V5LmludGVycG9sYXRpb24gPT09IEFuaW1hdGlvbktleUludGVycG9sYXRpb24uU1RFUCAmJiBpbnRlcnBvbGF0aW9uVHlwZSAhPT0gQW5pbWF0aW9uU2FtcGxlckludGVycG9sYXRpb24uU1RFUClcclxuICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwb2xhdGlvblR5cGUgPSBBbmltYXRpb25TYW1wbGVySW50ZXJwb2xhdGlvbi5MSU5FQVI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3VsZEJha2VBbmltYXRpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXkuaW50ZXJwb2xhdGlvbiAmJiBrZXkuaW50ZXJwb2xhdGlvbiA9PT0gQW5pbWF0aW9uS2V5SW50ZXJwb2xhdGlvbi5TVEVQKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGludGVycG9sYXRpb25UeXBlID0gQW5pbWF0aW9uU2FtcGxlckludGVycG9sYXRpb24uU1RFUDtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnBvbGF0aW9uVHlwZSA9IEFuaW1hdGlvblNhbXBsZXJJbnRlcnBvbGF0aW9uLkxJTkVBUjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFpbnRlcnBvbGF0aW9uVHlwZSkge1xyXG4gICAgICAgICAgICBpbnRlcnBvbGF0aW9uVHlwZSA9IEFuaW1hdGlvblNhbXBsZXJJbnRlcnBvbGF0aW9uLkxJTkVBUjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7IGludGVycG9sYXRpb25UeXBlOiBpbnRlcnBvbGF0aW9uVHlwZSwgc2hvdWxkQmFrZUFuaW1hdGlvbjogc2hvdWxkQmFrZUFuaW1hdGlvbiB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkcyBhbiBpbnB1dCB0YW5nZW50IG9yIG91dHB1dCB0YW5nZW50IHRvIHRoZSBvdXRwdXQgZGF0YVxyXG4gICAgICogSWYgYW4gaW5wdXQgdGFuZ2VudCBvciBvdXRwdXQgdGFuZ2VudCBpcyBtaXNzaW5nLCBpdCB1c2VzIHRoZSB6ZXJvIHZlY3RvciBvciB6ZXJvIHF1YXRlcm5pb25cclxuICAgICAqIEBwYXJhbSB0YW5nZW50VHlwZSBTcGVjaWZpZXMgd2hpY2ggdHlwZSBvZiB0YW5nZW50IHRvIGhhbmRsZSAoaW5UYW5nZW50IG9yIG91dFRhbmdlbnQpXHJcbiAgICAgKiBAcGFyYW0gb3V0cHV0cyBUaGUgYW5pbWF0aW9uIGRhdGEgYnkga2V5ZnJhbWVcclxuICAgICAqIEBwYXJhbSBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCBUaGUgdGFyZ2V0IGFuaW1hdGlvbiBjaGFubmVsXHJcbiAgICAgKiBAcGFyYW0gaW50ZXJwb2xhdGlvbiBUaGUgaW50ZXJwb2xhdGlvbiB0eXBlXHJcbiAgICAgKiBAcGFyYW0ga2V5RnJhbWUgVGhlIGtleSBmcmFtZSB3aXRoIHRoZSBhbmltYXRpb24gZGF0YVxyXG4gICAgICogQHBhcmFtIHVzZVF1YXRlcm5pb24gU3BlY2lmaWVzIGlmIHF1YXRlcm5pb25zIGFyZSB1c2VkXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIF9BZGRTcGxpbmVUYW5nZW50KFxyXG4gICAgICAgIHRhbmdlbnRUeXBlOiBfVGFuZ2VudFR5cGUsXHJcbiAgICAgICAgb3V0cHV0czogbnVtYmVyW11bXSxcclxuICAgICAgICBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aDogQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsXHJcbiAgICAgICAgaW50ZXJwb2xhdGlvbjogQW5pbWF0aW9uU2FtcGxlckludGVycG9sYXRpb24sXHJcbiAgICAgICAga2V5RnJhbWU6IElBbmltYXRpb25LZXksXHJcbiAgICAgICAgdXNlUXVhdGVybmlvbjogYm9vbGVhblxyXG4gICAgKSB7XHJcbiAgICAgICAgbGV0IHRhbmdlbnQ6IG51bWJlcltdO1xyXG4gICAgICAgIGNvbnN0IHRhbmdlbnRWYWx1ZTogVmVjdG9yMyB8IFF1YXRlcm5pb24gfCBudW1iZXIgPSB0YW5nZW50VHlwZSA9PT0gX1RhbmdlbnRUeXBlLklOVEFOR0VOVCA/IGtleUZyYW1lLmluVGFuZ2VudCA6IGtleUZyYW1lLm91dFRhbmdlbnQ7XHJcbiAgICAgICAgaWYgKGludGVycG9sYXRpb24gPT09IEFuaW1hdGlvblNhbXBsZXJJbnRlcnBvbGF0aW9uLkNVQklDU1BMSU5FKSB7XHJcbiAgICAgICAgICAgIGlmIChhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCA9PT0gQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGguUk9UQVRJT04pIHtcclxuICAgICAgICAgICAgICAgIGlmICh0YW5nZW50VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodXNlUXVhdGVybmlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YW5nZW50ID0gKHRhbmdlbnRWYWx1ZSBhcyBRdWF0ZXJuaW9uKS5hc0FycmF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXJyYXkgPSB0YW5nZW50VmFsdWUgYXMgVmVjdG9yMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFuZ2VudCA9IFF1YXRlcm5pb24uUm90YXRpb25ZYXdQaXRjaFJvbGwoYXJyYXkueSwgYXJyYXkueCwgYXJyYXkueikuYXNBcnJheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFuZ2VudCA9IFswLCAwLCAwLCAwXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCA9PT0gQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGguV0VJR0hUUykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRhbmdlbnRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhbmdlbnQgPSBbdGFuZ2VudFZhbHVlIGFzIG51bWJlcl07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhbmdlbnQgPSBbMF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGFuZ2VudFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFuZ2VudCA9ICh0YW5nZW50VmFsdWUgYXMgVmVjdG9yMykuYXNBcnJheSgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0YW5nZW50ID0gWzAsIDAsIDBdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBvdXRwdXRzLnB1c2godGFuZ2VudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBtaW5pbXVtIGFuZCBtYXhpbXVtIGtleSBmcmFtZXMnIGZyYW1lIHZhbHVlc1xyXG4gICAgICogQHBhcmFtIGtleUZyYW1lcyBhbmltYXRpb24ga2V5IGZyYW1lc1xyXG4gICAgICogQHJldHVybnMgdGhlIG1pbmltdW0gYW5kIG1heGltdW0ga2V5IGZyYW1lIHZhbHVlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIF9DYWxjdWxhdGVNaW5NYXhLZXlGcmFtZXMoa2V5RnJhbWVzOiBJQW5pbWF0aW9uS2V5W10pOiB7IG1pbjogbnVtYmVyOyBtYXg6IG51bWJlciB9IHtcclxuICAgICAgICBsZXQgbWluOiBudW1iZXIgPSBJbmZpbml0eTtcclxuICAgICAgICBsZXQgbWF4OiBudW1iZXIgPSAtSW5maW5pdHk7XHJcbiAgICAgICAga2V5RnJhbWVzLmZvckVhY2goZnVuY3Rpb24gKGtleUZyYW1lKSB7XHJcbiAgICAgICAgICAgIG1pbiA9IE1hdGgubWluKG1pbiwga2V5RnJhbWUuZnJhbWUpO1xyXG4gICAgICAgICAgICBtYXggPSBNYXRoLm1heChtYXgsIGtleUZyYW1lLmZyYW1lKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHsgbWluOiBtaW4sIG1heDogbWF4IH07XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW1hZ2VNaW1lVHlwZSB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgVG9vbHMgfSBmcm9tIFwiY29yZS9NaXNjL3Rvb2xzXCI7XHJcblxyXG5mdW5jdGlvbiBHZXRNaW1lVHlwZShmaWxlTmFtZTogc3RyaW5nKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcclxuICAgIGlmIChmaWxlTmFtZS5lbmRzV2l0aChcIi5nbGJcIikpIHtcclxuICAgICAgICByZXR1cm4gXCJtb2RlbC9nbHRmLWJpbmFyeVwiO1xyXG4gICAgfSBlbHNlIGlmIChmaWxlTmFtZS5lbmRzV2l0aChcIi5iaW5cIikpIHtcclxuICAgICAgICByZXR1cm4gXCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIjtcclxuICAgIH0gZWxzZSBpZiAoZmlsZU5hbWUuZW5kc1dpdGgoXCIuZ2x0ZlwiKSkge1xyXG4gICAgICAgIHJldHVybiBcIm1vZGVsL2dsdGYranNvblwiO1xyXG4gICAgfSBlbHNlIGlmIChmaWxlTmFtZS5lbmRzV2l0aChcIi5qcGVnXCIpIHx8IGZpbGVOYW1lLmVuZHNXaXRoKFwiLmpwZ1wiKSkge1xyXG4gICAgICAgIHJldHVybiBJbWFnZU1pbWVUeXBlLkpQRUc7XHJcbiAgICB9IGVsc2UgaWYgKGZpbGVOYW1lLmVuZHNXaXRoKFwiLnBuZ1wiKSkge1xyXG4gICAgICAgIHJldHVybiBJbWFnZU1pbWVUeXBlLlBORztcclxuICAgIH0gZWxzZSBpZiAoZmlsZU5hbWUuZW5kc1dpdGgoXCIud2VicFwiKSkge1xyXG4gICAgICAgIHJldHVybiBJbWFnZU1pbWVUeXBlLldFQlA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIENsYXNzIGZvciBob2xkaW5nIGFuZCBkb3dubG9hZGluZyBnbFRGIGZpbGUgZGF0YVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEdMVEZEYXRhIHtcclxuICAgIC8qKlxyXG4gICAgICogT2JqZWN0IHdoaWNoIGNvbnRhaW5zIHRoZSBmaWxlIG5hbWUgYXMgdGhlIGtleSBhbmQgaXRzIGRhdGEgYXMgdGhlIHZhbHVlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBmaWxlczogeyBbZmlsZU5hbWU6IHN0cmluZ106IHN0cmluZyB8IEJsb2IgfSA9IHt9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGRlcHJlY2F0ZWQgVXNlIGZpbGVzIGluc3RlYWRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBnbFRGRmlsZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsZXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEb3dubG9hZHMgdGhlIGdsVEYgZGF0YSBhcyBmaWxlcyBiYXNlZCBvbiB0aGVpciBuYW1lcyBhbmQgZGF0YVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZG93bmxvYWRGaWxlcygpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLmZpbGVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5maWxlc1trZXldO1xyXG4gICAgICAgICAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW3ZhbHVlXSwgeyB0eXBlOiBHZXRNaW1lVHlwZShrZXkpIH0pO1xyXG4gICAgICAgICAgICBUb29scy5Eb3dubG9hZChibG9iLCBrZXkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgdHlwZSB7XHJcbiAgICBJQnVmZmVyVmlldyxcclxuICAgIElBY2Nlc3NvcixcclxuICAgIElOb2RlLFxyXG4gICAgSVNjZW5lLFxyXG4gICAgSU1lc2gsXHJcbiAgICBJTWF0ZXJpYWwsXHJcbiAgICBJVGV4dHVyZSxcclxuICAgIElJbWFnZSxcclxuICAgIElTYW1wbGVyLFxyXG4gICAgSUFuaW1hdGlvbixcclxuICAgIElNZXNoUHJpbWl0aXZlLFxyXG4gICAgSUJ1ZmZlcixcclxuICAgIElHTFRGLFxyXG4gICAgSVRleHR1cmVJbmZvLFxyXG4gICAgSVNraW4sXHJcbiAgICBJQ2FtZXJhLFxyXG59IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgQWNjZXNzb3JDb21wb25lbnRUeXBlLCBBY2Nlc3NvclR5cGUsIENhbWVyYVR5cGUsIEltYWdlTWltZVR5cGUgfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcblxyXG5pbXBvcnQgdHlwZSB7IEZsb2F0QXJyYXksIEluZGljZXNBcnJheSwgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xyXG5pbXBvcnQgeyBUbXBWZWN0b3JzLCBRdWF0ZXJuaW9uLCBNYXRyaXggfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLnZlY3RvclwiO1xyXG5pbXBvcnQgeyBUb29scyB9IGZyb20gXCJjb3JlL01pc2MvdG9vbHNcIjtcclxuaW1wb3J0IHR5cGUgeyBCdWZmZXIgfSBmcm9tIFwiY29yZS9CdWZmZXJzL2J1ZmZlclwiO1xyXG5pbXBvcnQgeyBWZXJ0ZXhCdWZmZXIgfSBmcm9tIFwiY29yZS9CdWZmZXJzL2J1ZmZlclwiO1xyXG5pbXBvcnQgdHlwZSB7IE5vZGUgfSBmcm9tIFwiY29yZS9ub2RlXCI7XHJcbmltcG9ydCB7IFRyYW5zZm9ybU5vZGUgfSBmcm9tIFwiY29yZS9NZXNoZXMvdHJhbnNmb3JtTm9kZVwiO1xyXG5pbXBvcnQgdHlwZSB7IFN1Yk1lc2ggfSBmcm9tIFwiY29yZS9NZXNoZXMvc3ViTWVzaFwiO1xyXG5pbXBvcnQgeyBNZXNoIH0gZnJvbSBcImNvcmUvTWVzaGVzL21lc2hcIjtcclxuaW1wb3J0IHsgSW5zdGFuY2VkTWVzaCB9IGZyb20gXCJjb3JlL01lc2hlcy9pbnN0YW5jZWRNZXNoXCI7XHJcbmltcG9ydCB0eXBlIHsgQmFzZVRleHR1cmUgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvYmFzZVRleHR1cmVcIjtcclxuaW1wb3J0IHR5cGUgeyBUZXh0dXJlIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1RleHR1cmVzL3RleHR1cmVcIjtcclxuaW1wb3J0IHsgTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgRW5naW5lIH0gZnJvbSBcImNvcmUvRW5naW5lcy9lbmdpbmVcIjtcclxuaW1wb3J0IHR5cGUgeyBTY2VuZSB9IGZyb20gXCJjb3JlL3NjZW5lXCI7XHJcbmltcG9ydCB7IEVuZ2luZVN0b3JlIH0gZnJvbSBcImNvcmUvRW5naW5lcy9lbmdpbmVTdG9yZVwiO1xyXG5cclxuaW1wb3J0IHR5cGUgeyBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIgfSBmcm9tIFwiLi9nbFRGRXhwb3J0ZXJFeHRlbnNpb25cIjtcclxuaW1wb3J0IHsgR0xURk1hdGVyaWFsRXhwb3J0ZXIgfSBmcm9tIFwiLi9nbFRGTWF0ZXJpYWxFeHBvcnRlclwiO1xyXG5pbXBvcnQgdHlwZSB7IElFeHBvcnRPcHRpb25zIH0gZnJvbSBcIi4vZ2xURlNlcmlhbGl6ZXJcIjtcclxuaW1wb3J0IHsgR0xURkRhdGEgfSBmcm9tIFwiLi9nbFRGRGF0YVwiO1xyXG5pbXBvcnQge1xyXG4gICAgQXJlSW5kaWNlczMyQml0cyxcclxuICAgIENvbnZlcnRUb1JpZ2h0SGFuZGVkUG9zaXRpb24sXHJcbiAgICBDb252ZXJ0VG9SaWdodEhhbmRlZFJvdGF0aW9uLFxyXG4gICAgQ3JlYXRlQWNjZXNzb3IsXHJcbiAgICBDcmVhdGVCdWZmZXJWaWV3LFxyXG4gICAgRGF0YUFycmF5VG9VaW50OEFycmF5LFxyXG4gICAgR2V0QWNjZXNzb3JUeXBlLFxyXG4gICAgR2V0QXR0cmlidXRlVHlwZSxcclxuICAgIEdldE1pbk1heCxcclxuICAgIEdldFByaW1pdGl2ZU1vZGUsXHJcbiAgICBJbmRpY2VzQXJyYXlUb1VpbnQ4QXJyYXksXHJcbiAgICBJc05vb3BOb2RlLFxyXG4gICAgSXNUcmlhbmdsZUZpbGxNb2RlLFxyXG4gICAgSXNQYXJlbnRBZGRlZEJ5SW1wb3J0ZXIsXHJcbiAgICBDb252ZXJ0VG9SaWdodEhhbmRlZE5vZGUsXHJcbiAgICBSb3RhdGVOb2RlMTgwWSxcclxuICAgIEZsb2F0c05lZWQxNkJpdEludGVnZXIsXHJcbiAgICBJc1N0YW5kYXJkVmVydGV4QXR0cmlidXRlLFxyXG59IGZyb20gXCIuL2dsVEZVdGlsaXRpZXNcIjtcclxuaW1wb3J0IHsgRGF0YVdyaXRlciB9IGZyb20gXCIuL2RhdGFXcml0ZXJcIjtcclxuaW1wb3J0IHsgQ2FtZXJhIH0gZnJvbSBcImNvcmUvQ2FtZXJhcy9jYW1lcmFcIjtcclxuaW1wb3J0IHsgTXVsdGlNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9tdWx0aU1hdGVyaWFsXCI7XHJcbmltcG9ydCB7IFBCUk1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1BCUi9wYnJNYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBTdGFuZGFyZE1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL3N0YW5kYXJkTWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSBcImNvcmUvTWlzYy9sb2dnZXJcIjtcclxuaW1wb3J0IHsgRW51bWVyYXRlRmxvYXRWYWx1ZXMgfSBmcm9tIFwiY29yZS9CdWZmZXJzL2J1ZmZlclV0aWxzXCI7XHJcbmltcG9ydCB0eXBlIHsgQm9uZSwgU2tlbGV0b24gfSBmcm9tIFwiY29yZS9Cb25lc1wiO1xyXG5pbXBvcnQgeyBfR0xURkFuaW1hdGlvbiB9IGZyb20gXCIuL2dsVEZBbmltYXRpb25cIjtcclxuaW1wb3J0IHR5cGUgeyBNb3JwaFRhcmdldCB9IGZyb20gXCJjb3JlL01vcnBoXCI7XHJcbmltcG9ydCB7IEJ1aWxkTW9ycGhUYXJnZXRCdWZmZXJzIH0gZnJvbSBcIi4vZ2xURk1vcnBoVGFyZ2V0c1V0aWxpdGllc1wiO1xyXG5pbXBvcnQgdHlwZSB7IElNb3JwaFRhcmdldERhdGEgfSBmcm9tIFwiLi9nbFRGTW9ycGhUYXJnZXRzVXRpbGl0aWVzXCI7XHJcbmltcG9ydCB7IExpbmVzTWVzaCB9IGZyb20gXCJjb3JlL01lc2hlcy9saW5lc01lc2hcIjtcclxuaW1wb3J0IHsgQ29sb3IzLCBDb2xvcjQgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLmNvbG9yXCI7XHJcblxyXG5jbGFzcyBFeHBvcnRlclN0YXRlIHtcclxuICAgIC8vIEJhYnlsb24gaW5kaWNlcyBhcnJheSwgc3RhcnQsIGNvdW50LCBvZmZzZXQsIGZsaXAgLT4gZ2xURiBhY2Nlc3NvciBpbmRleFxyXG4gICAgcHJpdmF0ZSBfaW5kaWNlc0FjY2Vzc29yTWFwID0gbmV3IE1hcDxOdWxsYWJsZTxJbmRpY2VzQXJyYXk+LCBNYXA8bnVtYmVyLCBNYXA8bnVtYmVyLCBNYXA8bnVtYmVyLCBNYXA8Ym9vbGVhbiwgbnVtYmVyPj4+Pj4oKTtcclxuXHJcbiAgICAvLyBCYWJ5bG9uIGJ1ZmZlciAtPiBnbFRGIGJ1ZmZlciB2aWV3IGluZGV4XHJcbiAgICBwcml2YXRlIF92ZXJ0ZXhCdWZmZXJWaWV3TWFwID0gbmV3IE1hcDxCdWZmZXIsIG51bWJlcj4oKTtcclxuXHJcbiAgICAvLyBCYWJ5bG9uIHZlcnRleCBidWZmZXIsIHN0YXJ0LCBjb3VudCAtPiBnbFRGIGFjY2Vzc29yIGluZGV4XHJcbiAgICBwcml2YXRlIF92ZXJ0ZXhBY2Nlc3Nvck1hcCA9IG5ldyBNYXA8VmVydGV4QnVmZmVyLCBNYXA8bnVtYmVyLCBNYXA8bnVtYmVyLCBudW1iZXI+Pj4oKTtcclxuXHJcbiAgICBwcml2YXRlIF9yZW1hcHBlZEJ1ZmZlclZpZXcgPSBuZXcgTWFwPEJ1ZmZlciwgTWFwPFZlcnRleEJ1ZmZlciwgbnVtYmVyPj4oKTtcclxuXHJcbiAgICBwcml2YXRlIF9tZXNoTW9ycGhUYXJnZXRNYXAgPSBuZXcgTWFwPE1lc2gsIElNb3JwaFRhcmdldERhdGFbXT4oKTtcclxuXHJcbiAgICBwcml2YXRlIF92ZXJ0ZXhNYXBDb2xvckFscGhhID0gbmV3IE1hcDxWZXJ0ZXhCdWZmZXIsIGJvb2xlYW4+KCk7XHJcblxyXG4gICAgcHJpdmF0ZSBfZXhwb3J0ZWROb2RlcyA9IG5ldyBTZXQ8Tm9kZT4oKTtcclxuXHJcbiAgICAvLyBCYWJ5bG9uIG1lc2ggLT4gZ2xURiBtZXNoIGluZGV4XHJcbiAgICBwcml2YXRlIF9tZXNoTWFwID0gbmV3IE1hcDxNZXNoLCBudW1iZXI+KCk7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGNvbnZlcnRUb1JpZ2h0SGFuZGVkOiBib29sZWFuLCB3YXNBZGRlZEJ5Tm9vcE5vZGU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmNvbnZlcnRUb1JpZ2h0SGFuZGVkID0gY29udmVydFRvUmlnaHRIYW5kZWQ7XHJcbiAgICAgICAgdGhpcy53YXNBZGRlZEJ5Tm9vcE5vZGUgPSB3YXNBZGRlZEJ5Tm9vcE5vZGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlYWRvbmx5IGNvbnZlcnRUb1JpZ2h0SGFuZGVkOiBib29sZWFuO1xyXG5cclxuICAgIHB1YmxpYyByZWFkb25seSB3YXNBZGRlZEJ5Tm9vcE5vZGU6IGJvb2xlYW47XHJcblxyXG4gICAgLy8gT25seSB1c2VkIHdoZW4gY29udmVydFRvUmlnaHRIYW5kZWQgaXMgdHJ1ZS5cclxuICAgIHB1YmxpYyByZWFkb25seSBjb252ZXJ0ZWRUb1JpZ2h0SGFuZGVkQnVmZmVycyA9IG5ldyBNYXA8QnVmZmVyLCBVaW50OEFycmF5PigpO1xyXG5cclxuICAgIHB1YmxpYyBnZXRJbmRpY2VzQWNjZXNzb3IoaW5kaWNlczogTnVsbGFibGU8SW5kaWNlc0FycmF5Piwgc3RhcnQ6IG51bWJlciwgY291bnQ6IG51bWJlciwgb2Zmc2V0OiBudW1iZXIsIGZsaXA6IGJvb2xlYW4pOiBudW1iZXIgfCB1bmRlZmluZWQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbmRpY2VzQWNjZXNzb3JNYXAuZ2V0KGluZGljZXMpPy5nZXQoc3RhcnQpPy5nZXQoY291bnQpPy5nZXQob2Zmc2V0KT8uZ2V0KGZsaXApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRJbmRpY2VzQWNjZXNzb3IoaW5kaWNlczogTnVsbGFibGU8SW5kaWNlc0FycmF5Piwgc3RhcnQ6IG51bWJlciwgY291bnQ6IG51bWJlciwgb2Zmc2V0OiBudW1iZXIsIGZsaXA6IGJvb2xlYW4sIGFjY2Vzc29ySW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGxldCBtYXAxID0gdGhpcy5faW5kaWNlc0FjY2Vzc29yTWFwLmdldChpbmRpY2VzKTtcclxuICAgICAgICBpZiAoIW1hcDEpIHtcclxuICAgICAgICAgICAgbWFwMSA9IG5ldyBNYXA8bnVtYmVyLCBNYXA8bnVtYmVyLCBNYXA8bnVtYmVyLCBNYXA8Ym9vbGVhbiwgbnVtYmVyPj4+PigpO1xyXG4gICAgICAgICAgICB0aGlzLl9pbmRpY2VzQWNjZXNzb3JNYXAuc2V0KGluZGljZXMsIG1hcDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG1hcDIgPSBtYXAxLmdldChzdGFydCk7XHJcbiAgICAgICAgaWYgKCFtYXAyKSB7XHJcbiAgICAgICAgICAgIG1hcDIgPSBuZXcgTWFwPG51bWJlciwgTWFwPG51bWJlciwgTWFwPGJvb2xlYW4sIG51bWJlcj4+PigpO1xyXG4gICAgICAgICAgICBtYXAxLnNldChzdGFydCwgbWFwMik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgbWFwMyA9IG1hcDIuZ2V0KGNvdW50KTtcclxuICAgICAgICBpZiAoIW1hcDMpIHtcclxuICAgICAgICAgICAgbWFwMyA9IG5ldyBNYXA8bnVtYmVyLCBNYXA8Ym9vbGVhbiwgbnVtYmVyPj4oKTtcclxuICAgICAgICAgICAgbWFwMi5zZXQoY291bnQsIG1hcDMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG1hcDQgPSBtYXAzLmdldChvZmZzZXQpO1xyXG4gICAgICAgIGlmICghbWFwNCkge1xyXG4gICAgICAgICAgICBtYXA0ID0gbmV3IE1hcDxib29sZWFuLCBudW1iZXI+KCk7XHJcbiAgICAgICAgICAgIG1hcDMuc2V0KG9mZnNldCwgbWFwNCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtYXA0LnNldChmbGlwLCBhY2Nlc3NvckluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcHVzaEV4cG9ydGVkTm9kZShub2RlOiBOb2RlKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9leHBvcnRlZE5vZGVzLmhhcyhub2RlKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9leHBvcnRlZE5vZGVzLmFkZChub2RlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldE5vZGVzU2V0KCk6IFNldDxOb2RlPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2V4cG9ydGVkTm9kZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFZlcnRleEJ1ZmZlclZpZXcoYnVmZmVyOiBCdWZmZXIpOiBudW1iZXIgfCB1bmRlZmluZWQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92ZXJ0ZXhCdWZmZXJWaWV3TWFwLmdldChidWZmZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRWZXJ0ZXhCdWZmZXJWaWV3KGJ1ZmZlcjogQnVmZmVyLCBidWZmZXJWaWV3SW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3ZlcnRleEJ1ZmZlclZpZXdNYXAuc2V0KGJ1ZmZlciwgYnVmZmVyVmlld0luZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0UmVtYXBwZWRCdWZmZXJWaWV3KGJ1ZmZlcjogQnVmZmVyLCB2ZXJ0ZXhCdWZmZXI6IFZlcnRleEJ1ZmZlciwgYnVmZmVyVmlld0luZGV4OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9yZW1hcHBlZEJ1ZmZlclZpZXcuc2V0KGJ1ZmZlciwgbmV3IE1hcDxWZXJ0ZXhCdWZmZXIsIG51bWJlcj4oKSk7XHJcbiAgICAgICAgdGhpcy5fcmVtYXBwZWRCdWZmZXJWaWV3LmdldChidWZmZXIpIS5zZXQodmVydGV4QnVmZmVyLCBidWZmZXJWaWV3SW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRSZW1hcHBlZEJ1ZmZlclZpZXcoYnVmZmVyOiBCdWZmZXIsIHZlcnRleEJ1ZmZlcjogVmVydGV4QnVmZmVyKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcmVtYXBwZWRCdWZmZXJWaWV3LmdldChidWZmZXIpPy5nZXQodmVydGV4QnVmZmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0VmVydGV4QWNjZXNzb3IodmVydGV4QnVmZmVyOiBWZXJ0ZXhCdWZmZXIsIHN0YXJ0OiBudW1iZXIsIGNvdW50OiBudW1iZXIpOiBudW1iZXIgfCB1bmRlZmluZWQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92ZXJ0ZXhBY2Nlc3Nvck1hcC5nZXQodmVydGV4QnVmZmVyKT8uZ2V0KHN0YXJ0KT8uZ2V0KGNvdW50KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0VmVydGV4QWNjZXNzb3IodmVydGV4QnVmZmVyOiBWZXJ0ZXhCdWZmZXIsIHN0YXJ0OiBudW1iZXIsIGNvdW50OiBudW1iZXIsIGFjY2Vzc29ySW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGxldCBtYXAxID0gdGhpcy5fdmVydGV4QWNjZXNzb3JNYXAuZ2V0KHZlcnRleEJ1ZmZlcik7XHJcbiAgICAgICAgaWYgKCFtYXAxKSB7XHJcbiAgICAgICAgICAgIG1hcDEgPSBuZXcgTWFwPG51bWJlciwgTWFwPG51bWJlciwgbnVtYmVyPj4oKTtcclxuICAgICAgICAgICAgdGhpcy5fdmVydGV4QWNjZXNzb3JNYXAuc2V0KHZlcnRleEJ1ZmZlciwgbWFwMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgbWFwMiA9IG1hcDEuZ2V0KHN0YXJ0KTtcclxuICAgICAgICBpZiAoIW1hcDIpIHtcclxuICAgICAgICAgICAgbWFwMiA9IG5ldyBNYXA8bnVtYmVyLCBudW1iZXI+KCk7XHJcbiAgICAgICAgICAgIG1hcDEuc2V0KHN0YXJ0LCBtYXAyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1hcDIuc2V0KGNvdW50LCBhY2Nlc3NvckluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGFzVmVydGV4Q29sb3JBbHBoYSh2ZXJ0ZXhCdWZmZXI6IFZlcnRleEJ1ZmZlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92ZXJ0ZXhNYXBDb2xvckFscGhhLmdldCh2ZXJ0ZXhCdWZmZXIpIHx8IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRIYXNWZXJ0ZXhDb2xvckFscGhhKHZlcnRleEJ1ZmZlcjogVmVydGV4QnVmZmVyLCBoYXNBbHBoYTogYm9vbGVhbikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92ZXJ0ZXhNYXBDb2xvckFscGhhLnNldCh2ZXJ0ZXhCdWZmZXIsIGhhc0FscGhhKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0TWVzaChtZXNoOiBNZXNoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWVzaE1hcC5nZXQobWVzaCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldE1lc2gobWVzaDogTWVzaCwgbWVzaEluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9tZXNoTWFwLnNldChtZXNoLCBtZXNoSW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBiaW5kTW9ycGhEYXRhVG9NZXNoKG1lc2g6IE1lc2gsIG1vcnBoRGF0YTogSU1vcnBoVGFyZ2V0RGF0YSkge1xyXG4gICAgICAgIGNvbnN0IG1vcnBoVGFyZ2V0cyA9IHRoaXMuX21lc2hNb3JwaFRhcmdldE1hcC5nZXQobWVzaCkgfHwgW107XHJcbiAgICAgICAgdGhpcy5fbWVzaE1vcnBoVGFyZ2V0TWFwLnNldChtZXNoLCBtb3JwaFRhcmdldHMpO1xyXG4gICAgICAgIGlmIChtb3JwaFRhcmdldHMuaW5kZXhPZihtb3JwaERhdGEpID09PSAtMSkge1xyXG4gICAgICAgICAgICBtb3JwaFRhcmdldHMucHVzaChtb3JwaERhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0TW9ycGhUYXJnZXRzRnJvbU1lc2gobWVzaDogTWVzaCk6IElNb3JwaFRhcmdldERhdGFbXSB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21lc2hNb3JwaFRhcmdldE1hcC5nZXQobWVzaCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuZXhwb3J0IGNsYXNzIEdMVEZFeHBvcnRlciB7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgX2dsVEY6IElHTFRGID0ge1xyXG4gICAgICAgIGFzc2V0OiB7IGdlbmVyYXRvcjogYEJhYnlsb24uanMgdiR7RW5naW5lLlZlcnNpb259YCwgdmVyc2lvbjogXCIyLjBcIiB9LFxyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgX2FuaW1hdGlvbnM6IElBbmltYXRpb25bXSA9IFtdO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IF9hY2Nlc3NvcnM6IElBY2Nlc3NvcltdID0gW107XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgX2J1ZmZlclZpZXdzOiBJQnVmZmVyVmlld1tdID0gW107XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgX2NhbWVyYXM6IElDYW1lcmFbXSA9IFtdO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IF9pbWFnZXM6IElJbWFnZVtdID0gW107XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgX21hdGVyaWFsczogSU1hdGVyaWFsW10gPSBbXTtcclxuICAgIHB1YmxpYyByZWFkb25seSBfbWVzaGVzOiBJTWVzaFtdID0gW107XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgX25vZGVzOiBJTm9kZVtdID0gW107XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgX3NhbXBsZXJzOiBJU2FtcGxlcltdID0gW107XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgX3NjZW5lczogSVNjZW5lW10gPSBbXTtcclxuICAgIHB1YmxpYyByZWFkb25seSBfc2tpbnM6IElTa2luW10gPSBbXTtcclxuICAgIHB1YmxpYyByZWFkb25seSBfdGV4dHVyZXM6IElUZXh0dXJlW10gPSBbXTtcclxuXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgX2JhYnlsb25TY2VuZTogU2NlbmU7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgX2ltYWdlRGF0YTogeyBbZmlsZU5hbWU6IHN0cmluZ106IHsgZGF0YTogQXJyYXlCdWZmZXI7IG1pbWVUeXBlOiBJbWFnZU1pbWVUeXBlIH0gfSA9IHt9O1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfb3JkZXJlZEltYWdlRGF0YTogQXJyYXk8eyBkYXRhOiBBcnJheUJ1ZmZlcjsgbWltZVR5cGU6IEltYWdlTWltZVR5cGUgfT4gPSBbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEJha2VkIGFuaW1hdGlvbiBzYW1wbGUgcmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9hbmltYXRpb25TYW1wbGVSYXRlOiBudW1iZXI7XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfb3B0aW9uczogUmVxdWlyZWQ8SUV4cG9ydE9wdGlvbnM+O1xyXG5cclxuICAgIHB1YmxpYyByZWFkb25seSBfbWF0ZXJpYWxFeHBvcnRlciA9IG5ldyBHTFRGTWF0ZXJpYWxFeHBvcnRlcih0aGlzKTtcclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9leHRlbnNpb25zOiB7IFtuYW1lOiBzdHJpbmddOiBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIgfSA9IHt9O1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2RhdGFXcml0ZXIgPSBuZXcgRGF0YVdyaXRlcig0KTtcclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9zaG91bGRFeHBvcnROb2RlTWFwID0gbmV3IE1hcDxOb2RlLCBib29sZWFuPigpO1xyXG5cclxuICAgIC8vIEJhYnlsb24gbm9kZSAtPiBnbFRGIG5vZGUgaW5kZXhcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX25vZGVNYXAgPSBuZXcgTWFwPE5vZGUsIG51bWJlcj4oKTtcclxuXHJcbiAgICAvLyBCYWJ5bG9uIG1hdGVyaWFsIC0+IGdsVEYgbWF0ZXJpYWwgaW5kZXhcclxuICAgIHB1YmxpYyByZWFkb25seSBfbWF0ZXJpYWxNYXAgPSBuZXcgTWFwPE1hdGVyaWFsLCBudW1iZXI+KCk7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9jYW1lcmFzTWFwID0gbmV3IE1hcDxDYW1lcmEsIElDYW1lcmE+KCk7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9ub2Rlc0NhbWVyYU1hcCA9IG5ldyBNYXA8SUNhbWVyYSwgSU5vZGVbXT4oKTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX3NraW5NYXAgPSBuZXcgTWFwPFNrZWxldG9uLCBJU2tpbj4oKTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX25vZGVzU2tpbk1hcCA9IG5ldyBNYXA8SVNraW4sIElOb2RlW10+KCk7XHJcblxyXG4gICAgLy8gQSBtYXRlcmlhbCBpbiB0aGlzIHNldCByZXF1aXJlcyBVVnNcclxuICAgIHB1YmxpYyByZWFkb25seSBfbWF0ZXJpYWxOZWVkc1VWc1NldCA9IG5ldyBTZXQ8TWF0ZXJpYWw+KCk7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgX0V4dGVuc2lvbk5hbWVzID0gbmV3IEFycmF5PHN0cmluZz4oKTtcclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IF9FeHRlbnNpb25GYWN0b3JpZXM6IHsgW25hbWU6IHN0cmluZ106IChleHBvcnRlcjogR0xURkV4cG9ydGVyKSA9PiBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIgfSA9IHt9O1xyXG5cclxuICAgIHByaXZhdGUgX2FwcGx5RXh0ZW5zaW9uPFQ+KFxyXG4gICAgICAgIG5vZGU6IFQsXHJcbiAgICAgICAgZXh0ZW5zaW9uczogSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyW10sXHJcbiAgICAgICAgaW5kZXg6IG51bWJlcixcclxuICAgICAgICBhY3Rpb25Bc3luYzogKGV4dGVuc2lvbjogSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyLCBub2RlOiBUKSA9PiBQcm9taXNlPE51bGxhYmxlPFQ+PiB8IHVuZGVmaW5lZFxyXG4gICAgKTogUHJvbWlzZTxOdWxsYWJsZTxUPj4ge1xyXG4gICAgICAgIGlmIChpbmRleCA+PSBleHRlbnNpb25zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5vZGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgY3VycmVudFByb21pc2UgPSBhY3Rpb25Bc3luYyhleHRlbnNpb25zW2luZGV4XSwgbm9kZSk7XHJcblxyXG4gICAgICAgIGlmICghY3VycmVudFByb21pc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FwcGx5RXh0ZW5zaW9uKG5vZGUsIGV4dGVuc2lvbnMsIGluZGV4ICsgMSwgYWN0aW9uQXN5bmMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRQcm9taXNlLnRoZW4oKG5ld05vZGUpID0+IChuZXdOb2RlID8gdGhpcy5fYXBwbHlFeHRlbnNpb24obmV3Tm9kZSwgZXh0ZW5zaW9ucywgaW5kZXggKyAxLCBhY3Rpb25Bc3luYykgOiBudWxsKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfYXBwbHlFeHRlbnNpb25zPFQ+KG5vZGU6IFQsIGFjdGlvbkFzeW5jOiAoZXh0ZW5zaW9uOiBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIsIG5vZGU6IFQpID0+IFByb21pc2U8TnVsbGFibGU8VD4+IHwgdW5kZWZpbmVkKTogUHJvbWlzZTxOdWxsYWJsZTxUPj4ge1xyXG4gICAgICAgIGNvbnN0IGV4dGVuc2lvbnM6IElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMltdID0gW107XHJcbiAgICAgICAgZm9yIChjb25zdCBuYW1lIG9mIEdMVEZFeHBvcnRlci5fRXh0ZW5zaW9uTmFtZXMpIHtcclxuICAgICAgICAgICAgZXh0ZW5zaW9ucy5wdXNoKHRoaXMuX2V4dGVuc2lvbnNbbmFtZV0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwcGx5RXh0ZW5zaW9uKG5vZGUsIGV4dGVuc2lvbnMsIDAsIGFjdGlvbkFzeW5jKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgX2V4dGVuc2lvbnNQcmVFeHBvcnRUZXh0dXJlQXN5bmMoY29udGV4dDogc3RyaW5nLCBiYWJ5bG9uVGV4dHVyZTogVGV4dHVyZSwgbWltZVR5cGU6IEltYWdlTWltZVR5cGUpOiBQcm9taXNlPE51bGxhYmxlPEJhc2VUZXh0dXJlPj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hcHBseUV4dGVuc2lvbnMoYmFieWxvblRleHR1cmUsIChleHRlbnNpb24sIG5vZGUpID0+IGV4dGVuc2lvbi5wcmVFeHBvcnRUZXh0dXJlQXN5bmMgJiYgZXh0ZW5zaW9uLnByZUV4cG9ydFRleHR1cmVBc3luYyhjb250ZXh0LCBub2RlLCBtaW1lVHlwZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBfZXh0ZW5zaW9uc1Bvc3RFeHBvcnRNZXNoUHJpbWl0aXZlQXN5bmMoY29udGV4dDogc3RyaW5nLCBtZXNoUHJpbWl0aXZlOiBJTWVzaFByaW1pdGl2ZSwgYmFieWxvblN1Yk1lc2g6IFN1Yk1lc2gpOiBQcm9taXNlPE51bGxhYmxlPElNZXNoUHJpbWl0aXZlPj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hcHBseUV4dGVuc2lvbnMoXHJcbiAgICAgICAgICAgIG1lc2hQcmltaXRpdmUsXHJcbiAgICAgICAgICAgIChleHRlbnNpb24sIG5vZGUpID0+IGV4dGVuc2lvbi5wb3N0RXhwb3J0TWVzaFByaW1pdGl2ZUFzeW5jICYmIGV4dGVuc2lvbi5wb3N0RXhwb3J0TWVzaFByaW1pdGl2ZUFzeW5jKGNvbnRleHQsIG5vZGUsIGJhYnlsb25TdWJNZXNoKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIF9leHRlbnNpb25zUG9zdEV4cG9ydE5vZGVBc3luYyhjb250ZXh0OiBzdHJpbmcsIG5vZGU6IElOb2RlLCBiYWJ5bG9uTm9kZTogTm9kZSwgbm9kZU1hcDogTWFwPE5vZGUsIG51bWJlcj4sIGNvbnZlcnRUb1JpZ2h0SGFuZGVkOiBib29sZWFuKTogUHJvbWlzZTxOdWxsYWJsZTxJTm9kZT4+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXBwbHlFeHRlbnNpb25zKFxyXG4gICAgICAgICAgICBub2RlLFxyXG4gICAgICAgICAgICAoZXh0ZW5zaW9uLCBub2RlKSA9PiBleHRlbnNpb24ucG9zdEV4cG9ydE5vZGVBc3luYyAmJiBleHRlbnNpb24ucG9zdEV4cG9ydE5vZGVBc3luYyhjb250ZXh0LCBub2RlLCBiYWJ5bG9uTm9kZSwgbm9kZU1hcCwgY29udmVydFRvUmlnaHRIYW5kZWQsIHRoaXMuX2RhdGFXcml0ZXIpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgX2V4dGVuc2lvbnNQb3N0RXhwb3J0TWF0ZXJpYWxBc3luYyhjb250ZXh0OiBzdHJpbmcsIG1hdGVyaWFsOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBQcm9taXNlPE51bGxhYmxlPElNYXRlcmlhbD4+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXBwbHlFeHRlbnNpb25zKG1hdGVyaWFsLCAoZXh0ZW5zaW9uLCBub2RlKSA9PiBleHRlbnNpb24ucG9zdEV4cG9ydE1hdGVyaWFsQXN5bmMgJiYgZXh0ZW5zaW9uLnBvc3RFeHBvcnRNYXRlcmlhbEFzeW5jKGNvbnRleHQsIG5vZGUsIGJhYnlsb25NYXRlcmlhbCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBfZXh0ZW5zaW9uc1Bvc3RFeHBvcnRNYXRlcmlhbEFkZGl0aW9uYWxUZXh0dXJlcyhjb250ZXh0OiBzdHJpbmcsIG1hdGVyaWFsOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBCYXNlVGV4dHVyZVtdIHtcclxuICAgICAgICBjb25zdCBvdXRwdXQ6IEJhc2VUZXh0dXJlW10gPSBbXTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBuYW1lIG9mIEdMVEZFeHBvcnRlci5fRXh0ZW5zaW9uTmFtZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgZXh0ZW5zaW9uID0gdGhpcy5fZXh0ZW5zaW9uc1tuYW1lXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChleHRlbnNpb24ucG9zdEV4cG9ydE1hdGVyaWFsQWRkaXRpb25hbFRleHR1cmVzKSB7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXQucHVzaCguLi5leHRlbnNpb24ucG9zdEV4cG9ydE1hdGVyaWFsQWRkaXRpb25hbFRleHR1cmVzKGNvbnRleHQsIG1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWwpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgX2V4dGVuc2lvbnNQb3N0RXhwb3J0VGV4dHVyZXMoY29udGV4dDogc3RyaW5nLCB0ZXh0dXJlSW5mbzogSVRleHR1cmVJbmZvLCBiYWJ5bG9uVGV4dHVyZTogQmFzZVRleHR1cmUpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGNvbnN0IG5hbWUgb2YgR0xURkV4cG9ydGVyLl9FeHRlbnNpb25OYW1lcykge1xyXG4gICAgICAgICAgICBjb25zdCBleHRlbnNpb24gPSB0aGlzLl9leHRlbnNpb25zW25hbWVdO1xyXG5cclxuICAgICAgICAgICAgaWYgKGV4dGVuc2lvbi5wb3N0RXhwb3J0VGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgZXh0ZW5zaW9uLnBvc3RFeHBvcnRUZXh0dXJlKGNvbnRleHQsIHRleHR1cmVJbmZvLCBiYWJ5bG9uVGV4dHVyZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZm9yRWFjaEV4dGVuc2lvbnMoYWN0aW9uOiAoZXh0ZW5zaW9uOiBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGNvbnN0IG5hbWUgb2YgR0xURkV4cG9ydGVyLl9FeHRlbnNpb25OYW1lcykge1xyXG4gICAgICAgICAgICBjb25zdCBleHRlbnNpb24gPSB0aGlzLl9leHRlbnNpb25zW25hbWVdO1xyXG4gICAgICAgICAgICBpZiAoZXh0ZW5zaW9uLmVuYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbihleHRlbnNpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2V4dGVuc2lvbnNPbkV4cG9ydGluZygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9mb3JFYWNoRXh0ZW5zaW9ucygoZXh0ZW5zaW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChleHRlbnNpb24ud2FzVXNlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZ2xURi5leHRlbnNpb25zVXNlZCB8fD0gW107XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fZ2xURi5leHRlbnNpb25zVXNlZC5pbmRleE9mKGV4dGVuc2lvbi5uYW1lKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9nbFRGLmV4dGVuc2lvbnNVc2VkLnB1c2goZXh0ZW5zaW9uLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChleHRlbnNpb24ucmVxdWlyZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9nbFRGLmV4dGVuc2lvbnNSZXF1aXJlZCB8fD0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2dsVEYuZXh0ZW5zaW9uc1JlcXVpcmVkLmluZGV4T2YoZXh0ZW5zaW9uLm5hbWUpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9nbFRGLmV4dGVuc2lvbnNSZXF1aXJlZC5wdXNoKGV4dGVuc2lvbi5uYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5fZ2xURi5leHRlbnNpb25zIHx8PSB7fTtcclxuICAgICAgICAgICAgICAgIGlmIChleHRlbnNpb24ub25FeHBvcnRpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICBleHRlbnNpb24ub25FeHBvcnRpbmcoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2xvYWRFeHRlbnNpb25zKCk6IHZvaWQge1xyXG4gICAgICAgIGZvciAoY29uc3QgbmFtZSBvZiBHTFRGRXhwb3J0ZXIuX0V4dGVuc2lvbk5hbWVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IEdMVEZFeHBvcnRlci5fRXh0ZW5zaW9uRmFjdG9yaWVzW25hbWVdKHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLl9leHRlbnNpb25zW25hbWVdID0gZXh0ZW5zaW9uO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoYmFieWxvblNjZW5lOiBOdWxsYWJsZTxTY2VuZT4gPSBFbmdpbmVTdG9yZS5MYXN0Q3JlYXRlZFNjZW5lLCBvcHRpb25zPzogSUV4cG9ydE9wdGlvbnMpIHtcclxuICAgICAgICBpZiAoIWJhYnlsb25TY2VuZSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBzY2VuZSBhdmFpbGFibGUgdG8gZXhwb3J0XCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fYmFieWxvblNjZW5lID0gYmFieWxvblNjZW5lO1xyXG5cclxuICAgICAgICB0aGlzLl9vcHRpb25zID0ge1xyXG4gICAgICAgICAgICBzaG91bGRFeHBvcnROb2RlOiAoKSA9PiB0cnVlLFxyXG4gICAgICAgICAgICBzaG91bGRFeHBvcnRBbmltYXRpb246ICgpID0+IHRydWUsXHJcbiAgICAgICAgICAgIG1ldGFkYXRhU2VsZWN0b3I6IChtZXRhZGF0YSkgPT4gbWV0YWRhdGEsXHJcbiAgICAgICAgICAgIGFuaW1hdGlvblNhbXBsZVJhdGU6IDEgLyA2MCxcclxuICAgICAgICAgICAgZXhwb3J0V2l0aG91dFdhaXRpbmdGb3JTY2VuZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGV4cG9ydFVudXNlZFVWczogZmFsc2UsXHJcbiAgICAgICAgICAgIHJlbW92ZU5vb3BSb290Tm9kZXM6IHRydWUsXHJcbiAgICAgICAgICAgIGluY2x1ZGVDb29yZGluYXRlU3lzdGVtQ29udmVyc2lvbk5vZGVzOiBmYWxzZSxcclxuICAgICAgICAgICAgLi4ub3B0aW9ucyxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLl9sb2FkRXh0ZW5zaW9ucygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuX2V4dGVuc2lvbnMpIHtcclxuICAgICAgICAgICAgY29uc3QgZXh0ZW5zaW9uID0gdGhpcy5fZXh0ZW5zaW9uc1trZXldO1xyXG4gICAgICAgICAgICBleHRlbnNpb24uZGlzcG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IG9wdGlvbnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX29wdGlvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBSZWdpc3RlckV4dGVuc2lvbihuYW1lOiBzdHJpbmcsIGZhY3Rvcnk6IChleHBvcnRlcjogR0xURkV4cG9ydGVyKSA9PiBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIpOiB2b2lkIHtcclxuICAgICAgICBpZiAoR0xURkV4cG9ydGVyLlVucmVnaXN0ZXJFeHRlbnNpb24obmFtZSkpIHtcclxuICAgICAgICAgICAgVG9vbHMuV2FybihgRXh0ZW5zaW9uIHdpdGggdGhlIG5hbWUgJHtuYW1lfSBhbHJlYWR5IGV4aXN0c2ApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgR0xURkV4cG9ydGVyLl9FeHRlbnNpb25GYWN0b3JpZXNbbmFtZV0gPSBmYWN0b3J5O1xyXG4gICAgICAgIEdMVEZFeHBvcnRlci5fRXh0ZW5zaW9uTmFtZXMucHVzaChuYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIFVucmVnaXN0ZXJFeHRlbnNpb24obmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKCFHTFRGRXhwb3J0ZXIuX0V4dGVuc2lvbkZhY3Rvcmllc1tuYW1lXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlbGV0ZSBHTFRGRXhwb3J0ZXIuX0V4dGVuc2lvbkZhY3Rvcmllc1tuYW1lXTtcclxuXHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBHTFRGRXhwb3J0ZXIuX0V4dGVuc2lvbk5hbWVzLmluZGV4T2YobmFtZSk7XHJcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICBHTFRGRXhwb3J0ZXIuX0V4dGVuc2lvbk5hbWVzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9nZW5lcmF0ZUpTT04oc2hvdWxkVXNlR2xiOiBib29sZWFuLCBidWZmZXJCeXRlTGVuZ3RoOiBudW1iZXIsIGZpbGVOYW1lPzogc3RyaW5nLCBwcmV0dHlQcmludD86IGJvb2xlYW4pOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IGJ1ZmZlcjogSUJ1ZmZlciA9IHsgYnl0ZUxlbmd0aDogYnVmZmVyQnl0ZUxlbmd0aCB9O1xyXG4gICAgICAgIGxldCBpbWFnZU5hbWU6IHN0cmluZztcclxuICAgICAgICBsZXQgaW1hZ2VEYXRhOiB7IGRhdGE6IEFycmF5QnVmZmVyOyBtaW1lVHlwZTogSW1hZ2VNaW1lVHlwZSB9O1xyXG4gICAgICAgIGxldCBidWZmZXJWaWV3OiBJQnVmZmVyVmlldztcclxuICAgICAgICBsZXQgYnl0ZU9mZnNldDogbnVtYmVyID0gYnVmZmVyQnl0ZUxlbmd0aDtcclxuXHJcbiAgICAgICAgaWYgKGJ1ZmZlci5ieXRlTGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2dsVEYuYnVmZmVycyA9IFtidWZmZXJdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fbm9kZXMgJiYgdGhpcy5fbm9kZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2dsVEYubm9kZXMgPSB0aGlzLl9ub2RlcztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX21lc2hlcyAmJiB0aGlzLl9tZXNoZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2dsVEYubWVzaGVzID0gdGhpcy5fbWVzaGVzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fc2NlbmVzICYmIHRoaXMuX3NjZW5lcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5fZ2xURi5zY2VuZXMgPSB0aGlzLl9zY2VuZXM7XHJcbiAgICAgICAgICAgIHRoaXMuX2dsVEYuc2NlbmUgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fY2FtZXJhcyAmJiB0aGlzLl9jYW1lcmFzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLl9nbFRGLmNhbWVyYXMgPSB0aGlzLl9jYW1lcmFzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fYnVmZmVyVmlld3MgJiYgdGhpcy5fYnVmZmVyVmlld3MubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2dsVEYuYnVmZmVyVmlld3MgPSB0aGlzLl9idWZmZXJWaWV3cztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX2FjY2Vzc29ycyAmJiB0aGlzLl9hY2Nlc3NvcnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2dsVEYuYWNjZXNzb3JzID0gdGhpcy5fYWNjZXNzb3JzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fYW5pbWF0aW9ucyAmJiB0aGlzLl9hbmltYXRpb25zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLl9nbFRGLmFuaW1hdGlvbnMgPSB0aGlzLl9hbmltYXRpb25zO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fbWF0ZXJpYWxzICYmIHRoaXMuX21hdGVyaWFscy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5fZ2xURi5tYXRlcmlhbHMgPSB0aGlzLl9tYXRlcmlhbHM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl90ZXh0dXJlcyAmJiB0aGlzLl90ZXh0dXJlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5fZ2xURi50ZXh0dXJlcyA9IHRoaXMuX3RleHR1cmVzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fc2FtcGxlcnMgJiYgdGhpcy5fc2FtcGxlcnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2dsVEYuc2FtcGxlcnMgPSB0aGlzLl9zYW1wbGVycztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX3NraW5zICYmIHRoaXMuX3NraW5zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLl9nbFRGLnNraW5zID0gdGhpcy5fc2tpbnM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9pbWFnZXMgJiYgdGhpcy5faW1hZ2VzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBpZiAoIXNob3VsZFVzZUdsYikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZ2xURi5pbWFnZXMgPSB0aGlzLl9pbWFnZXM7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9nbFRGLmltYWdlcyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX2ltYWdlcy5mb3JFYWNoKChpbWFnZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbWFnZS51cmkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VEYXRhID0gdGhpcy5faW1hZ2VEYXRhW2ltYWdlLnVyaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX29yZGVyZWRJbWFnZURhdGEucHVzaChpbWFnZURhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBidWZmZXJWaWV3ID0gQ3JlYXRlQnVmZmVyVmlldygwLCBieXRlT2Zmc2V0LCBpbWFnZURhdGEuZGF0YS5ieXRlTGVuZ3RoLCB1bmRlZmluZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBieXRlT2Zmc2V0ICs9IGltYWdlRGF0YS5kYXRhLmJ5dGVMZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2J1ZmZlclZpZXdzLnB1c2goYnVmZmVyVmlldyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlLmJ1ZmZlclZpZXcgPSB0aGlzLl9idWZmZXJWaWV3cy5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZS5uYW1lID0gaW1hZ2VOYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZS5taW1lVHlwZSA9IGltYWdlRGF0YS5taW1lVHlwZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2UudXJpID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9nbFRGLmltYWdlcyEucHVzaChpbWFnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gUmVwbGFjZSB1cmkgd2l0aCBidWZmZXJ2aWV3IGFuZCBtaW1lIHR5cGUgZm9yIGdsYlxyXG4gICAgICAgICAgICAgICAgYnVmZmVyLmJ5dGVMZW5ndGggPSBieXRlT2Zmc2V0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXNob3VsZFVzZUdsYikge1xyXG4gICAgICAgICAgICBidWZmZXIudXJpID0gZmlsZU5hbWUgKyBcIi5iaW5cIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBwcmV0dHlQcmludCA/IEpTT04uc3RyaW5naWZ5KHRoaXMuX2dsVEYsIG51bGwsIDIpIDogSlNPTi5zdHJpbmdpZnkodGhpcy5fZ2xURik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGdlbmVyYXRlR0xURkFzeW5jKGdsVEZQcmVmaXg6IHN0cmluZyk6IFByb21pc2U8R0xURkRhdGE+IHtcclxuICAgICAgICBjb25zdCBiaW5hcnlCdWZmZXIgPSBhd2FpdCB0aGlzLl9nZW5lcmF0ZUJpbmFyeUFzeW5jKCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2V4dGVuc2lvbnNPbkV4cG9ydGluZygpO1xyXG4gICAgICAgIGNvbnN0IGpzb25UZXh0ID0gdGhpcy5fZ2VuZXJhdGVKU09OKGZhbHNlLCBiaW5hcnlCdWZmZXIuYnl0ZUxlbmd0aCwgZ2xURlByZWZpeCwgdHJ1ZSk7XHJcbiAgICAgICAgY29uc3QgYmluID0gbmV3IEJsb2IoW2JpbmFyeUJ1ZmZlcl0sIHsgdHlwZTogXCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIiB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgZ2xURkZpbGVOYW1lID0gZ2xURlByZWZpeCArIFwiLmdsdGZcIjtcclxuICAgICAgICBjb25zdCBnbFRGQmluRmlsZSA9IGdsVEZQcmVmaXggKyBcIi5iaW5cIjtcclxuXHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gbmV3IEdMVEZEYXRhKCk7XHJcblxyXG4gICAgICAgIGNvbnRhaW5lci5maWxlc1tnbFRGRmlsZU5hbWVdID0ganNvblRleHQ7XHJcbiAgICAgICAgY29udGFpbmVyLmZpbGVzW2dsVEZCaW5GaWxlXSA9IGJpbjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2ltYWdlRGF0YSkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGltYWdlIGluIHRoaXMuX2ltYWdlRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmZpbGVzW2ltYWdlXSA9IG5ldyBCbG9iKFt0aGlzLl9pbWFnZURhdGFbaW1hZ2VdLmRhdGFdLCB7IHR5cGU6IHRoaXMuX2ltYWdlRGF0YVtpbWFnZV0ubWltZVR5cGUgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjb250YWluZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBfZ2VuZXJhdGVCaW5hcnlBc3luYygpOiBQcm9taXNlPFVpbnQ4QXJyYXk+IHtcclxuICAgICAgICBhd2FpdCB0aGlzLl9leHBvcnRTY2VuZUFzeW5jKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFXcml0ZXIuZ2V0T3V0cHV0RGF0YSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUGFkcyB0aGUgbnVtYmVyIHRvIGEgbXVsdGlwbGUgb2YgNFxyXG4gICAgICogQHBhcmFtIG51bSBudW1iZXIgdG8gcGFkXHJcbiAgICAgKiBAcmV0dXJucyBwYWRkZWQgbnVtYmVyXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX2dldFBhZGRpbmcobnVtOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IHJlbWFpbmRlciA9IG51bSAlIDQ7XHJcbiAgICAgICAgY29uc3QgcGFkZGluZyA9IHJlbWFpbmRlciA9PT0gMCA/IHJlbWFpbmRlciA6IDQgLSByZW1haW5kZXI7XHJcblxyXG4gICAgICAgIHJldHVybiBwYWRkaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBnZW5lcmF0ZUdMQkFzeW5jKGdsVEZQcmVmaXg6IHN0cmluZyk6IFByb21pc2U8R0xURkRhdGE+IHtcclxuICAgICAgICBjb25zdCBiaW5hcnlCdWZmZXIgPSBhd2FpdCB0aGlzLl9nZW5lcmF0ZUJpbmFyeUFzeW5jKCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2V4dGVuc2lvbnNPbkV4cG9ydGluZygpO1xyXG4gICAgICAgIGNvbnN0IGpzb25UZXh0ID0gdGhpcy5fZ2VuZXJhdGVKU09OKHRydWUsIGJpbmFyeUJ1ZmZlci5ieXRlTGVuZ3RoKTtcclxuICAgICAgICBjb25zdCBnbGJGaWxlTmFtZSA9IGdsVEZQcmVmaXggKyBcIi5nbGJcIjtcclxuICAgICAgICBjb25zdCBoZWFkZXJMZW5ndGggPSAxMjtcclxuICAgICAgICBjb25zdCBjaHVua0xlbmd0aFByZWZpeCA9IDg7XHJcbiAgICAgICAgbGV0IGpzb25MZW5ndGggPSBqc29uVGV4dC5sZW5ndGg7XHJcbiAgICAgICAgbGV0IGVuY29kZWRKc29uVGV4dDtcclxuICAgICAgICBsZXQgaW1hZ2VCeXRlTGVuZ3RoID0gMDtcclxuICAgICAgICAvLyBtYWtlIHVzZSBvZiBUZXh0RW5jb2RlciB3aGVuIGF2YWlsYWJsZVxyXG4gICAgICAgIGlmICh0eXBlb2YgVGV4dEVuY29kZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgZW5jb2RlciA9IG5ldyBUZXh0RW5jb2RlcigpO1xyXG4gICAgICAgICAgICBlbmNvZGVkSnNvblRleHQgPSBlbmNvZGVyLmVuY29kZShqc29uVGV4dCk7XHJcbiAgICAgICAgICAgIGpzb25MZW5ndGggPSBlbmNvZGVkSnNvblRleHQubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX29yZGVyZWRJbWFnZURhdGEubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgaW1hZ2VCeXRlTGVuZ3RoICs9IHRoaXMuX29yZGVyZWRJbWFnZURhdGFbaV0uZGF0YS5ieXRlTGVuZ3RoO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBqc29uUGFkZGluZyA9IHRoaXMuX2dldFBhZGRpbmcoanNvbkxlbmd0aCk7XHJcbiAgICAgICAgY29uc3QgYmluUGFkZGluZyA9IHRoaXMuX2dldFBhZGRpbmcoYmluYXJ5QnVmZmVyLmJ5dGVMZW5ndGgpO1xyXG4gICAgICAgIGNvbnN0IGltYWdlUGFkZGluZyA9IHRoaXMuX2dldFBhZGRpbmcoaW1hZ2VCeXRlTGVuZ3RoKTtcclxuXHJcbiAgICAgICAgY29uc3QgYnl0ZUxlbmd0aCA9IGhlYWRlckxlbmd0aCArIDIgKiBjaHVua0xlbmd0aFByZWZpeCArIGpzb25MZW5ndGggKyBqc29uUGFkZGluZyArIGJpbmFyeUJ1ZmZlci5ieXRlTGVuZ3RoICsgYmluUGFkZGluZyArIGltYWdlQnl0ZUxlbmd0aCArIGltYWdlUGFkZGluZztcclxuXHJcbiAgICAgICAgLy8gaGVhZGVyXHJcbiAgICAgICAgY29uc3QgaGVhZGVyQnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKGhlYWRlckxlbmd0aCk7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyQnVmZmVyVmlldyA9IG5ldyBEYXRhVmlldyhoZWFkZXJCdWZmZXIpO1xyXG4gICAgICAgIGhlYWRlckJ1ZmZlclZpZXcuc2V0VWludDMyKDAsIDB4NDY1NDZjNjcsIHRydWUpOyAvL2dsVEZcclxuICAgICAgICBoZWFkZXJCdWZmZXJWaWV3LnNldFVpbnQzMig0LCAyLCB0cnVlKTsgLy8gdmVyc2lvblxyXG4gICAgICAgIGhlYWRlckJ1ZmZlclZpZXcuc2V0VWludDMyKDgsIGJ5dGVMZW5ndGgsIHRydWUpOyAvLyB0b3RhbCBieXRlcyBpbiBmaWxlXHJcblxyXG4gICAgICAgIC8vIGpzb24gY2h1bmtcclxuICAgICAgICBjb25zdCBqc29uQ2h1bmtCdWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoY2h1bmtMZW5ndGhQcmVmaXggKyBqc29uTGVuZ3RoICsganNvblBhZGRpbmcpO1xyXG4gICAgICAgIGNvbnN0IGpzb25DaHVua0J1ZmZlclZpZXcgPSBuZXcgRGF0YVZpZXcoanNvbkNodW5rQnVmZmVyKTtcclxuICAgICAgICBqc29uQ2h1bmtCdWZmZXJWaWV3LnNldFVpbnQzMigwLCBqc29uTGVuZ3RoICsganNvblBhZGRpbmcsIHRydWUpO1xyXG4gICAgICAgIGpzb25DaHVua0J1ZmZlclZpZXcuc2V0VWludDMyKDQsIDB4NGU0ZjUzNGEsIHRydWUpO1xyXG5cclxuICAgICAgICAvLyBqc29uIGNodW5rIGJ5dGVzXHJcbiAgICAgICAgY29uc3QganNvbkRhdGEgPSBuZXcgVWludDhBcnJheShqc29uQ2h1bmtCdWZmZXIsIGNodW5rTGVuZ3RoUHJlZml4KTtcclxuICAgICAgICAvLyBpZiBUZXh0RW5jb2RlciB3YXMgYXZhaWxhYmxlLCB3ZSBjYW4gc2ltcGx5IGNvcHkgdGhlIGVuY29kZWQgYXJyYXlcclxuICAgICAgICBpZiAoZW5jb2RlZEpzb25UZXh0KSB7XHJcbiAgICAgICAgICAgIGpzb25EYXRhLnNldChlbmNvZGVkSnNvblRleHQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJsYW5rQ2hhckNvZGUgPSBcIl9cIi5jaGFyQ29kZUF0KDApO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGpzb25MZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hhckNvZGUgPSBqc29uVGV4dC5jaGFyQ29kZUF0KGkpO1xyXG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIGNoYXJhY3RlciBkb2Vzbid0IGZpdCBpbnRvIGEgc2luZ2xlIFVURi0xNiBjb2RlIHVuaXQsIGp1c3QgcHV0IGEgYmxhbmsgY2hhcmFjdGVyXHJcbiAgICAgICAgICAgICAgICBpZiAoY2hhckNvZGUgIT0ganNvblRleHQuY29kZVBvaW50QXQoaSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBqc29uRGF0YVtpXSA9IGJsYW5rQ2hhckNvZGU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGpzb25EYXRhW2ldID0gY2hhckNvZGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGpzb24gcGFkZGluZ1xyXG4gICAgICAgIGNvbnN0IGpzb25QYWRkaW5nVmlldyA9IG5ldyBVaW50OEFycmF5KGpzb25DaHVua0J1ZmZlciwgY2h1bmtMZW5ndGhQcmVmaXggKyBqc29uTGVuZ3RoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGpzb25QYWRkaW5nOyArK2kpIHtcclxuICAgICAgICAgICAganNvblBhZGRpbmdWaWV3W2ldID0gMHgyMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGJpbmFyeSBjaHVua1xyXG4gICAgICAgIGNvbnN0IGJpbmFyeUNodW5rQnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKGNodW5rTGVuZ3RoUHJlZml4KTtcclxuICAgICAgICBjb25zdCBiaW5hcnlDaHVua0J1ZmZlclZpZXcgPSBuZXcgRGF0YVZpZXcoYmluYXJ5Q2h1bmtCdWZmZXIpO1xyXG4gICAgICAgIGJpbmFyeUNodW5rQnVmZmVyVmlldy5zZXRVaW50MzIoMCwgYmluYXJ5QnVmZmVyLmJ5dGVMZW5ndGggKyBiaW5QYWRkaW5nICsgaW1hZ2VCeXRlTGVuZ3RoICsgaW1hZ2VQYWRkaW5nLCB0cnVlKTtcclxuICAgICAgICBiaW5hcnlDaHVua0J1ZmZlclZpZXcuc2V0VWludDMyKDQsIDB4MDA0ZTQ5NDIsIHRydWUpO1xyXG5cclxuICAgICAgICAvLyBiaW5hcnkgcGFkZGluZ1xyXG4gICAgICAgIGNvbnN0IGJpblBhZGRpbmdCdWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoYmluUGFkZGluZyk7XHJcbiAgICAgICAgY29uc3QgYmluUGFkZGluZ1ZpZXcgPSBuZXcgVWludDhBcnJheShiaW5QYWRkaW5nQnVmZmVyKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJpblBhZGRpbmc7ICsraSkge1xyXG4gICAgICAgICAgICBiaW5QYWRkaW5nVmlld1tpXSA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBpbWFnZVBhZGRpbmdCdWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoaW1hZ2VQYWRkaW5nKTtcclxuICAgICAgICBjb25zdCBpbWFnZVBhZGRpbmdWaWV3ID0gbmV3IFVpbnQ4QXJyYXkoaW1hZ2VQYWRkaW5nQnVmZmVyKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGltYWdlUGFkZGluZzsgKytpKSB7XHJcbiAgICAgICAgICAgIGltYWdlUGFkZGluZ1ZpZXdbaV0gPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZ2xiRGF0YSA9IFtoZWFkZXJCdWZmZXIsIGpzb25DaHVua0J1ZmZlciwgYmluYXJ5Q2h1bmtCdWZmZXIsIGJpbmFyeUJ1ZmZlcl07XHJcblxyXG4gICAgICAgIC8vIGJpbmFyeSBkYXRhXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9vcmRlcmVkSW1hZ2VEYXRhLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIGdsYkRhdGEucHVzaCh0aGlzLl9vcmRlcmVkSW1hZ2VEYXRhW2ldLmRhdGEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2xiRGF0YS5wdXNoKGJpblBhZGRpbmdCdWZmZXIpO1xyXG5cclxuICAgICAgICBnbGJEYXRhLnB1c2goaW1hZ2VQYWRkaW5nQnVmZmVyKTtcclxuXHJcbiAgICAgICAgY29uc3QgZ2xiRmlsZSA9IG5ldyBCbG9iKGdsYkRhdGEsIHsgdHlwZTogXCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIiB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gbmV3IEdMVEZEYXRhKCk7XHJcbiAgICAgICAgY29udGFpbmVyLmZpbGVzW2dsYkZpbGVOYW1lXSA9IGdsYkZpbGU7XHJcblxyXG4gICAgICAgIHJldHVybiBjb250YWluZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfc2V0Tm9kZVRyYW5zZm9ybWF0aW9uKG5vZGU6IElOb2RlLCBiYWJ5bG9uVHJhbnNmb3JtTm9kZTogVHJhbnNmb3JtTm9kZSwgY29udmVydFRvUmlnaHRIYW5kZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICBpZiAoIWJhYnlsb25UcmFuc2Zvcm1Ob2RlLmdldFBpdm90UG9pbnQoKS5lcXVhbHNUb0Zsb2F0cygwLCAwLCAwKSkge1xyXG4gICAgICAgICAgICBUb29scy5XYXJuKFwiUGl2b3QgcG9pbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluIHRoZSBnbFRGIHNlcmlhbGl6ZXJcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWJhYnlsb25UcmFuc2Zvcm1Ob2RlLnBvc2l0aW9uLmVxdWFsc1RvRmxvYXRzKDAsIDAsIDApKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRyYW5zbGF0aW9uID0gVG1wVmVjdG9ycy5WZWN0b3IzWzBdLmNvcHlGcm9tKGJhYnlsb25UcmFuc2Zvcm1Ob2RlLnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgaWYgKGNvbnZlcnRUb1JpZ2h0SGFuZGVkKSB7XHJcbiAgICAgICAgICAgICAgICBDb252ZXJ0VG9SaWdodEhhbmRlZFBvc2l0aW9uKHRyYW5zbGF0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbm9kZS50cmFuc2xhdGlvbiA9IHRyYW5zbGF0aW9uLmFzQXJyYXkoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghYmFieWxvblRyYW5zZm9ybU5vZGUuc2NhbGluZy5lcXVhbHNUb0Zsb2F0cygxLCAxLCAxKSkge1xyXG4gICAgICAgICAgICBub2RlLnNjYWxlID0gYmFieWxvblRyYW5zZm9ybU5vZGUuc2NhbGluZy5hc0FycmF5KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCByb3RhdGlvblF1YXRlcm5pb24gPSBRdWF0ZXJuaW9uLkZyb21FdWxlckFuZ2xlcyhiYWJ5bG9uVHJhbnNmb3JtTm9kZS5yb3RhdGlvbi54LCBiYWJ5bG9uVHJhbnNmb3JtTm9kZS5yb3RhdGlvbi55LCBiYWJ5bG9uVHJhbnNmb3JtTm9kZS5yb3RhdGlvbi56KTtcclxuICAgICAgICBpZiAoYmFieWxvblRyYW5zZm9ybU5vZGUucm90YXRpb25RdWF0ZXJuaW9uKSB7XHJcbiAgICAgICAgICAgIHJvdGF0aW9uUXVhdGVybmlvbi5tdWx0aXBseUluUGxhY2UoYmFieWxvblRyYW5zZm9ybU5vZGUucm90YXRpb25RdWF0ZXJuaW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFRdWF0ZXJuaW9uLklzSWRlbnRpdHkocm90YXRpb25RdWF0ZXJuaW9uKSkge1xyXG4gICAgICAgICAgICBpZiAoY29udmVydFRvUmlnaHRIYW5kZWQpIHtcclxuICAgICAgICAgICAgICAgIENvbnZlcnRUb1JpZ2h0SGFuZGVkUm90YXRpb24ocm90YXRpb25RdWF0ZXJuaW9uKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbm9kZS5yb3RhdGlvbiA9IHJvdGF0aW9uUXVhdGVybmlvbi5ub3JtYWxpemUoKS5hc0FycmF5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3NldENhbWVyYVRyYW5zZm9ybWF0aW9uKG5vZGU6IElOb2RlLCBiYWJ5bG9uQ2FtZXJhOiBDYW1lcmEsIGNvbnZlcnRUb1JpZ2h0SGFuZGVkOiBib29sZWFuLCBwYXJlbnQ6IE51bGxhYmxlPE5vZGU+KTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgdHJhbnNsYXRpb24gPSBUbXBWZWN0b3JzLlZlY3RvcjNbMF07XHJcbiAgICAgICAgY29uc3Qgcm90YXRpb24gPSBUbXBWZWN0b3JzLlF1YXRlcm5pb25bMF07XHJcblxyXG4gICAgICAgIGlmIChwYXJlbnQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgLy8gQ2FtZXJhLmdldFdvcmxkTWF0cml4IHJldHVybnMgZ2xvYmFsIGNvb3JkaW5hdGVzLiBHTFRGIG5vZGUgbXVzdCB1c2UgbG9jYWwgY29vcmRpbmF0ZXMuIElmIGNhbWVyYSBoYXMgcGFyZW50IHdlIG5lZWQgdG8gdXNlIGxvY2FsIHRyYW5zbGF0aW9uL3JvdGF0aW9uLlxyXG4gICAgICAgICAgICBjb25zdCBwYXJlbnRXb3JsZE1hdHJpeCA9IE1hdHJpeC5JbnZlcnQocGFyZW50LmdldFdvcmxkTWF0cml4KCkpO1xyXG4gICAgICAgICAgICBjb25zdCBjYW1lcmFXb3JsZE1hdHJpeCA9IGJhYnlsb25DYW1lcmEuZ2V0V29ybGRNYXRyaXgoKTtcclxuICAgICAgICAgICAgY29uc3QgY2FtZXJhTG9jYWwgPSBjYW1lcmFXb3JsZE1hdHJpeC5tdWx0aXBseShwYXJlbnRXb3JsZE1hdHJpeCk7XHJcbiAgICAgICAgICAgIGNhbWVyYUxvY2FsLmRlY29tcG9zZSh1bmRlZmluZWQsIHJvdGF0aW9uLCB0cmFuc2xhdGlvbik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYmFieWxvbkNhbWVyYS5nZXRXb3JsZE1hdHJpeCgpLmRlY29tcG9zZSh1bmRlZmluZWQsIHJvdGF0aW9uLCB0cmFuc2xhdGlvbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRyYW5zbGF0aW9uLmVxdWFsc1RvRmxvYXRzKDAsIDAsIDApKSB7XHJcbiAgICAgICAgICAgIG5vZGUudHJhbnNsYXRpb24gPSB0cmFuc2xhdGlvbi5hc0FycmF5KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIVF1YXRlcm5pb24uSXNJZGVudGl0eShyb3RhdGlvbikpIHtcclxuICAgICAgICAgICAgbm9kZS5yb3RhdGlvbiA9IHJvdGF0aW9uLmFzQXJyYXkoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRXhwb3J0IGJhYnlsb24gY2FtZXJhcyB0byBnbFRGIGNhbWVyYXNcclxuICAgIHByaXZhdGUgX2xpc3RBdmFpbGFibGVDYW1lcmFzKCk6IHZvaWQge1xyXG4gICAgICAgIGZvciAoY29uc3QgY2FtZXJhIG9mIHRoaXMuX2JhYnlsb25TY2VuZS5jYW1lcmFzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdsVEZDYW1lcmE6IElDYW1lcmEgPSB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBjYW1lcmEubW9kZSA9PT0gQ2FtZXJhLlBFUlNQRUNUSVZFX0NBTUVSQSA/IENhbWVyYVR5cGUuUEVSU1BFQ1RJVkUgOiBDYW1lcmFUeXBlLk9SVEhPR1JBUEhJQyxcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjYW1lcmEubmFtZSkge1xyXG4gICAgICAgICAgICAgICAgZ2xURkNhbWVyYS5uYW1lID0gY2FtZXJhLm5hbWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChnbFRGQ2FtZXJhLnR5cGUgPT09IENhbWVyYVR5cGUuUEVSU1BFQ1RJVkUpIHtcclxuICAgICAgICAgICAgICAgIGdsVEZDYW1lcmEucGVyc3BlY3RpdmUgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXNwZWN0UmF0aW86IGNhbWVyYS5nZXRFbmdpbmUoKS5nZXRBc3BlY3RSYXRpbyhjYW1lcmEpLFxyXG4gICAgICAgICAgICAgICAgICAgIHlmb3Y6IGNhbWVyYS5mb3ZNb2RlID09PSBDYW1lcmEuRk9WTU9ERV9WRVJUSUNBTF9GSVhFRCA/IGNhbWVyYS5mb3YgOiBjYW1lcmEuZm92ICogY2FtZXJhLmdldEVuZ2luZSgpLmdldEFzcGVjdFJhdGlvKGNhbWVyYSksXHJcbiAgICAgICAgICAgICAgICAgICAgem5lYXI6IGNhbWVyYS5taW5aLFxyXG4gICAgICAgICAgICAgICAgICAgIHpmYXI6IGNhbWVyYS5tYXhaLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChnbFRGQ2FtZXJhLnR5cGUgPT09IENhbWVyYVR5cGUuT1JUSE9HUkFQSElDKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBoYWxmV2lkdGggPSBjYW1lcmEub3J0aG9MZWZ0ICYmIGNhbWVyYS5vcnRob1JpZ2h0ID8gMC41ICogKGNhbWVyYS5vcnRob1JpZ2h0IC0gY2FtZXJhLm9ydGhvTGVmdCkgOiBjYW1lcmEuZ2V0RW5naW5lKCkuZ2V0UmVuZGVyV2lkdGgoKSAqIDAuNTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGhhbGZIZWlnaHQgPSBjYW1lcmEub3J0aG9Cb3R0b20gJiYgY2FtZXJhLm9ydGhvVG9wID8gMC41ICogKGNhbWVyYS5vcnRob1RvcCAtIGNhbWVyYS5vcnRob0JvdHRvbSkgOiBjYW1lcmEuZ2V0RW5naW5lKCkuZ2V0UmVuZGVySGVpZ2h0KCkgKiAwLjU7XHJcbiAgICAgICAgICAgICAgICBnbFRGQ2FtZXJhLm9ydGhvZ3JhcGhpYyA9IHtcclxuICAgICAgICAgICAgICAgICAgICB4bWFnOiBoYWxmV2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgeW1hZzogaGFsZkhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICB6bmVhcjogY2FtZXJhLm1pblosXHJcbiAgICAgICAgICAgICAgICAgICAgemZhcjogY2FtZXJhLm1heFosXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2NhbWVyYXNNYXAuc2V0KGNhbWVyYSwgZ2xURkNhbWVyYSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIENsZWFudXAgdW51c2VkIGNhbWVyYXMgYW5kIGFzc2lnbiBpbmRleCB0byBub2Rlcy5cclxuICAgIHByaXZhdGUgX2V4cG9ydEFuZEFzc2lnbkNhbWVyYXMoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgZ2x0ZkNhbWVyYXMgPSBBcnJheS5mcm9tKHRoaXMuX2NhbWVyYXNNYXAudmFsdWVzKCkpO1xyXG4gICAgICAgIGZvciAoY29uc3QgZ2x0ZkNhbWVyYSBvZiBnbHRmQ2FtZXJhcykge1xyXG4gICAgICAgICAgICBjb25zdCB1c2VkTm9kZXMgPSB0aGlzLl9ub2Rlc0NhbWVyYU1hcC5nZXQoZ2x0ZkNhbWVyYSk7XHJcbiAgICAgICAgICAgIGlmICh1c2VkTm9kZXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2FtZXJhcy5wdXNoKGdsdGZDYW1lcmEpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBub2RlIG9mIHVzZWROb2Rlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuY2FtZXJhID0gdGhpcy5fY2FtZXJhcy5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEJ1aWxkcyBhbGwgc2tpbnMgaW4gdGhlIHNraW5zIGFycmF5IHNvIG5vZGVzIGNhbiByZWZlcmVuY2UgaXQgZHVyaW5nIG5vZGUgcGFyc2luZy5cclxuICAgIHByaXZhdGUgX2xpc3RBdmFpbGFibGVTa2VsZXRvbnMoKTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChjb25zdCBza2VsZXRvbiBvZiB0aGlzLl9iYWJ5bG9uU2NlbmUuc2tlbGV0b25zKSB7XHJcbiAgICAgICAgICAgIGlmIChza2VsZXRvbi5ib25lcy5sZW5ndGggPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNraW46IElTa2luID0geyBqb2ludHM6IFtdIH07XHJcbiAgICAgICAgICAgIHRoaXMuX3NraW5NYXAuc2V0KHNrZWxldG9uLCBza2luKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZXhwb3J0QW5kQXNzaWduU2tlbGV0b25zKCkge1xyXG4gICAgICAgIGZvciAoY29uc3Qgc2tlbGV0b24gb2YgdGhpcy5fYmFieWxvblNjZW5lLnNrZWxldG9ucykge1xyXG4gICAgICAgICAgICBpZiAoc2tlbGV0b24uYm9uZXMubGVuZ3RoIDw9IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBza2luID0gdGhpcy5fc2tpbk1hcC5nZXQoc2tlbGV0b24pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNraW4gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgYm9uZUluZGV4TWFwOiB7IFtpbmRleDogbnVtYmVyXTogQm9uZSB9ID0ge307XHJcbiAgICAgICAgICAgIGNvbnN0IGludmVyc2VCaW5kTWF0cmljZXM6IE1hdHJpeFtdID0gW107XHJcblxyXG4gICAgICAgICAgICBsZXQgbWF4Qm9uZUluZGV4ID0gLTE7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2tlbGV0b24uYm9uZXMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJvbmUgPSBza2VsZXRvbi5ib25lc1tpXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJvbmVJbmRleCA9IGJvbmUuZ2V0SW5kZXgoKSA/PyBpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJvbmVJbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBib25lSW5kZXhNYXBbYm9uZUluZGV4XSA9IGJvbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJvbmVJbmRleCA+IG1heEJvbmVJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhCb25lSW5kZXggPSBib25lSW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBTZXQgam9pbnRzIGluZGV4IHRvIHNjZW5lIG5vZGUuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGJvbmVJbmRleCA9IDA7IGJvbmVJbmRleCA8PSBtYXhCb25lSW5kZXg7ICsrYm9uZUluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBib25lID0gYm9uZUluZGV4TWFwW2JvbmVJbmRleF07XHJcbiAgICAgICAgICAgICAgICBpbnZlcnNlQmluZE1hdHJpY2VzLnB1c2goYm9uZS5nZXRBYnNvbHV0ZUludmVyc2VCaW5kTWF0cml4KCkpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdHJhbnNmb3JtTm9kZSA9IGJvbmUuZ2V0VHJhbnNmb3JtTm9kZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0cmFuc2Zvcm1Ob2RlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm9kZUlEID0gdGhpcy5fbm9kZU1hcC5nZXQodHJhbnNmb3JtTm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRyYW5zZm9ybU5vZGUgJiYgbm9kZUlEICE9PSBudWxsICYmIG5vZGVJRCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNraW4uam9pbnRzLnB1c2gobm9kZUlEKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBUb29scy5XYXJuKFwiRXhwb3J0aW5nIGEgYm9uZSB3aXRob3V0IGEgbGlua2VkIHRyYW5zZm9ybSBub2RlIGlzIGN1cnJlbnRseSB1bnN1cHBvcnRlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIFRvb2xzLldhcm4oXCJFeHBvcnRpbmcgYSBib25lIHdpdGhvdXQgYSBsaW5rZWQgdHJhbnNmb3JtIG5vZGUgaXMgY3VycmVudGx5IHVuc3VwcG9ydGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBOb2RlcyB0aGF0IHVzZSB0aGlzIHNraW4uXHJcbiAgICAgICAgICAgIGNvbnN0IHNraW5lZE5vZGVzID0gdGhpcy5fbm9kZXNTa2luTWFwLmdldChza2luKTtcclxuXHJcbiAgICAgICAgICAgIC8vIE9ubHkgY3JlYXRlIHNrZWxldG9uIGlmIGl0IGhhcyBhdCBsZWFzdCBvbmUgam9pbnQgYW5kIGlzIHVzZWQgYnkgYSBtZXNoLlxyXG4gICAgICAgICAgICBpZiAoc2tpbi5qb2ludHMubGVuZ3RoID4gMCAmJiBza2luZWROb2RlcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgYnVmZmVyIHZpZXcgZm9yIGludmVyc2UgYmluZCBtYXRyaWNlc1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYnl0ZVN0cmlkZSA9IDY0OyAvLyA0IHggNCBtYXRyaXggb2YgMzIgYml0IGZsb2F0XHJcbiAgICAgICAgICAgICAgICBjb25zdCBieXRlTGVuZ3RoID0gaW52ZXJzZUJpbmRNYXRyaWNlcy5sZW5ndGggKiBieXRlU3RyaWRlO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYnVmZmVyVmlld09mZnNldCA9IHRoaXMuX2RhdGFXcml0ZXIuYnl0ZU9mZnNldDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJ1ZmZlclZpZXcgPSBDcmVhdGVCdWZmZXJWaWV3KDAsIGJ1ZmZlclZpZXdPZmZzZXQsIGJ5dGVMZW5ndGgsIHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9idWZmZXJWaWV3cy5wdXNoKGJ1ZmZlclZpZXcpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYnVmZmVyVmlld0luZGV4ID0gdGhpcy5fYnVmZmVyVmlld3MubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJpbmRNYXRyaXhBY2Nlc3NvciA9IENyZWF0ZUFjY2Vzc29yKGJ1ZmZlclZpZXdJbmRleCwgQWNjZXNzb3JUeXBlLk1BVDQsIEFjY2Vzc29yQ29tcG9uZW50VHlwZS5GTE9BVCwgaW52ZXJzZUJpbmRNYXRyaWNlcy5sZW5ndGgsIG51bGwsIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW52ZXJzZUJpbmRBY2Nlc3NvckluZGV4ID0gdGhpcy5fYWNjZXNzb3JzLnB1c2goYmluZE1hdHJpeEFjY2Vzc29yKSAtIDE7XHJcbiAgICAgICAgICAgICAgICBza2luLmludmVyc2VCaW5kTWF0cmljZXMgPSBpbnZlcnNlQmluZEFjY2Vzc29ySW5kZXg7XHJcbiAgICAgICAgICAgICAgICBpbnZlcnNlQmluZE1hdHJpY2VzLmZvckVhY2goKG1hdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hdC5tLmZvckVhY2goKGNlbGw6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9kYXRhV3JpdGVyLndyaXRlRmxvYXQzMihjZWxsKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX3NraW5zLnB1c2goc2tpbik7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHNraW5lZE5vZGUgb2Ygc2tpbmVkTm9kZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBza2luZWROb2RlLnNraW4gPSB0aGlzLl9za2lucy5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgX2V4cG9ydFNjZW5lQXN5bmMoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgY29uc3Qgc2NlbmU6IElTY2VuZSA9IHsgbm9kZXM6IFtdIH07XHJcblxyXG4gICAgICAgIC8vIFNjZW5lIG1ldGFkYXRhXHJcbiAgICAgICAgaWYgKHRoaXMuX2JhYnlsb25TY2VuZS5tZXRhZGF0YSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fb3B0aW9ucy5tZXRhZGF0YVNlbGVjdG9yKSB7XHJcbiAgICAgICAgICAgICAgICBzY2VuZS5leHRyYXMgPSB0aGlzLl9vcHRpb25zLm1ldGFkYXRhU2VsZWN0b3IodGhpcy5fYmFieWxvblNjZW5lLm1ldGFkYXRhKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9iYWJ5bG9uU2NlbmUubWV0YWRhdGEuZ2x0Zikge1xyXG4gICAgICAgICAgICAgICAgc2NlbmUuZXh0cmFzID0gdGhpcy5fYmFieWxvblNjZW5lLm1ldGFkYXRhLmdsdGYuZXh0cmFzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAgVE9ETzpcclxuICAgICAgICAvLyAgZGVhbCB3aXRoIHRoaXMgZnJvbSB0aGUgbG9hZGVyOlxyXG4gICAgICAgIC8vICBiYWJ5bG9uTWF0ZXJpYWwuaW52ZXJ0Tm9ybWFsTWFwWCA9ICF0aGlzLl9iYWJ5bG9uU2NlbmUudXNlUmlnaHRIYW5kZWRTeXN0ZW07XHJcbiAgICAgICAgLy8gIGJhYnlsb25NYXRlcmlhbC5pbnZlcnROb3JtYWxNYXBZID0gdGhpcy5fYmFieWxvblNjZW5lLnVzZVJpZ2h0SGFuZGVkU3lzdGVtO1xyXG5cclxuICAgICAgICBjb25zdCByb290Tm9kZXNSSCA9IG5ldyBBcnJheTxOb2RlPigpO1xyXG4gICAgICAgIGNvbnN0IHJvb3ROb2Rlc0xIID0gbmV3IEFycmF5PE5vZGU+KCk7XHJcbiAgICAgICAgY29uc3Qgcm9vdE5vb3BOb2Rlc1JIID0gbmV3IEFycmF5PE5vZGU+KCk7XHJcblxyXG4gICAgICAgIGZvciAoY29uc3Qgcm9vdE5vZGUgb2YgdGhpcy5fYmFieWxvblNjZW5lLnJvb3ROb2Rlcykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fb3B0aW9ucy5yZW1vdmVOb29wUm9vdE5vZGVzICYmICF0aGlzLl9vcHRpb25zLmluY2x1ZGVDb29yZGluYXRlU3lzdGVtQ29udmVyc2lvbk5vZGVzICYmIElzTm9vcE5vZGUocm9vdE5vZGUsIHRoaXMuX2JhYnlsb25TY2VuZS51c2VSaWdodEhhbmRlZFN5c3RlbSkpIHtcclxuICAgICAgICAgICAgICAgIHJvb3ROb29wTm9kZXNSSC5wdXNoKC4uLnJvb3ROb2RlLmdldENoaWxkcmVuKCkpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JhYnlsb25TY2VuZS51c2VSaWdodEhhbmRlZFN5c3RlbSkge1xyXG4gICAgICAgICAgICAgICAgcm9vdE5vZGVzUkgucHVzaChyb290Tm9kZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByb290Tm9kZXNMSC5wdXNoKHJvb3ROb2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fbGlzdEF2YWlsYWJsZUNhbWVyYXMoKTtcclxuICAgICAgICB0aGlzLl9saXN0QXZhaWxhYmxlU2tlbGV0b25zKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHN0YXRlTEggPSBuZXcgRXhwb3J0ZXJTdGF0ZSh0cnVlLCBmYWxzZSk7XHJcbiAgICAgICAgc2NlbmUubm9kZXMucHVzaCguLi4oYXdhaXQgdGhpcy5fZXhwb3J0Tm9kZXNBc3luYyhyb290Tm9kZXNMSCwgc3RhdGVMSCkpKTtcclxuICAgICAgICBjb25zdCBzdGF0ZVJIID0gbmV3IEV4cG9ydGVyU3RhdGUoZmFsc2UsIGZhbHNlKTtcclxuICAgICAgICBzY2VuZS5ub2Rlcy5wdXNoKC4uLihhd2FpdCB0aGlzLl9leHBvcnROb2Rlc0FzeW5jKHJvb3ROb2Rlc1JILCBzdGF0ZVJIKSkpO1xyXG4gICAgICAgIGNvbnN0IG5vb3BSSCA9IG5ldyBFeHBvcnRlclN0YXRlKGZhbHNlLCB0cnVlKTtcclxuICAgICAgICBzY2VuZS5ub2Rlcy5wdXNoKC4uLihhd2FpdCB0aGlzLl9leHBvcnROb2Rlc0FzeW5jKHJvb3ROb29wTm9kZXNSSCwgbm9vcFJIKSkpO1xyXG5cclxuICAgICAgICBpZiAoc2NlbmUubm9kZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NjZW5lcy5wdXNoKHNjZW5lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2V4cG9ydEFuZEFzc2lnbkNhbWVyYXMoKTtcclxuICAgICAgICB0aGlzLl9leHBvcnRBbmRBc3NpZ25Ta2VsZXRvbnMoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2JhYnlsb25TY2VuZS5hbmltYXRpb25Hcm91cHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIF9HTFRGQW5pbWF0aW9uLl9DcmVhdGVOb2RlQW5kTW9ycGhBbmltYXRpb25Gcm9tQW5pbWF0aW9uR3JvdXBzKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fYmFieWxvblNjZW5lLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fYW5pbWF0aW9ucyxcclxuICAgICAgICAgICAgICAgIHRoaXMuX25vZGVNYXAsXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kYXRhV3JpdGVyLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fYnVmZmVyVmlld3MsXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hY2Nlc3NvcnMsXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hbmltYXRpb25TYW1wbGVSYXRlLFxyXG4gICAgICAgICAgICAgICAgc3RhdGVMSC5nZXROb2Rlc1NldCgpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3Nob3VsZEV4cG9ydE5vZGUoYmFieWxvbk5vZGU6IE5vZGUpOiBib29sZWFuIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5fc2hvdWxkRXhwb3J0Tm9kZU1hcC5nZXQoYmFieWxvbk5vZGUpO1xyXG5cclxuICAgICAgICBpZiAocmVzdWx0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5fb3B0aW9ucy5zaG91bGRFeHBvcnROb2RlKGJhYnlsb25Ob2RlKTtcclxuICAgICAgICAgICAgdGhpcy5fc2hvdWxkRXhwb3J0Tm9kZU1hcC5zZXQoYmFieWxvbk5vZGUsIHJlc3VsdCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgX2V4cG9ydE5vZGVzQXN5bmMoYmFieWxvblJvb3ROb2RlczogTm9kZVtdLCBzdGF0ZTogRXhwb3J0ZXJTdGF0ZSk6IFByb21pc2U8bnVtYmVyW10+IHtcclxuICAgICAgICBjb25zdCBub2RlcyA9IG5ldyBBcnJheTxudW1iZXI+KCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2V4cG9ydEJ1ZmZlcnMoYmFieWxvblJvb3ROb2Rlcywgc3RhdGUpO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGJhYnlsb25Ob2RlIG9mIGJhYnlsb25Sb290Tm9kZXMpIHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5fZXhwb3J0Tm9kZUFzeW5jKGJhYnlsb25Ob2RlLCBub2Rlcywgc3RhdGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5vZGVzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NvbGxlY3RCdWZmZXJzKFxyXG4gICAgICAgIGJhYnlsb25Ob2RlOiBOb2RlLFxyXG4gICAgICAgIGJ1ZmZlclRvVmVydGV4QnVmZmVyc01hcDogTWFwPEJ1ZmZlciwgVmVydGV4QnVmZmVyW10+LFxyXG4gICAgICAgIHZlcnRleEJ1ZmZlclRvTWVzaGVzTWFwOiBNYXA8VmVydGV4QnVmZmVyLCBNZXNoW10+LFxyXG4gICAgICAgIG1vcnBoVGFyZ2V0c1RvTWVzaGVzTWFwOiBNYXA8TW9ycGhUYXJnZXQsIE1lc2hbXT4sXHJcbiAgICAgICAgc3RhdGU6IEV4cG9ydGVyU3RhdGVcclxuICAgICk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl9zaG91bGRFeHBvcnROb2RlKGJhYnlsb25Ob2RlKSAmJiBiYWJ5bG9uTm9kZSBpbnN0YW5jZW9mIE1lc2ggJiYgYmFieWxvbk5vZGUuZ2VvbWV0cnkpIHtcclxuICAgICAgICAgICAgY29uc3QgdmVydGV4QnVmZmVycyA9IGJhYnlsb25Ob2RlLmdlb21ldHJ5LmdldFZlcnRleEJ1ZmZlcnMoKTtcclxuICAgICAgICAgICAgaWYgKHZlcnRleEJ1ZmZlcnMpIHtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qga2luZCBpbiB2ZXJ0ZXhCdWZmZXJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmVydGV4QnVmZmVyID0gdmVydGV4QnVmZmVyc1traW5kXTtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5zZXRIYXNWZXJ0ZXhDb2xvckFscGhhKHZlcnRleEJ1ZmZlciwgYmFieWxvbk5vZGUuaGFzVmVydGV4QWxwaGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJ1ZmZlciA9IHZlcnRleEJ1ZmZlci5fYnVmZmVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZlcnRleEJ1ZmZlckFycmF5ID0gYnVmZmVyVG9WZXJ0ZXhCdWZmZXJzTWFwLmdldChidWZmZXIpIHx8IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1ZmZlclRvVmVydGV4QnVmZmVyc01hcC5zZXQoYnVmZmVyLCB2ZXJ0ZXhCdWZmZXJBcnJheSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZlcnRleEJ1ZmZlckFycmF5LmluZGV4T2YodmVydGV4QnVmZmVyKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGV4QnVmZmVyQXJyYXkucHVzaCh2ZXJ0ZXhCdWZmZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVzaGVzID0gdmVydGV4QnVmZmVyVG9NZXNoZXNNYXAuZ2V0KHZlcnRleEJ1ZmZlcikgfHwgW107XHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGV4QnVmZmVyVG9NZXNoZXNNYXAuc2V0KHZlcnRleEJ1ZmZlciwgbWVzaGVzKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobWVzaGVzLmluZGV4T2YoYmFieWxvbk5vZGUpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNoZXMucHVzaChiYWJ5bG9uTm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtb3JwaFRhcmdldE1hbmFnZXIgPSBiYWJ5bG9uTm9kZS5tb3JwaFRhcmdldE1hbmFnZXI7XHJcblxyXG4gICAgICAgICAgICBpZiAobW9ycGhUYXJnZXRNYW5hZ2VyKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBtb3JwaEluZGV4ID0gMDsgbW9ycGhJbmRleCA8IG1vcnBoVGFyZ2V0TWFuYWdlci5udW1UYXJnZXRzOyBtb3JwaEluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtb3JwaFRhcmdldCA9IG1vcnBoVGFyZ2V0TWFuYWdlci5nZXRUYXJnZXQobW9ycGhJbmRleCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc2hlcyA9IG1vcnBoVGFyZ2V0c1RvTWVzaGVzTWFwLmdldChtb3JwaFRhcmdldCkgfHwgW107XHJcbiAgICAgICAgICAgICAgICAgICAgbW9ycGhUYXJnZXRzVG9NZXNoZXNNYXAuc2V0KG1vcnBoVGFyZ2V0LCBtZXNoZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtZXNoZXMuaW5kZXhPZihiYWJ5bG9uTm9kZSkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc2hlcy5wdXNoKGJhYnlsb25Ob2RlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgYmFieWxvbkNoaWxkTm9kZSBvZiBiYWJ5bG9uTm9kZS5nZXRDaGlsZHJlbigpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbGxlY3RCdWZmZXJzKGJhYnlsb25DaGlsZE5vZGUsIGJ1ZmZlclRvVmVydGV4QnVmZmVyc01hcCwgdmVydGV4QnVmZmVyVG9NZXNoZXNNYXAsIG1vcnBoVGFyZ2V0c1RvTWVzaGVzTWFwLCBzdGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2V4cG9ydEJ1ZmZlcnMoYmFieWxvblJvb3ROb2RlczogTm9kZVtdLCBzdGF0ZTogRXhwb3J0ZXJTdGF0ZSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGJ1ZmZlclRvVmVydGV4QnVmZmVyc01hcCA9IG5ldyBNYXA8QnVmZmVyLCBWZXJ0ZXhCdWZmZXJbXT4oKTtcclxuICAgICAgICBjb25zdCB2ZXJ0ZXhCdWZmZXJUb01lc2hlc01hcCA9IG5ldyBNYXA8VmVydGV4QnVmZmVyLCBNZXNoW10+KCk7XHJcbiAgICAgICAgY29uc3QgbW9ycGhUYWdldHNNZXNoZXNNYXAgPSBuZXcgTWFwPE1vcnBoVGFyZ2V0LCBNZXNoW10+KCk7XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgYmFieWxvbk5vZGUgb2YgYmFieWxvblJvb3ROb2Rlcykge1xyXG4gICAgICAgICAgICB0aGlzLl9jb2xsZWN0QnVmZmVycyhiYWJ5bG9uTm9kZSwgYnVmZmVyVG9WZXJ0ZXhCdWZmZXJzTWFwLCB2ZXJ0ZXhCdWZmZXJUb01lc2hlc01hcCwgbW9ycGhUYWdldHNNZXNoZXNNYXAsIHN0YXRlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGJ1ZmZlcnMgPSBBcnJheS5mcm9tKGJ1ZmZlclRvVmVydGV4QnVmZmVyc01hcC5rZXlzKCkpO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGJ1ZmZlciBvZiBidWZmZXJzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBidWZmZXIuZ2V0RGF0YSgpO1xyXG4gICAgICAgICAgICBpZiAoIWRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkJ1ZmZlciBkYXRhIGlzIG5vdCBhdmFpbGFibGVcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHZlcnRleEJ1ZmZlcnMgPSBidWZmZXJUb1ZlcnRleEJ1ZmZlcnNNYXAuZ2V0KGJ1ZmZlcik7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXZlcnRleEJ1ZmZlcnMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBieXRlU3RyaWRlID0gdmVydGV4QnVmZmVyc1swXS5ieXRlU3RyaWRlO1xyXG4gICAgICAgICAgICBpZiAodmVydGV4QnVmZmVycy5zb21lKCh2ZXJ0ZXhCdWZmZXIpID0+IHZlcnRleEJ1ZmZlci5ieXRlU3RyaWRlICE9PSBieXRlU3RyaWRlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVmVydGV4IGJ1ZmZlcnMgcG9pbnRpbmcgdG8gdGhlIHNhbWUgYnVmZmVyIG11c3QgaGF2ZSB0aGUgc2FtZSBieXRlIHN0cmlkZVwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgYnl0ZXMgPSBEYXRhQXJyYXlUb1VpbnQ4QXJyYXkoZGF0YSkuc2xpY2UoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEFwcGx5IGNvbnZlcnNpb25zIHRvIGJ1ZmZlciBkYXRhIGluLXBsYWNlLlxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHZlcnRleEJ1ZmZlciBvZiB2ZXJ0ZXhCdWZmZXJzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IGJ5dGVPZmZzZXQsIGJ5dGVTdHJpZGUsIHR5cGUsIG5vcm1hbGl6ZWQgfSA9IHZlcnRleEJ1ZmZlcjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNpemUgPSB2ZXJ0ZXhCdWZmZXIuZ2V0U2l6ZSgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWVzaGVzID0gdmVydGV4QnVmZmVyVG9NZXNoZXNNYXAuZ2V0KHZlcnRleEJ1ZmZlcikhO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWF4VG90YWxWZXJ0aWNlcyA9IG1lc2hlcy5yZWR1Y2UoKG1heCwgY3VycmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW50LmdldFRvdGFsVmVydGljZXMoKSA+IG1heCA/IGN1cnJlbnQuZ2V0VG90YWxWZXJ0aWNlcygpIDogbWF4O1xyXG4gICAgICAgICAgICAgICAgfSwgLU51bWJlci5NQVhfVkFMVUUpOyAvLyBUbyBlbnN1cmUgbm90aGluZyBpcyBtaXNzZWQgd2hlbiBlbnVtZXJhdGluZywgYnV0IG1heSBub3QgYmUgbmVjZXNzYXJ5LlxyXG5cclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodmVydGV4QnVmZmVyLmdldEtpbmQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIE5vcm1hbGl6ZSBub3JtYWxzIGFuZCB0YW5nZW50cy5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5Ob3JtYWxLaW5kOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLlRhbmdlbnRLaW5kOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEVudW1lcmF0ZUZsb2F0VmFsdWVzKGJ5dGVzLCBieXRlT2Zmc2V0LCBieXRlU3RyaWRlLCBzaXplLCB0eXBlLCBtYXhUb3RhbFZlcnRpY2VzICogc2l6ZSwgbm9ybWFsaXplZCwgKHZhbHVlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW52TGVuZ3RoID0gMSAvIE1hdGguc3FydCh2YWx1ZXNbMF0gKiB2YWx1ZXNbMF0gKyB2YWx1ZXNbMV0gKiB2YWx1ZXNbMV0gKyB2YWx1ZXNbMl0gKiB2YWx1ZXNbMl0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzWzBdICo9IGludkxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlc1sxXSAqPSBpbnZMZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXNbMl0gKj0gaW52TGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIENvbnZlcnQgU3RhbmRhcmRNYXRlcmlhbCB2ZXJ0ZXggY29sb3JzIGZyb20gZ2FtbWEgdG8gbGluZWFyIHNwYWNlLlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLkNvbG9yS2luZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGRNYXRlcmlhbENvdW50ID0gbWVzaGVzLmZpbHRlcigobWVzaCkgPT4gbWVzaC5tYXRlcmlhbCBpbnN0YW5jZW9mIFN0YW5kYXJkTWF0ZXJpYWwgfHwgbWVzaC5tYXRlcmlhbCA9PSBudWxsKS5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RkTWF0ZXJpYWxDb3VudCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhazsgLy8gQnVmZmVyIG5vdCB1c2VkIGJ5IFN0YW5kYXJkTWF0ZXJpYWxzLCBzbyBubyBjb252ZXJzaW9uIG5lZWRlZC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogSW1wbGVtZW50IHRoaXMgY2FzZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0ZE1hdGVyaWFsQ291bnQgIT0gbWVzaGVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nZ2VyLldhcm4oXCJOb3QgY29udmVydGluZyB2ZXJ0ZXggY29sb3Igc3BhY2UsIGFzIGJ1ZmZlciBpcyBzaGFyZWQgYnkgU3RhbmRhcmRNYXRlcmlhbHMgYW5kIG90aGVyIG1hdGVyaWFsIHR5cGVzLiBSZXN1bHRzIG1heSBsb29rIGluY29ycmVjdC5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT0gVmVydGV4QnVmZmVyLlVOU0lHTkVEX0JZVEUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZ2dlci5XYXJuKFwiQ29udmVydGluZyB1aW50OCB2ZXJ0ZXggY29sb3JzIHRvIGxpbmVhciBzcGFjZS4gUmVzdWx0cyBtYXkgbG9vayBpbmNvcnJlY3QuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2ZXJ0ZXhEYXRhMyA9IG5ldyBDb2xvcjMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmVydGV4RGF0YTQgPSBuZXcgQ29sb3I0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVzZUV4YWN0U3JnYkNvbnZlcnNpb25zID0gdGhpcy5fYmFieWxvblNjZW5lLmdldEVuZ2luZSgpLnVzZUV4YWN0U3JnYkNvbnZlcnNpb25zO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRW51bWVyYXRlRmxvYXRWYWx1ZXMoYnl0ZXMsIGJ5dGVPZmZzZXQsIGJ5dGVTdHJpZGUsIHNpemUsIHR5cGUsIG1heFRvdGFsVmVydGljZXMgKiBzaXplLCBub3JtYWxpemVkLCAodmFsdWVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBVc2luZyBzZXBhcmF0ZSBDb2xvcjMgYW5kIENvbG9yNCBvYmplY3RzIHRvIGVuc3VyZSB0aGUgcmlnaHQgZnVuY3Rpb25zIGFyZSBjYWxsZWQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWVzLmxlbmd0aCA9PT0gMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRleERhdGEzLmZyb21BcnJheSh2YWx1ZXMsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRleERhdGEzLnRvTGluZWFyU3BhY2VUb1JlZih2ZXJ0ZXhEYXRhMywgdXNlRXhhY3RTcmdiQ29udmVyc2lvbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRleERhdGEzLnRvQXJyYXkodmFsdWVzLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGV4RGF0YTQuZnJvbUFycmF5KHZhbHVlcywgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGV4RGF0YTQudG9MaW5lYXJTcGFjZVRvUmVmKHZlcnRleERhdGE0LCB1c2VFeGFjdFNyZ2JDb252ZXJzaW9ucyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGV4RGF0YTQudG9BcnJheSh2YWx1ZXMsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFBlcmZvcm1zIGNvb3JkaW5hdGUgY29udmVyc2lvbiBpZiBuZWVkZWQgKG9ubHkgZm9yIHBvc2l0aW9uLCBub3JtYWwgYW5kIHRhbmdldCkuXHJcbiAgICAgICAgICAgIGlmIChzdGF0ZS5jb252ZXJ0VG9SaWdodEhhbmRlZCkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCB2ZXJ0ZXhCdWZmZXIgb2YgdmVydGV4QnVmZmVycykge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodmVydGV4QnVmZmVyLmdldEtpbmQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5Qb3NpdGlvbktpbmQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLk5vcm1hbEtpbmQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLlRhbmdlbnRLaW5kOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG1lc2ggb2YgdmVydGV4QnVmZmVyVG9NZXNoZXNNYXAuZ2V0KHZlcnRleEJ1ZmZlcikhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBieXRlT2Zmc2V0LCBieXRlU3RyaWRlLCB0eXBlLCBub3JtYWxpemVkIH0gPSB2ZXJ0ZXhCdWZmZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2l6ZSA9IHZlcnRleEJ1ZmZlci5nZXRTaXplKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRW51bWVyYXRlRmxvYXRWYWx1ZXMoYnl0ZXMsIGJ5dGVPZmZzZXQsIGJ5dGVTdHJpZGUsIHNpemUsIHR5cGUsIG1lc2guZ2V0VG90YWxWZXJ0aWNlcygpICogc2l6ZSwgbm9ybWFsaXplZCwgKHZhbHVlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXNbMF0gPSAtdmFsdWVzWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIFNhdmUgY29udmVydGVkIGJ5dGVzIGZvciBtaW4vbWF4IGNvbXB1dGF0aW9uLlxyXG4gICAgICAgICAgICAgICAgc3RhdGUuY29udmVydGVkVG9SaWdodEhhbmRlZEJ1ZmZlcnMuc2V0KGJ1ZmZlciwgYnl0ZXMpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBieXRlT2Zmc2V0ID0gdGhpcy5fZGF0YVdyaXRlci5ieXRlT2Zmc2V0O1xyXG4gICAgICAgICAgICB0aGlzLl9kYXRhV3JpdGVyLndyaXRlVWludDhBcnJheShieXRlcyk7XHJcbiAgICAgICAgICAgIHRoaXMuX2J1ZmZlclZpZXdzLnB1c2goQ3JlYXRlQnVmZmVyVmlldygwLCBieXRlT2Zmc2V0LCBieXRlcy5sZW5ndGgsIGJ5dGVTdHJpZGUpKTtcclxuICAgICAgICAgICAgc3RhdGUuc2V0VmVydGV4QnVmZmVyVmlldyhidWZmZXIsIHRoaXMuX2J1ZmZlclZpZXdzLmxlbmd0aCAtIDEpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZmxvYXRNYXRyaWNlc0luZGljZXMgPSBuZXcgTWFwPFZlcnRleEJ1ZmZlciwgRmxvYXRBcnJheT4oKTtcclxuXHJcbiAgICAgICAgICAgIC8vIElmIGJ1ZmZlcnMgYXJlIG9mIHR5cGUgTWF0cmljZXNXZWlnaHRzS2luZCBhbmQgaGF2ZSBmbG9hdCB2YWx1ZXMsIHdlIG5lZWQgdG8gY3JlYXRlIGEgbmV3IGJ1ZmZlciBpbnN0ZWFkLlxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHZlcnRleEJ1ZmZlciBvZiB2ZXJ0ZXhCdWZmZXJzKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHZlcnRleEJ1ZmZlci5nZXRLaW5kKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5NYXRyaWNlc0luZGljZXNLaW5kOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLk1hdHJpY2VzSW5kaWNlc0V4dHJhS2luZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmVydGV4QnVmZmVyLnR5cGUgPT0gVmVydGV4QnVmZmVyLkZMT0FUKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG1lc2ggb2YgdmVydGV4QnVmZmVyVG9NZXNoZXNNYXAuZ2V0KHZlcnRleEJ1ZmZlcikhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmxvYXREYXRhID0gdmVydGV4QnVmZmVyLmdldEZsb2F0RGF0YShtZXNoLmdldFRvdGFsVmVydGljZXMoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZsb2F0RGF0YSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdE1hdHJpY2VzSW5kaWNlcy5zZXQodmVydGV4QnVmZmVyLCBmbG9hdERhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGZsb2F0TWF0cmljZXNJbmRpY2VzLnNpemUgIT09IDApIHtcclxuICAgICAgICAgICAgICAgIExvZ2dlci5XYXJuKFxyXG4gICAgICAgICAgICAgICAgICAgIGBKb2ludHMgY29udmVyc2lvbiBuZWVkZWQ6IHNvbWUgam9pbnRzIGFyZSBzdG9yZWQgYXMgZmxvYXRzIGluIEJhYnlsb24gYnV0IEdMVEYgcmVxdWlyZXMgVU5TSUdORUQgQllURVMuIFdlIHdpbGwgcGVyZm9ybSB0aGUgY29udmVyc2lvbiBidXQgdGhpcyBtaWdodCBsZWFkIHRvIHVudXNlZCBkYXRhIGluIHRoZSBidWZmZXIuYFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgZmxvYXRBcnJheVZlcnRleEJ1ZmZlcnMgPSBBcnJheS5mcm9tKGZsb2F0TWF0cmljZXNJbmRpY2VzLmtleXMoKSk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHZlcnRleEJ1ZmZlciBvZiBmbG9hdEFycmF5VmVydGV4QnVmZmVycykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXJyYXkgPSBmbG9hdE1hdHJpY2VzSW5kaWNlcy5nZXQodmVydGV4QnVmZmVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIWFycmF5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgYnl0ZU9mZnNldCA9IHRoaXMuX2RhdGFXcml0ZXIuYnl0ZU9mZnNldDtcclxuICAgICAgICAgICAgICAgIGlmIChGbG9hdHNOZWVkMTZCaXRJbnRlZ2VyKGFycmF5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0FycmF5ID0gbmV3IFVpbnQxNkFycmF5KGFycmF5Lmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdBcnJheVtpbmRleF0gPSBhcnJheVtpbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2RhdGFXcml0ZXIud3JpdGVVaW50MTZBcnJheShuZXdBcnJheSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYnVmZmVyVmlld3MucHVzaChDcmVhdGVCdWZmZXJWaWV3KDAsIGJ5dGVPZmZzZXQsIG5ld0FycmF5LmJ5dGVMZW5ndGgsIDQgKiAyKSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0FycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXkubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXkubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0FycmF5W2luZGV4XSA9IGFycmF5W2luZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZGF0YVdyaXRlci53cml0ZVVpbnQ4QXJyYXkobmV3QXJyYXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2J1ZmZlclZpZXdzLnB1c2goQ3JlYXRlQnVmZmVyVmlldygwLCBieXRlT2Zmc2V0LCBuZXdBcnJheS5ieXRlTGVuZ3RoLCA0KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgc3RhdGUuc2V0UmVtYXBwZWRCdWZmZXJWaWV3KGJ1ZmZlciwgdmVydGV4QnVmZmVyLCB0aGlzLl9idWZmZXJWaWV3cy5sZW5ndGggLSAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbW9ycGhUYXJnZXRzID0gQXJyYXkuZnJvbShtb3JwaFRhZ2V0c01lc2hlc01hcC5rZXlzKCkpO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IG1vcnBoVGFyZ2V0IG9mIG1vcnBoVGFyZ2V0cykge1xyXG4gICAgICAgICAgICBjb25zdCBtZXNoZXMgPSBtb3JwaFRhZ2V0c01lc2hlc01hcC5nZXQobW9ycGhUYXJnZXQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFtZXNoZXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBnbFRGTW9ycGhUYXJnZXQgPSBCdWlsZE1vcnBoVGFyZ2V0QnVmZmVycyhtb3JwaFRhcmdldCwgbWVzaGVzWzBdLCB0aGlzLl9kYXRhV3JpdGVyLCB0aGlzLl9idWZmZXJWaWV3cywgdGhpcy5fYWNjZXNzb3JzLCBzdGF0ZS5jb252ZXJ0VG9SaWdodEhhbmRlZCk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IG1lc2ggb2YgbWVzaGVzKSB7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5iaW5kTW9ycGhEYXRhVG9NZXNoKG1lc2gsIGdsVEZNb3JwaFRhcmdldCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQcm9jZXNzZXMgYSBub2RlIHRvIGJlIGV4cG9ydGVkIHRvIHRoZSBnbFRGIGZpbGVcclxuICAgICAqIEByZXR1cm5zIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIG9uY2UgdGhlIG5vZGUgaGFzIGJlZW4gZXhwb3J0ZWRcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGFzeW5jIF9leHBvcnROb2RlQXN5bmMoYmFieWxvbk5vZGU6IE5vZGUsIHBhcmVudE5vZGVDaGlsZHJlbjogQXJyYXk8bnVtYmVyPiwgc3RhdGU6IEV4cG9ydGVyU3RhdGUpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBsZXQgbm9kZUluZGV4ID0gdGhpcy5fbm9kZU1hcC5nZXQoYmFieWxvbk5vZGUpO1xyXG4gICAgICAgIGlmIChub2RlSW5kZXggIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBpZiAoIXBhcmVudE5vZGVDaGlsZHJlbi5pbmNsdWRlcyhub2RlSW5kZXgpKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlQ2hpbGRyZW4ucHVzaChub2RlSW5kZXgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG5vZGUgPSBhd2FpdCB0aGlzLl9jcmVhdGVOb2RlQXN5bmMoYmFieWxvbk5vZGUsIHN0YXRlKTtcclxuXHJcbiAgICAgICAgaWYgKG5vZGUpIHtcclxuICAgICAgICAgICAgbm9kZUluZGV4ID0gdGhpcy5fbm9kZXMubGVuZ3RoO1xyXG4gICAgICAgICAgICB0aGlzLl9ub2Rlcy5wdXNoKG5vZGUpO1xyXG4gICAgICAgICAgICB0aGlzLl9ub2RlTWFwLnNldChiYWJ5bG9uTm9kZSwgbm9kZUluZGV4KTtcclxuICAgICAgICAgICAgc3RhdGUucHVzaEV4cG9ydGVkTm9kZShiYWJ5bG9uTm9kZSk7XHJcbiAgICAgICAgICAgIHBhcmVudE5vZGVDaGlsZHJlbi5wdXNoKG5vZGVJbmRleCk7XHJcblxyXG4gICAgICAgICAgICAvLyBQcm9jZXNzIG5vZGUncyBhbmltYXRpb25zIG9uY2UgdGhlIG5vZGUgaGFzIGJlZW4gYWRkZWQgdG8gbm9kZU1hcCAoVE9ETzogVGhpcyBzaG91bGQgYmUgcmVmYWN0b3JlZClcclxuICAgICAgICAgICAgY29uc3QgcnVudGltZUdMVEZBbmltYXRpb246IElBbmltYXRpb24gPSB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcInJ1bnRpbWUgYW5pbWF0aW9uc1wiLFxyXG4gICAgICAgICAgICAgICAgY2hhbm5lbHM6IFtdLFxyXG4gICAgICAgICAgICAgICAgc2FtcGxlcnM6IFtdLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zdCBpZGxlR0xURkFuaW1hdGlvbnM6IElBbmltYXRpb25bXSA9IFtdO1xyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9iYWJ5bG9uU2NlbmUuYW5pbWF0aW9uR3JvdXBzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgX0dMVEZBbmltYXRpb24uX0NyZWF0ZU1vcnBoVGFyZ2V0QW5pbWF0aW9uRnJvbU1vcnBoVGFyZ2V0QW5pbWF0aW9ucyhcclxuICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uTm9kZSxcclxuICAgICAgICAgICAgICAgICAgICBydW50aW1lR0xURkFuaW1hdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBpZGxlR0xURkFuaW1hdGlvbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbm9kZU1hcCxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ub2RlcyxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kYXRhV3JpdGVyLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2J1ZmZlclZpZXdzLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2FjY2Vzc29ycyxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9hbmltYXRpb25TYW1wbGVSYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmNvbnZlcnRUb1JpZ2h0SGFuZGVkLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX29wdGlvbnMuc2hvdWxkRXhwb3J0QW5pbWF0aW9uXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJhYnlsb25Ob2RlLmFuaW1hdGlvbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX0dMVEZBbmltYXRpb24uX0NyZWF0ZU5vZGVBbmltYXRpb25Gcm9tTm9kZUFuaW1hdGlvbnMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhYnlsb25Ob2RlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBydW50aW1lR0xURkFuaW1hdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWRsZUdMVEZBbmltYXRpb25zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9ub2RlTWFwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9ub2RlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZGF0YVdyaXRlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fYnVmZmVyVmlld3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2FjY2Vzc29ycyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fYW5pbWF0aW9uU2FtcGxlUmF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUuY29udmVydFRvUmlnaHRIYW5kZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX29wdGlvbnMuc2hvdWxkRXhwb3J0QW5pbWF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHJ1bnRpbWVHTFRGQW5pbWF0aW9uLmNoYW5uZWxzLmxlbmd0aCAmJiBydW50aW1lR0xURkFuaW1hdGlvbi5zYW1wbGVycy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2FuaW1hdGlvbnMucHVzaChydW50aW1lR0xURkFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWRsZUdMVEZBbmltYXRpb25zLmZvckVhY2goKGlkbGVHTFRGQW5pbWF0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaWRsZUdMVEZBbmltYXRpb24uY2hhbm5lbHMubGVuZ3RoICYmIGlkbGVHTFRGQW5pbWF0aW9uLnNhbXBsZXJzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2FuaW1hdGlvbnMucHVzaChpZGxlR0xURkFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQmVnaW4gcHJvY2Vzc2luZyBjaGlsZCBub2RlcyBvbmNlIHBhcmVudCBoYXMgYmVlbiBhZGRlZCB0byB0aGUgbm9kZSBsaXN0XHJcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBub2RlID8gW10gOiBwYXJlbnROb2RlQ2hpbGRyZW47XHJcbiAgICAgICAgZm9yIChjb25zdCBiYWJ5bG9uQ2hpbGROb2RlIG9mIGJhYnlsb25Ob2RlLmdldENoaWxkcmVuKCkpIHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5fZXhwb3J0Tm9kZUFzeW5jKGJhYnlsb25DaGlsZE5vZGUsIGNoaWxkcmVuLCBzdGF0ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobm9kZSAmJiBjaGlsZHJlbi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgbm9kZS5jaGlsZHJlbiA9IGNoaWxkcmVuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBnbFRGIG5vZGUgZnJvbSBhIEJhYnlsb24uanMgbm9kZS4gSWYgc2tpcHBlZCwgcmV0dXJucyBudWxsLlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgYXN5bmMgX2NyZWF0ZU5vZGVBc3luYyhiYWJ5bG9uTm9kZTogTm9kZSwgc3RhdGU6IEV4cG9ydGVyU3RhdGUpOiBQcm9taXNlPE51bGxhYmxlPElOb2RlPj4ge1xyXG4gICAgICAgIGlmICghdGhpcy5fc2hvdWxkRXhwb3J0Tm9kZShiYWJ5bG9uTm9kZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBub2RlOiBJTm9kZSA9IHt9O1xyXG5cclxuICAgICAgICBpZiAoYmFieWxvbk5vZGUubmFtZSkge1xyXG4gICAgICAgICAgICBub2RlLm5hbWUgPSBiYWJ5bG9uTm9kZS5uYW1lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGJhYnlsb25Ob2RlIGluc3RhbmNlb2YgVHJhbnNmb3JtTm9kZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9zZXROb2RlVHJhbnNmb3JtYXRpb24obm9kZSwgYmFieWxvbk5vZGUsIHN0YXRlLmNvbnZlcnRUb1JpZ2h0SGFuZGVkKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChiYWJ5bG9uTm9kZSBpbnN0YW5jZW9mIE1lc2ggfHwgYmFieWxvbk5vZGUgaW5zdGFuY2VvZiBJbnN0YW5jZWRNZXNoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBiYWJ5bG9uTWVzaCA9IGJhYnlsb25Ob2RlIGluc3RhbmNlb2YgTWVzaCA/IGJhYnlsb25Ob2RlIDogYmFieWxvbk5vZGUuc291cmNlTWVzaDtcclxuICAgICAgICAgICAgICAgIGlmIChiYWJ5bG9uTWVzaC5zdWJNZXNoZXMgJiYgYmFieWxvbk1lc2guc3ViTWVzaGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLm1lc2ggPSBhd2FpdCB0aGlzLl9leHBvcnRNZXNoQXN5bmMoYmFieWxvbk1lc2gsIHN0YXRlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYmFieWxvbk5vZGUuc2tlbGV0b24pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBza2luID0gdGhpcy5fc2tpbk1hcC5nZXQoYmFieWxvbk5vZGUuc2tlbGV0b24pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2tpbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9ub2Rlc1NraW5NYXAuZ2V0KHNraW4pID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX25vZGVzU2tpbk1hcC5zZXQoc2tpbiwgW10pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9ub2Rlc1NraW5NYXAuZ2V0KHNraW4pPy5wdXNoKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGJhYnlsb25Ob2RlIGluc3RhbmNlb2YgQ2FtZXJhKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdsdGZDYW1lcmEgPSB0aGlzLl9jYW1lcmFzTWFwLmdldChiYWJ5bG9uTm9kZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZ2x0ZkNhbWVyYSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX25vZGVzQ2FtZXJhTWFwLmdldChnbHRmQ2FtZXJhKSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbm9kZXNDYW1lcmFNYXAuc2V0KGdsdGZDYW1lcmEsIFtdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnRCYWJ5bG9uTm9kZSA9IGJhYnlsb25Ob2RlLnBhcmVudDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NldENhbWVyYVRyYW5zZm9ybWF0aW9uKG5vZGUsIGJhYnlsb25Ob2RlLCBzdGF0ZS5jb252ZXJ0VG9SaWdodEhhbmRlZCwgcGFyZW50QmFieWxvbk5vZGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIElmIGEgY2FtZXJhIGhhcyBhIG5vZGUgdGhhdCB3YXMgYWRkZWQgYnkgdGhlIEdMVEYgaW1wb3J0ZXIsIHdlIGNhbiBqdXN0IHVzZSB0aGUgcGFyZW50IG5vZGUgdHJhbnNmb3JtIGFzIHRoZSBcImNhbWVyYVwiIHRyYW5zZm9ybS5cclxuICAgICAgICAgICAgICAgIGlmIChwYXJlbnRCYWJ5bG9uTm9kZSAmJiBJc1BhcmVudEFkZGVkQnlJbXBvcnRlcihiYWJ5bG9uTm9kZSwgcGFyZW50QmFieWxvbk5vZGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyZW50Tm9kZUluZGV4ID0gdGhpcy5fbm9kZU1hcC5nZXQocGFyZW50QmFieWxvbk5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJlbnROb2RlSW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyZW50Tm9kZSA9IHRoaXMuX25vZGVzW3BhcmVudE5vZGVJbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX25vZGVzQ2FtZXJhTWFwLmdldChnbHRmQ2FtZXJhKT8ucHVzaChwYXJlbnROb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7IC8vIFNraXAgZXhwb3J0aW5nIHRoaXMgbm9kZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5jb252ZXJ0VG9SaWdodEhhbmRlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIENvbnZlcnRUb1JpZ2h0SGFuZGVkTm9kZShub2RlKTtcclxuICAgICAgICAgICAgICAgICAgICBSb3RhdGVOb2RlMTgwWShub2RlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuX25vZGVzQ2FtZXJhTWFwLmdldChnbHRmQ2FtZXJhKT8ucHVzaChub2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQXBwbHkgZXh0ZW5zaW9ucyB0byB0aGUgbm9kZS4gSWYgdGhpcyByZXNvbHZlcyB0byBudWxsLCBpdCBtZWFucyB3ZSBzaG91bGQgc2tpcCBleHBvcnRpbmcgdGhpcyBub2RlXHJcbiAgICAgICAgY29uc3QgcHJvY2Vzc2VkTm9kZSA9IGF3YWl0IHRoaXMuX2V4dGVuc2lvbnNQb3N0RXhwb3J0Tm9kZUFzeW5jKFwiZXhwb3J0Tm9kZUFzeW5jXCIsIG5vZGUsIGJhYnlsb25Ob2RlLCB0aGlzLl9ub2RlTWFwLCBzdGF0ZS5jb252ZXJ0VG9SaWdodEhhbmRlZCk7XHJcbiAgICAgICAgaWYgKCFwcm9jZXNzZWROb2RlKSB7XHJcbiAgICAgICAgICAgIExvZ2dlci5XYXJuKGBOb3QgZXhwb3J0aW5nIG5vZGUgJHtiYWJ5bG9uTm9kZS5uYW1lfWApO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2V4cG9ydEluZGljZXMoXHJcbiAgICAgICAgaW5kaWNlczogTnVsbGFibGU8SW5kaWNlc0FycmF5PixcclxuICAgICAgICBzdGFydDogbnVtYmVyLFxyXG4gICAgICAgIGNvdW50OiBudW1iZXIsXHJcbiAgICAgICAgb2Zmc2V0OiBudW1iZXIsXHJcbiAgICAgICAgZmlsbE1vZGU6IG51bWJlcixcclxuICAgICAgICBzaWRlT3JpZW50YXRpb246IG51bWJlcixcclxuICAgICAgICBzdGF0ZTogRXhwb3J0ZXJTdGF0ZSxcclxuICAgICAgICBwcmltaXRpdmU6IElNZXNoUHJpbWl0aXZlXHJcbiAgICApOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBpczMyQml0cyA9IEFyZUluZGljZXMzMkJpdHMoaW5kaWNlcywgY291bnQpO1xyXG4gICAgICAgIGxldCBpbmRpY2VzVG9FeHBvcnQgPSBpbmRpY2VzO1xyXG5cclxuICAgICAgICBwcmltaXRpdmUubW9kZSA9IEdldFByaW1pdGl2ZU1vZGUoZmlsbE1vZGUpO1xyXG5cclxuICAgICAgICAvLyBGbGlwIGlmIHRyaWFuZ2xlIHdpbmRpbmcgb3JkZXIgaXMgbm90IENDVyBhcyBnbFRGIGlzIGFsd2F5cyBDQ1cuXHJcbiAgICAgICAgY29uc3QgaW52ZXJ0ZWRNYXRlcmlhbCA9IHNpZGVPcmllbnRhdGlvbiAhPT0gTWF0ZXJpYWwuQ291bnRlckNsb2NrV2lzZVNpZGVPcmllbnRhdGlvbjtcclxuXHJcbiAgICAgICAgY29uc3QgZmxpcFdoZW5JbnZlcnRlZE1hdGVyaWFsID0gIXN0YXRlLndhc0FkZGVkQnlOb29wTm9kZSAmJiBpbnZlcnRlZE1hdGVyaWFsO1xyXG5cclxuICAgICAgICBjb25zdCBmbGlwID0gSXNUcmlhbmdsZUZpbGxNb2RlKGZpbGxNb2RlKSAmJiBmbGlwV2hlbkludmVydGVkTWF0ZXJpYWw7XHJcblxyXG4gICAgICAgIGlmIChmbGlwKSB7XHJcbiAgICAgICAgICAgIGlmIChmaWxsTW9kZSA9PT0gTWF0ZXJpYWwuVHJpYW5nbGVTdHJpcERyYXdNb2RlIHx8IGZpbGxNb2RlID09PSBNYXRlcmlhbC5UcmlhbmdsZUZhbkRyYXdNb2RlKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUcmlhbmdsZSBzdHJpcC9mYW4gZmlsbCBtb2RlIGlzIG5vdCBpbXBsZW1lbnRlZFwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcHJpbWl0aXZlLm1vZGUgPSBHZXRQcmltaXRpdmVNb2RlKGZpbGxNb2RlKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0luZGljZXMgPSBpczMyQml0cyA/IG5ldyBVaW50MzJBcnJheShjb3VudCkgOiBuZXcgVWludDE2QXJyYXkoY291bnQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGluZGljZXMpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpICsgMiA8IGNvdW50OyBpICs9IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdJbmRpY2VzW2ldID0gaW5kaWNlc1tzdGFydCArIGldICsgb2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0luZGljZXNbaSArIDFdID0gaW5kaWNlc1tzdGFydCArIGkgKyAyXSArIG9mZnNldDtcclxuICAgICAgICAgICAgICAgICAgICBuZXdJbmRpY2VzW2kgKyAyXSA9IGluZGljZXNbc3RhcnQgKyBpICsgMV0gKyBvZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSArIDIgPCBjb3VudDsgaSArPSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3SW5kaWNlc1tpXSA9IGk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3SW5kaWNlc1tpICsgMV0gPSBpICsgMjtcclxuICAgICAgICAgICAgICAgICAgICBuZXdJbmRpY2VzW2kgKyAyXSA9IGkgKyAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbmRpY2VzVG9FeHBvcnQgPSBuZXdJbmRpY2VzO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaW5kaWNlcyAmJiBvZmZzZXQgIT09IDApIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3SW5kaWNlcyA9IGlzMzJCaXRzID8gbmV3IFVpbnQzMkFycmF5KGNvdW50KSA6IG5ldyBVaW50MTZBcnJheShjb3VudCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbmV3SW5kaWNlc1tpXSA9IGluZGljZXNbc3RhcnQgKyBpXSArIG9mZnNldDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW5kaWNlc1RvRXhwb3J0ID0gbmV3SW5kaWNlcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpbmRpY2VzVG9FeHBvcnQpIHtcclxuICAgICAgICAgICAgbGV0IGFjY2Vzc29ySW5kZXggPSBzdGF0ZS5nZXRJbmRpY2VzQWNjZXNzb3IoaW5kaWNlcywgc3RhcnQsIGNvdW50LCBvZmZzZXQsIGZsaXApO1xyXG4gICAgICAgICAgICBpZiAoYWNjZXNzb3JJbmRleCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBidWZmZXJWaWV3Qnl0ZU9mZnNldCA9IHRoaXMuX2RhdGFXcml0ZXIuYnl0ZU9mZnNldDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJ5dGVzID0gSW5kaWNlc0FycmF5VG9VaW50OEFycmF5KGluZGljZXNUb0V4cG9ydCwgc3RhcnQsIGNvdW50LCBpczMyQml0cyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kYXRhV3JpdGVyLndyaXRlVWludDhBcnJheShieXRlcyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9idWZmZXJWaWV3cy5wdXNoKENyZWF0ZUJ1ZmZlclZpZXcoMCwgYnVmZmVyVmlld0J5dGVPZmZzZXQsIGJ5dGVzLmxlbmd0aCkpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYnVmZmVyVmlld0luZGV4ID0gdGhpcy5fYnVmZmVyVmlld3MubGVuZ3RoIC0gMTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRUeXBlID0gaXMzMkJpdHMgPyBBY2Nlc3NvckNvbXBvbmVudFR5cGUuVU5TSUdORURfSU5UIDogQWNjZXNzb3JDb21wb25lbnRUeXBlLlVOU0lHTkVEX1NIT1JUO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYWNjZXNzb3JzLnB1c2goQ3JlYXRlQWNjZXNzb3IoYnVmZmVyVmlld0luZGV4LCBBY2Nlc3NvclR5cGUuU0NBTEFSLCBjb21wb25lbnRUeXBlLCBjb3VudCwgMCkpO1xyXG4gICAgICAgICAgICAgICAgYWNjZXNzb3JJbmRleCA9IHRoaXMuX2FjY2Vzc29ycy5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICAgICAgc3RhdGUuc2V0SW5kaWNlc0FjY2Vzc29yKGluZGljZXMsIHN0YXJ0LCBjb3VudCwgb2Zmc2V0LCBmbGlwLCBhY2Nlc3NvckluZGV4KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcHJpbWl0aXZlLmluZGljZXMgPSBhY2Nlc3NvckluZGV4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9leHBvcnRWZXJ0ZXhCdWZmZXIodmVydGV4QnVmZmVyOiBWZXJ0ZXhCdWZmZXIsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwsIHN0YXJ0OiBudW1iZXIsIGNvdW50OiBudW1iZXIsIHN0YXRlOiBFeHBvcnRlclN0YXRlLCBwcmltaXRpdmU6IElNZXNoUHJpbWl0aXZlKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qga2luZCA9IHZlcnRleEJ1ZmZlci5nZXRLaW5kKCk7XHJcblxyXG4gICAgICAgIGlmICghSXNTdGFuZGFyZFZlcnRleEF0dHJpYnV0ZShraW5kKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoa2luZC5zdGFydHNXaXRoKFwidXZcIikgJiYgIXRoaXMuX29wdGlvbnMuZXhwb3J0VW51c2VkVVZzKSB7XHJcbiAgICAgICAgICAgIGlmICghYmFieWxvbk1hdGVyaWFsIHx8ICF0aGlzLl9tYXRlcmlhbE5lZWRzVVZzU2V0LmhhcyhiYWJ5bG9uTWF0ZXJpYWwpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBhY2Nlc3NvckluZGV4ID0gc3RhdGUuZ2V0VmVydGV4QWNjZXNzb3IodmVydGV4QnVmZmVyLCBzdGFydCwgY291bnQpO1xyXG5cclxuICAgICAgICBpZiAoYWNjZXNzb3JJbmRleCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIC8vIEdldCBtaW4vbWF4IGZyb20gY29udmVydGVkIG9yIG9yaWdpbmFsIGRhdGEuXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBzdGF0ZS5jb252ZXJ0ZWRUb1JpZ2h0SGFuZGVkQnVmZmVycy5nZXQodmVydGV4QnVmZmVyLl9idWZmZXIpIHx8IHZlcnRleEJ1ZmZlci5fYnVmZmVyLmdldERhdGEoKSE7XHJcbiAgICAgICAgICAgIGNvbnN0IG1pbk1heCA9IGtpbmQgPT09IFZlcnRleEJ1ZmZlci5Qb3NpdGlvbktpbmQgPyBHZXRNaW5NYXgoZGF0YSwgdmVydGV4QnVmZmVyLCBzdGFydCwgY291bnQpIDogbnVsbDtcclxuXHJcbiAgICAgICAgICAgIGlmICgoa2luZCA9PT0gVmVydGV4QnVmZmVyLk1hdHJpY2VzSW5kaWNlc0tpbmQgfHwga2luZCA9PT0gVmVydGV4QnVmZmVyLk1hdHJpY2VzSW5kaWNlc0V4dHJhS2luZCkgJiYgdmVydGV4QnVmZmVyLnR5cGUgPT09IFZlcnRleEJ1ZmZlci5GTE9BVCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYnVmZmVyVmlld0luZGV4ID0gc3RhdGUuZ2V0UmVtYXBwZWRCdWZmZXJWaWV3KHZlcnRleEJ1ZmZlci5fYnVmZmVyLCB2ZXJ0ZXhCdWZmZXIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJ1ZmZlclZpZXdJbmRleCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYnl0ZU9mZnNldCA9IHZlcnRleEJ1ZmZlci5ieXRlT2Zmc2V0ICsgc3RhcnQgKiB2ZXJ0ZXhCdWZmZXIuYnl0ZVN0cmlkZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9hY2Nlc3NvcnMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ3JlYXRlQWNjZXNzb3IoYnVmZmVyVmlld0luZGV4LCBHZXRBY2Nlc3NvclR5cGUoa2luZCwgc3RhdGUuaGFzVmVydGV4Q29sb3JBbHBoYSh2ZXJ0ZXhCdWZmZXIpKSwgVmVydGV4QnVmZmVyLlVOU0lHTkVEX0JZVEUsIGNvdW50LCBieXRlT2Zmc2V0LCBtaW5NYXgpXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBhY2Nlc3NvckluZGV4ID0gdGhpcy5fYWNjZXNzb3JzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuc2V0VmVydGV4QWNjZXNzb3IodmVydGV4QnVmZmVyLCBzdGFydCwgY291bnQsIGFjY2Vzc29ySW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHByaW1pdGl2ZS5hdHRyaWJ1dGVzW0dldEF0dHJpYnV0ZVR5cGUoa2luZCldID0gYWNjZXNzb3JJbmRleDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJ1ZmZlclZpZXdJbmRleCA9IHN0YXRlLmdldFZlcnRleEJ1ZmZlclZpZXcodmVydGV4QnVmZmVyLl9idWZmZXIpITtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJ5dGVPZmZzZXQgPSB2ZXJ0ZXhCdWZmZXIuYnl0ZU9mZnNldCArIHN0YXJ0ICogdmVydGV4QnVmZmVyLmJ5dGVTdHJpZGU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hY2Nlc3NvcnMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICBDcmVhdGVBY2Nlc3NvcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyVmlld0luZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBHZXRBY2Nlc3NvclR5cGUoa2luZCwgc3RhdGUuaGFzVmVydGV4Q29sb3JBbHBoYSh2ZXJ0ZXhCdWZmZXIpKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGV4QnVmZmVyLnR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBieXRlT2Zmc2V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5NYXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRleEJ1ZmZlci5ub3JtYWxpemVkIC8vIFRPRE86IEZpbmQgb3RoZXIgcGxhY2VzIHdoZXJlIHRoaXMgaXMgbmVlZGVkLlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBhY2Nlc3NvckluZGV4ID0gdGhpcy5fYWNjZXNzb3JzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5zZXRWZXJ0ZXhBY2Nlc3Nvcih2ZXJ0ZXhCdWZmZXIsIHN0YXJ0LCBjb3VudCwgYWNjZXNzb3JJbmRleCk7XHJcbiAgICAgICAgICAgICAgICBwcmltaXRpdmUuYXR0cmlidXRlc1tHZXRBdHRyaWJ1dGVUeXBlKGtpbmQpXSA9IGFjY2Vzc29ySW5kZXg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwcmltaXRpdmUuYXR0cmlidXRlc1tHZXRBdHRyaWJ1dGVUeXBlKGtpbmQpXSA9IGFjY2Vzc29ySW5kZXg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgX2V4cG9ydE1hdGVyaWFsQXN5bmMoYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCwgdmVydGV4QnVmZmVyczogeyBba2luZDogc3RyaW5nXTogVmVydGV4QnVmZmVyIH0sIHN1Yk1lc2g6IFN1Yk1lc2gsIHByaW1pdGl2ZTogSU1lc2hQcmltaXRpdmUpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBsZXQgbWF0ZXJpYWxJbmRleCA9IHRoaXMuX21hdGVyaWFsTWFwLmdldChiYWJ5bG9uTWF0ZXJpYWwpO1xyXG4gICAgICAgIGlmIChtYXRlcmlhbEluZGV4ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgY29uc3QgaGFzVVZzID0gdmVydGV4QnVmZmVycyAmJiBPYmplY3Qua2V5cyh2ZXJ0ZXhCdWZmZXJzKS5zb21lKChraW5kKSA9PiBraW5kLnN0YXJ0c1dpdGgoXCJ1dlwiKSk7XHJcbiAgICAgICAgICAgIGJhYnlsb25NYXRlcmlhbCA9IGJhYnlsb25NYXRlcmlhbCBpbnN0YW5jZW9mIE11bHRpTWF0ZXJpYWwgPyBiYWJ5bG9uTWF0ZXJpYWwuc3ViTWF0ZXJpYWxzW3N1Yk1lc2gubWF0ZXJpYWxJbmRleF0hIDogYmFieWxvbk1hdGVyaWFsO1xyXG4gICAgICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsIGluc3RhbmNlb2YgUEJSTWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgICAgIG1hdGVyaWFsSW5kZXggPSBhd2FpdCB0aGlzLl9tYXRlcmlhbEV4cG9ydGVyLmV4cG9ydFBCUk1hdGVyaWFsQXN5bmMoYmFieWxvbk1hdGVyaWFsLCBJbWFnZU1pbWVUeXBlLlBORywgaGFzVVZzKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChiYWJ5bG9uTWF0ZXJpYWwgaW5zdGFuY2VvZiBTdGFuZGFyZE1hdGVyaWFsKSB7XHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbEluZGV4ID0gYXdhaXQgdGhpcy5fbWF0ZXJpYWxFeHBvcnRlci5leHBvcnRTdGFuZGFyZE1hdGVyaWFsQXN5bmMoYmFieWxvbk1hdGVyaWFsLCBJbWFnZU1pbWVUeXBlLlBORywgaGFzVVZzKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIExvZ2dlci5XYXJuKGBVbnN1cHBvcnRlZCBtYXRlcmlhbCAnJHtiYWJ5bG9uTWF0ZXJpYWwubmFtZX0nIHdpdGggdHlwZSAke2JhYnlsb25NYXRlcmlhbC5nZXRDbGFzc05hbWUoKX1gKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5fbWF0ZXJpYWxNYXAuc2V0KGJhYnlsb25NYXRlcmlhbCwgbWF0ZXJpYWxJbmRleCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcmltaXRpdmUubWF0ZXJpYWwgPSBtYXRlcmlhbEluZGV4O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgX2V4cG9ydE1lc2hBc3luYyhiYWJ5bG9uTWVzaDogTWVzaCwgc3RhdGU6IEV4cG9ydGVyU3RhdGUpOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gICAgICAgIGxldCBtZXNoSW5kZXggPSBzdGF0ZS5nZXRNZXNoKGJhYnlsb25NZXNoKTtcclxuICAgICAgICBpZiAobWVzaEluZGV4ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1lc2hJbmRleDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG1lc2g6IElNZXNoID0geyBwcmltaXRpdmVzOiBbXSB9O1xyXG4gICAgICAgIG1lc2hJbmRleCA9IHRoaXMuX21lc2hlcy5sZW5ndGg7XHJcbiAgICAgICAgdGhpcy5fbWVzaGVzLnB1c2gobWVzaCk7XHJcbiAgICAgICAgc3RhdGUuc2V0TWVzaChiYWJ5bG9uTWVzaCwgbWVzaEluZGV4KTtcclxuXHJcbiAgICAgICAgY29uc3QgaW5kaWNlcyA9IGJhYnlsb25NZXNoLmlzVW5JbmRleGVkID8gbnVsbCA6IGJhYnlsb25NZXNoLmdldEluZGljZXMoKTtcclxuICAgICAgICBjb25zdCB2ZXJ0ZXhCdWZmZXJzID0gYmFieWxvbk1lc2guZ2VvbWV0cnk/LmdldFZlcnRleEJ1ZmZlcnMoKTtcclxuICAgICAgICBjb25zdCBtb3JwaFRhcmdldHMgPSBzdGF0ZS5nZXRNb3JwaFRhcmdldHNGcm9tTWVzaChiYWJ5bG9uTWVzaCk7XHJcblxyXG4gICAgICAgIGxldCBpc0xpbmVzTWVzaCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoYmFieWxvbk1lc2ggaW5zdGFuY2VvZiBMaW5lc01lc2gpIHtcclxuICAgICAgICAgICAgaXNMaW5lc01lc2ggPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc3ViTWVzaGVzID0gYmFieWxvbk1lc2guc3ViTWVzaGVzO1xyXG4gICAgICAgIGlmICh2ZXJ0ZXhCdWZmZXJzICYmIHN1Yk1lc2hlcyAmJiBzdWJNZXNoZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHN1Yk1lc2ggb2Ygc3ViTWVzaGVzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcmltaXRpdmU6IElNZXNoUHJpbWl0aXZlID0geyBhdHRyaWJ1dGVzOiB7fSB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGJhYnlsb25NYXRlcmlhbCA9IHN1Yk1lc2guZ2V0TWF0ZXJpYWwoKSB8fCB0aGlzLl9iYWJ5bG9uU2NlbmUuZGVmYXVsdE1hdGVyaWFsO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFNwZWNpYWwgY2FzZSBmb3IgTGluZXNNZXNoXHJcbiAgICAgICAgICAgICAgICBpZiAoaXNMaW5lc01lc2gpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRlcmlhbDogSU1hdGVyaWFsID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBiYWJ5bG9uTWF0ZXJpYWwubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBiYWJ5bG9uTGluZXNNZXNoID0gYmFieWxvbk1lc2ggYXMgTGluZXNNZXNoO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWJhYnlsb25MaW5lc01lc2guY29sb3IuZXF1YWxzKENvbG9yMy5XaGl0ZSgpKSB8fCBiYWJ5bG9uTGluZXNNZXNoLmFscGhhIDwgMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRlcmlhbC5wYnJNZXRhbGxpY1JvdWdobmVzcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VDb2xvckZhY3RvcjogWy4uLmJhYnlsb25MaW5lc01lc2guY29sb3IuYXNBcnJheSgpLCBiYWJ5bG9uTGluZXNNZXNoLmFscGhhXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21hdGVyaWFscy5wdXNoKG1hdGVyaWFsKTtcclxuICAgICAgICAgICAgICAgICAgICBwcmltaXRpdmUubWF0ZXJpYWwgPSB0aGlzLl9tYXRlcmlhbHMubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTWF0ZXJpYWxcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLl9leHBvcnRNYXRlcmlhbEFzeW5jKGJhYnlsb25NYXRlcmlhbCwgdmVydGV4QnVmZmVycywgc3ViTWVzaCwgcHJpbWl0aXZlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBJbmRleCBidWZmZXJcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGxNb2RlID0gaXNMaW5lc01lc2ggPyBNYXRlcmlhbC5MaW5lTGlzdERyYXdNb2RlIDogKGJhYnlsb25NZXNoLm92ZXJyaWRlUmVuZGVyaW5nRmlsbE1vZGUgPz8gYmFieWxvbk1hdGVyaWFsLmZpbGxNb2RlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzaWRlT3JpZW50YXRpb24gPSBiYWJ5bG9uTWF0ZXJpYWwuX2dldEVmZmVjdGl2ZU9yaWVudGF0aW9uKGJhYnlsb25NZXNoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9leHBvcnRJbmRpY2VzKGluZGljZXMsIHN1Yk1lc2guaW5kZXhTdGFydCwgc3ViTWVzaC5pbmRleENvdW50LCAtc3ViTWVzaC52ZXJ0aWNlc1N0YXJ0LCBmaWxsTW9kZSwgc2lkZU9yaWVudGF0aW9uLCBzdGF0ZSwgcHJpbWl0aXZlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBWZXJ0ZXggYnVmZmVyc1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCB2ZXJ0ZXhCdWZmZXIgb2YgT2JqZWN0LnZhbHVlcyh2ZXJ0ZXhCdWZmZXJzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2V4cG9ydFZlcnRleEJ1ZmZlcih2ZXJ0ZXhCdWZmZXIsIGJhYnlsb25NYXRlcmlhbCwgc3ViTWVzaC52ZXJ0aWNlc1N0YXJ0LCBzdWJNZXNoLnZlcnRpY2VzQ291bnQsIHN0YXRlLCBwcmltaXRpdmUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIG1lc2gucHJpbWl0aXZlcy5wdXNoKHByaW1pdGl2ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG1vcnBoVGFyZ2V0cykge1xyXG4gICAgICAgICAgICAgICAgICAgIHByaW1pdGl2ZS50YXJnZXRzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBnbHRmTW9ycGhUYXJnZXQgb2YgbW9ycGhUYXJnZXRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW1pdGl2ZS50YXJnZXRzLnB1c2goZ2x0Zk1vcnBoVGFyZ2V0LmF0dHJpYnV0ZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG1vcnBoVGFyZ2V0cykge1xyXG4gICAgICAgICAgICBtZXNoLndlaWdodHMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGlmICghbWVzaC5leHRyYXMpIHtcclxuICAgICAgICAgICAgICAgIG1lc2guZXh0cmFzID0ge307XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbWVzaC5leHRyYXMudGFyZ2V0TmFtZXMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgZ2x0Zk1vcnBoVGFyZ2V0IG9mIG1vcnBoVGFyZ2V0cykge1xyXG4gICAgICAgICAgICAgICAgbWVzaC53ZWlnaHRzLnB1c2goZ2x0Zk1vcnBoVGFyZ2V0LmluZmx1ZW5jZSk7XHJcbiAgICAgICAgICAgICAgICBtZXNoLmV4dHJhcy50YXJnZXROYW1lcy5wdXNoKGdsdGZNb3JwaFRhcmdldC5uYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG1lc2hJbmRleDtcclxuICAgIH1cclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBiYWJ5bG9uanMvYXZhaWxhYmxlICovXHJcblxyXG5pbXBvcnQgdHlwZSB7IElUZXh0dXJlSW5mbywgSU1hdGVyaWFsLCBJTWF0ZXJpYWxQYnJNZXRhbGxpY1JvdWdobmVzcywgSU1hdGVyaWFsT2NjbHVzaW9uVGV4dHVyZUluZm8sIElTYW1wbGVyIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBJbWFnZU1pbWVUeXBlLCBNYXRlcmlhbEFscGhhTW9kZSwgVGV4dHVyZU1hZ0ZpbHRlciwgVGV4dHVyZU1pbkZpbHRlciwgVGV4dHVyZVdyYXBNb2RlIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5cclxuaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCJjb3JlL3R5cGVzXCI7XHJcbmltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLnZlY3RvclwiO1xyXG5pbXBvcnQgeyBDb2xvcjMgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLmNvbG9yXCI7XHJcbmltcG9ydCB7IFNjYWxhciB9IGZyb20gXCJjb3JlL01hdGhzL21hdGguc2NhbGFyXCI7XHJcbmltcG9ydCB7IFRvb2xzIH0gZnJvbSBcImNvcmUvTWlzYy90b29sc1wiO1xyXG5pbXBvcnQgeyBUZXh0dXJlVG9vbHMgfSBmcm9tIFwiY29yZS9NaXNjL3RleHR1cmVUb29sc1wiO1xyXG5pbXBvcnQgdHlwZSB7IEJhc2VUZXh0dXJlIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1RleHR1cmVzL2Jhc2VUZXh0dXJlXCI7XHJcbmltcG9ydCB7IFRleHR1cmUgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvdGV4dHVyZVwiO1xyXG5pbXBvcnQgeyBSYXdUZXh0dXJlIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1RleHR1cmVzL3Jhd1RleHR1cmVcIjtcclxuXHJcbmltcG9ydCB0eXBlIHsgU2NlbmUgfSBmcm9tIFwiY29yZS9zY2VuZVwiO1xyXG5cclxuaW1wb3J0IHR5cGUgeyBHTFRGRXhwb3J0ZXIgfSBmcm9tIFwiLi9nbFRGRXhwb3J0ZXJcIjtcclxuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcImNvcmUvRW5naW5lcy9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgRHVtcFRvb2xzIH0gZnJvbSBcImNvcmUvTWlzYy9kdW1wVG9vbHNcIjtcclxuXHJcbmltcG9ydCB0eXBlIHsgTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHR5cGUgeyBTdGFuZGFyZE1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL3N0YW5kYXJkTWF0ZXJpYWxcIjtcclxuaW1wb3J0IHR5cGUgeyBQQlJCYXNlTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvUEJSL3BickJhc2VNYXRlcmlhbFwiO1xyXG5cclxuY29uc3QgZXBzaWxvbiA9IDFlLTY7XHJcbmNvbnN0IGRpZWxlY3RyaWNTcGVjdWxhciA9IG5ldyBDb2xvcjMoMC4wNCwgMC4wNCwgMC4wNCk7XHJcbmNvbnN0IG1heFNwZWN1bGFyUG93ZXIgPSAxMDI0O1xyXG5jb25zdCB3aGl0ZSA9IENvbG9yMy5XaGl0ZSgpO1xyXG5jb25zdCBibGFjayA9IENvbG9yMy5CbGFjaygpO1xyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3Igc3RvcmluZyBzcGVjdWxhciBnbG9zc2luZXNzIGZhY3RvcnNcclxuICogQGludGVybmFsXHJcbiAqL1xyXG5pbnRlcmZhY2UgSVBCUlNwZWN1bGFyR2xvc3NpbmVzcyB7XHJcbiAgICAvKipcclxuICAgICAqIFJlcHJlc2VudHMgdGhlIGxpbmVhciBkaWZmdXNlIGZhY3RvcnMgb2YgdGhlIG1hdGVyaWFsXHJcbiAgICAgKi9cclxuICAgIGRpZmZ1c2VDb2xvcjogQ29sb3IzO1xyXG4gICAgc3BlY3VsYXJDb2xvcjogQ29sb3IzO1xyXG4gICAgZ2xvc3NpbmVzczogbnVtYmVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgSVBCUk1ldGFsbGljUm91Z2huZXNzIHtcclxuICAgIGJhc2VDb2xvcjogQ29sb3IzO1xyXG4gICAgbWV0YWxsaWM6IE51bGxhYmxlPG51bWJlcj47XHJcbiAgICByb3VnaG5lc3M6IE51bGxhYmxlPG51bWJlcj47XHJcbiAgICBtZXRhbGxpY1JvdWdobmVzc1RleHR1cmVEYXRhPzogTnVsbGFibGU8QXJyYXlCdWZmZXI+O1xyXG4gICAgYmFzZUNvbG9yVGV4dHVyZURhdGE/OiBOdWxsYWJsZTxBcnJheUJ1ZmZlcj47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEdldEZpbGVFeHRlbnNpb25Gcm9tTWltZVR5cGUobWltZVR5cGU6IEltYWdlTWltZVR5cGUpOiBzdHJpbmcge1xyXG4gICAgc3dpdGNoIChtaW1lVHlwZSkge1xyXG4gICAgICAgIGNhc2UgSW1hZ2VNaW1lVHlwZS5KUEVHOlxyXG4gICAgICAgICAgICByZXR1cm4gXCIuanBnXCI7XHJcbiAgICAgICAgY2FzZSBJbWFnZU1pbWVUeXBlLlBORzpcclxuICAgICAgICAgICAgcmV0dXJuIFwiLnBuZ1wiO1xyXG4gICAgICAgIGNhc2UgSW1hZ2VNaW1lVHlwZS5XRUJQOlxyXG4gICAgICAgICAgICByZXR1cm4gXCIud2VicFwiO1xyXG4gICAgICAgIGNhc2UgSW1hZ2VNaW1lVHlwZS5BVklGOlxyXG4gICAgICAgICAgICByZXR1cm4gXCIuYXZpZlwiO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQ29tcHV0ZXMgdGhlIG1ldGFsbGljIGZhY3RvciBmcm9tIHNwZWN1bGFyIGdsb3NzaW5lc3MgdmFsdWVzLlxyXG4gKiBAcGFyYW0gZGlmZnVzZSBkaWZmdXNlZCB2YWx1ZVxyXG4gKiBAcGFyYW0gc3BlY3VsYXIgc3BlY3VsYXIgdmFsdWVcclxuICogQHBhcmFtIG9uZU1pbnVzU3BlY3VsYXJTdHJlbmd0aCBvbmUgbWludXMgdGhlIHNwZWN1bGFyIHN0cmVuZ3RoXHJcbiAqIEByZXR1cm5zIG1ldGFsbGljIHZhbHVlXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9Tb2x2ZU1ldGFsbGljKGRpZmZ1c2U6IG51bWJlciwgc3BlY3VsYXI6IG51bWJlciwgb25lTWludXNTcGVjdWxhclN0cmVuZ3RoOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgaWYgKHNwZWN1bGFyIDwgZGllbGVjdHJpY1NwZWN1bGFyLnIpIHtcclxuICAgICAgICBkaWVsZWN0cmljU3BlY3VsYXI7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYSA9IGRpZWxlY3RyaWNTcGVjdWxhci5yO1xyXG4gICAgY29uc3QgYiA9IChkaWZmdXNlICogb25lTWludXNTcGVjdWxhclN0cmVuZ3RoKSAvICgxLjAgLSBkaWVsZWN0cmljU3BlY3VsYXIucikgKyBzcGVjdWxhciAtIDIuMCAqIGRpZWxlY3RyaWNTcGVjdWxhci5yO1xyXG4gICAgY29uc3QgYyA9IGRpZWxlY3RyaWNTcGVjdWxhci5yIC0gc3BlY3VsYXI7XHJcbiAgICBjb25zdCBkID0gYiAqIGIgLSA0LjAgKiBhICogYztcclxuICAgIHJldHVybiBTY2FsYXIuQ2xhbXAoKC1iICsgTWF0aC5zcXJ0KGQpKSAvICgyLjAgKiBhKSwgMCwgMSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb21wdXRlcyB0aGUgbWV0YWxsaWMvcm91Z2huZXNzIGZhY3RvcnMgZnJvbSBhIFN0YW5kYXJkIE1hdGVyaWFsLlxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfQ29udmVydFRvR0xURlBCUk1ldGFsbGljUm91Z2huZXNzKGJhYnlsb25TdGFuZGFyZE1hdGVyaWFsOiBTdGFuZGFyZE1hdGVyaWFsKTogSU1hdGVyaWFsUGJyTWV0YWxsaWNSb3VnaG5lc3Mge1xyXG4gICAgLy8gRGVmaW5lcyBhIGN1YmljIGJlemllciBjdXJ2ZSB3aGVyZSB4IGlzIHNwZWN1bGFyIHBvd2VyIGFuZCB5IGlzIHJvdWdobmVzc1xyXG4gICAgY29uc3QgUDAgPSBuZXcgVmVjdG9yMigwLCAxKTtcclxuICAgIGNvbnN0IFAxID0gbmV3IFZlY3RvcjIoMCwgMC4xKTtcclxuICAgIGNvbnN0IFAyID0gbmV3IFZlY3RvcjIoMCwgMC4xKTtcclxuICAgIGNvbnN0IFAzID0gbmV3IFZlY3RvcjIoMTMwMCwgMC4xKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdpdmVuIHRoZSBjb250cm9sIHBvaW50cywgc29sdmUgZm9yIHggYmFzZWQgb24gYSBnaXZlbiB0IGZvciBhIGN1YmljIGJlemllciBjdXJ2ZVxyXG4gICAgICogQHBhcmFtIHQgYSB2YWx1ZSBiZXR3ZWVuIDAgYW5kIDFcclxuICAgICAqIEBwYXJhbSBwMCBmaXJzdCBjb250cm9sIHBvaW50XHJcbiAgICAgKiBAcGFyYW0gcDEgc2Vjb25kIGNvbnRyb2wgcG9pbnRcclxuICAgICAqIEBwYXJhbSBwMiB0aGlyZCBjb250cm9sIHBvaW50XHJcbiAgICAgKiBAcGFyYW0gcDMgZm91cnRoIGNvbnRyb2wgcG9pbnRcclxuICAgICAqIEByZXR1cm5zIG51bWJlciByZXN1bHQgb2YgY3ViaWMgYmV6aWVyIGN1cnZlIGF0IHRoZSBzcGVjaWZpZWQgdFxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBjdWJpY0JlemllckN1cnZlKHQ6IG51bWJlciwgcDA6IG51bWJlciwgcDE6IG51bWJlciwgcDI6IG51bWJlciwgcDM6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuICgxIC0gdCkgKiAoMSAtIHQpICogKDEgLSB0KSAqIHAwICsgMyAqICgxIC0gdCkgKiAoMSAtIHQpICogdCAqIHAxICsgMyAqICgxIC0gdCkgKiB0ICogdCAqIHAyICsgdCAqIHQgKiB0ICogcDM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFdmFsdWF0ZXMgYSBzcGVjaWZpZWQgc3BlY3VsYXIgcG93ZXIgdmFsdWUgdG8gZGV0ZXJtaW5lIHRoZSBhcHByb3ByaWF0ZSByb3VnaG5lc3MgdmFsdWUsXHJcbiAgICAgKiBiYXNlZCBvbiBhIHByZS1kZWZpbmVkIGN1YmljIGJlemllciBjdXJ2ZSB3aXRoIHNwZWN1bGFyIG9uIHRoZSBhYnNjaXNzYSBheGlzICh4LWF4aXMpXHJcbiAgICAgKiBhbmQgcm91Z2huZXNzIG9uIHRoZSBvcmRpbmFudCBheGlzICh5LWF4aXMpXHJcbiAgICAgKiBAcGFyYW0gc3BlY3VsYXJQb3dlciBzcGVjdWxhciBwb3dlciBvZiBzdGFuZGFyZCBtYXRlcmlhbFxyXG4gICAgICogQHJldHVybnMgTnVtYmVyIHJlcHJlc2VudGluZyB0aGUgcm91Z2huZXNzIHZhbHVlXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHNvbHZlRm9yUm91Z2huZXNzKHNwZWN1bGFyUG93ZXI6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgLy8gR2l2ZW4gUDAueCA9IDAsIFAxLnggPSAwLCBQMi54ID0gMFxyXG4gICAgICAgIC8vICAgeCA9IHQgKiB0ICogdCAqIFAzLnhcclxuICAgICAgICAvLyAgIHQgPSAoeCAvIFAzLngpXigxLzMpXHJcbiAgICAgICAgY29uc3QgdCA9IE1hdGgucG93KHNwZWN1bGFyUG93ZXIgLyBQMy54LCAwLjMzMzMzMyk7XHJcbiAgICAgICAgcmV0dXJuIGN1YmljQmV6aWVyQ3VydmUodCwgUDAueSwgUDEueSwgUDIueSwgUDMueSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGlmZnVzZSA9IGJhYnlsb25TdGFuZGFyZE1hdGVyaWFsLmRpZmZ1c2VDb2xvci50b0xpbmVhclNwYWNlKGJhYnlsb25TdGFuZGFyZE1hdGVyaWFsLmdldFNjZW5lKCkuZ2V0RW5naW5lKCkudXNlRXhhY3RTcmdiQ29udmVyc2lvbnMpLnNjYWxlKDAuNSk7XHJcbiAgICBjb25zdCBvcGFjaXR5ID0gYmFieWxvblN0YW5kYXJkTWF0ZXJpYWwuYWxwaGE7XHJcbiAgICBjb25zdCBzcGVjdWxhclBvd2VyID0gU2NhbGFyLkNsYW1wKGJhYnlsb25TdGFuZGFyZE1hdGVyaWFsLnNwZWN1bGFyUG93ZXIsIDAsIG1heFNwZWN1bGFyUG93ZXIpO1xyXG5cclxuICAgIGNvbnN0IHJvdWdobmVzcyA9IHNvbHZlRm9yUm91Z2huZXNzKHNwZWN1bGFyUG93ZXIpO1xyXG5cclxuICAgIGNvbnN0IGdsVEZQYnJNZXRhbGxpY1JvdWdobmVzczogSU1hdGVyaWFsUGJyTWV0YWxsaWNSb3VnaG5lc3MgPSB7XHJcbiAgICAgICAgYmFzZUNvbG9yRmFjdG9yOiBbZGlmZnVzZS5yLCBkaWZmdXNlLmcsIGRpZmZ1c2UuYiwgb3BhY2l0eV0sXHJcbiAgICAgICAgbWV0YWxsaWNGYWN0b3I6IDAsXHJcbiAgICAgICAgcm91Z2huZXNzRmFjdG9yOiByb3VnaG5lc3MsXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBnbFRGUGJyTWV0YWxsaWNSb3VnaG5lc3M7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTZXRzIHRoZSBnbFRGIGFscGhhIG1vZGUgdG8gYSBnbFRGIG1hdGVyaWFsIGZyb20gdGhlIEJhYnlsb24gTWF0ZXJpYWxcclxuICogQHBhcmFtIGdsVEZNYXRlcmlhbCBnbFRGIG1hdGVyaWFsXHJcbiAqIEBwYXJhbSBiYWJ5bG9uTWF0ZXJpYWwgQmFieWxvbiBtYXRlcmlhbFxyXG4gKi9cclxuZnVuY3Rpb24gU2V0QWxwaGFNb2RlKGdsVEZNYXRlcmlhbDogSU1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsICYgeyBhbHBoYUN1dE9mZj86IG51bWJlciB9KTogdm9pZCB7XHJcbiAgICBpZiAoYmFieWxvbk1hdGVyaWFsLm5lZWRBbHBoYUJsZW5kaW5nKCkpIHtcclxuICAgICAgICBnbFRGTWF0ZXJpYWwuYWxwaGFNb2RlID0gTWF0ZXJpYWxBbHBoYU1vZGUuQkxFTkQ7XHJcbiAgICB9IGVsc2UgaWYgKGJhYnlsb25NYXRlcmlhbC5uZWVkQWxwaGFUZXN0aW5nKCkpIHtcclxuICAgICAgICBnbFRGTWF0ZXJpYWwuYWxwaGFNb2RlID0gTWF0ZXJpYWxBbHBoYU1vZGUuTUFTSztcclxuICAgICAgICBnbFRGTWF0ZXJpYWwuYWxwaGFDdXRvZmYgPSBiYWJ5bG9uTWF0ZXJpYWwuYWxwaGFDdXRPZmY7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIENyZWF0ZVdoaXRlVGV4dHVyZSh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgc2NlbmU6IFNjZW5lKTogVGV4dHVyZSB7XHJcbiAgICBjb25zdCBkYXRhID0gbmV3IFVpbnQ4QXJyYXkod2lkdGggKiBoZWlnaHQgKiA0KTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpID0gaSArIDQpIHtcclxuICAgICAgICBkYXRhW2ldID0gZGF0YVtpICsgMV0gPSBkYXRhW2kgKyAyXSA9IGRhdGFbaSArIDNdID0gMHhmZjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByYXdUZXh0dXJlID0gUmF3VGV4dHVyZS5DcmVhdGVSR0JBVGV4dHVyZShkYXRhLCB3aWR0aCwgaGVpZ2h0LCBzY2VuZSk7XHJcblxyXG4gICAgcmV0dXJuIHJhd1RleHR1cmU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIENvbnZlcnRQaXhlbEFycmF5VG9GbG9hdDMyKHBpeGVsczogQXJyYXlCdWZmZXJWaWV3KTogRmxvYXQzMkFycmF5IHtcclxuICAgIGlmIChwaXhlbHMgaW5zdGFuY2VvZiBVaW50OEFycmF5KSB7XHJcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gcGl4ZWxzLmxlbmd0aDtcclxuICAgICAgICBjb25zdCBidWZmZXIgPSBuZXcgRmxvYXQzMkFycmF5KHBpeGVscy5sZW5ndGgpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgYnVmZmVyW2ldID0gcGl4ZWxzW2ldIC8gMjU1O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYnVmZmVyO1xyXG4gICAgfSBlbHNlIGlmIChwaXhlbHMgaW5zdGFuY2VvZiBGbG9hdDMyQXJyYXkpIHtcclxuICAgICAgICByZXR1cm4gcGl4ZWxzO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbnN1cHBvcnRlZCBwaXhlbCBmb3JtYXQhXCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogVXRpbGl0eSBtZXRob2RzIGZvciB3b3JraW5nIHdpdGggZ2xURiBtYXRlcmlhbCBjb252ZXJzaW9uIHByb3BlcnRpZXMuXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEdMVEZNYXRlcmlhbEV4cG9ydGVyIHtcclxuICAgIC8vIE1hcHBpbmcgdG8gc3RvcmUgdGV4dHVyZXNcclxuICAgIHByaXZhdGUgX3RleHR1cmVNYXAgPSBuZXcgTWFwPEJhc2VUZXh0dXJlLCBJVGV4dHVyZUluZm8+KCk7XHJcblxyXG4gICAgLy8gTWFwcGluZyBvZiBpbnRlcm5hbCB0ZXh0dXJlcyB0byBpbWFnZXMgdG8gYXZvaWQgZXhwb3J0aW5nIGR1cGxpY2F0ZSBpbWFnZXNcclxuICAgIHByaXZhdGUgX2ludGVybmFsVGV4dHVyZVRvSW1hZ2U6IHsgW3VuaXF1ZUlkOiBudW1iZXJdOiB7IFttaW1lVHlwZTogc3RyaW5nXTogUHJvbWlzZTxudW1iZXI+IH0gfSA9IHt9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgX2V4cG9ydGVyOiBHTFRGRXhwb3J0ZXIpIHt9XHJcblxyXG4gICAgcHVibGljIGdldFRleHR1cmVJbmZvKGJhYnlsb25UZXh0dXJlOiBOdWxsYWJsZTxCYXNlVGV4dHVyZT4pOiBOdWxsYWJsZTxJVGV4dHVyZUluZm8+IHtcclxuICAgICAgICByZXR1cm4gYmFieWxvblRleHR1cmUgPyAodGhpcy5fdGV4dHVyZU1hcC5nZXQoYmFieWxvblRleHR1cmUpID8/IG51bGwpIDogbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZXhwb3J0U3RhbmRhcmRNYXRlcmlhbEFzeW5jKGJhYnlsb25TdGFuZGFyZE1hdGVyaWFsOiBTdGFuZGFyZE1hdGVyaWFsLCBtaW1lVHlwZTogSW1hZ2VNaW1lVHlwZSwgaGFzVVZzOiBib29sZWFuKTogUHJvbWlzZTxudW1iZXI+IHtcclxuICAgICAgICBjb25zdCBwYnJNZXRhbGxpY1JvdWdobmVzcyA9IF9Db252ZXJ0VG9HTFRGUEJSTWV0YWxsaWNSb3VnaG5lc3MoYmFieWxvblN0YW5kYXJkTWF0ZXJpYWwpO1xyXG5cclxuICAgICAgICBjb25zdCBtYXRlcmlhbDogSU1hdGVyaWFsID0geyBuYW1lOiBiYWJ5bG9uU3RhbmRhcmRNYXRlcmlhbC5uYW1lIH07XHJcbiAgICAgICAgaWYgKGJhYnlsb25TdGFuZGFyZE1hdGVyaWFsLmJhY2tGYWNlQ3VsbGluZyAhPSBudWxsICYmICFiYWJ5bG9uU3RhbmRhcmRNYXRlcmlhbC5iYWNrRmFjZUN1bGxpbmcpIHtcclxuICAgICAgICAgICAgaWYgKCFiYWJ5bG9uU3RhbmRhcmRNYXRlcmlhbC50d29TaWRlZExpZ2h0aW5nKSB7XHJcbiAgICAgICAgICAgICAgICBUb29scy5XYXJuKGJhYnlsb25TdGFuZGFyZE1hdGVyaWFsLm5hbWUgKyBcIjogQmFjay1mYWNlIGN1bGxpbmcgZGlzYWJsZWQgYW5kIHR3by1zaWRlZCBsaWdodGluZyBkaXNhYmxlZCBpcyBub3Qgc3VwcG9ydGVkIGluIGdsVEYuXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1hdGVyaWFsLmRvdWJsZVNpZGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChoYXNVVnMpIHtcclxuICAgICAgICAgICAgY29uc3QgcHJvbWlzZXM6IFByb21pc2U8dm9pZD5bXSA9IFtdO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZGlmZnVzZVRleHR1cmUgPSBiYWJ5bG9uU3RhbmRhcmRNYXRlcmlhbC5kaWZmdXNlVGV4dHVyZTtcclxuICAgICAgICAgICAgaWYgKGRpZmZ1c2VUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXhwb3J0VGV4dHVyZUFzeW5jKGRpZmZ1c2VUZXh0dXJlLCBtaW1lVHlwZSkudGhlbigodGV4dHVyZUluZm8pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRleHR1cmVJbmZvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYnJNZXRhbGxpY1JvdWdobmVzcy5iYXNlQ29sb3JUZXh0dXJlID0gdGV4dHVyZUluZm87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgYnVtcFRleHR1cmUgPSBiYWJ5bG9uU3RhbmRhcmRNYXRlcmlhbC5idW1wVGV4dHVyZTtcclxuICAgICAgICAgICAgaWYgKGJ1bXBUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXhwb3J0VGV4dHVyZUFzeW5jKGJ1bXBUZXh0dXJlLCBtaW1lVHlwZSkudGhlbigodGV4dHVyZUluZm8pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRleHR1cmVJbmZvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRlcmlhbC5ub3JtYWxUZXh0dXJlID0gdGV4dHVyZUluZm87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYnVtcFRleHR1cmUubGV2ZWwgIT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRlcmlhbC5ub3JtYWxUZXh0dXJlLnNjYWxlID0gYnVtcFRleHR1cmUubGV2ZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgZW1pc3NpdmVUZXh0dXJlID0gYmFieWxvblN0YW5kYXJkTWF0ZXJpYWwuZW1pc3NpdmVUZXh0dXJlO1xyXG4gICAgICAgICAgICBpZiAoZW1pc3NpdmVUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbC5lbWlzc2l2ZUZhY3RvciA9IFsxLjAsIDEuMCwgMS4wXTtcclxuXHJcbiAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXhwb3J0VGV4dHVyZUFzeW5jKGVtaXNzaXZlVGV4dHVyZSwgbWltZVR5cGUpLnRoZW4oKHRleHR1cmVJbmZvKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ZXh0dXJlSW5mbykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYWwuZW1pc3NpdmVUZXh0dXJlID0gdGV4dHVyZUluZm87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgYW1iaWVudFRleHR1cmUgPSBiYWJ5bG9uU3RhbmRhcmRNYXRlcmlhbC5hbWJpZW50VGV4dHVyZTtcclxuICAgICAgICAgICAgaWYgKGFtYmllbnRUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXhwb3J0VGV4dHVyZUFzeW5jKGFtYmllbnRUZXh0dXJlLCBtaW1lVHlwZSkudGhlbigodGV4dHVyZUluZm8pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRleHR1cmVJbmZvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvY2NsdXNpb25UZXh0dXJlOiBJTWF0ZXJpYWxPY2NsdXNpb25UZXh0dXJlSW5mbyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogdGV4dHVyZUluZm8uaW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYWwub2NjbHVzaW9uVGV4dHVyZSA9IG9jY2x1c2lvblRleHR1cmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHByb21pc2VzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2V4cG9ydGVyLl9tYXRlcmlhbE5lZWRzVVZzU2V0LmFkZChiYWJ5bG9uU3RhbmRhcmRNYXRlcmlhbCk7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChiYWJ5bG9uU3RhbmRhcmRNYXRlcmlhbC5hbHBoYSA8IDEuMCB8fCBiYWJ5bG9uU3RhbmRhcmRNYXRlcmlhbC5vcGFjaXR5VGV4dHVyZSkge1xyXG4gICAgICAgICAgICBpZiAoYmFieWxvblN0YW5kYXJkTWF0ZXJpYWwuYWxwaGFNb2RlID09PSBDb25zdGFudHMuQUxQSEFfQ09NQklORSkge1xyXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWwuYWxwaGFNb2RlID0gTWF0ZXJpYWxBbHBoYU1vZGUuQkxFTkQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBUb29scy5XYXJuKGJhYnlsb25TdGFuZGFyZE1hdGVyaWFsLm5hbWUgKyBcIjogZ2xURiAyLjAgZG9lcyBub3Qgc3VwcG9ydCBhbHBoYSBtb2RlOiBcIiArIGJhYnlsb25TdGFuZGFyZE1hdGVyaWFsLmFscGhhTW9kZS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGJhYnlsb25TdGFuZGFyZE1hdGVyaWFsLmVtaXNzaXZlQ29sb3IgJiYgIWJhYnlsb25TdGFuZGFyZE1hdGVyaWFsLmVtaXNzaXZlQ29sb3IuZXF1YWxzV2l0aEVwc2lsb24oYmxhY2ssIGVwc2lsb24pKSB7XHJcbiAgICAgICAgICAgIG1hdGVyaWFsLmVtaXNzaXZlRmFjdG9yID0gYmFieWxvblN0YW5kYXJkTWF0ZXJpYWwuZW1pc3NpdmVDb2xvci5hc0FycmF5KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtYXRlcmlhbC5wYnJNZXRhbGxpY1JvdWdobmVzcyA9IHBick1ldGFsbGljUm91Z2huZXNzO1xyXG4gICAgICAgIFNldEFscGhhTW9kZShtYXRlcmlhbCwgYmFieWxvblN0YW5kYXJkTWF0ZXJpYWwpO1xyXG5cclxuICAgICAgICBhd2FpdCB0aGlzLl9maW5pc2hNYXRlcmlhbEFzeW5jKG1hdGVyaWFsLCBiYWJ5bG9uU3RhbmRhcmRNYXRlcmlhbCwgbWltZVR5cGUpO1xyXG5cclxuICAgICAgICBjb25zdCBtYXRlcmlhbHMgPSB0aGlzLl9leHBvcnRlci5fbWF0ZXJpYWxzO1xyXG4gICAgICAgIG1hdGVyaWFscy5wdXNoKG1hdGVyaWFsKTtcclxuICAgICAgICByZXR1cm4gbWF0ZXJpYWxzLmxlbmd0aCAtIDE7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBfZmluaXNoTWF0ZXJpYWxBc3luYyhnbFRGTWF0ZXJpYWw6IElNYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCwgbWltZVR5cGU6IEltYWdlTWltZVR5cGUpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBjb25zdCB0ZXh0dXJlcyA9IHRoaXMuX2V4cG9ydGVyLl9leHRlbnNpb25zUG9zdEV4cG9ydE1hdGVyaWFsQWRkaXRpb25hbFRleHR1cmVzKFwiZXhwb3J0TWF0ZXJpYWxcIiwgZ2xURk1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWwpO1xyXG5cclxuICAgICAgICBjb25zdCBwcm9taXNlczogQXJyYXk8UHJvbWlzZTxOdWxsYWJsZTxJVGV4dHVyZUluZm8+Pj4gPSBbXTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCB0ZXh0dXJlIG9mIHRleHR1cmVzKSB7XHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5leHBvcnRUZXh0dXJlQXN5bmModGV4dHVyZSwgbWltZVR5cGUpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuXHJcbiAgICAgICAgYXdhaXQgdGhpcy5fZXhwb3J0ZXIuX2V4dGVuc2lvbnNQb3N0RXhwb3J0TWF0ZXJpYWxBc3luYyhcImV4cG9ydE1hdGVyaWFsXCIsIGdsVEZNYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIF9nZXRJbWFnZURhdGFBc3luYyhidWZmZXI6IFVpbnQ4QXJyYXkgfCBGbG9hdDMyQXJyYXksIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBtaW1lVHlwZTogSW1hZ2VNaW1lVHlwZSk6IFByb21pc2U8QXJyYXlCdWZmZXI+IHtcclxuICAgICAgICBjb25zdCB0ZXh0dXJlVHlwZSA9IENvbnN0YW50cy5URVhUVVJFVFlQRV9VTlNJR05FRF9CWVRFO1xyXG5cclxuICAgICAgICBjb25zdCBob3N0aW5nU2NlbmUgPSB0aGlzLl9leHBvcnRlci5fYmFieWxvblNjZW5lO1xyXG4gICAgICAgIGNvbnN0IGVuZ2luZSA9IGhvc3RpbmdTY2VuZS5nZXRFbmdpbmUoKTtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIGEgdGVtcG9yYXJ5IHRleHR1cmUgd2l0aCB0aGUgdGV4dHVyZSBidWZmZXIgZGF0YVxyXG4gICAgICAgIGNvbnN0IHRlbXBUZXh0dXJlID0gZW5naW5lLmNyZWF0ZVJhd1RleHR1cmUoYnVmZmVyLCB3aWR0aCwgaGVpZ2h0LCBDb25zdGFudHMuVEVYVFVSRUZPUk1BVF9SR0JBLCBmYWxzZSwgdHJ1ZSwgVGV4dHVyZS5ORUFSRVNUX1NBTVBMSU5HTU9ERSwgbnVsbCwgdGV4dHVyZVR5cGUpO1xyXG5cclxuICAgICAgICBlbmdpbmUuaXNXZWJHUFUgPyBhd2FpdCBpbXBvcnQoXCJjb3JlL1NoYWRlcnNXR1NML3Bhc3MuZnJhZ21lbnRcIikgOiBhd2FpdCBpbXBvcnQoXCJjb3JlL1NoYWRlcnMvcGFzcy5mcmFnbWVudFwiKTtcclxuICAgICAgICBhd2FpdCBUZXh0dXJlVG9vbHMuQXBwbHlQb3N0UHJvY2VzcyhcInBhc3NcIiwgdGVtcFRleHR1cmUsIGhvc3RpbmdTY2VuZSwgdGV4dHVyZVR5cGUsIENvbnN0YW50cy5URVhUVVJFX05FQVJFU1RfU0FNUExJTkdNT0RFLCBDb25zdGFudHMuVEVYVFVSRUZPUk1BVF9SR0JBKTtcclxuXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGVuZ2luZS5fcmVhZFRleHR1cmVQaXhlbHModGVtcFRleHR1cmUsIHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgICAgICByZXR1cm4gKGF3YWl0IER1bXBUb29scy5EdW1wRGF0YUFzeW5jKHdpZHRoLCBoZWlnaHQsIGRhdGEsIG1pbWVUeXBlLCB1bmRlZmluZWQsIHRydWUsIHRydWUpKSBhcyBBcnJheUJ1ZmZlcjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlc2l6ZXMgdGhlIHR3byBzb3VyY2UgdGV4dHVyZXMgdG8gdGhlIHNhbWUgZGltZW5zaW9ucy4gIElmIGEgdGV4dHVyZSBpcyBudWxsLCBhIGRlZmF1bHQgd2hpdGUgdGV4dHVyZSBpcyBnZW5lcmF0ZWQuICBJZiBib3RoIHRleHR1cmVzIGFyZSBudWxsLCByZXR1cm5zIG51bGxcclxuICAgICAqIEBwYXJhbSB0ZXh0dXJlMSBmaXJzdCB0ZXh0dXJlIHRvIHJlc2l6ZVxyXG4gICAgICogQHBhcmFtIHRleHR1cmUyIHNlY29uZCB0ZXh0dXJlIHRvIHJlc2l6ZVxyXG4gICAgICogQHBhcmFtIHNjZW5lIGJhYnlsb25qcyBzY2VuZVxyXG4gICAgICogQHJldHVybnMgcmVzaXplZCB0ZXh0dXJlcyBvciBudWxsXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX3Jlc2l6ZVRleHR1cmVzVG9TYW1lRGltZW5zaW9ucyh0ZXh0dXJlMTogTnVsbGFibGU8QmFzZVRleHR1cmU+LCB0ZXh0dXJlMjogTnVsbGFibGU8QmFzZVRleHR1cmU+LCBzY2VuZTogU2NlbmUpOiB7IHRleHR1cmUxOiBCYXNlVGV4dHVyZTsgdGV4dHVyZTI6IEJhc2VUZXh0dXJlIH0ge1xyXG4gICAgICAgIGNvbnN0IHRleHR1cmUxU2l6ZSA9IHRleHR1cmUxID8gdGV4dHVyZTEuZ2V0U2l6ZSgpIDogeyB3aWR0aDogMCwgaGVpZ2h0OiAwIH07XHJcbiAgICAgICAgY29uc3QgdGV4dHVyZTJTaXplID0gdGV4dHVyZTIgPyB0ZXh0dXJlMi5nZXRTaXplKCkgOiB7IHdpZHRoOiAwLCBoZWlnaHQ6IDAgfTtcclxuICAgICAgICBsZXQgcmVzaXplZFRleHR1cmUxOiBCYXNlVGV4dHVyZTtcclxuICAgICAgICBsZXQgcmVzaXplZFRleHR1cmUyOiBCYXNlVGV4dHVyZTtcclxuXHJcbiAgICAgICAgaWYgKHRleHR1cmUxU2l6ZS53aWR0aCA8IHRleHR1cmUyU2l6ZS53aWR0aCkge1xyXG4gICAgICAgICAgICBpZiAodGV4dHVyZTEgJiYgdGV4dHVyZTEgaW5zdGFuY2VvZiBUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICByZXNpemVkVGV4dHVyZTEgPSBUZXh0dXJlVG9vbHMuQ3JlYXRlUmVzaXplZENvcHkodGV4dHVyZTEsIHRleHR1cmUyU2l6ZS53aWR0aCwgdGV4dHVyZTJTaXplLmhlaWdodCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXNpemVkVGV4dHVyZTEgPSBDcmVhdGVXaGl0ZVRleHR1cmUodGV4dHVyZTJTaXplLndpZHRoLCB0ZXh0dXJlMlNpemUuaGVpZ2h0LCBzY2VuZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzaXplZFRleHR1cmUyID0gdGV4dHVyZTIhO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGV4dHVyZTFTaXplLndpZHRoID4gdGV4dHVyZTJTaXplLndpZHRoKSB7XHJcbiAgICAgICAgICAgIGlmICh0ZXh0dXJlMiAmJiB0ZXh0dXJlMiBpbnN0YW5jZW9mIFRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgIHJlc2l6ZWRUZXh0dXJlMiA9IFRleHR1cmVUb29scy5DcmVhdGVSZXNpemVkQ29weSh0ZXh0dXJlMiwgdGV4dHVyZTFTaXplLndpZHRoLCB0ZXh0dXJlMVNpemUuaGVpZ2h0LCB0cnVlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlc2l6ZWRUZXh0dXJlMiA9IENyZWF0ZVdoaXRlVGV4dHVyZSh0ZXh0dXJlMVNpemUud2lkdGgsIHRleHR1cmUxU2l6ZS5oZWlnaHQsIHNjZW5lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXNpemVkVGV4dHVyZTEgPSB0ZXh0dXJlMSE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVzaXplZFRleHR1cmUxID0gdGV4dHVyZTEhO1xyXG4gICAgICAgICAgICByZXNpemVkVGV4dHVyZTIgPSB0ZXh0dXJlMiE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0ZXh0dXJlMTogcmVzaXplZFRleHR1cmUxISxcclxuICAgICAgICAgICAgdGV4dHVyZTI6IHJlc2l6ZWRUZXh0dXJlMiEsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgU3BlY3VsYXIgR2xvc3NpbmVzcyBUZXh0dXJlcyB0byBNZXRhbGxpYyBSb3VnaG5lc3NcclxuICAgICAqIFNlZSBsaW5rIGJlbG93IGZvciBpbmZvIG9uIHRoZSBtYXRlcmlhbCBjb252ZXJzaW9ucyBmcm9tIFBCUiBNZXRhbGxpYy9Sb3VnaG5lc3MgYW5kIFNwZWN1bGFyL0dsb3NzaW5lc3NcclxuICAgICAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFpbi9leHRlbnNpb25zLzIuMC9BcmNoaXZlZC9LSFJfbWF0ZXJpYWxzX3BiclNwZWN1bGFyR2xvc3NpbmVzcy9leGFtcGxlcy9jb252ZXJ0LWJldHdlZW4td29ya2Zsb3dzLWJqcy9qcy9iYWJ5bG9uLnBiclV0aWxpdGllcy5qc1xyXG4gICAgICogQHBhcmFtIGRpZmZ1c2VUZXh0dXJlIHRleHR1cmUgdXNlZCB0byBzdG9yZSBkaWZmdXNlIGluZm9ybWF0aW9uXHJcbiAgICAgKiBAcGFyYW0gc3BlY3VsYXJHbG9zc2luZXNzVGV4dHVyZSB0ZXh0dXJlIHVzZWQgdG8gc3RvcmUgc3BlY3VsYXIgYW5kIGdsb3NzaW5lc3MgaW5mb3JtYXRpb25cclxuICAgICAqIEBwYXJhbSBmYWN0b3JzIHNwZWN1bGFyIGdsb3NzaW5lc3MgbWF0ZXJpYWwgZmFjdG9yc1xyXG4gICAgICogQHBhcmFtIG1pbWVUeXBlIHRoZSBtaW1lIHR5cGUgdG8gdXNlIGZvciB0aGUgdGV4dHVyZVxyXG4gICAgICogQHJldHVybnMgcGJyIG1ldGFsbGljIHJvdWdobmVzcyBpbnRlcmZhY2Ugb3IgbnVsbFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGFzeW5jIF9jb252ZXJ0U3BlY3VsYXJHbG9zc2luZXNzVGV4dHVyZXNUb01ldGFsbGljUm91Z2huZXNzQXN5bmMoXHJcbiAgICAgICAgZGlmZnVzZVRleHR1cmU6IE51bGxhYmxlPEJhc2VUZXh0dXJlPixcclxuICAgICAgICBzcGVjdWxhckdsb3NzaW5lc3NUZXh0dXJlOiBOdWxsYWJsZTxCYXNlVGV4dHVyZT4sXHJcbiAgICAgICAgZmFjdG9yczogSVBCUlNwZWN1bGFyR2xvc3NpbmVzcyxcclxuICAgICAgICBtaW1lVHlwZTogSW1hZ2VNaW1lVHlwZVxyXG4gICAgKTogUHJvbWlzZTxJUEJSTWV0YWxsaWNSb3VnaG5lc3M+IHtcclxuICAgICAgICBjb25zdCBwcm9taXNlcyA9IG5ldyBBcnJheTxQcm9taXNlPHZvaWQ+PigpO1xyXG4gICAgICAgIGlmICghKGRpZmZ1c2VUZXh0dXJlIHx8IHNwZWN1bGFyR2xvc3NpbmVzc1RleHR1cmUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcImRpZmZ1c2UgYW5kIHNwZWN1bGFyIGdsb3NzaW5lc3MgdGV4dHVyZXMgYXJlIG5vdCBkZWZpbmVkIVwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNjZW5lOiBOdWxsYWJsZTxTY2VuZT4gPSBkaWZmdXNlVGV4dHVyZSA/IGRpZmZ1c2VUZXh0dXJlLmdldFNjZW5lKCkgOiBzcGVjdWxhckdsb3NzaW5lc3NUZXh0dXJlID8gc3BlY3VsYXJHbG9zc2luZXNzVGV4dHVyZS5nZXRTY2VuZSgpIDogbnVsbDtcclxuICAgICAgICBpZiAoc2NlbmUpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzaXplZFRleHR1cmVzID0gdGhpcy5fcmVzaXplVGV4dHVyZXNUb1NhbWVEaW1lbnNpb25zKGRpZmZ1c2VUZXh0dXJlLCBzcGVjdWxhckdsb3NzaW5lc3NUZXh0dXJlLCBzY2VuZSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkaWZmdXNlU2l6ZSA9IHJlc2l6ZWRUZXh0dXJlcy50ZXh0dXJlMT8uZ2V0U2l6ZSgpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGRpZmZ1c2VCdWZmZXI6IEZsb2F0MzJBcnJheTtcclxuICAgICAgICAgICAgbGV0IHNwZWN1bGFyR2xvc3NpbmVzc0J1ZmZlcjogRmxvYXQzMkFycmF5O1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBkaWZmdXNlU2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gZGlmZnVzZVNpemUuaGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZGlmZnVzZVBpeGVscyA9IGF3YWl0IHJlc2l6ZWRUZXh0dXJlcy50ZXh0dXJlMS5yZWFkUGl4ZWxzKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNwZWN1bGFyUGl4ZWxzID0gYXdhaXQgcmVzaXplZFRleHR1cmVzLnRleHR1cmUyLnJlYWRQaXhlbHMoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChkaWZmdXNlUGl4ZWxzKSB7XHJcbiAgICAgICAgICAgICAgICBkaWZmdXNlQnVmZmVyID0gQ29udmVydFBpeGVsQXJyYXlUb0Zsb2F0MzIoZGlmZnVzZVBpeGVscyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXCJGYWlsZWQgdG8gcmV0cmlldmUgcGl4ZWxzIGZyb20gZGlmZnVzZSB0ZXh0dXJlIVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc3BlY3VsYXJQaXhlbHMpIHtcclxuICAgICAgICAgICAgICAgIHNwZWN1bGFyR2xvc3NpbmVzc0J1ZmZlciA9IENvbnZlcnRQaXhlbEFycmF5VG9GbG9hdDMyKHNwZWN1bGFyUGl4ZWxzKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcIkZhaWxlZCB0byByZXRyaWV2ZSBwaXhlbHMgZnJvbSBzcGVjdWxhciBnbG9zc2luZXNzIHRleHR1cmUhXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBieXRlTGVuZ3RoID0gc3BlY3VsYXJHbG9zc2luZXNzQnVmZmVyLmJ5dGVMZW5ndGg7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtZXRhbGxpY1JvdWdobmVzc0J1ZmZlciA9IG5ldyBVaW50OEFycmF5KGJ5dGVMZW5ndGgpO1xyXG4gICAgICAgICAgICBjb25zdCBiYXNlQ29sb3JCdWZmZXIgPSBuZXcgVWludDhBcnJheShieXRlTGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHN0cmlkZVNpemUgPSA0O1xyXG4gICAgICAgICAgICBjb25zdCBtYXhCYXNlQ29sb3IgPSBibGFjaztcclxuICAgICAgICAgICAgbGV0IG1heE1ldGFsbGljID0gMDtcclxuICAgICAgICAgICAgbGV0IG1heFJvdWdobmVzcyA9IDA7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBoID0gMDsgaCA8IGhlaWdodDsgKytoKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB3ID0gMDsgdyA8IHdpZHRoOyArK3cpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvZmZzZXQgPSAod2lkdGggKiBoICsgdykgKiBzdHJpZGVTaXplO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkaWZmdXNlQ29sb3IgPSBuZXcgQ29sb3IzKGRpZmZ1c2VCdWZmZXJbb2Zmc2V0XSwgZGlmZnVzZUJ1ZmZlcltvZmZzZXQgKyAxXSwgZGlmZnVzZUJ1ZmZlcltvZmZzZXQgKyAyXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvTGluZWFyU3BhY2Uoc2NlbmUuZ2V0RW5naW5lKCkudXNlRXhhY3RTcmdiQ29udmVyc2lvbnMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tdWx0aXBseShmYWN0b3JzLmRpZmZ1c2VDb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3BlY3VsYXJDb2xvciA9IG5ldyBDb2xvcjMoc3BlY3VsYXJHbG9zc2luZXNzQnVmZmVyW29mZnNldF0sIHNwZWN1bGFyR2xvc3NpbmVzc0J1ZmZlcltvZmZzZXQgKyAxXSwgc3BlY3VsYXJHbG9zc2luZXNzQnVmZmVyW29mZnNldCArIDJdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudG9MaW5lYXJTcGFjZShzY2VuZS5nZXRFbmdpbmUoKS51c2VFeGFjdFNyZ2JDb252ZXJzaW9ucylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm11bHRpcGx5KGZhY3RvcnMuc3BlY3VsYXJDb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZ2xvc3NpbmVzcyA9IHNwZWN1bGFyR2xvc3NpbmVzc0J1ZmZlcltvZmZzZXQgKyAzXSAqIGZhY3RvcnMuZ2xvc3NpbmVzcztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3BlY3VsYXJHbG9zc2luZXNzOiBJUEJSU3BlY3VsYXJHbG9zc2luZXNzID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaWZmdXNlQ29sb3I6IGRpZmZ1c2VDb2xvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3BlY3VsYXJDb2xvcjogc3BlY3VsYXJDb2xvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2xvc3NpbmVzczogZ2xvc3NpbmVzcyxcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXRhbGxpY1JvdWdobmVzcyA9IHRoaXMuX2NvbnZlcnRTcGVjdWxhckdsb3NzaW5lc3NUb01ldGFsbGljUm91Z2huZXNzKHNwZWN1bGFyR2xvc3NpbmVzcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4QmFzZUNvbG9yLnIgPSBNYXRoLm1heChtYXhCYXNlQ29sb3IuciwgbWV0YWxsaWNSb3VnaG5lc3MuYmFzZUNvbG9yLnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heEJhc2VDb2xvci5nID0gTWF0aC5tYXgobWF4QmFzZUNvbG9yLmcsIG1ldGFsbGljUm91Z2huZXNzLmJhc2VDb2xvci5nKTtcclxuICAgICAgICAgICAgICAgICAgICBtYXhCYXNlQ29sb3IuYiA9IE1hdGgubWF4KG1heEJhc2VDb2xvci5iLCBtZXRhbGxpY1JvdWdobmVzcy5iYXNlQ29sb3IuYik7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4TWV0YWxsaWMgPSBNYXRoLm1heChtYXhNZXRhbGxpYywgbWV0YWxsaWNSb3VnaG5lc3MubWV0YWxsaWMhKTtcclxuICAgICAgICAgICAgICAgICAgICBtYXhSb3VnaG5lc3MgPSBNYXRoLm1heChtYXhSb3VnaG5lc3MsIG1ldGFsbGljUm91Z2huZXNzLnJvdWdobmVzcyEpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBiYXNlQ29sb3JCdWZmZXJbb2Zmc2V0XSA9IG1ldGFsbGljUm91Z2huZXNzLmJhc2VDb2xvci5yICogMjU1O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhc2VDb2xvckJ1ZmZlcltvZmZzZXQgKyAxXSA9IG1ldGFsbGljUm91Z2huZXNzLmJhc2VDb2xvci5nICogMjU1O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhc2VDb2xvckJ1ZmZlcltvZmZzZXQgKyAyXSA9IG1ldGFsbGljUm91Z2huZXNzLmJhc2VDb2xvci5iICogMjU1O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhc2VDb2xvckJ1ZmZlcltvZmZzZXQgKyAzXSA9IHJlc2l6ZWRUZXh0dXJlcy50ZXh0dXJlMS5oYXNBbHBoYSA/IGRpZmZ1c2VCdWZmZXJbb2Zmc2V0ICsgM10gKiAyNTUgOiAyNTU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG1ldGFsbGljUm91Z2huZXNzQnVmZmVyW29mZnNldF0gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGFsbGljUm91Z2huZXNzQnVmZmVyW29mZnNldCArIDFdID0gbWV0YWxsaWNSb3VnaG5lc3Mucm91Z2huZXNzISAqIDI1NTtcclxuICAgICAgICAgICAgICAgICAgICBtZXRhbGxpY1JvdWdobmVzc0J1ZmZlcltvZmZzZXQgKyAyXSA9IG1ldGFsbGljUm91Z2huZXNzLm1ldGFsbGljISAqIDI1NTtcclxuICAgICAgICAgICAgICAgICAgICBtZXRhbGxpY1JvdWdobmVzc0J1ZmZlcltvZmZzZXQgKyAzXSA9IDI1NTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gUmV0cmlldmVzIHRoZSBtZXRhbGxpYyByb3VnaG5lc3MgZmFjdG9ycyBmcm9tIHRoZSBtYXhpbXVtIHRleHR1cmUgdmFsdWVzLlxyXG4gICAgICAgICAgICBjb25zdCBtZXRhbGxpY1JvdWdobmVzc0ZhY3RvcnM6IElQQlJNZXRhbGxpY1JvdWdobmVzcyA9IHtcclxuICAgICAgICAgICAgICAgIGJhc2VDb2xvcjogbWF4QmFzZUNvbG9yLFxyXG4gICAgICAgICAgICAgICAgbWV0YWxsaWM6IG1heE1ldGFsbGljLFxyXG4gICAgICAgICAgICAgICAgcm91Z2huZXNzOiBtYXhSb3VnaG5lc3MsXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBsZXQgd3JpdGVPdXRNZXRhbGxpY1JvdWdobmVzc1RleHR1cmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgbGV0IHdyaXRlT3V0QmFzZUNvbG9yVGV4dHVyZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaCA9IDA7IGggPCBoZWlnaHQ7ICsraCkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgdyA9IDA7IHcgPCB3aWR0aDsgKyt3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVzdGluYXRpb25PZmZzZXQgPSAod2lkdGggKiBoICsgdykgKiBzdHJpZGVTaXplO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBiYXNlQ29sb3JCdWZmZXJbZGVzdGluYXRpb25PZmZzZXRdIC89IG1ldGFsbGljUm91Z2huZXNzRmFjdG9ycy5iYXNlQ29sb3IuciA+IGVwc2lsb24gPyBtZXRhbGxpY1JvdWdobmVzc0ZhY3RvcnMuYmFzZUNvbG9yLnIgOiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhc2VDb2xvckJ1ZmZlcltkZXN0aW5hdGlvbk9mZnNldCArIDFdIC89IG1ldGFsbGljUm91Z2huZXNzRmFjdG9ycy5iYXNlQ29sb3IuZyA+IGVwc2lsb24gPyBtZXRhbGxpY1JvdWdobmVzc0ZhY3RvcnMuYmFzZUNvbG9yLmcgOiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhc2VDb2xvckJ1ZmZlcltkZXN0aW5hdGlvbk9mZnNldCArIDJdIC89IG1ldGFsbGljUm91Z2huZXNzRmFjdG9ycy5iYXNlQ29sb3IuYiA+IGVwc2lsb24gPyBtZXRhbGxpY1JvdWdobmVzc0ZhY3RvcnMuYmFzZUNvbG9yLmIgOiAxO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lYXJCYXNlQ29sb3JQaXhlbCA9IENvbG9yMy5Gcm9tSW50cyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZUNvbG9yQnVmZmVyW2Rlc3RpbmF0aW9uT2Zmc2V0XSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZUNvbG9yQnVmZmVyW2Rlc3RpbmF0aW9uT2Zmc2V0ICsgMV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VDb2xvckJ1ZmZlcltkZXN0aW5hdGlvbk9mZnNldCArIDJdXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzUkdCQmFzZUNvbG9yUGl4ZWwgPSBsaW5lYXJCYXNlQ29sb3JQaXhlbC50b0dhbW1hU3BhY2Uoc2NlbmUuZ2V0RW5naW5lKCkudXNlRXhhY3RTcmdiQ29udmVyc2lvbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhc2VDb2xvckJ1ZmZlcltkZXN0aW5hdGlvbk9mZnNldF0gPSBzUkdCQmFzZUNvbG9yUGl4ZWwuciAqIDI1NTtcclxuICAgICAgICAgICAgICAgICAgICBiYXNlQ29sb3JCdWZmZXJbZGVzdGluYXRpb25PZmZzZXQgKyAxXSA9IHNSR0JCYXNlQ29sb3JQaXhlbC5nICogMjU1O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhc2VDb2xvckJ1ZmZlcltkZXN0aW5hdGlvbk9mZnNldCArIDJdID0gc1JHQkJhc2VDb2xvclBpeGVsLmIgKiAyNTU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghc1JHQkJhc2VDb2xvclBpeGVsLmVxdWFsc1dpdGhFcHNpbG9uKHdoaXRlLCBlcHNpbG9uKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3cml0ZU91dEJhc2VDb2xvclRleHR1cmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbWV0YWxsaWNSb3VnaG5lc3NCdWZmZXJbZGVzdGluYXRpb25PZmZzZXQgKyAxXSAvPSBtZXRhbGxpY1JvdWdobmVzc0ZhY3RvcnMucm91Z2huZXNzISA+IGVwc2lsb24gPyBtZXRhbGxpY1JvdWdobmVzc0ZhY3RvcnMucm91Z2huZXNzISA6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0YWxsaWNSb3VnaG5lc3NCdWZmZXJbZGVzdGluYXRpb25PZmZzZXQgKyAyXSAvPSBtZXRhbGxpY1JvdWdobmVzc0ZhY3RvcnMubWV0YWxsaWMhID4gZXBzaWxvbiA/IG1ldGFsbGljUm91Z2huZXNzRmFjdG9ycy5tZXRhbGxpYyEgOiAxO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXRhbGxpY1JvdWdobmVzc1BpeGVsID0gQ29sb3IzLkZyb21JbnRzKDI1NSwgbWV0YWxsaWNSb3VnaG5lc3NCdWZmZXJbZGVzdGluYXRpb25PZmZzZXQgKyAxXSwgbWV0YWxsaWNSb3VnaG5lc3NCdWZmZXJbZGVzdGluYXRpb25PZmZzZXQgKyAyXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghbWV0YWxsaWNSb3VnaG5lc3NQaXhlbC5lcXVhbHNXaXRoRXBzaWxvbih3aGl0ZSwgZXBzaWxvbikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3JpdGVPdXRNZXRhbGxpY1JvdWdobmVzc1RleHR1cmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHdyaXRlT3V0TWV0YWxsaWNSb3VnaG5lc3NUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2dldEltYWdlRGF0YUFzeW5jKG1ldGFsbGljUm91Z2huZXNzQnVmZmVyLCB3aWR0aCwgaGVpZ2h0LCBtaW1lVHlwZSkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRhbGxpY1JvdWdobmVzc0ZhY3RvcnMubWV0YWxsaWNSb3VnaG5lc3NUZXh0dXJlRGF0YSA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHdyaXRlT3V0QmFzZUNvbG9yVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9nZXRJbWFnZURhdGFBc3luYyhiYXNlQ29sb3JCdWZmZXIsIHdpZHRoLCBoZWlnaHQsIG1pbWVUeXBlKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGFsbGljUm91Z2huZXNzRmFjdG9ycy5iYXNlQ29sb3JUZXh0dXJlRGF0YSA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWV0YWxsaWNSb3VnaG5lc3NGYWN0b3JzO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXCJfQ29udmVydFNwZWN1bGFyR2xvc3NpbmVzc1RleHR1cmVzVG9NZXRhbGxpY1JvdWdobmVzczogU2NlbmUgZnJvbSB0ZXh0dXJlcyBpcyBtaXNzaW5nIVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0cyBzcGVjdWxhciBnbG9zc2luZXNzIG1hdGVyaWFsIHByb3BlcnRpZXMgdG8gbWV0YWxsaWMgcm91Z2huZXNzXHJcbiAgICAgKiBAcGFyYW0gc3BlY3VsYXJHbG9zc2luZXNzIGludGVyZmFjZSB3aXRoIHNwZWN1bGFyIGdsb3NzaW5lc3MgbWF0ZXJpYWwgcHJvcGVydGllc1xyXG4gICAgICogQHJldHVybnMgaW50ZXJmYWNlIHdpdGggbWV0YWxsaWMgcm91Z2huZXNzIG1hdGVyaWFsIHByb3BlcnRpZXNcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfY29udmVydFNwZWN1bGFyR2xvc3NpbmVzc1RvTWV0YWxsaWNSb3VnaG5lc3Moc3BlY3VsYXJHbG9zc2luZXNzOiBJUEJSU3BlY3VsYXJHbG9zc2luZXNzKTogSVBCUk1ldGFsbGljUm91Z2huZXNzIHtcclxuICAgICAgICBjb25zdCBkaWZmdXNlUGVyY2VpdmVkQnJpZ2h0bmVzcyA9IHRoaXMuX2dldFBlcmNlaXZlZEJyaWdodG5lc3Moc3BlY3VsYXJHbG9zc2luZXNzLmRpZmZ1c2VDb2xvcik7XHJcbiAgICAgICAgY29uc3Qgc3BlY3VsYXJQZXJjZWl2ZWRCcmlnaHRuZXNzID0gdGhpcy5fZ2V0UGVyY2VpdmVkQnJpZ2h0bmVzcyhzcGVjdWxhckdsb3NzaW5lc3Muc3BlY3VsYXJDb2xvcik7XHJcbiAgICAgICAgY29uc3Qgb25lTWludXNTcGVjdWxhclN0cmVuZ3RoID0gMSAtIHRoaXMuX2dldE1heENvbXBvbmVudChzcGVjdWxhckdsb3NzaW5lc3Muc3BlY3VsYXJDb2xvcik7XHJcbiAgICAgICAgY29uc3QgbWV0YWxsaWMgPSBfU29sdmVNZXRhbGxpYyhkaWZmdXNlUGVyY2VpdmVkQnJpZ2h0bmVzcywgc3BlY3VsYXJQZXJjZWl2ZWRCcmlnaHRuZXNzLCBvbmVNaW51c1NwZWN1bGFyU3RyZW5ndGgpO1xyXG4gICAgICAgIGNvbnN0IGJhc2VDb2xvckZyb21EaWZmdXNlID0gc3BlY3VsYXJHbG9zc2luZXNzLmRpZmZ1c2VDb2xvci5zY2FsZShvbmVNaW51c1NwZWN1bGFyU3RyZW5ndGggLyAoMS4wIC0gZGllbGVjdHJpY1NwZWN1bGFyLnIpIC8gTWF0aC5tYXgoMSAtIG1ldGFsbGljKSk7XHJcbiAgICAgICAgY29uc3QgYmFzZUNvbG9yRnJvbVNwZWN1bGFyID0gc3BlY3VsYXJHbG9zc2luZXNzLnNwZWN1bGFyQ29sb3Iuc3VidHJhY3QoZGllbGVjdHJpY1NwZWN1bGFyLnNjYWxlKDEgLSBtZXRhbGxpYykpLnNjYWxlKDEgLyBNYXRoLm1heChtZXRhbGxpYykpO1xyXG4gICAgICAgIGxldCBiYXNlQ29sb3IgPSBDb2xvcjMuTGVycChiYXNlQ29sb3JGcm9tRGlmZnVzZSwgYmFzZUNvbG9yRnJvbVNwZWN1bGFyLCBtZXRhbGxpYyAqIG1ldGFsbGljKTtcclxuICAgICAgICBiYXNlQ29sb3IgPSBiYXNlQ29sb3IuY2xhbXBUb1JlZigwLCAxLCBiYXNlQ29sb3IpO1xyXG5cclxuICAgICAgICBjb25zdCBtZXRhbGxpY1JvdWdobmVzczogSVBCUk1ldGFsbGljUm91Z2huZXNzID0ge1xyXG4gICAgICAgICAgICBiYXNlQ29sb3I6IGJhc2VDb2xvcixcclxuICAgICAgICAgICAgbWV0YWxsaWM6IG1ldGFsbGljLFxyXG4gICAgICAgICAgICByb3VnaG5lc3M6IDEgLSBzcGVjdWxhckdsb3NzaW5lc3MuZ2xvc3NpbmVzcyxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gbWV0YWxsaWNSb3VnaG5lc3M7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxjdWxhdGVzIHRoZSBzdXJmYWNlIHJlZmxlY3RhbmNlLCBpbmRlcGVuZGVudCBvZiBsaWdodGluZyBjb25kaXRpb25zXHJcbiAgICAgKiBAcGFyYW0gY29sb3IgQ29sb3Igc291cmNlIHRvIGNhbGN1bGF0ZSBicmlnaHRuZXNzIGZyb21cclxuICAgICAqIEByZXR1cm5zIG51bWJlciByZXByZXNlbnRpbmcgdGhlIHBlcmNlaXZlZCBicmlnaHRuZXNzLCBvciB6ZXJvIGlmIGNvbG9yIGlzIHVuZGVmaW5lZFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9nZXRQZXJjZWl2ZWRCcmlnaHRuZXNzKGNvbG9yOiBDb2xvcjMpOiBudW1iZXIge1xyXG4gICAgICAgIGlmIChjb2xvcikge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KDAuMjk5ICogY29sb3IuciAqIGNvbG9yLnIgKyAwLjU4NyAqIGNvbG9yLmcgKiBjb2xvci5nICsgMC4xMTQgKiBjb2xvci5iICogY29sb3IuYik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgbWF4aW11bSBjb2xvciBjb21wb25lbnQgdmFsdWVcclxuICAgICAqIEBwYXJhbSBjb2xvclxyXG4gICAgICogQHJldHVybnMgbWF4aW11bSBjb2xvciBjb21wb25lbnQgdmFsdWUsIG9yIHplcm8gaWYgY29sb3IgaXMgbnVsbCBvciB1bmRlZmluZWRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfZ2V0TWF4Q29tcG9uZW50KGNvbG9yOiBDb2xvcjMpOiBudW1iZXIge1xyXG4gICAgICAgIGlmIChjb2xvcikge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoY29sb3IuciwgTWF0aC5tYXgoY29sb3IuZywgY29sb3IuYikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgYSBQQlJNYXRlcmlhbCAoTWV0YWxsaWMvUm91Z2huZXNzKSB0byBNZXRhbGxpYyBSb3VnaG5lc3MgZmFjdG9yc1xyXG4gICAgICogQHBhcmFtIGJhYnlsb25QQlJNYXRlcmlhbCBCSlMgUEJSIE1ldGFsbGljIFJvdWdobmVzcyBNYXRlcmlhbFxyXG4gICAgICogQHBhcmFtIG1pbWVUeXBlIG1pbWUgdHlwZSB0byB1c2UgZm9yIHRoZSB0ZXh0dXJlc1xyXG4gICAgICogQHBhcmFtIGdsVEZQYnJNZXRhbGxpY1JvdWdobmVzcyBnbFRGIFBCUiBNZXRhbGxpYyBSb3VnaG5lc3MgaW50ZXJmYWNlXHJcbiAgICAgKiBAcGFyYW0gaGFzVVZzIHNwZWNpZmllcyBpZiB0ZXh0dXJlIGNvb3JkaW5hdGVzIGFyZSBwcmVzZW50IG9uIHRoZSBzdWJtZXNoIHRvIGRldGVybWluZSBpZiB0ZXh0dXJlcyBzaG91bGQgYmUgYXBwbGllZFxyXG4gICAgICogQHJldHVybnMgZ2xURiBQQlIgTWV0YWxsaWMgUm91Z2huZXNzIGZhY3RvcnNcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBhc3luYyBfY29udmVydE1ldGFsUm91Z2hGYWN0b3JzVG9NZXRhbGxpY1JvdWdobmVzc0FzeW5jKFxyXG4gICAgICAgIGJhYnlsb25QQlJNYXRlcmlhbDogUEJSQmFzZU1hdGVyaWFsLFxyXG4gICAgICAgIG1pbWVUeXBlOiBJbWFnZU1pbWVUeXBlLFxyXG4gICAgICAgIGdsVEZQYnJNZXRhbGxpY1JvdWdobmVzczogSU1hdGVyaWFsUGJyTWV0YWxsaWNSb3VnaG5lc3MsXHJcbiAgICAgICAgaGFzVVZzOiBib29sZWFuXHJcbiAgICApOiBQcm9taXNlPElQQlJNZXRhbGxpY1JvdWdobmVzcz4ge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2VzOiBQcm9taXNlPHZvaWQ+W10gPSBbXTtcclxuXHJcbiAgICAgICAgY29uc3QgbWV0YWxsaWNSb3VnaG5lc3M6IElQQlJNZXRhbGxpY1JvdWdobmVzcyA9IHtcclxuICAgICAgICAgICAgYmFzZUNvbG9yOiBiYWJ5bG9uUEJSTWF0ZXJpYWwuX2FsYmVkb0NvbG9yLFxyXG4gICAgICAgICAgICBtZXRhbGxpYzogYmFieWxvblBCUk1hdGVyaWFsLl9tZXRhbGxpYyxcclxuICAgICAgICAgICAgcm91Z2huZXNzOiBiYWJ5bG9uUEJSTWF0ZXJpYWwuX3JvdWdobmVzcyxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAoaGFzVVZzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFsYmVkb1RleHR1cmUgPSBiYWJ5bG9uUEJSTWF0ZXJpYWwuX2FsYmVkb1RleHR1cmU7XHJcbiAgICAgICAgICAgIGlmIChhbGJlZG9UZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXhwb3J0VGV4dHVyZUFzeW5jKGJhYnlsb25QQlJNYXRlcmlhbC5fYWxiZWRvVGV4dHVyZSEsIG1pbWVUeXBlKS50aGVuKChnbFRGVGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2xURlRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsVEZQYnJNZXRhbGxpY1JvdWdobmVzcy5iYXNlQ29sb3JUZXh0dXJlID0gZ2xURlRleHR1cmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBtZXRhbGxpY1RleHR1cmUgPSBiYWJ5bG9uUEJSTWF0ZXJpYWwuX21ldGFsbGljVGV4dHVyZTtcclxuICAgICAgICAgICAgaWYgKG1ldGFsbGljVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4cG9ydFRleHR1cmVBc3luYyhtZXRhbGxpY1RleHR1cmUsIG1pbWVUeXBlKS50aGVuKChnbFRGVGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2xURlRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsVEZQYnJNZXRhbGxpY1JvdWdobmVzcy5tZXRhbGxpY1JvdWdobmVzc1RleHR1cmUgPSBnbFRGVGV4dHVyZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocHJvbWlzZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLl9leHBvcnRlci5fbWF0ZXJpYWxOZWVkc1VWc1NldC5hZGQoYmFieWxvblBCUk1hdGVyaWFsKTtcclxuICAgICAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG1ldGFsbGljUm91Z2huZXNzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2dldFRleHR1cmVTYW1wbGVyKHRleHR1cmU6IE51bGxhYmxlPEJhc2VUZXh0dXJlPik6IElTYW1wbGVyIHtcclxuICAgICAgICBjb25zdCBzYW1wbGVyOiBJU2FtcGxlciA9IHt9O1xyXG4gICAgICAgIGlmICghdGV4dHVyZSB8fCAhKHRleHR1cmUgaW5zdGFuY2VvZiBUZXh0dXJlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gc2FtcGxlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHdyYXBTID0gdGhpcy5fZ2V0R0xURlRleHR1cmVXcmFwTW9kZSh0ZXh0dXJlLndyYXBVKTtcclxuICAgICAgICBpZiAod3JhcFMgIT09IFRleHR1cmVXcmFwTW9kZS5SRVBFQVQpIHtcclxuICAgICAgICAgICAgc2FtcGxlci53cmFwUyA9IHdyYXBTO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgd3JhcFQgPSB0aGlzLl9nZXRHTFRGVGV4dHVyZVdyYXBNb2RlKHRleHR1cmUud3JhcFYpO1xyXG4gICAgICAgIGlmICh3cmFwVCAhPT0gVGV4dHVyZVdyYXBNb2RlLlJFUEVBVCkge1xyXG4gICAgICAgICAgICBzYW1wbGVyLndyYXBUID0gd3JhcFQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzd2l0Y2ggKHRleHR1cmUuc2FtcGxpbmdNb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgVGV4dHVyZS5MSU5FQVJfTElORUFSOiB7XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVyLm1hZ0ZpbHRlciA9IFRleHR1cmVNYWdGaWx0ZXIuTElORUFSO1xyXG4gICAgICAgICAgICAgICAgc2FtcGxlci5taW5GaWx0ZXIgPSBUZXh0dXJlTWluRmlsdGVyLkxJTkVBUjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgVGV4dHVyZS5MSU5FQVJfTkVBUkVTVDoge1xyXG4gICAgICAgICAgICAgICAgc2FtcGxlci5tYWdGaWx0ZXIgPSBUZXh0dXJlTWFnRmlsdGVyLkxJTkVBUjtcclxuICAgICAgICAgICAgICAgIHNhbXBsZXIubWluRmlsdGVyID0gVGV4dHVyZU1pbkZpbHRlci5ORUFSRVNUO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBUZXh0dXJlLk5FQVJFU1RfTElORUFSOiB7XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVyLm1hZ0ZpbHRlciA9IFRleHR1cmVNYWdGaWx0ZXIuTkVBUkVTVDtcclxuICAgICAgICAgICAgICAgIHNhbXBsZXIubWluRmlsdGVyID0gVGV4dHVyZU1pbkZpbHRlci5MSU5FQVI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFRleHR1cmUuTkVBUkVTVF9MSU5FQVJfTUlQTElORUFSOiB7XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVyLm1hZ0ZpbHRlciA9IFRleHR1cmVNYWdGaWx0ZXIuTkVBUkVTVDtcclxuICAgICAgICAgICAgICAgIHNhbXBsZXIubWluRmlsdGVyID0gVGV4dHVyZU1pbkZpbHRlci5MSU5FQVJfTUlQTUFQX0xJTkVBUjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgVGV4dHVyZS5ORUFSRVNUX05FQVJFU1Q6IHtcclxuICAgICAgICAgICAgICAgIHNhbXBsZXIubWFnRmlsdGVyID0gVGV4dHVyZU1hZ0ZpbHRlci5ORUFSRVNUO1xyXG4gICAgICAgICAgICAgICAgc2FtcGxlci5taW5GaWx0ZXIgPSBUZXh0dXJlTWluRmlsdGVyLk5FQVJFU1Q7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFRleHR1cmUuTkVBUkVTVF9MSU5FQVJfTUlQTkVBUkVTVDoge1xyXG4gICAgICAgICAgICAgICAgc2FtcGxlci5tYWdGaWx0ZXIgPSBUZXh0dXJlTWFnRmlsdGVyLk5FQVJFU1Q7XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVyLm1pbkZpbHRlciA9IFRleHR1cmVNaW5GaWx0ZXIuTElORUFSX01JUE1BUF9ORUFSRVNUO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBUZXh0dXJlLkxJTkVBUl9ORUFSRVNUX01JUE5FQVJFU1Q6IHtcclxuICAgICAgICAgICAgICAgIHNhbXBsZXIubWFnRmlsdGVyID0gVGV4dHVyZU1hZ0ZpbHRlci5MSU5FQVI7XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVyLm1pbkZpbHRlciA9IFRleHR1cmVNaW5GaWx0ZXIuTkVBUkVTVF9NSVBNQVBfTkVBUkVTVDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgVGV4dHVyZS5MSU5FQVJfTkVBUkVTVF9NSVBMSU5FQVI6IHtcclxuICAgICAgICAgICAgICAgIHNhbXBsZXIubWFnRmlsdGVyID0gVGV4dHVyZU1hZ0ZpbHRlci5MSU5FQVI7XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVyLm1pbkZpbHRlciA9IFRleHR1cmVNaW5GaWx0ZXIuTkVBUkVTVF9NSVBNQVBfTElORUFSO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBUZXh0dXJlLk5FQVJFU1RfTkVBUkVTVF9NSVBMSU5FQVI6IHtcclxuICAgICAgICAgICAgICAgIHNhbXBsZXIubWFnRmlsdGVyID0gVGV4dHVyZU1hZ0ZpbHRlci5ORUFSRVNUO1xyXG4gICAgICAgICAgICAgICAgc2FtcGxlci5taW5GaWx0ZXIgPSBUZXh0dXJlTWluRmlsdGVyLk5FQVJFU1RfTUlQTUFQX0xJTkVBUjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgVGV4dHVyZS5MSU5FQVJfTElORUFSX01JUExJTkVBUjoge1xyXG4gICAgICAgICAgICAgICAgc2FtcGxlci5tYWdGaWx0ZXIgPSBUZXh0dXJlTWFnRmlsdGVyLkxJTkVBUjtcclxuICAgICAgICAgICAgICAgIHNhbXBsZXIubWluRmlsdGVyID0gVGV4dHVyZU1pbkZpbHRlci5MSU5FQVJfTUlQTUFQX0xJTkVBUjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgVGV4dHVyZS5MSU5FQVJfTElORUFSX01JUE5FQVJFU1Q6IHtcclxuICAgICAgICAgICAgICAgIHNhbXBsZXIubWFnRmlsdGVyID0gVGV4dHVyZU1hZ0ZpbHRlci5MSU5FQVI7XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVyLm1pbkZpbHRlciA9IFRleHR1cmVNaW5GaWx0ZXIuTElORUFSX01JUE1BUF9ORUFSRVNUO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBUZXh0dXJlLk5FQVJFU1RfTkVBUkVTVF9NSVBORUFSRVNUOiB7XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVyLm1hZ0ZpbHRlciA9IFRleHR1cmVNYWdGaWx0ZXIuTkVBUkVTVDtcclxuICAgICAgICAgICAgICAgIHNhbXBsZXIubWluRmlsdGVyID0gVGV4dHVyZU1pbkZpbHRlci5ORUFSRVNUX01JUE1BUF9ORUFSRVNUO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBzYW1wbGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2dldEdMVEZUZXh0dXJlV3JhcE1vZGUod3JhcE1vZGU6IG51bWJlcik6IFRleHR1cmVXcmFwTW9kZSB7XHJcbiAgICAgICAgc3dpdGNoICh3cmFwTW9kZSkge1xyXG4gICAgICAgICAgICBjYXNlIFRleHR1cmUuV1JBUF9BRERSRVNTTU9ERToge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFRleHR1cmVXcmFwTW9kZS5SRVBFQVQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBUZXh0dXJlLkNMQU1QX0FERFJFU1NNT0RFOiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gVGV4dHVyZVdyYXBNb2RlLkNMQU1QX1RPX0VER0U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBUZXh0dXJlLk1JUlJPUl9BRERSRVNTTU9ERToge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFRleHR1cmVXcmFwTW9kZS5NSVJST1JFRF9SRVBFQVQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICAgICAgVG9vbHMuRXJyb3IoYFVuc3VwcG9ydGVkIFRleHR1cmUgV3JhcCBNb2RlICR7d3JhcE1vZGV9IWApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFRleHR1cmVXcmFwTW9kZS5SRVBFQVQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IGEgUEJSTWF0ZXJpYWwgKFNwZWN1bGFyL0dsb3NzaW5lc3MpIHRvIE1ldGFsbGljIFJvdWdobmVzcyBmYWN0b3JzXHJcbiAgICAgKiBAcGFyYW0gYmFieWxvblBCUk1hdGVyaWFsIEJKUyBQQlIgTWV0YWxsaWMgUm91Z2huZXNzIE1hdGVyaWFsXHJcbiAgICAgKiBAcGFyYW0gbWltZVR5cGUgbWltZSB0eXBlIHRvIHVzZSBmb3IgdGhlIHRleHR1cmVzXHJcbiAgICAgKiBAcGFyYW0gcGJyTWV0YWxsaWNSb3VnaG5lc3MgZ2xURiBQQlIgTWV0YWxsaWMgUm91Z2huZXNzIGludGVyZmFjZVxyXG4gICAgICogQHBhcmFtIGhhc1VWcyBzcGVjaWZpZXMgaWYgdGV4dHVyZSBjb29yZGluYXRlcyBhcmUgcHJlc2VudCBvbiB0aGUgc3VibWVzaCB0byBkZXRlcm1pbmUgaWYgdGV4dHVyZXMgc2hvdWxkIGJlIGFwcGxpZWRcclxuICAgICAqIEByZXR1cm5zIGdsVEYgUEJSIE1ldGFsbGljIFJvdWdobmVzcyBmYWN0b3JzXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgYXN5bmMgX2NvbnZlcnRTcGVjR2xvc3NGYWN0b3JzVG9NZXRhbGxpY1JvdWdobmVzc0FzeW5jKFxyXG4gICAgICAgIGJhYnlsb25QQlJNYXRlcmlhbDogUEJSQmFzZU1hdGVyaWFsLFxyXG4gICAgICAgIG1pbWVUeXBlOiBJbWFnZU1pbWVUeXBlLFxyXG4gICAgICAgIHBick1ldGFsbGljUm91Z2huZXNzOiBJTWF0ZXJpYWxQYnJNZXRhbGxpY1JvdWdobmVzcyxcclxuICAgICAgICBoYXNVVnM6IGJvb2xlYW5cclxuICAgICk6IFByb21pc2U8SVBCUk1ldGFsbGljUm91Z2huZXNzPiB7XHJcbiAgICAgICAgY29uc3Qgc3BlY0dsb3NzOiBJUEJSU3BlY3VsYXJHbG9zc2luZXNzID0ge1xyXG4gICAgICAgICAgICBkaWZmdXNlQ29sb3I6IGJhYnlsb25QQlJNYXRlcmlhbC5fYWxiZWRvQ29sb3IsXHJcbiAgICAgICAgICAgIHNwZWN1bGFyQ29sb3I6IGJhYnlsb25QQlJNYXRlcmlhbC5fcmVmbGVjdGl2aXR5Q29sb3IsXHJcbiAgICAgICAgICAgIGdsb3NzaW5lc3M6IGJhYnlsb25QQlJNYXRlcmlhbC5fbWljcm9TdXJmYWNlLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGFsYmVkb1RleHR1cmUgPSBiYWJ5bG9uUEJSTWF0ZXJpYWwuX2FsYmVkb1RleHR1cmU7XHJcbiAgICAgICAgY29uc3QgcmVmbGVjdGl2aXR5VGV4dHVyZSA9IGJhYnlsb25QQlJNYXRlcmlhbC5fcmVmbGVjdGl2aXR5VGV4dHVyZTtcclxuICAgICAgICBjb25zdCB1c2VNaWNyb3N1cmZhY2VGcm9tUmVmbGVjdGl2aXR5TWFwQWxwaGEgPSBiYWJ5bG9uUEJSTWF0ZXJpYWwuX3VzZU1pY3JvU3VyZmFjZUZyb21SZWZsZWN0aXZpdHlNYXBBbHBoYTtcclxuICAgICAgICBpZiAocmVmbGVjdGl2aXR5VGV4dHVyZSAmJiAhdXNlTWljcm9zdXJmYWNlRnJvbVJlZmxlY3Rpdml0eU1hcEFscGhhKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcIl9Db252ZXJ0UEJSTWF0ZXJpYWw6IEdsb3NzaW5lc3MgdmFsdWVzIG5vdCBpbmNsdWRlZCBpbiB0aGUgcmVmbGVjdGl2aXR5IHRleHR1cmUgYXJlIGN1cnJlbnRseSBub3Qgc3VwcG9ydGVkXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKChhbGJlZG9UZXh0dXJlIHx8IHJlZmxlY3Rpdml0eVRleHR1cmUpICYmIGhhc1VWcykge1xyXG4gICAgICAgICAgICB0aGlzLl9leHBvcnRlci5fbWF0ZXJpYWxOZWVkc1VWc1NldC5hZGQoYmFieWxvblBCUk1hdGVyaWFsKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNhbXBsZXJJbmRleCA9IHRoaXMuX2V4cG9ydFRleHR1cmVTYW1wbGVyKGFsYmVkb1RleHR1cmUgfHwgcmVmbGVjdGl2aXR5VGV4dHVyZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1ldGFsbGljUm91Z2huZXNzRmFjdG9ycyA9IGF3YWl0IHRoaXMuX2NvbnZlcnRTcGVjdWxhckdsb3NzaW5lc3NUZXh0dXJlc1RvTWV0YWxsaWNSb3VnaG5lc3NBc3luYyhhbGJlZG9UZXh0dXJlLCByZWZsZWN0aXZpdHlUZXh0dXJlLCBzcGVjR2xvc3MsIG1pbWVUeXBlKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRleHR1cmVzID0gdGhpcy5fZXhwb3J0ZXIuX3RleHR1cmVzO1xyXG5cclxuICAgICAgICAgICAgaWYgKG1ldGFsbGljUm91Z2huZXNzRmFjdG9ycy5iYXNlQ29sb3JUZXh0dXJlRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW1hZ2VJbmRleCA9IHRoaXMuX2V4cG9ydEltYWdlKGBiYXNlQ29sb3Ike3RleHR1cmVzLmxlbmd0aH1gLCBtaW1lVHlwZSwgbWV0YWxsaWNSb3VnaG5lc3NGYWN0b3JzLmJhc2VDb2xvclRleHR1cmVEYXRhKTtcclxuICAgICAgICAgICAgICAgIHBick1ldGFsbGljUm91Z2huZXNzLmJhc2VDb2xvclRleHR1cmUgPSB0aGlzLl9leHBvcnRUZXh0dXJlSW5mbyhpbWFnZUluZGV4LCBzYW1wbGVySW5kZXgsIGFsYmVkb1RleHR1cmU/LmNvb3JkaW5hdGVzSW5kZXgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAobWV0YWxsaWNSb3VnaG5lc3NGYWN0b3JzLm1ldGFsbGljUm91Z2huZXNzVGV4dHVyZURhdGEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlSW5kZXggPSB0aGlzLl9leHBvcnRJbWFnZShgbWV0YWxsaWNSb3VnaG5lc3Mke3RleHR1cmVzLmxlbmd0aH1gLCBtaW1lVHlwZSwgbWV0YWxsaWNSb3VnaG5lc3NGYWN0b3JzLm1ldGFsbGljUm91Z2huZXNzVGV4dHVyZURhdGEpO1xyXG4gICAgICAgICAgICAgICAgcGJyTWV0YWxsaWNSb3VnaG5lc3MubWV0YWxsaWNSb3VnaG5lc3NUZXh0dXJlID0gdGhpcy5fZXhwb3J0VGV4dHVyZUluZm8oaW1hZ2VJbmRleCwgc2FtcGxlckluZGV4LCByZWZsZWN0aXZpdHlUZXh0dXJlPy5jb29yZGluYXRlc0luZGV4KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG1ldGFsbGljUm91Z2huZXNzRmFjdG9ycztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY29udmVydFNwZWN1bGFyR2xvc3NpbmVzc1RvTWV0YWxsaWNSb3VnaG5lc3Moc3BlY0dsb3NzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGV4cG9ydFBCUk1hdGVyaWFsQXN5bmMoYmFieWxvblBCUk1hdGVyaWFsOiBQQlJCYXNlTWF0ZXJpYWwsIG1pbWVUeXBlOiBJbWFnZU1pbWVUeXBlLCBoYXNVVnM6IGJvb2xlYW4pOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gICAgICAgIGNvbnN0IGdsVEZQYnJNZXRhbGxpY1JvdWdobmVzczogSU1hdGVyaWFsUGJyTWV0YWxsaWNSb3VnaG5lc3MgPSB7fTtcclxuXHJcbiAgICAgICAgY29uc3QgZ2xURk1hdGVyaWFsOiBJTWF0ZXJpYWwgPSB7XHJcbiAgICAgICAgICAgIG5hbWU6IGJhYnlsb25QQlJNYXRlcmlhbC5uYW1lLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHVzZU1ldGFsbGljUm91Z2huZXNzID0gYmFieWxvblBCUk1hdGVyaWFsLmlzTWV0YWxsaWNXb3JrZmxvdygpO1xyXG5cclxuICAgICAgICBpZiAodXNlTWV0YWxsaWNSb3VnaG5lc3MpIHtcclxuICAgICAgICAgICAgY29uc3QgYWxiZWRvQ29sb3IgPSBiYWJ5bG9uUEJSTWF0ZXJpYWwuX2FsYmVkb0NvbG9yO1xyXG4gICAgICAgICAgICBjb25zdCBhbHBoYSA9IGJhYnlsb25QQlJNYXRlcmlhbC5hbHBoYTtcclxuICAgICAgICAgICAgaWYgKGFsYmVkb0NvbG9yKSB7XHJcbiAgICAgICAgICAgICAgICBnbFRGUGJyTWV0YWxsaWNSb3VnaG5lc3MuYmFzZUNvbG9yRmFjdG9yID0gW2FsYmVkb0NvbG9yLnIsIGFsYmVkb0NvbG9yLmcsIGFsYmVkb0NvbG9yLmIsIGFscGhhXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbWV0YWxsaWNSb3VnaG5lc3MgPSB1c2VNZXRhbGxpY1JvdWdobmVzc1xyXG4gICAgICAgICAgICA/IGF3YWl0IHRoaXMuX2NvbnZlcnRNZXRhbFJvdWdoRmFjdG9yc1RvTWV0YWxsaWNSb3VnaG5lc3NBc3luYyhiYWJ5bG9uUEJSTWF0ZXJpYWwsIG1pbWVUeXBlLCBnbFRGUGJyTWV0YWxsaWNSb3VnaG5lc3MsIGhhc1VWcylcclxuICAgICAgICAgICAgOiBhd2FpdCB0aGlzLl9jb252ZXJ0U3BlY0dsb3NzRmFjdG9yc1RvTWV0YWxsaWNSb3VnaG5lc3NBc3luYyhiYWJ5bG9uUEJSTWF0ZXJpYWwsIG1pbWVUeXBlLCBnbFRGUGJyTWV0YWxsaWNSb3VnaG5lc3MsIGhhc1VWcyk7XHJcblxyXG4gICAgICAgIGF3YWl0IHRoaXMuX3NldE1ldGFsbGljUm91Z2huZXNzUGJyTWF0ZXJpYWxBc3luYyhtZXRhbGxpY1JvdWdobmVzcywgYmFieWxvblBCUk1hdGVyaWFsLCBnbFRGTWF0ZXJpYWwsIGdsVEZQYnJNZXRhbGxpY1JvdWdobmVzcywgbWltZVR5cGUsIGhhc1VWcyk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5fZmluaXNoTWF0ZXJpYWxBc3luYyhnbFRGTWF0ZXJpYWwsIGJhYnlsb25QQlJNYXRlcmlhbCwgbWltZVR5cGUpO1xyXG5cclxuICAgICAgICBjb25zdCBtYXRlcmlhbHMgPSB0aGlzLl9leHBvcnRlci5fbWF0ZXJpYWxzO1xyXG4gICAgICAgIG1hdGVyaWFscy5wdXNoKGdsVEZNYXRlcmlhbCk7XHJcbiAgICAgICAgcmV0dXJuIG1hdGVyaWFscy5sZW5ndGggLSAxO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgX3NldE1ldGFsbGljUm91Z2huZXNzUGJyTWF0ZXJpYWxBc3luYyhcclxuICAgICAgICBtZXRhbGxpY1JvdWdobmVzczogSVBCUk1ldGFsbGljUm91Z2huZXNzLFxyXG4gICAgICAgIGJhYnlsb25QQlJNYXRlcmlhbDogUEJSQmFzZU1hdGVyaWFsLFxyXG4gICAgICAgIGdsVEZNYXRlcmlhbDogSU1hdGVyaWFsLFxyXG4gICAgICAgIGdsVEZQYnJNZXRhbGxpY1JvdWdobmVzczogSU1hdGVyaWFsUGJyTWV0YWxsaWNSb3VnaG5lc3MsXHJcbiAgICAgICAgbWltZVR5cGU6IEltYWdlTWltZVR5cGUsXHJcbiAgICAgICAgaGFzVVZzOiBib29sZWFuXHJcbiAgICApOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBTZXRBbHBoYU1vZGUoZ2xURk1hdGVyaWFsLCBiYWJ5bG9uUEJSTWF0ZXJpYWwpO1xyXG5cclxuICAgICAgICBpZiAoIW1ldGFsbGljUm91Z2huZXNzLmJhc2VDb2xvci5lcXVhbHNXaXRoRXBzaWxvbih3aGl0ZSwgZXBzaWxvbikgfHwgIVNjYWxhci5XaXRoaW5FcHNpbG9uKGJhYnlsb25QQlJNYXRlcmlhbC5hbHBoYSwgMSwgZXBzaWxvbikpIHtcclxuICAgICAgICAgICAgZ2xURlBick1ldGFsbGljUm91Z2huZXNzLmJhc2VDb2xvckZhY3RvciA9IFttZXRhbGxpY1JvdWdobmVzcy5iYXNlQ29sb3IuciwgbWV0YWxsaWNSb3VnaG5lc3MuYmFzZUNvbG9yLmcsIG1ldGFsbGljUm91Z2huZXNzLmJhc2VDb2xvci5iLCBiYWJ5bG9uUEJSTWF0ZXJpYWwuYWxwaGFdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG1ldGFsbGljUm91Z2huZXNzLm1ldGFsbGljICE9IG51bGwgJiYgbWV0YWxsaWNSb3VnaG5lc3MubWV0YWxsaWMgIT09IDEpIHtcclxuICAgICAgICAgICAgZ2xURlBick1ldGFsbGljUm91Z2huZXNzLm1ldGFsbGljRmFjdG9yID0gbWV0YWxsaWNSb3VnaG5lc3MubWV0YWxsaWM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtZXRhbGxpY1JvdWdobmVzcy5yb3VnaG5lc3MgIT0gbnVsbCAmJiBtZXRhbGxpY1JvdWdobmVzcy5yb3VnaG5lc3MgIT09IDEpIHtcclxuICAgICAgICAgICAgZ2xURlBick1ldGFsbGljUm91Z2huZXNzLnJvdWdobmVzc0ZhY3RvciA9IG1ldGFsbGljUm91Z2huZXNzLnJvdWdobmVzcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChiYWJ5bG9uUEJSTWF0ZXJpYWwuYmFja0ZhY2VDdWxsaW5nICE9IG51bGwgJiYgIWJhYnlsb25QQlJNYXRlcmlhbC5iYWNrRmFjZUN1bGxpbmcpIHtcclxuICAgICAgICAgICAgaWYgKCFiYWJ5bG9uUEJSTWF0ZXJpYWwuX3R3b1NpZGVkTGlnaHRpbmcpIHtcclxuICAgICAgICAgICAgICAgIFRvb2xzLldhcm4oYmFieWxvblBCUk1hdGVyaWFsLm5hbWUgKyBcIjogQmFjay1mYWNlIGN1bGxpbmcgZGlzYWJsZWQgYW5kIHR3by1zaWRlZCBsaWdodGluZyBkaXNhYmxlZCBpcyBub3Qgc3VwcG9ydGVkIGluIGdsVEYuXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGdsVEZNYXRlcmlhbC5kb3VibGVTaWRlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaGFzVVZzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb21pc2VzOiBQcm9taXNlPHZvaWQ+W10gPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGJ1bXBUZXh0dXJlID0gYmFieWxvblBCUk1hdGVyaWFsLl9idW1wVGV4dHVyZTtcclxuICAgICAgICAgICAgaWYgKGJ1bXBUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXhwb3J0VGV4dHVyZUFzeW5jKGJ1bXBUZXh0dXJlLCBtaW1lVHlwZSkudGhlbigoZ2xURlRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdsVEZUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbFRGTWF0ZXJpYWwubm9ybWFsVGV4dHVyZSA9IGdsVEZUZXh0dXJlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJ1bXBUZXh0dXJlLmxldmVsICE9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xURk1hdGVyaWFsLm5vcm1hbFRleHR1cmUuc2NhbGUgPSBidW1wVGV4dHVyZS5sZXZlbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBhbWJpZW50VGV4dHVyZSA9IGJhYnlsb25QQlJNYXRlcmlhbC5fYW1iaWVudFRleHR1cmU7XHJcbiAgICAgICAgICAgIGlmIChhbWJpZW50VGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4cG9ydFRleHR1cmVBc3luYyhhbWJpZW50VGV4dHVyZSwgbWltZVR5cGUpLnRoZW4oKGdsVEZUZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnbFRGVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2NjbHVzaW9uVGV4dHVyZTogSU1hdGVyaWFsT2NjbHVzaW9uVGV4dHVyZUluZm8gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGdsVEZUZXh0dXJlLmluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleENvb3JkOiBnbFRGVGV4dHVyZS50ZXhDb29yZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHRlbnNpb25zOiBnbFRGVGV4dHVyZS5leHRlbnNpb25zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbFRGTWF0ZXJpYWwub2NjbHVzaW9uVGV4dHVyZSA9IG9jY2x1c2lvblRleHR1cmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhbWJpZW50VGV4dHVyZVN0cmVuZ3RoID0gYmFieWxvblBCUk1hdGVyaWFsLl9hbWJpZW50VGV4dHVyZVN0cmVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFtYmllbnRUZXh0dXJlU3RyZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvY2NsdXNpb25UZXh0dXJlLnN0cmVuZ3RoID0gYW1iaWVudFRleHR1cmVTdHJlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBlbWlzc2l2ZVRleHR1cmUgPSBiYWJ5bG9uUEJSTWF0ZXJpYWwuX2VtaXNzaXZlVGV4dHVyZTtcclxuICAgICAgICAgICAgaWYgKGVtaXNzaXZlVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4cG9ydFRleHR1cmVBc3luYyhlbWlzc2l2ZVRleHR1cmUsIG1pbWVUeXBlKS50aGVuKChnbFRGVGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2xURlRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsVEZNYXRlcmlhbC5lbWlzc2l2ZVRleHR1cmUgPSBnbFRGVGV4dHVyZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAocHJvbWlzZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZXhwb3J0ZXIuX21hdGVyaWFsTmVlZHNVVnNTZXQuYWRkKGJhYnlsb25QQlJNYXRlcmlhbCk7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGVtaXNzaXZlQ29sb3IgPSBiYWJ5bG9uUEJSTWF0ZXJpYWwuX2VtaXNzaXZlQ29sb3I7XHJcbiAgICAgICAgaWYgKCFlbWlzc2l2ZUNvbG9yLmVxdWFsc1dpdGhFcHNpbG9uKGJsYWNrLCBlcHNpbG9uKSkge1xyXG4gICAgICAgICAgICBnbFRGTWF0ZXJpYWwuZW1pc3NpdmVGYWN0b3IgPSBlbWlzc2l2ZUNvbG9yLmFzQXJyYXkoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdsVEZNYXRlcmlhbC5wYnJNZXRhbGxpY1JvdWdobmVzcyA9IGdsVEZQYnJNZXRhbGxpY1JvdWdobmVzcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9nZXRQaXhlbHNGcm9tVGV4dHVyZShiYWJ5bG9uVGV4dHVyZTogQmFzZVRleHR1cmUpOiBQcm9taXNlPE51bGxhYmxlPFVpbnQ4QXJyYXkgfCBGbG9hdDMyQXJyYXk+PiB7XHJcbiAgICAgICAgY29uc3QgcGl4ZWxzID1cclxuICAgICAgICAgICAgYmFieWxvblRleHR1cmUudGV4dHVyZVR5cGUgPT09IENvbnN0YW50cy5URVhUVVJFVFlQRV9VTlNJR05FRF9CWVRFXHJcbiAgICAgICAgICAgICAgICA/IChiYWJ5bG9uVGV4dHVyZS5yZWFkUGl4ZWxzKCkgYXMgUHJvbWlzZTxVaW50OEFycmF5PilcclxuICAgICAgICAgICAgICAgIDogKGJhYnlsb25UZXh0dXJlLnJlYWRQaXhlbHMoKSBhcyBQcm9taXNlPEZsb2F0MzJBcnJheT4pO1xyXG4gICAgICAgIHJldHVybiBwaXhlbHM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGV4cG9ydFRleHR1cmVBc3luYyhiYWJ5bG9uVGV4dHVyZTogQmFzZVRleHR1cmUsIG1pbWVUeXBlOiBJbWFnZU1pbWVUeXBlKTogUHJvbWlzZTxOdWxsYWJsZTxJVGV4dHVyZUluZm8+PiB7XHJcbiAgICAgICAgY29uc3QgZXh0ZW5zaW9uUHJvbWlzZSA9IHRoaXMuX2V4cG9ydGVyLl9leHRlbnNpb25zUHJlRXhwb3J0VGV4dHVyZUFzeW5jKFwiZXhwb3J0ZXJcIiwgYmFieWxvblRleHR1cmUgYXMgVGV4dHVyZSwgbWltZVR5cGUpO1xyXG4gICAgICAgIGlmICghZXh0ZW5zaW9uUHJvbWlzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZXhwb3J0VGV4dHVyZUluZm9Bc3luYyhiYWJ5bG9uVGV4dHVyZSwgbWltZVR5cGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGV4dGVuc2lvblByb21pc2UudGhlbigodGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9leHBvcnRUZXh0dXJlSW5mb0FzeW5jKGJhYnlsb25UZXh0dXJlLCBtaW1lVHlwZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2V4cG9ydFRleHR1cmVJbmZvQXN5bmModGV4dHVyZSwgbWltZVR5cGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgX2V4cG9ydFRleHR1cmVJbmZvQXN5bmMoYmFieWxvblRleHR1cmU6IEJhc2VUZXh0dXJlLCBtaW1lVHlwZTogSW1hZ2VNaW1lVHlwZSk6IFByb21pc2U8TnVsbGFibGU8SVRleHR1cmVJbmZvPj4ge1xyXG4gICAgICAgIGxldCB0ZXh0dXJlSW5mbyA9IHRoaXMuX3RleHR1cmVNYXAuZ2V0KGJhYnlsb25UZXh0dXJlKTtcclxuICAgICAgICBpZiAoIXRleHR1cmVJbmZvKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBpeGVscyA9IGF3YWl0IHRoaXMuX2dldFBpeGVsc0Zyb21UZXh0dXJlKGJhYnlsb25UZXh0dXJlKTtcclxuICAgICAgICAgICAgaWYgKCFwaXhlbHMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzYW1wbGVySW5kZXggPSB0aGlzLl9leHBvcnRUZXh0dXJlU2FtcGxlcihiYWJ5bG9uVGV4dHVyZSk7XHJcblxyXG4gICAgICAgICAgICAvLyBQcmVzZXJ2ZSB0ZXh0dXJlIG1pbWUgdHlwZSBpZiBkZWZpbmVkXHJcbiAgICAgICAgICAgIGNvbnN0IHRleHR1cmVNaW1lVHlwZSA9IChiYWJ5bG9uVGV4dHVyZSBhcyBUZXh0dXJlKS5taW1lVHlwZTtcclxuICAgICAgICAgICAgaWYgKHRleHR1cmVNaW1lVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0ZXh0dXJlTWltZVR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaW1hZ2UvanBlZ1wiOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpbWFnZS9wbmdcIjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaW1hZ2Uvd2VicFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW1lVHlwZSA9IHRleHR1cmVNaW1lVHlwZSBhcyBJbWFnZU1pbWVUeXBlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUb29scy5XYXJuKGBVbnN1cHBvcnRlZCBtZWRpYSB0eXBlOiAke3RleHR1cmVNaW1lVHlwZX1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGludGVybmFsVGV4dHVyZVRvSW1hZ2UgPSB0aGlzLl9pbnRlcm5hbFRleHR1cmVUb0ltYWdlO1xyXG4gICAgICAgICAgICBjb25zdCBpbnRlcm5hbFRleHR1cmVVbmlxdWVJZCA9IGJhYnlsb25UZXh0dXJlLmdldEludGVybmFsVGV4dHVyZSgpIS51bmlxdWVJZDtcclxuICAgICAgICAgICAgaW50ZXJuYWxUZXh0dXJlVG9JbWFnZVtpbnRlcm5hbFRleHR1cmVVbmlxdWVJZF0gfHw9IHt9O1xyXG4gICAgICAgICAgICBsZXQgaW1hZ2VJbmRleFByb21pc2UgPSBpbnRlcm5hbFRleHR1cmVUb0ltYWdlW2ludGVybmFsVGV4dHVyZVVuaXF1ZUlkXVttaW1lVHlwZV07XHJcbiAgICAgICAgICAgIGlmIChpbWFnZUluZGV4UHJvbWlzZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzaXplID0gYmFieWxvblRleHR1cmUuZ2V0U2l6ZSgpO1xyXG4gICAgICAgICAgICAgICAgaW1hZ2VJbmRleFByb21pc2UgPSAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLl9nZXRJbWFnZURhdGFBc3luYyhwaXhlbHMsIHNpemUud2lkdGgsIHNpemUuaGVpZ2h0LCBtaW1lVHlwZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2V4cG9ydEltYWdlKGJhYnlsb25UZXh0dXJlLm5hbWUsIG1pbWVUeXBlLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgIH0pKCk7XHJcbiAgICAgICAgICAgICAgICBpbnRlcm5hbFRleHR1cmVUb0ltYWdlW2ludGVybmFsVGV4dHVyZVVuaXF1ZUlkXVttaW1lVHlwZV0gPSBpbWFnZUluZGV4UHJvbWlzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGV4dHVyZUluZm8gPSB0aGlzLl9leHBvcnRUZXh0dXJlSW5mbyhhd2FpdCBpbWFnZUluZGV4UHJvbWlzZSwgc2FtcGxlckluZGV4LCBiYWJ5bG9uVGV4dHVyZS5jb29yZGluYXRlc0luZGV4KTtcclxuICAgICAgICAgICAgdGhpcy5fdGV4dHVyZU1hcC5zZXQoYmFieWxvblRleHR1cmUsIHRleHR1cmVJbmZvKTtcclxuICAgICAgICAgICAgdGhpcy5fZXhwb3J0ZXIuX2V4dGVuc2lvbnNQb3N0RXhwb3J0VGV4dHVyZXMoXCJleHBvcnRlclwiLCB0ZXh0dXJlSW5mbywgYmFieWxvblRleHR1cmUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRleHR1cmVJbmZvO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2V4cG9ydEltYWdlKG5hbWU6IHN0cmluZywgbWltZVR5cGU6IEltYWdlTWltZVR5cGUsIGRhdGE6IEFycmF5QnVmZmVyKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCBpbWFnZURhdGEgPSB0aGlzLl9leHBvcnRlci5faW1hZ2VEYXRhO1xyXG5cclxuICAgICAgICBjb25zdCBiYXNlTmFtZSA9IG5hbWUucmVwbGFjZSgvXFwuXFwvfFxcL3xcXC5cXFxcfFxcXFwvZywgXCJfXCIpO1xyXG4gICAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IEdldEZpbGVFeHRlbnNpb25Gcm9tTWltZVR5cGUobWltZVR5cGUpO1xyXG4gICAgICAgIGxldCBmaWxlTmFtZSA9IGJhc2VOYW1lICsgZXh0ZW5zaW9uO1xyXG4gICAgICAgIGlmIChmaWxlTmFtZSBpbiBpbWFnZURhdGEpIHtcclxuICAgICAgICAgICAgZmlsZU5hbWUgPSBgJHtiYXNlTmFtZX1fJHtUb29scy5SYW5kb21JZCgpfSR7ZXh0ZW5zaW9ufWA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbWFnZURhdGFbZmlsZU5hbWVdID0ge1xyXG4gICAgICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICBtaW1lVHlwZTogbWltZVR5cGUsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgaW1hZ2VzID0gdGhpcy5fZXhwb3J0ZXIuX2ltYWdlcztcclxuICAgICAgICBpbWFnZXMucHVzaCh7XHJcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgIHVyaTogZmlsZU5hbWUsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBpbWFnZXMubGVuZ3RoIC0gMTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9leHBvcnRUZXh0dXJlSW5mbyhpbWFnZUluZGV4OiBudW1iZXIsIHNhbXBsZXJJbmRleDogbnVtYmVyLCBjb29yZGluYXRlc0luZGV4PzogbnVtYmVyKTogSVRleHR1cmVJbmZvIHtcclxuICAgICAgICBjb25zdCB0ZXh0dXJlcyA9IHRoaXMuX2V4cG9ydGVyLl90ZXh0dXJlcztcclxuICAgICAgICBsZXQgdGV4dHVyZUluZGV4ID0gdGV4dHVyZXMuZmluZEluZGV4KCh0KSA9PiB0LnNhbXBsZXIgPT0gc2FtcGxlckluZGV4ICYmIHQuc291cmNlID09PSBpbWFnZUluZGV4KTtcclxuICAgICAgICBpZiAodGV4dHVyZUluZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgICB0ZXh0dXJlSW5kZXggPSB0ZXh0dXJlcy5sZW5ndGg7XHJcbiAgICAgICAgICAgIHRleHR1cmVzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgc291cmNlOiBpbWFnZUluZGV4LFxyXG4gICAgICAgICAgICAgICAgc2FtcGxlcjogc2FtcGxlckluZGV4LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHRleHR1cmVJbmZvOiBJVGV4dHVyZUluZm8gPSB7IGluZGV4OiB0ZXh0dXJlSW5kZXggfTtcclxuICAgICAgICBpZiAoY29vcmRpbmF0ZXNJbmRleCkge1xyXG4gICAgICAgICAgICB0ZXh0dXJlSW5mby50ZXhDb29yZCA9IGNvb3JkaW5hdGVzSW5kZXg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0ZXh0dXJlSW5mbztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9leHBvcnRUZXh0dXJlU2FtcGxlcih0ZXh0dXJlOiBOdWxsYWJsZTxCYXNlVGV4dHVyZT4pOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IHNhbXBsZXIgPSB0aGlzLl9nZXRUZXh0dXJlU2FtcGxlcih0ZXh0dXJlKTtcclxuXHJcbiAgICAgICAgLy8gaWYgYSBwcmUtZXhpc3Rpbmcgc2FtcGxlciB3aXRoIGlkZW50aWNhbCBwYXJhbWV0ZXJzIGV4aXN0cywgdGhlbiByZXVzZSB0aGUgcHJldmlvdXMgc2FtcGxlclxyXG4gICAgICAgIGNvbnN0IHNhbXBsZXJzID0gdGhpcy5fZXhwb3J0ZXIuX3NhbXBsZXJzO1xyXG4gICAgICAgIGNvbnN0IHNhbXBsZXJJbmRleCA9IHNhbXBsZXJzLmZpbmRJbmRleChcclxuICAgICAgICAgICAgKHMpID0+IHMubWluRmlsdGVyID09PSBzYW1wbGVyLm1pbkZpbHRlciAmJiBzLm1hZ0ZpbHRlciA9PT0gc2FtcGxlci5tYWdGaWx0ZXIgJiYgcy53cmFwUyA9PT0gc2FtcGxlci53cmFwUyAmJiBzLndyYXBUID09PSBzYW1wbGVyLndyYXBUXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAoc2FtcGxlckluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gc2FtcGxlckluZGV4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2FtcGxlcnMucHVzaChzYW1wbGVyKTtcclxuICAgICAgICByZXR1cm4gc2FtcGxlcnMubGVuZ3RoIC0gMTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgdHlwZSB7IElCdWZmZXJWaWV3LCBJQWNjZXNzb3IgfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IEFjY2Vzc29yQ29tcG9uZW50VHlwZSwgQWNjZXNzb3JUeXBlIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgdHlwZSB7IE1vcnBoVGFyZ2V0IH0gZnJvbSBcImNvcmUvTW9ycGgvbW9ycGhUYXJnZXRcIjtcclxuaW1wb3J0IHR5cGUgeyBEYXRhV3JpdGVyIH0gZnJvbSBcIi4vZGF0YVdyaXRlclwiO1xyXG5cclxuaW1wb3J0IHsgQ3JlYXRlQWNjZXNzb3IsIENyZWF0ZUJ1ZmZlclZpZXcsIE5vcm1hbGl6ZVRhbmdlbnQgfSBmcm9tIFwiLi9nbFRGVXRpbGl0aWVzXCI7XHJcbmltcG9ydCB0eXBlIHsgTWVzaCB9IGZyb20gXCJjb3JlL01lc2hlcy9tZXNoXCI7XHJcbmltcG9ydCB7IFZlcnRleEJ1ZmZlciB9IGZyb20gXCJjb3JlL0J1ZmZlcnMvYnVmZmVyXCI7XHJcbmltcG9ydCB7IFZlY3RvcjMgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLnZlY3RvclwiO1xyXG5pbXBvcnQgeyBUb29scyB9IGZyb20gXCJjb3JlL01pc2MvdG9vbHNcIjtcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgdG8gc3RvcmUgbW9ycGggdGFyZ2V0IGluZm9ybWF0aW9uLlxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU1vcnBoVGFyZ2V0RGF0YSB7XHJcbiAgICBhdHRyaWJ1dGVzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+O1xyXG4gICAgaW5mbHVlbmNlOiBudW1iZXI7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBCdWlsZE1vcnBoVGFyZ2V0QnVmZmVycyhcclxuICAgIG1vcnBoVGFyZ2V0OiBNb3JwaFRhcmdldCxcclxuICAgIG1lc2g6IE1lc2gsXHJcbiAgICBkYXRhV3JpdGVyOiBEYXRhV3JpdGVyLFxyXG4gICAgYnVmZmVyVmlld3M6IElCdWZmZXJWaWV3W10sXHJcbiAgICBhY2Nlc3NvcnM6IElBY2Nlc3NvcltdLFxyXG4gICAgY29udmVydFRvUmlnaHRIYW5kZWQ6IGJvb2xlYW5cclxuKTogSU1vcnBoVGFyZ2V0RGF0YSB7XHJcbiAgICBjb25zdCByZXN1bHQ6IElNb3JwaFRhcmdldERhdGEgPSB7XHJcbiAgICAgICAgYXR0cmlidXRlczoge30sXHJcbiAgICAgICAgaW5mbHVlbmNlOiBtb3JwaFRhcmdldC5pbmZsdWVuY2UsXHJcbiAgICAgICAgbmFtZTogbW9ycGhUYXJnZXQubmFtZSxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZmxpcFggPSBjb252ZXJ0VG9SaWdodEhhbmRlZCA/IC0xIDogMTtcclxuICAgIGNvbnN0IGZsb2F0U2l6ZSA9IDQ7XHJcbiAgICBjb25zdCBkaWZmZXJlbmNlID0gVmVjdG9yMy5aZXJvKCk7XHJcbiAgICBsZXQgdmVydGV4U3RhcnQgPSAwO1xyXG4gICAgbGV0IHZlcnRleENvdW50ID0gMDtcclxuICAgIGxldCBieXRlT2Zmc2V0ID0gMDtcclxuICAgIGxldCBidWZmZXJWaWV3SW5kZXggPSAwO1xyXG5cclxuICAgIGlmIChtb3JwaFRhcmdldC5oYXNQb3NpdGlvbnMpIHtcclxuICAgICAgICBjb25zdCBtb3JwaFBvc2l0aW9ucyA9IG1vcnBoVGFyZ2V0LmdldFBvc2l0aW9ucygpITtcclxuICAgICAgICBjb25zdCBvcmlnaW5hbFBvc2l0aW9ucyA9IG1lc2guZ2V0VmVydGljZXNEYXRhKFZlcnRleEJ1ZmZlci5Qb3NpdGlvbktpbmQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0cnVlKTtcclxuXHJcbiAgICAgICAgaWYgKG9yaWdpbmFsUG9zaXRpb25zKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1pbiA9IFtJbmZpbml0eSwgSW5maW5pdHksIEluZmluaXR5XTtcclxuICAgICAgICAgICAgY29uc3QgbWF4ID0gWy1JbmZpbml0eSwgLUluZmluaXR5LCAtSW5maW5pdHldO1xyXG4gICAgICAgICAgICB2ZXJ0ZXhDb3VudCA9IG9yaWdpbmFsUG9zaXRpb25zLmxlbmd0aCAvIDM7XHJcbiAgICAgICAgICAgIGJ5dGVPZmZzZXQgPSBkYXRhV3JpdGVyLmJ5dGVPZmZzZXQ7XHJcbiAgICAgICAgICAgIHZlcnRleFN0YXJ0ID0gMDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHZlcnRleFN0YXJ0OyBpIDwgdmVydGV4Q291bnQ7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxQb3NpdGlvbiA9IFZlY3RvcjMuRnJvbUFycmF5KG9yaWdpbmFsUG9zaXRpb25zLCBpICogMyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtb3JwaFBvc2l0aW9uID0gVmVjdG9yMy5Gcm9tQXJyYXkobW9ycGhQb3NpdGlvbnMsIGkgKiAzKTtcclxuICAgICAgICAgICAgICAgIG1vcnBoUG9zaXRpb24uc3VidHJhY3RUb1JlZihvcmlnaW5hbFBvc2l0aW9uLCBkaWZmZXJlbmNlKTtcclxuICAgICAgICAgICAgICAgIGRpZmZlcmVuY2UueCAqPSBmbGlwWDtcclxuXHJcbiAgICAgICAgICAgICAgICBtaW5bMF0gPSBNYXRoLm1pbihtaW5bMF0sIGRpZmZlcmVuY2UueCk7XHJcbiAgICAgICAgICAgICAgICBtYXhbMF0gPSBNYXRoLm1heChtYXhbMF0sIGRpZmZlcmVuY2UueCk7XHJcblxyXG4gICAgICAgICAgICAgICAgbWluWzFdID0gTWF0aC5taW4obWluWzFdLCBkaWZmZXJlbmNlLnkpO1xyXG4gICAgICAgICAgICAgICAgbWF4WzFdID0gTWF0aC5tYXgobWF4WzFdLCBkaWZmZXJlbmNlLnkpO1xyXG5cclxuICAgICAgICAgICAgICAgIG1pblsyXSA9IE1hdGgubWluKG1pblsyXSwgZGlmZmVyZW5jZS56KTtcclxuICAgICAgICAgICAgICAgIG1heFsyXSA9IE1hdGgubWF4KG1heFsyXSwgZGlmZmVyZW5jZS56KTtcclxuXHJcbiAgICAgICAgICAgICAgICBkYXRhV3JpdGVyLndyaXRlRmxvYXQzMihkaWZmZXJlbmNlLngpO1xyXG4gICAgICAgICAgICAgICAgZGF0YVdyaXRlci53cml0ZUZsb2F0MzIoZGlmZmVyZW5jZS55KTtcclxuICAgICAgICAgICAgICAgIGRhdGFXcml0ZXIud3JpdGVGbG9hdDMyKGRpZmZlcmVuY2Uueik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGJ1ZmZlclZpZXdzLnB1c2goQ3JlYXRlQnVmZmVyVmlldygwLCBieXRlT2Zmc2V0LCBtb3JwaFBvc2l0aW9ucy5sZW5ndGggKiBmbG9hdFNpemUsIGZsb2F0U2l6ZSAqIDMpKTtcclxuICAgICAgICAgICAgYnVmZmVyVmlld0luZGV4ID0gYnVmZmVyVmlld3MubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgYWNjZXNzb3JzLnB1c2goQ3JlYXRlQWNjZXNzb3IoYnVmZmVyVmlld0luZGV4LCBBY2Nlc3NvclR5cGUuVkVDMywgQWNjZXNzb3JDb21wb25lbnRUeXBlLkZMT0FULCBtb3JwaFBvc2l0aW9ucy5sZW5ndGggLyAzLCAwLCB7IG1pbiwgbWF4IH0pKTtcclxuICAgICAgICAgICAgcmVzdWx0LmF0dHJpYnV0ZXNbXCJQT1NJVElPTlwiXSA9IGFjY2Vzc29ycy5sZW5ndGggLSAxO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIFRvb2xzLldhcm4oYE1vcnBoIHRhcmdldCBwb3NpdGlvbnMgZm9yIG1lc2ggJHttZXNoLm5hbWV9IHdlcmUgbm90IGV4cG9ydGVkLiBNZXNoIGRvZXMgbm90IGhhdmUgcG9zaXRpb24gdmVydGV4IGRhdGFgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG1vcnBoVGFyZ2V0Lmhhc05vcm1hbHMpIHtcclxuICAgICAgICBjb25zdCBtb3JwaE5vcm1hbHMgPSBtb3JwaFRhcmdldC5nZXROb3JtYWxzKCkhO1xyXG4gICAgICAgIGNvbnN0IG9yaWdpbmFsTm9ybWFscyA9IG1lc2guZ2V0VmVydGljZXNEYXRhKFZlcnRleEJ1ZmZlci5Ob3JtYWxLaW5kLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIGlmIChvcmlnaW5hbE5vcm1hbHMpIHtcclxuICAgICAgICAgICAgdmVydGV4Q291bnQgPSBvcmlnaW5hbE5vcm1hbHMubGVuZ3RoIC8gMztcclxuICAgICAgICAgICAgYnl0ZU9mZnNldCA9IGRhdGFXcml0ZXIuYnl0ZU9mZnNldDtcclxuICAgICAgICAgICAgdmVydGV4U3RhcnQgPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gdmVydGV4U3RhcnQ7IGkgPCB2ZXJ0ZXhDb3VudDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvcmlnaW5hbE5vcm1hbCA9IFZlY3RvcjMuRnJvbUFycmF5KG9yaWdpbmFsTm9ybWFscywgaSAqIDMpLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbW9ycGhOb3JtYWwgPSBWZWN0b3IzLkZyb21BcnJheShtb3JwaE5vcm1hbHMsIGkgKiAzKS5ub3JtYWxpemUoKTtcclxuICAgICAgICAgICAgICAgIG1vcnBoTm9ybWFsLnN1YnRyYWN0VG9SZWYob3JpZ2luYWxOb3JtYWwsIGRpZmZlcmVuY2UpO1xyXG4gICAgICAgICAgICAgICAgZGF0YVdyaXRlci53cml0ZUZsb2F0MzIoZGlmZmVyZW5jZS54ICogZmxpcFgpO1xyXG4gICAgICAgICAgICAgICAgZGF0YVdyaXRlci53cml0ZUZsb2F0MzIoZGlmZmVyZW5jZS55KTtcclxuICAgICAgICAgICAgICAgIGRhdGFXcml0ZXIud3JpdGVGbG9hdDMyKGRpZmZlcmVuY2Uueik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGJ1ZmZlclZpZXdzLnB1c2goQ3JlYXRlQnVmZmVyVmlldygwLCBieXRlT2Zmc2V0LCBtb3JwaE5vcm1hbHMubGVuZ3RoICogZmxvYXRTaXplLCBmbG9hdFNpemUgKiAzKSk7XHJcbiAgICAgICAgICAgIGJ1ZmZlclZpZXdJbmRleCA9IGJ1ZmZlclZpZXdzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgIGFjY2Vzc29ycy5wdXNoKENyZWF0ZUFjY2Vzc29yKGJ1ZmZlclZpZXdJbmRleCwgQWNjZXNzb3JUeXBlLlZFQzMsIEFjY2Vzc29yQ29tcG9uZW50VHlwZS5GTE9BVCwgbW9ycGhOb3JtYWxzLmxlbmd0aCAvIDMsIDApKTtcclxuICAgICAgICAgICAgcmVzdWx0LmF0dHJpYnV0ZXNbXCJOT1JNQUxcIl0gPSBhY2Nlc3NvcnMubGVuZ3RoIC0gMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBUb29scy5XYXJuKGBNb3JwaCB0YXJnZXQgbm9ybWFscyBmb3IgbWVzaCAke21lc2gubmFtZX0gd2VyZSBub3QgZXhwb3J0ZWQuIE1lc2ggZG9lcyBub3QgaGF2ZSBub3JtYWxzIHZlcnRleCBkYXRhYCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChtb3JwaFRhcmdldC5oYXNUYW5nZW50cykge1xyXG4gICAgICAgIGNvbnN0IG1vcnBoVGFuZ2VudHMgPSBtb3JwaFRhcmdldC5nZXRUYW5nZW50cygpITtcclxuICAgICAgICBjb25zdCBvcmlnaW5hbFRhbmdlbnRzID0gbWVzaC5nZXRWZXJ0aWNlc0RhdGEoVmVydGV4QnVmZmVyLlRhbmdlbnRLaW5kLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIGlmIChvcmlnaW5hbFRhbmdlbnRzKSB7XHJcbiAgICAgICAgICAgIHZlcnRleENvdW50ID0gb3JpZ2luYWxUYW5nZW50cy5sZW5ndGggLyA0O1xyXG4gICAgICAgICAgICB2ZXJ0ZXhTdGFydCA9IDA7XHJcbiAgICAgICAgICAgIGJ5dGVPZmZzZXQgPSBkYXRhV3JpdGVyLmJ5dGVPZmZzZXQ7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSB2ZXJ0ZXhTdGFydDsgaSA8IHZlcnRleENvdW50OyArK2kpIHtcclxuICAgICAgICAgICAgICAgIC8vIE9ubHkgcmVhZCB0aGUgeCwgeSwgeiBjb21wb25lbnRzIGFuZCBpZ25vcmUgd1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxUYW5nZW50ID0gVmVjdG9yMy5Gcm9tQXJyYXkob3JpZ2luYWxUYW5nZW50cywgaSAqIDQpO1xyXG4gICAgICAgICAgICAgICAgTm9ybWFsaXplVGFuZ2VudChvcmlnaW5hbFRhbmdlbnQpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIE1vcnBoIHRhcmdldCB0YW5nZW50cyBvbWl0IHRoZSB3IGNvbXBvbmVudCBzbyBpdCB3b24ndCBiZSBwcmVzZW50IGluIHRoZSBkYXRhXHJcbiAgICAgICAgICAgICAgICBjb25zdCBtb3JwaFRhbmdlbnQgPSBWZWN0b3IzLkZyb21BcnJheShtb3JwaFRhbmdlbnRzLCBpICogMyk7XHJcbiAgICAgICAgICAgICAgICBOb3JtYWxpemVUYW5nZW50KG1vcnBoVGFuZ2VudCk7XHJcblxyXG4gICAgICAgICAgICAgICAgbW9ycGhUYW5nZW50LnN1YnRyYWN0VG9SZWYob3JpZ2luYWxUYW5nZW50LCBkaWZmZXJlbmNlKTtcclxuICAgICAgICAgICAgICAgIGRhdGFXcml0ZXIud3JpdGVGbG9hdDMyKGRpZmZlcmVuY2UueCAqIGZsaXBYKTtcclxuICAgICAgICAgICAgICAgIGRhdGFXcml0ZXIud3JpdGVGbG9hdDMyKGRpZmZlcmVuY2UueSk7XHJcbiAgICAgICAgICAgICAgICBkYXRhV3JpdGVyLndyaXRlRmxvYXQzMihkaWZmZXJlbmNlLnopO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBidWZmZXJWaWV3cy5wdXNoKENyZWF0ZUJ1ZmZlclZpZXcoMCwgYnl0ZU9mZnNldCwgdmVydGV4Q291bnQgKiBmbG9hdFNpemUgKiAzLCBmbG9hdFNpemUgKiAzKSk7XHJcbiAgICAgICAgICAgIGJ1ZmZlclZpZXdJbmRleCA9IGJ1ZmZlclZpZXdzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgIGFjY2Vzc29ycy5wdXNoKENyZWF0ZUFjY2Vzc29yKGJ1ZmZlclZpZXdJbmRleCwgQWNjZXNzb3JUeXBlLlZFQzMsIEFjY2Vzc29yQ29tcG9uZW50VHlwZS5GTE9BVCwgdmVydGV4Q291bnQsIDApKTtcclxuICAgICAgICAgICAgcmVzdWx0LmF0dHJpYnV0ZXNbXCJUQU5HRU5UXCJdID0gYWNjZXNzb3JzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgVG9vbHMuV2FybihgTW9ycGggdGFyZ2V0IHRhbmdlbnRzIGZvciBtZXNoICR7bWVzaC5uYW1lfSB3ZXJlIG5vdCBleHBvcnRlZC4gTWVzaCBkb2VzIG5vdCBoYXZlIHRhbmdlbnRzIHZlcnRleCBkYXRhYCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuIiwiaW1wb3J0IHR5cGUgeyBOb2RlIH0gZnJvbSBcImNvcmUvbm9kZVwiO1xyXG5pbXBvcnQgdHlwZSB7IFNjZW5lIH0gZnJvbSBcImNvcmUvc2NlbmVcIjtcclxuaW1wb3J0IHR5cGUgeyBBbmltYXRpb24gfSBmcm9tIFwiY29yZS9BbmltYXRpb25zL2FuaW1hdGlvblwiO1xyXG5pbXBvcnQgdHlwZSB7IEdMVEZEYXRhIH0gZnJvbSBcIi4vZ2xURkRhdGFcIjtcclxuaW1wb3J0IHsgR0xURkV4cG9ydGVyIH0gZnJvbSBcIi4vZ2xURkV4cG9ydGVyXCI7XHJcblxyXG4vKipcclxuICogSG9sZHMgYSBjb2xsZWN0aW9uIG9mIGV4cG9ydGVyIG9wdGlvbnMgYW5kIHBhcmFtZXRlcnNcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUV4cG9ydE9wdGlvbnMge1xyXG4gICAgLyoqXHJcbiAgICAgKiBGdW5jdGlvbiB3aGljaCBpbmRpY2F0ZXMgd2hldGhlciBhIGJhYnlsb24gbm9kZSBzaG91bGQgYmUgZXhwb3J0ZWQgb3Igbm90XHJcbiAgICAgKiBAcGFyYW0gbm9kZSBzb3VyY2UgQmFieWxvbiBub2RlLiBJdCBpcyB1c2VkIHRvIGNoZWNrIHdoZXRoZXIgaXQgc2hvdWxkIGJlIGV4cG9ydGVkIHRvIGdsVEYgb3Igbm90XHJcbiAgICAgKiBAcmV0dXJucyBib29sZWFuLCB3aGljaCBpbmRpY2F0ZXMgd2hldGhlciB0aGUgbm9kZSBzaG91bGQgYmUgZXhwb3J0ZWQgKHRydWUpIG9yIG5vdCAoZmFsc2UpXHJcbiAgICAgKi9cclxuICAgIHNob3VsZEV4cG9ydE5vZGU/KG5vZGU6IE5vZGUpOiBib29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRnVuY3Rpb24gd2hpY2ggaW5kaWNhdGVzIHdoZXRoZXIgYW4gYW5pbWF0aW9uIG9uIHRoZSBzY2VuZSBzaG91bGQgYmUgZXhwb3J0ZWQgb3Igbm90XHJcbiAgICAgKiBAcGFyYW0gYW5pbWF0aW9uIHNvdXJjZSBhbmltYXRpb25cclxuICAgICAqIEByZXR1cm5zIGJvb2xlYW4sIHdoaWNoIGluZGljYXRlcyB3aGV0aGVyIHRoZSBhbmltYXRpb24gc2hvdWxkIGJlIGV4cG9ydGVkICh0cnVlKSBvciBub3QgKGZhbHNlKVxyXG4gICAgICovXHJcbiAgICBzaG91bGRFeHBvcnRBbmltYXRpb24/KGFuaW1hdGlvbjogQW5pbWF0aW9uKTogYm9vbGVhbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEZ1bmN0aW9uIHVzZWQgdG8gZXh0cmFjdCB0aGUgcGFydCBvZiBub2RlJ3MgbWV0YWRhdGEgdGhhdCB3aWxsIGJlIGV4cG9ydGVkIGludG8gZ2xURiBub2RlIGV4dHJhc1xyXG4gICAgICogQHBhcmFtIG1ldGFkYXRhIHNvdXJjZSBtZXRhZGF0YSB0byByZWFkIGZyb21cclxuICAgICAqIEByZXR1cm5zIHRoZSBkYXRhIHRvIHN0b3JlIHRvIGdsVEYgbm9kZSBleHRyYXNcclxuICAgICAqL1xyXG4gICAgbWV0YWRhdGFTZWxlY3Rvcj8obWV0YWRhdGE6IGFueSk6IGFueTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBzYW1wbGUgcmF0ZSB0byBiYWtlIGFuaW1hdGlvbiBjdXJ2ZXMuIERlZmF1bHRzIHRvIDEgLyA2MC5cclxuICAgICAqL1xyXG4gICAgYW5pbWF0aW9uU2FtcGxlUmF0ZT86IG51bWJlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEJlZ2luIHNlcmlhbGl6YXRpb24gd2l0aG91dCB3YWl0aW5nIGZvciB0aGUgc2NlbmUgdG8gYmUgcmVhZHkuIERlZmF1bHRzIHRvIGZhbHNlLlxyXG4gICAgICovXHJcbiAgICBleHBvcnRXaXRob3V0V2FpdGluZ0ZvclNjZW5lPzogYm9vbGVhbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEluZGljYXRlcyBpZiB1bnVzZWQgdmVydGV4IHV2IGF0dHJpYnV0ZXMgc2hvdWxkIGJlIGluY2x1ZGVkIGluIGV4cG9ydC4gRGVmYXVsdHMgdG8gZmFsc2UuXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydFVudXNlZFVWcz86IGJvb2xlYW47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmUgbm8tb3Agcm9vdCBub2RlcyB3aGVuIHBvc3NpYmxlLiBEZWZhdWx0cyB0byB0cnVlLlxyXG4gICAgICovXHJcbiAgICByZW1vdmVOb29wUm9vdE5vZGVzPzogYm9vbGVhbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEluZGljYXRlcyBpZiBjb29yZGluYXRlIHN5c3RlbSBzd2FwcGluZyByb290IG5vZGVzIHNob3VsZCBiZSBpbmNsdWRlZCBpbiBleHBvcnQuIERlZmF1bHRzIHRvIGZhbHNlLlxyXG4gICAgICogQGRlcHJlY2F0ZWQgUGxlYXNlIHVzZSByZW1vdmVOb29wUm9vdE5vZGVzIGluc3RlYWRcclxuICAgICAqL1xyXG4gICAgaW5jbHVkZUNvb3JkaW5hdGVTeXN0ZW1Db252ZXJzaW9uTm9kZXM/OiBib29sZWFuO1xyXG59XHJcblxyXG4vKipcclxuICogQ2xhc3MgZm9yIGdlbmVyYXRpbmcgZ2xURiBkYXRhIGZyb20gYSBCYWJ5bG9uIHNjZW5lLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEdMVEYyRXhwb3J0IHtcclxuICAgIC8qKlxyXG4gICAgICogRXhwb3J0cyB0aGUgc2NlbmUgdG8gLmdsdGYgZmlsZSBmb3JtYXRcclxuICAgICAqIEBwYXJhbSBzY2VuZSBCYWJ5bG9uIHNjZW5lXHJcbiAgICAgKiBAcGFyYW0gZmlsZU5hbWUgTmFtZSB0byB1c2UgZm9yIHRoZSAuZ2x0ZiBmaWxlXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBFeHBvcnRlciBvcHRpb25zXHJcbiAgICAgKiBAcmV0dXJucyBSZXR1cm5zIHRoZSBleHBvcnRlZCBkYXRhXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgR0xURkFzeW5jKHNjZW5lOiBTY2VuZSwgZmlsZU5hbWU6IHN0cmluZywgb3B0aW9ucz86IElFeHBvcnRPcHRpb25zKTogUHJvbWlzZTxHTFRGRGF0YT4ge1xyXG4gICAgICAgIGlmICghb3B0aW9ucyB8fCAhb3B0aW9ucy5leHBvcnRXaXRob3V0V2FpdGluZ0ZvclNjZW5lKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHNjZW5lLndoZW5SZWFkeUFzeW5jKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBleHBvcnRlciA9IG5ldyBHTFRGRXhwb3J0ZXIoc2NlbmUsIG9wdGlvbnMpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBleHBvcnRlci5nZW5lcmF0ZUdMVEZBc3luYyhmaWxlTmFtZS5yZXBsYWNlKC9cXC5bXi8uXSskLywgXCJcIikpO1xyXG4gICAgICAgIGV4cG9ydGVyLmRpc3Bvc2UoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFeHBvcnRzIHRoZSBzY2VuZSB0byAuZ2xiIGZpbGUgZm9ybWF0XHJcbiAgICAgKiBAcGFyYW0gc2NlbmUgQmFieWxvbiBzY2VuZVxyXG4gICAgICogQHBhcmFtIGZpbGVOYW1lIE5hbWUgdG8gdXNlIGZvciB0aGUgLmdsYiBmaWxlXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBFeHBvcnRlciBvcHRpb25zXHJcbiAgICAgKiBAcmV0dXJucyBSZXR1cm5zIHRoZSBleHBvcnRlZCBkYXRhXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgR0xCQXN5bmMoc2NlbmU6IFNjZW5lLCBmaWxlTmFtZTogc3RyaW5nLCBvcHRpb25zPzogSUV4cG9ydE9wdGlvbnMpOiBQcm9taXNlPEdMVEZEYXRhPiB7XHJcbiAgICAgICAgaWYgKCFvcHRpb25zIHx8ICFvcHRpb25zLmV4cG9ydFdpdGhvdXRXYWl0aW5nRm9yU2NlbmUpIHtcclxuICAgICAgICAgICAgYXdhaXQgc2NlbmUud2hlblJlYWR5QXN5bmMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGV4cG9ydGVyID0gbmV3IEdMVEZFeHBvcnRlcihzY2VuZSwgb3B0aW9ucyk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGV4cG9ydGVyLmdlbmVyYXRlR0xCQXN5bmMoZmlsZU5hbWUucmVwbGFjZSgvXFwuW14vLl0rJC8sIFwiXCIpKTtcclxuICAgICAgICBleHBvcnRlci5kaXNwb3NlKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGpzZG9jL3JlcXVpcmUtanNkb2MgKi9cclxuXHJcbmltcG9ydCB0eXBlIHsgSUJ1ZmZlclZpZXcsIEFjY2Vzc29yQ29tcG9uZW50VHlwZSwgSUFjY2Vzc29yLCBJTm9kZSB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgQWNjZXNzb3JUeXBlLCBNZXNoUHJpbWl0aXZlTW9kZSB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuXHJcbmltcG9ydCB0eXBlIHsgRmxvYXRBcnJheSwgRGF0YUFycmF5LCBJbmRpY2VzQXJyYXksIE51bGxhYmxlIH0gZnJvbSBcImNvcmUvdHlwZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBWZWN0b3I0IH0gZnJvbSBcImNvcmUvTWF0aHMvbWF0aC52ZWN0b3JcIjtcclxuaW1wb3J0IHsgUXVhdGVybmlvbiwgVG1wVmVjdG9ycywgTWF0cml4LCBWZWN0b3IzIH0gZnJvbSBcImNvcmUvTWF0aHMvbWF0aC52ZWN0b3JcIjtcclxuaW1wb3J0IHsgVmVydGV4QnVmZmVyIH0gZnJvbSBcImNvcmUvQnVmZmVycy9idWZmZXJcIjtcclxuaW1wb3J0IHsgTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgVHJhbnNmb3JtTm9kZSB9IGZyb20gXCJjb3JlL01lc2hlcy90cmFuc2Zvcm1Ob2RlXCI7XHJcbmltcG9ydCB7IE1lc2ggfSBmcm9tIFwiY29yZS9NZXNoZXMvbWVzaFwiO1xyXG5pbXBvcnQgeyBJbnN0YW5jZWRNZXNoIH0gZnJvbSBcImNvcmUvTWVzaGVzL2luc3RhbmNlZE1lc2hcIjtcclxuaW1wb3J0IHsgRW51bWVyYXRlRmxvYXRWYWx1ZXMgfSBmcm9tIFwiY29yZS9CdWZmZXJzL2J1ZmZlclV0aWxzXCI7XHJcbmltcG9ydCB0eXBlIHsgTm9kZSB9IGZyb20gXCJjb3JlL25vZGVcIjtcclxuXHJcbi8vIE1hdHJpeCB0aGF0IGNvbnZlcnRzIGhhbmRlZG5lc3Mgb24gdGhlIFgtYXhpcy5cclxuY29uc3QgY29udmVydEhhbmRlZG5lc3NNYXRyaXggPSBNYXRyaXguQ29tcG9zZShuZXcgVmVjdG9yMygtMSwgMSwgMSksIFF1YXRlcm5pb24uSWRlbnRpdHkoKSwgVmVjdG9yMy5aZXJvKCkpO1xyXG5cclxuLy8gMTgwIGRlZ3JlZXMgcm90YXRpb24gaW4gWS5cclxuY29uc3Qgcm90YXRpb24xODBZID0gbmV3IFF1YXRlcm5pb24oMCwgMSwgMCwgMCk7XHJcblxyXG4vLyBEZWZhdWx0IHZhbHVlcyBmb3IgY29tcGFyaXNvbi5cclxuY29uc3QgZXBzaWxvbiA9IDFlLTY7XHJcbmNvbnN0IGRlZmF1bHRUcmFuc2xhdGlvbiA9IFZlY3RvcjMuWmVybygpO1xyXG5jb25zdCBkZWZhdWx0U2NhbGUgPSBWZWN0b3IzLk9uZSgpO1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBidWZmZXIgdmlldyBiYXNlZCBvbiB0aGUgc3VwcGxpZWQgYXJndW1lbnRzXHJcbiAqIEBwYXJhbSBidWZmZXJJbmRleCBpbmRleCB2YWx1ZSBvZiB0aGUgc3BlY2lmaWVkIGJ1ZmZlclxyXG4gKiBAcGFyYW0gYnl0ZU9mZnNldCBieXRlIG9mZnNldCB2YWx1ZVxyXG4gKiBAcGFyYW0gYnl0ZUxlbmd0aCBieXRlIGxlbmd0aCBvZiB0aGUgYnVmZmVyVmlld1xyXG4gKiBAcGFyYW0gYnl0ZVN0cmlkZSBieXRlIGRpc3RhbmNlIGJldHdlZW4gY29uZXF1ZW50aWFsIGVsZW1lbnRzXHJcbiAqIEByZXR1cm5zIGJ1ZmZlclZpZXcgZm9yIGdsVEZcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBDcmVhdGVCdWZmZXJWaWV3KGJ1ZmZlckluZGV4OiBudW1iZXIsIGJ5dGVPZmZzZXQ6IG51bWJlciwgYnl0ZUxlbmd0aDogbnVtYmVyLCBieXRlU3RyaWRlPzogbnVtYmVyKTogSUJ1ZmZlclZpZXcge1xyXG4gICAgY29uc3QgYnVmZmVydmlldzogSUJ1ZmZlclZpZXcgPSB7IGJ1ZmZlcjogYnVmZmVySW5kZXgsIGJ5dGVMZW5ndGg6IGJ5dGVMZW5ndGggfTtcclxuXHJcbiAgICBpZiAoYnl0ZU9mZnNldCkge1xyXG4gICAgICAgIGJ1ZmZlcnZpZXcuYnl0ZU9mZnNldCA9IGJ5dGVPZmZzZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGJ5dGVTdHJpZGUpIHtcclxuICAgICAgICBidWZmZXJ2aWV3LmJ5dGVTdHJpZGUgPSBieXRlU3RyaWRlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBidWZmZXJ2aWV3O1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhbiBhY2Nlc3NvciBiYXNlZCBvbiB0aGUgc3VwcGxpZWQgYXJndW1lbnRzXHJcbiAqIEBwYXJhbSBidWZmZXJWaWV3SW5kZXggVGhlIGluZGV4IG9mIHRoZSBidWZmZXJ2aWV3IHJlZmVyZW5jZWQgYnkgdGhpcyBhY2Nlc3NvclxyXG4gKiBAcGFyYW0gdHlwZSBUaGUgdHlwZSBvZiB0aGUgYWNjZXNzb3JcclxuICogQHBhcmFtIGNvbXBvbmVudFR5cGUgVGhlIGRhdGF0eXBlIG9mIGNvbXBvbmVudHMgaW4gdGhlIGF0dHJpYnV0ZVxyXG4gKiBAcGFyYW0gY291bnQgVGhlIG51bWJlciBvZiBhdHRyaWJ1dGVzIHJlZmVyZW5jZWQgYnkgdGhpcyBhY2Nlc3NvclxyXG4gKiBAcGFyYW0gYnl0ZU9mZnNldCBUaGUgb2Zmc2V0IHJlbGF0aXZlIHRvIHRoZSBzdGFydCBvZiB0aGUgYnVmZmVyVmlldyBpbiBieXRlc1xyXG4gKiBAcGFyYW0gbWluTWF4IE1pbmltdW0gYW5kIG1heGltdW0gdmFsdWUgb2YgZWFjaCBjb21wb25lbnQgaW4gdGhpcyBhdHRyaWJ1dGVcclxuICogQHBhcmFtIG5vcm1hbGl6ZWQgU3BlY2lmaWVzIHdoZXRoZXIgaW50ZWdlciBkYXRhIHZhbHVlcyBhcmUgbm9ybWFsaXplZCBiZWZvcmUgdXNhZ2VcclxuICogQHJldHVybnMgYWNjZXNzb3IgZm9yIGdsVEZcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBDcmVhdGVBY2Nlc3NvcihcclxuICAgIGJ1ZmZlclZpZXdJbmRleDogbnVtYmVyLFxyXG4gICAgdHlwZTogQWNjZXNzb3JUeXBlLFxyXG4gICAgY29tcG9uZW50VHlwZTogQWNjZXNzb3JDb21wb25lbnRUeXBlLFxyXG4gICAgY291bnQ6IG51bWJlcixcclxuICAgIGJ5dGVPZmZzZXQ6IE51bGxhYmxlPG51bWJlcj4sXHJcbiAgICBtaW5NYXg6IE51bGxhYmxlPHsgbWluOiBudW1iZXJbXTsgbWF4OiBudW1iZXJbXSB9PiA9IG51bGwsXHJcbiAgICBub3JtYWxpemVkPzogYm9vbGVhblxyXG4pOiBJQWNjZXNzb3Ige1xyXG4gICAgY29uc3QgYWNjZXNzb3I6IElBY2Nlc3NvciA9IHsgYnVmZmVyVmlldzogYnVmZmVyVmlld0luZGV4LCBjb21wb25lbnRUeXBlOiBjb21wb25lbnRUeXBlLCBjb3VudDogY291bnQsIHR5cGU6IHR5cGUgfTtcclxuXHJcbiAgICBpZiAobWluTWF4ICE9IG51bGwpIHtcclxuICAgICAgICBhY2Nlc3Nvci5taW4gPSBtaW5NYXgubWluO1xyXG4gICAgICAgIGFjY2Vzc29yLm1heCA9IG1pbk1heC5tYXg7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG5vcm1hbGl6ZWQpIHtcclxuICAgICAgICBhY2Nlc3Nvci5ub3JtYWxpemVkID0gbm9ybWFsaXplZDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYnl0ZU9mZnNldCAhPSBudWxsKSB7XHJcbiAgICAgICAgYWNjZXNzb3IuYnl0ZU9mZnNldCA9IGJ5dGVPZmZzZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFjY2Vzc29yO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gR2V0QWNjZXNzb3JFbGVtZW50Q291bnQoYWNjZXNzb3JUeXBlOiBBY2Nlc3NvclR5cGUpOiBudW1iZXIge1xyXG4gICAgc3dpdGNoIChhY2Nlc3NvclR5cGUpIHtcclxuICAgICAgICBjYXNlIEFjY2Vzc29yVHlwZS5NQVQyOlxyXG4gICAgICAgICAgICByZXR1cm4gNDtcclxuICAgICAgICBjYXNlIEFjY2Vzc29yVHlwZS5NQVQzOlxyXG4gICAgICAgICAgICByZXR1cm4gOTtcclxuICAgICAgICBjYXNlIEFjY2Vzc29yVHlwZS5NQVQ0OlxyXG4gICAgICAgICAgICByZXR1cm4gMTY7XHJcbiAgICAgICAgY2FzZSBBY2Nlc3NvclR5cGUuU0NBTEFSOlxyXG4gICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICBjYXNlIEFjY2Vzc29yVHlwZS5WRUMyOlxyXG4gICAgICAgICAgICByZXR1cm4gMjtcclxuICAgICAgICBjYXNlIEFjY2Vzc29yVHlwZS5WRUMzOlxyXG4gICAgICAgICAgICByZXR1cm4gMztcclxuICAgICAgICBjYXNlIEFjY2Vzc29yVHlwZS5WRUM0OlxyXG4gICAgICAgICAgICByZXR1cm4gNDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEZsb2F0c05lZWQxNkJpdEludGVnZXIoZmxvYXRBcnJheTogRmxvYXRBcnJheSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZsb2F0QXJyYXkuc29tZSgodmFsdWUpID0+IHZhbHVlID49IDI1Nik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBJc1N0YW5kYXJkVmVydGV4QXR0cmlidXRlKHR5cGU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuUG9zaXRpb25LaW5kOlxyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLk5vcm1hbEtpbmQ6XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuVGFuZ2VudEtpbmQ6XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuQ29sb3JLaW5kOlxyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLk1hdHJpY2VzSW5kaWNlc0tpbmQ6XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuTWF0cmljZXNJbmRpY2VzRXh0cmFLaW5kOlxyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLk1hdHJpY2VzV2VpZ2h0c0tpbmQ6XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuTWF0cmljZXNXZWlnaHRzRXh0cmFLaW5kOlxyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLlVWS2luZDpcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5VVjJLaW5kOlxyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLlVWM0tpbmQ6XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuVVY0S2luZDpcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5VVjVLaW5kOlxyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLlVWNktpbmQ6XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gR2V0QWNjZXNzb3JUeXBlKGtpbmQ6IHN0cmluZywgaGFzVmVydGV4Q29sb3JBbHBoYTogYm9vbGVhbik6IEFjY2Vzc29yVHlwZSB7XHJcbiAgICBpZiAoa2luZCA9PSBWZXJ0ZXhCdWZmZXIuQ29sb3JLaW5kKSB7XHJcbiAgICAgICAgcmV0dXJuIGhhc1ZlcnRleENvbG9yQWxwaGEgPyBBY2Nlc3NvclR5cGUuVkVDNCA6IEFjY2Vzc29yVHlwZS5WRUMzO1xyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaCAoa2luZCkge1xyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLlBvc2l0aW9uS2luZDpcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5Ob3JtYWxLaW5kOlxyXG4gICAgICAgICAgICByZXR1cm4gQWNjZXNzb3JUeXBlLlZFQzM7XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuVGFuZ2VudEtpbmQ6XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuTWF0cmljZXNJbmRpY2VzS2luZDpcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5NYXRyaWNlc0luZGljZXNFeHRyYUtpbmQ6XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuTWF0cmljZXNXZWlnaHRzS2luZDpcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5NYXRyaWNlc1dlaWdodHNFeHRyYUtpbmQ6XHJcbiAgICAgICAgICAgIHJldHVybiBBY2Nlc3NvclR5cGUuVkVDNDtcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5VVktpbmQ6XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuVVYyS2luZDpcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5VVjNLaW5kOlxyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLlVWNEtpbmQ6XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuVVY1S2luZDpcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5VVjZLaW5kOlxyXG4gICAgICAgICAgICByZXR1cm4gQWNjZXNzb3JUeXBlLlZFQzI7XHJcbiAgICB9XHJcblxyXG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGtpbmQgJHtraW5kfWApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gR2V0QXR0cmlidXRlVHlwZShraW5kOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgc3dpdGNoIChraW5kKSB7XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuUG9zaXRpb25LaW5kOlxyXG4gICAgICAgICAgICByZXR1cm4gXCJQT1NJVElPTlwiO1xyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLk5vcm1hbEtpbmQ6XHJcbiAgICAgICAgICAgIHJldHVybiBcIk5PUk1BTFwiO1xyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLlRhbmdlbnRLaW5kOlxyXG4gICAgICAgICAgICByZXR1cm4gXCJUQU5HRU5UXCI7XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuQ29sb3JLaW5kOlxyXG4gICAgICAgICAgICByZXR1cm4gXCJDT0xPUl8wXCI7XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuVVZLaW5kOlxyXG4gICAgICAgICAgICByZXR1cm4gXCJURVhDT09SRF8wXCI7XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuVVYyS2luZDpcclxuICAgICAgICAgICAgcmV0dXJuIFwiVEVYQ09PUkRfMVwiO1xyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLlVWM0tpbmQ6XHJcbiAgICAgICAgICAgIHJldHVybiBcIlRFWENPT1JEXzJcIjtcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5VVjRLaW5kOlxyXG4gICAgICAgICAgICByZXR1cm4gXCJURVhDT09SRF8zXCI7XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuVVY1S2luZDpcclxuICAgICAgICAgICAgcmV0dXJuIFwiVEVYQ09PUkRfNFwiO1xyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLlVWNktpbmQ6XHJcbiAgICAgICAgICAgIHJldHVybiBcIlRFWENPT1JEXzVcIjtcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5NYXRyaWNlc0luZGljZXNLaW5kOlxyXG4gICAgICAgICAgICByZXR1cm4gXCJKT0lOVFNfMFwiO1xyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLk1hdHJpY2VzSW5kaWNlc0V4dHJhS2luZDpcclxuICAgICAgICAgICAgcmV0dXJuIFwiSk9JTlRTXzFcIjtcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5NYXRyaWNlc1dlaWdodHNLaW5kOlxyXG4gICAgICAgICAgICByZXR1cm4gXCJXRUlHSFRTXzBcIjtcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5NYXRyaWNlc1dlaWdodHNFeHRyYUtpbmQ6XHJcbiAgICAgICAgICAgIHJldHVybiBcIldFSUdIVFNfMVwiO1xyXG4gICAgfVxyXG5cclxuICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBraW5kOiAke2tpbmR9YCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHZXRQcmltaXRpdmVNb2RlKGZpbGxNb2RlOiBudW1iZXIpOiBNZXNoUHJpbWl0aXZlTW9kZSB7XHJcbiAgICBzd2l0Y2ggKGZpbGxNb2RlKSB7XHJcbiAgICAgICAgY2FzZSBNYXRlcmlhbC5UcmlhbmdsZUZpbGxNb2RlOlxyXG4gICAgICAgICAgICByZXR1cm4gTWVzaFByaW1pdGl2ZU1vZGUuVFJJQU5HTEVTO1xyXG4gICAgICAgIGNhc2UgTWF0ZXJpYWwuVHJpYW5nbGVTdHJpcERyYXdNb2RlOlxyXG4gICAgICAgICAgICByZXR1cm4gTWVzaFByaW1pdGl2ZU1vZGUuVFJJQU5HTEVfU1RSSVA7XHJcbiAgICAgICAgY2FzZSBNYXRlcmlhbC5UcmlhbmdsZUZhbkRyYXdNb2RlOlxyXG4gICAgICAgICAgICByZXR1cm4gTWVzaFByaW1pdGl2ZU1vZGUuVFJJQU5HTEVfRkFOO1xyXG4gICAgICAgIGNhc2UgTWF0ZXJpYWwuUG9pbnRMaXN0RHJhd01vZGU6XHJcbiAgICAgICAgY2FzZSBNYXRlcmlhbC5Qb2ludEZpbGxNb2RlOlxyXG4gICAgICAgICAgICByZXR1cm4gTWVzaFByaW1pdGl2ZU1vZGUuUE9JTlRTO1xyXG4gICAgICAgIGNhc2UgTWF0ZXJpYWwuTGluZUxvb3BEcmF3TW9kZTpcclxuICAgICAgICAgICAgcmV0dXJuIE1lc2hQcmltaXRpdmVNb2RlLkxJTkVfTE9PUDtcclxuICAgICAgICBjYXNlIE1hdGVyaWFsLkxpbmVMaXN0RHJhd01vZGU6XHJcbiAgICAgICAgICAgIHJldHVybiBNZXNoUHJpbWl0aXZlTW9kZS5MSU5FUztcclxuICAgICAgICBjYXNlIE1hdGVyaWFsLkxpbmVTdHJpcERyYXdNb2RlOlxyXG4gICAgICAgICAgICByZXR1cm4gTWVzaFByaW1pdGl2ZU1vZGUuTElORV9TVFJJUDtcclxuICAgIH1cclxuXHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gZmlsbCBtb2RlOiAke2ZpbGxNb2RlfWApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gSXNUcmlhbmdsZUZpbGxNb2RlKGZpbGxNb2RlOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIHN3aXRjaCAoZmlsbE1vZGUpIHtcclxuICAgICAgICBjYXNlIE1hdGVyaWFsLlRyaWFuZ2xlRmlsbE1vZGU6XHJcbiAgICAgICAgY2FzZSBNYXRlcmlhbC5UcmlhbmdsZVN0cmlwRHJhd01vZGU6XHJcbiAgICAgICAgY2FzZSBNYXRlcmlhbC5UcmlhbmdsZUZhbkRyYXdNb2RlOlxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBOb3JtYWxpemVUYW5nZW50KHRhbmdlbnQ6IFZlY3RvcjQgfCBWZWN0b3IzKSB7XHJcbiAgICBjb25zdCBsZW5ndGggPSBNYXRoLnNxcnQodGFuZ2VudC54ICogdGFuZ2VudC54ICsgdGFuZ2VudC55ICogdGFuZ2VudC55ICsgdGFuZ2VudC56ICogdGFuZ2VudC56KTtcclxuICAgIGlmIChsZW5ndGggPiAwKSB7XHJcbiAgICAgICAgdGFuZ2VudC54IC89IGxlbmd0aDtcclxuICAgICAgICB0YW5nZW50LnkgLz0gbGVuZ3RoO1xyXG4gICAgICAgIHRhbmdlbnQueiAvPSBsZW5ndGg7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDb252ZXJ0VG9SaWdodEhhbmRlZFBvc2l0aW9uKHZhbHVlOiBWZWN0b3IzKTogVmVjdG9yMyB7XHJcbiAgICB2YWx1ZS54ICo9IC0xO1xyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ29udmVydFRvUmlnaHRIYW5kZWRSb3RhdGlvbih2YWx1ZTogUXVhdGVybmlvbik6IFF1YXRlcm5pb24ge1xyXG4gICAgdmFsdWUueCAqPSAtMTtcclxuICAgIHZhbHVlLnkgKj0gLTE7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDb252ZXJ0VG9SaWdodEhhbmRlZE5vZGUodmFsdWU6IElOb2RlKSB7XHJcbiAgICBsZXQgdHJhbnNsYXRpb24gPSBWZWN0b3IzLkZyb21BcnJheVRvUmVmKHZhbHVlLnRyYW5zbGF0aW9uIHx8IFswLCAwLCAwXSwgMCwgVG1wVmVjdG9ycy5WZWN0b3IzWzBdKTtcclxuICAgIGxldCByb3RhdGlvbiA9IFF1YXRlcm5pb24uRnJvbUFycmF5VG9SZWYodmFsdWUucm90YXRpb24gfHwgWzAsIDAsIDAsIDFdLCAwLCBUbXBWZWN0b3JzLlF1YXRlcm5pb25bMF0pO1xyXG5cclxuICAgIHRyYW5zbGF0aW9uID0gQ29udmVydFRvUmlnaHRIYW5kZWRQb3NpdGlvbih0cmFuc2xhdGlvbik7XHJcbiAgICByb3RhdGlvbiA9IENvbnZlcnRUb1JpZ2h0SGFuZGVkUm90YXRpb24ocm90YXRpb24pO1xyXG5cclxuICAgIGlmICh0cmFuc2xhdGlvbi5lcXVhbHNXaXRoRXBzaWxvbihkZWZhdWx0VHJhbnNsYXRpb24sIGVwc2lsb24pKSB7XHJcbiAgICAgICAgZGVsZXRlIHZhbHVlLnRyYW5zbGF0aW9uO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB2YWx1ZS50cmFuc2xhdGlvbiA9IHRyYW5zbGF0aW9uLmFzQXJyYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoUXVhdGVybmlvbi5Jc0lkZW50aXR5KHJvdGF0aW9uKSkge1xyXG4gICAgICAgIGRlbGV0ZSB2YWx1ZS5yb3RhdGlvbjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFsdWUucm90YXRpb24gPSByb3RhdGlvbi5hc0FycmF5KCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSb3RhdGlvbiBieSAxODAgYXMgZ2xURiBoYXMgYSBkaWZmZXJlbnQgY29udmVudGlvbiB0aGFuIEJhYnlsb24uXHJcbiAqIEBwYXJhbSByb3RhdGlvbiBUYXJnZXQgY2FtZXJhIHJvdGF0aW9uLlxyXG4gKiBAcmV0dXJucyBSZWYgdG8gY2FtZXJhIHJvdGF0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIENvbnZlcnRDYW1lcmFSb3RhdGlvblRvR0xURihyb3RhdGlvbjogUXVhdGVybmlvbik6IFF1YXRlcm5pb24ge1xyXG4gICAgcmV0dXJuIHJvdGF0aW9uLm11bHRpcGx5SW5QbGFjZShyb3RhdGlvbjE4MFkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUm90YXRlTm9kZTE4MFkobm9kZTogSU5vZGUpIHtcclxuICAgIGlmIChub2RlLnJvdGF0aW9uKSB7XHJcbiAgICAgICAgY29uc3Qgcm90YXRpb24gPSBRdWF0ZXJuaW9uLkZyb21BcnJheVRvUmVmKG5vZGUucm90YXRpb24gfHwgWzAsIDAsIDAsIDFdLCAwLCBUbXBWZWN0b3JzLlF1YXRlcm5pb25bMV0pO1xyXG4gICAgICAgIHJvdGF0aW9uMTgwWS5tdWx0aXBseVRvUmVmKHJvdGF0aW9uLCByb3RhdGlvbik7XHJcbiAgICAgICAgbm9kZS5yb3RhdGlvbiA9IHJvdGF0aW9uLmFzQXJyYXkoKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENvbGxhcHNlcyBHTFRGIHBhcmVudCBhbmQgbm9kZSBpbnRvIGEgc2luZ2xlIG5vZGUuIFRoaXMgaXMgdXNlZnVsIGZvciByZW1vdmluZyBub2RlcyB0aGF0IHdlcmUgYWRkZWQgYnkgdGhlIEdMVEYgaW1wb3J0ZXIuXHJcbiAqIEBwYXJhbSBub2RlIFRhcmdldCBwYXJlbnQgbm9kZS5cclxuICogQHBhcmFtIHBhcmVudE5vZGUgT3JpZ2luYWwgR0xURiBub2RlIChMaWdodCBvciBDYW1lcmEpLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIENvbGxhcHNlUGFyZW50Tm9kZShub2RlOiBJTm9kZSwgcGFyZW50Tm9kZTogSU5vZGUpIHtcclxuICAgIGNvbnN0IHBhcmVudFRyYW5zbGF0aW9uID0gVmVjdG9yMy5Gcm9tQXJyYXlUb1JlZihwYXJlbnROb2RlLnRyYW5zbGF0aW9uIHx8IFswLCAwLCAwXSwgMCwgVG1wVmVjdG9ycy5WZWN0b3IzWzBdKTtcclxuICAgIGNvbnN0IHBhcmVudFJvdGF0aW9uID0gUXVhdGVybmlvbi5Gcm9tQXJyYXlUb1JlZihwYXJlbnROb2RlLnJvdGF0aW9uIHx8IFswLCAwLCAwLCAxXSwgMCwgVG1wVmVjdG9ycy5RdWF0ZXJuaW9uWzBdKTtcclxuICAgIGNvbnN0IHBhcmVudFNjYWxlID0gVmVjdG9yMy5Gcm9tQXJyYXlUb1JlZihwYXJlbnROb2RlLnNjYWxlIHx8IFsxLCAxLCAxXSwgMCwgVG1wVmVjdG9ycy5WZWN0b3IzWzFdKTtcclxuICAgIGNvbnN0IHBhcmVudE1hdHJpeCA9IE1hdHJpeC5Db21wb3NlVG9SZWYocGFyZW50U2NhbGUsIHBhcmVudFJvdGF0aW9uLCBwYXJlbnRUcmFuc2xhdGlvbiwgVG1wVmVjdG9ycy5NYXRyaXhbMF0pO1xyXG5cclxuICAgIGNvbnN0IHRyYW5zbGF0aW9uID0gVmVjdG9yMy5Gcm9tQXJyYXlUb1JlZihub2RlLnRyYW5zbGF0aW9uIHx8IFswLCAwLCAwXSwgMCwgVG1wVmVjdG9ycy5WZWN0b3IzWzJdKTtcclxuICAgIGNvbnN0IHJvdGF0aW9uID0gUXVhdGVybmlvbi5Gcm9tQXJyYXlUb1JlZihub2RlLnJvdGF0aW9uIHx8IFswLCAwLCAwLCAxXSwgMCwgVG1wVmVjdG9ycy5RdWF0ZXJuaW9uWzFdKTtcclxuICAgIGNvbnN0IHNjYWxlID0gVmVjdG9yMy5Gcm9tQXJyYXlUb1JlZihub2RlLnNjYWxlIHx8IFsxLCAxLCAxXSwgMCwgVG1wVmVjdG9ycy5WZWN0b3IzWzFdKTtcclxuICAgIGNvbnN0IG1hdHJpeCA9IE1hdHJpeC5Db21wb3NlVG9SZWYoc2NhbGUsIHJvdGF0aW9uLCB0cmFuc2xhdGlvbiwgVG1wVmVjdG9ycy5NYXRyaXhbMV0pO1xyXG5cclxuICAgIHBhcmVudE1hdHJpeC5tdWx0aXBseVRvUmVmKG1hdHJpeCwgbWF0cml4KTtcclxuICAgIG1hdHJpeC5kZWNvbXBvc2UocGFyZW50U2NhbGUsIHBhcmVudFJvdGF0aW9uLCBwYXJlbnRUcmFuc2xhdGlvbik7XHJcblxyXG4gICAgaWYgKHBhcmVudFRyYW5zbGF0aW9uLmVxdWFsc1dpdGhFcHNpbG9uKGRlZmF1bHRUcmFuc2xhdGlvbiwgZXBzaWxvbikpIHtcclxuICAgICAgICBkZWxldGUgcGFyZW50Tm9kZS50cmFuc2xhdGlvbjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcGFyZW50Tm9kZS50cmFuc2xhdGlvbiA9IHBhcmVudFRyYW5zbGF0aW9uLmFzQXJyYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoUXVhdGVybmlvbi5Jc0lkZW50aXR5KHBhcmVudFJvdGF0aW9uKSkge1xyXG4gICAgICAgIGRlbGV0ZSBwYXJlbnROb2RlLnJvdGF0aW9uO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBwYXJlbnROb2RlLnJvdGF0aW9uID0gcGFyZW50Um90YXRpb24uYXNBcnJheSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChwYXJlbnRTY2FsZS5lcXVhbHNXaXRoRXBzaWxvbihkZWZhdWx0U2NhbGUsIGVwc2lsb24pKSB7XHJcbiAgICAgICAgZGVsZXRlIHBhcmVudE5vZGUuc2NhbGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHBhcmVudE5vZGUuc2NhbGUgPSBwYXJlbnRTY2FsZS5hc0FycmF5KCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTb21ldGltZXMgdGhlIEdMVEYgSW1wb3J0ZXIgY2FuIGFkZCBleHRyYSB0cmFuc2Zvcm0gbm9kZXMgKGZvciBsaWdodHMgYW5kIGNhbWVyYXMpLiBUaGlzIGNoZWNrcyBpZiBhIHBhcmVudCBub2RlIHdhcyBhZGRlZCBieSB0aGUgR0xURiBJbXBvcnRlci4gSWYgc28sIGl0IHNob3VsZCBiZSByZW1vdmVkIGR1cmluZyBzZXJpYWxpemF0aW9uLlxyXG4gKiBAcGFyYW0gYmFieWxvbk5vZGUgT3JpZ2luYWwgR0xURiBub2RlIChMaWdodCBvciBDYW1lcmEpLlxyXG4gKiBAcGFyYW0gcGFyZW50QmFieWxvbk5vZGUgVGFyZ2V0IHBhcmVudCBub2RlLlxyXG4gKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBwYXJlbnQgbm9kZSB3YXMgYWRkZWQgYnkgdGhlIEdMVEYgaW1wb3J0ZXIuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gSXNQYXJlbnRBZGRlZEJ5SW1wb3J0ZXIoYmFieWxvbk5vZGU6IE5vZGUsIHBhcmVudEJhYnlsb25Ob2RlOiBOb2RlKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gcGFyZW50QmFieWxvbk5vZGUgaW5zdGFuY2VvZiBUcmFuc2Zvcm1Ob2RlICYmIHBhcmVudEJhYnlsb25Ob2RlLmdldENoaWxkcmVuKCkubGVuZ3RoID09IDEgJiYgYmFieWxvbk5vZGUuZ2V0Q2hpbGRyZW4oKS5sZW5ndGggPT0gMDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIElzTm9vcE5vZGUobm9kZTogTm9kZSwgdXNlUmlnaHRIYW5kZWRTeXN0ZW06IGJvb2xlYW4pOiBib29sZWFuIHtcclxuICAgIGlmICghKG5vZGUgaW5zdGFuY2VvZiBUcmFuc2Zvcm1Ob2RlKSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUcmFuc2Zvcm1cclxuICAgIGlmICh1c2VSaWdodEhhbmRlZFN5c3RlbSkge1xyXG4gICAgICAgIGNvbnN0IG1hdHJpeCA9IG5vZGUuZ2V0V29ybGRNYXRyaXgoKTtcclxuICAgICAgICBpZiAoIW1hdHJpeC5pc0lkZW50aXR5KCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgbWF0cml4ID0gbm9kZS5nZXRXb3JsZE1hdHJpeCgpLm11bHRpcGx5VG9SZWYoY29udmVydEhhbmRlZG5lc3NNYXRyaXgsIFRtcFZlY3RvcnMuTWF0cml4WzBdKTtcclxuICAgICAgICBpZiAoIW1hdHJpeC5pc0lkZW50aXR5KCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBHZW9tZXRyeVxyXG4gICAgaWYgKChub2RlIGluc3RhbmNlb2YgTWVzaCAmJiBub2RlLmdlb21ldHJ5KSB8fCAobm9kZSBpbnN0YW5jZW9mIEluc3RhbmNlZE1lc2ggJiYgbm9kZS5zb3VyY2VNZXNoLmdlb21ldHJ5KSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEFyZUluZGljZXMzMkJpdHMoaW5kaWNlczogTnVsbGFibGU8SW5kaWNlc0FycmF5PiwgY291bnQ6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgaWYgKGluZGljZXMpIHtcclxuICAgICAgICBpZiAoaW5kaWNlcyBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpbmRpY2VzLnNvbWUoKHZhbHVlKSA9PiB2YWx1ZSA+PSA2NTUzNik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gaW5kaWNlcy5CWVRFU19QRVJfRUxFTUVOVCA9PT0gNDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY291bnQgPj0gNjU1MzY7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBJbmRpY2VzQXJyYXlUb1VpbnQ4QXJyYXkoaW5kaWNlczogSW5kaWNlc0FycmF5LCBzdGFydDogbnVtYmVyLCBjb3VudDogbnVtYmVyLCBpczMyQml0czogYm9vbGVhbik6IFVpbnQ4QXJyYXkge1xyXG4gICAgaWYgKGluZGljZXMgaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgIGNvbnN0IHN1YmFycmF5ID0gaW5kaWNlcy5zbGljZShzdGFydCwgc3RhcnQgKyBjb3VudCk7XHJcbiAgICAgICAgaW5kaWNlcyA9IGlzMzJCaXRzID8gbmV3IFVpbnQzMkFycmF5KHN1YmFycmF5KSA6IG5ldyBVaW50MTZBcnJheShzdWJhcnJheSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGluZGljZXMuYnVmZmVyLCBpbmRpY2VzLmJ5dGVPZmZzZXQsIGluZGljZXMuYnl0ZUxlbmd0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIEFycmF5QnVmZmVyLmlzVmlldyhpbmRpY2VzKSA/IG5ldyBVaW50OEFycmF5KGluZGljZXMuYnVmZmVyLCBpbmRpY2VzLmJ5dGVPZmZzZXQsIGluZGljZXMuYnl0ZUxlbmd0aCkgOiBuZXcgVWludDhBcnJheShpbmRpY2VzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIERhdGFBcnJheVRvVWludDhBcnJheShkYXRhOiBEYXRhQXJyYXkpOiBVaW50OEFycmF5IHtcclxuICAgIGlmIChkYXRhIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgICBjb25zdCBmbG9hdERhdGEgPSBuZXcgRmxvYXQzMkFycmF5KGRhdGEpO1xyXG4gICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShmbG9hdERhdGEuYnVmZmVyLCBmbG9hdERhdGEuYnl0ZU9mZnNldCwgZmxvYXREYXRhLmJ5dGVMZW5ndGgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBBcnJheUJ1ZmZlci5pc1ZpZXcoZGF0YSkgPyBuZXcgVWludDhBcnJheShkYXRhLmJ1ZmZlciwgZGF0YS5ieXRlT2Zmc2V0LCBkYXRhLmJ5dGVMZW5ndGgpIDogbmV3IFVpbnQ4QXJyYXkoZGF0YSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHZXRNaW5NYXgoZGF0YTogRGF0YUFycmF5LCB2ZXJ0ZXhCdWZmZXI6IFZlcnRleEJ1ZmZlciwgc3RhcnQ6IG51bWJlciwgY291bnQ6IG51bWJlcik6IHsgbWluOiBudW1iZXJbXTsgbWF4OiBudW1iZXJbXSB9IHtcclxuICAgIGNvbnN0IHsgYnl0ZU9mZnNldCwgYnl0ZVN0cmlkZSwgdHlwZSwgbm9ybWFsaXplZCB9ID0gdmVydGV4QnVmZmVyO1xyXG4gICAgY29uc3Qgc2l6ZSA9IHZlcnRleEJ1ZmZlci5nZXRTaXplKCk7XHJcbiAgICBjb25zdCBtaW4gPSBuZXcgQXJyYXk8bnVtYmVyPihzaXplKS5maWxsKEluZmluaXR5KTtcclxuICAgIGNvbnN0IG1heCA9IG5ldyBBcnJheTxudW1iZXI+KHNpemUpLmZpbGwoLUluZmluaXR5KTtcclxuICAgIEVudW1lcmF0ZUZsb2F0VmFsdWVzKGRhdGEsIGJ5dGVPZmZzZXQgKyBzdGFydCAqIGJ5dGVTdHJpZGUsIGJ5dGVTdHJpZGUsIHNpemUsIHR5cGUsIGNvdW50ICogc2l6ZSwgbm9ybWFsaXplZCwgKHZhbHVlcykgPT4ge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XHJcbiAgICAgICAgICAgIG1pbltpXSA9IE1hdGgubWluKG1pbltpXSwgdmFsdWVzW2ldKTtcclxuICAgICAgICAgICAgbWF4W2ldID0gTWF0aC5tYXgobWF4W2ldLCB2YWx1ZXNbaV0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7IG1pbiwgbWF4IH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZW1vdmVzLCBpbi1wbGFjZSwgb2JqZWN0IHByb3BlcnRpZXMgd2hpY2ggaGF2ZSB0aGUgc2FtZSB2YWx1ZSBhcyB0aGUgZGVmYXVsdCB2YWx1ZS5cclxuICogVXNlZnVsIGZvciBhdm9pZGluZyB1bm5lY2Vzc2FyeSBwcm9wZXJ0aWVzIGluIHRoZSBnbFRGIEpTT04uXHJcbiAqIEBwYXJhbSBvYmplY3QgdGhlIG9iamVjdCB0byBvbWl0IGRlZmF1bHQgdmFsdWVzIGZyb21cclxuICogQHBhcmFtIGRlZmF1bHRWYWx1ZXMgYSBwYXJ0aWFsIG9iamVjdCB3aXRoIGRlZmF1bHQgdmFsdWVzXHJcbiAqIEByZXR1cm5zIG9iamVjdCB3aXRoIGRlZmF1bHQgdmFsdWVzIG9taXR0ZWRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBPbWl0RGVmYXVsdFZhbHVlczxUIGV4dGVuZHMgT2JqZWN0PihvYmplY3Q6IFQsIGRlZmF1bHRWYWx1ZXM6IFBhcnRpYWw8VD4pOiBUIHtcclxuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKG9iamVjdCkpIHtcclxuICAgICAgICBjb25zdCBkZWZhdWx0VmFsdWUgPSBkZWZhdWx0VmFsdWVzW2tleSBhcyBrZXlvZiBUXTtcclxuICAgICAgICBpZiAoKEFycmF5LmlzQXJyYXkodmFsdWUpICYmIEFycmF5LmlzQXJyYXkoZGVmYXVsdFZhbHVlKSAmJiBBcmVBcnJheXNFcXVhbCh2YWx1ZSwgZGVmYXVsdFZhbHVlKSkgfHwgdmFsdWUgPT09IGRlZmF1bHRWYWx1ZSkge1xyXG4gICAgICAgICAgICBkZWxldGUgb2JqZWN0W2tleSBhcyBrZXlvZiBUXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb2JqZWN0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBBcmVBcnJheXNFcXVhbChhcnJheTE6IHVua25vd25bXSwgYXJyYXkyOiB1bmtub3duW10pOiBib29sZWFuIHtcclxuICAgIHJldHVybiBhcnJheTEubGVuZ3RoID09PSBhcnJheTIubGVuZ3RoICYmIGFycmF5MS5ldmVyeSgodmFsLCBpKSA9PiB2YWwgPT09IGFycmF5MltpXSk7XHJcbn1cclxuIiwiZXhwb3J0ICogZnJvbSBcIi4vZ2xURkRhdGFcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vZ2xURlNlcmlhbGl6ZXJcIjtcclxuZXhwb3J0IHsgX1NvbHZlTWV0YWxsaWMsIF9Db252ZXJ0VG9HTFRGUEJSTWV0YWxsaWNSb3VnaG5lc3MgfSBmcm9tIFwiLi9nbFRGTWF0ZXJpYWxFeHBvcnRlclwiO1xyXG4iLCIvKiogQGludGVybmFsICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby12YXIsIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgdmFyIF9fSUdMVEZFeHBvcnRlckV4dGVuc2lvbiA9IDA7IC8vIEkgYW0gaGVyZSB0byBhbGxvdyBkdHMgdG8gYmUgY3JlYXRlZFxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgZXh0ZW5kaW5nIHRoZSBleHBvcnRlclxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUdMVEZFeHBvcnRlckV4dGVuc2lvbiB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBuYW1lIG9mIHRoaXMgZXh0ZW5zaW9uXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIGVuYWJsZWRcclxuICAgICAqL1xyXG4gICAgZW5hYmxlZDogYm9vbGVhbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyByZXF1aXJlZFxyXG4gICAgICovXHJcbiAgICByZXF1aXJlZDogYm9vbGVhbjtcclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8taW50ZXJuYWwtbW9kdWxlcyAqL1xyXG5pbXBvcnQgKiBhcyBFeHBvcnRlcnMgZnJvbSBcInNlcmlhbGl6ZXJzL2dsVEYvZ2xURkZpbGVFeHBvcnRlclwiO1xyXG5pbXBvcnQgKiBhcyBEYXRhcyBmcm9tIFwic2VyaWFsaXplcnMvZ2xURi8yLjAvZ2xURkRhdGFcIjtcclxuaW1wb3J0ICogYXMgU2VyaWFsaXplcnMgZnJvbSBcInNlcmlhbGl6ZXJzL2dsVEYvMi4wL2dsVEZTZXJpYWxpemVyXCI7XHJcbmltcG9ydCAqIGFzIEV4dGVuc2lvbnMgZnJvbSBcInNlcmlhbGl6ZXJzL2dsVEYvMi4wL0V4dGVuc2lvbnMvaW5kZXhcIjtcclxuaW1wb3J0ICogYXMgR0xURjIgZnJvbSBcInNlcmlhbGl6ZXJzL2dsVEYvMi4wL2luZGV4XCI7XHJcblxyXG4vKipcclxuICogVGhpcyBpcyB0aGUgZW50cnkgcG9pbnQgZm9yIHRoZSBVTUQgbW9kdWxlLlxyXG4gKiBUaGUgZW50cnkgcG9pbnQgZm9yIGEgZnV0dXJlIEVTTSBwYWNrYWdlIHNob3VsZCBiZSBpbmRleC50c1xyXG4gKi9cclxuY29uc3QgZ2xvYmFsT2JqZWN0ID0gdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB1bmRlZmluZWQ7XHJcbmlmICh0eXBlb2YgZ2xvYmFsT2JqZWN0ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAoPGFueT5nbG9iYWxPYmplY3QpLkJBQllMT04gPSAoPGFueT5nbG9iYWxPYmplY3QpLkJBQllMT04gfHwge307XHJcbiAgICBjb25zdCBCQUJZTE9OID0gKDxhbnk+Z2xvYmFsT2JqZWN0KS5CQUJZTE9OO1xyXG4gICAgQkFCWUxPTi5HTFRGMiA9IEJBQllMT04uR0xURjIgfHwge307XHJcbiAgICBCQUJZTE9OLkdMVEYyLkV4cG9ydGVyID0gQkFCWUxPTi5HTFRGMi5FeHBvcnRlciB8fCB7fTtcclxuICAgIEJBQllMT04uR0xURjIuRXhwb3J0ZXIuRXh0ZW5zaW9ucyA9IEJBQllMT04uR0xURjIuRXhwb3J0ZXIuRXh0ZW5zaW9ucyB8fCB7fTtcclxuXHJcbiAgICBjb25zdCBrZXlzID0gW107XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBFeHBvcnRlcnMpIHtcclxuICAgICAgICBCQUJZTE9OW2tleV0gPSAoPGFueT5FeHBvcnRlcnMpW2tleV07XHJcbiAgICAgICAga2V5cy5wdXNoKGtleSk7XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBEYXRhcykge1xyXG4gICAgICAgIEJBQllMT05ba2V5XSA9ICg8YW55PkRhdGFzKVtrZXldO1xyXG4gICAgICAgIGtleXMucHVzaChrZXkpO1xyXG4gICAgfVxyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gU2VyaWFsaXplcnMpIHtcclxuICAgICAgICBCQUJZTE9OW2tleV0gPSAoPGFueT5TZXJpYWxpemVycylba2V5XTtcclxuICAgICAgICBrZXlzLnB1c2goa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBFeHRlbnNpb25zKSB7XHJcbiAgICAgICAgQkFCWUxPTi5HTFRGMi5FeHBvcnRlci5FeHRlbnNpb25zW2tleV0gPSAoPGFueT5FeHRlbnNpb25zKVtrZXldO1xyXG4gICAgICAgIGtleXMucHVzaChrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAoY29uc3Qga2V5IGluIEdMVEYyKSB7XHJcbiAgICAgICAgLy8gUHJldmVudCBSZWFzc2lnbm1lbnQuXHJcbiAgICAgICAgaWYgKGtleXMuaW5kZXhPZihrZXkpID4gLTEpIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBCQUJZTE9OLkdMVEYyLkV4cG9ydGVyW2tleV0gPSAoPGFueT5HTFRGMilba2V5XTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0ICogZnJvbSBcInNlcmlhbGl6ZXJzL2dsVEYvZ2xURkZpbGVFeHBvcnRlclwiO1xyXG5leHBvcnQgKiBmcm9tIFwic2VyaWFsaXplcnMvZ2xURi8yLjAvaW5kZXhcIjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2JhYnlsb25qc19NaXNjX3Rvb2xzX187IiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXG5cblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1Jcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UsIFN1cHByZXNzZWRFcnJvciwgU3ltYm9sLCBJdGVyYXRvciAqL1xuXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcbiAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcbiAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbn1cblxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xuICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xuICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHQ7XG4gIH1cbiAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xuICB2YXIgdCA9IHt9O1xuICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgIHRbcF0gPSBzW3BdO1xuICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxuICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgIH1cbiAgcmV0dXJuIHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xuICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fZXNEZWNvcmF0ZShjdG9yLCBkZXNjcmlwdG9ySW4sIGRlY29yYXRvcnMsIGNvbnRleHRJbiwgaW5pdGlhbGl6ZXJzLCBleHRyYUluaXRpYWxpemVycykge1xuICBmdW5jdGlvbiBhY2NlcHQoZikgeyBpZiAoZiAhPT0gdm9pZCAwICYmIHR5cGVvZiBmICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJGdW5jdGlvbiBleHBlY3RlZFwiKTsgcmV0dXJuIGY7IH1cbiAgdmFyIGtpbmQgPSBjb250ZXh0SW4ua2luZCwga2V5ID0ga2luZCA9PT0gXCJnZXR0ZXJcIiA/IFwiZ2V0XCIgOiBraW5kID09PSBcInNldHRlclwiID8gXCJzZXRcIiA6IFwidmFsdWVcIjtcbiAgdmFyIHRhcmdldCA9ICFkZXNjcmlwdG9ySW4gJiYgY3RvciA/IGNvbnRleHRJbltcInN0YXRpY1wiXSA/IGN0b3IgOiBjdG9yLnByb3RvdHlwZSA6IG51bGw7XG4gIHZhciBkZXNjcmlwdG9yID0gZGVzY3JpcHRvckluIHx8ICh0YXJnZXQgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwgY29udGV4dEluLm5hbWUpIDoge30pO1xuICB2YXIgXywgZG9uZSA9IGZhbHNlO1xuICBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgdmFyIGNvbnRleHQgPSB7fTtcbiAgICAgIGZvciAodmFyIHAgaW4gY29udGV4dEluKSBjb250ZXh0W3BdID0gcCA9PT0gXCJhY2Nlc3NcIiA/IHt9IDogY29udGV4dEluW3BdO1xuICAgICAgZm9yICh2YXIgcCBpbiBjb250ZXh0SW4uYWNjZXNzKSBjb250ZXh0LmFjY2Vzc1twXSA9IGNvbnRleHRJbi5hY2Nlc3NbcF07XG4gICAgICBjb250ZXh0LmFkZEluaXRpYWxpemVyID0gZnVuY3Rpb24gKGYpIHsgaWYgKGRvbmUpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgYWRkIGluaXRpYWxpemVycyBhZnRlciBkZWNvcmF0aW9uIGhhcyBjb21wbGV0ZWRcIik7IGV4dHJhSW5pdGlhbGl6ZXJzLnB1c2goYWNjZXB0KGYgfHwgbnVsbCkpOyB9O1xuICAgICAgdmFyIHJlc3VsdCA9ICgwLCBkZWNvcmF0b3JzW2ldKShraW5kID09PSBcImFjY2Vzc29yXCIgPyB7IGdldDogZGVzY3JpcHRvci5nZXQsIHNldDogZGVzY3JpcHRvci5zZXQgfSA6IGRlc2NyaXB0b3Jba2V5XSwgY29udGV4dCk7XG4gICAgICBpZiAoa2luZCA9PT0gXCJhY2Nlc3NvclwiKSB7XG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gdm9pZCAwKSBjb250aW51ZTtcbiAgICAgICAgICBpZiAocmVzdWx0ID09PSBudWxsIHx8IHR5cGVvZiByZXN1bHQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3QgZXhwZWN0ZWRcIik7XG4gICAgICAgICAgaWYgKF8gPSBhY2NlcHQocmVzdWx0LmdldCkpIGRlc2NyaXB0b3IuZ2V0ID0gXztcbiAgICAgICAgICBpZiAoXyA9IGFjY2VwdChyZXN1bHQuc2V0KSkgZGVzY3JpcHRvci5zZXQgPSBfO1xuICAgICAgICAgIGlmIChfID0gYWNjZXB0KHJlc3VsdC5pbml0KSkgaW5pdGlhbGl6ZXJzLnVuc2hpZnQoXyk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChfID0gYWNjZXB0KHJlc3VsdCkpIHtcbiAgICAgICAgICBpZiAoa2luZCA9PT0gXCJmaWVsZFwiKSBpbml0aWFsaXplcnMudW5zaGlmdChfKTtcbiAgICAgICAgICBlbHNlIGRlc2NyaXB0b3Jba2V5XSA9IF87XG4gICAgICB9XG4gIH1cbiAgaWYgKHRhcmdldCkgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgY29udGV4dEluLm5hbWUsIGRlc2NyaXB0b3IpO1xuICBkb25lID0gdHJ1ZTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3J1bkluaXRpYWxpemVycyh0aGlzQXJnLCBpbml0aWFsaXplcnMsIHZhbHVlKSB7XG4gIHZhciB1c2VWYWx1ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGluaXRpYWxpemVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFsdWUgPSB1c2VWYWx1ZSA/IGluaXRpYWxpemVyc1tpXS5jYWxsKHRoaXNBcmcsIHZhbHVlKSA6IGluaXRpYWxpemVyc1tpXS5jYWxsKHRoaXNBcmcpO1xuICB9XG4gIHJldHVybiB1c2VWYWx1ZSA/IHZhbHVlIDogdm9pZCAwO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fcHJvcEtleSh4KSB7XG4gIHJldHVybiB0eXBlb2YgeCA9PT0gXCJzeW1ib2xcIiA/IHggOiBcIlwiLmNvbmNhdCh4KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3NldEZ1bmN0aW9uTmFtZShmLCBuYW1lLCBwcmVmaXgpIHtcbiAgaWYgKHR5cGVvZiBuYW1lID09PSBcInN5bWJvbFwiKSBuYW1lID0gbmFtZS5kZXNjcmlwdGlvbiA/IFwiW1wiLmNvbmNhdChuYW1lLmRlc2NyaXB0aW9uLCBcIl1cIikgOiBcIlwiO1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGYsIFwibmFtZVwiLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHByZWZpeCA/IFwiXCIuY29uY2F0KHByZWZpeCwgXCIgXCIsIG5hbWUpIDogbmFtZSB9KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XG4gIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGcgPSBPYmplY3QuY3JlYXRlKCh0eXBlb2YgSXRlcmF0b3IgPT09IFwiZnVuY3Rpb25cIiA/IEl0ZXJhdG9yIDogT2JqZWN0KS5wcm90b3R5cGUpO1xuICByZXR1cm4gZy5uZXh0ID0gdmVyYigwKSwgZ1tcInRocm93XCJdID0gdmVyYigxKSwgZ1tcInJldHVyblwiXSA9IHZlcmIoMiksIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgIHdoaWxlIChnICYmIChnID0gMCwgb3BbMF0gJiYgKF8gPSAwKSksIF8pIHRyeSB7XG4gICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgfVxufVxuXG5leHBvcnQgdmFyIF9fY3JlYXRlQmluZGluZyA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xuICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcbiAgfVxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgb1trMl0gPSBtW2tdO1xufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgbykge1xuICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIHApKSBfX2NyZWF0ZUJpbmRpbmcobywgbSwgcCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XG4gIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XG4gIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xuICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XG4gICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcbiAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XG4gICAgICB9XG4gIH07XG4gIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XG4gIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcbiAgaWYgKCFtKSByZXR1cm4gbztcbiAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XG4gIHRyeSB7XG4gICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcbiAgfVxuICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cbiAgZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xuICAgICAgfVxuICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XG4gIH1cbiAgcmV0dXJuIGFyO1xufVxuXG4vKiogQGRlcHJlY2F0ZWQgKi9cbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcbiAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXG4gICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XG4gIHJldHVybiBhcjtcbn1cblxuLyoqIEBkZXByZWNhdGVkICovXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XG4gIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xuICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXG4gICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcbiAgICAgICAgICByW2tdID0gYVtqXTtcbiAgcmV0dXJuIHI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5KHRvLCBmcm9tLCBwYWNrKSB7XG4gIGlmIChwYWNrIHx8IGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIGZvciAodmFyIGkgPSAwLCBsID0gZnJvbS5sZW5ndGgsIGFyOyBpIDwgbDsgaSsrKSB7XG4gICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XG4gICAgICAgICAgaWYgKCFhcikgYXIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tLCAwLCBpKTtcbiAgICAgICAgICBhcltpXSA9IGZyb21baV07XG4gICAgICB9XG4gIH1cbiAgcmV0dXJuIHRvLmNvbmNhdChhciB8fCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcbiAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xuICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xuICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xuICByZXR1cm4gaSA9IE9iamVjdC5jcmVhdGUoKHR5cGVvZiBBc3luY0l0ZXJhdG9yID09PSBcImZ1bmN0aW9uXCIgPyBBc3luY0l0ZXJhdG9yIDogT2JqZWN0KS5wcm90b3R5cGUpLCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIsIGF3YWl0UmV0dXJuKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xuICBmdW5jdGlvbiBhd2FpdFJldHVybihmKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZiwgcmVqZWN0KTsgfTsgfVxuICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaWYgKGdbbl0pIHsgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgaWYgKGYpIGlbbl0gPSBmKGlbbl0pOyB9IH1cbiAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxuICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cbiAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxuICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XG4gIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xuICB2YXIgaSwgcDtcbiAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcbiAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogZmFsc2UgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xuICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xuICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xuICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XG4gIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cbiAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcbiAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cbiAgcmV0dXJuIGNvb2tlZDtcbn07XG5cbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gIG9bXCJkZWZhdWx0XCJdID0gdjtcbn07XG5cbnZhciBvd25LZXlzID0gZnVuY3Rpb24obykge1xuICBvd25LZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gKG8pIHtcbiAgICB2YXIgYXIgPSBbXTtcbiAgICBmb3IgKHZhciBrIGluIG8pIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgaykpIGFyW2FyLmxlbmd0aF0gPSBrO1xuICAgIHJldHVybiBhcjtcbiAgfTtcbiAgcmV0dXJuIG93bktleXMobyk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xuICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayA9IG93bktleXMobW9kKSwgaSA9IDA7IGkgPCBrLmxlbmd0aDsgaSsrKSBpZiAoa1tpXSAhPT0gXCJkZWZhdWx0XCIpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwga1tpXSk7XG4gIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XG4gIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xuICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XG4gIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XG4gIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcbiAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xuICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRJbihzdGF0ZSwgcmVjZWl2ZXIpIHtcbiAgaWYgKHJlY2VpdmVyID09PSBudWxsIHx8ICh0eXBlb2YgcmVjZWl2ZXIgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHJlY2VpdmVyICE9PSBcImZ1bmN0aW9uXCIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHVzZSAnaW4nIG9wZXJhdG9yIG9uIG5vbi1vYmplY3RcIik7XG4gIHJldHVybiB0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyID09PSBzdGF0ZSA6IHN0YXRlLmhhcyhyZWNlaXZlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2FkZERpc3Bvc2FibGVSZXNvdXJjZShlbnYsIHZhbHVlLCBhc3luYykge1xuICBpZiAodmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHZvaWQgMCkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHZhbHVlICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3QgZXhwZWN0ZWQuXCIpO1xuICAgIHZhciBkaXNwb3NlLCBpbm5lcjtcbiAgICBpZiAoYXN5bmMpIHtcbiAgICAgIGlmICghU3ltYm9sLmFzeW5jRGlzcG9zZSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0Rpc3Bvc2UgaXMgbm90IGRlZmluZWQuXCIpO1xuICAgICAgZGlzcG9zZSA9IHZhbHVlW1N5bWJvbC5hc3luY0Rpc3Bvc2VdO1xuICAgIH1cbiAgICBpZiAoZGlzcG9zZSA9PT0gdm9pZCAwKSB7XG4gICAgICBpZiAoIVN5bWJvbC5kaXNwb3NlKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmRpc3Bvc2UgaXMgbm90IGRlZmluZWQuXCIpO1xuICAgICAgZGlzcG9zZSA9IHZhbHVlW1N5bWJvbC5kaXNwb3NlXTtcbiAgICAgIGlmIChhc3luYykgaW5uZXIgPSBkaXNwb3NlO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGRpc3Bvc2UgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdCBub3QgZGlzcG9zYWJsZS5cIik7XG4gICAgaWYgKGlubmVyKSBkaXNwb3NlID0gZnVuY3Rpb24oKSB7IHRyeSB7IGlubmVyLmNhbGwodGhpcyk7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIFByb21pc2UucmVqZWN0KGUpOyB9IH07XG4gICAgZW52LnN0YWNrLnB1c2goeyB2YWx1ZTogdmFsdWUsIGRpc3Bvc2U6IGRpc3Bvc2UsIGFzeW5jOiBhc3luYyB9KTtcbiAgfVxuICBlbHNlIGlmIChhc3luYykge1xuICAgIGVudi5zdGFjay5wdXNoKHsgYXN5bmM6IHRydWUgfSk7XG4gIH1cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG52YXIgX1N1cHByZXNzZWRFcnJvciA9IHR5cGVvZiBTdXBwcmVzc2VkRXJyb3IgPT09IFwiZnVuY3Rpb25cIiA/IFN1cHByZXNzZWRFcnJvciA6IGZ1bmN0aW9uIChlcnJvciwgc3VwcHJlc3NlZCwgbWVzc2FnZSkge1xuICB2YXIgZSA9IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgcmV0dXJuIGUubmFtZSA9IFwiU3VwcHJlc3NlZEVycm9yXCIsIGUuZXJyb3IgPSBlcnJvciwgZS5zdXBwcmVzc2VkID0gc3VwcHJlc3NlZCwgZTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2Rpc3Bvc2VSZXNvdXJjZXMoZW52KSB7XG4gIGZ1bmN0aW9uIGZhaWwoZSkge1xuICAgIGVudi5lcnJvciA9IGVudi5oYXNFcnJvciA/IG5ldyBfU3VwcHJlc3NlZEVycm9yKGUsIGVudi5lcnJvciwgXCJBbiBlcnJvciB3YXMgc3VwcHJlc3NlZCBkdXJpbmcgZGlzcG9zYWwuXCIpIDogZTtcbiAgICBlbnYuaGFzRXJyb3IgPSB0cnVlO1xuICB9XG4gIHZhciByLCBzID0gMDtcbiAgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICB3aGlsZSAociA9IGVudi5zdGFjay5wb3AoKSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFyLmFzeW5jICYmIHMgPT09IDEpIHJldHVybiBzID0gMCwgZW52LnN0YWNrLnB1c2gociksIFByb21pc2UucmVzb2x2ZSgpLnRoZW4obmV4dCk7XG4gICAgICAgIGlmIChyLmRpc3Bvc2UpIHtcbiAgICAgICAgICB2YXIgcmVzdWx0ID0gci5kaXNwb3NlLmNhbGwoci52YWx1ZSk7XG4gICAgICAgICAgaWYgKHIuYXN5bmMpIHJldHVybiBzIHw9IDIsIFByb21pc2UucmVzb2x2ZShyZXN1bHQpLnRoZW4obmV4dCwgZnVuY3Rpb24oZSkgeyBmYWlsKGUpOyByZXR1cm4gbmV4dCgpOyB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHMgfD0gMTtcbiAgICAgIH1cbiAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGZhaWwoZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChzID09PSAxKSByZXR1cm4gZW52Lmhhc0Vycm9yID8gUHJvbWlzZS5yZWplY3QoZW52LmVycm9yKSA6IFByb21pc2UucmVzb2x2ZSgpO1xuICAgIGlmIChlbnYuaGFzRXJyb3IpIHRocm93IGVudi5lcnJvcjtcbiAgfVxuICByZXR1cm4gbmV4dCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19yZXdyaXRlUmVsYXRpdmVJbXBvcnRFeHRlbnNpb24ocGF0aCwgcHJlc2VydmVKc3gpIHtcbiAgaWYgKHR5cGVvZiBwYXRoID09PSBcInN0cmluZ1wiICYmIC9eXFwuXFwuP1xcLy8udGVzdChwYXRoKSkge1xuICAgICAgcmV0dXJuIHBhdGgucmVwbGFjZSgvXFwuKHRzeCkkfCgoPzpcXC5kKT8pKCg/OlxcLlteLi9dKz8pPylcXC4oW2NtXT8pdHMkL2ksIGZ1bmN0aW9uIChtLCB0c3gsIGQsIGV4dCwgY20pIHtcbiAgICAgICAgICByZXR1cm4gdHN4ID8gcHJlc2VydmVKc3ggPyBcIi5qc3hcIiA6IFwiLmpzXCIgOiBkICYmICghZXh0IHx8ICFjbSkgPyBtIDogKGQgKyBleHQgKyBcIi5cIiArIGNtLnRvTG93ZXJDYXNlKCkgKyBcImpzXCIpO1xuICAgICAgfSk7XG4gIH1cbiAgcmV0dXJuIHBhdGg7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgX19leHRlbmRzLFxuICBfX2Fzc2lnbixcbiAgX19yZXN0LFxuICBfX2RlY29yYXRlLFxuICBfX3BhcmFtLFxuICBfX2VzRGVjb3JhdGUsXG4gIF9fcnVuSW5pdGlhbGl6ZXJzLFxuICBfX3Byb3BLZXksXG4gIF9fc2V0RnVuY3Rpb25OYW1lLFxuICBfX21ldGFkYXRhLFxuICBfX2F3YWl0ZXIsXG4gIF9fZ2VuZXJhdG9yLFxuICBfX2NyZWF0ZUJpbmRpbmcsXG4gIF9fZXhwb3J0U3RhcixcbiAgX192YWx1ZXMsXG4gIF9fcmVhZCxcbiAgX19zcHJlYWQsXG4gIF9fc3ByZWFkQXJyYXlzLFxuICBfX3NwcmVhZEFycmF5LFxuICBfX2F3YWl0LFxuICBfX2FzeW5jR2VuZXJhdG9yLFxuICBfX2FzeW5jRGVsZWdhdG9yLFxuICBfX2FzeW5jVmFsdWVzLFxuICBfX21ha2VUZW1wbGF0ZU9iamVjdCxcbiAgX19pbXBvcnRTdGFyLFxuICBfX2ltcG9ydERlZmF1bHQsXG4gIF9fY2xhc3NQcml2YXRlRmllbGRHZXQsXG4gIF9fY2xhc3NQcml2YXRlRmllbGRTZXQsXG4gIF9fY2xhc3NQcml2YXRlRmllbGRJbixcbiAgX19hZGREaXNwb3NhYmxlUmVzb3VyY2UsXG4gIF9fZGlzcG9zZVJlc291cmNlcyxcbiAgX19yZXdyaXRlUmVsYXRpdmVJbXBvcnRFeHRlbnNpb24sXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwidmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mID8gKG9iaikgPT4gKE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopKSA6IChvYmopID0+IChvYmouX19wcm90b19fKTtcbnZhciBsZWFmUHJvdG90eXBlcztcbi8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuLy8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4vLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbi8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuLy8gbW9kZSAmIDE2OiByZXR1cm4gdmFsdWUgd2hlbiBpdCdzIFByb21pc2UtbGlrZVxuLy8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuX193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcblx0aWYobW9kZSAmIDEpIHZhbHVlID0gdGhpcyh2YWx1ZSk7XG5cdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG5cdGlmKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUpIHtcblx0XHRpZigobW9kZSAmIDQpICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcblx0XHRpZigobW9kZSAmIDE2KSAmJiB0eXBlb2YgdmFsdWUudGhlbiA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIHZhbHVlO1xuXHR9XG5cdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG5cdHZhciBkZWYgPSB7fTtcblx0bGVhZlByb3RvdHlwZXMgPSBsZWFmUHJvdG90eXBlcyB8fCBbbnVsbCwgZ2V0UHJvdG8oe30pLCBnZXRQcm90byhbXSksIGdldFByb3RvKGdldFByb3RvKV07XG5cdGZvcih2YXIgY3VycmVudCA9IG1vZGUgJiAyICYmIHZhbHVlOyB0eXBlb2YgY3VycmVudCA9PSAnb2JqZWN0JyAmJiAhfmxlYWZQcm90b3R5cGVzLmluZGV4T2YoY3VycmVudCk7IGN1cnJlbnQgPSBnZXRQcm90byhjdXJyZW50KSkge1xuXHRcdE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGN1cnJlbnQpLmZvckVhY2goKGtleSkgPT4gKGRlZltrZXldID0gKCkgPT4gKHZhbHVlW2tleV0pKSk7XG5cdH1cblx0ZGVmWydkZWZhdWx0J10gPSAoKSA9PiAodmFsdWUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGRlZik7XG5cdHJldHVybiBucztcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICogYXMgc2VyaWFsaXplcnMgZnJvbSBcIkBsdHMvc2VyaWFsaXplcnMvbGVnYWN5L2xlZ2FjeS1nbFRGMlNlcmlhbGl6ZXJcIjtcclxuZXhwb3J0IHsgc2VyaWFsaXplcnMgfTtcclxuZXhwb3J0IGRlZmF1bHQgc2VyaWFsaXplcnM7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==