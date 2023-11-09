(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("babylonjs"));
	else if(typeof define === 'function' && define.amd)
		define("babylonjs-loaders", ["babylonjs"], factory);
	else if(typeof exports === 'object')
		exports["babylonjs-loaders"] = factory(require("babylonjs"));
	else
		root["LOADERS"] = factory(root["BABYLON"]);
})((typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : this), (__WEBPACK_EXTERNAL_MODULE_babylonjs_Misc_observable__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../../dev/loaders/src/glTF/2.0/Extensions/EXT_lights_image_based.ts":
/*!******************************************************************************!*\
  !*** ../../../dev/loaders/src/glTF/2.0/Extensions/EXT_lights_image_based.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EXT_lights_image_based: () => (/* binding */ EXT_lights_image_based)
/* harmony export */ });
/* harmony import */ var babylonjs_Maths_math_scalar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Materials/Textures/rawCubeTexture */ "babylonjs/Misc/observable");
/* harmony import */ var babylonjs_Maths_math_scalar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Maths_math_scalar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _glTFLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../glTFLoader */ "../../../dev/loaders/src/glTF/2.0/glTFLoader.ts");





var NAME = "EXT_lights_image_based";
/**
 * [Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Vendor/EXT_lights_image_based/README.md)
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
var EXT_lights_image_based = /** @class */ (function () {
    /**
     * @internal
     */
    function EXT_lights_image_based(loader) {
        /**
         * The name of this extension.
         */
        this.name = NAME;
        this._loader = loader;
        this.enabled = this._loader.isExtensionUsed(NAME);
    }
    /** @internal */
    EXT_lights_image_based.prototype.dispose = function () {
        this._loader = null;
        delete this._lights;
    };
    /** @internal */
    EXT_lights_image_based.prototype.onLoading = function () {
        var extensions = this._loader.gltf.extensions;
        if (extensions && extensions[this.name]) {
            var extension = extensions[this.name];
            this._lights = extension.lights;
        }
    };
    /**
     * @internal
     */
    EXT_lights_image_based.prototype.loadSceneAsync = function (context, scene) {
        var _this = this;
        return _glTFLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoader.LoadExtensionAsync(context, scene, this.name, function (extensionContext, extension) {
            _this._loader._allMaterialsDirtyRequired = true;
            var promises = new Array();
            promises.push(_this._loader.loadSceneAsync(context, scene));
            _this._loader.logOpen("".concat(extensionContext));
            var light = _glTFLoader__WEBPACK_IMPORTED_MODULE_1__.ArrayItem.Get("".concat(extensionContext, "/light"), _this._lights, extension.light);
            promises.push(_this._loadLightAsync("/extensions/".concat(_this.name, "/lights/").concat(extension.light), light).then(function (texture) {
                _this._loader.babylonScene.environmentTexture = texture;
            }));
            _this._loader.logClose();
            return Promise.all(promises).then(function () { });
        });
    };
    EXT_lights_image_based.prototype._loadLightAsync = function (context, light) {
        var _this = this;
        if (!light._loaded) {
            var promises = new Array();
            this._loader.logOpen("".concat(context));
            var imageData_1 = new Array(light.specularImages.length);
            var _loop_1 = function (mipmap) {
                var faces = light.specularImages[mipmap];
                imageData_1[mipmap] = new Array(faces.length);
                var _loop_2 = function (face) {
                    var specularImageContext = "".concat(context, "/specularImages/").concat(mipmap, "/").concat(face);
                    this_1._loader.logOpen("".concat(specularImageContext));
                    var index = faces[face];
                    var image = _glTFLoader__WEBPACK_IMPORTED_MODULE_1__.ArrayItem.Get(specularImageContext, this_1._loader.gltf.images, index);
                    promises.push(this_1._loader.loadImageAsync("/images/".concat(index), image).then(function (data) {
                        imageData_1[mipmap][face] = data;
                    }));
                    this_1._loader.logClose();
                };
                for (var face = 0; face < faces.length; face++) {
                    _loop_2(face);
                }
            };
            var this_1 = this;
            for (var mipmap = 0; mipmap < light.specularImages.length; mipmap++) {
                _loop_1(mipmap);
            }
            this._loader.logClose();
            light._loaded = Promise.all(promises).then(function () {
                var babylonTexture = new babylonjs_Maths_math_scalar__WEBPACK_IMPORTED_MODULE_0__.RawCubeTexture(_this._loader.babylonScene, null, light.specularImageSize);
                babylonTexture.name = light.name || "environment";
                light._babylonTexture = babylonTexture;
                if (light.intensity != undefined) {
                    babylonTexture.level = light.intensity;
                }
                if (light.rotation) {
                    var rotation = babylonjs_Maths_math_scalar__WEBPACK_IMPORTED_MODULE_0__.Quaternion.FromArray(light.rotation);
                    // Invert the rotation so that positive rotation is counter-clockwise.
                    if (!_this._loader.babylonScene.useRightHandedSystem) {
                        rotation = babylonjs_Maths_math_scalar__WEBPACK_IMPORTED_MODULE_0__.Quaternion.Inverse(rotation);
                    }
                    babylonjs_Maths_math_scalar__WEBPACK_IMPORTED_MODULE_0__.Matrix.FromQuaternionToRef(rotation, babylonTexture.getReflectionTextureMatrix());
                }
                if (!light.irradianceCoefficients) {
                    throw new Error("".concat(context, ": Irradiance coefficients are missing"));
                }
                var sphericalHarmonics = babylonjs_Maths_math_scalar__WEBPACK_IMPORTED_MODULE_0__.SphericalHarmonics.FromArray(light.irradianceCoefficients);
                sphericalHarmonics.scaleInPlace(light.intensity);
                sphericalHarmonics.convertIrradianceToLambertianRadiance();
                var sphericalPolynomial = babylonjs_Maths_math_scalar__WEBPACK_IMPORTED_MODULE_0__.SphericalPolynomial.FromHarmonics(sphericalHarmonics);
                // Compute the lod generation scale to fit exactly to the number of levels available.
                var lodGenerationScale = (imageData_1.length - 1) / babylonjs_Maths_math_scalar__WEBPACK_IMPORTED_MODULE_0__.Scalar.Log2(light.specularImageSize);
                return babylonTexture.updateRGBDAsync(imageData_1, sphericalPolynomial, lodGenerationScale);
            });
        }
        return light._loaded.then(function () {
            return light._babylonTexture;
        });
    };
    return EXT_lights_image_based;
}());

_glTFLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoader.RegisterExtension(NAME, function (loader) { return new EXT_lights_image_based(loader); });


/***/ }),

/***/ "../../../dev/loaders/src/glTF/2.0/Extensions/EXT_mesh_gpu_instancing.ts":
/*!*******************************************************************************!*\
  !*** ../../../dev/loaders/src/glTF/2.0/Extensions/EXT_mesh_gpu_instancing.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EXT_mesh_gpu_instancing: () => (/* binding */ EXT_mesh_gpu_instancing)
/* harmony export */ });
/* harmony import */ var babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Meshes/thinInstanceMesh */ "babylonjs/Misc/observable");
/* harmony import */ var babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _glTFLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../glTFLoader */ "../../../dev/loaders/src/glTF/2.0/glTFLoader.ts");



var NAME = "EXT_mesh_gpu_instancing";
/**
 * [Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Vendor/EXT_mesh_gpu_instancing/README.md)
 * [Playground Sample](https://playground.babylonjs.com/#QFIGLW#9)
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
var EXT_mesh_gpu_instancing = /** @class */ (function () {
    /**
     * @internal
     */
    function EXT_mesh_gpu_instancing(loader) {
        /**
         * The name of this extension.
         */
        this.name = NAME;
        this._loader = loader;
        this.enabled = this._loader.isExtensionUsed(NAME);
    }
    /** @internal */
    EXT_mesh_gpu_instancing.prototype.dispose = function () {
        this._loader = null;
    };
    /**
     * @internal
     */
    EXT_mesh_gpu_instancing.prototype.loadNodeAsync = function (context, node, assign) {
        var _this = this;
        return _glTFLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoader.LoadExtensionAsync(context, node, this.name, function (extensionContext, extension) {
            _this._loader._disableInstancedMesh++;
            var promise = _this._loader.loadNodeAsync("/nodes/".concat(node.index), node, assign);
            _this._loader._disableInstancedMesh--;
            if (!node._primitiveBabylonMeshes) {
                return promise;
            }
            var promises = new Array();
            var instanceCount = 0;
            var loadAttribute = function (attribute) {
                if (extension.attributes[attribute] == undefined) {
                    promises.push(Promise.resolve(null));
                    return;
                }
                var accessor = _glTFLoader__WEBPACK_IMPORTED_MODULE_1__.ArrayItem.Get("".concat(extensionContext, "/attributes/").concat(attribute), _this._loader.gltf.accessors, extension.attributes[attribute]);
                promises.push(_this._loader._loadFloatAccessorAsync("/accessors/".concat(accessor.bufferView), accessor));
                if (instanceCount === 0) {
                    instanceCount = accessor.count;
                }
                else if (instanceCount !== accessor.count) {
                    throw new Error("".concat(extensionContext, "/attributes: Instance buffer accessors do not have the same count."));
                }
            };
            loadAttribute("TRANSLATION");
            loadAttribute("ROTATION");
            loadAttribute("SCALE");
            return promise.then(function (babylonTransformNode) {
                return Promise.all(promises).then(function (_a) {
                    var translationBuffer = _a[0], rotationBuffer = _a[1], scaleBuffer = _a[2];
                    var matrices = new Float32Array(instanceCount * 16);
                    babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Vector3[0].copyFromFloats(0, 0, 0); // translation
                    babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Quaternion[0].copyFromFloats(0, 0, 0, 1); // rotation
                    babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Vector3[1].copyFromFloats(1, 1, 1); // scale
                    for (var i = 0; i < instanceCount; ++i) {
                        translationBuffer && babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArrayToRef(translationBuffer, i * 3, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Vector3[0]);
                        rotationBuffer && babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.FromArrayToRef(rotationBuffer, i * 4, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Quaternion[0]);
                        scaleBuffer && babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArrayToRef(scaleBuffer, i * 3, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Vector3[1]);
                        babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Matrix.ComposeToRef(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Vector3[1], babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Quaternion[0], babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Vector3[0], babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Matrix[0]);
                        babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Matrix[0].copyToArray(matrices, i * 16);
                    }
                    for (var _i = 0, _b = node._primitiveBabylonMeshes; _i < _b.length; _i++) {
                        var babylonMesh = _b[_i];
                        babylonMesh.thinInstanceSetBuffer("matrix", matrices, 16, true);
                    }
                    return babylonTransformNode;
                });
            });
        });
    };
    return EXT_mesh_gpu_instancing;
}());

_glTFLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoader.RegisterExtension(NAME, function (loader) { return new EXT_mesh_gpu_instancing(loader); });


/***/ }),

/***/ "../../../dev/loaders/src/glTF/2.0/Extensions/EXT_meshopt_compression.ts":
/*!*******************************************************************************!*\
  !*** ../../../dev/loaders/src/glTF/2.0/Extensions/EXT_meshopt_compression.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EXT_meshopt_compression: () => (/* binding */ EXT_meshopt_compression)
/* harmony export */ });
/* harmony import */ var _glTFLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../glTFLoader */ "../../../dev/loaders/src/glTF/2.0/glTFLoader.ts");
/* harmony import */ var babylonjs_Meshes_Compression_meshoptCompression__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs/Meshes/Compression/meshoptCompression */ "babylonjs/Misc/observable");
/* harmony import */ var babylonjs_Meshes_Compression_meshoptCompression__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Meshes_Compression_meshoptCompression__WEBPACK_IMPORTED_MODULE_1__);


var NAME = "EXT_meshopt_compression";
/**
 * [Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Vendor/EXT_meshopt_compression/README.md)
 *
 * This extension uses a WebAssembly decoder module from https://github.com/zeux/meshoptimizer/tree/master/js
 * @since 5.0.0
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
var EXT_meshopt_compression = /** @class */ (function () {
    /**
     * @internal
     */
    function EXT_meshopt_compression(loader) {
        /**
         * The name of this extension.
         */
        this.name = NAME;
        this.enabled = loader.isExtensionUsed(NAME);
        this._loader = loader;
    }
    /** @internal */
    EXT_meshopt_compression.prototype.dispose = function () {
        this._loader = null;
    };
    /**
     * @internal
     */
    EXT_meshopt_compression.prototype.loadBufferViewAsync = function (context, bufferView) {
        var _this = this;
        return _glTFLoader__WEBPACK_IMPORTED_MODULE_0__.GLTFLoader.LoadExtensionAsync(context, bufferView, this.name, function (extensionContext, extension) {
            var bufferViewMeshopt = bufferView;
            if (bufferViewMeshopt._meshOptData) {
                return bufferViewMeshopt._meshOptData;
            }
            var buffer = _glTFLoader__WEBPACK_IMPORTED_MODULE_0__.ArrayItem.Get("".concat(context, "/buffer"), _this._loader.gltf.buffers, extension.buffer);
            bufferViewMeshopt._meshOptData = _this._loader.loadBufferAsync("/buffers/".concat(buffer.index), buffer, extension.byteOffset || 0, extension.byteLength).then(function (buffer) {
                return babylonjs_Meshes_Compression_meshoptCompression__WEBPACK_IMPORTED_MODULE_1__.MeshoptCompression.Default.decodeGltfBufferAsync(buffer, extension.count, extension.byteStride, extension.mode, extension.filter);
            });
            return bufferViewMeshopt._meshOptData;
        });
    };
    return EXT_meshopt_compression;
}());

_glTFLoader__WEBPACK_IMPORTED_MODULE_0__.GLTFLoader.RegisterExtension(NAME, function (loader) { return new EXT_meshopt_compression(loader); });


/***/ }),

/***/ "../../../dev/loaders/src/glTF/2.0/Extensions/EXT_texture_webp.ts":
/*!************************************************************************!*\
  !*** ../../../dev/loaders/src/glTF/2.0/Extensions/EXT_texture_webp.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EXT_texture_webp: () => (/* binding */ EXT_texture_webp)
/* harmony export */ });
/* harmony import */ var _glTFLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../glTFLoader */ "../../../dev/loaders/src/glTF/2.0/glTFLoader.ts");

var NAME = "EXT_texture_webp";
/**
 * [Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Vendor/EXT_texture_webp/README.md)
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
var EXT_texture_webp = /** @class */ (function () {
    /**
     * @internal
     */
    function EXT_texture_webp(loader) {
        /** The name of this extension. */
        this.name = NAME;
        this._loader = loader;
        this.enabled = loader.isExtensionUsed(NAME);
    }
    /** @internal */
    EXT_texture_webp.prototype.dispose = function () {
        this._loader = null;
    };
    /**
     * @internal
     */
    EXT_texture_webp.prototype._loadTextureAsync = function (context, texture, assign) {
        var _this = this;
        return _glTFLoader__WEBPACK_IMPORTED_MODULE_0__.GLTFLoader.LoadExtensionAsync(context, texture, this.name, function (extensionContext, extension) {
            var sampler = texture.sampler == undefined ? _glTFLoader__WEBPACK_IMPORTED_MODULE_0__.GLTFLoader.DefaultSampler : _glTFLoader__WEBPACK_IMPORTED_MODULE_0__.ArrayItem.Get("".concat(context, "/sampler"), _this._loader.gltf.samplers, texture.sampler);
            var image = _glTFLoader__WEBPACK_IMPORTED_MODULE_0__.ArrayItem.Get("".concat(extensionContext, "/source"), _this._loader.gltf.images, extension.source);
            return _this._loader._createTextureAsync(context, sampler, image, function (babylonTexture) {
                assign(babylonTexture);
            }, undefined, !texture._textureInfo.nonColorData);
        });
    };
    return EXT_texture_webp;
}());

_glTFLoader__WEBPACK_IMPORTED_MODULE_0__.GLTFLoader.RegisterExtension(NAME, function (loader) { return new EXT_texture_webp(loader); });


/***/ }),

/***/ "../../../dev/loaders/src/glTF/2.0/Extensions/ExtrasAsMetadata.ts":
/*!************************************************************************!*\
  !*** ../../../dev/loaders/src/glTF/2.0/Extensions/ExtrasAsMetadata.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExtrasAsMetadata: () => (/* binding */ ExtrasAsMetadata)
/* harmony export */ });
/* harmony import */ var _glTFLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../glTFLoader */ "../../../dev/loaders/src/glTF/2.0/glTFLoader.ts");

var NAME = "ExtrasAsMetadata";
/**
 * Store glTF extras (if present) in BJS objects' metadata
 */
var ExtrasAsMetadata = /** @class */ (function () {
    /**
     * @internal
     */
    function ExtrasAsMetadata(loader) {
        /**
         * The name of this extension.
         */
        this.name = NAME;
        /**
         * Defines whether this extension is enabled.
         */
        this.enabled = true;
        this._loader = loader;
    }
    ExtrasAsMetadata.prototype._assignExtras = function (babylonObject, gltfProp) {
        if (gltfProp.extras && Object.keys(gltfProp.extras).length > 0) {
            var metadata = (babylonObject.metadata = babylonObject.metadata || {});
            var gltf = (metadata.gltf = metadata.gltf || {});
            gltf.extras = gltfProp.extras;
        }
    };
    /** @internal */
    ExtrasAsMetadata.prototype.dispose = function () {
        this._loader = null;
    };
    /**
     * @internal
     */
    ExtrasAsMetadata.prototype.loadNodeAsync = function (context, node, assign) {
        var _this = this;
        return this._loader.loadNodeAsync(context, node, function (babylonTransformNode) {
            _this._assignExtras(babylonTransformNode, node);
            assign(babylonTransformNode);
        });
    };
    /**
     * @internal
     */
    ExtrasAsMetadata.prototype.loadCameraAsync = function (context, camera, assign) {
        var _this = this;
        return this._loader.loadCameraAsync(context, camera, function (babylonCamera) {
            _this._assignExtras(babylonCamera, camera);
            assign(babylonCamera);
        });
    };
    /**
     * @internal
     */
    ExtrasAsMetadata.prototype.createMaterial = function (context, material, babylonDrawMode) {
        var babylonMaterial = this._loader.createMaterial(context, material, babylonDrawMode);
        this._assignExtras(babylonMaterial, material);
        return babylonMaterial;
    };
    return ExtrasAsMetadata;
}());

_glTFLoader__WEBPACK_IMPORTED_MODULE_0__.GLTFLoader.RegisterExtension(NAME, function (loader) { return new ExtrasAsMetadata(loader); });


/***/ }),

/***/ "../../../dev/loaders/src/glTF/2.0/Extensions/KHR_animation_pointer.data.ts":
/*!**********************************************************************************!*\
  !*** ../../../dev/loaders/src/glTF/2.0/Extensions/KHR_animation_pointer.data.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   animationPointerTree: () => (/* binding */ animationPointerTree)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var babylonjs_Animations_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Maths/math.color */ "babylonjs/Misc/observable");
/* harmony import */ var babylonjs_Animations_animation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Animations_animation__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _glTFLoaderAnimation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../glTFLoaderAnimation */ "../../../dev/loaders/src/glTF/2.0/glTFLoaderAnimation.ts");
/* eslint-disable @typescript-eslint/naming-convention */




function getColor3(_target, source, offset, scale) {
    return babylonjs_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Color3.FromArray(source, offset).scale(scale);
}
function getAlpha(_target, source, offset, scale) {
    return source[offset + 3] * scale;
}
function getFloat(_target, source, offset, scale) {
    return source[offset] * scale;
}
function getMinusFloat(_target, source, offset, scale) {
    return -source[offset] * scale;
}
function getNextFloat(_target, source, offset, scale) {
    return source[offset + 1] * scale;
}
function getFloatBy2(_target, source, offset, scale) {
    return source[offset] * scale * 2;
}
function getTextureTransformTree(textureName) {
    return {
        scale: [
            new MaterialAnimationPropertyInfo(babylonjs_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "".concat(textureName, ".uScale"), getFloat, function () { return 2; }),
            new MaterialAnimationPropertyInfo(babylonjs_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "".concat(textureName, ".vScale"), getNextFloat, function () { return 2; }),
        ],
        offset: [
            new MaterialAnimationPropertyInfo(babylonjs_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "".concat(textureName, ".uOffset"), getFloat, function () { return 2; }),
            new MaterialAnimationPropertyInfo(babylonjs_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "".concat(textureName, ".vOffset"), getNextFloat, function () { return 2; }),
        ],
        rotation: [new MaterialAnimationPropertyInfo(babylonjs_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "".concat(textureName, ".wAng"), getMinusFloat, function () { return 1; })],
    };
}
var CameraAnimationPropertyInfo = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(CameraAnimationPropertyInfo, _super);
    function CameraAnimationPropertyInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** @internal */
    CameraAnimationPropertyInfo.prototype.buildAnimations = function (target, name, fps, keys, callback) {
        callback(target._babylonCamera, this._buildAnimation(name, fps, keys));
    };
    return CameraAnimationPropertyInfo;
}(_glTFLoaderAnimation__WEBPACK_IMPORTED_MODULE_1__.AnimationPropertyInfo));
var MaterialAnimationPropertyInfo = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(MaterialAnimationPropertyInfo, _super);
    function MaterialAnimationPropertyInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** @internal */
    MaterialAnimationPropertyInfo.prototype.buildAnimations = function (target, name, fps, keys, callback) {
        for (var fillMode in target._data) {
            callback(target._data[fillMode].babylonMaterial, this._buildAnimation(name, fps, keys));
        }
    };
    return MaterialAnimationPropertyInfo;
}(_glTFLoaderAnimation__WEBPACK_IMPORTED_MODULE_1__.AnimationPropertyInfo));
var LightAnimationPropertyInfo = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(LightAnimationPropertyInfo, _super);
    function LightAnimationPropertyInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** @internal */
    LightAnimationPropertyInfo.prototype.buildAnimations = function (target, name, fps, keys, callback) {
        callback(target._babylonLight, this._buildAnimation(name, fps, keys));
    };
    return LightAnimationPropertyInfo;
}(_glTFLoaderAnimation__WEBPACK_IMPORTED_MODULE_1__.AnimationPropertyInfo));
var nodesTree = {
    __array__: (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ __target__: true }, _glTFLoaderAnimation__WEBPACK_IMPORTED_MODULE_1__.nodeAnimationData),
};
var camerasTree = {
    __array__: {
        __target__: true,
        orthographic: {
            xmag: [
                new CameraAnimationPropertyInfo(babylonjs_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "orthoLeft", getMinusFloat, function () { return 1; }),
                new CameraAnimationPropertyInfo(babylonjs_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "orthoRight", getNextFloat, function () { return 1; }),
            ],
            ymag: [
                new CameraAnimationPropertyInfo(babylonjs_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "orthoBottom", getMinusFloat, function () { return 1; }),
                new CameraAnimationPropertyInfo(babylonjs_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "orthoTop", getNextFloat, function () { return 1; }),
            ],
            zfar: [new CameraAnimationPropertyInfo(babylonjs_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "maxZ", getFloat, function () { return 1; })],
            znear: [new CameraAnimationPropertyInfo(babylonjs_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "minZ", getFloat, function () { return 1; })],
        },
        perspective: {
            yfov: [new CameraAnimationPropertyInfo(babylonjs_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "fov", getFloat, function () { return 1; })],
            zfar: [new CameraAnimationPropertyInfo(babylonjs_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "maxZ", getFloat, function () { return 1; })],
            znear: [new CameraAnimationPropertyInfo(babylonjs_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "minZ", getFloat, function () { return 1; })],
        },
    },
};
var materialsTree = {
    __array__: {
        __target__: true,
        pbrMetallicRoughness: {
            baseColorFactor: [
                new MaterialAnimationPropertyInfo(babylonjs_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_COLOR3, "albedoColor", getColor3, function () { return 4; }),
                new MaterialAnimationPropertyInfo(babylonjs_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "alpha", getAlpha, function () { return 4; }),
            ],
            metallicFactor: [new MaterialAnimationPropertyInfo(babylonjs_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "metallic", getFloat, function () { return 1; })],
            roughnessFactor: [new MaterialAnimationPropertyInfo(babylonjs_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "roughness", getFloat, function () { return 1; })],
            baseColorTexture: {
                extensions: {
                    KHR_texture_transform: getTextureTransformTree("albedoTexture"),
                },
            },
        },
        emissiveFactor: [new MaterialAnimationPropertyInfo(babylonjs_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_COLOR3, "emissiveColor", getColor3, function () { return 3; })],
        normalTexture: {
            scale: [new MaterialAnimationPropertyInfo(babylonjs_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "bumpTexture.level", getFloat, function () { return 1; })],
        },
        occlusionTexture: {
            strength: [new MaterialAnimationPropertyInfo(babylonjs_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "ambientTextureStrength", getFloat, function () { return 1; })],
            extensions: {
                KHR_texture_transform: getTextureTransformTree("ambientTexture"),
            },
        },
        emissiveTexture: {
            extensions: {
                KHR_texture_transform: getTextureTransformTree("emissiveTexture"),
            },
        },
        extensions: {
            KHR_materials_ior: {
                ior: [new MaterialAnimationPropertyInfo(babylonjs_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "indexOfRefraction", getFloat, function () { return 1; })],
            },
            KHR_materials_clearcoat: {
                clearcoatFactor: [new MaterialAnimationPropertyInfo(babylonjs_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "clearCoat.intensity", getFloat, function () { return 1; })],
                clearcoatRoughnessFactor: [new MaterialAnimationPropertyInfo(babylonjs_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "clearCoat.roughness", getFloat, function () { return 1; })],
            },
            KHR_materials_sheen: {
                sheenColorFactor: [new MaterialAnimationPropertyInfo(babylonjs_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_COLOR3, "sheen.color", getColor3, function () { return 3; })],
                sheenRoughnessFactor: [new MaterialAnimationPropertyInfo(babylonjs_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "sheen.roughness", getFloat, function () { return 1; })],
            },
            KHR_materials_specular: {
                specularFactor: [new MaterialAnimationPropertyInfo(babylonjs_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "metallicF0Factor", getFloat, function () { return 1; })],
                specularColorFactor: [new MaterialAnimationPropertyInfo(babylonjs_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_COLOR3, "metallicReflectanceColor", getColor3, function () { return 3; })],
            },
            KHR_materials_emissive_strength: {
                emissiveStrength: [new MaterialAnimationPropertyInfo(babylonjs_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "emissiveIntensity", getFloat, function () { return 1; })],
            },
            KHR_materials_transmission: {
                transmissionFactor: [new MaterialAnimationPropertyInfo(babylonjs_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "subSurface.refractionIntensity", getFloat, function () { return 1; })],
            },
            KHR_materials_volume: {
                attenuationColor: [new MaterialAnimationPropertyInfo(babylonjs_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_COLOR3, "subSurface.tintColor", getColor3, function () { return 3; })],
                attenuationDistance: [new MaterialAnimationPropertyInfo(babylonjs_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "subSurface.tintColorAtDistance", getFloat, function () { return 1; })],
                thicknessFactor: [new MaterialAnimationPropertyInfo(babylonjs_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "subSurface.maximumThickness", getFloat, function () { return 1; })],
            },
            KHR_materials_iridescence: {
                iridescenceFactor: [new MaterialAnimationPropertyInfo(babylonjs_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "iridescence.intensity", getFloat, function () { return 1; })],
                iridescenceIor: [new MaterialAnimationPropertyInfo(babylonjs_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "iridescence.indexOfRefraction", getFloat, function () { return 1; })],
                iridescenceThicknessMinimum: [new MaterialAnimationPropertyInfo(babylonjs_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "iridescence.minimumThickness", getFloat, function () { return 1; })],
                iridescenceThicknessMaximum: [new MaterialAnimationPropertyInfo(babylonjs_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "iridescence.maximumThickness", getFloat, function () { return 1; })],
            },
            KHR_materials_anisotropy: {
                anisotropyStrength: [new MaterialAnimationPropertyInfo(babylonjs_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "anisotropy.intensity", getFloat, function () { return 1; })],
                anisotropyRotation: [new MaterialAnimationPropertyInfo(babylonjs_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "anisotropy.angle", getFloat, function () { return 1; })],
            },
        },
    },
};
var extensionsTree = {
    KHR_lights_punctual: {
        lights: {
            __array__: {
                __target__: true,
                color: [new LightAnimationPropertyInfo(babylonjs_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_COLOR3, "diffuse", getColor3, function () { return 3; })],
                intensity: [new LightAnimationPropertyInfo(babylonjs_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "intensity", getFloat, function () { return 1; })],
                range: [new LightAnimationPropertyInfo(babylonjs_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "range", getFloat, function () { return 1; })],
                spot: {
                    innerConeAngle: [new LightAnimationPropertyInfo(babylonjs_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "innerAngle", getFloatBy2, function () { return 1; })],
                    outerConeAngle: [new LightAnimationPropertyInfo(babylonjs_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "angle", getFloatBy2, function () { return 1; })],
                },
            },
        },
    },
};
/** @internal */
var animationPointerTree = {
    nodes: nodesTree,
    materials: materialsTree,
    cameras: camerasTree,
    extensions: extensionsTree,
};


/***/ }),

/***/ "../../../dev/loaders/src/glTF/2.0/Extensions/KHR_animation_pointer.ts":
/*!*****************************************************************************!*\
  !*** ../../../dev/loaders/src/glTF/2.0/Extensions/KHR_animation_pointer.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KHR_animation_pointer: () => (/* binding */ KHR_animation_pointer)
/* harmony export */ });
/* harmony import */ var _glTFLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../glTFLoader */ "../../../dev/loaders/src/glTF/2.0/glTFLoader.ts");
/* harmony import */ var babylonjs_Misc_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs/Misc/logger */ "babylonjs/Misc/observable");
/* harmony import */ var babylonjs_Misc_logger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Misc_logger__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _KHR_animation_pointer_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./KHR_animation_pointer.data */ "../../../dev/loaders/src/glTF/2.0/Extensions/KHR_animation_pointer.data.ts");



var NAME = "KHR_animation_pointer";
/**
 * [Specification PR](https://github.com/KhronosGroup/glTF/pull/2147)
 * !!! Experimental Extension Subject to Changes !!!
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
var KHR_animation_pointer = /** @class */ (function () {
    /**
     * @internal
     */
    function KHR_animation_pointer(loader) {
        /**
         * The name of this extension.
         */
        this.name = NAME;
        this._loader = loader;
    }
    Object.defineProperty(KHR_animation_pointer.prototype, "enabled", {
        /**
         * Defines whether this extension is enabled.
         */
        get: function () {
            return this._loader.isExtensionUsed(NAME);
        },
        enumerable: false,
        configurable: true
    });
    /** @internal */
    KHR_animation_pointer.prototype.dispose = function () {
        this._loader = null;
    };
    /**
     * Loads a glTF animation channel.
     * @param context The context when loading the asset
     * @param animationContext The context of the animation when loading the asset
     * @param animation The glTF animation property
     * @param channel The glTF animation channel property
     * @param onLoad Called for each animation loaded
     * @returns A void promise that resolves when the load is complete or null if not handled
     */
    KHR_animation_pointer.prototype._loadAnimationChannelAsync = function (context, animationContext, animation, channel, onLoad) {
        var _a;
        var extension = (_a = channel.target.extensions) === null || _a === void 0 ? void 0 : _a.KHR_animation_pointer;
        if (!extension) {
            return null;
        }
        if (channel.target.path !== "pointer" /* AnimationChannelTargetPath.POINTER */) {
            babylonjs_Misc_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.Warn("".concat(context, "/target/path: Value (").concat(channel.target.path, ") must be (").concat("pointer" /* AnimationChannelTargetPath.POINTER */, ") when using the ").concat(this.name, " extension"));
        }
        if (channel.target.node != undefined) {
            babylonjs_Misc_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.Warn("".concat(context, "/target/node: Value (").concat(channel.target.node, ") must not be present when using the ").concat(this.name, " extension"));
        }
        var extensionContext = "".concat(context, "/extensions/").concat(this.name);
        var pointer = extension.pointer;
        if (!pointer) {
            throw new Error("".concat(extensionContext, ": Pointer is missing"));
        }
        var targetInfo = this._parseAnimationPointer("".concat(extensionContext, "/pointer"), pointer);
        if (!targetInfo) {
            babylonjs_Misc_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.Warn("".concat(extensionContext, "/pointer: Invalid pointer (").concat(pointer, ") skipped"));
            return null;
        }
        return this._loader._loadAnimationChannelFromTargetInfoAsync(context, animationContext, animation, channel, targetInfo, onLoad);
    };
    /**
     * The pointer string is represented by a [JSON pointer](https://datatracker.ietf.org/doc/html/rfc6901).
     * <animationPointer> := /<rootNode>/<assetIndex>/<propertyPath>
     * <rootNode> := "nodes" | "materials" | "meshes" | "cameras" | "extensions"
     * <assetIndex> := <digit> | <name>
     * <propertyPath> := <extensionPath> | <standardPath>
     * <extensionPath> := "extensions"/<name>/<standardPath>
     * <standardPath> := <name> | <name>/<standardPath>
     * <name> := W+
     * <digit> := D+
     *
     * Examples:
     *  - "/nodes/0/rotation"
     *  - "/materials/2/emissiveFactor"
     *  - "/materials/2/pbrMetallicRoughness/baseColorFactor"
     *  - "/materials/2/extensions/KHR_materials_emissive_strength/emissiveStrength"
     */
    KHR_animation_pointer.prototype._parseAnimationPointer = function (context, pointer) {
        if (!pointer.startsWith("/")) {
            babylonjs_Misc_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.Warn("".concat(context, ": Value (").concat(pointer, ") must start with a slash"));
            return null;
        }
        var parts = pointer.split("/");
        // Remove the first part since it will be empty string as pointers must start with a slash.
        parts.shift();
        var node = _KHR_animation_pointer_data__WEBPACK_IMPORTED_MODULE_2__.animationPointerTree;
        var gltfCurrentNode = this._loader.gltf;
        var gltfTargetNode = undefined;
        for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
            var part = parts_1[_i];
            if (node.__array__) {
                node = node.__array__;
            }
            else {
                node = node[part];
                if (!node) {
                    return null;
                }
            }
            gltfCurrentNode = gltfCurrentNode && gltfCurrentNode[part];
            if (node.__target__) {
                gltfTargetNode = gltfCurrentNode;
            }
        }
        if (!gltfTargetNode || !Array.isArray(node)) {
            return null;
        }
        return {
            target: gltfTargetNode,
            properties: node,
        };
    };
    return KHR_animation_pointer;
}());

_glTFLoader__WEBPACK_IMPORTED_MODULE_0__.GLTFLoader.RegisterExtension(NAME, function (loader) { return new KHR_animation_pointer(loader); });


/***/ }),

/***/ "../../../dev/loaders/src/glTF/2.0/Extensions/KHR_draco_mesh_compression.ts":
/*!**********************************************************************************!*\
  !*** ../../../dev/loaders/src/glTF/2.0/Extensions/KHR_draco_mesh_compression.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KHR_draco_mesh_compression: () => (/* binding */ KHR_draco_mesh_compression)
/* harmony export */ });
/* harmony import */ var babylonjs_Meshes_Compression_dracoCompression__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Buffers/buffer */ "babylonjs/Misc/observable");
/* harmony import */ var babylonjs_Meshes_Compression_dracoCompression__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Meshes_Compression_dracoCompression__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _glTFLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../glTFLoader */ "../../../dev/loaders/src/glTF/2.0/glTFLoader.ts");



var NAME = "KHR_draco_mesh_compression";
/**
 * [Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_draco_mesh_compression/README.md)
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
var KHR_draco_mesh_compression = /** @class */ (function () {
    /**
     * @internal
     */
    function KHR_draco_mesh_compression(loader) {
        /**
         * The name of this extension.
         */
        this.name = NAME;
        /**
         * Defines whether to use the normalized flag from the glTF accessor instead of the Draco data. Defaults to true.
         */
        this.useNormalizedFlagFromAccessor = true;
        this._loader = loader;
        this.enabled = babylonjs_Meshes_Compression_dracoCompression__WEBPACK_IMPORTED_MODULE_0__.DracoCompression.DecoderAvailable && this._loader.isExtensionUsed(NAME);
    }
    /** @internal */
    KHR_draco_mesh_compression.prototype.dispose = function () {
        delete this.dracoCompression;
        this._loader = null;
    };
    /**
     * @internal
     */
    KHR_draco_mesh_compression.prototype._loadVertexDataAsync = function (context, primitive, babylonMesh) {
        var _this = this;
        return _glTFLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoader.LoadExtensionAsync(context, primitive, this.name, function (extensionContext, extension) {
            if (primitive.mode != undefined) {
                if (primitive.mode !== 5 /* MeshPrimitiveMode.TRIANGLE_STRIP */ && primitive.mode !== 4 /* MeshPrimitiveMode.TRIANGLES */) {
                    throw new Error("".concat(context, ": Unsupported mode ").concat(primitive.mode));
                }
                // TODO: handle triangle strips
                if (primitive.mode === 5 /* MeshPrimitiveMode.TRIANGLE_STRIP */) {
                    throw new Error("".concat(context, ": Mode ").concat(primitive.mode, " is not currently supported"));
                }
            }
            var attributes = {};
            var normalized = {};
            var loadAttribute = function (name, kind) {
                var uniqueId = extension.attributes[name];
                if (uniqueId == undefined) {
                    return;
                }
                babylonMesh._delayInfo = babylonMesh._delayInfo || [];
                if (babylonMesh._delayInfo.indexOf(kind) === -1) {
                    babylonMesh._delayInfo.push(kind);
                }
                attributes[kind] = uniqueId;
                if (_this.useNormalizedFlagFromAccessor) {
                    var accessor = _glTFLoader__WEBPACK_IMPORTED_MODULE_1__.ArrayItem.TryGet(_this._loader.gltf.accessors, primitive.attributes[name]);
                    if (accessor) {
                        normalized[kind] = accessor.normalized || false;
                    }
                }
            };
            loadAttribute("POSITION", babylonjs_Meshes_Compression_dracoCompression__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.PositionKind);
            loadAttribute("NORMAL", babylonjs_Meshes_Compression_dracoCompression__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.NormalKind);
            loadAttribute("TANGENT", babylonjs_Meshes_Compression_dracoCompression__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.TangentKind);
            loadAttribute("TEXCOORD_0", babylonjs_Meshes_Compression_dracoCompression__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UVKind);
            loadAttribute("TEXCOORD_1", babylonjs_Meshes_Compression_dracoCompression__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UV2Kind);
            loadAttribute("TEXCOORD_2", babylonjs_Meshes_Compression_dracoCompression__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UV3Kind);
            loadAttribute("TEXCOORD_3", babylonjs_Meshes_Compression_dracoCompression__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UV4Kind);
            loadAttribute("TEXCOORD_4", babylonjs_Meshes_Compression_dracoCompression__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UV5Kind);
            loadAttribute("TEXCOORD_5", babylonjs_Meshes_Compression_dracoCompression__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UV6Kind);
            loadAttribute("JOINTS_0", babylonjs_Meshes_Compression_dracoCompression__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.MatricesIndicesKind);
            loadAttribute("WEIGHTS_0", babylonjs_Meshes_Compression_dracoCompression__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.MatricesWeightsKind);
            loadAttribute("COLOR_0", babylonjs_Meshes_Compression_dracoCompression__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.ColorKind);
            var bufferView = _glTFLoader__WEBPACK_IMPORTED_MODULE_1__.ArrayItem.Get(extensionContext, _this._loader.gltf.bufferViews, extension.bufferView);
            if (!bufferView._dracoBabylonGeometry) {
                bufferView._dracoBabylonGeometry = _this._loader.loadBufferViewAsync("/bufferViews/".concat(bufferView.index), bufferView).then(function (data) {
                    var dracoCompression = _this.dracoCompression || babylonjs_Meshes_Compression_dracoCompression__WEBPACK_IMPORTED_MODULE_0__.DracoCompression.Default;
                    return dracoCompression._decodeMeshToGeometryForGltfAsync(babylonMesh.name, _this._loader.babylonScene, data, attributes, normalized).catch(function (error) {
                        throw new Error("".concat(context, ": ").concat(error.message));
                    });
                });
            }
            return bufferView._dracoBabylonGeometry;
        });
    };
    return KHR_draco_mesh_compression;
}());

_glTFLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoader.RegisterExtension(NAME, function (loader) { return new KHR_draco_mesh_compression(loader); });


/***/ }),

/***/ "../../../dev/loaders/src/glTF/2.0/Extensions/KHR_lights_punctual.ts":
/*!***************************************************************************!*\
  !*** ../../../dev/loaders/src/glTF/2.0/Extensions/KHR_lights_punctual.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KHR_lights: () => (/* binding */ KHR_lights)
/* harmony export */ });
/* harmony import */ var babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Lights/light */ "babylonjs/Misc/observable");
/* harmony import */ var babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _glTFLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../glTFLoader */ "../../../dev/loaders/src/glTF/2.0/glTFLoader.ts");







var NAME = "KHR_lights_punctual";
/**
 * [Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_lights_punctual/README.md)
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
var KHR_lights = /** @class */ (function () {
    /**
     * @internal
     */
    function KHR_lights(loader) {
        /**
         * The name of this extension.
         */
        this.name = NAME;
        this._loader = loader;
        this.enabled = this._loader.isExtensionUsed(NAME);
    }
    /** @internal */
    KHR_lights.prototype.dispose = function () {
        this._loader = null;
        delete this._lights;
    };
    /** @internal */
    KHR_lights.prototype.onLoading = function () {
        var extensions = this._loader.gltf.extensions;
        if (extensions && extensions[this.name]) {
            var extension = extensions[this.name];
            this._lights = extension.lights;
            _glTFLoader__WEBPACK_IMPORTED_MODULE_1__.ArrayItem.Assign(this._lights);
        }
    };
    /**
     * @internal
     */
    KHR_lights.prototype.loadNodeAsync = function (context, node, assign) {
        var _this = this;
        return _glTFLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoader.LoadExtensionAsync(context, node, this.name, function (extensionContext, extension) {
            _this._loader._allMaterialsDirtyRequired = true;
            return _this._loader.loadNodeAsync(context, node, function (babylonMesh) {
                var babylonLight;
                var light = _glTFLoader__WEBPACK_IMPORTED_MODULE_1__.ArrayItem.Get(extensionContext, _this._lights, extension.light);
                var name = light.name || babylonMesh.name;
                _this._loader.babylonScene._blockEntityCollection = !!_this._loader._assetContainer;
                switch (light.type) {
                    case "directional" /* KHRLightsPunctual_LightType.DIRECTIONAL */: {
                        var babylonDirectionalLight = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.DirectionalLight(name, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Backward(), _this._loader.babylonScene);
                        babylonDirectionalLight.position.setAll(0);
                        babylonLight = babylonDirectionalLight;
                        break;
                    }
                    case "point" /* KHRLightsPunctual_LightType.POINT */: {
                        babylonLight = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.PointLight(name, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Zero(), _this._loader.babylonScene);
                        break;
                    }
                    case "spot" /* KHRLightsPunctual_LightType.SPOT */: {
                        var babylonSpotLight = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.SpotLight(name, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Zero(), babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Backward(), 0, 1, _this._loader.babylonScene);
                        babylonSpotLight.angle = ((light.spot && light.spot.outerConeAngle) || Math.PI / 4) * 2;
                        babylonSpotLight.innerAngle = ((light.spot && light.spot.innerConeAngle) || 0) * 2;
                        babylonLight = babylonSpotLight;
                        break;
                    }
                    default: {
                        _this._loader.babylonScene._blockEntityCollection = false;
                        throw new Error("".concat(extensionContext, ": Invalid light type (").concat(light.type, ")"));
                    }
                }
                babylonLight._parentContainer = _this._loader._assetContainer;
                _this._loader.babylonScene._blockEntityCollection = false;
                light._babylonLight = babylonLight;
                babylonLight.falloffType = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Light.FALLOFF_GLTF;
                babylonLight.diffuse = light.color ? babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Color3.FromArray(light.color) : babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Color3.White();
                babylonLight.intensity = light.intensity == undefined ? 1 : light.intensity;
                babylonLight.range = light.range == undefined ? Number.MAX_VALUE : light.range;
                babylonLight.parent = babylonMesh;
                _this._loader._babylonLights.push(babylonLight);
                _glTFLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoader.AddPointerMetadata(babylonLight, extensionContext);
                assign(babylonMesh);
            });
        });
    };
    return KHR_lights;
}());

_glTFLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoader.RegisterExtension(NAME, function (loader) { return new KHR_lights(loader); });


/***/ }),

/***/ "../../../dev/loaders/src/glTF/2.0/Extensions/KHR_materials_anisotropy.ts":
/*!********************************************************************************!*\
  !*** ../../../dev/loaders/src/glTF/2.0/Extensions/KHR_materials_anisotropy.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KHR_materials_anisotropy: () => (/* binding */ KHR_materials_anisotropy)
/* harmony export */ });
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Materials/PBR/pbrMaterial */ "babylonjs/Misc/observable");
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _glTFLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../glTFLoader */ "../../../dev/loaders/src/glTF/2.0/glTFLoader.ts");


var NAME = "KHR_materials_anisotropy";
/**
 * [Specification](https://github.com/KhronosGroup/glTF/tree/main/extensions/2.0/Khronos/KHR_materials_anisotropy)
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
var KHR_materials_anisotropy = /** @class */ (function () {
    /**
     * @internal
     */
    function KHR_materials_anisotropy(loader) {
        /**
         * The name of this extension.
         */
        this.name = NAME;
        /**
         * Defines a number that determines the order the extensions are applied.
         */
        this.order = 195;
        this._loader = loader;
        this.enabled = this._loader.isExtensionUsed(NAME);
    }
    /** @internal */
    KHR_materials_anisotropy.prototype.dispose = function () {
        this._loader = null;
    };
    /**
     * @internal
     */
    KHR_materials_anisotropy.prototype.loadMaterialPropertiesAsync = function (context, material, babylonMaterial) {
        var _this = this;
        return _glTFLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoader.LoadExtensionAsync(context, material, this.name, function (extensionContext, extension) {
            var promises = new Array();
            promises.push(_this._loader.loadMaterialPropertiesAsync(context, material, babylonMaterial));
            promises.push(_this._loadIridescencePropertiesAsync(extensionContext, extension, babylonMaterial));
            return Promise.all(promises).then(function () { });
        });
    };
    KHR_materials_anisotropy.prototype._loadIridescencePropertiesAsync = function (context, properties, babylonMaterial) {
        var _a, _b;
        if (!(babylonMaterial instanceof babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_0__.PBRMaterial)) {
            throw new Error("".concat(context, ": Material type not supported"));
        }
        var promises = new Array();
        babylonMaterial.anisotropy.isEnabled = true;
        babylonMaterial.anisotropy.intensity = (_a = properties.anisotropyStrength) !== null && _a !== void 0 ? _a : 0;
        babylonMaterial.anisotropy.angle = (_b = properties.anisotropyRotation) !== null && _b !== void 0 ? _b : 0;
        if (properties.anisotropyTexture) {
            promises.push(this._loader.loadTextureInfoAsync("".concat(context, "/anisotropyTexture"), properties.anisotropyTexture, function (texture) {
                texture.name = "".concat(babylonMaterial.name, " (Anisotropy Intensity)");
                babylonMaterial.anisotropy.texture = texture;
            }));
        }
        return Promise.all(promises).then(function () { });
    };
    return KHR_materials_anisotropy;
}());

_glTFLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoader.RegisterExtension(NAME, function (loader) { return new KHR_materials_anisotropy(loader); });


/***/ }),

/***/ "../../../dev/loaders/src/glTF/2.0/Extensions/KHR_materials_clearcoat.ts":
/*!*******************************************************************************!*\
  !*** ../../../dev/loaders/src/glTF/2.0/Extensions/KHR_materials_clearcoat.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KHR_materials_clearcoat: () => (/* binding */ KHR_materials_clearcoat)
/* harmony export */ });
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Materials/PBR/pbrMaterial */ "babylonjs/Misc/observable");
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _glTFLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../glTFLoader */ "../../../dev/loaders/src/glTF/2.0/glTFLoader.ts");


var NAME = "KHR_materials_clearcoat";
/**
 * [Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_materials_clearcoat/README.md)
 * [Playground Sample](https://www.babylonjs-playground.com/frame.html#7F7PN6#8)
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
var KHR_materials_clearcoat = /** @class */ (function () {
    /**
     * @internal
     */
    function KHR_materials_clearcoat(loader) {
        /**
         * The name of this extension.
         */
        this.name = NAME;
        /**
         * Defines a number that determines the order the extensions are applied.
         */
        this.order = 190;
        this._loader = loader;
        this.enabled = this._loader.isExtensionUsed(NAME);
    }
    /** @internal */
    KHR_materials_clearcoat.prototype.dispose = function () {
        this._loader = null;
    };
    /**
     * @internal
     */
    KHR_materials_clearcoat.prototype.loadMaterialPropertiesAsync = function (context, material, babylonMaterial) {
        var _this = this;
        return _glTFLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoader.LoadExtensionAsync(context, material, this.name, function (extensionContext, extension) {
            var promises = new Array();
            promises.push(_this._loader.loadMaterialPropertiesAsync(context, material, babylonMaterial));
            promises.push(_this._loadClearCoatPropertiesAsync(extensionContext, extension, babylonMaterial));
            return Promise.all(promises).then(function () { });
        });
    };
    KHR_materials_clearcoat.prototype._loadClearCoatPropertiesAsync = function (context, properties, babylonMaterial) {
        if (!(babylonMaterial instanceof babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_0__.PBRMaterial)) {
            throw new Error("".concat(context, ": Material type not supported"));
        }
        var promises = new Array();
        babylonMaterial.clearCoat.isEnabled = true;
        babylonMaterial.clearCoat.useRoughnessFromMainTexture = false;
        babylonMaterial.clearCoat.remapF0OnInterfaceChange = false;
        if (properties.clearcoatFactor != undefined) {
            babylonMaterial.clearCoat.intensity = properties.clearcoatFactor;
        }
        else {
            babylonMaterial.clearCoat.intensity = 0;
        }
        if (properties.clearcoatTexture) {
            promises.push(this._loader.loadTextureInfoAsync("".concat(context, "/clearcoatTexture"), properties.clearcoatTexture, function (texture) {
                texture.name = "".concat(babylonMaterial.name, " (ClearCoat Intensity)");
                babylonMaterial.clearCoat.texture = texture;
            }));
        }
        if (properties.clearcoatRoughnessFactor != undefined) {
            babylonMaterial.clearCoat.roughness = properties.clearcoatRoughnessFactor;
        }
        else {
            babylonMaterial.clearCoat.roughness = 0;
        }
        if (properties.clearcoatRoughnessTexture) {
            properties.clearcoatRoughnessTexture.nonColorData = true;
            promises.push(this._loader.loadTextureInfoAsync("".concat(context, "/clearcoatRoughnessTexture"), properties.clearcoatRoughnessTexture, function (texture) {
                texture.name = "".concat(babylonMaterial.name, " (ClearCoat Roughness)");
                babylonMaterial.clearCoat.textureRoughness = texture;
            }));
        }
        if (properties.clearcoatNormalTexture) {
            properties.clearcoatNormalTexture.nonColorData = true;
            promises.push(this._loader.loadTextureInfoAsync("".concat(context, "/clearcoatNormalTexture"), properties.clearcoatNormalTexture, function (texture) {
                texture.name = "".concat(babylonMaterial.name, " (ClearCoat Normal)");
                babylonMaterial.clearCoat.bumpTexture = texture;
            }));
            babylonMaterial.invertNormalMapX = !babylonMaterial.getScene().useRightHandedSystem;
            babylonMaterial.invertNormalMapY = babylonMaterial.getScene().useRightHandedSystem;
            if (properties.clearcoatNormalTexture.scale != undefined) {
                babylonMaterial.clearCoat.bumpTexture.level = properties.clearcoatNormalTexture.scale;
            }
        }
        return Promise.all(promises).then(function () { });
    };
    return KHR_materials_clearcoat;
}());

_glTFLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoader.RegisterExtension(NAME, function (loader) { return new KHR_materials_clearcoat(loader); });


/***/ }),

/***/ "../../../dev/loaders/src/glTF/2.0/Extensions/KHR_materials_emissive_strength.ts":
/*!***************************************************************************************!*\
  !*** ../../../dev/loaders/src/glTF/2.0/Extensions/KHR_materials_emissive_strength.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KHR_materials_emissive_strength: () => (/* binding */ KHR_materials_emissive_strength)
/* harmony export */ });
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Materials/PBR/pbrMaterial */ "babylonjs/Misc/observable");
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _glTFLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../glTFLoader */ "../../../dev/loaders/src/glTF/2.0/glTFLoader.ts");


var NAME = "KHR_materials_emissive_strength";
/**
 * [Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_materials_emissive_strength/README.md)
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
var KHR_materials_emissive_strength = /** @class */ (function () {
    /**
     * @internal
     */
    function KHR_materials_emissive_strength(loader) {
        /**
         * The name of this extension.
         */
        this.name = NAME;
        /**
         * Defines a number that determines the order the extensions are applied.
         */
        this.order = 170;
        this._loader = loader;
        this.enabled = this._loader.isExtensionUsed(NAME);
    }
    /** @internal */
    KHR_materials_emissive_strength.prototype.dispose = function () {
        this._loader = null;
    };
    /**
     * @internal
     */
    KHR_materials_emissive_strength.prototype.loadMaterialPropertiesAsync = function (context, material, babylonMaterial) {
        var _this = this;
        return _glTFLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoader.LoadExtensionAsync(context, material, this.name, function (extensionContext, extension) {
            return _this._loader.loadMaterialPropertiesAsync(context, material, babylonMaterial).then(function () {
                _this._loadEmissiveProperties(extensionContext, extension, babylonMaterial);
            });
        });
    };
    KHR_materials_emissive_strength.prototype._loadEmissiveProperties = function (context, properties, babylonMaterial) {
        if (!(babylonMaterial instanceof babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_0__.PBRMaterial)) {
            throw new Error("".concat(context, ": Material type not supported"));
        }
        if (properties.emissiveStrength !== undefined) {
            babylonMaterial.emissiveColor.scaleToRef(properties.emissiveStrength, babylonMaterial.emissiveColor);
        }
    };
    return KHR_materials_emissive_strength;
}());

_glTFLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoader.RegisterExtension(NAME, function (loader) { return new KHR_materials_emissive_strength(loader); });


/***/ }),

/***/ "../../../dev/loaders/src/glTF/2.0/Extensions/KHR_materials_ior.ts":
/*!*************************************************************************!*\
  !*** ../../../dev/loaders/src/glTF/2.0/Extensions/KHR_materials_ior.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KHR_materials_ior: () => (/* binding */ KHR_materials_ior)
/* harmony export */ });
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Materials/PBR/pbrMaterial */ "babylonjs/Misc/observable");
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _glTFLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../glTFLoader */ "../../../dev/loaders/src/glTF/2.0/glTFLoader.ts");


var NAME = "KHR_materials_ior";
/**
 * [Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_materials_ior/README.md)
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
var KHR_materials_ior = /** @class */ (function () {
    /**
     * @internal
     */
    function KHR_materials_ior(loader) {
        /**
         * The name of this extension.
         */
        this.name = NAME;
        /**
         * Defines a number that determines the order the extensions are applied.
         */
        this.order = 180;
        this._loader = loader;
        this.enabled = this._loader.isExtensionUsed(NAME);
    }
    /** @internal */
    KHR_materials_ior.prototype.dispose = function () {
        this._loader = null;
    };
    /**
     * @internal
     */
    KHR_materials_ior.prototype.loadMaterialPropertiesAsync = function (context, material, babylonMaterial) {
        var _this = this;
        return _glTFLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoader.LoadExtensionAsync(context, material, this.name, function (extensionContext, extension) {
            var promises = new Array();
            promises.push(_this._loader.loadMaterialPropertiesAsync(context, material, babylonMaterial));
            promises.push(_this._loadIorPropertiesAsync(extensionContext, extension, babylonMaterial));
            return Promise.all(promises).then(function () { });
        });
    };
    KHR_materials_ior.prototype._loadIorPropertiesAsync = function (context, properties, babylonMaterial) {
        if (!(babylonMaterial instanceof babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_0__.PBRMaterial)) {
            throw new Error("".concat(context, ": Material type not supported"));
        }
        if (properties.ior !== undefined) {
            babylonMaterial.indexOfRefraction = properties.ior;
        }
        else {
            babylonMaterial.indexOfRefraction = KHR_materials_ior._DEFAULT_IOR;
        }
        return Promise.resolve();
    };
    /**
     * Default ior Value from the spec.
     */
    KHR_materials_ior._DEFAULT_IOR = 1.5;
    return KHR_materials_ior;
}());
_glTFLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoader.RegisterExtension(NAME, function (loader) { return new KHR_materials_ior(loader); });


/***/ }),

/***/ "../../../dev/loaders/src/glTF/2.0/Extensions/KHR_materials_iridescence.ts":
/*!*********************************************************************************!*\
  !*** ../../../dev/loaders/src/glTF/2.0/Extensions/KHR_materials_iridescence.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KHR_materials_iridescence: () => (/* binding */ KHR_materials_iridescence)
/* harmony export */ });
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Materials/PBR/pbrMaterial */ "babylonjs/Misc/observable");
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _glTFLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../glTFLoader */ "../../../dev/loaders/src/glTF/2.0/glTFLoader.ts");


var NAME = "KHR_materials_iridescence";
/**
 * [Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_materials_iridescence/README.md)
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
var KHR_materials_iridescence = /** @class */ (function () {
    /**
     * @internal
     */
    function KHR_materials_iridescence(loader) {
        /**
         * The name of this extension.
         */
        this.name = NAME;
        /**
         * Defines a number that determines the order the extensions are applied.
         */
        this.order = 195;
        this._loader = loader;
        this.enabled = this._loader.isExtensionUsed(NAME);
    }
    /** @internal */
    KHR_materials_iridescence.prototype.dispose = function () {
        this._loader = null;
    };
    /**
     * @internal
     */
    KHR_materials_iridescence.prototype.loadMaterialPropertiesAsync = function (context, material, babylonMaterial) {
        var _this = this;
        return _glTFLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoader.LoadExtensionAsync(context, material, this.name, function (extensionContext, extension) {
            var promises = new Array();
            promises.push(_this._loader.loadMaterialPropertiesAsync(context, material, babylonMaterial));
            promises.push(_this._loadIridescencePropertiesAsync(extensionContext, extension, babylonMaterial));
            return Promise.all(promises).then(function () { });
        });
    };
    KHR_materials_iridescence.prototype._loadIridescencePropertiesAsync = function (context, properties, babylonMaterial) {
        var _a, _b, _c, _d, _e;
        if (!(babylonMaterial instanceof babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_0__.PBRMaterial)) {
            throw new Error("".concat(context, ": Material type not supported"));
        }
        var promises = new Array();
        babylonMaterial.iridescence.isEnabled = true;
        babylonMaterial.iridescence.intensity = (_a = properties.iridescenceFactor) !== null && _a !== void 0 ? _a : 0;
        babylonMaterial.iridescence.indexOfRefraction = (_c = (_b = properties.iridescenceIor) !== null && _b !== void 0 ? _b : properties.iridescenceIOR) !== null && _c !== void 0 ? _c : 1.3;
        babylonMaterial.iridescence.minimumThickness = (_d = properties.iridescenceThicknessMinimum) !== null && _d !== void 0 ? _d : 100;
        babylonMaterial.iridescence.maximumThickness = (_e = properties.iridescenceThicknessMaximum) !== null && _e !== void 0 ? _e : 400;
        if (properties.iridescenceTexture) {
            promises.push(this._loader.loadTextureInfoAsync("".concat(context, "/iridescenceTexture"), properties.iridescenceTexture, function (texture) {
                texture.name = "".concat(babylonMaterial.name, " (Iridescence Intensity)");
                babylonMaterial.iridescence.texture = texture;
            }));
        }
        if (properties.iridescenceThicknessTexture) {
            promises.push(this._loader.loadTextureInfoAsync("".concat(context, "/iridescenceThicknessTexture"), properties.iridescenceThicknessTexture, function (texture) {
                texture.name = "".concat(babylonMaterial.name, " (Iridescence Thickness)");
                babylonMaterial.iridescence.thicknessTexture = texture;
            }));
        }
        return Promise.all(promises).then(function () { });
    };
    return KHR_materials_iridescence;
}());

_glTFLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoader.RegisterExtension(NAME, function (loader) { return new KHR_materials_iridescence(loader); });


/***/ }),

/***/ "../../../dev/loaders/src/glTF/2.0/Extensions/KHR_materials_pbrSpecularGlossiness.ts":
/*!*******************************************************************************************!*\
  !*** ../../../dev/loaders/src/glTF/2.0/Extensions/KHR_materials_pbrSpecularGlossiness.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KHR_materials_pbrSpecularGlossiness: () => (/* binding */ KHR_materials_pbrSpecularGlossiness)
/* harmony export */ });
/* harmony import */ var babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Materials/PBR/pbrMaterial */ "babylonjs/Misc/observable");
/* harmony import */ var babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _glTFLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../glTFLoader */ "../../../dev/loaders/src/glTF/2.0/glTFLoader.ts");



var NAME = "KHR_materials_pbrSpecularGlossiness";
/**
 * [Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Archived/KHR_materials_pbrSpecularGlossiness/README.md)
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
var KHR_materials_pbrSpecularGlossiness = /** @class */ (function () {
    /**
     * @internal
     */
    function KHR_materials_pbrSpecularGlossiness(loader) {
        /**
         * The name of this extension.
         */
        this.name = NAME;
        /**
         * Defines a number that determines the order the extensions are applied.
         */
        this.order = 200;
        this._loader = loader;
        this.enabled = this._loader.isExtensionUsed(NAME);
    }
    /** @internal */
    KHR_materials_pbrSpecularGlossiness.prototype.dispose = function () {
        this._loader = null;
    };
    /**
     * @internal
     */
    KHR_materials_pbrSpecularGlossiness.prototype.loadMaterialPropertiesAsync = function (context, material, babylonMaterial) {
        var _this = this;
        return _glTFLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoader.LoadExtensionAsync(context, material, this.name, function (extensionContext, extension) {
            var promises = new Array();
            promises.push(_this._loader.loadMaterialBasePropertiesAsync(context, material, babylonMaterial));
            promises.push(_this._loadSpecularGlossinessPropertiesAsync(extensionContext, material, extension, babylonMaterial));
            _this._loader.loadMaterialAlphaProperties(context, material, babylonMaterial);
            return Promise.all(promises).then(function () { });
        });
    };
    KHR_materials_pbrSpecularGlossiness.prototype._loadSpecularGlossinessPropertiesAsync = function (context, material, properties, babylonMaterial) {
        if (!(babylonMaterial instanceof babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.PBRMaterial)) {
            throw new Error("".concat(context, ": Material type not supported"));
        }
        var promises = new Array();
        babylonMaterial.metallic = null;
        babylonMaterial.roughness = null;
        if (properties.diffuseFactor) {
            babylonMaterial.albedoColor = babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Color3.FromArray(properties.diffuseFactor);
            babylonMaterial.alpha = properties.diffuseFactor[3];
        }
        else {
            babylonMaterial.albedoColor = babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Color3.White();
        }
        babylonMaterial.reflectivityColor = properties.specularFactor ? babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Color3.FromArray(properties.specularFactor) : babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Color3.White();
        babylonMaterial.microSurface = properties.glossinessFactor == undefined ? 1 : properties.glossinessFactor;
        if (properties.diffuseTexture) {
            promises.push(this._loader.loadTextureInfoAsync("".concat(context, "/diffuseTexture"), properties.diffuseTexture, function (texture) {
                texture.name = "".concat(babylonMaterial.name, " (Diffuse)");
                babylonMaterial.albedoTexture = texture;
            }));
        }
        if (properties.specularGlossinessTexture) {
            promises.push(this._loader.loadTextureInfoAsync("".concat(context, "/specularGlossinessTexture"), properties.specularGlossinessTexture, function (texture) {
                texture.name = "".concat(babylonMaterial.name, " (Specular Glossiness)");
                babylonMaterial.reflectivityTexture = texture;
                babylonMaterial.reflectivityTexture.hasAlpha = true;
            }));
            babylonMaterial.useMicroSurfaceFromReflectivityMapAlpha = true;
        }
        return Promise.all(promises).then(function () { });
    };
    return KHR_materials_pbrSpecularGlossiness;
}());

_glTFLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoader.RegisterExtension(NAME, function (loader) { return new KHR_materials_pbrSpecularGlossiness(loader); });


/***/ }),

/***/ "../../../dev/loaders/src/glTF/2.0/Extensions/KHR_materials_sheen.ts":
/*!***************************************************************************!*\
  !*** ../../../dev/loaders/src/glTF/2.0/Extensions/KHR_materials_sheen.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KHR_materials_sheen: () => (/* binding */ KHR_materials_sheen)
/* harmony export */ });
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Maths/math.color */ "babylonjs/Misc/observable");
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _glTFLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../glTFLoader */ "../../../dev/loaders/src/glTF/2.0/glTFLoader.ts");



var NAME = "KHR_materials_sheen";
/**
 * [Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_materials_sheen/README.md)
 * [Playground Sample](https://www.babylonjs-playground.com/frame.html#BNIZX6#4)
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
var KHR_materials_sheen = /** @class */ (function () {
    /**
     * @internal
     */
    function KHR_materials_sheen(loader) {
        /**
         * The name of this extension.
         */
        this.name = NAME;
        /**
         * Defines a number that determines the order the extensions are applied.
         */
        this.order = 190;
        this._loader = loader;
        this.enabled = this._loader.isExtensionUsed(NAME);
    }
    /** @internal */
    KHR_materials_sheen.prototype.dispose = function () {
        this._loader = null;
    };
    /**
     * @internal
     */
    KHR_materials_sheen.prototype.loadMaterialPropertiesAsync = function (context, material, babylonMaterial) {
        var _this = this;
        return _glTFLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoader.LoadExtensionAsync(context, material, this.name, function (extensionContext, extension) {
            var promises = new Array();
            promises.push(_this._loader.loadMaterialPropertiesAsync(context, material, babylonMaterial));
            promises.push(_this._loadSheenPropertiesAsync(extensionContext, extension, babylonMaterial));
            return Promise.all(promises).then(function () { });
        });
    };
    KHR_materials_sheen.prototype._loadSheenPropertiesAsync = function (context, properties, babylonMaterial) {
        if (!(babylonMaterial instanceof babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_0__.PBRMaterial)) {
            throw new Error("".concat(context, ": Material type not supported"));
        }
        var promises = new Array();
        babylonMaterial.sheen.isEnabled = true;
        babylonMaterial.sheen.intensity = 1;
        if (properties.sheenColorFactor != undefined) {
            babylonMaterial.sheen.color = babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_0__.Color3.FromArray(properties.sheenColorFactor);
        }
        else {
            babylonMaterial.sheen.color = babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_0__.Color3.Black();
        }
        if (properties.sheenColorTexture) {
            promises.push(this._loader.loadTextureInfoAsync("".concat(context, "/sheenColorTexture"), properties.sheenColorTexture, function (texture) {
                texture.name = "".concat(babylonMaterial.name, " (Sheen Color)");
                babylonMaterial.sheen.texture = texture;
            }));
        }
        if (properties.sheenRoughnessFactor !== undefined) {
            babylonMaterial.sheen.roughness = properties.sheenRoughnessFactor;
        }
        else {
            babylonMaterial.sheen.roughness = 0;
        }
        if (properties.sheenRoughnessTexture) {
            properties.sheenRoughnessTexture.nonColorData = true;
            promises.push(this._loader.loadTextureInfoAsync("".concat(context, "/sheenRoughnessTexture"), properties.sheenRoughnessTexture, function (texture) {
                texture.name = "".concat(babylonMaterial.name, " (Sheen Roughness)");
                babylonMaterial.sheen.textureRoughness = texture;
            }));
        }
        babylonMaterial.sheen.albedoScaling = true;
        babylonMaterial.sheen.useRoughnessFromMainTexture = false;
        return Promise.all(promises).then(function () { });
    };
    return KHR_materials_sheen;
}());

_glTFLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoader.RegisterExtension(NAME, function (loader) { return new KHR_materials_sheen(loader); });


/***/ }),

/***/ "../../../dev/loaders/src/glTF/2.0/Extensions/KHR_materials_specular.ts":
/*!******************************************************************************!*\
  !*** ../../../dev/loaders/src/glTF/2.0/Extensions/KHR_materials_specular.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KHR_materials_specular: () => (/* binding */ KHR_materials_specular)
/* harmony export */ });
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Maths/math.color */ "babylonjs/Misc/observable");
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _glTFLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../glTFLoader */ "../../../dev/loaders/src/glTF/2.0/glTFLoader.ts");



var NAME = "KHR_materials_specular";
/**
 * [Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_materials_specular/README.md)
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
var KHR_materials_specular = /** @class */ (function () {
    /**
     * @internal
     */
    function KHR_materials_specular(loader) {
        /**
         * The name of this extension.
         */
        this.name = NAME;
        /**
         * Defines a number that determines the order the extensions are applied.
         */
        this.order = 190;
        this._loader = loader;
        this.enabled = this._loader.isExtensionUsed(NAME);
    }
    /** @internal */
    KHR_materials_specular.prototype.dispose = function () {
        this._loader = null;
    };
    /**
     * @internal
     */
    KHR_materials_specular.prototype.loadMaterialPropertiesAsync = function (context, material, babylonMaterial) {
        var _this = this;
        return _glTFLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoader.LoadExtensionAsync(context, material, this.name, function (extensionContext, extension) {
            var promises = new Array();
            promises.push(_this._loader.loadMaterialPropertiesAsync(context, material, babylonMaterial));
            promises.push(_this._loadSpecularPropertiesAsync(extensionContext, extension, babylonMaterial));
            return Promise.all(promises).then(function () { });
        });
    };
    KHR_materials_specular.prototype._loadSpecularPropertiesAsync = function (context, properties, babylonMaterial) {
        if (!(babylonMaterial instanceof babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_0__.PBRMaterial)) {
            throw new Error("".concat(context, ": Material type not supported"));
        }
        var promises = new Array();
        if (properties.specularFactor !== undefined) {
            babylonMaterial.metallicF0Factor = properties.specularFactor;
        }
        if (properties.specularColorFactor !== undefined) {
            babylonMaterial.metallicReflectanceColor = babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_0__.Color3.FromArray(properties.specularColorFactor);
        }
        if (properties.specularTexture) {
            properties.specularTexture.nonColorData = true;
            promises.push(this._loader.loadTextureInfoAsync("".concat(context, "/specularTexture"), properties.specularTexture, function (texture) {
                texture.name = "".concat(babylonMaterial.name, " (Specular F0 Strength)");
                babylonMaterial.metallicReflectanceTexture = texture;
                babylonMaterial.useOnlyMetallicFromMetallicReflectanceTexture = true;
            }));
        }
        if (properties.specularColorTexture) {
            promises.push(this._loader.loadTextureInfoAsync("".concat(context, "/specularColorTexture"), properties.specularColorTexture, function (texture) {
                texture.name = "".concat(babylonMaterial.name, " (Specular F0 Color)");
                babylonMaterial.reflectanceTexture = texture;
            }));
        }
        return Promise.all(promises).then(function () { });
    };
    return KHR_materials_specular;
}());

_glTFLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoader.RegisterExtension(NAME, function (loader) { return new KHR_materials_specular(loader); });


/***/ }),

/***/ "../../../dev/loaders/src/glTF/2.0/Extensions/KHR_materials_translucency.ts":
/*!**********************************************************************************!*\
  !*** ../../../dev/loaders/src/glTF/2.0/Extensions/KHR_materials_translucency.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KHR_materials_translucency: () => (/* binding */ KHR_materials_translucency)
/* harmony export */ });
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Materials/PBR/pbrMaterial */ "babylonjs/Misc/observable");
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _glTFLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../glTFLoader */ "../../../dev/loaders/src/glTF/2.0/glTFLoader.ts");


var NAME = "KHR_materials_translucency";
/**
 * [Proposed Specification](https://github.com/KhronosGroup/glTF/pull/1825)
 * !!! Experimental Extension Subject to Changes !!!
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
var KHR_materials_translucency = /** @class */ (function () {
    /**
     * @internal
     */
    function KHR_materials_translucency(loader) {
        /**
         * The name of this extension.
         */
        this.name = NAME;
        /**
         * Defines a number that determines the order the extensions are applied.
         */
        this.order = 174;
        this._loader = loader;
        this.enabled = this._loader.isExtensionUsed(NAME);
        if (this.enabled) {
            loader.parent.transparencyAsCoverage = true;
        }
    }
    /** @internal */
    KHR_materials_translucency.prototype.dispose = function () {
        this._loader = null;
    };
    /**
     * @internal
     */
    KHR_materials_translucency.prototype.loadMaterialPropertiesAsync = function (context, material, babylonMaterial) {
        var _this = this;
        return _glTFLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoader.LoadExtensionAsync(context, material, this.name, function (extensionContext, extension) {
            var promises = new Array();
            promises.push(_this._loader.loadMaterialBasePropertiesAsync(context, material, babylonMaterial));
            promises.push(_this._loader.loadMaterialPropertiesAsync(context, material, babylonMaterial));
            promises.push(_this._loadTranslucentPropertiesAsync(extensionContext, material, babylonMaterial, extension));
            return Promise.all(promises).then(function () { });
        });
    };
    KHR_materials_translucency.prototype._loadTranslucentPropertiesAsync = function (context, material, babylonMaterial, extension) {
        if (!(babylonMaterial instanceof babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_0__.PBRMaterial)) {
            throw new Error("".concat(context, ": Material type not supported"));
        }
        var pbrMaterial = babylonMaterial;
        // Enables "translucency" texture which represents diffusely-transmitted light.
        pbrMaterial.subSurface.isTranslucencyEnabled = true;
        // Since this extension models thin-surface transmission only, we must make the
        // internal IOR == 1.0 and set the thickness to 0.
        pbrMaterial.subSurface.volumeIndexOfRefraction = 1.0;
        pbrMaterial.subSurface.minimumThickness = 0.0;
        pbrMaterial.subSurface.maximumThickness = 0.0;
        // Albedo colour will tint transmission.
        pbrMaterial.subSurface.useAlbedoToTintTranslucency = true;
        if (extension.translucencyFactor !== undefined) {
            pbrMaterial.subSurface.translucencyIntensity = extension.translucencyFactor;
        }
        else {
            pbrMaterial.subSurface.translucencyIntensity = 0.0;
            pbrMaterial.subSurface.isTranslucencyEnabled = false;
            return Promise.resolve();
        }
        if (extension.translucencyTexture) {
            extension.translucencyTexture.nonColorData = true;
            return this._loader.loadTextureInfoAsync("".concat(context, "/translucencyTexture"), extension.translucencyTexture).then(function (texture) {
                pbrMaterial.subSurface.translucencyIntensityTexture = texture;
            });
        }
        else {
            return Promise.resolve();
        }
    };
    return KHR_materials_translucency;
}());

_glTFLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoader.RegisterExtension(NAME, function (loader) { return new KHR_materials_translucency(loader); });


/***/ }),

/***/ "../../../dev/loaders/src/glTF/2.0/Extensions/KHR_materials_transmission.ts":
/*!**********************************************************************************!*\
  !*** ../../../dev/loaders/src/glTF/2.0/Extensions/KHR_materials_transmission.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KHR_materials_transmission: () => (/* binding */ KHR_materials_transmission)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Misc/tools */ "babylonjs/Misc/observable");
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _glTFLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../glTFLoader */ "../../../dev/loaders/src/glTF/2.0/glTFLoader.ts");







/**
 * A class to handle setting up the rendering of opaque objects to be shown through transmissive objects.
 */
var TransmissionHelper = /** @class */ (function () {
    /**
     * constructor
     * @param options Defines the options we want to customize the helper
     * @param scene The scene to add the material to
     */
    function TransmissionHelper(options, scene) {
        var _this = this;
        this._opaqueRenderTarget = null;
        this._opaqueMeshesCache = [];
        this._transparentMeshesCache = [];
        this._materialObservers = {};
        this._options = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, TransmissionHelper._GetDefaultOptions()), options);
        this._scene = scene;
        this._scene._transmissionHelper = this;
        this.onErrorObservable = new babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_0__.Observable();
        this._scene.onDisposeObservable.addOnce(function () {
            _this.dispose();
        });
        this._parseScene();
        this._setupRenderTargets();
    }
    /**
     * Creates the default options for the helper.
     */
    TransmissionHelper._GetDefaultOptions = function () {
        return {
            renderSize: 1024,
            samples: 4,
            lodGenerationScale: 1,
            lodGenerationOffset: -4,
            renderTargetTextureType: babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_0__.Constants.TEXTURETYPE_HALF_FLOAT,
            generateMipmaps: true,
        };
    };
    /**
     * Updates the background according to the new options
     * @param options
     */
    TransmissionHelper.prototype.updateOptions = function (options) {
        var _this = this;
        // First check if any options are actually being changed. If not, exit.
        var newValues = Object.keys(options).filter(function (key) { return _this._options[key] !== options[key]; });
        if (!newValues.length) {
            return;
        }
        var newOptions = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, this._options), options);
        var oldOptions = this._options;
        this._options = newOptions;
        // If size changes, recreate everything
        if (newOptions.renderSize !== oldOptions.renderSize ||
            newOptions.renderTargetTextureType !== oldOptions.renderTargetTextureType ||
            newOptions.generateMipmaps !== oldOptions.generateMipmaps ||
            !this._opaqueRenderTarget) {
            this._setupRenderTargets();
        }
        else {
            this._opaqueRenderTarget.samples = newOptions.samples;
            this._opaqueRenderTarget.lodGenerationScale = newOptions.lodGenerationScale;
            this._opaqueRenderTarget.lodGenerationOffset = newOptions.lodGenerationOffset;
        }
    };
    /**
     * Gets the opaque render target texture or null if not available.
     */
    TransmissionHelper.prototype.getOpaqueTarget = function () {
        return this._opaqueRenderTarget;
    };
    TransmissionHelper.prototype._shouldRenderAsTransmission = function (material) {
        if (!material) {
            return false;
        }
        if (material instanceof babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_0__.PBRMaterial && material.subSurface.isRefractionEnabled) {
            return true;
        }
        return false;
    };
    TransmissionHelper.prototype._addMesh = function (mesh) {
        var _this = this;
        this._materialObservers[mesh.uniqueId] = mesh.onMaterialChangedObservable.add(this._onMeshMaterialChanged.bind(this));
        // we need to defer the processing because _addMesh may be called as part as an instance mesh creation, in which case some
        // internal properties are not setup yet, like _sourceMesh (needed when doing mesh.material below)
        babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_0__.Tools.SetImmediate(function () {
            if (_this._shouldRenderAsTransmission(mesh.material)) {
                mesh.material.refractionTexture = _this._opaqueRenderTarget;
                if (_this._transparentMeshesCache.indexOf(mesh) === -1) {
                    _this._transparentMeshesCache.push(mesh);
                }
            }
            else {
                if (_this._opaqueMeshesCache.indexOf(mesh) === -1) {
                    _this._opaqueMeshesCache.push(mesh);
                }
            }
        });
    };
    TransmissionHelper.prototype._removeMesh = function (mesh) {
        mesh.onMaterialChangedObservable.remove(this._materialObservers[mesh.uniqueId]);
        delete this._materialObservers[mesh.uniqueId];
        var idx = this._transparentMeshesCache.indexOf(mesh);
        if (idx !== -1) {
            this._transparentMeshesCache.splice(idx, 1);
        }
        idx = this._opaqueMeshesCache.indexOf(mesh);
        if (idx !== -1) {
            this._opaqueMeshesCache.splice(idx, 1);
        }
    };
    TransmissionHelper.prototype._parseScene = function () {
        this._scene.meshes.forEach(this._addMesh.bind(this));
        // Listen for when a mesh is added to the scene and add it to our cache lists.
        this._scene.onNewMeshAddedObservable.add(this._addMesh.bind(this));
        // Listen for when a mesh is removed from to the scene and remove it from our cache lists.
        this._scene.onMeshRemovedObservable.add(this._removeMesh.bind(this));
    };
    // When one of the meshes in the scene has its material changed, make sure that it's in the correct cache list.
    TransmissionHelper.prototype._onMeshMaterialChanged = function (mesh) {
        var transparentIdx = this._transparentMeshesCache.indexOf(mesh);
        var opaqueIdx = this._opaqueMeshesCache.indexOf(mesh);
        // If the material is transparent, make sure that it's added to the transparent list and removed from the opaque list
        var useTransmission = this._shouldRenderAsTransmission(mesh.material);
        if (useTransmission) {
            if (mesh.material instanceof babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_0__.PBRMaterial) {
                mesh.material.subSurface.refractionTexture = this._opaqueRenderTarget;
            }
            if (opaqueIdx !== -1) {
                this._opaqueMeshesCache.splice(opaqueIdx, 1);
                this._transparentMeshesCache.push(mesh);
            }
            else if (transparentIdx === -1) {
                this._transparentMeshesCache.push(mesh);
            }
            // If the material is opaque, make sure that it's added to the opaque list and removed from the transparent list
        }
        else {
            if (transparentIdx !== -1) {
                this._transparentMeshesCache.splice(transparentIdx, 1);
                this._opaqueMeshesCache.push(mesh);
            }
            else if (opaqueIdx === -1) {
                this._opaqueMeshesCache.push(mesh);
            }
        }
    };
    /**
     * @internal
     * Check if the opaque render target has not been disposed and can still be used.
     * @returns
     */
    TransmissionHelper.prototype._isRenderTargetValid = function () {
        var _a;
        return ((_a = this._opaqueRenderTarget) === null || _a === void 0 ? void 0 : _a.getInternalTexture()) !== null;
    };
    /**
     * @internal
     * Setup the render targets according to the specified options.
     */
    TransmissionHelper.prototype._setupRenderTargets = function () {
        var _this = this;
        var _a, _b;
        if (this._opaqueRenderTarget) {
            this._opaqueRenderTarget.dispose();
        }
        this._opaqueRenderTarget = new babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_0__.RenderTargetTexture("opaqueSceneTexture", this._options.renderSize, this._scene, this._options.generateMipmaps, undefined, this._options.renderTargetTextureType);
        this._opaqueRenderTarget.ignoreCameraViewport = true;
        this._opaqueRenderTarget.renderList = this._opaqueMeshesCache;
        this._opaqueRenderTarget.clearColor = (_b = (_a = this._options.clearColor) === null || _a === void 0 ? void 0 : _a.clone()) !== null && _b !== void 0 ? _b : this._scene.clearColor.clone();
        this._opaqueRenderTarget.gammaSpace = false;
        this._opaqueRenderTarget.lodGenerationScale = this._options.lodGenerationScale;
        this._opaqueRenderTarget.lodGenerationOffset = this._options.lodGenerationOffset;
        this._opaqueRenderTarget.samples = this._options.samples;
        var sceneImageProcessingapplyByPostProcess;
        var saveSceneEnvIntensity;
        this._opaqueRenderTarget.onBeforeBindObservable.add(function (opaqueRenderTarget) {
            saveSceneEnvIntensity = _this._scene.environmentIntensity;
            _this._scene.environmentIntensity = 1.0;
            sceneImageProcessingapplyByPostProcess = _this._scene.imageProcessingConfiguration.applyByPostProcess;
            if (!_this._options.clearColor) {
                _this._scene.clearColor.toLinearSpaceToRef(opaqueRenderTarget.clearColor, _this._scene.getEngine().useExactSrgbConversions);
            }
            else {
                opaqueRenderTarget.clearColor.copyFrom(_this._options.clearColor);
            }
            // we do not use the applyByPostProcess setter to avoid flagging all the materials as "image processing dirty"!
            _this._scene.imageProcessingConfiguration._applyByPostProcess = true;
        });
        this._opaqueRenderTarget.onAfterUnbindObservable.add(function () {
            _this._scene.environmentIntensity = saveSceneEnvIntensity;
            _this._scene.imageProcessingConfiguration._applyByPostProcess = sceneImageProcessingapplyByPostProcess;
        });
        this._transparentMeshesCache.forEach(function (mesh) {
            if (_this._shouldRenderAsTransmission(mesh.material)) {
                mesh.material.refractionTexture = _this._opaqueRenderTarget;
            }
        });
    };
    /**
     * Dispose all the elements created by the Helper.
     */
    TransmissionHelper.prototype.dispose = function () {
        this._scene._transmissionHelper = undefined;
        if (this._opaqueRenderTarget) {
            this._opaqueRenderTarget.dispose();
            this._opaqueRenderTarget = null;
        }
        this._transparentMeshesCache = [];
        this._opaqueMeshesCache = [];
    };
    return TransmissionHelper;
}());
var NAME = "KHR_materials_transmission";
/**
 * [Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_materials_transmission/README.md)
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
var KHR_materials_transmission = /** @class */ (function () {
    /**
     * @internal
     */
    function KHR_materials_transmission(loader) {
        /**
         * The name of this extension.
         */
        this.name = NAME;
        /**
         * Defines a number that determines the order the extensions are applied.
         */
        this.order = 175;
        this._loader = loader;
        this.enabled = this._loader.isExtensionUsed(NAME);
        if (this.enabled) {
            loader.parent.transparencyAsCoverage = true;
        }
    }
    /** @internal */
    KHR_materials_transmission.prototype.dispose = function () {
        this._loader = null;
    };
    /**
     * @internal
     */
    KHR_materials_transmission.prototype.loadMaterialPropertiesAsync = function (context, material, babylonMaterial) {
        var _this = this;
        return _glTFLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoader.LoadExtensionAsync(context, material, this.name, function (extensionContext, extension) {
            var promises = new Array();
            promises.push(_this._loader.loadMaterialBasePropertiesAsync(context, material, babylonMaterial));
            promises.push(_this._loader.loadMaterialPropertiesAsync(context, material, babylonMaterial));
            promises.push(_this._loadTransparentPropertiesAsync(extensionContext, material, babylonMaterial, extension));
            return Promise.all(promises).then(function () { });
        });
    };
    KHR_materials_transmission.prototype._loadTransparentPropertiesAsync = function (context, material, babylonMaterial, extension) {
        var _a, _b;
        if (!(babylonMaterial instanceof babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_0__.PBRMaterial)) {
            throw new Error("".concat(context, ": Material type not supported"));
        }
        var pbrMaterial = babylonMaterial;
        // Enables "refraction" texture which represents transmitted light.
        pbrMaterial.subSurface.isRefractionEnabled = true;
        // Since this extension models thin-surface transmission only, we must make IOR = 1.0
        pbrMaterial.subSurface.volumeIndexOfRefraction = 1.0;
        // Albedo colour will tint transmission.
        pbrMaterial.subSurface.useAlbedoToTintRefraction = true;
        if (extension.transmissionFactor !== undefined) {
            pbrMaterial.subSurface.refractionIntensity = extension.transmissionFactor;
            var scene = pbrMaterial.getScene();
            if (pbrMaterial.subSurface.refractionIntensity && !scene._transmissionHelper) {
                new TransmissionHelper({}, pbrMaterial.getScene());
            }
            else if (pbrMaterial.subSurface.refractionIntensity && !((_a = scene._transmissionHelper) === null || _a === void 0 ? void 0 : _a._isRenderTargetValid())) {
                // If the render target is not valid, recreate it.
                (_b = scene._transmissionHelper) === null || _b === void 0 ? void 0 : _b._setupRenderTargets();
            }
        }
        else {
            pbrMaterial.subSurface.refractionIntensity = 0.0;
            pbrMaterial.subSurface.isRefractionEnabled = false;
            return Promise.resolve();
        }
        pbrMaterial.subSurface.minimumThickness = 0.0;
        pbrMaterial.subSurface.maximumThickness = 0.0;
        if (extension.transmissionTexture) {
            extension.transmissionTexture.nonColorData = true;
            return this._loader.loadTextureInfoAsync("".concat(context, "/transmissionTexture"), extension.transmissionTexture, undefined).then(function (texture) {
                pbrMaterial.subSurface.refractionIntensityTexture = texture;
                pbrMaterial.subSurface.useGltfStyleTextures = true;
            });
        }
        else {
            return Promise.resolve();
        }
    };
    return KHR_materials_transmission;
}());

_glTFLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoader.RegisterExtension(NAME, function (loader) { return new KHR_materials_transmission(loader); });


/***/ }),

/***/ "../../../dev/loaders/src/glTF/2.0/Extensions/KHR_materials_unlit.ts":
/*!***************************************************************************!*\
  !*** ../../../dev/loaders/src/glTF/2.0/Extensions/KHR_materials_unlit.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KHR_materials_unlit: () => (/* binding */ KHR_materials_unlit)
/* harmony export */ });
/* harmony import */ var babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Materials/PBR/pbrMaterial */ "babylonjs/Misc/observable");
/* harmony import */ var babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _glTFLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../glTFLoader */ "../../../dev/loaders/src/glTF/2.0/glTFLoader.ts");



var NAME = "KHR_materials_unlit";
/**
 * [Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_materials_unlit/README.md)
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
var KHR_materials_unlit = /** @class */ (function () {
    /**
     * @internal
     */
    function KHR_materials_unlit(loader) {
        /**
         * The name of this extension.
         */
        this.name = NAME;
        /**
         * Defines a number that determines the order the extensions are applied.
         */
        this.order = 210;
        this._loader = loader;
        this.enabled = this._loader.isExtensionUsed(NAME);
    }
    /** @internal */
    KHR_materials_unlit.prototype.dispose = function () {
        this._loader = null;
    };
    /**
     * @internal
     */
    KHR_materials_unlit.prototype.loadMaterialPropertiesAsync = function (context, material, babylonMaterial) {
        var _this = this;
        return _glTFLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoader.LoadExtensionAsync(context, material, this.name, function () {
            return _this._loadUnlitPropertiesAsync(context, material, babylonMaterial);
        });
    };
    KHR_materials_unlit.prototype._loadUnlitPropertiesAsync = function (context, material, babylonMaterial) {
        if (!(babylonMaterial instanceof babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.PBRMaterial)) {
            throw new Error("".concat(context, ": Material type not supported"));
        }
        var promises = new Array();
        babylonMaterial.unlit = true;
        var properties = material.pbrMetallicRoughness;
        if (properties) {
            if (properties.baseColorFactor) {
                babylonMaterial.albedoColor = babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Color3.FromArray(properties.baseColorFactor);
                babylonMaterial.alpha = properties.baseColorFactor[3];
            }
            else {
                babylonMaterial.albedoColor = babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Color3.White();
            }
            if (properties.baseColorTexture) {
                promises.push(this._loader.loadTextureInfoAsync("".concat(context, "/baseColorTexture"), properties.baseColorTexture, function (texture) {
                    texture.name = "".concat(babylonMaterial.name, " (Base Color)");
                    babylonMaterial.albedoTexture = texture;
                }));
            }
        }
        if (material.doubleSided) {
            babylonMaterial.backFaceCulling = false;
            babylonMaterial.twoSidedLighting = true;
        }
        this._loader.loadMaterialAlphaProperties(context, material, babylonMaterial);
        return Promise.all(promises).then(function () { });
    };
    return KHR_materials_unlit;
}());

_glTFLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoader.RegisterExtension(NAME, function (loader) { return new KHR_materials_unlit(loader); });


/***/ }),

/***/ "../../../dev/loaders/src/glTF/2.0/Extensions/KHR_materials_variants.ts":
/*!******************************************************************************!*\
  !*** ../../../dev/loaders/src/glTF/2.0/Extensions/KHR_materials_variants.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KHR_materials_variants: () => (/* binding */ KHR_materials_variants)
/* harmony export */ });
/* harmony import */ var _glTFLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../glTFLoader */ "../../../dev/loaders/src/glTF/2.0/glTFLoader.ts");
/* harmony import */ var babylonjs_Meshes_mesh__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs/Meshes/mesh */ "babylonjs/Misc/observable");
/* harmony import */ var babylonjs_Meshes_mesh__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Meshes_mesh__WEBPACK_IMPORTED_MODULE_1__);


var NAME = "KHR_materials_variants";
/**
 * [Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_materials_variants/README.md)
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
var KHR_materials_variants = /** @class */ (function () {
    /**
     * @internal
     */
    function KHR_materials_variants(loader) {
        /**
         * The name of this extension.
         */
        this.name = NAME;
        this._loader = loader;
        this.enabled = this._loader.isExtensionUsed(NAME);
    }
    /** @internal */
    KHR_materials_variants.prototype.dispose = function () {
        this._loader = null;
    };
    /**
     * Gets the list of available variant names for this asset.
     * @param rootMesh The glTF root mesh
     * @returns the list of all the variant names for this model
     */
    KHR_materials_variants.GetAvailableVariants = function (rootMesh) {
        var extensionMetadata = this._GetExtensionMetadata(rootMesh);
        if (!extensionMetadata) {
            return [];
        }
        return Object.keys(extensionMetadata.variants);
    };
    /**
     * Gets the list of available variant names for this asset.
     * @param rootMesh The glTF root mesh
     * @returns the list of all the variant names for this model
     */
    KHR_materials_variants.prototype.getAvailableVariants = function (rootMesh) {
        return KHR_materials_variants.GetAvailableVariants(rootMesh);
    };
    /**
     * Select a variant given a variant name or a list of variant names.
     * @param rootMesh The glTF root mesh
     * @param variantName The variant name(s) to select.
     */
    KHR_materials_variants.SelectVariant = function (rootMesh, variantName) {
        var extensionMetadata = this._GetExtensionMetadata(rootMesh);
        if (!extensionMetadata) {
            throw new Error("Cannot select variant on a glTF mesh that does not have the ".concat(NAME, " extension"));
        }
        var select = function (variantName) {
            var entries = extensionMetadata.variants[variantName];
            if (entries) {
                for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
                    var entry = entries_1[_i];
                    entry.mesh.material = entry.material;
                }
            }
        };
        if (variantName instanceof Array) {
            for (var _i = 0, variantName_1 = variantName; _i < variantName_1.length; _i++) {
                var name_1 = variantName_1[_i];
                select(name_1);
            }
        }
        else {
            select(variantName);
        }
        extensionMetadata.lastSelected = variantName;
    };
    /**
     * Select a variant given a variant name or a list of variant names.
     * @param rootMesh The glTF root mesh
     * @param variantName The variant name(s) to select.
     */
    KHR_materials_variants.prototype.selectVariant = function (rootMesh, variantName) {
        return KHR_materials_variants.SelectVariant(rootMesh, variantName);
    };
    /**
     * Reset back to the original before selecting a variant.
     * @param rootMesh The glTF root mesh
     */
    KHR_materials_variants.Reset = function (rootMesh) {
        var extensionMetadata = this._GetExtensionMetadata(rootMesh);
        if (!extensionMetadata) {
            throw new Error("Cannot reset on a glTF mesh that does not have the ".concat(NAME, " extension"));
        }
        for (var _i = 0, _a = extensionMetadata.original; _i < _a.length; _i++) {
            var entry = _a[_i];
            entry.mesh.material = entry.material;
        }
        extensionMetadata.lastSelected = null;
    };
    /**
     * Reset back to the original before selecting a variant.
     * @param rootMesh The glTF root mesh
     */
    KHR_materials_variants.prototype.reset = function (rootMesh) {
        return KHR_materials_variants.Reset(rootMesh);
    };
    /**
     * Gets the last selected variant name(s) or null if original.
     * @param rootMesh The glTF root mesh
     * @returns The selected variant name(s).
     */
    KHR_materials_variants.GetLastSelectedVariant = function (rootMesh) {
        var extensionMetadata = this._GetExtensionMetadata(rootMesh);
        if (!extensionMetadata) {
            throw new Error("Cannot get the last selected variant on a glTF mesh that does not have the ".concat(NAME, " extension"));
        }
        return extensionMetadata.lastSelected;
    };
    /**
     * Gets the last selected variant name(s) or null if original.
     * @param rootMesh The glTF root mesh
     * @returns The selected variant name(s).
     */
    KHR_materials_variants.prototype.getLastSelectedVariant = function (rootMesh) {
        return KHR_materials_variants.GetLastSelectedVariant(rootMesh);
    };
    KHR_materials_variants._GetExtensionMetadata = function (rootMesh) {
        var _a, _b;
        return ((_b = (_a = rootMesh === null || rootMesh === void 0 ? void 0 : rootMesh._internalMetadata) === null || _a === void 0 ? void 0 : _a.gltf) === null || _b === void 0 ? void 0 : _b[NAME]) || null;
    };
    /** @internal */
    KHR_materials_variants.prototype.onLoading = function () {
        var extensions = this._loader.gltf.extensions;
        if (extensions && extensions[this.name]) {
            var extension = extensions[this.name];
            this._variants = extension.variants;
        }
    };
    /**
     * @internal
     */
    KHR_materials_variants.prototype._loadMeshPrimitiveAsync = function (context, name, node, mesh, primitive, assign) {
        var _this = this;
        return _glTFLoader__WEBPACK_IMPORTED_MODULE_0__.GLTFLoader.LoadExtensionAsync(context, primitive, this.name, function (extensionContext, extension) {
            var promises = new Array();
            promises.push(_this._loader._loadMeshPrimitiveAsync(context, name, node, mesh, primitive, function (babylonMesh) {
                assign(babylonMesh);
                if (babylonMesh instanceof babylonjs_Meshes_mesh__WEBPACK_IMPORTED_MODULE_1__.Mesh) {
                    var babylonDrawMode = _glTFLoader__WEBPACK_IMPORTED_MODULE_0__.GLTFLoader._GetDrawMode(context, primitive.mode);
                    var root_1 = _this._loader.rootBabylonMesh;
                    var metadata = root_1 ? (root_1._internalMetadata = root_1._internalMetadata || {}) : {};
                    var gltf = (metadata.gltf = metadata.gltf || {});
                    var extensionMetadata_1 = (gltf[NAME] = gltf[NAME] || { lastSelected: null, original: [], variants: {} });
                    // Store the original material.
                    extensionMetadata_1.original.push({ mesh: babylonMesh, material: babylonMesh.material });
                    var _loop_1 = function (mappingIndex) {
                        var mapping = extension.mappings[mappingIndex];
                        var material = _glTFLoader__WEBPACK_IMPORTED_MODULE_0__.ArrayItem.Get("".concat(extensionContext, "/mappings/").concat(mappingIndex, "/material"), _this._loader.gltf.materials, mapping.material);
                        promises.push(_this._loader._loadMaterialAsync("#/materials/".concat(mapping.material), material, babylonMesh, babylonDrawMode, function (babylonMaterial) {
                            var _loop_2 = function (mappingVariantIndex) {
                                var variantIndex = mapping.variants[mappingVariantIndex];
                                var variant = _glTFLoader__WEBPACK_IMPORTED_MODULE_0__.ArrayItem.Get("/extensions/".concat(NAME, "/variants/").concat(variantIndex), _this._variants, variantIndex);
                                extensionMetadata_1.variants[variant.name] = extensionMetadata_1.variants[variant.name] || [];
                                extensionMetadata_1.variants[variant.name].push({
                                    mesh: babylonMesh,
                                    material: babylonMaterial,
                                });
                                // Replace the target when original mesh is cloned
                                babylonMesh.onClonedObservable.add(function (newOne) {
                                    var newMesh = newOne;
                                    var metadata = null;
                                    var newRoot = newMesh;
                                    // Find root to get medata
                                    do {
                                        newRoot = newRoot.parent;
                                        if (!newRoot) {
                                            return;
                                        }
                                        metadata = KHR_materials_variants._GetExtensionMetadata(newRoot);
                                    } while (metadata === null);
                                    // Need to clone the metadata on the root (first time only)
                                    if (root_1 && metadata === KHR_materials_variants._GetExtensionMetadata(root_1)) {
                                        // Copy main metadata
                                        newRoot._internalMetadata = {};
                                        for (var key in root_1._internalMetadata) {
                                            newRoot._internalMetadata[key] = root_1._internalMetadata[key];
                                        }
                                        // Copy the gltf metadata
                                        newRoot._internalMetadata.gltf = [];
                                        for (var key in root_1._internalMetadata.gltf) {
                                            newRoot._internalMetadata.gltf[key] = root_1._internalMetadata.gltf[key];
                                        }
                                        // Duplicate the extension specific metadata
                                        newRoot._internalMetadata.gltf[NAME] = { lastSelected: null, original: [], variants: {} };
                                        for (var _i = 0, _a = metadata.original; _i < _a.length; _i++) {
                                            var original = _a[_i];
                                            newRoot._internalMetadata.gltf[NAME].original.push({
                                                mesh: original.mesh,
                                                material: original.material,
                                            });
                                        }
                                        for (var key in metadata.variants) {
                                            if (Object.prototype.hasOwnProperty.call(metadata.variants, key)) {
                                                newRoot._internalMetadata.gltf[NAME].variants[key] = [];
                                                for (var _b = 0, _c = metadata.variants[key]; _b < _c.length; _b++) {
                                                    var variantEntry = _c[_b];
                                                    newRoot._internalMetadata.gltf[NAME].variants[key].push({
                                                        mesh: variantEntry.mesh,
                                                        material: variantEntry.material,
                                                    });
                                                }
                                            }
                                        }
                                        metadata = newRoot._internalMetadata.gltf[NAME];
                                    }
                                    // Relocate
                                    for (var _d = 0, _e = metadata.original; _d < _e.length; _d++) {
                                        var target = _e[_d];
                                        if (target.mesh === babylonMesh) {
                                            target.mesh = newMesh;
                                        }
                                    }
                                    for (var _f = 0, _g = metadata.variants[variant.name]; _f < _g.length; _f++) {
                                        var target = _g[_f];
                                        if (target.mesh === babylonMesh) {
                                            target.mesh = newMesh;
                                        }
                                    }
                                });
                            };
                            for (var mappingVariantIndex = 0; mappingVariantIndex < mapping.variants.length; ++mappingVariantIndex) {
                                _loop_2(mappingVariantIndex);
                            }
                        }));
                    };
                    // For each mapping, look at the variants and make a new entry for them.
                    for (var mappingIndex = 0; mappingIndex < extension.mappings.length; ++mappingIndex) {
                        _loop_1(mappingIndex);
                    }
                }
            }));
            return Promise.all(promises).then(function (_a) {
                var babylonMesh = _a[0];
                return babylonMesh;
            });
        });
    };
    return KHR_materials_variants;
}());

_glTFLoader__WEBPACK_IMPORTED_MODULE_0__.GLTFLoader.RegisterExtension(NAME, function (loader) { return new KHR_materials_variants(loader); });


/***/ }),

/***/ "../../../dev/loaders/src/glTF/2.0/Extensions/KHR_materials_volume.ts":
/*!****************************************************************************!*\
  !*** ../../../dev/loaders/src/glTF/2.0/Extensions/KHR_materials_volume.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KHR_materials_volume: () => (/* binding */ KHR_materials_volume)
/* harmony export */ });
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Materials/PBR/pbrMaterial */ "babylonjs/Misc/observable");
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _glTFLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../glTFLoader */ "../../../dev/loaders/src/glTF/2.0/glTFLoader.ts");


var NAME = "KHR_materials_volume";
/**
 * [Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_materials_volume/README.md)
 * @since 5.0.0
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
var KHR_materials_volume = /** @class */ (function () {
    /**
     * @internal
     */
    function KHR_materials_volume(loader) {
        /**
         * The name of this extension.
         */
        this.name = NAME;
        /**
         * Defines a number that determines the order the extensions are applied.
         */
        this.order = 173;
        this._loader = loader;
        this.enabled = this._loader.isExtensionUsed(NAME);
        if (this.enabled) {
            // We need to disable instance usage because the attenuation factor depends on the node scale of each individual mesh
            this._loader._disableInstancedMesh++;
        }
    }
    /** @internal */
    KHR_materials_volume.prototype.dispose = function () {
        if (this.enabled) {
            this._loader._disableInstancedMesh--;
        }
        this._loader = null;
    };
    /**
     * @internal
     */
    KHR_materials_volume.prototype.loadMaterialPropertiesAsync = function (context, material, babylonMaterial) {
        var _this = this;
        return _glTFLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoader.LoadExtensionAsync(context, material, this.name, function (extensionContext, extension) {
            var promises = new Array();
            promises.push(_this._loader.loadMaterialBasePropertiesAsync(context, material, babylonMaterial));
            promises.push(_this._loader.loadMaterialPropertiesAsync(context, material, babylonMaterial));
            promises.push(_this._loadVolumePropertiesAsync(extensionContext, material, babylonMaterial, extension));
            return Promise.all(promises).then(function () { });
        });
    };
    KHR_materials_volume.prototype._loadVolumePropertiesAsync = function (context, material, babylonMaterial, extension) {
        if (!(babylonMaterial instanceof babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_0__.PBRMaterial)) {
            throw new Error("".concat(context, ": Material type not supported"));
        }
        // If transparency isn't enabled already, this extension shouldn't do anything.
        // i.e. it requires either the KHR_materials_transmission or KHR_materials_translucency extensions.
        if ((!babylonMaterial.subSurface.isRefractionEnabled && !babylonMaterial.subSurface.isTranslucencyEnabled) || !extension.thicknessFactor) {
            return Promise.resolve();
        }
        // IOR in this extension only affects interior.
        babylonMaterial.subSurface.volumeIndexOfRefraction = babylonMaterial.indexOfRefraction;
        var attenuationDistance = extension.attenuationDistance !== undefined ? extension.attenuationDistance : Number.MAX_VALUE;
        babylonMaterial.subSurface.tintColorAtDistance = attenuationDistance;
        if (extension.attenuationColor !== undefined && extension.attenuationColor.length == 3) {
            babylonMaterial.subSurface.tintColor.copyFromFloats(extension.attenuationColor[0], extension.attenuationColor[1], extension.attenuationColor[2]);
        }
        babylonMaterial.subSurface.minimumThickness = 0.0;
        babylonMaterial.subSurface.maximumThickness = extension.thicknessFactor;
        babylonMaterial.subSurface.useThicknessAsDepth = true;
        if (extension.thicknessTexture) {
            extension.thicknessTexture.nonColorData = true;
            return this._loader.loadTextureInfoAsync("".concat(context, "/thicknessTexture"), extension.thicknessTexture).then(function (texture) {
                babylonMaterial.subSurface.thicknessTexture = texture;
                babylonMaterial.subSurface.useGltfStyleTextures = true;
            });
        }
        else {
            return Promise.resolve();
        }
    };
    return KHR_materials_volume;
}());

_glTFLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoader.RegisterExtension(NAME, function (loader) { return new KHR_materials_volume(loader); });


/***/ }),

/***/ "../../../dev/loaders/src/glTF/2.0/Extensions/KHR_mesh_quantization.ts":
/*!*****************************************************************************!*\
  !*** ../../../dev/loaders/src/glTF/2.0/Extensions/KHR_mesh_quantization.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KHR_mesh_quantization: () => (/* binding */ KHR_mesh_quantization)
/* harmony export */ });
/* harmony import */ var _glTFLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../glTFLoader */ "../../../dev/loaders/src/glTF/2.0/glTFLoader.ts");

var NAME = "KHR_mesh_quantization";
/**
 * [Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_mesh_quantization/README.md)
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
var KHR_mesh_quantization = /** @class */ (function () {
    /**
     * @internal
     */
    function KHR_mesh_quantization(loader) {
        /**
         * The name of this extension.
         */
        this.name = NAME;
        this.enabled = loader.isExtensionUsed(NAME);
    }
    /** @internal */
    KHR_mesh_quantization.prototype.dispose = function () { };
    return KHR_mesh_quantization;
}());

_glTFLoader__WEBPACK_IMPORTED_MODULE_0__.GLTFLoader.RegisterExtension(NAME, function (loader) { return new KHR_mesh_quantization(loader); });


/***/ }),

/***/ "../../../dev/loaders/src/glTF/2.0/Extensions/KHR_texture_basisu.ts":
/*!**************************************************************************!*\
  !*** ../../../dev/loaders/src/glTF/2.0/Extensions/KHR_texture_basisu.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KHR_texture_basisu: () => (/* binding */ KHR_texture_basisu)
/* harmony export */ });
/* harmony import */ var _glTFLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../glTFLoader */ "../../../dev/loaders/src/glTF/2.0/glTFLoader.ts");

var NAME = "KHR_texture_basisu";
/**
 * [Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_texture_basisu/README.md)
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
var KHR_texture_basisu = /** @class */ (function () {
    /**
     * @internal
     */
    function KHR_texture_basisu(loader) {
        /** The name of this extension. */
        this.name = NAME;
        this._loader = loader;
        this.enabled = loader.isExtensionUsed(NAME);
    }
    /** @internal */
    KHR_texture_basisu.prototype.dispose = function () {
        this._loader = null;
    };
    /**
     * @internal
     */
    KHR_texture_basisu.prototype._loadTextureAsync = function (context, texture, assign) {
        var _this = this;
        return _glTFLoader__WEBPACK_IMPORTED_MODULE_0__.GLTFLoader.LoadExtensionAsync(context, texture, this.name, function (extensionContext, extension) {
            var sampler = texture.sampler == undefined ? _glTFLoader__WEBPACK_IMPORTED_MODULE_0__.GLTFLoader.DefaultSampler : _glTFLoader__WEBPACK_IMPORTED_MODULE_0__.ArrayItem.Get("".concat(context, "/sampler"), _this._loader.gltf.samplers, texture.sampler);
            var image = _glTFLoader__WEBPACK_IMPORTED_MODULE_0__.ArrayItem.Get("".concat(extensionContext, "/source"), _this._loader.gltf.images, extension.source);
            return _this._loader._createTextureAsync(context, sampler, image, function (babylonTexture) {
                assign(babylonTexture);
            }, texture._textureInfo.nonColorData ? { useRGBAIfASTCBC7NotAvailableWhenUASTC: true } : undefined, !texture._textureInfo.nonColorData);
        });
    };
    return KHR_texture_basisu;
}());

_glTFLoader__WEBPACK_IMPORTED_MODULE_0__.GLTFLoader.RegisterExtension(NAME, function (loader) { return new KHR_texture_basisu(loader); });


/***/ }),

/***/ "../../../dev/loaders/src/glTF/2.0/Extensions/KHR_texture_transform.ts":
/*!*****************************************************************************!*\
  !*** ../../../dev/loaders/src/glTF/2.0/Extensions/KHR_texture_transform.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KHR_texture_transform: () => (/* binding */ KHR_texture_transform)
/* harmony export */ });
/* harmony import */ var babylonjs_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Materials/Textures/texture */ "babylonjs/Misc/observable");
/* harmony import */ var babylonjs_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _glTFLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../glTFLoader */ "../../../dev/loaders/src/glTF/2.0/glTFLoader.ts");


var NAME = "KHR_texture_transform";
/**
 * [Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_texture_transform/README.md)
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
var KHR_texture_transform = /** @class */ (function () {
    /**
     * @internal
     */
    function KHR_texture_transform(loader) {
        /**
         * The name of this extension.
         */
        this.name = NAME;
        this._loader = loader;
        this.enabled = this._loader.isExtensionUsed(NAME);
    }
    /** @internal */
    KHR_texture_transform.prototype.dispose = function () {
        this._loader = null;
    };
    /**
     * @internal
     */
    KHR_texture_transform.prototype.loadTextureInfoAsync = function (context, textureInfo, assign) {
        var _this = this;
        return _glTFLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoader.LoadExtensionAsync(context, textureInfo, this.name, function (extensionContext, extension) {
            return _this._loader.loadTextureInfoAsync(context, textureInfo, function (babylonTexture) {
                if (!(babylonTexture instanceof babylonjs_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_0__.Texture)) {
                    throw new Error("".concat(extensionContext, ": Texture type not supported"));
                }
                if (extension.offset) {
                    babylonTexture.uOffset = extension.offset[0];
                    babylonTexture.vOffset = extension.offset[1];
                }
                // Always rotate around the origin.
                babylonTexture.uRotationCenter = 0;
                babylonTexture.vRotationCenter = 0;
                if (extension.rotation) {
                    babylonTexture.wAng = -extension.rotation;
                }
                if (extension.scale) {
                    babylonTexture.uScale = extension.scale[0];
                    babylonTexture.vScale = extension.scale[1];
                }
                if (extension.texCoord != undefined) {
                    babylonTexture.coordinatesIndex = extension.texCoord;
                }
                assign(babylonTexture);
            });
        });
    };
    return KHR_texture_transform;
}());

_glTFLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoader.RegisterExtension(NAME, function (loader) { return new KHR_texture_transform(loader); });


/***/ }),

/***/ "../../../dev/loaders/src/glTF/2.0/Extensions/KHR_xmp_json_ld.ts":
/*!***********************************************************************!*\
  !*** ../../../dev/loaders/src/glTF/2.0/Extensions/KHR_xmp_json_ld.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KHR_xmp_json_ld: () => (/* binding */ KHR_xmp_json_ld)
/* harmony export */ });
/* harmony import */ var _glTFLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../glTFLoader */ "../../../dev/loaders/src/glTF/2.0/glTFLoader.ts");

var NAME = "KHR_xmp_json_ld";
/**
 * [Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_xmp_json_ld/README.md)
 * @since 5.0.0
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
var KHR_xmp_json_ld = /** @class */ (function () {
    /**
     * @internal
     */
    function KHR_xmp_json_ld(loader) {
        /**
         * The name of this extension.
         */
        this.name = NAME;
        /**
         * Defines a number that determines the order the extensions are applied.
         */
        this.order = 100;
        this._loader = loader;
        this.enabled = this._loader.isExtensionUsed(NAME);
    }
    /** @internal */
    KHR_xmp_json_ld.prototype.dispose = function () {
        this._loader = null;
    };
    /**
     * Called after the loader state changes to LOADING.
     */
    KHR_xmp_json_ld.prototype.onLoading = function () {
        var _a, _b, _c;
        if (this._loader.rootBabylonMesh === null) {
            return;
        }
        var xmp_gltf = (_a = this._loader.gltf.extensions) === null || _a === void 0 ? void 0 : _a.KHR_xmp_json_ld;
        var xmp_node = (_c = (_b = this._loader.gltf.asset) === null || _b === void 0 ? void 0 : _b.extensions) === null || _c === void 0 ? void 0 : _c.KHR_xmp_json_ld;
        if (xmp_gltf && xmp_node) {
            var packet = +xmp_node.packet;
            if (xmp_gltf.packets && packet < xmp_gltf.packets.length) {
                this._loader.rootBabylonMesh.metadata = this._loader.rootBabylonMesh.metadata || {};
                this._loader.rootBabylonMesh.metadata.xmp = xmp_gltf.packets[packet];
            }
        }
    };
    return KHR_xmp_json_ld;
}());

_glTFLoader__WEBPACK_IMPORTED_MODULE_0__.GLTFLoader.RegisterExtension(NAME, function (loader) { return new KHR_xmp_json_ld(loader); });


/***/ }),

/***/ "../../../dev/loaders/src/glTF/2.0/Extensions/MSFT_audio_emitter.ts":
/*!**************************************************************************!*\
  !*** ../../../dev/loaders/src/glTF/2.0/Extensions/MSFT_audio_emitter.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MSFT_audio_emitter: () => (/* binding */ MSFT_audio_emitter)
/* harmony export */ });
/* harmony import */ var babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Audio/weightedsound */ "babylonjs/Misc/observable");
/* harmony import */ var babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _glTFLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../glTFLoader */ "../../../dev/loaders/src/glTF/2.0/glTFLoader.ts");






var NAME = "MSFT_audio_emitter";
/**
 * [Specification](https://github.com/najadojo/glTF/blob/MSFT_audio_emitter/extensions/2.0/Vendor/MSFT_audio_emitter/README.md)
 * !!! Experimental Extension Subject to Changes !!!
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
var MSFT_audio_emitter = /** @class */ (function () {
    /**
     * @internal
     */
    function MSFT_audio_emitter(loader) {
        /**
         * The name of this extension.
         */
        this.name = NAME;
        this._loader = loader;
        this.enabled = this._loader.isExtensionUsed(NAME);
    }
    /** @internal */
    MSFT_audio_emitter.prototype.dispose = function () {
        this._loader = null;
        this._clips = null;
        this._emitters = null;
    };
    /** @internal */
    MSFT_audio_emitter.prototype.onLoading = function () {
        var extensions = this._loader.gltf.extensions;
        if (extensions && extensions[this.name]) {
            var extension = extensions[this.name];
            this._clips = extension.clips;
            this._emitters = extension.emitters;
            _glTFLoader__WEBPACK_IMPORTED_MODULE_1__.ArrayItem.Assign(this._clips);
            _glTFLoader__WEBPACK_IMPORTED_MODULE_1__.ArrayItem.Assign(this._emitters);
        }
    };
    /**
     * @internal
     */
    MSFT_audio_emitter.prototype.loadSceneAsync = function (context, scene) {
        var _this = this;
        return _glTFLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoader.LoadExtensionAsync(context, scene, this.name, function (extensionContext, extension) {
            var promises = new Array();
            promises.push(_this._loader.loadSceneAsync(context, scene));
            for (var _i = 0, _a = extension.emitters; _i < _a.length; _i++) {
                var emitterIndex = _a[_i];
                var emitter = _glTFLoader__WEBPACK_IMPORTED_MODULE_1__.ArrayItem.Get("".concat(extensionContext, "/emitters"), _this._emitters, emitterIndex);
                if (emitter.refDistance != undefined ||
                    emitter.maxDistance != undefined ||
                    emitter.rolloffFactor != undefined ||
                    emitter.distanceModel != undefined ||
                    emitter.innerAngle != undefined ||
                    emitter.outerAngle != undefined) {
                    throw new Error("".concat(extensionContext, ": Direction or Distance properties are not allowed on emitters attached to a scene"));
                }
                promises.push(_this._loadEmitterAsync("".concat(extensionContext, "/emitters/").concat(emitter.index), emitter));
            }
            return Promise.all(promises).then(function () { });
        });
    };
    /**
     * @internal
     */
    MSFT_audio_emitter.prototype.loadNodeAsync = function (context, node, assign) {
        var _this = this;
        return _glTFLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoader.LoadExtensionAsync(context, node, this.name, function (extensionContext, extension) {
            var promises = new Array();
            return _this._loader
                .loadNodeAsync(extensionContext, node, function (babylonMesh) {
                var _loop_1 = function (emitterIndex) {
                    var emitter = _glTFLoader__WEBPACK_IMPORTED_MODULE_1__.ArrayItem.Get("".concat(extensionContext, "/emitters"), _this._emitters, emitterIndex);
                    promises.push(_this._loadEmitterAsync("".concat(extensionContext, "/emitters/").concat(emitter.index), emitter).then(function () {
                        for (var _i = 0, _a = emitter._babylonSounds; _i < _a.length; _i++) {
                            var sound = _a[_i];
                            sound.attachToMesh(babylonMesh);
                            if (emitter.innerAngle != undefined || emitter.outerAngle != undefined) {
                                sound.setLocalDirectionToMesh(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Forward());
                                sound.setDirectionalCone(2 * babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.ToDegrees(emitter.innerAngle == undefined ? Math.PI : emitter.innerAngle), 2 * babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.ToDegrees(emitter.outerAngle == undefined ? Math.PI : emitter.outerAngle), 0);
                            }
                        }
                    }));
                };
                for (var _i = 0, _a = extension.emitters; _i < _a.length; _i++) {
                    var emitterIndex = _a[_i];
                    _loop_1(emitterIndex);
                }
                assign(babylonMesh);
            })
                .then(function (babylonMesh) {
                return Promise.all(promises).then(function () {
                    return babylonMesh;
                });
            });
        });
    };
    /**
     * @internal
     */
    MSFT_audio_emitter.prototype.loadAnimationAsync = function (context, animation) {
        var _this = this;
        return _glTFLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoader.LoadExtensionAsync(context, animation, this.name, function (extensionContext, extension) {
            return _this._loader.loadAnimationAsync(context, animation).then(function (babylonAnimationGroup) {
                var promises = new Array();
                _glTFLoader__WEBPACK_IMPORTED_MODULE_1__.ArrayItem.Assign(extension.events);
                for (var _i = 0, _a = extension.events; _i < _a.length; _i++) {
                    var event_1 = _a[_i];
                    promises.push(_this._loadAnimationEventAsync("".concat(extensionContext, "/events/").concat(event_1.index), context, animation, event_1, babylonAnimationGroup));
                }
                return Promise.all(promises).then(function () {
                    return babylonAnimationGroup;
                });
            });
        });
    };
    MSFT_audio_emitter.prototype._loadClipAsync = function (context, clip) {
        if (clip._objectURL) {
            return clip._objectURL;
        }
        var promise;
        if (clip.uri) {
            promise = this._loader.loadUriAsync(context, clip, clip.uri);
        }
        else {
            var bufferView = _glTFLoader__WEBPACK_IMPORTED_MODULE_1__.ArrayItem.Get("".concat(context, "/bufferView"), this._loader.gltf.bufferViews, clip.bufferView);
            promise = this._loader.loadBufferViewAsync("/bufferViews/".concat(bufferView.index), bufferView);
        }
        clip._objectURL = promise.then(function (data) {
            return URL.createObjectURL(new Blob([data], { type: clip.mimeType }));
        });
        return clip._objectURL;
    };
    MSFT_audio_emitter.prototype._loadEmitterAsync = function (context, emitter) {
        var _this = this;
        emitter._babylonSounds = emitter._babylonSounds || [];
        if (!emitter._babylonData) {
            var clipPromises = new Array();
            var name_1 = emitter.name || "emitter".concat(emitter.index);
            var options_1 = {
                loop: false,
                autoplay: false,
                volume: emitter.volume == undefined ? 1 : emitter.volume,
            };
            var _loop_2 = function (i) {
                var clipContext = "/extensions/".concat(this_1.name, "/clips");
                var clip = _glTFLoader__WEBPACK_IMPORTED_MODULE_1__.ArrayItem.Get(clipContext, this_1._clips, emitter.clips[i].clip);
                clipPromises.push(this_1._loadClipAsync("".concat(clipContext, "/").concat(emitter.clips[i].clip), clip).then(function (objectURL) {
                    var sound = (emitter._babylonSounds[i] = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Sound(name_1, objectURL, _this._loader.babylonScene, null, options_1));
                    sound.refDistance = emitter.refDistance || 1;
                    sound.maxDistance = emitter.maxDistance || 256;
                    sound.rolloffFactor = emitter.rolloffFactor || 1;
                    sound.distanceModel = emitter.distanceModel || "exponential";
                }));
            };
            var this_1 = this;
            for (var i = 0; i < emitter.clips.length; i++) {
                _loop_2(i);
            }
            var promise = Promise.all(clipPromises).then(function () {
                var weights = emitter.clips.map(function (clip) {
                    return clip.weight || 1;
                });
                var weightedSound = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.WeightedSound(emitter.loop || false, emitter._babylonSounds, weights);
                if (emitter.innerAngle) {
                    weightedSound.directionalConeInnerAngle = 2 * babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.ToDegrees(emitter.innerAngle);
                }
                if (emitter.outerAngle) {
                    weightedSound.directionalConeOuterAngle = 2 * babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.ToDegrees(emitter.outerAngle);
                }
                if (emitter.volume) {
                    weightedSound.volume = emitter.volume;
                }
                emitter._babylonData.sound = weightedSound;
            });
            emitter._babylonData = {
                loaded: promise,
            };
        }
        return emitter._babylonData.loaded;
    };
    MSFT_audio_emitter.prototype._getEventAction = function (context, sound, action, time, startOffset) {
        switch (action) {
            case "play" /* IMSFTAudioEmitter_AnimationEventAction.play */: {
                return function (currentFrame) {
                    var frameOffset = (startOffset || 0) + (currentFrame - time);
                    sound.play(frameOffset);
                };
            }
            case "stop" /* IMSFTAudioEmitter_AnimationEventAction.stop */: {
                return function () {
                    sound.stop();
                };
            }
            case "pause" /* IMSFTAudioEmitter_AnimationEventAction.pause */: {
                return function () {
                    sound.pause();
                };
            }
            default: {
                throw new Error("".concat(context, ": Unsupported action ").concat(action));
            }
        }
    };
    MSFT_audio_emitter.prototype._loadAnimationEventAsync = function (context, animationContext, animation, event, babylonAnimationGroup) {
        var _this = this;
        if (babylonAnimationGroup.targetedAnimations.length == 0) {
            return Promise.resolve();
        }
        var babylonAnimation = babylonAnimationGroup.targetedAnimations[0];
        var emitterIndex = event.emitter;
        var emitter = _glTFLoader__WEBPACK_IMPORTED_MODULE_1__.ArrayItem.Get("/extensions/".concat(this.name, "/emitters"), this._emitters, emitterIndex);
        return this._loadEmitterAsync(context, emitter).then(function () {
            var sound = emitter._babylonData.sound;
            if (sound) {
                var babylonAnimationEvent = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.AnimationEvent(event.time, _this._getEventAction(context, sound, event.action, event.time, event.startOffset));
                babylonAnimation.animation.addEvent(babylonAnimationEvent);
                // Make sure all started audio stops when this animation is terminated.
                babylonAnimationGroup.onAnimationGroupEndObservable.add(function () {
                    sound.stop();
                });
                babylonAnimationGroup.onAnimationGroupPauseObservable.add(function () {
                    sound.pause();
                });
            }
        });
    };
    return MSFT_audio_emitter;
}());

_glTFLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoader.RegisterExtension(NAME, function (loader) { return new MSFT_audio_emitter(loader); });


/***/ }),

/***/ "../../../dev/loaders/src/glTF/2.0/Extensions/MSFT_lod.ts":
/*!****************************************************************!*\
  !*** ../../../dev/loaders/src/glTF/2.0/Extensions/MSFT_lod.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MSFT_lod: () => (/* binding */ MSFT_lod)
/* harmony export */ });
/* harmony import */ var babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Misc/deferred */ "babylonjs/Misc/observable");
/* harmony import */ var babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _glTFLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../glTFLoader */ "../../../dev/loaders/src/glTF/2.0/glTFLoader.ts");



var NAME = "MSFT_lod";
/**
 * [Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Vendor/MSFT_lod/README.md)
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
var MSFT_lod = /** @class */ (function () {
    /**
     * @internal
     */
    function MSFT_lod(loader) {
        /**
         * The name of this extension.
         */
        this.name = NAME;
        /**
         * Defines a number that determines the order the extensions are applied.
         */
        this.order = 100;
        /**
         * Maximum number of LODs to load, starting from the lowest LOD.
         */
        this.maxLODsToLoad = 10;
        /**
         * Observable raised when all node LODs of one level are loaded.
         * The event data is the index of the loaded LOD starting from zero.
         * Dispose the loader to cancel the loading of the next level of LODs.
         */
        this.onNodeLODsLoadedObservable = new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        /**
         * Observable raised when all material LODs of one level are loaded.
         * The event data is the index of the loaded LOD starting from zero.
         * Dispose the loader to cancel the loading of the next level of LODs.
         */
        this.onMaterialLODsLoadedObservable = new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        this._bufferLODs = new Array();
        this._nodeIndexLOD = null;
        this._nodeSignalLODs = new Array();
        this._nodePromiseLODs = new Array();
        this._nodeBufferLODs = new Array();
        this._materialIndexLOD = null;
        this._materialSignalLODs = new Array();
        this._materialPromiseLODs = new Array();
        this._materialBufferLODs = new Array();
        this._loader = loader;
        this.enabled = this._loader.isExtensionUsed(NAME);
    }
    /** @internal */
    MSFT_lod.prototype.dispose = function () {
        this._loader = null;
        this._nodeIndexLOD = null;
        this._nodeSignalLODs.length = 0;
        this._nodePromiseLODs.length = 0;
        this._nodeBufferLODs.length = 0;
        this._materialIndexLOD = null;
        this._materialSignalLODs.length = 0;
        this._materialPromiseLODs.length = 0;
        this._materialBufferLODs.length = 0;
        this.onMaterialLODsLoadedObservable.clear();
        this.onNodeLODsLoadedObservable.clear();
    };
    /** @internal */
    MSFT_lod.prototype.onReady = function () {
        var _this = this;
        var _loop_1 = function (indexLOD) {
            var promise = Promise.all(this_1._nodePromiseLODs[indexLOD]).then(function () {
                if (indexLOD !== 0) {
                    _this._loader.endPerformanceCounter("Node LOD ".concat(indexLOD));
                    _this._loader.log("Loaded node LOD ".concat(indexLOD));
                }
                _this.onNodeLODsLoadedObservable.notifyObservers(indexLOD);
                if (indexLOD !== _this._nodePromiseLODs.length - 1) {
                    _this._loader.startPerformanceCounter("Node LOD ".concat(indexLOD + 1));
                    _this._loadBufferLOD(_this._nodeBufferLODs, indexLOD + 1);
                    if (_this._nodeSignalLODs[indexLOD]) {
                        _this._nodeSignalLODs[indexLOD].resolve();
                    }
                }
            });
            this_1._loader._completePromises.push(promise);
        };
        var this_1 = this;
        for (var indexLOD = 0; indexLOD < this._nodePromiseLODs.length; indexLOD++) {
            _loop_1(indexLOD);
        }
        var _loop_2 = function (indexLOD) {
            var promise = Promise.all(this_2._materialPromiseLODs[indexLOD]).then(function () {
                if (indexLOD !== 0) {
                    _this._loader.endPerformanceCounter("Material LOD ".concat(indexLOD));
                    _this._loader.log("Loaded material LOD ".concat(indexLOD));
                }
                _this.onMaterialLODsLoadedObservable.notifyObservers(indexLOD);
                if (indexLOD !== _this._materialPromiseLODs.length - 1) {
                    _this._loader.startPerformanceCounter("Material LOD ".concat(indexLOD + 1));
                    _this._loadBufferLOD(_this._materialBufferLODs, indexLOD + 1);
                    if (_this._materialSignalLODs[indexLOD]) {
                        _this._materialSignalLODs[indexLOD].resolve();
                    }
                }
            });
            this_2._loader._completePromises.push(promise);
        };
        var this_2 = this;
        for (var indexLOD = 0; indexLOD < this._materialPromiseLODs.length; indexLOD++) {
            _loop_2(indexLOD);
        }
    };
    /**
     * @internal
     */
    MSFT_lod.prototype.loadSceneAsync = function (context, scene) {
        var promise = this._loader.loadSceneAsync(context, scene);
        this._loadBufferLOD(this._bufferLODs, 0);
        return promise;
    };
    /**
     * @internal
     */
    MSFT_lod.prototype.loadNodeAsync = function (context, node, assign) {
        var _this = this;
        return _glTFLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoader.LoadExtensionAsync(context, node, this.name, function (extensionContext, extension) {
            var firstPromise;
            var nodeLODs = _this._getLODs(extensionContext, node, _this._loader.gltf.nodes, extension.ids);
            _this._loader.logOpen("".concat(extensionContext));
            var _loop_3 = function (indexLOD) {
                var nodeLOD = nodeLODs[indexLOD];
                if (indexLOD !== 0) {
                    _this._nodeIndexLOD = indexLOD;
                    _this._nodeSignalLODs[indexLOD] = _this._nodeSignalLODs[indexLOD] || new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Deferred();
                }
                var assignWrap = function (babylonTransformNode) {
                    assign(babylonTransformNode);
                    babylonTransformNode.setEnabled(false);
                };
                var promise = _this._loader.loadNodeAsync("/nodes/".concat(nodeLOD.index), nodeLOD, assignWrap).then(function (babylonMesh) {
                    if (indexLOD !== 0) {
                        // TODO: should not rely on _babylonTransformNode
                        var previousNodeLOD = nodeLODs[indexLOD - 1];
                        if (previousNodeLOD._babylonTransformNode) {
                            _this._disposeTransformNode(previousNodeLOD._babylonTransformNode);
                            delete previousNodeLOD._babylonTransformNode;
                        }
                    }
                    babylonMesh.setEnabled(true);
                    return babylonMesh;
                });
                _this._nodePromiseLODs[indexLOD] = _this._nodePromiseLODs[indexLOD] || [];
                if (indexLOD === 0) {
                    firstPromise = promise;
                }
                else {
                    _this._nodeIndexLOD = null;
                    _this._nodePromiseLODs[indexLOD].push(promise);
                }
            };
            for (var indexLOD = 0; indexLOD < nodeLODs.length; indexLOD++) {
                _loop_3(indexLOD);
            }
            _this._loader.logClose();
            return firstPromise;
        });
    };
    /**
     * @internal
     */
    MSFT_lod.prototype._loadMaterialAsync = function (context, material, babylonMesh, babylonDrawMode, assign) {
        var _this = this;
        // Don't load material LODs if already loading a node LOD.
        if (this._nodeIndexLOD) {
            return null;
        }
        return _glTFLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoader.LoadExtensionAsync(context, material, this.name, function (extensionContext, extension) {
            var firstPromise;
            var materialLODs = _this._getLODs(extensionContext, material, _this._loader.gltf.materials, extension.ids);
            _this._loader.logOpen("".concat(extensionContext));
            var _loop_4 = function (indexLOD) {
                var materialLOD = materialLODs[indexLOD];
                if (indexLOD !== 0) {
                    _this._materialIndexLOD = indexLOD;
                }
                var promise = _this._loader
                    ._loadMaterialAsync("/materials/".concat(materialLOD.index), materialLOD, babylonMesh, babylonDrawMode, function (babylonMaterial) {
                    if (indexLOD === 0) {
                        assign(babylonMaterial);
                    }
                })
                    .then(function (babylonMaterial) {
                    if (indexLOD !== 0) {
                        assign(babylonMaterial);
                        // TODO: should not rely on _data
                        var previousDataLOD = materialLODs[indexLOD - 1]._data;
                        if (previousDataLOD[babylonDrawMode]) {
                            _this._disposeMaterials([previousDataLOD[babylonDrawMode].babylonMaterial]);
                            delete previousDataLOD[babylonDrawMode];
                        }
                    }
                    return babylonMaterial;
                });
                _this._materialPromiseLODs[indexLOD] = _this._materialPromiseLODs[indexLOD] || [];
                if (indexLOD === 0) {
                    firstPromise = promise;
                }
                else {
                    _this._materialIndexLOD = null;
                    _this._materialPromiseLODs[indexLOD].push(promise);
                }
            };
            for (var indexLOD = 0; indexLOD < materialLODs.length; indexLOD++) {
                _loop_4(indexLOD);
            }
            _this._loader.logClose();
            return firstPromise;
        });
    };
    /**
     * @internal
     */
    MSFT_lod.prototype._loadUriAsync = function (context, property, uri) {
        var _this = this;
        // Defer the loading of uris if loading a node or material LOD.
        if (this._nodeIndexLOD !== null) {
            this._loader.log("deferred");
            var previousIndexLOD = this._nodeIndexLOD - 1;
            this._nodeSignalLODs[previousIndexLOD] = this._nodeSignalLODs[previousIndexLOD] || new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Deferred();
            return this._nodeSignalLODs[this._nodeIndexLOD - 1].promise.then(function () {
                return _this._loader.loadUriAsync(context, property, uri);
            });
        }
        else if (this._materialIndexLOD !== null) {
            this._loader.log("deferred");
            var previousIndexLOD = this._materialIndexLOD - 1;
            this._materialSignalLODs[previousIndexLOD] = this._materialSignalLODs[previousIndexLOD] || new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Deferred();
            return this._materialSignalLODs[previousIndexLOD].promise.then(function () {
                return _this._loader.loadUriAsync(context, property, uri);
            });
        }
        return null;
    };
    /**
     * @internal
     */
    MSFT_lod.prototype.loadBufferAsync = function (context, buffer, byteOffset, byteLength) {
        if (this._loader.parent.useRangeRequests && !buffer.uri) {
            if (!this._loader.bin) {
                throw new Error("".concat(context, ": Uri is missing or the binary glTF is missing its binary chunk"));
            }
            var loadAsync = function (bufferLODs, indexLOD) {
                var start = byteOffset;
                var end = start + byteLength - 1;
                var bufferLOD = bufferLODs[indexLOD];
                if (bufferLOD) {
                    bufferLOD.start = Math.min(bufferLOD.start, start);
                    bufferLOD.end = Math.max(bufferLOD.end, end);
                }
                else {
                    bufferLOD = { start: start, end: end, loaded: new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Deferred() };
                    bufferLODs[indexLOD] = bufferLOD;
                }
                return bufferLOD.loaded.promise.then(function (data) {
                    return new Uint8Array(data.buffer, data.byteOffset + byteOffset - bufferLOD.start, byteLength);
                });
            };
            this._loader.log("deferred");
            if (this._nodeIndexLOD !== null) {
                return loadAsync(this._nodeBufferLODs, this._nodeIndexLOD);
            }
            else if (this._materialIndexLOD !== null) {
                return loadAsync(this._materialBufferLODs, this._materialIndexLOD);
            }
            else {
                return loadAsync(this._bufferLODs, 0);
            }
        }
        return null;
    };
    MSFT_lod.prototype._loadBufferLOD = function (bufferLODs, indexLOD) {
        var bufferLOD = bufferLODs[indexLOD];
        if (bufferLOD) {
            this._loader.log("Loading buffer range [".concat(bufferLOD.start, "-").concat(bufferLOD.end, "]"));
            this._loader.bin.readAsync(bufferLOD.start, bufferLOD.end - bufferLOD.start + 1).then(function (data) {
                bufferLOD.loaded.resolve(data);
            }, function (error) {
                bufferLOD.loaded.reject(error);
            });
        }
    };
    /**
     * Gets an array of LOD properties from lowest to highest.
     * @param context
     * @param property
     * @param array
     * @param ids
     */
    MSFT_lod.prototype._getLODs = function (context, property, array, ids) {
        if (this.maxLODsToLoad <= 0) {
            throw new Error("maxLODsToLoad must be greater than zero");
        }
        var properties = new Array();
        for (var i = ids.length - 1; i >= 0; i--) {
            properties.push(_glTFLoader__WEBPACK_IMPORTED_MODULE_1__.ArrayItem.Get("".concat(context, "/ids/").concat(ids[i]), array, ids[i]));
            if (properties.length === this.maxLODsToLoad) {
                return properties;
            }
        }
        properties.push(property);
        return properties;
    };
    MSFT_lod.prototype._disposeTransformNode = function (babylonTransformNode) {
        var _this = this;
        var babylonMaterials = new Array();
        var babylonMaterial = babylonTransformNode.material;
        if (babylonMaterial) {
            babylonMaterials.push(babylonMaterial);
        }
        for (var _i = 0, _a = babylonTransformNode.getChildMeshes(); _i < _a.length; _i++) {
            var babylonMesh = _a[_i];
            if (babylonMesh.material) {
                babylonMaterials.push(babylonMesh.material);
            }
        }
        babylonTransformNode.dispose();
        var babylonMaterialsToDispose = babylonMaterials.filter(function (babylonMaterial) { return _this._loader.babylonScene.meshes.every(function (mesh) { return mesh.material != babylonMaterial; }); });
        this._disposeMaterials(babylonMaterialsToDispose);
    };
    MSFT_lod.prototype._disposeMaterials = function (babylonMaterials) {
        var babylonTextures = {};
        for (var _i = 0, babylonMaterials_1 = babylonMaterials; _i < babylonMaterials_1.length; _i++) {
            var babylonMaterial = babylonMaterials_1[_i];
            for (var _a = 0, _b = babylonMaterial.getActiveTextures(); _a < _b.length; _a++) {
                var babylonTexture = _b[_a];
                babylonTextures[babylonTexture.uniqueId] = babylonTexture;
            }
            babylonMaterial.dispose();
        }
        for (var uniqueId in babylonTextures) {
            for (var _c = 0, _d = this._loader.babylonScene.materials; _c < _d.length; _c++) {
                var babylonMaterial = _d[_c];
                if (babylonMaterial.hasTexture(babylonTextures[uniqueId])) {
                    delete babylonTextures[uniqueId];
                }
            }
        }
        for (var uniqueId in babylonTextures) {
            babylonTextures[uniqueId].dispose();
        }
    };
    return MSFT_lod;
}());

_glTFLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoader.RegisterExtension(NAME, function (loader) { return new MSFT_lod(loader); });


/***/ }),

/***/ "../../../dev/loaders/src/glTF/2.0/Extensions/MSFT_minecraftMesh.ts":
/*!**************************************************************************!*\
  !*** ../../../dev/loaders/src/glTF/2.0/Extensions/MSFT_minecraftMesh.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MSFT_minecraftMesh: () => (/* binding */ MSFT_minecraftMesh)
/* harmony export */ });
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Materials/PBR/pbrMaterial */ "babylonjs/Misc/observable");
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _glTFLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../glTFLoader */ "../../../dev/loaders/src/glTF/2.0/glTFLoader.ts");


var NAME = "MSFT_minecraftMesh";
/** @internal */
// eslint-disable-next-line @typescript-eslint/naming-convention
var MSFT_minecraftMesh = /** @class */ (function () {
    /** @internal */
    function MSFT_minecraftMesh(loader) {
        /** @internal */
        this.name = NAME;
        this._loader = loader;
        this.enabled = this._loader.isExtensionUsed(NAME);
    }
    /** @internal */
    MSFT_minecraftMesh.prototype.dispose = function () {
        this._loader = null;
    };
    /** @internal */
    MSFT_minecraftMesh.prototype.loadMaterialPropertiesAsync = function (context, material, babylonMaterial) {
        var _this = this;
        return _glTFLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoader.LoadExtraAsync(context, material, this.name, function (extraContext, extra) {
            if (extra) {
                if (!(babylonMaterial instanceof babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_0__.PBRMaterial)) {
                    throw new Error("".concat(extraContext, ": Material type not supported"));
                }
                var promise = _this._loader.loadMaterialPropertiesAsync(context, material, babylonMaterial);
                if (babylonMaterial.needAlphaBlending()) {
                    babylonMaterial.forceDepthWrite = true;
                    babylonMaterial.separateCullingPass = true;
                }
                babylonMaterial.backFaceCulling = babylonMaterial.forceDepthWrite;
                babylonMaterial.twoSidedLighting = true;
                return promise;
            }
            return null;
        });
    };
    return MSFT_minecraftMesh;
}());

_glTFLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoader.RegisterExtension(NAME, function (loader) { return new MSFT_minecraftMesh(loader); });


/***/ }),

/***/ "../../../dev/loaders/src/glTF/2.0/Extensions/MSFT_sRGBFactors.ts":
/*!************************************************************************!*\
  !*** ../../../dev/loaders/src/glTF/2.0/Extensions/MSFT_sRGBFactors.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MSFT_sRGBFactors: () => (/* binding */ MSFT_sRGBFactors)
/* harmony export */ });
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Materials/PBR/pbrMaterial */ "babylonjs/Misc/observable");
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _glTFLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../glTFLoader */ "../../../dev/loaders/src/glTF/2.0/glTFLoader.ts");


var NAME = "MSFT_sRGBFactors";
/** @internal */
// eslint-disable-next-line @typescript-eslint/naming-convention
var MSFT_sRGBFactors = /** @class */ (function () {
    /** @internal */
    function MSFT_sRGBFactors(loader) {
        /** @internal */
        this.name = NAME;
        this._loader = loader;
        this.enabled = this._loader.isExtensionUsed(NAME);
    }
    /** @internal */
    MSFT_sRGBFactors.prototype.dispose = function () {
        this._loader = null;
    };
    /** @internal */
    MSFT_sRGBFactors.prototype.loadMaterialPropertiesAsync = function (context, material, babylonMaterial) {
        var _this = this;
        return _glTFLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoader.LoadExtraAsync(context, material, this.name, function (extraContext, extra) {
            if (extra) {
                if (!(babylonMaterial instanceof babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_0__.PBRMaterial)) {
                    throw new Error("".concat(extraContext, ": Material type not supported"));
                }
                var promise = _this._loader.loadMaterialPropertiesAsync(context, material, babylonMaterial);
                var useExactSrgbConversions = babylonMaterial.getScene().getEngine().useExactSrgbConversions;
                if (!babylonMaterial.albedoTexture) {
                    babylonMaterial.albedoColor.toLinearSpaceToRef(babylonMaterial.albedoColor, useExactSrgbConversions);
                }
                if (!babylonMaterial.reflectivityTexture) {
                    babylonMaterial.reflectivityColor.toLinearSpaceToRef(babylonMaterial.reflectivityColor, useExactSrgbConversions);
                }
                return promise;
            }
            return null;
        });
    };
    return MSFT_sRGBFactors;
}());

_glTFLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoader.RegisterExtension(NAME, function (loader) { return new MSFT_sRGBFactors(loader); });


/***/ }),

/***/ "../../../dev/loaders/src/glTF/2.0/Extensions/index.ts":
/*!*************************************************************!*\
  !*** ../../../dev/loaders/src/glTF/2.0/Extensions/index.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EXT_lights_image_based: () => (/* reexport safe */ _EXT_lights_image_based__WEBPACK_IMPORTED_MODULE_0__.EXT_lights_image_based),
/* harmony export */   EXT_mesh_gpu_instancing: () => (/* reexport safe */ _EXT_mesh_gpu_instancing__WEBPACK_IMPORTED_MODULE_1__.EXT_mesh_gpu_instancing),
/* harmony export */   EXT_meshopt_compression: () => (/* reexport safe */ _EXT_meshopt_compression__WEBPACK_IMPORTED_MODULE_2__.EXT_meshopt_compression),
/* harmony export */   EXT_texture_webp: () => (/* reexport safe */ _EXT_texture_webp__WEBPACK_IMPORTED_MODULE_3__.EXT_texture_webp),
/* harmony export */   ExtrasAsMetadata: () => (/* reexport safe */ _ExtrasAsMetadata__WEBPACK_IMPORTED_MODULE_28__.ExtrasAsMetadata),
/* harmony export */   KHR_animation_pointer: () => (/* reexport safe */ _KHR_animation_pointer__WEBPACK_IMPORTED_MODULE_23__.KHR_animation_pointer),
/* harmony export */   KHR_draco_mesh_compression: () => (/* reexport safe */ _KHR_draco_mesh_compression__WEBPACK_IMPORTED_MODULE_4__.KHR_draco_mesh_compression),
/* harmony export */   KHR_lights: () => (/* reexport safe */ _KHR_lights_punctual__WEBPACK_IMPORTED_MODULE_5__.KHR_lights),
/* harmony export */   KHR_materials_anisotropy: () => (/* reexport safe */ _KHR_materials_anisotropy__WEBPACK_IMPORTED_MODULE_10__.KHR_materials_anisotropy),
/* harmony export */   KHR_materials_clearcoat: () => (/* reexport safe */ _KHR_materials_clearcoat__WEBPACK_IMPORTED_MODULE_8__.KHR_materials_clearcoat),
/* harmony export */   KHR_materials_emissive_strength: () => (/* reexport safe */ _KHR_materials_emissive_strength__WEBPACK_IMPORTED_MODULE_11__.KHR_materials_emissive_strength),
/* harmony export */   KHR_materials_ior: () => (/* reexport safe */ _KHR_materials_ior__WEBPACK_IMPORTED_MODULE_14__.KHR_materials_ior),
/* harmony export */   KHR_materials_iridescence: () => (/* reexport safe */ _KHR_materials_iridescence__WEBPACK_IMPORTED_MODULE_9__.KHR_materials_iridescence),
/* harmony export */   KHR_materials_pbrSpecularGlossiness: () => (/* reexport safe */ _KHR_materials_pbrSpecularGlossiness__WEBPACK_IMPORTED_MODULE_6__.KHR_materials_pbrSpecularGlossiness),
/* harmony export */   KHR_materials_sheen: () => (/* reexport safe */ _KHR_materials_sheen__WEBPACK_IMPORTED_MODULE_12__.KHR_materials_sheen),
/* harmony export */   KHR_materials_specular: () => (/* reexport safe */ _KHR_materials_specular__WEBPACK_IMPORTED_MODULE_13__.KHR_materials_specular),
/* harmony export */   KHR_materials_translucency: () => (/* reexport safe */ _KHR_materials_translucency__WEBPACK_IMPORTED_MODULE_17__.KHR_materials_translucency),
/* harmony export */   KHR_materials_transmission: () => (/* reexport safe */ _KHR_materials_transmission__WEBPACK_IMPORTED_MODULE_16__.KHR_materials_transmission),
/* harmony export */   KHR_materials_unlit: () => (/* reexport safe */ _KHR_materials_unlit__WEBPACK_IMPORTED_MODULE_7__.KHR_materials_unlit),
/* harmony export */   KHR_materials_variants: () => (/* reexport safe */ _KHR_materials_variants__WEBPACK_IMPORTED_MODULE_15__.KHR_materials_variants),
/* harmony export */   KHR_materials_volume: () => (/* reexport safe */ _KHR_materials_volume__WEBPACK_IMPORTED_MODULE_18__.KHR_materials_volume),
/* harmony export */   KHR_mesh_quantization: () => (/* reexport safe */ _KHR_mesh_quantization__WEBPACK_IMPORTED_MODULE_19__.KHR_mesh_quantization),
/* harmony export */   KHR_texture_basisu: () => (/* reexport safe */ _KHR_texture_basisu__WEBPACK_IMPORTED_MODULE_20__.KHR_texture_basisu),
/* harmony export */   KHR_texture_transform: () => (/* reexport safe */ _KHR_texture_transform__WEBPACK_IMPORTED_MODULE_21__.KHR_texture_transform),
/* harmony export */   KHR_xmp_json_ld: () => (/* reexport safe */ _KHR_xmp_json_ld__WEBPACK_IMPORTED_MODULE_22__.KHR_xmp_json_ld),
/* harmony export */   MSFT_audio_emitter: () => (/* reexport safe */ _MSFT_audio_emitter__WEBPACK_IMPORTED_MODULE_24__.MSFT_audio_emitter),
/* harmony export */   MSFT_lod: () => (/* reexport safe */ _MSFT_lod__WEBPACK_IMPORTED_MODULE_25__.MSFT_lod),
/* harmony export */   MSFT_minecraftMesh: () => (/* reexport safe */ _MSFT_minecraftMesh__WEBPACK_IMPORTED_MODULE_26__.MSFT_minecraftMesh),
/* harmony export */   MSFT_sRGBFactors: () => (/* reexport safe */ _MSFT_sRGBFactors__WEBPACK_IMPORTED_MODULE_27__.MSFT_sRGBFactors)
/* harmony export */ });
/* harmony import */ var _EXT_lights_image_based__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EXT_lights_image_based */ "../../../dev/loaders/src/glTF/2.0/Extensions/EXT_lights_image_based.ts");
/* harmony import */ var _EXT_mesh_gpu_instancing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EXT_mesh_gpu_instancing */ "../../../dev/loaders/src/glTF/2.0/Extensions/EXT_mesh_gpu_instancing.ts");
/* harmony import */ var _EXT_meshopt_compression__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EXT_meshopt_compression */ "../../../dev/loaders/src/glTF/2.0/Extensions/EXT_meshopt_compression.ts");
/* harmony import */ var _EXT_texture_webp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EXT_texture_webp */ "../../../dev/loaders/src/glTF/2.0/Extensions/EXT_texture_webp.ts");
/* harmony import */ var _KHR_draco_mesh_compression__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./KHR_draco_mesh_compression */ "../../../dev/loaders/src/glTF/2.0/Extensions/KHR_draco_mesh_compression.ts");
/* harmony import */ var _KHR_lights_punctual__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./KHR_lights_punctual */ "../../../dev/loaders/src/glTF/2.0/Extensions/KHR_lights_punctual.ts");
/* harmony import */ var _KHR_materials_pbrSpecularGlossiness__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./KHR_materials_pbrSpecularGlossiness */ "../../../dev/loaders/src/glTF/2.0/Extensions/KHR_materials_pbrSpecularGlossiness.ts");
/* harmony import */ var _KHR_materials_unlit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./KHR_materials_unlit */ "../../../dev/loaders/src/glTF/2.0/Extensions/KHR_materials_unlit.ts");
/* harmony import */ var _KHR_materials_clearcoat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./KHR_materials_clearcoat */ "../../../dev/loaders/src/glTF/2.0/Extensions/KHR_materials_clearcoat.ts");
/* harmony import */ var _KHR_materials_iridescence__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./KHR_materials_iridescence */ "../../../dev/loaders/src/glTF/2.0/Extensions/KHR_materials_iridescence.ts");
/* harmony import */ var _KHR_materials_anisotropy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./KHR_materials_anisotropy */ "../../../dev/loaders/src/glTF/2.0/Extensions/KHR_materials_anisotropy.ts");
/* harmony import */ var _KHR_materials_emissive_strength__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./KHR_materials_emissive_strength */ "../../../dev/loaders/src/glTF/2.0/Extensions/KHR_materials_emissive_strength.ts");
/* harmony import */ var _KHR_materials_sheen__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./KHR_materials_sheen */ "../../../dev/loaders/src/glTF/2.0/Extensions/KHR_materials_sheen.ts");
/* harmony import */ var _KHR_materials_specular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./KHR_materials_specular */ "../../../dev/loaders/src/glTF/2.0/Extensions/KHR_materials_specular.ts");
/* harmony import */ var _KHR_materials_ior__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./KHR_materials_ior */ "../../../dev/loaders/src/glTF/2.0/Extensions/KHR_materials_ior.ts");
/* harmony import */ var _KHR_materials_variants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./KHR_materials_variants */ "../../../dev/loaders/src/glTF/2.0/Extensions/KHR_materials_variants.ts");
/* harmony import */ var _KHR_materials_transmission__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./KHR_materials_transmission */ "../../../dev/loaders/src/glTF/2.0/Extensions/KHR_materials_transmission.ts");
/* harmony import */ var _KHR_materials_translucency__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./KHR_materials_translucency */ "../../../dev/loaders/src/glTF/2.0/Extensions/KHR_materials_translucency.ts");
/* harmony import */ var _KHR_materials_volume__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./KHR_materials_volume */ "../../../dev/loaders/src/glTF/2.0/Extensions/KHR_materials_volume.ts");
/* harmony import */ var _KHR_mesh_quantization__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./KHR_mesh_quantization */ "../../../dev/loaders/src/glTF/2.0/Extensions/KHR_mesh_quantization.ts");
/* harmony import */ var _KHR_texture_basisu__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./KHR_texture_basisu */ "../../../dev/loaders/src/glTF/2.0/Extensions/KHR_texture_basisu.ts");
/* harmony import */ var _KHR_texture_transform__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./KHR_texture_transform */ "../../../dev/loaders/src/glTF/2.0/Extensions/KHR_texture_transform.ts");
/* harmony import */ var _KHR_xmp_json_ld__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./KHR_xmp_json_ld */ "../../../dev/loaders/src/glTF/2.0/Extensions/KHR_xmp_json_ld.ts");
/* harmony import */ var _KHR_animation_pointer__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./KHR_animation_pointer */ "../../../dev/loaders/src/glTF/2.0/Extensions/KHR_animation_pointer.ts");
/* harmony import */ var _MSFT_audio_emitter__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./MSFT_audio_emitter */ "../../../dev/loaders/src/glTF/2.0/Extensions/MSFT_audio_emitter.ts");
/* harmony import */ var _MSFT_lod__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./MSFT_lod */ "../../../dev/loaders/src/glTF/2.0/Extensions/MSFT_lod.ts");
/* harmony import */ var _MSFT_minecraftMesh__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./MSFT_minecraftMesh */ "../../../dev/loaders/src/glTF/2.0/Extensions/MSFT_minecraftMesh.ts");
/* harmony import */ var _MSFT_sRGBFactors__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./MSFT_sRGBFactors */ "../../../dev/loaders/src/glTF/2.0/Extensions/MSFT_sRGBFactors.ts");
/* harmony import */ var _ExtrasAsMetadata__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./ExtrasAsMetadata */ "../../../dev/loaders/src/glTF/2.0/Extensions/ExtrasAsMetadata.ts");































/***/ }),

/***/ "../../../dev/loaders/src/glTF/2.0/glTFLoader.ts":
/*!*******************************************************!*\
  !*** ../../../dev/loaders/src/glTF/2.0/glTFLoader.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArrayItem: () => (/* binding */ ArrayItem),
/* harmony export */   GLTFLoader: () => (/* binding */ GLTFLoader)
/* harmony export */ });
/* harmony import */ var babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Culling/boundingInfo */ "babylonjs/Misc/observable");
/* harmony import */ var babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _glTFFileLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../glTFFileLoader */ "../../../dev/loaders/src/glTF/glTFFileLoader.ts");
/* harmony import */ var _glTFLoaderAnimation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./glTFLoaderAnimation */ "../../../dev/loaders/src/glTF/2.0/glTFLoaderAnimation.ts");
























// https://stackoverflow.com/a/48218209
function mergeDeep() {
    var objects = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        objects[_i] = arguments[_i];
    }
    var isObject = function (obj) { return obj && typeof obj === "object"; };
    return objects.reduce(function (prev, obj) {
        Object.keys(obj).forEach(function (key) {
            var pVal = prev[key];
            var oVal = obj[key];
            if (Array.isArray(pVal) && Array.isArray(oVal)) {
                prev[key] = pVal.concat.apply(pVal, oVal);
            }
            else if (isObject(pVal) && isObject(oVal)) {
                prev[key] = mergeDeep(pVal, oVal);
            }
            else {
                prev[key] = oVal;
            }
        });
        return prev;
    }, {});
}
/**
 * Helper class for working with arrays when loading the glTF asset
 */
var ArrayItem = /** @class */ (function () {
    function ArrayItem() {
    }
    /**
     * Gets an item from the given array.
     * @param context The context when loading the asset
     * @param array The array to get the item from
     * @param index The index to the array
     * @returns The array item
     */
    ArrayItem.Get = function (context, array, index) {
        if (!array || index == undefined || !array[index]) {
            throw new Error("".concat(context, ": Failed to find index (").concat(index, ")"));
        }
        return array[index];
    };
    /**
     * Gets an item from the given array or returns null if not available.
     * @param array The array to get the item from
     * @param index The index to the array
     * @returns The array item or null
     */
    ArrayItem.TryGet = function (array, index) {
        if (!array || index == undefined || !array[index]) {
            return null;
        }
        return array[index];
    };
    /**
     * Assign an `index` field to each item of the given array.
     * @param array The array of items
     */
    ArrayItem.Assign = function (array) {
        if (array) {
            for (var index = 0; index < array.length; index++) {
                array[index].index = index;
            }
        }
    };
    return ArrayItem;
}());

/**
 * The glTF 2.0 loader
 */
var GLTFLoader = /** @class */ (function () {
    /**
     * @internal
     */
    function GLTFLoader(parent) {
        /** @internal */
        this._completePromises = new Array();
        /** @internal */
        this._assetContainer = null;
        /** Storage */
        this._babylonLights = [];
        /** @internal */
        this._disableInstancedMesh = 0;
        /** @internal */
        this._allMaterialsDirtyRequired = false;
        this._extensions = new Array();
        this._disposed = false;
        this._rootUrl = null;
        this._fileName = null;
        this._uniqueRootUrl = null;
        this._bin = null;
        this._rootBabylonMesh = null;
        this._defaultBabylonMaterialData = {};
        this._postSceneLoadActions = new Array();
        this._parent = parent;
    }
    /**
     * Registers a loader extension.
     * @param name The name of the loader extension.
     * @param factory The factory function that creates the loader extension.
     */
    GLTFLoader.RegisterExtension = function (name, factory) {
        if (GLTFLoader.UnregisterExtension(name)) {
            babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.Logger.Warn("Extension with the name '".concat(name, "' already exists"));
        }
        GLTFLoader._RegisteredExtensions[name] = {
            factory: factory,
        };
    };
    /**
     * Unregisters a loader extension.
     * @param name The name of the loader extension.
     * @returns A boolean indicating whether the extension has been unregistered
     */
    GLTFLoader.UnregisterExtension = function (name) {
        if (!GLTFLoader._RegisteredExtensions[name]) {
            return false;
        }
        delete GLTFLoader._RegisteredExtensions[name];
        return true;
    };
    Object.defineProperty(GLTFLoader.prototype, "gltf", {
        /**
         * The object that represents the glTF JSON.
         */
        get: function () {
            if (!this._gltf) {
                throw new Error("glTF JSON is not available");
            }
            return this._gltf;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GLTFLoader.prototype, "bin", {
        /**
         * The BIN chunk of a binary glTF.
         */
        get: function () {
            return this._bin;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GLTFLoader.prototype, "parent", {
        /**
         * The parent file loader.
         */
        get: function () {
            return this._parent;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GLTFLoader.prototype, "babylonScene", {
        /**
         * The Babylon scene when loading the asset.
         */
        get: function () {
            if (!this._babylonScene) {
                throw new Error("Scene is not available");
            }
            return this._babylonScene;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GLTFLoader.prototype, "rootBabylonMesh", {
        /**
         * The root Babylon mesh when loading the asset.
         */
        get: function () {
            return this._rootBabylonMesh;
        },
        enumerable: false,
        configurable: true
    });
    /** @internal */
    GLTFLoader.prototype.dispose = function () {
        if (this._disposed) {
            return;
        }
        this._disposed = true;
        this._completePromises.length = 0;
        this._extensions.forEach(function (extension) { return extension.dispose && extension.dispose(); });
        this._extensions.length = 0;
        this._gltf = null; // TODO
        this._bin = null;
        this._babylonScene = null; // TODO
        this._rootBabylonMesh = null;
        this._defaultBabylonMaterialData = {};
        this._postSceneLoadActions.length = 0;
        this._parent.dispose();
    };
    /**
     * @internal
     */
    GLTFLoader.prototype.importMeshAsync = function (meshesNames, scene, container, data, rootUrl, onProgress, fileName) {
        var _this = this;
        if (fileName === void 0) { fileName = ""; }
        return Promise.resolve().then(function () {
            _this._babylonScene = scene;
            _this._assetContainer = container;
            _this._loadData(data);
            var nodes = null;
            if (meshesNames) {
                var nodeMap_1 = {};
                if (_this._gltf.nodes) {
                    for (var _i = 0, _a = _this._gltf.nodes; _i < _a.length; _i++) {
                        var node = _a[_i];
                        if (node.name) {
                            nodeMap_1[node.name] = node.index;
                        }
                    }
                }
                var names = meshesNames instanceof Array ? meshesNames : [meshesNames];
                nodes = names.map(function (name) {
                    var node = nodeMap_1[name];
                    if (node === undefined) {
                        throw new Error("Failed to find node '".concat(name, "'"));
                    }
                    return node;
                });
            }
            return _this._loadAsync(rootUrl, fileName, nodes, function () {
                return {
                    meshes: _this._getMeshes(),
                    particleSystems: [],
                    skeletons: _this._getSkeletons(),
                    animationGroups: _this._getAnimationGroups(),
                    lights: _this._babylonLights,
                    transformNodes: _this._getTransformNodes(),
                    geometries: _this._getGeometries(),
                };
            });
        });
    };
    /**
     * @internal
     */
    GLTFLoader.prototype.loadAsync = function (scene, data, rootUrl, onProgress, fileName) {
        var _this = this;
        if (fileName === void 0) { fileName = ""; }
        return Promise.resolve().then(function () {
            _this._babylonScene = scene;
            _this._loadData(data);
            return _this._loadAsync(rootUrl, fileName, null, function () { return undefined; });
        });
    };
    GLTFLoader.prototype._loadAsync = function (rootUrl, fileName, nodes, resultFunc) {
        var _this = this;
        return Promise.resolve()
            .then(function () {
            _this._rootUrl = rootUrl;
            _this._uniqueRootUrl = !rootUrl.startsWith("file:") && fileName ? rootUrl : "".concat(rootUrl).concat(Date.now(), "/");
            _this._fileName = fileName;
            _this._allMaterialsDirtyRequired = false;
            _this._loadExtensions();
            _this._checkExtensions();
            var loadingToReadyCounterName = "".concat(_glTFFileLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoaderState[_glTFFileLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoaderState.LOADING], " => ").concat(_glTFFileLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoaderState[_glTFFileLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoaderState.READY]);
            var loadingToCompleteCounterName = "".concat(_glTFFileLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoaderState[_glTFFileLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoaderState.LOADING], " => ").concat(_glTFFileLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoaderState[_glTFFileLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoaderState.COMPLETE]);
            _this._parent._startPerformanceCounter(loadingToReadyCounterName);
            _this._parent._startPerformanceCounter(loadingToCompleteCounterName);
            _this._parent._setState(_glTFFileLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoaderState.LOADING);
            _this._extensionsOnLoading();
            var promises = new Array();
            // Block the marking of materials dirty until the scene is loaded.
            var oldBlockMaterialDirtyMechanism = _this._babylonScene.blockMaterialDirtyMechanism;
            _this._babylonScene.blockMaterialDirtyMechanism = true;
            if (!_this.parent.loadOnlyMaterials) {
                if (nodes) {
                    promises.push(_this.loadSceneAsync("/nodes", { nodes: nodes, index: -1 }));
                }
                else if (_this._gltf.scene != undefined || (_this._gltf.scenes && _this._gltf.scenes[0])) {
                    var scene = ArrayItem.Get("/scene", _this._gltf.scenes, _this._gltf.scene || 0);
                    promises.push(_this.loadSceneAsync("/scenes/".concat(scene.index), scene));
                }
            }
            if (!_this.parent.skipMaterials && _this.parent.loadAllMaterials && _this._gltf.materials) {
                for (var m = 0; m < _this._gltf.materials.length; ++m) {
                    var material = _this._gltf.materials[m];
                    var context_1 = "/materials/" + m;
                    var babylonDrawMode = babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.Material.TriangleFillMode;
                    promises.push(_this._loadMaterialAsync(context_1, material, null, babylonDrawMode, function () { }));
                }
            }
            // Restore the blocking of material dirty.
            if (_this._allMaterialsDirtyRequired) {
                // This can happen if we add a light for instance as it will impact the whole scene.
                // This automatically resets everything if needed.
                _this._babylonScene.blockMaterialDirtyMechanism = oldBlockMaterialDirtyMechanism;
            }
            else {
                // By default a newly created material is dirty so there is no need to flag the full scene as dirty.
                // For perf reasons, we then bypass blockMaterialDirtyMechanism as this would "dirty" the entire scene.
                _this._babylonScene._forceBlockMaterialDirtyMechanism(oldBlockMaterialDirtyMechanism);
            }
            if (_this._parent.compileMaterials) {
                promises.push(_this._compileMaterialsAsync());
            }
            if (_this._parent.compileShadowGenerators) {
                promises.push(_this._compileShadowGeneratorsAsync());
            }
            var resultPromise = Promise.all(promises).then(function () {
                if (_this._rootBabylonMesh) {
                    _this._rootBabylonMesh.setEnabled(true);
                }
                _this._extensionsOnReady();
                _this._parent._setState(_glTFFileLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoaderState.READY);
                _this._startAnimations();
                return resultFunc();
            });
            return resultPromise.then(function (result) {
                _this._parent._endPerformanceCounter(loadingToReadyCounterName);
                babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.Tools.SetImmediate(function () {
                    if (!_this._disposed) {
                        Promise.all(_this._completePromises).then(function () {
                            _this._parent._endPerformanceCounter(loadingToCompleteCounterName);
                            _this._parent._setState(_glTFFileLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoaderState.COMPLETE);
                            _this._parent.onCompleteObservable.notifyObservers(undefined);
                            _this._parent.onCompleteObservable.clear();
                            _this.dispose();
                        }, function (error) {
                            _this._parent.onErrorObservable.notifyObservers(error);
                            _this._parent.onErrorObservable.clear();
                            _this.dispose();
                        });
                    }
                });
                return result;
            });
        })
            .catch(function (error) {
            if (!_this._disposed) {
                _this._parent.onErrorObservable.notifyObservers(error);
                _this._parent.onErrorObservable.clear();
                _this.dispose();
            }
            throw error;
        });
    };
    GLTFLoader.prototype._loadData = function (data) {
        this._gltf = data.json;
        this._setupData();
        if (data.bin) {
            var buffers = this._gltf.buffers;
            if (buffers && buffers[0] && !buffers[0].uri) {
                var binaryBuffer = buffers[0];
                if (binaryBuffer.byteLength < data.bin.byteLength - 3 || binaryBuffer.byteLength > data.bin.byteLength) {
                    babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.Logger.Warn("Binary buffer length (".concat(binaryBuffer.byteLength, ") from JSON does not match chunk length (").concat(data.bin.byteLength, ")"));
                }
                this._bin = data.bin;
            }
            else {
                babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.Logger.Warn("Unexpected BIN chunk");
            }
        }
    };
    GLTFLoader.prototype._setupData = function () {
        ArrayItem.Assign(this._gltf.accessors);
        ArrayItem.Assign(this._gltf.animations);
        ArrayItem.Assign(this._gltf.buffers);
        ArrayItem.Assign(this._gltf.bufferViews);
        ArrayItem.Assign(this._gltf.cameras);
        ArrayItem.Assign(this._gltf.images);
        ArrayItem.Assign(this._gltf.materials);
        ArrayItem.Assign(this._gltf.meshes);
        ArrayItem.Assign(this._gltf.nodes);
        ArrayItem.Assign(this._gltf.samplers);
        ArrayItem.Assign(this._gltf.scenes);
        ArrayItem.Assign(this._gltf.skins);
        ArrayItem.Assign(this._gltf.textures);
        if (this._gltf.nodes) {
            var nodeParents = {};
            for (var _i = 0, _a = this._gltf.nodes; _i < _a.length; _i++) {
                var node = _a[_i];
                if (node.children) {
                    for (var _b = 0, _c = node.children; _b < _c.length; _b++) {
                        var index = _c[_b];
                        nodeParents[index] = node.index;
                    }
                }
            }
            var rootNode = this._createRootNode();
            for (var _d = 0, _e = this._gltf.nodes; _d < _e.length; _d++) {
                var node = _e[_d];
                var parentIndex = nodeParents[node.index];
                node.parent = parentIndex === undefined ? rootNode : this._gltf.nodes[parentIndex];
            }
        }
    };
    GLTFLoader.prototype._loadExtensions = function () {
        for (var name_1 in GLTFLoader._RegisteredExtensions) {
            var extension = GLTFLoader._RegisteredExtensions[name_1].factory(this);
            if (extension.name !== name_1) {
                babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.Logger.Warn("The name of the glTF loader extension instance does not match the registered name: ".concat(extension.name, " !== ").concat(name_1));
            }
            this._extensions.push(extension);
            this._parent.onExtensionLoadedObservable.notifyObservers(extension);
        }
        this._extensions.sort(function (a, b) { return (a.order || Number.MAX_VALUE) - (b.order || Number.MAX_VALUE); });
        this._parent.onExtensionLoadedObservable.clear();
    };
    GLTFLoader.prototype._checkExtensions = function () {
        if (this._gltf.extensionsRequired) {
            var _loop_1 = function (name_2) {
                var available = this_1._extensions.some(function (extension) { return extension.name === name_2 && extension.enabled; });
                if (!available) {
                    throw new Error("Require extension ".concat(name_2, " is not available"));
                }
            };
            var this_1 = this;
            for (var _i = 0, _a = this._gltf.extensionsRequired; _i < _a.length; _i++) {
                var name_2 = _a[_i];
                _loop_1(name_2);
            }
        }
    };
    GLTFLoader.prototype._createRootNode = function () {
        this._babylonScene._blockEntityCollection = !!this._assetContainer;
        this._rootBabylonMesh = new babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.Mesh("__root__", this._babylonScene);
        this._rootBabylonMesh._parentContainer = this._assetContainer;
        this._babylonScene._blockEntityCollection = false;
        this._rootBabylonMesh.setEnabled(false);
        var rootNode = {
            _babylonTransformNode: this._rootBabylonMesh,
            index: -1,
        };
        switch (this._parent.coordinateSystemMode) {
            case _glTFFileLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoaderCoordinateSystemMode.AUTO: {
                if (!this._babylonScene.useRightHandedSystem) {
                    rootNode.rotation = [0, 1, 0, 0];
                    rootNode.scale = [1, 1, -1];
                    GLTFLoader._LoadTransform(rootNode, this._rootBabylonMesh);
                }
                break;
            }
            case _glTFFileLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoaderCoordinateSystemMode.FORCE_RIGHT_HANDED: {
                this._babylonScene.useRightHandedSystem = true;
                break;
            }
            default: {
                throw new Error("Invalid coordinate system mode (".concat(this._parent.coordinateSystemMode, ")"));
            }
        }
        this._parent.onMeshLoadedObservable.notifyObservers(this._rootBabylonMesh);
        return rootNode;
    };
    /**
     * Loads a glTF scene.
     * @param context The context when loading the asset
     * @param scene The glTF scene property
     * @returns A promise that resolves when the load is complete
     */
    GLTFLoader.prototype.loadSceneAsync = function (context, scene) {
        var _this = this;
        var extensionPromise = this._extensionsLoadSceneAsync(context, scene);
        if (extensionPromise) {
            return extensionPromise;
        }
        var promises = new Array();
        this.logOpen("".concat(context, " ").concat(scene.name || ""));
        if (scene.nodes) {
            for (var _i = 0, _a = scene.nodes; _i < _a.length; _i++) {
                var index = _a[_i];
                var node = ArrayItem.Get("".concat(context, "/nodes/").concat(index), this._gltf.nodes, index);
                promises.push(this.loadNodeAsync("/nodes/".concat(node.index), node, function (babylonMesh) {
                    babylonMesh.parent = _this._rootBabylonMesh;
                }));
            }
        }
        for (var _b = 0, _c = this._postSceneLoadActions; _b < _c.length; _b++) {
            var action = _c[_b];
            action();
        }
        promises.push(this._loadAnimationsAsync());
        this.logClose();
        return Promise.all(promises).then(function () { });
    };
    GLTFLoader.prototype._forEachPrimitive = function (node, callback) {
        if (node._primitiveBabylonMeshes) {
            for (var _i = 0, _a = node._primitiveBabylonMeshes; _i < _a.length; _i++) {
                var babylonMesh = _a[_i];
                callback(babylonMesh);
            }
        }
    };
    GLTFLoader.prototype._getGeometries = function () {
        var geometries = new Array();
        var nodes = this._gltf.nodes;
        if (nodes) {
            for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
                var node = nodes_1[_i];
                this._forEachPrimitive(node, function (babylonMesh) {
                    var geometry = babylonMesh.geometry;
                    if (geometry && geometries.indexOf(geometry) === -1) {
                        geometries.push(geometry);
                    }
                });
            }
        }
        return geometries;
    };
    GLTFLoader.prototype._getMeshes = function () {
        var meshes = new Array();
        // Root mesh is always first, if available.
        if (this._rootBabylonMesh) {
            meshes.push(this._rootBabylonMesh);
        }
        var nodes = this._gltf.nodes;
        if (nodes) {
            for (var _i = 0, nodes_2 = nodes; _i < nodes_2.length; _i++) {
                var node = nodes_2[_i];
                this._forEachPrimitive(node, function (babylonMesh) {
                    meshes.push(babylonMesh);
                });
            }
        }
        return meshes;
    };
    GLTFLoader.prototype._getTransformNodes = function () {
        var transformNodes = new Array();
        var nodes = this._gltf.nodes;
        if (nodes) {
            for (var _i = 0, nodes_3 = nodes; _i < nodes_3.length; _i++) {
                var node = nodes_3[_i];
                if (node._babylonTransformNode && node._babylonTransformNode.getClassName() === "TransformNode") {
                    transformNodes.push(node._babylonTransformNode);
                }
                if (node._babylonTransformNodeForSkin) {
                    transformNodes.push(node._babylonTransformNodeForSkin);
                }
            }
        }
        return transformNodes;
    };
    GLTFLoader.prototype._getSkeletons = function () {
        var skeletons = new Array();
        var skins = this._gltf.skins;
        if (skins) {
            for (var _i = 0, skins_1 = skins; _i < skins_1.length; _i++) {
                var skin = skins_1[_i];
                if (skin._data) {
                    skeletons.push(skin._data.babylonSkeleton);
                }
            }
        }
        return skeletons;
    };
    GLTFLoader.prototype._getAnimationGroups = function () {
        var animationGroups = new Array();
        var animations = this._gltf.animations;
        if (animations) {
            for (var _i = 0, animations_1 = animations; _i < animations_1.length; _i++) {
                var animation = animations_1[_i];
                if (animation._babylonAnimationGroup) {
                    animationGroups.push(animation._babylonAnimationGroup);
                }
            }
        }
        return animationGroups;
    };
    GLTFLoader.prototype._startAnimations = function () {
        switch (this._parent.animationStartMode) {
            case _glTFFileLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoaderAnimationStartMode.NONE: {
                // do nothing
                break;
            }
            case _glTFFileLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoaderAnimationStartMode.FIRST: {
                var babylonAnimationGroups = this._getAnimationGroups();
                if (babylonAnimationGroups.length !== 0) {
                    babylonAnimationGroups[0].start(true);
                }
                break;
            }
            case _glTFFileLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoaderAnimationStartMode.ALL: {
                var babylonAnimationGroups = this._getAnimationGroups();
                for (var _i = 0, babylonAnimationGroups_1 = babylonAnimationGroups; _i < babylonAnimationGroups_1.length; _i++) {
                    var babylonAnimationGroup = babylonAnimationGroups_1[_i];
                    babylonAnimationGroup.start(true);
                }
                break;
            }
            default: {
                babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.Logger.Error("Invalid animation start mode (".concat(this._parent.animationStartMode, ")"));
                return;
            }
        }
    };
    /**
     * Loads a glTF node.
     * @param context The context when loading the asset
     * @param node The glTF node property
     * @param assign A function called synchronously after parsing the glTF properties
     * @returns A promise that resolves with the loaded Babylon mesh when the load is complete
     */
    GLTFLoader.prototype.loadNodeAsync = function (context, node, assign) {
        var _this = this;
        if (assign === void 0) { assign = function () { }; }
        var extensionPromise = this._extensionsLoadNodeAsync(context, node, assign);
        if (extensionPromise) {
            return extensionPromise;
        }
        if (node._babylonTransformNode) {
            throw new Error("".concat(context, ": Invalid recursive node hierarchy"));
        }
        var promises = new Array();
        this.logOpen("".concat(context, " ").concat(node.name || ""));
        var loadNode = function (babylonTransformNode) {
            GLTFLoader.AddPointerMetadata(babylonTransformNode, context);
            GLTFLoader._LoadTransform(node, babylonTransformNode);
            if (node.camera != undefined) {
                var camera = ArrayItem.Get("".concat(context, "/camera"), _this._gltf.cameras, node.camera);
                promises.push(_this.loadCameraAsync("/cameras/".concat(camera.index), camera, function (babylonCamera) {
                    babylonCamera.parent = babylonTransformNode;
                }));
            }
            if (node.children) {
                for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
                    var index = _a[_i];
                    var childNode = ArrayItem.Get("".concat(context, "/children/").concat(index), _this._gltf.nodes, index);
                    promises.push(_this.loadNodeAsync("/nodes/".concat(childNode.index), childNode, function (childBabylonMesh) {
                        childBabylonMesh.parent = babylonTransformNode;
                    }));
                }
            }
            assign(babylonTransformNode);
        };
        if (node.mesh == undefined || node.skin != undefined) {
            var nodeName = node.name || "node".concat(node.index);
            this._babylonScene._blockEntityCollection = !!this._assetContainer;
            var transformNode = new babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.TransformNode(nodeName, this._babylonScene);
            transformNode._parentContainer = this._assetContainer;
            this._babylonScene._blockEntityCollection = false;
            if (node.mesh == undefined) {
                node._babylonTransformNode = transformNode;
            }
            else {
                node._babylonTransformNodeForSkin = transformNode;
            }
            loadNode(transformNode);
        }
        if (node.mesh != undefined) {
            if (node.skin == undefined) {
                var mesh = ArrayItem.Get("".concat(context, "/mesh"), this._gltf.meshes, node.mesh);
                promises.push(this._loadMeshAsync("/meshes/".concat(mesh.index), node, mesh, loadNode));
            }
            else {
                // See https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#skins (second implementation note)
                // This code path will place the skinned mesh as a sibling of the skeleton root node without loading the
                // transform, which effectively ignores the transform of the skinned mesh, as per spec.
                var mesh = ArrayItem.Get("".concat(context, "/mesh"), this._gltf.meshes, node.mesh);
                promises.push(this._loadMeshAsync("/meshes/".concat(mesh.index), node, mesh, function (babylonTransformNode) {
                    var babylonTransformNodeForSkin = node._babylonTransformNodeForSkin;
                    // Merge the metadata from the skin node to the skinned mesh in case a loader extension added metadata.
                    babylonTransformNode.metadata = mergeDeep(babylonTransformNodeForSkin.metadata, babylonTransformNode.metadata || {});
                    var skin = ArrayItem.Get("".concat(context, "/skin"), _this._gltf.skins, node.skin);
                    promises.push(_this._loadSkinAsync("/skins/".concat(skin.index), node, skin, function (babylonSkeleton) {
                        _this._forEachPrimitive(node, function (babylonMesh) {
                            babylonMesh.skeleton = babylonSkeleton;
                        });
                        // Wait until all the nodes are parented before parenting the skinned mesh.
                        _this._postSceneLoadActions.push(function () {
                            if (skin.skeleton != undefined) {
                                // Place the skinned mesh node as a sibling of the skeleton root node.
                                // Handle special case when the parent of the skeleton root is the skinned mesh.
                                var parentNode = ArrayItem.Get("/skins/".concat(skin.index, "/skeleton"), _this._gltf.nodes, skin.skeleton).parent;
                                if (node.index === parentNode.index) {
                                    babylonTransformNode.parent = babylonTransformNodeForSkin.parent;
                                }
                                else {
                                    babylonTransformNode.parent = parentNode._babylonTransformNode;
                                }
                            }
                            else {
                                babylonTransformNode.parent = _this._rootBabylonMesh;
                            }
                            _this._parent.onSkinLoadedObservable.notifyObservers({ node: babylonTransformNodeForSkin, skinnedNode: babylonTransformNode });
                        });
                    }));
                }));
            }
        }
        this.logClose();
        return Promise.all(promises).then(function () {
            _this._forEachPrimitive(node, function (babylonMesh) {
                if (babylonMesh.geometry && babylonMesh.geometry.useBoundingInfoFromGeometry) {
                    // simply apply the world matrices to the bounding info - the extends are already ok
                    babylonMesh._updateBoundingInfo();
                }
                else {
                    babylonMesh.refreshBoundingInfo(true);
                }
            });
            return node._babylonTransformNode;
        });
    };
    GLTFLoader.prototype._loadMeshAsync = function (context, node, mesh, assign) {
        var primitives = mesh.primitives;
        if (!primitives || !primitives.length) {
            throw new Error("".concat(context, ": Primitives are missing"));
        }
        if (primitives[0].index == undefined) {
            ArrayItem.Assign(primitives);
        }
        var promises = new Array();
        this.logOpen("".concat(context, " ").concat(mesh.name || ""));
        var name = node.name || "node".concat(node.index);
        if (primitives.length === 1) {
            var primitive = mesh.primitives[0];
            promises.push(this._loadMeshPrimitiveAsync("".concat(context, "/primitives/").concat(primitive.index), name, node, mesh, primitive, function (babylonMesh) {
                node._babylonTransformNode = babylonMesh;
                node._primitiveBabylonMeshes = [babylonMesh];
            }));
        }
        else {
            this._babylonScene._blockEntityCollection = !!this._assetContainer;
            node._babylonTransformNode = new babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.TransformNode(name, this._babylonScene);
            node._babylonTransformNode._parentContainer = this._assetContainer;
            this._babylonScene._blockEntityCollection = false;
            node._primitiveBabylonMeshes = [];
            for (var _i = 0, primitives_1 = primitives; _i < primitives_1.length; _i++) {
                var primitive = primitives_1[_i];
                promises.push(this._loadMeshPrimitiveAsync("".concat(context, "/primitives/").concat(primitive.index), "".concat(name, "_primitive").concat(primitive.index), node, mesh, primitive, function (babylonMesh) {
                    babylonMesh.parent = node._babylonTransformNode;
                    node._primitiveBabylonMeshes.push(babylonMesh);
                }));
            }
        }
        assign(node._babylonTransformNode);
        this.logClose();
        return Promise.all(promises).then(function () {
            return node._babylonTransformNode;
        });
    };
    /**
     * @internal Define this method to modify the default behavior when loading data for mesh primitives.
     * @param context The context when loading the asset
     * @param name The mesh name when loading the asset
     * @param node The glTF node when loading the asset
     * @param mesh The glTF mesh when loading the asset
     * @param primitive The glTF mesh primitive property
     * @param assign A function called synchronously after parsing the glTF properties
     * @returns A promise that resolves with the loaded mesh when the load is complete or null if not handled
     */
    GLTFLoader.prototype._loadMeshPrimitiveAsync = function (context, name, node, mesh, primitive, assign) {
        var _this = this;
        var extensionPromise = this._extensionsLoadMeshPrimitiveAsync(context, name, node, mesh, primitive, assign);
        if (extensionPromise) {
            return extensionPromise;
        }
        this.logOpen("".concat(context));
        var shouldInstance = this._disableInstancedMesh === 0 && this._parent.createInstances && node.skin == undefined && !mesh.primitives[0].targets;
        var babylonAbstractMesh;
        var promise;
        if (shouldInstance && primitive._instanceData) {
            this._babylonScene._blockEntityCollection = !!this._assetContainer;
            babylonAbstractMesh = primitive._instanceData.babylonSourceMesh.createInstance(name);
            babylonAbstractMesh._parentContainer = this._assetContainer;
            this._babylonScene._blockEntityCollection = false;
            promise = primitive._instanceData.promise;
        }
        else {
            var promises = new Array();
            this._babylonScene._blockEntityCollection = !!this._assetContainer;
            var babylonMesh_1 = new babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.Mesh(name, this._babylonScene);
            babylonMesh_1._parentContainer = this._assetContainer;
            this._babylonScene._blockEntityCollection = false;
            babylonMesh_1.overrideMaterialSideOrientation = this._babylonScene.useRightHandedSystem ? babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.Material.CounterClockWiseSideOrientation : babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.Material.ClockWiseSideOrientation;
            this._createMorphTargets(context, node, mesh, primitive, babylonMesh_1);
            promises.push(this._loadVertexDataAsync(context, primitive, babylonMesh_1).then(function (babylonGeometry) {
                return _this._loadMorphTargetsAsync(context, primitive, babylonMesh_1, babylonGeometry).then(function () {
                    if (_this._disposed) {
                        return;
                    }
                    _this._babylonScene._blockEntityCollection = !!_this._assetContainer;
                    babylonGeometry.applyToMesh(babylonMesh_1);
                    babylonGeometry._parentContainer = _this._assetContainer;
                    _this._babylonScene._blockEntityCollection = false;
                });
            }));
            var babylonDrawMode = GLTFLoader._GetDrawMode(context, primitive.mode);
            if (primitive.material == undefined) {
                var babylonMaterial = this._defaultBabylonMaterialData[babylonDrawMode];
                if (!babylonMaterial) {
                    babylonMaterial = this._createDefaultMaterial("__GLTFLoader._default", babylonDrawMode);
                    this._parent.onMaterialLoadedObservable.notifyObservers(babylonMaterial);
                    this._defaultBabylonMaterialData[babylonDrawMode] = babylonMaterial;
                }
                babylonMesh_1.material = babylonMaterial;
            }
            else if (!this.parent.skipMaterials) {
                var material = ArrayItem.Get("".concat(context, "/material"), this._gltf.materials, primitive.material);
                promises.push(this._loadMaterialAsync("/materials/".concat(material.index), material, babylonMesh_1, babylonDrawMode, function (babylonMaterial) {
                    babylonMesh_1.material = babylonMaterial;
                }));
            }
            promise = Promise.all(promises);
            if (shouldInstance) {
                primitive._instanceData = {
                    babylonSourceMesh: babylonMesh_1,
                    promise: promise,
                };
            }
            babylonAbstractMesh = babylonMesh_1;
        }
        GLTFLoader.AddPointerMetadata(babylonAbstractMesh, context);
        this._parent.onMeshLoadedObservable.notifyObservers(babylonAbstractMesh);
        assign(babylonAbstractMesh);
        this.logClose();
        return promise.then(function () {
            return babylonAbstractMesh;
        });
    };
    GLTFLoader.prototype._loadVertexDataAsync = function (context, primitive, babylonMesh) {
        var _this = this;
        var extensionPromise = this._extensionsLoadVertexDataAsync(context, primitive, babylonMesh);
        if (extensionPromise) {
            return extensionPromise;
        }
        var attributes = primitive.attributes;
        if (!attributes) {
            throw new Error("".concat(context, ": Attributes are missing"));
        }
        var promises = new Array();
        var babylonGeometry = new babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.Geometry(babylonMesh.name, this._babylonScene);
        if (primitive.indices == undefined) {
            babylonMesh.isUnIndexed = true;
        }
        else {
            var accessor = ArrayItem.Get("".concat(context, "/indices"), this._gltf.accessors, primitive.indices);
            promises.push(this._loadIndicesAccessorAsync("/accessors/".concat(accessor.index), accessor).then(function (data) {
                babylonGeometry.setIndices(data);
            }));
        }
        var loadAttribute = function (name, kind, callback) {
            if (attributes[name] == undefined) {
                return;
            }
            babylonMesh._delayInfo = babylonMesh._delayInfo || [];
            if (babylonMesh._delayInfo.indexOf(kind) === -1) {
                babylonMesh._delayInfo.push(kind);
            }
            var accessor = ArrayItem.Get("".concat(context, "/attributes/").concat(name), _this._gltf.accessors, attributes[name]);
            promises.push(_this._loadVertexAccessorAsync("/accessors/".concat(accessor.index), accessor, kind).then(function (babylonVertexBuffer) {
                var _a, _b;
                if (babylonVertexBuffer.getKind() === babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.PositionKind && !_this.parent.alwaysComputeBoundingBox && !babylonMesh.skeleton) {
                    if (accessor.min && accessor.max) {
                        var min = (_a = babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Vector3[0]).copyFromFloats.apply(_a, accessor.min);
                        var max = (_b = babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Vector3[1]).copyFromFloats.apply(_b, accessor.max);
                        if (accessor.normalized && accessor.componentType !== 5126 /* AccessorComponentType.FLOAT */) {
                            var divider = 1;
                            switch (accessor.componentType) {
                                case 5120 /* AccessorComponentType.BYTE */:
                                    divider = 127.0;
                                    break;
                                case 5121 /* AccessorComponentType.UNSIGNED_BYTE */:
                                    divider = 255.0;
                                    break;
                                case 5122 /* AccessorComponentType.SHORT */:
                                    divider = 32767.0;
                                    break;
                                case 5123 /* AccessorComponentType.UNSIGNED_SHORT */:
                                    divider = 65535.0;
                                    break;
                            }
                            var oneOverDivider = 1 / divider;
                            min.scaleInPlace(oneOverDivider);
                            max.scaleInPlace(oneOverDivider);
                        }
                        babylonGeometry._boundingInfo = new babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.BoundingInfo(min, max);
                        babylonGeometry.useBoundingInfoFromGeometry = true;
                    }
                }
                babylonGeometry.setVerticesBuffer(babylonVertexBuffer, accessor.count);
            }));
            if (kind == babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.MatricesIndicesExtraKind) {
                babylonMesh.numBoneInfluencers = 8;
            }
            if (callback) {
                callback(accessor);
            }
        };
        loadAttribute("POSITION", babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.PositionKind);
        loadAttribute("NORMAL", babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.NormalKind);
        loadAttribute("TANGENT", babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.TangentKind);
        loadAttribute("TEXCOORD_0", babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UVKind);
        loadAttribute("TEXCOORD_1", babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UV2Kind);
        loadAttribute("TEXCOORD_2", babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UV3Kind);
        loadAttribute("TEXCOORD_3", babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UV4Kind);
        loadAttribute("TEXCOORD_4", babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UV5Kind);
        loadAttribute("TEXCOORD_5", babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UV6Kind);
        loadAttribute("JOINTS_0", babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.MatricesIndicesKind);
        loadAttribute("WEIGHTS_0", babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.MatricesWeightsKind);
        loadAttribute("JOINTS_1", babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.MatricesIndicesExtraKind);
        loadAttribute("WEIGHTS_1", babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.MatricesWeightsExtraKind);
        loadAttribute("COLOR_0", babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.ColorKind, function (accessor) {
            if (accessor.type === "VEC4" /* AccessorType.VEC4 */) {
                babylonMesh.hasVertexAlpha = true;
            }
        });
        return Promise.all(promises).then(function () {
            return babylonGeometry;
        });
    };
    GLTFLoader.prototype._createMorphTargets = function (context, node, mesh, primitive, babylonMesh) {
        if (!primitive.targets) {
            return;
        }
        if (node._numMorphTargets == undefined) {
            node._numMorphTargets = primitive.targets.length;
        }
        else if (primitive.targets.length !== node._numMorphTargets) {
            throw new Error("".concat(context, ": Primitives do not have the same number of targets"));
        }
        var targetNames = mesh.extras ? mesh.extras.targetNames : null;
        this._babylonScene._blockEntityCollection = !!this._assetContainer;
        babylonMesh.morphTargetManager = new babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.MorphTargetManager(this._babylonScene);
        babylonMesh.morphTargetManager._parentContainer = this._assetContainer;
        this._babylonScene._blockEntityCollection = false;
        babylonMesh.morphTargetManager.areUpdatesFrozen = true;
        for (var index = 0; index < primitive.targets.length; index++) {
            var weight = node.weights ? node.weights[index] : mesh.weights ? mesh.weights[index] : 0;
            var name_3 = targetNames ? targetNames[index] : "morphTarget".concat(index);
            babylonMesh.morphTargetManager.addTarget(new babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.MorphTarget(name_3, weight, babylonMesh.getScene()));
            // TODO: tell the target whether it has positions, normals, tangents
        }
    };
    GLTFLoader.prototype._loadMorphTargetsAsync = function (context, primitive, babylonMesh, babylonGeometry) {
        if (!primitive.targets) {
            return Promise.resolve();
        }
        var promises = new Array();
        var morphTargetManager = babylonMesh.morphTargetManager;
        for (var index = 0; index < morphTargetManager.numTargets; index++) {
            var babylonMorphTarget = morphTargetManager.getTarget(index);
            promises.push(this._loadMorphTargetVertexDataAsync("".concat(context, "/targets/").concat(index), babylonGeometry, primitive.targets[index], babylonMorphTarget));
        }
        return Promise.all(promises).then(function () {
            morphTargetManager.areUpdatesFrozen = false;
        });
    };
    GLTFLoader.prototype._loadMorphTargetVertexDataAsync = function (context, babylonGeometry, attributes, babylonMorphTarget) {
        var _this = this;
        var promises = new Array();
        var loadAttribute = function (attribute, kind, setData) {
            if (attributes[attribute] == undefined) {
                return;
            }
            var babylonVertexBuffer = babylonGeometry.getVertexBuffer(kind);
            if (!babylonVertexBuffer) {
                return;
            }
            var accessor = ArrayItem.Get("".concat(context, "/").concat(attribute), _this._gltf.accessors, attributes[attribute]);
            promises.push(_this._loadFloatAccessorAsync("/accessors/".concat(accessor.index), accessor).then(function (data) {
                setData(babylonVertexBuffer, data);
            }));
        };
        loadAttribute("POSITION", babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.PositionKind, function (babylonVertexBuffer, data) {
            var positions = new Float32Array(data.length);
            babylonVertexBuffer.forEach(data.length, function (value, index) {
                positions[index] = data[index] + value;
            });
            babylonMorphTarget.setPositions(positions);
        });
        loadAttribute("NORMAL", babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.NormalKind, function (babylonVertexBuffer, data) {
            var normals = new Float32Array(data.length);
            babylonVertexBuffer.forEach(normals.length, function (value, index) {
                normals[index] = data[index] + value;
            });
            babylonMorphTarget.setNormals(normals);
        });
        loadAttribute("TANGENT", babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.TangentKind, function (babylonVertexBuffer, data) {
            var tangents = new Float32Array((data.length / 3) * 4);
            var dataIndex = 0;
            babylonVertexBuffer.forEach((data.length / 3) * 4, function (value, index) {
                // Tangent data for morph targets is stored as xyz delta.
                // The vertexData.tangent is stored as xyzw.
                // So we need to skip every fourth vertexData.tangent.
                if ((index + 1) % 4 !== 0) {
                    tangents[dataIndex] = data[dataIndex] + value;
                    dataIndex++;
                }
            });
            babylonMorphTarget.setTangents(tangents);
        });
        return Promise.all(promises).then(function () { });
    };
    GLTFLoader._LoadTransform = function (node, babylonNode) {
        // Ignore the TRS of skinned nodes.
        // See https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#skins (second implementation note)
        if (node.skin != undefined) {
            return;
        }
        var position = babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.Vector3.Zero();
        var rotation = babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.Quaternion.Identity();
        var scaling = babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.Vector3.One();
        if (node.matrix) {
            var matrix = babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.Matrix.FromArray(node.matrix);
            matrix.decompose(scaling, rotation, position);
        }
        else {
            if (node.translation) {
                position = babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArray(node.translation);
            }
            if (node.rotation) {
                rotation = babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.Quaternion.FromArray(node.rotation);
            }
            if (node.scale) {
                scaling = babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArray(node.scale);
            }
        }
        babylonNode.position = position;
        babylonNode.rotationQuaternion = rotation;
        babylonNode.scaling = scaling;
    };
    GLTFLoader.prototype._loadSkinAsync = function (context, node, skin, assign) {
        var _this = this;
        var extensionPromise = this._extensionsLoadSkinAsync(context, node, skin);
        if (extensionPromise) {
            return extensionPromise;
        }
        if (skin._data) {
            assign(skin._data.babylonSkeleton);
            return skin._data.promise;
        }
        var skeletonId = "skeleton".concat(skin.index);
        this._babylonScene._blockEntityCollection = !!this._assetContainer;
        var babylonSkeleton = new babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.Skeleton(skin.name || skeletonId, skeletonId, this._babylonScene);
        babylonSkeleton._parentContainer = this._assetContainer;
        this._babylonScene._blockEntityCollection = false;
        this._loadBones(context, skin, babylonSkeleton);
        var promise = this._loadSkinInverseBindMatricesDataAsync(context, skin).then(function (inverseBindMatricesData) {
            _this._updateBoneMatrices(babylonSkeleton, inverseBindMatricesData);
        });
        skin._data = {
            babylonSkeleton: babylonSkeleton,
            promise: promise,
        };
        assign(babylonSkeleton);
        return promise;
    };
    GLTFLoader.prototype._loadBones = function (context, skin, babylonSkeleton) {
        if (skin.skeleton == undefined || this._parent.alwaysComputeSkeletonRootNode) {
            var rootNode = this._findSkeletonRootNode("".concat(context, "/joints"), skin.joints);
            if (rootNode) {
                if (skin.skeleton === undefined) {
                    skin.skeleton = rootNode.index;
                }
                else {
                    var isParent = function (a, b) {
                        for (; b.parent; b = b.parent) {
                            if (b.parent === a) {
                                return true;
                            }
                        }
                        return false;
                    };
                    var skeletonNode = ArrayItem.Get("".concat(context, "/skeleton"), this._gltf.nodes, skin.skeleton);
                    if (skeletonNode !== rootNode && !isParent(skeletonNode, rootNode)) {
                        babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.Logger.Warn("".concat(context, "/skeleton: Overriding with nearest common ancestor as skeleton node is not a common root"));
                        skin.skeleton = rootNode.index;
                    }
                }
            }
            else {
                babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.Logger.Warn("".concat(context, ": Failed to find common root"));
            }
        }
        var babylonBones = {};
        for (var _i = 0, _a = skin.joints; _i < _a.length; _i++) {
            var index = _a[_i];
            var node = ArrayItem.Get("".concat(context, "/joints/").concat(index), this._gltf.nodes, index);
            this._loadBone(node, skin, babylonSkeleton, babylonBones);
        }
    };
    GLTFLoader.prototype._findSkeletonRootNode = function (context, joints) {
        if (joints.length === 0) {
            return null;
        }
        var paths = {};
        for (var _i = 0, joints_1 = joints; _i < joints_1.length; _i++) {
            var index = joints_1[_i];
            var path = new Array();
            var node = ArrayItem.Get("".concat(context, "/").concat(index), this._gltf.nodes, index);
            while (node.index !== -1) {
                path.unshift(node);
                node = node.parent;
            }
            paths[index] = path;
        }
        var rootNode = null;
        for (var i = 0;; ++i) {
            var path = paths[joints[0]];
            if (i >= path.length) {
                return rootNode;
            }
            var node = path[i];
            for (var j = 1; j < joints.length; ++j) {
                path = paths[joints[j]];
                if (i >= path.length || node !== path[i]) {
                    return rootNode;
                }
            }
            rootNode = node;
        }
    };
    GLTFLoader.prototype._loadBone = function (node, skin, babylonSkeleton, babylonBones) {
        var babylonBone = babylonBones[node.index];
        if (babylonBone) {
            return babylonBone;
        }
        var parentBabylonBone = null;
        if (node.index !== skin.skeleton) {
            if (node.parent && node.parent.index !== -1) {
                parentBabylonBone = this._loadBone(node.parent, skin, babylonSkeleton, babylonBones);
            }
            else if (skin.skeleton !== undefined) {
                babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.Logger.Warn("/skins/".concat(skin.index, "/skeleton: Skeleton node is not a common root"));
            }
        }
        var boneIndex = skin.joints.indexOf(node.index);
        babylonBone = new babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.Bone(node.name || "joint".concat(node.index), babylonSkeleton, parentBabylonBone, this._getNodeMatrix(node), null, null, boneIndex);
        babylonBones[node.index] = babylonBone;
        // Wait until the scene is loaded to ensure the transform nodes are loaded.
        this._postSceneLoadActions.push(function () {
            // Link the Babylon bone with the corresponding Babylon transform node.
            // A glTF joint is a pointer to a glTF node in the glTF node hierarchy similar to Unity3D.
            babylonBone.linkTransformNode(node._babylonTransformNode);
        });
        return babylonBone;
    };
    GLTFLoader.prototype._loadSkinInverseBindMatricesDataAsync = function (context, skin) {
        if (skin.inverseBindMatrices == undefined) {
            return Promise.resolve(null);
        }
        var accessor = ArrayItem.Get("".concat(context, "/inverseBindMatrices"), this._gltf.accessors, skin.inverseBindMatrices);
        return this._loadFloatAccessorAsync("/accessors/".concat(accessor.index), accessor);
    };
    GLTFLoader.prototype._updateBoneMatrices = function (babylonSkeleton, inverseBindMatricesData) {
        for (var _i = 0, _a = babylonSkeleton.bones; _i < _a.length; _i++) {
            var babylonBone = _a[_i];
            var baseMatrix = babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.Matrix.Identity();
            var boneIndex = babylonBone._index;
            if (inverseBindMatricesData && boneIndex !== -1) {
                babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.Matrix.FromArrayToRef(inverseBindMatricesData, boneIndex * 16, baseMatrix);
                baseMatrix.invertToRef(baseMatrix);
            }
            var babylonParentBone = babylonBone.getParent();
            if (babylonParentBone) {
                baseMatrix.multiplyToRef(babylonParentBone.getAbsoluteInverseBindMatrix(), baseMatrix);
            }
            babylonBone.updateMatrix(baseMatrix, false, false);
            babylonBone._updateAbsoluteBindMatrices(undefined, false);
        }
    };
    GLTFLoader.prototype._getNodeMatrix = function (node) {
        return node.matrix
            ? babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.Matrix.FromArray(node.matrix)
            : babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.Matrix.Compose(node.scale ? babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArray(node.scale) : babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.Vector3.One(), node.rotation ? babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.Quaternion.FromArray(node.rotation) : babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.Quaternion.Identity(), node.translation ? babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArray(node.translation) : babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.Vector3.Zero());
    };
    /**
     * Loads a glTF camera.
     * @param context The context when loading the asset
     * @param camera The glTF camera property
     * @param assign A function called synchronously after parsing the glTF properties
     * @returns A promise that resolves with the loaded Babylon camera when the load is complete
     */
    GLTFLoader.prototype.loadCameraAsync = function (context, camera, assign) {
        if (assign === void 0) { assign = function () { }; }
        var extensionPromise = this._extensionsLoadCameraAsync(context, camera, assign);
        if (extensionPromise) {
            return extensionPromise;
        }
        var promises = new Array();
        this.logOpen("".concat(context, " ").concat(camera.name || ""));
        this._babylonScene._blockEntityCollection = !!this._assetContainer;
        var babylonCamera = new babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.FreeCamera(camera.name || "camera".concat(camera.index), babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.Vector3.Zero(), this._babylonScene, false);
        babylonCamera._parentContainer = this._assetContainer;
        this._babylonScene._blockEntityCollection = false;
        babylonCamera.ignoreParentScaling = true;
        camera._babylonCamera = babylonCamera;
        babylonCamera.rotation = new babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, Math.PI, 0);
        switch (camera.type) {
            case "perspective" /* CameraType.PERSPECTIVE */: {
                var perspective = camera.perspective;
                if (!perspective) {
                    throw new Error("".concat(context, ": Camera perspective properties are missing"));
                }
                babylonCamera.fov = perspective.yfov;
                babylonCamera.minZ = perspective.znear;
                babylonCamera.maxZ = perspective.zfar || 0;
                break;
            }
            case "orthographic" /* CameraType.ORTHOGRAPHIC */: {
                if (!camera.orthographic) {
                    throw new Error("".concat(context, ": Camera orthographic properties are missing"));
                }
                babylonCamera.mode = babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.Camera.ORTHOGRAPHIC_CAMERA;
                babylonCamera.orthoLeft = -camera.orthographic.xmag;
                babylonCamera.orthoRight = camera.orthographic.xmag;
                babylonCamera.orthoBottom = -camera.orthographic.ymag;
                babylonCamera.orthoTop = camera.orthographic.ymag;
                babylonCamera.minZ = camera.orthographic.znear;
                babylonCamera.maxZ = camera.orthographic.zfar;
                break;
            }
            default: {
                throw new Error("".concat(context, ": Invalid camera type (").concat(camera.type, ")"));
            }
        }
        GLTFLoader.AddPointerMetadata(babylonCamera, context);
        this._parent.onCameraLoadedObservable.notifyObservers(babylonCamera);
        assign(babylonCamera);
        this.logClose();
        return Promise.all(promises).then(function () {
            return babylonCamera;
        });
    };
    GLTFLoader.prototype._loadAnimationsAsync = function () {
        var animations = this._gltf.animations;
        if (!animations) {
            return Promise.resolve();
        }
        var promises = new Array();
        for (var index = 0; index < animations.length; index++) {
            var animation = animations[index];
            promises.push(this.loadAnimationAsync("/animations/".concat(animation.index), animation).then(function (animationGroup) {
                // Delete the animation group if it ended up not having any animations in it.
                if (animationGroup.targetedAnimations.length === 0) {
                    animationGroup.dispose();
                }
            }));
        }
        return Promise.all(promises).then(function () { });
    };
    /**
     * Loads a glTF animation.
     * @param context The context when loading the asset
     * @param animation The glTF animation property
     * @returns A promise that resolves with the loaded Babylon animation group when the load is complete
     */
    GLTFLoader.prototype.loadAnimationAsync = function (context, animation) {
        var promise = this._extensionsLoadAnimationAsync(context, animation);
        if (promise) {
            return promise;
        }
        this._babylonScene._blockEntityCollection = !!this._assetContainer;
        var babylonAnimationGroup = new babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.AnimationGroup(animation.name || "animation".concat(animation.index), this._babylonScene);
        babylonAnimationGroup._parentContainer = this._assetContainer;
        this._babylonScene._blockEntityCollection = false;
        animation._babylonAnimationGroup = babylonAnimationGroup;
        var promises = new Array();
        ArrayItem.Assign(animation.channels);
        ArrayItem.Assign(animation.samplers);
        for (var _i = 0, _a = animation.channels; _i < _a.length; _i++) {
            var channel = _a[_i];
            promises.push(this._loadAnimationChannelAsync("".concat(context, "/channels/").concat(channel.index), context, animation, channel, function (babylonTarget, babylonAnimation) {
                babylonTarget.animations = babylonTarget.animations || [];
                babylonTarget.animations.push(babylonAnimation);
                babylonAnimationGroup.addTargetedAnimation(babylonAnimation, babylonTarget);
            }));
        }
        return Promise.all(promises).then(function () {
            babylonAnimationGroup.normalize(0);
            return babylonAnimationGroup;
        });
    };
    /**
     * @hidden
     * Loads a glTF animation channel.
     * @param context The context when loading the asset
     * @param animationContext The context of the animation when loading the asset
     * @param animation The glTF animation property
     * @param channel The glTF animation channel property
     * @param onLoad Called for each animation loaded
     * @returns A void promise that resolves when the load is complete
     */
    GLTFLoader.prototype._loadAnimationChannelAsync = function (context, animationContext, animation, channel, onLoad) {
        var promise = this._extensionsLoadAnimationChannelAsync(context, animationContext, animation, channel, onLoad);
        if (promise) {
            return promise;
        }
        if (channel.target.node == undefined) {
            return Promise.resolve();
        }
        var targetNode = ArrayItem.Get("".concat(context, "/target/node"), this._gltf.nodes, channel.target.node);
        // Ignore animations that have no animation targets.
        if ((channel.target.path === "weights" /* AnimationChannelTargetPath.WEIGHTS */ && !targetNode._numMorphTargets) ||
            (channel.target.path !== "weights" /* AnimationChannelTargetPath.WEIGHTS */ && !targetNode._babylonTransformNode)) {
            return Promise.resolve();
        }
        var properties;
        switch (channel.target.path) {
            case "translation" /* AnimationChannelTargetPath.TRANSLATION */: {
                properties = _glTFLoaderAnimation__WEBPACK_IMPORTED_MODULE_2__.nodeAnimationData.translation;
                break;
            }
            case "rotation" /* AnimationChannelTargetPath.ROTATION */: {
                properties = _glTFLoaderAnimation__WEBPACK_IMPORTED_MODULE_2__.nodeAnimationData.rotation;
                break;
            }
            case "scale" /* AnimationChannelTargetPath.SCALE */: {
                properties = _glTFLoaderAnimation__WEBPACK_IMPORTED_MODULE_2__.nodeAnimationData.scale;
                break;
            }
            case "weights" /* AnimationChannelTargetPath.WEIGHTS */: {
                properties = _glTFLoaderAnimation__WEBPACK_IMPORTED_MODULE_2__.nodeAnimationData.weights;
                break;
            }
            default: {
                throw new Error("".concat(context, "/target/path: Invalid value (").concat(channel.target.path, ")"));
            }
        }
        var targetInfo = {
            target: targetNode,
            properties: properties,
        };
        return this._loadAnimationChannelFromTargetInfoAsync(context, animationContext, animation, channel, targetInfo, onLoad);
    };
    /**
     * @hidden
     * Loads a glTF animation channel.
     * @param context The context when loading the asset
     * @param animationContext The context of the animation when loading the asset
     * @param animation The glTF animation property
     * @param channel The glTF animation channel property
     * @param targetInfo The glTF target and properties
     * @param onLoad Called for each animation loaded
     * @returns A void promise that resolves when the load is complete
     */
    GLTFLoader.prototype._loadAnimationChannelFromTargetInfoAsync = function (context, animationContext, animation, channel, targetInfo, onLoad) {
        var fps = this.parent.targetFps;
        var invfps = 1 / fps;
        var sampler = ArrayItem.Get("".concat(context, "/sampler"), animation.samplers, channel.sampler);
        return this._loadAnimationSamplerAsync("".concat(animationContext, "/samplers/").concat(channel.sampler), sampler).then(function (data) {
            var numAnimations = 0;
            // Extract the corresponding values from the read value.
            // GLTF values may be dispatched to several Babylon properties.
            // For example, baseColorFactor [`r`, `g`, `b`, `a`] is dispatched to
            // - albedoColor as Color3(`r`, `g`, `b`)
            // - alpha as `a`
            for (var _i = 0, _a = targetInfo.properties; _i < _a.length; _i++) {
                var property = _a[_i];
                var stride = property.getStride(targetInfo.target);
                var input = data.input;
                var output = data.output;
                var keys = new Array(input.length);
                var outputOffset = 0;
                switch (data.interpolation) {
                    case "STEP" /* AnimationSamplerInterpolation.STEP */: {
                        for (var index = 0; index < input.length; index++) {
                            var value = property.getValue(targetInfo.target, output, outputOffset, 1);
                            outputOffset += stride;
                            keys[index] = {
                                frame: input[index] * fps,
                                value: value,
                                interpolation: babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.AnimationKeyInterpolation.STEP,
                            };
                        }
                        break;
                    }
                    case "CUBICSPLINE" /* AnimationSamplerInterpolation.CUBICSPLINE */: {
                        for (var index = 0; index < input.length; index++) {
                            var inTangent = property.getValue(targetInfo.target, output, outputOffset, invfps);
                            outputOffset += stride;
                            var value = property.getValue(targetInfo.target, output, outputOffset, 1);
                            outputOffset += stride;
                            var outTangent = property.getValue(targetInfo.target, output, outputOffset, invfps);
                            outputOffset += stride;
                            keys[index] = {
                                frame: input[index] * fps,
                                inTangent: inTangent,
                                value: value,
                                outTangent: outTangent,
                            };
                        }
                        break;
                    }
                    case "LINEAR" /* AnimationSamplerInterpolation.LINEAR */: {
                        for (var index = 0; index < input.length; index++) {
                            var value = property.getValue(targetInfo.target, output, outputOffset, 1);
                            outputOffset += stride;
                            keys[index] = {
                                frame: input[index] * fps,
                                value: value,
                            };
                        }
                        break;
                    }
                }
                if (outputOffset > 0) {
                    var name_4 = "".concat(animation.name || "animation".concat(animation.index), "_channel").concat(channel.index, "_").concat(numAnimations);
                    property.buildAnimations(targetInfo.target, name_4, fps, keys, function (babylonAnimatable, babylonAnimation) {
                        ++numAnimations;
                        onLoad(babylonAnimatable, babylonAnimation);
                    });
                }
            }
        });
    };
    GLTFLoader.prototype._loadAnimationSamplerAsync = function (context, sampler) {
        if (sampler._data) {
            return sampler._data;
        }
        var interpolation = sampler.interpolation || "LINEAR" /* AnimationSamplerInterpolation.LINEAR */;
        switch (interpolation) {
            case "STEP" /* AnimationSamplerInterpolation.STEP */:
            case "LINEAR" /* AnimationSamplerInterpolation.LINEAR */:
            case "CUBICSPLINE" /* AnimationSamplerInterpolation.CUBICSPLINE */: {
                break;
            }
            default: {
                throw new Error("".concat(context, "/interpolation: Invalid value (").concat(sampler.interpolation, ")"));
            }
        }
        var inputAccessor = ArrayItem.Get("".concat(context, "/input"), this._gltf.accessors, sampler.input);
        var outputAccessor = ArrayItem.Get("".concat(context, "/output"), this._gltf.accessors, sampler.output);
        sampler._data = Promise.all([
            this._loadFloatAccessorAsync("/accessors/".concat(inputAccessor.index), inputAccessor),
            this._loadFloatAccessorAsync("/accessors/".concat(outputAccessor.index), outputAccessor),
        ]).then(function (_a) {
            var inputData = _a[0], outputData = _a[1];
            return {
                input: inputData,
                interpolation: interpolation,
                output: outputData,
            };
        });
        return sampler._data;
    };
    /**
     * Loads a glTF buffer.
     * @param context The context when loading the asset
     * @param buffer The glTF buffer property
     * @param byteOffset The byte offset to use
     * @param byteLength The byte length to use
     * @returns A promise that resolves with the loaded data when the load is complete
     */
    GLTFLoader.prototype.loadBufferAsync = function (context, buffer, byteOffset, byteLength) {
        var extensionPromise = this._extensionsLoadBufferAsync(context, buffer, byteOffset, byteLength);
        if (extensionPromise) {
            return extensionPromise;
        }
        if (!buffer._data) {
            if (buffer.uri) {
                buffer._data = this.loadUriAsync("".concat(context, "/uri"), buffer, buffer.uri);
            }
            else {
                if (!this._bin) {
                    throw new Error("".concat(context, ": Uri is missing or the binary glTF is missing its binary chunk"));
                }
                buffer._data = this._bin.readAsync(0, buffer.byteLength);
            }
        }
        return buffer._data.then(function (data) {
            try {
                return new Uint8Array(data.buffer, data.byteOffset + byteOffset, byteLength);
            }
            catch (e) {
                throw new Error("".concat(context, ": ").concat(e.message));
            }
        });
    };
    /**
     * Loads a glTF buffer view.
     * @param context The context when loading the asset
     * @param bufferView The glTF buffer view property
     * @returns A promise that resolves with the loaded data when the load is complete
     */
    GLTFLoader.prototype.loadBufferViewAsync = function (context, bufferView) {
        var extensionPromise = this._extensionsLoadBufferViewAsync(context, bufferView);
        if (extensionPromise) {
            return extensionPromise;
        }
        if (bufferView._data) {
            return bufferView._data;
        }
        var buffer = ArrayItem.Get("".concat(context, "/buffer"), this._gltf.buffers, bufferView.buffer);
        bufferView._data = this.loadBufferAsync("/buffers/".concat(buffer.index), buffer, bufferView.byteOffset || 0, bufferView.byteLength);
        return bufferView._data;
    };
    GLTFLoader.prototype._loadAccessorAsync = function (context, accessor, constructor) {
        var _this = this;
        if (accessor._data) {
            return accessor._data;
        }
        var numComponents = GLTFLoader._GetNumComponents(context, accessor.type);
        var byteStride = numComponents * babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.GetTypeByteLength(accessor.componentType);
        var length = numComponents * accessor.count;
        if (accessor.bufferView == undefined) {
            accessor._data = Promise.resolve(new constructor(length));
        }
        else {
            var bufferView_1 = ArrayItem.Get("".concat(context, "/bufferView"), this._gltf.bufferViews, accessor.bufferView);
            accessor._data = this.loadBufferViewAsync("/bufferViews/".concat(bufferView_1.index), bufferView_1).then(function (data) {
                if (accessor.componentType === 5126 /* AccessorComponentType.FLOAT */ && !accessor.normalized && (!bufferView_1.byteStride || bufferView_1.byteStride === byteStride)) {
                    return GLTFLoader._GetTypedArray(context, accessor.componentType, data, accessor.byteOffset, length);
                }
                else {
                    var typedArray_1 = new constructor(length);
                    babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.ForEach(data, accessor.byteOffset || 0, bufferView_1.byteStride || byteStride, numComponents, accessor.componentType, typedArray_1.length, accessor.normalized || false, function (value, index) {
                        typedArray_1[index] = value;
                    });
                    return typedArray_1;
                }
            });
        }
        if (accessor.sparse) {
            var sparse_1 = accessor.sparse;
            accessor._data = accessor._data.then(function (data) {
                var typedArray = data;
                var indicesBufferView = ArrayItem.Get("".concat(context, "/sparse/indices/bufferView"), _this._gltf.bufferViews, sparse_1.indices.bufferView);
                var valuesBufferView = ArrayItem.Get("".concat(context, "/sparse/values/bufferView"), _this._gltf.bufferViews, sparse_1.values.bufferView);
                return Promise.all([
                    _this.loadBufferViewAsync("/bufferViews/".concat(indicesBufferView.index), indicesBufferView),
                    _this.loadBufferViewAsync("/bufferViews/".concat(valuesBufferView.index), valuesBufferView),
                ]).then(function (_a) {
                    var indicesData = _a[0], valuesData = _a[1];
                    var indices = GLTFLoader._GetTypedArray("".concat(context, "/sparse/indices"), sparse_1.indices.componentType, indicesData, sparse_1.indices.byteOffset, sparse_1.count);
                    var sparseLength = numComponents * sparse_1.count;
                    var values;
                    if (accessor.componentType === 5126 /* AccessorComponentType.FLOAT */ && !accessor.normalized) {
                        values = GLTFLoader._GetTypedArray("".concat(context, "/sparse/values"), accessor.componentType, valuesData, sparse_1.values.byteOffset, sparseLength);
                    }
                    else {
                        var sparseData = GLTFLoader._GetTypedArray("".concat(context, "/sparse/values"), accessor.componentType, valuesData, sparse_1.values.byteOffset, sparseLength);
                        values = new constructor(sparseLength);
                        babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.ForEach(sparseData, 0, byteStride, numComponents, accessor.componentType, values.length, accessor.normalized || false, function (value, index) {
                            values[index] = value;
                        });
                    }
                    var valuesIndex = 0;
                    for (var indicesIndex = 0; indicesIndex < indices.length; indicesIndex++) {
                        var dataIndex = indices[indicesIndex] * numComponents;
                        for (var componentIndex = 0; componentIndex < numComponents; componentIndex++) {
                            typedArray[dataIndex++] = values[valuesIndex++];
                        }
                    }
                    return typedArray;
                });
            });
        }
        return accessor._data;
    };
    /**
     * @internal
     */
    GLTFLoader.prototype._loadFloatAccessorAsync = function (context, accessor) {
        return this._loadAccessorAsync(context, accessor, Float32Array);
    };
    /**
     * @internal
     */
    GLTFLoader.prototype._loadIndicesAccessorAsync = function (context, accessor) {
        if (accessor.type !== "SCALAR" /* AccessorType.SCALAR */) {
            throw new Error("".concat(context, "/type: Invalid value ").concat(accessor.type));
        }
        if (accessor.componentType !== 5121 /* AccessorComponentType.UNSIGNED_BYTE */ &&
            accessor.componentType !== 5123 /* AccessorComponentType.UNSIGNED_SHORT */ &&
            accessor.componentType !== 5125 /* AccessorComponentType.UNSIGNED_INT */) {
            throw new Error("".concat(context, "/componentType: Invalid value ").concat(accessor.componentType));
        }
        if (accessor._data) {
            return accessor._data;
        }
        if (accessor.sparse) {
            var constructor = GLTFLoader._GetTypedArrayConstructor("".concat(context, "/componentType"), accessor.componentType);
            accessor._data = this._loadAccessorAsync(context, accessor, constructor);
        }
        else {
            var bufferView = ArrayItem.Get("".concat(context, "/bufferView"), this._gltf.bufferViews, accessor.bufferView);
            accessor._data = this.loadBufferViewAsync("/bufferViews/".concat(bufferView.index), bufferView).then(function (data) {
                return GLTFLoader._GetTypedArray(context, accessor.componentType, data, accessor.byteOffset, accessor.count);
            });
        }
        return accessor._data;
    };
    /**
     * @internal
     */
    GLTFLoader.prototype._loadVertexBufferViewAsync = function (bufferView) {
        if (bufferView._babylonBuffer) {
            return bufferView._babylonBuffer;
        }
        var engine = this._babylonScene.getEngine();
        bufferView._babylonBuffer = this.loadBufferViewAsync("/bufferViews/".concat(bufferView.index), bufferView).then(function (data) {
            return new babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.Buffer(engine, data, false);
        });
        return bufferView._babylonBuffer;
    };
    /**
     * @internal
     */
    GLTFLoader.prototype._loadVertexAccessorAsync = function (context, accessor, kind) {
        var _a;
        if ((_a = accessor._babylonVertexBuffer) === null || _a === void 0 ? void 0 : _a[kind]) {
            return accessor._babylonVertexBuffer[kind];
        }
        if (!accessor._babylonVertexBuffer) {
            accessor._babylonVertexBuffer = {};
        }
        var engine = this._babylonScene.getEngine();
        if (accessor.sparse || accessor.bufferView == undefined) {
            accessor._babylonVertexBuffer[kind] = this._loadFloatAccessorAsync(context, accessor).then(function (data) {
                return new babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer(engine, data, kind, false);
            });
        }
        else {
            var bufferView_2 = ArrayItem.Get("".concat(context, "/bufferView"), this._gltf.bufferViews, accessor.bufferView);
            accessor._babylonVertexBuffer[kind] = this._loadVertexBufferViewAsync(bufferView_2).then(function (babylonBuffer) {
                var numComponents = GLTFLoader._GetNumComponents(context, accessor.type);
                return new babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer(engine, babylonBuffer, kind, false, undefined, bufferView_2.byteStride, undefined, accessor.byteOffset, numComponents, accessor.componentType, accessor.normalized, true, undefined, true);
            });
        }
        return accessor._babylonVertexBuffer[kind];
    };
    GLTFLoader.prototype._loadMaterialMetallicRoughnessPropertiesAsync = function (context, properties, babylonMaterial) {
        if (!(babylonMaterial instanceof babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.PBRMaterial)) {
            throw new Error("".concat(context, ": Material type not supported"));
        }
        var promises = new Array();
        if (properties) {
            if (properties.baseColorFactor) {
                babylonMaterial.albedoColor = babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.Color3.FromArray(properties.baseColorFactor);
                babylonMaterial.alpha = properties.baseColorFactor[3];
            }
            else {
                babylonMaterial.albedoColor = babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.Color3.White();
            }
            babylonMaterial.metallic = properties.metallicFactor == undefined ? 1 : properties.metallicFactor;
            babylonMaterial.roughness = properties.roughnessFactor == undefined ? 1 : properties.roughnessFactor;
            if (properties.baseColorTexture) {
                promises.push(this.loadTextureInfoAsync("".concat(context, "/baseColorTexture"), properties.baseColorTexture, function (texture) {
                    texture.name = "".concat(babylonMaterial.name, " (Base Color)");
                    babylonMaterial.albedoTexture = texture;
                }));
            }
            if (properties.metallicRoughnessTexture) {
                properties.metallicRoughnessTexture.nonColorData = true;
                promises.push(this.loadTextureInfoAsync("".concat(context, "/metallicRoughnessTexture"), properties.metallicRoughnessTexture, function (texture) {
                    texture.name = "".concat(babylonMaterial.name, " (Metallic Roughness)");
                    babylonMaterial.metallicTexture = texture;
                }));
                babylonMaterial.useMetallnessFromMetallicTextureBlue = true;
                babylonMaterial.useRoughnessFromMetallicTextureGreen = true;
                babylonMaterial.useRoughnessFromMetallicTextureAlpha = false;
            }
        }
        return Promise.all(promises).then(function () { });
    };
    /**
     * @internal
     */
    GLTFLoader.prototype._loadMaterialAsync = function (context, material, babylonMesh, babylonDrawMode, assign) {
        if (assign === void 0) { assign = function () { }; }
        var extensionPromise = this._extensionsLoadMaterialAsync(context, material, babylonMesh, babylonDrawMode, assign);
        if (extensionPromise) {
            return extensionPromise;
        }
        material._data = material._data || {};
        var babylonData = material._data[babylonDrawMode];
        if (!babylonData) {
            this.logOpen("".concat(context, " ").concat(material.name || ""));
            var babylonMaterial = this.createMaterial(context, material, babylonDrawMode);
            babylonData = {
                babylonMaterial: babylonMaterial,
                babylonMeshes: [],
                promise: this.loadMaterialPropertiesAsync(context, material, babylonMaterial),
            };
            material._data[babylonDrawMode] = babylonData;
            GLTFLoader.AddPointerMetadata(babylonMaterial, context);
            this._parent.onMaterialLoadedObservable.notifyObservers(babylonMaterial);
            this.logClose();
        }
        if (babylonMesh) {
            babylonData.babylonMeshes.push(babylonMesh);
            babylonMesh.onDisposeObservable.addOnce(function () {
                var index = babylonData.babylonMeshes.indexOf(babylonMesh);
                if (index !== -1) {
                    babylonData.babylonMeshes.splice(index, 1);
                }
            });
        }
        assign(babylonData.babylonMaterial);
        return babylonData.promise.then(function () {
            return babylonData.babylonMaterial;
        });
    };
    GLTFLoader.prototype._createDefaultMaterial = function (name, babylonDrawMode) {
        this._babylonScene._blockEntityCollection = !!this._assetContainer;
        var babylonMaterial = new babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.PBRMaterial(name, this._babylonScene);
        babylonMaterial._parentContainer = this._assetContainer;
        this._babylonScene._blockEntityCollection = false;
        // Moved to mesh so user can change materials on gltf meshes: babylonMaterial.sideOrientation = this._babylonScene.useRightHandedSystem ? Material.CounterClockWiseSideOrientation : Material.ClockWiseSideOrientation;
        babylonMaterial.fillMode = babylonDrawMode;
        babylonMaterial.enableSpecularAntiAliasing = true;
        babylonMaterial.useRadianceOverAlpha = !this._parent.transparencyAsCoverage;
        babylonMaterial.useSpecularOverAlpha = !this._parent.transparencyAsCoverage;
        babylonMaterial.transparencyMode = babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.PBRMaterial.PBRMATERIAL_OPAQUE;
        babylonMaterial.metallic = 1;
        babylonMaterial.roughness = 1;
        return babylonMaterial;
    };
    /**
     * Creates a Babylon material from a glTF material.
     * @param context The context when loading the asset
     * @param material The glTF material property
     * @param babylonDrawMode The draw mode for the Babylon material
     * @returns The Babylon material
     */
    GLTFLoader.prototype.createMaterial = function (context, material, babylonDrawMode) {
        var extensionPromise = this._extensionsCreateMaterial(context, material, babylonDrawMode);
        if (extensionPromise) {
            return extensionPromise;
        }
        var name = material.name || "material".concat(material.index);
        var babylonMaterial = this._createDefaultMaterial(name, babylonDrawMode);
        return babylonMaterial;
    };
    /**
     * Loads properties from a glTF material into a Babylon material.
     * @param context The context when loading the asset
     * @param material The glTF material property
     * @param babylonMaterial The Babylon material
     * @returns A promise that resolves when the load is complete
     */
    GLTFLoader.prototype.loadMaterialPropertiesAsync = function (context, material, babylonMaterial) {
        var extensionPromise = this._extensionsLoadMaterialPropertiesAsync(context, material, babylonMaterial);
        if (extensionPromise) {
            return extensionPromise;
        }
        var promises = new Array();
        promises.push(this.loadMaterialBasePropertiesAsync(context, material, babylonMaterial));
        if (material.pbrMetallicRoughness) {
            promises.push(this._loadMaterialMetallicRoughnessPropertiesAsync("".concat(context, "/pbrMetallicRoughness"), material.pbrMetallicRoughness, babylonMaterial));
        }
        this.loadMaterialAlphaProperties(context, material, babylonMaterial);
        return Promise.all(promises).then(function () { });
    };
    /**
     * Loads the normal, occlusion, and emissive properties from a glTF material into a Babylon material.
     * @param context The context when loading the asset
     * @param material The glTF material property
     * @param babylonMaterial The Babylon material
     * @returns A promise that resolves when the load is complete
     */
    GLTFLoader.prototype.loadMaterialBasePropertiesAsync = function (context, material, babylonMaterial) {
        if (!(babylonMaterial instanceof babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.PBRMaterial)) {
            throw new Error("".concat(context, ": Material type not supported"));
        }
        var promises = new Array();
        babylonMaterial.emissiveColor = material.emissiveFactor ? babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.Color3.FromArray(material.emissiveFactor) : new babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.Color3(0, 0, 0);
        if (material.doubleSided) {
            babylonMaterial.backFaceCulling = false;
            babylonMaterial.twoSidedLighting = true;
        }
        if (material.normalTexture) {
            material.normalTexture.nonColorData = true;
            promises.push(this.loadTextureInfoAsync("".concat(context, "/normalTexture"), material.normalTexture, function (texture) {
                texture.name = "".concat(babylonMaterial.name, " (Normal)");
                babylonMaterial.bumpTexture = texture;
            }));
            babylonMaterial.invertNormalMapX = !this._babylonScene.useRightHandedSystem;
            babylonMaterial.invertNormalMapY = this._babylonScene.useRightHandedSystem;
            if (material.normalTexture.scale != undefined && babylonMaterial.bumpTexture) {
                babylonMaterial.bumpTexture.level = material.normalTexture.scale;
            }
            babylonMaterial.forceIrradianceInFragment = true;
        }
        if (material.occlusionTexture) {
            material.occlusionTexture.nonColorData = true;
            promises.push(this.loadTextureInfoAsync("".concat(context, "/occlusionTexture"), material.occlusionTexture, function (texture) {
                texture.name = "".concat(babylonMaterial.name, " (Occlusion)");
                babylonMaterial.ambientTexture = texture;
            }));
            babylonMaterial.useAmbientInGrayScale = true;
            if (material.occlusionTexture.strength != undefined) {
                babylonMaterial.ambientTextureStrength = material.occlusionTexture.strength;
            }
        }
        if (material.emissiveTexture) {
            promises.push(this.loadTextureInfoAsync("".concat(context, "/emissiveTexture"), material.emissiveTexture, function (texture) {
                texture.name = "".concat(babylonMaterial.name, " (Emissive)");
                babylonMaterial.emissiveTexture = texture;
            }));
        }
        return Promise.all(promises).then(function () { });
    };
    /**
     * Loads the alpha properties from a glTF material into a Babylon material.
     * Must be called after the setting the albedo texture of the Babylon material when the material has an albedo texture.
     * @param context The context when loading the asset
     * @param material The glTF material property
     * @param babylonMaterial The Babylon material
     */
    GLTFLoader.prototype.loadMaterialAlphaProperties = function (context, material, babylonMaterial) {
        if (!(babylonMaterial instanceof babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.PBRMaterial)) {
            throw new Error("".concat(context, ": Material type not supported"));
        }
        var alphaMode = material.alphaMode || "OPAQUE" /* MaterialAlphaMode.OPAQUE */;
        switch (alphaMode) {
            case "OPAQUE" /* MaterialAlphaMode.OPAQUE */: {
                babylonMaterial.transparencyMode = babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.PBRMaterial.PBRMATERIAL_OPAQUE;
                break;
            }
            case "MASK" /* MaterialAlphaMode.MASK */: {
                babylonMaterial.transparencyMode = babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.PBRMaterial.PBRMATERIAL_ALPHATEST;
                babylonMaterial.alphaCutOff = material.alphaCutoff == undefined ? 0.5 : material.alphaCutoff;
                if (babylonMaterial.albedoTexture) {
                    babylonMaterial.albedoTexture.hasAlpha = true;
                }
                break;
            }
            case "BLEND" /* MaterialAlphaMode.BLEND */: {
                babylonMaterial.transparencyMode = babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.PBRMaterial.PBRMATERIAL_ALPHABLEND;
                if (babylonMaterial.albedoTexture) {
                    babylonMaterial.albedoTexture.hasAlpha = true;
                    babylonMaterial.useAlphaFromAlbedoTexture = true;
                }
                break;
            }
            default: {
                throw new Error("".concat(context, "/alphaMode: Invalid value (").concat(material.alphaMode, ")"));
            }
        }
    };
    /**
     * Loads a glTF texture info.
     * @param context The context when loading the asset
     * @param textureInfo The glTF texture info property
     * @param assign A function called synchronously after parsing the glTF properties
     * @returns A promise that resolves with the loaded Babylon texture when the load is complete
     */
    GLTFLoader.prototype.loadTextureInfoAsync = function (context, textureInfo, assign) {
        var _this = this;
        if (assign === void 0) { assign = function () { }; }
        var extensionPromise = this._extensionsLoadTextureInfoAsync(context, textureInfo, assign);
        if (extensionPromise) {
            return extensionPromise;
        }
        this.logOpen("".concat(context));
        if (textureInfo.texCoord >= 6) {
            throw new Error("".concat(context, "/texCoord: Invalid value (").concat(textureInfo.texCoord, ")"));
        }
        var texture = ArrayItem.Get("".concat(context, "/index"), this._gltf.textures, textureInfo.index);
        texture._textureInfo = textureInfo;
        var promise = this._loadTextureAsync("/textures/".concat(textureInfo.index), texture, function (babylonTexture) {
            babylonTexture.coordinatesIndex = textureInfo.texCoord || 0;
            GLTFLoader.AddPointerMetadata(babylonTexture, context);
            _this._parent.onTextureLoadedObservable.notifyObservers(babylonTexture);
            assign(babylonTexture);
        });
        this.logClose();
        return promise;
    };
    /**
     * @internal
     */
    GLTFLoader.prototype._loadTextureAsync = function (context, texture, assign) {
        if (assign === void 0) { assign = function () { }; }
        var extensionPromise = this._extensionsLoadTextureAsync(context, texture, assign);
        if (extensionPromise) {
            return extensionPromise;
        }
        this.logOpen("".concat(context, " ").concat(texture.name || ""));
        var sampler = texture.sampler == undefined ? GLTFLoader.DefaultSampler : ArrayItem.Get("".concat(context, "/sampler"), this._gltf.samplers, texture.sampler);
        var image = ArrayItem.Get("".concat(context, "/source"), this._gltf.images, texture.source);
        var promise = this._createTextureAsync(context, sampler, image, assign, undefined, !texture._textureInfo.nonColorData);
        this.logClose();
        return promise;
    };
    /**
     * @internal
     */
    GLTFLoader.prototype._createTextureAsync = function (context, sampler, image, assign, textureLoaderOptions, useSRGBBuffer) {
        var _this = this;
        if (assign === void 0) { assign = function () { }; }
        var samplerData = this._loadSampler("/samplers/".concat(sampler.index), sampler);
        var promises = new Array();
        var deferred = new babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.Deferred();
        this._babylonScene._blockEntityCollection = !!this._assetContainer;
        var textureCreationOptions = {
            noMipmap: samplerData.noMipMaps,
            invertY: false,
            samplingMode: samplerData.samplingMode,
            onLoad: function () {
                if (!_this._disposed) {
                    deferred.resolve();
                }
            },
            onError: function (message, exception) {
                if (!_this._disposed) {
                    deferred.reject(new Error("".concat(context, ": ").concat(exception && exception.message ? exception.message : message || "Failed to load texture")));
                }
            },
            mimeType: image.mimeType,
            loaderOptions: textureLoaderOptions,
            useSRGBBuffer: !!useSRGBBuffer && this._parent.useSRGBBuffers,
        };
        var babylonTexture = new babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.Texture(null, this._babylonScene, textureCreationOptions);
        babylonTexture._parentContainer = this._assetContainer;
        this._babylonScene._blockEntityCollection = false;
        promises.push(deferred.promise);
        promises.push(this.loadImageAsync("/images/".concat(image.index), image).then(function (data) {
            var name = image.uri || "".concat(_this._fileName, "#image").concat(image.index);
            var dataUrl = "data:".concat(_this._uniqueRootUrl).concat(name);
            babylonTexture.updateURL(dataUrl, data);
        }));
        babylonTexture.wrapU = samplerData.wrapU;
        babylonTexture.wrapV = samplerData.wrapV;
        assign(babylonTexture);
        return Promise.all(promises).then(function () {
            return babylonTexture;
        });
    };
    GLTFLoader.prototype._loadSampler = function (context, sampler) {
        if (!sampler._data) {
            sampler._data = {
                noMipMaps: sampler.minFilter === 9728 /* TextureMinFilter.NEAREST */ || sampler.minFilter === 9729 /* TextureMinFilter.LINEAR */,
                samplingMode: GLTFLoader._GetTextureSamplingMode(context, sampler),
                wrapU: GLTFLoader._GetTextureWrapMode("".concat(context, "/wrapS"), sampler.wrapS),
                wrapV: GLTFLoader._GetTextureWrapMode("".concat(context, "/wrapT"), sampler.wrapT),
            };
        }
        return sampler._data;
    };
    /**
     * Loads a glTF image.
     * @param context The context when loading the asset
     * @param image The glTF image property
     * @returns A promise that resolves with the loaded data when the load is complete
     */
    GLTFLoader.prototype.loadImageAsync = function (context, image) {
        if (!image._data) {
            this.logOpen("".concat(context, " ").concat(image.name || ""));
            if (image.uri) {
                image._data = this.loadUriAsync("".concat(context, "/uri"), image, image.uri);
            }
            else {
                var bufferView = ArrayItem.Get("".concat(context, "/bufferView"), this._gltf.bufferViews, image.bufferView);
                image._data = this.loadBufferViewAsync("/bufferViews/".concat(bufferView.index), bufferView);
            }
            this.logClose();
        }
        return image._data;
    };
    /**
     * Loads a glTF uri.
     * @param context The context when loading the asset
     * @param property The glTF property associated with the uri
     * @param uri The base64 or relative uri
     * @returns A promise that resolves with the loaded data when the load is complete
     */
    GLTFLoader.prototype.loadUriAsync = function (context, property, uri) {
        var _this = this;
        var extensionPromise = this._extensionsLoadUriAsync(context, property, uri);
        if (extensionPromise) {
            return extensionPromise;
        }
        if (!GLTFLoader._ValidateUri(uri)) {
            throw new Error("".concat(context, ": '").concat(uri, "' is invalid"));
        }
        if ((0,babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.IsBase64DataUrl)(uri)) {
            var data = new Uint8Array((0,babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.DecodeBase64UrlToBinary)(uri));
            this.log("".concat(context, ": Decoded ").concat(uri.substr(0, 64), "... (").concat(data.length, " bytes)"));
            return Promise.resolve(data);
        }
        this.log("".concat(context, ": Loading ").concat(uri));
        return this._parent.preprocessUrlAsync(this._rootUrl + uri).then(function (url) {
            return new Promise(function (resolve, reject) {
                _this._parent._loadFile(_this._babylonScene, url, function (data) {
                    if (!_this._disposed) {
                        _this.log("".concat(context, ": Loaded ").concat(uri, " (").concat(data.byteLength, " bytes)"));
                        resolve(new Uint8Array(data));
                    }
                }, true, function (request) {
                    reject(new babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.LoadFileError("".concat(context, ": Failed to load '").concat(uri, "'").concat(request ? ": " + request.status + " " + request.statusText : ""), request));
                });
            });
        });
    };
    /**
     * Adds a JSON pointer to the _internalMetadata of the Babylon object at `<object>._internalMetadata.gltf.pointers`.
     * @param babylonObject the Babylon object with _internalMetadata
     * @param pointer the JSON pointer
     */
    GLTFLoader.AddPointerMetadata = function (babylonObject, pointer) {
        babylonObject.metadata = babylonObject.metadata || {};
        var metadata = (babylonObject._internalMetadata = babylonObject._internalMetadata || {});
        var gltf = (metadata.gltf = metadata.gltf || {});
        var pointers = (gltf.pointers = gltf.pointers || []);
        pointers.push(pointer);
    };
    GLTFLoader._GetTextureWrapMode = function (context, mode) {
        // Set defaults if undefined
        mode = mode == undefined ? 10497 /* TextureWrapMode.REPEAT */ : mode;
        switch (mode) {
            case 33071 /* TextureWrapMode.CLAMP_TO_EDGE */:
                return babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.Texture.CLAMP_ADDRESSMODE;
            case 33648 /* TextureWrapMode.MIRRORED_REPEAT */:
                return babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.Texture.MIRROR_ADDRESSMODE;
            case 10497 /* TextureWrapMode.REPEAT */:
                return babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.Texture.WRAP_ADDRESSMODE;
            default:
                babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.Logger.Warn("".concat(context, ": Invalid value (").concat(mode, ")"));
                return babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.Texture.WRAP_ADDRESSMODE;
        }
    };
    GLTFLoader._GetTextureSamplingMode = function (context, sampler) {
        // Set defaults if undefined
        var magFilter = sampler.magFilter == undefined ? 9729 /* TextureMagFilter.LINEAR */ : sampler.magFilter;
        var minFilter = sampler.minFilter == undefined ? 9987 /* TextureMinFilter.LINEAR_MIPMAP_LINEAR */ : sampler.minFilter;
        if (magFilter === 9729 /* TextureMagFilter.LINEAR */) {
            switch (minFilter) {
                case 9728 /* TextureMinFilter.NEAREST */:
                    return babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.Texture.LINEAR_NEAREST;
                case 9729 /* TextureMinFilter.LINEAR */:
                    return babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.Texture.LINEAR_LINEAR;
                case 9984 /* TextureMinFilter.NEAREST_MIPMAP_NEAREST */:
                    return babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.Texture.LINEAR_NEAREST_MIPNEAREST;
                case 9985 /* TextureMinFilter.LINEAR_MIPMAP_NEAREST */:
                    return babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.Texture.LINEAR_LINEAR_MIPNEAREST;
                case 9986 /* TextureMinFilter.NEAREST_MIPMAP_LINEAR */:
                    return babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.Texture.LINEAR_NEAREST_MIPLINEAR;
                case 9987 /* TextureMinFilter.LINEAR_MIPMAP_LINEAR */:
                    return babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.Texture.LINEAR_LINEAR_MIPLINEAR;
                default:
                    babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.Logger.Warn("".concat(context, "/minFilter: Invalid value (").concat(minFilter, ")"));
                    return babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.Texture.LINEAR_LINEAR_MIPLINEAR;
            }
        }
        else {
            if (magFilter !== 9728 /* TextureMagFilter.NEAREST */) {
                babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.Logger.Warn("".concat(context, "/magFilter: Invalid value (").concat(magFilter, ")"));
            }
            switch (minFilter) {
                case 9728 /* TextureMinFilter.NEAREST */:
                    return babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.Texture.NEAREST_NEAREST;
                case 9729 /* TextureMinFilter.LINEAR */:
                    return babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.Texture.NEAREST_LINEAR;
                case 9984 /* TextureMinFilter.NEAREST_MIPMAP_NEAREST */:
                    return babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.Texture.NEAREST_NEAREST_MIPNEAREST;
                case 9985 /* TextureMinFilter.LINEAR_MIPMAP_NEAREST */:
                    return babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.Texture.NEAREST_LINEAR_MIPNEAREST;
                case 9986 /* TextureMinFilter.NEAREST_MIPMAP_LINEAR */:
                    return babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.Texture.NEAREST_NEAREST_MIPLINEAR;
                case 9987 /* TextureMinFilter.LINEAR_MIPMAP_LINEAR */:
                    return babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.Texture.NEAREST_LINEAR_MIPLINEAR;
                default:
                    babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.Logger.Warn("".concat(context, "/minFilter: Invalid value (").concat(minFilter, ")"));
                    return babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.Texture.NEAREST_NEAREST_MIPNEAREST;
            }
        }
    };
    GLTFLoader._GetTypedArrayConstructor = function (context, componentType) {
        switch (componentType) {
            case 5120 /* AccessorComponentType.BYTE */:
                return Int8Array;
            case 5121 /* AccessorComponentType.UNSIGNED_BYTE */:
                return Uint8Array;
            case 5122 /* AccessorComponentType.SHORT */:
                return Int16Array;
            case 5123 /* AccessorComponentType.UNSIGNED_SHORT */:
                return Uint16Array;
            case 5125 /* AccessorComponentType.UNSIGNED_INT */:
                return Uint32Array;
            case 5126 /* AccessorComponentType.FLOAT */:
                return Float32Array;
            default:
                throw new Error("".concat(context, ": Invalid component type ").concat(componentType));
        }
    };
    GLTFLoader._GetTypedArray = function (context, componentType, bufferView, byteOffset, length) {
        var buffer = bufferView.buffer;
        byteOffset = bufferView.byteOffset + (byteOffset || 0);
        var constructor = GLTFLoader._GetTypedArrayConstructor("".concat(context, "/componentType"), componentType);
        var componentTypeLength = babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.GetTypeByteLength(componentType);
        if (byteOffset % componentTypeLength !== 0) {
            // HACK: Copy the buffer if byte offset is not a multiple of component type byte length.
            babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.Logger.Warn("".concat(context, ": Copying buffer as byte offset (").concat(byteOffset, ") is not a multiple of component type byte length (").concat(componentTypeLength, ")"));
            return new constructor(buffer.slice(byteOffset, byteOffset + length * componentTypeLength), 0);
        }
        return new constructor(buffer, byteOffset, length);
    };
    GLTFLoader._GetNumComponents = function (context, type) {
        switch (type) {
            case "SCALAR":
                return 1;
            case "VEC2":
                return 2;
            case "VEC3":
                return 3;
            case "VEC4":
                return 4;
            case "MAT2":
                return 4;
            case "MAT3":
                return 9;
            case "MAT4":
                return 16;
        }
        throw new Error("".concat(context, ": Invalid type (").concat(type, ")"));
    };
    GLTFLoader._ValidateUri = function (uri) {
        return babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.Tools.IsBase64(uri) || uri.indexOf("..") === -1;
    };
    /**
     * @internal
     */
    GLTFLoader._GetDrawMode = function (context, mode) {
        if (mode == undefined) {
            mode = 4 /* MeshPrimitiveMode.TRIANGLES */;
        }
        switch (mode) {
            case 0 /* MeshPrimitiveMode.POINTS */:
                return babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.Material.PointListDrawMode;
            case 1 /* MeshPrimitiveMode.LINES */:
                return babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.Material.LineListDrawMode;
            case 2 /* MeshPrimitiveMode.LINE_LOOP */:
                return babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.Material.LineLoopDrawMode;
            case 3 /* MeshPrimitiveMode.LINE_STRIP */:
                return babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.Material.LineStripDrawMode;
            case 4 /* MeshPrimitiveMode.TRIANGLES */:
                return babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.Material.TriangleFillMode;
            case 5 /* MeshPrimitiveMode.TRIANGLE_STRIP */:
                return babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.Material.TriangleStripDrawMode;
            case 6 /* MeshPrimitiveMode.TRIANGLE_FAN */:
                return babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.Material.TriangleFanDrawMode;
        }
        throw new Error("".concat(context, ": Invalid mesh primitive mode (").concat(mode, ")"));
    };
    GLTFLoader.prototype._compileMaterialsAsync = function () {
        var _this = this;
        this._parent._startPerformanceCounter("Compile materials");
        var promises = new Array();
        if (this._gltf.materials) {
            for (var _i = 0, _a = this._gltf.materials; _i < _a.length; _i++) {
                var material = _a[_i];
                if (material._data) {
                    for (var babylonDrawMode in material._data) {
                        var babylonData = material._data[babylonDrawMode];
                        for (var _b = 0, _c = babylonData.babylonMeshes; _b < _c.length; _b++) {
                            var babylonMesh = _c[_b];
                            // Ensure nonUniformScaling is set if necessary.
                            babylonMesh.computeWorldMatrix(true);
                            var babylonMaterial = babylonData.babylonMaterial;
                            promises.push(babylonMaterial.forceCompilationAsync(babylonMesh));
                            promises.push(babylonMaterial.forceCompilationAsync(babylonMesh, { useInstances: true }));
                            if (this._parent.useClipPlane) {
                                promises.push(babylonMaterial.forceCompilationAsync(babylonMesh, { clipPlane: true }));
                                promises.push(babylonMaterial.forceCompilationAsync(babylonMesh, { clipPlane: true, useInstances: true }));
                            }
                        }
                    }
                }
            }
        }
        return Promise.all(promises).then(function () {
            _this._parent._endPerformanceCounter("Compile materials");
        });
    };
    GLTFLoader.prototype._compileShadowGeneratorsAsync = function () {
        var _this = this;
        this._parent._startPerformanceCounter("Compile shadow generators");
        var promises = new Array();
        var lights = this._babylonScene.lights;
        for (var _i = 0, lights_1 = lights; _i < lights_1.length; _i++) {
            var light = lights_1[_i];
            var generator = light.getShadowGenerator();
            if (generator) {
                promises.push(generator.forceCompilationAsync());
            }
        }
        return Promise.all(promises).then(function () {
            _this._parent._endPerformanceCounter("Compile shadow generators");
        });
    };
    GLTFLoader.prototype._forEachExtensions = function (action) {
        for (var _i = 0, _a = this._extensions; _i < _a.length; _i++) {
            var extension = _a[_i];
            if (extension.enabled) {
                action(extension);
            }
        }
    };
    GLTFLoader.prototype._applyExtensions = function (property, functionName, actionAsync) {
        for (var _i = 0, _a = this._extensions; _i < _a.length; _i++) {
            var extension = _a[_i];
            if (extension.enabled) {
                var id = "".concat(extension.name, ".").concat(functionName);
                var loaderProperty = property;
                loaderProperty._activeLoaderExtensionFunctions = loaderProperty._activeLoaderExtensionFunctions || {};
                var activeLoaderExtensionFunctions = loaderProperty._activeLoaderExtensionFunctions;
                if (!activeLoaderExtensionFunctions[id]) {
                    activeLoaderExtensionFunctions[id] = true;
                    try {
                        var result = actionAsync(extension);
                        if (result) {
                            return result;
                        }
                    }
                    finally {
                        delete activeLoaderExtensionFunctions[id];
                    }
                }
            }
        }
        return null;
    };
    GLTFLoader.prototype._extensionsOnLoading = function () {
        this._forEachExtensions(function (extension) { return extension.onLoading && extension.onLoading(); });
    };
    GLTFLoader.prototype._extensionsOnReady = function () {
        this._forEachExtensions(function (extension) { return extension.onReady && extension.onReady(); });
    };
    GLTFLoader.prototype._extensionsLoadSceneAsync = function (context, scene) {
        return this._applyExtensions(scene, "loadScene", function (extension) { return extension.loadSceneAsync && extension.loadSceneAsync(context, scene); });
    };
    GLTFLoader.prototype._extensionsLoadNodeAsync = function (context, node, assign) {
        return this._applyExtensions(node, "loadNode", function (extension) { return extension.loadNodeAsync && extension.loadNodeAsync(context, node, assign); });
    };
    GLTFLoader.prototype._extensionsLoadCameraAsync = function (context, camera, assign) {
        return this._applyExtensions(camera, "loadCamera", function (extension) { return extension.loadCameraAsync && extension.loadCameraAsync(context, camera, assign); });
    };
    GLTFLoader.prototype._extensionsLoadVertexDataAsync = function (context, primitive, babylonMesh) {
        return this._applyExtensions(primitive, "loadVertexData", function (extension) { return extension._loadVertexDataAsync && extension._loadVertexDataAsync(context, primitive, babylonMesh); });
    };
    GLTFLoader.prototype._extensionsLoadMeshPrimitiveAsync = function (context, name, node, mesh, primitive, assign) {
        return this._applyExtensions(primitive, "loadMeshPrimitive", function (extension) { return extension._loadMeshPrimitiveAsync && extension._loadMeshPrimitiveAsync(context, name, node, mesh, primitive, assign); });
    };
    GLTFLoader.prototype._extensionsLoadMaterialAsync = function (context, material, babylonMesh, babylonDrawMode, assign) {
        return this._applyExtensions(material, "loadMaterial", function (extension) { return extension._loadMaterialAsync && extension._loadMaterialAsync(context, material, babylonMesh, babylonDrawMode, assign); });
    };
    GLTFLoader.prototype._extensionsCreateMaterial = function (context, material, babylonDrawMode) {
        return this._applyExtensions(material, "createMaterial", function (extension) { return extension.createMaterial && extension.createMaterial(context, material, babylonDrawMode); });
    };
    GLTFLoader.prototype._extensionsLoadMaterialPropertiesAsync = function (context, material, babylonMaterial) {
        return this._applyExtensions(material, "loadMaterialProperties", function (extension) { return extension.loadMaterialPropertiesAsync && extension.loadMaterialPropertiesAsync(context, material, babylonMaterial); });
    };
    GLTFLoader.prototype._extensionsLoadTextureInfoAsync = function (context, textureInfo, assign) {
        return this._applyExtensions(textureInfo, "loadTextureInfo", function (extension) { return extension.loadTextureInfoAsync && extension.loadTextureInfoAsync(context, textureInfo, assign); });
    };
    GLTFLoader.prototype._extensionsLoadTextureAsync = function (context, texture, assign) {
        return this._applyExtensions(texture, "loadTexture", function (extension) { return extension._loadTextureAsync && extension._loadTextureAsync(context, texture, assign); });
    };
    GLTFLoader.prototype._extensionsLoadAnimationAsync = function (context, animation) {
        return this._applyExtensions(animation, "loadAnimation", function (extension) { return extension.loadAnimationAsync && extension.loadAnimationAsync(context, animation); });
    };
    GLTFLoader.prototype._extensionsLoadAnimationChannelAsync = function (context, animationContext, animation, channel, onLoad) {
        return this._applyExtensions(animation, "loadAnimationChannel", function (extension) { return extension._loadAnimationChannelAsync && extension._loadAnimationChannelAsync(context, animationContext, animation, channel, onLoad); });
    };
    GLTFLoader.prototype._extensionsLoadSkinAsync = function (context, node, skin) {
        return this._applyExtensions(skin, "loadSkin", function (extension) { return extension._loadSkinAsync && extension._loadSkinAsync(context, node, skin); });
    };
    GLTFLoader.prototype._extensionsLoadUriAsync = function (context, property, uri) {
        return this._applyExtensions(property, "loadUri", function (extension) { return extension._loadUriAsync && extension._loadUriAsync(context, property, uri); });
    };
    GLTFLoader.prototype._extensionsLoadBufferViewAsync = function (context, bufferView) {
        return this._applyExtensions(bufferView, "loadBufferView", function (extension) { return extension.loadBufferViewAsync && extension.loadBufferViewAsync(context, bufferView); });
    };
    GLTFLoader.prototype._extensionsLoadBufferAsync = function (context, buffer, byteOffset, byteLength) {
        return this._applyExtensions(buffer, "loadBuffer", function (extension) { return extension.loadBufferAsync && extension.loadBufferAsync(context, buffer, byteOffset, byteLength); });
    };
    /**
     * Helper method called by a loader extension to load an glTF extension.
     * @param context The context when loading the asset
     * @param property The glTF property to load the extension from
     * @param extensionName The name of the extension to load
     * @param actionAsync The action to run
     * @returns The promise returned by actionAsync or null if the extension does not exist
     */
    GLTFLoader.LoadExtensionAsync = function (context, property, extensionName, actionAsync) {
        if (!property.extensions) {
            return null;
        }
        var extensions = property.extensions;
        var extension = extensions[extensionName];
        if (!extension) {
            return null;
        }
        return actionAsync("".concat(context, "/extensions/").concat(extensionName), extension);
    };
    /**
     * Helper method called by a loader extension to load a glTF extra.
     * @param context The context when loading the asset
     * @param property The glTF property to load the extra from
     * @param extensionName The name of the extension to load
     * @param actionAsync The action to run
     * @returns The promise returned by actionAsync or null if the extra does not exist
     */
    GLTFLoader.LoadExtraAsync = function (context, property, extensionName, actionAsync) {
        if (!property.extras) {
            return null;
        }
        var extras = property.extras;
        var extra = extras[extensionName];
        if (!extra) {
            return null;
        }
        return actionAsync("".concat(context, "/extras/").concat(extensionName), extra);
    };
    /**
     * Checks for presence of an extension.
     * @param name The name of the extension to check
     * @returns A boolean indicating the presence of the given extension name in `extensionsUsed`
     */
    GLTFLoader.prototype.isExtensionUsed = function (name) {
        return !!this._gltf.extensionsUsed && this._gltf.extensionsUsed.indexOf(name) !== -1;
    };
    /**
     * Increments the indentation level and logs a message.
     * @param message The message to log
     */
    GLTFLoader.prototype.logOpen = function (message) {
        this._parent._logOpen(message);
    };
    /**
     * Decrements the indentation level.
     */
    GLTFLoader.prototype.logClose = function () {
        this._parent._logClose();
    };
    /**
     * Logs a message
     * @param message The message to log
     */
    GLTFLoader.prototype.log = function (message) {
        this._parent._log(message);
    };
    /**
     * Starts a performance counter.
     * @param counterName The name of the performance counter
     */
    GLTFLoader.prototype.startPerformanceCounter = function (counterName) {
        this._parent._startPerformanceCounter(counterName);
    };
    /**
     * Ends a performance counter.
     * @param counterName The name of the performance counter
     */
    GLTFLoader.prototype.endPerformanceCounter = function (counterName) {
        this._parent._endPerformanceCounter(counterName);
    };
    GLTFLoader._RegisteredExtensions = {};
    /**
     * The default glTF sampler.
     */
    GLTFLoader.DefaultSampler = { index: -1 };
    return GLTFLoader;
}());
_glTFFileLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFFileLoader._CreateGLTF2Loader = function (parent) { return new GLTFLoader(parent); };


/***/ }),

/***/ "../../../dev/loaders/src/glTF/2.0/glTFLoaderAnimation.ts":
/*!****************************************************************!*\
  !*** ../../../dev/loaders/src/glTF/2.0/glTFLoaderAnimation.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnimationPropertyInfo: () => (/* binding */ AnimationPropertyInfo),
/* harmony export */   TransformNodeAnimationPropertyInfo: () => (/* binding */ TransformNodeAnimationPropertyInfo),
/* harmony export */   WeightAnimationPropertyInfo: () => (/* binding */ WeightAnimationPropertyInfo),
/* harmony export */   getQuaternion: () => (/* binding */ getQuaternion),
/* harmony export */   getVector3: () => (/* binding */ getVector3),
/* harmony export */   getWeights: () => (/* binding */ getWeights),
/* harmony export */   nodeAnimationData: () => (/* binding */ nodeAnimationData)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var babylonjs_Animations_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Maths/math.vector */ "babylonjs/Misc/observable");
/* harmony import */ var babylonjs_Animations_animation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Animations_animation__WEBPACK_IMPORTED_MODULE_0__);



/** @internal */
function getVector3(_target, source, offset, scale) {
    return babylonjs_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArray(source, offset).scaleInPlace(scale);
}
/** @internal */
function getQuaternion(_target, source, offset, scale) {
    return babylonjs_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Quaternion.FromArray(source, offset).scaleInPlace(scale);
}
/** @internal */
function getWeights(target, source, offset, scale) {
    var value = new Array(target._numMorphTargets);
    for (var i = 0; i < value.length; i++) {
        value[i] = source[offset++] * scale;
    }
    return value;
}
/** @internal */
var AnimationPropertyInfo = /** @class */ (function () {
    /** @internal */
    function AnimationPropertyInfo(type, name, getValue, getStride) {
        this.type = type;
        this.name = name;
        this.getValue = getValue;
        this.getStride = getStride;
    }
    AnimationPropertyInfo.prototype._buildAnimation = function (name, fps, keys) {
        var babylonAnimation = new babylonjs_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation(name, this.name, fps, this.type);
        babylonAnimation.setKeys(keys);
        return babylonAnimation;
    };
    return AnimationPropertyInfo;
}());

/** @internal */
var TransformNodeAnimationPropertyInfo = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(TransformNodeAnimationPropertyInfo, _super);
    function TransformNodeAnimationPropertyInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** @internal */
    TransformNodeAnimationPropertyInfo.prototype.buildAnimations = function (target, name, fps, keys, callback) {
        callback(target._babylonTransformNode, this._buildAnimation(name, fps, keys));
    };
    return TransformNodeAnimationPropertyInfo;
}(AnimationPropertyInfo));

/** @internal */
var WeightAnimationPropertyInfo = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(WeightAnimationPropertyInfo, _super);
    function WeightAnimationPropertyInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WeightAnimationPropertyInfo.prototype.buildAnimations = function (target, name, fps, keys, callback) {
        if (target._numMorphTargets) {
            var _loop_1 = function (targetIndex) {
                var babylonAnimation = new babylonjs_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation("".concat(name, "_").concat(targetIndex), this_1.name, fps, this_1.type);
                babylonAnimation.setKeys(keys.map(function (key) { return ({
                    frame: key.frame,
                    inTangent: key.inTangent ? key.inTangent[targetIndex] : undefined,
                    value: key.value[targetIndex],
                    outTangent: key.outTangent ? key.outTangent[targetIndex] : undefined,
                    interpolation: key.interpolation,
                }); }));
                if (target._primitiveBabylonMeshes) {
                    for (var _i = 0, _a = target._primitiveBabylonMeshes; _i < _a.length; _i++) {
                        var babylonMesh = _a[_i];
                        if (babylonMesh.morphTargetManager) {
                            var morphTarget = babylonMesh.morphTargetManager.getTarget(targetIndex);
                            var babylonAnimationClone = babylonAnimation.clone();
                            morphTarget.animations.push(babylonAnimationClone);
                            callback(morphTarget, babylonAnimationClone);
                        }
                    }
                }
            };
            var this_1 = this;
            for (var targetIndex = 0; targetIndex < target._numMorphTargets; targetIndex++) {
                _loop_1(targetIndex);
            }
        }
    };
    return WeightAnimationPropertyInfo;
}(AnimationPropertyInfo));

/** @internal */
var nodeAnimationData = {
    translation: [new TransformNodeAnimationPropertyInfo(babylonjs_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_VECTOR3, "position", getVector3, function () { return 3; })],
    rotation: [new TransformNodeAnimationPropertyInfo(babylonjs_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_QUATERNION, "rotationQuaternion", getQuaternion, function () { return 4; })],
    scale: [new TransformNodeAnimationPropertyInfo(babylonjs_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_VECTOR3, "scaling", getVector3, function () { return 3; })],
    weights: [new WeightAnimationPropertyInfo(babylonjs_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "influence", getWeights, function (target) { return target._numMorphTargets; })],
};


/***/ }),

/***/ "../../../dev/loaders/src/glTF/2.0/glTFLoaderExtension.ts":
/*!****************************************************************!*\
  !*** ../../../dev/loaders/src/glTF/2.0/glTFLoaderExtension.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../dev/loaders/src/glTF/2.0/glTFLoaderInterfaces.ts":
/*!*****************************************************************!*\
  !*** ../../../dev/loaders/src/glTF/2.0/glTFLoaderInterfaces.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../dev/loaders/src/glTF/2.0/index.ts":
/*!**************************************************!*\
  !*** ../../../dev/loaders/src/glTF/2.0/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArrayItem: () => (/* reexport safe */ _glTFLoader__WEBPACK_IMPORTED_MODULE_0__.ArrayItem),
/* harmony export */   EXT_lights_image_based: () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_3__.EXT_lights_image_based),
/* harmony export */   EXT_mesh_gpu_instancing: () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_3__.EXT_mesh_gpu_instancing),
/* harmony export */   EXT_meshopt_compression: () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_3__.EXT_meshopt_compression),
/* harmony export */   EXT_texture_webp: () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_3__.EXT_texture_webp),
/* harmony export */   ExtrasAsMetadata: () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_3__.ExtrasAsMetadata),
/* harmony export */   GLTFLoader: () => (/* reexport safe */ _glTFLoader__WEBPACK_IMPORTED_MODULE_0__.GLTFLoader),
/* harmony export */   KHR_animation_pointer: () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_3__.KHR_animation_pointer),
/* harmony export */   KHR_draco_mesh_compression: () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_3__.KHR_draco_mesh_compression),
/* harmony export */   KHR_lights: () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_3__.KHR_lights),
/* harmony export */   KHR_materials_anisotropy: () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_3__.KHR_materials_anisotropy),
/* harmony export */   KHR_materials_clearcoat: () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_3__.KHR_materials_clearcoat),
/* harmony export */   KHR_materials_emissive_strength: () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_3__.KHR_materials_emissive_strength),
/* harmony export */   KHR_materials_ior: () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_3__.KHR_materials_ior),
/* harmony export */   KHR_materials_iridescence: () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_3__.KHR_materials_iridescence),
/* harmony export */   KHR_materials_pbrSpecularGlossiness: () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_3__.KHR_materials_pbrSpecularGlossiness),
/* harmony export */   KHR_materials_sheen: () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_3__.KHR_materials_sheen),
/* harmony export */   KHR_materials_specular: () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_3__.KHR_materials_specular),
/* harmony export */   KHR_materials_translucency: () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_3__.KHR_materials_translucency),
/* harmony export */   KHR_materials_transmission: () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_3__.KHR_materials_transmission),
/* harmony export */   KHR_materials_unlit: () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_3__.KHR_materials_unlit),
/* harmony export */   KHR_materials_variants: () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_3__.KHR_materials_variants),
/* harmony export */   KHR_materials_volume: () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_3__.KHR_materials_volume),
/* harmony export */   KHR_mesh_quantization: () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_3__.KHR_mesh_quantization),
/* harmony export */   KHR_texture_basisu: () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_3__.KHR_texture_basisu),
/* harmony export */   KHR_texture_transform: () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_3__.KHR_texture_transform),
/* harmony export */   KHR_xmp_json_ld: () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_3__.KHR_xmp_json_ld),
/* harmony export */   MSFT_audio_emitter: () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_3__.MSFT_audio_emitter),
/* harmony export */   MSFT_lod: () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_3__.MSFT_lod),
/* harmony export */   MSFT_minecraftMesh: () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_3__.MSFT_minecraftMesh),
/* harmony export */   MSFT_sRGBFactors: () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_3__.MSFT_sRGBFactors)
/* harmony export */ });
/* harmony import */ var _glTFLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glTFLoader */ "../../../dev/loaders/src/glTF/2.0/glTFLoader.ts");
/* harmony import */ var _glTFLoaderExtension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./glTFLoaderExtension */ "../../../dev/loaders/src/glTF/2.0/glTFLoaderExtension.ts");
/* harmony import */ var _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./glTFLoaderInterfaces */ "../../../dev/loaders/src/glTF/2.0/glTFLoaderInterfaces.ts");
/* harmony import */ var _Extensions_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Extensions/index */ "../../../dev/loaders/src/glTF/2.0/Extensions/index.ts");
/* eslint-disable import/no-internal-modules */






/***/ }),

/***/ "../../../dev/loaders/src/glTF/glTFFileLoader.ts":
/*!*******************************************************!*\
  !*** ../../../dev/loaders/src/glTF/glTFFileLoader.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GLTFFileLoader: () => (/* binding */ GLTFFileLoader),
/* harmony export */   GLTFLoaderAnimationStartMode: () => (/* binding */ GLTFLoaderAnimationStartMode),
/* harmony export */   GLTFLoaderCoordinateSystemMode: () => (/* binding */ GLTFLoaderCoordinateSystemMode),
/* harmony export */   GLTFLoaderState: () => (/* binding */ GLTFLoaderState)
/* harmony export */ });
/* harmony import */ var babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Misc/error */ "babylonjs/Misc/observable");
/* harmony import */ var babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _glTFValidation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./glTFValidation */ "../../../dev/loaders/src/glTF/glTFValidation.ts");









function readAsync(arrayBuffer, byteOffset, byteLength) {
    try {
        return Promise.resolve(new Uint8Array(arrayBuffer, byteOffset, byteLength));
    }
    catch (e) {
        return Promise.reject(e);
    }
}
function readViewAsync(arrayBufferView, byteOffset, byteLength) {
    try {
        if (arrayBufferView.byteOffset + byteLength > arrayBufferView.byteLength) {
            throw new Error("Array length out of bounds.");
        }
        return Promise.resolve(new Uint8Array(arrayBufferView.buffer, arrayBufferView.byteOffset + byteOffset, byteLength));
    }
    catch (e) {
        return Promise.reject(e);
    }
}
/**
 * Mode that determines the coordinate system to use.
 */
var GLTFLoaderCoordinateSystemMode;
(function (GLTFLoaderCoordinateSystemMode) {
    /**
     * Automatically convert the glTF right-handed data to the appropriate system based on the current coordinate system mode of the scene.
     */
    GLTFLoaderCoordinateSystemMode[GLTFLoaderCoordinateSystemMode["AUTO"] = 0] = "AUTO";
    /**
     * Sets the useRightHandedSystem flag on the scene.
     */
    GLTFLoaderCoordinateSystemMode[GLTFLoaderCoordinateSystemMode["FORCE_RIGHT_HANDED"] = 1] = "FORCE_RIGHT_HANDED";
})(GLTFLoaderCoordinateSystemMode || (GLTFLoaderCoordinateSystemMode = {}));
/**
 * Mode that determines what animations will start.
 */
var GLTFLoaderAnimationStartMode;
(function (GLTFLoaderAnimationStartMode) {
    /**
     * No animation will start.
     */
    GLTFLoaderAnimationStartMode[GLTFLoaderAnimationStartMode["NONE"] = 0] = "NONE";
    /**
     * The first animation will start.
     */
    GLTFLoaderAnimationStartMode[GLTFLoaderAnimationStartMode["FIRST"] = 1] = "FIRST";
    /**
     * All animations will start.
     */
    GLTFLoaderAnimationStartMode[GLTFLoaderAnimationStartMode["ALL"] = 2] = "ALL";
})(GLTFLoaderAnimationStartMode || (GLTFLoaderAnimationStartMode = {}));
/**
 * Loader state.
 */
var GLTFLoaderState;
(function (GLTFLoaderState) {
    /**
     * The asset is loading.
     */
    GLTFLoaderState[GLTFLoaderState["LOADING"] = 0] = "LOADING";
    /**
     * The asset is ready for rendering.
     */
    GLTFLoaderState[GLTFLoaderState["READY"] = 1] = "READY";
    /**
     * The asset is completely loaded.
     */
    GLTFLoaderState[GLTFLoaderState["COMPLETE"] = 2] = "COMPLETE";
})(GLTFLoaderState || (GLTFLoaderState = {}));
/**
 * File loader for loading glTF files into a scene.
 */
var GLTFFileLoader = /** @class */ (function () {
    function GLTFFileLoader() {
        // --------------
        // Common options
        // --------------
        /**
         * Raised when the asset has been parsed
         */
        this.onParsedObservable = new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        // ----------
        // V2 options
        // ----------
        /**
         * The coordinate system mode. Defaults to AUTO.
         */
        this.coordinateSystemMode = GLTFLoaderCoordinateSystemMode.AUTO;
        /**
         * The animation start mode. Defaults to FIRST.
         */
        this.animationStartMode = GLTFLoaderAnimationStartMode.FIRST;
        /**
         * Defines if the loader should compile materials before raising the success callback. Defaults to false.
         */
        this.compileMaterials = false;
        /**
         * Defines if the loader should also compile materials with clip planes. Defaults to false.
         */
        this.useClipPlane = false;
        /**
         * Defines if the loader should compile shadow generators before raising the success callback. Defaults to false.
         */
        this.compileShadowGenerators = false;
        /**
         * Defines if the Alpha blended materials are only applied as coverage.
         * If false, (default) The luminance of each pixel will reduce its opacity to simulate the behaviour of most physical materials.
         * If true, no extra effects are applied to transparent pixels.
         */
        this.transparencyAsCoverage = false;
        /**
         * Defines if the loader should use range requests when load binary glTF files from HTTP.
         * Enabling will disable offline support and glTF validator.
         * Defaults to false.
         */
        this.useRangeRequests = false;
        /**
         * Defines if the loader should create instances when multiple glTF nodes point to the same glTF mesh. Defaults to true.
         */
        this.createInstances = true;
        /**
         * Defines if the loader should always compute the bounding boxes of meshes and not use the min/max values from the position accessor. Defaults to false.
         */
        this.alwaysComputeBoundingBox = false;
        /**
         * If true, load all materials defined in the file, even if not used by any mesh. Defaults to false.
         */
        this.loadAllMaterials = false;
        /**
         * If true, load only the materials defined in the file. Defaults to false.
         */
        this.loadOnlyMaterials = false;
        /**
         * If true, do not load any materials defined in the file. Defaults to false.
         */
        this.skipMaterials = false;
        /**
         * If true, load the color (gamma encoded) textures into sRGB buffers (if supported by the GPU), which will yield more accurate results when sampling the texture. Defaults to true.
         */
        this.useSRGBBuffers = true;
        /**
         * When loading glTF animations, which are defined in seconds, target them to this FPS. Defaults to 60.
         */
        this.targetFps = 60;
        /**
         * Defines if the loader should always compute the nearest common ancestor of the skeleton joints instead of using `skin.skeleton`. Defaults to false.
         * Set this to true if loading assets with invalid `skin.skeleton` values.
         */
        this.alwaysComputeSkeletonRootNode = false;
        /**
         * Function called before loading a url referenced by the asset.
         * @param url
         */
        this.preprocessUrlAsync = function (url) { return Promise.resolve(url); };
        /**
         * Observable raised when the loader creates a mesh after parsing the glTF properties of the mesh.
         * Note that the observable is raised as soon as the mesh object is created, meaning some data may not have been setup yet for this mesh (vertex data, morph targets, material, ...)
         */
        this.onMeshLoadedObservable = new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        /**
         * Callback raised when the loader creates a skin after parsing the glTF properties of the skin node.
         * @see https://doc.babylonjs.com/features/featuresDeepDive/importers/glTF/glTFSkinning#ignoring-the-transform-of-the-skinned-mesh
         * @param node - the transform node that corresponds to the original glTF skin node used for animations
         * @param skinnedNode - the transform node that is the skinned mesh itself or the parent of the skinned meshes
         */
        this.onSkinLoadedObservable = new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        /**
         * Observable raised when the loader creates a texture after parsing the glTF properties of the texture.
         */
        this.onTextureLoadedObservable = new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        /**
         * Observable raised when the loader creates a material after parsing the glTF properties of the material.
         */
        this.onMaterialLoadedObservable = new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        /**
         * Observable raised when the loader creates a camera after parsing the glTF properties of the camera.
         */
        this.onCameraLoadedObservable = new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        /**
         * Observable raised when the asset is completely loaded, immediately before the loader is disposed.
         * For assets with LODs, raised when all of the LODs are complete.
         * For assets without LODs, raised when the model is complete, immediately after the loader resolves the returned promise.
         */
        this.onCompleteObservable = new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        /**
         * Observable raised when an error occurs.
         */
        this.onErrorObservable = new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        /**
         * Observable raised after the loader is disposed.
         */
        this.onDisposeObservable = new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        /**
         * Observable raised after a loader extension is created.
         * Set additional options for a loader extension in this event.
         */
        this.onExtensionLoadedObservable = new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        /**
         * Defines if the loader should validate the asset.
         */
        this.validate = false;
        /**
         * Observable raised after validation when validate is set to true. The event data is the result of the validation.
         */
        this.onValidatedObservable = new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        this._loader = null;
        this._state = null;
        this._requests = new Array();
        /**
         * Name of the loader ("gltf")
         */
        this.name = "gltf";
        /** @internal */
        this.extensions = {
            ".gltf": { isBinary: false },
            ".glb": { isBinary: true },
        };
        /**
         * Observable raised when the loader state changes.
         */
        this.onLoaderStateChangedObservable = new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        this._logIndentLevel = 0;
        this._loggingEnabled = false;
        /** @internal */
        this._log = this._logDisabled;
        this._capturePerformanceCounters = false;
        /** @internal */
        this._startPerformanceCounter = this._startPerformanceCounterDisabled;
        /** @internal */
        this._endPerformanceCounter = this._endPerformanceCounterDisabled;
    }
    Object.defineProperty(GLTFFileLoader.prototype, "onParsed", {
        /**
         * Raised when the asset has been parsed
         */
        set: function (callback) {
            if (this._onParsedObserver) {
                this.onParsedObservable.remove(this._onParsedObserver);
            }
            this._onParsedObserver = this.onParsedObservable.add(callback);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GLTFFileLoader.prototype, "onMeshLoaded", {
        /**
         * Callback raised when the loader creates a mesh after parsing the glTF properties of the mesh.
         * Note that the callback is called as soon as the mesh object is created, meaning some data may not have been setup yet for this mesh (vertex data, morph targets, material, ...)
         */
        set: function (callback) {
            if (this._onMeshLoadedObserver) {
                this.onMeshLoadedObservable.remove(this._onMeshLoadedObserver);
            }
            this._onMeshLoadedObserver = this.onMeshLoadedObservable.add(callback);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GLTFFileLoader.prototype, "onTextureLoaded", {
        /**
         * Callback raised when the loader creates a texture after parsing the glTF properties of the texture.
         */
        set: function (callback) {
            if (this._onTextureLoadedObserver) {
                this.onTextureLoadedObservable.remove(this._onTextureLoadedObserver);
            }
            this._onTextureLoadedObserver = this.onTextureLoadedObservable.add(callback);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GLTFFileLoader.prototype, "onMaterialLoaded", {
        /**
         * Callback raised when the loader creates a material after parsing the glTF properties of the material.
         */
        set: function (callback) {
            if (this._onMaterialLoadedObserver) {
                this.onMaterialLoadedObservable.remove(this._onMaterialLoadedObserver);
            }
            this._onMaterialLoadedObserver = this.onMaterialLoadedObservable.add(callback);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GLTFFileLoader.prototype, "onCameraLoaded", {
        /**
         * Callback raised when the loader creates a camera after parsing the glTF properties of the camera.
         */
        set: function (callback) {
            if (this._onCameraLoadedObserver) {
                this.onCameraLoadedObservable.remove(this._onCameraLoadedObserver);
            }
            this._onCameraLoadedObserver = this.onCameraLoadedObservable.add(callback);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GLTFFileLoader.prototype, "onComplete", {
        /**
         * Callback raised when the asset is completely loaded, immediately before the loader is disposed.
         * For assets with LODs, raised when all of the LODs are complete.
         * For assets without LODs, raised when the model is complete, immediately after the loader resolves the returned promise.
         */
        set: function (callback) {
            if (this._onCompleteObserver) {
                this.onCompleteObservable.remove(this._onCompleteObserver);
            }
            this._onCompleteObserver = this.onCompleteObservable.add(callback);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GLTFFileLoader.prototype, "onError", {
        /**
         * Callback raised when an error occurs.
         */
        set: function (callback) {
            if (this._onErrorObserver) {
                this.onErrorObservable.remove(this._onErrorObserver);
            }
            this._onErrorObserver = this.onErrorObservable.add(callback);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GLTFFileLoader.prototype, "onDispose", {
        /**
         * Callback raised after the loader is disposed.
         */
        set: function (callback) {
            if (this._onDisposeObserver) {
                this.onDisposeObservable.remove(this._onDisposeObserver);
            }
            this._onDisposeObserver = this.onDisposeObservable.add(callback);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GLTFFileLoader.prototype, "onExtensionLoaded", {
        /**
         * Callback raised after a loader extension is created.
         */
        set: function (callback) {
            if (this._onExtensionLoadedObserver) {
                this.onExtensionLoadedObservable.remove(this._onExtensionLoadedObserver);
            }
            this._onExtensionLoadedObserver = this.onExtensionLoadedObservable.add(callback);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GLTFFileLoader.prototype, "loggingEnabled", {
        /**
         * Defines if the loader logging is enabled.
         */
        get: function () {
            return this._loggingEnabled;
        },
        set: function (value) {
            if (this._loggingEnabled === value) {
                return;
            }
            this._loggingEnabled = value;
            if (this._loggingEnabled) {
                this._log = this._logEnabled;
            }
            else {
                this._log = this._logDisabled;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GLTFFileLoader.prototype, "capturePerformanceCounters", {
        /**
         * Defines if the loader should capture performance counters.
         */
        get: function () {
            return this._capturePerformanceCounters;
        },
        set: function (value) {
            if (this._capturePerformanceCounters === value) {
                return;
            }
            this._capturePerformanceCounters = value;
            if (this._capturePerformanceCounters) {
                this._startPerformanceCounter = this._startPerformanceCounterEnabled;
                this._endPerformanceCounter = this._endPerformanceCounterEnabled;
            }
            else {
                this._startPerformanceCounter = this._startPerformanceCounterDisabled;
                this._endPerformanceCounter = this._endPerformanceCounterDisabled;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GLTFFileLoader.prototype, "onValidated", {
        /**
         * Callback raised after a loader extension is created.
         */
        set: function (callback) {
            if (this._onValidatedObserver) {
                this.onValidatedObservable.remove(this._onValidatedObserver);
            }
            this._onValidatedObserver = this.onValidatedObservable.add(callback);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Disposes the loader, releases resources during load, and cancels any outstanding requests.
     */
    GLTFFileLoader.prototype.dispose = function () {
        if (this._loader) {
            this._loader.dispose();
            this._loader = null;
        }
        for (var _i = 0, _a = this._requests; _i < _a.length; _i++) {
            var request = _a[_i];
            request.abort();
        }
        this._requests.length = 0;
        delete this._progressCallback;
        this.preprocessUrlAsync = function (url) { return Promise.resolve(url); };
        this.onMeshLoadedObservable.clear();
        this.onSkinLoadedObservable.clear();
        this.onTextureLoadedObservable.clear();
        this.onMaterialLoadedObservable.clear();
        this.onCameraLoadedObservable.clear();
        this.onCompleteObservable.clear();
        this.onExtensionLoadedObservable.clear();
        this.onDisposeObservable.notifyObservers(undefined);
        this.onDisposeObservable.clear();
    };
    /**
     * @internal
     */
    GLTFFileLoader.prototype.loadFile = function (scene, fileOrUrl, rootUrl, onSuccess, onProgress, useArrayBuffer, onError, name) {
        var _this = this;
        if (ArrayBuffer.isView(fileOrUrl)) {
            this._loadBinary(scene, fileOrUrl, rootUrl, onSuccess, onError, name);
            return null;
        }
        this._progressCallback = onProgress;
        var fileName = fileOrUrl.name || babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Tools.GetFilename(fileOrUrl);
        if (useArrayBuffer) {
            if (this.useRangeRequests) {
                if (this.validate) {
                    babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Logger.Warn("glTF validation is not supported when range requests are enabled");
                }
                var fileRequest_1 = {
                    abort: function () { },
                    onCompleteObservable: new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable(),
                };
                var dataBuffer = {
                    readAsync: function (byteOffset, byteLength) {
                        return new Promise(function (resolve, reject) {
                            _this._loadFile(scene, fileOrUrl, function (data) {
                                resolve(new Uint8Array(data));
                            }, true, function (error) {
                                reject(error);
                            }, function (webRequest) {
                                webRequest.setRequestHeader("Range", "bytes=".concat(byteOffset, "-").concat(byteOffset + byteLength - 1));
                            });
                        });
                    },
                    byteLength: 0,
                };
                this._unpackBinaryAsync(new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.DataReader(dataBuffer)).then(function (loaderData) {
                    fileRequest_1.onCompleteObservable.notifyObservers(fileRequest_1);
                    onSuccess(loaderData);
                }, onError ? function (error) { return onError(undefined, error); } : undefined);
                return fileRequest_1;
            }
            return this._loadFile(scene, fileOrUrl, function (data) {
                _this._validate(scene, new Uint8Array(data), rootUrl, fileName);
                _this._unpackBinaryAsync(new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.DataReader({
                    readAsync: function (byteOffset, byteLength) { return readAsync(data, byteOffset, byteLength); },
                    byteLength: data.byteLength,
                })).then(function (loaderData) {
                    onSuccess(loaderData);
                }, onError ? function (error) { return onError(undefined, error); } : undefined);
            }, true, onError);
        }
        return this._loadFile(scene, fileOrUrl, function (data) {
            _this._validate(scene, new Uint8Array(data), rootUrl, fileName);
            onSuccess({ json: _this._parseJson(data) });
        }, useArrayBuffer, onError);
    };
    /**
     * @internal
     */
    GLTFFileLoader.prototype._loadBinary = function (scene, data, rootUrl, onSuccess, onError, fileName) {
        this._validate(scene, data, rootUrl, fileName);
        this._unpackBinaryAsync(new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.DataReader({
            readAsync: function (byteOffset, byteLength) { return readViewAsync(data, byteOffset, byteLength); },
            byteLength: data.byteLength,
        })).then(function (loaderData) {
            onSuccess(loaderData);
        }, onError ? function (error) { return onError(undefined, error); } : undefined);
    };
    /**
     * @internal
     */
    GLTFFileLoader.prototype.importMeshAsync = function (meshesNames, scene, data, rootUrl, onProgress, fileName) {
        var _this = this;
        return Promise.resolve().then(function () {
            _this.onParsedObservable.notifyObservers(data);
            _this.onParsedObservable.clear();
            _this._log("Loading ".concat(fileName || ""));
            _this._loader = _this._getLoader(data);
            return _this._loader.importMeshAsync(meshesNames, scene, null, data, rootUrl, onProgress, fileName);
        });
    };
    /**
     * @internal
     */
    GLTFFileLoader.prototype.loadAsync = function (scene, data, rootUrl, onProgress, fileName) {
        var _this = this;
        return Promise.resolve().then(function () {
            _this.onParsedObservable.notifyObservers(data);
            _this.onParsedObservable.clear();
            _this._log("Loading ".concat(fileName || ""));
            _this._loader = _this._getLoader(data);
            return _this._loader.loadAsync(scene, data, rootUrl, onProgress, fileName);
        });
    };
    /**
     * @internal
     */
    GLTFFileLoader.prototype.loadAssetContainerAsync = function (scene, data, rootUrl, onProgress, fileName) {
        var _this = this;
        return Promise.resolve().then(function () {
            _this.onParsedObservable.notifyObservers(data);
            _this.onParsedObservable.clear();
            _this._log("Loading ".concat(fileName || ""));
            _this._loader = _this._getLoader(data);
            // Prepare the asset container.
            var container = new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.AssetContainer(scene);
            // Get materials/textures when loading to add to container
            var materials = [];
            _this.onMaterialLoadedObservable.add(function (material) {
                materials.push(material);
            });
            var textures = [];
            _this.onTextureLoadedObservable.add(function (texture) {
                textures.push(texture);
            });
            var cameras = [];
            _this.onCameraLoadedObservable.add(function (camera) {
                cameras.push(camera);
            });
            var morphTargetManagers = [];
            _this.onMeshLoadedObservable.add(function (mesh) {
                if (mesh.morphTargetManager) {
                    morphTargetManagers.push(mesh.morphTargetManager);
                }
            });
            return _this._loader.importMeshAsync(null, scene, container, data, rootUrl, onProgress, fileName).then(function (result) {
                Array.prototype.push.apply(container.geometries, result.geometries);
                Array.prototype.push.apply(container.meshes, result.meshes);
                Array.prototype.push.apply(container.particleSystems, result.particleSystems);
                Array.prototype.push.apply(container.skeletons, result.skeletons);
                Array.prototype.push.apply(container.animationGroups, result.animationGroups);
                Array.prototype.push.apply(container.materials, materials);
                Array.prototype.push.apply(container.textures, textures);
                Array.prototype.push.apply(container.lights, result.lights);
                Array.prototype.push.apply(container.transformNodes, result.transformNodes);
                Array.prototype.push.apply(container.cameras, cameras);
                Array.prototype.push.apply(container.morphTargetManagers, morphTargetManagers);
                return container;
            });
        });
    };
    /**
     * @internal
     */
    GLTFFileLoader.prototype.canDirectLoad = function (data) {
        return ((data.indexOf("asset") !== -1 && data.indexOf("version") !== -1) ||
            data.startsWith("data:base64," + GLTFFileLoader._MagicBase64Encoded) || // this is technically incorrect, but will continue to support for backcompat.
            data.startsWith("data:;base64," + GLTFFileLoader._MagicBase64Encoded) ||
            data.startsWith("data:application/octet-stream;base64," + GLTFFileLoader._MagicBase64Encoded) ||
            data.startsWith("data:model/gltf-binary;base64," + GLTFFileLoader._MagicBase64Encoded));
    };
    /**
     * @internal
     */
    GLTFFileLoader.prototype.directLoad = function (scene, data) {
        if (data.startsWith("base64," + GLTFFileLoader._MagicBase64Encoded) || // this is technically incorrect, but will continue to support for backcompat.
            data.startsWith(";base64," + GLTFFileLoader._MagicBase64Encoded) ||
            data.startsWith("application/octet-stream;base64," + GLTFFileLoader._MagicBase64Encoded) ||
            data.startsWith("model/gltf-binary;base64," + GLTFFileLoader._MagicBase64Encoded)) {
            var arrayBuffer_1 = (0,babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.DecodeBase64UrlToBinary)(data);
            this._validate(scene, new Uint8Array(arrayBuffer_1));
            return this._unpackBinaryAsync(new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.DataReader({
                readAsync: function (byteOffset, byteLength) { return readAsync(arrayBuffer_1, byteOffset, byteLength); },
                byteLength: arrayBuffer_1.byteLength,
            }));
        }
        this._validate(scene, data);
        return Promise.resolve({ json: this._parseJson(data) });
    };
    /** @internal */
    GLTFFileLoader.prototype.createPlugin = function () {
        return new GLTFFileLoader();
    };
    Object.defineProperty(GLTFFileLoader.prototype, "loaderState", {
        /**
         * The loader state or null if the loader is not active.
         */
        get: function () {
            return this._state;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Returns a promise that resolves when the asset is completely loaded.
     * @returns a promise that resolves when the asset is completely loaded.
     */
    GLTFFileLoader.prototype.whenCompleteAsync = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.onCompleteObservable.addOnce(function () {
                resolve();
            });
            _this.onErrorObservable.addOnce(function (reason) {
                reject(reason);
            });
        });
    };
    /**
     * @internal
     */
    GLTFFileLoader.prototype._setState = function (state) {
        if (this._state === state) {
            return;
        }
        this._state = state;
        this.onLoaderStateChangedObservable.notifyObservers(this._state);
        this._log(GLTFLoaderState[this._state]);
    };
    /**
     * @internal
     */
    GLTFFileLoader.prototype._loadFile = function (scene, fileOrUrl, onSuccess, useArrayBuffer, onError, onOpened) {
        var _this = this;
        var request = scene._loadFile(fileOrUrl, onSuccess, function (event) {
            _this._onProgress(event, request);
        }, true, useArrayBuffer, onError, onOpened);
        request.onCompleteObservable.add(function (request) {
            _this._requests.splice(_this._requests.indexOf(request), 1);
        });
        this._requests.push(request);
        return request;
    };
    GLTFFileLoader.prototype._onProgress = function (event, request) {
        if (!this._progressCallback) {
            return;
        }
        request._lengthComputable = event.lengthComputable;
        request._loaded = event.loaded;
        request._total = event.total;
        var lengthComputable = true;
        var loaded = 0;
        var total = 0;
        for (var _i = 0, _a = this._requests; _i < _a.length; _i++) {
            var request_1 = _a[_i];
            if (request_1._lengthComputable === undefined || request_1._loaded === undefined || request_1._total === undefined) {
                return;
            }
            lengthComputable = lengthComputable && request_1._lengthComputable;
            loaded += request_1._loaded;
            total += request_1._total;
        }
        this._progressCallback({
            lengthComputable: lengthComputable,
            loaded: loaded,
            total: lengthComputable ? total : 0,
        });
    };
    GLTFFileLoader.prototype._validate = function (scene, data, rootUrl, fileName) {
        var _this = this;
        if (rootUrl === void 0) { rootUrl = ""; }
        if (fileName === void 0) { fileName = ""; }
        if (!this.validate) {
            return;
        }
        this._startPerformanceCounter("Validate JSON");
        _glTFValidation__WEBPACK_IMPORTED_MODULE_1__.GLTFValidation.ValidateAsync(data, rootUrl, fileName, function (uri) {
            return _this.preprocessUrlAsync(rootUrl + uri).then(function (url) { return scene._loadFileAsync(url, undefined, true, true); });
        }).then(function (result) {
            _this._endPerformanceCounter("Validate JSON");
            _this.onValidatedObservable.notifyObservers(result);
            _this.onValidatedObservable.clear();
        }, function (reason) {
            _this._endPerformanceCounter("Validate JSON");
            babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Tools.Warn("Failed to validate: ".concat(reason.message));
            _this.onValidatedObservable.clear();
        });
    };
    GLTFFileLoader.prototype._getLoader = function (loaderData) {
        var asset = loaderData.json.asset || {};
        this._log("Asset version: ".concat(asset.version));
        asset.minVersion && this._log("Asset minimum version: ".concat(asset.minVersion));
        asset.generator && this._log("Asset generator: ".concat(asset.generator));
        var version = GLTFFileLoader._parseVersion(asset.version);
        if (!version) {
            throw new Error("Invalid version: " + asset.version);
        }
        if (asset.minVersion !== undefined) {
            var minVersion = GLTFFileLoader._parseVersion(asset.minVersion);
            if (!minVersion) {
                throw new Error("Invalid minimum version: " + asset.minVersion);
            }
            if (GLTFFileLoader._compareVersion(minVersion, { major: 2, minor: 0 }) > 0) {
                throw new Error("Incompatible minimum version: " + asset.minVersion);
            }
        }
        var createLoaders = {
            1: GLTFFileLoader._CreateGLTF1Loader,
            2: GLTFFileLoader._CreateGLTF2Loader,
        };
        var createLoader = createLoaders[version.major];
        if (!createLoader) {
            throw new Error("Unsupported version: " + asset.version);
        }
        return createLoader(this);
    };
    GLTFFileLoader.prototype._parseJson = function (json) {
        this._startPerformanceCounter("Parse JSON");
        this._log("JSON length: ".concat(json.length));
        var parsed = JSON.parse(json);
        this._endPerformanceCounter("Parse JSON");
        return parsed;
    };
    GLTFFileLoader.prototype._unpackBinaryAsync = function (dataReader) {
        var _this = this;
        this._startPerformanceCounter("Unpack Binary");
        // Read magic + version + length + json length + json format
        return dataReader.loadAsync(20).then(function () {
            var Binary = {
                Magic: 0x46546c67,
            };
            var magic = dataReader.readUint32();
            if (magic !== Binary.Magic) {
                throw new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.RuntimeError("Unexpected magic: " + magic, babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.ErrorCodes.GLTFLoaderUnexpectedMagicError);
            }
            var version = dataReader.readUint32();
            if (_this.loggingEnabled) {
                _this._log("Binary version: ".concat(version));
            }
            var length = dataReader.readUint32();
            if (!_this.useRangeRequests && length !== dataReader.buffer.byteLength) {
                babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Logger.Warn("Length in header does not match actual data length: ".concat(length, " != ").concat(dataReader.buffer.byteLength));
            }
            var unpacked;
            switch (version) {
                case 1: {
                    unpacked = _this._unpackBinaryV1Async(dataReader, length);
                    break;
                }
                case 2: {
                    unpacked = _this._unpackBinaryV2Async(dataReader, length);
                    break;
                }
                default: {
                    throw new Error("Unsupported version: " + version);
                }
            }
            _this._endPerformanceCounter("Unpack Binary");
            return unpacked;
        });
    };
    GLTFFileLoader.prototype._unpackBinaryV1Async = function (dataReader, length) {
        var ContentFormat = {
            JSON: 0,
        };
        var contentLength = dataReader.readUint32();
        var contentFormat = dataReader.readUint32();
        if (contentFormat !== ContentFormat.JSON) {
            throw new Error("Unexpected content format: ".concat(contentFormat));
        }
        var bodyLength = length - dataReader.byteOffset;
        var data = { json: this._parseJson(dataReader.readString(contentLength)), bin: null };
        if (bodyLength !== 0) {
            var startByteOffset_1 = dataReader.byteOffset;
            data.bin = {
                readAsync: function (byteOffset, byteLength) { return dataReader.buffer.readAsync(startByteOffset_1 + byteOffset, byteLength); },
                byteLength: bodyLength,
            };
        }
        return Promise.resolve(data);
    };
    GLTFFileLoader.prototype._unpackBinaryV2Async = function (dataReader, length) {
        var _this = this;
        var ChunkFormat = {
            JSON: 0x4e4f534a,
            BIN: 0x004e4942,
        };
        // Read the JSON chunk header.
        var chunkLength = dataReader.readUint32();
        var chunkFormat = dataReader.readUint32();
        if (chunkFormat !== ChunkFormat.JSON) {
            throw new Error("First chunk format is not JSON");
        }
        // Bail if there are no other chunks.
        if (dataReader.byteOffset + chunkLength === length) {
            return dataReader.loadAsync(chunkLength).then(function () {
                return { json: _this._parseJson(dataReader.readString(chunkLength)), bin: null };
            });
        }
        // Read the JSON chunk and the length and type of the next chunk.
        return dataReader.loadAsync(chunkLength + 8).then(function () {
            var data = { json: _this._parseJson(dataReader.readString(chunkLength)), bin: null };
            var readAsync = function () {
                var chunkLength = dataReader.readUint32();
                var chunkFormat = dataReader.readUint32();
                switch (chunkFormat) {
                    case ChunkFormat.JSON: {
                        throw new Error("Unexpected JSON chunk");
                    }
                    case ChunkFormat.BIN: {
                        var startByteOffset_2 = dataReader.byteOffset;
                        data.bin = {
                            readAsync: function (byteOffset, byteLength) { return dataReader.buffer.readAsync(startByteOffset_2 + byteOffset, byteLength); },
                            byteLength: chunkLength,
                        };
                        dataReader.skipBytes(chunkLength);
                        break;
                    }
                    default: {
                        // ignore unrecognized chunkFormat
                        dataReader.skipBytes(chunkLength);
                        break;
                    }
                }
                if (dataReader.byteOffset !== length) {
                    return dataReader.loadAsync(8).then(readAsync);
                }
                return Promise.resolve(data);
            };
            return readAsync();
        });
    };
    GLTFFileLoader._parseVersion = function (version) {
        if (version === "1.0" || version === "1.0.1") {
            return {
                major: 1,
                minor: 0,
            };
        }
        var match = (version + "").match(/^(\d+)\.(\d+)/);
        if (!match) {
            return null;
        }
        return {
            major: parseInt(match[1]),
            minor: parseInt(match[2]),
        };
    };
    GLTFFileLoader._compareVersion = function (a, b) {
        if (a.major > b.major) {
            return 1;
        }
        if (a.major < b.major) {
            return -1;
        }
        if (a.minor > b.minor) {
            return 1;
        }
        if (a.minor < b.minor) {
            return -1;
        }
        return 0;
    };
    /**
     * @internal
     */
    GLTFFileLoader.prototype._logOpen = function (message) {
        this._log(message);
        this._logIndentLevel++;
    };
    /** @internal */
    GLTFFileLoader.prototype._logClose = function () {
        --this._logIndentLevel;
    };
    GLTFFileLoader.prototype._logEnabled = function (message) {
        var spaces = GLTFFileLoader._logSpaces.substr(0, this._logIndentLevel * 2);
        babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Logger.Log("".concat(spaces).concat(message));
    };
    GLTFFileLoader.prototype._logDisabled = function (message) { };
    GLTFFileLoader.prototype._startPerformanceCounterEnabled = function (counterName) {
        babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Tools.StartPerformanceCounter(counterName);
    };
    GLTFFileLoader.prototype._startPerformanceCounterDisabled = function (counterName) { };
    GLTFFileLoader.prototype._endPerformanceCounterEnabled = function (counterName) {
        babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Tools.EndPerformanceCounter(counterName);
    };
    GLTFFileLoader.prototype._endPerformanceCounterDisabled = function (counterName) { };
    // ----------
    // V1 options
    // ----------
    /**
     * Set this property to false to disable incremental loading which delays the loader from calling the success callback until after loading the meshes and shaders.
     * Textures always loads asynchronously. For example, the success callback can compute the bounding information of the loaded meshes when incremental loading is disabled.
     * Defaults to true.
     * @internal
     */
    GLTFFileLoader.IncrementalLoading = true;
    /**
     * Set this property to true in order to work with homogeneous coordinates, available with some converters and exporters.
     * Defaults to false. See https://en.wikipedia.org/wiki/Homogeneous_coordinates.
     * @internal
     */
    GLTFFileLoader.HomogeneousCoordinates = false;
    GLTFFileLoader._MagicBase64Encoded = "Z2xURg"; // "glTF" base64 encoded (without the quotes!)
    GLTFFileLoader._logSpaces = "                                ";
    return GLTFFileLoader;
}());
if (babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.SceneLoader) {
    babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.SceneLoader.RegisterPlugin(new GLTFFileLoader());
}


/***/ }),

/***/ "../../../dev/loaders/src/glTF/glTFValidation.ts":
/*!*******************************************************!*\
  !*** ../../../dev/loaders/src/glTF/glTFValidation.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GLTFValidation: () => (/* binding */ GLTFValidation)
/* harmony export */ });
/* harmony import */ var babylonjs_Misc_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Misc/tools */ "babylonjs/Misc/observable");
/* harmony import */ var babylonjs_Misc_tools__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Misc_tools__WEBPACK_IMPORTED_MODULE_0__);

function validateAsync(data, rootUrl, fileName, getExternalResource) {
    var options = {
        externalResourceFunction: function (uri) { return getExternalResource(uri).then(function (value) { return new Uint8Array(value); }); },
    };
    if (fileName) {
        options.uri = rootUrl === "file:" ? fileName : rootUrl + fileName;
    }
    return data instanceof ArrayBuffer ? GLTFValidator.validateBytes(new Uint8Array(data), options) : GLTFValidator.validateString(data, options);
}
/**
 * The worker function that gets converted to a blob url to pass into a worker.
 */
function workerFunc() {
    var pendingExternalResources = [];
    onmessage = function (message) {
        var data = message.data;
        switch (data.id) {
            case "init": {
                importScripts(data.url);
                break;
            }
            case "validate": {
                validateAsync(data.data, data.rootUrl, data.fileName, function (uri) {
                    return new Promise(function (resolve, reject) {
                        var index = pendingExternalResources.length;
                        pendingExternalResources.push({ resolve: resolve, reject: reject });
                        postMessage({ id: "getExternalResource", index: index, uri: uri });
                    });
                }).then(function (value) {
                    postMessage({ id: "validate.resolve", value: value });
                }, function (reason) {
                    postMessage({ id: "validate.reject", reason: reason });
                });
                break;
            }
            case "getExternalResource.resolve": {
                pendingExternalResources[data.index].resolve(data.value);
                break;
            }
            case "getExternalResource.reject": {
                pendingExternalResources[data.index].reject(data.reason);
                break;
            }
        }
    };
}
/**
 * glTF validation
 */
var GLTFValidation = /** @class */ (function () {
    function GLTFValidation() {
    }
    /**
     * Validate a glTF asset using the glTF-Validator.
     * @param data The JSON of a glTF or the array buffer of a binary glTF
     * @param rootUrl The root url for the glTF
     * @param fileName The file name for the glTF
     * @param getExternalResource The callback to get external resources for the glTF validator
     * @returns A promise that resolves with the glTF validation results once complete
     */
    GLTFValidation.ValidateAsync = function (data, rootUrl, fileName, getExternalResource) {
        var _this = this;
        var dataCopy = ArrayBuffer.isView(data) ? data.slice().buffer : data;
        if (typeof Worker === "function") {
            return new Promise(function (resolve, reject) {
                var workerContent = "".concat(validateAsync, "(").concat(workerFunc, ")()");
                var workerBlobUrl = URL.createObjectURL(new Blob([workerContent], { type: "application/javascript" }));
                var worker = new Worker(workerBlobUrl);
                var onError = function (error) {
                    worker.removeEventListener("error", onError);
                    worker.removeEventListener("message", onMessage);
                    reject(error);
                };
                var onMessage = function (message) {
                    var data = message.data;
                    switch (data.id) {
                        case "getExternalResource": {
                            getExternalResource(data.uri).then(function (value) {
                                worker.postMessage({ id: "getExternalResource.resolve", index: data.index, value: value }, [value]);
                            }, function (reason) {
                                worker.postMessage({ id: "getExternalResource.reject", index: data.index, reason: reason });
                            });
                            break;
                        }
                        case "validate.resolve": {
                            worker.removeEventListener("error", onError);
                            worker.removeEventListener("message", onMessage);
                            resolve(data.value);
                            worker.terminate();
                            break;
                        }
                        case "validate.reject": {
                            worker.removeEventListener("error", onError);
                            worker.removeEventListener("message", onMessage);
                            reject(data.reason);
                            worker.terminate();
                        }
                    }
                };
                worker.addEventListener("error", onError);
                worker.addEventListener("message", onMessage);
                worker.postMessage({ id: "init", url: babylonjs_Misc_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.GetBabylonScriptURL(_this.Configuration.url) });
                worker.postMessage({ id: "validate", data: dataCopy, rootUrl: rootUrl, fileName: fileName });
            });
        }
        else {
            if (!this._LoadScriptPromise) {
                this._LoadScriptPromise = babylonjs_Misc_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.LoadBabylonScriptAsync(this.Configuration.url);
            }
            return this._LoadScriptPromise.then(function () {
                return validateAsync(dataCopy, rootUrl, fileName, getExternalResource);
            });
        }
    };
    /**
     * The configuration. Defaults to `{ url: "https://cdn.babylonjs.com/gltf_validator.js" }`.
     */
    GLTFValidation.Configuration = {
        url: "".concat(babylonjs_Misc_tools__WEBPACK_IMPORTED_MODULE_0__.Tools._DefaultCdnUrl, "/gltf_validator.js"),
    };
    return GLTFValidation;
}());


/***/ }),

/***/ "../../../lts/loaders/src/legacy/legacy-glTF.ts":
/*!******************************************************!*\
  !*** ../../../lts/loaders/src/legacy/legacy-glTF.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GLTFFileLoader: () => (/* reexport safe */ loaders_glTF_glTFFileLoader__WEBPACK_IMPORTED_MODULE_0__.GLTFFileLoader),
/* harmony export */   GLTFLoaderAnimationStartMode: () => (/* reexport safe */ loaders_glTF_glTFFileLoader__WEBPACK_IMPORTED_MODULE_0__.GLTFLoaderAnimationStartMode),
/* harmony export */   GLTFLoaderCoordinateSystemMode: () => (/* reexport safe */ loaders_glTF_glTFFileLoader__WEBPACK_IMPORTED_MODULE_0__.GLTFLoaderCoordinateSystemMode),
/* harmony export */   GLTFLoaderState: () => (/* reexport safe */ loaders_glTF_glTFFileLoader__WEBPACK_IMPORTED_MODULE_0__.GLTFLoaderState),
/* harmony export */   GLTFValidation: () => (/* reexport safe */ loaders_glTF_glTFValidation__WEBPACK_IMPORTED_MODULE_1__.GLTFValidation)
/* harmony export */ });
/* harmony import */ var loaders_glTF_glTFFileLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! loaders/glTF/glTFFileLoader */ "../../../dev/loaders/src/glTF/glTFFileLoader.ts");
/* harmony import */ var loaders_glTF_glTFValidation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! loaders/glTF/glTFValidation */ "../../../dev/loaders/src/glTF/glTFValidation.ts");


/**
 * This is the entry point for the UMD module.
 * The entry point for a future ESM package should be index.ts
 */
var globalObject = typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : typeof window !== "undefined" ? window : undefined;
if (typeof globalObject !== "undefined") {
    globalObject.BABYLON = globalObject.BABYLON || {};
    for (var key in loaders_glTF_glTFFileLoader__WEBPACK_IMPORTED_MODULE_0__) {
        globalObject.BABYLON[key] = loaders_glTF_glTFFileLoader__WEBPACK_IMPORTED_MODULE_0__[key];
    }
    for (var key in loaders_glTF_glTFValidation__WEBPACK_IMPORTED_MODULE_1__) {
        globalObject.BABYLON[key] = loaders_glTF_glTFValidation__WEBPACK_IMPORTED_MODULE_1__[key];
    }
}




/***/ }),

/***/ "../../../lts/loaders/src/legacy/legacy-glTF2.ts":
/*!*******************************************************!*\
  !*** ../../../lts/loaders/src/legacy/legacy-glTF2.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GLTF2: () => (/* reexport module object */ loaders_glTF_2_0_index__WEBPACK_IMPORTED_MODULE_2__)
/* harmony export */ });
/* harmony import */ var loaders_glTF_2_0_Extensions_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! loaders/glTF/2.0/Extensions/index */ "../../../dev/loaders/src/glTF/2.0/Extensions/index.ts");
/* harmony import */ var loaders_glTF_2_0_glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! loaders/glTF/2.0/glTFLoaderInterfaces */ "../../../dev/loaders/src/glTF/2.0/glTFLoaderInterfaces.ts");
/* harmony import */ var loaders_glTF_2_0_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! loaders/glTF/2.0/index */ "../../../dev/loaders/src/glTF/2.0/index.ts");
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
    BABYLON_1.GLTF2.Loader = BABYLON_1.GLTF2.Loader || {};
    BABYLON_1.GLTF2.Loader.Extensions = BABYLON_1.GLTF2.Loader.Extensions || {};
    var keys = [];
    for (var key in loaders_glTF_2_0_Extensions_index__WEBPACK_IMPORTED_MODULE_0__) {
        BABYLON_1.GLTF2.Loader.Extensions[key] = loaders_glTF_2_0_Extensions_index__WEBPACK_IMPORTED_MODULE_0__[key];
        keys.push(key);
    }
    for (var key in loaders_glTF_2_0_glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_1__) {
        BABYLON_1.GLTF2.Loader[key] = loaders_glTF_2_0_glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_1__[key];
        keys.push(key);
    }
    for (var key in loaders_glTF_2_0_index__WEBPACK_IMPORTED_MODULE_2__) {
        // Prevent Reassignment.
        if (keys.indexOf(key) > -1) {
            continue;
        }
        BABYLON_1.GLTF2[key] = loaders_glTF_2_0_index__WEBPACK_IMPORTED_MODULE_2__[key];
    }
}



/***/ }),

/***/ "../../../lts/loaders/src/legacy/legacy-glTF2FileLoader.ts":
/*!*****************************************************************!*\
  !*** ../../../lts/loaders/src/legacy/legacy-glTF2FileLoader.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GLTF2: () => (/* reexport safe */ _legacy_glTF2__WEBPACK_IMPORTED_MODULE_1__.GLTF2),
/* harmony export */   GLTFFileLoader: () => (/* reexport safe */ _legacy_glTF__WEBPACK_IMPORTED_MODULE_0__.GLTFFileLoader),
/* harmony export */   GLTFLoaderAnimationStartMode: () => (/* reexport safe */ _legacy_glTF__WEBPACK_IMPORTED_MODULE_0__.GLTFLoaderAnimationStartMode),
/* harmony export */   GLTFLoaderCoordinateSystemMode: () => (/* reexport safe */ _legacy_glTF__WEBPACK_IMPORTED_MODULE_0__.GLTFLoaderCoordinateSystemMode),
/* harmony export */   GLTFLoaderState: () => (/* reexport safe */ _legacy_glTF__WEBPACK_IMPORTED_MODULE_0__.GLTFLoaderState),
/* harmony export */   GLTFValidation: () => (/* reexport safe */ _legacy_glTF__WEBPACK_IMPORTED_MODULE_0__.GLTFValidation)
/* harmony export */ });
/* harmony import */ var _legacy_glTF__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./legacy-glTF */ "../../../lts/loaders/src/legacy/legacy-glTF.ts");
/* harmony import */ var _legacy_glTF2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./legacy-glTF2 */ "../../../lts/loaders/src/legacy/legacy-glTF2.ts");
// eslint-disable-next-line import/export




/***/ }),

/***/ "babylonjs/Misc/observable":
/*!****************************************************************************************************!*\
  !*** external {"root":"BABYLON","commonjs":"babylonjs","commonjs2":"babylonjs","amd":"babylonjs"} ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_babylonjs_Misc_observable__;

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
/*!********************************!*\
  !*** ./src/glTF2FileLoader.ts ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   loaders: () => (/* reexport module object */ _lts_loaders_legacy_legacy_glTF2FileLoader__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _lts_loaders_legacy_legacy_glTF2FileLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lts/loaders/legacy/legacy-glTF2FileLoader */ "../../../lts/loaders/src/legacy/legacy-glTF2FileLoader.ts");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_lts_loaders_legacy_legacy_glTF2FileLoader__WEBPACK_IMPORTED_MODULE_0__);

})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFieWxvbi5nbFRGMkZpbGVMb2FkZXIuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBRUE7QUFXQTs7QUFFQTtBQUNBO0FBQ0E7QUFjQTs7QUFFQTtBQUNBO0FBaEJBOztBQUVBO0FBQ0E7QUFjQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBOztBQVpBO0FBQUE7QUFhQTs7O0FBaEJBO0FBQUE7QUFpQkE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEtBO0FBSUE7QUFNQTtBQUVBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQWFBOztBQUVBO0FBQ0E7QUFmQTs7QUFFQTtBQUNBO0FBYUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlHQTtBQUdBO0FBRUE7QUFNQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFhQTs7QUFFQTtBQUNBO0FBZkE7O0FBRUE7QUFDQTtBQWFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2pFQTtBQU1BO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBU0E7O0FBRUE7QUFDQTtBQVhBO0FBQ0E7QUFXQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDakRBO0FBR0E7QUFNQTs7QUFFQTtBQUNBO0FBcUJBOztBQUVBO0FBQ0E7QUF2QkE7O0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFnQkE7QUFDQTtBQWJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7O0FBRUE7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7O0FBS0E7QUFKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQUE7O0FBT0E7QUFOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBOztBQVdBO0FBVkE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZNQTtBQVFBO0FBQ0E7QUFFQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFRQTs7QUFFQTtBQUNBO0FBVkE7O0FBRUE7QUFDQTtBQVFBO0FBQ0E7QUFLQTtBQUhBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7O0FBUUE7QUFDQTs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RKQTtBQUVBO0FBUUE7QUFFQTtBQU1BOztBQUVBO0FBQ0E7QUFDQTtBQXVCQTs7QUFFQTtBQUNBO0FBekJBOztBQUVBO0FBQ0E7QUFZQTs7QUFFQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFFQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQWVBOztBQUVBO0FBQ0E7QUFqQkE7O0FBRUE7QUFDQTtBQWVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkhBO0FBS0E7QUFHQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQWtCQTs7QUFFQTtBQUNBO0FBcEJBOztBQUVBO0FBQ0E7QUFPQTs7QUFFQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUtBO0FBR0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBa0JBOztBQUVBO0FBQ0E7QUFwQkE7O0FBRUE7QUFDQTtBQU9BOztBQUVBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hIQTtBQUtBO0FBR0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFrQkE7O0FBRUE7QUFDQTtBQXBCQTs7QUFFQTtBQUNBO0FBT0E7O0FBRUE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25FQTtBQUtBO0FBR0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUF1QkE7O0FBRUE7QUFDQTtBQXBCQTs7QUFFQTtBQUNBO0FBT0E7O0FBRUE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUEzREE7O0FBRUE7QUFDQTtBQXlEQTtBQUFBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdFQTtBQUtBO0FBR0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFrQkE7O0FBRUE7QUFDQTtBQXBCQTs7QUFFQTtBQUNBO0FBT0E7O0FBRUE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0ZBO0FBQ0E7QUFLQTtBQUdBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBa0JBOztBQUVBO0FBQ0E7QUFwQkE7O0FBRUE7QUFDQTtBQU9BOztBQUVBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEdBO0FBS0E7QUFDQTtBQUdBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQWtCQTs7QUFFQTtBQUNBO0FBcEJBOztBQUVBO0FBQ0E7QUFPQTs7QUFFQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNHQTtBQUtBO0FBQ0E7QUFHQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQWtCQTs7QUFFQTtBQUNBO0FBcEJBOztBQUVBO0FBQ0E7QUFPQTs7QUFFQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pHQTtBQUtBO0FBR0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBa0JBOztBQUVBO0FBQ0E7QUFwQkE7O0FBRUE7QUFDQTtBQU9BOztBQUVBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuR0E7QUFLQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBZ0RBOztBQUVBO0FBQ0E7QUFpQ0E7Ozs7QUFJQTtBQUNBO0FBQUE7QUFoQkE7QUFDQTtBQUNBO0FBQ0E7QUFjQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQXBEQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBMENBOzs7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBOztBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBa0JBOztBQUVBO0FBQ0E7QUFwQkE7O0FBRUE7QUFDQTtBQU9BOztBQUVBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxWkE7QUFDQTtBQUtBO0FBRUE7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFrQkE7O0FBRUE7QUFDQTtBQXBCQTs7QUFFQTtBQUNBO0FBT0E7O0FBRUE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0ZBO0FBR0E7QUFNQTtBQVlBOztBQUVBO0FBQ0E7QUFDQTtBQWVBOztBQUVBO0FBQ0E7QUFqQkE7O0FBRUE7QUFDQTtBQWVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUFBO0FBUUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUF4RUE7QUFBQTtBQXlFQTtBQUNBOztBQWhGQTtBQUNBO0FBQUE7QUFpRkE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMVNBO0FBS0E7QUFHQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFrQkE7O0FBRUE7QUFDQTtBQXBCQTs7QUFFQTtBQUNBO0FBT0E7O0FBRUE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3JHQTtBQUVBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBV0E7O0FBRUE7QUFDQTtBQWJBOztBQUVBO0FBQ0E7QUFXQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QkE7QUFNQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQVNBOztBQUVBO0FBQ0E7QUFYQTtBQUNBO0FBV0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdERBO0FBSUE7QUFHQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQWFBOztBQUVBO0FBQ0E7QUFmQTs7QUFFQTtBQUNBO0FBYUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQzlFQTtBQUdBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQWtCQTs7QUFFQTtBQUNBO0FBcEJBOztBQUVBO0FBQ0E7QUFPQTs7QUFFQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFJQTtBQUlBO0FBeUJBOzs7QUFHQTtBQUNBO0FBQ0E7QUFlQTs7QUFFQTtBQUNBO0FBakJBOztBQUVBO0FBQ0E7QUFlQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTs7QUFmQTtBQUFBO0FBQUE7QUFpQkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBVkE7QUFBQTtBQVlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pUQTtBQUNBO0FBT0E7QUFHQTtBQVFBOztBQUVBO0FBQ0E7QUFDQTtBQWlEQTs7QUFFQTtBQUNBO0FBbkRBOztBQUVBO0FBQ0E7QUFPQTs7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBbEJBO0FBQUE7QUFtQkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBbEJBO0FBQUE7QUFtQkE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQWxDQTtBQUFBO0FBbUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQUE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBbkNBO0FBQUE7QUFvQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOVpBO0FBSUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQVNBO0FBQ0E7QUFUQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeERBO0FBSUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQVNBO0FBQ0E7QUFUQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUEwQ0E7QUFFQTtBQUNBO0FBRUE7QUFHQTtBQTJCQTtBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFBQTtBQXlDQTtBQXhDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFXQTs7QUFFQTtBQUNBO0FBNEdBOztBQUVBO0FBQ0E7QUE5R0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFxRkE7QUFDQTtBQTdFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUtBO0FBSEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7OztBQUFBO0FBS0E7QUFIQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFLQTtBQUhBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUtBO0FBSEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7OztBQUFBO0FBS0E7QUFIQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUFBO0FBT0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBSkE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQUE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFRQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFRQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZ0JBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUFBO0FBSUE7QUFJQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQU9BO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQVFBO0FBS0E7QUFFQTtBQU9BO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQU9BO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7OztBQU9BO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7O0FBT0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBNXFGQTtBQUVBOztBQUVBO0FBQ0E7QUF3cUZBO0FBQUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ240RkE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQUE7O0FBRUE7QUFDQTtBQUFBO0FBQUE7O0FBS0E7QUFKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBRUE7QUFDQTtBQUFBO0FBQUE7O0FBNEJBO0FBM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFyQkE7QUFBQTtBQXNCQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0NBO0FBQ0E7QUFhQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBc0NBOztBQUVBO0FBQ0E7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBZ0JBOztBQUVBO0FBQ0E7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFpQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBZUE7Ozs7O0FBS0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFjQTs7QUFFQTtBQUNBO0FBY0E7O0FBRUE7QUFDQTtBQWNBOzs7O0FBSUE7QUFDQTtBQWdCQTs7QUFFQTtBQUNBO0FBY0E7O0FBRUE7QUFDQTtBQWNBOzs7QUFHQTtBQUNBO0FBMERBOztBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBY0E7QUFDQTtBQUVBO0FBSUE7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUErU0E7O0FBRUE7QUFDQTtBQWlVQTtBQUNBO0FBRUE7QUFDQTtBQXNCQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBYUE7QUE3L0JBO0FBSEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBMkhBO0FBSkE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQW9CQTtBQUhBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQVlBO0FBSEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBWUE7QUFIQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFnQkE7QUFMQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQVlBO0FBSEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBWUE7QUFIQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFhQTtBQUhBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUtBO0FBSEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQWRBO0FBbUJBO0FBSEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFoQkE7QUFpQ0E7QUFIQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFvQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFBQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFJQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBSUE7QUFFQTs7QUFFQTtBQUNBO0FBUUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUVBOztBQUVBO0FBQ0E7QUFBQTtBQVFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUhBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQU9BOzs7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQUE7QUFRQTtBQUlBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFVQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBci9CQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBMFRBO0FBNm5CQTtBQThDQTtBQUFBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzdyQ0E7QUFTQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWUE7O0FBRUE7QUFDQTtBQUFBO0FBb0ZBO0FBMUVBOzs7Ozs7O0FBT0E7QUFDQTtBQUFBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsRkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUE4RUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUtBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNqWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vTE9BREVSUy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vTE9BREVSUy8uLi8uLi8uLi9kZXYvbG9hZGVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9FWFRfbGlnaHRzX2ltYWdlX2Jhc2VkLnRzIiwid2VicGFjazovL0xPQURFUlMvLi4vLi4vLi4vZGV2L2xvYWRlcnMvc3JjL2dsVEYvMi4wL0V4dGVuc2lvbnMvRVhUX21lc2hfZ3B1X2luc3RhbmNpbmcudHMiLCJ3ZWJwYWNrOi8vTE9BREVSUy8uLi8uLi8uLi9kZXYvbG9hZGVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9FWFRfbWVzaG9wdF9jb21wcmVzc2lvbi50cyIsIndlYnBhY2s6Ly9MT0FERVJTLy4uLy4uLy4uL2Rldi9sb2FkZXJzL3NyYy9nbFRGLzIuMC9FeHRlbnNpb25zL0VYVF90ZXh0dXJlX3dlYnAudHMiLCJ3ZWJwYWNrOi8vTE9BREVSUy8uLi8uLi8uLi9kZXYvbG9hZGVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9FeHRyYXNBc01ldGFkYXRhLnRzIiwid2VicGFjazovL0xPQURFUlMvLi4vLi4vLi4vZGV2L2xvYWRlcnMvc3JjL2dsVEYvMi4wL0V4dGVuc2lvbnMvS0hSX2FuaW1hdGlvbl9wb2ludGVyLmRhdGEudHMiLCJ3ZWJwYWNrOi8vTE9BREVSUy8uLi8uLi8uLi9kZXYvbG9hZGVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9LSFJfYW5pbWF0aW9uX3BvaW50ZXIudHMiLCJ3ZWJwYWNrOi8vTE9BREVSUy8uLi8uLi8uLi9kZXYvbG9hZGVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9LSFJfZHJhY29fbWVzaF9jb21wcmVzc2lvbi50cyIsIndlYnBhY2s6Ly9MT0FERVJTLy4uLy4uLy4uL2Rldi9sb2FkZXJzL3NyYy9nbFRGLzIuMC9FeHRlbnNpb25zL0tIUl9saWdodHNfcHVuY3R1YWwudHMiLCJ3ZWJwYWNrOi8vTE9BREVSUy8uLi8uLi8uLi9kZXYvbG9hZGVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9LSFJfbWF0ZXJpYWxzX2FuaXNvdHJvcHkudHMiLCJ3ZWJwYWNrOi8vTE9BREVSUy8uLi8uLi8uLi9kZXYvbG9hZGVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9LSFJfbWF0ZXJpYWxzX2NsZWFyY29hdC50cyIsIndlYnBhY2s6Ly9MT0FERVJTLy4uLy4uLy4uL2Rldi9sb2FkZXJzL3NyYy9nbFRGLzIuMC9FeHRlbnNpb25zL0tIUl9tYXRlcmlhbHNfZW1pc3NpdmVfc3RyZW5ndGgudHMiLCJ3ZWJwYWNrOi8vTE9BREVSUy8uLi8uLi8uLi9kZXYvbG9hZGVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9LSFJfbWF0ZXJpYWxzX2lvci50cyIsIndlYnBhY2s6Ly9MT0FERVJTLy4uLy4uLy4uL2Rldi9sb2FkZXJzL3NyYy9nbFRGLzIuMC9FeHRlbnNpb25zL0tIUl9tYXRlcmlhbHNfaXJpZGVzY2VuY2UudHMiLCJ3ZWJwYWNrOi8vTE9BREVSUy8uLi8uLi8uLi9kZXYvbG9hZGVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9LSFJfbWF0ZXJpYWxzX3BiclNwZWN1bGFyR2xvc3NpbmVzcy50cyIsIndlYnBhY2s6Ly9MT0FERVJTLy4uLy4uLy4uL2Rldi9sb2FkZXJzL3NyYy9nbFRGLzIuMC9FeHRlbnNpb25zL0tIUl9tYXRlcmlhbHNfc2hlZW4udHMiLCJ3ZWJwYWNrOi8vTE9BREVSUy8uLi8uLi8uLi9kZXYvbG9hZGVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9LSFJfbWF0ZXJpYWxzX3NwZWN1bGFyLnRzIiwid2VicGFjazovL0xPQURFUlMvLi4vLi4vLi4vZGV2L2xvYWRlcnMvc3JjL2dsVEYvMi4wL0V4dGVuc2lvbnMvS0hSX21hdGVyaWFsc190cmFuc2x1Y2VuY3kudHMiLCJ3ZWJwYWNrOi8vTE9BREVSUy8uLi8uLi8uLi9kZXYvbG9hZGVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9LSFJfbWF0ZXJpYWxzX3RyYW5zbWlzc2lvbi50cyIsIndlYnBhY2s6Ly9MT0FERVJTLy4uLy4uLy4uL2Rldi9sb2FkZXJzL3NyYy9nbFRGLzIuMC9FeHRlbnNpb25zL0tIUl9tYXRlcmlhbHNfdW5saXQudHMiLCJ3ZWJwYWNrOi8vTE9BREVSUy8uLi8uLi8uLi9kZXYvbG9hZGVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9LSFJfbWF0ZXJpYWxzX3ZhcmlhbnRzLnRzIiwid2VicGFjazovL0xPQURFUlMvLi4vLi4vLi4vZGV2L2xvYWRlcnMvc3JjL2dsVEYvMi4wL0V4dGVuc2lvbnMvS0hSX21hdGVyaWFsc192b2x1bWUudHMiLCJ3ZWJwYWNrOi8vTE9BREVSUy8uLi8uLi8uLi9kZXYvbG9hZGVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9LSFJfbWVzaF9xdWFudGl6YXRpb24udHMiLCJ3ZWJwYWNrOi8vTE9BREVSUy8uLi8uLi8uLi9kZXYvbG9hZGVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9LSFJfdGV4dHVyZV9iYXNpc3UudHMiLCJ3ZWJwYWNrOi8vTE9BREVSUy8uLi8uLi8uLi9kZXYvbG9hZGVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9LSFJfdGV4dHVyZV90cmFuc2Zvcm0udHMiLCJ3ZWJwYWNrOi8vTE9BREVSUy8uLi8uLi8uLi9kZXYvbG9hZGVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9LSFJfeG1wX2pzb25fbGQudHMiLCJ3ZWJwYWNrOi8vTE9BREVSUy8uLi8uLi8uLi9kZXYvbG9hZGVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9NU0ZUX2F1ZGlvX2VtaXR0ZXIudHMiLCJ3ZWJwYWNrOi8vTE9BREVSUy8uLi8uLi8uLi9kZXYvbG9hZGVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9NU0ZUX2xvZC50cyIsIndlYnBhY2s6Ly9MT0FERVJTLy4uLy4uLy4uL2Rldi9sb2FkZXJzL3NyYy9nbFRGLzIuMC9FeHRlbnNpb25zL01TRlRfbWluZWNyYWZ0TWVzaC50cyIsIndlYnBhY2s6Ly9MT0FERVJTLy4uLy4uLy4uL2Rldi9sb2FkZXJzL3NyYy9nbFRGLzIuMC9FeHRlbnNpb25zL01TRlRfc1JHQkZhY3RvcnMudHMiLCJ3ZWJwYWNrOi8vTE9BREVSUy8uLi8uLi8uLi9kZXYvbG9hZGVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9pbmRleC50cyIsIndlYnBhY2s6Ly9MT0FERVJTLy4uLy4uLy4uL2Rldi9sb2FkZXJzL3NyYy9nbFRGLzIuMC9nbFRGTG9hZGVyLnRzIiwid2VicGFjazovL0xPQURFUlMvLi4vLi4vLi4vZGV2L2xvYWRlcnMvc3JjL2dsVEYvMi4wL2dsVEZMb2FkZXJBbmltYXRpb24udHMiLCJ3ZWJwYWNrOi8vTE9BREVSUy8uLi8uLi8uLi9kZXYvbG9hZGVycy9zcmMvZ2xURi8yLjAvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vTE9BREVSUy8uLi8uLi8uLi9kZXYvbG9hZGVycy9zcmMvZ2xURi9nbFRGRmlsZUxvYWRlci50cyIsIndlYnBhY2s6Ly9MT0FERVJTLy4uLy4uLy4uL2Rldi9sb2FkZXJzL3NyYy9nbFRGL2dsVEZWYWxpZGF0aW9uLnRzIiwid2VicGFjazovL0xPQURFUlMvLi4vLi4vLi4vbHRzL2xvYWRlcnMvc3JjL2xlZ2FjeS9sZWdhY3ktZ2xURi50cyIsIndlYnBhY2s6Ly9MT0FERVJTLy4uLy4uLy4uL2x0cy9sb2FkZXJzL3NyYy9sZWdhY3kvbGVnYWN5LWdsVEYyLnRzIiwid2VicGFjazovL0xPQURFUlMvLi4vLi4vLi4vbHRzL2xvYWRlcnMvc3JjL2xlZ2FjeS9sZWdhY3ktZ2xURjJGaWxlTG9hZGVyLnRzIiwid2VicGFjazovL0xPQURFUlMvZXh0ZXJuYWwgdW1kIHtcInJvb3RcIjpcIkJBQllMT05cIixcImNvbW1vbmpzXCI6XCJiYWJ5bG9uanNcIixcImNvbW1vbmpzMlwiOlwiYmFieWxvbmpzXCIsXCJhbWRcIjpcImJhYnlsb25qc1wifSIsIndlYnBhY2s6Ly9MT0FERVJTLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYubWpzIiwid2VicGFjazovL0xPQURFUlMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vTE9BREVSUy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9MT0FERVJTL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9MT0FERVJTL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vTE9BREVSUy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0xPQURFUlMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9MT0FERVJTLy4vc3JjL2dsVEYyRmlsZUxvYWRlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJiYWJ5bG9uanNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJiYWJ5bG9uanMtbG9hZGVyc1wiLCBbXCJiYWJ5bG9uanNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiYmFieWxvbmpzLWxvYWRlcnNcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJiYWJ5bG9uanNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkxPQURFUlNcIl0gPSBmYWN0b3J5KHJvb3RbXCJCQUJZTE9OXCJdKTtcbn0pKCh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdGhpcyksIChfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2JhYnlsb25qc19NaXNjX29ic2VydmFibGVfXykgPT4ge1xucmV0dXJuICIsImltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xyXG5pbXBvcnQgeyBTY2FsYXIgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLnNjYWxhclwiO1xyXG5pbXBvcnQgeyBTcGhlcmljYWxIYXJtb25pY3MsIFNwaGVyaWNhbFBvbHlub21pYWwgfSBmcm9tIFwiY29yZS9NYXRocy9zcGhlcmljYWxQb2x5bm9taWFsXCI7XHJcbmltcG9ydCB7IFF1YXRlcm5pb24sIE1hdHJpeCB9IGZyb20gXCJjb3JlL01hdGhzL21hdGgudmVjdG9yXCI7XHJcbmltcG9ydCB0eXBlIHsgQmFzZVRleHR1cmUgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvYmFzZVRleHR1cmVcIjtcclxuaW1wb3J0IHsgUmF3Q3ViZVRleHR1cmUgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvcmF3Q3ViZVRleHR1cmVcIjtcclxuXHJcbmltcG9ydCB0eXBlIHsgSUVYVExpZ2h0c0ltYWdlQmFzZWRfTGlnaHRSZWZlcmVuY2VJbWFnZUJhc2VkLCBJRVhUTGlnaHRzSW1hZ2VCYXNlZF9MaWdodEltYWdlQmFzZWQsIElFWFRMaWdodHNJbWFnZUJhc2VkIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgdHlwZSB7IElTY2VuZSB9IGZyb20gXCIuLi9nbFRGTG9hZGVySW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQgdHlwZSB7IElHTFRGTG9hZGVyRXh0ZW5zaW9uIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJFeHRlbnNpb25cIjtcclxuaW1wb3J0IHsgR0xURkxvYWRlciwgQXJyYXlJdGVtIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJcIjtcclxuXHJcbmNvbnN0IE5BTUUgPSBcIkVYVF9saWdodHNfaW1hZ2VfYmFzZWRcIjtcclxuXHJcbmRlY2xhcmUgbW9kdWxlIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCIge1xyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG4gICAgaW50ZXJmYWNlIElFWFRMaWdodHNJbWFnZUJhc2VkX0xpZ2h0SW1hZ2VCYXNlZCB7XHJcbiAgICAgICAgX2JhYnlsb25UZXh0dXJlPzogQmFzZVRleHR1cmU7XHJcbiAgICAgICAgX2xvYWRlZD86IFByb21pc2U8dm9pZD47XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBbU3BlY2lmaWNhdGlvbl0oaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFpbi9leHRlbnNpb25zLzIuMC9WZW5kb3IvRVhUX2xpZ2h0c19pbWFnZV9iYXNlZC9SRUFETUUubWQpXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBjbGFzcyBFWFRfbGlnaHRzX2ltYWdlX2Jhc2VkIGltcGxlbWVudHMgSUdMVEZMb2FkZXJFeHRlbnNpb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGlzIGV4dGVuc2lvbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBOQU1FO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIGVuYWJsZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBlbmFibGVkOiBib29sZWFuO1xyXG5cclxuICAgIHByaXZhdGUgX2xvYWRlcjogR0xURkxvYWRlcjtcclxuICAgIHByaXZhdGUgX2xpZ2h0cz86IElFWFRMaWdodHNJbWFnZUJhc2VkX0xpZ2h0SW1hZ2VCYXNlZFtdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGxvYWRlcjogR0xURkxvYWRlcikge1xyXG4gICAgICAgIHRoaXMuX2xvYWRlciA9IGxvYWRlcjtcclxuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0aGlzLl9sb2FkZXIuaXNFeHRlbnNpb25Vc2VkKE5BTUUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge1xyXG4gICAgICAgICh0aGlzLl9sb2FkZXIgYXMgYW55KSA9IG51bGw7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuX2xpZ2h0cztcclxuICAgIH1cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgb25Mb2FkaW5nKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGV4dGVuc2lvbnMgPSB0aGlzLl9sb2FkZXIuZ2x0Zi5leHRlbnNpb25zO1xyXG4gICAgICAgIGlmIChleHRlbnNpb25zICYmIGV4dGVuc2lvbnNbdGhpcy5uYW1lXSkge1xyXG4gICAgICAgICAgICBjb25zdCBleHRlbnNpb24gPSBleHRlbnNpb25zW3RoaXMubmFtZV0gYXMgSUVYVExpZ2h0c0ltYWdlQmFzZWQ7XHJcbiAgICAgICAgICAgIHRoaXMuX2xpZ2h0cyA9IGV4dGVuc2lvbi5saWdodHM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkU2NlbmVBc3luYyhjb250ZXh0OiBzdHJpbmcsIHNjZW5lOiBJU2NlbmUpOiBOdWxsYWJsZTxQcm9taXNlPHZvaWQ+PiB7XHJcbiAgICAgICAgcmV0dXJuIEdMVEZMb2FkZXIuTG9hZEV4dGVuc2lvbkFzeW5jPElFWFRMaWdodHNJbWFnZUJhc2VkX0xpZ2h0UmVmZXJlbmNlSW1hZ2VCYXNlZD4oY29udGV4dCwgc2NlbmUsIHRoaXMubmFtZSwgKGV4dGVuc2lvbkNvbnRleHQsIGV4dGVuc2lvbikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2FkZXIuX2FsbE1hdGVyaWFsc0RpcnR5UmVxdWlyZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBuZXcgQXJyYXk8UHJvbWlzZTxhbnk+PigpO1xyXG5cclxuICAgICAgICAgICAgcHJvbWlzZXMucHVzaCh0aGlzLl9sb2FkZXIubG9hZFNjZW5lQXN5bmMoY29udGV4dCwgc2NlbmUpKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2xvYWRlci5sb2dPcGVuKGAke2V4dGVuc2lvbkNvbnRleHR9YCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBsaWdodCA9IEFycmF5SXRlbS5HZXQoYCR7ZXh0ZW5zaW9uQ29udGV4dH0vbGlnaHRgLCB0aGlzLl9saWdodHMsIGV4dGVuc2lvbi5saWdodCk7XHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2FkTGlnaHRBc3luYyhgL2V4dGVuc2lvbnMvJHt0aGlzLm5hbWV9L2xpZ2h0cy8ke2V4dGVuc2lvbi5saWdodH1gLCBsaWdodCkudGhlbigodGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRlci5iYWJ5bG9uU2NlbmUuZW52aXJvbm1lbnRUZXh0dXJlID0gdGV4dHVyZTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9sb2FkZXIubG9nQ2xvc2UoKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoKSA9PiB7fSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZExpZ2h0QXN5bmMoY29udGV4dDogc3RyaW5nLCBsaWdodDogSUVYVExpZ2h0c0ltYWdlQmFzZWRfTGlnaHRJbWFnZUJhc2VkKTogUHJvbWlzZTxCYXNlVGV4dHVyZT4ge1xyXG4gICAgICAgIGlmICghbGlnaHQuX2xvYWRlZCkge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9taXNlcyA9IG5ldyBBcnJheTxQcm9taXNlPGFueT4+KCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9sb2FkZXIubG9nT3BlbihgJHtjb250ZXh0fWApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaW1hZ2VEYXRhID0gbmV3IEFycmF5PEFycmF5PEFycmF5QnVmZmVyVmlldz4+KGxpZ2h0LnNwZWN1bGFySW1hZ2VzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IG1pcG1hcCA9IDA7IG1pcG1hcCA8IGxpZ2h0LnNwZWN1bGFySW1hZ2VzLmxlbmd0aDsgbWlwbWFwKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZhY2VzID0gbGlnaHQuc3BlY3VsYXJJbWFnZXNbbWlwbWFwXTtcclxuICAgICAgICAgICAgICAgIGltYWdlRGF0YVttaXBtYXBdID0gbmV3IEFycmF5PEFycmF5QnVmZmVyVmlldz4oZmFjZXMubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGZhY2UgPSAwOyBmYWNlIDwgZmFjZXMubGVuZ3RoOyBmYWNlKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzcGVjdWxhckltYWdlQ29udGV4dCA9IGAke2NvbnRleHR9L3NwZWN1bGFySW1hZ2VzLyR7bWlwbWFwfS8ke2ZhY2V9YDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2FkZXIubG9nT3BlbihgJHtzcGVjdWxhckltYWdlQ29udGV4dH1gKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBmYWNlc1tmYWNlXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWFnZSA9IEFycmF5SXRlbS5HZXQoc3BlY3VsYXJJbWFnZUNvbnRleHQsIHRoaXMuX2xvYWRlci5nbHRmLmltYWdlcywgaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRlci5sb2FkSW1hZ2VBc3luYyhgL2ltYWdlcy8ke2luZGV4fWAsIGltYWdlKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZURhdGFbbWlwbWFwXVtmYWNlXSA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9hZGVyLmxvZ0Nsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2xvYWRlci5sb2dDbG9zZSgpO1xyXG5cclxuICAgICAgICAgICAgbGlnaHQuX2xvYWRlZCA9IFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJhYnlsb25UZXh0dXJlID0gbmV3IFJhd0N1YmVUZXh0dXJlKHRoaXMuX2xvYWRlci5iYWJ5bG9uU2NlbmUsIG51bGwsIGxpZ2h0LnNwZWN1bGFySW1hZ2VTaXplKTtcclxuICAgICAgICAgICAgICAgIGJhYnlsb25UZXh0dXJlLm5hbWUgPSBsaWdodC5uYW1lIHx8IFwiZW52aXJvbm1lbnRcIjtcclxuICAgICAgICAgICAgICAgIGxpZ2h0Ll9iYWJ5bG9uVGV4dHVyZSA9IGJhYnlsb25UZXh0dXJlO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChsaWdodC5pbnRlbnNpdHkgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFieWxvblRleHR1cmUubGV2ZWwgPSBsaWdodC5pbnRlbnNpdHk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGxpZ2h0LnJvdGF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJvdGF0aW9uID0gUXVhdGVybmlvbi5Gcm9tQXJyYXkobGlnaHQucm90YXRpb24pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBJbnZlcnQgdGhlIHJvdGF0aW9uIHNvIHRoYXQgcG9zaXRpdmUgcm90YXRpb24gaXMgY291bnRlci1jbG9ja3dpc2UuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9sb2FkZXIuYmFieWxvblNjZW5lLnVzZVJpZ2h0SGFuZGVkU3lzdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0aW9uID0gUXVhdGVybmlvbi5JbnZlcnNlKHJvdGF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIE1hdHJpeC5Gcm9tUXVhdGVybmlvblRvUmVmKHJvdGF0aW9uLCBiYWJ5bG9uVGV4dHVyZS5nZXRSZWZsZWN0aW9uVGV4dHVyZU1hdHJpeCgpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIWxpZ2h0LmlycmFkaWFuY2VDb2VmZmljaWVudHMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7Y29udGV4dH06IElycmFkaWFuY2UgY29lZmZpY2llbnRzIGFyZSBtaXNzaW5nYCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3BoZXJpY2FsSGFybW9uaWNzID0gU3BoZXJpY2FsSGFybW9uaWNzLkZyb21BcnJheShsaWdodC5pcnJhZGlhbmNlQ29lZmZpY2llbnRzKTtcclxuICAgICAgICAgICAgICAgIHNwaGVyaWNhbEhhcm1vbmljcy5zY2FsZUluUGxhY2UobGlnaHQuaW50ZW5zaXR5KTtcclxuXHJcbiAgICAgICAgICAgICAgICBzcGhlcmljYWxIYXJtb25pY3MuY29udmVydElycmFkaWFuY2VUb0xhbWJlcnRpYW5SYWRpYW5jZSgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3BoZXJpY2FsUG9seW5vbWlhbCA9IFNwaGVyaWNhbFBvbHlub21pYWwuRnJvbUhhcm1vbmljcyhzcGhlcmljYWxIYXJtb25pY3MpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIENvbXB1dGUgdGhlIGxvZCBnZW5lcmF0aW9uIHNjYWxlIHRvIGZpdCBleGFjdGx5IHRvIHRoZSBudW1iZXIgb2YgbGV2ZWxzIGF2YWlsYWJsZS5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGxvZEdlbmVyYXRpb25TY2FsZSA9IChpbWFnZURhdGEubGVuZ3RoIC0gMSkgLyBTY2FsYXIuTG9nMihsaWdodC5zcGVjdWxhckltYWdlU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYmFieWxvblRleHR1cmUudXBkYXRlUkdCREFzeW5jKGltYWdlRGF0YSwgc3BoZXJpY2FsUG9seW5vbWlhbCwgbG9kR2VuZXJhdGlvblNjYWxlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbGlnaHQuX2xvYWRlZC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGxpZ2h0Ll9iYWJ5bG9uVGV4dHVyZSE7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkdMVEZMb2FkZXIuUmVnaXN0ZXJFeHRlbnNpb24oTkFNRSwgKGxvYWRlcikgPT4gbmV3IEVYVF9saWdodHNfaW1hZ2VfYmFzZWQobG9hZGVyKSk7XHJcbiIsImltcG9ydCB7IFZlY3RvcjMsIFF1YXRlcm5pb24sIE1hdHJpeCwgVG1wVmVjdG9ycyB9IGZyb20gXCJjb3JlL01hdGhzL21hdGgudmVjdG9yXCI7XHJcbmltcG9ydCB0eXBlIHsgTWVzaCB9IGZyb20gXCJjb3JlL01lc2hlcy9tZXNoXCI7XHJcbmltcG9ydCB0eXBlIHsgVHJhbnNmb3JtTm9kZSB9IGZyb20gXCJjb3JlL01lc2hlcy90cmFuc2Zvcm1Ob2RlXCI7XHJcbmltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xyXG5pbXBvcnQgeyBHTFRGTG9hZGVyLCBBcnJheUl0ZW0gfSBmcm9tIFwiLi4vZ2xURkxvYWRlclwiO1xyXG5pbXBvcnQgdHlwZSB7IElHTFRGTG9hZGVyRXh0ZW5zaW9uIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJFeHRlbnNpb25cIjtcclxuaW1wb3J0IHR5cGUgeyBJTm9kZSB9IGZyb20gXCIuLi9nbFRGTG9hZGVySW50ZXJmYWNlc1wiO1xyXG5cclxuaW1wb3J0IHR5cGUgeyBJRVhUTWVzaEdwdUluc3RhbmNpbmcgfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcblxyXG5pbXBvcnQgXCJjb3JlL01lc2hlcy90aGluSW5zdGFuY2VNZXNoXCI7XHJcblxyXG5jb25zdCBOQU1FID0gXCJFWFRfbWVzaF9ncHVfaW5zdGFuY2luZ1wiO1xyXG5cclxuLyoqXHJcbiAqIFtTcGVjaWZpY2F0aW9uXShodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi9tYWluL2V4dGVuc2lvbnMvMi4wL1ZlbmRvci9FWFRfbWVzaF9ncHVfaW5zdGFuY2luZy9SRUFETUUubWQpXHJcbiAqIFtQbGF5Z3JvdW5kIFNhbXBsZV0oaHR0cHM6Ly9wbGF5Z3JvdW5kLmJhYnlsb25qcy5jb20vI1FGSUdMVyM5KVxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgY2xhc3MgRVhUX21lc2hfZ3B1X2luc3RhbmNpbmcgaW1wbGVtZW50cyBJR0xURkxvYWRlckV4dGVuc2lvbiB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBuYW1lIG9mIHRoaXMgZXh0ZW5zaW9uLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZSA9IE5BTUU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgZW5hYmxlZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGVuYWJsZWQ6IGJvb2xlYW47XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZGVyOiBHTFRGTG9hZGVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGxvYWRlcjogR0xURkxvYWRlcikge1xyXG4gICAgICAgIHRoaXMuX2xvYWRlciA9IGxvYWRlcjtcclxuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0aGlzLl9sb2FkZXIuaXNFeHRlbnNpb25Vc2VkKE5BTUUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge1xyXG4gICAgICAgICh0aGlzLl9sb2FkZXIgYXMgYW55KSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWROb2RlQXN5bmMoY29udGV4dDogc3RyaW5nLCBub2RlOiBJTm9kZSwgYXNzaWduOiAoYmFieWxvblRyYW5zZm9ybU5vZGU6IFRyYW5zZm9ybU5vZGUpID0+IHZvaWQpOiBOdWxsYWJsZTxQcm9taXNlPFRyYW5zZm9ybU5vZGU+PiB7XHJcbiAgICAgICAgcmV0dXJuIEdMVEZMb2FkZXIuTG9hZEV4dGVuc2lvbkFzeW5jPElFWFRNZXNoR3B1SW5zdGFuY2luZywgVHJhbnNmb3JtTm9kZT4oY29udGV4dCwgbm9kZSwgdGhpcy5uYW1lLCAoZXh0ZW5zaW9uQ29udGV4dCwgZXh0ZW5zaW9uKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvYWRlci5fZGlzYWJsZUluc3RhbmNlZE1lc2grKztcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLl9sb2FkZXIubG9hZE5vZGVBc3luYyhgL25vZGVzLyR7bm9kZS5pbmRleH1gLCBub2RlLCBhc3NpZ24pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fbG9hZGVyLl9kaXNhYmxlSW5zdGFuY2VkTWVzaC0tO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFub2RlLl9wcmltaXRpdmVCYWJ5bG9uTWVzaGVzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBuZXcgQXJyYXk8UHJvbWlzZTxOdWxsYWJsZTxGbG9hdDMyQXJyYXk+Pj4oKTtcclxuICAgICAgICAgICAgbGV0IGluc3RhbmNlQ291bnQgPSAwO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbG9hZEF0dHJpYnV0ZSA9IChhdHRyaWJ1dGU6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGV4dGVuc2lvbi5hdHRyaWJ1dGVzW2F0dHJpYnV0ZV0gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChQcm9taXNlLnJlc29sdmUobnVsbCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBhY2Nlc3NvciA9IEFycmF5SXRlbS5HZXQoYCR7ZXh0ZW5zaW9uQ29udGV4dH0vYXR0cmlidXRlcy8ke2F0dHJpYnV0ZX1gLCB0aGlzLl9sb2FkZXIuZ2x0Zi5hY2Nlc3NvcnMsIGV4dGVuc2lvbi5hdHRyaWJ1dGVzW2F0dHJpYnV0ZV0pO1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaCh0aGlzLl9sb2FkZXIuX2xvYWRGbG9hdEFjY2Vzc29yQXN5bmMoYC9hY2Nlc3NvcnMvJHthY2Nlc3Nvci5idWZmZXJWaWV3fWAsIGFjY2Vzc29yKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGluc3RhbmNlQ291bnQgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZUNvdW50ID0gYWNjZXNzb3IuY291bnQ7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGluc3RhbmNlQ291bnQgIT09IGFjY2Vzc29yLmNvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2V4dGVuc2lvbkNvbnRleHR9L2F0dHJpYnV0ZXM6IEluc3RhbmNlIGJ1ZmZlciBhY2Nlc3NvcnMgZG8gbm90IGhhdmUgdGhlIHNhbWUgY291bnQuYCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBsb2FkQXR0cmlidXRlKFwiVFJBTlNMQVRJT05cIik7XHJcbiAgICAgICAgICAgIGxvYWRBdHRyaWJ1dGUoXCJST1RBVElPTlwiKTtcclxuICAgICAgICAgICAgbG9hZEF0dHJpYnV0ZShcIlNDQUxFXCIpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHByb21pc2UudGhlbigoYmFieWxvblRyYW5zZm9ybU5vZGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoW3RyYW5zbGF0aW9uQnVmZmVyLCByb3RhdGlvbkJ1ZmZlciwgc2NhbGVCdWZmZXJdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0cmljZXMgPSBuZXcgRmxvYXQzMkFycmF5KGluc3RhbmNlQ291bnQgKiAxNik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFRtcFZlY3RvcnMuVmVjdG9yM1swXS5jb3B5RnJvbUZsb2F0cygwLCAwLCAwKTsgLy8gdHJhbnNsYXRpb25cclxuICAgICAgICAgICAgICAgICAgICBUbXBWZWN0b3JzLlF1YXRlcm5pb25bMF0uY29weUZyb21GbG9hdHMoMCwgMCwgMCwgMSk7IC8vIHJvdGF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgVG1wVmVjdG9ycy5WZWN0b3IzWzFdLmNvcHlGcm9tRmxvYXRzKDEsIDEsIDEpOyAvLyBzY2FsZVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluc3RhbmNlQ291bnQ7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGlvbkJ1ZmZlciAmJiBWZWN0b3IzLkZyb21BcnJheVRvUmVmKHRyYW5zbGF0aW9uQnVmZmVyLCBpICogMywgVG1wVmVjdG9ycy5WZWN0b3IzWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm90YXRpb25CdWZmZXIgJiYgUXVhdGVybmlvbi5Gcm9tQXJyYXlUb1JlZihyb3RhdGlvbkJ1ZmZlciwgaSAqIDQsIFRtcFZlY3RvcnMuUXVhdGVybmlvblswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlQnVmZmVyICYmIFZlY3RvcjMuRnJvbUFycmF5VG9SZWYoc2NhbGVCdWZmZXIsIGkgKiAzLCBUbXBWZWN0b3JzLlZlY3RvcjNbMV0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTWF0cml4LkNvbXBvc2VUb1JlZihUbXBWZWN0b3JzLlZlY3RvcjNbMV0sIFRtcFZlY3RvcnMuUXVhdGVybmlvblswXSwgVG1wVmVjdG9ycy5WZWN0b3IzWzBdLCBUbXBWZWN0b3JzLk1hdHJpeFswXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUbXBWZWN0b3JzLk1hdHJpeFswXS5jb3B5VG9BcnJheShtYXRyaWNlcywgaSAqIDE2KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYmFieWxvbk1lc2ggb2Ygbm9kZS5fcHJpbWl0aXZlQmFieWxvbk1lc2hlcyEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGJhYnlsb25NZXNoIGFzIE1lc2gpLnRoaW5JbnN0YW5jZVNldEJ1ZmZlcihcIm1hdHJpeFwiLCBtYXRyaWNlcywgMTYsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJhYnlsb25UcmFuc2Zvcm1Ob2RlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5HTFRGTG9hZGVyLlJlZ2lzdGVyRXh0ZW5zaW9uKE5BTUUsIChsb2FkZXIpID0+IG5ldyBFWFRfbWVzaF9ncHVfaW5zdGFuY2luZyhsb2FkZXIpKTtcclxuIiwiaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCJjb3JlL3R5cGVzXCI7XHJcbmltcG9ydCB0eXBlIHsgSUdMVEZMb2FkZXJFeHRlbnNpb24gfSBmcm9tIFwiLi4vZ2xURkxvYWRlckV4dGVuc2lvblwiO1xyXG5pbXBvcnQgeyBBcnJheUl0ZW0sIEdMVEZMb2FkZXIgfSBmcm9tIFwiLi4vZ2xURkxvYWRlclwiO1xyXG5pbXBvcnQgdHlwZSB7IElCdWZmZXJWaWV3IH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJJbnRlcmZhY2VzXCI7XHJcbmltcG9ydCB0eXBlIHsgSUVYVE1lc2hvcHRDb21wcmVzc2lvbiB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgTWVzaG9wdENvbXByZXNzaW9uIH0gZnJvbSBcImNvcmUvTWVzaGVzL0NvbXByZXNzaW9uL21lc2hvcHRDb21wcmVzc2lvblwiO1xyXG5cclxuY29uc3QgTkFNRSA9IFwiRVhUX21lc2hvcHRfY29tcHJlc3Npb25cIjtcclxuXHJcbmludGVyZmFjZSBJQnVmZmVyVmlld01lc2hvcHQgZXh0ZW5kcyBJQnVmZmVyVmlldyB7XHJcbiAgICBfbWVzaE9wdERhdGE/OiBQcm9taXNlPEFycmF5QnVmZmVyVmlldz47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBbU3BlY2lmaWNhdGlvbl0oaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFpbi9leHRlbnNpb25zLzIuMC9WZW5kb3IvRVhUX21lc2hvcHRfY29tcHJlc3Npb24vUkVBRE1FLm1kKVxyXG4gKlxyXG4gKiBUaGlzIGV4dGVuc2lvbiB1c2VzIGEgV2ViQXNzZW1ibHkgZGVjb2RlciBtb2R1bGUgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vemV1eC9tZXNob3B0aW1pemVyL3RyZWUvbWFzdGVyL2pzXHJcbiAqIEBzaW5jZSA1LjAuMFxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgY2xhc3MgRVhUX21lc2hvcHRfY29tcHJlc3Npb24gaW1wbGVtZW50cyBJR0xURkxvYWRlckV4dGVuc2lvbiB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBuYW1lIG9mIHRoaXMgZXh0ZW5zaW9uLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZSA9IE5BTUU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgZW5hYmxlZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGVuYWJsZWQ6IGJvb2xlYW47XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZGVyOiBHTFRGTG9hZGVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGxvYWRlcjogR0xURkxvYWRlcikge1xyXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IGxvYWRlci5pc0V4dGVuc2lvblVzZWQoTkFNRSk7XHJcbiAgICAgICAgdGhpcy5fbG9hZGVyID0gbG9hZGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge1xyXG4gICAgICAgICh0aGlzLl9sb2FkZXIgYXMgYW55KSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWRCdWZmZXJWaWV3QXN5bmMoY29udGV4dDogc3RyaW5nLCBidWZmZXJWaWV3OiBJQnVmZmVyVmlldyk6IE51bGxhYmxlPFByb21pc2U8QXJyYXlCdWZmZXJWaWV3Pj4ge1xyXG4gICAgICAgIHJldHVybiBHTFRGTG9hZGVyLkxvYWRFeHRlbnNpb25Bc3luYzxJRVhUTWVzaG9wdENvbXByZXNzaW9uLCBBcnJheUJ1ZmZlclZpZXc+KGNvbnRleHQsIGJ1ZmZlclZpZXcsIHRoaXMubmFtZSwgKGV4dGVuc2lvbkNvbnRleHQsIGV4dGVuc2lvbikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBidWZmZXJWaWV3TWVzaG9wdCA9IGJ1ZmZlclZpZXcgYXMgSUJ1ZmZlclZpZXdNZXNob3B0O1xyXG4gICAgICAgICAgICBpZiAoYnVmZmVyVmlld01lc2hvcHQuX21lc2hPcHREYXRhKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYnVmZmVyVmlld01lc2hvcHQuX21lc2hPcHREYXRhO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBidWZmZXIgPSBBcnJheUl0ZW0uR2V0KGAke2NvbnRleHR9L2J1ZmZlcmAsIHRoaXMuX2xvYWRlci5nbHRmLmJ1ZmZlcnMsIGV4dGVuc2lvbi5idWZmZXIpO1xyXG4gICAgICAgICAgICBidWZmZXJWaWV3TWVzaG9wdC5fbWVzaE9wdERhdGEgPSB0aGlzLl9sb2FkZXIubG9hZEJ1ZmZlckFzeW5jKGAvYnVmZmVycy8ke2J1ZmZlci5pbmRleH1gLCBidWZmZXIsIGV4dGVuc2lvbi5ieXRlT2Zmc2V0IHx8IDAsIGV4dGVuc2lvbi5ieXRlTGVuZ3RoKS50aGVuKChidWZmZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBNZXNob3B0Q29tcHJlc3Npb24uRGVmYXVsdC5kZWNvZGVHbHRmQnVmZmVyQXN5bmMoYnVmZmVyIGFzIFVpbnQ4QXJyYXksIGV4dGVuc2lvbi5jb3VudCwgZXh0ZW5zaW9uLmJ5dGVTdHJpZGUsIGV4dGVuc2lvbi5tb2RlLCBleHRlbnNpb24uZmlsdGVyKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYnVmZmVyVmlld01lc2hvcHQuX21lc2hPcHREYXRhO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5HTFRGTG9hZGVyLlJlZ2lzdGVyRXh0ZW5zaW9uKE5BTUUsIChsb2FkZXIpID0+IG5ldyBFWFRfbWVzaG9wdF9jb21wcmVzc2lvbihsb2FkZXIpKTtcclxuIiwiaW1wb3J0IHR5cGUgeyBJR0xURkxvYWRlckV4dGVuc2lvbiB9IGZyb20gXCIuLi9nbFRGTG9hZGVyRXh0ZW5zaW9uXCI7XHJcbmltcG9ydCB7IEdMVEZMb2FkZXIsIEFycmF5SXRlbSB9IGZyb20gXCIuLi9nbFRGTG9hZGVyXCI7XHJcbmltcG9ydCB0eXBlIHsgSVRleHR1cmUgfSBmcm9tIFwiLi4vZ2xURkxvYWRlckludGVyZmFjZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBCYXNlVGV4dHVyZSB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9UZXh0dXJlcy9iYXNlVGV4dHVyZVwiO1xyXG5pbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcImNvcmUvdHlwZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBJRVhUVGV4dHVyZVdlYlAgfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcblxyXG5jb25zdCBOQU1FID0gXCJFWFRfdGV4dHVyZV93ZWJwXCI7XHJcblxyXG4vKipcclxuICogW1NwZWNpZmljYXRpb25dKGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9ibG9iL21haW4vZXh0ZW5zaW9ucy8yLjAvVmVuZG9yL0VYVF90ZXh0dXJlX3dlYnAvUkVBRE1FLm1kKVxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgY2xhc3MgRVhUX3RleHR1cmVfd2VicCBpbXBsZW1lbnRzIElHTFRGTG9hZGVyRXh0ZW5zaW9uIHtcclxuICAgIC8qKiBUaGUgbmFtZSBvZiB0aGlzIGV4dGVuc2lvbi4gKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lID0gTkFNRTtcclxuXHJcbiAgICAvKiogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIGVuYWJsZWQuICovXHJcbiAgICBwdWJsaWMgZW5hYmxlZDogYm9vbGVhbjtcclxuXHJcbiAgICBwcml2YXRlIF9sb2FkZXI6IEdMVEZMb2FkZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobG9hZGVyOiBHTFRGTG9hZGVyKSB7XHJcbiAgICAgICAgdGhpcy5fbG9hZGVyID0gbG9hZGVyO1xyXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IGxvYWRlci5pc0V4dGVuc2lvblVzZWQoTkFNRSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgKHRoaXMuX2xvYWRlciBhcyBhbnkpID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgX2xvYWRUZXh0dXJlQXN5bmMoY29udGV4dDogc3RyaW5nLCB0ZXh0dXJlOiBJVGV4dHVyZSwgYXNzaWduOiAoYmFieWxvblRleHR1cmU6IEJhc2VUZXh0dXJlKSA9PiB2b2lkKTogTnVsbGFibGU8UHJvbWlzZTxCYXNlVGV4dHVyZT4+IHtcclxuICAgICAgICByZXR1cm4gR0xURkxvYWRlci5Mb2FkRXh0ZW5zaW9uQXN5bmM8SUVYVFRleHR1cmVXZWJQLCBCYXNlVGV4dHVyZT4oY29udGV4dCwgdGV4dHVyZSwgdGhpcy5uYW1lLCAoZXh0ZW5zaW9uQ29udGV4dCwgZXh0ZW5zaW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNhbXBsZXIgPSB0ZXh0dXJlLnNhbXBsZXIgPT0gdW5kZWZpbmVkID8gR0xURkxvYWRlci5EZWZhdWx0U2FtcGxlciA6IEFycmF5SXRlbS5HZXQoYCR7Y29udGV4dH0vc2FtcGxlcmAsIHRoaXMuX2xvYWRlci5nbHRmLnNhbXBsZXJzLCB0ZXh0dXJlLnNhbXBsZXIpO1xyXG4gICAgICAgICAgICBjb25zdCBpbWFnZSA9IEFycmF5SXRlbS5HZXQoYCR7ZXh0ZW5zaW9uQ29udGV4dH0vc291cmNlYCwgdGhpcy5fbG9hZGVyLmdsdGYuaW1hZ2VzLCBleHRlbnNpb24uc291cmNlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRlci5fY3JlYXRlVGV4dHVyZUFzeW5jKFxyXG4gICAgICAgICAgICAgICAgY29udGV4dCxcclxuICAgICAgICAgICAgICAgIHNhbXBsZXIsXHJcbiAgICAgICAgICAgICAgICBpbWFnZSxcclxuICAgICAgICAgICAgICAgIChiYWJ5bG9uVGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGFzc2lnbihiYWJ5bG9uVGV4dHVyZSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgIXRleHR1cmUuX3RleHR1cmVJbmZvLm5vbkNvbG9yRGF0YVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5HTFRGTG9hZGVyLlJlZ2lzdGVyRXh0ZW5zaW9uKE5BTUUsIChsb2FkZXIpID0+IG5ldyBFWFRfdGV4dHVyZV93ZWJwKGxvYWRlcikpO1xyXG4iLCJpbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcImNvcmUvdHlwZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBUcmFuc2Zvcm1Ob2RlIH0gZnJvbSBcImNvcmUvTWVzaGVzL3RyYW5zZm9ybU5vZGVcIjtcclxuaW1wb3J0IHR5cGUgeyBDYW1lcmEgfSBmcm9tIFwiY29yZS9DYW1lcmFzL2NhbWVyYVwiO1xyXG5cclxuaW1wb3J0IHR5cGUgeyBJUHJvcGVydHkgfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB0eXBlIHsgSU5vZGUsIElDYW1lcmEsIElNYXRlcmlhbCB9IGZyb20gXCIuLi9nbFRGTG9hZGVySW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQgdHlwZSB7IElHTFRGTG9hZGVyRXh0ZW5zaW9uIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJFeHRlbnNpb25cIjtcclxuaW1wb3J0IHsgR0xURkxvYWRlciB9IGZyb20gXCIuLi9nbFRGTG9hZGVyXCI7XHJcbmltcG9ydCB0eXBlIHsgTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvbWF0ZXJpYWxcIjtcclxuXHJcbmNvbnN0IE5BTUUgPSBcIkV4dHJhc0FzTWV0YWRhdGFcIjtcclxuXHJcbmludGVyZmFjZSBPYmplY3RXaXRoTWV0YWRhdGEge1xyXG4gICAgbWV0YWRhdGE6IGFueTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFN0b3JlIGdsVEYgZXh0cmFzIChpZiBwcmVzZW50KSBpbiBCSlMgb2JqZWN0cycgbWV0YWRhdGFcclxuICovXHJcbmV4cG9ydCBjbGFzcyBFeHRyYXNBc01ldGFkYXRhIGltcGxlbWVudHMgSUdMVEZMb2FkZXJFeHRlbnNpb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGlzIGV4dGVuc2lvbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBOQU1FO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIGVuYWJsZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBlbmFibGVkID0gdHJ1ZTtcclxuXHJcbiAgICBwcml2YXRlIF9sb2FkZXI6IEdMVEZMb2FkZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBfYXNzaWduRXh0cmFzKGJhYnlsb25PYmplY3Q6IE9iamVjdFdpdGhNZXRhZGF0YSwgZ2x0ZlByb3A6IElQcm9wZXJ0eSk6IHZvaWQge1xyXG4gICAgICAgIGlmIChnbHRmUHJvcC5leHRyYXMgJiYgT2JqZWN0LmtleXMoZ2x0ZlByb3AuZXh0cmFzKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1ldGFkYXRhID0gKGJhYnlsb25PYmplY3QubWV0YWRhdGEgPSBiYWJ5bG9uT2JqZWN0Lm1ldGFkYXRhIHx8IHt9KTtcclxuICAgICAgICAgICAgY29uc3QgZ2x0ZiA9IChtZXRhZGF0YS5nbHRmID0gbWV0YWRhdGEuZ2x0ZiB8fCB7fSk7XHJcbiAgICAgICAgICAgIGdsdGYuZXh0cmFzID0gZ2x0ZlByb3AuZXh0cmFzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IobG9hZGVyOiBHTFRGTG9hZGVyKSB7XHJcbiAgICAgICAgdGhpcy5fbG9hZGVyID0gbG9hZGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBkaXNwb3NlKCk6IHZvaWQge1xyXG4gICAgICAgICh0aGlzLl9sb2FkZXIgYXMgYW55KSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWROb2RlQXN5bmMoY29udGV4dDogc3RyaW5nLCBub2RlOiBJTm9kZSwgYXNzaWduOiAoYmFieWxvblRyYW5zZm9ybU5vZGU6IFRyYW5zZm9ybU5vZGUpID0+IHZvaWQpOiBOdWxsYWJsZTxQcm9taXNlPFRyYW5zZm9ybU5vZGU+PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRlci5sb2FkTm9kZUFzeW5jKGNvbnRleHQsIG5vZGUsIChiYWJ5bG9uVHJhbnNmb3JtTm9kZSk6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9hc3NpZ25FeHRyYXMoYmFieWxvblRyYW5zZm9ybU5vZGUsIG5vZGUpO1xyXG4gICAgICAgICAgICBhc3NpZ24oYmFieWxvblRyYW5zZm9ybU5vZGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkQ2FtZXJhQXN5bmMoY29udGV4dDogc3RyaW5nLCBjYW1lcmE6IElDYW1lcmEsIGFzc2lnbjogKGJhYnlsb25DYW1lcmE6IENhbWVyYSkgPT4gdm9pZCk6IE51bGxhYmxlPFByb21pc2U8Q2FtZXJhPj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9sb2FkZXIubG9hZENhbWVyYUFzeW5jKGNvbnRleHQsIGNhbWVyYSwgKGJhYnlsb25DYW1lcmEpOiB2b2lkID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fYXNzaWduRXh0cmFzKGJhYnlsb25DYW1lcmEsIGNhbWVyYSk7XHJcbiAgICAgICAgICAgIGFzc2lnbihiYWJ5bG9uQ2FtZXJhKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY3JlYXRlTWF0ZXJpYWwoY29udGV4dDogc3RyaW5nLCBtYXRlcmlhbDogSU1hdGVyaWFsLCBiYWJ5bG9uRHJhd01vZGU6IG51bWJlcik6IE51bGxhYmxlPE1hdGVyaWFsPiB7XHJcbiAgICAgICAgY29uc3QgYmFieWxvbk1hdGVyaWFsID0gdGhpcy5fbG9hZGVyLmNyZWF0ZU1hdGVyaWFsKGNvbnRleHQsIG1hdGVyaWFsLCBiYWJ5bG9uRHJhd01vZGUpO1xyXG4gICAgICAgIHRoaXMuX2Fzc2lnbkV4dHJhcyhiYWJ5bG9uTWF0ZXJpYWwsIG1hdGVyaWFsKTtcclxuICAgICAgICByZXR1cm4gYmFieWxvbk1hdGVyaWFsO1xyXG4gICAgfVxyXG59XHJcblxyXG5HTFRGTG9hZGVyLlJlZ2lzdGVyRXh0ZW5zaW9uKE5BTUUsIChsb2FkZXIpOiBJR0xURkxvYWRlckV4dGVuc2lvbiA9PiBuZXcgRXh0cmFzQXNNZXRhZGF0YShsb2FkZXIpKTtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uICovXHJcblxyXG5pbXBvcnQgeyBBbmltYXRpb24gfSBmcm9tIFwiY29yZS9BbmltYXRpb25zL2FuaW1hdGlvblwiO1xyXG5pbXBvcnQgdHlwZSB7IElDYW1lcmEsIElLSFJMaWdodHNQdW5jdHVhbF9MaWdodCwgSU1hdGVyaWFsIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJJbnRlcmZhY2VzXCI7XHJcbmltcG9ydCB0eXBlIHsgSUFuaW1hdGFibGUgfSBmcm9tIFwiY29yZS9BbmltYXRpb25zL2FuaW1hdGFibGUuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IEFuaW1hdGlvblByb3BlcnR5SW5mbywgbm9kZUFuaW1hdGlvbkRhdGEgfSBmcm9tIFwiLi4vZ2xURkxvYWRlckFuaW1hdGlvblwiO1xyXG5pbXBvcnQgeyBDb2xvcjMgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLmNvbG9yXCI7XHJcblxyXG5mdW5jdGlvbiBnZXRDb2xvcjMoX3RhcmdldDogYW55LCBzb3VyY2U6IEZsb2F0MzJBcnJheSwgb2Zmc2V0OiBudW1iZXIsIHNjYWxlOiBudW1iZXIpOiBDb2xvcjMge1xyXG4gICAgcmV0dXJuIENvbG9yMy5Gcm9tQXJyYXkoc291cmNlLCBvZmZzZXQpLnNjYWxlKHNjYWxlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0QWxwaGEoX3RhcmdldDogYW55LCBzb3VyY2U6IEZsb2F0MzJBcnJheSwgb2Zmc2V0OiBudW1iZXIsIHNjYWxlOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHNvdXJjZVtvZmZzZXQgKyAzXSAqIHNjYWxlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRGbG9hdChfdGFyZ2V0OiBhbnksIHNvdXJjZTogRmxvYXQzMkFycmF5LCBvZmZzZXQ6IG51bWJlciwgc2NhbGU6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gc291cmNlW29mZnNldF0gKiBzY2FsZTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0TWludXNGbG9hdChfdGFyZ2V0OiBhbnksIHNvdXJjZTogRmxvYXQzMkFycmF5LCBvZmZzZXQ6IG51bWJlciwgc2NhbGU6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gLXNvdXJjZVtvZmZzZXRdICogc2NhbGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE5leHRGbG9hdChfdGFyZ2V0OiBhbnksIHNvdXJjZTogRmxvYXQzMkFycmF5LCBvZmZzZXQ6IG51bWJlciwgc2NhbGU6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gc291cmNlW29mZnNldCArIDFdICogc2NhbGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEZsb2F0QnkyKF90YXJnZXQ6IGFueSwgc291cmNlOiBGbG9hdDMyQXJyYXksIG9mZnNldDogbnVtYmVyLCBzY2FsZTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBzb3VyY2Vbb2Zmc2V0XSAqIHNjYWxlICogMjtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VGV4dHVyZVRyYW5zZm9ybVRyZWUodGV4dHVyZU5hbWU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzY2FsZTogW1xyXG4gICAgICAgICAgICBuZXcgTWF0ZXJpYWxBbmltYXRpb25Qcm9wZXJ0eUluZm8oQW5pbWF0aW9uLkFOSU1BVElPTlRZUEVfRkxPQVQsIGAke3RleHR1cmVOYW1lfS51U2NhbGVgLCBnZXRGbG9hdCwgKCkgPT4gMiksXHJcbiAgICAgICAgICAgIG5ldyBNYXRlcmlhbEFuaW1hdGlvblByb3BlcnR5SW5mbyhBbmltYXRpb24uQU5JTUFUSU9OVFlQRV9GTE9BVCwgYCR7dGV4dHVyZU5hbWV9LnZTY2FsZWAsIGdldE5leHRGbG9hdCwgKCkgPT4gMiksXHJcbiAgICAgICAgXSxcclxuICAgICAgICBvZmZzZXQ6IFtcclxuICAgICAgICAgICAgbmV3IE1hdGVyaWFsQW5pbWF0aW9uUHJvcGVydHlJbmZvKEFuaW1hdGlvbi5BTklNQVRJT05UWVBFX0ZMT0FULCBgJHt0ZXh0dXJlTmFtZX0udU9mZnNldGAsIGdldEZsb2F0LCAoKSA9PiAyKSxcclxuICAgICAgICAgICAgbmV3IE1hdGVyaWFsQW5pbWF0aW9uUHJvcGVydHlJbmZvKEFuaW1hdGlvbi5BTklNQVRJT05UWVBFX0ZMT0FULCBgJHt0ZXh0dXJlTmFtZX0udk9mZnNldGAsIGdldE5leHRGbG9hdCwgKCkgPT4gMiksXHJcbiAgICAgICAgXSxcclxuICAgICAgICByb3RhdGlvbjogW25ldyBNYXRlcmlhbEFuaW1hdGlvblByb3BlcnR5SW5mbyhBbmltYXRpb24uQU5JTUFUSU9OVFlQRV9GTE9BVCwgYCR7dGV4dHVyZU5hbWV9LndBbmdgLCBnZXRNaW51c0Zsb2F0LCAoKSA9PiAxKV0sXHJcbiAgICB9O1xyXG59XHJcblxyXG5jbGFzcyBDYW1lcmFBbmltYXRpb25Qcm9wZXJ0eUluZm8gZXh0ZW5kcyBBbmltYXRpb25Qcm9wZXJ0eUluZm8ge1xyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGJ1aWxkQW5pbWF0aW9ucyh0YXJnZXQ6IElDYW1lcmEsIG5hbWU6IHN0cmluZywgZnBzOiBudW1iZXIsIGtleXM6IGFueVtdLCBjYWxsYmFjazogKGJhYnlsb25BbmltYXRhYmxlOiBJQW5pbWF0YWJsZSwgYmFieWxvbkFuaW1hdGlvbjogQW5pbWF0aW9uKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgY2FsbGJhY2sodGFyZ2V0Ll9iYWJ5bG9uQ2FtZXJhISwgdGhpcy5fYnVpbGRBbmltYXRpb24obmFtZSwgZnBzLCBrZXlzKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIE1hdGVyaWFsQW5pbWF0aW9uUHJvcGVydHlJbmZvIGV4dGVuZHMgQW5pbWF0aW9uUHJvcGVydHlJbmZvIHtcclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBidWlsZEFuaW1hdGlvbnModGFyZ2V0OiBJTWF0ZXJpYWwsIG5hbWU6IHN0cmluZywgZnBzOiBudW1iZXIsIGtleXM6IGFueVtdLCBjYWxsYmFjazogKGJhYnlsb25BbmltYXRhYmxlOiBJQW5pbWF0YWJsZSwgYmFieWxvbkFuaW1hdGlvbjogQW5pbWF0aW9uKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChjb25zdCBmaWxsTW9kZSBpbiB0YXJnZXQuX2RhdGEhKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKHRhcmdldC5fZGF0YSFbZmlsbE1vZGVdLmJhYnlsb25NYXRlcmlhbCwgdGhpcy5fYnVpbGRBbmltYXRpb24obmFtZSwgZnBzLCBrZXlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBMaWdodEFuaW1hdGlvblByb3BlcnR5SW5mbyBleHRlbmRzIEFuaW1hdGlvblByb3BlcnR5SW5mbyB7XHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgYnVpbGRBbmltYXRpb25zKFxyXG4gICAgICAgIHRhcmdldDogSUtIUkxpZ2h0c1B1bmN0dWFsX0xpZ2h0LFxyXG4gICAgICAgIG5hbWU6IHN0cmluZyxcclxuICAgICAgICBmcHM6IG51bWJlcixcclxuICAgICAgICBrZXlzOiBhbnlbXSxcclxuICAgICAgICBjYWxsYmFjazogKGJhYnlsb25BbmltYXRhYmxlOiBJQW5pbWF0YWJsZSwgYmFieWxvbkFuaW1hdGlvbjogQW5pbWF0aW9uKSA9PiB2b2lkXHJcbiAgICApOiB2b2lkIHtcclxuICAgICAgICBjYWxsYmFjayh0YXJnZXQuX2JhYnlsb25MaWdodCEsIHRoaXMuX2J1aWxkQW5pbWF0aW9uKG5hbWUsIGZwcywga2V5cykpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBub2Rlc1RyZWUgPSB7XHJcbiAgICBfX2FycmF5X186IHtcclxuICAgICAgICBfX3RhcmdldF9fOiB0cnVlLFxyXG4gICAgICAgIC4uLm5vZGVBbmltYXRpb25EYXRhLFxyXG4gICAgfSxcclxufTtcclxuXHJcbmNvbnN0IGNhbWVyYXNUcmVlID0ge1xyXG4gICAgX19hcnJheV9fOiB7XHJcbiAgICAgICAgX190YXJnZXRfXzogdHJ1ZSxcclxuICAgICAgICBvcnRob2dyYXBoaWM6IHtcclxuICAgICAgICAgICAgeG1hZzogW1xyXG4gICAgICAgICAgICAgICAgbmV3IENhbWVyYUFuaW1hdGlvblByb3BlcnR5SW5mbyhBbmltYXRpb24uQU5JTUFUSU9OVFlQRV9GTE9BVCwgXCJvcnRob0xlZnRcIiwgZ2V0TWludXNGbG9hdCwgKCkgPT4gMSksXHJcbiAgICAgICAgICAgICAgICBuZXcgQ2FtZXJhQW5pbWF0aW9uUHJvcGVydHlJbmZvKEFuaW1hdGlvbi5BTklNQVRJT05UWVBFX0ZMT0FULCBcIm9ydGhvUmlnaHRcIiwgZ2V0TmV4dEZsb2F0LCAoKSA9PiAxKSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgeW1hZzogW1xyXG4gICAgICAgICAgICAgICAgbmV3IENhbWVyYUFuaW1hdGlvblByb3BlcnR5SW5mbyhBbmltYXRpb24uQU5JTUFUSU9OVFlQRV9GTE9BVCwgXCJvcnRob0JvdHRvbVwiLCBnZXRNaW51c0Zsb2F0LCAoKSA9PiAxKSxcclxuICAgICAgICAgICAgICAgIG5ldyBDYW1lcmFBbmltYXRpb25Qcm9wZXJ0eUluZm8oQW5pbWF0aW9uLkFOSU1BVElPTlRZUEVfRkxPQVQsIFwib3J0aG9Ub3BcIiwgZ2V0TmV4dEZsb2F0LCAoKSA9PiAxKSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgemZhcjogW25ldyBDYW1lcmFBbmltYXRpb25Qcm9wZXJ0eUluZm8oQW5pbWF0aW9uLkFOSU1BVElPTlRZUEVfRkxPQVQsIFwibWF4WlwiLCBnZXRGbG9hdCwgKCkgPT4gMSldLFxyXG4gICAgICAgICAgICB6bmVhcjogW25ldyBDYW1lcmFBbmltYXRpb25Qcm9wZXJ0eUluZm8oQW5pbWF0aW9uLkFOSU1BVElPTlRZUEVfRkxPQVQsIFwibWluWlwiLCBnZXRGbG9hdCwgKCkgPT4gMSldLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGVyc3BlY3RpdmU6IHtcclxuICAgICAgICAgICAgeWZvdjogW25ldyBDYW1lcmFBbmltYXRpb25Qcm9wZXJ0eUluZm8oQW5pbWF0aW9uLkFOSU1BVElPTlRZUEVfRkxPQVQsIFwiZm92XCIsIGdldEZsb2F0LCAoKSA9PiAxKV0sXHJcbiAgICAgICAgICAgIHpmYXI6IFtuZXcgQ2FtZXJhQW5pbWF0aW9uUHJvcGVydHlJbmZvKEFuaW1hdGlvbi5BTklNQVRJT05UWVBFX0ZMT0FULCBcIm1heFpcIiwgZ2V0RmxvYXQsICgpID0+IDEpXSxcclxuICAgICAgICAgICAgem5lYXI6IFtuZXcgQ2FtZXJhQW5pbWF0aW9uUHJvcGVydHlJbmZvKEFuaW1hdGlvbi5BTklNQVRJT05UWVBFX0ZMT0FULCBcIm1pblpcIiwgZ2V0RmxvYXQsICgpID0+IDEpXSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufTtcclxuXHJcbmNvbnN0IG1hdGVyaWFsc1RyZWUgPSB7XHJcbiAgICBfX2FycmF5X186IHtcclxuICAgICAgICBfX3RhcmdldF9fOiB0cnVlLFxyXG4gICAgICAgIHBick1ldGFsbGljUm91Z2huZXNzOiB7XHJcbiAgICAgICAgICAgIGJhc2VDb2xvckZhY3RvcjogW1xyXG4gICAgICAgICAgICAgICAgbmV3IE1hdGVyaWFsQW5pbWF0aW9uUHJvcGVydHlJbmZvKEFuaW1hdGlvbi5BTklNQVRJT05UWVBFX0NPTE9SMywgXCJhbGJlZG9Db2xvclwiLCBnZXRDb2xvcjMsICgpID0+IDQpLFxyXG4gICAgICAgICAgICAgICAgbmV3IE1hdGVyaWFsQW5pbWF0aW9uUHJvcGVydHlJbmZvKEFuaW1hdGlvbi5BTklNQVRJT05UWVBFX0ZMT0FULCBcImFscGhhXCIsIGdldEFscGhhLCAoKSA9PiA0KSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgbWV0YWxsaWNGYWN0b3I6IFtuZXcgTWF0ZXJpYWxBbmltYXRpb25Qcm9wZXJ0eUluZm8oQW5pbWF0aW9uLkFOSU1BVElPTlRZUEVfRkxPQVQsIFwibWV0YWxsaWNcIiwgZ2V0RmxvYXQsICgpID0+IDEpXSxcclxuICAgICAgICAgICAgcm91Z2huZXNzRmFjdG9yOiBbbmV3IE1hdGVyaWFsQW5pbWF0aW9uUHJvcGVydHlJbmZvKEFuaW1hdGlvbi5BTklNQVRJT05UWVBFX0ZMT0FULCBcInJvdWdobmVzc1wiLCBnZXRGbG9hdCwgKCkgPT4gMSldLFxyXG4gICAgICAgICAgICBiYXNlQ29sb3JUZXh0dXJlOiB7XHJcbiAgICAgICAgICAgICAgICBleHRlbnNpb25zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgS0hSX3RleHR1cmVfdHJhbnNmb3JtOiBnZXRUZXh0dXJlVHJhbnNmb3JtVHJlZShcImFsYmVkb1RleHR1cmVcIiksXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW1pc3NpdmVGYWN0b3I6IFtuZXcgTWF0ZXJpYWxBbmltYXRpb25Qcm9wZXJ0eUluZm8oQW5pbWF0aW9uLkFOSU1BVElPTlRZUEVfQ09MT1IzLCBcImVtaXNzaXZlQ29sb3JcIiwgZ2V0Q29sb3IzLCAoKSA9PiAzKV0sXHJcbiAgICAgICAgbm9ybWFsVGV4dHVyZToge1xyXG4gICAgICAgICAgICBzY2FsZTogW25ldyBNYXRlcmlhbEFuaW1hdGlvblByb3BlcnR5SW5mbyhBbmltYXRpb24uQU5JTUFUSU9OVFlQRV9GTE9BVCwgXCJidW1wVGV4dHVyZS5sZXZlbFwiLCBnZXRGbG9hdCwgKCkgPT4gMSldLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb2NjbHVzaW9uVGV4dHVyZToge1xyXG4gICAgICAgICAgICBzdHJlbmd0aDogW25ldyBNYXRlcmlhbEFuaW1hdGlvblByb3BlcnR5SW5mbyhBbmltYXRpb24uQU5JTUFUSU9OVFlQRV9GTE9BVCwgXCJhbWJpZW50VGV4dHVyZVN0cmVuZ3RoXCIsIGdldEZsb2F0LCAoKSA9PiAxKV0sXHJcbiAgICAgICAgICAgIGV4dGVuc2lvbnM6IHtcclxuICAgICAgICAgICAgICAgIEtIUl90ZXh0dXJlX3RyYW5zZm9ybTogZ2V0VGV4dHVyZVRyYW5zZm9ybVRyZWUoXCJhbWJpZW50VGV4dHVyZVwiKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVtaXNzaXZlVGV4dHVyZToge1xyXG4gICAgICAgICAgICBleHRlbnNpb25zOiB7XHJcbiAgICAgICAgICAgICAgICBLSFJfdGV4dHVyZV90cmFuc2Zvcm06IGdldFRleHR1cmVUcmFuc2Zvcm1UcmVlKFwiZW1pc3NpdmVUZXh0dXJlXCIpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXh0ZW5zaW9uczoge1xyXG4gICAgICAgICAgICBLSFJfbWF0ZXJpYWxzX2lvcjoge1xyXG4gICAgICAgICAgICAgICAgaW9yOiBbbmV3IE1hdGVyaWFsQW5pbWF0aW9uUHJvcGVydHlJbmZvKEFuaW1hdGlvbi5BTklNQVRJT05UWVBFX0ZMT0FULCBcImluZGV4T2ZSZWZyYWN0aW9uXCIsIGdldEZsb2F0LCAoKSA9PiAxKV0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIEtIUl9tYXRlcmlhbHNfY2xlYXJjb2F0OiB7XHJcbiAgICAgICAgICAgICAgICBjbGVhcmNvYXRGYWN0b3I6IFtuZXcgTWF0ZXJpYWxBbmltYXRpb25Qcm9wZXJ0eUluZm8oQW5pbWF0aW9uLkFOSU1BVElPTlRZUEVfRkxPQVQsIFwiY2xlYXJDb2F0LmludGVuc2l0eVwiLCBnZXRGbG9hdCwgKCkgPT4gMSldLFxyXG4gICAgICAgICAgICAgICAgY2xlYXJjb2F0Um91Z2huZXNzRmFjdG9yOiBbbmV3IE1hdGVyaWFsQW5pbWF0aW9uUHJvcGVydHlJbmZvKEFuaW1hdGlvbi5BTklNQVRJT05UWVBFX0ZMT0FULCBcImNsZWFyQ29hdC5yb3VnaG5lc3NcIiwgZ2V0RmxvYXQsICgpID0+IDEpXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgS0hSX21hdGVyaWFsc19zaGVlbjoge1xyXG4gICAgICAgICAgICAgICAgc2hlZW5Db2xvckZhY3RvcjogW25ldyBNYXRlcmlhbEFuaW1hdGlvblByb3BlcnR5SW5mbyhBbmltYXRpb24uQU5JTUFUSU9OVFlQRV9DT0xPUjMsIFwic2hlZW4uY29sb3JcIiwgZ2V0Q29sb3IzLCAoKSA9PiAzKV0sXHJcbiAgICAgICAgICAgICAgICBzaGVlblJvdWdobmVzc0ZhY3RvcjogW25ldyBNYXRlcmlhbEFuaW1hdGlvblByb3BlcnR5SW5mbyhBbmltYXRpb24uQU5JTUFUSU9OVFlQRV9GTE9BVCwgXCJzaGVlbi5yb3VnaG5lc3NcIiwgZ2V0RmxvYXQsICgpID0+IDEpXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgS0hSX21hdGVyaWFsc19zcGVjdWxhcjoge1xyXG4gICAgICAgICAgICAgICAgc3BlY3VsYXJGYWN0b3I6IFtuZXcgTWF0ZXJpYWxBbmltYXRpb25Qcm9wZXJ0eUluZm8oQW5pbWF0aW9uLkFOSU1BVElPTlRZUEVfRkxPQVQsIFwibWV0YWxsaWNGMEZhY3RvclwiLCBnZXRGbG9hdCwgKCkgPT4gMSldLFxyXG4gICAgICAgICAgICAgICAgc3BlY3VsYXJDb2xvckZhY3RvcjogW25ldyBNYXRlcmlhbEFuaW1hdGlvblByb3BlcnR5SW5mbyhBbmltYXRpb24uQU5JTUFUSU9OVFlQRV9DT0xPUjMsIFwibWV0YWxsaWNSZWZsZWN0YW5jZUNvbG9yXCIsIGdldENvbG9yMywgKCkgPT4gMyldLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBLSFJfbWF0ZXJpYWxzX2VtaXNzaXZlX3N0cmVuZ3RoOiB7XHJcbiAgICAgICAgICAgICAgICBlbWlzc2l2ZVN0cmVuZ3RoOiBbbmV3IE1hdGVyaWFsQW5pbWF0aW9uUHJvcGVydHlJbmZvKEFuaW1hdGlvbi5BTklNQVRJT05UWVBFX0ZMT0FULCBcImVtaXNzaXZlSW50ZW5zaXR5XCIsIGdldEZsb2F0LCAoKSA9PiAxKV0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIEtIUl9tYXRlcmlhbHNfdHJhbnNtaXNzaW9uOiB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc21pc3Npb25GYWN0b3I6IFtuZXcgTWF0ZXJpYWxBbmltYXRpb25Qcm9wZXJ0eUluZm8oQW5pbWF0aW9uLkFOSU1BVElPTlRZUEVfRkxPQVQsIFwic3ViU3VyZmFjZS5yZWZyYWN0aW9uSW50ZW5zaXR5XCIsIGdldEZsb2F0LCAoKSA9PiAxKV0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIEtIUl9tYXRlcmlhbHNfdm9sdW1lOiB7XHJcbiAgICAgICAgICAgICAgICBhdHRlbnVhdGlvbkNvbG9yOiBbbmV3IE1hdGVyaWFsQW5pbWF0aW9uUHJvcGVydHlJbmZvKEFuaW1hdGlvbi5BTklNQVRJT05UWVBFX0NPTE9SMywgXCJzdWJTdXJmYWNlLnRpbnRDb2xvclwiLCBnZXRDb2xvcjMsICgpID0+IDMpXSxcclxuICAgICAgICAgICAgICAgIGF0dGVudWF0aW9uRGlzdGFuY2U6IFtuZXcgTWF0ZXJpYWxBbmltYXRpb25Qcm9wZXJ0eUluZm8oQW5pbWF0aW9uLkFOSU1BVElPTlRZUEVfRkxPQVQsIFwic3ViU3VyZmFjZS50aW50Q29sb3JBdERpc3RhbmNlXCIsIGdldEZsb2F0LCAoKSA9PiAxKV0sXHJcbiAgICAgICAgICAgICAgICB0aGlja25lc3NGYWN0b3I6IFtuZXcgTWF0ZXJpYWxBbmltYXRpb25Qcm9wZXJ0eUluZm8oQW5pbWF0aW9uLkFOSU1BVElPTlRZUEVfRkxPQVQsIFwic3ViU3VyZmFjZS5tYXhpbXVtVGhpY2tuZXNzXCIsIGdldEZsb2F0LCAoKSA9PiAxKV0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIEtIUl9tYXRlcmlhbHNfaXJpZGVzY2VuY2U6IHtcclxuICAgICAgICAgICAgICAgIGlyaWRlc2NlbmNlRmFjdG9yOiBbbmV3IE1hdGVyaWFsQW5pbWF0aW9uUHJvcGVydHlJbmZvKEFuaW1hdGlvbi5BTklNQVRJT05UWVBFX0ZMT0FULCBcImlyaWRlc2NlbmNlLmludGVuc2l0eVwiLCBnZXRGbG9hdCwgKCkgPT4gMSldLFxyXG4gICAgICAgICAgICAgICAgaXJpZGVzY2VuY2VJb3I6IFtuZXcgTWF0ZXJpYWxBbmltYXRpb25Qcm9wZXJ0eUluZm8oQW5pbWF0aW9uLkFOSU1BVElPTlRZUEVfRkxPQVQsIFwiaXJpZGVzY2VuY2UuaW5kZXhPZlJlZnJhY3Rpb25cIiwgZ2V0RmxvYXQsICgpID0+IDEpXSxcclxuICAgICAgICAgICAgICAgIGlyaWRlc2NlbmNlVGhpY2tuZXNzTWluaW11bTogW25ldyBNYXRlcmlhbEFuaW1hdGlvblByb3BlcnR5SW5mbyhBbmltYXRpb24uQU5JTUFUSU9OVFlQRV9GTE9BVCwgXCJpcmlkZXNjZW5jZS5taW5pbXVtVGhpY2tuZXNzXCIsIGdldEZsb2F0LCAoKSA9PiAxKV0sXHJcbiAgICAgICAgICAgICAgICBpcmlkZXNjZW5jZVRoaWNrbmVzc01heGltdW06IFtuZXcgTWF0ZXJpYWxBbmltYXRpb25Qcm9wZXJ0eUluZm8oQW5pbWF0aW9uLkFOSU1BVElPTlRZUEVfRkxPQVQsIFwiaXJpZGVzY2VuY2UubWF4aW11bVRoaWNrbmVzc1wiLCBnZXRGbG9hdCwgKCkgPT4gMSldLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBLSFJfbWF0ZXJpYWxzX2FuaXNvdHJvcHk6IHtcclxuICAgICAgICAgICAgICAgIGFuaXNvdHJvcHlTdHJlbmd0aDogW25ldyBNYXRlcmlhbEFuaW1hdGlvblByb3BlcnR5SW5mbyhBbmltYXRpb24uQU5JTUFUSU9OVFlQRV9GTE9BVCwgXCJhbmlzb3Ryb3B5LmludGVuc2l0eVwiLCBnZXRGbG9hdCwgKCkgPT4gMSldLFxyXG4gICAgICAgICAgICAgICAgYW5pc290cm9weVJvdGF0aW9uOiBbbmV3IE1hdGVyaWFsQW5pbWF0aW9uUHJvcGVydHlJbmZvKEFuaW1hdGlvbi5BTklNQVRJT05UWVBFX0ZMT0FULCBcImFuaXNvdHJvcHkuYW5nbGVcIiwgZ2V0RmxvYXQsICgpID0+IDEpXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufTtcclxuXHJcbmNvbnN0IGV4dGVuc2lvbnNUcmVlID0ge1xyXG4gICAgS0hSX2xpZ2h0c19wdW5jdHVhbDoge1xyXG4gICAgICAgIGxpZ2h0czoge1xyXG4gICAgICAgICAgICBfX2FycmF5X186IHtcclxuICAgICAgICAgICAgICAgIF9fdGFyZ2V0X186IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogW25ldyBMaWdodEFuaW1hdGlvblByb3BlcnR5SW5mbyhBbmltYXRpb24uQU5JTUFUSU9OVFlQRV9DT0xPUjMsIFwiZGlmZnVzZVwiLCBnZXRDb2xvcjMsICgpID0+IDMpXSxcclxuICAgICAgICAgICAgICAgIGludGVuc2l0eTogW25ldyBMaWdodEFuaW1hdGlvblByb3BlcnR5SW5mbyhBbmltYXRpb24uQU5JTUFUSU9OVFlQRV9GTE9BVCwgXCJpbnRlbnNpdHlcIiwgZ2V0RmxvYXQsICgpID0+IDEpXSxcclxuICAgICAgICAgICAgICAgIHJhbmdlOiBbbmV3IExpZ2h0QW5pbWF0aW9uUHJvcGVydHlJbmZvKEFuaW1hdGlvbi5BTklNQVRJT05UWVBFX0ZMT0FULCBcInJhbmdlXCIsIGdldEZsb2F0LCAoKSA9PiAxKV0sXHJcbiAgICAgICAgICAgICAgICBzcG90OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5uZXJDb25lQW5nbGU6IFtuZXcgTGlnaHRBbmltYXRpb25Qcm9wZXJ0eUluZm8oQW5pbWF0aW9uLkFOSU1BVElPTlRZUEVfRkxPQVQsIFwiaW5uZXJBbmdsZVwiLCBnZXRGbG9hdEJ5MiwgKCkgPT4gMSldLFxyXG4gICAgICAgICAgICAgICAgICAgIG91dGVyQ29uZUFuZ2xlOiBbbmV3IExpZ2h0QW5pbWF0aW9uUHJvcGVydHlJbmZvKEFuaW1hdGlvbi5BTklNQVRJT05UWVBFX0ZMT0FULCBcImFuZ2xlXCIsIGdldEZsb2F0QnkyLCAoKSA9PiAxKV0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59O1xyXG5cclxuLyoqIEBpbnRlcm5hbCAqL1xyXG5leHBvcnQgY29uc3QgYW5pbWF0aW9uUG9pbnRlclRyZWUgPSB7XHJcbiAgICBub2Rlczogbm9kZXNUcmVlLFxyXG4gICAgbWF0ZXJpYWxzOiBtYXRlcmlhbHNUcmVlLFxyXG4gICAgY2FtZXJhczogY2FtZXJhc1RyZWUsXHJcbiAgICBleHRlbnNpb25zOiBleHRlbnNpb25zVHJlZSxcclxufTtcclxuIiwiaW1wb3J0IHR5cGUgeyBJR0xURkxvYWRlckV4dGVuc2lvbiB9IGZyb20gXCIuLi9nbFRGTG9hZGVyRXh0ZW5zaW9uXCI7XHJcbmltcG9ydCB7IEdMVEZMb2FkZXIgfSBmcm9tIFwiLi4vZ2xURkxvYWRlclwiO1xyXG5pbXBvcnQgdHlwZSB7IElBbmltYXRpb25UYXJnZXRJbmZvIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCJjb3JlL3R5cGVzXCI7XHJcbmltcG9ydCB0eXBlIHsgQW5pbWF0aW9uIH0gZnJvbSBcImNvcmUvQW5pbWF0aW9ucy9hbmltYXRpb25cIjtcclxuaW1wb3J0IHR5cGUgeyBJQW5pbWF0YWJsZSB9IGZyb20gXCJjb3JlL0FuaW1hdGlvbnMvYW5pbWF0YWJsZS5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHR5cGUgeyBJQW5pbWF0aW9uLCBJQW5pbWF0aW9uQ2hhbm5lbCB9IGZyb20gXCIuLi9nbFRGTG9hZGVySW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQgdHlwZSB7IElLSFJBbmltYXRpb25Qb2ludGVyIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSBcImNvcmUvTWlzYy9sb2dnZXJcIjtcclxuaW1wb3J0IHsgYW5pbWF0aW9uUG9pbnRlclRyZWUgfSBmcm9tIFwiLi9LSFJfYW5pbWF0aW9uX3BvaW50ZXIuZGF0YVwiO1xyXG5cclxuY29uc3QgTkFNRSA9IFwiS0hSX2FuaW1hdGlvbl9wb2ludGVyXCI7XHJcblxyXG4vKipcclxuICogW1NwZWNpZmljYXRpb24gUFJdKGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9wdWxsLzIxNDcpXHJcbiAqICEhISBFeHBlcmltZW50YWwgRXh0ZW5zaW9uIFN1YmplY3QgdG8gQ2hhbmdlcyAhISFcclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGNsYXNzIEtIUl9hbmltYXRpb25fcG9pbnRlciBpbXBsZW1lbnRzIElHTFRGTG9hZGVyRXh0ZW5zaW9uIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIG5hbWUgb2YgdGhpcyBleHRlbnNpb24uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lID0gTkFNRTtcclxuXHJcbiAgICBwcml2YXRlIF9sb2FkZXI6IEdMVEZMb2FkZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobG9hZGVyOiBHTFRGTG9hZGVyKSB7XHJcbiAgICAgICAgdGhpcy5fbG9hZGVyID0gbG9hZGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIGVuYWJsZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgZW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbG9hZGVyLmlzRXh0ZW5zaW9uVXNlZChOQU1FKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHtcclxuICAgICAgICAodGhpcy5fbG9hZGVyIGFzIGFueSkgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTG9hZHMgYSBnbFRGIGFuaW1hdGlvbiBjaGFubmVsLlxyXG4gICAgICogQHBhcmFtIGNvbnRleHQgVGhlIGNvbnRleHQgd2hlbiBsb2FkaW5nIHRoZSBhc3NldFxyXG4gICAgICogQHBhcmFtIGFuaW1hdGlvbkNvbnRleHQgVGhlIGNvbnRleHQgb2YgdGhlIGFuaW1hdGlvbiB3aGVuIGxvYWRpbmcgdGhlIGFzc2V0XHJcbiAgICAgKiBAcGFyYW0gYW5pbWF0aW9uIFRoZSBnbFRGIGFuaW1hdGlvbiBwcm9wZXJ0eVxyXG4gICAgICogQHBhcmFtIGNoYW5uZWwgVGhlIGdsVEYgYW5pbWF0aW9uIGNoYW5uZWwgcHJvcGVydHlcclxuICAgICAqIEBwYXJhbSBvbkxvYWQgQ2FsbGVkIGZvciBlYWNoIGFuaW1hdGlvbiBsb2FkZWRcclxuICAgICAqIEByZXR1cm5zIEEgdm9pZCBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgbG9hZCBpcyBjb21wbGV0ZSBvciBudWxsIGlmIG5vdCBoYW5kbGVkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfbG9hZEFuaW1hdGlvbkNoYW5uZWxBc3luYyhcclxuICAgICAgICBjb250ZXh0OiBzdHJpbmcsXHJcbiAgICAgICAgYW5pbWF0aW9uQ29udGV4dDogc3RyaW5nLFxyXG4gICAgICAgIGFuaW1hdGlvbjogSUFuaW1hdGlvbixcclxuICAgICAgICBjaGFubmVsOiBJQW5pbWF0aW9uQ2hhbm5lbCxcclxuICAgICAgICBvbkxvYWQ6IChiYWJ5bG9uQW5pbWF0YWJsZTogSUFuaW1hdGFibGUsIGJhYnlsb25BbmltYXRpb246IEFuaW1hdGlvbikgPT4gdm9pZFxyXG4gICAgKTogTnVsbGFibGU8UHJvbWlzZTx2b2lkPj4ge1xyXG4gICAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IGNoYW5uZWwudGFyZ2V0LmV4dGVuc2lvbnM/LktIUl9hbmltYXRpb25fcG9pbnRlciBhcyBJS0hSQW5pbWF0aW9uUG9pbnRlcjtcclxuICAgICAgICBpZiAoIWV4dGVuc2lvbikge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjaGFubmVsLnRhcmdldC5wYXRoICE9PSBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aC5QT0lOVEVSKSB7XHJcbiAgICAgICAgICAgIExvZ2dlci5XYXJuKGAke2NvbnRleHR9L3RhcmdldC9wYXRoOiBWYWx1ZSAoJHtjaGFubmVsLnRhcmdldC5wYXRofSkgbXVzdCBiZSAoJHtBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aC5QT0lOVEVSfSkgd2hlbiB1c2luZyB0aGUgJHt0aGlzLm5hbWV9IGV4dGVuc2lvbmApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNoYW5uZWwudGFyZ2V0Lm5vZGUgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIExvZ2dlci5XYXJuKGAke2NvbnRleHR9L3RhcmdldC9ub2RlOiBWYWx1ZSAoJHtjaGFubmVsLnRhcmdldC5ub2RlfSkgbXVzdCBub3QgYmUgcHJlc2VudCB3aGVuIHVzaW5nIHRoZSAke3RoaXMubmFtZX0gZXh0ZW5zaW9uYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBleHRlbnNpb25Db250ZXh0ID0gYCR7Y29udGV4dH0vZXh0ZW5zaW9ucy8ke3RoaXMubmFtZX1gO1xyXG5cclxuICAgICAgICBjb25zdCBwb2ludGVyID0gZXh0ZW5zaW9uLnBvaW50ZXI7XHJcbiAgICAgICAgaWYgKCFwb2ludGVyKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtleHRlbnNpb25Db250ZXh0fTogUG9pbnRlciBpcyBtaXNzaW5nYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB0YXJnZXRJbmZvID0gdGhpcy5fcGFyc2VBbmltYXRpb25Qb2ludGVyKGAke2V4dGVuc2lvbkNvbnRleHR9L3BvaW50ZXJgLCBwb2ludGVyKTtcclxuICAgICAgICBpZiAoIXRhcmdldEluZm8pIHtcclxuICAgICAgICAgICAgTG9nZ2VyLldhcm4oYCR7ZXh0ZW5zaW9uQ29udGV4dH0vcG9pbnRlcjogSW52YWxpZCBwb2ludGVyICgke3BvaW50ZXJ9KSBza2lwcGVkYCk7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRlci5fbG9hZEFuaW1hdGlvbkNoYW5uZWxGcm9tVGFyZ2V0SW5mb0FzeW5jKGNvbnRleHQsIGFuaW1hdGlvbkNvbnRleHQsIGFuaW1hdGlvbiwgY2hhbm5lbCwgdGFyZ2V0SW5mbywgb25Mb2FkKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBwb2ludGVyIHN0cmluZyBpcyByZXByZXNlbnRlZCBieSBhIFtKU09OIHBvaW50ZXJdKGh0dHBzOi8vZGF0YXRyYWNrZXIuaWV0Zi5vcmcvZG9jL2h0bWwvcmZjNjkwMSkuXHJcbiAgICAgKiA8YW5pbWF0aW9uUG9pbnRlcj4gOj0gLzxyb290Tm9kZT4vPGFzc2V0SW5kZXg+Lzxwcm9wZXJ0eVBhdGg+XHJcbiAgICAgKiA8cm9vdE5vZGU+IDo9IFwibm9kZXNcIiB8IFwibWF0ZXJpYWxzXCIgfCBcIm1lc2hlc1wiIHwgXCJjYW1lcmFzXCIgfCBcImV4dGVuc2lvbnNcIlxyXG4gICAgICogPGFzc2V0SW5kZXg+IDo9IDxkaWdpdD4gfCA8bmFtZT5cclxuICAgICAqIDxwcm9wZXJ0eVBhdGg+IDo9IDxleHRlbnNpb25QYXRoPiB8IDxzdGFuZGFyZFBhdGg+XHJcbiAgICAgKiA8ZXh0ZW5zaW9uUGF0aD4gOj0gXCJleHRlbnNpb25zXCIvPG5hbWU+LzxzdGFuZGFyZFBhdGg+XHJcbiAgICAgKiA8c3RhbmRhcmRQYXRoPiA6PSA8bmFtZT4gfCA8bmFtZT4vPHN0YW5kYXJkUGF0aD5cclxuICAgICAqIDxuYW1lPiA6PSBXK1xyXG4gICAgICogPGRpZ2l0PiA6PSBEK1xyXG4gICAgICpcclxuICAgICAqIEV4YW1wbGVzOlxyXG4gICAgICogIC0gXCIvbm9kZXMvMC9yb3RhdGlvblwiXHJcbiAgICAgKiAgLSBcIi9tYXRlcmlhbHMvMi9lbWlzc2l2ZUZhY3RvclwiXHJcbiAgICAgKiAgLSBcIi9tYXRlcmlhbHMvMi9wYnJNZXRhbGxpY1JvdWdobmVzcy9iYXNlQ29sb3JGYWN0b3JcIlxyXG4gICAgICogIC0gXCIvbWF0ZXJpYWxzLzIvZXh0ZW5zaW9ucy9LSFJfbWF0ZXJpYWxzX2VtaXNzaXZlX3N0cmVuZ3RoL2VtaXNzaXZlU3RyZW5ndGhcIlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9wYXJzZUFuaW1hdGlvblBvaW50ZXIoY29udGV4dDogc3RyaW5nLCBwb2ludGVyOiBzdHJpbmcpOiBOdWxsYWJsZTxJQW5pbWF0aW9uVGFyZ2V0SW5mbz4ge1xyXG4gICAgICAgIGlmICghcG9pbnRlci5zdGFydHNXaXRoKFwiL1wiKSkge1xyXG4gICAgICAgICAgICBMb2dnZXIuV2FybihgJHtjb250ZXh0fTogVmFsdWUgKCR7cG9pbnRlcn0pIG11c3Qgc3RhcnQgd2l0aCBhIHNsYXNoYCk7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcGFydHMgPSBwb2ludGVyLnNwbGl0KFwiL1wiKTtcclxuXHJcbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBmaXJzdCBwYXJ0IHNpbmNlIGl0IHdpbGwgYmUgZW1wdHkgc3RyaW5nIGFzIHBvaW50ZXJzIG11c3Qgc3RhcnQgd2l0aCBhIHNsYXNoLlxyXG4gICAgICAgIHBhcnRzLnNoaWZ0KCk7XHJcblxyXG4gICAgICAgIGxldCBub2RlOiBhbnkgPSBhbmltYXRpb25Qb2ludGVyVHJlZTtcclxuICAgICAgICBsZXQgZ2x0ZkN1cnJlbnROb2RlOiBhbnkgPSB0aGlzLl9sb2FkZXIuZ2x0ZjtcclxuICAgICAgICBsZXQgZ2x0ZlRhcmdldE5vZGU6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgICAgICBmb3IgKGNvbnN0IHBhcnQgb2YgcGFydHMpIHtcclxuICAgICAgICAgICAgaWYgKG5vZGUuX19hcnJheV9fKSB7XHJcbiAgICAgICAgICAgICAgICBub2RlID0gbm9kZS5fX2FycmF5X187XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBub2RlID0gbm9kZVtwYXJ0XTtcclxuICAgICAgICAgICAgICAgIGlmICghbm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBnbHRmQ3VycmVudE5vZGUgPSBnbHRmQ3VycmVudE5vZGUgJiYgZ2x0ZkN1cnJlbnROb2RlW3BhcnRdO1xyXG5cclxuICAgICAgICAgICAgaWYgKG5vZGUuX190YXJnZXRfXykge1xyXG4gICAgICAgICAgICAgICAgZ2x0ZlRhcmdldE5vZGUgPSBnbHRmQ3VycmVudE5vZGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghZ2x0ZlRhcmdldE5vZGUgfHwgIUFycmF5LmlzQXJyYXkobm9kZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0YXJnZXQ6IGdsdGZUYXJnZXROb2RlLFxyXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiBub2RlLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbkdMVEZMb2FkZXIuUmVnaXN0ZXJFeHRlbnNpb24oTkFNRSwgKGxvYWRlcikgPT4gbmV3IEtIUl9hbmltYXRpb25fcG9pbnRlcihsb2FkZXIpKTtcclxuIiwiaW1wb3J0IHsgRHJhY29Db21wcmVzc2lvbiB9IGZyb20gXCJjb3JlL01lc2hlcy9Db21wcmVzc2lvbi9kcmFjb0NvbXByZXNzaW9uXCI7XHJcbmltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xyXG5pbXBvcnQgeyBWZXJ0ZXhCdWZmZXIgfSBmcm9tIFwiY29yZS9CdWZmZXJzL2J1ZmZlclwiO1xyXG5pbXBvcnQgdHlwZSB7IEdlb21ldHJ5IH0gZnJvbSBcImNvcmUvTWVzaGVzL2dlb21ldHJ5XCI7XHJcbmltcG9ydCB0eXBlIHsgTWVzaCB9IGZyb20gXCJjb3JlL01lc2hlcy9tZXNoXCI7XHJcblxyXG5pbXBvcnQgeyBNZXNoUHJpbWl0aXZlTW9kZSB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHR5cGUgeyBJS0hSRHJhY29NZXNoQ29tcHJlc3Npb24gfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB0eXBlIHsgSU1lc2hQcmltaXRpdmUsIElCdWZmZXJWaWV3IH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJJbnRlcmZhY2VzXCI7XHJcbmltcG9ydCB0eXBlIHsgSUdMVEZMb2FkZXJFeHRlbnNpb24gfSBmcm9tIFwiLi4vZ2xURkxvYWRlckV4dGVuc2lvblwiO1xyXG5pbXBvcnQgeyBHTFRGTG9hZGVyLCBBcnJheUl0ZW0gfSBmcm9tIFwiLi4vZ2xURkxvYWRlclwiO1xyXG5cclxuY29uc3QgTkFNRSA9IFwiS0hSX2RyYWNvX21lc2hfY29tcHJlc3Npb25cIjtcclxuXHJcbmludGVyZmFjZSBJQnVmZmVyVmlld0RyYWNvIGV4dGVuZHMgSUJ1ZmZlclZpZXcge1xyXG4gICAgX2RyYWNvQmFieWxvbkdlb21ldHJ5PzogUHJvbWlzZTxHZW9tZXRyeT47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBbU3BlY2lmaWNhdGlvbl0oaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFpbi9leHRlbnNpb25zLzIuMC9LaHJvbm9zL0tIUl9kcmFjb19tZXNoX2NvbXByZXNzaW9uL1JFQURNRS5tZClcclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGNsYXNzIEtIUl9kcmFjb19tZXNoX2NvbXByZXNzaW9uIGltcGxlbWVudHMgSUdMVEZMb2FkZXJFeHRlbnNpb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGlzIGV4dGVuc2lvbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBOQU1FO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGRyYWNvIGNvbXByZXNzaW9uIHVzZWQgdG8gZGVjb2RlIHZlcnRleCBkYXRhIG9yIERyYWNvQ29tcHJlc3Npb24uRGVmYXVsdCBpZiBub3QgZGVmaW5lZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZHJhY29Db21wcmVzc2lvbj86IERyYWNvQ29tcHJlc3Npb247XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgZW5hYmxlZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGVuYWJsZWQ6IGJvb2xlYW47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIHdoZXRoZXIgdG8gdXNlIHRoZSBub3JtYWxpemVkIGZsYWcgZnJvbSB0aGUgZ2xURiBhY2Nlc3NvciBpbnN0ZWFkIG9mIHRoZSBEcmFjbyBkYXRhLiBEZWZhdWx0cyB0byB0cnVlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdXNlTm9ybWFsaXplZEZsYWdGcm9tQWNjZXNzb3IgPSB0cnVlO1xyXG5cclxuICAgIHByaXZhdGUgX2xvYWRlcjogR0xURkxvYWRlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihsb2FkZXI6IEdMVEZMb2FkZXIpIHtcclxuICAgICAgICB0aGlzLl9sb2FkZXIgPSBsb2FkZXI7XHJcbiAgICAgICAgdGhpcy5lbmFibGVkID0gRHJhY29Db21wcmVzc2lvbi5EZWNvZGVyQXZhaWxhYmxlICYmIHRoaXMuX2xvYWRlci5pc0V4dGVuc2lvblVzZWQoTkFNRSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGRpc3Bvc2UoKTogdm9pZCB7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuZHJhY29Db21wcmVzc2lvbjtcclxuICAgICAgICAodGhpcy5fbG9hZGVyIGFzIGFueSkgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfbG9hZFZlcnRleERhdGFBc3luYyhjb250ZXh0OiBzdHJpbmcsIHByaW1pdGl2ZTogSU1lc2hQcmltaXRpdmUsIGJhYnlsb25NZXNoOiBNZXNoKTogTnVsbGFibGU8UHJvbWlzZTxHZW9tZXRyeT4+IHtcclxuICAgICAgICByZXR1cm4gR0xURkxvYWRlci5Mb2FkRXh0ZW5zaW9uQXN5bmM8SUtIUkRyYWNvTWVzaENvbXByZXNzaW9uLCBHZW9tZXRyeT4oY29udGV4dCwgcHJpbWl0aXZlLCB0aGlzLm5hbWUsIChleHRlbnNpb25Db250ZXh0LCBleHRlbnNpb24pID0+IHtcclxuICAgICAgICAgICAgaWYgKHByaW1pdGl2ZS5tb2RlICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHByaW1pdGl2ZS5tb2RlICE9PSBNZXNoUHJpbWl0aXZlTW9kZS5UUklBTkdMRV9TVFJJUCAmJiBwcmltaXRpdmUubW9kZSAhPT0gTWVzaFByaW1pdGl2ZU1vZGUuVFJJQU5HTEVTKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2NvbnRleHR9OiBVbnN1cHBvcnRlZCBtb2RlICR7cHJpbWl0aXZlLm1vZGV9YCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogaGFuZGxlIHRyaWFuZ2xlIHN0cmlwc1xyXG4gICAgICAgICAgICAgICAgaWYgKHByaW1pdGl2ZS5tb2RlID09PSBNZXNoUHJpbWl0aXZlTW9kZS5UUklBTkdMRV9TVFJJUCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtjb250ZXh0fTogTW9kZSAke3ByaW1pdGl2ZS5tb2RlfSBpcyBub3QgY3VycmVudGx5IHN1cHBvcnRlZGApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVzOiB7IFtraW5kOiBzdHJpbmddOiBudW1iZXIgfSA9IHt9O1xyXG4gICAgICAgICAgICBjb25zdCBub3JtYWxpemVkOiB7IFtraW5kOiBzdHJpbmddOiBib29sZWFuIH0gPSB7fTtcclxuICAgICAgICAgICAgY29uc3QgbG9hZEF0dHJpYnV0ZSA9IChuYW1lOiBzdHJpbmcsIGtpbmQ6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdW5pcXVlSWQgPSBleHRlbnNpb24uYXR0cmlidXRlc1tuYW1lXTtcclxuICAgICAgICAgICAgICAgIGlmICh1bmlxdWVJZCA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgYmFieWxvbk1lc2guX2RlbGF5SW5mbyA9IGJhYnlsb25NZXNoLl9kZWxheUluZm8gfHwgW107XHJcbiAgICAgICAgICAgICAgICBpZiAoYmFieWxvbk1lc2guX2RlbGF5SW5mby5pbmRleE9mKGtpbmQpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhYnlsb25NZXNoLl9kZWxheUluZm8ucHVzaChraW5kKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzW2tpbmRdID0gdW5pcXVlSWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudXNlTm9ybWFsaXplZEZsYWdGcm9tQWNjZXNzb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhY2Nlc3NvciA9IEFycmF5SXRlbS5UcnlHZXQodGhpcy5fbG9hZGVyLmdsdGYuYWNjZXNzb3JzLCBwcmltaXRpdmUuYXR0cmlidXRlc1tuYW1lXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFjY2Vzc29yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbGl6ZWRba2luZF0gPSBhY2Nlc3Nvci5ub3JtYWxpemVkIHx8IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGxvYWRBdHRyaWJ1dGUoXCJQT1NJVElPTlwiLCBWZXJ0ZXhCdWZmZXIuUG9zaXRpb25LaW5kKTtcclxuICAgICAgICAgICAgbG9hZEF0dHJpYnV0ZShcIk5PUk1BTFwiLCBWZXJ0ZXhCdWZmZXIuTm9ybWFsS2luZCk7XHJcbiAgICAgICAgICAgIGxvYWRBdHRyaWJ1dGUoXCJUQU5HRU5UXCIsIFZlcnRleEJ1ZmZlci5UYW5nZW50S2luZCk7XHJcbiAgICAgICAgICAgIGxvYWRBdHRyaWJ1dGUoXCJURVhDT09SRF8wXCIsIFZlcnRleEJ1ZmZlci5VVktpbmQpO1xyXG4gICAgICAgICAgICBsb2FkQXR0cmlidXRlKFwiVEVYQ09PUkRfMVwiLCBWZXJ0ZXhCdWZmZXIuVVYyS2luZCk7XHJcbiAgICAgICAgICAgIGxvYWRBdHRyaWJ1dGUoXCJURVhDT09SRF8yXCIsIFZlcnRleEJ1ZmZlci5VVjNLaW5kKTtcclxuICAgICAgICAgICAgbG9hZEF0dHJpYnV0ZShcIlRFWENPT1JEXzNcIiwgVmVydGV4QnVmZmVyLlVWNEtpbmQpO1xyXG4gICAgICAgICAgICBsb2FkQXR0cmlidXRlKFwiVEVYQ09PUkRfNFwiLCBWZXJ0ZXhCdWZmZXIuVVY1S2luZCk7XHJcbiAgICAgICAgICAgIGxvYWRBdHRyaWJ1dGUoXCJURVhDT09SRF81XCIsIFZlcnRleEJ1ZmZlci5VVjZLaW5kKTtcclxuICAgICAgICAgICAgbG9hZEF0dHJpYnV0ZShcIkpPSU5UU18wXCIsIFZlcnRleEJ1ZmZlci5NYXRyaWNlc0luZGljZXNLaW5kKTtcclxuICAgICAgICAgICAgbG9hZEF0dHJpYnV0ZShcIldFSUdIVFNfMFwiLCBWZXJ0ZXhCdWZmZXIuTWF0cmljZXNXZWlnaHRzS2luZCk7XHJcbiAgICAgICAgICAgIGxvYWRBdHRyaWJ1dGUoXCJDT0xPUl8wXCIsIFZlcnRleEJ1ZmZlci5Db2xvcktpbmQpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYnVmZmVyVmlldyA9IEFycmF5SXRlbS5HZXQoZXh0ZW5zaW9uQ29udGV4dCwgdGhpcy5fbG9hZGVyLmdsdGYuYnVmZmVyVmlld3MsIGV4dGVuc2lvbi5idWZmZXJWaWV3KSBhcyBJQnVmZmVyVmlld0RyYWNvO1xyXG4gICAgICAgICAgICBpZiAoIWJ1ZmZlclZpZXcuX2RyYWNvQmFieWxvbkdlb21ldHJ5KSB7XHJcbiAgICAgICAgICAgICAgICBidWZmZXJWaWV3Ll9kcmFjb0JhYnlsb25HZW9tZXRyeSA9IHRoaXMuX2xvYWRlci5sb2FkQnVmZmVyVmlld0FzeW5jKGAvYnVmZmVyVmlld3MvJHtidWZmZXJWaWV3LmluZGV4fWAsIGJ1ZmZlclZpZXcpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkcmFjb0NvbXByZXNzaW9uID0gdGhpcy5kcmFjb0NvbXByZXNzaW9uIHx8IERyYWNvQ29tcHJlc3Npb24uRGVmYXVsdDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZHJhY29Db21wcmVzc2lvbi5fZGVjb2RlTWVzaFRvR2VvbWV0cnlGb3JHbHRmQXN5bmMoYmFieWxvbk1lc2gubmFtZSwgdGhpcy5fbG9hZGVyLmJhYnlsb25TY2VuZSwgZGF0YSwgYXR0cmlidXRlcywgbm9ybWFsaXplZCkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtjb250ZXh0fTogJHtlcnJvci5tZXNzYWdlfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBidWZmZXJWaWV3Ll9kcmFjb0JhYnlsb25HZW9tZXRyeTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuR0xURkxvYWRlci5SZWdpc3RlckV4dGVuc2lvbihOQU1FLCAobG9hZGVyKSA9PiBuZXcgS0hSX2RyYWNvX21lc2hfY29tcHJlc3Npb24obG9hZGVyKSk7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiAqL1xyXG5pbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcImNvcmUvdHlwZXNcIjtcclxuaW1wb3J0IHsgVmVjdG9yMyB9IGZyb20gXCJjb3JlL01hdGhzL21hdGgudmVjdG9yXCI7XHJcbmltcG9ydCB7IENvbG9yMyB9IGZyb20gXCJjb3JlL01hdGhzL21hdGguY29sb3JcIjtcclxuaW1wb3J0IHsgRGlyZWN0aW9uYWxMaWdodCB9IGZyb20gXCJjb3JlL0xpZ2h0cy9kaXJlY3Rpb25hbExpZ2h0XCI7XHJcbmltcG9ydCB7IFBvaW50TGlnaHQgfSBmcm9tIFwiY29yZS9MaWdodHMvcG9pbnRMaWdodFwiO1xyXG5pbXBvcnQgeyBTcG90TGlnaHQgfSBmcm9tIFwiY29yZS9MaWdodHMvc3BvdExpZ2h0XCI7XHJcbmltcG9ydCB7IExpZ2h0IH0gZnJvbSBcImNvcmUvTGlnaHRzL2xpZ2h0XCI7XHJcbmltcG9ydCB0eXBlIHsgVHJhbnNmb3JtTm9kZSB9IGZyb20gXCJjb3JlL01lc2hlcy90cmFuc2Zvcm1Ob2RlXCI7XHJcblxyXG5pbXBvcnQgdHlwZSB7IElLSFJMaWdodHNQdW5jdHVhbF9MaWdodFJlZmVyZW5jZSB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgS0hSTGlnaHRzUHVuY3R1YWxfTGlnaHRUeXBlIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgdHlwZSB7IElOb2RlLCBJS0hSTGlnaHRzUHVuY3R1YWxfTGlnaHQgfSBmcm9tIFwiLi4vZ2xURkxvYWRlckludGVyZmFjZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBJR0xURkxvYWRlckV4dGVuc2lvbiB9IGZyb20gXCIuLi9nbFRGTG9hZGVyRXh0ZW5zaW9uXCI7XHJcbmltcG9ydCB7IEdMVEZMb2FkZXIsIEFycmF5SXRlbSB9IGZyb20gXCIuLi9nbFRGTG9hZGVyXCI7XHJcblxyXG5jb25zdCBOQU1FID0gXCJLSFJfbGlnaHRzX3B1bmN0dWFsXCI7XHJcblxyXG4vKipcclxuICogW1NwZWNpZmljYXRpb25dKGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9ibG9iL21haW4vZXh0ZW5zaW9ucy8yLjAvS2hyb25vcy9LSFJfbGlnaHRzX3B1bmN0dWFsL1JFQURNRS5tZClcclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGNsYXNzIEtIUl9saWdodHMgaW1wbGVtZW50cyBJR0xURkxvYWRlckV4dGVuc2lvbiB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBuYW1lIG9mIHRoaXMgZXh0ZW5zaW9uLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZSA9IE5BTUU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgZW5hYmxlZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGVuYWJsZWQ6IGJvb2xlYW47XHJcblxyXG4gICAgLyoqIGhpZGRlbiAqL1xyXG4gICAgcHJpdmF0ZSBfbG9hZGVyOiBHTFRGTG9hZGVyO1xyXG4gICAgcHJpdmF0ZSBfbGlnaHRzPzogSUtIUkxpZ2h0c1B1bmN0dWFsX0xpZ2h0W107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobG9hZGVyOiBHTFRGTG9hZGVyKSB7XHJcbiAgICAgICAgdGhpcy5fbG9hZGVyID0gbG9hZGVyO1xyXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRoaXMuX2xvYWRlci5pc0V4dGVuc2lvblVzZWQoTkFNRSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgKHRoaXMuX2xvYWRlciBhcyBhbnkpID0gbnVsbDtcclxuICAgICAgICBkZWxldGUgdGhpcy5fbGlnaHRzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBvbkxvYWRpbmcoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgZXh0ZW5zaW9ucyA9IHRoaXMuX2xvYWRlci5nbHRmLmV4dGVuc2lvbnM7XHJcbiAgICAgICAgaWYgKGV4dGVuc2lvbnMgJiYgZXh0ZW5zaW9uc1t0aGlzLm5hbWVdKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IGV4dGVuc2lvbnNbdGhpcy5uYW1lXSBhcyBhbnk7XHJcbiAgICAgICAgICAgIHRoaXMuX2xpZ2h0cyA9IGV4dGVuc2lvbi5saWdodHM7XHJcbiAgICAgICAgICAgIEFycmF5SXRlbS5Bc3NpZ24odGhpcy5fbGlnaHRzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWROb2RlQXN5bmMoY29udGV4dDogc3RyaW5nLCBub2RlOiBJTm9kZSwgYXNzaWduOiAoYmFieWxvblRyYW5zZm9ybU5vZGU6IFRyYW5zZm9ybU5vZGUpID0+IHZvaWQpOiBOdWxsYWJsZTxQcm9taXNlPFRyYW5zZm9ybU5vZGU+PiB7XHJcbiAgICAgICAgcmV0dXJuIEdMVEZMb2FkZXIuTG9hZEV4dGVuc2lvbkFzeW5jPElLSFJMaWdodHNQdW5jdHVhbF9MaWdodFJlZmVyZW5jZSwgVHJhbnNmb3JtTm9kZT4oY29udGV4dCwgbm9kZSwgdGhpcy5uYW1lLCAoZXh0ZW5zaW9uQ29udGV4dCwgZXh0ZW5zaW9uKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvYWRlci5fYWxsTWF0ZXJpYWxzRGlydHlSZXF1aXJlZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbG9hZGVyLmxvYWROb2RlQXN5bmMoY29udGV4dCwgbm9kZSwgKGJhYnlsb25NZXNoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYmFieWxvbkxpZ2h0OiBMaWdodDtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBsaWdodCA9IEFycmF5SXRlbS5HZXQoZXh0ZW5zaW9uQ29udGV4dCwgdGhpcy5fbGlnaHRzLCBleHRlbnNpb24ubGlnaHQpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IGxpZ2h0Lm5hbWUgfHwgYmFieWxvbk1lc2gubmFtZTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2FkZXIuYmFieWxvblNjZW5lLl9ibG9ja0VudGl0eUNvbGxlY3Rpb24gPSAhIXRoaXMuX2xvYWRlci5fYXNzZXRDb250YWluZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChsaWdodC50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBLSFJMaWdodHNQdW5jdHVhbF9MaWdodFR5cGUuRElSRUNUSU9OQUw6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmFieWxvbkRpcmVjdGlvbmFsTGlnaHQgPSBuZXcgRGlyZWN0aW9uYWxMaWdodChuYW1lLCBWZWN0b3IzLkJhY2t3YXJkKCksIHRoaXMuX2xvYWRlci5iYWJ5bG9uU2NlbmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uRGlyZWN0aW9uYWxMaWdodC5wb3NpdGlvbi5zZXRBbGwoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhYnlsb25MaWdodCA9IGJhYnlsb25EaXJlY3Rpb25hbExpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBLSFJMaWdodHNQdW5jdHVhbF9MaWdodFR5cGUuUE9JTlQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFieWxvbkxpZ2h0ID0gbmV3IFBvaW50TGlnaHQobmFtZSwgVmVjdG9yMy5aZXJvKCksIHRoaXMuX2xvYWRlci5iYWJ5bG9uU2NlbmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBLSFJMaWdodHNQdW5jdHVhbF9MaWdodFR5cGUuU1BPVDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBiYWJ5bG9uU3BvdExpZ2h0ID0gbmV3IFNwb3RMaWdodChuYW1lLCBWZWN0b3IzLlplcm8oKSwgVmVjdG9yMy5CYWNrd2FyZCgpLCAwLCAxLCB0aGlzLl9sb2FkZXIuYmFieWxvblNjZW5lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFieWxvblNwb3RMaWdodC5hbmdsZSA9ICgobGlnaHQuc3BvdCAmJiBsaWdodC5zcG90Lm91dGVyQ29uZUFuZ2xlKSB8fCBNYXRoLlBJIC8gNCkgKiAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uU3BvdExpZ2h0LmlubmVyQW5nbGUgPSAoKGxpZ2h0LnNwb3QgJiYgbGlnaHQuc3BvdC5pbm5lckNvbmVBbmdsZSkgfHwgMCkgKiAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uTGlnaHQgPSBiYWJ5bG9uU3BvdExpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2FkZXIuYmFieWxvblNjZW5lLl9ibG9ja0VudGl0eUNvbGxlY3Rpb24gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2V4dGVuc2lvbkNvbnRleHR9OiBJbnZhbGlkIGxpZ2h0IHR5cGUgKCR7bGlnaHQudHlwZX0pYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGJhYnlsb25MaWdodC5fcGFyZW50Q29udGFpbmVyID0gdGhpcy5fbG9hZGVyLl9hc3NldENvbnRhaW5lcjtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRlci5iYWJ5bG9uU2NlbmUuX2Jsb2NrRW50aXR5Q29sbGVjdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgbGlnaHQuX2JhYnlsb25MaWdodCA9IGJhYnlsb25MaWdodDtcclxuXHJcbiAgICAgICAgICAgICAgICBiYWJ5bG9uTGlnaHQuZmFsbG9mZlR5cGUgPSBMaWdodC5GQUxMT0ZGX0dMVEY7XHJcbiAgICAgICAgICAgICAgICBiYWJ5bG9uTGlnaHQuZGlmZnVzZSA9IGxpZ2h0LmNvbG9yID8gQ29sb3IzLkZyb21BcnJheShsaWdodC5jb2xvcikgOiBDb2xvcjMuV2hpdGUoKTtcclxuICAgICAgICAgICAgICAgIGJhYnlsb25MaWdodC5pbnRlbnNpdHkgPSBsaWdodC5pbnRlbnNpdHkgPT0gdW5kZWZpbmVkID8gMSA6IGxpZ2h0LmludGVuc2l0eTtcclxuICAgICAgICAgICAgICAgIGJhYnlsb25MaWdodC5yYW5nZSA9IGxpZ2h0LnJhbmdlID09IHVuZGVmaW5lZCA/IE51bWJlci5NQVhfVkFMVUUgOiBsaWdodC5yYW5nZTtcclxuICAgICAgICAgICAgICAgIGJhYnlsb25MaWdodC5wYXJlbnQgPSBiYWJ5bG9uTWVzaDtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2FkZXIuX2JhYnlsb25MaWdodHMucHVzaChiYWJ5bG9uTGlnaHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIEdMVEZMb2FkZXIuQWRkUG9pbnRlck1ldGFkYXRhKGJhYnlsb25MaWdodCwgZXh0ZW5zaW9uQ29udGV4dCk7XHJcblxyXG4gICAgICAgICAgICAgICAgYXNzaWduKGJhYnlsb25NZXNoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkdMVEZMb2FkZXIuUmVnaXN0ZXJFeHRlbnNpb24oTkFNRSwgKGxvYWRlcikgPT4gbmV3IEtIUl9saWdodHMobG9hZGVyKSk7XHJcbiIsImltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xyXG5pbXBvcnQgeyBQQlJNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9QQlIvcGJyTWF0ZXJpYWxcIjtcclxuaW1wb3J0IHR5cGUgeyBNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9tYXRlcmlhbFwiO1xyXG5cclxuaW1wb3J0IHR5cGUgeyBJTWF0ZXJpYWwgfSBmcm9tIFwiLi4vZ2xURkxvYWRlckludGVyZmFjZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBJR0xURkxvYWRlckV4dGVuc2lvbiB9IGZyb20gXCIuLi9nbFRGTG9hZGVyRXh0ZW5zaW9uXCI7XHJcbmltcG9ydCB7IEdMVEZMb2FkZXIgfSBmcm9tIFwiLi4vZ2xURkxvYWRlclwiO1xyXG5pbXBvcnQgdHlwZSB7IElLSFJNYXRlcmlhbHNBbmlzb3Ryb3B5IH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5cclxuY29uc3QgTkFNRSA9IFwiS0hSX21hdGVyaWFsc19hbmlzb3Ryb3B5XCI7XHJcblxyXG4vKipcclxuICogW1NwZWNpZmljYXRpb25dKGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21haW4vZXh0ZW5zaW9ucy8yLjAvS2hyb25vcy9LSFJfbWF0ZXJpYWxzX2FuaXNvdHJvcHkpXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBjbGFzcyBLSFJfbWF0ZXJpYWxzX2FuaXNvdHJvcHkgaW1wbGVtZW50cyBJR0xURkxvYWRlckV4dGVuc2lvbiB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBuYW1lIG9mIHRoaXMgZXh0ZW5zaW9uLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZSA9IE5BTUU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgZW5hYmxlZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGVuYWJsZWQ6IGJvb2xlYW47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIGEgbnVtYmVyIHRoYXQgZGV0ZXJtaW5lcyB0aGUgb3JkZXIgdGhlIGV4dGVuc2lvbnMgYXJlIGFwcGxpZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvcmRlciA9IDE5NTtcclxuXHJcbiAgICBwcml2YXRlIF9sb2FkZXI6IEdMVEZMb2FkZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobG9hZGVyOiBHTFRGTG9hZGVyKSB7XHJcbiAgICAgICAgdGhpcy5fbG9hZGVyID0gbG9hZGVyO1xyXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRoaXMuX2xvYWRlci5pc0V4dGVuc2lvblVzZWQoTkFNRSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgKHRoaXMuX2xvYWRlciBhcyBhbnkpID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZE1hdGVyaWFsUHJvcGVydGllc0FzeW5jKGNvbnRleHQ6IHN0cmluZywgbWF0ZXJpYWw6IElNYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCk6IE51bGxhYmxlPFByb21pc2U8dm9pZD4+IHtcclxuICAgICAgICByZXR1cm4gR0xURkxvYWRlci5Mb2FkRXh0ZW5zaW9uQXN5bmM8SUtIUk1hdGVyaWFsc0FuaXNvdHJvcHk+KGNvbnRleHQsIG1hdGVyaWFsLCB0aGlzLm5hbWUsIChleHRlbnNpb25Db250ZXh0LCBleHRlbnNpb24pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBuZXcgQXJyYXk8UHJvbWlzZTxhbnk+PigpO1xyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMuX2xvYWRlci5sb2FkTWF0ZXJpYWxQcm9wZXJ0aWVzQXN5bmMoY29udGV4dCwgbWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbCkpO1xyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMuX2xvYWRJcmlkZXNjZW5jZVByb3BlcnRpZXNBc3luYyhleHRlbnNpb25Db250ZXh0LCBleHRlbnNpb24sIGJhYnlsb25NYXRlcmlhbCkpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4ge30pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2xvYWRJcmlkZXNjZW5jZVByb3BlcnRpZXNBc3luYyhjb250ZXh0OiBzdHJpbmcsIHByb3BlcnRpZXM6IElLSFJNYXRlcmlhbHNBbmlzb3Ryb3B5LCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgaWYgKCEoYmFieWxvbk1hdGVyaWFsIGluc3RhbmNlb2YgUEJSTWF0ZXJpYWwpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtjb250ZXh0fTogTWF0ZXJpYWwgdHlwZSBub3Qgc3VwcG9ydGVkYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBwcm9taXNlcyA9IG5ldyBBcnJheTxQcm9taXNlPGFueT4+KCk7XHJcblxyXG4gICAgICAgIGJhYnlsb25NYXRlcmlhbC5hbmlzb3Ryb3B5LmlzRW5hYmxlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIGJhYnlsb25NYXRlcmlhbC5hbmlzb3Ryb3B5LmludGVuc2l0eSA9IHByb3BlcnRpZXMuYW5pc290cm9weVN0cmVuZ3RoID8/IDA7XHJcbiAgICAgICAgYmFieWxvbk1hdGVyaWFsLmFuaXNvdHJvcHkuYW5nbGUgPSBwcm9wZXJ0aWVzLmFuaXNvdHJvcHlSb3RhdGlvbiA/PyAwO1xyXG5cclxuICAgICAgICBpZiAocHJvcGVydGllcy5hbmlzb3Ryb3B5VGV4dHVyZSkge1xyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9hZGVyLmxvYWRUZXh0dXJlSW5mb0FzeW5jKGAke2NvbnRleHR9L2FuaXNvdHJvcHlUZXh0dXJlYCwgcHJvcGVydGllcy5hbmlzb3Ryb3B5VGV4dHVyZSwgKHRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlLm5hbWUgPSBgJHtiYWJ5bG9uTWF0ZXJpYWwubmFtZX0gKEFuaXNvdHJvcHkgSW50ZW5zaXR5KWA7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsLmFuaXNvdHJvcHkudGV4dHVyZSA9IHRleHR1cmU7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IHt9KTtcclxuICAgIH1cclxufVxyXG5cclxuR0xURkxvYWRlci5SZWdpc3RlckV4dGVuc2lvbihOQU1FLCAobG9hZGVyKSA9PiBuZXcgS0hSX21hdGVyaWFsc19hbmlzb3Ryb3B5KGxvYWRlcikpO1xyXG4iLCJpbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcImNvcmUvdHlwZXNcIjtcclxuaW1wb3J0IHsgUEJSTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvUEJSL3Bick1hdGVyaWFsXCI7XHJcbmltcG9ydCB0eXBlIHsgTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvbWF0ZXJpYWxcIjtcclxuXHJcbmltcG9ydCB0eXBlIHsgSU1hdGVyaWFsLCBJVGV4dHVyZUluZm8gfSBmcm9tIFwiLi4vZ2xURkxvYWRlckludGVyZmFjZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBJR0xURkxvYWRlckV4dGVuc2lvbiB9IGZyb20gXCIuLi9nbFRGTG9hZGVyRXh0ZW5zaW9uXCI7XHJcbmltcG9ydCB7IEdMVEZMb2FkZXIgfSBmcm9tIFwiLi4vZ2xURkxvYWRlclwiO1xyXG5pbXBvcnQgdHlwZSB7IElLSFJNYXRlcmlhbHNDbGVhcmNvYXQgfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcblxyXG5jb25zdCBOQU1FID0gXCJLSFJfbWF0ZXJpYWxzX2NsZWFyY29hdFwiO1xyXG5cclxuLyoqXHJcbiAqIFtTcGVjaWZpY2F0aW9uXShodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi9tYWluL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX21hdGVyaWFsc19jbGVhcmNvYXQvUkVBRE1FLm1kKVxyXG4gKiBbUGxheWdyb3VuZCBTYW1wbGVdKGh0dHBzOi8vd3d3LmJhYnlsb25qcy1wbGF5Z3JvdW5kLmNvbS9mcmFtZS5odG1sIzdGN1BONiM4KVxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgY2xhc3MgS0hSX21hdGVyaWFsc19jbGVhcmNvYXQgaW1wbGVtZW50cyBJR0xURkxvYWRlckV4dGVuc2lvbiB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBuYW1lIG9mIHRoaXMgZXh0ZW5zaW9uLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZSA9IE5BTUU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgZW5hYmxlZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGVuYWJsZWQ6IGJvb2xlYW47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIGEgbnVtYmVyIHRoYXQgZGV0ZXJtaW5lcyB0aGUgb3JkZXIgdGhlIGV4dGVuc2lvbnMgYXJlIGFwcGxpZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvcmRlciA9IDE5MDtcclxuXHJcbiAgICBwcml2YXRlIF9sb2FkZXI6IEdMVEZMb2FkZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobG9hZGVyOiBHTFRGTG9hZGVyKSB7XHJcbiAgICAgICAgdGhpcy5fbG9hZGVyID0gbG9hZGVyO1xyXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRoaXMuX2xvYWRlci5pc0V4dGVuc2lvblVzZWQoTkFNRSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgKHRoaXMuX2xvYWRlciBhcyBhbnkpID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZE1hdGVyaWFsUHJvcGVydGllc0FzeW5jKGNvbnRleHQ6IHN0cmluZywgbWF0ZXJpYWw6IElNYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCk6IE51bGxhYmxlPFByb21pc2U8dm9pZD4+IHtcclxuICAgICAgICByZXR1cm4gR0xURkxvYWRlci5Mb2FkRXh0ZW5zaW9uQXN5bmM8SUtIUk1hdGVyaWFsc0NsZWFyY29hdD4oY29udGV4dCwgbWF0ZXJpYWwsIHRoaXMubmFtZSwgKGV4dGVuc2lvbkNvbnRleHQsIGV4dGVuc2lvbikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9taXNlcyA9IG5ldyBBcnJheTxQcm9taXNlPGFueT4+KCk7XHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5fbG9hZGVyLmxvYWRNYXRlcmlhbFByb3BlcnRpZXNBc3luYyhjb250ZXh0LCBtYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsKSk7XHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5fbG9hZENsZWFyQ29hdFByb3BlcnRpZXNBc3luYyhleHRlbnNpb25Db250ZXh0LCBleHRlbnNpb24sIGJhYnlsb25NYXRlcmlhbCkpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4ge30pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2xvYWRDbGVhckNvYXRQcm9wZXJ0aWVzQXN5bmMoY29udGV4dDogc3RyaW5nLCBwcm9wZXJ0aWVzOiBJS0hSTWF0ZXJpYWxzQ2xlYXJjb2F0LCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgaWYgKCEoYmFieWxvbk1hdGVyaWFsIGluc3RhbmNlb2YgUEJSTWF0ZXJpYWwpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtjb250ZXh0fTogTWF0ZXJpYWwgdHlwZSBub3Qgc3VwcG9ydGVkYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBwcm9taXNlcyA9IG5ldyBBcnJheTxQcm9taXNlPGFueT4+KCk7XHJcblxyXG4gICAgICAgIGJhYnlsb25NYXRlcmlhbC5jbGVhckNvYXQuaXNFbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwuY2xlYXJDb2F0LnVzZVJvdWdobmVzc0Zyb21NYWluVGV4dHVyZSA9IGZhbHNlO1xyXG4gICAgICAgIGJhYnlsb25NYXRlcmlhbC5jbGVhckNvYXQucmVtYXBGME9uSW50ZXJmYWNlQ2hhbmdlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmIChwcm9wZXJ0aWVzLmNsZWFyY29hdEZhY3RvciAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsLmNsZWFyQ29hdC5pbnRlbnNpdHkgPSBwcm9wZXJ0aWVzLmNsZWFyY29hdEZhY3RvcjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwuY2xlYXJDb2F0LmludGVuc2l0eSA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocHJvcGVydGllcy5jbGVhcmNvYXRUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2FkZXIubG9hZFRleHR1cmVJbmZvQXN5bmMoYCR7Y29udGV4dH0vY2xlYXJjb2F0VGV4dHVyZWAsIHByb3BlcnRpZXMuY2xlYXJjb2F0VGV4dHVyZSwgKHRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlLm5hbWUgPSBgJHtiYWJ5bG9uTWF0ZXJpYWwubmFtZX0gKENsZWFyQ29hdCBJbnRlbnNpdHkpYDtcclxuICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwuY2xlYXJDb2F0LnRleHR1cmUgPSB0ZXh0dXJlO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwcm9wZXJ0aWVzLmNsZWFyY29hdFJvdWdobmVzc0ZhY3RvciAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsLmNsZWFyQ29hdC5yb3VnaG5lc3MgPSBwcm9wZXJ0aWVzLmNsZWFyY29hdFJvdWdobmVzc0ZhY3RvcjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwuY2xlYXJDb2F0LnJvdWdobmVzcyA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocHJvcGVydGllcy5jbGVhcmNvYXRSb3VnaG5lc3NUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgIChwcm9wZXJ0aWVzLmNsZWFyY29hdFJvdWdobmVzc1RleHR1cmUgYXMgSVRleHR1cmVJbmZvKS5ub25Db2xvckRhdGEgPSB0cnVlO1xyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9hZGVyLmxvYWRUZXh0dXJlSW5mb0FzeW5jKGAke2NvbnRleHR9L2NsZWFyY29hdFJvdWdobmVzc1RleHR1cmVgLCBwcm9wZXJ0aWVzLmNsZWFyY29hdFJvdWdobmVzc1RleHR1cmUsICh0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dHVyZS5uYW1lID0gYCR7YmFieWxvbk1hdGVyaWFsLm5hbWV9IChDbGVhckNvYXQgUm91Z2huZXNzKWA7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsLmNsZWFyQ29hdC50ZXh0dXJlUm91Z2huZXNzID0gdGV4dHVyZTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocHJvcGVydGllcy5jbGVhcmNvYXROb3JtYWxUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgIChwcm9wZXJ0aWVzLmNsZWFyY29hdE5vcm1hbFRleHR1cmUgYXMgSVRleHR1cmVJbmZvKS5ub25Db2xvckRhdGEgPSB0cnVlO1xyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9hZGVyLmxvYWRUZXh0dXJlSW5mb0FzeW5jKGAke2NvbnRleHR9L2NsZWFyY29hdE5vcm1hbFRleHR1cmVgLCBwcm9wZXJ0aWVzLmNsZWFyY29hdE5vcm1hbFRleHR1cmUsICh0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dHVyZS5uYW1lID0gYCR7YmFieWxvbk1hdGVyaWFsLm5hbWV9IChDbGVhckNvYXQgTm9ybWFsKWA7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsLmNsZWFyQ29hdC5idW1wVGV4dHVyZSA9IHRleHR1cmU7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsLmludmVydE5vcm1hbE1hcFggPSAhYmFieWxvbk1hdGVyaWFsLmdldFNjZW5lKCkudXNlUmlnaHRIYW5kZWRTeXN0ZW07XHJcbiAgICAgICAgICAgIGJhYnlsb25NYXRlcmlhbC5pbnZlcnROb3JtYWxNYXBZID0gYmFieWxvbk1hdGVyaWFsLmdldFNjZW5lKCkudXNlUmlnaHRIYW5kZWRTeXN0ZW07XHJcbiAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzLmNsZWFyY29hdE5vcm1hbFRleHR1cmUuc2NhbGUgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwuY2xlYXJDb2F0LmJ1bXBUZXh0dXJlIS5sZXZlbCA9IHByb3BlcnRpZXMuY2xlYXJjb2F0Tm9ybWFsVGV4dHVyZS5zY2FsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IHt9KTtcclxuICAgIH1cclxufVxyXG5cclxuR0xURkxvYWRlci5SZWdpc3RlckV4dGVuc2lvbihOQU1FLCAobG9hZGVyKSA9PiBuZXcgS0hSX21hdGVyaWFsc19jbGVhcmNvYXQobG9hZGVyKSk7XHJcbiIsImltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xyXG5pbXBvcnQgeyBQQlJNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9QQlIvcGJyTWF0ZXJpYWxcIjtcclxuaW1wb3J0IHR5cGUgeyBNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9tYXRlcmlhbFwiO1xyXG5cclxuaW1wb3J0IHR5cGUgeyBJTWF0ZXJpYWwgfSBmcm9tIFwiLi4vZ2xURkxvYWRlckludGVyZmFjZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBJR0xURkxvYWRlckV4dGVuc2lvbiB9IGZyb20gXCIuLi9nbFRGTG9hZGVyRXh0ZW5zaW9uXCI7XHJcbmltcG9ydCB7IEdMVEZMb2FkZXIgfSBmcm9tIFwiLi4vZ2xURkxvYWRlclwiO1xyXG5pbXBvcnQgdHlwZSB7IElLSFJNYXRlcmlhbHNFbWlzc2l2ZVN0cmVuZ3RoIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5cclxuY29uc3QgTkFNRSA9IFwiS0hSX21hdGVyaWFsc19lbWlzc2l2ZV9zdHJlbmd0aFwiO1xyXG5cclxuLyoqXHJcbiAqIFtTcGVjaWZpY2F0aW9uXShodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi9tYWluL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX21hdGVyaWFsc19lbWlzc2l2ZV9zdHJlbmd0aC9SRUFETUUubWQpXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBjbGFzcyBLSFJfbWF0ZXJpYWxzX2VtaXNzaXZlX3N0cmVuZ3RoIGltcGxlbWVudHMgSUdMVEZMb2FkZXJFeHRlbnNpb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGlzIGV4dGVuc2lvbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBOQU1FO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIGVuYWJsZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBlbmFibGVkOiBib29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyBhIG51bWJlciB0aGF0IGRldGVybWluZXMgdGhlIG9yZGVyIHRoZSBleHRlbnNpb25zIGFyZSBhcHBsaWVkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb3JkZXIgPSAxNzA7XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZGVyOiBHTFRGTG9hZGVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGxvYWRlcjogR0xURkxvYWRlcikge1xyXG4gICAgICAgIHRoaXMuX2xvYWRlciA9IGxvYWRlcjtcclxuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0aGlzLl9sb2FkZXIuaXNFeHRlbnNpb25Vc2VkKE5BTUUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge1xyXG4gICAgICAgICh0aGlzLl9sb2FkZXIgYXMgYW55KSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWRNYXRlcmlhbFByb3BlcnRpZXNBc3luYyhjb250ZXh0OiBzdHJpbmcsIG1hdGVyaWFsOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBOdWxsYWJsZTxQcm9taXNlPHZvaWQ+PiB7XHJcbiAgICAgICAgcmV0dXJuIEdMVEZMb2FkZXIuTG9hZEV4dGVuc2lvbkFzeW5jPElLSFJNYXRlcmlhbHNFbWlzc2l2ZVN0cmVuZ3RoPihjb250ZXh0LCBtYXRlcmlhbCwgdGhpcy5uYW1lLCAoZXh0ZW5zaW9uQ29udGV4dCwgZXh0ZW5zaW9uKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9sb2FkZXIubG9hZE1hdGVyaWFsUHJvcGVydGllc0FzeW5jKGNvbnRleHQsIG1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWwpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9hZEVtaXNzaXZlUHJvcGVydGllcyhleHRlbnNpb25Db250ZXh0LCBleHRlbnNpb24sIGJhYnlsb25NYXRlcmlhbCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2xvYWRFbWlzc2l2ZVByb3BlcnRpZXMoY29udGV4dDogc3RyaW5nLCBwcm9wZXJ0aWVzOiBJS0hSTWF0ZXJpYWxzRW1pc3NpdmVTdHJlbmd0aCwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghKGJhYnlsb25NYXRlcmlhbCBpbnN0YW5jZW9mIFBCUk1hdGVyaWFsKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7Y29udGV4dH06IE1hdGVyaWFsIHR5cGUgbm90IHN1cHBvcnRlZGApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHByb3BlcnRpZXMuZW1pc3NpdmVTdHJlbmd0aCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGJhYnlsb25NYXRlcmlhbC5lbWlzc2l2ZUNvbG9yLnNjYWxlVG9SZWYocHJvcGVydGllcy5lbWlzc2l2ZVN0cmVuZ3RoLCBiYWJ5bG9uTWF0ZXJpYWwuZW1pc3NpdmVDb2xvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5HTFRGTG9hZGVyLlJlZ2lzdGVyRXh0ZW5zaW9uKE5BTUUsIChsb2FkZXIpID0+IG5ldyBLSFJfbWF0ZXJpYWxzX2VtaXNzaXZlX3N0cmVuZ3RoKGxvYWRlcikpO1xyXG4iLCJpbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcImNvcmUvdHlwZXNcIjtcclxuaW1wb3J0IHsgUEJSTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvUEJSL3Bick1hdGVyaWFsXCI7XHJcbmltcG9ydCB0eXBlIHsgTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvbWF0ZXJpYWxcIjtcclxuXHJcbmltcG9ydCB0eXBlIHsgSU1hdGVyaWFsIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJJbnRlcmZhY2VzXCI7XHJcbmltcG9ydCB0eXBlIHsgSUdMVEZMb2FkZXJFeHRlbnNpb24gfSBmcm9tIFwiLi4vZ2xURkxvYWRlckV4dGVuc2lvblwiO1xyXG5pbXBvcnQgeyBHTFRGTG9hZGVyIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBJS0hSTWF0ZXJpYWxzSW9yIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5cclxuY29uc3QgTkFNRSA9IFwiS0hSX21hdGVyaWFsc19pb3JcIjtcclxuXHJcbi8qKlxyXG4gKiBbU3BlY2lmaWNhdGlvbl0oaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFpbi9leHRlbnNpb25zLzIuMC9LaHJvbm9zL0tIUl9tYXRlcmlhbHNfaW9yL1JFQURNRS5tZClcclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGNsYXNzIEtIUl9tYXRlcmlhbHNfaW9yIGltcGxlbWVudHMgSUdMVEZMb2FkZXJFeHRlbnNpb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZhdWx0IGlvciBWYWx1ZSBmcm9tIHRoZSBzcGVjLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBfREVGQVVMVF9JT1IgPSAxLjU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGlzIGV4dGVuc2lvbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBOQU1FO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIGVuYWJsZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBlbmFibGVkOiBib29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyBhIG51bWJlciB0aGF0IGRldGVybWluZXMgdGhlIG9yZGVyIHRoZSBleHRlbnNpb25zIGFyZSBhcHBsaWVkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb3JkZXIgPSAxODA7XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZGVyOiBHTFRGTG9hZGVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGxvYWRlcjogR0xURkxvYWRlcikge1xyXG4gICAgICAgIHRoaXMuX2xvYWRlciA9IGxvYWRlcjtcclxuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0aGlzLl9sb2FkZXIuaXNFeHRlbnNpb25Vc2VkKE5BTUUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge1xyXG4gICAgICAgICh0aGlzLl9sb2FkZXIgYXMgYW55KSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWRNYXRlcmlhbFByb3BlcnRpZXNBc3luYyhjb250ZXh0OiBzdHJpbmcsIG1hdGVyaWFsOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBOdWxsYWJsZTxQcm9taXNlPHZvaWQ+PiB7XHJcbiAgICAgICAgcmV0dXJuIEdMVEZMb2FkZXIuTG9hZEV4dGVuc2lvbkFzeW5jPElLSFJNYXRlcmlhbHNJb3I+KGNvbnRleHQsIG1hdGVyaWFsLCB0aGlzLm5hbWUsIChleHRlbnNpb25Db250ZXh0LCBleHRlbnNpb24pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBuZXcgQXJyYXk8UHJvbWlzZTxhbnk+PigpO1xyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMuX2xvYWRlci5sb2FkTWF0ZXJpYWxQcm9wZXJ0aWVzQXN5bmMoY29udGV4dCwgbWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbCkpO1xyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMuX2xvYWRJb3JQcm9wZXJ0aWVzQXN5bmMoZXh0ZW5zaW9uQ29udGV4dCwgZXh0ZW5zaW9uLCBiYWJ5bG9uTWF0ZXJpYWwpKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IHt9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9sb2FkSW9yUHJvcGVydGllc0FzeW5jKGNvbnRleHQ6IHN0cmluZywgcHJvcGVydGllczogSUtIUk1hdGVyaWFsc0lvciwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGlmICghKGJhYnlsb25NYXRlcmlhbCBpbnN0YW5jZW9mIFBCUk1hdGVyaWFsKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7Y29udGV4dH06IE1hdGVyaWFsIHR5cGUgbm90IHN1cHBvcnRlZGApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHByb3BlcnRpZXMuaW9yICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsLmluZGV4T2ZSZWZyYWN0aW9uID0gcHJvcGVydGllcy5pb3I7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsLmluZGV4T2ZSZWZyYWN0aW9uID0gS0hSX21hdGVyaWFsc19pb3IuX0RFRkFVTFRfSU9SO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5HTFRGTG9hZGVyLlJlZ2lzdGVyRXh0ZW5zaW9uKE5BTUUsIChsb2FkZXIpID0+IG5ldyBLSFJfbWF0ZXJpYWxzX2lvcihsb2FkZXIpKTtcclxuIiwiaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCJjb3JlL3R5cGVzXCI7XHJcbmltcG9ydCB7IFBCUk1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1BCUi9wYnJNYXRlcmlhbFwiO1xyXG5pbXBvcnQgdHlwZSB7IE1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL21hdGVyaWFsXCI7XHJcblxyXG5pbXBvcnQgdHlwZSB7IElNYXRlcmlhbCB9IGZyb20gXCIuLi9nbFRGTG9hZGVySW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQgdHlwZSB7IElHTFRGTG9hZGVyRXh0ZW5zaW9uIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJFeHRlbnNpb25cIjtcclxuaW1wb3J0IHsgR0xURkxvYWRlciB9IGZyb20gXCIuLi9nbFRGTG9hZGVyXCI7XHJcbmltcG9ydCB0eXBlIHsgSUtIUk1hdGVyaWFsc0lyaWRlc2NlbmNlIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5cclxuY29uc3QgTkFNRSA9IFwiS0hSX21hdGVyaWFsc19pcmlkZXNjZW5jZVwiO1xyXG5cclxuLyoqXHJcbiAqIFtTcGVjaWZpY2F0aW9uXShodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi9tYWluL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX21hdGVyaWFsc19pcmlkZXNjZW5jZS9SRUFETUUubWQpXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBjbGFzcyBLSFJfbWF0ZXJpYWxzX2lyaWRlc2NlbmNlIGltcGxlbWVudHMgSUdMVEZMb2FkZXJFeHRlbnNpb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGlzIGV4dGVuc2lvbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBOQU1FO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIGVuYWJsZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBlbmFibGVkOiBib29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyBhIG51bWJlciB0aGF0IGRldGVybWluZXMgdGhlIG9yZGVyIHRoZSBleHRlbnNpb25zIGFyZSBhcHBsaWVkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb3JkZXIgPSAxOTU7XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZGVyOiBHTFRGTG9hZGVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGxvYWRlcjogR0xURkxvYWRlcikge1xyXG4gICAgICAgIHRoaXMuX2xvYWRlciA9IGxvYWRlcjtcclxuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0aGlzLl9sb2FkZXIuaXNFeHRlbnNpb25Vc2VkKE5BTUUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge1xyXG4gICAgICAgICh0aGlzLl9sb2FkZXIgYXMgYW55KSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWRNYXRlcmlhbFByb3BlcnRpZXNBc3luYyhjb250ZXh0OiBzdHJpbmcsIG1hdGVyaWFsOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBOdWxsYWJsZTxQcm9taXNlPHZvaWQ+PiB7XHJcbiAgICAgICAgcmV0dXJuIEdMVEZMb2FkZXIuTG9hZEV4dGVuc2lvbkFzeW5jPElLSFJNYXRlcmlhbHNJcmlkZXNjZW5jZT4oY29udGV4dCwgbWF0ZXJpYWwsIHRoaXMubmFtZSwgKGV4dGVuc2lvbkNvbnRleHQsIGV4dGVuc2lvbikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9taXNlcyA9IG5ldyBBcnJheTxQcm9taXNlPGFueT4+KCk7XHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5fbG9hZGVyLmxvYWRNYXRlcmlhbFByb3BlcnRpZXNBc3luYyhjb250ZXh0LCBtYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsKSk7XHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5fbG9hZElyaWRlc2NlbmNlUHJvcGVydGllc0FzeW5jKGV4dGVuc2lvbkNvbnRleHQsIGV4dGVuc2lvbiwgYmFieWxvbk1hdGVyaWFsKSk7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoKSA9PiB7fSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZElyaWRlc2NlbmNlUHJvcGVydGllc0FzeW5jKGNvbnRleHQ6IHN0cmluZywgcHJvcGVydGllczogSUtIUk1hdGVyaWFsc0lyaWRlc2NlbmNlLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgaWYgKCEoYmFieWxvbk1hdGVyaWFsIGluc3RhbmNlb2YgUEJSTWF0ZXJpYWwpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtjb250ZXh0fTogTWF0ZXJpYWwgdHlwZSBub3Qgc3VwcG9ydGVkYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBwcm9taXNlcyA9IG5ldyBBcnJheTxQcm9taXNlPGFueT4+KCk7XHJcblxyXG4gICAgICAgIGJhYnlsb25NYXRlcmlhbC5pcmlkZXNjZW5jZS5pc0VuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwuaXJpZGVzY2VuY2UuaW50ZW5zaXR5ID0gcHJvcGVydGllcy5pcmlkZXNjZW5jZUZhY3RvciA/PyAwO1xyXG4gICAgICAgIGJhYnlsb25NYXRlcmlhbC5pcmlkZXNjZW5jZS5pbmRleE9mUmVmcmFjdGlvbiA9IHByb3BlcnRpZXMuaXJpZGVzY2VuY2VJb3IgPz8gKHByb3BlcnRpZXMgYXMgYW55KS5pcmlkZXNjZW5jZUlPUiA/PyAxLjM7XHJcbiAgICAgICAgYmFieWxvbk1hdGVyaWFsLmlyaWRlc2NlbmNlLm1pbmltdW1UaGlja25lc3MgPSBwcm9wZXJ0aWVzLmlyaWRlc2NlbmNlVGhpY2tuZXNzTWluaW11bSA/PyAxMDA7XHJcbiAgICAgICAgYmFieWxvbk1hdGVyaWFsLmlyaWRlc2NlbmNlLm1heGltdW1UaGlja25lc3MgPSBwcm9wZXJ0aWVzLmlyaWRlc2NlbmNlVGhpY2tuZXNzTWF4aW11bSA/PyA0MDA7XHJcblxyXG4gICAgICAgIGlmIChwcm9wZXJ0aWVzLmlyaWRlc2NlbmNlVGV4dHVyZSkge1xyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9hZGVyLmxvYWRUZXh0dXJlSW5mb0FzeW5jKGAke2NvbnRleHR9L2lyaWRlc2NlbmNlVGV4dHVyZWAsIHByb3BlcnRpZXMuaXJpZGVzY2VuY2VUZXh0dXJlLCAodGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHR1cmUubmFtZSA9IGAke2JhYnlsb25NYXRlcmlhbC5uYW1lfSAoSXJpZGVzY2VuY2UgSW50ZW5zaXR5KWA7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsLmlyaWRlc2NlbmNlLnRleHR1cmUgPSB0ZXh0dXJlO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwcm9wZXJ0aWVzLmlyaWRlc2NlbmNlVGhpY2tuZXNzVGV4dHVyZSkge1xyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9hZGVyLmxvYWRUZXh0dXJlSW5mb0FzeW5jKGAke2NvbnRleHR9L2lyaWRlc2NlbmNlVGhpY2tuZXNzVGV4dHVyZWAsIHByb3BlcnRpZXMuaXJpZGVzY2VuY2VUaGlja25lc3NUZXh0dXJlLCAodGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHR1cmUubmFtZSA9IGAke2JhYnlsb25NYXRlcmlhbC5uYW1lfSAoSXJpZGVzY2VuY2UgVGhpY2tuZXNzKWA7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsLmlyaWRlc2NlbmNlLnRoaWNrbmVzc1RleHR1cmUgPSB0ZXh0dXJlO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoKSA9PiB7fSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkdMVEZMb2FkZXIuUmVnaXN0ZXJFeHRlbnNpb24oTkFNRSwgKGxvYWRlcikgPT4gbmV3IEtIUl9tYXRlcmlhbHNfaXJpZGVzY2VuY2UobG9hZGVyKSk7XHJcbiIsImltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xyXG5pbXBvcnQgeyBDb2xvcjMgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLmNvbG9yXCI7XHJcbmltcG9ydCB7IFBCUk1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1BCUi9wYnJNYXRlcmlhbFwiO1xyXG5pbXBvcnQgdHlwZSB7IE1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL21hdGVyaWFsXCI7XHJcblxyXG5pbXBvcnQgdHlwZSB7IElNYXRlcmlhbCB9IGZyb20gXCIuLi9nbFRGTG9hZGVySW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQgdHlwZSB7IElHTFRGTG9hZGVyRXh0ZW5zaW9uIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJFeHRlbnNpb25cIjtcclxuaW1wb3J0IHsgR0xURkxvYWRlciB9IGZyb20gXCIuLi9nbFRGTG9hZGVyXCI7XHJcbmltcG9ydCB0eXBlIHsgSUtIUk1hdGVyaWFsc1BiclNwZWN1bGFyR2xvc3NpbmVzcyB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuXHJcbmNvbnN0IE5BTUUgPSBcIktIUl9tYXRlcmlhbHNfcGJyU3BlY3VsYXJHbG9zc2luZXNzXCI7XHJcblxyXG4vKipcclxuICogW1NwZWNpZmljYXRpb25dKGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9ibG9iL21haW4vZXh0ZW5zaW9ucy8yLjAvQXJjaGl2ZWQvS0hSX21hdGVyaWFsc19wYnJTcGVjdWxhckdsb3NzaW5lc3MvUkVBRE1FLm1kKVxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgY2xhc3MgS0hSX21hdGVyaWFsc19wYnJTcGVjdWxhckdsb3NzaW5lc3MgaW1wbGVtZW50cyBJR0xURkxvYWRlckV4dGVuc2lvbiB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBuYW1lIG9mIHRoaXMgZXh0ZW5zaW9uLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZSA9IE5BTUU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgZW5hYmxlZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGVuYWJsZWQ6IGJvb2xlYW47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIGEgbnVtYmVyIHRoYXQgZGV0ZXJtaW5lcyB0aGUgb3JkZXIgdGhlIGV4dGVuc2lvbnMgYXJlIGFwcGxpZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvcmRlciA9IDIwMDtcclxuXHJcbiAgICBwcml2YXRlIF9sb2FkZXI6IEdMVEZMb2FkZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobG9hZGVyOiBHTFRGTG9hZGVyKSB7XHJcbiAgICAgICAgdGhpcy5fbG9hZGVyID0gbG9hZGVyO1xyXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRoaXMuX2xvYWRlci5pc0V4dGVuc2lvblVzZWQoTkFNRSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgKHRoaXMuX2xvYWRlciBhcyBhbnkpID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZE1hdGVyaWFsUHJvcGVydGllc0FzeW5jKGNvbnRleHQ6IHN0cmluZywgbWF0ZXJpYWw6IElNYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCk6IE51bGxhYmxlPFByb21pc2U8dm9pZD4+IHtcclxuICAgICAgICByZXR1cm4gR0xURkxvYWRlci5Mb2FkRXh0ZW5zaW9uQXN5bmM8SUtIUk1hdGVyaWFsc1BiclNwZWN1bGFyR2xvc3NpbmVzcz4oY29udGV4dCwgbWF0ZXJpYWwsIHRoaXMubmFtZSwgKGV4dGVuc2lvbkNvbnRleHQsIGV4dGVuc2lvbikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9taXNlcyA9IG5ldyBBcnJheTxQcm9taXNlPGFueT4+KCk7XHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5fbG9hZGVyLmxvYWRNYXRlcmlhbEJhc2VQcm9wZXJ0aWVzQXN5bmMoY29udGV4dCwgbWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbCkpO1xyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMuX2xvYWRTcGVjdWxhckdsb3NzaW5lc3NQcm9wZXJ0aWVzQXN5bmMoZXh0ZW5zaW9uQ29udGV4dCwgbWF0ZXJpYWwsIGV4dGVuc2lvbiwgYmFieWxvbk1hdGVyaWFsKSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvYWRlci5sb2FkTWF0ZXJpYWxBbHBoYVByb3BlcnRpZXMoY29udGV4dCwgbWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbCk7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoKSA9PiB7fSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZFNwZWN1bGFyR2xvc3NpbmVzc1Byb3BlcnRpZXNBc3luYyhjb250ZXh0OiBzdHJpbmcsIG1hdGVyaWFsOiBJTWF0ZXJpYWwsIHByb3BlcnRpZXM6IElLSFJNYXRlcmlhbHNQYnJTcGVjdWxhckdsb3NzaW5lc3MsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBpZiAoIShiYWJ5bG9uTWF0ZXJpYWwgaW5zdGFuY2VvZiBQQlJNYXRlcmlhbCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2NvbnRleHR9OiBNYXRlcmlhbCB0eXBlIG5vdCBzdXBwb3J0ZWRgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gbmV3IEFycmF5PFByb21pc2U8YW55Pj4oKTtcclxuXHJcbiAgICAgICAgYmFieWxvbk1hdGVyaWFsLm1ldGFsbGljID0gbnVsbDtcclxuICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwucm91Z2huZXNzID0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKHByb3BlcnRpZXMuZGlmZnVzZUZhY3Rvcikge1xyXG4gICAgICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwuYWxiZWRvQ29sb3IgPSBDb2xvcjMuRnJvbUFycmF5KHByb3BlcnRpZXMuZGlmZnVzZUZhY3Rvcik7XHJcbiAgICAgICAgICAgIGJhYnlsb25NYXRlcmlhbC5hbHBoYSA9IHByb3BlcnRpZXMuZGlmZnVzZUZhY3RvclszXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwuYWxiZWRvQ29sb3IgPSBDb2xvcjMuV2hpdGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJhYnlsb25NYXRlcmlhbC5yZWZsZWN0aXZpdHlDb2xvciA9IHByb3BlcnRpZXMuc3BlY3VsYXJGYWN0b3IgPyBDb2xvcjMuRnJvbUFycmF5KHByb3BlcnRpZXMuc3BlY3VsYXJGYWN0b3IpIDogQ29sb3IzLldoaXRlKCk7XHJcbiAgICAgICAgYmFieWxvbk1hdGVyaWFsLm1pY3JvU3VyZmFjZSA9IHByb3BlcnRpZXMuZ2xvc3NpbmVzc0ZhY3RvciA9PSB1bmRlZmluZWQgPyAxIDogcHJvcGVydGllcy5nbG9zc2luZXNzRmFjdG9yO1xyXG5cclxuICAgICAgICBpZiAocHJvcGVydGllcy5kaWZmdXNlVGV4dHVyZSkge1xyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9hZGVyLmxvYWRUZXh0dXJlSW5mb0FzeW5jKGAke2NvbnRleHR9L2RpZmZ1c2VUZXh0dXJlYCwgcHJvcGVydGllcy5kaWZmdXNlVGV4dHVyZSwgKHRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlLm5hbWUgPSBgJHtiYWJ5bG9uTWF0ZXJpYWwubmFtZX0gKERpZmZ1c2UpYDtcclxuICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwuYWxiZWRvVGV4dHVyZSA9IHRleHR1cmU7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHByb3BlcnRpZXMuc3BlY3VsYXJHbG9zc2luZXNzVGV4dHVyZSkge1xyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9hZGVyLmxvYWRUZXh0dXJlSW5mb0FzeW5jKGAke2NvbnRleHR9L3NwZWN1bGFyR2xvc3NpbmVzc1RleHR1cmVgLCBwcm9wZXJ0aWVzLnNwZWN1bGFyR2xvc3NpbmVzc1RleHR1cmUsICh0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dHVyZS5uYW1lID0gYCR7YmFieWxvbk1hdGVyaWFsLm5hbWV9IChTcGVjdWxhciBHbG9zc2luZXNzKWA7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsLnJlZmxlY3Rpdml0eVRleHR1cmUgPSB0ZXh0dXJlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhYnlsb25NYXRlcmlhbC5yZWZsZWN0aXZpdHlUZXh0dXJlLmhhc0FscGhhID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwudXNlTWljcm9TdXJmYWNlRnJvbVJlZmxlY3Rpdml0eU1hcEFscGhhID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoKSA9PiB7fSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkdMVEZMb2FkZXIuUmVnaXN0ZXJFeHRlbnNpb24oTkFNRSwgKGxvYWRlcikgPT4gbmV3IEtIUl9tYXRlcmlhbHNfcGJyU3BlY3VsYXJHbG9zc2luZXNzKGxvYWRlcikpO1xyXG4iLCJpbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcImNvcmUvdHlwZXNcIjtcclxuaW1wb3J0IHsgUEJSTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvUEJSL3Bick1hdGVyaWFsXCI7XHJcbmltcG9ydCB0eXBlIHsgTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvbWF0ZXJpYWxcIjtcclxuXHJcbmltcG9ydCB0eXBlIHsgSU1hdGVyaWFsLCBJVGV4dHVyZUluZm8gfSBmcm9tIFwiLi4vZ2xURkxvYWRlckludGVyZmFjZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBJR0xURkxvYWRlckV4dGVuc2lvbiB9IGZyb20gXCIuLi9nbFRGTG9hZGVyRXh0ZW5zaW9uXCI7XHJcbmltcG9ydCB7IEdMVEZMb2FkZXIgfSBmcm9tIFwiLi4vZ2xURkxvYWRlclwiO1xyXG5pbXBvcnQgeyBDb2xvcjMgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLmNvbG9yXCI7XHJcbmltcG9ydCB0eXBlIHsgSUtIUk1hdGVyaWFsc1NoZWVuIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5cclxuY29uc3QgTkFNRSA9IFwiS0hSX21hdGVyaWFsc19zaGVlblwiO1xyXG5cclxuLyoqXHJcbiAqIFtTcGVjaWZpY2F0aW9uXShodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi9tYWluL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX21hdGVyaWFsc19zaGVlbi9SRUFETUUubWQpXHJcbiAqIFtQbGF5Z3JvdW5kIFNhbXBsZV0oaHR0cHM6Ly93d3cuYmFieWxvbmpzLXBsYXlncm91bmQuY29tL2ZyYW1lLmh0bWwjQk5JWlg2IzQpXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBjbGFzcyBLSFJfbWF0ZXJpYWxzX3NoZWVuIGltcGxlbWVudHMgSUdMVEZMb2FkZXJFeHRlbnNpb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGlzIGV4dGVuc2lvbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBOQU1FO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIGVuYWJsZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBlbmFibGVkOiBib29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyBhIG51bWJlciB0aGF0IGRldGVybWluZXMgdGhlIG9yZGVyIHRoZSBleHRlbnNpb25zIGFyZSBhcHBsaWVkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb3JkZXIgPSAxOTA7XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZGVyOiBHTFRGTG9hZGVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGxvYWRlcjogR0xURkxvYWRlcikge1xyXG4gICAgICAgIHRoaXMuX2xvYWRlciA9IGxvYWRlcjtcclxuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0aGlzLl9sb2FkZXIuaXNFeHRlbnNpb25Vc2VkKE5BTUUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge1xyXG4gICAgICAgICh0aGlzLl9sb2FkZXIgYXMgYW55KSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWRNYXRlcmlhbFByb3BlcnRpZXNBc3luYyhjb250ZXh0OiBzdHJpbmcsIG1hdGVyaWFsOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBOdWxsYWJsZTxQcm9taXNlPHZvaWQ+PiB7XHJcbiAgICAgICAgcmV0dXJuIEdMVEZMb2FkZXIuTG9hZEV4dGVuc2lvbkFzeW5jPElLSFJNYXRlcmlhbHNTaGVlbj4oY29udGV4dCwgbWF0ZXJpYWwsIHRoaXMubmFtZSwgKGV4dGVuc2lvbkNvbnRleHQsIGV4dGVuc2lvbikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9taXNlcyA9IG5ldyBBcnJheTxQcm9taXNlPGFueT4+KCk7XHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5fbG9hZGVyLmxvYWRNYXRlcmlhbFByb3BlcnRpZXNBc3luYyhjb250ZXh0LCBtYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsKSk7XHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5fbG9hZFNoZWVuUHJvcGVydGllc0FzeW5jKGV4dGVuc2lvbkNvbnRleHQsIGV4dGVuc2lvbiwgYmFieWxvbk1hdGVyaWFsKSk7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoKSA9PiB7fSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZFNoZWVuUHJvcGVydGllc0FzeW5jKGNvbnRleHQ6IHN0cmluZywgcHJvcGVydGllczogSUtIUk1hdGVyaWFsc1NoZWVuLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgaWYgKCEoYmFieWxvbk1hdGVyaWFsIGluc3RhbmNlb2YgUEJSTWF0ZXJpYWwpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtjb250ZXh0fTogTWF0ZXJpYWwgdHlwZSBub3Qgc3VwcG9ydGVkYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBwcm9taXNlcyA9IG5ldyBBcnJheTxQcm9taXNlPGFueT4+KCk7XHJcblxyXG4gICAgICAgIGJhYnlsb25NYXRlcmlhbC5zaGVlbi5pc0VuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIGJhYnlsb25NYXRlcmlhbC5zaGVlbi5pbnRlbnNpdHkgPSAxO1xyXG5cclxuICAgICAgICBpZiAocHJvcGVydGllcy5zaGVlbkNvbG9yRmFjdG9yICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwuc2hlZW4uY29sb3IgPSBDb2xvcjMuRnJvbUFycmF5KHByb3BlcnRpZXMuc2hlZW5Db2xvckZhY3Rvcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsLnNoZWVuLmNvbG9yID0gQ29sb3IzLkJsYWNrKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocHJvcGVydGllcy5zaGVlbkNvbG9yVGV4dHVyZSkge1xyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9hZGVyLmxvYWRUZXh0dXJlSW5mb0FzeW5jKGAke2NvbnRleHR9L3NoZWVuQ29sb3JUZXh0dXJlYCwgcHJvcGVydGllcy5zaGVlbkNvbG9yVGV4dHVyZSwgKHRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlLm5hbWUgPSBgJHtiYWJ5bG9uTWF0ZXJpYWwubmFtZX0gKFNoZWVuIENvbG9yKWA7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsLnNoZWVuLnRleHR1cmUgPSB0ZXh0dXJlO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwcm9wZXJ0aWVzLnNoZWVuUm91Z2huZXNzRmFjdG9yICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsLnNoZWVuLnJvdWdobmVzcyA9IHByb3BlcnRpZXMuc2hlZW5Sb3VnaG5lc3NGYWN0b3I7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsLnNoZWVuLnJvdWdobmVzcyA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocHJvcGVydGllcy5zaGVlblJvdWdobmVzc1RleHR1cmUpIHtcclxuICAgICAgICAgICAgKHByb3BlcnRpZXMuc2hlZW5Sb3VnaG5lc3NUZXh0dXJlIGFzIElUZXh0dXJlSW5mbykubm9uQ29sb3JEYXRhID0gdHJ1ZTtcclxuICAgICAgICAgICAgcHJvbWlzZXMucHVzaChcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRlci5sb2FkVGV4dHVyZUluZm9Bc3luYyhgJHtjb250ZXh0fS9zaGVlblJvdWdobmVzc1RleHR1cmVgLCBwcm9wZXJ0aWVzLnNoZWVuUm91Z2huZXNzVGV4dHVyZSwgKHRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlLm5hbWUgPSBgJHtiYWJ5bG9uTWF0ZXJpYWwubmFtZX0gKFNoZWVuIFJvdWdobmVzcylgO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhYnlsb25NYXRlcmlhbC5zaGVlbi50ZXh0dXJlUm91Z2huZXNzID0gdGV4dHVyZTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwuc2hlZW4uYWxiZWRvU2NhbGluZyA9IHRydWU7XHJcbiAgICAgICAgYmFieWxvbk1hdGVyaWFsLnNoZWVuLnVzZVJvdWdobmVzc0Zyb21NYWluVGV4dHVyZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4ge30pO1xyXG4gICAgfVxyXG59XHJcblxyXG5HTFRGTG9hZGVyLlJlZ2lzdGVyRXh0ZW5zaW9uKE5BTUUsIChsb2FkZXIpID0+IG5ldyBLSFJfbWF0ZXJpYWxzX3NoZWVuKGxvYWRlcikpO1xyXG4iLCJpbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcImNvcmUvdHlwZXNcIjtcclxuaW1wb3J0IHsgUEJSTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvUEJSL3Bick1hdGVyaWFsXCI7XHJcbmltcG9ydCB0eXBlIHsgTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvbWF0ZXJpYWxcIjtcclxuXHJcbmltcG9ydCB0eXBlIHsgSU1hdGVyaWFsLCBJVGV4dHVyZUluZm8gfSBmcm9tIFwiLi4vZ2xURkxvYWRlckludGVyZmFjZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBJR0xURkxvYWRlckV4dGVuc2lvbiB9IGZyb20gXCIuLi9nbFRGTG9hZGVyRXh0ZW5zaW9uXCI7XHJcbmltcG9ydCB7IEdMVEZMb2FkZXIgfSBmcm9tIFwiLi4vZ2xURkxvYWRlclwiO1xyXG5pbXBvcnQgeyBDb2xvcjMgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLmNvbG9yXCI7XHJcbmltcG9ydCB0eXBlIHsgSUtIUk1hdGVyaWFsc1NwZWN1bGFyIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5cclxuY29uc3QgTkFNRSA9IFwiS0hSX21hdGVyaWFsc19zcGVjdWxhclwiO1xyXG5cclxuLyoqXHJcbiAqIFtTcGVjaWZpY2F0aW9uXShodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi9tYWluL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX21hdGVyaWFsc19zcGVjdWxhci9SRUFETUUubWQpXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBjbGFzcyBLSFJfbWF0ZXJpYWxzX3NwZWN1bGFyIGltcGxlbWVudHMgSUdMVEZMb2FkZXJFeHRlbnNpb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGlzIGV4dGVuc2lvbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBOQU1FO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIGVuYWJsZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBlbmFibGVkOiBib29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyBhIG51bWJlciB0aGF0IGRldGVybWluZXMgdGhlIG9yZGVyIHRoZSBleHRlbnNpb25zIGFyZSBhcHBsaWVkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb3JkZXIgPSAxOTA7XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZGVyOiBHTFRGTG9hZGVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGxvYWRlcjogR0xURkxvYWRlcikge1xyXG4gICAgICAgIHRoaXMuX2xvYWRlciA9IGxvYWRlcjtcclxuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0aGlzLl9sb2FkZXIuaXNFeHRlbnNpb25Vc2VkKE5BTUUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge1xyXG4gICAgICAgICh0aGlzLl9sb2FkZXIgYXMgYW55KSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWRNYXRlcmlhbFByb3BlcnRpZXNBc3luYyhjb250ZXh0OiBzdHJpbmcsIG1hdGVyaWFsOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBOdWxsYWJsZTxQcm9taXNlPHZvaWQ+PiB7XHJcbiAgICAgICAgcmV0dXJuIEdMVEZMb2FkZXIuTG9hZEV4dGVuc2lvbkFzeW5jPElLSFJNYXRlcmlhbHNTcGVjdWxhcj4oY29udGV4dCwgbWF0ZXJpYWwsIHRoaXMubmFtZSwgKGV4dGVuc2lvbkNvbnRleHQsIGV4dGVuc2lvbikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9taXNlcyA9IG5ldyBBcnJheTxQcm9taXNlPGFueT4+KCk7XHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5fbG9hZGVyLmxvYWRNYXRlcmlhbFByb3BlcnRpZXNBc3luYyhjb250ZXh0LCBtYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsKSk7XHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5fbG9hZFNwZWN1bGFyUHJvcGVydGllc0FzeW5jKGV4dGVuc2lvbkNvbnRleHQsIGV4dGVuc2lvbiwgYmFieWxvbk1hdGVyaWFsKSk7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoKSA9PiB7fSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZFNwZWN1bGFyUHJvcGVydGllc0FzeW5jKGNvbnRleHQ6IHN0cmluZywgcHJvcGVydGllczogSUtIUk1hdGVyaWFsc1NwZWN1bGFyLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgaWYgKCEoYmFieWxvbk1hdGVyaWFsIGluc3RhbmNlb2YgUEJSTWF0ZXJpYWwpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtjb250ZXh0fTogTWF0ZXJpYWwgdHlwZSBub3Qgc3VwcG9ydGVkYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBwcm9taXNlcyA9IG5ldyBBcnJheTxQcm9taXNlPGFueT4+KCk7XHJcblxyXG4gICAgICAgIGlmIChwcm9wZXJ0aWVzLnNwZWN1bGFyRmFjdG9yICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsLm1ldGFsbGljRjBGYWN0b3IgPSBwcm9wZXJ0aWVzLnNwZWN1bGFyRmFjdG9yO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHByb3BlcnRpZXMuc3BlY3VsYXJDb2xvckZhY3RvciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGJhYnlsb25NYXRlcmlhbC5tZXRhbGxpY1JlZmxlY3RhbmNlQ29sb3IgPSBDb2xvcjMuRnJvbUFycmF5KHByb3BlcnRpZXMuc3BlY3VsYXJDb2xvckZhY3Rvcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocHJvcGVydGllcy5zcGVjdWxhclRleHR1cmUpIHtcclxuICAgICAgICAgICAgKHByb3BlcnRpZXMuc3BlY3VsYXJUZXh0dXJlIGFzIElUZXh0dXJlSW5mbykubm9uQ29sb3JEYXRhID0gdHJ1ZTtcclxuICAgICAgICAgICAgcHJvbWlzZXMucHVzaChcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRlci5sb2FkVGV4dHVyZUluZm9Bc3luYyhgJHtjb250ZXh0fS9zcGVjdWxhclRleHR1cmVgLCBwcm9wZXJ0aWVzLnNwZWN1bGFyVGV4dHVyZSwgKHRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlLm5hbWUgPSBgJHtiYWJ5bG9uTWF0ZXJpYWwubmFtZX0gKFNwZWN1bGFyIEYwIFN0cmVuZ3RoKWA7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsLm1ldGFsbGljUmVmbGVjdGFuY2VUZXh0dXJlID0gdGV4dHVyZTtcclxuICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwudXNlT25seU1ldGFsbGljRnJvbU1ldGFsbGljUmVmbGVjdGFuY2VUZXh0dXJlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocHJvcGVydGllcy5zcGVjdWxhckNvbG9yVGV4dHVyZSkge1xyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9hZGVyLmxvYWRUZXh0dXJlSW5mb0FzeW5jKGAke2NvbnRleHR9L3NwZWN1bGFyQ29sb3JUZXh0dXJlYCwgcHJvcGVydGllcy5zcGVjdWxhckNvbG9yVGV4dHVyZSwgKHRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlLm5hbWUgPSBgJHtiYWJ5bG9uTWF0ZXJpYWwubmFtZX0gKFNwZWN1bGFyIEYwIENvbG9yKWA7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsLnJlZmxlY3RhbmNlVGV4dHVyZSA9IHRleHR1cmU7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IHt9KTtcclxuICAgIH1cclxufVxyXG5cclxuR0xURkxvYWRlci5SZWdpc3RlckV4dGVuc2lvbihOQU1FLCAobG9hZGVyKSA9PiBuZXcgS0hSX21hdGVyaWFsc19zcGVjdWxhcihsb2FkZXIpKTtcclxuIiwiaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCJjb3JlL3R5cGVzXCI7XHJcbmltcG9ydCB7IFBCUk1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1BCUi9wYnJNYXRlcmlhbFwiO1xyXG5pbXBvcnQgdHlwZSB7IE1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL21hdGVyaWFsXCI7XHJcbmltcG9ydCB0eXBlIHsgQmFzZVRleHR1cmUgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvYmFzZVRleHR1cmVcIjtcclxuaW1wb3J0IHR5cGUgeyBJTWF0ZXJpYWwsIElUZXh0dXJlSW5mbyB9IGZyb20gXCIuLi9nbFRGTG9hZGVySW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQgdHlwZSB7IElHTFRGTG9hZGVyRXh0ZW5zaW9uIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJFeHRlbnNpb25cIjtcclxuaW1wb3J0IHsgR0xURkxvYWRlciB9IGZyb20gXCIuLi9nbFRGTG9hZGVyXCI7XHJcbmltcG9ydCB0eXBlIHsgSUtIUk1hdGVyaWFsc1RyYW5zbHVjZW5jeSB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuXHJcbmNvbnN0IE5BTUUgPSBcIktIUl9tYXRlcmlhbHNfdHJhbnNsdWNlbmN5XCI7XHJcblxyXG4vKipcclxuICogW1Byb3Bvc2VkIFNwZWNpZmljYXRpb25dKGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9wdWxsLzE4MjUpXHJcbiAqICEhISBFeHBlcmltZW50YWwgRXh0ZW5zaW9uIFN1YmplY3QgdG8gQ2hhbmdlcyAhISFcclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGNsYXNzIEtIUl9tYXRlcmlhbHNfdHJhbnNsdWNlbmN5IGltcGxlbWVudHMgSUdMVEZMb2FkZXJFeHRlbnNpb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGlzIGV4dGVuc2lvbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBOQU1FO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIGVuYWJsZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBlbmFibGVkOiBib29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyBhIG51bWJlciB0aGF0IGRldGVybWluZXMgdGhlIG9yZGVyIHRoZSBleHRlbnNpb25zIGFyZSBhcHBsaWVkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb3JkZXIgPSAxNzQ7XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZGVyOiBHTFRGTG9hZGVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGxvYWRlcjogR0xURkxvYWRlcikge1xyXG4gICAgICAgIHRoaXMuX2xvYWRlciA9IGxvYWRlcjtcclxuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0aGlzLl9sb2FkZXIuaXNFeHRlbnNpb25Vc2VkKE5BTUUpO1xyXG4gICAgICAgIGlmICh0aGlzLmVuYWJsZWQpIHtcclxuICAgICAgICAgICAgbG9hZGVyLnBhcmVudC50cmFuc3BhcmVuY3lBc0NvdmVyYWdlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgKHRoaXMuX2xvYWRlciBhcyBhbnkpID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZE1hdGVyaWFsUHJvcGVydGllc0FzeW5jKGNvbnRleHQ6IHN0cmluZywgbWF0ZXJpYWw6IElNYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCk6IE51bGxhYmxlPFByb21pc2U8dm9pZD4+IHtcclxuICAgICAgICByZXR1cm4gR0xURkxvYWRlci5Mb2FkRXh0ZW5zaW9uQXN5bmM8SUtIUk1hdGVyaWFsc1RyYW5zbHVjZW5jeT4oY29udGV4dCwgbWF0ZXJpYWwsIHRoaXMubmFtZSwgKGV4dGVuc2lvbkNvbnRleHQsIGV4dGVuc2lvbikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9taXNlcyA9IG5ldyBBcnJheTxQcm9taXNlPGFueT4+KCk7XHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5fbG9hZGVyLmxvYWRNYXRlcmlhbEJhc2VQcm9wZXJ0aWVzQXN5bmMoY29udGV4dCwgbWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbCkpO1xyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMuX2xvYWRlci5sb2FkTWF0ZXJpYWxQcm9wZXJ0aWVzQXN5bmMoY29udGV4dCwgbWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbCkpO1xyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMuX2xvYWRUcmFuc2x1Y2VudFByb3BlcnRpZXNBc3luYyhleHRlbnNpb25Db250ZXh0LCBtYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsLCBleHRlbnNpb24pKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IHt9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9sb2FkVHJhbnNsdWNlbnRQcm9wZXJ0aWVzQXN5bmMoY29udGV4dDogc3RyaW5nLCBtYXRlcmlhbDogSU1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsLCBleHRlbnNpb246IElLSFJNYXRlcmlhbHNUcmFuc2x1Y2VuY3kpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBpZiAoIShiYWJ5bG9uTWF0ZXJpYWwgaW5zdGFuY2VvZiBQQlJNYXRlcmlhbCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2NvbnRleHR9OiBNYXRlcmlhbCB0eXBlIG5vdCBzdXBwb3J0ZWRgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcGJyTWF0ZXJpYWwgPSBiYWJ5bG9uTWF0ZXJpYWwgYXMgUEJSTWF0ZXJpYWw7XHJcblxyXG4gICAgICAgIC8vIEVuYWJsZXMgXCJ0cmFuc2x1Y2VuY3lcIiB0ZXh0dXJlIHdoaWNoIHJlcHJlc2VudHMgZGlmZnVzZWx5LXRyYW5zbWl0dGVkIGxpZ2h0LlxyXG4gICAgICAgIHBick1hdGVyaWFsLnN1YlN1cmZhY2UuaXNUcmFuc2x1Y2VuY3lFbmFibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLy8gU2luY2UgdGhpcyBleHRlbnNpb24gbW9kZWxzIHRoaW4tc3VyZmFjZSB0cmFuc21pc3Npb24gb25seSwgd2UgbXVzdCBtYWtlIHRoZVxyXG4gICAgICAgIC8vIGludGVybmFsIElPUiA9PSAxLjAgYW5kIHNldCB0aGUgdGhpY2tuZXNzIHRvIDAuXHJcbiAgICAgICAgcGJyTWF0ZXJpYWwuc3ViU3VyZmFjZS52b2x1bWVJbmRleE9mUmVmcmFjdGlvbiA9IDEuMDtcclxuICAgICAgICBwYnJNYXRlcmlhbC5zdWJTdXJmYWNlLm1pbmltdW1UaGlja25lc3MgPSAwLjA7XHJcbiAgICAgICAgcGJyTWF0ZXJpYWwuc3ViU3VyZmFjZS5tYXhpbXVtVGhpY2tuZXNzID0gMC4wO1xyXG5cclxuICAgICAgICAvLyBBbGJlZG8gY29sb3VyIHdpbGwgdGludCB0cmFuc21pc3Npb24uXHJcbiAgICAgICAgcGJyTWF0ZXJpYWwuc3ViU3VyZmFjZS51c2VBbGJlZG9Ub1RpbnRUcmFuc2x1Y2VuY3kgPSB0cnVlO1xyXG5cclxuICAgICAgICBpZiAoZXh0ZW5zaW9uLnRyYW5zbHVjZW5jeUZhY3RvciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHBick1hdGVyaWFsLnN1YlN1cmZhY2UudHJhbnNsdWNlbmN5SW50ZW5zaXR5ID0gZXh0ZW5zaW9uLnRyYW5zbHVjZW5jeUZhY3RvcjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwYnJNYXRlcmlhbC5zdWJTdXJmYWNlLnRyYW5zbHVjZW5jeUludGVuc2l0eSA9IDAuMDtcclxuICAgICAgICAgICAgcGJyTWF0ZXJpYWwuc3ViU3VyZmFjZS5pc1RyYW5zbHVjZW5jeUVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGV4dGVuc2lvbi50cmFuc2x1Y2VuY3lUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgIChleHRlbnNpb24udHJhbnNsdWNlbmN5VGV4dHVyZSBhcyBJVGV4dHVyZUluZm8pLm5vbkNvbG9yRGF0YSA9IHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9sb2FkZXIubG9hZFRleHR1cmVJbmZvQXN5bmMoYCR7Y29udGV4dH0vdHJhbnNsdWNlbmN5VGV4dHVyZWAsIGV4dGVuc2lvbi50cmFuc2x1Y2VuY3lUZXh0dXJlKS50aGVuKCh0ZXh0dXJlOiBCYXNlVGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcGJyTWF0ZXJpYWwuc3ViU3VyZmFjZS50cmFuc2x1Y2VuY3lJbnRlbnNpdHlUZXh0dXJlID0gdGV4dHVyZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuR0xURkxvYWRlci5SZWdpc3RlckV4dGVuc2lvbihOQU1FLCAobG9hZGVyKSA9PiBuZXcgS0hSX21hdGVyaWFsc190cmFuc2x1Y2VuY3kobG9hZGVyKSk7XHJcbiIsImltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xyXG5pbXBvcnQgeyBQQlJNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9QQlIvcGJyTWF0ZXJpYWxcIjtcclxuaW1wb3J0IHR5cGUgeyBNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgdHlwZSB7IEJhc2VUZXh0dXJlIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1RleHR1cmVzL2Jhc2VUZXh0dXJlXCI7XHJcbmltcG9ydCB0eXBlIHsgSU1hdGVyaWFsLCBJVGV4dHVyZUluZm8gfSBmcm9tIFwiLi4vZ2xURkxvYWRlckludGVyZmFjZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBJR0xURkxvYWRlckV4dGVuc2lvbiB9IGZyb20gXCIuLi9nbFRGTG9hZGVyRXh0ZW5zaW9uXCI7XHJcbmltcG9ydCB7IEdMVEZMb2FkZXIgfSBmcm9tIFwiLi4vZ2xURkxvYWRlclwiO1xyXG5pbXBvcnQgdHlwZSB7IElLSFJNYXRlcmlhbHNUcmFuc21pc3Npb24gfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB0eXBlIHsgU2NlbmUgfSBmcm9tIFwiY29yZS9zY2VuZVwiO1xyXG5pbXBvcnQgdHlwZSB7IEFic3RyYWN0TWVzaCB9IGZyb20gXCJjb3JlL01lc2hlcy9hYnN0cmFjdE1lc2hcIjtcclxuaW1wb3J0IHR5cGUgeyBUZXh0dXJlIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1RleHR1cmVzL3RleHR1cmVcIjtcclxuaW1wb3J0IHsgUmVuZGVyVGFyZ2V0VGV4dHVyZSB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9UZXh0dXJlcy9yZW5kZXJUYXJnZXRUZXh0dXJlXCI7XHJcbmltcG9ydCB0eXBlIHsgT2JzZXJ2ZXIgfSBmcm9tIFwiY29yZS9NaXNjL29ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJjb3JlL01pc2Mvb2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiY29yZS9FbmdpbmVzL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBUb29scyB9IGZyb20gXCJjb3JlL01pc2MvdG9vbHNcIjtcclxuaW1wb3J0IHR5cGUgeyBDb2xvcjQgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLmNvbG9yXCI7XHJcblxyXG5pbnRlcmZhY2UgSVRyYW5zbWlzc2lvbkhlbHBlckhvbGRlciB7XHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBfdHJhbnNtaXNzaW9uSGVscGVyOiBUcmFuc21pc3Npb25IZWxwZXIgfCB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmludGVyZmFjZSBJVHJhbnNtaXNzaW9uSGVscGVyT3B0aW9ucyB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBzaXplIG9mIHRoZSByZW5kZXIgYnVmZmVycyAoZGVmYXVsdDogMTAyNClcclxuICAgICAqL1xyXG4gICAgcmVuZGVyU2l6ZTogbnVtYmVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIG51bWJlciBvZiBzYW1wbGVzIHRvIHVzZSB3aGVuIGdlbmVyYXRpbmcgdGhlIHJlbmRlciB0YXJnZXQgdGV4dHVyZSBmb3Igb3BhcXVlIG1lc2hlcyAoZGVmYXVsdDogNClcclxuICAgICAqL1xyXG4gICAgc2FtcGxlczogbnVtYmVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2NhbGUgdG8gYXBwbHkgd2hlbiBzZWxlY3RpbmcgdGhlIExPRCBsZXZlbCB0byBzYW1wbGUgdGhlIHJlZnJhY3Rpb24gdGV4dHVyZSAoZGVmYXVsdDogMSlcclxuICAgICAqL1xyXG4gICAgbG9kR2VuZXJhdGlvblNjYWxlOiBudW1iZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPZmZzZXQgdG8gYXBwbHkgd2hlbiBzZWxlY3RpbmcgdGhlIExPRCBsZXZlbCB0byBzYW1wbGUgdGhlIHJlZnJhY3Rpb24gdGV4dHVyZSAoZGVmYXVsdDogLTQpXHJcbiAgICAgKi9cclxuICAgIGxvZEdlbmVyYXRpb25PZmZzZXQ6IG51bWJlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFR5cGUgb2YgdGhlIHJlZnJhY3Rpb24gcmVuZGVyIHRhcmdldCB0ZXh0dXJlIChkZWZhdWx0OiBURVhUVVJFVFlQRV9IQUxGX0ZMT0FUKVxyXG4gICAgICovXHJcbiAgICByZW5kZXJUYXJnZXRUZXh0dXJlVHlwZTogbnVtYmVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyBpZiB0aGUgbWlwbWFwcyBmb3IgdGhlIHJlZnJhY3Rpb24gcmVuZGVyIHRhcmdldCB0ZXh0dXJlIG11c3QgYmUgZ2VuZXJhdGVkIChkZWZhdWx0OiB0cnVlKVxyXG4gICAgICovXHJcbiAgICBnZW5lcmF0ZU1pcG1hcHM6IGJvb2xlYW47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDbGVhciBjb2xvciBvZiB0aGUgb3BhcXVlIHRleHR1cmUuIElmIG5vdCBwcm92aWRlZCwgdXNlIHRoZSBzY2VuZSBjbGVhciBjb2xvciAod2hpY2ggd2lsbCBiZSBjb252ZXJ0ZWQgdG8gbGluZWFyIHNwYWNlKS5cclxuICAgICAqIElmIHByb3ZpZGVkLCBzaG91bGQgYmUgaW4gbGluZWFyIHNwYWNlXHJcbiAgICAgKi9cclxuICAgIGNsZWFyQ29sb3I/OiBDb2xvcjQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIGNsYXNzIHRvIGhhbmRsZSBzZXR0aW5nIHVwIHRoZSByZW5kZXJpbmcgb2Ygb3BhcXVlIG9iamVjdHMgdG8gYmUgc2hvd24gdGhyb3VnaCB0cmFuc21pc3NpdmUgb2JqZWN0cy5cclxuICovXHJcbmNsYXNzIFRyYW5zbWlzc2lvbkhlbHBlciB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgdGhlIGRlZmF1bHQgb3B0aW9ucyBmb3IgdGhlIGhlbHBlci5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX0dldERlZmF1bHRPcHRpb25zKCk6IElUcmFuc21pc3Npb25IZWxwZXJPcHRpb25zIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByZW5kZXJTaXplOiAxMDI0LFxyXG4gICAgICAgICAgICBzYW1wbGVzOiA0LFxyXG4gICAgICAgICAgICBsb2RHZW5lcmF0aW9uU2NhbGU6IDEsXHJcbiAgICAgICAgICAgIGxvZEdlbmVyYXRpb25PZmZzZXQ6IC00LFxyXG4gICAgICAgICAgICByZW5kZXJUYXJnZXRUZXh0dXJlVHlwZTogQ29uc3RhbnRzLlRFWFRVUkVUWVBFX0hBTEZfRkxPQVQsXHJcbiAgICAgICAgICAgIGdlbmVyYXRlTWlwbWFwczogdHJ1ZSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RvcmVzIHRoZSBjcmVhdGlvbiBvcHRpb25zLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9zY2VuZTogU2NlbmUgJiBJVHJhbnNtaXNzaW9uSGVscGVySG9sZGVyO1xyXG5cclxuICAgIHByaXZhdGUgX29wdGlvbnM6IElUcmFuc21pc3Npb25IZWxwZXJPcHRpb25zO1xyXG5cclxuICAgIHByaXZhdGUgX29wYXF1ZVJlbmRlclRhcmdldDogTnVsbGFibGU8UmVuZGVyVGFyZ2V0VGV4dHVyZT4gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfb3BhcXVlTWVzaGVzQ2FjaGU6IEFic3RyYWN0TWVzaFtdID0gW107XHJcbiAgICBwcml2YXRlIF90cmFuc3BhcmVudE1lc2hlc0NhY2hlOiBBYnN0cmFjdE1lc2hbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBfbWF0ZXJpYWxPYnNlcnZlcnM6IHsgW2lkOiBzdHJpbmddOiBOdWxsYWJsZTxPYnNlcnZlcjxBYnN0cmFjdE1lc2g+PiB9ID0ge307XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG9ic2VydmFibGUgd2lsbCBiZSBub3RpZmllZCB3aXRoIGFueSBlcnJvciBkdXJpbmcgdGhlIGNyZWF0aW9uIG9mIHRoZSBlbnZpcm9ubWVudCxcclxuICAgICAqIG1haW5seSB0ZXh0dXJlIGNyZWF0aW9uIGVycm9ycy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIG9uRXJyb3JPYnNlcnZhYmxlOiBPYnNlcnZhYmxlPHsgbWVzc2FnZT86IHN0cmluZzsgZXhjZXB0aW9uPzogYW55IH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogY29uc3RydWN0b3JcclxuICAgICAqIEBwYXJhbSBvcHRpb25zIERlZmluZXMgdGhlIG9wdGlvbnMgd2Ugd2FudCB0byBjdXN0b21pemUgdGhlIGhlbHBlclxyXG4gICAgICogQHBhcmFtIHNjZW5lIFRoZSBzY2VuZSB0byBhZGQgdGhlIG1hdGVyaWFsIHRvXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IFBhcnRpYWw8SVRyYW5zbWlzc2lvbkhlbHBlck9wdGlvbnM+LCBzY2VuZTogU2NlbmUpIHtcclxuICAgICAgICB0aGlzLl9vcHRpb25zID0ge1xyXG4gICAgICAgICAgICAuLi5UcmFuc21pc3Npb25IZWxwZXIuX0dldERlZmF1bHRPcHRpb25zKCksXHJcbiAgICAgICAgICAgIC4uLm9wdGlvbnMsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl9zY2VuZSA9IHNjZW5lIGFzIGFueTtcclxuICAgICAgICB0aGlzLl9zY2VuZS5fdHJhbnNtaXNzaW9uSGVscGVyID0gdGhpcztcclxuXHJcbiAgICAgICAgdGhpcy5vbkVycm9yT2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlKCk7XHJcbiAgICAgICAgdGhpcy5fc2NlbmUub25EaXNwb3NlT2JzZXJ2YWJsZS5hZGRPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5kaXNwb3NlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuX3BhcnNlU2NlbmUoKTtcclxuICAgICAgICB0aGlzLl9zZXR1cFJlbmRlclRhcmdldHMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZXMgdGhlIGJhY2tncm91bmQgYWNjb3JkaW5nIHRvIHRoZSBuZXcgb3B0aW9uc1xyXG4gICAgICogQHBhcmFtIG9wdGlvbnNcclxuICAgICAqL1xyXG4gICAgcHVibGljIHVwZGF0ZU9wdGlvbnMob3B0aW9uczogUGFydGlhbDxJVHJhbnNtaXNzaW9uSGVscGVyT3B0aW9ucz4pIHtcclxuICAgICAgICAvLyBGaXJzdCBjaGVjayBpZiBhbnkgb3B0aW9ucyBhcmUgYWN0dWFsbHkgYmVpbmcgY2hhbmdlZC4gSWYgbm90LCBleGl0LlxyXG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlcyA9IE9iamVjdC5rZXlzKG9wdGlvbnMpLmZpbHRlcigoa2V5OiBzdHJpbmcpID0+ICh0aGlzLl9vcHRpb25zIGFzIGFueSlba2V5XSAhPT0gKG9wdGlvbnMgYXMgYW55KVtrZXldKTtcclxuICAgICAgICBpZiAoIW5ld1ZhbHVlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbmV3T3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgLi4udGhpcy5fb3B0aW9ucyxcclxuICAgICAgICAgICAgLi4ub3B0aW9ucyxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBvbGRPcHRpb25zID0gdGhpcy5fb3B0aW9ucztcclxuICAgICAgICB0aGlzLl9vcHRpb25zID0gbmV3T3B0aW9ucztcclxuXHJcbiAgICAgICAgLy8gSWYgc2l6ZSBjaGFuZ2VzLCByZWNyZWF0ZSBldmVyeXRoaW5nXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBuZXdPcHRpb25zLnJlbmRlclNpemUgIT09IG9sZE9wdGlvbnMucmVuZGVyU2l6ZSB8fFxyXG4gICAgICAgICAgICBuZXdPcHRpb25zLnJlbmRlclRhcmdldFRleHR1cmVUeXBlICE9PSBvbGRPcHRpb25zLnJlbmRlclRhcmdldFRleHR1cmVUeXBlIHx8XHJcbiAgICAgICAgICAgIG5ld09wdGlvbnMuZ2VuZXJhdGVNaXBtYXBzICE9PSBvbGRPcHRpb25zLmdlbmVyYXRlTWlwbWFwcyB8fFxyXG4gICAgICAgICAgICAhdGhpcy5fb3BhcXVlUmVuZGVyVGFyZ2V0XHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NldHVwUmVuZGVyVGFyZ2V0cygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX29wYXF1ZVJlbmRlclRhcmdldC5zYW1wbGVzID0gbmV3T3B0aW9ucy5zYW1wbGVzO1xyXG4gICAgICAgICAgICB0aGlzLl9vcGFxdWVSZW5kZXJUYXJnZXQubG9kR2VuZXJhdGlvblNjYWxlID0gbmV3T3B0aW9ucy5sb2RHZW5lcmF0aW9uU2NhbGU7XHJcbiAgICAgICAgICAgIHRoaXMuX29wYXF1ZVJlbmRlclRhcmdldC5sb2RHZW5lcmF0aW9uT2Zmc2V0ID0gbmV3T3B0aW9ucy5sb2RHZW5lcmF0aW9uT2Zmc2V0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIG9wYXF1ZSByZW5kZXIgdGFyZ2V0IHRleHR1cmUgb3IgbnVsbCBpZiBub3QgYXZhaWxhYmxlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0T3BhcXVlVGFyZ2V0KCk6IE51bGxhYmxlPFRleHR1cmU+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fb3BhcXVlUmVuZGVyVGFyZ2V0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3Nob3VsZFJlbmRlckFzVHJhbnNtaXNzaW9uKG1hdGVyaWFsOiBOdWxsYWJsZTxNYXRlcmlhbD4pOiBib29sZWFuIHtcclxuICAgICAgICBpZiAoIW1hdGVyaWFsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1hdGVyaWFsIGluc3RhbmNlb2YgUEJSTWF0ZXJpYWwgJiYgbWF0ZXJpYWwuc3ViU3VyZmFjZS5pc1JlZnJhY3Rpb25FbmFibGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfYWRkTWVzaChtZXNoOiBBYnN0cmFjdE1lc2gpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9tYXRlcmlhbE9ic2VydmVyc1ttZXNoLnVuaXF1ZUlkXSA9IG1lc2gub25NYXRlcmlhbENoYW5nZWRPYnNlcnZhYmxlLmFkZCh0aGlzLl9vbk1lc2hNYXRlcmlhbENoYW5nZWQuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIC8vIHdlIG5lZWQgdG8gZGVmZXIgdGhlIHByb2Nlc3NpbmcgYmVjYXVzZSBfYWRkTWVzaCBtYXkgYmUgY2FsbGVkIGFzIHBhcnQgYXMgYW4gaW5zdGFuY2UgbWVzaCBjcmVhdGlvbiwgaW4gd2hpY2ggY2FzZSBzb21lXHJcbiAgICAgICAgLy8gaW50ZXJuYWwgcHJvcGVydGllcyBhcmUgbm90IHNldHVwIHlldCwgbGlrZSBfc291cmNlTWVzaCAobmVlZGVkIHdoZW4gZG9pbmcgbWVzaC5tYXRlcmlhbCBiZWxvdylcclxuICAgICAgICBUb29scy5TZXRJbW1lZGlhdGUoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fc2hvdWxkUmVuZGVyQXNUcmFuc21pc3Npb24obWVzaC5tYXRlcmlhbCkpIHtcclxuICAgICAgICAgICAgICAgIChtZXNoLm1hdGVyaWFsIGFzIFBCUk1hdGVyaWFsKS5yZWZyYWN0aW9uVGV4dHVyZSA9IHRoaXMuX29wYXF1ZVJlbmRlclRhcmdldDtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl90cmFuc3BhcmVudE1lc2hlc0NhY2hlLmluZGV4T2YobWVzaCkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdHJhbnNwYXJlbnRNZXNoZXNDYWNoZS5wdXNoKG1lc2gpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX29wYXF1ZU1lc2hlc0NhY2hlLmluZGV4T2YobWVzaCkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fb3BhcXVlTWVzaGVzQ2FjaGUucHVzaChtZXNoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3JlbW92ZU1lc2gobWVzaDogQWJzdHJhY3RNZXNoKTogdm9pZCB7XHJcbiAgICAgICAgbWVzaC5vbk1hdGVyaWFsQ2hhbmdlZE9ic2VydmFibGUucmVtb3ZlKHRoaXMuX21hdGVyaWFsT2JzZXJ2ZXJzW21lc2gudW5pcXVlSWRdKTtcclxuICAgICAgICBkZWxldGUgdGhpcy5fbWF0ZXJpYWxPYnNlcnZlcnNbbWVzaC51bmlxdWVJZF07XHJcbiAgICAgICAgbGV0IGlkeCA9IHRoaXMuX3RyYW5zcGFyZW50TWVzaGVzQ2FjaGUuaW5kZXhPZihtZXNoKTtcclxuICAgICAgICBpZiAoaWR4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLl90cmFuc3BhcmVudE1lc2hlc0NhY2hlLnNwbGljZShpZHgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZHggPSB0aGlzLl9vcGFxdWVNZXNoZXNDYWNoZS5pbmRleE9mKG1lc2gpO1xyXG4gICAgICAgIGlmIChpZHggIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX29wYXF1ZU1lc2hlc0NhY2hlLnNwbGljZShpZHgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9wYXJzZVNjZW5lKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3NjZW5lLm1lc2hlcy5mb3JFYWNoKHRoaXMuX2FkZE1lc2guYmluZCh0aGlzKSk7XHJcbiAgICAgICAgLy8gTGlzdGVuIGZvciB3aGVuIGEgbWVzaCBpcyBhZGRlZCB0byB0aGUgc2NlbmUgYW5kIGFkZCBpdCB0byBvdXIgY2FjaGUgbGlzdHMuXHJcbiAgICAgICAgdGhpcy5fc2NlbmUub25OZXdNZXNoQWRkZWRPYnNlcnZhYmxlLmFkZCh0aGlzLl9hZGRNZXNoLmJpbmQodGhpcykpO1xyXG4gICAgICAgIC8vIExpc3RlbiBmb3Igd2hlbiBhIG1lc2ggaXMgcmVtb3ZlZCBmcm9tIHRvIHRoZSBzY2VuZSBhbmQgcmVtb3ZlIGl0IGZyb20gb3VyIGNhY2hlIGxpc3RzLlxyXG4gICAgICAgIHRoaXMuX3NjZW5lLm9uTWVzaFJlbW92ZWRPYnNlcnZhYmxlLmFkZCh0aGlzLl9yZW1vdmVNZXNoLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFdoZW4gb25lIG9mIHRoZSBtZXNoZXMgaW4gdGhlIHNjZW5lIGhhcyBpdHMgbWF0ZXJpYWwgY2hhbmdlZCwgbWFrZSBzdXJlIHRoYXQgaXQncyBpbiB0aGUgY29ycmVjdCBjYWNoZSBsaXN0LlxyXG4gICAgcHJpdmF0ZSBfb25NZXNoTWF0ZXJpYWxDaGFuZ2VkKG1lc2g6IEFic3RyYWN0TWVzaCkge1xyXG4gICAgICAgIGNvbnN0IHRyYW5zcGFyZW50SWR4ID0gdGhpcy5fdHJhbnNwYXJlbnRNZXNoZXNDYWNoZS5pbmRleE9mKG1lc2gpO1xyXG4gICAgICAgIGNvbnN0IG9wYXF1ZUlkeCA9IHRoaXMuX29wYXF1ZU1lc2hlc0NhY2hlLmluZGV4T2YobWVzaCk7XHJcblxyXG4gICAgICAgIC8vIElmIHRoZSBtYXRlcmlhbCBpcyB0cmFuc3BhcmVudCwgbWFrZSBzdXJlIHRoYXQgaXQncyBhZGRlZCB0byB0aGUgdHJhbnNwYXJlbnQgbGlzdCBhbmQgcmVtb3ZlZCBmcm9tIHRoZSBvcGFxdWUgbGlzdFxyXG4gICAgICAgIGNvbnN0IHVzZVRyYW5zbWlzc2lvbiA9IHRoaXMuX3Nob3VsZFJlbmRlckFzVHJhbnNtaXNzaW9uKG1lc2gubWF0ZXJpYWwpO1xyXG4gICAgICAgIGlmICh1c2VUcmFuc21pc3Npb24pIHtcclxuICAgICAgICAgICAgaWYgKG1lc2gubWF0ZXJpYWwgaW5zdGFuY2VvZiBQQlJNYXRlcmlhbCkge1xyXG4gICAgICAgICAgICAgICAgbWVzaC5tYXRlcmlhbC5zdWJTdXJmYWNlLnJlZnJhY3Rpb25UZXh0dXJlID0gdGhpcy5fb3BhcXVlUmVuZGVyVGFyZ2V0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChvcGFxdWVJZHggIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9vcGFxdWVNZXNoZXNDYWNoZS5zcGxpY2Uob3BhcXVlSWR4LCAxKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3RyYW5zcGFyZW50TWVzaGVzQ2FjaGUucHVzaChtZXNoKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0cmFuc3BhcmVudElkeCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3RyYW5zcGFyZW50TWVzaGVzQ2FjaGUucHVzaChtZXNoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBJZiB0aGUgbWF0ZXJpYWwgaXMgb3BhcXVlLCBtYWtlIHN1cmUgdGhhdCBpdCdzIGFkZGVkIHRvIHRoZSBvcGFxdWUgbGlzdCBhbmQgcmVtb3ZlZCBmcm9tIHRoZSB0cmFuc3BhcmVudCBsaXN0XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRyYW5zcGFyZW50SWR4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdHJhbnNwYXJlbnRNZXNoZXNDYWNoZS5zcGxpY2UodHJhbnNwYXJlbnRJZHgsIDEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fb3BhcXVlTWVzaGVzQ2FjaGUucHVzaChtZXNoKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChvcGFxdWVJZHggPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9vcGFxdWVNZXNoZXNDYWNoZS5wdXNoKG1lc2gpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKiBDaGVjayBpZiB0aGUgb3BhcXVlIHJlbmRlciB0YXJnZXQgaGFzIG5vdCBiZWVuIGRpc3Bvc2VkIGFuZCBjYW4gc3RpbGwgYmUgdXNlZC5cclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfaXNSZW5kZXJUYXJnZXRWYWxpZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fb3BhcXVlUmVuZGVyVGFyZ2V0Py5nZXRJbnRlcm5hbFRleHR1cmUoKSAhPT0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICogU2V0dXAgdGhlIHJlbmRlciB0YXJnZXRzIGFjY29yZGluZyB0byB0aGUgc3BlY2lmaWVkIG9wdGlvbnMuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfc2V0dXBSZW5kZXJUYXJnZXRzKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl9vcGFxdWVSZW5kZXJUYXJnZXQpIHtcclxuICAgICAgICAgICAgdGhpcy5fb3BhcXVlUmVuZGVyVGFyZ2V0LmRpc3Bvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fb3BhcXVlUmVuZGVyVGFyZ2V0ID0gbmV3IFJlbmRlclRhcmdldFRleHR1cmUoXHJcbiAgICAgICAgICAgIFwib3BhcXVlU2NlbmVUZXh0dXJlXCIsXHJcbiAgICAgICAgICAgIHRoaXMuX29wdGlvbnMucmVuZGVyU2l6ZSxcclxuICAgICAgICAgICAgdGhpcy5fc2NlbmUsXHJcbiAgICAgICAgICAgIHRoaXMuX29wdGlvbnMuZ2VuZXJhdGVNaXBtYXBzLFxyXG4gICAgICAgICAgICB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIHRoaXMuX29wdGlvbnMucmVuZGVyVGFyZ2V0VGV4dHVyZVR5cGVcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuX29wYXF1ZVJlbmRlclRhcmdldC5pZ25vcmVDYW1lcmFWaWV3cG9ydCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fb3BhcXVlUmVuZGVyVGFyZ2V0LnJlbmRlckxpc3QgPSB0aGlzLl9vcGFxdWVNZXNoZXNDYWNoZTtcclxuICAgICAgICB0aGlzLl9vcGFxdWVSZW5kZXJUYXJnZXQuY2xlYXJDb2xvciA9IHRoaXMuX29wdGlvbnMuY2xlYXJDb2xvcj8uY2xvbmUoKSA/PyB0aGlzLl9zY2VuZS5jbGVhckNvbG9yLmNsb25lKCk7XHJcbiAgICAgICAgdGhpcy5fb3BhcXVlUmVuZGVyVGFyZ2V0LmdhbW1hU3BhY2UgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9vcGFxdWVSZW5kZXJUYXJnZXQubG9kR2VuZXJhdGlvblNjYWxlID0gdGhpcy5fb3B0aW9ucy5sb2RHZW5lcmF0aW9uU2NhbGU7XHJcbiAgICAgICAgdGhpcy5fb3BhcXVlUmVuZGVyVGFyZ2V0LmxvZEdlbmVyYXRpb25PZmZzZXQgPSB0aGlzLl9vcHRpb25zLmxvZEdlbmVyYXRpb25PZmZzZXQ7XHJcbiAgICAgICAgdGhpcy5fb3BhcXVlUmVuZGVyVGFyZ2V0LnNhbXBsZXMgPSB0aGlzLl9vcHRpb25zLnNhbXBsZXM7XHJcblxyXG4gICAgICAgIGxldCBzY2VuZUltYWdlUHJvY2Vzc2luZ2FwcGx5QnlQb3N0UHJvY2VzczogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgbGV0IHNhdmVTY2VuZUVudkludGVuc2l0eTogbnVtYmVyO1xyXG4gICAgICAgIHRoaXMuX29wYXF1ZVJlbmRlclRhcmdldC5vbkJlZm9yZUJpbmRPYnNlcnZhYmxlLmFkZCgob3BhcXVlUmVuZGVyVGFyZ2V0KSA9PiB7XHJcbiAgICAgICAgICAgIHNhdmVTY2VuZUVudkludGVuc2l0eSA9IHRoaXMuX3NjZW5lLmVudmlyb25tZW50SW50ZW5zaXR5O1xyXG4gICAgICAgICAgICB0aGlzLl9zY2VuZS5lbnZpcm9ubWVudEludGVuc2l0eSA9IDEuMDtcclxuICAgICAgICAgICAgc2NlbmVJbWFnZVByb2Nlc3NpbmdhcHBseUJ5UG9zdFByb2Nlc3MgPSB0aGlzLl9zY2VuZS5pbWFnZVByb2Nlc3NpbmdDb25maWd1cmF0aW9uLmFwcGx5QnlQb3N0UHJvY2VzcztcclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9vcHRpb25zLmNsZWFyQ29sb3IpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NjZW5lLmNsZWFyQ29sb3IudG9MaW5lYXJTcGFjZVRvUmVmKG9wYXF1ZVJlbmRlclRhcmdldC5jbGVhckNvbG9yLCB0aGlzLl9zY2VuZS5nZXRFbmdpbmUoKS51c2VFeGFjdFNyZ2JDb252ZXJzaW9ucyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBvcGFxdWVSZW5kZXJUYXJnZXQuY2xlYXJDb2xvci5jb3B5RnJvbSh0aGlzLl9vcHRpb25zLmNsZWFyQ29sb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIHdlIGRvIG5vdCB1c2UgdGhlIGFwcGx5QnlQb3N0UHJvY2VzcyBzZXR0ZXIgdG8gYXZvaWQgZmxhZ2dpbmcgYWxsIHRoZSBtYXRlcmlhbHMgYXMgXCJpbWFnZSBwcm9jZXNzaW5nIGRpcnR5XCIhXHJcbiAgICAgICAgICAgIHRoaXMuX3NjZW5lLmltYWdlUHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb24uX2FwcGx5QnlQb3N0UHJvY2VzcyA9IHRydWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fb3BhcXVlUmVuZGVyVGFyZ2V0Lm9uQWZ0ZXJVbmJpbmRPYnNlcnZhYmxlLmFkZCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NjZW5lLmVudmlyb25tZW50SW50ZW5zaXR5ID0gc2F2ZVNjZW5lRW52SW50ZW5zaXR5O1xyXG4gICAgICAgICAgICB0aGlzLl9zY2VuZS5pbWFnZVByb2Nlc3NpbmdDb25maWd1cmF0aW9uLl9hcHBseUJ5UG9zdFByb2Nlc3MgPSBzY2VuZUltYWdlUHJvY2Vzc2luZ2FwcGx5QnlQb3N0UHJvY2VzcztcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5fdHJhbnNwYXJlbnRNZXNoZXNDYWNoZS5mb3JFYWNoKChtZXNoOiBBYnN0cmFjdE1lc2gpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3Nob3VsZFJlbmRlckFzVHJhbnNtaXNzaW9uKG1lc2gubWF0ZXJpYWwpKSB7XHJcbiAgICAgICAgICAgICAgICAobWVzaC5tYXRlcmlhbCBhcyBQQlJNYXRlcmlhbCkucmVmcmFjdGlvblRleHR1cmUgPSB0aGlzLl9vcGFxdWVSZW5kZXJUYXJnZXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERpc3Bvc2UgYWxsIHRoZSBlbGVtZW50cyBjcmVhdGVkIGJ5IHRoZSBIZWxwZXIuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkaXNwb3NlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3NjZW5lLl90cmFuc21pc3Npb25IZWxwZXIgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgaWYgKHRoaXMuX29wYXF1ZVJlbmRlclRhcmdldCkge1xyXG4gICAgICAgICAgICB0aGlzLl9vcGFxdWVSZW5kZXJUYXJnZXQuZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICB0aGlzLl9vcGFxdWVSZW5kZXJUYXJnZXQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl90cmFuc3BhcmVudE1lc2hlc0NhY2hlID0gW107XHJcbiAgICAgICAgdGhpcy5fb3BhcXVlTWVzaGVzQ2FjaGUgPSBbXTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgTkFNRSA9IFwiS0hSX21hdGVyaWFsc190cmFuc21pc3Npb25cIjtcclxuXHJcbi8qKlxyXG4gKiBbU3BlY2lmaWNhdGlvbl0oaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFpbi9leHRlbnNpb25zLzIuMC9LaHJvbm9zL0tIUl9tYXRlcmlhbHNfdHJhbnNtaXNzaW9uL1JFQURNRS5tZClcclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGNsYXNzIEtIUl9tYXRlcmlhbHNfdHJhbnNtaXNzaW9uIGltcGxlbWVudHMgSUdMVEZMb2FkZXJFeHRlbnNpb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGlzIGV4dGVuc2lvbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBOQU1FO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIGVuYWJsZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBlbmFibGVkOiBib29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyBhIG51bWJlciB0aGF0IGRldGVybWluZXMgdGhlIG9yZGVyIHRoZSBleHRlbnNpb25zIGFyZSBhcHBsaWVkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb3JkZXIgPSAxNzU7XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZGVyOiBHTFRGTG9hZGVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGxvYWRlcjogR0xURkxvYWRlcikge1xyXG4gICAgICAgIHRoaXMuX2xvYWRlciA9IGxvYWRlcjtcclxuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0aGlzLl9sb2FkZXIuaXNFeHRlbnNpb25Vc2VkKE5BTUUpO1xyXG4gICAgICAgIGlmICh0aGlzLmVuYWJsZWQpIHtcclxuICAgICAgICAgICAgbG9hZGVyLnBhcmVudC50cmFuc3BhcmVuY3lBc0NvdmVyYWdlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgKHRoaXMuX2xvYWRlciBhcyBhbnkpID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZE1hdGVyaWFsUHJvcGVydGllc0FzeW5jKGNvbnRleHQ6IHN0cmluZywgbWF0ZXJpYWw6IElNYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCk6IE51bGxhYmxlPFByb21pc2U8dm9pZD4+IHtcclxuICAgICAgICByZXR1cm4gR0xURkxvYWRlci5Mb2FkRXh0ZW5zaW9uQXN5bmM8SUtIUk1hdGVyaWFsc1RyYW5zbWlzc2lvbj4oY29udGV4dCwgbWF0ZXJpYWwsIHRoaXMubmFtZSwgKGV4dGVuc2lvbkNvbnRleHQsIGV4dGVuc2lvbikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9taXNlcyA9IG5ldyBBcnJheTxQcm9taXNlPGFueT4+KCk7XHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5fbG9hZGVyLmxvYWRNYXRlcmlhbEJhc2VQcm9wZXJ0aWVzQXN5bmMoY29udGV4dCwgbWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbCkpO1xyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMuX2xvYWRlci5sb2FkTWF0ZXJpYWxQcm9wZXJ0aWVzQXN5bmMoY29udGV4dCwgbWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbCkpO1xyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMuX2xvYWRUcmFuc3BhcmVudFByb3BlcnRpZXNBc3luYyhleHRlbnNpb25Db250ZXh0LCBtYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsLCBleHRlbnNpb24pKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IHt9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9sb2FkVHJhbnNwYXJlbnRQcm9wZXJ0aWVzQXN5bmMoY29udGV4dDogc3RyaW5nLCBtYXRlcmlhbDogSU1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsLCBleHRlbnNpb246IElLSFJNYXRlcmlhbHNUcmFuc21pc3Npb24pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBpZiAoIShiYWJ5bG9uTWF0ZXJpYWwgaW5zdGFuY2VvZiBQQlJNYXRlcmlhbCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2NvbnRleHR9OiBNYXRlcmlhbCB0eXBlIG5vdCBzdXBwb3J0ZWRgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcGJyTWF0ZXJpYWwgPSBiYWJ5bG9uTWF0ZXJpYWwgYXMgUEJSTWF0ZXJpYWw7XHJcblxyXG4gICAgICAgIC8vIEVuYWJsZXMgXCJyZWZyYWN0aW9uXCIgdGV4dHVyZSB3aGljaCByZXByZXNlbnRzIHRyYW5zbWl0dGVkIGxpZ2h0LlxyXG4gICAgICAgIHBick1hdGVyaWFsLnN1YlN1cmZhY2UuaXNSZWZyYWN0aW9uRW5hYmxlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIC8vIFNpbmNlIHRoaXMgZXh0ZW5zaW9uIG1vZGVscyB0aGluLXN1cmZhY2UgdHJhbnNtaXNzaW9uIG9ubHksIHdlIG11c3QgbWFrZSBJT1IgPSAxLjBcclxuICAgICAgICBwYnJNYXRlcmlhbC5zdWJTdXJmYWNlLnZvbHVtZUluZGV4T2ZSZWZyYWN0aW9uID0gMS4wO1xyXG5cclxuICAgICAgICAvLyBBbGJlZG8gY29sb3VyIHdpbGwgdGludCB0cmFuc21pc3Npb24uXHJcbiAgICAgICAgcGJyTWF0ZXJpYWwuc3ViU3VyZmFjZS51c2VBbGJlZG9Ub1RpbnRSZWZyYWN0aW9uID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKGV4dGVuc2lvbi50cmFuc21pc3Npb25GYWN0b3IgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBwYnJNYXRlcmlhbC5zdWJTdXJmYWNlLnJlZnJhY3Rpb25JbnRlbnNpdHkgPSBleHRlbnNpb24udHJhbnNtaXNzaW9uRmFjdG9yO1xyXG4gICAgICAgICAgICBjb25zdCBzY2VuZSA9IHBick1hdGVyaWFsLmdldFNjZW5lKCkgYXMgdW5rbm93biBhcyBJVHJhbnNtaXNzaW9uSGVscGVySG9sZGVyO1xyXG4gICAgICAgICAgICBpZiAocGJyTWF0ZXJpYWwuc3ViU3VyZmFjZS5yZWZyYWN0aW9uSW50ZW5zaXR5ICYmICFzY2VuZS5fdHJhbnNtaXNzaW9uSGVscGVyKSB7XHJcbiAgICAgICAgICAgICAgICBuZXcgVHJhbnNtaXNzaW9uSGVscGVyKHt9LCBwYnJNYXRlcmlhbC5nZXRTY2VuZSgpKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChwYnJNYXRlcmlhbC5zdWJTdXJmYWNlLnJlZnJhY3Rpb25JbnRlbnNpdHkgJiYgIXNjZW5lLl90cmFuc21pc3Npb25IZWxwZXI/Ll9pc1JlbmRlclRhcmdldFZhbGlkKCkpIHtcclxuICAgICAgICAgICAgICAgIC8vIElmIHRoZSByZW5kZXIgdGFyZ2V0IGlzIG5vdCB2YWxpZCwgcmVjcmVhdGUgaXQuXHJcbiAgICAgICAgICAgICAgICBzY2VuZS5fdHJhbnNtaXNzaW9uSGVscGVyPy5fc2V0dXBSZW5kZXJUYXJnZXRzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwYnJNYXRlcmlhbC5zdWJTdXJmYWNlLnJlZnJhY3Rpb25JbnRlbnNpdHkgPSAwLjA7XHJcbiAgICAgICAgICAgIHBick1hdGVyaWFsLnN1YlN1cmZhY2UuaXNSZWZyYWN0aW9uRW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwYnJNYXRlcmlhbC5zdWJTdXJmYWNlLm1pbmltdW1UaGlja25lc3MgPSAwLjA7XHJcbiAgICAgICAgcGJyTWF0ZXJpYWwuc3ViU3VyZmFjZS5tYXhpbXVtVGhpY2tuZXNzID0gMC4wO1xyXG4gICAgICAgIGlmIChleHRlbnNpb24udHJhbnNtaXNzaW9uVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAoZXh0ZW5zaW9uLnRyYW5zbWlzc2lvblRleHR1cmUgYXMgSVRleHR1cmVJbmZvKS5ub25Db2xvckRhdGEgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbG9hZGVyLmxvYWRUZXh0dXJlSW5mb0FzeW5jKGAke2NvbnRleHR9L3RyYW5zbWlzc2lvblRleHR1cmVgLCBleHRlbnNpb24udHJhbnNtaXNzaW9uVGV4dHVyZSwgdW5kZWZpbmVkKS50aGVuKCh0ZXh0dXJlOiBCYXNlVGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcGJyTWF0ZXJpYWwuc3ViU3VyZmFjZS5yZWZyYWN0aW9uSW50ZW5zaXR5VGV4dHVyZSA9IHRleHR1cmU7XHJcbiAgICAgICAgICAgICAgICBwYnJNYXRlcmlhbC5zdWJTdXJmYWNlLnVzZUdsdGZTdHlsZVRleHR1cmVzID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuR0xURkxvYWRlci5SZWdpc3RlckV4dGVuc2lvbihOQU1FLCAobG9hZGVyKSA9PiBuZXcgS0hSX21hdGVyaWFsc190cmFuc21pc3Npb24obG9hZGVyKSk7XHJcbiIsImltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xyXG5pbXBvcnQgeyBDb2xvcjMgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLmNvbG9yXCI7XHJcbmltcG9ydCB7IFBCUk1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1BCUi9wYnJNYXRlcmlhbFwiO1xyXG5pbXBvcnQgdHlwZSB7IE1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL21hdGVyaWFsXCI7XHJcblxyXG5pbXBvcnQgdHlwZSB7IElNYXRlcmlhbCB9IGZyb20gXCIuLi9nbFRGTG9hZGVySW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQgdHlwZSB7IElHTFRGTG9hZGVyRXh0ZW5zaW9uIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJFeHRlbnNpb25cIjtcclxuaW1wb3J0IHsgR0xURkxvYWRlciB9IGZyb20gXCIuLi9nbFRGTG9hZGVyXCI7XHJcblxyXG5jb25zdCBOQU1FID0gXCJLSFJfbWF0ZXJpYWxzX3VubGl0XCI7XHJcblxyXG4vKipcclxuICogW1NwZWNpZmljYXRpb25dKGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9ibG9iL21haW4vZXh0ZW5zaW9ucy8yLjAvS2hyb25vcy9LSFJfbWF0ZXJpYWxzX3VubGl0L1JFQURNRS5tZClcclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGNsYXNzIEtIUl9tYXRlcmlhbHNfdW5saXQgaW1wbGVtZW50cyBJR0xURkxvYWRlckV4dGVuc2lvbiB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBuYW1lIG9mIHRoaXMgZXh0ZW5zaW9uLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZSA9IE5BTUU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgZW5hYmxlZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGVuYWJsZWQ6IGJvb2xlYW47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIGEgbnVtYmVyIHRoYXQgZGV0ZXJtaW5lcyB0aGUgb3JkZXIgdGhlIGV4dGVuc2lvbnMgYXJlIGFwcGxpZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvcmRlciA9IDIxMDtcclxuXHJcbiAgICBwcml2YXRlIF9sb2FkZXI6IEdMVEZMb2FkZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobG9hZGVyOiBHTFRGTG9hZGVyKSB7XHJcbiAgICAgICAgdGhpcy5fbG9hZGVyID0gbG9hZGVyO1xyXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRoaXMuX2xvYWRlci5pc0V4dGVuc2lvblVzZWQoTkFNRSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgKHRoaXMuX2xvYWRlciBhcyBhbnkpID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZE1hdGVyaWFsUHJvcGVydGllc0FzeW5jKGNvbnRleHQ6IHN0cmluZywgbWF0ZXJpYWw6IElNYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCk6IE51bGxhYmxlPFByb21pc2U8dm9pZD4+IHtcclxuICAgICAgICByZXR1cm4gR0xURkxvYWRlci5Mb2FkRXh0ZW5zaW9uQXN5bmMoY29udGV4dCwgbWF0ZXJpYWwsIHRoaXMubmFtZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbG9hZFVubGl0UHJvcGVydGllc0FzeW5jKGNvbnRleHQsIG1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWwpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2xvYWRVbmxpdFByb3BlcnRpZXNBc3luYyhjb250ZXh0OiBzdHJpbmcsIG1hdGVyaWFsOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBpZiAoIShiYWJ5bG9uTWF0ZXJpYWwgaW5zdGFuY2VvZiBQQlJNYXRlcmlhbCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2NvbnRleHR9OiBNYXRlcmlhbCB0eXBlIG5vdCBzdXBwb3J0ZWRgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gbmV3IEFycmF5PFByb21pc2U8YW55Pj4oKTtcclxuICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwudW5saXQgPSB0cnVlO1xyXG5cclxuICAgICAgICBjb25zdCBwcm9wZXJ0aWVzID0gbWF0ZXJpYWwucGJyTWV0YWxsaWNSb3VnaG5lc3M7XHJcbiAgICAgICAgaWYgKHByb3BlcnRpZXMpIHtcclxuICAgICAgICAgICAgaWYgKHByb3BlcnRpZXMuYmFzZUNvbG9yRmFjdG9yKSB7XHJcbiAgICAgICAgICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwuYWxiZWRvQ29sb3IgPSBDb2xvcjMuRnJvbUFycmF5KHByb3BlcnRpZXMuYmFzZUNvbG9yRmFjdG9yKTtcclxuICAgICAgICAgICAgICAgIGJhYnlsb25NYXRlcmlhbC5hbHBoYSA9IHByb3BlcnRpZXMuYmFzZUNvbG9yRmFjdG9yWzNdO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsLmFsYmVkb0NvbG9yID0gQ29sb3IzLldoaXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzLmJhc2VDb2xvclRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9hZGVyLmxvYWRUZXh0dXJlSW5mb0FzeW5jKGAke2NvbnRleHR9L2Jhc2VDb2xvclRleHR1cmVgLCBwcm9wZXJ0aWVzLmJhc2VDb2xvclRleHR1cmUsICh0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHR1cmUubmFtZSA9IGAke2JhYnlsb25NYXRlcmlhbC5uYW1lfSAoQmFzZSBDb2xvcilgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwuYWxiZWRvVGV4dHVyZSA9IHRleHR1cmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtYXRlcmlhbC5kb3VibGVTaWRlZCkge1xyXG4gICAgICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwuYmFja0ZhY2VDdWxsaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJhYnlsb25NYXRlcmlhbC50d29TaWRlZExpZ2h0aW5nID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2xvYWRlci5sb2FkTWF0ZXJpYWxBbHBoYVByb3BlcnRpZXMoY29udGV4dCwgbWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbCk7XHJcblxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoKSA9PiB7fSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkdMVEZMb2FkZXIuUmVnaXN0ZXJFeHRlbnNpb24oTkFNRSwgKGxvYWRlcikgPT4gbmV3IEtIUl9tYXRlcmlhbHNfdW5saXQobG9hZGVyKSk7XHJcbiIsImltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xyXG5pbXBvcnQgdHlwZSB7IElHTFRGTG9hZGVyRXh0ZW5zaW9uIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJFeHRlbnNpb25cIjtcclxuaW1wb3J0IHsgR0xURkxvYWRlciwgQXJyYXlJdGVtIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJcIjtcclxuXHJcbmltcG9ydCB0eXBlIHsgTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgTWVzaCB9IGZyb20gXCJjb3JlL01lc2hlcy9tZXNoXCI7XHJcbmltcG9ydCB0eXBlIHsgTm9kZSB9IGZyb20gXCJjb3JlL25vZGVcIjtcclxuaW1wb3J0IHR5cGUgeyBBYnN0cmFjdE1lc2ggfSBmcm9tIFwiY29yZS9NZXNoZXMvYWJzdHJhY3RNZXNoXCI7XHJcbmltcG9ydCB0eXBlIHsgSU5vZGUsIElNZXNoUHJpbWl0aXZlLCBJTWVzaCB9IGZyb20gXCIuLi9nbFRGTG9hZGVySW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQgdHlwZSB7IElLSFJNYXRlcmlhbFZhcmlhbnRzX01hcHBpbmcsIElLSFJNYXRlcmlhbFZhcmlhbnRzX1ZhcmlhbnQsIElLSFJNYXRlcmlhbFZhcmlhbnRzX1ZhcmlhbnRzIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5cclxuY29uc3QgTkFNRSA9IFwiS0hSX21hdGVyaWFsc192YXJpYW50c1wiO1xyXG5cclxuaW50ZXJmYWNlIElWYXJpYW50c01hcCB7XHJcbiAgICBba2V5OiBzdHJpbmddOiBBcnJheTx7IG1lc2g6IEFic3RyYWN0TWVzaDsgbWF0ZXJpYWw6IE51bGxhYmxlPE1hdGVyaWFsPiB9PjtcclxufVxyXG5cclxuaW50ZXJmYWNlIElFeHRlbnNpb25NZXRhZGF0YSB7XHJcbiAgICBsYXN0U2VsZWN0ZWQ6IE51bGxhYmxlPHN0cmluZyB8IEFycmF5PHN0cmluZz4+O1xyXG4gICAgb3JpZ2luYWw6IEFycmF5PHsgbWVzaDogQWJzdHJhY3RNZXNoOyBtYXRlcmlhbDogTnVsbGFibGU8TWF0ZXJpYWw+IH0+O1xyXG4gICAgdmFyaWFudHM6IElWYXJpYW50c01hcDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFtTcGVjaWZpY2F0aW9uXShodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi9tYWluL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX21hdGVyaWFsc192YXJpYW50cy9SRUFETUUubWQpXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBjbGFzcyBLSFJfbWF0ZXJpYWxzX3ZhcmlhbnRzIGltcGxlbWVudHMgSUdMVEZMb2FkZXJFeHRlbnNpb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGlzIGV4dGVuc2lvbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBOQU1FO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIGVuYWJsZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBlbmFibGVkOiBib29sZWFuO1xyXG5cclxuICAgIHByaXZhdGUgX2xvYWRlcjogR0xURkxvYWRlcjtcclxuXHJcbiAgICBwcml2YXRlIF92YXJpYW50cz86IEFycmF5PElLSFJNYXRlcmlhbFZhcmlhbnRzX1ZhcmlhbnQ+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGxvYWRlcjogR0xURkxvYWRlcikge1xyXG4gICAgICAgIHRoaXMuX2xvYWRlciA9IGxvYWRlcjtcclxuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0aGlzLl9sb2FkZXIuaXNFeHRlbnNpb25Vc2VkKE5BTUUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge1xyXG4gICAgICAgICh0aGlzLl9sb2FkZXIgYXMgYW55KSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBsaXN0IG9mIGF2YWlsYWJsZSB2YXJpYW50IG5hbWVzIGZvciB0aGlzIGFzc2V0LlxyXG4gICAgICogQHBhcmFtIHJvb3RNZXNoIFRoZSBnbFRGIHJvb3QgbWVzaFxyXG4gICAgICogQHJldHVybnMgdGhlIGxpc3Qgb2YgYWxsIHRoZSB2YXJpYW50IG5hbWVzIGZvciB0aGlzIG1vZGVsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0QXZhaWxhYmxlVmFyaWFudHMocm9vdE1lc2g6IE1lc2gpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgY29uc3QgZXh0ZW5zaW9uTWV0YWRhdGEgPSB0aGlzLl9HZXRFeHRlbnNpb25NZXRhZGF0YShyb290TWVzaCk7XHJcbiAgICAgICAgaWYgKCFleHRlbnNpb25NZXRhZGF0YSkge1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoZXh0ZW5zaW9uTWV0YWRhdGEudmFyaWFudHMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgbGlzdCBvZiBhdmFpbGFibGUgdmFyaWFudCBuYW1lcyBmb3IgdGhpcyBhc3NldC5cclxuICAgICAqIEBwYXJhbSByb290TWVzaCBUaGUgZ2xURiByb290IG1lc2hcclxuICAgICAqIEByZXR1cm5zIHRoZSBsaXN0IG9mIGFsbCB0aGUgdmFyaWFudCBuYW1lcyBmb3IgdGhpcyBtb2RlbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0QXZhaWxhYmxlVmFyaWFudHMocm9vdE1lc2g6IE1lc2gpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgcmV0dXJuIEtIUl9tYXRlcmlhbHNfdmFyaWFudHMuR2V0QXZhaWxhYmxlVmFyaWFudHMocm9vdE1lc2gpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2VsZWN0IGEgdmFyaWFudCBnaXZlbiBhIHZhcmlhbnQgbmFtZSBvciBhIGxpc3Qgb2YgdmFyaWFudCBuYW1lcy5cclxuICAgICAqIEBwYXJhbSByb290TWVzaCBUaGUgZ2xURiByb290IG1lc2hcclxuICAgICAqIEBwYXJhbSB2YXJpYW50TmFtZSBUaGUgdmFyaWFudCBuYW1lKHMpIHRvIHNlbGVjdC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBTZWxlY3RWYXJpYW50KHJvb3RNZXNoOiBNZXNoLCB2YXJpYW50TmFtZTogc3RyaW5nIHwgc3RyaW5nW10pOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBleHRlbnNpb25NZXRhZGF0YSA9IHRoaXMuX0dldEV4dGVuc2lvbk1ldGFkYXRhKHJvb3RNZXNoKTtcclxuICAgICAgICBpZiAoIWV4dGVuc2lvbk1ldGFkYXRhKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHNlbGVjdCB2YXJpYW50IG9uIGEgZ2xURiBtZXNoIHRoYXQgZG9lcyBub3QgaGF2ZSB0aGUgJHtOQU1FfSBleHRlbnNpb25gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNlbGVjdCA9ICh2YXJpYW50TmFtZTogc3RyaW5nKTogdm9pZCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVudHJpZXMgPSBleHRlbnNpb25NZXRhZGF0YS52YXJpYW50c1t2YXJpYW50TmFtZV07XHJcbiAgICAgICAgICAgIGlmIChlbnRyaWVzKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbnRyeS5tZXNoLm1hdGVyaWFsID0gZW50cnkubWF0ZXJpYWw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAodmFyaWFudE5hbWUgaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IG5hbWUgb2YgdmFyaWFudE5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdChuYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNlbGVjdCh2YXJpYW50TmFtZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBleHRlbnNpb25NZXRhZGF0YS5sYXN0U2VsZWN0ZWQgPSB2YXJpYW50TmFtZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlbGVjdCBhIHZhcmlhbnQgZ2l2ZW4gYSB2YXJpYW50IG5hbWUgb3IgYSBsaXN0IG9mIHZhcmlhbnQgbmFtZXMuXHJcbiAgICAgKiBAcGFyYW0gcm9vdE1lc2ggVGhlIGdsVEYgcm9vdCBtZXNoXHJcbiAgICAgKiBAcGFyYW0gdmFyaWFudE5hbWUgVGhlIHZhcmlhbnQgbmFtZShzKSB0byBzZWxlY3QuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZWxlY3RWYXJpYW50KHJvb3RNZXNoOiBNZXNoLCB2YXJpYW50TmFtZTogc3RyaW5nIHwgc3RyaW5nW10pOiB2b2lkIHtcclxuICAgICAgICByZXR1cm4gS0hSX21hdGVyaWFsc192YXJpYW50cy5TZWxlY3RWYXJpYW50KHJvb3RNZXNoLCB2YXJpYW50TmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXNldCBiYWNrIHRvIHRoZSBvcmlnaW5hbCBiZWZvcmUgc2VsZWN0aW5nIGEgdmFyaWFudC5cclxuICAgICAqIEBwYXJhbSByb290TWVzaCBUaGUgZ2xURiByb290IG1lc2hcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBSZXNldChyb290TWVzaDogTWVzaCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGV4dGVuc2lvbk1ldGFkYXRhID0gdGhpcy5fR2V0RXh0ZW5zaW9uTWV0YWRhdGEocm9vdE1lc2gpO1xyXG4gICAgICAgIGlmICghZXh0ZW5zaW9uTWV0YWRhdGEpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgcmVzZXQgb24gYSBnbFRGIG1lc2ggdGhhdCBkb2VzIG5vdCBoYXZlIHRoZSAke05BTUV9IGV4dGVuc2lvbmApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBlbnRyeSBvZiBleHRlbnNpb25NZXRhZGF0YS5vcmlnaW5hbCkge1xyXG4gICAgICAgICAgICBlbnRyeS5tZXNoLm1hdGVyaWFsID0gZW50cnkubWF0ZXJpYWw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBleHRlbnNpb25NZXRhZGF0YS5sYXN0U2VsZWN0ZWQgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVzZXQgYmFjayB0byB0aGUgb3JpZ2luYWwgYmVmb3JlIHNlbGVjdGluZyBhIHZhcmlhbnQuXHJcbiAgICAgKiBAcGFyYW0gcm9vdE1lc2ggVGhlIGdsVEYgcm9vdCBtZXNoXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZXNldChyb290TWVzaDogTWVzaCk6IHZvaWQge1xyXG4gICAgICAgIHJldHVybiBLSFJfbWF0ZXJpYWxzX3ZhcmlhbnRzLlJlc2V0KHJvb3RNZXNoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIGxhc3Qgc2VsZWN0ZWQgdmFyaWFudCBuYW1lKHMpIG9yIG51bGwgaWYgb3JpZ2luYWwuXHJcbiAgICAgKiBAcGFyYW0gcm9vdE1lc2ggVGhlIGdsVEYgcm9vdCBtZXNoXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgc2VsZWN0ZWQgdmFyaWFudCBuYW1lKHMpLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldExhc3RTZWxlY3RlZFZhcmlhbnQocm9vdE1lc2g6IE1lc2gpOiBOdWxsYWJsZTxzdHJpbmcgfCBzdHJpbmdbXT4ge1xyXG4gICAgICAgIGNvbnN0IGV4dGVuc2lvbk1ldGFkYXRhID0gdGhpcy5fR2V0RXh0ZW5zaW9uTWV0YWRhdGEocm9vdE1lc2gpO1xyXG4gICAgICAgIGlmICghZXh0ZW5zaW9uTWV0YWRhdGEpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgZ2V0IHRoZSBsYXN0IHNlbGVjdGVkIHZhcmlhbnQgb24gYSBnbFRGIG1lc2ggdGhhdCBkb2VzIG5vdCBoYXZlIHRoZSAke05BTUV9IGV4dGVuc2lvbmApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGV4dGVuc2lvbk1ldGFkYXRhLmxhc3RTZWxlY3RlZDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIGxhc3Qgc2VsZWN0ZWQgdmFyaWFudCBuYW1lKHMpIG9yIG51bGwgaWYgb3JpZ2luYWwuXHJcbiAgICAgKiBAcGFyYW0gcm9vdE1lc2ggVGhlIGdsVEYgcm9vdCBtZXNoXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgc2VsZWN0ZWQgdmFyaWFudCBuYW1lKHMpLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0TGFzdFNlbGVjdGVkVmFyaWFudChyb290TWVzaDogTWVzaCk6IE51bGxhYmxlPHN0cmluZyB8IHN0cmluZ1tdPiB7XHJcbiAgICAgICAgcmV0dXJuIEtIUl9tYXRlcmlhbHNfdmFyaWFudHMuR2V0TGFzdFNlbGVjdGVkVmFyaWFudChyb290TWVzaCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX0dldEV4dGVuc2lvbk1ldGFkYXRhKHJvb3RNZXNoOiBOdWxsYWJsZTxNZXNoPik6IE51bGxhYmxlPElFeHRlbnNpb25NZXRhZGF0YT4ge1xyXG4gICAgICAgIHJldHVybiByb290TWVzaD8uX2ludGVybmFsTWV0YWRhdGE/LmdsdGY/LltOQU1FXSB8fCBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBvbkxvYWRpbmcoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgZXh0ZW5zaW9ucyA9IHRoaXMuX2xvYWRlci5nbHRmLmV4dGVuc2lvbnM7XHJcbiAgICAgICAgaWYgKGV4dGVuc2lvbnMgJiYgZXh0ZW5zaW9uc1t0aGlzLm5hbWVdKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IGV4dGVuc2lvbnNbdGhpcy5uYW1lXSBhcyBJS0hSTWF0ZXJpYWxWYXJpYW50c19WYXJpYW50cztcclxuICAgICAgICAgICAgdGhpcy5fdmFyaWFudHMgPSBleHRlbnNpb24udmFyaWFudHM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfbG9hZE1lc2hQcmltaXRpdmVBc3luYyhcclxuICAgICAgICBjb250ZXh0OiBzdHJpbmcsXHJcbiAgICAgICAgbmFtZTogc3RyaW5nLFxyXG4gICAgICAgIG5vZGU6IElOb2RlLFxyXG4gICAgICAgIG1lc2g6IElNZXNoLFxyXG4gICAgICAgIHByaW1pdGl2ZTogSU1lc2hQcmltaXRpdmUsXHJcbiAgICAgICAgYXNzaWduOiAoYmFieWxvbk1lc2g6IEFic3RyYWN0TWVzaCkgPT4gdm9pZFxyXG4gICAgKTogTnVsbGFibGU8UHJvbWlzZTxBYnN0cmFjdE1lc2g+PiB7XHJcbiAgICAgICAgcmV0dXJuIEdMVEZMb2FkZXIuTG9hZEV4dGVuc2lvbkFzeW5jPElLSFJNYXRlcmlhbFZhcmlhbnRzX01hcHBpbmcsIEFic3RyYWN0TWVzaD4oY29udGV4dCwgcHJpbWl0aXZlLCB0aGlzLm5hbWUsIChleHRlbnNpb25Db250ZXh0LCBleHRlbnNpb24pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBuZXcgQXJyYXk8UHJvbWlzZTxhbnk+PigpO1xyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9hZGVyLl9sb2FkTWVzaFByaW1pdGl2ZUFzeW5jKGNvbnRleHQsIG5hbWUsIG5vZGUsIG1lc2gsIHByaW1pdGl2ZSwgKGJhYnlsb25NZXNoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXNzaWduKGJhYnlsb25NZXNoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJhYnlsb25NZXNoIGluc3RhbmNlb2YgTWVzaCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBiYWJ5bG9uRHJhd01vZGUgPSBHTFRGTG9hZGVyLl9HZXREcmF3TW9kZShjb250ZXh0LCBwcmltaXRpdmUubW9kZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByb290ID0gdGhpcy5fbG9hZGVyLnJvb3RCYWJ5bG9uTWVzaDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWV0YWRhdGEgPSByb290ID8gKHJvb3QuX2ludGVybmFsTWV0YWRhdGEgPSByb290Ll9pbnRlcm5hbE1ldGFkYXRhIHx8IHt9KSA6IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBnbHRmID0gKG1ldGFkYXRhLmdsdGYgPSBtZXRhZGF0YS5nbHRmIHx8IHt9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXh0ZW5zaW9uTWV0YWRhdGE6IElFeHRlbnNpb25NZXRhZGF0YSA9IChnbHRmW05BTUVdID0gZ2x0ZltOQU1FXSB8fCB7IGxhc3RTZWxlY3RlZDogbnVsbCwgb3JpZ2luYWw6IFtdLCB2YXJpYW50czoge30gfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTdG9yZSB0aGUgb3JpZ2luYWwgbWF0ZXJpYWwuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4dGVuc2lvbk1ldGFkYXRhLm9yaWdpbmFsLnB1c2goeyBtZXNoOiBiYWJ5bG9uTWVzaCwgbWF0ZXJpYWw6IGJhYnlsb25NZXNoLm1hdGVyaWFsIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRm9yIGVhY2ggbWFwcGluZywgbG9vayBhdCB0aGUgdmFyaWFudHMgYW5kIG1ha2UgYSBuZXcgZW50cnkgZm9yIHRoZW0uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IG1hcHBpbmdJbmRleCA9IDA7IG1hcHBpbmdJbmRleCA8IGV4dGVuc2lvbi5tYXBwaW5ncy5sZW5ndGg7ICsrbWFwcGluZ0luZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXBwaW5nID0gZXh0ZW5zaW9uLm1hcHBpbmdzW21hcHBpbmdJbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRlcmlhbCA9IEFycmF5SXRlbS5HZXQoYCR7ZXh0ZW5zaW9uQ29udGV4dH0vbWFwcGluZ3MvJHttYXBwaW5nSW5kZXh9L21hdGVyaWFsYCwgdGhpcy5fbG9hZGVyLmdsdGYubWF0ZXJpYWxzLCBtYXBwaW5nLm1hdGVyaWFsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9hZGVyLl9sb2FkTWF0ZXJpYWxBc3luYyhgIy9tYXRlcmlhbHMvJHttYXBwaW5nLm1hdGVyaWFsfWAsIG1hdGVyaWFsLCBiYWJ5bG9uTWVzaCwgYmFieWxvbkRyYXdNb2RlLCAoYmFieWxvbk1hdGVyaWFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IG1hcHBpbmdWYXJpYW50SW5kZXggPSAwOyBtYXBwaW5nVmFyaWFudEluZGV4IDwgbWFwcGluZy52YXJpYW50cy5sZW5ndGg7ICsrbWFwcGluZ1ZhcmlhbnRJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFyaWFudEluZGV4ID0gbWFwcGluZy52YXJpYW50c1ttYXBwaW5nVmFyaWFudEluZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhcmlhbnQgPSBBcnJheUl0ZW0uR2V0KGAvZXh0ZW5zaW9ucy8ke05BTUV9L3ZhcmlhbnRzLyR7dmFyaWFudEluZGV4fWAsIHRoaXMuX3ZhcmlhbnRzLCB2YXJpYW50SW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0ZW5zaW9uTWV0YWRhdGEudmFyaWFudHNbdmFyaWFudC5uYW1lXSA9IGV4dGVuc2lvbk1ldGFkYXRhLnZhcmlhbnRzW3ZhcmlhbnQubmFtZV0gfHwgW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHRlbnNpb25NZXRhZGF0YS52YXJpYW50c1t2YXJpYW50Lm5hbWVdLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc2g6IGJhYnlsb25NZXNoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsOiBiYWJ5bG9uTWF0ZXJpYWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSZXBsYWNlIHRoZSB0YXJnZXQgd2hlbiBvcmlnaW5hbCBtZXNoIGlzIGNsb25lZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFieWxvbk1lc2gub25DbG9uZWRPYnNlcnZhYmxlLmFkZCgobmV3T25lOiBOb2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3TWVzaCA9IG5ld09uZSBhcyBNZXNoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtZXRhZGF0YTogTnVsbGFibGU8SUV4dGVuc2lvbk1ldGFkYXRhPiA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1Jvb3Q6IE51bGxhYmxlPE5vZGU+ID0gbmV3TWVzaDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRmluZCByb290IHRvIGdldCBtZWRhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Jvb3QgPSBuZXdSb290IS5wYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbmV3Um9vdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGFkYXRhID0gS0hSX21hdGVyaWFsc192YXJpYW50cy5fR2V0RXh0ZW5zaW9uTWV0YWRhdGEobmV3Um9vdCBhcyBNZXNoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IHdoaWxlIChtZXRhZGF0YSA9PT0gbnVsbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5lZWQgdG8gY2xvbmUgdGhlIG1ldGFkYXRhIG9uIHRoZSByb290IChmaXJzdCB0aW1lIG9ubHkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJvb3QgJiYgbWV0YWRhdGEgPT09IEtIUl9tYXRlcmlhbHNfdmFyaWFudHMuX0dldEV4dGVuc2lvbk1ldGFkYXRhKHJvb3QpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENvcHkgbWFpbiBtZXRhZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdSb290Ll9pbnRlcm5hbE1ldGFkYXRhID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHJvb3QuX2ludGVybmFsTWV0YWRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Jvb3QuX2ludGVybmFsTWV0YWRhdGFba2V5XSA9IHJvb3QuX2ludGVybmFsTWV0YWRhdGFba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29weSB0aGUgZ2x0ZiBtZXRhZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdSb290Ll9pbnRlcm5hbE1ldGFkYXRhLmdsdGYgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gcm9vdC5faW50ZXJuYWxNZXRhZGF0YS5nbHRmKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdSb290Ll9pbnRlcm5hbE1ldGFkYXRhLmdsdGZba2V5XSA9IHJvb3QuX2ludGVybmFsTWV0YWRhdGEuZ2x0ZltrZXldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBEdXBsaWNhdGUgdGhlIGV4dGVuc2lvbiBzcGVjaWZpYyBtZXRhZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdSb290Ll9pbnRlcm5hbE1ldGFkYXRhLmdsdGZbTkFNRV0gPSB7IGxhc3RTZWxlY3RlZDogbnVsbCwgb3JpZ2luYWw6IFtdLCB2YXJpYW50czoge30gfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBvcmlnaW5hbCBvZiBtZXRhZGF0YS5vcmlnaW5hbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3Um9vdC5faW50ZXJuYWxNZXRhZGF0YS5nbHRmW05BTUVdLm9yaWdpbmFsLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc2g6IG9yaWdpbmFsLm1lc2gsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYWw6IG9yaWdpbmFsLm1hdGVyaWFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gbWV0YWRhdGEudmFyaWFudHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobWV0YWRhdGEudmFyaWFudHMsIGtleSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdSb290Ll9pbnRlcm5hbE1ldGFkYXRhLmdsdGZbTkFNRV0udmFyaWFudHNba2V5XSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgdmFyaWFudEVudHJ5IG9mIG1ldGFkYXRhLnZhcmlhbnRzW2tleV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3Um9vdC5faW50ZXJuYWxNZXRhZGF0YS5nbHRmW05BTUVdLnZhcmlhbnRzW2tleV0ucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNoOiB2YXJpYW50RW50cnkubWVzaCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsOiB2YXJpYW50RW50cnkubWF0ZXJpYWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0YWRhdGEgPSBuZXdSb290Ll9pbnRlcm5hbE1ldGFkYXRhLmdsdGZbTkFNRV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSZWxvY2F0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgdGFyZ2V0IG9mIG1ldGFkYXRhIS5vcmlnaW5hbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0Lm1lc2ggPT09IGJhYnlsb25NZXNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQubWVzaCA9IG5ld01lc2g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCB0YXJnZXQgb2YgbWV0YWRhdGEhLnZhcmlhbnRzW3ZhcmlhbnQubmFtZV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldC5tZXNoID09PSBiYWJ5bG9uTWVzaCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Lm1lc2ggPSBuZXdNZXNoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoW2JhYnlsb25NZXNoXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGJhYnlsb25NZXNoO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuR0xURkxvYWRlci5SZWdpc3RlckV4dGVuc2lvbihOQU1FLCAobG9hZGVyKSA9PiBuZXcgS0hSX21hdGVyaWFsc192YXJpYW50cyhsb2FkZXIpKTtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uICovXHJcbmltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xyXG5pbXBvcnQgeyBQQlJNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9QQlIvcGJyTWF0ZXJpYWxcIjtcclxuaW1wb3J0IHR5cGUgeyBNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgdHlwZSB7IEJhc2VUZXh0dXJlIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1RleHR1cmVzL2Jhc2VUZXh0dXJlXCI7XHJcbmltcG9ydCB0eXBlIHsgSU1hdGVyaWFsLCBJVGV4dHVyZUluZm8gfSBmcm9tIFwiLi4vZ2xURkxvYWRlckludGVyZmFjZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBJR0xURkxvYWRlckV4dGVuc2lvbiB9IGZyb20gXCIuLi9nbFRGTG9hZGVyRXh0ZW5zaW9uXCI7XHJcbmltcG9ydCB7IEdMVEZMb2FkZXIgfSBmcm9tIFwiLi4vZ2xURkxvYWRlclwiO1xyXG5pbXBvcnQgdHlwZSB7IElLSFJNYXRlcmlhbHNWb2x1bWUgfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcblxyXG5jb25zdCBOQU1FID0gXCJLSFJfbWF0ZXJpYWxzX3ZvbHVtZVwiO1xyXG5cclxuLyoqXHJcbiAqIFtTcGVjaWZpY2F0aW9uXShodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi9tYWluL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX21hdGVyaWFsc192b2x1bWUvUkVBRE1FLm1kKVxyXG4gKiBAc2luY2UgNS4wLjBcclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGNsYXNzIEtIUl9tYXRlcmlhbHNfdm9sdW1lIGltcGxlbWVudHMgSUdMVEZMb2FkZXJFeHRlbnNpb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGlzIGV4dGVuc2lvbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBOQU1FO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIGVuYWJsZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBlbmFibGVkOiBib29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyBhIG51bWJlciB0aGF0IGRldGVybWluZXMgdGhlIG9yZGVyIHRoZSBleHRlbnNpb25zIGFyZSBhcHBsaWVkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb3JkZXIgPSAxNzM7XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZGVyOiBHTFRGTG9hZGVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGxvYWRlcjogR0xURkxvYWRlcikge1xyXG4gICAgICAgIHRoaXMuX2xvYWRlciA9IGxvYWRlcjtcclxuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0aGlzLl9sb2FkZXIuaXNFeHRlbnNpb25Vc2VkKE5BTUUpO1xyXG4gICAgICAgIGlmICh0aGlzLmVuYWJsZWQpIHtcclxuICAgICAgICAgICAgLy8gV2UgbmVlZCB0byBkaXNhYmxlIGluc3RhbmNlIHVzYWdlIGJlY2F1c2UgdGhlIGF0dGVudWF0aW9uIGZhY3RvciBkZXBlbmRzIG9uIHRoZSBub2RlIHNjYWxlIG9mIGVhY2ggaW5kaXZpZHVhbCBtZXNoXHJcbiAgICAgICAgICAgIHRoaXMuX2xvYWRlci5fZGlzYWJsZUluc3RhbmNlZE1lc2grKztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZW5hYmxlZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2FkZXIuX2Rpc2FibGVJbnN0YW5jZWRNZXNoLS07XHJcbiAgICAgICAgfVxyXG4gICAgICAgICh0aGlzLl9sb2FkZXIgYXMgYW55KSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWRNYXRlcmlhbFByb3BlcnRpZXNBc3luYyhjb250ZXh0OiBzdHJpbmcsIG1hdGVyaWFsOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBOdWxsYWJsZTxQcm9taXNlPHZvaWQ+PiB7XHJcbiAgICAgICAgcmV0dXJuIEdMVEZMb2FkZXIuTG9hZEV4dGVuc2lvbkFzeW5jPElLSFJNYXRlcmlhbHNWb2x1bWU+KGNvbnRleHQsIG1hdGVyaWFsLCB0aGlzLm5hbWUsIChleHRlbnNpb25Db250ZXh0LCBleHRlbnNpb24pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBuZXcgQXJyYXk8UHJvbWlzZTxhbnk+PigpO1xyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMuX2xvYWRlci5sb2FkTWF0ZXJpYWxCYXNlUHJvcGVydGllc0FzeW5jKGNvbnRleHQsIG1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWwpKTtcclxuICAgICAgICAgICAgcHJvbWlzZXMucHVzaCh0aGlzLl9sb2FkZXIubG9hZE1hdGVyaWFsUHJvcGVydGllc0FzeW5jKGNvbnRleHQsIG1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWwpKTtcclxuICAgICAgICAgICAgcHJvbWlzZXMucHVzaCh0aGlzLl9sb2FkVm9sdW1lUHJvcGVydGllc0FzeW5jKGV4dGVuc2lvbkNvbnRleHQsIG1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWwsIGV4dGVuc2lvbikpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4ge30pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2xvYWRWb2x1bWVQcm9wZXJ0aWVzQXN5bmMoY29udGV4dDogc3RyaW5nLCBtYXRlcmlhbDogSU1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsLCBleHRlbnNpb246IElLSFJNYXRlcmlhbHNWb2x1bWUpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBpZiAoIShiYWJ5bG9uTWF0ZXJpYWwgaW5zdGFuY2VvZiBQQlJNYXRlcmlhbCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2NvbnRleHR9OiBNYXRlcmlhbCB0eXBlIG5vdCBzdXBwb3J0ZWRgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIHRyYW5zcGFyZW5jeSBpc24ndCBlbmFibGVkIGFscmVhZHksIHRoaXMgZXh0ZW5zaW9uIHNob3VsZG4ndCBkbyBhbnl0aGluZy5cclxuICAgICAgICAvLyBpLmUuIGl0IHJlcXVpcmVzIGVpdGhlciB0aGUgS0hSX21hdGVyaWFsc190cmFuc21pc3Npb24gb3IgS0hSX21hdGVyaWFsc190cmFuc2x1Y2VuY3kgZXh0ZW5zaW9ucy5cclxuICAgICAgICBpZiAoKCFiYWJ5bG9uTWF0ZXJpYWwuc3ViU3VyZmFjZS5pc1JlZnJhY3Rpb25FbmFibGVkICYmICFiYWJ5bG9uTWF0ZXJpYWwuc3ViU3VyZmFjZS5pc1RyYW5zbHVjZW5jeUVuYWJsZWQpIHx8ICFleHRlbnNpb24udGhpY2tuZXNzRmFjdG9yKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElPUiBpbiB0aGlzIGV4dGVuc2lvbiBvbmx5IGFmZmVjdHMgaW50ZXJpb3IuXHJcbiAgICAgICAgYmFieWxvbk1hdGVyaWFsLnN1YlN1cmZhY2Uudm9sdW1lSW5kZXhPZlJlZnJhY3Rpb24gPSBiYWJ5bG9uTWF0ZXJpYWwuaW5kZXhPZlJlZnJhY3Rpb247XHJcbiAgICAgICAgY29uc3QgYXR0ZW51YXRpb25EaXN0YW5jZSA9IGV4dGVuc2lvbi5hdHRlbnVhdGlvbkRpc3RhbmNlICE9PSB1bmRlZmluZWQgPyBleHRlbnNpb24uYXR0ZW51YXRpb25EaXN0YW5jZSA6IE51bWJlci5NQVhfVkFMVUU7XHJcbiAgICAgICAgYmFieWxvbk1hdGVyaWFsLnN1YlN1cmZhY2UudGludENvbG9yQXREaXN0YW5jZSA9IGF0dGVudWF0aW9uRGlzdGFuY2U7XHJcbiAgICAgICAgaWYgKGV4dGVuc2lvbi5hdHRlbnVhdGlvbkNvbG9yICE9PSB1bmRlZmluZWQgJiYgZXh0ZW5zaW9uLmF0dGVudWF0aW9uQ29sb3IubGVuZ3RoID09IDMpIHtcclxuICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsLnN1YlN1cmZhY2UudGludENvbG9yLmNvcHlGcm9tRmxvYXRzKGV4dGVuc2lvbi5hdHRlbnVhdGlvbkNvbG9yWzBdLCBleHRlbnNpb24uYXR0ZW51YXRpb25Db2xvclsxXSwgZXh0ZW5zaW9uLmF0dGVudWF0aW9uQ29sb3JbMl0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYmFieWxvbk1hdGVyaWFsLnN1YlN1cmZhY2UubWluaW11bVRoaWNrbmVzcyA9IDAuMDtcclxuICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwuc3ViU3VyZmFjZS5tYXhpbXVtVGhpY2tuZXNzID0gZXh0ZW5zaW9uLnRoaWNrbmVzc0ZhY3RvcjtcclxuICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwuc3ViU3VyZmFjZS51c2VUaGlja25lc3NBc0RlcHRoID0gdHJ1ZTtcclxuICAgICAgICBpZiAoZXh0ZW5zaW9uLnRoaWNrbmVzc1RleHR1cmUpIHtcclxuICAgICAgICAgICAgKGV4dGVuc2lvbi50aGlja25lc3NUZXh0dXJlIGFzIElUZXh0dXJlSW5mbykubm9uQ29sb3JEYXRhID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRlci5sb2FkVGV4dHVyZUluZm9Bc3luYyhgJHtjb250ZXh0fS90aGlja25lc3NUZXh0dXJlYCwgZXh0ZW5zaW9uLnRoaWNrbmVzc1RleHR1cmUpLnRoZW4oKHRleHR1cmU6IEJhc2VUZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwuc3ViU3VyZmFjZS50aGlja25lc3NUZXh0dXJlID0gdGV4dHVyZTtcclxuICAgICAgICAgICAgICAgIGJhYnlsb25NYXRlcmlhbC5zdWJTdXJmYWNlLnVzZUdsdGZTdHlsZVRleHR1cmVzID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuR0xURkxvYWRlci5SZWdpc3RlckV4dGVuc2lvbihOQU1FLCAobG9hZGVyKSA9PiBuZXcgS0hSX21hdGVyaWFsc192b2x1bWUobG9hZGVyKSk7XHJcbiIsImltcG9ydCB0eXBlIHsgSUdMVEZMb2FkZXJFeHRlbnNpb24gfSBmcm9tIFwiLi4vZ2xURkxvYWRlckV4dGVuc2lvblwiO1xyXG5pbXBvcnQgeyBHTFRGTG9hZGVyIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJcIjtcclxuXHJcbmNvbnN0IE5BTUUgPSBcIktIUl9tZXNoX3F1YW50aXphdGlvblwiO1xyXG5cclxuLyoqXHJcbiAqIFtTcGVjaWZpY2F0aW9uXShodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi9tYWluL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX21lc2hfcXVhbnRpemF0aW9uL1JFQURNRS5tZClcclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGNsYXNzIEtIUl9tZXNoX3F1YW50aXphdGlvbiBpbXBsZW1lbnRzIElHTFRGTG9hZGVyRXh0ZW5zaW9uIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIG5hbWUgb2YgdGhpcyBleHRlbnNpb24uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lID0gTkFNRTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyBlbmFibGVkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZW5hYmxlZDogYm9vbGVhbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihsb2FkZXI6IEdMVEZMb2FkZXIpIHtcclxuICAgICAgICB0aGlzLmVuYWJsZWQgPSBsb2FkZXIuaXNFeHRlbnNpb25Vc2VkKE5BTUUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge31cclxufVxyXG5cclxuR0xURkxvYWRlci5SZWdpc3RlckV4dGVuc2lvbihOQU1FLCAobG9hZGVyKSA9PiBuZXcgS0hSX21lc2hfcXVhbnRpemF0aW9uKGxvYWRlcikpO1xyXG4iLCJpbXBvcnQgdHlwZSB7IElHTFRGTG9hZGVyRXh0ZW5zaW9uIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJFeHRlbnNpb25cIjtcclxuaW1wb3J0IHsgR0xURkxvYWRlciwgQXJyYXlJdGVtIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBJVGV4dHVyZSB9IGZyb20gXCIuLi9nbFRGTG9hZGVySW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQgdHlwZSB7IEJhc2VUZXh0dXJlIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1RleHR1cmVzL2Jhc2VUZXh0dXJlXCI7XHJcbmltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xyXG5pbXBvcnQgdHlwZSB7IElLSFJUZXh0dXJlQmFzaXNVIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5cclxuY29uc3QgTkFNRSA9IFwiS0hSX3RleHR1cmVfYmFzaXN1XCI7XHJcblxyXG4vKipcclxuICogW1NwZWNpZmljYXRpb25dKGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9ibG9iL21haW4vZXh0ZW5zaW9ucy8yLjAvS2hyb25vcy9LSFJfdGV4dHVyZV9iYXNpc3UvUkVBRE1FLm1kKVxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgY2xhc3MgS0hSX3RleHR1cmVfYmFzaXN1IGltcGxlbWVudHMgSUdMVEZMb2FkZXJFeHRlbnNpb24ge1xyXG4gICAgLyoqIFRoZSBuYW1lIG9mIHRoaXMgZXh0ZW5zaW9uLiAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBOQU1FO1xyXG5cclxuICAgIC8qKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgZW5hYmxlZC4gKi9cclxuICAgIHB1YmxpYyBlbmFibGVkOiBib29sZWFuO1xyXG5cclxuICAgIHByaXZhdGUgX2xvYWRlcjogR0xURkxvYWRlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihsb2FkZXI6IEdMVEZMb2FkZXIpIHtcclxuICAgICAgICB0aGlzLl9sb2FkZXIgPSBsb2FkZXI7XHJcbiAgICAgICAgdGhpcy5lbmFibGVkID0gbG9hZGVyLmlzRXh0ZW5zaW9uVXNlZChOQU1FKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHtcclxuICAgICAgICAodGhpcy5fbG9hZGVyIGFzIGFueSkgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfbG9hZFRleHR1cmVBc3luYyhjb250ZXh0OiBzdHJpbmcsIHRleHR1cmU6IElUZXh0dXJlLCBhc3NpZ246IChiYWJ5bG9uVGV4dHVyZTogQmFzZVRleHR1cmUpID0+IHZvaWQpOiBOdWxsYWJsZTxQcm9taXNlPEJhc2VUZXh0dXJlPj4ge1xyXG4gICAgICAgIHJldHVybiBHTFRGTG9hZGVyLkxvYWRFeHRlbnNpb25Bc3luYzxJS0hSVGV4dHVyZUJhc2lzVSwgQmFzZVRleHR1cmU+KGNvbnRleHQsIHRleHR1cmUsIHRoaXMubmFtZSwgKGV4dGVuc2lvbkNvbnRleHQsIGV4dGVuc2lvbikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzYW1wbGVyID0gdGV4dHVyZS5zYW1wbGVyID09IHVuZGVmaW5lZCA/IEdMVEZMb2FkZXIuRGVmYXVsdFNhbXBsZXIgOiBBcnJheUl0ZW0uR2V0KGAke2NvbnRleHR9L3NhbXBsZXJgLCB0aGlzLl9sb2FkZXIuZ2x0Zi5zYW1wbGVycywgdGV4dHVyZS5zYW1wbGVyKTtcclxuICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBBcnJheUl0ZW0uR2V0KGAke2V4dGVuc2lvbkNvbnRleHR9L3NvdXJjZWAsIHRoaXMuX2xvYWRlci5nbHRmLmltYWdlcywgZXh0ZW5zaW9uLnNvdXJjZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9sb2FkZXIuX2NyZWF0ZVRleHR1cmVBc3luYyhcclxuICAgICAgICAgICAgICAgIGNvbnRleHQsXHJcbiAgICAgICAgICAgICAgICBzYW1wbGVyLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2UsXHJcbiAgICAgICAgICAgICAgICAoYmFieWxvblRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBhc3NpZ24oYmFieWxvblRleHR1cmUpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHRleHR1cmUuX3RleHR1cmVJbmZvLm5vbkNvbG9yRGF0YSA/IHsgdXNlUkdCQUlmQVNUQ0JDN05vdEF2YWlsYWJsZVdoZW5VQVNUQzogdHJ1ZSB9IDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgIXRleHR1cmUuX3RleHR1cmVJbmZvLm5vbkNvbG9yRGF0YVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5HTFRGTG9hZGVyLlJlZ2lzdGVyRXh0ZW5zaW9uKE5BTUUsIChsb2FkZXIpID0+IG5ldyBLSFJfdGV4dHVyZV9iYXNpc3UobG9hZGVyKSk7XHJcbiIsImltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xyXG5pbXBvcnQgdHlwZSB7IEJhc2VUZXh0dXJlIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1RleHR1cmVzL2Jhc2VUZXh0dXJlXCI7XHJcbmltcG9ydCB7IFRleHR1cmUgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvdGV4dHVyZVwiO1xyXG5cclxuaW1wb3J0IHR5cGUgeyBJVGV4dHVyZUluZm8gfSBmcm9tIFwiLi4vZ2xURkxvYWRlckludGVyZmFjZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBJR0xURkxvYWRlckV4dGVuc2lvbiB9IGZyb20gXCIuLi9nbFRGTG9hZGVyRXh0ZW5zaW9uXCI7XHJcbmltcG9ydCB7IEdMVEZMb2FkZXIgfSBmcm9tIFwiLi4vZ2xURkxvYWRlclwiO1xyXG5pbXBvcnQgdHlwZSB7IElLSFJUZXh0dXJlVHJhbnNmb3JtIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5cclxuY29uc3QgTkFNRSA9IFwiS0hSX3RleHR1cmVfdHJhbnNmb3JtXCI7XHJcblxyXG4vKipcclxuICogW1NwZWNpZmljYXRpb25dKGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9ibG9iL21haW4vZXh0ZW5zaW9ucy8yLjAvS2hyb25vcy9LSFJfdGV4dHVyZV90cmFuc2Zvcm0vUkVBRE1FLm1kKVxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgY2xhc3MgS0hSX3RleHR1cmVfdHJhbnNmb3JtIGltcGxlbWVudHMgSUdMVEZMb2FkZXJFeHRlbnNpb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGlzIGV4dGVuc2lvbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBOQU1FO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIGVuYWJsZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBlbmFibGVkOiBib29sZWFuO1xyXG5cclxuICAgIHByaXZhdGUgX2xvYWRlcjogR0xURkxvYWRlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihsb2FkZXI6IEdMVEZMb2FkZXIpIHtcclxuICAgICAgICB0aGlzLl9sb2FkZXIgPSBsb2FkZXI7XHJcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdGhpcy5fbG9hZGVyLmlzRXh0ZW5zaW9uVXNlZChOQU1FKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHtcclxuICAgICAgICAodGhpcy5fbG9hZGVyIGFzIGFueSkgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkVGV4dHVyZUluZm9Bc3luYyhjb250ZXh0OiBzdHJpbmcsIHRleHR1cmVJbmZvOiBJVGV4dHVyZUluZm8sIGFzc2lnbjogKGJhYnlsb25UZXh0dXJlOiBCYXNlVGV4dHVyZSkgPT4gdm9pZCk6IE51bGxhYmxlPFByb21pc2U8QmFzZVRleHR1cmU+PiB7XHJcbiAgICAgICAgcmV0dXJuIEdMVEZMb2FkZXIuTG9hZEV4dGVuc2lvbkFzeW5jPElLSFJUZXh0dXJlVHJhbnNmb3JtLCBCYXNlVGV4dHVyZT4oY29udGV4dCwgdGV4dHVyZUluZm8sIHRoaXMubmFtZSwgKGV4dGVuc2lvbkNvbnRleHQsIGV4dGVuc2lvbikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbG9hZGVyLmxvYWRUZXh0dXJlSW5mb0FzeW5jKGNvbnRleHQsIHRleHR1cmVJbmZvLCAoYmFieWxvblRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghKGJhYnlsb25UZXh0dXJlIGluc3RhbmNlb2YgVGV4dHVyZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7ZXh0ZW5zaW9uQ29udGV4dH06IFRleHR1cmUgdHlwZSBub3Qgc3VwcG9ydGVkYCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGV4dGVuc2lvbi5vZmZzZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uVGV4dHVyZS51T2Zmc2V0ID0gZXh0ZW5zaW9uLm9mZnNldFswXTtcclxuICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uVGV4dHVyZS52T2Zmc2V0ID0gZXh0ZW5zaW9uLm9mZnNldFsxXTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBBbHdheXMgcm90YXRlIGFyb3VuZCB0aGUgb3JpZ2luLlxyXG4gICAgICAgICAgICAgICAgYmFieWxvblRleHR1cmUudVJvdGF0aW9uQ2VudGVyID0gMDtcclxuICAgICAgICAgICAgICAgIGJhYnlsb25UZXh0dXJlLnZSb3RhdGlvbkNlbnRlciA9IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGV4dGVuc2lvbi5yb3RhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhYnlsb25UZXh0dXJlLndBbmcgPSAtZXh0ZW5zaW9uLnJvdGF0aW9uO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChleHRlbnNpb24uc2NhbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uVGV4dHVyZS51U2NhbGUgPSBleHRlbnNpb24uc2NhbGVbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgYmFieWxvblRleHR1cmUudlNjYWxlID0gZXh0ZW5zaW9uLnNjYWxlWzFdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChleHRlbnNpb24udGV4Q29vcmQgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFieWxvblRleHR1cmUuY29vcmRpbmF0ZXNJbmRleCA9IGV4dGVuc2lvbi50ZXhDb29yZDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBhc3NpZ24oYmFieWxvblRleHR1cmUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuR0xURkxvYWRlci5SZWdpc3RlckV4dGVuc2lvbihOQU1FLCAobG9hZGVyKSA9PiBuZXcgS0hSX3RleHR1cmVfdHJhbnNmb3JtKGxvYWRlcikpO1xyXG4iLCJpbXBvcnQgdHlwZSB7IElHTFRGTG9hZGVyRXh0ZW5zaW9uIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJFeHRlbnNpb25cIjtcclxuaW1wb3J0IHsgR0xURkxvYWRlciB9IGZyb20gXCIuLi9nbFRGTG9hZGVyXCI7XHJcbmltcG9ydCB0eXBlIHsgSUtIUlhtcEpzb25MZF9HbHRmLCBJS0hSWG1wSnNvbkxkX05vZGUgfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcblxyXG5jb25zdCBOQU1FID0gXCJLSFJfeG1wX2pzb25fbGRcIjtcclxuXHJcbi8qKlxyXG4gKiBbU3BlY2lmaWNhdGlvbl0oaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFpbi9leHRlbnNpb25zLzIuMC9LaHJvbm9zL0tIUl94bXBfanNvbl9sZC9SRUFETUUubWQpXHJcbiAqIEBzaW5jZSA1LjAuMFxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgY2xhc3MgS0hSX3htcF9qc29uX2xkIGltcGxlbWVudHMgSUdMVEZMb2FkZXJFeHRlbnNpb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGlzIGV4dGVuc2lvbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBOQU1FO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIGVuYWJsZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBlbmFibGVkOiBib29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyBhIG51bWJlciB0aGF0IGRldGVybWluZXMgdGhlIG9yZGVyIHRoZSBleHRlbnNpb25zIGFyZSBhcHBsaWVkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb3JkZXIgPSAxMDA7XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZGVyOiBHTFRGTG9hZGVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGxvYWRlcjogR0xURkxvYWRlcikge1xyXG4gICAgICAgIHRoaXMuX2xvYWRlciA9IGxvYWRlcjtcclxuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0aGlzLl9sb2FkZXIuaXNFeHRlbnNpb25Vc2VkKE5BTUUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge1xyXG4gICAgICAgICh0aGlzLl9sb2FkZXIgYXMgYW55KSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgYWZ0ZXIgdGhlIGxvYWRlciBzdGF0ZSBjaGFuZ2VzIHRvIExPQURJTkcuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvbkxvYWRpbmcoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2xvYWRlci5yb290QmFieWxvbk1lc2ggPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgeG1wX2dsdGYgPSB0aGlzLl9sb2FkZXIuZ2x0Zi5leHRlbnNpb25zPy5LSFJfeG1wX2pzb25fbGQgYXMgSUtIUlhtcEpzb25MZF9HbHRmO1xyXG4gICAgICAgIGNvbnN0IHhtcF9ub2RlID0gdGhpcy5fbG9hZGVyLmdsdGYuYXNzZXQ/LmV4dGVuc2lvbnM/LktIUl94bXBfanNvbl9sZCBhcyBJS0hSWG1wSnNvbkxkX05vZGU7XHJcbiAgICAgICAgaWYgKHhtcF9nbHRmICYmIHhtcF9ub2RlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhY2tldCA9ICt4bXBfbm9kZS5wYWNrZXQ7XHJcbiAgICAgICAgICAgIGlmICh4bXBfZ2x0Zi5wYWNrZXRzICYmIHBhY2tldCA8IHhtcF9nbHRmLnBhY2tldHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2FkZXIucm9vdEJhYnlsb25NZXNoLm1ldGFkYXRhID0gdGhpcy5fbG9hZGVyLnJvb3RCYWJ5bG9uTWVzaC5tZXRhZGF0YSB8fCB7fTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRlci5yb290QmFieWxvbk1lc2gubWV0YWRhdGEueG1wID0geG1wX2dsdGYucGFja2V0c1twYWNrZXRdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5HTFRGTG9hZGVyLlJlZ2lzdGVyRXh0ZW5zaW9uKE5BTUUsIChsb2FkZXIpID0+IG5ldyBLSFJfeG1wX2pzb25fbGQobG9hZGVyKSk7XHJcbiIsImltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xyXG5pbXBvcnQgeyBWZWN0b3IzIH0gZnJvbSBcImNvcmUvTWF0aHMvbWF0aC52ZWN0b3JcIjtcclxuaW1wb3J0IHsgVG9vbHMgfSBmcm9tIFwiY29yZS9NaXNjL3Rvb2xzXCI7XHJcbmltcG9ydCB0eXBlIHsgQW5pbWF0aW9uR3JvdXAgfSBmcm9tIFwiY29yZS9BbmltYXRpb25zL2FuaW1hdGlvbkdyb3VwXCI7XHJcbmltcG9ydCB7IEFuaW1hdGlvbkV2ZW50IH0gZnJvbSBcImNvcmUvQW5pbWF0aW9ucy9hbmltYXRpb25FdmVudFwiO1xyXG5pbXBvcnQgdHlwZSB7IFRyYW5zZm9ybU5vZGUgfSBmcm9tIFwiY29yZS9NZXNoZXMvdHJhbnNmb3JtTm9kZVwiO1xyXG5pbXBvcnQgeyBTb3VuZCB9IGZyb20gXCJjb3JlL0F1ZGlvL3NvdW5kXCI7XHJcbmltcG9ydCB7IFdlaWdodGVkU291bmQgfSBmcm9tIFwiY29yZS9BdWRpby93ZWlnaHRlZHNvdW5kXCI7XHJcblxyXG5pbXBvcnQgdHlwZSB7IElBcnJheUl0ZW0sIElTY2VuZSwgSU5vZGUsIElBbmltYXRpb24gfSBmcm9tIFwiLi4vZ2xURkxvYWRlckludGVyZmFjZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBJR0xURkxvYWRlckV4dGVuc2lvbiB9IGZyb20gXCIuLi9nbFRGTG9hZGVyRXh0ZW5zaW9uXCI7XHJcbmltcG9ydCB7IEdMVEZMb2FkZXIsIEFycmF5SXRlbSB9IGZyb20gXCIuLi9nbFRGTG9hZGVyXCI7XHJcbmltcG9ydCB0eXBlIHsgSU1TRlRBdWRpb0VtaXR0ZXJfQ2xpcCwgSU1TRlRBdWRpb0VtaXR0ZXJfRW1pdHRlciwgSU1TRlRBdWRpb0VtaXR0ZXJfRW1pdHRlcnNSZWZlcmVuY2UsIElNU0ZUQXVkaW9FbWl0dGVyX0FuaW1hdGlvbkV2ZW50IH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBJTVNGVEF1ZGlvRW1pdHRlcl9BbmltYXRpb25FdmVudEFjdGlvbiB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuXHJcbmNvbnN0IE5BTUUgPSBcIk1TRlRfYXVkaW9fZW1pdHRlclwiO1xyXG5cclxuaW50ZXJmYWNlIElMb2FkZXJDbGlwIGV4dGVuZHMgSU1TRlRBdWRpb0VtaXR0ZXJfQ2xpcCwgSUFycmF5SXRlbSB7XHJcbiAgICBfb2JqZWN0VVJMPzogUHJvbWlzZTxzdHJpbmc+O1xyXG59XHJcblxyXG5pbnRlcmZhY2UgSUxvYWRlckVtaXR0ZXIgZXh0ZW5kcyBJTVNGVEF1ZGlvRW1pdHRlcl9FbWl0dGVyLCBJQXJyYXlJdGVtIHtcclxuICAgIF9iYWJ5bG9uRGF0YT86IHtcclxuICAgICAgICBzb3VuZD86IFdlaWdodGVkU291bmQ7XHJcbiAgICAgICAgbG9hZGVkOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgfTtcclxuICAgIF9iYWJ5bG9uU291bmRzOiBTb3VuZFtdO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgSU1TRlRBdWRpb0VtaXR0ZXIge1xyXG4gICAgY2xpcHM6IElMb2FkZXJDbGlwW107XHJcbiAgICBlbWl0dGVyczogSUxvYWRlckVtaXR0ZXJbXTtcclxufVxyXG5cclxuaW50ZXJmYWNlIElMb2FkZXJBbmltYXRpb25FdmVudCBleHRlbmRzIElNU0ZUQXVkaW9FbWl0dGVyX0FuaW1hdGlvbkV2ZW50LCBJQXJyYXlJdGVtIHt9XHJcblxyXG5pbnRlcmZhY2UgSUxvYWRlckFuaW1hdGlvbkV2ZW50cyB7XHJcbiAgICBldmVudHM6IElMb2FkZXJBbmltYXRpb25FdmVudFtdO1xyXG59XHJcblxyXG4vKipcclxuICogW1NwZWNpZmljYXRpb25dKGh0dHBzOi8vZ2l0aHViLmNvbS9uYWphZG9qby9nbFRGL2Jsb2IvTVNGVF9hdWRpb19lbWl0dGVyL2V4dGVuc2lvbnMvMi4wL1ZlbmRvci9NU0ZUX2F1ZGlvX2VtaXR0ZXIvUkVBRE1FLm1kKVxyXG4gKiAhISEgRXhwZXJpbWVudGFsIEV4dGVuc2lvbiBTdWJqZWN0IHRvIENoYW5nZXMgISEhXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBjbGFzcyBNU0ZUX2F1ZGlvX2VtaXR0ZXIgaW1wbGVtZW50cyBJR0xURkxvYWRlckV4dGVuc2lvbiB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBuYW1lIG9mIHRoaXMgZXh0ZW5zaW9uLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZSA9IE5BTUU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgZW5hYmxlZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGVuYWJsZWQ6IGJvb2xlYW47XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZGVyOiBHTFRGTG9hZGVyO1xyXG4gICAgcHJpdmF0ZSBfY2xpcHM6IEFycmF5PElMb2FkZXJDbGlwPjtcclxuICAgIHByaXZhdGUgX2VtaXR0ZXJzOiBBcnJheTxJTG9hZGVyRW1pdHRlcj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobG9hZGVyOiBHTFRGTG9hZGVyKSB7XHJcbiAgICAgICAgdGhpcy5fbG9hZGVyID0gbG9hZGVyO1xyXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRoaXMuX2xvYWRlci5pc0V4dGVuc2lvblVzZWQoTkFNRSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgKHRoaXMuX2xvYWRlciBhcyBhbnkpID0gbnVsbDtcclxuICAgICAgICAodGhpcy5fY2xpcHMgYXMgYW55KSA9IG51bGw7XHJcbiAgICAgICAgKHRoaXMuX2VtaXR0ZXJzIGFzIGFueSkgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBvbkxvYWRpbmcoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgZXh0ZW5zaW9ucyA9IHRoaXMuX2xvYWRlci5nbHRmLmV4dGVuc2lvbnM7XHJcbiAgICAgICAgaWYgKGV4dGVuc2lvbnMgJiYgZXh0ZW5zaW9uc1t0aGlzLm5hbWVdKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IGV4dGVuc2lvbnNbdGhpcy5uYW1lXSBhcyBJTVNGVEF1ZGlvRW1pdHRlcjtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2NsaXBzID0gZXh0ZW5zaW9uLmNsaXBzO1xyXG4gICAgICAgICAgICB0aGlzLl9lbWl0dGVycyA9IGV4dGVuc2lvbi5lbWl0dGVycztcclxuXHJcbiAgICAgICAgICAgIEFycmF5SXRlbS5Bc3NpZ24odGhpcy5fY2xpcHMpO1xyXG4gICAgICAgICAgICBBcnJheUl0ZW0uQXNzaWduKHRoaXMuX2VtaXR0ZXJzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWRTY2VuZUFzeW5jKGNvbnRleHQ6IHN0cmluZywgc2NlbmU6IElTY2VuZSk6IE51bGxhYmxlPFByb21pc2U8dm9pZD4+IHtcclxuICAgICAgICByZXR1cm4gR0xURkxvYWRlci5Mb2FkRXh0ZW5zaW9uQXN5bmM8SU1TRlRBdWRpb0VtaXR0ZXJfRW1pdHRlcnNSZWZlcmVuY2U+KGNvbnRleHQsIHNjZW5lLCB0aGlzLm5hbWUsIChleHRlbnNpb25Db250ZXh0LCBleHRlbnNpb24pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBuZXcgQXJyYXk8UHJvbWlzZTxhbnk+PigpO1xyXG5cclxuICAgICAgICAgICAgcHJvbWlzZXMucHVzaCh0aGlzLl9sb2FkZXIubG9hZFNjZW5lQXN5bmMoY29udGV4dCwgc2NlbmUpKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgZW1pdHRlckluZGV4IG9mIGV4dGVuc2lvbi5lbWl0dGVycykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZW1pdHRlciA9IEFycmF5SXRlbS5HZXQoYCR7ZXh0ZW5zaW9uQ29udGV4dH0vZW1pdHRlcnNgLCB0aGlzLl9lbWl0dGVycywgZW1pdHRlckluZGV4KTtcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICBlbWl0dGVyLnJlZkRpc3RhbmNlICE9IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGVtaXR0ZXIubWF4RGlzdGFuY2UgIT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgZW1pdHRlci5yb2xsb2ZmRmFjdG9yICE9IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGVtaXR0ZXIuZGlzdGFuY2VNb2RlbCAhPSB1bmRlZmluZWQgfHxcclxuICAgICAgICAgICAgICAgICAgICBlbWl0dGVyLmlubmVyQW5nbGUgIT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgZW1pdHRlci5vdXRlckFuZ2xlICE9IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2V4dGVuc2lvbkNvbnRleHR9OiBEaXJlY3Rpb24gb3IgRGlzdGFuY2UgcHJvcGVydGllcyBhcmUgbm90IGFsbG93ZWQgb24gZW1pdHRlcnMgYXR0YWNoZWQgdG8gYSBzY2VuZWApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5fbG9hZEVtaXR0ZXJBc3luYyhgJHtleHRlbnNpb25Db250ZXh0fS9lbWl0dGVycy8ke2VtaXR0ZXIuaW5kZXh9YCwgZW1pdHRlcikpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4ge30pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkTm9kZUFzeW5jKGNvbnRleHQ6IHN0cmluZywgbm9kZTogSU5vZGUsIGFzc2lnbjogKGJhYnlsb25UcmFuc2Zvcm1Ob2RlOiBUcmFuc2Zvcm1Ob2RlKSA9PiB2b2lkKTogTnVsbGFibGU8UHJvbWlzZTxUcmFuc2Zvcm1Ob2RlPj4ge1xyXG4gICAgICAgIHJldHVybiBHTFRGTG9hZGVyLkxvYWRFeHRlbnNpb25Bc3luYzxJTVNGVEF1ZGlvRW1pdHRlcl9FbWl0dGVyc1JlZmVyZW5jZSwgVHJhbnNmb3JtTm9kZT4oY29udGV4dCwgbm9kZSwgdGhpcy5uYW1lLCAoZXh0ZW5zaW9uQ29udGV4dCwgZXh0ZW5zaW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb21pc2VzID0gbmV3IEFycmF5PFByb21pc2U8YW55Pj4oKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9sb2FkZXJcclxuICAgICAgICAgICAgICAgIC5sb2FkTm9kZUFzeW5jKGV4dGVuc2lvbkNvbnRleHQsIG5vZGUsIChiYWJ5bG9uTWVzaCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZW1pdHRlckluZGV4IG9mIGV4dGVuc2lvbi5lbWl0dGVycykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbWl0dGVyID0gQXJyYXlJdGVtLkdldChgJHtleHRlbnNpb25Db250ZXh0fS9lbWl0dGVyc2AsIHRoaXMuX2VtaXR0ZXJzLCBlbWl0dGVySW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9hZEVtaXR0ZXJBc3luYyhgJHtleHRlbnNpb25Db250ZXh0fS9lbWl0dGVycy8ke2VtaXR0ZXIuaW5kZXh9YCwgZW1pdHRlcikudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBzb3VuZCBvZiBlbWl0dGVyLl9iYWJ5bG9uU291bmRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdW5kLmF0dGFjaFRvTWVzaChiYWJ5bG9uTWVzaCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbWl0dGVyLmlubmVyQW5nbGUgIT0gdW5kZWZpbmVkIHx8IGVtaXR0ZXIub3V0ZXJBbmdsZSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdW5kLnNldExvY2FsRGlyZWN0aW9uVG9NZXNoKFZlY3RvcjMuRm9yd2FyZCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdW5kLnNldERpcmVjdGlvbmFsQ29uZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyICogVG9vbHMuVG9EZWdyZWVzKGVtaXR0ZXIuaW5uZXJBbmdsZSA9PSB1bmRlZmluZWQgPyBNYXRoLlBJIDogZW1pdHRlci5pbm5lckFuZ2xlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyICogVG9vbHMuVG9EZWdyZWVzKGVtaXR0ZXIub3V0ZXJBbmdsZSA9PSB1bmRlZmluZWQgPyBNYXRoLlBJIDogZW1pdHRlci5vdXRlckFuZ2xlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGFzc2lnbihiYWJ5bG9uTWVzaCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKGJhYnlsb25NZXNoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJhYnlsb25NZXNoO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWRBbmltYXRpb25Bc3luYyhjb250ZXh0OiBzdHJpbmcsIGFuaW1hdGlvbjogSUFuaW1hdGlvbik6IE51bGxhYmxlPFByb21pc2U8QW5pbWF0aW9uR3JvdXA+PiB7XHJcbiAgICAgICAgcmV0dXJuIEdMVEZMb2FkZXIuTG9hZEV4dGVuc2lvbkFzeW5jPElMb2FkZXJBbmltYXRpb25FdmVudHMsIEFuaW1hdGlvbkdyb3VwPihjb250ZXh0LCBhbmltYXRpb24sIHRoaXMubmFtZSwgKGV4dGVuc2lvbkNvbnRleHQsIGV4dGVuc2lvbikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbG9hZGVyLmxvYWRBbmltYXRpb25Bc3luYyhjb250ZXh0LCBhbmltYXRpb24pLnRoZW4oKGJhYnlsb25BbmltYXRpb25Hcm91cCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBuZXcgQXJyYXk8UHJvbWlzZTxhbnk+PigpO1xyXG5cclxuICAgICAgICAgICAgICAgIEFycmF5SXRlbS5Bc3NpZ24oZXh0ZW5zaW9uLmV2ZW50cyk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGV2ZW50IG9mIGV4dGVuc2lvbi5ldmVudHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMuX2xvYWRBbmltYXRpb25FdmVudEFzeW5jKGAke2V4dGVuc2lvbkNvbnRleHR9L2V2ZW50cy8ke2V2ZW50LmluZGV4fWAsIGNvbnRleHQsIGFuaW1hdGlvbiwgZXZlbnQsIGJhYnlsb25BbmltYXRpb25Hcm91cCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJhYnlsb25BbmltYXRpb25Hcm91cDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9sb2FkQ2xpcEFzeW5jKGNvbnRleHQ6IHN0cmluZywgY2xpcDogSUxvYWRlckNsaXApOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIGlmIChjbGlwLl9vYmplY3RVUkwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNsaXAuX29iamVjdFVSTDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBwcm9taXNlOiBQcm9taXNlPEFycmF5QnVmZmVyVmlldz47XHJcbiAgICAgICAgaWYgKGNsaXAudXJpKSB7XHJcbiAgICAgICAgICAgIHByb21pc2UgPSB0aGlzLl9sb2FkZXIubG9hZFVyaUFzeW5jKGNvbnRleHQsIGNsaXAsIGNsaXAudXJpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBidWZmZXJWaWV3ID0gQXJyYXlJdGVtLkdldChgJHtjb250ZXh0fS9idWZmZXJWaWV3YCwgdGhpcy5fbG9hZGVyLmdsdGYuYnVmZmVyVmlld3MsIGNsaXAuYnVmZmVyVmlldyk7XHJcbiAgICAgICAgICAgIHByb21pc2UgPSB0aGlzLl9sb2FkZXIubG9hZEJ1ZmZlclZpZXdBc3luYyhgL2J1ZmZlclZpZXdzLyR7YnVmZmVyVmlldy5pbmRleH1gLCBidWZmZXJWaWV3KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNsaXAuX29iamVjdFVSTCA9IHByb21pc2UudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gVVJMLmNyZWF0ZU9iamVjdFVSTChuZXcgQmxvYihbZGF0YV0sIHsgdHlwZTogY2xpcC5taW1lVHlwZSB9KSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBjbGlwLl9vYmplY3RVUkw7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZEVtaXR0ZXJBc3luYyhjb250ZXh0OiBzdHJpbmcsIGVtaXR0ZXI6IElMb2FkZXJFbWl0dGVyKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgZW1pdHRlci5fYmFieWxvblNvdW5kcyA9IGVtaXR0ZXIuX2JhYnlsb25Tb3VuZHMgfHwgW107XHJcbiAgICAgICAgaWYgKCFlbWl0dGVyLl9iYWJ5bG9uRGF0YSkge1xyXG4gICAgICAgICAgICBjb25zdCBjbGlwUHJvbWlzZXMgPSBuZXcgQXJyYXk8UHJvbWlzZTxhbnk+PigpO1xyXG4gICAgICAgICAgICBjb25zdCBuYW1lID0gZW1pdHRlci5uYW1lIHx8IGBlbWl0dGVyJHtlbWl0dGVyLmluZGV4fWA7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICBsb29wOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHZvbHVtZTogZW1pdHRlci52b2x1bWUgPT0gdW5kZWZpbmVkID8gMSA6IGVtaXR0ZXIudm9sdW1lLFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbWl0dGVyLmNsaXBzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjbGlwQ29udGV4dCA9IGAvZXh0ZW5zaW9ucy8ke3RoaXMubmFtZX0vY2xpcHNgO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2xpcCA9IEFycmF5SXRlbS5HZXQoY2xpcENvbnRleHQsIHRoaXMuX2NsaXBzLCBlbWl0dGVyLmNsaXBzW2ldLmNsaXApO1xyXG4gICAgICAgICAgICAgICAgY2xpcFByb21pc2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9hZENsaXBBc3luYyhgJHtjbGlwQ29udGV4dH0vJHtlbWl0dGVyLmNsaXBzW2ldLmNsaXB9YCwgY2xpcCkudGhlbigob2JqZWN0VVJMOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc291bmQgPSAoZW1pdHRlci5fYmFieWxvblNvdW5kc1tpXSA9IG5ldyBTb3VuZChuYW1lLCBvYmplY3RVUkwsIHRoaXMuX2xvYWRlci5iYWJ5bG9uU2NlbmUsIG51bGwsIG9wdGlvbnMpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc291bmQucmVmRGlzdGFuY2UgPSBlbWl0dGVyLnJlZkRpc3RhbmNlIHx8IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdW5kLm1heERpc3RhbmNlID0gZW1pdHRlci5tYXhEaXN0YW5jZSB8fCAyNTY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdW5kLnJvbGxvZmZGYWN0b3IgPSBlbWl0dGVyLnJvbGxvZmZGYWN0b3IgfHwgMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc291bmQuZGlzdGFuY2VNb2RlbCA9IGVtaXR0ZXIuZGlzdGFuY2VNb2RlbCB8fCBcImV4cG9uZW50aWFsXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHByb21pc2UgPSBQcm9taXNlLmFsbChjbGlwUHJvbWlzZXMpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgd2VpZ2h0cyA9IGVtaXR0ZXIuY2xpcHMubWFwKChjbGlwKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNsaXAud2VpZ2h0IHx8IDE7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHdlaWdodGVkU291bmQgPSBuZXcgV2VpZ2h0ZWRTb3VuZChlbWl0dGVyLmxvb3AgfHwgZmFsc2UsIGVtaXR0ZXIuX2JhYnlsb25Tb3VuZHMsIHdlaWdodHMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVtaXR0ZXIuaW5uZXJBbmdsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdlaWdodGVkU291bmQuZGlyZWN0aW9uYWxDb25lSW5uZXJBbmdsZSA9IDIgKiBUb29scy5Ub0RlZ3JlZXMoZW1pdHRlci5pbm5lckFuZ2xlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChlbWl0dGVyLm91dGVyQW5nbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB3ZWlnaHRlZFNvdW5kLmRpcmVjdGlvbmFsQ29uZU91dGVyQW5nbGUgPSAyICogVG9vbHMuVG9EZWdyZWVzKGVtaXR0ZXIub3V0ZXJBbmdsZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZW1pdHRlci52b2x1bWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB3ZWlnaHRlZFNvdW5kLnZvbHVtZSA9IGVtaXR0ZXIudm9sdW1lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZW1pdHRlci5fYmFieWxvbkRhdGEhLnNvdW5kID0gd2VpZ2h0ZWRTb3VuZDtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBlbWl0dGVyLl9iYWJ5bG9uRGF0YSA9IHtcclxuICAgICAgICAgICAgICAgIGxvYWRlZDogcHJvbWlzZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBlbWl0dGVyLl9iYWJ5bG9uRGF0YS5sb2FkZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZ2V0RXZlbnRBY3Rpb24oXHJcbiAgICAgICAgY29udGV4dDogc3RyaW5nLFxyXG4gICAgICAgIHNvdW5kOiBXZWlnaHRlZFNvdW5kLFxyXG4gICAgICAgIGFjdGlvbjogSU1TRlRBdWRpb0VtaXR0ZXJfQW5pbWF0aW9uRXZlbnRBY3Rpb24sXHJcbiAgICAgICAgdGltZTogbnVtYmVyLFxyXG4gICAgICAgIHN0YXJ0T2Zmc2V0PzogbnVtYmVyXHJcbiAgICApOiAoY3VycmVudEZyYW1lOiBudW1iZXIpID0+IHZvaWQge1xyXG4gICAgICAgIHN3aXRjaCAoYWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNhc2UgSU1TRlRBdWRpb0VtaXR0ZXJfQW5pbWF0aW9uRXZlbnRBY3Rpb24ucGxheToge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChjdXJyZW50RnJhbWU6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZyYW1lT2Zmc2V0ID0gKHN0YXJ0T2Zmc2V0IHx8IDApICsgKGN1cnJlbnRGcmFtZSAtIHRpbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNvdW5kLnBsYXkoZnJhbWVPZmZzZXQpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIElNU0ZUQXVkaW9FbWl0dGVyX0FuaW1hdGlvbkV2ZW50QWN0aW9uLnN0b3A6IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc291bmQuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIElNU0ZUQXVkaW9FbWl0dGVyX0FuaW1hdGlvbkV2ZW50QWN0aW9uLnBhdXNlOiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNvdW5kLnBhdXNlKCk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtjb250ZXh0fTogVW5zdXBwb3J0ZWQgYWN0aW9uICR7YWN0aW9ufWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2xvYWRBbmltYXRpb25FdmVudEFzeW5jKFxyXG4gICAgICAgIGNvbnRleHQ6IHN0cmluZyxcclxuICAgICAgICBhbmltYXRpb25Db250ZXh0OiBzdHJpbmcsXHJcbiAgICAgICAgYW5pbWF0aW9uOiBJQW5pbWF0aW9uLFxyXG4gICAgICAgIGV2ZW50OiBJTG9hZGVyQW5pbWF0aW9uRXZlbnQsXHJcbiAgICAgICAgYmFieWxvbkFuaW1hdGlvbkdyb3VwOiBBbmltYXRpb25Hcm91cFxyXG4gICAgKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgaWYgKGJhYnlsb25BbmltYXRpb25Hcm91cC50YXJnZXRlZEFuaW1hdGlvbnMubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBiYWJ5bG9uQW5pbWF0aW9uID0gYmFieWxvbkFuaW1hdGlvbkdyb3VwLnRhcmdldGVkQW5pbWF0aW9uc1swXTtcclxuICAgICAgICBjb25zdCBlbWl0dGVySW5kZXggPSBldmVudC5lbWl0dGVyO1xyXG4gICAgICAgIGNvbnN0IGVtaXR0ZXIgPSBBcnJheUl0ZW0uR2V0KGAvZXh0ZW5zaW9ucy8ke3RoaXMubmFtZX0vZW1pdHRlcnNgLCB0aGlzLl9lbWl0dGVycywgZW1pdHRlckluZGV4KTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbG9hZEVtaXR0ZXJBc3luYyhjb250ZXh0LCBlbWl0dGVyKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc291bmQgPSBlbWl0dGVyLl9iYWJ5bG9uRGF0YSEuc291bmQ7XHJcbiAgICAgICAgICAgIGlmIChzb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYmFieWxvbkFuaW1hdGlvbkV2ZW50ID0gbmV3IEFuaW1hdGlvbkV2ZW50KGV2ZW50LnRpbWUsIHRoaXMuX2dldEV2ZW50QWN0aW9uKGNvbnRleHQsIHNvdW5kLCBldmVudC5hY3Rpb24sIGV2ZW50LnRpbWUsIGV2ZW50LnN0YXJ0T2Zmc2V0KSk7XHJcbiAgICAgICAgICAgICAgICBiYWJ5bG9uQW5pbWF0aW9uLmFuaW1hdGlvbi5hZGRFdmVudChiYWJ5bG9uQW5pbWF0aW9uRXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgLy8gTWFrZSBzdXJlIGFsbCBzdGFydGVkIGF1ZGlvIHN0b3BzIHdoZW4gdGhpcyBhbmltYXRpb24gaXMgdGVybWluYXRlZC5cclxuICAgICAgICAgICAgICAgIGJhYnlsb25BbmltYXRpb25Hcm91cC5vbkFuaW1hdGlvbkdyb3VwRW5kT2JzZXJ2YWJsZS5hZGQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYmFieWxvbkFuaW1hdGlvbkdyb3VwLm9uQW5pbWF0aW9uR3JvdXBQYXVzZU9ic2VydmFibGUuYWRkKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzb3VuZC5wYXVzZSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuR0xURkxvYWRlci5SZWdpc3RlckV4dGVuc2lvbihOQU1FLCAobG9hZGVyKSA9PiBuZXcgTVNGVF9hdWRpb19lbWl0dGVyKGxvYWRlcikpO1xyXG4iLCJpbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcImNvcmUvdHlwZXNcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJjb3JlL01pc2Mvb2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBEZWZlcnJlZCB9IGZyb20gXCJjb3JlL01pc2MvZGVmZXJyZWRcIjtcclxuaW1wb3J0IHR5cGUgeyBNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgdHlwZSB7IFRyYW5zZm9ybU5vZGUgfSBmcm9tIFwiY29yZS9NZXNoZXMvdHJhbnNmb3JtTm9kZVwiO1xyXG5pbXBvcnQgdHlwZSB7IE1lc2ggfSBmcm9tIFwiY29yZS9NZXNoZXMvbWVzaFwiO1xyXG5pbXBvcnQgdHlwZSB7IEJhc2VUZXh0dXJlIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1RleHR1cmVzL2Jhc2VUZXh0dXJlXCI7XHJcbmltcG9ydCB0eXBlIHsgSU5vZGUsIElNYXRlcmlhbCwgSUJ1ZmZlciwgSVNjZW5lIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJJbnRlcmZhY2VzXCI7XHJcbmltcG9ydCB0eXBlIHsgSUdMVEZMb2FkZXJFeHRlbnNpb24gfSBmcm9tIFwiLi4vZ2xURkxvYWRlckV4dGVuc2lvblwiO1xyXG5pbXBvcnQgeyBHTFRGTG9hZGVyLCBBcnJheUl0ZW0gfSBmcm9tIFwiLi4vZ2xURkxvYWRlclwiO1xyXG5pbXBvcnQgdHlwZSB7IElQcm9wZXJ0eSwgSU1TRlRMT0QgfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcblxyXG5jb25zdCBOQU1FID0gXCJNU0ZUX2xvZFwiO1xyXG5cclxuaW50ZXJmYWNlIElCdWZmZXJJbmZvIHtcclxuICAgIHN0YXJ0OiBudW1iZXI7XHJcbiAgICBlbmQ6IG51bWJlcjtcclxuICAgIGxvYWRlZDogRGVmZXJyZWQ8QXJyYXlCdWZmZXJWaWV3PjtcclxufVxyXG5cclxuLyoqXHJcbiAqIFtTcGVjaWZpY2F0aW9uXShodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi9tYWluL2V4dGVuc2lvbnMvMi4wL1ZlbmRvci9NU0ZUX2xvZC9SRUFETUUubWQpXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBjbGFzcyBNU0ZUX2xvZCBpbXBsZW1lbnRzIElHTFRGTG9hZGVyRXh0ZW5zaW9uIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIG5hbWUgb2YgdGhpcyBleHRlbnNpb24uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lID0gTkFNRTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyBlbmFibGVkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZW5hYmxlZDogYm9vbGVhbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgYSBudW1iZXIgdGhhdCBkZXRlcm1pbmVzIHRoZSBvcmRlciB0aGUgZXh0ZW5zaW9ucyBhcmUgYXBwbGllZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIG9yZGVyID0gMTAwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWF4aW11bSBudW1iZXIgb2YgTE9EcyB0byBsb2FkLCBzdGFydGluZyBmcm9tIHRoZSBsb3dlc3QgTE9ELlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbWF4TE9Ec1RvTG9hZCA9IDEwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogT2JzZXJ2YWJsZSByYWlzZWQgd2hlbiBhbGwgbm9kZSBMT0RzIG9mIG9uZSBsZXZlbCBhcmUgbG9hZGVkLlxyXG4gICAgICogVGhlIGV2ZW50IGRhdGEgaXMgdGhlIGluZGV4IG9mIHRoZSBsb2FkZWQgTE9EIHN0YXJ0aW5nIGZyb20gemVyby5cclxuICAgICAqIERpc3Bvc2UgdGhlIGxvYWRlciB0byBjYW5jZWwgdGhlIGxvYWRpbmcgb2YgdGhlIG5leHQgbGV2ZWwgb2YgTE9Ecy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIG9uTm9kZUxPRHNMb2FkZWRPYnNlcnZhYmxlID0gbmV3IE9ic2VydmFibGU8bnVtYmVyPigpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogT2JzZXJ2YWJsZSByYWlzZWQgd2hlbiBhbGwgbWF0ZXJpYWwgTE9EcyBvZiBvbmUgbGV2ZWwgYXJlIGxvYWRlZC5cclxuICAgICAqIFRoZSBldmVudCBkYXRhIGlzIHRoZSBpbmRleCBvZiB0aGUgbG9hZGVkIExPRCBzdGFydGluZyBmcm9tIHplcm8uXHJcbiAgICAgKiBEaXNwb3NlIHRoZSBsb2FkZXIgdG8gY2FuY2VsIHRoZSBsb2FkaW5nIG9mIHRoZSBuZXh0IGxldmVsIG9mIExPRHMuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvbk1hdGVyaWFsTE9Ec0xvYWRlZE9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZTxudW1iZXI+KCk7XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZGVyOiBHTFRGTG9hZGVyO1xyXG5cclxuICAgIHByaXZhdGUgX2J1ZmZlckxPRHMgPSBuZXcgQXJyYXk8SUJ1ZmZlckluZm8+KCk7XHJcblxyXG4gICAgcHJpdmF0ZSBfbm9kZUluZGV4TE9EOiBOdWxsYWJsZTxudW1iZXI+ID0gbnVsbDtcclxuICAgIHByaXZhdGUgX25vZGVTaWduYWxMT0RzID0gbmV3IEFycmF5PERlZmVycmVkPHZvaWQ+PigpO1xyXG4gICAgcHJpdmF0ZSBfbm9kZVByb21pc2VMT0RzID0gbmV3IEFycmF5PEFycmF5PFByb21pc2U8YW55Pj4+KCk7XHJcbiAgICBwcml2YXRlIF9ub2RlQnVmZmVyTE9EcyA9IG5ldyBBcnJheTxJQnVmZmVySW5mbz4oKTtcclxuXHJcbiAgICBwcml2YXRlIF9tYXRlcmlhbEluZGV4TE9EOiBOdWxsYWJsZTxudW1iZXI+ID0gbnVsbDtcclxuICAgIHByaXZhdGUgX21hdGVyaWFsU2lnbmFsTE9EcyA9IG5ldyBBcnJheTxEZWZlcnJlZDx2b2lkPj4oKTtcclxuICAgIHByaXZhdGUgX21hdGVyaWFsUHJvbWlzZUxPRHMgPSBuZXcgQXJyYXk8QXJyYXk8UHJvbWlzZTxhbnk+Pj4oKTtcclxuICAgIHByaXZhdGUgX21hdGVyaWFsQnVmZmVyTE9EcyA9IG5ldyBBcnJheTxJQnVmZmVySW5mbz4oKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihsb2FkZXI6IEdMVEZMb2FkZXIpIHtcclxuICAgICAgICB0aGlzLl9sb2FkZXIgPSBsb2FkZXI7XHJcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdGhpcy5fbG9hZGVyLmlzRXh0ZW5zaW9uVXNlZChOQU1FKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHtcclxuICAgICAgICAodGhpcy5fbG9hZGVyIGFzIGFueSkgPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLl9ub2RlSW5kZXhMT0QgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX25vZGVTaWduYWxMT0RzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgdGhpcy5fbm9kZVByb21pc2VMT0RzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgdGhpcy5fbm9kZUJ1ZmZlckxPRHMubGVuZ3RoID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWxJbmRleExPRCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWxTaWduYWxMT0RzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWxQcm9taXNlTE9Ecy5sZW5ndGggPSAwO1xyXG4gICAgICAgIHRoaXMuX21hdGVyaWFsQnVmZmVyTE9Ecy5sZW5ndGggPSAwO1xyXG5cclxuICAgICAgICB0aGlzLm9uTWF0ZXJpYWxMT0RzTG9hZGVkT2JzZXJ2YWJsZS5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMub25Ob2RlTE9Ec0xvYWRlZE9ic2VydmFibGUuY2xlYXIoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgb25SZWFkeSgpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGxldCBpbmRleExPRCA9IDA7IGluZGV4TE9EIDwgdGhpcy5fbm9kZVByb21pc2VMT0RzLmxlbmd0aDsgaW5kZXhMT0QrKykge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9taXNlID0gUHJvbWlzZS5hbGwodGhpcy5fbm9kZVByb21pc2VMT0RzW2luZGV4TE9EXSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXhMT0QgIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2FkZXIuZW5kUGVyZm9ybWFuY2VDb3VudGVyKGBOb2RlIExPRCAke2luZGV4TE9EfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRlci5sb2coYExvYWRlZCBub2RlIExPRCAke2luZGV4TE9EfWApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMub25Ob2RlTE9Ec0xvYWRlZE9ic2VydmFibGUubm90aWZ5T2JzZXJ2ZXJzKGluZGV4TE9EKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXhMT0QgIT09IHRoaXMuX25vZGVQcm9taXNlTE9Ecy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9hZGVyLnN0YXJ0UGVyZm9ybWFuY2VDb3VudGVyKGBOb2RlIExPRCAke2luZGV4TE9EICsgMX1gKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2FkQnVmZmVyTE9EKHRoaXMuX25vZGVCdWZmZXJMT0RzLCBpbmRleExPRCArIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9ub2RlU2lnbmFsTE9Ec1tpbmRleExPRF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbm9kZVNpZ25hbExPRHNbaW5kZXhMT0RdLnJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fbG9hZGVyLl9jb21wbGV0ZVByb21pc2VzLnB1c2gocHJvbWlzZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpbmRleExPRCA9IDA7IGluZGV4TE9EIDwgdGhpcy5fbWF0ZXJpYWxQcm9taXNlTE9Ecy5sZW5ndGg7IGluZGV4TE9EKyspIHtcclxuICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IFByb21pc2UuYWxsKHRoaXMuX21hdGVyaWFsUHJvbWlzZUxPRHNbaW5kZXhMT0RdKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpbmRleExPRCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRlci5lbmRQZXJmb3JtYW5jZUNvdW50ZXIoYE1hdGVyaWFsIExPRCAke2luZGV4TE9EfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRlci5sb2coYExvYWRlZCBtYXRlcmlhbCBMT0QgJHtpbmRleExPRH1gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uTWF0ZXJpYWxMT0RzTG9hZGVkT2JzZXJ2YWJsZS5ub3RpZnlPYnNlcnZlcnMoaW5kZXhMT0QpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpbmRleExPRCAhPT0gdGhpcy5fbWF0ZXJpYWxQcm9taXNlTE9Ecy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9hZGVyLnN0YXJ0UGVyZm9ybWFuY2VDb3VudGVyKGBNYXRlcmlhbCBMT0QgJHtpbmRleExPRCArIDF9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9hZEJ1ZmZlckxPRCh0aGlzLl9tYXRlcmlhbEJ1ZmZlckxPRHMsIGluZGV4TE9EICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX21hdGVyaWFsU2lnbmFsTE9Ec1tpbmRleExPRF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbWF0ZXJpYWxTaWduYWxMT0RzW2luZGV4TE9EXS5yZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2xvYWRlci5fY29tcGxldGVQcm9taXNlcy5wdXNoKHByb21pc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZFNjZW5lQXN5bmMoY29udGV4dDogc3RyaW5nLCBzY2VuZTogSVNjZW5lKTogTnVsbGFibGU8UHJvbWlzZTx2b2lkPj4ge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLl9sb2FkZXIubG9hZFNjZW5lQXN5bmMoY29udGV4dCwgc2NlbmUpO1xyXG4gICAgICAgIHRoaXMuX2xvYWRCdWZmZXJMT0QodGhpcy5fYnVmZmVyTE9EcywgMCk7XHJcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWROb2RlQXN5bmMoY29udGV4dDogc3RyaW5nLCBub2RlOiBJTm9kZSwgYXNzaWduOiAoYmFieWxvblRyYW5zZm9ybU5vZGU6IFRyYW5zZm9ybU5vZGUpID0+IHZvaWQpOiBOdWxsYWJsZTxQcm9taXNlPFRyYW5zZm9ybU5vZGU+PiB7XHJcbiAgICAgICAgcmV0dXJuIEdMVEZMb2FkZXIuTG9hZEV4dGVuc2lvbkFzeW5jPElNU0ZUTE9ELCBUcmFuc2Zvcm1Ob2RlPihjb250ZXh0LCBub2RlLCB0aGlzLm5hbWUsIChleHRlbnNpb25Db250ZXh0LCBleHRlbnNpb24pID0+IHtcclxuICAgICAgICAgICAgbGV0IGZpcnN0UHJvbWlzZTogUHJvbWlzZTxUcmFuc2Zvcm1Ob2RlPjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG5vZGVMT0RzID0gdGhpcy5fZ2V0TE9EcyhleHRlbnNpb25Db250ZXh0LCBub2RlLCB0aGlzLl9sb2FkZXIuZ2x0Zi5ub2RlcywgZXh0ZW5zaW9uLmlkcyk7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvYWRlci5sb2dPcGVuKGAke2V4dGVuc2lvbkNvbnRleHR9YCk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleExPRCA9IDA7IGluZGV4TE9EIDwgbm9kZUxPRHMubGVuZ3RoOyBpbmRleExPRCsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBub2RlTE9EID0gbm9kZUxPRHNbaW5kZXhMT0RdO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpbmRleExPRCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX25vZGVJbmRleExPRCA9IGluZGV4TE9EO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX25vZGVTaWduYWxMT0RzW2luZGV4TE9EXSA9IHRoaXMuX25vZGVTaWduYWxMT0RzW2luZGV4TE9EXSB8fCBuZXcgRGVmZXJyZWQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBhc3NpZ25XcmFwID0gKGJhYnlsb25UcmFuc2Zvcm1Ob2RlOiBUcmFuc2Zvcm1Ob2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXNzaWduKGJhYnlsb25UcmFuc2Zvcm1Ob2RlKTtcclxuICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uVHJhbnNmb3JtTm9kZS5zZXRFbmFibGVkKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IHRoaXMuX2xvYWRlci5sb2FkTm9kZUFzeW5jKGAvbm9kZXMvJHtub2RlTE9ELmluZGV4fWAsIG5vZGVMT0QsIGFzc2lnbldyYXApLnRoZW4oKGJhYnlsb25NZXNoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4TE9EICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IHNob3VsZCBub3QgcmVseSBvbiBfYmFieWxvblRyYW5zZm9ybU5vZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJldmlvdXNOb2RlTE9EID0gbm9kZUxPRHNbaW5kZXhMT0QgLSAxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByZXZpb3VzTm9kZUxPRC5fYmFieWxvblRyYW5zZm9ybU5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Rpc3Bvc2VUcmFuc2Zvcm1Ob2RlKHByZXZpb3VzTm9kZUxPRC5fYmFieWxvblRyYW5zZm9ybU5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHByZXZpb3VzTm9kZUxPRC5fYmFieWxvblRyYW5zZm9ybU5vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJhYnlsb25NZXNoLnNldEVuYWJsZWQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJhYnlsb25NZXNoO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbm9kZVByb21pc2VMT0RzW2luZGV4TE9EXSA9IHRoaXMuX25vZGVQcm9taXNlTE9Ec1tpbmRleExPRF0gfHwgW107XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4TE9EID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RQcm9taXNlID0gcHJvbWlzZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbm9kZUluZGV4TE9EID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ub2RlUHJvbWlzZUxPRHNbaW5kZXhMT0RdLnB1c2gocHJvbWlzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2xvYWRlci5sb2dDbG9zZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmlyc3RQcm9taXNlITtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgX2xvYWRNYXRlcmlhbEFzeW5jKFxyXG4gICAgICAgIGNvbnRleHQ6IHN0cmluZyxcclxuICAgICAgICBtYXRlcmlhbDogSU1hdGVyaWFsLFxyXG4gICAgICAgIGJhYnlsb25NZXNoOiBOdWxsYWJsZTxNZXNoPixcclxuICAgICAgICBiYWJ5bG9uRHJhd01vZGU6IG51bWJlcixcclxuICAgICAgICBhc3NpZ246IChiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsKSA9PiB2b2lkXHJcbiAgICApOiBOdWxsYWJsZTxQcm9taXNlPE1hdGVyaWFsPj4ge1xyXG4gICAgICAgIC8vIERvbid0IGxvYWQgbWF0ZXJpYWwgTE9EcyBpZiBhbHJlYWR5IGxvYWRpbmcgYSBub2RlIExPRC5cclxuICAgICAgICBpZiAodGhpcy5fbm9kZUluZGV4TE9EKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIEdMVEZMb2FkZXIuTG9hZEV4dGVuc2lvbkFzeW5jPElNU0ZUTE9ELCBNYXRlcmlhbD4oY29udGV4dCwgbWF0ZXJpYWwsIHRoaXMubmFtZSwgKGV4dGVuc2lvbkNvbnRleHQsIGV4dGVuc2lvbikgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZmlyc3RQcm9taXNlOiBQcm9taXNlPE1hdGVyaWFsPjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsTE9EcyA9IHRoaXMuX2dldExPRHMoZXh0ZW5zaW9uQ29udGV4dCwgbWF0ZXJpYWwsIHRoaXMuX2xvYWRlci5nbHRmLm1hdGVyaWFscywgZXh0ZW5zaW9uLmlkcyk7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvYWRlci5sb2dPcGVuKGAke2V4dGVuc2lvbkNvbnRleHR9YCk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleExPRCA9IDA7IGluZGV4TE9EIDwgbWF0ZXJpYWxMT0RzLmxlbmd0aDsgaW5kZXhMT0QrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWxMT0QgPSBtYXRlcmlhbExPRHNbaW5kZXhMT0RdO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpbmRleExPRCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21hdGVyaWFsSW5kZXhMT0QgPSBpbmRleExPRDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9taXNlID0gdGhpcy5fbG9hZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgLl9sb2FkTWF0ZXJpYWxBc3luYyhgL21hdGVyaWFscy8ke21hdGVyaWFsTE9ELmluZGV4fWAsIG1hdGVyaWFsTE9ELCBiYWJ5bG9uTWVzaCwgYmFieWxvbkRyYXdNb2RlLCAoYmFieWxvbk1hdGVyaWFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleExPRCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzaWduKGJhYnlsb25NYXRlcmlhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChiYWJ5bG9uTWF0ZXJpYWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4TE9EICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NpZ24oYmFieWxvbk1hdGVyaWFsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBzaG91bGQgbm90IHJlbHkgb24gX2RhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzRGF0YUxPRCA9IG1hdGVyaWFsTE9Ec1tpbmRleExPRCAtIDFdLl9kYXRhITtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcmV2aW91c0RhdGFMT0RbYmFieWxvbkRyYXdNb2RlXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Rpc3Bvc2VNYXRlcmlhbHMoW3ByZXZpb3VzRGF0YUxPRFtiYWJ5bG9uRHJhd01vZGVdLmJhYnlsb25NYXRlcmlhbF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBwcmV2aW91c0RhdGFMT0RbYmFieWxvbkRyYXdNb2RlXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJhYnlsb25NYXRlcmlhbDtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tYXRlcmlhbFByb21pc2VMT0RzW2luZGV4TE9EXSA9IHRoaXMuX21hdGVyaWFsUHJvbWlzZUxPRHNbaW5kZXhMT0RdIHx8IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpbmRleExPRCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0UHJvbWlzZSA9IHByb21pc2U7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21hdGVyaWFsSW5kZXhMT0QgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21hdGVyaWFsUHJvbWlzZUxPRHNbaW5kZXhMT0RdLnB1c2gocHJvbWlzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2xvYWRlci5sb2dDbG9zZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmlyc3RQcm9taXNlITtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgX2xvYWRVcmlBc3luYyhjb250ZXh0OiBzdHJpbmcsIHByb3BlcnR5OiBJUHJvcGVydHksIHVyaTogc3RyaW5nKTogTnVsbGFibGU8UHJvbWlzZTxBcnJheUJ1ZmZlclZpZXc+PiB7XHJcbiAgICAgICAgLy8gRGVmZXIgdGhlIGxvYWRpbmcgb2YgdXJpcyBpZiBsb2FkaW5nIGEgbm9kZSBvciBtYXRlcmlhbCBMT0QuXHJcbiAgICAgICAgaWYgKHRoaXMuX25vZGVJbmRleExPRCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2FkZXIubG9nKGBkZWZlcnJlZGApO1xyXG4gICAgICAgICAgICBjb25zdCBwcmV2aW91c0luZGV4TE9EID0gdGhpcy5fbm9kZUluZGV4TE9EIC0gMTtcclxuICAgICAgICAgICAgdGhpcy5fbm9kZVNpZ25hbExPRHNbcHJldmlvdXNJbmRleExPRF0gPSB0aGlzLl9ub2RlU2lnbmFsTE9Ec1twcmV2aW91c0luZGV4TE9EXSB8fCBuZXcgRGVmZXJyZWQ8dm9pZD4oKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX25vZGVTaWduYWxMT0RzW3RoaXMuX25vZGVJbmRleExPRCAtIDFdLnByb21pc2UudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fbG9hZGVyLmxvYWRVcmlBc3luYyhjb250ZXh0LCBwcm9wZXJ0eSwgdXJpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9tYXRlcmlhbEluZGV4TE9EICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvYWRlci5sb2coYGRlZmVycmVkYCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzSW5kZXhMT0QgPSB0aGlzLl9tYXRlcmlhbEluZGV4TE9EIC0gMTtcclxuICAgICAgICAgICAgdGhpcy5fbWF0ZXJpYWxTaWduYWxMT0RzW3ByZXZpb3VzSW5kZXhMT0RdID0gdGhpcy5fbWF0ZXJpYWxTaWduYWxMT0RzW3ByZXZpb3VzSW5kZXhMT0RdIHx8IG5ldyBEZWZlcnJlZDx2b2lkPigpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWF0ZXJpYWxTaWduYWxMT0RzW3ByZXZpb3VzSW5kZXhMT0RdLnByb21pc2UudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fbG9hZGVyLmxvYWRVcmlBc3luYyhjb250ZXh0LCBwcm9wZXJ0eSwgdXJpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZEJ1ZmZlckFzeW5jKGNvbnRleHQ6IHN0cmluZywgYnVmZmVyOiBJQnVmZmVyLCBieXRlT2Zmc2V0OiBudW1iZXIsIGJ5dGVMZW5ndGg6IG51bWJlcik6IE51bGxhYmxlPFByb21pc2U8QXJyYXlCdWZmZXJWaWV3Pj4ge1xyXG4gICAgICAgIGlmICh0aGlzLl9sb2FkZXIucGFyZW50LnVzZVJhbmdlUmVxdWVzdHMgJiYgIWJ1ZmZlci51cmkpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9sb2FkZXIuYmluKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7Y29udGV4dH06IFVyaSBpcyBtaXNzaW5nIG9yIHRoZSBiaW5hcnkgZ2xURiBpcyBtaXNzaW5nIGl0cyBiaW5hcnkgY2h1bmtgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgbG9hZEFzeW5jID0gKGJ1ZmZlckxPRHM6IEFycmF5PElCdWZmZXJJbmZvPiwgaW5kZXhMT0Q6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBieXRlT2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZW5kID0gc3RhcnQgKyBieXRlTGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgICAgIGxldCBidWZmZXJMT0QgPSBidWZmZXJMT0RzW2luZGV4TE9EXTtcclxuICAgICAgICAgICAgICAgIGlmIChidWZmZXJMT0QpIHtcclxuICAgICAgICAgICAgICAgICAgICBidWZmZXJMT0Quc3RhcnQgPSBNYXRoLm1pbihidWZmZXJMT0Quc3RhcnQsIHN0YXJ0KTtcclxuICAgICAgICAgICAgICAgICAgICBidWZmZXJMT0QuZW5kID0gTWF0aC5tYXgoYnVmZmVyTE9ELmVuZCwgZW5kKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyTE9EID0geyBzdGFydDogc3RhcnQsIGVuZDogZW5kLCBsb2FkZWQ6IG5ldyBEZWZlcnJlZCgpIH07XHJcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyTE9Ec1tpbmRleExPRF0gPSBidWZmZXJMT0Q7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGJ1ZmZlckxPRC5sb2FkZWQucHJvbWlzZS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGRhdGEuYnVmZmVyLCBkYXRhLmJ5dGVPZmZzZXQgKyBieXRlT2Zmc2V0IC0gYnVmZmVyTE9ELnN0YXJ0LCBieXRlTGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fbG9hZGVyLmxvZyhgZGVmZXJyZWRgKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9ub2RlSW5kZXhMT0QgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBsb2FkQXN5bmModGhpcy5fbm9kZUJ1ZmZlckxPRHMsIHRoaXMuX25vZGVJbmRleExPRCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fbWF0ZXJpYWxJbmRleExPRCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxvYWRBc3luYyh0aGlzLl9tYXRlcmlhbEJ1ZmZlckxPRHMsIHRoaXMuX21hdGVyaWFsSW5kZXhMT0QpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxvYWRBc3luYyh0aGlzLl9idWZmZXJMT0RzLCAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZEJ1ZmZlckxPRChidWZmZXJMT0RzOiBBcnJheTxJQnVmZmVySW5mbz4sIGluZGV4TE9EOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBidWZmZXJMT0QgPSBidWZmZXJMT0RzW2luZGV4TE9EXTtcclxuICAgICAgICBpZiAoYnVmZmVyTE9EKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvYWRlci5sb2coYExvYWRpbmcgYnVmZmVyIHJhbmdlIFske2J1ZmZlckxPRC5zdGFydH0tJHtidWZmZXJMT0QuZW5kfV1gKTtcclxuICAgICAgICAgICAgdGhpcy5fbG9hZGVyLmJpbiEucmVhZEFzeW5jKGJ1ZmZlckxPRC5zdGFydCwgYnVmZmVyTE9ELmVuZCAtIGJ1ZmZlckxPRC5zdGFydCArIDEpLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1ZmZlckxPRC5sb2FkZWQucmVzb2x2ZShkYXRhKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBidWZmZXJMT0QubG9hZGVkLnJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBhbiBhcnJheSBvZiBMT0QgcHJvcGVydGllcyBmcm9tIGxvd2VzdCB0byBoaWdoZXN0LlxyXG4gICAgICogQHBhcmFtIGNvbnRleHRcclxuICAgICAqIEBwYXJhbSBwcm9wZXJ0eVxyXG4gICAgICogQHBhcmFtIGFycmF5XHJcbiAgICAgKiBAcGFyYW0gaWRzXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX2dldExPRHM8VD4oY29udGV4dDogc3RyaW5nLCBwcm9wZXJ0eTogVCwgYXJyYXk6IEFycmF5TGlrZTxUPiB8IHVuZGVmaW5lZCwgaWRzOiBudW1iZXJbXSk6IFRbXSB7XHJcbiAgICAgICAgaWYgKHRoaXMubWF4TE9Ec1RvTG9hZCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm1heExPRHNUb0xvYWQgbXVzdCBiZSBncmVhdGVyIHRoYW4gemVyb1wiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHByb3BlcnRpZXMgPSBuZXcgQXJyYXk8VD4oKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IGlkcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICBwcm9wZXJ0aWVzLnB1c2goQXJyYXlJdGVtLkdldChgJHtjb250ZXh0fS9pZHMvJHtpZHNbaV19YCwgYXJyYXksIGlkc1tpXSkpO1xyXG4gICAgICAgICAgICBpZiAocHJvcGVydGllcy5sZW5ndGggPT09IHRoaXMubWF4TE9Ec1RvTG9hZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3BlcnRpZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3BlcnRpZXMucHVzaChwcm9wZXJ0eSk7XHJcbiAgICAgICAgcmV0dXJuIHByb3BlcnRpZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZGlzcG9zZVRyYW5zZm9ybU5vZGUoYmFieWxvblRyYW5zZm9ybU5vZGU6IFRyYW5zZm9ybU5vZGUpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBiYWJ5bG9uTWF0ZXJpYWxzID0gbmV3IEFycmF5PE1hdGVyaWFsPigpO1xyXG4gICAgICAgIGNvbnN0IGJhYnlsb25NYXRlcmlhbCA9IChiYWJ5bG9uVHJhbnNmb3JtTm9kZSBhcyBNZXNoKS5tYXRlcmlhbDtcclxuICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsKSB7XHJcbiAgICAgICAgICAgIGJhYnlsb25NYXRlcmlhbHMucHVzaChiYWJ5bG9uTWF0ZXJpYWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IGJhYnlsb25NZXNoIG9mIGJhYnlsb25UcmFuc2Zvcm1Ob2RlLmdldENoaWxkTWVzaGVzKCkpIHtcclxuICAgICAgICAgICAgaWYgKGJhYnlsb25NZXNoLm1hdGVyaWFsKSB7XHJcbiAgICAgICAgICAgICAgICBiYWJ5bG9uTWF0ZXJpYWxzLnB1c2goYmFieWxvbk1lc2gubWF0ZXJpYWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBiYWJ5bG9uVHJhbnNmb3JtTm9kZS5kaXNwb3NlKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGJhYnlsb25NYXRlcmlhbHNUb0Rpc3Bvc2UgPSBiYWJ5bG9uTWF0ZXJpYWxzLmZpbHRlcigoYmFieWxvbk1hdGVyaWFsKSA9PiB0aGlzLl9sb2FkZXIuYmFieWxvblNjZW5lLm1lc2hlcy5ldmVyeSgobWVzaCkgPT4gbWVzaC5tYXRlcmlhbCAhPSBiYWJ5bG9uTWF0ZXJpYWwpKTtcclxuICAgICAgICB0aGlzLl9kaXNwb3NlTWF0ZXJpYWxzKGJhYnlsb25NYXRlcmlhbHNUb0Rpc3Bvc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2Rpc3Bvc2VNYXRlcmlhbHMoYmFieWxvbk1hdGVyaWFsczogTWF0ZXJpYWxbXSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGJhYnlsb25UZXh0dXJlczogeyBbdW5pcXVlSWQ6IG51bWJlcl06IEJhc2VUZXh0dXJlIH0gPSB7fTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBiYWJ5bG9uTWF0ZXJpYWwgb2YgYmFieWxvbk1hdGVyaWFscykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGJhYnlsb25UZXh0dXJlIG9mIGJhYnlsb25NYXRlcmlhbC5nZXRBY3RpdmVUZXh0dXJlcygpKSB7XHJcbiAgICAgICAgICAgICAgICBiYWJ5bG9uVGV4dHVyZXNbYmFieWxvblRleHR1cmUudW5pcXVlSWRdID0gYmFieWxvblRleHR1cmU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGJhYnlsb25NYXRlcmlhbC5kaXNwb3NlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IHVuaXF1ZUlkIGluIGJhYnlsb25UZXh0dXJlcykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGJhYnlsb25NYXRlcmlhbCBvZiB0aGlzLl9sb2FkZXIuYmFieWxvblNjZW5lLm1hdGVyaWFscykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbC5oYXNUZXh0dXJlKGJhYnlsb25UZXh0dXJlc1t1bmlxdWVJZF0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGJhYnlsb25UZXh0dXJlc1t1bmlxdWVJZF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgdW5pcXVlSWQgaW4gYmFieWxvblRleHR1cmVzKSB7XHJcbiAgICAgICAgICAgIGJhYnlsb25UZXh0dXJlc1t1bmlxdWVJZF0uZGlzcG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuR0xURkxvYWRlci5SZWdpc3RlckV4dGVuc2lvbihOQU1FLCAobG9hZGVyKSA9PiBuZXcgTVNGVF9sb2QobG9hZGVyKSk7XHJcbiIsImltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xyXG5pbXBvcnQgdHlwZSB7IE1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IFBCUk1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1BCUi9wYnJNYXRlcmlhbFwiO1xyXG5cclxuaW1wb3J0IHR5cGUgeyBJTWF0ZXJpYWwgfSBmcm9tIFwiLi4vZ2xURkxvYWRlckludGVyZmFjZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBJR0xURkxvYWRlckV4dGVuc2lvbiB9IGZyb20gXCIuLi9nbFRGTG9hZGVyRXh0ZW5zaW9uXCI7XHJcbmltcG9ydCB7IEdMVEZMb2FkZXIgfSBmcm9tIFwiLi4vZ2xURkxvYWRlclwiO1xyXG5cclxuY29uc3QgTkFNRSA9IFwiTVNGVF9taW5lY3JhZnRNZXNoXCI7XHJcblxyXG4vKiogQGludGVybmFsICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGNsYXNzIE1TRlRfbWluZWNyYWZ0TWVzaCBpbXBsZW1lbnRzIElHTFRGTG9hZGVyRXh0ZW5zaW9uIHtcclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lID0gTkFNRTtcclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgZW5hYmxlZDogYm9vbGVhbjtcclxuXHJcbiAgICBwcml2YXRlIF9sb2FkZXI6IEdMVEZMb2FkZXI7XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgY29uc3RydWN0b3IobG9hZGVyOiBHTFRGTG9hZGVyKSB7XHJcbiAgICAgICAgdGhpcy5fbG9hZGVyID0gbG9hZGVyO1xyXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRoaXMuX2xvYWRlci5pc0V4dGVuc2lvblVzZWQoTkFNRSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgKHRoaXMuX2xvYWRlciBhcyBhbnkpID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgbG9hZE1hdGVyaWFsUHJvcGVydGllc0FzeW5jKGNvbnRleHQ6IHN0cmluZywgbWF0ZXJpYWw6IElNYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCk6IE51bGxhYmxlPFByb21pc2U8dm9pZD4+IHtcclxuICAgICAgICByZXR1cm4gR0xURkxvYWRlci5Mb2FkRXh0cmFBc3luYzxib29sZWFuPihjb250ZXh0LCBtYXRlcmlhbCwgdGhpcy5uYW1lLCAoZXh0cmFDb250ZXh0LCBleHRyYSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXh0cmEpIHtcclxuICAgICAgICAgICAgICAgIGlmICghKGJhYnlsb25NYXRlcmlhbCBpbnN0YW5jZW9mIFBCUk1hdGVyaWFsKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtleHRyYUNvbnRleHR9OiBNYXRlcmlhbCB0eXBlIG5vdCBzdXBwb3J0ZWRgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9taXNlID0gdGhpcy5fbG9hZGVyLmxvYWRNYXRlcmlhbFByb3BlcnRpZXNBc3luYyhjb250ZXh0LCBtYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsLm5lZWRBbHBoYUJsZW5kaW5nKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwuZm9yY2VEZXB0aFdyaXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwuc2VwYXJhdGVDdWxsaW5nUGFzcyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsLmJhY2tGYWNlQ3VsbGluZyA9IGJhYnlsb25NYXRlcmlhbC5mb3JjZURlcHRoV3JpdGU7XHJcbiAgICAgICAgICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwudHdvU2lkZWRMaWdodGluZyA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5HTFRGTG9hZGVyLlJlZ2lzdGVyRXh0ZW5zaW9uKE5BTUUsIChsb2FkZXIpID0+IG5ldyBNU0ZUX21pbmVjcmFmdE1lc2gobG9hZGVyKSk7XHJcbiIsImltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xyXG5pbXBvcnQgdHlwZSB7IE1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IFBCUk1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1BCUi9wYnJNYXRlcmlhbFwiO1xyXG5cclxuaW1wb3J0IHR5cGUgeyBJTWF0ZXJpYWwgfSBmcm9tIFwiLi4vZ2xURkxvYWRlckludGVyZmFjZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBJR0xURkxvYWRlckV4dGVuc2lvbiB9IGZyb20gXCIuLi9nbFRGTG9hZGVyRXh0ZW5zaW9uXCI7XHJcbmltcG9ydCB7IEdMVEZMb2FkZXIgfSBmcm9tIFwiLi4vZ2xURkxvYWRlclwiO1xyXG5cclxuY29uc3QgTkFNRSA9IFwiTVNGVF9zUkdCRmFjdG9yc1wiO1xyXG5cclxuLyoqIEBpbnRlcm5hbCAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBjbGFzcyBNU0ZUX3NSR0JGYWN0b3JzIGltcGxlbWVudHMgSUdMVEZMb2FkZXJFeHRlbnNpb24ge1xyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBOQU1FO1xyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBlbmFibGVkOiBib29sZWFuO1xyXG5cclxuICAgIHByaXZhdGUgX2xvYWRlcjogR0xURkxvYWRlcjtcclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBjb25zdHJ1Y3Rvcihsb2FkZXI6IEdMVEZMb2FkZXIpIHtcclxuICAgICAgICB0aGlzLl9sb2FkZXIgPSBsb2FkZXI7XHJcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdGhpcy5fbG9hZGVyLmlzRXh0ZW5zaW9uVXNlZChOQU1FKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHtcclxuICAgICAgICAodGhpcy5fbG9hZGVyIGFzIGFueSkgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBsb2FkTWF0ZXJpYWxQcm9wZXJ0aWVzQXN5bmMoY29udGV4dDogc3RyaW5nLCBtYXRlcmlhbDogSU1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsKTogTnVsbGFibGU8UHJvbWlzZTx2b2lkPj4ge1xyXG4gICAgICAgIHJldHVybiBHTFRGTG9hZGVyLkxvYWRFeHRyYUFzeW5jPGJvb2xlYW4+KGNvbnRleHQsIG1hdGVyaWFsLCB0aGlzLm5hbWUsIChleHRyYUNvbnRleHQsIGV4dHJhKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChleHRyYSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCEoYmFieWxvbk1hdGVyaWFsIGluc3RhbmNlb2YgUEJSTWF0ZXJpYWwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2V4dHJhQ29udGV4dH06IE1hdGVyaWFsIHR5cGUgbm90IHN1cHBvcnRlZGApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLl9sb2FkZXIubG9hZE1hdGVyaWFsUHJvcGVydGllc0FzeW5jKGNvbnRleHQsIG1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWwpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHVzZUV4YWN0U3JnYkNvbnZlcnNpb25zID0gYmFieWxvbk1hdGVyaWFsLmdldFNjZW5lKCkuZ2V0RW5naW5lKCkudXNlRXhhY3RTcmdiQ29udmVyc2lvbnM7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWJhYnlsb25NYXRlcmlhbC5hbGJlZG9UZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsLmFsYmVkb0NvbG9yLnRvTGluZWFyU3BhY2VUb1JlZihiYWJ5bG9uTWF0ZXJpYWwuYWxiZWRvQ29sb3IsIHVzZUV4YWN0U3JnYkNvbnZlcnNpb25zKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIWJhYnlsb25NYXRlcmlhbC5yZWZsZWN0aXZpdHlUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsLnJlZmxlY3Rpdml0eUNvbG9yLnRvTGluZWFyU3BhY2VUb1JlZihiYWJ5bG9uTWF0ZXJpYWwucmVmbGVjdGl2aXR5Q29sb3IsIHVzZUV4YWN0U3JnYkNvbnZlcnNpb25zKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkdMVEZMb2FkZXIuUmVnaXN0ZXJFeHRlbnNpb24oTkFNRSwgKGxvYWRlcikgPT4gbmV3IE1TRlRfc1JHQkZhY3RvcnMobG9hZGVyKSk7XHJcbiIsImV4cG9ydCAqIGZyb20gXCIuL0VYVF9saWdodHNfaW1hZ2VfYmFzZWRcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vRVhUX21lc2hfZ3B1X2luc3RhbmNpbmdcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vRVhUX21lc2hvcHRfY29tcHJlc3Npb25cIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vRVhUX3RleHR1cmVfd2VicFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9LSFJfZHJhY29fbWVzaF9jb21wcmVzc2lvblwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9LSFJfbGlnaHRzX3B1bmN0dWFsXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL0tIUl9tYXRlcmlhbHNfcGJyU3BlY3VsYXJHbG9zc2luZXNzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL0tIUl9tYXRlcmlhbHNfdW5saXRcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vS0hSX21hdGVyaWFsc19jbGVhcmNvYXRcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vS0hSX21hdGVyaWFsc19pcmlkZXNjZW5jZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9LSFJfbWF0ZXJpYWxzX2FuaXNvdHJvcHlcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vS0hSX21hdGVyaWFsc19lbWlzc2l2ZV9zdHJlbmd0aFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9LSFJfbWF0ZXJpYWxzX3NoZWVuXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL0tIUl9tYXRlcmlhbHNfc3BlY3VsYXJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vS0hSX21hdGVyaWFsc19pb3JcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vS0hSX21hdGVyaWFsc192YXJpYW50c1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9LSFJfbWF0ZXJpYWxzX3RyYW5zbWlzc2lvblwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9LSFJfbWF0ZXJpYWxzX3RyYW5zbHVjZW5jeVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9LSFJfbWF0ZXJpYWxzX3ZvbHVtZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9LSFJfbWVzaF9xdWFudGl6YXRpb25cIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vS0hSX3RleHR1cmVfYmFzaXN1XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL0tIUl90ZXh0dXJlX3RyYW5zZm9ybVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9LSFJfeG1wX2pzb25fbGRcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vS0hSX2FuaW1hdGlvbl9wb2ludGVyXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL01TRlRfYXVkaW9fZW1pdHRlclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9NU0ZUX2xvZFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9NU0ZUX21pbmVjcmFmdE1lc2hcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vTVNGVF9zUkdCRmFjdG9yc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9FeHRyYXNBc01ldGFkYXRhXCI7XHJcbiIsImltcG9ydCB0eXBlIHsgSW5kaWNlc0FycmF5LCBOdWxsYWJsZSB9IGZyb20gXCJjb3JlL3R5cGVzXCI7XHJcbmltcG9ydCB7IERlZmVycmVkIH0gZnJvbSBcImNvcmUvTWlzYy9kZWZlcnJlZFwiO1xyXG5pbXBvcnQgeyBRdWF0ZXJuaW9uLCBWZWN0b3IzLCBNYXRyaXgsIFRtcFZlY3RvcnMgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLnZlY3RvclwiO1xyXG5pbXBvcnQgeyBDb2xvcjMgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLmNvbG9yXCI7XHJcbmltcG9ydCB7IFRvb2xzIH0gZnJvbSBcImNvcmUvTWlzYy90b29sc1wiO1xyXG5pbXBvcnQgeyBDYW1lcmEgfSBmcm9tIFwiY29yZS9DYW1lcmFzL2NhbWVyYVwiO1xyXG5pbXBvcnQgeyBGcmVlQ2FtZXJhIH0gZnJvbSBcImNvcmUvQ2FtZXJhcy9mcmVlQ2FtZXJhXCI7XHJcbmltcG9ydCB0eXBlIHsgQW5pbWF0aW9uIH0gZnJvbSBcImNvcmUvQW5pbWF0aW9ucy9hbmltYXRpb25cIjtcclxuaW1wb3J0IHR5cGUgeyBJQW5pbWF0YWJsZSB9IGZyb20gXCJjb3JlL0FuaW1hdGlvbnMvYW5pbWF0YWJsZS5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHR5cGUgeyBJQW5pbWF0aW9uS2V5IH0gZnJvbSBcImNvcmUvQW5pbWF0aW9ucy9hbmltYXRpb25LZXlcIjtcclxuaW1wb3J0IHsgQW5pbWF0aW9uS2V5SW50ZXJwb2xhdGlvbiB9IGZyb20gXCJjb3JlL0FuaW1hdGlvbnMvYW5pbWF0aW9uS2V5XCI7XHJcbmltcG9ydCB7IEFuaW1hdGlvbkdyb3VwIH0gZnJvbSBcImNvcmUvQW5pbWF0aW9ucy9hbmltYXRpb25Hcm91cFwiO1xyXG5pbXBvcnQgeyBCb25lIH0gZnJvbSBcImNvcmUvQm9uZXMvYm9uZVwiO1xyXG5pbXBvcnQgeyBTa2VsZXRvbiB9IGZyb20gXCJjb3JlL0JvbmVzL3NrZWxldG9uXCI7XHJcbmltcG9ydCB7IE1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IFBCUk1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1BCUi9wYnJNYXRlcmlhbFwiO1xyXG5pbXBvcnQgdHlwZSB7IEJhc2VUZXh0dXJlIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1RleHR1cmVzL2Jhc2VUZXh0dXJlXCI7XHJcbmltcG9ydCB0eXBlIHsgSVRleHR1cmVDcmVhdGlvbk9wdGlvbnMgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvdGV4dHVyZVwiO1xyXG5pbXBvcnQgeyBUZXh0dXJlIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1RleHR1cmVzL3RleHR1cmVcIjtcclxuaW1wb3J0IHsgVHJhbnNmb3JtTm9kZSB9IGZyb20gXCJjb3JlL01lc2hlcy90cmFuc2Zvcm1Ob2RlXCI7XHJcbmltcG9ydCB7IEJ1ZmZlciwgVmVydGV4QnVmZmVyIH0gZnJvbSBcImNvcmUvQnVmZmVycy9idWZmZXJcIjtcclxuaW1wb3J0IHsgR2VvbWV0cnkgfSBmcm9tIFwiY29yZS9NZXNoZXMvZ2VvbWV0cnlcIjtcclxuaW1wb3J0IHR5cGUgeyBBYnN0cmFjdE1lc2ggfSBmcm9tIFwiY29yZS9NZXNoZXMvYWJzdHJhY3RNZXNoXCI7XHJcbmltcG9ydCB0eXBlIHsgSW5zdGFuY2VkTWVzaCB9IGZyb20gXCJjb3JlL01lc2hlcy9pbnN0YW5jZWRNZXNoXCI7XHJcbmltcG9ydCB7IE1lc2ggfSBmcm9tIFwiY29yZS9NZXNoZXMvbWVzaFwiO1xyXG5pbXBvcnQgeyBNb3JwaFRhcmdldCB9IGZyb20gXCJjb3JlL01vcnBoL21vcnBoVGFyZ2V0XCI7XHJcbmltcG9ydCB7IE1vcnBoVGFyZ2V0TWFuYWdlciB9IGZyb20gXCJjb3JlL01vcnBoL21vcnBoVGFyZ2V0TWFuYWdlclwiO1xyXG5pbXBvcnQgdHlwZSB7IElTY2VuZUxvYWRlckFzeW5jUmVzdWx0LCBJU2NlbmVMb2FkZXJQcm9ncmVzc0V2ZW50IH0gZnJvbSBcImNvcmUvTG9hZGluZy9zY2VuZUxvYWRlclwiO1xyXG5pbXBvcnQgdHlwZSB7IFNjZW5lIH0gZnJvbSBcImNvcmUvc2NlbmVcIjtcclxuaW1wb3J0IHR5cGUgeyBJUHJvcGVydHkgfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7XHJcbiAgICBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCxcclxuICAgIEFuaW1hdGlvblNhbXBsZXJJbnRlcnBvbGF0aW9uLFxyXG4gICAgQWNjZXNzb3JUeXBlLFxyXG4gICAgQ2FtZXJhVHlwZSxcclxuICAgIEFjY2Vzc29yQ29tcG9uZW50VHlwZSxcclxuICAgIE1hdGVyaWFsQWxwaGFNb2RlLFxyXG4gICAgVGV4dHVyZU1pbkZpbHRlcixcclxuICAgIFRleHR1cmVXcmFwTW9kZSxcclxuICAgIFRleHR1cmVNYWdGaWx0ZXIsXHJcbiAgICBNZXNoUHJpbWl0aXZlTW9kZSxcclxufSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB0eXBlIHtcclxuICAgIElHTFRGLFxyXG4gICAgSVNhbXBsZXIsXHJcbiAgICBJTm9kZSxcclxuICAgIElTY2VuZSxcclxuICAgIElNZXNoLFxyXG4gICAgSUFjY2Vzc29yLFxyXG4gICAgSVNraW4sXHJcbiAgICBJQ2FtZXJhLFxyXG4gICAgSUFuaW1hdGlvbixcclxuICAgIElCdWZmZXIsXHJcbiAgICBJQnVmZmVyVmlldyxcclxuICAgIElNYXRlcmlhbFBick1ldGFsbGljUm91Z2huZXNzLFxyXG4gICAgSU1hdGVyaWFsLFxyXG4gICAgSVRleHR1cmVJbmZvLFxyXG4gICAgSVRleHR1cmUsXHJcbiAgICBJSW1hZ2UsXHJcbiAgICBJTWVzaFByaW1pdGl2ZSxcclxuICAgIElBcnJheUl0ZW0sXHJcbiAgICBfSVNhbXBsZXJEYXRhLFxyXG4gICAgSUFuaW1hdGlvbkNoYW5uZWwsXHJcbiAgICBJQW5pbWF0aW9uU2FtcGxlcixcclxuICAgIF9JQW5pbWF0aW9uU2FtcGxlckRhdGEsXHJcbn0gZnJvbSBcIi4vZ2xURkxvYWRlckludGVyZmFjZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBJR0xURkxvYWRlckV4dGVuc2lvbiB9IGZyb20gXCIuL2dsVEZMb2FkZXJFeHRlbnNpb25cIjtcclxuaW1wb3J0IHR5cGUgeyBJR0xURkxvYWRlciwgSUdMVEZMb2FkZXJEYXRhIH0gZnJvbSBcIi4uL2dsVEZGaWxlTG9hZGVyXCI7XHJcbmltcG9ydCB7IEdMVEZGaWxlTG9hZGVyLCBHTFRGTG9hZGVyU3RhdGUsIEdMVEZMb2FkZXJDb29yZGluYXRlU3lzdGVtTW9kZSwgR0xURkxvYWRlckFuaW1hdGlvblN0YXJ0TW9kZSB9IGZyb20gXCIuLi9nbFRGRmlsZUxvYWRlclwiO1xyXG5pbXBvcnQgdHlwZSB7IElEYXRhQnVmZmVyIH0gZnJvbSBcImNvcmUvTWlzYy9kYXRhUmVhZGVyXCI7XHJcbmltcG9ydCB7IERlY29kZUJhc2U2NFVybFRvQmluYXJ5LCBJc0Jhc2U2NERhdGFVcmwsIExvYWRGaWxlRXJyb3IgfSBmcm9tIFwiY29yZS9NaXNjL2ZpbGVUb29sc1wiO1xyXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiY29yZS9NaXNjL2xvZ2dlclwiO1xyXG5pbXBvcnQgdHlwZSB7IExpZ2h0IH0gZnJvbSBcImNvcmUvTGlnaHRzL2xpZ2h0XCI7XHJcbmltcG9ydCB7IEJvdW5kaW5nSW5mbyB9IGZyb20gXCJjb3JlL0N1bGxpbmcvYm91bmRpbmdJbmZvXCI7XHJcbmltcG9ydCB0eXBlIHsgQXNzZXRDb250YWluZXIgfSBmcm9tIFwiY29yZS9hc3NldENvbnRhaW5lclwiO1xyXG5pbXBvcnQgdHlwZSB7IEFuaW1hdGlvblByb3BlcnR5SW5mbyB9IGZyb20gXCIuL2dsVEZMb2FkZXJBbmltYXRpb25cIjtcclxuaW1wb3J0IHsgbm9kZUFuaW1hdGlvbkRhdGEgfSBmcm9tIFwiLi9nbFRGTG9hZGVyQW5pbWF0aW9uXCI7XHJcblxyXG5pbnRlcmZhY2UgVHlwZWRBcnJheUxpa2UgZXh0ZW5kcyBBcnJheUJ1ZmZlclZpZXcge1xyXG4gICAgcmVhZG9ubHkgbGVuZ3RoOiBudW1iZXI7XHJcbiAgICBbbjogbnVtYmVyXTogbnVtYmVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgVHlwZWRBcnJheUNvbnN0cnVjdG9yIHtcclxuICAgIG5ldyAobGVuZ3RoOiBudW1iZXIpOiBUeXBlZEFycmF5TGlrZTtcclxuICAgIG5ldyAoYnVmZmVyOiBBcnJheUJ1ZmZlckxpa2UsIGJ5dGVPZmZzZXQ6IG51bWJlciwgbGVuZ3RoPzogbnVtYmVyKTogVHlwZWRBcnJheUxpa2U7XHJcbn1cclxuXHJcbmludGVyZmFjZSBJTG9hZGVyUHJvcGVydHkgZXh0ZW5kcyBJUHJvcGVydHkge1xyXG4gICAgX2FjdGl2ZUxvYWRlckV4dGVuc2lvbkZ1bmN0aW9uczoge1xyXG4gICAgICAgIFtpZDogc3RyaW5nXTogYm9vbGVhbjtcclxuICAgIH07XHJcbn1cclxuXHJcbmludGVyZmFjZSBJUmVnaXN0ZXJlZEV4dGVuc2lvbiB7XHJcbiAgICBmYWN0b3J5OiAobG9hZGVyOiBHTFRGTG9hZGVyKSA9PiBJR0xURkxvYWRlckV4dGVuc2lvbjtcclxufVxyXG5cclxuaW50ZXJmYWNlIElXaXRoTWV0YWRhdGEge1xyXG4gICAgbWV0YWRhdGE6IGFueTtcclxuICAgIF9pbnRlcm5hbE1ldGFkYXRhOiBhbnk7XHJcbn1cclxuXHJcbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS80ODIxODIwOVxyXG5mdW5jdGlvbiBtZXJnZURlZXAoLi4ub2JqZWN0czogYW55W10pOiBhbnkge1xyXG4gICAgY29uc3QgaXNPYmplY3QgPSAob2JqOiBhbnkpID0+IG9iaiAmJiB0eXBlb2Ygb2JqID09PSBcIm9iamVjdFwiO1xyXG5cclxuICAgIHJldHVybiBvYmplY3RzLnJlZHVjZSgocHJldiwgb2JqKSA9PiB7XHJcbiAgICAgICAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcFZhbCA9IHByZXZba2V5XTtcclxuICAgICAgICAgICAgY29uc3Qgb1ZhbCA9IG9ialtrZXldO1xyXG5cclxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocFZhbCkgJiYgQXJyYXkuaXNBcnJheShvVmFsKSkge1xyXG4gICAgICAgICAgICAgICAgcHJldltrZXldID0gcFZhbC5jb25jYXQoLi4ub1ZhbCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNPYmplY3QocFZhbCkgJiYgaXNPYmplY3Qob1ZhbCkpIHtcclxuICAgICAgICAgICAgICAgIHByZXZba2V5XSA9IG1lcmdlRGVlcChwVmFsLCBvVmFsKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHByZXZba2V5XSA9IG9WYWw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHByZXY7XHJcbiAgICB9LCB7fSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBIZWxwZXIgY2xhc3MgZm9yIHdvcmtpbmcgd2l0aCBhcnJheXMgd2hlbiBsb2FkaW5nIHRoZSBnbFRGIGFzc2V0XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQXJyYXlJdGVtIHtcclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBhbiBpdGVtIGZyb20gdGhlIGdpdmVuIGFycmF5LlxyXG4gICAgICogQHBhcmFtIGNvbnRleHQgVGhlIGNvbnRleHQgd2hlbiBsb2FkaW5nIHRoZSBhc3NldFxyXG4gICAgICogQHBhcmFtIGFycmF5IFRoZSBhcnJheSB0byBnZXQgdGhlIGl0ZW0gZnJvbVxyXG4gICAgICogQHBhcmFtIGluZGV4IFRoZSBpbmRleCB0byB0aGUgYXJyYXlcclxuICAgICAqIEByZXR1cm5zIFRoZSBhcnJheSBpdGVtXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0PFQ+KGNvbnRleHQ6IHN0cmluZywgYXJyYXk6IEFycmF5TGlrZTxUPiB8IHVuZGVmaW5lZCwgaW5kZXg6IG51bWJlciB8IHVuZGVmaW5lZCk6IFQge1xyXG4gICAgICAgIGlmICghYXJyYXkgfHwgaW5kZXggPT0gdW5kZWZpbmVkIHx8ICFhcnJheVtpbmRleF0pIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2NvbnRleHR9OiBGYWlsZWQgdG8gZmluZCBpbmRleCAoJHtpbmRleH0pYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYXJyYXlbaW5kZXhdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBhbiBpdGVtIGZyb20gdGhlIGdpdmVuIGFycmF5IG9yIHJldHVybnMgbnVsbCBpZiBub3QgYXZhaWxhYmxlLlxyXG4gICAgICogQHBhcmFtIGFycmF5IFRoZSBhcnJheSB0byBnZXQgdGhlIGl0ZW0gZnJvbVxyXG4gICAgICogQHBhcmFtIGluZGV4IFRoZSBpbmRleCB0byB0aGUgYXJyYXlcclxuICAgICAqIEByZXR1cm5zIFRoZSBhcnJheSBpdGVtIG9yIG51bGxcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBUcnlHZXQ8VD4oYXJyYXk6IEFycmF5TGlrZTxUPiB8IHVuZGVmaW5lZCwgaW5kZXg6IG51bWJlciB8IHVuZGVmaW5lZCk6IE51bGxhYmxlPFQ+IHtcclxuICAgICAgICBpZiAoIWFycmF5IHx8IGluZGV4ID09IHVuZGVmaW5lZCB8fCAhYXJyYXlbaW5kZXhdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGFycmF5W2luZGV4XTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFzc2lnbiBhbiBgaW5kZXhgIGZpZWxkIHRvIGVhY2ggaXRlbSBvZiB0aGUgZ2l2ZW4gYXJyYXkuXHJcbiAgICAgKiBAcGFyYW0gYXJyYXkgVGhlIGFycmF5IG9mIGl0ZW1zXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgQXNzaWduKGFycmF5PzogSUFycmF5SXRlbVtdKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGFycmF5KSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheS5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIGFycmF5W2luZGV4XS5pbmRleCA9IGluZGV4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vKiogQGludGVybmFsICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUFuaW1hdGlvblRhcmdldEluZm8ge1xyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgdGFyZ2V0OiBhbnk7XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHJvcGVydGllczogQXJyYXk8QW5pbWF0aW9uUHJvcGVydHlJbmZvPjtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoZSBnbFRGIDIuMCBsb2FkZXJcclxuICovXHJcbmV4cG9ydCBjbGFzcyBHTFRGTG9hZGVyIGltcGxlbWVudHMgSUdMVEZMb2FkZXIge1xyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IF9jb21wbGV0ZVByb21pc2VzID0gbmV3IEFycmF5PFByb21pc2U8YW55Pj4oKTtcclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgX2Fzc2V0Q29udGFpbmVyOiBOdWxsYWJsZTxBc3NldENvbnRhaW5lcj4gPSBudWxsO1xyXG5cclxuICAgIC8qKiBTdG9yYWdlICovXHJcbiAgICBwdWJsaWMgX2JhYnlsb25MaWdodHM6IExpZ2h0W10gPSBbXTtcclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgX2Rpc2FibGVJbnN0YW5jZWRNZXNoID0gMDtcclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgX2FsbE1hdGVyaWFsc0RpcnR5UmVxdWlyZWQgPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9wYXJlbnQ6IEdMVEZGaWxlTG9hZGVyO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfZXh0ZW5zaW9ucyA9IG5ldyBBcnJheTxJR0xURkxvYWRlckV4dGVuc2lvbj4oKTtcclxuICAgIHByaXZhdGUgX2Rpc3Bvc2VkID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF9yb290VXJsOiBOdWxsYWJsZTxzdHJpbmc+ID0gbnVsbDtcclxuICAgIHByaXZhdGUgX2ZpbGVOYW1lOiBOdWxsYWJsZTxzdHJpbmc+ID0gbnVsbDtcclxuICAgIHByaXZhdGUgX3VuaXF1ZVJvb3RVcmw6IE51bGxhYmxlPHN0cmluZz4gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfZ2x0ZjogSUdMVEY7XHJcbiAgICBwcml2YXRlIF9iaW46IE51bGxhYmxlPElEYXRhQnVmZmVyPiA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9iYWJ5bG9uU2NlbmU6IFNjZW5lO1xyXG4gICAgcHJpdmF0ZSBfcm9vdEJhYnlsb25NZXNoOiBOdWxsYWJsZTxNZXNoPiA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9kZWZhdWx0QmFieWxvbk1hdGVyaWFsRGF0YTogeyBbZHJhd01vZGU6IG51bWJlcl06IE1hdGVyaWFsIH0gPSB7fTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX3Bvc3RTY2VuZUxvYWRBY3Rpb25zID0gbmV3IEFycmF5PCgpID0+IHZvaWQ+KCk7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX1JlZ2lzdGVyZWRFeHRlbnNpb25zOiB7IFtuYW1lOiBzdHJpbmddOiBJUmVnaXN0ZXJlZEV4dGVuc2lvbiB9ID0ge307XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgZGVmYXVsdCBnbFRGIHNhbXBsZXIuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRGVmYXVsdFNhbXBsZXI6IElTYW1wbGVyID0geyBpbmRleDogLTEgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlZ2lzdGVycyBhIGxvYWRlciBleHRlbnNpb24uXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgbG9hZGVyIGV4dGVuc2lvbi5cclxuICAgICAqIEBwYXJhbSBmYWN0b3J5IFRoZSBmYWN0b3J5IGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGUgbG9hZGVyIGV4dGVuc2lvbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBSZWdpc3RlckV4dGVuc2lvbihuYW1lOiBzdHJpbmcsIGZhY3Rvcnk6IChsb2FkZXI6IEdMVEZMb2FkZXIpID0+IElHTFRGTG9hZGVyRXh0ZW5zaW9uKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKEdMVEZMb2FkZXIuVW5yZWdpc3RlckV4dGVuc2lvbihuYW1lKSkge1xyXG4gICAgICAgICAgICBMb2dnZXIuV2FybihgRXh0ZW5zaW9uIHdpdGggdGhlIG5hbWUgJyR7bmFtZX0nIGFscmVhZHkgZXhpc3RzYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBHTFRGTG9hZGVyLl9SZWdpc3RlcmVkRXh0ZW5zaW9uc1tuYW1lXSA9IHtcclxuICAgICAgICAgICAgZmFjdG9yeTogZmFjdG9yeSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVW5yZWdpc3RlcnMgYSBsb2FkZXIgZXh0ZW5zaW9uLlxyXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhlIGxvYWRlciBleHRlbnNpb24uXHJcbiAgICAgKiBAcmV0dXJucyBBIGJvb2xlYW4gaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBleHRlbnNpb24gaGFzIGJlZW4gdW5yZWdpc3RlcmVkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgVW5yZWdpc3RlckV4dGVuc2lvbihuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAoIUdMVEZMb2FkZXIuX1JlZ2lzdGVyZWRFeHRlbnNpb25zW25hbWVdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRlbGV0ZSBHTFRGTG9hZGVyLl9SZWdpc3RlcmVkRXh0ZW5zaW9uc1tuYW1lXTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBvYmplY3QgdGhhdCByZXByZXNlbnRzIHRoZSBnbFRGIEpTT04uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgZ2x0ZigpOiBJR0xURiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9nbHRmKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImdsVEYgSlNPTiBpcyBub3QgYXZhaWxhYmxlXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dsdGY7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgQklOIGNodW5rIG9mIGEgYmluYXJ5IGdsVEYuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgYmluKCk6IE51bGxhYmxlPElEYXRhQnVmZmVyPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JpbjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBwYXJlbnQgZmlsZSBsb2FkZXIuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgcGFyZW50KCk6IEdMVEZGaWxlTG9hZGVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcGFyZW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIEJhYnlsb24gc2NlbmUgd2hlbiBsb2FkaW5nIHRoZSBhc3NldC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBiYWJ5bG9uU2NlbmUoKTogU2NlbmUge1xyXG4gICAgICAgIGlmICghdGhpcy5fYmFieWxvblNjZW5lKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlNjZW5lIGlzIG5vdCBhdmFpbGFibGVcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fYmFieWxvblNjZW5lO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHJvb3QgQmFieWxvbiBtZXNoIHdoZW4gbG9hZGluZyB0aGUgYXNzZXQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgcm9vdEJhYnlsb25NZXNoKCk6IE51bGxhYmxlPE1lc2g+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcm9vdEJhYnlsb25NZXNoO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHBhcmVudDogR0xURkZpbGVMb2FkZXIpIHtcclxuICAgICAgICB0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGRpc3Bvc2UoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2Rpc3Bvc2VkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2Rpc3Bvc2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5fY29tcGxldGVQcm9taXNlcy5sZW5ndGggPSAwO1xyXG5cclxuICAgICAgICB0aGlzLl9leHRlbnNpb25zLmZvckVhY2goKGV4dGVuc2lvbikgPT4gZXh0ZW5zaW9uLmRpc3Bvc2UgJiYgZXh0ZW5zaW9uLmRpc3Bvc2UoKSk7XHJcbiAgICAgICAgdGhpcy5fZXh0ZW5zaW9ucy5sZW5ndGggPSAwO1xyXG5cclxuICAgICAgICAodGhpcy5fZ2x0ZiBhcyBOdWxsYWJsZTxJR0xURj4pID0gbnVsbDsgLy8gVE9ET1xyXG4gICAgICAgIHRoaXMuX2JpbiA9IG51bGw7XHJcbiAgICAgICAgKHRoaXMuX2JhYnlsb25TY2VuZSBhcyBOdWxsYWJsZTxTY2VuZT4pID0gbnVsbDsgLy8gVE9ET1xyXG4gICAgICAgIHRoaXMuX3Jvb3RCYWJ5bG9uTWVzaCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fZGVmYXVsdEJhYnlsb25NYXRlcmlhbERhdGEgPSB7fTtcclxuICAgICAgICB0aGlzLl9wb3N0U2NlbmVMb2FkQWN0aW9ucy5sZW5ndGggPSAwO1xyXG5cclxuICAgICAgICB0aGlzLl9wYXJlbnQuZGlzcG9zZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbXBvcnRNZXNoQXN5bmMoXHJcbiAgICAgICAgbWVzaGVzTmFtZXM6IGFueSxcclxuICAgICAgICBzY2VuZTogU2NlbmUsXHJcbiAgICAgICAgY29udGFpbmVyOiBOdWxsYWJsZTxBc3NldENvbnRhaW5lcj4sXHJcbiAgICAgICAgZGF0YTogSUdMVEZMb2FkZXJEYXRhLFxyXG4gICAgICAgIHJvb3RVcmw6IHN0cmluZyxcclxuICAgICAgICBvblByb2dyZXNzPzogKGV2ZW50OiBJU2NlbmVMb2FkZXJQcm9ncmVzc0V2ZW50KSA9PiB2b2lkLFxyXG4gICAgICAgIGZpbGVOYW1lID0gXCJcIlxyXG4gICAgKTogUHJvbWlzZTxJU2NlbmVMb2FkZXJBc3luY1Jlc3VsdD4ge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fYmFieWxvblNjZW5lID0gc2NlbmU7XHJcbiAgICAgICAgICAgIHRoaXMuX2Fzc2V0Q29udGFpbmVyID0gY29udGFpbmVyO1xyXG4gICAgICAgICAgICB0aGlzLl9sb2FkRGF0YShkYXRhKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBub2RlczogTnVsbGFibGU8QXJyYXk8bnVtYmVyPj4gPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgaWYgKG1lc2hlc05hbWVzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBub2RlTWFwOiB7IFtuYW1lOiBzdHJpbmddOiBudW1iZXIgfSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2dsdGYubm9kZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgdGhpcy5fZ2x0Zi5ub2Rlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlTWFwW25vZGUubmFtZV0gPSBub2RlLmluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWVzID0gbWVzaGVzTmFtZXMgaW5zdGFuY2VvZiBBcnJheSA/IG1lc2hlc05hbWVzIDogW21lc2hlc05hbWVzXTtcclxuICAgICAgICAgICAgICAgIG5vZGVzID0gbmFtZXMubWFwKChuYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm9kZSA9IG5vZGVNYXBbbmFtZV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBmaW5kIG5vZGUgJyR7bmFtZX0nYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbG9hZEFzeW5jKHJvb3RVcmwsIGZpbGVOYW1lLCBub2RlcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNoZXM6IHRoaXMuX2dldE1lc2hlcygpLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhcnRpY2xlU3lzdGVtczogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgc2tlbGV0b25zOiB0aGlzLl9nZXRTa2VsZXRvbnMoKSxcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25Hcm91cHM6IHRoaXMuX2dldEFuaW1hdGlvbkdyb3VwcygpLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpZ2h0czogdGhpcy5fYmFieWxvbkxpZ2h0cyxcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1Ob2RlczogdGhpcy5fZ2V0VHJhbnNmb3JtTm9kZXMoKSxcclxuICAgICAgICAgICAgICAgICAgICBnZW9tZXRyaWVzOiB0aGlzLl9nZXRHZW9tZXRyaWVzKCksXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZEFzeW5jKHNjZW5lOiBTY2VuZSwgZGF0YTogSUdMVEZMb2FkZXJEYXRhLCByb290VXJsOiBzdHJpbmcsIG9uUHJvZ3Jlc3M/OiAoZXZlbnQ6IElTY2VuZUxvYWRlclByb2dyZXNzRXZlbnQpID0+IHZvaWQsIGZpbGVOYW1lID0gXCJcIik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fYmFieWxvblNjZW5lID0gc2NlbmU7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvYWREYXRhKGRhdGEpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbG9hZEFzeW5jKHJvb3RVcmwsIGZpbGVOYW1lLCBudWxsLCAoKSA9PiB1bmRlZmluZWQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2xvYWRBc3luYzxUPihyb290VXJsOiBzdHJpbmcsIGZpbGVOYW1lOiBzdHJpbmcsIG5vZGVzOiBOdWxsYWJsZTxBcnJheTxudW1iZXI+PiwgcmVzdWx0RnVuYzogKCkgPT4gVCk6IFByb21pc2U8VD4ge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yb290VXJsID0gcm9vdFVybDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3VuaXF1ZVJvb3RVcmwgPSAhcm9vdFVybC5zdGFydHNXaXRoKFwiZmlsZTpcIikgJiYgZmlsZU5hbWUgPyByb290VXJsIDogYCR7cm9vdFVybH0ke0RhdGUubm93KCl9L2A7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9maWxlTmFtZSA9IGZpbGVOYW1lO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYWxsTWF0ZXJpYWxzRGlydHlSZXF1aXJlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRFeHRlbnNpb25zKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jaGVja0V4dGVuc2lvbnMoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBsb2FkaW5nVG9SZWFkeUNvdW50ZXJOYW1lID0gYCR7R0xURkxvYWRlclN0YXRlW0dMVEZMb2FkZXJTdGF0ZS5MT0FESU5HXX0gPT4gJHtHTFRGTG9hZGVyU3RhdGVbR0xURkxvYWRlclN0YXRlLlJFQURZXX1gO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbG9hZGluZ1RvQ29tcGxldGVDb3VudGVyTmFtZSA9IGAke0dMVEZMb2FkZXJTdGF0ZVtHTFRGTG9hZGVyU3RhdGUuTE9BRElOR119ID0+ICR7R0xURkxvYWRlclN0YXRlW0dMVEZMb2FkZXJTdGF0ZS5DT01QTEVURV19YDtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wYXJlbnQuX3N0YXJ0UGVyZm9ybWFuY2VDb3VudGVyKGxvYWRpbmdUb1JlYWR5Q291bnRlck5hbWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcGFyZW50Ll9zdGFydFBlcmZvcm1hbmNlQ291bnRlcihsb2FkaW5nVG9Db21wbGV0ZUNvdW50ZXJOYW1lKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wYXJlbnQuX3NldFN0YXRlKEdMVEZMb2FkZXJTdGF0ZS5MT0FESU5HKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2V4dGVuc2lvbnNPbkxvYWRpbmcoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9taXNlcyA9IG5ldyBBcnJheTxQcm9taXNlPGFueT4+KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQmxvY2sgdGhlIG1hcmtpbmcgb2YgbWF0ZXJpYWxzIGRpcnR5IHVudGlsIHRoZSBzY2VuZSBpcyBsb2FkZWQuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBvbGRCbG9ja01hdGVyaWFsRGlydHlNZWNoYW5pc20gPSB0aGlzLl9iYWJ5bG9uU2NlbmUuYmxvY2tNYXRlcmlhbERpcnR5TWVjaGFuaXNtO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYmFieWxvblNjZW5lLmJsb2NrTWF0ZXJpYWxEaXJ0eU1lY2hhbmlzbSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnBhcmVudC5sb2FkT25seU1hdGVyaWFscykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChub2Rlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMubG9hZFNjZW5lQXN5bmMoXCIvbm9kZXNcIiwgeyBub2Rlczogbm9kZXMsIGluZGV4OiAtMSB9KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9nbHRmLnNjZW5lICE9IHVuZGVmaW5lZCB8fCAodGhpcy5fZ2x0Zi5zY2VuZXMgJiYgdGhpcy5fZ2x0Zi5zY2VuZXNbMF0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNjZW5lID0gQXJyYXlJdGVtLkdldChgL3NjZW5lYCwgdGhpcy5fZ2x0Zi5zY2VuZXMsIHRoaXMuX2dsdGYuc2NlbmUgfHwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5sb2FkU2NlbmVBc3luYyhgL3NjZW5lcy8ke3NjZW5lLmluZGV4fWAsIHNjZW5lKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5wYXJlbnQuc2tpcE1hdGVyaWFscyAmJiB0aGlzLnBhcmVudC5sb2FkQWxsTWF0ZXJpYWxzICYmIHRoaXMuX2dsdGYubWF0ZXJpYWxzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgbSA9IDA7IG0gPCB0aGlzLl9nbHRmLm1hdGVyaWFscy5sZW5ndGg7ICsrbSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRlcmlhbCA9IHRoaXMuX2dsdGYubWF0ZXJpYWxzW21dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gXCIvbWF0ZXJpYWxzL1wiICsgbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmFieWxvbkRyYXdNb2RlID0gTWF0ZXJpYWwuVHJpYW5nbGVGaWxsTW9kZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5fbG9hZE1hdGVyaWFsQXN5bmMoY29udGV4dCwgbWF0ZXJpYWwsIG51bGwsIGJhYnlsb25EcmF3TW9kZSwgKCkgPT4ge30pKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gUmVzdG9yZSB0aGUgYmxvY2tpbmcgb2YgbWF0ZXJpYWwgZGlydHkuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fYWxsTWF0ZXJpYWxzRGlydHlSZXF1aXJlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgY2FuIGhhcHBlbiBpZiB3ZSBhZGQgYSBsaWdodCBmb3IgaW5zdGFuY2UgYXMgaXQgd2lsbCBpbXBhY3QgdGhlIHdob2xlIHNjZW5lLlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgYXV0b21hdGljYWxseSByZXNldHMgZXZlcnl0aGluZyBpZiBuZWVkZWQuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYmFieWxvblNjZW5lLmJsb2NrTWF0ZXJpYWxEaXJ0eU1lY2hhbmlzbSA9IG9sZEJsb2NrTWF0ZXJpYWxEaXJ0eU1lY2hhbmlzbTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQnkgZGVmYXVsdCBhIG5ld2x5IGNyZWF0ZWQgbWF0ZXJpYWwgaXMgZGlydHkgc28gdGhlcmUgaXMgbm8gbmVlZCB0byBmbGFnIHRoZSBmdWxsIHNjZW5lIGFzIGRpcnR5LlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEZvciBwZXJmIHJlYXNvbnMsIHdlIHRoZW4gYnlwYXNzIGJsb2NrTWF0ZXJpYWxEaXJ0eU1lY2hhbmlzbSBhcyB0aGlzIHdvdWxkIFwiZGlydHlcIiB0aGUgZW50aXJlIHNjZW5lLlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2JhYnlsb25TY2VuZS5fZm9yY2VCbG9ja01hdGVyaWFsRGlydHlNZWNoYW5pc20ob2xkQmxvY2tNYXRlcmlhbERpcnR5TWVjaGFuaXNtKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fcGFyZW50LmNvbXBpbGVNYXRlcmlhbHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMuX2NvbXBpbGVNYXRlcmlhbHNBc3luYygpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fcGFyZW50LmNvbXBpbGVTaGFkb3dHZW5lcmF0b3JzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaCh0aGlzLl9jb21waWxlU2hhZG93R2VuZXJhdG9yc0FzeW5jKCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdFByb21pc2UgPSBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3Jvb3RCYWJ5bG9uTWVzaCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9yb290QmFieWxvbk1lc2guc2V0RW5hYmxlZCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2V4dGVuc2lvbnNPblJlYWR5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGFyZW50Ll9zZXRTdGF0ZShHTFRGTG9hZGVyU3RhdGUuUkVBRFkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdGFydEFuaW1hdGlvbnMoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdEZ1bmMoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRQcm9taXNlLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BhcmVudC5fZW5kUGVyZm9ybWFuY2VDb3VudGVyKGxvYWRpbmdUb1JlYWR5Q291bnRlck5hbWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBUb29scy5TZXRJbW1lZGlhdGUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX2Rpc3Bvc2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcm9taXNlLmFsbCh0aGlzLl9jb21wbGV0ZVByb21pc2VzKS50aGVuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGFyZW50Ll9lbmRQZXJmb3JtYW5jZUNvdW50ZXIobG9hZGluZ1RvQ29tcGxldGVDb3VudGVyTmFtZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wYXJlbnQuX3NldFN0YXRlKEdMVEZMb2FkZXJTdGF0ZS5DT01QTEVURSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wYXJlbnQub25Db21wbGV0ZU9ic2VydmFibGUubm90aWZ5T2JzZXJ2ZXJzKHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3BhcmVudC5vbkNvbXBsZXRlT2JzZXJ2YWJsZS5jbGVhcigpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGFyZW50Lm9uRXJyb3JPYnNlcnZhYmxlLm5vdGlmeU9ic2VydmVycyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3BhcmVudC5vbkVycm9yT2JzZXJ2YWJsZS5jbGVhcigpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5fZGlzcG9zZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wYXJlbnQub25FcnJvck9ic2VydmFibGUubm90aWZ5T2JzZXJ2ZXJzKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wYXJlbnQub25FcnJvck9ic2VydmFibGUuY2xlYXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2xvYWREYXRhKGRhdGE6IElHTFRGTG9hZGVyRGF0YSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2dsdGYgPSBkYXRhLmpzb24gYXMgSUdMVEY7XHJcbiAgICAgICAgdGhpcy5fc2V0dXBEYXRhKCk7XHJcblxyXG4gICAgICAgIGlmIChkYXRhLmJpbikge1xyXG4gICAgICAgICAgICBjb25zdCBidWZmZXJzID0gdGhpcy5fZ2x0Zi5idWZmZXJzO1xyXG4gICAgICAgICAgICBpZiAoYnVmZmVycyAmJiBidWZmZXJzWzBdICYmICFidWZmZXJzWzBdLnVyaSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYmluYXJ5QnVmZmVyID0gYnVmZmVyc1swXTtcclxuICAgICAgICAgICAgICAgIGlmIChiaW5hcnlCdWZmZXIuYnl0ZUxlbmd0aCA8IGRhdGEuYmluLmJ5dGVMZW5ndGggLSAzIHx8IGJpbmFyeUJ1ZmZlci5ieXRlTGVuZ3RoID4gZGF0YS5iaW4uYnl0ZUxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZ2dlci5XYXJuKGBCaW5hcnkgYnVmZmVyIGxlbmd0aCAoJHtiaW5hcnlCdWZmZXIuYnl0ZUxlbmd0aH0pIGZyb20gSlNPTiBkb2VzIG5vdCBtYXRjaCBjaHVuayBsZW5ndGggKCR7ZGF0YS5iaW4uYnl0ZUxlbmd0aH0pYCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5fYmluID0gZGF0YS5iaW47XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBMb2dnZXIuV2FybihcIlVuZXhwZWN0ZWQgQklOIGNodW5rXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3NldHVwRGF0YSgpOiB2b2lkIHtcclxuICAgICAgICBBcnJheUl0ZW0uQXNzaWduKHRoaXMuX2dsdGYuYWNjZXNzb3JzKTtcclxuICAgICAgICBBcnJheUl0ZW0uQXNzaWduKHRoaXMuX2dsdGYuYW5pbWF0aW9ucyk7XHJcbiAgICAgICAgQXJyYXlJdGVtLkFzc2lnbih0aGlzLl9nbHRmLmJ1ZmZlcnMpO1xyXG4gICAgICAgIEFycmF5SXRlbS5Bc3NpZ24odGhpcy5fZ2x0Zi5idWZmZXJWaWV3cyk7XHJcbiAgICAgICAgQXJyYXlJdGVtLkFzc2lnbih0aGlzLl9nbHRmLmNhbWVyYXMpO1xyXG4gICAgICAgIEFycmF5SXRlbS5Bc3NpZ24odGhpcy5fZ2x0Zi5pbWFnZXMpO1xyXG4gICAgICAgIEFycmF5SXRlbS5Bc3NpZ24odGhpcy5fZ2x0Zi5tYXRlcmlhbHMpO1xyXG4gICAgICAgIEFycmF5SXRlbS5Bc3NpZ24odGhpcy5fZ2x0Zi5tZXNoZXMpO1xyXG4gICAgICAgIEFycmF5SXRlbS5Bc3NpZ24odGhpcy5fZ2x0Zi5ub2Rlcyk7XHJcbiAgICAgICAgQXJyYXlJdGVtLkFzc2lnbih0aGlzLl9nbHRmLnNhbXBsZXJzKTtcclxuICAgICAgICBBcnJheUl0ZW0uQXNzaWduKHRoaXMuX2dsdGYuc2NlbmVzKTtcclxuICAgICAgICBBcnJheUl0ZW0uQXNzaWduKHRoaXMuX2dsdGYuc2tpbnMpO1xyXG4gICAgICAgIEFycmF5SXRlbS5Bc3NpZ24odGhpcy5fZ2x0Zi50ZXh0dXJlcyk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9nbHRmLm5vZGVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vZGVQYXJlbnRzOiB7IFtpbmRleDogbnVtYmVyXTogbnVtYmVyIH0gPSB7fTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBub2RlIG9mIHRoaXMuX2dsdGYubm9kZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChub2RlLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBpbmRleCBvZiBub2RlLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVQYXJlbnRzW2luZGV4XSA9IG5vZGUuaW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCByb290Tm9kZSA9IHRoaXMuX2NyZWF0ZVJvb3ROb2RlKCk7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiB0aGlzLl9nbHRmLm5vZGVzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnRJbmRleCA9IG5vZGVQYXJlbnRzW25vZGUuaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSBwYXJlbnRJbmRleCA9PT0gdW5kZWZpbmVkID8gcm9vdE5vZGUgOiB0aGlzLl9nbHRmLm5vZGVzW3BhcmVudEluZGV4XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9sb2FkRXh0ZW5zaW9ucygpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGNvbnN0IG5hbWUgaW4gR0xURkxvYWRlci5fUmVnaXN0ZXJlZEV4dGVuc2lvbnMpIHtcclxuICAgICAgICAgICAgY29uc3QgZXh0ZW5zaW9uID0gR0xURkxvYWRlci5fUmVnaXN0ZXJlZEV4dGVuc2lvbnNbbmFtZV0uZmFjdG9yeSh0aGlzKTtcclxuICAgICAgICAgICAgaWYgKGV4dGVuc2lvbi5uYW1lICE9PSBuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBMb2dnZXIuV2FybihgVGhlIG5hbWUgb2YgdGhlIGdsVEYgbG9hZGVyIGV4dGVuc2lvbiBpbnN0YW5jZSBkb2VzIG5vdCBtYXRjaCB0aGUgcmVnaXN0ZXJlZCBuYW1lOiAke2V4dGVuc2lvbi5uYW1lfSAhPT0gJHtuYW1lfWApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9leHRlbnNpb25zLnB1c2goZXh0ZW5zaW9uKTtcclxuICAgICAgICAgICAgdGhpcy5fcGFyZW50Lm9uRXh0ZW5zaW9uTG9hZGVkT2JzZXJ2YWJsZS5ub3RpZnlPYnNlcnZlcnMoZXh0ZW5zaW9uKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2V4dGVuc2lvbnMuc29ydCgoYSwgYikgPT4gKGEub3JkZXIgfHwgTnVtYmVyLk1BWF9WQUxVRSkgLSAoYi5vcmRlciB8fCBOdW1iZXIuTUFYX1ZBTFVFKSk7XHJcbiAgICAgICAgdGhpcy5fcGFyZW50Lm9uRXh0ZW5zaW9uTG9hZGVkT2JzZXJ2YWJsZS5jbGVhcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NoZWNrRXh0ZW5zaW9ucygpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5fZ2x0Zi5leHRlbnNpb25zUmVxdWlyZWQpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBuYW1lIG9mIHRoaXMuX2dsdGYuZXh0ZW5zaW9uc1JlcXVpcmVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhdmFpbGFibGUgPSB0aGlzLl9leHRlbnNpb25zLnNvbWUoKGV4dGVuc2lvbikgPT4gZXh0ZW5zaW9uLm5hbWUgPT09IG5hbWUgJiYgZXh0ZW5zaW9uLmVuYWJsZWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFhdmFpbGFibGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFJlcXVpcmUgZXh0ZW5zaW9uICR7bmFtZX0gaXMgbm90IGF2YWlsYWJsZWApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NyZWF0ZVJvb3ROb2RlKCk6IElOb2RlIHtcclxuICAgICAgICB0aGlzLl9iYWJ5bG9uU2NlbmUuX2Jsb2NrRW50aXR5Q29sbGVjdGlvbiA9ICEhdGhpcy5fYXNzZXRDb250YWluZXI7XHJcbiAgICAgICAgdGhpcy5fcm9vdEJhYnlsb25NZXNoID0gbmV3IE1lc2goXCJfX3Jvb3RfX1wiLCB0aGlzLl9iYWJ5bG9uU2NlbmUpO1xyXG4gICAgICAgIHRoaXMuX3Jvb3RCYWJ5bG9uTWVzaC5fcGFyZW50Q29udGFpbmVyID0gdGhpcy5fYXNzZXRDb250YWluZXI7XHJcbiAgICAgICAgdGhpcy5fYmFieWxvblNjZW5lLl9ibG9ja0VudGl0eUNvbGxlY3Rpb24gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9yb290QmFieWxvbk1lc2guc2V0RW5hYmxlZChmYWxzZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJvb3ROb2RlOiBJTm9kZSA9IHtcclxuICAgICAgICAgICAgX2JhYnlsb25UcmFuc2Zvcm1Ob2RlOiB0aGlzLl9yb290QmFieWxvbk1lc2gsXHJcbiAgICAgICAgICAgIGluZGV4OiAtMSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHRoaXMuX3BhcmVudC5jb29yZGluYXRlU3lzdGVtTW9kZSkge1xyXG4gICAgICAgICAgICBjYXNlIEdMVEZMb2FkZXJDb29yZGluYXRlU3lzdGVtTW9kZS5BVVRPOiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX2JhYnlsb25TY2VuZS51c2VSaWdodEhhbmRlZFN5c3RlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJvb3ROb2RlLnJvdGF0aW9uID0gWzAsIDEsIDAsIDBdO1xyXG4gICAgICAgICAgICAgICAgICAgIHJvb3ROb2RlLnNjYWxlID0gWzEsIDEsIC0xXTtcclxuICAgICAgICAgICAgICAgICAgICBHTFRGTG9hZGVyLl9Mb2FkVHJhbnNmb3JtKHJvb3ROb2RlLCB0aGlzLl9yb290QmFieWxvbk1lc2gpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBHTFRGTG9hZGVyQ29vcmRpbmF0ZVN5c3RlbU1vZGUuRk9SQ0VfUklHSFRfSEFOREVEOiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9iYWJ5bG9uU2NlbmUudXNlUmlnaHRIYW5kZWRTeXN0ZW0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGNvb3JkaW5hdGUgc3lzdGVtIG1vZGUgKCR7dGhpcy5fcGFyZW50LmNvb3JkaW5hdGVTeXN0ZW1Nb2RlfSlgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fcGFyZW50Lm9uTWVzaExvYWRlZE9ic2VydmFibGUubm90aWZ5T2JzZXJ2ZXJzKHRoaXMuX3Jvb3RCYWJ5bG9uTWVzaCk7XHJcbiAgICAgICAgcmV0dXJuIHJvb3ROb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTG9hZHMgYSBnbFRGIHNjZW5lLlxyXG4gICAgICogQHBhcmFtIGNvbnRleHQgVGhlIGNvbnRleHQgd2hlbiBsb2FkaW5nIHRoZSBhc3NldFxyXG4gICAgICogQHBhcmFtIHNjZW5lIFRoZSBnbFRGIHNjZW5lIHByb3BlcnR5XHJcbiAgICAgKiBAcmV0dXJucyBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBsb2FkIGlzIGNvbXBsZXRlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkU2NlbmVBc3luYyhjb250ZXh0OiBzdHJpbmcsIHNjZW5lOiBJU2NlbmUpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBjb25zdCBleHRlbnNpb25Qcm9taXNlID0gdGhpcy5fZXh0ZW5zaW9uc0xvYWRTY2VuZUFzeW5jKGNvbnRleHQsIHNjZW5lKTtcclxuICAgICAgICBpZiAoZXh0ZW5zaW9uUHJvbWlzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZXh0ZW5zaW9uUHJvbWlzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gbmV3IEFycmF5PFByb21pc2U8YW55Pj4oKTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2dPcGVuKGAke2NvbnRleHR9ICR7c2NlbmUubmFtZSB8fCBcIlwifWApO1xyXG5cclxuICAgICAgICBpZiAoc2NlbmUubm9kZXMpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBpbmRleCBvZiBzY2VuZS5ub2Rlcykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgbm9kZSA9IEFycmF5SXRlbS5HZXQoYCR7Y29udGV4dH0vbm9kZXMvJHtpbmRleH1gLCB0aGlzLl9nbHRmLm5vZGVzLCBpbmRleCk7XHJcbiAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZE5vZGVBc3luYyhgL25vZGVzLyR7bm9kZS5pbmRleH1gLCBub2RlLCAoYmFieWxvbk1lc2gpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFieWxvbk1lc2gucGFyZW50ID0gdGhpcy5fcm9vdEJhYnlsb25NZXNoO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGFjdGlvbiBvZiB0aGlzLl9wb3N0U2NlbmVMb2FkQWN0aW9ucykge1xyXG4gICAgICAgICAgICBhY3Rpb24oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb21pc2VzLnB1c2godGhpcy5fbG9hZEFuaW1hdGlvbnNBc3luYygpKTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2dDbG9zZSgpO1xyXG5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4ge30pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2ZvckVhY2hQcmltaXRpdmUobm9kZTogSU5vZGUsIGNhbGxiYWNrOiAoYmFieWxvbk1lc2g6IEFic3RyYWN0TWVzaCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIGlmIChub2RlLl9wcmltaXRpdmVCYWJ5bG9uTWVzaGVzKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgYmFieWxvbk1lc2ggb2Ygbm9kZS5fcHJpbWl0aXZlQmFieWxvbk1lc2hlcykge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soYmFieWxvbk1lc2gpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2dldEdlb21ldHJpZXMoKTogR2VvbWV0cnlbXSB7XHJcbiAgICAgICAgY29uc3QgZ2VvbWV0cmllcyA9IG5ldyBBcnJheTxHZW9tZXRyeT4oKTtcclxuXHJcbiAgICAgICAgY29uc3Qgbm9kZXMgPSB0aGlzLl9nbHRmLm5vZGVzO1xyXG4gICAgICAgIGlmIChub2Rlcykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IG5vZGUgb2Ygbm9kZXMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2ZvckVhY2hQcmltaXRpdmUobm9kZSwgKGJhYnlsb25NZXNoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZ2VvbWV0cnkgPSAoYmFieWxvbk1lc2ggYXMgTWVzaCkuZ2VvbWV0cnk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdlb21ldHJ5ICYmIGdlb21ldHJpZXMuaW5kZXhPZihnZW9tZXRyeSkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdlb21ldHJpZXMucHVzaChnZW9tZXRyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBnZW9tZXRyaWVzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2dldE1lc2hlcygpOiBBYnN0cmFjdE1lc2hbXSB7XHJcbiAgICAgICAgY29uc3QgbWVzaGVzID0gbmV3IEFycmF5PEFic3RyYWN0TWVzaD4oKTtcclxuXHJcbiAgICAgICAgLy8gUm9vdCBtZXNoIGlzIGFsd2F5cyBmaXJzdCwgaWYgYXZhaWxhYmxlLlxyXG4gICAgICAgIGlmICh0aGlzLl9yb290QmFieWxvbk1lc2gpIHtcclxuICAgICAgICAgICAgbWVzaGVzLnB1c2godGhpcy5fcm9vdEJhYnlsb25NZXNoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG5vZGVzID0gdGhpcy5fZ2x0Zi5ub2RlcztcclxuICAgICAgICBpZiAobm9kZXMpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBub2RlIG9mIG5vZGVzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9mb3JFYWNoUHJpbWl0aXZlKG5vZGUsIChiYWJ5bG9uTWVzaCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lc2hlcy5wdXNoKGJhYnlsb25NZXNoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbWVzaGVzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2dldFRyYW5zZm9ybU5vZGVzKCk6IFRyYW5zZm9ybU5vZGVbXSB7XHJcbiAgICAgICAgY29uc3QgdHJhbnNmb3JtTm9kZXMgPSBuZXcgQXJyYXk8VHJhbnNmb3JtTm9kZT4oKTtcclxuXHJcbiAgICAgICAgY29uc3Qgbm9kZXMgPSB0aGlzLl9nbHRmLm5vZGVzO1xyXG4gICAgICAgIGlmIChub2Rlcykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IG5vZGUgb2Ygbm9kZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChub2RlLl9iYWJ5bG9uVHJhbnNmb3JtTm9kZSAmJiBub2RlLl9iYWJ5bG9uVHJhbnNmb3JtTm9kZS5nZXRDbGFzc05hbWUoKSA9PT0gXCJUcmFuc2Zvcm1Ob2RlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1Ob2Rlcy5wdXNoKG5vZGUuX2JhYnlsb25UcmFuc2Zvcm1Ob2RlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChub2RlLl9iYWJ5bG9uVHJhbnNmb3JtTm9kZUZvclNraW4pIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1Ob2Rlcy5wdXNoKG5vZGUuX2JhYnlsb25UcmFuc2Zvcm1Ob2RlRm9yU2tpbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cmFuc2Zvcm1Ob2RlcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9nZXRTa2VsZXRvbnMoKTogU2tlbGV0b25bXSB7XHJcbiAgICAgICAgY29uc3Qgc2tlbGV0b25zID0gbmV3IEFycmF5PFNrZWxldG9uPigpO1xyXG5cclxuICAgICAgICBjb25zdCBza2lucyA9IHRoaXMuX2dsdGYuc2tpbnM7XHJcbiAgICAgICAgaWYgKHNraW5zKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qgc2tpbiBvZiBza2lucykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNraW4uX2RhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBza2VsZXRvbnMucHVzaChza2luLl9kYXRhLmJhYnlsb25Ta2VsZXRvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBza2VsZXRvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZ2V0QW5pbWF0aW9uR3JvdXBzKCk6IEFuaW1hdGlvbkdyb3VwW10ge1xyXG4gICAgICAgIGNvbnN0IGFuaW1hdGlvbkdyb3VwcyA9IG5ldyBBcnJheTxBbmltYXRpb25Hcm91cD4oKTtcclxuXHJcbiAgICAgICAgY29uc3QgYW5pbWF0aW9ucyA9IHRoaXMuX2dsdGYuYW5pbWF0aW9ucztcclxuICAgICAgICBpZiAoYW5pbWF0aW9ucykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGFuaW1hdGlvbiBvZiBhbmltYXRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYW5pbWF0aW9uLl9iYWJ5bG9uQW5pbWF0aW9uR3JvdXApIHtcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25Hcm91cHMucHVzaChhbmltYXRpb24uX2JhYnlsb25BbmltYXRpb25Hcm91cCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBhbmltYXRpb25Hcm91cHM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfc3RhcnRBbmltYXRpb25zKCk6IHZvaWQge1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5fcGFyZW50LmFuaW1hdGlvblN0YXJ0TW9kZSkge1xyXG4gICAgICAgICAgICBjYXNlIEdMVEZMb2FkZXJBbmltYXRpb25TdGFydE1vZGUuTk9ORToge1xyXG4gICAgICAgICAgICAgICAgLy8gZG8gbm90aGluZ1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBHTFRGTG9hZGVyQW5pbWF0aW9uU3RhcnRNb2RlLkZJUlNUOiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBiYWJ5bG9uQW5pbWF0aW9uR3JvdXBzID0gdGhpcy5fZ2V0QW5pbWF0aW9uR3JvdXBzKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYmFieWxvbkFuaW1hdGlvbkdyb3Vwcy5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uQW5pbWF0aW9uR3JvdXBzWzBdLnN0YXJ0KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBHTFRGTG9hZGVyQW5pbWF0aW9uU3RhcnRNb2RlLkFMTDoge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYmFieWxvbkFuaW1hdGlvbkdyb3VwcyA9IHRoaXMuX2dldEFuaW1hdGlvbkdyb3VwcygpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBiYWJ5bG9uQW5pbWF0aW9uR3JvdXAgb2YgYmFieWxvbkFuaW1hdGlvbkdyb3Vwcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhYnlsb25BbmltYXRpb25Hcm91cC5zdGFydCh0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgICAgIExvZ2dlci5FcnJvcihgSW52YWxpZCBhbmltYXRpb24gc3RhcnQgbW9kZSAoJHt0aGlzLl9wYXJlbnQuYW5pbWF0aW9uU3RhcnRNb2RlfSlgKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIExvYWRzIGEgZ2xURiBub2RlLlxyXG4gICAgICogQHBhcmFtIGNvbnRleHQgVGhlIGNvbnRleHQgd2hlbiBsb2FkaW5nIHRoZSBhc3NldFxyXG4gICAgICogQHBhcmFtIG5vZGUgVGhlIGdsVEYgbm9kZSBwcm9wZXJ0eVxyXG4gICAgICogQHBhcmFtIGFzc2lnbiBBIGZ1bmN0aW9uIGNhbGxlZCBzeW5jaHJvbm91c2x5IGFmdGVyIHBhcnNpbmcgdGhlIGdsVEYgcHJvcGVydGllc1xyXG4gICAgICogQHJldHVybnMgQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgbG9hZGVkIEJhYnlsb24gbWVzaCB3aGVuIHRoZSBsb2FkIGlzIGNvbXBsZXRlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkTm9kZUFzeW5jKGNvbnRleHQ6IHN0cmluZywgbm9kZTogSU5vZGUsIGFzc2lnbjogKGJhYnlsb25UcmFuc2Zvcm1Ob2RlOiBUcmFuc2Zvcm1Ob2RlKSA9PiB2b2lkID0gKCkgPT4ge30pOiBQcm9taXNlPFRyYW5zZm9ybU5vZGU+IHtcclxuICAgICAgICBjb25zdCBleHRlbnNpb25Qcm9taXNlID0gdGhpcy5fZXh0ZW5zaW9uc0xvYWROb2RlQXN5bmMoY29udGV4dCwgbm9kZSwgYXNzaWduKTtcclxuICAgICAgICBpZiAoZXh0ZW5zaW9uUHJvbWlzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZXh0ZW5zaW9uUHJvbWlzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChub2RlLl9iYWJ5bG9uVHJhbnNmb3JtTm9kZSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7Y29udGV4dH06IEludmFsaWQgcmVjdXJzaXZlIG5vZGUgaGllcmFyY2h5YCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBwcm9taXNlcyA9IG5ldyBBcnJheTxQcm9taXNlPGFueT4+KCk7XHJcblxyXG4gICAgICAgIHRoaXMubG9nT3BlbihgJHtjb250ZXh0fSAke25vZGUubmFtZSB8fCBcIlwifWApO1xyXG5cclxuICAgICAgICBjb25zdCBsb2FkTm9kZSA9IChiYWJ5bG9uVHJhbnNmb3JtTm9kZTogVHJhbnNmb3JtTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICBHTFRGTG9hZGVyLkFkZFBvaW50ZXJNZXRhZGF0YShiYWJ5bG9uVHJhbnNmb3JtTm9kZSwgY29udGV4dCk7XHJcbiAgICAgICAgICAgIEdMVEZMb2FkZXIuX0xvYWRUcmFuc2Zvcm0obm9kZSwgYmFieWxvblRyYW5zZm9ybU5vZGUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKG5vZGUuY2FtZXJhICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FtZXJhID0gQXJyYXlJdGVtLkdldChgJHtjb250ZXh0fS9jYW1lcmFgLCB0aGlzLl9nbHRmLmNhbWVyYXMsIG5vZGUuY2FtZXJhKTtcclxuICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkQ2FtZXJhQXN5bmMoYC9jYW1lcmFzLyR7Y2FtZXJhLmluZGV4fWAsIGNhbWVyYSwgKGJhYnlsb25DYW1lcmEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFieWxvbkNhbWVyYS5wYXJlbnQgPSBiYWJ5bG9uVHJhbnNmb3JtTm9kZTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKG5vZGUuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaW5kZXggb2Ygbm9kZS5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZSA9IEFycmF5SXRlbS5HZXQoYCR7Y29udGV4dH0vY2hpbGRyZW4vJHtpbmRleH1gLCB0aGlzLl9nbHRmLm5vZGVzLCBpbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkTm9kZUFzeW5jKGAvbm9kZXMvJHtjaGlsZE5vZGUuaW5kZXh9YCwgY2hpbGROb2RlLCAoY2hpbGRCYWJ5bG9uTWVzaCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRCYWJ5bG9uTWVzaC5wYXJlbnQgPSBiYWJ5bG9uVHJhbnNmb3JtTm9kZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhc3NpZ24oYmFieWxvblRyYW5zZm9ybU5vZGUpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmIChub2RlLm1lc2ggPT0gdW5kZWZpbmVkIHx8IG5vZGUuc2tpbiAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgY29uc3Qgbm9kZU5hbWUgPSBub2RlLm5hbWUgfHwgYG5vZGUke25vZGUuaW5kZXh9YDtcclxuICAgICAgICAgICAgdGhpcy5fYmFieWxvblNjZW5lLl9ibG9ja0VudGl0eUNvbGxlY3Rpb24gPSAhIXRoaXMuX2Fzc2V0Q29udGFpbmVyO1xyXG4gICAgICAgICAgICBjb25zdCB0cmFuc2Zvcm1Ob2RlID0gbmV3IFRyYW5zZm9ybU5vZGUobm9kZU5hbWUsIHRoaXMuX2JhYnlsb25TY2VuZSk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybU5vZGUuX3BhcmVudENvbnRhaW5lciA9IHRoaXMuX2Fzc2V0Q29udGFpbmVyO1xyXG4gICAgICAgICAgICB0aGlzLl9iYWJ5bG9uU2NlbmUuX2Jsb2NrRW50aXR5Q29sbGVjdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAobm9kZS5tZXNoID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5fYmFieWxvblRyYW5zZm9ybU5vZGUgPSB0cmFuc2Zvcm1Ob2RlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5fYmFieWxvblRyYW5zZm9ybU5vZGVGb3JTa2luID0gdHJhbnNmb3JtTm9kZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsb2FkTm9kZSh0cmFuc2Zvcm1Ob2RlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChub2RlLm1lc2ggIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGlmIChub2RlLnNraW4gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtZXNoID0gQXJyYXlJdGVtLkdldChgJHtjb250ZXh0fS9tZXNoYCwgdGhpcy5fZ2x0Zi5tZXNoZXMsIG5vZGUubWVzaCk7XHJcbiAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMuX2xvYWRNZXNoQXN5bmMoYC9tZXNoZXMvJHttZXNoLmluZGV4fWAsIG5vZGUsIG1lc2gsIGxvYWROb2RlKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL3NwZWNpZmljYXRpb24vMi4wI3NraW5zIChzZWNvbmQgaW1wbGVtZW50YXRpb24gbm90ZSlcclxuICAgICAgICAgICAgICAgIC8vIFRoaXMgY29kZSBwYXRoIHdpbGwgcGxhY2UgdGhlIHNraW5uZWQgbWVzaCBhcyBhIHNpYmxpbmcgb2YgdGhlIHNrZWxldG9uIHJvb3Qgbm9kZSB3aXRob3V0IGxvYWRpbmcgdGhlXHJcbiAgICAgICAgICAgICAgICAvLyB0cmFuc2Zvcm0sIHdoaWNoIGVmZmVjdGl2ZWx5IGlnbm9yZXMgdGhlIHRyYW5zZm9ybSBvZiB0aGUgc2tpbm5lZCBtZXNoLCBhcyBwZXIgc3BlYy5cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBtZXNoID0gQXJyYXlJdGVtLkdldChgJHtjb250ZXh0fS9tZXNoYCwgdGhpcy5fZ2x0Zi5tZXNoZXMsIG5vZGUubWVzaCk7XHJcbiAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRNZXNoQXN5bmMoYC9tZXNoZXMvJHttZXNoLmluZGV4fWAsIG5vZGUsIG1lc2gsIChiYWJ5bG9uVHJhbnNmb3JtTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBiYWJ5bG9uVHJhbnNmb3JtTm9kZUZvclNraW4gPSBub2RlLl9iYWJ5bG9uVHJhbnNmb3JtTm9kZUZvclNraW4hO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTWVyZ2UgdGhlIG1ldGFkYXRhIGZyb20gdGhlIHNraW4gbm9kZSB0byB0aGUgc2tpbm5lZCBtZXNoIGluIGNhc2UgYSBsb2FkZXIgZXh0ZW5zaW9uIGFkZGVkIG1ldGFkYXRhLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uVHJhbnNmb3JtTm9kZS5tZXRhZGF0YSA9IG1lcmdlRGVlcChiYWJ5bG9uVHJhbnNmb3JtTm9kZUZvclNraW4ubWV0YWRhdGEsIGJhYnlsb25UcmFuc2Zvcm1Ob2RlLm1ldGFkYXRhIHx8IHt9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNraW4gPSBBcnJheUl0ZW0uR2V0KGAke2NvbnRleHR9L3NraW5gLCB0aGlzLl9nbHRmLnNraW5zLCBub2RlLnNraW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9hZFNraW5Bc3luYyhgL3NraW5zLyR7c2tpbi5pbmRleH1gLCBub2RlLCBza2luLCAoYmFieWxvblNrZWxldG9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZm9yRWFjaFByaW1pdGl2ZShub2RlLCAoYmFieWxvbk1lc2gpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFieWxvbk1lc2guc2tlbGV0b24gPSBiYWJ5bG9uU2tlbGV0b247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdhaXQgdW50aWwgYWxsIHRoZSBub2RlcyBhcmUgcGFyZW50ZWQgYmVmb3JlIHBhcmVudGluZyB0aGUgc2tpbm5lZCBtZXNoLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3Bvc3RTY2VuZUxvYWRBY3Rpb25zLnB1c2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2tpbi5za2VsZXRvbiAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFBsYWNlIHRoZSBza2lubmVkIG1lc2ggbm9kZSBhcyBhIHNpYmxpbmcgb2YgdGhlIHNrZWxldG9uIHJvb3Qgbm9kZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBzcGVjaWFsIGNhc2Ugd2hlbiB0aGUgcGFyZW50IG9mIHRoZSBza2VsZXRvbiByb290IGlzIHRoZSBza2lubmVkIG1lc2guXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnROb2RlID0gQXJyYXlJdGVtLkdldChgL3NraW5zLyR7c2tpbi5pbmRleH0vc2tlbGV0b25gLCB0aGlzLl9nbHRmLm5vZGVzLCBza2luLnNrZWxldG9uKS5wYXJlbnQhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUuaW5kZXggPT09IHBhcmVudE5vZGUuaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uVHJhbnNmb3JtTm9kZS5wYXJlbnQgPSBiYWJ5bG9uVHJhbnNmb3JtTm9kZUZvclNraW4ucGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uVHJhbnNmb3JtTm9kZS5wYXJlbnQgPSBwYXJlbnROb2RlLl9iYWJ5bG9uVHJhbnNmb3JtTm9kZSE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uVHJhbnNmb3JtTm9kZS5wYXJlbnQgPSB0aGlzLl9yb290QmFieWxvbk1lc2g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3BhcmVudC5vblNraW5Mb2FkZWRPYnNlcnZhYmxlLm5vdGlmeU9ic2VydmVycyh7IG5vZGU6IGJhYnlsb25UcmFuc2Zvcm1Ob2RlRm9yU2tpbiwgc2tpbm5lZE5vZGU6IGJhYnlsb25UcmFuc2Zvcm1Ob2RlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5sb2dDbG9zZSgpO1xyXG5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9mb3JFYWNoUHJpbWl0aXZlKG5vZGUsIChiYWJ5bG9uTWVzaCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKChiYWJ5bG9uTWVzaCBhcyBNZXNoKS5nZW9tZXRyeSAmJiAoYmFieWxvbk1lc2ggYXMgTWVzaCkuZ2VvbWV0cnkhLnVzZUJvdW5kaW5nSW5mb0Zyb21HZW9tZXRyeSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNpbXBseSBhcHBseSB0aGUgd29ybGQgbWF0cmljZXMgdG8gdGhlIGJvdW5kaW5nIGluZm8gLSB0aGUgZXh0ZW5kcyBhcmUgYWxyZWFkeSBva1xyXG4gICAgICAgICAgICAgICAgICAgIGJhYnlsb25NZXNoLl91cGRhdGVCb3VuZGluZ0luZm8oKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFieWxvbk1lc2gucmVmcmVzaEJvdW5kaW5nSW5mbyh0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbm9kZS5fYmFieWxvblRyYW5zZm9ybU5vZGUhO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2xvYWRNZXNoQXN5bmMoY29udGV4dDogc3RyaW5nLCBub2RlOiBJTm9kZSwgbWVzaDogSU1lc2gsIGFzc2lnbjogKGJhYnlsb25UcmFuc2Zvcm1Ob2RlOiBUcmFuc2Zvcm1Ob2RlKSA9PiB2b2lkKTogUHJvbWlzZTxUcmFuc2Zvcm1Ob2RlPiB7XHJcbiAgICAgICAgY29uc3QgcHJpbWl0aXZlcyA9IG1lc2gucHJpbWl0aXZlcztcclxuICAgICAgICBpZiAoIXByaW1pdGl2ZXMgfHwgIXByaW1pdGl2ZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtjb250ZXh0fTogUHJpbWl0aXZlcyBhcmUgbWlzc2luZ2ApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHByaW1pdGl2ZXNbMF0uaW5kZXggPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIEFycmF5SXRlbS5Bc3NpZ24ocHJpbWl0aXZlcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBwcm9taXNlcyA9IG5ldyBBcnJheTxQcm9taXNlPGFueT4+KCk7XHJcblxyXG4gICAgICAgIHRoaXMubG9nT3BlbihgJHtjb250ZXh0fSAke21lc2gubmFtZSB8fCBcIlwifWApO1xyXG5cclxuICAgICAgICBjb25zdCBuYW1lID0gbm9kZS5uYW1lIHx8IGBub2RlJHtub2RlLmluZGV4fWA7XHJcblxyXG4gICAgICAgIGlmIChwcmltaXRpdmVzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICBjb25zdCBwcmltaXRpdmUgPSBtZXNoLnByaW1pdGl2ZXNbMF07XHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2FkTWVzaFByaW1pdGl2ZUFzeW5jKGAke2NvbnRleHR9L3ByaW1pdGl2ZXMvJHtwcmltaXRpdmUuaW5kZXh9YCwgbmFtZSwgbm9kZSwgbWVzaCwgcHJpbWl0aXZlLCAoYmFieWxvbk1lc2gpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLl9iYWJ5bG9uVHJhbnNmb3JtTm9kZSA9IGJhYnlsb25NZXNoO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuX3ByaW1pdGl2ZUJhYnlsb25NZXNoZXMgPSBbYmFieWxvbk1lc2hdO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9iYWJ5bG9uU2NlbmUuX2Jsb2NrRW50aXR5Q29sbGVjdGlvbiA9ICEhdGhpcy5fYXNzZXRDb250YWluZXI7XHJcbiAgICAgICAgICAgIG5vZGUuX2JhYnlsb25UcmFuc2Zvcm1Ob2RlID0gbmV3IFRyYW5zZm9ybU5vZGUobmFtZSwgdGhpcy5fYmFieWxvblNjZW5lKTtcclxuICAgICAgICAgICAgbm9kZS5fYmFieWxvblRyYW5zZm9ybU5vZGUuX3BhcmVudENvbnRhaW5lciA9IHRoaXMuX2Fzc2V0Q29udGFpbmVyO1xyXG4gICAgICAgICAgICB0aGlzLl9iYWJ5bG9uU2NlbmUuX2Jsb2NrRW50aXR5Q29sbGVjdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICBub2RlLl9wcmltaXRpdmVCYWJ5bG9uTWVzaGVzID0gW107XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgcHJpbWl0aXZlIG9mIHByaW1pdGl2ZXMpIHtcclxuICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9hZE1lc2hQcmltaXRpdmVBc3luYyhgJHtjb250ZXh0fS9wcmltaXRpdmVzLyR7cHJpbWl0aXZlLmluZGV4fWAsIGAke25hbWV9X3ByaW1pdGl2ZSR7cHJpbWl0aXZlLmluZGV4fWAsIG5vZGUsIG1lc2gsIHByaW1pdGl2ZSwgKGJhYnlsb25NZXNoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhYnlsb25NZXNoLnBhcmVudCA9IG5vZGUuX2JhYnlsb25UcmFuc2Zvcm1Ob2RlITtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5fcHJpbWl0aXZlQmFieWxvbk1lc2hlcyEucHVzaChiYWJ5bG9uTWVzaCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFzc2lnbihub2RlLl9iYWJ5bG9uVHJhbnNmb3JtTm9kZSEpO1xyXG5cclxuICAgICAgICB0aGlzLmxvZ0Nsb3NlKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBub2RlLl9iYWJ5bG9uVHJhbnNmb3JtTm9kZSE7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWwgRGVmaW5lIHRoaXMgbWV0aG9kIHRvIG1vZGlmeSB0aGUgZGVmYXVsdCBiZWhhdmlvciB3aGVuIGxvYWRpbmcgZGF0YSBmb3IgbWVzaCBwcmltaXRpdmVzLlxyXG4gICAgICogQHBhcmFtIGNvbnRleHQgVGhlIGNvbnRleHQgd2hlbiBsb2FkaW5nIHRoZSBhc3NldFxyXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIG1lc2ggbmFtZSB3aGVuIGxvYWRpbmcgdGhlIGFzc2V0XHJcbiAgICAgKiBAcGFyYW0gbm9kZSBUaGUgZ2xURiBub2RlIHdoZW4gbG9hZGluZyB0aGUgYXNzZXRcclxuICAgICAqIEBwYXJhbSBtZXNoIFRoZSBnbFRGIG1lc2ggd2hlbiBsb2FkaW5nIHRoZSBhc3NldFxyXG4gICAgICogQHBhcmFtIHByaW1pdGl2ZSBUaGUgZ2xURiBtZXNoIHByaW1pdGl2ZSBwcm9wZXJ0eVxyXG4gICAgICogQHBhcmFtIGFzc2lnbiBBIGZ1bmN0aW9uIGNhbGxlZCBzeW5jaHJvbm91c2x5IGFmdGVyIHBhcnNpbmcgdGhlIGdsVEYgcHJvcGVydGllc1xyXG4gICAgICogQHJldHVybnMgQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgbG9hZGVkIG1lc2ggd2hlbiB0aGUgbG9hZCBpcyBjb21wbGV0ZSBvciBudWxsIGlmIG5vdCBoYW5kbGVkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfbG9hZE1lc2hQcmltaXRpdmVBc3luYyhcclxuICAgICAgICBjb250ZXh0OiBzdHJpbmcsXHJcbiAgICAgICAgbmFtZTogc3RyaW5nLFxyXG4gICAgICAgIG5vZGU6IElOb2RlLFxyXG4gICAgICAgIG1lc2g6IElNZXNoLFxyXG4gICAgICAgIHByaW1pdGl2ZTogSU1lc2hQcmltaXRpdmUsXHJcbiAgICAgICAgYXNzaWduOiAoYmFieWxvbk1lc2g6IEFic3RyYWN0TWVzaCkgPT4gdm9pZFxyXG4gICAgKTogUHJvbWlzZTxBYnN0cmFjdE1lc2g+IHtcclxuICAgICAgICBjb25zdCBleHRlbnNpb25Qcm9taXNlID0gdGhpcy5fZXh0ZW5zaW9uc0xvYWRNZXNoUHJpbWl0aXZlQXN5bmMoY29udGV4dCwgbmFtZSwgbm9kZSwgbWVzaCwgcHJpbWl0aXZlLCBhc3NpZ24pO1xyXG4gICAgICAgIGlmIChleHRlbnNpb25Qcm9taXNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBleHRlbnNpb25Qcm9taXNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5sb2dPcGVuKGAke2NvbnRleHR9YCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHNob3VsZEluc3RhbmNlID0gdGhpcy5fZGlzYWJsZUluc3RhbmNlZE1lc2ggPT09IDAgJiYgdGhpcy5fcGFyZW50LmNyZWF0ZUluc3RhbmNlcyAmJiBub2RlLnNraW4gPT0gdW5kZWZpbmVkICYmICFtZXNoLnByaW1pdGl2ZXNbMF0udGFyZ2V0cztcclxuXHJcbiAgICAgICAgbGV0IGJhYnlsb25BYnN0cmFjdE1lc2g6IEFic3RyYWN0TWVzaDtcclxuICAgICAgICBsZXQgcHJvbWlzZTogUHJvbWlzZTxhbnk+O1xyXG5cclxuICAgICAgICBpZiAoc2hvdWxkSW5zdGFuY2UgJiYgcHJpbWl0aXZlLl9pbnN0YW5jZURhdGEpIHtcclxuICAgICAgICAgICAgdGhpcy5fYmFieWxvblNjZW5lLl9ibG9ja0VudGl0eUNvbGxlY3Rpb24gPSAhIXRoaXMuX2Fzc2V0Q29udGFpbmVyO1xyXG4gICAgICAgICAgICBiYWJ5bG9uQWJzdHJhY3RNZXNoID0gcHJpbWl0aXZlLl9pbnN0YW5jZURhdGEuYmFieWxvblNvdXJjZU1lc2guY3JlYXRlSW5zdGFuY2UobmFtZSkgYXMgSW5zdGFuY2VkTWVzaDtcclxuICAgICAgICAgICAgYmFieWxvbkFic3RyYWN0TWVzaC5fcGFyZW50Q29udGFpbmVyID0gdGhpcy5fYXNzZXRDb250YWluZXI7XHJcbiAgICAgICAgICAgIHRoaXMuX2JhYnlsb25TY2VuZS5fYmxvY2tFbnRpdHlDb2xsZWN0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHByb21pc2UgPSBwcmltaXRpdmUuX2luc3RhbmNlRGF0YS5wcm9taXNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb21pc2VzID0gbmV3IEFycmF5PFByb21pc2U8YW55Pj4oKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2JhYnlsb25TY2VuZS5fYmxvY2tFbnRpdHlDb2xsZWN0aW9uID0gISF0aGlzLl9hc3NldENvbnRhaW5lcjtcclxuICAgICAgICAgICAgY29uc3QgYmFieWxvbk1lc2ggPSBuZXcgTWVzaChuYW1lLCB0aGlzLl9iYWJ5bG9uU2NlbmUpO1xyXG4gICAgICAgICAgICBiYWJ5bG9uTWVzaC5fcGFyZW50Q29udGFpbmVyID0gdGhpcy5fYXNzZXRDb250YWluZXI7XHJcbiAgICAgICAgICAgIHRoaXMuX2JhYnlsb25TY2VuZS5fYmxvY2tFbnRpdHlDb2xsZWN0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJhYnlsb25NZXNoLm92ZXJyaWRlTWF0ZXJpYWxTaWRlT3JpZW50YXRpb24gPSB0aGlzLl9iYWJ5bG9uU2NlbmUudXNlUmlnaHRIYW5kZWRTeXN0ZW0gPyBNYXRlcmlhbC5Db3VudGVyQ2xvY2tXaXNlU2lkZU9yaWVudGF0aW9uIDogTWF0ZXJpYWwuQ2xvY2tXaXNlU2lkZU9yaWVudGF0aW9uO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fY3JlYXRlTW9ycGhUYXJnZXRzKGNvbnRleHQsIG5vZGUsIG1lc2gsIHByaW1pdGl2ZSwgYmFieWxvbk1lc2gpO1xyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9hZFZlcnRleERhdGFBc3luYyhjb250ZXh0LCBwcmltaXRpdmUsIGJhYnlsb25NZXNoKS50aGVuKChiYWJ5bG9uR2VvbWV0cnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fbG9hZE1vcnBoVGFyZ2V0c0FzeW5jKGNvbnRleHQsIHByaW1pdGl2ZSwgYmFieWxvbk1lc2gsIGJhYnlsb25HZW9tZXRyeSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9kaXNwb3NlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9iYWJ5bG9uU2NlbmUuX2Jsb2NrRW50aXR5Q29sbGVjdGlvbiA9ICEhdGhpcy5fYXNzZXRDb250YWluZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhYnlsb25HZW9tZXRyeS5hcHBseVRvTWVzaChiYWJ5bG9uTWVzaCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhYnlsb25HZW9tZXRyeS5fcGFyZW50Q29udGFpbmVyID0gdGhpcy5fYXNzZXRDb250YWluZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2JhYnlsb25TY2VuZS5fYmxvY2tFbnRpdHlDb2xsZWN0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYmFieWxvbkRyYXdNb2RlID0gR0xURkxvYWRlci5fR2V0RHJhd01vZGUoY29udGV4dCwgcHJpbWl0aXZlLm1vZGUpO1xyXG4gICAgICAgICAgICBpZiAocHJpbWl0aXZlLm1hdGVyaWFsID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGJhYnlsb25NYXRlcmlhbCA9IHRoaXMuX2RlZmF1bHRCYWJ5bG9uTWF0ZXJpYWxEYXRhW2JhYnlsb25EcmF3TW9kZV07XHJcbiAgICAgICAgICAgICAgICBpZiAoIWJhYnlsb25NYXRlcmlhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhYnlsb25NYXRlcmlhbCA9IHRoaXMuX2NyZWF0ZURlZmF1bHRNYXRlcmlhbChcIl9fR0xURkxvYWRlci5fZGVmYXVsdFwiLCBiYWJ5bG9uRHJhd01vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BhcmVudC5vbk1hdGVyaWFsTG9hZGVkT2JzZXJ2YWJsZS5ub3RpZnlPYnNlcnZlcnMoYmFieWxvbk1hdGVyaWFsKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kZWZhdWx0QmFieWxvbk1hdGVyaWFsRGF0YVtiYWJ5bG9uRHJhd01vZGVdID0gYmFieWxvbk1hdGVyaWFsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYmFieWxvbk1lc2gubWF0ZXJpYWwgPSBiYWJ5bG9uTWF0ZXJpYWw7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMucGFyZW50LnNraXBNYXRlcmlhbHMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsID0gQXJyYXlJdGVtLkdldChgJHtjb250ZXh0fS9tYXRlcmlhbGAsIHRoaXMuX2dsdGYubWF0ZXJpYWxzLCBwcmltaXRpdmUubWF0ZXJpYWwpO1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2FkTWF0ZXJpYWxBc3luYyhgL21hdGVyaWFscy8ke21hdGVyaWFsLmluZGV4fWAsIG1hdGVyaWFsLCBiYWJ5bG9uTWVzaCwgYmFieWxvbkRyYXdNb2RlLCAoYmFieWxvbk1hdGVyaWFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhYnlsb25NZXNoLm1hdGVyaWFsID0gYmFieWxvbk1hdGVyaWFsO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwcm9taXNlID0gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNob3VsZEluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICBwcmltaXRpdmUuX2luc3RhbmNlRGF0YSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uU291cmNlTWVzaDogYmFieWxvbk1lc2gsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZTogcHJvbWlzZSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGJhYnlsb25BYnN0cmFjdE1lc2ggPSBiYWJ5bG9uTWVzaDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEdMVEZMb2FkZXIuQWRkUG9pbnRlck1ldGFkYXRhKGJhYnlsb25BYnN0cmFjdE1lc2gsIGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMuX3BhcmVudC5vbk1lc2hMb2FkZWRPYnNlcnZhYmxlLm5vdGlmeU9ic2VydmVycyhiYWJ5bG9uQWJzdHJhY3RNZXNoKTtcclxuICAgICAgICBhc3NpZ24oYmFieWxvbkFic3RyYWN0TWVzaCk7XHJcblxyXG4gICAgICAgIHRoaXMubG9nQ2xvc2UoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHByb21pc2UudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBiYWJ5bG9uQWJzdHJhY3RNZXNoO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2xvYWRWZXJ0ZXhEYXRhQXN5bmMoY29udGV4dDogc3RyaW5nLCBwcmltaXRpdmU6IElNZXNoUHJpbWl0aXZlLCBiYWJ5bG9uTWVzaDogTWVzaCk6IFByb21pc2U8R2VvbWV0cnk+IHtcclxuICAgICAgICBjb25zdCBleHRlbnNpb25Qcm9taXNlID0gdGhpcy5fZXh0ZW5zaW9uc0xvYWRWZXJ0ZXhEYXRhQXN5bmMoY29udGV4dCwgcHJpbWl0aXZlLCBiYWJ5bG9uTWVzaCk7XHJcbiAgICAgICAgaWYgKGV4dGVuc2lvblByb21pc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGV4dGVuc2lvblByb21pc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBhdHRyaWJ1dGVzID0gcHJpbWl0aXZlLmF0dHJpYnV0ZXM7XHJcbiAgICAgICAgaWYgKCFhdHRyaWJ1dGVzKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtjb250ZXh0fTogQXR0cmlidXRlcyBhcmUgbWlzc2luZ2ApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBuZXcgQXJyYXk8UHJvbWlzZTxhbnk+PigpO1xyXG5cclxuICAgICAgICBjb25zdCBiYWJ5bG9uR2VvbWV0cnkgPSBuZXcgR2VvbWV0cnkoYmFieWxvbk1lc2gubmFtZSwgdGhpcy5fYmFieWxvblNjZW5lKTtcclxuXHJcbiAgICAgICAgaWYgKHByaW1pdGl2ZS5pbmRpY2VzID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBiYWJ5bG9uTWVzaC5pc1VuSW5kZXhlZCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgYWNjZXNzb3IgPSBBcnJheUl0ZW0uR2V0KGAke2NvbnRleHR9L2luZGljZXNgLCB0aGlzLl9nbHRmLmFjY2Vzc29ycywgcHJpbWl0aXZlLmluZGljZXMpO1xyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9hZEluZGljZXNBY2Nlc3NvckFzeW5jKGAvYWNjZXNzb3JzLyR7YWNjZXNzb3IuaW5kZXh9YCwgYWNjZXNzb3IpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uR2VvbWV0cnkuc2V0SW5kaWNlcyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBsb2FkQXR0cmlidXRlID0gKG5hbWU6IHN0cmluZywga2luZDogc3RyaW5nLCBjYWxsYmFjaz86IChhY2Nlc3NvcjogSUFjY2Vzc29yKSA9PiB2b2lkKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChhdHRyaWJ1dGVzW25hbWVdID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBiYWJ5bG9uTWVzaC5fZGVsYXlJbmZvID0gYmFieWxvbk1lc2guX2RlbGF5SW5mbyB8fCBbXTtcclxuICAgICAgICAgICAgaWYgKGJhYnlsb25NZXNoLl9kZWxheUluZm8uaW5kZXhPZihraW5kKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIGJhYnlsb25NZXNoLl9kZWxheUluZm8ucHVzaChraW5kKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgYWNjZXNzb3IgPSBBcnJheUl0ZW0uR2V0KGAke2NvbnRleHR9L2F0dHJpYnV0ZXMvJHtuYW1lfWAsIHRoaXMuX2dsdGYuYWNjZXNzb3JzLCBhdHRyaWJ1dGVzW25hbWVdKTtcclxuICAgICAgICAgICAgcHJvbWlzZXMucHVzaChcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRWZXJ0ZXhBY2Nlc3NvckFzeW5jKGAvYWNjZXNzb3JzLyR7YWNjZXNzb3IuaW5kZXh9YCwgYWNjZXNzb3IsIGtpbmQpLnRoZW4oKGJhYnlsb25WZXJ0ZXhCdWZmZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYmFieWxvblZlcnRleEJ1ZmZlci5nZXRLaW5kKCkgPT09IFZlcnRleEJ1ZmZlci5Qb3NpdGlvbktpbmQgJiYgIXRoaXMucGFyZW50LmFsd2F5c0NvbXB1dGVCb3VuZGluZ0JveCAmJiAhYmFieWxvbk1lc2guc2tlbGV0b24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFjY2Vzc29yLm1pbiAmJiBhY2Nlc3Nvci5tYXgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1pbiA9IFRtcFZlY3RvcnMuVmVjdG9yM1swXS5jb3B5RnJvbUZsb2F0cyguLi4oYWNjZXNzb3IubWluIGFzIFtudW1iZXIsIG51bWJlciwgbnVtYmVyXSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF4ID0gVG1wVmVjdG9ycy5WZWN0b3IzWzFdLmNvcHlGcm9tRmxvYXRzKC4uLihhY2Nlc3Nvci5tYXggYXMgW251bWJlciwgbnVtYmVyLCBudW1iZXJdKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWNjZXNzb3Iubm9ybWFsaXplZCAmJiBhY2Nlc3Nvci5jb21wb25lbnRUeXBlICE9PSBBY2Nlc3NvckNvbXBvbmVudFR5cGUuRkxPQVQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGl2aWRlciA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChhY2Nlc3Nvci5jb21wb25lbnRUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgQWNjZXNzb3JDb21wb25lbnRUeXBlLkJZVEU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXZpZGVyID0gMTI3LjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBBY2Nlc3NvckNvbXBvbmVudFR5cGUuVU5TSUdORURfQllURTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpdmlkZXIgPSAyNTUuMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEFjY2Vzc29yQ29tcG9uZW50VHlwZS5TSE9SVDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpdmlkZXIgPSAzMjc2Ny4wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgQWNjZXNzb3JDb21wb25lbnRUeXBlLlVOU0lHTkVEX1NIT1JUOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGl2aWRlciA9IDY1NTM1LjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb25lT3ZlckRpdmlkZXIgPSAxIC8gZGl2aWRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4uc2NhbGVJblBsYWNlKG9uZU92ZXJEaXZpZGVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXguc2NhbGVJblBsYWNlKG9uZU92ZXJEaXZpZGVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhYnlsb25HZW9tZXRyeS5fYm91bmRpbmdJbmZvID0gbmV3IEJvdW5kaW5nSW5mbyhtaW4sIG1heCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uR2VvbWV0cnkudXNlQm91bmRpbmdJbmZvRnJvbUdlb21ldHJ5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uR2VvbWV0cnkuc2V0VmVydGljZXNCdWZmZXIoYmFieWxvblZlcnRleEJ1ZmZlciwgYWNjZXNzb3IuY291bnQpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChraW5kID09IFZlcnRleEJ1ZmZlci5NYXRyaWNlc0luZGljZXNFeHRyYUtpbmQpIHtcclxuICAgICAgICAgICAgICAgIGJhYnlsb25NZXNoLm51bUJvbmVJbmZsdWVuY2VycyA9IDg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soYWNjZXNzb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbG9hZEF0dHJpYnV0ZShcIlBPU0lUSU9OXCIsIFZlcnRleEJ1ZmZlci5Qb3NpdGlvbktpbmQpO1xyXG4gICAgICAgIGxvYWRBdHRyaWJ1dGUoXCJOT1JNQUxcIiwgVmVydGV4QnVmZmVyLk5vcm1hbEtpbmQpO1xyXG4gICAgICAgIGxvYWRBdHRyaWJ1dGUoXCJUQU5HRU5UXCIsIFZlcnRleEJ1ZmZlci5UYW5nZW50S2luZCk7XHJcbiAgICAgICAgbG9hZEF0dHJpYnV0ZShcIlRFWENPT1JEXzBcIiwgVmVydGV4QnVmZmVyLlVWS2luZCk7XHJcbiAgICAgICAgbG9hZEF0dHJpYnV0ZShcIlRFWENPT1JEXzFcIiwgVmVydGV4QnVmZmVyLlVWMktpbmQpO1xyXG4gICAgICAgIGxvYWRBdHRyaWJ1dGUoXCJURVhDT09SRF8yXCIsIFZlcnRleEJ1ZmZlci5VVjNLaW5kKTtcclxuICAgICAgICBsb2FkQXR0cmlidXRlKFwiVEVYQ09PUkRfM1wiLCBWZXJ0ZXhCdWZmZXIuVVY0S2luZCk7XHJcbiAgICAgICAgbG9hZEF0dHJpYnV0ZShcIlRFWENPT1JEXzRcIiwgVmVydGV4QnVmZmVyLlVWNUtpbmQpO1xyXG4gICAgICAgIGxvYWRBdHRyaWJ1dGUoXCJURVhDT09SRF81XCIsIFZlcnRleEJ1ZmZlci5VVjZLaW5kKTtcclxuICAgICAgICBsb2FkQXR0cmlidXRlKFwiSk9JTlRTXzBcIiwgVmVydGV4QnVmZmVyLk1hdHJpY2VzSW5kaWNlc0tpbmQpO1xyXG4gICAgICAgIGxvYWRBdHRyaWJ1dGUoXCJXRUlHSFRTXzBcIiwgVmVydGV4QnVmZmVyLk1hdHJpY2VzV2VpZ2h0c0tpbmQpO1xyXG4gICAgICAgIGxvYWRBdHRyaWJ1dGUoXCJKT0lOVFNfMVwiLCBWZXJ0ZXhCdWZmZXIuTWF0cmljZXNJbmRpY2VzRXh0cmFLaW5kKTtcclxuICAgICAgICBsb2FkQXR0cmlidXRlKFwiV0VJR0hUU18xXCIsIFZlcnRleEJ1ZmZlci5NYXRyaWNlc1dlaWdodHNFeHRyYUtpbmQpO1xyXG4gICAgICAgIGxvYWRBdHRyaWJ1dGUoXCJDT0xPUl8wXCIsIFZlcnRleEJ1ZmZlci5Db2xvcktpbmQsIChhY2Nlc3NvcikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYWNjZXNzb3IudHlwZSA9PT0gQWNjZXNzb3JUeXBlLlZFQzQpIHtcclxuICAgICAgICAgICAgICAgIGJhYnlsb25NZXNoLmhhc1ZlcnRleEFscGhhID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYmFieWxvbkdlb21ldHJ5O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NyZWF0ZU1vcnBoVGFyZ2V0cyhjb250ZXh0OiBzdHJpbmcsIG5vZGU6IElOb2RlLCBtZXNoOiBJTWVzaCwgcHJpbWl0aXZlOiBJTWVzaFByaW1pdGl2ZSwgYmFieWxvbk1lc2g6IE1lc2gpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXByaW1pdGl2ZS50YXJnZXRzKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChub2RlLl9udW1Nb3JwaFRhcmdldHMgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIG5vZGUuX251bU1vcnBoVGFyZ2V0cyA9IHByaW1pdGl2ZS50YXJnZXRzLmxlbmd0aDtcclxuICAgICAgICB9IGVsc2UgaWYgKHByaW1pdGl2ZS50YXJnZXRzLmxlbmd0aCAhPT0gbm9kZS5fbnVtTW9ycGhUYXJnZXRzKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtjb250ZXh0fTogUHJpbWl0aXZlcyBkbyBub3QgaGF2ZSB0aGUgc2FtZSBudW1iZXIgb2YgdGFyZ2V0c2ApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdGFyZ2V0TmFtZXMgPSBtZXNoLmV4dHJhcyA/IG1lc2guZXh0cmFzLnRhcmdldE5hbWVzIDogbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5fYmFieWxvblNjZW5lLl9ibG9ja0VudGl0eUNvbGxlY3Rpb24gPSAhIXRoaXMuX2Fzc2V0Q29udGFpbmVyO1xyXG4gICAgICAgIGJhYnlsb25NZXNoLm1vcnBoVGFyZ2V0TWFuYWdlciA9IG5ldyBNb3JwaFRhcmdldE1hbmFnZXIodGhpcy5fYmFieWxvblNjZW5lKTtcclxuICAgICAgICBiYWJ5bG9uTWVzaC5tb3JwaFRhcmdldE1hbmFnZXIuX3BhcmVudENvbnRhaW5lciA9IHRoaXMuX2Fzc2V0Q29udGFpbmVyO1xyXG4gICAgICAgIHRoaXMuX2JhYnlsb25TY2VuZS5fYmxvY2tFbnRpdHlDb2xsZWN0aW9uID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGJhYnlsb25NZXNoLm1vcnBoVGFyZ2V0TWFuYWdlci5hcmVVcGRhdGVzRnJvemVuID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHByaW1pdGl2ZS50YXJnZXRzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBjb25zdCB3ZWlnaHQgPSBub2RlLndlaWdodHMgPyBub2RlLndlaWdodHNbaW5kZXhdIDogbWVzaC53ZWlnaHRzID8gbWVzaC53ZWlnaHRzW2luZGV4XSA6IDA7XHJcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSB0YXJnZXROYW1lcyA/IHRhcmdldE5hbWVzW2luZGV4XSA6IGBtb3JwaFRhcmdldCR7aW5kZXh9YDtcclxuICAgICAgICAgICAgYmFieWxvbk1lc2gubW9ycGhUYXJnZXRNYW5hZ2VyLmFkZFRhcmdldChuZXcgTW9ycGhUYXJnZXQobmFtZSwgd2VpZ2h0LCBiYWJ5bG9uTWVzaC5nZXRTY2VuZSgpKSk7XHJcbiAgICAgICAgICAgIC8vIFRPRE86IHRlbGwgdGhlIHRhcmdldCB3aGV0aGVyIGl0IGhhcyBwb3NpdGlvbnMsIG5vcm1hbHMsIHRhbmdlbnRzXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2xvYWRNb3JwaFRhcmdldHNBc3luYyhjb250ZXh0OiBzdHJpbmcsIHByaW1pdGl2ZTogSU1lc2hQcmltaXRpdmUsIGJhYnlsb25NZXNoOiBNZXNoLCBiYWJ5bG9uR2VvbWV0cnk6IEdlb21ldHJ5KTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgaWYgKCFwcmltaXRpdmUudGFyZ2V0cykge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBwcm9taXNlcyA9IG5ldyBBcnJheTxQcm9taXNlPGFueT4+KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IG1vcnBoVGFyZ2V0TWFuYWdlciA9IGJhYnlsb25NZXNoLm1vcnBoVGFyZ2V0TWFuYWdlciE7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG1vcnBoVGFyZ2V0TWFuYWdlci5udW1UYXJnZXRzOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJhYnlsb25Nb3JwaFRhcmdldCA9IG1vcnBoVGFyZ2V0TWFuYWdlci5nZXRUYXJnZXQoaW5kZXgpO1xyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMuX2xvYWRNb3JwaFRhcmdldFZlcnRleERhdGFBc3luYyhgJHtjb250ZXh0fS90YXJnZXRzLyR7aW5kZXh9YCwgYmFieWxvbkdlb21ldHJ5LCBwcmltaXRpdmUudGFyZ2V0c1tpbmRleF0sIGJhYnlsb25Nb3JwaFRhcmdldCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgbW9ycGhUYXJnZXRNYW5hZ2VyLmFyZVVwZGF0ZXNGcm96ZW4gPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9sb2FkTW9ycGhUYXJnZXRWZXJ0ZXhEYXRhQXN5bmMoY29udGV4dDogc3RyaW5nLCBiYWJ5bG9uR2VvbWV0cnk6IEdlb21ldHJ5LCBhdHRyaWJ1dGVzOiB7IFtuYW1lOiBzdHJpbmddOiBudW1iZXIgfSwgYmFieWxvbk1vcnBoVGFyZ2V0OiBNb3JwaFRhcmdldCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gbmV3IEFycmF5PFByb21pc2U8YW55Pj4oKTtcclxuXHJcbiAgICAgICAgY29uc3QgbG9hZEF0dHJpYnV0ZSA9IChhdHRyaWJ1dGU6IHN0cmluZywga2luZDogc3RyaW5nLCBzZXREYXRhOiAoYmFieWxvblZlcnRleEJ1ZmZlcjogVmVydGV4QnVmZmVyLCBkYXRhOiBGbG9hdDMyQXJyYXkpID0+IHZvaWQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZXNbYXR0cmlidXRlXSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgYmFieWxvblZlcnRleEJ1ZmZlciA9IGJhYnlsb25HZW9tZXRyeS5nZXRWZXJ0ZXhCdWZmZXIoa2luZCk7XHJcbiAgICAgICAgICAgIGlmICghYmFieWxvblZlcnRleEJ1ZmZlcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBhY2Nlc3NvciA9IEFycmF5SXRlbS5HZXQoYCR7Y29udGV4dH0vJHthdHRyaWJ1dGV9YCwgdGhpcy5fZ2x0Zi5hY2Nlc3NvcnMsIGF0dHJpYnV0ZXNbYXR0cmlidXRlXSk7XHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2FkRmxvYXRBY2Nlc3NvckFzeW5jKGAvYWNjZXNzb3JzLyR7YWNjZXNzb3IuaW5kZXh9YCwgYWNjZXNzb3IpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXREYXRhKGJhYnlsb25WZXJ0ZXhCdWZmZXIsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBsb2FkQXR0cmlidXRlKFwiUE9TSVRJT05cIiwgVmVydGV4QnVmZmVyLlBvc2l0aW9uS2luZCwgKGJhYnlsb25WZXJ0ZXhCdWZmZXIsIGRhdGEpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcG9zaXRpb25zID0gbmV3IEZsb2F0MzJBcnJheShkYXRhLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGJhYnlsb25WZXJ0ZXhCdWZmZXIuZm9yRWFjaChkYXRhLmxlbmd0aCwgKHZhbHVlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25zW2luZGV4XSA9IGRhdGFbaW5kZXhdICsgdmFsdWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgYmFieWxvbk1vcnBoVGFyZ2V0LnNldFBvc2l0aW9ucyhwb3NpdGlvbnMpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsb2FkQXR0cmlidXRlKFwiTk9STUFMXCIsIFZlcnRleEJ1ZmZlci5Ob3JtYWxLaW5kLCAoYmFieWxvblZlcnRleEJ1ZmZlciwgZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBub3JtYWxzID0gbmV3IEZsb2F0MzJBcnJheShkYXRhLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGJhYnlsb25WZXJ0ZXhCdWZmZXIuZm9yRWFjaChub3JtYWxzLmxlbmd0aCwgKHZhbHVlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbm9ybWFsc1tpbmRleF0gPSBkYXRhW2luZGV4XSArIHZhbHVlO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGJhYnlsb25Nb3JwaFRhcmdldC5zZXROb3JtYWxzKG5vcm1hbHMpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsb2FkQXR0cmlidXRlKFwiVEFOR0VOVFwiLCBWZXJ0ZXhCdWZmZXIuVGFuZ2VudEtpbmQsIChiYWJ5bG9uVmVydGV4QnVmZmVyLCBkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhbmdlbnRzID0gbmV3IEZsb2F0MzJBcnJheSgoZGF0YS5sZW5ndGggLyAzKSAqIDQpO1xyXG4gICAgICAgICAgICBsZXQgZGF0YUluZGV4ID0gMDtcclxuICAgICAgICAgICAgYmFieWxvblZlcnRleEJ1ZmZlci5mb3JFYWNoKChkYXRhLmxlbmd0aCAvIDMpICogNCwgKHZhbHVlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gVGFuZ2VudCBkYXRhIGZvciBtb3JwaCB0YXJnZXRzIGlzIHN0b3JlZCBhcyB4eXogZGVsdGEuXHJcbiAgICAgICAgICAgICAgICAvLyBUaGUgdmVydGV4RGF0YS50YW5nZW50IGlzIHN0b3JlZCBhcyB4eXp3LlxyXG4gICAgICAgICAgICAgICAgLy8gU28gd2UgbmVlZCB0byBza2lwIGV2ZXJ5IGZvdXJ0aCB2ZXJ0ZXhEYXRhLnRhbmdlbnQuXHJcbiAgICAgICAgICAgICAgICBpZiAoKGluZGV4ICsgMSkgJSA0ICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFuZ2VudHNbZGF0YUluZGV4XSA9IGRhdGFbZGF0YUluZGV4XSArIHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFJbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgYmFieWxvbk1vcnBoVGFyZ2V0LnNldFRhbmdlbnRzKHRhbmdlbnRzKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IHt9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfTG9hZFRyYW5zZm9ybShub2RlOiBJTm9kZSwgYmFieWxvbk5vZGU6IFRyYW5zZm9ybU5vZGUpOiB2b2lkIHtcclxuICAgICAgICAvLyBJZ25vcmUgdGhlIFRSUyBvZiBza2lubmVkIG5vZGVzLlxyXG4gICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAjc2tpbnMgKHNlY29uZCBpbXBsZW1lbnRhdGlvbiBub3RlKVxyXG4gICAgICAgIGlmIChub2RlLnNraW4gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBwb3NpdGlvbiA9IFZlY3RvcjMuWmVybygpO1xyXG4gICAgICAgIGxldCByb3RhdGlvbiA9IFF1YXRlcm5pb24uSWRlbnRpdHkoKTtcclxuICAgICAgICBsZXQgc2NhbGluZyA9IFZlY3RvcjMuT25lKCk7XHJcblxyXG4gICAgICAgIGlmIChub2RlLm1hdHJpeCkge1xyXG4gICAgICAgICAgICBjb25zdCBtYXRyaXggPSBNYXRyaXguRnJvbUFycmF5KG5vZGUubWF0cml4KTtcclxuICAgICAgICAgICAgbWF0cml4LmRlY29tcG9zZShzY2FsaW5nLCByb3RhdGlvbiwgcG9zaXRpb24pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChub2RlLnRyYW5zbGF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IFZlY3RvcjMuRnJvbUFycmF5KG5vZGUudHJhbnNsYXRpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChub2RlLnJvdGF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICByb3RhdGlvbiA9IFF1YXRlcm5pb24uRnJvbUFycmF5KG5vZGUucm90YXRpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChub2RlLnNjYWxlKSB7XHJcbiAgICAgICAgICAgICAgICBzY2FsaW5nID0gVmVjdG9yMy5Gcm9tQXJyYXkobm9kZS5zY2FsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJhYnlsb25Ob2RlLnBvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICAgICAgYmFieWxvbk5vZGUucm90YXRpb25RdWF0ZXJuaW9uID0gcm90YXRpb247XHJcbiAgICAgICAgYmFieWxvbk5vZGUuc2NhbGluZyA9IHNjYWxpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZFNraW5Bc3luYyhjb250ZXh0OiBzdHJpbmcsIG5vZGU6IElOb2RlLCBza2luOiBJU2tpbiwgYXNzaWduOiAoYmFieWxvblNrZWxldG9uOiBTa2VsZXRvbikgPT4gdm9pZCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGNvbnN0IGV4dGVuc2lvblByb21pc2UgPSB0aGlzLl9leHRlbnNpb25zTG9hZFNraW5Bc3luYyhjb250ZXh0LCBub2RlLCBza2luKTtcclxuICAgICAgICBpZiAoZXh0ZW5zaW9uUHJvbWlzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZXh0ZW5zaW9uUHJvbWlzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChza2luLl9kYXRhKSB7XHJcbiAgICAgICAgICAgIGFzc2lnbihza2luLl9kYXRhLmJhYnlsb25Ta2VsZXRvbik7XHJcbiAgICAgICAgICAgIHJldHVybiBza2luLl9kYXRhLnByb21pc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBza2VsZXRvbklkID0gYHNrZWxldG9uJHtza2luLmluZGV4fWA7XHJcbiAgICAgICAgdGhpcy5fYmFieWxvblNjZW5lLl9ibG9ja0VudGl0eUNvbGxlY3Rpb24gPSAhIXRoaXMuX2Fzc2V0Q29udGFpbmVyO1xyXG4gICAgICAgIGNvbnN0IGJhYnlsb25Ta2VsZXRvbiA9IG5ldyBTa2VsZXRvbihza2luLm5hbWUgfHwgc2tlbGV0b25JZCwgc2tlbGV0b25JZCwgdGhpcy5fYmFieWxvblNjZW5lKTtcclxuICAgICAgICBiYWJ5bG9uU2tlbGV0b24uX3BhcmVudENvbnRhaW5lciA9IHRoaXMuX2Fzc2V0Q29udGFpbmVyO1xyXG4gICAgICAgIHRoaXMuX2JhYnlsb25TY2VuZS5fYmxvY2tFbnRpdHlDb2xsZWN0aW9uID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuX2xvYWRCb25lcyhjb250ZXh0LCBza2luLCBiYWJ5bG9uU2tlbGV0b24pO1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLl9sb2FkU2tpbkludmVyc2VCaW5kTWF0cmljZXNEYXRhQXN5bmMoY29udGV4dCwgc2tpbikudGhlbigoaW52ZXJzZUJpbmRNYXRyaWNlc0RhdGEpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fdXBkYXRlQm9uZU1hdHJpY2VzKGJhYnlsb25Ta2VsZXRvbiwgaW52ZXJzZUJpbmRNYXRyaWNlc0RhdGEpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBza2luLl9kYXRhID0ge1xyXG4gICAgICAgICAgICBiYWJ5bG9uU2tlbGV0b246IGJhYnlsb25Ta2VsZXRvbixcclxuICAgICAgICAgICAgcHJvbWlzZTogcHJvbWlzZSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBhc3NpZ24oYmFieWxvblNrZWxldG9uKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZEJvbmVzKGNvbnRleHQ6IHN0cmluZywgc2tpbjogSVNraW4sIGJhYnlsb25Ta2VsZXRvbjogU2tlbGV0b24pOiB2b2lkIHtcclxuICAgICAgICBpZiAoc2tpbi5za2VsZXRvbiA9PSB1bmRlZmluZWQgfHwgdGhpcy5fcGFyZW50LmFsd2F5c0NvbXB1dGVTa2VsZXRvblJvb3ROb2RlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvb3ROb2RlID0gdGhpcy5fZmluZFNrZWxldG9uUm9vdE5vZGUoYCR7Y29udGV4dH0vam9pbnRzYCwgc2tpbi5qb2ludHMpO1xyXG4gICAgICAgICAgICBpZiAocm9vdE5vZGUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChza2luLnNrZWxldG9uID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBza2luLnNrZWxldG9uID0gcm9vdE5vZGUuaW5kZXg7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzUGFyZW50ID0gKGE6IElOb2RlLCBiOiBJTm9kZSk6IGJvb2xlYW4gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKDsgYi5wYXJlbnQ7IGIgPSBiLnBhcmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGIucGFyZW50ID09PSBhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBza2VsZXRvbk5vZGUgPSBBcnJheUl0ZW0uR2V0KGAke2NvbnRleHR9L3NrZWxldG9uYCwgdGhpcy5fZ2x0Zi5ub2Rlcywgc2tpbi5za2VsZXRvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNrZWxldG9uTm9kZSAhPT0gcm9vdE5vZGUgJiYgIWlzUGFyZW50KHNrZWxldG9uTm9kZSwgcm9vdE5vZGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZ2dlci5XYXJuKGAke2NvbnRleHR9L3NrZWxldG9uOiBPdmVycmlkaW5nIHdpdGggbmVhcmVzdCBjb21tb24gYW5jZXN0b3IgYXMgc2tlbGV0b24gbm9kZSBpcyBub3QgYSBjb21tb24gcm9vdGApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBza2luLnNrZWxldG9uID0gcm9vdE5vZGUuaW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgTG9nZ2VyLldhcm4oYCR7Y29udGV4dH06IEZhaWxlZCB0byBmaW5kIGNvbW1vbiByb290YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGJhYnlsb25Cb25lczogeyBbaW5kZXg6IG51bWJlcl06IEJvbmUgfSA9IHt9O1xyXG4gICAgICAgIGZvciAoY29uc3QgaW5kZXggb2Ygc2tpbi5qb2ludHMpIHtcclxuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IEFycmF5SXRlbS5HZXQoYCR7Y29udGV4dH0vam9pbnRzLyR7aW5kZXh9YCwgdGhpcy5fZ2x0Zi5ub2RlcywgaW5kZXgpO1xyXG4gICAgICAgICAgICB0aGlzLl9sb2FkQm9uZShub2RlLCBza2luLCBiYWJ5bG9uU2tlbGV0b24sIGJhYnlsb25Cb25lcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2ZpbmRTa2VsZXRvblJvb3ROb2RlKGNvbnRleHQ6IHN0cmluZywgam9pbnRzOiBBcnJheTxudW1iZXI+KTogTnVsbGFibGU8SU5vZGU+IHtcclxuICAgICAgICBpZiAoam9pbnRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHBhdGhzOiB7IFtqb2ludDogbnVtYmVyXTogQXJyYXk8SU5vZGU+IH0gPSB7fTtcclxuICAgICAgICBmb3IgKGNvbnN0IGluZGV4IG9mIGpvaW50cykge1xyXG4gICAgICAgICAgICBjb25zdCBwYXRoID0gbmV3IEFycmF5PElOb2RlPigpO1xyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IEFycmF5SXRlbS5HZXQoYCR7Y29udGV4dH0vJHtpbmRleH1gLCB0aGlzLl9nbHRmLm5vZGVzLCBpbmRleCk7XHJcbiAgICAgICAgICAgIHdoaWxlIChub2RlLmluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgcGF0aC51bnNoaWZ0KG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgbm9kZSA9IG5vZGUucGFyZW50ITtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwYXRoc1tpbmRleF0gPSBwYXRoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHJvb3ROb2RlOiBOdWxsYWJsZTxJTm9kZT4gPSBudWxsO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyA7ICsraSkge1xyXG4gICAgICAgICAgICBsZXQgcGF0aCA9IHBhdGhzW2pvaW50c1swXV07XHJcbiAgICAgICAgICAgIGlmIChpID49IHBhdGgubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcm9vdE5vZGU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBwYXRoW2ldO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA8IGpvaW50cy5sZW5ndGg7ICsraikge1xyXG4gICAgICAgICAgICAgICAgcGF0aCA9IHBhdGhzW2pvaW50c1tqXV07XHJcbiAgICAgICAgICAgICAgICBpZiAoaSA+PSBwYXRoLmxlbmd0aCB8fCBub2RlICE9PSBwYXRoW2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJvb3ROb2RlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByb290Tm9kZSA9IG5vZGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2xvYWRCb25lKG5vZGU6IElOb2RlLCBza2luOiBJU2tpbiwgYmFieWxvblNrZWxldG9uOiBTa2VsZXRvbiwgYmFieWxvbkJvbmVzOiB7IFtpbmRleDogbnVtYmVyXTogQm9uZSB9KTogQm9uZSB7XHJcbiAgICAgICAgbGV0IGJhYnlsb25Cb25lID0gYmFieWxvbkJvbmVzW25vZGUuaW5kZXhdO1xyXG4gICAgICAgIGlmIChiYWJ5bG9uQm9uZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYmFieWxvbkJvbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcGFyZW50QmFieWxvbkJvbmU6IE51bGxhYmxlPEJvbmU+ID0gbnVsbDtcclxuICAgICAgICBpZiAobm9kZS5pbmRleCAhPT0gc2tpbi5za2VsZXRvbikge1xyXG4gICAgICAgICAgICBpZiAobm9kZS5wYXJlbnQgJiYgbm9kZS5wYXJlbnQuaW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnRCYWJ5bG9uQm9uZSA9IHRoaXMuX2xvYWRCb25lKG5vZGUucGFyZW50LCBza2luLCBiYWJ5bG9uU2tlbGV0b24sIGJhYnlsb25Cb25lcyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2tpbi5za2VsZXRvbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBMb2dnZXIuV2FybihgL3NraW5zLyR7c2tpbi5pbmRleH0vc2tlbGV0b246IFNrZWxldG9uIG5vZGUgaXMgbm90IGEgY29tbW9uIHJvb3RgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYm9uZUluZGV4ID0gc2tpbi5qb2ludHMuaW5kZXhPZihub2RlLmluZGV4KTtcclxuICAgICAgICBiYWJ5bG9uQm9uZSA9IG5ldyBCb25lKG5vZGUubmFtZSB8fCBgam9pbnQke25vZGUuaW5kZXh9YCwgYmFieWxvblNrZWxldG9uLCBwYXJlbnRCYWJ5bG9uQm9uZSwgdGhpcy5fZ2V0Tm9kZU1hdHJpeChub2RlKSwgbnVsbCwgbnVsbCwgYm9uZUluZGV4KTtcclxuICAgICAgICBiYWJ5bG9uQm9uZXNbbm9kZS5pbmRleF0gPSBiYWJ5bG9uQm9uZTtcclxuXHJcbiAgICAgICAgLy8gV2FpdCB1bnRpbCB0aGUgc2NlbmUgaXMgbG9hZGVkIHRvIGVuc3VyZSB0aGUgdHJhbnNmb3JtIG5vZGVzIGFyZSBsb2FkZWQuXHJcbiAgICAgICAgdGhpcy5fcG9zdFNjZW5lTG9hZEFjdGlvbnMucHVzaCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIExpbmsgdGhlIEJhYnlsb24gYm9uZSB3aXRoIHRoZSBjb3JyZXNwb25kaW5nIEJhYnlsb24gdHJhbnNmb3JtIG5vZGUuXHJcbiAgICAgICAgICAgIC8vIEEgZ2xURiBqb2ludCBpcyBhIHBvaW50ZXIgdG8gYSBnbFRGIG5vZGUgaW4gdGhlIGdsVEYgbm9kZSBoaWVyYXJjaHkgc2ltaWxhciB0byBVbml0eTNELlxyXG4gICAgICAgICAgICBiYWJ5bG9uQm9uZS5saW5rVHJhbnNmb3JtTm9kZShub2RlLl9iYWJ5bG9uVHJhbnNmb3JtTm9kZSEpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gYmFieWxvbkJvbmU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZFNraW5JbnZlcnNlQmluZE1hdHJpY2VzRGF0YUFzeW5jKGNvbnRleHQ6IHN0cmluZywgc2tpbjogSVNraW4pOiBQcm9taXNlPE51bGxhYmxlPEZsb2F0MzJBcnJheT4+IHtcclxuICAgICAgICBpZiAoc2tpbi5pbnZlcnNlQmluZE1hdHJpY2VzID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG51bGwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYWNjZXNzb3IgPSBBcnJheUl0ZW0uR2V0KGAke2NvbnRleHR9L2ludmVyc2VCaW5kTWF0cmljZXNgLCB0aGlzLl9nbHRmLmFjY2Vzc29ycywgc2tpbi5pbnZlcnNlQmluZE1hdHJpY2VzKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbG9hZEZsb2F0QWNjZXNzb3JBc3luYyhgL2FjY2Vzc29ycy8ke2FjY2Vzc29yLmluZGV4fWAsIGFjY2Vzc29yKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF91cGRhdGVCb25lTWF0cmljZXMoYmFieWxvblNrZWxldG9uOiBTa2VsZXRvbiwgaW52ZXJzZUJpbmRNYXRyaWNlc0RhdGE6IE51bGxhYmxlPEZsb2F0MzJBcnJheT4pOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGJhYnlsb25Cb25lIG9mIGJhYnlsb25Ta2VsZXRvbi5ib25lcykge1xyXG4gICAgICAgICAgICBjb25zdCBiYXNlTWF0cml4ID0gTWF0cml4LklkZW50aXR5KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGJvbmVJbmRleCA9IGJhYnlsb25Cb25lLl9pbmRleCE7XHJcbiAgICAgICAgICAgIGlmIChpbnZlcnNlQmluZE1hdHJpY2VzRGF0YSAmJiBib25lSW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBNYXRyaXguRnJvbUFycmF5VG9SZWYoaW52ZXJzZUJpbmRNYXRyaWNlc0RhdGEsIGJvbmVJbmRleCAqIDE2LCBiYXNlTWF0cml4KTtcclxuICAgICAgICAgICAgICAgIGJhc2VNYXRyaXguaW52ZXJ0VG9SZWYoYmFzZU1hdHJpeCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGJhYnlsb25QYXJlbnRCb25lID0gYmFieWxvbkJvbmUuZ2V0UGFyZW50KCk7XHJcbiAgICAgICAgICAgIGlmIChiYWJ5bG9uUGFyZW50Qm9uZSkge1xyXG4gICAgICAgICAgICAgICAgYmFzZU1hdHJpeC5tdWx0aXBseVRvUmVmKGJhYnlsb25QYXJlbnRCb25lLmdldEFic29sdXRlSW52ZXJzZUJpbmRNYXRyaXgoKSwgYmFzZU1hdHJpeCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGJhYnlsb25Cb25lLnVwZGF0ZU1hdHJpeChiYXNlTWF0cml4LCBmYWxzZSwgZmFsc2UpO1xyXG4gICAgICAgICAgICBiYWJ5bG9uQm9uZS5fdXBkYXRlQWJzb2x1dGVCaW5kTWF0cmljZXModW5kZWZpbmVkLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2dldE5vZGVNYXRyaXgobm9kZTogSU5vZGUpOiBNYXRyaXgge1xyXG4gICAgICAgIHJldHVybiBub2RlLm1hdHJpeFxyXG4gICAgICAgICAgICA/IE1hdHJpeC5Gcm9tQXJyYXkobm9kZS5tYXRyaXgpXHJcbiAgICAgICAgICAgIDogTWF0cml4LkNvbXBvc2UoXHJcbiAgICAgICAgICAgICAgICAgIG5vZGUuc2NhbGUgPyBWZWN0b3IzLkZyb21BcnJheShub2RlLnNjYWxlKSA6IFZlY3RvcjMuT25lKCksXHJcbiAgICAgICAgICAgICAgICAgIG5vZGUucm90YXRpb24gPyBRdWF0ZXJuaW9uLkZyb21BcnJheShub2RlLnJvdGF0aW9uKSA6IFF1YXRlcm5pb24uSWRlbnRpdHkoKSxcclxuICAgICAgICAgICAgICAgICAgbm9kZS50cmFuc2xhdGlvbiA/IFZlY3RvcjMuRnJvbUFycmF5KG5vZGUudHJhbnNsYXRpb24pIDogVmVjdG9yMy5aZXJvKClcclxuICAgICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTG9hZHMgYSBnbFRGIGNhbWVyYS5cclxuICAgICAqIEBwYXJhbSBjb250ZXh0IFRoZSBjb250ZXh0IHdoZW4gbG9hZGluZyB0aGUgYXNzZXRcclxuICAgICAqIEBwYXJhbSBjYW1lcmEgVGhlIGdsVEYgY2FtZXJhIHByb3BlcnR5XHJcbiAgICAgKiBAcGFyYW0gYXNzaWduIEEgZnVuY3Rpb24gY2FsbGVkIHN5bmNocm9ub3VzbHkgYWZ0ZXIgcGFyc2luZyB0aGUgZ2xURiBwcm9wZXJ0aWVzXHJcbiAgICAgKiBAcmV0dXJucyBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBsb2FkZWQgQmFieWxvbiBjYW1lcmEgd2hlbiB0aGUgbG9hZCBpcyBjb21wbGV0ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZENhbWVyYUFzeW5jKGNvbnRleHQ6IHN0cmluZywgY2FtZXJhOiBJQ2FtZXJhLCBhc3NpZ246IChiYWJ5bG9uQ2FtZXJhOiBDYW1lcmEpID0+IHZvaWQgPSAoKSA9PiB7fSk6IFByb21pc2U8Q2FtZXJhPiB7XHJcbiAgICAgICAgY29uc3QgZXh0ZW5zaW9uUHJvbWlzZSA9IHRoaXMuX2V4dGVuc2lvbnNMb2FkQ2FtZXJhQXN5bmMoY29udGV4dCwgY2FtZXJhLCBhc3NpZ24pO1xyXG4gICAgICAgIGlmIChleHRlbnNpb25Qcm9taXNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBleHRlbnNpb25Qcm9taXNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBuZXcgQXJyYXk8UHJvbWlzZTxhbnk+PigpO1xyXG5cclxuICAgICAgICB0aGlzLmxvZ09wZW4oYCR7Y29udGV4dH0gJHtjYW1lcmEubmFtZSB8fCBcIlwifWApO1xyXG5cclxuICAgICAgICB0aGlzLl9iYWJ5bG9uU2NlbmUuX2Jsb2NrRW50aXR5Q29sbGVjdGlvbiA9ICEhdGhpcy5fYXNzZXRDb250YWluZXI7XHJcbiAgICAgICAgY29uc3QgYmFieWxvbkNhbWVyYSA9IG5ldyBGcmVlQ2FtZXJhKGNhbWVyYS5uYW1lIHx8IGBjYW1lcmEke2NhbWVyYS5pbmRleH1gLCBWZWN0b3IzLlplcm8oKSwgdGhpcy5fYmFieWxvblNjZW5lLCBmYWxzZSk7XHJcbiAgICAgICAgYmFieWxvbkNhbWVyYS5fcGFyZW50Q29udGFpbmVyID0gdGhpcy5fYXNzZXRDb250YWluZXI7XHJcbiAgICAgICAgdGhpcy5fYmFieWxvblNjZW5lLl9ibG9ja0VudGl0eUNvbGxlY3Rpb24gPSBmYWxzZTtcclxuICAgICAgICBiYWJ5bG9uQ2FtZXJhLmlnbm9yZVBhcmVudFNjYWxpbmcgPSB0cnVlO1xyXG4gICAgICAgIGNhbWVyYS5fYmFieWxvbkNhbWVyYSA9IGJhYnlsb25DYW1lcmE7XHJcblxyXG4gICAgICAgIGJhYnlsb25DYW1lcmEucm90YXRpb24gPSBuZXcgVmVjdG9yMygwLCBNYXRoLlBJLCAwKTtcclxuXHJcbiAgICAgICAgc3dpdGNoIChjYW1lcmEudHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIENhbWVyYVR5cGUuUEVSU1BFQ1RJVkU6IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBlcnNwZWN0aXZlID0gY2FtZXJhLnBlcnNwZWN0aXZlO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFwZXJzcGVjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtjb250ZXh0fTogQ2FtZXJhIHBlcnNwZWN0aXZlIHByb3BlcnRpZXMgYXJlIG1pc3NpbmdgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBiYWJ5bG9uQ2FtZXJhLmZvdiA9IHBlcnNwZWN0aXZlLnlmb3Y7XHJcbiAgICAgICAgICAgICAgICBiYWJ5bG9uQ2FtZXJhLm1pblogPSBwZXJzcGVjdGl2ZS56bmVhcjtcclxuICAgICAgICAgICAgICAgIGJhYnlsb25DYW1lcmEubWF4WiA9IHBlcnNwZWN0aXZlLnpmYXIgfHwgMDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgQ2FtZXJhVHlwZS5PUlRIT0dSQVBISUM6IHtcclxuICAgICAgICAgICAgICAgIGlmICghY2FtZXJhLm9ydGhvZ3JhcGhpYykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtjb250ZXh0fTogQ2FtZXJhIG9ydGhvZ3JhcGhpYyBwcm9wZXJ0aWVzIGFyZSBtaXNzaW5nYCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgYmFieWxvbkNhbWVyYS5tb2RlID0gQ2FtZXJhLk9SVEhPR1JBUEhJQ19DQU1FUkE7XHJcbiAgICAgICAgICAgICAgICBiYWJ5bG9uQ2FtZXJhLm9ydGhvTGVmdCA9IC1jYW1lcmEub3J0aG9ncmFwaGljLnhtYWc7XHJcbiAgICAgICAgICAgICAgICBiYWJ5bG9uQ2FtZXJhLm9ydGhvUmlnaHQgPSBjYW1lcmEub3J0aG9ncmFwaGljLnhtYWc7XHJcbiAgICAgICAgICAgICAgICBiYWJ5bG9uQ2FtZXJhLm9ydGhvQm90dG9tID0gLWNhbWVyYS5vcnRob2dyYXBoaWMueW1hZztcclxuICAgICAgICAgICAgICAgIGJhYnlsb25DYW1lcmEub3J0aG9Ub3AgPSBjYW1lcmEub3J0aG9ncmFwaGljLnltYWc7XHJcbiAgICAgICAgICAgICAgICBiYWJ5bG9uQ2FtZXJhLm1pblogPSBjYW1lcmEub3J0aG9ncmFwaGljLnpuZWFyO1xyXG4gICAgICAgICAgICAgICAgYmFieWxvbkNhbWVyYS5tYXhaID0gY2FtZXJhLm9ydGhvZ3JhcGhpYy56ZmFyO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2NvbnRleHR9OiBJbnZhbGlkIGNhbWVyYSB0eXBlICgke2NhbWVyYS50eXBlfSlgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgR0xURkxvYWRlci5BZGRQb2ludGVyTWV0YWRhdGEoYmFieWxvbkNhbWVyYSwgY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy5fcGFyZW50Lm9uQ2FtZXJhTG9hZGVkT2JzZXJ2YWJsZS5ub3RpZnlPYnNlcnZlcnMoYmFieWxvbkNhbWVyYSk7XHJcbiAgICAgICAgYXNzaWduKGJhYnlsb25DYW1lcmEpO1xyXG5cclxuICAgICAgICB0aGlzLmxvZ0Nsb3NlKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBiYWJ5bG9uQ2FtZXJhO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2xvYWRBbmltYXRpb25zQXN5bmMoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgY29uc3QgYW5pbWF0aW9ucyA9IHRoaXMuX2dsdGYuYW5pbWF0aW9ucztcclxuICAgICAgICBpZiAoIWFuaW1hdGlvbnMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBuZXcgQXJyYXk8UHJvbWlzZTx2b2lkPj4oKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFuaW1hdGlvbnMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFuaW1hdGlvbiA9IGFuaW1hdGlvbnNbaW5kZXhdO1xyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkQW5pbWF0aW9uQXN5bmMoYC9hbmltYXRpb25zLyR7YW5pbWF0aW9uLmluZGV4fWAsIGFuaW1hdGlvbikudGhlbigoYW5pbWF0aW9uR3JvdXApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBEZWxldGUgdGhlIGFuaW1hdGlvbiBncm91cCBpZiBpdCBlbmRlZCB1cCBub3QgaGF2aW5nIGFueSBhbmltYXRpb25zIGluIGl0LlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhbmltYXRpb25Hcm91cC50YXJnZXRlZEFuaW1hdGlvbnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkdyb3VwLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IHt9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIExvYWRzIGEgZ2xURiBhbmltYXRpb24uXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBUaGUgY29udGV4dCB3aGVuIGxvYWRpbmcgdGhlIGFzc2V0XHJcbiAgICAgKiBAcGFyYW0gYW5pbWF0aW9uIFRoZSBnbFRGIGFuaW1hdGlvbiBwcm9wZXJ0eVxyXG4gICAgICogQHJldHVybnMgQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgbG9hZGVkIEJhYnlsb24gYW5pbWF0aW9uIGdyb3VwIHdoZW4gdGhlIGxvYWQgaXMgY29tcGxldGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWRBbmltYXRpb25Bc3luYyhjb250ZXh0OiBzdHJpbmcsIGFuaW1hdGlvbjogSUFuaW1hdGlvbik6IFByb21pc2U8QW5pbWF0aW9uR3JvdXA+IHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gdGhpcy5fZXh0ZW5zaW9uc0xvYWRBbmltYXRpb25Bc3luYyhjb250ZXh0LCBhbmltYXRpb24pO1xyXG4gICAgICAgIGlmIChwcm9taXNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fYmFieWxvblNjZW5lLl9ibG9ja0VudGl0eUNvbGxlY3Rpb24gPSAhIXRoaXMuX2Fzc2V0Q29udGFpbmVyO1xyXG4gICAgICAgIGNvbnN0IGJhYnlsb25BbmltYXRpb25Hcm91cCA9IG5ldyBBbmltYXRpb25Hcm91cChhbmltYXRpb24ubmFtZSB8fCBgYW5pbWF0aW9uJHthbmltYXRpb24uaW5kZXh9YCwgdGhpcy5fYmFieWxvblNjZW5lKTtcclxuICAgICAgICBiYWJ5bG9uQW5pbWF0aW9uR3JvdXAuX3BhcmVudENvbnRhaW5lciA9IHRoaXMuX2Fzc2V0Q29udGFpbmVyO1xyXG4gICAgICAgIHRoaXMuX2JhYnlsb25TY2VuZS5fYmxvY2tFbnRpdHlDb2xsZWN0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgYW5pbWF0aW9uLl9iYWJ5bG9uQW5pbWF0aW9uR3JvdXAgPSBiYWJ5bG9uQW5pbWF0aW9uR3JvdXA7XHJcblxyXG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gbmV3IEFycmF5PFByb21pc2U8YW55Pj4oKTtcclxuXHJcbiAgICAgICAgQXJyYXlJdGVtLkFzc2lnbihhbmltYXRpb24uY2hhbm5lbHMpO1xyXG4gICAgICAgIEFycmF5SXRlbS5Bc3NpZ24oYW5pbWF0aW9uLnNhbXBsZXJzKTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBjaGFubmVsIG9mIGFuaW1hdGlvbi5jaGFubmVscykge1xyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9hZEFuaW1hdGlvbkNoYW5uZWxBc3luYyhgJHtjb250ZXh0fS9jaGFubmVscy8ke2NoYW5uZWwuaW5kZXh9YCwgY29udGV4dCwgYW5pbWF0aW9uLCBjaGFubmVsLCAoYmFieWxvblRhcmdldCwgYmFieWxvbkFuaW1hdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhYnlsb25UYXJnZXQuYW5pbWF0aW9ucyA9IGJhYnlsb25UYXJnZXQuYW5pbWF0aW9ucyB8fCBbXTtcclxuICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uVGFyZ2V0LmFuaW1hdGlvbnMucHVzaChiYWJ5bG9uQW5pbWF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uQW5pbWF0aW9uR3JvdXAuYWRkVGFyZ2V0ZWRBbmltYXRpb24oYmFieWxvbkFuaW1hdGlvbiwgYmFieWxvblRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgYmFieWxvbkFuaW1hdGlvbkdyb3VwLm5vcm1hbGl6ZSgwKTtcclxuICAgICAgICAgICAgcmV0dXJuIGJhYnlsb25BbmltYXRpb25Hcm91cDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIExvYWRzIGEgZ2xURiBhbmltYXRpb24gY2hhbm5lbC5cclxuICAgICAqIEBwYXJhbSBjb250ZXh0IFRoZSBjb250ZXh0IHdoZW4gbG9hZGluZyB0aGUgYXNzZXRcclxuICAgICAqIEBwYXJhbSBhbmltYXRpb25Db250ZXh0IFRoZSBjb250ZXh0IG9mIHRoZSBhbmltYXRpb24gd2hlbiBsb2FkaW5nIHRoZSBhc3NldFxyXG4gICAgICogQHBhcmFtIGFuaW1hdGlvbiBUaGUgZ2xURiBhbmltYXRpb24gcHJvcGVydHlcclxuICAgICAqIEBwYXJhbSBjaGFubmVsIFRoZSBnbFRGIGFuaW1hdGlvbiBjaGFubmVsIHByb3BlcnR5XHJcbiAgICAgKiBAcGFyYW0gb25Mb2FkIENhbGxlZCBmb3IgZWFjaCBhbmltYXRpb24gbG9hZGVkXHJcbiAgICAgKiBAcmV0dXJucyBBIHZvaWQgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIGxvYWQgaXMgY29tcGxldGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIF9sb2FkQW5pbWF0aW9uQ2hhbm5lbEFzeW5jKFxyXG4gICAgICAgIGNvbnRleHQ6IHN0cmluZyxcclxuICAgICAgICBhbmltYXRpb25Db250ZXh0OiBzdHJpbmcsXHJcbiAgICAgICAgYW5pbWF0aW9uOiBJQW5pbWF0aW9uLFxyXG4gICAgICAgIGNoYW5uZWw6IElBbmltYXRpb25DaGFubmVsLFxyXG4gICAgICAgIG9uTG9hZDogKGJhYnlsb25BbmltYXRhYmxlOiBJQW5pbWF0YWJsZSwgYmFieWxvbkFuaW1hdGlvbjogQW5pbWF0aW9uKSA9PiB2b2lkXHJcbiAgICApOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gdGhpcy5fZXh0ZW5zaW9uc0xvYWRBbmltYXRpb25DaGFubmVsQXN5bmMoY29udGV4dCwgYW5pbWF0aW9uQ29udGV4dCwgYW5pbWF0aW9uLCBjaGFubmVsLCBvbkxvYWQpO1xyXG4gICAgICAgIGlmIChwcm9taXNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNoYW5uZWwudGFyZ2V0Lm5vZGUgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHRhcmdldE5vZGUgPSBBcnJheUl0ZW0uR2V0KGAke2NvbnRleHR9L3RhcmdldC9ub2RlYCwgdGhpcy5fZ2x0Zi5ub2RlcywgY2hhbm5lbC50YXJnZXQubm9kZSk7XHJcblxyXG4gICAgICAgIC8vIElnbm9yZSBhbmltYXRpb25zIHRoYXQgaGF2ZSBubyBhbmltYXRpb24gdGFyZ2V0cy5cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIChjaGFubmVsLnRhcmdldC5wYXRoID09PSBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aC5XRUlHSFRTICYmICF0YXJnZXROb2RlLl9udW1Nb3JwaFRhcmdldHMpIHx8XHJcbiAgICAgICAgICAgIChjaGFubmVsLnRhcmdldC5wYXRoICE9PSBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aC5XRUlHSFRTICYmICF0YXJnZXROb2RlLl9iYWJ5bG9uVHJhbnNmb3JtTm9kZSlcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHByb3BlcnRpZXM6IEFycmF5PEFuaW1hdGlvblByb3BlcnR5SW5mbz47XHJcbiAgICAgICAgc3dpdGNoIChjaGFubmVsLnRhcmdldC5wYXRoKSB7XHJcbiAgICAgICAgICAgIGNhc2UgQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGguVFJBTlNMQVRJT046IHtcclxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXMgPSBub2RlQW5pbWF0aW9uRGF0YS50cmFuc2xhdGlvbjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGguUk9UQVRJT046IHtcclxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXMgPSBub2RlQW5pbWF0aW9uRGF0YS5yb3RhdGlvbjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGguU0NBTEU6IHtcclxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXMgPSBub2RlQW5pbWF0aW9uRGF0YS5zY2FsZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGguV0VJR0hUUzoge1xyXG4gICAgICAgICAgICAgICAgcHJvcGVydGllcyA9IG5vZGVBbmltYXRpb25EYXRhLndlaWdodHM7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7Y29udGV4dH0vdGFyZ2V0L3BhdGg6IEludmFsaWQgdmFsdWUgKCR7Y2hhbm5lbC50YXJnZXQucGF0aH0pYCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHRhcmdldEluZm86IElBbmltYXRpb25UYXJnZXRJbmZvID0ge1xyXG4gICAgICAgICAgICB0YXJnZXQ6IHRhcmdldE5vZGUsXHJcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IHByb3BlcnRpZXMsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRBbmltYXRpb25DaGFubmVsRnJvbVRhcmdldEluZm9Bc3luYyhjb250ZXh0LCBhbmltYXRpb25Db250ZXh0LCBhbmltYXRpb24sIGNoYW5uZWwsIHRhcmdldEluZm8sIG9uTG9hZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBMb2FkcyBhIGdsVEYgYW5pbWF0aW9uIGNoYW5uZWwuXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBUaGUgY29udGV4dCB3aGVuIGxvYWRpbmcgdGhlIGFzc2V0XHJcbiAgICAgKiBAcGFyYW0gYW5pbWF0aW9uQ29udGV4dCBUaGUgY29udGV4dCBvZiB0aGUgYW5pbWF0aW9uIHdoZW4gbG9hZGluZyB0aGUgYXNzZXRcclxuICAgICAqIEBwYXJhbSBhbmltYXRpb24gVGhlIGdsVEYgYW5pbWF0aW9uIHByb3BlcnR5XHJcbiAgICAgKiBAcGFyYW0gY2hhbm5lbCBUaGUgZ2xURiBhbmltYXRpb24gY2hhbm5lbCBwcm9wZXJ0eVxyXG4gICAgICogQHBhcmFtIHRhcmdldEluZm8gVGhlIGdsVEYgdGFyZ2V0IGFuZCBwcm9wZXJ0aWVzXHJcbiAgICAgKiBAcGFyYW0gb25Mb2FkIENhbGxlZCBmb3IgZWFjaCBhbmltYXRpb24gbG9hZGVkXHJcbiAgICAgKiBAcmV0dXJucyBBIHZvaWQgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIGxvYWQgaXMgY29tcGxldGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIF9sb2FkQW5pbWF0aW9uQ2hhbm5lbEZyb21UYXJnZXRJbmZvQXN5bmMoXHJcbiAgICAgICAgY29udGV4dDogc3RyaW5nLFxyXG4gICAgICAgIGFuaW1hdGlvbkNvbnRleHQ6IHN0cmluZyxcclxuICAgICAgICBhbmltYXRpb246IElBbmltYXRpb24sXHJcbiAgICAgICAgY2hhbm5lbDogSUFuaW1hdGlvbkNoYW5uZWwsXHJcbiAgICAgICAgdGFyZ2V0SW5mbzogSUFuaW1hdGlvblRhcmdldEluZm8sXHJcbiAgICAgICAgb25Mb2FkOiAoYmFieWxvbkFuaW1hdGFibGU6IElBbmltYXRhYmxlLCBiYWJ5bG9uQW5pbWF0aW9uOiBBbmltYXRpb24pID0+IHZvaWRcclxuICAgICk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGNvbnN0IGZwcyA9IHRoaXMucGFyZW50LnRhcmdldEZwcztcclxuICAgICAgICBjb25zdCBpbnZmcHMgPSAxIC8gZnBzO1xyXG5cclxuICAgICAgICBjb25zdCBzYW1wbGVyID0gQXJyYXlJdGVtLkdldChgJHtjb250ZXh0fS9zYW1wbGVyYCwgYW5pbWF0aW9uLnNhbXBsZXJzLCBjaGFubmVsLnNhbXBsZXIpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9sb2FkQW5pbWF0aW9uU2FtcGxlckFzeW5jKGAke2FuaW1hdGlvbkNvbnRleHR9L3NhbXBsZXJzLyR7Y2hhbm5lbC5zYW1wbGVyfWAsIHNhbXBsZXIpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgbGV0IG51bUFuaW1hdGlvbnMgPSAwO1xyXG5cclxuICAgICAgICAgICAgLy8gRXh0cmFjdCB0aGUgY29ycmVzcG9uZGluZyB2YWx1ZXMgZnJvbSB0aGUgcmVhZCB2YWx1ZS5cclxuICAgICAgICAgICAgLy8gR0xURiB2YWx1ZXMgbWF5IGJlIGRpc3BhdGNoZWQgdG8gc2V2ZXJhbCBCYWJ5bG9uIHByb3BlcnRpZXMuXHJcbiAgICAgICAgICAgIC8vIEZvciBleGFtcGxlLCBiYXNlQ29sb3JGYWN0b3IgW2ByYCwgYGdgLCBgYmAsIGBhYF0gaXMgZGlzcGF0Y2hlZCB0b1xyXG4gICAgICAgICAgICAvLyAtIGFsYmVkb0NvbG9yIGFzIENvbG9yMyhgcmAsIGBnYCwgYGJgKVxyXG4gICAgICAgICAgICAvLyAtIGFscGhhIGFzIGBhYFxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHRhcmdldEluZm8ucHJvcGVydGllcykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RyaWRlID0gcHJvcGVydHkuZ2V0U3RyaWRlKHRhcmdldEluZm8udGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gZGF0YS5pbnB1dDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG91dHB1dCA9IGRhdGEub3V0cHV0O1xyXG4gICAgICAgICAgICAgICAgY29uc3Qga2V5cyA9IG5ldyBBcnJheTxJQW5pbWF0aW9uS2V5PihpbnB1dC5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG91dHB1dE9mZnNldCA9IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChkYXRhLmludGVycG9sYXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIEFuaW1hdGlvblNhbXBsZXJJbnRlcnBvbGF0aW9uLlNURVA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGlucHV0Lmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBwcm9wZXJ0eS5nZXRWYWx1ZSh0YXJnZXRJbmZvLnRhcmdldCwgb3V0cHV0LCBvdXRwdXRPZmZzZXQsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0T2Zmc2V0ICs9IHN0cmlkZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzW2luZGV4XSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFtZTogaW5wdXRbaW5kZXhdICogZnBzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnBvbGF0aW9uOiBBbmltYXRpb25LZXlJbnRlcnBvbGF0aW9uLlNURVAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIEFuaW1hdGlvblNhbXBsZXJJbnRlcnBvbGF0aW9uLkNVQklDU1BMSU5FOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBpbnB1dC5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGluVGFuZ2VudCA9IHByb3BlcnR5LmdldFZhbHVlKHRhcmdldEluZm8udGFyZ2V0LCBvdXRwdXQsIG91dHB1dE9mZnNldCwgaW52ZnBzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dE9mZnNldCArPSBzdHJpZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHByb3BlcnR5LmdldFZhbHVlKHRhcmdldEluZm8udGFyZ2V0LCBvdXRwdXQsIG91dHB1dE9mZnNldCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRPZmZzZXQgKz0gc3RyaWRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3V0VGFuZ2VudCA9IHByb3BlcnR5LmdldFZhbHVlKHRhcmdldEluZm8udGFyZ2V0LCBvdXRwdXQsIG91dHB1dE9mZnNldCwgaW52ZnBzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dE9mZnNldCArPSBzdHJpZGU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5c1tpbmRleF0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWU6IGlucHV0W2luZGV4XSAqIGZwcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpblRhbmdlbnQ6IGluVGFuZ2VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0VGFuZ2VudDogb3V0VGFuZ2VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgQW5pbWF0aW9uU2FtcGxlckludGVycG9sYXRpb24uTElORUFSOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBpbnB1dC5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gcHJvcGVydHkuZ2V0VmFsdWUodGFyZ2V0SW5mby50YXJnZXQsIG91dHB1dCwgb3V0cHV0T2Zmc2V0LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dE9mZnNldCArPSBzdHJpZGU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5c1tpbmRleF0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWU6IGlucHV0W2luZGV4XSAqIGZwcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAob3V0cHV0T2Zmc2V0ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBgJHthbmltYXRpb24ubmFtZSB8fCBgYW5pbWF0aW9uJHthbmltYXRpb24uaW5kZXh9YH1fY2hhbm5lbCR7Y2hhbm5lbC5pbmRleH1fJHtudW1BbmltYXRpb25zfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkuYnVpbGRBbmltYXRpb25zKHRhcmdldEluZm8udGFyZ2V0LCBuYW1lLCBmcHMsIGtleXMsIChiYWJ5bG9uQW5pbWF0YWJsZSwgYmFieWxvbkFuaW1hdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICArK251bUFuaW1hdGlvbnM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTG9hZChiYWJ5bG9uQW5pbWF0YWJsZSwgYmFieWxvbkFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9sb2FkQW5pbWF0aW9uU2FtcGxlckFzeW5jKGNvbnRleHQ6IHN0cmluZywgc2FtcGxlcjogSUFuaW1hdGlvblNhbXBsZXIpOiBQcm9taXNlPF9JQW5pbWF0aW9uU2FtcGxlckRhdGE+IHtcclxuICAgICAgICBpZiAoc2FtcGxlci5fZGF0YSkge1xyXG4gICAgICAgICAgICByZXR1cm4gc2FtcGxlci5fZGF0YTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGludGVycG9sYXRpb24gPSBzYW1wbGVyLmludGVycG9sYXRpb24gfHwgQW5pbWF0aW9uU2FtcGxlckludGVycG9sYXRpb24uTElORUFSO1xyXG4gICAgICAgIHN3aXRjaCAoaW50ZXJwb2xhdGlvbikge1xyXG4gICAgICAgICAgICBjYXNlIEFuaW1hdGlvblNhbXBsZXJJbnRlcnBvbGF0aW9uLlNURVA6XHJcbiAgICAgICAgICAgIGNhc2UgQW5pbWF0aW9uU2FtcGxlckludGVycG9sYXRpb24uTElORUFSOlxyXG4gICAgICAgICAgICBjYXNlIEFuaW1hdGlvblNhbXBsZXJJbnRlcnBvbGF0aW9uLkNVQklDU1BMSU5FOiB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7Y29udGV4dH0vaW50ZXJwb2xhdGlvbjogSW52YWxpZCB2YWx1ZSAoJHtzYW1wbGVyLmludGVycG9sYXRpb259KWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBpbnB1dEFjY2Vzc29yID0gQXJyYXlJdGVtLkdldChgJHtjb250ZXh0fS9pbnB1dGAsIHRoaXMuX2dsdGYuYWNjZXNzb3JzLCBzYW1wbGVyLmlucHV0KTtcclxuICAgICAgICBjb25zdCBvdXRwdXRBY2Nlc3NvciA9IEFycmF5SXRlbS5HZXQoYCR7Y29udGV4dH0vb3V0cHV0YCwgdGhpcy5fZ2x0Zi5hY2Nlc3NvcnMsIHNhbXBsZXIub3V0cHV0KTtcclxuICAgICAgICBzYW1wbGVyLl9kYXRhID0gUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgICAgICB0aGlzLl9sb2FkRmxvYXRBY2Nlc3NvckFzeW5jKGAvYWNjZXNzb3JzLyR7aW5wdXRBY2Nlc3Nvci5pbmRleH1gLCBpbnB1dEFjY2Vzc29yKSxcclxuICAgICAgICAgICAgdGhpcy5fbG9hZEZsb2F0QWNjZXNzb3JBc3luYyhgL2FjY2Vzc29ycy8ke291dHB1dEFjY2Vzc29yLmluZGV4fWAsIG91dHB1dEFjY2Vzc29yKSxcclxuICAgICAgICBdKS50aGVuKChbaW5wdXREYXRhLCBvdXRwdXREYXRhXSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgaW5wdXQ6IGlucHV0RGF0YSxcclxuICAgICAgICAgICAgICAgIGludGVycG9sYXRpb246IGludGVycG9sYXRpb24sXHJcbiAgICAgICAgICAgICAgICBvdXRwdXQ6IG91dHB1dERhdGEsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBzYW1wbGVyLl9kYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTG9hZHMgYSBnbFRGIGJ1ZmZlci5cclxuICAgICAqIEBwYXJhbSBjb250ZXh0IFRoZSBjb250ZXh0IHdoZW4gbG9hZGluZyB0aGUgYXNzZXRcclxuICAgICAqIEBwYXJhbSBidWZmZXIgVGhlIGdsVEYgYnVmZmVyIHByb3BlcnR5XHJcbiAgICAgKiBAcGFyYW0gYnl0ZU9mZnNldCBUaGUgYnl0ZSBvZmZzZXQgdG8gdXNlXHJcbiAgICAgKiBAcGFyYW0gYnl0ZUxlbmd0aCBUaGUgYnl0ZSBsZW5ndGggdG8gdXNlXHJcbiAgICAgKiBAcmV0dXJucyBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBsb2FkZWQgZGF0YSB3aGVuIHRoZSBsb2FkIGlzIGNvbXBsZXRlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkQnVmZmVyQXN5bmMoY29udGV4dDogc3RyaW5nLCBidWZmZXI6IElCdWZmZXIsIGJ5dGVPZmZzZXQ6IG51bWJlciwgYnl0ZUxlbmd0aDogbnVtYmVyKTogUHJvbWlzZTxBcnJheUJ1ZmZlclZpZXc+IHtcclxuICAgICAgICBjb25zdCBleHRlbnNpb25Qcm9taXNlID0gdGhpcy5fZXh0ZW5zaW9uc0xvYWRCdWZmZXJBc3luYyhjb250ZXh0LCBidWZmZXIsIGJ5dGVPZmZzZXQsIGJ5dGVMZW5ndGgpO1xyXG4gICAgICAgIGlmIChleHRlbnNpb25Qcm9taXNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBleHRlbnNpb25Qcm9taXNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFidWZmZXIuX2RhdGEpIHtcclxuICAgICAgICAgICAgaWYgKGJ1ZmZlci51cmkpIHtcclxuICAgICAgICAgICAgICAgIGJ1ZmZlci5fZGF0YSA9IHRoaXMubG9hZFVyaUFzeW5jKGAke2NvbnRleHR9L3VyaWAsIGJ1ZmZlciwgYnVmZmVyLnVyaSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX2Jpbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtjb250ZXh0fTogVXJpIGlzIG1pc3Npbmcgb3IgdGhlIGJpbmFyeSBnbFRGIGlzIG1pc3NpbmcgaXRzIGJpbmFyeSBjaHVua2ApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGJ1ZmZlci5fZGF0YSA9IHRoaXMuX2Jpbi5yZWFkQXN5bmMoMCwgYnVmZmVyLmJ5dGVMZW5ndGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYnVmZmVyLl9kYXRhLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShkYXRhLmJ1ZmZlciwgZGF0YS5ieXRlT2Zmc2V0ICsgYnl0ZU9mZnNldCwgYnl0ZUxlbmd0aCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtjb250ZXh0fTogJHtlLm1lc3NhZ2V9YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIExvYWRzIGEgZ2xURiBidWZmZXIgdmlldy5cclxuICAgICAqIEBwYXJhbSBjb250ZXh0IFRoZSBjb250ZXh0IHdoZW4gbG9hZGluZyB0aGUgYXNzZXRcclxuICAgICAqIEBwYXJhbSBidWZmZXJWaWV3IFRoZSBnbFRGIGJ1ZmZlciB2aWV3IHByb3BlcnR5XHJcbiAgICAgKiBAcmV0dXJucyBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBsb2FkZWQgZGF0YSB3aGVuIHRoZSBsb2FkIGlzIGNvbXBsZXRlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkQnVmZmVyVmlld0FzeW5jKGNvbnRleHQ6IHN0cmluZywgYnVmZmVyVmlldzogSUJ1ZmZlclZpZXcpOiBQcm9taXNlPEFycmF5QnVmZmVyVmlldz4ge1xyXG4gICAgICAgIGNvbnN0IGV4dGVuc2lvblByb21pc2UgPSB0aGlzLl9leHRlbnNpb25zTG9hZEJ1ZmZlclZpZXdBc3luYyhjb250ZXh0LCBidWZmZXJWaWV3KTtcclxuICAgICAgICBpZiAoZXh0ZW5zaW9uUHJvbWlzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZXh0ZW5zaW9uUHJvbWlzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChidWZmZXJWaWV3Ll9kYXRhKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBidWZmZXJWaWV3Ll9kYXRhO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYnVmZmVyID0gQXJyYXlJdGVtLkdldChgJHtjb250ZXh0fS9idWZmZXJgLCB0aGlzLl9nbHRmLmJ1ZmZlcnMsIGJ1ZmZlclZpZXcuYnVmZmVyKTtcclxuICAgICAgICBidWZmZXJWaWV3Ll9kYXRhID0gdGhpcy5sb2FkQnVmZmVyQXN5bmMoYC9idWZmZXJzLyR7YnVmZmVyLmluZGV4fWAsIGJ1ZmZlciwgYnVmZmVyVmlldy5ieXRlT2Zmc2V0IHx8IDAsIGJ1ZmZlclZpZXcuYnl0ZUxlbmd0aCk7XHJcblxyXG4gICAgICAgIHJldHVybiBidWZmZXJWaWV3Ll9kYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2xvYWRBY2Nlc3NvckFzeW5jKGNvbnRleHQ6IHN0cmluZywgYWNjZXNzb3I6IElBY2Nlc3NvciwgY29uc3RydWN0b3I6IFR5cGVkQXJyYXlDb25zdHJ1Y3Rvcik6IFByb21pc2U8QXJyYXlCdWZmZXJWaWV3PiB7XHJcbiAgICAgICAgaWYgKGFjY2Vzc29yLl9kYXRhKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhY2Nlc3Nvci5fZGF0YTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG51bUNvbXBvbmVudHMgPSBHTFRGTG9hZGVyLl9HZXROdW1Db21wb25lbnRzKGNvbnRleHQsIGFjY2Vzc29yLnR5cGUpO1xyXG4gICAgICAgIGNvbnN0IGJ5dGVTdHJpZGUgPSBudW1Db21wb25lbnRzICogVmVydGV4QnVmZmVyLkdldFR5cGVCeXRlTGVuZ3RoKGFjY2Vzc29yLmNvbXBvbmVudFR5cGUpO1xyXG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IG51bUNvbXBvbmVudHMgKiBhY2Nlc3Nvci5jb3VudDtcclxuXHJcbiAgICAgICAgaWYgKGFjY2Vzc29yLmJ1ZmZlclZpZXcgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGFjY2Vzc29yLl9kYXRhID0gUHJvbWlzZS5yZXNvbHZlKG5ldyBjb25zdHJ1Y3RvcihsZW5ndGgpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBidWZmZXJWaWV3ID0gQXJyYXlJdGVtLkdldChgJHtjb250ZXh0fS9idWZmZXJWaWV3YCwgdGhpcy5fZ2x0Zi5idWZmZXJWaWV3cywgYWNjZXNzb3IuYnVmZmVyVmlldyk7XHJcbiAgICAgICAgICAgIGFjY2Vzc29yLl9kYXRhID0gdGhpcy5sb2FkQnVmZmVyVmlld0FzeW5jKGAvYnVmZmVyVmlld3MvJHtidWZmZXJWaWV3LmluZGV4fWAsIGJ1ZmZlclZpZXcpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChhY2Nlc3Nvci5jb21wb25lbnRUeXBlID09PSBBY2Nlc3NvckNvbXBvbmVudFR5cGUuRkxPQVQgJiYgIWFjY2Vzc29yLm5vcm1hbGl6ZWQgJiYgKCFidWZmZXJWaWV3LmJ5dGVTdHJpZGUgfHwgYnVmZmVyVmlldy5ieXRlU3RyaWRlID09PSBieXRlU3RyaWRlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBHTFRGTG9hZGVyLl9HZXRUeXBlZEFycmF5KGNvbnRleHQsIGFjY2Vzc29yLmNvbXBvbmVudFR5cGUsIGRhdGEsIGFjY2Vzc29yLmJ5dGVPZmZzZXQsIGxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHR5cGVkQXJyYXkgPSBuZXcgY29uc3RydWN0b3IobGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICBWZXJ0ZXhCdWZmZXIuRm9yRWFjaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXNzb3IuYnl0ZU9mZnNldCB8fCAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidWZmZXJWaWV3LmJ5dGVTdHJpZGUgfHwgYnl0ZVN0cmlkZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbnVtQ29tcG9uZW50cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXNzb3IuY29tcG9uZW50VHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZWRBcnJheS5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY2Vzc29yLm5vcm1hbGl6ZWQgfHwgZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh2YWx1ZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVkQXJyYXlbaW5kZXhdID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0eXBlZEFycmF5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChhY2Nlc3Nvci5zcGFyc2UpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3BhcnNlID0gYWNjZXNzb3Iuc3BhcnNlO1xyXG4gICAgICAgICAgICBhY2Nlc3Nvci5fZGF0YSA9IGFjY2Vzc29yLl9kYXRhLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHR5cGVkQXJyYXkgPSBkYXRhIGFzIFR5cGVkQXJyYXlMaWtlO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5kaWNlc0J1ZmZlclZpZXcgPSBBcnJheUl0ZW0uR2V0KGAke2NvbnRleHR9L3NwYXJzZS9pbmRpY2VzL2J1ZmZlclZpZXdgLCB0aGlzLl9nbHRmLmJ1ZmZlclZpZXdzLCBzcGFyc2UuaW5kaWNlcy5idWZmZXJWaWV3KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlc0J1ZmZlclZpZXcgPSBBcnJheUl0ZW0uR2V0KGAke2NvbnRleHR9L3NwYXJzZS92YWx1ZXMvYnVmZmVyVmlld2AsIHRoaXMuX2dsdGYuYnVmZmVyVmlld3MsIHNwYXJzZS52YWx1ZXMuYnVmZmVyVmlldyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZEJ1ZmZlclZpZXdBc3luYyhgL2J1ZmZlclZpZXdzLyR7aW5kaWNlc0J1ZmZlclZpZXcuaW5kZXh9YCwgaW5kaWNlc0J1ZmZlclZpZXcpLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZEJ1ZmZlclZpZXdBc3luYyhgL2J1ZmZlclZpZXdzLyR7dmFsdWVzQnVmZmVyVmlldy5pbmRleH1gLCB2YWx1ZXNCdWZmZXJWaWV3KSxcclxuICAgICAgICAgICAgICAgIF0pLnRoZW4oKFtpbmRpY2VzRGF0YSwgdmFsdWVzRGF0YV0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmRpY2VzID0gR0xURkxvYWRlci5fR2V0VHlwZWRBcnJheShcclxuICAgICAgICAgICAgICAgICAgICAgICAgYCR7Y29udGV4dH0vc3BhcnNlL2luZGljZXNgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFyc2UuaW5kaWNlcy5jb21wb25lbnRUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRpY2VzRGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3BhcnNlLmluZGljZXMuYnl0ZU9mZnNldCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3BhcnNlLmNvdW50XHJcbiAgICAgICAgICAgICAgICAgICAgKSBhcyBJbmRpY2VzQXJyYXk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNwYXJzZUxlbmd0aCA9IG51bUNvbXBvbmVudHMgKiBzcGFyc2UuY291bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlczogVHlwZWRBcnJheUxpa2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhY2Nlc3Nvci5jb21wb25lbnRUeXBlID09PSBBY2Nlc3NvckNvbXBvbmVudFR5cGUuRkxPQVQgJiYgIWFjY2Vzc29yLm5vcm1hbGl6ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzID0gR0xURkxvYWRlci5fR2V0VHlwZWRBcnJheShgJHtjb250ZXh0fS9zcGFyc2UvdmFsdWVzYCwgYWNjZXNzb3IuY29tcG9uZW50VHlwZSwgdmFsdWVzRGF0YSwgc3BhcnNlLnZhbHVlcy5ieXRlT2Zmc2V0LCBzcGFyc2VMZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNwYXJzZURhdGEgPSBHTFRGTG9hZGVyLl9HZXRUeXBlZEFycmF5KGAke2NvbnRleHR9L3NwYXJzZS92YWx1ZXNgLCBhY2Nlc3Nvci5jb21wb25lbnRUeXBlLCB2YWx1ZXNEYXRhLCBzcGFyc2UudmFsdWVzLmJ5dGVPZmZzZXQsIHNwYXJzZUxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcyA9IG5ldyBjb25zdHJ1Y3RvcihzcGFyc2VMZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBWZXJ0ZXhCdWZmZXIuRm9yRWFjaChzcGFyc2VEYXRhLCAwLCBieXRlU3RyaWRlLCBudW1Db21wb25lbnRzLCBhY2Nlc3Nvci5jb21wb25lbnRUeXBlLCB2YWx1ZXMubGVuZ3RoLCBhY2Nlc3Nvci5ub3JtYWxpemVkIHx8IGZhbHNlLCAodmFsdWUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXNbaW5kZXhdID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlc0luZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRpY2VzSW5kZXggPSAwOyBpbmRpY2VzSW5kZXggPCBpbmRpY2VzLmxlbmd0aDsgaW5kaWNlc0luZGV4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGFJbmRleCA9IGluZGljZXNbaW5kaWNlc0luZGV4XSAqIG51bUNvbXBvbmVudHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGNvbXBvbmVudEluZGV4ID0gMDsgY29tcG9uZW50SW5kZXggPCBudW1Db21wb25lbnRzOyBjb21wb25lbnRJbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlZEFycmF5W2RhdGFJbmRleCsrXSA9IHZhbHVlc1t2YWx1ZXNJbmRleCsrXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVkQXJyYXk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYWNjZXNzb3IuX2RhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIF9sb2FkRmxvYXRBY2Nlc3NvckFzeW5jKGNvbnRleHQ6IHN0cmluZywgYWNjZXNzb3I6IElBY2Nlc3Nvcik6IFByb21pc2U8RmxvYXQzMkFycmF5PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRBY2Nlc3NvckFzeW5jKGNvbnRleHQsIGFjY2Vzc29yLCBGbG9hdDMyQXJyYXkpIGFzIFByb21pc2U8RmxvYXQzMkFycmF5PjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgX2xvYWRJbmRpY2VzQWNjZXNzb3JBc3luYyhjb250ZXh0OiBzdHJpbmcsIGFjY2Vzc29yOiBJQWNjZXNzb3IpOiBQcm9taXNlPEluZGljZXNBcnJheT4ge1xyXG4gICAgICAgIGlmIChhY2Nlc3Nvci50eXBlICE9PSBBY2Nlc3NvclR5cGUuU0NBTEFSKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtjb250ZXh0fS90eXBlOiBJbnZhbGlkIHZhbHVlICR7YWNjZXNzb3IudHlwZX1gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgYWNjZXNzb3IuY29tcG9uZW50VHlwZSAhPT0gQWNjZXNzb3JDb21wb25lbnRUeXBlLlVOU0lHTkVEX0JZVEUgJiZcclxuICAgICAgICAgICAgYWNjZXNzb3IuY29tcG9uZW50VHlwZSAhPT0gQWNjZXNzb3JDb21wb25lbnRUeXBlLlVOU0lHTkVEX1NIT1JUICYmXHJcbiAgICAgICAgICAgIGFjY2Vzc29yLmNvbXBvbmVudFR5cGUgIT09IEFjY2Vzc29yQ29tcG9uZW50VHlwZS5VTlNJR05FRF9JTlRcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2NvbnRleHR9L2NvbXBvbmVudFR5cGU6IEludmFsaWQgdmFsdWUgJHthY2Nlc3Nvci5jb21wb25lbnRUeXBlfWApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGFjY2Vzc29yLl9kYXRhKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhY2Nlc3Nvci5fZGF0YSBhcyBQcm9taXNlPEluZGljZXNBcnJheT47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYWNjZXNzb3Iuc3BhcnNlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnN0cnVjdG9yID0gR0xURkxvYWRlci5fR2V0VHlwZWRBcnJheUNvbnN0cnVjdG9yKGAke2NvbnRleHR9L2NvbXBvbmVudFR5cGVgLCBhY2Nlc3Nvci5jb21wb25lbnRUeXBlKTtcclxuICAgICAgICAgICAgYWNjZXNzb3IuX2RhdGEgPSB0aGlzLl9sb2FkQWNjZXNzb3JBc3luYyhjb250ZXh0LCBhY2Nlc3NvciwgY29uc3RydWN0b3IpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ1ZmZlclZpZXcgPSBBcnJheUl0ZW0uR2V0KGAke2NvbnRleHR9L2J1ZmZlclZpZXdgLCB0aGlzLl9nbHRmLmJ1ZmZlclZpZXdzLCBhY2Nlc3Nvci5idWZmZXJWaWV3KTtcclxuICAgICAgICAgICAgYWNjZXNzb3IuX2RhdGEgPSB0aGlzLmxvYWRCdWZmZXJWaWV3QXN5bmMoYC9idWZmZXJWaWV3cy8ke2J1ZmZlclZpZXcuaW5kZXh9YCwgYnVmZmVyVmlldykudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEdMVEZMb2FkZXIuX0dldFR5cGVkQXJyYXkoY29udGV4dCwgYWNjZXNzb3IuY29tcG9uZW50VHlwZSwgZGF0YSwgYWNjZXNzb3IuYnl0ZU9mZnNldCwgYWNjZXNzb3IuY291bnQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBhY2Nlc3Nvci5fZGF0YSBhcyBQcm9taXNlPEluZGljZXNBcnJheT47XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIF9sb2FkVmVydGV4QnVmZmVyVmlld0FzeW5jKGJ1ZmZlclZpZXc6IElCdWZmZXJWaWV3KTogUHJvbWlzZTxCdWZmZXI+IHtcclxuICAgICAgICBpZiAoYnVmZmVyVmlldy5fYmFieWxvbkJ1ZmZlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gYnVmZmVyVmlldy5fYmFieWxvbkJ1ZmZlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGVuZ2luZSA9IHRoaXMuX2JhYnlsb25TY2VuZS5nZXRFbmdpbmUoKTtcclxuICAgICAgICBidWZmZXJWaWV3Ll9iYWJ5bG9uQnVmZmVyID0gdGhpcy5sb2FkQnVmZmVyVmlld0FzeW5jKGAvYnVmZmVyVmlld3MvJHtidWZmZXJWaWV3LmluZGV4fWAsIGJ1ZmZlclZpZXcpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBCdWZmZXIoZW5naW5lLCBkYXRhLCBmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBidWZmZXJWaWV3Ll9iYWJ5bG9uQnVmZmVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfbG9hZFZlcnRleEFjY2Vzc29yQXN5bmMoY29udGV4dDogc3RyaW5nLCBhY2Nlc3NvcjogSUFjY2Vzc29yLCBraW5kOiBzdHJpbmcpOiBQcm9taXNlPFZlcnRleEJ1ZmZlcj4ge1xyXG4gICAgICAgIGlmIChhY2Nlc3Nvci5fYmFieWxvblZlcnRleEJ1ZmZlcj8uW2tpbmRdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhY2Nlc3Nvci5fYmFieWxvblZlcnRleEJ1ZmZlcltraW5kXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghYWNjZXNzb3IuX2JhYnlsb25WZXJ0ZXhCdWZmZXIpIHtcclxuICAgICAgICAgICAgYWNjZXNzb3IuX2JhYnlsb25WZXJ0ZXhCdWZmZXIgPSB7fTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGVuZ2luZSA9IHRoaXMuX2JhYnlsb25TY2VuZS5nZXRFbmdpbmUoKTtcclxuXHJcbiAgICAgICAgaWYgKGFjY2Vzc29yLnNwYXJzZSB8fCBhY2Nlc3Nvci5idWZmZXJWaWV3ID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBhY2Nlc3Nvci5fYmFieWxvblZlcnRleEJ1ZmZlcltraW5kXSA9IHRoaXMuX2xvYWRGbG9hdEFjY2Vzc29yQXN5bmMoY29udGV4dCwgYWNjZXNzb3IpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVmVydGV4QnVmZmVyKGVuZ2luZSwgZGF0YSwga2luZCwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBidWZmZXJWaWV3ID0gQXJyYXlJdGVtLkdldChgJHtjb250ZXh0fS9idWZmZXJWaWV3YCwgdGhpcy5fZ2x0Zi5idWZmZXJWaWV3cywgYWNjZXNzb3IuYnVmZmVyVmlldyk7XHJcbiAgICAgICAgICAgIGFjY2Vzc29yLl9iYWJ5bG9uVmVydGV4QnVmZmVyW2tpbmRdID0gdGhpcy5fbG9hZFZlcnRleEJ1ZmZlclZpZXdBc3luYyhidWZmZXJWaWV3KS50aGVuKChiYWJ5bG9uQnVmZmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBudW1Db21wb25lbnRzID0gR0xURkxvYWRlci5fR2V0TnVtQ29tcG9uZW50cyhjb250ZXh0LCBhY2Nlc3Nvci50eXBlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVmVydGV4QnVmZmVyKFxyXG4gICAgICAgICAgICAgICAgICAgIGVuZ2luZSxcclxuICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uQnVmZmVyLFxyXG4gICAgICAgICAgICAgICAgICAgIGtpbmQsXHJcbiAgICAgICAgICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgICAgIGJ1ZmZlclZpZXcuYnl0ZVN0cmlkZSxcclxuICAgICAgICAgICAgICAgICAgICB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgYWNjZXNzb3IuYnl0ZU9mZnNldCxcclxuICAgICAgICAgICAgICAgICAgICBudW1Db21wb25lbnRzLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjY2Vzc29yLmNvbXBvbmVudFR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgYWNjZXNzb3Iubm9ybWFsaXplZCxcclxuICAgICAgICAgICAgICAgICAgICB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICAgICB0cnVlXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBhY2Nlc3Nvci5fYmFieWxvblZlcnRleEJ1ZmZlcltraW5kXTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9sb2FkTWF0ZXJpYWxNZXRhbGxpY1JvdWdobmVzc1Byb3BlcnRpZXNBc3luYyhjb250ZXh0OiBzdHJpbmcsIHByb3BlcnRpZXM6IElNYXRlcmlhbFBick1ldGFsbGljUm91Z2huZXNzLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgaWYgKCEoYmFieWxvbk1hdGVyaWFsIGluc3RhbmNlb2YgUEJSTWF0ZXJpYWwpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtjb250ZXh0fTogTWF0ZXJpYWwgdHlwZSBub3Qgc3VwcG9ydGVkYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBwcm9taXNlcyA9IG5ldyBBcnJheTxQcm9taXNlPGFueT4+KCk7XHJcblxyXG4gICAgICAgIGlmIChwcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzLmJhc2VDb2xvckZhY3Rvcikge1xyXG4gICAgICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsLmFsYmVkb0NvbG9yID0gQ29sb3IzLkZyb21BcnJheShwcm9wZXJ0aWVzLmJhc2VDb2xvckZhY3Rvcik7XHJcbiAgICAgICAgICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwuYWxwaGEgPSBwcm9wZXJ0aWVzLmJhc2VDb2xvckZhY3RvclszXTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGJhYnlsb25NYXRlcmlhbC5hbGJlZG9Db2xvciA9IENvbG9yMy5XaGl0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwubWV0YWxsaWMgPSBwcm9wZXJ0aWVzLm1ldGFsbGljRmFjdG9yID09IHVuZGVmaW5lZCA/IDEgOiBwcm9wZXJ0aWVzLm1ldGFsbGljRmFjdG9yO1xyXG4gICAgICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwucm91Z2huZXNzID0gcHJvcGVydGllcy5yb3VnaG5lc3NGYWN0b3IgPT0gdW5kZWZpbmVkID8gMSA6IHByb3BlcnRpZXMucm91Z2huZXNzRmFjdG9yO1xyXG5cclxuICAgICAgICAgICAgaWYgKHByb3BlcnRpZXMuYmFzZUNvbG9yVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRUZXh0dXJlSW5mb0FzeW5jKGAke2NvbnRleHR9L2Jhc2VDb2xvclRleHR1cmVgLCBwcm9wZXJ0aWVzLmJhc2VDb2xvclRleHR1cmUsICh0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHR1cmUubmFtZSA9IGAke2JhYnlsb25NYXRlcmlhbC5uYW1lfSAoQmFzZSBDb2xvcilgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwuYWxiZWRvVGV4dHVyZSA9IHRleHR1cmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzLm1ldGFsbGljUm91Z2huZXNzVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgcHJvcGVydGllcy5tZXRhbGxpY1JvdWdobmVzc1RleHR1cmUubm9uQ29sb3JEYXRhID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkVGV4dHVyZUluZm9Bc3luYyhgJHtjb250ZXh0fS9tZXRhbGxpY1JvdWdobmVzc1RleHR1cmVgLCBwcm9wZXJ0aWVzLm1ldGFsbGljUm91Z2huZXNzVGV4dHVyZSwgKHRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dHVyZS5uYW1lID0gYCR7YmFieWxvbk1hdGVyaWFsLm5hbWV9IChNZXRhbGxpYyBSb3VnaG5lc3MpYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsLm1ldGFsbGljVGV4dHVyZSA9IHRleHR1cmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsLnVzZU1ldGFsbG5lc3NGcm9tTWV0YWxsaWNUZXh0dXJlQmx1ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwudXNlUm91Z2huZXNzRnJvbU1ldGFsbGljVGV4dHVyZUdyZWVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJhYnlsb25NYXRlcmlhbC51c2VSb3VnaG5lc3NGcm9tTWV0YWxsaWNUZXh0dXJlQWxwaGEgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IHt9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgX2xvYWRNYXRlcmlhbEFzeW5jKFxyXG4gICAgICAgIGNvbnRleHQ6IHN0cmluZyxcclxuICAgICAgICBtYXRlcmlhbDogSU1hdGVyaWFsLFxyXG4gICAgICAgIGJhYnlsb25NZXNoOiBOdWxsYWJsZTxNZXNoPixcclxuICAgICAgICBiYWJ5bG9uRHJhd01vZGU6IG51bWJlcixcclxuICAgICAgICBhc3NpZ246IChiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsKSA9PiB2b2lkID0gKCkgPT4ge31cclxuICAgICk6IFByb21pc2U8TWF0ZXJpYWw+IHtcclxuICAgICAgICBjb25zdCBleHRlbnNpb25Qcm9taXNlID0gdGhpcy5fZXh0ZW5zaW9uc0xvYWRNYXRlcmlhbEFzeW5jKGNvbnRleHQsIG1hdGVyaWFsLCBiYWJ5bG9uTWVzaCwgYmFieWxvbkRyYXdNb2RlLCBhc3NpZ24pO1xyXG4gICAgICAgIGlmIChleHRlbnNpb25Qcm9taXNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBleHRlbnNpb25Qcm9taXNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWF0ZXJpYWwuX2RhdGEgPSBtYXRlcmlhbC5fZGF0YSB8fCB7fTtcclxuICAgICAgICBsZXQgYmFieWxvbkRhdGEgPSBtYXRlcmlhbC5fZGF0YVtiYWJ5bG9uRHJhd01vZGVdO1xyXG4gICAgICAgIGlmICghYmFieWxvbkRhdGEpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dPcGVuKGAke2NvbnRleHR9ICR7bWF0ZXJpYWwubmFtZSB8fCBcIlwifWApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYmFieWxvbk1hdGVyaWFsID0gdGhpcy5jcmVhdGVNYXRlcmlhbChjb250ZXh0LCBtYXRlcmlhbCwgYmFieWxvbkRyYXdNb2RlKTtcclxuXHJcbiAgICAgICAgICAgIGJhYnlsb25EYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsOiBiYWJ5bG9uTWF0ZXJpYWwsXHJcbiAgICAgICAgICAgICAgICBiYWJ5bG9uTWVzaGVzOiBbXSxcclxuICAgICAgICAgICAgICAgIHByb21pc2U6IHRoaXMubG9hZE1hdGVyaWFsUHJvcGVydGllc0FzeW5jKGNvbnRleHQsIG1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWwpLFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgbWF0ZXJpYWwuX2RhdGFbYmFieWxvbkRyYXdNb2RlXSA9IGJhYnlsb25EYXRhO1xyXG5cclxuICAgICAgICAgICAgR0xURkxvYWRlci5BZGRQb2ludGVyTWV0YWRhdGEoYmFieWxvbk1hdGVyaWFsLCBjb250ZXh0KTtcclxuICAgICAgICAgICAgdGhpcy5fcGFyZW50Lm9uTWF0ZXJpYWxMb2FkZWRPYnNlcnZhYmxlLm5vdGlmeU9ic2VydmVycyhiYWJ5bG9uTWF0ZXJpYWwpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5sb2dDbG9zZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGJhYnlsb25NZXNoKSB7XHJcbiAgICAgICAgICAgIGJhYnlsb25EYXRhLmJhYnlsb25NZXNoZXMucHVzaChiYWJ5bG9uTWVzaCk7XHJcblxyXG4gICAgICAgICAgICBiYWJ5bG9uTWVzaC5vbkRpc3Bvc2VPYnNlcnZhYmxlLmFkZE9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBiYWJ5bG9uRGF0YS5iYWJ5bG9uTWVzaGVzLmluZGV4T2YoYmFieWxvbk1lc2gpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhYnlsb25EYXRhLmJhYnlsb25NZXNoZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhc3NpZ24oYmFieWxvbkRhdGEuYmFieWxvbk1hdGVyaWFsKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGJhYnlsb25EYXRhLnByb21pc2UudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBiYWJ5bG9uRGF0YS5iYWJ5bG9uTWF0ZXJpYWw7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY3JlYXRlRGVmYXVsdE1hdGVyaWFsKG5hbWU6IHN0cmluZywgYmFieWxvbkRyYXdNb2RlOiBudW1iZXIpOiBNYXRlcmlhbCB7XHJcbiAgICAgICAgdGhpcy5fYmFieWxvblNjZW5lLl9ibG9ja0VudGl0eUNvbGxlY3Rpb24gPSAhIXRoaXMuX2Fzc2V0Q29udGFpbmVyO1xyXG4gICAgICAgIGNvbnN0IGJhYnlsb25NYXRlcmlhbCA9IG5ldyBQQlJNYXRlcmlhbChuYW1lLCB0aGlzLl9iYWJ5bG9uU2NlbmUpO1xyXG4gICAgICAgIGJhYnlsb25NYXRlcmlhbC5fcGFyZW50Q29udGFpbmVyID0gdGhpcy5fYXNzZXRDb250YWluZXI7XHJcbiAgICAgICAgdGhpcy5fYmFieWxvblNjZW5lLl9ibG9ja0VudGl0eUNvbGxlY3Rpb24gPSBmYWxzZTtcclxuICAgICAgICAvLyBNb3ZlZCB0byBtZXNoIHNvIHVzZXIgY2FuIGNoYW5nZSBtYXRlcmlhbHMgb24gZ2x0ZiBtZXNoZXM6IGJhYnlsb25NYXRlcmlhbC5zaWRlT3JpZW50YXRpb24gPSB0aGlzLl9iYWJ5bG9uU2NlbmUudXNlUmlnaHRIYW5kZWRTeXN0ZW0gPyBNYXRlcmlhbC5Db3VudGVyQ2xvY2tXaXNlU2lkZU9yaWVudGF0aW9uIDogTWF0ZXJpYWwuQ2xvY2tXaXNlU2lkZU9yaWVudGF0aW9uO1xyXG4gICAgICAgIGJhYnlsb25NYXRlcmlhbC5maWxsTW9kZSA9IGJhYnlsb25EcmF3TW9kZTtcclxuICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwuZW5hYmxlU3BlY3VsYXJBbnRpQWxpYXNpbmcgPSB0cnVlO1xyXG4gICAgICAgIGJhYnlsb25NYXRlcmlhbC51c2VSYWRpYW5jZU92ZXJBbHBoYSA9ICF0aGlzLl9wYXJlbnQudHJhbnNwYXJlbmN5QXNDb3ZlcmFnZTtcclxuICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwudXNlU3BlY3VsYXJPdmVyQWxwaGEgPSAhdGhpcy5fcGFyZW50LnRyYW5zcGFyZW5jeUFzQ292ZXJhZ2U7XHJcbiAgICAgICAgYmFieWxvbk1hdGVyaWFsLnRyYW5zcGFyZW5jeU1vZGUgPSBQQlJNYXRlcmlhbC5QQlJNQVRFUklBTF9PUEFRVUU7XHJcbiAgICAgICAgYmFieWxvbk1hdGVyaWFsLm1ldGFsbGljID0gMTtcclxuICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwucm91Z2huZXNzID0gMTtcclxuICAgICAgICByZXR1cm4gYmFieWxvbk1hdGVyaWFsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIEJhYnlsb24gbWF0ZXJpYWwgZnJvbSBhIGdsVEYgbWF0ZXJpYWwuXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBUaGUgY29udGV4dCB3aGVuIGxvYWRpbmcgdGhlIGFzc2V0XHJcbiAgICAgKiBAcGFyYW0gbWF0ZXJpYWwgVGhlIGdsVEYgbWF0ZXJpYWwgcHJvcGVydHlcclxuICAgICAqIEBwYXJhbSBiYWJ5bG9uRHJhd01vZGUgVGhlIGRyYXcgbW9kZSBmb3IgdGhlIEJhYnlsb24gbWF0ZXJpYWxcclxuICAgICAqIEByZXR1cm5zIFRoZSBCYWJ5bG9uIG1hdGVyaWFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjcmVhdGVNYXRlcmlhbChjb250ZXh0OiBzdHJpbmcsIG1hdGVyaWFsOiBJTWF0ZXJpYWwsIGJhYnlsb25EcmF3TW9kZTogbnVtYmVyKTogTWF0ZXJpYWwge1xyXG4gICAgICAgIGNvbnN0IGV4dGVuc2lvblByb21pc2UgPSB0aGlzLl9leHRlbnNpb25zQ3JlYXRlTWF0ZXJpYWwoY29udGV4dCwgbWF0ZXJpYWwsIGJhYnlsb25EcmF3TW9kZSk7XHJcbiAgICAgICAgaWYgKGV4dGVuc2lvblByb21pc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGV4dGVuc2lvblByb21pc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBuYW1lID0gbWF0ZXJpYWwubmFtZSB8fCBgbWF0ZXJpYWwke21hdGVyaWFsLmluZGV4fWA7XHJcbiAgICAgICAgY29uc3QgYmFieWxvbk1hdGVyaWFsID0gdGhpcy5fY3JlYXRlRGVmYXVsdE1hdGVyaWFsKG5hbWUsIGJhYnlsb25EcmF3TW9kZSk7XHJcblxyXG4gICAgICAgIHJldHVybiBiYWJ5bG9uTWF0ZXJpYWw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb2FkcyBwcm9wZXJ0aWVzIGZyb20gYSBnbFRGIG1hdGVyaWFsIGludG8gYSBCYWJ5bG9uIG1hdGVyaWFsLlxyXG4gICAgICogQHBhcmFtIGNvbnRleHQgVGhlIGNvbnRleHQgd2hlbiBsb2FkaW5nIHRoZSBhc3NldFxyXG4gICAgICogQHBhcmFtIG1hdGVyaWFsIFRoZSBnbFRGIG1hdGVyaWFsIHByb3BlcnR5XHJcbiAgICAgKiBAcGFyYW0gYmFieWxvbk1hdGVyaWFsIFRoZSBCYWJ5bG9uIG1hdGVyaWFsXHJcbiAgICAgKiBAcmV0dXJucyBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBsb2FkIGlzIGNvbXBsZXRlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkTWF0ZXJpYWxQcm9wZXJ0aWVzQXN5bmMoY29udGV4dDogc3RyaW5nLCBtYXRlcmlhbDogSU1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgY29uc3QgZXh0ZW5zaW9uUHJvbWlzZSA9IHRoaXMuX2V4dGVuc2lvbnNMb2FkTWF0ZXJpYWxQcm9wZXJ0aWVzQXN5bmMoY29udGV4dCwgbWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbCk7XHJcbiAgICAgICAgaWYgKGV4dGVuc2lvblByb21pc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGV4dGVuc2lvblByb21pc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBwcm9taXNlcyA9IG5ldyBBcnJheTxQcm9taXNlPGFueT4+KCk7XHJcblxyXG4gICAgICAgIHByb21pc2VzLnB1c2godGhpcy5sb2FkTWF0ZXJpYWxCYXNlUHJvcGVydGllc0FzeW5jKGNvbnRleHQsIG1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWwpKTtcclxuXHJcbiAgICAgICAgaWYgKG1hdGVyaWFsLnBick1ldGFsbGljUm91Z2huZXNzKSB7XHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5fbG9hZE1hdGVyaWFsTWV0YWxsaWNSb3VnaG5lc3NQcm9wZXJ0aWVzQXN5bmMoYCR7Y29udGV4dH0vcGJyTWV0YWxsaWNSb3VnaG5lc3NgLCBtYXRlcmlhbC5wYnJNZXRhbGxpY1JvdWdobmVzcywgYmFieWxvbk1hdGVyaWFsKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmxvYWRNYXRlcmlhbEFscGhhUHJvcGVydGllcyhjb250ZXh0LCBtYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IHt9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIExvYWRzIHRoZSBub3JtYWwsIG9jY2x1c2lvbiwgYW5kIGVtaXNzaXZlIHByb3BlcnRpZXMgZnJvbSBhIGdsVEYgbWF0ZXJpYWwgaW50byBhIEJhYnlsb24gbWF0ZXJpYWwuXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBUaGUgY29udGV4dCB3aGVuIGxvYWRpbmcgdGhlIGFzc2V0XHJcbiAgICAgKiBAcGFyYW0gbWF0ZXJpYWwgVGhlIGdsVEYgbWF0ZXJpYWwgcHJvcGVydHlcclxuICAgICAqIEBwYXJhbSBiYWJ5bG9uTWF0ZXJpYWwgVGhlIEJhYnlsb24gbWF0ZXJpYWxcclxuICAgICAqIEByZXR1cm5zIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIGxvYWQgaXMgY29tcGxldGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWRNYXRlcmlhbEJhc2VQcm9wZXJ0aWVzQXN5bmMoY29udGV4dDogc3RyaW5nLCBtYXRlcmlhbDogSU1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgaWYgKCEoYmFieWxvbk1hdGVyaWFsIGluc3RhbmNlb2YgUEJSTWF0ZXJpYWwpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtjb250ZXh0fTogTWF0ZXJpYWwgdHlwZSBub3Qgc3VwcG9ydGVkYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBwcm9taXNlcyA9IG5ldyBBcnJheTxQcm9taXNlPGFueT4+KCk7XHJcblxyXG4gICAgICAgIGJhYnlsb25NYXRlcmlhbC5lbWlzc2l2ZUNvbG9yID0gbWF0ZXJpYWwuZW1pc3NpdmVGYWN0b3IgPyBDb2xvcjMuRnJvbUFycmF5KG1hdGVyaWFsLmVtaXNzaXZlRmFjdG9yKSA6IG5ldyBDb2xvcjMoMCwgMCwgMCk7XHJcbiAgICAgICAgaWYgKG1hdGVyaWFsLmRvdWJsZVNpZGVkKSB7XHJcbiAgICAgICAgICAgIGJhYnlsb25NYXRlcmlhbC5iYWNrRmFjZUN1bGxpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsLnR3b1NpZGVkTGlnaHRpbmcgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG1hdGVyaWFsLm5vcm1hbFRleHR1cmUpIHtcclxuICAgICAgICAgICAgbWF0ZXJpYWwubm9ybWFsVGV4dHVyZS5ub25Db2xvckRhdGEgPSB0cnVlO1xyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkVGV4dHVyZUluZm9Bc3luYyhgJHtjb250ZXh0fS9ub3JtYWxUZXh0dXJlYCwgbWF0ZXJpYWwubm9ybWFsVGV4dHVyZSwgKHRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlLm5hbWUgPSBgJHtiYWJ5bG9uTWF0ZXJpYWwubmFtZX0gKE5vcm1hbClgO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhYnlsb25NYXRlcmlhbC5idW1wVGV4dHVyZSA9IHRleHR1cmU7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsLmludmVydE5vcm1hbE1hcFggPSAhdGhpcy5fYmFieWxvblNjZW5lLnVzZVJpZ2h0SGFuZGVkU3lzdGVtO1xyXG4gICAgICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwuaW52ZXJ0Tm9ybWFsTWFwWSA9IHRoaXMuX2JhYnlsb25TY2VuZS51c2VSaWdodEhhbmRlZFN5c3RlbTtcclxuICAgICAgICAgICAgaWYgKG1hdGVyaWFsLm5vcm1hbFRleHR1cmUuc2NhbGUgIT0gdW5kZWZpbmVkICYmIGJhYnlsb25NYXRlcmlhbC5idW1wVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsLmJ1bXBUZXh0dXJlLmxldmVsID0gbWF0ZXJpYWwubm9ybWFsVGV4dHVyZS5zY2FsZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsLmZvcmNlSXJyYWRpYW5jZUluRnJhZ21lbnQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG1hdGVyaWFsLm9jY2x1c2lvblRleHR1cmUpIHtcclxuICAgICAgICAgICAgbWF0ZXJpYWwub2NjbHVzaW9uVGV4dHVyZS5ub25Db2xvckRhdGEgPSB0cnVlO1xyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkVGV4dHVyZUluZm9Bc3luYyhgJHtjb250ZXh0fS9vY2NsdXNpb25UZXh0dXJlYCwgbWF0ZXJpYWwub2NjbHVzaW9uVGV4dHVyZSwgKHRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlLm5hbWUgPSBgJHtiYWJ5bG9uTWF0ZXJpYWwubmFtZX0gKE9jY2x1c2lvbilgO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhYnlsb25NYXRlcmlhbC5hbWJpZW50VGV4dHVyZSA9IHRleHR1cmU7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsLnVzZUFtYmllbnRJbkdyYXlTY2FsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmIChtYXRlcmlhbC5vY2NsdXNpb25UZXh0dXJlLnN0cmVuZ3RoICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsLmFtYmllbnRUZXh0dXJlU3RyZW5ndGggPSBtYXRlcmlhbC5vY2NsdXNpb25UZXh0dXJlLnN0cmVuZ3RoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobWF0ZXJpYWwuZW1pc3NpdmVUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRUZXh0dXJlSW5mb0FzeW5jKGAke2NvbnRleHR9L2VtaXNzaXZlVGV4dHVyZWAsIG1hdGVyaWFsLmVtaXNzaXZlVGV4dHVyZSwgKHRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlLm5hbWUgPSBgJHtiYWJ5bG9uTWF0ZXJpYWwubmFtZX0gKEVtaXNzaXZlKWA7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsLmVtaXNzaXZlVGV4dHVyZSA9IHRleHR1cmU7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IHt9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIExvYWRzIHRoZSBhbHBoYSBwcm9wZXJ0aWVzIGZyb20gYSBnbFRGIG1hdGVyaWFsIGludG8gYSBCYWJ5bG9uIG1hdGVyaWFsLlxyXG4gICAgICogTXVzdCBiZSBjYWxsZWQgYWZ0ZXIgdGhlIHNldHRpbmcgdGhlIGFsYmVkbyB0ZXh0dXJlIG9mIHRoZSBCYWJ5bG9uIG1hdGVyaWFsIHdoZW4gdGhlIG1hdGVyaWFsIGhhcyBhbiBhbGJlZG8gdGV4dHVyZS5cclxuICAgICAqIEBwYXJhbSBjb250ZXh0IFRoZSBjb250ZXh0IHdoZW4gbG9hZGluZyB0aGUgYXNzZXRcclxuICAgICAqIEBwYXJhbSBtYXRlcmlhbCBUaGUgZ2xURiBtYXRlcmlhbCBwcm9wZXJ0eVxyXG4gICAgICogQHBhcmFtIGJhYnlsb25NYXRlcmlhbCBUaGUgQmFieWxvbiBtYXRlcmlhbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZE1hdGVyaWFsQWxwaGFQcm9wZXJ0aWVzKGNvbnRleHQ6IHN0cmluZywgbWF0ZXJpYWw6IElNYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghKGJhYnlsb25NYXRlcmlhbCBpbnN0YW5jZW9mIFBCUk1hdGVyaWFsKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7Y29udGV4dH06IE1hdGVyaWFsIHR5cGUgbm90IHN1cHBvcnRlZGApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYWxwaGFNb2RlID0gbWF0ZXJpYWwuYWxwaGFNb2RlIHx8IE1hdGVyaWFsQWxwaGFNb2RlLk9QQVFVRTtcclxuICAgICAgICBzd2l0Y2ggKGFscGhhTW9kZSkge1xyXG4gICAgICAgICAgICBjYXNlIE1hdGVyaWFsQWxwaGFNb2RlLk9QQVFVRToge1xyXG4gICAgICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsLnRyYW5zcGFyZW5jeU1vZGUgPSBQQlJNYXRlcmlhbC5QQlJNQVRFUklBTF9PUEFRVUU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIE1hdGVyaWFsQWxwaGFNb2RlLk1BU0s6IHtcclxuICAgICAgICAgICAgICAgIGJhYnlsb25NYXRlcmlhbC50cmFuc3BhcmVuY3lNb2RlID0gUEJSTWF0ZXJpYWwuUEJSTUFURVJJQUxfQUxQSEFURVNUO1xyXG4gICAgICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsLmFscGhhQ3V0T2ZmID0gbWF0ZXJpYWwuYWxwaGFDdXRvZmYgPT0gdW5kZWZpbmVkID8gMC41IDogbWF0ZXJpYWwuYWxwaGFDdXRvZmY7XHJcbiAgICAgICAgICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsLmFsYmVkb1RleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwuYWxiZWRvVGV4dHVyZS5oYXNBbHBoYSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIE1hdGVyaWFsQWxwaGFNb2RlLkJMRU5EOiB7XHJcbiAgICAgICAgICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwudHJhbnNwYXJlbmN5TW9kZSA9IFBCUk1hdGVyaWFsLlBCUk1BVEVSSUFMX0FMUEhBQkxFTkQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsLmFsYmVkb1RleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwuYWxiZWRvVGV4dHVyZS5oYXNBbHBoYSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsLnVzZUFscGhhRnJvbUFsYmVkb1RleHR1cmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2NvbnRleHR9L2FscGhhTW9kZTogSW52YWxpZCB2YWx1ZSAoJHttYXRlcmlhbC5hbHBoYU1vZGV9KWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTG9hZHMgYSBnbFRGIHRleHR1cmUgaW5mby5cclxuICAgICAqIEBwYXJhbSBjb250ZXh0IFRoZSBjb250ZXh0IHdoZW4gbG9hZGluZyB0aGUgYXNzZXRcclxuICAgICAqIEBwYXJhbSB0ZXh0dXJlSW5mbyBUaGUgZ2xURiB0ZXh0dXJlIGluZm8gcHJvcGVydHlcclxuICAgICAqIEBwYXJhbSBhc3NpZ24gQSBmdW5jdGlvbiBjYWxsZWQgc3luY2hyb25vdXNseSBhZnRlciBwYXJzaW5nIHRoZSBnbFRGIHByb3BlcnRpZXNcclxuICAgICAqIEByZXR1cm5zIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGxvYWRlZCBCYWJ5bG9uIHRleHR1cmUgd2hlbiB0aGUgbG9hZCBpcyBjb21wbGV0ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZFRleHR1cmVJbmZvQXN5bmMoY29udGV4dDogc3RyaW5nLCB0ZXh0dXJlSW5mbzogSVRleHR1cmVJbmZvLCBhc3NpZ246IChiYWJ5bG9uVGV4dHVyZTogQmFzZVRleHR1cmUpID0+IHZvaWQgPSAoKSA9PiB7fSk6IFByb21pc2U8QmFzZVRleHR1cmU+IHtcclxuICAgICAgICBjb25zdCBleHRlbnNpb25Qcm9taXNlID0gdGhpcy5fZXh0ZW5zaW9uc0xvYWRUZXh0dXJlSW5mb0FzeW5jKGNvbnRleHQsIHRleHR1cmVJbmZvLCBhc3NpZ24pO1xyXG4gICAgICAgIGlmIChleHRlbnNpb25Qcm9taXNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBleHRlbnNpb25Qcm9taXNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5sb2dPcGVuKGAke2NvbnRleHR9YCk7XHJcblxyXG4gICAgICAgIGlmICh0ZXh0dXJlSW5mby50ZXhDb29yZCEgPj0gNikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7Y29udGV4dH0vdGV4Q29vcmQ6IEludmFsaWQgdmFsdWUgKCR7dGV4dHVyZUluZm8udGV4Q29vcmR9KWApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdGV4dHVyZSA9IEFycmF5SXRlbS5HZXQoYCR7Y29udGV4dH0vaW5kZXhgLCB0aGlzLl9nbHRmLnRleHR1cmVzLCB0ZXh0dXJlSW5mby5pbmRleCk7XHJcbiAgICAgICAgdGV4dHVyZS5fdGV4dHVyZUluZm8gPSB0ZXh0dXJlSW5mbztcclxuXHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IHRoaXMuX2xvYWRUZXh0dXJlQXN5bmMoYC90ZXh0dXJlcy8ke3RleHR1cmVJbmZvLmluZGV4fWAsIHRleHR1cmUsIChiYWJ5bG9uVGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICBiYWJ5bG9uVGV4dHVyZS5jb29yZGluYXRlc0luZGV4ID0gdGV4dHVyZUluZm8udGV4Q29vcmQgfHwgMDtcclxuICAgICAgICAgICAgR0xURkxvYWRlci5BZGRQb2ludGVyTWV0YWRhdGEoYmFieWxvblRleHR1cmUsIGNvbnRleHQpO1xyXG4gICAgICAgICAgICB0aGlzLl9wYXJlbnQub25UZXh0dXJlTG9hZGVkT2JzZXJ2YWJsZS5ub3RpZnlPYnNlcnZlcnMoYmFieWxvblRleHR1cmUpO1xyXG4gICAgICAgICAgICBhc3NpZ24oYmFieWxvblRleHR1cmUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmxvZ0Nsb3NlKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfbG9hZFRleHR1cmVBc3luYyhjb250ZXh0OiBzdHJpbmcsIHRleHR1cmU6IElUZXh0dXJlLCBhc3NpZ246IChiYWJ5bG9uVGV4dHVyZTogQmFzZVRleHR1cmUpID0+IHZvaWQgPSAoKSA9PiB7fSk6IFByb21pc2U8QmFzZVRleHR1cmU+IHtcclxuICAgICAgICBjb25zdCBleHRlbnNpb25Qcm9taXNlID0gdGhpcy5fZXh0ZW5zaW9uc0xvYWRUZXh0dXJlQXN5bmMoY29udGV4dCwgdGV4dHVyZSwgYXNzaWduKTtcclxuICAgICAgICBpZiAoZXh0ZW5zaW9uUHJvbWlzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZXh0ZW5zaW9uUHJvbWlzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubG9nT3BlbihgJHtjb250ZXh0fSAke3RleHR1cmUubmFtZSB8fCBcIlwifWApO1xyXG5cclxuICAgICAgICBjb25zdCBzYW1wbGVyID0gdGV4dHVyZS5zYW1wbGVyID09IHVuZGVmaW5lZCA/IEdMVEZMb2FkZXIuRGVmYXVsdFNhbXBsZXIgOiBBcnJheUl0ZW0uR2V0KGAke2NvbnRleHR9L3NhbXBsZXJgLCB0aGlzLl9nbHRmLnNhbXBsZXJzLCB0ZXh0dXJlLnNhbXBsZXIpO1xyXG4gICAgICAgIGNvbnN0IGltYWdlID0gQXJyYXlJdGVtLkdldChgJHtjb250ZXh0fS9zb3VyY2VgLCB0aGlzLl9nbHRmLmltYWdlcywgdGV4dHVyZS5zb3VyY2UpO1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLl9jcmVhdGVUZXh0dXJlQXN5bmMoY29udGV4dCwgc2FtcGxlciwgaW1hZ2UsIGFzc2lnbiwgdW5kZWZpbmVkLCAhdGV4dHVyZS5fdGV4dHVyZUluZm8ubm9uQ29sb3JEYXRhKTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2dDbG9zZSgpO1xyXG5cclxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgX2NyZWF0ZVRleHR1cmVBc3luYyhcclxuICAgICAgICBjb250ZXh0OiBzdHJpbmcsXHJcbiAgICAgICAgc2FtcGxlcjogSVNhbXBsZXIsXHJcbiAgICAgICAgaW1hZ2U6IElJbWFnZSxcclxuICAgICAgICBhc3NpZ246IChiYWJ5bG9uVGV4dHVyZTogQmFzZVRleHR1cmUpID0+IHZvaWQgPSAoKSA9PiB7fSxcclxuICAgICAgICB0ZXh0dXJlTG9hZGVyT3B0aW9ucz86IGFueSxcclxuICAgICAgICB1c2VTUkdCQnVmZmVyPzogYm9vbGVhblxyXG4gICAgKTogUHJvbWlzZTxCYXNlVGV4dHVyZT4ge1xyXG4gICAgICAgIGNvbnN0IHNhbXBsZXJEYXRhID0gdGhpcy5fbG9hZFNhbXBsZXIoYC9zYW1wbGVycy8ke3NhbXBsZXIuaW5kZXh9YCwgc2FtcGxlcik7XHJcblxyXG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gbmV3IEFycmF5PFByb21pc2U8YW55Pj4oKTtcclxuXHJcbiAgICAgICAgY29uc3QgZGVmZXJyZWQgPSBuZXcgRGVmZXJyZWQ8dm9pZD4oKTtcclxuICAgICAgICB0aGlzLl9iYWJ5bG9uU2NlbmUuX2Jsb2NrRW50aXR5Q29sbGVjdGlvbiA9ICEhdGhpcy5fYXNzZXRDb250YWluZXI7XHJcbiAgICAgICAgY29uc3QgdGV4dHVyZUNyZWF0aW9uT3B0aW9uczogSVRleHR1cmVDcmVhdGlvbk9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIG5vTWlwbWFwOiBzYW1wbGVyRGF0YS5ub01pcE1hcHMsXHJcbiAgICAgICAgICAgIGludmVydFk6IGZhbHNlLFxyXG4gICAgICAgICAgICBzYW1wbGluZ01vZGU6IHNhbXBsZXJEYXRhLnNhbXBsaW5nTW9kZSxcclxuICAgICAgICAgICAgb25Mb2FkOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX2Rpc3Bvc2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbkVycm9yOiAobWVzc2FnZT86IHN0cmluZywgZXhjZXB0aW9uPzogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX2Rpc3Bvc2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KG5ldyBFcnJvcihgJHtjb250ZXh0fTogJHtleGNlcHRpb24gJiYgZXhjZXB0aW9uLm1lc3NhZ2UgPyBleGNlcHRpb24ubWVzc2FnZSA6IG1lc3NhZ2UgfHwgXCJGYWlsZWQgdG8gbG9hZCB0ZXh0dXJlXCJ9YCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBtaW1lVHlwZTogaW1hZ2UubWltZVR5cGUsXHJcbiAgICAgICAgICAgIGxvYWRlck9wdGlvbnM6IHRleHR1cmVMb2FkZXJPcHRpb25zLFxyXG4gICAgICAgICAgICB1c2VTUkdCQnVmZmVyOiAhIXVzZVNSR0JCdWZmZXIgJiYgdGhpcy5fcGFyZW50LnVzZVNSR0JCdWZmZXJzLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgYmFieWxvblRleHR1cmUgPSBuZXcgVGV4dHVyZShudWxsLCB0aGlzLl9iYWJ5bG9uU2NlbmUsIHRleHR1cmVDcmVhdGlvbk9wdGlvbnMpO1xyXG4gICAgICAgIGJhYnlsb25UZXh0dXJlLl9wYXJlbnRDb250YWluZXIgPSB0aGlzLl9hc3NldENvbnRhaW5lcjtcclxuICAgICAgICB0aGlzLl9iYWJ5bG9uU2NlbmUuX2Jsb2NrRW50aXR5Q29sbGVjdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgIHByb21pc2VzLnB1c2goZGVmZXJyZWQucHJvbWlzZSk7XHJcblxyXG4gICAgICAgIHByb21pc2VzLnB1c2goXHJcbiAgICAgICAgICAgIHRoaXMubG9hZEltYWdlQXN5bmMoYC9pbWFnZXMvJHtpbWFnZS5pbmRleH1gLCBpbWFnZSkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IGltYWdlLnVyaSB8fCBgJHt0aGlzLl9maWxlTmFtZX0jaW1hZ2Uke2ltYWdlLmluZGV4fWA7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhVXJsID0gYGRhdGE6JHt0aGlzLl91bmlxdWVSb290VXJsfSR7bmFtZX1gO1xyXG4gICAgICAgICAgICAgICAgYmFieWxvblRleHR1cmUudXBkYXRlVVJMKGRhdGFVcmwsIGRhdGEpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGJhYnlsb25UZXh0dXJlLndyYXBVID0gc2FtcGxlckRhdGEud3JhcFU7XHJcbiAgICAgICAgYmFieWxvblRleHR1cmUud3JhcFYgPSBzYW1wbGVyRGF0YS53cmFwVjtcclxuICAgICAgICBhc3NpZ24oYmFieWxvblRleHR1cmUpO1xyXG5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYmFieWxvblRleHR1cmU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZFNhbXBsZXIoY29udGV4dDogc3RyaW5nLCBzYW1wbGVyOiBJU2FtcGxlcik6IF9JU2FtcGxlckRhdGEge1xyXG4gICAgICAgIGlmICghc2FtcGxlci5fZGF0YSkge1xyXG4gICAgICAgICAgICBzYW1wbGVyLl9kYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgbm9NaXBNYXBzOiBzYW1wbGVyLm1pbkZpbHRlciA9PT0gVGV4dHVyZU1pbkZpbHRlci5ORUFSRVNUIHx8IHNhbXBsZXIubWluRmlsdGVyID09PSBUZXh0dXJlTWluRmlsdGVyLkxJTkVBUixcclxuICAgICAgICAgICAgICAgIHNhbXBsaW5nTW9kZTogR0xURkxvYWRlci5fR2V0VGV4dHVyZVNhbXBsaW5nTW9kZShjb250ZXh0LCBzYW1wbGVyKSxcclxuICAgICAgICAgICAgICAgIHdyYXBVOiBHTFRGTG9hZGVyLl9HZXRUZXh0dXJlV3JhcE1vZGUoYCR7Y29udGV4dH0vd3JhcFNgLCBzYW1wbGVyLndyYXBTKSxcclxuICAgICAgICAgICAgICAgIHdyYXBWOiBHTFRGTG9hZGVyLl9HZXRUZXh0dXJlV3JhcE1vZGUoYCR7Y29udGV4dH0vd3JhcFRgLCBzYW1wbGVyLndyYXBUKSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBzYW1wbGVyLl9kYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTG9hZHMgYSBnbFRGIGltYWdlLlxyXG4gICAgICogQHBhcmFtIGNvbnRleHQgVGhlIGNvbnRleHQgd2hlbiBsb2FkaW5nIHRoZSBhc3NldFxyXG4gICAgICogQHBhcmFtIGltYWdlIFRoZSBnbFRGIGltYWdlIHByb3BlcnR5XHJcbiAgICAgKiBAcmV0dXJucyBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBsb2FkZWQgZGF0YSB3aGVuIHRoZSBsb2FkIGlzIGNvbXBsZXRlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkSW1hZ2VBc3luYyhjb250ZXh0OiBzdHJpbmcsIGltYWdlOiBJSW1hZ2UpOiBQcm9taXNlPEFycmF5QnVmZmVyVmlldz4ge1xyXG4gICAgICAgIGlmICghaW1hZ2UuX2RhdGEpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dPcGVuKGAke2NvbnRleHR9ICR7aW1hZ2UubmFtZSB8fCBcIlwifWApO1xyXG5cclxuICAgICAgICAgICAgaWYgKGltYWdlLnVyaSkge1xyXG4gICAgICAgICAgICAgICAgaW1hZ2UuX2RhdGEgPSB0aGlzLmxvYWRVcmlBc3luYyhgJHtjb250ZXh0fS91cmlgLCBpbWFnZSwgaW1hZ2UudXJpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJ1ZmZlclZpZXcgPSBBcnJheUl0ZW0uR2V0KGAke2NvbnRleHR9L2J1ZmZlclZpZXdgLCB0aGlzLl9nbHRmLmJ1ZmZlclZpZXdzLCBpbWFnZS5idWZmZXJWaWV3KTtcclxuICAgICAgICAgICAgICAgIGltYWdlLl9kYXRhID0gdGhpcy5sb2FkQnVmZmVyVmlld0FzeW5jKGAvYnVmZmVyVmlld3MvJHtidWZmZXJWaWV3LmluZGV4fWAsIGJ1ZmZlclZpZXcpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmxvZ0Nsb3NlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gaW1hZ2UuX2RhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb2FkcyBhIGdsVEYgdXJpLlxyXG4gICAgICogQHBhcmFtIGNvbnRleHQgVGhlIGNvbnRleHQgd2hlbiBsb2FkaW5nIHRoZSBhc3NldFxyXG4gICAgICogQHBhcmFtIHByb3BlcnR5IFRoZSBnbFRGIHByb3BlcnR5IGFzc29jaWF0ZWQgd2l0aCB0aGUgdXJpXHJcbiAgICAgKiBAcGFyYW0gdXJpIFRoZSBiYXNlNjQgb3IgcmVsYXRpdmUgdXJpXHJcbiAgICAgKiBAcmV0dXJucyBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBsb2FkZWQgZGF0YSB3aGVuIHRoZSBsb2FkIGlzIGNvbXBsZXRlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkVXJpQXN5bmMoY29udGV4dDogc3RyaW5nLCBwcm9wZXJ0eTogSVByb3BlcnR5LCB1cmk6IHN0cmluZyk6IFByb21pc2U8QXJyYXlCdWZmZXJWaWV3PiB7XHJcbiAgICAgICAgY29uc3QgZXh0ZW5zaW9uUHJvbWlzZSA9IHRoaXMuX2V4dGVuc2lvbnNMb2FkVXJpQXN5bmMoY29udGV4dCwgcHJvcGVydHksIHVyaSk7XHJcbiAgICAgICAgaWYgKGV4dGVuc2lvblByb21pc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGV4dGVuc2lvblByb21pc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIUdMVEZMb2FkZXIuX1ZhbGlkYXRlVXJpKHVyaSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2NvbnRleHR9OiAnJHt1cml9JyBpcyBpbnZhbGlkYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoSXNCYXNlNjREYXRhVXJsKHVyaSkpIHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IG5ldyBVaW50OEFycmF5KERlY29kZUJhc2U2NFVybFRvQmluYXJ5KHVyaSkpO1xyXG4gICAgICAgICAgICB0aGlzLmxvZyhgJHtjb250ZXh0fTogRGVjb2RlZCAke3VyaS5zdWJzdHIoMCwgNjQpfS4uLiAoJHtkYXRhLmxlbmd0aH0gYnl0ZXMpYCk7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmxvZyhgJHtjb250ZXh0fTogTG9hZGluZyAke3VyaX1gKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhcmVudC5wcmVwcm9jZXNzVXJsQXN5bmModGhpcy5fcm9vdFVybCArIHVyaSkudGhlbigodXJsKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wYXJlbnQuX2xvYWRGaWxlKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2JhYnlsb25TY2VuZSxcclxuICAgICAgICAgICAgICAgICAgICB1cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9kaXNwb3NlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2coYCR7Y29udGV4dH06IExvYWRlZCAke3VyaX0gKCR7KGRhdGEgYXMgQXJyYXlCdWZmZXIpLmJ5dGVMZW5ndGh9IGJ5dGVzKWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShuZXcgVWludDhBcnJheShkYXRhIGFzIEFycmF5QnVmZmVyKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgKHJlcXVlc3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBMb2FkRmlsZUVycm9yKGAke2NvbnRleHR9OiBGYWlsZWQgdG8gbG9hZCAnJHt1cml9JyR7cmVxdWVzdCA/IFwiOiBcIiArIHJlcXVlc3Quc3RhdHVzICsgXCIgXCIgKyByZXF1ZXN0LnN0YXR1c1RleHQgOiBcIlwifWAsIHJlcXVlc3QpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgYSBKU09OIHBvaW50ZXIgdG8gdGhlIF9pbnRlcm5hbE1ldGFkYXRhIG9mIHRoZSBCYWJ5bG9uIG9iamVjdCBhdCBgPG9iamVjdD4uX2ludGVybmFsTWV0YWRhdGEuZ2x0Zi5wb2ludGVyc2AuXHJcbiAgICAgKiBAcGFyYW0gYmFieWxvbk9iamVjdCB0aGUgQmFieWxvbiBvYmplY3Qgd2l0aCBfaW50ZXJuYWxNZXRhZGF0YVxyXG4gICAgICogQHBhcmFtIHBvaW50ZXIgdGhlIEpTT04gcG9pbnRlclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEFkZFBvaW50ZXJNZXRhZGF0YShiYWJ5bG9uT2JqZWN0OiBJV2l0aE1ldGFkYXRhLCBwb2ludGVyOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBiYWJ5bG9uT2JqZWN0Lm1ldGFkYXRhID0gYmFieWxvbk9iamVjdC5tZXRhZGF0YSB8fCB7fTtcclxuICAgICAgICBjb25zdCBtZXRhZGF0YSA9IChiYWJ5bG9uT2JqZWN0Ll9pbnRlcm5hbE1ldGFkYXRhID0gYmFieWxvbk9iamVjdC5faW50ZXJuYWxNZXRhZGF0YSB8fCB7fSk7XHJcbiAgICAgICAgY29uc3QgZ2x0ZiA9IChtZXRhZGF0YS5nbHRmID0gbWV0YWRhdGEuZ2x0ZiB8fCB7fSk7XHJcbiAgICAgICAgY29uc3QgcG9pbnRlcnMgPSAoZ2x0Zi5wb2ludGVycyA9IGdsdGYucG9pbnRlcnMgfHwgW10pO1xyXG4gICAgICAgIHBvaW50ZXJzLnB1c2gocG9pbnRlcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX0dldFRleHR1cmVXcmFwTW9kZShjb250ZXh0OiBzdHJpbmcsIG1vZGU6IFRleHR1cmVXcmFwTW9kZSB8IHVuZGVmaW5lZCk6IG51bWJlciB7XHJcbiAgICAgICAgLy8gU2V0IGRlZmF1bHRzIGlmIHVuZGVmaW5lZFxyXG4gICAgICAgIG1vZGUgPSBtb2RlID09IHVuZGVmaW5lZCA/IFRleHR1cmVXcmFwTW9kZS5SRVBFQVQgOiBtb2RlO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKG1vZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBUZXh0dXJlV3JhcE1vZGUuQ0xBTVBfVE9fRURHRTpcclxuICAgICAgICAgICAgICAgIHJldHVybiBUZXh0dXJlLkNMQU1QX0FERFJFU1NNT0RFO1xyXG4gICAgICAgICAgICBjYXNlIFRleHR1cmVXcmFwTW9kZS5NSVJST1JFRF9SRVBFQVQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gVGV4dHVyZS5NSVJST1JfQUREUkVTU01PREU7XHJcbiAgICAgICAgICAgIGNhc2UgVGV4dHVyZVdyYXBNb2RlLlJFUEVBVDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBUZXh0dXJlLldSQVBfQUREUkVTU01PREU7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBMb2dnZXIuV2FybihgJHtjb250ZXh0fTogSW52YWxpZCB2YWx1ZSAoJHttb2RlfSlgKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBUZXh0dXJlLldSQVBfQUREUkVTU01PREU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9HZXRUZXh0dXJlU2FtcGxpbmdNb2RlKGNvbnRleHQ6IHN0cmluZywgc2FtcGxlcjogSVNhbXBsZXIpOiBudW1iZXIge1xyXG4gICAgICAgIC8vIFNldCBkZWZhdWx0cyBpZiB1bmRlZmluZWRcclxuICAgICAgICBjb25zdCBtYWdGaWx0ZXIgPSBzYW1wbGVyLm1hZ0ZpbHRlciA9PSB1bmRlZmluZWQgPyBUZXh0dXJlTWFnRmlsdGVyLkxJTkVBUiA6IHNhbXBsZXIubWFnRmlsdGVyO1xyXG4gICAgICAgIGNvbnN0IG1pbkZpbHRlciA9IHNhbXBsZXIubWluRmlsdGVyID09IHVuZGVmaW5lZCA/IFRleHR1cmVNaW5GaWx0ZXIuTElORUFSX01JUE1BUF9MSU5FQVIgOiBzYW1wbGVyLm1pbkZpbHRlcjtcclxuXHJcbiAgICAgICAgaWYgKG1hZ0ZpbHRlciA9PT0gVGV4dHVyZU1hZ0ZpbHRlci5MSU5FQVIpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChtaW5GaWx0ZXIpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgVGV4dHVyZU1pbkZpbHRlci5ORUFSRVNUOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBUZXh0dXJlLkxJTkVBUl9ORUFSRVNUO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBUZXh0dXJlTWluRmlsdGVyLkxJTkVBUjpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gVGV4dHVyZS5MSU5FQVJfTElORUFSO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBUZXh0dXJlTWluRmlsdGVyLk5FQVJFU1RfTUlQTUFQX05FQVJFU1Q6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFRleHR1cmUuTElORUFSX05FQVJFU1RfTUlQTkVBUkVTVDtcclxuICAgICAgICAgICAgICAgIGNhc2UgVGV4dHVyZU1pbkZpbHRlci5MSU5FQVJfTUlQTUFQX05FQVJFU1Q6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFRleHR1cmUuTElORUFSX0xJTkVBUl9NSVBORUFSRVNUO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBUZXh0dXJlTWluRmlsdGVyLk5FQVJFU1RfTUlQTUFQX0xJTkVBUjpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gVGV4dHVyZS5MSU5FQVJfTkVBUkVTVF9NSVBMSU5FQVI7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRleHR1cmVNaW5GaWx0ZXIuTElORUFSX01JUE1BUF9MSU5FQVI6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFRleHR1cmUuTElORUFSX0xJTkVBUl9NSVBMSU5FQVI7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIExvZ2dlci5XYXJuKGAke2NvbnRleHR9L21pbkZpbHRlcjogSW52YWxpZCB2YWx1ZSAoJHttaW5GaWx0ZXJ9KWApO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBUZXh0dXJlLkxJTkVBUl9MSU5FQVJfTUlQTElORUFSO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKG1hZ0ZpbHRlciAhPT0gVGV4dHVyZU1hZ0ZpbHRlci5ORUFSRVNUKSB7XHJcbiAgICAgICAgICAgICAgICBMb2dnZXIuV2FybihgJHtjb250ZXh0fS9tYWdGaWx0ZXI6IEludmFsaWQgdmFsdWUgKCR7bWFnRmlsdGVyfSlgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc3dpdGNoIChtaW5GaWx0ZXIpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgVGV4dHVyZU1pbkZpbHRlci5ORUFSRVNUOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBUZXh0dXJlLk5FQVJFU1RfTkVBUkVTVDtcclxuICAgICAgICAgICAgICAgIGNhc2UgVGV4dHVyZU1pbkZpbHRlci5MSU5FQVI6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFRleHR1cmUuTkVBUkVTVF9MSU5FQVI7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRleHR1cmVNaW5GaWx0ZXIuTkVBUkVTVF9NSVBNQVBfTkVBUkVTVDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gVGV4dHVyZS5ORUFSRVNUX05FQVJFU1RfTUlQTkVBUkVTVDtcclxuICAgICAgICAgICAgICAgIGNhc2UgVGV4dHVyZU1pbkZpbHRlci5MSU5FQVJfTUlQTUFQX05FQVJFU1Q6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFRleHR1cmUuTkVBUkVTVF9MSU5FQVJfTUlQTkVBUkVTVDtcclxuICAgICAgICAgICAgICAgIGNhc2UgVGV4dHVyZU1pbkZpbHRlci5ORUFSRVNUX01JUE1BUF9MSU5FQVI6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFRleHR1cmUuTkVBUkVTVF9ORUFSRVNUX01JUExJTkVBUjtcclxuICAgICAgICAgICAgICAgIGNhc2UgVGV4dHVyZU1pbkZpbHRlci5MSU5FQVJfTUlQTUFQX0xJTkVBUjpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gVGV4dHVyZS5ORUFSRVNUX0xJTkVBUl9NSVBMSU5FQVI7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIExvZ2dlci5XYXJuKGAke2NvbnRleHR9L21pbkZpbHRlcjogSW52YWxpZCB2YWx1ZSAoJHttaW5GaWx0ZXJ9KWApO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBUZXh0dXJlLk5FQVJFU1RfTkVBUkVTVF9NSVBORUFSRVNUO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9HZXRUeXBlZEFycmF5Q29uc3RydWN0b3IoY29udGV4dDogc3RyaW5nLCBjb21wb25lbnRUeXBlOiBBY2Nlc3NvckNvbXBvbmVudFR5cGUpOiBUeXBlZEFycmF5Q29uc3RydWN0b3Ige1xyXG4gICAgICAgIHN3aXRjaCAoY29tcG9uZW50VHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIEFjY2Vzc29yQ29tcG9uZW50VHlwZS5CWVRFOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEludDhBcnJheTtcclxuICAgICAgICAgICAgY2FzZSBBY2Nlc3NvckNvbXBvbmVudFR5cGUuVU5TSUdORURfQllURTpcclxuICAgICAgICAgICAgICAgIHJldHVybiBVaW50OEFycmF5O1xyXG4gICAgICAgICAgICBjYXNlIEFjY2Vzc29yQ29tcG9uZW50VHlwZS5TSE9SVDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBJbnQxNkFycmF5O1xyXG4gICAgICAgICAgICBjYXNlIEFjY2Vzc29yQ29tcG9uZW50VHlwZS5VTlNJR05FRF9TSE9SVDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBVaW50MTZBcnJheTtcclxuICAgICAgICAgICAgY2FzZSBBY2Nlc3NvckNvbXBvbmVudFR5cGUuVU5TSUdORURfSU5UOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFVpbnQzMkFycmF5O1xyXG4gICAgICAgICAgICBjYXNlIEFjY2Vzc29yQ29tcG9uZW50VHlwZS5GTE9BVDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBGbG9hdDMyQXJyYXk7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7Y29udGV4dH06IEludmFsaWQgY29tcG9uZW50IHR5cGUgJHtjb21wb25lbnRUeXBlfWApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfR2V0VHlwZWRBcnJheShcclxuICAgICAgICBjb250ZXh0OiBzdHJpbmcsXHJcbiAgICAgICAgY29tcG9uZW50VHlwZTogQWNjZXNzb3JDb21wb25lbnRUeXBlLFxyXG4gICAgICAgIGJ1ZmZlclZpZXc6IEFycmF5QnVmZmVyVmlldyxcclxuICAgICAgICBieXRlT2Zmc2V0OiBudW1iZXIgfCB1bmRlZmluZWQsXHJcbiAgICAgICAgbGVuZ3RoOiBudW1iZXJcclxuICAgICk6IFR5cGVkQXJyYXlMaWtlIHtcclxuICAgICAgICBjb25zdCBidWZmZXIgPSBidWZmZXJWaWV3LmJ1ZmZlcjtcclxuICAgICAgICBieXRlT2Zmc2V0ID0gYnVmZmVyVmlldy5ieXRlT2Zmc2V0ICsgKGJ5dGVPZmZzZXQgfHwgMCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbnN0cnVjdG9yID0gR0xURkxvYWRlci5fR2V0VHlwZWRBcnJheUNvbnN0cnVjdG9yKGAke2NvbnRleHR9L2NvbXBvbmVudFR5cGVgLCBjb21wb25lbnRUeXBlKTtcclxuXHJcbiAgICAgICAgY29uc3QgY29tcG9uZW50VHlwZUxlbmd0aCA9IFZlcnRleEJ1ZmZlci5HZXRUeXBlQnl0ZUxlbmd0aChjb21wb25lbnRUeXBlKTtcclxuICAgICAgICBpZiAoYnl0ZU9mZnNldCAlIGNvbXBvbmVudFR5cGVMZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgLy8gSEFDSzogQ29weSB0aGUgYnVmZmVyIGlmIGJ5dGUgb2Zmc2V0IGlzIG5vdCBhIG11bHRpcGxlIG9mIGNvbXBvbmVudCB0eXBlIGJ5dGUgbGVuZ3RoLlxyXG4gICAgICAgICAgICBMb2dnZXIuV2FybihgJHtjb250ZXh0fTogQ29weWluZyBidWZmZXIgYXMgYnl0ZSBvZmZzZXQgKCR7Ynl0ZU9mZnNldH0pIGlzIG5vdCBhIG11bHRpcGxlIG9mIGNvbXBvbmVudCB0eXBlIGJ5dGUgbGVuZ3RoICgke2NvbXBvbmVudFR5cGVMZW5ndGh9KWApO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IGNvbnN0cnVjdG9yKGJ1ZmZlci5zbGljZShieXRlT2Zmc2V0LCBieXRlT2Zmc2V0ICsgbGVuZ3RoICogY29tcG9uZW50VHlwZUxlbmd0aCksIDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBjb25zdHJ1Y3RvcihidWZmZXIsIGJ5dGVPZmZzZXQsIGxlbmd0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX0dldE51bUNvbXBvbmVudHMoY29udGV4dDogc3RyaW5nLCB0eXBlOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiU0NBTEFSXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICAgICAgY2FzZSBcIlZFQzJcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiAyO1xyXG4gICAgICAgICAgICBjYXNlIFwiVkVDM1wiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDM7XHJcbiAgICAgICAgICAgIGNhc2UgXCJWRUM0XCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gNDtcclxuICAgICAgICAgICAgY2FzZSBcIk1BVDJcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiA0O1xyXG4gICAgICAgICAgICBjYXNlIFwiTUFUM1wiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDk7XHJcbiAgICAgICAgICAgIGNhc2UgXCJNQVQ0XCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMTY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7Y29udGV4dH06IEludmFsaWQgdHlwZSAoJHt0eXBlfSlgKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfVmFsaWRhdGVVcmkodXJpOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gVG9vbHMuSXNCYXNlNjQodXJpKSB8fCB1cmkuaW5kZXhPZihcIi4uXCIpID09PSAtMTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIF9HZXREcmF3TW9kZShjb250ZXh0OiBzdHJpbmcsIG1vZGU6IG51bWJlciB8IHVuZGVmaW5lZCk6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKG1vZGUgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIG1vZGUgPSBNZXNoUHJpbWl0aXZlTW9kZS5UUklBTkdMRVM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzd2l0Y2ggKG1vZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBNZXNoUHJpbWl0aXZlTW9kZS5QT0lOVFM6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0ZXJpYWwuUG9pbnRMaXN0RHJhd01vZGU7XHJcbiAgICAgICAgICAgIGNhc2UgTWVzaFByaW1pdGl2ZU1vZGUuTElORVM6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0ZXJpYWwuTGluZUxpc3REcmF3TW9kZTtcclxuICAgICAgICAgICAgY2FzZSBNZXNoUHJpbWl0aXZlTW9kZS5MSU5FX0xPT1A6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0ZXJpYWwuTGluZUxvb3BEcmF3TW9kZTtcclxuICAgICAgICAgICAgY2FzZSBNZXNoUHJpbWl0aXZlTW9kZS5MSU5FX1NUUklQOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGVyaWFsLkxpbmVTdHJpcERyYXdNb2RlO1xyXG4gICAgICAgICAgICBjYXNlIE1lc2hQcmltaXRpdmVNb2RlLlRSSUFOR0xFUzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBNYXRlcmlhbC5UcmlhbmdsZUZpbGxNb2RlO1xyXG4gICAgICAgICAgICBjYXNlIE1lc2hQcmltaXRpdmVNb2RlLlRSSUFOR0xFX1NUUklQOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGVyaWFsLlRyaWFuZ2xlU3RyaXBEcmF3TW9kZTtcclxuICAgICAgICAgICAgY2FzZSBNZXNoUHJpbWl0aXZlTW9kZS5UUklBTkdMRV9GQU46XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0ZXJpYWwuVHJpYW5nbGVGYW5EcmF3TW9kZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtjb250ZXh0fTogSW52YWxpZCBtZXNoIHByaW1pdGl2ZSBtb2RlICgke21vZGV9KWApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NvbXBpbGVNYXRlcmlhbHNBc3luYygpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICB0aGlzLl9wYXJlbnQuX3N0YXJ0UGVyZm9ybWFuY2VDb3VudGVyKFwiQ29tcGlsZSBtYXRlcmlhbHNcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gbmV3IEFycmF5PFByb21pc2U8YW55Pj4oKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2dsdGYubWF0ZXJpYWxzKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgbWF0ZXJpYWwgb2YgdGhpcy5fZ2x0Zi5tYXRlcmlhbHMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChtYXRlcmlhbC5fZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYmFieWxvbkRyYXdNb2RlIGluIG1hdGVyaWFsLl9kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhYnlsb25EYXRhID0gbWF0ZXJpYWwuX2RhdGFbYmFieWxvbkRyYXdNb2RlXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBiYWJ5bG9uTWVzaCBvZiBiYWJ5bG9uRGF0YS5iYWJ5bG9uTWVzaGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBFbnN1cmUgbm9uVW5pZm9ybVNjYWxpbmcgaXMgc2V0IGlmIG5lY2Vzc2FyeS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhYnlsb25NZXNoLmNvbXB1dGVXb3JsZE1hdHJpeCh0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBiYWJ5bG9uTWF0ZXJpYWwgPSBiYWJ5bG9uRGF0YS5iYWJ5bG9uTWF0ZXJpYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKGJhYnlsb25NYXRlcmlhbC5mb3JjZUNvbXBpbGF0aW9uQXN5bmMoYmFieWxvbk1lc2gpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2goYmFieWxvbk1hdGVyaWFsLmZvcmNlQ29tcGlsYXRpb25Bc3luYyhiYWJ5bG9uTWVzaCwgeyB1c2VJbnN0YW5jZXM6IHRydWUgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3BhcmVudC51c2VDbGlwUGxhbmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKGJhYnlsb25NYXRlcmlhbC5mb3JjZUNvbXBpbGF0aW9uQXN5bmMoYmFieWxvbk1lc2gsIHsgY2xpcFBsYW5lOiB0cnVlIH0pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKGJhYnlsb25NYXRlcmlhbC5mb3JjZUNvbXBpbGF0aW9uQXN5bmMoYmFieWxvbk1lc2gsIHsgY2xpcFBsYW5lOiB0cnVlLCB1c2VJbnN0YW5jZXM6IHRydWUgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9wYXJlbnQuX2VuZFBlcmZvcm1hbmNlQ291bnRlcihcIkNvbXBpbGUgbWF0ZXJpYWxzXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NvbXBpbGVTaGFkb3dHZW5lcmF0b3JzQXN5bmMoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgdGhpcy5fcGFyZW50Ll9zdGFydFBlcmZvcm1hbmNlQ291bnRlcihcIkNvbXBpbGUgc2hhZG93IGdlbmVyYXRvcnNcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gbmV3IEFycmF5PFByb21pc2U8YW55Pj4oKTtcclxuXHJcbiAgICAgICAgY29uc3QgbGlnaHRzID0gdGhpcy5fYmFieWxvblNjZW5lLmxpZ2h0cztcclxuICAgICAgICBmb3IgKGNvbnN0IGxpZ2h0IG9mIGxpZ2h0cykge1xyXG4gICAgICAgICAgICBjb25zdCBnZW5lcmF0b3IgPSBsaWdodC5nZXRTaGFkb3dHZW5lcmF0b3IoKTtcclxuICAgICAgICAgICAgaWYgKGdlbmVyYXRvcikge1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChnZW5lcmF0b3IuZm9yY2VDb21waWxhdGlvbkFzeW5jKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9wYXJlbnQuX2VuZFBlcmZvcm1hbmNlQ291bnRlcihcIkNvbXBpbGUgc2hhZG93IGdlbmVyYXRvcnNcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZm9yRWFjaEV4dGVuc2lvbnMoYWN0aW9uOiAoZXh0ZW5zaW9uOiBJR0xURkxvYWRlckV4dGVuc2lvbikgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIGZvciAoY29uc3QgZXh0ZW5zaW9uIG9mIHRoaXMuX2V4dGVuc2lvbnMpIHtcclxuICAgICAgICAgICAgaWYgKGV4dGVuc2lvbi5lbmFibGVkKSB7XHJcbiAgICAgICAgICAgICAgICBhY3Rpb24oZXh0ZW5zaW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9hcHBseUV4dGVuc2lvbnM8VD4ocHJvcGVydHk6IElQcm9wZXJ0eSwgZnVuY3Rpb25OYW1lOiBzdHJpbmcsIGFjdGlvbkFzeW5jOiAoZXh0ZW5zaW9uOiBJR0xURkxvYWRlckV4dGVuc2lvbikgPT4gTnVsbGFibGU8VD4gfCB1bmRlZmluZWQpOiBOdWxsYWJsZTxUPiB7XHJcbiAgICAgICAgZm9yIChjb25zdCBleHRlbnNpb24gb2YgdGhpcy5fZXh0ZW5zaW9ucykge1xyXG4gICAgICAgICAgICBpZiAoZXh0ZW5zaW9uLmVuYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gYCR7ZXh0ZW5zaW9uLm5hbWV9LiR7ZnVuY3Rpb25OYW1lfWA7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsb2FkZXJQcm9wZXJ0eSA9IHByb3BlcnR5IGFzIElMb2FkZXJQcm9wZXJ0eTtcclxuICAgICAgICAgICAgICAgIGxvYWRlclByb3BlcnR5Ll9hY3RpdmVMb2FkZXJFeHRlbnNpb25GdW5jdGlvbnMgPSBsb2FkZXJQcm9wZXJ0eS5fYWN0aXZlTG9hZGVyRXh0ZW5zaW9uRnVuY3Rpb25zIHx8IHt9O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYWN0aXZlTG9hZGVyRXh0ZW5zaW9uRnVuY3Rpb25zID0gbG9hZGVyUHJvcGVydHkuX2FjdGl2ZUxvYWRlckV4dGVuc2lvbkZ1bmN0aW9ucztcclxuICAgICAgICAgICAgICAgIGlmICghYWN0aXZlTG9hZGVyRXh0ZW5zaW9uRnVuY3Rpb25zW2lkXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZUxvYWRlckV4dGVuc2lvbkZ1bmN0aW9uc1tpZF0gPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhY3Rpb25Bc3luYyhleHRlbnNpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGFjdGl2ZUxvYWRlckV4dGVuc2lvbkZ1bmN0aW9uc1tpZF07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9leHRlbnNpb25zT25Mb2FkaW5nKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2ZvckVhY2hFeHRlbnNpb25zKChleHRlbnNpb24pID0+IGV4dGVuc2lvbi5vbkxvYWRpbmcgJiYgZXh0ZW5zaW9uLm9uTG9hZGluZygpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9leHRlbnNpb25zT25SZWFkeSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9mb3JFYWNoRXh0ZW5zaW9ucygoZXh0ZW5zaW9uKSA9PiBleHRlbnNpb24ub25SZWFkeSAmJiBleHRlbnNpb24ub25SZWFkeSgpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9leHRlbnNpb25zTG9hZFNjZW5lQXN5bmMoY29udGV4dDogc3RyaW5nLCBzY2VuZTogSVNjZW5lKTogTnVsbGFibGU8UHJvbWlzZTx2b2lkPj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hcHBseUV4dGVuc2lvbnMoc2NlbmUsIFwibG9hZFNjZW5lXCIsIChleHRlbnNpb24pID0+IGV4dGVuc2lvbi5sb2FkU2NlbmVBc3luYyAmJiBleHRlbnNpb24ubG9hZFNjZW5lQXN5bmMoY29udGV4dCwgc2NlbmUpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9leHRlbnNpb25zTG9hZE5vZGVBc3luYyhjb250ZXh0OiBzdHJpbmcsIG5vZGU6IElOb2RlLCBhc3NpZ246IChiYWJ5bG9uVHJhbnNmb3JtTm9kZTogVHJhbnNmb3JtTm9kZSkgPT4gdm9pZCk6IE51bGxhYmxlPFByb21pc2U8VHJhbnNmb3JtTm9kZT4+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXBwbHlFeHRlbnNpb25zKG5vZGUsIFwibG9hZE5vZGVcIiwgKGV4dGVuc2lvbikgPT4gZXh0ZW5zaW9uLmxvYWROb2RlQXN5bmMgJiYgZXh0ZW5zaW9uLmxvYWROb2RlQXN5bmMoY29udGV4dCwgbm9kZSwgYXNzaWduKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZXh0ZW5zaW9uc0xvYWRDYW1lcmFBc3luYyhjb250ZXh0OiBzdHJpbmcsIGNhbWVyYTogSUNhbWVyYSwgYXNzaWduOiAoYmFieWxvbkNhbWVyYTogQ2FtZXJhKSA9PiB2b2lkKTogTnVsbGFibGU8UHJvbWlzZTxDYW1lcmE+PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwcGx5RXh0ZW5zaW9ucyhjYW1lcmEsIFwibG9hZENhbWVyYVwiLCAoZXh0ZW5zaW9uKSA9PiBleHRlbnNpb24ubG9hZENhbWVyYUFzeW5jICYmIGV4dGVuc2lvbi5sb2FkQ2FtZXJhQXN5bmMoY29udGV4dCwgY2FtZXJhLCBhc3NpZ24pKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9leHRlbnNpb25zTG9hZFZlcnRleERhdGFBc3luYyhjb250ZXh0OiBzdHJpbmcsIHByaW1pdGl2ZTogSU1lc2hQcmltaXRpdmUsIGJhYnlsb25NZXNoOiBNZXNoKTogTnVsbGFibGU8UHJvbWlzZTxHZW9tZXRyeT4+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXBwbHlFeHRlbnNpb25zKHByaW1pdGl2ZSwgXCJsb2FkVmVydGV4RGF0YVwiLCAoZXh0ZW5zaW9uKSA9PiBleHRlbnNpb24uX2xvYWRWZXJ0ZXhEYXRhQXN5bmMgJiYgZXh0ZW5zaW9uLl9sb2FkVmVydGV4RGF0YUFzeW5jKGNvbnRleHQsIHByaW1pdGl2ZSwgYmFieWxvbk1lc2gpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9leHRlbnNpb25zTG9hZE1lc2hQcmltaXRpdmVBc3luYyhcclxuICAgICAgICBjb250ZXh0OiBzdHJpbmcsXHJcbiAgICAgICAgbmFtZTogc3RyaW5nLFxyXG4gICAgICAgIG5vZGU6IElOb2RlLFxyXG4gICAgICAgIG1lc2g6IElNZXNoLFxyXG4gICAgICAgIHByaW1pdGl2ZTogSU1lc2hQcmltaXRpdmUsXHJcbiAgICAgICAgYXNzaWduOiAoYmFieWxvbk1lc2g6IEFic3RyYWN0TWVzaCkgPT4gdm9pZFxyXG4gICAgKTogTnVsbGFibGU8UHJvbWlzZTxBYnN0cmFjdE1lc2g+PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwcGx5RXh0ZW5zaW9ucyhcclxuICAgICAgICAgICAgcHJpbWl0aXZlLFxyXG4gICAgICAgICAgICBcImxvYWRNZXNoUHJpbWl0aXZlXCIsXHJcbiAgICAgICAgICAgIChleHRlbnNpb24pID0+IGV4dGVuc2lvbi5fbG9hZE1lc2hQcmltaXRpdmVBc3luYyAmJiBleHRlbnNpb24uX2xvYWRNZXNoUHJpbWl0aXZlQXN5bmMoY29udGV4dCwgbmFtZSwgbm9kZSwgbWVzaCwgcHJpbWl0aXZlLCBhc3NpZ24pXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9leHRlbnNpb25zTG9hZE1hdGVyaWFsQXN5bmMoXHJcbiAgICAgICAgY29udGV4dDogc3RyaW5nLFxyXG4gICAgICAgIG1hdGVyaWFsOiBJTWF0ZXJpYWwsXHJcbiAgICAgICAgYmFieWxvbk1lc2g6IE51bGxhYmxlPE1lc2g+LFxyXG4gICAgICAgIGJhYnlsb25EcmF3TW9kZTogbnVtYmVyLFxyXG4gICAgICAgIGFzc2lnbjogKGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpID0+IHZvaWRcclxuICAgICk6IE51bGxhYmxlPFByb21pc2U8TWF0ZXJpYWw+PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwcGx5RXh0ZW5zaW9ucyhcclxuICAgICAgICAgICAgbWF0ZXJpYWwsXHJcbiAgICAgICAgICAgIFwibG9hZE1hdGVyaWFsXCIsXHJcbiAgICAgICAgICAgIChleHRlbnNpb24pID0+IGV4dGVuc2lvbi5fbG9hZE1hdGVyaWFsQXN5bmMgJiYgZXh0ZW5zaW9uLl9sb2FkTWF0ZXJpYWxBc3luYyhjb250ZXh0LCBtYXRlcmlhbCwgYmFieWxvbk1lc2gsIGJhYnlsb25EcmF3TW9kZSwgYXNzaWduKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZXh0ZW5zaW9uc0NyZWF0ZU1hdGVyaWFsKGNvbnRleHQ6IHN0cmluZywgbWF0ZXJpYWw6IElNYXRlcmlhbCwgYmFieWxvbkRyYXdNb2RlOiBudW1iZXIpOiBOdWxsYWJsZTxNYXRlcmlhbD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hcHBseUV4dGVuc2lvbnMobWF0ZXJpYWwsIFwiY3JlYXRlTWF0ZXJpYWxcIiwgKGV4dGVuc2lvbikgPT4gZXh0ZW5zaW9uLmNyZWF0ZU1hdGVyaWFsICYmIGV4dGVuc2lvbi5jcmVhdGVNYXRlcmlhbChjb250ZXh0LCBtYXRlcmlhbCwgYmFieWxvbkRyYXdNb2RlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZXh0ZW5zaW9uc0xvYWRNYXRlcmlhbFByb3BlcnRpZXNBc3luYyhjb250ZXh0OiBzdHJpbmcsIG1hdGVyaWFsOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBOdWxsYWJsZTxQcm9taXNlPHZvaWQ+PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwcGx5RXh0ZW5zaW9ucyhcclxuICAgICAgICAgICAgbWF0ZXJpYWwsXHJcbiAgICAgICAgICAgIFwibG9hZE1hdGVyaWFsUHJvcGVydGllc1wiLFxyXG4gICAgICAgICAgICAoZXh0ZW5zaW9uKSA9PiBleHRlbnNpb24ubG9hZE1hdGVyaWFsUHJvcGVydGllc0FzeW5jICYmIGV4dGVuc2lvbi5sb2FkTWF0ZXJpYWxQcm9wZXJ0aWVzQXN5bmMoY29udGV4dCwgbWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2V4dGVuc2lvbnNMb2FkVGV4dHVyZUluZm9Bc3luYyhjb250ZXh0OiBzdHJpbmcsIHRleHR1cmVJbmZvOiBJVGV4dHVyZUluZm8sIGFzc2lnbjogKGJhYnlsb25UZXh0dXJlOiBCYXNlVGV4dHVyZSkgPT4gdm9pZCk6IE51bGxhYmxlPFByb21pc2U8QmFzZVRleHR1cmU+PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwcGx5RXh0ZW5zaW9ucyh0ZXh0dXJlSW5mbywgXCJsb2FkVGV4dHVyZUluZm9cIiwgKGV4dGVuc2lvbikgPT4gZXh0ZW5zaW9uLmxvYWRUZXh0dXJlSW5mb0FzeW5jICYmIGV4dGVuc2lvbi5sb2FkVGV4dHVyZUluZm9Bc3luYyhjb250ZXh0LCB0ZXh0dXJlSW5mbywgYXNzaWduKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZXh0ZW5zaW9uc0xvYWRUZXh0dXJlQXN5bmMoY29udGV4dDogc3RyaW5nLCB0ZXh0dXJlOiBJVGV4dHVyZSwgYXNzaWduOiAoYmFieWxvblRleHR1cmU6IEJhc2VUZXh0dXJlKSA9PiB2b2lkKTogTnVsbGFibGU8UHJvbWlzZTxCYXNlVGV4dHVyZT4+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXBwbHlFeHRlbnNpb25zKHRleHR1cmUsIFwibG9hZFRleHR1cmVcIiwgKGV4dGVuc2lvbikgPT4gZXh0ZW5zaW9uLl9sb2FkVGV4dHVyZUFzeW5jICYmIGV4dGVuc2lvbi5fbG9hZFRleHR1cmVBc3luYyhjb250ZXh0LCB0ZXh0dXJlLCBhc3NpZ24pKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9leHRlbnNpb25zTG9hZEFuaW1hdGlvbkFzeW5jKGNvbnRleHQ6IHN0cmluZywgYW5pbWF0aW9uOiBJQW5pbWF0aW9uKTogTnVsbGFibGU8UHJvbWlzZTxBbmltYXRpb25Hcm91cD4+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXBwbHlFeHRlbnNpb25zKGFuaW1hdGlvbiwgXCJsb2FkQW5pbWF0aW9uXCIsIChleHRlbnNpb24pID0+IGV4dGVuc2lvbi5sb2FkQW5pbWF0aW9uQXN5bmMgJiYgZXh0ZW5zaW9uLmxvYWRBbmltYXRpb25Bc3luYyhjb250ZXh0LCBhbmltYXRpb24pKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9leHRlbnNpb25zTG9hZEFuaW1hdGlvbkNoYW5uZWxBc3luYyhcclxuICAgICAgICBjb250ZXh0OiBzdHJpbmcsXHJcbiAgICAgICAgYW5pbWF0aW9uQ29udGV4dDogc3RyaW5nLFxyXG4gICAgICAgIGFuaW1hdGlvbjogSUFuaW1hdGlvbixcclxuICAgICAgICBjaGFubmVsOiBJQW5pbWF0aW9uQ2hhbm5lbCxcclxuICAgICAgICBvbkxvYWQ6IChiYWJ5bG9uQW5pbWF0YWJsZTogSUFuaW1hdGFibGUsIGJhYnlsb25BbmltYXRpb246IEFuaW1hdGlvbikgPT4gdm9pZFxyXG4gICAgKTogTnVsbGFibGU8UHJvbWlzZTx2b2lkPj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hcHBseUV4dGVuc2lvbnMoXHJcbiAgICAgICAgICAgIGFuaW1hdGlvbixcclxuICAgICAgICAgICAgXCJsb2FkQW5pbWF0aW9uQ2hhbm5lbFwiLFxyXG4gICAgICAgICAgICAoZXh0ZW5zaW9uKSA9PiBleHRlbnNpb24uX2xvYWRBbmltYXRpb25DaGFubmVsQXN5bmMgJiYgZXh0ZW5zaW9uLl9sb2FkQW5pbWF0aW9uQ2hhbm5lbEFzeW5jKGNvbnRleHQsIGFuaW1hdGlvbkNvbnRleHQsIGFuaW1hdGlvbiwgY2hhbm5lbCwgb25Mb2FkKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZXh0ZW5zaW9uc0xvYWRTa2luQXN5bmMoY29udGV4dDogc3RyaW5nLCBub2RlOiBJTm9kZSwgc2tpbjogSVNraW4pOiBOdWxsYWJsZTxQcm9taXNlPHZvaWQ+PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwcGx5RXh0ZW5zaW9ucyhza2luLCBcImxvYWRTa2luXCIsIChleHRlbnNpb24pID0+IGV4dGVuc2lvbi5fbG9hZFNraW5Bc3luYyAmJiBleHRlbnNpb24uX2xvYWRTa2luQXN5bmMoY29udGV4dCwgbm9kZSwgc2tpbikpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2V4dGVuc2lvbnNMb2FkVXJpQXN5bmMoY29udGV4dDogc3RyaW5nLCBwcm9wZXJ0eTogSVByb3BlcnR5LCB1cmk6IHN0cmluZyk6IE51bGxhYmxlPFByb21pc2U8QXJyYXlCdWZmZXJWaWV3Pj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hcHBseUV4dGVuc2lvbnMocHJvcGVydHksIFwibG9hZFVyaVwiLCAoZXh0ZW5zaW9uKSA9PiBleHRlbnNpb24uX2xvYWRVcmlBc3luYyAmJiBleHRlbnNpb24uX2xvYWRVcmlBc3luYyhjb250ZXh0LCBwcm9wZXJ0eSwgdXJpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZXh0ZW5zaW9uc0xvYWRCdWZmZXJWaWV3QXN5bmMoY29udGV4dDogc3RyaW5nLCBidWZmZXJWaWV3OiBJQnVmZmVyVmlldyk6IE51bGxhYmxlPFByb21pc2U8QXJyYXlCdWZmZXJWaWV3Pj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hcHBseUV4dGVuc2lvbnMoYnVmZmVyVmlldywgXCJsb2FkQnVmZmVyVmlld1wiLCAoZXh0ZW5zaW9uKSA9PiBleHRlbnNpb24ubG9hZEJ1ZmZlclZpZXdBc3luYyAmJiBleHRlbnNpb24ubG9hZEJ1ZmZlclZpZXdBc3luYyhjb250ZXh0LCBidWZmZXJWaWV3KSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZXh0ZW5zaW9uc0xvYWRCdWZmZXJBc3luYyhjb250ZXh0OiBzdHJpbmcsIGJ1ZmZlcjogSUJ1ZmZlciwgYnl0ZU9mZnNldDogbnVtYmVyLCBieXRlTGVuZ3RoOiBudW1iZXIpOiBOdWxsYWJsZTxQcm9taXNlPEFycmF5QnVmZmVyVmlldz4+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXBwbHlFeHRlbnNpb25zKGJ1ZmZlciwgXCJsb2FkQnVmZmVyXCIsIChleHRlbnNpb24pID0+IGV4dGVuc2lvbi5sb2FkQnVmZmVyQXN5bmMgJiYgZXh0ZW5zaW9uLmxvYWRCdWZmZXJBc3luYyhjb250ZXh0LCBidWZmZXIsIGJ5dGVPZmZzZXQsIGJ5dGVMZW5ndGgpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEhlbHBlciBtZXRob2QgY2FsbGVkIGJ5IGEgbG9hZGVyIGV4dGVuc2lvbiB0byBsb2FkIGFuIGdsVEYgZXh0ZW5zaW9uLlxyXG4gICAgICogQHBhcmFtIGNvbnRleHQgVGhlIGNvbnRleHQgd2hlbiBsb2FkaW5nIHRoZSBhc3NldFxyXG4gICAgICogQHBhcmFtIHByb3BlcnR5IFRoZSBnbFRGIHByb3BlcnR5IHRvIGxvYWQgdGhlIGV4dGVuc2lvbiBmcm9tXHJcbiAgICAgKiBAcGFyYW0gZXh0ZW5zaW9uTmFtZSBUaGUgbmFtZSBvZiB0aGUgZXh0ZW5zaW9uIHRvIGxvYWRcclxuICAgICAqIEBwYXJhbSBhY3Rpb25Bc3luYyBUaGUgYWN0aW9uIHRvIHJ1blxyXG4gICAgICogQHJldHVybnMgVGhlIHByb21pc2UgcmV0dXJuZWQgYnkgYWN0aW9uQXN5bmMgb3IgbnVsbCBpZiB0aGUgZXh0ZW5zaW9uIGRvZXMgbm90IGV4aXN0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgTG9hZEV4dGVuc2lvbkFzeW5jPFRFeHRlbnNpb24gPSBhbnksIFRSZXN1bHQgPSB2b2lkPihcclxuICAgICAgICBjb250ZXh0OiBzdHJpbmcsXHJcbiAgICAgICAgcHJvcGVydHk6IElQcm9wZXJ0eSxcclxuICAgICAgICBleHRlbnNpb25OYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgYWN0aW9uQXN5bmM6IChleHRlbnNpb25Db250ZXh0OiBzdHJpbmcsIGV4dGVuc2lvbjogVEV4dGVuc2lvbikgPT4gTnVsbGFibGU8UHJvbWlzZTxUUmVzdWx0Pj5cclxuICAgICk6IE51bGxhYmxlPFByb21pc2U8VFJlc3VsdD4+IHtcclxuICAgICAgICBpZiAoIXByb3BlcnR5LmV4dGVuc2lvbnMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBleHRlbnNpb25zID0gcHJvcGVydHkuZXh0ZW5zaW9ucztcclxuXHJcbiAgICAgICAgY29uc3QgZXh0ZW5zaW9uID0gZXh0ZW5zaW9uc1tleHRlbnNpb25OYW1lXSBhcyBURXh0ZW5zaW9uO1xyXG4gICAgICAgIGlmICghZXh0ZW5zaW9uKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGFjdGlvbkFzeW5jKGAke2NvbnRleHR9L2V4dGVuc2lvbnMvJHtleHRlbnNpb25OYW1lfWAsIGV4dGVuc2lvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIZWxwZXIgbWV0aG9kIGNhbGxlZCBieSBhIGxvYWRlciBleHRlbnNpb24gdG8gbG9hZCBhIGdsVEYgZXh0cmEuXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBUaGUgY29udGV4dCB3aGVuIGxvYWRpbmcgdGhlIGFzc2V0XHJcbiAgICAgKiBAcGFyYW0gcHJvcGVydHkgVGhlIGdsVEYgcHJvcGVydHkgdG8gbG9hZCB0aGUgZXh0cmEgZnJvbVxyXG4gICAgICogQHBhcmFtIGV4dGVuc2lvbk5hbWUgVGhlIG5hbWUgb2YgdGhlIGV4dGVuc2lvbiB0byBsb2FkXHJcbiAgICAgKiBAcGFyYW0gYWN0aW9uQXN5bmMgVGhlIGFjdGlvbiB0byBydW5cclxuICAgICAqIEByZXR1cm5zIFRoZSBwcm9taXNlIHJldHVybmVkIGJ5IGFjdGlvbkFzeW5jIG9yIG51bGwgaWYgdGhlIGV4dHJhIGRvZXMgbm90IGV4aXN0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgTG9hZEV4dHJhQXN5bmM8VEV4dHJhID0gYW55LCBUUmVzdWx0ID0gdm9pZD4oXHJcbiAgICAgICAgY29udGV4dDogc3RyaW5nLFxyXG4gICAgICAgIHByb3BlcnR5OiBJUHJvcGVydHksXHJcbiAgICAgICAgZXh0ZW5zaW9uTmFtZTogc3RyaW5nLFxyXG4gICAgICAgIGFjdGlvbkFzeW5jOiAoZXh0cmFDb250ZXh0OiBzdHJpbmcsIGV4dHJhOiBURXh0cmEpID0+IE51bGxhYmxlPFByb21pc2U8VFJlc3VsdD4+XHJcbiAgICApOiBOdWxsYWJsZTxQcm9taXNlPFRSZXN1bHQ+PiB7XHJcbiAgICAgICAgaWYgKCFwcm9wZXJ0eS5leHRyYXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBleHRyYXMgPSBwcm9wZXJ0eS5leHRyYXM7XHJcblxyXG4gICAgICAgIGNvbnN0IGV4dHJhID0gZXh0cmFzW2V4dGVuc2lvbk5hbWVdIGFzIFRFeHRyYTtcclxuICAgICAgICBpZiAoIWV4dHJhKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGFjdGlvbkFzeW5jKGAke2NvbnRleHR9L2V4dHJhcy8ke2V4dGVuc2lvbk5hbWV9YCwgZXh0cmEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIGZvciBwcmVzZW5jZSBvZiBhbiBleHRlbnNpb24uXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgZXh0ZW5zaW9uIHRvIGNoZWNrXHJcbiAgICAgKiBAcmV0dXJucyBBIGJvb2xlYW4gaW5kaWNhdGluZyB0aGUgcHJlc2VuY2Ugb2YgdGhlIGdpdmVuIGV4dGVuc2lvbiBuYW1lIGluIGBleHRlbnNpb25zVXNlZGBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGlzRXh0ZW5zaW9uVXNlZChuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gISF0aGlzLl9nbHRmLmV4dGVuc2lvbnNVc2VkICYmIHRoaXMuX2dsdGYuZXh0ZW5zaW9uc1VzZWQuaW5kZXhPZihuYW1lKSAhPT0gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbmNyZW1lbnRzIHRoZSBpbmRlbnRhdGlvbiBsZXZlbCBhbmQgbG9ncyBhIG1lc3NhZ2UuXHJcbiAgICAgKiBAcGFyYW0gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBsb2dcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvZ09wZW4obWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fcGFyZW50Ll9sb2dPcGVuKG1lc3NhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVjcmVtZW50cyB0aGUgaW5kZW50YXRpb24gbGV2ZWwuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2dDbG9zZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9wYXJlbnQuX2xvZ0Nsb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb2dzIGEgbWVzc2FnZVxyXG4gICAgICogQHBhcmFtIG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gbG9nXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2cobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fcGFyZW50Ll9sb2cobWVzc2FnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTdGFydHMgYSBwZXJmb3JtYW5jZSBjb3VudGVyLlxyXG4gICAgICogQHBhcmFtIGNvdW50ZXJOYW1lIFRoZSBuYW1lIG9mIHRoZSBwZXJmb3JtYW5jZSBjb3VudGVyXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGFydFBlcmZvcm1hbmNlQ291bnRlcihjb3VudGVyTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fcGFyZW50Ll9zdGFydFBlcmZvcm1hbmNlQ291bnRlcihjb3VudGVyTmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFbmRzIGEgcGVyZm9ybWFuY2UgY291bnRlci5cclxuICAgICAqIEBwYXJhbSBjb3VudGVyTmFtZSBUaGUgbmFtZSBvZiB0aGUgcGVyZm9ybWFuY2UgY291bnRlclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZW5kUGVyZm9ybWFuY2VDb3VudGVyKGNvdW50ZXJOYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9wYXJlbnQuX2VuZFBlcmZvcm1hbmNlQ291bnRlcihjb3VudGVyTmFtZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkdMVEZGaWxlTG9hZGVyLl9DcmVhdGVHTFRGMkxvYWRlciA9IChwYXJlbnQpID0+IG5ldyBHTFRGTG9hZGVyKHBhcmVudCk7XHJcbiIsImltcG9ydCB7IEFuaW1hdGlvbiB9IGZyb20gXCJjb3JlL0FuaW1hdGlvbnMvYW5pbWF0aW9uXCI7XHJcbmltcG9ydCB7IFF1YXRlcm5pb24sIFZlY3RvcjMgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLnZlY3RvclwiO1xyXG5pbXBvcnQgdHlwZSB7IElOb2RlIH0gZnJvbSBcIi4vZ2xURkxvYWRlckludGVyZmFjZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBJQW5pbWF0YWJsZSB9IGZyb20gXCJjb3JlL0FuaW1hdGlvbnMvYW5pbWF0YWJsZS5pbnRlcmZhY2VcIjtcclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuZXhwb3J0IHR5cGUgR2V0VmFsdWVGbiA9ICh0YXJnZXQ6IGFueSwgc291cmNlOiBGbG9hdDMyQXJyYXksIG9mZnNldDogbnVtYmVyLCBzY2FsZTogbnVtYmVyKSA9PiBhbnk7XHJcblxyXG4vKiogQGludGVybmFsICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRWZWN0b3IzKF90YXJnZXQ6IGFueSwgc291cmNlOiBGbG9hdDMyQXJyYXksIG9mZnNldDogbnVtYmVyLCBzY2FsZTogbnVtYmVyKTogVmVjdG9yMyB7XHJcbiAgICByZXR1cm4gVmVjdG9yMy5Gcm9tQXJyYXkoc291cmNlLCBvZmZzZXQpLnNjYWxlSW5QbGFjZShzY2FsZSk7XHJcbn1cclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFF1YXRlcm5pb24oX3RhcmdldDogYW55LCBzb3VyY2U6IEZsb2F0MzJBcnJheSwgb2Zmc2V0OiBudW1iZXIsIHNjYWxlOiBudW1iZXIpOiBRdWF0ZXJuaW9uIHtcclxuICAgIHJldHVybiBRdWF0ZXJuaW9uLkZyb21BcnJheShzb3VyY2UsIG9mZnNldCkuc2NhbGVJblBsYWNlKHNjYWxlKTtcclxufVxyXG5cclxuLyoqIEBpbnRlcm5hbCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2VpZ2h0cyh0YXJnZXQ6IElOb2RlLCBzb3VyY2U6IEZsb2F0MzJBcnJheSwgb2Zmc2V0OiBudW1iZXIsIHNjYWxlOiBudW1iZXIpOiBBcnJheTxudW1iZXI+IHtcclxuICAgIGNvbnN0IHZhbHVlID0gbmV3IEFycmF5PG51bWJlcj4odGFyZ2V0Ll9udW1Nb3JwaFRhcmdldHMhKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB2YWx1ZVtpXSA9IHNvdXJjZVtvZmZzZXQrK10gKiBzY2FsZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn1cclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFuaW1hdGlvblByb3BlcnR5SW5mbyB7XHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IHR5cGU6IG51bWJlcixcclxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZTogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBnZXRWYWx1ZTogR2V0VmFsdWVGbixcclxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgZ2V0U3RyaWRlOiAodGFyZ2V0OiBhbnkpID0+IG51bWJlclxyXG4gICAgKSB7fVxyXG5cclxuICAgIHByb3RlY3RlZCBfYnVpbGRBbmltYXRpb24obmFtZTogc3RyaW5nLCBmcHM6IG51bWJlciwga2V5czogYW55W10pOiBBbmltYXRpb24ge1xyXG4gICAgICAgIGNvbnN0IGJhYnlsb25BbmltYXRpb24gPSBuZXcgQW5pbWF0aW9uKG5hbWUsIHRoaXMubmFtZSwgZnBzLCB0aGlzLnR5cGUpO1xyXG4gICAgICAgIGJhYnlsb25BbmltYXRpb24uc2V0S2V5cyhrZXlzKTtcclxuICAgICAgICByZXR1cm4gYmFieWxvbkFuaW1hdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgYnVpbGRBbmltYXRpb25zKHRhcmdldDogYW55LCBuYW1lOiBzdHJpbmcsIGZwczogbnVtYmVyLCBrZXlzOiBhbnlbXSwgY2FsbGJhY2s6IChiYWJ5bG9uQW5pbWF0YWJsZTogSUFuaW1hdGFibGUsIGJhYnlsb25BbmltYXRpb246IEFuaW1hdGlvbikgPT4gdm9pZCk6IHZvaWQ7XHJcbn1cclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuZXhwb3J0IGNsYXNzIFRyYW5zZm9ybU5vZGVBbmltYXRpb25Qcm9wZXJ0eUluZm8gZXh0ZW5kcyBBbmltYXRpb25Qcm9wZXJ0eUluZm8ge1xyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGJ1aWxkQW5pbWF0aW9ucyh0YXJnZXQ6IElOb2RlLCBuYW1lOiBzdHJpbmcsIGZwczogbnVtYmVyLCBrZXlzOiBhbnlbXSwgY2FsbGJhY2s6IChiYWJ5bG9uQW5pbWF0YWJsZTogSUFuaW1hdGFibGUsIGJhYnlsb25BbmltYXRpb246IEFuaW1hdGlvbikgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIGNhbGxiYWNrKHRhcmdldC5fYmFieWxvblRyYW5zZm9ybU5vZGUhLCB0aGlzLl9idWlsZEFuaW1hdGlvbihuYW1lLCBmcHMsIGtleXMpKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqIEBpbnRlcm5hbCAqL1xyXG5leHBvcnQgY2xhc3MgV2VpZ2h0QW5pbWF0aW9uUHJvcGVydHlJbmZvIGV4dGVuZHMgQW5pbWF0aW9uUHJvcGVydHlJbmZvIHtcclxuICAgIHB1YmxpYyBidWlsZEFuaW1hdGlvbnModGFyZ2V0OiBJTm9kZSwgbmFtZTogc3RyaW5nLCBmcHM6IG51bWJlciwga2V5czogYW55W10sIGNhbGxiYWNrOiAoYmFieWxvbkFuaW1hdGFibGU6IElBbmltYXRhYmxlLCBiYWJ5bG9uQW5pbWF0aW9uOiBBbmltYXRpb24pID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGFyZ2V0Ll9udW1Nb3JwaFRhcmdldHMpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgdGFyZ2V0SW5kZXggPSAwOyB0YXJnZXRJbmRleCA8IHRhcmdldC5fbnVtTW9ycGhUYXJnZXRzOyB0YXJnZXRJbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBiYWJ5bG9uQW5pbWF0aW9uID0gbmV3IEFuaW1hdGlvbihgJHtuYW1lfV8ke3RhcmdldEluZGV4fWAsIHRoaXMubmFtZSwgZnBzLCB0aGlzLnR5cGUpO1xyXG4gICAgICAgICAgICAgICAgYmFieWxvbkFuaW1hdGlvbi5zZXRLZXlzKFxyXG4gICAgICAgICAgICAgICAgICAgIGtleXMubWFwKChrZXkpID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lOiBrZXkuZnJhbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluVGFuZ2VudDoga2V5LmluVGFuZ2VudCA/IGtleS5pblRhbmdlbnRbdGFyZ2V0SW5kZXhdIDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZToga2V5LnZhbHVlW3RhcmdldEluZGV4XSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0VGFuZ2VudDoga2V5Lm91dFRhbmdlbnQgPyBrZXkub3V0VGFuZ2VudFt0YXJnZXRJbmRleF0gOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGludGVycG9sYXRpb246IGtleS5pbnRlcnBvbGF0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0Ll9wcmltaXRpdmVCYWJ5bG9uTWVzaGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBiYWJ5bG9uTWVzaCBvZiB0YXJnZXQuX3ByaW1pdGl2ZUJhYnlsb25NZXNoZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJhYnlsb25NZXNoLm1vcnBoVGFyZ2V0TWFuYWdlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9ycGhUYXJnZXQgPSBiYWJ5bG9uTWVzaC5tb3JwaFRhcmdldE1hbmFnZXIuZ2V0VGFyZ2V0KHRhcmdldEluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhYnlsb25BbmltYXRpb25DbG9uZSA9IGJhYnlsb25BbmltYXRpb24uY2xvbmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vcnBoVGFyZ2V0LmFuaW1hdGlvbnMucHVzaChiYWJ5bG9uQW5pbWF0aW9uQ2xvbmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sobW9ycGhUYXJnZXQsIGJhYnlsb25BbmltYXRpb25DbG9uZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuZXhwb3J0IGNvbnN0IG5vZGVBbmltYXRpb25EYXRhID0ge1xyXG4gICAgdHJhbnNsYXRpb246IFtuZXcgVHJhbnNmb3JtTm9kZUFuaW1hdGlvblByb3BlcnR5SW5mbyhBbmltYXRpb24uQU5JTUFUSU9OVFlQRV9WRUNUT1IzLCBcInBvc2l0aW9uXCIsIGdldFZlY3RvcjMsICgpID0+IDMpXSxcclxuICAgIHJvdGF0aW9uOiBbbmV3IFRyYW5zZm9ybU5vZGVBbmltYXRpb25Qcm9wZXJ0eUluZm8oQW5pbWF0aW9uLkFOSU1BVElPTlRZUEVfUVVBVEVSTklPTiwgXCJyb3RhdGlvblF1YXRlcm5pb25cIiwgZ2V0UXVhdGVybmlvbiwgKCkgPT4gNCldLFxyXG4gICAgc2NhbGU6IFtuZXcgVHJhbnNmb3JtTm9kZUFuaW1hdGlvblByb3BlcnR5SW5mbyhBbmltYXRpb24uQU5JTUFUSU9OVFlQRV9WRUNUT1IzLCBcInNjYWxpbmdcIiwgZ2V0VmVjdG9yMywgKCkgPT4gMyldLFxyXG4gICAgd2VpZ2h0czogW25ldyBXZWlnaHRBbmltYXRpb25Qcm9wZXJ0eUluZm8oQW5pbWF0aW9uLkFOSU1BVElPTlRZUEVfRkxPQVQsIFwiaW5mbHVlbmNlXCIsIGdldFdlaWdodHMsICh0YXJnZXQpID0+IHRhcmdldC5fbnVtTW9ycGhUYXJnZXRzISldLFxyXG59O1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8taW50ZXJuYWwtbW9kdWxlcyAqL1xyXG5leHBvcnQgKiBmcm9tIFwiLi9nbFRGTG9hZGVyXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2dsVEZMb2FkZXJFeHRlbnNpb25cIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vZ2xURkxvYWRlckludGVyZmFjZXNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vRXh0ZW5zaW9ucy9pbmRleFwiO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnMgKi9cclxuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uICovXHJcbmltcG9ydCB0eXBlICogYXMgR0xURjIgZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcImNvcmUvdHlwZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBPYnNlcnZlciB9IGZyb20gXCJjb3JlL01pc2Mvb2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcImNvcmUvTWlzYy9vYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFRvb2xzIH0gZnJvbSBcImNvcmUvTWlzYy90b29sc1wiO1xyXG5pbXBvcnQgdHlwZSB7IENhbWVyYSB9IGZyb20gXCJjb3JlL0NhbWVyYXMvY2FtZXJhXCI7XHJcbmltcG9ydCB0eXBlIHsgQmFzZVRleHR1cmUgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvYmFzZVRleHR1cmVcIjtcclxuaW1wb3J0IHR5cGUgeyBNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgdHlwZSB7IEFic3RyYWN0TWVzaCB9IGZyb20gXCJjb3JlL01lc2hlcy9hYnN0cmFjdE1lc2hcIjtcclxuaW1wb3J0IHR5cGUge1xyXG4gICAgSVNjZW5lTG9hZGVyUGx1Z2luRmFjdG9yeSxcclxuICAgIElTY2VuZUxvYWRlclBsdWdpbixcclxuICAgIElTY2VuZUxvYWRlclBsdWdpbkFzeW5jLFxyXG4gICAgSVNjZW5lTG9hZGVyUHJvZ3Jlc3NFdmVudCxcclxuICAgIElTY2VuZUxvYWRlclBsdWdpbkV4dGVuc2lvbnMsXHJcbiAgICBJU2NlbmVMb2FkZXJBc3luY1Jlc3VsdCxcclxufSBmcm9tIFwiY29yZS9Mb2FkaW5nL3NjZW5lTG9hZGVyXCI7XHJcbmltcG9ydCB7IFNjZW5lTG9hZGVyIH0gZnJvbSBcImNvcmUvTG9hZGluZy9zY2VuZUxvYWRlclwiO1xyXG5pbXBvcnQgeyBBc3NldENvbnRhaW5lciB9IGZyb20gXCJjb3JlL2Fzc2V0Q29udGFpbmVyXCI7XHJcbmltcG9ydCB0eXBlIHsgU2NlbmUsIElEaXNwb3NhYmxlIH0gZnJvbSBcImNvcmUvc2NlbmVcIjtcclxuaW1wb3J0IHR5cGUgeyBXZWJSZXF1ZXN0IH0gZnJvbSBcImNvcmUvTWlzYy93ZWJSZXF1ZXN0XCI7XHJcbmltcG9ydCB0eXBlIHsgSUZpbGVSZXF1ZXN0IH0gZnJvbSBcImNvcmUvTWlzYy9maWxlUmVxdWVzdFwiO1xyXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiY29yZS9NaXNjL2xvZ2dlclwiO1xyXG5pbXBvcnQgdHlwZSB7IElEYXRhQnVmZmVyIH0gZnJvbSBcImNvcmUvTWlzYy9kYXRhUmVhZGVyXCI7XHJcbmltcG9ydCB7IERhdGFSZWFkZXIgfSBmcm9tIFwiY29yZS9NaXNjL2RhdGFSZWFkZXJcIjtcclxuaW1wb3J0IHsgR0xURlZhbGlkYXRpb24gfSBmcm9tIFwiLi9nbFRGVmFsaWRhdGlvblwiO1xyXG5pbXBvcnQgdHlwZSB7IExvYWRGaWxlRXJyb3IgfSBmcm9tIFwiY29yZS9NaXNjL2ZpbGVUb29sc1wiO1xyXG5pbXBvcnQgeyBEZWNvZGVCYXNlNjRVcmxUb0JpbmFyeSB9IGZyb20gXCJjb3JlL01pc2MvZmlsZVRvb2xzXCI7XHJcbmltcG9ydCB7IFJ1bnRpbWVFcnJvciwgRXJyb3JDb2RlcyB9IGZyb20gXCJjb3JlL01pc2MvZXJyb3JcIjtcclxuaW1wb3J0IHR5cGUgeyBUcmFuc2Zvcm1Ob2RlIH0gZnJvbSBcImNvcmUvTWVzaGVzL3RyYW5zZm9ybU5vZGVcIjtcclxuaW1wb3J0IHR5cGUgeyBNb3JwaFRhcmdldE1hbmFnZXIgfSBmcm9tIFwiY29yZS9Nb3JwaC9tb3JwaFRhcmdldE1hbmFnZXJcIjtcclxuXHJcbmludGVyZmFjZSBJRmlsZVJlcXVlc3RJbmZvIGV4dGVuZHMgSUZpbGVSZXF1ZXN0IHtcclxuICAgIF9sZW5ndGhDb21wdXRhYmxlPzogYm9vbGVhbjtcclxuICAgIF9sb2FkZWQ/OiBudW1iZXI7XHJcbiAgICBfdG90YWw/OiBudW1iZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlYWRBc3luYyhhcnJheUJ1ZmZlcjogQXJyYXlCdWZmZXIsIGJ5dGVPZmZzZXQ6IG51bWJlciwgYnl0ZUxlbmd0aDogbnVtYmVyKTogUHJvbWlzZTxVaW50OEFycmF5PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIsIGJ5dGVPZmZzZXQsIGJ5dGVMZW5ndGgpKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlYWRWaWV3QXN5bmMoYXJyYXlCdWZmZXJWaWV3OiBBcnJheUJ1ZmZlclZpZXcsIGJ5dGVPZmZzZXQ6IG51bWJlciwgYnl0ZUxlbmd0aDogbnVtYmVyKTogUHJvbWlzZTxVaW50OEFycmF5PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGlmICgoYXJyYXlCdWZmZXJWaWV3IGFzIFVpbnQ4QXJyYXkpLmJ5dGVPZmZzZXQgKyBieXRlTGVuZ3RoID4gYXJyYXlCdWZmZXJWaWV3LmJ5dGVMZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQXJyYXkgbGVuZ3RoIG91dCBvZiBib3VuZHMuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgVWludDhBcnJheShhcnJheUJ1ZmZlclZpZXcuYnVmZmVyLCAoYXJyYXlCdWZmZXJWaWV3IGFzIFVpbnQ4QXJyYXkpLmJ5dGVPZmZzZXQgKyBieXRlT2Zmc2V0LCBieXRlTGVuZ3RoKSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogTW9kZSB0aGF0IGRldGVybWluZXMgdGhlIGNvb3JkaW5hdGUgc3lzdGVtIHRvIHVzZS5cclxuICovXHJcbmV4cG9ydCBlbnVtIEdMVEZMb2FkZXJDb29yZGluYXRlU3lzdGVtTW9kZSB7XHJcbiAgICAvKipcclxuICAgICAqIEF1dG9tYXRpY2FsbHkgY29udmVydCB0aGUgZ2xURiByaWdodC1oYW5kZWQgZGF0YSB0byB0aGUgYXBwcm9wcmlhdGUgc3lzdGVtIGJhc2VkIG9uIHRoZSBjdXJyZW50IGNvb3JkaW5hdGUgc3lzdGVtIG1vZGUgb2YgdGhlIHNjZW5lLlxyXG4gICAgICovXHJcbiAgICBBVVRPLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgdXNlUmlnaHRIYW5kZWRTeXN0ZW0gZmxhZyBvbiB0aGUgc2NlbmUuXHJcbiAgICAgKi9cclxuICAgIEZPUkNFX1JJR0hUX0hBTkRFRCxcclxufVxyXG5cclxuLyoqXHJcbiAqIE1vZGUgdGhhdCBkZXRlcm1pbmVzIHdoYXQgYW5pbWF0aW9ucyB3aWxsIHN0YXJ0LlxyXG4gKi9cclxuZXhwb3J0IGVudW0gR0xURkxvYWRlckFuaW1hdGlvblN0YXJ0TW9kZSB7XHJcbiAgICAvKipcclxuICAgICAqIE5vIGFuaW1hdGlvbiB3aWxsIHN0YXJ0LlxyXG4gICAgICovXHJcbiAgICBOT05FLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGZpcnN0IGFuaW1hdGlvbiB3aWxsIHN0YXJ0LlxyXG4gICAgICovXHJcbiAgICBGSVJTVCxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEFsbCBhbmltYXRpb25zIHdpbGwgc3RhcnQuXHJcbiAgICAgKi9cclxuICAgIEFMTCxcclxufVxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSB0aGF0IGNvbnRhaW5zIHRoZSBkYXRhIGZvciB0aGUgZ2xURiBhc3NldC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUdMVEZMb2FkZXJEYXRhIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIG9iamVjdCB0aGF0IHJlcHJlc2VudHMgdGhlIGdsVEYgSlNPTi5cclxuICAgICAqL1xyXG4gICAganNvbjogT2JqZWN0O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIEJJTiBjaHVuayBvZiBhIGJpbmFyeSBnbFRGLlxyXG4gICAgICovXHJcbiAgICBiaW46IE51bGxhYmxlPElEYXRhQnVmZmVyPjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgZXh0ZW5kaW5nIHRoZSBsb2FkZXIuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElHTFRGTG9hZGVyRXh0ZW5zaW9uIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIG5hbWUgb2YgdGhpcyBleHRlbnNpb24uXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyBlbmFibGVkLlxyXG4gICAgICovXHJcbiAgICBlbmFibGVkOiBib29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyB0aGUgb3JkZXIgb2YgdGhpcyBleHRlbnNpb24uXHJcbiAgICAgKiBUaGUgbG9hZGVyIHNvcnRzIHRoZSBleHRlbnNpb25zIHVzaW5nIHRoZXNlIHZhbHVlcyB3aGVuIGxvYWRpbmcuXHJcbiAgICAgKi9cclxuICAgIG9yZGVyPzogbnVtYmVyO1xyXG59XHJcblxyXG4vKipcclxuICogTG9hZGVyIHN0YXRlLlxyXG4gKi9cclxuZXhwb3J0IGVudW0gR0xURkxvYWRlclN0YXRlIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIGFzc2V0IGlzIGxvYWRpbmcuXHJcbiAgICAgKi9cclxuICAgIExPQURJTkcsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgYXNzZXQgaXMgcmVhZHkgZm9yIHJlbmRlcmluZy5cclxuICAgICAqL1xyXG4gICAgUkVBRFksXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgYXNzZXQgaXMgY29tcGxldGVseSBsb2FkZWQuXHJcbiAgICAgKi9cclxuICAgIENPTVBMRVRFLFxyXG59XHJcblxyXG4vKiogQGludGVybmFsICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUdMVEZMb2FkZXIgZXh0ZW5kcyBJRGlzcG9zYWJsZSB7XHJcbiAgICBpbXBvcnRNZXNoQXN5bmM6IChcclxuICAgICAgICBtZXNoZXNOYW1lczogYW55LFxyXG4gICAgICAgIHNjZW5lOiBTY2VuZSxcclxuICAgICAgICBjb250YWluZXI6IE51bGxhYmxlPEFzc2V0Q29udGFpbmVyPixcclxuICAgICAgICBkYXRhOiBJR0xURkxvYWRlckRhdGEsXHJcbiAgICAgICAgcm9vdFVybDogc3RyaW5nLFxyXG4gICAgICAgIG9uUHJvZ3Jlc3M/OiAoZXZlbnQ6IElTY2VuZUxvYWRlclByb2dyZXNzRXZlbnQpID0+IHZvaWQsXHJcbiAgICAgICAgZmlsZU5hbWU/OiBzdHJpbmdcclxuICAgICkgPT4gUHJvbWlzZTxJU2NlbmVMb2FkZXJBc3luY1Jlc3VsdD47XHJcbiAgICBsb2FkQXN5bmM6IChzY2VuZTogU2NlbmUsIGRhdGE6IElHTFRGTG9hZGVyRGF0YSwgcm9vdFVybDogc3RyaW5nLCBvblByb2dyZXNzPzogKGV2ZW50OiBJU2NlbmVMb2FkZXJQcm9ncmVzc0V2ZW50KSA9PiB2b2lkLCBmaWxlTmFtZT86IHN0cmluZykgPT4gUHJvbWlzZTx2b2lkPjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEZpbGUgbG9hZGVyIGZvciBsb2FkaW5nIGdsVEYgZmlsZXMgaW50byBhIHNjZW5lLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEdMVEZGaWxlTG9hZGVyIGltcGxlbWVudHMgSURpc3Bvc2FibGUsIElTY2VuZUxvYWRlclBsdWdpbkFzeW5jLCBJU2NlbmVMb2FkZXJQbHVnaW5GYWN0b3J5IHtcclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgX0NyZWF0ZUdMVEYxTG9hZGVyOiAocGFyZW50OiBHTFRGRmlsZUxvYWRlcikgPT4gSUdMVEZMb2FkZXI7XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBfQ3JlYXRlR0xURjJMb2FkZXI6IChwYXJlbnQ6IEdMVEZGaWxlTG9hZGVyKSA9PiBJR0xURkxvYWRlcjtcclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gQ29tbW9uIG9wdGlvbnNcclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSYWlzZWQgd2hlbiB0aGUgYXNzZXQgaGFzIGJlZW4gcGFyc2VkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvblBhcnNlZE9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZTxJR0xURkxvYWRlckRhdGE+KCk7XHJcblxyXG4gICAgcHJpdmF0ZSBfb25QYXJzZWRPYnNlcnZlcjogTnVsbGFibGU8T2JzZXJ2ZXI8SUdMVEZMb2FkZXJEYXRhPj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSYWlzZWQgd2hlbiB0aGUgYXNzZXQgaGFzIGJlZW4gcGFyc2VkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgb25QYXJzZWQoY2FsbGJhY2s6IChsb2FkZXJEYXRhOiBJR0xURkxvYWRlckRhdGEpID0+IHZvaWQpIHtcclxuICAgICAgICBpZiAodGhpcy5fb25QYXJzZWRPYnNlcnZlcikge1xyXG4gICAgICAgICAgICB0aGlzLm9uUGFyc2VkT2JzZXJ2YWJsZS5yZW1vdmUodGhpcy5fb25QYXJzZWRPYnNlcnZlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX29uUGFyc2VkT2JzZXJ2ZXIgPSB0aGlzLm9uUGFyc2VkT2JzZXJ2YWJsZS5hZGQoY2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS1cclxuICAgIC8vIFYxIG9wdGlvbnNcclxuICAgIC8vIC0tLS0tLS0tLS1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCB0aGlzIHByb3BlcnR5IHRvIGZhbHNlIHRvIGRpc2FibGUgaW5jcmVtZW50YWwgbG9hZGluZyB3aGljaCBkZWxheXMgdGhlIGxvYWRlciBmcm9tIGNhbGxpbmcgdGhlIHN1Y2Nlc3MgY2FsbGJhY2sgdW50aWwgYWZ0ZXIgbG9hZGluZyB0aGUgbWVzaGVzIGFuZCBzaGFkZXJzLlxyXG4gICAgICogVGV4dHVyZXMgYWx3YXlzIGxvYWRzIGFzeW5jaHJvbm91c2x5LiBGb3IgZXhhbXBsZSwgdGhlIHN1Y2Nlc3MgY2FsbGJhY2sgY2FuIGNvbXB1dGUgdGhlIGJvdW5kaW5nIGluZm9ybWF0aW9uIG9mIHRoZSBsb2FkZWQgbWVzaGVzIHdoZW4gaW5jcmVtZW50YWwgbG9hZGluZyBpcyBkaXNhYmxlZC5cclxuICAgICAqIERlZmF1bHRzIHRvIHRydWUuXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBJbmNyZW1lbnRhbExvYWRpbmcgPSB0cnVlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IHRoaXMgcHJvcGVydHkgdG8gdHJ1ZSBpbiBvcmRlciB0byB3b3JrIHdpdGggaG9tb2dlbmVvdXMgY29vcmRpbmF0ZXMsIGF2YWlsYWJsZSB3aXRoIHNvbWUgY29udmVydGVycyBhbmQgZXhwb3J0ZXJzLlxyXG4gICAgICogRGVmYXVsdHMgdG8gZmFsc2UuIFNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Ib21vZ2VuZW91c19jb29yZGluYXRlcy5cclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEhvbW9nZW5lb3VzQ29vcmRpbmF0ZXMgPSBmYWxzZTtcclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tXHJcbiAgICAvLyBWMiBvcHRpb25zXHJcbiAgICAvLyAtLS0tLS0tLS0tXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgY29vcmRpbmF0ZSBzeXN0ZW0gbW9kZS4gRGVmYXVsdHMgdG8gQVVUTy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGNvb3JkaW5hdGVTeXN0ZW1Nb2RlID0gR0xURkxvYWRlckNvb3JkaW5hdGVTeXN0ZW1Nb2RlLkFVVE87XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgYW5pbWF0aW9uIHN0YXJ0IG1vZGUuIERlZmF1bHRzIHRvIEZJUlNULlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYW5pbWF0aW9uU3RhcnRNb2RlID0gR0xURkxvYWRlckFuaW1hdGlvblN0YXJ0TW9kZS5GSVJTVDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgaWYgdGhlIGxvYWRlciBzaG91bGQgY29tcGlsZSBtYXRlcmlhbHMgYmVmb3JlIHJhaXNpbmcgdGhlIHN1Y2Nlc3MgY2FsbGJhY2suIERlZmF1bHRzIHRvIGZhbHNlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY29tcGlsZU1hdGVyaWFscyA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyBpZiB0aGUgbG9hZGVyIHNob3VsZCBhbHNvIGNvbXBpbGUgbWF0ZXJpYWxzIHdpdGggY2xpcCBwbGFuZXMuIERlZmF1bHRzIHRvIGZhbHNlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdXNlQ2xpcFBsYW5lID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIGlmIHRoZSBsb2FkZXIgc2hvdWxkIGNvbXBpbGUgc2hhZG93IGdlbmVyYXRvcnMgYmVmb3JlIHJhaXNpbmcgdGhlIHN1Y2Nlc3MgY2FsbGJhY2suIERlZmF1bHRzIHRvIGZhbHNlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY29tcGlsZVNoYWRvd0dlbmVyYXRvcnMgPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgaWYgdGhlIEFscGhhIGJsZW5kZWQgbWF0ZXJpYWxzIGFyZSBvbmx5IGFwcGxpZWQgYXMgY292ZXJhZ2UuXHJcbiAgICAgKiBJZiBmYWxzZSwgKGRlZmF1bHQpIFRoZSBsdW1pbmFuY2Ugb2YgZWFjaCBwaXhlbCB3aWxsIHJlZHVjZSBpdHMgb3BhY2l0eSB0byBzaW11bGF0ZSB0aGUgYmVoYXZpb3VyIG9mIG1vc3QgcGh5c2ljYWwgbWF0ZXJpYWxzLlxyXG4gICAgICogSWYgdHJ1ZSwgbm8gZXh0cmEgZWZmZWN0cyBhcmUgYXBwbGllZCB0byB0cmFuc3BhcmVudCBwaXhlbHMuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB0cmFuc3BhcmVuY3lBc0NvdmVyYWdlID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIGlmIHRoZSBsb2FkZXIgc2hvdWxkIHVzZSByYW5nZSByZXF1ZXN0cyB3aGVuIGxvYWQgYmluYXJ5IGdsVEYgZmlsZXMgZnJvbSBIVFRQLlxyXG4gICAgICogRW5hYmxpbmcgd2lsbCBkaXNhYmxlIG9mZmxpbmUgc3VwcG9ydCBhbmQgZ2xURiB2YWxpZGF0b3IuXHJcbiAgICAgKiBEZWZhdWx0cyB0byBmYWxzZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHVzZVJhbmdlUmVxdWVzdHMgPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgaWYgdGhlIGxvYWRlciBzaG91bGQgY3JlYXRlIGluc3RhbmNlcyB3aGVuIG11bHRpcGxlIGdsVEYgbm9kZXMgcG9pbnQgdG8gdGhlIHNhbWUgZ2xURiBtZXNoLiBEZWZhdWx0cyB0byB0cnVlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY3JlYXRlSW5zdGFuY2VzID0gdHJ1ZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgaWYgdGhlIGxvYWRlciBzaG91bGQgYWx3YXlzIGNvbXB1dGUgdGhlIGJvdW5kaW5nIGJveGVzIG9mIG1lc2hlcyBhbmQgbm90IHVzZSB0aGUgbWluL21heCB2YWx1ZXMgZnJvbSB0aGUgcG9zaXRpb24gYWNjZXNzb3IuIERlZmF1bHRzIHRvIGZhbHNlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWx3YXlzQ29tcHV0ZUJvdW5kaW5nQm94ID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJZiB0cnVlLCBsb2FkIGFsbCBtYXRlcmlhbHMgZGVmaW5lZCBpbiB0aGUgZmlsZSwgZXZlbiBpZiBub3QgdXNlZCBieSBhbnkgbWVzaC4gRGVmYXVsdHMgdG8gZmFsc2UuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkQWxsTWF0ZXJpYWxzID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJZiB0cnVlLCBsb2FkIG9ubHkgdGhlIG1hdGVyaWFscyBkZWZpbmVkIGluIHRoZSBmaWxlLiBEZWZhdWx0cyB0byBmYWxzZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWRPbmx5TWF0ZXJpYWxzID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJZiB0cnVlLCBkbyBub3QgbG9hZCBhbnkgbWF0ZXJpYWxzIGRlZmluZWQgaW4gdGhlIGZpbGUuIERlZmF1bHRzIHRvIGZhbHNlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2tpcE1hdGVyaWFscyA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogSWYgdHJ1ZSwgbG9hZCB0aGUgY29sb3IgKGdhbW1hIGVuY29kZWQpIHRleHR1cmVzIGludG8gc1JHQiBidWZmZXJzIChpZiBzdXBwb3J0ZWQgYnkgdGhlIEdQVSksIHdoaWNoIHdpbGwgeWllbGQgbW9yZSBhY2N1cmF0ZSByZXN1bHRzIHdoZW4gc2FtcGxpbmcgdGhlIHRleHR1cmUuIERlZmF1bHRzIHRvIHRydWUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB1c2VTUkdCQnVmZmVycyA9IHRydWU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBXaGVuIGxvYWRpbmcgZ2xURiBhbmltYXRpb25zLCB3aGljaCBhcmUgZGVmaW5lZCBpbiBzZWNvbmRzLCB0YXJnZXQgdGhlbSB0byB0aGlzIEZQUy4gRGVmYXVsdHMgdG8gNjAuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB0YXJnZXRGcHMgPSA2MDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgaWYgdGhlIGxvYWRlciBzaG91bGQgYWx3YXlzIGNvbXB1dGUgdGhlIG5lYXJlc3QgY29tbW9uIGFuY2VzdG9yIG9mIHRoZSBza2VsZXRvbiBqb2ludHMgaW5zdGVhZCBvZiB1c2luZyBgc2tpbi5za2VsZXRvbmAuIERlZmF1bHRzIHRvIGZhbHNlLlxyXG4gICAgICogU2V0IHRoaXMgdG8gdHJ1ZSBpZiBsb2FkaW5nIGFzc2V0cyB3aXRoIGludmFsaWQgYHNraW4uc2tlbGV0b25gIHZhbHVlcy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGFsd2F5c0NvbXB1dGVTa2VsZXRvblJvb3ROb2RlID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGdW5jdGlvbiBjYWxsZWQgYmVmb3JlIGxvYWRpbmcgYSB1cmwgcmVmZXJlbmNlZCBieSB0aGUgYXNzZXQuXHJcbiAgICAgKiBAcGFyYW0gdXJsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwcmVwcm9jZXNzVXJsQXN5bmMgPSAodXJsOiBzdHJpbmcpID0+IFByb21pc2UucmVzb2x2ZSh1cmwpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogT2JzZXJ2YWJsZSByYWlzZWQgd2hlbiB0aGUgbG9hZGVyIGNyZWF0ZXMgYSBtZXNoIGFmdGVyIHBhcnNpbmcgdGhlIGdsVEYgcHJvcGVydGllcyBvZiB0aGUgbWVzaC5cclxuICAgICAqIE5vdGUgdGhhdCB0aGUgb2JzZXJ2YWJsZSBpcyByYWlzZWQgYXMgc29vbiBhcyB0aGUgbWVzaCBvYmplY3QgaXMgY3JlYXRlZCwgbWVhbmluZyBzb21lIGRhdGEgbWF5IG5vdCBoYXZlIGJlZW4gc2V0dXAgeWV0IGZvciB0aGlzIG1lc2ggKHZlcnRleCBkYXRhLCBtb3JwaCB0YXJnZXRzLCBtYXRlcmlhbCwgLi4uKVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgb25NZXNoTG9hZGVkT2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlPEFic3RyYWN0TWVzaD4oKTtcclxuXHJcbiAgICBwcml2YXRlIF9vbk1lc2hMb2FkZWRPYnNlcnZlcjogTnVsbGFibGU8T2JzZXJ2ZXI8QWJzdHJhY3RNZXNoPj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsYmFjayByYWlzZWQgd2hlbiB0aGUgbG9hZGVyIGNyZWF0ZXMgYSBtZXNoIGFmdGVyIHBhcnNpbmcgdGhlIGdsVEYgcHJvcGVydGllcyBvZiB0aGUgbWVzaC5cclxuICAgICAqIE5vdGUgdGhhdCB0aGUgY2FsbGJhY2sgaXMgY2FsbGVkIGFzIHNvb24gYXMgdGhlIG1lc2ggb2JqZWN0IGlzIGNyZWF0ZWQsIG1lYW5pbmcgc29tZSBkYXRhIG1heSBub3QgaGF2ZSBiZWVuIHNldHVwIHlldCBmb3IgdGhpcyBtZXNoICh2ZXJ0ZXggZGF0YSwgbW9ycGggdGFyZ2V0cywgbWF0ZXJpYWwsIC4uLilcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBvbk1lc2hMb2FkZWQoY2FsbGJhY2s6IChtZXNoOiBBYnN0cmFjdE1lc2gpID0+IHZvaWQpIHtcclxuICAgICAgICBpZiAodGhpcy5fb25NZXNoTG9hZGVkT2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5vbk1lc2hMb2FkZWRPYnNlcnZhYmxlLnJlbW92ZSh0aGlzLl9vbk1lc2hMb2FkZWRPYnNlcnZlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX29uTWVzaExvYWRlZE9ic2VydmVyID0gdGhpcy5vbk1lc2hMb2FkZWRPYnNlcnZhYmxlLmFkZChjYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsYmFjayByYWlzZWQgd2hlbiB0aGUgbG9hZGVyIGNyZWF0ZXMgYSBza2luIGFmdGVyIHBhcnNpbmcgdGhlIGdsVEYgcHJvcGVydGllcyBvZiB0aGUgc2tpbiBub2RlLlxyXG4gICAgICogQHNlZSBodHRwczovL2RvYy5iYWJ5bG9uanMuY29tL2ZlYXR1cmVzL2ZlYXR1cmVzRGVlcERpdmUvaW1wb3J0ZXJzL2dsVEYvZ2xURlNraW5uaW5nI2lnbm9yaW5nLXRoZS10cmFuc2Zvcm0tb2YtdGhlLXNraW5uZWQtbWVzaFxyXG4gICAgICogQHBhcmFtIG5vZGUgLSB0aGUgdHJhbnNmb3JtIG5vZGUgdGhhdCBjb3JyZXNwb25kcyB0byB0aGUgb3JpZ2luYWwgZ2xURiBza2luIG5vZGUgdXNlZCBmb3IgYW5pbWF0aW9uc1xyXG4gICAgICogQHBhcmFtIHNraW5uZWROb2RlIC0gdGhlIHRyYW5zZm9ybSBub2RlIHRoYXQgaXMgdGhlIHNraW5uZWQgbWVzaCBpdHNlbGYgb3IgdGhlIHBhcmVudCBvZiB0aGUgc2tpbm5lZCBtZXNoZXNcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG9uU2tpbkxvYWRlZE9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZTx7IG5vZGU6IFRyYW5zZm9ybU5vZGU7IHNraW5uZWROb2RlOiBUcmFuc2Zvcm1Ob2RlIH0+KCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPYnNlcnZhYmxlIHJhaXNlZCB3aGVuIHRoZSBsb2FkZXIgY3JlYXRlcyBhIHRleHR1cmUgYWZ0ZXIgcGFyc2luZyB0aGUgZ2xURiBwcm9wZXJ0aWVzIG9mIHRoZSB0ZXh0dXJlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgb25UZXh0dXJlTG9hZGVkT2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlPEJhc2VUZXh0dXJlPigpO1xyXG5cclxuICAgIHByaXZhdGUgX29uVGV4dHVyZUxvYWRlZE9ic2VydmVyOiBOdWxsYWJsZTxPYnNlcnZlcjxCYXNlVGV4dHVyZT4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGJhY2sgcmFpc2VkIHdoZW4gdGhlIGxvYWRlciBjcmVhdGVzIGEgdGV4dHVyZSBhZnRlciBwYXJzaW5nIHRoZSBnbFRGIHByb3BlcnRpZXMgb2YgdGhlIHRleHR1cmUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgb25UZXh0dXJlTG9hZGVkKGNhbGxiYWNrOiAodGV4dHVyZTogQmFzZVRleHR1cmUpID0+IHZvaWQpIHtcclxuICAgICAgICBpZiAodGhpcy5fb25UZXh0dXJlTG9hZGVkT2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5vblRleHR1cmVMb2FkZWRPYnNlcnZhYmxlLnJlbW92ZSh0aGlzLl9vblRleHR1cmVMb2FkZWRPYnNlcnZlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX29uVGV4dHVyZUxvYWRlZE9ic2VydmVyID0gdGhpcy5vblRleHR1cmVMb2FkZWRPYnNlcnZhYmxlLmFkZChjYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPYnNlcnZhYmxlIHJhaXNlZCB3aGVuIHRoZSBsb2FkZXIgY3JlYXRlcyBhIG1hdGVyaWFsIGFmdGVyIHBhcnNpbmcgdGhlIGdsVEYgcHJvcGVydGllcyBvZiB0aGUgbWF0ZXJpYWwuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBvbk1hdGVyaWFsTG9hZGVkT2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlPE1hdGVyaWFsPigpO1xyXG5cclxuICAgIHByaXZhdGUgX29uTWF0ZXJpYWxMb2FkZWRPYnNlcnZlcjogTnVsbGFibGU8T2JzZXJ2ZXI8TWF0ZXJpYWw+PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxiYWNrIHJhaXNlZCB3aGVuIHRoZSBsb2FkZXIgY3JlYXRlcyBhIG1hdGVyaWFsIGFmdGVyIHBhcnNpbmcgdGhlIGdsVEYgcHJvcGVydGllcyBvZiB0aGUgbWF0ZXJpYWwuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgb25NYXRlcmlhbExvYWRlZChjYWxsYmFjazogKG1hdGVyaWFsOiBNYXRlcmlhbCkgPT4gdm9pZCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9vbk1hdGVyaWFsTG9hZGVkT2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5vbk1hdGVyaWFsTG9hZGVkT2JzZXJ2YWJsZS5yZW1vdmUodGhpcy5fb25NYXRlcmlhbExvYWRlZE9ic2VydmVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fb25NYXRlcmlhbExvYWRlZE9ic2VydmVyID0gdGhpcy5vbk1hdGVyaWFsTG9hZGVkT2JzZXJ2YWJsZS5hZGQoY2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT2JzZXJ2YWJsZSByYWlzZWQgd2hlbiB0aGUgbG9hZGVyIGNyZWF0ZXMgYSBjYW1lcmEgYWZ0ZXIgcGFyc2luZyB0aGUgZ2xURiBwcm9wZXJ0aWVzIG9mIHRoZSBjYW1lcmEuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBvbkNhbWVyYUxvYWRlZE9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZTxDYW1lcmE+KCk7XHJcblxyXG4gICAgcHJpdmF0ZSBfb25DYW1lcmFMb2FkZWRPYnNlcnZlcjogTnVsbGFibGU8T2JzZXJ2ZXI8Q2FtZXJhPj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsYmFjayByYWlzZWQgd2hlbiB0aGUgbG9hZGVyIGNyZWF0ZXMgYSBjYW1lcmEgYWZ0ZXIgcGFyc2luZyB0aGUgZ2xURiBwcm9wZXJ0aWVzIG9mIHRoZSBjYW1lcmEuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgb25DYW1lcmFMb2FkZWQoY2FsbGJhY2s6IChjYW1lcmE6IENhbWVyYSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9vbkNhbWVyYUxvYWRlZE9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25DYW1lcmFMb2FkZWRPYnNlcnZhYmxlLnJlbW92ZSh0aGlzLl9vbkNhbWVyYUxvYWRlZE9ic2VydmVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fb25DYW1lcmFMb2FkZWRPYnNlcnZlciA9IHRoaXMub25DYW1lcmFMb2FkZWRPYnNlcnZhYmxlLmFkZChjYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPYnNlcnZhYmxlIHJhaXNlZCB3aGVuIHRoZSBhc3NldCBpcyBjb21wbGV0ZWx5IGxvYWRlZCwgaW1tZWRpYXRlbHkgYmVmb3JlIHRoZSBsb2FkZXIgaXMgZGlzcG9zZWQuXHJcbiAgICAgKiBGb3IgYXNzZXRzIHdpdGggTE9EcywgcmFpc2VkIHdoZW4gYWxsIG9mIHRoZSBMT0RzIGFyZSBjb21wbGV0ZS5cclxuICAgICAqIEZvciBhc3NldHMgd2l0aG91dCBMT0RzLCByYWlzZWQgd2hlbiB0aGUgbW9kZWwgaXMgY29tcGxldGUsIGltbWVkaWF0ZWx5IGFmdGVyIHRoZSBsb2FkZXIgcmVzb2x2ZXMgdGhlIHJldHVybmVkIHByb21pc2UuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBvbkNvbXBsZXRlT2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlPHZvaWQ+KCk7XHJcblxyXG4gICAgcHJpdmF0ZSBfb25Db21wbGV0ZU9ic2VydmVyOiBOdWxsYWJsZTxPYnNlcnZlcjx2b2lkPj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsYmFjayByYWlzZWQgd2hlbiB0aGUgYXNzZXQgaXMgY29tcGxldGVseSBsb2FkZWQsIGltbWVkaWF0ZWx5IGJlZm9yZSB0aGUgbG9hZGVyIGlzIGRpc3Bvc2VkLlxyXG4gICAgICogRm9yIGFzc2V0cyB3aXRoIExPRHMsIHJhaXNlZCB3aGVuIGFsbCBvZiB0aGUgTE9EcyBhcmUgY29tcGxldGUuXHJcbiAgICAgKiBGb3IgYXNzZXRzIHdpdGhvdXQgTE9EcywgcmFpc2VkIHdoZW4gdGhlIG1vZGVsIGlzIGNvbXBsZXRlLCBpbW1lZGlhdGVseSBhZnRlciB0aGUgbG9hZGVyIHJlc29sdmVzIHRoZSByZXR1cm5lZCBwcm9taXNlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IG9uQ29tcGxldGUoY2FsbGJhY2s6ICgpID0+IHZvaWQpIHtcclxuICAgICAgICBpZiAodGhpcy5fb25Db21wbGV0ZU9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25Db21wbGV0ZU9ic2VydmFibGUucmVtb3ZlKHRoaXMuX29uQ29tcGxldGVPYnNlcnZlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX29uQ29tcGxldGVPYnNlcnZlciA9IHRoaXMub25Db21wbGV0ZU9ic2VydmFibGUuYWRkKGNhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE9ic2VydmFibGUgcmFpc2VkIHdoZW4gYW4gZXJyb3Igb2NjdXJzLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgb25FcnJvck9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZTxhbnk+KCk7XHJcblxyXG4gICAgcHJpdmF0ZSBfb25FcnJvck9ic2VydmVyOiBOdWxsYWJsZTxPYnNlcnZlcjxhbnk+PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxiYWNrIHJhaXNlZCB3aGVuIGFuIGVycm9yIG9jY3Vycy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBvbkVycm9yKGNhbGxiYWNrOiAocmVhc29uOiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICBpZiAodGhpcy5fb25FcnJvck9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25FcnJvck9ic2VydmFibGUucmVtb3ZlKHRoaXMuX29uRXJyb3JPYnNlcnZlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX29uRXJyb3JPYnNlcnZlciA9IHRoaXMub25FcnJvck9ic2VydmFibGUuYWRkKGNhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE9ic2VydmFibGUgcmFpc2VkIGFmdGVyIHRoZSBsb2FkZXIgaXMgZGlzcG9zZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBvbkRpc3Bvc2VPYnNlcnZhYmxlID0gbmV3IE9ic2VydmFibGU8dm9pZD4oKTtcclxuXHJcbiAgICBwcml2YXRlIF9vbkRpc3Bvc2VPYnNlcnZlcjogTnVsbGFibGU8T2JzZXJ2ZXI8dm9pZD4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGJhY2sgcmFpc2VkIGFmdGVyIHRoZSBsb2FkZXIgaXMgZGlzcG9zZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgb25EaXNwb3NlKGNhbGxiYWNrOiAoKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX29uRGlzcG9zZU9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25EaXNwb3NlT2JzZXJ2YWJsZS5yZW1vdmUodGhpcy5fb25EaXNwb3NlT2JzZXJ2ZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9vbkRpc3Bvc2VPYnNlcnZlciA9IHRoaXMub25EaXNwb3NlT2JzZXJ2YWJsZS5hZGQoY2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT2JzZXJ2YWJsZSByYWlzZWQgYWZ0ZXIgYSBsb2FkZXIgZXh0ZW5zaW9uIGlzIGNyZWF0ZWQuXHJcbiAgICAgKiBTZXQgYWRkaXRpb25hbCBvcHRpb25zIGZvciBhIGxvYWRlciBleHRlbnNpb24gaW4gdGhpcyBldmVudC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG9uRXh0ZW5zaW9uTG9hZGVkT2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlPElHTFRGTG9hZGVyRXh0ZW5zaW9uPigpO1xyXG5cclxuICAgIHByaXZhdGUgX29uRXh0ZW5zaW9uTG9hZGVkT2JzZXJ2ZXI6IE51bGxhYmxlPE9ic2VydmVyPElHTFRGTG9hZGVyRXh0ZW5zaW9uPj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsYmFjayByYWlzZWQgYWZ0ZXIgYSBsb2FkZXIgZXh0ZW5zaW9uIGlzIGNyZWF0ZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgb25FeHRlbnNpb25Mb2FkZWQoY2FsbGJhY2s6IChleHRlbnNpb246IElHTFRGTG9hZGVyRXh0ZW5zaW9uKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX29uRXh0ZW5zaW9uTG9hZGVkT2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkV4dGVuc2lvbkxvYWRlZE9ic2VydmFibGUucmVtb3ZlKHRoaXMuX29uRXh0ZW5zaW9uTG9hZGVkT2JzZXJ2ZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9vbkV4dGVuc2lvbkxvYWRlZE9ic2VydmVyID0gdGhpcy5vbkV4dGVuc2lvbkxvYWRlZE9ic2VydmFibGUuYWRkKGNhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgaWYgdGhlIGxvYWRlciBsb2dnaW5nIGlzIGVuYWJsZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgbG9nZ2luZ0VuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvZ2dpbmdFbmFibGVkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgbG9nZ2luZ0VuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAodGhpcy5fbG9nZ2luZ0VuYWJsZWQgPT09IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2xvZ2dpbmdFbmFibGVkID0gdmFsdWU7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9sb2dnaW5nRW5hYmxlZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2cgPSB0aGlzLl9sb2dFbmFibGVkO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZyA9IHRoaXMuX2xvZ0Rpc2FibGVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgaWYgdGhlIGxvYWRlciBzaG91bGQgY2FwdHVyZSBwZXJmb3JtYW5jZSBjb3VudGVycy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBjYXB0dXJlUGVyZm9ybWFuY2VDb3VudGVycygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY2FwdHVyZVBlcmZvcm1hbmNlQ291bnRlcnM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBjYXB0dXJlUGVyZm9ybWFuY2VDb3VudGVycyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIGlmICh0aGlzLl9jYXB0dXJlUGVyZm9ybWFuY2VDb3VudGVycyA9PT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fY2FwdHVyZVBlcmZvcm1hbmNlQ291bnRlcnMgPSB2YWx1ZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2NhcHR1cmVQZXJmb3JtYW5jZUNvdW50ZXJzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0YXJ0UGVyZm9ybWFuY2VDb3VudGVyID0gdGhpcy5fc3RhcnRQZXJmb3JtYW5jZUNvdW50ZXJFbmFibGVkO1xyXG4gICAgICAgICAgICB0aGlzLl9lbmRQZXJmb3JtYW5jZUNvdW50ZXIgPSB0aGlzLl9lbmRQZXJmb3JtYW5jZUNvdW50ZXJFbmFibGVkO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0YXJ0UGVyZm9ybWFuY2VDb3VudGVyID0gdGhpcy5fc3RhcnRQZXJmb3JtYW5jZUNvdW50ZXJEaXNhYmxlZDtcclxuICAgICAgICAgICAgdGhpcy5fZW5kUGVyZm9ybWFuY2VDb3VudGVyID0gdGhpcy5fZW5kUGVyZm9ybWFuY2VDb3VudGVyRGlzYWJsZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyBpZiB0aGUgbG9hZGVyIHNob3VsZCB2YWxpZGF0ZSB0aGUgYXNzZXQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB2YWxpZGF0ZSA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogT2JzZXJ2YWJsZSByYWlzZWQgYWZ0ZXIgdmFsaWRhdGlvbiB3aGVuIHZhbGlkYXRlIGlzIHNldCB0byB0cnVlLiBUaGUgZXZlbnQgZGF0YSBpcyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgb25WYWxpZGF0ZWRPYnNlcnZhYmxlID0gbmV3IE9ic2VydmFibGU8R0xURjIuSUdMVEZWYWxpZGF0aW9uUmVzdWx0cz4oKTtcclxuXHJcbiAgICBwcml2YXRlIF9vblZhbGlkYXRlZE9ic2VydmVyOiBOdWxsYWJsZTxPYnNlcnZlcjxHTFRGMi5JR0xURlZhbGlkYXRpb25SZXN1bHRzPj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsYmFjayByYWlzZWQgYWZ0ZXIgYSBsb2FkZXIgZXh0ZW5zaW9uIGlzIGNyZWF0ZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgb25WYWxpZGF0ZWQoY2FsbGJhY2s6IChyZXN1bHRzOiBHTFRGMi5JR0xURlZhbGlkYXRpb25SZXN1bHRzKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX29uVmFsaWRhdGVkT2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5vblZhbGlkYXRlZE9ic2VydmFibGUucmVtb3ZlKHRoaXMuX29uVmFsaWRhdGVkT2JzZXJ2ZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9vblZhbGlkYXRlZE9ic2VydmVyID0gdGhpcy5vblZhbGlkYXRlZE9ic2VydmFibGUuYWRkKGNhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9sb2FkZXI6IE51bGxhYmxlPElHTFRGTG9hZGVyPiA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9zdGF0ZTogTnVsbGFibGU8R0xURkxvYWRlclN0YXRlPiA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9wcm9ncmVzc0NhbGxiYWNrPzogKGV2ZW50OiBJU2NlbmVMb2FkZXJQcm9ncmVzc0V2ZW50KSA9PiB2b2lkO1xyXG4gICAgcHJpdmF0ZSBfcmVxdWVzdHMgPSBuZXcgQXJyYXk8SUZpbGVSZXF1ZXN0SW5mbz4oKTtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfTWFnaWNCYXNlNjRFbmNvZGVkID0gXCJaMnhVUmdcIjsgLy8gXCJnbFRGXCIgYmFzZTY0IGVuY29kZWQgKHdpdGhvdXQgdGhlIHF1b3RlcyEpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBOYW1lIG9mIHRoZSBsb2FkZXIgKFwiZ2x0ZlwiKVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbmFtZSA9IFwiZ2x0ZlwiO1xyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBleHRlbnNpb25zOiBJU2NlbmVMb2FkZXJQbHVnaW5FeHRlbnNpb25zID0ge1xyXG4gICAgICAgIFwiLmdsdGZcIjogeyBpc0JpbmFyeTogZmFsc2UgfSxcclxuICAgICAgICBcIi5nbGJcIjogeyBpc0JpbmFyeTogdHJ1ZSB9LFxyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERpc3Bvc2VzIHRoZSBsb2FkZXIsIHJlbGVhc2VzIHJlc291cmNlcyBkdXJpbmcgbG9hZCwgYW5kIGNhbmNlbHMgYW55IG91dHN0YW5kaW5nIHJlcXVlc3RzLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5fbG9hZGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvYWRlci5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvYWRlciA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IHJlcXVlc3Qgb2YgdGhpcy5fcmVxdWVzdHMpIHtcclxuICAgICAgICAgICAgcmVxdWVzdC5hYm9ydCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fcmVxdWVzdHMubGVuZ3RoID0gMDtcclxuXHJcbiAgICAgICAgZGVsZXRlIHRoaXMuX3Byb2dyZXNzQ2FsbGJhY2s7XHJcblxyXG4gICAgICAgIHRoaXMucHJlcHJvY2Vzc1VybEFzeW5jID0gKHVybCkgPT4gUHJvbWlzZS5yZXNvbHZlKHVybCk7XHJcblxyXG4gICAgICAgIHRoaXMub25NZXNoTG9hZGVkT2JzZXJ2YWJsZS5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMub25Ta2luTG9hZGVkT2JzZXJ2YWJsZS5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMub25UZXh0dXJlTG9hZGVkT2JzZXJ2YWJsZS5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMub25NYXRlcmlhbExvYWRlZE9ic2VydmFibGUuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLm9uQ2FtZXJhTG9hZGVkT2JzZXJ2YWJsZS5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMub25Db21wbGV0ZU9ic2VydmFibGUuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLm9uRXh0ZW5zaW9uTG9hZGVkT2JzZXJ2YWJsZS5jbGVhcigpO1xyXG5cclxuICAgICAgICB0aGlzLm9uRGlzcG9zZU9ic2VydmFibGUubm90aWZ5T2JzZXJ2ZXJzKHVuZGVmaW5lZCk7XHJcbiAgICAgICAgdGhpcy5vbkRpc3Bvc2VPYnNlcnZhYmxlLmNsZWFyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWRGaWxlKFxyXG4gICAgICAgIHNjZW5lOiBTY2VuZSxcclxuICAgICAgICBmaWxlT3JVcmw6IEZpbGUgfCBzdHJpbmcgfCBBcnJheUJ1ZmZlclZpZXcsXHJcbiAgICAgICAgcm9vdFVybDogc3RyaW5nLFxyXG4gICAgICAgIG9uU3VjY2VzczogKGRhdGE6IGFueSwgcmVzcG9uc2VVUkw/OiBzdHJpbmcpID0+IHZvaWQsXHJcbiAgICAgICAgb25Qcm9ncmVzcz86IChldjogSVNjZW5lTG9hZGVyUHJvZ3Jlc3NFdmVudCkgPT4gdm9pZCxcclxuICAgICAgICB1c2VBcnJheUJ1ZmZlcj86IGJvb2xlYW4sXHJcbiAgICAgICAgb25FcnJvcj86IChyZXF1ZXN0PzogV2ViUmVxdWVzdCwgZXhjZXB0aW9uPzogTG9hZEZpbGVFcnJvcikgPT4gdm9pZCxcclxuICAgICAgICBuYW1lPzogc3RyaW5nXHJcbiAgICApOiBOdWxsYWJsZTxJRmlsZVJlcXVlc3Q+IHtcclxuICAgICAgICBpZiAoQXJyYXlCdWZmZXIuaXNWaWV3KGZpbGVPclVybCkpIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9hZEJpbmFyeShzY2VuZSwgZmlsZU9yVXJsIGFzIEFycmF5QnVmZmVyVmlldywgcm9vdFVybCwgb25TdWNjZXNzLCBvbkVycm9yLCBuYW1lKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9wcm9ncmVzc0NhbGxiYWNrID0gb25Qcm9ncmVzcztcclxuXHJcbiAgICAgICAgY29uc3QgZmlsZU5hbWUgPSAoZmlsZU9yVXJsIGFzIEZpbGUpLm5hbWUgfHwgVG9vbHMuR2V0RmlsZW5hbWUoZmlsZU9yVXJsIGFzIHN0cmluZyk7XHJcblxyXG4gICAgICAgIGlmICh1c2VBcnJheUJ1ZmZlcikge1xyXG4gICAgICAgICAgICBpZiAodGhpcy51c2VSYW5nZVJlcXVlc3RzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52YWxpZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZ2dlci5XYXJuKFwiZ2xURiB2YWxpZGF0aW9uIGlzIG5vdCBzdXBwb3J0ZWQgd2hlbiByYW5nZSByZXF1ZXN0cyBhcmUgZW5hYmxlZFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlUmVxdWVzdDogSUZpbGVSZXF1ZXN0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGFib3J0OiAoKSA9PiB7fSxcclxuICAgICAgICAgICAgICAgICAgICBvbkNvbXBsZXRlT2JzZXJ2YWJsZTogbmV3IE9ic2VydmFibGU8SUZpbGVSZXF1ZXN0PigpLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhQnVmZmVyID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlYWRBc3luYzogKGJ5dGVPZmZzZXQ6IG51bWJlciwgYnl0ZUxlbmd0aDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxBcnJheUJ1ZmZlclZpZXc+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRGaWxlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjZW5lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVPclVybCBhcyBGaWxlIHwgc3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobmV3IFVpbnQ4QXJyYXkoZGF0YSBhcyBBcnJheUJ1ZmZlcikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh3ZWJSZXF1ZXN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlYlJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihcIlJhbmdlXCIsIGBieXRlcz0ke2J5dGVPZmZzZXR9LSR7Ynl0ZU9mZnNldCArIGJ5dGVMZW5ndGggLSAxfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgYnl0ZUxlbmd0aDogMCxcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5fdW5wYWNrQmluYXJ5QXN5bmMobmV3IERhdGFSZWFkZXIoZGF0YUJ1ZmZlcikpLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgKGxvYWRlckRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZVJlcXVlc3Qub25Db21wbGV0ZU9ic2VydmFibGUubm90aWZ5T2JzZXJ2ZXJzKGZpbGVSZXF1ZXN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25TdWNjZXNzKGxvYWRlckRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgb25FcnJvciA/IChlcnJvcikgPT4gb25FcnJvcih1bmRlZmluZWQsIGVycm9yKSA6IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmlsZVJlcXVlc3Q7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9sb2FkRmlsZShcclxuICAgICAgICAgICAgICAgIHNjZW5lLFxyXG4gICAgICAgICAgICAgICAgZmlsZU9yVXJsIGFzIEZpbGUgfCBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3ZhbGlkYXRlKHNjZW5lLCBuZXcgVWludDhBcnJheShkYXRhIGFzIEFycmF5QnVmZmVyKSwgcm9vdFVybCwgZmlsZU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VucGFja0JpbmFyeUFzeW5jKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgRGF0YVJlYWRlcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkQXN5bmM6IChieXRlT2Zmc2V0LCBieXRlTGVuZ3RoKSA9PiByZWFkQXN5bmMoZGF0YSBhcyBBcnJheUJ1ZmZlciwgYnl0ZU9mZnNldCwgYnl0ZUxlbmd0aCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBieXRlTGVuZ3RoOiAoZGF0YSBhcyBBcnJheUJ1ZmZlcikuYnl0ZUxlbmd0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICApLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChsb2FkZXJEYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3MobG9hZGVyRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRXJyb3IgPyAoZXJyb3IpID0+IG9uRXJyb3IodW5kZWZpbmVkLCBlcnJvcikgOiB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHRydWUsXHJcbiAgICAgICAgICAgICAgICBvbkVycm9yXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fbG9hZEZpbGUoXHJcbiAgICAgICAgICAgIHNjZW5lLFxyXG4gICAgICAgICAgICBmaWxlT3JVcmwgYXMgRmlsZSB8IHN0cmluZyxcclxuICAgICAgICAgICAgKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3ZhbGlkYXRlKHNjZW5lLCBuZXcgVWludDhBcnJheShkYXRhIGFzIEFycmF5QnVmZmVyKSwgcm9vdFVybCwgZmlsZU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgb25TdWNjZXNzKHsganNvbjogdGhpcy5fcGFyc2VKc29uKGRhdGEgYXMgc3RyaW5nKSB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdXNlQXJyYXlCdWZmZXIsXHJcbiAgICAgICAgICAgIG9uRXJyb3JcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIF9sb2FkQmluYXJ5KFxyXG4gICAgICAgIHNjZW5lOiBTY2VuZSxcclxuICAgICAgICBkYXRhOiBBcnJheUJ1ZmZlclZpZXcsXHJcbiAgICAgICAgcm9vdFVybDogc3RyaW5nLFxyXG4gICAgICAgIG9uU3VjY2VzczogKGRhdGE6IGFueSwgcmVzcG9uc2VVUkw/OiBzdHJpbmcpID0+IHZvaWQsXHJcbiAgICAgICAgb25FcnJvcj86IChyZXF1ZXN0PzogV2ViUmVxdWVzdCwgZXhjZXB0aW9uPzogTG9hZEZpbGVFcnJvcikgPT4gdm9pZCxcclxuICAgICAgICBmaWxlTmFtZT86IHN0cmluZ1xyXG4gICAgKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fdmFsaWRhdGUoc2NlbmUsIGRhdGEsIHJvb3RVcmwsIGZpbGVOYW1lKTtcclxuICAgICAgICB0aGlzLl91bnBhY2tCaW5hcnlBc3luYyhcclxuICAgICAgICAgICAgbmV3IERhdGFSZWFkZXIoe1xyXG4gICAgICAgICAgICAgICAgcmVhZEFzeW5jOiAoYnl0ZU9mZnNldCwgYnl0ZUxlbmd0aCkgPT4gcmVhZFZpZXdBc3luYyhkYXRhLCBieXRlT2Zmc2V0LCBieXRlTGVuZ3RoKSxcclxuICAgICAgICAgICAgICAgIGJ5dGVMZW5ndGg6IGRhdGEuYnl0ZUxlbmd0aCxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApLnRoZW4oXHJcbiAgICAgICAgICAgIChsb2FkZXJEYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBvblN1Y2Nlc3MobG9hZGVyRGF0YSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uRXJyb3IgPyAoZXJyb3IpID0+IG9uRXJyb3IodW5kZWZpbmVkLCBlcnJvcikgOiB1bmRlZmluZWRcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbXBvcnRNZXNoQXN5bmMoXHJcbiAgICAgICAgbWVzaGVzTmFtZXM6IGFueSxcclxuICAgICAgICBzY2VuZTogU2NlbmUsXHJcbiAgICAgICAgZGF0YTogYW55LFxyXG4gICAgICAgIHJvb3RVcmw6IHN0cmluZyxcclxuICAgICAgICBvblByb2dyZXNzPzogKGV2ZW50OiBJU2NlbmVMb2FkZXJQcm9ncmVzc0V2ZW50KSA9PiB2b2lkLFxyXG4gICAgICAgIGZpbGVOYW1lPzogc3RyaW5nXHJcbiAgICApOiBQcm9taXNlPElTY2VuZUxvYWRlckFzeW5jUmVzdWx0PiB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9uUGFyc2VkT2JzZXJ2YWJsZS5ub3RpZnlPYnNlcnZlcnMoZGF0YSk7XHJcbiAgICAgICAgICAgIHRoaXMub25QYXJzZWRPYnNlcnZhYmxlLmNsZWFyKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9sb2coYExvYWRpbmcgJHtmaWxlTmFtZSB8fCBcIlwifWApO1xyXG4gICAgICAgICAgICB0aGlzLl9sb2FkZXIgPSB0aGlzLl9nZXRMb2FkZXIoZGF0YSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9sb2FkZXIuaW1wb3J0TWVzaEFzeW5jKG1lc2hlc05hbWVzLCBzY2VuZSwgbnVsbCwgZGF0YSwgcm9vdFVybCwgb25Qcm9ncmVzcywgZmlsZU5hbWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkQXN5bmMoc2NlbmU6IFNjZW5lLCBkYXRhOiBhbnksIHJvb3RVcmw6IHN0cmluZywgb25Qcm9ncmVzcz86IChldmVudDogSVNjZW5lTG9hZGVyUHJvZ3Jlc3NFdmVudCkgPT4gdm9pZCwgZmlsZU5hbWU/OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub25QYXJzZWRPYnNlcnZhYmxlLm5vdGlmeU9ic2VydmVycyhkYXRhKTtcclxuICAgICAgICAgICAgdGhpcy5vblBhcnNlZE9ic2VydmFibGUuY2xlYXIoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2xvZyhgTG9hZGluZyAke2ZpbGVOYW1lIHx8IFwiXCJ9YCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvYWRlciA9IHRoaXMuX2dldExvYWRlcihkYXRhKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRlci5sb2FkQXN5bmMoc2NlbmUsIGRhdGEsIHJvb3RVcmwsIG9uUHJvZ3Jlc3MsIGZpbGVOYW1lKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZEFzc2V0Q29udGFpbmVyQXN5bmMoc2NlbmU6IFNjZW5lLCBkYXRhOiBhbnksIHJvb3RVcmw6IHN0cmluZywgb25Qcm9ncmVzcz86IChldmVudDogSVNjZW5lTG9hZGVyUHJvZ3Jlc3NFdmVudCkgPT4gdm9pZCwgZmlsZU5hbWU/OiBzdHJpbmcpOiBQcm9taXNlPEFzc2V0Q29udGFpbmVyPiB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9uUGFyc2VkT2JzZXJ2YWJsZS5ub3RpZnlPYnNlcnZlcnMoZGF0YSk7XHJcbiAgICAgICAgICAgIHRoaXMub25QYXJzZWRPYnNlcnZhYmxlLmNsZWFyKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9sb2coYExvYWRpbmcgJHtmaWxlTmFtZSB8fCBcIlwifWApO1xyXG4gICAgICAgICAgICB0aGlzLl9sb2FkZXIgPSB0aGlzLl9nZXRMb2FkZXIoZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAvLyBQcmVwYXJlIHRoZSBhc3NldCBjb250YWluZXIuXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IG5ldyBBc3NldENvbnRhaW5lcihzY2VuZSk7XHJcblxyXG4gICAgICAgICAgICAvLyBHZXQgbWF0ZXJpYWxzL3RleHR1cmVzIHdoZW4gbG9hZGluZyB0byBhZGQgdG8gY29udGFpbmVyXHJcbiAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsczogQXJyYXk8TWF0ZXJpYWw+ID0gW107XHJcbiAgICAgICAgICAgIHRoaXMub25NYXRlcmlhbExvYWRlZE9ic2VydmFibGUuYWRkKChtYXRlcmlhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWxzLnB1c2gobWF0ZXJpYWwpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3QgdGV4dHVyZXM6IEFycmF5PEJhc2VUZXh0dXJlPiA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLm9uVGV4dHVyZUxvYWRlZE9ic2VydmFibGUuYWRkKCh0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0dXJlcy5wdXNoKHRleHR1cmUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3QgY2FtZXJhczogQXJyYXk8Q2FtZXJhPiA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLm9uQ2FtZXJhTG9hZGVkT2JzZXJ2YWJsZS5hZGQoKGNhbWVyYSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2FtZXJhcy5wdXNoKGNhbWVyYSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbW9ycGhUYXJnZXRNYW5hZ2VyczogQXJyYXk8TW9ycGhUYXJnZXRNYW5hZ2VyPiA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLm9uTWVzaExvYWRlZE9ic2VydmFibGUuYWRkKChtZXNoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAobWVzaC5tb3JwaFRhcmdldE1hbmFnZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBtb3JwaFRhcmdldE1hbmFnZXJzLnB1c2gobWVzaC5tb3JwaFRhcmdldE1hbmFnZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9sb2FkZXIuaW1wb3J0TWVzaEFzeW5jKG51bGwsIHNjZW5lLCBjb250YWluZXIsIGRhdGEsIHJvb3RVcmwsIG9uUHJvZ3Jlc3MsIGZpbGVOYW1lKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGNvbnRhaW5lci5nZW9tZXRyaWVzLCByZXN1bHQuZ2VvbWV0cmllcyk7XHJcbiAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShjb250YWluZXIubWVzaGVzLCByZXN1bHQubWVzaGVzKTtcclxuICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGNvbnRhaW5lci5wYXJ0aWNsZVN5c3RlbXMsIHJlc3VsdC5wYXJ0aWNsZVN5c3RlbXMpO1xyXG4gICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoY29udGFpbmVyLnNrZWxldG9ucywgcmVzdWx0LnNrZWxldG9ucyk7XHJcbiAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShjb250YWluZXIuYW5pbWF0aW9uR3JvdXBzLCByZXN1bHQuYW5pbWF0aW9uR3JvdXBzKTtcclxuICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGNvbnRhaW5lci5tYXRlcmlhbHMsIG1hdGVyaWFscyk7XHJcbiAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShjb250YWluZXIudGV4dHVyZXMsIHRleHR1cmVzKTtcclxuICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGNvbnRhaW5lci5saWdodHMsIHJlc3VsdC5saWdodHMpO1xyXG4gICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoY29udGFpbmVyLnRyYW5zZm9ybU5vZGVzLCByZXN1bHQudHJhbnNmb3JtTm9kZXMpO1xyXG4gICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoY29udGFpbmVyLmNhbWVyYXMsIGNhbWVyYXMpO1xyXG4gICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoY29udGFpbmVyLm1vcnBoVGFyZ2V0TWFuYWdlcnMsIG1vcnBoVGFyZ2V0TWFuYWdlcnMpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNhbkRpcmVjdExvYWQoZGF0YTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgKGRhdGEuaW5kZXhPZihcImFzc2V0XCIpICE9PSAtMSAmJiBkYXRhLmluZGV4T2YoXCJ2ZXJzaW9uXCIpICE9PSAtMSkgfHxcclxuICAgICAgICAgICAgZGF0YS5zdGFydHNXaXRoKFwiZGF0YTpiYXNlNjQsXCIgKyBHTFRGRmlsZUxvYWRlci5fTWFnaWNCYXNlNjRFbmNvZGVkKSB8fCAvLyB0aGlzIGlzIHRlY2huaWNhbGx5IGluY29ycmVjdCwgYnV0IHdpbGwgY29udGludWUgdG8gc3VwcG9ydCBmb3IgYmFja2NvbXBhdC5cclxuICAgICAgICAgICAgZGF0YS5zdGFydHNXaXRoKFwiZGF0YTo7YmFzZTY0LFwiICsgR0xURkZpbGVMb2FkZXIuX01hZ2ljQmFzZTY0RW5jb2RlZCkgfHxcclxuICAgICAgICAgICAgZGF0YS5zdGFydHNXaXRoKFwiZGF0YTphcHBsaWNhdGlvbi9vY3RldC1zdHJlYW07YmFzZTY0LFwiICsgR0xURkZpbGVMb2FkZXIuX01hZ2ljQmFzZTY0RW5jb2RlZCkgfHxcclxuICAgICAgICAgICAgZGF0YS5zdGFydHNXaXRoKFwiZGF0YTptb2RlbC9nbHRmLWJpbmFyeTtiYXNlNjQsXCIgKyBHTFRGRmlsZUxvYWRlci5fTWFnaWNCYXNlNjRFbmNvZGVkKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGRpcmVjdExvYWQoc2NlbmU6IFNjZW5lLCBkYXRhOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgZGF0YS5zdGFydHNXaXRoKFwiYmFzZTY0LFwiICsgR0xURkZpbGVMb2FkZXIuX01hZ2ljQmFzZTY0RW5jb2RlZCkgfHwgLy8gdGhpcyBpcyB0ZWNobmljYWxseSBpbmNvcnJlY3QsIGJ1dCB3aWxsIGNvbnRpbnVlIHRvIHN1cHBvcnQgZm9yIGJhY2tjb21wYXQuXHJcbiAgICAgICAgICAgIGRhdGEuc3RhcnRzV2l0aChcIjtiYXNlNjQsXCIgKyBHTFRGRmlsZUxvYWRlci5fTWFnaWNCYXNlNjRFbmNvZGVkKSB8fFxyXG4gICAgICAgICAgICBkYXRhLnN0YXJ0c1dpdGgoXCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW07YmFzZTY0LFwiICsgR0xURkZpbGVMb2FkZXIuX01hZ2ljQmFzZTY0RW5jb2RlZCkgfHxcclxuICAgICAgICAgICAgZGF0YS5zdGFydHNXaXRoKFwibW9kZWwvZ2x0Zi1iaW5hcnk7YmFzZTY0LFwiICsgR0xURkZpbGVMb2FkZXIuX01hZ2ljQmFzZTY0RW5jb2RlZClcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgY29uc3QgYXJyYXlCdWZmZXIgPSBEZWNvZGVCYXNlNjRVcmxUb0JpbmFyeShkYXRhKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3ZhbGlkYXRlKHNjZW5lLCBuZXcgVWludDhBcnJheShhcnJheUJ1ZmZlcikpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdW5wYWNrQmluYXJ5QXN5bmMoXHJcbiAgICAgICAgICAgICAgICBuZXcgRGF0YVJlYWRlcih7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVhZEFzeW5jOiAoYnl0ZU9mZnNldCwgYnl0ZUxlbmd0aCkgPT4gcmVhZEFzeW5jKGFycmF5QnVmZmVyLCBieXRlT2Zmc2V0LCBieXRlTGVuZ3RoKSxcclxuICAgICAgICAgICAgICAgICAgICBieXRlTGVuZ3RoOiBhcnJheUJ1ZmZlci5ieXRlTGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX3ZhbGlkYXRlKHNjZW5lLCBkYXRhKTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHsganNvbjogdGhpcy5fcGFyc2VKc29uKGRhdGEpIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGNhbGxiYWNrIHRoYXQgYWxsb3dzIGN1c3RvbSBoYW5kbGluZyBvZiB0aGUgcm9vdCB1cmwgYmFzZWQgb24gdGhlIHJlc3BvbnNlIHVybC5cclxuICAgICAqIEBwYXJhbSByb290VXJsIHRoZSBvcmlnaW5hbCByb290IHVybFxyXG4gICAgICogQHBhcmFtIHJlc3BvbnNlVVJMIHRoZSByZXNwb25zZSB1cmwgaWYgYXZhaWxhYmxlXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgbmV3IHJvb3QgdXJsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZXdyaXRlUm9vdFVSTD8ocm9vdFVybDogc3RyaW5nLCByZXNwb25zZVVSTD86IHN0cmluZyk6IHN0cmluZztcclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgY3JlYXRlUGx1Z2luKCk6IElTY2VuZUxvYWRlclBsdWdpbiB8IElTY2VuZUxvYWRlclBsdWdpbkFzeW5jIHtcclxuICAgICAgICByZXR1cm4gbmV3IEdMVEZGaWxlTG9hZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbG9hZGVyIHN0YXRlIG9yIG51bGwgaWYgdGhlIGxvYWRlciBpcyBub3QgYWN0aXZlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGxvYWRlclN0YXRlKCk6IE51bGxhYmxlPEdMVEZMb2FkZXJTdGF0ZT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE9ic2VydmFibGUgcmFpc2VkIHdoZW4gdGhlIGxvYWRlciBzdGF0ZSBjaGFuZ2VzLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb25Mb2FkZXJTdGF0ZUNoYW5nZWRPYnNlcnZhYmxlID0gbmV3IE9ic2VydmFibGU8TnVsbGFibGU8R0xURkxvYWRlclN0YXRlPj4oKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgYXNzZXQgaXMgY29tcGxldGVseSBsb2FkZWQuXHJcbiAgICAgKiBAcmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBhc3NldCBpcyBjb21wbGV0ZWx5IGxvYWRlZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHdoZW5Db21wbGV0ZUFzeW5jKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub25Db21wbGV0ZU9ic2VydmFibGUuYWRkT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLm9uRXJyb3JPYnNlcnZhYmxlLmFkZE9uY2UoKHJlYXNvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KHJlYXNvbik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfc2V0U3RhdGUoc3RhdGU6IEdMVEZMb2FkZXJTdGF0ZSk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl9zdGF0ZSA9PT0gc3RhdGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBzdGF0ZTtcclxuICAgICAgICB0aGlzLm9uTG9hZGVyU3RhdGVDaGFuZ2VkT2JzZXJ2YWJsZS5ub3RpZnlPYnNlcnZlcnModGhpcy5fc3RhdGUpO1xyXG4gICAgICAgIHRoaXMuX2xvZyhHTFRGTG9hZGVyU3RhdGVbdGhpcy5fc3RhdGVdKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgX2xvYWRGaWxlKFxyXG4gICAgICAgIHNjZW5lOiBTY2VuZSxcclxuICAgICAgICBmaWxlT3JVcmw6IEZpbGUgfCBzdHJpbmcsXHJcbiAgICAgICAgb25TdWNjZXNzOiAoZGF0YTogc3RyaW5nIHwgQXJyYXlCdWZmZXIpID0+IHZvaWQsXHJcbiAgICAgICAgdXNlQXJyYXlCdWZmZXI/OiBib29sZWFuLFxyXG4gICAgICAgIG9uRXJyb3I/OiAocmVxdWVzdD86IFdlYlJlcXVlc3QpID0+IHZvaWQsXHJcbiAgICAgICAgb25PcGVuZWQ/OiAocmVxdWVzdDogV2ViUmVxdWVzdCkgPT4gdm9pZFxyXG4gICAgKTogSUZpbGVSZXF1ZXN0IHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gc2NlbmUuX2xvYWRGaWxlKFxyXG4gICAgICAgICAgICBmaWxlT3JVcmwsXHJcbiAgICAgICAgICAgIG9uU3VjY2VzcyxcclxuICAgICAgICAgICAgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9vblByb2dyZXNzKGV2ZW50LCByZXF1ZXN0KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdHJ1ZSxcclxuICAgICAgICAgICAgdXNlQXJyYXlCdWZmZXIsXHJcbiAgICAgICAgICAgIG9uRXJyb3IsXHJcbiAgICAgICAgICAgIG9uT3BlbmVkXHJcbiAgICAgICAgKSBhcyBJRmlsZVJlcXVlc3RJbmZvO1xyXG4gICAgICAgIHJlcXVlc3Qub25Db21wbGV0ZU9ic2VydmFibGUuYWRkKChyZXF1ZXN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlcXVlc3RzLnNwbGljZSh0aGlzLl9yZXF1ZXN0cy5pbmRleE9mKHJlcXVlc3QpLCAxKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9yZXF1ZXN0cy5wdXNoKHJlcXVlc3QpO1xyXG4gICAgICAgIHJldHVybiByZXF1ZXN0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX29uUHJvZ3Jlc3MoZXZlbnQ6IFByb2dyZXNzRXZlbnQsIHJlcXVlc3Q6IElGaWxlUmVxdWVzdEluZm8pOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuX3Byb2dyZXNzQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVxdWVzdC5fbGVuZ3RoQ29tcHV0YWJsZSA9IGV2ZW50Lmxlbmd0aENvbXB1dGFibGU7XHJcbiAgICAgICAgcmVxdWVzdC5fbG9hZGVkID0gZXZlbnQubG9hZGVkO1xyXG4gICAgICAgIHJlcXVlc3QuX3RvdGFsID0gZXZlbnQudG90YWw7XHJcblxyXG4gICAgICAgIGxldCBsZW5ndGhDb21wdXRhYmxlID0gdHJ1ZTtcclxuICAgICAgICBsZXQgbG9hZGVkID0gMDtcclxuICAgICAgICBsZXQgdG90YWwgPSAwO1xyXG4gICAgICAgIGZvciAoY29uc3QgcmVxdWVzdCBvZiB0aGlzLl9yZXF1ZXN0cykge1xyXG4gICAgICAgICAgICBpZiAocmVxdWVzdC5fbGVuZ3RoQ29tcHV0YWJsZSA9PT0gdW5kZWZpbmVkIHx8IHJlcXVlc3QuX2xvYWRlZCA9PT0gdW5kZWZpbmVkIHx8IHJlcXVlc3QuX3RvdGFsID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGVuZ3RoQ29tcHV0YWJsZSA9IGxlbmd0aENvbXB1dGFibGUgJiYgcmVxdWVzdC5fbGVuZ3RoQ29tcHV0YWJsZTtcclxuICAgICAgICAgICAgbG9hZGVkICs9IHJlcXVlc3QuX2xvYWRlZDtcclxuICAgICAgICAgICAgdG90YWwgKz0gcmVxdWVzdC5fdG90YWw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9wcm9ncmVzc0NhbGxiYWNrKHtcclxuICAgICAgICAgICAgbGVuZ3RoQ29tcHV0YWJsZTogbGVuZ3RoQ29tcHV0YWJsZSxcclxuICAgICAgICAgICAgbG9hZGVkOiBsb2FkZWQsXHJcbiAgICAgICAgICAgIHRvdGFsOiBsZW5ndGhDb21wdXRhYmxlID8gdG90YWwgOiAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3ZhbGlkYXRlKHNjZW5lOiBTY2VuZSwgZGF0YTogc3RyaW5nIHwgQXJyYXlCdWZmZXJWaWV3LCByb290VXJsID0gXCJcIiwgZmlsZU5hbWUgPSBcIlwiKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnZhbGlkYXRlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX3N0YXJ0UGVyZm9ybWFuY2VDb3VudGVyKFwiVmFsaWRhdGUgSlNPTlwiKTtcclxuICAgICAgICBHTFRGVmFsaWRhdGlvbi5WYWxpZGF0ZUFzeW5jKGRhdGEsIHJvb3RVcmwsIGZpbGVOYW1lLCAodXJpKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByZXByb2Nlc3NVcmxBc3luYyhyb290VXJsICsgdXJpKS50aGVuKCh1cmwpID0+IHNjZW5lLl9sb2FkRmlsZUFzeW5jKHVybCwgdW5kZWZpbmVkLCB0cnVlLCB0cnVlKSBhcyBQcm9taXNlPEFycmF5QnVmZmVyPik7XHJcbiAgICAgICAgfSkudGhlbihcclxuICAgICAgICAgICAgKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZW5kUGVyZm9ybWFuY2VDb3VudGVyKFwiVmFsaWRhdGUgSlNPTlwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMub25WYWxpZGF0ZWRPYnNlcnZhYmxlLm5vdGlmeU9ic2VydmVycyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vblZhbGlkYXRlZE9ic2VydmFibGUuY2xlYXIoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKHJlYXNvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZW5kUGVyZm9ybWFuY2VDb3VudGVyKFwiVmFsaWRhdGUgSlNPTlwiKTtcclxuICAgICAgICAgICAgICAgIFRvb2xzLldhcm4oYEZhaWxlZCB0byB2YWxpZGF0ZTogJHtyZWFzb24ubWVzc2FnZX1gKTtcclxuICAgICAgICAgICAgICAgIHRoaXMub25WYWxpZGF0ZWRPYnNlcnZhYmxlLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2dldExvYWRlcihsb2FkZXJEYXRhOiBJR0xURkxvYWRlckRhdGEpOiBJR0xURkxvYWRlciB7XHJcbiAgICAgICAgY29uc3QgYXNzZXQgPSAoPGFueT5sb2FkZXJEYXRhLmpzb24pLmFzc2V0IHx8IHt9O1xyXG5cclxuICAgICAgICB0aGlzLl9sb2coYEFzc2V0IHZlcnNpb246ICR7YXNzZXQudmVyc2lvbn1gKTtcclxuICAgICAgICBhc3NldC5taW5WZXJzaW9uICYmIHRoaXMuX2xvZyhgQXNzZXQgbWluaW11bSB2ZXJzaW9uOiAke2Fzc2V0Lm1pblZlcnNpb259YCk7XHJcbiAgICAgICAgYXNzZXQuZ2VuZXJhdG9yICYmIHRoaXMuX2xvZyhgQXNzZXQgZ2VuZXJhdG9yOiAke2Fzc2V0LmdlbmVyYXRvcn1gKTtcclxuXHJcbiAgICAgICAgY29uc3QgdmVyc2lvbiA9IEdMVEZGaWxlTG9hZGVyLl9wYXJzZVZlcnNpb24oYXNzZXQudmVyc2lvbik7XHJcbiAgICAgICAgaWYgKCF2ZXJzaW9uKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmVyc2lvbjogXCIgKyBhc3NldC52ZXJzaW9uKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChhc3NldC5taW5WZXJzaW9uICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgY29uc3QgbWluVmVyc2lvbiA9IEdMVEZGaWxlTG9hZGVyLl9wYXJzZVZlcnNpb24oYXNzZXQubWluVmVyc2lvbik7XHJcbiAgICAgICAgICAgIGlmICghbWluVmVyc2lvbikge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBtaW5pbXVtIHZlcnNpb246IFwiICsgYXNzZXQubWluVmVyc2lvbik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChHTFRGRmlsZUxvYWRlci5fY29tcGFyZVZlcnNpb24obWluVmVyc2lvbiwgeyBtYWpvcjogMiwgbWlub3I6IDAgfSkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbmNvbXBhdGlibGUgbWluaW11bSB2ZXJzaW9uOiBcIiArIGFzc2V0Lm1pblZlcnNpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjcmVhdGVMb2FkZXJzOiB7IFtrZXk6IG51bWJlcl06IChwYXJlbnQ6IEdMVEZGaWxlTG9hZGVyKSA9PiBJR0xURkxvYWRlciB9ID0ge1xyXG4gICAgICAgICAgICAxOiBHTFRGRmlsZUxvYWRlci5fQ3JlYXRlR0xURjFMb2FkZXIsXHJcbiAgICAgICAgICAgIDI6IEdMVEZGaWxlTG9hZGVyLl9DcmVhdGVHTFRGMkxvYWRlcixcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBjcmVhdGVMb2FkZXIgPSBjcmVhdGVMb2FkZXJzW3ZlcnNpb24ubWFqb3JdO1xyXG4gICAgICAgIGlmICghY3JlYXRlTG9hZGVyKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuc3VwcG9ydGVkIHZlcnNpb246IFwiICsgYXNzZXQudmVyc2lvbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gY3JlYXRlTG9hZGVyKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3BhcnNlSnNvbihqc29uOiBzdHJpbmcpOiBPYmplY3Qge1xyXG4gICAgICAgIHRoaXMuX3N0YXJ0UGVyZm9ybWFuY2VDb3VudGVyKFwiUGFyc2UgSlNPTlwiKTtcclxuICAgICAgICB0aGlzLl9sb2coYEpTT04gbGVuZ3RoOiAke2pzb24ubGVuZ3RofWApO1xyXG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IEpTT04ucGFyc2UoanNvbik7XHJcbiAgICAgICAgdGhpcy5fZW5kUGVyZm9ybWFuY2VDb3VudGVyKFwiUGFyc2UgSlNPTlwiKTtcclxuICAgICAgICByZXR1cm4gcGFyc2VkO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3VucGFja0JpbmFyeUFzeW5jKGRhdGFSZWFkZXI6IERhdGFSZWFkZXIpOiBQcm9taXNlPElHTFRGTG9hZGVyRGF0YT4ge1xyXG4gICAgICAgIHRoaXMuX3N0YXJ0UGVyZm9ybWFuY2VDb3VudGVyKFwiVW5wYWNrIEJpbmFyeVwiKTtcclxuXHJcbiAgICAgICAgLy8gUmVhZCBtYWdpYyArIHZlcnNpb24gKyBsZW5ndGggKyBqc29uIGxlbmd0aCArIGpzb24gZm9ybWF0XHJcbiAgICAgICAgcmV0dXJuIGRhdGFSZWFkZXIubG9hZEFzeW5jKDIwKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgQmluYXJ5ID0ge1xyXG4gICAgICAgICAgICAgICAgTWFnaWM6IDB4NDY1NDZjNjcsXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtYWdpYyA9IGRhdGFSZWFkZXIucmVhZFVpbnQzMigpO1xyXG4gICAgICAgICAgICBpZiAobWFnaWMgIT09IEJpbmFyeS5NYWdpYykge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJ1bnRpbWVFcnJvcihcIlVuZXhwZWN0ZWQgbWFnaWM6IFwiICsgbWFnaWMsIEVycm9yQ29kZXMuR0xURkxvYWRlclVuZXhwZWN0ZWRNYWdpY0Vycm9yKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgdmVyc2lvbiA9IGRhdGFSZWFkZXIucmVhZFVpbnQzMigpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMubG9nZ2luZ0VuYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvZyhgQmluYXJ5IHZlcnNpb246ICR7dmVyc2lvbn1gKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgbGVuZ3RoID0gZGF0YVJlYWRlci5yZWFkVWludDMyKCk7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy51c2VSYW5nZVJlcXVlc3RzICYmIGxlbmd0aCAhPT0gZGF0YVJlYWRlci5idWZmZXIuYnl0ZUxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgTG9nZ2VyLldhcm4oYExlbmd0aCBpbiBoZWFkZXIgZG9lcyBub3QgbWF0Y2ggYWN0dWFsIGRhdGEgbGVuZ3RoOiAke2xlbmd0aH0gIT0gJHtkYXRhUmVhZGVyLmJ1ZmZlci5ieXRlTGVuZ3RofWApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgdW5wYWNrZWQ6IFByb21pc2U8SUdMVEZMb2FkZXJEYXRhPjtcclxuICAgICAgICAgICAgc3dpdGNoICh2ZXJzaW9uKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6IHtcclxuICAgICAgICAgICAgICAgICAgICB1bnBhY2tlZCA9IHRoaXMuX3VucGFja0JpbmFyeVYxQXN5bmMoZGF0YVJlYWRlciwgbGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhc2UgMjoge1xyXG4gICAgICAgICAgICAgICAgICAgIHVucGFja2VkID0gdGhpcy5fdW5wYWNrQmluYXJ5VjJBc3luYyhkYXRhUmVhZGVyLCBsZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuc3VwcG9ydGVkIHZlcnNpb246IFwiICsgdmVyc2lvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2VuZFBlcmZvcm1hbmNlQ291bnRlcihcIlVucGFjayBCaW5hcnlcIik7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdW5wYWNrZWQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfdW5wYWNrQmluYXJ5VjFBc3luYyhkYXRhUmVhZGVyOiBEYXRhUmVhZGVyLCBsZW5ndGg6IG51bWJlcik6IFByb21pc2U8SUdMVEZMb2FkZXJEYXRhPiB7XHJcbiAgICAgICAgY29uc3QgQ29udGVudEZvcm1hdCA9IHtcclxuICAgICAgICAgICAgSlNPTjogMCxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBjb250ZW50TGVuZ3RoID0gZGF0YVJlYWRlci5yZWFkVWludDMyKCk7XHJcbiAgICAgICAgY29uc3QgY29udGVudEZvcm1hdCA9IGRhdGFSZWFkZXIucmVhZFVpbnQzMigpO1xyXG5cclxuICAgICAgICBpZiAoY29udGVudEZvcm1hdCAhPT0gQ29udGVudEZvcm1hdC5KU09OKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBjb250ZW50IGZvcm1hdDogJHtjb250ZW50Rm9ybWF0fWApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYm9keUxlbmd0aCA9IGxlbmd0aCAtIGRhdGFSZWFkZXIuYnl0ZU9mZnNldDtcclxuXHJcbiAgICAgICAgY29uc3QgZGF0YTogSUdMVEZMb2FkZXJEYXRhID0geyBqc29uOiB0aGlzLl9wYXJzZUpzb24oZGF0YVJlYWRlci5yZWFkU3RyaW5nKGNvbnRlbnRMZW5ndGgpKSwgYmluOiBudWxsIH07XHJcbiAgICAgICAgaWYgKGJvZHlMZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgY29uc3Qgc3RhcnRCeXRlT2Zmc2V0ID0gZGF0YVJlYWRlci5ieXRlT2Zmc2V0O1xyXG4gICAgICAgICAgICBkYXRhLmJpbiA9IHtcclxuICAgICAgICAgICAgICAgIHJlYWRBc3luYzogKGJ5dGVPZmZzZXQsIGJ5dGVMZW5ndGgpID0+IGRhdGFSZWFkZXIuYnVmZmVyLnJlYWRBc3luYyhzdGFydEJ5dGVPZmZzZXQgKyBieXRlT2Zmc2V0LCBieXRlTGVuZ3RoKSxcclxuICAgICAgICAgICAgICAgIGJ5dGVMZW5ndGg6IGJvZHlMZW5ndGgsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3VucGFja0JpbmFyeVYyQXN5bmMoZGF0YVJlYWRlcjogRGF0YVJlYWRlciwgbGVuZ3RoOiBudW1iZXIpOiBQcm9taXNlPElHTFRGTG9hZGVyRGF0YT4ge1xyXG4gICAgICAgIGNvbnN0IENodW5rRm9ybWF0ID0ge1xyXG4gICAgICAgICAgICBKU09OOiAweDRlNGY1MzRhLFxyXG4gICAgICAgICAgICBCSU46IDB4MDA0ZTQ5NDIsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gUmVhZCB0aGUgSlNPTiBjaHVuayBoZWFkZXIuXHJcbiAgICAgICAgY29uc3QgY2h1bmtMZW5ndGggPSBkYXRhUmVhZGVyLnJlYWRVaW50MzIoKTtcclxuICAgICAgICBjb25zdCBjaHVua0Zvcm1hdCA9IGRhdGFSZWFkZXIucmVhZFVpbnQzMigpO1xyXG4gICAgICAgIGlmIChjaHVua0Zvcm1hdCAhPT0gQ2h1bmtGb3JtYXQuSlNPTikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGaXJzdCBjaHVuayBmb3JtYXQgaXMgbm90IEpTT05cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBCYWlsIGlmIHRoZXJlIGFyZSBubyBvdGhlciBjaHVua3MuXHJcbiAgICAgICAgaWYgKGRhdGFSZWFkZXIuYnl0ZU9mZnNldCArIGNodW5rTGVuZ3RoID09PSBsZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGFSZWFkZXIubG9hZEFzeW5jKGNodW5rTGVuZ3RoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IGpzb246IHRoaXMuX3BhcnNlSnNvbihkYXRhUmVhZGVyLnJlYWRTdHJpbmcoY2h1bmtMZW5ndGgpKSwgYmluOiBudWxsIH07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gUmVhZCB0aGUgSlNPTiBjaHVuayBhbmQgdGhlIGxlbmd0aCBhbmQgdHlwZSBvZiB0aGUgbmV4dCBjaHVuay5cclxuICAgICAgICByZXR1cm4gZGF0YVJlYWRlci5sb2FkQXN5bmMoY2h1bmtMZW5ndGggKyA4KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YTogSUdMVEZMb2FkZXJEYXRhID0geyBqc29uOiB0aGlzLl9wYXJzZUpzb24oZGF0YVJlYWRlci5yZWFkU3RyaW5nKGNodW5rTGVuZ3RoKSksIGJpbjogbnVsbCB9O1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVhZEFzeW5jID0gKCk6IFByb21pc2U8SUdMVEZMb2FkZXJEYXRhPiA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaHVua0xlbmd0aCA9IGRhdGFSZWFkZXIucmVhZFVpbnQzMigpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2h1bmtGb3JtYXQgPSBkYXRhUmVhZGVyLnJlYWRVaW50MzIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGNodW5rRm9ybWF0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBDaHVua0Zvcm1hdC5KU09OOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuZXhwZWN0ZWQgSlNPTiBjaHVua1wiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBDaHVua0Zvcm1hdC5CSU46IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhcnRCeXRlT2Zmc2V0ID0gZGF0YVJlYWRlci5ieXRlT2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmJpbiA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRBc3luYzogKGJ5dGVPZmZzZXQsIGJ5dGVMZW5ndGgpID0+IGRhdGFSZWFkZXIuYnVmZmVyLnJlYWRBc3luYyhzdGFydEJ5dGVPZmZzZXQgKyBieXRlT2Zmc2V0LCBieXRlTGVuZ3RoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ5dGVMZW5ndGg6IGNodW5rTGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhUmVhZGVyLnNraXBCeXRlcyhjaHVua0xlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlnbm9yZSB1bnJlY29nbml6ZWQgY2h1bmtGb3JtYXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVJlYWRlci5za2lwQnl0ZXMoY2h1bmtMZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGFSZWFkZXIuYnl0ZU9mZnNldCAhPT0gbGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFSZWFkZXIubG9hZEFzeW5jKDgpLnRoZW4ocmVhZEFzeW5jKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGRhdGEpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJlYWRBc3luYygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9wYXJzZVZlcnNpb24odmVyc2lvbjogc3RyaW5nKTogTnVsbGFibGU8eyBtYWpvcjogbnVtYmVyOyBtaW5vcjogbnVtYmVyIH0+IHtcclxuICAgICAgICBpZiAodmVyc2lvbiA9PT0gXCIxLjBcIiB8fCB2ZXJzaW9uID09PSBcIjEuMC4xXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIG1ham9yOiAxLFxyXG4gICAgICAgICAgICAgICAgbWlub3I6IDAsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBtYXRjaCA9ICh2ZXJzaW9uICsgXCJcIikubWF0Y2goL14oXFxkKylcXC4oXFxkKykvKTtcclxuICAgICAgICBpZiAoIW1hdGNoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbWFqb3I6IHBhcnNlSW50KG1hdGNoWzFdKSxcclxuICAgICAgICAgICAgbWlub3I6IHBhcnNlSW50KG1hdGNoWzJdKSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9jb21wYXJlVmVyc2lvbihhOiB7IG1ham9yOiBudW1iZXI7IG1pbm9yOiBudW1iZXIgfSwgYjogeyBtYWpvcjogbnVtYmVyOyBtaW5vcjogbnVtYmVyIH0pOiBudW1iZXIge1xyXG4gICAgICAgIGlmIChhLm1ham9yID4gYi5tYWpvcikge1xyXG4gICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGEubWFqb3IgPCBiLm1ham9yKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGEubWlub3IgPiBiLm1pbm9yKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYS5taW5vciA8IGIubWlub3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBfbG9nU3BhY2VzID0gXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiO1xyXG4gICAgcHJpdmF0ZSBfbG9nSW5kZW50TGV2ZWwgPSAwO1xyXG4gICAgcHJpdmF0ZSBfbG9nZ2luZ0VuYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgX2xvZyA9IHRoaXMuX2xvZ0Rpc2FibGVkO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfbG9nT3BlbihtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9sb2cobWVzc2FnZSk7XHJcbiAgICAgICAgdGhpcy5fbG9nSW5kZW50TGV2ZWwrKztcclxuICAgIH1cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgX2xvZ0Nsb3NlKCk6IHZvaWQge1xyXG4gICAgICAgIC0tdGhpcy5fbG9nSW5kZW50TGV2ZWw7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9nRW5hYmxlZChtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBzcGFjZXMgPSBHTFRGRmlsZUxvYWRlci5fbG9nU3BhY2VzLnN1YnN0cigwLCB0aGlzLl9sb2dJbmRlbnRMZXZlbCAqIDIpO1xyXG4gICAgICAgIExvZ2dlci5Mb2coYCR7c3BhY2VzfSR7bWVzc2FnZX1gKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9sb2dEaXNhYmxlZChtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHt9XHJcblxyXG4gICAgcHJpdmF0ZSBfY2FwdHVyZVBlcmZvcm1hbmNlQ291bnRlcnMgPSBmYWxzZTtcclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgX3N0YXJ0UGVyZm9ybWFuY2VDb3VudGVyID0gdGhpcy5fc3RhcnRQZXJmb3JtYW5jZUNvdW50ZXJEaXNhYmxlZDtcclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgX2VuZFBlcmZvcm1hbmNlQ291bnRlciA9IHRoaXMuX2VuZFBlcmZvcm1hbmNlQ291bnRlckRpc2FibGVkO1xyXG5cclxuICAgIHByaXZhdGUgX3N0YXJ0UGVyZm9ybWFuY2VDb3VudGVyRW5hYmxlZChjb3VudGVyTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgVG9vbHMuU3RhcnRQZXJmb3JtYW5jZUNvdW50ZXIoY291bnRlck5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3N0YXJ0UGVyZm9ybWFuY2VDb3VudGVyRGlzYWJsZWQoY291bnRlck5hbWU6IHN0cmluZyk6IHZvaWQge31cclxuXHJcbiAgICBwcml2YXRlIF9lbmRQZXJmb3JtYW5jZUNvdW50ZXJFbmFibGVkKGNvdW50ZXJOYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBUb29scy5FbmRQZXJmb3JtYW5jZUNvdW50ZXIoY291bnRlck5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2VuZFBlcmZvcm1hbmNlQ291bnRlckRpc2FibGVkKGNvdW50ZXJOYW1lOiBzdHJpbmcpOiB2b2lkIHt9XHJcbn1cclxuXHJcbmlmIChTY2VuZUxvYWRlcikge1xyXG4gICAgU2NlbmVMb2FkZXIuUmVnaXN0ZXJQbHVnaW4obmV3IEdMVEZGaWxlTG9hZGVyKCkpO1xyXG59XHJcbiIsImltcG9ydCB0eXBlICogYXMgR0xURjIgZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBUb29scyB9IGZyb20gXCJjb3JlL01pc2MvdG9vbHNcIjtcclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZGVjbGFyZSBsZXQgR0xURlZhbGlkYXRvcjogR0xURjIuSUdMVEZWYWxpZGF0b3I7XHJcblxyXG4vLyBXb3JrZXJHbG9iYWxTY29wZVxyXG5kZWNsYXJlIGZ1bmN0aW9uIGltcG9ydFNjcmlwdHMoLi4udXJsczogc3RyaW5nW10pOiB2b2lkO1xyXG5kZWNsYXJlIGZ1bmN0aW9uIHBvc3RNZXNzYWdlKG1lc3NhZ2U6IGFueSwgdHJhbnNmZXI/OiBhbnlbXSk6IHZvaWQ7XHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZUFzeW5jKFxyXG4gICAgZGF0YTogc3RyaW5nIHwgQXJyYXlCdWZmZXIsXHJcbiAgICByb290VXJsOiBzdHJpbmcsXHJcbiAgICBmaWxlTmFtZTogc3RyaW5nLFxyXG4gICAgZ2V0RXh0ZXJuYWxSZXNvdXJjZTogKHVyaTogc3RyaW5nKSA9PiBQcm9taXNlPEFycmF5QnVmZmVyPlxyXG4pOiBQcm9taXNlPEdMVEYyLklHTFRGVmFsaWRhdGlvblJlc3VsdHM+IHtcclxuICAgIGNvbnN0IG9wdGlvbnM6IEdMVEYyLklHTFRGVmFsaWRhdGlvbk9wdGlvbnMgPSB7XHJcbiAgICAgICAgZXh0ZXJuYWxSZXNvdXJjZUZ1bmN0aW9uOiAodXJpKSA9PiBnZXRFeHRlcm5hbFJlc291cmNlKHVyaSkudGhlbigodmFsdWUpID0+IG5ldyBVaW50OEFycmF5KHZhbHVlKSksXHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChmaWxlTmFtZSkge1xyXG4gICAgICAgIG9wdGlvbnMudXJpID0gcm9vdFVybCA9PT0gXCJmaWxlOlwiID8gZmlsZU5hbWUgOiByb290VXJsICsgZmlsZU5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRhdGEgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlciA/IEdMVEZWYWxpZGF0b3IudmFsaWRhdGVCeXRlcyhuZXcgVWludDhBcnJheShkYXRhKSwgb3B0aW9ucykgOiBHTFRGVmFsaWRhdG9yLnZhbGlkYXRlU3RyaW5nKGRhdGEsIG9wdGlvbnMpO1xyXG59XHJcblxyXG4vKipcclxuICogVGhlIHdvcmtlciBmdW5jdGlvbiB0aGF0IGdldHMgY29udmVydGVkIHRvIGEgYmxvYiB1cmwgdG8gcGFzcyBpbnRvIGEgd29ya2VyLlxyXG4gKi9cclxuZnVuY3Rpb24gd29ya2VyRnVuYygpOiB2b2lkIHtcclxuICAgIGNvbnN0IHBlbmRpbmdFeHRlcm5hbFJlc291cmNlczogQXJyYXk8eyByZXNvbHZlOiAoZGF0YTogYW55KSA9PiB2b2lkOyByZWplY3Q6IChyZWFzb246IGFueSkgPT4gdm9pZCB9PiA9IFtdO1xyXG5cclxuICAgIG9ubWVzc2FnZSA9IChtZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IG1lc3NhZ2UuZGF0YTtcclxuICAgICAgICBzd2l0Y2ggKGRhdGEuaWQpIHtcclxuICAgICAgICAgICAgY2FzZSBcImluaXRcIjoge1xyXG4gICAgICAgICAgICAgICAgaW1wb3J0U2NyaXB0cyhkYXRhLnVybCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwidmFsaWRhdGVcIjoge1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGVBc3luYyhcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5yb290VXJsLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuZmlsZU5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgKHVyaSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBwZW5kaW5nRXh0ZXJuYWxSZXNvdXJjZXMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVuZGluZ0V4dGVybmFsUmVzb3VyY2VzLnB1c2goeyByZXNvbHZlLCByZWplY3QgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0TWVzc2FnZSh7IGlkOiBcImdldEV4dGVybmFsUmVzb3VyY2VcIiwgaW5kZXg6IGluZGV4LCB1cmk6IHVyaSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICkudGhlbihcclxuICAgICAgICAgICAgICAgICAgICAodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zdE1lc3NhZ2UoeyBpZDogXCJ2YWxpZGF0ZS5yZXNvbHZlXCIsIHZhbHVlOiB2YWx1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIChyZWFzb24pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zdE1lc3NhZ2UoeyBpZDogXCJ2YWxpZGF0ZS5yZWplY3RcIiwgcmVhc29uOiByZWFzb24gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJnZXRFeHRlcm5hbFJlc291cmNlLnJlc29sdmVcIjoge1xyXG4gICAgICAgICAgICAgICAgcGVuZGluZ0V4dGVybmFsUmVzb3VyY2VzW2RhdGEuaW5kZXhdLnJlc29sdmUoZGF0YS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwiZ2V0RXh0ZXJuYWxSZXNvdXJjZS5yZWplY3RcIjoge1xyXG4gICAgICAgICAgICAgICAgcGVuZGluZ0V4dGVybmFsUmVzb3VyY2VzW2RhdGEuaW5kZXhdLnJlamVjdChkYXRhLnJlYXNvbik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb25maWd1cmF0aW9uIGZvciBnbFRGIHZhbGlkYXRpb25cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUdMVEZWYWxpZGF0aW9uQ29uZmlndXJhdGlvbiB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSB1cmwgb2YgdGhlIGdsVEYgdmFsaWRhdG9yLlxyXG4gICAgICovXHJcbiAgICB1cmw6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIGdsVEYgdmFsaWRhdGlvblxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEdMVEZWYWxpZGF0aW9uIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIGNvbmZpZ3VyYXRpb24uIERlZmF1bHRzIHRvIGB7IHVybDogXCJodHRwczovL2Nkbi5iYWJ5bG9uanMuY29tL2dsdGZfdmFsaWRhdG9yLmpzXCIgfWAuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgQ29uZmlndXJhdGlvbjogSUdMVEZWYWxpZGF0aW9uQ29uZmlndXJhdGlvbiA9IHtcclxuICAgICAgICB1cmw6IGAke1Rvb2xzLl9EZWZhdWx0Q2RuVXJsfS9nbHRmX3ZhbGlkYXRvci5qc2AsXHJcbiAgICB9O1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9Mb2FkU2NyaXB0UHJvbWlzZTogUHJvbWlzZTx2b2lkPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFZhbGlkYXRlIGEgZ2xURiBhc3NldCB1c2luZyB0aGUgZ2xURi1WYWxpZGF0b3IuXHJcbiAgICAgKiBAcGFyYW0gZGF0YSBUaGUgSlNPTiBvZiBhIGdsVEYgb3IgdGhlIGFycmF5IGJ1ZmZlciBvZiBhIGJpbmFyeSBnbFRGXHJcbiAgICAgKiBAcGFyYW0gcm9vdFVybCBUaGUgcm9vdCB1cmwgZm9yIHRoZSBnbFRGXHJcbiAgICAgKiBAcGFyYW0gZmlsZU5hbWUgVGhlIGZpbGUgbmFtZSBmb3IgdGhlIGdsVEZcclxuICAgICAqIEBwYXJhbSBnZXRFeHRlcm5hbFJlc291cmNlIFRoZSBjYWxsYmFjayB0byBnZXQgZXh0ZXJuYWwgcmVzb3VyY2VzIGZvciB0aGUgZ2xURiB2YWxpZGF0b3JcclxuICAgICAqIEByZXR1cm5zIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGdsVEYgdmFsaWRhdGlvbiByZXN1bHRzIG9uY2UgY29tcGxldGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBWYWxpZGF0ZUFzeW5jKFxyXG4gICAgICAgIGRhdGE6IHN0cmluZyB8IEFycmF5QnVmZmVyVmlldyxcclxuICAgICAgICByb290VXJsOiBzdHJpbmcsXHJcbiAgICAgICAgZmlsZU5hbWU6IHN0cmluZyxcclxuICAgICAgICBnZXRFeHRlcm5hbFJlc291cmNlOiAodXJpOiBzdHJpbmcpID0+IFByb21pc2U8QXJyYXlCdWZmZXI+XHJcbiAgICApOiBQcm9taXNlPEdMVEYyLklHTFRGVmFsaWRhdGlvblJlc3VsdHM+IHtcclxuICAgICAgICBjb25zdCBkYXRhQ29weSA9IEFycmF5QnVmZmVyLmlzVmlldyhkYXRhKSA/IChkYXRhIGFzIFVpbnQ4QXJyYXkpLnNsaWNlKCkuYnVmZmVyIDogKGRhdGEgYXMgc3RyaW5nKTtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBXb3JrZXIgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgd29ya2VyQ29udGVudCA9IGAke3ZhbGlkYXRlQXN5bmN9KCR7d29ya2VyRnVuY30pKClgO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgd29ya2VyQmxvYlVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwobmV3IEJsb2IoW3dvcmtlckNvbnRlbnRdLCB7IHR5cGU6IFwiYXBwbGljYXRpb24vamF2YXNjcmlwdFwiIH0pKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHdvcmtlciA9IG5ldyBXb3JrZXIod29ya2VyQmxvYlVybCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgb25FcnJvciA9IChlcnJvcjogRXJyb3JFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHdvcmtlci5yZW1vdmVFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgb25FcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgd29ya2VyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIG9uTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgb25NZXNzYWdlID0gKG1lc3NhZ2U6IE1lc3NhZ2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBtZXNzYWdlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChkYXRhLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJnZXRFeHRlcm5hbFJlc291cmNlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldEV4dGVybmFsUmVzb3VyY2UoZGF0YS51cmkpLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtlci5wb3N0TWVzc2FnZSh7IGlkOiBcImdldEV4dGVybmFsUmVzb3VyY2UucmVzb2x2ZVwiLCBpbmRleDogZGF0YS5pbmRleCwgdmFsdWU6IHZhbHVlIH0sIFt2YWx1ZV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJlYXNvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JrZXIucG9zdE1lc3NhZ2UoeyBpZDogXCJnZXRFeHRlcm5hbFJlc291cmNlLnJlamVjdFwiLCBpbmRleDogZGF0YS5pbmRleCwgcmVhc29uOiByZWFzb24gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ2YWxpZGF0ZS5yZXNvbHZlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtlci5yZW1vdmVFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgb25FcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JrZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgb25NZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JrZXIudGVybWluYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwidmFsaWRhdGUucmVqZWN0XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtlci5yZW1vdmVFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgb25FcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JrZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgb25NZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChkYXRhLnJlYXNvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JrZXIudGVybWluYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIHdvcmtlci5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgb25FcnJvcik7XHJcbiAgICAgICAgICAgICAgICB3b3JrZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgb25NZXNzYWdlKTtcclxuXHJcbiAgICAgICAgICAgICAgICB3b3JrZXIucG9zdE1lc3NhZ2UoeyBpZDogXCJpbml0XCIsIHVybDogVG9vbHMuR2V0QmFieWxvblNjcmlwdFVSTCh0aGlzLkNvbmZpZ3VyYXRpb24udXJsKSB9KTtcclxuICAgICAgICAgICAgICAgIHdvcmtlci5wb3N0TWVzc2FnZSh7IGlkOiBcInZhbGlkYXRlXCIsIGRhdGE6IGRhdGFDb3B5LCByb290VXJsOiByb290VXJsLCBmaWxlTmFtZTogZmlsZU5hbWUgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5fTG9hZFNjcmlwdFByb21pc2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX0xvYWRTY3JpcHRQcm9taXNlID0gVG9vbHMuTG9hZEJhYnlsb25TY3JpcHRBc3luYyh0aGlzLkNvbmZpZ3VyYXRpb24udXJsKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX0xvYWRTY3JpcHRQcm9taXNlLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbGlkYXRlQXN5bmMoZGF0YUNvcHksIHJvb3RVcmwsIGZpbGVOYW1lLCBnZXRFeHRlcm5hbFJlc291cmNlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCAqIGFzIEZpbGVMb2FkZXIgZnJvbSBcImxvYWRlcnMvZ2xURi9nbFRGRmlsZUxvYWRlclwiO1xyXG5pbXBvcnQgKiBhcyBWYWxpZGF0aW9uIGZyb20gXCJsb2FkZXJzL2dsVEYvZ2xURlZhbGlkYXRpb25cIjtcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGlzIHRoZSBlbnRyeSBwb2ludCBmb3IgdGhlIFVNRCBtb2R1bGUuXHJcbiAqIFRoZSBlbnRyeSBwb2ludCBmb3IgYSBmdXR1cmUgRVNNIHBhY2thZ2Ugc2hvdWxkIGJlIGluZGV4LnRzXHJcbiAqL1xyXG5jb25zdCBnbG9iYWxPYmplY3QgPSB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHVuZGVmaW5lZDtcclxuaWYgKHR5cGVvZiBnbG9iYWxPYmplY3QgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICg8YW55Pmdsb2JhbE9iamVjdCkuQkFCWUxPTiA9ICg8YW55Pmdsb2JhbE9iamVjdCkuQkFCWUxPTiB8fCB7fTtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIEZpbGVMb2FkZXIpIHtcclxuICAgICAgICAoPGFueT5nbG9iYWxPYmplY3QpLkJBQllMT05ba2V5XSA9ICg8YW55PkZpbGVMb2FkZXIpW2tleV07XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBWYWxpZGF0aW9uKSB7XHJcbiAgICAgICAgKDxhbnk+Z2xvYmFsT2JqZWN0KS5CQUJZTE9OW2tleV0gPSAoPGFueT5WYWxpZGF0aW9uKVtrZXldO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgKiBmcm9tIFwibG9hZGVycy9nbFRGL2dsVEZGaWxlTG9hZGVyXCI7XHJcbmV4cG9ydCAqIGZyb20gXCJsb2FkZXJzL2dsVEYvZ2xURlZhbGlkYXRpb25cIjtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWludGVybmFsLW1vZHVsZXMgKi9cclxuaW1wb3J0ICogYXMgRXh0ZW5zaW9ucyBmcm9tIFwibG9hZGVycy9nbFRGLzIuMC9FeHRlbnNpb25zL2luZGV4XCI7XHJcbmltcG9ydCAqIGFzIEludGVyZmFjZXMgZnJvbSBcImxvYWRlcnMvZ2xURi8yLjAvZ2xURkxvYWRlckludGVyZmFjZXNcIjtcclxuaW1wb3J0ICogYXMgR0xURjIgZnJvbSBcImxvYWRlcnMvZ2xURi8yLjAvaW5kZXhcIjtcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGlzIHRoZSBlbnRyeSBwb2ludCBmb3IgdGhlIFVNRCBtb2R1bGUuXHJcbiAqIFRoZSBlbnRyeSBwb2ludCBmb3IgYSBmdXR1cmUgRVNNIHBhY2thZ2Ugc2hvdWxkIGJlIGluZGV4LnRzXHJcbiAqL1xyXG5jb25zdCBnbG9iYWxPYmplY3QgPSB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHVuZGVmaW5lZDtcclxuaWYgKHR5cGVvZiBnbG9iYWxPYmplY3QgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICg8YW55Pmdsb2JhbE9iamVjdCkuQkFCWUxPTiA9ICg8YW55Pmdsb2JhbE9iamVjdCkuQkFCWUxPTiB8fCB7fTtcclxuICAgIGNvbnN0IEJBQllMT04gPSAoPGFueT5nbG9iYWxPYmplY3QpLkJBQllMT047XHJcbiAgICBCQUJZTE9OLkdMVEYyID0gQkFCWUxPTi5HTFRGMiB8fCB7fTtcclxuICAgIEJBQllMT04uR0xURjIuTG9hZGVyID0gQkFCWUxPTi5HTFRGMi5Mb2FkZXIgfHwge307XHJcbiAgICBCQUJZTE9OLkdMVEYyLkxvYWRlci5FeHRlbnNpb25zID0gQkFCWUxPTi5HTFRGMi5Mb2FkZXIuRXh0ZW5zaW9ucyB8fCB7fTtcclxuXHJcbiAgICBjb25zdCBrZXlzID0gW107XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBFeHRlbnNpb25zKSB7XHJcbiAgICAgICAgQkFCWUxPTi5HTFRGMi5Mb2FkZXIuRXh0ZW5zaW9uc1trZXldID0gKDxhbnk+RXh0ZW5zaW9ucylba2V5XTtcclxuICAgICAgICBrZXlzLnB1c2goa2V5KTtcclxuICAgIH1cclxuICAgIGZvciAoY29uc3Qga2V5IGluIEludGVyZmFjZXMpIHtcclxuICAgICAgICBCQUJZTE9OLkdMVEYyLkxvYWRlcltrZXldID0gKDxhbnk+SW50ZXJmYWNlcylba2V5XTtcclxuICAgICAgICBrZXlzLnB1c2goa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBHTFRGMikge1xyXG4gICAgICAgIC8vIFByZXZlbnQgUmVhc3NpZ25tZW50LlxyXG4gICAgICAgIGlmIChrZXlzLmluZGV4T2Yoa2V5KSA+IC0xKSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQkFCWUxPTi5HTFRGMltrZXldID0gKDxhbnk+R0xURjIpW2tleV07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IEdMVEYyIH07XHJcbiIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvZXhwb3J0XHJcbmV4cG9ydCAqIGZyb20gXCIuL2xlZ2FjeS1nbFRGXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2xlZ2FjeS1nbFRGMlwiO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfYmFieWxvbmpzX01pc2Nfb2JzZXJ2YWJsZV9fOyIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxuXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlLCBTdXBwcmVzc2VkRXJyb3IsIFN5bWJvbCAqL1xuXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcbiAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcbiAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbn1cblxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xuICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xuICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHQ7XG4gIH1cbiAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xuICB2YXIgdCA9IHt9O1xuICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgIHRbcF0gPSBzW3BdO1xuICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxuICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgIH1cbiAgcmV0dXJuIHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xuICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fZXNEZWNvcmF0ZShjdG9yLCBkZXNjcmlwdG9ySW4sIGRlY29yYXRvcnMsIGNvbnRleHRJbiwgaW5pdGlhbGl6ZXJzLCBleHRyYUluaXRpYWxpemVycykge1xuICBmdW5jdGlvbiBhY2NlcHQoZikgeyBpZiAoZiAhPT0gdm9pZCAwICYmIHR5cGVvZiBmICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJGdW5jdGlvbiBleHBlY3RlZFwiKTsgcmV0dXJuIGY7IH1cbiAgdmFyIGtpbmQgPSBjb250ZXh0SW4ua2luZCwga2V5ID0ga2luZCA9PT0gXCJnZXR0ZXJcIiA/IFwiZ2V0XCIgOiBraW5kID09PSBcInNldHRlclwiID8gXCJzZXRcIiA6IFwidmFsdWVcIjtcbiAgdmFyIHRhcmdldCA9ICFkZXNjcmlwdG9ySW4gJiYgY3RvciA/IGNvbnRleHRJbltcInN0YXRpY1wiXSA/IGN0b3IgOiBjdG9yLnByb3RvdHlwZSA6IG51bGw7XG4gIHZhciBkZXNjcmlwdG9yID0gZGVzY3JpcHRvckluIHx8ICh0YXJnZXQgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwgY29udGV4dEluLm5hbWUpIDoge30pO1xuICB2YXIgXywgZG9uZSA9IGZhbHNlO1xuICBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgdmFyIGNvbnRleHQgPSB7fTtcbiAgICAgIGZvciAodmFyIHAgaW4gY29udGV4dEluKSBjb250ZXh0W3BdID0gcCA9PT0gXCJhY2Nlc3NcIiA/IHt9IDogY29udGV4dEluW3BdO1xuICAgICAgZm9yICh2YXIgcCBpbiBjb250ZXh0SW4uYWNjZXNzKSBjb250ZXh0LmFjY2Vzc1twXSA9IGNvbnRleHRJbi5hY2Nlc3NbcF07XG4gICAgICBjb250ZXh0LmFkZEluaXRpYWxpemVyID0gZnVuY3Rpb24gKGYpIHsgaWYgKGRvbmUpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgYWRkIGluaXRpYWxpemVycyBhZnRlciBkZWNvcmF0aW9uIGhhcyBjb21wbGV0ZWRcIik7IGV4dHJhSW5pdGlhbGl6ZXJzLnB1c2goYWNjZXB0KGYgfHwgbnVsbCkpOyB9O1xuICAgICAgdmFyIHJlc3VsdCA9ICgwLCBkZWNvcmF0b3JzW2ldKShraW5kID09PSBcImFjY2Vzc29yXCIgPyB7IGdldDogZGVzY3JpcHRvci5nZXQsIHNldDogZGVzY3JpcHRvci5zZXQgfSA6IGRlc2NyaXB0b3Jba2V5XSwgY29udGV4dCk7XG4gICAgICBpZiAoa2luZCA9PT0gXCJhY2Nlc3NvclwiKSB7XG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gdm9pZCAwKSBjb250aW51ZTtcbiAgICAgICAgICBpZiAocmVzdWx0ID09PSBudWxsIHx8IHR5cGVvZiByZXN1bHQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3QgZXhwZWN0ZWRcIik7XG4gICAgICAgICAgaWYgKF8gPSBhY2NlcHQocmVzdWx0LmdldCkpIGRlc2NyaXB0b3IuZ2V0ID0gXztcbiAgICAgICAgICBpZiAoXyA9IGFjY2VwdChyZXN1bHQuc2V0KSkgZGVzY3JpcHRvci5zZXQgPSBfO1xuICAgICAgICAgIGlmIChfID0gYWNjZXB0KHJlc3VsdC5pbml0KSkgaW5pdGlhbGl6ZXJzLnVuc2hpZnQoXyk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChfID0gYWNjZXB0KHJlc3VsdCkpIHtcbiAgICAgICAgICBpZiAoa2luZCA9PT0gXCJmaWVsZFwiKSBpbml0aWFsaXplcnMudW5zaGlmdChfKTtcbiAgICAgICAgICBlbHNlIGRlc2NyaXB0b3Jba2V5XSA9IF87XG4gICAgICB9XG4gIH1cbiAgaWYgKHRhcmdldCkgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgY29udGV4dEluLm5hbWUsIGRlc2NyaXB0b3IpO1xuICBkb25lID0gdHJ1ZTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3J1bkluaXRpYWxpemVycyh0aGlzQXJnLCBpbml0aWFsaXplcnMsIHZhbHVlKSB7XG4gIHZhciB1c2VWYWx1ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGluaXRpYWxpemVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFsdWUgPSB1c2VWYWx1ZSA/IGluaXRpYWxpemVyc1tpXS5jYWxsKHRoaXNBcmcsIHZhbHVlKSA6IGluaXRpYWxpemVyc1tpXS5jYWxsKHRoaXNBcmcpO1xuICB9XG4gIHJldHVybiB1c2VWYWx1ZSA/IHZhbHVlIDogdm9pZCAwO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fcHJvcEtleSh4KSB7XG4gIHJldHVybiB0eXBlb2YgeCA9PT0gXCJzeW1ib2xcIiA/IHggOiBcIlwiLmNvbmNhdCh4KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3NldEZ1bmN0aW9uTmFtZShmLCBuYW1lLCBwcmVmaXgpIHtcbiAgaWYgKHR5cGVvZiBuYW1lID09PSBcInN5bWJvbFwiKSBuYW1lID0gbmFtZS5kZXNjcmlwdGlvbiA/IFwiW1wiLmNvbmNhdChuYW1lLmRlc2NyaXB0aW9uLCBcIl1cIikgOiBcIlwiO1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGYsIFwibmFtZVwiLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHByZWZpeCA/IFwiXCIuY29uY2F0KHByZWZpeCwgXCIgXCIsIG5hbWUpIDogbmFtZSB9KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XG4gIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgd2hpbGUgKGcgJiYgKGcgPSAwLCBvcFswXSAmJiAoXyA9IDApKSwgXykgdHJ5IHtcbiAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICB9XG59XG5cbmV4cG9ydCB2YXIgX19jcmVhdGVCaW5kaW5nID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XG4gIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XG4gICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xuICB9XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICBvW2syXSA9IG1ba107XG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBvKSB7XG4gIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcbiAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcbiAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XG4gIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcbiAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xuICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcbiAgICAgIH1cbiAgfTtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcbiAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xuICBpZiAoIW0pIHJldHVybiBvO1xuICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcbiAgdHJ5IHtcbiAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xuICB9XG4gIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxuICBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XG4gICAgICB9XG4gICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cbiAgfVxuICByZXR1cm4gYXI7XG59XG5cbi8qKiBAZGVwcmVjYXRlZCAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xuICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcbiAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcbiAgcmV0dXJuIGFyO1xufVxuXG4vKiogQGRlcHJlY2F0ZWQgKi9cbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcbiAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XG4gIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcbiAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxuICAgICAgICAgIHJba10gPSBhW2pdO1xuICByZXR1cm4gcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXkodG8sIGZyb20sIHBhY2spIHtcbiAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcbiAgICAgIGlmIChhciB8fCAhKGkgaW4gZnJvbSkpIHtcbiAgICAgICAgICBpZiAoIWFyKSBhciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20sIDAsIGkpO1xuICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcbiAgICAgIH1cbiAgfVxuICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xuICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XG4gIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XG4gIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XG4gIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcbiAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XG4gIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cbiAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XG4gIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cbiAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxuICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcbiAgdmFyIGksIHA7XG4gIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XG4gIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IGZhbHNlIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcbiAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcbiAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcbiAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xuICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XG4gIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XG4gIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XG4gIHJldHVybiBjb29rZWQ7XG59O1xuXG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xuICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcbiAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XG4gIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcbiAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcbiAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xuICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBzZXR0ZXJcIik7XG4gIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEluKHN0YXRlLCByZWNlaXZlcikge1xuICBpZiAocmVjZWl2ZXIgPT09IG51bGwgfHwgKHR5cGVvZiByZWNlaXZlciAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgcmVjZWl2ZXIgIT09IFwiZnVuY3Rpb25cIikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgdXNlICdpbicgb3BlcmF0b3Igb24gbm9uLW9iamVjdFwiKTtcbiAgcmV0dXJuIHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgPT09IHN0YXRlIDogc3RhdGUuaGFzKHJlY2VpdmVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fYWRkRGlzcG9zYWJsZVJlc291cmNlKGVudiwgdmFsdWUsIGFzeW5jKSB7XG4gIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdm9pZCAwKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgdmFsdWUgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdCBleHBlY3RlZC5cIik7XG4gICAgdmFyIGRpc3Bvc2U7XG4gICAgaWYgKGFzeW5jKSB7XG4gICAgICAgIGlmICghU3ltYm9sLmFzeW5jRGlzcG9zZSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0Rpc3Bvc2UgaXMgbm90IGRlZmluZWQuXCIpO1xuICAgICAgICBkaXNwb3NlID0gdmFsdWVbU3ltYm9sLmFzeW5jRGlzcG9zZV07XG4gICAgfVxuICAgIGlmIChkaXNwb3NlID09PSB2b2lkIDApIHtcbiAgICAgICAgaWYgKCFTeW1ib2wuZGlzcG9zZSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5kaXNwb3NlIGlzIG5vdCBkZWZpbmVkLlwiKTtcbiAgICAgICAgZGlzcG9zZSA9IHZhbHVlW1N5bWJvbC5kaXNwb3NlXTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBkaXNwb3NlICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3Qgbm90IGRpc3Bvc2FibGUuXCIpO1xuICAgIGVudi5zdGFjay5wdXNoKHsgdmFsdWU6IHZhbHVlLCBkaXNwb3NlOiBkaXNwb3NlLCBhc3luYzogYXN5bmMgfSk7XG4gIH1cbiAgZWxzZSBpZiAoYXN5bmMpIHtcbiAgICBlbnYuc3RhY2sucHVzaCh7IGFzeW5jOiB0cnVlIH0pO1xuICB9XG4gIHJldHVybiB2YWx1ZTtcbn1cblxudmFyIF9TdXBwcmVzc2VkRXJyb3IgPSB0eXBlb2YgU3VwcHJlc3NlZEVycm9yID09PSBcImZ1bmN0aW9uXCIgPyBTdXBwcmVzc2VkRXJyb3IgOiBmdW5jdGlvbiAoZXJyb3IsIHN1cHByZXNzZWQsIG1lc3NhZ2UpIHtcbiAgdmFyIGUgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIHJldHVybiBlLm5hbWUgPSBcIlN1cHByZXNzZWRFcnJvclwiLCBlLmVycm9yID0gZXJyb3IsIGUuc3VwcHJlc3NlZCA9IHN1cHByZXNzZWQsIGU7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19kaXNwb3NlUmVzb3VyY2VzKGVudikge1xuICBmdW5jdGlvbiBmYWlsKGUpIHtcbiAgICBlbnYuZXJyb3IgPSBlbnYuaGFzRXJyb3IgPyBuZXcgX1N1cHByZXNzZWRFcnJvcihlLCBlbnYuZXJyb3IsIFwiQW4gZXJyb3Igd2FzIHN1cHByZXNzZWQgZHVyaW5nIGRpc3Bvc2FsLlwiKSA6IGU7XG4gICAgZW52Lmhhc0Vycm9yID0gdHJ1ZTtcbiAgfVxuICBmdW5jdGlvbiBuZXh0KCkge1xuICAgIHdoaWxlIChlbnYuc3RhY2subGVuZ3RoKSB7XG4gICAgICB2YXIgcmVjID0gZW52LnN0YWNrLnBvcCgpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlYy5kaXNwb3NlICYmIHJlYy5kaXNwb3NlLmNhbGwocmVjLnZhbHVlKTtcbiAgICAgICAgaWYgKHJlYy5hc3luYykgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXN1bHQpLnRoZW4obmV4dCwgZnVuY3Rpb24oZSkgeyBmYWlsKGUpOyByZXR1cm4gbmV4dCgpOyB9KTtcbiAgICAgIH1cbiAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgZmFpbChlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVudi5oYXNFcnJvcikgdGhyb3cgZW52LmVycm9yO1xuICB9XG4gIHJldHVybiBuZXh0KCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgX19leHRlbmRzLFxuICBfX2Fzc2lnbixcbiAgX19yZXN0LFxuICBfX2RlY29yYXRlLFxuICBfX3BhcmFtLFxuICBfX21ldGFkYXRhLFxuICBfX2F3YWl0ZXIsXG4gIF9fZ2VuZXJhdG9yLFxuICBfX2NyZWF0ZUJpbmRpbmcsXG4gIF9fZXhwb3J0U3RhcixcbiAgX192YWx1ZXMsXG4gIF9fcmVhZCxcbiAgX19zcHJlYWQsXG4gIF9fc3ByZWFkQXJyYXlzLFxuICBfX3NwcmVhZEFycmF5LFxuICBfX2F3YWl0LFxuICBfX2FzeW5jR2VuZXJhdG9yLFxuICBfX2FzeW5jRGVsZWdhdG9yLFxuICBfX2FzeW5jVmFsdWVzLFxuICBfX21ha2VUZW1wbGF0ZU9iamVjdCxcbiAgX19pbXBvcnRTdGFyLFxuICBfX2ltcG9ydERlZmF1bHQsXG4gIF9fY2xhc3NQcml2YXRlRmllbGRHZXQsXG4gIF9fY2xhc3NQcml2YXRlRmllbGRTZXQsXG4gIF9fY2xhc3NQcml2YXRlRmllbGRJbixcbiAgX19hZGREaXNwb3NhYmxlUmVzb3VyY2UsXG4gIF9fZGlzcG9zZVJlc291cmNlcyxcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgKiBhcyBsb2FkZXJzIGZyb20gXCJAbHRzL2xvYWRlcnMvbGVnYWN5L2xlZ2FjeS1nbFRGMkZpbGVMb2FkZXJcIjtcclxuZXhwb3J0IHsgbG9hZGVycyB9O1xyXG5leHBvcnQgZGVmYXVsdCBsb2FkZXJzO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=