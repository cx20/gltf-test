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
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
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

var _ParserModuleBase2 = __webpack_require__(16);

var _ParserModuleBase3 = _interopRequireDefault(_ParserModuleBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ParserModule = function (_ParserModuleBase) {
    _inherits(ParserModule, _ParserModuleBase);

    function ParserModule(parser, baseDirectory) {
        _classCallCheck(this, ParserModule);

        var _this = _possibleConstructorReturn(this, (ParserModule.__proto__ || Object.getPrototypeOf(ParserModule)).call(this));

        _this.parser = parser;
        _this.baseDirectory = baseDirectory;
        _this.__gl = parser.gl;
        return _this;
    }

    _createClass(ParserModule, [{
        key: "fetchGLTF",
        value: function fetchGLTF(url) {
            return undefined;
        }
        /**
         * Load .gltf file
         * @return {Promise<GLTF>} [description]
         */

    }, {
        key: "loadAsGLTF",
        value: function loadAsGLTF(tf) {
            return undefined;
        }
        /**
         * Start loading texture resource.
         * @return {Promise<Texture2D>} [description]
         */

    }, {
        key: "fetchTextureResource",
        value: function fetchTextureResource(tf) {
            return undefined;
        }
        /**
         * Start loading texture resource.
         * @return {Promise<Texture2D>} [description]
         */

    }, {
        key: "loadTextureResources",
        value: function loadTextureResources(tf) {
            return undefined;
        }
        /**
         * Load image as texture
         * @return {Promise<Texture2D>} [description]
         */

    }, {
        key: "convertTotexture",
        value: function convertTotexture(arg) {
            return undefined;
        }
        /**
         * Start loading buffer resource.
         * @return {Promise<ArrayBuffer>} [description]
         */

    }, {
        key: "loadBufferResource",
        value: function loadBufferResource(tf) {
            return undefined;
        }
    }, {
        key: "loadBufferResources",
        value: function loadBufferResources(tf) {
            return undefined;
        }
    }, {
        key: "loadBufferViews",
        value: function loadBufferViews(args) {
            return undefined;
        }
    }, {
        key: "loadPrimitivesOfMesh",
        value: function loadPrimitivesOfMesh(args) {
            return undefined;
        }
    }, {
        key: "loadPrimitive",
        value: function loadPrimitive(args) {
            return undefined;
        }
    }, {
        key: "appendIndices",
        value: function appendIndices(args) {
            return undefined;
        }
    }, {
        key: "addVertexAttributes",
        value: function addVertexAttributes(args) {
            return undefined;
        }
    }, {
        key: "complementVertexAttributes",
        value: function complementVertexAttributes(args) {
            return undefined;
        }
    }, {
        key: "loadMaterials",
        value: function loadMaterials(args) {
            return undefined;
        }
    }, {
        key: "loadMaterial",
        value: function loadMaterial(args) {
            return undefined;
        }
    }, {
        key: "loadAnimations",
        value: function loadAnimations(args) {
            return undefined;
        }
    }]);

    return ParserModule;
}(_ParserModuleBase3.default);

exports.default = ParserModule;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Color = __webpack_require__(32);

var _Color2 = _interopRequireDefault(_Color);

var _Color3 = __webpack_require__(33);

var _Color4 = _interopRequireDefault(_Color3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GLTFConstantConvert = function () {
    function GLTFConstantConvert() {
        _classCallCheck(this, GLTFConstantConvert);
    }

    _createClass(GLTFConstantConvert, null, [{
        key: "asColorValue",
        value: function asColorValue(a) {
            if (a.length === 3) {
                return new _Color2.default(a[0], a[1], a[2]);
            } else {
                return new _Color4.default(a[0], a[1], a[2], a[3]);
            }
        }
    }, {
        key: "asVectorSize",
        value: function asVectorSize(type) {
            switch (type) {
                case "SCALAR":
                    return 1;
                case "VEC2":
                    return 2;
                case "VEC3":
                    return 3;
                case "VEC4":
                case "MAT2":
                    return 4;
                case "MAT3":
                    return 9;
                case "MAT4":
                    return 16;
                default:
                    throw new Error("Invalid vectorSize");
            }
        }
    }, {
        key: "asByteSize",
        value: function asByteSize(componentType) {
            switch (componentType) {
                case WebGLRenderingContext.UNSIGNED_BYTE:
                case WebGLRenderingContext.BYTE:
                    return 1;
                case WebGLRenderingContext.UNSIGNED_SHORT:
                case WebGLRenderingContext.SHORT:
                    return 2;
                case WebGLRenderingContext.UNSIGNED_INT:
                case WebGLRenderingContext.INT:
                case WebGLRenderingContext.FLOAT:
                    return 4;
                default:
                    throw new Error("Unknown size!");
            }
        }
    }, {
        key: "elementTypeToTypedArray",
        value: function elementTypeToTypedArray(type) {
            switch (type) {
                case WebGLRenderingContext.UNSIGNED_BYTE:
                    return Uint8Array;
                case WebGLRenderingContext.BYTE:
                    return Int8Array;
                case WebGLRenderingContext.UNSIGNED_SHORT:
                    return Uint16Array;
                case WebGLRenderingContext.SHORT:
                    return Int16Array;
                case WebGLRenderingContext.UNSIGNED_INT:
                    return Uint32Array;
                case WebGLRenderingContext.INT:
                    return Int32Array;
                case WebGLRenderingContext.FLOAT:
                    return Float32Array;
                default:
                    throw new Error("Unsupported");
            }
        }
    }, {
        key: "indexCountToBufferInfo",
        value: function indexCountToBufferInfo(count) {
            if (count < 256) {
                return {
                    elementType: WebGLRenderingContext.UNSIGNED_BYTE,
                    byteSize: 1,
                    ctor: Uint8Array
                };
            } else if (count < 65536) {
                return {
                    elementType: WebGLRenderingContext.UNSIGNED_SHORT,
                    byteSize: 2,
                    ctor: Uint16Array
                };
            } else {
                return {
                    elementType: WebGLRenderingContext.UNSIGNED_INT,
                    byteSize: 4,
                    ctor: Uint32Array
                };
            }
        }
    }]);

    return GLTFConstantConvert;
}();

exports.default = GLTFConstantConvert;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.fundamental.Components.TransformComponent;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.math.Vector3;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.Node.Component;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Interpolators = __webpack_require__(6);

var _Interpolators2 = _interopRequireDefault(_Interpolators);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Animator = function () {
    function Animator(tf, animationKey, _buffers) {
        _classCallCheck(this, Animator);

        this.tf = tf;
        this.animationKey = animationKey;
        this._buffers = _buffers;
        this.accessors = {};
        this.timeLength = 0;
        this.targetNodes = [];
        this._animationData = tf.animations[animationKey];
        var accessors = {};
        // for (let key in this._animationData.parameters) {
        //   const ac = tf.accessors[this._animationData.parameters[key]];
        //   this.accessors[key] = new Accessor(_buffers[ac.bufferView], ac.count, ac.componentType, ConstantConverter.asVectorSize(ac.type), ac.byteOffset || 0, ac.byteStride || 0);
        // }
        // for (let channel of this._animationData.channels) {
        //   const sampler = this._animationData.samplers[channel.sampler];
        //   const input = this.accessors[sampler.input];
        //   this.timeLength = Math.max(this.timeLength, input.getByIndex(input.count - 1)[0]);
        //   this.targetNodes.push(channel.target.id);
        //   if (channel.target.path === "rotation" && this._animationData.samplers[channel.sampler].interpolation === "LINEAR") {
        //     this._animationData.samplers[channel.sampler].interpolation = "SPHERICAL";
        //   }
        // }
    }

    _createClass(Animator, [{
        key: "processCurrentFrame",
        value: function processCurrentFrame(time, processor) {
            for (var i = 0; i < this._animationData.channels.length; i++) {
                var channel = this._animationData.channels[i];
                var v = this._getBySampler(channel.sampler, time);
                processor(channel.target.id, channel.target.path, v);
            }
        }
    }, {
        key: "_getBySampler",
        value: function _getBySampler(samplerName, t) {
            var sampler = this._animationData.samplers[samplerName];
            var inputAccessor = this.accessors[sampler.input];
            var outputAccessor = this.accessors[sampler.output];
            var i = 0;
            for (i = 0; i < inputAccessor.count; i++) {
                var nt = inputAccessor.getByIndex(i)[0];
                if (nt > t) {
                    return this._complementFrame(t, inputAccessor.getByIndex(i - 1), inputAccessor.getByIndex(i), outputAccessor.getByIndex(i - 1), outputAccessor.getByIndex(i), sampler.interpolation);
                }
            }
            return this._complementFrame(t, inputAccessor.getByIndex(i - 1), null, outputAccessor.getByIndex(i - 1), null, sampler.interpolation);
        }
    }, {
        key: "_complementFrame",
        value: function _complementFrame(t, t1, t2, v1, v2, interpolation) {
            if (!v1) {
                return v2;
            }
            if (!v2) {
                return v1;
            }
            var delta = (t - t1[0]) / (t2[0] - t1[0]);
            return _Interpolators2.default[interpolation](delta, v1, v2);
        }
    }]);

    return Animator;
}();

exports.default = Animator;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _GLM = __webpack_require__(34);

var _GLM2 = _interopRequireDefault(_GLM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var quat = _GLM2.default.quat;
exports.default = {
    LINEAR: function LINEAR(t, v1, v2) {
        var res = new Array(v1.length);
        for (var i = 0; i < v1.length; i++) {
            res[i] = v1[i] + (v2[i] - v1[i]) * t;
        }
        return res;
    },
    SPHERICAL: function SPHERICAL(t, v1, v2) {
        var res = new Array(v1.length);
        quat.slerp(res, v1, v2, t);
        return res;
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

var _Quaternion = __webpack_require__(20);

var _Quaternion2 = _interopRequireDefault(_Quaternion);

var _Vector = __webpack_require__(3);

var _Vector2 = _interopRequireDefault(_Vector);

var _TransformComponent = __webpack_require__(2);

var _TransformComponent2 = _interopRequireDefault(_TransformComponent);

var _Component2 = __webpack_require__(4);

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GLTFAnimationComponent = function (_Component) {
    _inherits(GLTFAnimationComponent, _Component);

    function GLTFAnimationComponent() {
        _classCallCheck(this, GLTFAnimationComponent);

        return _possibleConstructorReturn(this, (GLTFAnimationComponent.__proto__ || Object.getPrototypeOf(GLTFAnimationComponent)).apply(this, arguments));
    }

    _createClass(GLTFAnimationComponent, [{
        key: "$mount",
        value: function $mount() {
            this._startTime = new Date().getTime();
            this._animation = this.getAttribute("animation");
        }
    }, {
        key: "$update",
        value: function $update() {
            var _this2 = this;

            if (!this._targetTransforms) {
                this._targetTransforms = {};
                var targets = this._animation.targetNodes;
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = targets[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var target = _step.value;

                        var nodes = this.node.parent.parent.getChildrenByClass(target);
                        if (nodes.length > 0) {
                            this._targetTransforms[target] = nodes[0].getComponent(_TransformComponent2.default);
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
            var t = (new Date().getTime() - this._startTime) / 1000;
            this._animation.processCurrentFrame(t % this._animation.timeLength, function (id, path, v) {
                var transform = _this2._targetTransforms[id];
                if (!transform) {
                    return;
                }
                switch (path) {
                    case "translation":
                        transform.position = new _Vector2.default(v);
                        break;
                    case "rotation":
                        transform.rotation = new _Quaternion2.default(v);
                        break;
                    case "scale":
                        transform.scale = new _Vector2.default(v);
                        break;
                }
            });
            for (var tr in this._targetTransforms) {
                this._targetTransforms[tr].notifyUpdateTransform();
            }
        }
    }, {
        key: "$unmount",
        value: function $unmount() {}
    }]);

    return GLTFAnimationComponent;
}(_Component3.default);

exports.default = GLTFAnimationComponent;

GLTFAnimationComponent.attributes = {
    play: {
        converter: "Boolean",
        default: false
    },
    animation: {
        converter: "Object",
        default: null
    },
    frame: {
        converter: "Number",
        default: 0
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

var _Matrix = __webpack_require__(19);

var _Matrix2 = _interopRequireDefault(_Matrix);

var _TransformComponent = __webpack_require__(2);

var _TransformComponent2 = _interopRequireDefault(_TransformComponent);

var _Component2 = __webpack_require__(4);

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GLTFJointComponent = function (_Component) {
    _inherits(GLTFJointComponent, _Component);

    function GLTFJointComponent() {
        _classCallCheck(this, GLTFJointComponent);

        return _possibleConstructorReturn(this, (GLTFJointComponent.__proto__ || Object.getPrototypeOf(GLTFJointComponent)).apply(this, arguments));
    }

    _createClass(GLTFJointComponent, [{
        key: "$mount",
        value: function $mount() {
            this._transform = this.node.getComponent(_TransformComponent2.default);
            this._skeletonTransform = this.getAttribute("skeletonTransform");
            var skinInfo = this.getAttribute("skinInfo");
            this._poseIndex = skinInfo.jointNames.indexOf(this.getAttribute("jointName"));
            this._jointMatrices = this.getAttribute("jointMatrices");
            this._bindShapeMatrix = skinInfo.bindShapeMatrix;
            this._invBindMatrix = new _Matrix2.default(skinInfo.inverseBindMatrices.getByIndex(this._poseIndex));
        }
    }, {
        key: "$update",
        value: function $update() {
            var poseMat = _Matrix2.default.inverse(this._skeletonTransform.globalTransform).multiplyWith(this._transform.globalTransform).multiplyWith(this._invBindMatrix).multiplyWith(this._bindShapeMatrix);
            for (var i = 0; i < 16; i++) {
                this._jointMatrices[this._poseIndex * 16 + i] = poseMat.rawElements[i];
            }
        }
    }]);

    return GLTFJointComponent;
}(_Component3.default);

exports.default = GLTFJointComponent;

GLTFJointComponent.attributes = {
    skinInfo: {
        converter: "Object",
        default: null
    },
    jointName: {
        converter: "String",
        default: null
    },
    skeletonTransform: {
        converter: "Object",
        default: null
    },
    jointMatrices: {
        converter: "Object",
        default: null
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

var _Component2 = __webpack_require__(4);

var _Component3 = _interopRequireDefault(_Component2);

var _Parser = __webpack_require__(15);

var _Parser2 = _interopRequireDefault(_Parser);

var _DefaultInstanciator = __webpack_require__(10);

var _DefaultInstanciator2 = _interopRequireDefault(_DefaultInstanciator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GLTFModelComponent = function (_Component) {
    _inherits(GLTFModelComponent, _Component);

    function GLTFModelComponent() {
        _classCallCheck(this, GLTFModelComponent);

        var _this = _possibleConstructorReturn(this, (GLTFModelComponent.__proto__ || Object.getPrototypeOf(GLTFModelComponent)).apply(this, arguments));

        _this._jointMatrices = {};
        return _this;
    }

    _createClass(GLTFModelComponent, [{
        key: "$mount",
        value: function $mount() {
            var _this2 = this;

            var src = this.getAttribute("src");
            if (src) {
                var gl = this.companion.get("gl");
                _Parser2.default.parseFromURL(gl, src).then(function (data) {
                    GLTFModelComponent.instanciator.instanciateAll(data, _this2.node, _this2.getAttribute("scene"));
                });
            }
        }
    }]);

    return GLTFModelComponent;
}(_Component3.default);

exports.default = GLTFModelComponent;

GLTFModelComponent.instanciator = new _DefaultInstanciator2.default();
GLTFModelComponent.componentName = "GLTFModelComponent";
GLTFModelComponent.attributes = {
    src: {
        converter: "String",
        default: null
    },
    scene: {
        converter: "String",
        default: null
    }
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TransformComponent = __webpack_require__(2);

var _TransformComponent2 = _interopRequireDefault(_TransformComponent);

var _Quaternion = __webpack_require__(20);

var _Quaternion2 = _interopRequireDefault(_Quaternion);

var _Vector = __webpack_require__(3);

var _Vector2 = _interopRequireDefault(_Vector);

var _Matrix = __webpack_require__(19);

var _Matrix2 = _interopRequireDefault(_Matrix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DefaultInstanciator = function () {
    function DefaultInstanciator() {
        _classCallCheck(this, DefaultInstanciator);
    }

    _createClass(DefaultInstanciator, [{
        key: "instanciateAll",
        value: function instanciateAll(recipe, node, scene) {
            var sceneIndex = scene;
            if (sceneIndex === null) {
                sceneIndex = recipe.tf.scene;
            }
            if (typeof sceneIndex !== "number") {
                for (var key in recipe.tf.scenes) {
                    sceneIndex = key;
                    break;
                }
            }
            var sceneInfo = recipe.tf.scenes[sceneIndex];
            this.__instanciateScene(sceneInfo, node, recipe);
        }
    }, {
        key: "__instanciateScene",
        value: function __instanciateScene(scene, node, recipe) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = scene.nodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var nodeName = _step.value;

                    this.__instanciateNode(recipe, nodeName, node);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }, {
        key: "__instanciateNode",
        value: function __instanciateNode(recipe, nodeName, parent) {
            var node = recipe.tf.nodes[nodeName];
            var currentNode = void 0;
            if (node.mesh !== void 0) {
                var primitives = recipe.primitives[node.mesh];
                var meshInfo = recipe.tf.meshes[node.mesh];
                if (primitives.length === 1) {
                    var mat = recipe.materials[meshInfo.primitives[0].material];
                    var meshNode = parent.addChildByName("mesh", {
                        geometry: primitives[0],
                        material: mat
                    });
                    currentNode = meshNode;
                } else {
                    var objectNode = parent.addChildByName("object", {});
                    for (var i = 0; i < primitives.length; i++) {
                        var _mat = recipe.materials[meshInfo.primitives[i].material];
                        var _meshNode = objectNode.addChildByName("mesh", {
                            geometry: primitives[i],
                            material: _mat
                        });
                    }
                    currentNode = objectNode;
                }
            } else {
                currentNode = parent.addChildByName("object", {});
            }
            this.__applyTransform(currentNode, node);
            if (node.children) {
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = node.children[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var child = _step2.value;

                        this.__instanciateNode(recipe, child, currentNode);
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }
            }
        }
    }, {
        key: "__applyTransform",
        value: function __applyTransform(node, nodeInfo) {
            var transform = node.getComponent(_TransformComponent2.default);
            if (nodeInfo.rotation) {
                transform.setAttribute("rotation", new _Quaternion2.default([].concat(nodeInfo.rotation)));
            }
            if (nodeInfo.translation) {
                transform.setAttribute("position", new _Vector2.default([].concat(nodeInfo.translation)));
            }
            if (nodeInfo.scale) {
                transform.setAttribute("scale", new _Vector2.default([].concat(nodeInfo.scale)));
            }
            if (nodeInfo.matrix) {
                if (nodeInfo.rotation || nodeInfo.translation || nodeInfo.scale) {
                    throw new Error("Matrix property can not be existed with other transoform property");
                }
                var mat = new _Matrix2.default(nodeInfo.matrix);
                transform.applyMatrix(mat);
            }
        }
    }]);

    return DefaultInstanciator;
}();

exports.default = DefaultInstanciator;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ParserModule2 = __webpack_require__(0);

var _ParserModule3 = _interopRequireDefault(_ParserModule2);

var _Animation = __webpack_require__(5);

var _Animation2 = _interopRequireDefault(_Animation);

var _Texture2D = __webpack_require__(29);

var _Texture2D2 = _interopRequireDefault(_Texture2D);

var _Geometry = __webpack_require__(26);

var _Geometry2 = _interopRequireDefault(_Geometry);

var _MaterialFactory = __webpack_require__(18);

var _MaterialFactory2 = _interopRequireDefault(_MaterialFactory);

var _ConstantConverter = __webpack_require__(1);

var _ConstantConverter2 = _interopRequireDefault(_ConstantConverter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var DefaultParserModule = function (_ParserModule) {
    _inherits(DefaultParserModule, _ParserModule);

    function DefaultParserModule() {
        _classCallCheck(this, DefaultParserModule);

        return _possibleConstructorReturn(this, (DefaultParserModule.__proto__ || Object.getPrototypeOf(DefaultParserModule)).apply(this, arguments));
    }

    _createClass(DefaultParserModule, [{
        key: "fetchGLTF",
        value: function fetchGLTF(url) {
            return this.__fetchBuffer(url);
        }
    }, {
        key: "loadAsGLTF",
        value: function loadAsGLTF(buffer) {
            var rawStr = this.__bufferToString(buffer);
            return JSON.parse(rawStr);
        }
    }, {
        key: "loadTextureResources",
        value: function loadTextureResources(tf) {
            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
                var _this2 = this;

                var textures, promises, _loop, key;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                textures = {};
                                promises = [];

                                if (tf.images) {
                                    _loop = function _loop(key) {
                                        var texture = tf.textures[key];
                                        var promise = _this2.parser.callParserModule(function (t) {
                                            return t.fetchTextureResource;
                                        }, tf.images[texture.source]).then(function (img) {
                                            var texture = _this2.parser.callParserModule(function (t) {
                                                return t.convertTotexture;
                                            }, { tf: tf, image: img, texIndex: key });
                                            textures[key] = texture;
                                        });
                                        promises.push(promise);
                                    };

                                    for (key in tf.textures) {
                                        _loop(key);
                                    }
                                }
                                _context.next = 5;
                                return Promise.all(promises);

                            case 5:
                                return _context.abrupt("return", textures);

                            case 6:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
        /**
         * Start loading texture resource.
         * @return {Promise<Texture2D>} [description]
         */

    }, {
        key: "fetchTextureResource",
        value: function fetchTextureResource(tf) {
            return this.__fetchImage(this.baseDirectory + tf.uri);
        }
        /**
         * Load image as texture
         * @return {Promise<Texture2D>} [description]
         */

    }, {
        key: "convertTotexture",
        value: function convertTotexture(arg) {
            var tex = new _Texture2D2.default(this.__gl);
            tex.update(arg.image);
            var texInfo = arg.tf.textures[arg.texIndex];
            var samplerInfo = {};
            if (!texInfo) {
                samplerInfo = arg.tf.samplers[texInfo.sampler];
            }
            tex.magFilter = samplerInfo.magFilter || WebGLRenderingContext.LINEAR;
            tex.minFilter = samplerInfo.minFilter || WebGLRenderingContext.NEAREST_MIPMAP_LINEAR;
            tex.wrapS = samplerInfo.wrapS || WebGLRenderingContext.REPEAT;
            tex.wrapT = samplerInfo.wrapT || WebGLRenderingContext.REPEAT;
            return tex;
        }
        /**
         * Start loading buffer resource.
         * @return {Promise<ArrayBuffer>} [description]
         */

    }, {
        key: "loadBufferResource",
        value: function loadBufferResource(tf) {
            return this.__fetchBuffer(this.baseDirectory + tf.uri);
        }
    }, {
        key: "loadBufferResources",
        value: function loadBufferResources(tf) {
            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee2() {
                var _this3 = this;

                var buffers, promises, _loop2, key;

                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                buffers = {};
                                promises = [];

                                _loop2 = function _loop2(key) {
                                    promises.push(_this3.parser.callParserModule(function (t) {
                                        return t.loadBufferResource;
                                    }, tf.buffers[key]).then(function (buffer) {
                                        buffers[key] = buffer;
                                    }));
                                };

                                for (key in tf.buffers) {
                                    _loop2(key);
                                }
                                _context2.next = 6;
                                return Promise.all(promises);

                            case 6:
                                return _context2.abrupt("return", buffers);

                            case 7:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));
        }
    }, {
        key: "loadBufferViews",
        value: function loadBufferViews(args) {
            var bufferViews = {};
            for (var key in args.tf.bufferViews) {
                var bufferViewInfo = args.tf.bufferViews[key];
                bufferViews[key] = new Uint8Array(args.buffers[bufferViewInfo.buffer], bufferViewInfo.byteOffset, bufferViewInfo.byteLength);
            }
            return bufferViews;
        }
    }, {
        key: "loadPrimitivesOfMesh",
        value: function loadPrimitivesOfMesh(args) {
            var result = {};
            for (var key in args.tf.meshes) {
                var meshInfo = args.tf.meshes[key];
                var primitives = [];
                result[key] = primitives;
                for (var pKey in meshInfo.primitives) {
                    primitives.push(this.parser.callParserModule(function (t) {
                        return t.loadPrimitive;
                    }, { tf: args.tf, bufferViews: args.bufferViews, primitive: meshInfo.primitives[pKey] }));
                }
            }
            return result;
        }
    }, {
        key: "loadPrimitive",
        value: function loadPrimitive(args) {
            var geo = new _Geometry2.default(this.__gl);
            this.parser.callParserModule(function (t) {
                return t.appendIndices;
            }, { tf: args.tf, bufferViews: args.bufferViews, primitive: args.primitive, geometry: geo });
            this.parser.callParserModule(function (t) {
                return t.addVertexAttributes;
            }, { tf: args.tf, bufferViews: args.bufferViews, primitive: args.primitive, geometry: geo });
            return geo;
        }
    }, {
        key: "appendIndices",
        value: function appendIndices(args) {
            if (args.primitive.indices !== void 0) {
                var topology = args.primitive.mode || WebGLRenderingContext.TRIANGLES;
                var indexAccessor = args.tf.accessors[args.primitive.indices];
                args.geometry.addIndex("default", args.bufferViews[indexAccessor.bufferView], topology, indexAccessor.byteOffset, indexAccessor.count, indexAccessor.componentType);
                return true;
            }
        }
    }, {
        key: "addVertexAttributes",
        value: function addVertexAttributes(args) {
            for (var attrib in args.primitive.attributes) {
                var accessor = args.tf.accessors[args.primitive.attributes[attrib]];
                var bufAccessor = {};
                bufAccessor[attrib] = {
                    size: _ConstantConverter2.default.asVectorSize(accessor.type),
                    type: accessor.componentType,
                    stride: accessor.byteStride,
                    offset: accessor.byteOffset
                };
                args.geometry.addAttributes(args.bufferViews[accessor.bufferView], bufAccessor);
            }
            this.parser.callParserModule(function (t) {
                return t.complementVertexAttributes;
            }, args);
            return true;
        }
    }, {
        key: "complementVertexAttributes",
        value: function complementVertexAttributes(args) {
            return true;
        }
    }, {
        key: "loadMaterials",
        value: function loadMaterials(args) {
            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee3() {
                var result, key;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                result = {};
                                _context3.t0 = regeneratorRuntime.keys(args.tf.materials);

                            case 2:
                                if ((_context3.t1 = _context3.t0()).done) {
                                    _context3.next = 9;
                                    break;
                                }

                                key = _context3.t1.value;
                                _context3.next = 6;
                                return this.parser.callParserModule(function (t) {
                                    return t.loadMaterial;
                                }, { material: args.tf.materials[key], textures: args.textures });

                            case 6:
                                result[key] = _context3.sent;
                                _context3.next = 2;
                                break;

                            case 9:
                                return _context3.abrupt("return", result);

                            case 10:
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));
        }
    }, {
        key: "loadMaterial",
        value: function loadMaterial(args) {
            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee4() {
                var material, pmr, matArgs;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                if (!args.material["pbrMetallicRoughness"]) {
                                    _context4.next = 18;
                                    break;
                                }

                                _context4.next = 3;
                                return _MaterialFactory2.default.get(this.__gl).instanciate("gltf-pbr-metallic-roughness");

                            case 3:
                                material = _context4.sent;
                                pmr = args.material["pbrMetallicRoughness"];
                                matArgs = material.arguments;

                                if (pmr.baseColorFactor) {
                                    matArgs.baseColorFactor = pmr.baseColorFactor;
                                }
                                if (pmr.baseColorTexture) {
                                    matArgs.baseColorTexture = args.textures[pmr.baseColorTexture.index];
                                }
                                if (pmr.metallicFactor) {
                                    matArgs.metallicFactor = pmr.metallicFactor;
                                }
                                if (pmr.metallicTexture) {
                                    matArgs.metallicTexture = args.textures[pmr.metallicTexture.index];
                                }
                                if (pmr.roughnessFactor) {
                                    matArgs.roughnessFactor = pmr.roughnessFactor;
                                }
                                if (pmr.roughnessTexture) {
                                    matArgs.roughnessTexture = args.textures[pmr.roughnessTexture.index];
                                }
                                if (pmr.metallicRoughnessTexture) {
                                    matArgs.metallicRoughnessTexture = args.textures[pmr.metallicRoughnessTexture.index];
                                }
                                if (args.material["emissiveFactor"]) {
                                    matArgs.emissiveFactor = args.material["emissiveFactor"];
                                }
                                if (args.material["emissiveTexture"]) {
                                    matArgs.emissiveTexture = args.textures[args.material["emissiveTexture"].index];
                                }
                                if (args.material["normalTexture"]) {
                                    matArgs.normalTexture = args.textures[args.material["normalTexture"].index];
                                }
                                if (args.material["occlusionTexture"]) {
                                    matArgs.occlusionTexture = args.textures[args.material["occlusionTexture"].index];
                                }
                                return _context4.abrupt("return", material);

                            case 18:
                            case "end":
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));
        }
        // Animation would be replaced in future
        // Because main part of animation should be implemented commonly, not limited in glTF.

    }, {
        key: "loadAnimations",
        value: function loadAnimations(args) {
            var result = {};
            for (var key in args.tf.animations) {
                result[key] = new _Animation2.default(args.tf, key, args.bufferViews);
            }
            return result;
        }
    }]);

    return DefaultParserModule;
}(_ParserModule3.default);

exports.default = DefaultParserModule;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ParserModule2 = __webpack_require__(0);

var _ParserModule3 = _interopRequireDefault(_ParserModule2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EmbeddedBufferModule = function (_ParserModule) {
    _inherits(EmbeddedBufferModule, _ParserModule);

    function EmbeddedBufferModule() {
        _classCallCheck(this, EmbeddedBufferModule);

        return _possibleConstructorReturn(this, (EmbeddedBufferModule.__proto__ || Object.getPrototypeOf(EmbeddedBufferModule)).apply(this, arguments));
    }

    _createClass(EmbeddedBufferModule, [{
        key: "loadBufferResource",
        value: function loadBufferResource(tf) {
            if (this.__isDataUri(tf.uri)) {
                return Promise.resolve(this.__dataUriToArrayBuffer(tf.uri));
            }
        }
    }]);

    return EmbeddedBufferModule;
}(_ParserModule3.default);

exports.default = EmbeddedBufferModule;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ParserModule2 = __webpack_require__(0);

var _ParserModule3 = _interopRequireDefault(_ParserModule2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndexComplementorModule = function (_ParserModule) {
    _inherits(IndexComplementorModule, _ParserModule);

    function IndexComplementorModule() {
        _classCallCheck(this, IndexComplementorModule);

        return _possibleConstructorReturn(this, (IndexComplementorModule.__proto__ || Object.getPrototypeOf(IndexComplementorModule)).apply(this, arguments));
    }

    _createClass(IndexComplementorModule, [{
        key: "appendIndices",
        value: function appendIndices(args) {
            if (args.primitive.indices === void 0) {
                var topology = args.primitive.mode || WebGLRenderingContext.TRIANGLES;
                var accessor = args.tf.accessors[args.primitive.attributes["POSITION"]];
                if (accessor.count === void 0) {
                    throw new Error("POSITION buffer should have count parameter. Construction of index buffer was failed.");
                }
                if (topology !== WebGLRenderingContext.TRIANGLES) {
                    throw new Error("Complementing index buffer is only supported for TRIANGLES topology currently.");
                }
                var indices = new Array(accessor.count);
                for (var i = 0; i < accessor.count; i++) {
                    indices[i] = i;
                }
                args.geometry.addIndex("default", indices);
                return true;
            }
        }
    }]);

    return IndexComplementorModule;
}(_ParserModule3.default);

exports.default = IndexComplementorModule;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ParserModule2 = __webpack_require__(0);

var _ParserModule3 = _interopRequireDefault(_ParserModule2);

var _Vector = __webpack_require__(3);

var _Vector2 = _interopRequireDefault(_Vector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NormalComplementorModule = function (_ParserModule) {
    _inherits(NormalComplementorModule, _ParserModule);

    function NormalComplementorModule() {
        _classCallCheck(this, NormalComplementorModule);

        return _possibleConstructorReturn(this, (NormalComplementorModule.__proto__ || Object.getPrototypeOf(NormalComplementorModule)).apply(this, arguments));
    }

    _createClass(NormalComplementorModule, [{
        key: "complementVertexAttributes",
        value: function complementVertexAttributes(args) {
            if (args.primitive.attributes["NORMAL"] === void 0 && args.primitive.attributes["POSITION"] !== void 0) {
                var accessor = args.tf.accessors[args.primitive.attributes["POSITION"]];
                var baseBufferView = args.bufferViews[accessor.bufferView];
                var positions = new Float32Array(baseBufferView.buffer, baseBufferView.byteOffset + accessor.byteOffset);
                if (accessor.byteStride !== void 0 && accessor.byteStride !== 0) {
                    throw new Error("Complementing normal with a position buffer which buffer has stride as a parameter");
                }
                if (!accessor.count) {
                    throw new Error("Accessor count of POSITION buffer should be defined for complementing NORMAL buffer");
                }
                // generate normal buffer
                var normal = new Float32Array(accessor.count * 3);
                var p = function p(i, j, k) {
                    return positions[9 * i + 3 * j + k];
                }; // Get k th element of  j th vertices of i th surface
                for (var i = 0; i < accessor.count / 3; i++) {
                    var v0Tov1 = new _Vector2.default(p(i, 1, 0) - p(i, 0, 0), p(i, 1, 1) - p(i, 0, 1), p(i, 1, 2) - p(i, 0, 2));
                    var v0Tov2 = new _Vector2.default(p(i, 2, 0) - p(i, 0, 0), p(i, 2, 1) - p(i, 0, 1), p(i, 2, 2) - p(i, 0, 2));
                    var nor = _Vector2.default.cross(v0Tov1, v0Tov2).normalizeThis();
                    for (var j = 0; j < 3; j++) {
                        var posBase = i * 9 + j * 3;
                        normal[posBase + 0] = nor.X;
                        normal[posBase + 1] = nor.Y;
                        normal[posBase + 2] = nor.Z;
                    }
                }
                // add normal to geometry
                args.geometry.addAttributes(normal, {
                    NORMAL: {
                        size: 3
                    }
                });
            }
            return false;
        }
    }]);

    return NormalComplementorModule;
}(_ParserModule3.default);

exports.default = NormalComplementorModule;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DefaultParserModule = __webpack_require__(11);

var _DefaultParserModule2 = _interopRequireDefault(_DefaultParserModule);

var _NormalComplementorModule = __webpack_require__(14);

var _NormalComplementorModule2 = _interopRequireDefault(_NormalComplementorModule);

var _IndexComplementorModule = __webpack_require__(13);

var _IndexComplementorModule2 = _interopRequireDefault(_IndexComplementorModule);

var _EmbeddedBufferModule = __webpack_require__(12);

var _EmbeddedBufferModule2 = _interopRequireDefault(_EmbeddedBufferModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
// Modules

var GLTFParser = function () {
    function GLTFParser(gl, url) {
        _classCallCheck(this, GLTFParser);

        this.gl = gl;
        this.url = url;
        this.parserModuleInstances = [];
        for (var i = 0; i < GLTFParser.parserModules.length; i++) {
            var moduleCtor = GLTFParser.parserModules[i];
            this.parserModuleInstances.push(new moduleCtor(this, url.substr(0, url.lastIndexOf("/") + 1)));
        }
    }

    _createClass(GLTFParser, [{
        key: "callParserModule",
        value: function callParserModule(target, arg) {
            for (var i = 0; i < this.parserModuleInstances.length; i++) {
                var module = this.parserModuleInstances[i];
                var moduleMethod = target(module);
                if (moduleMethod === void 0) {
                    continue;
                }
                var result = moduleMethod.call(module, arg);
                if (result !== void 0) {
                    return result;
                }
            }
            throw new Error("Parsing gltf failed. At the module \"" + target.toString() + "\"");
        }
    }, {
        key: "parse",
        value: function parse() {
            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
                var _this = this;

                var result, gltfRaw, gltf, textureResourcePromise, bufferResources;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                result = {};
                                _context.next = 3;
                                return this.callParserModule(function (t) {
                                    return t.fetchGLTF;
                                }, this.url);

                            case 3:
                                gltfRaw = _context.sent;
                                gltf = this.callParserModule(function (t) {
                                    return t.loadAsGLTF;
                                }, gltfRaw);

                                result.tf = gltf;
                                _context.next = 8;
                                return this.callParserModule(function (t) {
                                    return t.loadTextureResources;
                                }, gltf).then(function (textures) {
                                    return _this.callParserModule(function (t) {
                                        return t.loadMaterials;
                                    }, { tf: gltf, textures: textures });
                                }).then(function (materials) {
                                    result.materials = materials;
                                });

                            case 8:
                                textureResourcePromise = _context.sent;
                                _context.next = 11;
                                return this.callParserModule(function (t) {
                                    return t.loadBufferResources;
                                }, gltf).then(function (buffers) {
                                    var bufferViews = _this.callParserModule(function (t) {
                                        return t.loadBufferViews;
                                    }, { tf: gltf, buffers: buffers });
                                    var primitives = _this.callParserModule(function (t) {
                                        return t.loadPrimitivesOfMesh;
                                    }, { tf: gltf, bufferViews: bufferViews });
                                    var animations = _this.callParserModule(function (t) {
                                        return t.loadAnimations;
                                    }, { tf: gltf, bufferViews: bufferViews });
                                    result.primitives = primitives;
                                });

                            case 11:
                                bufferResources = _context.sent;
                                return _context.abrupt("return", result);

                            case 13:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
    }], [{
        key: "parseFromURL",
        value: function parseFromURL(gl, url) {
            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee2() {
                var parser;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                parser = new GLTFParser(gl, url);
                                return _context2.abrupt("return", parser.parse());

                            case 2:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));
        }
    }]);

    return GLTFParser;
}();

exports.default = GLTFParser;

GLTFParser.parserModules = [_EmbeddedBufferModule2.default, _IndexComplementorModule2.default, _NormalComplementorModule2.default, _DefaultParserModule2.default];

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ImageResolver = __webpack_require__(17);

var _ImageResolver2 = _interopRequireDefault(_ImageResolver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Base class of ParserModule.
 * Provides utility for parsing glTF files.
 */
var ParserModuleBase = function () {
    function ParserModuleBase() {
        _classCallCheck(this, ParserModuleBase);
    }

    _createClass(ParserModuleBase, [{
        key: "__fetchBuffer",
        value: function __fetchBuffer(url) {
            return new Promise(function (resolve, reject) {
                var xhr = new XMLHttpRequest();
                xhr.open("GET", url);
                xhr.responseType = "arraybuffer";
                xhr.onload = function (v) {
                    resolve(xhr.response);
                };
                xhr.onerror = function (e) {
                    reject({
                        message: "Loading resource at '" + url + " failed. Is there resource file in dependency at correct location?'",
                        error: e
                    });
                };
                xhr.send();
            });
        }
    }, {
        key: "__fetchImage",
        value: function __fetchImage(url) {
            return _ImageResolver2.default.resolve(url);
        }
        /**
         * Check provided string being data uri or not.
         * @param  {string}  target [description]
         * @return {boolean}        [description]
         */

    }, {
        key: "__isDataUri",
        value: function __isDataUri(target) {
            return !!target.match(/^\s*data\:.*;base64/);
        }
        /**
         * Get directiory location from specified url
         * @param  {string} url [description]
         * @return {string}     [description]
         */

    }, {
        key: "__getBaseDir",
        value: function __getBaseDir(url) {
            return url.substr(0, url.lastIndexOf("/") + 1);
        }
        /**
         * Convert dataURI text to raw text
         * @param  {string} dataUrl [description]
         * @return {string}         [description]
         */

    }, {
        key: "__dataUriToText",
        value: function __dataUriToText(dataUrl) {
            var splittedUri = dataUrl.split(",");
            var byteString = atob(splittedUri[1]);
            return byteString;
        }
        /**
         * Convert data url string into array buffer
         * @param  {string}      dataUri [description]
         * @return {ArrayBuffer}         [description]
         */

    }, {
        key: "__dataUriToArrayBuffer",
        value: function __dataUriToArrayBuffer(dataUri) {
            var splittedUri = dataUri.split(",");
            var byteString = atob(splittedUri[1]);
            var byteStringLength = byteString.length;
            var arrayBuffer = new ArrayBuffer(byteStringLength);
            var uint8Array = new Uint8Array(arrayBuffer);
            for (var i = 0; i < byteStringLength; i++) {
                uint8Array[i] = byteString.charCodeAt(i);
            }
            return arrayBuffer;
        }
        /**
         * Convert data uri into image element
         * @param  {string}  dataUrl [description]
         * @return {Promise}         [description]
         */

    }, {
        key: "__dataUriToImage",
        value: function __dataUriToImage(dataUrl) {
            return new Promise(function (resolve, reject) {
                var image = new Image();
                image.src = dataUrl;
                image.onload = function () {
                    resolve(image);
                };
            });
        }
    }, {
        key: "__bufferToString",
        value: function __bufferToString(arr) {
            var tmp = "";
            var len = 1024;
            for (var p = 0; p < arr.byteLength; p += len) {
                tmp += this._smallBufferToString(new Uint8Array(arr.slice(p, p + len)));
            }
            return tmp;
        }
    }, {
        key: "_smallBufferToString",
        value: function _smallBufferToString(arr) {
            return String.fromCharCode.apply("", arr);
        }
    }]);

    return ParserModuleBase;
}();

exports.default = ParserModuleBase;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.fundamental.Asset.ImageResolver;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.fundamental.Material.MaterialFactory;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.math.Matrix;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.math.Quaternion;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ConstantConverter = __webpack_require__(1);

var _ConstantConverter2 = _interopRequireDefault(_ConstantConverter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The accessor class to be used for fetching animation frames
 */
var Accessor = function () {
    function Accessor(buffer, count, componentType, elementSize, byteOffset, byteStride) {
        _classCallCheck(this, Accessor);

        this.buffer = buffer;
        this.count = count;
        this.componentType = componentType;
        this.elementSize = elementSize;
        this.byteOffset = byteOffset;
        this.byteStride = byteStride;
        this._dView = new DataView(buffer.buffer, buffer.byteOffset + byteOffset);
        this._elementByteSize = _ConstantConverter2.default.asByteSize(componentType);
        if (byteStride === 0) {
            this.byteStride = this.elementSize * this._elementByteSize;
        }
    }

    _createClass(Accessor, [{
        key: "getByIndex",
        value: function getByIndex(index) {
            if (index < 0 || index >= this.count) {
                return null;
            }
            var res = new Array(this.elementSize);
            for (var i = 0; i < this.elementSize; i++) {
                res[i] = this._getSingleByIndex(index, i);
            }
            return res;
        }
    }, {
        key: "_getSingleByIndex",
        value: function _getSingleByIndex(index, elementIndex) {
            switch (this.componentType) {
                case WebGLRenderingContext.FLOAT:
                    return this._dView.getFloat32(index * this.byteStride + this._elementByteSize * elementIndex, true);
                default:
                    throw new Error("Unsupported element type");
            }
        }
    }]);

    return Accessor;
}();

exports.default = Accessor;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TextFileResolver = __webpack_require__(25);

var _TextFileResolver2 = _interopRequireDefault(_TextFileResolver);

var _ImageResolver = __webpack_require__(17);

var _ImageResolver2 = _interopRequireDefault(_ImageResolver);

var _HashCalculator = __webpack_require__(31);

var _HashCalculator2 = _interopRequireDefault(_HashCalculator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Provides resolving resource dependency while parsing gltf file.
 */
var ResourceResolver = function () {
    function ResourceResolver(_rootPath) {
        _classCallCheck(this, ResourceResolver);

        this._rootPath = _rootPath;
        this.baseDirectory = this._getBaseDir(_rootPath);
    }

    _createClass(ResourceResolver, [{
        key: "loadGLTFFile",
        value: function loadGLTFFile() {
            var _this = this;

            return new Promise(function (resolve, reject) {
                var xhr = new XMLHttpRequest();
                xhr.open("GET", _this._rootPath);
                xhr.responseType = "arraybuffer";
                xhr.onload = function (v) {
                    var uiarr = new Uint8Array(xhr.response);
                    var glTFMagic = [103, 108, 84, 70];
                    var isBinary = true;
                    for (var i = 0; i < glTFMagic.length; i++) {
                        if (uiarr[i] !== glTFMagic[i]) {
                            isBinary = false;
                        }
                    }
                    var resultJson = void 0;
                    if (isBinary) {
                        var darr = new DataView(xhr.response);
                        var fl = darr.getUint32(8, true); // fullLength
                        var l = darr.getUint32(12, true); // contentLength
                        resultJson = _this._bufferToString(xhr.response.slice(20, 20 + l));
                        _this.binaryGLTFBuffer = xhr.response.slice(20 + l, fl);
                    } else {
                        resultJson = _this._bufferToString(xhr.response);
                    }
                    _this.tf = JSON.parse(resultJson);
                    _this.tf.id = _HashCalculator2.default.calcHash(resultJson);
                    resolve(_this.tf);
                };
                xhr.onerror = function (e) {
                    // reject({
                    //   message: `Loading resource at '${this.baseDirectory + url} failed. Is there resource file in dependency at correct location?'`,
                    //   error:e
                    // });
                };
                xhr.send();
            });
        }
        /**
         * Load image from specified url or dataURL.
         * @param  {string}  url [description]
         * @return {Promise}     [description]
         */

    }, {
        key: "loadImage",
        value: function loadImage(image) {
            var url = image.uri;
            var isBlob = false;
            if (image["extensions"] && image["extensions"]["KHR_binary_glTF"]) {
                var binaryInfo = image["extensions"]["KHR_binary_glTF"];
                var bufferViewInfo = this.tf.bufferViews[binaryInfo.bufferView];
                var blob = new Blob([new Uint8Array(this.binaryGLTFBuffer, bufferViewInfo.byteOffset, bufferViewInfo.byteLength)], {
                    type: binaryInfo.mimeType
                });
                url = window.URL.createObjectURL(blob);
                isBlob = true;
            }
            if (this._isDataUrl(url)) {
                return this._dataUriToImage(url);
            } else {
                return _ImageResolver2.default.resolve(isBlob ? url : this.baseDirectory + url);
            }
        }
        /**
         * Load buffer from specified url or dataURL.
         * @return {Promise<ArrayBuffer>} [description]
         */

    }, {
        key: "loadBuffer",
        value: function loadBuffer(url) {
            var _this2 = this;

            if (this._isDataUrl(url)) {
                return new Promise(function (resolve, reject) {
                    resolve(_this2._dataUriToArrayBuffer(url));
                });
            }
            return new Promise(function (resolve, reject) {
                var xhr = new XMLHttpRequest();
                xhr.open("GET", _this2.baseDirectory + url);
                xhr.responseType = "arraybuffer";
                xhr.onload = function (v) {
                    resolve(xhr.response);
                };
                xhr.onerror = function (e) {
                    reject({
                        message: "Loading resource at '" + (_this2.baseDirectory + url) + " failed. Is there resource file in dependency at correct location?'",
                        error: e
                    });
                };
                xhr.send();
            });
        }
        /**
         * Load string from specified url or dataURL
         * @param  {string}          url [description]
         * @return {Promise<string>}     [description]
         */

    }, {
        key: "loadShader",
        value: function loadShader(shader) {
            var url = shader.uri;
            var isBlob = false;
            if (shader["extensions"] && shader["extensions"]["KHR_binary_glTF"]) {
                var binaryInfo = shader["extensions"]["KHR_binary_glTF"];
                var bufferViewInfo = this.tf.bufferViews[binaryInfo.bufferView];
                var blob = new Blob([new Uint8Array(this.binaryGLTFBuffer, bufferViewInfo.byteOffset, bufferViewInfo.byteLength)], {
                    type: "text/plain"
                });
                url = window.URL.createObjectURL(blob);
                isBlob = true;
            }
            if (this._isDataUrl(url)) {
                return Promise.resolve(this._dataUriToText(url));
            } else {
                return _TextFileResolver2.default.resolve(isBlob ? url : this.baseDirectory + url);
            }
        }
        /**
         * Convert data url string into array buffer
         * @param  {string}      dataUri [description]
         * @return {ArrayBuffer}         [description]
         */

    }, {
        key: "_dataUriToArrayBuffer",
        value: function _dataUriToArrayBuffer(dataUri) {
            var splittedUri = dataUri.split(",");
            var byteString = atob(splittedUri[1]);
            var byteStringLength = byteString.length;
            var arrayBuffer = new ArrayBuffer(byteStringLength);
            var uint8Array = new Uint8Array(arrayBuffer);
            for (var i = 0; i < byteStringLength; i++) {
                uint8Array[i] = byteString.charCodeAt(i);
            }
            return arrayBuffer;
        }
        /**
         * Convert data uri into image element
         * @param  {string}  dataUrl [description]
         * @return {Promise}         [description]
         */

    }, {
        key: "_dataUriToImage",
        value: function _dataUriToImage(dataUrl) {
            var _this3 = this;

            return new Promise(function (resolve, reject) {
                var canvas = document.createElement("canvas");
                var context = canvas.getContext("2d");
                var image = new Image();
                image.src = dataUrl;
                image.onload = function () {
                    resolve(_this3._ensureCorrectSize(image));
                };
            });
        }
    }, {
        key: "_dataUriToText",
        value: function _dataUriToText(dataUrl) {
            var splittedUri = dataUrl.split(",");
            var byteString = atob(splittedUri[1]);
            return byteString;
        }
    }, {
        key: "_ensureCorrectSize",
        value: function _ensureCorrectSize(image) {
            var canvas = document.createElement("canvas");
            var context = canvas.getContext("2d");
            var cWidth = Math.pow(2, Math.ceil(Math.log(image.width) / Math.LN2));
            var cHeight = Math.pow(2, Math.ceil(Math.log(image.height) / Math.LN2));
            if (cWidth === image.width && cHeight === image.height) {
                return image;
            }
            canvas.width = cWidth;
            canvas.height = cHeight;
            context.drawImage(image, 0, 0, image.width, image.height, 0, 0, cWidth, cHeight);
            return canvas;
        }
    }, {
        key: "_bufferToString",
        value: function _bufferToString(arr) {
            var tmp = "";
            var len = 1024;
            for (var p = 0; p < arr.byteLength; p += len) {
                tmp += this._smallBufferToString(new Uint8Array(arr.slice(p, p + len)));
            }
            return tmp;
        }
    }, {
        key: "_smallBufferToString",
        value: function _smallBufferToString(arr) {
            return String.fromCharCode.apply("", arr);
        }
        /**
         * Check specified url is dataUrl or not
         * @param  {string}  dataUrl [description]
         * @return {boolean}         [description]
         */

    }, {
        key: "_isDataUrl",
        value: function _isDataUrl(dataUrl) {
            return !!dataUrl.match(/^\s*data\:.*;base64/);
        }
        /**
         * Get directiory location from specified url
         * @param  {string} url [description]
         * @return {string}     [description]
         */

    }, {
        key: "_getBaseDir",
        value: function _getBaseDir(url) {
            return url.substr(0, url.lastIndexOf("/") + 1);
        }
    }]);

    return ResourceResolver;
}();

exports.default = ResourceResolver;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _GLTFJointComponent = __webpack_require__(8);

var _GLTFJointComponent2 = _interopRequireDefault(_GLTFJointComponent);

var _GLTFAnimationComponent = __webpack_require__(7);

var _GLTFAnimationComponent2 = _interopRequireDefault(_GLTFAnimationComponent);

var _GLTFModelComponent = __webpack_require__(9);

var _GLTFModelComponent2 = _interopRequireDefault(_GLTFModelComponent);

var _grimoirejs = __webpack_require__(35);

var _grimoirejs2 = _interopRequireDefault(_grimoirejs);

var _MaterialFactory = __webpack_require__(18);

var _MaterialFactory2 = _interopRequireDefault(_MaterialFactory);

var _UniformResolverRegistry = __webpack_require__(27);

var _UniformResolverRegistry2 = _interopRequireDefault(_UniformResolverRegistry);

var _gltfUnlit = __webpack_require__(37);

var _gltfUnlit2 = _interopRequireDefault(_gltfUnlit);

var _gltfPbrMetallicRoughness = __webpack_require__(36);

var _gltfPbrMetallicRoughness2 = _interopRequireDefault(_gltfPbrMetallicRoughness);

var _ImportResolver = __webpack_require__(30);

var _ImportResolver2 = _interopRequireDefault(_ImportResolver);

var _GLExtRequestor = __webpack_require__(28);

var _GLExtRequestor2 = _interopRequireDefault(_GLExtRequestor);

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

exports.default = function () {
    if (typeof _ImportResolver2.default.staticImports["forward-shading"] !== "string") {
        _ImportResolver2.default.staticImports["forward-shading"] = "";
    }
    _GLExtRequestor2.default.request("OES_standard_derivatives");
    _GLExtRequestor2.default.request("OES_element_index_uint");
    _grimoirejs2.default.register(function () {
        return __awaiter(undefined, void 0, void 0, regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _grimoirejs2.default.registerComponent("GLTFModel", _GLTFModelComponent2.default);
                            _grimoirejs2.default.registerComponent("GLTFAnimation", _GLTFAnimationComponent2.default);
                            _grimoirejs2.default.registerComponent("GLTFJoint", _GLTFJointComponent2.default);
                            _grimoirejs2.default.registerNode("model", ["GLTFModel"], {}, "object");
                            _grimoirejs2.default.registerNode("gltf-mesh", [], {
                                material: "new(gltf-unlit)"
                            }, "mesh");
                            _grimoirejs2.default.registerNode("gltf-joint", ["GLTFJoint"], {}, "object");
                            _grimoirejs2.default.registerNode("gltf-assets", [], {});
                            _grimoirejs2.default.registerNode("gltf-animation", ["GLTFAnimation"], {});
                            _MaterialFactory2.default.addSORTMaterial("gltf-unlit", _gltfUnlit2.default);
                            _MaterialFactory2.default.addSORTMaterial("gltf-pbr-metallic-roughness", _gltfPbrMetallicRoughness2.default);
                            _UniformResolverRegistry2.default.add("JOINTMATRIX", function (valInfo, material) {
                                return function (proxy, info) {
                                    if (info.renderable.renderArgs["gltf-boneMatrices"]) {
                                        proxy.uniformMatrixArray(valInfo.name, info.renderable.renderArgs["gltf-boneMatrices"]);
                                    }
                                };
                            });
                            _UniformResolverRegistry2.default.add("AMBIENT_COEFFICIENT", function (valInfo, material) {
                                return function (proxy, info) {
                                    var amb = info.sceneDescription["ambientCoefficient"];
                                    proxy.uniformFloat(valInfo.name, amb || 0.1);
                                };
                            });

                        case 12:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));
    });
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Accessor = __webpack_require__(21);

var _Accessor2 = _interopRequireDefault(_Accessor);

var _Animation = __webpack_require__(5);

var _Animation2 = _interopRequireDefault(_Animation);

var _Interpolators = __webpack_require__(6);

var _Interpolators2 = _interopRequireDefault(_Interpolators);

var _GLTFAnimationComponent = __webpack_require__(7);

var _GLTFAnimationComponent2 = _interopRequireDefault(_GLTFAnimationComponent);

var _GLTFJointComponent = __webpack_require__(8);

var _GLTFJointComponent2 = _interopRequireDefault(_GLTFJointComponent);

var _GLTFModelComponent = __webpack_require__(9);

var _GLTFModelComponent2 = _interopRequireDefault(_GLTFModelComponent);

var _DefaultInstanciator = __webpack_require__(10);

var _DefaultInstanciator2 = _interopRequireDefault(_DefaultInstanciator);

var _ConstantConverter = __webpack_require__(1);

var _ConstantConverter2 = _interopRequireDefault(_ConstantConverter);

var _DefaultParserModule = __webpack_require__(11);

var _DefaultParserModule2 = _interopRequireDefault(_DefaultParserModule);

var _EmbeddedBufferModule = __webpack_require__(12);

var _EmbeddedBufferModule2 = _interopRequireDefault(_EmbeddedBufferModule);

var _IndexComplementorModule = __webpack_require__(13);

var _IndexComplementorModule2 = _interopRequireDefault(_IndexComplementorModule);

var _NormalComplementorModule = __webpack_require__(14);

var _NormalComplementorModule2 = _interopRequireDefault(_NormalComplementorModule);

var _Parser = __webpack_require__(15);

var _Parser2 = _interopRequireDefault(_Parser);

var _ParserModule = __webpack_require__(0);

var _ParserModule2 = _interopRequireDefault(_ParserModule);

var _ParserModuleBase = __webpack_require__(16);

var _ParserModuleBase2 = _interopRequireDefault(_ParserModuleBase);

var _ResourceResolver = __webpack_require__(22);

var _ResourceResolver2 = _interopRequireDefault(_ResourceResolver);

var _main = __webpack_require__(23);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __VERSION__ = "0.0.7-development";
var __NAME__ = "grimoirejs-gltf";

var __EXPOSE__ = {
    "Accessor": {
        "Accessor": _Accessor2.default
    },
    "Animation": {
        "Animation": _Animation2.default,
        "Interpolators": _Interpolators2.default
    },
    "Components": {
        "GLTFAnimationComponent": _GLTFAnimationComponent2.default,
        "GLTFJointComponent": _GLTFJointComponent2.default,
        "GLTFModelComponent": _GLTFModelComponent2.default
    },
    "Instanciator": {
        "DefaultInstanciator": _DefaultInstanciator2.default
    },
    "Parser": {
        "ConstantConverter": _ConstantConverter2.default,
        "DefaultParserModule": _DefaultParserModule2.default,
        "Modules": {
            "EmbeddedBufferModule": _EmbeddedBufferModule2.default,
            "IndexComplementorModule": _IndexComplementorModule2.default,
            "NormalComplementorModule": _NormalComplementorModule2.default
        },
        "Parser": _Parser2.default,
        "ParserModule": _ParserModule2.default,
        "ParserModuleBase": _ParserModuleBase2.default
    },
    "Util": {
        "ResourceResolver": _ResourceResolver2.default
    }
};
var __BASE__ = (0, _main2.default)();
Object.assign(__EXPOSE__, {
    __VERSION__: __VERSION__,
    __NAME__: __NAME__
});
Object.assign(__BASE__ || {}, __EXPOSE__);
window["GrimoireJS"].lib.gltf = __EXPOSE__;
exports.default = __BASE__;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.fundamental.Asset.TextFileResolver;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.fundamental.Geometry.Geometry;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.fundamental.Material.UniformResolverRegistry;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.fundamental.Resource.GLExtRequestor;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.fundamental.Resource.Texture2D;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.fundamental.Sort.ImportResolver;

/***/ }),
/* 31 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.fundamental.Util.HashCalculator;

/***/ }),
/* 32 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.math.Color3;

/***/ }),
/* 33 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.math.Color4;

/***/ }),
/* 34 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.math.GLM;

/***/ }),
/* 35 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS;

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = "@Pass{\n#extension GL_OES_standard_derivatives : enable\n@BlendFunc(SRC_ALPHA,ONE_MINUS_SRC_ALPHA)\n@ExposeMacro(int,jointCount,JOINT_COUNT,0)\nFS_PREC(mediump,float)\n\nvarying vec3 vPosition;\nvarying vec3 vNormal;\nvarying vec2 vUV;\n\n#ifdef VS\n#if JOINT_COUNT > 0\n  @JOINTMATRIX\n  uniform mat4 boneMatrices[JOINT_COUNT];\n#endif\n  @NORMAL\n  attribute vec3 normal;\n  @POSITION\n  attribute vec3 position;\n#ifdef ATTRIBUTE_TEXCOORD_0_ENABLED\n  @TEXCOORD_0\n  attribute vec2 texCoord;\n#endif\n#if JOINT_COUNT > 0\n  @JOINT\n  attribute vec4 joint;\n  @WEIGHT\n  attribute vec4 weight;\n#endif\n  uniform mat4 _matPVM;\n  uniform mat4 _matM;\n  void main(){\n    mat4 transform = _matM;\n    mat4 projectionTransform = _matPVM;\n    #if JOINT_COUNT > 0\n      mat4 skinMat = weight.x * boneMatrices[int(joint.x)] + weight.y * boneMatrices[int(joint.y)] + weight.z * boneMatrices[int(joint.z)] + weight.w * boneMatrices[int(joint.w)];\n      transform *= skinMat;\n      projectionTransform *= skinMat;\n    #endif\n    #ifdef ATTRIBUTE_TEXCOORD_0_ENABLED\n        vUV = texCoord;\n    #else\n        vUV  = position.xy /2.0 + vec2(0.5);\n    #endif\n    vNormal = normalize((transform * vec4(normal,0.0)).xyz);\n    vPosition = (transform * vec4(position,1.0)).xyz;\n    gl_Position = projectionTransform * vec4(position,1.0);\n  }\n\n\n#endif\n\n\n#ifdef FS\n  @HAS_TEXTURE{sampler:\"normalTexture\"}\n  uniform bool has_normalTexture;\n\n  uniform sampler2D normalTexture;\n\n  @{default:\"1,1,1,1\"}\n  uniform vec4 baseColorFactor;\n\n  uniform sampler2D baseColorTexture;\n\n  @HAS_TEXTURE{sampler:\"baseColorTexture\"}\n  uniform bool has_baseColorTexture;\n\n  @{default:\"1\"}\n  uniform float metallicFactor;\n\n  uniform sampler2D metallicTexture;\n\n  @HAS_TEXTURE{sampler:\"metallicTexture\"}\n  uniform bool has_metallicTexture;\n\n  @{default:\"1\"}\n  uniform float roughnessFactor;\n\n  uniform sampler2D roughnessTexture;\n\n  @HAS_TEXTURE{sampler:\"roughnessTexture\"}\n  uniform bool has_roughnessTexture;\n\n  @{default:\"0,0,0\"}\n  uniform vec3 emissiveFactor;\n\n  uniform sampler2D emissiveTexture;\n\n  @HAS_TEXTURE{sampler:\"emissiveTexture\"}\n  uniform bool has_emissiveTexture;\n\n  uniform sampler2D metallicRoughnessTexture;\n\n  @HAS_TEXTURE{sampler:\"metallicRoughnessTexture\"}\n  uniform bool has_metallicRoughnessTexture;\n\n  uniform sampler2D occlusionTexture;\n\n  @HAS_TEXTURE{sampler:\"occlusionTexture\"}\n  uniform bool has_occlusionTexture;\n\n  @CAMERA_POSITION\n  uniform vec3 _cameraPosition;\n\n  @import \"forward-shading\"\n\n  #ifndef GR_FORWARD_SHADING_ENABLED\n\n  struct simple_pbr_params{\n    vec3 diffuseColor;\n    vec3 f0;\n    float alpha;\n    float roughness;\n  };\n\n    @{default:\"n(3,0.5,10)\"}\n    uniform vec3 simpleLightDirection;\n\n    @{type:\"color\",default:\"gray\"}\n    uniform vec3 simpleLightColor;\n\n    @{default:0.3}\n    uniform float simpleLightIntencity;\n\n    float lambert(vec3 lightDirection,vec3 surfaceNormal) {\n      return max(0.0, dot(lightDirection, surfaceNormal));\n    }\n\n    float ctd_GGX_Distribution(simple_pbr_params param,vec3 l,vec3 v,vec3 n,vec3 h){\n      float alpha2 = pow(param.alpha,2.0);\n      float nh2 = pow(dot(n,h),2.0);\n      return alpha2/(PI*pow(nh2*(alpha2 - 1.0) + 1.0,2.0));\n    }\n\n    float ctg_GGX_SingleGeometryTerm(simple_pbr_params param,vec3 n,vec3 v){\n      float d = dot(n,v);\n      return 2.*d /(d + sqrt(d*d + param.alpha*param.alpha*(1. - d*d)));\n    }\n\n    vec3 ctf_Schlick(simple_pbr_params param,vec3 l,vec3 v,vec3 n,vec3 h){\n      vec3 f0 = param.f0;\n      float vh = dot(v,n);\n      return f0 + pow(1.0-vh,5.0) * (vec3(1.0) - f0);\n    }\n\n    vec3 cookTorranceBRDF(simple_pbr_params param,vec3 l,vec3 v,vec3 n){\n      vec3 h = normalize(l+v);\n      return  ctf_Schlick(param,l,v,n,h) * ctd_GGX_Distribution(param,l,v,n,h) * ctg_GGX_SingleGeometryTerm(param,n,l) * ctg_GGX_SingleGeometryTerm(param,n,v)/(4.0 * dot(l,n) * dot(v,n));\n    }\n\n    vec3 BRDF(simple_pbr_params params,vec3 li,vec3 lo,vec3 n){\n      return params.diffuseColor/PI + cookTorranceBRDF(params,li,lo,n);\n    }\n\n  #endif\n\n\n  void main(){\n    vec4 baseColor = baseColorFactor;\n    if(has_baseColorTexture){\n      baseColor *= texture2D(baseColorTexture,vUV);\n    }\n    vec3 emissive = emissiveFactor;\n    if(has_emissiveTexture){\n      emissive *= texture2D(emissiveTexture,vUV).rgb;\n    }\n    float metallic = metallicFactor;\n    if(has_metallicTexture){\n      metallic *= texture2D(metallicTexture,vUV).r;\n    }\n    float roughness = roughnessFactor;\n    if(has_roughnessTexture){\n      roughness *= texture2D(roughnessTexture,vUV).r;\n    }\n    if(has_metallicRoughnessTexture){\n      vec3 rm = texture2D(metallicRoughnessTexture,vUV).rgb;\n      metallic *= rm.b;\n      roughness *= rm.g;\n    }\n    vec3 normal = vNormal;\n    if(has_normalTexture){\n      vec3 pos_dx = dFdx(vPosition);\n      vec3 pos_dy = dFdy(vPosition);\n      vec3 tex_dx = dFdx(vec3(vUV, 0.0));\n      vec3 tex_dy = dFdy(vec3(vUV, 0.0));\n      vec3 t = (tex_dy.t * pos_dx - tex_dx.t * pos_dy) / (tex_dx.s * tex_dy.t - tex_dy.s * tex_dx.t);\n      t = normalize(t - vNormal * dot(vNormal, t));\n      vec3 b = normalize(cross(vNormal, t));\n      mat3 tbn = mat3(t, b, vNormal);\n      vec3 n = texture2D(normalTexture, vUV).rgb;\n      normal = normalize(tbn * (2.0 * n - 1.0));\n    }\n    vec3 dielectricSpecular = vec3(0.04);\n    vec3 diffuse = mix(baseColor.rgb * (1. - dielectricSpecular.r),vec3(0),metallic);\n    vec3 f0 = mix(dielectricSpecular,baseColor.rgb,metallic);\n    float alpha = roughness * roughness;\n    #ifdef GR_FORWARD_SHADING_ENABLED\n      pbr_params param = pbr_params(diffuse,f0,alpha,roughness);\n      gl_FragColor.rgb = shading(param,normal,vPosition);\n    #endif\n    #ifndef GR_FORWARD_SHADING_ENABLED\n      simple_pbr_params params = simple_pbr_params(diffuse,f0,alpha,roughness);\n      float lam = lambert(simpleLightDirection,normal);\n      vec3 brdfCoeff = BRDF(params,-simpleLightDirection,normalize(_cameraPosition - vPosition),normal);\n      gl_FragColor.rgb = vec3(lam) * simpleLightIntencity * simpleLightColor * brdfCoeff;\n    #endif\n    gl_FragColor.rgb += emissive;\n    gl_FragColor.rgb = pow(gl_FragColor.rgb,1.0/vec3(2.2));\n    if(has_occlusionTexture){\n      gl_FragColor.rgb *= texture2D(occlusionTexture,vUV).r;\n    }\n    gl_FragColor.a = baseColor.a;\n  }\n#endif\n}\n"

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = "@Pass{\n@BlendFunc(SRC_ALPHA,ONE_MINUS_SRC_ALPHA)\n@ExposeMacro(int,jointCount,JOINT_COUNT,0)\nFS_PREC(mediump,float)\n\nvarying vec3 vPosition;\nvarying vec3 vNormal;\nvarying vec2 vUV;\n\n#ifdef VS\n#if JOINT_COUNT > 0\n  @JOINTMATRIX\n  uniform mat4 boneMatrices[JOINT_COUNT];\n#endif\n  @NORMAL\n  attribute vec3 normal;\n  @POSITION\n  attribute vec3 position;\n  @TEXCOORD_0\n  attribute vec2 texCoord;\n#if JOINT_COUNT > 0\n  @JOINT\n  attribute vec4 joint;\n  @WEIGHT\n  attribute vec4 weight;\n#endif\n  uniform mat4 _matPVM;\n  uniform mat4 _matM;\n  void main(){\n    mat4 transform = _matM;\n    mat4 projectionTransform = _matPVM;\n    #if JOINT_COUNT > 0\n      mat4 skinMat = weight.x * boneMatrices[int(joint.x)] + weight.y * boneMatrices[int(joint.y)] + weight.z * boneMatrices[int(joint.z)] + weight.w * boneMatrices[int(joint.w)];\n      transform *= skinMat;\n      projectionTransform *= skinMat;\n    #endif\n    vUV = texCoord;\n    vNormal = normalize((transform * vec4(normal,0.0)).xyz);\n    vPosition = (transform * vec4(position,1.0)).xyz;\n    gl_Position = projectionTransform * vec4(position,1.0);\n  }\n\n\n#endif\n\n\n#ifdef FS\n\n  @{type:\"color\"}\n  uniform vec3 ambient;\n\n  @AMBIENT_COEFFICIENT\n  uniform float ambientCoefficient;\n\n  uniform sampler2D ambientTexture;\n\n  @HAS_TEXTURE{sampler:\"ambientTexture\"}\n  uniform bool ambientTextureUsed;\n\n  @{type:\"color\"}\n  uniform vec4 diffuse;\n\n  uniform sampler2D diffuseTexture;\n\n  @HAS_TEXTURE{sampler:\"diffuseTexture\"}\n  uniform bool diffuseTextureUsed;\n\n  @{type:\"color\"}\n  uniform vec3 specular;\n\n  uniform sampler2D specularTexture;\n\n  @HAS_TEXTURE{sampler:\"specularTexture\"}\n  uniform bool specularTextureUsed;\n\n  @{type:\"color\"}\n  uniform vec3 emission;\n\n  uniform sampler2D emissionTexture;\n\n  @HAS_TEXTURE{sampler:\"emissionTexture\"}\n  uniform bool emissionTextureUsed;\n\n  @{default:\"1.0\"}\n  uniform float shininess;\n\n  @{default:\"1.0\"}\n  uniform float transparency;\n\n  uniform vec3 _cameraPosition;\n\n  @{default:\"n(1,1,-1)\"}\n  uniform vec3 sunDir;\n\n  void main(){\n    vec4 dColor = vec4(0);\n    vec3 sColor = vec3(0);\n    vec3 eColor = vec3(0);\n    vec3 aColor = vec3(0);\n    vec3 hVec = normalize(normalize(_cameraPosition - vPosition) + sunDir);\n    if(ambientTextureUsed){\n      aColor = texture2D(ambientTexture,vUV).rgb;\n    }else{\n      aColor = ambient;\n    }\n    if(diffuseTextureUsed){\n      dColor = texture2D(diffuseTexture,vUV);\n    }else{\n      dColor = diffuse;\n    }\n    dColor.rgb = max(0.,dot(sunDir,vNormal)) * dColor.rgb;\n    if(specularTextureUsed){\n      sColor = texture2D(specularTexture,vUV).rgb;\n    }else{\n      sColor = specular;\n    }\n    if(emissionTextureUsed){\n      eColor = texture2D(emissionTexture,vUV).rgb;\n    }else{\n      eColor = emission;\n    }\n    sColor = sColor * pow(max(0.,dot(hVec,vNormal)),shininess);\n    gl_FragColor.rgb = dColor.rgb + sColor + aColor * ambientCoefficient;// + eColor;// + aColor;\n    gl_FragColor.a = dColor.a * transparency;\n  }\n#endif\n}\n"

/***/ })
/******/ ]);
});
//# sourceMappingURL=grimoire-gltf.js.map