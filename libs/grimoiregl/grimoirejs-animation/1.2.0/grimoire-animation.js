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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
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

var _AnimationParser = __webpack_require__(3);

var _AnimationParser2 = _interopRequireDefault(_AnimationParser);

var _TextFileResolver = __webpack_require__(12);

var _TextFileResolver2 = _interopRequireDefault(_TextFileResolver);

var _Animation = __webpack_require__(1);

var _Animation2 = _interopRequireDefault(_Animation);

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

var AnimationFactory = function () {
    function AnimationFactory() {
        _classCallCheck(this, AnimationFactory);
    }

    _createClass(AnimationFactory, null, [{
        key: "addAnimationType",
        value: function addAnimationType(typeName, animationGenerator) {
            this.animationGenerators[typeName] = animationGenerator;
            if (AnimationFactory.registerdHandlers[typeName]) {
                AnimationFactory.registerdHandlers[typeName].forEach(function (t) {
                    return t();
                });
            }
        }
    }, {
        key: "addAnimation",
        value: function addAnimation(typeName, source) {
            var recipe = _AnimationParser2.default.parse(source);
            AnimationFactory.addAnimationType(typeName, function () {
                return new _Animation2.default(recipe);
            });
        }
    }, {
        key: "addAnimationFromURL",
        value: function addAnimationFromURL(typeName, url) {
            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
                var source;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _TextFileResolver2.default.resolve(url);

                            case 2:
                                source = _context.sent;

                                AnimationFactory.addAnimation(typeName, source);

                            case 4:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
    }, {
        key: "_onRegister",
        value: function _onRegister(typeName, handler) {
            if (AnimationFactory.registerdHandlers[typeName]) {
                AnimationFactory.registerdHandlers[typeName].push(handler);
            } else {
                AnimationFactory.registerdHandlers[typeName] = [handler];
            }
        }
    }, {
        key: "instanciate",
        value: function instanciate(typeName) {
            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee2() {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                if (!AnimationFactory.animationGenerators[typeName]) {
                                    _context2.next = 4;
                                    break;
                                }

                                return _context2.abrupt("return", AnimationFactory.animationGenerators[typeName]());

                            case 4:
                                _context2.next = 6;
                                return this._waitForRegistered(typeName);

                            case 6:
                                return _context2.abrupt("return", _context2.sent);

                            case 7:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));
        }
    }, {
        key: "_waitForRegistered",
        value: function _waitForRegistered(typeName) {
            return new Promise(function (resolve) {
                AnimationFactory._onRegister(typeName, function () {
                    resolve(AnimationFactory.animationGenerators[typeName]());
                });
            });
        }
    }]);

    return AnimationFactory;
}();

exports.default = AnimationFactory;

AnimationFactory.animationGenerators = {};
AnimationFactory.registerdHandlers = {};
AnimationFactory.animationTypes = [];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AnimationClip = __webpack_require__(2);

var _AnimationClip2 = _interopRequireDefault(_AnimationClip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Animation = function () {
    function Animation(_clips) {
        _classCallCheck(this, Animation);

        this.clips = {};
        for (var key in _clips) {
            this.clips[key] = new _AnimationClip2.default(_clips[key]);
        }
    }

    _createClass(Animation, [{
        key: "getClip",
        value: function getClip(clipName) {
            if (this.clips[clipName] === void 0) {
                throw new Error("Animation type " + clipName + " is not exist.");
            } else {
                return this.clips[clipName];
            }
        }
    }]);

    return Animation;
}();

exports.default = Animation;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GomlNode = __webpack_require__(20);

var _GomlNode2 = _interopRequireDefault(_GomlNode);

var _TimelineCalculator = __webpack_require__(6);

var _TimelineCalculator2 = _interopRequireDefault(_TimelineCalculator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AnimationClip = function () {
    function AnimationClip(_element) {
        _classCallCheck(this, AnimationClip);

        this.elements = {};
        for (var key in _element) {
            this.elements[key] = _element[key];
        }
    }

    _createClass(AnimationClip, [{
        key: "step",
        value: function step(rootNode, time) {
            var _this = this;

            var _loop = function _loop(key) {
                var e = _this.elements[key];
                var attribute = rootNode.getComponent(e.component).getAttributeRaw(e.attribute);
                if (e.query === '@') {
                    rootNode.getComponent(e.component).setAttribute(e.attribute, _TimelineCalculator2.default.calc(time, e, attribute));
                } else {
                    rootNode.element.querySelectorAll(e.query).forEach(function (childElement) {
                        _GomlNode2.default.fromElement(childElement).getComponent(e.component).setAttribute(e.attribute, _TimelineCalculator2.default.calc(time, e, attribute));
                    });
                }
            };

            for (var key in this.elements) {
                _loop(key);
            }
        }
    }, {
        key: "Elements",
        get: function get() {
            return this.elements;
        }
    }, {
        key: "Length",
        get: function get() {
            var len = 0;
            for (var key in this.elements) {
                var t = this.elements[key].timeline[this.elements[key].timeline.length - 1];
                len = t > len ? t : len;
            }
            return len;
        }
    }]);

    return AnimationClip;
}();

exports.default = AnimationClip;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _HashCalculator = __webpack_require__(13);

var _HashCalculator2 = _interopRequireDefault(_HashCalculator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AnimationParser = function () {
    function AnimationParser() {
        _classCallCheck(this, AnimationParser);
    }

    _createClass(AnimationParser, null, [{
        key: "parse",
        value: function parse(source) {
            var sourceHash = _HashCalculator2.default.calcHash(source);
            if (AnimationParser._parsedCache[sourceHash] !== void 0) {
                return AnimationParser._parsedCache[sourceHash];
            } else {
                AnimationParser._parsedCache[sourceHash] = JSON.parse(source);
                return AnimationParser._parsedCache[sourceHash];
            }
        }
    }]);

    return AnimationParser;
}();

exports.default = AnimationParser;

AnimationParser._parsedCache = {};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AnimationFactory = __webpack_require__(0);

var _AnimationFactory2 = _interopRequireDefault(_AnimationFactory);

var _Component2 = __webpack_require__(8);

var _Component3 = _interopRequireDefault(_Component2);

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

var AnimationComponent = function (_Component) {
    _inherits(AnimationComponent, _Component);

    function AnimationComponent() {
        _classCallCheck(this, AnimationComponent);

        return _possibleConstructorReturn(this, (AnimationComponent.__proto__ || Object.getPrototypeOf(AnimationComponent)).apply(this, arguments));
    }

    _createClass(AnimationComponent, [{
        key: "$mount",
        value: function $mount() {
            this.__bindAttributes();
            if (this.animation && typeof this.animation === "string") {
                this._animationPromise = _AnimationFactory2.default.instanciate(this.animation);
                this._registerAttributes();
            } else {
                throw new Error("Animation type name must be sppecified and string");
            }
        }
    }, {
        key: "$update",
        value: function $update(args) {
            if (this._ready && this.auto) this._update(args.timer);
        }
    }, {
        key: "_registerAttributes",
        value: function _registerAttributes() {
            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return this._animationPromise;

                            case 2:
                                this._animation = _context.sent;

                                this._ready = true;

                            case 4:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
    }, {
        key: "_update",
        value: function _update(timer) {
            for (var key in this.clips) {
                var length = this._animation.getClip(this.clips[key]).Length;
                var t = this.loop ? timer.time % length : Math.max(timer.time, length);
                if (t > length) return;
                this._animation.getClip(this.clips[key]).step(this.node, t);
            }
        }
    }, {
        key: "getClip",
        value: function getClip(clipName) {
            return this._animation.getClip(clipName);
        }
    }, {
        key: "Animation",
        get: function get() {
            return this._animation;
        }
    }]);

    return AnimationComponent;
}(_Component3.default);

exports.default = AnimationComponent;

AnimationComponent.attributes = {
    animation: {
        converter: "String",
        default: null
    },
    clips: {
        converter: "StringArray",
        default: null
    },
    auto: {
        converter: "Boolean",
        default: true
    },
    loop: {
        converter: "Boolean",
        default: true
    }
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AnimationFactory = __webpack_require__(0);

var _AnimationFactory2 = _interopRequireDefault(_AnimationFactory);

var _Component2 = __webpack_require__(8);

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AnimationImporterComponent = function (_Component) {
    _inherits(AnimationImporterComponent, _Component);

    function AnimationImporterComponent() {
        _classCallCheck(this, AnimationImporterComponent);

        return _possibleConstructorReturn(this, (AnimationImporterComponent.__proto__ || Object.getPrototypeOf(AnimationImporterComponent)).apply(this, arguments));
    }

    _createClass(AnimationImporterComponent, [{
        key: "$awake",
        value: function $awake() {
            this.__bindAttributes();
            this.getAttributeRaw("typeName").watch(function (v) {
                console.warn("Changeing 'typeName' on AnimationImporter makes no sense. This change won't affect anything.");
            });
            this.getAttributeRaw("src").watch(function (v) {
                console.warn("Changeing 'src' on AnimationImporter makes no sense. This change won't affect anything.");
            });
            if (!this.typeName || !this.src) {
                throw new Error("type or src cannot be null in Animation importer");
            } else if (_AnimationFactory2.default.animationTypes.indexOf(this.typeName) >= 0) {
                throw new Error("A Animation type '" + this.typeName + "' is already loaded.");
            } else {
                _AnimationFactory2.default.animationTypes.push(this.typeName);
                _AnimationFactory2.default.addAnimationFromURL(this.typeName, this.src);
            }
        }
    }]);

    return AnimationImporterComponent;
}(_Component3.default);

exports.default = AnimationImporterComponent;

AnimationImporterComponent.attributes = {
    typeName: {
        default: null,
        converter: "String"
    },
    src: {
        default: null,
        converter: "String"
    }
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _IAnimationEffectName = __webpack_require__(10);

var _Vector = __webpack_require__(19);

var _Vector2 = _interopRequireDefault(_Vector);

var _Vector3 = __webpack_require__(18);

var _Vector4 = _interopRequireDefault(_Vector3);

var _Vector5 = __webpack_require__(17);

var _Vector6 = _interopRequireDefault(_Vector5);

var _Color = __webpack_require__(14);

var _Color2 = _interopRequireDefault(_Color);

var _Color3 = __webpack_require__(15);

var _Color4 = _interopRequireDefault(_Color3);

var _Quaternion = __webpack_require__(16);

var _Quaternion2 = _interopRequireDefault(_Quaternion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TimelineCalculator = function () {
    function TimelineCalculator() {
        _classCallCheck(this, TimelineCalculator);
    }

    _createClass(TimelineCalculator, null, [{
        key: "calc",
        value: function calc(time, element, attribute) {
            var timelinePosition = this._decideTimelinePosition(time, element.timeline);
            if (element.values.length - 1 === timelinePosition) {
                return element.values[timelinePosition];
            }
            if (element.defaultEffect !== void 0) {
                var t = Math.max(0, Math.min(1, (time - element.timeline[timelinePosition]) / (element.timeline[timelinePosition + 1] - element.timeline[timelinePosition])));
                var v1 = attribute.converter.convert(element.values[timelinePosition], attribute);
                var v2 = attribute.converter.convert(element.values[timelinePosition + 1], attribute);
                if (element.defaultEffect === _IAnimationEffectName.EffectName.LINEAR) {
                    switch (attribute.converter.name.name) {
                        case "Number" || "Angle2D":
                            return v1 + (v2 - v1) * t;
                        case "Vector2":
                            return _Vector6.default.lerp(v1, v2, t);
                        case "Vector3":
                            return _Vector4.default.lerp(v1, v2, t);
                        case "Vector4":
                            return _Vector2.default.lerp(v1, v2, t);
                        case "Rotation3":
                            return _Quaternion2.default.slerp(v1, v2, t);
                        case "Color3":
                            var v3 = _Vector4.default.lerp(v1.toVector(), v2.toVector(), t);
                            return new _Color2.default(v3.X, v3.Y, v3.Z);
                        case "Color4":
                            var v4 = _Vector2.default.lerp(v1.toVector(), v2.toVector(), t);
                            return new _Color4.default(v4.X, v4.Y, v4.Z, v4.W);
                        default:
                            throw new Error('Converter ' + attribute.converter.name + ' is not supported.');
                    }
                } else if (element.defaultEffect === _IAnimationEffectName.EffectName.DESCRETE) {
                    return element.values[timelinePosition];
                }
            }
        }
    }, {
        key: "_decideTimelinePosition",
        value: function _decideTimelinePosition(time, timeline) {
            var left = 0;
            var right = timeline.length - 1;
            var mid = void 0;
            if (time < timeline[left]) {
                return left;
            } else if (time > timeline[right]) {
                return right;
            }
            while (right - left > 1) {
                mid = Math.floor((left + right) / 2);
                if (timeline[mid] === time) {
                    return mid;
                } else if (timeline[mid] < time) {
                    left = mid;
                } else if (time < timeline[mid]) {
                    right = mid;
                }
            }
            return left;
        }
    }]);

    return TimelineCalculator;
}();

exports.default = TimelineCalculator;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.Node.Component;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _grimoirejs = __webpack_require__(7);

var _grimoirejs2 = _interopRequireDefault(_grimoirejs);

var _AnimationImporterComponent = __webpack_require__(5);

var _AnimationImporterComponent2 = _interopRequireDefault(_AnimationImporterComponent);

var _AnimationComponent = __webpack_require__(4);

var _AnimationComponent2 = _interopRequireDefault(_AnimationComponent);

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

// function animate(attributeName: string, value: number[], time: number) {
//   if (this instanceof NodeInterface) {
//     (this as NodeInterface).forEach(n => (n as any).animate(attributeName, value, time))
//   } else {
//     const animation = (this as GomlNode).addComponent("Animation", { animation: 'dynamic', clip: 'dynamic' }) as AnimationComponent;
//     let timelines: {
//       "times": number[],
//       "values": number[]
//     }[] = [];
//     for (let i = 0; i < this.getAttributeRaw(attributeName)._value.length; i++) {
//       timelines[i] = {
//         "times": [0, time],
//         "values": [this.getAttributeRaw(attributeName)._value[i], value[i]]
//       }
//     }
//
//     const animationRecipe = {
//       'dynamic': [
//         {
//           "query": "@",
//           "component": this.getAttributeRaw('position').component.name.name,
//           "attribute": attributeName,
//           "timelines": timelines
//         }
//       ]
//     }
//     animation.Animation = new Animation(animationRecipe);
//   }
// }
exports.default = function () {
    _grimoirejs2.default.register(function () {
        return __awaiter(undefined, void 0, void 0, regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _grimoirejs2.default.registerNode("import-animation", ["AnimationImporter"]);
                            _grimoirejs2.default.registerComponent("Animation", _AnimationComponent2.default);
                            _grimoirejs2.default.registerComponent("AnimationImporter", _AnimationImporterComponent2.default);
                            // gr.prototype.constructor.Interface.NodeInterface.prototype.animate = animate;
                            // (GomlNode.prototype as any).animate = animate;

                        case 3:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));
    });
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var EffectName = exports.EffectName = undefined;
(function (EffectName) {
    EffectName.LINEAR = "LINEAR";
    EffectName.DESCRETE = "DESCRETE";
    EffectName.BEZIER = "BEZIER";
})(EffectName || (exports.EffectName = EffectName = {}));
exports.default = EffectName;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Animation = __webpack_require__(1);

var _Animation2 = _interopRequireDefault(_Animation);

var _AnimationClip = __webpack_require__(2);

var _AnimationClip2 = _interopRequireDefault(_AnimationClip);

var _AnimationFactory = __webpack_require__(0);

var _AnimationFactory2 = _interopRequireDefault(_AnimationFactory);

var _AnimationParser = __webpack_require__(3);

var _AnimationParser2 = _interopRequireDefault(_AnimationParser);

var _AnimationComponent = __webpack_require__(4);

var _AnimationComponent2 = _interopRequireDefault(_AnimationComponent);

var _AnimationImporterComponent = __webpack_require__(5);

var _AnimationImporterComponent2 = _interopRequireDefault(_AnimationImporterComponent);

var _TimelineCalculator = __webpack_require__(6);

var _TimelineCalculator2 = _interopRequireDefault(_TimelineCalculator);

var _main = __webpack_require__(9);

var _main2 = _interopRequireDefault(_main);

var _grimoirejs = __webpack_require__(7);

var _grimoirejs2 = _interopRequireDefault(_grimoirejs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __VERSION__ = "1.2.0";
var __NAME__ = "grimoirejs-animation";

var __EXPOSE__ = {
    "Animation": {
        "Animation": _Animation2.default,
        "AnimationClip": _AnimationClip2.default,
        "AnimationFactory": _AnimationFactory2.default,
        "AnimationParser": _AnimationParser2.default
    },
    "Components": {
        "AnimationComponent": _AnimationComponent2.default,
        "AnimationImporterComponent": _AnimationImporterComponent2.default
    },
    "Util": {
        "TimelineCalculator": _TimelineCalculator2.default
    }
};

_grimoirejs2.default.notifyRegisteringPlugin(__NAME__);
var __BASE__ = (0, _main2.default)();
Object.assign(__EXPOSE__, {
    __VERSION__: __VERSION__,
    __NAME__: __NAME__
});
Object.assign(__BASE__ || {}, __EXPOSE__);
window["GrimoireJS"].lib.animation = __EXPOSE__;
exports.default = __BASE__;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.fundamental.Asset.TextFileResolver;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.fundamental.Util.HashCalculator;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.math.Color3;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.math.Color4;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.math.Quaternion;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.math.Vector2;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.math.Vector3;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.math.Vector4;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.Node.GomlNode;

/***/ })
/******/ ]);
});
//# sourceMappingURL=grimoire-animation.js.map