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
            KHR_materials_dispersion: {
                dispersion: [new MaterialAnimationPropertyInfo(babylonjs_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "subSurface.dispersion", getFloat, function () { return 1; })],
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

/***/ "../../../dev/loaders/src/glTF/2.0/Extensions/KHR_materials_dispersion.ts":
/*!********************************************************************************!*\
  !*** ../../../dev/loaders/src/glTF/2.0/Extensions/KHR_materials_dispersion.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KHR_materials_dispersion: () => (/* binding */ KHR_materials_dispersion)
/* harmony export */ });
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Materials/PBR/pbrMaterial */ "babylonjs/Misc/observable");
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _glTFLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../glTFLoader */ "../../../dev/loaders/src/glTF/2.0/glTFLoader.ts");


var NAME = "KHR_materials_dispersion";
/**
 * [Specification](https://github.com/KhronosGroup/glTF/blob/87bd64a7f5e23c84b6aef2e6082069583ed0ddb4/extensions/2.0/Khronos/KHR_materials_dispersion/README.md)
 * @experimental
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
var KHR_materials_dispersion = /** @class */ (function () {
    /**
     * @internal
     */
    function KHR_materials_dispersion(loader) {
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
    }
    /** @internal */
    KHR_materials_dispersion.prototype.dispose = function () {
        this._loader = null;
    };
    /**
     * @internal
     */
    KHR_materials_dispersion.prototype.loadMaterialPropertiesAsync = function (context, material, babylonMaterial) {
        var _this = this;
        return _glTFLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoader.LoadExtensionAsync(context, material, this.name, function (extensionContext, extension) {
            var promises = new Array();
            promises.push(_this._loader.loadMaterialBasePropertiesAsync(context, material, babylonMaterial));
            promises.push(_this._loader.loadMaterialPropertiesAsync(context, material, babylonMaterial));
            promises.push(_this._loadDispersionPropertiesAsync(extensionContext, material, babylonMaterial, extension));
            return Promise.all(promises).then(function () { });
        });
    };
    KHR_materials_dispersion.prototype._loadDispersionPropertiesAsync = function (context, material, babylonMaterial, extension) {
        if (!(babylonMaterial instanceof babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_0__.PBRMaterial)) {
            throw new Error("".concat(context, ": Material type not supported"));
        }
        // If transparency isn't enabled already, this extension shouldn't do anything.
        // i.e. it requires either the KHR_materials_transmission or KHR_materials_translucency extensions.
        if (!babylonMaterial.subSurface.isRefractionEnabled || !extension.dispersion) {
            return Promise.resolve();
        }
        babylonMaterial.subSurface.isDispersionEnabled = true;
        babylonMaterial.subSurface.dispersion = extension.dispersion;
        return Promise.resolve();
    };
    return KHR_materials_dispersion;
}());

_glTFLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoader.RegisterExtension(NAME, function (loader) { return new KHR_materials_dispersion(loader); });


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
        this._opaqueRenderTarget.renderSprites = true;
        this._opaqueRenderTarget.renderParticles = true;
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
        var properties = [];
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
        var babylonMaterials = [];
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
/* harmony export */   ExtrasAsMetadata: () => (/* reexport safe */ _ExtrasAsMetadata__WEBPACK_IMPORTED_MODULE_29__.ExtrasAsMetadata),
/* harmony export */   KHR_animation_pointer: () => (/* reexport safe */ _KHR_animation_pointer__WEBPACK_IMPORTED_MODULE_24__.KHR_animation_pointer),
/* harmony export */   KHR_draco_mesh_compression: () => (/* reexport safe */ _KHR_draco_mesh_compression__WEBPACK_IMPORTED_MODULE_4__.KHR_draco_mesh_compression),
/* harmony export */   KHR_lights: () => (/* reexport safe */ _KHR_lights_punctual__WEBPACK_IMPORTED_MODULE_5__.KHR_lights),
/* harmony export */   KHR_materials_anisotropy: () => (/* reexport safe */ _KHR_materials_anisotropy__WEBPACK_IMPORTED_MODULE_10__.KHR_materials_anisotropy),
/* harmony export */   KHR_materials_clearcoat: () => (/* reexport safe */ _KHR_materials_clearcoat__WEBPACK_IMPORTED_MODULE_8__.KHR_materials_clearcoat),
/* harmony export */   KHR_materials_dispersion: () => (/* reexport safe */ _KHR_materials_dispersion__WEBPACK_IMPORTED_MODULE_19__.KHR_materials_dispersion),
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
/* harmony export */   KHR_mesh_quantization: () => (/* reexport safe */ _KHR_mesh_quantization__WEBPACK_IMPORTED_MODULE_20__.KHR_mesh_quantization),
/* harmony export */   KHR_texture_basisu: () => (/* reexport safe */ _KHR_texture_basisu__WEBPACK_IMPORTED_MODULE_21__.KHR_texture_basisu),
/* harmony export */   KHR_texture_transform: () => (/* reexport safe */ _KHR_texture_transform__WEBPACK_IMPORTED_MODULE_22__.KHR_texture_transform),
/* harmony export */   KHR_xmp_json_ld: () => (/* reexport safe */ _KHR_xmp_json_ld__WEBPACK_IMPORTED_MODULE_23__.KHR_xmp_json_ld),
/* harmony export */   MSFT_audio_emitter: () => (/* reexport safe */ _MSFT_audio_emitter__WEBPACK_IMPORTED_MODULE_25__.MSFT_audio_emitter),
/* harmony export */   MSFT_lod: () => (/* reexport safe */ _MSFT_lod__WEBPACK_IMPORTED_MODULE_26__.MSFT_lod),
/* harmony export */   MSFT_minecraftMesh: () => (/* reexport safe */ _MSFT_minecraftMesh__WEBPACK_IMPORTED_MODULE_27__.MSFT_minecraftMesh),
/* harmony export */   MSFT_sRGBFactors: () => (/* reexport safe */ _MSFT_sRGBFactors__WEBPACK_IMPORTED_MODULE_28__.MSFT_sRGBFactors)
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
/* harmony import */ var _KHR_materials_dispersion__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./KHR_materials_dispersion */ "../../../dev/loaders/src/glTF/2.0/Extensions/KHR_materials_dispersion.ts");
/* harmony import */ var _KHR_mesh_quantization__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./KHR_mesh_quantization */ "../../../dev/loaders/src/glTF/2.0/Extensions/KHR_mesh_quantization.ts");
/* harmony import */ var _KHR_texture_basisu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./KHR_texture_basisu */ "../../../dev/loaders/src/glTF/2.0/Extensions/KHR_texture_basisu.ts");
/* harmony import */ var _KHR_texture_transform__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./KHR_texture_transform */ "../../../dev/loaders/src/glTF/2.0/Extensions/KHR_texture_transform.ts");
/* harmony import */ var _KHR_xmp_json_ld__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./KHR_xmp_json_ld */ "../../../dev/loaders/src/glTF/2.0/Extensions/KHR_xmp_json_ld.ts");
/* harmony import */ var _KHR_animation_pointer__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./KHR_animation_pointer */ "../../../dev/loaders/src/glTF/2.0/Extensions/KHR_animation_pointer.ts");
/* harmony import */ var _MSFT_audio_emitter__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./MSFT_audio_emitter */ "../../../dev/loaders/src/glTF/2.0/Extensions/MSFT_audio_emitter.ts");
/* harmony import */ var _MSFT_lod__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./MSFT_lod */ "../../../dev/loaders/src/glTF/2.0/Extensions/MSFT_lod.ts");
/* harmony import */ var _MSFT_minecraftMesh__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./MSFT_minecraftMesh */ "../../../dev/loaders/src/glTF/2.0/Extensions/MSFT_minecraftMesh.ts");
/* harmony import */ var _MSFT_sRGBFactors__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./MSFT_sRGBFactors */ "../../../dev/loaders/src/glTF/2.0/Extensions/MSFT_sRGBFactors.ts");
/* harmony import */ var _ExtrasAsMetadata__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./ExtrasAsMetadata */ "../../../dev/loaders/src/glTF/2.0/Extensions/ExtrasAsMetadata.ts");
































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
                    throw new Error("Required extension ".concat(name_2, " is not available"));
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
        var geometries = [];
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
        var meshes = [];
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
        var transformNodes = [];
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
        var skeletons = [];
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
        var animationGroups = [];
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
            var path = [];
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
        // Rotation by 180 as glTF has a different convention than Babylon.
        babylonCamera.rotation.set(0, Math.PI, 0);
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
/* harmony export */   KHR_materials_dispersion: () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_3__.KHR_materials_dispersion),
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
        if (byteOffset < 0 || byteOffset >= arrayBufferView.byteLength) {
            throw new RangeError("Offset is out of range.");
        }
        if (byteOffset + byteLength > arrayBufferView.byteLength) {
            throw new RangeError("Length is out of range.");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFieWxvbi5nbFRGMkZpbGVMb2FkZXIuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBRUE7QUFXQTs7QUFFQTtBQUNBO0FBQ0E7QUFjQTs7QUFFQTtBQUNBO0FBaEJBOztBQUVBO0FBQ0E7QUFjQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBOztBQVpBO0FBQUE7QUFhQTs7O0FBaEJBO0FBQUE7QUFpQkE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEtBO0FBSUE7QUFNQTtBQUVBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQWFBOztBQUVBO0FBQ0E7QUFmQTs7QUFFQTtBQUNBO0FBYUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlHQTtBQUdBO0FBRUE7QUFNQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFhQTs7QUFFQTtBQUNBO0FBZkE7O0FBRUE7QUFDQTtBQWFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2pFQTtBQU1BO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBU0E7O0FBRUE7QUFDQTtBQVhBO0FBQ0E7QUFXQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDakRBO0FBR0E7QUFNQTs7QUFFQTtBQUNBO0FBcUJBOztBQUVBO0FBQ0E7QUF2QkE7O0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFnQkE7QUFDQTtBQWJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7O0FBRUE7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7O0FBS0E7QUFKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQUE7O0FBT0E7QUFOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBOztBQVdBO0FBVkE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFNQTtBQVFBO0FBQ0E7QUFFQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFRQTs7QUFFQTtBQUNBO0FBVkE7O0FBRUE7QUFDQTtBQVFBO0FBQ0E7QUFLQTtBQUhBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7O0FBUUE7QUFDQTs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RKQTtBQUVBO0FBUUE7QUFFQTtBQU1BOztBQUVBO0FBQ0E7QUFDQTtBQXVCQTs7QUFFQTtBQUNBO0FBekJBOztBQUVBO0FBQ0E7QUFZQTs7QUFFQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFFQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQWVBOztBQUVBO0FBQ0E7QUFqQkE7O0FBRUE7QUFDQTtBQWVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkhBO0FBS0E7QUFHQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQWtCQTs7QUFFQTtBQUNBO0FBcEJBOztBQUVBO0FBQ0E7QUFPQTs7QUFFQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUtBO0FBR0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBa0JBOztBQUVBO0FBQ0E7QUFwQkE7O0FBRUE7QUFDQTtBQU9BOztBQUVBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZIQTtBQUlBO0FBR0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBa0JBOztBQUVBO0FBQ0E7QUFwQkE7O0FBRUE7QUFDQTtBQU9BOztBQUVBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNFQTtBQUtBO0FBR0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFrQkE7O0FBRUE7QUFDQTtBQXBCQTs7QUFFQTtBQUNBO0FBT0E7O0FBRUE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25FQTtBQUtBO0FBR0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUF1QkE7O0FBRUE7QUFDQTtBQXBCQTs7QUFFQTtBQUNBO0FBT0E7O0FBRUE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUEzREE7O0FBRUE7QUFDQTtBQXlEQTtBQUFBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdFQTtBQUtBO0FBR0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFrQkE7O0FBRUE7QUFDQTtBQXBCQTs7QUFFQTtBQUNBO0FBT0E7O0FBRUE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0ZBO0FBQ0E7QUFLQTtBQUdBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBa0JBOztBQUVBO0FBQ0E7QUFwQkE7O0FBRUE7QUFDQTtBQU9BOztBQUVBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEdBO0FBS0E7QUFDQTtBQUdBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQWtCQTs7QUFFQTtBQUNBO0FBcEJBOztBQUVBO0FBQ0E7QUFPQTs7QUFFQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNHQTtBQUtBO0FBQ0E7QUFHQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQWtCQTs7QUFFQTtBQUNBO0FBcEJBOztBQUVBO0FBQ0E7QUFPQTs7QUFFQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pHQTtBQUtBO0FBR0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBa0JBOztBQUVBO0FBQ0E7QUFwQkE7O0FBRUE7QUFDQTtBQU9BOztBQUVBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuR0E7QUFLQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBZ0RBOztBQUVBO0FBQ0E7QUFpQ0E7Ozs7QUFJQTtBQUNBO0FBQUE7QUFoQkE7QUFDQTtBQUNBO0FBQ0E7QUFjQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQXBEQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBMENBOzs7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBOztBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQWtCQTs7QUFFQTtBQUNBO0FBcEJBOztBQUVBO0FBQ0E7QUFPQTs7QUFFQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNVpBO0FBQ0E7QUFLQTtBQUVBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBa0JBOztBQUVBO0FBQ0E7QUFwQkE7O0FBRUE7QUFDQTtBQU9BOztBQUVBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNGQTtBQUdBO0FBTUE7QUFZQTs7QUFFQTtBQUNBO0FBQ0E7QUFlQTs7QUFFQTtBQUNBO0FBakJBOztBQUVBO0FBQ0E7QUFlQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFBQTtBQVFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBeEVBO0FBQUE7QUF5RUE7QUFDQTs7QUFoRkE7QUFDQTtBQUFBO0FBaUZBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFTQTtBQUtBO0FBR0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBa0JBOztBQUVBO0FBQ0E7QUFwQkE7O0FBRUE7QUFDQTtBQU9BOztBQUVBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyR0E7QUFFQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQVdBOztBQUVBO0FBQ0E7QUFiQTs7QUFFQTtBQUNBO0FBV0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDOUJBO0FBTUE7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFTQTs7QUFFQTtBQUNBO0FBWEE7QUFDQTtBQVdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3REQTtBQUlBO0FBR0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFhQTs7QUFFQTtBQUNBO0FBZkE7O0FBRUE7QUFDQTtBQWFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5RUE7QUFHQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFrQkE7O0FBRUE7QUFDQTtBQXBCQTs7QUFFQTtBQUNBO0FBT0E7O0FBRUE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBSUE7QUFJQTtBQXlCQTs7O0FBR0E7QUFDQTtBQUNBO0FBZUE7O0FBRUE7QUFDQTtBQWpCQTs7QUFFQTtBQUNBO0FBZUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7O0FBZkE7QUFBQTtBQUFBO0FBaUJBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQVZBO0FBQUE7QUFZQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqVEE7QUFDQTtBQU9BO0FBR0E7QUFRQTs7QUFFQTtBQUNBO0FBQ0E7QUFpREE7O0FBRUE7QUFDQTtBQW5EQTs7QUFFQTtBQUNBO0FBT0E7O0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQWxCQTtBQUFBO0FBbUJBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQWxCQTtBQUFBO0FBbUJBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFsQ0E7QUFBQTtBQW1DQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUFBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQW5DQTtBQUFBO0FBb0NBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlaQTtBQUlBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBVEE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hEQTtBQUlBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBVEE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQTBDQTtBQUVBO0FBQ0E7QUFFQTtBQUdBO0FBMkJBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUFBO0FBeUNBO0FBeENBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQVdBOztBQUVBO0FBQ0E7QUE0R0E7O0FBRUE7QUFDQTtBQTlHQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQXFGQTtBQUNBO0FBN0VBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBS0E7QUFIQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBQUE7QUFLQTtBQUhBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUtBO0FBSEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBS0E7QUFIQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBQUE7QUFLQTtBQUhBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQUE7QUFPQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFKQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFBQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBUUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBUUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWdCQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFBQTtBQUlBO0FBSUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFPQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFRQTtBQUtBO0FBRUE7QUFPQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFPQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7QUFPQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7OztBQU9BO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQTdxRkE7QUFFQTs7QUFFQTtBQUNBO0FBeXFGQTtBQUFBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwNEZBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUFBOztBQUVBO0FBQ0E7QUFBQTtBQUFBOztBQUtBO0FBSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUVBO0FBQ0E7QUFBQTtBQUFBOztBQTRCQTtBQTNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBckJBO0FBQUE7QUFzQkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQ0E7QUFDQTtBQWFBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFzQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFnQkE7O0FBRUE7QUFDQTtBQUFBO0FBT0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQWlDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFlQTs7Ozs7QUFLQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQWNBOztBQUVBO0FBQ0E7QUFjQTs7QUFFQTtBQUNBO0FBY0E7Ozs7QUFJQTtBQUNBO0FBZ0JBOztBQUVBO0FBQ0E7QUFjQTs7QUFFQTtBQUNBO0FBY0E7OztBQUdBO0FBQ0E7QUEwREE7O0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFjQTtBQUNBO0FBRUE7QUFJQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTRTQTs7QUFFQTtBQUNBO0FBaVVBO0FBQ0E7QUFFQTtBQUNBO0FBc0JBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFhQTtBQTEvQkE7QUFIQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUEySEE7QUFKQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBb0JBO0FBSEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBWUE7QUFIQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFZQTtBQUhBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQWdCQTtBQUxBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBWUE7QUFIQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFZQTtBQUhBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQWFBO0FBSEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBS0E7QUFIQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBZEE7QUFtQkE7QUFIQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQWhCQTtBQWlDQTtBQUhBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQW9CQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUFBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUlBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBUUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUVBOztBQUVBO0FBQ0E7QUFBQTtBQVFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUhBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQU9BOzs7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQUE7QUFRQTtBQUlBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFVQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBbC9CQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBMFRBO0FBMG5CQTtBQThDQTtBQUFBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzlyQ0E7QUFTQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWUE7O0FBRUE7QUFDQTtBQUFBO0FBb0ZBO0FBMUVBOzs7Ozs7O0FBT0E7QUFDQTtBQUFBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsRkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUE4RUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUtBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNqWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vTE9BREVSUy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vTE9BREVSUy8uLi8uLi8uLi9kZXYvbG9hZGVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9FWFRfbGlnaHRzX2ltYWdlX2Jhc2VkLnRzIiwid2VicGFjazovL0xPQURFUlMvLi4vLi4vLi4vZGV2L2xvYWRlcnMvc3JjL2dsVEYvMi4wL0V4dGVuc2lvbnMvRVhUX21lc2hfZ3B1X2luc3RhbmNpbmcudHMiLCJ3ZWJwYWNrOi8vTE9BREVSUy8uLi8uLi8uLi9kZXYvbG9hZGVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9FWFRfbWVzaG9wdF9jb21wcmVzc2lvbi50cyIsIndlYnBhY2s6Ly9MT0FERVJTLy4uLy4uLy4uL2Rldi9sb2FkZXJzL3NyYy9nbFRGLzIuMC9FeHRlbnNpb25zL0VYVF90ZXh0dXJlX3dlYnAudHMiLCJ3ZWJwYWNrOi8vTE9BREVSUy8uLi8uLi8uLi9kZXYvbG9hZGVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9FeHRyYXNBc01ldGFkYXRhLnRzIiwid2VicGFjazovL0xPQURFUlMvLi4vLi4vLi4vZGV2L2xvYWRlcnMvc3JjL2dsVEYvMi4wL0V4dGVuc2lvbnMvS0hSX2FuaW1hdGlvbl9wb2ludGVyLmRhdGEudHMiLCJ3ZWJwYWNrOi8vTE9BREVSUy8uLi8uLi8uLi9kZXYvbG9hZGVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9LSFJfYW5pbWF0aW9uX3BvaW50ZXIudHMiLCJ3ZWJwYWNrOi8vTE9BREVSUy8uLi8uLi8uLi9kZXYvbG9hZGVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9LSFJfZHJhY29fbWVzaF9jb21wcmVzc2lvbi50cyIsIndlYnBhY2s6Ly9MT0FERVJTLy4uLy4uLy4uL2Rldi9sb2FkZXJzL3NyYy9nbFRGLzIuMC9FeHRlbnNpb25zL0tIUl9saWdodHNfcHVuY3R1YWwudHMiLCJ3ZWJwYWNrOi8vTE9BREVSUy8uLi8uLi8uLi9kZXYvbG9hZGVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9LSFJfbWF0ZXJpYWxzX2FuaXNvdHJvcHkudHMiLCJ3ZWJwYWNrOi8vTE9BREVSUy8uLi8uLi8uLi9kZXYvbG9hZGVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9LSFJfbWF0ZXJpYWxzX2NsZWFyY29hdC50cyIsIndlYnBhY2s6Ly9MT0FERVJTLy4uLy4uLy4uL2Rldi9sb2FkZXJzL3NyYy9nbFRGLzIuMC9FeHRlbnNpb25zL0tIUl9tYXRlcmlhbHNfZGlzcGVyc2lvbi50cyIsIndlYnBhY2s6Ly9MT0FERVJTLy4uLy4uLy4uL2Rldi9sb2FkZXJzL3NyYy9nbFRGLzIuMC9FeHRlbnNpb25zL0tIUl9tYXRlcmlhbHNfZW1pc3NpdmVfc3RyZW5ndGgudHMiLCJ3ZWJwYWNrOi8vTE9BREVSUy8uLi8uLi8uLi9kZXYvbG9hZGVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9LSFJfbWF0ZXJpYWxzX2lvci50cyIsIndlYnBhY2s6Ly9MT0FERVJTLy4uLy4uLy4uL2Rldi9sb2FkZXJzL3NyYy9nbFRGLzIuMC9FeHRlbnNpb25zL0tIUl9tYXRlcmlhbHNfaXJpZGVzY2VuY2UudHMiLCJ3ZWJwYWNrOi8vTE9BREVSUy8uLi8uLi8uLi9kZXYvbG9hZGVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9LSFJfbWF0ZXJpYWxzX3BiclNwZWN1bGFyR2xvc3NpbmVzcy50cyIsIndlYnBhY2s6Ly9MT0FERVJTLy4uLy4uLy4uL2Rldi9sb2FkZXJzL3NyYy9nbFRGLzIuMC9FeHRlbnNpb25zL0tIUl9tYXRlcmlhbHNfc2hlZW4udHMiLCJ3ZWJwYWNrOi8vTE9BREVSUy8uLi8uLi8uLi9kZXYvbG9hZGVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9LSFJfbWF0ZXJpYWxzX3NwZWN1bGFyLnRzIiwid2VicGFjazovL0xPQURFUlMvLi4vLi4vLi4vZGV2L2xvYWRlcnMvc3JjL2dsVEYvMi4wL0V4dGVuc2lvbnMvS0hSX21hdGVyaWFsc190cmFuc2x1Y2VuY3kudHMiLCJ3ZWJwYWNrOi8vTE9BREVSUy8uLi8uLi8uLi9kZXYvbG9hZGVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9LSFJfbWF0ZXJpYWxzX3RyYW5zbWlzc2lvbi50cyIsIndlYnBhY2s6Ly9MT0FERVJTLy4uLy4uLy4uL2Rldi9sb2FkZXJzL3NyYy9nbFRGLzIuMC9FeHRlbnNpb25zL0tIUl9tYXRlcmlhbHNfdW5saXQudHMiLCJ3ZWJwYWNrOi8vTE9BREVSUy8uLi8uLi8uLi9kZXYvbG9hZGVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9LSFJfbWF0ZXJpYWxzX3ZhcmlhbnRzLnRzIiwid2VicGFjazovL0xPQURFUlMvLi4vLi4vLi4vZGV2L2xvYWRlcnMvc3JjL2dsVEYvMi4wL0V4dGVuc2lvbnMvS0hSX21hdGVyaWFsc192b2x1bWUudHMiLCJ3ZWJwYWNrOi8vTE9BREVSUy8uLi8uLi8uLi9kZXYvbG9hZGVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9LSFJfbWVzaF9xdWFudGl6YXRpb24udHMiLCJ3ZWJwYWNrOi8vTE9BREVSUy8uLi8uLi8uLi9kZXYvbG9hZGVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9LSFJfdGV4dHVyZV9iYXNpc3UudHMiLCJ3ZWJwYWNrOi8vTE9BREVSUy8uLi8uLi8uLi9kZXYvbG9hZGVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9LSFJfdGV4dHVyZV90cmFuc2Zvcm0udHMiLCJ3ZWJwYWNrOi8vTE9BREVSUy8uLi8uLi8uLi9kZXYvbG9hZGVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9LSFJfeG1wX2pzb25fbGQudHMiLCJ3ZWJwYWNrOi8vTE9BREVSUy8uLi8uLi8uLi9kZXYvbG9hZGVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9NU0ZUX2F1ZGlvX2VtaXR0ZXIudHMiLCJ3ZWJwYWNrOi8vTE9BREVSUy8uLi8uLi8uLi9kZXYvbG9hZGVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9NU0ZUX2xvZC50cyIsIndlYnBhY2s6Ly9MT0FERVJTLy4uLy4uLy4uL2Rldi9sb2FkZXJzL3NyYy9nbFRGLzIuMC9FeHRlbnNpb25zL01TRlRfbWluZWNyYWZ0TWVzaC50cyIsIndlYnBhY2s6Ly9MT0FERVJTLy4uLy4uLy4uL2Rldi9sb2FkZXJzL3NyYy9nbFRGLzIuMC9FeHRlbnNpb25zL01TRlRfc1JHQkZhY3RvcnMudHMiLCJ3ZWJwYWNrOi8vTE9BREVSUy8uLi8uLi8uLi9kZXYvbG9hZGVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9pbmRleC50cyIsIndlYnBhY2s6Ly9MT0FERVJTLy4uLy4uLy4uL2Rldi9sb2FkZXJzL3NyYy9nbFRGLzIuMC9nbFRGTG9hZGVyLnRzIiwid2VicGFjazovL0xPQURFUlMvLi4vLi4vLi4vZGV2L2xvYWRlcnMvc3JjL2dsVEYvMi4wL2dsVEZMb2FkZXJBbmltYXRpb24udHMiLCJ3ZWJwYWNrOi8vTE9BREVSUy8uLi8uLi8uLi9kZXYvbG9hZGVycy9zcmMvZ2xURi8yLjAvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vTE9BREVSUy8uLi8uLi8uLi9kZXYvbG9hZGVycy9zcmMvZ2xURi9nbFRGRmlsZUxvYWRlci50cyIsIndlYnBhY2s6Ly9MT0FERVJTLy4uLy4uLy4uL2Rldi9sb2FkZXJzL3NyYy9nbFRGL2dsVEZWYWxpZGF0aW9uLnRzIiwid2VicGFjazovL0xPQURFUlMvLi4vLi4vLi4vbHRzL2xvYWRlcnMvc3JjL2xlZ2FjeS9sZWdhY3ktZ2xURi50cyIsIndlYnBhY2s6Ly9MT0FERVJTLy4uLy4uLy4uL2x0cy9sb2FkZXJzL3NyYy9sZWdhY3kvbGVnYWN5LWdsVEYyLnRzIiwid2VicGFjazovL0xPQURFUlMvLi4vLi4vLi4vbHRzL2xvYWRlcnMvc3JjL2xlZ2FjeS9sZWdhY3ktZ2xURjJGaWxlTG9hZGVyLnRzIiwid2VicGFjazovL0xPQURFUlMvZXh0ZXJuYWwgdW1kIHtcInJvb3RcIjpcIkJBQllMT05cIixcImNvbW1vbmpzXCI6XCJiYWJ5bG9uanNcIixcImNvbW1vbmpzMlwiOlwiYmFieWxvbmpzXCIsXCJhbWRcIjpcImJhYnlsb25qc1wifSIsIndlYnBhY2s6Ly9MT0FERVJTLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYubWpzIiwid2VicGFjazovL0xPQURFUlMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vTE9BREVSUy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9MT0FERVJTL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9MT0FERVJTL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vTE9BREVSUy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0xPQURFUlMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9MT0FERVJTLy4vc3JjL2dsVEYyRmlsZUxvYWRlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJiYWJ5bG9uanNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJiYWJ5bG9uanMtbG9hZGVyc1wiLCBbXCJiYWJ5bG9uanNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiYmFieWxvbmpzLWxvYWRlcnNcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJiYWJ5bG9uanNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkxPQURFUlNcIl0gPSBmYWN0b3J5KHJvb3RbXCJCQUJZTE9OXCJdKTtcbn0pKCh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdGhpcyksIChfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2JhYnlsb25qc19NaXNjX29ic2VydmFibGVfXykgPT4ge1xucmV0dXJuICIsImltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xyXG5pbXBvcnQgeyBTY2FsYXIgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLnNjYWxhclwiO1xyXG5pbXBvcnQgeyBTcGhlcmljYWxIYXJtb25pY3MsIFNwaGVyaWNhbFBvbHlub21pYWwgfSBmcm9tIFwiY29yZS9NYXRocy9zcGhlcmljYWxQb2x5bm9taWFsXCI7XHJcbmltcG9ydCB7IFF1YXRlcm5pb24sIE1hdHJpeCB9IGZyb20gXCJjb3JlL01hdGhzL21hdGgudmVjdG9yXCI7XHJcbmltcG9ydCB0eXBlIHsgQmFzZVRleHR1cmUgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvYmFzZVRleHR1cmVcIjtcclxuaW1wb3J0IHsgUmF3Q3ViZVRleHR1cmUgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvcmF3Q3ViZVRleHR1cmVcIjtcclxuXHJcbmltcG9ydCB0eXBlIHsgSUVYVExpZ2h0c0ltYWdlQmFzZWRfTGlnaHRSZWZlcmVuY2VJbWFnZUJhc2VkLCBJRVhUTGlnaHRzSW1hZ2VCYXNlZF9MaWdodEltYWdlQmFzZWQsIElFWFRMaWdodHNJbWFnZUJhc2VkIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgdHlwZSB7IElTY2VuZSB9IGZyb20gXCIuLi9nbFRGTG9hZGVySW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQgdHlwZSB7IElHTFRGTG9hZGVyRXh0ZW5zaW9uIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJFeHRlbnNpb25cIjtcclxuaW1wb3J0IHsgR0xURkxvYWRlciwgQXJyYXlJdGVtIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJcIjtcclxuXHJcbmNvbnN0IE5BTUUgPSBcIkVYVF9saWdodHNfaW1hZ2VfYmFzZWRcIjtcclxuXHJcbmRlY2xhcmUgbW9kdWxlIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCIge1xyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG4gICAgaW50ZXJmYWNlIElFWFRMaWdodHNJbWFnZUJhc2VkX0xpZ2h0SW1hZ2VCYXNlZCB7XHJcbiAgICAgICAgX2JhYnlsb25UZXh0dXJlPzogQmFzZVRleHR1cmU7XHJcbiAgICAgICAgX2xvYWRlZD86IFByb21pc2U8dm9pZD47XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBbU3BlY2lmaWNhdGlvbl0oaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFpbi9leHRlbnNpb25zLzIuMC9WZW5kb3IvRVhUX2xpZ2h0c19pbWFnZV9iYXNlZC9SRUFETUUubWQpXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBjbGFzcyBFWFRfbGlnaHRzX2ltYWdlX2Jhc2VkIGltcGxlbWVudHMgSUdMVEZMb2FkZXJFeHRlbnNpb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGlzIGV4dGVuc2lvbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBOQU1FO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIGVuYWJsZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBlbmFibGVkOiBib29sZWFuO1xyXG5cclxuICAgIHByaXZhdGUgX2xvYWRlcjogR0xURkxvYWRlcjtcclxuICAgIHByaXZhdGUgX2xpZ2h0cz86IElFWFRMaWdodHNJbWFnZUJhc2VkX0xpZ2h0SW1hZ2VCYXNlZFtdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGxvYWRlcjogR0xURkxvYWRlcikge1xyXG4gICAgICAgIHRoaXMuX2xvYWRlciA9IGxvYWRlcjtcclxuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0aGlzLl9sb2FkZXIuaXNFeHRlbnNpb25Vc2VkKE5BTUUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge1xyXG4gICAgICAgICh0aGlzLl9sb2FkZXIgYXMgYW55KSA9IG51bGw7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuX2xpZ2h0cztcclxuICAgIH1cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgb25Mb2FkaW5nKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGV4dGVuc2lvbnMgPSB0aGlzLl9sb2FkZXIuZ2x0Zi5leHRlbnNpb25zO1xyXG4gICAgICAgIGlmIChleHRlbnNpb25zICYmIGV4dGVuc2lvbnNbdGhpcy5uYW1lXSkge1xyXG4gICAgICAgICAgICBjb25zdCBleHRlbnNpb24gPSBleHRlbnNpb25zW3RoaXMubmFtZV0gYXMgSUVYVExpZ2h0c0ltYWdlQmFzZWQ7XHJcbiAgICAgICAgICAgIHRoaXMuX2xpZ2h0cyA9IGV4dGVuc2lvbi5saWdodHM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkU2NlbmVBc3luYyhjb250ZXh0OiBzdHJpbmcsIHNjZW5lOiBJU2NlbmUpOiBOdWxsYWJsZTxQcm9taXNlPHZvaWQ+PiB7XHJcbiAgICAgICAgcmV0dXJuIEdMVEZMb2FkZXIuTG9hZEV4dGVuc2lvbkFzeW5jPElFWFRMaWdodHNJbWFnZUJhc2VkX0xpZ2h0UmVmZXJlbmNlSW1hZ2VCYXNlZD4oY29udGV4dCwgc2NlbmUsIHRoaXMubmFtZSwgKGV4dGVuc2lvbkNvbnRleHQsIGV4dGVuc2lvbikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2FkZXIuX2FsbE1hdGVyaWFsc0RpcnR5UmVxdWlyZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBuZXcgQXJyYXk8UHJvbWlzZTxhbnk+PigpO1xyXG5cclxuICAgICAgICAgICAgcHJvbWlzZXMucHVzaCh0aGlzLl9sb2FkZXIubG9hZFNjZW5lQXN5bmMoY29udGV4dCwgc2NlbmUpKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2xvYWRlci5sb2dPcGVuKGAke2V4dGVuc2lvbkNvbnRleHR9YCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBsaWdodCA9IEFycmF5SXRlbS5HZXQoYCR7ZXh0ZW5zaW9uQ29udGV4dH0vbGlnaHRgLCB0aGlzLl9saWdodHMsIGV4dGVuc2lvbi5saWdodCk7XHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2FkTGlnaHRBc3luYyhgL2V4dGVuc2lvbnMvJHt0aGlzLm5hbWV9L2xpZ2h0cy8ke2V4dGVuc2lvbi5saWdodH1gLCBsaWdodCkudGhlbigodGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRlci5iYWJ5bG9uU2NlbmUuZW52aXJvbm1lbnRUZXh0dXJlID0gdGV4dHVyZTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9sb2FkZXIubG9nQ2xvc2UoKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoKSA9PiB7fSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZExpZ2h0QXN5bmMoY29udGV4dDogc3RyaW5nLCBsaWdodDogSUVYVExpZ2h0c0ltYWdlQmFzZWRfTGlnaHRJbWFnZUJhc2VkKTogUHJvbWlzZTxCYXNlVGV4dHVyZT4ge1xyXG4gICAgICAgIGlmICghbGlnaHQuX2xvYWRlZCkge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9taXNlcyA9IG5ldyBBcnJheTxQcm9taXNlPGFueT4+KCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9sb2FkZXIubG9nT3BlbihgJHtjb250ZXh0fWApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaW1hZ2VEYXRhID0gbmV3IEFycmF5PEFycmF5PEFycmF5QnVmZmVyVmlldz4+KGxpZ2h0LnNwZWN1bGFySW1hZ2VzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IG1pcG1hcCA9IDA7IG1pcG1hcCA8IGxpZ2h0LnNwZWN1bGFySW1hZ2VzLmxlbmd0aDsgbWlwbWFwKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZhY2VzID0gbGlnaHQuc3BlY3VsYXJJbWFnZXNbbWlwbWFwXTtcclxuICAgICAgICAgICAgICAgIGltYWdlRGF0YVttaXBtYXBdID0gbmV3IEFycmF5PEFycmF5QnVmZmVyVmlldz4oZmFjZXMubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGZhY2UgPSAwOyBmYWNlIDwgZmFjZXMubGVuZ3RoOyBmYWNlKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzcGVjdWxhckltYWdlQ29udGV4dCA9IGAke2NvbnRleHR9L3NwZWN1bGFySW1hZ2VzLyR7bWlwbWFwfS8ke2ZhY2V9YDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2FkZXIubG9nT3BlbihgJHtzcGVjdWxhckltYWdlQ29udGV4dH1gKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBmYWNlc1tmYWNlXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWFnZSA9IEFycmF5SXRlbS5HZXQoc3BlY3VsYXJJbWFnZUNvbnRleHQsIHRoaXMuX2xvYWRlci5nbHRmLmltYWdlcywgaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRlci5sb2FkSW1hZ2VBc3luYyhgL2ltYWdlcy8ke2luZGV4fWAsIGltYWdlKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZURhdGFbbWlwbWFwXVtmYWNlXSA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9hZGVyLmxvZ0Nsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2xvYWRlci5sb2dDbG9zZSgpO1xyXG5cclxuICAgICAgICAgICAgbGlnaHQuX2xvYWRlZCA9IFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJhYnlsb25UZXh0dXJlID0gbmV3IFJhd0N1YmVUZXh0dXJlKHRoaXMuX2xvYWRlci5iYWJ5bG9uU2NlbmUsIG51bGwsIGxpZ2h0LnNwZWN1bGFySW1hZ2VTaXplKTtcclxuICAgICAgICAgICAgICAgIGJhYnlsb25UZXh0dXJlLm5hbWUgPSBsaWdodC5uYW1lIHx8IFwiZW52aXJvbm1lbnRcIjtcclxuICAgICAgICAgICAgICAgIGxpZ2h0Ll9iYWJ5bG9uVGV4dHVyZSA9IGJhYnlsb25UZXh0dXJlO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChsaWdodC5pbnRlbnNpdHkgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFieWxvblRleHR1cmUubGV2ZWwgPSBsaWdodC5pbnRlbnNpdHk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGxpZ2h0LnJvdGF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJvdGF0aW9uID0gUXVhdGVybmlvbi5Gcm9tQXJyYXkobGlnaHQucm90YXRpb24pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBJbnZlcnQgdGhlIHJvdGF0aW9uIHNvIHRoYXQgcG9zaXRpdmUgcm90YXRpb24gaXMgY291bnRlci1jbG9ja3dpc2UuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9sb2FkZXIuYmFieWxvblNjZW5lLnVzZVJpZ2h0SGFuZGVkU3lzdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0aW9uID0gUXVhdGVybmlvbi5JbnZlcnNlKHJvdGF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIE1hdHJpeC5Gcm9tUXVhdGVybmlvblRvUmVmKHJvdGF0aW9uLCBiYWJ5bG9uVGV4dHVyZS5nZXRSZWZsZWN0aW9uVGV4dHVyZU1hdHJpeCgpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIWxpZ2h0LmlycmFkaWFuY2VDb2VmZmljaWVudHMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7Y29udGV4dH06IElycmFkaWFuY2UgY29lZmZpY2llbnRzIGFyZSBtaXNzaW5nYCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3BoZXJpY2FsSGFybW9uaWNzID0gU3BoZXJpY2FsSGFybW9uaWNzLkZyb21BcnJheShsaWdodC5pcnJhZGlhbmNlQ29lZmZpY2llbnRzKTtcclxuICAgICAgICAgICAgICAgIHNwaGVyaWNhbEhhcm1vbmljcy5zY2FsZUluUGxhY2UobGlnaHQuaW50ZW5zaXR5KTtcclxuXHJcbiAgICAgICAgICAgICAgICBzcGhlcmljYWxIYXJtb25pY3MuY29udmVydElycmFkaWFuY2VUb0xhbWJlcnRpYW5SYWRpYW5jZSgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3BoZXJpY2FsUG9seW5vbWlhbCA9IFNwaGVyaWNhbFBvbHlub21pYWwuRnJvbUhhcm1vbmljcyhzcGhlcmljYWxIYXJtb25pY3MpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIENvbXB1dGUgdGhlIGxvZCBnZW5lcmF0aW9uIHNjYWxlIHRvIGZpdCBleGFjdGx5IHRvIHRoZSBudW1iZXIgb2YgbGV2ZWxzIGF2YWlsYWJsZS5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGxvZEdlbmVyYXRpb25TY2FsZSA9IChpbWFnZURhdGEubGVuZ3RoIC0gMSkgLyBTY2FsYXIuTG9nMihsaWdodC5zcGVjdWxhckltYWdlU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYmFieWxvblRleHR1cmUudXBkYXRlUkdCREFzeW5jKGltYWdlRGF0YSwgc3BoZXJpY2FsUG9seW5vbWlhbCwgbG9kR2VuZXJhdGlvblNjYWxlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbGlnaHQuX2xvYWRlZC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGxpZ2h0Ll9iYWJ5bG9uVGV4dHVyZSE7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkdMVEZMb2FkZXIuUmVnaXN0ZXJFeHRlbnNpb24oTkFNRSwgKGxvYWRlcikgPT4gbmV3IEVYVF9saWdodHNfaW1hZ2VfYmFzZWQobG9hZGVyKSk7XHJcbiIsImltcG9ydCB7IFZlY3RvcjMsIFF1YXRlcm5pb24sIE1hdHJpeCwgVG1wVmVjdG9ycyB9IGZyb20gXCJjb3JlL01hdGhzL21hdGgudmVjdG9yXCI7XHJcbmltcG9ydCB0eXBlIHsgTWVzaCB9IGZyb20gXCJjb3JlL01lc2hlcy9tZXNoXCI7XHJcbmltcG9ydCB0eXBlIHsgVHJhbnNmb3JtTm9kZSB9IGZyb20gXCJjb3JlL01lc2hlcy90cmFuc2Zvcm1Ob2RlXCI7XHJcbmltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xyXG5pbXBvcnQgeyBHTFRGTG9hZGVyLCBBcnJheUl0ZW0gfSBmcm9tIFwiLi4vZ2xURkxvYWRlclwiO1xyXG5pbXBvcnQgdHlwZSB7IElHTFRGTG9hZGVyRXh0ZW5zaW9uIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJFeHRlbnNpb25cIjtcclxuaW1wb3J0IHR5cGUgeyBJTm9kZSB9IGZyb20gXCIuLi9nbFRGTG9hZGVySW50ZXJmYWNlc1wiO1xyXG5cclxuaW1wb3J0IHR5cGUgeyBJRVhUTWVzaEdwdUluc3RhbmNpbmcgfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcblxyXG5pbXBvcnQgXCJjb3JlL01lc2hlcy90aGluSW5zdGFuY2VNZXNoXCI7XHJcblxyXG5jb25zdCBOQU1FID0gXCJFWFRfbWVzaF9ncHVfaW5zdGFuY2luZ1wiO1xyXG5cclxuLyoqXHJcbiAqIFtTcGVjaWZpY2F0aW9uXShodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi9tYWluL2V4dGVuc2lvbnMvMi4wL1ZlbmRvci9FWFRfbWVzaF9ncHVfaW5zdGFuY2luZy9SRUFETUUubWQpXHJcbiAqIFtQbGF5Z3JvdW5kIFNhbXBsZV0oaHR0cHM6Ly9wbGF5Z3JvdW5kLmJhYnlsb25qcy5jb20vI1FGSUdMVyM5KVxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgY2xhc3MgRVhUX21lc2hfZ3B1X2luc3RhbmNpbmcgaW1wbGVtZW50cyBJR0xURkxvYWRlckV4dGVuc2lvbiB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBuYW1lIG9mIHRoaXMgZXh0ZW5zaW9uLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZSA9IE5BTUU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgZW5hYmxlZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGVuYWJsZWQ6IGJvb2xlYW47XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZGVyOiBHTFRGTG9hZGVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGxvYWRlcjogR0xURkxvYWRlcikge1xyXG4gICAgICAgIHRoaXMuX2xvYWRlciA9IGxvYWRlcjtcclxuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0aGlzLl9sb2FkZXIuaXNFeHRlbnNpb25Vc2VkKE5BTUUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge1xyXG4gICAgICAgICh0aGlzLl9sb2FkZXIgYXMgYW55KSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWROb2RlQXN5bmMoY29udGV4dDogc3RyaW5nLCBub2RlOiBJTm9kZSwgYXNzaWduOiAoYmFieWxvblRyYW5zZm9ybU5vZGU6IFRyYW5zZm9ybU5vZGUpID0+IHZvaWQpOiBOdWxsYWJsZTxQcm9taXNlPFRyYW5zZm9ybU5vZGU+PiB7XHJcbiAgICAgICAgcmV0dXJuIEdMVEZMb2FkZXIuTG9hZEV4dGVuc2lvbkFzeW5jPElFWFRNZXNoR3B1SW5zdGFuY2luZywgVHJhbnNmb3JtTm9kZT4oY29udGV4dCwgbm9kZSwgdGhpcy5uYW1lLCAoZXh0ZW5zaW9uQ29udGV4dCwgZXh0ZW5zaW9uKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvYWRlci5fZGlzYWJsZUluc3RhbmNlZE1lc2grKztcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLl9sb2FkZXIubG9hZE5vZGVBc3luYyhgL25vZGVzLyR7bm9kZS5pbmRleH1gLCBub2RlLCBhc3NpZ24pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fbG9hZGVyLl9kaXNhYmxlSW5zdGFuY2VkTWVzaC0tO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFub2RlLl9wcmltaXRpdmVCYWJ5bG9uTWVzaGVzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBuZXcgQXJyYXk8UHJvbWlzZTxOdWxsYWJsZTxGbG9hdDMyQXJyYXk+Pj4oKTtcclxuICAgICAgICAgICAgbGV0IGluc3RhbmNlQ291bnQgPSAwO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbG9hZEF0dHJpYnV0ZSA9IChhdHRyaWJ1dGU6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGV4dGVuc2lvbi5hdHRyaWJ1dGVzW2F0dHJpYnV0ZV0gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChQcm9taXNlLnJlc29sdmUobnVsbCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBhY2Nlc3NvciA9IEFycmF5SXRlbS5HZXQoYCR7ZXh0ZW5zaW9uQ29udGV4dH0vYXR0cmlidXRlcy8ke2F0dHJpYnV0ZX1gLCB0aGlzLl9sb2FkZXIuZ2x0Zi5hY2Nlc3NvcnMsIGV4dGVuc2lvbi5hdHRyaWJ1dGVzW2F0dHJpYnV0ZV0pO1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaCh0aGlzLl9sb2FkZXIuX2xvYWRGbG9hdEFjY2Vzc29yQXN5bmMoYC9hY2Nlc3NvcnMvJHthY2Nlc3Nvci5idWZmZXJWaWV3fWAsIGFjY2Vzc29yKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGluc3RhbmNlQ291bnQgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZUNvdW50ID0gYWNjZXNzb3IuY291bnQ7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGluc3RhbmNlQ291bnQgIT09IGFjY2Vzc29yLmNvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2V4dGVuc2lvbkNvbnRleHR9L2F0dHJpYnV0ZXM6IEluc3RhbmNlIGJ1ZmZlciBhY2Nlc3NvcnMgZG8gbm90IGhhdmUgdGhlIHNhbWUgY291bnQuYCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBsb2FkQXR0cmlidXRlKFwiVFJBTlNMQVRJT05cIik7XHJcbiAgICAgICAgICAgIGxvYWRBdHRyaWJ1dGUoXCJST1RBVElPTlwiKTtcclxuICAgICAgICAgICAgbG9hZEF0dHJpYnV0ZShcIlNDQUxFXCIpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHByb21pc2UudGhlbigoYmFieWxvblRyYW5zZm9ybU5vZGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoW3RyYW5zbGF0aW9uQnVmZmVyLCByb3RhdGlvbkJ1ZmZlciwgc2NhbGVCdWZmZXJdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0cmljZXMgPSBuZXcgRmxvYXQzMkFycmF5KGluc3RhbmNlQ291bnQgKiAxNik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFRtcFZlY3RvcnMuVmVjdG9yM1swXS5jb3B5RnJvbUZsb2F0cygwLCAwLCAwKTsgLy8gdHJhbnNsYXRpb25cclxuICAgICAgICAgICAgICAgICAgICBUbXBWZWN0b3JzLlF1YXRlcm5pb25bMF0uY29weUZyb21GbG9hdHMoMCwgMCwgMCwgMSk7IC8vIHJvdGF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgVG1wVmVjdG9ycy5WZWN0b3IzWzFdLmNvcHlGcm9tRmxvYXRzKDEsIDEsIDEpOyAvLyBzY2FsZVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluc3RhbmNlQ291bnQ7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGlvbkJ1ZmZlciAmJiBWZWN0b3IzLkZyb21BcnJheVRvUmVmKHRyYW5zbGF0aW9uQnVmZmVyLCBpICogMywgVG1wVmVjdG9ycy5WZWN0b3IzWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm90YXRpb25CdWZmZXIgJiYgUXVhdGVybmlvbi5Gcm9tQXJyYXlUb1JlZihyb3RhdGlvbkJ1ZmZlciwgaSAqIDQsIFRtcFZlY3RvcnMuUXVhdGVybmlvblswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlQnVmZmVyICYmIFZlY3RvcjMuRnJvbUFycmF5VG9SZWYoc2NhbGVCdWZmZXIsIGkgKiAzLCBUbXBWZWN0b3JzLlZlY3RvcjNbMV0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTWF0cml4LkNvbXBvc2VUb1JlZihUbXBWZWN0b3JzLlZlY3RvcjNbMV0sIFRtcFZlY3RvcnMuUXVhdGVybmlvblswXSwgVG1wVmVjdG9ycy5WZWN0b3IzWzBdLCBUbXBWZWN0b3JzLk1hdHJpeFswXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUbXBWZWN0b3JzLk1hdHJpeFswXS5jb3B5VG9BcnJheShtYXRyaWNlcywgaSAqIDE2KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYmFieWxvbk1lc2ggb2Ygbm9kZS5fcHJpbWl0aXZlQmFieWxvbk1lc2hlcyEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGJhYnlsb25NZXNoIGFzIE1lc2gpLnRoaW5JbnN0YW5jZVNldEJ1ZmZlcihcIm1hdHJpeFwiLCBtYXRyaWNlcywgMTYsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJhYnlsb25UcmFuc2Zvcm1Ob2RlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5HTFRGTG9hZGVyLlJlZ2lzdGVyRXh0ZW5zaW9uKE5BTUUsIChsb2FkZXIpID0+IG5ldyBFWFRfbWVzaF9ncHVfaW5zdGFuY2luZyhsb2FkZXIpKTtcclxuIiwiaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCJjb3JlL3R5cGVzXCI7XHJcbmltcG9ydCB0eXBlIHsgSUdMVEZMb2FkZXJFeHRlbnNpb24gfSBmcm9tIFwiLi4vZ2xURkxvYWRlckV4dGVuc2lvblwiO1xyXG5pbXBvcnQgeyBBcnJheUl0ZW0sIEdMVEZMb2FkZXIgfSBmcm9tIFwiLi4vZ2xURkxvYWRlclwiO1xyXG5pbXBvcnQgdHlwZSB7IElCdWZmZXJWaWV3IH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJJbnRlcmZhY2VzXCI7XHJcbmltcG9ydCB0eXBlIHsgSUVYVE1lc2hvcHRDb21wcmVzc2lvbiB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgTWVzaG9wdENvbXByZXNzaW9uIH0gZnJvbSBcImNvcmUvTWVzaGVzL0NvbXByZXNzaW9uL21lc2hvcHRDb21wcmVzc2lvblwiO1xyXG5cclxuY29uc3QgTkFNRSA9IFwiRVhUX21lc2hvcHRfY29tcHJlc3Npb25cIjtcclxuXHJcbmludGVyZmFjZSBJQnVmZmVyVmlld01lc2hvcHQgZXh0ZW5kcyBJQnVmZmVyVmlldyB7XHJcbiAgICBfbWVzaE9wdERhdGE/OiBQcm9taXNlPEFycmF5QnVmZmVyVmlldz47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBbU3BlY2lmaWNhdGlvbl0oaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFpbi9leHRlbnNpb25zLzIuMC9WZW5kb3IvRVhUX21lc2hvcHRfY29tcHJlc3Npb24vUkVBRE1FLm1kKVxyXG4gKlxyXG4gKiBUaGlzIGV4dGVuc2lvbiB1c2VzIGEgV2ViQXNzZW1ibHkgZGVjb2RlciBtb2R1bGUgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vemV1eC9tZXNob3B0aW1pemVyL3RyZWUvbWFzdGVyL2pzXHJcbiAqIEBzaW5jZSA1LjAuMFxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgY2xhc3MgRVhUX21lc2hvcHRfY29tcHJlc3Npb24gaW1wbGVtZW50cyBJR0xURkxvYWRlckV4dGVuc2lvbiB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBuYW1lIG9mIHRoaXMgZXh0ZW5zaW9uLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZSA9IE5BTUU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgZW5hYmxlZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGVuYWJsZWQ6IGJvb2xlYW47XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZGVyOiBHTFRGTG9hZGVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGxvYWRlcjogR0xURkxvYWRlcikge1xyXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IGxvYWRlci5pc0V4dGVuc2lvblVzZWQoTkFNRSk7XHJcbiAgICAgICAgdGhpcy5fbG9hZGVyID0gbG9hZGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge1xyXG4gICAgICAgICh0aGlzLl9sb2FkZXIgYXMgYW55KSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWRCdWZmZXJWaWV3QXN5bmMoY29udGV4dDogc3RyaW5nLCBidWZmZXJWaWV3OiBJQnVmZmVyVmlldyk6IE51bGxhYmxlPFByb21pc2U8QXJyYXlCdWZmZXJWaWV3Pj4ge1xyXG4gICAgICAgIHJldHVybiBHTFRGTG9hZGVyLkxvYWRFeHRlbnNpb25Bc3luYzxJRVhUTWVzaG9wdENvbXByZXNzaW9uLCBBcnJheUJ1ZmZlclZpZXc+KGNvbnRleHQsIGJ1ZmZlclZpZXcsIHRoaXMubmFtZSwgKGV4dGVuc2lvbkNvbnRleHQsIGV4dGVuc2lvbikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBidWZmZXJWaWV3TWVzaG9wdCA9IGJ1ZmZlclZpZXcgYXMgSUJ1ZmZlclZpZXdNZXNob3B0O1xyXG4gICAgICAgICAgICBpZiAoYnVmZmVyVmlld01lc2hvcHQuX21lc2hPcHREYXRhKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYnVmZmVyVmlld01lc2hvcHQuX21lc2hPcHREYXRhO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBidWZmZXIgPSBBcnJheUl0ZW0uR2V0KGAke2NvbnRleHR9L2J1ZmZlcmAsIHRoaXMuX2xvYWRlci5nbHRmLmJ1ZmZlcnMsIGV4dGVuc2lvbi5idWZmZXIpO1xyXG4gICAgICAgICAgICBidWZmZXJWaWV3TWVzaG9wdC5fbWVzaE9wdERhdGEgPSB0aGlzLl9sb2FkZXIubG9hZEJ1ZmZlckFzeW5jKGAvYnVmZmVycy8ke2J1ZmZlci5pbmRleH1gLCBidWZmZXIsIGV4dGVuc2lvbi5ieXRlT2Zmc2V0IHx8IDAsIGV4dGVuc2lvbi5ieXRlTGVuZ3RoKS50aGVuKChidWZmZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBNZXNob3B0Q29tcHJlc3Npb24uRGVmYXVsdC5kZWNvZGVHbHRmQnVmZmVyQXN5bmMoYnVmZmVyIGFzIFVpbnQ4QXJyYXksIGV4dGVuc2lvbi5jb3VudCwgZXh0ZW5zaW9uLmJ5dGVTdHJpZGUsIGV4dGVuc2lvbi5tb2RlLCBleHRlbnNpb24uZmlsdGVyKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYnVmZmVyVmlld01lc2hvcHQuX21lc2hPcHREYXRhO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5HTFRGTG9hZGVyLlJlZ2lzdGVyRXh0ZW5zaW9uKE5BTUUsIChsb2FkZXIpID0+IG5ldyBFWFRfbWVzaG9wdF9jb21wcmVzc2lvbihsb2FkZXIpKTtcclxuIiwiaW1wb3J0IHR5cGUgeyBJR0xURkxvYWRlckV4dGVuc2lvbiB9IGZyb20gXCIuLi9nbFRGTG9hZGVyRXh0ZW5zaW9uXCI7XHJcbmltcG9ydCB7IEdMVEZMb2FkZXIsIEFycmF5SXRlbSB9IGZyb20gXCIuLi9nbFRGTG9hZGVyXCI7XHJcbmltcG9ydCB0eXBlIHsgSVRleHR1cmUgfSBmcm9tIFwiLi4vZ2xURkxvYWRlckludGVyZmFjZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBCYXNlVGV4dHVyZSB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9UZXh0dXJlcy9iYXNlVGV4dHVyZVwiO1xyXG5pbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcImNvcmUvdHlwZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBJRVhUVGV4dHVyZVdlYlAgfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcblxyXG5jb25zdCBOQU1FID0gXCJFWFRfdGV4dHVyZV93ZWJwXCI7XHJcblxyXG4vKipcclxuICogW1NwZWNpZmljYXRpb25dKGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9ibG9iL21haW4vZXh0ZW5zaW9ucy8yLjAvVmVuZG9yL0VYVF90ZXh0dXJlX3dlYnAvUkVBRE1FLm1kKVxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgY2xhc3MgRVhUX3RleHR1cmVfd2VicCBpbXBsZW1lbnRzIElHTFRGTG9hZGVyRXh0ZW5zaW9uIHtcclxuICAgIC8qKiBUaGUgbmFtZSBvZiB0aGlzIGV4dGVuc2lvbi4gKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lID0gTkFNRTtcclxuXHJcbiAgICAvKiogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIGVuYWJsZWQuICovXHJcbiAgICBwdWJsaWMgZW5hYmxlZDogYm9vbGVhbjtcclxuXHJcbiAgICBwcml2YXRlIF9sb2FkZXI6IEdMVEZMb2FkZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobG9hZGVyOiBHTFRGTG9hZGVyKSB7XHJcbiAgICAgICAgdGhpcy5fbG9hZGVyID0gbG9hZGVyO1xyXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IGxvYWRlci5pc0V4dGVuc2lvblVzZWQoTkFNRSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgKHRoaXMuX2xvYWRlciBhcyBhbnkpID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgX2xvYWRUZXh0dXJlQXN5bmMoY29udGV4dDogc3RyaW5nLCB0ZXh0dXJlOiBJVGV4dHVyZSwgYXNzaWduOiAoYmFieWxvblRleHR1cmU6IEJhc2VUZXh0dXJlKSA9PiB2b2lkKTogTnVsbGFibGU8UHJvbWlzZTxCYXNlVGV4dHVyZT4+IHtcclxuICAgICAgICByZXR1cm4gR0xURkxvYWRlci5Mb2FkRXh0ZW5zaW9uQXN5bmM8SUVYVFRleHR1cmVXZWJQLCBCYXNlVGV4dHVyZT4oY29udGV4dCwgdGV4dHVyZSwgdGhpcy5uYW1lLCAoZXh0ZW5zaW9uQ29udGV4dCwgZXh0ZW5zaW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNhbXBsZXIgPSB0ZXh0dXJlLnNhbXBsZXIgPT0gdW5kZWZpbmVkID8gR0xURkxvYWRlci5EZWZhdWx0U2FtcGxlciA6IEFycmF5SXRlbS5HZXQoYCR7Y29udGV4dH0vc2FtcGxlcmAsIHRoaXMuX2xvYWRlci5nbHRmLnNhbXBsZXJzLCB0ZXh0dXJlLnNhbXBsZXIpO1xyXG4gICAgICAgICAgICBjb25zdCBpbWFnZSA9IEFycmF5SXRlbS5HZXQoYCR7ZXh0ZW5zaW9uQ29udGV4dH0vc291cmNlYCwgdGhpcy5fbG9hZGVyLmdsdGYuaW1hZ2VzLCBleHRlbnNpb24uc291cmNlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRlci5fY3JlYXRlVGV4dHVyZUFzeW5jKFxyXG4gICAgICAgICAgICAgICAgY29udGV4dCxcclxuICAgICAgICAgICAgICAgIHNhbXBsZXIsXHJcbiAgICAgICAgICAgICAgICBpbWFnZSxcclxuICAgICAgICAgICAgICAgIChiYWJ5bG9uVGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGFzc2lnbihiYWJ5bG9uVGV4dHVyZSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgIXRleHR1cmUuX3RleHR1cmVJbmZvLm5vbkNvbG9yRGF0YVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5HTFRGTG9hZGVyLlJlZ2lzdGVyRXh0ZW5zaW9uKE5BTUUsIChsb2FkZXIpID0+IG5ldyBFWFRfdGV4dHVyZV93ZWJwKGxvYWRlcikpO1xyXG4iLCJpbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcImNvcmUvdHlwZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBUcmFuc2Zvcm1Ob2RlIH0gZnJvbSBcImNvcmUvTWVzaGVzL3RyYW5zZm9ybU5vZGVcIjtcclxuaW1wb3J0IHR5cGUgeyBDYW1lcmEgfSBmcm9tIFwiY29yZS9DYW1lcmFzL2NhbWVyYVwiO1xyXG5cclxuaW1wb3J0IHR5cGUgeyBJUHJvcGVydHkgfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB0eXBlIHsgSU5vZGUsIElDYW1lcmEsIElNYXRlcmlhbCB9IGZyb20gXCIuLi9nbFRGTG9hZGVySW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQgdHlwZSB7IElHTFRGTG9hZGVyRXh0ZW5zaW9uIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJFeHRlbnNpb25cIjtcclxuaW1wb3J0IHsgR0xURkxvYWRlciB9IGZyb20gXCIuLi9nbFRGTG9hZGVyXCI7XHJcbmltcG9ydCB0eXBlIHsgTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvbWF0ZXJpYWxcIjtcclxuXHJcbmNvbnN0IE5BTUUgPSBcIkV4dHJhc0FzTWV0YWRhdGFcIjtcclxuXHJcbmludGVyZmFjZSBPYmplY3RXaXRoTWV0YWRhdGEge1xyXG4gICAgbWV0YWRhdGE6IGFueTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFN0b3JlIGdsVEYgZXh0cmFzIChpZiBwcmVzZW50KSBpbiBCSlMgb2JqZWN0cycgbWV0YWRhdGFcclxuICovXHJcbmV4cG9ydCBjbGFzcyBFeHRyYXNBc01ldGFkYXRhIGltcGxlbWVudHMgSUdMVEZMb2FkZXJFeHRlbnNpb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGlzIGV4dGVuc2lvbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBOQU1FO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIGVuYWJsZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBlbmFibGVkID0gdHJ1ZTtcclxuXHJcbiAgICBwcml2YXRlIF9sb2FkZXI6IEdMVEZMb2FkZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBfYXNzaWduRXh0cmFzKGJhYnlsb25PYmplY3Q6IE9iamVjdFdpdGhNZXRhZGF0YSwgZ2x0ZlByb3A6IElQcm9wZXJ0eSk6IHZvaWQge1xyXG4gICAgICAgIGlmIChnbHRmUHJvcC5leHRyYXMgJiYgT2JqZWN0LmtleXMoZ2x0ZlByb3AuZXh0cmFzKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1ldGFkYXRhID0gKGJhYnlsb25PYmplY3QubWV0YWRhdGEgPSBiYWJ5bG9uT2JqZWN0Lm1ldGFkYXRhIHx8IHt9KTtcclxuICAgICAgICAgICAgY29uc3QgZ2x0ZiA9IChtZXRhZGF0YS5nbHRmID0gbWV0YWRhdGEuZ2x0ZiB8fCB7fSk7XHJcbiAgICAgICAgICAgIGdsdGYuZXh0cmFzID0gZ2x0ZlByb3AuZXh0cmFzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IobG9hZGVyOiBHTFRGTG9hZGVyKSB7XHJcbiAgICAgICAgdGhpcy5fbG9hZGVyID0gbG9hZGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBkaXNwb3NlKCk6IHZvaWQge1xyXG4gICAgICAgICh0aGlzLl9sb2FkZXIgYXMgYW55KSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWROb2RlQXN5bmMoY29udGV4dDogc3RyaW5nLCBub2RlOiBJTm9kZSwgYXNzaWduOiAoYmFieWxvblRyYW5zZm9ybU5vZGU6IFRyYW5zZm9ybU5vZGUpID0+IHZvaWQpOiBOdWxsYWJsZTxQcm9taXNlPFRyYW5zZm9ybU5vZGU+PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRlci5sb2FkTm9kZUFzeW5jKGNvbnRleHQsIG5vZGUsIChiYWJ5bG9uVHJhbnNmb3JtTm9kZSk6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9hc3NpZ25FeHRyYXMoYmFieWxvblRyYW5zZm9ybU5vZGUsIG5vZGUpO1xyXG4gICAgICAgICAgICBhc3NpZ24oYmFieWxvblRyYW5zZm9ybU5vZGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkQ2FtZXJhQXN5bmMoY29udGV4dDogc3RyaW5nLCBjYW1lcmE6IElDYW1lcmEsIGFzc2lnbjogKGJhYnlsb25DYW1lcmE6IENhbWVyYSkgPT4gdm9pZCk6IE51bGxhYmxlPFByb21pc2U8Q2FtZXJhPj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9sb2FkZXIubG9hZENhbWVyYUFzeW5jKGNvbnRleHQsIGNhbWVyYSwgKGJhYnlsb25DYW1lcmEpOiB2b2lkID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fYXNzaWduRXh0cmFzKGJhYnlsb25DYW1lcmEsIGNhbWVyYSk7XHJcbiAgICAgICAgICAgIGFzc2lnbihiYWJ5bG9uQ2FtZXJhKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY3JlYXRlTWF0ZXJpYWwoY29udGV4dDogc3RyaW5nLCBtYXRlcmlhbDogSU1hdGVyaWFsLCBiYWJ5bG9uRHJhd01vZGU6IG51bWJlcik6IE51bGxhYmxlPE1hdGVyaWFsPiB7XHJcbiAgICAgICAgY29uc3QgYmFieWxvbk1hdGVyaWFsID0gdGhpcy5fbG9hZGVyLmNyZWF0ZU1hdGVyaWFsKGNvbnRleHQsIG1hdGVyaWFsLCBiYWJ5bG9uRHJhd01vZGUpO1xyXG4gICAgICAgIHRoaXMuX2Fzc2lnbkV4dHJhcyhiYWJ5bG9uTWF0ZXJpYWwsIG1hdGVyaWFsKTtcclxuICAgICAgICByZXR1cm4gYmFieWxvbk1hdGVyaWFsO1xyXG4gICAgfVxyXG59XHJcblxyXG5HTFRGTG9hZGVyLlJlZ2lzdGVyRXh0ZW5zaW9uKE5BTUUsIChsb2FkZXIpOiBJR0xURkxvYWRlckV4dGVuc2lvbiA9PiBuZXcgRXh0cmFzQXNNZXRhZGF0YShsb2FkZXIpKTtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uICovXHJcblxyXG5pbXBvcnQgeyBBbmltYXRpb24gfSBmcm9tIFwiY29yZS9BbmltYXRpb25zL2FuaW1hdGlvblwiO1xyXG5pbXBvcnQgdHlwZSB7IElDYW1lcmEsIElLSFJMaWdodHNQdW5jdHVhbF9MaWdodCwgSU1hdGVyaWFsIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJJbnRlcmZhY2VzXCI7XHJcbmltcG9ydCB0eXBlIHsgSUFuaW1hdGFibGUgfSBmcm9tIFwiY29yZS9BbmltYXRpb25zL2FuaW1hdGFibGUuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IEFuaW1hdGlvblByb3BlcnR5SW5mbywgbm9kZUFuaW1hdGlvbkRhdGEgfSBmcm9tIFwiLi4vZ2xURkxvYWRlckFuaW1hdGlvblwiO1xyXG5pbXBvcnQgeyBDb2xvcjMgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLmNvbG9yXCI7XHJcblxyXG5mdW5jdGlvbiBnZXRDb2xvcjMoX3RhcmdldDogYW55LCBzb3VyY2U6IEZsb2F0MzJBcnJheSwgb2Zmc2V0OiBudW1iZXIsIHNjYWxlOiBudW1iZXIpOiBDb2xvcjMge1xyXG4gICAgcmV0dXJuIENvbG9yMy5Gcm9tQXJyYXkoc291cmNlLCBvZmZzZXQpLnNjYWxlKHNjYWxlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0QWxwaGEoX3RhcmdldDogYW55LCBzb3VyY2U6IEZsb2F0MzJBcnJheSwgb2Zmc2V0OiBudW1iZXIsIHNjYWxlOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHNvdXJjZVtvZmZzZXQgKyAzXSAqIHNjYWxlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRGbG9hdChfdGFyZ2V0OiBhbnksIHNvdXJjZTogRmxvYXQzMkFycmF5LCBvZmZzZXQ6IG51bWJlciwgc2NhbGU6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gc291cmNlW29mZnNldF0gKiBzY2FsZTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0TWludXNGbG9hdChfdGFyZ2V0OiBhbnksIHNvdXJjZTogRmxvYXQzMkFycmF5LCBvZmZzZXQ6IG51bWJlciwgc2NhbGU6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gLXNvdXJjZVtvZmZzZXRdICogc2NhbGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE5leHRGbG9hdChfdGFyZ2V0OiBhbnksIHNvdXJjZTogRmxvYXQzMkFycmF5LCBvZmZzZXQ6IG51bWJlciwgc2NhbGU6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gc291cmNlW29mZnNldCArIDFdICogc2NhbGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEZsb2F0QnkyKF90YXJnZXQ6IGFueSwgc291cmNlOiBGbG9hdDMyQXJyYXksIG9mZnNldDogbnVtYmVyLCBzY2FsZTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBzb3VyY2Vbb2Zmc2V0XSAqIHNjYWxlICogMjtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VGV4dHVyZVRyYW5zZm9ybVRyZWUodGV4dHVyZU5hbWU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzY2FsZTogW1xyXG4gICAgICAgICAgICBuZXcgTWF0ZXJpYWxBbmltYXRpb25Qcm9wZXJ0eUluZm8oQW5pbWF0aW9uLkFOSU1BVElPTlRZUEVfRkxPQVQsIGAke3RleHR1cmVOYW1lfS51U2NhbGVgLCBnZXRGbG9hdCwgKCkgPT4gMiksXHJcbiAgICAgICAgICAgIG5ldyBNYXRlcmlhbEFuaW1hdGlvblByb3BlcnR5SW5mbyhBbmltYXRpb24uQU5JTUFUSU9OVFlQRV9GTE9BVCwgYCR7dGV4dHVyZU5hbWV9LnZTY2FsZWAsIGdldE5leHRGbG9hdCwgKCkgPT4gMiksXHJcbiAgICAgICAgXSxcclxuICAgICAgICBvZmZzZXQ6IFtcclxuICAgICAgICAgICAgbmV3IE1hdGVyaWFsQW5pbWF0aW9uUHJvcGVydHlJbmZvKEFuaW1hdGlvbi5BTklNQVRJT05UWVBFX0ZMT0FULCBgJHt0ZXh0dXJlTmFtZX0udU9mZnNldGAsIGdldEZsb2F0LCAoKSA9PiAyKSxcclxuICAgICAgICAgICAgbmV3IE1hdGVyaWFsQW5pbWF0aW9uUHJvcGVydHlJbmZvKEFuaW1hdGlvbi5BTklNQVRJT05UWVBFX0ZMT0FULCBgJHt0ZXh0dXJlTmFtZX0udk9mZnNldGAsIGdldE5leHRGbG9hdCwgKCkgPT4gMiksXHJcbiAgICAgICAgXSxcclxuICAgICAgICByb3RhdGlvbjogW25ldyBNYXRlcmlhbEFuaW1hdGlvblByb3BlcnR5SW5mbyhBbmltYXRpb24uQU5JTUFUSU9OVFlQRV9GTE9BVCwgYCR7dGV4dHVyZU5hbWV9LndBbmdgLCBnZXRNaW51c0Zsb2F0LCAoKSA9PiAxKV0sXHJcbiAgICB9O1xyXG59XHJcblxyXG5jbGFzcyBDYW1lcmFBbmltYXRpb25Qcm9wZXJ0eUluZm8gZXh0ZW5kcyBBbmltYXRpb25Qcm9wZXJ0eUluZm8ge1xyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGJ1aWxkQW5pbWF0aW9ucyh0YXJnZXQ6IElDYW1lcmEsIG5hbWU6IHN0cmluZywgZnBzOiBudW1iZXIsIGtleXM6IGFueVtdLCBjYWxsYmFjazogKGJhYnlsb25BbmltYXRhYmxlOiBJQW5pbWF0YWJsZSwgYmFieWxvbkFuaW1hdGlvbjogQW5pbWF0aW9uKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgY2FsbGJhY2sodGFyZ2V0Ll9iYWJ5bG9uQ2FtZXJhISwgdGhpcy5fYnVpbGRBbmltYXRpb24obmFtZSwgZnBzLCBrZXlzKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIE1hdGVyaWFsQW5pbWF0aW9uUHJvcGVydHlJbmZvIGV4dGVuZHMgQW5pbWF0aW9uUHJvcGVydHlJbmZvIHtcclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBidWlsZEFuaW1hdGlvbnModGFyZ2V0OiBJTWF0ZXJpYWwsIG5hbWU6IHN0cmluZywgZnBzOiBudW1iZXIsIGtleXM6IGFueVtdLCBjYWxsYmFjazogKGJhYnlsb25BbmltYXRhYmxlOiBJQW5pbWF0YWJsZSwgYmFieWxvbkFuaW1hdGlvbjogQW5pbWF0aW9uKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChjb25zdCBmaWxsTW9kZSBpbiB0YXJnZXQuX2RhdGEhKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKHRhcmdldC5fZGF0YSFbZmlsbE1vZGVdLmJhYnlsb25NYXRlcmlhbCwgdGhpcy5fYnVpbGRBbmltYXRpb24obmFtZSwgZnBzLCBrZXlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBMaWdodEFuaW1hdGlvblByb3BlcnR5SW5mbyBleHRlbmRzIEFuaW1hdGlvblByb3BlcnR5SW5mbyB7XHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgYnVpbGRBbmltYXRpb25zKFxyXG4gICAgICAgIHRhcmdldDogSUtIUkxpZ2h0c1B1bmN0dWFsX0xpZ2h0LFxyXG4gICAgICAgIG5hbWU6IHN0cmluZyxcclxuICAgICAgICBmcHM6IG51bWJlcixcclxuICAgICAgICBrZXlzOiBhbnlbXSxcclxuICAgICAgICBjYWxsYmFjazogKGJhYnlsb25BbmltYXRhYmxlOiBJQW5pbWF0YWJsZSwgYmFieWxvbkFuaW1hdGlvbjogQW5pbWF0aW9uKSA9PiB2b2lkXHJcbiAgICApOiB2b2lkIHtcclxuICAgICAgICBjYWxsYmFjayh0YXJnZXQuX2JhYnlsb25MaWdodCEsIHRoaXMuX2J1aWxkQW5pbWF0aW9uKG5hbWUsIGZwcywga2V5cykpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBub2Rlc1RyZWUgPSB7XHJcbiAgICBfX2FycmF5X186IHtcclxuICAgICAgICBfX3RhcmdldF9fOiB0cnVlLFxyXG4gICAgICAgIC4uLm5vZGVBbmltYXRpb25EYXRhLFxyXG4gICAgfSxcclxufTtcclxuXHJcbmNvbnN0IGNhbWVyYXNUcmVlID0ge1xyXG4gICAgX19hcnJheV9fOiB7XHJcbiAgICAgICAgX190YXJnZXRfXzogdHJ1ZSxcclxuICAgICAgICBvcnRob2dyYXBoaWM6IHtcclxuICAgICAgICAgICAgeG1hZzogW1xyXG4gICAgICAgICAgICAgICAgbmV3IENhbWVyYUFuaW1hdGlvblByb3BlcnR5SW5mbyhBbmltYXRpb24uQU5JTUFUSU9OVFlQRV9GTE9BVCwgXCJvcnRob0xlZnRcIiwgZ2V0TWludXNGbG9hdCwgKCkgPT4gMSksXHJcbiAgICAgICAgICAgICAgICBuZXcgQ2FtZXJhQW5pbWF0aW9uUHJvcGVydHlJbmZvKEFuaW1hdGlvbi5BTklNQVRJT05UWVBFX0ZMT0FULCBcIm9ydGhvUmlnaHRcIiwgZ2V0TmV4dEZsb2F0LCAoKSA9PiAxKSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgeW1hZzogW1xyXG4gICAgICAgICAgICAgICAgbmV3IENhbWVyYUFuaW1hdGlvblByb3BlcnR5SW5mbyhBbmltYXRpb24uQU5JTUFUSU9OVFlQRV9GTE9BVCwgXCJvcnRob0JvdHRvbVwiLCBnZXRNaW51c0Zsb2F0LCAoKSA9PiAxKSxcclxuICAgICAgICAgICAgICAgIG5ldyBDYW1lcmFBbmltYXRpb25Qcm9wZXJ0eUluZm8oQW5pbWF0aW9uLkFOSU1BVElPTlRZUEVfRkxPQVQsIFwib3J0aG9Ub3BcIiwgZ2V0TmV4dEZsb2F0LCAoKSA9PiAxKSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgemZhcjogW25ldyBDYW1lcmFBbmltYXRpb25Qcm9wZXJ0eUluZm8oQW5pbWF0aW9uLkFOSU1BVElPTlRZUEVfRkxPQVQsIFwibWF4WlwiLCBnZXRGbG9hdCwgKCkgPT4gMSldLFxyXG4gICAgICAgICAgICB6bmVhcjogW25ldyBDYW1lcmFBbmltYXRpb25Qcm9wZXJ0eUluZm8oQW5pbWF0aW9uLkFOSU1BVElPTlRZUEVfRkxPQVQsIFwibWluWlwiLCBnZXRGbG9hdCwgKCkgPT4gMSldLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGVyc3BlY3RpdmU6IHtcclxuICAgICAgICAgICAgeWZvdjogW25ldyBDYW1lcmFBbmltYXRpb25Qcm9wZXJ0eUluZm8oQW5pbWF0aW9uLkFOSU1BVElPTlRZUEVfRkxPQVQsIFwiZm92XCIsIGdldEZsb2F0LCAoKSA9PiAxKV0sXHJcbiAgICAgICAgICAgIHpmYXI6IFtuZXcgQ2FtZXJhQW5pbWF0aW9uUHJvcGVydHlJbmZvKEFuaW1hdGlvbi5BTklNQVRJT05UWVBFX0ZMT0FULCBcIm1heFpcIiwgZ2V0RmxvYXQsICgpID0+IDEpXSxcclxuICAgICAgICAgICAgem5lYXI6IFtuZXcgQ2FtZXJhQW5pbWF0aW9uUHJvcGVydHlJbmZvKEFuaW1hdGlvbi5BTklNQVRJT05UWVBFX0ZMT0FULCBcIm1pblpcIiwgZ2V0RmxvYXQsICgpID0+IDEpXSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufTtcclxuXHJcbmNvbnN0IG1hdGVyaWFsc1RyZWUgPSB7XHJcbiAgICBfX2FycmF5X186IHtcclxuICAgICAgICBfX3RhcmdldF9fOiB0cnVlLFxyXG4gICAgICAgIHBick1ldGFsbGljUm91Z2huZXNzOiB7XHJcbiAgICAgICAgICAgIGJhc2VDb2xvckZhY3RvcjogW1xyXG4gICAgICAgICAgICAgICAgbmV3IE1hdGVyaWFsQW5pbWF0aW9uUHJvcGVydHlJbmZvKEFuaW1hdGlvbi5BTklNQVRJT05UWVBFX0NPTE9SMywgXCJhbGJlZG9Db2xvclwiLCBnZXRDb2xvcjMsICgpID0+IDQpLFxyXG4gICAgICAgICAgICAgICAgbmV3IE1hdGVyaWFsQW5pbWF0aW9uUHJvcGVydHlJbmZvKEFuaW1hdGlvbi5BTklNQVRJT05UWVBFX0ZMT0FULCBcImFscGhhXCIsIGdldEFscGhhLCAoKSA9PiA0KSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgbWV0YWxsaWNGYWN0b3I6IFtuZXcgTWF0ZXJpYWxBbmltYXRpb25Qcm9wZXJ0eUluZm8oQW5pbWF0aW9uLkFOSU1BVElPTlRZUEVfRkxPQVQsIFwibWV0YWxsaWNcIiwgZ2V0RmxvYXQsICgpID0+IDEpXSxcclxuICAgICAgICAgICAgcm91Z2huZXNzRmFjdG9yOiBbbmV3IE1hdGVyaWFsQW5pbWF0aW9uUHJvcGVydHlJbmZvKEFuaW1hdGlvbi5BTklNQVRJT05UWVBFX0ZMT0FULCBcInJvdWdobmVzc1wiLCBnZXRGbG9hdCwgKCkgPT4gMSldLFxyXG4gICAgICAgICAgICBiYXNlQ29sb3JUZXh0dXJlOiB7XHJcbiAgICAgICAgICAgICAgICBleHRlbnNpb25zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgS0hSX3RleHR1cmVfdHJhbnNmb3JtOiBnZXRUZXh0dXJlVHJhbnNmb3JtVHJlZShcImFsYmVkb1RleHR1cmVcIiksXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW1pc3NpdmVGYWN0b3I6IFtuZXcgTWF0ZXJpYWxBbmltYXRpb25Qcm9wZXJ0eUluZm8oQW5pbWF0aW9uLkFOSU1BVElPTlRZUEVfQ09MT1IzLCBcImVtaXNzaXZlQ29sb3JcIiwgZ2V0Q29sb3IzLCAoKSA9PiAzKV0sXHJcbiAgICAgICAgbm9ybWFsVGV4dHVyZToge1xyXG4gICAgICAgICAgICBzY2FsZTogW25ldyBNYXRlcmlhbEFuaW1hdGlvblByb3BlcnR5SW5mbyhBbmltYXRpb24uQU5JTUFUSU9OVFlQRV9GTE9BVCwgXCJidW1wVGV4dHVyZS5sZXZlbFwiLCBnZXRGbG9hdCwgKCkgPT4gMSldLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb2NjbHVzaW9uVGV4dHVyZToge1xyXG4gICAgICAgICAgICBzdHJlbmd0aDogW25ldyBNYXRlcmlhbEFuaW1hdGlvblByb3BlcnR5SW5mbyhBbmltYXRpb24uQU5JTUFUSU9OVFlQRV9GTE9BVCwgXCJhbWJpZW50VGV4dHVyZVN0cmVuZ3RoXCIsIGdldEZsb2F0LCAoKSA9PiAxKV0sXHJcbiAgICAgICAgICAgIGV4dGVuc2lvbnM6IHtcclxuICAgICAgICAgICAgICAgIEtIUl90ZXh0dXJlX3RyYW5zZm9ybTogZ2V0VGV4dHVyZVRyYW5zZm9ybVRyZWUoXCJhbWJpZW50VGV4dHVyZVwiKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVtaXNzaXZlVGV4dHVyZToge1xyXG4gICAgICAgICAgICBleHRlbnNpb25zOiB7XHJcbiAgICAgICAgICAgICAgICBLSFJfdGV4dHVyZV90cmFuc2Zvcm06IGdldFRleHR1cmVUcmFuc2Zvcm1UcmVlKFwiZW1pc3NpdmVUZXh0dXJlXCIpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXh0ZW5zaW9uczoge1xyXG4gICAgICAgICAgICBLSFJfbWF0ZXJpYWxzX2lvcjoge1xyXG4gICAgICAgICAgICAgICAgaW9yOiBbbmV3IE1hdGVyaWFsQW5pbWF0aW9uUHJvcGVydHlJbmZvKEFuaW1hdGlvbi5BTklNQVRJT05UWVBFX0ZMT0FULCBcImluZGV4T2ZSZWZyYWN0aW9uXCIsIGdldEZsb2F0LCAoKSA9PiAxKV0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIEtIUl9tYXRlcmlhbHNfY2xlYXJjb2F0OiB7XHJcbiAgICAgICAgICAgICAgICBjbGVhcmNvYXRGYWN0b3I6IFtuZXcgTWF0ZXJpYWxBbmltYXRpb25Qcm9wZXJ0eUluZm8oQW5pbWF0aW9uLkFOSU1BVElPTlRZUEVfRkxPQVQsIFwiY2xlYXJDb2F0LmludGVuc2l0eVwiLCBnZXRGbG9hdCwgKCkgPT4gMSldLFxyXG4gICAgICAgICAgICAgICAgY2xlYXJjb2F0Um91Z2huZXNzRmFjdG9yOiBbbmV3IE1hdGVyaWFsQW5pbWF0aW9uUHJvcGVydHlJbmZvKEFuaW1hdGlvbi5BTklNQVRJT05UWVBFX0ZMT0FULCBcImNsZWFyQ29hdC5yb3VnaG5lc3NcIiwgZ2V0RmxvYXQsICgpID0+IDEpXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgS0hSX21hdGVyaWFsc19zaGVlbjoge1xyXG4gICAgICAgICAgICAgICAgc2hlZW5Db2xvckZhY3RvcjogW25ldyBNYXRlcmlhbEFuaW1hdGlvblByb3BlcnR5SW5mbyhBbmltYXRpb24uQU5JTUFUSU9OVFlQRV9DT0xPUjMsIFwic2hlZW4uY29sb3JcIiwgZ2V0Q29sb3IzLCAoKSA9PiAzKV0sXHJcbiAgICAgICAgICAgICAgICBzaGVlblJvdWdobmVzc0ZhY3RvcjogW25ldyBNYXRlcmlhbEFuaW1hdGlvblByb3BlcnR5SW5mbyhBbmltYXRpb24uQU5JTUFUSU9OVFlQRV9GTE9BVCwgXCJzaGVlbi5yb3VnaG5lc3NcIiwgZ2V0RmxvYXQsICgpID0+IDEpXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgS0hSX21hdGVyaWFsc19zcGVjdWxhcjoge1xyXG4gICAgICAgICAgICAgICAgc3BlY3VsYXJGYWN0b3I6IFtuZXcgTWF0ZXJpYWxBbmltYXRpb25Qcm9wZXJ0eUluZm8oQW5pbWF0aW9uLkFOSU1BVElPTlRZUEVfRkxPQVQsIFwibWV0YWxsaWNGMEZhY3RvclwiLCBnZXRGbG9hdCwgKCkgPT4gMSldLFxyXG4gICAgICAgICAgICAgICAgc3BlY3VsYXJDb2xvckZhY3RvcjogW25ldyBNYXRlcmlhbEFuaW1hdGlvblByb3BlcnR5SW5mbyhBbmltYXRpb24uQU5JTUFUSU9OVFlQRV9DT0xPUjMsIFwibWV0YWxsaWNSZWZsZWN0YW5jZUNvbG9yXCIsIGdldENvbG9yMywgKCkgPT4gMyldLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBLSFJfbWF0ZXJpYWxzX2VtaXNzaXZlX3N0cmVuZ3RoOiB7XHJcbiAgICAgICAgICAgICAgICBlbWlzc2l2ZVN0cmVuZ3RoOiBbbmV3IE1hdGVyaWFsQW5pbWF0aW9uUHJvcGVydHlJbmZvKEFuaW1hdGlvbi5BTklNQVRJT05UWVBFX0ZMT0FULCBcImVtaXNzaXZlSW50ZW5zaXR5XCIsIGdldEZsb2F0LCAoKSA9PiAxKV0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIEtIUl9tYXRlcmlhbHNfdHJhbnNtaXNzaW9uOiB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc21pc3Npb25GYWN0b3I6IFtuZXcgTWF0ZXJpYWxBbmltYXRpb25Qcm9wZXJ0eUluZm8oQW5pbWF0aW9uLkFOSU1BVElPTlRZUEVfRkxPQVQsIFwic3ViU3VyZmFjZS5yZWZyYWN0aW9uSW50ZW5zaXR5XCIsIGdldEZsb2F0LCAoKSA9PiAxKV0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIEtIUl9tYXRlcmlhbHNfdm9sdW1lOiB7XHJcbiAgICAgICAgICAgICAgICBhdHRlbnVhdGlvbkNvbG9yOiBbbmV3IE1hdGVyaWFsQW5pbWF0aW9uUHJvcGVydHlJbmZvKEFuaW1hdGlvbi5BTklNQVRJT05UWVBFX0NPTE9SMywgXCJzdWJTdXJmYWNlLnRpbnRDb2xvclwiLCBnZXRDb2xvcjMsICgpID0+IDMpXSxcclxuICAgICAgICAgICAgICAgIGF0dGVudWF0aW9uRGlzdGFuY2U6IFtuZXcgTWF0ZXJpYWxBbmltYXRpb25Qcm9wZXJ0eUluZm8oQW5pbWF0aW9uLkFOSU1BVElPTlRZUEVfRkxPQVQsIFwic3ViU3VyZmFjZS50aW50Q29sb3JBdERpc3RhbmNlXCIsIGdldEZsb2F0LCAoKSA9PiAxKV0sXHJcbiAgICAgICAgICAgICAgICB0aGlja25lc3NGYWN0b3I6IFtuZXcgTWF0ZXJpYWxBbmltYXRpb25Qcm9wZXJ0eUluZm8oQW5pbWF0aW9uLkFOSU1BVElPTlRZUEVfRkxPQVQsIFwic3ViU3VyZmFjZS5tYXhpbXVtVGhpY2tuZXNzXCIsIGdldEZsb2F0LCAoKSA9PiAxKV0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIEtIUl9tYXRlcmlhbHNfZGlzcGVyc2lvbjoge1xyXG4gICAgICAgICAgICAgICAgZGlzcGVyc2lvbjogW25ldyBNYXRlcmlhbEFuaW1hdGlvblByb3BlcnR5SW5mbyhBbmltYXRpb24uQU5JTUFUSU9OVFlQRV9GTE9BVCwgXCJzdWJTdXJmYWNlLmRpc3BlcnNpb25cIiwgZ2V0RmxvYXQsICgpID0+IDEpXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgS0hSX21hdGVyaWFsc19pcmlkZXNjZW5jZToge1xyXG4gICAgICAgICAgICAgICAgaXJpZGVzY2VuY2VGYWN0b3I6IFtuZXcgTWF0ZXJpYWxBbmltYXRpb25Qcm9wZXJ0eUluZm8oQW5pbWF0aW9uLkFOSU1BVElPTlRZUEVfRkxPQVQsIFwiaXJpZGVzY2VuY2UuaW50ZW5zaXR5XCIsIGdldEZsb2F0LCAoKSA9PiAxKV0sXHJcbiAgICAgICAgICAgICAgICBpcmlkZXNjZW5jZUlvcjogW25ldyBNYXRlcmlhbEFuaW1hdGlvblByb3BlcnR5SW5mbyhBbmltYXRpb24uQU5JTUFUSU9OVFlQRV9GTE9BVCwgXCJpcmlkZXNjZW5jZS5pbmRleE9mUmVmcmFjdGlvblwiLCBnZXRGbG9hdCwgKCkgPT4gMSldLFxyXG4gICAgICAgICAgICAgICAgaXJpZGVzY2VuY2VUaGlja25lc3NNaW5pbXVtOiBbbmV3IE1hdGVyaWFsQW5pbWF0aW9uUHJvcGVydHlJbmZvKEFuaW1hdGlvbi5BTklNQVRJT05UWVBFX0ZMT0FULCBcImlyaWRlc2NlbmNlLm1pbmltdW1UaGlja25lc3NcIiwgZ2V0RmxvYXQsICgpID0+IDEpXSxcclxuICAgICAgICAgICAgICAgIGlyaWRlc2NlbmNlVGhpY2tuZXNzTWF4aW11bTogW25ldyBNYXRlcmlhbEFuaW1hdGlvblByb3BlcnR5SW5mbyhBbmltYXRpb24uQU5JTUFUSU9OVFlQRV9GTE9BVCwgXCJpcmlkZXNjZW5jZS5tYXhpbXVtVGhpY2tuZXNzXCIsIGdldEZsb2F0LCAoKSA9PiAxKV0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIEtIUl9tYXRlcmlhbHNfYW5pc290cm9weToge1xyXG4gICAgICAgICAgICAgICAgYW5pc290cm9weVN0cmVuZ3RoOiBbbmV3IE1hdGVyaWFsQW5pbWF0aW9uUHJvcGVydHlJbmZvKEFuaW1hdGlvbi5BTklNQVRJT05UWVBFX0ZMT0FULCBcImFuaXNvdHJvcHkuaW50ZW5zaXR5XCIsIGdldEZsb2F0LCAoKSA9PiAxKV0sXHJcbiAgICAgICAgICAgICAgICBhbmlzb3Ryb3B5Um90YXRpb246IFtuZXcgTWF0ZXJpYWxBbmltYXRpb25Qcm9wZXJ0eUluZm8oQW5pbWF0aW9uLkFOSU1BVElPTlRZUEVfRkxPQVQsIFwiYW5pc290cm9weS5hbmdsZVwiLCBnZXRGbG9hdCwgKCkgPT4gMSldLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59O1xyXG5cclxuY29uc3QgZXh0ZW5zaW9uc1RyZWUgPSB7XHJcbiAgICBLSFJfbGlnaHRzX3B1bmN0dWFsOiB7XHJcbiAgICAgICAgbGlnaHRzOiB7XHJcbiAgICAgICAgICAgIF9fYXJyYXlfXzoge1xyXG4gICAgICAgICAgICAgICAgX190YXJnZXRfXzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBbbmV3IExpZ2h0QW5pbWF0aW9uUHJvcGVydHlJbmZvKEFuaW1hdGlvbi5BTklNQVRJT05UWVBFX0NPTE9SMywgXCJkaWZmdXNlXCIsIGdldENvbG9yMywgKCkgPT4gMyldLFxyXG4gICAgICAgICAgICAgICAgaW50ZW5zaXR5OiBbbmV3IExpZ2h0QW5pbWF0aW9uUHJvcGVydHlJbmZvKEFuaW1hdGlvbi5BTklNQVRJT05UWVBFX0ZMT0FULCBcImludGVuc2l0eVwiLCBnZXRGbG9hdCwgKCkgPT4gMSldLFxyXG4gICAgICAgICAgICAgICAgcmFuZ2U6IFtuZXcgTGlnaHRBbmltYXRpb25Qcm9wZXJ0eUluZm8oQW5pbWF0aW9uLkFOSU1BVElPTlRZUEVfRkxPQVQsIFwicmFuZ2VcIiwgZ2V0RmxvYXQsICgpID0+IDEpXSxcclxuICAgICAgICAgICAgICAgIHNwb3Q6IHtcclxuICAgICAgICAgICAgICAgICAgICBpbm5lckNvbmVBbmdsZTogW25ldyBMaWdodEFuaW1hdGlvblByb3BlcnR5SW5mbyhBbmltYXRpb24uQU5JTUFUSU9OVFlQRV9GTE9BVCwgXCJpbm5lckFuZ2xlXCIsIGdldEZsb2F0QnkyLCAoKSA9PiAxKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgb3V0ZXJDb25lQW5nbGU6IFtuZXcgTGlnaHRBbmltYXRpb25Qcm9wZXJ0eUluZm8oQW5pbWF0aW9uLkFOSU1BVElPTlRZUEVfRkxPQVQsIFwiYW5nbGVcIiwgZ2V0RmxvYXRCeTIsICgpID0+IDEpXSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbn07XHJcblxyXG4vKiogQGludGVybmFsICovXHJcbmV4cG9ydCBjb25zdCBhbmltYXRpb25Qb2ludGVyVHJlZSA9IHtcclxuICAgIG5vZGVzOiBub2Rlc1RyZWUsXHJcbiAgICBtYXRlcmlhbHM6IG1hdGVyaWFsc1RyZWUsXHJcbiAgICBjYW1lcmFzOiBjYW1lcmFzVHJlZSxcclxuICAgIGV4dGVuc2lvbnM6IGV4dGVuc2lvbnNUcmVlLFxyXG59O1xyXG4iLCJpbXBvcnQgdHlwZSB7IElHTFRGTG9hZGVyRXh0ZW5zaW9uIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJFeHRlbnNpb25cIjtcclxuaW1wb3J0IHsgR0xURkxvYWRlciB9IGZyb20gXCIuLi9nbFRGTG9hZGVyXCI7XHJcbmltcG9ydCB0eXBlIHsgSUFuaW1hdGlvblRhcmdldEluZm8gfSBmcm9tIFwiLi4vZ2xURkxvYWRlclwiO1xyXG5pbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcImNvcmUvdHlwZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBBbmltYXRpb24gfSBmcm9tIFwiY29yZS9BbmltYXRpb25zL2FuaW1hdGlvblwiO1xyXG5pbXBvcnQgdHlwZSB7IElBbmltYXRhYmxlIH0gZnJvbSBcImNvcmUvQW5pbWF0aW9ucy9hbmltYXRhYmxlLmludGVyZmFjZVwiO1xyXG5pbXBvcnQgdHlwZSB7IElBbmltYXRpb24sIElBbmltYXRpb25DaGFubmVsIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJJbnRlcmZhY2VzXCI7XHJcbmltcG9ydCB0eXBlIHsgSUtIUkFuaW1hdGlvblBvaW50ZXIgfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiY29yZS9NaXNjL2xvZ2dlclwiO1xyXG5pbXBvcnQgeyBhbmltYXRpb25Qb2ludGVyVHJlZSB9IGZyb20gXCIuL0tIUl9hbmltYXRpb25fcG9pbnRlci5kYXRhXCI7XHJcblxyXG5jb25zdCBOQU1FID0gXCJLSFJfYW5pbWF0aW9uX3BvaW50ZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBbU3BlY2lmaWNhdGlvbiBQUl0oaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3B1bGwvMjE0NylcclxuICogISEhIEV4cGVyaW1lbnRhbCBFeHRlbnNpb24gU3ViamVjdCB0byBDaGFuZ2VzICEhIVxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgY2xhc3MgS0hSX2FuaW1hdGlvbl9wb2ludGVyIGltcGxlbWVudHMgSUdMVEZMb2FkZXJFeHRlbnNpb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGlzIGV4dGVuc2lvbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBOQU1FO1xyXG5cclxuICAgIHByaXZhdGUgX2xvYWRlcjogR0xURkxvYWRlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihsb2FkZXI6IEdMVEZMb2FkZXIpIHtcclxuICAgICAgICB0aGlzLl9sb2FkZXIgPSBsb2FkZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgZW5hYmxlZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBlbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9sb2FkZXIuaXNFeHRlbnNpb25Vc2VkKE5BTUUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge1xyXG4gICAgICAgICh0aGlzLl9sb2FkZXIgYXMgYW55KSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb2FkcyBhIGdsVEYgYW5pbWF0aW9uIGNoYW5uZWwuXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBUaGUgY29udGV4dCB3aGVuIGxvYWRpbmcgdGhlIGFzc2V0XHJcbiAgICAgKiBAcGFyYW0gYW5pbWF0aW9uQ29udGV4dCBUaGUgY29udGV4dCBvZiB0aGUgYW5pbWF0aW9uIHdoZW4gbG9hZGluZyB0aGUgYXNzZXRcclxuICAgICAqIEBwYXJhbSBhbmltYXRpb24gVGhlIGdsVEYgYW5pbWF0aW9uIHByb3BlcnR5XHJcbiAgICAgKiBAcGFyYW0gY2hhbm5lbCBUaGUgZ2xURiBhbmltYXRpb24gY2hhbm5lbCBwcm9wZXJ0eVxyXG4gICAgICogQHBhcmFtIG9uTG9hZCBDYWxsZWQgZm9yIGVhY2ggYW5pbWF0aW9uIGxvYWRlZFxyXG4gICAgICogQHJldHVybnMgQSB2b2lkIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBsb2FkIGlzIGNvbXBsZXRlIG9yIG51bGwgaWYgbm90IGhhbmRsZWRcclxuICAgICAqL1xyXG4gICAgcHVibGljIF9sb2FkQW5pbWF0aW9uQ2hhbm5lbEFzeW5jKFxyXG4gICAgICAgIGNvbnRleHQ6IHN0cmluZyxcclxuICAgICAgICBhbmltYXRpb25Db250ZXh0OiBzdHJpbmcsXHJcbiAgICAgICAgYW5pbWF0aW9uOiBJQW5pbWF0aW9uLFxyXG4gICAgICAgIGNoYW5uZWw6IElBbmltYXRpb25DaGFubmVsLFxyXG4gICAgICAgIG9uTG9hZDogKGJhYnlsb25BbmltYXRhYmxlOiBJQW5pbWF0YWJsZSwgYmFieWxvbkFuaW1hdGlvbjogQW5pbWF0aW9uKSA9PiB2b2lkXHJcbiAgICApOiBOdWxsYWJsZTxQcm9taXNlPHZvaWQ+PiB7XHJcbiAgICAgICAgY29uc3QgZXh0ZW5zaW9uID0gY2hhbm5lbC50YXJnZXQuZXh0ZW5zaW9ucz8uS0hSX2FuaW1hdGlvbl9wb2ludGVyIGFzIElLSFJBbmltYXRpb25Qb2ludGVyO1xyXG4gICAgICAgIGlmICghZXh0ZW5zaW9uKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNoYW5uZWwudGFyZ2V0LnBhdGggIT09IEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLlBPSU5URVIpIHtcclxuICAgICAgICAgICAgTG9nZ2VyLldhcm4oYCR7Y29udGV4dH0vdGFyZ2V0L3BhdGg6IFZhbHVlICgke2NoYW5uZWwudGFyZ2V0LnBhdGh9KSBtdXN0IGJlICgke0FuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLlBPSU5URVJ9KSB3aGVuIHVzaW5nIHRoZSAke3RoaXMubmFtZX0gZXh0ZW5zaW9uYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2hhbm5lbC50YXJnZXQubm9kZSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgTG9nZ2VyLldhcm4oYCR7Y29udGV4dH0vdGFyZ2V0L25vZGU6IFZhbHVlICgke2NoYW5uZWwudGFyZ2V0Lm5vZGV9KSBtdXN0IG5vdCBiZSBwcmVzZW50IHdoZW4gdXNpbmcgdGhlICR7dGhpcy5uYW1lfSBleHRlbnNpb25gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGV4dGVuc2lvbkNvbnRleHQgPSBgJHtjb250ZXh0fS9leHRlbnNpb25zLyR7dGhpcy5uYW1lfWA7XHJcblxyXG4gICAgICAgIGNvbnN0IHBvaW50ZXIgPSBleHRlbnNpb24ucG9pbnRlcjtcclxuICAgICAgICBpZiAoIXBvaW50ZXIpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2V4dGVuc2lvbkNvbnRleHR9OiBQb2ludGVyIGlzIG1pc3NpbmdgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHRhcmdldEluZm8gPSB0aGlzLl9wYXJzZUFuaW1hdGlvblBvaW50ZXIoYCR7ZXh0ZW5zaW9uQ29udGV4dH0vcG9pbnRlcmAsIHBvaW50ZXIpO1xyXG4gICAgICAgIGlmICghdGFyZ2V0SW5mbykge1xyXG4gICAgICAgICAgICBMb2dnZXIuV2FybihgJHtleHRlbnNpb25Db250ZXh0fS9wb2ludGVyOiBJbnZhbGlkIHBvaW50ZXIgKCR7cG9pbnRlcn0pIHNraXBwZWRgKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fbG9hZGVyLl9sb2FkQW5pbWF0aW9uQ2hhbm5lbEZyb21UYXJnZXRJbmZvQXN5bmMoY29udGV4dCwgYW5pbWF0aW9uQ29udGV4dCwgYW5pbWF0aW9uLCBjaGFubmVsLCB0YXJnZXRJbmZvLCBvbkxvYWQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHBvaW50ZXIgc3RyaW5nIGlzIHJlcHJlc2VudGVkIGJ5IGEgW0pTT04gcG9pbnRlcl0oaHR0cHM6Ly9kYXRhdHJhY2tlci5pZXRmLm9yZy9kb2MvaHRtbC9yZmM2OTAxKS5cclxuICAgICAqIDxhbmltYXRpb25Qb2ludGVyPiA6PSAvPHJvb3ROb2RlPi88YXNzZXRJbmRleD4vPHByb3BlcnR5UGF0aD5cclxuICAgICAqIDxyb290Tm9kZT4gOj0gXCJub2Rlc1wiIHwgXCJtYXRlcmlhbHNcIiB8IFwibWVzaGVzXCIgfCBcImNhbWVyYXNcIiB8IFwiZXh0ZW5zaW9uc1wiXHJcbiAgICAgKiA8YXNzZXRJbmRleD4gOj0gPGRpZ2l0PiB8IDxuYW1lPlxyXG4gICAgICogPHByb3BlcnR5UGF0aD4gOj0gPGV4dGVuc2lvblBhdGg+IHwgPHN0YW5kYXJkUGF0aD5cclxuICAgICAqIDxleHRlbnNpb25QYXRoPiA6PSBcImV4dGVuc2lvbnNcIi88bmFtZT4vPHN0YW5kYXJkUGF0aD5cclxuICAgICAqIDxzdGFuZGFyZFBhdGg+IDo9IDxuYW1lPiB8IDxuYW1lPi88c3RhbmRhcmRQYXRoPlxyXG4gICAgICogPG5hbWU+IDo9IFcrXHJcbiAgICAgKiA8ZGlnaXQ+IDo9IEQrXHJcbiAgICAgKlxyXG4gICAgICogRXhhbXBsZXM6XHJcbiAgICAgKiAgLSBcIi9ub2Rlcy8wL3JvdGF0aW9uXCJcclxuICAgICAqICAtIFwiL21hdGVyaWFscy8yL2VtaXNzaXZlRmFjdG9yXCJcclxuICAgICAqICAtIFwiL21hdGVyaWFscy8yL3Bick1ldGFsbGljUm91Z2huZXNzL2Jhc2VDb2xvckZhY3RvclwiXHJcbiAgICAgKiAgLSBcIi9tYXRlcmlhbHMvMi9leHRlbnNpb25zL0tIUl9tYXRlcmlhbHNfZW1pc3NpdmVfc3RyZW5ndGgvZW1pc3NpdmVTdHJlbmd0aFwiXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX3BhcnNlQW5pbWF0aW9uUG9pbnRlcihjb250ZXh0OiBzdHJpbmcsIHBvaW50ZXI6IHN0cmluZyk6IE51bGxhYmxlPElBbmltYXRpb25UYXJnZXRJbmZvPiB7XHJcbiAgICAgICAgaWYgKCFwb2ludGVyLnN0YXJ0c1dpdGgoXCIvXCIpKSB7XHJcbiAgICAgICAgICAgIExvZ2dlci5XYXJuKGAke2NvbnRleHR9OiBWYWx1ZSAoJHtwb2ludGVyfSkgbXVzdCBzdGFydCB3aXRoIGEgc2xhc2hgKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBwYXJ0cyA9IHBvaW50ZXIuc3BsaXQoXCIvXCIpO1xyXG5cclxuICAgICAgICAvLyBSZW1vdmUgdGhlIGZpcnN0IHBhcnQgc2luY2UgaXQgd2lsbCBiZSBlbXB0eSBzdHJpbmcgYXMgcG9pbnRlcnMgbXVzdCBzdGFydCB3aXRoIGEgc2xhc2guXHJcbiAgICAgICAgcGFydHMuc2hpZnQoKTtcclxuXHJcbiAgICAgICAgbGV0IG5vZGU6IGFueSA9IGFuaW1hdGlvblBvaW50ZXJUcmVlO1xyXG4gICAgICAgIGxldCBnbHRmQ3VycmVudE5vZGU6IGFueSA9IHRoaXMuX2xvYWRlci5nbHRmO1xyXG4gICAgICAgIGxldCBnbHRmVGFyZ2V0Tm9kZTogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIGZvciAoY29uc3QgcGFydCBvZiBwYXJ0cykge1xyXG4gICAgICAgICAgICBpZiAobm9kZS5fX2FycmF5X18pIHtcclxuICAgICAgICAgICAgICAgIG5vZGUgPSBub2RlLl9fYXJyYXlfXztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5vZGUgPSBub2RlW3BhcnRdO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFub2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGdsdGZDdXJyZW50Tm9kZSA9IGdsdGZDdXJyZW50Tm9kZSAmJiBnbHRmQ3VycmVudE5vZGVbcGFydF07XHJcblxyXG4gICAgICAgICAgICBpZiAobm9kZS5fX3RhcmdldF9fKSB7XHJcbiAgICAgICAgICAgICAgICBnbHRmVGFyZ2V0Tm9kZSA9IGdsdGZDdXJyZW50Tm9kZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFnbHRmVGFyZ2V0Tm9kZSB8fCAhQXJyYXkuaXNBcnJheShub2RlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHRhcmdldDogZ2x0ZlRhcmdldE5vZGUsXHJcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IG5vZGUsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5cclxuR0xURkxvYWRlci5SZWdpc3RlckV4dGVuc2lvbihOQU1FLCAobG9hZGVyKSA9PiBuZXcgS0hSX2FuaW1hdGlvbl9wb2ludGVyKGxvYWRlcikpO1xyXG4iLCJpbXBvcnQgeyBEcmFjb0NvbXByZXNzaW9uIH0gZnJvbSBcImNvcmUvTWVzaGVzL0NvbXByZXNzaW9uL2RyYWNvQ29tcHJlc3Npb25cIjtcclxuaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCJjb3JlL3R5cGVzXCI7XHJcbmltcG9ydCB7IFZlcnRleEJ1ZmZlciB9IGZyb20gXCJjb3JlL0J1ZmZlcnMvYnVmZmVyXCI7XHJcbmltcG9ydCB0eXBlIHsgR2VvbWV0cnkgfSBmcm9tIFwiY29yZS9NZXNoZXMvZ2VvbWV0cnlcIjtcclxuaW1wb3J0IHR5cGUgeyBNZXNoIH0gZnJvbSBcImNvcmUvTWVzaGVzL21lc2hcIjtcclxuXHJcbmltcG9ydCB7IE1lc2hQcmltaXRpdmVNb2RlIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgdHlwZSB7IElLSFJEcmFjb01lc2hDb21wcmVzc2lvbiB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHR5cGUgeyBJTWVzaFByaW1pdGl2ZSwgSUJ1ZmZlclZpZXcgfSBmcm9tIFwiLi4vZ2xURkxvYWRlckludGVyZmFjZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBJR0xURkxvYWRlckV4dGVuc2lvbiB9IGZyb20gXCIuLi9nbFRGTG9hZGVyRXh0ZW5zaW9uXCI7XHJcbmltcG9ydCB7IEdMVEZMb2FkZXIsIEFycmF5SXRlbSB9IGZyb20gXCIuLi9nbFRGTG9hZGVyXCI7XHJcblxyXG5jb25zdCBOQU1FID0gXCJLSFJfZHJhY29fbWVzaF9jb21wcmVzc2lvblwiO1xyXG5cclxuaW50ZXJmYWNlIElCdWZmZXJWaWV3RHJhY28gZXh0ZW5kcyBJQnVmZmVyVmlldyB7XHJcbiAgICBfZHJhY29CYWJ5bG9uR2VvbWV0cnk/OiBQcm9taXNlPEdlb21ldHJ5PjtcclxufVxyXG5cclxuLyoqXHJcbiAqIFtTcGVjaWZpY2F0aW9uXShodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi9tYWluL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX2RyYWNvX21lc2hfY29tcHJlc3Npb24vUkVBRE1FLm1kKVxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgY2xhc3MgS0hSX2RyYWNvX21lc2hfY29tcHJlc3Npb24gaW1wbGVtZW50cyBJR0xURkxvYWRlckV4dGVuc2lvbiB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBuYW1lIG9mIHRoaXMgZXh0ZW5zaW9uLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZSA9IE5BTUU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgZHJhY28gY29tcHJlc3Npb24gdXNlZCB0byBkZWNvZGUgdmVydGV4IGRhdGEgb3IgRHJhY29Db21wcmVzc2lvbi5EZWZhdWx0IGlmIG5vdCBkZWZpbmVkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkcmFjb0NvbXByZXNzaW9uPzogRHJhY29Db21wcmVzc2lvbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyBlbmFibGVkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZW5hYmxlZDogYm9vbGVhbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgd2hldGhlciB0byB1c2UgdGhlIG5vcm1hbGl6ZWQgZmxhZyBmcm9tIHRoZSBnbFRGIGFjY2Vzc29yIGluc3RlYWQgb2YgdGhlIERyYWNvIGRhdGEuIERlZmF1bHRzIHRvIHRydWUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB1c2VOb3JtYWxpemVkRmxhZ0Zyb21BY2Nlc3NvciA9IHRydWU7XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZGVyOiBHTFRGTG9hZGVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGxvYWRlcjogR0xURkxvYWRlcikge1xyXG4gICAgICAgIHRoaXMuX2xvYWRlciA9IGxvYWRlcjtcclxuICAgICAgICB0aGlzLmVuYWJsZWQgPSBEcmFjb0NvbXByZXNzaW9uLkRlY29kZXJBdmFpbGFibGUgJiYgdGhpcy5fbG9hZGVyLmlzRXh0ZW5zaW9uVXNlZChOQU1FKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpOiB2b2lkIHtcclxuICAgICAgICBkZWxldGUgdGhpcy5kcmFjb0NvbXByZXNzaW9uO1xyXG4gICAgICAgICh0aGlzLl9sb2FkZXIgYXMgYW55KSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIF9sb2FkVmVydGV4RGF0YUFzeW5jKGNvbnRleHQ6IHN0cmluZywgcHJpbWl0aXZlOiBJTWVzaFByaW1pdGl2ZSwgYmFieWxvbk1lc2g6IE1lc2gpOiBOdWxsYWJsZTxQcm9taXNlPEdlb21ldHJ5Pj4ge1xyXG4gICAgICAgIHJldHVybiBHTFRGTG9hZGVyLkxvYWRFeHRlbnNpb25Bc3luYzxJS0hSRHJhY29NZXNoQ29tcHJlc3Npb24sIEdlb21ldHJ5Pihjb250ZXh0LCBwcmltaXRpdmUsIHRoaXMubmFtZSwgKGV4dGVuc2lvbkNvbnRleHQsIGV4dGVuc2lvbikgPT4ge1xyXG4gICAgICAgICAgICBpZiAocHJpbWl0aXZlLm1vZGUgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJpbWl0aXZlLm1vZGUgIT09IE1lc2hQcmltaXRpdmVNb2RlLlRSSUFOR0xFX1NUUklQICYmIHByaW1pdGl2ZS5tb2RlICE9PSBNZXNoUHJpbWl0aXZlTW9kZS5UUklBTkdMRVMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7Y29udGV4dH06IFVuc3VwcG9ydGVkIG1vZGUgJHtwcmltaXRpdmUubW9kZX1gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBoYW5kbGUgdHJpYW5nbGUgc3RyaXBzXHJcbiAgICAgICAgICAgICAgICBpZiAocHJpbWl0aXZlLm1vZGUgPT09IE1lc2hQcmltaXRpdmVNb2RlLlRSSUFOR0xFX1NUUklQKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2NvbnRleHR9OiBNb2RlICR7cHJpbWl0aXZlLm1vZGV9IGlzIG5vdCBjdXJyZW50bHkgc3VwcG9ydGVkYCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZXM6IHsgW2tpbmQ6IHN0cmluZ106IG51bWJlciB9ID0ge307XHJcbiAgICAgICAgICAgIGNvbnN0IG5vcm1hbGl6ZWQ6IHsgW2tpbmQ6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9O1xyXG4gICAgICAgICAgICBjb25zdCBsb2FkQXR0cmlidXRlID0gKG5hbWU6IHN0cmluZywga2luZDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1bmlxdWVJZCA9IGV4dGVuc2lvbi5hdHRyaWJ1dGVzW25hbWVdO1xyXG4gICAgICAgICAgICAgICAgaWYgKHVuaXF1ZUlkID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBiYWJ5bG9uTWVzaC5fZGVsYXlJbmZvID0gYmFieWxvbk1lc2guX2RlbGF5SW5mbyB8fCBbXTtcclxuICAgICAgICAgICAgICAgIGlmIChiYWJ5bG9uTWVzaC5fZGVsYXlJbmZvLmluZGV4T2Yoa2luZCkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFieWxvbk1lc2guX2RlbGF5SW5mby5wdXNoKGtpbmQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXNba2luZF0gPSB1bmlxdWVJZDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy51c2VOb3JtYWxpemVkRmxhZ0Zyb21BY2Nlc3Nvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFjY2Vzc29yID0gQXJyYXlJdGVtLlRyeUdldCh0aGlzLl9sb2FkZXIuZ2x0Zi5hY2Nlc3NvcnMsIHByaW1pdGl2ZS5hdHRyaWJ1dGVzW25hbWVdKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYWNjZXNzb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsaXplZFtraW5kXSA9IGFjY2Vzc29yLm5vcm1hbGl6ZWQgfHwgZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgbG9hZEF0dHJpYnV0ZShcIlBPU0lUSU9OXCIsIFZlcnRleEJ1ZmZlci5Qb3NpdGlvbktpbmQpO1xyXG4gICAgICAgICAgICBsb2FkQXR0cmlidXRlKFwiTk9STUFMXCIsIFZlcnRleEJ1ZmZlci5Ob3JtYWxLaW5kKTtcclxuICAgICAgICAgICAgbG9hZEF0dHJpYnV0ZShcIlRBTkdFTlRcIiwgVmVydGV4QnVmZmVyLlRhbmdlbnRLaW5kKTtcclxuICAgICAgICAgICAgbG9hZEF0dHJpYnV0ZShcIlRFWENPT1JEXzBcIiwgVmVydGV4QnVmZmVyLlVWS2luZCk7XHJcbiAgICAgICAgICAgIGxvYWRBdHRyaWJ1dGUoXCJURVhDT09SRF8xXCIsIFZlcnRleEJ1ZmZlci5VVjJLaW5kKTtcclxuICAgICAgICAgICAgbG9hZEF0dHJpYnV0ZShcIlRFWENPT1JEXzJcIiwgVmVydGV4QnVmZmVyLlVWM0tpbmQpO1xyXG4gICAgICAgICAgICBsb2FkQXR0cmlidXRlKFwiVEVYQ09PUkRfM1wiLCBWZXJ0ZXhCdWZmZXIuVVY0S2luZCk7XHJcbiAgICAgICAgICAgIGxvYWRBdHRyaWJ1dGUoXCJURVhDT09SRF80XCIsIFZlcnRleEJ1ZmZlci5VVjVLaW5kKTtcclxuICAgICAgICAgICAgbG9hZEF0dHJpYnV0ZShcIlRFWENPT1JEXzVcIiwgVmVydGV4QnVmZmVyLlVWNktpbmQpO1xyXG4gICAgICAgICAgICBsb2FkQXR0cmlidXRlKFwiSk9JTlRTXzBcIiwgVmVydGV4QnVmZmVyLk1hdHJpY2VzSW5kaWNlc0tpbmQpO1xyXG4gICAgICAgICAgICBsb2FkQXR0cmlidXRlKFwiV0VJR0hUU18wXCIsIFZlcnRleEJ1ZmZlci5NYXRyaWNlc1dlaWdodHNLaW5kKTtcclxuICAgICAgICAgICAgbG9hZEF0dHJpYnV0ZShcIkNPTE9SXzBcIiwgVmVydGV4QnVmZmVyLkNvbG9yS2luZCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBidWZmZXJWaWV3ID0gQXJyYXlJdGVtLkdldChleHRlbnNpb25Db250ZXh0LCB0aGlzLl9sb2FkZXIuZ2x0Zi5idWZmZXJWaWV3cywgZXh0ZW5zaW9uLmJ1ZmZlclZpZXcpIGFzIElCdWZmZXJWaWV3RHJhY287XHJcbiAgICAgICAgICAgIGlmICghYnVmZmVyVmlldy5fZHJhY29CYWJ5bG9uR2VvbWV0cnkpIHtcclxuICAgICAgICAgICAgICAgIGJ1ZmZlclZpZXcuX2RyYWNvQmFieWxvbkdlb21ldHJ5ID0gdGhpcy5fbG9hZGVyLmxvYWRCdWZmZXJWaWV3QXN5bmMoYC9idWZmZXJWaWV3cy8ke2J1ZmZlclZpZXcuaW5kZXh9YCwgYnVmZmVyVmlldykudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRyYWNvQ29tcHJlc3Npb24gPSB0aGlzLmRyYWNvQ29tcHJlc3Npb24gfHwgRHJhY29Db21wcmVzc2lvbi5EZWZhdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkcmFjb0NvbXByZXNzaW9uLl9kZWNvZGVNZXNoVG9HZW9tZXRyeUZvckdsdGZBc3luYyhiYWJ5bG9uTWVzaC5uYW1lLCB0aGlzLl9sb2FkZXIuYmFieWxvblNjZW5lLCBkYXRhLCBhdHRyaWJ1dGVzLCBub3JtYWxpemVkKS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2NvbnRleHR9OiAke2Vycm9yLm1lc3NhZ2V9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGJ1ZmZlclZpZXcuX2RyYWNvQmFieWxvbkdlb21ldHJ5O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5HTFRGTG9hZGVyLlJlZ2lzdGVyRXh0ZW5zaW9uKE5BTUUsIChsb2FkZXIpID0+IG5ldyBLSFJfZHJhY29fbWVzaF9jb21wcmVzc2lvbihsb2FkZXIpKTtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uICovXHJcbmltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xyXG5pbXBvcnQgeyBWZWN0b3IzIH0gZnJvbSBcImNvcmUvTWF0aHMvbWF0aC52ZWN0b3JcIjtcclxuaW1wb3J0IHsgQ29sb3IzIH0gZnJvbSBcImNvcmUvTWF0aHMvbWF0aC5jb2xvclwiO1xyXG5pbXBvcnQgeyBEaXJlY3Rpb25hbExpZ2h0IH0gZnJvbSBcImNvcmUvTGlnaHRzL2RpcmVjdGlvbmFsTGlnaHRcIjtcclxuaW1wb3J0IHsgUG9pbnRMaWdodCB9IGZyb20gXCJjb3JlL0xpZ2h0cy9wb2ludExpZ2h0XCI7XHJcbmltcG9ydCB7IFNwb3RMaWdodCB9IGZyb20gXCJjb3JlL0xpZ2h0cy9zcG90TGlnaHRcIjtcclxuaW1wb3J0IHsgTGlnaHQgfSBmcm9tIFwiY29yZS9MaWdodHMvbGlnaHRcIjtcclxuaW1wb3J0IHR5cGUgeyBUcmFuc2Zvcm1Ob2RlIH0gZnJvbSBcImNvcmUvTWVzaGVzL3RyYW5zZm9ybU5vZGVcIjtcclxuXHJcbmltcG9ydCB0eXBlIHsgSUtIUkxpZ2h0c1B1bmN0dWFsX0xpZ2h0UmVmZXJlbmNlIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBLSFJMaWdodHNQdW5jdHVhbF9MaWdodFR5cGUgfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB0eXBlIHsgSU5vZGUsIElLSFJMaWdodHNQdW5jdHVhbF9MaWdodCB9IGZyb20gXCIuLi9nbFRGTG9hZGVySW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQgdHlwZSB7IElHTFRGTG9hZGVyRXh0ZW5zaW9uIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJFeHRlbnNpb25cIjtcclxuaW1wb3J0IHsgR0xURkxvYWRlciwgQXJyYXlJdGVtIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJcIjtcclxuXHJcbmNvbnN0IE5BTUUgPSBcIktIUl9saWdodHNfcHVuY3R1YWxcIjtcclxuXHJcbi8qKlxyXG4gKiBbU3BlY2lmaWNhdGlvbl0oaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFpbi9leHRlbnNpb25zLzIuMC9LaHJvbm9zL0tIUl9saWdodHNfcHVuY3R1YWwvUkVBRE1FLm1kKVxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgY2xhc3MgS0hSX2xpZ2h0cyBpbXBsZW1lbnRzIElHTFRGTG9hZGVyRXh0ZW5zaW9uIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIG5hbWUgb2YgdGhpcyBleHRlbnNpb24uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lID0gTkFNRTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyBlbmFibGVkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZW5hYmxlZDogYm9vbGVhbjtcclxuXHJcbiAgICAvKiogaGlkZGVuICovXHJcbiAgICBwcml2YXRlIF9sb2FkZXI6IEdMVEZMb2FkZXI7XHJcbiAgICBwcml2YXRlIF9saWdodHM/OiBJS0hSTGlnaHRzUHVuY3R1YWxfTGlnaHRbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihsb2FkZXI6IEdMVEZMb2FkZXIpIHtcclxuICAgICAgICB0aGlzLl9sb2FkZXIgPSBsb2FkZXI7XHJcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdGhpcy5fbG9hZGVyLmlzRXh0ZW5zaW9uVXNlZChOQU1FKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHtcclxuICAgICAgICAodGhpcy5fbG9hZGVyIGFzIGFueSkgPSBudWxsO1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLl9saWdodHM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIG9uTG9hZGluZygpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBleHRlbnNpb25zID0gdGhpcy5fbG9hZGVyLmdsdGYuZXh0ZW5zaW9ucztcclxuICAgICAgICBpZiAoZXh0ZW5zaW9ucyAmJiBleHRlbnNpb25zW3RoaXMubmFtZV0pIHtcclxuICAgICAgICAgICAgY29uc3QgZXh0ZW5zaW9uID0gZXh0ZW5zaW9uc1t0aGlzLm5hbWVdIGFzIGFueTtcclxuICAgICAgICAgICAgdGhpcy5fbGlnaHRzID0gZXh0ZW5zaW9uLmxpZ2h0cztcclxuICAgICAgICAgICAgQXJyYXlJdGVtLkFzc2lnbih0aGlzLl9saWdodHMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZE5vZGVBc3luYyhjb250ZXh0OiBzdHJpbmcsIG5vZGU6IElOb2RlLCBhc3NpZ246IChiYWJ5bG9uVHJhbnNmb3JtTm9kZTogVHJhbnNmb3JtTm9kZSkgPT4gdm9pZCk6IE51bGxhYmxlPFByb21pc2U8VHJhbnNmb3JtTm9kZT4+IHtcclxuICAgICAgICByZXR1cm4gR0xURkxvYWRlci5Mb2FkRXh0ZW5zaW9uQXN5bmM8SUtIUkxpZ2h0c1B1bmN0dWFsX0xpZ2h0UmVmZXJlbmNlLCBUcmFuc2Zvcm1Ob2RlPihjb250ZXh0LCBub2RlLCB0aGlzLm5hbWUsIChleHRlbnNpb25Db250ZXh0LCBleHRlbnNpb24pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fbG9hZGVyLl9hbGxNYXRlcmlhbHNEaXJ0eVJlcXVpcmVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9sb2FkZXIubG9hZE5vZGVBc3luYyhjb250ZXh0LCBub2RlLCAoYmFieWxvbk1lc2gpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBiYWJ5bG9uTGlnaHQ6IExpZ2h0O1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGxpZ2h0ID0gQXJyYXlJdGVtLkdldChleHRlbnNpb25Db250ZXh0LCB0aGlzLl9saWdodHMsIGV4dGVuc2lvbi5saWdodCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gbGlnaHQubmFtZSB8fCBiYWJ5bG9uTWVzaC5uYW1lO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRlci5iYWJ5bG9uU2NlbmUuX2Jsb2NrRW50aXR5Q29sbGVjdGlvbiA9ICEhdGhpcy5fbG9hZGVyLl9hc3NldENvbnRhaW5lcjtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGxpZ2h0LnR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIEtIUkxpZ2h0c1B1bmN0dWFsX0xpZ2h0VHlwZS5ESVJFQ1RJT05BTDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBiYWJ5bG9uRGlyZWN0aW9uYWxMaWdodCA9IG5ldyBEaXJlY3Rpb25hbExpZ2h0KG5hbWUsIFZlY3RvcjMuQmFja3dhcmQoKSwgdGhpcy5fbG9hZGVyLmJhYnlsb25TY2VuZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhYnlsb25EaXJlY3Rpb25hbExpZ2h0LnBvc2l0aW9uLnNldEFsbCgwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFieWxvbkxpZ2h0ID0gYmFieWxvbkRpcmVjdGlvbmFsTGlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIEtIUkxpZ2h0c1B1bmN0dWFsX0xpZ2h0VHlwZS5QT0lOVDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uTGlnaHQgPSBuZXcgUG9pbnRMaWdodChuYW1lLCBWZWN0b3IzLlplcm8oKSwgdGhpcy5fbG9hZGVyLmJhYnlsb25TY2VuZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIEtIUkxpZ2h0c1B1bmN0dWFsX0xpZ2h0VHlwZS5TUE9UOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhYnlsb25TcG90TGlnaHQgPSBuZXcgU3BvdExpZ2h0KG5hbWUsIFZlY3RvcjMuWmVybygpLCBWZWN0b3IzLkJhY2t3YXJkKCksIDAsIDEsIHRoaXMuX2xvYWRlci5iYWJ5bG9uU2NlbmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uU3BvdExpZ2h0LmFuZ2xlID0gKChsaWdodC5zcG90ICYmIGxpZ2h0LnNwb3Qub3V0ZXJDb25lQW5nbGUpIHx8IE1hdGguUEkgLyA0KSAqIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhYnlsb25TcG90TGlnaHQuaW5uZXJBbmdsZSA9ICgobGlnaHQuc3BvdCAmJiBsaWdodC5zcG90LmlubmVyQ29uZUFuZ2xlKSB8fCAwKSAqIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhYnlsb25MaWdodCA9IGJhYnlsb25TcG90TGlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRlci5iYWJ5bG9uU2NlbmUuX2Jsb2NrRW50aXR5Q29sbGVjdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7ZXh0ZW5zaW9uQ29udGV4dH06IEludmFsaWQgbGlnaHQgdHlwZSAoJHtsaWdodC50eXBlfSlgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgYmFieWxvbkxpZ2h0Ll9wYXJlbnRDb250YWluZXIgPSB0aGlzLl9sb2FkZXIuX2Fzc2V0Q29udGFpbmVyO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9hZGVyLmJhYnlsb25TY2VuZS5fYmxvY2tFbnRpdHlDb2xsZWN0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBsaWdodC5fYmFieWxvbkxpZ2h0ID0gYmFieWxvbkxpZ2h0O1xyXG5cclxuICAgICAgICAgICAgICAgIGJhYnlsb25MaWdodC5mYWxsb2ZmVHlwZSA9IExpZ2h0LkZBTExPRkZfR0xURjtcclxuICAgICAgICAgICAgICAgIGJhYnlsb25MaWdodC5kaWZmdXNlID0gbGlnaHQuY29sb3IgPyBDb2xvcjMuRnJvbUFycmF5KGxpZ2h0LmNvbG9yKSA6IENvbG9yMy5XaGl0ZSgpO1xyXG4gICAgICAgICAgICAgICAgYmFieWxvbkxpZ2h0LmludGVuc2l0eSA9IGxpZ2h0LmludGVuc2l0eSA9PSB1bmRlZmluZWQgPyAxIDogbGlnaHQuaW50ZW5zaXR5O1xyXG4gICAgICAgICAgICAgICAgYmFieWxvbkxpZ2h0LnJhbmdlID0gbGlnaHQucmFuZ2UgPT0gdW5kZWZpbmVkID8gTnVtYmVyLk1BWF9WQUxVRSA6IGxpZ2h0LnJhbmdlO1xyXG4gICAgICAgICAgICAgICAgYmFieWxvbkxpZ2h0LnBhcmVudCA9IGJhYnlsb25NZXNoO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRlci5fYmFieWxvbkxpZ2h0cy5wdXNoKGJhYnlsb25MaWdodCk7XHJcblxyXG4gICAgICAgICAgICAgICAgR0xURkxvYWRlci5BZGRQb2ludGVyTWV0YWRhdGEoYmFieWxvbkxpZ2h0LCBleHRlbnNpb25Db250ZXh0KTtcclxuXHJcbiAgICAgICAgICAgICAgICBhc3NpZ24oYmFieWxvbk1lc2gpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuR0xURkxvYWRlci5SZWdpc3RlckV4dGVuc2lvbihOQU1FLCAobG9hZGVyKSA9PiBuZXcgS0hSX2xpZ2h0cyhsb2FkZXIpKTtcclxuIiwiaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCJjb3JlL3R5cGVzXCI7XHJcbmltcG9ydCB7IFBCUk1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1BCUi9wYnJNYXRlcmlhbFwiO1xyXG5pbXBvcnQgdHlwZSB7IE1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL21hdGVyaWFsXCI7XHJcblxyXG5pbXBvcnQgdHlwZSB7IElNYXRlcmlhbCB9IGZyb20gXCIuLi9nbFRGTG9hZGVySW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQgdHlwZSB7IElHTFRGTG9hZGVyRXh0ZW5zaW9uIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJFeHRlbnNpb25cIjtcclxuaW1wb3J0IHsgR0xURkxvYWRlciB9IGZyb20gXCIuLi9nbFRGTG9hZGVyXCI7XHJcbmltcG9ydCB0eXBlIHsgSUtIUk1hdGVyaWFsc0FuaXNvdHJvcHkgfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcblxyXG5jb25zdCBOQU1FID0gXCJLSFJfbWF0ZXJpYWxzX2FuaXNvdHJvcHlcIjtcclxuXHJcbi8qKlxyXG4gKiBbU3BlY2lmaWNhdGlvbl0oaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFpbi9leHRlbnNpb25zLzIuMC9LaHJvbm9zL0tIUl9tYXRlcmlhbHNfYW5pc290cm9weSlcclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGNsYXNzIEtIUl9tYXRlcmlhbHNfYW5pc290cm9weSBpbXBsZW1lbnRzIElHTFRGTG9hZGVyRXh0ZW5zaW9uIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIG5hbWUgb2YgdGhpcyBleHRlbnNpb24uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lID0gTkFNRTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyBlbmFibGVkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZW5hYmxlZDogYm9vbGVhbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgYSBudW1iZXIgdGhhdCBkZXRlcm1pbmVzIHRoZSBvcmRlciB0aGUgZXh0ZW5zaW9ucyBhcmUgYXBwbGllZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIG9yZGVyID0gMTk1O1xyXG5cclxuICAgIHByaXZhdGUgX2xvYWRlcjogR0xURkxvYWRlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihsb2FkZXI6IEdMVEZMb2FkZXIpIHtcclxuICAgICAgICB0aGlzLl9sb2FkZXIgPSBsb2FkZXI7XHJcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdGhpcy5fbG9hZGVyLmlzRXh0ZW5zaW9uVXNlZChOQU1FKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHtcclxuICAgICAgICAodGhpcy5fbG9hZGVyIGFzIGFueSkgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkTWF0ZXJpYWxQcm9wZXJ0aWVzQXN5bmMoY29udGV4dDogc3RyaW5nLCBtYXRlcmlhbDogSU1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsKTogTnVsbGFibGU8UHJvbWlzZTx2b2lkPj4ge1xyXG4gICAgICAgIHJldHVybiBHTFRGTG9hZGVyLkxvYWRFeHRlbnNpb25Bc3luYzxJS0hSTWF0ZXJpYWxzQW5pc290cm9weT4oY29udGV4dCwgbWF0ZXJpYWwsIHRoaXMubmFtZSwgKGV4dGVuc2lvbkNvbnRleHQsIGV4dGVuc2lvbikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9taXNlcyA9IG5ldyBBcnJheTxQcm9taXNlPGFueT4+KCk7XHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5fbG9hZGVyLmxvYWRNYXRlcmlhbFByb3BlcnRpZXNBc3luYyhjb250ZXh0LCBtYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsKSk7XHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5fbG9hZElyaWRlc2NlbmNlUHJvcGVydGllc0FzeW5jKGV4dGVuc2lvbkNvbnRleHQsIGV4dGVuc2lvbiwgYmFieWxvbk1hdGVyaWFsKSk7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoKSA9PiB7fSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZElyaWRlc2NlbmNlUHJvcGVydGllc0FzeW5jKGNvbnRleHQ6IHN0cmluZywgcHJvcGVydGllczogSUtIUk1hdGVyaWFsc0FuaXNvdHJvcHksIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBpZiAoIShiYWJ5bG9uTWF0ZXJpYWwgaW5zdGFuY2VvZiBQQlJNYXRlcmlhbCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2NvbnRleHR9OiBNYXRlcmlhbCB0eXBlIG5vdCBzdXBwb3J0ZWRgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gbmV3IEFycmF5PFByb21pc2U8YW55Pj4oKTtcclxuXHJcbiAgICAgICAgYmFieWxvbk1hdGVyaWFsLmFuaXNvdHJvcHkuaXNFbmFibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgYmFieWxvbk1hdGVyaWFsLmFuaXNvdHJvcHkuaW50ZW5zaXR5ID0gcHJvcGVydGllcy5hbmlzb3Ryb3B5U3RyZW5ndGggPz8gMDtcclxuICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwuYW5pc290cm9weS5hbmdsZSA9IHByb3BlcnRpZXMuYW5pc290cm9weVJvdGF0aW9uID8/IDA7XHJcblxyXG4gICAgICAgIGlmIChwcm9wZXJ0aWVzLmFuaXNvdHJvcHlUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2FkZXIubG9hZFRleHR1cmVJbmZvQXN5bmMoYCR7Y29udGV4dH0vYW5pc290cm9weVRleHR1cmVgLCBwcm9wZXJ0aWVzLmFuaXNvdHJvcHlUZXh0dXJlLCAodGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHR1cmUubmFtZSA9IGAke2JhYnlsb25NYXRlcmlhbC5uYW1lfSAoQW5pc290cm9weSBJbnRlbnNpdHkpYDtcclxuICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwuYW5pc290cm9weS50ZXh0dXJlID0gdGV4dHVyZTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4ge30pO1xyXG4gICAgfVxyXG59XHJcblxyXG5HTFRGTG9hZGVyLlJlZ2lzdGVyRXh0ZW5zaW9uKE5BTUUsIChsb2FkZXIpID0+IG5ldyBLSFJfbWF0ZXJpYWxzX2FuaXNvdHJvcHkobG9hZGVyKSk7XHJcbiIsImltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xyXG5pbXBvcnQgeyBQQlJNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9QQlIvcGJyTWF0ZXJpYWxcIjtcclxuaW1wb3J0IHR5cGUgeyBNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9tYXRlcmlhbFwiO1xyXG5cclxuaW1wb3J0IHR5cGUgeyBJTWF0ZXJpYWwsIElUZXh0dXJlSW5mbyB9IGZyb20gXCIuLi9nbFRGTG9hZGVySW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQgdHlwZSB7IElHTFRGTG9hZGVyRXh0ZW5zaW9uIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJFeHRlbnNpb25cIjtcclxuaW1wb3J0IHsgR0xURkxvYWRlciB9IGZyb20gXCIuLi9nbFRGTG9hZGVyXCI7XHJcbmltcG9ydCB0eXBlIHsgSUtIUk1hdGVyaWFsc0NsZWFyY29hdCB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuXHJcbmNvbnN0IE5BTUUgPSBcIktIUl9tYXRlcmlhbHNfY2xlYXJjb2F0XCI7XHJcblxyXG4vKipcclxuICogW1NwZWNpZmljYXRpb25dKGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9ibG9iL21haW4vZXh0ZW5zaW9ucy8yLjAvS2hyb25vcy9LSFJfbWF0ZXJpYWxzX2NsZWFyY29hdC9SRUFETUUubWQpXHJcbiAqIFtQbGF5Z3JvdW5kIFNhbXBsZV0oaHR0cHM6Ly93d3cuYmFieWxvbmpzLXBsYXlncm91bmQuY29tL2ZyYW1lLmh0bWwjN0Y3UE42IzgpXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBjbGFzcyBLSFJfbWF0ZXJpYWxzX2NsZWFyY29hdCBpbXBsZW1lbnRzIElHTFRGTG9hZGVyRXh0ZW5zaW9uIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIG5hbWUgb2YgdGhpcyBleHRlbnNpb24uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lID0gTkFNRTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyBlbmFibGVkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZW5hYmxlZDogYm9vbGVhbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgYSBudW1iZXIgdGhhdCBkZXRlcm1pbmVzIHRoZSBvcmRlciB0aGUgZXh0ZW5zaW9ucyBhcmUgYXBwbGllZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIG9yZGVyID0gMTkwO1xyXG5cclxuICAgIHByaXZhdGUgX2xvYWRlcjogR0xURkxvYWRlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihsb2FkZXI6IEdMVEZMb2FkZXIpIHtcclxuICAgICAgICB0aGlzLl9sb2FkZXIgPSBsb2FkZXI7XHJcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdGhpcy5fbG9hZGVyLmlzRXh0ZW5zaW9uVXNlZChOQU1FKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHtcclxuICAgICAgICAodGhpcy5fbG9hZGVyIGFzIGFueSkgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkTWF0ZXJpYWxQcm9wZXJ0aWVzQXN5bmMoY29udGV4dDogc3RyaW5nLCBtYXRlcmlhbDogSU1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsKTogTnVsbGFibGU8UHJvbWlzZTx2b2lkPj4ge1xyXG4gICAgICAgIHJldHVybiBHTFRGTG9hZGVyLkxvYWRFeHRlbnNpb25Bc3luYzxJS0hSTWF0ZXJpYWxzQ2xlYXJjb2F0Pihjb250ZXh0LCBtYXRlcmlhbCwgdGhpcy5uYW1lLCAoZXh0ZW5zaW9uQ29udGV4dCwgZXh0ZW5zaW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb21pc2VzID0gbmV3IEFycmF5PFByb21pc2U8YW55Pj4oKTtcclxuICAgICAgICAgICAgcHJvbWlzZXMucHVzaCh0aGlzLl9sb2FkZXIubG9hZE1hdGVyaWFsUHJvcGVydGllc0FzeW5jKGNvbnRleHQsIG1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWwpKTtcclxuICAgICAgICAgICAgcHJvbWlzZXMucHVzaCh0aGlzLl9sb2FkQ2xlYXJDb2F0UHJvcGVydGllc0FzeW5jKGV4dGVuc2lvbkNvbnRleHQsIGV4dGVuc2lvbiwgYmFieWxvbk1hdGVyaWFsKSk7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoKSA9PiB7fSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZENsZWFyQ29hdFByb3BlcnRpZXNBc3luYyhjb250ZXh0OiBzdHJpbmcsIHByb3BlcnRpZXM6IElLSFJNYXRlcmlhbHNDbGVhcmNvYXQsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBpZiAoIShiYWJ5bG9uTWF0ZXJpYWwgaW5zdGFuY2VvZiBQQlJNYXRlcmlhbCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2NvbnRleHR9OiBNYXRlcmlhbCB0eXBlIG5vdCBzdXBwb3J0ZWRgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gbmV3IEFycmF5PFByb21pc2U8YW55Pj4oKTtcclxuXHJcbiAgICAgICAgYmFieWxvbk1hdGVyaWFsLmNsZWFyQ29hdC5pc0VuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIGJhYnlsb25NYXRlcmlhbC5jbGVhckNvYXQudXNlUm91Z2huZXNzRnJvbU1haW5UZXh0dXJlID0gZmFsc2U7XHJcbiAgICAgICAgYmFieWxvbk1hdGVyaWFsLmNsZWFyQ29hdC5yZW1hcEYwT25JbnRlcmZhY2VDaGFuZ2UgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKHByb3BlcnRpZXMuY2xlYXJjb2F0RmFjdG9yICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwuY2xlYXJDb2F0LmludGVuc2l0eSA9IHByb3BlcnRpZXMuY2xlYXJjb2F0RmFjdG9yO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGJhYnlsb25NYXRlcmlhbC5jbGVhckNvYXQuaW50ZW5zaXR5ID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwcm9wZXJ0aWVzLmNsZWFyY29hdFRleHR1cmUpIHtcclxuICAgICAgICAgICAgcHJvbWlzZXMucHVzaChcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRlci5sb2FkVGV4dHVyZUluZm9Bc3luYyhgJHtjb250ZXh0fS9jbGVhcmNvYXRUZXh0dXJlYCwgcHJvcGVydGllcy5jbGVhcmNvYXRUZXh0dXJlLCAodGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHR1cmUubmFtZSA9IGAke2JhYnlsb25NYXRlcmlhbC5uYW1lfSAoQ2xlYXJDb2F0IEludGVuc2l0eSlgO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhYnlsb25NYXRlcmlhbC5jbGVhckNvYXQudGV4dHVyZSA9IHRleHR1cmU7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHByb3BlcnRpZXMuY2xlYXJjb2F0Um91Z2huZXNzRmFjdG9yICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwuY2xlYXJDb2F0LnJvdWdobmVzcyA9IHByb3BlcnRpZXMuY2xlYXJjb2F0Um91Z2huZXNzRmFjdG9yO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGJhYnlsb25NYXRlcmlhbC5jbGVhckNvYXQucm91Z2huZXNzID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwcm9wZXJ0aWVzLmNsZWFyY29hdFJvdWdobmVzc1RleHR1cmUpIHtcclxuICAgICAgICAgICAgKHByb3BlcnRpZXMuY2xlYXJjb2F0Um91Z2huZXNzVGV4dHVyZSBhcyBJVGV4dHVyZUluZm8pLm5vbkNvbG9yRGF0YSA9IHRydWU7XHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2FkZXIubG9hZFRleHR1cmVJbmZvQXN5bmMoYCR7Y29udGV4dH0vY2xlYXJjb2F0Um91Z2huZXNzVGV4dHVyZWAsIHByb3BlcnRpZXMuY2xlYXJjb2F0Um91Z2huZXNzVGV4dHVyZSwgKHRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlLm5hbWUgPSBgJHtiYWJ5bG9uTWF0ZXJpYWwubmFtZX0gKENsZWFyQ29hdCBSb3VnaG5lc3MpYDtcclxuICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwuY2xlYXJDb2F0LnRleHR1cmVSb3VnaG5lc3MgPSB0ZXh0dXJlO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwcm9wZXJ0aWVzLmNsZWFyY29hdE5vcm1hbFRleHR1cmUpIHtcclxuICAgICAgICAgICAgKHByb3BlcnRpZXMuY2xlYXJjb2F0Tm9ybWFsVGV4dHVyZSBhcyBJVGV4dHVyZUluZm8pLm5vbkNvbG9yRGF0YSA9IHRydWU7XHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2FkZXIubG9hZFRleHR1cmVJbmZvQXN5bmMoYCR7Y29udGV4dH0vY2xlYXJjb2F0Tm9ybWFsVGV4dHVyZWAsIHByb3BlcnRpZXMuY2xlYXJjb2F0Tm9ybWFsVGV4dHVyZSwgKHRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlLm5hbWUgPSBgJHtiYWJ5bG9uTWF0ZXJpYWwubmFtZX0gKENsZWFyQ29hdCBOb3JtYWwpYDtcclxuICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwuY2xlYXJDb2F0LmJ1bXBUZXh0dXJlID0gdGV4dHVyZTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwuaW52ZXJ0Tm9ybWFsTWFwWCA9ICFiYWJ5bG9uTWF0ZXJpYWwuZ2V0U2NlbmUoKS51c2VSaWdodEhhbmRlZFN5c3RlbTtcclxuICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsLmludmVydE5vcm1hbE1hcFkgPSBiYWJ5bG9uTWF0ZXJpYWwuZ2V0U2NlbmUoKS51c2VSaWdodEhhbmRlZFN5c3RlbTtcclxuICAgICAgICAgICAgaWYgKHByb3BlcnRpZXMuY2xlYXJjb2F0Tm9ybWFsVGV4dHVyZS5zY2FsZSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGJhYnlsb25NYXRlcmlhbC5jbGVhckNvYXQuYnVtcFRleHR1cmUhLmxldmVsID0gcHJvcGVydGllcy5jbGVhcmNvYXROb3JtYWxUZXh0dXJlLnNjYWxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4ge30pO1xyXG4gICAgfVxyXG59XHJcblxyXG5HTFRGTG9hZGVyLlJlZ2lzdGVyRXh0ZW5zaW9uKE5BTUUsIChsb2FkZXIpID0+IG5ldyBLSFJfbWF0ZXJpYWxzX2NsZWFyY29hdChsb2FkZXIpKTtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uICovXHJcbmltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xyXG5pbXBvcnQgeyBQQlJNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9QQlIvcGJyTWF0ZXJpYWxcIjtcclxuaW1wb3J0IHR5cGUgeyBNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgdHlwZSB7IElNYXRlcmlhbCB9IGZyb20gXCIuLi9nbFRGTG9hZGVySW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQgdHlwZSB7IElHTFRGTG9hZGVyRXh0ZW5zaW9uIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJFeHRlbnNpb25cIjtcclxuaW1wb3J0IHsgR0xURkxvYWRlciB9IGZyb20gXCIuLi9nbFRGTG9hZGVyXCI7XHJcbmltcG9ydCB0eXBlIHsgSUtIUk1hdGVyaWFsc0Rpc3BlcnNpb24gfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcblxyXG5jb25zdCBOQU1FID0gXCJLSFJfbWF0ZXJpYWxzX2Rpc3BlcnNpb25cIjtcclxuXHJcbi8qKlxyXG4gKiBbU3BlY2lmaWNhdGlvbl0oaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvODdiZDY0YTdmNWUyM2M4NGI2YWVmMmU2MDgyMDY5NTgzZWQwZGRiNC9leHRlbnNpb25zLzIuMC9LaHJvbm9zL0tIUl9tYXRlcmlhbHNfZGlzcGVyc2lvbi9SRUFETUUubWQpXHJcbiAqIEBleHBlcmltZW50YWxcclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGNsYXNzIEtIUl9tYXRlcmlhbHNfZGlzcGVyc2lvbiBpbXBsZW1lbnRzIElHTFRGTG9hZGVyRXh0ZW5zaW9uIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIG5hbWUgb2YgdGhpcyBleHRlbnNpb24uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lID0gTkFNRTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyBlbmFibGVkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZW5hYmxlZDogYm9vbGVhbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgYSBudW1iZXIgdGhhdCBkZXRlcm1pbmVzIHRoZSBvcmRlciB0aGUgZXh0ZW5zaW9ucyBhcmUgYXBwbGllZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIG9yZGVyID0gMTc0O1xyXG5cclxuICAgIHByaXZhdGUgX2xvYWRlcjogR0xURkxvYWRlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihsb2FkZXI6IEdMVEZMb2FkZXIpIHtcclxuICAgICAgICB0aGlzLl9sb2FkZXIgPSBsb2FkZXI7XHJcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdGhpcy5fbG9hZGVyLmlzRXh0ZW5zaW9uVXNlZChOQU1FKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHtcclxuICAgICAgICAodGhpcy5fbG9hZGVyIGFzIGFueSkgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkTWF0ZXJpYWxQcm9wZXJ0aWVzQXN5bmMoY29udGV4dDogc3RyaW5nLCBtYXRlcmlhbDogSU1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsKTogTnVsbGFibGU8UHJvbWlzZTx2b2lkPj4ge1xyXG4gICAgICAgIHJldHVybiBHTFRGTG9hZGVyLkxvYWRFeHRlbnNpb25Bc3luYzxJS0hSTWF0ZXJpYWxzRGlzcGVyc2lvbj4oY29udGV4dCwgbWF0ZXJpYWwsIHRoaXMubmFtZSwgKGV4dGVuc2lvbkNvbnRleHQsIGV4dGVuc2lvbikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9taXNlcyA9IG5ldyBBcnJheTxQcm9taXNlPGFueT4+KCk7XHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5fbG9hZGVyLmxvYWRNYXRlcmlhbEJhc2VQcm9wZXJ0aWVzQXN5bmMoY29udGV4dCwgbWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbCkpO1xyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMuX2xvYWRlci5sb2FkTWF0ZXJpYWxQcm9wZXJ0aWVzQXN5bmMoY29udGV4dCwgbWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbCkpO1xyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMuX2xvYWREaXNwZXJzaW9uUHJvcGVydGllc0FzeW5jKGV4dGVuc2lvbkNvbnRleHQsIG1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWwsIGV4dGVuc2lvbikpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4ge30pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2xvYWREaXNwZXJzaW9uUHJvcGVydGllc0FzeW5jKGNvbnRleHQ6IHN0cmluZywgbWF0ZXJpYWw6IElNYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCwgZXh0ZW5zaW9uOiBJS0hSTWF0ZXJpYWxzRGlzcGVyc2lvbik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGlmICghKGJhYnlsb25NYXRlcmlhbCBpbnN0YW5jZW9mIFBCUk1hdGVyaWFsKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7Y29udGV4dH06IE1hdGVyaWFsIHR5cGUgbm90IHN1cHBvcnRlZGApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgdHJhbnNwYXJlbmN5IGlzbid0IGVuYWJsZWQgYWxyZWFkeSwgdGhpcyBleHRlbnNpb24gc2hvdWxkbid0IGRvIGFueXRoaW5nLlxyXG4gICAgICAgIC8vIGkuZS4gaXQgcmVxdWlyZXMgZWl0aGVyIHRoZSBLSFJfbWF0ZXJpYWxzX3RyYW5zbWlzc2lvbiBvciBLSFJfbWF0ZXJpYWxzX3RyYW5zbHVjZW5jeSBleHRlbnNpb25zLlxyXG4gICAgICAgIGlmICghYmFieWxvbk1hdGVyaWFsLnN1YlN1cmZhY2UuaXNSZWZyYWN0aW9uRW5hYmxlZCB8fCAhZXh0ZW5zaW9uLmRpc3BlcnNpb24pIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwuc3ViU3VyZmFjZS5pc0Rpc3BlcnNpb25FbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwuc3ViU3VyZmFjZS5kaXNwZXJzaW9uID0gZXh0ZW5zaW9uLmRpc3BlcnNpb247XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5HTFRGTG9hZGVyLlJlZ2lzdGVyRXh0ZW5zaW9uKE5BTUUsIChsb2FkZXIpID0+IG5ldyBLSFJfbWF0ZXJpYWxzX2Rpc3BlcnNpb24obG9hZGVyKSk7XHJcbiIsImltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xyXG5pbXBvcnQgeyBQQlJNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9QQlIvcGJyTWF0ZXJpYWxcIjtcclxuaW1wb3J0IHR5cGUgeyBNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9tYXRlcmlhbFwiO1xyXG5cclxuaW1wb3J0IHR5cGUgeyBJTWF0ZXJpYWwgfSBmcm9tIFwiLi4vZ2xURkxvYWRlckludGVyZmFjZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBJR0xURkxvYWRlckV4dGVuc2lvbiB9IGZyb20gXCIuLi9nbFRGTG9hZGVyRXh0ZW5zaW9uXCI7XHJcbmltcG9ydCB7IEdMVEZMb2FkZXIgfSBmcm9tIFwiLi4vZ2xURkxvYWRlclwiO1xyXG5pbXBvcnQgdHlwZSB7IElLSFJNYXRlcmlhbHNFbWlzc2l2ZVN0cmVuZ3RoIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5cclxuY29uc3QgTkFNRSA9IFwiS0hSX21hdGVyaWFsc19lbWlzc2l2ZV9zdHJlbmd0aFwiO1xyXG5cclxuLyoqXHJcbiAqIFtTcGVjaWZpY2F0aW9uXShodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi9tYWluL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX21hdGVyaWFsc19lbWlzc2l2ZV9zdHJlbmd0aC9SRUFETUUubWQpXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBjbGFzcyBLSFJfbWF0ZXJpYWxzX2VtaXNzaXZlX3N0cmVuZ3RoIGltcGxlbWVudHMgSUdMVEZMb2FkZXJFeHRlbnNpb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGlzIGV4dGVuc2lvbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBOQU1FO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIGVuYWJsZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBlbmFibGVkOiBib29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyBhIG51bWJlciB0aGF0IGRldGVybWluZXMgdGhlIG9yZGVyIHRoZSBleHRlbnNpb25zIGFyZSBhcHBsaWVkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb3JkZXIgPSAxNzA7XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZGVyOiBHTFRGTG9hZGVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGxvYWRlcjogR0xURkxvYWRlcikge1xyXG4gICAgICAgIHRoaXMuX2xvYWRlciA9IGxvYWRlcjtcclxuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0aGlzLl9sb2FkZXIuaXNFeHRlbnNpb25Vc2VkKE5BTUUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge1xyXG4gICAgICAgICh0aGlzLl9sb2FkZXIgYXMgYW55KSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWRNYXRlcmlhbFByb3BlcnRpZXNBc3luYyhjb250ZXh0OiBzdHJpbmcsIG1hdGVyaWFsOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBOdWxsYWJsZTxQcm9taXNlPHZvaWQ+PiB7XHJcbiAgICAgICAgcmV0dXJuIEdMVEZMb2FkZXIuTG9hZEV4dGVuc2lvbkFzeW5jPElLSFJNYXRlcmlhbHNFbWlzc2l2ZVN0cmVuZ3RoPihjb250ZXh0LCBtYXRlcmlhbCwgdGhpcy5uYW1lLCAoZXh0ZW5zaW9uQ29udGV4dCwgZXh0ZW5zaW9uKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9sb2FkZXIubG9hZE1hdGVyaWFsUHJvcGVydGllc0FzeW5jKGNvbnRleHQsIG1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWwpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9hZEVtaXNzaXZlUHJvcGVydGllcyhleHRlbnNpb25Db250ZXh0LCBleHRlbnNpb24sIGJhYnlsb25NYXRlcmlhbCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2xvYWRFbWlzc2l2ZVByb3BlcnRpZXMoY29udGV4dDogc3RyaW5nLCBwcm9wZXJ0aWVzOiBJS0hSTWF0ZXJpYWxzRW1pc3NpdmVTdHJlbmd0aCwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghKGJhYnlsb25NYXRlcmlhbCBpbnN0YW5jZW9mIFBCUk1hdGVyaWFsKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7Y29udGV4dH06IE1hdGVyaWFsIHR5cGUgbm90IHN1cHBvcnRlZGApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHByb3BlcnRpZXMuZW1pc3NpdmVTdHJlbmd0aCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGJhYnlsb25NYXRlcmlhbC5lbWlzc2l2ZUNvbG9yLnNjYWxlVG9SZWYocHJvcGVydGllcy5lbWlzc2l2ZVN0cmVuZ3RoLCBiYWJ5bG9uTWF0ZXJpYWwuZW1pc3NpdmVDb2xvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5HTFRGTG9hZGVyLlJlZ2lzdGVyRXh0ZW5zaW9uKE5BTUUsIChsb2FkZXIpID0+IG5ldyBLSFJfbWF0ZXJpYWxzX2VtaXNzaXZlX3N0cmVuZ3RoKGxvYWRlcikpO1xyXG4iLCJpbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcImNvcmUvdHlwZXNcIjtcclxuaW1wb3J0IHsgUEJSTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvUEJSL3Bick1hdGVyaWFsXCI7XHJcbmltcG9ydCB0eXBlIHsgTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvbWF0ZXJpYWxcIjtcclxuXHJcbmltcG9ydCB0eXBlIHsgSU1hdGVyaWFsIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJJbnRlcmZhY2VzXCI7XHJcbmltcG9ydCB0eXBlIHsgSUdMVEZMb2FkZXJFeHRlbnNpb24gfSBmcm9tIFwiLi4vZ2xURkxvYWRlckV4dGVuc2lvblwiO1xyXG5pbXBvcnQgeyBHTFRGTG9hZGVyIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBJS0hSTWF0ZXJpYWxzSW9yIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5cclxuY29uc3QgTkFNRSA9IFwiS0hSX21hdGVyaWFsc19pb3JcIjtcclxuXHJcbi8qKlxyXG4gKiBbU3BlY2lmaWNhdGlvbl0oaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFpbi9leHRlbnNpb25zLzIuMC9LaHJvbm9zL0tIUl9tYXRlcmlhbHNfaW9yL1JFQURNRS5tZClcclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGNsYXNzIEtIUl9tYXRlcmlhbHNfaW9yIGltcGxlbWVudHMgSUdMVEZMb2FkZXJFeHRlbnNpb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZhdWx0IGlvciBWYWx1ZSBmcm9tIHRoZSBzcGVjLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBfREVGQVVMVF9JT1IgPSAxLjU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGlzIGV4dGVuc2lvbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBOQU1FO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIGVuYWJsZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBlbmFibGVkOiBib29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyBhIG51bWJlciB0aGF0IGRldGVybWluZXMgdGhlIG9yZGVyIHRoZSBleHRlbnNpb25zIGFyZSBhcHBsaWVkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb3JkZXIgPSAxODA7XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZGVyOiBHTFRGTG9hZGVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGxvYWRlcjogR0xURkxvYWRlcikge1xyXG4gICAgICAgIHRoaXMuX2xvYWRlciA9IGxvYWRlcjtcclxuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0aGlzLl9sb2FkZXIuaXNFeHRlbnNpb25Vc2VkKE5BTUUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge1xyXG4gICAgICAgICh0aGlzLl9sb2FkZXIgYXMgYW55KSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWRNYXRlcmlhbFByb3BlcnRpZXNBc3luYyhjb250ZXh0OiBzdHJpbmcsIG1hdGVyaWFsOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBOdWxsYWJsZTxQcm9taXNlPHZvaWQ+PiB7XHJcbiAgICAgICAgcmV0dXJuIEdMVEZMb2FkZXIuTG9hZEV4dGVuc2lvbkFzeW5jPElLSFJNYXRlcmlhbHNJb3I+KGNvbnRleHQsIG1hdGVyaWFsLCB0aGlzLm5hbWUsIChleHRlbnNpb25Db250ZXh0LCBleHRlbnNpb24pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBuZXcgQXJyYXk8UHJvbWlzZTxhbnk+PigpO1xyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMuX2xvYWRlci5sb2FkTWF0ZXJpYWxQcm9wZXJ0aWVzQXN5bmMoY29udGV4dCwgbWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbCkpO1xyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMuX2xvYWRJb3JQcm9wZXJ0aWVzQXN5bmMoZXh0ZW5zaW9uQ29udGV4dCwgZXh0ZW5zaW9uLCBiYWJ5bG9uTWF0ZXJpYWwpKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IHt9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9sb2FkSW9yUHJvcGVydGllc0FzeW5jKGNvbnRleHQ6IHN0cmluZywgcHJvcGVydGllczogSUtIUk1hdGVyaWFsc0lvciwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGlmICghKGJhYnlsb25NYXRlcmlhbCBpbnN0YW5jZW9mIFBCUk1hdGVyaWFsKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7Y29udGV4dH06IE1hdGVyaWFsIHR5cGUgbm90IHN1cHBvcnRlZGApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHByb3BlcnRpZXMuaW9yICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsLmluZGV4T2ZSZWZyYWN0aW9uID0gcHJvcGVydGllcy5pb3I7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsLmluZGV4T2ZSZWZyYWN0aW9uID0gS0hSX21hdGVyaWFsc19pb3IuX0RFRkFVTFRfSU9SO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5HTFRGTG9hZGVyLlJlZ2lzdGVyRXh0ZW5zaW9uKE5BTUUsIChsb2FkZXIpID0+IG5ldyBLSFJfbWF0ZXJpYWxzX2lvcihsb2FkZXIpKTtcclxuIiwiaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCJjb3JlL3R5cGVzXCI7XHJcbmltcG9ydCB7IFBCUk1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1BCUi9wYnJNYXRlcmlhbFwiO1xyXG5pbXBvcnQgdHlwZSB7IE1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL21hdGVyaWFsXCI7XHJcblxyXG5pbXBvcnQgdHlwZSB7IElNYXRlcmlhbCB9IGZyb20gXCIuLi9nbFRGTG9hZGVySW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQgdHlwZSB7IElHTFRGTG9hZGVyRXh0ZW5zaW9uIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJFeHRlbnNpb25cIjtcclxuaW1wb3J0IHsgR0xURkxvYWRlciB9IGZyb20gXCIuLi9nbFRGTG9hZGVyXCI7XHJcbmltcG9ydCB0eXBlIHsgSUtIUk1hdGVyaWFsc0lyaWRlc2NlbmNlIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5cclxuY29uc3QgTkFNRSA9IFwiS0hSX21hdGVyaWFsc19pcmlkZXNjZW5jZVwiO1xyXG5cclxuLyoqXHJcbiAqIFtTcGVjaWZpY2F0aW9uXShodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi9tYWluL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX21hdGVyaWFsc19pcmlkZXNjZW5jZS9SRUFETUUubWQpXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBjbGFzcyBLSFJfbWF0ZXJpYWxzX2lyaWRlc2NlbmNlIGltcGxlbWVudHMgSUdMVEZMb2FkZXJFeHRlbnNpb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGlzIGV4dGVuc2lvbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBOQU1FO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIGVuYWJsZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBlbmFibGVkOiBib29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyBhIG51bWJlciB0aGF0IGRldGVybWluZXMgdGhlIG9yZGVyIHRoZSBleHRlbnNpb25zIGFyZSBhcHBsaWVkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb3JkZXIgPSAxOTU7XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZGVyOiBHTFRGTG9hZGVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGxvYWRlcjogR0xURkxvYWRlcikge1xyXG4gICAgICAgIHRoaXMuX2xvYWRlciA9IGxvYWRlcjtcclxuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0aGlzLl9sb2FkZXIuaXNFeHRlbnNpb25Vc2VkKE5BTUUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge1xyXG4gICAgICAgICh0aGlzLl9sb2FkZXIgYXMgYW55KSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWRNYXRlcmlhbFByb3BlcnRpZXNBc3luYyhjb250ZXh0OiBzdHJpbmcsIG1hdGVyaWFsOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBOdWxsYWJsZTxQcm9taXNlPHZvaWQ+PiB7XHJcbiAgICAgICAgcmV0dXJuIEdMVEZMb2FkZXIuTG9hZEV4dGVuc2lvbkFzeW5jPElLSFJNYXRlcmlhbHNJcmlkZXNjZW5jZT4oY29udGV4dCwgbWF0ZXJpYWwsIHRoaXMubmFtZSwgKGV4dGVuc2lvbkNvbnRleHQsIGV4dGVuc2lvbikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9taXNlcyA9IG5ldyBBcnJheTxQcm9taXNlPGFueT4+KCk7XHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5fbG9hZGVyLmxvYWRNYXRlcmlhbFByb3BlcnRpZXNBc3luYyhjb250ZXh0LCBtYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsKSk7XHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5fbG9hZElyaWRlc2NlbmNlUHJvcGVydGllc0FzeW5jKGV4dGVuc2lvbkNvbnRleHQsIGV4dGVuc2lvbiwgYmFieWxvbk1hdGVyaWFsKSk7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoKSA9PiB7fSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZElyaWRlc2NlbmNlUHJvcGVydGllc0FzeW5jKGNvbnRleHQ6IHN0cmluZywgcHJvcGVydGllczogSUtIUk1hdGVyaWFsc0lyaWRlc2NlbmNlLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgaWYgKCEoYmFieWxvbk1hdGVyaWFsIGluc3RhbmNlb2YgUEJSTWF0ZXJpYWwpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtjb250ZXh0fTogTWF0ZXJpYWwgdHlwZSBub3Qgc3VwcG9ydGVkYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBwcm9taXNlcyA9IG5ldyBBcnJheTxQcm9taXNlPGFueT4+KCk7XHJcblxyXG4gICAgICAgIGJhYnlsb25NYXRlcmlhbC5pcmlkZXNjZW5jZS5pc0VuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwuaXJpZGVzY2VuY2UuaW50ZW5zaXR5ID0gcHJvcGVydGllcy5pcmlkZXNjZW5jZUZhY3RvciA/PyAwO1xyXG4gICAgICAgIGJhYnlsb25NYXRlcmlhbC5pcmlkZXNjZW5jZS5pbmRleE9mUmVmcmFjdGlvbiA9IHByb3BlcnRpZXMuaXJpZGVzY2VuY2VJb3IgPz8gKHByb3BlcnRpZXMgYXMgYW55KS5pcmlkZXNjZW5jZUlPUiA/PyAxLjM7XHJcbiAgICAgICAgYmFieWxvbk1hdGVyaWFsLmlyaWRlc2NlbmNlLm1pbmltdW1UaGlja25lc3MgPSBwcm9wZXJ0aWVzLmlyaWRlc2NlbmNlVGhpY2tuZXNzTWluaW11bSA/PyAxMDA7XHJcbiAgICAgICAgYmFieWxvbk1hdGVyaWFsLmlyaWRlc2NlbmNlLm1heGltdW1UaGlja25lc3MgPSBwcm9wZXJ0aWVzLmlyaWRlc2NlbmNlVGhpY2tuZXNzTWF4aW11bSA/PyA0MDA7XHJcblxyXG4gICAgICAgIGlmIChwcm9wZXJ0aWVzLmlyaWRlc2NlbmNlVGV4dHVyZSkge1xyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9hZGVyLmxvYWRUZXh0dXJlSW5mb0FzeW5jKGAke2NvbnRleHR9L2lyaWRlc2NlbmNlVGV4dHVyZWAsIHByb3BlcnRpZXMuaXJpZGVzY2VuY2VUZXh0dXJlLCAodGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHR1cmUubmFtZSA9IGAke2JhYnlsb25NYXRlcmlhbC5uYW1lfSAoSXJpZGVzY2VuY2UgSW50ZW5zaXR5KWA7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsLmlyaWRlc2NlbmNlLnRleHR1cmUgPSB0ZXh0dXJlO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwcm9wZXJ0aWVzLmlyaWRlc2NlbmNlVGhpY2tuZXNzVGV4dHVyZSkge1xyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9hZGVyLmxvYWRUZXh0dXJlSW5mb0FzeW5jKGAke2NvbnRleHR9L2lyaWRlc2NlbmNlVGhpY2tuZXNzVGV4dHVyZWAsIHByb3BlcnRpZXMuaXJpZGVzY2VuY2VUaGlja25lc3NUZXh0dXJlLCAodGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHR1cmUubmFtZSA9IGAke2JhYnlsb25NYXRlcmlhbC5uYW1lfSAoSXJpZGVzY2VuY2UgVGhpY2tuZXNzKWA7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsLmlyaWRlc2NlbmNlLnRoaWNrbmVzc1RleHR1cmUgPSB0ZXh0dXJlO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoKSA9PiB7fSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkdMVEZMb2FkZXIuUmVnaXN0ZXJFeHRlbnNpb24oTkFNRSwgKGxvYWRlcikgPT4gbmV3IEtIUl9tYXRlcmlhbHNfaXJpZGVzY2VuY2UobG9hZGVyKSk7XHJcbiIsImltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xyXG5pbXBvcnQgeyBDb2xvcjMgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLmNvbG9yXCI7XHJcbmltcG9ydCB7IFBCUk1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1BCUi9wYnJNYXRlcmlhbFwiO1xyXG5pbXBvcnQgdHlwZSB7IE1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL21hdGVyaWFsXCI7XHJcblxyXG5pbXBvcnQgdHlwZSB7IElNYXRlcmlhbCB9IGZyb20gXCIuLi9nbFRGTG9hZGVySW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQgdHlwZSB7IElHTFRGTG9hZGVyRXh0ZW5zaW9uIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJFeHRlbnNpb25cIjtcclxuaW1wb3J0IHsgR0xURkxvYWRlciB9IGZyb20gXCIuLi9nbFRGTG9hZGVyXCI7XHJcbmltcG9ydCB0eXBlIHsgSUtIUk1hdGVyaWFsc1BiclNwZWN1bGFyR2xvc3NpbmVzcyB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuXHJcbmNvbnN0IE5BTUUgPSBcIktIUl9tYXRlcmlhbHNfcGJyU3BlY3VsYXJHbG9zc2luZXNzXCI7XHJcblxyXG4vKipcclxuICogW1NwZWNpZmljYXRpb25dKGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9ibG9iL21haW4vZXh0ZW5zaW9ucy8yLjAvQXJjaGl2ZWQvS0hSX21hdGVyaWFsc19wYnJTcGVjdWxhckdsb3NzaW5lc3MvUkVBRE1FLm1kKVxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgY2xhc3MgS0hSX21hdGVyaWFsc19wYnJTcGVjdWxhckdsb3NzaW5lc3MgaW1wbGVtZW50cyBJR0xURkxvYWRlckV4dGVuc2lvbiB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBuYW1lIG9mIHRoaXMgZXh0ZW5zaW9uLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZSA9IE5BTUU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgZW5hYmxlZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGVuYWJsZWQ6IGJvb2xlYW47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIGEgbnVtYmVyIHRoYXQgZGV0ZXJtaW5lcyB0aGUgb3JkZXIgdGhlIGV4dGVuc2lvbnMgYXJlIGFwcGxpZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvcmRlciA9IDIwMDtcclxuXHJcbiAgICBwcml2YXRlIF9sb2FkZXI6IEdMVEZMb2FkZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobG9hZGVyOiBHTFRGTG9hZGVyKSB7XHJcbiAgICAgICAgdGhpcy5fbG9hZGVyID0gbG9hZGVyO1xyXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRoaXMuX2xvYWRlci5pc0V4dGVuc2lvblVzZWQoTkFNRSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgKHRoaXMuX2xvYWRlciBhcyBhbnkpID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZE1hdGVyaWFsUHJvcGVydGllc0FzeW5jKGNvbnRleHQ6IHN0cmluZywgbWF0ZXJpYWw6IElNYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCk6IE51bGxhYmxlPFByb21pc2U8dm9pZD4+IHtcclxuICAgICAgICByZXR1cm4gR0xURkxvYWRlci5Mb2FkRXh0ZW5zaW9uQXN5bmM8SUtIUk1hdGVyaWFsc1BiclNwZWN1bGFyR2xvc3NpbmVzcz4oY29udGV4dCwgbWF0ZXJpYWwsIHRoaXMubmFtZSwgKGV4dGVuc2lvbkNvbnRleHQsIGV4dGVuc2lvbikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9taXNlcyA9IG5ldyBBcnJheTxQcm9taXNlPGFueT4+KCk7XHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5fbG9hZGVyLmxvYWRNYXRlcmlhbEJhc2VQcm9wZXJ0aWVzQXN5bmMoY29udGV4dCwgbWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbCkpO1xyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMuX2xvYWRTcGVjdWxhckdsb3NzaW5lc3NQcm9wZXJ0aWVzQXN5bmMoZXh0ZW5zaW9uQ29udGV4dCwgbWF0ZXJpYWwsIGV4dGVuc2lvbiwgYmFieWxvbk1hdGVyaWFsKSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvYWRlci5sb2FkTWF0ZXJpYWxBbHBoYVByb3BlcnRpZXMoY29udGV4dCwgbWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbCk7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoKSA9PiB7fSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZFNwZWN1bGFyR2xvc3NpbmVzc1Byb3BlcnRpZXNBc3luYyhjb250ZXh0OiBzdHJpbmcsIG1hdGVyaWFsOiBJTWF0ZXJpYWwsIHByb3BlcnRpZXM6IElLSFJNYXRlcmlhbHNQYnJTcGVjdWxhckdsb3NzaW5lc3MsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBpZiAoIShiYWJ5bG9uTWF0ZXJpYWwgaW5zdGFuY2VvZiBQQlJNYXRlcmlhbCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2NvbnRleHR9OiBNYXRlcmlhbCB0eXBlIG5vdCBzdXBwb3J0ZWRgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gbmV3IEFycmF5PFByb21pc2U8YW55Pj4oKTtcclxuXHJcbiAgICAgICAgYmFieWxvbk1hdGVyaWFsLm1ldGFsbGljID0gbnVsbDtcclxuICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwucm91Z2huZXNzID0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKHByb3BlcnRpZXMuZGlmZnVzZUZhY3Rvcikge1xyXG4gICAgICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwuYWxiZWRvQ29sb3IgPSBDb2xvcjMuRnJvbUFycmF5KHByb3BlcnRpZXMuZGlmZnVzZUZhY3Rvcik7XHJcbiAgICAgICAgICAgIGJhYnlsb25NYXRlcmlhbC5hbHBoYSA9IHByb3BlcnRpZXMuZGlmZnVzZUZhY3RvclszXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwuYWxiZWRvQ29sb3IgPSBDb2xvcjMuV2hpdGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJhYnlsb25NYXRlcmlhbC5yZWZsZWN0aXZpdHlDb2xvciA9IHByb3BlcnRpZXMuc3BlY3VsYXJGYWN0b3IgPyBDb2xvcjMuRnJvbUFycmF5KHByb3BlcnRpZXMuc3BlY3VsYXJGYWN0b3IpIDogQ29sb3IzLldoaXRlKCk7XHJcbiAgICAgICAgYmFieWxvbk1hdGVyaWFsLm1pY3JvU3VyZmFjZSA9IHByb3BlcnRpZXMuZ2xvc3NpbmVzc0ZhY3RvciA9PSB1bmRlZmluZWQgPyAxIDogcHJvcGVydGllcy5nbG9zc2luZXNzRmFjdG9yO1xyXG5cclxuICAgICAgICBpZiAocHJvcGVydGllcy5kaWZmdXNlVGV4dHVyZSkge1xyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9hZGVyLmxvYWRUZXh0dXJlSW5mb0FzeW5jKGAke2NvbnRleHR9L2RpZmZ1c2VUZXh0dXJlYCwgcHJvcGVydGllcy5kaWZmdXNlVGV4dHVyZSwgKHRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlLm5hbWUgPSBgJHtiYWJ5bG9uTWF0ZXJpYWwubmFtZX0gKERpZmZ1c2UpYDtcclxuICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwuYWxiZWRvVGV4dHVyZSA9IHRleHR1cmU7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHByb3BlcnRpZXMuc3BlY3VsYXJHbG9zc2luZXNzVGV4dHVyZSkge1xyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9hZGVyLmxvYWRUZXh0dXJlSW5mb0FzeW5jKGAke2NvbnRleHR9L3NwZWN1bGFyR2xvc3NpbmVzc1RleHR1cmVgLCBwcm9wZXJ0aWVzLnNwZWN1bGFyR2xvc3NpbmVzc1RleHR1cmUsICh0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dHVyZS5uYW1lID0gYCR7YmFieWxvbk1hdGVyaWFsLm5hbWV9IChTcGVjdWxhciBHbG9zc2luZXNzKWA7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsLnJlZmxlY3Rpdml0eVRleHR1cmUgPSB0ZXh0dXJlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhYnlsb25NYXRlcmlhbC5yZWZsZWN0aXZpdHlUZXh0dXJlLmhhc0FscGhhID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwudXNlTWljcm9TdXJmYWNlRnJvbVJlZmxlY3Rpdml0eU1hcEFscGhhID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoKSA9PiB7fSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkdMVEZMb2FkZXIuUmVnaXN0ZXJFeHRlbnNpb24oTkFNRSwgKGxvYWRlcikgPT4gbmV3IEtIUl9tYXRlcmlhbHNfcGJyU3BlY3VsYXJHbG9zc2luZXNzKGxvYWRlcikpO1xyXG4iLCJpbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcImNvcmUvdHlwZXNcIjtcclxuaW1wb3J0IHsgUEJSTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvUEJSL3Bick1hdGVyaWFsXCI7XHJcbmltcG9ydCB0eXBlIHsgTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvbWF0ZXJpYWxcIjtcclxuXHJcbmltcG9ydCB0eXBlIHsgSU1hdGVyaWFsLCBJVGV4dHVyZUluZm8gfSBmcm9tIFwiLi4vZ2xURkxvYWRlckludGVyZmFjZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBJR0xURkxvYWRlckV4dGVuc2lvbiB9IGZyb20gXCIuLi9nbFRGTG9hZGVyRXh0ZW5zaW9uXCI7XHJcbmltcG9ydCB7IEdMVEZMb2FkZXIgfSBmcm9tIFwiLi4vZ2xURkxvYWRlclwiO1xyXG5pbXBvcnQgeyBDb2xvcjMgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLmNvbG9yXCI7XHJcbmltcG9ydCB0eXBlIHsgSUtIUk1hdGVyaWFsc1NoZWVuIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5cclxuY29uc3QgTkFNRSA9IFwiS0hSX21hdGVyaWFsc19zaGVlblwiO1xyXG5cclxuLyoqXHJcbiAqIFtTcGVjaWZpY2F0aW9uXShodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi9tYWluL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX21hdGVyaWFsc19zaGVlbi9SRUFETUUubWQpXHJcbiAqIFtQbGF5Z3JvdW5kIFNhbXBsZV0oaHR0cHM6Ly93d3cuYmFieWxvbmpzLXBsYXlncm91bmQuY29tL2ZyYW1lLmh0bWwjQk5JWlg2IzQpXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBjbGFzcyBLSFJfbWF0ZXJpYWxzX3NoZWVuIGltcGxlbWVudHMgSUdMVEZMb2FkZXJFeHRlbnNpb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGlzIGV4dGVuc2lvbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBOQU1FO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIGVuYWJsZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBlbmFibGVkOiBib29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyBhIG51bWJlciB0aGF0IGRldGVybWluZXMgdGhlIG9yZGVyIHRoZSBleHRlbnNpb25zIGFyZSBhcHBsaWVkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb3JkZXIgPSAxOTA7XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZGVyOiBHTFRGTG9hZGVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGxvYWRlcjogR0xURkxvYWRlcikge1xyXG4gICAgICAgIHRoaXMuX2xvYWRlciA9IGxvYWRlcjtcclxuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0aGlzLl9sb2FkZXIuaXNFeHRlbnNpb25Vc2VkKE5BTUUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge1xyXG4gICAgICAgICh0aGlzLl9sb2FkZXIgYXMgYW55KSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWRNYXRlcmlhbFByb3BlcnRpZXNBc3luYyhjb250ZXh0OiBzdHJpbmcsIG1hdGVyaWFsOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBOdWxsYWJsZTxQcm9taXNlPHZvaWQ+PiB7XHJcbiAgICAgICAgcmV0dXJuIEdMVEZMb2FkZXIuTG9hZEV4dGVuc2lvbkFzeW5jPElLSFJNYXRlcmlhbHNTaGVlbj4oY29udGV4dCwgbWF0ZXJpYWwsIHRoaXMubmFtZSwgKGV4dGVuc2lvbkNvbnRleHQsIGV4dGVuc2lvbikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9taXNlcyA9IG5ldyBBcnJheTxQcm9taXNlPGFueT4+KCk7XHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5fbG9hZGVyLmxvYWRNYXRlcmlhbFByb3BlcnRpZXNBc3luYyhjb250ZXh0LCBtYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsKSk7XHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5fbG9hZFNoZWVuUHJvcGVydGllc0FzeW5jKGV4dGVuc2lvbkNvbnRleHQsIGV4dGVuc2lvbiwgYmFieWxvbk1hdGVyaWFsKSk7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoKSA9PiB7fSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZFNoZWVuUHJvcGVydGllc0FzeW5jKGNvbnRleHQ6IHN0cmluZywgcHJvcGVydGllczogSUtIUk1hdGVyaWFsc1NoZWVuLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgaWYgKCEoYmFieWxvbk1hdGVyaWFsIGluc3RhbmNlb2YgUEJSTWF0ZXJpYWwpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtjb250ZXh0fTogTWF0ZXJpYWwgdHlwZSBub3Qgc3VwcG9ydGVkYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBwcm9taXNlcyA9IG5ldyBBcnJheTxQcm9taXNlPGFueT4+KCk7XHJcblxyXG4gICAgICAgIGJhYnlsb25NYXRlcmlhbC5zaGVlbi5pc0VuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIGJhYnlsb25NYXRlcmlhbC5zaGVlbi5pbnRlbnNpdHkgPSAxO1xyXG5cclxuICAgICAgICBpZiAocHJvcGVydGllcy5zaGVlbkNvbG9yRmFjdG9yICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwuc2hlZW4uY29sb3IgPSBDb2xvcjMuRnJvbUFycmF5KHByb3BlcnRpZXMuc2hlZW5Db2xvckZhY3Rvcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsLnNoZWVuLmNvbG9yID0gQ29sb3IzLkJsYWNrKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocHJvcGVydGllcy5zaGVlbkNvbG9yVGV4dHVyZSkge1xyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9hZGVyLmxvYWRUZXh0dXJlSW5mb0FzeW5jKGAke2NvbnRleHR9L3NoZWVuQ29sb3JUZXh0dXJlYCwgcHJvcGVydGllcy5zaGVlbkNvbG9yVGV4dHVyZSwgKHRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlLm5hbWUgPSBgJHtiYWJ5bG9uTWF0ZXJpYWwubmFtZX0gKFNoZWVuIENvbG9yKWA7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsLnNoZWVuLnRleHR1cmUgPSB0ZXh0dXJlO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwcm9wZXJ0aWVzLnNoZWVuUm91Z2huZXNzRmFjdG9yICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsLnNoZWVuLnJvdWdobmVzcyA9IHByb3BlcnRpZXMuc2hlZW5Sb3VnaG5lc3NGYWN0b3I7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsLnNoZWVuLnJvdWdobmVzcyA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocHJvcGVydGllcy5zaGVlblJvdWdobmVzc1RleHR1cmUpIHtcclxuICAgICAgICAgICAgKHByb3BlcnRpZXMuc2hlZW5Sb3VnaG5lc3NUZXh0dXJlIGFzIElUZXh0dXJlSW5mbykubm9uQ29sb3JEYXRhID0gdHJ1ZTtcclxuICAgICAgICAgICAgcHJvbWlzZXMucHVzaChcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRlci5sb2FkVGV4dHVyZUluZm9Bc3luYyhgJHtjb250ZXh0fS9zaGVlblJvdWdobmVzc1RleHR1cmVgLCBwcm9wZXJ0aWVzLnNoZWVuUm91Z2huZXNzVGV4dHVyZSwgKHRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlLm5hbWUgPSBgJHtiYWJ5bG9uTWF0ZXJpYWwubmFtZX0gKFNoZWVuIFJvdWdobmVzcylgO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhYnlsb25NYXRlcmlhbC5zaGVlbi50ZXh0dXJlUm91Z2huZXNzID0gdGV4dHVyZTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwuc2hlZW4uYWxiZWRvU2NhbGluZyA9IHRydWU7XHJcbiAgICAgICAgYmFieWxvbk1hdGVyaWFsLnNoZWVuLnVzZVJvdWdobmVzc0Zyb21NYWluVGV4dHVyZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4ge30pO1xyXG4gICAgfVxyXG59XHJcblxyXG5HTFRGTG9hZGVyLlJlZ2lzdGVyRXh0ZW5zaW9uKE5BTUUsIChsb2FkZXIpID0+IG5ldyBLSFJfbWF0ZXJpYWxzX3NoZWVuKGxvYWRlcikpO1xyXG4iLCJpbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcImNvcmUvdHlwZXNcIjtcclxuaW1wb3J0IHsgUEJSTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvUEJSL3Bick1hdGVyaWFsXCI7XHJcbmltcG9ydCB0eXBlIHsgTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvbWF0ZXJpYWxcIjtcclxuXHJcbmltcG9ydCB0eXBlIHsgSU1hdGVyaWFsLCBJVGV4dHVyZUluZm8gfSBmcm9tIFwiLi4vZ2xURkxvYWRlckludGVyZmFjZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBJR0xURkxvYWRlckV4dGVuc2lvbiB9IGZyb20gXCIuLi9nbFRGTG9hZGVyRXh0ZW5zaW9uXCI7XHJcbmltcG9ydCB7IEdMVEZMb2FkZXIgfSBmcm9tIFwiLi4vZ2xURkxvYWRlclwiO1xyXG5pbXBvcnQgeyBDb2xvcjMgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLmNvbG9yXCI7XHJcbmltcG9ydCB0eXBlIHsgSUtIUk1hdGVyaWFsc1NwZWN1bGFyIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5cclxuY29uc3QgTkFNRSA9IFwiS0hSX21hdGVyaWFsc19zcGVjdWxhclwiO1xyXG5cclxuLyoqXHJcbiAqIFtTcGVjaWZpY2F0aW9uXShodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi9tYWluL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX21hdGVyaWFsc19zcGVjdWxhci9SRUFETUUubWQpXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBjbGFzcyBLSFJfbWF0ZXJpYWxzX3NwZWN1bGFyIGltcGxlbWVudHMgSUdMVEZMb2FkZXJFeHRlbnNpb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGlzIGV4dGVuc2lvbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBOQU1FO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIGVuYWJsZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBlbmFibGVkOiBib29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyBhIG51bWJlciB0aGF0IGRldGVybWluZXMgdGhlIG9yZGVyIHRoZSBleHRlbnNpb25zIGFyZSBhcHBsaWVkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb3JkZXIgPSAxOTA7XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZGVyOiBHTFRGTG9hZGVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGxvYWRlcjogR0xURkxvYWRlcikge1xyXG4gICAgICAgIHRoaXMuX2xvYWRlciA9IGxvYWRlcjtcclxuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0aGlzLl9sb2FkZXIuaXNFeHRlbnNpb25Vc2VkKE5BTUUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge1xyXG4gICAgICAgICh0aGlzLl9sb2FkZXIgYXMgYW55KSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWRNYXRlcmlhbFByb3BlcnRpZXNBc3luYyhjb250ZXh0OiBzdHJpbmcsIG1hdGVyaWFsOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBOdWxsYWJsZTxQcm9taXNlPHZvaWQ+PiB7XHJcbiAgICAgICAgcmV0dXJuIEdMVEZMb2FkZXIuTG9hZEV4dGVuc2lvbkFzeW5jPElLSFJNYXRlcmlhbHNTcGVjdWxhcj4oY29udGV4dCwgbWF0ZXJpYWwsIHRoaXMubmFtZSwgKGV4dGVuc2lvbkNvbnRleHQsIGV4dGVuc2lvbikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9taXNlcyA9IG5ldyBBcnJheTxQcm9taXNlPGFueT4+KCk7XHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5fbG9hZGVyLmxvYWRNYXRlcmlhbFByb3BlcnRpZXNBc3luYyhjb250ZXh0LCBtYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsKSk7XHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5fbG9hZFNwZWN1bGFyUHJvcGVydGllc0FzeW5jKGV4dGVuc2lvbkNvbnRleHQsIGV4dGVuc2lvbiwgYmFieWxvbk1hdGVyaWFsKSk7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoKSA9PiB7fSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZFNwZWN1bGFyUHJvcGVydGllc0FzeW5jKGNvbnRleHQ6IHN0cmluZywgcHJvcGVydGllczogSUtIUk1hdGVyaWFsc1NwZWN1bGFyLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgaWYgKCEoYmFieWxvbk1hdGVyaWFsIGluc3RhbmNlb2YgUEJSTWF0ZXJpYWwpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtjb250ZXh0fTogTWF0ZXJpYWwgdHlwZSBub3Qgc3VwcG9ydGVkYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBwcm9taXNlcyA9IG5ldyBBcnJheTxQcm9taXNlPGFueT4+KCk7XHJcblxyXG4gICAgICAgIGlmIChwcm9wZXJ0aWVzLnNwZWN1bGFyRmFjdG9yICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsLm1ldGFsbGljRjBGYWN0b3IgPSBwcm9wZXJ0aWVzLnNwZWN1bGFyRmFjdG9yO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHByb3BlcnRpZXMuc3BlY3VsYXJDb2xvckZhY3RvciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGJhYnlsb25NYXRlcmlhbC5tZXRhbGxpY1JlZmxlY3RhbmNlQ29sb3IgPSBDb2xvcjMuRnJvbUFycmF5KHByb3BlcnRpZXMuc3BlY3VsYXJDb2xvckZhY3Rvcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocHJvcGVydGllcy5zcGVjdWxhclRleHR1cmUpIHtcclxuICAgICAgICAgICAgKHByb3BlcnRpZXMuc3BlY3VsYXJUZXh0dXJlIGFzIElUZXh0dXJlSW5mbykubm9uQ29sb3JEYXRhID0gdHJ1ZTtcclxuICAgICAgICAgICAgcHJvbWlzZXMucHVzaChcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRlci5sb2FkVGV4dHVyZUluZm9Bc3luYyhgJHtjb250ZXh0fS9zcGVjdWxhclRleHR1cmVgLCBwcm9wZXJ0aWVzLnNwZWN1bGFyVGV4dHVyZSwgKHRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlLm5hbWUgPSBgJHtiYWJ5bG9uTWF0ZXJpYWwubmFtZX0gKFNwZWN1bGFyIEYwIFN0cmVuZ3RoKWA7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsLm1ldGFsbGljUmVmbGVjdGFuY2VUZXh0dXJlID0gdGV4dHVyZTtcclxuICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwudXNlT25seU1ldGFsbGljRnJvbU1ldGFsbGljUmVmbGVjdGFuY2VUZXh0dXJlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocHJvcGVydGllcy5zcGVjdWxhckNvbG9yVGV4dHVyZSkge1xyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9hZGVyLmxvYWRUZXh0dXJlSW5mb0FzeW5jKGAke2NvbnRleHR9L3NwZWN1bGFyQ29sb3JUZXh0dXJlYCwgcHJvcGVydGllcy5zcGVjdWxhckNvbG9yVGV4dHVyZSwgKHRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlLm5hbWUgPSBgJHtiYWJ5bG9uTWF0ZXJpYWwubmFtZX0gKFNwZWN1bGFyIEYwIENvbG9yKWA7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsLnJlZmxlY3RhbmNlVGV4dHVyZSA9IHRleHR1cmU7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IHt9KTtcclxuICAgIH1cclxufVxyXG5cclxuR0xURkxvYWRlci5SZWdpc3RlckV4dGVuc2lvbihOQU1FLCAobG9hZGVyKSA9PiBuZXcgS0hSX21hdGVyaWFsc19zcGVjdWxhcihsb2FkZXIpKTtcclxuIiwiaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCJjb3JlL3R5cGVzXCI7XHJcbmltcG9ydCB7IFBCUk1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1BCUi9wYnJNYXRlcmlhbFwiO1xyXG5pbXBvcnQgdHlwZSB7IE1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL21hdGVyaWFsXCI7XHJcbmltcG9ydCB0eXBlIHsgQmFzZVRleHR1cmUgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvYmFzZVRleHR1cmVcIjtcclxuaW1wb3J0IHR5cGUgeyBJTWF0ZXJpYWwsIElUZXh0dXJlSW5mbyB9IGZyb20gXCIuLi9nbFRGTG9hZGVySW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQgdHlwZSB7IElHTFRGTG9hZGVyRXh0ZW5zaW9uIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJFeHRlbnNpb25cIjtcclxuaW1wb3J0IHsgR0xURkxvYWRlciB9IGZyb20gXCIuLi9nbFRGTG9hZGVyXCI7XHJcbmltcG9ydCB0eXBlIHsgSUtIUk1hdGVyaWFsc1RyYW5zbHVjZW5jeSB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuXHJcbmNvbnN0IE5BTUUgPSBcIktIUl9tYXRlcmlhbHNfdHJhbnNsdWNlbmN5XCI7XHJcblxyXG4vKipcclxuICogW1Byb3Bvc2VkIFNwZWNpZmljYXRpb25dKGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9wdWxsLzE4MjUpXHJcbiAqICEhISBFeHBlcmltZW50YWwgRXh0ZW5zaW9uIFN1YmplY3QgdG8gQ2hhbmdlcyAhISFcclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGNsYXNzIEtIUl9tYXRlcmlhbHNfdHJhbnNsdWNlbmN5IGltcGxlbWVudHMgSUdMVEZMb2FkZXJFeHRlbnNpb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGlzIGV4dGVuc2lvbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBOQU1FO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIGVuYWJsZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBlbmFibGVkOiBib29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyBhIG51bWJlciB0aGF0IGRldGVybWluZXMgdGhlIG9yZGVyIHRoZSBleHRlbnNpb25zIGFyZSBhcHBsaWVkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb3JkZXIgPSAxNzQ7XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZGVyOiBHTFRGTG9hZGVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGxvYWRlcjogR0xURkxvYWRlcikge1xyXG4gICAgICAgIHRoaXMuX2xvYWRlciA9IGxvYWRlcjtcclxuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0aGlzLl9sb2FkZXIuaXNFeHRlbnNpb25Vc2VkKE5BTUUpO1xyXG4gICAgICAgIGlmICh0aGlzLmVuYWJsZWQpIHtcclxuICAgICAgICAgICAgbG9hZGVyLnBhcmVudC50cmFuc3BhcmVuY3lBc0NvdmVyYWdlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgKHRoaXMuX2xvYWRlciBhcyBhbnkpID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZE1hdGVyaWFsUHJvcGVydGllc0FzeW5jKGNvbnRleHQ6IHN0cmluZywgbWF0ZXJpYWw6IElNYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCk6IE51bGxhYmxlPFByb21pc2U8dm9pZD4+IHtcclxuICAgICAgICByZXR1cm4gR0xURkxvYWRlci5Mb2FkRXh0ZW5zaW9uQXN5bmM8SUtIUk1hdGVyaWFsc1RyYW5zbHVjZW5jeT4oY29udGV4dCwgbWF0ZXJpYWwsIHRoaXMubmFtZSwgKGV4dGVuc2lvbkNvbnRleHQsIGV4dGVuc2lvbikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9taXNlcyA9IG5ldyBBcnJheTxQcm9taXNlPGFueT4+KCk7XHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5fbG9hZGVyLmxvYWRNYXRlcmlhbEJhc2VQcm9wZXJ0aWVzQXN5bmMoY29udGV4dCwgbWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbCkpO1xyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMuX2xvYWRlci5sb2FkTWF0ZXJpYWxQcm9wZXJ0aWVzQXN5bmMoY29udGV4dCwgbWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbCkpO1xyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMuX2xvYWRUcmFuc2x1Y2VudFByb3BlcnRpZXNBc3luYyhleHRlbnNpb25Db250ZXh0LCBtYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsLCBleHRlbnNpb24pKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IHt9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9sb2FkVHJhbnNsdWNlbnRQcm9wZXJ0aWVzQXN5bmMoY29udGV4dDogc3RyaW5nLCBtYXRlcmlhbDogSU1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsLCBleHRlbnNpb246IElLSFJNYXRlcmlhbHNUcmFuc2x1Y2VuY3kpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBpZiAoIShiYWJ5bG9uTWF0ZXJpYWwgaW5zdGFuY2VvZiBQQlJNYXRlcmlhbCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2NvbnRleHR9OiBNYXRlcmlhbCB0eXBlIG5vdCBzdXBwb3J0ZWRgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcGJyTWF0ZXJpYWwgPSBiYWJ5bG9uTWF0ZXJpYWwgYXMgUEJSTWF0ZXJpYWw7XHJcblxyXG4gICAgICAgIC8vIEVuYWJsZXMgXCJ0cmFuc2x1Y2VuY3lcIiB0ZXh0dXJlIHdoaWNoIHJlcHJlc2VudHMgZGlmZnVzZWx5LXRyYW5zbWl0dGVkIGxpZ2h0LlxyXG4gICAgICAgIHBick1hdGVyaWFsLnN1YlN1cmZhY2UuaXNUcmFuc2x1Y2VuY3lFbmFibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLy8gU2luY2UgdGhpcyBleHRlbnNpb24gbW9kZWxzIHRoaW4tc3VyZmFjZSB0cmFuc21pc3Npb24gb25seSwgd2UgbXVzdCBtYWtlIHRoZVxyXG4gICAgICAgIC8vIGludGVybmFsIElPUiA9PSAxLjAgYW5kIHNldCB0aGUgdGhpY2tuZXNzIHRvIDAuXHJcbiAgICAgICAgcGJyTWF0ZXJpYWwuc3ViU3VyZmFjZS52b2x1bWVJbmRleE9mUmVmcmFjdGlvbiA9IDEuMDtcclxuICAgICAgICBwYnJNYXRlcmlhbC5zdWJTdXJmYWNlLm1pbmltdW1UaGlja25lc3MgPSAwLjA7XHJcbiAgICAgICAgcGJyTWF0ZXJpYWwuc3ViU3VyZmFjZS5tYXhpbXVtVGhpY2tuZXNzID0gMC4wO1xyXG5cclxuICAgICAgICAvLyBBbGJlZG8gY29sb3VyIHdpbGwgdGludCB0cmFuc21pc3Npb24uXHJcbiAgICAgICAgcGJyTWF0ZXJpYWwuc3ViU3VyZmFjZS51c2VBbGJlZG9Ub1RpbnRUcmFuc2x1Y2VuY3kgPSB0cnVlO1xyXG5cclxuICAgICAgICBpZiAoZXh0ZW5zaW9uLnRyYW5zbHVjZW5jeUZhY3RvciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHBick1hdGVyaWFsLnN1YlN1cmZhY2UudHJhbnNsdWNlbmN5SW50ZW5zaXR5ID0gZXh0ZW5zaW9uLnRyYW5zbHVjZW5jeUZhY3RvcjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwYnJNYXRlcmlhbC5zdWJTdXJmYWNlLnRyYW5zbHVjZW5jeUludGVuc2l0eSA9IDAuMDtcclxuICAgICAgICAgICAgcGJyTWF0ZXJpYWwuc3ViU3VyZmFjZS5pc1RyYW5zbHVjZW5jeUVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGV4dGVuc2lvbi50cmFuc2x1Y2VuY3lUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgIChleHRlbnNpb24udHJhbnNsdWNlbmN5VGV4dHVyZSBhcyBJVGV4dHVyZUluZm8pLm5vbkNvbG9yRGF0YSA9IHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9sb2FkZXIubG9hZFRleHR1cmVJbmZvQXN5bmMoYCR7Y29udGV4dH0vdHJhbnNsdWNlbmN5VGV4dHVyZWAsIGV4dGVuc2lvbi50cmFuc2x1Y2VuY3lUZXh0dXJlKS50aGVuKCh0ZXh0dXJlOiBCYXNlVGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcGJyTWF0ZXJpYWwuc3ViU3VyZmFjZS50cmFuc2x1Y2VuY3lJbnRlbnNpdHlUZXh0dXJlID0gdGV4dHVyZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuR0xURkxvYWRlci5SZWdpc3RlckV4dGVuc2lvbihOQU1FLCAobG9hZGVyKSA9PiBuZXcgS0hSX21hdGVyaWFsc190cmFuc2x1Y2VuY3kobG9hZGVyKSk7XHJcbiIsImltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xyXG5pbXBvcnQgeyBQQlJNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9QQlIvcGJyTWF0ZXJpYWxcIjtcclxuaW1wb3J0IHR5cGUgeyBNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgdHlwZSB7IEJhc2VUZXh0dXJlIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1RleHR1cmVzL2Jhc2VUZXh0dXJlXCI7XHJcbmltcG9ydCB0eXBlIHsgSU1hdGVyaWFsLCBJVGV4dHVyZUluZm8gfSBmcm9tIFwiLi4vZ2xURkxvYWRlckludGVyZmFjZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBJR0xURkxvYWRlckV4dGVuc2lvbiB9IGZyb20gXCIuLi9nbFRGTG9hZGVyRXh0ZW5zaW9uXCI7XHJcbmltcG9ydCB7IEdMVEZMb2FkZXIgfSBmcm9tIFwiLi4vZ2xURkxvYWRlclwiO1xyXG5pbXBvcnQgdHlwZSB7IElLSFJNYXRlcmlhbHNUcmFuc21pc3Npb24gfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB0eXBlIHsgU2NlbmUgfSBmcm9tIFwiY29yZS9zY2VuZVwiO1xyXG5pbXBvcnQgdHlwZSB7IEFic3RyYWN0TWVzaCB9IGZyb20gXCJjb3JlL01lc2hlcy9hYnN0cmFjdE1lc2hcIjtcclxuaW1wb3J0IHR5cGUgeyBUZXh0dXJlIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1RleHR1cmVzL3RleHR1cmVcIjtcclxuaW1wb3J0IHsgUmVuZGVyVGFyZ2V0VGV4dHVyZSB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9UZXh0dXJlcy9yZW5kZXJUYXJnZXRUZXh0dXJlXCI7XHJcbmltcG9ydCB0eXBlIHsgT2JzZXJ2ZXIgfSBmcm9tIFwiY29yZS9NaXNjL29ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJjb3JlL01pc2Mvb2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiY29yZS9FbmdpbmVzL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBUb29scyB9IGZyb20gXCJjb3JlL01pc2MvdG9vbHNcIjtcclxuaW1wb3J0IHR5cGUgeyBDb2xvcjQgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLmNvbG9yXCI7XHJcblxyXG5pbnRlcmZhY2UgSVRyYW5zbWlzc2lvbkhlbHBlckhvbGRlciB7XHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBfdHJhbnNtaXNzaW9uSGVscGVyOiBUcmFuc21pc3Npb25IZWxwZXIgfCB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmludGVyZmFjZSBJVHJhbnNtaXNzaW9uSGVscGVyT3B0aW9ucyB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBzaXplIG9mIHRoZSByZW5kZXIgYnVmZmVycyAoZGVmYXVsdDogMTAyNClcclxuICAgICAqL1xyXG4gICAgcmVuZGVyU2l6ZTogbnVtYmVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIG51bWJlciBvZiBzYW1wbGVzIHRvIHVzZSB3aGVuIGdlbmVyYXRpbmcgdGhlIHJlbmRlciB0YXJnZXQgdGV4dHVyZSBmb3Igb3BhcXVlIG1lc2hlcyAoZGVmYXVsdDogNClcclxuICAgICAqL1xyXG4gICAgc2FtcGxlczogbnVtYmVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2NhbGUgdG8gYXBwbHkgd2hlbiBzZWxlY3RpbmcgdGhlIExPRCBsZXZlbCB0byBzYW1wbGUgdGhlIHJlZnJhY3Rpb24gdGV4dHVyZSAoZGVmYXVsdDogMSlcclxuICAgICAqL1xyXG4gICAgbG9kR2VuZXJhdGlvblNjYWxlOiBudW1iZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPZmZzZXQgdG8gYXBwbHkgd2hlbiBzZWxlY3RpbmcgdGhlIExPRCBsZXZlbCB0byBzYW1wbGUgdGhlIHJlZnJhY3Rpb24gdGV4dHVyZSAoZGVmYXVsdDogLTQpXHJcbiAgICAgKi9cclxuICAgIGxvZEdlbmVyYXRpb25PZmZzZXQ6IG51bWJlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFR5cGUgb2YgdGhlIHJlZnJhY3Rpb24gcmVuZGVyIHRhcmdldCB0ZXh0dXJlIChkZWZhdWx0OiBURVhUVVJFVFlQRV9IQUxGX0ZMT0FUKVxyXG4gICAgICovXHJcbiAgICByZW5kZXJUYXJnZXRUZXh0dXJlVHlwZTogbnVtYmVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyBpZiB0aGUgbWlwbWFwcyBmb3IgdGhlIHJlZnJhY3Rpb24gcmVuZGVyIHRhcmdldCB0ZXh0dXJlIG11c3QgYmUgZ2VuZXJhdGVkIChkZWZhdWx0OiB0cnVlKVxyXG4gICAgICovXHJcbiAgICBnZW5lcmF0ZU1pcG1hcHM6IGJvb2xlYW47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDbGVhciBjb2xvciBvZiB0aGUgb3BhcXVlIHRleHR1cmUuIElmIG5vdCBwcm92aWRlZCwgdXNlIHRoZSBzY2VuZSBjbGVhciBjb2xvciAod2hpY2ggd2lsbCBiZSBjb252ZXJ0ZWQgdG8gbGluZWFyIHNwYWNlKS5cclxuICAgICAqIElmIHByb3ZpZGVkLCBzaG91bGQgYmUgaW4gbGluZWFyIHNwYWNlXHJcbiAgICAgKi9cclxuICAgIGNsZWFyQ29sb3I/OiBDb2xvcjQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIGNsYXNzIHRvIGhhbmRsZSBzZXR0aW5nIHVwIHRoZSByZW5kZXJpbmcgb2Ygb3BhcXVlIG9iamVjdHMgdG8gYmUgc2hvd24gdGhyb3VnaCB0cmFuc21pc3NpdmUgb2JqZWN0cy5cclxuICovXHJcbmNsYXNzIFRyYW5zbWlzc2lvbkhlbHBlciB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgdGhlIGRlZmF1bHQgb3B0aW9ucyBmb3IgdGhlIGhlbHBlci5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX0dldERlZmF1bHRPcHRpb25zKCk6IElUcmFuc21pc3Npb25IZWxwZXJPcHRpb25zIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByZW5kZXJTaXplOiAxMDI0LFxyXG4gICAgICAgICAgICBzYW1wbGVzOiA0LFxyXG4gICAgICAgICAgICBsb2RHZW5lcmF0aW9uU2NhbGU6IDEsXHJcbiAgICAgICAgICAgIGxvZEdlbmVyYXRpb25PZmZzZXQ6IC00LFxyXG4gICAgICAgICAgICByZW5kZXJUYXJnZXRUZXh0dXJlVHlwZTogQ29uc3RhbnRzLlRFWFRVUkVUWVBFX0hBTEZfRkxPQVQsXHJcbiAgICAgICAgICAgIGdlbmVyYXRlTWlwbWFwczogdHJ1ZSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RvcmVzIHRoZSBjcmVhdGlvbiBvcHRpb25zLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9zY2VuZTogU2NlbmUgJiBJVHJhbnNtaXNzaW9uSGVscGVySG9sZGVyO1xyXG5cclxuICAgIHByaXZhdGUgX29wdGlvbnM6IElUcmFuc21pc3Npb25IZWxwZXJPcHRpb25zO1xyXG5cclxuICAgIHByaXZhdGUgX29wYXF1ZVJlbmRlclRhcmdldDogTnVsbGFibGU8UmVuZGVyVGFyZ2V0VGV4dHVyZT4gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfb3BhcXVlTWVzaGVzQ2FjaGU6IEFic3RyYWN0TWVzaFtdID0gW107XHJcbiAgICBwcml2YXRlIF90cmFuc3BhcmVudE1lc2hlc0NhY2hlOiBBYnN0cmFjdE1lc2hbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBfbWF0ZXJpYWxPYnNlcnZlcnM6IHsgW2lkOiBzdHJpbmddOiBOdWxsYWJsZTxPYnNlcnZlcjxBYnN0cmFjdE1lc2g+PiB9ID0ge307XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG9ic2VydmFibGUgd2lsbCBiZSBub3RpZmllZCB3aXRoIGFueSBlcnJvciBkdXJpbmcgdGhlIGNyZWF0aW9uIG9mIHRoZSBlbnZpcm9ubWVudCxcclxuICAgICAqIG1haW5seSB0ZXh0dXJlIGNyZWF0aW9uIGVycm9ycy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIG9uRXJyb3JPYnNlcnZhYmxlOiBPYnNlcnZhYmxlPHsgbWVzc2FnZT86IHN0cmluZzsgZXhjZXB0aW9uPzogYW55IH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogY29uc3RydWN0b3JcclxuICAgICAqIEBwYXJhbSBvcHRpb25zIERlZmluZXMgdGhlIG9wdGlvbnMgd2Ugd2FudCB0byBjdXN0b21pemUgdGhlIGhlbHBlclxyXG4gICAgICogQHBhcmFtIHNjZW5lIFRoZSBzY2VuZSB0byBhZGQgdGhlIG1hdGVyaWFsIHRvXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IFBhcnRpYWw8SVRyYW5zbWlzc2lvbkhlbHBlck9wdGlvbnM+LCBzY2VuZTogU2NlbmUpIHtcclxuICAgICAgICB0aGlzLl9vcHRpb25zID0ge1xyXG4gICAgICAgICAgICAuLi5UcmFuc21pc3Npb25IZWxwZXIuX0dldERlZmF1bHRPcHRpb25zKCksXHJcbiAgICAgICAgICAgIC4uLm9wdGlvbnMsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl9zY2VuZSA9IHNjZW5lIGFzIGFueTtcclxuICAgICAgICB0aGlzLl9zY2VuZS5fdHJhbnNtaXNzaW9uSGVscGVyID0gdGhpcztcclxuXHJcbiAgICAgICAgdGhpcy5vbkVycm9yT2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlKCk7XHJcbiAgICAgICAgdGhpcy5fc2NlbmUub25EaXNwb3NlT2JzZXJ2YWJsZS5hZGRPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5kaXNwb3NlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuX3BhcnNlU2NlbmUoKTtcclxuICAgICAgICB0aGlzLl9zZXR1cFJlbmRlclRhcmdldHMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZXMgdGhlIGJhY2tncm91bmQgYWNjb3JkaW5nIHRvIHRoZSBuZXcgb3B0aW9uc1xyXG4gICAgICogQHBhcmFtIG9wdGlvbnNcclxuICAgICAqL1xyXG4gICAgcHVibGljIHVwZGF0ZU9wdGlvbnMob3B0aW9uczogUGFydGlhbDxJVHJhbnNtaXNzaW9uSGVscGVyT3B0aW9ucz4pIHtcclxuICAgICAgICAvLyBGaXJzdCBjaGVjayBpZiBhbnkgb3B0aW9ucyBhcmUgYWN0dWFsbHkgYmVpbmcgY2hhbmdlZC4gSWYgbm90LCBleGl0LlxyXG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlcyA9IE9iamVjdC5rZXlzKG9wdGlvbnMpLmZpbHRlcigoa2V5OiBzdHJpbmcpID0+ICh0aGlzLl9vcHRpb25zIGFzIGFueSlba2V5XSAhPT0gKG9wdGlvbnMgYXMgYW55KVtrZXldKTtcclxuICAgICAgICBpZiAoIW5ld1ZhbHVlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbmV3T3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgLi4udGhpcy5fb3B0aW9ucyxcclxuICAgICAgICAgICAgLi4ub3B0aW9ucyxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBvbGRPcHRpb25zID0gdGhpcy5fb3B0aW9ucztcclxuICAgICAgICB0aGlzLl9vcHRpb25zID0gbmV3T3B0aW9ucztcclxuXHJcbiAgICAgICAgLy8gSWYgc2l6ZSBjaGFuZ2VzLCByZWNyZWF0ZSBldmVyeXRoaW5nXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBuZXdPcHRpb25zLnJlbmRlclNpemUgIT09IG9sZE9wdGlvbnMucmVuZGVyU2l6ZSB8fFxyXG4gICAgICAgICAgICBuZXdPcHRpb25zLnJlbmRlclRhcmdldFRleHR1cmVUeXBlICE9PSBvbGRPcHRpb25zLnJlbmRlclRhcmdldFRleHR1cmVUeXBlIHx8XHJcbiAgICAgICAgICAgIG5ld09wdGlvbnMuZ2VuZXJhdGVNaXBtYXBzICE9PSBvbGRPcHRpb25zLmdlbmVyYXRlTWlwbWFwcyB8fFxyXG4gICAgICAgICAgICAhdGhpcy5fb3BhcXVlUmVuZGVyVGFyZ2V0XHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NldHVwUmVuZGVyVGFyZ2V0cygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX29wYXF1ZVJlbmRlclRhcmdldC5zYW1wbGVzID0gbmV3T3B0aW9ucy5zYW1wbGVzO1xyXG4gICAgICAgICAgICB0aGlzLl9vcGFxdWVSZW5kZXJUYXJnZXQubG9kR2VuZXJhdGlvblNjYWxlID0gbmV3T3B0aW9ucy5sb2RHZW5lcmF0aW9uU2NhbGU7XHJcbiAgICAgICAgICAgIHRoaXMuX29wYXF1ZVJlbmRlclRhcmdldC5sb2RHZW5lcmF0aW9uT2Zmc2V0ID0gbmV3T3B0aW9ucy5sb2RHZW5lcmF0aW9uT2Zmc2V0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIG9wYXF1ZSByZW5kZXIgdGFyZ2V0IHRleHR1cmUgb3IgbnVsbCBpZiBub3QgYXZhaWxhYmxlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0T3BhcXVlVGFyZ2V0KCk6IE51bGxhYmxlPFRleHR1cmU+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fb3BhcXVlUmVuZGVyVGFyZ2V0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3Nob3VsZFJlbmRlckFzVHJhbnNtaXNzaW9uKG1hdGVyaWFsOiBOdWxsYWJsZTxNYXRlcmlhbD4pOiBib29sZWFuIHtcclxuICAgICAgICBpZiAoIW1hdGVyaWFsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1hdGVyaWFsIGluc3RhbmNlb2YgUEJSTWF0ZXJpYWwgJiYgbWF0ZXJpYWwuc3ViU3VyZmFjZS5pc1JlZnJhY3Rpb25FbmFibGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfYWRkTWVzaChtZXNoOiBBYnN0cmFjdE1lc2gpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9tYXRlcmlhbE9ic2VydmVyc1ttZXNoLnVuaXF1ZUlkXSA9IG1lc2gub25NYXRlcmlhbENoYW5nZWRPYnNlcnZhYmxlLmFkZCh0aGlzLl9vbk1lc2hNYXRlcmlhbENoYW5nZWQuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIC8vIHdlIG5lZWQgdG8gZGVmZXIgdGhlIHByb2Nlc3NpbmcgYmVjYXVzZSBfYWRkTWVzaCBtYXkgYmUgY2FsbGVkIGFzIHBhcnQgYXMgYW4gaW5zdGFuY2UgbWVzaCBjcmVhdGlvbiwgaW4gd2hpY2ggY2FzZSBzb21lXHJcbiAgICAgICAgLy8gaW50ZXJuYWwgcHJvcGVydGllcyBhcmUgbm90IHNldHVwIHlldCwgbGlrZSBfc291cmNlTWVzaCAobmVlZGVkIHdoZW4gZG9pbmcgbWVzaC5tYXRlcmlhbCBiZWxvdylcclxuICAgICAgICBUb29scy5TZXRJbW1lZGlhdGUoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fc2hvdWxkUmVuZGVyQXNUcmFuc21pc3Npb24obWVzaC5tYXRlcmlhbCkpIHtcclxuICAgICAgICAgICAgICAgIChtZXNoLm1hdGVyaWFsIGFzIFBCUk1hdGVyaWFsKS5yZWZyYWN0aW9uVGV4dHVyZSA9IHRoaXMuX29wYXF1ZVJlbmRlclRhcmdldDtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl90cmFuc3BhcmVudE1lc2hlc0NhY2hlLmluZGV4T2YobWVzaCkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdHJhbnNwYXJlbnRNZXNoZXNDYWNoZS5wdXNoKG1lc2gpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX29wYXF1ZU1lc2hlc0NhY2hlLmluZGV4T2YobWVzaCkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fb3BhcXVlTWVzaGVzQ2FjaGUucHVzaChtZXNoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3JlbW92ZU1lc2gobWVzaDogQWJzdHJhY3RNZXNoKTogdm9pZCB7XHJcbiAgICAgICAgbWVzaC5vbk1hdGVyaWFsQ2hhbmdlZE9ic2VydmFibGUucmVtb3ZlKHRoaXMuX21hdGVyaWFsT2JzZXJ2ZXJzW21lc2gudW5pcXVlSWRdKTtcclxuICAgICAgICBkZWxldGUgdGhpcy5fbWF0ZXJpYWxPYnNlcnZlcnNbbWVzaC51bmlxdWVJZF07XHJcbiAgICAgICAgbGV0IGlkeCA9IHRoaXMuX3RyYW5zcGFyZW50TWVzaGVzQ2FjaGUuaW5kZXhPZihtZXNoKTtcclxuICAgICAgICBpZiAoaWR4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLl90cmFuc3BhcmVudE1lc2hlc0NhY2hlLnNwbGljZShpZHgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZHggPSB0aGlzLl9vcGFxdWVNZXNoZXNDYWNoZS5pbmRleE9mKG1lc2gpO1xyXG4gICAgICAgIGlmIChpZHggIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX29wYXF1ZU1lc2hlc0NhY2hlLnNwbGljZShpZHgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9wYXJzZVNjZW5lKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3NjZW5lLm1lc2hlcy5mb3JFYWNoKHRoaXMuX2FkZE1lc2guYmluZCh0aGlzKSk7XHJcbiAgICAgICAgLy8gTGlzdGVuIGZvciB3aGVuIGEgbWVzaCBpcyBhZGRlZCB0byB0aGUgc2NlbmUgYW5kIGFkZCBpdCB0byBvdXIgY2FjaGUgbGlzdHMuXHJcbiAgICAgICAgdGhpcy5fc2NlbmUub25OZXdNZXNoQWRkZWRPYnNlcnZhYmxlLmFkZCh0aGlzLl9hZGRNZXNoLmJpbmQodGhpcykpO1xyXG4gICAgICAgIC8vIExpc3RlbiBmb3Igd2hlbiBhIG1lc2ggaXMgcmVtb3ZlZCBmcm9tIHRvIHRoZSBzY2VuZSBhbmQgcmVtb3ZlIGl0IGZyb20gb3VyIGNhY2hlIGxpc3RzLlxyXG4gICAgICAgIHRoaXMuX3NjZW5lLm9uTWVzaFJlbW92ZWRPYnNlcnZhYmxlLmFkZCh0aGlzLl9yZW1vdmVNZXNoLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFdoZW4gb25lIG9mIHRoZSBtZXNoZXMgaW4gdGhlIHNjZW5lIGhhcyBpdHMgbWF0ZXJpYWwgY2hhbmdlZCwgbWFrZSBzdXJlIHRoYXQgaXQncyBpbiB0aGUgY29ycmVjdCBjYWNoZSBsaXN0LlxyXG4gICAgcHJpdmF0ZSBfb25NZXNoTWF0ZXJpYWxDaGFuZ2VkKG1lc2g6IEFic3RyYWN0TWVzaCkge1xyXG4gICAgICAgIGNvbnN0IHRyYW5zcGFyZW50SWR4ID0gdGhpcy5fdHJhbnNwYXJlbnRNZXNoZXNDYWNoZS5pbmRleE9mKG1lc2gpO1xyXG4gICAgICAgIGNvbnN0IG9wYXF1ZUlkeCA9IHRoaXMuX29wYXF1ZU1lc2hlc0NhY2hlLmluZGV4T2YobWVzaCk7XHJcblxyXG4gICAgICAgIC8vIElmIHRoZSBtYXRlcmlhbCBpcyB0cmFuc3BhcmVudCwgbWFrZSBzdXJlIHRoYXQgaXQncyBhZGRlZCB0byB0aGUgdHJhbnNwYXJlbnQgbGlzdCBhbmQgcmVtb3ZlZCBmcm9tIHRoZSBvcGFxdWUgbGlzdFxyXG4gICAgICAgIGNvbnN0IHVzZVRyYW5zbWlzc2lvbiA9IHRoaXMuX3Nob3VsZFJlbmRlckFzVHJhbnNtaXNzaW9uKG1lc2gubWF0ZXJpYWwpO1xyXG4gICAgICAgIGlmICh1c2VUcmFuc21pc3Npb24pIHtcclxuICAgICAgICAgICAgaWYgKG1lc2gubWF0ZXJpYWwgaW5zdGFuY2VvZiBQQlJNYXRlcmlhbCkge1xyXG4gICAgICAgICAgICAgICAgbWVzaC5tYXRlcmlhbC5zdWJTdXJmYWNlLnJlZnJhY3Rpb25UZXh0dXJlID0gdGhpcy5fb3BhcXVlUmVuZGVyVGFyZ2V0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChvcGFxdWVJZHggIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9vcGFxdWVNZXNoZXNDYWNoZS5zcGxpY2Uob3BhcXVlSWR4LCAxKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3RyYW5zcGFyZW50TWVzaGVzQ2FjaGUucHVzaChtZXNoKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0cmFuc3BhcmVudElkeCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3RyYW5zcGFyZW50TWVzaGVzQ2FjaGUucHVzaChtZXNoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBJZiB0aGUgbWF0ZXJpYWwgaXMgb3BhcXVlLCBtYWtlIHN1cmUgdGhhdCBpdCdzIGFkZGVkIHRvIHRoZSBvcGFxdWUgbGlzdCBhbmQgcmVtb3ZlZCBmcm9tIHRoZSB0cmFuc3BhcmVudCBsaXN0XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRyYW5zcGFyZW50SWR4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdHJhbnNwYXJlbnRNZXNoZXNDYWNoZS5zcGxpY2UodHJhbnNwYXJlbnRJZHgsIDEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fb3BhcXVlTWVzaGVzQ2FjaGUucHVzaChtZXNoKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChvcGFxdWVJZHggPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9vcGFxdWVNZXNoZXNDYWNoZS5wdXNoKG1lc2gpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKiBDaGVjayBpZiB0aGUgb3BhcXVlIHJlbmRlciB0YXJnZXQgaGFzIG5vdCBiZWVuIGRpc3Bvc2VkIGFuZCBjYW4gc3RpbGwgYmUgdXNlZC5cclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfaXNSZW5kZXJUYXJnZXRWYWxpZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fb3BhcXVlUmVuZGVyVGFyZ2V0Py5nZXRJbnRlcm5hbFRleHR1cmUoKSAhPT0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICogU2V0dXAgdGhlIHJlbmRlciB0YXJnZXRzIGFjY29yZGluZyB0byB0aGUgc3BlY2lmaWVkIG9wdGlvbnMuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfc2V0dXBSZW5kZXJUYXJnZXRzKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl9vcGFxdWVSZW5kZXJUYXJnZXQpIHtcclxuICAgICAgICAgICAgdGhpcy5fb3BhcXVlUmVuZGVyVGFyZ2V0LmRpc3Bvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fb3BhcXVlUmVuZGVyVGFyZ2V0ID0gbmV3IFJlbmRlclRhcmdldFRleHR1cmUoXHJcbiAgICAgICAgICAgIFwib3BhcXVlU2NlbmVUZXh0dXJlXCIsXHJcbiAgICAgICAgICAgIHRoaXMuX29wdGlvbnMucmVuZGVyU2l6ZSxcclxuICAgICAgICAgICAgdGhpcy5fc2NlbmUsXHJcbiAgICAgICAgICAgIHRoaXMuX29wdGlvbnMuZ2VuZXJhdGVNaXBtYXBzLFxyXG4gICAgICAgICAgICB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIHRoaXMuX29wdGlvbnMucmVuZGVyVGFyZ2V0VGV4dHVyZVR5cGVcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuX29wYXF1ZVJlbmRlclRhcmdldC5pZ25vcmVDYW1lcmFWaWV3cG9ydCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fb3BhcXVlUmVuZGVyVGFyZ2V0LnJlbmRlckxpc3QgPSB0aGlzLl9vcGFxdWVNZXNoZXNDYWNoZTtcclxuICAgICAgICB0aGlzLl9vcGFxdWVSZW5kZXJUYXJnZXQuY2xlYXJDb2xvciA9IHRoaXMuX29wdGlvbnMuY2xlYXJDb2xvcj8uY2xvbmUoKSA/PyB0aGlzLl9zY2VuZS5jbGVhckNvbG9yLmNsb25lKCk7XHJcbiAgICAgICAgdGhpcy5fb3BhcXVlUmVuZGVyVGFyZ2V0LmdhbW1hU3BhY2UgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9vcGFxdWVSZW5kZXJUYXJnZXQubG9kR2VuZXJhdGlvblNjYWxlID0gdGhpcy5fb3B0aW9ucy5sb2RHZW5lcmF0aW9uU2NhbGU7XHJcbiAgICAgICAgdGhpcy5fb3BhcXVlUmVuZGVyVGFyZ2V0LmxvZEdlbmVyYXRpb25PZmZzZXQgPSB0aGlzLl9vcHRpb25zLmxvZEdlbmVyYXRpb25PZmZzZXQ7XHJcbiAgICAgICAgdGhpcy5fb3BhcXVlUmVuZGVyVGFyZ2V0LnNhbXBsZXMgPSB0aGlzLl9vcHRpb25zLnNhbXBsZXM7XHJcbiAgICAgICAgdGhpcy5fb3BhcXVlUmVuZGVyVGFyZ2V0LnJlbmRlclNwcml0ZXMgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX29wYXF1ZVJlbmRlclRhcmdldC5yZW5kZXJQYXJ0aWNsZXMgPSB0cnVlO1xyXG5cclxuICAgICAgICBsZXQgc2NlbmVJbWFnZVByb2Nlc3NpbmdhcHBseUJ5UG9zdFByb2Nlc3M6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGxldCBzYXZlU2NlbmVFbnZJbnRlbnNpdHk6IG51bWJlcjtcclxuICAgICAgICB0aGlzLl9vcGFxdWVSZW5kZXJUYXJnZXQub25CZWZvcmVCaW5kT2JzZXJ2YWJsZS5hZGQoKG9wYXF1ZVJlbmRlclRhcmdldCkgPT4ge1xyXG4gICAgICAgICAgICBzYXZlU2NlbmVFbnZJbnRlbnNpdHkgPSB0aGlzLl9zY2VuZS5lbnZpcm9ubWVudEludGVuc2l0eTtcclxuICAgICAgICAgICAgdGhpcy5fc2NlbmUuZW52aXJvbm1lbnRJbnRlbnNpdHkgPSAxLjA7XHJcbiAgICAgICAgICAgIHNjZW5lSW1hZ2VQcm9jZXNzaW5nYXBwbHlCeVBvc3RQcm9jZXNzID0gdGhpcy5fc2NlbmUuaW1hZ2VQcm9jZXNzaW5nQ29uZmlndXJhdGlvbi5hcHBseUJ5UG9zdFByb2Nlc3M7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5fb3B0aW9ucy5jbGVhckNvbG9yKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zY2VuZS5jbGVhckNvbG9yLnRvTGluZWFyU3BhY2VUb1JlZihvcGFxdWVSZW5kZXJUYXJnZXQuY2xlYXJDb2xvciwgdGhpcy5fc2NlbmUuZ2V0RW5naW5lKCkudXNlRXhhY3RTcmdiQ29udmVyc2lvbnMpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgb3BhcXVlUmVuZGVyVGFyZ2V0LmNsZWFyQ29sb3IuY29weUZyb20odGhpcy5fb3B0aW9ucy5jbGVhckNvbG9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyB3ZSBkbyBub3QgdXNlIHRoZSBhcHBseUJ5UG9zdFByb2Nlc3Mgc2V0dGVyIHRvIGF2b2lkIGZsYWdnaW5nIGFsbCB0aGUgbWF0ZXJpYWxzIGFzIFwiaW1hZ2UgcHJvY2Vzc2luZyBkaXJ0eVwiIVxyXG4gICAgICAgICAgICB0aGlzLl9zY2VuZS5pbWFnZVByb2Nlc3NpbmdDb25maWd1cmF0aW9uLl9hcHBseUJ5UG9zdFByb2Nlc3MgPSB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX29wYXF1ZVJlbmRlclRhcmdldC5vbkFmdGVyVW5iaW5kT2JzZXJ2YWJsZS5hZGQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9zY2VuZS5lbnZpcm9ubWVudEludGVuc2l0eSA9IHNhdmVTY2VuZUVudkludGVuc2l0eTtcclxuICAgICAgICAgICAgdGhpcy5fc2NlbmUuaW1hZ2VQcm9jZXNzaW5nQ29uZmlndXJhdGlvbi5fYXBwbHlCeVBvc3RQcm9jZXNzID0gc2NlbmVJbWFnZVByb2Nlc3NpbmdhcHBseUJ5UG9zdFByb2Nlc3M7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuX3RyYW5zcGFyZW50TWVzaGVzQ2FjaGUuZm9yRWFjaCgobWVzaDogQWJzdHJhY3RNZXNoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9zaG91bGRSZW5kZXJBc1RyYW5zbWlzc2lvbihtZXNoLm1hdGVyaWFsKSkge1xyXG4gICAgICAgICAgICAgICAgKG1lc2gubWF0ZXJpYWwgYXMgUEJSTWF0ZXJpYWwpLnJlZnJhY3Rpb25UZXh0dXJlID0gdGhpcy5fb3BhcXVlUmVuZGVyVGFyZ2V0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEaXNwb3NlIGFsbCB0aGUgZWxlbWVudHMgY3JlYXRlZCBieSB0aGUgSGVscGVyLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9zY2VuZS5fdHJhbnNtaXNzaW9uSGVscGVyID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIGlmICh0aGlzLl9vcGFxdWVSZW5kZXJUYXJnZXQpIHtcclxuICAgICAgICAgICAgdGhpcy5fb3BhcXVlUmVuZGVyVGFyZ2V0LmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgdGhpcy5fb3BhcXVlUmVuZGVyVGFyZ2V0ID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fdHJhbnNwYXJlbnRNZXNoZXNDYWNoZSA9IFtdO1xyXG4gICAgICAgIHRoaXMuX29wYXF1ZU1lc2hlc0NhY2hlID0gW107XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IE5BTUUgPSBcIktIUl9tYXRlcmlhbHNfdHJhbnNtaXNzaW9uXCI7XHJcblxyXG4vKipcclxuICogW1NwZWNpZmljYXRpb25dKGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9ibG9iL21haW4vZXh0ZW5zaW9ucy8yLjAvS2hyb25vcy9LSFJfbWF0ZXJpYWxzX3RyYW5zbWlzc2lvbi9SRUFETUUubWQpXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBjbGFzcyBLSFJfbWF0ZXJpYWxzX3RyYW5zbWlzc2lvbiBpbXBsZW1lbnRzIElHTFRGTG9hZGVyRXh0ZW5zaW9uIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIG5hbWUgb2YgdGhpcyBleHRlbnNpb24uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lID0gTkFNRTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyBlbmFibGVkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZW5hYmxlZDogYm9vbGVhbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgYSBudW1iZXIgdGhhdCBkZXRlcm1pbmVzIHRoZSBvcmRlciB0aGUgZXh0ZW5zaW9ucyBhcmUgYXBwbGllZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIG9yZGVyID0gMTc1O1xyXG5cclxuICAgIHByaXZhdGUgX2xvYWRlcjogR0xURkxvYWRlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihsb2FkZXI6IEdMVEZMb2FkZXIpIHtcclxuICAgICAgICB0aGlzLl9sb2FkZXIgPSBsb2FkZXI7XHJcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdGhpcy5fbG9hZGVyLmlzRXh0ZW5zaW9uVXNlZChOQU1FKTtcclxuICAgICAgICBpZiAodGhpcy5lbmFibGVkKSB7XHJcbiAgICAgICAgICAgIGxvYWRlci5wYXJlbnQudHJhbnNwYXJlbmN5QXNDb3ZlcmFnZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge1xyXG4gICAgICAgICh0aGlzLl9sb2FkZXIgYXMgYW55KSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWRNYXRlcmlhbFByb3BlcnRpZXNBc3luYyhjb250ZXh0OiBzdHJpbmcsIG1hdGVyaWFsOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBOdWxsYWJsZTxQcm9taXNlPHZvaWQ+PiB7XHJcbiAgICAgICAgcmV0dXJuIEdMVEZMb2FkZXIuTG9hZEV4dGVuc2lvbkFzeW5jPElLSFJNYXRlcmlhbHNUcmFuc21pc3Npb24+KGNvbnRleHQsIG1hdGVyaWFsLCB0aGlzLm5hbWUsIChleHRlbnNpb25Db250ZXh0LCBleHRlbnNpb24pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBuZXcgQXJyYXk8UHJvbWlzZTxhbnk+PigpO1xyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMuX2xvYWRlci5sb2FkTWF0ZXJpYWxCYXNlUHJvcGVydGllc0FzeW5jKGNvbnRleHQsIG1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWwpKTtcclxuICAgICAgICAgICAgcHJvbWlzZXMucHVzaCh0aGlzLl9sb2FkZXIubG9hZE1hdGVyaWFsUHJvcGVydGllc0FzeW5jKGNvbnRleHQsIG1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWwpKTtcclxuICAgICAgICAgICAgcHJvbWlzZXMucHVzaCh0aGlzLl9sb2FkVHJhbnNwYXJlbnRQcm9wZXJ0aWVzQXN5bmMoZXh0ZW5zaW9uQ29udGV4dCwgbWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbCwgZXh0ZW5zaW9uKSk7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoKSA9PiB7fSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZFRyYW5zcGFyZW50UHJvcGVydGllc0FzeW5jKGNvbnRleHQ6IHN0cmluZywgbWF0ZXJpYWw6IElNYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCwgZXh0ZW5zaW9uOiBJS0hSTWF0ZXJpYWxzVHJhbnNtaXNzaW9uKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgaWYgKCEoYmFieWxvbk1hdGVyaWFsIGluc3RhbmNlb2YgUEJSTWF0ZXJpYWwpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtjb250ZXh0fTogTWF0ZXJpYWwgdHlwZSBub3Qgc3VwcG9ydGVkYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHBick1hdGVyaWFsID0gYmFieWxvbk1hdGVyaWFsIGFzIFBCUk1hdGVyaWFsO1xyXG5cclxuICAgICAgICAvLyBFbmFibGVzIFwicmVmcmFjdGlvblwiIHRleHR1cmUgd2hpY2ggcmVwcmVzZW50cyB0cmFuc21pdHRlZCBsaWdodC5cclxuICAgICAgICBwYnJNYXRlcmlhbC5zdWJTdXJmYWNlLmlzUmVmcmFjdGlvbkVuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAvLyBTaW5jZSB0aGlzIGV4dGVuc2lvbiBtb2RlbHMgdGhpbi1zdXJmYWNlIHRyYW5zbWlzc2lvbiBvbmx5LCB3ZSBtdXN0IG1ha2UgSU9SID0gMS4wXHJcbiAgICAgICAgcGJyTWF0ZXJpYWwuc3ViU3VyZmFjZS52b2x1bWVJbmRleE9mUmVmcmFjdGlvbiA9IDEuMDtcclxuXHJcbiAgICAgICAgLy8gQWxiZWRvIGNvbG91ciB3aWxsIHRpbnQgdHJhbnNtaXNzaW9uLlxyXG4gICAgICAgIHBick1hdGVyaWFsLnN1YlN1cmZhY2UudXNlQWxiZWRvVG9UaW50UmVmcmFjdGlvbiA9IHRydWU7XHJcblxyXG4gICAgICAgIGlmIChleHRlbnNpb24udHJhbnNtaXNzaW9uRmFjdG9yICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcGJyTWF0ZXJpYWwuc3ViU3VyZmFjZS5yZWZyYWN0aW9uSW50ZW5zaXR5ID0gZXh0ZW5zaW9uLnRyYW5zbWlzc2lvbkZhY3RvcjtcclxuICAgICAgICAgICAgY29uc3Qgc2NlbmUgPSBwYnJNYXRlcmlhbC5nZXRTY2VuZSgpIGFzIHVua25vd24gYXMgSVRyYW5zbWlzc2lvbkhlbHBlckhvbGRlcjtcclxuICAgICAgICAgICAgaWYgKHBick1hdGVyaWFsLnN1YlN1cmZhY2UucmVmcmFjdGlvbkludGVuc2l0eSAmJiAhc2NlbmUuX3RyYW5zbWlzc2lvbkhlbHBlcikge1xyXG4gICAgICAgICAgICAgICAgbmV3IFRyYW5zbWlzc2lvbkhlbHBlcih7fSwgcGJyTWF0ZXJpYWwuZ2V0U2NlbmUoKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocGJyTWF0ZXJpYWwuc3ViU3VyZmFjZS5yZWZyYWN0aW9uSW50ZW5zaXR5ICYmICFzY2VuZS5fdHJhbnNtaXNzaW9uSGVscGVyPy5faXNSZW5kZXJUYXJnZXRWYWxpZCgpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgcmVuZGVyIHRhcmdldCBpcyBub3QgdmFsaWQsIHJlY3JlYXRlIGl0LlxyXG4gICAgICAgICAgICAgICAgc2NlbmUuX3RyYW5zbWlzc2lvbkhlbHBlcj8uX3NldHVwUmVuZGVyVGFyZ2V0cygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcGJyTWF0ZXJpYWwuc3ViU3VyZmFjZS5yZWZyYWN0aW9uSW50ZW5zaXR5ID0gMC4wO1xyXG4gICAgICAgICAgICBwYnJNYXRlcmlhbC5zdWJTdXJmYWNlLmlzUmVmcmFjdGlvbkVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcGJyTWF0ZXJpYWwuc3ViU3VyZmFjZS5taW5pbXVtVGhpY2tuZXNzID0gMC4wO1xyXG4gICAgICAgIHBick1hdGVyaWFsLnN1YlN1cmZhY2UubWF4aW11bVRoaWNrbmVzcyA9IDAuMDtcclxuICAgICAgICBpZiAoZXh0ZW5zaW9uLnRyYW5zbWlzc2lvblRleHR1cmUpIHtcclxuICAgICAgICAgICAgKGV4dGVuc2lvbi50cmFuc21pc3Npb25UZXh0dXJlIGFzIElUZXh0dXJlSW5mbykubm9uQ29sb3JEYXRhID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRlci5sb2FkVGV4dHVyZUluZm9Bc3luYyhgJHtjb250ZXh0fS90cmFuc21pc3Npb25UZXh0dXJlYCwgZXh0ZW5zaW9uLnRyYW5zbWlzc2lvblRleHR1cmUsIHVuZGVmaW5lZCkudGhlbigodGV4dHVyZTogQmFzZVRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgICAgIHBick1hdGVyaWFsLnN1YlN1cmZhY2UucmVmcmFjdGlvbkludGVuc2l0eVRleHR1cmUgPSB0ZXh0dXJlO1xyXG4gICAgICAgICAgICAgICAgcGJyTWF0ZXJpYWwuc3ViU3VyZmFjZS51c2VHbHRmU3R5bGVUZXh0dXJlcyA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkdMVEZMb2FkZXIuUmVnaXN0ZXJFeHRlbnNpb24oTkFNRSwgKGxvYWRlcikgPT4gbmV3IEtIUl9tYXRlcmlhbHNfdHJhbnNtaXNzaW9uKGxvYWRlcikpO1xyXG4iLCJpbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcImNvcmUvdHlwZXNcIjtcclxuaW1wb3J0IHsgQ29sb3IzIH0gZnJvbSBcImNvcmUvTWF0aHMvbWF0aC5jb2xvclwiO1xyXG5pbXBvcnQgeyBQQlJNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9QQlIvcGJyTWF0ZXJpYWxcIjtcclxuaW1wb3J0IHR5cGUgeyBNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9tYXRlcmlhbFwiO1xyXG5cclxuaW1wb3J0IHR5cGUgeyBJTWF0ZXJpYWwgfSBmcm9tIFwiLi4vZ2xURkxvYWRlckludGVyZmFjZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBJR0xURkxvYWRlckV4dGVuc2lvbiB9IGZyb20gXCIuLi9nbFRGTG9hZGVyRXh0ZW5zaW9uXCI7XHJcbmltcG9ydCB7IEdMVEZMb2FkZXIgfSBmcm9tIFwiLi4vZ2xURkxvYWRlclwiO1xyXG5cclxuY29uc3QgTkFNRSA9IFwiS0hSX21hdGVyaWFsc191bmxpdFwiO1xyXG5cclxuLyoqXHJcbiAqIFtTcGVjaWZpY2F0aW9uXShodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi9tYWluL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX21hdGVyaWFsc191bmxpdC9SRUFETUUubWQpXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBjbGFzcyBLSFJfbWF0ZXJpYWxzX3VubGl0IGltcGxlbWVudHMgSUdMVEZMb2FkZXJFeHRlbnNpb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGlzIGV4dGVuc2lvbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBOQU1FO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIGVuYWJsZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBlbmFibGVkOiBib29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyBhIG51bWJlciB0aGF0IGRldGVybWluZXMgdGhlIG9yZGVyIHRoZSBleHRlbnNpb25zIGFyZSBhcHBsaWVkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb3JkZXIgPSAyMTA7XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZGVyOiBHTFRGTG9hZGVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGxvYWRlcjogR0xURkxvYWRlcikge1xyXG4gICAgICAgIHRoaXMuX2xvYWRlciA9IGxvYWRlcjtcclxuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0aGlzLl9sb2FkZXIuaXNFeHRlbnNpb25Vc2VkKE5BTUUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge1xyXG4gICAgICAgICh0aGlzLl9sb2FkZXIgYXMgYW55KSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWRNYXRlcmlhbFByb3BlcnRpZXNBc3luYyhjb250ZXh0OiBzdHJpbmcsIG1hdGVyaWFsOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBOdWxsYWJsZTxQcm9taXNlPHZvaWQ+PiB7XHJcbiAgICAgICAgcmV0dXJuIEdMVEZMb2FkZXIuTG9hZEV4dGVuc2lvbkFzeW5jKGNvbnRleHQsIG1hdGVyaWFsLCB0aGlzLm5hbWUsICgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRVbmxpdFByb3BlcnRpZXNBc3luYyhjb250ZXh0LCBtYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9sb2FkVW5saXRQcm9wZXJ0aWVzQXN5bmMoY29udGV4dDogc3RyaW5nLCBtYXRlcmlhbDogSU1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgaWYgKCEoYmFieWxvbk1hdGVyaWFsIGluc3RhbmNlb2YgUEJSTWF0ZXJpYWwpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtjb250ZXh0fTogTWF0ZXJpYWwgdHlwZSBub3Qgc3VwcG9ydGVkYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBwcm9taXNlcyA9IG5ldyBBcnJheTxQcm9taXNlPGFueT4+KCk7XHJcbiAgICAgICAgYmFieWxvbk1hdGVyaWFsLnVubGl0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgY29uc3QgcHJvcGVydGllcyA9IG1hdGVyaWFsLnBick1ldGFsbGljUm91Z2huZXNzO1xyXG4gICAgICAgIGlmIChwcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzLmJhc2VDb2xvckZhY3Rvcikge1xyXG4gICAgICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsLmFsYmVkb0NvbG9yID0gQ29sb3IzLkZyb21BcnJheShwcm9wZXJ0aWVzLmJhc2VDb2xvckZhY3Rvcik7XHJcbiAgICAgICAgICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwuYWxwaGEgPSBwcm9wZXJ0aWVzLmJhc2VDb2xvckZhY3RvclszXTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGJhYnlsb25NYXRlcmlhbC5hbGJlZG9Db2xvciA9IENvbG9yMy5XaGl0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAocHJvcGVydGllcy5iYXNlQ29sb3JUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRlci5sb2FkVGV4dHVyZUluZm9Bc3luYyhgJHtjb250ZXh0fS9iYXNlQ29sb3JUZXh0dXJlYCwgcHJvcGVydGllcy5iYXNlQ29sb3JUZXh0dXJlLCAodGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlLm5hbWUgPSBgJHtiYWJ5bG9uTWF0ZXJpYWwubmFtZX0gKEJhc2UgQ29sb3IpYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsLmFsYmVkb1RleHR1cmUgPSB0ZXh0dXJlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobWF0ZXJpYWwuZG91YmxlU2lkZWQpIHtcclxuICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsLmJhY2tGYWNlQ3VsbGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwudHdvU2lkZWRMaWdodGluZyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9sb2FkZXIubG9hZE1hdGVyaWFsQWxwaGFQcm9wZXJ0aWVzKGNvbnRleHQsIG1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWwpO1xyXG5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4ge30pO1xyXG4gICAgfVxyXG59XHJcblxyXG5HTFRGTG9hZGVyLlJlZ2lzdGVyRXh0ZW5zaW9uKE5BTUUsIChsb2FkZXIpID0+IG5ldyBLSFJfbWF0ZXJpYWxzX3VubGl0KGxvYWRlcikpO1xyXG4iLCJpbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcImNvcmUvdHlwZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBJR0xURkxvYWRlckV4dGVuc2lvbiB9IGZyb20gXCIuLi9nbFRGTG9hZGVyRXh0ZW5zaW9uXCI7XHJcbmltcG9ydCB7IEdMVEZMb2FkZXIsIEFycmF5SXRlbSB9IGZyb20gXCIuLi9nbFRGTG9hZGVyXCI7XHJcblxyXG5pbXBvcnQgdHlwZSB7IE1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IE1lc2ggfSBmcm9tIFwiY29yZS9NZXNoZXMvbWVzaFwiO1xyXG5pbXBvcnQgdHlwZSB7IE5vZGUgfSBmcm9tIFwiY29yZS9ub2RlXCI7XHJcbmltcG9ydCB0eXBlIHsgQWJzdHJhY3RNZXNoIH0gZnJvbSBcImNvcmUvTWVzaGVzL2Fic3RyYWN0TWVzaFwiO1xyXG5pbXBvcnQgdHlwZSB7IElOb2RlLCBJTWVzaFByaW1pdGl2ZSwgSU1lc2ggfSBmcm9tIFwiLi4vZ2xURkxvYWRlckludGVyZmFjZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBJS0hSTWF0ZXJpYWxWYXJpYW50c19NYXBwaW5nLCBJS0hSTWF0ZXJpYWxWYXJpYW50c19WYXJpYW50LCBJS0hSTWF0ZXJpYWxWYXJpYW50c19WYXJpYW50cyB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuXHJcbmNvbnN0IE5BTUUgPSBcIktIUl9tYXRlcmlhbHNfdmFyaWFudHNcIjtcclxuXHJcbmludGVyZmFjZSBJVmFyaWFudHNNYXAge1xyXG4gICAgW2tleTogc3RyaW5nXTogQXJyYXk8eyBtZXNoOiBBYnN0cmFjdE1lc2g7IG1hdGVyaWFsOiBOdWxsYWJsZTxNYXRlcmlhbD4gfT47XHJcbn1cclxuXHJcbmludGVyZmFjZSBJRXh0ZW5zaW9uTWV0YWRhdGEge1xyXG4gICAgbGFzdFNlbGVjdGVkOiBOdWxsYWJsZTxzdHJpbmcgfCBBcnJheTxzdHJpbmc+PjtcclxuICAgIG9yaWdpbmFsOiBBcnJheTx7IG1lc2g6IEFic3RyYWN0TWVzaDsgbWF0ZXJpYWw6IE51bGxhYmxlPE1hdGVyaWFsPiB9PjtcclxuICAgIHZhcmlhbnRzOiBJVmFyaWFudHNNYXA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBbU3BlY2lmaWNhdGlvbl0oaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFpbi9leHRlbnNpb25zLzIuMC9LaHJvbm9zL0tIUl9tYXRlcmlhbHNfdmFyaWFudHMvUkVBRE1FLm1kKVxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgY2xhc3MgS0hSX21hdGVyaWFsc192YXJpYW50cyBpbXBsZW1lbnRzIElHTFRGTG9hZGVyRXh0ZW5zaW9uIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIG5hbWUgb2YgdGhpcyBleHRlbnNpb24uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lID0gTkFNRTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyBlbmFibGVkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZW5hYmxlZDogYm9vbGVhbjtcclxuXHJcbiAgICBwcml2YXRlIF9sb2FkZXI6IEdMVEZMb2FkZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBfdmFyaWFudHM/OiBBcnJheTxJS0hSTWF0ZXJpYWxWYXJpYW50c19WYXJpYW50PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihsb2FkZXI6IEdMVEZMb2FkZXIpIHtcclxuICAgICAgICB0aGlzLl9sb2FkZXIgPSBsb2FkZXI7XHJcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdGhpcy5fbG9hZGVyLmlzRXh0ZW5zaW9uVXNlZChOQU1FKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHtcclxuICAgICAgICAodGhpcy5fbG9hZGVyIGFzIGFueSkgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgbGlzdCBvZiBhdmFpbGFibGUgdmFyaWFudCBuYW1lcyBmb3IgdGhpcyBhc3NldC5cclxuICAgICAqIEBwYXJhbSByb290TWVzaCBUaGUgZ2xURiByb290IG1lc2hcclxuICAgICAqIEByZXR1cm5zIHRoZSBsaXN0IG9mIGFsbCB0aGUgdmFyaWFudCBuYW1lcyBmb3IgdGhpcyBtb2RlbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldEF2YWlsYWJsZVZhcmlhbnRzKHJvb3RNZXNoOiBNZXNoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIGNvbnN0IGV4dGVuc2lvbk1ldGFkYXRhID0gdGhpcy5fR2V0RXh0ZW5zaW9uTWV0YWRhdGEocm9vdE1lc2gpO1xyXG4gICAgICAgIGlmICghZXh0ZW5zaW9uTWV0YWRhdGEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGV4dGVuc2lvbk1ldGFkYXRhLnZhcmlhbnRzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIGxpc3Qgb2YgYXZhaWxhYmxlIHZhcmlhbnQgbmFtZXMgZm9yIHRoaXMgYXNzZXQuXHJcbiAgICAgKiBAcGFyYW0gcm9vdE1lc2ggVGhlIGdsVEYgcm9vdCBtZXNoXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgbGlzdCBvZiBhbGwgdGhlIHZhcmlhbnQgbmFtZXMgZm9yIHRoaXMgbW9kZWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldEF2YWlsYWJsZVZhcmlhbnRzKHJvb3RNZXNoOiBNZXNoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIHJldHVybiBLSFJfbWF0ZXJpYWxzX3ZhcmlhbnRzLkdldEF2YWlsYWJsZVZhcmlhbnRzKHJvb3RNZXNoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlbGVjdCBhIHZhcmlhbnQgZ2l2ZW4gYSB2YXJpYW50IG5hbWUgb3IgYSBsaXN0IG9mIHZhcmlhbnQgbmFtZXMuXHJcbiAgICAgKiBAcGFyYW0gcm9vdE1lc2ggVGhlIGdsVEYgcm9vdCBtZXNoXHJcbiAgICAgKiBAcGFyYW0gdmFyaWFudE5hbWUgVGhlIHZhcmlhbnQgbmFtZShzKSB0byBzZWxlY3QuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgU2VsZWN0VmFyaWFudChyb290TWVzaDogTWVzaCwgdmFyaWFudE5hbWU6IHN0cmluZyB8IHN0cmluZ1tdKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgZXh0ZW5zaW9uTWV0YWRhdGEgPSB0aGlzLl9HZXRFeHRlbnNpb25NZXRhZGF0YShyb290TWVzaCk7XHJcbiAgICAgICAgaWYgKCFleHRlbnNpb25NZXRhZGF0YSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBzZWxlY3QgdmFyaWFudCBvbiBhIGdsVEYgbWVzaCB0aGF0IGRvZXMgbm90IGhhdmUgdGhlICR7TkFNRX0gZXh0ZW5zaW9uYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzZWxlY3QgPSAodmFyaWFudE5hbWU6IHN0cmluZyk6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBlbnRyaWVzID0gZXh0ZW5zaW9uTWV0YWRhdGEudmFyaWFudHNbdmFyaWFudE5hbWVdO1xyXG4gICAgICAgICAgICBpZiAoZW50cmllcykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW50cnkubWVzaC5tYXRlcmlhbCA9IGVudHJ5Lm1hdGVyaWFsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKHZhcmlhbnROYW1lIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBuYW1lIG9mIHZhcmlhbnROYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3QobmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZWxlY3QodmFyaWFudE5hbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZXh0ZW5zaW9uTWV0YWRhdGEubGFzdFNlbGVjdGVkID0gdmFyaWFudE5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZWxlY3QgYSB2YXJpYW50IGdpdmVuIGEgdmFyaWFudCBuYW1lIG9yIGEgbGlzdCBvZiB2YXJpYW50IG5hbWVzLlxyXG4gICAgICogQHBhcmFtIHJvb3RNZXNoIFRoZSBnbFRGIHJvb3QgbWVzaFxyXG4gICAgICogQHBhcmFtIHZhcmlhbnROYW1lIFRoZSB2YXJpYW50IG5hbWUocykgdG8gc2VsZWN0LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2VsZWN0VmFyaWFudChyb290TWVzaDogTWVzaCwgdmFyaWFudE5hbWU6IHN0cmluZyB8IHN0cmluZ1tdKTogdm9pZCB7XHJcbiAgICAgICAgcmV0dXJuIEtIUl9tYXRlcmlhbHNfdmFyaWFudHMuU2VsZWN0VmFyaWFudChyb290TWVzaCwgdmFyaWFudE5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVzZXQgYmFjayB0byB0aGUgb3JpZ2luYWwgYmVmb3JlIHNlbGVjdGluZyBhIHZhcmlhbnQuXHJcbiAgICAgKiBAcGFyYW0gcm9vdE1lc2ggVGhlIGdsVEYgcm9vdCBtZXNoXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgUmVzZXQocm9vdE1lc2g6IE1lc2gpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBleHRlbnNpb25NZXRhZGF0YSA9IHRoaXMuX0dldEV4dGVuc2lvbk1ldGFkYXRhKHJvb3RNZXNoKTtcclxuICAgICAgICBpZiAoIWV4dGVuc2lvbk1ldGFkYXRhKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHJlc2V0IG9uIGEgZ2xURiBtZXNoIHRoYXQgZG9lcyBub3QgaGF2ZSB0aGUgJHtOQU1FfSBleHRlbnNpb25gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgZW50cnkgb2YgZXh0ZW5zaW9uTWV0YWRhdGEub3JpZ2luYWwpIHtcclxuICAgICAgICAgICAgZW50cnkubWVzaC5tYXRlcmlhbCA9IGVudHJ5Lm1hdGVyaWFsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZXh0ZW5zaW9uTWV0YWRhdGEubGFzdFNlbGVjdGVkID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlc2V0IGJhY2sgdG8gdGhlIG9yaWdpbmFsIGJlZm9yZSBzZWxlY3RpbmcgYSB2YXJpYW50LlxyXG4gICAgICogQHBhcmFtIHJvb3RNZXNoIFRoZSBnbFRGIHJvb3QgbWVzaFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVzZXQocm9vdE1lc2g6IE1lc2gpOiB2b2lkIHtcclxuICAgICAgICByZXR1cm4gS0hSX21hdGVyaWFsc192YXJpYW50cy5SZXNldChyb290TWVzaCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBsYXN0IHNlbGVjdGVkIHZhcmlhbnQgbmFtZShzKSBvciBudWxsIGlmIG9yaWdpbmFsLlxyXG4gICAgICogQHBhcmFtIHJvb3RNZXNoIFRoZSBnbFRGIHJvb3QgbWVzaFxyXG4gICAgICogQHJldHVybnMgVGhlIHNlbGVjdGVkIHZhcmlhbnQgbmFtZShzKS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBHZXRMYXN0U2VsZWN0ZWRWYXJpYW50KHJvb3RNZXNoOiBNZXNoKTogTnVsbGFibGU8c3RyaW5nIHwgc3RyaW5nW10+IHtcclxuICAgICAgICBjb25zdCBleHRlbnNpb25NZXRhZGF0YSA9IHRoaXMuX0dldEV4dGVuc2lvbk1ldGFkYXRhKHJvb3RNZXNoKTtcclxuICAgICAgICBpZiAoIWV4dGVuc2lvbk1ldGFkYXRhKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IGdldCB0aGUgbGFzdCBzZWxlY3RlZCB2YXJpYW50IG9uIGEgZ2xURiBtZXNoIHRoYXQgZG9lcyBub3QgaGF2ZSB0aGUgJHtOQU1FfSBleHRlbnNpb25gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBleHRlbnNpb25NZXRhZGF0YS5sYXN0U2VsZWN0ZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBsYXN0IHNlbGVjdGVkIHZhcmlhbnQgbmFtZShzKSBvciBudWxsIGlmIG9yaWdpbmFsLlxyXG4gICAgICogQHBhcmFtIHJvb3RNZXNoIFRoZSBnbFRGIHJvb3QgbWVzaFxyXG4gICAgICogQHJldHVybnMgVGhlIHNlbGVjdGVkIHZhcmlhbnQgbmFtZShzKS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldExhc3RTZWxlY3RlZFZhcmlhbnQocm9vdE1lc2g6IE1lc2gpOiBOdWxsYWJsZTxzdHJpbmcgfCBzdHJpbmdbXT4ge1xyXG4gICAgICAgIHJldHVybiBLSFJfbWF0ZXJpYWxzX3ZhcmlhbnRzLkdldExhc3RTZWxlY3RlZFZhcmlhbnQocm9vdE1lc2gpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9HZXRFeHRlbnNpb25NZXRhZGF0YShyb290TWVzaDogTnVsbGFibGU8TWVzaD4pOiBOdWxsYWJsZTxJRXh0ZW5zaW9uTWV0YWRhdGE+IHtcclxuICAgICAgICByZXR1cm4gcm9vdE1lc2g/Ll9pbnRlcm5hbE1ldGFkYXRhPy5nbHRmPy5bTkFNRV0gfHwgbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgb25Mb2FkaW5nKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGV4dGVuc2lvbnMgPSB0aGlzLl9sb2FkZXIuZ2x0Zi5leHRlbnNpb25zO1xyXG4gICAgICAgIGlmIChleHRlbnNpb25zICYmIGV4dGVuc2lvbnNbdGhpcy5uYW1lXSkge1xyXG4gICAgICAgICAgICBjb25zdCBleHRlbnNpb24gPSBleHRlbnNpb25zW3RoaXMubmFtZV0gYXMgSUtIUk1hdGVyaWFsVmFyaWFudHNfVmFyaWFudHM7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZhcmlhbnRzID0gZXh0ZW5zaW9uLnZhcmlhbnRzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgX2xvYWRNZXNoUHJpbWl0aXZlQXN5bmMoXHJcbiAgICAgICAgY29udGV4dDogc3RyaW5nLFxyXG4gICAgICAgIG5hbWU6IHN0cmluZyxcclxuICAgICAgICBub2RlOiBJTm9kZSxcclxuICAgICAgICBtZXNoOiBJTWVzaCxcclxuICAgICAgICBwcmltaXRpdmU6IElNZXNoUHJpbWl0aXZlLFxyXG4gICAgICAgIGFzc2lnbjogKGJhYnlsb25NZXNoOiBBYnN0cmFjdE1lc2gpID0+IHZvaWRcclxuICAgICk6IE51bGxhYmxlPFByb21pc2U8QWJzdHJhY3RNZXNoPj4ge1xyXG4gICAgICAgIHJldHVybiBHTFRGTG9hZGVyLkxvYWRFeHRlbnNpb25Bc3luYzxJS0hSTWF0ZXJpYWxWYXJpYW50c19NYXBwaW5nLCBBYnN0cmFjdE1lc2g+KGNvbnRleHQsIHByaW1pdGl2ZSwgdGhpcy5uYW1lLCAoZXh0ZW5zaW9uQ29udGV4dCwgZXh0ZW5zaW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb21pc2VzID0gbmV3IEFycmF5PFByb21pc2U8YW55Pj4oKTtcclxuICAgICAgICAgICAgcHJvbWlzZXMucHVzaChcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRlci5fbG9hZE1lc2hQcmltaXRpdmVBc3luYyhjb250ZXh0LCBuYW1lLCBub2RlLCBtZXNoLCBwcmltaXRpdmUsIChiYWJ5bG9uTWVzaCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGFzc2lnbihiYWJ5bG9uTWVzaCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChiYWJ5bG9uTWVzaCBpbnN0YW5jZW9mIE1lc2gpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmFieWxvbkRyYXdNb2RlID0gR0xURkxvYWRlci5fR2V0RHJhd01vZGUoY29udGV4dCwgcHJpbWl0aXZlLm1vZGUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm9vdCA9IHRoaXMuX2xvYWRlci5yb290QmFieWxvbk1lc2g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1ldGFkYXRhID0gcm9vdCA/IChyb290Ll9pbnRlcm5hbE1ldGFkYXRhID0gcm9vdC5faW50ZXJuYWxNZXRhZGF0YSB8fCB7fSkgOiB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZ2x0ZiA9IChtZXRhZGF0YS5nbHRmID0gbWV0YWRhdGEuZ2x0ZiB8fCB7fSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4dGVuc2lvbk1ldGFkYXRhOiBJRXh0ZW5zaW9uTWV0YWRhdGEgPSAoZ2x0ZltOQU1FXSA9IGdsdGZbTkFNRV0gfHwgeyBsYXN0U2VsZWN0ZWQ6IG51bGwsIG9yaWdpbmFsOiBbXSwgdmFyaWFudHM6IHt9IH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3RvcmUgdGhlIG9yaWdpbmFsIG1hdGVyaWFsLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHRlbnNpb25NZXRhZGF0YS5vcmlnaW5hbC5wdXNoKHsgbWVzaDogYmFieWxvbk1lc2gsIG1hdGVyaWFsOiBiYWJ5bG9uTWVzaC5tYXRlcmlhbCB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZvciBlYWNoIG1hcHBpbmcsIGxvb2sgYXQgdGhlIHZhcmlhbnRzIGFuZCBtYWtlIGEgbmV3IGVudHJ5IGZvciB0aGVtLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBtYXBwaW5nSW5kZXggPSAwOyBtYXBwaW5nSW5kZXggPCBleHRlbnNpb24ubWFwcGluZ3MubGVuZ3RoOyArK21hcHBpbmdJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWFwcGluZyA9IGV4dGVuc2lvbi5tYXBwaW5nc1ttYXBwaW5nSW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWwgPSBBcnJheUl0ZW0uR2V0KGAke2V4dGVuc2lvbkNvbnRleHR9L21hcHBpbmdzLyR7bWFwcGluZ0luZGV4fS9tYXRlcmlhbGAsIHRoaXMuX2xvYWRlci5nbHRmLm1hdGVyaWFscywgbWFwcGluZy5tYXRlcmlhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRlci5fbG9hZE1hdGVyaWFsQXN5bmMoYCMvbWF0ZXJpYWxzLyR7bWFwcGluZy5tYXRlcmlhbH1gLCBtYXRlcmlhbCwgYmFieWxvbk1lc2gsIGJhYnlsb25EcmF3TW9kZSwgKGJhYnlsb25NYXRlcmlhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBtYXBwaW5nVmFyaWFudEluZGV4ID0gMDsgbWFwcGluZ1ZhcmlhbnRJbmRleCA8IG1hcHBpbmcudmFyaWFudHMubGVuZ3RoOyArK21hcHBpbmdWYXJpYW50SW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhcmlhbnRJbmRleCA9IG1hcHBpbmcudmFyaWFudHNbbWFwcGluZ1ZhcmlhbnRJbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YXJpYW50ID0gQXJyYXlJdGVtLkdldChgL2V4dGVuc2lvbnMvJHtOQU1FfS92YXJpYW50cy8ke3ZhcmlhbnRJbmRleH1gLCB0aGlzLl92YXJpYW50cywgdmFyaWFudEluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dGVuc2lvbk1ldGFkYXRhLnZhcmlhbnRzW3ZhcmlhbnQubmFtZV0gPSBleHRlbnNpb25NZXRhZGF0YS52YXJpYW50c1t2YXJpYW50Lm5hbWVdIHx8IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0ZW5zaW9uTWV0YWRhdGEudmFyaWFudHNbdmFyaWFudC5uYW1lXS5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNoOiBiYWJ5bG9uTWVzaCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRlcmlhbDogYmFieWxvbk1hdGVyaWFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVwbGFjZSB0aGUgdGFyZ2V0IHdoZW4gb3JpZ2luYWwgbWVzaCBpcyBjbG9uZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhYnlsb25NZXNoLm9uQ2xvbmVkT2JzZXJ2YWJsZS5hZGQoKG5ld09uZTogTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld01lc2ggPSBuZXdPbmUgYXMgTWVzaDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWV0YWRhdGE6IE51bGxhYmxlPElFeHRlbnNpb25NZXRhZGF0YT4gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdSb290OiBOdWxsYWJsZTxOb2RlPiA9IG5ld01lc2g7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZpbmQgcm9vdCB0byBnZXQgbWVkYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdSb290ID0gbmV3Um9vdCEucGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW5ld1Jvb3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRhZGF0YSA9IEtIUl9tYXRlcmlhbHNfdmFyaWFudHMuX0dldEV4dGVuc2lvbk1ldGFkYXRhKG5ld1Jvb3QgYXMgTWVzaCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB3aGlsZSAobWV0YWRhdGEgPT09IG51bGwpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBOZWVkIHRvIGNsb25lIHRoZSBtZXRhZGF0YSBvbiB0aGUgcm9vdCAoZmlyc3QgdGltZSBvbmx5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyb290ICYmIG1ldGFkYXRhID09PSBLSFJfbWF0ZXJpYWxzX3ZhcmlhbnRzLl9HZXRFeHRlbnNpb25NZXRhZGF0YShyb290KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDb3B5IG1haW4gbWV0YWRhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3Um9vdC5faW50ZXJuYWxNZXRhZGF0YSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiByb290Ll9pbnRlcm5hbE1ldGFkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdSb290Ll9pbnRlcm5hbE1ldGFkYXRhW2tleV0gPSByb290Ll9pbnRlcm5hbE1ldGFkYXRhW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENvcHkgdGhlIGdsdGYgbWV0YWRhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3Um9vdC5faW50ZXJuYWxNZXRhZGF0YS5nbHRmID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHJvb3QuX2ludGVybmFsTWV0YWRhdGEuZ2x0Zikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3Um9vdC5faW50ZXJuYWxNZXRhZGF0YS5nbHRmW2tleV0gPSByb290Ll9pbnRlcm5hbE1ldGFkYXRhLmdsdGZba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRHVwbGljYXRlIHRoZSBleHRlbnNpb24gc3BlY2lmaWMgbWV0YWRhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3Um9vdC5faW50ZXJuYWxNZXRhZGF0YS5nbHRmW05BTUVdID0geyBsYXN0U2VsZWN0ZWQ6IG51bGwsIG9yaWdpbmFsOiBbXSwgdmFyaWFudHM6IHt9IH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgb3JpZ2luYWwgb2YgbWV0YWRhdGEub3JpZ2luYWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Jvb3QuX2ludGVybmFsTWV0YWRhdGEuZ2x0ZltOQU1FXS5vcmlnaW5hbC5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNoOiBvcmlnaW5hbC5tZXNoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsOiBvcmlnaW5hbC5tYXRlcmlhbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIG1ldGFkYXRhLnZhcmlhbnRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1ldGFkYXRhLnZhcmlhbnRzLCBrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3Um9vdC5faW50ZXJuYWxNZXRhZGF0YS5nbHRmW05BTUVdLnZhcmlhbnRzW2tleV0gPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHZhcmlhbnRFbnRyeSBvZiBtZXRhZGF0YS52YXJpYW50c1trZXldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Jvb3QuX2ludGVybmFsTWV0YWRhdGEuZ2x0ZltOQU1FXS52YXJpYW50c1trZXldLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzaDogdmFyaWFudEVudHJ5Lm1lc2gsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRlcmlhbDogdmFyaWFudEVudHJ5Lm1hdGVyaWFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGFkYXRhID0gbmV3Um9vdC5faW50ZXJuYWxNZXRhZGF0YS5nbHRmW05BTUVdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVsb2NhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHRhcmdldCBvZiBtZXRhZGF0YSEub3JpZ2luYWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldC5tZXNoID09PSBiYWJ5bG9uTWVzaCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Lm1lc2ggPSBuZXdNZXNoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgdGFyZ2V0IG9mIG1ldGFkYXRhIS52YXJpYW50c1t2YXJpYW50Lm5hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXQubWVzaCA9PT0gYmFieWxvbk1lc2gpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5tZXNoID0gbmV3TWVzaDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKFtiYWJ5bG9uTWVzaF0pID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBiYWJ5bG9uTWVzaDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkdMVEZMb2FkZXIuUmVnaXN0ZXJFeHRlbnNpb24oTkFNRSwgKGxvYWRlcikgPT4gbmV3IEtIUl9tYXRlcmlhbHNfdmFyaWFudHMobG9hZGVyKSk7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiAqL1xyXG5pbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcImNvcmUvdHlwZXNcIjtcclxuaW1wb3J0IHsgUEJSTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvUEJSL3Bick1hdGVyaWFsXCI7XHJcbmltcG9ydCB0eXBlIHsgTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHR5cGUgeyBCYXNlVGV4dHVyZSB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9UZXh0dXJlcy9iYXNlVGV4dHVyZVwiO1xyXG5pbXBvcnQgdHlwZSB7IElNYXRlcmlhbCwgSVRleHR1cmVJbmZvIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJJbnRlcmZhY2VzXCI7XHJcbmltcG9ydCB0eXBlIHsgSUdMVEZMb2FkZXJFeHRlbnNpb24gfSBmcm9tIFwiLi4vZ2xURkxvYWRlckV4dGVuc2lvblwiO1xyXG5pbXBvcnQgeyBHTFRGTG9hZGVyIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBJS0hSTWF0ZXJpYWxzVm9sdW1lIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5cclxuY29uc3QgTkFNRSA9IFwiS0hSX21hdGVyaWFsc192b2x1bWVcIjtcclxuXHJcbi8qKlxyXG4gKiBbU3BlY2lmaWNhdGlvbl0oaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFpbi9leHRlbnNpb25zLzIuMC9LaHJvbm9zL0tIUl9tYXRlcmlhbHNfdm9sdW1lL1JFQURNRS5tZClcclxuICogQHNpbmNlIDUuMC4wXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBjbGFzcyBLSFJfbWF0ZXJpYWxzX3ZvbHVtZSBpbXBsZW1lbnRzIElHTFRGTG9hZGVyRXh0ZW5zaW9uIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIG5hbWUgb2YgdGhpcyBleHRlbnNpb24uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lID0gTkFNRTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyBlbmFibGVkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZW5hYmxlZDogYm9vbGVhbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgYSBudW1iZXIgdGhhdCBkZXRlcm1pbmVzIHRoZSBvcmRlciB0aGUgZXh0ZW5zaW9ucyBhcmUgYXBwbGllZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIG9yZGVyID0gMTczO1xyXG5cclxuICAgIHByaXZhdGUgX2xvYWRlcjogR0xURkxvYWRlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihsb2FkZXI6IEdMVEZMb2FkZXIpIHtcclxuICAgICAgICB0aGlzLl9sb2FkZXIgPSBsb2FkZXI7XHJcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdGhpcy5fbG9hZGVyLmlzRXh0ZW5zaW9uVXNlZChOQU1FKTtcclxuICAgICAgICBpZiAodGhpcy5lbmFibGVkKSB7XHJcbiAgICAgICAgICAgIC8vIFdlIG5lZWQgdG8gZGlzYWJsZSBpbnN0YW5jZSB1c2FnZSBiZWNhdXNlIHRoZSBhdHRlbnVhdGlvbiBmYWN0b3IgZGVwZW5kcyBvbiB0aGUgbm9kZSBzY2FsZSBvZiBlYWNoIGluZGl2aWR1YWwgbWVzaFxyXG4gICAgICAgICAgICB0aGlzLl9sb2FkZXIuX2Rpc2FibGVJbnN0YW5jZWRNZXNoKys7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmVuYWJsZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9hZGVyLl9kaXNhYmxlSW5zdGFuY2VkTWVzaC0tO1xyXG4gICAgICAgIH1cclxuICAgICAgICAodGhpcy5fbG9hZGVyIGFzIGFueSkgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkTWF0ZXJpYWxQcm9wZXJ0aWVzQXN5bmMoY29udGV4dDogc3RyaW5nLCBtYXRlcmlhbDogSU1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsKTogTnVsbGFibGU8UHJvbWlzZTx2b2lkPj4ge1xyXG4gICAgICAgIHJldHVybiBHTFRGTG9hZGVyLkxvYWRFeHRlbnNpb25Bc3luYzxJS0hSTWF0ZXJpYWxzVm9sdW1lPihjb250ZXh0LCBtYXRlcmlhbCwgdGhpcy5uYW1lLCAoZXh0ZW5zaW9uQ29udGV4dCwgZXh0ZW5zaW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb21pc2VzID0gbmV3IEFycmF5PFByb21pc2U8YW55Pj4oKTtcclxuICAgICAgICAgICAgcHJvbWlzZXMucHVzaCh0aGlzLl9sb2FkZXIubG9hZE1hdGVyaWFsQmFzZVByb3BlcnRpZXNBc3luYyhjb250ZXh0LCBtYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsKSk7XHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5fbG9hZGVyLmxvYWRNYXRlcmlhbFByb3BlcnRpZXNBc3luYyhjb250ZXh0LCBtYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsKSk7XHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5fbG9hZFZvbHVtZVByb3BlcnRpZXNBc3luYyhleHRlbnNpb25Db250ZXh0LCBtYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsLCBleHRlbnNpb24pKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IHt9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9sb2FkVm9sdW1lUHJvcGVydGllc0FzeW5jKGNvbnRleHQ6IHN0cmluZywgbWF0ZXJpYWw6IElNYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCwgZXh0ZW5zaW9uOiBJS0hSTWF0ZXJpYWxzVm9sdW1lKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgaWYgKCEoYmFieWxvbk1hdGVyaWFsIGluc3RhbmNlb2YgUEJSTWF0ZXJpYWwpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtjb250ZXh0fTogTWF0ZXJpYWwgdHlwZSBub3Qgc3VwcG9ydGVkYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiB0cmFuc3BhcmVuY3kgaXNuJ3QgZW5hYmxlZCBhbHJlYWR5LCB0aGlzIGV4dGVuc2lvbiBzaG91bGRuJ3QgZG8gYW55dGhpbmcuXHJcbiAgICAgICAgLy8gaS5lLiBpdCByZXF1aXJlcyBlaXRoZXIgdGhlIEtIUl9tYXRlcmlhbHNfdHJhbnNtaXNzaW9uIG9yIEtIUl9tYXRlcmlhbHNfdHJhbnNsdWNlbmN5IGV4dGVuc2lvbnMuXHJcbiAgICAgICAgaWYgKCghYmFieWxvbk1hdGVyaWFsLnN1YlN1cmZhY2UuaXNSZWZyYWN0aW9uRW5hYmxlZCAmJiAhYmFieWxvbk1hdGVyaWFsLnN1YlN1cmZhY2UuaXNUcmFuc2x1Y2VuY3lFbmFibGVkKSB8fCAhZXh0ZW5zaW9uLnRoaWNrbmVzc0ZhY3Rvcikge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJT1IgaW4gdGhpcyBleHRlbnNpb24gb25seSBhZmZlY3RzIGludGVyaW9yLlxyXG4gICAgICAgIGJhYnlsb25NYXRlcmlhbC5zdWJTdXJmYWNlLnZvbHVtZUluZGV4T2ZSZWZyYWN0aW9uID0gYmFieWxvbk1hdGVyaWFsLmluZGV4T2ZSZWZyYWN0aW9uO1xyXG4gICAgICAgIGNvbnN0IGF0dGVudWF0aW9uRGlzdGFuY2UgPSBleHRlbnNpb24uYXR0ZW51YXRpb25EaXN0YW5jZSAhPT0gdW5kZWZpbmVkID8gZXh0ZW5zaW9uLmF0dGVudWF0aW9uRGlzdGFuY2UgOiBOdW1iZXIuTUFYX1ZBTFVFO1xyXG4gICAgICAgIGJhYnlsb25NYXRlcmlhbC5zdWJTdXJmYWNlLnRpbnRDb2xvckF0RGlzdGFuY2UgPSBhdHRlbnVhdGlvbkRpc3RhbmNlO1xyXG4gICAgICAgIGlmIChleHRlbnNpb24uYXR0ZW51YXRpb25Db2xvciAhPT0gdW5kZWZpbmVkICYmIGV4dGVuc2lvbi5hdHRlbnVhdGlvbkNvbG9yLmxlbmd0aCA9PSAzKSB7XHJcbiAgICAgICAgICAgIGJhYnlsb25NYXRlcmlhbC5zdWJTdXJmYWNlLnRpbnRDb2xvci5jb3B5RnJvbUZsb2F0cyhleHRlbnNpb24uYXR0ZW51YXRpb25Db2xvclswXSwgZXh0ZW5zaW9uLmF0dGVudWF0aW9uQ29sb3JbMV0sIGV4dGVuc2lvbi5hdHRlbnVhdGlvbkNvbG9yWzJdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJhYnlsb25NYXRlcmlhbC5zdWJTdXJmYWNlLm1pbmltdW1UaGlja25lc3MgPSAwLjA7XHJcbiAgICAgICAgYmFieWxvbk1hdGVyaWFsLnN1YlN1cmZhY2UubWF4aW11bVRoaWNrbmVzcyA9IGV4dGVuc2lvbi50aGlja25lc3NGYWN0b3I7XHJcbiAgICAgICAgYmFieWxvbk1hdGVyaWFsLnN1YlN1cmZhY2UudXNlVGhpY2tuZXNzQXNEZXB0aCA9IHRydWU7XHJcbiAgICAgICAgaWYgKGV4dGVuc2lvbi50aGlja25lc3NUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgIChleHRlbnNpb24udGhpY2tuZXNzVGV4dHVyZSBhcyBJVGV4dHVyZUluZm8pLm5vbkNvbG9yRGF0YSA9IHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9sb2FkZXIubG9hZFRleHR1cmVJbmZvQXN5bmMoYCR7Y29udGV4dH0vdGhpY2tuZXNzVGV4dHVyZWAsIGV4dGVuc2lvbi50aGlja25lc3NUZXh0dXJlKS50aGVuKCh0ZXh0dXJlOiBCYXNlVGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsLnN1YlN1cmZhY2UudGhpY2tuZXNzVGV4dHVyZSA9IHRleHR1cmU7XHJcbiAgICAgICAgICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwuc3ViU3VyZmFjZS51c2VHbHRmU3R5bGVUZXh0dXJlcyA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkdMVEZMb2FkZXIuUmVnaXN0ZXJFeHRlbnNpb24oTkFNRSwgKGxvYWRlcikgPT4gbmV3IEtIUl9tYXRlcmlhbHNfdm9sdW1lKGxvYWRlcikpO1xyXG4iLCJpbXBvcnQgdHlwZSB7IElHTFRGTG9hZGVyRXh0ZW5zaW9uIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJFeHRlbnNpb25cIjtcclxuaW1wb3J0IHsgR0xURkxvYWRlciB9IGZyb20gXCIuLi9nbFRGTG9hZGVyXCI7XHJcblxyXG5jb25zdCBOQU1FID0gXCJLSFJfbWVzaF9xdWFudGl6YXRpb25cIjtcclxuXHJcbi8qKlxyXG4gKiBbU3BlY2lmaWNhdGlvbl0oaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFpbi9leHRlbnNpb25zLzIuMC9LaHJvbm9zL0tIUl9tZXNoX3F1YW50aXphdGlvbi9SRUFETUUubWQpXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBjbGFzcyBLSFJfbWVzaF9xdWFudGl6YXRpb24gaW1wbGVtZW50cyBJR0xURkxvYWRlckV4dGVuc2lvbiB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBuYW1lIG9mIHRoaXMgZXh0ZW5zaW9uLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZSA9IE5BTUU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgZW5hYmxlZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGVuYWJsZWQ6IGJvb2xlYW47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobG9hZGVyOiBHTFRGTG9hZGVyKSB7XHJcbiAgICAgICAgdGhpcy5lbmFibGVkID0gbG9hZGVyLmlzRXh0ZW5zaW9uVXNlZChOQU1FKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHt9XHJcbn1cclxuXHJcbkdMVEZMb2FkZXIuUmVnaXN0ZXJFeHRlbnNpb24oTkFNRSwgKGxvYWRlcikgPT4gbmV3IEtIUl9tZXNoX3F1YW50aXphdGlvbihsb2FkZXIpKTtcclxuIiwiaW1wb3J0IHR5cGUgeyBJR0xURkxvYWRlckV4dGVuc2lvbiB9IGZyb20gXCIuLi9nbFRGTG9hZGVyRXh0ZW5zaW9uXCI7XHJcbmltcG9ydCB7IEdMVEZMb2FkZXIsIEFycmF5SXRlbSB9IGZyb20gXCIuLi9nbFRGTG9hZGVyXCI7XHJcbmltcG9ydCB0eXBlIHsgSVRleHR1cmUgfSBmcm9tIFwiLi4vZ2xURkxvYWRlckludGVyZmFjZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBCYXNlVGV4dHVyZSB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9UZXh0dXJlcy9iYXNlVGV4dHVyZVwiO1xyXG5pbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcImNvcmUvdHlwZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBJS0hSVGV4dHVyZUJhc2lzVSB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuXHJcbmNvbnN0IE5BTUUgPSBcIktIUl90ZXh0dXJlX2Jhc2lzdVwiO1xyXG5cclxuLyoqXHJcbiAqIFtTcGVjaWZpY2F0aW9uXShodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi9tYWluL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX3RleHR1cmVfYmFzaXN1L1JFQURNRS5tZClcclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGNsYXNzIEtIUl90ZXh0dXJlX2Jhc2lzdSBpbXBsZW1lbnRzIElHTFRGTG9hZGVyRXh0ZW5zaW9uIHtcclxuICAgIC8qKiBUaGUgbmFtZSBvZiB0aGlzIGV4dGVuc2lvbi4gKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lID0gTkFNRTtcclxuXHJcbiAgICAvKiogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIGVuYWJsZWQuICovXHJcbiAgICBwdWJsaWMgZW5hYmxlZDogYm9vbGVhbjtcclxuXHJcbiAgICBwcml2YXRlIF9sb2FkZXI6IEdMVEZMb2FkZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobG9hZGVyOiBHTFRGTG9hZGVyKSB7XHJcbiAgICAgICAgdGhpcy5fbG9hZGVyID0gbG9hZGVyO1xyXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IGxvYWRlci5pc0V4dGVuc2lvblVzZWQoTkFNRSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgKHRoaXMuX2xvYWRlciBhcyBhbnkpID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgX2xvYWRUZXh0dXJlQXN5bmMoY29udGV4dDogc3RyaW5nLCB0ZXh0dXJlOiBJVGV4dHVyZSwgYXNzaWduOiAoYmFieWxvblRleHR1cmU6IEJhc2VUZXh0dXJlKSA9PiB2b2lkKTogTnVsbGFibGU8UHJvbWlzZTxCYXNlVGV4dHVyZT4+IHtcclxuICAgICAgICByZXR1cm4gR0xURkxvYWRlci5Mb2FkRXh0ZW5zaW9uQXN5bmM8SUtIUlRleHR1cmVCYXNpc1UsIEJhc2VUZXh0dXJlPihjb250ZXh0LCB0ZXh0dXJlLCB0aGlzLm5hbWUsIChleHRlbnNpb25Db250ZXh0LCBleHRlbnNpb24pID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc2FtcGxlciA9IHRleHR1cmUuc2FtcGxlciA9PSB1bmRlZmluZWQgPyBHTFRGTG9hZGVyLkRlZmF1bHRTYW1wbGVyIDogQXJyYXlJdGVtLkdldChgJHtjb250ZXh0fS9zYW1wbGVyYCwgdGhpcy5fbG9hZGVyLmdsdGYuc2FtcGxlcnMsIHRleHR1cmUuc2FtcGxlcik7XHJcbiAgICAgICAgICAgIGNvbnN0IGltYWdlID0gQXJyYXlJdGVtLkdldChgJHtleHRlbnNpb25Db250ZXh0fS9zb3VyY2VgLCB0aGlzLl9sb2FkZXIuZ2x0Zi5pbWFnZXMsIGV4dGVuc2lvbi5zb3VyY2UpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbG9hZGVyLl9jcmVhdGVUZXh0dXJlQXN5bmMoXHJcbiAgICAgICAgICAgICAgICBjb250ZXh0LFxyXG4gICAgICAgICAgICAgICAgc2FtcGxlcixcclxuICAgICAgICAgICAgICAgIGltYWdlLFxyXG4gICAgICAgICAgICAgICAgKGJhYnlsb25UZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXNzaWduKGJhYnlsb25UZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB0ZXh0dXJlLl90ZXh0dXJlSW5mby5ub25Db2xvckRhdGEgPyB7IHVzZVJHQkFJZkFTVENCQzdOb3RBdmFpbGFibGVXaGVuVUFTVEM6IHRydWUgfSA6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICF0ZXh0dXJlLl90ZXh0dXJlSW5mby5ub25Db2xvckRhdGFcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuR0xURkxvYWRlci5SZWdpc3RlckV4dGVuc2lvbihOQU1FLCAobG9hZGVyKSA9PiBuZXcgS0hSX3RleHR1cmVfYmFzaXN1KGxvYWRlcikpO1xyXG4iLCJpbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcImNvcmUvdHlwZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBCYXNlVGV4dHVyZSB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9UZXh0dXJlcy9iYXNlVGV4dHVyZVwiO1xyXG5pbXBvcnQgeyBUZXh0dXJlIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1RleHR1cmVzL3RleHR1cmVcIjtcclxuXHJcbmltcG9ydCB0eXBlIHsgSVRleHR1cmVJbmZvIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJJbnRlcmZhY2VzXCI7XHJcbmltcG9ydCB0eXBlIHsgSUdMVEZMb2FkZXJFeHRlbnNpb24gfSBmcm9tIFwiLi4vZ2xURkxvYWRlckV4dGVuc2lvblwiO1xyXG5pbXBvcnQgeyBHTFRGTG9hZGVyIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBJS0hSVGV4dHVyZVRyYW5zZm9ybSB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuXHJcbmNvbnN0IE5BTUUgPSBcIktIUl90ZXh0dXJlX3RyYW5zZm9ybVwiO1xyXG5cclxuLyoqXHJcbiAqIFtTcGVjaWZpY2F0aW9uXShodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi9tYWluL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX3RleHR1cmVfdHJhbnNmb3JtL1JFQURNRS5tZClcclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGNsYXNzIEtIUl90ZXh0dXJlX3RyYW5zZm9ybSBpbXBsZW1lbnRzIElHTFRGTG9hZGVyRXh0ZW5zaW9uIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIG5hbWUgb2YgdGhpcyBleHRlbnNpb24uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lID0gTkFNRTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyBlbmFibGVkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZW5hYmxlZDogYm9vbGVhbjtcclxuXHJcbiAgICBwcml2YXRlIF9sb2FkZXI6IEdMVEZMb2FkZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobG9hZGVyOiBHTFRGTG9hZGVyKSB7XHJcbiAgICAgICAgdGhpcy5fbG9hZGVyID0gbG9hZGVyO1xyXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRoaXMuX2xvYWRlci5pc0V4dGVuc2lvblVzZWQoTkFNRSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgKHRoaXMuX2xvYWRlciBhcyBhbnkpID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZFRleHR1cmVJbmZvQXN5bmMoY29udGV4dDogc3RyaW5nLCB0ZXh0dXJlSW5mbzogSVRleHR1cmVJbmZvLCBhc3NpZ246IChiYWJ5bG9uVGV4dHVyZTogQmFzZVRleHR1cmUpID0+IHZvaWQpOiBOdWxsYWJsZTxQcm9taXNlPEJhc2VUZXh0dXJlPj4ge1xyXG4gICAgICAgIHJldHVybiBHTFRGTG9hZGVyLkxvYWRFeHRlbnNpb25Bc3luYzxJS0hSVGV4dHVyZVRyYW5zZm9ybSwgQmFzZVRleHR1cmU+KGNvbnRleHQsIHRleHR1cmVJbmZvLCB0aGlzLm5hbWUsIChleHRlbnNpb25Db250ZXh0LCBleHRlbnNpb24pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRlci5sb2FkVGV4dHVyZUluZm9Bc3luYyhjb250ZXh0LCB0ZXh0dXJlSW5mbywgKGJhYnlsb25UZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIShiYWJ5bG9uVGV4dHVyZSBpbnN0YW5jZW9mIFRleHR1cmUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2V4dGVuc2lvbkNvbnRleHR9OiBUZXh0dXJlIHR5cGUgbm90IHN1cHBvcnRlZGApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChleHRlbnNpb24ub2Zmc2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFieWxvblRleHR1cmUudU9mZnNldCA9IGV4dGVuc2lvbi5vZmZzZXRbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgYmFieWxvblRleHR1cmUudk9mZnNldCA9IGV4dGVuc2lvbi5vZmZzZXRbMV07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQWx3YXlzIHJvdGF0ZSBhcm91bmQgdGhlIG9yaWdpbi5cclxuICAgICAgICAgICAgICAgIGJhYnlsb25UZXh0dXJlLnVSb3RhdGlvbkNlbnRlciA9IDA7XHJcbiAgICAgICAgICAgICAgICBiYWJ5bG9uVGV4dHVyZS52Um90YXRpb25DZW50ZXIgPSAwO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChleHRlbnNpb24ucm90YXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uVGV4dHVyZS53QW5nID0gLWV4dGVuc2lvbi5yb3RhdGlvbjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZXh0ZW5zaW9uLnNjYWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFieWxvblRleHR1cmUudVNjYWxlID0gZXh0ZW5zaW9uLnNjYWxlWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhYnlsb25UZXh0dXJlLnZTY2FsZSA9IGV4dGVuc2lvbi5zY2FsZVsxXTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZXh0ZW5zaW9uLnRleENvb3JkICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhYnlsb25UZXh0dXJlLmNvb3JkaW5hdGVzSW5kZXggPSBleHRlbnNpb24udGV4Q29vcmQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgYXNzaWduKGJhYnlsb25UZXh0dXJlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkdMVEZMb2FkZXIuUmVnaXN0ZXJFeHRlbnNpb24oTkFNRSwgKGxvYWRlcikgPT4gbmV3IEtIUl90ZXh0dXJlX3RyYW5zZm9ybShsb2FkZXIpKTtcclxuIiwiaW1wb3J0IHR5cGUgeyBJR0xURkxvYWRlckV4dGVuc2lvbiB9IGZyb20gXCIuLi9nbFRGTG9hZGVyRXh0ZW5zaW9uXCI7XHJcbmltcG9ydCB7IEdMVEZMb2FkZXIgfSBmcm9tIFwiLi4vZ2xURkxvYWRlclwiO1xyXG5pbXBvcnQgdHlwZSB7IElLSFJYbXBKc29uTGRfR2x0ZiwgSUtIUlhtcEpzb25MZF9Ob2RlIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5cclxuY29uc3QgTkFNRSA9IFwiS0hSX3htcF9qc29uX2xkXCI7XHJcblxyXG4vKipcclxuICogW1NwZWNpZmljYXRpb25dKGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9ibG9iL21haW4vZXh0ZW5zaW9ucy8yLjAvS2hyb25vcy9LSFJfeG1wX2pzb25fbGQvUkVBRE1FLm1kKVxyXG4gKiBAc2luY2UgNS4wLjBcclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGNsYXNzIEtIUl94bXBfanNvbl9sZCBpbXBsZW1lbnRzIElHTFRGTG9hZGVyRXh0ZW5zaW9uIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIG5hbWUgb2YgdGhpcyBleHRlbnNpb24uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lID0gTkFNRTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyBlbmFibGVkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZW5hYmxlZDogYm9vbGVhbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgYSBudW1iZXIgdGhhdCBkZXRlcm1pbmVzIHRoZSBvcmRlciB0aGUgZXh0ZW5zaW9ucyBhcmUgYXBwbGllZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIG9yZGVyID0gMTAwO1xyXG5cclxuICAgIHByaXZhdGUgX2xvYWRlcjogR0xURkxvYWRlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihsb2FkZXI6IEdMVEZMb2FkZXIpIHtcclxuICAgICAgICB0aGlzLl9sb2FkZXIgPSBsb2FkZXI7XHJcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdGhpcy5fbG9hZGVyLmlzRXh0ZW5zaW9uVXNlZChOQU1FKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHtcclxuICAgICAgICAodGhpcy5fbG9hZGVyIGFzIGFueSkgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIGFmdGVyIHRoZSBsb2FkZXIgc3RhdGUgY2hhbmdlcyB0byBMT0FESU5HLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb25Mb2FkaW5nKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl9sb2FkZXIucm9vdEJhYnlsb25NZXNoID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHhtcF9nbHRmID0gdGhpcy5fbG9hZGVyLmdsdGYuZXh0ZW5zaW9ucz8uS0hSX3htcF9qc29uX2xkIGFzIElLSFJYbXBKc29uTGRfR2x0ZjtcclxuICAgICAgICBjb25zdCB4bXBfbm9kZSA9IHRoaXMuX2xvYWRlci5nbHRmLmFzc2V0Py5leHRlbnNpb25zPy5LSFJfeG1wX2pzb25fbGQgYXMgSUtIUlhtcEpzb25MZF9Ob2RlO1xyXG4gICAgICAgIGlmICh4bXBfZ2x0ZiAmJiB4bXBfbm9kZSkge1xyXG4gICAgICAgICAgICBjb25zdCBwYWNrZXQgPSAreG1wX25vZGUucGFja2V0O1xyXG4gICAgICAgICAgICBpZiAoeG1wX2dsdGYucGFja2V0cyAmJiBwYWNrZXQgPCB4bXBfZ2x0Zi5wYWNrZXRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9hZGVyLnJvb3RCYWJ5bG9uTWVzaC5tZXRhZGF0YSA9IHRoaXMuX2xvYWRlci5yb290QmFieWxvbk1lc2gubWV0YWRhdGEgfHwge307XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2FkZXIucm9vdEJhYnlsb25NZXNoLm1ldGFkYXRhLnhtcCA9IHhtcF9nbHRmLnBhY2tldHNbcGFja2V0XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuR0xURkxvYWRlci5SZWdpc3RlckV4dGVuc2lvbihOQU1FLCAobG9hZGVyKSA9PiBuZXcgS0hSX3htcF9qc29uX2xkKGxvYWRlcikpO1xyXG4iLCJpbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcImNvcmUvdHlwZXNcIjtcclxuaW1wb3J0IHsgVmVjdG9yMyB9IGZyb20gXCJjb3JlL01hdGhzL21hdGgudmVjdG9yXCI7XHJcbmltcG9ydCB7IFRvb2xzIH0gZnJvbSBcImNvcmUvTWlzYy90b29sc1wiO1xyXG5pbXBvcnQgdHlwZSB7IEFuaW1hdGlvbkdyb3VwIH0gZnJvbSBcImNvcmUvQW5pbWF0aW9ucy9hbmltYXRpb25Hcm91cFwiO1xyXG5pbXBvcnQgeyBBbmltYXRpb25FdmVudCB9IGZyb20gXCJjb3JlL0FuaW1hdGlvbnMvYW5pbWF0aW9uRXZlbnRcIjtcclxuaW1wb3J0IHR5cGUgeyBUcmFuc2Zvcm1Ob2RlIH0gZnJvbSBcImNvcmUvTWVzaGVzL3RyYW5zZm9ybU5vZGVcIjtcclxuaW1wb3J0IHsgU291bmQgfSBmcm9tIFwiY29yZS9BdWRpby9zb3VuZFwiO1xyXG5pbXBvcnQgeyBXZWlnaHRlZFNvdW5kIH0gZnJvbSBcImNvcmUvQXVkaW8vd2VpZ2h0ZWRzb3VuZFwiO1xyXG5cclxuaW1wb3J0IHR5cGUgeyBJQXJyYXlJdGVtLCBJU2NlbmUsIElOb2RlLCBJQW5pbWF0aW9uIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJJbnRlcmZhY2VzXCI7XHJcbmltcG9ydCB0eXBlIHsgSUdMVEZMb2FkZXJFeHRlbnNpb24gfSBmcm9tIFwiLi4vZ2xURkxvYWRlckV4dGVuc2lvblwiO1xyXG5pbXBvcnQgeyBHTFRGTG9hZGVyLCBBcnJheUl0ZW0gfSBmcm9tIFwiLi4vZ2xURkxvYWRlclwiO1xyXG5pbXBvcnQgdHlwZSB7IElNU0ZUQXVkaW9FbWl0dGVyX0NsaXAsIElNU0ZUQXVkaW9FbWl0dGVyX0VtaXR0ZXIsIElNU0ZUQXVkaW9FbWl0dGVyX0VtaXR0ZXJzUmVmZXJlbmNlLCBJTVNGVEF1ZGlvRW1pdHRlcl9BbmltYXRpb25FdmVudCB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgSU1TRlRBdWRpb0VtaXR0ZXJfQW5pbWF0aW9uRXZlbnRBY3Rpb24gfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcblxyXG5jb25zdCBOQU1FID0gXCJNU0ZUX2F1ZGlvX2VtaXR0ZXJcIjtcclxuXHJcbmludGVyZmFjZSBJTG9hZGVyQ2xpcCBleHRlbmRzIElNU0ZUQXVkaW9FbWl0dGVyX0NsaXAsIElBcnJheUl0ZW0ge1xyXG4gICAgX29iamVjdFVSTD86IFByb21pc2U8c3RyaW5nPjtcclxufVxyXG5cclxuaW50ZXJmYWNlIElMb2FkZXJFbWl0dGVyIGV4dGVuZHMgSU1TRlRBdWRpb0VtaXR0ZXJfRW1pdHRlciwgSUFycmF5SXRlbSB7XHJcbiAgICBfYmFieWxvbkRhdGE/OiB7XHJcbiAgICAgICAgc291bmQ/OiBXZWlnaHRlZFNvdW5kO1xyXG4gICAgICAgIGxvYWRlZDogUHJvbWlzZTx2b2lkPjtcclxuICAgIH07XHJcbiAgICBfYmFieWxvblNvdW5kczogU291bmRbXTtcclxufVxyXG5cclxuaW50ZXJmYWNlIElNU0ZUQXVkaW9FbWl0dGVyIHtcclxuICAgIGNsaXBzOiBJTG9hZGVyQ2xpcFtdO1xyXG4gICAgZW1pdHRlcnM6IElMb2FkZXJFbWl0dGVyW107XHJcbn1cclxuXHJcbmludGVyZmFjZSBJTG9hZGVyQW5pbWF0aW9uRXZlbnQgZXh0ZW5kcyBJTVNGVEF1ZGlvRW1pdHRlcl9BbmltYXRpb25FdmVudCwgSUFycmF5SXRlbSB7fVxyXG5cclxuaW50ZXJmYWNlIElMb2FkZXJBbmltYXRpb25FdmVudHMge1xyXG4gICAgZXZlbnRzOiBJTG9hZGVyQW5pbWF0aW9uRXZlbnRbXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFtTcGVjaWZpY2F0aW9uXShodHRwczovL2dpdGh1Yi5jb20vbmFqYWRvam8vZ2xURi9ibG9iL01TRlRfYXVkaW9fZW1pdHRlci9leHRlbnNpb25zLzIuMC9WZW5kb3IvTVNGVF9hdWRpb19lbWl0dGVyL1JFQURNRS5tZClcclxuICogISEhIEV4cGVyaW1lbnRhbCBFeHRlbnNpb24gU3ViamVjdCB0byBDaGFuZ2VzICEhIVxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgY2xhc3MgTVNGVF9hdWRpb19lbWl0dGVyIGltcGxlbWVudHMgSUdMVEZMb2FkZXJFeHRlbnNpb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGlzIGV4dGVuc2lvbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBOQU1FO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIGVuYWJsZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBlbmFibGVkOiBib29sZWFuO1xyXG5cclxuICAgIHByaXZhdGUgX2xvYWRlcjogR0xURkxvYWRlcjtcclxuICAgIHByaXZhdGUgX2NsaXBzOiBBcnJheTxJTG9hZGVyQ2xpcD47XHJcbiAgICBwcml2YXRlIF9lbWl0dGVyczogQXJyYXk8SUxvYWRlckVtaXR0ZXI+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGxvYWRlcjogR0xURkxvYWRlcikge1xyXG4gICAgICAgIHRoaXMuX2xvYWRlciA9IGxvYWRlcjtcclxuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0aGlzLl9sb2FkZXIuaXNFeHRlbnNpb25Vc2VkKE5BTUUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge1xyXG4gICAgICAgICh0aGlzLl9sb2FkZXIgYXMgYW55KSA9IG51bGw7XHJcbiAgICAgICAgKHRoaXMuX2NsaXBzIGFzIGFueSkgPSBudWxsO1xyXG4gICAgICAgICh0aGlzLl9lbWl0dGVycyBhcyBhbnkpID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgb25Mb2FkaW5nKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGV4dGVuc2lvbnMgPSB0aGlzLl9sb2FkZXIuZ2x0Zi5leHRlbnNpb25zO1xyXG4gICAgICAgIGlmIChleHRlbnNpb25zICYmIGV4dGVuc2lvbnNbdGhpcy5uYW1lXSkge1xyXG4gICAgICAgICAgICBjb25zdCBleHRlbnNpb24gPSBleHRlbnNpb25zW3RoaXMubmFtZV0gYXMgSU1TRlRBdWRpb0VtaXR0ZXI7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9jbGlwcyA9IGV4dGVuc2lvbi5jbGlwcztcclxuICAgICAgICAgICAgdGhpcy5fZW1pdHRlcnMgPSBleHRlbnNpb24uZW1pdHRlcnM7XHJcblxyXG4gICAgICAgICAgICBBcnJheUl0ZW0uQXNzaWduKHRoaXMuX2NsaXBzKTtcclxuICAgICAgICAgICAgQXJyYXlJdGVtLkFzc2lnbih0aGlzLl9lbWl0dGVycyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkU2NlbmVBc3luYyhjb250ZXh0OiBzdHJpbmcsIHNjZW5lOiBJU2NlbmUpOiBOdWxsYWJsZTxQcm9taXNlPHZvaWQ+PiB7XHJcbiAgICAgICAgcmV0dXJuIEdMVEZMb2FkZXIuTG9hZEV4dGVuc2lvbkFzeW5jPElNU0ZUQXVkaW9FbWl0dGVyX0VtaXR0ZXJzUmVmZXJlbmNlPihjb250ZXh0LCBzY2VuZSwgdGhpcy5uYW1lLCAoZXh0ZW5zaW9uQ29udGV4dCwgZXh0ZW5zaW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb21pc2VzID0gbmV3IEFycmF5PFByb21pc2U8YW55Pj4oKTtcclxuXHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5fbG9hZGVyLmxvYWRTY2VuZUFzeW5jKGNvbnRleHQsIHNjZW5lKSk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVtaXR0ZXJJbmRleCBvZiBleHRlbnNpb24uZW1pdHRlcnMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVtaXR0ZXIgPSBBcnJheUl0ZW0uR2V0KGAke2V4dGVuc2lvbkNvbnRleHR9L2VtaXR0ZXJzYCwgdGhpcy5fZW1pdHRlcnMsIGVtaXR0ZXJJbmRleCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgZW1pdHRlci5yZWZEaXN0YW5jZSAhPSB1bmRlZmluZWQgfHxcclxuICAgICAgICAgICAgICAgICAgICBlbWl0dGVyLm1heERpc3RhbmNlICE9IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGVtaXR0ZXIucm9sbG9mZkZhY3RvciAhPSB1bmRlZmluZWQgfHxcclxuICAgICAgICAgICAgICAgICAgICBlbWl0dGVyLmRpc3RhbmNlTW9kZWwgIT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgZW1pdHRlci5pbm5lckFuZ2xlICE9IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGVtaXR0ZXIub3V0ZXJBbmdsZSAhPSB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtleHRlbnNpb25Db250ZXh0fTogRGlyZWN0aW9uIG9yIERpc3RhbmNlIHByb3BlcnRpZXMgYXJlIG5vdCBhbGxvd2VkIG9uIGVtaXR0ZXJzIGF0dGFjaGVkIHRvIGEgc2NlbmVgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMuX2xvYWRFbWl0dGVyQXN5bmMoYCR7ZXh0ZW5zaW9uQ29udGV4dH0vZW1pdHRlcnMvJHtlbWl0dGVyLmluZGV4fWAsIGVtaXR0ZXIpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IHt9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZE5vZGVBc3luYyhjb250ZXh0OiBzdHJpbmcsIG5vZGU6IElOb2RlLCBhc3NpZ246IChiYWJ5bG9uVHJhbnNmb3JtTm9kZTogVHJhbnNmb3JtTm9kZSkgPT4gdm9pZCk6IE51bGxhYmxlPFByb21pc2U8VHJhbnNmb3JtTm9kZT4+IHtcclxuICAgICAgICByZXR1cm4gR0xURkxvYWRlci5Mb2FkRXh0ZW5zaW9uQXN5bmM8SU1TRlRBdWRpb0VtaXR0ZXJfRW1pdHRlcnNSZWZlcmVuY2UsIFRyYW5zZm9ybU5vZGU+KGNvbnRleHQsIG5vZGUsIHRoaXMubmFtZSwgKGV4dGVuc2lvbkNvbnRleHQsIGV4dGVuc2lvbikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9taXNlcyA9IG5ldyBBcnJheTxQcm9taXNlPGFueT4+KCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbG9hZGVyXHJcbiAgICAgICAgICAgICAgICAubG9hZE5vZGVBc3luYyhleHRlbnNpb25Db250ZXh0LCBub2RlLCAoYmFieWxvbk1lc2gpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGVtaXR0ZXJJbmRleCBvZiBleHRlbnNpb24uZW1pdHRlcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZW1pdHRlciA9IEFycmF5SXRlbS5HZXQoYCR7ZXh0ZW5zaW9uQ29udGV4dH0vZW1pdHRlcnNgLCB0aGlzLl9lbWl0dGVycywgZW1pdHRlckluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRFbWl0dGVyQXN5bmMoYCR7ZXh0ZW5zaW9uQ29udGV4dH0vZW1pdHRlcnMvJHtlbWl0dGVyLmluZGV4fWAsIGVtaXR0ZXIpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgc291bmQgb2YgZW1pdHRlci5fYmFieWxvblNvdW5kcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VuZC5hdHRhY2hUb01lc2goYmFieWxvbk1lc2gpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZW1pdHRlci5pbm5lckFuZ2xlICE9IHVuZGVmaW5lZCB8fCBlbWl0dGVyLm91dGVyQW5nbGUgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VuZC5zZXRMb2NhbERpcmVjdGlvblRvTWVzaChWZWN0b3IzLkZvcndhcmQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VuZC5zZXREaXJlY3Rpb25hbENvbmUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMiAqIFRvb2xzLlRvRGVncmVlcyhlbWl0dGVyLmlubmVyQW5nbGUgPT0gdW5kZWZpbmVkID8gTWF0aC5QSSA6IGVtaXR0ZXIuaW5uZXJBbmdsZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMiAqIFRvb2xzLlRvRGVncmVlcyhlbWl0dGVyLm91dGVyQW5nbGUgPT0gdW5kZWZpbmVkID8gTWF0aC5QSSA6IGVtaXR0ZXIub3V0ZXJBbmdsZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBhc3NpZ24oYmFieWxvbk1lc2gpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChiYWJ5bG9uTWVzaCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBiYWJ5bG9uTWVzaDtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkQW5pbWF0aW9uQXN5bmMoY29udGV4dDogc3RyaW5nLCBhbmltYXRpb246IElBbmltYXRpb24pOiBOdWxsYWJsZTxQcm9taXNlPEFuaW1hdGlvbkdyb3VwPj4ge1xyXG4gICAgICAgIHJldHVybiBHTFRGTG9hZGVyLkxvYWRFeHRlbnNpb25Bc3luYzxJTG9hZGVyQW5pbWF0aW9uRXZlbnRzLCBBbmltYXRpb25Hcm91cD4oY29udGV4dCwgYW5pbWF0aW9uLCB0aGlzLm5hbWUsIChleHRlbnNpb25Db250ZXh0LCBleHRlbnNpb24pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRlci5sb2FkQW5pbWF0aW9uQXN5bmMoY29udGV4dCwgYW5pbWF0aW9uKS50aGVuKChiYWJ5bG9uQW5pbWF0aW9uR3JvdXApID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb21pc2VzID0gbmV3IEFycmF5PFByb21pc2U8YW55Pj4oKTtcclxuXHJcbiAgICAgICAgICAgICAgICBBcnJheUl0ZW0uQXNzaWduKGV4dGVuc2lvbi5ldmVudHMpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBldmVudCBvZiBleHRlbnNpb24uZXZlbnRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaCh0aGlzLl9sb2FkQW5pbWF0aW9uRXZlbnRBc3luYyhgJHtleHRlbnNpb25Db250ZXh0fS9ldmVudHMvJHtldmVudC5pbmRleH1gLCBjb250ZXh0LCBhbmltYXRpb24sIGV2ZW50LCBiYWJ5bG9uQW5pbWF0aW9uR3JvdXApKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBiYWJ5bG9uQW5pbWF0aW9uR3JvdXA7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZENsaXBBc3luYyhjb250ZXh0OiBzdHJpbmcsIGNsaXA6IElMb2FkZXJDbGlwKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICBpZiAoY2xpcC5fb2JqZWN0VVJMKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjbGlwLl9vYmplY3RVUkw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcHJvbWlzZTogUHJvbWlzZTxBcnJheUJ1ZmZlclZpZXc+O1xyXG4gICAgICAgIGlmIChjbGlwLnVyaSkge1xyXG4gICAgICAgICAgICBwcm9taXNlID0gdGhpcy5fbG9hZGVyLmxvYWRVcmlBc3luYyhjb250ZXh0LCBjbGlwLCBjbGlwLnVyaSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgYnVmZmVyVmlldyA9IEFycmF5SXRlbS5HZXQoYCR7Y29udGV4dH0vYnVmZmVyVmlld2AsIHRoaXMuX2xvYWRlci5nbHRmLmJ1ZmZlclZpZXdzLCBjbGlwLmJ1ZmZlclZpZXcpO1xyXG4gICAgICAgICAgICBwcm9taXNlID0gdGhpcy5fbG9hZGVyLmxvYWRCdWZmZXJWaWV3QXN5bmMoYC9idWZmZXJWaWV3cy8ke2J1ZmZlclZpZXcuaW5kZXh9YCwgYnVmZmVyVmlldyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjbGlwLl9vYmplY3RVUkwgPSBwcm9taXNlLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIFVSTC5jcmVhdGVPYmplY3RVUkwobmV3IEJsb2IoW2RhdGFdLCB7IHR5cGU6IGNsaXAubWltZVR5cGUgfSkpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gY2xpcC5fb2JqZWN0VVJMO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2xvYWRFbWl0dGVyQXN5bmMoY29udGV4dDogc3RyaW5nLCBlbWl0dGVyOiBJTG9hZGVyRW1pdHRlcik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGVtaXR0ZXIuX2JhYnlsb25Tb3VuZHMgPSBlbWl0dGVyLl9iYWJ5bG9uU291bmRzIHx8IFtdO1xyXG4gICAgICAgIGlmICghZW1pdHRlci5fYmFieWxvbkRhdGEpIHtcclxuICAgICAgICAgICAgY29uc3QgY2xpcFByb21pc2VzID0gbmV3IEFycmF5PFByb21pc2U8YW55Pj4oKTtcclxuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGVtaXR0ZXIubmFtZSB8fCBgZW1pdHRlciR7ZW1pdHRlci5pbmRleH1gO1xyXG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgbG9vcDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB2b2x1bWU6IGVtaXR0ZXIudm9sdW1lID09IHVuZGVmaW5lZCA/IDEgOiBlbWl0dGVyLnZvbHVtZSxcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW1pdHRlci5jbGlwcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2xpcENvbnRleHQgPSBgL2V4dGVuc2lvbnMvJHt0aGlzLm5hbWV9L2NsaXBzYDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNsaXAgPSBBcnJheUl0ZW0uR2V0KGNsaXBDb250ZXh0LCB0aGlzLl9jbGlwcywgZW1pdHRlci5jbGlwc1tpXS5jbGlwKTtcclxuICAgICAgICAgICAgICAgIGNsaXBQcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRDbGlwQXN5bmMoYCR7Y2xpcENvbnRleHR9LyR7ZW1pdHRlci5jbGlwc1tpXS5jbGlwfWAsIGNsaXApLnRoZW4oKG9iamVjdFVSTDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNvdW5kID0gKGVtaXR0ZXIuX2JhYnlsb25Tb3VuZHNbaV0gPSBuZXcgU291bmQobmFtZSwgb2JqZWN0VVJMLCB0aGlzLl9sb2FkZXIuYmFieWxvblNjZW5lLCBudWxsLCBvcHRpb25zKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdW5kLnJlZkRpc3RhbmNlID0gZW1pdHRlci5yZWZEaXN0YW5jZSB8fCAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VuZC5tYXhEaXN0YW5jZSA9IGVtaXR0ZXIubWF4RGlzdGFuY2UgfHwgMjU2O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VuZC5yb2xsb2ZmRmFjdG9yID0gZW1pdHRlci5yb2xsb2ZmRmFjdG9yIHx8IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdW5kLmRpc3RhbmNlTW9kZWwgPSBlbWl0dGVyLmRpc3RhbmNlTW9kZWwgfHwgXCJleHBvbmVudGlhbFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwcm9taXNlID0gUHJvbWlzZS5hbGwoY2xpcFByb21pc2VzKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHdlaWdodHMgPSBlbWl0dGVyLmNsaXBzLm1hcCgoY2xpcCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjbGlwLndlaWdodCB8fCAxO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB3ZWlnaHRlZFNvdW5kID0gbmV3IFdlaWdodGVkU291bmQoZW1pdHRlci5sb29wIHx8IGZhbHNlLCBlbWl0dGVyLl9iYWJ5bG9uU291bmRzLCB3ZWlnaHRzKTtcclxuICAgICAgICAgICAgICAgIGlmIChlbWl0dGVyLmlubmVyQW5nbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB3ZWlnaHRlZFNvdW5kLmRpcmVjdGlvbmFsQ29uZUlubmVyQW5nbGUgPSAyICogVG9vbHMuVG9EZWdyZWVzKGVtaXR0ZXIuaW5uZXJBbmdsZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZW1pdHRlci5vdXRlckFuZ2xlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2VpZ2h0ZWRTb3VuZC5kaXJlY3Rpb25hbENvbmVPdXRlckFuZ2xlID0gMiAqIFRvb2xzLlRvRGVncmVlcyhlbWl0dGVyLm91dGVyQW5nbGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGVtaXR0ZXIudm9sdW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2VpZ2h0ZWRTb3VuZC52b2x1bWUgPSBlbWl0dGVyLnZvbHVtZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVtaXR0ZXIuX2JhYnlsb25EYXRhIS5zb3VuZCA9IHdlaWdodGVkU291bmQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgZW1pdHRlci5fYmFieWxvbkRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICBsb2FkZWQ6IHByb21pc2UsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZW1pdHRlci5fYmFieWxvbkRhdGEubG9hZGVkO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2dldEV2ZW50QWN0aW9uKFxyXG4gICAgICAgIGNvbnRleHQ6IHN0cmluZyxcclxuICAgICAgICBzb3VuZDogV2VpZ2h0ZWRTb3VuZCxcclxuICAgICAgICBhY3Rpb246IElNU0ZUQXVkaW9FbWl0dGVyX0FuaW1hdGlvbkV2ZW50QWN0aW9uLFxyXG4gICAgICAgIHRpbWU6IG51bWJlcixcclxuICAgICAgICBzdGFydE9mZnNldD86IG51bWJlclxyXG4gICAgKTogKGN1cnJlbnRGcmFtZTogbnVtYmVyKSA9PiB2b2lkIHtcclxuICAgICAgICBzd2l0Y2ggKGFjdGlvbikge1xyXG4gICAgICAgICAgICBjYXNlIElNU0ZUQXVkaW9FbWl0dGVyX0FuaW1hdGlvbkV2ZW50QWN0aW9uLnBsYXk6IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoY3VycmVudEZyYW1lOiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmcmFtZU9mZnNldCA9IChzdGFydE9mZnNldCB8fCAwKSArIChjdXJyZW50RnJhbWUgLSB0aW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBzb3VuZC5wbGF5KGZyYW1lT2Zmc2V0KTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBJTVNGVEF1ZGlvRW1pdHRlcl9BbmltYXRpb25FdmVudEFjdGlvbi5zdG9wOiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBJTVNGVEF1ZGlvRW1pdHRlcl9BbmltYXRpb25FdmVudEFjdGlvbi5wYXVzZToge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzb3VuZC5wYXVzZSgpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7Y29udGV4dH06IFVuc3VwcG9ydGVkIGFjdGlvbiAke2FjdGlvbn1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9sb2FkQW5pbWF0aW9uRXZlbnRBc3luYyhcclxuICAgICAgICBjb250ZXh0OiBzdHJpbmcsXHJcbiAgICAgICAgYW5pbWF0aW9uQ29udGV4dDogc3RyaW5nLFxyXG4gICAgICAgIGFuaW1hdGlvbjogSUFuaW1hdGlvbixcclxuICAgICAgICBldmVudDogSUxvYWRlckFuaW1hdGlvbkV2ZW50LFxyXG4gICAgICAgIGJhYnlsb25BbmltYXRpb25Hcm91cDogQW5pbWF0aW9uR3JvdXBcclxuICAgICk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGlmIChiYWJ5bG9uQW5pbWF0aW9uR3JvdXAudGFyZ2V0ZWRBbmltYXRpb25zLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYmFieWxvbkFuaW1hdGlvbiA9IGJhYnlsb25BbmltYXRpb25Hcm91cC50YXJnZXRlZEFuaW1hdGlvbnNbMF07XHJcbiAgICAgICAgY29uc3QgZW1pdHRlckluZGV4ID0gZXZlbnQuZW1pdHRlcjtcclxuICAgICAgICBjb25zdCBlbWl0dGVyID0gQXJyYXlJdGVtLkdldChgL2V4dGVuc2lvbnMvJHt0aGlzLm5hbWV9L2VtaXR0ZXJzYCwgdGhpcy5fZW1pdHRlcnMsIGVtaXR0ZXJJbmRleCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRFbWl0dGVyQXN5bmMoY29udGV4dCwgZW1pdHRlcikudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNvdW5kID0gZW1pdHRlci5fYmFieWxvbkRhdGEhLnNvdW5kO1xyXG4gICAgICAgICAgICBpZiAoc291bmQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJhYnlsb25BbmltYXRpb25FdmVudCA9IG5ldyBBbmltYXRpb25FdmVudChldmVudC50aW1lLCB0aGlzLl9nZXRFdmVudEFjdGlvbihjb250ZXh0LCBzb3VuZCwgZXZlbnQuYWN0aW9uLCBldmVudC50aW1lLCBldmVudC5zdGFydE9mZnNldCkpO1xyXG4gICAgICAgICAgICAgICAgYmFieWxvbkFuaW1hdGlvbi5hbmltYXRpb24uYWRkRXZlbnQoYmFieWxvbkFuaW1hdGlvbkV2ZW50KTtcclxuICAgICAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSBhbGwgc3RhcnRlZCBhdWRpbyBzdG9wcyB3aGVuIHRoaXMgYW5pbWF0aW9uIGlzIHRlcm1pbmF0ZWQuXHJcbiAgICAgICAgICAgICAgICBiYWJ5bG9uQW5pbWF0aW9uR3JvdXAub25BbmltYXRpb25Hcm91cEVuZE9ic2VydmFibGUuYWRkKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJhYnlsb25BbmltYXRpb25Hcm91cC5vbkFuaW1hdGlvbkdyb3VwUGF1c2VPYnNlcnZhYmxlLmFkZCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc291bmQucGF1c2UoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkdMVEZMb2FkZXIuUmVnaXN0ZXJFeHRlbnNpb24oTkFNRSwgKGxvYWRlcikgPT4gbmV3IE1TRlRfYXVkaW9fZW1pdHRlcihsb2FkZXIpKTtcclxuIiwiaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCJjb3JlL3R5cGVzXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwiY29yZS9NaXNjL29ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgRGVmZXJyZWQgfSBmcm9tIFwiY29yZS9NaXNjL2RlZmVycmVkXCI7XHJcbmltcG9ydCB0eXBlIHsgTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHR5cGUgeyBUcmFuc2Zvcm1Ob2RlIH0gZnJvbSBcImNvcmUvTWVzaGVzL3RyYW5zZm9ybU5vZGVcIjtcclxuaW1wb3J0IHR5cGUgeyBNZXNoIH0gZnJvbSBcImNvcmUvTWVzaGVzL21lc2hcIjtcclxuaW1wb3J0IHR5cGUgeyBCYXNlVGV4dHVyZSB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9UZXh0dXJlcy9iYXNlVGV4dHVyZVwiO1xyXG5pbXBvcnQgdHlwZSB7IElOb2RlLCBJTWF0ZXJpYWwsIElCdWZmZXIsIElTY2VuZSB9IGZyb20gXCIuLi9nbFRGTG9hZGVySW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQgdHlwZSB7IElHTFRGTG9hZGVyRXh0ZW5zaW9uIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJFeHRlbnNpb25cIjtcclxuaW1wb3J0IHsgR0xURkxvYWRlciwgQXJyYXlJdGVtIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBJUHJvcGVydHksIElNU0ZUTE9EIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5cclxuY29uc3QgTkFNRSA9IFwiTVNGVF9sb2RcIjtcclxuXHJcbmludGVyZmFjZSBJQnVmZmVySW5mbyB7XHJcbiAgICBzdGFydDogbnVtYmVyO1xyXG4gICAgZW5kOiBudW1iZXI7XHJcbiAgICBsb2FkZWQ6IERlZmVycmVkPEFycmF5QnVmZmVyVmlldz47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBbU3BlY2lmaWNhdGlvbl0oaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFpbi9leHRlbnNpb25zLzIuMC9WZW5kb3IvTVNGVF9sb2QvUkVBRE1FLm1kKVxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgY2xhc3MgTVNGVF9sb2QgaW1wbGVtZW50cyBJR0xURkxvYWRlckV4dGVuc2lvbiB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBuYW1lIG9mIHRoaXMgZXh0ZW5zaW9uLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZSA9IE5BTUU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgZW5hYmxlZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGVuYWJsZWQ6IGJvb2xlYW47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIGEgbnVtYmVyIHRoYXQgZGV0ZXJtaW5lcyB0aGUgb3JkZXIgdGhlIGV4dGVuc2lvbnMgYXJlIGFwcGxpZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvcmRlciA9IDEwMDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIE1heGltdW0gbnVtYmVyIG9mIExPRHMgdG8gbG9hZCwgc3RhcnRpbmcgZnJvbSB0aGUgbG93ZXN0IExPRC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIG1heExPRHNUb0xvYWQgPSAxMDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIE9ic2VydmFibGUgcmFpc2VkIHdoZW4gYWxsIG5vZGUgTE9EcyBvZiBvbmUgbGV2ZWwgYXJlIGxvYWRlZC5cclxuICAgICAqIFRoZSBldmVudCBkYXRhIGlzIHRoZSBpbmRleCBvZiB0aGUgbG9hZGVkIExPRCBzdGFydGluZyBmcm9tIHplcm8uXHJcbiAgICAgKiBEaXNwb3NlIHRoZSBsb2FkZXIgdG8gY2FuY2VsIHRoZSBsb2FkaW5nIG9mIHRoZSBuZXh0IGxldmVsIG9mIExPRHMuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvbk5vZGVMT0RzTG9hZGVkT2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlPG51bWJlcj4oKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIE9ic2VydmFibGUgcmFpc2VkIHdoZW4gYWxsIG1hdGVyaWFsIExPRHMgb2Ygb25lIGxldmVsIGFyZSBsb2FkZWQuXHJcbiAgICAgKiBUaGUgZXZlbnQgZGF0YSBpcyB0aGUgaW5kZXggb2YgdGhlIGxvYWRlZCBMT0Qgc3RhcnRpbmcgZnJvbSB6ZXJvLlxyXG4gICAgICogRGlzcG9zZSB0aGUgbG9hZGVyIHRvIGNhbmNlbCB0aGUgbG9hZGluZyBvZiB0aGUgbmV4dCBsZXZlbCBvZiBMT0RzLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb25NYXRlcmlhbExPRHNMb2FkZWRPYnNlcnZhYmxlID0gbmV3IE9ic2VydmFibGU8bnVtYmVyPigpO1xyXG5cclxuICAgIHByaXZhdGUgX2xvYWRlcjogR0xURkxvYWRlcjtcclxuXHJcbiAgICBwcml2YXRlIF9idWZmZXJMT0RzID0gbmV3IEFycmF5PElCdWZmZXJJbmZvPigpO1xyXG5cclxuICAgIHByaXZhdGUgX25vZGVJbmRleExPRDogTnVsbGFibGU8bnVtYmVyPiA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9ub2RlU2lnbmFsTE9EcyA9IG5ldyBBcnJheTxEZWZlcnJlZDx2b2lkPj4oKTtcclxuICAgIHByaXZhdGUgX25vZGVQcm9taXNlTE9EcyA9IG5ldyBBcnJheTxBcnJheTxQcm9taXNlPGFueT4+PigpO1xyXG4gICAgcHJpdmF0ZSBfbm9kZUJ1ZmZlckxPRHMgPSBuZXcgQXJyYXk8SUJ1ZmZlckluZm8+KCk7XHJcblxyXG4gICAgcHJpdmF0ZSBfbWF0ZXJpYWxJbmRleExPRDogTnVsbGFibGU8bnVtYmVyPiA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9tYXRlcmlhbFNpZ25hbExPRHMgPSBuZXcgQXJyYXk8RGVmZXJyZWQ8dm9pZD4+KCk7XHJcbiAgICBwcml2YXRlIF9tYXRlcmlhbFByb21pc2VMT0RzID0gbmV3IEFycmF5PEFycmF5PFByb21pc2U8YW55Pj4+KCk7XHJcbiAgICBwcml2YXRlIF9tYXRlcmlhbEJ1ZmZlckxPRHMgPSBuZXcgQXJyYXk8SUJ1ZmZlckluZm8+KCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobG9hZGVyOiBHTFRGTG9hZGVyKSB7XHJcbiAgICAgICAgdGhpcy5fbG9hZGVyID0gbG9hZGVyO1xyXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRoaXMuX2xvYWRlci5pc0V4dGVuc2lvblVzZWQoTkFNRSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgKHRoaXMuX2xvYWRlciBhcyBhbnkpID0gbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5fbm9kZUluZGV4TE9EID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9ub2RlU2lnbmFsTE9Ecy5sZW5ndGggPSAwO1xyXG4gICAgICAgIHRoaXMuX25vZGVQcm9taXNlTE9Ecy5sZW5ndGggPSAwO1xyXG4gICAgICAgIHRoaXMuX25vZGVCdWZmZXJMT0RzLmxlbmd0aCA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMuX21hdGVyaWFsSW5kZXhMT0QgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX21hdGVyaWFsU2lnbmFsTE9Ecy5sZW5ndGggPSAwO1xyXG4gICAgICAgIHRoaXMuX21hdGVyaWFsUHJvbWlzZUxPRHMubGVuZ3RoID0gMDtcclxuICAgICAgICB0aGlzLl9tYXRlcmlhbEJ1ZmZlckxPRHMubGVuZ3RoID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5vbk1hdGVyaWFsTE9Ec0xvYWRlZE9ic2VydmFibGUuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLm9uTm9kZUxPRHNMb2FkZWRPYnNlcnZhYmxlLmNsZWFyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIG9uUmVhZHkoKTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXhMT0QgPSAwOyBpbmRleExPRCA8IHRoaXMuX25vZGVQcm9taXNlTE9Ecy5sZW5ndGg7IGluZGV4TE9EKyspIHtcclxuICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IFByb21pc2UuYWxsKHRoaXMuX25vZGVQcm9taXNlTE9Ec1tpbmRleExPRF0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4TE9EICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9hZGVyLmVuZFBlcmZvcm1hbmNlQ291bnRlcihgTm9kZSBMT0QgJHtpbmRleExPRH1gKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2FkZXIubG9nKGBMb2FkZWQgbm9kZSBMT0QgJHtpbmRleExPRH1gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uTm9kZUxPRHNMb2FkZWRPYnNlcnZhYmxlLm5vdGlmeU9ic2VydmVycyhpbmRleExPRCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4TE9EICE9PSB0aGlzLl9ub2RlUHJvbWlzZUxPRHMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRlci5zdGFydFBlcmZvcm1hbmNlQ291bnRlcihgTm9kZSBMT0QgJHtpbmRleExPRCArIDF9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9hZEJ1ZmZlckxPRCh0aGlzLl9ub2RlQnVmZmVyTE9EcywgaW5kZXhMT0QgKyAxKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fbm9kZVNpZ25hbExPRHNbaW5kZXhMT0RdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX25vZGVTaWduYWxMT0RzW2luZGV4TE9EXS5yZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2xvYWRlci5fY29tcGxldGVQcm9taXNlcy5wdXNoKHByb21pc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXhMT0QgPSAwOyBpbmRleExPRCA8IHRoaXMuX21hdGVyaWFsUHJvbWlzZUxPRHMubGVuZ3RoOyBpbmRleExPRCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb21pc2UgPSBQcm9taXNlLmFsbCh0aGlzLl9tYXRlcmlhbFByb21pc2VMT0RzW2luZGV4TE9EXSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXhMT0QgIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2FkZXIuZW5kUGVyZm9ybWFuY2VDb3VudGVyKGBNYXRlcmlhbCBMT0QgJHtpbmRleExPRH1gKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2FkZXIubG9nKGBMb2FkZWQgbWF0ZXJpYWwgTE9EICR7aW5kZXhMT0R9YCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5vbk1hdGVyaWFsTE9Ec0xvYWRlZE9ic2VydmFibGUubm90aWZ5T2JzZXJ2ZXJzKGluZGV4TE9EKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXhMT0QgIT09IHRoaXMuX21hdGVyaWFsUHJvbWlzZUxPRHMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRlci5zdGFydFBlcmZvcm1hbmNlQ291bnRlcihgTWF0ZXJpYWwgTE9EICR7aW5kZXhMT0QgKyAxfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRCdWZmZXJMT0QodGhpcy5fbWF0ZXJpYWxCdWZmZXJMT0RzLCBpbmRleExPRCArIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9tYXRlcmlhbFNpZ25hbExPRHNbaW5kZXhMT0RdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX21hdGVyaWFsU2lnbmFsTE9Ec1tpbmRleExPRF0ucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9sb2FkZXIuX2NvbXBsZXRlUHJvbWlzZXMucHVzaChwcm9taXNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWRTY2VuZUFzeW5jKGNvbnRleHQ6IHN0cmluZywgc2NlbmU6IElTY2VuZSk6IE51bGxhYmxlPFByb21pc2U8dm9pZD4+IHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gdGhpcy5fbG9hZGVyLmxvYWRTY2VuZUFzeW5jKGNvbnRleHQsIHNjZW5lKTtcclxuICAgICAgICB0aGlzLl9sb2FkQnVmZmVyTE9EKHRoaXMuX2J1ZmZlckxPRHMsIDApO1xyXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkTm9kZUFzeW5jKGNvbnRleHQ6IHN0cmluZywgbm9kZTogSU5vZGUsIGFzc2lnbjogKGJhYnlsb25UcmFuc2Zvcm1Ob2RlOiBUcmFuc2Zvcm1Ob2RlKSA9PiB2b2lkKTogTnVsbGFibGU8UHJvbWlzZTxUcmFuc2Zvcm1Ob2RlPj4ge1xyXG4gICAgICAgIHJldHVybiBHTFRGTG9hZGVyLkxvYWRFeHRlbnNpb25Bc3luYzxJTVNGVExPRCwgVHJhbnNmb3JtTm9kZT4oY29udGV4dCwgbm9kZSwgdGhpcy5uYW1lLCAoZXh0ZW5zaW9uQ29udGV4dCwgZXh0ZW5zaW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBmaXJzdFByb21pc2U6IFByb21pc2U8VHJhbnNmb3JtTm9kZT47XHJcblxyXG4gICAgICAgICAgICBjb25zdCBub2RlTE9EcyA9IHRoaXMuX2dldExPRHMoZXh0ZW5zaW9uQ29udGV4dCwgbm9kZSwgdGhpcy5fbG9hZGVyLmdsdGYubm9kZXMsIGV4dGVuc2lvbi5pZHMpO1xyXG4gICAgICAgICAgICB0aGlzLl9sb2FkZXIubG9nT3BlbihgJHtleHRlbnNpb25Db250ZXh0fWApO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXhMT0QgPSAwOyBpbmRleExPRCA8IG5vZGVMT0RzLmxlbmd0aDsgaW5kZXhMT0QrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgbm9kZUxPRCA9IG5vZGVMT0RzW2luZGV4TE9EXTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXhMT0QgIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ub2RlSW5kZXhMT0QgPSBpbmRleExPRDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ub2RlU2lnbmFsTE9Ec1tpbmRleExPRF0gPSB0aGlzLl9ub2RlU2lnbmFsTE9Ec1tpbmRleExPRF0gfHwgbmV3IERlZmVycmVkKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgYXNzaWduV3JhcCA9IChiYWJ5bG9uVHJhbnNmb3JtTm9kZTogVHJhbnNmb3JtTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGFzc2lnbihiYWJ5bG9uVHJhbnNmb3JtTm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFieWxvblRyYW5zZm9ybU5vZGUuc2V0RW5hYmxlZChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLl9sb2FkZXIubG9hZE5vZGVBc3luYyhgL25vZGVzLyR7bm9kZUxPRC5pbmRleH1gLCBub2RlTE9ELCBhc3NpZ25XcmFwKS50aGVuKChiYWJ5bG9uTWVzaCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleExPRCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBzaG91bGQgbm90IHJlbHkgb24gX2JhYnlsb25UcmFuc2Zvcm1Ob2RlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzTm9kZUxPRCA9IG5vZGVMT0RzW2luZGV4TE9EIC0gMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcmV2aW91c05vZGVMT0QuX2JhYnlsb25UcmFuc2Zvcm1Ob2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9kaXNwb3NlVHJhbnNmb3JtTm9kZShwcmV2aW91c05vZGVMT0QuX2JhYnlsb25UcmFuc2Zvcm1Ob2RlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBwcmV2aW91c05vZGVMT0QuX2JhYnlsb25UcmFuc2Zvcm1Ob2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uTWVzaC5zZXRFbmFibGVkKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBiYWJ5bG9uTWVzaDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX25vZGVQcm9taXNlTE9Ec1tpbmRleExPRF0gPSB0aGlzLl9ub2RlUHJvbWlzZUxPRHNbaW5kZXhMT0RdIHx8IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpbmRleExPRCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0UHJvbWlzZSA9IHByb21pc2U7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX25vZGVJbmRleExPRCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbm9kZVByb21pc2VMT0RzW2luZGV4TE9EXS5wdXNoKHByb21pc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9sb2FkZXIubG9nQ2xvc2UoKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZpcnN0UHJvbWlzZSE7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIF9sb2FkTWF0ZXJpYWxBc3luYyhcclxuICAgICAgICBjb250ZXh0OiBzdHJpbmcsXHJcbiAgICAgICAgbWF0ZXJpYWw6IElNYXRlcmlhbCxcclxuICAgICAgICBiYWJ5bG9uTWVzaDogTnVsbGFibGU8TWVzaD4sXHJcbiAgICAgICAgYmFieWxvbkRyYXdNb2RlOiBudW1iZXIsXHJcbiAgICAgICAgYXNzaWduOiAoYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCkgPT4gdm9pZFxyXG4gICAgKTogTnVsbGFibGU8UHJvbWlzZTxNYXRlcmlhbD4+IHtcclxuICAgICAgICAvLyBEb24ndCBsb2FkIG1hdGVyaWFsIExPRHMgaWYgYWxyZWFkeSBsb2FkaW5nIGEgbm9kZSBMT0QuXHJcbiAgICAgICAgaWYgKHRoaXMuX25vZGVJbmRleExPRCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBHTFRGTG9hZGVyLkxvYWRFeHRlbnNpb25Bc3luYzxJTVNGVExPRCwgTWF0ZXJpYWw+KGNvbnRleHQsIG1hdGVyaWFsLCB0aGlzLm5hbWUsIChleHRlbnNpb25Db250ZXh0LCBleHRlbnNpb24pID0+IHtcclxuICAgICAgICAgICAgbGV0IGZpcnN0UHJvbWlzZTogUHJvbWlzZTxNYXRlcmlhbD47XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtYXRlcmlhbExPRHMgPSB0aGlzLl9nZXRMT0RzKGV4dGVuc2lvbkNvbnRleHQsIG1hdGVyaWFsLCB0aGlzLl9sb2FkZXIuZ2x0Zi5tYXRlcmlhbHMsIGV4dGVuc2lvbi5pZHMpO1xyXG4gICAgICAgICAgICB0aGlzLl9sb2FkZXIubG9nT3BlbihgJHtleHRlbnNpb25Db250ZXh0fWApO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXhMT0QgPSAwOyBpbmRleExPRCA8IG1hdGVyaWFsTE9Ecy5sZW5ndGg7IGluZGV4TE9EKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsTE9EID0gbWF0ZXJpYWxMT0RzW2luZGV4TE9EXTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXhMT0QgIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tYXRlcmlhbEluZGV4TE9EID0gaW5kZXhMT0Q7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IHRoaXMuX2xvYWRlclxyXG4gICAgICAgICAgICAgICAgICAgIC5fbG9hZE1hdGVyaWFsQXN5bmMoYC9tYXRlcmlhbHMvJHttYXRlcmlhbExPRC5pbmRleH1gLCBtYXRlcmlhbExPRCwgYmFieWxvbk1lc2gsIGJhYnlsb25EcmF3TW9kZSwgKGJhYnlsb25NYXRlcmlhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXhMT0QgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2lnbihiYWJ5bG9uTWF0ZXJpYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigoYmFieWxvbk1hdGVyaWFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleExPRCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzaWduKGJhYnlsb25NYXRlcmlhbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogc2hvdWxkIG5vdCByZWx5IG9uIF9kYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmV2aW91c0RhdGFMT0QgPSBtYXRlcmlhbExPRHNbaW5kZXhMT0QgLSAxXS5fZGF0YSE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJldmlvdXNEYXRhTE9EW2JhYnlsb25EcmF3TW9kZV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9kaXNwb3NlTWF0ZXJpYWxzKFtwcmV2aW91c0RhdGFMT0RbYmFieWxvbkRyYXdNb2RlXS5iYWJ5bG9uTWF0ZXJpYWxdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgcHJldmlvdXNEYXRhTE9EW2JhYnlsb25EcmF3TW9kZV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBiYWJ5bG9uTWF0ZXJpYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbWF0ZXJpYWxQcm9taXNlTE9Ec1tpbmRleExPRF0gPSB0aGlzLl9tYXRlcmlhbFByb21pc2VMT0RzW2luZGV4TE9EXSB8fCBbXTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXhMT0QgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBmaXJzdFByb21pc2UgPSBwcm9taXNlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tYXRlcmlhbEluZGV4TE9EID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tYXRlcmlhbFByb21pc2VMT0RzW2luZGV4TE9EXS5wdXNoKHByb21pc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9sb2FkZXIubG9nQ2xvc2UoKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZpcnN0UHJvbWlzZSE7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIF9sb2FkVXJpQXN5bmMoY29udGV4dDogc3RyaW5nLCBwcm9wZXJ0eTogSVByb3BlcnR5LCB1cmk6IHN0cmluZyk6IE51bGxhYmxlPFByb21pc2U8QXJyYXlCdWZmZXJWaWV3Pj4ge1xyXG4gICAgICAgIC8vIERlZmVyIHRoZSBsb2FkaW5nIG9mIHVyaXMgaWYgbG9hZGluZyBhIG5vZGUgb3IgbWF0ZXJpYWwgTE9ELlxyXG4gICAgICAgIGlmICh0aGlzLl9ub2RlSW5kZXhMT0QgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9hZGVyLmxvZyhgZGVmZXJyZWRgKTtcclxuICAgICAgICAgICAgY29uc3QgcHJldmlvdXNJbmRleExPRCA9IHRoaXMuX25vZGVJbmRleExPRCAtIDE7XHJcbiAgICAgICAgICAgIHRoaXMuX25vZGVTaWduYWxMT0RzW3ByZXZpb3VzSW5kZXhMT0RdID0gdGhpcy5fbm9kZVNpZ25hbExPRHNbcHJldmlvdXNJbmRleExPRF0gfHwgbmV3IERlZmVycmVkPHZvaWQ+KCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9ub2RlU2lnbmFsTE9Ec1t0aGlzLl9ub2RlSW5kZXhMT0QgLSAxXS5wcm9taXNlLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRlci5sb2FkVXJpQXN5bmMoY29udGV4dCwgcHJvcGVydHksIHVyaSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fbWF0ZXJpYWxJbmRleExPRCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2FkZXIubG9nKGBkZWZlcnJlZGApO1xyXG4gICAgICAgICAgICBjb25zdCBwcmV2aW91c0luZGV4TE9EID0gdGhpcy5fbWF0ZXJpYWxJbmRleExPRCAtIDE7XHJcbiAgICAgICAgICAgIHRoaXMuX21hdGVyaWFsU2lnbmFsTE9Ec1twcmV2aW91c0luZGV4TE9EXSA9IHRoaXMuX21hdGVyaWFsU2lnbmFsTE9Ec1twcmV2aW91c0luZGV4TE9EXSB8fCBuZXcgRGVmZXJyZWQ8dm9pZD4oKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21hdGVyaWFsU2lnbmFsTE9Ec1twcmV2aW91c0luZGV4TE9EXS5wcm9taXNlLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRlci5sb2FkVXJpQXN5bmMoY29udGV4dCwgcHJvcGVydHksIHVyaSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWRCdWZmZXJBc3luYyhjb250ZXh0OiBzdHJpbmcsIGJ1ZmZlcjogSUJ1ZmZlciwgYnl0ZU9mZnNldDogbnVtYmVyLCBieXRlTGVuZ3RoOiBudW1iZXIpOiBOdWxsYWJsZTxQcm9taXNlPEFycmF5QnVmZmVyVmlldz4+IHtcclxuICAgICAgICBpZiAodGhpcy5fbG9hZGVyLnBhcmVudC51c2VSYW5nZVJlcXVlc3RzICYmICFidWZmZXIudXJpKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5fbG9hZGVyLmJpbikge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2NvbnRleHR9OiBVcmkgaXMgbWlzc2luZyBvciB0aGUgYmluYXJ5IGdsVEYgaXMgbWlzc2luZyBpdHMgYmluYXJ5IGNodW5rYCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGxvYWRBc3luYyA9IChidWZmZXJMT0RzOiBBcnJheTxJQnVmZmVySW5mbz4sIGluZGV4TE9EOiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gYnl0ZU9mZnNldDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVuZCA9IHN0YXJ0ICsgYnl0ZUxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgICAgICBsZXQgYnVmZmVyTE9EID0gYnVmZmVyTE9Ec1tpbmRleExPRF07XHJcbiAgICAgICAgICAgICAgICBpZiAoYnVmZmVyTE9EKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyTE9ELnN0YXJ0ID0gTWF0aC5taW4oYnVmZmVyTE9ELnN0YXJ0LCBzdGFydCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyTE9ELmVuZCA9IE1hdGgubWF4KGJ1ZmZlckxPRC5lbmQsIGVuZCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1ZmZlckxPRCA9IHsgc3RhcnQ6IHN0YXJ0LCBlbmQ6IGVuZCwgbG9hZGVkOiBuZXcgRGVmZXJyZWQoKSB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1ZmZlckxPRHNbaW5kZXhMT0RdID0gYnVmZmVyTE9EO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBidWZmZXJMT0QubG9hZGVkLnByb21pc2UudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShkYXRhLmJ1ZmZlciwgZGF0YS5ieXRlT2Zmc2V0ICsgYnl0ZU9mZnNldCAtIGJ1ZmZlckxPRC5zdGFydCwgYnl0ZUxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2xvYWRlci5sb2coYGRlZmVycmVkYCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5fbm9kZUluZGV4TE9EICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbG9hZEFzeW5jKHRoaXMuX25vZGVCdWZmZXJMT0RzLCB0aGlzLl9ub2RlSW5kZXhMT0QpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX21hdGVyaWFsSW5kZXhMT0QgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBsb2FkQXN5bmModGhpcy5fbWF0ZXJpYWxCdWZmZXJMT0RzLCB0aGlzLl9tYXRlcmlhbEluZGV4TE9EKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBsb2FkQXN5bmModGhpcy5fYnVmZmVyTE9EcywgMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2xvYWRCdWZmZXJMT0QoYnVmZmVyTE9EczogQXJyYXk8SUJ1ZmZlckluZm8+LCBpbmRleExPRDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgYnVmZmVyTE9EID0gYnVmZmVyTE9Ec1tpbmRleExPRF07XHJcbiAgICAgICAgaWYgKGJ1ZmZlckxPRCkge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2FkZXIubG9nKGBMb2FkaW5nIGJ1ZmZlciByYW5nZSBbJHtidWZmZXJMT0Quc3RhcnR9LSR7YnVmZmVyTE9ELmVuZH1dYCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvYWRlci5iaW4hLnJlYWRBc3luYyhidWZmZXJMT0Quc3RhcnQsIGJ1ZmZlckxPRC5lbmQgLSBidWZmZXJMT0Quc3RhcnQgKyAxKS50aGVuKFxyXG4gICAgICAgICAgICAgICAgKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBidWZmZXJMT0QubG9hZGVkLnJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyTE9ELmxvYWRlZC5yZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgYW4gYXJyYXkgb2YgTE9EIHByb3BlcnRpZXMgZnJvbSBsb3dlc3QgdG8gaGlnaGVzdC5cclxuICAgICAqIEBwYXJhbSBjb250ZXh0XHJcbiAgICAgKiBAcGFyYW0gcHJvcGVydHlcclxuICAgICAqIEBwYXJhbSBhcnJheVxyXG4gICAgICogQHBhcmFtIGlkc1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9nZXRMT0RzPFQ+KGNvbnRleHQ6IHN0cmluZywgcHJvcGVydHk6IFQsIGFycmF5OiBBcnJheUxpa2U8VD4gfCB1bmRlZmluZWQsIGlkczogbnVtYmVyW10pOiBUW10ge1xyXG4gICAgICAgIGlmICh0aGlzLm1heExPRHNUb0xvYWQgPD0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJtYXhMT0RzVG9Mb2FkIG11c3QgYmUgZ3JlYXRlciB0aGFuIHplcm9cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBwcm9wZXJ0aWVzOiBUW10gPSBbXTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IGlkcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICBwcm9wZXJ0aWVzLnB1c2goQXJyYXlJdGVtLkdldChgJHtjb250ZXh0fS9pZHMvJHtpZHNbaV19YCwgYXJyYXksIGlkc1tpXSkpO1xyXG4gICAgICAgICAgICBpZiAocHJvcGVydGllcy5sZW5ndGggPT09IHRoaXMubWF4TE9Ec1RvTG9hZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3BlcnRpZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3BlcnRpZXMucHVzaChwcm9wZXJ0eSk7XHJcbiAgICAgICAgcmV0dXJuIHByb3BlcnRpZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZGlzcG9zZVRyYW5zZm9ybU5vZGUoYmFieWxvblRyYW5zZm9ybU5vZGU6IFRyYW5zZm9ybU5vZGUpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBiYWJ5bG9uTWF0ZXJpYWxzOiBNYXRlcmlhbFtdID0gW107XHJcbiAgICAgICAgY29uc3QgYmFieWxvbk1hdGVyaWFsID0gKGJhYnlsb25UcmFuc2Zvcm1Ob2RlIGFzIE1lc2gpLm1hdGVyaWFsO1xyXG4gICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFscy5wdXNoKGJhYnlsb25NYXRlcmlhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3QgYmFieWxvbk1lc2ggb2YgYmFieWxvblRyYW5zZm9ybU5vZGUuZ2V0Q2hpbGRNZXNoZXMoKSkge1xyXG4gICAgICAgICAgICBpZiAoYmFieWxvbk1lc2gubWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgICAgIGJhYnlsb25NYXRlcmlhbHMucHVzaChiYWJ5bG9uTWVzaC5tYXRlcmlhbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJhYnlsb25UcmFuc2Zvcm1Ob2RlLmRpc3Bvc2UoKTtcclxuXHJcbiAgICAgICAgY29uc3QgYmFieWxvbk1hdGVyaWFsc1RvRGlzcG9zZSA9IGJhYnlsb25NYXRlcmlhbHMuZmlsdGVyKChiYWJ5bG9uTWF0ZXJpYWwpID0+IHRoaXMuX2xvYWRlci5iYWJ5bG9uU2NlbmUubWVzaGVzLmV2ZXJ5KChtZXNoKSA9PiBtZXNoLm1hdGVyaWFsICE9IGJhYnlsb25NYXRlcmlhbCkpO1xyXG4gICAgICAgIHRoaXMuX2Rpc3Bvc2VNYXRlcmlhbHMoYmFieWxvbk1hdGVyaWFsc1RvRGlzcG9zZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZGlzcG9zZU1hdGVyaWFscyhiYWJ5bG9uTWF0ZXJpYWxzOiBNYXRlcmlhbFtdKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgYmFieWxvblRleHR1cmVzOiB7IFt1bmlxdWVJZDogbnVtYmVyXTogQmFzZVRleHR1cmUgfSA9IHt9O1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGJhYnlsb25NYXRlcmlhbCBvZiBiYWJ5bG9uTWF0ZXJpYWxzKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgYmFieWxvblRleHR1cmUgb2YgYmFieWxvbk1hdGVyaWFsLmdldEFjdGl2ZVRleHR1cmVzKCkpIHtcclxuICAgICAgICAgICAgICAgIGJhYnlsb25UZXh0dXJlc1tiYWJ5bG9uVGV4dHVyZS51bmlxdWVJZF0gPSBiYWJ5bG9uVGV4dHVyZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsLmRpc3Bvc2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgdW5pcXVlSWQgaW4gYmFieWxvblRleHR1cmVzKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgYmFieWxvbk1hdGVyaWFsIG9mIHRoaXMuX2xvYWRlci5iYWJ5bG9uU2NlbmUubWF0ZXJpYWxzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsLmhhc1RleHR1cmUoYmFieWxvblRleHR1cmVzW3VuaXF1ZUlkXSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgYmFieWxvblRleHR1cmVzW3VuaXF1ZUlkXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChjb25zdCB1bmlxdWVJZCBpbiBiYWJ5bG9uVGV4dHVyZXMpIHtcclxuICAgICAgICAgICAgYmFieWxvblRleHR1cmVzW3VuaXF1ZUlkXS5kaXNwb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5HTFRGTG9hZGVyLlJlZ2lzdGVyRXh0ZW5zaW9uKE5BTUUsIChsb2FkZXIpID0+IG5ldyBNU0ZUX2xvZChsb2FkZXIpKTtcclxuIiwiaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCJjb3JlL3R5cGVzXCI7XHJcbmltcG9ydCB0eXBlIHsgTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgUEJSTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvUEJSL3Bick1hdGVyaWFsXCI7XHJcblxyXG5pbXBvcnQgdHlwZSB7IElNYXRlcmlhbCB9IGZyb20gXCIuLi9nbFRGTG9hZGVySW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQgdHlwZSB7IElHTFRGTG9hZGVyRXh0ZW5zaW9uIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJFeHRlbnNpb25cIjtcclxuaW1wb3J0IHsgR0xURkxvYWRlciB9IGZyb20gXCIuLi9nbFRGTG9hZGVyXCI7XHJcblxyXG5jb25zdCBOQU1FID0gXCJNU0ZUX21pbmVjcmFmdE1lc2hcIjtcclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgY2xhc3MgTVNGVF9taW5lY3JhZnRNZXNoIGltcGxlbWVudHMgSUdMVEZMb2FkZXJFeHRlbnNpb24ge1xyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBOQU1FO1xyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBlbmFibGVkOiBib29sZWFuO1xyXG5cclxuICAgIHByaXZhdGUgX2xvYWRlcjogR0xURkxvYWRlcjtcclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBjb25zdHJ1Y3Rvcihsb2FkZXI6IEdMVEZMb2FkZXIpIHtcclxuICAgICAgICB0aGlzLl9sb2FkZXIgPSBsb2FkZXI7XHJcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdGhpcy5fbG9hZGVyLmlzRXh0ZW5zaW9uVXNlZChOQU1FKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHtcclxuICAgICAgICAodGhpcy5fbG9hZGVyIGFzIGFueSkgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBsb2FkTWF0ZXJpYWxQcm9wZXJ0aWVzQXN5bmMoY29udGV4dDogc3RyaW5nLCBtYXRlcmlhbDogSU1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsKTogTnVsbGFibGU8UHJvbWlzZTx2b2lkPj4ge1xyXG4gICAgICAgIHJldHVybiBHTFRGTG9hZGVyLkxvYWRFeHRyYUFzeW5jPGJvb2xlYW4+KGNvbnRleHQsIG1hdGVyaWFsLCB0aGlzLm5hbWUsIChleHRyYUNvbnRleHQsIGV4dHJhKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChleHRyYSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCEoYmFieWxvbk1hdGVyaWFsIGluc3RhbmNlb2YgUEJSTWF0ZXJpYWwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2V4dHJhQ29udGV4dH06IE1hdGVyaWFsIHR5cGUgbm90IHN1cHBvcnRlZGApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLl9sb2FkZXIubG9hZE1hdGVyaWFsUHJvcGVydGllc0FzeW5jKGNvbnRleHQsIG1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWwpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwubmVlZEFscGhhQmxlbmRpbmcoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhYnlsb25NYXRlcmlhbC5mb3JjZURlcHRoV3JpdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhYnlsb25NYXRlcmlhbC5zZXBhcmF0ZUN1bGxpbmdQYXNzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwuYmFja0ZhY2VDdWxsaW5nID0gYmFieWxvbk1hdGVyaWFsLmZvcmNlRGVwdGhXcml0ZTtcclxuICAgICAgICAgICAgICAgIGJhYnlsb25NYXRlcmlhbC50d29TaWRlZExpZ2h0aW5nID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkdMVEZMb2FkZXIuUmVnaXN0ZXJFeHRlbnNpb24oTkFNRSwgKGxvYWRlcikgPT4gbmV3IE1TRlRfbWluZWNyYWZ0TWVzaChsb2FkZXIpKTtcclxuIiwiaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCJjb3JlL3R5cGVzXCI7XHJcbmltcG9ydCB0eXBlIHsgTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgUEJSTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvUEJSL3Bick1hdGVyaWFsXCI7XHJcblxyXG5pbXBvcnQgdHlwZSB7IElNYXRlcmlhbCB9IGZyb20gXCIuLi9nbFRGTG9hZGVySW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQgdHlwZSB7IElHTFRGTG9hZGVyRXh0ZW5zaW9uIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJFeHRlbnNpb25cIjtcclxuaW1wb3J0IHsgR0xURkxvYWRlciB9IGZyb20gXCIuLi9nbFRGTG9hZGVyXCI7XHJcblxyXG5jb25zdCBOQU1FID0gXCJNU0ZUX3NSR0JGYWN0b3JzXCI7XHJcblxyXG4vKiogQGludGVybmFsICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGNsYXNzIE1TRlRfc1JHQkZhY3RvcnMgaW1wbGVtZW50cyBJR0xURkxvYWRlckV4dGVuc2lvbiB7XHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZSA9IE5BTUU7XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGVuYWJsZWQ6IGJvb2xlYW47XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZGVyOiBHTFRGTG9hZGVyO1xyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIGNvbnN0cnVjdG9yKGxvYWRlcjogR0xURkxvYWRlcikge1xyXG4gICAgICAgIHRoaXMuX2xvYWRlciA9IGxvYWRlcjtcclxuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0aGlzLl9sb2FkZXIuaXNFeHRlbnNpb25Vc2VkKE5BTUUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge1xyXG4gICAgICAgICh0aGlzLl9sb2FkZXIgYXMgYW55KSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGxvYWRNYXRlcmlhbFByb3BlcnRpZXNBc3luYyhjb250ZXh0OiBzdHJpbmcsIG1hdGVyaWFsOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBOdWxsYWJsZTxQcm9taXNlPHZvaWQ+PiB7XHJcbiAgICAgICAgcmV0dXJuIEdMVEZMb2FkZXIuTG9hZEV4dHJhQXN5bmM8Ym9vbGVhbj4oY29udGV4dCwgbWF0ZXJpYWwsIHRoaXMubmFtZSwgKGV4dHJhQ29udGV4dCwgZXh0cmEpID0+IHtcclxuICAgICAgICAgICAgaWYgKGV4dHJhKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIShiYWJ5bG9uTWF0ZXJpYWwgaW5zdGFuY2VvZiBQQlJNYXRlcmlhbCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7ZXh0cmFDb250ZXh0fTogTWF0ZXJpYWwgdHlwZSBub3Qgc3VwcG9ydGVkYCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IHRoaXMuX2xvYWRlci5sb2FkTWF0ZXJpYWxQcm9wZXJ0aWVzQXN5bmMoY29udGV4dCwgbWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgdXNlRXhhY3RTcmdiQ29udmVyc2lvbnMgPSBiYWJ5bG9uTWF0ZXJpYWwuZ2V0U2NlbmUoKS5nZXRFbmdpbmUoKS51c2VFeGFjdFNyZ2JDb252ZXJzaW9ucztcclxuICAgICAgICAgICAgICAgIGlmICghYmFieWxvbk1hdGVyaWFsLmFsYmVkb1RleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwuYWxiZWRvQ29sb3IudG9MaW5lYXJTcGFjZVRvUmVmKGJhYnlsb25NYXRlcmlhbC5hbGJlZG9Db2xvciwgdXNlRXhhY3RTcmdiQ29udmVyc2lvbnMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICghYmFieWxvbk1hdGVyaWFsLnJlZmxlY3Rpdml0eVRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwucmVmbGVjdGl2aXR5Q29sb3IudG9MaW5lYXJTcGFjZVRvUmVmKGJhYnlsb25NYXRlcmlhbC5yZWZsZWN0aXZpdHlDb2xvciwgdXNlRXhhY3RTcmdiQ29udmVyc2lvbnMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuR0xURkxvYWRlci5SZWdpc3RlckV4dGVuc2lvbihOQU1FLCAobG9hZGVyKSA9PiBuZXcgTVNGVF9zUkdCRmFjdG9ycyhsb2FkZXIpKTtcclxuIiwiZXhwb3J0ICogZnJvbSBcIi4vRVhUX2xpZ2h0c19pbWFnZV9iYXNlZFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9FWFRfbWVzaF9ncHVfaW5zdGFuY2luZ1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9FWFRfbWVzaG9wdF9jb21wcmVzc2lvblwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9FWFRfdGV4dHVyZV93ZWJwXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL0tIUl9kcmFjb19tZXNoX2NvbXByZXNzaW9uXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL0tIUl9saWdodHNfcHVuY3R1YWxcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vS0hSX21hdGVyaWFsc19wYnJTcGVjdWxhckdsb3NzaW5lc3NcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vS0hSX21hdGVyaWFsc191bmxpdFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9LSFJfbWF0ZXJpYWxzX2NsZWFyY29hdFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9LSFJfbWF0ZXJpYWxzX2lyaWRlc2NlbmNlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL0tIUl9tYXRlcmlhbHNfYW5pc290cm9weVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9LSFJfbWF0ZXJpYWxzX2VtaXNzaXZlX3N0cmVuZ3RoXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL0tIUl9tYXRlcmlhbHNfc2hlZW5cIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vS0hSX21hdGVyaWFsc19zcGVjdWxhclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9LSFJfbWF0ZXJpYWxzX2lvclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9LSFJfbWF0ZXJpYWxzX3ZhcmlhbnRzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL0tIUl9tYXRlcmlhbHNfdHJhbnNtaXNzaW9uXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL0tIUl9tYXRlcmlhbHNfdHJhbnNsdWNlbmN5XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL0tIUl9tYXRlcmlhbHNfdm9sdW1lXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL0tIUl9tYXRlcmlhbHNfZGlzcGVyc2lvblwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9LSFJfbWVzaF9xdWFudGl6YXRpb25cIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vS0hSX3RleHR1cmVfYmFzaXN1XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL0tIUl90ZXh0dXJlX3RyYW5zZm9ybVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9LSFJfeG1wX2pzb25fbGRcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vS0hSX2FuaW1hdGlvbl9wb2ludGVyXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL01TRlRfYXVkaW9fZW1pdHRlclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9NU0ZUX2xvZFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9NU0ZUX21pbmVjcmFmdE1lc2hcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vTVNGVF9zUkdCRmFjdG9yc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9FeHRyYXNBc01ldGFkYXRhXCI7XHJcbiIsImltcG9ydCB0eXBlIHsgSW5kaWNlc0FycmF5LCBOdWxsYWJsZSB9IGZyb20gXCJjb3JlL3R5cGVzXCI7XHJcbmltcG9ydCB7IERlZmVycmVkIH0gZnJvbSBcImNvcmUvTWlzYy9kZWZlcnJlZFwiO1xyXG5pbXBvcnQgeyBRdWF0ZXJuaW9uLCBWZWN0b3IzLCBNYXRyaXgsIFRtcFZlY3RvcnMgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLnZlY3RvclwiO1xyXG5pbXBvcnQgeyBDb2xvcjMgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLmNvbG9yXCI7XHJcbmltcG9ydCB7IFRvb2xzIH0gZnJvbSBcImNvcmUvTWlzYy90b29sc1wiO1xyXG5pbXBvcnQgeyBDYW1lcmEgfSBmcm9tIFwiY29yZS9DYW1lcmFzL2NhbWVyYVwiO1xyXG5pbXBvcnQgeyBGcmVlQ2FtZXJhIH0gZnJvbSBcImNvcmUvQ2FtZXJhcy9mcmVlQ2FtZXJhXCI7XHJcbmltcG9ydCB0eXBlIHsgQW5pbWF0aW9uIH0gZnJvbSBcImNvcmUvQW5pbWF0aW9ucy9hbmltYXRpb25cIjtcclxuaW1wb3J0IHR5cGUgeyBJQW5pbWF0YWJsZSB9IGZyb20gXCJjb3JlL0FuaW1hdGlvbnMvYW5pbWF0YWJsZS5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHR5cGUgeyBJQW5pbWF0aW9uS2V5IH0gZnJvbSBcImNvcmUvQW5pbWF0aW9ucy9hbmltYXRpb25LZXlcIjtcclxuaW1wb3J0IHsgQW5pbWF0aW9uS2V5SW50ZXJwb2xhdGlvbiB9IGZyb20gXCJjb3JlL0FuaW1hdGlvbnMvYW5pbWF0aW9uS2V5XCI7XHJcbmltcG9ydCB7IEFuaW1hdGlvbkdyb3VwIH0gZnJvbSBcImNvcmUvQW5pbWF0aW9ucy9hbmltYXRpb25Hcm91cFwiO1xyXG5pbXBvcnQgeyBCb25lIH0gZnJvbSBcImNvcmUvQm9uZXMvYm9uZVwiO1xyXG5pbXBvcnQgeyBTa2VsZXRvbiB9IGZyb20gXCJjb3JlL0JvbmVzL3NrZWxldG9uXCI7XHJcbmltcG9ydCB7IE1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IFBCUk1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1BCUi9wYnJNYXRlcmlhbFwiO1xyXG5pbXBvcnQgdHlwZSB7IEJhc2VUZXh0dXJlIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1RleHR1cmVzL2Jhc2VUZXh0dXJlXCI7XHJcbmltcG9ydCB0eXBlIHsgSVRleHR1cmVDcmVhdGlvbk9wdGlvbnMgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvdGV4dHVyZVwiO1xyXG5pbXBvcnQgeyBUZXh0dXJlIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1RleHR1cmVzL3RleHR1cmVcIjtcclxuaW1wb3J0IHsgVHJhbnNmb3JtTm9kZSB9IGZyb20gXCJjb3JlL01lc2hlcy90cmFuc2Zvcm1Ob2RlXCI7XHJcbmltcG9ydCB7IEJ1ZmZlciwgVmVydGV4QnVmZmVyIH0gZnJvbSBcImNvcmUvQnVmZmVycy9idWZmZXJcIjtcclxuaW1wb3J0IHsgR2VvbWV0cnkgfSBmcm9tIFwiY29yZS9NZXNoZXMvZ2VvbWV0cnlcIjtcclxuaW1wb3J0IHR5cGUgeyBBYnN0cmFjdE1lc2ggfSBmcm9tIFwiY29yZS9NZXNoZXMvYWJzdHJhY3RNZXNoXCI7XHJcbmltcG9ydCB0eXBlIHsgSW5zdGFuY2VkTWVzaCB9IGZyb20gXCJjb3JlL01lc2hlcy9pbnN0YW5jZWRNZXNoXCI7XHJcbmltcG9ydCB7IE1lc2ggfSBmcm9tIFwiY29yZS9NZXNoZXMvbWVzaFwiO1xyXG5pbXBvcnQgeyBNb3JwaFRhcmdldCB9IGZyb20gXCJjb3JlL01vcnBoL21vcnBoVGFyZ2V0XCI7XHJcbmltcG9ydCB7IE1vcnBoVGFyZ2V0TWFuYWdlciB9IGZyb20gXCJjb3JlL01vcnBoL21vcnBoVGFyZ2V0TWFuYWdlclwiO1xyXG5pbXBvcnQgdHlwZSB7IElTY2VuZUxvYWRlckFzeW5jUmVzdWx0LCBJU2NlbmVMb2FkZXJQcm9ncmVzc0V2ZW50IH0gZnJvbSBcImNvcmUvTG9hZGluZy9zY2VuZUxvYWRlclwiO1xyXG5pbXBvcnQgdHlwZSB7IFNjZW5lIH0gZnJvbSBcImNvcmUvc2NlbmVcIjtcclxuaW1wb3J0IHR5cGUgeyBJUHJvcGVydHkgfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7XHJcbiAgICBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCxcclxuICAgIEFuaW1hdGlvblNhbXBsZXJJbnRlcnBvbGF0aW9uLFxyXG4gICAgQWNjZXNzb3JUeXBlLFxyXG4gICAgQ2FtZXJhVHlwZSxcclxuICAgIEFjY2Vzc29yQ29tcG9uZW50VHlwZSxcclxuICAgIE1hdGVyaWFsQWxwaGFNb2RlLFxyXG4gICAgVGV4dHVyZU1pbkZpbHRlcixcclxuICAgIFRleHR1cmVXcmFwTW9kZSxcclxuICAgIFRleHR1cmVNYWdGaWx0ZXIsXHJcbiAgICBNZXNoUHJpbWl0aXZlTW9kZSxcclxufSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB0eXBlIHtcclxuICAgIElHTFRGLFxyXG4gICAgSVNhbXBsZXIsXHJcbiAgICBJTm9kZSxcclxuICAgIElTY2VuZSxcclxuICAgIElNZXNoLFxyXG4gICAgSUFjY2Vzc29yLFxyXG4gICAgSVNraW4sXHJcbiAgICBJQ2FtZXJhLFxyXG4gICAgSUFuaW1hdGlvbixcclxuICAgIElCdWZmZXIsXHJcbiAgICBJQnVmZmVyVmlldyxcclxuICAgIElNYXRlcmlhbFBick1ldGFsbGljUm91Z2huZXNzLFxyXG4gICAgSU1hdGVyaWFsLFxyXG4gICAgSVRleHR1cmVJbmZvLFxyXG4gICAgSVRleHR1cmUsXHJcbiAgICBJSW1hZ2UsXHJcbiAgICBJTWVzaFByaW1pdGl2ZSxcclxuICAgIElBcnJheUl0ZW0sXHJcbiAgICBfSVNhbXBsZXJEYXRhLFxyXG4gICAgSUFuaW1hdGlvbkNoYW5uZWwsXHJcbiAgICBJQW5pbWF0aW9uU2FtcGxlcixcclxuICAgIF9JQW5pbWF0aW9uU2FtcGxlckRhdGEsXHJcbn0gZnJvbSBcIi4vZ2xURkxvYWRlckludGVyZmFjZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBJR0xURkxvYWRlckV4dGVuc2lvbiB9IGZyb20gXCIuL2dsVEZMb2FkZXJFeHRlbnNpb25cIjtcclxuaW1wb3J0IHR5cGUgeyBJR0xURkxvYWRlciwgSUdMVEZMb2FkZXJEYXRhIH0gZnJvbSBcIi4uL2dsVEZGaWxlTG9hZGVyXCI7XHJcbmltcG9ydCB7IEdMVEZGaWxlTG9hZGVyLCBHTFRGTG9hZGVyU3RhdGUsIEdMVEZMb2FkZXJDb29yZGluYXRlU3lzdGVtTW9kZSwgR0xURkxvYWRlckFuaW1hdGlvblN0YXJ0TW9kZSB9IGZyb20gXCIuLi9nbFRGRmlsZUxvYWRlclwiO1xyXG5pbXBvcnQgdHlwZSB7IElEYXRhQnVmZmVyIH0gZnJvbSBcImNvcmUvTWlzYy9kYXRhUmVhZGVyXCI7XHJcbmltcG9ydCB7IERlY29kZUJhc2U2NFVybFRvQmluYXJ5LCBJc0Jhc2U2NERhdGFVcmwsIExvYWRGaWxlRXJyb3IgfSBmcm9tIFwiY29yZS9NaXNjL2ZpbGVUb29sc1wiO1xyXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiY29yZS9NaXNjL2xvZ2dlclwiO1xyXG5pbXBvcnQgdHlwZSB7IExpZ2h0IH0gZnJvbSBcImNvcmUvTGlnaHRzL2xpZ2h0XCI7XHJcbmltcG9ydCB7IEJvdW5kaW5nSW5mbyB9IGZyb20gXCJjb3JlL0N1bGxpbmcvYm91bmRpbmdJbmZvXCI7XHJcbmltcG9ydCB0eXBlIHsgQXNzZXRDb250YWluZXIgfSBmcm9tIFwiY29yZS9hc3NldENvbnRhaW5lclwiO1xyXG5pbXBvcnQgdHlwZSB7IEFuaW1hdGlvblByb3BlcnR5SW5mbyB9IGZyb20gXCIuL2dsVEZMb2FkZXJBbmltYXRpb25cIjtcclxuaW1wb3J0IHsgbm9kZUFuaW1hdGlvbkRhdGEgfSBmcm9tIFwiLi9nbFRGTG9hZGVyQW5pbWF0aW9uXCI7XHJcblxyXG5pbnRlcmZhY2UgVHlwZWRBcnJheUxpa2UgZXh0ZW5kcyBBcnJheUJ1ZmZlclZpZXcge1xyXG4gICAgcmVhZG9ubHkgbGVuZ3RoOiBudW1iZXI7XHJcbiAgICBbbjogbnVtYmVyXTogbnVtYmVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgVHlwZWRBcnJheUNvbnN0cnVjdG9yIHtcclxuICAgIG5ldyAobGVuZ3RoOiBudW1iZXIpOiBUeXBlZEFycmF5TGlrZTtcclxuICAgIG5ldyAoYnVmZmVyOiBBcnJheUJ1ZmZlckxpa2UsIGJ5dGVPZmZzZXQ6IG51bWJlciwgbGVuZ3RoPzogbnVtYmVyKTogVHlwZWRBcnJheUxpa2U7XHJcbn1cclxuXHJcbmludGVyZmFjZSBJTG9hZGVyUHJvcGVydHkgZXh0ZW5kcyBJUHJvcGVydHkge1xyXG4gICAgX2FjdGl2ZUxvYWRlckV4dGVuc2lvbkZ1bmN0aW9uczoge1xyXG4gICAgICAgIFtpZDogc3RyaW5nXTogYm9vbGVhbjtcclxuICAgIH07XHJcbn1cclxuXHJcbmludGVyZmFjZSBJUmVnaXN0ZXJlZEV4dGVuc2lvbiB7XHJcbiAgICBmYWN0b3J5OiAobG9hZGVyOiBHTFRGTG9hZGVyKSA9PiBJR0xURkxvYWRlckV4dGVuc2lvbjtcclxufVxyXG5cclxuaW50ZXJmYWNlIElXaXRoTWV0YWRhdGEge1xyXG4gICAgbWV0YWRhdGE6IGFueTtcclxuICAgIF9pbnRlcm5hbE1ldGFkYXRhOiBhbnk7XHJcbn1cclxuXHJcbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS80ODIxODIwOVxyXG5mdW5jdGlvbiBtZXJnZURlZXAoLi4ub2JqZWN0czogYW55W10pOiBhbnkge1xyXG4gICAgY29uc3QgaXNPYmplY3QgPSAob2JqOiBhbnkpID0+IG9iaiAmJiB0eXBlb2Ygb2JqID09PSBcIm9iamVjdFwiO1xyXG5cclxuICAgIHJldHVybiBvYmplY3RzLnJlZHVjZSgocHJldiwgb2JqKSA9PiB7XHJcbiAgICAgICAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcFZhbCA9IHByZXZba2V5XTtcclxuICAgICAgICAgICAgY29uc3Qgb1ZhbCA9IG9ialtrZXldO1xyXG5cclxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocFZhbCkgJiYgQXJyYXkuaXNBcnJheShvVmFsKSkge1xyXG4gICAgICAgICAgICAgICAgcHJldltrZXldID0gcFZhbC5jb25jYXQoLi4ub1ZhbCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNPYmplY3QocFZhbCkgJiYgaXNPYmplY3Qob1ZhbCkpIHtcclxuICAgICAgICAgICAgICAgIHByZXZba2V5XSA9IG1lcmdlRGVlcChwVmFsLCBvVmFsKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHByZXZba2V5XSA9IG9WYWw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHByZXY7XHJcbiAgICB9LCB7fSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBIZWxwZXIgY2xhc3MgZm9yIHdvcmtpbmcgd2l0aCBhcnJheXMgd2hlbiBsb2FkaW5nIHRoZSBnbFRGIGFzc2V0XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQXJyYXlJdGVtIHtcclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBhbiBpdGVtIGZyb20gdGhlIGdpdmVuIGFycmF5LlxyXG4gICAgICogQHBhcmFtIGNvbnRleHQgVGhlIGNvbnRleHQgd2hlbiBsb2FkaW5nIHRoZSBhc3NldFxyXG4gICAgICogQHBhcmFtIGFycmF5IFRoZSBhcnJheSB0byBnZXQgdGhlIGl0ZW0gZnJvbVxyXG4gICAgICogQHBhcmFtIGluZGV4IFRoZSBpbmRleCB0byB0aGUgYXJyYXlcclxuICAgICAqIEByZXR1cm5zIFRoZSBhcnJheSBpdGVtXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0PFQ+KGNvbnRleHQ6IHN0cmluZywgYXJyYXk6IEFycmF5TGlrZTxUPiB8IHVuZGVmaW5lZCwgaW5kZXg6IG51bWJlciB8IHVuZGVmaW5lZCk6IFQge1xyXG4gICAgICAgIGlmICghYXJyYXkgfHwgaW5kZXggPT0gdW5kZWZpbmVkIHx8ICFhcnJheVtpbmRleF0pIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2NvbnRleHR9OiBGYWlsZWQgdG8gZmluZCBpbmRleCAoJHtpbmRleH0pYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYXJyYXlbaW5kZXhdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBhbiBpdGVtIGZyb20gdGhlIGdpdmVuIGFycmF5IG9yIHJldHVybnMgbnVsbCBpZiBub3QgYXZhaWxhYmxlLlxyXG4gICAgICogQHBhcmFtIGFycmF5IFRoZSBhcnJheSB0byBnZXQgdGhlIGl0ZW0gZnJvbVxyXG4gICAgICogQHBhcmFtIGluZGV4IFRoZSBpbmRleCB0byB0aGUgYXJyYXlcclxuICAgICAqIEByZXR1cm5zIFRoZSBhcnJheSBpdGVtIG9yIG51bGxcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBUcnlHZXQ8VD4oYXJyYXk6IEFycmF5TGlrZTxUPiB8IHVuZGVmaW5lZCwgaW5kZXg6IG51bWJlciB8IHVuZGVmaW5lZCk6IE51bGxhYmxlPFQ+IHtcclxuICAgICAgICBpZiAoIWFycmF5IHx8IGluZGV4ID09IHVuZGVmaW5lZCB8fCAhYXJyYXlbaW5kZXhdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGFycmF5W2luZGV4XTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFzc2lnbiBhbiBgaW5kZXhgIGZpZWxkIHRvIGVhY2ggaXRlbSBvZiB0aGUgZ2l2ZW4gYXJyYXkuXHJcbiAgICAgKiBAcGFyYW0gYXJyYXkgVGhlIGFycmF5IG9mIGl0ZW1zXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgQXNzaWduKGFycmF5PzogSUFycmF5SXRlbVtdKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGFycmF5KSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheS5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIGFycmF5W2luZGV4XS5pbmRleCA9IGluZGV4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vKiogQGludGVybmFsICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUFuaW1hdGlvblRhcmdldEluZm8ge1xyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgdGFyZ2V0OiBhbnk7XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHJvcGVydGllczogQXJyYXk8QW5pbWF0aW9uUHJvcGVydHlJbmZvPjtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoZSBnbFRGIDIuMCBsb2FkZXJcclxuICovXHJcbmV4cG9ydCBjbGFzcyBHTFRGTG9hZGVyIGltcGxlbWVudHMgSUdMVEZMb2FkZXIge1xyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IF9jb21wbGV0ZVByb21pc2VzID0gbmV3IEFycmF5PFByb21pc2U8YW55Pj4oKTtcclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgX2Fzc2V0Q29udGFpbmVyOiBOdWxsYWJsZTxBc3NldENvbnRhaW5lcj4gPSBudWxsO1xyXG5cclxuICAgIC8qKiBTdG9yYWdlICovXHJcbiAgICBwdWJsaWMgX2JhYnlsb25MaWdodHM6IExpZ2h0W10gPSBbXTtcclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgX2Rpc2FibGVJbnN0YW5jZWRNZXNoID0gMDtcclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgX2FsbE1hdGVyaWFsc0RpcnR5UmVxdWlyZWQgPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9wYXJlbnQ6IEdMVEZGaWxlTG9hZGVyO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfZXh0ZW5zaW9ucyA9IG5ldyBBcnJheTxJR0xURkxvYWRlckV4dGVuc2lvbj4oKTtcclxuICAgIHByaXZhdGUgX2Rpc3Bvc2VkID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF9yb290VXJsOiBOdWxsYWJsZTxzdHJpbmc+ID0gbnVsbDtcclxuICAgIHByaXZhdGUgX2ZpbGVOYW1lOiBOdWxsYWJsZTxzdHJpbmc+ID0gbnVsbDtcclxuICAgIHByaXZhdGUgX3VuaXF1ZVJvb3RVcmw6IE51bGxhYmxlPHN0cmluZz4gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfZ2x0ZjogSUdMVEY7XHJcbiAgICBwcml2YXRlIF9iaW46IE51bGxhYmxlPElEYXRhQnVmZmVyPiA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9iYWJ5bG9uU2NlbmU6IFNjZW5lO1xyXG4gICAgcHJpdmF0ZSBfcm9vdEJhYnlsb25NZXNoOiBOdWxsYWJsZTxNZXNoPiA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9kZWZhdWx0QmFieWxvbk1hdGVyaWFsRGF0YTogeyBbZHJhd01vZGU6IG51bWJlcl06IE1hdGVyaWFsIH0gPSB7fTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX3Bvc3RTY2VuZUxvYWRBY3Rpb25zID0gbmV3IEFycmF5PCgpID0+IHZvaWQ+KCk7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX1JlZ2lzdGVyZWRFeHRlbnNpb25zOiB7IFtuYW1lOiBzdHJpbmddOiBJUmVnaXN0ZXJlZEV4dGVuc2lvbiB9ID0ge307XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgZGVmYXVsdCBnbFRGIHNhbXBsZXIuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRGVmYXVsdFNhbXBsZXI6IElTYW1wbGVyID0geyBpbmRleDogLTEgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlZ2lzdGVycyBhIGxvYWRlciBleHRlbnNpb24uXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgbG9hZGVyIGV4dGVuc2lvbi5cclxuICAgICAqIEBwYXJhbSBmYWN0b3J5IFRoZSBmYWN0b3J5IGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGUgbG9hZGVyIGV4dGVuc2lvbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBSZWdpc3RlckV4dGVuc2lvbihuYW1lOiBzdHJpbmcsIGZhY3Rvcnk6IChsb2FkZXI6IEdMVEZMb2FkZXIpID0+IElHTFRGTG9hZGVyRXh0ZW5zaW9uKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKEdMVEZMb2FkZXIuVW5yZWdpc3RlckV4dGVuc2lvbihuYW1lKSkge1xyXG4gICAgICAgICAgICBMb2dnZXIuV2FybihgRXh0ZW5zaW9uIHdpdGggdGhlIG5hbWUgJyR7bmFtZX0nIGFscmVhZHkgZXhpc3RzYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBHTFRGTG9hZGVyLl9SZWdpc3RlcmVkRXh0ZW5zaW9uc1tuYW1lXSA9IHtcclxuICAgICAgICAgICAgZmFjdG9yeTogZmFjdG9yeSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVW5yZWdpc3RlcnMgYSBsb2FkZXIgZXh0ZW5zaW9uLlxyXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhlIGxvYWRlciBleHRlbnNpb24uXHJcbiAgICAgKiBAcmV0dXJucyBBIGJvb2xlYW4gaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBleHRlbnNpb24gaGFzIGJlZW4gdW5yZWdpc3RlcmVkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgVW5yZWdpc3RlckV4dGVuc2lvbihuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAoIUdMVEZMb2FkZXIuX1JlZ2lzdGVyZWRFeHRlbnNpb25zW25hbWVdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRlbGV0ZSBHTFRGTG9hZGVyLl9SZWdpc3RlcmVkRXh0ZW5zaW9uc1tuYW1lXTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBvYmplY3QgdGhhdCByZXByZXNlbnRzIHRoZSBnbFRGIEpTT04uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgZ2x0ZigpOiBJR0xURiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9nbHRmKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImdsVEYgSlNPTiBpcyBub3QgYXZhaWxhYmxlXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dsdGY7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgQklOIGNodW5rIG9mIGEgYmluYXJ5IGdsVEYuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgYmluKCk6IE51bGxhYmxlPElEYXRhQnVmZmVyPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JpbjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBwYXJlbnQgZmlsZSBsb2FkZXIuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgcGFyZW50KCk6IEdMVEZGaWxlTG9hZGVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcGFyZW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIEJhYnlsb24gc2NlbmUgd2hlbiBsb2FkaW5nIHRoZSBhc3NldC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBiYWJ5bG9uU2NlbmUoKTogU2NlbmUge1xyXG4gICAgICAgIGlmICghdGhpcy5fYmFieWxvblNjZW5lKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlNjZW5lIGlzIG5vdCBhdmFpbGFibGVcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fYmFieWxvblNjZW5lO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHJvb3QgQmFieWxvbiBtZXNoIHdoZW4gbG9hZGluZyB0aGUgYXNzZXQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgcm9vdEJhYnlsb25NZXNoKCk6IE51bGxhYmxlPE1lc2g+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcm9vdEJhYnlsb25NZXNoO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHBhcmVudDogR0xURkZpbGVMb2FkZXIpIHtcclxuICAgICAgICB0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGRpc3Bvc2UoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2Rpc3Bvc2VkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2Rpc3Bvc2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5fY29tcGxldGVQcm9taXNlcy5sZW5ndGggPSAwO1xyXG5cclxuICAgICAgICB0aGlzLl9leHRlbnNpb25zLmZvckVhY2goKGV4dGVuc2lvbikgPT4gZXh0ZW5zaW9uLmRpc3Bvc2UgJiYgZXh0ZW5zaW9uLmRpc3Bvc2UoKSk7XHJcbiAgICAgICAgdGhpcy5fZXh0ZW5zaW9ucy5sZW5ndGggPSAwO1xyXG5cclxuICAgICAgICAodGhpcy5fZ2x0ZiBhcyBOdWxsYWJsZTxJR0xURj4pID0gbnVsbDsgLy8gVE9ET1xyXG4gICAgICAgIHRoaXMuX2JpbiA9IG51bGw7XHJcbiAgICAgICAgKHRoaXMuX2JhYnlsb25TY2VuZSBhcyBOdWxsYWJsZTxTY2VuZT4pID0gbnVsbDsgLy8gVE9ET1xyXG4gICAgICAgIHRoaXMuX3Jvb3RCYWJ5bG9uTWVzaCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fZGVmYXVsdEJhYnlsb25NYXRlcmlhbERhdGEgPSB7fTtcclxuICAgICAgICB0aGlzLl9wb3N0U2NlbmVMb2FkQWN0aW9ucy5sZW5ndGggPSAwO1xyXG5cclxuICAgICAgICB0aGlzLl9wYXJlbnQuZGlzcG9zZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbXBvcnRNZXNoQXN5bmMoXHJcbiAgICAgICAgbWVzaGVzTmFtZXM6IGFueSxcclxuICAgICAgICBzY2VuZTogU2NlbmUsXHJcbiAgICAgICAgY29udGFpbmVyOiBOdWxsYWJsZTxBc3NldENvbnRhaW5lcj4sXHJcbiAgICAgICAgZGF0YTogSUdMVEZMb2FkZXJEYXRhLFxyXG4gICAgICAgIHJvb3RVcmw6IHN0cmluZyxcclxuICAgICAgICBvblByb2dyZXNzPzogKGV2ZW50OiBJU2NlbmVMb2FkZXJQcm9ncmVzc0V2ZW50KSA9PiB2b2lkLFxyXG4gICAgICAgIGZpbGVOYW1lID0gXCJcIlxyXG4gICAgKTogUHJvbWlzZTxJU2NlbmVMb2FkZXJBc3luY1Jlc3VsdD4ge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fYmFieWxvblNjZW5lID0gc2NlbmU7XHJcbiAgICAgICAgICAgIHRoaXMuX2Fzc2V0Q29udGFpbmVyID0gY29udGFpbmVyO1xyXG4gICAgICAgICAgICB0aGlzLl9sb2FkRGF0YShkYXRhKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBub2RlczogTnVsbGFibGU8QXJyYXk8bnVtYmVyPj4gPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgaWYgKG1lc2hlc05hbWVzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBub2RlTWFwOiB7IFtuYW1lOiBzdHJpbmddOiBudW1iZXIgfSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2dsdGYubm9kZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgdGhpcy5fZ2x0Zi5ub2Rlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlTWFwW25vZGUubmFtZV0gPSBub2RlLmluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWVzID0gbWVzaGVzTmFtZXMgaW5zdGFuY2VvZiBBcnJheSA/IG1lc2hlc05hbWVzIDogW21lc2hlc05hbWVzXTtcclxuICAgICAgICAgICAgICAgIG5vZGVzID0gbmFtZXMubWFwKChuYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm9kZSA9IG5vZGVNYXBbbmFtZV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBmaW5kIG5vZGUgJyR7bmFtZX0nYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbG9hZEFzeW5jKHJvb3RVcmwsIGZpbGVOYW1lLCBub2RlcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNoZXM6IHRoaXMuX2dldE1lc2hlcygpLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhcnRpY2xlU3lzdGVtczogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgc2tlbGV0b25zOiB0aGlzLl9nZXRTa2VsZXRvbnMoKSxcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25Hcm91cHM6IHRoaXMuX2dldEFuaW1hdGlvbkdyb3VwcygpLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpZ2h0czogdGhpcy5fYmFieWxvbkxpZ2h0cyxcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1Ob2RlczogdGhpcy5fZ2V0VHJhbnNmb3JtTm9kZXMoKSxcclxuICAgICAgICAgICAgICAgICAgICBnZW9tZXRyaWVzOiB0aGlzLl9nZXRHZW9tZXRyaWVzKCksXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZEFzeW5jKHNjZW5lOiBTY2VuZSwgZGF0YTogSUdMVEZMb2FkZXJEYXRhLCByb290VXJsOiBzdHJpbmcsIG9uUHJvZ3Jlc3M/OiAoZXZlbnQ6IElTY2VuZUxvYWRlclByb2dyZXNzRXZlbnQpID0+IHZvaWQsIGZpbGVOYW1lID0gXCJcIik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fYmFieWxvblNjZW5lID0gc2NlbmU7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvYWREYXRhKGRhdGEpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbG9hZEFzeW5jKHJvb3RVcmwsIGZpbGVOYW1lLCBudWxsLCAoKSA9PiB1bmRlZmluZWQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2xvYWRBc3luYzxUPihyb290VXJsOiBzdHJpbmcsIGZpbGVOYW1lOiBzdHJpbmcsIG5vZGVzOiBOdWxsYWJsZTxBcnJheTxudW1iZXI+PiwgcmVzdWx0RnVuYzogKCkgPT4gVCk6IFByb21pc2U8VD4ge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yb290VXJsID0gcm9vdFVybDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3VuaXF1ZVJvb3RVcmwgPSAhcm9vdFVybC5zdGFydHNXaXRoKFwiZmlsZTpcIikgJiYgZmlsZU5hbWUgPyByb290VXJsIDogYCR7cm9vdFVybH0ke0RhdGUubm93KCl9L2A7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9maWxlTmFtZSA9IGZpbGVOYW1lO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYWxsTWF0ZXJpYWxzRGlydHlSZXF1aXJlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRFeHRlbnNpb25zKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jaGVja0V4dGVuc2lvbnMoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBsb2FkaW5nVG9SZWFkeUNvdW50ZXJOYW1lID0gYCR7R0xURkxvYWRlclN0YXRlW0dMVEZMb2FkZXJTdGF0ZS5MT0FESU5HXX0gPT4gJHtHTFRGTG9hZGVyU3RhdGVbR0xURkxvYWRlclN0YXRlLlJFQURZXX1gO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbG9hZGluZ1RvQ29tcGxldGVDb3VudGVyTmFtZSA9IGAke0dMVEZMb2FkZXJTdGF0ZVtHTFRGTG9hZGVyU3RhdGUuTE9BRElOR119ID0+ICR7R0xURkxvYWRlclN0YXRlW0dMVEZMb2FkZXJTdGF0ZS5DT01QTEVURV19YDtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wYXJlbnQuX3N0YXJ0UGVyZm9ybWFuY2VDb3VudGVyKGxvYWRpbmdUb1JlYWR5Q291bnRlck5hbWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcGFyZW50Ll9zdGFydFBlcmZvcm1hbmNlQ291bnRlcihsb2FkaW5nVG9Db21wbGV0ZUNvdW50ZXJOYW1lKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wYXJlbnQuX3NldFN0YXRlKEdMVEZMb2FkZXJTdGF0ZS5MT0FESU5HKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2V4dGVuc2lvbnNPbkxvYWRpbmcoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9taXNlcyA9IG5ldyBBcnJheTxQcm9taXNlPGFueT4+KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQmxvY2sgdGhlIG1hcmtpbmcgb2YgbWF0ZXJpYWxzIGRpcnR5IHVudGlsIHRoZSBzY2VuZSBpcyBsb2FkZWQuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBvbGRCbG9ja01hdGVyaWFsRGlydHlNZWNoYW5pc20gPSB0aGlzLl9iYWJ5bG9uU2NlbmUuYmxvY2tNYXRlcmlhbERpcnR5TWVjaGFuaXNtO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYmFieWxvblNjZW5lLmJsb2NrTWF0ZXJpYWxEaXJ0eU1lY2hhbmlzbSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnBhcmVudC5sb2FkT25seU1hdGVyaWFscykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChub2Rlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMubG9hZFNjZW5lQXN5bmMoXCIvbm9kZXNcIiwgeyBub2Rlczogbm9kZXMsIGluZGV4OiAtMSB9KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9nbHRmLnNjZW5lICE9IHVuZGVmaW5lZCB8fCAodGhpcy5fZ2x0Zi5zY2VuZXMgJiYgdGhpcy5fZ2x0Zi5zY2VuZXNbMF0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNjZW5lID0gQXJyYXlJdGVtLkdldChgL3NjZW5lYCwgdGhpcy5fZ2x0Zi5zY2VuZXMsIHRoaXMuX2dsdGYuc2NlbmUgfHwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5sb2FkU2NlbmVBc3luYyhgL3NjZW5lcy8ke3NjZW5lLmluZGV4fWAsIHNjZW5lKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5wYXJlbnQuc2tpcE1hdGVyaWFscyAmJiB0aGlzLnBhcmVudC5sb2FkQWxsTWF0ZXJpYWxzICYmIHRoaXMuX2dsdGYubWF0ZXJpYWxzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgbSA9IDA7IG0gPCB0aGlzLl9nbHRmLm1hdGVyaWFscy5sZW5ndGg7ICsrbSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRlcmlhbCA9IHRoaXMuX2dsdGYubWF0ZXJpYWxzW21dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gXCIvbWF0ZXJpYWxzL1wiICsgbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmFieWxvbkRyYXdNb2RlID0gTWF0ZXJpYWwuVHJpYW5nbGVGaWxsTW9kZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5fbG9hZE1hdGVyaWFsQXN5bmMoY29udGV4dCwgbWF0ZXJpYWwsIG51bGwsIGJhYnlsb25EcmF3TW9kZSwgKCkgPT4ge30pKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gUmVzdG9yZSB0aGUgYmxvY2tpbmcgb2YgbWF0ZXJpYWwgZGlydHkuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fYWxsTWF0ZXJpYWxzRGlydHlSZXF1aXJlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgY2FuIGhhcHBlbiBpZiB3ZSBhZGQgYSBsaWdodCBmb3IgaW5zdGFuY2UgYXMgaXQgd2lsbCBpbXBhY3QgdGhlIHdob2xlIHNjZW5lLlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgYXV0b21hdGljYWxseSByZXNldHMgZXZlcnl0aGluZyBpZiBuZWVkZWQuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYmFieWxvblNjZW5lLmJsb2NrTWF0ZXJpYWxEaXJ0eU1lY2hhbmlzbSA9IG9sZEJsb2NrTWF0ZXJpYWxEaXJ0eU1lY2hhbmlzbTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQnkgZGVmYXVsdCBhIG5ld2x5IGNyZWF0ZWQgbWF0ZXJpYWwgaXMgZGlydHkgc28gdGhlcmUgaXMgbm8gbmVlZCB0byBmbGFnIHRoZSBmdWxsIHNjZW5lIGFzIGRpcnR5LlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEZvciBwZXJmIHJlYXNvbnMsIHdlIHRoZW4gYnlwYXNzIGJsb2NrTWF0ZXJpYWxEaXJ0eU1lY2hhbmlzbSBhcyB0aGlzIHdvdWxkIFwiZGlydHlcIiB0aGUgZW50aXJlIHNjZW5lLlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2JhYnlsb25TY2VuZS5fZm9yY2VCbG9ja01hdGVyaWFsRGlydHlNZWNoYW5pc20ob2xkQmxvY2tNYXRlcmlhbERpcnR5TWVjaGFuaXNtKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fcGFyZW50LmNvbXBpbGVNYXRlcmlhbHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMuX2NvbXBpbGVNYXRlcmlhbHNBc3luYygpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fcGFyZW50LmNvbXBpbGVTaGFkb3dHZW5lcmF0b3JzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaCh0aGlzLl9jb21waWxlU2hhZG93R2VuZXJhdG9yc0FzeW5jKCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdFByb21pc2UgPSBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3Jvb3RCYWJ5bG9uTWVzaCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9yb290QmFieWxvbk1lc2guc2V0RW5hYmxlZCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2V4dGVuc2lvbnNPblJlYWR5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGFyZW50Ll9zZXRTdGF0ZShHTFRGTG9hZGVyU3RhdGUuUkVBRFkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdGFydEFuaW1hdGlvbnMoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdEZ1bmMoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRQcm9taXNlLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BhcmVudC5fZW5kUGVyZm9ybWFuY2VDb3VudGVyKGxvYWRpbmdUb1JlYWR5Q291bnRlck5hbWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBUb29scy5TZXRJbW1lZGlhdGUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX2Rpc3Bvc2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcm9taXNlLmFsbCh0aGlzLl9jb21wbGV0ZVByb21pc2VzKS50aGVuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGFyZW50Ll9lbmRQZXJmb3JtYW5jZUNvdW50ZXIobG9hZGluZ1RvQ29tcGxldGVDb3VudGVyTmFtZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wYXJlbnQuX3NldFN0YXRlKEdMVEZMb2FkZXJTdGF0ZS5DT01QTEVURSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wYXJlbnQub25Db21wbGV0ZU9ic2VydmFibGUubm90aWZ5T2JzZXJ2ZXJzKHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3BhcmVudC5vbkNvbXBsZXRlT2JzZXJ2YWJsZS5jbGVhcigpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGFyZW50Lm9uRXJyb3JPYnNlcnZhYmxlLm5vdGlmeU9ic2VydmVycyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3BhcmVudC5vbkVycm9yT2JzZXJ2YWJsZS5jbGVhcigpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5fZGlzcG9zZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wYXJlbnQub25FcnJvck9ic2VydmFibGUubm90aWZ5T2JzZXJ2ZXJzKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wYXJlbnQub25FcnJvck9ic2VydmFibGUuY2xlYXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2xvYWREYXRhKGRhdGE6IElHTFRGTG9hZGVyRGF0YSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2dsdGYgPSBkYXRhLmpzb24gYXMgSUdMVEY7XHJcbiAgICAgICAgdGhpcy5fc2V0dXBEYXRhKCk7XHJcblxyXG4gICAgICAgIGlmIChkYXRhLmJpbikge1xyXG4gICAgICAgICAgICBjb25zdCBidWZmZXJzID0gdGhpcy5fZ2x0Zi5idWZmZXJzO1xyXG4gICAgICAgICAgICBpZiAoYnVmZmVycyAmJiBidWZmZXJzWzBdICYmICFidWZmZXJzWzBdLnVyaSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYmluYXJ5QnVmZmVyID0gYnVmZmVyc1swXTtcclxuICAgICAgICAgICAgICAgIGlmIChiaW5hcnlCdWZmZXIuYnl0ZUxlbmd0aCA8IGRhdGEuYmluLmJ5dGVMZW5ndGggLSAzIHx8IGJpbmFyeUJ1ZmZlci5ieXRlTGVuZ3RoID4gZGF0YS5iaW4uYnl0ZUxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZ2dlci5XYXJuKGBCaW5hcnkgYnVmZmVyIGxlbmd0aCAoJHtiaW5hcnlCdWZmZXIuYnl0ZUxlbmd0aH0pIGZyb20gSlNPTiBkb2VzIG5vdCBtYXRjaCBjaHVuayBsZW5ndGggKCR7ZGF0YS5iaW4uYnl0ZUxlbmd0aH0pYCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5fYmluID0gZGF0YS5iaW47XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBMb2dnZXIuV2FybihcIlVuZXhwZWN0ZWQgQklOIGNodW5rXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3NldHVwRGF0YSgpOiB2b2lkIHtcclxuICAgICAgICBBcnJheUl0ZW0uQXNzaWduKHRoaXMuX2dsdGYuYWNjZXNzb3JzKTtcclxuICAgICAgICBBcnJheUl0ZW0uQXNzaWduKHRoaXMuX2dsdGYuYW5pbWF0aW9ucyk7XHJcbiAgICAgICAgQXJyYXlJdGVtLkFzc2lnbih0aGlzLl9nbHRmLmJ1ZmZlcnMpO1xyXG4gICAgICAgIEFycmF5SXRlbS5Bc3NpZ24odGhpcy5fZ2x0Zi5idWZmZXJWaWV3cyk7XHJcbiAgICAgICAgQXJyYXlJdGVtLkFzc2lnbih0aGlzLl9nbHRmLmNhbWVyYXMpO1xyXG4gICAgICAgIEFycmF5SXRlbS5Bc3NpZ24odGhpcy5fZ2x0Zi5pbWFnZXMpO1xyXG4gICAgICAgIEFycmF5SXRlbS5Bc3NpZ24odGhpcy5fZ2x0Zi5tYXRlcmlhbHMpO1xyXG4gICAgICAgIEFycmF5SXRlbS5Bc3NpZ24odGhpcy5fZ2x0Zi5tZXNoZXMpO1xyXG4gICAgICAgIEFycmF5SXRlbS5Bc3NpZ24odGhpcy5fZ2x0Zi5ub2Rlcyk7XHJcbiAgICAgICAgQXJyYXlJdGVtLkFzc2lnbih0aGlzLl9nbHRmLnNhbXBsZXJzKTtcclxuICAgICAgICBBcnJheUl0ZW0uQXNzaWduKHRoaXMuX2dsdGYuc2NlbmVzKTtcclxuICAgICAgICBBcnJheUl0ZW0uQXNzaWduKHRoaXMuX2dsdGYuc2tpbnMpO1xyXG4gICAgICAgIEFycmF5SXRlbS5Bc3NpZ24odGhpcy5fZ2x0Zi50ZXh0dXJlcyk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9nbHRmLm5vZGVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vZGVQYXJlbnRzOiB7IFtpbmRleDogbnVtYmVyXTogbnVtYmVyIH0gPSB7fTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBub2RlIG9mIHRoaXMuX2dsdGYubm9kZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChub2RlLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBpbmRleCBvZiBub2RlLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVQYXJlbnRzW2luZGV4XSA9IG5vZGUuaW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCByb290Tm9kZSA9IHRoaXMuX2NyZWF0ZVJvb3ROb2RlKCk7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiB0aGlzLl9nbHRmLm5vZGVzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnRJbmRleCA9IG5vZGVQYXJlbnRzW25vZGUuaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSBwYXJlbnRJbmRleCA9PT0gdW5kZWZpbmVkID8gcm9vdE5vZGUgOiB0aGlzLl9nbHRmLm5vZGVzW3BhcmVudEluZGV4XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9sb2FkRXh0ZW5zaW9ucygpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGNvbnN0IG5hbWUgaW4gR0xURkxvYWRlci5fUmVnaXN0ZXJlZEV4dGVuc2lvbnMpIHtcclxuICAgICAgICAgICAgY29uc3QgZXh0ZW5zaW9uID0gR0xURkxvYWRlci5fUmVnaXN0ZXJlZEV4dGVuc2lvbnNbbmFtZV0uZmFjdG9yeSh0aGlzKTtcclxuICAgICAgICAgICAgaWYgKGV4dGVuc2lvbi5uYW1lICE9PSBuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBMb2dnZXIuV2FybihgVGhlIG5hbWUgb2YgdGhlIGdsVEYgbG9hZGVyIGV4dGVuc2lvbiBpbnN0YW5jZSBkb2VzIG5vdCBtYXRjaCB0aGUgcmVnaXN0ZXJlZCBuYW1lOiAke2V4dGVuc2lvbi5uYW1lfSAhPT0gJHtuYW1lfWApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9leHRlbnNpb25zLnB1c2goZXh0ZW5zaW9uKTtcclxuICAgICAgICAgICAgdGhpcy5fcGFyZW50Lm9uRXh0ZW5zaW9uTG9hZGVkT2JzZXJ2YWJsZS5ub3RpZnlPYnNlcnZlcnMoZXh0ZW5zaW9uKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2V4dGVuc2lvbnMuc29ydCgoYSwgYikgPT4gKGEub3JkZXIgfHwgTnVtYmVyLk1BWF9WQUxVRSkgLSAoYi5vcmRlciB8fCBOdW1iZXIuTUFYX1ZBTFVFKSk7XHJcbiAgICAgICAgdGhpcy5fcGFyZW50Lm9uRXh0ZW5zaW9uTG9hZGVkT2JzZXJ2YWJsZS5jbGVhcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NoZWNrRXh0ZW5zaW9ucygpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5fZ2x0Zi5leHRlbnNpb25zUmVxdWlyZWQpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBuYW1lIG9mIHRoaXMuX2dsdGYuZXh0ZW5zaW9uc1JlcXVpcmVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhdmFpbGFibGUgPSB0aGlzLl9leHRlbnNpb25zLnNvbWUoKGV4dGVuc2lvbikgPT4gZXh0ZW5zaW9uLm5hbWUgPT09IG5hbWUgJiYgZXh0ZW5zaW9uLmVuYWJsZWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFhdmFpbGFibGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFJlcXVpcmVkIGV4dGVuc2lvbiAke25hbWV9IGlzIG5vdCBhdmFpbGFibGVgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jcmVhdGVSb290Tm9kZSgpOiBJTm9kZSB7XHJcbiAgICAgICAgdGhpcy5fYmFieWxvblNjZW5lLl9ibG9ja0VudGl0eUNvbGxlY3Rpb24gPSAhIXRoaXMuX2Fzc2V0Q29udGFpbmVyO1xyXG4gICAgICAgIHRoaXMuX3Jvb3RCYWJ5bG9uTWVzaCA9IG5ldyBNZXNoKFwiX19yb290X19cIiwgdGhpcy5fYmFieWxvblNjZW5lKTtcclxuICAgICAgICB0aGlzLl9yb290QmFieWxvbk1lc2guX3BhcmVudENvbnRhaW5lciA9IHRoaXMuX2Fzc2V0Q29udGFpbmVyO1xyXG4gICAgICAgIHRoaXMuX2JhYnlsb25TY2VuZS5fYmxvY2tFbnRpdHlDb2xsZWN0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fcm9vdEJhYnlsb25NZXNoLnNldEVuYWJsZWQoZmFsc2UpO1xyXG5cclxuICAgICAgICBjb25zdCByb290Tm9kZTogSU5vZGUgPSB7XHJcbiAgICAgICAgICAgIF9iYWJ5bG9uVHJhbnNmb3JtTm9kZTogdGhpcy5fcm9vdEJhYnlsb25NZXNoLFxyXG4gICAgICAgICAgICBpbmRleDogLTEsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgc3dpdGNoICh0aGlzLl9wYXJlbnQuY29vcmRpbmF0ZVN5c3RlbU1vZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBHTFRGTG9hZGVyQ29vcmRpbmF0ZVN5c3RlbU1vZGUuQVVUTzoge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9iYWJ5bG9uU2NlbmUudXNlUmlnaHRIYW5kZWRTeXN0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICByb290Tm9kZS5yb3RhdGlvbiA9IFswLCAxLCAwLCAwXTtcclxuICAgICAgICAgICAgICAgICAgICByb290Tm9kZS5zY2FsZSA9IFsxLCAxLCAtMV07XHJcbiAgICAgICAgICAgICAgICAgICAgR0xURkxvYWRlci5fTG9hZFRyYW5zZm9ybShyb290Tm9kZSwgdGhpcy5fcm9vdEJhYnlsb25NZXNoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgR0xURkxvYWRlckNvb3JkaW5hdGVTeXN0ZW1Nb2RlLkZPUkNFX1JJR0hUX0hBTkRFRDoge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYmFieWxvblNjZW5lLnVzZVJpZ2h0SGFuZGVkU3lzdGVtID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBjb29yZGluYXRlIHN5c3RlbSBtb2RlICgke3RoaXMuX3BhcmVudC5jb29yZGluYXRlU3lzdGVtTW9kZX0pYCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX3BhcmVudC5vbk1lc2hMb2FkZWRPYnNlcnZhYmxlLm5vdGlmeU9ic2VydmVycyh0aGlzLl9yb290QmFieWxvbk1lc2gpO1xyXG4gICAgICAgIHJldHVybiByb290Tm9kZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIExvYWRzIGEgZ2xURiBzY2VuZS5cclxuICAgICAqIEBwYXJhbSBjb250ZXh0IFRoZSBjb250ZXh0IHdoZW4gbG9hZGluZyB0aGUgYXNzZXRcclxuICAgICAqIEBwYXJhbSBzY2VuZSBUaGUgZ2xURiBzY2VuZSBwcm9wZXJ0eVxyXG4gICAgICogQHJldHVybnMgQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgbG9hZCBpcyBjb21wbGV0ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZFNjZW5lQXN5bmMoY29udGV4dDogc3RyaW5nLCBzY2VuZTogSVNjZW5lKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgY29uc3QgZXh0ZW5zaW9uUHJvbWlzZSA9IHRoaXMuX2V4dGVuc2lvbnNMb2FkU2NlbmVBc3luYyhjb250ZXh0LCBzY2VuZSk7XHJcbiAgICAgICAgaWYgKGV4dGVuc2lvblByb21pc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGV4dGVuc2lvblByb21pc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBwcm9taXNlcyA9IG5ldyBBcnJheTxQcm9taXNlPGFueT4+KCk7XHJcblxyXG4gICAgICAgIHRoaXMubG9nT3BlbihgJHtjb250ZXh0fSAke3NjZW5lLm5hbWUgfHwgXCJcIn1gKTtcclxuXHJcbiAgICAgICAgaWYgKHNjZW5lLm5vZGVzKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgaW5kZXggb2Ygc2NlbmUubm9kZXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBBcnJheUl0ZW0uR2V0KGAke2NvbnRleHR9L25vZGVzLyR7aW5kZXh9YCwgdGhpcy5fZ2x0Zi5ub2RlcywgaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWROb2RlQXN5bmMoYC9ub2Rlcy8ke25vZGUuaW5kZXh9YCwgbm9kZSwgKGJhYnlsb25NZXNoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhYnlsb25NZXNoLnBhcmVudCA9IHRoaXMuX3Jvb3RCYWJ5bG9uTWVzaDtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBhY3Rpb24gb2YgdGhpcy5fcG9zdFNjZW5lTG9hZEFjdGlvbnMpIHtcclxuICAgICAgICAgICAgYWN0aW9uKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMuX2xvYWRBbmltYXRpb25zQXN5bmMoKSk7XHJcblxyXG4gICAgICAgIHRoaXMubG9nQ2xvc2UoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IHt9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9mb3JFYWNoUHJpbWl0aXZlKG5vZGU6IElOb2RlLCBjYWxsYmFjazogKGJhYnlsb25NZXNoOiBBYnN0cmFjdE1lc2gpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICBpZiAobm9kZS5fcHJpbWl0aXZlQmFieWxvbk1lc2hlcykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGJhYnlsb25NZXNoIG9mIG5vZGUuX3ByaW1pdGl2ZUJhYnlsb25NZXNoZXMpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGJhYnlsb25NZXNoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9nZXRHZW9tZXRyaWVzKCk6IEdlb21ldHJ5W10ge1xyXG4gICAgICAgIGNvbnN0IGdlb21ldHJpZXM6IEdlb21ldHJ5W10gPSBbXTtcclxuXHJcbiAgICAgICAgY29uc3Qgbm9kZXMgPSB0aGlzLl9nbHRmLm5vZGVzO1xyXG4gICAgICAgIGlmIChub2Rlcykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IG5vZGUgb2Ygbm9kZXMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2ZvckVhY2hQcmltaXRpdmUobm9kZSwgKGJhYnlsb25NZXNoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZ2VvbWV0cnkgPSAoYmFieWxvbk1lc2ggYXMgTWVzaCkuZ2VvbWV0cnk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdlb21ldHJ5ICYmIGdlb21ldHJpZXMuaW5kZXhPZihnZW9tZXRyeSkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdlb21ldHJpZXMucHVzaChnZW9tZXRyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBnZW9tZXRyaWVzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2dldE1lc2hlcygpOiBBYnN0cmFjdE1lc2hbXSB7XHJcbiAgICAgICAgY29uc3QgbWVzaGVzOiBBYnN0cmFjdE1lc2hbXSA9IFtdO1xyXG5cclxuICAgICAgICAvLyBSb290IG1lc2ggaXMgYWx3YXlzIGZpcnN0LCBpZiBhdmFpbGFibGUuXHJcbiAgICAgICAgaWYgKHRoaXMuX3Jvb3RCYWJ5bG9uTWVzaCkge1xyXG4gICAgICAgICAgICBtZXNoZXMucHVzaCh0aGlzLl9yb290QmFieWxvbk1lc2gpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgbm9kZXMgPSB0aGlzLl9nbHRmLm5vZGVzO1xyXG4gICAgICAgIGlmIChub2Rlcykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IG5vZGUgb2Ygbm9kZXMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2ZvckVhY2hQcmltaXRpdmUobm9kZSwgKGJhYnlsb25NZXNoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzaGVzLnB1c2goYmFieWxvbk1lc2gpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBtZXNoZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZ2V0VHJhbnNmb3JtTm9kZXMoKTogVHJhbnNmb3JtTm9kZVtdIHtcclxuICAgICAgICBjb25zdCB0cmFuc2Zvcm1Ob2RlczogVHJhbnNmb3JtTm9kZVtdID0gW107XHJcblxyXG4gICAgICAgIGNvbnN0IG5vZGVzID0gdGhpcy5fZ2x0Zi5ub2RlcztcclxuICAgICAgICBpZiAobm9kZXMpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBub2RlIG9mIG5vZGVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5fYmFieWxvblRyYW5zZm9ybU5vZGUgJiYgbm9kZS5fYmFieWxvblRyYW5zZm9ybU5vZGUuZ2V0Q2xhc3NOYW1lKCkgPT09IFwiVHJhbnNmb3JtTm9kZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtTm9kZXMucHVzaChub2RlLl9iYWJ5bG9uVHJhbnNmb3JtTm9kZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5fYmFieWxvblRyYW5zZm9ybU5vZGVGb3JTa2luKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtTm9kZXMucHVzaChub2RlLl9iYWJ5bG9uVHJhbnNmb3JtTm9kZUZvclNraW4pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJhbnNmb3JtTm9kZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZ2V0U2tlbGV0b25zKCk6IFNrZWxldG9uW10ge1xyXG4gICAgICAgIGNvbnN0IHNrZWxldG9uczogU2tlbGV0b25bXSA9IFtdO1xyXG5cclxuICAgICAgICBjb25zdCBza2lucyA9IHRoaXMuX2dsdGYuc2tpbnM7XHJcbiAgICAgICAgaWYgKHNraW5zKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qgc2tpbiBvZiBza2lucykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNraW4uX2RhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBza2VsZXRvbnMucHVzaChza2luLl9kYXRhLmJhYnlsb25Ta2VsZXRvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBza2VsZXRvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZ2V0QW5pbWF0aW9uR3JvdXBzKCk6IEFuaW1hdGlvbkdyb3VwW10ge1xyXG4gICAgICAgIGNvbnN0IGFuaW1hdGlvbkdyb3VwczogQW5pbWF0aW9uR3JvdXBbXSA9IFtdO1xyXG5cclxuICAgICAgICBjb25zdCBhbmltYXRpb25zID0gdGhpcy5fZ2x0Zi5hbmltYXRpb25zO1xyXG4gICAgICAgIGlmIChhbmltYXRpb25zKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgYW5pbWF0aW9uIG9mIGFuaW1hdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChhbmltYXRpb24uX2JhYnlsb25BbmltYXRpb25Hcm91cCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkdyb3Vwcy5wdXNoKGFuaW1hdGlvbi5fYmFieWxvbkFuaW1hdGlvbkdyb3VwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGFuaW1hdGlvbkdyb3VwcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9zdGFydEFuaW1hdGlvbnMoKTogdm9pZCB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLl9wYXJlbnQuYW5pbWF0aW9uU3RhcnRNb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgR0xURkxvYWRlckFuaW1hdGlvblN0YXJ0TW9kZS5OT05FOiB7XHJcbiAgICAgICAgICAgICAgICAvLyBkbyBub3RoaW5nXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIEdMVEZMb2FkZXJBbmltYXRpb25TdGFydE1vZGUuRklSU1Q6IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJhYnlsb25BbmltYXRpb25Hcm91cHMgPSB0aGlzLl9nZXRBbmltYXRpb25Hcm91cHMoKTtcclxuICAgICAgICAgICAgICAgIGlmIChiYWJ5bG9uQW5pbWF0aW9uR3JvdXBzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhYnlsb25BbmltYXRpb25Hcm91cHNbMF0uc3RhcnQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIEdMVEZMb2FkZXJBbmltYXRpb25TdGFydE1vZGUuQUxMOiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBiYWJ5bG9uQW5pbWF0aW9uR3JvdXBzID0gdGhpcy5fZ2V0QW5pbWF0aW9uR3JvdXBzKCk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGJhYnlsb25BbmltYXRpb25Hcm91cCBvZiBiYWJ5bG9uQW5pbWF0aW9uR3JvdXBzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFieWxvbkFuaW1hdGlvbkdyb3VwLnN0YXJ0KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICAgICAgTG9nZ2VyLkVycm9yKGBJbnZhbGlkIGFuaW1hdGlvbiBzdGFydCBtb2RlICgke3RoaXMuX3BhcmVudC5hbmltYXRpb25TdGFydE1vZGV9KWApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTG9hZHMgYSBnbFRGIG5vZGUuXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBUaGUgY29udGV4dCB3aGVuIGxvYWRpbmcgdGhlIGFzc2V0XHJcbiAgICAgKiBAcGFyYW0gbm9kZSBUaGUgZ2xURiBub2RlIHByb3BlcnR5XHJcbiAgICAgKiBAcGFyYW0gYXNzaWduIEEgZnVuY3Rpb24gY2FsbGVkIHN5bmNocm9ub3VzbHkgYWZ0ZXIgcGFyc2luZyB0aGUgZ2xURiBwcm9wZXJ0aWVzXHJcbiAgICAgKiBAcmV0dXJucyBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBsb2FkZWQgQmFieWxvbiBtZXNoIHdoZW4gdGhlIGxvYWQgaXMgY29tcGxldGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWROb2RlQXN5bmMoY29udGV4dDogc3RyaW5nLCBub2RlOiBJTm9kZSwgYXNzaWduOiAoYmFieWxvblRyYW5zZm9ybU5vZGU6IFRyYW5zZm9ybU5vZGUpID0+IHZvaWQgPSAoKSA9PiB7fSk6IFByb21pc2U8VHJhbnNmb3JtTm9kZT4ge1xyXG4gICAgICAgIGNvbnN0IGV4dGVuc2lvblByb21pc2UgPSB0aGlzLl9leHRlbnNpb25zTG9hZE5vZGVBc3luYyhjb250ZXh0LCBub2RlLCBhc3NpZ24pO1xyXG4gICAgICAgIGlmIChleHRlbnNpb25Qcm9taXNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBleHRlbnNpb25Qcm9taXNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG5vZGUuX2JhYnlsb25UcmFuc2Zvcm1Ob2RlKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtjb250ZXh0fTogSW52YWxpZCByZWN1cnNpdmUgbm9kZSBoaWVyYXJjaHlgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gbmV3IEFycmF5PFByb21pc2U8YW55Pj4oKTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2dPcGVuKGAke2NvbnRleHR9ICR7bm9kZS5uYW1lIHx8IFwiXCJ9YCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGxvYWROb2RlID0gKGJhYnlsb25UcmFuc2Zvcm1Ob2RlOiBUcmFuc2Zvcm1Ob2RlKSA9PiB7XHJcbiAgICAgICAgICAgIEdMVEZMb2FkZXIuQWRkUG9pbnRlck1ldGFkYXRhKGJhYnlsb25UcmFuc2Zvcm1Ob2RlLCBjb250ZXh0KTtcclxuICAgICAgICAgICAgR0xURkxvYWRlci5fTG9hZFRyYW5zZm9ybShub2RlLCBiYWJ5bG9uVHJhbnNmb3JtTm9kZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAobm9kZS5jYW1lcmEgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYW1lcmEgPSBBcnJheUl0ZW0uR2V0KGAke2NvbnRleHR9L2NhbWVyYWAsIHRoaXMuX2dsdGYuY2FtZXJhcywgbm9kZS5jYW1lcmEpO1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRDYW1lcmFBc3luYyhgL2NhbWVyYXMvJHtjYW1lcmEuaW5kZXh9YCwgY2FtZXJhLCAoYmFieWxvbkNhbWVyYSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uQ2FtZXJhLnBhcmVudCA9IGJhYnlsb25UcmFuc2Zvcm1Ob2RlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAobm9kZS5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBpbmRleCBvZiBub2RlLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hpbGROb2RlID0gQXJyYXlJdGVtLkdldChgJHtjb250ZXh0fS9jaGlsZHJlbi8ke2luZGV4fWAsIHRoaXMuX2dsdGYubm9kZXMsIGluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWROb2RlQXN5bmMoYC9ub2Rlcy8ke2NoaWxkTm9kZS5pbmRleH1gLCBjaGlsZE5vZGUsIChjaGlsZEJhYnlsb25NZXNoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZEJhYnlsb25NZXNoLnBhcmVudCA9IGJhYnlsb25UcmFuc2Zvcm1Ob2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGFzc2lnbihiYWJ5bG9uVHJhbnNmb3JtTm9kZSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKG5vZGUubWVzaCA9PSB1bmRlZmluZWQgfHwgbm9kZS5za2luICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBjb25zdCBub2RlTmFtZSA9IG5vZGUubmFtZSB8fCBgbm9kZSR7bm9kZS5pbmRleH1gO1xyXG4gICAgICAgICAgICB0aGlzLl9iYWJ5bG9uU2NlbmUuX2Jsb2NrRW50aXR5Q29sbGVjdGlvbiA9ICEhdGhpcy5fYXNzZXRDb250YWluZXI7XHJcbiAgICAgICAgICAgIGNvbnN0IHRyYW5zZm9ybU5vZGUgPSBuZXcgVHJhbnNmb3JtTm9kZShub2RlTmFtZSwgdGhpcy5fYmFieWxvblNjZW5lKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtTm9kZS5fcGFyZW50Q29udGFpbmVyID0gdGhpcy5fYXNzZXRDb250YWluZXI7XHJcbiAgICAgICAgICAgIHRoaXMuX2JhYnlsb25TY2VuZS5fYmxvY2tFbnRpdHlDb2xsZWN0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmIChub2RlLm1lc2ggPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBub2RlLl9iYWJ5bG9uVHJhbnNmb3JtTm9kZSA9IHRyYW5zZm9ybU5vZGU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBub2RlLl9iYWJ5bG9uVHJhbnNmb3JtTm9kZUZvclNraW4gPSB0cmFuc2Zvcm1Ob2RlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxvYWROb2RlKHRyYW5zZm9ybU5vZGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG5vZGUubWVzaCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaWYgKG5vZGUuc2tpbiA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1lc2ggPSBBcnJheUl0ZW0uR2V0KGAke2NvbnRleHR9L21lc2hgLCB0aGlzLl9nbHRmLm1lc2hlcywgbm9kZS5tZXNoKTtcclxuICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5fbG9hZE1lc2hBc3luYyhgL21lc2hlcy8ke21lc2guaW5kZXh9YCwgbm9kZSwgbWVzaCwgbG9hZE5vZGUpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAjc2tpbnMgKHNlY29uZCBpbXBsZW1lbnRhdGlvbiBub3RlKVxyXG4gICAgICAgICAgICAgICAgLy8gVGhpcyBjb2RlIHBhdGggd2lsbCBwbGFjZSB0aGUgc2tpbm5lZCBtZXNoIGFzIGEgc2libGluZyBvZiB0aGUgc2tlbGV0b24gcm9vdCBub2RlIHdpdGhvdXQgbG9hZGluZyB0aGVcclxuICAgICAgICAgICAgICAgIC8vIHRyYW5zZm9ybSwgd2hpY2ggZWZmZWN0aXZlbHkgaWdub3JlcyB0aGUgdHJhbnNmb3JtIG9mIHRoZSBza2lubmVkIG1lc2gsIGFzIHBlciBzcGVjLlxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IG1lc2ggPSBBcnJheUl0ZW0uR2V0KGAke2NvbnRleHR9L21lc2hgLCB0aGlzLl9nbHRmLm1lc2hlcywgbm9kZS5tZXNoKTtcclxuICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9hZE1lc2hBc3luYyhgL21lc2hlcy8ke21lc2guaW5kZXh9YCwgbm9kZSwgbWVzaCwgKGJhYnlsb25UcmFuc2Zvcm1Ob2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhYnlsb25UcmFuc2Zvcm1Ob2RlRm9yU2tpbiA9IG5vZGUuX2JhYnlsb25UcmFuc2Zvcm1Ob2RlRm9yU2tpbiE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBNZXJnZSB0aGUgbWV0YWRhdGEgZnJvbSB0aGUgc2tpbiBub2RlIHRvIHRoZSBza2lubmVkIG1lc2ggaW4gY2FzZSBhIGxvYWRlciBleHRlbnNpb24gYWRkZWQgbWV0YWRhdGEuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhYnlsb25UcmFuc2Zvcm1Ob2RlLm1ldGFkYXRhID0gbWVyZ2VEZWVwKGJhYnlsb25UcmFuc2Zvcm1Ob2RlRm9yU2tpbi5tZXRhZGF0YSwgYmFieWxvblRyYW5zZm9ybU5vZGUubWV0YWRhdGEgfHwge30pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2tpbiA9IEFycmF5SXRlbS5HZXQoYCR7Y29udGV4dH0vc2tpbmAsIHRoaXMuX2dsdGYuc2tpbnMsIG5vZGUuc2tpbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2FkU2tpbkFzeW5jKGAvc2tpbnMvJHtza2luLmluZGV4fWAsIG5vZGUsIHNraW4sIChiYWJ5bG9uU2tlbGV0b24pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9mb3JFYWNoUHJpbWl0aXZlKG5vZGUsIChiYWJ5bG9uTWVzaCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uTWVzaC5za2VsZXRvbiA9IGJhYnlsb25Ta2VsZXRvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2FpdCB1bnRpbCBhbGwgdGhlIG5vZGVzIGFyZSBwYXJlbnRlZCBiZWZvcmUgcGFyZW50aW5nIHRoZSBza2lubmVkIG1lc2guXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcG9zdFNjZW5lTG9hZEFjdGlvbnMucHVzaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChza2luLnNrZWxldG9uICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUGxhY2UgdGhlIHNraW5uZWQgbWVzaCBub2RlIGFzIGEgc2libGluZyBvZiB0aGUgc2tlbGV0b24gcm9vdCBub2RlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSGFuZGxlIHNwZWNpYWwgY2FzZSB3aGVuIHRoZSBwYXJlbnQgb2YgdGhlIHNrZWxldG9uIHJvb3QgaXMgdGhlIHNraW5uZWQgbWVzaC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudE5vZGUgPSBBcnJheUl0ZW0uR2V0KGAvc2tpbnMvJHtza2luLmluZGV4fS9za2VsZXRvbmAsIHRoaXMuX2dsdGYubm9kZXMsIHNraW4uc2tlbGV0b24pLnBhcmVudCE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5pbmRleCA9PT0gcGFyZW50Tm9kZS5pbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhYnlsb25UcmFuc2Zvcm1Ob2RlLnBhcmVudCA9IGJhYnlsb25UcmFuc2Zvcm1Ob2RlRm9yU2tpbi5wYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhYnlsb25UcmFuc2Zvcm1Ob2RlLnBhcmVudCA9IHBhcmVudE5vZGUuX2JhYnlsb25UcmFuc2Zvcm1Ob2RlITtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhYnlsb25UcmFuc2Zvcm1Ob2RlLnBhcmVudCA9IHRoaXMuX3Jvb3RCYWJ5bG9uTWVzaDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGFyZW50Lm9uU2tpbkxvYWRlZE9ic2VydmFibGUubm90aWZ5T2JzZXJ2ZXJzKHsgbm9kZTogYmFieWxvblRyYW5zZm9ybU5vZGVGb3JTa2luLCBza2lubmVkTm9kZTogYmFieWxvblRyYW5zZm9ybU5vZGUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmxvZ0Nsb3NlKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2ZvckVhY2hQcmltaXRpdmUobm9kZSwgKGJhYnlsb25NZXNoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoKGJhYnlsb25NZXNoIGFzIE1lc2gpLmdlb21ldHJ5ICYmIChiYWJ5bG9uTWVzaCBhcyBNZXNoKS5nZW9tZXRyeSEudXNlQm91bmRpbmdJbmZvRnJvbUdlb21ldHJ5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc2ltcGx5IGFwcGx5IHRoZSB3b3JsZCBtYXRyaWNlcyB0byB0aGUgYm91bmRpbmcgaW5mbyAtIHRoZSBleHRlbmRzIGFyZSBhbHJlYWR5IG9rXHJcbiAgICAgICAgICAgICAgICAgICAgYmFieWxvbk1lc2guX3VwZGF0ZUJvdW5kaW5nSW5mbygpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uTWVzaC5yZWZyZXNoQm91bmRpbmdJbmZvKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBub2RlLl9iYWJ5bG9uVHJhbnNmb3JtTm9kZSE7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZE1lc2hBc3luYyhjb250ZXh0OiBzdHJpbmcsIG5vZGU6IElOb2RlLCBtZXNoOiBJTWVzaCwgYXNzaWduOiAoYmFieWxvblRyYW5zZm9ybU5vZGU6IFRyYW5zZm9ybU5vZGUpID0+IHZvaWQpOiBQcm9taXNlPFRyYW5zZm9ybU5vZGU+IHtcclxuICAgICAgICBjb25zdCBwcmltaXRpdmVzID0gbWVzaC5wcmltaXRpdmVzO1xyXG4gICAgICAgIGlmICghcHJpbWl0aXZlcyB8fCAhcHJpbWl0aXZlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2NvbnRleHR9OiBQcmltaXRpdmVzIGFyZSBtaXNzaW5nYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocHJpbWl0aXZlc1swXS5pbmRleCA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgQXJyYXlJdGVtLkFzc2lnbihwcmltaXRpdmVzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gbmV3IEFycmF5PFByb21pc2U8YW55Pj4oKTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2dPcGVuKGAke2NvbnRleHR9ICR7bWVzaC5uYW1lIHx8IFwiXCJ9YCk7XHJcblxyXG4gICAgICAgIGNvbnN0IG5hbWUgPSBub2RlLm5hbWUgfHwgYG5vZGUke25vZGUuaW5kZXh9YDtcclxuXHJcbiAgICAgICAgaWYgKHByaW1pdGl2ZXMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByaW1pdGl2ZSA9IG1lc2gucHJpbWl0aXZlc1swXTtcclxuICAgICAgICAgICAgcHJvbWlzZXMucHVzaChcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRNZXNoUHJpbWl0aXZlQXN5bmMoYCR7Y29udGV4dH0vcHJpbWl0aXZlcy8ke3ByaW1pdGl2ZS5pbmRleH1gLCBuYW1lLCBub2RlLCBtZXNoLCBwcmltaXRpdmUsIChiYWJ5bG9uTWVzaCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuX2JhYnlsb25UcmFuc2Zvcm1Ob2RlID0gYmFieWxvbk1lc2g7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5fcHJpbWl0aXZlQmFieWxvbk1lc2hlcyA9IFtiYWJ5bG9uTWVzaF07XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2JhYnlsb25TY2VuZS5fYmxvY2tFbnRpdHlDb2xsZWN0aW9uID0gISF0aGlzLl9hc3NldENvbnRhaW5lcjtcclxuICAgICAgICAgICAgbm9kZS5fYmFieWxvblRyYW5zZm9ybU5vZGUgPSBuZXcgVHJhbnNmb3JtTm9kZShuYW1lLCB0aGlzLl9iYWJ5bG9uU2NlbmUpO1xyXG4gICAgICAgICAgICBub2RlLl9iYWJ5bG9uVHJhbnNmb3JtTm9kZS5fcGFyZW50Q29udGFpbmVyID0gdGhpcy5fYXNzZXRDb250YWluZXI7XHJcbiAgICAgICAgICAgIHRoaXMuX2JhYnlsb25TY2VuZS5fYmxvY2tFbnRpdHlDb2xsZWN0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgIG5vZGUuX3ByaW1pdGl2ZUJhYnlsb25NZXNoZXMgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBwcmltaXRpdmUgb2YgcHJpbWl0aXZlcykge1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2FkTWVzaFByaW1pdGl2ZUFzeW5jKGAke2NvbnRleHR9L3ByaW1pdGl2ZXMvJHtwcmltaXRpdmUuaW5kZXh9YCwgYCR7bmFtZX1fcHJpbWl0aXZlJHtwcmltaXRpdmUuaW5kZXh9YCwgbm9kZSwgbWVzaCwgcHJpbWl0aXZlLCAoYmFieWxvbk1lc2gpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFieWxvbk1lc2gucGFyZW50ID0gbm9kZS5fYmFieWxvblRyYW5zZm9ybU5vZGUhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLl9wcmltaXRpdmVCYWJ5bG9uTWVzaGVzIS5wdXNoKGJhYnlsb25NZXNoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXNzaWduKG5vZGUuX2JhYnlsb25UcmFuc2Zvcm1Ob2RlISk7XHJcblxyXG4gICAgICAgIHRoaXMubG9nQ2xvc2UoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIG5vZGUuX2JhYnlsb25UcmFuc2Zvcm1Ob2RlITtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbCBEZWZpbmUgdGhpcyBtZXRob2QgdG8gbW9kaWZ5IHRoZSBkZWZhdWx0IGJlaGF2aW9yIHdoZW4gbG9hZGluZyBkYXRhIGZvciBtZXNoIHByaW1pdGl2ZXMuXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBUaGUgY29udGV4dCB3aGVuIGxvYWRpbmcgdGhlIGFzc2V0XHJcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgbWVzaCBuYW1lIHdoZW4gbG9hZGluZyB0aGUgYXNzZXRcclxuICAgICAqIEBwYXJhbSBub2RlIFRoZSBnbFRGIG5vZGUgd2hlbiBsb2FkaW5nIHRoZSBhc3NldFxyXG4gICAgICogQHBhcmFtIG1lc2ggVGhlIGdsVEYgbWVzaCB3aGVuIGxvYWRpbmcgdGhlIGFzc2V0XHJcbiAgICAgKiBAcGFyYW0gcHJpbWl0aXZlIFRoZSBnbFRGIG1lc2ggcHJpbWl0aXZlIHByb3BlcnR5XHJcbiAgICAgKiBAcGFyYW0gYXNzaWduIEEgZnVuY3Rpb24gY2FsbGVkIHN5bmNocm9ub3VzbHkgYWZ0ZXIgcGFyc2luZyB0aGUgZ2xURiBwcm9wZXJ0aWVzXHJcbiAgICAgKiBAcmV0dXJucyBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBsb2FkZWQgbWVzaCB3aGVuIHRoZSBsb2FkIGlzIGNvbXBsZXRlIG9yIG51bGwgaWYgbm90IGhhbmRsZWRcclxuICAgICAqL1xyXG4gICAgcHVibGljIF9sb2FkTWVzaFByaW1pdGl2ZUFzeW5jKFxyXG4gICAgICAgIGNvbnRleHQ6IHN0cmluZyxcclxuICAgICAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgbm9kZTogSU5vZGUsXHJcbiAgICAgICAgbWVzaDogSU1lc2gsXHJcbiAgICAgICAgcHJpbWl0aXZlOiBJTWVzaFByaW1pdGl2ZSxcclxuICAgICAgICBhc3NpZ246IChiYWJ5bG9uTWVzaDogQWJzdHJhY3RNZXNoKSA9PiB2b2lkXHJcbiAgICApOiBQcm9taXNlPEFic3RyYWN0TWVzaD4ge1xyXG4gICAgICAgIGNvbnN0IGV4dGVuc2lvblByb21pc2UgPSB0aGlzLl9leHRlbnNpb25zTG9hZE1lc2hQcmltaXRpdmVBc3luYyhjb250ZXh0LCBuYW1lLCBub2RlLCBtZXNoLCBwcmltaXRpdmUsIGFzc2lnbik7XHJcbiAgICAgICAgaWYgKGV4dGVuc2lvblByb21pc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGV4dGVuc2lvblByb21pc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmxvZ09wZW4oYCR7Y29udGV4dH1gKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2hvdWxkSW5zdGFuY2UgPSB0aGlzLl9kaXNhYmxlSW5zdGFuY2VkTWVzaCA9PT0gMCAmJiB0aGlzLl9wYXJlbnQuY3JlYXRlSW5zdGFuY2VzICYmIG5vZGUuc2tpbiA9PSB1bmRlZmluZWQgJiYgIW1lc2gucHJpbWl0aXZlc1swXS50YXJnZXRzO1xyXG5cclxuICAgICAgICBsZXQgYmFieWxvbkFic3RyYWN0TWVzaDogQWJzdHJhY3RNZXNoO1xyXG4gICAgICAgIGxldCBwcm9taXNlOiBQcm9taXNlPGFueT47XHJcblxyXG4gICAgICAgIGlmIChzaG91bGRJbnN0YW5jZSAmJiBwcmltaXRpdmUuX2luc3RhbmNlRGF0YSkge1xyXG4gICAgICAgICAgICB0aGlzLl9iYWJ5bG9uU2NlbmUuX2Jsb2NrRW50aXR5Q29sbGVjdGlvbiA9ICEhdGhpcy5fYXNzZXRDb250YWluZXI7XHJcbiAgICAgICAgICAgIGJhYnlsb25BYnN0cmFjdE1lc2ggPSBwcmltaXRpdmUuX2luc3RhbmNlRGF0YS5iYWJ5bG9uU291cmNlTWVzaC5jcmVhdGVJbnN0YW5jZShuYW1lKSBhcyBJbnN0YW5jZWRNZXNoO1xyXG4gICAgICAgICAgICBiYWJ5bG9uQWJzdHJhY3RNZXNoLl9wYXJlbnRDb250YWluZXIgPSB0aGlzLl9hc3NldENvbnRhaW5lcjtcclxuICAgICAgICAgICAgdGhpcy5fYmFieWxvblNjZW5lLl9ibG9ja0VudGl0eUNvbGxlY3Rpb24gPSBmYWxzZTtcclxuICAgICAgICAgICAgcHJvbWlzZSA9IHByaW1pdGl2ZS5faW5zdGFuY2VEYXRhLnByb21pc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBuZXcgQXJyYXk8UHJvbWlzZTxhbnk+PigpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fYmFieWxvblNjZW5lLl9ibG9ja0VudGl0eUNvbGxlY3Rpb24gPSAhIXRoaXMuX2Fzc2V0Q29udGFpbmVyO1xyXG4gICAgICAgICAgICBjb25zdCBiYWJ5bG9uTWVzaCA9IG5ldyBNZXNoKG5hbWUsIHRoaXMuX2JhYnlsb25TY2VuZSk7XHJcbiAgICAgICAgICAgIGJhYnlsb25NZXNoLl9wYXJlbnRDb250YWluZXIgPSB0aGlzLl9hc3NldENvbnRhaW5lcjtcclxuICAgICAgICAgICAgdGhpcy5fYmFieWxvblNjZW5lLl9ibG9ja0VudGl0eUNvbGxlY3Rpb24gPSBmYWxzZTtcclxuICAgICAgICAgICAgYmFieWxvbk1lc2gub3ZlcnJpZGVNYXRlcmlhbFNpZGVPcmllbnRhdGlvbiA9IHRoaXMuX2JhYnlsb25TY2VuZS51c2VSaWdodEhhbmRlZFN5c3RlbSA/IE1hdGVyaWFsLkNvdW50ZXJDbG9ja1dpc2VTaWRlT3JpZW50YXRpb24gOiBNYXRlcmlhbC5DbG9ja1dpc2VTaWRlT3JpZW50YXRpb247XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9jcmVhdGVNb3JwaFRhcmdldHMoY29udGV4dCwgbm9kZSwgbWVzaCwgcHJpbWl0aXZlLCBiYWJ5bG9uTWVzaCk7XHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2FkVmVydGV4RGF0YUFzeW5jKGNvbnRleHQsIHByaW1pdGl2ZSwgYmFieWxvbk1lc2gpLnRoZW4oKGJhYnlsb25HZW9tZXRyeSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9sb2FkTW9ycGhUYXJnZXRzQXN5bmMoY29udGV4dCwgcHJpbWl0aXZlLCBiYWJ5bG9uTWVzaCwgYmFieWxvbkdlb21ldHJ5KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2Rpc3Bvc2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2JhYnlsb25TY2VuZS5fYmxvY2tFbnRpdHlDb2xsZWN0aW9uID0gISF0aGlzLl9hc3NldENvbnRhaW5lcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFieWxvbkdlb21ldHJ5LmFwcGx5VG9NZXNoKGJhYnlsb25NZXNoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFieWxvbkdlb21ldHJ5Ll9wYXJlbnRDb250YWluZXIgPSB0aGlzLl9hc3NldENvbnRhaW5lcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fYmFieWxvblNjZW5lLl9ibG9ja0VudGl0eUNvbGxlY3Rpb24gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBiYWJ5bG9uRHJhd01vZGUgPSBHTFRGTG9hZGVyLl9HZXREcmF3TW9kZShjb250ZXh0LCBwcmltaXRpdmUubW9kZSk7XHJcbiAgICAgICAgICAgIGlmIChwcmltaXRpdmUubWF0ZXJpYWwgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYmFieWxvbk1hdGVyaWFsID0gdGhpcy5fZGVmYXVsdEJhYnlsb25NYXRlcmlhbERhdGFbYmFieWxvbkRyYXdNb2RlXTtcclxuICAgICAgICAgICAgICAgIGlmICghYmFieWxvbk1hdGVyaWFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsID0gdGhpcy5fY3JlYXRlRGVmYXVsdE1hdGVyaWFsKFwiX19HTFRGTG9hZGVyLl9kZWZhdWx0XCIsIGJhYnlsb25EcmF3TW9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGFyZW50Lm9uTWF0ZXJpYWxMb2FkZWRPYnNlcnZhYmxlLm5vdGlmeU9ic2VydmVycyhiYWJ5bG9uTWF0ZXJpYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2RlZmF1bHRCYWJ5bG9uTWF0ZXJpYWxEYXRhW2JhYnlsb25EcmF3TW9kZV0gPSBiYWJ5bG9uTWF0ZXJpYWw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBiYWJ5bG9uTWVzaC5tYXRlcmlhbCA9IGJhYnlsb25NYXRlcmlhbDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5wYXJlbnQuc2tpcE1hdGVyaWFscykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWwgPSBBcnJheUl0ZW0uR2V0KGAke2NvbnRleHR9L21hdGVyaWFsYCwgdGhpcy5fZ2x0Zi5tYXRlcmlhbHMsIHByaW1pdGl2ZS5tYXRlcmlhbCk7XHJcbiAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRNYXRlcmlhbEFzeW5jKGAvbWF0ZXJpYWxzLyR7bWF0ZXJpYWwuaW5kZXh9YCwgbWF0ZXJpYWwsIGJhYnlsb25NZXNoLCBiYWJ5bG9uRHJhd01vZGUsIChiYWJ5bG9uTWF0ZXJpYWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFieWxvbk1lc2gubWF0ZXJpYWwgPSBiYWJ5bG9uTWF0ZXJpYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHByb21pc2UgPSBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoc2hvdWxkSW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgIHByaW1pdGl2ZS5faW5zdGFuY2VEYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhYnlsb25Tb3VyY2VNZXNoOiBiYWJ5bG9uTWVzaCxcclxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlOiBwcm9taXNlLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYmFieWxvbkFic3RyYWN0TWVzaCA9IGJhYnlsb25NZXNoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgR0xURkxvYWRlci5BZGRQb2ludGVyTWV0YWRhdGEoYmFieWxvbkFic3RyYWN0TWVzaCwgY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy5fcGFyZW50Lm9uTWVzaExvYWRlZE9ic2VydmFibGUubm90aWZ5T2JzZXJ2ZXJzKGJhYnlsb25BYnN0cmFjdE1lc2gpO1xyXG4gICAgICAgIGFzc2lnbihiYWJ5bG9uQWJzdHJhY3RNZXNoKTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2dDbG9zZSgpO1xyXG5cclxuICAgICAgICByZXR1cm4gcHJvbWlzZS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGJhYnlsb25BYnN0cmFjdE1lc2g7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZFZlcnRleERhdGFBc3luYyhjb250ZXh0OiBzdHJpbmcsIHByaW1pdGl2ZTogSU1lc2hQcmltaXRpdmUsIGJhYnlsb25NZXNoOiBNZXNoKTogUHJvbWlzZTxHZW9tZXRyeT4ge1xyXG4gICAgICAgIGNvbnN0IGV4dGVuc2lvblByb21pc2UgPSB0aGlzLl9leHRlbnNpb25zTG9hZFZlcnRleERhdGFBc3luYyhjb250ZXh0LCBwcmltaXRpdmUsIGJhYnlsb25NZXNoKTtcclxuICAgICAgICBpZiAoZXh0ZW5zaW9uUHJvbWlzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZXh0ZW5zaW9uUHJvbWlzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBwcmltaXRpdmUuYXR0cmlidXRlcztcclxuICAgICAgICBpZiAoIWF0dHJpYnV0ZXMpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2NvbnRleHR9OiBBdHRyaWJ1dGVzIGFyZSBtaXNzaW5nYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBwcm9taXNlcyA9IG5ldyBBcnJheTxQcm9taXNlPGFueT4+KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGJhYnlsb25HZW9tZXRyeSA9IG5ldyBHZW9tZXRyeShiYWJ5bG9uTWVzaC5uYW1lLCB0aGlzLl9iYWJ5bG9uU2NlbmUpO1xyXG5cclxuICAgICAgICBpZiAocHJpbWl0aXZlLmluZGljZXMgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGJhYnlsb25NZXNoLmlzVW5JbmRleGVkID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBhY2Nlc3NvciA9IEFycmF5SXRlbS5HZXQoYCR7Y29udGV4dH0vaW5kaWNlc2AsIHRoaXMuX2dsdGYuYWNjZXNzb3JzLCBwcmltaXRpdmUuaW5kaWNlcyk7XHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2FkSW5kaWNlc0FjY2Vzc29yQXN5bmMoYC9hY2Nlc3NvcnMvJHthY2Nlc3Nvci5pbmRleH1gLCBhY2Nlc3NvcikudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhYnlsb25HZW9tZXRyeS5zZXRJbmRpY2VzKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGxvYWRBdHRyaWJ1dGUgPSAobmFtZTogc3RyaW5nLCBraW5kOiBzdHJpbmcsIGNhbGxiYWNrPzogKGFjY2Vzc29yOiBJQWNjZXNzb3IpID0+IHZvaWQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZXNbbmFtZV0gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGJhYnlsb25NZXNoLl9kZWxheUluZm8gPSBiYWJ5bG9uTWVzaC5fZGVsYXlJbmZvIHx8IFtdO1xyXG4gICAgICAgICAgICBpZiAoYmFieWxvbk1lc2guX2RlbGF5SW5mby5pbmRleE9mKGtpbmQpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgYmFieWxvbk1lc2guX2RlbGF5SW5mby5wdXNoKGtpbmQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBhY2Nlc3NvciA9IEFycmF5SXRlbS5HZXQoYCR7Y29udGV4dH0vYXR0cmlidXRlcy8ke25hbWV9YCwgdGhpcy5fZ2x0Zi5hY2Nlc3NvcnMsIGF0dHJpYnV0ZXNbbmFtZV0pO1xyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9hZFZlcnRleEFjY2Vzc29yQXN5bmMoYC9hY2Nlc3NvcnMvJHthY2Nlc3Nvci5pbmRleH1gLCBhY2Nlc3Nvciwga2luZCkudGhlbigoYmFieWxvblZlcnRleEJ1ZmZlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChiYWJ5bG9uVmVydGV4QnVmZmVyLmdldEtpbmQoKSA9PT0gVmVydGV4QnVmZmVyLlBvc2l0aW9uS2luZCAmJiAhdGhpcy5wYXJlbnQuYWx3YXlzQ29tcHV0ZUJvdW5kaW5nQm94ICYmICFiYWJ5bG9uTWVzaC5za2VsZXRvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWNjZXNzb3IubWluICYmIGFjY2Vzc29yLm1heCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWluID0gVG1wVmVjdG9ycy5WZWN0b3IzWzBdLmNvcHlGcm9tRmxvYXRzKC4uLihhY2Nlc3Nvci5taW4gYXMgW251bWJlciwgbnVtYmVyLCBudW1iZXJdKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXggPSBUbXBWZWN0b3JzLlZlY3RvcjNbMV0uY29weUZyb21GbG9hdHMoLi4uKGFjY2Vzc29yLm1heCBhcyBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl0pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhY2Nlc3Nvci5ub3JtYWxpemVkICYmIGFjY2Vzc29yLmNvbXBvbmVudFR5cGUgIT09IEFjY2Vzc29yQ29tcG9uZW50VHlwZS5GTE9BVCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkaXZpZGVyID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGFjY2Vzc29yLmNvbXBvbmVudFR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBBY2Nlc3NvckNvbXBvbmVudFR5cGUuQllURTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpdmlkZXIgPSAxMjcuMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEFjY2Vzc29yQ29tcG9uZW50VHlwZS5VTlNJR05FRF9CWVRFOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGl2aWRlciA9IDI1NS4wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgQWNjZXNzb3JDb21wb25lbnRUeXBlLlNIT1JUOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGl2aWRlciA9IDMyNzY3LjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBBY2Nlc3NvckNvbXBvbmVudFR5cGUuVU5TSUdORURfU0hPUlQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXZpZGVyID0gNjU1MzUuMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvbmVPdmVyRGl2aWRlciA9IDEgLyBkaXZpZGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi5zY2FsZUluUGxhY2Uob25lT3ZlckRpdmlkZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC5zY2FsZUluUGxhY2Uob25lT3ZlckRpdmlkZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFieWxvbkdlb21ldHJ5Ll9ib3VuZGluZ0luZm8gPSBuZXcgQm91bmRpbmdJbmZvKG1pbiwgbWF4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhYnlsb25HZW9tZXRyeS51c2VCb3VuZGluZ0luZm9Gcm9tR2VvbWV0cnkgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJhYnlsb25HZW9tZXRyeS5zZXRWZXJ0aWNlc0J1ZmZlcihiYWJ5bG9uVmVydGV4QnVmZmVyLCBhY2Nlc3Nvci5jb3VudCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgaWYgKGtpbmQgPT0gVmVydGV4QnVmZmVyLk1hdHJpY2VzSW5kaWNlc0V4dHJhS2luZCkge1xyXG4gICAgICAgICAgICAgICAgYmFieWxvbk1lc2gubnVtQm9uZUluZmx1ZW5jZXJzID0gODtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhhY2Nlc3Nvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBsb2FkQXR0cmlidXRlKFwiUE9TSVRJT05cIiwgVmVydGV4QnVmZmVyLlBvc2l0aW9uS2luZCk7XHJcbiAgICAgICAgbG9hZEF0dHJpYnV0ZShcIk5PUk1BTFwiLCBWZXJ0ZXhCdWZmZXIuTm9ybWFsS2luZCk7XHJcbiAgICAgICAgbG9hZEF0dHJpYnV0ZShcIlRBTkdFTlRcIiwgVmVydGV4QnVmZmVyLlRhbmdlbnRLaW5kKTtcclxuICAgICAgICBsb2FkQXR0cmlidXRlKFwiVEVYQ09PUkRfMFwiLCBWZXJ0ZXhCdWZmZXIuVVZLaW5kKTtcclxuICAgICAgICBsb2FkQXR0cmlidXRlKFwiVEVYQ09PUkRfMVwiLCBWZXJ0ZXhCdWZmZXIuVVYyS2luZCk7XHJcbiAgICAgICAgbG9hZEF0dHJpYnV0ZShcIlRFWENPT1JEXzJcIiwgVmVydGV4QnVmZmVyLlVWM0tpbmQpO1xyXG4gICAgICAgIGxvYWRBdHRyaWJ1dGUoXCJURVhDT09SRF8zXCIsIFZlcnRleEJ1ZmZlci5VVjRLaW5kKTtcclxuICAgICAgICBsb2FkQXR0cmlidXRlKFwiVEVYQ09PUkRfNFwiLCBWZXJ0ZXhCdWZmZXIuVVY1S2luZCk7XHJcbiAgICAgICAgbG9hZEF0dHJpYnV0ZShcIlRFWENPT1JEXzVcIiwgVmVydGV4QnVmZmVyLlVWNktpbmQpO1xyXG4gICAgICAgIGxvYWRBdHRyaWJ1dGUoXCJKT0lOVFNfMFwiLCBWZXJ0ZXhCdWZmZXIuTWF0cmljZXNJbmRpY2VzS2luZCk7XHJcbiAgICAgICAgbG9hZEF0dHJpYnV0ZShcIldFSUdIVFNfMFwiLCBWZXJ0ZXhCdWZmZXIuTWF0cmljZXNXZWlnaHRzS2luZCk7XHJcbiAgICAgICAgbG9hZEF0dHJpYnV0ZShcIkpPSU5UU18xXCIsIFZlcnRleEJ1ZmZlci5NYXRyaWNlc0luZGljZXNFeHRyYUtpbmQpO1xyXG4gICAgICAgIGxvYWRBdHRyaWJ1dGUoXCJXRUlHSFRTXzFcIiwgVmVydGV4QnVmZmVyLk1hdHJpY2VzV2VpZ2h0c0V4dHJhS2luZCk7XHJcbiAgICAgICAgbG9hZEF0dHJpYnV0ZShcIkNPTE9SXzBcIiwgVmVydGV4QnVmZmVyLkNvbG9yS2luZCwgKGFjY2Vzc29yKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChhY2Nlc3Nvci50eXBlID09PSBBY2Nlc3NvclR5cGUuVkVDNCkge1xyXG4gICAgICAgICAgICAgICAgYmFieWxvbk1lc2guaGFzVmVydGV4QWxwaGEgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBiYWJ5bG9uR2VvbWV0cnk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY3JlYXRlTW9ycGhUYXJnZXRzKGNvbnRleHQ6IHN0cmluZywgbm9kZTogSU5vZGUsIG1lc2g6IElNZXNoLCBwcmltaXRpdmU6IElNZXNoUHJpbWl0aXZlLCBiYWJ5bG9uTWVzaDogTWVzaCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghcHJpbWl0aXZlLnRhcmdldHMpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG5vZGUuX251bU1vcnBoVGFyZ2V0cyA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgbm9kZS5fbnVtTW9ycGhUYXJnZXRzID0gcHJpbWl0aXZlLnRhcmdldHMubGVuZ3RoO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocHJpbWl0aXZlLnRhcmdldHMubGVuZ3RoICE9PSBub2RlLl9udW1Nb3JwaFRhcmdldHMpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2NvbnRleHR9OiBQcmltaXRpdmVzIGRvIG5vdCBoYXZlIHRoZSBzYW1lIG51bWJlciBvZiB0YXJnZXRzYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB0YXJnZXROYW1lcyA9IG1lc2guZXh0cmFzID8gbWVzaC5leHRyYXMudGFyZ2V0TmFtZXMgOiBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLl9iYWJ5bG9uU2NlbmUuX2Jsb2NrRW50aXR5Q29sbGVjdGlvbiA9ICEhdGhpcy5fYXNzZXRDb250YWluZXI7XHJcbiAgICAgICAgYmFieWxvbk1lc2gubW9ycGhUYXJnZXRNYW5hZ2VyID0gbmV3IE1vcnBoVGFyZ2V0TWFuYWdlcih0aGlzLl9iYWJ5bG9uU2NlbmUpO1xyXG4gICAgICAgIGJhYnlsb25NZXNoLm1vcnBoVGFyZ2V0TWFuYWdlci5fcGFyZW50Q29udGFpbmVyID0gdGhpcy5fYXNzZXRDb250YWluZXI7XHJcbiAgICAgICAgdGhpcy5fYmFieWxvblNjZW5lLl9ibG9ja0VudGl0eUNvbGxlY3Rpb24gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgYmFieWxvbk1lc2gubW9ycGhUYXJnZXRNYW5hZ2VyLmFyZVVwZGF0ZXNGcm96ZW4gPSB0cnVlO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcHJpbWl0aXZlLnRhcmdldHMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHdlaWdodCA9IG5vZGUud2VpZ2h0cyA/IG5vZGUud2VpZ2h0c1tpbmRleF0gOiBtZXNoLndlaWdodHMgPyBtZXNoLndlaWdodHNbaW5kZXhdIDogMDtcclxuICAgICAgICAgICAgY29uc3QgbmFtZSA9IHRhcmdldE5hbWVzID8gdGFyZ2V0TmFtZXNbaW5kZXhdIDogYG1vcnBoVGFyZ2V0JHtpbmRleH1gO1xyXG4gICAgICAgICAgICBiYWJ5bG9uTWVzaC5tb3JwaFRhcmdldE1hbmFnZXIuYWRkVGFyZ2V0KG5ldyBNb3JwaFRhcmdldChuYW1lLCB3ZWlnaHQsIGJhYnlsb25NZXNoLmdldFNjZW5lKCkpKTtcclxuICAgICAgICAgICAgLy8gVE9ETzogdGVsbCB0aGUgdGFyZ2V0IHdoZXRoZXIgaXQgaGFzIHBvc2l0aW9ucywgbm9ybWFscywgdGFuZ2VudHNcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZE1vcnBoVGFyZ2V0c0FzeW5jKGNvbnRleHQ6IHN0cmluZywgcHJpbWl0aXZlOiBJTWVzaFByaW1pdGl2ZSwgYmFieWxvbk1lc2g6IE1lc2gsIGJhYnlsb25HZW9tZXRyeTogR2VvbWV0cnkpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBpZiAoIXByaW1pdGl2ZS50YXJnZXRzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gbmV3IEFycmF5PFByb21pc2U8YW55Pj4oKTtcclxuXHJcbiAgICAgICAgY29uc3QgbW9ycGhUYXJnZXRNYW5hZ2VyID0gYmFieWxvbk1lc2gubW9ycGhUYXJnZXRNYW5hZ2VyITtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbW9ycGhUYXJnZXRNYW5hZ2VyLm51bVRhcmdldHM7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgY29uc3QgYmFieWxvbk1vcnBoVGFyZ2V0ID0gbW9ycGhUYXJnZXRNYW5hZ2VyLmdldFRhcmdldChpbmRleCk7XHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5fbG9hZE1vcnBoVGFyZ2V0VmVydGV4RGF0YUFzeW5jKGAke2NvbnRleHR9L3RhcmdldHMvJHtpbmRleH1gLCBiYWJ5bG9uR2VvbWV0cnksIHByaW1pdGl2ZS50YXJnZXRzW2luZGV4XSwgYmFieWxvbk1vcnBoVGFyZ2V0KSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBtb3JwaFRhcmdldE1hbmFnZXIuYXJlVXBkYXRlc0Zyb3plbiA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2xvYWRNb3JwaFRhcmdldFZlcnRleERhdGFBc3luYyhjb250ZXh0OiBzdHJpbmcsIGJhYnlsb25HZW9tZXRyeTogR2VvbWV0cnksIGF0dHJpYnV0ZXM6IHsgW25hbWU6IHN0cmluZ106IG51bWJlciB9LCBiYWJ5bG9uTW9ycGhUYXJnZXQ6IE1vcnBoVGFyZ2V0KTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBuZXcgQXJyYXk8UHJvbWlzZTxhbnk+PigpO1xyXG5cclxuICAgICAgICBjb25zdCBsb2FkQXR0cmlidXRlID0gKGF0dHJpYnV0ZTogc3RyaW5nLCBraW5kOiBzdHJpbmcsIHNldERhdGE6IChiYWJ5bG9uVmVydGV4QnVmZmVyOiBWZXJ0ZXhCdWZmZXIsIGRhdGE6IEZsb2F0MzJBcnJheSkgPT4gdm9pZCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYXR0cmlidXRlc1thdHRyaWJ1dGVdID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBiYWJ5bG9uVmVydGV4QnVmZmVyID0gYmFieWxvbkdlb21ldHJ5LmdldFZlcnRleEJ1ZmZlcihraW5kKTtcclxuICAgICAgICAgICAgaWYgKCFiYWJ5bG9uVmVydGV4QnVmZmVyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGFjY2Vzc29yID0gQXJyYXlJdGVtLkdldChgJHtjb250ZXh0fS8ke2F0dHJpYnV0ZX1gLCB0aGlzLl9nbHRmLmFjY2Vzc29ycywgYXR0cmlidXRlc1thdHRyaWJ1dGVdKTtcclxuICAgICAgICAgICAgcHJvbWlzZXMucHVzaChcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRGbG9hdEFjY2Vzc29yQXN5bmMoYC9hY2Nlc3NvcnMvJHthY2Nlc3Nvci5pbmRleH1gLCBhY2Nlc3NvcikudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldERhdGEoYmFieWxvblZlcnRleEJ1ZmZlciwgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGxvYWRBdHRyaWJ1dGUoXCJQT1NJVElPTlwiLCBWZXJ0ZXhCdWZmZXIuUG9zaXRpb25LaW5kLCAoYmFieWxvblZlcnRleEJ1ZmZlciwgZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvbnMgPSBuZXcgRmxvYXQzMkFycmF5KGRhdGEubGVuZ3RoKTtcclxuICAgICAgICAgICAgYmFieWxvblZlcnRleEJ1ZmZlci5mb3JFYWNoKGRhdGEubGVuZ3RoLCAodmFsdWUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbnNbaW5kZXhdID0gZGF0YVtpbmRleF0gKyB2YWx1ZTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBiYWJ5bG9uTW9ycGhUYXJnZXQuc2V0UG9zaXRpb25zKHBvc2l0aW9ucyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxvYWRBdHRyaWJ1dGUoXCJOT1JNQUxcIiwgVmVydGV4QnVmZmVyLk5vcm1hbEtpbmQsIChiYWJ5bG9uVmVydGV4QnVmZmVyLCBkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vcm1hbHMgPSBuZXcgRmxvYXQzMkFycmF5KGRhdGEubGVuZ3RoKTtcclxuICAgICAgICAgICAgYmFieWxvblZlcnRleEJ1ZmZlci5mb3JFYWNoKG5vcm1hbHMubGVuZ3RoLCAodmFsdWUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBub3JtYWxzW2luZGV4XSA9IGRhdGFbaW5kZXhdICsgdmFsdWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgYmFieWxvbk1vcnBoVGFyZ2V0LnNldE5vcm1hbHMobm9ybWFscyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxvYWRBdHRyaWJ1dGUoXCJUQU5HRU5UXCIsIFZlcnRleEJ1ZmZlci5UYW5nZW50S2luZCwgKGJhYnlsb25WZXJ0ZXhCdWZmZXIsIGRhdGEpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdGFuZ2VudHMgPSBuZXcgRmxvYXQzMkFycmF5KChkYXRhLmxlbmd0aCAvIDMpICogNCk7XHJcbiAgICAgICAgICAgIGxldCBkYXRhSW5kZXggPSAwO1xyXG4gICAgICAgICAgICBiYWJ5bG9uVmVydGV4QnVmZmVyLmZvckVhY2goKGRhdGEubGVuZ3RoIC8gMykgKiA0LCAodmFsdWUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBUYW5nZW50IGRhdGEgZm9yIG1vcnBoIHRhcmdldHMgaXMgc3RvcmVkIGFzIHh5eiBkZWx0YS5cclxuICAgICAgICAgICAgICAgIC8vIFRoZSB2ZXJ0ZXhEYXRhLnRhbmdlbnQgaXMgc3RvcmVkIGFzIHh5encuXHJcbiAgICAgICAgICAgICAgICAvLyBTbyB3ZSBuZWVkIHRvIHNraXAgZXZlcnkgZm91cnRoIHZlcnRleERhdGEudGFuZ2VudC5cclxuICAgICAgICAgICAgICAgIGlmICgoaW5kZXggKyAxKSAlIDQgIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0YW5nZW50c1tkYXRhSW5kZXhdID0gZGF0YVtkYXRhSW5kZXhdICsgdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YUluZGV4Kys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBiYWJ5bG9uTW9ycGhUYXJnZXQuc2V0VGFuZ2VudHModGFuZ2VudHMpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4ge30pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9Mb2FkVHJhbnNmb3JtKG5vZGU6IElOb2RlLCBiYWJ5bG9uTm9kZTogVHJhbnNmb3JtTm9kZSk6IHZvaWQge1xyXG4gICAgICAgIC8vIElnbm9yZSB0aGUgVFJTIG9mIHNraW5uZWQgbm9kZXMuXHJcbiAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9zcGVjaWZpY2F0aW9uLzIuMCNza2lucyAoc2Vjb25kIGltcGxlbWVudGF0aW9uIG5vdGUpXHJcbiAgICAgICAgaWYgKG5vZGUuc2tpbiAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHBvc2l0aW9uID0gVmVjdG9yMy5aZXJvKCk7XHJcbiAgICAgICAgbGV0IHJvdGF0aW9uID0gUXVhdGVybmlvbi5JZGVudGl0eSgpO1xyXG4gICAgICAgIGxldCBzY2FsaW5nID0gVmVjdG9yMy5PbmUoKTtcclxuXHJcbiAgICAgICAgaWYgKG5vZGUubWF0cml4KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hdHJpeCA9IE1hdHJpeC5Gcm9tQXJyYXkobm9kZS5tYXRyaXgpO1xyXG4gICAgICAgICAgICBtYXRyaXguZGVjb21wb3NlKHNjYWxpbmcsIHJvdGF0aW9uLCBwb3NpdGlvbik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKG5vZGUudHJhbnNsYXRpb24pIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gVmVjdG9yMy5Gcm9tQXJyYXkobm9kZS50cmFuc2xhdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG5vZGUucm90YXRpb24pIHtcclxuICAgICAgICAgICAgICAgIHJvdGF0aW9uID0gUXVhdGVybmlvbi5Gcm9tQXJyYXkobm9kZS5yb3RhdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG5vZGUuc2NhbGUpIHtcclxuICAgICAgICAgICAgICAgIHNjYWxpbmcgPSBWZWN0b3IzLkZyb21BcnJheShub2RlLnNjYWxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYmFieWxvbk5vZGUucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgICAgICBiYWJ5bG9uTm9kZS5yb3RhdGlvblF1YXRlcm5pb24gPSByb3RhdGlvbjtcclxuICAgICAgICBiYWJ5bG9uTm9kZS5zY2FsaW5nID0gc2NhbGluZztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9sb2FkU2tpbkFzeW5jKGNvbnRleHQ6IHN0cmluZywgbm9kZTogSU5vZGUsIHNraW46IElTa2luLCBhc3NpZ246IChiYWJ5bG9uU2tlbGV0b246IFNrZWxldG9uKSA9PiB2b2lkKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgY29uc3QgZXh0ZW5zaW9uUHJvbWlzZSA9IHRoaXMuX2V4dGVuc2lvbnNMb2FkU2tpbkFzeW5jKGNvbnRleHQsIG5vZGUsIHNraW4pO1xyXG4gICAgICAgIGlmIChleHRlbnNpb25Qcm9taXNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBleHRlbnNpb25Qcm9taXNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNraW4uX2RhdGEpIHtcclxuICAgICAgICAgICAgYXNzaWduKHNraW4uX2RhdGEuYmFieWxvblNrZWxldG9uKTtcclxuICAgICAgICAgICAgcmV0dXJuIHNraW4uX2RhdGEucHJvbWlzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNrZWxldG9uSWQgPSBgc2tlbGV0b24ke3NraW4uaW5kZXh9YDtcclxuICAgICAgICB0aGlzLl9iYWJ5bG9uU2NlbmUuX2Jsb2NrRW50aXR5Q29sbGVjdGlvbiA9ICEhdGhpcy5fYXNzZXRDb250YWluZXI7XHJcbiAgICAgICAgY29uc3QgYmFieWxvblNrZWxldG9uID0gbmV3IFNrZWxldG9uKHNraW4ubmFtZSB8fCBza2VsZXRvbklkLCBza2VsZXRvbklkLCB0aGlzLl9iYWJ5bG9uU2NlbmUpO1xyXG4gICAgICAgIGJhYnlsb25Ta2VsZXRvbi5fcGFyZW50Q29udGFpbmVyID0gdGhpcy5fYXNzZXRDb250YWluZXI7XHJcbiAgICAgICAgdGhpcy5fYmFieWxvblNjZW5lLl9ibG9ja0VudGl0eUNvbGxlY3Rpb24gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5fbG9hZEJvbmVzKGNvbnRleHQsIHNraW4sIGJhYnlsb25Ta2VsZXRvbik7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IHRoaXMuX2xvYWRTa2luSW52ZXJzZUJpbmRNYXRyaWNlc0RhdGFBc3luYyhjb250ZXh0LCBza2luKS50aGVuKChpbnZlcnNlQmluZE1hdHJpY2VzRGF0YSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl91cGRhdGVCb25lTWF0cmljZXMoYmFieWxvblNrZWxldG9uLCBpbnZlcnNlQmluZE1hdHJpY2VzRGF0YSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNraW4uX2RhdGEgPSB7XHJcbiAgICAgICAgICAgIGJhYnlsb25Ta2VsZXRvbjogYmFieWxvblNrZWxldG9uLFxyXG4gICAgICAgICAgICBwcm9taXNlOiBwcm9taXNlLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGFzc2lnbihiYWJ5bG9uU2tlbGV0b24pO1xyXG5cclxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9sb2FkQm9uZXMoY29udGV4dDogc3RyaW5nLCBza2luOiBJU2tpbiwgYmFieWxvblNrZWxldG9uOiBTa2VsZXRvbik6IHZvaWQge1xyXG4gICAgICAgIGlmIChza2luLnNrZWxldG9uID09IHVuZGVmaW5lZCB8fCB0aGlzLl9wYXJlbnQuYWx3YXlzQ29tcHV0ZVNrZWxldG9uUm9vdE5vZGUpIHtcclxuICAgICAgICAgICAgY29uc3Qgcm9vdE5vZGUgPSB0aGlzLl9maW5kU2tlbGV0b25Sb290Tm9kZShgJHtjb250ZXh0fS9qb2ludHNgLCBza2luLmpvaW50cyk7XHJcbiAgICAgICAgICAgIGlmIChyb290Tm9kZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNraW4uc2tlbGV0b24gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNraW4uc2tlbGV0b24gPSByb290Tm9kZS5pbmRleDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNQYXJlbnQgPSAoYTogSU5vZGUsIGI6IElOb2RlKTogYm9vbGVhbiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoOyBiLnBhcmVudDsgYiA9IGIucGFyZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYi5wYXJlbnQgPT09IGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNrZWxldG9uTm9kZSA9IEFycmF5SXRlbS5HZXQoYCR7Y29udGV4dH0vc2tlbGV0b25gLCB0aGlzLl9nbHRmLm5vZGVzLCBza2luLnNrZWxldG9uKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2tlbGV0b25Ob2RlICE9PSByb290Tm9kZSAmJiAhaXNQYXJlbnQoc2tlbGV0b25Ob2RlLCByb290Tm9kZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9nZ2VyLldhcm4oYCR7Y29udGV4dH0vc2tlbGV0b246IE92ZXJyaWRpbmcgd2l0aCBuZWFyZXN0IGNvbW1vbiBhbmNlc3RvciBhcyBza2VsZXRvbiBub2RlIGlzIG5vdCBhIGNvbW1vbiByb290YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNraW4uc2tlbGV0b24gPSByb290Tm9kZS5pbmRleDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBMb2dnZXIuV2FybihgJHtjb250ZXh0fTogRmFpbGVkIHRvIGZpbmQgY29tbW9uIHJvb3RgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYmFieWxvbkJvbmVzOiB7IFtpbmRleDogbnVtYmVyXTogQm9uZSB9ID0ge307XHJcbiAgICAgICAgZm9yIChjb25zdCBpbmRleCBvZiBza2luLmpvaW50cykge1xyXG4gICAgICAgICAgICBjb25zdCBub2RlID0gQXJyYXlJdGVtLkdldChgJHtjb250ZXh0fS9qb2ludHMvJHtpbmRleH1gLCB0aGlzLl9nbHRmLm5vZGVzLCBpbmRleCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvYWRCb25lKG5vZGUsIHNraW4sIGJhYnlsb25Ta2VsZXRvbiwgYmFieWxvbkJvbmVzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZmluZFNrZWxldG9uUm9vdE5vZGUoY29udGV4dDogc3RyaW5nLCBqb2ludHM6IEFycmF5PG51bWJlcj4pOiBOdWxsYWJsZTxJTm9kZT4ge1xyXG4gICAgICAgIGlmIChqb2ludHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcGF0aHM6IHsgW2pvaW50OiBudW1iZXJdOiBBcnJheTxJTm9kZT4gfSA9IHt9O1xyXG4gICAgICAgIGZvciAoY29uc3QgaW5kZXggb2Ygam9pbnRzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhdGg6IElOb2RlW10gPSBbXTtcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSBBcnJheUl0ZW0uR2V0KGAke2NvbnRleHR9LyR7aW5kZXh9YCwgdGhpcy5fZ2x0Zi5ub2RlcywgaW5kZXgpO1xyXG4gICAgICAgICAgICB3aGlsZSAobm9kZS5pbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHBhdGgudW5zaGlmdChub2RlKTtcclxuICAgICAgICAgICAgICAgIG5vZGUgPSBub2RlLnBhcmVudCE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcGF0aHNbaW5kZXhdID0gcGF0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCByb290Tm9kZTogTnVsbGFibGU8SU5vZGU+ID0gbnVsbDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgOyArK2kpIHtcclxuICAgICAgICAgICAgbGV0IHBhdGggPSBwYXRoc1tqb2ludHNbMF1dO1xyXG4gICAgICAgICAgICBpZiAoaSA+PSBwYXRoLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJvb3ROb2RlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBub2RlID0gcGF0aFtpXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDE7IGogPCBqb2ludHMubGVuZ3RoOyArK2opIHtcclxuICAgICAgICAgICAgICAgIHBhdGggPSBwYXRoc1tqb2ludHNbal1dO1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgPj0gcGF0aC5sZW5ndGggfHwgbm9kZSAhPT0gcGF0aFtpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByb290Tm9kZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcm9vdE5vZGUgPSBub2RlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9sb2FkQm9uZShub2RlOiBJTm9kZSwgc2tpbjogSVNraW4sIGJhYnlsb25Ta2VsZXRvbjogU2tlbGV0b24sIGJhYnlsb25Cb25lczogeyBbaW5kZXg6IG51bWJlcl06IEJvbmUgfSk6IEJvbmUge1xyXG4gICAgICAgIGxldCBiYWJ5bG9uQm9uZSA9IGJhYnlsb25Cb25lc1tub2RlLmluZGV4XTtcclxuICAgICAgICBpZiAoYmFieWxvbkJvbmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGJhYnlsb25Cb25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHBhcmVudEJhYnlsb25Cb25lOiBOdWxsYWJsZTxCb25lPiA9IG51bGw7XHJcbiAgICAgICAgaWYgKG5vZGUuaW5kZXggIT09IHNraW4uc2tlbGV0b24pIHtcclxuICAgICAgICAgICAgaWYgKG5vZGUucGFyZW50ICYmIG5vZGUucGFyZW50LmluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgcGFyZW50QmFieWxvbkJvbmUgPSB0aGlzLl9sb2FkQm9uZShub2RlLnBhcmVudCwgc2tpbiwgYmFieWxvblNrZWxldG9uLCBiYWJ5bG9uQm9uZXMpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNraW4uc2tlbGV0b24gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgTG9nZ2VyLldhcm4oYC9za2lucy8ke3NraW4uaW5kZXh9L3NrZWxldG9uOiBTa2VsZXRvbiBub2RlIGlzIG5vdCBhIGNvbW1vbiByb290YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGJvbmVJbmRleCA9IHNraW4uam9pbnRzLmluZGV4T2Yobm9kZS5pbmRleCk7XHJcbiAgICAgICAgYmFieWxvbkJvbmUgPSBuZXcgQm9uZShub2RlLm5hbWUgfHwgYGpvaW50JHtub2RlLmluZGV4fWAsIGJhYnlsb25Ta2VsZXRvbiwgcGFyZW50QmFieWxvbkJvbmUsIHRoaXMuX2dldE5vZGVNYXRyaXgobm9kZSksIG51bGwsIG51bGwsIGJvbmVJbmRleCk7XHJcbiAgICAgICAgYmFieWxvbkJvbmVzW25vZGUuaW5kZXhdID0gYmFieWxvbkJvbmU7XHJcblxyXG4gICAgICAgIC8vIFdhaXQgdW50aWwgdGhlIHNjZW5lIGlzIGxvYWRlZCB0byBlbnN1cmUgdGhlIHRyYW5zZm9ybSBub2RlcyBhcmUgbG9hZGVkLlxyXG4gICAgICAgIHRoaXMuX3Bvc3RTY2VuZUxvYWRBY3Rpb25zLnB1c2goKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBMaW5rIHRoZSBCYWJ5bG9uIGJvbmUgd2l0aCB0aGUgY29ycmVzcG9uZGluZyBCYWJ5bG9uIHRyYW5zZm9ybSBub2RlLlxyXG4gICAgICAgICAgICAvLyBBIGdsVEYgam9pbnQgaXMgYSBwb2ludGVyIHRvIGEgZ2xURiBub2RlIGluIHRoZSBnbFRGIG5vZGUgaGllcmFyY2h5IHNpbWlsYXIgdG8gVW5pdHkzRC5cclxuICAgICAgICAgICAgYmFieWxvbkJvbmUubGlua1RyYW5zZm9ybU5vZGUobm9kZS5fYmFieWxvblRyYW5zZm9ybU5vZGUhKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGJhYnlsb25Cb25lO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2xvYWRTa2luSW52ZXJzZUJpbmRNYXRyaWNlc0RhdGFBc3luYyhjb250ZXh0OiBzdHJpbmcsIHNraW46IElTa2luKTogUHJvbWlzZTxOdWxsYWJsZTxGbG9hdDMyQXJyYXk+PiB7XHJcbiAgICAgICAgaWYgKHNraW4uaW52ZXJzZUJpbmRNYXRyaWNlcyA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShudWxsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGFjY2Vzc29yID0gQXJyYXlJdGVtLkdldChgJHtjb250ZXh0fS9pbnZlcnNlQmluZE1hdHJpY2VzYCwgdGhpcy5fZ2x0Zi5hY2Nlc3NvcnMsIHNraW4uaW52ZXJzZUJpbmRNYXRyaWNlcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRGbG9hdEFjY2Vzc29yQXN5bmMoYC9hY2Nlc3NvcnMvJHthY2Nlc3Nvci5pbmRleH1gLCBhY2Nlc3Nvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfdXBkYXRlQm9uZU1hdHJpY2VzKGJhYnlsb25Ta2VsZXRvbjogU2tlbGV0b24sIGludmVyc2VCaW5kTWF0cmljZXNEYXRhOiBOdWxsYWJsZTxGbG9hdDMyQXJyYXk+KTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChjb25zdCBiYWJ5bG9uQm9uZSBvZiBiYWJ5bG9uU2tlbGV0b24uYm9uZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgYmFzZU1hdHJpeCA9IE1hdHJpeC5JZGVudGl0eSgpO1xyXG4gICAgICAgICAgICBjb25zdCBib25lSW5kZXggPSBiYWJ5bG9uQm9uZS5faW5kZXghO1xyXG4gICAgICAgICAgICBpZiAoaW52ZXJzZUJpbmRNYXRyaWNlc0RhdGEgJiYgYm9uZUluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgTWF0cml4LkZyb21BcnJheVRvUmVmKGludmVyc2VCaW5kTWF0cmljZXNEYXRhLCBib25lSW5kZXggKiAxNiwgYmFzZU1hdHJpeCk7XHJcbiAgICAgICAgICAgICAgICBiYXNlTWF0cml4LmludmVydFRvUmVmKGJhc2VNYXRyaXgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBiYWJ5bG9uUGFyZW50Qm9uZSA9IGJhYnlsb25Cb25lLmdldFBhcmVudCgpO1xyXG4gICAgICAgICAgICBpZiAoYmFieWxvblBhcmVudEJvbmUpIHtcclxuICAgICAgICAgICAgICAgIGJhc2VNYXRyaXgubXVsdGlwbHlUb1JlZihiYWJ5bG9uUGFyZW50Qm9uZS5nZXRBYnNvbHV0ZUludmVyc2VCaW5kTWF0cml4KCksIGJhc2VNYXRyaXgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBiYWJ5bG9uQm9uZS51cGRhdGVNYXRyaXgoYmFzZU1hdHJpeCwgZmFsc2UsIGZhbHNlKTtcclxuICAgICAgICAgICAgYmFieWxvbkJvbmUuX3VwZGF0ZUFic29sdXRlQmluZE1hdHJpY2VzKHVuZGVmaW5lZCwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9nZXROb2RlTWF0cml4KG5vZGU6IElOb2RlKTogTWF0cml4IHtcclxuICAgICAgICByZXR1cm4gbm9kZS5tYXRyaXhcclxuICAgICAgICAgICAgPyBNYXRyaXguRnJvbUFycmF5KG5vZGUubWF0cml4KVxyXG4gICAgICAgICAgICA6IE1hdHJpeC5Db21wb3NlKFxyXG4gICAgICAgICAgICAgICAgICBub2RlLnNjYWxlID8gVmVjdG9yMy5Gcm9tQXJyYXkobm9kZS5zY2FsZSkgOiBWZWN0b3IzLk9uZSgpLFxyXG4gICAgICAgICAgICAgICAgICBub2RlLnJvdGF0aW9uID8gUXVhdGVybmlvbi5Gcm9tQXJyYXkobm9kZS5yb3RhdGlvbikgOiBRdWF0ZXJuaW9uLklkZW50aXR5KCksXHJcbiAgICAgICAgICAgICAgICAgIG5vZGUudHJhbnNsYXRpb24gPyBWZWN0b3IzLkZyb21BcnJheShub2RlLnRyYW5zbGF0aW9uKSA6IFZlY3RvcjMuWmVybygpXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIExvYWRzIGEgZ2xURiBjYW1lcmEuXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBUaGUgY29udGV4dCB3aGVuIGxvYWRpbmcgdGhlIGFzc2V0XHJcbiAgICAgKiBAcGFyYW0gY2FtZXJhIFRoZSBnbFRGIGNhbWVyYSBwcm9wZXJ0eVxyXG4gICAgICogQHBhcmFtIGFzc2lnbiBBIGZ1bmN0aW9uIGNhbGxlZCBzeW5jaHJvbm91c2x5IGFmdGVyIHBhcnNpbmcgdGhlIGdsVEYgcHJvcGVydGllc1xyXG4gICAgICogQHJldHVybnMgQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgbG9hZGVkIEJhYnlsb24gY2FtZXJhIHdoZW4gdGhlIGxvYWQgaXMgY29tcGxldGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWRDYW1lcmFBc3luYyhjb250ZXh0OiBzdHJpbmcsIGNhbWVyYTogSUNhbWVyYSwgYXNzaWduOiAoYmFieWxvbkNhbWVyYTogQ2FtZXJhKSA9PiB2b2lkID0gKCkgPT4ge30pOiBQcm9taXNlPENhbWVyYT4ge1xyXG4gICAgICAgIGNvbnN0IGV4dGVuc2lvblByb21pc2UgPSB0aGlzLl9leHRlbnNpb25zTG9hZENhbWVyYUFzeW5jKGNvbnRleHQsIGNhbWVyYSwgYXNzaWduKTtcclxuICAgICAgICBpZiAoZXh0ZW5zaW9uUHJvbWlzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZXh0ZW5zaW9uUHJvbWlzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gbmV3IEFycmF5PFByb21pc2U8YW55Pj4oKTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2dPcGVuKGAke2NvbnRleHR9ICR7Y2FtZXJhLm5hbWUgfHwgXCJcIn1gKTtcclxuXHJcbiAgICAgICAgdGhpcy5fYmFieWxvblNjZW5lLl9ibG9ja0VudGl0eUNvbGxlY3Rpb24gPSAhIXRoaXMuX2Fzc2V0Q29udGFpbmVyO1xyXG4gICAgICAgIGNvbnN0IGJhYnlsb25DYW1lcmEgPSBuZXcgRnJlZUNhbWVyYShjYW1lcmEubmFtZSB8fCBgY2FtZXJhJHtjYW1lcmEuaW5kZXh9YCwgVmVjdG9yMy5aZXJvKCksIHRoaXMuX2JhYnlsb25TY2VuZSwgZmFsc2UpO1xyXG4gICAgICAgIGJhYnlsb25DYW1lcmEuX3BhcmVudENvbnRhaW5lciA9IHRoaXMuX2Fzc2V0Q29udGFpbmVyO1xyXG4gICAgICAgIHRoaXMuX2JhYnlsb25TY2VuZS5fYmxvY2tFbnRpdHlDb2xsZWN0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgYmFieWxvbkNhbWVyYS5pZ25vcmVQYXJlbnRTY2FsaW5nID0gdHJ1ZTtcclxuICAgICAgICBjYW1lcmEuX2JhYnlsb25DYW1lcmEgPSBiYWJ5bG9uQ2FtZXJhO1xyXG5cclxuICAgICAgICAvLyBSb3RhdGlvbiBieSAxODAgYXMgZ2xURiBoYXMgYSBkaWZmZXJlbnQgY29udmVudGlvbiB0aGFuIEJhYnlsb24uXHJcbiAgICAgICAgYmFieWxvbkNhbWVyYS5yb3RhdGlvbi5zZXQoMCwgTWF0aC5QSSwgMCk7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoY2FtZXJhLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBDYW1lcmFUeXBlLlBFUlNQRUNUSVZFOiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwZXJzcGVjdGl2ZSA9IGNhbWVyYS5wZXJzcGVjdGl2ZTtcclxuICAgICAgICAgICAgICAgIGlmICghcGVyc3BlY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7Y29udGV4dH06IENhbWVyYSBwZXJzcGVjdGl2ZSBwcm9wZXJ0aWVzIGFyZSBtaXNzaW5nYCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgYmFieWxvbkNhbWVyYS5mb3YgPSBwZXJzcGVjdGl2ZS55Zm92O1xyXG4gICAgICAgICAgICAgICAgYmFieWxvbkNhbWVyYS5taW5aID0gcGVyc3BlY3RpdmUuem5lYXI7XHJcbiAgICAgICAgICAgICAgICBiYWJ5bG9uQ2FtZXJhLm1heFogPSBwZXJzcGVjdGl2ZS56ZmFyIHx8IDA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIENhbWVyYVR5cGUuT1JUSE9HUkFQSElDOiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWNhbWVyYS5vcnRob2dyYXBoaWMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7Y29udGV4dH06IENhbWVyYSBvcnRob2dyYXBoaWMgcHJvcGVydGllcyBhcmUgbWlzc2luZ2ApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGJhYnlsb25DYW1lcmEubW9kZSA9IENhbWVyYS5PUlRIT0dSQVBISUNfQ0FNRVJBO1xyXG4gICAgICAgICAgICAgICAgYmFieWxvbkNhbWVyYS5vcnRob0xlZnQgPSAtY2FtZXJhLm9ydGhvZ3JhcGhpYy54bWFnO1xyXG4gICAgICAgICAgICAgICAgYmFieWxvbkNhbWVyYS5vcnRob1JpZ2h0ID0gY2FtZXJhLm9ydGhvZ3JhcGhpYy54bWFnO1xyXG4gICAgICAgICAgICAgICAgYmFieWxvbkNhbWVyYS5vcnRob0JvdHRvbSA9IC1jYW1lcmEub3J0aG9ncmFwaGljLnltYWc7XHJcbiAgICAgICAgICAgICAgICBiYWJ5bG9uQ2FtZXJhLm9ydGhvVG9wID0gY2FtZXJhLm9ydGhvZ3JhcGhpYy55bWFnO1xyXG4gICAgICAgICAgICAgICAgYmFieWxvbkNhbWVyYS5taW5aID0gY2FtZXJhLm9ydGhvZ3JhcGhpYy56bmVhcjtcclxuICAgICAgICAgICAgICAgIGJhYnlsb25DYW1lcmEubWF4WiA9IGNhbWVyYS5vcnRob2dyYXBoaWMuemZhcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtjb250ZXh0fTogSW52YWxpZCBjYW1lcmEgdHlwZSAoJHtjYW1lcmEudHlwZX0pYCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEdMVEZMb2FkZXIuQWRkUG9pbnRlck1ldGFkYXRhKGJhYnlsb25DYW1lcmEsIGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMuX3BhcmVudC5vbkNhbWVyYUxvYWRlZE9ic2VydmFibGUubm90aWZ5T2JzZXJ2ZXJzKGJhYnlsb25DYW1lcmEpO1xyXG4gICAgICAgIGFzc2lnbihiYWJ5bG9uQ2FtZXJhKTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2dDbG9zZSgpO1xyXG5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYmFieWxvbkNhbWVyYTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9sb2FkQW5pbWF0aW9uc0FzeW5jKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGNvbnN0IGFuaW1hdGlvbnMgPSB0aGlzLl9nbHRmLmFuaW1hdGlvbnM7XHJcbiAgICAgICAgaWYgKCFhbmltYXRpb25zKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gbmV3IEFycmF5PFByb21pc2U8dm9pZD4+KCk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhbmltYXRpb25zLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBjb25zdCBhbmltYXRpb24gPSBhbmltYXRpb25zW2luZGV4XTtcclxuICAgICAgICAgICAgcHJvbWlzZXMucHVzaChcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZEFuaW1hdGlvbkFzeW5jKGAvYW5pbWF0aW9ucy8ke2FuaW1hdGlvbi5pbmRleH1gLCBhbmltYXRpb24pLnRoZW4oKGFuaW1hdGlvbkdyb3VwKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRGVsZXRlIHRoZSBhbmltYXRpb24gZ3JvdXAgaWYgaXQgZW5kZWQgdXAgbm90IGhhdmluZyBhbnkgYW5pbWF0aW9ucyBpbiBpdC5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoYW5pbWF0aW9uR3JvdXAudGFyZ2V0ZWRBbmltYXRpb25zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25Hcm91cC5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoKSA9PiB7fSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb2FkcyBhIGdsVEYgYW5pbWF0aW9uLlxyXG4gICAgICogQHBhcmFtIGNvbnRleHQgVGhlIGNvbnRleHQgd2hlbiBsb2FkaW5nIHRoZSBhc3NldFxyXG4gICAgICogQHBhcmFtIGFuaW1hdGlvbiBUaGUgZ2xURiBhbmltYXRpb24gcHJvcGVydHlcclxuICAgICAqIEByZXR1cm5zIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGxvYWRlZCBCYWJ5bG9uIGFuaW1hdGlvbiBncm91cCB3aGVuIHRoZSBsb2FkIGlzIGNvbXBsZXRlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkQW5pbWF0aW9uQXN5bmMoY29udGV4dDogc3RyaW5nLCBhbmltYXRpb246IElBbmltYXRpb24pOiBQcm9taXNlPEFuaW1hdGlvbkdyb3VwPiB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IHRoaXMuX2V4dGVuc2lvbnNMb2FkQW5pbWF0aW9uQXN5bmMoY29udGV4dCwgYW5pbWF0aW9uKTtcclxuICAgICAgICBpZiAocHJvbWlzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2JhYnlsb25TY2VuZS5fYmxvY2tFbnRpdHlDb2xsZWN0aW9uID0gISF0aGlzLl9hc3NldENvbnRhaW5lcjtcclxuICAgICAgICBjb25zdCBiYWJ5bG9uQW5pbWF0aW9uR3JvdXAgPSBuZXcgQW5pbWF0aW9uR3JvdXAoYW5pbWF0aW9uLm5hbWUgfHwgYGFuaW1hdGlvbiR7YW5pbWF0aW9uLmluZGV4fWAsIHRoaXMuX2JhYnlsb25TY2VuZSk7XHJcbiAgICAgICAgYmFieWxvbkFuaW1hdGlvbkdyb3VwLl9wYXJlbnRDb250YWluZXIgPSB0aGlzLl9hc3NldENvbnRhaW5lcjtcclxuICAgICAgICB0aGlzLl9iYWJ5bG9uU2NlbmUuX2Jsb2NrRW50aXR5Q29sbGVjdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgIGFuaW1hdGlvbi5fYmFieWxvbkFuaW1hdGlvbkdyb3VwID0gYmFieWxvbkFuaW1hdGlvbkdyb3VwO1xyXG5cclxuICAgICAgICBjb25zdCBwcm9taXNlcyA9IG5ldyBBcnJheTxQcm9taXNlPGFueT4+KCk7XHJcblxyXG4gICAgICAgIEFycmF5SXRlbS5Bc3NpZ24oYW5pbWF0aW9uLmNoYW5uZWxzKTtcclxuICAgICAgICBBcnJheUl0ZW0uQXNzaWduKGFuaW1hdGlvbi5zYW1wbGVycyk7XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgY2hhbm5lbCBvZiBhbmltYXRpb24uY2hhbm5lbHMpIHtcclxuICAgICAgICAgICAgcHJvbWlzZXMucHVzaChcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRBbmltYXRpb25DaGFubmVsQXN5bmMoYCR7Y29udGV4dH0vY2hhbm5lbHMvJHtjaGFubmVsLmluZGV4fWAsIGNvbnRleHQsIGFuaW1hdGlvbiwgY2hhbm5lbCwgKGJhYnlsb25UYXJnZXQsIGJhYnlsb25BbmltYXRpb24pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uVGFyZ2V0LmFuaW1hdGlvbnMgPSBiYWJ5bG9uVGFyZ2V0LmFuaW1hdGlvbnMgfHwgW107XHJcbiAgICAgICAgICAgICAgICAgICAgYmFieWxvblRhcmdldC5hbmltYXRpb25zLnB1c2goYmFieWxvbkFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFieWxvbkFuaW1hdGlvbkdyb3VwLmFkZFRhcmdldGVkQW5pbWF0aW9uKGJhYnlsb25BbmltYXRpb24sIGJhYnlsb25UYXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGJhYnlsb25BbmltYXRpb25Hcm91cC5ub3JtYWxpemUoMCk7XHJcbiAgICAgICAgICAgIHJldHVybiBiYWJ5bG9uQW5pbWF0aW9uR3JvdXA7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBMb2FkcyBhIGdsVEYgYW5pbWF0aW9uIGNoYW5uZWwuXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBUaGUgY29udGV4dCB3aGVuIGxvYWRpbmcgdGhlIGFzc2V0XHJcbiAgICAgKiBAcGFyYW0gYW5pbWF0aW9uQ29udGV4dCBUaGUgY29udGV4dCBvZiB0aGUgYW5pbWF0aW9uIHdoZW4gbG9hZGluZyB0aGUgYXNzZXRcclxuICAgICAqIEBwYXJhbSBhbmltYXRpb24gVGhlIGdsVEYgYW5pbWF0aW9uIHByb3BlcnR5XHJcbiAgICAgKiBAcGFyYW0gY2hhbm5lbCBUaGUgZ2xURiBhbmltYXRpb24gY2hhbm5lbCBwcm9wZXJ0eVxyXG4gICAgICogQHBhcmFtIG9uTG9hZCBDYWxsZWQgZm9yIGVhY2ggYW5pbWF0aW9uIGxvYWRlZFxyXG4gICAgICogQHJldHVybnMgQSB2b2lkIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBsb2FkIGlzIGNvbXBsZXRlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfbG9hZEFuaW1hdGlvbkNoYW5uZWxBc3luYyhcclxuICAgICAgICBjb250ZXh0OiBzdHJpbmcsXHJcbiAgICAgICAgYW5pbWF0aW9uQ29udGV4dDogc3RyaW5nLFxyXG4gICAgICAgIGFuaW1hdGlvbjogSUFuaW1hdGlvbixcclxuICAgICAgICBjaGFubmVsOiBJQW5pbWF0aW9uQ2hhbm5lbCxcclxuICAgICAgICBvbkxvYWQ6IChiYWJ5bG9uQW5pbWF0YWJsZTogSUFuaW1hdGFibGUsIGJhYnlsb25BbmltYXRpb246IEFuaW1hdGlvbikgPT4gdm9pZFxyXG4gICAgKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IHRoaXMuX2V4dGVuc2lvbnNMb2FkQW5pbWF0aW9uQ2hhbm5lbEFzeW5jKGNvbnRleHQsIGFuaW1hdGlvbkNvbnRleHQsIGFuaW1hdGlvbiwgY2hhbm5lbCwgb25Mb2FkKTtcclxuICAgICAgICBpZiAocHJvbWlzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjaGFubmVsLnRhcmdldC5ub2RlID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB0YXJnZXROb2RlID0gQXJyYXlJdGVtLkdldChgJHtjb250ZXh0fS90YXJnZXQvbm9kZWAsIHRoaXMuX2dsdGYubm9kZXMsIGNoYW5uZWwudGFyZ2V0Lm5vZGUpO1xyXG5cclxuICAgICAgICAvLyBJZ25vcmUgYW5pbWF0aW9ucyB0aGF0IGhhdmUgbm8gYW5pbWF0aW9uIHRhcmdldHMuXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAoY2hhbm5lbC50YXJnZXQucGF0aCA9PT0gQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGguV0VJR0hUUyAmJiAhdGFyZ2V0Tm9kZS5fbnVtTW9ycGhUYXJnZXRzKSB8fFxyXG4gICAgICAgICAgICAoY2hhbm5lbC50YXJnZXQucGF0aCAhPT0gQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGguV0VJR0hUUyAmJiAhdGFyZ2V0Tm9kZS5fYmFieWxvblRyYW5zZm9ybU5vZGUpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBwcm9wZXJ0aWVzOiBBcnJheTxBbmltYXRpb25Qcm9wZXJ0eUluZm8+O1xyXG4gICAgICAgIHN3aXRjaCAoY2hhbm5lbC50YXJnZXQucGF0aCkge1xyXG4gICAgICAgICAgICBjYXNlIEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLlRSQU5TTEFUSU9OOiB7XHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzID0gbm9kZUFuaW1hdGlvbkRhdGEudHJhbnNsYXRpb247XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLlJPVEFUSU9OOiB7XHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzID0gbm9kZUFuaW1hdGlvbkRhdGEucm90YXRpb247XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLlNDQUxFOiB7XHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzID0gbm9kZUFuaW1hdGlvbkRhdGEuc2NhbGU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLldFSUdIVFM6IHtcclxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXMgPSBub2RlQW5pbWF0aW9uRGF0YS53ZWlnaHRzO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2NvbnRleHR9L3RhcmdldC9wYXRoOiBJbnZhbGlkIHZhbHVlICgke2NoYW5uZWwudGFyZ2V0LnBhdGh9KWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB0YXJnZXRJbmZvOiBJQW5pbWF0aW9uVGFyZ2V0SW5mbyA9IHtcclxuICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXROb2RlLFxyXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiBwcm9wZXJ0aWVzLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9sb2FkQW5pbWF0aW9uQ2hhbm5lbEZyb21UYXJnZXRJbmZvQXN5bmMoY29udGV4dCwgYW5pbWF0aW9uQ29udGV4dCwgYW5pbWF0aW9uLCBjaGFubmVsLCB0YXJnZXRJbmZvLCBvbkxvYWQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogTG9hZHMgYSBnbFRGIGFuaW1hdGlvbiBjaGFubmVsLlxyXG4gICAgICogQHBhcmFtIGNvbnRleHQgVGhlIGNvbnRleHQgd2hlbiBsb2FkaW5nIHRoZSBhc3NldFxyXG4gICAgICogQHBhcmFtIGFuaW1hdGlvbkNvbnRleHQgVGhlIGNvbnRleHQgb2YgdGhlIGFuaW1hdGlvbiB3aGVuIGxvYWRpbmcgdGhlIGFzc2V0XHJcbiAgICAgKiBAcGFyYW0gYW5pbWF0aW9uIFRoZSBnbFRGIGFuaW1hdGlvbiBwcm9wZXJ0eVxyXG4gICAgICogQHBhcmFtIGNoYW5uZWwgVGhlIGdsVEYgYW5pbWF0aW9uIGNoYW5uZWwgcHJvcGVydHlcclxuICAgICAqIEBwYXJhbSB0YXJnZXRJbmZvIFRoZSBnbFRGIHRhcmdldCBhbmQgcHJvcGVydGllc1xyXG4gICAgICogQHBhcmFtIG9uTG9hZCBDYWxsZWQgZm9yIGVhY2ggYW5pbWF0aW9uIGxvYWRlZFxyXG4gICAgICogQHJldHVybnMgQSB2b2lkIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBsb2FkIGlzIGNvbXBsZXRlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfbG9hZEFuaW1hdGlvbkNoYW5uZWxGcm9tVGFyZ2V0SW5mb0FzeW5jKFxyXG4gICAgICAgIGNvbnRleHQ6IHN0cmluZyxcclxuICAgICAgICBhbmltYXRpb25Db250ZXh0OiBzdHJpbmcsXHJcbiAgICAgICAgYW5pbWF0aW9uOiBJQW5pbWF0aW9uLFxyXG4gICAgICAgIGNoYW5uZWw6IElBbmltYXRpb25DaGFubmVsLFxyXG4gICAgICAgIHRhcmdldEluZm86IElBbmltYXRpb25UYXJnZXRJbmZvLFxyXG4gICAgICAgIG9uTG9hZDogKGJhYnlsb25BbmltYXRhYmxlOiBJQW5pbWF0YWJsZSwgYmFieWxvbkFuaW1hdGlvbjogQW5pbWF0aW9uKSA9PiB2b2lkXHJcbiAgICApOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBjb25zdCBmcHMgPSB0aGlzLnBhcmVudC50YXJnZXRGcHM7XHJcbiAgICAgICAgY29uc3QgaW52ZnBzID0gMSAvIGZwcztcclxuXHJcbiAgICAgICAgY29uc3Qgc2FtcGxlciA9IEFycmF5SXRlbS5HZXQoYCR7Y29udGV4dH0vc2FtcGxlcmAsIGFuaW1hdGlvbi5zYW1wbGVycywgY2hhbm5lbC5zYW1wbGVyKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbG9hZEFuaW1hdGlvblNhbXBsZXJBc3luYyhgJHthbmltYXRpb25Db250ZXh0fS9zYW1wbGVycy8ke2NoYW5uZWwuc2FtcGxlcn1gLCBzYW1wbGVyKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBudW1BbmltYXRpb25zID0gMDtcclxuXHJcbiAgICAgICAgICAgIC8vIEV4dHJhY3QgdGhlIGNvcnJlc3BvbmRpbmcgdmFsdWVzIGZyb20gdGhlIHJlYWQgdmFsdWUuXHJcbiAgICAgICAgICAgIC8vIEdMVEYgdmFsdWVzIG1heSBiZSBkaXNwYXRjaGVkIHRvIHNldmVyYWwgQmFieWxvbiBwcm9wZXJ0aWVzLlxyXG4gICAgICAgICAgICAvLyBGb3IgZXhhbXBsZSwgYmFzZUNvbG9yRmFjdG9yIFtgcmAsIGBnYCwgYGJgLCBgYWBdIGlzIGRpc3BhdGNoZWQgdG9cclxuICAgICAgICAgICAgLy8gLSBhbGJlZG9Db2xvciBhcyBDb2xvcjMoYHJgLCBgZ2AsIGBiYClcclxuICAgICAgICAgICAgLy8gLSBhbHBoYSBhcyBgYWBcclxuICAgICAgICAgICAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB0YXJnZXRJbmZvLnByb3BlcnRpZXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0cmlkZSA9IHByb3BlcnR5LmdldFN0cmlkZSh0YXJnZXRJbmZvLnRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dCA9IGRhdGEuaW5wdXQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvdXRwdXQgPSBkYXRhLm91dHB1dDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGtleXMgPSBuZXcgQXJyYXk8SUFuaW1hdGlvbktleT4oaW5wdXQubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIGxldCBvdXRwdXRPZmZzZXQgPSAwO1xyXG5cclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoZGF0YS5pbnRlcnBvbGF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBBbmltYXRpb25TYW1wbGVySW50ZXJwb2xhdGlvbi5TVEVQOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBpbnB1dC5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gcHJvcGVydHkuZ2V0VmFsdWUodGFyZ2V0SW5mby50YXJnZXQsIG91dHB1dCwgb3V0cHV0T2Zmc2V0LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dE9mZnNldCArPSBzdHJpZGU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5c1tpbmRleF0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWU6IGlucHV0W2luZGV4XSAqIGZwcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwb2xhdGlvbjogQW5pbWF0aW9uS2V5SW50ZXJwb2xhdGlvbi5TVEVQLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBBbmltYXRpb25TYW1wbGVySW50ZXJwb2xhdGlvbi5DVUJJQ1NQTElORToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgaW5wdXQubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpblRhbmdlbnQgPSBwcm9wZXJ0eS5nZXRWYWx1ZSh0YXJnZXRJbmZvLnRhcmdldCwgb3V0cHV0LCBvdXRwdXRPZmZzZXQsIGludmZwcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRPZmZzZXQgKz0gc3RyaWRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBwcm9wZXJ0eS5nZXRWYWx1ZSh0YXJnZXRJbmZvLnRhcmdldCwgb3V0cHV0LCBvdXRwdXRPZmZzZXQsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0T2Zmc2V0ICs9IHN0cmlkZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG91dFRhbmdlbnQgPSBwcm9wZXJ0eS5nZXRWYWx1ZSh0YXJnZXRJbmZvLnRhcmdldCwgb3V0cHV0LCBvdXRwdXRPZmZzZXQsIGludmZwcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRPZmZzZXQgKz0gc3RyaWRlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXNbaW5kZXhdID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lOiBpbnB1dFtpbmRleF0gKiBmcHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5UYW5nZW50OiBpblRhbmdlbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dFRhbmdlbnQ6IG91dFRhbmdlbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIEFuaW1hdGlvblNhbXBsZXJJbnRlcnBvbGF0aW9uLkxJTkVBUjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgaW5wdXQubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHByb3BlcnR5LmdldFZhbHVlKHRhcmdldEluZm8udGFyZ2V0LCBvdXRwdXQsIG91dHB1dE9mZnNldCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRPZmZzZXQgKz0gc3RyaWRlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXNbaW5kZXhdID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lOiBpbnB1dFtpbmRleF0gKiBmcHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG91dHB1dE9mZnNldCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gYCR7YW5pbWF0aW9uLm5hbWUgfHwgYGFuaW1hdGlvbiR7YW5pbWF0aW9uLmluZGV4fWB9X2NoYW5uZWwke2NoYW5uZWwuaW5kZXh9XyR7bnVtQW5pbWF0aW9uc31gO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LmJ1aWxkQW5pbWF0aW9ucyh0YXJnZXRJbmZvLnRhcmdldCwgbmFtZSwgZnBzLCBrZXlzLCAoYmFieWxvbkFuaW1hdGFibGUsIGJhYnlsb25BbmltYXRpb24pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgKytudW1BbmltYXRpb25zO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkxvYWQoYmFieWxvbkFuaW1hdGFibGUsIGJhYnlsb25BbmltYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZEFuaW1hdGlvblNhbXBsZXJBc3luYyhjb250ZXh0OiBzdHJpbmcsIHNhbXBsZXI6IElBbmltYXRpb25TYW1wbGVyKTogUHJvbWlzZTxfSUFuaW1hdGlvblNhbXBsZXJEYXRhPiB7XHJcbiAgICAgICAgaWYgKHNhbXBsZXIuX2RhdGEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNhbXBsZXIuX2RhdGE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBpbnRlcnBvbGF0aW9uID0gc2FtcGxlci5pbnRlcnBvbGF0aW9uIHx8IEFuaW1hdGlvblNhbXBsZXJJbnRlcnBvbGF0aW9uLkxJTkVBUjtcclxuICAgICAgICBzd2l0Y2ggKGludGVycG9sYXRpb24pIHtcclxuICAgICAgICAgICAgY2FzZSBBbmltYXRpb25TYW1wbGVySW50ZXJwb2xhdGlvbi5TVEVQOlxyXG4gICAgICAgICAgICBjYXNlIEFuaW1hdGlvblNhbXBsZXJJbnRlcnBvbGF0aW9uLkxJTkVBUjpcclxuICAgICAgICAgICAgY2FzZSBBbmltYXRpb25TYW1wbGVySW50ZXJwb2xhdGlvbi5DVUJJQ1NQTElORToge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2NvbnRleHR9L2ludGVycG9sYXRpb246IEludmFsaWQgdmFsdWUgKCR7c2FtcGxlci5pbnRlcnBvbGF0aW9ufSlgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaW5wdXRBY2Nlc3NvciA9IEFycmF5SXRlbS5HZXQoYCR7Y29udGV4dH0vaW5wdXRgLCB0aGlzLl9nbHRmLmFjY2Vzc29ycywgc2FtcGxlci5pbnB1dCk7XHJcbiAgICAgICAgY29uc3Qgb3V0cHV0QWNjZXNzb3IgPSBBcnJheUl0ZW0uR2V0KGAke2NvbnRleHR9L291dHB1dGAsIHRoaXMuX2dsdGYuYWNjZXNzb3JzLCBzYW1wbGVyLm91dHB1dCk7XHJcbiAgICAgICAgc2FtcGxlci5fZGF0YSA9IFByb21pc2UuYWxsKFtcclxuICAgICAgICAgICAgdGhpcy5fbG9hZEZsb2F0QWNjZXNzb3JBc3luYyhgL2FjY2Vzc29ycy8ke2lucHV0QWNjZXNzb3IuaW5kZXh9YCwgaW5wdXRBY2Nlc3NvciksXHJcbiAgICAgICAgICAgIHRoaXMuX2xvYWRGbG9hdEFjY2Vzc29yQXN5bmMoYC9hY2Nlc3NvcnMvJHtvdXRwdXRBY2Nlc3Nvci5pbmRleH1gLCBvdXRwdXRBY2Nlc3NvciksXHJcbiAgICAgICAgXSkudGhlbigoW2lucHV0RGF0YSwgb3V0cHV0RGF0YV0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGlucHV0OiBpbnB1dERhdGEsXHJcbiAgICAgICAgICAgICAgICBpbnRlcnBvbGF0aW9uOiBpbnRlcnBvbGF0aW9uLFxyXG4gICAgICAgICAgICAgICAgb3V0cHV0OiBvdXRwdXREYXRhLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gc2FtcGxlci5fZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIExvYWRzIGEgZ2xURiBidWZmZXIuXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBUaGUgY29udGV4dCB3aGVuIGxvYWRpbmcgdGhlIGFzc2V0XHJcbiAgICAgKiBAcGFyYW0gYnVmZmVyIFRoZSBnbFRGIGJ1ZmZlciBwcm9wZXJ0eVxyXG4gICAgICogQHBhcmFtIGJ5dGVPZmZzZXQgVGhlIGJ5dGUgb2Zmc2V0IHRvIHVzZVxyXG4gICAgICogQHBhcmFtIGJ5dGVMZW5ndGggVGhlIGJ5dGUgbGVuZ3RoIHRvIHVzZVxyXG4gICAgICogQHJldHVybnMgQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgbG9hZGVkIGRhdGEgd2hlbiB0aGUgbG9hZCBpcyBjb21wbGV0ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZEJ1ZmZlckFzeW5jKGNvbnRleHQ6IHN0cmluZywgYnVmZmVyOiBJQnVmZmVyLCBieXRlT2Zmc2V0OiBudW1iZXIsIGJ5dGVMZW5ndGg6IG51bWJlcik6IFByb21pc2U8QXJyYXlCdWZmZXJWaWV3PiB7XHJcbiAgICAgICAgY29uc3QgZXh0ZW5zaW9uUHJvbWlzZSA9IHRoaXMuX2V4dGVuc2lvbnNMb2FkQnVmZmVyQXN5bmMoY29udGV4dCwgYnVmZmVyLCBieXRlT2Zmc2V0LCBieXRlTGVuZ3RoKTtcclxuICAgICAgICBpZiAoZXh0ZW5zaW9uUHJvbWlzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZXh0ZW5zaW9uUHJvbWlzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghYnVmZmVyLl9kYXRhKSB7XHJcbiAgICAgICAgICAgIGlmIChidWZmZXIudXJpKSB7XHJcbiAgICAgICAgICAgICAgICBidWZmZXIuX2RhdGEgPSB0aGlzLmxvYWRVcmlBc3luYyhgJHtjb250ZXh0fS91cmlgLCBidWZmZXIsIGJ1ZmZlci51cmkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9iaW4pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7Y29udGV4dH06IFVyaSBpcyBtaXNzaW5nIG9yIHRoZSBiaW5hcnkgZ2xURiBpcyBtaXNzaW5nIGl0cyBiaW5hcnkgY2h1bmtgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBidWZmZXIuX2RhdGEgPSB0aGlzLl9iaW4ucmVhZEFzeW5jKDAsIGJ1ZmZlci5ieXRlTGVuZ3RoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGJ1ZmZlci5fZGF0YS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoZGF0YS5idWZmZXIsIGRhdGEuYnl0ZU9mZnNldCArIGJ5dGVPZmZzZXQsIGJ5dGVMZW5ndGgpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7Y29udGV4dH06ICR7ZS5tZXNzYWdlfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb2FkcyBhIGdsVEYgYnVmZmVyIHZpZXcuXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBUaGUgY29udGV4dCB3aGVuIGxvYWRpbmcgdGhlIGFzc2V0XHJcbiAgICAgKiBAcGFyYW0gYnVmZmVyVmlldyBUaGUgZ2xURiBidWZmZXIgdmlldyBwcm9wZXJ0eVxyXG4gICAgICogQHJldHVybnMgQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgbG9hZGVkIGRhdGEgd2hlbiB0aGUgbG9hZCBpcyBjb21wbGV0ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZEJ1ZmZlclZpZXdBc3luYyhjb250ZXh0OiBzdHJpbmcsIGJ1ZmZlclZpZXc6IElCdWZmZXJWaWV3KTogUHJvbWlzZTxBcnJheUJ1ZmZlclZpZXc+IHtcclxuICAgICAgICBjb25zdCBleHRlbnNpb25Qcm9taXNlID0gdGhpcy5fZXh0ZW5zaW9uc0xvYWRCdWZmZXJWaWV3QXN5bmMoY29udGV4dCwgYnVmZmVyVmlldyk7XHJcbiAgICAgICAgaWYgKGV4dGVuc2lvblByb21pc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGV4dGVuc2lvblByb21pc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYnVmZmVyVmlldy5fZGF0YSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYnVmZmVyVmlldy5fZGF0YTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IEFycmF5SXRlbS5HZXQoYCR7Y29udGV4dH0vYnVmZmVyYCwgdGhpcy5fZ2x0Zi5idWZmZXJzLCBidWZmZXJWaWV3LmJ1ZmZlcik7XHJcbiAgICAgICAgYnVmZmVyVmlldy5fZGF0YSA9IHRoaXMubG9hZEJ1ZmZlckFzeW5jKGAvYnVmZmVycy8ke2J1ZmZlci5pbmRleH1gLCBidWZmZXIsIGJ1ZmZlclZpZXcuYnl0ZU9mZnNldCB8fCAwLCBidWZmZXJWaWV3LmJ5dGVMZW5ndGgpO1xyXG5cclxuICAgICAgICByZXR1cm4gYnVmZmVyVmlldy5fZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9sb2FkQWNjZXNzb3JBc3luYyhjb250ZXh0OiBzdHJpbmcsIGFjY2Vzc29yOiBJQWNjZXNzb3IsIGNvbnN0cnVjdG9yOiBUeXBlZEFycmF5Q29uc3RydWN0b3IpOiBQcm9taXNlPEFycmF5QnVmZmVyVmlldz4ge1xyXG4gICAgICAgIGlmIChhY2Nlc3Nvci5fZGF0YSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYWNjZXNzb3IuX2RhdGE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBudW1Db21wb25lbnRzID0gR0xURkxvYWRlci5fR2V0TnVtQ29tcG9uZW50cyhjb250ZXh0LCBhY2Nlc3Nvci50eXBlKTtcclxuICAgICAgICBjb25zdCBieXRlU3RyaWRlID0gbnVtQ29tcG9uZW50cyAqIFZlcnRleEJ1ZmZlci5HZXRUeXBlQnl0ZUxlbmd0aChhY2Nlc3Nvci5jb21wb25lbnRUeXBlKTtcclxuICAgICAgICBjb25zdCBsZW5ndGggPSBudW1Db21wb25lbnRzICogYWNjZXNzb3IuY291bnQ7XHJcblxyXG4gICAgICAgIGlmIChhY2Nlc3Nvci5idWZmZXJWaWV3ID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBhY2Nlc3Nvci5fZGF0YSA9IFByb21pc2UucmVzb2x2ZShuZXcgY29uc3RydWN0b3IobGVuZ3RoKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgYnVmZmVyVmlldyA9IEFycmF5SXRlbS5HZXQoYCR7Y29udGV4dH0vYnVmZmVyVmlld2AsIHRoaXMuX2dsdGYuYnVmZmVyVmlld3MsIGFjY2Vzc29yLmJ1ZmZlclZpZXcpO1xyXG4gICAgICAgICAgICBhY2Nlc3Nvci5fZGF0YSA9IHRoaXMubG9hZEJ1ZmZlclZpZXdBc3luYyhgL2J1ZmZlclZpZXdzLyR7YnVmZmVyVmlldy5pbmRleH1gLCBidWZmZXJWaWV3KS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWNjZXNzb3IuY29tcG9uZW50VHlwZSA9PT0gQWNjZXNzb3JDb21wb25lbnRUeXBlLkZMT0FUICYmICFhY2Nlc3Nvci5ub3JtYWxpemVkICYmICghYnVmZmVyVmlldy5ieXRlU3RyaWRlIHx8IGJ1ZmZlclZpZXcuYnl0ZVN0cmlkZSA9PT0gYnl0ZVN0cmlkZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gR0xURkxvYWRlci5fR2V0VHlwZWRBcnJheShjb250ZXh0LCBhY2Nlc3Nvci5jb21wb25lbnRUeXBlLCBkYXRhLCBhY2Nlc3Nvci5ieXRlT2Zmc2V0LCBsZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0eXBlZEFycmF5ID0gbmV3IGNvbnN0cnVjdG9yKGxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgVmVydGV4QnVmZmVyLkZvckVhY2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY2Vzc29yLmJ5dGVPZmZzZXQgfHwgMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyVmlldy5ieXRlU3RyaWRlIHx8IGJ5dGVTdHJpZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bUNvbXBvbmVudHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY2Vzc29yLmNvbXBvbmVudFR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVkQXJyYXkubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2Nlc3Nvci5ub3JtYWxpemVkIHx8IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAodmFsdWUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlZEFycmF5W2luZGV4XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHlwZWRBcnJheTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYWNjZXNzb3Iuc3BhcnNlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNwYXJzZSA9IGFjY2Vzc29yLnNwYXJzZTtcclxuICAgICAgICAgICAgYWNjZXNzb3IuX2RhdGEgPSBhY2Nlc3Nvci5fZGF0YS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0eXBlZEFycmF5ID0gZGF0YSBhcyBUeXBlZEFycmF5TGlrZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGluZGljZXNCdWZmZXJWaWV3ID0gQXJyYXlJdGVtLkdldChgJHtjb250ZXh0fS9zcGFyc2UvaW5kaWNlcy9idWZmZXJWaWV3YCwgdGhpcy5fZ2x0Zi5idWZmZXJWaWV3cywgc3BhcnNlLmluZGljZXMuYnVmZmVyVmlldyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZXNCdWZmZXJWaWV3ID0gQXJyYXlJdGVtLkdldChgJHtjb250ZXh0fS9zcGFyc2UvdmFsdWVzL2J1ZmZlclZpZXdgLCB0aGlzLl9nbHRmLmJ1ZmZlclZpZXdzLCBzcGFyc2UudmFsdWVzLmJ1ZmZlclZpZXcpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRCdWZmZXJWaWV3QXN5bmMoYC9idWZmZXJWaWV3cy8ke2luZGljZXNCdWZmZXJWaWV3LmluZGV4fWAsIGluZGljZXNCdWZmZXJWaWV3KSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRCdWZmZXJWaWV3QXN5bmMoYC9idWZmZXJWaWV3cy8ke3ZhbHVlc0J1ZmZlclZpZXcuaW5kZXh9YCwgdmFsdWVzQnVmZmVyVmlldyksXHJcbiAgICAgICAgICAgICAgICBdKS50aGVuKChbaW5kaWNlc0RhdGEsIHZhbHVlc0RhdGFdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5kaWNlcyA9IEdMVEZMb2FkZXIuX0dldFR5cGVkQXJyYXkoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGAke2NvbnRleHR9L3NwYXJzZS9pbmRpY2VzYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3BhcnNlLmluZGljZXMuY29tcG9uZW50VHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kaWNlc0RhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYXJzZS5pbmRpY2VzLmJ5dGVPZmZzZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYXJzZS5jb3VudFxyXG4gICAgICAgICAgICAgICAgICAgICkgYXMgSW5kaWNlc0FycmF5O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzcGFyc2VMZW5ndGggPSBudW1Db21wb25lbnRzICogc3BhcnNlLmNvdW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZXM6IFR5cGVkQXJyYXlMaWtlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoYWNjZXNzb3IuY29tcG9uZW50VHlwZSA9PT0gQWNjZXNzb3JDb21wb25lbnRUeXBlLkZMT0FUICYmICFhY2Nlc3Nvci5ub3JtYWxpemVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcyA9IEdMVEZMb2FkZXIuX0dldFR5cGVkQXJyYXkoYCR7Y29udGV4dH0vc3BhcnNlL3ZhbHVlc2AsIGFjY2Vzc29yLmNvbXBvbmVudFR5cGUsIHZhbHVlc0RhdGEsIHNwYXJzZS52YWx1ZXMuYnl0ZU9mZnNldCwgc3BhcnNlTGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzcGFyc2VEYXRhID0gR0xURkxvYWRlci5fR2V0VHlwZWRBcnJheShgJHtjb250ZXh0fS9zcGFyc2UvdmFsdWVzYCwgYWNjZXNzb3IuY29tcG9uZW50VHlwZSwgdmFsdWVzRGF0YSwgc3BhcnNlLnZhbHVlcy5ieXRlT2Zmc2V0LCBzcGFyc2VMZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMgPSBuZXcgY29uc3RydWN0b3Ioc3BhcnNlTGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVmVydGV4QnVmZmVyLkZvckVhY2goc3BhcnNlRGF0YSwgMCwgYnl0ZVN0cmlkZSwgbnVtQ29tcG9uZW50cywgYWNjZXNzb3IuY29tcG9uZW50VHlwZSwgdmFsdWVzLmxlbmd0aCwgYWNjZXNzb3Iubm9ybWFsaXplZCB8fCBmYWxzZSwgKHZhbHVlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzW2luZGV4XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZXNJbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kaWNlc0luZGV4ID0gMDsgaW5kaWNlc0luZGV4IDwgaW5kaWNlcy5sZW5ndGg7IGluZGljZXNJbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhSW5kZXggPSBpbmRpY2VzW2luZGljZXNJbmRleF0gKiBudW1Db21wb25lbnRzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBjb21wb25lbnRJbmRleCA9IDA7IGNvbXBvbmVudEluZGV4IDwgbnVtQ29tcG9uZW50czsgY29tcG9uZW50SW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZWRBcnJheVtkYXRhSW5kZXgrK10gPSB2YWx1ZXNbdmFsdWVzSW5kZXgrK107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0eXBlZEFycmF5O1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGFjY2Vzc29yLl9kYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfbG9hZEZsb2F0QWNjZXNzb3JBc3luYyhjb250ZXh0OiBzdHJpbmcsIGFjY2Vzc29yOiBJQWNjZXNzb3IpOiBQcm9taXNlPEZsb2F0MzJBcnJheT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9sb2FkQWNjZXNzb3JBc3luYyhjb250ZXh0LCBhY2Nlc3NvciwgRmxvYXQzMkFycmF5KSBhcyBQcm9taXNlPEZsb2F0MzJBcnJheT47XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIF9sb2FkSW5kaWNlc0FjY2Vzc29yQXN5bmMoY29udGV4dDogc3RyaW5nLCBhY2Nlc3NvcjogSUFjY2Vzc29yKTogUHJvbWlzZTxJbmRpY2VzQXJyYXk+IHtcclxuICAgICAgICBpZiAoYWNjZXNzb3IudHlwZSAhPT0gQWNjZXNzb3JUeXBlLlNDQUxBUikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7Y29udGV4dH0vdHlwZTogSW52YWxpZCB2YWx1ZSAke2FjY2Vzc29yLnR5cGV9YCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIGFjY2Vzc29yLmNvbXBvbmVudFR5cGUgIT09IEFjY2Vzc29yQ29tcG9uZW50VHlwZS5VTlNJR05FRF9CWVRFICYmXHJcbiAgICAgICAgICAgIGFjY2Vzc29yLmNvbXBvbmVudFR5cGUgIT09IEFjY2Vzc29yQ29tcG9uZW50VHlwZS5VTlNJR05FRF9TSE9SVCAmJlxyXG4gICAgICAgICAgICBhY2Nlc3Nvci5jb21wb25lbnRUeXBlICE9PSBBY2Nlc3NvckNvbXBvbmVudFR5cGUuVU5TSUdORURfSU5UXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtjb250ZXh0fS9jb21wb25lbnRUeXBlOiBJbnZhbGlkIHZhbHVlICR7YWNjZXNzb3IuY29tcG9uZW50VHlwZX1gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChhY2Nlc3Nvci5fZGF0YSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYWNjZXNzb3IuX2RhdGEgYXMgUHJvbWlzZTxJbmRpY2VzQXJyYXk+O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGFjY2Vzc29yLnNwYXJzZSkge1xyXG4gICAgICAgICAgICBjb25zdCBjb25zdHJ1Y3RvciA9IEdMVEZMb2FkZXIuX0dldFR5cGVkQXJyYXlDb25zdHJ1Y3RvcihgJHtjb250ZXh0fS9jb21wb25lbnRUeXBlYCwgYWNjZXNzb3IuY29tcG9uZW50VHlwZSk7XHJcbiAgICAgICAgICAgIGFjY2Vzc29yLl9kYXRhID0gdGhpcy5fbG9hZEFjY2Vzc29yQXN5bmMoY29udGV4dCwgYWNjZXNzb3IsIGNvbnN0cnVjdG9yKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBidWZmZXJWaWV3ID0gQXJyYXlJdGVtLkdldChgJHtjb250ZXh0fS9idWZmZXJWaWV3YCwgdGhpcy5fZ2x0Zi5idWZmZXJWaWV3cywgYWNjZXNzb3IuYnVmZmVyVmlldyk7XHJcbiAgICAgICAgICAgIGFjY2Vzc29yLl9kYXRhID0gdGhpcy5sb2FkQnVmZmVyVmlld0FzeW5jKGAvYnVmZmVyVmlld3MvJHtidWZmZXJWaWV3LmluZGV4fWAsIGJ1ZmZlclZpZXcpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBHTFRGTG9hZGVyLl9HZXRUeXBlZEFycmF5KGNvbnRleHQsIGFjY2Vzc29yLmNvbXBvbmVudFR5cGUsIGRhdGEsIGFjY2Vzc29yLmJ5dGVPZmZzZXQsIGFjY2Vzc29yLmNvdW50KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYWNjZXNzb3IuX2RhdGEgYXMgUHJvbWlzZTxJbmRpY2VzQXJyYXk+O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfbG9hZFZlcnRleEJ1ZmZlclZpZXdBc3luYyhidWZmZXJWaWV3OiBJQnVmZmVyVmlldyk6IFByb21pc2U8QnVmZmVyPiB7XHJcbiAgICAgICAgaWYgKGJ1ZmZlclZpZXcuX2JhYnlsb25CdWZmZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGJ1ZmZlclZpZXcuX2JhYnlsb25CdWZmZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBlbmdpbmUgPSB0aGlzLl9iYWJ5bG9uU2NlbmUuZ2V0RW5naW5lKCk7XHJcbiAgICAgICAgYnVmZmVyVmlldy5fYmFieWxvbkJ1ZmZlciA9IHRoaXMubG9hZEJ1ZmZlclZpZXdBc3luYyhgL2J1ZmZlclZpZXdzLyR7YnVmZmVyVmlldy5pbmRleH1gLCBidWZmZXJWaWV3KS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQnVmZmVyKGVuZ2luZSwgZGF0YSwgZmFsc2UpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gYnVmZmVyVmlldy5fYmFieWxvbkJ1ZmZlcjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgX2xvYWRWZXJ0ZXhBY2Nlc3NvckFzeW5jKGNvbnRleHQ6IHN0cmluZywgYWNjZXNzb3I6IElBY2Nlc3Nvciwga2luZDogc3RyaW5nKTogUHJvbWlzZTxWZXJ0ZXhCdWZmZXI+IHtcclxuICAgICAgICBpZiAoYWNjZXNzb3IuX2JhYnlsb25WZXJ0ZXhCdWZmZXI/LltraW5kXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYWNjZXNzb3IuX2JhYnlsb25WZXJ0ZXhCdWZmZXJba2luZF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWFjY2Vzc29yLl9iYWJ5bG9uVmVydGV4QnVmZmVyKSB7XHJcbiAgICAgICAgICAgIGFjY2Vzc29yLl9iYWJ5bG9uVmVydGV4QnVmZmVyID0ge307XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBlbmdpbmUgPSB0aGlzLl9iYWJ5bG9uU2NlbmUuZ2V0RW5naW5lKCk7XHJcblxyXG4gICAgICAgIGlmIChhY2Nlc3Nvci5zcGFyc2UgfHwgYWNjZXNzb3IuYnVmZmVyVmlldyA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgYWNjZXNzb3IuX2JhYnlsb25WZXJ0ZXhCdWZmZXJba2luZF0gPSB0aGlzLl9sb2FkRmxvYXRBY2Nlc3NvckFzeW5jKGNvbnRleHQsIGFjY2Vzc29yKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFZlcnRleEJ1ZmZlcihlbmdpbmUsIGRhdGEsIGtpbmQsIGZhbHNlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgYnVmZmVyVmlldyA9IEFycmF5SXRlbS5HZXQoYCR7Y29udGV4dH0vYnVmZmVyVmlld2AsIHRoaXMuX2dsdGYuYnVmZmVyVmlld3MsIGFjY2Vzc29yLmJ1ZmZlclZpZXcpO1xyXG4gICAgICAgICAgICBhY2Nlc3Nvci5fYmFieWxvblZlcnRleEJ1ZmZlcltraW5kXSA9IHRoaXMuX2xvYWRWZXJ0ZXhCdWZmZXJWaWV3QXN5bmMoYnVmZmVyVmlldykudGhlbigoYmFieWxvbkJ1ZmZlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbnVtQ29tcG9uZW50cyA9IEdMVEZMb2FkZXIuX0dldE51bUNvbXBvbmVudHMoY29udGV4dCwgYWNjZXNzb3IudHlwZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFZlcnRleEJ1ZmZlcihcclxuICAgICAgICAgICAgICAgICAgICBlbmdpbmUsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFieWxvbkJ1ZmZlcixcclxuICAgICAgICAgICAgICAgICAgICBraW5kLFxyXG4gICAgICAgICAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICAgICBidWZmZXJWaWV3LmJ5dGVTdHJpZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjY2Vzc29yLmJ5dGVPZmZzZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVtQ29tcG9uZW50cyxcclxuICAgICAgICAgICAgICAgICAgICBhY2Nlc3Nvci5jb21wb25lbnRUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjY2Vzc29yLm5vcm1hbGl6ZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYWNjZXNzb3IuX2JhYnlsb25WZXJ0ZXhCdWZmZXJba2luZF07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZE1hdGVyaWFsTWV0YWxsaWNSb3VnaG5lc3NQcm9wZXJ0aWVzQXN5bmMoY29udGV4dDogc3RyaW5nLCBwcm9wZXJ0aWVzOiBJTWF0ZXJpYWxQYnJNZXRhbGxpY1JvdWdobmVzcywgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGlmICghKGJhYnlsb25NYXRlcmlhbCBpbnN0YW5jZW9mIFBCUk1hdGVyaWFsKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7Y29udGV4dH06IE1hdGVyaWFsIHR5cGUgbm90IHN1cHBvcnRlZGApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBuZXcgQXJyYXk8UHJvbWlzZTxhbnk+PigpO1xyXG5cclxuICAgICAgICBpZiAocHJvcGVydGllcykge1xyXG4gICAgICAgICAgICBpZiAocHJvcGVydGllcy5iYXNlQ29sb3JGYWN0b3IpIHtcclxuICAgICAgICAgICAgICAgIGJhYnlsb25NYXRlcmlhbC5hbGJlZG9Db2xvciA9IENvbG9yMy5Gcm9tQXJyYXkocHJvcGVydGllcy5iYXNlQ29sb3JGYWN0b3IpO1xyXG4gICAgICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsLmFscGhhID0gcHJvcGVydGllcy5iYXNlQ29sb3JGYWN0b3JbM107XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwuYWxiZWRvQ29sb3IgPSBDb2xvcjMuV2hpdGUoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsLm1ldGFsbGljID0gcHJvcGVydGllcy5tZXRhbGxpY0ZhY3RvciA9PSB1bmRlZmluZWQgPyAxIDogcHJvcGVydGllcy5tZXRhbGxpY0ZhY3RvcjtcclxuICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsLnJvdWdobmVzcyA9IHByb3BlcnRpZXMucm91Z2huZXNzRmFjdG9yID09IHVuZGVmaW5lZCA/IDEgOiBwcm9wZXJ0aWVzLnJvdWdobmVzc0ZhY3RvcjtcclxuXHJcbiAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzLmJhc2VDb2xvclRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkVGV4dHVyZUluZm9Bc3luYyhgJHtjb250ZXh0fS9iYXNlQ29sb3JUZXh0dXJlYCwgcHJvcGVydGllcy5iYXNlQ29sb3JUZXh0dXJlLCAodGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlLm5hbWUgPSBgJHtiYWJ5bG9uTWF0ZXJpYWwubmFtZX0gKEJhc2UgQ29sb3IpYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsLmFsYmVkb1RleHR1cmUgPSB0ZXh0dXJlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAocHJvcGVydGllcy5tZXRhbGxpY1JvdWdobmVzc1RleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXMubWV0YWxsaWNSb3VnaG5lc3NUZXh0dXJlLm5vbkNvbG9yRGF0YSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZFRleHR1cmVJbmZvQXN5bmMoYCR7Y29udGV4dH0vbWV0YWxsaWNSb3VnaG5lc3NUZXh0dXJlYCwgcHJvcGVydGllcy5tZXRhbGxpY1JvdWdobmVzc1RleHR1cmUsICh0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHR1cmUubmFtZSA9IGAke2JhYnlsb25NYXRlcmlhbC5uYW1lfSAoTWV0YWxsaWMgUm91Z2huZXNzKWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhYnlsb25NYXRlcmlhbC5tZXRhbGxpY1RleHR1cmUgPSB0ZXh0dXJlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIGJhYnlsb25NYXRlcmlhbC51c2VNZXRhbGxuZXNzRnJvbU1ldGFsbGljVGV4dHVyZUJsdWUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsLnVzZVJvdWdobmVzc0Zyb21NZXRhbGxpY1RleHR1cmVHcmVlbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwudXNlUm91Z2huZXNzRnJvbU1ldGFsbGljVGV4dHVyZUFscGhhID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoKSA9PiB7fSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIF9sb2FkTWF0ZXJpYWxBc3luYyhcclxuICAgICAgICBjb250ZXh0OiBzdHJpbmcsXHJcbiAgICAgICAgbWF0ZXJpYWw6IElNYXRlcmlhbCxcclxuICAgICAgICBiYWJ5bG9uTWVzaDogTnVsbGFibGU8TWVzaD4sXHJcbiAgICAgICAgYmFieWxvbkRyYXdNb2RlOiBudW1iZXIsXHJcbiAgICAgICAgYXNzaWduOiAoYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCkgPT4gdm9pZCA9ICgpID0+IHt9XHJcbiAgICApOiBQcm9taXNlPE1hdGVyaWFsPiB7XHJcbiAgICAgICAgY29uc3QgZXh0ZW5zaW9uUHJvbWlzZSA9IHRoaXMuX2V4dGVuc2lvbnNMb2FkTWF0ZXJpYWxBc3luYyhjb250ZXh0LCBtYXRlcmlhbCwgYmFieWxvbk1lc2gsIGJhYnlsb25EcmF3TW9kZSwgYXNzaWduKTtcclxuICAgICAgICBpZiAoZXh0ZW5zaW9uUHJvbWlzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZXh0ZW5zaW9uUHJvbWlzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1hdGVyaWFsLl9kYXRhID0gbWF0ZXJpYWwuX2RhdGEgfHwge307XHJcbiAgICAgICAgbGV0IGJhYnlsb25EYXRhID0gbWF0ZXJpYWwuX2RhdGFbYmFieWxvbkRyYXdNb2RlXTtcclxuICAgICAgICBpZiAoIWJhYnlsb25EYXRhKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9nT3BlbihgJHtjb250ZXh0fSAke21hdGVyaWFsLm5hbWUgfHwgXCJcIn1gKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGJhYnlsb25NYXRlcmlhbCA9IHRoaXMuY3JlYXRlTWF0ZXJpYWwoY29udGV4dCwgbWF0ZXJpYWwsIGJhYnlsb25EcmF3TW9kZSk7XHJcblxyXG4gICAgICAgICAgICBiYWJ5bG9uRGF0YSA9IHtcclxuICAgICAgICAgICAgICAgIGJhYnlsb25NYXRlcmlhbDogYmFieWxvbk1hdGVyaWFsLFxyXG4gICAgICAgICAgICAgICAgYmFieWxvbk1lc2hlczogW10sXHJcbiAgICAgICAgICAgICAgICBwcm9taXNlOiB0aGlzLmxvYWRNYXRlcmlhbFByb3BlcnRpZXNBc3luYyhjb250ZXh0LCBtYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsKSxcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIG1hdGVyaWFsLl9kYXRhW2JhYnlsb25EcmF3TW9kZV0gPSBiYWJ5bG9uRGF0YTtcclxuXHJcbiAgICAgICAgICAgIEdMVEZMb2FkZXIuQWRkUG9pbnRlck1ldGFkYXRhKGJhYnlsb25NYXRlcmlhbCwgY29udGV4dCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3BhcmVudC5vbk1hdGVyaWFsTG9hZGVkT2JzZXJ2YWJsZS5ub3RpZnlPYnNlcnZlcnMoYmFieWxvbk1hdGVyaWFsKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubG9nQ2xvc2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChiYWJ5bG9uTWVzaCkge1xyXG4gICAgICAgICAgICBiYWJ5bG9uRGF0YS5iYWJ5bG9uTWVzaGVzLnB1c2goYmFieWxvbk1lc2gpO1xyXG5cclxuICAgICAgICAgICAgYmFieWxvbk1lc2gub25EaXNwb3NlT2JzZXJ2YWJsZS5hZGRPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gYmFieWxvbkRhdGEuYmFieWxvbk1lc2hlcy5pbmRleE9mKGJhYnlsb25NZXNoKTtcclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uRGF0YS5iYWJ5bG9uTWVzaGVzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXNzaWduKGJhYnlsb25EYXRhLmJhYnlsb25NYXRlcmlhbCk7XHJcblxyXG4gICAgICAgIHJldHVybiBiYWJ5bG9uRGF0YS5wcm9taXNlLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYmFieWxvbkRhdGEuYmFieWxvbk1hdGVyaWFsO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NyZWF0ZURlZmF1bHRNYXRlcmlhbChuYW1lOiBzdHJpbmcsIGJhYnlsb25EcmF3TW9kZTogbnVtYmVyKTogTWF0ZXJpYWwge1xyXG4gICAgICAgIHRoaXMuX2JhYnlsb25TY2VuZS5fYmxvY2tFbnRpdHlDb2xsZWN0aW9uID0gISF0aGlzLl9hc3NldENvbnRhaW5lcjtcclxuICAgICAgICBjb25zdCBiYWJ5bG9uTWF0ZXJpYWwgPSBuZXcgUEJSTWF0ZXJpYWwobmFtZSwgdGhpcy5fYmFieWxvblNjZW5lKTtcclxuICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwuX3BhcmVudENvbnRhaW5lciA9IHRoaXMuX2Fzc2V0Q29udGFpbmVyO1xyXG4gICAgICAgIHRoaXMuX2JhYnlsb25TY2VuZS5fYmxvY2tFbnRpdHlDb2xsZWN0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgLy8gTW92ZWQgdG8gbWVzaCBzbyB1c2VyIGNhbiBjaGFuZ2UgbWF0ZXJpYWxzIG9uIGdsdGYgbWVzaGVzOiBiYWJ5bG9uTWF0ZXJpYWwuc2lkZU9yaWVudGF0aW9uID0gdGhpcy5fYmFieWxvblNjZW5lLnVzZVJpZ2h0SGFuZGVkU3lzdGVtID8gTWF0ZXJpYWwuQ291bnRlckNsb2NrV2lzZVNpZGVPcmllbnRhdGlvbiA6IE1hdGVyaWFsLkNsb2NrV2lzZVNpZGVPcmllbnRhdGlvbjtcclxuICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwuZmlsbE1vZGUgPSBiYWJ5bG9uRHJhd01vZGU7XHJcbiAgICAgICAgYmFieWxvbk1hdGVyaWFsLmVuYWJsZVNwZWN1bGFyQW50aUFsaWFzaW5nID0gdHJ1ZTtcclxuICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwudXNlUmFkaWFuY2VPdmVyQWxwaGEgPSAhdGhpcy5fcGFyZW50LnRyYW5zcGFyZW5jeUFzQ292ZXJhZ2U7XHJcbiAgICAgICAgYmFieWxvbk1hdGVyaWFsLnVzZVNwZWN1bGFyT3ZlckFscGhhID0gIXRoaXMuX3BhcmVudC50cmFuc3BhcmVuY3lBc0NvdmVyYWdlO1xyXG4gICAgICAgIGJhYnlsb25NYXRlcmlhbC50cmFuc3BhcmVuY3lNb2RlID0gUEJSTWF0ZXJpYWwuUEJSTUFURVJJQUxfT1BBUVVFO1xyXG4gICAgICAgIGJhYnlsb25NYXRlcmlhbC5tZXRhbGxpYyA9IDE7XHJcbiAgICAgICAgYmFieWxvbk1hdGVyaWFsLnJvdWdobmVzcyA9IDE7XHJcbiAgICAgICAgcmV0dXJuIGJhYnlsb25NYXRlcmlhbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBCYWJ5bG9uIG1hdGVyaWFsIGZyb20gYSBnbFRGIG1hdGVyaWFsLlxyXG4gICAgICogQHBhcmFtIGNvbnRleHQgVGhlIGNvbnRleHQgd2hlbiBsb2FkaW5nIHRoZSBhc3NldFxyXG4gICAgICogQHBhcmFtIG1hdGVyaWFsIFRoZSBnbFRGIG1hdGVyaWFsIHByb3BlcnR5XHJcbiAgICAgKiBAcGFyYW0gYmFieWxvbkRyYXdNb2RlIFRoZSBkcmF3IG1vZGUgZm9yIHRoZSBCYWJ5bG9uIG1hdGVyaWFsXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgQmFieWxvbiBtYXRlcmlhbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY3JlYXRlTWF0ZXJpYWwoY29udGV4dDogc3RyaW5nLCBtYXRlcmlhbDogSU1hdGVyaWFsLCBiYWJ5bG9uRHJhd01vZGU6IG51bWJlcik6IE1hdGVyaWFsIHtcclxuICAgICAgICBjb25zdCBleHRlbnNpb25Qcm9taXNlID0gdGhpcy5fZXh0ZW5zaW9uc0NyZWF0ZU1hdGVyaWFsKGNvbnRleHQsIG1hdGVyaWFsLCBiYWJ5bG9uRHJhd01vZGUpO1xyXG4gICAgICAgIGlmIChleHRlbnNpb25Qcm9taXNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBleHRlbnNpb25Qcm9taXNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbmFtZSA9IG1hdGVyaWFsLm5hbWUgfHwgYG1hdGVyaWFsJHttYXRlcmlhbC5pbmRleH1gO1xyXG4gICAgICAgIGNvbnN0IGJhYnlsb25NYXRlcmlhbCA9IHRoaXMuX2NyZWF0ZURlZmF1bHRNYXRlcmlhbChuYW1lLCBiYWJ5bG9uRHJhd01vZGUpO1xyXG5cclxuICAgICAgICByZXR1cm4gYmFieWxvbk1hdGVyaWFsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTG9hZHMgcHJvcGVydGllcyBmcm9tIGEgZ2xURiBtYXRlcmlhbCBpbnRvIGEgQmFieWxvbiBtYXRlcmlhbC5cclxuICAgICAqIEBwYXJhbSBjb250ZXh0IFRoZSBjb250ZXh0IHdoZW4gbG9hZGluZyB0aGUgYXNzZXRcclxuICAgICAqIEBwYXJhbSBtYXRlcmlhbCBUaGUgZ2xURiBtYXRlcmlhbCBwcm9wZXJ0eVxyXG4gICAgICogQHBhcmFtIGJhYnlsb25NYXRlcmlhbCBUaGUgQmFieWxvbiBtYXRlcmlhbFxyXG4gICAgICogQHJldHVybnMgQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgbG9hZCBpcyBjb21wbGV0ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZE1hdGVyaWFsUHJvcGVydGllc0FzeW5jKGNvbnRleHQ6IHN0cmluZywgbWF0ZXJpYWw6IElNYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGNvbnN0IGV4dGVuc2lvblByb21pc2UgPSB0aGlzLl9leHRlbnNpb25zTG9hZE1hdGVyaWFsUHJvcGVydGllc0FzeW5jKGNvbnRleHQsIG1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWwpO1xyXG4gICAgICAgIGlmIChleHRlbnNpb25Qcm9taXNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBleHRlbnNpb25Qcm9taXNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBuZXcgQXJyYXk8UHJvbWlzZTxhbnk+PigpO1xyXG5cclxuICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMubG9hZE1hdGVyaWFsQmFzZVByb3BlcnRpZXNBc3luYyhjb250ZXh0LCBtYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsKSk7XHJcblxyXG4gICAgICAgIGlmIChtYXRlcmlhbC5wYnJNZXRhbGxpY1JvdWdobmVzcykge1xyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMuX2xvYWRNYXRlcmlhbE1ldGFsbGljUm91Z2huZXNzUHJvcGVydGllc0FzeW5jKGAke2NvbnRleHR9L3Bick1ldGFsbGljUm91Z2huZXNzYCwgbWF0ZXJpYWwucGJyTWV0YWxsaWNSb3VnaG5lc3MsIGJhYnlsb25NYXRlcmlhbCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5sb2FkTWF0ZXJpYWxBbHBoYVByb3BlcnRpZXMoY29udGV4dCwgbWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbCk7XHJcblxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoKSA9PiB7fSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb2FkcyB0aGUgbm9ybWFsLCBvY2NsdXNpb24sIGFuZCBlbWlzc2l2ZSBwcm9wZXJ0aWVzIGZyb20gYSBnbFRGIG1hdGVyaWFsIGludG8gYSBCYWJ5bG9uIG1hdGVyaWFsLlxyXG4gICAgICogQHBhcmFtIGNvbnRleHQgVGhlIGNvbnRleHQgd2hlbiBsb2FkaW5nIHRoZSBhc3NldFxyXG4gICAgICogQHBhcmFtIG1hdGVyaWFsIFRoZSBnbFRGIG1hdGVyaWFsIHByb3BlcnR5XHJcbiAgICAgKiBAcGFyYW0gYmFieWxvbk1hdGVyaWFsIFRoZSBCYWJ5bG9uIG1hdGVyaWFsXHJcbiAgICAgKiBAcmV0dXJucyBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBsb2FkIGlzIGNvbXBsZXRlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkTWF0ZXJpYWxCYXNlUHJvcGVydGllc0FzeW5jKGNvbnRleHQ6IHN0cmluZywgbWF0ZXJpYWw6IElNYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGlmICghKGJhYnlsb25NYXRlcmlhbCBpbnN0YW5jZW9mIFBCUk1hdGVyaWFsKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7Y29udGV4dH06IE1hdGVyaWFsIHR5cGUgbm90IHN1cHBvcnRlZGApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBuZXcgQXJyYXk8UHJvbWlzZTxhbnk+PigpO1xyXG5cclxuICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwuZW1pc3NpdmVDb2xvciA9IG1hdGVyaWFsLmVtaXNzaXZlRmFjdG9yID8gQ29sb3IzLkZyb21BcnJheShtYXRlcmlhbC5lbWlzc2l2ZUZhY3RvcikgOiBuZXcgQ29sb3IzKDAsIDAsIDApO1xyXG4gICAgICAgIGlmIChtYXRlcmlhbC5kb3VibGVTaWRlZCkge1xyXG4gICAgICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwuYmFja0ZhY2VDdWxsaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJhYnlsb25NYXRlcmlhbC50d29TaWRlZExpZ2h0aW5nID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtYXRlcmlhbC5ub3JtYWxUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgIG1hdGVyaWFsLm5vcm1hbFRleHR1cmUubm9uQ29sb3JEYXRhID0gdHJ1ZTtcclxuICAgICAgICAgICAgcHJvbWlzZXMucHVzaChcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZFRleHR1cmVJbmZvQXN5bmMoYCR7Y29udGV4dH0vbm9ybWFsVGV4dHVyZWAsIG1hdGVyaWFsLm5vcm1hbFRleHR1cmUsICh0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dHVyZS5uYW1lID0gYCR7YmFieWxvbk1hdGVyaWFsLm5hbWV9IChOb3JtYWwpYDtcclxuICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwuYnVtcFRleHR1cmUgPSB0ZXh0dXJlO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIGJhYnlsb25NYXRlcmlhbC5pbnZlcnROb3JtYWxNYXBYID0gIXRoaXMuX2JhYnlsb25TY2VuZS51c2VSaWdodEhhbmRlZFN5c3RlbTtcclxuICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsLmludmVydE5vcm1hbE1hcFkgPSB0aGlzLl9iYWJ5bG9uU2NlbmUudXNlUmlnaHRIYW5kZWRTeXN0ZW07XHJcbiAgICAgICAgICAgIGlmIChtYXRlcmlhbC5ub3JtYWxUZXh0dXJlLnNjYWxlICE9IHVuZGVmaW5lZCAmJiBiYWJ5bG9uTWF0ZXJpYWwuYnVtcFRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgIGJhYnlsb25NYXRlcmlhbC5idW1wVGV4dHVyZS5sZXZlbCA9IG1hdGVyaWFsLm5vcm1hbFRleHR1cmUuc2NhbGU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGJhYnlsb25NYXRlcmlhbC5mb3JjZUlycmFkaWFuY2VJbkZyYWdtZW50ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtYXRlcmlhbC5vY2NsdXNpb25UZXh0dXJlKSB7XHJcbiAgICAgICAgICAgIG1hdGVyaWFsLm9jY2x1c2lvblRleHR1cmUubm9uQ29sb3JEYXRhID0gdHJ1ZTtcclxuICAgICAgICAgICAgcHJvbWlzZXMucHVzaChcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZFRleHR1cmVJbmZvQXN5bmMoYCR7Y29udGV4dH0vb2NjbHVzaW9uVGV4dHVyZWAsIG1hdGVyaWFsLm9jY2x1c2lvblRleHR1cmUsICh0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dHVyZS5uYW1lID0gYCR7YmFieWxvbk1hdGVyaWFsLm5hbWV9IChPY2NsdXNpb24pYDtcclxuICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwuYW1iaWVudFRleHR1cmUgPSB0ZXh0dXJlO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIGJhYnlsb25NYXRlcmlhbC51c2VBbWJpZW50SW5HcmF5U2NhbGUgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAobWF0ZXJpYWwub2NjbHVzaW9uVGV4dHVyZS5zdHJlbmd0aCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGJhYnlsb25NYXRlcmlhbC5hbWJpZW50VGV4dHVyZVN0cmVuZ3RoID0gbWF0ZXJpYWwub2NjbHVzaW9uVGV4dHVyZS5zdHJlbmd0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG1hdGVyaWFsLmVtaXNzaXZlVGV4dHVyZSkge1xyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkVGV4dHVyZUluZm9Bc3luYyhgJHtjb250ZXh0fS9lbWlzc2l2ZVRleHR1cmVgLCBtYXRlcmlhbC5lbWlzc2l2ZVRleHR1cmUsICh0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dHVyZS5uYW1lID0gYCR7YmFieWxvbk1hdGVyaWFsLm5hbWV9IChFbWlzc2l2ZSlgO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhYnlsb25NYXRlcmlhbC5lbWlzc2l2ZVRleHR1cmUgPSB0ZXh0dXJlO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoKSA9PiB7fSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb2FkcyB0aGUgYWxwaGEgcHJvcGVydGllcyBmcm9tIGEgZ2xURiBtYXRlcmlhbCBpbnRvIGEgQmFieWxvbiBtYXRlcmlhbC5cclxuICAgICAqIE11c3QgYmUgY2FsbGVkIGFmdGVyIHRoZSBzZXR0aW5nIHRoZSBhbGJlZG8gdGV4dHVyZSBvZiB0aGUgQmFieWxvbiBtYXRlcmlhbCB3aGVuIHRoZSBtYXRlcmlhbCBoYXMgYW4gYWxiZWRvIHRleHR1cmUuXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBUaGUgY29udGV4dCB3aGVuIGxvYWRpbmcgdGhlIGFzc2V0XHJcbiAgICAgKiBAcGFyYW0gbWF0ZXJpYWwgVGhlIGdsVEYgbWF0ZXJpYWwgcHJvcGVydHlcclxuICAgICAqIEBwYXJhbSBiYWJ5bG9uTWF0ZXJpYWwgVGhlIEJhYnlsb24gbWF0ZXJpYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWRNYXRlcmlhbEFscGhhUHJvcGVydGllcyhjb250ZXh0OiBzdHJpbmcsIG1hdGVyaWFsOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIShiYWJ5bG9uTWF0ZXJpYWwgaW5zdGFuY2VvZiBQQlJNYXRlcmlhbCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2NvbnRleHR9OiBNYXRlcmlhbCB0eXBlIG5vdCBzdXBwb3J0ZWRgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGFscGhhTW9kZSA9IG1hdGVyaWFsLmFscGhhTW9kZSB8fCBNYXRlcmlhbEFscGhhTW9kZS5PUEFRVUU7XHJcbiAgICAgICAgc3dpdGNoIChhbHBoYU1vZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBNYXRlcmlhbEFscGhhTW9kZS5PUEFRVUU6IHtcclxuICAgICAgICAgICAgICAgIGJhYnlsb25NYXRlcmlhbC50cmFuc3BhcmVuY3lNb2RlID0gUEJSTWF0ZXJpYWwuUEJSTUFURVJJQUxfT1BBUVVFO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBNYXRlcmlhbEFscGhhTW9kZS5NQVNLOiB7XHJcbiAgICAgICAgICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwudHJhbnNwYXJlbmN5TW9kZSA9IFBCUk1hdGVyaWFsLlBCUk1BVEVSSUFMX0FMUEhBVEVTVDtcclxuICAgICAgICAgICAgICAgIGJhYnlsb25NYXRlcmlhbC5hbHBoYUN1dE9mZiA9IG1hdGVyaWFsLmFscGhhQ3V0b2ZmID09IHVuZGVmaW5lZCA/IDAuNSA6IG1hdGVyaWFsLmFscGhhQ3V0b2ZmO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbC5hbGJlZG9UZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsLmFsYmVkb1RleHR1cmUuaGFzQWxwaGEgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBNYXRlcmlhbEFscGhhTW9kZS5CTEVORDoge1xyXG4gICAgICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsLnRyYW5zcGFyZW5jeU1vZGUgPSBQQlJNYXRlcmlhbC5QQlJNQVRFUklBTF9BTFBIQUJMRU5EO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbC5hbGJlZG9UZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsLmFsYmVkb1RleHR1cmUuaGFzQWxwaGEgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhYnlsb25NYXRlcmlhbC51c2VBbHBoYUZyb21BbGJlZG9UZXh0dXJlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtjb250ZXh0fS9hbHBoYU1vZGU6IEludmFsaWQgdmFsdWUgKCR7bWF0ZXJpYWwuYWxwaGFNb2RlfSlgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIExvYWRzIGEgZ2xURiB0ZXh0dXJlIGluZm8uXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBUaGUgY29udGV4dCB3aGVuIGxvYWRpbmcgdGhlIGFzc2V0XHJcbiAgICAgKiBAcGFyYW0gdGV4dHVyZUluZm8gVGhlIGdsVEYgdGV4dHVyZSBpbmZvIHByb3BlcnR5XHJcbiAgICAgKiBAcGFyYW0gYXNzaWduIEEgZnVuY3Rpb24gY2FsbGVkIHN5bmNocm9ub3VzbHkgYWZ0ZXIgcGFyc2luZyB0aGUgZ2xURiBwcm9wZXJ0aWVzXHJcbiAgICAgKiBAcmV0dXJucyBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBsb2FkZWQgQmFieWxvbiB0ZXh0dXJlIHdoZW4gdGhlIGxvYWQgaXMgY29tcGxldGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWRUZXh0dXJlSW5mb0FzeW5jKGNvbnRleHQ6IHN0cmluZywgdGV4dHVyZUluZm86IElUZXh0dXJlSW5mbywgYXNzaWduOiAoYmFieWxvblRleHR1cmU6IEJhc2VUZXh0dXJlKSA9PiB2b2lkID0gKCkgPT4ge30pOiBQcm9taXNlPEJhc2VUZXh0dXJlPiB7XHJcbiAgICAgICAgY29uc3QgZXh0ZW5zaW9uUHJvbWlzZSA9IHRoaXMuX2V4dGVuc2lvbnNMb2FkVGV4dHVyZUluZm9Bc3luYyhjb250ZXh0LCB0ZXh0dXJlSW5mbywgYXNzaWduKTtcclxuICAgICAgICBpZiAoZXh0ZW5zaW9uUHJvbWlzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZXh0ZW5zaW9uUHJvbWlzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubG9nT3BlbihgJHtjb250ZXh0fWApO1xyXG5cclxuICAgICAgICBpZiAodGV4dHVyZUluZm8udGV4Q29vcmQhID49IDYpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2NvbnRleHR9L3RleENvb3JkOiBJbnZhbGlkIHZhbHVlICgke3RleHR1cmVJbmZvLnRleENvb3JkfSlgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHRleHR1cmUgPSBBcnJheUl0ZW0uR2V0KGAke2NvbnRleHR9L2luZGV4YCwgdGhpcy5fZ2x0Zi50ZXh0dXJlcywgdGV4dHVyZUluZm8uaW5kZXgpO1xyXG4gICAgICAgIHRleHR1cmUuX3RleHR1cmVJbmZvID0gdGV4dHVyZUluZm87XHJcblxyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLl9sb2FkVGV4dHVyZUFzeW5jKGAvdGV4dHVyZXMvJHt0ZXh0dXJlSW5mby5pbmRleH1gLCB0ZXh0dXJlLCAoYmFieWxvblRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgYmFieWxvblRleHR1cmUuY29vcmRpbmF0ZXNJbmRleCA9IHRleHR1cmVJbmZvLnRleENvb3JkIHx8IDA7XHJcbiAgICAgICAgICAgIEdMVEZMb2FkZXIuQWRkUG9pbnRlck1ldGFkYXRhKGJhYnlsb25UZXh0dXJlLCBjb250ZXh0KTtcclxuICAgICAgICAgICAgdGhpcy5fcGFyZW50Lm9uVGV4dHVyZUxvYWRlZE9ic2VydmFibGUubm90aWZ5T2JzZXJ2ZXJzKGJhYnlsb25UZXh0dXJlKTtcclxuICAgICAgICAgICAgYXNzaWduKGJhYnlsb25UZXh0dXJlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2dDbG9zZSgpO1xyXG5cclxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgX2xvYWRUZXh0dXJlQXN5bmMoY29udGV4dDogc3RyaW5nLCB0ZXh0dXJlOiBJVGV4dHVyZSwgYXNzaWduOiAoYmFieWxvblRleHR1cmU6IEJhc2VUZXh0dXJlKSA9PiB2b2lkID0gKCkgPT4ge30pOiBQcm9taXNlPEJhc2VUZXh0dXJlPiB7XHJcbiAgICAgICAgY29uc3QgZXh0ZW5zaW9uUHJvbWlzZSA9IHRoaXMuX2V4dGVuc2lvbnNMb2FkVGV4dHVyZUFzeW5jKGNvbnRleHQsIHRleHR1cmUsIGFzc2lnbik7XHJcbiAgICAgICAgaWYgKGV4dGVuc2lvblByb21pc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGV4dGVuc2lvblByb21pc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmxvZ09wZW4oYCR7Y29udGV4dH0gJHt0ZXh0dXJlLm5hbWUgfHwgXCJcIn1gKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2FtcGxlciA9IHRleHR1cmUuc2FtcGxlciA9PSB1bmRlZmluZWQgPyBHTFRGTG9hZGVyLkRlZmF1bHRTYW1wbGVyIDogQXJyYXlJdGVtLkdldChgJHtjb250ZXh0fS9zYW1wbGVyYCwgdGhpcy5fZ2x0Zi5zYW1wbGVycywgdGV4dHVyZS5zYW1wbGVyKTtcclxuICAgICAgICBjb25zdCBpbWFnZSA9IEFycmF5SXRlbS5HZXQoYCR7Y29udGV4dH0vc291cmNlYCwgdGhpcy5fZ2x0Zi5pbWFnZXMsIHRleHR1cmUuc291cmNlKTtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gdGhpcy5fY3JlYXRlVGV4dHVyZUFzeW5jKGNvbnRleHQsIHNhbXBsZXIsIGltYWdlLCBhc3NpZ24sIHVuZGVmaW5lZCwgIXRleHR1cmUuX3RleHR1cmVJbmZvLm5vbkNvbG9yRGF0YSk7XHJcblxyXG4gICAgICAgIHRoaXMubG9nQ2xvc2UoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIF9jcmVhdGVUZXh0dXJlQXN5bmMoXHJcbiAgICAgICAgY29udGV4dDogc3RyaW5nLFxyXG4gICAgICAgIHNhbXBsZXI6IElTYW1wbGVyLFxyXG4gICAgICAgIGltYWdlOiBJSW1hZ2UsXHJcbiAgICAgICAgYXNzaWduOiAoYmFieWxvblRleHR1cmU6IEJhc2VUZXh0dXJlKSA9PiB2b2lkID0gKCkgPT4ge30sXHJcbiAgICAgICAgdGV4dHVyZUxvYWRlck9wdGlvbnM/OiBhbnksXHJcbiAgICAgICAgdXNlU1JHQkJ1ZmZlcj86IGJvb2xlYW5cclxuICAgICk6IFByb21pc2U8QmFzZVRleHR1cmU+IHtcclxuICAgICAgICBjb25zdCBzYW1wbGVyRGF0YSA9IHRoaXMuX2xvYWRTYW1wbGVyKGAvc2FtcGxlcnMvJHtzYW1wbGVyLmluZGV4fWAsIHNhbXBsZXIpO1xyXG5cclxuICAgICAgICBjb25zdCBwcm9taXNlcyA9IG5ldyBBcnJheTxQcm9taXNlPGFueT4+KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRlZmVycmVkID0gbmV3IERlZmVycmVkPHZvaWQ+KCk7XHJcbiAgICAgICAgdGhpcy5fYmFieWxvblNjZW5lLl9ibG9ja0VudGl0eUNvbGxlY3Rpb24gPSAhIXRoaXMuX2Fzc2V0Q29udGFpbmVyO1xyXG4gICAgICAgIGNvbnN0IHRleHR1cmVDcmVhdGlvbk9wdGlvbnM6IElUZXh0dXJlQ3JlYXRpb25PcHRpb25zID0ge1xyXG4gICAgICAgICAgICBub01pcG1hcDogc2FtcGxlckRhdGEubm9NaXBNYXBzLFxyXG4gICAgICAgICAgICBpbnZlcnRZOiBmYWxzZSxcclxuICAgICAgICAgICAgc2FtcGxpbmdNb2RlOiBzYW1wbGVyRGF0YS5zYW1wbGluZ01vZGUsXHJcbiAgICAgICAgICAgIG9uTG9hZDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9kaXNwb3NlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25FcnJvcjogKG1lc3NhZ2U/OiBzdHJpbmcsIGV4Y2VwdGlvbj86IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9kaXNwb3NlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChuZXcgRXJyb3IoYCR7Y29udGV4dH06ICR7ZXhjZXB0aW9uICYmIGV4Y2VwdGlvbi5tZXNzYWdlID8gZXhjZXB0aW9uLm1lc3NhZ2UgOiBtZXNzYWdlIHx8IFwiRmFpbGVkIHRvIGxvYWQgdGV4dHVyZVwifWApKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbWltZVR5cGU6IGltYWdlLm1pbWVUeXBlLFxyXG4gICAgICAgICAgICBsb2FkZXJPcHRpb25zOiB0ZXh0dXJlTG9hZGVyT3B0aW9ucyxcclxuICAgICAgICAgICAgdXNlU1JHQkJ1ZmZlcjogISF1c2VTUkdCQnVmZmVyICYmIHRoaXMuX3BhcmVudC51c2VTUkdCQnVmZmVycyxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGJhYnlsb25UZXh0dXJlID0gbmV3IFRleHR1cmUobnVsbCwgdGhpcy5fYmFieWxvblNjZW5lLCB0ZXh0dXJlQ3JlYXRpb25PcHRpb25zKTtcclxuICAgICAgICBiYWJ5bG9uVGV4dHVyZS5fcGFyZW50Q29udGFpbmVyID0gdGhpcy5fYXNzZXRDb250YWluZXI7XHJcbiAgICAgICAgdGhpcy5fYmFieWxvblNjZW5lLl9ibG9ja0VudGl0eUNvbGxlY3Rpb24gPSBmYWxzZTtcclxuICAgICAgICBwcm9taXNlcy5wdXNoKGRlZmVycmVkLnByb21pc2UpO1xyXG5cclxuICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICB0aGlzLmxvYWRJbWFnZUFzeW5jKGAvaW1hZ2VzLyR7aW1hZ2UuaW5kZXh9YCwgaW1hZ2UpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBpbWFnZS51cmkgfHwgYCR7dGhpcy5fZmlsZU5hbWV9I2ltYWdlJHtpbWFnZS5pbmRleH1gO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YVVybCA9IGBkYXRhOiR7dGhpcy5fdW5pcXVlUm9vdFVybH0ke25hbWV9YDtcclxuICAgICAgICAgICAgICAgIGJhYnlsb25UZXh0dXJlLnVwZGF0ZVVSTChkYXRhVXJsLCBkYXRhKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBiYWJ5bG9uVGV4dHVyZS53cmFwVSA9IHNhbXBsZXJEYXRhLndyYXBVO1xyXG4gICAgICAgIGJhYnlsb25UZXh0dXJlLndyYXBWID0gc2FtcGxlckRhdGEud3JhcFY7XHJcbiAgICAgICAgYXNzaWduKGJhYnlsb25UZXh0dXJlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGJhYnlsb25UZXh0dXJlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2xvYWRTYW1wbGVyKGNvbnRleHQ6IHN0cmluZywgc2FtcGxlcjogSVNhbXBsZXIpOiBfSVNhbXBsZXJEYXRhIHtcclxuICAgICAgICBpZiAoIXNhbXBsZXIuX2RhdGEpIHtcclxuICAgICAgICAgICAgc2FtcGxlci5fZGF0YSA9IHtcclxuICAgICAgICAgICAgICAgIG5vTWlwTWFwczogc2FtcGxlci5taW5GaWx0ZXIgPT09IFRleHR1cmVNaW5GaWx0ZXIuTkVBUkVTVCB8fCBzYW1wbGVyLm1pbkZpbHRlciA9PT0gVGV4dHVyZU1pbkZpbHRlci5MSU5FQVIsXHJcbiAgICAgICAgICAgICAgICBzYW1wbGluZ01vZGU6IEdMVEZMb2FkZXIuX0dldFRleHR1cmVTYW1wbGluZ01vZGUoY29udGV4dCwgc2FtcGxlciksXHJcbiAgICAgICAgICAgICAgICB3cmFwVTogR0xURkxvYWRlci5fR2V0VGV4dHVyZVdyYXBNb2RlKGAke2NvbnRleHR9L3dyYXBTYCwgc2FtcGxlci53cmFwUyksXHJcbiAgICAgICAgICAgICAgICB3cmFwVjogR0xURkxvYWRlci5fR2V0VGV4dHVyZVdyYXBNb2RlKGAke2NvbnRleHR9L3dyYXBUYCwgc2FtcGxlci53cmFwVCksXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc2FtcGxlci5fZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIExvYWRzIGEgZ2xURiBpbWFnZS5cclxuICAgICAqIEBwYXJhbSBjb250ZXh0IFRoZSBjb250ZXh0IHdoZW4gbG9hZGluZyB0aGUgYXNzZXRcclxuICAgICAqIEBwYXJhbSBpbWFnZSBUaGUgZ2xURiBpbWFnZSBwcm9wZXJ0eVxyXG4gICAgICogQHJldHVybnMgQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgbG9hZGVkIGRhdGEgd2hlbiB0aGUgbG9hZCBpcyBjb21wbGV0ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZEltYWdlQXN5bmMoY29udGV4dDogc3RyaW5nLCBpbWFnZTogSUltYWdlKTogUHJvbWlzZTxBcnJheUJ1ZmZlclZpZXc+IHtcclxuICAgICAgICBpZiAoIWltYWdlLl9kYXRhKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9nT3BlbihgJHtjb250ZXh0fSAke2ltYWdlLm5hbWUgfHwgXCJcIn1gKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpbWFnZS51cmkpIHtcclxuICAgICAgICAgICAgICAgIGltYWdlLl9kYXRhID0gdGhpcy5sb2FkVXJpQXN5bmMoYCR7Y29udGV4dH0vdXJpYCwgaW1hZ2UsIGltYWdlLnVyaSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBidWZmZXJWaWV3ID0gQXJyYXlJdGVtLkdldChgJHtjb250ZXh0fS9idWZmZXJWaWV3YCwgdGhpcy5fZ2x0Zi5idWZmZXJWaWV3cywgaW1hZ2UuYnVmZmVyVmlldyk7XHJcbiAgICAgICAgICAgICAgICBpbWFnZS5fZGF0YSA9IHRoaXMubG9hZEJ1ZmZlclZpZXdBc3luYyhgL2J1ZmZlclZpZXdzLyR7YnVmZmVyVmlldy5pbmRleH1gLCBidWZmZXJWaWV3KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5sb2dDbG9zZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGltYWdlLl9kYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTG9hZHMgYSBnbFRGIHVyaS5cclxuICAgICAqIEBwYXJhbSBjb250ZXh0IFRoZSBjb250ZXh0IHdoZW4gbG9hZGluZyB0aGUgYXNzZXRcclxuICAgICAqIEBwYXJhbSBwcm9wZXJ0eSBUaGUgZ2xURiBwcm9wZXJ0eSBhc3NvY2lhdGVkIHdpdGggdGhlIHVyaVxyXG4gICAgICogQHBhcmFtIHVyaSBUaGUgYmFzZTY0IG9yIHJlbGF0aXZlIHVyaVxyXG4gICAgICogQHJldHVybnMgQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgbG9hZGVkIGRhdGEgd2hlbiB0aGUgbG9hZCBpcyBjb21wbGV0ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZFVyaUFzeW5jKGNvbnRleHQ6IHN0cmluZywgcHJvcGVydHk6IElQcm9wZXJ0eSwgdXJpOiBzdHJpbmcpOiBQcm9taXNlPEFycmF5QnVmZmVyVmlldz4ge1xyXG4gICAgICAgIGNvbnN0IGV4dGVuc2lvblByb21pc2UgPSB0aGlzLl9leHRlbnNpb25zTG9hZFVyaUFzeW5jKGNvbnRleHQsIHByb3BlcnR5LCB1cmkpO1xyXG4gICAgICAgIGlmIChleHRlbnNpb25Qcm9taXNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBleHRlbnNpb25Qcm9taXNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFHTFRGTG9hZGVyLl9WYWxpZGF0ZVVyaSh1cmkpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtjb250ZXh0fTogJyR7dXJpfScgaXMgaW52YWxpZGApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKElzQmFzZTY0RGF0YVVybCh1cmkpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBuZXcgVWludDhBcnJheShEZWNvZGVCYXNlNjRVcmxUb0JpbmFyeSh1cmkpKTtcclxuICAgICAgICAgICAgdGhpcy5sb2coYCR7Y29udGV4dH06IERlY29kZWQgJHt1cmkuc3Vic3RyKDAsIDY0KX0uLi4gKCR7ZGF0YS5sZW5ndGh9IGJ5dGVzKWApO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGRhdGEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5sb2coYCR7Y29udGV4dH06IExvYWRpbmcgJHt1cml9YCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9wYXJlbnQucHJlcHJvY2Vzc1VybEFzeW5jKHRoaXMuX3Jvb3RVcmwgKyB1cmkpLnRoZW4oKHVybCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcGFyZW50Ll9sb2FkRmlsZShcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9iYWJ5bG9uU2NlbmUsXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsLFxyXG4gICAgICAgICAgICAgICAgICAgIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5fZGlzcG9zZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nKGAke2NvbnRleHR9OiBMb2FkZWQgJHt1cml9ICgkeyhkYXRhIGFzIEFycmF5QnVmZmVyKS5ieXRlTGVuZ3RofSBieXRlcylgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobmV3IFVpbnQ4QXJyYXkoZGF0YSBhcyBBcnJheUJ1ZmZlcikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIChyZXF1ZXN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgTG9hZEZpbGVFcnJvcihgJHtjb250ZXh0fTogRmFpbGVkIHRvIGxvYWQgJyR7dXJpfScke3JlcXVlc3QgPyBcIjogXCIgKyByZXF1ZXN0LnN0YXR1cyArIFwiIFwiICsgcmVxdWVzdC5zdGF0dXNUZXh0IDogXCJcIn1gLCByZXF1ZXN0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGRzIGEgSlNPTiBwb2ludGVyIHRvIHRoZSBfaW50ZXJuYWxNZXRhZGF0YSBvZiB0aGUgQmFieWxvbiBvYmplY3QgYXQgYDxvYmplY3Q+Ll9pbnRlcm5hbE1ldGFkYXRhLmdsdGYucG9pbnRlcnNgLlxyXG4gICAgICogQHBhcmFtIGJhYnlsb25PYmplY3QgdGhlIEJhYnlsb24gb2JqZWN0IHdpdGggX2ludGVybmFsTWV0YWRhdGFcclxuICAgICAqIEBwYXJhbSBwb2ludGVyIHRoZSBKU09OIHBvaW50ZXJcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBBZGRQb2ludGVyTWV0YWRhdGEoYmFieWxvbk9iamVjdDogSVdpdGhNZXRhZGF0YSwgcG9pbnRlcjogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgYmFieWxvbk9iamVjdC5tZXRhZGF0YSA9IGJhYnlsb25PYmplY3QubWV0YWRhdGEgfHwge307XHJcbiAgICAgICAgY29uc3QgbWV0YWRhdGEgPSAoYmFieWxvbk9iamVjdC5faW50ZXJuYWxNZXRhZGF0YSA9IGJhYnlsb25PYmplY3QuX2ludGVybmFsTWV0YWRhdGEgfHwge30pO1xyXG4gICAgICAgIGNvbnN0IGdsdGYgPSAobWV0YWRhdGEuZ2x0ZiA9IG1ldGFkYXRhLmdsdGYgfHwge30pO1xyXG4gICAgICAgIGNvbnN0IHBvaW50ZXJzID0gKGdsdGYucG9pbnRlcnMgPSBnbHRmLnBvaW50ZXJzIHx8IFtdKTtcclxuICAgICAgICBwb2ludGVycy5wdXNoKHBvaW50ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9HZXRUZXh0dXJlV3JhcE1vZGUoY29udGV4dDogc3RyaW5nLCBtb2RlOiBUZXh0dXJlV3JhcE1vZGUgfCB1bmRlZmluZWQpOiBudW1iZXIge1xyXG4gICAgICAgIC8vIFNldCBkZWZhdWx0cyBpZiB1bmRlZmluZWRcclxuICAgICAgICBtb2RlID0gbW9kZSA9PSB1bmRlZmluZWQgPyBUZXh0dXJlV3JhcE1vZGUuUkVQRUFUIDogbW9kZTtcclxuXHJcbiAgICAgICAgc3dpdGNoIChtb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgVGV4dHVyZVdyYXBNb2RlLkNMQU1QX1RPX0VER0U6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gVGV4dHVyZS5DTEFNUF9BRERSRVNTTU9ERTtcclxuICAgICAgICAgICAgY2FzZSBUZXh0dXJlV3JhcE1vZGUuTUlSUk9SRURfUkVQRUFUOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFRleHR1cmUuTUlSUk9SX0FERFJFU1NNT0RFO1xyXG4gICAgICAgICAgICBjYXNlIFRleHR1cmVXcmFwTW9kZS5SRVBFQVQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gVGV4dHVyZS5XUkFQX0FERFJFU1NNT0RFO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgTG9nZ2VyLldhcm4oYCR7Y29udGV4dH06IEludmFsaWQgdmFsdWUgKCR7bW9kZX0pYCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gVGV4dHVyZS5XUkFQX0FERFJFU1NNT0RFO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfR2V0VGV4dHVyZVNhbXBsaW5nTW9kZShjb250ZXh0OiBzdHJpbmcsIHNhbXBsZXI6IElTYW1wbGVyKTogbnVtYmVyIHtcclxuICAgICAgICAvLyBTZXQgZGVmYXVsdHMgaWYgdW5kZWZpbmVkXHJcbiAgICAgICAgY29uc3QgbWFnRmlsdGVyID0gc2FtcGxlci5tYWdGaWx0ZXIgPT0gdW5kZWZpbmVkID8gVGV4dHVyZU1hZ0ZpbHRlci5MSU5FQVIgOiBzYW1wbGVyLm1hZ0ZpbHRlcjtcclxuICAgICAgICBjb25zdCBtaW5GaWx0ZXIgPSBzYW1wbGVyLm1pbkZpbHRlciA9PSB1bmRlZmluZWQgPyBUZXh0dXJlTWluRmlsdGVyLkxJTkVBUl9NSVBNQVBfTElORUFSIDogc2FtcGxlci5taW5GaWx0ZXI7XHJcblxyXG4gICAgICAgIGlmIChtYWdGaWx0ZXIgPT09IFRleHR1cmVNYWdGaWx0ZXIuTElORUFSKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAobWluRmlsdGVyKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRleHR1cmVNaW5GaWx0ZXIuTkVBUkVTVDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gVGV4dHVyZS5MSU5FQVJfTkVBUkVTVDtcclxuICAgICAgICAgICAgICAgIGNhc2UgVGV4dHVyZU1pbkZpbHRlci5MSU5FQVI6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFRleHR1cmUuTElORUFSX0xJTkVBUjtcclxuICAgICAgICAgICAgICAgIGNhc2UgVGV4dHVyZU1pbkZpbHRlci5ORUFSRVNUX01JUE1BUF9ORUFSRVNUOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBUZXh0dXJlLkxJTkVBUl9ORUFSRVNUX01JUE5FQVJFU1Q7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRleHR1cmVNaW5GaWx0ZXIuTElORUFSX01JUE1BUF9ORUFSRVNUOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBUZXh0dXJlLkxJTkVBUl9MSU5FQVJfTUlQTkVBUkVTVDtcclxuICAgICAgICAgICAgICAgIGNhc2UgVGV4dHVyZU1pbkZpbHRlci5ORUFSRVNUX01JUE1BUF9MSU5FQVI6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFRleHR1cmUuTElORUFSX05FQVJFU1RfTUlQTElORUFSO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBUZXh0dXJlTWluRmlsdGVyLkxJTkVBUl9NSVBNQVBfTElORUFSOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBUZXh0dXJlLkxJTkVBUl9MSU5FQVJfTUlQTElORUFSO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBMb2dnZXIuV2FybihgJHtjb250ZXh0fS9taW5GaWx0ZXI6IEludmFsaWQgdmFsdWUgKCR7bWluRmlsdGVyfSlgKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gVGV4dHVyZS5MSU5FQVJfTElORUFSX01JUExJTkVBUjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChtYWdGaWx0ZXIgIT09IFRleHR1cmVNYWdGaWx0ZXIuTkVBUkVTVCkge1xyXG4gICAgICAgICAgICAgICAgTG9nZ2VyLldhcm4oYCR7Y29udGV4dH0vbWFnRmlsdGVyOiBJbnZhbGlkIHZhbHVlICgke21hZ0ZpbHRlcn0pYCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCAobWluRmlsdGVyKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRleHR1cmVNaW5GaWx0ZXIuTkVBUkVTVDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gVGV4dHVyZS5ORUFSRVNUX05FQVJFU1Q7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRleHR1cmVNaW5GaWx0ZXIuTElORUFSOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBUZXh0dXJlLk5FQVJFU1RfTElORUFSO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBUZXh0dXJlTWluRmlsdGVyLk5FQVJFU1RfTUlQTUFQX05FQVJFU1Q6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFRleHR1cmUuTkVBUkVTVF9ORUFSRVNUX01JUE5FQVJFU1Q7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRleHR1cmVNaW5GaWx0ZXIuTElORUFSX01JUE1BUF9ORUFSRVNUOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBUZXh0dXJlLk5FQVJFU1RfTElORUFSX01JUE5FQVJFU1Q7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRleHR1cmVNaW5GaWx0ZXIuTkVBUkVTVF9NSVBNQVBfTElORUFSOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBUZXh0dXJlLk5FQVJFU1RfTkVBUkVTVF9NSVBMSU5FQVI7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRleHR1cmVNaW5GaWx0ZXIuTElORUFSX01JUE1BUF9MSU5FQVI6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFRleHR1cmUuTkVBUkVTVF9MSU5FQVJfTUlQTElORUFSO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBMb2dnZXIuV2FybihgJHtjb250ZXh0fS9taW5GaWx0ZXI6IEludmFsaWQgdmFsdWUgKCR7bWluRmlsdGVyfSlgKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gVGV4dHVyZS5ORUFSRVNUX05FQVJFU1RfTUlQTkVBUkVTVDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfR2V0VHlwZWRBcnJheUNvbnN0cnVjdG9yKGNvbnRleHQ6IHN0cmluZywgY29tcG9uZW50VHlwZTogQWNjZXNzb3JDb21wb25lbnRUeXBlKTogVHlwZWRBcnJheUNvbnN0cnVjdG9yIHtcclxuICAgICAgICBzd2l0Y2ggKGNvbXBvbmVudFR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBBY2Nlc3NvckNvbXBvbmVudFR5cGUuQllURTpcclxuICAgICAgICAgICAgICAgIHJldHVybiBJbnQ4QXJyYXk7XHJcbiAgICAgICAgICAgIGNhc2UgQWNjZXNzb3JDb21wb25lbnRUeXBlLlVOU0lHTkVEX0JZVEU6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gVWludDhBcnJheTtcclxuICAgICAgICAgICAgY2FzZSBBY2Nlc3NvckNvbXBvbmVudFR5cGUuU0hPUlQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gSW50MTZBcnJheTtcclxuICAgICAgICAgICAgY2FzZSBBY2Nlc3NvckNvbXBvbmVudFR5cGUuVU5TSUdORURfU0hPUlQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gVWludDE2QXJyYXk7XHJcbiAgICAgICAgICAgIGNhc2UgQWNjZXNzb3JDb21wb25lbnRUeXBlLlVOU0lHTkVEX0lOVDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBVaW50MzJBcnJheTtcclxuICAgICAgICAgICAgY2FzZSBBY2Nlc3NvckNvbXBvbmVudFR5cGUuRkxPQVQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gRmxvYXQzMkFycmF5O1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2NvbnRleHR9OiBJbnZhbGlkIGNvbXBvbmVudCB0eXBlICR7Y29tcG9uZW50VHlwZX1gKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX0dldFR5cGVkQXJyYXkoXHJcbiAgICAgICAgY29udGV4dDogc3RyaW5nLFxyXG4gICAgICAgIGNvbXBvbmVudFR5cGU6IEFjY2Vzc29yQ29tcG9uZW50VHlwZSxcclxuICAgICAgICBidWZmZXJWaWV3OiBBcnJheUJ1ZmZlclZpZXcsXHJcbiAgICAgICAgYnl0ZU9mZnNldDogbnVtYmVyIHwgdW5kZWZpbmVkLFxyXG4gICAgICAgIGxlbmd0aDogbnVtYmVyXHJcbiAgICApOiBUeXBlZEFycmF5TGlrZSB7XHJcbiAgICAgICAgY29uc3QgYnVmZmVyID0gYnVmZmVyVmlldy5idWZmZXI7XHJcbiAgICAgICAgYnl0ZU9mZnNldCA9IGJ1ZmZlclZpZXcuYnl0ZU9mZnNldCArIChieXRlT2Zmc2V0IHx8IDApO1xyXG5cclxuICAgICAgICBjb25zdCBjb25zdHJ1Y3RvciA9IEdMVEZMb2FkZXIuX0dldFR5cGVkQXJyYXlDb25zdHJ1Y3RvcihgJHtjb250ZXh0fS9jb21wb25lbnRUeXBlYCwgY29tcG9uZW50VHlwZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbXBvbmVudFR5cGVMZW5ndGggPSBWZXJ0ZXhCdWZmZXIuR2V0VHlwZUJ5dGVMZW5ndGgoY29tcG9uZW50VHlwZSk7XHJcbiAgICAgICAgaWYgKGJ5dGVPZmZzZXQgJSBjb21wb25lbnRUeXBlTGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgIC8vIEhBQ0s6IENvcHkgdGhlIGJ1ZmZlciBpZiBieXRlIG9mZnNldCBpcyBub3QgYSBtdWx0aXBsZSBvZiBjb21wb25lbnQgdHlwZSBieXRlIGxlbmd0aC5cclxuICAgICAgICAgICAgTG9nZ2VyLldhcm4oYCR7Y29udGV4dH06IENvcHlpbmcgYnVmZmVyIGFzIGJ5dGUgb2Zmc2V0ICgke2J5dGVPZmZzZXR9KSBpcyBub3QgYSBtdWx0aXBsZSBvZiBjb21wb25lbnQgdHlwZSBieXRlIGxlbmd0aCAoJHtjb21wb25lbnRUeXBlTGVuZ3RofSlgKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBjb25zdHJ1Y3RvcihidWZmZXIuc2xpY2UoYnl0ZU9mZnNldCwgYnl0ZU9mZnNldCArIGxlbmd0aCAqIGNvbXBvbmVudFR5cGVMZW5ndGgpLCAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgY29uc3RydWN0b3IoYnVmZmVyLCBieXRlT2Zmc2V0LCBsZW5ndGgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9HZXROdW1Db21wb25lbnRzKGNvbnRleHQ6IHN0cmluZywgdHlwZTogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcIlNDQUxBUlwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgIGNhc2UgXCJWRUMyXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMjtcclxuICAgICAgICAgICAgY2FzZSBcIlZFQzNcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiAzO1xyXG4gICAgICAgICAgICBjYXNlIFwiVkVDNFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDQ7XHJcbiAgICAgICAgICAgIGNhc2UgXCJNQVQyXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gNDtcclxuICAgICAgICAgICAgY2FzZSBcIk1BVDNcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiA5O1xyXG4gICAgICAgICAgICBjYXNlIFwiTUFUNFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDE2O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2NvbnRleHR9OiBJbnZhbGlkIHR5cGUgKCR7dHlwZX0pYCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX1ZhbGlkYXRlVXJpKHVyaTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIFRvb2xzLklzQmFzZTY0KHVyaSkgfHwgdXJpLmluZGV4T2YoXCIuLlwiKSA9PT0gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBfR2V0RHJhd01vZGUoY29udGV4dDogc3RyaW5nLCBtb2RlOiBudW1iZXIgfCB1bmRlZmluZWQpOiBudW1iZXIge1xyXG4gICAgICAgIGlmIChtb2RlID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBtb2RlID0gTWVzaFByaW1pdGl2ZU1vZGUuVFJJQU5HTEVTO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3dpdGNoIChtb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgTWVzaFByaW1pdGl2ZU1vZGUuUE9JTlRTOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGVyaWFsLlBvaW50TGlzdERyYXdNb2RlO1xyXG4gICAgICAgICAgICBjYXNlIE1lc2hQcmltaXRpdmVNb2RlLkxJTkVTOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGVyaWFsLkxpbmVMaXN0RHJhd01vZGU7XHJcbiAgICAgICAgICAgIGNhc2UgTWVzaFByaW1pdGl2ZU1vZGUuTElORV9MT09QOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGVyaWFsLkxpbmVMb29wRHJhd01vZGU7XHJcbiAgICAgICAgICAgIGNhc2UgTWVzaFByaW1pdGl2ZU1vZGUuTElORV9TVFJJUDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBNYXRlcmlhbC5MaW5lU3RyaXBEcmF3TW9kZTtcclxuICAgICAgICAgICAgY2FzZSBNZXNoUHJpbWl0aXZlTW9kZS5UUklBTkdMRVM6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0ZXJpYWwuVHJpYW5nbGVGaWxsTW9kZTtcclxuICAgICAgICAgICAgY2FzZSBNZXNoUHJpbWl0aXZlTW9kZS5UUklBTkdMRV9TVFJJUDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBNYXRlcmlhbC5UcmlhbmdsZVN0cmlwRHJhd01vZGU7XHJcbiAgICAgICAgICAgIGNhc2UgTWVzaFByaW1pdGl2ZU1vZGUuVFJJQU5HTEVfRkFOOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGVyaWFsLlRyaWFuZ2xlRmFuRHJhd01vZGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7Y29udGV4dH06IEludmFsaWQgbWVzaCBwcmltaXRpdmUgbW9kZSAoJHttb2RlfSlgKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jb21waWxlTWF0ZXJpYWxzQXN5bmMoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgdGhpcy5fcGFyZW50Ll9zdGFydFBlcmZvcm1hbmNlQ291bnRlcihcIkNvbXBpbGUgbWF0ZXJpYWxzXCIpO1xyXG5cclxuICAgICAgICBjb25zdCBwcm9taXNlcyA9IG5ldyBBcnJheTxQcm9taXNlPGFueT4+KCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9nbHRmLm1hdGVyaWFscykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IG1hdGVyaWFsIG9mIHRoaXMuX2dsdGYubWF0ZXJpYWxzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobWF0ZXJpYWwuX2RhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGJhYnlsb25EcmF3TW9kZSBpbiBtYXRlcmlhbC5fZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBiYWJ5bG9uRGF0YSA9IG1hdGVyaWFsLl9kYXRhW2JhYnlsb25EcmF3TW9kZV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYmFieWxvbk1lc2ggb2YgYmFieWxvbkRhdGEuYmFieWxvbk1lc2hlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRW5zdXJlIG5vblVuaWZvcm1TY2FsaW5nIGlzIHNldCBpZiBuZWNlc3NhcnkuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uTWVzaC5jb21wdXRlV29ybGRNYXRyaXgodHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmFieWxvbk1hdGVyaWFsID0gYmFieWxvbkRhdGEuYmFieWxvbk1hdGVyaWFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChiYWJ5bG9uTWF0ZXJpYWwuZm9yY2VDb21waWxhdGlvbkFzeW5jKGJhYnlsb25NZXNoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKGJhYnlsb25NYXRlcmlhbC5mb3JjZUNvbXBpbGF0aW9uQXN5bmMoYmFieWxvbk1lc2gsIHsgdXNlSW5zdGFuY2VzOiB0cnVlIH0pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9wYXJlbnQudXNlQ2xpcFBsYW5lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChiYWJ5bG9uTWF0ZXJpYWwuZm9yY2VDb21waWxhdGlvbkFzeW5jKGJhYnlsb25NZXNoLCB7IGNsaXBQbGFuZTogdHJ1ZSB9KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChiYWJ5bG9uTWF0ZXJpYWwuZm9yY2VDb21waWxhdGlvbkFzeW5jKGJhYnlsb25NZXNoLCB7IGNsaXBQbGFuZTogdHJ1ZSwgdXNlSW5zdGFuY2VzOiB0cnVlIH0pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fcGFyZW50Ll9lbmRQZXJmb3JtYW5jZUNvdW50ZXIoXCJDb21waWxlIG1hdGVyaWFsc1wiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jb21waWxlU2hhZG93R2VuZXJhdG9yc0FzeW5jKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHRoaXMuX3BhcmVudC5fc3RhcnRQZXJmb3JtYW5jZUNvdW50ZXIoXCJDb21waWxlIHNoYWRvdyBnZW5lcmF0b3JzXCIpO1xyXG5cclxuICAgICAgICBjb25zdCBwcm9taXNlcyA9IG5ldyBBcnJheTxQcm9taXNlPGFueT4+KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGxpZ2h0cyA9IHRoaXMuX2JhYnlsb25TY2VuZS5saWdodHM7XHJcbiAgICAgICAgZm9yIChjb25zdCBsaWdodCBvZiBsaWdodHMpIHtcclxuICAgICAgICAgICAgY29uc3QgZ2VuZXJhdG9yID0gbGlnaHQuZ2V0U2hhZG93R2VuZXJhdG9yKCk7XHJcbiAgICAgICAgICAgIGlmIChnZW5lcmF0b3IpIHtcclxuICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2goZ2VuZXJhdG9yLmZvcmNlQ29tcGlsYXRpb25Bc3luYygpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fcGFyZW50Ll9lbmRQZXJmb3JtYW5jZUNvdW50ZXIoXCJDb21waWxlIHNoYWRvdyBnZW5lcmF0b3JzXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2ZvckVhY2hFeHRlbnNpb25zKGFjdGlvbjogKGV4dGVuc2lvbjogSUdMVEZMb2FkZXJFeHRlbnNpb24pID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGV4dGVuc2lvbiBvZiB0aGlzLl9leHRlbnNpb25zKSB7XHJcbiAgICAgICAgICAgIGlmIChleHRlbnNpb24uZW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uKGV4dGVuc2lvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfYXBwbHlFeHRlbnNpb25zPFQ+KHByb3BlcnR5OiBJUHJvcGVydHksIGZ1bmN0aW9uTmFtZTogc3RyaW5nLCBhY3Rpb25Bc3luYzogKGV4dGVuc2lvbjogSUdMVEZMb2FkZXJFeHRlbnNpb24pID0+IE51bGxhYmxlPFQ+IHwgdW5kZWZpbmVkKTogTnVsbGFibGU8VD4ge1xyXG4gICAgICAgIGZvciAoY29uc3QgZXh0ZW5zaW9uIG9mIHRoaXMuX2V4dGVuc2lvbnMpIHtcclxuICAgICAgICAgICAgaWYgKGV4dGVuc2lvbi5lbmFibGVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpZCA9IGAke2V4dGVuc2lvbi5uYW1lfS4ke2Z1bmN0aW9uTmFtZX1gO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbG9hZGVyUHJvcGVydHkgPSBwcm9wZXJ0eSBhcyBJTG9hZGVyUHJvcGVydHk7XHJcbiAgICAgICAgICAgICAgICBsb2FkZXJQcm9wZXJ0eS5fYWN0aXZlTG9hZGVyRXh0ZW5zaW9uRnVuY3Rpb25zID0gbG9hZGVyUHJvcGVydHkuX2FjdGl2ZUxvYWRlckV4dGVuc2lvbkZ1bmN0aW9ucyB8fCB7fTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFjdGl2ZUxvYWRlckV4dGVuc2lvbkZ1bmN0aW9ucyA9IGxvYWRlclByb3BlcnR5Ll9hY3RpdmVMb2FkZXJFeHRlbnNpb25GdW5jdGlvbnM7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWFjdGl2ZUxvYWRlckV4dGVuc2lvbkZ1bmN0aW9uc1tpZF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVMb2FkZXJFeHRlbnNpb25GdW5jdGlvbnNbaWRdID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYWN0aW9uQXN5bmMoZXh0ZW5zaW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBhY3RpdmVMb2FkZXJFeHRlbnNpb25GdW5jdGlvbnNbaWRdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZXh0ZW5zaW9uc09uTG9hZGluZygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9mb3JFYWNoRXh0ZW5zaW9ucygoZXh0ZW5zaW9uKSA9PiBleHRlbnNpb24ub25Mb2FkaW5nICYmIGV4dGVuc2lvbi5vbkxvYWRpbmcoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZXh0ZW5zaW9uc09uUmVhZHkoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fZm9yRWFjaEV4dGVuc2lvbnMoKGV4dGVuc2lvbikgPT4gZXh0ZW5zaW9uLm9uUmVhZHkgJiYgZXh0ZW5zaW9uLm9uUmVhZHkoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZXh0ZW5zaW9uc0xvYWRTY2VuZUFzeW5jKGNvbnRleHQ6IHN0cmluZywgc2NlbmU6IElTY2VuZSk6IE51bGxhYmxlPFByb21pc2U8dm9pZD4+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXBwbHlFeHRlbnNpb25zKHNjZW5lLCBcImxvYWRTY2VuZVwiLCAoZXh0ZW5zaW9uKSA9PiBleHRlbnNpb24ubG9hZFNjZW5lQXN5bmMgJiYgZXh0ZW5zaW9uLmxvYWRTY2VuZUFzeW5jKGNvbnRleHQsIHNjZW5lKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZXh0ZW5zaW9uc0xvYWROb2RlQXN5bmMoY29udGV4dDogc3RyaW5nLCBub2RlOiBJTm9kZSwgYXNzaWduOiAoYmFieWxvblRyYW5zZm9ybU5vZGU6IFRyYW5zZm9ybU5vZGUpID0+IHZvaWQpOiBOdWxsYWJsZTxQcm9taXNlPFRyYW5zZm9ybU5vZGU+PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwcGx5RXh0ZW5zaW9ucyhub2RlLCBcImxvYWROb2RlXCIsIChleHRlbnNpb24pID0+IGV4dGVuc2lvbi5sb2FkTm9kZUFzeW5jICYmIGV4dGVuc2lvbi5sb2FkTm9kZUFzeW5jKGNvbnRleHQsIG5vZGUsIGFzc2lnbikpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2V4dGVuc2lvbnNMb2FkQ2FtZXJhQXN5bmMoY29udGV4dDogc3RyaW5nLCBjYW1lcmE6IElDYW1lcmEsIGFzc2lnbjogKGJhYnlsb25DYW1lcmE6IENhbWVyYSkgPT4gdm9pZCk6IE51bGxhYmxlPFByb21pc2U8Q2FtZXJhPj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hcHBseUV4dGVuc2lvbnMoY2FtZXJhLCBcImxvYWRDYW1lcmFcIiwgKGV4dGVuc2lvbikgPT4gZXh0ZW5zaW9uLmxvYWRDYW1lcmFBc3luYyAmJiBleHRlbnNpb24ubG9hZENhbWVyYUFzeW5jKGNvbnRleHQsIGNhbWVyYSwgYXNzaWduKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZXh0ZW5zaW9uc0xvYWRWZXJ0ZXhEYXRhQXN5bmMoY29udGV4dDogc3RyaW5nLCBwcmltaXRpdmU6IElNZXNoUHJpbWl0aXZlLCBiYWJ5bG9uTWVzaDogTWVzaCk6IE51bGxhYmxlPFByb21pc2U8R2VvbWV0cnk+PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwcGx5RXh0ZW5zaW9ucyhwcmltaXRpdmUsIFwibG9hZFZlcnRleERhdGFcIiwgKGV4dGVuc2lvbikgPT4gZXh0ZW5zaW9uLl9sb2FkVmVydGV4RGF0YUFzeW5jICYmIGV4dGVuc2lvbi5fbG9hZFZlcnRleERhdGFBc3luYyhjb250ZXh0LCBwcmltaXRpdmUsIGJhYnlsb25NZXNoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZXh0ZW5zaW9uc0xvYWRNZXNoUHJpbWl0aXZlQXN5bmMoXHJcbiAgICAgICAgY29udGV4dDogc3RyaW5nLFxyXG4gICAgICAgIG5hbWU6IHN0cmluZyxcclxuICAgICAgICBub2RlOiBJTm9kZSxcclxuICAgICAgICBtZXNoOiBJTWVzaCxcclxuICAgICAgICBwcmltaXRpdmU6IElNZXNoUHJpbWl0aXZlLFxyXG4gICAgICAgIGFzc2lnbjogKGJhYnlsb25NZXNoOiBBYnN0cmFjdE1lc2gpID0+IHZvaWRcclxuICAgICk6IE51bGxhYmxlPFByb21pc2U8QWJzdHJhY3RNZXNoPj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hcHBseUV4dGVuc2lvbnMoXHJcbiAgICAgICAgICAgIHByaW1pdGl2ZSxcclxuICAgICAgICAgICAgXCJsb2FkTWVzaFByaW1pdGl2ZVwiLFxyXG4gICAgICAgICAgICAoZXh0ZW5zaW9uKSA9PiBleHRlbnNpb24uX2xvYWRNZXNoUHJpbWl0aXZlQXN5bmMgJiYgZXh0ZW5zaW9uLl9sb2FkTWVzaFByaW1pdGl2ZUFzeW5jKGNvbnRleHQsIG5hbWUsIG5vZGUsIG1lc2gsIHByaW1pdGl2ZSwgYXNzaWduKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZXh0ZW5zaW9uc0xvYWRNYXRlcmlhbEFzeW5jKFxyXG4gICAgICAgIGNvbnRleHQ6IHN0cmluZyxcclxuICAgICAgICBtYXRlcmlhbDogSU1hdGVyaWFsLFxyXG4gICAgICAgIGJhYnlsb25NZXNoOiBOdWxsYWJsZTxNZXNoPixcclxuICAgICAgICBiYWJ5bG9uRHJhd01vZGU6IG51bWJlcixcclxuICAgICAgICBhc3NpZ246IChiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsKSA9PiB2b2lkXHJcbiAgICApOiBOdWxsYWJsZTxQcm9taXNlPE1hdGVyaWFsPj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hcHBseUV4dGVuc2lvbnMoXHJcbiAgICAgICAgICAgIG1hdGVyaWFsLFxyXG4gICAgICAgICAgICBcImxvYWRNYXRlcmlhbFwiLFxyXG4gICAgICAgICAgICAoZXh0ZW5zaW9uKSA9PiBleHRlbnNpb24uX2xvYWRNYXRlcmlhbEFzeW5jICYmIGV4dGVuc2lvbi5fbG9hZE1hdGVyaWFsQXN5bmMoY29udGV4dCwgbWF0ZXJpYWwsIGJhYnlsb25NZXNoLCBiYWJ5bG9uRHJhd01vZGUsIGFzc2lnbilcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2V4dGVuc2lvbnNDcmVhdGVNYXRlcmlhbChjb250ZXh0OiBzdHJpbmcsIG1hdGVyaWFsOiBJTWF0ZXJpYWwsIGJhYnlsb25EcmF3TW9kZTogbnVtYmVyKTogTnVsbGFibGU8TWF0ZXJpYWw+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXBwbHlFeHRlbnNpb25zKG1hdGVyaWFsLCBcImNyZWF0ZU1hdGVyaWFsXCIsIChleHRlbnNpb24pID0+IGV4dGVuc2lvbi5jcmVhdGVNYXRlcmlhbCAmJiBleHRlbnNpb24uY3JlYXRlTWF0ZXJpYWwoY29udGV4dCwgbWF0ZXJpYWwsIGJhYnlsb25EcmF3TW9kZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2V4dGVuc2lvbnNMb2FkTWF0ZXJpYWxQcm9wZXJ0aWVzQXN5bmMoY29udGV4dDogc3RyaW5nLCBtYXRlcmlhbDogSU1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsKTogTnVsbGFibGU8UHJvbWlzZTx2b2lkPj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hcHBseUV4dGVuc2lvbnMoXHJcbiAgICAgICAgICAgIG1hdGVyaWFsLFxyXG4gICAgICAgICAgICBcImxvYWRNYXRlcmlhbFByb3BlcnRpZXNcIixcclxuICAgICAgICAgICAgKGV4dGVuc2lvbikgPT4gZXh0ZW5zaW9uLmxvYWRNYXRlcmlhbFByb3BlcnRpZXNBc3luYyAmJiBleHRlbnNpb24ubG9hZE1hdGVyaWFsUHJvcGVydGllc0FzeW5jKGNvbnRleHQsIG1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWwpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9leHRlbnNpb25zTG9hZFRleHR1cmVJbmZvQXN5bmMoY29udGV4dDogc3RyaW5nLCB0ZXh0dXJlSW5mbzogSVRleHR1cmVJbmZvLCBhc3NpZ246IChiYWJ5bG9uVGV4dHVyZTogQmFzZVRleHR1cmUpID0+IHZvaWQpOiBOdWxsYWJsZTxQcm9taXNlPEJhc2VUZXh0dXJlPj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hcHBseUV4dGVuc2lvbnModGV4dHVyZUluZm8sIFwibG9hZFRleHR1cmVJbmZvXCIsIChleHRlbnNpb24pID0+IGV4dGVuc2lvbi5sb2FkVGV4dHVyZUluZm9Bc3luYyAmJiBleHRlbnNpb24ubG9hZFRleHR1cmVJbmZvQXN5bmMoY29udGV4dCwgdGV4dHVyZUluZm8sIGFzc2lnbikpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2V4dGVuc2lvbnNMb2FkVGV4dHVyZUFzeW5jKGNvbnRleHQ6IHN0cmluZywgdGV4dHVyZTogSVRleHR1cmUsIGFzc2lnbjogKGJhYnlsb25UZXh0dXJlOiBCYXNlVGV4dHVyZSkgPT4gdm9pZCk6IE51bGxhYmxlPFByb21pc2U8QmFzZVRleHR1cmU+PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwcGx5RXh0ZW5zaW9ucyh0ZXh0dXJlLCBcImxvYWRUZXh0dXJlXCIsIChleHRlbnNpb24pID0+IGV4dGVuc2lvbi5fbG9hZFRleHR1cmVBc3luYyAmJiBleHRlbnNpb24uX2xvYWRUZXh0dXJlQXN5bmMoY29udGV4dCwgdGV4dHVyZSwgYXNzaWduKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZXh0ZW5zaW9uc0xvYWRBbmltYXRpb25Bc3luYyhjb250ZXh0OiBzdHJpbmcsIGFuaW1hdGlvbjogSUFuaW1hdGlvbik6IE51bGxhYmxlPFByb21pc2U8QW5pbWF0aW9uR3JvdXA+PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwcGx5RXh0ZW5zaW9ucyhhbmltYXRpb24sIFwibG9hZEFuaW1hdGlvblwiLCAoZXh0ZW5zaW9uKSA9PiBleHRlbnNpb24ubG9hZEFuaW1hdGlvbkFzeW5jICYmIGV4dGVuc2lvbi5sb2FkQW5pbWF0aW9uQXN5bmMoY29udGV4dCwgYW5pbWF0aW9uKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZXh0ZW5zaW9uc0xvYWRBbmltYXRpb25DaGFubmVsQXN5bmMoXHJcbiAgICAgICAgY29udGV4dDogc3RyaW5nLFxyXG4gICAgICAgIGFuaW1hdGlvbkNvbnRleHQ6IHN0cmluZyxcclxuICAgICAgICBhbmltYXRpb246IElBbmltYXRpb24sXHJcbiAgICAgICAgY2hhbm5lbDogSUFuaW1hdGlvbkNoYW5uZWwsXHJcbiAgICAgICAgb25Mb2FkOiAoYmFieWxvbkFuaW1hdGFibGU6IElBbmltYXRhYmxlLCBiYWJ5bG9uQW5pbWF0aW9uOiBBbmltYXRpb24pID0+IHZvaWRcclxuICAgICk6IE51bGxhYmxlPFByb21pc2U8dm9pZD4+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXBwbHlFeHRlbnNpb25zKFxyXG4gICAgICAgICAgICBhbmltYXRpb24sXHJcbiAgICAgICAgICAgIFwibG9hZEFuaW1hdGlvbkNoYW5uZWxcIixcclxuICAgICAgICAgICAgKGV4dGVuc2lvbikgPT4gZXh0ZW5zaW9uLl9sb2FkQW5pbWF0aW9uQ2hhbm5lbEFzeW5jICYmIGV4dGVuc2lvbi5fbG9hZEFuaW1hdGlvbkNoYW5uZWxBc3luYyhjb250ZXh0LCBhbmltYXRpb25Db250ZXh0LCBhbmltYXRpb24sIGNoYW5uZWwsIG9uTG9hZClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2V4dGVuc2lvbnNMb2FkU2tpbkFzeW5jKGNvbnRleHQ6IHN0cmluZywgbm9kZTogSU5vZGUsIHNraW46IElTa2luKTogTnVsbGFibGU8UHJvbWlzZTx2b2lkPj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hcHBseUV4dGVuc2lvbnMoc2tpbiwgXCJsb2FkU2tpblwiLCAoZXh0ZW5zaW9uKSA9PiBleHRlbnNpb24uX2xvYWRTa2luQXN5bmMgJiYgZXh0ZW5zaW9uLl9sb2FkU2tpbkFzeW5jKGNvbnRleHQsIG5vZGUsIHNraW4pKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9leHRlbnNpb25zTG9hZFVyaUFzeW5jKGNvbnRleHQ6IHN0cmluZywgcHJvcGVydHk6IElQcm9wZXJ0eSwgdXJpOiBzdHJpbmcpOiBOdWxsYWJsZTxQcm9taXNlPEFycmF5QnVmZmVyVmlldz4+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXBwbHlFeHRlbnNpb25zKHByb3BlcnR5LCBcImxvYWRVcmlcIiwgKGV4dGVuc2lvbikgPT4gZXh0ZW5zaW9uLl9sb2FkVXJpQXN5bmMgJiYgZXh0ZW5zaW9uLl9sb2FkVXJpQXN5bmMoY29udGV4dCwgcHJvcGVydHksIHVyaSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2V4dGVuc2lvbnNMb2FkQnVmZmVyVmlld0FzeW5jKGNvbnRleHQ6IHN0cmluZywgYnVmZmVyVmlldzogSUJ1ZmZlclZpZXcpOiBOdWxsYWJsZTxQcm9taXNlPEFycmF5QnVmZmVyVmlldz4+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXBwbHlFeHRlbnNpb25zKGJ1ZmZlclZpZXcsIFwibG9hZEJ1ZmZlclZpZXdcIiwgKGV4dGVuc2lvbikgPT4gZXh0ZW5zaW9uLmxvYWRCdWZmZXJWaWV3QXN5bmMgJiYgZXh0ZW5zaW9uLmxvYWRCdWZmZXJWaWV3QXN5bmMoY29udGV4dCwgYnVmZmVyVmlldykpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2V4dGVuc2lvbnNMb2FkQnVmZmVyQXN5bmMoY29udGV4dDogc3RyaW5nLCBidWZmZXI6IElCdWZmZXIsIGJ5dGVPZmZzZXQ6IG51bWJlciwgYnl0ZUxlbmd0aDogbnVtYmVyKTogTnVsbGFibGU8UHJvbWlzZTxBcnJheUJ1ZmZlclZpZXc+PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwcGx5RXh0ZW5zaW9ucyhidWZmZXIsIFwibG9hZEJ1ZmZlclwiLCAoZXh0ZW5zaW9uKSA9PiBleHRlbnNpb24ubG9hZEJ1ZmZlckFzeW5jICYmIGV4dGVuc2lvbi5sb2FkQnVmZmVyQXN5bmMoY29udGV4dCwgYnVmZmVyLCBieXRlT2Zmc2V0LCBieXRlTGVuZ3RoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIZWxwZXIgbWV0aG9kIGNhbGxlZCBieSBhIGxvYWRlciBleHRlbnNpb24gdG8gbG9hZCBhbiBnbFRGIGV4dGVuc2lvbi5cclxuICAgICAqIEBwYXJhbSBjb250ZXh0IFRoZSBjb250ZXh0IHdoZW4gbG9hZGluZyB0aGUgYXNzZXRcclxuICAgICAqIEBwYXJhbSBwcm9wZXJ0eSBUaGUgZ2xURiBwcm9wZXJ0eSB0byBsb2FkIHRoZSBleHRlbnNpb24gZnJvbVxyXG4gICAgICogQHBhcmFtIGV4dGVuc2lvbk5hbWUgVGhlIG5hbWUgb2YgdGhlIGV4dGVuc2lvbiB0byBsb2FkXHJcbiAgICAgKiBAcGFyYW0gYWN0aW9uQXN5bmMgVGhlIGFjdGlvbiB0byBydW5cclxuICAgICAqIEByZXR1cm5zIFRoZSBwcm9taXNlIHJldHVybmVkIGJ5IGFjdGlvbkFzeW5jIG9yIG51bGwgaWYgdGhlIGV4dGVuc2lvbiBkb2VzIG5vdCBleGlzdFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIExvYWRFeHRlbnNpb25Bc3luYzxURXh0ZW5zaW9uID0gYW55LCBUUmVzdWx0ID0gdm9pZD4oXHJcbiAgICAgICAgY29udGV4dDogc3RyaW5nLFxyXG4gICAgICAgIHByb3BlcnR5OiBJUHJvcGVydHksXHJcbiAgICAgICAgZXh0ZW5zaW9uTmFtZTogc3RyaW5nLFxyXG4gICAgICAgIGFjdGlvbkFzeW5jOiAoZXh0ZW5zaW9uQ29udGV4dDogc3RyaW5nLCBleHRlbnNpb246IFRFeHRlbnNpb24pID0+IE51bGxhYmxlPFByb21pc2U8VFJlc3VsdD4+XHJcbiAgICApOiBOdWxsYWJsZTxQcm9taXNlPFRSZXN1bHQ+PiB7XHJcbiAgICAgICAgaWYgKCFwcm9wZXJ0eS5leHRlbnNpb25zKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZXh0ZW5zaW9ucyA9IHByb3BlcnR5LmV4dGVuc2lvbnM7XHJcblxyXG4gICAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IGV4dGVuc2lvbnNbZXh0ZW5zaW9uTmFtZV0gYXMgVEV4dGVuc2lvbjtcclxuICAgICAgICBpZiAoIWV4dGVuc2lvbikge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBhY3Rpb25Bc3luYyhgJHtjb250ZXh0fS9leHRlbnNpb25zLyR7ZXh0ZW5zaW9uTmFtZX1gLCBleHRlbnNpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSGVscGVyIG1ldGhvZCBjYWxsZWQgYnkgYSBsb2FkZXIgZXh0ZW5zaW9uIHRvIGxvYWQgYSBnbFRGIGV4dHJhLlxyXG4gICAgICogQHBhcmFtIGNvbnRleHQgVGhlIGNvbnRleHQgd2hlbiBsb2FkaW5nIHRoZSBhc3NldFxyXG4gICAgICogQHBhcmFtIHByb3BlcnR5IFRoZSBnbFRGIHByb3BlcnR5IHRvIGxvYWQgdGhlIGV4dHJhIGZyb21cclxuICAgICAqIEBwYXJhbSBleHRlbnNpb25OYW1lIFRoZSBuYW1lIG9mIHRoZSBleHRlbnNpb24gdG8gbG9hZFxyXG4gICAgICogQHBhcmFtIGFjdGlvbkFzeW5jIFRoZSBhY3Rpb24gdG8gcnVuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgcHJvbWlzZSByZXR1cm5lZCBieSBhY3Rpb25Bc3luYyBvciBudWxsIGlmIHRoZSBleHRyYSBkb2VzIG5vdCBleGlzdFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIExvYWRFeHRyYUFzeW5jPFRFeHRyYSA9IGFueSwgVFJlc3VsdCA9IHZvaWQ+KFxyXG4gICAgICAgIGNvbnRleHQ6IHN0cmluZyxcclxuICAgICAgICBwcm9wZXJ0eTogSVByb3BlcnR5LFxyXG4gICAgICAgIGV4dGVuc2lvbk5hbWU6IHN0cmluZyxcclxuICAgICAgICBhY3Rpb25Bc3luYzogKGV4dHJhQ29udGV4dDogc3RyaW5nLCBleHRyYTogVEV4dHJhKSA9PiBOdWxsYWJsZTxQcm9taXNlPFRSZXN1bHQ+PlxyXG4gICAgKTogTnVsbGFibGU8UHJvbWlzZTxUUmVzdWx0Pj4ge1xyXG4gICAgICAgIGlmICghcHJvcGVydHkuZXh0cmFzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZXh0cmFzID0gcHJvcGVydHkuZXh0cmFzO1xyXG5cclxuICAgICAgICBjb25zdCBleHRyYSA9IGV4dHJhc1tleHRlbnNpb25OYW1lXSBhcyBURXh0cmE7XHJcbiAgICAgICAgaWYgKCFleHRyYSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBhY3Rpb25Bc3luYyhgJHtjb250ZXh0fS9leHRyYXMvJHtleHRlbnNpb25OYW1lfWAsIGV4dHJhKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENoZWNrcyBmb3IgcHJlc2VuY2Ugb2YgYW4gZXh0ZW5zaW9uLlxyXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhlIGV4dGVuc2lvbiB0byBjaGVja1xyXG4gICAgICogQHJldHVybnMgQSBib29sZWFuIGluZGljYXRpbmcgdGhlIHByZXNlbmNlIG9mIHRoZSBnaXZlbiBleHRlbnNpb24gbmFtZSBpbiBgZXh0ZW5zaW9uc1VzZWRgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpc0V4dGVuc2lvblVzZWQobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZ2x0Zi5leHRlbnNpb25zVXNlZCAmJiB0aGlzLl9nbHRmLmV4dGVuc2lvbnNVc2VkLmluZGV4T2YobmFtZSkgIT09IC0xO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5jcmVtZW50cyB0aGUgaW5kZW50YXRpb24gbGV2ZWwgYW5kIGxvZ3MgYSBtZXNzYWdlLlxyXG4gICAgICogQHBhcmFtIG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gbG9nXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2dPcGVuKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3BhcmVudC5fbG9nT3BlbihtZXNzYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERlY3JlbWVudHMgdGhlIGluZGVudGF0aW9uIGxldmVsLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9nQ2xvc2UoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fcGFyZW50Ll9sb2dDbG9zZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTG9ncyBhIG1lc3NhZ2VcclxuICAgICAqIEBwYXJhbSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIGxvZ1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9nKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3BhcmVudC5fbG9nKG1lc3NhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RhcnRzIGEgcGVyZm9ybWFuY2UgY291bnRlci5cclxuICAgICAqIEBwYXJhbSBjb3VudGVyTmFtZSBUaGUgbmFtZSBvZiB0aGUgcGVyZm9ybWFuY2UgY291bnRlclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhcnRQZXJmb3JtYW5jZUNvdW50ZXIoY291bnRlck5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3BhcmVudC5fc3RhcnRQZXJmb3JtYW5jZUNvdW50ZXIoY291bnRlck5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRW5kcyBhIHBlcmZvcm1hbmNlIGNvdW50ZXIuXHJcbiAgICAgKiBAcGFyYW0gY291bnRlck5hbWUgVGhlIG5hbWUgb2YgdGhlIHBlcmZvcm1hbmNlIGNvdW50ZXJcclxuICAgICAqL1xyXG4gICAgcHVibGljIGVuZFBlcmZvcm1hbmNlQ291bnRlcihjb3VudGVyTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fcGFyZW50Ll9lbmRQZXJmb3JtYW5jZUNvdW50ZXIoY291bnRlck5hbWUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5HTFRGRmlsZUxvYWRlci5fQ3JlYXRlR0xURjJMb2FkZXIgPSAocGFyZW50KSA9PiBuZXcgR0xURkxvYWRlcihwYXJlbnQpO1xyXG4iLCJpbXBvcnQgeyBBbmltYXRpb24gfSBmcm9tIFwiY29yZS9BbmltYXRpb25zL2FuaW1hdGlvblwiO1xyXG5pbXBvcnQgeyBRdWF0ZXJuaW9uLCBWZWN0b3IzIH0gZnJvbSBcImNvcmUvTWF0aHMvbWF0aC52ZWN0b3JcIjtcclxuaW1wb3J0IHR5cGUgeyBJTm9kZSB9IGZyb20gXCIuL2dsVEZMb2FkZXJJbnRlcmZhY2VzXCI7XHJcbmltcG9ydCB0eXBlIHsgSUFuaW1hdGFibGUgfSBmcm9tIFwiY29yZS9BbmltYXRpb25zL2FuaW1hdGFibGUuaW50ZXJmYWNlXCI7XHJcblxyXG4vKiogQGludGVybmFsICovXHJcbmV4cG9ydCB0eXBlIEdldFZhbHVlRm4gPSAodGFyZ2V0OiBhbnksIHNvdXJjZTogRmxvYXQzMkFycmF5LCBvZmZzZXQ6IG51bWJlciwgc2NhbGU6IG51bWJlcikgPT4gYW55O1xyXG5cclxuLyoqIEBpbnRlcm5hbCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmVjdG9yMyhfdGFyZ2V0OiBhbnksIHNvdXJjZTogRmxvYXQzMkFycmF5LCBvZmZzZXQ6IG51bWJlciwgc2NhbGU6IG51bWJlcik6IFZlY3RvcjMge1xyXG4gICAgcmV0dXJuIFZlY3RvcjMuRnJvbUFycmF5KHNvdXJjZSwgb2Zmc2V0KS5zY2FsZUluUGxhY2Uoc2NhbGUpO1xyXG59XHJcblxyXG4vKiogQGludGVybmFsICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRRdWF0ZXJuaW9uKF90YXJnZXQ6IGFueSwgc291cmNlOiBGbG9hdDMyQXJyYXksIG9mZnNldDogbnVtYmVyLCBzY2FsZTogbnVtYmVyKTogUXVhdGVybmlvbiB7XHJcbiAgICByZXR1cm4gUXVhdGVybmlvbi5Gcm9tQXJyYXkoc291cmNlLCBvZmZzZXQpLnNjYWxlSW5QbGFjZShzY2FsZSk7XHJcbn1cclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFdlaWdodHModGFyZ2V0OiBJTm9kZSwgc291cmNlOiBGbG9hdDMyQXJyYXksIG9mZnNldDogbnVtYmVyLCBzY2FsZTogbnVtYmVyKTogQXJyYXk8bnVtYmVyPiB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IG5ldyBBcnJheTxudW1iZXI+KHRhcmdldC5fbnVtTW9ycGhUYXJnZXRzISk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdmFsdWVbaV0gPSBzb3VyY2Vbb2Zmc2V0KytdICogc2NhbGU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59XHJcblxyXG4vKiogQGludGVybmFsICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBbmltYXRpb25Qcm9wZXJ0eUluZm8ge1xyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyByZWFkb25seSB0eXBlOiBudW1iZXIsXHJcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IG5hbWU6IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgZ2V0VmFsdWU6IEdldFZhbHVlRm4sXHJcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IGdldFN0cmlkZTogKHRhcmdldDogYW55KSA9PiBudW1iZXJcclxuICAgICkge31cclxuXHJcbiAgICBwcm90ZWN0ZWQgX2J1aWxkQW5pbWF0aW9uKG5hbWU6IHN0cmluZywgZnBzOiBudW1iZXIsIGtleXM6IGFueVtdKTogQW5pbWF0aW9uIHtcclxuICAgICAgICBjb25zdCBiYWJ5bG9uQW5pbWF0aW9uID0gbmV3IEFuaW1hdGlvbihuYW1lLCB0aGlzLm5hbWUsIGZwcywgdGhpcy50eXBlKTtcclxuICAgICAgICBiYWJ5bG9uQW5pbWF0aW9uLnNldEtleXMoa2V5cyk7XHJcbiAgICAgICAgcmV0dXJuIGJhYnlsb25BbmltYXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGFic3RyYWN0IGJ1aWxkQW5pbWF0aW9ucyh0YXJnZXQ6IGFueSwgbmFtZTogc3RyaW5nLCBmcHM6IG51bWJlciwga2V5czogYW55W10sIGNhbGxiYWNrOiAoYmFieWxvbkFuaW1hdGFibGU6IElBbmltYXRhYmxlLCBiYWJ5bG9uQW5pbWF0aW9uOiBBbmltYXRpb24pID0+IHZvaWQpOiB2b2lkO1xyXG59XHJcblxyXG4vKiogQGludGVybmFsICovXHJcbmV4cG9ydCBjbGFzcyBUcmFuc2Zvcm1Ob2RlQW5pbWF0aW9uUHJvcGVydHlJbmZvIGV4dGVuZHMgQW5pbWF0aW9uUHJvcGVydHlJbmZvIHtcclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBidWlsZEFuaW1hdGlvbnModGFyZ2V0OiBJTm9kZSwgbmFtZTogc3RyaW5nLCBmcHM6IG51bWJlciwga2V5czogYW55W10sIGNhbGxiYWNrOiAoYmFieWxvbkFuaW1hdGFibGU6IElBbmltYXRhYmxlLCBiYWJ5bG9uQW5pbWF0aW9uOiBBbmltYXRpb24pID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICBjYWxsYmFjayh0YXJnZXQuX2JhYnlsb25UcmFuc2Zvcm1Ob2RlISwgdGhpcy5fYnVpbGRBbmltYXRpb24obmFtZSwgZnBzLCBrZXlzKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuZXhwb3J0IGNsYXNzIFdlaWdodEFuaW1hdGlvblByb3BlcnR5SW5mbyBleHRlbmRzIEFuaW1hdGlvblByb3BlcnR5SW5mbyB7XHJcbiAgICBwdWJsaWMgYnVpbGRBbmltYXRpb25zKHRhcmdldDogSU5vZGUsIG5hbWU6IHN0cmluZywgZnBzOiBudW1iZXIsIGtleXM6IGFueVtdLCBjYWxsYmFjazogKGJhYnlsb25BbmltYXRhYmxlOiBJQW5pbWF0YWJsZSwgYmFieWxvbkFuaW1hdGlvbjogQW5pbWF0aW9uKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRhcmdldC5fbnVtTW9ycGhUYXJnZXRzKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHRhcmdldEluZGV4ID0gMDsgdGFyZ2V0SW5kZXggPCB0YXJnZXQuX251bU1vcnBoVGFyZ2V0czsgdGFyZ2V0SW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYmFieWxvbkFuaW1hdGlvbiA9IG5ldyBBbmltYXRpb24oYCR7bmFtZX1fJHt0YXJnZXRJbmRleH1gLCB0aGlzLm5hbWUsIGZwcywgdGhpcy50eXBlKTtcclxuICAgICAgICAgICAgICAgIGJhYnlsb25BbmltYXRpb24uc2V0S2V5cyhcclxuICAgICAgICAgICAgICAgICAgICBrZXlzLm1hcCgoa2V5KSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmFtZToga2V5LmZyYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpblRhbmdlbnQ6IGtleS5pblRhbmdlbnQgPyBrZXkuaW5UYW5nZW50W3RhcmdldEluZGV4XSA6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGtleS52YWx1ZVt0YXJnZXRJbmRleF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dFRhbmdlbnQ6IGtleS5vdXRUYW5nZW50ID8ga2V5Lm91dFRhbmdlbnRbdGFyZ2V0SW5kZXhdIDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnBvbGF0aW9uOiBrZXkuaW50ZXJwb2xhdGlvbixcclxuICAgICAgICAgICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldC5fcHJpbWl0aXZlQmFieWxvbk1lc2hlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYmFieWxvbk1lc2ggb2YgdGFyZ2V0Ll9wcmltaXRpdmVCYWJ5bG9uTWVzaGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiYWJ5bG9uTWVzaC5tb3JwaFRhcmdldE1hbmFnZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vcnBoVGFyZ2V0ID0gYmFieWxvbk1lc2gubW9ycGhUYXJnZXRNYW5hZ2VyLmdldFRhcmdldCh0YXJnZXRJbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBiYWJ5bG9uQW5pbWF0aW9uQ2xvbmUgPSBiYWJ5bG9uQW5pbWF0aW9uLmNsb25lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3JwaFRhcmdldC5hbmltYXRpb25zLnB1c2goYmFieWxvbkFuaW1hdGlvbkNsb25lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKG1vcnBoVGFyZ2V0LCBiYWJ5bG9uQW5pbWF0aW9uQ2xvbmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vKiogQGludGVybmFsICovXHJcbmV4cG9ydCBjb25zdCBub2RlQW5pbWF0aW9uRGF0YSA9IHtcclxuICAgIHRyYW5zbGF0aW9uOiBbbmV3IFRyYW5zZm9ybU5vZGVBbmltYXRpb25Qcm9wZXJ0eUluZm8oQW5pbWF0aW9uLkFOSU1BVElPTlRZUEVfVkVDVE9SMywgXCJwb3NpdGlvblwiLCBnZXRWZWN0b3IzLCAoKSA9PiAzKV0sXHJcbiAgICByb3RhdGlvbjogW25ldyBUcmFuc2Zvcm1Ob2RlQW5pbWF0aW9uUHJvcGVydHlJbmZvKEFuaW1hdGlvbi5BTklNQVRJT05UWVBFX1FVQVRFUk5JT04sIFwicm90YXRpb25RdWF0ZXJuaW9uXCIsIGdldFF1YXRlcm5pb24sICgpID0+IDQpXSxcclxuICAgIHNjYWxlOiBbbmV3IFRyYW5zZm9ybU5vZGVBbmltYXRpb25Qcm9wZXJ0eUluZm8oQW5pbWF0aW9uLkFOSU1BVElPTlRZUEVfVkVDVE9SMywgXCJzY2FsaW5nXCIsIGdldFZlY3RvcjMsICgpID0+IDMpXSxcclxuICAgIHdlaWdodHM6IFtuZXcgV2VpZ2h0QW5pbWF0aW9uUHJvcGVydHlJbmZvKEFuaW1hdGlvbi5BTklNQVRJT05UWVBFX0ZMT0FULCBcImluZmx1ZW5jZVwiLCBnZXRXZWlnaHRzLCAodGFyZ2V0KSA9PiB0YXJnZXQuX251bU1vcnBoVGFyZ2V0cyEpXSxcclxufTtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWludGVybmFsLW1vZHVsZXMgKi9cclxuZXhwb3J0ICogZnJvbSBcIi4vZ2xURkxvYWRlclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9nbFRGTG9hZGVyRXh0ZW5zaW9uXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2dsVEZMb2FkZXJJbnRlcmZhY2VzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL0V4dGVuc2lvbnMvaW5kZXhcIjtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzICovXHJcbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiAqL1xyXG5pbXBvcnQgdHlwZSAqIGFzIEdMVEYyIGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCJjb3JlL3R5cGVzXCI7XHJcbmltcG9ydCB0eXBlIHsgT2JzZXJ2ZXIgfSBmcm9tIFwiY29yZS9NaXNjL29ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJjb3JlL01pc2Mvb2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBUb29scyB9IGZyb20gXCJjb3JlL01pc2MvdG9vbHNcIjtcclxuaW1wb3J0IHR5cGUgeyBDYW1lcmEgfSBmcm9tIFwiY29yZS9DYW1lcmFzL2NhbWVyYVwiO1xyXG5pbXBvcnQgdHlwZSB7IEJhc2VUZXh0dXJlIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1RleHR1cmVzL2Jhc2VUZXh0dXJlXCI7XHJcbmltcG9ydCB0eXBlIHsgTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHR5cGUgeyBBYnN0cmFjdE1lc2ggfSBmcm9tIFwiY29yZS9NZXNoZXMvYWJzdHJhY3RNZXNoXCI7XHJcbmltcG9ydCB0eXBlIHtcclxuICAgIElTY2VuZUxvYWRlclBsdWdpbkZhY3RvcnksXHJcbiAgICBJU2NlbmVMb2FkZXJQbHVnaW4sXHJcbiAgICBJU2NlbmVMb2FkZXJQbHVnaW5Bc3luYyxcclxuICAgIElTY2VuZUxvYWRlclByb2dyZXNzRXZlbnQsXHJcbiAgICBJU2NlbmVMb2FkZXJQbHVnaW5FeHRlbnNpb25zLFxyXG4gICAgSVNjZW5lTG9hZGVyQXN5bmNSZXN1bHQsXHJcbn0gZnJvbSBcImNvcmUvTG9hZGluZy9zY2VuZUxvYWRlclwiO1xyXG5pbXBvcnQgeyBTY2VuZUxvYWRlciB9IGZyb20gXCJjb3JlL0xvYWRpbmcvc2NlbmVMb2FkZXJcIjtcclxuaW1wb3J0IHsgQXNzZXRDb250YWluZXIgfSBmcm9tIFwiY29yZS9hc3NldENvbnRhaW5lclwiO1xyXG5pbXBvcnQgdHlwZSB7IFNjZW5lLCBJRGlzcG9zYWJsZSB9IGZyb20gXCJjb3JlL3NjZW5lXCI7XHJcbmltcG9ydCB0eXBlIHsgV2ViUmVxdWVzdCB9IGZyb20gXCJjb3JlL01pc2Mvd2ViUmVxdWVzdFwiO1xyXG5pbXBvcnQgdHlwZSB7IElGaWxlUmVxdWVzdCB9IGZyb20gXCJjb3JlL01pc2MvZmlsZVJlcXVlc3RcIjtcclxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSBcImNvcmUvTWlzYy9sb2dnZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBJRGF0YUJ1ZmZlciB9IGZyb20gXCJjb3JlL01pc2MvZGF0YVJlYWRlclwiO1xyXG5pbXBvcnQgeyBEYXRhUmVhZGVyIH0gZnJvbSBcImNvcmUvTWlzYy9kYXRhUmVhZGVyXCI7XHJcbmltcG9ydCB7IEdMVEZWYWxpZGF0aW9uIH0gZnJvbSBcIi4vZ2xURlZhbGlkYXRpb25cIjtcclxuaW1wb3J0IHR5cGUgeyBMb2FkRmlsZUVycm9yIH0gZnJvbSBcImNvcmUvTWlzYy9maWxlVG9vbHNcIjtcclxuaW1wb3J0IHsgRGVjb2RlQmFzZTY0VXJsVG9CaW5hcnkgfSBmcm9tIFwiY29yZS9NaXNjL2ZpbGVUb29sc1wiO1xyXG5pbXBvcnQgeyBSdW50aW1lRXJyb3IsIEVycm9yQ29kZXMgfSBmcm9tIFwiY29yZS9NaXNjL2Vycm9yXCI7XHJcbmltcG9ydCB0eXBlIHsgVHJhbnNmb3JtTm9kZSB9IGZyb20gXCJjb3JlL01lc2hlcy90cmFuc2Zvcm1Ob2RlXCI7XHJcbmltcG9ydCB0eXBlIHsgTW9ycGhUYXJnZXRNYW5hZ2VyIH0gZnJvbSBcImNvcmUvTW9ycGgvbW9ycGhUYXJnZXRNYW5hZ2VyXCI7XHJcblxyXG5pbnRlcmZhY2UgSUZpbGVSZXF1ZXN0SW5mbyBleHRlbmRzIElGaWxlUmVxdWVzdCB7XHJcbiAgICBfbGVuZ3RoQ29tcHV0YWJsZT86IGJvb2xlYW47XHJcbiAgICBfbG9hZGVkPzogbnVtYmVyO1xyXG4gICAgX3RvdGFsPzogbnVtYmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZWFkQXN5bmMoYXJyYXlCdWZmZXI6IEFycmF5QnVmZmVyLCBieXRlT2Zmc2V0OiBudW1iZXIsIGJ5dGVMZW5ndGg6IG51bWJlcik6IFByb21pc2U8VWludDhBcnJheT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ldyBVaW50OEFycmF5KGFycmF5QnVmZmVyLCBieXRlT2Zmc2V0LCBieXRlTGVuZ3RoKSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZWFkVmlld0FzeW5jKGFycmF5QnVmZmVyVmlldzogQXJyYXlCdWZmZXJWaWV3LCBieXRlT2Zmc2V0OiBudW1iZXIsIGJ5dGVMZW5ndGg6IG51bWJlcik6IFByb21pc2U8VWludDhBcnJheT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBpZiAoYnl0ZU9mZnNldCA8IDAgfHwgYnl0ZU9mZnNldCA+PSBhcnJheUJ1ZmZlclZpZXcuYnl0ZUxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIk9mZnNldCBpcyBvdXQgb2YgcmFuZ2UuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGJ5dGVPZmZzZXQgKyBieXRlTGVuZ3RoID4gYXJyYXlCdWZmZXJWaWV3LmJ5dGVMZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJMZW5ndGggaXMgb3V0IG9mIHJhbmdlLlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXJWaWV3LmJ1ZmZlciwgYXJyYXlCdWZmZXJWaWV3LmJ5dGVPZmZzZXQgKyBieXRlT2Zmc2V0LCBieXRlTGVuZ3RoKSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogTW9kZSB0aGF0IGRldGVybWluZXMgdGhlIGNvb3JkaW5hdGUgc3lzdGVtIHRvIHVzZS5cclxuICovXHJcbmV4cG9ydCBlbnVtIEdMVEZMb2FkZXJDb29yZGluYXRlU3lzdGVtTW9kZSB7XHJcbiAgICAvKipcclxuICAgICAqIEF1dG9tYXRpY2FsbHkgY29udmVydCB0aGUgZ2xURiByaWdodC1oYW5kZWQgZGF0YSB0byB0aGUgYXBwcm9wcmlhdGUgc3lzdGVtIGJhc2VkIG9uIHRoZSBjdXJyZW50IGNvb3JkaW5hdGUgc3lzdGVtIG1vZGUgb2YgdGhlIHNjZW5lLlxyXG4gICAgICovXHJcbiAgICBBVVRPLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgdXNlUmlnaHRIYW5kZWRTeXN0ZW0gZmxhZyBvbiB0aGUgc2NlbmUuXHJcbiAgICAgKi9cclxuICAgIEZPUkNFX1JJR0hUX0hBTkRFRCxcclxufVxyXG5cclxuLyoqXHJcbiAqIE1vZGUgdGhhdCBkZXRlcm1pbmVzIHdoYXQgYW5pbWF0aW9ucyB3aWxsIHN0YXJ0LlxyXG4gKi9cclxuZXhwb3J0IGVudW0gR0xURkxvYWRlckFuaW1hdGlvblN0YXJ0TW9kZSB7XHJcbiAgICAvKipcclxuICAgICAqIE5vIGFuaW1hdGlvbiB3aWxsIHN0YXJ0LlxyXG4gICAgICovXHJcbiAgICBOT05FLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGZpcnN0IGFuaW1hdGlvbiB3aWxsIHN0YXJ0LlxyXG4gICAgICovXHJcbiAgICBGSVJTVCxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEFsbCBhbmltYXRpb25zIHdpbGwgc3RhcnQuXHJcbiAgICAgKi9cclxuICAgIEFMTCxcclxufVxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSB0aGF0IGNvbnRhaW5zIHRoZSBkYXRhIGZvciB0aGUgZ2xURiBhc3NldC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUdMVEZMb2FkZXJEYXRhIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIG9iamVjdCB0aGF0IHJlcHJlc2VudHMgdGhlIGdsVEYgSlNPTi5cclxuICAgICAqL1xyXG4gICAganNvbjogT2JqZWN0O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIEJJTiBjaHVuayBvZiBhIGJpbmFyeSBnbFRGLlxyXG4gICAgICovXHJcbiAgICBiaW46IE51bGxhYmxlPElEYXRhQnVmZmVyPjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgZXh0ZW5kaW5nIHRoZSBsb2FkZXIuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElHTFRGTG9hZGVyRXh0ZW5zaW9uIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIG5hbWUgb2YgdGhpcyBleHRlbnNpb24uXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyBlbmFibGVkLlxyXG4gICAgICovXHJcbiAgICBlbmFibGVkOiBib29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyB0aGUgb3JkZXIgb2YgdGhpcyBleHRlbnNpb24uXHJcbiAgICAgKiBUaGUgbG9hZGVyIHNvcnRzIHRoZSBleHRlbnNpb25zIHVzaW5nIHRoZXNlIHZhbHVlcyB3aGVuIGxvYWRpbmcuXHJcbiAgICAgKi9cclxuICAgIG9yZGVyPzogbnVtYmVyO1xyXG59XHJcblxyXG4vKipcclxuICogTG9hZGVyIHN0YXRlLlxyXG4gKi9cclxuZXhwb3J0IGVudW0gR0xURkxvYWRlclN0YXRlIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIGFzc2V0IGlzIGxvYWRpbmcuXHJcbiAgICAgKi9cclxuICAgIExPQURJTkcsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgYXNzZXQgaXMgcmVhZHkgZm9yIHJlbmRlcmluZy5cclxuICAgICAqL1xyXG4gICAgUkVBRFksXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgYXNzZXQgaXMgY29tcGxldGVseSBsb2FkZWQuXHJcbiAgICAgKi9cclxuICAgIENPTVBMRVRFLFxyXG59XHJcblxyXG4vKiogQGludGVybmFsICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUdMVEZMb2FkZXIgZXh0ZW5kcyBJRGlzcG9zYWJsZSB7XHJcbiAgICBpbXBvcnRNZXNoQXN5bmM6IChcclxuICAgICAgICBtZXNoZXNOYW1lczogYW55LFxyXG4gICAgICAgIHNjZW5lOiBTY2VuZSxcclxuICAgICAgICBjb250YWluZXI6IE51bGxhYmxlPEFzc2V0Q29udGFpbmVyPixcclxuICAgICAgICBkYXRhOiBJR0xURkxvYWRlckRhdGEsXHJcbiAgICAgICAgcm9vdFVybDogc3RyaW5nLFxyXG4gICAgICAgIG9uUHJvZ3Jlc3M/OiAoZXZlbnQ6IElTY2VuZUxvYWRlclByb2dyZXNzRXZlbnQpID0+IHZvaWQsXHJcbiAgICAgICAgZmlsZU5hbWU/OiBzdHJpbmdcclxuICAgICkgPT4gUHJvbWlzZTxJU2NlbmVMb2FkZXJBc3luY1Jlc3VsdD47XHJcbiAgICBsb2FkQXN5bmM6IChzY2VuZTogU2NlbmUsIGRhdGE6IElHTFRGTG9hZGVyRGF0YSwgcm9vdFVybDogc3RyaW5nLCBvblByb2dyZXNzPzogKGV2ZW50OiBJU2NlbmVMb2FkZXJQcm9ncmVzc0V2ZW50KSA9PiB2b2lkLCBmaWxlTmFtZT86IHN0cmluZykgPT4gUHJvbWlzZTx2b2lkPjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEZpbGUgbG9hZGVyIGZvciBsb2FkaW5nIGdsVEYgZmlsZXMgaW50byBhIHNjZW5lLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEdMVEZGaWxlTG9hZGVyIGltcGxlbWVudHMgSURpc3Bvc2FibGUsIElTY2VuZUxvYWRlclBsdWdpbkFzeW5jLCBJU2NlbmVMb2FkZXJQbHVnaW5GYWN0b3J5IHtcclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgX0NyZWF0ZUdMVEYxTG9hZGVyOiAocGFyZW50OiBHTFRGRmlsZUxvYWRlcikgPT4gSUdMVEZMb2FkZXI7XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBfQ3JlYXRlR0xURjJMb2FkZXI6IChwYXJlbnQ6IEdMVEZGaWxlTG9hZGVyKSA9PiBJR0xURkxvYWRlcjtcclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gQ29tbW9uIG9wdGlvbnNcclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSYWlzZWQgd2hlbiB0aGUgYXNzZXQgaGFzIGJlZW4gcGFyc2VkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvblBhcnNlZE9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZTxJR0xURkxvYWRlckRhdGE+KCk7XHJcblxyXG4gICAgcHJpdmF0ZSBfb25QYXJzZWRPYnNlcnZlcjogTnVsbGFibGU8T2JzZXJ2ZXI8SUdMVEZMb2FkZXJEYXRhPj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSYWlzZWQgd2hlbiB0aGUgYXNzZXQgaGFzIGJlZW4gcGFyc2VkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgb25QYXJzZWQoY2FsbGJhY2s6IChsb2FkZXJEYXRhOiBJR0xURkxvYWRlckRhdGEpID0+IHZvaWQpIHtcclxuICAgICAgICBpZiAodGhpcy5fb25QYXJzZWRPYnNlcnZlcikge1xyXG4gICAgICAgICAgICB0aGlzLm9uUGFyc2VkT2JzZXJ2YWJsZS5yZW1vdmUodGhpcy5fb25QYXJzZWRPYnNlcnZlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX29uUGFyc2VkT2JzZXJ2ZXIgPSB0aGlzLm9uUGFyc2VkT2JzZXJ2YWJsZS5hZGQoY2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS1cclxuICAgIC8vIFYxIG9wdGlvbnNcclxuICAgIC8vIC0tLS0tLS0tLS1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCB0aGlzIHByb3BlcnR5IHRvIGZhbHNlIHRvIGRpc2FibGUgaW5jcmVtZW50YWwgbG9hZGluZyB3aGljaCBkZWxheXMgdGhlIGxvYWRlciBmcm9tIGNhbGxpbmcgdGhlIHN1Y2Nlc3MgY2FsbGJhY2sgdW50aWwgYWZ0ZXIgbG9hZGluZyB0aGUgbWVzaGVzIGFuZCBzaGFkZXJzLlxyXG4gICAgICogVGV4dHVyZXMgYWx3YXlzIGxvYWRzIGFzeW5jaHJvbm91c2x5LiBGb3IgZXhhbXBsZSwgdGhlIHN1Y2Nlc3MgY2FsbGJhY2sgY2FuIGNvbXB1dGUgdGhlIGJvdW5kaW5nIGluZm9ybWF0aW9uIG9mIHRoZSBsb2FkZWQgbWVzaGVzIHdoZW4gaW5jcmVtZW50YWwgbG9hZGluZyBpcyBkaXNhYmxlZC5cclxuICAgICAqIERlZmF1bHRzIHRvIHRydWUuXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBJbmNyZW1lbnRhbExvYWRpbmcgPSB0cnVlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IHRoaXMgcHJvcGVydHkgdG8gdHJ1ZSBpbiBvcmRlciB0byB3b3JrIHdpdGggaG9tb2dlbmVvdXMgY29vcmRpbmF0ZXMsIGF2YWlsYWJsZSB3aXRoIHNvbWUgY29udmVydGVycyBhbmQgZXhwb3J0ZXJzLlxyXG4gICAgICogRGVmYXVsdHMgdG8gZmFsc2UuIFNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Ib21vZ2VuZW91c19jb29yZGluYXRlcy5cclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEhvbW9nZW5lb3VzQ29vcmRpbmF0ZXMgPSBmYWxzZTtcclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tXHJcbiAgICAvLyBWMiBvcHRpb25zXHJcbiAgICAvLyAtLS0tLS0tLS0tXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgY29vcmRpbmF0ZSBzeXN0ZW0gbW9kZS4gRGVmYXVsdHMgdG8gQVVUTy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGNvb3JkaW5hdGVTeXN0ZW1Nb2RlID0gR0xURkxvYWRlckNvb3JkaW5hdGVTeXN0ZW1Nb2RlLkFVVE87XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgYW5pbWF0aW9uIHN0YXJ0IG1vZGUuIERlZmF1bHRzIHRvIEZJUlNULlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYW5pbWF0aW9uU3RhcnRNb2RlID0gR0xURkxvYWRlckFuaW1hdGlvblN0YXJ0TW9kZS5GSVJTVDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgaWYgdGhlIGxvYWRlciBzaG91bGQgY29tcGlsZSBtYXRlcmlhbHMgYmVmb3JlIHJhaXNpbmcgdGhlIHN1Y2Nlc3MgY2FsbGJhY2suIERlZmF1bHRzIHRvIGZhbHNlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY29tcGlsZU1hdGVyaWFscyA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyBpZiB0aGUgbG9hZGVyIHNob3VsZCBhbHNvIGNvbXBpbGUgbWF0ZXJpYWxzIHdpdGggY2xpcCBwbGFuZXMuIERlZmF1bHRzIHRvIGZhbHNlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdXNlQ2xpcFBsYW5lID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIGlmIHRoZSBsb2FkZXIgc2hvdWxkIGNvbXBpbGUgc2hhZG93IGdlbmVyYXRvcnMgYmVmb3JlIHJhaXNpbmcgdGhlIHN1Y2Nlc3MgY2FsbGJhY2suIERlZmF1bHRzIHRvIGZhbHNlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY29tcGlsZVNoYWRvd0dlbmVyYXRvcnMgPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgaWYgdGhlIEFscGhhIGJsZW5kZWQgbWF0ZXJpYWxzIGFyZSBvbmx5IGFwcGxpZWQgYXMgY292ZXJhZ2UuXHJcbiAgICAgKiBJZiBmYWxzZSwgKGRlZmF1bHQpIFRoZSBsdW1pbmFuY2Ugb2YgZWFjaCBwaXhlbCB3aWxsIHJlZHVjZSBpdHMgb3BhY2l0eSB0byBzaW11bGF0ZSB0aGUgYmVoYXZpb3VyIG9mIG1vc3QgcGh5c2ljYWwgbWF0ZXJpYWxzLlxyXG4gICAgICogSWYgdHJ1ZSwgbm8gZXh0cmEgZWZmZWN0cyBhcmUgYXBwbGllZCB0byB0cmFuc3BhcmVudCBwaXhlbHMuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB0cmFuc3BhcmVuY3lBc0NvdmVyYWdlID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIGlmIHRoZSBsb2FkZXIgc2hvdWxkIHVzZSByYW5nZSByZXF1ZXN0cyB3aGVuIGxvYWQgYmluYXJ5IGdsVEYgZmlsZXMgZnJvbSBIVFRQLlxyXG4gICAgICogRW5hYmxpbmcgd2lsbCBkaXNhYmxlIG9mZmxpbmUgc3VwcG9ydCBhbmQgZ2xURiB2YWxpZGF0b3IuXHJcbiAgICAgKiBEZWZhdWx0cyB0byBmYWxzZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHVzZVJhbmdlUmVxdWVzdHMgPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgaWYgdGhlIGxvYWRlciBzaG91bGQgY3JlYXRlIGluc3RhbmNlcyB3aGVuIG11bHRpcGxlIGdsVEYgbm9kZXMgcG9pbnQgdG8gdGhlIHNhbWUgZ2xURiBtZXNoLiBEZWZhdWx0cyB0byB0cnVlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY3JlYXRlSW5zdGFuY2VzID0gdHJ1ZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgaWYgdGhlIGxvYWRlciBzaG91bGQgYWx3YXlzIGNvbXB1dGUgdGhlIGJvdW5kaW5nIGJveGVzIG9mIG1lc2hlcyBhbmQgbm90IHVzZSB0aGUgbWluL21heCB2YWx1ZXMgZnJvbSB0aGUgcG9zaXRpb24gYWNjZXNzb3IuIERlZmF1bHRzIHRvIGZhbHNlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWx3YXlzQ29tcHV0ZUJvdW5kaW5nQm94ID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJZiB0cnVlLCBsb2FkIGFsbCBtYXRlcmlhbHMgZGVmaW5lZCBpbiB0aGUgZmlsZSwgZXZlbiBpZiBub3QgdXNlZCBieSBhbnkgbWVzaC4gRGVmYXVsdHMgdG8gZmFsc2UuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkQWxsTWF0ZXJpYWxzID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJZiB0cnVlLCBsb2FkIG9ubHkgdGhlIG1hdGVyaWFscyBkZWZpbmVkIGluIHRoZSBmaWxlLiBEZWZhdWx0cyB0byBmYWxzZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWRPbmx5TWF0ZXJpYWxzID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJZiB0cnVlLCBkbyBub3QgbG9hZCBhbnkgbWF0ZXJpYWxzIGRlZmluZWQgaW4gdGhlIGZpbGUuIERlZmF1bHRzIHRvIGZhbHNlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2tpcE1hdGVyaWFscyA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogSWYgdHJ1ZSwgbG9hZCB0aGUgY29sb3IgKGdhbW1hIGVuY29kZWQpIHRleHR1cmVzIGludG8gc1JHQiBidWZmZXJzIChpZiBzdXBwb3J0ZWQgYnkgdGhlIEdQVSksIHdoaWNoIHdpbGwgeWllbGQgbW9yZSBhY2N1cmF0ZSByZXN1bHRzIHdoZW4gc2FtcGxpbmcgdGhlIHRleHR1cmUuIERlZmF1bHRzIHRvIHRydWUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB1c2VTUkdCQnVmZmVycyA9IHRydWU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBXaGVuIGxvYWRpbmcgZ2xURiBhbmltYXRpb25zLCB3aGljaCBhcmUgZGVmaW5lZCBpbiBzZWNvbmRzLCB0YXJnZXQgdGhlbSB0byB0aGlzIEZQUy4gRGVmYXVsdHMgdG8gNjAuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB0YXJnZXRGcHMgPSA2MDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgaWYgdGhlIGxvYWRlciBzaG91bGQgYWx3YXlzIGNvbXB1dGUgdGhlIG5lYXJlc3QgY29tbW9uIGFuY2VzdG9yIG9mIHRoZSBza2VsZXRvbiBqb2ludHMgaW5zdGVhZCBvZiB1c2luZyBgc2tpbi5za2VsZXRvbmAuIERlZmF1bHRzIHRvIGZhbHNlLlxyXG4gICAgICogU2V0IHRoaXMgdG8gdHJ1ZSBpZiBsb2FkaW5nIGFzc2V0cyB3aXRoIGludmFsaWQgYHNraW4uc2tlbGV0b25gIHZhbHVlcy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGFsd2F5c0NvbXB1dGVTa2VsZXRvblJvb3ROb2RlID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGdW5jdGlvbiBjYWxsZWQgYmVmb3JlIGxvYWRpbmcgYSB1cmwgcmVmZXJlbmNlZCBieSB0aGUgYXNzZXQuXHJcbiAgICAgKiBAcGFyYW0gdXJsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwcmVwcm9jZXNzVXJsQXN5bmMgPSAodXJsOiBzdHJpbmcpID0+IFByb21pc2UucmVzb2x2ZSh1cmwpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogT2JzZXJ2YWJsZSByYWlzZWQgd2hlbiB0aGUgbG9hZGVyIGNyZWF0ZXMgYSBtZXNoIGFmdGVyIHBhcnNpbmcgdGhlIGdsVEYgcHJvcGVydGllcyBvZiB0aGUgbWVzaC5cclxuICAgICAqIE5vdGUgdGhhdCB0aGUgb2JzZXJ2YWJsZSBpcyByYWlzZWQgYXMgc29vbiBhcyB0aGUgbWVzaCBvYmplY3QgaXMgY3JlYXRlZCwgbWVhbmluZyBzb21lIGRhdGEgbWF5IG5vdCBoYXZlIGJlZW4gc2V0dXAgeWV0IGZvciB0aGlzIG1lc2ggKHZlcnRleCBkYXRhLCBtb3JwaCB0YXJnZXRzLCBtYXRlcmlhbCwgLi4uKVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgb25NZXNoTG9hZGVkT2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlPEFic3RyYWN0TWVzaD4oKTtcclxuXHJcbiAgICBwcml2YXRlIF9vbk1lc2hMb2FkZWRPYnNlcnZlcjogTnVsbGFibGU8T2JzZXJ2ZXI8QWJzdHJhY3RNZXNoPj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsYmFjayByYWlzZWQgd2hlbiB0aGUgbG9hZGVyIGNyZWF0ZXMgYSBtZXNoIGFmdGVyIHBhcnNpbmcgdGhlIGdsVEYgcHJvcGVydGllcyBvZiB0aGUgbWVzaC5cclxuICAgICAqIE5vdGUgdGhhdCB0aGUgY2FsbGJhY2sgaXMgY2FsbGVkIGFzIHNvb24gYXMgdGhlIG1lc2ggb2JqZWN0IGlzIGNyZWF0ZWQsIG1lYW5pbmcgc29tZSBkYXRhIG1heSBub3QgaGF2ZSBiZWVuIHNldHVwIHlldCBmb3IgdGhpcyBtZXNoICh2ZXJ0ZXggZGF0YSwgbW9ycGggdGFyZ2V0cywgbWF0ZXJpYWwsIC4uLilcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBvbk1lc2hMb2FkZWQoY2FsbGJhY2s6IChtZXNoOiBBYnN0cmFjdE1lc2gpID0+IHZvaWQpIHtcclxuICAgICAgICBpZiAodGhpcy5fb25NZXNoTG9hZGVkT2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5vbk1lc2hMb2FkZWRPYnNlcnZhYmxlLnJlbW92ZSh0aGlzLl9vbk1lc2hMb2FkZWRPYnNlcnZlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX29uTWVzaExvYWRlZE9ic2VydmVyID0gdGhpcy5vbk1lc2hMb2FkZWRPYnNlcnZhYmxlLmFkZChjYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsYmFjayByYWlzZWQgd2hlbiB0aGUgbG9hZGVyIGNyZWF0ZXMgYSBza2luIGFmdGVyIHBhcnNpbmcgdGhlIGdsVEYgcHJvcGVydGllcyBvZiB0aGUgc2tpbiBub2RlLlxyXG4gICAgICogQHNlZSBodHRwczovL2RvYy5iYWJ5bG9uanMuY29tL2ZlYXR1cmVzL2ZlYXR1cmVzRGVlcERpdmUvaW1wb3J0ZXJzL2dsVEYvZ2xURlNraW5uaW5nI2lnbm9yaW5nLXRoZS10cmFuc2Zvcm0tb2YtdGhlLXNraW5uZWQtbWVzaFxyXG4gICAgICogQHBhcmFtIG5vZGUgLSB0aGUgdHJhbnNmb3JtIG5vZGUgdGhhdCBjb3JyZXNwb25kcyB0byB0aGUgb3JpZ2luYWwgZ2xURiBza2luIG5vZGUgdXNlZCBmb3IgYW5pbWF0aW9uc1xyXG4gICAgICogQHBhcmFtIHNraW5uZWROb2RlIC0gdGhlIHRyYW5zZm9ybSBub2RlIHRoYXQgaXMgdGhlIHNraW5uZWQgbWVzaCBpdHNlbGYgb3IgdGhlIHBhcmVudCBvZiB0aGUgc2tpbm5lZCBtZXNoZXNcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG9uU2tpbkxvYWRlZE9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZTx7IG5vZGU6IFRyYW5zZm9ybU5vZGU7IHNraW5uZWROb2RlOiBUcmFuc2Zvcm1Ob2RlIH0+KCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPYnNlcnZhYmxlIHJhaXNlZCB3aGVuIHRoZSBsb2FkZXIgY3JlYXRlcyBhIHRleHR1cmUgYWZ0ZXIgcGFyc2luZyB0aGUgZ2xURiBwcm9wZXJ0aWVzIG9mIHRoZSB0ZXh0dXJlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgb25UZXh0dXJlTG9hZGVkT2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlPEJhc2VUZXh0dXJlPigpO1xyXG5cclxuICAgIHByaXZhdGUgX29uVGV4dHVyZUxvYWRlZE9ic2VydmVyOiBOdWxsYWJsZTxPYnNlcnZlcjxCYXNlVGV4dHVyZT4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGJhY2sgcmFpc2VkIHdoZW4gdGhlIGxvYWRlciBjcmVhdGVzIGEgdGV4dHVyZSBhZnRlciBwYXJzaW5nIHRoZSBnbFRGIHByb3BlcnRpZXMgb2YgdGhlIHRleHR1cmUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgb25UZXh0dXJlTG9hZGVkKGNhbGxiYWNrOiAodGV4dHVyZTogQmFzZVRleHR1cmUpID0+IHZvaWQpIHtcclxuICAgICAgICBpZiAodGhpcy5fb25UZXh0dXJlTG9hZGVkT2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5vblRleHR1cmVMb2FkZWRPYnNlcnZhYmxlLnJlbW92ZSh0aGlzLl9vblRleHR1cmVMb2FkZWRPYnNlcnZlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX29uVGV4dHVyZUxvYWRlZE9ic2VydmVyID0gdGhpcy5vblRleHR1cmVMb2FkZWRPYnNlcnZhYmxlLmFkZChjYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPYnNlcnZhYmxlIHJhaXNlZCB3aGVuIHRoZSBsb2FkZXIgY3JlYXRlcyBhIG1hdGVyaWFsIGFmdGVyIHBhcnNpbmcgdGhlIGdsVEYgcHJvcGVydGllcyBvZiB0aGUgbWF0ZXJpYWwuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBvbk1hdGVyaWFsTG9hZGVkT2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlPE1hdGVyaWFsPigpO1xyXG5cclxuICAgIHByaXZhdGUgX29uTWF0ZXJpYWxMb2FkZWRPYnNlcnZlcjogTnVsbGFibGU8T2JzZXJ2ZXI8TWF0ZXJpYWw+PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxiYWNrIHJhaXNlZCB3aGVuIHRoZSBsb2FkZXIgY3JlYXRlcyBhIG1hdGVyaWFsIGFmdGVyIHBhcnNpbmcgdGhlIGdsVEYgcHJvcGVydGllcyBvZiB0aGUgbWF0ZXJpYWwuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgb25NYXRlcmlhbExvYWRlZChjYWxsYmFjazogKG1hdGVyaWFsOiBNYXRlcmlhbCkgPT4gdm9pZCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9vbk1hdGVyaWFsTG9hZGVkT2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5vbk1hdGVyaWFsTG9hZGVkT2JzZXJ2YWJsZS5yZW1vdmUodGhpcy5fb25NYXRlcmlhbExvYWRlZE9ic2VydmVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fb25NYXRlcmlhbExvYWRlZE9ic2VydmVyID0gdGhpcy5vbk1hdGVyaWFsTG9hZGVkT2JzZXJ2YWJsZS5hZGQoY2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT2JzZXJ2YWJsZSByYWlzZWQgd2hlbiB0aGUgbG9hZGVyIGNyZWF0ZXMgYSBjYW1lcmEgYWZ0ZXIgcGFyc2luZyB0aGUgZ2xURiBwcm9wZXJ0aWVzIG9mIHRoZSBjYW1lcmEuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBvbkNhbWVyYUxvYWRlZE9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZTxDYW1lcmE+KCk7XHJcblxyXG4gICAgcHJpdmF0ZSBfb25DYW1lcmFMb2FkZWRPYnNlcnZlcjogTnVsbGFibGU8T2JzZXJ2ZXI8Q2FtZXJhPj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsYmFjayByYWlzZWQgd2hlbiB0aGUgbG9hZGVyIGNyZWF0ZXMgYSBjYW1lcmEgYWZ0ZXIgcGFyc2luZyB0aGUgZ2xURiBwcm9wZXJ0aWVzIG9mIHRoZSBjYW1lcmEuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgb25DYW1lcmFMb2FkZWQoY2FsbGJhY2s6IChjYW1lcmE6IENhbWVyYSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9vbkNhbWVyYUxvYWRlZE9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25DYW1lcmFMb2FkZWRPYnNlcnZhYmxlLnJlbW92ZSh0aGlzLl9vbkNhbWVyYUxvYWRlZE9ic2VydmVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fb25DYW1lcmFMb2FkZWRPYnNlcnZlciA9IHRoaXMub25DYW1lcmFMb2FkZWRPYnNlcnZhYmxlLmFkZChjYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPYnNlcnZhYmxlIHJhaXNlZCB3aGVuIHRoZSBhc3NldCBpcyBjb21wbGV0ZWx5IGxvYWRlZCwgaW1tZWRpYXRlbHkgYmVmb3JlIHRoZSBsb2FkZXIgaXMgZGlzcG9zZWQuXHJcbiAgICAgKiBGb3IgYXNzZXRzIHdpdGggTE9EcywgcmFpc2VkIHdoZW4gYWxsIG9mIHRoZSBMT0RzIGFyZSBjb21wbGV0ZS5cclxuICAgICAqIEZvciBhc3NldHMgd2l0aG91dCBMT0RzLCByYWlzZWQgd2hlbiB0aGUgbW9kZWwgaXMgY29tcGxldGUsIGltbWVkaWF0ZWx5IGFmdGVyIHRoZSBsb2FkZXIgcmVzb2x2ZXMgdGhlIHJldHVybmVkIHByb21pc2UuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBvbkNvbXBsZXRlT2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlPHZvaWQ+KCk7XHJcblxyXG4gICAgcHJpdmF0ZSBfb25Db21wbGV0ZU9ic2VydmVyOiBOdWxsYWJsZTxPYnNlcnZlcjx2b2lkPj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsYmFjayByYWlzZWQgd2hlbiB0aGUgYXNzZXQgaXMgY29tcGxldGVseSBsb2FkZWQsIGltbWVkaWF0ZWx5IGJlZm9yZSB0aGUgbG9hZGVyIGlzIGRpc3Bvc2VkLlxyXG4gICAgICogRm9yIGFzc2V0cyB3aXRoIExPRHMsIHJhaXNlZCB3aGVuIGFsbCBvZiB0aGUgTE9EcyBhcmUgY29tcGxldGUuXHJcbiAgICAgKiBGb3IgYXNzZXRzIHdpdGhvdXQgTE9EcywgcmFpc2VkIHdoZW4gdGhlIG1vZGVsIGlzIGNvbXBsZXRlLCBpbW1lZGlhdGVseSBhZnRlciB0aGUgbG9hZGVyIHJlc29sdmVzIHRoZSByZXR1cm5lZCBwcm9taXNlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IG9uQ29tcGxldGUoY2FsbGJhY2s6ICgpID0+IHZvaWQpIHtcclxuICAgICAgICBpZiAodGhpcy5fb25Db21wbGV0ZU9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25Db21wbGV0ZU9ic2VydmFibGUucmVtb3ZlKHRoaXMuX29uQ29tcGxldGVPYnNlcnZlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX29uQ29tcGxldGVPYnNlcnZlciA9IHRoaXMub25Db21wbGV0ZU9ic2VydmFibGUuYWRkKGNhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE9ic2VydmFibGUgcmFpc2VkIHdoZW4gYW4gZXJyb3Igb2NjdXJzLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgb25FcnJvck9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZTxhbnk+KCk7XHJcblxyXG4gICAgcHJpdmF0ZSBfb25FcnJvck9ic2VydmVyOiBOdWxsYWJsZTxPYnNlcnZlcjxhbnk+PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxiYWNrIHJhaXNlZCB3aGVuIGFuIGVycm9yIG9jY3Vycy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBvbkVycm9yKGNhbGxiYWNrOiAocmVhc29uOiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICBpZiAodGhpcy5fb25FcnJvck9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25FcnJvck9ic2VydmFibGUucmVtb3ZlKHRoaXMuX29uRXJyb3JPYnNlcnZlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX29uRXJyb3JPYnNlcnZlciA9IHRoaXMub25FcnJvck9ic2VydmFibGUuYWRkKGNhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE9ic2VydmFibGUgcmFpc2VkIGFmdGVyIHRoZSBsb2FkZXIgaXMgZGlzcG9zZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBvbkRpc3Bvc2VPYnNlcnZhYmxlID0gbmV3IE9ic2VydmFibGU8dm9pZD4oKTtcclxuXHJcbiAgICBwcml2YXRlIF9vbkRpc3Bvc2VPYnNlcnZlcjogTnVsbGFibGU8T2JzZXJ2ZXI8dm9pZD4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGJhY2sgcmFpc2VkIGFmdGVyIHRoZSBsb2FkZXIgaXMgZGlzcG9zZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgb25EaXNwb3NlKGNhbGxiYWNrOiAoKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX29uRGlzcG9zZU9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25EaXNwb3NlT2JzZXJ2YWJsZS5yZW1vdmUodGhpcy5fb25EaXNwb3NlT2JzZXJ2ZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9vbkRpc3Bvc2VPYnNlcnZlciA9IHRoaXMub25EaXNwb3NlT2JzZXJ2YWJsZS5hZGQoY2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT2JzZXJ2YWJsZSByYWlzZWQgYWZ0ZXIgYSBsb2FkZXIgZXh0ZW5zaW9uIGlzIGNyZWF0ZWQuXHJcbiAgICAgKiBTZXQgYWRkaXRpb25hbCBvcHRpb25zIGZvciBhIGxvYWRlciBleHRlbnNpb24gaW4gdGhpcyBldmVudC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG9uRXh0ZW5zaW9uTG9hZGVkT2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlPElHTFRGTG9hZGVyRXh0ZW5zaW9uPigpO1xyXG5cclxuICAgIHByaXZhdGUgX29uRXh0ZW5zaW9uTG9hZGVkT2JzZXJ2ZXI6IE51bGxhYmxlPE9ic2VydmVyPElHTFRGTG9hZGVyRXh0ZW5zaW9uPj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsYmFjayByYWlzZWQgYWZ0ZXIgYSBsb2FkZXIgZXh0ZW5zaW9uIGlzIGNyZWF0ZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgb25FeHRlbnNpb25Mb2FkZWQoY2FsbGJhY2s6IChleHRlbnNpb246IElHTFRGTG9hZGVyRXh0ZW5zaW9uKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX29uRXh0ZW5zaW9uTG9hZGVkT2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkV4dGVuc2lvbkxvYWRlZE9ic2VydmFibGUucmVtb3ZlKHRoaXMuX29uRXh0ZW5zaW9uTG9hZGVkT2JzZXJ2ZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9vbkV4dGVuc2lvbkxvYWRlZE9ic2VydmVyID0gdGhpcy5vbkV4dGVuc2lvbkxvYWRlZE9ic2VydmFibGUuYWRkKGNhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgaWYgdGhlIGxvYWRlciBsb2dnaW5nIGlzIGVuYWJsZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgbG9nZ2luZ0VuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvZ2dpbmdFbmFibGVkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgbG9nZ2luZ0VuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAodGhpcy5fbG9nZ2luZ0VuYWJsZWQgPT09IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2xvZ2dpbmdFbmFibGVkID0gdmFsdWU7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9sb2dnaW5nRW5hYmxlZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2cgPSB0aGlzLl9sb2dFbmFibGVkO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZyA9IHRoaXMuX2xvZ0Rpc2FibGVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgaWYgdGhlIGxvYWRlciBzaG91bGQgY2FwdHVyZSBwZXJmb3JtYW5jZSBjb3VudGVycy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBjYXB0dXJlUGVyZm9ybWFuY2VDb3VudGVycygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY2FwdHVyZVBlcmZvcm1hbmNlQ291bnRlcnM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBjYXB0dXJlUGVyZm9ybWFuY2VDb3VudGVycyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIGlmICh0aGlzLl9jYXB0dXJlUGVyZm9ybWFuY2VDb3VudGVycyA9PT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fY2FwdHVyZVBlcmZvcm1hbmNlQ291bnRlcnMgPSB2YWx1ZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2NhcHR1cmVQZXJmb3JtYW5jZUNvdW50ZXJzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0YXJ0UGVyZm9ybWFuY2VDb3VudGVyID0gdGhpcy5fc3RhcnRQZXJmb3JtYW5jZUNvdW50ZXJFbmFibGVkO1xyXG4gICAgICAgICAgICB0aGlzLl9lbmRQZXJmb3JtYW5jZUNvdW50ZXIgPSB0aGlzLl9lbmRQZXJmb3JtYW5jZUNvdW50ZXJFbmFibGVkO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0YXJ0UGVyZm9ybWFuY2VDb3VudGVyID0gdGhpcy5fc3RhcnRQZXJmb3JtYW5jZUNvdW50ZXJEaXNhYmxlZDtcclxuICAgICAgICAgICAgdGhpcy5fZW5kUGVyZm9ybWFuY2VDb3VudGVyID0gdGhpcy5fZW5kUGVyZm9ybWFuY2VDb3VudGVyRGlzYWJsZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyBpZiB0aGUgbG9hZGVyIHNob3VsZCB2YWxpZGF0ZSB0aGUgYXNzZXQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB2YWxpZGF0ZSA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogT2JzZXJ2YWJsZSByYWlzZWQgYWZ0ZXIgdmFsaWRhdGlvbiB3aGVuIHZhbGlkYXRlIGlzIHNldCB0byB0cnVlLiBUaGUgZXZlbnQgZGF0YSBpcyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgb25WYWxpZGF0ZWRPYnNlcnZhYmxlID0gbmV3IE9ic2VydmFibGU8R0xURjIuSUdMVEZWYWxpZGF0aW9uUmVzdWx0cz4oKTtcclxuXHJcbiAgICBwcml2YXRlIF9vblZhbGlkYXRlZE9ic2VydmVyOiBOdWxsYWJsZTxPYnNlcnZlcjxHTFRGMi5JR0xURlZhbGlkYXRpb25SZXN1bHRzPj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsYmFjayByYWlzZWQgYWZ0ZXIgYSBsb2FkZXIgZXh0ZW5zaW9uIGlzIGNyZWF0ZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgb25WYWxpZGF0ZWQoY2FsbGJhY2s6IChyZXN1bHRzOiBHTFRGMi5JR0xURlZhbGlkYXRpb25SZXN1bHRzKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX29uVmFsaWRhdGVkT2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5vblZhbGlkYXRlZE9ic2VydmFibGUucmVtb3ZlKHRoaXMuX29uVmFsaWRhdGVkT2JzZXJ2ZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9vblZhbGlkYXRlZE9ic2VydmVyID0gdGhpcy5vblZhbGlkYXRlZE9ic2VydmFibGUuYWRkKGNhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9sb2FkZXI6IE51bGxhYmxlPElHTFRGTG9hZGVyPiA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9zdGF0ZTogTnVsbGFibGU8R0xURkxvYWRlclN0YXRlPiA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9wcm9ncmVzc0NhbGxiYWNrPzogKGV2ZW50OiBJU2NlbmVMb2FkZXJQcm9ncmVzc0V2ZW50KSA9PiB2b2lkO1xyXG4gICAgcHJpdmF0ZSBfcmVxdWVzdHMgPSBuZXcgQXJyYXk8SUZpbGVSZXF1ZXN0SW5mbz4oKTtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfTWFnaWNCYXNlNjRFbmNvZGVkID0gXCJaMnhVUmdcIjsgLy8gXCJnbFRGXCIgYmFzZTY0IGVuY29kZWQgKHdpdGhvdXQgdGhlIHF1b3RlcyEpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBOYW1lIG9mIHRoZSBsb2FkZXIgKFwiZ2x0ZlwiKVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbmFtZSA9IFwiZ2x0ZlwiO1xyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBleHRlbnNpb25zOiBJU2NlbmVMb2FkZXJQbHVnaW5FeHRlbnNpb25zID0ge1xyXG4gICAgICAgIFwiLmdsdGZcIjogeyBpc0JpbmFyeTogZmFsc2UgfSxcclxuICAgICAgICBcIi5nbGJcIjogeyBpc0JpbmFyeTogdHJ1ZSB9LFxyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERpc3Bvc2VzIHRoZSBsb2FkZXIsIHJlbGVhc2VzIHJlc291cmNlcyBkdXJpbmcgbG9hZCwgYW5kIGNhbmNlbHMgYW55IG91dHN0YW5kaW5nIHJlcXVlc3RzLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5fbG9hZGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvYWRlci5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvYWRlciA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IHJlcXVlc3Qgb2YgdGhpcy5fcmVxdWVzdHMpIHtcclxuICAgICAgICAgICAgcmVxdWVzdC5hYm9ydCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fcmVxdWVzdHMubGVuZ3RoID0gMDtcclxuXHJcbiAgICAgICAgZGVsZXRlIHRoaXMuX3Byb2dyZXNzQ2FsbGJhY2s7XHJcblxyXG4gICAgICAgIHRoaXMucHJlcHJvY2Vzc1VybEFzeW5jID0gKHVybCkgPT4gUHJvbWlzZS5yZXNvbHZlKHVybCk7XHJcblxyXG4gICAgICAgIHRoaXMub25NZXNoTG9hZGVkT2JzZXJ2YWJsZS5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMub25Ta2luTG9hZGVkT2JzZXJ2YWJsZS5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMub25UZXh0dXJlTG9hZGVkT2JzZXJ2YWJsZS5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMub25NYXRlcmlhbExvYWRlZE9ic2VydmFibGUuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLm9uQ2FtZXJhTG9hZGVkT2JzZXJ2YWJsZS5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMub25Db21wbGV0ZU9ic2VydmFibGUuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLm9uRXh0ZW5zaW9uTG9hZGVkT2JzZXJ2YWJsZS5jbGVhcigpO1xyXG5cclxuICAgICAgICB0aGlzLm9uRGlzcG9zZU9ic2VydmFibGUubm90aWZ5T2JzZXJ2ZXJzKHVuZGVmaW5lZCk7XHJcbiAgICAgICAgdGhpcy5vbkRpc3Bvc2VPYnNlcnZhYmxlLmNsZWFyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWRGaWxlKFxyXG4gICAgICAgIHNjZW5lOiBTY2VuZSxcclxuICAgICAgICBmaWxlT3JVcmw6IEZpbGUgfCBzdHJpbmcgfCBBcnJheUJ1ZmZlclZpZXcsXHJcbiAgICAgICAgcm9vdFVybDogc3RyaW5nLFxyXG4gICAgICAgIG9uU3VjY2VzczogKGRhdGE6IGFueSwgcmVzcG9uc2VVUkw/OiBzdHJpbmcpID0+IHZvaWQsXHJcbiAgICAgICAgb25Qcm9ncmVzcz86IChldjogSVNjZW5lTG9hZGVyUHJvZ3Jlc3NFdmVudCkgPT4gdm9pZCxcclxuICAgICAgICB1c2VBcnJheUJ1ZmZlcj86IGJvb2xlYW4sXHJcbiAgICAgICAgb25FcnJvcj86IChyZXF1ZXN0PzogV2ViUmVxdWVzdCwgZXhjZXB0aW9uPzogTG9hZEZpbGVFcnJvcikgPT4gdm9pZCxcclxuICAgICAgICBuYW1lPzogc3RyaW5nXHJcbiAgICApOiBOdWxsYWJsZTxJRmlsZVJlcXVlc3Q+IHtcclxuICAgICAgICBpZiAoQXJyYXlCdWZmZXIuaXNWaWV3KGZpbGVPclVybCkpIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9hZEJpbmFyeShzY2VuZSwgZmlsZU9yVXJsIGFzIEFycmF5QnVmZmVyVmlldywgcm9vdFVybCwgb25TdWNjZXNzLCBvbkVycm9yLCBuYW1lKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9wcm9ncmVzc0NhbGxiYWNrID0gb25Qcm9ncmVzcztcclxuXHJcbiAgICAgICAgY29uc3QgZmlsZU5hbWUgPSAoZmlsZU9yVXJsIGFzIEZpbGUpLm5hbWUgfHwgVG9vbHMuR2V0RmlsZW5hbWUoZmlsZU9yVXJsIGFzIHN0cmluZyk7XHJcblxyXG4gICAgICAgIGlmICh1c2VBcnJheUJ1ZmZlcikge1xyXG4gICAgICAgICAgICBpZiAodGhpcy51c2VSYW5nZVJlcXVlc3RzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52YWxpZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZ2dlci5XYXJuKFwiZ2xURiB2YWxpZGF0aW9uIGlzIG5vdCBzdXBwb3J0ZWQgd2hlbiByYW5nZSByZXF1ZXN0cyBhcmUgZW5hYmxlZFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlUmVxdWVzdDogSUZpbGVSZXF1ZXN0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGFib3J0OiAoKSA9PiB7fSxcclxuICAgICAgICAgICAgICAgICAgICBvbkNvbXBsZXRlT2JzZXJ2YWJsZTogbmV3IE9ic2VydmFibGU8SUZpbGVSZXF1ZXN0PigpLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhQnVmZmVyID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlYWRBc3luYzogKGJ5dGVPZmZzZXQ6IG51bWJlciwgYnl0ZUxlbmd0aDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxBcnJheUJ1ZmZlclZpZXc+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRGaWxlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjZW5lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVPclVybCBhcyBGaWxlIHwgc3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobmV3IFVpbnQ4QXJyYXkoZGF0YSBhcyBBcnJheUJ1ZmZlcikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh3ZWJSZXF1ZXN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlYlJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihcIlJhbmdlXCIsIGBieXRlcz0ke2J5dGVPZmZzZXR9LSR7Ynl0ZU9mZnNldCArIGJ5dGVMZW5ndGggLSAxfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgYnl0ZUxlbmd0aDogMCxcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5fdW5wYWNrQmluYXJ5QXN5bmMobmV3IERhdGFSZWFkZXIoZGF0YUJ1ZmZlcikpLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgKGxvYWRlckRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZVJlcXVlc3Qub25Db21wbGV0ZU9ic2VydmFibGUubm90aWZ5T2JzZXJ2ZXJzKGZpbGVSZXF1ZXN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25TdWNjZXNzKGxvYWRlckRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgb25FcnJvciA/IChlcnJvcikgPT4gb25FcnJvcih1bmRlZmluZWQsIGVycm9yKSA6IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmlsZVJlcXVlc3Q7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9sb2FkRmlsZShcclxuICAgICAgICAgICAgICAgIHNjZW5lLFxyXG4gICAgICAgICAgICAgICAgZmlsZU9yVXJsIGFzIEZpbGUgfCBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3ZhbGlkYXRlKHNjZW5lLCBuZXcgVWludDhBcnJheShkYXRhIGFzIEFycmF5QnVmZmVyKSwgcm9vdFVybCwgZmlsZU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VucGFja0JpbmFyeUFzeW5jKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgRGF0YVJlYWRlcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkQXN5bmM6IChieXRlT2Zmc2V0LCBieXRlTGVuZ3RoKSA9PiByZWFkQXN5bmMoZGF0YSBhcyBBcnJheUJ1ZmZlciwgYnl0ZU9mZnNldCwgYnl0ZUxlbmd0aCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBieXRlTGVuZ3RoOiAoZGF0YSBhcyBBcnJheUJ1ZmZlcikuYnl0ZUxlbmd0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICApLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChsb2FkZXJEYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3MobG9hZGVyRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRXJyb3IgPyAoZXJyb3IpID0+IG9uRXJyb3IodW5kZWZpbmVkLCBlcnJvcikgOiB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHRydWUsXHJcbiAgICAgICAgICAgICAgICBvbkVycm9yXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fbG9hZEZpbGUoXHJcbiAgICAgICAgICAgIHNjZW5lLFxyXG4gICAgICAgICAgICBmaWxlT3JVcmwgYXMgRmlsZSB8IHN0cmluZyxcclxuICAgICAgICAgICAgKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3ZhbGlkYXRlKHNjZW5lLCBuZXcgVWludDhBcnJheShkYXRhIGFzIEFycmF5QnVmZmVyKSwgcm9vdFVybCwgZmlsZU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgb25TdWNjZXNzKHsganNvbjogdGhpcy5fcGFyc2VKc29uKGRhdGEgYXMgc3RyaW5nKSB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdXNlQXJyYXlCdWZmZXIsXHJcbiAgICAgICAgICAgIG9uRXJyb3JcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2xvYWRCaW5hcnkoXHJcbiAgICAgICAgc2NlbmU6IFNjZW5lLFxyXG4gICAgICAgIGRhdGE6IEFycmF5QnVmZmVyVmlldyxcclxuICAgICAgICByb290VXJsOiBzdHJpbmcsXHJcbiAgICAgICAgb25TdWNjZXNzOiAoZGF0YTogYW55LCByZXNwb25zZVVSTD86IHN0cmluZykgPT4gdm9pZCxcclxuICAgICAgICBvbkVycm9yPzogKHJlcXVlc3Q/OiBXZWJSZXF1ZXN0LCBleGNlcHRpb24/OiBMb2FkRmlsZUVycm9yKSA9PiB2b2lkLFxyXG4gICAgICAgIGZpbGVOYW1lPzogc3RyaW5nXHJcbiAgICApOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl92YWxpZGF0ZShzY2VuZSwgZGF0YSwgcm9vdFVybCwgZmlsZU5hbWUpO1xyXG4gICAgICAgIHRoaXMuX3VucGFja0JpbmFyeUFzeW5jKFxyXG4gICAgICAgICAgICBuZXcgRGF0YVJlYWRlcih7XHJcbiAgICAgICAgICAgICAgICByZWFkQXN5bmM6IChieXRlT2Zmc2V0LCBieXRlTGVuZ3RoKSA9PiByZWFkVmlld0FzeW5jKGRhdGEsIGJ5dGVPZmZzZXQsIGJ5dGVMZW5ndGgpLFxyXG4gICAgICAgICAgICAgICAgYnl0ZUxlbmd0aDogZGF0YS5ieXRlTGVuZ3RoLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICkudGhlbihcclxuICAgICAgICAgICAgKGxvYWRlckRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIG9uU3VjY2Vzcyhsb2FkZXJEYXRhKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25FcnJvciA/IChlcnJvcikgPT4gb25FcnJvcih1bmRlZmluZWQsIGVycm9yKSA6IHVuZGVmaW5lZFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGltcG9ydE1lc2hBc3luYyhcclxuICAgICAgICBtZXNoZXNOYW1lczogYW55LFxyXG4gICAgICAgIHNjZW5lOiBTY2VuZSxcclxuICAgICAgICBkYXRhOiBhbnksXHJcbiAgICAgICAgcm9vdFVybDogc3RyaW5nLFxyXG4gICAgICAgIG9uUHJvZ3Jlc3M/OiAoZXZlbnQ6IElTY2VuZUxvYWRlclByb2dyZXNzRXZlbnQpID0+IHZvaWQsXHJcbiAgICAgICAgZmlsZU5hbWU/OiBzdHJpbmdcclxuICAgICk6IFByb21pc2U8SVNjZW5lTG9hZGVyQXN5bmNSZXN1bHQ+IHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub25QYXJzZWRPYnNlcnZhYmxlLm5vdGlmeU9ic2VydmVycyhkYXRhKTtcclxuICAgICAgICAgICAgdGhpcy5vblBhcnNlZE9ic2VydmFibGUuY2xlYXIoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2xvZyhgTG9hZGluZyAke2ZpbGVOYW1lIHx8IFwiXCJ9YCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvYWRlciA9IHRoaXMuX2dldExvYWRlcihkYXRhKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRlci5pbXBvcnRNZXNoQXN5bmMobWVzaGVzTmFtZXMsIHNjZW5lLCBudWxsLCBkYXRhLCByb290VXJsLCBvblByb2dyZXNzLCBmaWxlTmFtZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWRBc3luYyhzY2VuZTogU2NlbmUsIGRhdGE6IGFueSwgcm9vdFVybDogc3RyaW5nLCBvblByb2dyZXNzPzogKGV2ZW50OiBJU2NlbmVMb2FkZXJQcm9ncmVzc0V2ZW50KSA9PiB2b2lkLCBmaWxlTmFtZT86IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vblBhcnNlZE9ic2VydmFibGUubm90aWZ5T2JzZXJ2ZXJzKGRhdGEpO1xyXG4gICAgICAgICAgICB0aGlzLm9uUGFyc2VkT2JzZXJ2YWJsZS5jbGVhcigpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fbG9nKGBMb2FkaW5nICR7ZmlsZU5hbWUgfHwgXCJcIn1gKTtcclxuICAgICAgICAgICAgdGhpcy5fbG9hZGVyID0gdGhpcy5fZ2V0TG9hZGVyKGRhdGEpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbG9hZGVyLmxvYWRBc3luYyhzY2VuZSwgZGF0YSwgcm9vdFVybCwgb25Qcm9ncmVzcywgZmlsZU5hbWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkQXNzZXRDb250YWluZXJBc3luYyhzY2VuZTogU2NlbmUsIGRhdGE6IGFueSwgcm9vdFVybDogc3RyaW5nLCBvblByb2dyZXNzPzogKGV2ZW50OiBJU2NlbmVMb2FkZXJQcm9ncmVzc0V2ZW50KSA9PiB2b2lkLCBmaWxlTmFtZT86IHN0cmluZyk6IFByb21pc2U8QXNzZXRDb250YWluZXI+IHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub25QYXJzZWRPYnNlcnZhYmxlLm5vdGlmeU9ic2VydmVycyhkYXRhKTtcclxuICAgICAgICAgICAgdGhpcy5vblBhcnNlZE9ic2VydmFibGUuY2xlYXIoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2xvZyhgTG9hZGluZyAke2ZpbGVOYW1lIHx8IFwiXCJ9YCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvYWRlciA9IHRoaXMuX2dldExvYWRlcihkYXRhKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFByZXBhcmUgdGhlIGFzc2V0IGNvbnRhaW5lci5cclxuICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gbmV3IEFzc2V0Q29udGFpbmVyKHNjZW5lKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEdldCBtYXRlcmlhbHMvdGV4dHVyZXMgd2hlbiBsb2FkaW5nIHRvIGFkZCB0byBjb250YWluZXJcclxuICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWxzOiBBcnJheTxNYXRlcmlhbD4gPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5vbk1hdGVyaWFsTG9hZGVkT2JzZXJ2YWJsZS5hZGQoKG1hdGVyaWFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbHMucHVzaChtYXRlcmlhbCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCB0ZXh0dXJlczogQXJyYXk8QmFzZVRleHR1cmU+ID0gW107XHJcbiAgICAgICAgICAgIHRoaXMub25UZXh0dXJlTG9hZGVkT2JzZXJ2YWJsZS5hZGQoKHRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgICAgIHRleHR1cmVzLnB1c2godGV4dHVyZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCBjYW1lcmFzOiBBcnJheTxDYW1lcmE+ID0gW107XHJcbiAgICAgICAgICAgIHRoaXMub25DYW1lcmFMb2FkZWRPYnNlcnZhYmxlLmFkZCgoY2FtZXJhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYW1lcmFzLnB1c2goY2FtZXJhKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtb3JwaFRhcmdldE1hbmFnZXJzOiBBcnJheTxNb3JwaFRhcmdldE1hbmFnZXI+ID0gW107XHJcbiAgICAgICAgICAgIHRoaXMub25NZXNoTG9hZGVkT2JzZXJ2YWJsZS5hZGQoKG1lc2gpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChtZXNoLm1vcnBoVGFyZ2V0TWFuYWdlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vcnBoVGFyZ2V0TWFuYWdlcnMucHVzaChtZXNoLm1vcnBoVGFyZ2V0TWFuYWdlcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRlci5pbXBvcnRNZXNoQXN5bmMobnVsbCwgc2NlbmUsIGNvbnRhaW5lciwgZGF0YSwgcm9vdFVybCwgb25Qcm9ncmVzcywgZmlsZU5hbWUpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoY29udGFpbmVyLmdlb21ldHJpZXMsIHJlc3VsdC5nZW9tZXRyaWVzKTtcclxuICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGNvbnRhaW5lci5tZXNoZXMsIHJlc3VsdC5tZXNoZXMpO1xyXG4gICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoY29udGFpbmVyLnBhcnRpY2xlU3lzdGVtcywgcmVzdWx0LnBhcnRpY2xlU3lzdGVtcyk7XHJcbiAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShjb250YWluZXIuc2tlbGV0b25zLCByZXN1bHQuc2tlbGV0b25zKTtcclxuICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGNvbnRhaW5lci5hbmltYXRpb25Hcm91cHMsIHJlc3VsdC5hbmltYXRpb25Hcm91cHMpO1xyXG4gICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoY29udGFpbmVyLm1hdGVyaWFscywgbWF0ZXJpYWxzKTtcclxuICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGNvbnRhaW5lci50ZXh0dXJlcywgdGV4dHVyZXMpO1xyXG4gICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoY29udGFpbmVyLmxpZ2h0cywgcmVzdWx0LmxpZ2h0cyk7XHJcbiAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShjb250YWluZXIudHJhbnNmb3JtTm9kZXMsIHJlc3VsdC50cmFuc2Zvcm1Ob2Rlcyk7XHJcbiAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShjb250YWluZXIuY2FtZXJhcywgY2FtZXJhcyk7XHJcbiAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShjb250YWluZXIubW9ycGhUYXJnZXRNYW5hZ2VycywgbW9ycGhUYXJnZXRNYW5hZ2Vycyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udGFpbmVyO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY2FuRGlyZWN0TG9hZChkYXRhOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAoZGF0YS5pbmRleE9mKFwiYXNzZXRcIikgIT09IC0xICYmIGRhdGEuaW5kZXhPZihcInZlcnNpb25cIikgIT09IC0xKSB8fFxyXG4gICAgICAgICAgICBkYXRhLnN0YXJ0c1dpdGgoXCJkYXRhOmJhc2U2NCxcIiArIEdMVEZGaWxlTG9hZGVyLl9NYWdpY0Jhc2U2NEVuY29kZWQpIHx8IC8vIHRoaXMgaXMgdGVjaG5pY2FsbHkgaW5jb3JyZWN0LCBidXQgd2lsbCBjb250aW51ZSB0byBzdXBwb3J0IGZvciBiYWNrY29tcGF0LlxyXG4gICAgICAgICAgICBkYXRhLnN0YXJ0c1dpdGgoXCJkYXRhOjtiYXNlNjQsXCIgKyBHTFRGRmlsZUxvYWRlci5fTWFnaWNCYXNlNjRFbmNvZGVkKSB8fFxyXG4gICAgICAgICAgICBkYXRhLnN0YXJ0c1dpdGgoXCJkYXRhOmFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbTtiYXNlNjQsXCIgKyBHTFRGRmlsZUxvYWRlci5fTWFnaWNCYXNlNjRFbmNvZGVkKSB8fFxyXG4gICAgICAgICAgICBkYXRhLnN0YXJ0c1dpdGgoXCJkYXRhOm1vZGVsL2dsdGYtYmluYXJ5O2Jhc2U2NCxcIiArIEdMVEZGaWxlTG9hZGVyLl9NYWdpY0Jhc2U2NEVuY29kZWQpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGlyZWN0TG9hZChzY2VuZTogU2NlbmUsIGRhdGE6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBkYXRhLnN0YXJ0c1dpdGgoXCJiYXNlNjQsXCIgKyBHTFRGRmlsZUxvYWRlci5fTWFnaWNCYXNlNjRFbmNvZGVkKSB8fCAvLyB0aGlzIGlzIHRlY2huaWNhbGx5IGluY29ycmVjdCwgYnV0IHdpbGwgY29udGludWUgdG8gc3VwcG9ydCBmb3IgYmFja2NvbXBhdC5cclxuICAgICAgICAgICAgZGF0YS5zdGFydHNXaXRoKFwiO2Jhc2U2NCxcIiArIEdMVEZGaWxlTG9hZGVyLl9NYWdpY0Jhc2U2NEVuY29kZWQpIHx8XHJcbiAgICAgICAgICAgIGRhdGEuc3RhcnRzV2l0aChcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbTtiYXNlNjQsXCIgKyBHTFRGRmlsZUxvYWRlci5fTWFnaWNCYXNlNjRFbmNvZGVkKSB8fFxyXG4gICAgICAgICAgICBkYXRhLnN0YXJ0c1dpdGgoXCJtb2RlbC9nbHRmLWJpbmFyeTtiYXNlNjQsXCIgKyBHTFRGRmlsZUxvYWRlci5fTWFnaWNCYXNlNjRFbmNvZGVkKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBjb25zdCBhcnJheUJ1ZmZlciA9IERlY29kZUJhc2U2NFVybFRvQmluYXJ5KGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fdmFsaWRhdGUoc2NlbmUsIG5ldyBVaW50OEFycmF5KGFycmF5QnVmZmVyKSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl91bnBhY2tCaW5hcnlBc3luYyhcclxuICAgICAgICAgICAgICAgIG5ldyBEYXRhUmVhZGVyKHtcclxuICAgICAgICAgICAgICAgICAgICByZWFkQXN5bmM6IChieXRlT2Zmc2V0LCBieXRlTGVuZ3RoKSA9PiByZWFkQXN5bmMoYXJyYXlCdWZmZXIsIGJ5dGVPZmZzZXQsIGJ5dGVMZW5ndGgpLFxyXG4gICAgICAgICAgICAgICAgICAgIGJ5dGVMZW5ndGg6IGFycmF5QnVmZmVyLmJ5dGVMZW5ndGgsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fdmFsaWRhdGUoc2NlbmUsIGRhdGEpO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoeyBqc29uOiB0aGlzLl9wYXJzZUpzb24oZGF0YSkgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgY2FsbGJhY2sgdGhhdCBhbGxvd3MgY3VzdG9tIGhhbmRsaW5nIG9mIHRoZSByb290IHVybCBiYXNlZCBvbiB0aGUgcmVzcG9uc2UgdXJsLlxyXG4gICAgICogQHBhcmFtIHJvb3RVcmwgdGhlIG9yaWdpbmFsIHJvb3QgdXJsXHJcbiAgICAgKiBAcGFyYW0gcmVzcG9uc2VVUkwgdGhlIHJlc3BvbnNlIHVybCBpZiBhdmFpbGFibGVcclxuICAgICAqIEByZXR1cm5zIHRoZSBuZXcgcm9vdCB1cmxcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJld3JpdGVSb290VVJMPyhyb290VXJsOiBzdHJpbmcsIHJlc3BvbnNlVVJMPzogc3RyaW5nKTogc3RyaW5nO1xyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBjcmVhdGVQbHVnaW4oKTogSVNjZW5lTG9hZGVyUGx1Z2luIHwgSVNjZW5lTG9hZGVyUGx1Z2luQXN5bmMge1xyXG4gICAgICAgIHJldHVybiBuZXcgR0xURkZpbGVMb2FkZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBsb2FkZXIgc3RhdGUgb3IgbnVsbCBpZiB0aGUgbG9hZGVyIGlzIG5vdCBhY3RpdmUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgbG9hZGVyU3RhdGUoKTogTnVsbGFibGU8R0xURkxvYWRlclN0YXRlPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT2JzZXJ2YWJsZSByYWlzZWQgd2hlbiB0aGUgbG9hZGVyIHN0YXRlIGNoYW5nZXMuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvbkxvYWRlclN0YXRlQ2hhbmdlZE9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZTxOdWxsYWJsZTxHTFRGTG9hZGVyU3RhdGU+PigpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBhc3NldCBpcyBjb21wbGV0ZWx5IGxvYWRlZC5cclxuICAgICAqIEByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIGFzc2V0IGlzIGNvbXBsZXRlbHkgbG9hZGVkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgd2hlbkNvbXBsZXRlQXN5bmMoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vbkNvbXBsZXRlT2JzZXJ2YWJsZS5hZGRPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMub25FcnJvck9ic2VydmFibGUuYWRkT25jZSgocmVhc29uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QocmVhc29uKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIF9zZXRTdGF0ZShzdGF0ZTogR0xURkxvYWRlclN0YXRlKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3N0YXRlID09PSBzdGF0ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9zdGF0ZSA9IHN0YXRlO1xyXG4gICAgICAgIHRoaXMub25Mb2FkZXJTdGF0ZUNoYW5nZWRPYnNlcnZhYmxlLm5vdGlmeU9ic2VydmVycyh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgdGhpcy5fbG9nKEdMVEZMb2FkZXJTdGF0ZVt0aGlzLl9zdGF0ZV0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfbG9hZEZpbGUoXHJcbiAgICAgICAgc2NlbmU6IFNjZW5lLFxyXG4gICAgICAgIGZpbGVPclVybDogRmlsZSB8IHN0cmluZyxcclxuICAgICAgICBvblN1Y2Nlc3M6IChkYXRhOiBzdHJpbmcgfCBBcnJheUJ1ZmZlcikgPT4gdm9pZCxcclxuICAgICAgICB1c2VBcnJheUJ1ZmZlcj86IGJvb2xlYW4sXHJcbiAgICAgICAgb25FcnJvcj86IChyZXF1ZXN0PzogV2ViUmVxdWVzdCkgPT4gdm9pZCxcclxuICAgICAgICBvbk9wZW5lZD86IChyZXF1ZXN0OiBXZWJSZXF1ZXN0KSA9PiB2b2lkXHJcbiAgICApOiBJRmlsZVJlcXVlc3Qge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBzY2VuZS5fbG9hZEZpbGUoXHJcbiAgICAgICAgICAgIGZpbGVPclVybCxcclxuICAgICAgICAgICAgb25TdWNjZXNzLFxyXG4gICAgICAgICAgICAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX29uUHJvZ3Jlc3MoZXZlbnQsIHJlcXVlc3QpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0cnVlLFxyXG4gICAgICAgICAgICB1c2VBcnJheUJ1ZmZlcixcclxuICAgICAgICAgICAgb25FcnJvcixcclxuICAgICAgICAgICAgb25PcGVuZWRcclxuICAgICAgICApIGFzIElGaWxlUmVxdWVzdEluZm87XHJcbiAgICAgICAgcmVxdWVzdC5vbkNvbXBsZXRlT2JzZXJ2YWJsZS5hZGQoKHJlcXVlc3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fcmVxdWVzdHMuc3BsaWNlKHRoaXMuX3JlcXVlc3RzLmluZGV4T2YocmVxdWVzdCksIDEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX3JlcXVlc3RzLnB1c2gocmVxdWVzdCk7XHJcbiAgICAgICAgcmV0dXJuIHJlcXVlc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfb25Qcm9ncmVzcyhldmVudDogUHJvZ3Jlc3NFdmVudCwgcmVxdWVzdDogSUZpbGVSZXF1ZXN0SW5mbyk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5fcHJvZ3Jlc3NDYWxsYmFjaykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXF1ZXN0Ll9sZW5ndGhDb21wdXRhYmxlID0gZXZlbnQubGVuZ3RoQ29tcHV0YWJsZTtcclxuICAgICAgICByZXF1ZXN0Ll9sb2FkZWQgPSBldmVudC5sb2FkZWQ7XHJcbiAgICAgICAgcmVxdWVzdC5fdG90YWwgPSBldmVudC50b3RhbDtcclxuXHJcbiAgICAgICAgbGV0IGxlbmd0aENvbXB1dGFibGUgPSB0cnVlO1xyXG4gICAgICAgIGxldCBsb2FkZWQgPSAwO1xyXG4gICAgICAgIGxldCB0b3RhbCA9IDA7XHJcbiAgICAgICAgZm9yIChjb25zdCByZXF1ZXN0IG9mIHRoaXMuX3JlcXVlc3RzKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXF1ZXN0Ll9sZW5ndGhDb21wdXRhYmxlID09PSB1bmRlZmluZWQgfHwgcmVxdWVzdC5fbG9hZGVkID09PSB1bmRlZmluZWQgfHwgcmVxdWVzdC5fdG90YWwgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZW5ndGhDb21wdXRhYmxlID0gbGVuZ3RoQ29tcHV0YWJsZSAmJiByZXF1ZXN0Ll9sZW5ndGhDb21wdXRhYmxlO1xyXG4gICAgICAgICAgICBsb2FkZWQgKz0gcmVxdWVzdC5fbG9hZGVkO1xyXG4gICAgICAgICAgICB0b3RhbCArPSByZXF1ZXN0Ll90b3RhbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX3Byb2dyZXNzQ2FsbGJhY2soe1xyXG4gICAgICAgICAgICBsZW5ndGhDb21wdXRhYmxlOiBsZW5ndGhDb21wdXRhYmxlLFxyXG4gICAgICAgICAgICBsb2FkZWQ6IGxvYWRlZCxcclxuICAgICAgICAgICAgdG90YWw6IGxlbmd0aENvbXB1dGFibGUgPyB0b3RhbCA6IDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfdmFsaWRhdGUoc2NlbmU6IFNjZW5lLCBkYXRhOiBzdHJpbmcgfCBBcnJheUJ1ZmZlclZpZXcsIHJvb3RVcmwgPSBcIlwiLCBmaWxlTmFtZSA9IFwiXCIpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMudmFsaWRhdGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fc3RhcnRQZXJmb3JtYW5jZUNvdW50ZXIoXCJWYWxpZGF0ZSBKU09OXCIpO1xyXG4gICAgICAgIEdMVEZWYWxpZGF0aW9uLlZhbGlkYXRlQXN5bmMoZGF0YSwgcm9vdFVybCwgZmlsZU5hbWUsICh1cmkpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJlcHJvY2Vzc1VybEFzeW5jKHJvb3RVcmwgKyB1cmkpLnRoZW4oKHVybCkgPT4gc2NlbmUuX2xvYWRGaWxlQXN5bmModXJsLCB1bmRlZmluZWQsIHRydWUsIHRydWUpIGFzIFByb21pc2U8QXJyYXlCdWZmZXI+KTtcclxuICAgICAgICB9KS50aGVuKFxyXG4gICAgICAgICAgICAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9lbmRQZXJmb3JtYW5jZUNvdW50ZXIoXCJWYWxpZGF0ZSBKU09OXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vblZhbGlkYXRlZE9ic2VydmFibGUubm90aWZ5T2JzZXJ2ZXJzKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uVmFsaWRhdGVkT2JzZXJ2YWJsZS5jbGVhcigpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAocmVhc29uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9lbmRQZXJmb3JtYW5jZUNvdW50ZXIoXCJWYWxpZGF0ZSBKU09OXCIpO1xyXG4gICAgICAgICAgICAgICAgVG9vbHMuV2FybihgRmFpbGVkIHRvIHZhbGlkYXRlOiAke3JlYXNvbi5tZXNzYWdlfWApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vblZhbGlkYXRlZE9ic2VydmFibGUuY2xlYXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZ2V0TG9hZGVyKGxvYWRlckRhdGE6IElHTFRGTG9hZGVyRGF0YSk6IElHTFRGTG9hZGVyIHtcclxuICAgICAgICBjb25zdCBhc3NldCA9ICg8YW55PmxvYWRlckRhdGEuanNvbikuYXNzZXQgfHwge307XHJcblxyXG4gICAgICAgIHRoaXMuX2xvZyhgQXNzZXQgdmVyc2lvbjogJHthc3NldC52ZXJzaW9ufWApO1xyXG4gICAgICAgIGFzc2V0Lm1pblZlcnNpb24gJiYgdGhpcy5fbG9nKGBBc3NldCBtaW5pbXVtIHZlcnNpb246ICR7YXNzZXQubWluVmVyc2lvbn1gKTtcclxuICAgICAgICBhc3NldC5nZW5lcmF0b3IgJiYgdGhpcy5fbG9nKGBBc3NldCBnZW5lcmF0b3I6ICR7YXNzZXQuZ2VuZXJhdG9yfWApO1xyXG5cclxuICAgICAgICBjb25zdCB2ZXJzaW9uID0gR0xURkZpbGVMb2FkZXIuX3BhcnNlVmVyc2lvbihhc3NldC52ZXJzaW9uKTtcclxuICAgICAgICBpZiAoIXZlcnNpb24pIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2ZXJzaW9uOiBcIiArIGFzc2V0LnZlcnNpb24pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGFzc2V0Lm1pblZlcnNpb24gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBjb25zdCBtaW5WZXJzaW9uID0gR0xURkZpbGVMb2FkZXIuX3BhcnNlVmVyc2lvbihhc3NldC5taW5WZXJzaW9uKTtcclxuICAgICAgICAgICAgaWYgKCFtaW5WZXJzaW9uKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIG1pbmltdW0gdmVyc2lvbjogXCIgKyBhc3NldC5taW5WZXJzaW9uKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKEdMVEZGaWxlTG9hZGVyLl9jb21wYXJlVmVyc2lvbihtaW5WZXJzaW9uLCB7IG1ham9yOiAyLCBtaW5vcjogMCB9KSA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkluY29tcGF0aWJsZSBtaW5pbXVtIHZlcnNpb246IFwiICsgYXNzZXQubWluVmVyc2lvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGNyZWF0ZUxvYWRlcnM6IHsgW2tleTogbnVtYmVyXTogKHBhcmVudDogR0xURkZpbGVMb2FkZXIpID0+IElHTFRGTG9hZGVyIH0gPSB7XHJcbiAgICAgICAgICAgIDE6IEdMVEZGaWxlTG9hZGVyLl9DcmVhdGVHTFRGMUxvYWRlcixcclxuICAgICAgICAgICAgMjogR0xURkZpbGVMb2FkZXIuX0NyZWF0ZUdMVEYyTG9hZGVyLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGNyZWF0ZUxvYWRlciA9IGNyZWF0ZUxvYWRlcnNbdmVyc2lvbi5tYWpvcl07XHJcbiAgICAgICAgaWYgKCFjcmVhdGVMb2FkZXIpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5zdXBwb3J0ZWQgdmVyc2lvbjogXCIgKyBhc3NldC52ZXJzaW9uKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjcmVhdGVMb2FkZXIodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfcGFyc2VKc29uKGpzb246IHN0cmluZyk6IE9iamVjdCB7XHJcbiAgICAgICAgdGhpcy5fc3RhcnRQZXJmb3JtYW5jZUNvdW50ZXIoXCJQYXJzZSBKU09OXCIpO1xyXG4gICAgICAgIHRoaXMuX2xvZyhgSlNPTiBsZW5ndGg6ICR7anNvbi5sZW5ndGh9YCk7XHJcbiAgICAgICAgY29uc3QgcGFyc2VkID0gSlNPTi5wYXJzZShqc29uKTtcclxuICAgICAgICB0aGlzLl9lbmRQZXJmb3JtYW5jZUNvdW50ZXIoXCJQYXJzZSBKU09OXCIpO1xyXG4gICAgICAgIHJldHVybiBwYXJzZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfdW5wYWNrQmluYXJ5QXN5bmMoZGF0YVJlYWRlcjogRGF0YVJlYWRlcik6IFByb21pc2U8SUdMVEZMb2FkZXJEYXRhPiB7XHJcbiAgICAgICAgdGhpcy5fc3RhcnRQZXJmb3JtYW5jZUNvdW50ZXIoXCJVbnBhY2sgQmluYXJ5XCIpO1xyXG5cclxuICAgICAgICAvLyBSZWFkIG1hZ2ljICsgdmVyc2lvbiArIGxlbmd0aCArIGpzb24gbGVuZ3RoICsganNvbiBmb3JtYXRcclxuICAgICAgICByZXR1cm4gZGF0YVJlYWRlci5sb2FkQXN5bmMoMjApLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBCaW5hcnkgPSB7XHJcbiAgICAgICAgICAgICAgICBNYWdpYzogMHg0NjU0NmM2NyxcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG1hZ2ljID0gZGF0YVJlYWRlci5yZWFkVWludDMyKCk7XHJcbiAgICAgICAgICAgIGlmIChtYWdpYyAhPT0gQmluYXJ5Lk1hZ2ljKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUnVudGltZUVycm9yKFwiVW5leHBlY3RlZCBtYWdpYzogXCIgKyBtYWdpYywgRXJyb3JDb2Rlcy5HTFRGTG9hZGVyVW5leHBlY3RlZE1hZ2ljRXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCB2ZXJzaW9uID0gZGF0YVJlYWRlci5yZWFkVWludDMyKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5sb2dnaW5nRW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9nKGBCaW5hcnkgdmVyc2lvbjogJHt2ZXJzaW9ufWApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBsZW5ndGggPSBkYXRhUmVhZGVyLnJlYWRVaW50MzIoKTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnVzZVJhbmdlUmVxdWVzdHMgJiYgbGVuZ3RoICE9PSBkYXRhUmVhZGVyLmJ1ZmZlci5ieXRlTGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBMb2dnZXIuV2FybihgTGVuZ3RoIGluIGhlYWRlciBkb2VzIG5vdCBtYXRjaCBhY3R1YWwgZGF0YSBsZW5ndGg6ICR7bGVuZ3RofSAhPSAke2RhdGFSZWFkZXIuYnVmZmVyLmJ5dGVMZW5ndGh9YCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCB1bnBhY2tlZDogUHJvbWlzZTxJR0xURkxvYWRlckRhdGE+O1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHZlcnNpb24pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMToge1xyXG4gICAgICAgICAgICAgICAgICAgIHVucGFja2VkID0gdGhpcy5fdW5wYWNrQmluYXJ5VjFBc3luYyhkYXRhUmVhZGVyLCBsZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2FzZSAyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdW5wYWNrZWQgPSB0aGlzLl91bnBhY2tCaW5hcnlWMkFzeW5jKGRhdGFSZWFkZXIsIGxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5zdXBwb3J0ZWQgdmVyc2lvbjogXCIgKyB2ZXJzaW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5fZW5kUGVyZm9ybWFuY2VDb3VudGVyKFwiVW5wYWNrIEJpbmFyeVwiKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB1bnBhY2tlZDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF91bnBhY2tCaW5hcnlWMUFzeW5jKGRhdGFSZWFkZXI6IERhdGFSZWFkZXIsIGxlbmd0aDogbnVtYmVyKTogUHJvbWlzZTxJR0xURkxvYWRlckRhdGE+IHtcclxuICAgICAgICBjb25zdCBDb250ZW50Rm9ybWF0ID0ge1xyXG4gICAgICAgICAgICBKU09OOiAwLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbnRlbnRMZW5ndGggPSBkYXRhUmVhZGVyLnJlYWRVaW50MzIoKTtcclxuICAgICAgICBjb25zdCBjb250ZW50Rm9ybWF0ID0gZGF0YVJlYWRlci5yZWFkVWludDMyKCk7XHJcblxyXG4gICAgICAgIGlmIChjb250ZW50Rm9ybWF0ICE9PSBDb250ZW50Rm9ybWF0LkpTT04pIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIGNvbnRlbnQgZm9ybWF0OiAke2NvbnRlbnRGb3JtYXR9YCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBib2R5TGVuZ3RoID0gbGVuZ3RoIC0gZGF0YVJlYWRlci5ieXRlT2Zmc2V0O1xyXG5cclxuICAgICAgICBjb25zdCBkYXRhOiBJR0xURkxvYWRlckRhdGEgPSB7IGpzb246IHRoaXMuX3BhcnNlSnNvbihkYXRhUmVhZGVyLnJlYWRTdHJpbmcoY29udGVudExlbmd0aCkpLCBiaW46IG51bGwgfTtcclxuICAgICAgICBpZiAoYm9keUxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBzdGFydEJ5dGVPZmZzZXQgPSBkYXRhUmVhZGVyLmJ5dGVPZmZzZXQ7XHJcbiAgICAgICAgICAgIGRhdGEuYmluID0ge1xyXG4gICAgICAgICAgICAgICAgcmVhZEFzeW5jOiAoYnl0ZU9mZnNldCwgYnl0ZUxlbmd0aCkgPT4gZGF0YVJlYWRlci5idWZmZXIucmVhZEFzeW5jKHN0YXJ0Qnl0ZU9mZnNldCArIGJ5dGVPZmZzZXQsIGJ5dGVMZW5ndGgpLFxyXG4gICAgICAgICAgICAgICAgYnl0ZUxlbmd0aDogYm9keUxlbmd0aCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfdW5wYWNrQmluYXJ5VjJBc3luYyhkYXRhUmVhZGVyOiBEYXRhUmVhZGVyLCBsZW5ndGg6IG51bWJlcik6IFByb21pc2U8SUdMVEZMb2FkZXJEYXRhPiB7XHJcbiAgICAgICAgY29uc3QgQ2h1bmtGb3JtYXQgPSB7XHJcbiAgICAgICAgICAgIEpTT046IDB4NGU0ZjUzNGEsXHJcbiAgICAgICAgICAgIEJJTjogMHgwMDRlNDk0MixcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBSZWFkIHRoZSBKU09OIGNodW5rIGhlYWRlci5cclxuICAgICAgICBjb25zdCBjaHVua0xlbmd0aCA9IGRhdGFSZWFkZXIucmVhZFVpbnQzMigpO1xyXG4gICAgICAgIGNvbnN0IGNodW5rRm9ybWF0ID0gZGF0YVJlYWRlci5yZWFkVWludDMyKCk7XHJcbiAgICAgICAgaWYgKGNodW5rRm9ybWF0ICE9PSBDaHVua0Zvcm1hdC5KU09OKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkZpcnN0IGNodW5rIGZvcm1hdCBpcyBub3QgSlNPTlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEJhaWwgaWYgdGhlcmUgYXJlIG5vIG90aGVyIGNodW5rcy5cclxuICAgICAgICBpZiAoZGF0YVJlYWRlci5ieXRlT2Zmc2V0ICsgY2h1bmtMZW5ndGggPT09IGxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0YVJlYWRlci5sb2FkQXN5bmMoY2h1bmtMZW5ndGgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsganNvbjogdGhpcy5fcGFyc2VKc29uKGRhdGFSZWFkZXIucmVhZFN0cmluZyhjaHVua0xlbmd0aCkpLCBiaW46IG51bGwgfTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBSZWFkIHRoZSBKU09OIGNodW5rIGFuZCB0aGUgbGVuZ3RoIGFuZCB0eXBlIG9mIHRoZSBuZXh0IGNodW5rLlxyXG4gICAgICAgIHJldHVybiBkYXRhUmVhZGVyLmxvYWRBc3luYyhjaHVua0xlbmd0aCArIDgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhOiBJR0xURkxvYWRlckRhdGEgPSB7IGpzb246IHRoaXMuX3BhcnNlSnNvbihkYXRhUmVhZGVyLnJlYWRTdHJpbmcoY2h1bmtMZW5ndGgpKSwgYmluOiBudWxsIH07XHJcblxyXG4gICAgICAgICAgICBjb25zdCByZWFkQXN5bmMgPSAoKTogUHJvbWlzZTxJR0xURkxvYWRlckRhdGE+ID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNodW5rTGVuZ3RoID0gZGF0YVJlYWRlci5yZWFkVWludDMyKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaHVua0Zvcm1hdCA9IGRhdGFSZWFkZXIucmVhZFVpbnQzMigpO1xyXG5cclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoY2h1bmtGb3JtYXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIENodW5rRm9ybWF0LkpTT046IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5leHBlY3RlZCBKU09OIGNodW5rXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIENodW5rRm9ybWF0LkJJTjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGFydEJ5dGVPZmZzZXQgPSBkYXRhUmVhZGVyLmJ5dGVPZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuYmluID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZEFzeW5jOiAoYnl0ZU9mZnNldCwgYnl0ZUxlbmd0aCkgPT4gZGF0YVJlYWRlci5idWZmZXIucmVhZEFzeW5jKHN0YXJ0Qnl0ZU9mZnNldCArIGJ5dGVPZmZzZXQsIGJ5dGVMZW5ndGgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnl0ZUxlbmd0aDogY2h1bmtMZW5ndGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFSZWFkZXIuc2tpcEJ5dGVzKGNodW5rTGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWdub3JlIHVucmVjb2duaXplZCBjaHVua0Zvcm1hdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhUmVhZGVyLnNraXBCeXRlcyhjaHVua0xlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YVJlYWRlci5ieXRlT2Zmc2V0ICE9PSBsZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YVJlYWRlci5sb2FkQXN5bmMoOCkudGhlbihyZWFkQXN5bmMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcmVhZEFzeW5jKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX3BhcnNlVmVyc2lvbih2ZXJzaW9uOiBzdHJpbmcpOiBOdWxsYWJsZTx7IG1ham9yOiBudW1iZXI7IG1pbm9yOiBudW1iZXIgfT4ge1xyXG4gICAgICAgIGlmICh2ZXJzaW9uID09PSBcIjEuMFwiIHx8IHZlcnNpb24gPT09IFwiMS4wLjFcIikge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgbWFqb3I6IDEsXHJcbiAgICAgICAgICAgICAgICBtaW5vcjogMCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG1hdGNoID0gKHZlcnNpb24gKyBcIlwiKS5tYXRjaCgvXihcXGQrKVxcLihcXGQrKS8pO1xyXG4gICAgICAgIGlmICghbWF0Y2gpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBtYWpvcjogcGFyc2VJbnQobWF0Y2hbMV0pLFxyXG4gICAgICAgICAgICBtaW5vcjogcGFyc2VJbnQobWF0Y2hbMl0pLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2NvbXBhcmVWZXJzaW9uKGE6IHsgbWFqb3I6IG51bWJlcjsgbWlub3I6IG51bWJlciB9LCBiOiB7IG1ham9yOiBudW1iZXI7IG1pbm9yOiBudW1iZXIgfSk6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKGEubWFqb3IgPiBiLm1ham9yKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYS5tYWpvciA8IGIubWFqb3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYS5taW5vciA+IGIubWlub3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhLm1pbm9yIDwgYi5taW5vcikge1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IF9sb2dTcGFjZXMgPSBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI7XHJcbiAgICBwcml2YXRlIF9sb2dJbmRlbnRMZXZlbCA9IDA7XHJcbiAgICBwcml2YXRlIF9sb2dnaW5nRW5hYmxlZCA9IGZhbHNlO1xyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBfbG9nID0gdGhpcy5fbG9nRGlzYWJsZWQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIF9sb2dPcGVuKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2xvZyhtZXNzYWdlKTtcclxuICAgICAgICB0aGlzLl9sb2dJbmRlbnRMZXZlbCsrO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBfbG9nQ2xvc2UoKTogdm9pZCB7XHJcbiAgICAgICAgLS10aGlzLl9sb2dJbmRlbnRMZXZlbDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9sb2dFbmFibGVkKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHNwYWNlcyA9IEdMVEZGaWxlTG9hZGVyLl9sb2dTcGFjZXMuc3Vic3RyKDAsIHRoaXMuX2xvZ0luZGVudExldmVsICogMik7XHJcbiAgICAgICAgTG9nZ2VyLkxvZyhgJHtzcGFjZXN9JHttZXNzYWdlfWApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2xvZ0Rpc2FibGVkKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge31cclxuXHJcbiAgICBwcml2YXRlIF9jYXB0dXJlUGVyZm9ybWFuY2VDb3VudGVycyA9IGZhbHNlO1xyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBfc3RhcnRQZXJmb3JtYW5jZUNvdW50ZXIgPSB0aGlzLl9zdGFydFBlcmZvcm1hbmNlQ291bnRlckRpc2FibGVkO1xyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBfZW5kUGVyZm9ybWFuY2VDb3VudGVyID0gdGhpcy5fZW5kUGVyZm9ybWFuY2VDb3VudGVyRGlzYWJsZWQ7XHJcblxyXG4gICAgcHJpdmF0ZSBfc3RhcnRQZXJmb3JtYW5jZUNvdW50ZXJFbmFibGVkKGNvdW50ZXJOYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBUb29scy5TdGFydFBlcmZvcm1hbmNlQ291bnRlcihjb3VudGVyTmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfc3RhcnRQZXJmb3JtYW5jZUNvdW50ZXJEaXNhYmxlZChjb3VudGVyTmFtZTogc3RyaW5nKTogdm9pZCB7fVxyXG5cclxuICAgIHByaXZhdGUgX2VuZFBlcmZvcm1hbmNlQ291bnRlckVuYWJsZWQoY291bnRlck5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIFRvb2xzLkVuZFBlcmZvcm1hbmNlQ291bnRlcihjb3VudGVyTmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZW5kUGVyZm9ybWFuY2VDb3VudGVyRGlzYWJsZWQoY291bnRlck5hbWU6IHN0cmluZyk6IHZvaWQge31cclxufVxyXG5cclxuaWYgKFNjZW5lTG9hZGVyKSB7XHJcbiAgICBTY2VuZUxvYWRlci5SZWdpc3RlclBsdWdpbihuZXcgR0xURkZpbGVMb2FkZXIoKSk7XHJcbn1cclxuIiwiaW1wb3J0IHR5cGUgKiBhcyBHTFRGMiBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IFRvb2xzIH0gZnJvbSBcImNvcmUvTWlzYy90b29sc1wiO1xyXG5cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5kZWNsYXJlIGxldCBHTFRGVmFsaWRhdG9yOiBHTFRGMi5JR0xURlZhbGlkYXRvcjtcclxuXHJcbi8vIFdvcmtlckdsb2JhbFNjb3BlXHJcbmRlY2xhcmUgZnVuY3Rpb24gaW1wb3J0U2NyaXB0cyguLi51cmxzOiBzdHJpbmdbXSk6IHZvaWQ7XHJcbmRlY2xhcmUgZnVuY3Rpb24gcG9zdE1lc3NhZ2UobWVzc2FnZTogYW55LCB0cmFuc2Zlcj86IGFueVtdKTogdm9pZDtcclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlQXN5bmMoXHJcbiAgICBkYXRhOiBzdHJpbmcgfCBBcnJheUJ1ZmZlcixcclxuICAgIHJvb3RVcmw6IHN0cmluZyxcclxuICAgIGZpbGVOYW1lOiBzdHJpbmcsXHJcbiAgICBnZXRFeHRlcm5hbFJlc291cmNlOiAodXJpOiBzdHJpbmcpID0+IFByb21pc2U8QXJyYXlCdWZmZXI+XHJcbik6IFByb21pc2U8R0xURjIuSUdMVEZWYWxpZGF0aW9uUmVzdWx0cz4ge1xyXG4gICAgY29uc3Qgb3B0aW9uczogR0xURjIuSUdMVEZWYWxpZGF0aW9uT3B0aW9ucyA9IHtcclxuICAgICAgICBleHRlcm5hbFJlc291cmNlRnVuY3Rpb246ICh1cmkpID0+IGdldEV4dGVybmFsUmVzb3VyY2UodXJpKS50aGVuKCh2YWx1ZSkgPT4gbmV3IFVpbnQ4QXJyYXkodmFsdWUpKSxcclxuICAgIH07XHJcblxyXG4gICAgaWYgKGZpbGVOYW1lKSB7XHJcbiAgICAgICAgb3B0aW9ucy51cmkgPSByb290VXJsID09PSBcImZpbGU6XCIgPyBmaWxlTmFtZSA6IHJvb3RVcmwgKyBmaWxlTmFtZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGF0YSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyID8gR0xURlZhbGlkYXRvci52YWxpZGF0ZUJ5dGVzKG5ldyBVaW50OEFycmF5KGRhdGEpLCBvcHRpb25zKSA6IEdMVEZWYWxpZGF0b3IudmFsaWRhdGVTdHJpbmcoZGF0YSwgb3B0aW9ucyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGUgd29ya2VyIGZ1bmN0aW9uIHRoYXQgZ2V0cyBjb252ZXJ0ZWQgdG8gYSBibG9iIHVybCB0byBwYXNzIGludG8gYSB3b3JrZXIuXHJcbiAqL1xyXG5mdW5jdGlvbiB3b3JrZXJGdW5jKCk6IHZvaWQge1xyXG4gICAgY29uc3QgcGVuZGluZ0V4dGVybmFsUmVzb3VyY2VzOiBBcnJheTx7IHJlc29sdmU6IChkYXRhOiBhbnkpID0+IHZvaWQ7IHJlamVjdDogKHJlYXNvbjogYW55KSA9PiB2b2lkIH0+ID0gW107XHJcblxyXG4gICAgb25tZXNzYWdlID0gKG1lc3NhZ2UpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gbWVzc2FnZS5kYXRhO1xyXG4gICAgICAgIHN3aXRjaCAoZGF0YS5pZCkge1xyXG4gICAgICAgICAgICBjYXNlIFwiaW5pdFwiOiB7XHJcbiAgICAgICAgICAgICAgICBpbXBvcnRTY3JpcHRzKGRhdGEudXJsKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJ2YWxpZGF0ZVwiOiB7XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZUFzeW5jKFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLnJvb3RVcmwsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5maWxlTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAodXJpKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHBlbmRpbmdFeHRlcm5hbFJlc291cmNlcy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZW5kaW5nRXh0ZXJuYWxSZXNvdXJjZXMucHVzaCh7IHJlc29sdmUsIHJlamVjdCB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RNZXNzYWdlKHsgaWQ6IFwiZ2V0RXh0ZXJuYWxSZXNvdXJjZVwiLCBpbmRleDogaW5kZXgsIHVyaTogdXJpIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKS50aGVuKFxyXG4gICAgICAgICAgICAgICAgICAgICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3N0TWVzc2FnZSh7IGlkOiBcInZhbGlkYXRlLnJlc29sdmVcIiwgdmFsdWU6IHZhbHVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgKHJlYXNvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3N0TWVzc2FnZSh7IGlkOiBcInZhbGlkYXRlLnJlamVjdFwiLCByZWFzb246IHJlYXNvbiB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcImdldEV4dGVybmFsUmVzb3VyY2UucmVzb2x2ZVwiOiB7XHJcbiAgICAgICAgICAgICAgICBwZW5kaW5nRXh0ZXJuYWxSZXNvdXJjZXNbZGF0YS5pbmRleF0ucmVzb2x2ZShkYXRhLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJnZXRFeHRlcm5hbFJlc291cmNlLnJlamVjdFwiOiB7XHJcbiAgICAgICAgICAgICAgICBwZW5kaW5nRXh0ZXJuYWxSZXNvdXJjZXNbZGF0YS5pbmRleF0ucmVqZWN0KGRhdGEucmVhc29uKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbmZpZ3VyYXRpb24gZm9yIGdsVEYgdmFsaWRhdGlvblxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJR0xURlZhbGlkYXRpb25Db25maWd1cmF0aW9uIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIHVybCBvZiB0aGUgZ2xURiB2YWxpZGF0b3IuXHJcbiAgICAgKi9cclxuICAgIHVybDogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogZ2xURiB2YWxpZGF0aW9uXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgR0xURlZhbGlkYXRpb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgY29uZmlndXJhdGlvbi4gRGVmYXVsdHMgdG8gYHsgdXJsOiBcImh0dHBzOi8vY2RuLmJhYnlsb25qcy5jb20vZ2x0Zl92YWxpZGF0b3IuanNcIiB9YC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBDb25maWd1cmF0aW9uOiBJR0xURlZhbGlkYXRpb25Db25maWd1cmF0aW9uID0ge1xyXG4gICAgICAgIHVybDogYCR7VG9vbHMuX0RlZmF1bHRDZG5Vcmx9L2dsdGZfdmFsaWRhdG9yLmpzYCxcclxuICAgIH07XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX0xvYWRTY3JpcHRQcm9taXNlOiBQcm9taXNlPHZvaWQ+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVmFsaWRhdGUgYSBnbFRGIGFzc2V0IHVzaW5nIHRoZSBnbFRGLVZhbGlkYXRvci5cclxuICAgICAqIEBwYXJhbSBkYXRhIFRoZSBKU09OIG9mIGEgZ2xURiBvciB0aGUgYXJyYXkgYnVmZmVyIG9mIGEgYmluYXJ5IGdsVEZcclxuICAgICAqIEBwYXJhbSByb290VXJsIFRoZSByb290IHVybCBmb3IgdGhlIGdsVEZcclxuICAgICAqIEBwYXJhbSBmaWxlTmFtZSBUaGUgZmlsZSBuYW1lIGZvciB0aGUgZ2xURlxyXG4gICAgICogQHBhcmFtIGdldEV4dGVybmFsUmVzb3VyY2UgVGhlIGNhbGxiYWNrIHRvIGdldCBleHRlcm5hbCByZXNvdXJjZXMgZm9yIHRoZSBnbFRGIHZhbGlkYXRvclxyXG4gICAgICogQHJldHVybnMgQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgZ2xURiB2YWxpZGF0aW9uIHJlc3VsdHMgb25jZSBjb21wbGV0ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFZhbGlkYXRlQXN5bmMoXHJcbiAgICAgICAgZGF0YTogc3RyaW5nIHwgQXJyYXlCdWZmZXJWaWV3LFxyXG4gICAgICAgIHJvb3RVcmw6IHN0cmluZyxcclxuICAgICAgICBmaWxlTmFtZTogc3RyaW5nLFxyXG4gICAgICAgIGdldEV4dGVybmFsUmVzb3VyY2U6ICh1cmk6IHN0cmluZykgPT4gUHJvbWlzZTxBcnJheUJ1ZmZlcj5cclxuICAgICk6IFByb21pc2U8R0xURjIuSUdMVEZWYWxpZGF0aW9uUmVzdWx0cz4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGFDb3B5ID0gQXJyYXlCdWZmZXIuaXNWaWV3KGRhdGEpID8gKGRhdGEgYXMgVWludDhBcnJheSkuc2xpY2UoKS5idWZmZXIgOiAoZGF0YSBhcyBzdHJpbmcpO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIFdvcmtlciA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB3b3JrZXJDb250ZW50ID0gYCR7dmFsaWRhdGVBc3luY30oJHt3b3JrZXJGdW5jfSkoKWA7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB3b3JrZXJCbG9iVXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChuZXcgQmxvYihbd29ya2VyQ29udGVudF0sIHsgdHlwZTogXCJhcHBsaWNhdGlvbi9qYXZhc2NyaXB0XCIgfSkpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgd29ya2VyID0gbmV3IFdvcmtlcih3b3JrZXJCbG9iVXJsKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBvbkVycm9yID0gKGVycm9yOiBFcnJvckV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd29ya2VyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCBvbkVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB3b3JrZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgb25NZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBvbk1lc3NhZ2UgPSAobWVzc2FnZTogTWVzc2FnZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IG1lc3NhZ2UuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGRhdGEuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImdldEV4dGVybmFsUmVzb3VyY2VcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0RXh0ZXJuYWxSZXNvdXJjZShkYXRhLnVyaSkudGhlbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKHsgaWQ6IFwiZ2V0RXh0ZXJuYWxSZXNvdXJjZS5yZXNvbHZlXCIsIGluZGV4OiBkYXRhLmluZGV4LCB2YWx1ZTogdmFsdWUgfSwgW3ZhbHVlXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocmVhc29uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtlci5wb3N0TWVzc2FnZSh7IGlkOiBcImdldEV4dGVybmFsUmVzb3VyY2UucmVqZWN0XCIsIGluZGV4OiBkYXRhLmluZGV4LCByZWFzb246IHJlYXNvbiB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInZhbGlkYXRlLnJlc29sdmVcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya2VyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCBvbkVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtlci5yZW1vdmVFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBvbk1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtlci50ZXJtaW5hdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ2YWxpZGF0ZS5yZWplY3RcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya2VyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCBvbkVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtlci5yZW1vdmVFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBvbk1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGRhdGEucmVhc29uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtlci50ZXJtaW5hdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgd29ya2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCBvbkVycm9yKTtcclxuICAgICAgICAgICAgICAgIHdvcmtlci5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBvbk1lc3NhZ2UpO1xyXG5cclxuICAgICAgICAgICAgICAgIHdvcmtlci5wb3N0TWVzc2FnZSh7IGlkOiBcImluaXRcIiwgdXJsOiBUb29scy5HZXRCYWJ5bG9uU2NyaXB0VVJMKHRoaXMuQ29uZmlndXJhdGlvbi51cmwpIH0pO1xyXG4gICAgICAgICAgICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKHsgaWQ6IFwidmFsaWRhdGVcIiwgZGF0YTogZGF0YUNvcHksIHJvb3RVcmw6IHJvb3RVcmwsIGZpbGVOYW1lOiBmaWxlTmFtZSB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9Mb2FkU2NyaXB0UHJvbWlzZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fTG9hZFNjcmlwdFByb21pc2UgPSBUb29scy5Mb2FkQmFieWxvblNjcmlwdEFzeW5jKHRoaXMuQ29uZmlndXJhdGlvbi51cmwpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fTG9hZFNjcmlwdFByb21pc2UudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsaWRhdGVBc3luYyhkYXRhQ29weSwgcm9vdFVybCwgZmlsZU5hbWUsIGdldEV4dGVybmFsUmVzb3VyY2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgRmlsZUxvYWRlciBmcm9tIFwibG9hZGVycy9nbFRGL2dsVEZGaWxlTG9hZGVyXCI7XHJcbmltcG9ydCAqIGFzIFZhbGlkYXRpb24gZnJvbSBcImxvYWRlcnMvZ2xURi9nbFRGVmFsaWRhdGlvblwiO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgaXMgdGhlIGVudHJ5IHBvaW50IGZvciB0aGUgVU1EIG1vZHVsZS5cclxuICogVGhlIGVudHJ5IHBvaW50IGZvciBhIGZ1dHVyZSBFU00gcGFja2FnZSBzaG91bGQgYmUgaW5kZXgudHNcclxuICovXHJcbmNvbnN0IGdsb2JhbE9iamVjdCA9IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDogdW5kZWZpbmVkO1xyXG5pZiAodHlwZW9mIGdsb2JhbE9iamVjdCAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgKDxhbnk+Z2xvYmFsT2JqZWN0KS5CQUJZTE9OID0gKDxhbnk+Z2xvYmFsT2JqZWN0KS5CQUJZTE9OIHx8IHt9O1xyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gRmlsZUxvYWRlcikge1xyXG4gICAgICAgICg8YW55Pmdsb2JhbE9iamVjdCkuQkFCWUxPTltrZXldID0gKDxhbnk+RmlsZUxvYWRlcilba2V5XTtcclxuICAgIH1cclxuICAgIGZvciAoY29uc3Qga2V5IGluIFZhbGlkYXRpb24pIHtcclxuICAgICAgICAoPGFueT5nbG9iYWxPYmplY3QpLkJBQllMT05ba2V5XSA9ICg8YW55PlZhbGlkYXRpb24pW2tleV07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCAqIGZyb20gXCJsb2FkZXJzL2dsVEYvZ2xURkZpbGVMb2FkZXJcIjtcclxuZXhwb3J0ICogZnJvbSBcImxvYWRlcnMvZ2xURi9nbFRGVmFsaWRhdGlvblwiO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8taW50ZXJuYWwtbW9kdWxlcyAqL1xyXG5pbXBvcnQgKiBhcyBFeHRlbnNpb25zIGZyb20gXCJsb2FkZXJzL2dsVEYvMi4wL0V4dGVuc2lvbnMvaW5kZXhcIjtcclxuaW1wb3J0ICogYXMgSW50ZXJmYWNlcyBmcm9tIFwibG9hZGVycy9nbFRGLzIuMC9nbFRGTG9hZGVySW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQgKiBhcyBHTFRGMiBmcm9tIFwibG9hZGVycy9nbFRGLzIuMC9pbmRleFwiO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgaXMgdGhlIGVudHJ5IHBvaW50IGZvciB0aGUgVU1EIG1vZHVsZS5cclxuICogVGhlIGVudHJ5IHBvaW50IGZvciBhIGZ1dHVyZSBFU00gcGFja2FnZSBzaG91bGQgYmUgaW5kZXgudHNcclxuICovXHJcbmNvbnN0IGdsb2JhbE9iamVjdCA9IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDogdW5kZWZpbmVkO1xyXG5pZiAodHlwZW9mIGdsb2JhbE9iamVjdCAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgKDxhbnk+Z2xvYmFsT2JqZWN0KS5CQUJZTE9OID0gKDxhbnk+Z2xvYmFsT2JqZWN0KS5CQUJZTE9OIHx8IHt9O1xyXG4gICAgY29uc3QgQkFCWUxPTiA9ICg8YW55Pmdsb2JhbE9iamVjdCkuQkFCWUxPTjtcclxuICAgIEJBQllMT04uR0xURjIgPSBCQUJZTE9OLkdMVEYyIHx8IHt9O1xyXG4gICAgQkFCWUxPTi5HTFRGMi5Mb2FkZXIgPSBCQUJZTE9OLkdMVEYyLkxvYWRlciB8fCB7fTtcclxuICAgIEJBQllMT04uR0xURjIuTG9hZGVyLkV4dGVuc2lvbnMgPSBCQUJZTE9OLkdMVEYyLkxvYWRlci5FeHRlbnNpb25zIHx8IHt9O1xyXG5cclxuICAgIGNvbnN0IGtleXMgPSBbXTtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIEV4dGVuc2lvbnMpIHtcclxuICAgICAgICBCQUJZTE9OLkdMVEYyLkxvYWRlci5FeHRlbnNpb25zW2tleV0gPSAoPGFueT5FeHRlbnNpb25zKVtrZXldO1xyXG4gICAgICAgIGtleXMucHVzaChrZXkpO1xyXG4gICAgfVxyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gSW50ZXJmYWNlcykge1xyXG4gICAgICAgIEJBQllMT04uR0xURjIuTG9hZGVyW2tleV0gPSAoPGFueT5JbnRlcmZhY2VzKVtrZXldO1xyXG4gICAgICAgIGtleXMucHVzaChrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAoY29uc3Qga2V5IGluIEdMVEYyKSB7XHJcbiAgICAgICAgLy8gUHJldmVudCBSZWFzc2lnbm1lbnQuXHJcbiAgICAgICAgaWYgKGtleXMuaW5kZXhPZihrZXkpID4gLTEpIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBCQUJZTE9OLkdMVEYyW2tleV0gPSAoPGFueT5HTFRGMilba2V5XTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgR0xURjIgfTtcclxuIiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9leHBvcnRcclxuZXhwb3J0ICogZnJvbSBcIi4vbGVnYWN5LWdsVEZcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbGVnYWN5LWdsVEYyXCI7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9iYWJ5bG9uanNfTWlzY19vYnNlcnZhYmxlX187IiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXG5cblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1Jcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UsIFN1cHByZXNzZWRFcnJvciwgU3ltYm9sICovXG5cbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xuICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xuICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xufVxuXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XG4gIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XG4gICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XG4gICAgICB9XG4gICAgICByZXR1cm4gdDtcbiAgfVxuICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XG4gIHZhciB0ID0ge307XG4gIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgdFtwXSA9IHNbcF07XG4gIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXG4gICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgICAgfVxuICByZXR1cm4gdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX19lc0RlY29yYXRlKGN0b3IsIGRlc2NyaXB0b3JJbiwgZGVjb3JhdG9ycywgY29udGV4dEluLCBpbml0aWFsaXplcnMsIGV4dHJhSW5pdGlhbGl6ZXJzKSB7XG4gIGZ1bmN0aW9uIGFjY2VwdChmKSB7IGlmIChmICE9PSB2b2lkIDAgJiYgdHlwZW9mIGYgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZ1bmN0aW9uIGV4cGVjdGVkXCIpOyByZXR1cm4gZjsgfVxuICB2YXIga2luZCA9IGNvbnRleHRJbi5raW5kLCBrZXkgPSBraW5kID09PSBcImdldHRlclwiID8gXCJnZXRcIiA6IGtpbmQgPT09IFwic2V0dGVyXCIgPyBcInNldFwiIDogXCJ2YWx1ZVwiO1xuICB2YXIgdGFyZ2V0ID0gIWRlc2NyaXB0b3JJbiAmJiBjdG9yID8gY29udGV4dEluW1wic3RhdGljXCJdID8gY3RvciA6IGN0b3IucHJvdG90eXBlIDogbnVsbDtcbiAgdmFyIGRlc2NyaXB0b3IgPSBkZXNjcmlwdG9ySW4gfHwgKHRhcmdldCA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBjb250ZXh0SW4ubmFtZSkgOiB7fSk7XG4gIHZhciBfLCBkb25lID0gZmFsc2U7XG4gIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICB2YXIgY29udGV4dCA9IHt9O1xuICAgICAgZm9yICh2YXIgcCBpbiBjb250ZXh0SW4pIGNvbnRleHRbcF0gPSBwID09PSBcImFjY2Vzc1wiID8ge30gOiBjb250ZXh0SW5bcF07XG4gICAgICBmb3IgKHZhciBwIGluIGNvbnRleHRJbi5hY2Nlc3MpIGNvbnRleHQuYWNjZXNzW3BdID0gY29udGV4dEluLmFjY2Vzc1twXTtcbiAgICAgIGNvbnRleHQuYWRkSW5pdGlhbGl6ZXIgPSBmdW5jdGlvbiAoZikgeyBpZiAoZG9uZSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBhZGQgaW5pdGlhbGl6ZXJzIGFmdGVyIGRlY29yYXRpb24gaGFzIGNvbXBsZXRlZFwiKTsgZXh0cmFJbml0aWFsaXplcnMucHVzaChhY2NlcHQoZiB8fCBudWxsKSk7IH07XG4gICAgICB2YXIgcmVzdWx0ID0gKDAsIGRlY29yYXRvcnNbaV0pKGtpbmQgPT09IFwiYWNjZXNzb3JcIiA/IHsgZ2V0OiBkZXNjcmlwdG9yLmdldCwgc2V0OiBkZXNjcmlwdG9yLnNldCB9IDogZGVzY3JpcHRvcltrZXldLCBjb250ZXh0KTtcbiAgICAgIGlmIChraW5kID09PSBcImFjY2Vzc29yXCIpIHtcbiAgICAgICAgICBpZiAocmVzdWx0ID09PSB2b2lkIDApIGNvbnRpbnVlO1xuICAgICAgICAgIGlmIChyZXN1bHQgPT09IG51bGwgfHwgdHlwZW9mIHJlc3VsdCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdCBleHBlY3RlZFwiKTtcbiAgICAgICAgICBpZiAoXyA9IGFjY2VwdChyZXN1bHQuZ2V0KSkgZGVzY3JpcHRvci5nZXQgPSBfO1xuICAgICAgICAgIGlmIChfID0gYWNjZXB0KHJlc3VsdC5zZXQpKSBkZXNjcmlwdG9yLnNldCA9IF87XG4gICAgICAgICAgaWYgKF8gPSBhY2NlcHQocmVzdWx0LmluaXQpKSBpbml0aWFsaXplcnMudW5zaGlmdChfKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKF8gPSBhY2NlcHQocmVzdWx0KSkge1xuICAgICAgICAgIGlmIChraW5kID09PSBcImZpZWxkXCIpIGluaXRpYWxpemVycy51bnNoaWZ0KF8pO1xuICAgICAgICAgIGVsc2UgZGVzY3JpcHRvcltrZXldID0gXztcbiAgICAgIH1cbiAgfVxuICBpZiAodGFyZ2V0KSBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBjb250ZXh0SW4ubmFtZSwgZGVzY3JpcHRvcik7XG4gIGRvbmUgPSB0cnVlO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fcnVuSW5pdGlhbGl6ZXJzKHRoaXNBcmcsIGluaXRpYWxpemVycywgdmFsdWUpIHtcbiAgdmFyIHVzZVZhbHVlID0gYXJndW1lbnRzLmxlbmd0aCA+IDI7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgaW5pdGlhbGl6ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YWx1ZSA9IHVzZVZhbHVlID8gaW5pdGlhbGl6ZXJzW2ldLmNhbGwodGhpc0FyZywgdmFsdWUpIDogaW5pdGlhbGl6ZXJzW2ldLmNhbGwodGhpc0FyZyk7XG4gIH1cbiAgcmV0dXJuIHVzZVZhbHVlID8gdmFsdWUgOiB2b2lkIDA7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19wcm9wS2V5KHgpIHtcbiAgcmV0dXJuIHR5cGVvZiB4ID09PSBcInN5bWJvbFwiID8geCA6IFwiXCIuY29uY2F0KHgpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fc2V0RnVuY3Rpb25OYW1lKGYsIG5hbWUsIHByZWZpeCkge1xuICBpZiAodHlwZW9mIG5hbWUgPT09IFwic3ltYm9sXCIpIG5hbWUgPSBuYW1lLmRlc2NyaXB0aW9uID8gXCJbXCIuY29uY2F0KG5hbWUuZGVzY3JpcHRpb24sIFwiXVwiKSA6IFwiXCI7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZiwgXCJuYW1lXCIsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogcHJlZml4ID8gXCJcIi5jb25jYXQocHJlZml4LCBcIiBcIiwgbmFtZSkgOiBuYW1lIH0pO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcbiAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICB3aGlsZSAoZyAmJiAoZyA9IDAsIG9wWzBdICYmIChfID0gMCkpLCBfKSB0cnkge1xuICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gIH1cbn1cblxuZXhwb3J0IHZhciBfX2NyZWF0ZUJpbmRpbmcgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcbiAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcbiAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XG4gIH1cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gIG9bazJdID0gbVtrXTtcbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIG8pIHtcbiAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBwKSkgX19jcmVhdGVCaW5kaW5nKG8sIG0sIHApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xuICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xuICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcbiAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xuICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XG4gICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xuICAgICAgfVxuICB9O1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xuICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XG4gIGlmICghbSkgcmV0dXJuIG87XG4gIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xuICB0cnkge1xuICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XG4gIH1cbiAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XG4gIGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcbiAgICAgIH1cbiAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxuICB9XG4gIHJldHVybiBhcjtcbn1cblxuLyoqIEBkZXByZWNhdGVkICovXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XG4gIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxuICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xuICByZXR1cm4gYXI7XG59XG5cbi8qKiBAZGVwcmVjYXRlZCAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xuICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcbiAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxuICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXG4gICAgICAgICAgcltrXSA9IGFbal07XG4gIHJldHVybiByO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheSh0bywgZnJvbSwgcGFjaykge1xuICBpZiAocGFjayB8fCBhcmd1bWVudHMubGVuZ3RoID09PSAyKSBmb3IgKHZhciBpID0gMCwgbCA9IGZyb20ubGVuZ3RoLCBhcjsgaSA8IGw7IGkrKykge1xuICAgICAgaWYgKGFyIHx8ICEoaSBpbiBmcm9tKSkge1xuICAgICAgICAgIGlmICghYXIpIGFyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSwgMCwgaSk7XG4gICAgICAgICAgYXJbaV0gPSBmcm9tW2ldO1xuICAgICAgfVxuICB9XG4gIHJldHVybiB0by5jb25jYXQoYXIgfHwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XG4gIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcbiAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcbiAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcbiAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xuICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cbiAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxuICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cbiAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxuICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XG4gIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xuICB2YXIgaSwgcDtcbiAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcbiAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogZmFsc2UgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xuICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xuICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xuICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XG4gIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cbiAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcbiAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cbiAgcmV0dXJuIGNvb2tlZDtcbn07XG5cbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gIG9bXCJkZWZhdWx0XCJdID0gdjtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XG4gIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xuICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xuICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcbiAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xuICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xuICBpZiAoa2luZCA9PT0gXCJtXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIG1ldGhvZCBpcyBub3Qgd3JpdGFibGVcIik7XG4gIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcbiAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgcmV0dXJuIChraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlciwgdmFsdWUpIDogZiA/IGYudmFsdWUgPSB2YWx1ZSA6IHN0YXRlLnNldChyZWNlaXZlciwgdmFsdWUpKSwgdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkSW4oc3RhdGUsIHJlY2VpdmVyKSB7XG4gIGlmIChyZWNlaXZlciA9PT0gbnVsbCB8fCAodHlwZW9mIHJlY2VpdmVyICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiByZWNlaXZlciAhPT0gXCJmdW5jdGlvblwiKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB1c2UgJ2luJyBvcGVyYXRvciBvbiBub24tb2JqZWN0XCIpO1xuICByZXR1cm4gdHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciA9PT0gc3RhdGUgOiBzdGF0ZS5oYXMocmVjZWl2ZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hZGREaXNwb3NhYmxlUmVzb3VyY2UoZW52LCB2YWx1ZSwgYXN5bmMpIHtcbiAgaWYgKHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB2b2lkIDApIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiB2YWx1ZSAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0IGV4cGVjdGVkLlwiKTtcbiAgICB2YXIgZGlzcG9zZTtcbiAgICBpZiAoYXN5bmMpIHtcbiAgICAgICAgaWYgKCFTeW1ib2wuYXN5bmNEaXNwb3NlKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jRGlzcG9zZSBpcyBub3QgZGVmaW5lZC5cIik7XG4gICAgICAgIGRpc3Bvc2UgPSB2YWx1ZVtTeW1ib2wuYXN5bmNEaXNwb3NlXTtcbiAgICB9XG4gICAgaWYgKGRpc3Bvc2UgPT09IHZvaWQgMCkge1xuICAgICAgICBpZiAoIVN5bWJvbC5kaXNwb3NlKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmRpc3Bvc2UgaXMgbm90IGRlZmluZWQuXCIpO1xuICAgICAgICBkaXNwb3NlID0gdmFsdWVbU3ltYm9sLmRpc3Bvc2VdO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGRpc3Bvc2UgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdCBub3QgZGlzcG9zYWJsZS5cIik7XG4gICAgZW52LnN0YWNrLnB1c2goeyB2YWx1ZTogdmFsdWUsIGRpc3Bvc2U6IGRpc3Bvc2UsIGFzeW5jOiBhc3luYyB9KTtcbiAgfVxuICBlbHNlIGlmIChhc3luYykge1xuICAgIGVudi5zdGFjay5wdXNoKHsgYXN5bmM6IHRydWUgfSk7XG4gIH1cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG52YXIgX1N1cHByZXNzZWRFcnJvciA9IHR5cGVvZiBTdXBwcmVzc2VkRXJyb3IgPT09IFwiZnVuY3Rpb25cIiA/IFN1cHByZXNzZWRFcnJvciA6IGZ1bmN0aW9uIChlcnJvciwgc3VwcHJlc3NlZCwgbWVzc2FnZSkge1xuICB2YXIgZSA9IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgcmV0dXJuIGUubmFtZSA9IFwiU3VwcHJlc3NlZEVycm9yXCIsIGUuZXJyb3IgPSBlcnJvciwgZS5zdXBwcmVzc2VkID0gc3VwcHJlc3NlZCwgZTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2Rpc3Bvc2VSZXNvdXJjZXMoZW52KSB7XG4gIGZ1bmN0aW9uIGZhaWwoZSkge1xuICAgIGVudi5lcnJvciA9IGVudi5oYXNFcnJvciA/IG5ldyBfU3VwcHJlc3NlZEVycm9yKGUsIGVudi5lcnJvciwgXCJBbiBlcnJvciB3YXMgc3VwcHJlc3NlZCBkdXJpbmcgZGlzcG9zYWwuXCIpIDogZTtcbiAgICBlbnYuaGFzRXJyb3IgPSB0cnVlO1xuICB9XG4gIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgd2hpbGUgKGVudi5zdGFjay5sZW5ndGgpIHtcbiAgICAgIHZhciByZWMgPSBlbnYuc3RhY2sucG9wKCk7XG4gICAgICB0cnkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjLmRpc3Bvc2UgJiYgcmVjLmRpc3Bvc2UuY2FsbChyZWMudmFsdWUpO1xuICAgICAgICBpZiAocmVjLmFzeW5jKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3VsdCkudGhlbihuZXh0LCBmdW5jdGlvbihlKSB7IGZhaWwoZSk7IHJldHVybiBuZXh0KCk7IH0pO1xuICAgICAgfVxuICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICBmYWlsKGUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW52Lmhhc0Vycm9yKSB0aHJvdyBlbnYuZXJyb3I7XG4gIH1cbiAgcmV0dXJuIG5leHQoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBfX2V4dGVuZHMsXG4gIF9fYXNzaWduLFxuICBfX3Jlc3QsXG4gIF9fZGVjb3JhdGUsXG4gIF9fcGFyYW0sXG4gIF9fbWV0YWRhdGEsXG4gIF9fYXdhaXRlcixcbiAgX19nZW5lcmF0b3IsXG4gIF9fY3JlYXRlQmluZGluZyxcbiAgX19leHBvcnRTdGFyLFxuICBfX3ZhbHVlcyxcbiAgX19yZWFkLFxuICBfX3NwcmVhZCxcbiAgX19zcHJlYWRBcnJheXMsXG4gIF9fc3ByZWFkQXJyYXksXG4gIF9fYXdhaXQsXG4gIF9fYXN5bmNHZW5lcmF0b3IsXG4gIF9fYXN5bmNEZWxlZ2F0b3IsXG4gIF9fYXN5bmNWYWx1ZXMsXG4gIF9fbWFrZVRlbXBsYXRlT2JqZWN0LFxuICBfX2ltcG9ydFN0YXIsXG4gIF9faW1wb3J0RGVmYXVsdCxcbiAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCxcbiAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCxcbiAgX19jbGFzc1ByaXZhdGVGaWVsZEluLFxuICBfX2FkZERpc3Bvc2FibGVSZXNvdXJjZSxcbiAgX19kaXNwb3NlUmVzb3VyY2VzLFxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAqIGFzIGxvYWRlcnMgZnJvbSBcIkBsdHMvbG9hZGVycy9sZWdhY3kvbGVnYWN5LWdsVEYyRmlsZUxvYWRlclwiO1xyXG5leHBvcnQgeyBsb2FkZXJzIH07XHJcbmV4cG9ydCBkZWZhdWx0IGxvYWRlcnM7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==