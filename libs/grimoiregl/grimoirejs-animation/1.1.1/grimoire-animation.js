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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
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

var _AnimationClip = __webpack_require__(2);

var _AnimationClip2 = _interopRequireDefault(_AnimationClip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Animation = function () {
    function Animation(animationRecipe) {
        _classCallCheck(this, Animation);

        this.animationRecipe = animationRecipe;
        this.clips = new Map();
        for (var clipName in animationRecipe) {
            this.clips.set(clipName, new _AnimationClip2.default(animationRecipe[clipName]));
        }
    }

    _createClass(Animation, [{
        key: "getClip",
        value: function getClip(clipName) {
            return this.clips.get(clipName);
        }
    }]);

    return Animation;
}();

exports.default = Animation;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AnimationParser = __webpack_require__(3);

var _AnimationParser2 = _interopRequireDefault(_AnimationParser);

var _TextFileResolver = __webpack_require__(13);

var _TextFileResolver2 = _interopRequireDefault(_TextFileResolver);

var _Animation = __webpack_require__(0);

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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GomlNode = __webpack_require__(9);

var _GomlNode2 = _interopRequireDefault(_GomlNode);

var _TimelineCalculator = __webpack_require__(6);

var _TimelineCalculator2 = _interopRequireDefault(_TimelineCalculator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AnimationClip = function () {
    function AnimationClip(_clip) {
        _classCallCheck(this, AnimationClip);

        this._clip = _clip;
        this._animationClipElements = new Map();
        for (var i = 0; i < _clip.length; i++) {
            this._animationClipElements.set(_clip[i].query, _clip[i]);
        }
    }

    _createClass(AnimationClip, [{
        key: "step",
        value: function step(node, time) {
            for (var elementIndex = 0; elementIndex < this._clip.length; elementIndex++) {
                var clipRecipe = this._clip[elementIndex];
                var query = clipRecipe.query;
                var attribute = clipRecipe.attribute;
                var component = clipRecipe.component;
                var timelines = clipRecipe.timelines;
                var lead = query.substr(0, 1);
                if (lead === "@") {
                    var result = _TimelineCalculator2.default.calc(time, timelines);
                    node.setAttribute(attribute, result);
                } else {
                    var _nodes = node.element.querySelectorAll(query);
                    for (var i = 0; i < _nodes.length; i++) {
                        var gomlNode = _GomlNode2.default.fromElement(_nodes.item(i));
                        var _result = _TimelineCalculator2.default.calc(time, timelines);
                        gomlNode.setAttribute(attribute, _result);
                    }
                }
            }
        }
    }, {
        key: "getElement",
        value: function getElement(query) {
            return this.Elements.get(query);
        }
    }, {
        key: "rootElement",
        value: function rootElement() {
            return this.getElement('@');
        }
    }, {
        key: "getLength",
        value: function getLength() {
            var length = 0;
            for (var elementIndex = 0; elementIndex < this._clip.length; elementIndex++) {
                var timelines = this._clip[elementIndex].timelines;
                for (var i = 0; i < timelines.length; i++) {
                    var times = timelines[i].times;
                    length = length <= times[times.length - 1] ? times[times.length - 1] : length;
                }
            }
            return length;
        }
    }, {
        key: "Elements",
        get: function get() {
            return this._animationClipElements;
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

var _HashCalculator = __webpack_require__(14);

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

var _AnimationFactory = __webpack_require__(1);

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
            this._initTime = this.time;
            this._Time = this.node.getComponentInAncestor("Time");
            if (this.animation === "dynamic") {
                this._ready = true;
            } else if (this.animation && typeof this.animation === "string") {
                this._animationPromise = _AnimationFactory2.default.instanciate(this.animation);
                this._registerAttributes();
            } else {
                throw new Error("Animation type name must be sppecified and string");
            }
        }
    }, {
        key: "$update",
        value: function $update() {
            //TODO use LoopManagerComponent
            if (this._ready && this.auto) this._update();
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
        key: "step",
        value: function step(time) {
            this._animation.getClip(this.clip).step(this.node, time);
        }
    }, {
        key: "_update",
        value: function _update() {
            var length = this._animation.getClip(this.clip).getLength();
            this.time = this._Time.getAttribute("time") + this._initTime;
            this.time = this.loop ? this.time % length : this.time;
            this._animation.getClip(this.clip).step(this.node, this.time);
        }
    }, {
        key: "getClip",
        value: function getClip(clipName) {
            return this.Animation.getClip(clipName);
        }
    }, {
        key: "Animation",
        get: function get() {
            return this._animation;
        },
        set: function set(animation) {
            this._animation = animation;
        }
    }]);

    return AnimationComponent;
}(_Component3.default);

exports.default = AnimationComponent;

AnimationComponent.attributes = {
    animation: {
        converter: "String",
        default: null
    }, clip: {
        converter: "String",
        default: null
    },
    auto: {
        converter: "Boolean",
        default: true
    },
    loop: {
        converter: "Boolean",
        default: true
    },
    time: {
        converter: "Number",
        default: 0
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

var _AnimationFactory = __webpack_require__(1);

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

var _IAnimationEffectName = __webpack_require__(11);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TimelineCalculator = function () {
    function TimelineCalculator() {
        _classCallCheck(this, TimelineCalculator);
    }

    _createClass(TimelineCalculator, null, [{
        key: "calc",
        value: function calc(time, timelines) {
            var result = [];
            for (var i = 0; i < timelines.length; i++) {
                var r = this._calc(time, timelines[i]);
                if (r === null) {
                    console.warn("Animation effect type is not defined");
                } else {
                    result.push(r);
                }
            }
            return result;
        }
    }, {
        key: "_decideTimelinePosition",
        value: function _decideTimelinePosition(time, times) {
            var left = 0;
            var right = times.length - 1;
            var mid = void 0;
            if (time < times[left]) {
                return left;
            } else if (time > times[right]) {
                return right;
            }
            while (right - left > 1) {
                mid = Math.floor((left + right) / 2);
                if (times[mid] === time) {
                    return mid;
                } else if (times[mid] < time) {
                    left = mid;
                } else if (time < times[mid]) {
                    right = mid;
                }
            }
            return left;
        }
    }, {
        key: "_calc",
        value: function _calc(time, timeline) {
            var timelinePosition = this._decideTimelinePosition(time, timeline.times);
            if (timeline.values.length - 1 === timelinePosition) {
                return timeline.values[timelinePosition];
            }
            //TODO effectがLINEARでない場合の処理
            if (timeline.effects === void 0) {
                timeline.effects = [];
                for (var i = 0; i < timeline.times.length - 1; i++) {
                    timeline.effects.push({ type: _IAnimationEffectName.EffectName.LINEAR });
                }
            }
            if (timeline.effects[timelinePosition].type === _IAnimationEffectName.EffectName.LINEAR) {
                var y1 = timeline.values[timelinePosition];
                var y2 = timeline.values[timelinePosition + 1];
                var x1 = timeline.times[timelinePosition];
                var x2 = timeline.times[timelinePosition + 1];
                return (y2 - y1) * (time - x1) / (x2 - x1) + y1;
            } else if (timeline.effects[timelinePosition].type === _IAnimationEffectName.EffectName.LINEAR) {
                return timeline.values[timelinePosition];
            } else if (timeline.effects[timelinePosition].type === _IAnimationEffectName.EffectName.BEZIER) {
                //TODO BEZIER
            }
            return null;
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
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.Node.GomlNode;

/***/ }),
/* 10 */
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

var _NodeInterface = __webpack_require__(15);

var _NodeInterface2 = _interopRequireDefault(_NodeInterface);

var _GomlNode = __webpack_require__(9);

var _GomlNode2 = _interopRequireDefault(_GomlNode);

var _Animation = __webpack_require__(0);

var _Animation2 = _interopRequireDefault(_Animation);

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

function animate(attributeName, value, time) {
    if (this instanceof _NodeInterface2.default) {
        this.forEach(function (n) {
            return n.animate(attributeName, value, time);
        });
    } else {
        var animation = this.addComponent("Animation", { animation: 'dynamic', clip: 'dynamic' });
        var timelines = [];
        for (var i = 0; i < this.getAttributeRaw(attributeName)._value.length; i++) {
            timelines[i] = {
                "times": [0, time],
                "values": [this.getAttributeRaw(attributeName)._value[i], value[i]]
            };
        }
        console.log(timelines);
        var animationRecipe = {
            'dynamic': [{
                "query": "@",
                "component": this.getAttributeRaw('position').component.name.name,
                "attribute": attributeName,
                "timelines": timelines
            }]
        };
        animation.Animation = new _Animation2.default(animationRecipe);
    }
}

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
                            _grimoirejs2.default.prototype.constructor.Interface.NodeInterface.prototype.animate = animate;
                            _GomlNode2.default.prototype.animate = animate;

                        case 5:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));
    });
};

/***/ }),
/* 11 */
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _grimoirejs = __webpack_require__(7);

var _grimoirejs2 = _interopRequireDefault(_grimoirejs);

var _Animation = __webpack_require__(0);

var _Animation2 = _interopRequireDefault(_Animation);

var _AnimationClip = __webpack_require__(2);

var _AnimationClip2 = _interopRequireDefault(_AnimationClip);

var _AnimationFactory = __webpack_require__(1);

var _AnimationFactory2 = _interopRequireDefault(_AnimationFactory);

var _AnimationParser = __webpack_require__(3);

var _AnimationParser2 = _interopRequireDefault(_AnimationParser);

var _AnimationComponent = __webpack_require__(4);

var _AnimationComponent2 = _interopRequireDefault(_AnimationComponent);

var _AnimationImporterComponent = __webpack_require__(5);

var _AnimationImporterComponent2 = _interopRequireDefault(_AnimationImporterComponent);

var _TimelineCalculator = __webpack_require__(6);

var _TimelineCalculator2 = _interopRequireDefault(_TimelineCalculator);

var _main = __webpack_require__(10);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __VERSION__ = "1.1.1";
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
/* 13 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.fundamental.Asset.TextFileResolver;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.fundamental.Util.HashCalculator;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.Interface.NodeInterface;

/***/ })
/******/ ]);
});
//# sourceMappingURL=grimoire-animation.js.map