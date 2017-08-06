(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Vector = __webpack_require__(14);

var _Vector2 = _interopRequireDefault(_Vector);

var _FrameBuffer = __webpack_require__(22);

var _FrameBuffer2 = _interopRequireDefault(_FrameBuffer);

var _Texture2D = __webpack_require__(25);

var _Texture2D2 = _interopRequireDefault(_Texture2D);

var _SceneComponent = __webpack_require__(5);

var _SceneComponent2 = _interopRequireDefault(_SceneComponent);

var _ForwardShadingManagerComponent = __webpack_require__(3);

var _ForwardShadingManagerComponent2 = _interopRequireDefault(_ForwardShadingManagerComponent);

var _RenderBuffer = __webpack_require__(24);

var _RenderBuffer2 = _interopRequireDefault(_RenderBuffer);

var _Component2 = __webpack_require__(1);

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SceneLightManager = function (_Component) {
    _inherits(SceneLightManager, _Component);

    function SceneLightManager() {
        _classCallCheck(this, SceneLightManager);

        var _this = _possibleConstructorReturn(this, (SceneLightManager.__proto__ || Object.getPrototypeOf(SceneLightManager)).apply(this, arguments));

        _this.lights = {
            point: [],
            directional: [],
            spot: []
        };
        _this.shadowMapCameras = [];
        return _this;
    }

    _createClass(SceneLightManager, [{
        key: "$awake",
        value: function $awake() {
            var _this2 = this;

            this.getAttributeRaw("shadowQuality").watch(function (v) {
                _this2._singleShadowMapSize = Math.pow(2, v);
            }, true);
        }
    }, {
        key: "$mount",
        value: function $mount() {
            this._gl = this.companion.get("gl");
            this._shadowMapTexture = new _Texture2D2.default(this._gl);
            this._lightMatricesTexture = new _Texture2D2.default(this._gl);
            this._lightMatricesTexture.magFilter = WebGLRenderingContext.NEAREST;
            this._lightMatricesTexture.minFilter = WebGLRenderingContext.NEAREST;
            this._shadowMapRenderbuffer = new _RenderBuffer2.default(this._gl);
            this._maxTextureSize = this._gl.getParameter(WebGLRenderingContext.MAX_TEXTURE_SIZE);
            this._shadingManager = this.node.getComponentInAncestor(_ForwardShadingManagerComponent2.default);
            var scene = this.node.getComponent(_SceneComponent2.default);
            this._lightSceneDesc = scene.sceneDescription.lights;
            this._shadingManager.addSceneLightManager(this);
            this._updateShadowMapSize();
            this.shadowMapFBO = new _FrameBuffer2.default(this._gl);
            this.shadowMapFBO.update(this._shadowMapTexture);
            this.shadowMapFBO.update(this._shadowMapRenderbuffer);
        }
    }, {
        key: "$unmount",
        value: function $unmount() {
            this._shadingManager.removeSceneLightManager(this);
            this.shadowMapFBO.destroy();
            this._shadowMapTexture.destroy();
        }
    }, {
        key: "addLight",
        value: function addLight(light) {
            switch (light.lightType) {
                case "point":
                    this.lights.point.push(light);
                    this._lightSceneDesc.point.colors.incrementLength();
                    this._lightSceneDesc.point.positions.incrementLength();
                    this._lightSceneDesc.point.params.incrementLength();
                    break;
                case "directional":
                    this.lights.directional.push(light);
                    this._lightSceneDesc.directional.colors.incrementLength();
                    this._lightSceneDesc.directional.directions.incrementLength();
                    this._lightSceneDesc.directional.params.incrementLength();
                    break;
                case "spot":
                    this.lights.spot.push(light);
                    this._lightSceneDesc.spot.colors.incrementLength();
                    this._lightSceneDesc.spot.directions.incrementLength();
                    this._lightSceneDesc.spot.positions.incrementLength();
                    this._lightSceneDesc.spot.params.incrementLength();
                    break;
            }
            this._shadingManager.updateLightCount();
        }
    }, {
        key: "removeLight",
        value: function removeLight(light) {
            switch (light.lightType) {
                case "point":
                    var i1 = this.lights.point.indexOf(light);
                    this.lights.point.splice(i1, 1);
                    this._lightSceneDesc.point.colors.decrementLength();
                    this._lightSceneDesc.point.positions.decrementLength();
                    this._lightSceneDesc.point.params.decrementLength();
                    break;
                case "directional":
                    var i2 = this.lights.directional.indexOf(light);
                    this.lights.directional.splice(i2, 1);
                    this._lightSceneDesc.directional.colors.decrementLength();
                    this._lightSceneDesc.directional.directions.decrementLength();
                    this._lightSceneDesc.directional.params.decrementLength();
                    break;
                case "spot":
                    var i3 = this.lights.spot.indexOf(light);
                    this.lights.spot.splice(i3, 1);
                    this._lightSceneDesc.spot.colors.decrementLength();
                    this._lightSceneDesc.spot.directions.decrementLength();
                    this._lightSceneDesc.spot.positions.decrementLength();
                    this._lightSceneDesc.spot.params.decrementLength();
                    break;
            }
            this._shadingManager.updateLightCount();
        }
    }, {
        key: "addShadowMapCamera",
        value: function addShadowMapCamera(smCamera) {
            this.shadowMapCameras.push(smCamera);
            smCamera.shadowMapIndex = this.shadowMapCameras.length - 1;
            this._updateShadowMapSize();
        }
    }, {
        key: "removeShadowMapCamera",
        value: function removeShadowMapCamera(smCamera) {
            var index = this.shadowMapCameras.indexOf(smCamera);
            this.shadowMapCameras.splice(index, 1);
            for (var i = 0; i < this.shadowMapCameras.length; i++) {
                this.shadowMapCameras[i].shadowMapIndex = i;
            }
            this._updateShadowMapSize();
        }
    }, {
        key: "viewportByShadowmapIndex",
        value: function viewportByShadowmapIndex(index) {
            var i = index % this._shadowMapElementCounts.X;
            var j = (index - i) / this._shadowMapElementCounts.X;
            this._gl.viewport(i * this._singleShadowMapSize, j * this._singleShadowMapSize, this._singleShadowMapSize, this._singleShadowMapSize);
        }
    }, {
        key: "updateLightMatricies",
        value: function updateLightMatricies(camera) {
            var _this3 = this;

            this.shadowMapCameras.forEach(function (v) {
                v.updateCamera(camera);
            });
            this.shadowMapCameras.forEach(function (v, i) {
                var pv = v.ProjectionViewMatrix.rawElements;
                for (var j = 0; j < 16; j++) {
                    _this3.lightMatrices[16 * i + j] = pv[j];
                }
            });
            this._updateLightMatricesTexture();
        }
        /**
         * Update texture size
         */

    }, {
        key: "_updateShadowMapSize",
        value: function _updateShadowMapSize() {
            var max = this._maxTextureSize;
            var single = this._singleShadowMapSize; // in px
            var byEdge = max / single;
            var count = this.shadowMapCameras.length;
            var size = count === 0 ? 0 : Math.pow(2, Math.ceil(Math.log2(Math.ceil(Math.sqrt(count))))) * single;
            if (size > max) {
                throw new Error("Max shadow map buffer size overflow");
            }
            if (count === 0) {
                this._shadowMapTexture.update(0, 1, 1, 0, WebGLRenderingContext.RGB, WebGLRenderingContext.UNSIGNED_BYTE);
                this._shadowMapRenderbuffer.update(WebGLRenderingContext.DEPTH_COMPONENT16, 1, 1);
            } else {
                this._shadowMapTexture.update(0, size, size, 0, WebGLRenderingContext.RGB, WebGLRenderingContext.UNSIGNED_BYTE);
                this._shadowMapRenderbuffer.update(WebGLRenderingContext.DEPTH_COMPONENT16, size, size);
            }
            var matCount = Math.pow(2, Math.ceil(Math.log2(count)));
            this.lightMatrices = new Float32Array(matCount * 16);
            this._shadowMapElementCounts = new _Vector2.default(size / single, size / single);
            this._updateLightMatricesTexture();
            this._lightSceneDesc.shadowMap = {
                shadowMapCountPerEdge: this._shadowMapElementCounts,
                count: matCount,
                shadowMap: this._shadowMapTexture,
                lightMatrices: this._lightMatricesTexture,
                pixelSize: 1.0 / this._singleShadowMapSize
            };
        }
    }, {
        key: "_updateLightMatricesTexture",
        value: function _updateLightMatricesTexture() {
            var count = this.shadowMapCameras.length;
            this._lightMatricesTexture.update(0, 4, Math.pow(2, Math.ceil(Math.log2(count))), 0, WebGLRenderingContext.RGBA, WebGLRenderingContext.FLOAT, this.lightMatrices);
        }
    }]);

    return SceneLightManager;
}(_Component3.default);

exports.default = SceneLightManager;

SceneLightManager.attributes = {
    shadowQuality: {
        converter: "Number",
        default: 9
    }
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.Node.Component;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SceneComponent = __webpack_require__(5);

var _SceneComponent2 = _interopRequireDefault(_SceneComponent);

var _SceneLightManager = __webpack_require__(0);

var _SceneLightManager2 = _interopRequireDefault(_SceneLightManager);

var _Component2 = __webpack_require__(1);

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LightTypeComponentBase = function (_Component) {
    _inherits(LightTypeComponentBase, _Component);

    function LightTypeComponentBase() {
        _classCallCheck(this, LightTypeComponentBase);

        return _possibleConstructorReturn(this, (LightTypeComponentBase.__proto__ || Object.getPrototypeOf(LightTypeComponentBase)).apply(this, arguments));
    }

    _createClass(LightTypeComponentBase, [{
        key: "$mount",
        value: function $mount() {
            this.__sceneLightManager = this.node.getComponentInAncestor(_SceneLightManager2.default);
            var sceneDesc = this.__sceneLightManager.node.getComponent(_SceneComponent2.default).sceneDescription;
            this.__lightDesc = sceneDesc.lights;
            this.__sceneLightManager.addLight(this);
        }
    }, {
        key: "$unmount",
        value: function $unmount() {
            this.__sceneLightManager.removeLight(this);
        }
    }, {
        key: "__ensureIndex",
        value: function __ensureIndex(lightParameters) {
            var index = lightParameters.indicies.indexOf(this.id);
            if (index >= 0) {
                return index;
            } else {
                lightParameters.indicies.push(this.id);
                return lightParameters.indicies.length - 1;
            }
        }
    }]);

    return LightTypeComponentBase;
}(_Component3.default);

exports.default = LightTypeComponentBase;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Component2 = __webpack_require__(1);

var _Component3 = _interopRequireDefault(_Component2);

var _MaterialFactory = __webpack_require__(20);

var _MaterialFactory2 = _interopRequireDefault(_MaterialFactory);

var _MaterialContainerComponent = __webpack_require__(18);

var _MaterialContainerComponent2 = _interopRequireDefault(_MaterialContainerComponent);

var _Basic = __webpack_require__(31);

var _Basic2 = _interopRequireDefault(_Basic);

var _Simple = __webpack_require__(33);

var _Simple2 = _interopRequireDefault(_Simple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ForwardShadingManagerComponent = function (_Component) {
    _inherits(ForwardShadingManagerComponent, _Component);

    function ForwardShadingManagerComponent() {
        _classCallCheck(this, ForwardShadingManagerComponent);

        var _this = _possibleConstructorReturn(this, (ForwardShadingManagerComponent.__proto__ || Object.getPrototypeOf(ForwardShadingManagerComponent)).apply(this, arguments));

        _this._sceneLightManagers = [];
        return _this;
    }

    _createClass(ForwardShadingManagerComponent, [{
        key: "$awake",
        value: function $awake() {
            this._macroRegistry = this.companion.get("MaterialFactory").macro;
            this._macroRegistry.setValue("DIR_LIGHT_COUNT", "0");
            this._macroRegistry.setValue("POINT_LIGHT_COUNT", "0");
            this._macroRegistry.setValue("SPOT_LIGHT_COUNT", "0");
            this._macroRegistry.setValue("SHADOW_MAP_COUNT", "0");
            _MaterialFactory2.default.addSORTMaterial("basic-shading", _Basic2.default);
            _MaterialFactory2.default.addSORTMaterial("simple-shading", _Simple2.default);
            var defaultShader = this.getAttribute("useHighQualityShading") ? "basic-shading" : "simple-shading";
            _MaterialContainerComponent2.default.rewriteDefaultMaterial(defaultShader);
        }
    }, {
        key: "addSceneLightManager",
        value: function addSceneLightManager(s) {
            this._sceneLightManagers.push(s);
            this.updateLightCount();
        }
    }, {
        key: "removeSceneLightManager",
        value: function removeSceneLightManager(s) {
            var o = this._sceneLightManagers.indexOf(s);
            this._sceneLightManagers.splice(o, 1);
            this.updateLightCount();
        }
    }, {
        key: "updateLightCount",
        value: function updateLightCount() {
            var d = 0,
                s = 0,
                p = 0,
                sm = 0;
            for (var i = 0; i < this._sceneLightManagers.length; i++) {
                var slm = this._sceneLightManagers[i];
                d = Math.max(slm.lights.directional.length, d);
                p = Math.max(slm.lights.point.length, p);
                s = Math.max(slm.lights.spot.length, s);
                sm = Math.max(slm.shadowMapCameras.length, sm);
            }
            this._macroRegistry.setValue("DIR_LIGHT_COUNT", d + "");
            this._macroRegistry.setValue("POINT_LIGHT_COUNT", p + "");
            this._macroRegistry.setValue("SPOT_LIGHT_COUNT", s + "");
            this._macroRegistry.setValue("SHADOW_MAP_COUNT", sm + "");
        }
    }]);

    return ForwardShadingManagerComponent;
}(_Component3.default);

exports.default = ForwardShadingManagerComponent;

ForwardShadingManagerComponent.attributes = {
    useHighQualityShading: {
        converter: "Boolean",
        default: false
    }
};
ForwardShadingManagerComponent._typeToMacros = {
    point: "POINT_LIGHT_COUNT",
    directional: "DIR_LIGHT_COUNT",
    spot: "SPOT_LIGHT_COUNT"
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Matrix = __webpack_require__(28);

var _Matrix2 = _interopRequireDefault(_Matrix);

var _Vector = __webpack_require__(29);

var _Vector2 = _interopRequireDefault(_Vector);

var _SceneLightManager = __webpack_require__(0);

var _SceneLightManager2 = _interopRequireDefault(_SceneLightManager);

var _CameraComponent2 = __webpack_require__(17);

var _CameraComponent3 = _interopRequireDefault(_CameraComponent2);

var _AABB = __webpack_require__(27);

var _AABB2 = _interopRequireDefault(_AABB);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShadowMapCameraComponent = function (_CameraComponent) {
    _inherits(ShadowMapCameraComponent, _CameraComponent);

    function ShadowMapCameraComponent() {
        _classCallCheck(this, ShadowMapCameraComponent);

        var _this = _possibleConstructorReturn(this, (ShadowMapCameraComponent.__proto__ || Object.getPrototypeOf(ShadowMapCameraComponent)).apply(this, arguments));

        _this._sceneAABBCache = new _AABB2.default();
        _this._vectorCache = new _Vector2.default(0, 0, 0);
        return _this;
    }

    _createClass(ShadowMapCameraComponent, [{
        key: "$awake",
        value: function $awake() {
            this.Near = 0.01;
            this.Far = 50.0;
            this.OrthographicMode = true;
            this.OrthoSize = 30;
            this.AutoAspect = false;
            this.Aspect = 1.0;
        }
    }, {
        key: "$mount",
        value: function $mount() {
            _get(ShadowMapCameraComponent.prototype.__proto__ || Object.getPrototypeOf(ShadowMapCameraComponent.prototype), "$mount", this).call(this);
            var sm = this.containedScene.node.getComponent(_SceneLightManager2.default);
            sm.addShadowMapCamera(this);
        }
    }, {
        key: "updateCamera",
        value: function updateCamera(sceneCamera) {
            this._sceneAABBCache.clear();
            var ipv = _Matrix2.default.inverse(sceneCamera.ProjectionViewMatrix);
            for (var ix = 0; ix < 2; ix++) {
                for (var iy = 0; iy < 2; iy++) {
                    for (var iz = 0; iz < 2; iz++) {
                        this._vectorCache.rawElements[0] = ix == 0 ? -1 : 1;
                        this._vectorCache.rawElements[1] = iy == 0 ? -1 : 1;
                        this._vectorCache.rawElements[2] = iz == 0 ? -1 : 1;
                        this._sceneAABBCache.expand(_Matrix2.default.transformPoint(ipv, this._vectorCache));
                    }
                }
            }
            var diagonal = this._sceneAABBCache.pointLBF.subtractWith(this._sceneAABBCache.Center).magnitude;
            //this.transform.localPosition = this._sceneAABBCache.Center.addWith(this.transform.forward.negateThis().multiplyWith(diagonal));
        }
    }, {
        key: "$unmount",
        value: function $unmount() {
            var sm = this.containedScene.node.getComponent(_SceneLightManager2.default);
            sm.removeShadowMapCamera(this);
        }
    }]);

    return ShadowMapCameraComponent;
}(_CameraComponent3.default);

exports.default = ShadowMapCameraComponent;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.fundamental.Components.SceneComponent;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _LightTypeComponentBase = __webpack_require__(2);

var _LightTypeComponentBase2 = _interopRequireDefault(_LightTypeComponentBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DirectionalLightTypeComponent = function (_LightTypeComponentBa) {
    _inherits(DirectionalLightTypeComponent, _LightTypeComponentBa);

    function DirectionalLightTypeComponent() {
        _classCallCheck(this, DirectionalLightTypeComponent);

        return _possibleConstructorReturn(this, (DirectionalLightTypeComponent.__proto__ || Object.getPrototypeOf(DirectionalLightTypeComponent)).apply(this, arguments));
    }

    _createClass(DirectionalLightTypeComponent, [{
        key: "$awake",
        value: function $awake() {
            var _this2 = this;

            this.lightType = "directional";
            this.getAttributeRaw("color").boundTo("_color");
            this.getAttributeRaw("intensity").boundTo("_intensity");
            this.getAttributeRaw("shadow").watch(function (v) {
                return _this2._useShadowChanged(v);
            }, true);
            this._transform = this.node.getComponent("Transform");
        }
    }, {
        key: "$update",
        value: function $update(sceneDesc) {
            var directionals = sceneDesc.lights.directional;
            var index = this.__ensureIndex(directionals);
            var d = this._transform.forward;
            var p = this._transform.globalPosition;
            directionals.directions.set(index, d.X, d.Y, d.Z);
            var c = this._color;
            directionals.colors.set(index, c.R * this._intensity, c.G * this._intensity, c.B * this._intensity);
            directionals.params.set(index, this._shadowCamera ? this._shadowCamera.shadowMapIndex : -1, p.X, p.Y, p.Z);
        }
    }, {
        key: "_useShadowChanged",
        value: function _useShadowChanged(v) {
            if (!v && this._shadowCamera) {
                this._shadowCamera.dispose();
                this._shadowCamera = null;
            } else if (v) {
                this._shadowCamera = this.node.addComponent("ShadowMapCamera");
            }
        }
    }]);

    return DirectionalLightTypeComponent;
}(_LightTypeComponentBase2.default);

exports.default = DirectionalLightTypeComponent;

DirectionalLightTypeComponent.attributes = {
    color: {
        converter: "Color3",
        default: "white"
    },
    intensity: {
        converter: "Number",
        default: 1
    },
    shadow: {
        converter: "Boolean",
        default: false
    }
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Component2 = __webpack_require__(1);

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LightComponent = function (_Component) {
    _inherits(LightComponent, _Component);

    function LightComponent() {
        _classCallCheck(this, LightComponent);

        return _possibleConstructorReturn(this, (LightComponent.__proto__ || Object.getPrototypeOf(LightComponent)).apply(this, arguments));
    }

    _createClass(LightComponent, [{
        key: "$awake",
        value: function $awake() {
            var _this2 = this;

            this.getAttributeRaw("type").watch(function (v) {
                return _this2._onLightTypeChanged(v);
            }, true);
        }
        /**
         * Called when the light type was changed
         * @param {string} type [description]
         */

    }, {
        key: "_onLightTypeChanged",
        value: function _onLightTypeChanged(type) {
            type = type.toLowerCase();
            // check if the light type was changed actually.
            if (type === this._lastLightType) {
                return;
            } else {
                this._lastLightType = type;
            }
            this._removeLastTypeComponent();
            this._addLightTypeComponent(type);
        }
    }, {
        key: "_addLightTypeComponent",
        value: function _addLightTypeComponent(type) {
            switch (type) {
                case "directional":
                    this._lightTypeComponent = this.node.addComponent("DirectionalLightType", {}, true);
                    break;
                case "point":
                    this._lightTypeComponent = this.node.addComponent("PointLightType", {}, true);
                    break;
                case "spot":
                    this._lightTypeComponent = this.node.addComponent("SpotLightType", {}, true);
                    break;
            }
        }
    }, {
        key: "_removeLastTypeComponent",
        value: function _removeLastTypeComponent() {
            if (this._lightTypeComponent) {
                this._lightTypeComponent.dispose();
            }
        }
    }]);

    return LightComponent;
}(_Component3.default);

exports.default = LightComponent;

LightComponent.attributes = {
    type: {
        converter: "String",
        default: "Directional"
    }
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _LightTypeComponentBase = __webpack_require__(2);

var _LightTypeComponentBase2 = _interopRequireDefault(_LightTypeComponentBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PointLightTypeComponent = function (_LightTypeComponentBa) {
    _inherits(PointLightTypeComponent, _LightTypeComponentBa);

    function PointLightTypeComponent() {
        _classCallCheck(this, PointLightTypeComponent);

        return _possibleConstructorReturn(this, (PointLightTypeComponent.__proto__ || Object.getPrototypeOf(PointLightTypeComponent)).apply(this, arguments));
    }

    _createClass(PointLightTypeComponent, [{
        key: "$awake",
        value: function $awake() {
            this.lightType = "point";
            this.getAttributeRaw("color").boundTo("_color");
            this._transform = this.node.getComponent("Transform");
            this.getAttributeRaw("distance").boundTo("_distance");
            this.getAttributeRaw("decay").boundTo("_decay");
            this.getAttributeRaw("intensity").boundTo("_intensity");
        }
    }, {
        key: "$update",
        value: function $update(sceneDesc) {
            var points = sceneDesc.lights.point;
            var index = this.__ensureIndex(points);
            var pos = this._transform.globalPosition;
            points.positions.set(index, pos.X, pos.Y, pos.Z);
            points.colors.set(index, this._color.R * this._intensity, this._color.G * this._intensity, this._color.B * this._intensity);
            points.params.set(index, this._distance, this._decay);
        }
    }]);

    return PointLightTypeComponent;
}(_LightTypeComponentBase2.default);

exports.default = PointLightTypeComponent;

PointLightTypeComponent.attributes = {
    color: {
        converter: "Color3",
        default: "white"
    },
    distance: {
        converter: "Number",
        default: 5.0
    },
    decay: {
        converter: "Number",
        default: 2.0
    },
    intensity: {
        converter: "Number",
        default: 1
    }
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SceneLightManager = __webpack_require__(0);

var _SceneLightManager2 = _interopRequireDefault(_SceneLightManager);

var _Component2 = __webpack_require__(1);

var _Component3 = _interopRequireDefault(_Component2);

var _RenderSceneComponent = __webpack_require__(19);

var _RenderSceneComponent2 = _interopRequireDefault(_RenderSceneComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RenderShadowMapComponent = function (_Component) {
    _inherits(RenderShadowMapComponent, _Component);

    function RenderShadowMapComponent() {
        _classCallCheck(this, RenderShadowMapComponent);

        return _possibleConstructorReturn(this, (RenderShadowMapComponent.__proto__ || Object.getPrototypeOf(RenderShadowMapComponent)).apply(this, arguments));
    }

    _createClass(RenderShadowMapComponent, [{
        key: "$mount",
        value: function $mount() {
            this._renderSceneComponent = this.node.getComponent(_RenderSceneComponent2.default);
            if (!this._renderSceneComponent) {
                throw new Error("There was no RenderScene component found on the node attached RenderShadowMapComponent");
            }
            this._gl = this.companion.get("gl");
        }
    }, {
        key: "$render",
        value: function $render(args) {
            var _this2 = this;

            var sceneCamera = args.camera ? args.camera : this._renderSceneComponent.camera;
            var slm = sceneCamera.containedScene.node.getComponent(_SceneLightManager2.default);
            if (slm.shadowMapCameras.length === 0) {
                return;
            }
            slm.shadowMapFBO.bind();
            this._gl.clearColor(0, 0, 0, 0);
            this._gl.clearDepth(1);
            this._gl.clear(WebGLRenderingContext.COLOR_BUFFER_BIT | WebGLRenderingContext.DEPTH_BUFFER_BIT);
            slm.updateLightMatricies(sceneCamera);
            slm.shadowMapCameras.forEach(function (v) {
                slm.viewportByShadowmapIndex(v.shadowMapIndex);
                v.updateContainedScene(args.timer);
                v.renderScene({
                    camera: v,
                    buffers: null,
                    layer: "default",
                    viewport: args.viewport,
                    technique: "depth",
                    renderer: _this2._renderSceneComponent,
                    sceneDescription: {},
                    timer: args.timer
                });
            });
            this._gl.flush();
            this._gl.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER, null);
        }
    }]);

    return RenderShadowMapComponent;
}(_Component3.default);

exports.default = RenderShadowMapComponent;

RenderShadowMapComponent.attributes = {};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _ShadowMapCameraComponent = __webpack_require__(4);

var _ShadowMapCameraComponent2 = _interopRequireDefault(_ShadowMapCameraComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SpotLightShadowMapCameraComponent = function (_ShadowMapCameraCompo) {
    _inherits(SpotLightShadowMapCameraComponent, _ShadowMapCameraCompo);

    function SpotLightShadowMapCameraComponent() {
        _classCallCheck(this, SpotLightShadowMapCameraComponent);

        return _possibleConstructorReturn(this, (SpotLightShadowMapCameraComponent.__proto__ || Object.getPrototypeOf(SpotLightShadowMapCameraComponent)).apply(this, arguments));
    }

    _createClass(SpotLightShadowMapCameraComponent, [{
        key: "$awake",
        value: function $awake() {
            _get(SpotLightShadowMapCameraComponent.prototype.__proto__ || Object.getPrototypeOf(SpotLightShadowMapCameraComponent.prototype), "$awake", this).call(this);
            this.OrthographicMode = false;
        }
    }]);

    return SpotLightShadowMapCameraComponent;
}(_ShadowMapCameraComponent2.default);

exports.default = SpotLightShadowMapCameraComponent;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _LightTypeComponentBase = __webpack_require__(2);

var _LightTypeComponentBase2 = _interopRequireDefault(_LightTypeComponentBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SpotLightTypeComponent = function (_LightTypeComponentBa) {
    _inherits(SpotLightTypeComponent, _LightTypeComponentBa);

    function SpotLightTypeComponent() {
        _classCallCheck(this, SpotLightTypeComponent);

        return _possibleConstructorReturn(this, (SpotLightTypeComponent.__proto__ || Object.getPrototypeOf(SpotLightTypeComponent)).apply(this, arguments));
    }

    _createClass(SpotLightTypeComponent, [{
        key: "$awake",
        value: function $awake() {
            var _this2 = this;

            this.lightType = "spot";
            this.getAttributeRaw("color").boundTo("_color");
            this._transform = this.node.getComponent("Transform");
            this.getAttributeRaw("innerCone").boundTo("_innerCone");
            this.getAttributeRaw("outerCone").boundTo("_outerCone");
            this.getAttributeRaw("decay").boundTo("_decay");
            this.getAttributeRaw("intensity").boundTo("_intensity");
            this.getAttributeRaw("shadow").watch(function (v) {
                return _this2._useShadowChanged(v);
            }, true);
        }
    }, {
        key: "$update",
        value: function $update(sceneDesc) {
            var spots = sceneDesc.lights.spot;
            var index = this.__ensureIndex(spots);
            var pos = this._transform.globalPosition;
            var dir = this._transform.up.negateThis();
            spots.positions.set(index, pos.X, pos.Y, pos.Z);
            spots.colors.set(index, this._color.R * this._intensity, this._color.G * this._intensity, this._color.B * this._intensity);
            spots.directions.set(index, dir.X, dir.Y, dir.Z);
            spots.params.set(index, this._innerCone, this._outerCone, this._decay, this._shadowCamera ? this._shadowCamera.shadowMapIndex : -1);
        }
    }, {
        key: "_useShadowChanged",
        value: function _useShadowChanged(v) {
            if (!v && this._shadowCamera) {
                this._shadowCamera.dispose();
                this._shadowCamera = null;
            } else if (v) {
                this._shadowCamera = this.node.addComponent("SpotLightShadowMapCamera");
            }
        }
    }]);

    return SpotLightTypeComponent;
}(_LightTypeComponentBase2.default);

exports.default = SpotLightTypeComponent;

SpotLightTypeComponent.attributes = {
    color: {
        converter: "Color3",
        default: "white"
    },
    innerCone: {
        converter: "Angle2D",
        default: "5d"
    },
    outerCone: {
        converter: "Angle2D",
        default: "20d"
    },
    decay: {
        converter: "Number",
        default: 1
    },
    intensity: {
        converter: "Number",
        default: 1
    },
    shadow: {
        converter: "Boolean",
        default: false
    }
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ImportResolver = __webpack_require__(26);

var _ImportResolver2 = _interopRequireDefault(_ImportResolver);

var _UniformResolverRegistry = __webpack_require__(21);

var _UniformResolverRegistry2 = _interopRequireDefault(_UniformResolverRegistry);

var _ShadingChunk = __webpack_require__(32);

var _ShadingChunk2 = _interopRequireDefault(_ShadingChunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LightVariableRegister = function () {
    function LightVariableRegister() {
        _classCallCheck(this, LightVariableRegister);
    }

    _createClass(LightVariableRegister, null, [{
        key: "registerAll",
        value: function registerAll() {
            _ImportResolver2.default.staticImports["forward-shading"] = _ShadingChunk2.default;
            this._registerLightVariable("DIRECTIONAL_LIGHT_DIRECTIONS", function (n, p, i) {
                return p.uniformVector3Array(n, i.lights.directional.directions.elements);
            });
            this._registerLightVariable("DIRECTIONAL_LIGHT_COLORS", function (n, p, i) {
                return p.uniformVector3Array(n, i.lights.directional.colors.elements);
            });
            this._registerLightVariable("DIRECTIONAL_LIGHT_PARAMS", function (n, p, i) {
                return p.uniformVector4Array(n, i.lights.directional.params.elements);
            });
            this._registerLightVariable("POINT_LIGHT_POSITIONS", function (n, p, i) {
                return p.uniformVector3Array(n, i.lights.point.positions.elements);
            });
            this._registerLightVariable("POINT_LIGHT_COLORS", function (n, p, i) {
                return p.uniformVector3Array(n, i.lights.point.colors.elements);
            });
            this._registerLightVariable("POINT_LIGHT_PARAMS", function (n, p, i) {
                return p.uniformVector2Array(n, i.lights.point.params.elements);
            });
            this._registerLightVariable("SPOT_LIGHT_POSITIONS", function (n, p, i) {
                return p.uniformVector3Array(n, i.lights.spot.positions.elements);
            });
            this._registerLightVariable("SPOT_LIGHT_COLORS", function (n, p, i) {
                return p.uniformVector3Array(n, i.lights.spot.colors.elements);
            });
            this._registerLightVariable("SPOT_LIGHT_DIRECTIONS", function (n, p, i) {
                return p.uniformVector3Array(n, i.lights.spot.directions.elements);
            });
            this._registerLightVariable("SPOT_LIGHT_PARAMS", function (n, p, i) {
                return p.uniformVector4Array(n, i.lights.spot.params.elements);
            });
            this._registerLightVariable("SHADOW_MATRICES", function (n, p, i) {
                return p.uniformTexture2D(n, i.lights.shadowMap.lightMatrices);
            });
            this._registerLightVariable("SHADOW_MATRICES_COUNT", function (n, p, i) {
                return p.uniformFloat(n, i.lights.shadowMap.count);
            });
            this._registerLightVariable("SHADOW_MAP_TEXTURE", function (n, p, i) {
                return p.uniformTexture2D(n, i.lights.shadowMap.shadowMap);
            });
            this._registerLightVariable("SHADOW_MAP_ELEMENT_COUNT", function (n, p, i) {
                return p.uniformVector2(n, i.lights.shadowMap.shadowMapCountPerEdge);
            });
            this._registerLightVariable("SHADOW_MAP_PIXEL_SIZE", function (n, p, i) {
                return p.uniformFloat(n, i.lights.shadowMap.pixelSize);
            });
        }
    }, {
        key: "_registerLightVariable",
        value: function _registerLightVariable(semantic, register) {
            _UniformResolverRegistry2.default.add(semantic, function (valInfo) {
                return function (proxy, args) {
                    register(valInfo.name, proxy, args.sceneDescription);
                };
            });
        }
    }]);

    return LightVariableRegister;
}();

exports.default = LightVariableRegister;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VectorArrayContainer = function () {
    function VectorArrayContainer(size, length) {
        _classCallCheck(this, VectorArrayContainer);

        this.size = size;
        this.length = length;
        this.resize(size, length);
    }

    _createClass(VectorArrayContainer, [{
        key: "resize",
        value: function resize(size, length) {
            this.elements = new Float32Array(size * length);
            this.size = size;
            this.length = length;
        }
    }, {
        key: "set",
        value: function set(index, x, y, z, w) {
            var i = this.size * index;
            this.elements[i + 0] = x;
            if (y !== void 0) {
                this.elements[i + 1] = y;
                if (z !== void 0) {
                    this.elements[i + 2] = z;
                    if (w !== void 0) {
                        this.elements[i + 3] = w;
                    }
                }
            }
        }
    }, {
        key: "incrementLength",
        value: function incrementLength() {
            this.resize(this.size, this.length + 1);
        }
    }, {
        key: "decrementLength",
        value: function decrementLength() {
            this.resize(this.size, this.length - 1);
        }
    }]);

    return VectorArrayContainer;
}();

exports.default = VectorArrayContainer;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.math.Vector2;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _SpotLightShadowMapCameraComponent = __webpack_require__(10);

var _SpotLightShadowMapCameraComponent2 = _interopRequireDefault(_SpotLightShadowMapCameraComponent);

var _Vector = __webpack_require__(14);

var _Vector2 = _interopRequireDefault(_Vector);

var _RenderShadowMapComponent = __webpack_require__(9);

var _RenderShadowMapComponent2 = _interopRequireDefault(_RenderShadowMapComponent);

var _ShadowMapCameraComponent = __webpack_require__(4);

var _ShadowMapCameraComponent2 = _interopRequireDefault(_ShadowMapCameraComponent);

var _VectorArrayContainer = __webpack_require__(13);

var _VectorArrayContainer2 = _interopRequireDefault(_VectorArrayContainer);

var _SceneLightManager = __webpack_require__(0);

var _SceneLightManager2 = _interopRequireDefault(_SceneLightManager);

var _DirectionalLightTypeComponent = __webpack_require__(6);

var _DirectionalLightTypeComponent2 = _interopRequireDefault(_DirectionalLightTypeComponent);

var _LightComponent = __webpack_require__(7);

var _LightComponent2 = _interopRequireDefault(_LightComponent);

var _PointLightTypeComponent = __webpack_require__(8);

var _PointLightTypeComponent2 = _interopRequireDefault(_PointLightTypeComponent);

var _SpotLightTypeComponent = __webpack_require__(11);

var _SpotLightTypeComponent2 = _interopRequireDefault(_SpotLightTypeComponent);

var _ForwardShadingManagerComponent = __webpack_require__(3);

var _ForwardShadingManagerComponent2 = _interopRequireDefault(_ForwardShadingManagerComponent);

var _grimoirejs = __webpack_require__(30);

var _grimoirejs2 = _interopRequireDefault(_grimoirejs);

var _GLExtRequestor = __webpack_require__(23);

var _GLExtRequestor2 = _interopRequireDefault(_GLExtRequestor);

var _LightVariableRegister = __webpack_require__(12);

var _LightVariableRegister2 = _interopRequireDefault(_LightVariableRegister);

var _SceneComponent = __webpack_require__(5);

var _SceneComponent2 = _interopRequireDefault(_SceneComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Please do not change the name of variable on the line below.

exports.default = function () {
    _grimoirejs2.default.register(function () {
        return __awaiter(undefined, void 0, void 0, regeneratorRuntime.mark(function _callee() {
            var g;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _SceneComponent2.default.onSceneDescriptionCreation(function (s) {
                                s.lights = {
                                    directional: {
                                        indicies: [],
                                        directions: new _VectorArrayContainer2.default(3, 0),
                                        colors: new _VectorArrayContainer2.default(3, 0),
                                        params: new _VectorArrayContainer2.default(4, 0)
                                    },
                                    point: {
                                        indicies: [],
                                        positions: new _VectorArrayContainer2.default(3, 0),
                                        colors: new _VectorArrayContainer2.default(3, 0),
                                        params: new _VectorArrayContainer2.default(2, 0)
                                    },
                                    spot: {
                                        indicies: [],
                                        positions: new _VectorArrayContainer2.default(3, 0),
                                        directions: new _VectorArrayContainer2.default(3, 0),
                                        colors: new _VectorArrayContainer2.default(3, 0),
                                        params: new _VectorArrayContainer2.default(4, 0)
                                    },
                                    shadowMap: {
                                        shadowMapCountPerEdge: new _Vector2.default(0, 0),
                                        shadowMap: null,
                                        lightMatrices: null,
                                        pixelSize: 0,
                                        count: 0
                                    }
                                };
                            });
                            g = _grimoirejs2.default;

                            g.registerComponent("ForwardShadingManager", _ForwardShadingManagerComponent2.default);
                            g.registerComponent("Light", _LightComponent2.default);
                            g.registerComponent("DirectionalLightType", _DirectionalLightTypeComponent2.default);
                            g.registerComponent("PointLightType", _PointLightTypeComponent2.default);
                            g.registerComponent("SpotLightType", _SpotLightTypeComponent2.default);
                            g.registerComponent("SceneLightManager", _SceneLightManager2.default);
                            g.registerComponent("ShadowMapCamera", _ShadowMapCameraComponent2.default);
                            g.registerComponent("RenderShadowMap", _RenderShadowMapComponent2.default);
                            g.registerComponent("SpotLightShadowMapCamera", _SpotLightShadowMapCameraComponent2.default);
                            g.overrideDeclaration("scene", ["SceneLightManager"]);
                            g.overrideDeclaration("render-scene", ["RenderShadowMap"]);
                            g.nodeDeclarations.get("goml").defaultComponents.push(g.ns("http://grimoire.gl/ns/default")("ForwardShadingManager"));
                            g.registerNode("light", ["Transform", "Light"]);
                            _LightVariableRegister2.default.registerAll();
                            _GLExtRequestor2.default.request("OES_texture_float");

                        case 17:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));
    });
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _DirectionalLightTypeComponent = __webpack_require__(6);

var _DirectionalLightTypeComponent2 = _interopRequireDefault(_DirectionalLightTypeComponent);

var _ForwardShadingManagerComponent = __webpack_require__(3);

var _ForwardShadingManagerComponent2 = _interopRequireDefault(_ForwardShadingManagerComponent);

var _LightComponent = __webpack_require__(7);

var _LightComponent2 = _interopRequireDefault(_LightComponent);

var _LightTypeComponentBase = __webpack_require__(2);

var _LightTypeComponentBase2 = _interopRequireDefault(_LightTypeComponentBase);

var _PointLightTypeComponent = __webpack_require__(8);

var _PointLightTypeComponent2 = _interopRequireDefault(_PointLightTypeComponent);

var _RenderShadowMapComponent = __webpack_require__(9);

var _RenderShadowMapComponent2 = _interopRequireDefault(_RenderShadowMapComponent);

var _SceneLightManager = __webpack_require__(0);

var _SceneLightManager2 = _interopRequireDefault(_SceneLightManager);

var _ShadowMapCameraComponent = __webpack_require__(4);

var _ShadowMapCameraComponent2 = _interopRequireDefault(_ShadowMapCameraComponent);

var _SpotLightShadowMapCameraComponent = __webpack_require__(10);

var _SpotLightShadowMapCameraComponent2 = _interopRequireDefault(_SpotLightShadowMapCameraComponent);

var _SpotLightTypeComponent = __webpack_require__(11);

var _SpotLightTypeComponent2 = _interopRequireDefault(_SpotLightTypeComponent);

var _LightVariableRegister = __webpack_require__(12);

var _LightVariableRegister2 = _interopRequireDefault(_LightVariableRegister);

var _VectorArrayContainer = __webpack_require__(13);

var _VectorArrayContainer2 = _interopRequireDefault(_VectorArrayContainer);

var _main = __webpack_require__(15);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __VERSION__ = "1.6.1";
var __NAME__ = "grimoirejs-forward-shading";

var __EXPOSE__ = {
    "Components": {
        "DirectionalLightTypeComponent": _DirectionalLightTypeComponent2.default,
        "ForwardShadingManagerComponent": _ForwardShadingManagerComponent2.default,
        "LightComponent": _LightComponent2.default,
        "LightTypeComponentBase": _LightTypeComponentBase2.default,
        "PointLightTypeComponent": _PointLightTypeComponent2.default,
        "RenderShadowMapComponent": _RenderShadowMapComponent2.default,
        "SceneLightManager": _SceneLightManager2.default,
        "ShadowMapCameraComponent": _ShadowMapCameraComponent2.default,
        "SpotLightShadowMapCameraComponent": _SpotLightShadowMapCameraComponent2.default,
        "SpotLightTypeComponent": _SpotLightTypeComponent2.default
    },
    "Util": {
        "LightVariableRegister": _LightVariableRegister2.default,
        "VectorArrayContainer": _VectorArrayContainer2.default
    }
};
var __BASE__ = (0, _main2.default)();
Object.assign(__EXPOSE__, {
    __VERSION__: __VERSION__,
    __NAME__: __NAME__
});
Object.assign(__BASE__ || {}, __EXPOSE__);
window["GrimoireJS"].lib.forward_shading = __EXPOSE__;
exports.default = __BASE__;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.fundamental.Components.CameraComponent;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.fundamental.Components.MaterialContainerComponent;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.fundamental.Components.RenderSceneComponent;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.fundamental.Material.MaterialFactory;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.fundamental.Material.UniformResolverRegistry;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.fundamental.Resource.FrameBuffer;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.fundamental.Resource.GLExtRequestor;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.fundamental.Resource.RenderBuffer;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.fundamental.Resource.Texture2D;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.fundamental.Sort.ImportResolver;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.math.AABB;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.math.Matrix;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.math.Vector3;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS;

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = "@Technique default{\n@Pass{\n@BlendFunc(SRC_ALPHA,ONE_MINUS_SRC_ALPHA)\nFS_PREC(mediump,float)\n\nvarying vec3 vNormal;\nvarying vec2 vTexCoord;\nvarying vec4 vPosition;\n\n#ifdef ATTRIBUTE_COLOR_ENABLED\nvarying vec4 vColor;\n#endif\n\n#ifdef VS\n  attribute vec3 position;\n  attribute vec3 normal;\n  #ifdef ATTRIBUTE_TEXCOORD_ENABLED\n  attribute vec2 texCoord;\n  #endif\n  #ifdef ATTRIBUTE_COLOR_ENABLED\n  @COLOR\n  attribute vec4 color;\n  #endif\n\n  uniform mat4 _matPVM;\n  uniform mat4 _matM;\n\n  void main(){\n    gl_Position = _matPVM * vec4(position,1.0);\n    vNormal = normalize((_matM * vec4(normal,0.0)).xyz);\n    vPosition = (_matM * vec4(position,1.0));\n    #ifndef ATTRIBUTE_TEXCOORD_ENABLED\n    vTexCoord = position.xy / 2.0 + vec2(0.5);\n    #endif\n    #ifdef ATTRIBUTE_TEXCOORD_ENABLED\n    vTexCoord = texCoord;\n    #endif\n    #ifdef ATTRIBUTE_COLOR_ENABLED\n    vColor = color;\n    #endif\n  }\n#endif\n\n#ifdef FS\n  @CAMERA_POSITION\n  uniform vec3 _cameraPosition;\n\n  uniform sampler2D texture;\n\n  @HAS_TEXTURE{sampler:\"texture\"}\n  uniform bool useTexture;\n\n  uniform sampler2D roughnessMap;\n\n  @HAS_TEXTURE{sampler:\"roughnessMap\"}\n  uniform bool useRoughnessMap;\n\n  @{default:\"white\",type:\"color\"}\n  uniform vec4 albedo;\n\n  @{default:1.0}\n  uniform float roughness;\n\n  @{default:0.99}\n  uniform float metalic;\n\n  @{default:\"black\",type:\"color\"}\n  uniform vec3 emission;\n\n  @import \"forward-shading\"\n\n  void main(){\n    vec3 dBaseColor = albedo.rgb;\n    vec4 lastColor = vec4(0,0,0,albedo.a);\n    #ifdef ATTRIBUTE_COLOR_ENABLED\n    dBaseColor *= vColor.rgb;\n    #endif\n    if(useTexture){\n      vec4 texColor = texture2D(texture,vTexCoord);\n      dBaseColor = pow(texColor.rgb,vec3(2.2));\n      lastColor.a *= texColor.a;\n    }\n    float r = roughness;\n    if(useRoughnessMap){\n      r *= texture2D(roughnessMap,vTexCoord).r;\n    }\n    vec3 dielectricSpecular = vec3(0.04);\n    vec3 diffuse = mix(dBaseColor.rgb * (1. - dielectricSpecular.r),vec3(0),metalic);\n    vec3 f0 = mix(dielectricSpecular,dBaseColor.rgb,metalic);\n    BRDF_PARAMS param = BRDF_PARAMS(diffuse,f0,roughness);\n    lastColor.rgb += emission + shading(param,vNormal,vPosition.xyz/vPosition.w);\n    gl_FragColor.rgb = pow(lastColor.rgb,vec3(1.0/2.2)); // Gamma correction\n    gl_FragColor.a = albedo.a;\n    #ifdef ATTRIBUTE_COLOR_ENABLED\n    gl_FragColor.a *= vColor.a;\n    #endif\n  }\n#endif\n}\n}\n\n@Technique hitarea{\n  @Disable(BLEND)\n  @Pass{\n    FS_PREC(mediump,float)\n\n    #ifdef VS\n      attribute vec3 position;\n      uniform mat4 _matPVM;\n\n      void main(){\n        gl_Position = _matPVM * vec4(position,1.0);\n      }\n    #endif\n\n    #ifdef FS\n      @MESH_INDEX\n      uniform vec4 meshIndex;\n      void main(){\n        gl_FragColor = meshIndex;\n      }\n    #endif\n  }\n}\n\n@Technique depth{\n  @Pass{\n    @CullFace(FRONT)\n  FS_PREC(highp,float)\n\n  varying vec4 vPos;\n\n  vec3 EncodeFloatRGB( float v ) {\n    vec3 enc = vec3(1.0, 255.0, 65025.0) * v;\n    enc = fract(enc);\n    enc -= enc.yzz * vec3(1.0/255.0,1.0/255.0,0.0);\n    return enc;\n  }\n\n  float DecodeFloatRGB( vec3 rgb ) {\n    return dot( rgb, vec3(1.0, 1./255.0, 1./65025.0) );\n  }\n\n  #ifdef VS\n    attribute vec3 position;\n    uniform mat4 _matPVM;\n    void main(){\n      gl_Position = vPos= _matPVM * vec4(position,1.0);\n    }\n  #endif\n\n  #ifdef FS\n    void main(){\n      gl_FragColor.rgb = EncodeFloatRGB((vPos.z/vPos.w + 1.0)/2.0);\n      gl_FragColor.a = 1.0;\n    }\n  #endif\n  }\n}\n"

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = "#define GR_FORWARD_SHADING_ENABLED\n@ReferMacro(DIR_LIGHT_COUNT,0)\n@ReferMacro(POINT_LIGHT_COUNT,0)\n@ReferMacro(SPOT_LIGHT_COUNT,0)\n@ReferMacro(SHADOW_MAP_COUNT,0)\n@ReferMacro(OES_TEXTURE_FLOAT,)\n\n#if DIR_LIGHT_COUNT > 0\n  #define USE_DIR_LIGHT\n#endif\n\n#if POINT_LIGHT_COUNT > 0\n  #define USE_POINT_LIGHT\n#endif\n\n#if SPOT_LIGHT_COUNT > 0\n  #define USE_SPOT_LIGHT\n#endif\n\n#if SHADOW_MAP_COUNT > 0\n  #define USE_SHADOW_MAP\n#endif\n\n#ifdef USE_DIR_LIGHT\n  @DIRECTIONAL_LIGHT_DIRECTIONS\n  uniform vec3 _dLightDir[DIR_LIGHT_COUNT];\n\n  @DIRECTIONAL_LIGHT_COLORS\n  uniform vec3 _dLightColor[DIR_LIGHT_COUNT];\n\n  @DIRECTIONAL_LIGHT_PARAMS\n  uniform vec4 _dLightParams[DIR_LIGHT_COUNT];\n#endif\n\n#ifdef USE_POINT_LIGHT\n\n  @POINT_LIGHT_POSITIONS\n  uniform vec3 _pLightPosition[POINT_LIGHT_COUNT];\n\n  @POINT_LIGHT_COLORS\n  uniform vec3 _pLightColor[POINT_LIGHT_COUNT];\n\n  @POINT_LIGHT_PARAMS\n  uniform vec2 _pLightParam[POINT_LIGHT_COUNT];\n\n#endif\n\n#ifdef USE_SPOT_LIGHT\n\n  @SPOT_LIGHT_POSITIONS\n  uniform vec3 _sLightPosition[SPOT_LIGHT_COUNT];\n\n  @SPOT_LIGHT_DIRECTIONS\n  uniform vec3 _sLightDir[SPOT_LIGHT_COUNT];\n\n  @SPOT_LIGHT_COLORS\n  uniform vec3 _sLightColor[SPOT_LIGHT_COUNT];\n\n  @SPOT_LIGHT_PARAMS\n  uniform vec4 _sLightParam[SPOT_LIGHT_COUNT];\n#endif\n\n#ifdef USE_SHADOW_MAP\n  @SHADOW_MAP_ELEMENT_COUNT\n  uniform vec2 _shadowMapElementCount;\n\n  @SHADOW_MAP_PIXEL_SIZE\n  uniform float _shadowMapPixelSize;\n\n  @SHADOW_MATRICES\n  uniform sampler2D _lightMatrices;\n\n  @SHADOW_MATRICES_COUNT\n  uniform float _lightMatricesCount;\n\n  @SHADOW_MAP_TEXTURE\n  uniform sampler2D _shadowMapTexture;\n\n  @{default:0.01}\n  uniform float shadowBias;\n\n  highp float decodeFloatRGB( vec3 rgb ) {\n    return dot( rgb, vec3(1.0, 1./255.0, 1./65025.0) );\n  }\n#endif\n\n// Define simple shading params\n\n#ifndef BRDF_PARAMS\n  #ifdef SIMPLE_SHADING\n  #define BRDF_PARAMS simple_params\n  struct simple_params{\n    vec3 diffuse;\n    vec3 specular;\n    float shiningness;\n  };\n  #endif\n#endif\n\n// Define pbr params\n#ifndef BRDF_PARAMS\n\n#define BRDF_PARAMS pbr_params\n\nstruct pbr_params{\n    vec3 albedo;\n    vec3 f0;\n    float roughness;\n};\n#endif\n\n  float lambert(vec3 lightDirection,vec3 surfaceNormal) {\n    return max(0.0, dot(lightDirection, surfaceNormal));\n  }\n\n  #ifndef DIFFUSE_BRDF\n    #define DIFFUSE_BRDF lambertBRDF\n\n    vec3 lambertBRDF(BRDF_PARAMS param,vec3 i,vec3 o,vec3 n){\n      #ifdef SIMPLE_SHADING\n        return param.diffuse / PI;\n      #endif\n      #ifndef SIMPLE_SHADING\n        return param.albedo / PI;\n      #endif\n    }\n  #endif\n\n  #ifndef SPECULAR_BRDF\n    #ifdef SIMPLE_SHADING\n      #define SPECULAR_BRDF blinnPhongBRDF\n\n      vec3 blinnPhongBRDF(BRDF_PARAMS param,vec3 h,vec3 o){\n        return param.specular * (param.shiningness + 2.)/(2. * PI) * pow(max(dot(o,h),0.),param.shiningness);\n      }\n    #endif\n  #endif\n\n  #ifndef SPECULAR_BRDF\n    #define SPECULAR_BRDF cookTorranceBRDF\n\n    float ctd_GGX_Distribution(BRDF_PARAMS param,vec3 l,vec3 v,vec3 n,vec3 h){\n      float alpha2 = pow(param.roughness,4.0);\n      float nh2 = pow(dot(n,h),2.0);\n      return alpha2/(PI*pow(nh2*(alpha2 - 1.0) + 1.0,2.0));\n    }\n\n    float ctg_GGX_SingleGeometryTerm(BRDF_PARAMS param,vec3 n,vec3 v){\n      float d = dot(n,v);\n      float alpha2 = pow(param.roughness,4.);\n      return 2.*d /(d + sqrt(d*d + alpha2*(1. - d*d)));\n    }\n\n    vec3 ctf_Schlick(BRDF_PARAMS param,vec3 l,vec3 v,vec3 n,vec3 h){\n      vec3 f0 = param.f0;\n      float vh = dot(v,n);\n      return f0 + pow(1.0-vh,5.0) * (vec3(1.0) - f0);\n    }\n\n\n    vec3 cookTorranceBRDF(BRDF_PARAMS param,vec3 l,vec3 v,vec3 n){\n      vec3 h = normalize(l+v);\n      return  ctf_Schlick(param,l,v,n,h) * ctd_GGX_Distribution(param,l,v,n,h) * ctg_GGX_SingleGeometryTerm(param,n,l) * ctg_GGX_SingleGeometryTerm(param,n,v)/(4.0 * dot(l,n) * dot(v,n));\n    }\n  #endif\n\n  #ifndef BRDF\n    #ifdef SIMPLE_SHADING\n      #define BRDF simpleBRDF\n\n      vec3 simpleBRDF(BRDF_PARAMS param,vec3 i,vec3 o,vec3 n){\n        return DIFFUSE_BRDF(param,i,o,n)+ SPECULAR_BRDF(param,reflect(-i,n),o);\n      }\n    #endif\n  #endif\n\n  #ifndef BRDF\n    #define BRDF pbrBRDF\n    vec3 pbrBRDF(BRDF_PARAMS param,vec3 i,vec3 o,vec3 n){\n      return DIFFUSE_BRDF(param,i,o,n) + SPECULAR_BRDF(param,i,o,n);\n    }\n  #endif\n#ifdef USE_DIR_LIGHT\n\n#ifdef USE_SHADOW_MAP\n\n  bool isUVRegion(vec2 uv){\n    return all(bvec4(greaterThan(uv,vec2(0,0)),lessThan(uv,vec2(1,1))));\n  }\n\n  vec2 correctUV(vec2 uv,float index){\n    float i = fract(index / _shadowMapElementCount.x) * _shadowMapElementCount.x;\n    float j = (index - i) / _shadowMapElementCount.x;\n    return vec2((i + uv.x)/_shadowMapElementCount.x,(j + uv.y)/_shadowMapElementCount.y);\n  }\n\n  float shadowCoefficient(vec3 fragPosition,highp mat4 lightMatrix,float index){\n    highp vec4 lPos = lightMatrix * vec4(fragPosition,1.0);\n    if(any(bvec2(lPos.z/lPos.w > 1.0,lPos.z/lPos.w < -1.0))){\n      return 1.0;\n    }\n    vec2 bUV = lPos.xy / lPos.w / 2.0 + vec2(0.5);\n    highp float od = (lPos.z/lPos.w + 1.0)/2.0;\n    float fill = 0.0;\n    float N = 0.;\n    // PCF sampling\n    vec2 lUV = bUV;\n    if(isUVRegion(lUV)){\n      highp float d = decodeFloatRGB(texture2D(_shadowMapTexture,correctUV(lUV,index)).rgb);\n      fill += step(shadowBias,od-d);\n      N++;\n    }\n    lUV = bUV + vec2(_shadowMapPixelSize,0);\n    if(isUVRegion(lUV)){\n      highp float d = decodeFloatRGB(texture2D(_shadowMapTexture,correctUV(lUV,index)).rgb);\n      fill += step(shadowBias,od-d);\n      N++;\n    }\n    lUV = bUV + vec2(-_shadowMapPixelSize,0);\n    if(isUVRegion(lUV)){\n      highp float d = decodeFloatRGB(texture2D(_shadowMapTexture,correctUV(lUV,index)).rgb);\n      fill += step(shadowBias,od-d);\n      N++;\n    }\n    lUV = bUV + vec2(0,_shadowMapPixelSize);\n    if(isUVRegion(lUV)){\n      highp float d = decodeFloatRGB(texture2D(_shadowMapTexture,correctUV(lUV,index)).rgb);\n      fill += step(shadowBias,od-d);\n      N++;\n    }\n    lUV = bUV + vec2(0,-_shadowMapPixelSize);\n    if(isUVRegion(lUV)){\n      highp float d = decodeFloatRGB(texture2D(_shadowMapTexture,correctUV(lUV,index)).rgb);\n      fill += step(shadowBias,od-d);\n      N++;\n    }\n    if(N > 4.0){\n      return 1.0 - fill/N;\n    }\n    return 1.0;\n  }\n\n  highp vec4 fromLightMatrices(vec2 uv){\n    return texture2D(_lightMatrices,uv);\n  }\n\n  highp mat4 fetchLightMatrix(float index){\n    float y = 1.0 / _lightMatricesCount * (index  + 0.5);\n    return mat4(\n      fromLightMatrices(vec2(0.125,y)),\n      fromLightMatrices(vec2(0.375,y)),\n      fromLightMatrices(vec2(0.625,y)),\n      fromLightMatrices(vec2(0.875,y))\n      );\n  }\n#endif\n\n  vec3 directionalLight(BRDF_PARAMS param,vec3 fragNormal,vec3 fragPosition){\n    vec3 result = vec3(0,0,0);\n    for(int i = 0; i < DIR_LIGHT_COUNT;i++){\n      vec3 lI = lambert(fragNormal,-_dLightDir[i]) * _dLightColor[i];\n      float sc = 1.0;\n      #ifdef USE_SHADOW_MAP // Shadowmap Calculations\n        if(_dLightParams[i].x >= 0.0){\n          highp mat4 lMat = fetchLightMatrix(_dLightParams[i].x);\n          sc = shadowCoefficient(fragPosition,lMat,_dLightParams[i].x);\n        }\n      #endif\n      vec3 lColor = sc * lI * BRDF(param,-_dLightDir[i],normalize(_cameraPosition - fragPosition),fragNormal);\n      result += lColor;\n    }\n    return result;\n  }\n#endif\n#ifdef USE_POINT_LIGHT\n  vec3 pointLight(BRDF_PARAMS param,vec3 fragNormal,vec3 fragPosition){\n    vec3 result = vec3(0,0,0);\n    for(int i = 0; i < POINT_LIGHT_COUNT;i++){\n      vec3 l2p = _pLightPosition[i] - fragPosition;\n      float d = length(l2p);\n      vec2 lightParam = _pLightParam[i];\n      float atten = max(0.,1.0-d/lightParam.x)/(1.0 + lightParam.y*lightParam.y*d);\n      l2p = normalize(l2p);\n      vec3 lI = lambert(fragNormal,l2p)* _pLightColor[i] * atten;\n      vec3 lColor = lI  * BRDF(param,l2p,normalize(_cameraPosition - fragPosition),fragNormal);\n      result += lColor ;\n    }\n    return result;\n  }\n#endif\n#ifdef USE_SPOT_LIGHT\n  vec3 spotLight(BRDF_PARAMS param,vec3 fragNormal,vec3 fragPosition){\n    vec3 result = vec3(0);\n    for(int i = 0; i < SPOT_LIGHT_COUNT; i++){\n      float innerConeAngle = _sLightParam[i].x;\n      float outerConeAngle = _sLightParam[i].y;\n      float outCos=cos(outerConeAngle);\n      float innCos=cos(innerConeAngle);\n\n      vec3 p2l = _sLightPosition[i] - fragPosition;\n      float d = length(p2l);\n      p2l=p2l/d;\n      float c = dot(-p2l,normalize(_sLightDir[i]));\n      float decay = _sLightParam[i].z;//減衰係数\n      decay = 1.;\n      float angleDecay = decay;\n      //\n      float distDecayCoefficient = 1.0 / (d * d);\n      float angleDecayCoefficient = pow(clamp((c-outCos)/(innCos-outCos),0.0,1.0),angleDecay);\n      //\n      vec3 lI = lambert(p2l,fragNormal)*_sLightColor[i]*angleDecayCoefficient*distDecayCoefficient;\n      vec3 lColor = lI * BRDF(param,p2l,normalize(_cameraPosition - fragPosition),fragNormal);\n      result += lColor;\n    }\n    return result;\n  }\n#endif\n  vec3 shading(BRDF_PARAMS params,vec3 fragNormal,vec3 fragPosition){\n    vec3 lightingColor = vec3(0);\n    #ifdef USE_DIR_LIGHT\n    lightingColor.rgb += directionalLight(params,fragNormal,fragPosition);\n    #endif\n    #ifdef USE_POINT_LIGHT\n    lightingColor.rgb += pointLight(params,fragNormal,fragPosition);\n    #endif\n    #ifdef USE_SPOT_LIGHT\n    lightingColor.rgb += spotLight(params,fragNormal,fragPosition);\n    #endif\n    return lightingColor;\n  }\n"

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = "@Technique default{\n@Pass{\n@BlendFunc(SRC_ALPHA,ONE_MINUS_SRC_ALPHA)\nFS_PREC(mediump,float)\n#define SIMPLE_SHADING\nvarying vec3 vNormal;\nvarying vec2 vTexCoord;\nvarying vec4 vPosition;\n\n#ifdef ATTRIBUTE_COLOR_ENABLED\nvarying vec4 vColor;\n#endif\n\n#ifdef VS\n  attribute vec3 position;\n  attribute vec3 normal;\n\n  #ifdef ATTRIBUTE_TEXCOORD_ENABLED\n  attribute vec2 texCoord;\n  #endif\n\n  #ifdef ATTRIBUTE_COLOR_ENABLED\n  @COLOR\n  attribute vec4 color;\n  #endif\n\n  uniform mat4 _matPVM;\n  uniform mat4 _matM;\n\n  void main(){\n    gl_Position = _matPVM * vec4(position,1.0);\n    vNormal = normalize((_matM * vec4(normal,0.0)).xyz);\n    vPosition = (_matM * vec4(position,1.0));\n    #ifndef ATTRIBUTE_TEXCOORD_ENABLED\n    vTexCoord = position.xy / 2.0 + vec2(0.5);\n    #endif\n    #ifdef ATTRIBUTE_TEXCOORD_ENABLED\n    vTexCoord = texCoord;\n    #endif\n    #ifdef ATTRIBUTE_COLOR_ENABLED\n    vColor = color;\n    #endif\n\n  }\n#endif\n\n#ifdef FS\n  @CAMERA_POSITION\n  uniform vec3 _cameraPosition;\n\n  uniform sampler2D texture;\n\n  @HAS_TEXTURE{sampler:\"texture\"}\n  uniform bool useTexture;\n\n  @{default:\"white\",type:\"color\"}\n  uniform vec4 diffuse;\n\n  @{default:0.3}\n  uniform float shiningness;\n\n  @{default:\"black\",type:\"color\"}\n  uniform vec3 emission;\n\n  @{default:\"white\",type:\"color\"}\n  uniform vec3 specular;\n\n  @{default:0.5}\n  uniform float specularRatio;\n\n  @import \"forward-shading\"\n\n  void main(){\n    vec4 lastColor = vec4(0,0,0,diffuse.a);\n    vec3 dBaseColor = diffuse.rgb;\n    #ifdef ATTRIBUTE_COLOR_ENABLED\n    dBaseColor.rgb *= vColor.rgb;\n    #endif\n    if(useTexture){\n      vec4 texColor = texture2D(texture,vTexCoord);\n      dBaseColor = pow(texColor.rgb,vec3(2.2));\n      lastColor.a = texColor.a;\n    }\n    BRDF_PARAMS param = BRDF_PARAMS(dBaseColor,specular,shiningness);\n    lastColor.rgb += emission + shading(param,vNormal,vPosition.xyz/vPosition.w);\n    gl_FragColor.rgb = pow(lastColor.rgb,vec3(1.0/2.2)); // Gamma correction\n    gl_FragColor.a = lastColor.a;\n    #ifdef ATTRIBUTE_COLOR_ENABLED\n    gl_FragColor.a *= vColor.a;\n    #endif\n  }\n#endif\n}\n}\n\n@Technique hitarea{\n  @Disable(BLEND)\n  @Pass{\n    FS_PREC(mediump,float)\n\n    #ifdef VS\n      attribute vec3 position;\n      uniform mat4 _matPVM;\n\n      void main(){\n        gl_Position = _matPVM * vec4(position,1.0);\n      }\n    #endif\n\n    #ifdef FS\n      @MESH_INDEX\n      uniform vec4 meshIndex;\n      void main(){\n        gl_FragColor = meshIndex;\n      }\n    #endif\n  }\n}\n\n@Technique depth{\n  @Pass{\n    @CullFace(FRONT)\n  FS_PREC(highp,float)\n\n  varying vec4 vPos;\n\n  vec3 EncodeFloatRGB( float v ) {\n    vec3 enc = vec3(1.0, 255.0, 65025.0) * v;\n    enc = fract(enc);\n    enc -= enc.yzz * vec3(1.0/255.0,1.0/255.0,0.0);\n    return enc;\n  }\n\n  float DecodeFloatRGB( vec3 rgb ) {\n    return dot( rgb, vec3(1.0, 1./255.0, 1./65025.0) );\n  }\n\n  #ifdef VS\n    attribute vec3 position;\n    uniform mat4 _matPVM;\n    void main(){\n      gl_Position = vPos= _matPVM * vec4(position,1.0);\n    }\n  #endif\n\n  #ifdef FS\n    void main(){\n      gl_FragColor.rgb = EncodeFloatRGB((vPos.z/vPos.w + 1.0)/2.0);\n      gl_FragColor.a = 1.0;\n    }\n  #endif\n  }\n}\n"

/***/ })
/******/ ]);
});
//# sourceMappingURL=grimoire-forward-shading.js.map