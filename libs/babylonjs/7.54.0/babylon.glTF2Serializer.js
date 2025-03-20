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
/* harmony import */ var babylonjs_Meshes_mesh__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs/Maths/math.vector */ "babylonjs/Misc/tools");
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
     * @param bufferManager buffer manager
     * @returns nullable promise, resolves with the node
     */
    EXT_mesh_gpu_instancing.prototype.postExportNodeAsync = function (context, node, babylonNode, nodeMap, convertToRightHanded, bufferManager) {
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
                        extension.attributes["TRANSLATION"] = _this._buildAccessor(translationBuffer, "VEC3" /* AccessorType.VEC3 */, babylonNode.thinInstanceCount, bufferManager);
                    }
                    // do we need to write ROTATION ?
                    if (hasAnyInstanceWorldRotation) {
                        // we decided to stay on FLOAT for now see https://github.com/BabylonJS/Babylon.js/pull/12495
                        extension.attributes["ROTATION"] = _this._buildAccessor(rotationBuffer, "VEC4" /* AccessorType.VEC4 */, babylonNode.thinInstanceCount, bufferManager);
                    }
                    // do we need to write SCALE ?
                    if (hasAnyInstanceWorldScale) {
                        extension.attributes["SCALE"] = _this._buildAccessor(scaleBuffer, "VEC3" /* AccessorType.VEC3 */, babylonNode.thinInstanceCount, bufferManager);
                    }
                    /* eslint-enable @typescript-eslint/naming-convention*/
                    node.extensions = node.extensions || {};
                    node.extensions[NAME] = extension;
                }
            }
            resolve(node);
        });
    };
    EXT_mesh_gpu_instancing.prototype._buildAccessor = function (buffer, type, count, bufferManager) {
        // build the buffer view
        var bv = bufferManager.createBufferView(buffer);
        // finally build the accessor
        var accessor = bufferManager.createAccessor(bv, type, 5126 /* AccessorComponentType.FLOAT */, count);
        this._exporter._accessors.push(accessor);
        return this._exporter._accessors.length - 1;
    };
    return EXT_mesh_gpu_instancing;
}());

// eslint-disable-next-line @typescript-eslint/no-unused-vars
_glTFExporter__WEBPACK_IMPORTED_MODULE_0__.GLTFExporter.RegisterExtension(NAME, function (exporter) { return new EXT_mesh_gpu_instancing(exporter); });


/***/ }),

/***/ "../../../dev/serializers/src/glTF/2.0/Extensions/KHR_draco_mesh_compression.ts":
/*!**************************************************************************************!*\
  !*** ../../../dev/serializers/src/glTF/2.0/Extensions/KHR_draco_mesh_compression.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KHR_draco_mesh_compression: () => (/* binding */ KHR_draco_mesh_compression)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _glTFExporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../glTFExporter */ "../../../dev/serializers/src/glTF/2.0/glTFExporter.ts");
/* harmony import */ var babylonjs_Meshes_Compression_dracoEncoder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs/Misc/logger */ "babylonjs/Misc/tools");
/* harmony import */ var babylonjs_Meshes_Compression_dracoEncoder__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Meshes_Compression_dracoEncoder__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _glTFUtilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../glTFUtilities */ "../../../dev/serializers/src/glTF/2.0/glTFUtilities.ts");






var NAME = "KHR_draco_mesh_compression";
function getDracoAttributeName(glTFName) {
    if (glTFName === "POSITION") {
        return "POSITION";
    }
    else if (glTFName === "NORMAL") {
        return "NORMAL";
    }
    else if (glTFName.startsWith("COLOR")) {
        return "COLOR";
    }
    else if (glTFName.startsWith("TEXCOORD")) {
        return "TEX_COORD";
    }
    return "GENERIC";
}
/**
 * [Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_draco_mesh_compression/README.md)
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
var KHR_draco_mesh_compression = /** @class */ (function () {
    /** @internal */
    function KHR_draco_mesh_compression(exporter) {
        /** Name of this extension */
        this.name = NAME;
        /** KHR_draco_mesh_compression is required, as uncompressed fallback data is not yet implemented. */
        this.required = true;
        /** BufferViews used for Draco data, which may be eligible for removal after Draco encoding */
        this._bufferViewsUsed = new Set();
        /** Accessors that were replaced with Draco data, which may be eligible for removal after Draco encoding */
        this._accessorsUsed = new Set();
        /** Promise pool for Draco encoding work */
        this._encodePromises = [];
        this._wasUsed = false;
        this.enabled = exporter.options.meshCompressionMethod === "Draco" && babylonjs_Meshes_Compression_dracoEncoder__WEBPACK_IMPORTED_MODULE_1__.DracoEncoder.DefaultAvailable;
    }
    Object.defineProperty(KHR_draco_mesh_compression.prototype, "wasUsed", {
        /** @internal */
        get: function () {
            return this._wasUsed;
        },
        enumerable: false,
        configurable: true
    });
    /** @internal */
    KHR_draco_mesh_compression.prototype.dispose = function () { };
    /** @internal */
    KHR_draco_mesh_compression.prototype.postExportMeshPrimitive = function (primitive, bufferManager, accessors) {
        var _this = this;
        if (!this.enabled) {
            return;
        }
        if (primitive.mode !== 4 /* MeshPrimitiveMode.TRIANGLES */ && primitive.mode !== 5 /* MeshPrimitiveMode.TRIANGLE_STRIP */) {
            babylonjs_Meshes_Compression_dracoEncoder__WEBPACK_IMPORTED_MODULE_1__.Logger.Warn("Cannot compress primitive with mode " + primitive.mode + ".");
            return;
        }
        // Collect bufferViews and accessors used by this primitive
        var primitiveBufferViews = [];
        var primitiveAccessors = [];
        // Prepare indices for Draco encoding
        var indices = null;
        if (primitive.indices !== undefined) {
            var accessor = accessors[primitive.indices];
            var bufferView = bufferManager.getBufferView(accessor);
            // Per exportIndices, indices must be either Uint16Array or Uint32Array
            indices = bufferManager.getData(bufferView).slice();
            primitiveBufferViews.push(bufferView);
            primitiveAccessors.push(accessor);
        }
        // Prepare attributes for Draco encoding
        var attributes = [];
        for (var _i = 0, _a = Object.entries(primitive.attributes); _i < _a.length; _i++) {
            var _b = _a[_i], name_1 = _b[0], accessorIndex = _b[1];
            var accessor = accessors[accessorIndex];
            var bufferView = bufferManager.getBufferView(accessor);
            var size = (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_2__.GetAccessorElementCount)(accessor.type);
            var data = (0,babylonjs_Meshes_Compression_dracoEncoder__WEBPACK_IMPORTED_MODULE_1__.GetTypedArrayData)(bufferManager.getData(bufferView), size, accessor.componentType, accessor.byteOffset || 0, bufferView.byteStride || (0,babylonjs_Meshes_Compression_dracoEncoder__WEBPACK_IMPORTED_MODULE_1__.GetTypeByteLength)(accessor.componentType) * size, accessor.normalized || false, accessor.count, true);
            attributes.push({ kind: name_1, dracoName: getDracoAttributeName(name_1), size: (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_2__.GetAccessorElementCount)(accessor.type), data: data });
            primitiveBufferViews.push(bufferView);
            primitiveAccessors.push(accessor);
        }
        // Use sequential encoding to preserve vertex order for cases like morph targets
        var options = {
            method: primitive.targets ? "MESH_SEQUENTIAL_ENCODING" : "MESH_EDGEBREAKER_ENCODING",
        };
        var promise = babylonjs_Meshes_Compression_dracoEncoder__WEBPACK_IMPORTED_MODULE_1__.DracoEncoder.Default._encodeAsync(attributes, indices, options)
            .then(function (encodedData) {
            if (!encodedData) {
                babylonjs_Meshes_Compression_dracoEncoder__WEBPACK_IMPORTED_MODULE_1__.Logger.Error("Draco encoding failed for primitive.");
                return;
            }
            var dracoInfo = {
                bufferView: -1, // bufferView will be set to a real index later, when we write the binary and decide bufferView ordering
                attributes: encodedData.attributeIDs,
            };
            var bufferView = bufferManager.createBufferView(encodedData.data);
            bufferManager.setBufferView(dracoInfo, bufferView);
            for (var _i = 0, primitiveBufferViews_1 = primitiveBufferViews; _i < primitiveBufferViews_1.length; _i++) {
                var bufferView_1 = primitiveBufferViews_1[_i];
                _this._bufferViewsUsed.add(bufferView_1);
            }
            for (var _a = 0, primitiveAccessors_1 = primitiveAccessors; _a < primitiveAccessors_1.length; _a++) {
                var accessor = primitiveAccessors_1[_a];
                _this._accessorsUsed.add(accessor);
            }
            primitive.extensions || (primitive.extensions = {});
            primitive.extensions[NAME] = dracoInfo;
        })
            .catch(function (error) {
            babylonjs_Meshes_Compression_dracoEncoder__WEBPACK_IMPORTED_MODULE_1__.Logger.Error("Draco encoding failed for primitive: " + error);
        });
        this._encodePromises.push(promise);
        this._wasUsed = true;
    };
    /** @internal */
    KHR_draco_mesh_compression.prototype.preGenerateBinaryAsync = function (bufferManager) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function () {
            var _this = this;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.enabled) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, Promise.all(this._encodePromises)];
                    case 1:
                        _a.sent();
                        // Cull obsolete bufferViews that were replaced with Draco data
                        this._bufferViewsUsed.forEach(function (bufferView) {
                            var references = bufferManager.getPropertiesWithBufferView(bufferView);
                            var onlyUsedByEncodedPrimitives = references.every(function (object) {
                                return _this._accessorsUsed.has(object); // has() can handle any object, but TS doesn't know that
                            });
                            if (onlyUsedByEncodedPrimitives) {
                                bufferManager.removeBufferView(bufferView);
                            }
                        });
                        this._bufferViewsUsed.clear();
                        this._accessorsUsed.clear();
                        return [2 /*return*/];
                }
            });
        });
    };
    return KHR_draco_mesh_compression;
}());

_glTFExporter__WEBPACK_IMPORTED_MODULE_0__.GLTFExporter.RegisterExtension(NAME, function (exporter) { return new KHR_draco_mesh_compression(exporter); });


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
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs/Misc/logger */ "babylonjs/Misc/tools");
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__);



var NAME = "KHR_materials_diffuse_transmission";
/**
 * Get the appropriate translucency intensity texture for the material.
 * @internal
 */
function getTranslucencyIntensityTexture(context, babylonMaterial) {
    var subs = babylonMaterial.subSurface;
    var texture = null;
    // Check if translucency intensity texture is available or can be derived from thickness texture
    if (subs.translucencyIntensityTexture) {
        texture = subs.translucencyIntensityTexture;
    }
    else if (subs.thicknessTexture && subs.useMaskFromThicknessTexture) {
        texture = subs.thicknessTexture;
    }
    if (texture && !subs.useGltfStyleTextures) {
        babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__.Logger.Warn("".concat(context, ": Translucency intensity texture is not supported when useGltfStyleTextures = false. Ignoring for: ").concat(babylonMaterial.name), 1);
        return null;
    }
    return texture;
}
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
        if (babylonMaterial instanceof babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__.PBRMaterial && this._isExtensionEnabled(babylonMaterial)) {
            var translucencyIntensityTexture = getTranslucencyIntensityTexture(context, babylonMaterial);
            if (translucencyIntensityTexture) {
                additionalTextures.push(translucencyIntensityTexture);
            }
            if (babylonMaterial.subSurface.translucencyColorTexture) {
                additionalTextures.push(babylonMaterial.subSurface.translucencyColorTexture);
            }
            return additionalTextures;
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
                var translucencyIntensityTexture = getTranslucencyIntensityTexture(context, babylonMaterial);
                var diffuseTransmissionFactor = subs.translucencyIntensity == 0 ? undefined : subs.translucencyIntensity;
                var diffuseTransmissionTexture = (_a = _this._exporter._materialExporter.getTextureInfo(translucencyIntensityTexture)) !== null && _a !== void 0 ? _a : undefined;
                var diffuseTransmissionColorFactor = !subs.translucencyColor || subs.translucencyColor.equalsFloats(1.0, 1.0, 1.0) ? undefined : subs.translucencyColor.asArray();
                var diffuseTransmissionColorTexture = (_b = _this._exporter._materialExporter.getTextureInfo(subs.translucencyColorTexture)) !== null && _b !== void 0 ? _b : undefined;
                var diffuseTransmissionInfo = {
                    diffuseTransmissionFactor: diffuseTransmissionFactor,
                    diffuseTransmissionTexture: diffuseTransmissionTexture,
                    diffuseTransmissionColorFactor: diffuseTransmissionColorFactor,
                    diffuseTransmissionColorTexture: diffuseTransmissionColorTexture,
                };
                if (diffuseTransmissionTexture || diffuseTransmissionColorTexture) {
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
    var uOffset = babylonTexture.uOffset, vOffset = babylonTexture.vOffset, uRotationCenter = babylonTexture.uRotationCenter, vRotationCenter = babylonTexture.vRotationCenter, uScale = babylonTexture.uScale, vScale = babylonTexture.vScale, wAng = babylonTexture.wAng;
    var cosAngle = Math.cos(wAng);
    var sinAngle = Math.sin(wAng);
    var scaledURotationCenter = uRotationCenter * uScale;
    var scaledVRotationCenter = vRotationCenter * vScale;
    var deltaU = scaledURotationCenter * (1 - cosAngle) + scaledVRotationCenter * sinAngle;
    var deltaV = scaledVRotationCenter * (1 - cosAngle) - scaledURotationCenter * sinAngle;
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
        var scene = babylonTexture.getScene();
        if (!scene) {
            babylonjs_Misc_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.Warn("".concat(context, ": \"scene\" is not defined for Babylon texture ").concat(babylonTexture.name, "!"));
        }
        /*
         * The KHR_texture_transform schema only supports w rotation around the origin.
         * See https://github.com/KhronosGroup/glTF/tree/main/extensions/2.0/Khronos/KHR_texture_transform#gltf-schema-updates.
         */
        if (babylonTexture.uAng !== 0 || babylonTexture.vAng !== 0) {
            babylonjs_Misc_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.Warn("".concat(context, ": Texture ").concat(babylonTexture.name, " with rotation in the u or v axis is not supported in glTF."));
            // Usually, we'd always early return here if the texture uses an unsupported combination of transform properties,
            // but we're making an exception here to maintain backwards compatibility.
            if (babylonTexture.uRotationCenter !== 0 || babylonTexture.vRotationCenter !== 0) {
                return;
            }
        }
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
            if (babylonTexture.uRotationCenter !== 0 || babylonTexture.vRotationCenter !== 0) {
                // See https://github.com/mrdoob/three.js/issues/15831 for more details.
                if (babylonTexture.homogeneousRotationInUVTransform && babylonTexture.uScale !== babylonTexture.vScale) {
                    babylonjs_Misc_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.Warn("".concat(context, ": Texture ").concat(babylonTexture.name, " with homogenousRotationInUVTransform, non-uniform scaling, and non-zero rotation cannot be exported with ").concat(NAME, "."));
                    return;
                }
                babylonjs_Misc_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.Warn("".concat(context, ": Texture ").concat(babylonTexture.name, " with non-origin rotation center will be exported using an adjusted offset with ").concat(NAME, "."));
                textureTransform.offset = AdjustOffsetForRotationCenter(babylonTexture);
            }
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
/* harmony export */   KHR_draco_mesh_compression: () => (/* reexport safe */ _KHR_draco_mesh_compression__WEBPACK_IMPORTED_MODULE_1__.KHR_draco_mesh_compression),
/* harmony export */   KHR_lights_punctual: () => (/* reexport safe */ _KHR_lights_punctual__WEBPACK_IMPORTED_MODULE_2__.KHR_lights_punctual),
/* harmony export */   KHR_materials_anisotropy: () => (/* reexport safe */ _KHR_materials_anisotropy__WEBPACK_IMPORTED_MODULE_3__.KHR_materials_anisotropy),
/* harmony export */   KHR_materials_clearcoat: () => (/* reexport safe */ _KHR_materials_clearcoat__WEBPACK_IMPORTED_MODULE_4__.KHR_materials_clearcoat),
/* harmony export */   KHR_materials_diffuse_transmission: () => (/* reexport safe */ _KHR_materials_diffuse_transmission__WEBPACK_IMPORTED_MODULE_5__.KHR_materials_diffuse_transmission),
/* harmony export */   KHR_materials_dispersion: () => (/* reexport safe */ _KHR_materials_dispersion__WEBPACK_IMPORTED_MODULE_6__.KHR_materials_dispersion),
/* harmony export */   KHR_materials_emissive_strength: () => (/* reexport safe */ _KHR_materials_emissive_strength__WEBPACK_IMPORTED_MODULE_7__.KHR_materials_emissive_strength),
/* harmony export */   KHR_materials_ior: () => (/* reexport safe */ _KHR_materials_ior__WEBPACK_IMPORTED_MODULE_8__.KHR_materials_ior),
/* harmony export */   KHR_materials_iridescence: () => (/* reexport safe */ _KHR_materials_iridescence__WEBPACK_IMPORTED_MODULE_9__.KHR_materials_iridescence),
/* harmony export */   KHR_materials_sheen: () => (/* reexport safe */ _KHR_materials_sheen__WEBPACK_IMPORTED_MODULE_10__.KHR_materials_sheen),
/* harmony export */   KHR_materials_specular: () => (/* reexport safe */ _KHR_materials_specular__WEBPACK_IMPORTED_MODULE_11__.KHR_materials_specular),
/* harmony export */   KHR_materials_transmission: () => (/* reexport safe */ _KHR_materials_transmission__WEBPACK_IMPORTED_MODULE_12__.KHR_materials_transmission),
/* harmony export */   KHR_materials_unlit: () => (/* reexport safe */ _KHR_materials_unlit__WEBPACK_IMPORTED_MODULE_13__.KHR_materials_unlit),
/* harmony export */   KHR_materials_volume: () => (/* reexport safe */ _KHR_materials_volume__WEBPACK_IMPORTED_MODULE_14__.KHR_materials_volume),
/* harmony export */   KHR_texture_transform: () => (/* reexport safe */ _KHR_texture_transform__WEBPACK_IMPORTED_MODULE_15__.KHR_texture_transform)
/* harmony export */ });
/* harmony import */ var _EXT_mesh_gpu_instancing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EXT_mesh_gpu_instancing */ "../../../dev/serializers/src/glTF/2.0/Extensions/EXT_mesh_gpu_instancing.ts");
/* harmony import */ var _KHR_draco_mesh_compression__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KHR_draco_mesh_compression */ "../../../dev/serializers/src/glTF/2.0/Extensions/KHR_draco_mesh_compression.ts");
/* harmony import */ var _KHR_lights_punctual__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./KHR_lights_punctual */ "../../../dev/serializers/src/glTF/2.0/Extensions/KHR_lights_punctual.ts");
/* harmony import */ var _KHR_materials_anisotropy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./KHR_materials_anisotropy */ "../../../dev/serializers/src/glTF/2.0/Extensions/KHR_materials_anisotropy.ts");
/* harmony import */ var _KHR_materials_clearcoat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./KHR_materials_clearcoat */ "../../../dev/serializers/src/glTF/2.0/Extensions/KHR_materials_clearcoat.ts");
/* harmony import */ var _KHR_materials_diffuse_transmission__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./KHR_materials_diffuse_transmission */ "../../../dev/serializers/src/glTF/2.0/Extensions/KHR_materials_diffuse_transmission.ts");
/* harmony import */ var _KHR_materials_dispersion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./KHR_materials_dispersion */ "../../../dev/serializers/src/glTF/2.0/Extensions/KHR_materials_dispersion.ts");
/* harmony import */ var _KHR_materials_emissive_strength__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./KHR_materials_emissive_strength */ "../../../dev/serializers/src/glTF/2.0/Extensions/KHR_materials_emissive_strength.ts");
/* harmony import */ var _KHR_materials_ior__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./KHR_materials_ior */ "../../../dev/serializers/src/glTF/2.0/Extensions/KHR_materials_ior.ts");
/* harmony import */ var _KHR_materials_iridescence__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./KHR_materials_iridescence */ "../../../dev/serializers/src/glTF/2.0/Extensions/KHR_materials_iridescence.ts");
/* harmony import */ var _KHR_materials_sheen__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./KHR_materials_sheen */ "../../../dev/serializers/src/glTF/2.0/Extensions/KHR_materials_sheen.ts");
/* harmony import */ var _KHR_materials_specular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./KHR_materials_specular */ "../../../dev/serializers/src/glTF/2.0/Extensions/KHR_materials_specular.ts");
/* harmony import */ var _KHR_materials_transmission__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./KHR_materials_transmission */ "../../../dev/serializers/src/glTF/2.0/Extensions/KHR_materials_transmission.ts");
/* harmony import */ var _KHR_materials_unlit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./KHR_materials_unlit */ "../../../dev/serializers/src/glTF/2.0/Extensions/KHR_materials_unlit.ts");
/* harmony import */ var _KHR_materials_volume__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./KHR_materials_volume */ "../../../dev/serializers/src/glTF/2.0/Extensions/KHR_materials_volume.ts");
/* harmony import */ var _KHR_texture_transform__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./KHR_texture_transform */ "../../../dev/serializers/src/glTF/2.0/Extensions/KHR_texture_transform.ts");


















/***/ }),

/***/ "../../../dev/serializers/src/glTF/2.0/bufferManager.ts":
/*!**************************************************************!*\
  !*** ../../../dev/serializers/src/glTF/2.0/bufferManager.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BufferManager: () => (/* binding */ BufferManager)
/* harmony export */ });
/* harmony import */ var _dataWriter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataWriter */ "../../../dev/serializers/src/glTF/2.0/dataWriter.ts");

function getHighestByteAlignment(byteLength) {
    if (byteLength % 4 === 0)
        return 4;
    if (byteLength % 2 === 0)
        return 2;
    return 1;
}
/**
 * Utility class to centralize the management of binary data, bufferViews, and the objects that reference them.
 * @internal
 */
var BufferManager = /** @class */ (function () {
    function BufferManager() {
        /**
         * Maps a bufferView to its data
         */
        this._bufferViewToData = new Map();
        /**
         * Maps a bufferView to glTF objects that reference it via a "bufferView" property (e.g. accessors, images)
         */
        this._bufferViewToProperties = new Map();
        /**
         * Maps an accessor to its bufferView
         */
        this._accessorToBufferView = new Map();
    }
    /**
     * Generates a binary buffer from the stored bufferViews. Also populates the bufferViews list.
     * @param bufferViews The list of bufferViews to be populated while writing the binary
     * @returns The binary buffer
     */
    BufferManager.prototype.generateBinary = function (bufferViews) {
        // Construct a DataWriter with the total byte length to prevent resizing
        var totalByteLength = 0;
        this._bufferViewToData.forEach(function (data) {
            totalByteLength += data.byteLength;
        });
        var dataWriter = new _dataWriter__WEBPACK_IMPORTED_MODULE_0__.DataWriter(totalByteLength);
        // Order the bufferViews in descending order of their alignment requirements
        var orderedBufferViews = Array.from(this._bufferViewToData.keys()).sort(function (a, b) { return getHighestByteAlignment(b.byteLength) - getHighestByteAlignment(a.byteLength); });
        // Fill in the bufferViews list and missing bufferView index references while writing the binary
        for (var _i = 0, orderedBufferViews_1 = orderedBufferViews; _i < orderedBufferViews_1.length; _i++) {
            var bufferView = orderedBufferViews_1[_i];
            bufferView.byteOffset = dataWriter.byteOffset;
            bufferViews.push(bufferView);
            var bufferViewIndex = bufferViews.length - 1;
            var properties = this.getPropertiesWithBufferView(bufferView);
            for (var _a = 0, properties_1 = properties; _a < properties_1.length; _a++) {
                var object = properties_1[_a];
                object.bufferView = bufferViewIndex;
            }
            dataWriter.writeTypedArray(this._bufferViewToData.get(bufferView));
            this._bufferViewToData.delete(bufferView); // Try to free up memory ASAP
        }
        return dataWriter.getOutputData();
    };
    /**
     * Creates a buffer view based on the supplied arguments
     * @param data a TypedArray to create the bufferView for
     * @param byteStride byte distance between consecutive elements
     * @returns bufferView for glTF
     */
    BufferManager.prototype.createBufferView = function (data, byteStride) {
        var bufferView = {
            buffer: 0,
            byteOffset: undefined, // byteOffset will be set later, when we write the binary and decide bufferView ordering
            byteLength: data.byteLength,
            byteStride: byteStride,
        };
        this._bufferViewToData.set(bufferView, data);
        return bufferView;
    };
    /**
     * Creates an accessor based on the supplied arguments and assigns it to the bufferView
     * @param bufferView The glTF bufferView referenced by this accessor
     * @param type The type of the accessor
     * @param componentType The datatype of components in the attribute
     * @param count The number of attributes referenced by this accessor
     * @param byteOffset The offset relative to the start of the bufferView in bytes
     * @param minMax Minimum and maximum value of each component in this attribute
     * @param normalized Specifies whether integer data values are normalized before usage
     * @returns accessor for glTF
     */
    BufferManager.prototype.createAccessor = function (bufferView, type, componentType, count, byteOffset, minMax, normalized) {
        this._verifyBufferView(bufferView);
        var accessor = {
            bufferView: undefined, // bufferView will be set to a real index later, once we write the binary and decide bufferView ordering
            componentType: componentType,
            count: count,
            type: type,
            min: minMax === null || minMax === void 0 ? void 0 : minMax.min,
            max: minMax === null || minMax === void 0 ? void 0 : minMax.max,
            normalized: normalized,
            byteOffset: byteOffset,
        };
        this.setBufferView(accessor, bufferView);
        this._accessorToBufferView.set(accessor, bufferView);
        return accessor;
    };
    /**
     * Assigns a bufferView to a glTF object that references it
     * @param object The glTF object
     * @param bufferView The bufferView to assign
     */
    BufferManager.prototype.setBufferView = function (object, bufferView) {
        this._verifyBufferView(bufferView);
        var properties = this.getPropertiesWithBufferView(bufferView);
        properties.push(object);
    };
    /**
     * Removes buffer view from the binary data, as well as from all its known references
     * @param bufferView the bufferView to remove
     */
    BufferManager.prototype.removeBufferView = function (bufferView) {
        var _this = this;
        var properties = this.getPropertiesWithBufferView(bufferView);
        for (var _i = 0, properties_2 = properties; _i < properties_2.length; _i++) {
            var object = properties_2[_i];
            if (object.bufferView !== undefined) {
                delete object.bufferView;
            }
        }
        this._bufferViewToData.delete(bufferView);
        this._bufferViewToProperties.delete(bufferView);
        this._accessorToBufferView.forEach(function (bv, accessor) {
            if (bv === bufferView) {
                // Additionally, remove byteOffset from accessor referencing this bufferView
                if (accessor.byteOffset !== undefined) {
                    delete accessor.byteOffset;
                }
                _this._accessorToBufferView.delete(accessor);
            }
        });
    };
    BufferManager.prototype.getBufferView = function (accessor) {
        var bufferView = this._accessorToBufferView.get(accessor);
        this._verifyBufferView(bufferView);
        return bufferView;
    };
    BufferManager.prototype.getPropertiesWithBufferView = function (bufferView) {
        var _a;
        this._verifyBufferView(bufferView);
        this._bufferViewToProperties.set(bufferView, (_a = this._bufferViewToProperties.get(bufferView)) !== null && _a !== void 0 ? _a : []);
        return this._bufferViewToProperties.get(bufferView);
    };
    BufferManager.prototype.getData = function (bufferView) {
        this._verifyBufferView(bufferView);
        return this._bufferViewToData.get(bufferView);
    };
    BufferManager.prototype._verifyBufferView = function (bufferView) {
        if (bufferView === undefined || !this._bufferViewToData.has(bufferView)) {
            throw new Error("BufferView ".concat(bufferView, " not found in BufferManager."));
        }
    };
    return BufferManager;
}());



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
var TypedArrayToWriteMethod = new Map([
    [Int8Array, function (d, b, v) { return d.setInt8(b, v); }],
    [Uint8Array, function (dv, bo, v) { return dv.setUint8(bo, v); }],
    [Uint8ClampedArray, function (dv, bo, v) { return dv.setUint8(bo, v); }],
    [Int16Array, function (dv, bo, v) { return dv.setInt16(bo, v, true); }],
    [Uint16Array, function (dv, bo, v) { return dv.setUint16(bo, v, true); }],
    [Int32Array, function (dv, bo, v) { return dv.setInt32(bo, v, true); }],
    [Uint32Array, function (dv, bo, v) { return dv.setUint32(bo, v, true); }],
    [Float32Array, function (dv, bo, v) { return dv.setFloat32(bo, v, true); }],
    [Float64Array, function (dv, bo, v) { return dv.setFloat64(bo, v, true); }],
]);
/** @internal */
var DataWriter = /** @class */ (function () {
    function DataWriter(byteLength) {
        this._data = new Uint8Array(byteLength);
        this._dataView = new DataView(this._data.buffer);
        this._byteOffset = 0;
    }
    DataWriter.prototype.writeTypedArray = function (value) {
        this._checkGrowBuffer(value.byteLength);
        var setMethod = TypedArrayToWriteMethod.get(value.constructor);
        for (var i = 0; i < value.length; i++) {
            setMethod(this._dataView, this._byteOffset, value[i]);
            this._byteOffset += value.BYTES_PER_ELEMENT;
        }
    };
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
    DataWriter.prototype.writeInt32 = function (entry) {
        this._checkGrowBuffer(4);
        this._dataView.setInt32(this._byteOffset, entry, true);
        this._byteOffset += 4;
    };
    DataWriter.prototype.writeUInt32 = function (value) {
        this._checkGrowBuffer(4);
        this._dataView.setUint32(this._byteOffset, value, true);
        this._byteOffset += 4;
    };
    DataWriter.prototype.writeFloat32 = function (value) {
        this._checkGrowBuffer(4);
        this._dataView.setFloat32(this._byteOffset, value, true);
        this._byteOffset += 4;
    };
    DataWriter.prototype.writeFloat64 = function (value) {
        this._checkGrowBuffer(8);
        this._dataView.setFloat64(this._byteOffset, value, true);
        this._byteOffset += 8;
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
     * @param bufferManager
     * @param bufferViews
     * @param accessors
     * @param animationSampleRate
     */
    _GLTFAnimation._CreateNodeAnimationFromNodeAnimations = function (babylonNode, runtimeGLTFAnimation, idleGLTFAnimations, nodeMap, nodes, bufferManager, bufferViews, accessors, animationSampleRate, useRightHanded, shouldExportAnimation) {
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
                        _GLTFAnimation._AddAnimation("".concat(animation.name), animation.hasRunningRuntimeAnimations ? runtimeGLTFAnimation : glTFAnimation, babylonNode, animation, animationInfo.dataAccessorType, animationInfo.animationChannelTargetPath, nodeMap, bufferManager, bufferViews, accessors, animationInfo.useQuaternion, animationSampleRate, useRightHanded);
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
     * @param bufferManager
     * @param bufferViews
     * @param accessors
     * @param animationSampleRate
     */
    _GLTFAnimation._CreateMorphTargetAnimationFromMorphTargetAnimations = function (babylonNode, runtimeGLTFAnimation, idleGLTFAnimations, nodeMap, nodes, bufferManager, bufferViews, accessors, animationSampleRate, useRightHanded, shouldExportAnimation) {
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
                            _GLTFAnimation._AddAnimation(animation.name, animation.hasRunningRuntimeAnimations ? runtimeGLTFAnimation : glTFAnimation, babylonNode, combinedAnimation, animationInfo.dataAccessorType, animationInfo.animationChannelTargetPath, nodeMap, bufferManager, bufferViews, accessors, animationInfo.useQuaternion, animationSampleRate, useRightHanded, morphTargetManager.numTargets);
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
     * @param bufferManager
     * @param bufferViews
     * @param accessors
     * @param animationSampleRate
     */
    _GLTFAnimation._CreateNodeAndMorphAnimationFromAnimationGroups = function (babylonScene, glTFAnimations, nodeMap, bufferManager, bufferViews, accessors, animationSampleRate, leftHandedNodes, shouldExportAnimation) {
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
                                _GLTFAnimation._AddAnimation("".concat(animation.name), glTFAnimation, babylonTransformNode, animation, animationInfo.dataAccessorType, animationInfo.animationChannelTargetPath, nodeMap, bufferManager, bufferViews, accessors, animationInfo.useQuaternion, animationSampleRate, convertToRightHanded);
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
                        _GLTFAnimation._AddAnimation("".concat(animationGroup.name, "_").concat(mesh.name, "_MorphWeightAnimation"), glTFAnimation, mesh, combinedAnimationGroup, animationInfo.dataAccessorType, animationInfo.animationChannelTargetPath, nodeMap, bufferManager, bufferViews, accessors, animationInfo.useQuaternion, animationSampleRate, false, morphTargetManager === null || morphTargetManager === void 0 ? void 0 : morphTargetManager.numTargets);
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
    _GLTFAnimation._AddAnimation = function (name, glTFAnimation, babylonTransformNode, animation, dataAccessorType, animationChannelTargetPath, nodeMap, bufferManager, bufferViews, accessors, useQuaternion, animationSampleRate, convertToRightHanded, morphAnimationChannels) {
        var animationData = _GLTFAnimation._CreateNodeAnimation(babylonTransformNode, animation, animationChannelTargetPath, useQuaternion, animationSampleRate);
        var bufferView;
        var accessor;
        var keyframeAccessorIndex;
        var dataAccessorIndex;
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
            // Create buffer view and accessor for key frames.
            var inputData = new Float32Array(animationData.inputs);
            bufferView = bufferManager.createBufferView(inputData);
            accessor = bufferManager.createAccessor(bufferView, "SCALAR" /* AccessorType.SCALAR */, 5126 /* AccessorComponentType.FLOAT */, animationData.inputs.length, undefined, {
                min: [animationData.inputsMin],
                max: [animationData.inputsMax],
            });
            accessors.push(accessor);
            keyframeAccessorIndex = accessors.length - 1;
            // Perform conversions on keyed values while also building their buffer.
            var rotationQuaternion_1 = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion();
            var eulerVec3_1 = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3();
            var position_1 = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3();
            var isCamera_1 = babylonTransformNode instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Camera;
            var elementCount_1 = (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_1__.GetAccessorElementCount)(dataAccessorType);
            var outputData_1 = new Float32Array(animationData.outputs.length * elementCount_1);
            animationData.outputs.forEach(function (output, index) {
                var outputToWrite = output;
                if (convertToRightHanded) {
                    switch (animationChannelTargetPath) {
                        case "translation" /* AnimationChannelTargetPath.TRANSLATION */:
                            babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArrayToRef(output, 0, position_1);
                            (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_1__.ConvertToRightHandedPosition)(position_1);
                            position_1.toArray(outputToWrite);
                            break;
                        case "rotation" /* AnimationChannelTargetPath.ROTATION */:
                            if (output.length === 4) {
                                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.FromArrayToRef(output, 0, rotationQuaternion_1);
                            }
                            else {
                                outputToWrite = new Array(4); // Will need 4, not 3, for a quaternion
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
                            rotationQuaternion_1.toArray(outputToWrite);
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
                                outputToWrite = new Array(4); // Will need 4, not 3, for a quaternion
                                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArrayToRef(output, 0, eulerVec3_1);
                                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.FromEulerVectorToRef(eulerVec3_1, rotationQuaternion_1);
                            }
                            if (isCamera_1) {
                                (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_1__.ConvertCameraRotationToGLTF)(rotationQuaternion_1);
                            }
                            rotationQuaternion_1.toArray(outputToWrite);
                            break;
                    }
                }
                outputData_1.set(outputToWrite, index * elementCount_1);
            });
            // Create buffer view and accessor for keyed values.
            bufferView = bufferManager.createBufferView(outputData_1);
            accessor = bufferManager.createAccessor(bufferView, dataAccessorType, 5126 /* AccessorComponentType.FLOAT */, animationData.outputs.length);
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
/* harmony import */ var _bufferManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bufferManager */ "../../../dev/serializers/src/glTF/2.0/bufferManager.ts");
/* harmony import */ var _glTFAnimation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./glTFAnimation */ "../../../dev/serializers/src/glTF/2.0/glTFAnimation.ts");
/* harmony import */ var _glTFMorphTargetsUtilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./glTFMorphTargetsUtilities */ "../../../dev/serializers/src/glTF/2.0/glTFMorphTargetsUtilities.ts");

























var ExporterState = /** @class */ (function () {
    function ExporterState(convertToRightHanded, wasAddedByNoopNode) {
        // Babylon indices array, start, count, offset, flip -> glTF accessor index
        this._indicesAccessorMap = new Map();
        // Babylon buffer -> glTF buffer view
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
    ExporterState.prototype.setVertexBufferView = function (buffer, bufferView) {
        this._vertexBufferViewMap.set(buffer, bufferView);
    };
    ExporterState.prototype.setRemappedBufferView = function (buffer, vertexBuffer, bufferView) {
        this._remappedBufferView.set(buffer, new Map());
        this._remappedBufferView.get(buffer).set(vertexBuffer, bufferView);
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
        this._shouldUseGlb = false;
        this._materialExporter = new _glTFMaterialExporter__WEBPACK_IMPORTED_MODULE_1__.GLTFMaterialExporter(this);
        this._extensions = {};
        this._bufferManager = new _bufferManager__WEBPACK_IMPORTED_MODULE_4__.BufferManager();
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
        this._options = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__assign)({ shouldExportNode: function () { return true; }, shouldExportAnimation: function () { return true; }, metadataSelector: function (metadata) { return metadata; }, animationSampleRate: 1 / 60, exportWithoutWaitingForScene: false, exportUnusedUVs: false, removeNoopRootNodes: true, includeCoordinateSystemConversionNodes: false, meshCompressionMethod: "None" }, options);
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
    GLTFExporter.prototype._extensionsPostExportNodeAsync = function (context, node, babylonNode, nodeMap, convertToRightHanded) {
        var _this = this;
        return this._applyExtensions(node, function (extension, node) { return extension.postExportNodeAsync && extension.postExportNodeAsync(context, node, babylonNode, nodeMap, convertToRightHanded, _this._bufferManager); });
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
    GLTFExporter.prototype._extensionsPostExportMeshPrimitive = function (primitive) {
        for (var _i = 0, _a = GLTFExporter._ExtensionNames; _i < _a.length; _i++) {
            var name_4 = _a[_i];
            var extension = this._extensions[name_4];
            if (extension.postExportMeshPrimitive) {
                extension.postExportMeshPrimitive(primitive, this._bufferManager, this._accessors);
            }
        }
    };
    GLTFExporter.prototype._extensionsPreGenerateBinaryAsync = function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function () {
            var _i, _a, name_5, extension;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _i = 0, _a = GLTFExporter._ExtensionNames;
                        _b.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        name_5 = _a[_i];
                        extension = this._extensions[name_5];
                        if (!extension.preGenerateBinaryAsync) return [3 /*break*/, 3];
                        return [4 /*yield*/, extension.preGenerateBinaryAsync(this._bufferManager)];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    GLTFExporter.prototype._forEachExtensions = function (action) {
        for (var _i = 0, _a = GLTFExporter._ExtensionNames; _i < _a.length; _i++) {
            var name_6 = _a[_i];
            var extension = this._extensions[name_6];
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
            var name_7 = _a[_i];
            var extension = GLTFExporter._ExtensionFactories[name_7](this);
            this._extensions[name_7] = extension;
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
    GLTFExporter.prototype._generateJSON = function (bufferByteLength, fileName, prettyPrint) {
        var buffer = { byteLength: bufferByteLength };
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
            this._glTF.images = this._images;
        }
        if (!this._shouldUseGlb) {
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
                        jsonText = this._generateJSON(binaryBuffer.byteLength, glTFPrefix, true);
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
                        return [4 /*yield*/, this._extensionsPreGenerateBinaryAsync()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, this._bufferManager.generateBinary(this._bufferViews)];
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
            var binaryBuffer, jsonText, glbFileName, headerLength, chunkLengthPrefix, jsonLength, encodedJsonText, encoder, jsonPadding, binPadding, byteLength, headerBuffer, headerBufferView, jsonChunkBuffer, jsonChunkBufferView, jsonData, blankCharCode, i, charCode, jsonPaddingView, i, binaryChunkBuffer, binaryChunkBufferView, binPaddingBuffer, binPaddingView, i, glbData, glbFile, container;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._shouldUseGlb = true;
                        return [4 /*yield*/, this._generateBinaryAsync()];
                    case 1:
                        binaryBuffer = _a.sent();
                        this._extensionsOnExporting();
                        jsonText = this._generateJSON(binaryBuffer.byteLength);
                        glbFileName = glTFPrefix + ".glb";
                        headerLength = 12;
                        chunkLengthPrefix = 8;
                        jsonLength = jsonText.length;
                        // make use of TextEncoder when available
                        if (typeof TextEncoder !== "undefined") {
                            encoder = new TextEncoder();
                            encodedJsonText = encoder.encode(jsonText);
                            jsonLength = encodedJsonText.length;
                        }
                        jsonPadding = this._getPadding(jsonLength);
                        binPadding = this._getPadding(binaryBuffer.byteLength);
                        byteLength = headerLength + 2 * chunkLengthPrefix + jsonLength + jsonPadding + binaryBuffer.byteLength + binPadding;
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
                        binaryChunkBufferView.setUint32(0, binaryBuffer.byteLength + binPadding, true);
                        binaryChunkBufferView.setUint32(4, 0x004e4942, true);
                        binPaddingBuffer = new ArrayBuffer(binPadding);
                        binPaddingView = new Uint8Array(binPaddingBuffer);
                        for (i = 0; i < binPadding; ++i) {
                            binPaddingView[i] = 0;
                        }
                        glbData = [headerBuffer, jsonChunkBuffer, binaryChunkBuffer, binaryBuffer, binPaddingBuffer];
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
        var _a;
        var _loop_1 = function (skeleton) {
            if (skeleton.bones.length <= 0) {
                return "continue";
            }
            var skin = this_1._skinMap.get(skeleton);
            if (skin == undefined) {
                return "continue";
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
                    var nodeID = this_1._nodeMap.get(transformNode);
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
            var skinedNodes = this_1._nodesSkinMap.get(skin);
            // Only create skeleton if it has at least one joint and is used by a mesh.
            if (skin.joints.length > 0 && skinedNodes !== undefined) {
                // Put IBM data into TypedArraybuffer view
                var byteLength = inverseBindMatrices.length * 64; // Always a 4 x 4 matrix of 32 bit float
                var inverseBindMatricesData_1 = new Float32Array(byteLength / 4);
                inverseBindMatrices.forEach(function (mat, index) {
                    inverseBindMatricesData_1.set(mat.m, index * 16);
                });
                // Create buffer view and accessor
                var bufferView = this_1._bufferManager.createBufferView(inverseBindMatricesData_1);
                this_1._accessors.push(this_1._bufferManager.createAccessor(bufferView, "MAT4" /* AccessorType.MAT4 */, 5126 /* AccessorComponentType.FLOAT */, inverseBindMatrices.length));
                skin.inverseBindMatrices = this_1._accessors.length - 1;
                this_1._skins.push(skin);
                for (var _c = 0, skinedNodes_1 = skinedNodes; _c < skinedNodes_1.length; _c++) {
                    var skinedNode = skinedNodes_1[_c];
                    skinedNode.skin = this_1._skins.length - 1;
                }
            }
        };
        var this_1 = this;
        for (var _i = 0, _b = this._babylonScene.skeletons; _i < _b.length; _i++) {
            var skeleton = _b[_i];
            _loop_1(skeleton);
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
                            _glTFAnimation__WEBPACK_IMPORTED_MODULE_5__._GLTFAnimation._CreateNodeAndMorphAnimationFromAnimationGroups(this._babylonScene, this._animations, this._nodeMap, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, stateLH.getNodesSet(), this._options.shouldExportAnimation);
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
                    if (!(0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_3__.IsStandardVertexAttribute)(kind)) {
                        continue;
                    }
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
        var _loop_2 = function (buffer) {
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
            var _loop_3 = function (vertexBuffer) {
                var byteOffset = vertexBuffer.byteOffset, byteStride_1 = vertexBuffer.byteStride, type = vertexBuffer.type, normalized = vertexBuffer.normalized;
                var size = vertexBuffer.getSize();
                var meshes = vertexBufferToMeshesMap.get(vertexBuffer);
                var maxTotalVertices = meshes.reduce(function (max, current) {
                    return current.getTotalVertices() > max ? current.getTotalVertices() : max;
                }, -Number.MAX_VALUE); // To ensure nothing is missed when enumerating, but may not be necessary.
                switch (vertexBuffer.getKind()) {
                    // Normalize normals and tangents.
                    case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.NormalKind:
                    case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.TangentKind: {
                        (0,babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.EnumerateFloatValues)(bytes, byteOffset, byteStride_1, size, type, maxTotalVertices * size, normalized, function (values) {
                            var length = Math.sqrt(values[0] * values[0] + values[1] * values[1] + values[2] * values[2]);
                            if (length > 0) {
                                var invLength = 1 / length;
                                values[0] *= invLength;
                                values[1] *= invLength;
                                values[2] *= invLength;
                            }
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
                        var useExactSrgbConversions_1 = this_2._babylonScene.getEngine().useExactSrgbConversions;
                        (0,babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.EnumerateFloatValues)(bytes, byteOffset, byteStride_1, size, type, maxTotalVertices * size, normalized, function (values) {
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
                _loop_3(vertexBuffer);
            }
            // Performs coordinate conversion if needed (only for position, normal and tangent).
            if (state.convertToRightHanded) {
                for (var _e = 0, vertexBuffers_2 = vertexBuffers; _e < vertexBuffers_2.length; _e++) {
                    var vertexBuffer = vertexBuffers_2[_e];
                    switch (vertexBuffer.getKind()) {
                        case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.PositionKind:
                        case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.NormalKind:
                        case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.TangentKind: {
                            for (var _f = 0, _g = vertexBufferToMeshesMap.get(vertexBuffer); _f < _g.length; _f++) {
                                var mesh = _g[_f];
                                var byteOffset = vertexBuffer.byteOffset, byteStride_2 = vertexBuffer.byteStride, type = vertexBuffer.type, normalized = vertexBuffer.normalized;
                                var size = vertexBuffer.getSize();
                                (0,babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.EnumerateFloatValues)(bytes, byteOffset, byteStride_2, size, type, mesh.getTotalVertices() * size, normalized, function (values) {
                                    values[0] = -values[0];
                                });
                            }
                        }
                    }
                }
                // Save converted bytes for min/max computation.
                state.convertedToRightHandedBuffers.set(buffer, bytes);
            }
            // Create buffer view, but defer accessor creation for later. Instead, track it via ExporterState.
            var bufferView = this_2._bufferManager.createBufferView(bytes, byteStride);
            state.setVertexBufferView(buffer, bufferView);
            var floatMatricesIndices = new Map();
            // If buffers are of type MatricesIndicesKind and have float values, we need to create a new buffer instead.
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
                var is16Bit = (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_3__.FloatsNeed16BitInteger)(array);
                var newArray = new (is16Bit ? Uint16Array : Uint8Array)(array.length);
                for (var index = 0; index < array.length; index++) {
                    newArray[index] = array[index];
                }
                var bufferView_1 = this_2._bufferManager.createBufferView(newArray, 4 * (is16Bit ? 2 : 1));
                state.setRemappedBufferView(buffer, vertexBuffer, bufferView_1);
            }
        };
        var this_2 = this;
        for (var _a = 0, buffers_1 = buffers; _a < buffers_1.length; _a++) {
            var buffer = buffers_1[_a];
            _loop_2(buffer);
        }
        var morphTargets = Array.from(morphTagetsMeshesMap.keys());
        for (var _b = 0, morphTargets_1 = morphTargets; _b < morphTargets_1.length; _b++) {
            var morphTarget = morphTargets_1[_b];
            var meshes = morphTagetsMeshesMap.get(morphTarget);
            if (!meshes) {
                continue;
            }
            var glTFMorphTarget = (0,_glTFMorphTargetsUtilities__WEBPACK_IMPORTED_MODULE_6__.BuildMorphTargetBuffers)(morphTarget, meshes[0], this._bufferManager, this._bufferViews, this._accessors, state.convertToRightHanded);
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
                                _glTFAnimation__WEBPACK_IMPORTED_MODULE_5__._GLTFAnimation._CreateMorphTargetAnimationFromMorphTargetAnimations(babylonNode, runtimeGLTFAnimation, idleGLTFAnimations, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, state.convertToRightHanded, this._options.shouldExportAnimation);
                                if (babylonNode.animations.length) {
                                    _glTFAnimation__WEBPACK_IMPORTED_MODULE_5__._GLTFAnimation._CreateNodeAnimationFromNodeAnimations(babylonNode, runtimeGLTFAnimation, idleGLTFAnimations, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, state.convertToRightHanded, this._options.shouldExportAnimation);
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
    GLTFExporter.prototype._exportIndices = function (indices, is32Bits, start, count, offset, fillMode, sideOrientation, state, primitive) {
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
                var bytes = (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_3__.IndicesArrayToTypedArray)(indicesToExport, 0, count, is32Bits);
                var bufferView = this._bufferManager.createBufferView(bytes);
                var componentType = is32Bits ? 5125 /* AccessorComponentType.UNSIGNED_INT */ : 5123 /* AccessorComponentType.UNSIGNED_SHORT */;
                this._accessors.push(this._bufferManager.createAccessor(bufferView, "SCALAR" /* AccessorType.SCALAR */, componentType, count, 0));
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
            var minMax = kind === babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.PositionKind ? (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_3__.GetMinMax)(data, vertexBuffer, start, count) : undefined;
            // For the remapped buffer views we created for float matrices indices, make sure to use their updated information.
            var isFloatMatricesIndices = (kind === babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.MatricesIndicesKind || kind === babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.MatricesIndicesExtraKind) && vertexBuffer.type === babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.FLOAT;
            var vertexBufferType = isFloatMatricesIndices ? babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UNSIGNED_BYTE : vertexBuffer.type;
            var vertexBufferNormalized = isFloatMatricesIndices ? undefined : vertexBuffer.normalized;
            var bufferView = isFloatMatricesIndices ? state.getRemappedBufferView(vertexBuffer._buffer, vertexBuffer) : state.getVertexBufferView(vertexBuffer._buffer);
            var byteOffset = vertexBuffer.byteOffset + start * vertexBuffer.byteStride;
            this._accessors.push(this._bufferManager.createAccessor(bufferView, (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_3__.GetAccessorType)(kind, state.hasVertexColorAlpha(vertexBuffer)), vertexBufferType, count, byteOffset, minMax, vertexBufferNormalized // TODO: Find other places where this is needed.
            ));
            accessorIndex = this._accessors.length - 1;
            state.setVertexAccessor(vertexBuffer, start, count, accessorIndex);
        }
        primitive.attributes[(0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_3__.GetAttributeType)(kind)] = accessorIndex;
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
            var meshIndex, mesh, indices, vertexBuffers, morphTargets, isLinesMesh, isGreasedLineMesh, subMeshes, _i, subMeshes_1, subMesh, primitive, babylonMaterial, material, babylonLinesMesh, colorWhite, alpha, color, material, babylonLinesMesh, fillMode, sideOrientation, _a, _b, vertexBuffer, _c, morphTargets_2, gltfMorphTarget, _d, morphTargets_3, gltfMorphTarget;
            var _e, _f, _g, _h, _j, _k;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__generator)(this, function (_l) {
                switch (_l.label) {
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
                        isLinesMesh = babylonMesh instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.LinesMesh;
                        isGreasedLineMesh = babylonMesh instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.GreasedLineBaseMesh;
                        subMeshes = babylonMesh.subMeshes;
                        if (!(vertexBuffers && subMeshes && subMeshes.length > 0)) return [3 /*break*/, 7];
                        _i = 0, subMeshes_1 = subMeshes;
                        _l.label = 1;
                    case 1:
                        if (!(_i < subMeshes_1.length)) return [3 /*break*/, 7];
                        subMesh = subMeshes_1[_i];
                        primitive = { attributes: {} };
                        babylonMaterial = subMesh.getMaterial() || this._babylonScene.defaultMaterial;
                        if (!isGreasedLineMesh) return [3 /*break*/, 2];
                        material = {
                            name: babylonMaterial.name,
                        };
                        babylonLinesMesh = babylonMesh;
                        colorWhite = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Color3.White();
                        alpha = (_g = (_f = babylonLinesMesh.material) === null || _f === void 0 ? void 0 : _f.alpha) !== null && _g !== void 0 ? _g : 1;
                        color = (_j = (_h = babylonLinesMesh.greasedLineMaterial) === null || _h === void 0 ? void 0 : _h.color) !== null && _j !== void 0 ? _j : colorWhite;
                        if (!color.equals(colorWhite) || alpha < 1) {
                            material.pbrMetallicRoughness = {
                                baseColorFactor: (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_7__.__spreadArray)([], color.asArray(), true), [alpha], false),
                            };
                        }
                        this._materials.push(material);
                        primitive.material = this._materials.length - 1;
                        return [3 /*break*/, 5];
                    case 2:
                        if (!isLinesMesh) return [3 /*break*/, 3];
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
                        return [3 /*break*/, 5];
                    case 3: 
                    // Material
                    return [4 /*yield*/, this._exportMaterialAsync(babylonMaterial, vertexBuffers, subMesh, primitive)];
                    case 4:
                        // Material
                        _l.sent();
                        _l.label = 5;
                    case 5:
                        fillMode = isLinesMesh || isGreasedLineMesh ? babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Material.LineListDrawMode : ((_k = babylonMesh.overrideRenderingFillMode) !== null && _k !== void 0 ? _k : babylonMaterial.fillMode);
                        sideOrientation = babylonMaterial._getEffectiveOrientation(babylonMesh);
                        this._exportIndices(indices, indices ? (0,babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.AreIndices32Bits)(indices, subMesh.indexCount, subMesh.indexStart, subMesh.verticesStart) : subMesh.verticesCount > 65535, indices ? subMesh.indexStart : subMesh.verticesStart, indices ? subMesh.indexCount : subMesh.verticesCount, -subMesh.verticesStart, fillMode, sideOrientation, state, primitive);
                        // Vertex buffers
                        for (_a = 0, _b = Object.values(vertexBuffers); _a < _b.length; _a++) {
                            vertexBuffer = _b[_a];
                            this._exportVertexBuffer(vertexBuffer, babylonMaterial, subMesh.verticesStart, subMesh.verticesCount, state, primitive);
                        }
                        if (morphTargets) {
                            primitive.targets = [];
                            for (_c = 0, morphTargets_2 = morphTargets; _c < morphTargets_2.length; _c++) {
                                gltfMorphTarget = morphTargets_2[_c];
                                primitive.targets.push(gltfMorphTarget.attributes);
                            }
                        }
                        mesh.primitives.push(primitive);
                        this._extensionsPostExportMeshPrimitive(primitive);
                        _l.label = 6;
                    case 6:
                        _i++;
                        return [3 /*break*/, 1];
                    case 7:
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
/* harmony import */ var babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Helpers/materialConversionHelper */ "babylonjs/Misc/tools");
/* harmony import */ var babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable babylonjs/available */










var epsilon = 1e-6;
var dielectricSpecular = new babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Color3(0.04, 0.04, 0.04);
var maxSpecularPower = 1024;
var white = babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Color3.White();
var black = babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Color3.Black();
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
    return babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Scalar.Clamp((-b + Math.sqrt(d)) / (2.0 * a), 0, 1);
}
/**
 * Computes the metallic/roughness factors from a Standard Material.
 * @internal
 */
function _ConvertToGLTFPBRMetallicRoughness(babylonStandardMaterial) {
    var diffuse = babylonStandardMaterial.diffuseColor.toLinearSpace(babylonStandardMaterial.getScene().getEngine().useExactSrgbConversions).scale(0.5);
    var opacity = babylonStandardMaterial.alpha;
    var specularPower = babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Scalar.Clamp(babylonStandardMaterial.specularPower, 0, maxSpecularPower);
    var roughness = (0,babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.SpecularPowerToRoughness)(specularPower);
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
    var rawTexture = babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.RawTexture.CreateRGBATexture(data, width, height, scene);
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
                                babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Tools.Warn(babylonStandardMaterial.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF.");
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
                            if (babylonStandardMaterial.alphaMode === babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Constants.ALPHA_COMBINE) {
                                material.alphaMode = "BLEND" /* MaterialAlphaMode.BLEND */;
                            }
                            else {
                                babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Tools.Warn(babylonStandardMaterial.name + ": glTF 2.0 does not support alpha mode: " + babylonStandardMaterial.alphaMode.toString());
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
                        textureType = babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Constants.TEXTURETYPE_UNSIGNED_BYTE;
                        hostingScene = this._exporter._babylonScene;
                        engine = hostingScene.getEngine();
                        tempTexture = engine.createRawTexture(buffer, width, height, babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Constants.TEXTUREFORMAT_RGBA, false, true, babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Texture.NEAREST_SAMPLINGMODE, null, textureType);
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
                        return [4 /*yield*/, babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.TextureTools.ApplyPostProcess("pass", tempTexture, hostingScene, textureType, babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Constants.TEXTURE_NEAREST_SAMPLINGMODE, babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Constants.TEXTUREFORMAT_RGBA)];
                    case 5:
                        _b.sent();
                        return [4 /*yield*/, engine._readTexturePixels(tempTexture, width, height)];
                    case 6:
                        data = _b.sent();
                        return [4 /*yield*/, babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.DumpTools.DumpDataAsync(width, height, data, mimeType, undefined, true, true)];
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
            if (texture1 && texture1 instanceof babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Texture) {
                resizedTexture1 = babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.TextureTools.CreateResizedCopy(texture1, texture2Size.width, texture2Size.height, true);
            }
            else {
                resizedTexture1 = CreateWhiteTexture(texture2Size.width, texture2Size.height, scene);
            }
            resizedTexture2 = texture2;
        }
        else if (texture1Size.width > texture2Size.width) {
            if (texture2 && texture2 instanceof babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Texture) {
                resizedTexture2 = babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.TextureTools.CreateResizedCopy(texture2, texture1Size.width, texture1Size.height, true);
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
                                diffuseColor = new babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Color3(diffuseBuffer[offset], diffuseBuffer[offset + 1], diffuseBuffer[offset + 2])
                                    .toLinearSpace(scene.getEngine().useExactSrgbConversions)
                                    .multiply(factors.diffuseColor);
                                specularColor = new babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Color3(specularGlossinessBuffer[offset], specularGlossinessBuffer[offset + 1], specularGlossinessBuffer[offset + 2])
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
                                linearBaseColorPixel = babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Color3.FromInts(baseColorBuffer[destinationOffset], baseColorBuffer[destinationOffset + 1], baseColorBuffer[destinationOffset + 2]);
                                sRGBBaseColorPixel = linearBaseColorPixel.toGammaSpace(scene.getEngine().useExactSrgbConversions);
                                baseColorBuffer[destinationOffset] = sRGBBaseColorPixel.r * 255;
                                baseColorBuffer[destinationOffset + 1] = sRGBBaseColorPixel.g * 255;
                                baseColorBuffer[destinationOffset + 2] = sRGBBaseColorPixel.b * 255;
                                if (!sRGBBaseColorPixel.equalsWithEpsilon(white, epsilon)) {
                                    writeOutBaseColorTexture = true;
                                }
                                metallicRoughnessBuffer[destinationOffset + 1] /= metallicRoughnessFactors_1.roughness > epsilon ? metallicRoughnessFactors_1.roughness : 1;
                                metallicRoughnessBuffer[destinationOffset + 2] /= metallicRoughnessFactors_1.metallic > epsilon ? metallicRoughnessFactors_1.metallic : 1;
                                metallicRoughnessPixel = babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Color3.FromInts(255, metallicRoughnessBuffer[destinationOffset + 1], metallicRoughnessBuffer[destinationOffset + 2]);
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
        var baseColor = babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Color3.Lerp(baseColorFromDiffuse, baseColorFromSpecular, metallic * metallic);
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
        if (!texture || !(texture instanceof babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Texture)) {
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
            case babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Texture.LINEAR_LINEAR: {
                sampler.magFilter = 9729 /* TextureMagFilter.LINEAR */;
                sampler.minFilter = 9729 /* TextureMinFilter.LINEAR */;
                break;
            }
            case babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Texture.LINEAR_NEAREST: {
                sampler.magFilter = 9729 /* TextureMagFilter.LINEAR */;
                sampler.minFilter = 9728 /* TextureMinFilter.NEAREST */;
                break;
            }
            case babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Texture.NEAREST_LINEAR: {
                sampler.magFilter = 9728 /* TextureMagFilter.NEAREST */;
                sampler.minFilter = 9729 /* TextureMinFilter.LINEAR */;
                break;
            }
            case babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Texture.NEAREST_LINEAR_MIPLINEAR: {
                sampler.magFilter = 9728 /* TextureMagFilter.NEAREST */;
                sampler.minFilter = 9987 /* TextureMinFilter.LINEAR_MIPMAP_LINEAR */;
                break;
            }
            case babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Texture.NEAREST_NEAREST: {
                sampler.magFilter = 9728 /* TextureMagFilter.NEAREST */;
                sampler.minFilter = 9728 /* TextureMinFilter.NEAREST */;
                break;
            }
            case babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Texture.NEAREST_LINEAR_MIPNEAREST: {
                sampler.magFilter = 9728 /* TextureMagFilter.NEAREST */;
                sampler.minFilter = 9985 /* TextureMinFilter.LINEAR_MIPMAP_NEAREST */;
                break;
            }
            case babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Texture.LINEAR_NEAREST_MIPNEAREST: {
                sampler.magFilter = 9729 /* TextureMagFilter.LINEAR */;
                sampler.minFilter = 9984 /* TextureMinFilter.NEAREST_MIPMAP_NEAREST */;
                break;
            }
            case babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Texture.LINEAR_NEAREST_MIPLINEAR: {
                sampler.magFilter = 9729 /* TextureMagFilter.LINEAR */;
                sampler.minFilter = 9986 /* TextureMinFilter.NEAREST_MIPMAP_LINEAR */;
                break;
            }
            case babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Texture.NEAREST_NEAREST_MIPLINEAR: {
                sampler.magFilter = 9728 /* TextureMagFilter.NEAREST */;
                sampler.minFilter = 9986 /* TextureMinFilter.NEAREST_MIPMAP_LINEAR */;
                break;
            }
            case babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Texture.LINEAR_LINEAR_MIPLINEAR: {
                sampler.magFilter = 9729 /* TextureMagFilter.LINEAR */;
                sampler.minFilter = 9987 /* TextureMinFilter.LINEAR_MIPMAP_LINEAR */;
                break;
            }
            case babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Texture.LINEAR_LINEAR_MIPNEAREST: {
                sampler.magFilter = 9729 /* TextureMagFilter.LINEAR */;
                sampler.minFilter = 9985 /* TextureMinFilter.LINEAR_MIPMAP_NEAREST */;
                break;
            }
            case babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Texture.NEAREST_NEAREST_MIPNEAREST: {
                sampler.magFilter = 9728 /* TextureMagFilter.NEAREST */;
                sampler.minFilter = 9984 /* TextureMinFilter.NEAREST_MIPMAP_NEAREST */;
                break;
            }
        }
        return sampler;
    };
    GLTFMaterialExporter.prototype._getGLTFTextureWrapMode = function (wrapMode) {
        switch (wrapMode) {
            case babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Texture.WRAP_ADDRESSMODE: {
                return 10497 /* TextureWrapMode.REPEAT */;
            }
            case babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Texture.CLAMP_ADDRESSMODE: {
                return 33071 /* TextureWrapMode.CLAMP_TO_EDGE */;
            }
            case babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Texture.MIRROR_ADDRESSMODE: {
                return 33648 /* TextureWrapMode.MIRRORED_REPEAT */;
            }
            default: {
                babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Tools.Error("Unsupported Texture Wrap Mode ".concat(wrapMode, "!"));
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
                        if (!metallicRoughness.baseColor.equalsWithEpsilon(white, epsilon) || !babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Scalar.WithinEpsilon(babylonPBRMaterial.alpha, 1, epsilon)) {
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
                                babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Tools.Warn(babylonPBRMaterial.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF.");
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
        var pixels = babylonTexture.textureType === babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Constants.TEXTURETYPE_UNSIGNED_BYTE
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
                                    babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Tools.Warn("Unsupported media type: ".concat(textureMimeType));
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
        var images = this._exporter._images;
        var image;
        if (this._exporter._shouldUseGlb) {
            image = {
                name: name,
                mimeType: mimeType,
                bufferView: undefined, // Will be updated later by BufferManager
            };
            var bufferView = this._exporter._bufferManager.createBufferView(new Uint8Array(data));
            this._exporter._bufferManager.setBufferView(image, bufferView);
        }
        else {
            // Build a unique URI
            var baseName = name.replace(/\.\/|\/|\.\\|\\/g, "_");
            var extension = GetFileExtensionFromMimeType(mimeType);
            var fileName_1 = baseName + extension;
            if (images.some(function (image) { return image.uri === fileName_1; })) {
                fileName_1 = "".concat(baseName, "_").concat(babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Tools.RandomId()).concat(extension);
            }
            image = {
                name: name,
                uri: fileName_1,
            };
            this._exporter._imageData[fileName_1] = { data: data, mimeType: mimeType }; // Save image data to be written to file later
        }
        images.push(image);
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




function BuildMorphTargetBuffers(morphTarget, mesh, bufferManager, bufferViews, accessors, convertToRightHanded) {
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
    if (morphTarget.hasPositions) {
        var morphPositions = morphTarget.getPositions();
        var originalPositions = mesh.getVerticesData(babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.PositionKind, undefined, undefined, true);
        if (originalPositions) {
            var positionData = new Float32Array(originalPositions.length);
            var min = [Infinity, Infinity, Infinity];
            var max = [-Infinity, -Infinity, -Infinity];
            vertexCount = originalPositions.length / 3;
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
                positionData[i * 3] = difference.x;
                positionData[i * 3 + 1] = difference.y;
                positionData[i * 3 + 2] = difference.z;
            }
            var bufferView = bufferManager.createBufferView(positionData, floatSize * 3);
            var accessor = bufferManager.createAccessor(bufferView, "VEC3" /* AccessorType.VEC3 */, 5126 /* AccessorComponentType.FLOAT */, morphPositions.length / 3, 0, { min: min, max: max });
            accessors.push(accessor);
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
            var normalData = new Float32Array(originalNormals.length);
            vertexCount = originalNormals.length / 3;
            vertexStart = 0;
            for (var i = vertexStart; i < vertexCount; ++i) {
                var originalNormal = babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.Vector3.FromArray(originalNormals, i * 3).normalize();
                var morphNormal = babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.Vector3.FromArray(morphNormals, i * 3).normalize();
                morphNormal.subtractToRef(originalNormal, difference);
                normalData[i * 3] = difference.x * flipX;
                normalData[i * 3 + 1] = difference.y;
                normalData[i * 3 + 2] = difference.z;
            }
            var bufferView = bufferManager.createBufferView(normalData, floatSize * 3);
            var accessor = bufferManager.createAccessor(bufferView, "VEC3" /* AccessorType.VEC3 */, 5126 /* AccessorComponentType.FLOAT */, morphNormals.length / 3, 0);
            accessors.push(accessor);
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
            var tangentData = new Float32Array(vertexCount * 3);
            vertexStart = 0;
            for (var i = vertexStart; i < vertexCount; ++i) {
                // Only read the x, y, z components and ignore w
                var originalTangent = babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.Vector3.FromArray(originalTangents, i * 4);
                (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_0__.NormalizeTangent)(originalTangent);
                // Morph target tangents omit the w component so it won't be present in the data
                var morphTangent = babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.Vector3.FromArray(morphTangents, i * 3);
                (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_0__.NormalizeTangent)(morphTangent);
                morphTangent.subtractToRef(originalTangent, difference);
                tangentData[i * 3] = difference.x * flipX;
                tangentData[i * 3 + 1] = difference.y;
                tangentData[i * 3 + 2] = difference.z;
            }
            var bufferView = bufferManager.createBufferView(tangentData, floatSize * 3);
            var accessor = bufferManager.createAccessor(bufferView, "VEC3" /* AccessorType.VEC3 */, 5126 /* AccessorComponentType.FLOAT */, vertexCount, 0);
            accessors.push(accessor);
            result.attributes["TANGENT"] = accessors.length - 1;
        }
        else {
            babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.Tools.Warn("Morph target tangents for mesh ".concat(mesh.name, " were not exported. Mesh does not have tangents vertex data"));
        }
    }
    if (morphTarget.hasColors) {
        var morphColors = morphTarget.getColors();
        var originalColors = mesh.getVerticesData(babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.ColorKind, undefined, undefined, true);
        var buffer = mesh.getVertexBuffer(babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.ColorKind, true);
        if (originalColors && buffer) {
            var componentSize = buffer.getSize();
            vertexCount = originalColors.length / componentSize;
            var colorData = new Float32Array(vertexCount * componentSize);
            vertexStart = 0;
            for (var i = vertexStart; i < vertexCount; ++i) {
                if (componentSize === 3) {
                    var originalColor = babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.Vector3.FromArray(originalColors, i * componentSize);
                    var morphColor = babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.Vector3.FromArray(morphColors, i * componentSize);
                    morphColor.subtractToRef(originalColor, difference);
                    colorData[i * 3] = difference.x;
                    colorData[i * 3 + 1] = difference.y;
                    colorData[i * 3 + 2] = difference.z;
                }
                else if (componentSize === 4) {
                    var difference4 = new babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.Vector4();
                    var originalColor = babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.Vector4.FromArray(originalColors, i * componentSize);
                    var morphColor = babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.Vector4.FromArray(morphColors, i * componentSize);
                    morphColor.subtractToRef(originalColor, difference4);
                    colorData[i * 4] = difference4.x;
                    colorData[i * 4 + 1] = difference4.y;
                    colorData[i * 4 + 2] = difference4.z;
                    colorData[i * 4 + 3] = difference4.w;
                }
                else {
                    babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.Tools.Warn("Unsupported number of components for color attribute: ".concat(componentSize));
                }
            }
            var bufferView = bufferManager.createBufferView(colorData, floatSize * componentSize);
            var accessor = bufferManager.createAccessor(bufferView, componentSize === 3 ? "VEC3" /* AccessorType.VEC3 */ : "VEC4" /* AccessorType.VEC4 */, 5126 /* AccessorComponentType.FLOAT */, vertexCount, 0);
            accessors.push(accessor);
            result.attributes["COLOR_0"] = accessors.length - 1;
        }
        else {
            babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.Tools.Warn("Morph target colors for mesh ".concat(mesh.name, " were not exported. Mesh does not have colors vertex data"));
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
/* harmony export */   CollapseParentNode: () => (/* binding */ CollapseParentNode),
/* harmony export */   ConvertCameraRotationToGLTF: () => (/* binding */ ConvertCameraRotationToGLTF),
/* harmony export */   ConvertToRightHandedNode: () => (/* binding */ ConvertToRightHandedNode),
/* harmony export */   ConvertToRightHandedPosition: () => (/* binding */ ConvertToRightHandedPosition),
/* harmony export */   ConvertToRightHandedRotation: () => (/* binding */ ConvertToRightHandedRotation),
/* harmony export */   DataArrayToUint8Array: () => (/* binding */ DataArrayToUint8Array),
/* harmony export */   FloatsNeed16BitInteger: () => (/* binding */ FloatsNeed16BitInteger),
/* harmony export */   GetAccessorElementCount: () => (/* binding */ GetAccessorElementCount),
/* harmony export */   GetAccessorType: () => (/* binding */ GetAccessorType),
/* harmony export */   GetAttributeType: () => (/* binding */ GetAttributeType),
/* harmony export */   GetMinMax: () => (/* binding */ GetMinMax),
/* harmony export */   GetPrimitiveMode: () => (/* binding */ GetPrimitiveMode),
/* harmony export */   IndicesArrayToTypedArray: () => (/* binding */ IndicesArrayToTypedArray),
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
    var rotation = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.FromArrayToRef(node.rotation || [0, 0, 0, 1], 0, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Quaternion[1]);
    rotation180Y.multiplyToRef(rotation, rotation);
    node.rotation = rotation.asArray();
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
/**
 * Converts an IndicesArray into either Uint32Array or Uint16Array, only copying if the data is number[].
 * @param indices input array to be converted
 * @param start starting index to copy from
 * @param count number of indices to copy
 * @returns a Uint32Array or Uint16Array
 * @internal
 */
function IndicesArrayToTypedArray(indices, start, count, is32Bits) {
    if (indices instanceof Uint16Array || indices instanceof Uint32Array) {
        return indices;
    }
    // If Int32Array, cast the indices (which are all positive) to Uint32Array
    if (indices instanceof Int32Array) {
        return new Uint32Array(indices.buffer, indices.byteOffset, indices.length);
    }
    var subarray = indices.slice(start, start + count);
    return is32Bits ? new Uint32Array(subarray) : new Uint16Array(subarray);
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
/* harmony export */   EXT_mesh_gpu_instancing: () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_3__.EXT_mesh_gpu_instancing),
/* harmony export */   GLTF2Export: () => (/* reexport safe */ _glTFSerializer__WEBPACK_IMPORTED_MODULE_1__.GLTF2Export),
/* harmony export */   GLTFData: () => (/* reexport safe */ _glTFData__WEBPACK_IMPORTED_MODULE_0__.GLTFData),
/* harmony export */   KHR_draco_mesh_compression: () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_3__.KHR_draco_mesh_compression),
/* harmony export */   KHR_lights_punctual: () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_3__.KHR_lights_punctual),
/* harmony export */   KHR_materials_anisotropy: () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_3__.KHR_materials_anisotropy),
/* harmony export */   KHR_materials_clearcoat: () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_3__.KHR_materials_clearcoat),
/* harmony export */   KHR_materials_diffuse_transmission: () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_3__.KHR_materials_diffuse_transmission),
/* harmony export */   KHR_materials_dispersion: () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_3__.KHR_materials_dispersion),
/* harmony export */   KHR_materials_emissive_strength: () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_3__.KHR_materials_emissive_strength),
/* harmony export */   KHR_materials_ior: () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_3__.KHR_materials_ior),
/* harmony export */   KHR_materials_iridescence: () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_3__.KHR_materials_iridescence),
/* harmony export */   KHR_materials_sheen: () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_3__.KHR_materials_sheen),
/* harmony export */   KHR_materials_specular: () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_3__.KHR_materials_specular),
/* harmony export */   KHR_materials_transmission: () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_3__.KHR_materials_transmission),
/* harmony export */   KHR_materials_unlit: () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_3__.KHR_materials_unlit),
/* harmony export */   KHR_materials_volume: () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_3__.KHR_materials_volume),
/* harmony export */   KHR_texture_transform: () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_3__.KHR_texture_transform),
/* harmony export */   _ConvertToGLTFPBRMetallicRoughness: () => (/* reexport safe */ _glTFMaterialExporter__WEBPACK_IMPORTED_MODULE_2__._ConvertToGLTFPBRMetallicRoughness),
/* harmony export */   _SolveMetallic: () => (/* reexport safe */ _glTFMaterialExporter__WEBPACK_IMPORTED_MODULE_2__._SolveMetallic)
/* harmony export */ });
/* harmony import */ var _glTFData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glTFData */ "../../../dev/serializers/src/glTF/2.0/glTFData.ts");
/* harmony import */ var _glTFSerializer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./glTFSerializer */ "../../../dev/serializers/src/glTF/2.0/glTFSerializer.ts");
/* harmony import */ var _glTFMaterialExporter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./glTFMaterialExporter */ "../../../dev/serializers/src/glTF/2.0/glTFMaterialExporter.ts");
/* harmony import */ var _Extensions_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Extensions/index */ "../../../dev/serializers/src/glTF/2.0/Extensions/index.ts");
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
/* harmony export */   KHR_draco_mesh_compression: () => (/* reexport safe */ serializers_glTF_2_0_index__WEBPACK_IMPORTED_MODULE_4__.KHR_draco_mesh_compression),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFieWxvbi5nbFRGMlNlcmlhbGl6ZXIuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1WUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBY0E7QUFiQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUdBO0FBQ0E7QUFFQTtBQUdBO0FBREE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBRUE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFBQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEpBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQTBCQTtBQUNBO0FBMUJBO0FBQ0E7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFTQTtBQUNBO0FBUEE7QUFEQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFPQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFXQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hMQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFlQTs7QUFFQTtBQUNBO0FBakJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQVdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBREE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pMQTtBQUVBO0FBR0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFjQTtBQWJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBR0E7QUFDQTtBQUVBO0FBR0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRkE7QUFFQTtBQUdBO0FBRUE7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFjQTtBQWJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBR0E7QUFDQTtBQUVBO0FBR0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNHQTtBQUVBO0FBRUE7QUFHQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQWNBO0FBYkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFHQTtBQUNBO0FBRUE7QUFHQTtBQURBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQUE7QUFDQTs7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakpBO0FBRUE7QUFFQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFZQTtBQUNBO0FBWkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFHQTtBQUVBO0FBQ0E7QUFHQTtBQURBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUVBO0FBRUE7QUFHQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUE2Q0E7QUEzQ0E7QUFDQTtBQUdBO0FBREE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRUE7QUFFQTtBQUVBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBWUE7QUFYQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUdBO0FBREE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRUE7QUFFQTtBQUdBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBY0E7QUFiQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUdBO0FBQ0E7QUFFQTtBQUdBO0FBREE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RkE7QUFFQTtBQUdBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBY0E7QUFiQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFFQTtBQUdBO0FBREE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRkE7QUFFQTtBQUdBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBY0E7QUFiQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUFBO0FBQ0E7O0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEhBO0FBRUE7QUFFQTtBQUVBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBY0E7QUFiQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7Ozs7OztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTs7O0FBSUE7QUFDQTs7QUFHQTs7OztBQUNBO0FBQ0E7QUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkhBO0FBRUE7QUFDQTtBQUVBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBWUE7QUFYQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBR0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFFQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6REE7QUFFQTtBQUVBO0FBRUE7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFjQTtBQWJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBR0E7QUFDQTtBQUVBO0FBR0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUFBO0FBQ0E7O0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2SEE7QUFHQTtBQUVBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFhQTtBQVpBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBR0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQVFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQW9KQTtBQWxKQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUFBO0FBQ0E7QUFDQTs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBS0E7QUFDQTtBQUVBO0FBaURBOzs7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUFBO0FBay9CQTtBQWovQkE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFhQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQWFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7QUFZQTtBQUNBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7OztBQVlBO0FBQ0E7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7QUFXQTtBQUNBOztBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7QUE5REE7QUFBQTtBQStEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBOUlBO0FBQUE7QUFBQTtBQStJQTtBQUNBO0FBQ0E7QUFFQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQWVBO0FBQ0E7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQVdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7O0FBUUE7QUFDQTtBQVFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7OztBQVFBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeGtDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFtQkE7QUFkQTtBQUhBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFHQTtBQUVBO0FBQ0E7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFxQkE7QUFwQkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBV0E7QUFDQTtBQVRBO0FBQ0E7QUFDQTtBQVNBOztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFvTEE7QUFBQTtBQW5MQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQVNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQW9JQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBYUE7QUFDQTtBQW5KQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFDQTs7O0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTs7QUFBQTs7O0FBSkE7Ozs7OztBQU9BO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBOzs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7QUFDQTs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFDQTtBQUVBOzs7O0FBQ0E7O0FBQUE7QUFDQTs7QUFBQTtBQUNBOzs7O0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7QUFDQTtBQUNBOztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBOztBQUVBO0FBRUE7QUFFQTs7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBaEVBO0FBQUE7QUFBQTtBQWlFQTtBQUNBO0FBRUE7Ozs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOztBQUFBOztBQUFBO0FBQ0E7QUFDQTs7QUFBQTs7QUFBQTtBQUNBO0FBQ0E7O0FBQUE7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQVdBOzs7OztBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7QUFDQTtBQUVBO0FBRUE7OztBQUFBO0FBQUE7QUFDQTs7QUFBQTs7O0FBREE7O0FBSUE7Ozs7QUFDQTtBQUVBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7O0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQTNEQTtBQUNBO0FBQUE7QUFBQTtBQTJEQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFFQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQXBKQTtBQUFBO0FBQUE7QUFxSkE7QUFFQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFhQTtBQUNBO0FBYUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7OztBQUFBO0FBQUE7QUFDQTs7QUFBQTs7O0FBREE7OztBQUlBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUVBOzs7QUFHQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFBQTs7O0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFDQTtBQUVBO0FBV0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFTQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUFBOzs7QUFDQTtBQUNBOztBQUFBOzs7QUFFQTtBQUNBOztBQUdBOzs7QUFHQTs7Ozs7QUFDQTtBQUVBOzs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7OztBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7OztBQUVBO0FBQ0E7O0FBREE7QUFDQTs7O0FBSUE7QUFFQTtBQUVBO0FBWUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBMUVBOzs7QUE4RUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFDQTtBQW52Q0E7QUFDQTtBQW12Q0E7QUFBQTtBQXZ5Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeE5BOztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUtBO0FBQ0E7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFPQTtBQUFBO0FBTkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBOztBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7O0FBQUE7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFDQTtBQUVBOzs7Ozs7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFBQTtBQUVBOztBQUFBOzs7OztBQUNBO0FBRUE7Ozs7OztBQUNBO0FBRUE7QUFDQTtBQUdBO0FBRUE7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7O0FBQUE7QUFDQTs7QUFBQTtBQUVBOztBQUFBO0FBRUE7QUFBQTs7OztBQUNBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7QUFTQTtBQUNBOzs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBQUE7QUFDQTs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUVBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7OztBQU9BO0FBQ0E7Ozs7OztBQU1BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFBQTs7QUFHQTs7OztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7OztBQU9BO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTs7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7QUFFQTtBQUVBOzs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUFBOztBQUNBOztBQUFBOzs7QUFGQTtBQUlBOztBQUFBO0FBQ0E7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFDQTtBQUVBOzs7Ozs7QUFRQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7O0FBQUE7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFFQTs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUNBOztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7O0FBQUE7QUFDQTtBQUNBOztBQUdBOzs7O0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzU5QkE7QUFFQTtBQUNBO0FBQ0E7QUFZQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkxBO0FBZ0VBOztBQUVBO0FBQ0E7QUFBQTtBQXNDQTtBQXJDQTs7Ozs7O0FBTUE7QUFDQTs7Ozs7O0FBQ0E7QUFDQTs7QUFBQTs7O0FBR0E7QUFDQTs7QUFBQTtBQUNBO0FBRUE7Ozs7QUFDQTtBQUVBOzs7Ozs7QUFNQTtBQUNBOzs7Ozs7QUFDQTtBQUNBOztBQUFBOzs7QUFHQTtBQUNBOztBQUFBO0FBQ0E7QUFFQTs7OztBQUNBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdHQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7QUNqREE7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL1NFUklBTElaRVJTL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2Lm1qcyIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy8uLi8uLi8uLi9kZXYvc2VyaWFsaXplcnMvc3JjL2dsVEYvMi4wL0V4dGVuc2lvbnMvRVhUX21lc2hfZ3B1X2luc3RhbmNpbmcudHMiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvLi4vLi4vLi4vZGV2L3NlcmlhbGl6ZXJzL3NyYy9nbFRGLzIuMC9FeHRlbnNpb25zL0tIUl9kcmFjb19tZXNoX2NvbXByZXNzaW9uLnRzIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2Rldi9zZXJpYWxpemVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9LSFJfbGlnaHRzX3B1bmN0dWFsLnRzIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2Rldi9zZXJpYWxpemVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9LSFJfbWF0ZXJpYWxzX2FuaXNvdHJvcHkudHMiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvLi4vLi4vLi4vZGV2L3NlcmlhbGl6ZXJzL3NyYy9nbFRGLzIuMC9FeHRlbnNpb25zL0tIUl9tYXRlcmlhbHNfY2xlYXJjb2F0LnRzIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2Rldi9zZXJpYWxpemVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9LSFJfbWF0ZXJpYWxzX2RpZmZ1c2VfdHJhbnNtaXNzaW9uLnRzIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2Rldi9zZXJpYWxpemVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9LSFJfbWF0ZXJpYWxzX2Rpc3BlcnNpb24udHMiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvLi4vLi4vLi4vZGV2L3NlcmlhbGl6ZXJzL3NyYy9nbFRGLzIuMC9FeHRlbnNpb25zL0tIUl9tYXRlcmlhbHNfZW1pc3NpdmVfc3RyZW5ndGgudHMiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvLi4vLi4vLi4vZGV2L3NlcmlhbGl6ZXJzL3NyYy9nbFRGLzIuMC9FeHRlbnNpb25zL0tIUl9tYXRlcmlhbHNfaW9yLnRzIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2Rldi9zZXJpYWxpemVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9LSFJfbWF0ZXJpYWxzX2lyaWRlc2NlbmNlLnRzIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2Rldi9zZXJpYWxpemVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9LSFJfbWF0ZXJpYWxzX3NoZWVuLnRzIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2Rldi9zZXJpYWxpemVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9LSFJfbWF0ZXJpYWxzX3NwZWN1bGFyLnRzIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2Rldi9zZXJpYWxpemVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9LSFJfbWF0ZXJpYWxzX3RyYW5zbWlzc2lvbi50cyIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy8uLi8uLi8uLi9kZXYvc2VyaWFsaXplcnMvc3JjL2dsVEYvMi4wL0V4dGVuc2lvbnMvS0hSX21hdGVyaWFsc191bmxpdC50cyIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy8uLi8uLi8uLi9kZXYvc2VyaWFsaXplcnMvc3JjL2dsVEYvMi4wL0V4dGVuc2lvbnMvS0hSX21hdGVyaWFsc192b2x1bWUudHMiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvLi4vLi4vLi4vZGV2L3NlcmlhbGl6ZXJzL3NyYy9nbFRGLzIuMC9FeHRlbnNpb25zL0tIUl90ZXh0dXJlX3RyYW5zZm9ybS50cyIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy8uLi8uLi8uLi9kZXYvc2VyaWFsaXplcnMvc3JjL2dsVEYvMi4wL0V4dGVuc2lvbnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvLi4vLi4vLi4vZGV2L3NlcmlhbGl6ZXJzL3NyYy9nbFRGLzIuMC9idWZmZXJNYW5hZ2VyLnRzIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2Rldi9zZXJpYWxpemVycy9zcmMvZ2xURi8yLjAvZGF0YVdyaXRlci50cyIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy8uLi8uLi8uLi9kZXYvc2VyaWFsaXplcnMvc3JjL2dsVEYvMi4wL2dsVEZBbmltYXRpb24udHMiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvLi4vLi4vLi4vZGV2L3NlcmlhbGl6ZXJzL3NyYy9nbFRGLzIuMC9nbFRGRGF0YS50cyIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy8uLi8uLi8uLi9kZXYvc2VyaWFsaXplcnMvc3JjL2dsVEYvMi4wL2dsVEZFeHBvcnRlci50cyIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy8uLi8uLi8uLi9kZXYvc2VyaWFsaXplcnMvc3JjL2dsVEYvMi4wL2dsVEZNYXRlcmlhbEV4cG9ydGVyLnRzIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2Rldi9zZXJpYWxpemVycy9zcmMvZ2xURi8yLjAvZ2xURk1vcnBoVGFyZ2V0c1V0aWxpdGllcy50cyIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy8uLi8uLi8uLi9kZXYvc2VyaWFsaXplcnMvc3JjL2dsVEYvMi4wL2dsVEZTZXJpYWxpemVyLnRzIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2Rldi9zZXJpYWxpemVycy9zcmMvZ2xURi8yLjAvZ2xURlV0aWxpdGllcy50cyIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy8uLi8uLi8uLi9kZXYvc2VyaWFsaXplcnMvc3JjL2dsVEYvMi4wL2luZGV4LnRzIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2Rldi9zZXJpYWxpemVycy9zcmMvZ2xURi9nbFRGRmlsZUV4cG9ydGVyLnRzIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2x0cy9zZXJpYWxpemVycy9zcmMvbGVnYWN5L2xlZ2FjeS1nbFRGMlNlcmlhbGl6ZXIudHMiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvZXh0ZXJuYWwgdW1kIHtcInJvb3RcIjpcIkJBQllMT05cIixcImNvbW1vbmpzXCI6XCJiYWJ5bG9uanNcIixcImNvbW1vbmpzMlwiOlwiYmFieWxvbmpzXCIsXCJhbWRcIjpcImJhYnlsb25qc1wifSIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy93ZWJwYWNrL3J1bnRpbWUvY3JlYXRlIGZha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL1NFUklBTElaRVJTL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvLi9zcmMvZ2xURjIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiYmFieWxvbmpzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiYmFieWxvbmpzLXNlcmlhbGl6ZXJzXCIsIFtcImJhYnlsb25qc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJiYWJ5bG9uanMtc2VyaWFsaXplcnNcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJiYWJ5bG9uanNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlNFUklBTElaRVJTXCJdID0gZmFjdG9yeShyb290W1wiQkFCWUxPTlwiXSk7XG59KSgodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHRoaXMpLCAoX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9iYWJ5bG9uanNfTWlzY190b29sc19fKSA9PiB7XG5yZXR1cm4gIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXG5cblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1Jcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UsIFN1cHByZXNzZWRFcnJvciwgU3ltYm9sLCBJdGVyYXRvciAqL1xuXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcbiAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcbiAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbn1cblxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xuICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xuICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHQ7XG4gIH1cbiAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xuICB2YXIgdCA9IHt9O1xuICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgIHRbcF0gPSBzW3BdO1xuICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxuICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgIH1cbiAgcmV0dXJuIHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xuICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fZXNEZWNvcmF0ZShjdG9yLCBkZXNjcmlwdG9ySW4sIGRlY29yYXRvcnMsIGNvbnRleHRJbiwgaW5pdGlhbGl6ZXJzLCBleHRyYUluaXRpYWxpemVycykge1xuICBmdW5jdGlvbiBhY2NlcHQoZikgeyBpZiAoZiAhPT0gdm9pZCAwICYmIHR5cGVvZiBmICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJGdW5jdGlvbiBleHBlY3RlZFwiKTsgcmV0dXJuIGY7IH1cbiAgdmFyIGtpbmQgPSBjb250ZXh0SW4ua2luZCwga2V5ID0ga2luZCA9PT0gXCJnZXR0ZXJcIiA/IFwiZ2V0XCIgOiBraW5kID09PSBcInNldHRlclwiID8gXCJzZXRcIiA6IFwidmFsdWVcIjtcbiAgdmFyIHRhcmdldCA9ICFkZXNjcmlwdG9ySW4gJiYgY3RvciA/IGNvbnRleHRJbltcInN0YXRpY1wiXSA/IGN0b3IgOiBjdG9yLnByb3RvdHlwZSA6IG51bGw7XG4gIHZhciBkZXNjcmlwdG9yID0gZGVzY3JpcHRvckluIHx8ICh0YXJnZXQgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwgY29udGV4dEluLm5hbWUpIDoge30pO1xuICB2YXIgXywgZG9uZSA9IGZhbHNlO1xuICBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgdmFyIGNvbnRleHQgPSB7fTtcbiAgICAgIGZvciAodmFyIHAgaW4gY29udGV4dEluKSBjb250ZXh0W3BdID0gcCA9PT0gXCJhY2Nlc3NcIiA/IHt9IDogY29udGV4dEluW3BdO1xuICAgICAgZm9yICh2YXIgcCBpbiBjb250ZXh0SW4uYWNjZXNzKSBjb250ZXh0LmFjY2Vzc1twXSA9IGNvbnRleHRJbi5hY2Nlc3NbcF07XG4gICAgICBjb250ZXh0LmFkZEluaXRpYWxpemVyID0gZnVuY3Rpb24gKGYpIHsgaWYgKGRvbmUpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgYWRkIGluaXRpYWxpemVycyBhZnRlciBkZWNvcmF0aW9uIGhhcyBjb21wbGV0ZWRcIik7IGV4dHJhSW5pdGlhbGl6ZXJzLnB1c2goYWNjZXB0KGYgfHwgbnVsbCkpOyB9O1xuICAgICAgdmFyIHJlc3VsdCA9ICgwLCBkZWNvcmF0b3JzW2ldKShraW5kID09PSBcImFjY2Vzc29yXCIgPyB7IGdldDogZGVzY3JpcHRvci5nZXQsIHNldDogZGVzY3JpcHRvci5zZXQgfSA6IGRlc2NyaXB0b3Jba2V5XSwgY29udGV4dCk7XG4gICAgICBpZiAoa2luZCA9PT0gXCJhY2Nlc3NvclwiKSB7XG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gdm9pZCAwKSBjb250aW51ZTtcbiAgICAgICAgICBpZiAocmVzdWx0ID09PSBudWxsIHx8IHR5cGVvZiByZXN1bHQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3QgZXhwZWN0ZWRcIik7XG4gICAgICAgICAgaWYgKF8gPSBhY2NlcHQocmVzdWx0LmdldCkpIGRlc2NyaXB0b3IuZ2V0ID0gXztcbiAgICAgICAgICBpZiAoXyA9IGFjY2VwdChyZXN1bHQuc2V0KSkgZGVzY3JpcHRvci5zZXQgPSBfO1xuICAgICAgICAgIGlmIChfID0gYWNjZXB0KHJlc3VsdC5pbml0KSkgaW5pdGlhbGl6ZXJzLnVuc2hpZnQoXyk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChfID0gYWNjZXB0KHJlc3VsdCkpIHtcbiAgICAgICAgICBpZiAoa2luZCA9PT0gXCJmaWVsZFwiKSBpbml0aWFsaXplcnMudW5zaGlmdChfKTtcbiAgICAgICAgICBlbHNlIGRlc2NyaXB0b3Jba2V5XSA9IF87XG4gICAgICB9XG4gIH1cbiAgaWYgKHRhcmdldCkgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgY29udGV4dEluLm5hbWUsIGRlc2NyaXB0b3IpO1xuICBkb25lID0gdHJ1ZTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3J1bkluaXRpYWxpemVycyh0aGlzQXJnLCBpbml0aWFsaXplcnMsIHZhbHVlKSB7XG4gIHZhciB1c2VWYWx1ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGluaXRpYWxpemVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFsdWUgPSB1c2VWYWx1ZSA/IGluaXRpYWxpemVyc1tpXS5jYWxsKHRoaXNBcmcsIHZhbHVlKSA6IGluaXRpYWxpemVyc1tpXS5jYWxsKHRoaXNBcmcpO1xuICB9XG4gIHJldHVybiB1c2VWYWx1ZSA/IHZhbHVlIDogdm9pZCAwO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fcHJvcEtleSh4KSB7XG4gIHJldHVybiB0eXBlb2YgeCA9PT0gXCJzeW1ib2xcIiA/IHggOiBcIlwiLmNvbmNhdCh4KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3NldEZ1bmN0aW9uTmFtZShmLCBuYW1lLCBwcmVmaXgpIHtcbiAgaWYgKHR5cGVvZiBuYW1lID09PSBcInN5bWJvbFwiKSBuYW1lID0gbmFtZS5kZXNjcmlwdGlvbiA/IFwiW1wiLmNvbmNhdChuYW1lLmRlc2NyaXB0aW9uLCBcIl1cIikgOiBcIlwiO1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGYsIFwibmFtZVwiLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHByZWZpeCA/IFwiXCIuY29uY2F0KHByZWZpeCwgXCIgXCIsIG5hbWUpIDogbmFtZSB9KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XG4gIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGcgPSBPYmplY3QuY3JlYXRlKCh0eXBlb2YgSXRlcmF0b3IgPT09IFwiZnVuY3Rpb25cIiA/IEl0ZXJhdG9yIDogT2JqZWN0KS5wcm90b3R5cGUpO1xuICByZXR1cm4gZy5uZXh0ID0gdmVyYigwKSwgZ1tcInRocm93XCJdID0gdmVyYigxKSwgZ1tcInJldHVyblwiXSA9IHZlcmIoMiksIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgIHdoaWxlIChnICYmIChnID0gMCwgb3BbMF0gJiYgKF8gPSAwKSksIF8pIHRyeSB7XG4gICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgfVxufVxuXG5leHBvcnQgdmFyIF9fY3JlYXRlQmluZGluZyA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xuICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcbiAgfVxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgb1trMl0gPSBtW2tdO1xufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgbykge1xuICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIHApKSBfX2NyZWF0ZUJpbmRpbmcobywgbSwgcCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XG4gIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XG4gIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xuICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XG4gICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcbiAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XG4gICAgICB9XG4gIH07XG4gIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XG4gIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcbiAgaWYgKCFtKSByZXR1cm4gbztcbiAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XG4gIHRyeSB7XG4gICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcbiAgfVxuICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cbiAgZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xuICAgICAgfVxuICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XG4gIH1cbiAgcmV0dXJuIGFyO1xufVxuXG4vKiogQGRlcHJlY2F0ZWQgKi9cbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcbiAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXG4gICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XG4gIHJldHVybiBhcjtcbn1cblxuLyoqIEBkZXByZWNhdGVkICovXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XG4gIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xuICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXG4gICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcbiAgICAgICAgICByW2tdID0gYVtqXTtcbiAgcmV0dXJuIHI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5KHRvLCBmcm9tLCBwYWNrKSB7XG4gIGlmIChwYWNrIHx8IGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIGZvciAodmFyIGkgPSAwLCBsID0gZnJvbS5sZW5ndGgsIGFyOyBpIDwgbDsgaSsrKSB7XG4gICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XG4gICAgICAgICAgaWYgKCFhcikgYXIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tLCAwLCBpKTtcbiAgICAgICAgICBhcltpXSA9IGZyb21baV07XG4gICAgICB9XG4gIH1cbiAgcmV0dXJuIHRvLmNvbmNhdChhciB8fCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcbiAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xuICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xuICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xuICByZXR1cm4gaSA9IE9iamVjdC5jcmVhdGUoKHR5cGVvZiBBc3luY0l0ZXJhdG9yID09PSBcImZ1bmN0aW9uXCIgPyBBc3luY0l0ZXJhdG9yIDogT2JqZWN0KS5wcm90b3R5cGUpLCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIsIGF3YWl0UmV0dXJuKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xuICBmdW5jdGlvbiBhd2FpdFJldHVybihmKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZiwgcmVqZWN0KTsgfTsgfVxuICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaWYgKGdbbl0pIHsgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgaWYgKGYpIGlbbl0gPSBmKGlbbl0pOyB9IH1cbiAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxuICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cbiAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxuICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XG4gIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xuICB2YXIgaSwgcDtcbiAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcbiAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogZmFsc2UgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xuICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xuICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xuICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XG4gIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cbiAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcbiAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cbiAgcmV0dXJuIGNvb2tlZDtcbn07XG5cbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gIG9bXCJkZWZhdWx0XCJdID0gdjtcbn07XG5cbnZhciBvd25LZXlzID0gZnVuY3Rpb24obykge1xuICBvd25LZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gKG8pIHtcbiAgICB2YXIgYXIgPSBbXTtcbiAgICBmb3IgKHZhciBrIGluIG8pIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgaykpIGFyW2FyLmxlbmd0aF0gPSBrO1xuICAgIHJldHVybiBhcjtcbiAgfTtcbiAgcmV0dXJuIG93bktleXMobyk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xuICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayA9IG93bktleXMobW9kKSwgaSA9IDA7IGkgPCBrLmxlbmd0aDsgaSsrKSBpZiAoa1tpXSAhPT0gXCJkZWZhdWx0XCIpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwga1tpXSk7XG4gIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XG4gIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xuICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XG4gIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XG4gIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcbiAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xuICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRJbihzdGF0ZSwgcmVjZWl2ZXIpIHtcbiAgaWYgKHJlY2VpdmVyID09PSBudWxsIHx8ICh0eXBlb2YgcmVjZWl2ZXIgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHJlY2VpdmVyICE9PSBcImZ1bmN0aW9uXCIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHVzZSAnaW4nIG9wZXJhdG9yIG9uIG5vbi1vYmplY3RcIik7XG4gIHJldHVybiB0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyID09PSBzdGF0ZSA6IHN0YXRlLmhhcyhyZWNlaXZlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2FkZERpc3Bvc2FibGVSZXNvdXJjZShlbnYsIHZhbHVlLCBhc3luYykge1xuICBpZiAodmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHZvaWQgMCkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHZhbHVlICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3QgZXhwZWN0ZWQuXCIpO1xuICAgIHZhciBkaXNwb3NlLCBpbm5lcjtcbiAgICBpZiAoYXN5bmMpIHtcbiAgICAgIGlmICghU3ltYm9sLmFzeW5jRGlzcG9zZSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0Rpc3Bvc2UgaXMgbm90IGRlZmluZWQuXCIpO1xuICAgICAgZGlzcG9zZSA9IHZhbHVlW1N5bWJvbC5hc3luY0Rpc3Bvc2VdO1xuICAgIH1cbiAgICBpZiAoZGlzcG9zZSA9PT0gdm9pZCAwKSB7XG4gICAgICBpZiAoIVN5bWJvbC5kaXNwb3NlKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmRpc3Bvc2UgaXMgbm90IGRlZmluZWQuXCIpO1xuICAgICAgZGlzcG9zZSA9IHZhbHVlW1N5bWJvbC5kaXNwb3NlXTtcbiAgICAgIGlmIChhc3luYykgaW5uZXIgPSBkaXNwb3NlO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGRpc3Bvc2UgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdCBub3QgZGlzcG9zYWJsZS5cIik7XG4gICAgaWYgKGlubmVyKSBkaXNwb3NlID0gZnVuY3Rpb24oKSB7IHRyeSB7IGlubmVyLmNhbGwodGhpcyk7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIFByb21pc2UucmVqZWN0KGUpOyB9IH07XG4gICAgZW52LnN0YWNrLnB1c2goeyB2YWx1ZTogdmFsdWUsIGRpc3Bvc2U6IGRpc3Bvc2UsIGFzeW5jOiBhc3luYyB9KTtcbiAgfVxuICBlbHNlIGlmIChhc3luYykge1xuICAgIGVudi5zdGFjay5wdXNoKHsgYXN5bmM6IHRydWUgfSk7XG4gIH1cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG52YXIgX1N1cHByZXNzZWRFcnJvciA9IHR5cGVvZiBTdXBwcmVzc2VkRXJyb3IgPT09IFwiZnVuY3Rpb25cIiA/IFN1cHByZXNzZWRFcnJvciA6IGZ1bmN0aW9uIChlcnJvciwgc3VwcHJlc3NlZCwgbWVzc2FnZSkge1xuICB2YXIgZSA9IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgcmV0dXJuIGUubmFtZSA9IFwiU3VwcHJlc3NlZEVycm9yXCIsIGUuZXJyb3IgPSBlcnJvciwgZS5zdXBwcmVzc2VkID0gc3VwcHJlc3NlZCwgZTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2Rpc3Bvc2VSZXNvdXJjZXMoZW52KSB7XG4gIGZ1bmN0aW9uIGZhaWwoZSkge1xuICAgIGVudi5lcnJvciA9IGVudi5oYXNFcnJvciA/IG5ldyBfU3VwcHJlc3NlZEVycm9yKGUsIGVudi5lcnJvciwgXCJBbiBlcnJvciB3YXMgc3VwcHJlc3NlZCBkdXJpbmcgZGlzcG9zYWwuXCIpIDogZTtcbiAgICBlbnYuaGFzRXJyb3IgPSB0cnVlO1xuICB9XG4gIHZhciByLCBzID0gMDtcbiAgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICB3aGlsZSAociA9IGVudi5zdGFjay5wb3AoKSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFyLmFzeW5jICYmIHMgPT09IDEpIHJldHVybiBzID0gMCwgZW52LnN0YWNrLnB1c2gociksIFByb21pc2UucmVzb2x2ZSgpLnRoZW4obmV4dCk7XG4gICAgICAgIGlmIChyLmRpc3Bvc2UpIHtcbiAgICAgICAgICB2YXIgcmVzdWx0ID0gci5kaXNwb3NlLmNhbGwoci52YWx1ZSk7XG4gICAgICAgICAgaWYgKHIuYXN5bmMpIHJldHVybiBzIHw9IDIsIFByb21pc2UucmVzb2x2ZShyZXN1bHQpLnRoZW4obmV4dCwgZnVuY3Rpb24oZSkgeyBmYWlsKGUpOyByZXR1cm4gbmV4dCgpOyB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHMgfD0gMTtcbiAgICAgIH1cbiAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGZhaWwoZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChzID09PSAxKSByZXR1cm4gZW52Lmhhc0Vycm9yID8gUHJvbWlzZS5yZWplY3QoZW52LmVycm9yKSA6IFByb21pc2UucmVzb2x2ZSgpO1xuICAgIGlmIChlbnYuaGFzRXJyb3IpIHRocm93IGVudi5lcnJvcjtcbiAgfVxuICByZXR1cm4gbmV4dCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19yZXdyaXRlUmVsYXRpdmVJbXBvcnRFeHRlbnNpb24ocGF0aCwgcHJlc2VydmVKc3gpIHtcbiAgaWYgKHR5cGVvZiBwYXRoID09PSBcInN0cmluZ1wiICYmIC9eXFwuXFwuP1xcLy8udGVzdChwYXRoKSkge1xuICAgICAgcmV0dXJuIHBhdGgucmVwbGFjZSgvXFwuKHRzeCkkfCgoPzpcXC5kKT8pKCg/OlxcLlteLi9dKz8pPylcXC4oW2NtXT8pdHMkL2ksIGZ1bmN0aW9uIChtLCB0c3gsIGQsIGV4dCwgY20pIHtcbiAgICAgICAgICByZXR1cm4gdHN4ID8gcHJlc2VydmVKc3ggPyBcIi5qc3hcIiA6IFwiLmpzXCIgOiBkICYmICghZXh0IHx8ICFjbSkgPyBtIDogKGQgKyBleHQgKyBcIi5cIiArIGNtLnRvTG93ZXJDYXNlKCkgKyBcImpzXCIpO1xuICAgICAgfSk7XG4gIH1cbiAgcmV0dXJuIHBhdGg7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgX19leHRlbmRzLFxuICBfX2Fzc2lnbixcbiAgX19yZXN0LFxuICBfX2RlY29yYXRlLFxuICBfX3BhcmFtLFxuICBfX2VzRGVjb3JhdGUsXG4gIF9fcnVuSW5pdGlhbGl6ZXJzLFxuICBfX3Byb3BLZXksXG4gIF9fc2V0RnVuY3Rpb25OYW1lLFxuICBfX21ldGFkYXRhLFxuICBfX2F3YWl0ZXIsXG4gIF9fZ2VuZXJhdG9yLFxuICBfX2NyZWF0ZUJpbmRpbmcsXG4gIF9fZXhwb3J0U3RhcixcbiAgX192YWx1ZXMsXG4gIF9fcmVhZCxcbiAgX19zcHJlYWQsXG4gIF9fc3ByZWFkQXJyYXlzLFxuICBfX3NwcmVhZEFycmF5LFxuICBfX2F3YWl0LFxuICBfX2FzeW5jR2VuZXJhdG9yLFxuICBfX2FzeW5jRGVsZWdhdG9yLFxuICBfX2FzeW5jVmFsdWVzLFxuICBfX21ha2VUZW1wbGF0ZU9iamVjdCxcbiAgX19pbXBvcnRTdGFyLFxuICBfX2ltcG9ydERlZmF1bHQsXG4gIF9fY2xhc3NQcml2YXRlRmllbGRHZXQsXG4gIF9fY2xhc3NQcml2YXRlRmllbGRTZXQsXG4gIF9fY2xhc3NQcml2YXRlRmllbGRJbixcbiAgX19hZGREaXNwb3NhYmxlUmVzb3VyY2UsXG4gIF9fZGlzcG9zZVJlc291cmNlcyxcbiAgX19yZXdyaXRlUmVsYXRpdmVJbXBvcnRFeHRlbnNpb24sXG59O1xuIiwiaW1wb3J0IHR5cGUgeyBJTm9kZSwgSUVYVE1lc2hHcHVJbnN0YW5jaW5nIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBBY2Nlc3NvclR5cGUsIEFjY2Vzc29yQ29tcG9uZW50VHlwZSB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHR5cGUgeyBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIgfSBmcm9tIFwiLi4vZ2xURkV4cG9ydGVyRXh0ZW5zaW9uXCI7XHJcbmltcG9ydCB0eXBlIHsgQnVmZmVyTWFuYWdlciB9IGZyb20gXCIuLi9idWZmZXJNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IEdMVEZFeHBvcnRlciB9IGZyb20gXCIuLi9nbFRGRXhwb3J0ZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCJjb3JlL3R5cGVzXCI7XHJcbmltcG9ydCB0eXBlIHsgTm9kZSB9IGZyb20gXCJjb3JlL25vZGVcIjtcclxuaW1wb3J0IHsgTWVzaCB9IGZyb20gXCJjb3JlL01lc2hlcy9tZXNoXCI7XHJcbmltcG9ydCBcImNvcmUvTWVzaGVzL3RoaW5JbnN0YW5jZU1lc2hcIjtcclxuaW1wb3J0IHsgVG1wVmVjdG9ycywgUXVhdGVybmlvbiwgVmVjdG9yMyB9IGZyb20gXCJjb3JlL01hdGhzL21hdGgudmVjdG9yXCI7XHJcbmltcG9ydCB7IENvbnZlcnRUb1JpZ2h0SGFuZGVkUG9zaXRpb24sIENvbnZlcnRUb1JpZ2h0SGFuZGVkUm90YXRpb24gfSBmcm9tIFwiLi4vZ2xURlV0aWxpdGllc1wiO1xyXG5cclxuY29uc3QgTkFNRSA9IFwiRVhUX21lc2hfZ3B1X2luc3RhbmNpbmdcIjtcclxuXHJcbi8qKlxyXG4gKiBbU3BlY2lmaWNhdGlvbl0oaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFpbi9leHRlbnNpb25zLzIuMC9WZW5kb3IvRVhUX21lc2hfZ3B1X2luc3RhbmNpbmcvUkVBRE1FLm1kKVxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgY2xhc3MgRVhUX21lc2hfZ3B1X2luc3RhbmNpbmcgaW1wbGVtZW50cyBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIge1xyXG4gICAgLyoqIE5hbWUgb2YgdGhpcyBleHRlbnNpb24gKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lID0gTkFNRTtcclxuXHJcbiAgICAvKiogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIGVuYWJsZWQgKi9cclxuICAgIHB1YmxpYyBlbmFibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAvKiogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIHJlcXVpcmVkICovXHJcbiAgICBwdWJsaWMgcmVxdWlyZWQgPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIF9leHBvcnRlcjogR0xURkV4cG9ydGVyO1xyXG5cclxuICAgIHByaXZhdGUgX3dhc1VzZWQgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihleHBvcnRlcjogR0xURkV4cG9ydGVyKSB7XHJcbiAgICAgICAgdGhpcy5fZXhwb3J0ZXIgPSBleHBvcnRlcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHt9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGdldCB3YXNVc2VkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl93YXNVc2VkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWZ0ZXIgbm9kZSBpcyBleHBvcnRlZFxyXG4gICAgICogQHBhcmFtIGNvbnRleHQgdGhlIEdMVEYgY29udGV4dCB3aGVuIGxvYWRpbmcgdGhlIGFzc2V0XHJcbiAgICAgKiBAcGFyYW0gbm9kZSB0aGUgbm9kZSBleHBvcnRlZFxyXG4gICAgICogQHBhcmFtIGJhYnlsb25Ob2RlIHRoZSBjb3JyZXNwb25kaW5nIGJhYnlsb24gbm9kZVxyXG4gICAgICogQHBhcmFtIG5vZGVNYXAgbWFwIGZyb20gYmFieWxvbiBub2RlIGlkIHRvIG5vZGUgaW5kZXhcclxuICAgICAqIEBwYXJhbSBjb252ZXJ0VG9SaWdodEhhbmRlZCB0cnVlIGlmIHdlIG5lZWQgdG8gY29udmVydCBkYXRhIGZyb20gbGVmdCBoYW5kIHRvIHJpZ2h0IGhhbmQgc3lzdGVtLlxyXG4gICAgICogQHBhcmFtIGJ1ZmZlck1hbmFnZXIgYnVmZmVyIG1hbmFnZXJcclxuICAgICAqIEByZXR1cm5zIG51bGxhYmxlIHByb21pc2UsIHJlc29sdmVzIHdpdGggdGhlIG5vZGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHBvc3RFeHBvcnROb2RlQXN5bmMoXHJcbiAgICAgICAgY29udGV4dDogc3RyaW5nLFxyXG4gICAgICAgIG5vZGU6IE51bGxhYmxlPElOb2RlPixcclxuICAgICAgICBiYWJ5bG9uTm9kZTogTm9kZSxcclxuICAgICAgICBub2RlTWFwOiBNYXA8Tm9kZSwgbnVtYmVyPixcclxuICAgICAgICBjb252ZXJ0VG9SaWdodEhhbmRlZDogYm9vbGVhbixcclxuICAgICAgICBidWZmZXJNYW5hZ2VyOiBCdWZmZXJNYW5hZ2VyXHJcbiAgICApOiBQcm9taXNlPE51bGxhYmxlPElOb2RlPj4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobm9kZSAmJiBiYWJ5bG9uTm9kZSBpbnN0YW5jZW9mIE1lc2gpIHtcclxuICAgICAgICAgICAgICAgIGlmIChiYWJ5bG9uTm9kZS5oYXNUaGluSW5zdGFuY2VzICYmIHRoaXMuX2V4cG9ydGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fd2FzVXNlZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vVHJhbnNsYXRpb24gPSBWZWN0b3IzLlplcm8oKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBub1JvdGF0aW9uID0gUXVhdGVybmlvbi5JZGVudGl0eSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vU2NhbGUgPSBWZWN0b3IzLk9uZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyByZXRyaWV2ZSBhbGwgdGhlIGluc3RhbmNlIHdvcmxkIG1hdHJpeFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdHJpeCA9IGJhYnlsb25Ob2RlLnRoaW5JbnN0YW5jZUdldFdvcmxkTWF0cmljZXMoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXd0ID0gVG1wVmVjdG9ycy5WZWN0b3IzWzJdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGl3ciA9IFRtcFZlY3RvcnMuUXVhdGVybmlvblsxXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpd3MgPSBUbXBWZWN0b3JzLlZlY3RvcjNbM107XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBoYXNBbnlJbnN0YW5jZVdvcmxkVHJhbnNsYXRpb24gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaGFzQW55SW5zdGFuY2VXb3JsZFJvdGF0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGhhc0FueUluc3RhbmNlV29ybGRTY2FsZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBwcmVwYXJlIHRlbXAgYnVmZmVyc1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zbGF0aW9uQnVmZmVyID0gbmV3IEZsb2F0MzJBcnJheShiYWJ5bG9uTm9kZS50aGluSW5zdGFuY2VDb3VudCAqIDMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvdGF0aW9uQnVmZmVyID0gbmV3IEZsb2F0MzJBcnJheShiYWJ5bG9uTm9kZS50aGluSW5zdGFuY2VDb3VudCAqIDQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNjYWxlQnVmZmVyID0gbmV3IEZsb2F0MzJBcnJheShiYWJ5bG9uTm9kZS50aGluSW5zdGFuY2VDb3VudCAqIDMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBtIG9mIG1hdHJpeCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtLmRlY29tcG9zZShpd3MsIGl3ciwgaXd0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb252ZXJ0VG9SaWdodEhhbmRlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29udmVydFRvUmlnaHRIYW5kZWRQb3NpdGlvbihpd3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29udmVydFRvUmlnaHRIYW5kZWRSb3RhdGlvbihpd3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBmaWxsIHRoZSB0ZW1wIGJ1ZmZlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGlvbkJ1ZmZlci5zZXQoaXd0LmFzQXJyYXkoKSwgaSAqIDMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3RhdGlvbkJ1ZmZlci5zZXQoaXdyLm5vcm1hbGl6ZSgpLmFzQXJyYXkoKSwgaSAqIDQpOyAvLyBlbnN1cmUgdGhlIHF1YXRlcm5pb24gaXMgbm9ybWFsaXplZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY2FsZUJ1ZmZlci5zZXQoaXdzLmFzQXJyYXkoKSwgaSAqIDMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyBpcyB3aGVyZSB3ZSBkZWNpZGUgaWYgdGhlcmUgaXMgYW55IHRyYW5zZm9ybWF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhc0FueUluc3RhbmNlV29ybGRUcmFuc2xhdGlvbiA9IGhhc0FueUluc3RhbmNlV29ybGRUcmFuc2xhdGlvbiB8fCAhaXd0LmVxdWFsc1dpdGhFcHNpbG9uKG5vVHJhbnNsYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYXNBbnlJbnN0YW5jZVdvcmxkUm90YXRpb24gPSBoYXNBbnlJbnN0YW5jZVdvcmxkUm90YXRpb24gfHwgIWl3ci5lcXVhbHNXaXRoRXBzaWxvbihub1JvdGF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFzQW55SW5zdGFuY2VXb3JsZFNjYWxlID0gaGFzQW55SW5zdGFuY2VXb3JsZFNjYWxlIHx8ICFpd3MuZXF1YWxzV2l0aEVwc2lsb24obm9TY2FsZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBleHRlbnNpb246IElFWFRNZXNoR3B1SW5zdGFuY2luZyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlczoge30sXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZG8gd2UgbmVlZCB0byB3cml0ZSBUUkFOU0xBVElPTiA/XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhhc0FueUluc3RhbmNlV29ybGRUcmFuc2xhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHRlbnNpb24uYXR0cmlidXRlc1tcIlRSQU5TTEFUSU9OXCJdID0gdGhpcy5fYnVpbGRBY2Nlc3Nvcih0cmFuc2xhdGlvbkJ1ZmZlciwgQWNjZXNzb3JUeXBlLlZFQzMsIGJhYnlsb25Ob2RlLnRoaW5JbnN0YW5jZUNvdW50LCBidWZmZXJNYW5hZ2VyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZG8gd2UgbmVlZCB0byB3cml0ZSBST1RBVElPTiA/XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhhc0FueUluc3RhbmNlV29ybGRSb3RhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSBkZWNpZGVkIHRvIHN0YXkgb24gRkxPQVQgZm9yIG5vdyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL0JhYnlsb25KUy9CYWJ5bG9uLmpzL3B1bGwvMTI0OTVcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXh0ZW5zaW9uLmF0dHJpYnV0ZXNbXCJST1RBVElPTlwiXSA9IHRoaXMuX2J1aWxkQWNjZXNzb3Iocm90YXRpb25CdWZmZXIsIEFjY2Vzc29yVHlwZS5WRUM0LCBiYWJ5bG9uTm9kZS50aGluSW5zdGFuY2VDb3VudCwgYnVmZmVyTWFuYWdlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGRvIHdlIG5lZWQgdG8gd3JpdGUgU0NBTEUgP1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChoYXNBbnlJbnN0YW5jZVdvcmxkU2NhbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXh0ZW5zaW9uLmF0dHJpYnV0ZXNbXCJTQ0FMRVwiXSA9IHRoaXMuX2J1aWxkQWNjZXNzb3Ioc2NhbGVCdWZmZXIsIEFjY2Vzc29yVHlwZS5WRUMzLCBiYWJ5bG9uTm9kZS50aGluSW5zdGFuY2VDb3VudCwgYnVmZmVyTWFuYWdlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiovXHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5leHRlbnNpb25zID0gbm9kZS5leHRlbnNpb25zIHx8IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuZXh0ZW5zaW9uc1tOQU1FXSA9IGV4dGVuc2lvbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXNvbHZlKG5vZGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2J1aWxkQWNjZXNzb3IoYnVmZmVyOiBGbG9hdDMyQXJyYXksIHR5cGU6IEFjY2Vzc29yVHlwZSwgY291bnQ6IG51bWJlciwgYnVmZmVyTWFuYWdlcjogQnVmZmVyTWFuYWdlcik6IG51bWJlciB7XHJcbiAgICAgICAgLy8gYnVpbGQgdGhlIGJ1ZmZlciB2aWV3XHJcbiAgICAgICAgY29uc3QgYnYgPSBidWZmZXJNYW5hZ2VyLmNyZWF0ZUJ1ZmZlclZpZXcoYnVmZmVyKTtcclxuXHJcbiAgICAgICAgLy8gZmluYWxseSBidWlsZCB0aGUgYWNjZXNzb3JcclxuICAgICAgICBjb25zdCBhY2Nlc3NvciA9IGJ1ZmZlck1hbmFnZXIuY3JlYXRlQWNjZXNzb3IoYnYsIHR5cGUsIEFjY2Vzc29yQ29tcG9uZW50VHlwZS5GTE9BVCwgY291bnQpO1xyXG4gICAgICAgIHRoaXMuX2V4cG9ydGVyLl9hY2Nlc3NvcnMucHVzaChhY2Nlc3Nvcik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2V4cG9ydGVyLl9hY2Nlc3NvcnMubGVuZ3RoIC0gMTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xyXG5HTFRGRXhwb3J0ZXIuUmVnaXN0ZXJFeHRlbnNpb24oTkFNRSwgKGV4cG9ydGVyKSA9PiBuZXcgRVhUX21lc2hfZ3B1X2luc3RhbmNpbmcoZXhwb3J0ZXIpKTtcclxuIiwiaW1wb3J0IHR5cGUgeyBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIgfSBmcm9tIFwiLi4vZ2xURkV4cG9ydGVyRXh0ZW5zaW9uXCI7XG5pbXBvcnQgeyBHTFRGRXhwb3J0ZXIgfSBmcm9tIFwiLi4vZ2xURkV4cG9ydGVyXCI7XG5pbXBvcnQgeyBNZXNoUHJpbWl0aXZlTW9kZSB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcbmltcG9ydCB0eXBlIHsgSUFjY2Vzc29yLCBJQnVmZmVyVmlldywgSUtIUkRyYWNvTWVzaENvbXByZXNzaW9uLCBJTWVzaFByaW1pdGl2ZSB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcbmltcG9ydCB0eXBlIHsgQnVmZmVyTWFuYWdlciB9IGZyb20gXCIuLi9idWZmZXJNYW5hZ2VyXCI7XG5pbXBvcnQgeyBEcmFjb0VuY29kZXIgfSBmcm9tIFwiY29yZS9NZXNoZXMvQ29tcHJlc3Npb24vZHJhY29FbmNvZGVyXCI7XG5pbXBvcnQgeyBHZXRUeXBlZEFycmF5RGF0YSwgR2V0VHlwZUJ5dGVMZW5ndGggfSBmcm9tIFwiY29yZS9CdWZmZXJzL2J1ZmZlclV0aWxzXCI7XG5pbXBvcnQgeyBHZXRBY2Nlc3NvckVsZW1lbnRDb3VudCB9IGZyb20gXCIuLi9nbFRGVXRpbGl0aWVzXCI7XG5pbXBvcnQgdHlwZSB7IERyYWNvQXR0cmlidXRlTmFtZSwgSURyYWNvQXR0cmlidXRlRGF0YSwgSURyYWNvRW5jb2Rlck9wdGlvbnMgfSBmcm9tIFwiY29yZS9NZXNoZXMvQ29tcHJlc3Npb24vZHJhY29FbmNvZGVyLnR5cGVzXCI7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiY29yZS9NaXNjL2xvZ2dlclwiO1xuaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCJjb3JlL3R5cGVzXCI7XG5cbmNvbnN0IE5BTUUgPSBcIktIUl9kcmFjb19tZXNoX2NvbXByZXNzaW9uXCI7XG5cbmZ1bmN0aW9uIGdldERyYWNvQXR0cmlidXRlTmFtZShnbFRGTmFtZTogc3RyaW5nKTogRHJhY29BdHRyaWJ1dGVOYW1lIHtcbiAgICBpZiAoZ2xURk5hbWUgPT09IFwiUE9TSVRJT05cIikge1xuICAgICAgICByZXR1cm4gXCJQT1NJVElPTlwiO1xuICAgIH0gZWxzZSBpZiAoZ2xURk5hbWUgPT09IFwiTk9STUFMXCIpIHtcbiAgICAgICAgcmV0dXJuIFwiTk9STUFMXCI7XG4gICAgfSBlbHNlIGlmIChnbFRGTmFtZS5zdGFydHNXaXRoKFwiQ09MT1JcIikpIHtcbiAgICAgICAgcmV0dXJuIFwiQ09MT1JcIjtcbiAgICB9IGVsc2UgaWYgKGdsVEZOYW1lLnN0YXJ0c1dpdGgoXCJURVhDT09SRFwiKSkge1xuICAgICAgICByZXR1cm4gXCJURVhfQ09PUkRcIjtcbiAgICB9XG4gICAgcmV0dXJuIFwiR0VORVJJQ1wiO1xufVxuXG4vKipcbiAqIFtTcGVjaWZpY2F0aW9uXShodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi9tYWluL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX2RyYWNvX21lc2hfY29tcHJlc3Npb24vUkVBRE1FLm1kKVxuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXG5leHBvcnQgY2xhc3MgS0hSX2RyYWNvX21lc2hfY29tcHJlc3Npb24gaW1wbGVtZW50cyBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIge1xuICAgIC8qKiBOYW1lIG9mIHRoaXMgZXh0ZW5zaW9uICovXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBOQU1FO1xuXG4gICAgLyoqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyBlbmFibGVkICovXG4gICAgcHVibGljIGVuYWJsZWQ7XG5cbiAgICAvKiogS0hSX2RyYWNvX21lc2hfY29tcHJlc3Npb24gaXMgcmVxdWlyZWQsIGFzIHVuY29tcHJlc3NlZCBmYWxsYmFjayBkYXRhIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWQuICovXG4gICAgcHVibGljIHJlcXVpcmVkID0gdHJ1ZTtcblxuICAgIC8qKiBCdWZmZXJWaWV3cyB1c2VkIGZvciBEcmFjbyBkYXRhLCB3aGljaCBtYXkgYmUgZWxpZ2libGUgZm9yIHJlbW92YWwgYWZ0ZXIgRHJhY28gZW5jb2RpbmcgKi9cbiAgICBwcml2YXRlIF9idWZmZXJWaWV3c1VzZWQ6IFNldDxJQnVmZmVyVmlldz4gPSBuZXcgU2V0KCk7XG5cbiAgICAvKiogQWNjZXNzb3JzIHRoYXQgd2VyZSByZXBsYWNlZCB3aXRoIERyYWNvIGRhdGEsIHdoaWNoIG1heSBiZSBlbGlnaWJsZSBmb3IgcmVtb3ZhbCBhZnRlciBEcmFjbyBlbmNvZGluZyAqL1xuICAgIHByaXZhdGUgX2FjY2Vzc29yc1VzZWQ6IFNldDxJQWNjZXNzb3I+ID0gbmV3IFNldCgpO1xuXG4gICAgLyoqIFByb21pc2UgcG9vbCBmb3IgRHJhY28gZW5jb2Rpbmcgd29yayAqL1xuICAgIHByaXZhdGUgX2VuY29kZVByb21pc2VzOiBQcm9taXNlPHZvaWQ+W10gPSBbXTtcblxuICAgIHByaXZhdGUgX3dhc1VzZWQgPSBmYWxzZTtcblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZ2V0IHdhc1VzZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl93YXNVc2VkO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBjb25zdHJ1Y3RvcihleHBvcnRlcjogR0xURkV4cG9ydGVyKSB7XG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IGV4cG9ydGVyLm9wdGlvbnMubWVzaENvbXByZXNzaW9uTWV0aG9kID09PSBcIkRyYWNvXCIgJiYgRHJhY29FbmNvZGVyLkRlZmF1bHRBdmFpbGFibGU7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBkaXNwb3NlKCkge31cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgcG9zdEV4cG9ydE1lc2hQcmltaXRpdmUocHJpbWl0aXZlOiBJTWVzaFByaW1pdGl2ZSwgYnVmZmVyTWFuYWdlcjogQnVmZmVyTWFuYWdlciwgYWNjZXNzb3JzOiBJQWNjZXNzb3JbXSk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByaW1pdGl2ZS5tb2RlICE9PSBNZXNoUHJpbWl0aXZlTW9kZS5UUklBTkdMRVMgJiYgcHJpbWl0aXZlLm1vZGUgIT09IE1lc2hQcmltaXRpdmVNb2RlLlRSSUFOR0xFX1NUUklQKSB7XG4gICAgICAgICAgICBMb2dnZXIuV2FybihcIkNhbm5vdCBjb21wcmVzcyBwcmltaXRpdmUgd2l0aCBtb2RlIFwiICsgcHJpbWl0aXZlLm1vZGUgKyBcIi5cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDb2xsZWN0IGJ1ZmZlclZpZXdzIGFuZCBhY2Nlc3NvcnMgdXNlZCBieSB0aGlzIHByaW1pdGl2ZVxuICAgICAgICBjb25zdCBwcmltaXRpdmVCdWZmZXJWaWV3czogSUJ1ZmZlclZpZXdbXSA9IFtdO1xuICAgICAgICBjb25zdCBwcmltaXRpdmVBY2Nlc3NvcnM6IElBY2Nlc3NvcltdID0gW107XG5cbiAgICAgICAgLy8gUHJlcGFyZSBpbmRpY2VzIGZvciBEcmFjbyBlbmNvZGluZ1xuICAgICAgICBsZXQgaW5kaWNlczogTnVsbGFibGU8VWludDMyQXJyYXkgfCBVaW50MTZBcnJheT4gPSBudWxsO1xuICAgICAgICBpZiAocHJpbWl0aXZlLmluZGljZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc3QgYWNjZXNzb3IgPSBhY2Nlc3NvcnNbcHJpbWl0aXZlLmluZGljZXNdO1xuICAgICAgICAgICAgY29uc3QgYnVmZmVyVmlldyA9IGJ1ZmZlck1hbmFnZXIuZ2V0QnVmZmVyVmlldyhhY2Nlc3Nvcik7XG4gICAgICAgICAgICAvLyBQZXIgZXhwb3J0SW5kaWNlcywgaW5kaWNlcyBtdXN0IGJlIGVpdGhlciBVaW50MTZBcnJheSBvciBVaW50MzJBcnJheVxuICAgICAgICAgICAgaW5kaWNlcyA9IGJ1ZmZlck1hbmFnZXIuZ2V0RGF0YShidWZmZXJWaWV3KS5zbGljZSgpIGFzIFVpbnQzMkFycmF5IHwgVWludDE2QXJyYXk7XG5cbiAgICAgICAgICAgIHByaW1pdGl2ZUJ1ZmZlclZpZXdzLnB1c2goYnVmZmVyVmlldyk7XG4gICAgICAgICAgICBwcmltaXRpdmVBY2Nlc3NvcnMucHVzaChhY2Nlc3Nvcik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQcmVwYXJlIGF0dHJpYnV0ZXMgZm9yIERyYWNvIGVuY29kaW5nXG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZXM6IElEcmFjb0F0dHJpYnV0ZURhdGFbXSA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IFtuYW1lLCBhY2Nlc3NvckluZGV4XSBvZiBPYmplY3QuZW50cmllcyhwcmltaXRpdmUuYXR0cmlidXRlcykpIHtcbiAgICAgICAgICAgIGNvbnN0IGFjY2Vzc29yID0gYWNjZXNzb3JzW2FjY2Vzc29ySW5kZXhdO1xuICAgICAgICAgICAgY29uc3QgYnVmZmVyVmlldyA9IGJ1ZmZlck1hbmFnZXIuZ2V0QnVmZmVyVmlldyhhY2Nlc3Nvcik7XG5cbiAgICAgICAgICAgIGNvbnN0IHNpemUgPSBHZXRBY2Nlc3NvckVsZW1lbnRDb3VudChhY2Nlc3Nvci50eXBlKTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBHZXRUeXBlZEFycmF5RGF0YShcbiAgICAgICAgICAgICAgICBidWZmZXJNYW5hZ2VyLmdldERhdGEoYnVmZmVyVmlldyksXG4gICAgICAgICAgICAgICAgc2l6ZSxcbiAgICAgICAgICAgICAgICBhY2Nlc3Nvci5jb21wb25lbnRUeXBlLFxuICAgICAgICAgICAgICAgIGFjY2Vzc29yLmJ5dGVPZmZzZXQgfHwgMCxcbiAgICAgICAgICAgICAgICBidWZmZXJWaWV3LmJ5dGVTdHJpZGUgfHwgR2V0VHlwZUJ5dGVMZW5ndGgoYWNjZXNzb3IuY29tcG9uZW50VHlwZSkgKiBzaXplLFxuICAgICAgICAgICAgICAgIGFjY2Vzc29yLm5vcm1hbGl6ZWQgfHwgZmFsc2UsXG4gICAgICAgICAgICAgICAgYWNjZXNzb3IuY291bnQsXG4gICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgYXR0cmlidXRlcy5wdXNoKHsga2luZDogbmFtZSwgZHJhY29OYW1lOiBnZXREcmFjb0F0dHJpYnV0ZU5hbWUobmFtZSksIHNpemU6IEdldEFjY2Vzc29yRWxlbWVudENvdW50KGFjY2Vzc29yLnR5cGUpLCBkYXRhOiBkYXRhIH0pO1xuXG4gICAgICAgICAgICBwcmltaXRpdmVCdWZmZXJWaWV3cy5wdXNoKGJ1ZmZlclZpZXcpO1xuICAgICAgICAgICAgcHJpbWl0aXZlQWNjZXNzb3JzLnB1c2goYWNjZXNzb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXNlIHNlcXVlbnRpYWwgZW5jb2RpbmcgdG8gcHJlc2VydmUgdmVydGV4IG9yZGVyIGZvciBjYXNlcyBsaWtlIG1vcnBoIHRhcmdldHNcbiAgICAgICAgY29uc3Qgb3B0aW9uczogSURyYWNvRW5jb2Rlck9wdGlvbnMgPSB7XG4gICAgICAgICAgICBtZXRob2Q6IHByaW1pdGl2ZS50YXJnZXRzID8gXCJNRVNIX1NFUVVFTlRJQUxfRU5DT0RJTkdcIiA6IFwiTUVTSF9FREdFQlJFQUtFUl9FTkNPRElOR1wiLFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBEcmFjb0VuY29kZXIuRGVmYXVsdC5fZW5jb2RlQXN5bmMoYXR0cmlidXRlcywgaW5kaWNlcywgb3B0aW9ucylcbiAgICAgICAgICAgIC50aGVuKChlbmNvZGVkRGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghZW5jb2RlZERhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nZ2VyLkVycm9yKFwiRHJhY28gZW5jb2RpbmcgZmFpbGVkIGZvciBwcmltaXRpdmUuXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgZHJhY29JbmZvOiBJS0hSRHJhY29NZXNoQ29tcHJlc3Npb24gPSB7XG4gICAgICAgICAgICAgICAgICAgIGJ1ZmZlclZpZXc6IC0xLCAvLyBidWZmZXJWaWV3IHdpbGwgYmUgc2V0IHRvIGEgcmVhbCBpbmRleCBsYXRlciwgd2hlbiB3ZSB3cml0ZSB0aGUgYmluYXJ5IGFuZCBkZWNpZGUgYnVmZmVyVmlldyBvcmRlcmluZ1xuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBlbmNvZGVkRGF0YS5hdHRyaWJ1dGVJRHMsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBjb25zdCBidWZmZXJWaWV3ID0gYnVmZmVyTWFuYWdlci5jcmVhdGVCdWZmZXJWaWV3KGVuY29kZWREYXRhLmRhdGEpO1xuICAgICAgICAgICAgICAgIGJ1ZmZlck1hbmFnZXIuc2V0QnVmZmVyVmlldyhkcmFjb0luZm8sIGJ1ZmZlclZpZXcpO1xuXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBidWZmZXJWaWV3IG9mIHByaW1pdGl2ZUJ1ZmZlclZpZXdzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2J1ZmZlclZpZXdzVXNlZC5hZGQoYnVmZmVyVmlldyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYWNjZXNzb3Igb2YgcHJpbWl0aXZlQWNjZXNzb3JzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2FjY2Vzc29yc1VzZWQuYWRkKGFjY2Vzc29yKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwcmltaXRpdmUuZXh0ZW5zaW9ucyB8fD0ge307XG4gICAgICAgICAgICAgICAgcHJpbWl0aXZlLmV4dGVuc2lvbnNbTkFNRV0gPSBkcmFjb0luZm87XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIExvZ2dlci5FcnJvcihcIkRyYWNvIGVuY29kaW5nIGZhaWxlZCBmb3IgcHJpbWl0aXZlOiBcIiArIGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX2VuY29kZVByb21pc2VzLnB1c2gocHJvbWlzZSk7XG5cbiAgICAgICAgdGhpcy5fd2FzVXNlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBhc3luYyBwcmVHZW5lcmF0ZUJpbmFyeUFzeW5jKGJ1ZmZlck1hbmFnZXI6IEJ1ZmZlck1hbmFnZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKHRoaXMuX2VuY29kZVByb21pc2VzKTtcblxuICAgICAgICAvLyBDdWxsIG9ic29sZXRlIGJ1ZmZlclZpZXdzIHRoYXQgd2VyZSByZXBsYWNlZCB3aXRoIERyYWNvIGRhdGFcbiAgICAgICAgdGhpcy5fYnVmZmVyVmlld3NVc2VkLmZvckVhY2goKGJ1ZmZlclZpZXcpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlZmVyZW5jZXMgPSBidWZmZXJNYW5hZ2VyLmdldFByb3BlcnRpZXNXaXRoQnVmZmVyVmlldyhidWZmZXJWaWV3KTtcbiAgICAgICAgICAgIGNvbnN0IG9ubHlVc2VkQnlFbmNvZGVkUHJpbWl0aXZlcyA9IHJlZmVyZW5jZXMuZXZlcnkoKG9iamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9hY2Nlc3NvcnNVc2VkLmhhcyhvYmplY3QgYXMgSUFjY2Vzc29yKTsgLy8gaGFzKCkgY2FuIGhhbmRsZSBhbnkgb2JqZWN0LCBidXQgVFMgZG9lc24ndCBrbm93IHRoYXRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKG9ubHlVc2VkQnlFbmNvZGVkUHJpbWl0aXZlcykge1xuICAgICAgICAgICAgICAgIGJ1ZmZlck1hbmFnZXIucmVtb3ZlQnVmZmVyVmlldyhidWZmZXJWaWV3KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5fYnVmZmVyVmlld3NVc2VkLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuX2FjY2Vzc29yc1VzZWQuY2xlYXIoKTtcbiAgICB9XG59XG5cbkdMVEZFeHBvcnRlci5SZWdpc3RlckV4dGVuc2lvbihOQU1FLCAoZXhwb3J0ZXIpID0+IG5ldyBLSFJfZHJhY29fbWVzaF9jb21wcmVzc2lvbihleHBvcnRlcikpO1xuIiwiaW1wb3J0IHR5cGUgeyBTcG90TGlnaHQgfSBmcm9tIFwiY29yZS9MaWdodHMvc3BvdExpZ2h0XCI7XHJcbmltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xyXG5pbXBvcnQgeyBWZWN0b3IzLCBRdWF0ZXJuaW9uLCBUbXBWZWN0b3JzIH0gZnJvbSBcImNvcmUvTWF0aHMvbWF0aC52ZWN0b3JcIjtcclxuaW1wb3J0IHsgTGlnaHQgfSBmcm9tIFwiY29yZS9MaWdodHMvbGlnaHRcIjtcclxuaW1wb3J0IHR5cGUgeyBOb2RlIH0gZnJvbSBcImNvcmUvbm9kZVwiO1xyXG5pbXBvcnQgeyBTaGFkb3dMaWdodCB9IGZyb20gXCJjb3JlL0xpZ2h0cy9zaGFkb3dMaWdodFwiO1xyXG5pbXBvcnQgdHlwZSB7IElOb2RlLCBJS0hSTGlnaHRzUHVuY3R1YWxfTGlnaHRSZWZlcmVuY2UsIElLSFJMaWdodHNQdW5jdHVhbF9MaWdodCwgSUtIUkxpZ2h0c1B1bmN0dWFsIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBLSFJMaWdodHNQdW5jdHVhbF9MaWdodFR5cGUgfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB0eXBlIHsgSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyIH0gZnJvbSBcIi4uL2dsVEZFeHBvcnRlckV4dGVuc2lvblwiO1xyXG5pbXBvcnQgeyBHTFRGRXhwb3J0ZXIgfSBmcm9tIFwiLi4vZ2xURkV4cG9ydGVyXCI7XHJcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gXCJjb3JlL01pc2MvbG9nZ2VyXCI7XHJcbmltcG9ydCB7IENvbnZlcnRUb1JpZ2h0SGFuZGVkUG9zaXRpb24sIE9taXREZWZhdWx0VmFsdWVzLCBDb2xsYXBzZVBhcmVudE5vZGUsIElzUGFyZW50QWRkZWRCeUltcG9ydGVyIH0gZnJvbSBcIi4uL2dsVEZVdGlsaXRpZXNcIjtcclxuXHJcbmNvbnN0IE5BTUUgPSBcIktIUl9saWdodHNfcHVuY3R1YWxcIjtcclxuY29uc3QgREVGQVVMVFM6IE9taXQ8SUtIUkxpZ2h0c1B1bmN0dWFsX0xpZ2h0LCBcInR5cGVcIj4gPSB7XHJcbiAgICBuYW1lOiBcIlwiLFxyXG4gICAgY29sb3I6IFsxLCAxLCAxXSxcclxuICAgIGludGVuc2l0eTogMSxcclxuICAgIHJhbmdlOiBOdW1iZXIuTUFYX1ZBTFVFLFxyXG59O1xyXG5jb25zdCBTUE9UREVGQVVMVFM6IE5vbk51bGxhYmxlPElLSFJMaWdodHNQdW5jdHVhbF9MaWdodFtcInNwb3RcIl0+ID0ge1xyXG4gICAgaW5uZXJDb25lQW5nbGU6IDAsXHJcbiAgICBvdXRlckNvbmVBbmdsZTogTWF0aC5QSSAvIDQuMCxcclxufTtcclxuY29uc3QgTElHSFRESVJFQ1RJT04gPSBWZWN0b3IzLkJhY2t3YXJkKCk7XHJcblxyXG4vKipcclxuICogW1NwZWNpZmljYXRpb25dKGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9ibG9iL21hc3Rlci9leHRlbnNpb25zLzIuMC9LaHJvbm9zL0tIUl9saWdodHNfcHVuY3R1YWwvUkVBRE1FLm1kKVxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgY2xhc3MgS0hSX2xpZ2h0c19wdW5jdHVhbCBpbXBsZW1lbnRzIElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMiB7XHJcbiAgICAvKiogVGhlIG5hbWUgb2YgdGhpcyBleHRlbnNpb24uICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZSA9IE5BTUU7XHJcblxyXG4gICAgLyoqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyBlbmFibGVkLiAqL1xyXG4gICAgcHVibGljIGVuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgIC8qKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgcmVxdWlyZWQgKi9cclxuICAgIHB1YmxpYyByZXF1aXJlZCA9IGZhbHNlO1xyXG5cclxuICAgIC8qKiBSZWZlcmVuY2UgdG8gdGhlIGdsVEYgZXhwb3J0ZXIgKi9cclxuICAgIHByaXZhdGUgX2V4cG9ydGVyOiBHTFRGRXhwb3J0ZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBfbGlnaHRzOiBJS0hSTGlnaHRzUHVuY3R1YWw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoZXhwb3J0ZXI6IEdMVEZFeHBvcnRlcikge1xyXG4gICAgICAgIHRoaXMuX2V4cG9ydGVyID0gZXhwb3J0ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgKHRoaXMuX2xpZ2h0cyBhcyBhbnkpID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgZ2V0IHdhc1VzZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fbGlnaHRzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBvbkV4cG9ydGluZygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9leHBvcnRlciEuX2dsVEYuZXh0ZW5zaW9ucyFbTkFNRV0gPSB0aGlzLl9saWdodHM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIERlZmluZSB0aGlzIG1ldGhvZCB0byBtb2RpZnkgdGhlIGRlZmF1bHQgYmVoYXZpb3Igd2hlbiBleHBvcnRpbmcgYSBub2RlXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBUaGUgY29udGV4dCB3aGVuIGV4cG9ydGluZyB0aGUgbm9kZVxyXG4gICAgICogQHBhcmFtIG5vZGUgZ2xURiBub2RlXHJcbiAgICAgKiBAcGFyYW0gYmFieWxvbk5vZGUgQmFieWxvbkpTIG5vZGVcclxuICAgICAqIEBwYXJhbSBub2RlTWFwIE5vZGUgbWFwcGluZyBvZiBiYWJ5bG9uIG5vZGUgdG8gZ2xURiBub2RlIGluZGV4XHJcbiAgICAgKiBAcGFyYW0gY29udmVydFRvUmlnaHRIYW5kZWQgRmxhZyB0byBjb252ZXJ0IHRoZSB2YWx1ZXMgdG8gcmlnaHQtaGFuZGVkXHJcbiAgICAgKiBAcmV0dXJucyBudWxsYWJsZSBJTm9kZSBwcm9taXNlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwb3N0RXhwb3J0Tm9kZUFzeW5jKGNvbnRleHQ6IHN0cmluZywgbm9kZTogSU5vZGUsIGJhYnlsb25Ob2RlOiBOb2RlLCBub2RlTWFwOiBNYXA8Tm9kZSwgbnVtYmVyPiwgY29udmVydFRvUmlnaHRIYW5kZWQ6IGJvb2xlYW4pOiBQcm9taXNlPE51bGxhYmxlPElOb2RlPj4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIShiYWJ5bG9uTm9kZSBpbnN0YW5jZW9mIFNoYWRvd0xpZ2h0KSkge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShub2RlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgbGlnaHRUeXBlID1cclxuICAgICAgICAgICAgICAgIGJhYnlsb25Ob2RlLmdldFR5cGVJRCgpID09IExpZ2h0LkxJR0hUVFlQRUlEX1BPSU5UTElHSFRcclxuICAgICAgICAgICAgICAgICAgICA/IEtIUkxpZ2h0c1B1bmN0dWFsX0xpZ2h0VHlwZS5QT0lOVFxyXG4gICAgICAgICAgICAgICAgICAgIDogYmFieWxvbk5vZGUuZ2V0VHlwZUlEKCkgPT0gTGlnaHQuTElHSFRUWVBFSURfRElSRUNUSU9OQUxMSUdIVFxyXG4gICAgICAgICAgICAgICAgICAgICAgPyBLSFJMaWdodHNQdW5jdHVhbF9MaWdodFR5cGUuRElSRUNUSU9OQUxcclxuICAgICAgICAgICAgICAgICAgICAgIDogYmFieWxvbk5vZGUuZ2V0VHlwZUlEKCkgPT0gTGlnaHQuTElHSFRUWVBFSURfU1BPVExJR0hUXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gS0hSTGlnaHRzUHVuY3R1YWxfTGlnaHRUeXBlLlNQT1RcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsO1xyXG4gICAgICAgICAgICBpZiAoIWxpZ2h0VHlwZSkge1xyXG4gICAgICAgICAgICAgICAgTG9nZ2VyLldhcm4oYCR7Y29udGV4dH06IExpZ2h0ICR7YmFieWxvbk5vZGUubmFtZX0gaXMgbm90IHN1cHBvcnRlZCBpbiAke05BTUV9YCk7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoYmFieWxvbk5vZGUuZmFsbG9mZlR5cGUgIT09IExpZ2h0LkZBTExPRkZfR0xURikge1xyXG4gICAgICAgICAgICAgICAgTG9nZ2VyLldhcm4oYCR7Y29udGV4dH06IExpZ2h0IGZhbGxvZmYgZm9yICR7YmFieWxvbk5vZGUubmFtZX0gZG9lcyBub3QgbWF0Y2ggdGhlICR7TkFNRX0gc3BlY2lmaWNhdGlvbiFgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gU2V0IHRoZSBub2RlJ3MgdHJhbnNsYXRpb24gYW5kIHJvdGF0aW9uIGhlcmUsIHNpbmNlIGxpZ2h0cyBhcmUgbm90IGhhbmRsZWQgaW4gZXhwb3J0Tm9kZUFzeW5jXHJcbiAgICAgICAgICAgIGlmICghYmFieWxvbk5vZGUucG9zaXRpb24uZXF1YWxzVG9GbG9hdHMoMCwgMCwgMCkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zbGF0aW9uID0gVG1wVmVjdG9ycy5WZWN0b3IzWzBdLmNvcHlGcm9tKGJhYnlsb25Ob2RlLnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgIGlmIChjb252ZXJ0VG9SaWdodEhhbmRlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIENvbnZlcnRUb1JpZ2h0SGFuZGVkUG9zaXRpb24odHJhbnNsYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbm9kZS50cmFuc2xhdGlvbiA9IHRyYW5zbGF0aW9uLmFzQXJyYXkoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQmFieWxvbiBsaWdodHMgaGF2ZSBcImNvbnN0YW50XCIgcm90YXRpb24gYW5kIHZhcmlhYmxlIGRpcmVjdGlvbiwgd2hpbGVcclxuICAgICAgICAgICAgLy8gZ2xURiBsaWdodHMgaGF2ZSB2YXJpYWJsZSByb3RhdGlvbiBhbmQgY29uc3RhbnQgZGlyZWN0aW9uLiBUaGVyZWZvcmUsXHJcbiAgICAgICAgICAgIC8vIGNvbXB1dGUgYSBxdWF0ZXJuaW9uIHRoYXQgYWxpZ25zIHRoZSBCYWJ5bG9uIGxpZ2h0J3MgZGlyZWN0aW9uIHdpdGggZ2xURidzIGNvbnN0YW50IG9uZS5cclxuICAgICAgICAgICAgaWYgKGxpZ2h0VHlwZSAhPT0gS0hSTGlnaHRzUHVuY3R1YWxfTGlnaHRUeXBlLlBPSU5UKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBiYWJ5bG9uTm9kZS5kaXJlY3Rpb24ubm9ybWFsaXplVG9SZWYoVG1wVmVjdG9ycy5WZWN0b3IzWzBdKTtcclxuICAgICAgICAgICAgICAgIGlmIChjb252ZXJ0VG9SaWdodEhhbmRlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIENvbnZlcnRUb1JpZ2h0SGFuZGVkUG9zaXRpb24oZGlyZWN0aW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IGFuZ2xlID0gTWF0aC5hY29zKFZlY3RvcjMuRG90KExJR0hURElSRUNUSU9OLCBkaXJlY3Rpb24pKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGF4aXMgPSBWZWN0b3IzLkNyb3NzKExJR0hURElSRUNUSU9OLCBkaXJlY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGlnaHRSb3RhdGlvblF1YXRlcm5pb24gPSBRdWF0ZXJuaW9uLlJvdGF0aW9uQXhpc1RvUmVmKGF4aXMsIGFuZ2xlLCBUbXBWZWN0b3JzLlF1YXRlcm5pb25bMF0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFRdWF0ZXJuaW9uLklzSWRlbnRpdHkobGlnaHRSb3RhdGlvblF1YXRlcm5pb24pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5yb3RhdGlvbiA9IGxpZ2h0Um90YXRpb25RdWF0ZXJuaW9uLmFzQXJyYXkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgbGlnaHQ6IElLSFJMaWdodHNQdW5jdHVhbF9MaWdodCA9IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IGxpZ2h0VHlwZSxcclxuICAgICAgICAgICAgICAgIG5hbWU6IGJhYnlsb25Ob2RlLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogYmFieWxvbk5vZGUuZGlmZnVzZS5hc0FycmF5KCksXHJcbiAgICAgICAgICAgICAgICBpbnRlbnNpdHk6IGJhYnlsb25Ob2RlLmludGVuc2l0eSxcclxuICAgICAgICAgICAgICAgIHJhbmdlOiBiYWJ5bG9uTm9kZS5yYW5nZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgT21pdERlZmF1bHRWYWx1ZXMobGlnaHQsIERFRkFVTFRTKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFNlcGFyYXRlbHkgaGFuZGxlIHRoZSByZXF1aXJlZCAnc3BvdCcgZmllbGQgZm9yIHNwb3QgbGlnaHRzXHJcbiAgICAgICAgICAgIGlmIChsaWdodFR5cGUgPT09IEtIUkxpZ2h0c1B1bmN0dWFsX0xpZ2h0VHlwZS5TUE9UKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBiYWJ5bG9uU3BvdExpZ2h0ID0gYmFieWxvbk5vZGUgYXMgU3BvdExpZ2h0O1xyXG4gICAgICAgICAgICAgICAgbGlnaHQuc3BvdCA9IHtcclxuICAgICAgICAgICAgICAgICAgICBpbm5lckNvbmVBbmdsZTogYmFieWxvblNwb3RMaWdodC5pbm5lckFuZ2xlIC8gMi4wLFxyXG4gICAgICAgICAgICAgICAgICAgIG91dGVyQ29uZUFuZ2xlOiBiYWJ5bG9uU3BvdExpZ2h0LmFuZ2xlIC8gMi4wLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIE9taXREZWZhdWx0VmFsdWVzKGxpZ2h0LnNwb3QsIFNQT1RERUZBVUxUUyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2xpZ2h0cyB8fD0ge1xyXG4gICAgICAgICAgICAgICAgbGlnaHRzOiBbXSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5fbGlnaHRzLmxpZ2h0cy5wdXNoKGxpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGxpZ2h0UmVmZXJlbmNlOiBJS0hSTGlnaHRzUHVuY3R1YWxfTGlnaHRSZWZlcmVuY2UgPSB7XHJcbiAgICAgICAgICAgICAgICBsaWdodDogdGhpcy5fbGlnaHRzLmxpZ2h0cy5sZW5ndGggLSAxLFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLy8gQXNzaWduIHRoZSBsaWdodCB0byBpdHMgcGFyZW50IG5vZGUsIGlmIHBvc3NpYmxlLCB0byBjb25kZW5zZSB0aGUgZ2xURlxyXG4gICAgICAgICAgICAvLyBXaHkgYW5kIHdoZW46IHRoZSBnbFRGIGxvYWRlciBnZW5lcmF0ZXMgYSBuZXcgcGFyZW50IFRyYW5zZm9ybU5vZGUgZm9yIGVhY2ggbGlnaHQgbm9kZSwgd2hpY2ggd2Ugc2hvdWxkIHVuZG8gb24gZXhwb3J0XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudEJhYnlsb25Ob2RlID0gYmFieWxvbk5vZGUucGFyZW50O1xyXG5cclxuICAgICAgICAgICAgaWYgKHBhcmVudEJhYnlsb25Ob2RlICYmIElzUGFyZW50QWRkZWRCeUltcG9ydGVyKGJhYnlsb25Ob2RlLCBwYXJlbnRCYWJ5bG9uTm9kZSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudE5vZGVJbmRleCA9IG5vZGVNYXAuZ2V0KHBhcmVudEJhYnlsb25Ob2RlKTtcclxuICAgICAgICAgICAgICAgIGlmIChwYXJlbnROb2RlSW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBDb21iaW5lIHRoZSBsaWdodCdzIHRyYW5zZm9ybWF0aW9uIHdpdGggdGhlIHBhcmVudCdzXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyZW50Tm9kZSA9IHRoaXMuX2V4cG9ydGVyLl9ub2Rlc1twYXJlbnROb2RlSW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgIENvbGxhcHNlUGFyZW50Tm9kZShub2RlLCBwYXJlbnROb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnROb2RlLmV4dGVuc2lvbnMgfHw9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudE5vZGUuZXh0ZW5zaW9uc1tOQU1FXSA9IGxpZ2h0UmVmZXJlbmNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBEbyBub3QgZXhwb3J0IHRoZSBvcmlnaW5hbCBub2RlXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5vZGUuZXh0ZW5zaW9ucyB8fD0ge307XHJcbiAgICAgICAgICAgIG5vZGUuZXh0ZW5zaW9uc1tOQU1FXSA9IGxpZ2h0UmVmZXJlbmNlO1xyXG4gICAgICAgICAgICByZXNvbHZlKG5vZGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5HTFRGRXhwb3J0ZXIuUmVnaXN0ZXJFeHRlbnNpb24oTkFNRSwgKGV4cG9ydGVyKSA9PiBuZXcgS0hSX2xpZ2h0c19wdW5jdHVhbChleHBvcnRlcikpO1xyXG4iLCJpbXBvcnQgdHlwZSB7IElNYXRlcmlhbCwgSUtIUk1hdGVyaWFsc0FuaXNvdHJvcHkgfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB0eXBlIHsgSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyIH0gZnJvbSBcIi4uL2dsVEZFeHBvcnRlckV4dGVuc2lvblwiO1xyXG5pbXBvcnQgeyBHTFRGRXhwb3J0ZXIgfSBmcm9tIFwiLi4vZ2xURkV4cG9ydGVyXCI7XHJcbmltcG9ydCB0eXBlIHsgTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgUEJSQmFzZU1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1BCUi9wYnJCYXNlTWF0ZXJpYWxcIjtcclxuaW1wb3J0IHR5cGUgeyBCYXNlVGV4dHVyZSB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9UZXh0dXJlcy9iYXNlVGV4dHVyZVwiO1xyXG5cclxuY29uc3QgTkFNRSA9IFwiS0hSX21hdGVyaWFsc19hbmlzb3Ryb3B5XCI7XHJcblxyXG4vKipcclxuICogQGludGVybmFsXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBjbGFzcyBLSFJfbWF0ZXJpYWxzX2FuaXNvdHJvcHkgaW1wbGVtZW50cyBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIge1xyXG4gICAgLyoqIE5hbWUgb2YgdGhpcyBleHRlbnNpb24gKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lID0gTkFNRTtcclxuXHJcbiAgICAvKiogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIGVuYWJsZWQgKi9cclxuICAgIHB1YmxpYyBlbmFibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAvKiogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIHJlcXVpcmVkICovXHJcbiAgICBwdWJsaWMgcmVxdWlyZWQgPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIF9leHBvcnRlcjogR0xURkV4cG9ydGVyO1xyXG5cclxuICAgIHByaXZhdGUgX3dhc1VzZWQgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihleHBvcnRlcjogR0xURkV4cG9ydGVyKSB7XHJcbiAgICAgICAgdGhpcy5fZXhwb3J0ZXIgPSBleHBvcnRlcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHt9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGdldCB3YXNVc2VkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl93YXNVc2VkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwb3N0RXhwb3J0TWF0ZXJpYWxBZGRpdGlvbmFsVGV4dHVyZXM/KGNvbnRleHQ6IHN0cmluZywgbm9kZTogSU1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsKTogQmFzZVRleHR1cmVbXSB7XHJcbiAgICAgICAgY29uc3QgYWRkaXRpb25hbFRleHR1cmVzOiBCYXNlVGV4dHVyZVtdID0gW107XHJcbiAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbCBpbnN0YW5jZW9mIFBCUkJhc2VNYXRlcmlhbCkge1xyXG4gICAgICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsLmFuaXNvdHJvcHkuaXNFbmFibGVkICYmICFiYWJ5bG9uTWF0ZXJpYWwuYW5pc290cm9weS5sZWdhY3kpIHtcclxuICAgICAgICAgICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwuYW5pc290cm9weS50ZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkaXRpb25hbFRleHR1cmVzLnB1c2goYmFieWxvbk1hdGVyaWFsLmFuaXNvdHJvcHkudGV4dHVyZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYWRkaXRpb25hbFRleHR1cmVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBvc3RFeHBvcnRNYXRlcmlhbEFzeW5jPyhjb250ZXh0OiBzdHJpbmcsIG5vZGU6IElNYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCk6IFByb21pc2U8SU1hdGVyaWFsPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwgaW5zdGFuY2VvZiBQQlJCYXNlTWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgICAgIGlmICghYmFieWxvbk1hdGVyaWFsLmFuaXNvdHJvcHkuaXNFbmFibGVkIHx8IGJhYnlsb25NYXRlcmlhbC5hbmlzb3Ryb3B5LmxlZ2FjeSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUobm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX3dhc1VzZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIG5vZGUuZXh0ZW5zaW9ucyA9IG5vZGUuZXh0ZW5zaW9ucyB8fCB7fTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBhbmlzb3Ryb3B5VGV4dHVyZUluZm8gPSB0aGlzLl9leHBvcnRlci5fbWF0ZXJpYWxFeHBvcnRlci5nZXRUZXh0dXJlSW5mbyhiYWJ5bG9uTWF0ZXJpYWwuYW5pc290cm9weS50ZXh0dXJlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBhbmlzb3Ryb3B5SW5mbzogSUtIUk1hdGVyaWFsc0FuaXNvdHJvcHkgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pc290cm9weVN0cmVuZ3RoOiBiYWJ5bG9uTWF0ZXJpYWwuYW5pc290cm9weS5pbnRlbnNpdHksXHJcbiAgICAgICAgICAgICAgICAgICAgYW5pc290cm9weVJvdGF0aW9uOiBiYWJ5bG9uTWF0ZXJpYWwuYW5pc290cm9weS5hbmdsZSxcclxuICAgICAgICAgICAgICAgICAgICBhbmlzb3Ryb3B5VGV4dHVyZTogYW5pc290cm9weVRleHR1cmVJbmZvID8/IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGFuaXNvdHJvcHlJbmZvLmFuaXNvdHJvcHlUZXh0dXJlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXhwb3J0ZXIuX21hdGVyaWFsTmVlZHNVVnNTZXQuYWRkKGJhYnlsb25NYXRlcmlhbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbm9kZS5leHRlbnNpb25zW05BTUVdID0gYW5pc290cm9weUluZm87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzb2x2ZShub2RlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuR0xURkV4cG9ydGVyLlJlZ2lzdGVyRXh0ZW5zaW9uKE5BTUUsIChleHBvcnRlcikgPT4gbmV3IEtIUl9tYXRlcmlhbHNfYW5pc290cm9weShleHBvcnRlcikpO1xyXG4iLCJpbXBvcnQgdHlwZSB7IElNYXRlcmlhbCwgSUtIUk1hdGVyaWFsc0NsZWFyY29hdCB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHR5cGUgeyBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIgfSBmcm9tIFwiLi4vZ2xURkV4cG9ydGVyRXh0ZW5zaW9uXCI7XHJcbmltcG9ydCB7IEdMVEZFeHBvcnRlciB9IGZyb20gXCIuLi9nbFRGRXhwb3J0ZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBQQlJCYXNlTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvUEJSL3BickJhc2VNYXRlcmlhbFwiO1xyXG5pbXBvcnQgdHlwZSB7IEJhc2VUZXh0dXJlIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1RleHR1cmVzL2Jhc2VUZXh0dXJlXCI7XHJcblxyXG5pbXBvcnQgeyBUb29scyB9IGZyb20gXCJjb3JlL01pc2MvdG9vbHNcIjtcclxuXHJcbmNvbnN0IE5BTUUgPSBcIktIUl9tYXRlcmlhbHNfY2xlYXJjb2F0XCI7XHJcblxyXG4vKipcclxuICogQGludGVybmFsXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBjbGFzcyBLSFJfbWF0ZXJpYWxzX2NsZWFyY29hdCBpbXBsZW1lbnRzIElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMiB7XHJcbiAgICAvKiogTmFtZSBvZiB0aGlzIGV4dGVuc2lvbiAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBOQU1FO1xyXG5cclxuICAgIC8qKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgZW5hYmxlZCAqL1xyXG4gICAgcHVibGljIGVuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgIC8qKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgcmVxdWlyZWQgKi9cclxuICAgIHB1YmxpYyByZXF1aXJlZCA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgX2V4cG9ydGVyOiBHTFRGRXhwb3J0ZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBfd2FzVXNlZCA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGV4cG9ydGVyOiBHTFRGRXhwb3J0ZXIpIHtcclxuICAgICAgICB0aGlzLl9leHBvcnRlciA9IGV4cG9ydGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge31cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgZ2V0IHdhc1VzZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dhc1VzZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBvc3RFeHBvcnRNYXRlcmlhbEFkZGl0aW9uYWxUZXh0dXJlcz8oY29udGV4dDogc3RyaW5nLCBub2RlOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBCYXNlVGV4dHVyZVtdIHtcclxuICAgICAgICBjb25zdCBhZGRpdGlvbmFsVGV4dHVyZXM6IEJhc2VUZXh0dXJlW10gPSBbXTtcclxuICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsIGluc3RhbmNlb2YgUEJSQmFzZU1hdGVyaWFsKSB7XHJcbiAgICAgICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwuY2xlYXJDb2F0LmlzRW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbC5jbGVhckNvYXQudGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZGl0aW9uYWxUZXh0dXJlcy5wdXNoKGJhYnlsb25NYXRlcmlhbC5jbGVhckNvYXQudGV4dHVyZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIWJhYnlsb25NYXRlcmlhbC5jbGVhckNvYXQudXNlUm91Z2huZXNzRnJvbU1haW5UZXh0dXJlICYmIGJhYnlsb25NYXRlcmlhbC5jbGVhckNvYXQudGV4dHVyZVJvdWdobmVzcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZGl0aW9uYWxUZXh0dXJlcy5wdXNoKGJhYnlsb25NYXRlcmlhbC5jbGVhckNvYXQudGV4dHVyZVJvdWdobmVzcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsLmNsZWFyQ29hdC5idW1wVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZGl0aW9uYWxUZXh0dXJlcy5wdXNoKGJhYnlsb25NYXRlcmlhbC5jbGVhckNvYXQuYnVtcFRleHR1cmUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFkZGl0aW9uYWxUZXh0dXJlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwb3N0RXhwb3J0TWF0ZXJpYWxBc3luYz8oY29udGV4dDogc3RyaW5nLCBub2RlOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBQcm9taXNlPElNYXRlcmlhbD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsIGluc3RhbmNlb2YgUEJSQmFzZU1hdGVyaWFsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWJhYnlsb25NYXRlcmlhbC5jbGVhckNvYXQuaXNFbmFibGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShub2RlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5fd2FzVXNlZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgbm9kZS5leHRlbnNpb25zID0gbm9kZS5leHRlbnNpb25zIHx8IHt9O1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGNsZWFyQ29hdFRleHR1cmVJbmZvID0gdGhpcy5fZXhwb3J0ZXIuX21hdGVyaWFsRXhwb3J0ZXIuZ2V0VGV4dHVyZUluZm8oYmFieWxvbk1hdGVyaWFsLmNsZWFyQ29hdC50ZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgIGxldCBjbGVhckNvYXRUZXh0dXJlUm91Z2huZXNzSW5mbztcclxuICAgICAgICAgICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwuY2xlYXJDb2F0LnVzZVJvdWdobmVzc0Zyb21NYWluVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyQ29hdFRleHR1cmVSb3VnaG5lc3NJbmZvID0gdGhpcy5fZXhwb3J0ZXIuX21hdGVyaWFsRXhwb3J0ZXIuZ2V0VGV4dHVyZUluZm8oYmFieWxvbk1hdGVyaWFsLmNsZWFyQ29hdC50ZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJDb2F0VGV4dHVyZVJvdWdobmVzc0luZm8gPSB0aGlzLl9leHBvcnRlci5fbWF0ZXJpYWxFeHBvcnRlci5nZXRUZXh0dXJlSW5mbyhiYWJ5bG9uTWF0ZXJpYWwuY2xlYXJDb2F0LnRleHR1cmVSb3VnaG5lc3MpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwuY2xlYXJDb2F0LmlzVGludEVuYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBUb29scy5XYXJuKGBDbGVhciBDb2xvciB0aW50IGlzIG5vdCBzdXBwb3J0ZWQgZm9yIGdsVEYgZXhwb3J0LiBJZ25vcmluZyBmb3I6ICR7YmFieWxvbk1hdGVyaWFsLm5hbWV9YCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbC5jbGVhckNvYXQucmVtYXBGME9uSW50ZXJmYWNlQ2hhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgVG9vbHMuV2FybihgQ2xlYXIgQ29sb3IgRjAgcmVtYXBwaW5nIGlzIG5vdCBzdXBwb3J0ZWQgZm9yIGdsVEYgZXhwb3J0LiBJZ25vcmluZyBmb3I6ICR7YmFieWxvbk1hdGVyaWFsLm5hbWV9YCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgY2xlYXJDb2F0Tm9ybWFsVGV4dHVyZUluZm8gPSB0aGlzLl9leHBvcnRlci5fbWF0ZXJpYWxFeHBvcnRlci5nZXRUZXh0dXJlSW5mbyhiYWJ5bG9uTWF0ZXJpYWwuY2xlYXJDb2F0LmJ1bXBUZXh0dXJlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjbGVhckNvYXRJbmZvOiBJS0hSTWF0ZXJpYWxzQ2xlYXJjb2F0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyY29hdEZhY3RvcjogYmFieWxvbk1hdGVyaWFsLmNsZWFyQ29hdC5pbnRlbnNpdHksXHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJjb2F0VGV4dHVyZTogY2xlYXJDb2F0VGV4dHVyZUluZm8gPz8gdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyY29hdFJvdWdobmVzc0ZhY3RvcjogYmFieWxvbk1hdGVyaWFsLmNsZWFyQ29hdC5yb3VnaG5lc3MsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJjb2F0Um91Z2huZXNzVGV4dHVyZTogY2xlYXJDb2F0VGV4dHVyZVJvdWdobmVzc0luZm8gPz8gdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyY29hdE5vcm1hbFRleHR1cmU6IGNsZWFyQ29hdE5vcm1hbFRleHR1cmVJbmZvID8/IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNsZWFyQ29hdEluZm8uY2xlYXJjb2F0VGV4dHVyZSAhPT0gbnVsbCB8fCBjbGVhckNvYXRJbmZvLmNsZWFyY29hdFJvdWdobmVzc1RleHR1cmUgIT09IG51bGwgfHwgY2xlYXJDb2F0SW5mby5jbGVhcmNvYXRSb3VnaG5lc3NUZXh0dXJlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXhwb3J0ZXIuX21hdGVyaWFsTmVlZHNVVnNTZXQuYWRkKGJhYnlsb25NYXRlcmlhbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbm9kZS5leHRlbnNpb25zW05BTUVdID0gY2xlYXJDb2F0SW5mbztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXNvbHZlKG5vZGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5HTFRGRXhwb3J0ZXIuUmVnaXN0ZXJFeHRlbnNpb24oTkFNRSwgKGV4cG9ydGVyKSA9PiBuZXcgS0hSX21hdGVyaWFsc19jbGVhcmNvYXQoZXhwb3J0ZXIpKTtcclxuIiwiaW1wb3J0IHR5cGUgeyBJTWF0ZXJpYWwsIElLSFJNYXRlcmlhbHNEaWZmdXNlVHJhbnNtaXNzaW9uIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgdHlwZSB7IElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMiB9IGZyb20gXCIuLi9nbFRGRXhwb3J0ZXJFeHRlbnNpb25cIjtcclxuaW1wb3J0IHsgR0xURkV4cG9ydGVyIH0gZnJvbSBcIi4uL2dsVEZFeHBvcnRlclwiO1xyXG5pbXBvcnQgdHlwZSB7IE1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IFBCUk1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1BCUi9wYnJNYXRlcmlhbFwiO1xyXG5pbXBvcnQgdHlwZSB7IEJhc2VUZXh0dXJlIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1RleHR1cmVzL2Jhc2VUZXh0dXJlXCI7XHJcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gXCJjb3JlL01pc2MvbG9nZ2VyXCI7XHJcbmltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xyXG5cclxuY29uc3QgTkFNRSA9IFwiS0hSX21hdGVyaWFsc19kaWZmdXNlX3RyYW5zbWlzc2lvblwiO1xyXG5cclxuLyoqXHJcbiAqIEdldCB0aGUgYXBwcm9wcmlhdGUgdHJhbnNsdWNlbmN5IGludGVuc2l0eSB0ZXh0dXJlIGZvciB0aGUgbWF0ZXJpYWwuXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0VHJhbnNsdWNlbmN5SW50ZW5zaXR5VGV4dHVyZShjb250ZXh0OiBzdHJpbmcsIGJhYnlsb25NYXRlcmlhbDogUEJSTWF0ZXJpYWwpOiBOdWxsYWJsZTxCYXNlVGV4dHVyZT4ge1xyXG4gICAgY29uc3Qgc3VicyA9IGJhYnlsb25NYXRlcmlhbC5zdWJTdXJmYWNlO1xyXG4gICAgbGV0IHRleHR1cmUgPSBudWxsO1xyXG5cclxuICAgIC8vIENoZWNrIGlmIHRyYW5zbHVjZW5jeSBpbnRlbnNpdHkgdGV4dHVyZSBpcyBhdmFpbGFibGUgb3IgY2FuIGJlIGRlcml2ZWQgZnJvbSB0aGlja25lc3MgdGV4dHVyZVxyXG4gICAgaWYgKHN1YnMudHJhbnNsdWNlbmN5SW50ZW5zaXR5VGV4dHVyZSkge1xyXG4gICAgICAgIHRleHR1cmUgPSBzdWJzLnRyYW5zbHVjZW5jeUludGVuc2l0eVRleHR1cmU7XHJcbiAgICB9IGVsc2UgaWYgKHN1YnMudGhpY2tuZXNzVGV4dHVyZSAmJiBzdWJzLnVzZU1hc2tGcm9tVGhpY2tuZXNzVGV4dHVyZSkge1xyXG4gICAgICAgIHRleHR1cmUgPSBzdWJzLnRoaWNrbmVzc1RleHR1cmU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRleHR1cmUgJiYgIXN1YnMudXNlR2x0ZlN0eWxlVGV4dHVyZXMpIHtcclxuICAgICAgICBMb2dnZXIuV2FybihgJHtjb250ZXh0fTogVHJhbnNsdWNlbmN5IGludGVuc2l0eSB0ZXh0dXJlIGlzIG5vdCBzdXBwb3J0ZWQgd2hlbiB1c2VHbHRmU3R5bGVUZXh0dXJlcyA9IGZhbHNlLiBJZ25vcmluZyBmb3I6ICR7YmFieWxvbk1hdGVyaWFsLm5hbWV9YCwgMSk7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRleHR1cmU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBbUHJvcG9zZWQgU3BlY2lmaWNhdGlvbl0oaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3B1bGwvMTgyNSlcclxuICogISEhIEV4cGVyaW1lbnRhbCBFeHRlbnNpb24gU3ViamVjdCB0byBDaGFuZ2VzICEhIVxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgY2xhc3MgS0hSX21hdGVyaWFsc19kaWZmdXNlX3RyYW5zbWlzc2lvbiBpbXBsZW1lbnRzIElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMiB7XHJcbiAgICAvKiogTmFtZSBvZiB0aGlzIGV4dGVuc2lvbiAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBOQU1FO1xyXG5cclxuICAgIC8qKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgZW5hYmxlZCAqL1xyXG4gICAgcHVibGljIGVuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgIC8qKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgcmVxdWlyZWQgKi9cclxuICAgIHB1YmxpYyByZXF1aXJlZCA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgX2V4cG9ydGVyOiBHTFRGRXhwb3J0ZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBfd2FzVXNlZCA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGV4cG9ydGVyOiBHTFRGRXhwb3J0ZXIpIHtcclxuICAgICAgICB0aGlzLl9leHBvcnRlciA9IGV4cG9ydGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge31cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgZ2V0IHdhc1VzZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dhc1VzZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZnRlciBleHBvcnRpbmcgYSBtYXRlcmlhbCwgZGVhbCB3aXRoIGFkZGl0aW9uYWwgdGV4dHVyZXNcclxuICAgICAqIEBwYXJhbSBjb250ZXh0IEdMVEYgY29udGV4dCBvZiB0aGUgbWF0ZXJpYWxcclxuICAgICAqIEBwYXJhbSBub2RlIGV4cG9ydGVkIEdMVEYgbm9kZVxyXG4gICAgICogQHBhcmFtIGJhYnlsb25NYXRlcmlhbCBjb3JyZXNwb25kaW5nIGJhYnlsb24gbWF0ZXJpYWxcclxuICAgICAqIEByZXR1cm5zIGFycmF5IG9mIGFkZGl0aW9uYWwgdGV4dHVyZXMgdG8gZXhwb3J0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwb3N0RXhwb3J0TWF0ZXJpYWxBZGRpdGlvbmFsVGV4dHVyZXM/KGNvbnRleHQ6IHN0cmluZywgbm9kZTogSU1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsKTogQmFzZVRleHR1cmVbXSB7XHJcbiAgICAgICAgY29uc3QgYWRkaXRpb25hbFRleHR1cmVzOiBCYXNlVGV4dHVyZVtdID0gW107XHJcblxyXG4gICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwgaW5zdGFuY2VvZiBQQlJNYXRlcmlhbCAmJiB0aGlzLl9pc0V4dGVuc2lvbkVuYWJsZWQoYmFieWxvbk1hdGVyaWFsKSkge1xyXG4gICAgICAgICAgICBjb25zdCB0cmFuc2x1Y2VuY3lJbnRlbnNpdHlUZXh0dXJlID0gZ2V0VHJhbnNsdWNlbmN5SW50ZW5zaXR5VGV4dHVyZShjb250ZXh0LCBiYWJ5bG9uTWF0ZXJpYWwpO1xyXG4gICAgICAgICAgICBpZiAodHJhbnNsdWNlbmN5SW50ZW5zaXR5VGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgYWRkaXRpb25hbFRleHR1cmVzLnB1c2godHJhbnNsdWNlbmN5SW50ZW5zaXR5VGV4dHVyZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbC5zdWJTdXJmYWNlLnRyYW5zbHVjZW5jeUNvbG9yVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgYWRkaXRpb25hbFRleHR1cmVzLnB1c2goYmFieWxvbk1hdGVyaWFsLnN1YlN1cmZhY2UudHJhbnNsdWNlbmN5Q29sb3JUZXh0dXJlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gYWRkaXRpb25hbFRleHR1cmVzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGFkZGl0aW9uYWxUZXh0dXJlcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9pc0V4dGVuc2lvbkVuYWJsZWQobWF0OiBQQlJNYXRlcmlhbCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIC8vIFRoaXMgZXh0ZW5zaW9uIG11c3Qgbm90IGJlIHVzZWQgb24gYSBtYXRlcmlhbCB0aGF0IGFsc28gdXNlcyBLSFJfbWF0ZXJpYWxzX3VubGl0XHJcbiAgICAgICAgaWYgKG1hdC51bmxpdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHN1YnMgPSBtYXQuc3ViU3VyZmFjZTtcclxuICAgICAgICBpZiAoIXN1YnMuaXNUcmFuc2x1Y2VuY3lFbmFibGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICFtYXQudW5saXQgJiZcclxuICAgICAgICAgICAgIXN1YnMudXNlQWxiZWRvVG9UaW50VHJhbnNsdWNlbmN5ICYmXHJcbiAgICAgICAgICAgIHN1YnMudXNlR2x0ZlN0eWxlVGV4dHVyZXMgJiZcclxuICAgICAgICAgICAgc3Vicy52b2x1bWVJbmRleE9mUmVmcmFjdGlvbiA9PT0gMSAmJlxyXG4gICAgICAgICAgICBzdWJzLm1pbmltdW1UaGlja25lc3MgPT09IDAgJiZcclxuICAgICAgICAgICAgc3Vicy5tYXhpbXVtVGhpY2tuZXNzID09PSAwXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFmdGVyIGV4cG9ydGluZyBhIG1hdGVyaWFsXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBHTFRGIGNvbnRleHQgb2YgdGhlIG1hdGVyaWFsXHJcbiAgICAgKiBAcGFyYW0gbm9kZSBleHBvcnRlZCBHTFRGIG5vZGVcclxuICAgICAqIEBwYXJhbSBiYWJ5bG9uTWF0ZXJpYWwgY29ycmVzcG9uZGluZyBiYWJ5bG9uIG1hdGVyaWFsXHJcbiAgICAgKiBAcmV0dXJucyBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgdXBkYXRlZCBub2RlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwb3N0RXhwb3J0TWF0ZXJpYWxBc3luYz8oY29udGV4dDogc3RyaW5nLCBub2RlOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBQcm9taXNlPElNYXRlcmlhbD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsIGluc3RhbmNlb2YgUEJSTWF0ZXJpYWwgJiYgdGhpcy5faXNFeHRlbnNpb25FbmFibGVkKGJhYnlsb25NYXRlcmlhbCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3dhc1VzZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHN1YnMgPSBiYWJ5bG9uTWF0ZXJpYWwuc3ViU3VyZmFjZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zbHVjZW5jeUludGVuc2l0eVRleHR1cmUgPSBnZXRUcmFuc2x1Y2VuY3lJbnRlbnNpdHlUZXh0dXJlKGNvbnRleHQsIGJhYnlsb25NYXRlcmlhbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZGlmZnVzZVRyYW5zbWlzc2lvbkZhY3RvciA9IHN1YnMudHJhbnNsdWNlbmN5SW50ZW5zaXR5ID09IDAgPyB1bmRlZmluZWQgOiBzdWJzLnRyYW5zbHVjZW5jeUludGVuc2l0eTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpZmZ1c2VUcmFuc21pc3Npb25UZXh0dXJlID0gdGhpcy5fZXhwb3J0ZXIuX21hdGVyaWFsRXhwb3J0ZXIuZ2V0VGV4dHVyZUluZm8odHJhbnNsdWNlbmN5SW50ZW5zaXR5VGV4dHVyZSkgPz8gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGlmZnVzZVRyYW5zbWlzc2lvbkNvbG9yRmFjdG9yID0gIXN1YnMudHJhbnNsdWNlbmN5Q29sb3IgfHwgc3Vicy50cmFuc2x1Y2VuY3lDb2xvci5lcXVhbHNGbG9hdHMoMS4wLCAxLjAsIDEuMCkgPyB1bmRlZmluZWQgOiBzdWJzLnRyYW5zbHVjZW5jeUNvbG9yLmFzQXJyYXkoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpZmZ1c2VUcmFuc21pc3Npb25Db2xvclRleHR1cmUgPSB0aGlzLl9leHBvcnRlci5fbWF0ZXJpYWxFeHBvcnRlci5nZXRUZXh0dXJlSW5mbyhzdWJzLnRyYW5zbHVjZW5jeUNvbG9yVGV4dHVyZSkgPz8gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpZmZ1c2VUcmFuc21pc3Npb25JbmZvOiBJS0hSTWF0ZXJpYWxzRGlmZnVzZVRyYW5zbWlzc2lvbiA9IHtcclxuICAgICAgICAgICAgICAgICAgICBkaWZmdXNlVHJhbnNtaXNzaW9uRmFjdG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpZmZ1c2VUcmFuc21pc3Npb25UZXh0dXJlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpZmZ1c2VUcmFuc21pc3Npb25Db2xvckZhY3RvcixcclxuICAgICAgICAgICAgICAgICAgICBkaWZmdXNlVHJhbnNtaXNzaW9uQ29sb3JUZXh0dXJlLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZGlmZnVzZVRyYW5zbWlzc2lvblRleHR1cmUgfHwgZGlmZnVzZVRyYW5zbWlzc2lvbkNvbG9yVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2V4cG9ydGVyLl9tYXRlcmlhbE5lZWRzVVZzU2V0LmFkZChiYWJ5bG9uTWF0ZXJpYWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIG5vZGUuZXh0ZW5zaW9ucyA9IG5vZGUuZXh0ZW5zaW9ucyB8fCB7fTtcclxuICAgICAgICAgICAgICAgIG5vZGUuZXh0ZW5zaW9uc1tOQU1FXSA9IGRpZmZ1c2VUcmFuc21pc3Npb25JbmZvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc29sdmUobm9kZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkdMVEZFeHBvcnRlci5SZWdpc3RlckV4dGVuc2lvbihOQU1FLCAoZXhwb3J0ZXIpID0+IG5ldyBLSFJfbWF0ZXJpYWxzX2RpZmZ1c2VfdHJhbnNtaXNzaW9uKGV4cG9ydGVyKSk7XHJcbiIsImltcG9ydCB0eXBlIHsgSU1hdGVyaWFsLCBJS0hSTWF0ZXJpYWxzRGlzcGVyc2lvbiB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHR5cGUgeyBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIgfSBmcm9tIFwiLi4vZ2xURkV4cG9ydGVyRXh0ZW5zaW9uXCI7XHJcbmltcG9ydCB7IEdMVEZFeHBvcnRlciB9IGZyb20gXCIuLi9nbFRGRXhwb3J0ZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBQQlJNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9QQlIvcGJyTWF0ZXJpYWxcIjtcclxuXHJcbmNvbnN0IE5BTUUgPSBcIktIUl9tYXRlcmlhbHNfZGlzcGVyc2lvblwiO1xyXG5cclxuLyoqXHJcbiAqIFtTcGVjaWZpY2F0aW9uXShodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi84N2JkNjRhN2Y1ZTIzYzg0YjZhZWYyZTYwODIwNjk1ODNlZDBkZGI0L2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX21hdGVyaWFsc19kaXNwZXJzaW9uL1JFQURNRS5tZClcclxuICogQGV4cGVyaW1lbnRhbFxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgY2xhc3MgS0hSX21hdGVyaWFsc19kaXNwZXJzaW9uIGltcGxlbWVudHMgSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyIHtcclxuICAgIC8qKiBOYW1lIG9mIHRoaXMgZXh0ZW5zaW9uICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZSA9IE5BTUU7XHJcblxyXG4gICAgLyoqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyBlbmFibGVkICovXHJcbiAgICBwdWJsaWMgZW5hYmxlZCA9IHRydWU7XHJcblxyXG4gICAgLyoqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyByZXF1aXJlZCAqL1xyXG4gICAgcHVibGljIHJlcXVpcmVkID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBfd2FzVXNlZCA9IGZhbHNlO1xyXG5cclxuICAgIC8qKiBDb25zdHJ1Y3RvciAqL1xyXG4gICAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICAgIC8qKiBEaXNwb3NlICovXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHt9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGdldCB3YXNVc2VkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl93YXNVc2VkO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2lzRXh0ZW5zaW9uRW5hYmxlZChtYXQ6IFBCUk1hdGVyaWFsKTogYm9vbGVhbiB7XHJcbiAgICAgICAgLy8gVGhpcyBleHRlbnNpb24gbXVzdCBub3QgYmUgdXNlZCBvbiBhIG1hdGVyaWFsIHRoYXQgYWxzbyB1c2VzIEtIUl9tYXRlcmlhbHNfdW5saXRcclxuICAgICAgICBpZiAobWF0LnVubGl0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc3VicyA9IG1hdC5zdWJTdXJmYWNlO1xyXG4gICAgICAgIC8vIHRoaXMgZXh0ZW5zaW9uIHJlcXVpcmVzIHJlZnJhY3Rpb24gdG8gYmUgZW5hYmxlZC5cclxuICAgICAgICBpZiAoIXN1YnMuaXNSZWZyYWN0aW9uRW5hYmxlZCAmJiAhc3Vicy5pc0Rpc3BlcnNpb25FbmFibGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZnRlciBleHBvcnRpbmcgYSBtYXRlcmlhbFxyXG4gICAgICogQHBhcmFtIGNvbnRleHQgR0xURiBjb250ZXh0IG9mIHRoZSBtYXRlcmlhbFxyXG4gICAgICogQHBhcmFtIG5vZGUgZXhwb3J0ZWQgR0xURiBub2RlXHJcbiAgICAgKiBAcGFyYW0gYmFieWxvbk1hdGVyaWFsIGNvcnJlc3BvbmRpbmcgYmFieWxvbiBtYXRlcmlhbFxyXG4gICAgICogQHJldHVybnMgcHJvbWlzZSwgcmVzb2x2ZXMgd2l0aCB0aGUgbWF0ZXJpYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIHBvc3RFeHBvcnRNYXRlcmlhbEFzeW5jPyhjb250ZXh0OiBzdHJpbmcsIG5vZGU6IElNYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCk6IFByb21pc2U8SU1hdGVyaWFsPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwgaW5zdGFuY2VvZiBQQlJNYXRlcmlhbCAmJiB0aGlzLl9pc0V4dGVuc2lvbkVuYWJsZWQoYmFieWxvbk1hdGVyaWFsKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fd2FzVXNlZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3VicyA9IGJhYnlsb25NYXRlcmlhbC5zdWJTdXJmYWNlO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGlzcGVyc2lvbiA9IHN1YnMuZGlzcGVyc2lvbjtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkaXNwZXJzaW9uSW5mbzogSUtIUk1hdGVyaWFsc0Rpc3BlcnNpb24gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGVyc2lvbjogZGlzcGVyc2lvbixcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBub2RlLmV4dGVuc2lvbnMgPSBub2RlLmV4dGVuc2lvbnMgfHwge307XHJcbiAgICAgICAgICAgICAgICBub2RlLmV4dGVuc2lvbnNbTkFNRV0gPSBkaXNwZXJzaW9uSW5mbztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXNvbHZlKG5vZGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5HTFRGRXhwb3J0ZXIuUmVnaXN0ZXJFeHRlbnNpb24oTkFNRSwgKCkgPT4gbmV3IEtIUl9tYXRlcmlhbHNfZGlzcGVyc2lvbigpKTtcclxuIiwiaW1wb3J0IHR5cGUgeyBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIgfSBmcm9tIFwiLi4vZ2xURkV4cG9ydGVyRXh0ZW5zaW9uXCI7XHJcbmltcG9ydCB7IEdMVEZFeHBvcnRlciB9IGZyb20gXCIuLi9nbFRGRXhwb3J0ZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBQQlJNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9QQlIvcGJyTWF0ZXJpYWxcIjtcclxuaW1wb3J0IHR5cGUgeyBJTWF0ZXJpYWwsIElLSFJNYXRlcmlhbHNFbWlzc2l2ZVN0cmVuZ3RoIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5cclxuY29uc3QgTkFNRSA9IFwiS0hSX21hdGVyaWFsc19lbWlzc2l2ZV9zdHJlbmd0aFwiO1xyXG5cclxuLyoqXHJcbiAqIFtTcGVjaWZpY2F0aW9uXShodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi9tYWluL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX21hdGVyaWFsc19lbWlzc2l2ZV9zdHJlbmd0aC9SRUFETUUubWQpXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBjbGFzcyBLSFJfbWF0ZXJpYWxzX2VtaXNzaXZlX3N0cmVuZ3RoIGltcGxlbWVudHMgSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyIHtcclxuICAgIC8qKiBOYW1lIG9mIHRoaXMgZXh0ZW5zaW9uICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZSA9IE5BTUU7XHJcblxyXG4gICAgLyoqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyBlbmFibGVkICovXHJcbiAgICBwdWJsaWMgZW5hYmxlZCA9IHRydWU7XHJcblxyXG4gICAgLyoqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyByZXF1aXJlZCAqL1xyXG4gICAgcHVibGljIHJlcXVpcmVkID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBfd2FzVXNlZCA9IGZhbHNlO1xyXG5cclxuICAgIC8qKiBEaXNwb3NlICovXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHt9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGdldCB3YXNVc2VkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl93YXNVc2VkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWZ0ZXIgZXhwb3J0aW5nIGEgbWF0ZXJpYWxcclxuICAgICAqIEBwYXJhbSBjb250ZXh0IEdMVEYgY29udGV4dCBvZiB0aGUgbWF0ZXJpYWxcclxuICAgICAqIEBwYXJhbSBub2RlIGV4cG9ydGVkIEdMVEYgbm9kZVxyXG4gICAgICogQHBhcmFtIGJhYnlsb25NYXRlcmlhbCBjb3JyZXNwb25kaW5nIGJhYnlsb24gbWF0ZXJpYWxcclxuICAgICAqIEByZXR1cm5zIHByb21pc2UsIHJlc29sdmVzIHdpdGggdGhlIG1hdGVyaWFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwb3N0RXhwb3J0TWF0ZXJpYWxBc3luYyhjb250ZXh0OiBzdHJpbmcsIG5vZGU6IElNYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCk6IFByb21pc2U8SU1hdGVyaWFsPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghKGJhYnlsb25NYXRlcmlhbCBpbnN0YW5jZW9mIFBCUk1hdGVyaWFsKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUobm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGVtaXNzaXZlQ29sb3IgPSBiYWJ5bG9uTWF0ZXJpYWwuZW1pc3NpdmVDb2xvci5hc0FycmF5KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRlbXBFbWlzc2l2ZVN0cmVuZ3RoID0gTWF0aC5tYXgoLi4uZW1pc3NpdmVDb2xvcik7XHJcblxyXG4gICAgICAgICAgICBpZiAodGVtcEVtaXNzaXZlU3RyZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl93YXNVc2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBub2RlLmV4dGVuc2lvbnMgfHw9IHt9O1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGVtaXNzaXZlU3RyZW5ndGhJbmZvOiBJS0hSTWF0ZXJpYWxzRW1pc3NpdmVTdHJlbmd0aCA9IHtcclxuICAgICAgICAgICAgICAgICAgICBlbWlzc2l2ZVN0cmVuZ3RoOiB0ZW1wRW1pc3NpdmVTdHJlbmd0aCxcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gTm9ybWFsaXplIGVhY2ggdmFsdWUgb2YgdGhlIGVtaXNzaXZlIGZhY3RvciB0byBoYXZlIGEgbWF4IHZhbHVlIG9mIDFcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0VtaXNzaXZlRmFjdG9yID0gYmFieWxvbk1hdGVyaWFsLmVtaXNzaXZlQ29sb3Iuc2NhbGUoMSAvIGVtaXNzaXZlU3RyZW5ndGhJbmZvLmVtaXNzaXZlU3RyZW5ndGgpO1xyXG5cclxuICAgICAgICAgICAgICAgIG5vZGUuZW1pc3NpdmVGYWN0b3IgPSBuZXdFbWlzc2l2ZUZhY3Rvci5hc0FycmF5KCk7XHJcbiAgICAgICAgICAgICAgICBub2RlLmV4dGVuc2lvbnNbTkFNRV0gPSBlbWlzc2l2ZVN0cmVuZ3RoSW5mbztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUobm9kZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkdMVEZFeHBvcnRlci5SZWdpc3RlckV4dGVuc2lvbihOQU1FLCAoZXhwb3J0ZXIpID0+IG5ldyBLSFJfbWF0ZXJpYWxzX2VtaXNzaXZlX3N0cmVuZ3RoKCkpO1xyXG4iLCJpbXBvcnQgdHlwZSB7IElNYXRlcmlhbCwgSUtIUk1hdGVyaWFsc0lvciB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHR5cGUgeyBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIgfSBmcm9tIFwiLi4vZ2xURkV4cG9ydGVyRXh0ZW5zaW9uXCI7XHJcbmltcG9ydCB7IEdMVEZFeHBvcnRlciB9IGZyb20gXCIuLi9nbFRGRXhwb3J0ZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBQQlJNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9QQlIvcGJyTWF0ZXJpYWxcIjtcclxuXHJcbmNvbnN0IE5BTUUgPSBcIktIUl9tYXRlcmlhbHNfaW9yXCI7XHJcblxyXG4vKipcclxuICogW1NwZWNpZmljYXRpb25dKGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9ibG9iL21haW4vZXh0ZW5zaW9ucy8yLjAvS2hyb25vcy9LSFJfbWF0ZXJpYWxzX2lvci9SRUFETUUubWQpXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBjbGFzcyBLSFJfbWF0ZXJpYWxzX2lvciBpbXBsZW1lbnRzIElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMiB7XHJcbiAgICAvKiogTmFtZSBvZiB0aGlzIGV4dGVuc2lvbiAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBOQU1FO1xyXG5cclxuICAgIC8qKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgZW5hYmxlZCAqL1xyXG4gICAgcHVibGljIGVuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgIC8qKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgcmVxdWlyZWQgKi9cclxuICAgIHB1YmxpYyByZXF1aXJlZCA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgX3dhc1VzZWQgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gICAgLyoqIERpc3Bvc2UgKi9cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge31cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgZ2V0IHdhc1VzZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dhc1VzZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfaXNFeHRlbnNpb25FbmFibGVkKG1hdDogUEJSTWF0ZXJpYWwpOiBib29sZWFuIHtcclxuICAgICAgICAvLyBUaGlzIGV4dGVuc2lvbiBtdXN0IG5vdCBiZSB1c2VkIG9uIGEgbWF0ZXJpYWwgdGhhdCBhbHNvIHVzZXMgS0hSX21hdGVyaWFsc191bmxpdFxyXG4gICAgICAgIGlmIChtYXQudW5saXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbWF0LmluZGV4T2ZSZWZyYWN0aW9uICE9IHVuZGVmaW5lZCAmJiBtYXQuaW5kZXhPZlJlZnJhY3Rpb24gIT0gMS41OyAvLyAxLjUgaXMgbm9ybWF0aXZlIGRlZmF1bHQgdmFsdWUuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZnRlciBleHBvcnRpbmcgYSBtYXRlcmlhbFxyXG4gICAgICogQHBhcmFtIGNvbnRleHQgR0xURiBjb250ZXh0IG9mIHRoZSBtYXRlcmlhbFxyXG4gICAgICogQHBhcmFtIG5vZGUgZXhwb3J0ZWQgR0xURiBub2RlXHJcbiAgICAgKiBAcGFyYW0gYmFieWxvbk1hdGVyaWFsIGNvcnJlc3BvbmRpbmcgYmFieWxvbiBtYXRlcmlhbFxyXG4gICAgICogQHJldHVybnMgcHJvbWlzZSwgcmVzb2x2ZXMgd2l0aCB0aGUgbWF0ZXJpYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIHBvc3RFeHBvcnRNYXRlcmlhbEFzeW5jPyhjb250ZXh0OiBzdHJpbmcsIG5vZGU6IElNYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCk6IFByb21pc2U8SU1hdGVyaWFsPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwgaW5zdGFuY2VvZiBQQlJNYXRlcmlhbCAmJiB0aGlzLl9pc0V4dGVuc2lvbkVuYWJsZWQoYmFieWxvbk1hdGVyaWFsKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fd2FzVXNlZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgaW9ySW5mbzogSUtIUk1hdGVyaWFsc0lvciA9IHtcclxuICAgICAgICAgICAgICAgICAgICBpb3I6IGJhYnlsb25NYXRlcmlhbC5pbmRleE9mUmVmcmFjdGlvbixcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBub2RlLmV4dGVuc2lvbnMgPSBub2RlLmV4dGVuc2lvbnMgfHwge307XHJcbiAgICAgICAgICAgICAgICBub2RlLmV4dGVuc2lvbnNbTkFNRV0gPSBpb3JJbmZvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc29sdmUobm9kZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcclxuR0xURkV4cG9ydGVyLlJlZ2lzdGVyRXh0ZW5zaW9uKE5BTUUsIChleHBvcnRlcikgPT4gbmV3IEtIUl9tYXRlcmlhbHNfaW9yKCkpO1xyXG4iLCJpbXBvcnQgdHlwZSB7IElNYXRlcmlhbCwgSUtIUk1hdGVyaWFsc0lyaWRlc2NlbmNlIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgdHlwZSB7IElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMiB9IGZyb20gXCIuLi9nbFRGRXhwb3J0ZXJFeHRlbnNpb25cIjtcclxuaW1wb3J0IHsgR0xURkV4cG9ydGVyIH0gZnJvbSBcIi4uL2dsVEZFeHBvcnRlclwiO1xyXG5pbXBvcnQgdHlwZSB7IE1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IFBCUkJhc2VNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9QQlIvcGJyQmFzZU1hdGVyaWFsXCI7XHJcbmltcG9ydCB0eXBlIHsgQmFzZVRleHR1cmUgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvYmFzZVRleHR1cmVcIjtcclxuXHJcbmNvbnN0IE5BTUUgPSBcIktIUl9tYXRlcmlhbHNfaXJpZGVzY2VuY2VcIjtcclxuXHJcbi8qKlxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGNsYXNzIEtIUl9tYXRlcmlhbHNfaXJpZGVzY2VuY2UgaW1wbGVtZW50cyBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIge1xyXG4gICAgLyoqIE5hbWUgb2YgdGhpcyBleHRlbnNpb24gKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lID0gTkFNRTtcclxuXHJcbiAgICAvKiogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIGVuYWJsZWQgKi9cclxuICAgIHB1YmxpYyBlbmFibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAvKiogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIHJlcXVpcmVkICovXHJcbiAgICBwdWJsaWMgcmVxdWlyZWQgPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIF9leHBvcnRlcjogR0xURkV4cG9ydGVyO1xyXG5cclxuICAgIHByaXZhdGUgX3dhc1VzZWQgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihleHBvcnRlcjogR0xURkV4cG9ydGVyKSB7XHJcbiAgICAgICAgdGhpcy5fZXhwb3J0ZXIgPSBleHBvcnRlcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHt9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGdldCB3YXNVc2VkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl93YXNVc2VkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwb3N0RXhwb3J0TWF0ZXJpYWxBZGRpdGlvbmFsVGV4dHVyZXM/KGNvbnRleHQ6IHN0cmluZywgbm9kZTogSU1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsKTogQmFzZVRleHR1cmVbXSB7XHJcbiAgICAgICAgY29uc3QgYWRkaXRpb25hbFRleHR1cmVzOiBCYXNlVGV4dHVyZVtdID0gW107XHJcbiAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbCBpbnN0YW5jZW9mIFBCUkJhc2VNYXRlcmlhbCkge1xyXG4gICAgICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsLmlyaWRlc2NlbmNlLmlzRW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbC5pcmlkZXNjZW5jZS50ZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkaXRpb25hbFRleHR1cmVzLnB1c2goYmFieWxvbk1hdGVyaWFsLmlyaWRlc2NlbmNlLnRleHR1cmUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbC5pcmlkZXNjZW5jZS50aGlja25lc3NUZXh0dXJlICYmIGJhYnlsb25NYXRlcmlhbC5pcmlkZXNjZW5jZS50aGlja25lc3NUZXh0dXJlICE9PSBiYWJ5bG9uTWF0ZXJpYWwuaXJpZGVzY2VuY2UudGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZGl0aW9uYWxUZXh0dXJlcy5wdXNoKGJhYnlsb25NYXRlcmlhbC5pcmlkZXNjZW5jZS50aGlja25lc3NUZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBhZGRpdGlvbmFsVGV4dHVyZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcG9zdEV4cG9ydE1hdGVyaWFsQXN5bmM/KGNvbnRleHQ6IHN0cmluZywgbm9kZTogSU1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsKTogUHJvbWlzZTxJTWF0ZXJpYWw+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbCBpbnN0YW5jZW9mIFBCUkJhc2VNYXRlcmlhbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFiYWJ5bG9uTWF0ZXJpYWwuaXJpZGVzY2VuY2UuaXNFbmFibGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShub2RlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5fd2FzVXNlZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgbm9kZS5leHRlbnNpb25zID0gbm9kZS5leHRlbnNpb25zIHx8IHt9O1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGlyaWRlc2NlbmNlVGV4dHVyZUluZm8gPSB0aGlzLl9leHBvcnRlci5fbWF0ZXJpYWxFeHBvcnRlci5nZXRUZXh0dXJlSW5mbyhiYWJ5bG9uTWF0ZXJpYWwuaXJpZGVzY2VuY2UudGV4dHVyZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpcmlkZXNjZW5jZVRoaWNrbmVzc1RleHR1cmVJbmZvID0gdGhpcy5fZXhwb3J0ZXIuX21hdGVyaWFsRXhwb3J0ZXIuZ2V0VGV4dHVyZUluZm8oYmFieWxvbk1hdGVyaWFsLmlyaWRlc2NlbmNlLnRoaWNrbmVzc1RleHR1cmUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGlyaWRlc2NlbmNlSW5mbzogSUtIUk1hdGVyaWFsc0lyaWRlc2NlbmNlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlyaWRlc2NlbmNlRmFjdG9yOiBiYWJ5bG9uTWF0ZXJpYWwuaXJpZGVzY2VuY2UuaW50ZW5zaXR5LFxyXG4gICAgICAgICAgICAgICAgICAgIGlyaWRlc2NlbmNlSW9yOiBiYWJ5bG9uTWF0ZXJpYWwuaXJpZGVzY2VuY2UuaW5kZXhPZlJlZnJhY3Rpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgaXJpZGVzY2VuY2VUaGlja25lc3NNaW5pbXVtOiBiYWJ5bG9uTWF0ZXJpYWwuaXJpZGVzY2VuY2UubWluaW11bVRoaWNrbmVzcyxcclxuICAgICAgICAgICAgICAgICAgICBpcmlkZXNjZW5jZVRoaWNrbmVzc01heGltdW06IGJhYnlsb25NYXRlcmlhbC5pcmlkZXNjZW5jZS5tYXhpbXVtVGhpY2tuZXNzLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpcmlkZXNjZW5jZVRleHR1cmU6IGlyaWRlc2NlbmNlVGV4dHVyZUluZm8gPz8gdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgICAgIGlyaWRlc2NlbmNlVGhpY2tuZXNzVGV4dHVyZTogaXJpZGVzY2VuY2VUaGlja25lc3NUZXh0dXJlSW5mbyA/PyB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpcmlkZXNjZW5jZUluZm8uaXJpZGVzY2VuY2VUZXh0dXJlICE9PSBudWxsIHx8IGlyaWRlc2NlbmNlSW5mby5pcmlkZXNjZW5jZVRoaWNrbmVzc1RleHR1cmUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9leHBvcnRlci5fbWF0ZXJpYWxOZWVkc1VWc1NldC5hZGQoYmFieWxvbk1hdGVyaWFsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBub2RlLmV4dGVuc2lvbnNbTkFNRV0gPSBpcmlkZXNjZW5jZUluZm87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzb2x2ZShub2RlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuR0xURkV4cG9ydGVyLlJlZ2lzdGVyRXh0ZW5zaW9uKE5BTUUsIChleHBvcnRlcikgPT4gbmV3IEtIUl9tYXRlcmlhbHNfaXJpZGVzY2VuY2UoZXhwb3J0ZXIpKTtcclxuIiwiaW1wb3J0IHR5cGUgeyBJTWF0ZXJpYWwsIElLSFJNYXRlcmlhbHNTaGVlbiB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHR5cGUgeyBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIgfSBmcm9tIFwiLi4vZ2xURkV4cG9ydGVyRXh0ZW5zaW9uXCI7XHJcbmltcG9ydCB7IEdMVEZFeHBvcnRlciB9IGZyb20gXCIuLi9nbFRGRXhwb3J0ZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBQQlJNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9QQlIvcGJyTWF0ZXJpYWxcIjtcclxuaW1wb3J0IHR5cGUgeyBCYXNlVGV4dHVyZSB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9UZXh0dXJlcy9iYXNlVGV4dHVyZVwiO1xyXG5cclxuY29uc3QgTkFNRSA9IFwiS0hSX21hdGVyaWFsc19zaGVlblwiO1xyXG5cclxuLyoqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgY2xhc3MgS0hSX21hdGVyaWFsc19zaGVlbiBpbXBsZW1lbnRzIElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMiB7XHJcbiAgICAvKiogTmFtZSBvZiB0aGlzIGV4dGVuc2lvbiAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBOQU1FO1xyXG5cclxuICAgIC8qKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgZW5hYmxlZCAqL1xyXG4gICAgcHVibGljIGVuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgIC8qKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgcmVxdWlyZWQgKi9cclxuICAgIHB1YmxpYyByZXF1aXJlZCA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgX3dhc1VzZWQgPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIF9leHBvcnRlcjogR0xURkV4cG9ydGVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGV4cG9ydGVyOiBHTFRGRXhwb3J0ZXIpIHtcclxuICAgICAgICB0aGlzLl9leHBvcnRlciA9IGV4cG9ydGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge31cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgZ2V0IHdhc1VzZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dhc1VzZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBvc3RFeHBvcnRNYXRlcmlhbEFkZGl0aW9uYWxUZXh0dXJlcyhjb250ZXh0OiBzdHJpbmcsIG5vZGU6IElNYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCk6IEJhc2VUZXh0dXJlW10ge1xyXG4gICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwgaW5zdGFuY2VvZiBQQlJNYXRlcmlhbCkge1xyXG4gICAgICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsLnNoZWVuLmlzRW5hYmxlZCAmJiBiYWJ5bG9uTWF0ZXJpYWwuc2hlZW4udGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtiYWJ5bG9uTWF0ZXJpYWwuc2hlZW4udGV4dHVyZV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcG9zdEV4cG9ydE1hdGVyaWFsQXN5bmMoY29udGV4dDogc3RyaW5nLCBub2RlOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBQcm9taXNlPElNYXRlcmlhbD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsIGluc3RhbmNlb2YgUEJSTWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgICAgIGlmICghYmFieWxvbk1hdGVyaWFsLnNoZWVuLmlzRW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUobm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX3dhc1VzZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChub2RlLmV4dGVuc2lvbnMgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuZXh0ZW5zaW9ucyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2hlZW5JbmZvOiBJS0hSTWF0ZXJpYWxzU2hlZW4gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hlZW5Db2xvckZhY3RvcjogYmFieWxvbk1hdGVyaWFsLnNoZWVuLmNvbG9yLmFzQXJyYXkoKSxcclxuICAgICAgICAgICAgICAgICAgICBzaGVlblJvdWdobmVzc0ZhY3RvcjogYmFieWxvbk1hdGVyaWFsLnNoZWVuLnJvdWdobmVzcyA/PyAwLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc2hlZW5JbmZvLnNoZWVuQ29sb3JUZXh0dXJlICE9PSBudWxsIHx8IHNoZWVuSW5mby5zaGVlblJvdWdobmVzc1RleHR1cmUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9leHBvcnRlci5fbWF0ZXJpYWxOZWVkc1VWc1NldC5hZGQoYmFieWxvbk1hdGVyaWFsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsLnNoZWVuLnRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBzaGVlbkluZm8uc2hlZW5Db2xvclRleHR1cmUgPSB0aGlzLl9leHBvcnRlci5fbWF0ZXJpYWxFeHBvcnRlci5nZXRUZXh0dXJlSW5mbyhiYWJ5bG9uTWF0ZXJpYWwuc2hlZW4udGV4dHVyZSkgPz8gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwuc2hlZW4udGV4dHVyZVJvdWdobmVzcyAmJiAhYmFieWxvbk1hdGVyaWFsLnNoZWVuLnVzZVJvdWdobmVzc0Zyb21NYWluVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNoZWVuSW5mby5zaGVlblJvdWdobmVzc1RleHR1cmUgPSB0aGlzLl9leHBvcnRlci5fbWF0ZXJpYWxFeHBvcnRlci5nZXRUZXh0dXJlSW5mbyhiYWJ5bG9uTWF0ZXJpYWwuc2hlZW4udGV4dHVyZVJvdWdobmVzcykgPz8gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChiYWJ5bG9uTWF0ZXJpYWwuc2hlZW4udGV4dHVyZSAmJiBiYWJ5bG9uTWF0ZXJpYWwuc2hlZW4udXNlUm91Z2huZXNzRnJvbU1haW5UZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hlZW5JbmZvLnNoZWVuUm91Z2huZXNzVGV4dHVyZSA9IHRoaXMuX2V4cG9ydGVyLl9tYXRlcmlhbEV4cG9ydGVyLmdldFRleHR1cmVJbmZvKGJhYnlsb25NYXRlcmlhbC5zaGVlbi50ZXh0dXJlKSA/PyB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbm9kZS5leHRlbnNpb25zW05BTUVdID0gc2hlZW5JbmZvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc29sdmUobm9kZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkdMVEZFeHBvcnRlci5SZWdpc3RlckV4dGVuc2lvbihOQU1FLCAoZXhwb3J0ZXIpID0+IG5ldyBLSFJfbWF0ZXJpYWxzX3NoZWVuKGV4cG9ydGVyKSk7XHJcbiIsImltcG9ydCB0eXBlIHsgSU1hdGVyaWFsLCBJS0hSTWF0ZXJpYWxzU3BlY3VsYXIgfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB0eXBlIHsgSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyIH0gZnJvbSBcIi4uL2dsVEZFeHBvcnRlckV4dGVuc2lvblwiO1xyXG5pbXBvcnQgeyBHTFRGRXhwb3J0ZXIgfSBmcm9tIFwiLi4vZ2xURkV4cG9ydGVyXCI7XHJcbmltcG9ydCB0eXBlIHsgTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgUEJSTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvUEJSL3Bick1hdGVyaWFsXCI7XHJcbmltcG9ydCB0eXBlIHsgQmFzZVRleHR1cmUgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvYmFzZVRleHR1cmVcIjtcclxuXHJcbmNvbnN0IE5BTUUgPSBcIktIUl9tYXRlcmlhbHNfc3BlY3VsYXJcIjtcclxuXHJcbi8qKlxyXG4gKiBbU3BlY2lmaWNhdGlvbl0oaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFpbi9leHRlbnNpb25zLzIuMC9LaHJvbm9zL0tIUl9tYXRlcmlhbHNfc3BlY3VsYXIvUkVBRE1FLm1kKVxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgY2xhc3MgS0hSX21hdGVyaWFsc19zcGVjdWxhciBpbXBsZW1lbnRzIElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMiB7XHJcbiAgICAvKiogTmFtZSBvZiB0aGlzIGV4dGVuc2lvbiAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBOQU1FO1xyXG5cclxuICAgIC8qKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgZW5hYmxlZCAqL1xyXG4gICAgcHVibGljIGVuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgIC8qKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgcmVxdWlyZWQgKi9cclxuICAgIHB1YmxpYyByZXF1aXJlZCA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgX2V4cG9ydGVyOiBHTFRGRXhwb3J0ZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBfd2FzVXNlZCA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGV4cG9ydGVyOiBHTFRGRXhwb3J0ZXIpIHtcclxuICAgICAgICB0aGlzLl9leHBvcnRlciA9IGV4cG9ydGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBEaXNwb3NlICovXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHt9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGdldCB3YXNVc2VkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl93YXNVc2VkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWZ0ZXIgZXhwb3J0aW5nIGEgbWF0ZXJpYWwsIGRlYWwgd2l0aCB0aGUgYWRkaXRpb25hbCB0ZXh0dXJlc1xyXG4gICAgICogQHBhcmFtIGNvbnRleHQgR0xURiBjb250ZXh0IG9mIHRoZSBtYXRlcmlhbFxyXG4gICAgICogQHBhcmFtIG5vZGUgZXhwb3J0ZWQgR0xURiBub2RlXHJcbiAgICAgKiBAcGFyYW0gYmFieWxvbk1hdGVyaWFsIGNvcnJlc3BvbmRpbmcgYmFieWxvbiBtYXRlcmlhbFxyXG4gICAgICogQHJldHVybnMgYXJyYXkgb2YgYWRkaXRpb25hbCB0ZXh0dXJlcyB0byBleHBvcnRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHBvc3RFeHBvcnRNYXRlcmlhbEFkZGl0aW9uYWxUZXh0dXJlcz8oY29udGV4dDogc3RyaW5nLCBub2RlOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBCYXNlVGV4dHVyZVtdIHtcclxuICAgICAgICBjb25zdCBhZGRpdGlvbmFsVGV4dHVyZXM6IEJhc2VUZXh0dXJlW10gPSBbXTtcclxuXHJcbiAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbCBpbnN0YW5jZW9mIFBCUk1hdGVyaWFsKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9pc0V4dGVuc2lvbkVuYWJsZWQoYmFieWxvbk1hdGVyaWFsKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbC5tZXRhbGxpY1JlZmxlY3RhbmNlVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZGl0aW9uYWxUZXh0dXJlcy5wdXNoKGJhYnlsb25NYXRlcmlhbC5tZXRhbGxpY1JlZmxlY3RhbmNlVGV4dHVyZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsLnJlZmxlY3RhbmNlVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZGl0aW9uYWxUZXh0dXJlcy5wdXNoKGJhYnlsb25NYXRlcmlhbC5yZWZsZWN0YW5jZVRleHR1cmUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFkZGl0aW9uYWxUZXh0dXJlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGFkZGl0aW9uYWxUZXh0dXJlcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9pc0V4dGVuc2lvbkVuYWJsZWQobWF0OiBQQlJNYXRlcmlhbCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIC8vIFRoaXMgZXh0ZW5zaW9uIG11c3Qgbm90IGJlIHVzZWQgb24gYSBtYXRlcmlhbCB0aGF0IGFsc28gdXNlcyBLSFJfbWF0ZXJpYWxzX3VubGl0XHJcbiAgICAgICAgaWYgKG1hdC51bmxpdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIChtYXQubWV0YWxsaWNGMEZhY3RvciAhPSB1bmRlZmluZWQgJiYgbWF0Lm1ldGFsbGljRjBGYWN0b3IgIT0gMS4wKSB8fFxyXG4gICAgICAgICAgICAobWF0Lm1ldGFsbGljUmVmbGVjdGFuY2VDb2xvciAhPSB1bmRlZmluZWQgJiYgIW1hdC5tZXRhbGxpY1JlZmxlY3RhbmNlQ29sb3IuZXF1YWxzRmxvYXRzKDEuMCwgMS4wLCAxLjApKSB8fFxyXG4gICAgICAgICAgICB0aGlzLl9oYXNUZXh0dXJlc0V4dGVuc2lvbihtYXQpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9oYXNUZXh0dXJlc0V4dGVuc2lvbihtYXQ6IFBCUk1hdGVyaWFsKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIG1hdC5tZXRhbGxpY1JlZmxlY3RhbmNlVGV4dHVyZSAhPSBudWxsIHx8IG1hdC5yZWZsZWN0YW5jZVRleHR1cmUgIT0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFmdGVyIGV4cG9ydGluZyBhIG1hdGVyaWFsXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBHTFRGIGNvbnRleHQgb2YgdGhlIG1hdGVyaWFsXHJcbiAgICAgKiBAcGFyYW0gbm9kZSBleHBvcnRlZCBHTFRGIG5vZGVcclxuICAgICAqIEBwYXJhbSBiYWJ5bG9uTWF0ZXJpYWwgY29ycmVzcG9uZGluZyBiYWJ5bG9uIG1hdGVyaWFsXHJcbiAgICAgKiBAcmV0dXJucyBwcm9taXNlLCByZXNvbHZlcyB3aXRoIHRoZSBtYXRlcmlhbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcG9zdEV4cG9ydE1hdGVyaWFsQXN5bmM/KGNvbnRleHQ6IHN0cmluZywgbm9kZTogSU1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsKTogUHJvbWlzZTxJTWF0ZXJpYWw+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbCBpbnN0YW5jZW9mIFBCUk1hdGVyaWFsICYmIHRoaXMuX2lzRXh0ZW5zaW9uRW5hYmxlZChiYWJ5bG9uTWF0ZXJpYWwpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl93YXNVc2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBub2RlLmV4dGVuc2lvbnMgPSBub2RlLmV4dGVuc2lvbnMgfHwge307XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgbWV0YWxsaWNSZWZsZWN0YW5jZVRleHR1cmUgPSB0aGlzLl9leHBvcnRlci5fbWF0ZXJpYWxFeHBvcnRlci5nZXRUZXh0dXJlSW5mbyhiYWJ5bG9uTWF0ZXJpYWwubWV0YWxsaWNSZWZsZWN0YW5jZVRleHR1cmUpID8/IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlZmxlY3RhbmNlVGV4dHVyZSA9IHRoaXMuX2V4cG9ydGVyLl9tYXRlcmlhbEV4cG9ydGVyLmdldFRleHR1cmVJbmZvKGJhYnlsb25NYXRlcmlhbC5yZWZsZWN0YW5jZVRleHR1cmUpID8/IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1ldGFsbGljRjBGYWN0b3IgPSBiYWJ5bG9uTWF0ZXJpYWwubWV0YWxsaWNGMEZhY3RvciA9PSAxLjAgPyB1bmRlZmluZWQgOiBiYWJ5bG9uTWF0ZXJpYWwubWV0YWxsaWNGMEZhY3RvcjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1ldGFsbGljUmVmbGVjdGFuY2VDb2xvciA9IGJhYnlsb25NYXRlcmlhbC5tZXRhbGxpY1JlZmxlY3RhbmNlQ29sb3IuZXF1YWxzRmxvYXRzKDEuMCwgMS4wLCAxLjApXHJcbiAgICAgICAgICAgICAgICAgICAgPyB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICA6IGJhYnlsb25NYXRlcmlhbC5tZXRhbGxpY1JlZmxlY3RhbmNlQ29sb3IuYXNBcnJheSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHNwZWN1bGFySW5mbzogSUtIUk1hdGVyaWFsc1NwZWN1bGFyID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNwZWN1bGFyRmFjdG9yOiBtZXRhbGxpY0YwRmFjdG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwZWN1bGFyVGV4dHVyZTogbWV0YWxsaWNSZWZsZWN0YW5jZVRleHR1cmUsXHJcbiAgICAgICAgICAgICAgICAgICAgc3BlY3VsYXJDb2xvckZhY3RvcjogbWV0YWxsaWNSZWZsZWN0YW5jZUNvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwZWN1bGFyQ29sb3JUZXh0dXJlOiByZWZsZWN0YW5jZVRleHR1cmUsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9oYXNUZXh0dXJlc0V4dGVuc2lvbihiYWJ5bG9uTWF0ZXJpYWwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXhwb3J0ZXIuX21hdGVyaWFsTmVlZHNVVnNTZXQuYWRkKGJhYnlsb25NYXRlcmlhbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbm9kZS5leHRlbnNpb25zW05BTUVdID0gc3BlY3VsYXJJbmZvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc29sdmUobm9kZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkdMVEZFeHBvcnRlci5SZWdpc3RlckV4dGVuc2lvbihOQU1FLCAoZXhwb3J0ZXIpID0+IG5ldyBLSFJfbWF0ZXJpYWxzX3NwZWN1bGFyKGV4cG9ydGVyKSk7XHJcbiIsImltcG9ydCB0eXBlIHsgSU1hdGVyaWFsLCBJS0hSTWF0ZXJpYWxzVHJhbnNtaXNzaW9uIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBJbWFnZU1pbWVUeXBlIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgdHlwZSB7IElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMiB9IGZyb20gXCIuLi9nbFRGRXhwb3J0ZXJFeHRlbnNpb25cIjtcclxuaW1wb3J0IHsgR0xURkV4cG9ydGVyIH0gZnJvbSBcIi4uL2dsVEZFeHBvcnRlclwiO1xyXG5pbXBvcnQgdHlwZSB7IE1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IFBCUk1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1BCUi9wYnJNYXRlcmlhbFwiO1xyXG5pbXBvcnQgdHlwZSB7IEJhc2VUZXh0dXJlIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1RleHR1cmVzL2Jhc2VUZXh0dXJlXCI7XHJcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gXCJjb3JlL01pc2MvbG9nZ2VyXCI7XHJcblxyXG5jb25zdCBOQU1FID0gXCJLSFJfbWF0ZXJpYWxzX3RyYW5zbWlzc2lvblwiO1xyXG5cclxuLyoqXHJcbiAqIFtTcGVjaWZpY2F0aW9uXShodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi9tYWluL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX21hdGVyaWFsc190cmFuc21pc3Npb24vUkVBRE1FLm1kKVxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgY2xhc3MgS0hSX21hdGVyaWFsc190cmFuc21pc3Npb24gaW1wbGVtZW50cyBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIge1xyXG4gICAgLyoqIE5hbWUgb2YgdGhpcyBleHRlbnNpb24gKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lID0gTkFNRTtcclxuXHJcbiAgICAvKiogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIGVuYWJsZWQgKi9cclxuICAgIHB1YmxpYyBlbmFibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAvKiogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIHJlcXVpcmVkICovXHJcbiAgICBwdWJsaWMgcmVxdWlyZWQgPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIF9leHBvcnRlcjogR0xURkV4cG9ydGVyO1xyXG5cclxuICAgIHByaXZhdGUgX3dhc1VzZWQgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihleHBvcnRlcjogR0xURkV4cG9ydGVyKSB7XHJcbiAgICAgICAgdGhpcy5fZXhwb3J0ZXIgPSBleHBvcnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAvKiogRGlzcG9zZSAqL1xyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7fVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBnZXQgd2FzVXNlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fd2FzVXNlZDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFmdGVyIGV4cG9ydGluZyBhIG1hdGVyaWFsLCBkZWFsIHdpdGggYWRkaXRpb25hbCB0ZXh0dXJlc1xyXG4gICAgICogQHBhcmFtIGNvbnRleHQgR0xURiBjb250ZXh0IG9mIHRoZSBtYXRlcmlhbFxyXG4gICAgICogQHBhcmFtIG5vZGUgZXhwb3J0ZWQgR0xURiBub2RlXHJcbiAgICAgKiBAcGFyYW0gYmFieWxvbk1hdGVyaWFsIGNvcnJlc3BvbmRpbmcgYmFieWxvbiBtYXRlcmlhbFxyXG4gICAgICogQHJldHVybnMgYXJyYXkgb2YgYWRkaXRpb25hbCB0ZXh0dXJlcyB0byBleHBvcnRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHBvc3RFeHBvcnRNYXRlcmlhbEFkZGl0aW9uYWxUZXh0dXJlcz8oY29udGV4dDogc3RyaW5nLCBub2RlOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBCYXNlVGV4dHVyZVtdIHtcclxuICAgICAgICBjb25zdCBhZGRpdGlvbmFsVGV4dHVyZXM6IEJhc2VUZXh0dXJlW10gPSBbXTtcclxuXHJcbiAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbCBpbnN0YW5jZW9mIFBCUk1hdGVyaWFsKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9pc0V4dGVuc2lvbkVuYWJsZWQoYmFieWxvbk1hdGVyaWFsKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbC5zdWJTdXJmYWNlLnRoaWNrbmVzc1RleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRpdGlvbmFsVGV4dHVyZXMucHVzaChiYWJ5bG9uTWF0ZXJpYWwuc3ViU3VyZmFjZS50aGlja25lc3NUZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBhZGRpdGlvbmFsVGV4dHVyZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBhZGRpdGlvbmFsVGV4dHVyZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfaXNFeHRlbnNpb25FbmFibGVkKG1hdDogUEJSTWF0ZXJpYWwpOiBib29sZWFuIHtcclxuICAgICAgICAvLyBUaGlzIGV4dGVuc2lvbiBtdXN0IG5vdCBiZSB1c2VkIG9uIGEgbWF0ZXJpYWwgdGhhdCBhbHNvIHVzZXMgS0hSX21hdGVyaWFsc191bmxpdFxyXG4gICAgICAgIGlmIChtYXQudW5saXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzdWJzID0gbWF0LnN1YlN1cmZhY2U7XHJcbiAgICAgICAgcmV0dXJuIChzdWJzLmlzUmVmcmFjdGlvbkVuYWJsZWQgJiYgc3Vicy5yZWZyYWN0aW9uSW50ZW5zaXR5ICE9IHVuZGVmaW5lZCAmJiBzdWJzLnJlZnJhY3Rpb25JbnRlbnNpdHkgIT0gMCkgfHwgdGhpcy5faGFzVGV4dHVyZXNFeHRlbnNpb24obWF0KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9oYXNUZXh0dXJlc0V4dGVuc2lvbihtYXQ6IFBCUk1hdGVyaWFsKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIG1hdC5zdWJTdXJmYWNlLnJlZnJhY3Rpb25JbnRlbnNpdHlUZXh0dXJlICE9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZnRlciBleHBvcnRpbmcgYSBtYXRlcmlhbFxyXG4gICAgICogQHBhcmFtIGNvbnRleHQgR0xURiBjb250ZXh0IG9mIHRoZSBtYXRlcmlhbFxyXG4gICAgICogQHBhcmFtIG5vZGUgZXhwb3J0ZWQgR0xURiBub2RlXHJcbiAgICAgKiBAcGFyYW0gYmFieWxvbk1hdGVyaWFsIGNvcnJlc3BvbmRpbmcgYmFieWxvbiBtYXRlcmlhbFxyXG4gICAgICogQHJldHVybnMgdHJ1ZSBpZiBzdWNjZXNzZnVsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhc3luYyBwb3N0RXhwb3J0TWF0ZXJpYWxBc3luYz8oY29udGV4dDogc3RyaW5nLCBub2RlOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBQcm9taXNlPElNYXRlcmlhbD4ge1xyXG4gICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwgaW5zdGFuY2VvZiBQQlJNYXRlcmlhbCAmJiB0aGlzLl9pc0V4dGVuc2lvbkVuYWJsZWQoYmFieWxvbk1hdGVyaWFsKSkge1xyXG4gICAgICAgICAgICB0aGlzLl93YXNVc2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHN1YlN1cmZhY2UgPSBiYWJ5bG9uTWF0ZXJpYWwuc3ViU3VyZmFjZTtcclxuICAgICAgICAgICAgY29uc3QgdHJhbnNtaXNzaW9uRmFjdG9yID0gc3ViU3VyZmFjZS5yZWZyYWN0aW9uSW50ZW5zaXR5ID09PSAwID8gdW5kZWZpbmVkIDogc3ViU3VyZmFjZS5yZWZyYWN0aW9uSW50ZW5zaXR5O1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgdm9sdW1lSW5mbzogSUtIUk1hdGVyaWFsc1RyYW5zbWlzc2lvbiA9IHtcclxuICAgICAgICAgICAgICAgIHRyYW5zbWlzc2lvbkZhY3RvcjogdHJhbnNtaXNzaW9uRmFjdG9yLFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2hhc1RleHR1cmVzRXh0ZW5zaW9uKGJhYnlsb25NYXRlcmlhbCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2V4cG9ydGVyLl9tYXRlcmlhbE5lZWRzVVZzU2V0LmFkZChiYWJ5bG9uTWF0ZXJpYWwpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoc3ViU3VyZmFjZS5yZWZyYWN0aW9uSW50ZW5zaXR5VGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN1YlN1cmZhY2UudXNlR2x0ZlN0eWxlVGV4dHVyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0cmFuc21pc3Npb25UZXh0dXJlID0gYXdhaXQgdGhpcy5fZXhwb3J0ZXIuX21hdGVyaWFsRXhwb3J0ZXIuZXhwb3J0VGV4dHVyZUFzeW5jKHN1YlN1cmZhY2UucmVmcmFjdGlvbkludGVuc2l0eVRleHR1cmUsIEltYWdlTWltZVR5cGUuUE5HKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHJhbnNtaXNzaW9uVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2b2x1bWVJbmZvLnRyYW5zbWlzc2lvblRleHR1cmUgPSB0cmFuc21pc3Npb25UZXh0dXJlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nZ2VyLldhcm4oYCR7Y29udGV4dH06IEV4cG9ydGluZyBhIHN1YnN1cmZhY2UgcmVmcmFjdGlvbiBpbnRlbnNpdHkgdGV4dHVyZSB3aXRob3V0IFxcYHVzZUdsdGZTdHlsZVRleHR1cmVzXFxgIGlzIG5vdCBzdXBwb3J0ZWRgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbm9kZS5leHRlbnNpb25zIHx8PSB7fTtcclxuICAgICAgICAgICAgbm9kZS5leHRlbnNpb25zW05BTUVdID0gdm9sdW1lSW5mbztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgfVxyXG59XHJcblxyXG5HTFRGRXhwb3J0ZXIuUmVnaXN0ZXJFeHRlbnNpb24oTkFNRSwgKGV4cG9ydGVyKSA9PiBuZXcgS0hSX21hdGVyaWFsc190cmFuc21pc3Npb24oZXhwb3J0ZXIpKTtcclxuIiwiaW1wb3J0IHR5cGUgeyBJTWF0ZXJpYWwgfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB0eXBlIHsgSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyIH0gZnJvbSBcIi4uL2dsVEZFeHBvcnRlckV4dGVuc2lvblwiO1xyXG5pbXBvcnQgeyBHTFRGRXhwb3J0ZXIgfSBmcm9tIFwiLi4vZ2xURkV4cG9ydGVyXCI7XHJcbmltcG9ydCB0eXBlIHsgTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgUEJSTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvUEJSL3Bick1hdGVyaWFsXCI7XHJcbmltcG9ydCB7IFN0YW5kYXJkTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvc3RhbmRhcmRNYXRlcmlhbFwiO1xyXG5cclxuY29uc3QgTkFNRSA9IFwiS0hSX21hdGVyaWFsc191bmxpdFwiO1xyXG5cclxuLyoqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgY2xhc3MgS0hSX21hdGVyaWFsc191bmxpdCBpbXBsZW1lbnRzIElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMiB7XHJcbiAgICAvKiogTmFtZSBvZiB0aGlzIGV4dGVuc2lvbiAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBOQU1FO1xyXG5cclxuICAgIC8qKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgZW5hYmxlZCAqL1xyXG4gICAgcHVibGljIGVuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgIC8qKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgcmVxdWlyZWQgKi9cclxuICAgIHB1YmxpYyByZXF1aXJlZCA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgX3dhc1VzZWQgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGdldCB3YXNVc2VkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl93YXNVc2VkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge31cclxuXHJcbiAgICBwdWJsaWMgcG9zdEV4cG9ydE1hdGVyaWFsQXN5bmM/KGNvbnRleHQ6IHN0cmluZywgbm9kZTogSU1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsKTogUHJvbWlzZTxJTWF0ZXJpYWw+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgbGV0IHVubGl0TWF0ZXJpYWwgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwgaW5zdGFuY2VvZiBQQlJNYXRlcmlhbCkge1xyXG4gICAgICAgICAgICAgICAgdW5saXRNYXRlcmlhbCA9IGJhYnlsb25NYXRlcmlhbC51bmxpdDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChiYWJ5bG9uTWF0ZXJpYWwgaW5zdGFuY2VvZiBTdGFuZGFyZE1hdGVyaWFsKSB7XHJcbiAgICAgICAgICAgICAgICB1bmxpdE1hdGVyaWFsID0gYmFieWxvbk1hdGVyaWFsLmRpc2FibGVMaWdodGluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHVubGl0TWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3dhc1VzZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChub2RlLmV4dGVuc2lvbnMgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuZXh0ZW5zaW9ucyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIG5vZGUuZXh0ZW5zaW9uc1tOQU1FXSA9IHt9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXNvbHZlKG5vZGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5HTFRGRXhwb3J0ZXIuUmVnaXN0ZXJFeHRlbnNpb24oTkFNRSwgKCkgPT4gbmV3IEtIUl9tYXRlcmlhbHNfdW5saXQoKSk7XHJcbiIsImltcG9ydCB0eXBlIHsgSU1hdGVyaWFsLCBJS0hSTWF0ZXJpYWxzVm9sdW1lIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgdHlwZSB7IElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMiB9IGZyb20gXCIuLi9nbFRGRXhwb3J0ZXJFeHRlbnNpb25cIjtcclxuaW1wb3J0IHsgR0xURkV4cG9ydGVyIH0gZnJvbSBcIi4uL2dsVEZFeHBvcnRlclwiO1xyXG5pbXBvcnQgdHlwZSB7IE1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IFBCUk1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1BCUi9wYnJNYXRlcmlhbFwiO1xyXG5pbXBvcnQgdHlwZSB7IEJhc2VUZXh0dXJlIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1RleHR1cmVzL2Jhc2VUZXh0dXJlXCI7XHJcbmltcG9ydCB7IENvbG9yMyB9IGZyb20gXCJjb3JlL01hdGhzL21hdGguY29sb3JcIjtcclxuXHJcbmNvbnN0IE5BTUUgPSBcIktIUl9tYXRlcmlhbHNfdm9sdW1lXCI7XHJcblxyXG4vKipcclxuICogW1NwZWNpZmljYXRpb25dKGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9ibG9iL21haW4vZXh0ZW5zaW9ucy8yLjAvS2hyb25vcy9LSFJfbWF0ZXJpYWxzX3ZvbHVtZS9SRUFETUUubWQpXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBjbGFzcyBLSFJfbWF0ZXJpYWxzX3ZvbHVtZSBpbXBsZW1lbnRzIElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMiB7XHJcbiAgICAvKiogTmFtZSBvZiB0aGlzIGV4dGVuc2lvbiAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBOQU1FO1xyXG5cclxuICAgIC8qKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgZW5hYmxlZCAqL1xyXG4gICAgcHVibGljIGVuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgIC8qKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgcmVxdWlyZWQgKi9cclxuICAgIHB1YmxpYyByZXF1aXJlZCA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgX2V4cG9ydGVyOiBHTFRGRXhwb3J0ZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBfd2FzVXNlZCA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGV4cG9ydGVyOiBHTFRGRXhwb3J0ZXIpIHtcclxuICAgICAgICB0aGlzLl9leHBvcnRlciA9IGV4cG9ydGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge31cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgZ2V0IHdhc1VzZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dhc1VzZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZnRlciBleHBvcnRpbmcgYSBtYXRlcmlhbCwgZGVhbCB3aXRoIGFkZGl0aW9uYWwgdGV4dHVyZXNcclxuICAgICAqIEBwYXJhbSBjb250ZXh0IEdMVEYgY29udGV4dCBvZiB0aGUgbWF0ZXJpYWxcclxuICAgICAqIEBwYXJhbSBub2RlIGV4cG9ydGVkIEdMVEYgbm9kZVxyXG4gICAgICogQHBhcmFtIGJhYnlsb25NYXRlcmlhbCBjb3JyZXNwb25kaW5nIGJhYnlsb24gbWF0ZXJpYWxcclxuICAgICAqIEByZXR1cm5zIGFycmF5IG9mIGFkZGl0aW9uYWwgdGV4dHVyZXMgdG8gZXhwb3J0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwb3N0RXhwb3J0TWF0ZXJpYWxBZGRpdGlvbmFsVGV4dHVyZXM/KGNvbnRleHQ6IHN0cmluZywgbm9kZTogSU1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsKTogQmFzZVRleHR1cmVbXSB7XHJcbiAgICAgICAgY29uc3QgYWRkaXRpb25hbFRleHR1cmVzOiBCYXNlVGV4dHVyZVtdID0gW107XHJcblxyXG4gICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwgaW5zdGFuY2VvZiBQQlJNYXRlcmlhbCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5faXNFeHRlbnNpb25FbmFibGVkKGJhYnlsb25NYXRlcmlhbCkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwuc3ViU3VyZmFjZS50aGlja25lc3NUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkaXRpb25hbFRleHR1cmVzLnB1c2goYmFieWxvbk1hdGVyaWFsLnN1YlN1cmZhY2UudGhpY2tuZXNzVGV4dHVyZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYWRkaXRpb25hbFRleHR1cmVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYWRkaXRpb25hbFRleHR1cmVzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2lzRXh0ZW5zaW9uRW5hYmxlZChtYXQ6IFBCUk1hdGVyaWFsKTogYm9vbGVhbiB7XHJcbiAgICAgICAgLy8gVGhpcyBleHRlbnNpb24gbXVzdCBub3QgYmUgdXNlZCBvbiBhIG1hdGVyaWFsIHRoYXQgYWxzbyB1c2VzIEtIUl9tYXRlcmlhbHNfdW5saXRcclxuICAgICAgICBpZiAobWF0LnVubGl0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc3VicyA9IG1hdC5zdWJTdXJmYWNlO1xyXG4gICAgICAgIC8vIHRoaXMgZXh0ZW5zaW9uIHJlcXVpcmVzIGVpdGhlciB0aGUgS0hSX21hdGVyaWFsc190cmFuc21pc3Npb24gb3IgS0hSX21hdGVyaWFsc19kaWZmdXNlX3RyYW5zbWlzc2lvbiBleHRlbnNpb25zLlxyXG4gICAgICAgIGlmICghc3Vicy5pc1JlZnJhY3Rpb25FbmFibGVkICYmICFzdWJzLmlzVHJhbnNsdWNlbmN5RW5hYmxlZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIChzdWJzLm1heGltdW1UaGlja25lc3MgIT0gdW5kZWZpbmVkICYmIHN1YnMubWF4aW11bVRoaWNrbmVzcyAhPSAwKSB8fFxyXG4gICAgICAgICAgICAoc3Vicy50aW50Q29sb3JBdERpc3RhbmNlICE9IHVuZGVmaW5lZCAmJiBzdWJzLnRpbnRDb2xvckF0RGlzdGFuY2UgIT0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZKSB8fFxyXG4gICAgICAgICAgICAoc3Vicy50aW50Q29sb3IgIT0gdW5kZWZpbmVkICYmIHN1YnMudGludENvbG9yICE9IENvbG9yMy5XaGl0ZSgpKSB8fFxyXG4gICAgICAgICAgICB0aGlzLl9oYXNUZXh0dXJlc0V4dGVuc2lvbihtYXQpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9oYXNUZXh0dXJlc0V4dGVuc2lvbihtYXQ6IFBCUk1hdGVyaWFsKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIG1hdC5zdWJTdXJmYWNlLnRoaWNrbmVzc1RleHR1cmUgIT0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFmdGVyIGV4cG9ydGluZyBhIG1hdGVyaWFsXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBHTFRGIGNvbnRleHQgb2YgdGhlIG1hdGVyaWFsXHJcbiAgICAgKiBAcGFyYW0gbm9kZSBleHBvcnRlZCBHTFRGIG5vZGVcclxuICAgICAqIEBwYXJhbSBiYWJ5bG9uTWF0ZXJpYWwgY29ycmVzcG9uZGluZyBiYWJ5bG9uIG1hdGVyaWFsXHJcbiAgICAgKiBAcmV0dXJucyBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgdXBkYXRlZCBub2RlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwb3N0RXhwb3J0TWF0ZXJpYWxBc3luYz8oY29udGV4dDogc3RyaW5nLCBub2RlOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBQcm9taXNlPElNYXRlcmlhbD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsIGluc3RhbmNlb2YgUEJSTWF0ZXJpYWwgJiYgdGhpcy5faXNFeHRlbnNpb25FbmFibGVkKGJhYnlsb25NYXRlcmlhbCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3dhc1VzZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHN1YnMgPSBiYWJ5bG9uTWF0ZXJpYWwuc3ViU3VyZmFjZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRoaWNrbmVzc0ZhY3RvciA9IHN1YnMubWF4aW11bVRoaWNrbmVzcyA9PSAwID8gdW5kZWZpbmVkIDogc3Vicy5tYXhpbXVtVGhpY2tuZXNzO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGhpY2tuZXNzVGV4dHVyZSA9IHRoaXMuX2V4cG9ydGVyLl9tYXRlcmlhbEV4cG9ydGVyLmdldFRleHR1cmVJbmZvKHN1YnMudGhpY2tuZXNzVGV4dHVyZSkgPz8gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXR0ZW51YXRpb25EaXN0YW5jZSA9IHN1YnMudGludENvbG9yQXREaXN0YW5jZSA9PSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFkgPyB1bmRlZmluZWQgOiBzdWJzLnRpbnRDb2xvckF0RGlzdGFuY2U7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhdHRlbnVhdGlvbkNvbG9yID0gc3Vicy50aW50Q29sb3IuZXF1YWxzRmxvYXRzKDEuMCwgMS4wLCAxLjApID8gdW5kZWZpbmVkIDogc3Vicy50aW50Q29sb3IuYXNBcnJheSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHZvbHVtZUluZm86IElLSFJNYXRlcmlhbHNWb2x1bWUgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpY2tuZXNzRmFjdG9yOiB0aGlja25lc3NGYWN0b3IsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpY2tuZXNzVGV4dHVyZTogdGhpY2tuZXNzVGV4dHVyZSxcclxuICAgICAgICAgICAgICAgICAgICBhdHRlbnVhdGlvbkRpc3RhbmNlOiBhdHRlbnVhdGlvbkRpc3RhbmNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dGVudWF0aW9uQ29sb3I6IGF0dGVudWF0aW9uQ29sb3IsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9oYXNUZXh0dXJlc0V4dGVuc2lvbihiYWJ5bG9uTWF0ZXJpYWwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXhwb3J0ZXIuX21hdGVyaWFsTmVlZHNVVnNTZXQuYWRkKGJhYnlsb25NYXRlcmlhbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbm9kZS5leHRlbnNpb25zID0gbm9kZS5leHRlbnNpb25zIHx8IHt9O1xyXG4gICAgICAgICAgICAgICAgbm9kZS5leHRlbnNpb25zW05BTUVdID0gdm9sdW1lSW5mbztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXNvbHZlKG5vZGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5HTFRGRXhwb3J0ZXIuUmVnaXN0ZXJFeHRlbnNpb24oTkFNRSwgKGV4cG9ydGVyKSA9PiBuZXcgS0hSX21hdGVyaWFsc192b2x1bWUoZXhwb3J0ZXIpKTtcclxuIiwiaW1wb3J0IHR5cGUgeyBJVGV4dHVyZUluZm8sIElLSFJUZXh0dXJlVHJhbnNmb3JtIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBUb29scyB9IGZyb20gXCJjb3JlL01pc2MvdG9vbHNcIjtcclxuaW1wb3J0IHR5cGUgeyBUZXh0dXJlIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1RleHR1cmVzL3RleHR1cmVcIjtcclxuaW1wb3J0IHR5cGUgeyBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIgfSBmcm9tIFwiLi4vZ2xURkV4cG9ydGVyRXh0ZW5zaW9uXCI7XHJcbmltcG9ydCB7IEdMVEZFeHBvcnRlciB9IGZyb20gXCIuLi9nbFRGRXhwb3J0ZXJcIjtcclxuXHJcbmNvbnN0IE5BTUUgPSBcIktIUl90ZXh0dXJlX3RyYW5zZm9ybVwiO1xyXG5cclxuLyoqXHJcbiAqIENvbXB1dGVzIHRoZSBhZGp1c3RlZCBvZmZzZXQgZm9yIGEgcm90YXRpb24gY2VudGVyZWQgYWJvdXQgdGhlIG9yaWdpbi5cclxuICogQGludGVybmFsXHJcbiAqL1xyXG5mdW5jdGlvbiBBZGp1c3RPZmZzZXRGb3JSb3RhdGlvbkNlbnRlcihiYWJ5bG9uVGV4dHVyZTogVGV4dHVyZSk6IFtudW1iZXIsIG51bWJlcl0ge1xyXG4gICAgY29uc3QgeyB1T2Zmc2V0LCB2T2Zmc2V0LCB1Um90YXRpb25DZW50ZXIsIHZSb3RhdGlvbkNlbnRlciwgdVNjYWxlLCB2U2NhbGUsIHdBbmcgfSA9IGJhYnlsb25UZXh0dXJlO1xyXG4gICAgY29uc3QgY29zQW5nbGUgPSBNYXRoLmNvcyh3QW5nKTtcclxuICAgIGNvbnN0IHNpbkFuZ2xlID0gTWF0aC5zaW4od0FuZyk7XHJcbiAgICBjb25zdCBzY2FsZWRVUm90YXRpb25DZW50ZXIgPSB1Um90YXRpb25DZW50ZXIgKiB1U2NhbGU7XHJcbiAgICBjb25zdCBzY2FsZWRWUm90YXRpb25DZW50ZXIgPSB2Um90YXRpb25DZW50ZXIgKiB2U2NhbGU7XHJcbiAgICBjb25zdCBkZWx0YVUgPSBzY2FsZWRVUm90YXRpb25DZW50ZXIgKiAoMSAtIGNvc0FuZ2xlKSArIHNjYWxlZFZSb3RhdGlvbkNlbnRlciAqIHNpbkFuZ2xlO1xyXG4gICAgY29uc3QgZGVsdGFWID0gc2NhbGVkVlJvdGF0aW9uQ2VudGVyICogKDEgLSBjb3NBbmdsZSkgLSBzY2FsZWRVUm90YXRpb25DZW50ZXIgKiBzaW5BbmdsZTtcclxuICAgIHJldHVybiBbdU9mZnNldCArIGRlbHRhVSwgdk9mZnNldCArIGRlbHRhVl07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGNsYXNzIEtIUl90ZXh0dXJlX3RyYW5zZm9ybSBpbXBsZW1lbnRzIElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMiB7XHJcbiAgICAvKiogTmFtZSBvZiB0aGlzIGV4dGVuc2lvbiAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBOQU1FO1xyXG5cclxuICAgIC8qKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgZW5hYmxlZCAqL1xyXG4gICAgcHVibGljIGVuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgIC8qKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgcmVxdWlyZWQgKi9cclxuICAgIHB1YmxpYyByZXF1aXJlZCA9IGZhbHNlO1xyXG5cclxuICAgIC8qKiBSZWZlcmVuY2UgdG8gdGhlIGdsVEYgZXhwb3J0ZXIgKi9cclxuICAgIHByaXZhdGUgX3dhc1VzZWQgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7fVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBnZXQgd2FzVXNlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fd2FzVXNlZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcG9zdEV4cG9ydFRleHR1cmU/KGNvbnRleHQ6IHN0cmluZywgdGV4dHVyZUluZm86IElUZXh0dXJlSW5mbywgYmFieWxvblRleHR1cmU6IFRleHR1cmUpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBzY2VuZSA9IGJhYnlsb25UZXh0dXJlLmdldFNjZW5lKCk7XHJcbiAgICAgICAgaWYgKCFzY2VuZSkge1xyXG4gICAgICAgICAgICBUb29scy5XYXJuKGAke2NvbnRleHR9OiBcInNjZW5lXCIgaXMgbm90IGRlZmluZWQgZm9yIEJhYnlsb24gdGV4dHVyZSAke2JhYnlsb25UZXh0dXJlLm5hbWV9IWApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLypcclxuICAgICAgICAgKiBUaGUgS0hSX3RleHR1cmVfdHJhbnNmb3JtIHNjaGVtYSBvbmx5IHN1cHBvcnRzIHcgcm90YXRpb24gYXJvdW5kIHRoZSBvcmlnaW4uXHJcbiAgICAgICAgICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21haW4vZXh0ZW5zaW9ucy8yLjAvS2hyb25vcy9LSFJfdGV4dHVyZV90cmFuc2Zvcm0jZ2x0Zi1zY2hlbWEtdXBkYXRlcy5cclxuICAgICAgICAgKi9cclxuICAgICAgICBpZiAoYmFieWxvblRleHR1cmUudUFuZyAhPT0gMCB8fCBiYWJ5bG9uVGV4dHVyZS52QW5nICE9PSAwKSB7XHJcbiAgICAgICAgICAgIFRvb2xzLldhcm4oYCR7Y29udGV4dH06IFRleHR1cmUgJHtiYWJ5bG9uVGV4dHVyZS5uYW1lfSB3aXRoIHJvdGF0aW9uIGluIHRoZSB1IG9yIHYgYXhpcyBpcyBub3Qgc3VwcG9ydGVkIGluIGdsVEYuYCk7XHJcbiAgICAgICAgICAgIC8vIFVzdWFsbHksIHdlJ2QgYWx3YXlzIGVhcmx5IHJldHVybiBoZXJlIGlmIHRoZSB0ZXh0dXJlIHVzZXMgYW4gdW5zdXBwb3J0ZWQgY29tYmluYXRpb24gb2YgdHJhbnNmb3JtIHByb3BlcnRpZXMsXHJcbiAgICAgICAgICAgIC8vIGJ1dCB3ZSdyZSBtYWtpbmcgYW4gZXhjZXB0aW9uIGhlcmUgdG8gbWFpbnRhaW4gYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXHJcbiAgICAgICAgICAgIGlmIChiYWJ5bG9uVGV4dHVyZS51Um90YXRpb25DZW50ZXIgIT09IDAgfHwgYmFieWxvblRleHR1cmUudlJvdGF0aW9uQ2VudGVyICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHRleHR1cmVUcmFuc2Zvcm06IElLSFJUZXh0dXJlVHJhbnNmb3JtID0ge307XHJcbiAgICAgICAgbGV0IHRyYW5zZm9ybUlzUmVxdWlyZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKGJhYnlsb25UZXh0dXJlLnVPZmZzZXQgIT09IDAgfHwgYmFieWxvblRleHR1cmUudk9mZnNldCAhPT0gMCkge1xyXG4gICAgICAgICAgICB0ZXh0dXJlVHJhbnNmb3JtLm9mZnNldCA9IFtiYWJ5bG9uVGV4dHVyZS51T2Zmc2V0LCBiYWJ5bG9uVGV4dHVyZS52T2Zmc2V0XTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtSXNSZXF1aXJlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYmFieWxvblRleHR1cmUudVNjYWxlICE9PSAxIHx8IGJhYnlsb25UZXh0dXJlLnZTY2FsZSAhPT0gMSkge1xyXG4gICAgICAgICAgICB0ZXh0dXJlVHJhbnNmb3JtLnNjYWxlID0gW2JhYnlsb25UZXh0dXJlLnVTY2FsZSwgYmFieWxvblRleHR1cmUudlNjYWxlXTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtSXNSZXF1aXJlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYmFieWxvblRleHR1cmUud0FuZyAhPT0gMCkge1xyXG4gICAgICAgICAgICBpZiAoYmFieWxvblRleHR1cmUudVJvdGF0aW9uQ2VudGVyICE9PSAwIHx8IGJhYnlsb25UZXh0dXJlLnZSb3RhdGlvbkNlbnRlciAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tcmRvb2IvdGhyZWUuanMvaXNzdWVzLzE1ODMxIGZvciBtb3JlIGRldGFpbHMuXHJcbiAgICAgICAgICAgICAgICBpZiAoYmFieWxvblRleHR1cmUuaG9tb2dlbmVvdXNSb3RhdGlvbkluVVZUcmFuc2Zvcm0gJiYgYmFieWxvblRleHR1cmUudVNjYWxlICE9PSBiYWJ5bG9uVGV4dHVyZS52U2NhbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBUb29scy5XYXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgJHtjb250ZXh0fTogVGV4dHVyZSAke2JhYnlsb25UZXh0dXJlLm5hbWV9IHdpdGggaG9tb2dlbm91c1JvdGF0aW9uSW5VVlRyYW5zZm9ybSwgbm9uLXVuaWZvcm0gc2NhbGluZywgYW5kIG5vbi16ZXJvIHJvdGF0aW9uIGNhbm5vdCBiZSBleHBvcnRlZCB3aXRoICR7TkFNRX0uYFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgVG9vbHMuV2FybihgJHtjb250ZXh0fTogVGV4dHVyZSAke2JhYnlsb25UZXh0dXJlLm5hbWV9IHdpdGggbm9uLW9yaWdpbiByb3RhdGlvbiBjZW50ZXIgd2lsbCBiZSBleHBvcnRlZCB1c2luZyBhbiBhZGp1c3RlZCBvZmZzZXQgd2l0aCAke05BTUV9LmApO1xyXG4gICAgICAgICAgICAgICAgdGV4dHVyZVRyYW5zZm9ybS5vZmZzZXQgPSBBZGp1c3RPZmZzZXRGb3JSb3RhdGlvbkNlbnRlcihiYWJ5bG9uVGV4dHVyZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGV4dHVyZVRyYW5zZm9ybS5yb3RhdGlvbiA9IC1iYWJ5bG9uVGV4dHVyZS53QW5nO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm1Jc1JlcXVpcmVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChiYWJ5bG9uVGV4dHVyZS5jb29yZGluYXRlc0luZGV4ICE9PSAwKSB7XHJcbiAgICAgICAgICAgIHRleHR1cmVUcmFuc2Zvcm0udGV4Q29vcmQgPSBiYWJ5bG9uVGV4dHVyZS5jb29yZGluYXRlc0luZGV4O1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm1Jc1JlcXVpcmVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdHJhbnNmb3JtSXNSZXF1aXJlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl93YXNVc2VkID0gdHJ1ZTtcclxuICAgICAgICBpZiAoIXRleHR1cmVJbmZvLmV4dGVuc2lvbnMpIHtcclxuICAgICAgICAgICAgdGV4dHVyZUluZm8uZXh0ZW5zaW9ucyA9IHt9O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0ZXh0dXJlSW5mby5leHRlbnNpb25zW05BTUVdID0gdGV4dHVyZVRyYW5zZm9ybTtcclxuICAgIH1cclxufVxyXG5cclxuR0xURkV4cG9ydGVyLlJlZ2lzdGVyRXh0ZW5zaW9uKE5BTUUsICgpID0+IG5ldyBLSFJfdGV4dHVyZV90cmFuc2Zvcm0oKSk7XHJcbiIsImV4cG9ydCAqIGZyb20gXCIuL0VYVF9tZXNoX2dwdV9pbnN0YW5jaW5nXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL0tIUl9kcmFjb19tZXNoX2NvbXByZXNzaW9uXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL0tIUl9saWdodHNfcHVuY3R1YWxcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vS0hSX21hdGVyaWFsc19hbmlzb3Ryb3B5XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL0tIUl9tYXRlcmlhbHNfY2xlYXJjb2F0XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL0tIUl9tYXRlcmlhbHNfZGlmZnVzZV90cmFuc21pc3Npb25cIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vS0hSX21hdGVyaWFsc19kaXNwZXJzaW9uXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL0tIUl9tYXRlcmlhbHNfZW1pc3NpdmVfc3RyZW5ndGhcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vS0hSX21hdGVyaWFsc19pb3JcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vS0hSX21hdGVyaWFsc19pcmlkZXNjZW5jZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9LSFJfbWF0ZXJpYWxzX3NoZWVuXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL0tIUl9tYXRlcmlhbHNfc3BlY3VsYXJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vS0hSX21hdGVyaWFsc190cmFuc21pc3Npb25cIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vS0hSX21hdGVyaWFsc191bmxpdFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9LSFJfbWF0ZXJpYWxzX3ZvbHVtZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9LSFJfdGV4dHVyZV90cmFuc2Zvcm1cIjtcclxuIiwiaW1wb3J0IHR5cGUgeyBUeXBlZEFycmF5IH0gZnJvbSBcImNvcmUvdHlwZXNcIjtcbmltcG9ydCB0eXBlIHsgQWNjZXNzb3JDb21wb25lbnRUeXBlLCBBY2Nlc3NvclR5cGUsIElBY2Nlc3NvciwgSUJ1ZmZlclZpZXcgfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBEYXRhV3JpdGVyIH0gZnJvbSBcIi4vZGF0YVdyaXRlclwiO1xuXG50eXBlIFR5cGVkQXJyYXlGb3JnbFRGID0gRXhjbHVkZTxUeXBlZEFycmF5LCBGbG9hdDY0QXJyYXkgfCBCaWdJbnQ2NEFycmF5IHwgQmlnVWludDY0QXJyYXk+O1xuXG5pbnRlcmZhY2UgSVByb3BlcnR5V2l0aEJ1ZmZlclZpZXcge1xuICAgIGJ1ZmZlclZpZXc/OiBudW1iZXI7XG59XG5cbmZ1bmN0aW9uIGdldEhpZ2hlc3RCeXRlQWxpZ25tZW50KGJ5dGVMZW5ndGg6IG51bWJlcik6IG51bWJlciB7XG4gICAgaWYgKGJ5dGVMZW5ndGggJSA0ID09PSAwKSByZXR1cm4gNDtcbiAgICBpZiAoYnl0ZUxlbmd0aCAlIDIgPT09IDApIHJldHVybiAyO1xuICAgIHJldHVybiAxO1xufVxuXG4vKipcbiAqIFV0aWxpdHkgY2xhc3MgdG8gY2VudHJhbGl6ZSB0aGUgbWFuYWdlbWVudCBvZiBiaW5hcnkgZGF0YSwgYnVmZmVyVmlld3MsIGFuZCB0aGUgb2JqZWN0cyB0aGF0IHJlZmVyZW5jZSB0aGVtLlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBjbGFzcyBCdWZmZXJNYW5hZ2VyIHtcbiAgICAvKipcbiAgICAgKiBNYXBzIGEgYnVmZmVyVmlldyB0byBpdHMgZGF0YVxuICAgICAqL1xuICAgIHByaXZhdGUgX2J1ZmZlclZpZXdUb0RhdGE6IE1hcDxJQnVmZmVyVmlldywgVHlwZWRBcnJheUZvcmdsVEY+ID0gbmV3IE1hcDxJQnVmZmVyVmlldywgVHlwZWRBcnJheUZvcmdsVEY+KCk7XG5cbiAgICAvKipcbiAgICAgKiBNYXBzIGEgYnVmZmVyVmlldyB0byBnbFRGIG9iamVjdHMgdGhhdCByZWZlcmVuY2UgaXQgdmlhIGEgXCJidWZmZXJWaWV3XCIgcHJvcGVydHkgKGUuZy4gYWNjZXNzb3JzLCBpbWFnZXMpXG4gICAgICovXG4gICAgcHJpdmF0ZSBfYnVmZmVyVmlld1RvUHJvcGVydGllczogTWFwPElCdWZmZXJWaWV3LCBJUHJvcGVydHlXaXRoQnVmZmVyVmlld1tdPiA9IG5ldyBNYXA8SUJ1ZmZlclZpZXcsIElQcm9wZXJ0eVdpdGhCdWZmZXJWaWV3W10+KCk7XG5cbiAgICAvKipcbiAgICAgKiBNYXBzIGFuIGFjY2Vzc29yIHRvIGl0cyBidWZmZXJWaWV3XG4gICAgICovXG4gICAgcHJpdmF0ZSBfYWNjZXNzb3JUb0J1ZmZlclZpZXc6IE1hcDxJQWNjZXNzb3IsIElCdWZmZXJWaWV3PiA9IG5ldyBNYXA8SUFjY2Vzc29yLCBJQnVmZmVyVmlldz4oKTtcblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlcyBhIGJpbmFyeSBidWZmZXIgZnJvbSB0aGUgc3RvcmVkIGJ1ZmZlclZpZXdzLiBBbHNvIHBvcHVsYXRlcyB0aGUgYnVmZmVyVmlld3MgbGlzdC5cbiAgICAgKiBAcGFyYW0gYnVmZmVyVmlld3MgVGhlIGxpc3Qgb2YgYnVmZmVyVmlld3MgdG8gYmUgcG9wdWxhdGVkIHdoaWxlIHdyaXRpbmcgdGhlIGJpbmFyeVxuICAgICAqIEByZXR1cm5zIFRoZSBiaW5hcnkgYnVmZmVyXG4gICAgICovXG4gICAgcHVibGljIGdlbmVyYXRlQmluYXJ5KGJ1ZmZlclZpZXdzOiBJQnVmZmVyVmlld1tdKTogVWludDhBcnJheSB7XG4gICAgICAgIC8vIENvbnN0cnVjdCBhIERhdGFXcml0ZXIgd2l0aCB0aGUgdG90YWwgYnl0ZSBsZW5ndGggdG8gcHJldmVudCByZXNpemluZ1xuICAgICAgICBsZXQgdG90YWxCeXRlTGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5fYnVmZmVyVmlld1RvRGF0YS5mb3JFYWNoKChkYXRhKSA9PiB7XG4gICAgICAgICAgICB0b3RhbEJ5dGVMZW5ndGggKz0gZGF0YS5ieXRlTGVuZ3RoO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgZGF0YVdyaXRlciA9IG5ldyBEYXRhV3JpdGVyKHRvdGFsQnl0ZUxlbmd0aCk7XG5cbiAgICAgICAgLy8gT3JkZXIgdGhlIGJ1ZmZlclZpZXdzIGluIGRlc2NlbmRpbmcgb3JkZXIgb2YgdGhlaXIgYWxpZ25tZW50IHJlcXVpcmVtZW50c1xuICAgICAgICBjb25zdCBvcmRlcmVkQnVmZmVyVmlld3MgPSBBcnJheS5mcm9tKHRoaXMuX2J1ZmZlclZpZXdUb0RhdGEua2V5cygpKS5zb3J0KChhLCBiKSA9PiBnZXRIaWdoZXN0Qnl0ZUFsaWdubWVudChiLmJ5dGVMZW5ndGgpIC0gZ2V0SGlnaGVzdEJ5dGVBbGlnbm1lbnQoYS5ieXRlTGVuZ3RoKSk7XG5cbiAgICAgICAgLy8gRmlsbCBpbiB0aGUgYnVmZmVyVmlld3MgbGlzdCBhbmQgbWlzc2luZyBidWZmZXJWaWV3IGluZGV4IHJlZmVyZW5jZXMgd2hpbGUgd3JpdGluZyB0aGUgYmluYXJ5XG4gICAgICAgIGZvciAoY29uc3QgYnVmZmVyVmlldyBvZiBvcmRlcmVkQnVmZmVyVmlld3MpIHtcbiAgICAgICAgICAgIGJ1ZmZlclZpZXcuYnl0ZU9mZnNldCA9IGRhdGFXcml0ZXIuYnl0ZU9mZnNldDtcbiAgICAgICAgICAgIGJ1ZmZlclZpZXdzLnB1c2goYnVmZmVyVmlldyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGJ1ZmZlclZpZXdJbmRleCA9IGJ1ZmZlclZpZXdzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICBjb25zdCBwcm9wZXJ0aWVzID0gdGhpcy5nZXRQcm9wZXJ0aWVzV2l0aEJ1ZmZlclZpZXcoYnVmZmVyVmlldyk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IG9iamVjdCBvZiBwcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICAgICAgb2JqZWN0LmJ1ZmZlclZpZXcgPSBidWZmZXJWaWV3SW5kZXg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRhdGFXcml0ZXIud3JpdGVUeXBlZEFycmF5KHRoaXMuX2J1ZmZlclZpZXdUb0RhdGEuZ2V0KGJ1ZmZlclZpZXcpISk7XG5cbiAgICAgICAgICAgIHRoaXMuX2J1ZmZlclZpZXdUb0RhdGEuZGVsZXRlKGJ1ZmZlclZpZXcpOyAvLyBUcnkgdG8gZnJlZSB1cCBtZW1vcnkgQVNBUFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRhdGFXcml0ZXIuZ2V0T3V0cHV0RGF0YSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBidWZmZXIgdmlldyBiYXNlZCBvbiB0aGUgc3VwcGxpZWQgYXJndW1lbnRzXG4gICAgICogQHBhcmFtIGRhdGEgYSBUeXBlZEFycmF5IHRvIGNyZWF0ZSB0aGUgYnVmZmVyVmlldyBmb3JcbiAgICAgKiBAcGFyYW0gYnl0ZVN0cmlkZSBieXRlIGRpc3RhbmNlIGJldHdlZW4gY29uc2VjdXRpdmUgZWxlbWVudHNcbiAgICAgKiBAcmV0dXJucyBidWZmZXJWaWV3IGZvciBnbFRGXG4gICAgICovXG4gICAgcHVibGljIGNyZWF0ZUJ1ZmZlclZpZXcoZGF0YTogVHlwZWRBcnJheUZvcmdsVEYsIGJ5dGVTdHJpZGU/OiBudW1iZXIpOiBJQnVmZmVyVmlldyB7XG4gICAgICAgIGNvbnN0IGJ1ZmZlclZpZXc6IElCdWZmZXJWaWV3ID0ge1xuICAgICAgICAgICAgYnVmZmVyOiAwLFxuICAgICAgICAgICAgYnl0ZU9mZnNldDogdW5kZWZpbmVkLCAvLyBieXRlT2Zmc2V0IHdpbGwgYmUgc2V0IGxhdGVyLCB3aGVuIHdlIHdyaXRlIHRoZSBiaW5hcnkgYW5kIGRlY2lkZSBidWZmZXJWaWV3IG9yZGVyaW5nXG4gICAgICAgICAgICBieXRlTGVuZ3RoOiBkYXRhLmJ5dGVMZW5ndGgsXG4gICAgICAgICAgICBieXRlU3RyaWRlOiBieXRlU3RyaWRlLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9idWZmZXJWaWV3VG9EYXRhLnNldChidWZmZXJWaWV3LCBkYXRhKTtcbiAgICAgICAgcmV0dXJuIGJ1ZmZlclZpZXc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBhY2Nlc3NvciBiYXNlZCBvbiB0aGUgc3VwcGxpZWQgYXJndW1lbnRzIGFuZCBhc3NpZ25zIGl0IHRvIHRoZSBidWZmZXJWaWV3XG4gICAgICogQHBhcmFtIGJ1ZmZlclZpZXcgVGhlIGdsVEYgYnVmZmVyVmlldyByZWZlcmVuY2VkIGJ5IHRoaXMgYWNjZXNzb3JcbiAgICAgKiBAcGFyYW0gdHlwZSBUaGUgdHlwZSBvZiB0aGUgYWNjZXNzb3JcbiAgICAgKiBAcGFyYW0gY29tcG9uZW50VHlwZSBUaGUgZGF0YXR5cGUgb2YgY29tcG9uZW50cyBpbiB0aGUgYXR0cmlidXRlXG4gICAgICogQHBhcmFtIGNvdW50IFRoZSBudW1iZXIgb2YgYXR0cmlidXRlcyByZWZlcmVuY2VkIGJ5IHRoaXMgYWNjZXNzb3JcbiAgICAgKiBAcGFyYW0gYnl0ZU9mZnNldCBUaGUgb2Zmc2V0IHJlbGF0aXZlIHRvIHRoZSBzdGFydCBvZiB0aGUgYnVmZmVyVmlldyBpbiBieXRlc1xuICAgICAqIEBwYXJhbSBtaW5NYXggTWluaW11bSBhbmQgbWF4aW11bSB2YWx1ZSBvZiBlYWNoIGNvbXBvbmVudCBpbiB0aGlzIGF0dHJpYnV0ZVxuICAgICAqIEBwYXJhbSBub3JtYWxpemVkIFNwZWNpZmllcyB3aGV0aGVyIGludGVnZXIgZGF0YSB2YWx1ZXMgYXJlIG5vcm1hbGl6ZWQgYmVmb3JlIHVzYWdlXG4gICAgICogQHJldHVybnMgYWNjZXNzb3IgZm9yIGdsVEZcbiAgICAgKi9cbiAgICBwdWJsaWMgY3JlYXRlQWNjZXNzb3IoXG4gICAgICAgIGJ1ZmZlclZpZXc6IElCdWZmZXJWaWV3LFxuICAgICAgICB0eXBlOiBBY2Nlc3NvclR5cGUsXG4gICAgICAgIGNvbXBvbmVudFR5cGU6IEFjY2Vzc29yQ29tcG9uZW50VHlwZSxcbiAgICAgICAgY291bnQ6IG51bWJlcixcbiAgICAgICAgYnl0ZU9mZnNldD86IG51bWJlcixcbiAgICAgICAgbWluTWF4PzogeyBtaW46IG51bWJlcltdOyBtYXg6IG51bWJlcltdIH0sXG4gICAgICAgIG5vcm1hbGl6ZWQ/OiBib29sZWFuXG4gICAgKTogSUFjY2Vzc29yIHtcbiAgICAgICAgdGhpcy5fdmVyaWZ5QnVmZmVyVmlldyhidWZmZXJWaWV3KTtcbiAgICAgICAgY29uc3QgYWNjZXNzb3I6IElBY2Nlc3NvciA9IHtcbiAgICAgICAgICAgIGJ1ZmZlclZpZXc6IHVuZGVmaW5lZCwgLy8gYnVmZmVyVmlldyB3aWxsIGJlIHNldCB0byBhIHJlYWwgaW5kZXggbGF0ZXIsIG9uY2Ugd2Ugd3JpdGUgdGhlIGJpbmFyeSBhbmQgZGVjaWRlIGJ1ZmZlclZpZXcgb3JkZXJpbmdcbiAgICAgICAgICAgIGNvbXBvbmVudFR5cGU6IGNvbXBvbmVudFR5cGUsXG4gICAgICAgICAgICBjb3VudDogY291bnQsXG4gICAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgICAgbWluOiBtaW5NYXg/Lm1pbixcbiAgICAgICAgICAgIG1heDogbWluTWF4Py5tYXgsXG4gICAgICAgICAgICBub3JtYWxpemVkOiBub3JtYWxpemVkLFxuICAgICAgICAgICAgYnl0ZU9mZnNldDogYnl0ZU9mZnNldCxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zZXRCdWZmZXJWaWV3KGFjY2Vzc29yLCBidWZmZXJWaWV3KTtcbiAgICAgICAgdGhpcy5fYWNjZXNzb3JUb0J1ZmZlclZpZXcuc2V0KGFjY2Vzc29yLCBidWZmZXJWaWV3KTtcbiAgICAgICAgcmV0dXJuIGFjY2Vzc29yO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFzc2lnbnMgYSBidWZmZXJWaWV3IHRvIGEgZ2xURiBvYmplY3QgdGhhdCByZWZlcmVuY2VzIGl0XG4gICAgICogQHBhcmFtIG9iamVjdCBUaGUgZ2xURiBvYmplY3RcbiAgICAgKiBAcGFyYW0gYnVmZmVyVmlldyBUaGUgYnVmZmVyVmlldyB0byBhc3NpZ25cbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0QnVmZmVyVmlldyhvYmplY3Q6IElQcm9wZXJ0eVdpdGhCdWZmZXJWaWV3LCBidWZmZXJWaWV3OiBJQnVmZmVyVmlldykge1xuICAgICAgICB0aGlzLl92ZXJpZnlCdWZmZXJWaWV3KGJ1ZmZlclZpZXcpO1xuICAgICAgICBjb25zdCBwcm9wZXJ0aWVzID0gdGhpcy5nZXRQcm9wZXJ0aWVzV2l0aEJ1ZmZlclZpZXcoYnVmZmVyVmlldyk7XG4gICAgICAgIHByb3BlcnRpZXMucHVzaChvYmplY3QpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYnVmZmVyIHZpZXcgZnJvbSB0aGUgYmluYXJ5IGRhdGEsIGFzIHdlbGwgYXMgZnJvbSBhbGwgaXRzIGtub3duIHJlZmVyZW5jZXNcbiAgICAgKiBAcGFyYW0gYnVmZmVyVmlldyB0aGUgYnVmZmVyVmlldyB0byByZW1vdmVcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVtb3ZlQnVmZmVyVmlldyhidWZmZXJWaWV3OiBJQnVmZmVyVmlldyk6IHZvaWQge1xuICAgICAgICBjb25zdCBwcm9wZXJ0aWVzID0gdGhpcy5nZXRQcm9wZXJ0aWVzV2l0aEJ1ZmZlclZpZXcoYnVmZmVyVmlldyk7XG4gICAgICAgIGZvciAoY29uc3Qgb2JqZWN0IG9mIHByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIGlmIChvYmplY3QuYnVmZmVyVmlldyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIG9iamVjdC5idWZmZXJWaWV3O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fYnVmZmVyVmlld1RvRGF0YS5kZWxldGUoYnVmZmVyVmlldyk7XG4gICAgICAgIHRoaXMuX2J1ZmZlclZpZXdUb1Byb3BlcnRpZXMuZGVsZXRlKGJ1ZmZlclZpZXcpO1xuICAgICAgICB0aGlzLl9hY2Nlc3NvclRvQnVmZmVyVmlldy5mb3JFYWNoKChidiwgYWNjZXNzb3IpID0+IHtcbiAgICAgICAgICAgIGlmIChidiA9PT0gYnVmZmVyVmlldykge1xuICAgICAgICAgICAgICAgIC8vIEFkZGl0aW9uYWxseSwgcmVtb3ZlIGJ5dGVPZmZzZXQgZnJvbSBhY2Nlc3NvciByZWZlcmVuY2luZyB0aGlzIGJ1ZmZlclZpZXdcbiAgICAgICAgICAgICAgICBpZiAoYWNjZXNzb3IuYnl0ZU9mZnNldCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBhY2Nlc3Nvci5ieXRlT2Zmc2V0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl9hY2Nlc3NvclRvQnVmZmVyVmlldy5kZWxldGUoYWNjZXNzb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0QnVmZmVyVmlldyhhY2Nlc3NvcjogSUFjY2Vzc29yKTogSUJ1ZmZlclZpZXcge1xuICAgICAgICBjb25zdCBidWZmZXJWaWV3ID0gdGhpcy5fYWNjZXNzb3JUb0J1ZmZlclZpZXcuZ2V0KGFjY2Vzc29yKTtcbiAgICAgICAgdGhpcy5fdmVyaWZ5QnVmZmVyVmlldyhidWZmZXJWaWV3KTtcbiAgICAgICAgcmV0dXJuIGJ1ZmZlclZpZXchO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRQcm9wZXJ0aWVzV2l0aEJ1ZmZlclZpZXcoYnVmZmVyVmlldzogSUJ1ZmZlclZpZXcpOiBJUHJvcGVydHlXaXRoQnVmZmVyVmlld1tdIHtcbiAgICAgICAgdGhpcy5fdmVyaWZ5QnVmZmVyVmlldyhidWZmZXJWaWV3KTtcbiAgICAgICAgdGhpcy5fYnVmZmVyVmlld1RvUHJvcGVydGllcy5zZXQoYnVmZmVyVmlldywgdGhpcy5fYnVmZmVyVmlld1RvUHJvcGVydGllcy5nZXQoYnVmZmVyVmlldykgPz8gW10pO1xuICAgICAgICByZXR1cm4gdGhpcy5fYnVmZmVyVmlld1RvUHJvcGVydGllcy5nZXQoYnVmZmVyVmlldykhO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXREYXRhKGJ1ZmZlclZpZXc6IElCdWZmZXJWaWV3KTogVHlwZWRBcnJheUZvcmdsVEYge1xuICAgICAgICB0aGlzLl92ZXJpZnlCdWZmZXJWaWV3KGJ1ZmZlclZpZXcpO1xuICAgICAgICByZXR1cm4gdGhpcy5fYnVmZmVyVmlld1RvRGF0YS5nZXQoYnVmZmVyVmlldykhO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3ZlcmlmeUJ1ZmZlclZpZXcoYnVmZmVyVmlldz86IElCdWZmZXJWaWV3KTogdm9pZCB7XG4gICAgICAgIGlmIChidWZmZXJWaWV3ID09PSB1bmRlZmluZWQgfHwgIXRoaXMuX2J1ZmZlclZpZXdUb0RhdGEuaGFzKGJ1ZmZlclZpZXcpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEJ1ZmZlclZpZXcgJHtidWZmZXJWaWV3fSBub3QgZm91bmQgaW4gQnVmZmVyTWFuYWdlci5gKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBiYWJ5bG9uanMvYXZhaWxhYmxlICovXHJcbmltcG9ydCB0eXBlIHsgVHlwZWRBcnJheSB9IGZyb20gXCJjb3JlL3R5cGVzXCI7XHJcblxyXG5jb25zdCBUeXBlZEFycmF5VG9Xcml0ZU1ldGhvZCA9IG5ldyBNYXA8RnVuY3Rpb24sIChkYXRhVmlldzogRGF0YVZpZXcsIGJ5dGVPZmZzZXQ6IG51bWJlciwgdmFsdWU6IG51bWJlcikgPT4gdm9pZD4oW1xyXG4gICAgW0ludDhBcnJheSwgKGQsIGIsIHYpID0+IGQuc2V0SW50OChiLCB2KV0sXHJcbiAgICBbVWludDhBcnJheSwgKGR2LCBibywgdikgPT4gZHYuc2V0VWludDgoYm8sIHYpXSxcclxuICAgIFtVaW50OENsYW1wZWRBcnJheSwgKGR2LCBibywgdikgPT4gZHYuc2V0VWludDgoYm8sIHYpXSxcclxuICAgIFtJbnQxNkFycmF5LCAoZHYsIGJvLCB2KSA9PiBkdi5zZXRJbnQxNihibywgdiwgdHJ1ZSldLFxyXG4gICAgW1VpbnQxNkFycmF5LCAoZHYsIGJvLCB2KSA9PiBkdi5zZXRVaW50MTYoYm8sIHYsIHRydWUpXSxcclxuICAgIFtJbnQzMkFycmF5LCAoZHYsIGJvLCB2KSA9PiBkdi5zZXRJbnQzMihibywgdiwgdHJ1ZSldLFxyXG4gICAgW1VpbnQzMkFycmF5LCAoZHYsIGJvLCB2KSA9PiBkdi5zZXRVaW50MzIoYm8sIHYsIHRydWUpXSxcclxuICAgIFtGbG9hdDMyQXJyYXksIChkdiwgYm8sIHYpID0+IGR2LnNldEZsb2F0MzIoYm8sIHYsIHRydWUpXSxcclxuICAgIFtGbG9hdDY0QXJyYXksIChkdiwgYm8sIHYpID0+IGR2LnNldEZsb2F0NjQoYm8sIHYsIHRydWUpXSxcclxuXSk7XHJcblxyXG4vKiogQGludGVybmFsICovXHJcbmV4cG9ydCBjbGFzcyBEYXRhV3JpdGVyIHtcclxuICAgIHByaXZhdGUgX2RhdGE6IFVpbnQ4QXJyYXk7XHJcbiAgICBwcml2YXRlIF9kYXRhVmlldzogRGF0YVZpZXc7XHJcbiAgICBwcml2YXRlIF9ieXRlT2Zmc2V0OiBudW1iZXI7XHJcblxyXG4gICAgcHVibGljIHdyaXRlVHlwZWRBcnJheSh2YWx1ZTogRXhjbHVkZTxUeXBlZEFycmF5LCBCaWdJbnQ2NEFycmF5IHwgQmlnVWludDY0QXJyYXk+KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fY2hlY2tHcm93QnVmZmVyKHZhbHVlLmJ5dGVMZW5ndGgpO1xyXG4gICAgICAgIGNvbnN0IHNldE1ldGhvZCA9IFR5cGVkQXJyYXlUb1dyaXRlTWV0aG9kLmdldCh2YWx1ZS5jb25zdHJ1Y3RvcikhO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgc2V0TWV0aG9kKHRoaXMuX2RhdGFWaWV3LCB0aGlzLl9ieXRlT2Zmc2V0LCB2YWx1ZVtpXSBhcyBudW1iZXIpO1xyXG4gICAgICAgICAgICB0aGlzLl9ieXRlT2Zmc2V0ICs9IHZhbHVlLkJZVEVTX1BFUl9FTEVNRU5UO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoYnl0ZUxlbmd0aDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fZGF0YSA9IG5ldyBVaW50OEFycmF5KGJ5dGVMZW5ndGgpO1xyXG4gICAgICAgIHRoaXMuX2RhdGFWaWV3ID0gbmV3IERhdGFWaWV3KHRoaXMuX2RhdGEuYnVmZmVyKTtcclxuICAgICAgICB0aGlzLl9ieXRlT2Zmc2V0ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGJ5dGVPZmZzZXQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYnl0ZU9mZnNldDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0T3V0cHV0RGF0YSgpOiBVaW50OEFycmF5IHtcclxuICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkodGhpcy5fZGF0YS5idWZmZXIsIDAsIHRoaXMuX2J5dGVPZmZzZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB3cml0ZVVJbnQ4KHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9jaGVja0dyb3dCdWZmZXIoMSk7XHJcbiAgICAgICAgdGhpcy5fZGF0YVZpZXcuc2V0VWludDgodGhpcy5fYnl0ZU9mZnNldCwgdmFsdWUpO1xyXG4gICAgICAgIHRoaXMuX2J5dGVPZmZzZXQrKztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgd3JpdGVJbnQ4KHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9jaGVja0dyb3dCdWZmZXIoMSk7XHJcbiAgICAgICAgdGhpcy5fZGF0YVZpZXcuc2V0SW50OCh0aGlzLl9ieXRlT2Zmc2V0LCB2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5fYnl0ZU9mZnNldCsrO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB3cml0ZUludDE2KGVudHJ5OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9jaGVja0dyb3dCdWZmZXIoMik7XHJcbiAgICAgICAgdGhpcy5fZGF0YVZpZXcuc2V0SW50MTYodGhpcy5fYnl0ZU9mZnNldCwgZW50cnksIHRydWUpO1xyXG4gICAgICAgIHRoaXMuX2J5dGVPZmZzZXQgKz0gMjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgd3JpdGVVSW50MTYodmFsdWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2NoZWNrR3Jvd0J1ZmZlcigyKTtcclxuICAgICAgICB0aGlzLl9kYXRhVmlldy5zZXRVaW50MTYodGhpcy5fYnl0ZU9mZnNldCwgdmFsdWUsIHRydWUpO1xyXG4gICAgICAgIHRoaXMuX2J5dGVPZmZzZXQgKz0gMjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgd3JpdGVJbnQzMihlbnRyeTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fY2hlY2tHcm93QnVmZmVyKDQpO1xyXG4gICAgICAgIHRoaXMuX2RhdGFWaWV3LnNldEludDMyKHRoaXMuX2J5dGVPZmZzZXQsIGVudHJ5LCB0cnVlKTtcclxuICAgICAgICB0aGlzLl9ieXRlT2Zmc2V0ICs9IDQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHdyaXRlVUludDMyKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9jaGVja0dyb3dCdWZmZXIoNCk7XHJcbiAgICAgICAgdGhpcy5fZGF0YVZpZXcuc2V0VWludDMyKHRoaXMuX2J5dGVPZmZzZXQsIHZhbHVlLCB0cnVlKTtcclxuICAgICAgICB0aGlzLl9ieXRlT2Zmc2V0ICs9IDQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHdyaXRlRmxvYXQzMih2YWx1ZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fY2hlY2tHcm93QnVmZmVyKDQpO1xyXG4gICAgICAgIHRoaXMuX2RhdGFWaWV3LnNldEZsb2F0MzIodGhpcy5fYnl0ZU9mZnNldCwgdmFsdWUsIHRydWUpO1xyXG4gICAgICAgIHRoaXMuX2J5dGVPZmZzZXQgKz0gNDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgd3JpdGVGbG9hdDY0KHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9jaGVja0dyb3dCdWZmZXIoOCk7XHJcbiAgICAgICAgdGhpcy5fZGF0YVZpZXcuc2V0RmxvYXQ2NCh0aGlzLl9ieXRlT2Zmc2V0LCB2YWx1ZSwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5fYnl0ZU9mZnNldCArPSA4O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NoZWNrR3Jvd0J1ZmZlcihieXRlTGVuZ3RoOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBuZXdCeXRlTGVuZ3RoID0gdGhpcy5ieXRlT2Zmc2V0ICsgYnl0ZUxlbmd0aDtcclxuICAgICAgICBpZiAobmV3Qnl0ZUxlbmd0aCA+IHRoaXMuX2RhdGEuYnl0ZUxlbmd0aCkge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdEYXRhID0gbmV3IFVpbnQ4QXJyYXkobmV3Qnl0ZUxlbmd0aCAqIDIpO1xyXG4gICAgICAgICAgICBuZXdEYXRhLnNldCh0aGlzLl9kYXRhKTtcclxuICAgICAgICAgICAgdGhpcy5fZGF0YSA9IG5ld0RhdGE7XHJcbiAgICAgICAgICAgIHRoaXMuX2RhdGFWaWV3ID0gbmV3IERhdGFWaWV3KHRoaXMuX2RhdGEuYnVmZmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHR5cGUgeyBJQW5pbWF0aW9uLCBJTm9kZSwgSUJ1ZmZlclZpZXcsIElBY2Nlc3NvciwgSUFuaW1hdGlvblNhbXBsZXIsIElBbmltYXRpb25DaGFubmVsIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBBbmltYXRpb25TYW1wbGVySW50ZXJwb2xhdGlvbiwgQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsIEFjY2Vzc29yVHlwZSwgQWNjZXNzb3JDb21wb25lbnRUeXBlIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgdHlwZSB7IE5vZGUgfSBmcm9tIFwiY29yZS9ub2RlXCI7XHJcbmltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xyXG5pbXBvcnQgeyBWZWN0b3IzLCBRdWF0ZXJuaW9uIH0gZnJvbSBcImNvcmUvTWF0aHMvbWF0aC52ZWN0b3JcIjtcclxuaW1wb3J0IHsgVG9vbHMgfSBmcm9tIFwiY29yZS9NaXNjL3Rvb2xzXCI7XHJcbmltcG9ydCB7IEFuaW1hdGlvbiB9IGZyb20gXCJjb3JlL0FuaW1hdGlvbnMvYW5pbWF0aW9uXCI7XHJcbmltcG9ydCB7IFRyYW5zZm9ybU5vZGUgfSBmcm9tIFwiY29yZS9NZXNoZXMvdHJhbnNmb3JtTm9kZVwiO1xyXG5pbXBvcnQgdHlwZSB7IFNjZW5lIH0gZnJvbSBcImNvcmUvc2NlbmVcIjtcclxuaW1wb3J0IHsgTW9ycGhUYXJnZXQgfSBmcm9tIFwiY29yZS9Nb3JwaC9tb3JwaFRhcmdldFwiO1xyXG5pbXBvcnQgeyBNZXNoIH0gZnJvbSBcImNvcmUvTWVzaGVzL21lc2hcIjtcclxuXHJcbmltcG9ydCB0eXBlIHsgSUFuaW1hdGlvbktleSB9IGZyb20gXCJjb3JlL0FuaW1hdGlvbnMvYW5pbWF0aW9uS2V5XCI7XHJcbmltcG9ydCB7IEFuaW1hdGlvbktleUludGVycG9sYXRpb24gfSBmcm9tIFwiY29yZS9BbmltYXRpb25zL2FuaW1hdGlvbktleVwiO1xyXG5cclxuaW1wb3J0IHsgQ2FtZXJhIH0gZnJvbSBcImNvcmUvQ2FtZXJhcy9jYW1lcmFcIjtcclxuaW1wb3J0IHsgTGlnaHQgfSBmcm9tIFwiY29yZS9MaWdodHMvbGlnaHRcIjtcclxuaW1wb3J0IHR5cGUgeyBCdWZmZXJNYW5hZ2VyIH0gZnJvbSBcIi4vYnVmZmVyTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBHZXRBY2Nlc3NvckVsZW1lbnRDb3VudCwgQ29udmVydFRvUmlnaHRIYW5kZWRQb3NpdGlvbiwgQ29udmVydENhbWVyYVJvdGF0aW9uVG9HTFRGLCBDb252ZXJ0VG9SaWdodEhhbmRlZFJvdGF0aW9uIH0gZnJvbSBcIi4vZ2xURlV0aWxpdGllc1wiO1xyXG5cclxuLyoqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKiBJbnRlcmZhY2UgdG8gc3RvcmUgYW5pbWF0aW9uIGRhdGEuXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBpbnRlcmZhY2UgX0lBbmltYXRpb25EYXRhIHtcclxuICAgIC8qKlxyXG4gICAgICogS2V5ZnJhbWUgZGF0YS5cclxuICAgICAqL1xyXG4gICAgaW5wdXRzOiBudW1iZXJbXTtcclxuICAgIC8qKlxyXG4gICAgICogVmFsdWUgZGF0YS5cclxuICAgICAqL1xyXG4gICAgb3V0cHV0czogbnVtYmVyW11bXTtcclxuICAgIC8qKlxyXG4gICAgICogQW5pbWF0aW9uIGludGVycG9sYXRpb24gZGF0YS5cclxuICAgICAqL1xyXG4gICAgc2FtcGxlckludGVycG9sYXRpb246IEFuaW1hdGlvblNhbXBsZXJJbnRlcnBvbGF0aW9uO1xyXG4gICAgLyoqXHJcbiAgICAgKiBNaW5pbXVtIGtleWZyYW1lIHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBpbnB1dHNNaW46IG51bWJlcjtcclxuICAgIC8qKlxyXG4gICAgICogTWF4aW11bSBrZXlmcmFtZSB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgaW5wdXRzTWF4OiBudW1iZXI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGludGVyZmFjZSBfSUFuaW1hdGlvbkluZm8ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgdGFyZ2V0IGNoYW5uZWwgZm9yIHRoZSBhbmltYXRpb25cclxuICAgICAqL1xyXG4gICAgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGg6IEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgZ2xURiBhY2Nlc3NvciB0eXBlIGZvciB0aGUgZGF0YS5cclxuICAgICAqL1xyXG4gICAgZGF0YUFjY2Vzc29yVHlwZTogQWNjZXNzb3JUeXBlLlZFQzMgfCBBY2Nlc3NvclR5cGUuVkVDNCB8IEFjY2Vzc29yVHlwZS5TQ0FMQVI7XHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyBpZiBxdWF0ZXJuaW9ucyBzaG91bGQgYmUgdXNlZC5cclxuICAgICAqL1xyXG4gICAgdXNlUXVhdGVybmlvbjogYm9vbGVhbjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKiBFbnVtIGZvciBoYW5kbGluZyBpbiB0YW5nZW50IGFuZCBvdXQgdGFuZ2VudC5cclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZW51bSBfVGFuZ2VudFR5cGUge1xyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhhdCBpbnB1dCB0YW5nZW50cyBhcmUgdXNlZC5cclxuICAgICAqL1xyXG4gICAgSU5UQU5HRU5ULFxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhhdCBvdXRwdXQgdGFuZ2VudHMgYXJlIHVzZWQuXHJcbiAgICAgKi9cclxuICAgIE9VVFRBTkdFTlQsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAaW50ZXJuYWxcclxuICogVXRpbGl0eSBjbGFzcyBmb3IgZ2VuZXJhdGluZyBnbFRGIGFuaW1hdGlvbiBkYXRhIGZyb20gQmFieWxvbkpTLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIF9HTFRGQW5pbWF0aW9uIHtcclxuICAgIC8qKlxyXG4gICAgICogRGV0ZXJtaW5lIGlmIGEgbm9kZSBpcyB0cmFuc2Zvcm1hYmxlIC0gaWUgaGFzIHByb3BlcnRpZXMgaXQgc2hvdWxkIGJlIHBhcnQgb2YgYW5pbWF0aW9uIG9mIHRyYW5zZm9ybWF0aW9uLlxyXG4gICAgICogQHBhcmFtIGJhYnlsb25Ob2RlIHRoZSBub2RlIHRvIHRlc3RcclxuICAgICAqIEByZXR1cm5zIHRydWUgaWYgY2FuIGJlIGFuaW1hdGVkLCBmYWxzZSBvdGhlcndpc2UuIEZhbHNlIGlmIHRoZSBwYXJhbWV0ZXIgaXMgbnVsbCBvciB1bmRlZmluZWQuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIF9Jc1RyYW5zZm9ybWFibGUoYmFieWxvbk5vZGU6IE5vZGUpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gYmFieWxvbk5vZGUgJiYgKGJhYnlsb25Ob2RlIGluc3RhbmNlb2YgVHJhbnNmb3JtTm9kZSB8fCBiYWJ5bG9uTm9kZSBpbnN0YW5jZW9mIENhbWVyYSB8fCBiYWJ5bG9uTm9kZSBpbnN0YW5jZW9mIExpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpZ25vcmVcclxuICAgICAqXHJcbiAgICAgKiBDcmVhdGVzIGdsVEYgY2hhbm5lbCBhbmltYXRpb24gZnJvbSBCYWJ5bG9uSlMgYW5pbWF0aW9uLlxyXG4gICAgICogQHBhcmFtIGJhYnlsb25UcmFuc2Zvcm1Ob2RlIC0gQmFieWxvbkpTIG1lc2guXHJcbiAgICAgKiBAcGFyYW0gYW5pbWF0aW9uIC0gYW5pbWF0aW9uLlxyXG4gICAgICogQHBhcmFtIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoIC0gVGhlIHRhcmdldCBhbmltYXRpb24gY2hhbm5lbC5cclxuICAgICAqIEBwYXJhbSB1c2VRdWF0ZXJuaW9uIC0gU3BlY2lmaWVzIGlmIHF1YXRlcm5pb25zIGFyZSB1c2VkLlxyXG4gICAgICogQHJldHVybnMgbnVsbGFibGUgSUFuaW1hdGlvbkRhdGFcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBfQ3JlYXRlTm9kZUFuaW1hdGlvbihcclxuICAgICAgICBiYWJ5bG9uVHJhbnNmb3JtTm9kZTogTm9kZSxcclxuICAgICAgICBhbmltYXRpb246IEFuaW1hdGlvbixcclxuICAgICAgICBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aDogQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsXHJcbiAgICAgICAgdXNlUXVhdGVybmlvbjogYm9vbGVhbixcclxuICAgICAgICBhbmltYXRpb25TYW1wbGVSYXRlOiBudW1iZXJcclxuICAgICk6IE51bGxhYmxlPF9JQW5pbWF0aW9uRGF0YT4ge1xyXG4gICAgICAgIGlmICh0aGlzLl9Jc1RyYW5zZm9ybWFibGUoYmFieWxvblRyYW5zZm9ybU5vZGUpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlucHV0czogbnVtYmVyW10gPSBbXTtcclxuICAgICAgICAgICAgY29uc3Qgb3V0cHV0czogbnVtYmVyW11bXSA9IFtdO1xyXG4gICAgICAgICAgICBjb25zdCBrZXlGcmFtZXMgPSBhbmltYXRpb24uZ2V0S2V5cygpO1xyXG4gICAgICAgICAgICBjb25zdCBtaW5NYXhLZXlGcmFtZXMgPSBfR0xURkFuaW1hdGlvbi5fQ2FsY3VsYXRlTWluTWF4S2V5RnJhbWVzKGtleUZyYW1lcyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGludGVycG9sYXRpb25PckJha2UgPSBfR0xURkFuaW1hdGlvbi5fRGVkdWNlSW50ZXJwb2xhdGlvbihrZXlGcmFtZXMsIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLCB1c2VRdWF0ZXJuaW9uKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGludGVycG9sYXRpb24gPSBpbnRlcnBvbGF0aW9uT3JCYWtlLmludGVycG9sYXRpb25UeXBlO1xyXG4gICAgICAgICAgICBjb25zdCBzaG91bGRCYWtlQW5pbWF0aW9uID0gaW50ZXJwb2xhdGlvbk9yQmFrZS5zaG91bGRCYWtlQW5pbWF0aW9uO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNob3VsZEJha2VBbmltYXRpb24pIHtcclxuICAgICAgICAgICAgICAgIF9HTFRGQW5pbWF0aW9uLl9DcmVhdGVCYWtlZEFuaW1hdGlvbihcclxuICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uVHJhbnNmb3JtTm9kZSxcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgbWluTWF4S2V5RnJhbWVzLm1pbixcclxuICAgICAgICAgICAgICAgICAgICBtaW5NYXhLZXlGcmFtZXMubWF4LFxyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi5mcmFtZVBlclNlY29uZCxcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25TYW1wbGVSYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0cyxcclxuICAgICAgICAgICAgICAgICAgICBvdXRwdXRzLFxyXG4gICAgICAgICAgICAgICAgICAgIG1pbk1heEtleUZyYW1lcyxcclxuICAgICAgICAgICAgICAgICAgICB1c2VRdWF0ZXJuaW9uXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGludGVycG9sYXRpb24gPT09IEFuaW1hdGlvblNhbXBsZXJJbnRlcnBvbGF0aW9uLkxJTkVBUiB8fCBpbnRlcnBvbGF0aW9uID09PSBBbmltYXRpb25TYW1wbGVySW50ZXJwb2xhdGlvbi5TVEVQKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX0dMVEZBbmltYXRpb24uX0NyZWF0ZUxpbmVhck9yU3RlcEFuaW1hdGlvbihiYWJ5bG9uVHJhbnNmb3JtTm9kZSwgYW5pbWF0aW9uLCBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCwgaW5wdXRzLCBvdXRwdXRzLCB1c2VRdWF0ZXJuaW9uKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaW50ZXJwb2xhdGlvbiA9PT0gQW5pbWF0aW9uU2FtcGxlckludGVycG9sYXRpb24uQ1VCSUNTUExJTkUpIHtcclxuICAgICAgICAgICAgICAgICAgICBfR0xURkFuaW1hdGlvbi5fQ3JlYXRlQ3ViaWNTcGxpbmVBbmltYXRpb24oYmFieWxvblRyYW5zZm9ybU5vZGUsIGFuaW1hdGlvbiwgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsIGlucHV0cywgb3V0cHV0cywgdXNlUXVhdGVybmlvbik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIF9HTFRGQW5pbWF0aW9uLl9DcmVhdGVCYWtlZEFuaW1hdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFieWxvblRyYW5zZm9ybU5vZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbk1heEtleUZyYW1lcy5taW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbk1heEtleUZyYW1lcy5tYXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi5mcmFtZVBlclNlY29uZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uU2FtcGxlUmF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5NYXhLZXlGcmFtZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZVF1YXRlcm5pb25cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoaW5wdXRzLmxlbmd0aCAmJiBvdXRwdXRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0OiBfSUFuaW1hdGlvbkRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRzOiBpbnB1dHMsXHJcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0czogb3V0cHV0cyxcclxuICAgICAgICAgICAgICAgICAgICBzYW1wbGVySW50ZXJwb2xhdGlvbjogaW50ZXJwb2xhdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dHNNaW46IHNob3VsZEJha2VBbmltYXRpb24gPyBtaW5NYXhLZXlGcmFtZXMubWluIDogVG9vbHMuRmxvYXRSb3VuZChtaW5NYXhLZXlGcmFtZXMubWluIC8gYW5pbWF0aW9uLmZyYW1lUGVyU2Vjb25kKSxcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dHNNYXg6IHNob3VsZEJha2VBbmltYXRpb24gPyBtaW5NYXhLZXlGcmFtZXMubWF4IDogVG9vbHMuRmxvYXRSb3VuZChtaW5NYXhLZXlGcmFtZXMubWF4IC8gYW5pbWF0aW9uLmZyYW1lUGVyU2Vjb25kKSxcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX0RlZHVjZUFuaW1hdGlvbkluZm8oYW5pbWF0aW9uOiBBbmltYXRpb24pOiBOdWxsYWJsZTxfSUFuaW1hdGlvbkluZm8+IHtcclxuICAgICAgICBsZXQgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGg6IE51bGxhYmxlPEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoPiA9IG51bGw7XHJcbiAgICAgICAgbGV0IGRhdGFBY2Nlc3NvclR5cGUgPSBBY2Nlc3NvclR5cGUuVkVDMztcclxuICAgICAgICBsZXQgdXNlUXVhdGVybmlvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IHByb3BlcnR5ID0gYW5pbWF0aW9uLnRhcmdldFByb3BlcnR5LnNwbGl0KFwiLlwiKTtcclxuICAgICAgICBzd2l0Y2ggKHByb3BlcnR5WzBdKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzY2FsaW5nXCI6IHtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoID0gQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGguU0NBTEU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwicG9zaXRpb25cIjoge1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGggPSBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aC5UUkFOU0xBVElPTjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJyb3RhdGlvblwiOiB7XHJcbiAgICAgICAgICAgICAgICBkYXRhQWNjZXNzb3JUeXBlID0gQWNjZXNzb3JUeXBlLlZFQzQ7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCA9IEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLlJPVEFUSU9OO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcInJvdGF0aW9uUXVhdGVybmlvblwiOiB7XHJcbiAgICAgICAgICAgICAgICBkYXRhQWNjZXNzb3JUeXBlID0gQWNjZXNzb3JUeXBlLlZFQzQ7XHJcbiAgICAgICAgICAgICAgICB1c2VRdWF0ZXJuaW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoID0gQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGguUk9UQVRJT047XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwiaW5mbHVlbmNlXCI6IHtcclxuICAgICAgICAgICAgICAgIGRhdGFBY2Nlc3NvclR5cGUgPSBBY2Nlc3NvclR5cGUuU0NBTEFSO1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGggPSBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aC5XRUlHSFRTO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICAgICAgVG9vbHMuRXJyb3IoYFVuc3VwcG9ydGVkIGFuaW1hdGFibGUgcHJvcGVydHkgJHtwcm9wZXJ0eVswXX1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGg6IGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLCBkYXRhQWNjZXNzb3JUeXBlOiBkYXRhQWNjZXNzb3JUeXBlLCB1c2VRdWF0ZXJuaW9uOiB1c2VRdWF0ZXJuaW9uIH07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgVG9vbHMuRXJyb3IoXCJhbmltYXRpb24gY2hhbm5lbCB0YXJnZXQgcGF0aCBhbmQgZGF0YSBhY2Nlc3NvciB0eXBlIGNvdWxkIGJlIGRlZHVjZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGlnbm9yZVxyXG4gICAgICogQ3JlYXRlIG5vZGUgYW5pbWF0aW9ucyBmcm9tIHRoZSB0cmFuc2Zvcm0gbm9kZSBhbmltYXRpb25zXHJcbiAgICAgKiBAcGFyYW0gYmFieWxvbk5vZGVcclxuICAgICAqIEBwYXJhbSBydW50aW1lR0xURkFuaW1hdGlvblxyXG4gICAgICogQHBhcmFtIGlkbGVHTFRGQW5pbWF0aW9uc1xyXG4gICAgICogQHBhcmFtIG5vZGVNYXBcclxuICAgICAqIEBwYXJhbSBub2Rlc1xyXG4gICAgICogQHBhcmFtIGJ1ZmZlck1hbmFnZXJcclxuICAgICAqIEBwYXJhbSBidWZmZXJWaWV3c1xyXG4gICAgICogQHBhcmFtIGFjY2Vzc29yc1xyXG4gICAgICogQHBhcmFtIGFuaW1hdGlvblNhbXBsZVJhdGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBfQ3JlYXRlTm9kZUFuaW1hdGlvbkZyb21Ob2RlQW5pbWF0aW9ucyhcclxuICAgICAgICBiYWJ5bG9uTm9kZTogTm9kZSxcclxuICAgICAgICBydW50aW1lR0xURkFuaW1hdGlvbjogSUFuaW1hdGlvbixcclxuICAgICAgICBpZGxlR0xURkFuaW1hdGlvbnM6IElBbmltYXRpb25bXSxcclxuICAgICAgICBub2RlTWFwOiBNYXA8Tm9kZSwgbnVtYmVyPixcclxuICAgICAgICBub2RlczogSU5vZGVbXSxcclxuICAgICAgICBidWZmZXJNYW5hZ2VyOiBCdWZmZXJNYW5hZ2VyLFxyXG4gICAgICAgIGJ1ZmZlclZpZXdzOiBJQnVmZmVyVmlld1tdLFxyXG4gICAgICAgIGFjY2Vzc29yczogSUFjY2Vzc29yW10sXHJcbiAgICAgICAgYW5pbWF0aW9uU2FtcGxlUmF0ZTogbnVtYmVyLFxyXG4gICAgICAgIHVzZVJpZ2h0SGFuZGVkOiBib29sZWFuLFxyXG4gICAgICAgIHNob3VsZEV4cG9ydEFuaW1hdGlvbj86IChhbmltYXRpb246IEFuaW1hdGlvbikgPT4gYm9vbGVhblxyXG4gICAgKSB7XHJcbiAgICAgICAgbGV0IGdsVEZBbmltYXRpb246IElBbmltYXRpb247XHJcbiAgICAgICAgaWYgKF9HTFRGQW5pbWF0aW9uLl9Jc1RyYW5zZm9ybWFibGUoYmFieWxvbk5vZGUpKSB7XHJcbiAgICAgICAgICAgIGlmIChiYWJ5bG9uTm9kZS5hbmltYXRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGFuaW1hdGlvbiBvZiBiYWJ5bG9uTm9kZS5hbmltYXRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNob3VsZEV4cG9ydEFuaW1hdGlvbiAmJiAhc2hvdWxkRXhwb3J0QW5pbWF0aW9uKGFuaW1hdGlvbikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFuaW1hdGlvbkluZm8gPSBfR0xURkFuaW1hdGlvbi5fRGVkdWNlQW5pbWF0aW9uSW5mbyhhbmltYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhbmltYXRpb25JbmZvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdsVEZBbmltYXRpb24gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBhbmltYXRpb24ubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbXBsZXJzOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5uZWxzOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX0dMVEZBbmltYXRpb24uX0FkZEFuaW1hdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2FuaW1hdGlvbi5uYW1lfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24uaGFzUnVubmluZ1J1bnRpbWVBbmltYXRpb25zID8gcnVudGltZUdMVEZBbmltYXRpb24gOiBnbFRGQW5pbWF0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFieWxvbk5vZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25JbmZvLmRhdGFBY2Nlc3NvclR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25JbmZvLmFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZU1hcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlck1hbmFnZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZmZXJWaWV3cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY2Vzc29ycyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkluZm8udXNlUXVhdGVybmlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvblNhbXBsZVJhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VSaWdodEhhbmRlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2xURkFuaW1hdGlvbi5zYW1wbGVycy5sZW5ndGggJiYgZ2xURkFuaW1hdGlvbi5jaGFubmVscy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkbGVHTFRGQW5pbWF0aW9ucy5wdXNoKGdsVEZBbmltYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGlnbm9yZVxyXG4gICAgICogQ3JlYXRlIGluZGl2aWR1YWwgbW9ycGggYW5pbWF0aW9ucyBmcm9tIHRoZSBtZXNoJ3MgbW9ycGggdGFyZ2V0IGFuaW1hdGlvbiB0cmFja3NcclxuICAgICAqIEBwYXJhbSBiYWJ5bG9uTm9kZVxyXG4gICAgICogQHBhcmFtIHJ1bnRpbWVHTFRGQW5pbWF0aW9uXHJcbiAgICAgKiBAcGFyYW0gaWRsZUdMVEZBbmltYXRpb25zXHJcbiAgICAgKiBAcGFyYW0gbm9kZU1hcFxyXG4gICAgICogQHBhcmFtIG5vZGVzXHJcbiAgICAgKiBAcGFyYW0gYnVmZmVyTWFuYWdlclxyXG4gICAgICogQHBhcmFtIGJ1ZmZlclZpZXdzXHJcbiAgICAgKiBAcGFyYW0gYWNjZXNzb3JzXHJcbiAgICAgKiBAcGFyYW0gYW5pbWF0aW9uU2FtcGxlUmF0ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIF9DcmVhdGVNb3JwaFRhcmdldEFuaW1hdGlvbkZyb21Nb3JwaFRhcmdldEFuaW1hdGlvbnMoXHJcbiAgICAgICAgYmFieWxvbk5vZGU6IE5vZGUsXHJcbiAgICAgICAgcnVudGltZUdMVEZBbmltYXRpb246IElBbmltYXRpb24sXHJcbiAgICAgICAgaWRsZUdMVEZBbmltYXRpb25zOiBJQW5pbWF0aW9uW10sXHJcbiAgICAgICAgbm9kZU1hcDogTWFwPE5vZGUsIG51bWJlcj4sXHJcbiAgICAgICAgbm9kZXM6IElOb2RlW10sXHJcbiAgICAgICAgYnVmZmVyTWFuYWdlcjogQnVmZmVyTWFuYWdlcixcclxuICAgICAgICBidWZmZXJWaWV3czogSUJ1ZmZlclZpZXdbXSxcclxuICAgICAgICBhY2Nlc3NvcnM6IElBY2Nlc3NvcltdLFxyXG4gICAgICAgIGFuaW1hdGlvblNhbXBsZVJhdGU6IG51bWJlcixcclxuICAgICAgICB1c2VSaWdodEhhbmRlZDogYm9vbGVhbixcclxuICAgICAgICBzaG91bGRFeHBvcnRBbmltYXRpb24/OiAoYW5pbWF0aW9uOiBBbmltYXRpb24pID0+IGJvb2xlYW5cclxuICAgICkge1xyXG4gICAgICAgIGxldCBnbFRGQW5pbWF0aW9uOiBJQW5pbWF0aW9uO1xyXG4gICAgICAgIGlmIChiYWJ5bG9uTm9kZSBpbnN0YW5jZW9mIE1lc2gpIHtcclxuICAgICAgICAgICAgY29uc3QgbW9ycGhUYXJnZXRNYW5hZ2VyID0gYmFieWxvbk5vZGUubW9ycGhUYXJnZXRNYW5hZ2VyO1xyXG4gICAgICAgICAgICBpZiAobW9ycGhUYXJnZXRNYW5hZ2VyKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vcnBoVGFyZ2V0TWFuYWdlci5udW1UYXJnZXRzOyArK2kpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtb3JwaFRhcmdldCA9IG1vcnBoVGFyZ2V0TWFuYWdlci5nZXRUYXJnZXQoaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBhbmltYXRpb24gb2YgbW9ycGhUYXJnZXQuYW5pbWF0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hvdWxkRXhwb3J0QW5pbWF0aW9uICYmICFzaG91bGRFeHBvcnRBbmltYXRpb24oYW5pbWF0aW9uKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tYmluZWRBbmltYXRpb24gPSBuZXcgQW5pbWF0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7YW5pbWF0aW9uLm5hbWV9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaW5mbHVlbmNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24uZnJhbWVQZXJTZWNvbmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24uZGF0YVR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24ubG9vcE1vZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24uZW5hYmxlQmxlbmRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tYmluZWRBbmltYXRpb25LZXlzOiBJQW5pbWF0aW9uS2V5W10gPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYW5pbWF0aW9uS2V5cyA9IGFuaW1hdGlvbi5nZXRLZXlzKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFuaW1hdGlvbktleXMubGVuZ3RoOyArK2opIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFuaW1hdGlvbktleSA9IGFuaW1hdGlvbktleXNbal07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IG1vcnBoVGFyZ2V0TWFuYWdlci5udW1UYXJnZXRzOyArK2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoayA9PSBpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbWJpbmVkQW5pbWF0aW9uS2V5cy5wdXNoKGFuaW1hdGlvbktleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tYmluZWRBbmltYXRpb25LZXlzLnB1c2goeyBmcmFtZTogYW5pbWF0aW9uS2V5LmZyYW1lLCB2YWx1ZTogMCB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tYmluZWRBbmltYXRpb24uc2V0S2V5cyhjb21iaW5lZEFuaW1hdGlvbktleXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhbmltYXRpb25JbmZvID0gX0dMVEZBbmltYXRpb24uX0RlZHVjZUFuaW1hdGlvbkluZm8oY29tYmluZWRBbmltYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYW5pbWF0aW9uSW5mbykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xURkFuaW1hdGlvbiA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBjb21iaW5lZEFuaW1hdGlvbi5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbXBsZXJzOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFubmVsczogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX0dMVEZBbmltYXRpb24uX0FkZEFuaW1hdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24ubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24uaGFzUnVubmluZ1J1bnRpbWVBbmltYXRpb25zID8gcnVudGltZUdMVEZBbmltYXRpb24gOiBnbFRGQW5pbWF0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhYnlsb25Ob2RlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbWJpbmVkQW5pbWF0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkluZm8uZGF0YUFjY2Vzc29yVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25JbmZvLmFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVNYXAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyTWFuYWdlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZmZXJWaWV3cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2Nlc3NvcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uSW5mby51c2VRdWF0ZXJuaW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvblNhbXBsZVJhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlUmlnaHRIYW5kZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9ycGhUYXJnZXRNYW5hZ2VyLm51bVRhcmdldHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2xURkFuaW1hdGlvbi5zYW1wbGVycy5sZW5ndGggJiYgZ2xURkFuaW1hdGlvbi5jaGFubmVscy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZGxlR0xURkFuaW1hdGlvbnMucHVzaChnbFRGQW5pbWF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICogQ3JlYXRlIG5vZGUgYW5kIG1vcnBoIGFuaW1hdGlvbnMgZnJvbSB0aGUgYW5pbWF0aW9uIGdyb3Vwc1xyXG4gICAgICogQHBhcmFtIGJhYnlsb25TY2VuZVxyXG4gICAgICogQHBhcmFtIGdsVEZBbmltYXRpb25zXHJcbiAgICAgKiBAcGFyYW0gbm9kZU1hcFxyXG4gICAgICogQHBhcmFtIG5vZGVzXHJcbiAgICAgKiBAcGFyYW0gYnVmZmVyTWFuYWdlclxyXG4gICAgICogQHBhcmFtIGJ1ZmZlclZpZXdzXHJcbiAgICAgKiBAcGFyYW0gYWNjZXNzb3JzXHJcbiAgICAgKiBAcGFyYW0gYW5pbWF0aW9uU2FtcGxlUmF0ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIF9DcmVhdGVOb2RlQW5kTW9ycGhBbmltYXRpb25Gcm9tQW5pbWF0aW9uR3JvdXBzKFxyXG4gICAgICAgIGJhYnlsb25TY2VuZTogU2NlbmUsXHJcbiAgICAgICAgZ2xURkFuaW1hdGlvbnM6IElBbmltYXRpb25bXSxcclxuICAgICAgICBub2RlTWFwOiBNYXA8Tm9kZSwgbnVtYmVyPixcclxuICAgICAgICBidWZmZXJNYW5hZ2VyOiBCdWZmZXJNYW5hZ2VyLFxyXG4gICAgICAgIGJ1ZmZlclZpZXdzOiBJQnVmZmVyVmlld1tdLFxyXG4gICAgICAgIGFjY2Vzc29yczogSUFjY2Vzc29yW10sXHJcbiAgICAgICAgYW5pbWF0aW9uU2FtcGxlUmF0ZTogbnVtYmVyLFxyXG4gICAgICAgIGxlZnRIYW5kZWROb2RlczogU2V0PE5vZGU+LFxyXG4gICAgICAgIHNob3VsZEV4cG9ydEFuaW1hdGlvbj86IChhbmltYXRpb246IEFuaW1hdGlvbikgPT4gYm9vbGVhblxyXG4gICAgKSB7XHJcbiAgICAgICAgbGV0IGdsVEZBbmltYXRpb246IElBbmltYXRpb247XHJcbiAgICAgICAgaWYgKGJhYnlsb25TY2VuZS5hbmltYXRpb25Hcm91cHMpIHtcclxuICAgICAgICAgICAgY29uc3QgYW5pbWF0aW9uR3JvdXBzID0gYmFieWxvblNjZW5lLmFuaW1hdGlvbkdyb3VwcztcclxuICAgICAgICAgICAgZm9yIChjb25zdCBhbmltYXRpb25Hcm91cCBvZiBhbmltYXRpb25Hcm91cHMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1vcnBoQW5pbWF0aW9uczogTWFwPE1lc2gsIE1hcDxNb3JwaFRhcmdldCwgQW5pbWF0aW9uPj4gPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzYW1wbGVBbmltYXRpb25zOiBNYXA8TWVzaCwgQW5pbWF0aW9uPiA9IG5ldyBNYXAoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1vcnBoQW5pbWF0aW9uTWVzaGVzOiBTZXQ8TWVzaD4gPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhbmltYXRpb25Hcm91cEZyYW1lRGlmZiA9IGFuaW1hdGlvbkdyb3VwLnRvIC0gYW5pbWF0aW9uR3JvdXAuZnJvbTtcclxuICAgICAgICAgICAgICAgIGdsVEZBbmltYXRpb24gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogYW5pbWF0aW9uR3JvdXAubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBjaGFubmVsczogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgc2FtcGxlcnM6IFtdLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYW5pbWF0aW9uR3JvdXAudGFyZ2V0ZWRBbmltYXRpb25zLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0QW5pbWF0aW9uID0gYW5pbWF0aW9uR3JvdXAudGFyZ2V0ZWRBbmltYXRpb25zW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IHRhcmdldEFuaW1hdGlvbi50YXJnZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYW5pbWF0aW9uID0gdGFyZ2V0QW5pbWF0aW9uLmFuaW1hdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2hvdWxkRXhwb3J0QW5pbWF0aW9uICYmICFzaG91bGRFeHBvcnRBbmltYXRpb24oYW5pbWF0aW9uKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnZlcnRUb1JpZ2h0SGFuZGVkID0gbGVmdEhhbmRlZE5vZGVzLmhhcyh0YXJnZXQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fSXNUcmFuc2Zvcm1hYmxlKHRhcmdldCkgfHwgKHRhcmdldC5sZW5ndGggPT09IDEgJiYgdGhpcy5fSXNUcmFuc2Zvcm1hYmxlKHRhcmdldFswXSkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFuaW1hdGlvbkluZm8gPSBfR0xURkFuaW1hdGlvbi5fRGVkdWNlQW5pbWF0aW9uSW5mbyh0YXJnZXRBbmltYXRpb24uYW5pbWF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFuaW1hdGlvbkluZm8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhYnlsb25UcmFuc2Zvcm1Ob2RlID0gdGhpcy5fSXNUcmFuc2Zvcm1hYmxlKHRhcmdldCkgPyB0YXJnZXQgOiB0aGlzLl9Jc1RyYW5zZm9ybWFibGUodGFyZ2V0WzBdKSA/IHRhcmdldFswXSA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmFieWxvblRyYW5zZm9ybU5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfR0xURkFuaW1hdGlvbi5fQWRkQW5pbWF0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHthbmltYXRpb24ubmFtZX1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbFRGQW5pbWF0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uVHJhbnNmb3JtTm9kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25JbmZvLmRhdGFBY2Nlc3NvclR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkluZm8uYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVNYXAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlck1hbmFnZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlclZpZXdzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2Nlc3NvcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkluZm8udXNlUXVhdGVybmlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uU2FtcGxlUmF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udmVydFRvUmlnaHRIYW5kZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBNb3JwaFRhcmdldCB8fCAodGFyZ2V0Lmxlbmd0aCA9PT0gMSAmJiB0YXJnZXRbMF0gaW5zdGFuY2VvZiBNb3JwaFRhcmdldCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYW5pbWF0aW9uSW5mbyA9IF9HTFRGQW5pbWF0aW9uLl9EZWR1Y2VBbmltYXRpb25JbmZvKHRhcmdldEFuaW1hdGlvbi5hbmltYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYW5pbWF0aW9uSW5mbykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmFieWxvbk1vcnBoVGFyZ2V0ID0gdGFyZ2V0IGluc3RhbmNlb2YgTW9ycGhUYXJnZXQgPyAodGFyZ2V0IGFzIE1vcnBoVGFyZ2V0KSA6ICh0YXJnZXRbMF0gYXMgTW9ycGhUYXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJhYnlsb25Nb3JwaFRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhYnlsb25Nb3JwaFRhcmdldE1hbmFnZXIgPSBiYWJ5bG9uU2NlbmUubW9ycGhUYXJnZXRNYW5hZ2Vycy5maW5kKChtb3JwaFRhcmdldE1hbmFnZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBtb3JwaFRhcmdldE1hbmFnZXIubnVtVGFyZ2V0czsgKytqKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9ycGhUYXJnZXRNYW5hZ2VyLmdldFRhcmdldChqKSA9PT0gYmFieWxvbk1vcnBoVGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiYWJ5bG9uTW9ycGhUYXJnZXRNYW5hZ2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhYnlsb25NZXNoID0gYmFieWxvblNjZW5lLm1lc2hlcy5maW5kKChtZXNoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKG1lc2ggYXMgTWVzaCkubW9ycGhUYXJnZXRNYW5hZ2VyID09PSBiYWJ5bG9uTW9ycGhUYXJnZXRNYW5hZ2VyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSBhcyBNZXNoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmFieWxvbk1lc2gpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbW9ycGhBbmltYXRpb25zLmhhcyhiYWJ5bG9uTWVzaCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3JwaEFuaW1hdGlvbnMuc2V0KGJhYnlsb25NZXNoLCBuZXcgTWFwKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9ycGhBbmltYXRpb25zLmdldChiYWJ5bG9uTWVzaCk/LnNldChiYWJ5bG9uTW9ycGhUYXJnZXQsIGFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3JwaEFuaW1hdGlvbk1lc2hlcy5hZGQoYmFieWxvbk1lc2gpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FtcGxlQW5pbWF0aW9ucy5zZXQoYmFieWxvbk1lc2gsIGFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIGlzIHRoZSBwbGFjZSBmb3IgdGhlIEtIUl9hbmltYXRpb25fcG9pbnRlci5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBtb3JwaEFuaW1hdGlvbk1lc2hlcy5mb3JFYWNoKChtZXNoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9ycGhUYXJnZXRNYW5hZ2VyID0gbWVzaC5tb3JwaFRhcmdldE1hbmFnZXIhO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb21iaW5lZEFuaW1hdGlvbkdyb3VwOiBOdWxsYWJsZTxBbmltYXRpb24+ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhbmltYXRpb25LZXlzOiBJQW5pbWF0aW9uS2V5W10gPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzYW1wbGVBbmltYXRpb24gPSBzYW1wbGVBbmltYXRpb25zLmdldChtZXNoKSE7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2FtcGxlQW5pbWF0aW9uS2V5cyA9IHNhbXBsZUFuaW1hdGlvbi5nZXRLZXlzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbnVtQW5pbWF0aW9uS2V5cyA9IHNhbXBsZUFuaW1hdGlvbktleXMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIER1ZSB0byBob3cgZ2xURiBleHBlY3RzIG1vcnBoIHRhcmdldCBhbmltYXRpb24gZGF0YSB0byBiZSBmb3JtYXR0ZWQsIHdlIG5lZWQgdG8gcmVhcnJhbmdlIHRoZSBpbmRpdmlkdWFsIG1vcnBoIHRhcmdldCBhbmltYXRpb24gdHJhY2tzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNoIHRoYXQgd2UgaGF2ZSBhIHNpbmdsZSBhbmltYXRpb24sIHdoZXJlIGEgZ2l2ZW4ga2V5ZnJhbWUgaW5wdXQgdmFsdWUgaGFzIHN1Y2Nlc3NpdmUgb3V0cHV0IHZhbHVlcyBmb3IgZWFjaCBtb3JwaCB0YXJnZXQgYmVsb25naW5nIHRvIHRoZSBtYW5hZ2VyLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9zcGVjaWZpY2F0aW9uLzIuMCNhbmltYXRpb25zXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBXZSBkbyB0aGlzIHZpYSBjb25zdHJ1Y3RpbmcgYSBuZXcgQW5pbWF0aW9uIHRyYWNrLCBhbmQgaW50ZXJsZWF2aW5nIHRoZSBmcmFtZXMgb2YgZWFjaCBtb3JwaCB0YXJnZXQgYW5pbWF0aW9uIHRyYWNrIGluIHRoZSBjdXJyZW50IEFuaW1hdGlvbiBHcm91cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBXZSByZXVzZSB0aGUgQmFieWxvbiBBbmltYXRpb24gZGF0YSBzdHJ1Y3R1cmUgZm9yIGVhc2Ugb2YgaGFuZGxpbmcgZXhwb3J0IG9mIGN1YmljIHNwbGluZSBhbmltYXRpb24ga2V5cywgYW5kIHRvIHJldXNlIHRoZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZyBfR0xURkFuaW1hdGlvbi5BZGRBbmltYXRpb24gY29kZXBhdGggd2l0aCBtaW5pbWFsIG1vZGlmaWNhdGlvbiwgaG93ZXZlciB0aGUgY29uc3RydWN0ZWQgQmFieWxvbiBBbmltYXRpb24gaXMgTk9UIGludGVuZGVkIGZvciB1c2UgaW4tZW5naW5lLlxyXG4gICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1BbmltYXRpb25LZXlzOyArK2kpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBtb3JwaFRhcmdldE1hbmFnZXIubnVtVGFyZ2V0czsgKytqKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtb3JwaFRhcmdldCA9IG1vcnBoVGFyZ2V0TWFuYWdlci5nZXRUYXJnZXQoaik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhbmltYXRpb25zQnlNb3JwaFRhcmdldCA9IG1vcnBoQW5pbWF0aW9ucy5nZXQobWVzaCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYW5pbWF0aW9uc0J5TW9ycGhUYXJnZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtb3JwaFRhcmdldEFuaW1hdGlvbiA9IGFuaW1hdGlvbnNCeU1vcnBoVGFyZ2V0LmdldChtb3JwaFRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vcnBoVGFyZ2V0QW5pbWF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY29tYmluZWRBbmltYXRpb25Hcm91cCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tYmluZWRBbmltYXRpb25Hcm91cCA9IG5ldyBBbmltYXRpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7YW5pbWF0aW9uR3JvdXAubmFtZX1fJHttZXNoLm5hbWV9X01vcnBoV2VpZ2h0QW5pbWF0aW9uYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImluZmx1ZW5jZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vcnBoVGFyZ2V0QW5pbWF0aW9uLmZyYW1lUGVyU2Vjb25kLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFuaW1hdGlvbi5BTklNQVRJT05UWVBFX0ZMT0FULFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vcnBoVGFyZ2V0QW5pbWF0aW9uLmxvb3BNb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vcnBoVGFyZ2V0QW5pbWF0aW9uLmVuYWJsZUJsZW5kaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbktleXMucHVzaChtb3JwaFRhcmdldEFuaW1hdGlvbi5nZXRLZXlzKClbaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbktleXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFtZTogYW5pbWF0aW9uR3JvdXAuZnJvbSArIChhbmltYXRpb25Hcm91cEZyYW1lRGlmZiAvIG51bUFuaW1hdGlvbktleXMpICogaSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBtb3JwaFRhcmdldC5pbmZsdWVuY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpblRhbmdlbnQ6IHNhbXBsZUFuaW1hdGlvbktleXNbMF0uaW5UYW5nZW50ID8gMCA6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dFRhbmdlbnQ6IHNhbXBsZUFuaW1hdGlvbktleXNbMF0ub3V0VGFuZ2VudCA/IDAgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb21iaW5lZEFuaW1hdGlvbkdyb3VwIS5zZXRLZXlzKGFuaW1hdGlvbktleXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFuaW1hdGlvbkluZm8gPSBfR0xURkFuaW1hdGlvbi5fRGVkdWNlQW5pbWF0aW9uSW5mbyhjb21iaW5lZEFuaW1hdGlvbkdyb3VwISk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFuaW1hdGlvbkluZm8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX0dMVEZBbmltYXRpb24uX0FkZEFuaW1hdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2FuaW1hdGlvbkdyb3VwLm5hbWV9XyR7bWVzaC5uYW1lfV9Nb3JwaFdlaWdodEFuaW1hdGlvbmAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbFRGQW5pbWF0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzaCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbWJpbmVkQW5pbWF0aW9uR3JvdXAhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uSW5mby5kYXRhQWNjZXNzb3JUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uSW5mby5hbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVNYXAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZmZXJNYW5hZ2VyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyVmlld3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2Nlc3NvcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25JbmZvLnVzZVF1YXRlcm5pb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25TYW1wbGVSYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3JwaFRhcmdldE1hbmFnZXI/Lm51bVRhcmdldHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmIChnbFRGQW5pbWF0aW9uLmNoYW5uZWxzLmxlbmd0aCAmJiBnbFRGQW5pbWF0aW9uLnNhbXBsZXJzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGdsVEZBbmltYXRpb25zLnB1c2goZ2xURkFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX0FkZEFuaW1hdGlvbihcclxuICAgICAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgZ2xURkFuaW1hdGlvbjogSUFuaW1hdGlvbixcclxuICAgICAgICBiYWJ5bG9uVHJhbnNmb3JtTm9kZTogTm9kZSxcclxuICAgICAgICBhbmltYXRpb246IEFuaW1hdGlvbixcclxuICAgICAgICBkYXRhQWNjZXNzb3JUeXBlOiBBY2Nlc3NvclR5cGUsXHJcbiAgICAgICAgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGg6IEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLFxyXG4gICAgICAgIG5vZGVNYXA6IE1hcDxOb2RlLCBudW1iZXI+LFxyXG4gICAgICAgIGJ1ZmZlck1hbmFnZXI6IEJ1ZmZlck1hbmFnZXIsXHJcbiAgICAgICAgYnVmZmVyVmlld3M6IElCdWZmZXJWaWV3W10sXHJcbiAgICAgICAgYWNjZXNzb3JzOiBJQWNjZXNzb3JbXSxcclxuICAgICAgICB1c2VRdWF0ZXJuaW9uOiBib29sZWFuLFxyXG4gICAgICAgIGFuaW1hdGlvblNhbXBsZVJhdGU6IG51bWJlcixcclxuICAgICAgICBjb252ZXJ0VG9SaWdodEhhbmRlZDogYm9vbGVhbixcclxuICAgICAgICBtb3JwaEFuaW1hdGlvbkNoYW5uZWxzPzogbnVtYmVyXHJcbiAgICApIHtcclxuICAgICAgICBjb25zdCBhbmltYXRpb25EYXRhID0gX0dMVEZBbmltYXRpb24uX0NyZWF0ZU5vZGVBbmltYXRpb24oYmFieWxvblRyYW5zZm9ybU5vZGUsIGFuaW1hdGlvbiwgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsIHVzZVF1YXRlcm5pb24sIGFuaW1hdGlvblNhbXBsZVJhdGUpO1xyXG4gICAgICAgIGxldCBidWZmZXJWaWV3OiBJQnVmZmVyVmlldztcclxuICAgICAgICBsZXQgYWNjZXNzb3I6IElBY2Nlc3NvcjtcclxuICAgICAgICBsZXQga2V5ZnJhbWVBY2Nlc3NvckluZGV4OiBudW1iZXI7XHJcbiAgICAgICAgbGV0IGRhdGFBY2Nlc3NvckluZGV4OiBudW1iZXI7XHJcbiAgICAgICAgbGV0IGFuaW1hdGlvblNhbXBsZXI6IElBbmltYXRpb25TYW1wbGVyO1xyXG4gICAgICAgIGxldCBhbmltYXRpb25DaGFubmVsOiBJQW5pbWF0aW9uQ2hhbm5lbDtcclxuXHJcbiAgICAgICAgaWYgKGFuaW1hdGlvbkRhdGEpIHtcclxuICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICogTm93IHRoYXQgd2UgaGF2ZSB0aGUgZ2xURiBjb252ZXJ0ZWQgbW9ycGggdGFyZ2V0IGFuaW1hdGlvbiBkYXRhLFxyXG4gICAgICAgICAgICAgKiB3ZSBjYW4gcmVtb3ZlIHJlZHVuZGFudCBpbnB1dCBkYXRhIHNvIHRoYXQgd2UgaGF2ZSBuIGlucHV0IGZyYW1lcyxcclxuICAgICAgICAgICAgICogYW5kIG1vcnBoQW5pbWF0aW9uQ2hhbm5lbHMgKiBuIG91dHB1dCBmcmFtZXNcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGlmIChtb3JwaEFuaW1hdGlvbkNoYW5uZWxzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRJbnB1dDogbnVtYmVyID0gMDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0lucHV0czogbnVtYmVyW10gPSBbXTtcclxuICAgICAgICAgICAgICAgIHdoaWxlIChhbmltYXRpb25EYXRhLmlucHV0cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudElucHV0ID0gYW5pbWF0aW9uRGF0YS5pbnB1dHMuc2hpZnQoKSE7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ICUgbW9ycGhBbmltYXRpb25DaGFubmVscyA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0lucHV0cy5wdXNoKGN1cnJlbnRJbnB1dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4Kys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb25EYXRhLmlucHV0cyA9IG5ld0lucHV0cztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3Qgbm9kZUluZGV4ID0gbm9kZU1hcC5nZXQoYmFieWxvblRyYW5zZm9ybU5vZGUpO1xyXG5cclxuICAgICAgICAgICAgLy8gQ3JlYXRlIGJ1ZmZlciB2aWV3IGFuZCBhY2Nlc3NvciBmb3Iga2V5IGZyYW1lcy5cclxuICAgICAgICAgICAgY29uc3QgaW5wdXREYXRhID0gbmV3IEZsb2F0MzJBcnJheShhbmltYXRpb25EYXRhLmlucHV0cyk7XHJcbiAgICAgICAgICAgIGJ1ZmZlclZpZXcgPSBidWZmZXJNYW5hZ2VyLmNyZWF0ZUJ1ZmZlclZpZXcoaW5wdXREYXRhKTtcclxuICAgICAgICAgICAgYWNjZXNzb3IgPSBidWZmZXJNYW5hZ2VyLmNyZWF0ZUFjY2Vzc29yKGJ1ZmZlclZpZXcsIEFjY2Vzc29yVHlwZS5TQ0FMQVIsIEFjY2Vzc29yQ29tcG9uZW50VHlwZS5GTE9BVCwgYW5pbWF0aW9uRGF0YS5pbnB1dHMubGVuZ3RoLCB1bmRlZmluZWQsIHtcclxuICAgICAgICAgICAgICAgIG1pbjogW2FuaW1hdGlvbkRhdGEuaW5wdXRzTWluXSxcclxuICAgICAgICAgICAgICAgIG1heDogW2FuaW1hdGlvbkRhdGEuaW5wdXRzTWF4XSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGFjY2Vzc29ycy5wdXNoKGFjY2Vzc29yKTtcclxuICAgICAgICAgICAga2V5ZnJhbWVBY2Nlc3NvckluZGV4ID0gYWNjZXNzb3JzLmxlbmd0aCAtIDE7XHJcblxyXG4gICAgICAgICAgICAvLyBQZXJmb3JtIGNvbnZlcnNpb25zIG9uIGtleWVkIHZhbHVlcyB3aGlsZSBhbHNvIGJ1aWxkaW5nIHRoZWlyIGJ1ZmZlci5cclxuICAgICAgICAgICAgY29uc3Qgcm90YXRpb25RdWF0ZXJuaW9uID0gbmV3IFF1YXRlcm5pb24oKTtcclxuICAgICAgICAgICAgY29uc3QgZXVsZXJWZWMzID0gbmV3IFZlY3RvcjMoKTtcclxuICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSBuZXcgVmVjdG9yMygpO1xyXG4gICAgICAgICAgICBjb25zdCBpc0NhbWVyYSA9IGJhYnlsb25UcmFuc2Zvcm1Ob2RlIGluc3RhbmNlb2YgQ2FtZXJhO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudENvdW50ID0gR2V0QWNjZXNzb3JFbGVtZW50Q291bnQoZGF0YUFjY2Vzc29yVHlwZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG91dHB1dERhdGEgPSBuZXcgRmxvYXQzMkFycmF5KGFuaW1hdGlvbkRhdGEub3V0cHV0cy5sZW5ndGggKiBlbGVtZW50Q291bnQpO1xyXG4gICAgICAgICAgICBhbmltYXRpb25EYXRhLm91dHB1dHMuZm9yRWFjaChmdW5jdGlvbiAob3V0cHV0OiBudW1iZXJbXSwgaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgICAgICAgICAgbGV0IG91dHB1dFRvV3JpdGU6IG51bWJlcltdID0gb3V0cHV0O1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbnZlcnRUb1JpZ2h0SGFuZGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLlRSQU5TTEFUSU9OOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVmVjdG9yMy5Gcm9tQXJyYXlUb1JlZihvdXRwdXQsIDAsIHBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnZlcnRUb1JpZ2h0SGFuZGVkUG9zaXRpb24ocG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24udG9BcnJheShvdXRwdXRUb1dyaXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLlJPVEFUSU9OOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG91dHB1dC5sZW5ndGggPT09IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBRdWF0ZXJuaW9uLkZyb21BcnJheVRvUmVmKG91dHB1dCwgMCwgcm90YXRpb25RdWF0ZXJuaW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0VG9Xcml0ZSA9IG5ldyBBcnJheSg0KTsgLy8gV2lsbCBuZWVkIDQsIG5vdCAzLCBmb3IgYSBxdWF0ZXJuaW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmVjdG9yMy5Gcm9tQXJyYXlUb1JlZihvdXRwdXQsIDAsIGV1bGVyVmVjMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUXVhdGVybmlvbi5Gcm9tRXVsZXJWZWN0b3JUb1JlZihldWxlclZlYzMsIHJvdGF0aW9uUXVhdGVybmlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzQ2FtZXJhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29udmVydENhbWVyYVJvdGF0aW9uVG9HTFRGKHJvdGF0aW9uUXVhdGVybmlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghUXVhdGVybmlvbi5Jc0lkZW50aXR5KHJvdGF0aW9uUXVhdGVybmlvbikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29udmVydFRvUmlnaHRIYW5kZWRSb3RhdGlvbihyb3RhdGlvblF1YXRlcm5pb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3RhdGlvblF1YXRlcm5pb24udG9BcnJheShvdXRwdXRUb1dyaXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLlJPVEFUSU9OOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG91dHB1dC5sZW5ndGggPT09IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBRdWF0ZXJuaW9uLkZyb21BcnJheVRvUmVmKG91dHB1dCwgMCwgcm90YXRpb25RdWF0ZXJuaW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0VG9Xcml0ZSA9IG5ldyBBcnJheSg0KTsgLy8gV2lsbCBuZWVkIDQsIG5vdCAzLCBmb3IgYSBxdWF0ZXJuaW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmVjdG9yMy5Gcm9tQXJyYXlUb1JlZihvdXRwdXQsIDAsIGV1bGVyVmVjMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUXVhdGVybmlvbi5Gcm9tRXVsZXJWZWN0b3JUb1JlZihldWxlclZlYzMsIHJvdGF0aW9uUXVhdGVybmlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzQ2FtZXJhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29udmVydENhbWVyYVJvdGF0aW9uVG9HTFRGKHJvdGF0aW9uUXVhdGVybmlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm90YXRpb25RdWF0ZXJuaW9uLnRvQXJyYXkob3V0cHV0VG9Xcml0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBvdXRwdXREYXRhLnNldChvdXRwdXRUb1dyaXRlLCBpbmRleCAqIGVsZW1lbnRDb3VudCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gQ3JlYXRlIGJ1ZmZlciB2aWV3IGFuZCBhY2Nlc3NvciBmb3Iga2V5ZWQgdmFsdWVzLlxyXG4gICAgICAgICAgICBidWZmZXJWaWV3ID0gYnVmZmVyTWFuYWdlci5jcmVhdGVCdWZmZXJWaWV3KG91dHB1dERhdGEpO1xyXG4gICAgICAgICAgICBhY2Nlc3NvciA9IGJ1ZmZlck1hbmFnZXIuY3JlYXRlQWNjZXNzb3IoYnVmZmVyVmlldywgZGF0YUFjY2Vzc29yVHlwZSwgQWNjZXNzb3JDb21wb25lbnRUeXBlLkZMT0FULCBhbmltYXRpb25EYXRhLm91dHB1dHMubGVuZ3RoKTtcclxuICAgICAgICAgICAgYWNjZXNzb3JzLnB1c2goYWNjZXNzb3IpO1xyXG4gICAgICAgICAgICBkYXRhQWNjZXNzb3JJbmRleCA9IGFjY2Vzc29ycy5sZW5ndGggLSAxO1xyXG5cclxuICAgICAgICAgICAgLy8gY3JlYXRlIHNhbXBsZXJcclxuICAgICAgICAgICAgYW5pbWF0aW9uU2FtcGxlciA9IHtcclxuICAgICAgICAgICAgICAgIGludGVycG9sYXRpb246IGFuaW1hdGlvbkRhdGEuc2FtcGxlckludGVycG9sYXRpb24sXHJcbiAgICAgICAgICAgICAgICBpbnB1dDoga2V5ZnJhbWVBY2Nlc3NvckluZGV4LFxyXG4gICAgICAgICAgICAgICAgb3V0cHV0OiBkYXRhQWNjZXNzb3JJbmRleCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZ2xURkFuaW1hdGlvbi5zYW1wbGVycy5wdXNoKGFuaW1hdGlvblNhbXBsZXIpO1xyXG5cclxuICAgICAgICAgICAgLy8gY3JlYXRlIGNoYW5uZWxcclxuICAgICAgICAgICAgYW5pbWF0aW9uQ2hhbm5lbCA9IHtcclxuICAgICAgICAgICAgICAgIHNhbXBsZXI6IGdsVEZBbmltYXRpb24uc2FtcGxlcnMubGVuZ3RoIC0gMSxcclxuICAgICAgICAgICAgICAgIHRhcmdldDoge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGU6IG5vZGVJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGdsVEZBbmltYXRpb24uY2hhbm5lbHMucHVzaChhbmltYXRpb25DaGFubmVsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBiYWtlZCBhbmltYXRpb25cclxuICAgICAqIEBwYXJhbSBiYWJ5bG9uVHJhbnNmb3JtTm9kZSBCYWJ5bG9uSlMgbWVzaFxyXG4gICAgICogQHBhcmFtIGFuaW1hdGlvbiBCYWJ5bG9uSlMgYW5pbWF0aW9uIGNvcnJlc3BvbmRpbmcgdG8gdGhlIEJhYnlsb25KUyBtZXNoXHJcbiAgICAgKiBAcGFyYW0gYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGggYW5pbWF0aW9uIHRhcmdldCBjaGFubmVsXHJcbiAgICAgKiBAcGFyYW0gbWluRnJhbWUgbWluaW11bSBhbmltYXRpb24gZnJhbWVcclxuICAgICAqIEBwYXJhbSBtYXhGcmFtZSBtYXhpbXVtIGFuaW1hdGlvbiBmcmFtZVxyXG4gICAgICogQHBhcmFtIGZwcyBmcmFtZXMgcGVyIHNlY29uZCBvZiB0aGUgYW5pbWF0aW9uXHJcbiAgICAgKiBAcGFyYW0gc2FtcGxlUmF0ZVxyXG4gICAgICogQHBhcmFtIGlucHV0cyBpbnB1dCBrZXkgZnJhbWVzIG9mIHRoZSBhbmltYXRpb25cclxuICAgICAqIEBwYXJhbSBvdXRwdXRzIG91dHB1dCBrZXkgZnJhbWUgZGF0YSBvZiB0aGUgYW5pbWF0aW9uXHJcbiAgICAgKiBAcGFyYW0gbWluTWF4RnJhbWVzXHJcbiAgICAgKiBAcGFyYW0gbWluTWF4RnJhbWVzLm1pblxyXG4gICAgICogQHBhcmFtIG1pbk1heEZyYW1lcy5tYXhcclxuICAgICAqIEBwYXJhbSB1c2VRdWF0ZXJuaW9uIHNwZWNpZmllcyBpZiBxdWF0ZXJuaW9ucyBzaG91bGQgYmUgdXNlZFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfQ3JlYXRlQmFrZWRBbmltYXRpb24oXHJcbiAgICAgICAgYmFieWxvblRyYW5zZm9ybU5vZGU6IE5vZGUsXHJcbiAgICAgICAgYW5pbWF0aW9uOiBBbmltYXRpb24sXHJcbiAgICAgICAgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGg6IEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLFxyXG4gICAgICAgIG1pbkZyYW1lOiBudW1iZXIsXHJcbiAgICAgICAgbWF4RnJhbWU6IG51bWJlcixcclxuICAgICAgICBmcHM6IG51bWJlcixcclxuICAgICAgICBzYW1wbGVSYXRlOiBudW1iZXIsXHJcbiAgICAgICAgaW5wdXRzOiBudW1iZXJbXSxcclxuICAgICAgICBvdXRwdXRzOiBudW1iZXJbXVtdLFxyXG4gICAgICAgIG1pbk1heEZyYW1lczogeyBtaW46IG51bWJlcjsgbWF4OiBudW1iZXIgfSxcclxuICAgICAgICB1c2VRdWF0ZXJuaW9uOiBib29sZWFuXHJcbiAgICApIHtcclxuICAgICAgICBsZXQgdmFsdWU6IG51bWJlciB8IFZlY3RvcjMgfCBRdWF0ZXJuaW9uO1xyXG4gICAgICAgIGNvbnN0IHF1YXRlcm5pb25DYWNoZTogUXVhdGVybmlvbiA9IFF1YXRlcm5pb24uSWRlbnRpdHkoKTtcclxuICAgICAgICBsZXQgcHJldmlvdXNUaW1lOiBOdWxsYWJsZTxudW1iZXI+ID0gbnVsbDtcclxuICAgICAgICBsZXQgdGltZTogbnVtYmVyO1xyXG4gICAgICAgIGxldCBtYXhVc2VkRnJhbWU6IE51bGxhYmxlPG51bWJlcj4gPSBudWxsO1xyXG4gICAgICAgIGxldCBjdXJyS2V5RnJhbWU6IE51bGxhYmxlPElBbmltYXRpb25LZXk+ID0gbnVsbDtcclxuICAgICAgICBsZXQgbmV4dEtleUZyYW1lOiBOdWxsYWJsZTxJQW5pbWF0aW9uS2V5PiA9IG51bGw7XHJcbiAgICAgICAgbGV0IHByZXZLZXlGcmFtZTogTnVsbGFibGU8SUFuaW1hdGlvbktleT4gPSBudWxsO1xyXG4gICAgICAgIGxldCBlbmRGcmFtZTogTnVsbGFibGU8bnVtYmVyPiA9IG51bGw7XHJcbiAgICAgICAgbWluTWF4RnJhbWVzLm1pbiA9IFRvb2xzLkZsb2F0Um91bmQobWluRnJhbWUgLyBmcHMpO1xyXG5cclxuICAgICAgICBjb25zdCBrZXlGcmFtZXMgPSBhbmltYXRpb24uZ2V0S2V5cygpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuZ3RoID0ga2V5RnJhbWVzLmxlbmd0aDsgaSA8IGxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIGVuZEZyYW1lID0gbnVsbDtcclxuICAgICAgICAgICAgY3VycktleUZyYW1lID0ga2V5RnJhbWVzW2ldO1xyXG5cclxuICAgICAgICAgICAgaWYgKGkgKyAxIDwgbGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBuZXh0S2V5RnJhbWUgPSBrZXlGcmFtZXNbaSArIDFdO1xyXG4gICAgICAgICAgICAgICAgaWYgKChjdXJyS2V5RnJhbWUudmFsdWUuZXF1YWxzICYmIGN1cnJLZXlGcmFtZS52YWx1ZS5lcXVhbHMobmV4dEtleUZyYW1lLnZhbHVlKSkgfHwgY3VycktleUZyYW1lLnZhbHVlID09PSBuZXh0S2V5RnJhbWUudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzZXQgdGhlIGZpcnN0IGZyYW1lIHRvIGl0c2VsZlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRGcmFtZSA9IGN1cnJLZXlGcmFtZS5mcmFtZTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuZEZyYW1lID0gbmV4dEtleUZyYW1lLmZyYW1lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gYXQgdGhlIGxhc3Qga2V5IGZyYW1lXHJcbiAgICAgICAgICAgICAgICBwcmV2S2V5RnJhbWUgPSBrZXlGcmFtZXNbaSAtIDFdO1xyXG4gICAgICAgICAgICAgICAgaWYgKChjdXJyS2V5RnJhbWUudmFsdWUuZXF1YWxzICYmIGN1cnJLZXlGcmFtZS52YWx1ZS5lcXVhbHMocHJldktleUZyYW1lLnZhbHVlKSkgfHwgY3VycktleUZyYW1lLnZhbHVlID09PSBwcmV2S2V5RnJhbWUudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5kRnJhbWUgPSBtYXhGcmFtZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZW5kRnJhbWUpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGYgPSBjdXJyS2V5RnJhbWUuZnJhbWU7IGYgPD0gZW5kRnJhbWU7IGYgKz0gc2FtcGxlUmF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWUgPSBUb29scy5GbG9hdFJvdW5kKGYgLyBmcHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aW1lID09PSBwcmV2aW91c1RpbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzVGltZSA9IHRpbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4VXNlZEZyYW1lID0gdGltZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXBlYXRDb3VudDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9vcE1vZGU6IGFuaW1hdGlvbi5sb29wTW9kZSxcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gYW5pbWF0aW9uLl9pbnRlcnBvbGF0ZShmLCBzdGF0ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIF9HTFRGQW5pbWF0aW9uLl9TZXRJbnRlcnBvbGF0ZWRWYWx1ZShiYWJ5bG9uVHJhbnNmb3JtTm9kZSwgdmFsdWUsIHRpbWUsIGFuaW1hdGlvbiwgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsIHF1YXRlcm5pb25DYWNoZSwgaW5wdXRzLCBvdXRwdXRzLCB1c2VRdWF0ZXJuaW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWF4VXNlZEZyYW1lKSB7XHJcbiAgICAgICAgICAgIG1pbk1heEZyYW1lcy5tYXggPSBtYXhVc2VkRnJhbWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9Db252ZXJ0RmFjdG9yVG9WZWN0b3IzT3JRdWF0ZXJuaW9uKFxyXG4gICAgICAgIGZhY3RvcjogbnVtYmVyLFxyXG4gICAgICAgIGJhYnlsb25UcmFuc2Zvcm1Ob2RlOiBOb2RlLFxyXG4gICAgICAgIGFuaW1hdGlvbjogQW5pbWF0aW9uLFxyXG4gICAgICAgIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoOiBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCxcclxuICAgICAgICB1c2VRdWF0ZXJuaW9uOiBib29sZWFuXHJcbiAgICApOiBWZWN0b3IzIHwgUXVhdGVybmlvbiB7XHJcbiAgICAgICAgY29uc3QgYmFzZVBvc2l0aW9uUm90YXRpb25PclNjYWxlID0gX0dMVEZBbmltYXRpb24uX0dldEJhc2VQb3NpdGlvblJvdGF0aW9uT3JTY2FsZShiYWJ5bG9uVHJhbnNmb3JtTm9kZSwgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsIHVzZVF1YXRlcm5pb24pO1xyXG4gICAgICAgIC8vIGhhbmRsZXMgc2luZ2xlIGNvbXBvbmVudCB4LCB5LCB6IG9yIHcgY29tcG9uZW50IGFuaW1hdGlvbiBieSB1c2luZyBhIGJhc2UgcHJvcGVydHkgYW5kIGFuaW1hdGluZyBvdmVyIGEgY29tcG9uZW50LlxyXG4gICAgICAgIGNvbnN0IHByb3BlcnR5ID0gYW5pbWF0aW9uLnRhcmdldFByb3BlcnR5LnNwbGl0KFwiLlwiKTtcclxuICAgICAgICBjb25zdCBjb21wb25lbnROYW1lID0gcHJvcGVydHkgPyBwcm9wZXJ0eVsxXSA6IFwiXCI7IC8vIHgsIHksIHosIG9yIHcgY29tcG9uZW50XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSB1c2VRdWF0ZXJuaW9uID8gUXVhdGVybmlvbi5Gcm9tQXJyYXkoYmFzZVBvc2l0aW9uUm90YXRpb25PclNjYWxlKS5ub3JtYWxpemUoKSA6IFZlY3RvcjMuRnJvbUFycmF5KGJhc2VQb3NpdGlvblJvdGF0aW9uT3JTY2FsZSk7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoY29tcG9uZW50TmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwieFwiOlxyXG4gICAgICAgICAgICBjYXNlIFwieVwiOlxyXG4gICAgICAgICAgICBjYXNlIFwielwiOiB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZVtjb21wb25lbnROYW1lXSA9IGZhY3RvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJ3XCI6IHtcclxuICAgICAgICAgICAgICAgICh2YWx1ZSBhcyBRdWF0ZXJuaW9uKS53ID0gZmFjdG9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICAgICAgVG9vbHMuRXJyb3IoYGdsVEZBbmltYXRpb246IFVuc3VwcG9ydGVkIGNvbXBvbmVudCBuYW1lIFwiJHtjb21wb25lbnROYW1lfVwiIWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX1NldEludGVycG9sYXRlZFZhbHVlKFxyXG4gICAgICAgIGJhYnlsb25UcmFuc2Zvcm1Ob2RlOiBOb2RlLFxyXG4gICAgICAgIHZhbHVlOiBudW1iZXIgfCBWZWN0b3IzIHwgUXVhdGVybmlvbixcclxuICAgICAgICB0aW1lOiBudW1iZXIsXHJcbiAgICAgICAgYW5pbWF0aW9uOiBBbmltYXRpb24sXHJcbiAgICAgICAgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGg6IEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLFxyXG4gICAgICAgIHF1YXRlcm5pb25DYWNoZTogUXVhdGVybmlvbixcclxuICAgICAgICBpbnB1dHM6IG51bWJlcltdLFxyXG4gICAgICAgIG91dHB1dHM6IG51bWJlcltdW10sXHJcbiAgICAgICAgdXNlUXVhdGVybmlvbjogYm9vbGVhblxyXG4gICAgKSB7XHJcbiAgICAgICAgbGV0IGNhY2hlVmFsdWU6IFZlY3RvcjMgfCBRdWF0ZXJuaW9uIHwgbnVtYmVyO1xyXG4gICAgICAgIGlucHV0cy5wdXNoKHRpbWUpO1xyXG5cclxuICAgICAgICBpZiAoYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGggPT09IEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLldFSUdIVFMpIHtcclxuICAgICAgICAgICAgb3V0cHV0cy5wdXNoKFt2YWx1ZSBhcyBudW1iZXJdKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGFuaW1hdGlvbi5kYXRhVHlwZSA9PT0gQW5pbWF0aW9uLkFOSU1BVElPTlRZUEVfRkxPQVQpIHtcclxuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLl9Db252ZXJ0RmFjdG9yVG9WZWN0b3IzT3JRdWF0ZXJuaW9uKHZhbHVlIGFzIG51bWJlciwgYmFieWxvblRyYW5zZm9ybU5vZGUsIGFuaW1hdGlvbiwgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsIHVzZVF1YXRlcm5pb24pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoID09PSBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aC5ST1RBVElPTikge1xyXG4gICAgICAgICAgICBpZiAodXNlUXVhdGVybmlvbikge1xyXG4gICAgICAgICAgICAgICAgcXVhdGVybmlvbkNhY2hlID0gdmFsdWUgYXMgUXVhdGVybmlvbjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNhY2hlVmFsdWUgPSB2YWx1ZSBhcyBWZWN0b3IzO1xyXG4gICAgICAgICAgICAgICAgUXVhdGVybmlvbi5Sb3RhdGlvbllhd1BpdGNoUm9sbFRvUmVmKGNhY2hlVmFsdWUueSwgY2FjaGVWYWx1ZS54LCBjYWNoZVZhbHVlLnosIHF1YXRlcm5pb25DYWNoZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3V0cHV0cy5wdXNoKHF1YXRlcm5pb25DYWNoZS5hc0FycmF5KCkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIHNjYWxpbmcgYW5kIHBvc2l0aW9uIGFuaW1hdGlvblxyXG4gICAgICAgICAgICBjYWNoZVZhbHVlID0gdmFsdWUgYXMgVmVjdG9yMztcclxuICAgICAgICAgICAgb3V0cHV0cy5wdXNoKGNhY2hlVmFsdWUuYXNBcnJheSgpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGxpbmVhciBhbmltYXRpb24gZnJvbSB0aGUgYW5pbWF0aW9uIGtleSBmcmFtZXNcclxuICAgICAqIEBwYXJhbSBiYWJ5bG9uVHJhbnNmb3JtTm9kZSBCYWJ5bG9uSlMgbWVzaFxyXG4gICAgICogQHBhcmFtIGFuaW1hdGlvbiBCYWJ5bG9uSlMgYW5pbWF0aW9uXHJcbiAgICAgKiBAcGFyYW0gYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGggVGhlIHRhcmdldCBhbmltYXRpb24gY2hhbm5lbFxyXG4gICAgICogQHBhcmFtIGlucHV0cyBBcnJheSB0byBzdG9yZSB0aGUga2V5IGZyYW1lIHRpbWVzXHJcbiAgICAgKiBAcGFyYW0gb3V0cHV0cyBBcnJheSB0byBzdG9yZSB0aGUga2V5IGZyYW1lIGRhdGFcclxuICAgICAqIEBwYXJhbSB1c2VRdWF0ZXJuaW9uIFNwZWNpZmllcyBpZiBxdWF0ZXJuaW9ucyBhcmUgdXNlZCBpbiB0aGUgYW5pbWF0aW9uXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIF9DcmVhdGVMaW5lYXJPclN0ZXBBbmltYXRpb24oXHJcbiAgICAgICAgYmFieWxvblRyYW5zZm9ybU5vZGU6IE5vZGUsXHJcbiAgICAgICAgYW5pbWF0aW9uOiBBbmltYXRpb24sXHJcbiAgICAgICAgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGg6IEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLFxyXG4gICAgICAgIGlucHV0czogbnVtYmVyW10sXHJcbiAgICAgICAgb3V0cHV0czogbnVtYmVyW11bXSxcclxuICAgICAgICB1c2VRdWF0ZXJuaW9uOiBib29sZWFuXHJcbiAgICApIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleUZyYW1lIG9mIGFuaW1hdGlvbi5nZXRLZXlzKCkpIHtcclxuICAgICAgICAgICAgaW5wdXRzLnB1c2goa2V5RnJhbWUuZnJhbWUgLyBhbmltYXRpb24uZnJhbWVQZXJTZWNvbmQpOyAvLyBrZXlmcmFtZXMgaW4gc2Vjb25kcy5cclxuICAgICAgICAgICAgX0dMVEZBbmltYXRpb24uX0FkZEtleWZyYW1lVmFsdWUoa2V5RnJhbWUsIGFuaW1hdGlvbiwgb3V0cHV0cywgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsIGJhYnlsb25UcmFuc2Zvcm1Ob2RlLCB1c2VRdWF0ZXJuaW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGN1YmljIHNwbGluZSBhbmltYXRpb24gZnJvbSB0aGUgYW5pbWF0aW9uIGtleSBmcmFtZXNcclxuICAgICAqIEBwYXJhbSBiYWJ5bG9uVHJhbnNmb3JtTm9kZSBCYWJ5bG9uSlMgbWVzaFxyXG4gICAgICogQHBhcmFtIGFuaW1hdGlvbiBCYWJ5bG9uSlMgYW5pbWF0aW9uXHJcbiAgICAgKiBAcGFyYW0gYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGggVGhlIHRhcmdldCBhbmltYXRpb24gY2hhbm5lbFxyXG4gICAgICogQHBhcmFtIGlucHV0cyBBcnJheSB0byBzdG9yZSB0aGUga2V5IGZyYW1lIHRpbWVzXHJcbiAgICAgKiBAcGFyYW0gb3V0cHV0cyBBcnJheSB0byBzdG9yZSB0aGUga2V5IGZyYW1lIGRhdGFcclxuICAgICAqIEBwYXJhbSB1c2VRdWF0ZXJuaW9uIFNwZWNpZmllcyBpZiBxdWF0ZXJuaW9ucyBhcmUgdXNlZCBpbiB0aGUgYW5pbWF0aW9uXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIF9DcmVhdGVDdWJpY1NwbGluZUFuaW1hdGlvbihcclxuICAgICAgICBiYWJ5bG9uVHJhbnNmb3JtTm9kZTogTm9kZSxcclxuICAgICAgICBhbmltYXRpb246IEFuaW1hdGlvbixcclxuICAgICAgICBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aDogQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsXHJcbiAgICAgICAgaW5wdXRzOiBudW1iZXJbXSxcclxuICAgICAgICBvdXRwdXRzOiBudW1iZXJbXVtdLFxyXG4gICAgICAgIHVzZVF1YXRlcm5pb246IGJvb2xlYW5cclxuICAgICkge1xyXG4gICAgICAgIGFuaW1hdGlvbi5nZXRLZXlzKCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5RnJhbWUpIHtcclxuICAgICAgICAgICAgaW5wdXRzLnB1c2goa2V5RnJhbWUuZnJhbWUgLyBhbmltYXRpb24uZnJhbWVQZXJTZWNvbmQpOyAvLyBrZXlmcmFtZXMgaW4gc2Vjb25kcy5cclxuICAgICAgICAgICAgX0dMVEZBbmltYXRpb24uX0FkZFNwbGluZVRhbmdlbnQoX1RhbmdlbnRUeXBlLklOVEFOR0VOVCwgb3V0cHV0cywgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsIEFuaW1hdGlvblNhbXBsZXJJbnRlcnBvbGF0aW9uLkNVQklDU1BMSU5FLCBrZXlGcmFtZSwgdXNlUXVhdGVybmlvbik7XHJcbiAgICAgICAgICAgIF9HTFRGQW5pbWF0aW9uLl9BZGRLZXlmcmFtZVZhbHVlKGtleUZyYW1lLCBhbmltYXRpb24sIG91dHB1dHMsIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLCBiYWJ5bG9uVHJhbnNmb3JtTm9kZSwgdXNlUXVhdGVybmlvbik7XHJcblxyXG4gICAgICAgICAgICBfR0xURkFuaW1hdGlvbi5fQWRkU3BsaW5lVGFuZ2VudChfVGFuZ2VudFR5cGUuT1VUVEFOR0VOVCwgb3V0cHV0cywgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsIEFuaW1hdGlvblNhbXBsZXJJbnRlcnBvbGF0aW9uLkNVQklDU1BMSU5FLCBrZXlGcmFtZSwgdXNlUXVhdGVybmlvbik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX0dldEJhc2VQb3NpdGlvblJvdGF0aW9uT3JTY2FsZShiYWJ5bG9uVHJhbnNmb3JtTm9kZTogTm9kZSwgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGg6IEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLCB1c2VRdWF0ZXJuaW9uOiBib29sZWFuKSB7XHJcbiAgICAgICAgbGV0IGJhc2VQb3NpdGlvblJvdGF0aW9uT3JTY2FsZTogbnVtYmVyW107XHJcbiAgICAgICAgaWYgKGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoID09PSBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aC5ST1RBVElPTikge1xyXG4gICAgICAgICAgICBpZiAodXNlUXVhdGVybmlvbikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcSA9IChiYWJ5bG9uVHJhbnNmb3JtTm9kZSBhcyBUcmFuc2Zvcm1Ob2RlKS5yb3RhdGlvblF1YXRlcm5pb247XHJcbiAgICAgICAgICAgICAgICBiYXNlUG9zaXRpb25Sb3RhdGlvbk9yU2NhbGUgPSAocSA/PyBRdWF0ZXJuaW9uLklkZW50aXR5KCkpLmFzQXJyYXkoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHI6IFZlY3RvcjMgPSAoYmFieWxvblRyYW5zZm9ybU5vZGUgYXMgVHJhbnNmb3JtTm9kZSkucm90YXRpb247XHJcbiAgICAgICAgICAgICAgICBiYXNlUG9zaXRpb25Sb3RhdGlvbk9yU2NhbGUgPSAociA/PyBWZWN0b3IzLlplcm8oKSkuYXNBcnJheSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCA9PT0gQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGguVFJBTlNMQVRJT04pIHtcclxuICAgICAgICAgICAgY29uc3QgcDogVmVjdG9yMyA9IChiYWJ5bG9uVHJhbnNmb3JtTm9kZSBhcyBUcmFuc2Zvcm1Ob2RlKS5wb3NpdGlvbjtcclxuICAgICAgICAgICAgYmFzZVBvc2l0aW9uUm90YXRpb25PclNjYWxlID0gKHAgPz8gVmVjdG9yMy5aZXJvKCkpLmFzQXJyYXkoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBzY2FsZVxyXG4gICAgICAgICAgICBjb25zdCBzOiBWZWN0b3IzID0gKGJhYnlsb25UcmFuc2Zvcm1Ob2RlIGFzIFRyYW5zZm9ybU5vZGUpLnNjYWxpbmc7XHJcbiAgICAgICAgICAgIGJhc2VQb3NpdGlvblJvdGF0aW9uT3JTY2FsZSA9IChzID8/IFZlY3RvcjMuT25lKCkpLmFzQXJyYXkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGJhc2VQb3NpdGlvblJvdGF0aW9uT3JTY2FsZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgYSBrZXkgZnJhbWUgdmFsdWVcclxuICAgICAqIEBwYXJhbSBrZXlGcmFtZVxyXG4gICAgICogQHBhcmFtIGFuaW1hdGlvblxyXG4gICAgICogQHBhcmFtIG91dHB1dHNcclxuICAgICAqIEBwYXJhbSBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aFxyXG4gICAgICogQHBhcmFtIGJhYnlsb25UcmFuc2Zvcm1Ob2RlXHJcbiAgICAgKiBAcGFyYW0gdXNlUXVhdGVybmlvblxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfQWRkS2V5ZnJhbWVWYWx1ZShcclxuICAgICAgICBrZXlGcmFtZTogSUFuaW1hdGlvbktleSxcclxuICAgICAgICBhbmltYXRpb246IEFuaW1hdGlvbixcclxuICAgICAgICBvdXRwdXRzOiBudW1iZXJbXVtdLFxyXG4gICAgICAgIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoOiBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCxcclxuICAgICAgICBiYWJ5bG9uVHJhbnNmb3JtTm9kZTogTm9kZSxcclxuICAgICAgICB1c2VRdWF0ZXJuaW9uOiBib29sZWFuXHJcbiAgICApIHtcclxuICAgICAgICBsZXQgbmV3UG9zaXRpb25Sb3RhdGlvbk9yU2NhbGU6IE51bGxhYmxlPFZlY3RvcjMgfCBRdWF0ZXJuaW9uIHwgbnVtYmVyPjtcclxuICAgICAgICBjb25zdCBhbmltYXRpb25UeXBlID0gYW5pbWF0aW9uLmRhdGFUeXBlO1xyXG4gICAgICAgIGlmIChhbmltYXRpb25UeXBlID09PSBBbmltYXRpb24uQU5JTUFUSU9OVFlQRV9WRUNUT1IzKSB7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IGtleUZyYW1lLnZhbHVlLmFzQXJyYXkoKTtcclxuICAgICAgICAgICAgaWYgKGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoID09PSBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aC5ST1RBVElPTikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXJyYXkgPSBWZWN0b3IzLkZyb21BcnJheSh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByb3RhdGlvblF1YXRlcm5pb24gPSBRdWF0ZXJuaW9uLlJvdGF0aW9uWWF3UGl0Y2hSb2xsKGFycmF5LnksIGFycmF5LngsIGFycmF5LnopO1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSByb3RhdGlvblF1YXRlcm5pb24uYXNBcnJheSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG91dHB1dHMucHVzaCh2YWx1ZSk7IC8vIHNjYWxlICB2ZWN0b3IuXHJcbiAgICAgICAgfSBlbHNlIGlmIChhbmltYXRpb25UeXBlID09PSBBbmltYXRpb24uQU5JTUFUSU9OVFlQRV9GTE9BVCkge1xyXG4gICAgICAgICAgICBpZiAoYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGggPT09IEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLldFSUdIVFMpIHtcclxuICAgICAgICAgICAgICAgIG91dHB1dHMucHVzaChba2V5RnJhbWUudmFsdWVdKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIGhhbmRsZXMgc2luZ2xlIGNvbXBvbmVudCB4LCB5LCB6IG9yIHcgY29tcG9uZW50IGFuaW1hdGlvbiBieSB1c2luZyBhIGJhc2UgcHJvcGVydHkgYW5kIGFuaW1hdGluZyBvdmVyIGEgY29tcG9uZW50LlxyXG4gICAgICAgICAgICAgICAgbmV3UG9zaXRpb25Sb3RhdGlvbk9yU2NhbGUgPSB0aGlzLl9Db252ZXJ0RmFjdG9yVG9WZWN0b3IzT3JRdWF0ZXJuaW9uKFxyXG4gICAgICAgICAgICAgICAgICAgIGtleUZyYW1lLnZhbHVlIGFzIG51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uVHJhbnNmb3JtTm9kZSxcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlUXVhdGVybmlvblxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGlmIChuZXdQb3NpdGlvblJvdGF0aW9uT3JTY2FsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCA9PT0gQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGguUk9UQVRJT04pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9zUm90U2NhbGUgPSB1c2VRdWF0ZXJuaW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IChuZXdQb3NpdGlvblJvdGF0aW9uT3JTY2FsZSBhcyBRdWF0ZXJuaW9uKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBRdWF0ZXJuaW9uLlJvdGF0aW9uWWF3UGl0Y2hSb2xsKG5ld1Bvc2l0aW9uUm90YXRpb25PclNjYWxlLnksIG5ld1Bvc2l0aW9uUm90YXRpb25PclNjYWxlLngsIG5ld1Bvc2l0aW9uUm90YXRpb25PclNjYWxlLnopLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRzLnB1c2gocG9zUm90U2NhbGUuYXNBcnJheSgpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0cy5wdXNoKG5ld1Bvc2l0aW9uUm90YXRpb25PclNjYWxlLmFzQXJyYXkoKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGFuaW1hdGlvblR5cGUgPT09IEFuaW1hdGlvbi5BTklNQVRJT05UWVBFX1FVQVRFUk5JT04pIHtcclxuICAgICAgICAgICAgb3V0cHV0cy5wdXNoKChrZXlGcmFtZS52YWx1ZSBhcyBRdWF0ZXJuaW9uKS5ub3JtYWxpemUoKS5hc0FycmF5KCkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIFRvb2xzLkVycm9yKFwiZ2xURkFuaW1hdGlvbjogVW5zdXBwb3J0ZWQga2V5IGZyYW1lIHZhbHVlcyBmb3IgYW5pbWF0aW9uIVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqIERldGVybWluZSB0aGUgaW50ZXJwb2xhdGlvbiBiYXNlZCBvbiB0aGUga2V5IGZyYW1lc1xyXG4gICAgICogQHBhcmFtIGtleUZyYW1lc1xyXG4gICAgICogQHBhcmFtIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoXHJcbiAgICAgKiBAcGFyYW0gdXNlUXVhdGVybmlvblxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfRGVkdWNlSW50ZXJwb2xhdGlvbihcclxuICAgICAgICBrZXlGcmFtZXM6IElBbmltYXRpb25LZXlbXSxcclxuICAgICAgICBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aDogQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsXHJcbiAgICAgICAgdXNlUXVhdGVybmlvbjogYm9vbGVhblxyXG4gICAgKTogeyBpbnRlcnBvbGF0aW9uVHlwZTogQW5pbWF0aW9uU2FtcGxlckludGVycG9sYXRpb247IHNob3VsZEJha2VBbmltYXRpb246IGJvb2xlYW4gfSB7XHJcbiAgICAgICAgbGV0IGludGVycG9sYXRpb25UeXBlOiBBbmltYXRpb25TYW1wbGVySW50ZXJwb2xhdGlvbiB8IHVuZGVmaW5lZDtcclxuICAgICAgICBsZXQgc2hvdWxkQmFrZUFuaW1hdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBrZXk6IElBbmltYXRpb25LZXk7XHJcblxyXG4gICAgICAgIGlmIChhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCA9PT0gQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGguUk9UQVRJT04gJiYgIXVzZVF1YXRlcm5pb24pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgaW50ZXJwb2xhdGlvblR5cGU6IEFuaW1hdGlvblNhbXBsZXJJbnRlcnBvbGF0aW9uLkxJTkVBUiwgc2hvdWxkQmFrZUFuaW1hdGlvbjogdHJ1ZSB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbmd0aCA9IGtleUZyYW1lcy5sZW5ndGg7IGkgPCBsZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBrZXkgPSBrZXlGcmFtZXNbaV07XHJcbiAgICAgICAgICAgIGlmIChrZXkuaW5UYW5nZW50IHx8IGtleS5vdXRUYW5nZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW50ZXJwb2xhdGlvblR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW50ZXJwb2xhdGlvblR5cGUgIT09IEFuaW1hdGlvblNhbXBsZXJJbnRlcnBvbGF0aW9uLkNVQklDU1BMSU5FKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGludGVycG9sYXRpb25UeXBlID0gQW5pbWF0aW9uU2FtcGxlckludGVycG9sYXRpb24uTElORUFSO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG91bGRCYWtlQW5pbWF0aW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnRlcnBvbGF0aW9uVHlwZSA9IEFuaW1hdGlvblNhbXBsZXJJbnRlcnBvbGF0aW9uLkNVQklDU1BMSU5FO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGludGVycG9sYXRpb25UeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnBvbGF0aW9uVHlwZSA9PT0gQW5pbWF0aW9uU2FtcGxlckludGVycG9sYXRpb24uQ1VCSUNTUExJTkUgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGtleS5pbnRlcnBvbGF0aW9uICYmIGtleS5pbnRlcnBvbGF0aW9uID09PSBBbmltYXRpb25LZXlJbnRlcnBvbGF0aW9uLlNURVAgJiYgaW50ZXJwb2xhdGlvblR5cGUgIT09IEFuaW1hdGlvblNhbXBsZXJJbnRlcnBvbGF0aW9uLlNURVApXHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGludGVycG9sYXRpb25UeXBlID0gQW5pbWF0aW9uU2FtcGxlckludGVycG9sYXRpb24uTElORUFSO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG91bGRCYWtlQW5pbWF0aW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5LmludGVycG9sYXRpb24gJiYga2V5LmludGVycG9sYXRpb24gPT09IEFuaW1hdGlvbktleUludGVycG9sYXRpb24uU1RFUCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnBvbGF0aW9uVHlwZSA9IEFuaW1hdGlvblNhbXBsZXJJbnRlcnBvbGF0aW9uLlNURVA7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwb2xhdGlvblR5cGUgPSBBbmltYXRpb25TYW1wbGVySW50ZXJwb2xhdGlvbi5MSU5FQVI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghaW50ZXJwb2xhdGlvblR5cGUpIHtcclxuICAgICAgICAgICAgaW50ZXJwb2xhdGlvblR5cGUgPSBBbmltYXRpb25TYW1wbGVySW50ZXJwb2xhdGlvbi5MSU5FQVI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4geyBpbnRlcnBvbGF0aW9uVHlwZTogaW50ZXJwb2xhdGlvblR5cGUsIHNob3VsZEJha2VBbmltYXRpb246IHNob3VsZEJha2VBbmltYXRpb24gfTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgYW4gaW5wdXQgdGFuZ2VudCBvciBvdXRwdXQgdGFuZ2VudCB0byB0aGUgb3V0cHV0IGRhdGFcclxuICAgICAqIElmIGFuIGlucHV0IHRhbmdlbnQgb3Igb3V0cHV0IHRhbmdlbnQgaXMgbWlzc2luZywgaXQgdXNlcyB0aGUgemVybyB2ZWN0b3Igb3IgemVybyBxdWF0ZXJuaW9uXHJcbiAgICAgKiBAcGFyYW0gdGFuZ2VudFR5cGUgU3BlY2lmaWVzIHdoaWNoIHR5cGUgb2YgdGFuZ2VudCB0byBoYW5kbGUgKGluVGFuZ2VudCBvciBvdXRUYW5nZW50KVxyXG4gICAgICogQHBhcmFtIG91dHB1dHMgVGhlIGFuaW1hdGlvbiBkYXRhIGJ5IGtleWZyYW1lXHJcbiAgICAgKiBAcGFyYW0gYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGggVGhlIHRhcmdldCBhbmltYXRpb24gY2hhbm5lbFxyXG4gICAgICogQHBhcmFtIGludGVycG9sYXRpb24gVGhlIGludGVycG9sYXRpb24gdHlwZVxyXG4gICAgICogQHBhcmFtIGtleUZyYW1lIFRoZSBrZXkgZnJhbWUgd2l0aCB0aGUgYW5pbWF0aW9uIGRhdGFcclxuICAgICAqIEBwYXJhbSB1c2VRdWF0ZXJuaW9uIFNwZWNpZmllcyBpZiBxdWF0ZXJuaW9ucyBhcmUgdXNlZFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfQWRkU3BsaW5lVGFuZ2VudChcclxuICAgICAgICB0YW5nZW50VHlwZTogX1RhbmdlbnRUeXBlLFxyXG4gICAgICAgIG91dHB1dHM6IG51bWJlcltdW10sXHJcbiAgICAgICAgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGg6IEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLFxyXG4gICAgICAgIGludGVycG9sYXRpb246IEFuaW1hdGlvblNhbXBsZXJJbnRlcnBvbGF0aW9uLFxyXG4gICAgICAgIGtleUZyYW1lOiBJQW5pbWF0aW9uS2V5LFxyXG4gICAgICAgIHVzZVF1YXRlcm5pb246IGJvb2xlYW5cclxuICAgICkge1xyXG4gICAgICAgIGxldCB0YW5nZW50OiBudW1iZXJbXTtcclxuICAgICAgICBjb25zdCB0YW5nZW50VmFsdWU6IFZlY3RvcjMgfCBRdWF0ZXJuaW9uIHwgbnVtYmVyID0gdGFuZ2VudFR5cGUgPT09IF9UYW5nZW50VHlwZS5JTlRBTkdFTlQgPyBrZXlGcmFtZS5pblRhbmdlbnQgOiBrZXlGcmFtZS5vdXRUYW5nZW50O1xyXG4gICAgICAgIGlmIChpbnRlcnBvbGF0aW9uID09PSBBbmltYXRpb25TYW1wbGVySW50ZXJwb2xhdGlvbi5DVUJJQ1NQTElORSkge1xyXG4gICAgICAgICAgICBpZiAoYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGggPT09IEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLlJPVEFUSU9OKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGFuZ2VudFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVzZVF1YXRlcm5pb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFuZ2VudCA9ICh0YW5nZW50VmFsdWUgYXMgUXVhdGVybmlvbikuYXNBcnJheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFycmF5ID0gdGFuZ2VudFZhbHVlIGFzIFZlY3RvcjM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhbmdlbnQgPSBRdWF0ZXJuaW9uLlJvdGF0aW9uWWF3UGl0Y2hSb2xsKGFycmF5LnksIGFycmF5LngsIGFycmF5LnopLmFzQXJyYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhbmdlbnQgPSBbMCwgMCwgMCwgMF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGggPT09IEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLldFSUdIVFMpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0YW5nZW50VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0YW5nZW50ID0gW3RhbmdlbnRWYWx1ZSBhcyBudW1iZXJdO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0YW5nZW50ID0gWzBdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRhbmdlbnRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhbmdlbnQgPSAodGFuZ2VudFZhbHVlIGFzIFZlY3RvcjMpLmFzQXJyYXkoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFuZ2VudCA9IFswLCAwLCAwXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgb3V0cHV0cy5wdXNoKHRhbmdlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgbWluaW11bSBhbmQgbWF4aW11bSBrZXkgZnJhbWVzJyBmcmFtZSB2YWx1ZXNcclxuICAgICAqIEBwYXJhbSBrZXlGcmFtZXMgYW5pbWF0aW9uIGtleSBmcmFtZXNcclxuICAgICAqIEByZXR1cm5zIHRoZSBtaW5pbXVtIGFuZCBtYXhpbXVtIGtleSBmcmFtZSB2YWx1ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfQ2FsY3VsYXRlTWluTWF4S2V5RnJhbWVzKGtleUZyYW1lczogSUFuaW1hdGlvbktleVtdKTogeyBtaW46IG51bWJlcjsgbWF4OiBudW1iZXIgfSB7XHJcbiAgICAgICAgbGV0IG1pbjogbnVtYmVyID0gSW5maW5pdHk7XHJcbiAgICAgICAgbGV0IG1heDogbnVtYmVyID0gLUluZmluaXR5O1xyXG4gICAgICAgIGtleUZyYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChrZXlGcmFtZSkge1xyXG4gICAgICAgICAgICBtaW4gPSBNYXRoLm1pbihtaW4sIGtleUZyYW1lLmZyYW1lKTtcclxuICAgICAgICAgICAgbWF4ID0gTWF0aC5tYXgobWF4LCBrZXlGcmFtZS5mcmFtZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7IG1pbjogbWluLCBtYXg6IG1heCB9O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEltYWdlTWltZVR5cGUgfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IFRvb2xzIH0gZnJvbSBcImNvcmUvTWlzYy90b29sc1wiO1xyXG5cclxuZnVuY3Rpb24gR2V0TWltZVR5cGUoZmlsZU5hbWU6IHN0cmluZyk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XHJcbiAgICBpZiAoZmlsZU5hbWUuZW5kc1dpdGgoXCIuZ2xiXCIpKSB7XHJcbiAgICAgICAgcmV0dXJuIFwibW9kZWwvZ2x0Zi1iaW5hcnlcIjtcclxuICAgIH0gZWxzZSBpZiAoZmlsZU5hbWUuZW5kc1dpdGgoXCIuYmluXCIpKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCI7XHJcbiAgICB9IGVsc2UgaWYgKGZpbGVOYW1lLmVuZHNXaXRoKFwiLmdsdGZcIikpIHtcclxuICAgICAgICByZXR1cm4gXCJtb2RlbC9nbHRmK2pzb25cIjtcclxuICAgIH0gZWxzZSBpZiAoZmlsZU5hbWUuZW5kc1dpdGgoXCIuanBlZ1wiKSB8fCBmaWxlTmFtZS5lbmRzV2l0aChcIi5qcGdcIikpIHtcclxuICAgICAgICByZXR1cm4gSW1hZ2VNaW1lVHlwZS5KUEVHO1xyXG4gICAgfSBlbHNlIGlmIChmaWxlTmFtZS5lbmRzV2l0aChcIi5wbmdcIikpIHtcclxuICAgICAgICByZXR1cm4gSW1hZ2VNaW1lVHlwZS5QTkc7XHJcbiAgICB9IGVsc2UgaWYgKGZpbGVOYW1lLmVuZHNXaXRoKFwiLndlYnBcIikpIHtcclxuICAgICAgICByZXR1cm4gSW1hZ2VNaW1lVHlwZS5XRUJQO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDbGFzcyBmb3IgaG9sZGluZyBhbmQgZG93bmxvYWRpbmcgZ2xURiBmaWxlIGRhdGFcclxuICovXHJcbmV4cG9ydCBjbGFzcyBHTFRGRGF0YSB7XHJcbiAgICAvKipcclxuICAgICAqIE9iamVjdCB3aGljaCBjb250YWlucyB0aGUgZmlsZSBuYW1lIGFzIHRoZSBrZXkgYW5kIGl0cyBkYXRhIGFzIHRoZSB2YWx1ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgZmlsZXM6IHsgW2ZpbGVOYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBCbG9iIH0gPSB7fTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBkZXByZWNhdGVkIFVzZSBmaWxlcyBpbnN0ZWFkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgZ2xURkZpbGVzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpbGVzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRG93bmxvYWRzIHRoZSBnbFRGIGRhdGEgYXMgZmlsZXMgYmFzZWQgb24gdGhlaXIgbmFtZXMgYW5kIGRhdGFcclxuICAgICAqL1xyXG4gICAgcHVibGljIGRvd25sb2FkRmlsZXMoKTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5maWxlcykge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZmlsZXNba2V5XTtcclxuICAgICAgICAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFt2YWx1ZV0sIHsgdHlwZTogR2V0TWltZVR5cGUoa2V5KSB9KTtcclxuICAgICAgICAgICAgVG9vbHMuRG93bmxvYWQoYmxvYiwga2V5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHR5cGUge1xyXG4gICAgSUJ1ZmZlclZpZXcsXHJcbiAgICBJQWNjZXNzb3IsXHJcbiAgICBJTm9kZSxcclxuICAgIElTY2VuZSxcclxuICAgIElNZXNoLFxyXG4gICAgSU1hdGVyaWFsLFxyXG4gICAgSVRleHR1cmUsXHJcbiAgICBJSW1hZ2UsXHJcbiAgICBJU2FtcGxlcixcclxuICAgIElBbmltYXRpb24sXHJcbiAgICBJTWVzaFByaW1pdGl2ZSxcclxuICAgIElCdWZmZXIsXHJcbiAgICBJR0xURixcclxuICAgIElUZXh0dXJlSW5mbyxcclxuICAgIElTa2luLFxyXG4gICAgSUNhbWVyYSxcclxufSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IEFjY2Vzc29yQ29tcG9uZW50VHlwZSwgQWNjZXNzb3JUeXBlLCBDYW1lcmFUeXBlLCBJbWFnZU1pbWVUeXBlIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5cclxuaW1wb3J0IHR5cGUgeyBGbG9hdEFycmF5LCBJbmRpY2VzQXJyYXksIE51bGxhYmxlIH0gZnJvbSBcImNvcmUvdHlwZXNcIjtcclxuaW1wb3J0IHsgVG1wVmVjdG9ycywgUXVhdGVybmlvbiwgTWF0cml4IH0gZnJvbSBcImNvcmUvTWF0aHMvbWF0aC52ZWN0b3JcIjtcclxuaW1wb3J0IHsgVG9vbHMgfSBmcm9tIFwiY29yZS9NaXNjL3Rvb2xzXCI7XHJcbmltcG9ydCB0eXBlIHsgQnVmZmVyIH0gZnJvbSBcImNvcmUvQnVmZmVycy9idWZmZXJcIjtcclxuaW1wb3J0IHsgVmVydGV4QnVmZmVyIH0gZnJvbSBcImNvcmUvQnVmZmVycy9idWZmZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBOb2RlIH0gZnJvbSBcImNvcmUvbm9kZVwiO1xyXG5pbXBvcnQgeyBUcmFuc2Zvcm1Ob2RlIH0gZnJvbSBcImNvcmUvTWVzaGVzL3RyYW5zZm9ybU5vZGVcIjtcclxuaW1wb3J0IHR5cGUgeyBTdWJNZXNoIH0gZnJvbSBcImNvcmUvTWVzaGVzL3N1Yk1lc2hcIjtcclxuaW1wb3J0IHsgTWVzaCB9IGZyb20gXCJjb3JlL01lc2hlcy9tZXNoXCI7XHJcbmltcG9ydCB7IEluc3RhbmNlZE1lc2ggfSBmcm9tIFwiY29yZS9NZXNoZXMvaW5zdGFuY2VkTWVzaFwiO1xyXG5pbXBvcnQgdHlwZSB7IEJhc2VUZXh0dXJlIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1RleHR1cmVzL2Jhc2VUZXh0dXJlXCI7XHJcbmltcG9ydCB0eXBlIHsgVGV4dHVyZSB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9UZXh0dXJlcy90ZXh0dXJlXCI7XHJcbmltcG9ydCB7IE1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IEVuZ2luZSB9IGZyb20gXCJjb3JlL0VuZ2luZXMvZW5naW5lXCI7XHJcbmltcG9ydCB0eXBlIHsgU2NlbmUgfSBmcm9tIFwiY29yZS9zY2VuZVwiO1xyXG5pbXBvcnQgeyBFbmdpbmVTdG9yZSB9IGZyb20gXCJjb3JlL0VuZ2luZXMvZW5naW5lU3RvcmVcIjtcclxuXHJcbmltcG9ydCB0eXBlIHsgSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyIH0gZnJvbSBcIi4vZ2xURkV4cG9ydGVyRXh0ZW5zaW9uXCI7XHJcbmltcG9ydCB7IEdMVEZNYXRlcmlhbEV4cG9ydGVyIH0gZnJvbSBcIi4vZ2xURk1hdGVyaWFsRXhwb3J0ZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBJRXhwb3J0T3B0aW9ucyB9IGZyb20gXCIuL2dsVEZTZXJpYWxpemVyXCI7XHJcbmltcG9ydCB7IEdMVEZEYXRhIH0gZnJvbSBcIi4vZ2xURkRhdGFcIjtcclxuaW1wb3J0IHtcclxuICAgIENvbnZlcnRUb1JpZ2h0SGFuZGVkUG9zaXRpb24sXHJcbiAgICBDb252ZXJ0VG9SaWdodEhhbmRlZFJvdGF0aW9uLFxyXG4gICAgRGF0YUFycmF5VG9VaW50OEFycmF5LFxyXG4gICAgR2V0QWNjZXNzb3JUeXBlLFxyXG4gICAgR2V0QXR0cmlidXRlVHlwZSxcclxuICAgIEdldE1pbk1heCxcclxuICAgIEdldFByaW1pdGl2ZU1vZGUsXHJcbiAgICBJc05vb3BOb2RlLFxyXG4gICAgSXNUcmlhbmdsZUZpbGxNb2RlLFxyXG4gICAgSXNQYXJlbnRBZGRlZEJ5SW1wb3J0ZXIsXHJcbiAgICBDb252ZXJ0VG9SaWdodEhhbmRlZE5vZGUsXHJcbiAgICBSb3RhdGVOb2RlMTgwWSxcclxuICAgIEZsb2F0c05lZWQxNkJpdEludGVnZXIsXHJcbiAgICBJc1N0YW5kYXJkVmVydGV4QXR0cmlidXRlLFxyXG4gICAgSW5kaWNlc0FycmF5VG9UeXBlZEFycmF5LFxyXG59IGZyb20gXCIuL2dsVEZVdGlsaXRpZXNcIjtcclxuaW1wb3J0IHsgQnVmZmVyTWFuYWdlciB9IGZyb20gXCIuL2J1ZmZlck1hbmFnZXJcIjtcclxuaW1wb3J0IHsgQ2FtZXJhIH0gZnJvbSBcImNvcmUvQ2FtZXJhcy9jYW1lcmFcIjtcclxuaW1wb3J0IHsgTXVsdGlNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9tdWx0aU1hdGVyaWFsXCI7XHJcbmltcG9ydCB7IFBCUk1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1BCUi9wYnJNYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBTdGFuZGFyZE1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL3N0YW5kYXJkTWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSBcImNvcmUvTWlzYy9sb2dnZXJcIjtcclxuaW1wb3J0IHsgRW51bWVyYXRlRmxvYXRWYWx1ZXMsIEFyZUluZGljZXMzMkJpdHMgfSBmcm9tIFwiY29yZS9CdWZmZXJzL2J1ZmZlclV0aWxzXCI7XHJcbmltcG9ydCB0eXBlIHsgQm9uZSwgU2tlbGV0b24gfSBmcm9tIFwiY29yZS9Cb25lc1wiO1xyXG5pbXBvcnQgeyBfR0xURkFuaW1hdGlvbiB9IGZyb20gXCIuL2dsVEZBbmltYXRpb25cIjtcclxuaW1wb3J0IHR5cGUgeyBNb3JwaFRhcmdldCB9IGZyb20gXCJjb3JlL01vcnBoXCI7XHJcbmltcG9ydCB7IEJ1aWxkTW9ycGhUYXJnZXRCdWZmZXJzIH0gZnJvbSBcIi4vZ2xURk1vcnBoVGFyZ2V0c1V0aWxpdGllc1wiO1xyXG5pbXBvcnQgdHlwZSB7IElNb3JwaFRhcmdldERhdGEgfSBmcm9tIFwiLi9nbFRGTW9ycGhUYXJnZXRzVXRpbGl0aWVzXCI7XHJcbmltcG9ydCB7IExpbmVzTWVzaCB9IGZyb20gXCJjb3JlL01lc2hlcy9saW5lc01lc2hcIjtcclxuaW1wb3J0IHsgR3JlYXNlZExpbmVCYXNlTWVzaCB9IGZyb20gXCJjb3JlL01lc2hlcy9HcmVhc2VkTGluZS9ncmVhc2VkTGluZUJhc2VNZXNoXCI7XHJcbmltcG9ydCB7IENvbG9yMywgQ29sb3I0IH0gZnJvbSBcImNvcmUvTWF0aHMvbWF0aC5jb2xvclwiO1xyXG5cclxuY2xhc3MgRXhwb3J0ZXJTdGF0ZSB7XHJcbiAgICAvLyBCYWJ5bG9uIGluZGljZXMgYXJyYXksIHN0YXJ0LCBjb3VudCwgb2Zmc2V0LCBmbGlwIC0+IGdsVEYgYWNjZXNzb3IgaW5kZXhcclxuICAgIHByaXZhdGUgX2luZGljZXNBY2Nlc3Nvck1hcCA9IG5ldyBNYXA8TnVsbGFibGU8SW5kaWNlc0FycmF5PiwgTWFwPG51bWJlciwgTWFwPG51bWJlciwgTWFwPG51bWJlciwgTWFwPGJvb2xlYW4sIG51bWJlcj4+Pj4+KCk7XHJcblxyXG4gICAgLy8gQmFieWxvbiBidWZmZXIgLT4gZ2xURiBidWZmZXIgdmlld1xyXG4gICAgcHJpdmF0ZSBfdmVydGV4QnVmZmVyVmlld01hcCA9IG5ldyBNYXA8QnVmZmVyLCBJQnVmZmVyVmlldz4oKTtcclxuXHJcbiAgICAvLyBCYWJ5bG9uIHZlcnRleCBidWZmZXIsIHN0YXJ0LCBjb3VudCAtPiBnbFRGIGFjY2Vzc29yIGluZGV4XHJcbiAgICBwcml2YXRlIF92ZXJ0ZXhBY2Nlc3Nvck1hcCA9IG5ldyBNYXA8VmVydGV4QnVmZmVyLCBNYXA8bnVtYmVyLCBNYXA8bnVtYmVyLCBudW1iZXI+Pj4oKTtcclxuXHJcbiAgICBwcml2YXRlIF9yZW1hcHBlZEJ1ZmZlclZpZXcgPSBuZXcgTWFwPEJ1ZmZlciwgTWFwPFZlcnRleEJ1ZmZlciwgSUJ1ZmZlclZpZXc+PigpO1xyXG5cclxuICAgIHByaXZhdGUgX21lc2hNb3JwaFRhcmdldE1hcCA9IG5ldyBNYXA8TWVzaCwgSU1vcnBoVGFyZ2V0RGF0YVtdPigpO1xyXG5cclxuICAgIHByaXZhdGUgX3ZlcnRleE1hcENvbG9yQWxwaGEgPSBuZXcgTWFwPFZlcnRleEJ1ZmZlciwgYm9vbGVhbj4oKTtcclxuXHJcbiAgICBwcml2YXRlIF9leHBvcnRlZE5vZGVzID0gbmV3IFNldDxOb2RlPigpO1xyXG5cclxuICAgIC8vIEJhYnlsb24gbWVzaCAtPiBnbFRGIG1lc2ggaW5kZXhcclxuICAgIHByaXZhdGUgX21lc2hNYXAgPSBuZXcgTWFwPE1lc2gsIG51bWJlcj4oKTtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoY29udmVydFRvUmlnaHRIYW5kZWQ6IGJvb2xlYW4sIHdhc0FkZGVkQnlOb29wTm9kZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuY29udmVydFRvUmlnaHRIYW5kZWQgPSBjb252ZXJ0VG9SaWdodEhhbmRlZDtcclxuICAgICAgICB0aGlzLndhc0FkZGVkQnlOb29wTm9kZSA9IHdhc0FkZGVkQnlOb29wTm9kZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgY29udmVydFRvUmlnaHRIYW5kZWQ6IGJvb2xlYW47XHJcblxyXG4gICAgcHVibGljIHJlYWRvbmx5IHdhc0FkZGVkQnlOb29wTm9kZTogYm9vbGVhbjtcclxuXHJcbiAgICAvLyBPbmx5IHVzZWQgd2hlbiBjb252ZXJ0VG9SaWdodEhhbmRlZCBpcyB0cnVlLlxyXG4gICAgcHVibGljIHJlYWRvbmx5IGNvbnZlcnRlZFRvUmlnaHRIYW5kZWRCdWZmZXJzID0gbmV3IE1hcDxCdWZmZXIsIFVpbnQ4QXJyYXk+KCk7XHJcblxyXG4gICAgcHVibGljIGdldEluZGljZXNBY2Nlc3NvcihpbmRpY2VzOiBOdWxsYWJsZTxJbmRpY2VzQXJyYXk+LCBzdGFydDogbnVtYmVyLCBjb3VudDogbnVtYmVyLCBvZmZzZXQ6IG51bWJlciwgZmxpcDogYm9vbGVhbik6IG51bWJlciB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luZGljZXNBY2Nlc3Nvck1hcC5nZXQoaW5kaWNlcyk/LmdldChzdGFydCk/LmdldChjb3VudCk/LmdldChvZmZzZXQpPy5nZXQoZmxpcCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldEluZGljZXNBY2Nlc3NvcihpbmRpY2VzOiBOdWxsYWJsZTxJbmRpY2VzQXJyYXk+LCBzdGFydDogbnVtYmVyLCBjb3VudDogbnVtYmVyLCBvZmZzZXQ6IG51bWJlciwgZmxpcDogYm9vbGVhbiwgYWNjZXNzb3JJbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IG1hcDEgPSB0aGlzLl9pbmRpY2VzQWNjZXNzb3JNYXAuZ2V0KGluZGljZXMpO1xyXG4gICAgICAgIGlmICghbWFwMSkge1xyXG4gICAgICAgICAgICBtYXAxID0gbmV3IE1hcDxudW1iZXIsIE1hcDxudW1iZXIsIE1hcDxudW1iZXIsIE1hcDxib29sZWFuLCBudW1iZXI+Pj4+KCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2luZGljZXNBY2Nlc3Nvck1hcC5zZXQoaW5kaWNlcywgbWFwMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgbWFwMiA9IG1hcDEuZ2V0KHN0YXJ0KTtcclxuICAgICAgICBpZiAoIW1hcDIpIHtcclxuICAgICAgICAgICAgbWFwMiA9IG5ldyBNYXA8bnVtYmVyLCBNYXA8bnVtYmVyLCBNYXA8Ym9vbGVhbiwgbnVtYmVyPj4+KCk7XHJcbiAgICAgICAgICAgIG1hcDEuc2V0KHN0YXJ0LCBtYXAyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBtYXAzID0gbWFwMi5nZXQoY291bnQpO1xyXG4gICAgICAgIGlmICghbWFwMykge1xyXG4gICAgICAgICAgICBtYXAzID0gbmV3IE1hcDxudW1iZXIsIE1hcDxib29sZWFuLCBudW1iZXI+PigpO1xyXG4gICAgICAgICAgICBtYXAyLnNldChjb3VudCwgbWFwMyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgbWFwNCA9IG1hcDMuZ2V0KG9mZnNldCk7XHJcbiAgICAgICAgaWYgKCFtYXA0KSB7XHJcbiAgICAgICAgICAgIG1hcDQgPSBuZXcgTWFwPGJvb2xlYW4sIG51bWJlcj4oKTtcclxuICAgICAgICAgICAgbWFwMy5zZXQob2Zmc2V0LCBtYXA0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1hcDQuc2V0KGZsaXAsIGFjY2Vzc29ySW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwdXNoRXhwb3J0ZWROb2RlKG5vZGU6IE5vZGUpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2V4cG9ydGVkTm9kZXMuaGFzKG5vZGUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2V4cG9ydGVkTm9kZXMuYWRkKG5vZGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Tm9kZXNTZXQoKTogU2V0PE5vZGU+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZXhwb3J0ZWROb2RlcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0VmVydGV4QnVmZmVyVmlldyhidWZmZXI6IEJ1ZmZlcik6IElCdWZmZXJWaWV3IHwgdW5kZWZpbmVkIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdmVydGV4QnVmZmVyVmlld01hcC5nZXQoYnVmZmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0VmVydGV4QnVmZmVyVmlldyhidWZmZXI6IEJ1ZmZlciwgYnVmZmVyVmlldzogSUJ1ZmZlclZpZXcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl92ZXJ0ZXhCdWZmZXJWaWV3TWFwLnNldChidWZmZXIsIGJ1ZmZlclZpZXcpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRSZW1hcHBlZEJ1ZmZlclZpZXcoYnVmZmVyOiBCdWZmZXIsIHZlcnRleEJ1ZmZlcjogVmVydGV4QnVmZmVyLCBidWZmZXJWaWV3OiBJQnVmZmVyVmlldykge1xyXG4gICAgICAgIHRoaXMuX3JlbWFwcGVkQnVmZmVyVmlldy5zZXQoYnVmZmVyLCBuZXcgTWFwPFZlcnRleEJ1ZmZlciwgSUJ1ZmZlclZpZXc+KCkpO1xyXG4gICAgICAgIHRoaXMuX3JlbWFwcGVkQnVmZmVyVmlldy5nZXQoYnVmZmVyKSEuc2V0KHZlcnRleEJ1ZmZlciwgYnVmZmVyVmlldyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFJlbWFwcGVkQnVmZmVyVmlldyhidWZmZXI6IEJ1ZmZlciwgdmVydGV4QnVmZmVyOiBWZXJ0ZXhCdWZmZXIpOiBJQnVmZmVyVmlldyB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlbWFwcGVkQnVmZmVyVmlldy5nZXQoYnVmZmVyKT8uZ2V0KHZlcnRleEJ1ZmZlcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFZlcnRleEFjY2Vzc29yKHZlcnRleEJ1ZmZlcjogVmVydGV4QnVmZmVyLCBzdGFydDogbnVtYmVyLCBjb3VudDogbnVtYmVyKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdmVydGV4QWNjZXNzb3JNYXAuZ2V0KHZlcnRleEJ1ZmZlcik/LmdldChzdGFydCk/LmdldChjb3VudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFZlcnRleEFjY2Vzc29yKHZlcnRleEJ1ZmZlcjogVmVydGV4QnVmZmVyLCBzdGFydDogbnVtYmVyLCBjb3VudDogbnVtYmVyLCBhY2Nlc3NvckluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBsZXQgbWFwMSA9IHRoaXMuX3ZlcnRleEFjY2Vzc29yTWFwLmdldCh2ZXJ0ZXhCdWZmZXIpO1xyXG4gICAgICAgIGlmICghbWFwMSkge1xyXG4gICAgICAgICAgICBtYXAxID0gbmV3IE1hcDxudW1iZXIsIE1hcDxudW1iZXIsIG51bWJlcj4+KCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZlcnRleEFjY2Vzc29yTWFwLnNldCh2ZXJ0ZXhCdWZmZXIsIG1hcDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG1hcDIgPSBtYXAxLmdldChzdGFydCk7XHJcbiAgICAgICAgaWYgKCFtYXAyKSB7XHJcbiAgICAgICAgICAgIG1hcDIgPSBuZXcgTWFwPG51bWJlciwgbnVtYmVyPigpO1xyXG4gICAgICAgICAgICBtYXAxLnNldChzdGFydCwgbWFwMik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtYXAyLnNldChjb3VudCwgYWNjZXNzb3JJbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhhc1ZlcnRleENvbG9yQWxwaGEodmVydGV4QnVmZmVyOiBWZXJ0ZXhCdWZmZXIpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdmVydGV4TWFwQ29sb3JBbHBoYS5nZXQodmVydGV4QnVmZmVyKSB8fCBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0SGFzVmVydGV4Q29sb3JBbHBoYSh2ZXJ0ZXhCdWZmZXI6IFZlcnRleEJ1ZmZlciwgaGFzQWxwaGE6IGJvb2xlYW4pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdmVydGV4TWFwQ29sb3JBbHBoYS5zZXQodmVydGV4QnVmZmVyLCBoYXNBbHBoYSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldE1lc2gobWVzaDogTWVzaCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21lc2hNYXAuZ2V0KG1lc2gpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRNZXNoKG1lc2g6IE1lc2gsIG1lc2hJbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fbWVzaE1hcC5zZXQobWVzaCwgbWVzaEluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYmluZE1vcnBoRGF0YVRvTWVzaChtZXNoOiBNZXNoLCBtb3JwaERhdGE6IElNb3JwaFRhcmdldERhdGEpIHtcclxuICAgICAgICBjb25zdCBtb3JwaFRhcmdldHMgPSB0aGlzLl9tZXNoTW9ycGhUYXJnZXRNYXAuZ2V0KG1lc2gpIHx8IFtdO1xyXG4gICAgICAgIHRoaXMuX21lc2hNb3JwaFRhcmdldE1hcC5zZXQobWVzaCwgbW9ycGhUYXJnZXRzKTtcclxuICAgICAgICBpZiAobW9ycGhUYXJnZXRzLmluZGV4T2YobW9ycGhEYXRhKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgbW9ycGhUYXJnZXRzLnB1c2gobW9ycGhEYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldE1vcnBoVGFyZ2V0c0Zyb21NZXNoKG1lc2g6IE1lc2gpOiBJTW9ycGhUYXJnZXREYXRhW10gfCB1bmRlZmluZWQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tZXNoTW9ycGhUYXJnZXRNYXAuZ2V0KG1lc2gpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiogQGludGVybmFsICovXHJcbmV4cG9ydCBjbGFzcyBHTFRGRXhwb3J0ZXIge1xyXG4gICAgcHVibGljIHJlYWRvbmx5IF9nbFRGOiBJR0xURiA9IHtcclxuICAgICAgICBhc3NldDogeyBnZW5lcmF0b3I6IGBCYWJ5bG9uLmpzIHYke0VuZ2luZS5WZXJzaW9ufWAsIHZlcnNpb246IFwiMi4wXCIgfSxcclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIHJlYWRvbmx5IF9hbmltYXRpb25zOiBJQW5pbWF0aW9uW10gPSBbXTtcclxuICAgIHB1YmxpYyByZWFkb25seSBfYWNjZXNzb3JzOiBJQWNjZXNzb3JbXSA9IFtdO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IF9idWZmZXJWaWV3czogSUJ1ZmZlclZpZXdbXSA9IFtdO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IF9jYW1lcmFzOiBJQ2FtZXJhW10gPSBbXTtcclxuICAgIHB1YmxpYyByZWFkb25seSBfaW1hZ2VzOiBJSW1hZ2VbXSA9IFtdO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IF9tYXRlcmlhbHM6IElNYXRlcmlhbFtdID0gW107XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgX21lc2hlczogSU1lc2hbXSA9IFtdO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IF9ub2RlczogSU5vZGVbXSA9IFtdO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IF9zYW1wbGVyczogSVNhbXBsZXJbXSA9IFtdO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IF9zY2VuZXM6IElTY2VuZVtdID0gW107XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgX3NraW5zOiBJU2tpbltdID0gW107XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgX3RleHR1cmVzOiBJVGV4dHVyZVtdID0gW107XHJcblxyXG4gICAgcHVibGljIHJlYWRvbmx5IF9iYWJ5bG9uU2NlbmU6IFNjZW5lO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IF9pbWFnZURhdGE6IHsgW2ZpbGVOYW1lOiBzdHJpbmddOiB7IGRhdGE6IEFycmF5QnVmZmVyOyBtaW1lVHlwZTogSW1hZ2VNaW1lVHlwZSB9IH0gPSB7fTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEJha2VkIGFuaW1hdGlvbiBzYW1wbGUgcmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9hbmltYXRpb25TYW1wbGVSYXRlOiBudW1iZXI7XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfb3B0aW9uczogUmVxdWlyZWQ8SUV4cG9ydE9wdGlvbnM+O1xyXG5cclxuICAgIHB1YmxpYyBfc2hvdWxkVXNlR2xiOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHVibGljIHJlYWRvbmx5IF9tYXRlcmlhbEV4cG9ydGVyID0gbmV3IEdMVEZNYXRlcmlhbEV4cG9ydGVyKHRoaXMpO1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2V4dGVuc2lvbnM6IHsgW25hbWU6IHN0cmluZ106IElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMiB9ID0ge307XHJcblxyXG4gICAgcHVibGljIHJlYWRvbmx5IF9idWZmZXJNYW5hZ2VyID0gbmV3IEJ1ZmZlck1hbmFnZXIoKTtcclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9zaG91bGRFeHBvcnROb2RlTWFwID0gbmV3IE1hcDxOb2RlLCBib29sZWFuPigpO1xyXG5cclxuICAgIC8vIEJhYnlsb24gbm9kZSAtPiBnbFRGIG5vZGUgaW5kZXhcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX25vZGVNYXAgPSBuZXcgTWFwPE5vZGUsIG51bWJlcj4oKTtcclxuXHJcbiAgICAvLyBCYWJ5bG9uIG1hdGVyaWFsIC0+IGdsVEYgbWF0ZXJpYWwgaW5kZXhcclxuICAgIHB1YmxpYyByZWFkb25seSBfbWF0ZXJpYWxNYXAgPSBuZXcgTWFwPE1hdGVyaWFsLCBudW1iZXI+KCk7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9jYW1lcmFzTWFwID0gbmV3IE1hcDxDYW1lcmEsIElDYW1lcmE+KCk7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9ub2Rlc0NhbWVyYU1hcCA9IG5ldyBNYXA8SUNhbWVyYSwgSU5vZGVbXT4oKTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX3NraW5NYXAgPSBuZXcgTWFwPFNrZWxldG9uLCBJU2tpbj4oKTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX25vZGVzU2tpbk1hcCA9IG5ldyBNYXA8SVNraW4sIElOb2RlW10+KCk7XHJcblxyXG4gICAgLy8gQSBtYXRlcmlhbCBpbiB0aGlzIHNldCByZXF1aXJlcyBVVnNcclxuICAgIHB1YmxpYyByZWFkb25seSBfbWF0ZXJpYWxOZWVkc1VWc1NldCA9IG5ldyBTZXQ8TWF0ZXJpYWw+KCk7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgX0V4dGVuc2lvbk5hbWVzID0gbmV3IEFycmF5PHN0cmluZz4oKTtcclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IF9FeHRlbnNpb25GYWN0b3JpZXM6IHsgW25hbWU6IHN0cmluZ106IChleHBvcnRlcjogR0xURkV4cG9ydGVyKSA9PiBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIgfSA9IHt9O1xyXG5cclxuICAgIHByaXZhdGUgX2FwcGx5RXh0ZW5zaW9uPFQ+KFxyXG4gICAgICAgIG5vZGU6IFQsXHJcbiAgICAgICAgZXh0ZW5zaW9uczogSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyW10sXHJcbiAgICAgICAgaW5kZXg6IG51bWJlcixcclxuICAgICAgICBhY3Rpb25Bc3luYzogKGV4dGVuc2lvbjogSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyLCBub2RlOiBUKSA9PiBQcm9taXNlPE51bGxhYmxlPFQ+PiB8IHVuZGVmaW5lZFxyXG4gICAgKTogUHJvbWlzZTxOdWxsYWJsZTxUPj4ge1xyXG4gICAgICAgIGlmIChpbmRleCA+PSBleHRlbnNpb25zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5vZGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgY3VycmVudFByb21pc2UgPSBhY3Rpb25Bc3luYyhleHRlbnNpb25zW2luZGV4XSwgbm9kZSk7XHJcblxyXG4gICAgICAgIGlmICghY3VycmVudFByb21pc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FwcGx5RXh0ZW5zaW9uKG5vZGUsIGV4dGVuc2lvbnMsIGluZGV4ICsgMSwgYWN0aW9uQXN5bmMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRQcm9taXNlLnRoZW4oKG5ld05vZGUpID0+IChuZXdOb2RlID8gdGhpcy5fYXBwbHlFeHRlbnNpb24obmV3Tm9kZSwgZXh0ZW5zaW9ucywgaW5kZXggKyAxLCBhY3Rpb25Bc3luYykgOiBudWxsKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfYXBwbHlFeHRlbnNpb25zPFQ+KG5vZGU6IFQsIGFjdGlvbkFzeW5jOiAoZXh0ZW5zaW9uOiBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIsIG5vZGU6IFQpID0+IFByb21pc2U8TnVsbGFibGU8VD4+IHwgdW5kZWZpbmVkKTogUHJvbWlzZTxOdWxsYWJsZTxUPj4ge1xyXG4gICAgICAgIGNvbnN0IGV4dGVuc2lvbnM6IElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMltdID0gW107XHJcbiAgICAgICAgZm9yIChjb25zdCBuYW1lIG9mIEdMVEZFeHBvcnRlci5fRXh0ZW5zaW9uTmFtZXMpIHtcclxuICAgICAgICAgICAgZXh0ZW5zaW9ucy5wdXNoKHRoaXMuX2V4dGVuc2lvbnNbbmFtZV0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwcGx5RXh0ZW5zaW9uKG5vZGUsIGV4dGVuc2lvbnMsIDAsIGFjdGlvbkFzeW5jKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgX2V4dGVuc2lvbnNQcmVFeHBvcnRUZXh0dXJlQXN5bmMoY29udGV4dDogc3RyaW5nLCBiYWJ5bG9uVGV4dHVyZTogVGV4dHVyZSwgbWltZVR5cGU6IEltYWdlTWltZVR5cGUpOiBQcm9taXNlPE51bGxhYmxlPEJhc2VUZXh0dXJlPj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hcHBseUV4dGVuc2lvbnMoYmFieWxvblRleHR1cmUsIChleHRlbnNpb24sIG5vZGUpID0+IGV4dGVuc2lvbi5wcmVFeHBvcnRUZXh0dXJlQXN5bmMgJiYgZXh0ZW5zaW9uLnByZUV4cG9ydFRleHR1cmVBc3luYyhjb250ZXh0LCBub2RlLCBtaW1lVHlwZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBfZXh0ZW5zaW9uc1Bvc3RFeHBvcnROb2RlQXN5bmMoY29udGV4dDogc3RyaW5nLCBub2RlOiBJTm9kZSwgYmFieWxvbk5vZGU6IE5vZGUsIG5vZGVNYXA6IE1hcDxOb2RlLCBudW1iZXI+LCBjb252ZXJ0VG9SaWdodEhhbmRlZDogYm9vbGVhbik6IFByb21pc2U8TnVsbGFibGU8SU5vZGU+PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwcGx5RXh0ZW5zaW9ucyhcclxuICAgICAgICAgICAgbm9kZSxcclxuICAgICAgICAgICAgKGV4dGVuc2lvbiwgbm9kZSkgPT4gZXh0ZW5zaW9uLnBvc3RFeHBvcnROb2RlQXN5bmMgJiYgZXh0ZW5zaW9uLnBvc3RFeHBvcnROb2RlQXN5bmMoY29udGV4dCwgbm9kZSwgYmFieWxvbk5vZGUsIG5vZGVNYXAsIGNvbnZlcnRUb1JpZ2h0SGFuZGVkLCB0aGlzLl9idWZmZXJNYW5hZ2VyKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIF9leHRlbnNpb25zUG9zdEV4cG9ydE1hdGVyaWFsQXN5bmMoY29udGV4dDogc3RyaW5nLCBtYXRlcmlhbDogSU1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsKTogUHJvbWlzZTxOdWxsYWJsZTxJTWF0ZXJpYWw+PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwcGx5RXh0ZW5zaW9ucyhtYXRlcmlhbCwgKGV4dGVuc2lvbiwgbm9kZSkgPT4gZXh0ZW5zaW9uLnBvc3RFeHBvcnRNYXRlcmlhbEFzeW5jICYmIGV4dGVuc2lvbi5wb3N0RXhwb3J0TWF0ZXJpYWxBc3luYyhjb250ZXh0LCBub2RlLCBiYWJ5bG9uTWF0ZXJpYWwpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgX2V4dGVuc2lvbnNQb3N0RXhwb3J0TWF0ZXJpYWxBZGRpdGlvbmFsVGV4dHVyZXMoY29udGV4dDogc3RyaW5nLCBtYXRlcmlhbDogSU1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsKTogQmFzZVRleHR1cmVbXSB7XHJcbiAgICAgICAgY29uc3Qgb3V0cHV0OiBCYXNlVGV4dHVyZVtdID0gW107XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgbmFtZSBvZiBHTFRGRXhwb3J0ZXIuX0V4dGVuc2lvbk5hbWVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IHRoaXMuX2V4dGVuc2lvbnNbbmFtZV07XHJcblxyXG4gICAgICAgICAgICBpZiAoZXh0ZW5zaW9uLnBvc3RFeHBvcnRNYXRlcmlhbEFkZGl0aW9uYWxUZXh0dXJlcykge1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0LnB1c2goLi4uZXh0ZW5zaW9uLnBvc3RFeHBvcnRNYXRlcmlhbEFkZGl0aW9uYWxUZXh0dXJlcyhjb250ZXh0LCBtYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIF9leHRlbnNpb25zUG9zdEV4cG9ydFRleHR1cmVzKGNvbnRleHQ6IHN0cmluZywgdGV4dHVyZUluZm86IElUZXh0dXJlSW5mbywgYmFieWxvblRleHR1cmU6IEJhc2VUZXh0dXJlKTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChjb25zdCBuYW1lIG9mIEdMVEZFeHBvcnRlci5fRXh0ZW5zaW9uTmFtZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgZXh0ZW5zaW9uID0gdGhpcy5fZXh0ZW5zaW9uc1tuYW1lXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChleHRlbnNpb24ucG9zdEV4cG9ydFRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgIGV4dGVuc2lvbi5wb3N0RXhwb3J0VGV4dHVyZShjb250ZXh0LCB0ZXh0dXJlSW5mbywgYmFieWxvblRleHR1cmUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBfZXh0ZW5zaW9uc1Bvc3RFeHBvcnRNZXNoUHJpbWl0aXZlKHByaW1pdGl2ZTogSU1lc2hQcmltaXRpdmUpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGNvbnN0IG5hbWUgb2YgR0xURkV4cG9ydGVyLl9FeHRlbnNpb25OYW1lcykge1xyXG4gICAgICAgICAgICBjb25zdCBleHRlbnNpb24gPSB0aGlzLl9leHRlbnNpb25zW25hbWVdO1xyXG5cclxuICAgICAgICAgICAgaWYgKGV4dGVuc2lvbi5wb3N0RXhwb3J0TWVzaFByaW1pdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgZXh0ZW5zaW9uLnBvc3RFeHBvcnRNZXNoUHJpbWl0aXZlKHByaW1pdGl2ZSwgdGhpcy5fYnVmZmVyTWFuYWdlciwgdGhpcy5fYWNjZXNzb3JzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgX2V4dGVuc2lvbnNQcmVHZW5lcmF0ZUJpbmFyeUFzeW5jKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGZvciAoY29uc3QgbmFtZSBvZiBHTFRGRXhwb3J0ZXIuX0V4dGVuc2lvbk5hbWVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IHRoaXMuX2V4dGVuc2lvbnNbbmFtZV07XHJcblxyXG4gICAgICAgICAgICBpZiAoZXh0ZW5zaW9uLnByZUdlbmVyYXRlQmluYXJ5QXN5bmMpIHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IGV4dGVuc2lvbi5wcmVHZW5lcmF0ZUJpbmFyeUFzeW5jKHRoaXMuX2J1ZmZlck1hbmFnZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2ZvckVhY2hFeHRlbnNpb25zKGFjdGlvbjogKGV4dGVuc2lvbjogSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChjb25zdCBuYW1lIG9mIEdMVEZFeHBvcnRlci5fRXh0ZW5zaW9uTmFtZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgZXh0ZW5zaW9uID0gdGhpcy5fZXh0ZW5zaW9uc1tuYW1lXTtcclxuICAgICAgICAgICAgaWYgKGV4dGVuc2lvbi5lbmFibGVkKSB7XHJcbiAgICAgICAgICAgICAgICBhY3Rpb24oZXh0ZW5zaW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9leHRlbnNpb25zT25FeHBvcnRpbmcoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fZm9yRWFjaEV4dGVuc2lvbnMoKGV4dGVuc2lvbikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXh0ZW5zaW9uLndhc1VzZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2dsVEYuZXh0ZW5zaW9uc1VzZWQgfHw9IFtdO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2dsVEYuZXh0ZW5zaW9uc1VzZWQuaW5kZXhPZihleHRlbnNpb24ubmFtZSkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZ2xURi5leHRlbnNpb25zVXNlZC5wdXNoKGV4dGVuc2lvbi5uYW1lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZXh0ZW5zaW9uLnJlcXVpcmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZ2xURi5leHRlbnNpb25zUmVxdWlyZWQgfHw9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9nbFRGLmV4dGVuc2lvbnNSZXF1aXJlZC5pbmRleE9mKGV4dGVuc2lvbi5uYW1lKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZ2xURi5leHRlbnNpb25zUmVxdWlyZWQucHVzaChleHRlbnNpb24ubmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX2dsVEYuZXh0ZW5zaW9ucyB8fD0ge307XHJcbiAgICAgICAgICAgICAgICBpZiAoZXh0ZW5zaW9uLm9uRXhwb3J0aW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXh0ZW5zaW9uLm9uRXhwb3J0aW5nKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9sb2FkRXh0ZW5zaW9ucygpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGNvbnN0IG5hbWUgb2YgR0xURkV4cG9ydGVyLl9FeHRlbnNpb25OYW1lcykge1xyXG4gICAgICAgICAgICBjb25zdCBleHRlbnNpb24gPSBHTFRGRXhwb3J0ZXIuX0V4dGVuc2lvbkZhY3Rvcmllc1tuYW1lXSh0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5fZXh0ZW5zaW9uc1tuYW1lXSA9IGV4dGVuc2lvbjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGJhYnlsb25TY2VuZTogTnVsbGFibGU8U2NlbmU+ID0gRW5naW5lU3RvcmUuTGFzdENyZWF0ZWRTY2VuZSwgb3B0aW9ucz86IElFeHBvcnRPcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKCFiYWJ5bG9uU2NlbmUpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gc2NlbmUgYXZhaWxhYmxlIHRvIGV4cG9ydFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2JhYnlsb25TY2VuZSA9IGJhYnlsb25TY2VuZTtcclxuXHJcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgc2hvdWxkRXhwb3J0Tm9kZTogKCkgPT4gdHJ1ZSxcclxuICAgICAgICAgICAgc2hvdWxkRXhwb3J0QW5pbWF0aW9uOiAoKSA9PiB0cnVlLFxyXG4gICAgICAgICAgICBtZXRhZGF0YVNlbGVjdG9yOiAobWV0YWRhdGEpID0+IG1ldGFkYXRhLFxyXG4gICAgICAgICAgICBhbmltYXRpb25TYW1wbGVSYXRlOiAxIC8gNjAsXHJcbiAgICAgICAgICAgIGV4cG9ydFdpdGhvdXRXYWl0aW5nRm9yU2NlbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICBleHBvcnRVbnVzZWRVVnM6IGZhbHNlLFxyXG4gICAgICAgICAgICByZW1vdmVOb29wUm9vdE5vZGVzOiB0cnVlLFxyXG4gICAgICAgICAgICBpbmNsdWRlQ29vcmRpbmF0ZVN5c3RlbUNvbnZlcnNpb25Ob2RlczogZmFsc2UsXHJcbiAgICAgICAgICAgIG1lc2hDb21wcmVzc2lvbk1ldGhvZDogXCJOb25lXCIsXHJcbiAgICAgICAgICAgIC4uLm9wdGlvbnMsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5fbG9hZEV4dGVuc2lvbnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLl9leHRlbnNpb25zKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IHRoaXMuX2V4dGVuc2lvbnNba2V5XTtcclxuICAgICAgICAgICAgZXh0ZW5zaW9uLmRpc3Bvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBvcHRpb25zKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9vcHRpb25zO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgUmVnaXN0ZXJFeHRlbnNpb24obmFtZTogc3RyaW5nLCBmYWN0b3J5OiAoZXhwb3J0ZXI6IEdMVEZFeHBvcnRlcikgPT4gSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKEdMVEZFeHBvcnRlci5VbnJlZ2lzdGVyRXh0ZW5zaW9uKG5hbWUpKSB7XHJcbiAgICAgICAgICAgIFRvb2xzLldhcm4oYEV4dGVuc2lvbiB3aXRoIHRoZSBuYW1lICR7bmFtZX0gYWxyZWFkeSBleGlzdHNgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEdMVEZFeHBvcnRlci5fRXh0ZW5zaW9uRmFjdG9yaWVzW25hbWVdID0gZmFjdG9yeTtcclxuICAgICAgICBHTFRGRXhwb3J0ZXIuX0V4dGVuc2lvbk5hbWVzLnB1c2gobmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBVbnJlZ2lzdGVyRXh0ZW5zaW9uKG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICghR0xURkV4cG9ydGVyLl9FeHRlbnNpb25GYWN0b3JpZXNbbmFtZV0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWxldGUgR0xURkV4cG9ydGVyLl9FeHRlbnNpb25GYWN0b3JpZXNbbmFtZV07XHJcblxyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gR0xURkV4cG9ydGVyLl9FeHRlbnNpb25OYW1lcy5pbmRleE9mKG5hbWUpO1xyXG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgR0xURkV4cG9ydGVyLl9FeHRlbnNpb25OYW1lcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZ2VuZXJhdGVKU09OKGJ1ZmZlckJ5dGVMZW5ndGg6IG51bWJlciwgZmlsZU5hbWU/OiBzdHJpbmcsIHByZXR0eVByaW50PzogYm9vbGVhbik6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3QgYnVmZmVyOiBJQnVmZmVyID0geyBieXRlTGVuZ3RoOiBidWZmZXJCeXRlTGVuZ3RoIH07XHJcblxyXG4gICAgICAgIGlmIChidWZmZXIuYnl0ZUxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLl9nbFRGLmJ1ZmZlcnMgPSBbYnVmZmVyXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX25vZGVzICYmIHRoaXMuX25vZGVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLl9nbFRGLm5vZGVzID0gdGhpcy5fbm9kZXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9tZXNoZXMgJiYgdGhpcy5fbWVzaGVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLl9nbFRGLm1lc2hlcyA9IHRoaXMuX21lc2hlcztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX3NjZW5lcyAmJiB0aGlzLl9zY2VuZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2dsVEYuc2NlbmVzID0gdGhpcy5fc2NlbmVzO1xyXG4gICAgICAgICAgICB0aGlzLl9nbFRGLnNjZW5lID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX2NhbWVyYXMgJiYgdGhpcy5fY2FtZXJhcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5fZ2xURi5jYW1lcmFzID0gdGhpcy5fY2FtZXJhcztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX2J1ZmZlclZpZXdzICYmIHRoaXMuX2J1ZmZlclZpZXdzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLl9nbFRGLmJ1ZmZlclZpZXdzID0gdGhpcy5fYnVmZmVyVmlld3M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9hY2Nlc3NvcnMgJiYgdGhpcy5fYWNjZXNzb3JzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLl9nbFRGLmFjY2Vzc29ycyA9IHRoaXMuX2FjY2Vzc29ycztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX2FuaW1hdGlvbnMgJiYgdGhpcy5fYW5pbWF0aW9ucy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5fZ2xURi5hbmltYXRpb25zID0gdGhpcy5fYW5pbWF0aW9ucztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX21hdGVyaWFscyAmJiB0aGlzLl9tYXRlcmlhbHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2dsVEYubWF0ZXJpYWxzID0gdGhpcy5fbWF0ZXJpYWxzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fdGV4dHVyZXMgJiYgdGhpcy5fdGV4dHVyZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2dsVEYudGV4dHVyZXMgPSB0aGlzLl90ZXh0dXJlcztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX3NhbXBsZXJzICYmIHRoaXMuX3NhbXBsZXJzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLl9nbFRGLnNhbXBsZXJzID0gdGhpcy5fc2FtcGxlcnM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9za2lucyAmJiB0aGlzLl9za2lucy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5fZ2xURi5za2lucyA9IHRoaXMuX3NraW5zO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5faW1hZ2VzICYmIHRoaXMuX2ltYWdlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5fZ2xURi5pbWFnZXMgPSB0aGlzLl9pbWFnZXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuX3Nob3VsZFVzZUdsYikge1xyXG4gICAgICAgICAgICBidWZmZXIudXJpID0gZmlsZU5hbWUgKyBcIi5iaW5cIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBwcmV0dHlQcmludCA/IEpTT04uc3RyaW5naWZ5KHRoaXMuX2dsVEYsIG51bGwsIDIpIDogSlNPTi5zdHJpbmdpZnkodGhpcy5fZ2xURik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGdlbmVyYXRlR0xURkFzeW5jKGdsVEZQcmVmaXg6IHN0cmluZyk6IFByb21pc2U8R0xURkRhdGE+IHtcclxuICAgICAgICBjb25zdCBiaW5hcnlCdWZmZXIgPSBhd2FpdCB0aGlzLl9nZW5lcmF0ZUJpbmFyeUFzeW5jKCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2V4dGVuc2lvbnNPbkV4cG9ydGluZygpO1xyXG4gICAgICAgIGNvbnN0IGpzb25UZXh0ID0gdGhpcy5fZ2VuZXJhdGVKU09OKGJpbmFyeUJ1ZmZlci5ieXRlTGVuZ3RoLCBnbFRGUHJlZml4LCB0cnVlKTtcclxuICAgICAgICBjb25zdCBiaW4gPSBuZXcgQmxvYihbYmluYXJ5QnVmZmVyXSwgeyB0eXBlOiBcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBnbFRGRmlsZU5hbWUgPSBnbFRGUHJlZml4ICsgXCIuZ2x0ZlwiO1xyXG4gICAgICAgIGNvbnN0IGdsVEZCaW5GaWxlID0gZ2xURlByZWZpeCArIFwiLmJpblwiO1xyXG5cclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBuZXcgR0xURkRhdGEoKTtcclxuXHJcbiAgICAgICAgY29udGFpbmVyLmZpbGVzW2dsVEZGaWxlTmFtZV0gPSBqc29uVGV4dDtcclxuICAgICAgICBjb250YWluZXIuZmlsZXNbZ2xURkJpbkZpbGVdID0gYmluO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5faW1hZ2VEYXRhKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgaW1hZ2UgaW4gdGhpcy5faW1hZ2VEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIuZmlsZXNbaW1hZ2VdID0gbmV3IEJsb2IoW3RoaXMuX2ltYWdlRGF0YVtpbWFnZV0uZGF0YV0sIHsgdHlwZTogdGhpcy5faW1hZ2VEYXRhW2ltYWdlXS5taW1lVHlwZSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIF9nZW5lcmF0ZUJpbmFyeUFzeW5jKCk6IFByb21pc2U8VWludDhBcnJheT4ge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuX2V4cG9ydFNjZW5lQXN5bmMoKTtcclxuICAgICAgICBhd2FpdCB0aGlzLl9leHRlbnNpb25zUHJlR2VuZXJhdGVCaW5hcnlBc3luYygpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9idWZmZXJNYW5hZ2VyLmdlbmVyYXRlQmluYXJ5KHRoaXMuX2J1ZmZlclZpZXdzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFBhZHMgdGhlIG51bWJlciB0byBhIG11bHRpcGxlIG9mIDRcclxuICAgICAqIEBwYXJhbSBudW0gbnVtYmVyIHRvIHBhZFxyXG4gICAgICogQHJldHVybnMgcGFkZGVkIG51bWJlclxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9nZXRQYWRkaW5nKG51bTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCByZW1haW5kZXIgPSBudW0gJSA0O1xyXG4gICAgICAgIGNvbnN0IHBhZGRpbmcgPSByZW1haW5kZXIgPT09IDAgPyByZW1haW5kZXIgOiA0IC0gcmVtYWluZGVyO1xyXG5cclxuICAgICAgICByZXR1cm4gcGFkZGluZztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZ2VuZXJhdGVHTEJBc3luYyhnbFRGUHJlZml4OiBzdHJpbmcpOiBQcm9taXNlPEdMVEZEYXRhPiB7XHJcbiAgICAgICAgdGhpcy5fc2hvdWxkVXNlR2xiID0gdHJ1ZTtcclxuICAgICAgICBjb25zdCBiaW5hcnlCdWZmZXIgPSBhd2FpdCB0aGlzLl9nZW5lcmF0ZUJpbmFyeUFzeW5jKCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2V4dGVuc2lvbnNPbkV4cG9ydGluZygpO1xyXG4gICAgICAgIGNvbnN0IGpzb25UZXh0ID0gdGhpcy5fZ2VuZXJhdGVKU09OKGJpbmFyeUJ1ZmZlci5ieXRlTGVuZ3RoKTtcclxuICAgICAgICBjb25zdCBnbGJGaWxlTmFtZSA9IGdsVEZQcmVmaXggKyBcIi5nbGJcIjtcclxuICAgICAgICBjb25zdCBoZWFkZXJMZW5ndGggPSAxMjtcclxuICAgICAgICBjb25zdCBjaHVua0xlbmd0aFByZWZpeCA9IDg7XHJcbiAgICAgICAgbGV0IGpzb25MZW5ndGggPSBqc29uVGV4dC5sZW5ndGg7XHJcbiAgICAgICAgbGV0IGVuY29kZWRKc29uVGV4dDtcclxuICAgICAgICAvLyBtYWtlIHVzZSBvZiBUZXh0RW5jb2RlciB3aGVuIGF2YWlsYWJsZVxyXG4gICAgICAgIGlmICh0eXBlb2YgVGV4dEVuY29kZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgZW5jb2RlciA9IG5ldyBUZXh0RW5jb2RlcigpO1xyXG4gICAgICAgICAgICBlbmNvZGVkSnNvblRleHQgPSBlbmNvZGVyLmVuY29kZShqc29uVGV4dCk7XHJcbiAgICAgICAgICAgIGpzb25MZW5ndGggPSBlbmNvZGVkSnNvblRleHQubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBqc29uUGFkZGluZyA9IHRoaXMuX2dldFBhZGRpbmcoanNvbkxlbmd0aCk7XHJcbiAgICAgICAgY29uc3QgYmluUGFkZGluZyA9IHRoaXMuX2dldFBhZGRpbmcoYmluYXJ5QnVmZmVyLmJ5dGVMZW5ndGgpO1xyXG5cclxuICAgICAgICBjb25zdCBieXRlTGVuZ3RoID0gaGVhZGVyTGVuZ3RoICsgMiAqIGNodW5rTGVuZ3RoUHJlZml4ICsganNvbkxlbmd0aCArIGpzb25QYWRkaW5nICsgYmluYXJ5QnVmZmVyLmJ5dGVMZW5ndGggKyBiaW5QYWRkaW5nO1xyXG5cclxuICAgICAgICAvLyBoZWFkZXJcclxuICAgICAgICBjb25zdCBoZWFkZXJCdWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoaGVhZGVyTGVuZ3RoKTtcclxuICAgICAgICBjb25zdCBoZWFkZXJCdWZmZXJWaWV3ID0gbmV3IERhdGFWaWV3KGhlYWRlckJ1ZmZlcik7XHJcbiAgICAgICAgaGVhZGVyQnVmZmVyVmlldy5zZXRVaW50MzIoMCwgMHg0NjU0NmM2NywgdHJ1ZSk7IC8vZ2xURlxyXG4gICAgICAgIGhlYWRlckJ1ZmZlclZpZXcuc2V0VWludDMyKDQsIDIsIHRydWUpOyAvLyB2ZXJzaW9uXHJcbiAgICAgICAgaGVhZGVyQnVmZmVyVmlldy5zZXRVaW50MzIoOCwgYnl0ZUxlbmd0aCwgdHJ1ZSk7IC8vIHRvdGFsIGJ5dGVzIGluIGZpbGVcclxuXHJcbiAgICAgICAgLy8ganNvbiBjaHVua1xyXG4gICAgICAgIGNvbnN0IGpzb25DaHVua0J1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcihjaHVua0xlbmd0aFByZWZpeCArIGpzb25MZW5ndGggKyBqc29uUGFkZGluZyk7XHJcbiAgICAgICAgY29uc3QganNvbkNodW5rQnVmZmVyVmlldyA9IG5ldyBEYXRhVmlldyhqc29uQ2h1bmtCdWZmZXIpO1xyXG4gICAgICAgIGpzb25DaHVua0J1ZmZlclZpZXcuc2V0VWludDMyKDAsIGpzb25MZW5ndGggKyBqc29uUGFkZGluZywgdHJ1ZSk7XHJcbiAgICAgICAganNvbkNodW5rQnVmZmVyVmlldy5zZXRVaW50MzIoNCwgMHg0ZTRmNTM0YSwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIC8vIGpzb24gY2h1bmsgYnl0ZXNcclxuICAgICAgICBjb25zdCBqc29uRGF0YSA9IG5ldyBVaW50OEFycmF5KGpzb25DaHVua0J1ZmZlciwgY2h1bmtMZW5ndGhQcmVmaXgpO1xyXG4gICAgICAgIC8vIGlmIFRleHRFbmNvZGVyIHdhcyBhdmFpbGFibGUsIHdlIGNhbiBzaW1wbHkgY29weSB0aGUgZW5jb2RlZCBhcnJheVxyXG4gICAgICAgIGlmIChlbmNvZGVkSnNvblRleHQpIHtcclxuICAgICAgICAgICAganNvbkRhdGEuc2V0KGVuY29kZWRKc29uVGV4dCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgYmxhbmtDaGFyQ29kZSA9IFwiX1wiLmNoYXJDb2RlQXQoMCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwganNvbkxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaGFyQ29kZSA9IGpzb25UZXh0LmNoYXJDb2RlQXQoaSk7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgY2hhcmFjdGVyIGRvZXNuJ3QgZml0IGludG8gYSBzaW5nbGUgVVRGLTE2IGNvZGUgdW5pdCwganVzdCBwdXQgYSBibGFuayBjaGFyYWN0ZXJcclxuICAgICAgICAgICAgICAgIGlmIChjaGFyQ29kZSAhPSBqc29uVGV4dC5jb2RlUG9pbnRBdChpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGpzb25EYXRhW2ldID0gYmxhbmtDaGFyQ29kZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAganNvbkRhdGFbaV0gPSBjaGFyQ29kZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8ganNvbiBwYWRkaW5nXHJcbiAgICAgICAgY29uc3QganNvblBhZGRpbmdWaWV3ID0gbmV3IFVpbnQ4QXJyYXkoanNvbkNodW5rQnVmZmVyLCBjaHVua0xlbmd0aFByZWZpeCArIGpzb25MZW5ndGgpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwganNvblBhZGRpbmc7ICsraSkge1xyXG4gICAgICAgICAgICBqc29uUGFkZGluZ1ZpZXdbaV0gPSAweDIwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gYmluYXJ5IGNodW5rXHJcbiAgICAgICAgY29uc3QgYmluYXJ5Q2h1bmtCdWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoY2h1bmtMZW5ndGhQcmVmaXgpO1xyXG4gICAgICAgIGNvbnN0IGJpbmFyeUNodW5rQnVmZmVyVmlldyA9IG5ldyBEYXRhVmlldyhiaW5hcnlDaHVua0J1ZmZlcik7XHJcbiAgICAgICAgYmluYXJ5Q2h1bmtCdWZmZXJWaWV3LnNldFVpbnQzMigwLCBiaW5hcnlCdWZmZXIuYnl0ZUxlbmd0aCArIGJpblBhZGRpbmcsIHRydWUpO1xyXG4gICAgICAgIGJpbmFyeUNodW5rQnVmZmVyVmlldy5zZXRVaW50MzIoNCwgMHgwMDRlNDk0MiwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIC8vIGJpbmFyeSBwYWRkaW5nXHJcbiAgICAgICAgY29uc3QgYmluUGFkZGluZ0J1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcihiaW5QYWRkaW5nKTtcclxuICAgICAgICBjb25zdCBiaW5QYWRkaW5nVmlldyA9IG5ldyBVaW50OEFycmF5KGJpblBhZGRpbmdCdWZmZXIpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmluUGFkZGluZzsgKytpKSB7XHJcbiAgICAgICAgICAgIGJpblBhZGRpbmdWaWV3W2ldID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGdsYkRhdGEgPSBbaGVhZGVyQnVmZmVyLCBqc29uQ2h1bmtCdWZmZXIsIGJpbmFyeUNodW5rQnVmZmVyLCBiaW5hcnlCdWZmZXIsIGJpblBhZGRpbmdCdWZmZXJdO1xyXG4gICAgICAgIGNvbnN0IGdsYkZpbGUgPSBuZXcgQmxvYihnbGJEYXRhLCB7IHR5cGU6IFwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCIgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IG5ldyBHTFRGRGF0YSgpO1xyXG4gICAgICAgIGNvbnRhaW5lci5maWxlc1tnbGJGaWxlTmFtZV0gPSBnbGJGaWxlO1xyXG5cclxuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3NldE5vZGVUcmFuc2Zvcm1hdGlvbihub2RlOiBJTm9kZSwgYmFieWxvblRyYW5zZm9ybU5vZGU6IFRyYW5zZm9ybU5vZGUsIGNvbnZlcnRUb1JpZ2h0SGFuZGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCFiYWJ5bG9uVHJhbnNmb3JtTm9kZS5nZXRQaXZvdFBvaW50KCkuZXF1YWxzVG9GbG9hdHMoMCwgMCwgMCkpIHtcclxuICAgICAgICAgICAgVG9vbHMuV2FybihcIlBpdm90IHBvaW50cyBhcmUgbm90IHN1cHBvcnRlZCBpbiB0aGUgZ2xURiBzZXJpYWxpemVyXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFiYWJ5bG9uVHJhbnNmb3JtTm9kZS5wb3NpdGlvbi5lcXVhbHNUb0Zsb2F0cygwLCAwLCAwKSkge1xyXG4gICAgICAgICAgICBjb25zdCB0cmFuc2xhdGlvbiA9IFRtcFZlY3RvcnMuVmVjdG9yM1swXS5jb3B5RnJvbShiYWJ5bG9uVHJhbnNmb3JtTm9kZS5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgIGlmIChjb252ZXJ0VG9SaWdodEhhbmRlZCkge1xyXG4gICAgICAgICAgICAgICAgQ29udmVydFRvUmlnaHRIYW5kZWRQb3NpdGlvbih0cmFuc2xhdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5vZGUudHJhbnNsYXRpb24gPSB0cmFuc2xhdGlvbi5hc0FycmF5KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWJhYnlsb25UcmFuc2Zvcm1Ob2RlLnNjYWxpbmcuZXF1YWxzVG9GbG9hdHMoMSwgMSwgMSkpIHtcclxuICAgICAgICAgICAgbm9kZS5zY2FsZSA9IGJhYnlsb25UcmFuc2Zvcm1Ob2RlLnNjYWxpbmcuYXNBcnJheSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgcm90YXRpb25RdWF0ZXJuaW9uID0gUXVhdGVybmlvbi5Gcm9tRXVsZXJBbmdsZXMoYmFieWxvblRyYW5zZm9ybU5vZGUucm90YXRpb24ueCwgYmFieWxvblRyYW5zZm9ybU5vZGUucm90YXRpb24ueSwgYmFieWxvblRyYW5zZm9ybU5vZGUucm90YXRpb24ueik7XHJcbiAgICAgICAgaWYgKGJhYnlsb25UcmFuc2Zvcm1Ob2RlLnJvdGF0aW9uUXVhdGVybmlvbikge1xyXG4gICAgICAgICAgICByb3RhdGlvblF1YXRlcm5pb24ubXVsdGlwbHlJblBsYWNlKGJhYnlsb25UcmFuc2Zvcm1Ob2RlLnJvdGF0aW9uUXVhdGVybmlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghUXVhdGVybmlvbi5Jc0lkZW50aXR5KHJvdGF0aW9uUXVhdGVybmlvbikpIHtcclxuICAgICAgICAgICAgaWYgKGNvbnZlcnRUb1JpZ2h0SGFuZGVkKSB7XHJcbiAgICAgICAgICAgICAgICBDb252ZXJ0VG9SaWdodEhhbmRlZFJvdGF0aW9uKHJvdGF0aW9uUXVhdGVybmlvbik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5vZGUucm90YXRpb24gPSByb3RhdGlvblF1YXRlcm5pb24ubm9ybWFsaXplKCkuYXNBcnJheSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9zZXRDYW1lcmFUcmFuc2Zvcm1hdGlvbihub2RlOiBJTm9kZSwgYmFieWxvbkNhbWVyYTogQ2FtZXJhLCBjb252ZXJ0VG9SaWdodEhhbmRlZDogYm9vbGVhbiwgcGFyZW50OiBOdWxsYWJsZTxOb2RlPik6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHRyYW5zbGF0aW9uID0gVG1wVmVjdG9ycy5WZWN0b3IzWzBdO1xyXG4gICAgICAgIGNvbnN0IHJvdGF0aW9uID0gVG1wVmVjdG9ycy5RdWF0ZXJuaW9uWzBdO1xyXG5cclxuICAgICAgICBpZiAocGFyZW50ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIC8vIENhbWVyYS5nZXRXb3JsZE1hdHJpeCByZXR1cm5zIGdsb2JhbCBjb29yZGluYXRlcy4gR0xURiBub2RlIG11c3QgdXNlIGxvY2FsIGNvb3JkaW5hdGVzLiBJZiBjYW1lcmEgaGFzIHBhcmVudCB3ZSBuZWVkIHRvIHVzZSBsb2NhbCB0cmFuc2xhdGlvbi9yb3RhdGlvbi5cclxuICAgICAgICAgICAgY29uc3QgcGFyZW50V29ybGRNYXRyaXggPSBNYXRyaXguSW52ZXJ0KHBhcmVudC5nZXRXb3JsZE1hdHJpeCgpKTtcclxuICAgICAgICAgICAgY29uc3QgY2FtZXJhV29ybGRNYXRyaXggPSBiYWJ5bG9uQ2FtZXJhLmdldFdvcmxkTWF0cml4KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhbWVyYUxvY2FsID0gY2FtZXJhV29ybGRNYXRyaXgubXVsdGlwbHkocGFyZW50V29ybGRNYXRyaXgpO1xyXG4gICAgICAgICAgICBjYW1lcmFMb2NhbC5kZWNvbXBvc2UodW5kZWZpbmVkLCByb3RhdGlvbiwgdHJhbnNsYXRpb24pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGJhYnlsb25DYW1lcmEuZ2V0V29ybGRNYXRyaXgoKS5kZWNvbXBvc2UodW5kZWZpbmVkLCByb3RhdGlvbiwgdHJhbnNsYXRpb24pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0cmFuc2xhdGlvbi5lcXVhbHNUb0Zsb2F0cygwLCAwLCAwKSkge1xyXG4gICAgICAgICAgICBub2RlLnRyYW5zbGF0aW9uID0gdHJhbnNsYXRpb24uYXNBcnJheSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFRdWF0ZXJuaW9uLklzSWRlbnRpdHkocm90YXRpb24pKSB7XHJcbiAgICAgICAgICAgIG5vZGUucm90YXRpb24gPSByb3RhdGlvbi5hc0FycmF5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEV4cG9ydCBiYWJ5bG9uIGNhbWVyYXMgdG8gZ2xURiBjYW1lcmFzXHJcbiAgICBwcml2YXRlIF9saXN0QXZhaWxhYmxlQ2FtZXJhcygpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGNhbWVyYSBvZiB0aGlzLl9iYWJ5bG9uU2NlbmUuY2FtZXJhcykge1xyXG4gICAgICAgICAgICBjb25zdCBnbFRGQ2FtZXJhOiBJQ2FtZXJhID0ge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogY2FtZXJhLm1vZGUgPT09IENhbWVyYS5QRVJTUEVDVElWRV9DQU1FUkEgPyBDYW1lcmFUeXBlLlBFUlNQRUNUSVZFIDogQ2FtZXJhVHlwZS5PUlRIT0dSQVBISUMsXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBpZiAoY2FtZXJhLm5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGdsVEZDYW1lcmEubmFtZSA9IGNhbWVyYS5uYW1lO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZ2xURkNhbWVyYS50eXBlID09PSBDYW1lcmFUeXBlLlBFUlNQRUNUSVZFKSB7XHJcbiAgICAgICAgICAgICAgICBnbFRGQ2FtZXJhLnBlcnNwZWN0aXZlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGFzcGVjdFJhdGlvOiBjYW1lcmEuZ2V0RW5naW5lKCkuZ2V0QXNwZWN0UmF0aW8oY2FtZXJhKSxcclxuICAgICAgICAgICAgICAgICAgICB5Zm92OiBjYW1lcmEuZm92TW9kZSA9PT0gQ2FtZXJhLkZPVk1PREVfVkVSVElDQUxfRklYRUQgPyBjYW1lcmEuZm92IDogY2FtZXJhLmZvdiAqIGNhbWVyYS5nZXRFbmdpbmUoKS5nZXRBc3BlY3RSYXRpbyhjYW1lcmEpLFxyXG4gICAgICAgICAgICAgICAgICAgIHpuZWFyOiBjYW1lcmEubWluWixcclxuICAgICAgICAgICAgICAgICAgICB6ZmFyOiBjYW1lcmEubWF4WixcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZ2xURkNhbWVyYS50eXBlID09PSBDYW1lcmFUeXBlLk9SVEhPR1JBUEhJQykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaGFsZldpZHRoID0gY2FtZXJhLm9ydGhvTGVmdCAmJiBjYW1lcmEub3J0aG9SaWdodCA/IDAuNSAqIChjYW1lcmEub3J0aG9SaWdodCAtIGNhbWVyYS5vcnRob0xlZnQpIDogY2FtZXJhLmdldEVuZ2luZSgpLmdldFJlbmRlcldpZHRoKCkgKiAwLjU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBoYWxmSGVpZ2h0ID0gY2FtZXJhLm9ydGhvQm90dG9tICYmIGNhbWVyYS5vcnRob1RvcCA/IDAuNSAqIChjYW1lcmEub3J0aG9Ub3AgLSBjYW1lcmEub3J0aG9Cb3R0b20pIDogY2FtZXJhLmdldEVuZ2luZSgpLmdldFJlbmRlckhlaWdodCgpICogMC41O1xyXG4gICAgICAgICAgICAgICAgZ2xURkNhbWVyYS5vcnRob2dyYXBoaWMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgeG1hZzogaGFsZldpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgIHltYWc6IGhhbGZIZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgem5lYXI6IGNhbWVyYS5taW5aLFxyXG4gICAgICAgICAgICAgICAgICAgIHpmYXI6IGNhbWVyYS5tYXhaLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9jYW1lcmFzTWFwLnNldChjYW1lcmEsIGdsVEZDYW1lcmEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBDbGVhbnVwIHVudXNlZCBjYW1lcmFzIGFuZCBhc3NpZ24gaW5kZXggdG8gbm9kZXMuXHJcbiAgICBwcml2YXRlIF9leHBvcnRBbmRBc3NpZ25DYW1lcmFzKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGdsdGZDYW1lcmFzID0gQXJyYXkuZnJvbSh0aGlzLl9jYW1lcmFzTWFwLnZhbHVlcygpKTtcclxuICAgICAgICBmb3IgKGNvbnN0IGdsdGZDYW1lcmEgb2YgZ2x0ZkNhbWVyYXMpIHtcclxuICAgICAgICAgICAgY29uc3QgdXNlZE5vZGVzID0gdGhpcy5fbm9kZXNDYW1lcmFNYXAuZ2V0KGdsdGZDYW1lcmEpO1xyXG4gICAgICAgICAgICBpZiAodXNlZE5vZGVzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NhbWVyYXMucHVzaChnbHRmQ2FtZXJhKTtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiB1c2VkTm9kZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLmNhbWVyYSA9IHRoaXMuX2NhbWVyYXMubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBCdWlsZHMgYWxsIHNraW5zIGluIHRoZSBza2lucyBhcnJheSBzbyBub2RlcyBjYW4gcmVmZXJlbmNlIGl0IGR1cmluZyBub2RlIHBhcnNpbmcuXHJcbiAgICBwcml2YXRlIF9saXN0QXZhaWxhYmxlU2tlbGV0b25zKCk6IHZvaWQge1xyXG4gICAgICAgIGZvciAoY29uc3Qgc2tlbGV0b24gb2YgdGhpcy5fYmFieWxvblNjZW5lLnNrZWxldG9ucykge1xyXG4gICAgICAgICAgICBpZiAoc2tlbGV0b24uYm9uZXMubGVuZ3RoIDw9IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBza2luOiBJU2tpbiA9IHsgam9pbnRzOiBbXSB9O1xyXG4gICAgICAgICAgICB0aGlzLl9za2luTWFwLnNldChza2VsZXRvbiwgc2tpbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2V4cG9ydEFuZEFzc2lnblNrZWxldG9ucygpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IHNrZWxldG9uIG9mIHRoaXMuX2JhYnlsb25TY2VuZS5za2VsZXRvbnMpIHtcclxuICAgICAgICAgICAgaWYgKHNrZWxldG9uLmJvbmVzLmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2tpbiA9IHRoaXMuX3NraW5NYXAuZ2V0KHNrZWxldG9uKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChza2luID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGJvbmVJbmRleE1hcDogeyBbaW5kZXg6IG51bWJlcl06IEJvbmUgfSA9IHt9O1xyXG4gICAgICAgICAgICBjb25zdCBpbnZlcnNlQmluZE1hdHJpY2VzOiBNYXRyaXhbXSA9IFtdO1xyXG5cclxuICAgICAgICAgICAgbGV0IG1heEJvbmVJbmRleCA9IC0xO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNrZWxldG9uLmJvbmVzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBib25lID0gc2tlbGV0b24uYm9uZXNbaV07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBib25lSW5kZXggPSBib25lLmdldEluZGV4KCkgPz8gaTtcclxuICAgICAgICAgICAgICAgIGlmIChib25lSW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4TWFwW2JvbmVJbmRleF0gPSBib25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChib25lSW5kZXggPiBtYXhCb25lSW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4Qm9uZUluZGV4ID0gYm9uZUluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gU2V0IGpvaW50cyBpbmRleCB0byBzY2VuZSBub2RlLlxyXG4gICAgICAgICAgICBmb3IgKGxldCBib25lSW5kZXggPSAwOyBib25lSW5kZXggPD0gbWF4Qm9uZUluZGV4OyArK2JvbmVJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYm9uZSA9IGJvbmVJbmRleE1hcFtib25lSW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgaW52ZXJzZUJpbmRNYXRyaWNlcy5wdXNoKGJvbmUuZ2V0QWJzb2x1dGVJbnZlcnNlQmluZE1hdHJpeCgpKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zZm9ybU5vZGUgPSBib25lLmdldFRyYW5zZm9ybU5vZGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodHJhbnNmb3JtTm9kZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vZGVJRCA9IHRoaXMuX25vZGVNYXAuZ2V0KHRyYW5zZm9ybU5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0cmFuc2Zvcm1Ob2RlICYmIG5vZGVJRCAhPT0gbnVsbCAmJiBub2RlSUQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBza2luLmpvaW50cy5wdXNoKG5vZGVJRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVG9vbHMuV2FybihcIkV4cG9ydGluZyBhIGJvbmUgd2l0aG91dCBhIGxpbmtlZCB0cmFuc2Zvcm0gbm9kZSBpcyBjdXJyZW50bHkgdW5zdXBwb3J0ZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBUb29scy5XYXJuKFwiRXhwb3J0aW5nIGEgYm9uZSB3aXRob3V0IGEgbGlua2VkIHRyYW5zZm9ybSBub2RlIGlzIGN1cnJlbnRseSB1bnN1cHBvcnRlZFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gTm9kZXMgdGhhdCB1c2UgdGhpcyBza2luLlxyXG4gICAgICAgICAgICBjb25zdCBza2luZWROb2RlcyA9IHRoaXMuX25vZGVzU2tpbk1hcC5nZXQoc2tpbik7XHJcblxyXG4gICAgICAgICAgICAvLyBPbmx5IGNyZWF0ZSBza2VsZXRvbiBpZiBpdCBoYXMgYXQgbGVhc3Qgb25lIGpvaW50IGFuZCBpcyB1c2VkIGJ5IGEgbWVzaC5cclxuICAgICAgICAgICAgaWYgKHNraW4uam9pbnRzLmxlbmd0aCA+IDAgJiYgc2tpbmVkTm9kZXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgLy8gUHV0IElCTSBkYXRhIGludG8gVHlwZWRBcnJheWJ1ZmZlciB2aWV3XHJcbiAgICAgICAgICAgICAgICBjb25zdCBieXRlTGVuZ3RoID0gaW52ZXJzZUJpbmRNYXRyaWNlcy5sZW5ndGggKiA2NDsgLy8gQWx3YXlzIGEgNCB4IDQgbWF0cml4IG9mIDMyIGJpdCBmbG9hdFxyXG4gICAgICAgICAgICAgICAgY29uc3QgaW52ZXJzZUJpbmRNYXRyaWNlc0RhdGEgPSBuZXcgRmxvYXQzMkFycmF5KGJ5dGVMZW5ndGggLyA0KTtcclxuICAgICAgICAgICAgICAgIGludmVyc2VCaW5kTWF0cmljZXMuZm9yRWFjaCgobWF0OiBNYXRyaXgsIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpbnZlcnNlQmluZE1hdHJpY2VzRGF0YS5zZXQobWF0Lm0sIGluZGV4ICogMTYpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgYnVmZmVyIHZpZXcgYW5kIGFjY2Vzc29yXHJcbiAgICAgICAgICAgICAgICBjb25zdCBidWZmZXJWaWV3ID0gdGhpcy5fYnVmZmVyTWFuYWdlci5jcmVhdGVCdWZmZXJWaWV3KGludmVyc2VCaW5kTWF0cmljZXNEYXRhKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2FjY2Vzc29ycy5wdXNoKHRoaXMuX2J1ZmZlck1hbmFnZXIuY3JlYXRlQWNjZXNzb3IoYnVmZmVyVmlldywgQWNjZXNzb3JUeXBlLk1BVDQsIEFjY2Vzc29yQ29tcG9uZW50VHlwZS5GTE9BVCwgaW52ZXJzZUJpbmRNYXRyaWNlcy5sZW5ndGgpKTtcclxuICAgICAgICAgICAgICAgIHNraW4uaW52ZXJzZUJpbmRNYXRyaWNlcyA9IHRoaXMuX2FjY2Vzc29ycy5sZW5ndGggLSAxO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX3NraW5zLnB1c2goc2tpbik7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHNraW5lZE5vZGUgb2Ygc2tpbmVkTm9kZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBza2luZWROb2RlLnNraW4gPSB0aGlzLl9za2lucy5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgX2V4cG9ydFNjZW5lQXN5bmMoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgY29uc3Qgc2NlbmU6IElTY2VuZSA9IHsgbm9kZXM6IFtdIH07XHJcblxyXG4gICAgICAgIC8vIFNjZW5lIG1ldGFkYXRhXHJcbiAgICAgICAgaWYgKHRoaXMuX2JhYnlsb25TY2VuZS5tZXRhZGF0YSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fb3B0aW9ucy5tZXRhZGF0YVNlbGVjdG9yKSB7XHJcbiAgICAgICAgICAgICAgICBzY2VuZS5leHRyYXMgPSB0aGlzLl9vcHRpb25zLm1ldGFkYXRhU2VsZWN0b3IodGhpcy5fYmFieWxvblNjZW5lLm1ldGFkYXRhKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9iYWJ5bG9uU2NlbmUubWV0YWRhdGEuZ2x0Zikge1xyXG4gICAgICAgICAgICAgICAgc2NlbmUuZXh0cmFzID0gdGhpcy5fYmFieWxvblNjZW5lLm1ldGFkYXRhLmdsdGYuZXh0cmFzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAgVE9ETzpcclxuICAgICAgICAvLyAgZGVhbCB3aXRoIHRoaXMgZnJvbSB0aGUgbG9hZGVyOlxyXG4gICAgICAgIC8vICBiYWJ5bG9uTWF0ZXJpYWwuaW52ZXJ0Tm9ybWFsTWFwWCA9ICF0aGlzLl9iYWJ5bG9uU2NlbmUudXNlUmlnaHRIYW5kZWRTeXN0ZW07XHJcbiAgICAgICAgLy8gIGJhYnlsb25NYXRlcmlhbC5pbnZlcnROb3JtYWxNYXBZID0gdGhpcy5fYmFieWxvblNjZW5lLnVzZVJpZ2h0SGFuZGVkU3lzdGVtO1xyXG5cclxuICAgICAgICBjb25zdCByb290Tm9kZXNSSCA9IG5ldyBBcnJheTxOb2RlPigpO1xyXG4gICAgICAgIGNvbnN0IHJvb3ROb2Rlc0xIID0gbmV3IEFycmF5PE5vZGU+KCk7XHJcbiAgICAgICAgY29uc3Qgcm9vdE5vb3BOb2Rlc1JIID0gbmV3IEFycmF5PE5vZGU+KCk7XHJcblxyXG4gICAgICAgIGZvciAoY29uc3Qgcm9vdE5vZGUgb2YgdGhpcy5fYmFieWxvblNjZW5lLnJvb3ROb2Rlcykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fb3B0aW9ucy5yZW1vdmVOb29wUm9vdE5vZGVzICYmICF0aGlzLl9vcHRpb25zLmluY2x1ZGVDb29yZGluYXRlU3lzdGVtQ29udmVyc2lvbk5vZGVzICYmIElzTm9vcE5vZGUocm9vdE5vZGUsIHRoaXMuX2JhYnlsb25TY2VuZS51c2VSaWdodEhhbmRlZFN5c3RlbSkpIHtcclxuICAgICAgICAgICAgICAgIHJvb3ROb29wTm9kZXNSSC5wdXNoKC4uLnJvb3ROb2RlLmdldENoaWxkcmVuKCkpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JhYnlsb25TY2VuZS51c2VSaWdodEhhbmRlZFN5c3RlbSkge1xyXG4gICAgICAgICAgICAgICAgcm9vdE5vZGVzUkgucHVzaChyb290Tm9kZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByb290Tm9kZXNMSC5wdXNoKHJvb3ROb2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fbGlzdEF2YWlsYWJsZUNhbWVyYXMoKTtcclxuICAgICAgICB0aGlzLl9saXN0QXZhaWxhYmxlU2tlbGV0b25zKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHN0YXRlTEggPSBuZXcgRXhwb3J0ZXJTdGF0ZSh0cnVlLCBmYWxzZSk7XHJcbiAgICAgICAgc2NlbmUubm9kZXMucHVzaCguLi4oYXdhaXQgdGhpcy5fZXhwb3J0Tm9kZXNBc3luYyhyb290Tm9kZXNMSCwgc3RhdGVMSCkpKTtcclxuICAgICAgICBjb25zdCBzdGF0ZVJIID0gbmV3IEV4cG9ydGVyU3RhdGUoZmFsc2UsIGZhbHNlKTtcclxuICAgICAgICBzY2VuZS5ub2Rlcy5wdXNoKC4uLihhd2FpdCB0aGlzLl9leHBvcnROb2Rlc0FzeW5jKHJvb3ROb2Rlc1JILCBzdGF0ZVJIKSkpO1xyXG4gICAgICAgIGNvbnN0IG5vb3BSSCA9IG5ldyBFeHBvcnRlclN0YXRlKGZhbHNlLCB0cnVlKTtcclxuICAgICAgICBzY2VuZS5ub2Rlcy5wdXNoKC4uLihhd2FpdCB0aGlzLl9leHBvcnROb2Rlc0FzeW5jKHJvb3ROb29wTm9kZXNSSCwgbm9vcFJIKSkpO1xyXG5cclxuICAgICAgICBpZiAoc2NlbmUubm9kZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NjZW5lcy5wdXNoKHNjZW5lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2V4cG9ydEFuZEFzc2lnbkNhbWVyYXMoKTtcclxuICAgICAgICB0aGlzLl9leHBvcnRBbmRBc3NpZ25Ta2VsZXRvbnMoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2JhYnlsb25TY2VuZS5hbmltYXRpb25Hcm91cHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIF9HTFRGQW5pbWF0aW9uLl9DcmVhdGVOb2RlQW5kTW9ycGhBbmltYXRpb25Gcm9tQW5pbWF0aW9uR3JvdXBzKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fYmFieWxvblNjZW5lLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fYW5pbWF0aW9ucyxcclxuICAgICAgICAgICAgICAgIHRoaXMuX25vZGVNYXAsXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9idWZmZXJNYW5hZ2VyLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fYnVmZmVyVmlld3MsXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hY2Nlc3NvcnMsXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hbmltYXRpb25TYW1wbGVSYXRlLFxyXG4gICAgICAgICAgICAgICAgc3RhdGVMSC5nZXROb2Rlc1NldCgpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fb3B0aW9ucy5zaG91bGRFeHBvcnRBbmltYXRpb25cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfc2hvdWxkRXhwb3J0Tm9kZShiYWJ5bG9uTm9kZTogTm9kZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSB0aGlzLl9zaG91bGRFeHBvcnROb2RlTWFwLmdldChiYWJ5bG9uTm9kZSk7XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLl9vcHRpb25zLnNob3VsZEV4cG9ydE5vZGUoYmFieWxvbk5vZGUpO1xyXG4gICAgICAgICAgICB0aGlzLl9zaG91bGRFeHBvcnROb2RlTWFwLnNldChiYWJ5bG9uTm9kZSwgcmVzdWx0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBfZXhwb3J0Tm9kZXNBc3luYyhiYWJ5bG9uUm9vdE5vZGVzOiBOb2RlW10sIHN0YXRlOiBFeHBvcnRlclN0YXRlKTogUHJvbWlzZTxudW1iZXJbXT4ge1xyXG4gICAgICAgIGNvbnN0IG5vZGVzID0gbmV3IEFycmF5PG51bWJlcj4oKTtcclxuXHJcbiAgICAgICAgdGhpcy5fZXhwb3J0QnVmZmVycyhiYWJ5bG9uUm9vdE5vZGVzLCBzdGF0ZSk7XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgYmFieWxvbk5vZGUgb2YgYmFieWxvblJvb3ROb2Rlcykge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLl9leHBvcnROb2RlQXN5bmMoYmFieWxvbk5vZGUsIG5vZGVzLCBzdGF0ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbm9kZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY29sbGVjdEJ1ZmZlcnMoXHJcbiAgICAgICAgYmFieWxvbk5vZGU6IE5vZGUsXHJcbiAgICAgICAgYnVmZmVyVG9WZXJ0ZXhCdWZmZXJzTWFwOiBNYXA8QnVmZmVyLCBWZXJ0ZXhCdWZmZXJbXT4sXHJcbiAgICAgICAgdmVydGV4QnVmZmVyVG9NZXNoZXNNYXA6IE1hcDxWZXJ0ZXhCdWZmZXIsIE1lc2hbXT4sXHJcbiAgICAgICAgbW9ycGhUYXJnZXRzVG9NZXNoZXNNYXA6IE1hcDxNb3JwaFRhcmdldCwgTWVzaFtdPixcclxuICAgICAgICBzdGF0ZTogRXhwb3J0ZXJTdGF0ZVxyXG4gICAgKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3Nob3VsZEV4cG9ydE5vZGUoYmFieWxvbk5vZGUpICYmIGJhYnlsb25Ob2RlIGluc3RhbmNlb2YgTWVzaCAmJiBiYWJ5bG9uTm9kZS5nZW9tZXRyeSkge1xyXG4gICAgICAgICAgICBjb25zdCB2ZXJ0ZXhCdWZmZXJzID0gYmFieWxvbk5vZGUuZ2VvbWV0cnkuZ2V0VmVydGV4QnVmZmVycygpO1xyXG4gICAgICAgICAgICBpZiAodmVydGV4QnVmZmVycykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBraW5kIGluIHZlcnRleEJ1ZmZlcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIUlzU3RhbmRhcmRWZXJ0ZXhBdHRyaWJ1dGUoa2luZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZlcnRleEJ1ZmZlciA9IHZlcnRleEJ1ZmZlcnNba2luZF07XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuc2V0SGFzVmVydGV4Q29sb3JBbHBoYSh2ZXJ0ZXhCdWZmZXIsIGJhYnlsb25Ob2RlLmhhc1ZlcnRleEFscGhhKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBidWZmZXIgPSB2ZXJ0ZXhCdWZmZXIuX2J1ZmZlcjtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2ZXJ0ZXhCdWZmZXJBcnJheSA9IGJ1ZmZlclRvVmVydGV4QnVmZmVyc01hcC5nZXQoYnVmZmVyKSB8fCBbXTtcclxuICAgICAgICAgICAgICAgICAgICBidWZmZXJUb1ZlcnRleEJ1ZmZlcnNNYXAuc2V0KGJ1ZmZlciwgdmVydGV4QnVmZmVyQXJyYXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2ZXJ0ZXhCdWZmZXJBcnJheS5pbmRleE9mKHZlcnRleEJ1ZmZlcikgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRleEJ1ZmZlckFycmF5LnB1c2godmVydGV4QnVmZmVyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc2hlcyA9IHZlcnRleEJ1ZmZlclRvTWVzaGVzTWFwLmdldCh2ZXJ0ZXhCdWZmZXIpIHx8IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRleEJ1ZmZlclRvTWVzaGVzTWFwLnNldCh2ZXJ0ZXhCdWZmZXIsIG1lc2hlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1lc2hlcy5pbmRleE9mKGJhYnlsb25Ob2RlKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzaGVzLnB1c2goYmFieWxvbk5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgbW9ycGhUYXJnZXRNYW5hZ2VyID0gYmFieWxvbk5vZGUubW9ycGhUYXJnZXRNYW5hZ2VyO1xyXG5cclxuICAgICAgICAgICAgaWYgKG1vcnBoVGFyZ2V0TWFuYWdlcikge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgbW9ycGhJbmRleCA9IDA7IG1vcnBoSW5kZXggPCBtb3JwaFRhcmdldE1hbmFnZXIubnVtVGFyZ2V0czsgbW9ycGhJbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9ycGhUYXJnZXQgPSBtb3JwaFRhcmdldE1hbmFnZXIuZ2V0VGFyZ2V0KG1vcnBoSW5kZXgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXNoZXMgPSBtb3JwaFRhcmdldHNUb01lc2hlc01hcC5nZXQobW9ycGhUYXJnZXQpIHx8IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIG1vcnBoVGFyZ2V0c1RvTWVzaGVzTWFwLnNldChtb3JwaFRhcmdldCwgbWVzaGVzKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobWVzaGVzLmluZGV4T2YoYmFieWxvbk5vZGUpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNoZXMucHVzaChiYWJ5bG9uTm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGJhYnlsb25DaGlsZE5vZGUgb2YgYmFieWxvbk5vZGUuZ2V0Q2hpbGRyZW4oKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9jb2xsZWN0QnVmZmVycyhiYWJ5bG9uQ2hpbGROb2RlLCBidWZmZXJUb1ZlcnRleEJ1ZmZlcnNNYXAsIHZlcnRleEJ1ZmZlclRvTWVzaGVzTWFwLCBtb3JwaFRhcmdldHNUb01lc2hlc01hcCwgc3RhdGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9leHBvcnRCdWZmZXJzKGJhYnlsb25Sb290Tm9kZXM6IE5vZGVbXSwgc3RhdGU6IEV4cG9ydGVyU3RhdGUpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBidWZmZXJUb1ZlcnRleEJ1ZmZlcnNNYXAgPSBuZXcgTWFwPEJ1ZmZlciwgVmVydGV4QnVmZmVyW10+KCk7XHJcbiAgICAgICAgY29uc3QgdmVydGV4QnVmZmVyVG9NZXNoZXNNYXAgPSBuZXcgTWFwPFZlcnRleEJ1ZmZlciwgTWVzaFtdPigpO1xyXG4gICAgICAgIGNvbnN0IG1vcnBoVGFnZXRzTWVzaGVzTWFwID0gbmV3IE1hcDxNb3JwaFRhcmdldCwgTWVzaFtdPigpO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGJhYnlsb25Ob2RlIG9mIGJhYnlsb25Sb290Tm9kZXMpIHtcclxuICAgICAgICAgICAgdGhpcy5fY29sbGVjdEJ1ZmZlcnMoYmFieWxvbk5vZGUsIGJ1ZmZlclRvVmVydGV4QnVmZmVyc01hcCwgdmVydGV4QnVmZmVyVG9NZXNoZXNNYXAsIG1vcnBoVGFnZXRzTWVzaGVzTWFwLCBzdGF0ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBidWZmZXJzID0gQXJyYXkuZnJvbShidWZmZXJUb1ZlcnRleEJ1ZmZlcnNNYXAua2V5cygpKTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBidWZmZXIgb2YgYnVmZmVycykge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYnVmZmVyLmdldERhdGEoKTtcclxuICAgICAgICAgICAgaWYgKCFkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJCdWZmZXIgZGF0YSBpcyBub3QgYXZhaWxhYmxlXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCB2ZXJ0ZXhCdWZmZXJzID0gYnVmZmVyVG9WZXJ0ZXhCdWZmZXJzTWFwLmdldChidWZmZXIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCF2ZXJ0ZXhCdWZmZXJzKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgYnl0ZVN0cmlkZSA9IHZlcnRleEJ1ZmZlcnNbMF0uYnl0ZVN0cmlkZTtcclxuICAgICAgICAgICAgaWYgKHZlcnRleEJ1ZmZlcnMuc29tZSgodmVydGV4QnVmZmVyKSA9PiB2ZXJ0ZXhCdWZmZXIuYnl0ZVN0cmlkZSAhPT0gYnl0ZVN0cmlkZSkpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlZlcnRleCBidWZmZXJzIHBvaW50aW5nIHRvIHRoZSBzYW1lIGJ1ZmZlciBtdXN0IGhhdmUgdGhlIHNhbWUgYnl0ZSBzdHJpZGVcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGJ5dGVzID0gRGF0YUFycmF5VG9VaW50OEFycmF5KGRhdGEpLnNsaWNlKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBBcHBseSBjb252ZXJzaW9ucyB0byBidWZmZXIgZGF0YSBpbi1wbGFjZS5cclxuICAgICAgICAgICAgZm9yIChjb25zdCB2ZXJ0ZXhCdWZmZXIgb2YgdmVydGV4QnVmZmVycykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeyBieXRlT2Zmc2V0LCBieXRlU3RyaWRlLCB0eXBlLCBub3JtYWxpemVkIH0gPSB2ZXJ0ZXhCdWZmZXI7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzaXplID0gdmVydGV4QnVmZmVyLmdldFNpemUoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1lc2hlcyA9IHZlcnRleEJ1ZmZlclRvTWVzaGVzTWFwLmdldCh2ZXJ0ZXhCdWZmZXIpITtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1heFRvdGFsVmVydGljZXMgPSBtZXNoZXMucmVkdWNlKChtYXgsIGN1cnJlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudC5nZXRUb3RhbFZlcnRpY2VzKCkgPiBtYXggPyBjdXJyZW50LmdldFRvdGFsVmVydGljZXMoKSA6IG1heDtcclxuICAgICAgICAgICAgICAgIH0sIC1OdW1iZXIuTUFYX1ZBTFVFKTsgLy8gVG8gZW5zdXJlIG5vdGhpbmcgaXMgbWlzc2VkIHdoZW4gZW51bWVyYXRpbmcsIGJ1dCBtYXkgbm90IGJlIG5lY2Vzc2FyeS5cclxuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHZlcnRleEJ1ZmZlci5nZXRLaW5kKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBOb3JtYWxpemUgbm9ybWFscyBhbmQgdGFuZ2VudHMuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuTm9ybWFsS2luZDpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5UYW5nZW50S2luZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBFbnVtZXJhdGVGbG9hdFZhbHVlcyhieXRlcywgYnl0ZU9mZnNldCwgYnl0ZVN0cmlkZSwgc2l6ZSwgdHlwZSwgbWF4VG90YWxWZXJ0aWNlcyAqIHNpemUsIG5vcm1hbGl6ZWQsICh2YWx1ZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxlbmd0aCA9IE1hdGguc3FydCh2YWx1ZXNbMF0gKiB2YWx1ZXNbMF0gKyB2YWx1ZXNbMV0gKiB2YWx1ZXNbMV0gKyB2YWx1ZXNbMl0gKiB2YWx1ZXNbMl0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnZMZW5ndGggPSAxIC8gbGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlc1swXSAqPSBpbnZMZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzWzFdICo9IGludkxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXNbMl0gKj0gaW52TGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIENvbnZlcnQgU3RhbmRhcmRNYXRlcmlhbCB2ZXJ0ZXggY29sb3JzIGZyb20gZ2FtbWEgdG8gbGluZWFyIHNwYWNlLlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLkNvbG9yS2luZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGRNYXRlcmlhbENvdW50ID0gbWVzaGVzLmZpbHRlcigobWVzaCkgPT4gbWVzaC5tYXRlcmlhbCBpbnN0YW5jZW9mIFN0YW5kYXJkTWF0ZXJpYWwgfHwgbWVzaC5tYXRlcmlhbCA9PSBudWxsKS5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RkTWF0ZXJpYWxDb3VudCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhazsgLy8gQnVmZmVyIG5vdCB1c2VkIGJ5IFN0YW5kYXJkTWF0ZXJpYWxzLCBzbyBubyBjb252ZXJzaW9uIG5lZWRlZC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogSW1wbGVtZW50IHRoaXMgY2FzZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0ZE1hdGVyaWFsQ291bnQgIT0gbWVzaGVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nZ2VyLldhcm4oXCJOb3QgY29udmVydGluZyB2ZXJ0ZXggY29sb3Igc3BhY2UsIGFzIGJ1ZmZlciBpcyBzaGFyZWQgYnkgU3RhbmRhcmRNYXRlcmlhbHMgYW5kIG90aGVyIG1hdGVyaWFsIHR5cGVzLiBSZXN1bHRzIG1heSBsb29rIGluY29ycmVjdC5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT0gVmVydGV4QnVmZmVyLlVOU0lHTkVEX0JZVEUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZ2dlci5XYXJuKFwiQ29udmVydGluZyB1aW50OCB2ZXJ0ZXggY29sb3JzIHRvIGxpbmVhciBzcGFjZS4gUmVzdWx0cyBtYXkgbG9vayBpbmNvcnJlY3QuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2ZXJ0ZXhEYXRhMyA9IG5ldyBDb2xvcjMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmVydGV4RGF0YTQgPSBuZXcgQ29sb3I0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVzZUV4YWN0U3JnYkNvbnZlcnNpb25zID0gdGhpcy5fYmFieWxvblNjZW5lLmdldEVuZ2luZSgpLnVzZUV4YWN0U3JnYkNvbnZlcnNpb25zO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRW51bWVyYXRlRmxvYXRWYWx1ZXMoYnl0ZXMsIGJ5dGVPZmZzZXQsIGJ5dGVTdHJpZGUsIHNpemUsIHR5cGUsIG1heFRvdGFsVmVydGljZXMgKiBzaXplLCBub3JtYWxpemVkLCAodmFsdWVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBVc2luZyBzZXBhcmF0ZSBDb2xvcjMgYW5kIENvbG9yNCBvYmplY3RzIHRvIGVuc3VyZSB0aGUgcmlnaHQgZnVuY3Rpb25zIGFyZSBjYWxsZWQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWVzLmxlbmd0aCA9PT0gMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRleERhdGEzLmZyb21BcnJheSh2YWx1ZXMsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRleERhdGEzLnRvTGluZWFyU3BhY2VUb1JlZih2ZXJ0ZXhEYXRhMywgdXNlRXhhY3RTcmdiQ29udmVyc2lvbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRleERhdGEzLnRvQXJyYXkodmFsdWVzLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGV4RGF0YTQuZnJvbUFycmF5KHZhbHVlcywgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGV4RGF0YTQudG9MaW5lYXJTcGFjZVRvUmVmKHZlcnRleERhdGE0LCB1c2VFeGFjdFNyZ2JDb252ZXJzaW9ucyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGV4RGF0YTQudG9BcnJheSh2YWx1ZXMsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFBlcmZvcm1zIGNvb3JkaW5hdGUgY29udmVyc2lvbiBpZiBuZWVkZWQgKG9ubHkgZm9yIHBvc2l0aW9uLCBub3JtYWwgYW5kIHRhbmdlbnQpLlxyXG4gICAgICAgICAgICBpZiAoc3RhdGUuY29udmVydFRvUmlnaHRIYW5kZWQpIHtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgdmVydGV4QnVmZmVyIG9mIHZlcnRleEJ1ZmZlcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHZlcnRleEJ1ZmZlci5nZXRLaW5kKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuUG9zaXRpb25LaW5kOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5Ob3JtYWxLaW5kOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5UYW5nZW50S2luZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBtZXNoIG9mIHZlcnRleEJ1ZmZlclRvTWVzaGVzTWFwLmdldCh2ZXJ0ZXhCdWZmZXIpISkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgYnl0ZU9mZnNldCwgYnl0ZVN0cmlkZSwgdHlwZSwgbm9ybWFsaXplZCB9ID0gdmVydGV4QnVmZmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNpemUgPSB2ZXJ0ZXhCdWZmZXIuZ2V0U2l6ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVudW1lcmF0ZUZsb2F0VmFsdWVzKGJ5dGVzLCBieXRlT2Zmc2V0LCBieXRlU3RyaWRlLCBzaXplLCB0eXBlLCBtZXNoLmdldFRvdGFsVmVydGljZXMoKSAqIHNpemUsIG5vcm1hbGl6ZWQsICh2YWx1ZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzWzBdID0gLXZhbHVlc1swXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTYXZlIGNvbnZlcnRlZCBieXRlcyBmb3IgbWluL21heCBjb21wdXRhdGlvbi5cclxuICAgICAgICAgICAgICAgIHN0YXRlLmNvbnZlcnRlZFRvUmlnaHRIYW5kZWRCdWZmZXJzLnNldChidWZmZXIsIGJ5dGVzKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQ3JlYXRlIGJ1ZmZlciB2aWV3LCBidXQgZGVmZXIgYWNjZXNzb3IgY3JlYXRpb24gZm9yIGxhdGVyLiBJbnN0ZWFkLCB0cmFjayBpdCB2aWEgRXhwb3J0ZXJTdGF0ZS5cclxuICAgICAgICAgICAgY29uc3QgYnVmZmVyVmlldyA9IHRoaXMuX2J1ZmZlck1hbmFnZXIuY3JlYXRlQnVmZmVyVmlldyhieXRlcywgYnl0ZVN0cmlkZSk7XHJcbiAgICAgICAgICAgIHN0YXRlLnNldFZlcnRleEJ1ZmZlclZpZXcoYnVmZmVyLCBidWZmZXJWaWV3KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGZsb2F0TWF0cmljZXNJbmRpY2VzID0gbmV3IE1hcDxWZXJ0ZXhCdWZmZXIsIEZsb2F0QXJyYXk+KCk7XHJcblxyXG4gICAgICAgICAgICAvLyBJZiBidWZmZXJzIGFyZSBvZiB0eXBlIE1hdHJpY2VzSW5kaWNlc0tpbmQgYW5kIGhhdmUgZmxvYXQgdmFsdWVzLCB3ZSBuZWVkIHRvIGNyZWF0ZSBhIG5ldyBidWZmZXIgaW5zdGVhZC5cclxuICAgICAgICAgICAgZm9yIChjb25zdCB2ZXJ0ZXhCdWZmZXIgb2YgdmVydGV4QnVmZmVycykge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh2ZXJ0ZXhCdWZmZXIuZ2V0S2luZCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuTWF0cmljZXNJbmRpY2VzS2luZDpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5NYXRyaWNlc0luZGljZXNFeHRyYUtpbmQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZlcnRleEJ1ZmZlci50eXBlID09IFZlcnRleEJ1ZmZlci5GTE9BVCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBtZXNoIG9mIHZlcnRleEJ1ZmZlclRvTWVzaGVzTWFwLmdldCh2ZXJ0ZXhCdWZmZXIpISkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZsb2F0RGF0YSA9IHZlcnRleEJ1ZmZlci5nZXRGbG9hdERhdGEobWVzaC5nZXRUb3RhbFZlcnRpY2VzKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmbG9hdERhdGEgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXRNYXRyaWNlc0luZGljZXMuc2V0KHZlcnRleEJ1ZmZlciwgZmxvYXREYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChmbG9hdE1hdHJpY2VzSW5kaWNlcy5zaXplICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBMb2dnZXIuV2FybihcclxuICAgICAgICAgICAgICAgICAgICBgSm9pbnRzIGNvbnZlcnNpb24gbmVlZGVkOiBzb21lIGpvaW50cyBhcmUgc3RvcmVkIGFzIGZsb2F0cyBpbiBCYWJ5bG9uIGJ1dCBHTFRGIHJlcXVpcmVzIFVOU0lHTkVEIEJZVEVTLiBXZSB3aWxsIHBlcmZvcm0gdGhlIGNvbnZlcnNpb24gYnV0IHRoaXMgbWlnaHQgbGVhZCB0byB1bnVzZWQgZGF0YSBpbiB0aGUgYnVmZmVyLmBcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGZsb2F0QXJyYXlWZXJ0ZXhCdWZmZXJzID0gQXJyYXkuZnJvbShmbG9hdE1hdHJpY2VzSW5kaWNlcy5rZXlzKCkpO1xyXG5cclxuICAgICAgICAgICAgZm9yIChjb25zdCB2ZXJ0ZXhCdWZmZXIgb2YgZmxvYXRBcnJheVZlcnRleEJ1ZmZlcnMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFycmF5ID0gZmxvYXRNYXRyaWNlc0luZGljZXMuZ2V0KHZlcnRleEJ1ZmZlcik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFhcnJheSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzMTZCaXQgPSBGbG9hdHNOZWVkMTZCaXRJbnRlZ2VyKGFycmF5KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0FycmF5ID0gbmV3IChpczE2Qml0ID8gVWludDE2QXJyYXkgOiBVaW50OEFycmF5KShhcnJheS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0FycmF5W2luZGV4XSA9IGFycmF5W2luZGV4XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IGJ1ZmZlclZpZXcgPSB0aGlzLl9idWZmZXJNYW5hZ2VyLmNyZWF0ZUJ1ZmZlclZpZXcobmV3QXJyYXksIDQgKiAoaXMxNkJpdCA/IDIgOiAxKSk7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5zZXRSZW1hcHBlZEJ1ZmZlclZpZXcoYnVmZmVyLCB2ZXJ0ZXhCdWZmZXIsIGJ1ZmZlclZpZXcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBtb3JwaFRhcmdldHMgPSBBcnJheS5mcm9tKG1vcnBoVGFnZXRzTWVzaGVzTWFwLmtleXMoKSk7XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgbW9ycGhUYXJnZXQgb2YgbW9ycGhUYXJnZXRzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc2hlcyA9IG1vcnBoVGFnZXRzTWVzaGVzTWFwLmdldChtb3JwaFRhcmdldCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIW1lc2hlcykge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGdsVEZNb3JwaFRhcmdldCA9IEJ1aWxkTW9ycGhUYXJnZXRCdWZmZXJzKG1vcnBoVGFyZ2V0LCBtZXNoZXNbMF0sIHRoaXMuX2J1ZmZlck1hbmFnZXIsIHRoaXMuX2J1ZmZlclZpZXdzLCB0aGlzLl9hY2Nlc3NvcnMsIHN0YXRlLmNvbnZlcnRUb1JpZ2h0SGFuZGVkKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgbWVzaCBvZiBtZXNoZXMpIHtcclxuICAgICAgICAgICAgICAgIHN0YXRlLmJpbmRNb3JwaERhdGFUb01lc2gobWVzaCwgZ2xURk1vcnBoVGFyZ2V0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFByb2Nlc3NlcyBhIG5vZGUgdG8gYmUgZXhwb3J0ZWQgdG8gdGhlIGdsVEYgZmlsZVxyXG4gICAgICogQHJldHVybnMgQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgb25jZSB0aGUgbm9kZSBoYXMgYmVlbiBleHBvcnRlZFxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgYXN5bmMgX2V4cG9ydE5vZGVBc3luYyhiYWJ5bG9uTm9kZTogTm9kZSwgcGFyZW50Tm9kZUNoaWxkcmVuOiBBcnJheTxudW1iZXI+LCBzdGF0ZTogRXhwb3J0ZXJTdGF0ZSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGxldCBub2RlSW5kZXggPSB0aGlzLl9ub2RlTWFwLmdldChiYWJ5bG9uTm9kZSk7XHJcbiAgICAgICAgaWYgKG5vZGVJbmRleCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGlmICghcGFyZW50Tm9kZUNoaWxkcmVuLmluY2x1ZGVzKG5vZGVJbmRleCkpIHtcclxuICAgICAgICAgICAgICAgIHBhcmVudE5vZGVDaGlsZHJlbi5wdXNoKG5vZGVJbmRleCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgbm9kZSA9IGF3YWl0IHRoaXMuX2NyZWF0ZU5vZGVBc3luYyhiYWJ5bG9uTm9kZSwgc3RhdGUpO1xyXG5cclxuICAgICAgICBpZiAobm9kZSkge1xyXG4gICAgICAgICAgICBub2RlSW5kZXggPSB0aGlzLl9ub2Rlcy5sZW5ndGg7XHJcbiAgICAgICAgICAgIHRoaXMuX25vZGVzLnB1c2gobm9kZSk7XHJcbiAgICAgICAgICAgIHRoaXMuX25vZGVNYXAuc2V0KGJhYnlsb25Ob2RlLCBub2RlSW5kZXgpO1xyXG4gICAgICAgICAgICBzdGF0ZS5wdXNoRXhwb3J0ZWROb2RlKGJhYnlsb25Ob2RlKTtcclxuICAgICAgICAgICAgcGFyZW50Tm9kZUNoaWxkcmVuLnB1c2gobm9kZUluZGV4KTtcclxuXHJcbiAgICAgICAgICAgIC8vIFByb2Nlc3Mgbm9kZSdzIGFuaW1hdGlvbnMgb25jZSB0aGUgbm9kZSBoYXMgYmVlbiBhZGRlZCB0byBub2RlTWFwIChUT0RPOiBUaGlzIHNob3VsZCBiZSByZWZhY3RvcmVkKVxyXG4gICAgICAgICAgICBjb25zdCBydW50aW1lR0xURkFuaW1hdGlvbjogSUFuaW1hdGlvbiA9IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwicnVudGltZSBhbmltYXRpb25zXCIsXHJcbiAgICAgICAgICAgICAgICBjaGFubmVsczogW10sXHJcbiAgICAgICAgICAgICAgICBzYW1wbGVyczogW10sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbnN0IGlkbGVHTFRGQW5pbWF0aW9uczogSUFuaW1hdGlvbltdID0gW107XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX2JhYnlsb25TY2VuZS5hbmltYXRpb25Hcm91cHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBfR0xURkFuaW1hdGlvbi5fQ3JlYXRlTW9ycGhUYXJnZXRBbmltYXRpb25Gcm9tTW9ycGhUYXJnZXRBbmltYXRpb25zKFxyXG4gICAgICAgICAgICAgICAgICAgIGJhYnlsb25Ob2RlLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bnRpbWVHTFRGQW5pbWF0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIGlkbGVHTFRGQW5pbWF0aW9ucyxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ub2RlTWFwLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX25vZGVzLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2J1ZmZlck1hbmFnZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYnVmZmVyVmlld3MsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYWNjZXNzb3JzLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2FuaW1hdGlvblNhbXBsZVJhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuY29udmVydFRvUmlnaHRIYW5kZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fb3B0aW9ucy5zaG91bGRFeHBvcnRBbmltYXRpb25cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYmFieWxvbk5vZGUuYW5pbWF0aW9ucy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBfR0xURkFuaW1hdGlvbi5fQ3JlYXRlTm9kZUFuaW1hdGlvbkZyb21Ob2RlQW5pbWF0aW9ucyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFieWxvbk5vZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bnRpbWVHTFRGQW5pbWF0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZGxlR0xURkFuaW1hdGlvbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX25vZGVNYXAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX25vZGVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9idWZmZXJNYW5hZ2VyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9idWZmZXJWaWV3cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fYWNjZXNzb3JzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9hbmltYXRpb25TYW1wbGVSYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS5jb252ZXJ0VG9SaWdodEhhbmRlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fb3B0aW9ucy5zaG91bGRFeHBvcnRBbmltYXRpb25cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAocnVudGltZUdMVEZBbmltYXRpb24uY2hhbm5lbHMubGVuZ3RoICYmIHJ1bnRpbWVHTFRGQW5pbWF0aW9uLnNhbXBsZXJzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYW5pbWF0aW9ucy5wdXNoKHJ1bnRpbWVHTFRGQW5pbWF0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZGxlR0xURkFuaW1hdGlvbnMuZm9yRWFjaCgoaWRsZUdMVEZBbmltYXRpb24pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpZGxlR0xURkFuaW1hdGlvbi5jaGFubmVscy5sZW5ndGggJiYgaWRsZUdMVEZBbmltYXRpb24uc2FtcGxlcnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYW5pbWF0aW9ucy5wdXNoKGlkbGVHTFRGQW5pbWF0aW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBCZWdpbiBwcm9jZXNzaW5nIGNoaWxkIG5vZGVzIG9uY2UgcGFyZW50IGhhcyBiZWVuIGFkZGVkIHRvIHRoZSBub2RlIGxpc3RcclxuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IG5vZGUgPyBbXSA6IHBhcmVudE5vZGVDaGlsZHJlbjtcclxuICAgICAgICBmb3IgKGNvbnN0IGJhYnlsb25DaGlsZE5vZGUgb2YgYmFieWxvbk5vZGUuZ2V0Q2hpbGRyZW4oKSkge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLl9leHBvcnROb2RlQXN5bmMoYmFieWxvbkNoaWxkTm9kZSwgY2hpbGRyZW4sIHN0YXRlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChub2RlICYmIGNoaWxkcmVuLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBub2RlLmNoaWxkcmVuID0gY2hpbGRyZW47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIGdsVEYgbm9kZSBmcm9tIGEgQmFieWxvbi5qcyBub2RlLiBJZiBza2lwcGVkLCByZXR1cm5zIG51bGwuXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBhc3luYyBfY3JlYXRlTm9kZUFzeW5jKGJhYnlsb25Ob2RlOiBOb2RlLCBzdGF0ZTogRXhwb3J0ZXJTdGF0ZSk6IFByb21pc2U8TnVsbGFibGU8SU5vZGU+PiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9zaG91bGRFeHBvcnROb2RlKGJhYnlsb25Ob2RlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG5vZGU6IElOb2RlID0ge307XHJcblxyXG4gICAgICAgIGlmIChiYWJ5bG9uTm9kZS5uYW1lKSB7XHJcbiAgICAgICAgICAgIG5vZGUubmFtZSA9IGJhYnlsb25Ob2RlLm5hbWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYmFieWxvbk5vZGUgaW5zdGFuY2VvZiBUcmFuc2Zvcm1Ob2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NldE5vZGVUcmFuc2Zvcm1hdGlvbihub2RlLCBiYWJ5bG9uTm9kZSwgc3RhdGUuY29udmVydFRvUmlnaHRIYW5kZWQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGJhYnlsb25Ob2RlIGluc3RhbmNlb2YgTWVzaCB8fCBiYWJ5bG9uTm9kZSBpbnN0YW5jZW9mIEluc3RhbmNlZE1lc2gpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJhYnlsb25NZXNoID0gYmFieWxvbk5vZGUgaW5zdGFuY2VvZiBNZXNoID8gYmFieWxvbk5vZGUgOiBiYWJ5bG9uTm9kZS5zb3VyY2VNZXNoO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJhYnlsb25NZXNoLnN1Yk1lc2hlcyAmJiBiYWJ5bG9uTWVzaC5zdWJNZXNoZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUubWVzaCA9IGF3YWl0IHRoaXMuX2V4cG9ydE1lc2hBc3luYyhiYWJ5bG9uTWVzaCwgc3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChiYWJ5bG9uTm9kZS5za2VsZXRvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNraW4gPSB0aGlzLl9za2luTWFwLmdldChiYWJ5bG9uTm9kZS5za2VsZXRvbik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChza2luICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX25vZGVzU2tpbk1hcC5nZXQoc2tpbikgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbm9kZXNTa2luTWFwLnNldChza2luLCBbXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX25vZGVzU2tpbk1hcC5nZXQoc2tpbik/LnB1c2gobm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYmFieWxvbk5vZGUgaW5zdGFuY2VvZiBDYW1lcmEpIHtcclxuICAgICAgICAgICAgY29uc3QgZ2x0ZkNhbWVyYSA9IHRoaXMuX2NhbWVyYXNNYXAuZ2V0KGJhYnlsb25Ob2RlKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChnbHRmQ2FtZXJhKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fbm9kZXNDYW1lcmFNYXAuZ2V0KGdsdGZDYW1lcmEpID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ub2Rlc0NhbWVyYU1hcC5zZXQoZ2x0ZkNhbWVyYSwgW10pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudEJhYnlsb25Ob2RlID0gYmFieWxvbk5vZGUucGFyZW50O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2V0Q2FtZXJhVHJhbnNmb3JtYXRpb24obm9kZSwgYmFieWxvbk5vZGUsIHN0YXRlLmNvbnZlcnRUb1JpZ2h0SGFuZGVkLCBwYXJlbnRCYWJ5bG9uTm9kZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gSWYgYSBjYW1lcmEgaGFzIGEgbm9kZSB0aGF0IHdhcyBhZGRlZCBieSB0aGUgR0xURiBpbXBvcnRlciwgd2UgY2FuIGp1c3QgdXNlIHRoZSBwYXJlbnQgbm9kZSB0cmFuc2Zvcm0gYXMgdGhlIFwiY2FtZXJhXCIgdHJhbnNmb3JtLlxyXG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudEJhYnlsb25Ob2RlICYmIElzUGFyZW50QWRkZWRCeUltcG9ydGVyKGJhYnlsb25Ob2RlLCBwYXJlbnRCYWJ5bG9uTm9kZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnROb2RlSW5kZXggPSB0aGlzLl9ub2RlTWFwLmdldChwYXJlbnRCYWJ5bG9uTm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmVudE5vZGVJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnROb2RlID0gdGhpcy5fbm9kZXNbcGFyZW50Tm9kZUluZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbm9kZXNDYW1lcmFNYXAuZ2V0KGdsdGZDYW1lcmEpPy5wdXNoKHBhcmVudE5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDsgLy8gU2tpcCBleHBvcnRpbmcgdGhpcyBub2RlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlLmNvbnZlcnRUb1JpZ2h0SGFuZGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29udmVydFRvUmlnaHRIYW5kZWROb2RlKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIFJvdGF0ZU5vZGUxODBZKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbm9kZXNDYW1lcmFNYXAuZ2V0KGdsdGZDYW1lcmEpPy5wdXNoKG5vZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBBcHBseSBleHRlbnNpb25zIHRvIHRoZSBub2RlLiBJZiB0aGlzIHJlc29sdmVzIHRvIG51bGwsIGl0IG1lYW5zIHdlIHNob3VsZCBza2lwIGV4cG9ydGluZyB0aGlzIG5vZGVcclxuICAgICAgICBjb25zdCBwcm9jZXNzZWROb2RlID0gYXdhaXQgdGhpcy5fZXh0ZW5zaW9uc1Bvc3RFeHBvcnROb2RlQXN5bmMoXCJleHBvcnROb2RlQXN5bmNcIiwgbm9kZSwgYmFieWxvbk5vZGUsIHRoaXMuX25vZGVNYXAsIHN0YXRlLmNvbnZlcnRUb1JpZ2h0SGFuZGVkKTtcclxuICAgICAgICBpZiAoIXByb2Nlc3NlZE5vZGUpIHtcclxuICAgICAgICAgICAgTG9nZ2VyLldhcm4oYE5vdCBleHBvcnRpbmcgbm9kZSAke2JhYnlsb25Ob2RlLm5hbWV9YCk7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZXhwb3J0SW5kaWNlcyhcclxuICAgICAgICBpbmRpY2VzOiBOdWxsYWJsZTxJbmRpY2VzQXJyYXk+LFxyXG4gICAgICAgIGlzMzJCaXRzOiBib29sZWFuLFxyXG4gICAgICAgIHN0YXJ0OiBudW1iZXIsXHJcbiAgICAgICAgY291bnQ6IG51bWJlcixcclxuICAgICAgICBvZmZzZXQ6IG51bWJlcixcclxuICAgICAgICBmaWxsTW9kZTogbnVtYmVyLFxyXG4gICAgICAgIHNpZGVPcmllbnRhdGlvbjogbnVtYmVyLFxyXG4gICAgICAgIHN0YXRlOiBFeHBvcnRlclN0YXRlLFxyXG4gICAgICAgIHByaW1pdGl2ZTogSU1lc2hQcmltaXRpdmVcclxuICAgICk6IHZvaWQge1xyXG4gICAgICAgIGxldCBpbmRpY2VzVG9FeHBvcnQgPSBpbmRpY2VzO1xyXG5cclxuICAgICAgICBwcmltaXRpdmUubW9kZSA9IEdldFByaW1pdGl2ZU1vZGUoZmlsbE1vZGUpO1xyXG5cclxuICAgICAgICAvLyBGbGlwIGlmIHRyaWFuZ2xlIHdpbmRpbmcgb3JkZXIgaXMgbm90IENDVyBhcyBnbFRGIGlzIGFsd2F5cyBDQ1cuXHJcbiAgICAgICAgY29uc3QgaW52ZXJ0ZWRNYXRlcmlhbCA9IHNpZGVPcmllbnRhdGlvbiAhPT0gTWF0ZXJpYWwuQ291bnRlckNsb2NrV2lzZVNpZGVPcmllbnRhdGlvbjtcclxuXHJcbiAgICAgICAgY29uc3QgZmxpcFdoZW5JbnZlcnRlZE1hdGVyaWFsID0gIXN0YXRlLndhc0FkZGVkQnlOb29wTm9kZSAmJiBpbnZlcnRlZE1hdGVyaWFsO1xyXG5cclxuICAgICAgICBjb25zdCBmbGlwID0gSXNUcmlhbmdsZUZpbGxNb2RlKGZpbGxNb2RlKSAmJiBmbGlwV2hlbkludmVydGVkTWF0ZXJpYWw7XHJcblxyXG4gICAgICAgIGlmIChmbGlwKSB7XHJcbiAgICAgICAgICAgIGlmIChmaWxsTW9kZSA9PT0gTWF0ZXJpYWwuVHJpYW5nbGVTdHJpcERyYXdNb2RlIHx8IGZpbGxNb2RlID09PSBNYXRlcmlhbC5UcmlhbmdsZUZhbkRyYXdNb2RlKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUcmlhbmdsZSBzdHJpcC9mYW4gZmlsbCBtb2RlIGlzIG5vdCBpbXBsZW1lbnRlZFwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcHJpbWl0aXZlLm1vZGUgPSBHZXRQcmltaXRpdmVNb2RlKGZpbGxNb2RlKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0luZGljZXMgPSBpczMyQml0cyA/IG5ldyBVaW50MzJBcnJheShjb3VudCkgOiBuZXcgVWludDE2QXJyYXkoY291bnQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGluZGljZXMpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpICsgMiA8IGNvdW50OyBpICs9IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdJbmRpY2VzW2ldID0gaW5kaWNlc1tzdGFydCArIGldICsgb2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0luZGljZXNbaSArIDFdID0gaW5kaWNlc1tzdGFydCArIGkgKyAyXSArIG9mZnNldDtcclxuICAgICAgICAgICAgICAgICAgICBuZXdJbmRpY2VzW2kgKyAyXSA9IGluZGljZXNbc3RhcnQgKyBpICsgMV0gKyBvZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSArIDIgPCBjb3VudDsgaSArPSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3SW5kaWNlc1tpXSA9IGk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3SW5kaWNlc1tpICsgMV0gPSBpICsgMjtcclxuICAgICAgICAgICAgICAgICAgICBuZXdJbmRpY2VzW2kgKyAyXSA9IGkgKyAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbmRpY2VzVG9FeHBvcnQgPSBuZXdJbmRpY2VzO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaW5kaWNlcyAmJiBvZmZzZXQgIT09IDApIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3SW5kaWNlcyA9IGlzMzJCaXRzID8gbmV3IFVpbnQzMkFycmF5KGNvdW50KSA6IG5ldyBVaW50MTZBcnJheShjb3VudCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbmV3SW5kaWNlc1tpXSA9IGluZGljZXNbc3RhcnQgKyBpXSArIG9mZnNldDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW5kaWNlc1RvRXhwb3J0ID0gbmV3SW5kaWNlcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpbmRpY2VzVG9FeHBvcnQpIHtcclxuICAgICAgICAgICAgbGV0IGFjY2Vzc29ySW5kZXggPSBzdGF0ZS5nZXRJbmRpY2VzQWNjZXNzb3IoaW5kaWNlcywgc3RhcnQsIGNvdW50LCBvZmZzZXQsIGZsaXApO1xyXG4gICAgICAgICAgICBpZiAoYWNjZXNzb3JJbmRleCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBieXRlcyA9IEluZGljZXNBcnJheVRvVHlwZWRBcnJheShpbmRpY2VzVG9FeHBvcnQsIDAsIGNvdW50LCBpczMyQml0cyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBidWZmZXJWaWV3ID0gdGhpcy5fYnVmZmVyTWFuYWdlci5jcmVhdGVCdWZmZXJWaWV3KGJ5dGVzKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRUeXBlID0gaXMzMkJpdHMgPyBBY2Nlc3NvckNvbXBvbmVudFR5cGUuVU5TSUdORURfSU5UIDogQWNjZXNzb3JDb21wb25lbnRUeXBlLlVOU0lHTkVEX1NIT1JUO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYWNjZXNzb3JzLnB1c2godGhpcy5fYnVmZmVyTWFuYWdlci5jcmVhdGVBY2Nlc3NvcihidWZmZXJWaWV3LCBBY2Nlc3NvclR5cGUuU0NBTEFSLCBjb21wb25lbnRUeXBlLCBjb3VudCwgMCkpO1xyXG4gICAgICAgICAgICAgICAgYWNjZXNzb3JJbmRleCA9IHRoaXMuX2FjY2Vzc29ycy5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICAgICAgc3RhdGUuc2V0SW5kaWNlc0FjY2Vzc29yKGluZGljZXMsIHN0YXJ0LCBjb3VudCwgb2Zmc2V0LCBmbGlwLCBhY2Nlc3NvckluZGV4KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcHJpbWl0aXZlLmluZGljZXMgPSBhY2Nlc3NvckluZGV4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9leHBvcnRWZXJ0ZXhCdWZmZXIodmVydGV4QnVmZmVyOiBWZXJ0ZXhCdWZmZXIsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwsIHN0YXJ0OiBudW1iZXIsIGNvdW50OiBudW1iZXIsIHN0YXRlOiBFeHBvcnRlclN0YXRlLCBwcmltaXRpdmU6IElNZXNoUHJpbWl0aXZlKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qga2luZCA9IHZlcnRleEJ1ZmZlci5nZXRLaW5kKCk7XHJcblxyXG4gICAgICAgIGlmICghSXNTdGFuZGFyZFZlcnRleEF0dHJpYnV0ZShraW5kKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoa2luZC5zdGFydHNXaXRoKFwidXZcIikgJiYgIXRoaXMuX29wdGlvbnMuZXhwb3J0VW51c2VkVVZzKSB7XHJcbiAgICAgICAgICAgIGlmICghYmFieWxvbk1hdGVyaWFsIHx8ICF0aGlzLl9tYXRlcmlhbE5lZWRzVVZzU2V0LmhhcyhiYWJ5bG9uTWF0ZXJpYWwpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBhY2Nlc3NvckluZGV4ID0gc3RhdGUuZ2V0VmVydGV4QWNjZXNzb3IodmVydGV4QnVmZmVyLCBzdGFydCwgY291bnQpO1xyXG5cclxuICAgICAgICBpZiAoYWNjZXNzb3JJbmRleCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIC8vIEdldCBtaW4vbWF4IGZyb20gY29udmVydGVkIG9yIG9yaWdpbmFsIGRhdGEuXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBzdGF0ZS5jb252ZXJ0ZWRUb1JpZ2h0SGFuZGVkQnVmZmVycy5nZXQodmVydGV4QnVmZmVyLl9idWZmZXIpIHx8IHZlcnRleEJ1ZmZlci5fYnVmZmVyLmdldERhdGEoKSE7XHJcbiAgICAgICAgICAgIGNvbnN0IG1pbk1heCA9IGtpbmQgPT09IFZlcnRleEJ1ZmZlci5Qb3NpdGlvbktpbmQgPyBHZXRNaW5NYXgoZGF0YSwgdmVydGV4QnVmZmVyLCBzdGFydCwgY291bnQpIDogdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICAgICAgLy8gRm9yIHRoZSByZW1hcHBlZCBidWZmZXIgdmlld3Mgd2UgY3JlYXRlZCBmb3IgZmxvYXQgbWF0cmljZXMgaW5kaWNlcywgbWFrZSBzdXJlIHRvIHVzZSB0aGVpciB1cGRhdGVkIGluZm9ybWF0aW9uLlxyXG4gICAgICAgICAgICBjb25zdCBpc0Zsb2F0TWF0cmljZXNJbmRpY2VzID1cclxuICAgICAgICAgICAgICAgIChraW5kID09PSBWZXJ0ZXhCdWZmZXIuTWF0cmljZXNJbmRpY2VzS2luZCB8fCBraW5kID09PSBWZXJ0ZXhCdWZmZXIuTWF0cmljZXNJbmRpY2VzRXh0cmFLaW5kKSAmJiB2ZXJ0ZXhCdWZmZXIudHlwZSA9PT0gVmVydGV4QnVmZmVyLkZMT0FUO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdmVydGV4QnVmZmVyVHlwZSA9IGlzRmxvYXRNYXRyaWNlc0luZGljZXMgPyBWZXJ0ZXhCdWZmZXIuVU5TSUdORURfQllURSA6IHZlcnRleEJ1ZmZlci50eXBlO1xyXG4gICAgICAgICAgICBjb25zdCB2ZXJ0ZXhCdWZmZXJOb3JtYWxpemVkID0gaXNGbG9hdE1hdHJpY2VzSW5kaWNlcyA/IHVuZGVmaW5lZCA6IHZlcnRleEJ1ZmZlci5ub3JtYWxpemVkO1xyXG4gICAgICAgICAgICBjb25zdCBidWZmZXJWaWV3ID0gaXNGbG9hdE1hdHJpY2VzSW5kaWNlcyA/IHN0YXRlLmdldFJlbWFwcGVkQnVmZmVyVmlldyh2ZXJ0ZXhCdWZmZXIuX2J1ZmZlciwgdmVydGV4QnVmZmVyKSEgOiBzdGF0ZS5nZXRWZXJ0ZXhCdWZmZXJWaWV3KHZlcnRleEJ1ZmZlci5fYnVmZmVyKSE7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBieXRlT2Zmc2V0ID0gdmVydGV4QnVmZmVyLmJ5dGVPZmZzZXQgKyBzdGFydCAqIHZlcnRleEJ1ZmZlci5ieXRlU3RyaWRlO1xyXG4gICAgICAgICAgICB0aGlzLl9hY2Nlc3NvcnMucHVzaChcclxuICAgICAgICAgICAgICAgIHRoaXMuX2J1ZmZlck1hbmFnZXIuY3JlYXRlQWNjZXNzb3IoXHJcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyVmlldyxcclxuICAgICAgICAgICAgICAgICAgICBHZXRBY2Nlc3NvclR5cGUoa2luZCwgc3RhdGUuaGFzVmVydGV4Q29sb3JBbHBoYSh2ZXJ0ZXhCdWZmZXIpKSxcclxuICAgICAgICAgICAgICAgICAgICB2ZXJ0ZXhCdWZmZXJUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgIGJ5dGVPZmZzZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgbWluTWF4LFxyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRleEJ1ZmZlck5vcm1hbGl6ZWQgLy8gVE9ETzogRmluZCBvdGhlciBwbGFjZXMgd2hlcmUgdGhpcyBpcyBuZWVkZWQuXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGFjY2Vzc29ySW5kZXggPSB0aGlzLl9hY2Nlc3NvcnMubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgc3RhdGUuc2V0VmVydGV4QWNjZXNzb3IodmVydGV4QnVmZmVyLCBzdGFydCwgY291bnQsIGFjY2Vzc29ySW5kZXgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpbWl0aXZlLmF0dHJpYnV0ZXNbR2V0QXR0cmlidXRlVHlwZShraW5kKV0gPSBhY2Nlc3NvckluZGV4O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgX2V4cG9ydE1hdGVyaWFsQXN5bmMoYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCwgdmVydGV4QnVmZmVyczogeyBba2luZDogc3RyaW5nXTogVmVydGV4QnVmZmVyIH0sIHN1Yk1lc2g6IFN1Yk1lc2gsIHByaW1pdGl2ZTogSU1lc2hQcmltaXRpdmUpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBsZXQgbWF0ZXJpYWxJbmRleCA9IHRoaXMuX21hdGVyaWFsTWFwLmdldChiYWJ5bG9uTWF0ZXJpYWwpO1xyXG4gICAgICAgIGlmIChtYXRlcmlhbEluZGV4ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgY29uc3QgaGFzVVZzID0gdmVydGV4QnVmZmVycyAmJiBPYmplY3Qua2V5cyh2ZXJ0ZXhCdWZmZXJzKS5zb21lKChraW5kKSA9PiBraW5kLnN0YXJ0c1dpdGgoXCJ1dlwiKSk7XHJcbiAgICAgICAgICAgIGJhYnlsb25NYXRlcmlhbCA9IGJhYnlsb25NYXRlcmlhbCBpbnN0YW5jZW9mIE11bHRpTWF0ZXJpYWwgPyBiYWJ5bG9uTWF0ZXJpYWwuc3ViTWF0ZXJpYWxzW3N1Yk1lc2gubWF0ZXJpYWxJbmRleF0hIDogYmFieWxvbk1hdGVyaWFsO1xyXG4gICAgICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsIGluc3RhbmNlb2YgUEJSTWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgICAgIG1hdGVyaWFsSW5kZXggPSBhd2FpdCB0aGlzLl9tYXRlcmlhbEV4cG9ydGVyLmV4cG9ydFBCUk1hdGVyaWFsQXN5bmMoYmFieWxvbk1hdGVyaWFsLCBJbWFnZU1pbWVUeXBlLlBORywgaGFzVVZzKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChiYWJ5bG9uTWF0ZXJpYWwgaW5zdGFuY2VvZiBTdGFuZGFyZE1hdGVyaWFsKSB7XHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbEluZGV4ID0gYXdhaXQgdGhpcy5fbWF0ZXJpYWxFeHBvcnRlci5leHBvcnRTdGFuZGFyZE1hdGVyaWFsQXN5bmMoYmFieWxvbk1hdGVyaWFsLCBJbWFnZU1pbWVUeXBlLlBORywgaGFzVVZzKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIExvZ2dlci5XYXJuKGBVbnN1cHBvcnRlZCBtYXRlcmlhbCAnJHtiYWJ5bG9uTWF0ZXJpYWwubmFtZX0nIHdpdGggdHlwZSAke2JhYnlsb25NYXRlcmlhbC5nZXRDbGFzc05hbWUoKX1gKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5fbWF0ZXJpYWxNYXAuc2V0KGJhYnlsb25NYXRlcmlhbCwgbWF0ZXJpYWxJbmRleCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcmltaXRpdmUubWF0ZXJpYWwgPSBtYXRlcmlhbEluZGV4O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgX2V4cG9ydE1lc2hBc3luYyhiYWJ5bG9uTWVzaDogTWVzaCwgc3RhdGU6IEV4cG9ydGVyU3RhdGUpOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gICAgICAgIGxldCBtZXNoSW5kZXggPSBzdGF0ZS5nZXRNZXNoKGJhYnlsb25NZXNoKTtcclxuICAgICAgICBpZiAobWVzaEluZGV4ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1lc2hJbmRleDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG1lc2g6IElNZXNoID0geyBwcmltaXRpdmVzOiBbXSB9O1xyXG4gICAgICAgIG1lc2hJbmRleCA9IHRoaXMuX21lc2hlcy5sZW5ndGg7XHJcbiAgICAgICAgdGhpcy5fbWVzaGVzLnB1c2gobWVzaCk7XHJcbiAgICAgICAgc3RhdGUuc2V0TWVzaChiYWJ5bG9uTWVzaCwgbWVzaEluZGV4KTtcclxuXHJcbiAgICAgICAgY29uc3QgaW5kaWNlcyA9IGJhYnlsb25NZXNoLmlzVW5JbmRleGVkID8gbnVsbCA6IGJhYnlsb25NZXNoLmdldEluZGljZXMoKTtcclxuICAgICAgICBjb25zdCB2ZXJ0ZXhCdWZmZXJzID0gYmFieWxvbk1lc2guZ2VvbWV0cnk/LmdldFZlcnRleEJ1ZmZlcnMoKTtcclxuICAgICAgICBjb25zdCBtb3JwaFRhcmdldHMgPSBzdGF0ZS5nZXRNb3JwaFRhcmdldHNGcm9tTWVzaChiYWJ5bG9uTWVzaCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGlzTGluZXNNZXNoID0gYmFieWxvbk1lc2ggaW5zdGFuY2VvZiBMaW5lc01lc2g7XHJcbiAgICAgICAgY29uc3QgaXNHcmVhc2VkTGluZU1lc2ggPSBiYWJ5bG9uTWVzaCBpbnN0YW5jZW9mIEdyZWFzZWRMaW5lQmFzZU1lc2g7XHJcblxyXG4gICAgICAgIGNvbnN0IHN1Yk1lc2hlcyA9IGJhYnlsb25NZXNoLnN1Yk1lc2hlcztcclxuICAgICAgICBpZiAodmVydGV4QnVmZmVycyAmJiBzdWJNZXNoZXMgJiYgc3ViTWVzaGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBzdWJNZXNoIG9mIHN1Yk1lc2hlcykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJpbWl0aXZlOiBJTWVzaFByaW1pdGl2ZSA9IHsgYXR0cmlidXRlczoge30gfTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBiYWJ5bG9uTWF0ZXJpYWwgPSBzdWJNZXNoLmdldE1hdGVyaWFsKCkgfHwgdGhpcy5fYmFieWxvblNjZW5lLmRlZmF1bHRNYXRlcmlhbDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaXNHcmVhc2VkTGluZU1lc2gpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRlcmlhbDogSU1hdGVyaWFsID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBiYWJ5bG9uTWF0ZXJpYWwubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBiYWJ5bG9uTGluZXNNZXNoID0gYmFieWxvbk1lc2ggYXMgR3JlYXNlZExpbmVCYXNlTWVzaDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29sb3JXaGl0ZSA9IENvbG9yMy5XaGl0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFscGhhID0gYmFieWxvbkxpbmVzTWVzaC5tYXRlcmlhbD8uYWxwaGEgPz8gMTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb2xvciA9IGJhYnlsb25MaW5lc01lc2guZ3JlYXNlZExpbmVNYXRlcmlhbD8uY29sb3IgPz8gY29sb3JXaGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbG9yLmVxdWFscyhjb2xvcldoaXRlKSB8fCBhbHBoYSA8IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYWwucGJyTWV0YWxsaWNSb3VnaG5lc3MgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlQ29sb3JGYWN0b3I6IFsuLi5jb2xvci5hc0FycmF5KCksIGFscGhhXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21hdGVyaWFscy5wdXNoKG1hdGVyaWFsKTtcclxuICAgICAgICAgICAgICAgICAgICBwcmltaXRpdmUubWF0ZXJpYWwgPSB0aGlzLl9tYXRlcmlhbHMubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNMaW5lc01lc2gpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBTcGVjaWFsIGNhc2UgZm9yIExpbmVzTWVzaFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsOiBJTWF0ZXJpYWwgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGJhYnlsb25NYXRlcmlhbC5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhYnlsb25MaW5lc01lc2ggPSBiYWJ5bG9uTWVzaCBhcyBMaW5lc01lc2g7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghYmFieWxvbkxpbmVzTWVzaC5jb2xvci5lcXVhbHMoQ29sb3IzLldoaXRlKCkpIHx8IGJhYnlsb25MaW5lc01lc2guYWxwaGEgPCAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsLnBick1ldGFsbGljUm91Z2huZXNzID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZUNvbG9yRmFjdG9yOiBbLi4uYmFieWxvbkxpbmVzTWVzaC5jb2xvci5hc0FycmF5KCksIGJhYnlsb25MaW5lc01lc2guYWxwaGFdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbWF0ZXJpYWxzLnB1c2gobWF0ZXJpYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHByaW1pdGl2ZS5tYXRlcmlhbCA9IHRoaXMuX21hdGVyaWFscy5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBNYXRlcmlhbFxyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuX2V4cG9ydE1hdGVyaWFsQXN5bmMoYmFieWxvbk1hdGVyaWFsLCB2ZXJ0ZXhCdWZmZXJzLCBzdWJNZXNoLCBwcmltaXRpdmUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIEluZGV4IGJ1ZmZlclxyXG4gICAgICAgICAgICAgICAgY29uc3QgZmlsbE1vZGUgPSBpc0xpbmVzTWVzaCB8fCBpc0dyZWFzZWRMaW5lTWVzaCA/IE1hdGVyaWFsLkxpbmVMaXN0RHJhd01vZGUgOiAoYmFieWxvbk1lc2gub3ZlcnJpZGVSZW5kZXJpbmdGaWxsTW9kZSA/PyBiYWJ5bG9uTWF0ZXJpYWwuZmlsbE1vZGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHNpZGVPcmllbnRhdGlvbiA9IGJhYnlsb25NYXRlcmlhbC5fZ2V0RWZmZWN0aXZlT3JpZW50YXRpb24oYmFieWxvbk1lc2gpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX2V4cG9ydEluZGljZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgaW5kaWNlcyxcclxuICAgICAgICAgICAgICAgICAgICBpbmRpY2VzID8gQXJlSW5kaWNlczMyQml0cyhpbmRpY2VzLCBzdWJNZXNoLmluZGV4Q291bnQsIHN1Yk1lc2guaW5kZXhTdGFydCwgc3ViTWVzaC52ZXJ0aWNlc1N0YXJ0KSA6IHN1Yk1lc2gudmVydGljZXNDb3VudCA+IDY1NTM1LFxyXG4gICAgICAgICAgICAgICAgICAgIGluZGljZXMgPyBzdWJNZXNoLmluZGV4U3RhcnQgOiBzdWJNZXNoLnZlcnRpY2VzU3RhcnQsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5kaWNlcyA/IHN1Yk1lc2guaW5kZXhDb3VudCA6IHN1Yk1lc2gudmVydGljZXNDb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAtc3ViTWVzaC52ZXJ0aWNlc1N0YXJ0LFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGxNb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNpZGVPcmllbnRhdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBwcmltaXRpdmVcclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gVmVydGV4IGJ1ZmZlcnNcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgdmVydGV4QnVmZmVyIG9mIE9iamVjdC52YWx1ZXModmVydGV4QnVmZmVycykpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9leHBvcnRWZXJ0ZXhCdWZmZXIodmVydGV4QnVmZmVyLCBiYWJ5bG9uTWF0ZXJpYWwsIHN1Yk1lc2gudmVydGljZXNTdGFydCwgc3ViTWVzaC52ZXJ0aWNlc0NvdW50LCBzdGF0ZSwgcHJpbWl0aXZlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobW9ycGhUYXJnZXRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpbWl0aXZlLnRhcmdldHMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGdsdGZNb3JwaFRhcmdldCBvZiBtb3JwaFRhcmdldHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWl0aXZlLnRhcmdldHMucHVzaChnbHRmTW9ycGhUYXJnZXQuYXR0cmlidXRlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIG1lc2gucHJpbWl0aXZlcy5wdXNoKHByaW1pdGl2ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9leHRlbnNpb25zUG9zdEV4cG9ydE1lc2hQcmltaXRpdmUocHJpbWl0aXZlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG1vcnBoVGFyZ2V0cykge1xyXG4gICAgICAgICAgICBtZXNoLndlaWdodHMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGlmICghbWVzaC5leHRyYXMpIHtcclxuICAgICAgICAgICAgICAgIG1lc2guZXh0cmFzID0ge307XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbWVzaC5leHRyYXMudGFyZ2V0TmFtZXMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgZ2x0Zk1vcnBoVGFyZ2V0IG9mIG1vcnBoVGFyZ2V0cykge1xyXG4gICAgICAgICAgICAgICAgbWVzaC53ZWlnaHRzLnB1c2goZ2x0Zk1vcnBoVGFyZ2V0LmluZmx1ZW5jZSk7XHJcbiAgICAgICAgICAgICAgICBtZXNoLmV4dHJhcy50YXJnZXROYW1lcy5wdXNoKGdsdGZNb3JwaFRhcmdldC5uYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG1lc2hJbmRleDtcclxuICAgIH1cclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBiYWJ5bG9uanMvYXZhaWxhYmxlICovXHJcblxyXG5pbXBvcnQgdHlwZSB7IElUZXh0dXJlSW5mbywgSU1hdGVyaWFsLCBJTWF0ZXJpYWxQYnJNZXRhbGxpY1JvdWdobmVzcywgSU1hdGVyaWFsT2NjbHVzaW9uVGV4dHVyZUluZm8sIElTYW1wbGVyLCBJSW1hZ2UgfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IEltYWdlTWltZVR5cGUsIE1hdGVyaWFsQWxwaGFNb2RlLCBUZXh0dXJlTWFnRmlsdGVyLCBUZXh0dXJlTWluRmlsdGVyLCBUZXh0dXJlV3JhcE1vZGUgfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcblxyXG5pbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcImNvcmUvdHlwZXNcIjtcclxuaW1wb3J0IHsgQ29sb3IzIH0gZnJvbSBcImNvcmUvTWF0aHMvbWF0aC5jb2xvclwiO1xyXG5pbXBvcnQgeyBTY2FsYXIgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLnNjYWxhclwiO1xyXG5pbXBvcnQgeyBUb29scyB9IGZyb20gXCJjb3JlL01pc2MvdG9vbHNcIjtcclxuaW1wb3J0IHsgVGV4dHVyZVRvb2xzIH0gZnJvbSBcImNvcmUvTWlzYy90ZXh0dXJlVG9vbHNcIjtcclxuaW1wb3J0IHR5cGUgeyBCYXNlVGV4dHVyZSB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9UZXh0dXJlcy9iYXNlVGV4dHVyZVwiO1xyXG5pbXBvcnQgeyBUZXh0dXJlIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1RleHR1cmVzL3RleHR1cmVcIjtcclxuaW1wb3J0IHsgUmF3VGV4dHVyZSB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9UZXh0dXJlcy9yYXdUZXh0dXJlXCI7XHJcblxyXG5pbXBvcnQgdHlwZSB7IFNjZW5lIH0gZnJvbSBcImNvcmUvc2NlbmVcIjtcclxuXHJcbmltcG9ydCB0eXBlIHsgR0xURkV4cG9ydGVyIH0gZnJvbSBcIi4vZ2xURkV4cG9ydGVyXCI7XHJcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCJjb3JlL0VuZ2luZXMvY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IER1bXBUb29scyB9IGZyb20gXCJjb3JlL01pc2MvZHVtcFRvb2xzXCI7XHJcblxyXG5pbXBvcnQgdHlwZSB7IE1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL21hdGVyaWFsXCI7XHJcbmltcG9ydCB0eXBlIHsgU3RhbmRhcmRNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9zdGFuZGFyZE1hdGVyaWFsXCI7XHJcbmltcG9ydCB0eXBlIHsgUEJSQmFzZU1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1BCUi9wYnJCYXNlTWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgU3BlY3VsYXJQb3dlclRvUm91Z2huZXNzIH0gZnJvbSBcImNvcmUvSGVscGVycy9tYXRlcmlhbENvbnZlcnNpb25IZWxwZXJcIjtcclxuXHJcbmNvbnN0IGVwc2lsb24gPSAxZS02O1xyXG5jb25zdCBkaWVsZWN0cmljU3BlY3VsYXIgPSBuZXcgQ29sb3IzKDAuMDQsIDAuMDQsIDAuMDQpO1xyXG5jb25zdCBtYXhTcGVjdWxhclBvd2VyID0gMTAyNDtcclxuY29uc3Qgd2hpdGUgPSBDb2xvcjMuV2hpdGUoKTtcclxuY29uc3QgYmxhY2sgPSBDb2xvcjMuQmxhY2soKTtcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIHN0b3Jpbmcgc3BlY3VsYXIgZ2xvc3NpbmVzcyBmYWN0b3JzXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuaW50ZXJmYWNlIElQQlJTcGVjdWxhckdsb3NzaW5lc3Mge1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXByZXNlbnRzIHRoZSBsaW5lYXIgZGlmZnVzZSBmYWN0b3JzIG9mIHRoZSBtYXRlcmlhbFxyXG4gICAgICovXHJcbiAgICBkaWZmdXNlQ29sb3I6IENvbG9yMztcclxuICAgIHNwZWN1bGFyQ29sb3I6IENvbG9yMztcclxuICAgIGdsb3NzaW5lc3M6IG51bWJlcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIElQQlJNZXRhbGxpY1JvdWdobmVzcyB7XHJcbiAgICBiYXNlQ29sb3I6IENvbG9yMztcclxuICAgIG1ldGFsbGljOiBOdWxsYWJsZTxudW1iZXI+O1xyXG4gICAgcm91Z2huZXNzOiBOdWxsYWJsZTxudW1iZXI+O1xyXG4gICAgbWV0YWxsaWNSb3VnaG5lc3NUZXh0dXJlRGF0YT86IE51bGxhYmxlPEFycmF5QnVmZmVyPjtcclxuICAgIGJhc2VDb2xvclRleHR1cmVEYXRhPzogTnVsbGFibGU8QXJyYXlCdWZmZXI+O1xyXG59XHJcblxyXG5mdW5jdGlvbiBHZXRGaWxlRXh0ZW5zaW9uRnJvbU1pbWVUeXBlKG1pbWVUeXBlOiBJbWFnZU1pbWVUeXBlKTogc3RyaW5nIHtcclxuICAgIHN3aXRjaCAobWltZVR5cGUpIHtcclxuICAgICAgICBjYXNlIEltYWdlTWltZVR5cGUuSlBFRzpcclxuICAgICAgICAgICAgcmV0dXJuIFwiLmpwZ1wiO1xyXG4gICAgICAgIGNhc2UgSW1hZ2VNaW1lVHlwZS5QTkc6XHJcbiAgICAgICAgICAgIHJldHVybiBcIi5wbmdcIjtcclxuICAgICAgICBjYXNlIEltYWdlTWltZVR5cGUuV0VCUDpcclxuICAgICAgICAgICAgcmV0dXJuIFwiLndlYnBcIjtcclxuICAgICAgICBjYXNlIEltYWdlTWltZVR5cGUuQVZJRjpcclxuICAgICAgICAgICAgcmV0dXJuIFwiLmF2aWZcIjtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENvbXB1dGVzIHRoZSBtZXRhbGxpYyBmYWN0b3IgZnJvbSBzcGVjdWxhciBnbG9zc2luZXNzIHZhbHVlcy5cclxuICogQHBhcmFtIGRpZmZ1c2UgZGlmZnVzZWQgdmFsdWVcclxuICogQHBhcmFtIHNwZWN1bGFyIHNwZWN1bGFyIHZhbHVlXHJcbiAqIEBwYXJhbSBvbmVNaW51c1NwZWN1bGFyU3RyZW5ndGggb25lIG1pbnVzIHRoZSBzcGVjdWxhciBzdHJlbmd0aFxyXG4gKiBAcmV0dXJucyBtZXRhbGxpYyB2YWx1ZVxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfU29sdmVNZXRhbGxpYyhkaWZmdXNlOiBudW1iZXIsIHNwZWN1bGFyOiBudW1iZXIsIG9uZU1pbnVzU3BlY3VsYXJTdHJlbmd0aDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGlmIChzcGVjdWxhciA8IGRpZWxlY3RyaWNTcGVjdWxhci5yKSB7XHJcbiAgICAgICAgZGllbGVjdHJpY1NwZWN1bGFyO1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGEgPSBkaWVsZWN0cmljU3BlY3VsYXIucjtcclxuICAgIGNvbnN0IGIgPSAoZGlmZnVzZSAqIG9uZU1pbnVzU3BlY3VsYXJTdHJlbmd0aCkgLyAoMS4wIC0gZGllbGVjdHJpY1NwZWN1bGFyLnIpICsgc3BlY3VsYXIgLSAyLjAgKiBkaWVsZWN0cmljU3BlY3VsYXIucjtcclxuICAgIGNvbnN0IGMgPSBkaWVsZWN0cmljU3BlY3VsYXIuciAtIHNwZWN1bGFyO1xyXG4gICAgY29uc3QgZCA9IGIgKiBiIC0gNC4wICogYSAqIGM7XHJcbiAgICByZXR1cm4gU2NhbGFyLkNsYW1wKCgtYiArIE1hdGguc3FydChkKSkgLyAoMi4wICogYSksIDAsIDEpO1xyXG59XHJcblxyXG4vKipcclxuICogQ29tcHV0ZXMgdGhlIG1ldGFsbGljL3JvdWdobmVzcyBmYWN0b3JzIGZyb20gYSBTdGFuZGFyZCBNYXRlcmlhbC5cclxuICogQGludGVybmFsXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX0NvbnZlcnRUb0dMVEZQQlJNZXRhbGxpY1JvdWdobmVzcyhiYWJ5bG9uU3RhbmRhcmRNYXRlcmlhbDogU3RhbmRhcmRNYXRlcmlhbCk6IElNYXRlcmlhbFBick1ldGFsbGljUm91Z2huZXNzIHtcclxuICAgIGNvbnN0IGRpZmZ1c2UgPSBiYWJ5bG9uU3RhbmRhcmRNYXRlcmlhbC5kaWZmdXNlQ29sb3IudG9MaW5lYXJTcGFjZShiYWJ5bG9uU3RhbmRhcmRNYXRlcmlhbC5nZXRTY2VuZSgpLmdldEVuZ2luZSgpLnVzZUV4YWN0U3JnYkNvbnZlcnNpb25zKS5zY2FsZSgwLjUpO1xyXG4gICAgY29uc3Qgb3BhY2l0eSA9IGJhYnlsb25TdGFuZGFyZE1hdGVyaWFsLmFscGhhO1xyXG4gICAgY29uc3Qgc3BlY3VsYXJQb3dlciA9IFNjYWxhci5DbGFtcChiYWJ5bG9uU3RhbmRhcmRNYXRlcmlhbC5zcGVjdWxhclBvd2VyLCAwLCBtYXhTcGVjdWxhclBvd2VyKTtcclxuXHJcbiAgICBjb25zdCByb3VnaG5lc3MgPSBTcGVjdWxhclBvd2VyVG9Sb3VnaG5lc3Moc3BlY3VsYXJQb3dlcik7XHJcblxyXG4gICAgY29uc3QgZ2xURlBick1ldGFsbGljUm91Z2huZXNzOiBJTWF0ZXJpYWxQYnJNZXRhbGxpY1JvdWdobmVzcyA9IHtcclxuICAgICAgICBiYXNlQ29sb3JGYWN0b3I6IFtkaWZmdXNlLnIsIGRpZmZ1c2UuZywgZGlmZnVzZS5iLCBvcGFjaXR5XSxcclxuICAgICAgICBtZXRhbGxpY0ZhY3RvcjogMCxcclxuICAgICAgICByb3VnaG5lc3NGYWN0b3I6IHJvdWdobmVzcyxcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIGdsVEZQYnJNZXRhbGxpY1JvdWdobmVzcztcclxufVxyXG5cclxuLyoqXHJcbiAqIFNldHMgdGhlIGdsVEYgYWxwaGEgbW9kZSB0byBhIGdsVEYgbWF0ZXJpYWwgZnJvbSB0aGUgQmFieWxvbiBNYXRlcmlhbFxyXG4gKiBAcGFyYW0gZ2xURk1hdGVyaWFsIGdsVEYgbWF0ZXJpYWxcclxuICogQHBhcmFtIGJhYnlsb25NYXRlcmlhbCBCYWJ5bG9uIG1hdGVyaWFsXHJcbiAqL1xyXG5mdW5jdGlvbiBTZXRBbHBoYU1vZGUoZ2xURk1hdGVyaWFsOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwgJiB7IGFscGhhQ3V0T2ZmPzogbnVtYmVyIH0pOiB2b2lkIHtcclxuICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwubmVlZEFscGhhQmxlbmRpbmcoKSkge1xyXG4gICAgICAgIGdsVEZNYXRlcmlhbC5hbHBoYU1vZGUgPSBNYXRlcmlhbEFscGhhTW9kZS5CTEVORDtcclxuICAgIH0gZWxzZSBpZiAoYmFieWxvbk1hdGVyaWFsLm5lZWRBbHBoYVRlc3RpbmcoKSkge1xyXG4gICAgICAgIGdsVEZNYXRlcmlhbC5hbHBoYU1vZGUgPSBNYXRlcmlhbEFscGhhTW9kZS5NQVNLO1xyXG4gICAgICAgIGdsVEZNYXRlcmlhbC5hbHBoYUN1dG9mZiA9IGJhYnlsb25NYXRlcmlhbC5hbHBoYUN1dE9mZjtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gQ3JlYXRlV2hpdGVUZXh0dXJlKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBzY2VuZTogU2NlbmUpOiBUZXh0dXJlIHtcclxuICAgIGNvbnN0IGRhdGEgPSBuZXcgVWludDhBcnJheSh3aWR0aCAqIGhlaWdodCAqIDQpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkgPSBpICsgNCkge1xyXG4gICAgICAgIGRhdGFbaV0gPSBkYXRhW2kgKyAxXSA9IGRhdGFbaSArIDJdID0gZGF0YVtpICsgM10gPSAweGZmO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJhd1RleHR1cmUgPSBSYXdUZXh0dXJlLkNyZWF0ZVJHQkFUZXh0dXJlKGRhdGEsIHdpZHRoLCBoZWlnaHQsIHNjZW5lKTtcclxuXHJcbiAgICByZXR1cm4gcmF3VGV4dHVyZTtcclxufVxyXG5cclxuZnVuY3Rpb24gQ29udmVydFBpeGVsQXJyYXlUb0Zsb2F0MzIocGl4ZWxzOiBBcnJheUJ1ZmZlclZpZXcpOiBGbG9hdDMyQXJyYXkge1xyXG4gICAgaWYgKHBpeGVscyBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkpIHtcclxuICAgICAgICBjb25zdCBsZW5ndGggPSBwaXhlbHMubGVuZ3RoO1xyXG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IG5ldyBGbG9hdDMyQXJyYXkocGl4ZWxzLmxlbmd0aCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBidWZmZXJbaV0gPSBwaXhlbHNbaV0gLyAyNTU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBidWZmZXI7XHJcbiAgICB9IGVsc2UgaWYgKHBpeGVscyBpbnN0YW5jZW9mIEZsb2F0MzJBcnJheSkge1xyXG4gICAgICAgIHJldHVybiBwaXhlbHM7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuc3VwcG9ydGVkIHBpeGVsIGZvcm1hdCFcIik7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBVdGlsaXR5IG1ldGhvZHMgZm9yIHdvcmtpbmcgd2l0aCBnbFRGIG1hdGVyaWFsIGNvbnZlcnNpb24gcHJvcGVydGllcy5cclxuICogQGludGVybmFsXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgR0xURk1hdGVyaWFsRXhwb3J0ZXIge1xyXG4gICAgLy8gTWFwcGluZyB0byBzdG9yZSB0ZXh0dXJlc1xyXG4gICAgcHJpdmF0ZSBfdGV4dHVyZU1hcCA9IG5ldyBNYXA8QmFzZVRleHR1cmUsIElUZXh0dXJlSW5mbz4oKTtcclxuXHJcbiAgICAvLyBNYXBwaW5nIG9mIGludGVybmFsIHRleHR1cmVzIHRvIGltYWdlcyB0byBhdm9pZCBleHBvcnRpbmcgZHVwbGljYXRlIGltYWdlc1xyXG4gICAgcHJpdmF0ZSBfaW50ZXJuYWxUZXh0dXJlVG9JbWFnZTogeyBbdW5pcXVlSWQ6IG51bWJlcl06IHsgW21pbWVUeXBlOiBzdHJpbmddOiBQcm9taXNlPG51bWJlcj4gfSB9ID0ge307XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBfZXhwb3J0ZXI6IEdMVEZFeHBvcnRlcikge31cclxuXHJcbiAgICBwdWJsaWMgZ2V0VGV4dHVyZUluZm8oYmFieWxvblRleHR1cmU6IE51bGxhYmxlPEJhc2VUZXh0dXJlPik6IE51bGxhYmxlPElUZXh0dXJlSW5mbz4ge1xyXG4gICAgICAgIHJldHVybiBiYWJ5bG9uVGV4dHVyZSA/ICh0aGlzLl90ZXh0dXJlTWFwLmdldChiYWJ5bG9uVGV4dHVyZSkgPz8gbnVsbCkgOiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBleHBvcnRTdGFuZGFyZE1hdGVyaWFsQXN5bmMoYmFieWxvblN0YW5kYXJkTWF0ZXJpYWw6IFN0YW5kYXJkTWF0ZXJpYWwsIG1pbWVUeXBlOiBJbWFnZU1pbWVUeXBlLCBoYXNVVnM6IGJvb2xlYW4pOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gICAgICAgIGNvbnN0IHBick1ldGFsbGljUm91Z2huZXNzID0gX0NvbnZlcnRUb0dMVEZQQlJNZXRhbGxpY1JvdWdobmVzcyhiYWJ5bG9uU3RhbmRhcmRNYXRlcmlhbCk7XHJcblxyXG4gICAgICAgIGNvbnN0IG1hdGVyaWFsOiBJTWF0ZXJpYWwgPSB7IG5hbWU6IGJhYnlsb25TdGFuZGFyZE1hdGVyaWFsLm5hbWUgfTtcclxuICAgICAgICBpZiAoYmFieWxvblN0YW5kYXJkTWF0ZXJpYWwuYmFja0ZhY2VDdWxsaW5nICE9IG51bGwgJiYgIWJhYnlsb25TdGFuZGFyZE1hdGVyaWFsLmJhY2tGYWNlQ3VsbGluZykge1xyXG4gICAgICAgICAgICBpZiAoIWJhYnlsb25TdGFuZGFyZE1hdGVyaWFsLnR3b1NpZGVkTGlnaHRpbmcpIHtcclxuICAgICAgICAgICAgICAgIFRvb2xzLldhcm4oYmFieWxvblN0YW5kYXJkTWF0ZXJpYWwubmFtZSArIFwiOiBCYWNrLWZhY2UgY3VsbGluZyBkaXNhYmxlZCBhbmQgdHdvLXNpZGVkIGxpZ2h0aW5nIGRpc2FibGVkIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZ2xURi5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbWF0ZXJpYWwuZG91YmxlU2lkZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGhhc1VWcykge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9taXNlczogUHJvbWlzZTx2b2lkPltdID0gW107XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkaWZmdXNlVGV4dHVyZSA9IGJhYnlsb25TdGFuZGFyZE1hdGVyaWFsLmRpZmZ1c2VUZXh0dXJlO1xyXG4gICAgICAgICAgICBpZiAoZGlmZnVzZVRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leHBvcnRUZXh0dXJlQXN5bmMoZGlmZnVzZVRleHR1cmUsIG1pbWVUeXBlKS50aGVuKCh0ZXh0dXJlSW5mbykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGV4dHVyZUluZm8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBick1ldGFsbGljUm91Z2huZXNzLmJhc2VDb2xvclRleHR1cmUgPSB0ZXh0dXJlSW5mbztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBidW1wVGV4dHVyZSA9IGJhYnlsb25TdGFuZGFyZE1hdGVyaWFsLmJ1bXBUZXh0dXJlO1xyXG4gICAgICAgICAgICBpZiAoYnVtcFRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leHBvcnRUZXh0dXJlQXN5bmMoYnVtcFRleHR1cmUsIG1pbWVUeXBlKS50aGVuKCh0ZXh0dXJlSW5mbykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGV4dHVyZUluZm8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsLm5vcm1hbFRleHR1cmUgPSB0ZXh0dXJlSW5mbztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChidW1wVGV4dHVyZS5sZXZlbCAhPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsLm5vcm1hbFRleHR1cmUuc2NhbGUgPSBidW1wVGV4dHVyZS5sZXZlbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBlbWlzc2l2ZVRleHR1cmUgPSBiYWJ5bG9uU3RhbmRhcmRNYXRlcmlhbC5lbWlzc2l2ZVRleHR1cmU7XHJcbiAgICAgICAgICAgIGlmIChlbWlzc2l2ZVRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgIG1hdGVyaWFsLmVtaXNzaXZlRmFjdG9yID0gWzEuMCwgMS4wLCAxLjBdO1xyXG5cclxuICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leHBvcnRUZXh0dXJlQXN5bmMoZW1pc3NpdmVUZXh0dXJlLCBtaW1lVHlwZSkudGhlbigodGV4dHVyZUluZm8pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRleHR1cmVJbmZvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRlcmlhbC5lbWlzc2l2ZVRleHR1cmUgPSB0ZXh0dXJlSW5mbztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBhbWJpZW50VGV4dHVyZSA9IGJhYnlsb25TdGFuZGFyZE1hdGVyaWFsLmFtYmllbnRUZXh0dXJlO1xyXG4gICAgICAgICAgICBpZiAoYW1iaWVudFRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leHBvcnRUZXh0dXJlQXN5bmMoYW1iaWVudFRleHR1cmUsIG1pbWVUeXBlKS50aGVuKCh0ZXh0dXJlSW5mbykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGV4dHVyZUluZm8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9jY2x1c2lvblRleHR1cmU6IElNYXRlcmlhbE9jY2x1c2lvblRleHR1cmVJbmZvID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4OiB0ZXh0dXJlSW5mby5pbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRlcmlhbC5vY2NsdXNpb25UZXh0dXJlID0gb2NjbHVzaW9uVGV4dHVyZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAocHJvbWlzZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZXhwb3J0ZXIuX21hdGVyaWFsTmVlZHNVVnNTZXQuYWRkKGJhYnlsb25TdGFuZGFyZE1hdGVyaWFsKTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGJhYnlsb25TdGFuZGFyZE1hdGVyaWFsLmFscGhhIDwgMS4wIHx8IGJhYnlsb25TdGFuZGFyZE1hdGVyaWFsLm9wYWNpdHlUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgIGlmIChiYWJ5bG9uU3RhbmRhcmRNYXRlcmlhbC5hbHBoYU1vZGUgPT09IENvbnN0YW50cy5BTFBIQV9DT01CSU5FKSB7XHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbC5hbHBoYU1vZGUgPSBNYXRlcmlhbEFscGhhTW9kZS5CTEVORDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIFRvb2xzLldhcm4oYmFieWxvblN0YW5kYXJkTWF0ZXJpYWwubmFtZSArIFwiOiBnbFRGIDIuMCBkb2VzIG5vdCBzdXBwb3J0IGFscGhhIG1vZGU6IFwiICsgYmFieWxvblN0YW5kYXJkTWF0ZXJpYWwuYWxwaGFNb2RlLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYmFieWxvblN0YW5kYXJkTWF0ZXJpYWwuZW1pc3NpdmVDb2xvciAmJiAhYmFieWxvblN0YW5kYXJkTWF0ZXJpYWwuZW1pc3NpdmVDb2xvci5lcXVhbHNXaXRoRXBzaWxvbihibGFjaywgZXBzaWxvbikpIHtcclxuICAgICAgICAgICAgbWF0ZXJpYWwuZW1pc3NpdmVGYWN0b3IgPSBiYWJ5bG9uU3RhbmRhcmRNYXRlcmlhbC5lbWlzc2l2ZUNvbG9yLmFzQXJyYXkoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1hdGVyaWFsLnBick1ldGFsbGljUm91Z2huZXNzID0gcGJyTWV0YWxsaWNSb3VnaG5lc3M7XHJcbiAgICAgICAgU2V0QWxwaGFNb2RlKG1hdGVyaWFsLCBiYWJ5bG9uU3RhbmRhcmRNYXRlcmlhbCk7XHJcblxyXG4gICAgICAgIGF3YWl0IHRoaXMuX2ZpbmlzaE1hdGVyaWFsQXN5bmMobWF0ZXJpYWwsIGJhYnlsb25TdGFuZGFyZE1hdGVyaWFsLCBtaW1lVHlwZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IG1hdGVyaWFscyA9IHRoaXMuX2V4cG9ydGVyLl9tYXRlcmlhbHM7XHJcbiAgICAgICAgbWF0ZXJpYWxzLnB1c2gobWF0ZXJpYWwpO1xyXG4gICAgICAgIHJldHVybiBtYXRlcmlhbHMubGVuZ3RoIC0gMTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIF9maW5pc2hNYXRlcmlhbEFzeW5jKGdsVEZNYXRlcmlhbDogSU1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsLCBtaW1lVHlwZTogSW1hZ2VNaW1lVHlwZSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGNvbnN0IHRleHR1cmVzID0gdGhpcy5fZXhwb3J0ZXIuX2V4dGVuc2lvbnNQb3N0RXhwb3J0TWF0ZXJpYWxBZGRpdGlvbmFsVGV4dHVyZXMoXCJleHBvcnRNYXRlcmlhbFwiLCBnbFRGTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHByb21pc2VzOiBBcnJheTxQcm9taXNlPE51bGxhYmxlPElUZXh0dXJlSW5mbz4+PiA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IHRleHR1cmUgb2YgdGV4dHVyZXMpIHtcclxuICAgICAgICAgICAgcHJvbWlzZXMucHVzaCh0aGlzLmV4cG9ydFRleHR1cmVBc3luYyh0ZXh0dXJlLCBtaW1lVHlwZSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG5cclxuICAgICAgICBhd2FpdCB0aGlzLl9leHBvcnRlci5fZXh0ZW5zaW9uc1Bvc3RFeHBvcnRNYXRlcmlhbEFzeW5jKFwiZXhwb3J0TWF0ZXJpYWxcIiwgZ2xURk1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgX2dldEltYWdlRGF0YUFzeW5jKGJ1ZmZlcjogVWludDhBcnJheSB8IEZsb2F0MzJBcnJheSwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIG1pbWVUeXBlOiBJbWFnZU1pbWVUeXBlKTogUHJvbWlzZTxBcnJheUJ1ZmZlcj4ge1xyXG4gICAgICAgIGNvbnN0IHRleHR1cmVUeXBlID0gQ29uc3RhbnRzLlRFWFRVUkVUWVBFX1VOU0lHTkVEX0JZVEU7XHJcblxyXG4gICAgICAgIGNvbnN0IGhvc3RpbmdTY2VuZSA9IHRoaXMuX2V4cG9ydGVyLl9iYWJ5bG9uU2NlbmU7XHJcbiAgICAgICAgY29uc3QgZW5naW5lID0gaG9zdGluZ1NjZW5lLmdldEVuZ2luZSgpO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgYSB0ZW1wb3JhcnkgdGV4dHVyZSB3aXRoIHRoZSB0ZXh0dXJlIGJ1ZmZlciBkYXRhXHJcbiAgICAgICAgY29uc3QgdGVtcFRleHR1cmUgPSBlbmdpbmUuY3JlYXRlUmF3VGV4dHVyZShidWZmZXIsIHdpZHRoLCBoZWlnaHQsIENvbnN0YW50cy5URVhUVVJFRk9STUFUX1JHQkEsIGZhbHNlLCB0cnVlLCBUZXh0dXJlLk5FQVJFU1RfU0FNUExJTkdNT0RFLCBudWxsLCB0ZXh0dXJlVHlwZSk7XHJcblxyXG4gICAgICAgIGVuZ2luZS5pc1dlYkdQVSA/IGF3YWl0IGltcG9ydChcImNvcmUvU2hhZGVyc1dHU0wvcGFzcy5mcmFnbWVudFwiKSA6IGF3YWl0IGltcG9ydChcImNvcmUvU2hhZGVycy9wYXNzLmZyYWdtZW50XCIpO1xyXG4gICAgICAgIGF3YWl0IFRleHR1cmVUb29scy5BcHBseVBvc3RQcm9jZXNzKFwicGFzc1wiLCB0ZW1wVGV4dHVyZSwgaG9zdGluZ1NjZW5lLCB0ZXh0dXJlVHlwZSwgQ29uc3RhbnRzLlRFWFRVUkVfTkVBUkVTVF9TQU1QTElOR01PREUsIENvbnN0YW50cy5URVhUVVJFRk9STUFUX1JHQkEpO1xyXG5cclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZW5naW5lLl9yZWFkVGV4dHVyZVBpeGVscyh0ZW1wVGV4dHVyZSwgd2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgICAgIHJldHVybiAoYXdhaXQgRHVtcFRvb2xzLkR1bXBEYXRhQXN5bmMod2lkdGgsIGhlaWdodCwgZGF0YSwgbWltZVR5cGUsIHVuZGVmaW5lZCwgdHJ1ZSwgdHJ1ZSkpIGFzIEFycmF5QnVmZmVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVzaXplcyB0aGUgdHdvIHNvdXJjZSB0ZXh0dXJlcyB0byB0aGUgc2FtZSBkaW1lbnNpb25zLiAgSWYgYSB0ZXh0dXJlIGlzIG51bGwsIGEgZGVmYXVsdCB3aGl0ZSB0ZXh0dXJlIGlzIGdlbmVyYXRlZC4gIElmIGJvdGggdGV4dHVyZXMgYXJlIG51bGwsIHJldHVybnMgbnVsbFxyXG4gICAgICogQHBhcmFtIHRleHR1cmUxIGZpcnN0IHRleHR1cmUgdG8gcmVzaXplXHJcbiAgICAgKiBAcGFyYW0gdGV4dHVyZTIgc2Vjb25kIHRleHR1cmUgdG8gcmVzaXplXHJcbiAgICAgKiBAcGFyYW0gc2NlbmUgYmFieWxvbmpzIHNjZW5lXHJcbiAgICAgKiBAcmV0dXJucyByZXNpemVkIHRleHR1cmVzIG9yIG51bGxcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfcmVzaXplVGV4dHVyZXNUb1NhbWVEaW1lbnNpb25zKHRleHR1cmUxOiBOdWxsYWJsZTxCYXNlVGV4dHVyZT4sIHRleHR1cmUyOiBOdWxsYWJsZTxCYXNlVGV4dHVyZT4sIHNjZW5lOiBTY2VuZSk6IHsgdGV4dHVyZTE6IEJhc2VUZXh0dXJlOyB0ZXh0dXJlMjogQmFzZVRleHR1cmUgfSB7XHJcbiAgICAgICAgY29uc3QgdGV4dHVyZTFTaXplID0gdGV4dHVyZTEgPyB0ZXh0dXJlMS5nZXRTaXplKCkgOiB7IHdpZHRoOiAwLCBoZWlnaHQ6IDAgfTtcclxuICAgICAgICBjb25zdCB0ZXh0dXJlMlNpemUgPSB0ZXh0dXJlMiA/IHRleHR1cmUyLmdldFNpemUoKSA6IHsgd2lkdGg6IDAsIGhlaWdodDogMCB9O1xyXG4gICAgICAgIGxldCByZXNpemVkVGV4dHVyZTE6IEJhc2VUZXh0dXJlO1xyXG4gICAgICAgIGxldCByZXNpemVkVGV4dHVyZTI6IEJhc2VUZXh0dXJlO1xyXG5cclxuICAgICAgICBpZiAodGV4dHVyZTFTaXplLndpZHRoIDwgdGV4dHVyZTJTaXplLndpZHRoKSB7XHJcbiAgICAgICAgICAgIGlmICh0ZXh0dXJlMSAmJiB0ZXh0dXJlMSBpbnN0YW5jZW9mIFRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgIHJlc2l6ZWRUZXh0dXJlMSA9IFRleHR1cmVUb29scy5DcmVhdGVSZXNpemVkQ29weSh0ZXh0dXJlMSwgdGV4dHVyZTJTaXplLndpZHRoLCB0ZXh0dXJlMlNpemUuaGVpZ2h0LCB0cnVlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlc2l6ZWRUZXh0dXJlMSA9IENyZWF0ZVdoaXRlVGV4dHVyZSh0ZXh0dXJlMlNpemUud2lkdGgsIHRleHR1cmUyU2l6ZS5oZWlnaHQsIHNjZW5lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXNpemVkVGV4dHVyZTIgPSB0ZXh0dXJlMiE7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0ZXh0dXJlMVNpemUud2lkdGggPiB0ZXh0dXJlMlNpemUud2lkdGgpIHtcclxuICAgICAgICAgICAgaWYgKHRleHR1cmUyICYmIHRleHR1cmUyIGluc3RhbmNlb2YgVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgcmVzaXplZFRleHR1cmUyID0gVGV4dHVyZVRvb2xzLkNyZWF0ZVJlc2l6ZWRDb3B5KHRleHR1cmUyLCB0ZXh0dXJlMVNpemUud2lkdGgsIHRleHR1cmUxU2l6ZS5oZWlnaHQsIHRydWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVzaXplZFRleHR1cmUyID0gQ3JlYXRlV2hpdGVUZXh0dXJlKHRleHR1cmUxU2l6ZS53aWR0aCwgdGV4dHVyZTFTaXplLmhlaWdodCwgc2NlbmUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc2l6ZWRUZXh0dXJlMSA9IHRleHR1cmUxITtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXNpemVkVGV4dHVyZTEgPSB0ZXh0dXJlMSE7XHJcbiAgICAgICAgICAgIHJlc2l6ZWRUZXh0dXJlMiA9IHRleHR1cmUyITtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHRleHR1cmUxOiByZXNpemVkVGV4dHVyZTEhLFxyXG4gICAgICAgICAgICB0ZXh0dXJlMjogcmVzaXplZFRleHR1cmUyISxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCBTcGVjdWxhciBHbG9zc2luZXNzIFRleHR1cmVzIHRvIE1ldGFsbGljIFJvdWdobmVzc1xyXG4gICAgICogU2VlIGxpbmsgYmVsb3cgZm9yIGluZm8gb24gdGhlIG1hdGVyaWFsIGNvbnZlcnNpb25zIGZyb20gUEJSIE1ldGFsbGljL1JvdWdobmVzcyBhbmQgU3BlY3VsYXIvR2xvc3NpbmVzc1xyXG4gICAgICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi9tYWluL2V4dGVuc2lvbnMvMi4wL0FyY2hpdmVkL0tIUl9tYXRlcmlhbHNfcGJyU3BlY3VsYXJHbG9zc2luZXNzL2V4YW1wbGVzL2NvbnZlcnQtYmV0d2Vlbi13b3JrZmxvd3MtYmpzL2pzL2JhYnlsb24ucGJyVXRpbGl0aWVzLmpzXHJcbiAgICAgKiBAcGFyYW0gZGlmZnVzZVRleHR1cmUgdGV4dHVyZSB1c2VkIHRvIHN0b3JlIGRpZmZ1c2UgaW5mb3JtYXRpb25cclxuICAgICAqIEBwYXJhbSBzcGVjdWxhckdsb3NzaW5lc3NUZXh0dXJlIHRleHR1cmUgdXNlZCB0byBzdG9yZSBzcGVjdWxhciBhbmQgZ2xvc3NpbmVzcyBpbmZvcm1hdGlvblxyXG4gICAgICogQHBhcmFtIGZhY3RvcnMgc3BlY3VsYXIgZ2xvc3NpbmVzcyBtYXRlcmlhbCBmYWN0b3JzXHJcbiAgICAgKiBAcGFyYW0gbWltZVR5cGUgdGhlIG1pbWUgdHlwZSB0byB1c2UgZm9yIHRoZSB0ZXh0dXJlXHJcbiAgICAgKiBAcmV0dXJucyBwYnIgbWV0YWxsaWMgcm91Z2huZXNzIGludGVyZmFjZSBvciBudWxsXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgYXN5bmMgX2NvbnZlcnRTcGVjdWxhckdsb3NzaW5lc3NUZXh0dXJlc1RvTWV0YWxsaWNSb3VnaG5lc3NBc3luYyhcclxuICAgICAgICBkaWZmdXNlVGV4dHVyZTogTnVsbGFibGU8QmFzZVRleHR1cmU+LFxyXG4gICAgICAgIHNwZWN1bGFyR2xvc3NpbmVzc1RleHR1cmU6IE51bGxhYmxlPEJhc2VUZXh0dXJlPixcclxuICAgICAgICBmYWN0b3JzOiBJUEJSU3BlY3VsYXJHbG9zc2luZXNzLFxyXG4gICAgICAgIG1pbWVUeXBlOiBJbWFnZU1pbWVUeXBlXHJcbiAgICApOiBQcm9taXNlPElQQlJNZXRhbGxpY1JvdWdobmVzcz4ge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gbmV3IEFycmF5PFByb21pc2U8dm9pZD4+KCk7XHJcbiAgICAgICAgaWYgKCEoZGlmZnVzZVRleHR1cmUgfHwgc3BlY3VsYXJHbG9zc2luZXNzVGV4dHVyZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFwiZGlmZnVzZSBhbmQgc3BlY3VsYXIgZ2xvc3NpbmVzcyB0ZXh0dXJlcyBhcmUgbm90IGRlZmluZWQhXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc2NlbmU6IE51bGxhYmxlPFNjZW5lPiA9IGRpZmZ1c2VUZXh0dXJlID8gZGlmZnVzZVRleHR1cmUuZ2V0U2NlbmUoKSA6IHNwZWN1bGFyR2xvc3NpbmVzc1RleHR1cmUgPyBzcGVjdWxhckdsb3NzaW5lc3NUZXh0dXJlLmdldFNjZW5lKCkgOiBudWxsO1xyXG4gICAgICAgIGlmIChzY2VuZSkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNpemVkVGV4dHVyZXMgPSB0aGlzLl9yZXNpemVUZXh0dXJlc1RvU2FtZURpbWVuc2lvbnMoZGlmZnVzZVRleHR1cmUsIHNwZWN1bGFyR2xvc3NpbmVzc1RleHR1cmUsIHNjZW5lKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRpZmZ1c2VTaXplID0gcmVzaXplZFRleHR1cmVzLnRleHR1cmUxPy5nZXRTaXplKCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgZGlmZnVzZUJ1ZmZlcjogRmxvYXQzMkFycmF5O1xyXG4gICAgICAgICAgICBsZXQgc3BlY3VsYXJHbG9zc2luZXNzQnVmZmVyOiBGbG9hdDMyQXJyYXk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IGRpZmZ1c2VTaXplLndpZHRoO1xyXG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSBkaWZmdXNlU2l6ZS5oZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkaWZmdXNlUGl4ZWxzID0gYXdhaXQgcmVzaXplZFRleHR1cmVzLnRleHR1cmUxLnJlYWRQaXhlbHMoKTtcclxuICAgICAgICAgICAgY29uc3Qgc3BlY3VsYXJQaXhlbHMgPSBhd2FpdCByZXNpemVkVGV4dHVyZXMudGV4dHVyZTIucmVhZFBpeGVscygpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRpZmZ1c2VQaXhlbHMpIHtcclxuICAgICAgICAgICAgICAgIGRpZmZ1c2VCdWZmZXIgPSBDb252ZXJ0UGl4ZWxBcnJheVRvRmxvYXQzMihkaWZmdXNlUGl4ZWxzKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcIkZhaWxlZCB0byByZXRyaWV2ZSBwaXhlbHMgZnJvbSBkaWZmdXNlIHRleHR1cmUhXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzcGVjdWxhclBpeGVscykge1xyXG4gICAgICAgICAgICAgICAgc3BlY3VsYXJHbG9zc2luZXNzQnVmZmVyID0gQ29udmVydFBpeGVsQXJyYXlUb0Zsb2F0MzIoc3BlY3VsYXJQaXhlbHMpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFwiRmFpbGVkIHRvIHJldHJpZXZlIHBpeGVscyBmcm9tIHNwZWN1bGFyIGdsb3NzaW5lc3MgdGV4dHVyZSFcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGJ5dGVMZW5ndGggPSBzcGVjdWxhckdsb3NzaW5lc3NCdWZmZXIuYnl0ZUxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG1ldGFsbGljUm91Z2huZXNzQnVmZmVyID0gbmV3IFVpbnQ4QXJyYXkoYnl0ZUxlbmd0aCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGJhc2VDb2xvckJ1ZmZlciA9IG5ldyBVaW50OEFycmF5KGJ5dGVMZW5ndGgpO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc3RyaWRlU2l6ZSA9IDQ7XHJcbiAgICAgICAgICAgIGNvbnN0IG1heEJhc2VDb2xvciA9IGJsYWNrO1xyXG4gICAgICAgICAgICBsZXQgbWF4TWV0YWxsaWMgPSAwO1xyXG4gICAgICAgICAgICBsZXQgbWF4Um91Z2huZXNzID0gMDtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGggPSAwOyBoIDwgaGVpZ2h0OyArK2gpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHcgPSAwOyB3IDwgd2lkdGg7ICsrdykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9mZnNldCA9ICh3aWR0aCAqIGggKyB3KSAqIHN0cmlkZVNpemU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpZmZ1c2VDb2xvciA9IG5ldyBDb2xvcjMoZGlmZnVzZUJ1ZmZlcltvZmZzZXRdLCBkaWZmdXNlQnVmZmVyW29mZnNldCArIDFdLCBkaWZmdXNlQnVmZmVyW29mZnNldCArIDJdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudG9MaW5lYXJTcGFjZShzY2VuZS5nZXRFbmdpbmUoKS51c2VFeGFjdFNyZ2JDb252ZXJzaW9ucylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm11bHRpcGx5KGZhY3RvcnMuZGlmZnVzZUNvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzcGVjdWxhckNvbG9yID0gbmV3IENvbG9yMyhzcGVjdWxhckdsb3NzaW5lc3NCdWZmZXJbb2Zmc2V0XSwgc3BlY3VsYXJHbG9zc2luZXNzQnVmZmVyW29mZnNldCArIDFdLCBzcGVjdWxhckdsb3NzaW5lc3NCdWZmZXJbb2Zmc2V0ICsgMl0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50b0xpbmVhclNwYWNlKHNjZW5lLmdldEVuZ2luZSgpLnVzZUV4YWN0U3JnYkNvbnZlcnNpb25zKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAubXVsdGlwbHkoZmFjdG9ycy5zcGVjdWxhckNvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBnbG9zc2luZXNzID0gc3BlY3VsYXJHbG9zc2luZXNzQnVmZmVyW29mZnNldCArIDNdICogZmFjdG9ycy5nbG9zc2luZXNzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzcGVjdWxhckdsb3NzaW5lc3M6IElQQlJTcGVjdWxhckdsb3NzaW5lc3MgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpZmZ1c2VDb2xvcjogZGlmZnVzZUNvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGVjdWxhckNvbG9yOiBzcGVjdWxhckNvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnbG9zc2luZXNzOiBnbG9zc2luZXNzLFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1ldGFsbGljUm91Z2huZXNzID0gdGhpcy5fY29udmVydFNwZWN1bGFyR2xvc3NpbmVzc1RvTWV0YWxsaWNSb3VnaG5lc3Moc3BlY3VsYXJHbG9zc2luZXNzKTtcclxuICAgICAgICAgICAgICAgICAgICBtYXhCYXNlQ29sb3IuciA9IE1hdGgubWF4KG1heEJhc2VDb2xvci5yLCBtZXRhbGxpY1JvdWdobmVzcy5iYXNlQ29sb3Iucik7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4QmFzZUNvbG9yLmcgPSBNYXRoLm1heChtYXhCYXNlQ29sb3IuZywgbWV0YWxsaWNSb3VnaG5lc3MuYmFzZUNvbG9yLmcpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heEJhc2VDb2xvci5iID0gTWF0aC5tYXgobWF4QmFzZUNvbG9yLmIsIG1ldGFsbGljUm91Z2huZXNzLmJhc2VDb2xvci5iKTtcclxuICAgICAgICAgICAgICAgICAgICBtYXhNZXRhbGxpYyA9IE1hdGgubWF4KG1heE1ldGFsbGljLCBtZXRhbGxpY1JvdWdobmVzcy5tZXRhbGxpYyEpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heFJvdWdobmVzcyA9IE1hdGgubWF4KG1heFJvdWdobmVzcywgbWV0YWxsaWNSb3VnaG5lc3Mucm91Z2huZXNzISk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJhc2VDb2xvckJ1ZmZlcltvZmZzZXRdID0gbWV0YWxsaWNSb3VnaG5lc3MuYmFzZUNvbG9yLnIgKiAyNTU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZUNvbG9yQnVmZmVyW29mZnNldCArIDFdID0gbWV0YWxsaWNSb3VnaG5lc3MuYmFzZUNvbG9yLmcgKiAyNTU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZUNvbG9yQnVmZmVyW29mZnNldCArIDJdID0gbWV0YWxsaWNSb3VnaG5lc3MuYmFzZUNvbG9yLmIgKiAyNTU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZUNvbG9yQnVmZmVyW29mZnNldCArIDNdID0gcmVzaXplZFRleHR1cmVzLnRleHR1cmUxLmhhc0FscGhhID8gZGlmZnVzZUJ1ZmZlcltvZmZzZXQgKyAzXSAqIDI1NSA6IDI1NTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbWV0YWxsaWNSb3VnaG5lc3NCdWZmZXJbb2Zmc2V0XSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0YWxsaWNSb3VnaG5lc3NCdWZmZXJbb2Zmc2V0ICsgMV0gPSBtZXRhbGxpY1JvdWdobmVzcy5yb3VnaG5lc3MhICogMjU1O1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGFsbGljUm91Z2huZXNzQnVmZmVyW29mZnNldCArIDJdID0gbWV0YWxsaWNSb3VnaG5lc3MubWV0YWxsaWMhICogMjU1O1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGFsbGljUm91Z2huZXNzQnVmZmVyW29mZnNldCArIDNdID0gMjU1O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBSZXRyaWV2ZXMgdGhlIG1ldGFsbGljIHJvdWdobmVzcyBmYWN0b3JzIGZyb20gdGhlIG1heGltdW0gdGV4dHVyZSB2YWx1ZXMuXHJcbiAgICAgICAgICAgIGNvbnN0IG1ldGFsbGljUm91Z2huZXNzRmFjdG9yczogSVBCUk1ldGFsbGljUm91Z2huZXNzID0ge1xyXG4gICAgICAgICAgICAgICAgYmFzZUNvbG9yOiBtYXhCYXNlQ29sb3IsXHJcbiAgICAgICAgICAgICAgICBtZXRhbGxpYzogbWF4TWV0YWxsaWMsXHJcbiAgICAgICAgICAgICAgICByb3VnaG5lc3M6IG1heFJvdWdobmVzcyxcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGxldCB3cml0ZU91dE1ldGFsbGljUm91Z2huZXNzVGV4dHVyZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBsZXQgd3JpdGVPdXRCYXNlQ29sb3JUZXh0dXJlID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBoID0gMDsgaCA8IGhlaWdodDsgKytoKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB3ID0gMDsgdyA8IHdpZHRoOyArK3cpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXN0aW5hdGlvbk9mZnNldCA9ICh3aWR0aCAqIGggKyB3KSAqIHN0cmlkZVNpemU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJhc2VDb2xvckJ1ZmZlcltkZXN0aW5hdGlvbk9mZnNldF0gLz0gbWV0YWxsaWNSb3VnaG5lc3NGYWN0b3JzLmJhc2VDb2xvci5yID4gZXBzaWxvbiA/IG1ldGFsbGljUm91Z2huZXNzRmFjdG9ycy5iYXNlQ29sb3IuciA6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZUNvbG9yQnVmZmVyW2Rlc3RpbmF0aW9uT2Zmc2V0ICsgMV0gLz0gbWV0YWxsaWNSb3VnaG5lc3NGYWN0b3JzLmJhc2VDb2xvci5nID4gZXBzaWxvbiA/IG1ldGFsbGljUm91Z2huZXNzRmFjdG9ycy5iYXNlQ29sb3IuZyA6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZUNvbG9yQnVmZmVyW2Rlc3RpbmF0aW9uT2Zmc2V0ICsgMl0gLz0gbWV0YWxsaWNSb3VnaG5lc3NGYWN0b3JzLmJhc2VDb2xvci5iID4gZXBzaWxvbiA/IG1ldGFsbGljUm91Z2huZXNzRmFjdG9ycy5iYXNlQ29sb3IuYiA6IDE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVhckJhc2VDb2xvclBpeGVsID0gQ29sb3IzLkZyb21JbnRzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlQ29sb3JCdWZmZXJbZGVzdGluYXRpb25PZmZzZXRdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlQ29sb3JCdWZmZXJbZGVzdGluYXRpb25PZmZzZXQgKyAxXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZUNvbG9yQnVmZmVyW2Rlc3RpbmF0aW9uT2Zmc2V0ICsgMl1cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNSR0JCYXNlQ29sb3JQaXhlbCA9IGxpbmVhckJhc2VDb2xvclBpeGVsLnRvR2FtbWFTcGFjZShzY2VuZS5nZXRFbmdpbmUoKS51c2VFeGFjdFNyZ2JDb252ZXJzaW9ucyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZUNvbG9yQnVmZmVyW2Rlc3RpbmF0aW9uT2Zmc2V0XSA9IHNSR0JCYXNlQ29sb3JQaXhlbC5yICogMjU1O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhc2VDb2xvckJ1ZmZlcltkZXN0aW5hdGlvbk9mZnNldCArIDFdID0gc1JHQkJhc2VDb2xvclBpeGVsLmcgKiAyNTU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZUNvbG9yQnVmZmVyW2Rlc3RpbmF0aW9uT2Zmc2V0ICsgMl0gPSBzUkdCQmFzZUNvbG9yUGl4ZWwuYiAqIDI1NTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzUkdCQmFzZUNvbG9yUGl4ZWwuZXF1YWxzV2l0aEVwc2lsb24od2hpdGUsIGVwc2lsb24pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdyaXRlT3V0QmFzZUNvbG9yVGV4dHVyZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBtZXRhbGxpY1JvdWdobmVzc0J1ZmZlcltkZXN0aW5hdGlvbk9mZnNldCArIDFdIC89IG1ldGFsbGljUm91Z2huZXNzRmFjdG9ycy5yb3VnaG5lc3MhID4gZXBzaWxvbiA/IG1ldGFsbGljUm91Z2huZXNzRmFjdG9ycy5yb3VnaG5lc3MhIDogMTtcclxuICAgICAgICAgICAgICAgICAgICBtZXRhbGxpY1JvdWdobmVzc0J1ZmZlcltkZXN0aW5hdGlvbk9mZnNldCArIDJdIC89IG1ldGFsbGljUm91Z2huZXNzRmFjdG9ycy5tZXRhbGxpYyEgPiBlcHNpbG9uID8gbWV0YWxsaWNSb3VnaG5lc3NGYWN0b3JzLm1ldGFsbGljISA6IDE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1ldGFsbGljUm91Z2huZXNzUGl4ZWwgPSBDb2xvcjMuRnJvbUludHMoMjU1LCBtZXRhbGxpY1JvdWdobmVzc0J1ZmZlcltkZXN0aW5hdGlvbk9mZnNldCArIDFdLCBtZXRhbGxpY1JvdWdobmVzc0J1ZmZlcltkZXN0aW5hdGlvbk9mZnNldCArIDJdKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFtZXRhbGxpY1JvdWdobmVzc1BpeGVsLmVxdWFsc1dpdGhFcHNpbG9uKHdoaXRlLCBlcHNpbG9uKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3cml0ZU91dE1ldGFsbGljUm91Z2huZXNzVGV4dHVyZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAod3JpdGVPdXRNZXRhbGxpY1JvdWdobmVzc1RleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZ2V0SW1hZ2VEYXRhQXN5bmMobWV0YWxsaWNSb3VnaG5lc3NCdWZmZXIsIHdpZHRoLCBoZWlnaHQsIG1pbWVUeXBlKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGFsbGljUm91Z2huZXNzRmFjdG9ycy5tZXRhbGxpY1JvdWdobmVzc1RleHR1cmVEYXRhID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAod3JpdGVPdXRCYXNlQ29sb3JUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2dldEltYWdlRGF0YUFzeW5jKGJhc2VDb2xvckJ1ZmZlciwgd2lkdGgsIGhlaWdodCwgbWltZVR5cGUpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWV0YWxsaWNSb3VnaG5lc3NGYWN0b3JzLmJhc2VDb2xvclRleHR1cmVEYXRhID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBtZXRhbGxpY1JvdWdobmVzc0ZhY3RvcnM7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcIl9Db252ZXJ0U3BlY3VsYXJHbG9zc2luZXNzVGV4dHVyZXNUb01ldGFsbGljUm91Z2huZXNzOiBTY2VuZSBmcm9tIHRleHR1cmVzIGlzIG1pc3NpbmchXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnRzIHNwZWN1bGFyIGdsb3NzaW5lc3MgbWF0ZXJpYWwgcHJvcGVydGllcyB0byBtZXRhbGxpYyByb3VnaG5lc3NcclxuICAgICAqIEBwYXJhbSBzcGVjdWxhckdsb3NzaW5lc3MgaW50ZXJmYWNlIHdpdGggc3BlY3VsYXIgZ2xvc3NpbmVzcyBtYXRlcmlhbCBwcm9wZXJ0aWVzXHJcbiAgICAgKiBAcmV0dXJucyBpbnRlcmZhY2Ugd2l0aCBtZXRhbGxpYyByb3VnaG5lc3MgbWF0ZXJpYWwgcHJvcGVydGllc1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9jb252ZXJ0U3BlY3VsYXJHbG9zc2luZXNzVG9NZXRhbGxpY1JvdWdobmVzcyhzcGVjdWxhckdsb3NzaW5lc3M6IElQQlJTcGVjdWxhckdsb3NzaW5lc3MpOiBJUEJSTWV0YWxsaWNSb3VnaG5lc3Mge1xyXG4gICAgICAgIGNvbnN0IGRpZmZ1c2VQZXJjZWl2ZWRCcmlnaHRuZXNzID0gdGhpcy5fZ2V0UGVyY2VpdmVkQnJpZ2h0bmVzcyhzcGVjdWxhckdsb3NzaW5lc3MuZGlmZnVzZUNvbG9yKTtcclxuICAgICAgICBjb25zdCBzcGVjdWxhclBlcmNlaXZlZEJyaWdodG5lc3MgPSB0aGlzLl9nZXRQZXJjZWl2ZWRCcmlnaHRuZXNzKHNwZWN1bGFyR2xvc3NpbmVzcy5zcGVjdWxhckNvbG9yKTtcclxuICAgICAgICBjb25zdCBvbmVNaW51c1NwZWN1bGFyU3RyZW5ndGggPSAxIC0gdGhpcy5fZ2V0TWF4Q29tcG9uZW50KHNwZWN1bGFyR2xvc3NpbmVzcy5zcGVjdWxhckNvbG9yKTtcclxuICAgICAgICBjb25zdCBtZXRhbGxpYyA9IF9Tb2x2ZU1ldGFsbGljKGRpZmZ1c2VQZXJjZWl2ZWRCcmlnaHRuZXNzLCBzcGVjdWxhclBlcmNlaXZlZEJyaWdodG5lc3MsIG9uZU1pbnVzU3BlY3VsYXJTdHJlbmd0aCk7XHJcbiAgICAgICAgY29uc3QgYmFzZUNvbG9yRnJvbURpZmZ1c2UgPSBzcGVjdWxhckdsb3NzaW5lc3MuZGlmZnVzZUNvbG9yLnNjYWxlKG9uZU1pbnVzU3BlY3VsYXJTdHJlbmd0aCAvICgxLjAgLSBkaWVsZWN0cmljU3BlY3VsYXIucikgLyBNYXRoLm1heCgxIC0gbWV0YWxsaWMpKTtcclxuICAgICAgICBjb25zdCBiYXNlQ29sb3JGcm9tU3BlY3VsYXIgPSBzcGVjdWxhckdsb3NzaW5lc3Muc3BlY3VsYXJDb2xvci5zdWJ0cmFjdChkaWVsZWN0cmljU3BlY3VsYXIuc2NhbGUoMSAtIG1ldGFsbGljKSkuc2NhbGUoMSAvIE1hdGgubWF4KG1ldGFsbGljKSk7XHJcbiAgICAgICAgbGV0IGJhc2VDb2xvciA9IENvbG9yMy5MZXJwKGJhc2VDb2xvckZyb21EaWZmdXNlLCBiYXNlQ29sb3JGcm9tU3BlY3VsYXIsIG1ldGFsbGljICogbWV0YWxsaWMpO1xyXG4gICAgICAgIGJhc2VDb2xvciA9IGJhc2VDb2xvci5jbGFtcFRvUmVmKDAsIDEsIGJhc2VDb2xvcik7XHJcblxyXG4gICAgICAgIGNvbnN0IG1ldGFsbGljUm91Z2huZXNzOiBJUEJSTWV0YWxsaWNSb3VnaG5lc3MgPSB7XHJcbiAgICAgICAgICAgIGJhc2VDb2xvcjogYmFzZUNvbG9yLFxyXG4gICAgICAgICAgICBtZXRhbGxpYzogbWV0YWxsaWMsXHJcbiAgICAgICAgICAgIHJvdWdobmVzczogMSAtIHNwZWN1bGFyR2xvc3NpbmVzcy5nbG9zc2luZXNzLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiBtZXRhbGxpY1JvdWdobmVzcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGN1bGF0ZXMgdGhlIHN1cmZhY2UgcmVmbGVjdGFuY2UsIGluZGVwZW5kZW50IG9mIGxpZ2h0aW5nIGNvbmRpdGlvbnNcclxuICAgICAqIEBwYXJhbSBjb2xvciBDb2xvciBzb3VyY2UgdG8gY2FsY3VsYXRlIGJyaWdodG5lc3MgZnJvbVxyXG4gICAgICogQHJldHVybnMgbnVtYmVyIHJlcHJlc2VudGluZyB0aGUgcGVyY2VpdmVkIGJyaWdodG5lc3MsIG9yIHplcm8gaWYgY29sb3IgaXMgdW5kZWZpbmVkXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX2dldFBlcmNlaXZlZEJyaWdodG5lc3MoY29sb3I6IENvbG9yMyk6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKGNvbG9yKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnNxcnQoMC4yOTkgKiBjb2xvci5yICogY29sb3IuciArIDAuNTg3ICogY29sb3IuZyAqIGNvbG9yLmcgKyAwLjExNCAqIGNvbG9yLmIgKiBjb2xvci5iKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBtYXhpbXVtIGNvbG9yIGNvbXBvbmVudCB2YWx1ZVxyXG4gICAgICogQHBhcmFtIGNvbG9yXHJcbiAgICAgKiBAcmV0dXJucyBtYXhpbXVtIGNvbG9yIGNvbXBvbmVudCB2YWx1ZSwgb3IgemVybyBpZiBjb2xvciBpcyBudWxsIG9yIHVuZGVmaW5lZFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9nZXRNYXhDb21wb25lbnQoY29sb3I6IENvbG9yMyk6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKGNvbG9yKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLm1heChjb2xvci5yLCBNYXRoLm1heChjb2xvci5nLCBjb2xvci5iKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCBhIFBCUk1hdGVyaWFsIChNZXRhbGxpYy9Sb3VnaG5lc3MpIHRvIE1ldGFsbGljIFJvdWdobmVzcyBmYWN0b3JzXHJcbiAgICAgKiBAcGFyYW0gYmFieWxvblBCUk1hdGVyaWFsIEJKUyBQQlIgTWV0YWxsaWMgUm91Z2huZXNzIE1hdGVyaWFsXHJcbiAgICAgKiBAcGFyYW0gbWltZVR5cGUgbWltZSB0eXBlIHRvIHVzZSBmb3IgdGhlIHRleHR1cmVzXHJcbiAgICAgKiBAcGFyYW0gZ2xURlBick1ldGFsbGljUm91Z2huZXNzIGdsVEYgUEJSIE1ldGFsbGljIFJvdWdobmVzcyBpbnRlcmZhY2VcclxuICAgICAqIEBwYXJhbSBoYXNVVnMgc3BlY2lmaWVzIGlmIHRleHR1cmUgY29vcmRpbmF0ZXMgYXJlIHByZXNlbnQgb24gdGhlIHN1Ym1lc2ggdG8gZGV0ZXJtaW5lIGlmIHRleHR1cmVzIHNob3VsZCBiZSBhcHBsaWVkXHJcbiAgICAgKiBAcmV0dXJucyBnbFRGIFBCUiBNZXRhbGxpYyBSb3VnaG5lc3MgZmFjdG9yc1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGFzeW5jIF9jb252ZXJ0TWV0YWxSb3VnaEZhY3RvcnNUb01ldGFsbGljUm91Z2huZXNzQXN5bmMoXHJcbiAgICAgICAgYmFieWxvblBCUk1hdGVyaWFsOiBQQlJCYXNlTWF0ZXJpYWwsXHJcbiAgICAgICAgbWltZVR5cGU6IEltYWdlTWltZVR5cGUsXHJcbiAgICAgICAgZ2xURlBick1ldGFsbGljUm91Z2huZXNzOiBJTWF0ZXJpYWxQYnJNZXRhbGxpY1JvdWdobmVzcyxcclxuICAgICAgICBoYXNVVnM6IGJvb2xlYW5cclxuICAgICk6IFByb21pc2U8SVBCUk1ldGFsbGljUm91Z2huZXNzPiB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZXM6IFByb21pc2U8dm9pZD5bXSA9IFtdO1xyXG5cclxuICAgICAgICBjb25zdCBtZXRhbGxpY1JvdWdobmVzczogSVBCUk1ldGFsbGljUm91Z2huZXNzID0ge1xyXG4gICAgICAgICAgICBiYXNlQ29sb3I6IGJhYnlsb25QQlJNYXRlcmlhbC5fYWxiZWRvQ29sb3IsXHJcbiAgICAgICAgICAgIG1ldGFsbGljOiBiYWJ5bG9uUEJSTWF0ZXJpYWwuX21ldGFsbGljLFxyXG4gICAgICAgICAgICByb3VnaG5lc3M6IGJhYnlsb25QQlJNYXRlcmlhbC5fcm91Z2huZXNzLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmIChoYXNVVnMpIHtcclxuICAgICAgICAgICAgY29uc3QgYWxiZWRvVGV4dHVyZSA9IGJhYnlsb25QQlJNYXRlcmlhbC5fYWxiZWRvVGV4dHVyZTtcclxuICAgICAgICAgICAgaWYgKGFsYmVkb1RleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leHBvcnRUZXh0dXJlQXN5bmMoYmFieWxvblBCUk1hdGVyaWFsLl9hbGJlZG9UZXh0dXJlISwgbWltZVR5cGUpLnRoZW4oKGdsVEZUZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnbFRGVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xURlBick1ldGFsbGljUm91Z2huZXNzLmJhc2VDb2xvclRleHR1cmUgPSBnbFRGVGV4dHVyZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IG1ldGFsbGljVGV4dHVyZSA9IGJhYnlsb25QQlJNYXRlcmlhbC5fbWV0YWxsaWNUZXh0dXJlO1xyXG4gICAgICAgICAgICBpZiAobWV0YWxsaWNUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXhwb3J0VGV4dHVyZUFzeW5jKG1ldGFsbGljVGV4dHVyZSwgbWltZVR5cGUpLnRoZW4oKGdsVEZUZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnbFRGVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xURlBick1ldGFsbGljUm91Z2huZXNzLm1ldGFsbGljUm91Z2huZXNzVGV4dHVyZSA9IGdsVEZUZXh0dXJlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwcm9taXNlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2V4cG9ydGVyLl9tYXRlcmlhbE5lZWRzVVZzU2V0LmFkZChiYWJ5bG9uUEJSTWF0ZXJpYWwpO1xyXG4gICAgICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbWV0YWxsaWNSb3VnaG5lc3M7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZ2V0VGV4dHVyZVNhbXBsZXIodGV4dHVyZTogTnVsbGFibGU8QmFzZVRleHR1cmU+KTogSVNhbXBsZXIge1xyXG4gICAgICAgIGNvbnN0IHNhbXBsZXI6IElTYW1wbGVyID0ge307XHJcbiAgICAgICAgaWYgKCF0ZXh0dXJlIHx8ICEodGV4dHVyZSBpbnN0YW5jZW9mIFRleHR1cmUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzYW1wbGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgd3JhcFMgPSB0aGlzLl9nZXRHTFRGVGV4dHVyZVdyYXBNb2RlKHRleHR1cmUud3JhcFUpO1xyXG4gICAgICAgIGlmICh3cmFwUyAhPT0gVGV4dHVyZVdyYXBNb2RlLlJFUEVBVCkge1xyXG4gICAgICAgICAgICBzYW1wbGVyLndyYXBTID0gd3JhcFM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB3cmFwVCA9IHRoaXMuX2dldEdMVEZUZXh0dXJlV3JhcE1vZGUodGV4dHVyZS53cmFwVik7XHJcbiAgICAgICAgaWYgKHdyYXBUICE9PSBUZXh0dXJlV3JhcE1vZGUuUkVQRUFUKSB7XHJcbiAgICAgICAgICAgIHNhbXBsZXIud3JhcFQgPSB3cmFwVDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN3aXRjaCAodGV4dHVyZS5zYW1wbGluZ01vZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBUZXh0dXJlLkxJTkVBUl9MSU5FQVI6IHtcclxuICAgICAgICAgICAgICAgIHNhbXBsZXIubWFnRmlsdGVyID0gVGV4dHVyZU1hZ0ZpbHRlci5MSU5FQVI7XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVyLm1pbkZpbHRlciA9IFRleHR1cmVNaW5GaWx0ZXIuTElORUFSO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBUZXh0dXJlLkxJTkVBUl9ORUFSRVNUOiB7XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVyLm1hZ0ZpbHRlciA9IFRleHR1cmVNYWdGaWx0ZXIuTElORUFSO1xyXG4gICAgICAgICAgICAgICAgc2FtcGxlci5taW5GaWx0ZXIgPSBUZXh0dXJlTWluRmlsdGVyLk5FQVJFU1Q7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFRleHR1cmUuTkVBUkVTVF9MSU5FQVI6IHtcclxuICAgICAgICAgICAgICAgIHNhbXBsZXIubWFnRmlsdGVyID0gVGV4dHVyZU1hZ0ZpbHRlci5ORUFSRVNUO1xyXG4gICAgICAgICAgICAgICAgc2FtcGxlci5taW5GaWx0ZXIgPSBUZXh0dXJlTWluRmlsdGVyLkxJTkVBUjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgVGV4dHVyZS5ORUFSRVNUX0xJTkVBUl9NSVBMSU5FQVI6IHtcclxuICAgICAgICAgICAgICAgIHNhbXBsZXIubWFnRmlsdGVyID0gVGV4dHVyZU1hZ0ZpbHRlci5ORUFSRVNUO1xyXG4gICAgICAgICAgICAgICAgc2FtcGxlci5taW5GaWx0ZXIgPSBUZXh0dXJlTWluRmlsdGVyLkxJTkVBUl9NSVBNQVBfTElORUFSO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBUZXh0dXJlLk5FQVJFU1RfTkVBUkVTVDoge1xyXG4gICAgICAgICAgICAgICAgc2FtcGxlci5tYWdGaWx0ZXIgPSBUZXh0dXJlTWFnRmlsdGVyLk5FQVJFU1Q7XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVyLm1pbkZpbHRlciA9IFRleHR1cmVNaW5GaWx0ZXIuTkVBUkVTVDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgVGV4dHVyZS5ORUFSRVNUX0xJTkVBUl9NSVBORUFSRVNUOiB7XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVyLm1hZ0ZpbHRlciA9IFRleHR1cmVNYWdGaWx0ZXIuTkVBUkVTVDtcclxuICAgICAgICAgICAgICAgIHNhbXBsZXIubWluRmlsdGVyID0gVGV4dHVyZU1pbkZpbHRlci5MSU5FQVJfTUlQTUFQX05FQVJFU1Q7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFRleHR1cmUuTElORUFSX05FQVJFU1RfTUlQTkVBUkVTVDoge1xyXG4gICAgICAgICAgICAgICAgc2FtcGxlci5tYWdGaWx0ZXIgPSBUZXh0dXJlTWFnRmlsdGVyLkxJTkVBUjtcclxuICAgICAgICAgICAgICAgIHNhbXBsZXIubWluRmlsdGVyID0gVGV4dHVyZU1pbkZpbHRlci5ORUFSRVNUX01JUE1BUF9ORUFSRVNUO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBUZXh0dXJlLkxJTkVBUl9ORUFSRVNUX01JUExJTkVBUjoge1xyXG4gICAgICAgICAgICAgICAgc2FtcGxlci5tYWdGaWx0ZXIgPSBUZXh0dXJlTWFnRmlsdGVyLkxJTkVBUjtcclxuICAgICAgICAgICAgICAgIHNhbXBsZXIubWluRmlsdGVyID0gVGV4dHVyZU1pbkZpbHRlci5ORUFSRVNUX01JUE1BUF9MSU5FQVI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFRleHR1cmUuTkVBUkVTVF9ORUFSRVNUX01JUExJTkVBUjoge1xyXG4gICAgICAgICAgICAgICAgc2FtcGxlci5tYWdGaWx0ZXIgPSBUZXh0dXJlTWFnRmlsdGVyLk5FQVJFU1Q7XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVyLm1pbkZpbHRlciA9IFRleHR1cmVNaW5GaWx0ZXIuTkVBUkVTVF9NSVBNQVBfTElORUFSO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBUZXh0dXJlLkxJTkVBUl9MSU5FQVJfTUlQTElORUFSOiB7XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVyLm1hZ0ZpbHRlciA9IFRleHR1cmVNYWdGaWx0ZXIuTElORUFSO1xyXG4gICAgICAgICAgICAgICAgc2FtcGxlci5taW5GaWx0ZXIgPSBUZXh0dXJlTWluRmlsdGVyLkxJTkVBUl9NSVBNQVBfTElORUFSO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBUZXh0dXJlLkxJTkVBUl9MSU5FQVJfTUlQTkVBUkVTVDoge1xyXG4gICAgICAgICAgICAgICAgc2FtcGxlci5tYWdGaWx0ZXIgPSBUZXh0dXJlTWFnRmlsdGVyLkxJTkVBUjtcclxuICAgICAgICAgICAgICAgIHNhbXBsZXIubWluRmlsdGVyID0gVGV4dHVyZU1pbkZpbHRlci5MSU5FQVJfTUlQTUFQX05FQVJFU1Q7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFRleHR1cmUuTkVBUkVTVF9ORUFSRVNUX01JUE5FQVJFU1Q6IHtcclxuICAgICAgICAgICAgICAgIHNhbXBsZXIubWFnRmlsdGVyID0gVGV4dHVyZU1hZ0ZpbHRlci5ORUFSRVNUO1xyXG4gICAgICAgICAgICAgICAgc2FtcGxlci5taW5GaWx0ZXIgPSBUZXh0dXJlTWluRmlsdGVyLk5FQVJFU1RfTUlQTUFQX05FQVJFU1Q7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHNhbXBsZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZ2V0R0xURlRleHR1cmVXcmFwTW9kZSh3cmFwTW9kZTogbnVtYmVyKTogVGV4dHVyZVdyYXBNb2RlIHtcclxuICAgICAgICBzd2l0Y2ggKHdyYXBNb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgVGV4dHVyZS5XUkFQX0FERFJFU1NNT0RFOiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gVGV4dHVyZVdyYXBNb2RlLlJFUEVBVDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFRleHR1cmUuQ0xBTVBfQUREUkVTU01PREU6IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBUZXh0dXJlV3JhcE1vZGUuQ0xBTVBfVE9fRURHRTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFRleHR1cmUuTUlSUk9SX0FERFJFU1NNT0RFOiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gVGV4dHVyZVdyYXBNb2RlLk1JUlJPUkVEX1JFUEVBVDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgICAgICBUb29scy5FcnJvcihgVW5zdXBwb3J0ZWQgVGV4dHVyZSBXcmFwIE1vZGUgJHt3cmFwTW9kZX0hYCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gVGV4dHVyZVdyYXBNb2RlLlJFUEVBVDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgYSBQQlJNYXRlcmlhbCAoU3BlY3VsYXIvR2xvc3NpbmVzcykgdG8gTWV0YWxsaWMgUm91Z2huZXNzIGZhY3RvcnNcclxuICAgICAqIEBwYXJhbSBiYWJ5bG9uUEJSTWF0ZXJpYWwgQkpTIFBCUiBNZXRhbGxpYyBSb3VnaG5lc3MgTWF0ZXJpYWxcclxuICAgICAqIEBwYXJhbSBtaW1lVHlwZSBtaW1lIHR5cGUgdG8gdXNlIGZvciB0aGUgdGV4dHVyZXNcclxuICAgICAqIEBwYXJhbSBwYnJNZXRhbGxpY1JvdWdobmVzcyBnbFRGIFBCUiBNZXRhbGxpYyBSb3VnaG5lc3MgaW50ZXJmYWNlXHJcbiAgICAgKiBAcGFyYW0gaGFzVVZzIHNwZWNpZmllcyBpZiB0ZXh0dXJlIGNvb3JkaW5hdGVzIGFyZSBwcmVzZW50IG9uIHRoZSBzdWJtZXNoIHRvIGRldGVybWluZSBpZiB0ZXh0dXJlcyBzaG91bGQgYmUgYXBwbGllZFxyXG4gICAgICogQHJldHVybnMgZ2xURiBQQlIgTWV0YWxsaWMgUm91Z2huZXNzIGZhY3RvcnNcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBhc3luYyBfY29udmVydFNwZWNHbG9zc0ZhY3RvcnNUb01ldGFsbGljUm91Z2huZXNzQXN5bmMoXHJcbiAgICAgICAgYmFieWxvblBCUk1hdGVyaWFsOiBQQlJCYXNlTWF0ZXJpYWwsXHJcbiAgICAgICAgbWltZVR5cGU6IEltYWdlTWltZVR5cGUsXHJcbiAgICAgICAgcGJyTWV0YWxsaWNSb3VnaG5lc3M6IElNYXRlcmlhbFBick1ldGFsbGljUm91Z2huZXNzLFxyXG4gICAgICAgIGhhc1VWczogYm9vbGVhblxyXG4gICAgKTogUHJvbWlzZTxJUEJSTWV0YWxsaWNSb3VnaG5lc3M+IHtcclxuICAgICAgICBjb25zdCBzcGVjR2xvc3M6IElQQlJTcGVjdWxhckdsb3NzaW5lc3MgPSB7XHJcbiAgICAgICAgICAgIGRpZmZ1c2VDb2xvcjogYmFieWxvblBCUk1hdGVyaWFsLl9hbGJlZG9Db2xvcixcclxuICAgICAgICAgICAgc3BlY3VsYXJDb2xvcjogYmFieWxvblBCUk1hdGVyaWFsLl9yZWZsZWN0aXZpdHlDb2xvcixcclxuICAgICAgICAgICAgZ2xvc3NpbmVzczogYmFieWxvblBCUk1hdGVyaWFsLl9taWNyb1N1cmZhY2UsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgYWxiZWRvVGV4dHVyZSA9IGJhYnlsb25QQlJNYXRlcmlhbC5fYWxiZWRvVGV4dHVyZTtcclxuICAgICAgICBjb25zdCByZWZsZWN0aXZpdHlUZXh0dXJlID0gYmFieWxvblBCUk1hdGVyaWFsLl9yZWZsZWN0aXZpdHlUZXh0dXJlO1xyXG4gICAgICAgIGNvbnN0IHVzZU1pY3Jvc3VyZmFjZUZyb21SZWZsZWN0aXZpdHlNYXBBbHBoYSA9IGJhYnlsb25QQlJNYXRlcmlhbC5fdXNlTWljcm9TdXJmYWNlRnJvbVJlZmxlY3Rpdml0eU1hcEFscGhhO1xyXG4gICAgICAgIGlmIChyZWZsZWN0aXZpdHlUZXh0dXJlICYmICF1c2VNaWNyb3N1cmZhY2VGcm9tUmVmbGVjdGl2aXR5TWFwQWxwaGEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFwiX0NvbnZlcnRQQlJNYXRlcmlhbDogR2xvc3NpbmVzcyB2YWx1ZXMgbm90IGluY2x1ZGVkIGluIHRoZSByZWZsZWN0aXZpdHkgdGV4dHVyZSBhcmUgY3VycmVudGx5IG5vdCBzdXBwb3J0ZWRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoKGFsYmVkb1RleHR1cmUgfHwgcmVmbGVjdGl2aXR5VGV4dHVyZSkgJiYgaGFzVVZzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2V4cG9ydGVyLl9tYXRlcmlhbE5lZWRzVVZzU2V0LmFkZChiYWJ5bG9uUEJSTWF0ZXJpYWwpO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2FtcGxlckluZGV4ID0gdGhpcy5fZXhwb3J0VGV4dHVyZVNhbXBsZXIoYWxiZWRvVGV4dHVyZSB8fCByZWZsZWN0aXZpdHlUZXh0dXJlKTtcclxuICAgICAgICAgICAgY29uc3QgbWV0YWxsaWNSb3VnaG5lc3NGYWN0b3JzID0gYXdhaXQgdGhpcy5fY29udmVydFNwZWN1bGFyR2xvc3NpbmVzc1RleHR1cmVzVG9NZXRhbGxpY1JvdWdobmVzc0FzeW5jKGFsYmVkb1RleHR1cmUsIHJlZmxlY3Rpdml0eVRleHR1cmUsIHNwZWNHbG9zcywgbWltZVR5cGUpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdGV4dHVyZXMgPSB0aGlzLl9leHBvcnRlci5fdGV4dHVyZXM7XHJcblxyXG4gICAgICAgICAgICBpZiAobWV0YWxsaWNSb3VnaG5lc3NGYWN0b3JzLmJhc2VDb2xvclRleHR1cmVEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbWFnZUluZGV4ID0gdGhpcy5fZXhwb3J0SW1hZ2UoYGJhc2VDb2xvciR7dGV4dHVyZXMubGVuZ3RofWAsIG1pbWVUeXBlLCBtZXRhbGxpY1JvdWdobmVzc0ZhY3RvcnMuYmFzZUNvbG9yVGV4dHVyZURhdGEpO1xyXG4gICAgICAgICAgICAgICAgcGJyTWV0YWxsaWNSb3VnaG5lc3MuYmFzZUNvbG9yVGV4dHVyZSA9IHRoaXMuX2V4cG9ydFRleHR1cmVJbmZvKGltYWdlSW5kZXgsIHNhbXBsZXJJbmRleCwgYWxiZWRvVGV4dHVyZT8uY29vcmRpbmF0ZXNJbmRleCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChtZXRhbGxpY1JvdWdobmVzc0ZhY3RvcnMubWV0YWxsaWNSb3VnaG5lc3NUZXh0dXJlRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW1hZ2VJbmRleCA9IHRoaXMuX2V4cG9ydEltYWdlKGBtZXRhbGxpY1JvdWdobmVzcyR7dGV4dHVyZXMubGVuZ3RofWAsIG1pbWVUeXBlLCBtZXRhbGxpY1JvdWdobmVzc0ZhY3RvcnMubWV0YWxsaWNSb3VnaG5lc3NUZXh0dXJlRGF0YSk7XHJcbiAgICAgICAgICAgICAgICBwYnJNZXRhbGxpY1JvdWdobmVzcy5tZXRhbGxpY1JvdWdobmVzc1RleHR1cmUgPSB0aGlzLl9leHBvcnRUZXh0dXJlSW5mbyhpbWFnZUluZGV4LCBzYW1wbGVySW5kZXgsIHJlZmxlY3Rpdml0eVRleHR1cmU/LmNvb3JkaW5hdGVzSW5kZXgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbWV0YWxsaWNSb3VnaG5lc3NGYWN0b3JzO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jb252ZXJ0U3BlY3VsYXJHbG9zc2luZXNzVG9NZXRhbGxpY1JvdWdobmVzcyhzcGVjR2xvc3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZXhwb3J0UEJSTWF0ZXJpYWxBc3luYyhiYWJ5bG9uUEJSTWF0ZXJpYWw6IFBCUkJhc2VNYXRlcmlhbCwgbWltZVR5cGU6IEltYWdlTWltZVR5cGUsIGhhc1VWczogYm9vbGVhbik6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgICAgICAgY29uc3QgZ2xURlBick1ldGFsbGljUm91Z2huZXNzOiBJTWF0ZXJpYWxQYnJNZXRhbGxpY1JvdWdobmVzcyA9IHt9O1xyXG5cclxuICAgICAgICBjb25zdCBnbFRGTWF0ZXJpYWw6IElNYXRlcmlhbCA9IHtcclxuICAgICAgICAgICAgbmFtZTogYmFieWxvblBCUk1hdGVyaWFsLm5hbWUsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgdXNlTWV0YWxsaWNSb3VnaG5lc3MgPSBiYWJ5bG9uUEJSTWF0ZXJpYWwuaXNNZXRhbGxpY1dvcmtmbG93KCk7XHJcblxyXG4gICAgICAgIGlmICh1c2VNZXRhbGxpY1JvdWdobmVzcykge1xyXG4gICAgICAgICAgICBjb25zdCBhbGJlZG9Db2xvciA9IGJhYnlsb25QQlJNYXRlcmlhbC5fYWxiZWRvQ29sb3I7XHJcbiAgICAgICAgICAgIGNvbnN0IGFscGhhID0gYmFieWxvblBCUk1hdGVyaWFsLmFscGhhO1xyXG4gICAgICAgICAgICBpZiAoYWxiZWRvQ29sb3IpIHtcclxuICAgICAgICAgICAgICAgIGdsVEZQYnJNZXRhbGxpY1JvdWdobmVzcy5iYXNlQ29sb3JGYWN0b3IgPSBbYWxiZWRvQ29sb3IuciwgYWxiZWRvQ29sb3IuZywgYWxiZWRvQ29sb3IuYiwgYWxwaGFdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBtZXRhbGxpY1JvdWdobmVzcyA9IHVzZU1ldGFsbGljUm91Z2huZXNzXHJcbiAgICAgICAgICAgID8gYXdhaXQgdGhpcy5fY29udmVydE1ldGFsUm91Z2hGYWN0b3JzVG9NZXRhbGxpY1JvdWdobmVzc0FzeW5jKGJhYnlsb25QQlJNYXRlcmlhbCwgbWltZVR5cGUsIGdsVEZQYnJNZXRhbGxpY1JvdWdobmVzcywgaGFzVVZzKVxyXG4gICAgICAgICAgICA6IGF3YWl0IHRoaXMuX2NvbnZlcnRTcGVjR2xvc3NGYWN0b3JzVG9NZXRhbGxpY1JvdWdobmVzc0FzeW5jKGJhYnlsb25QQlJNYXRlcmlhbCwgbWltZVR5cGUsIGdsVEZQYnJNZXRhbGxpY1JvdWdobmVzcywgaGFzVVZzKTtcclxuXHJcbiAgICAgICAgYXdhaXQgdGhpcy5fc2V0TWV0YWxsaWNSb3VnaG5lc3NQYnJNYXRlcmlhbEFzeW5jKG1ldGFsbGljUm91Z2huZXNzLCBiYWJ5bG9uUEJSTWF0ZXJpYWwsIGdsVEZNYXRlcmlhbCwgZ2xURlBick1ldGFsbGljUm91Z2huZXNzLCBtaW1lVHlwZSwgaGFzVVZzKTtcclxuICAgICAgICBhd2FpdCB0aGlzLl9maW5pc2hNYXRlcmlhbEFzeW5jKGdsVEZNYXRlcmlhbCwgYmFieWxvblBCUk1hdGVyaWFsLCBtaW1lVHlwZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IG1hdGVyaWFscyA9IHRoaXMuX2V4cG9ydGVyLl9tYXRlcmlhbHM7XHJcbiAgICAgICAgbWF0ZXJpYWxzLnB1c2goZ2xURk1hdGVyaWFsKTtcclxuICAgICAgICByZXR1cm4gbWF0ZXJpYWxzLmxlbmd0aCAtIDE7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBfc2V0TWV0YWxsaWNSb3VnaG5lc3NQYnJNYXRlcmlhbEFzeW5jKFxyXG4gICAgICAgIG1ldGFsbGljUm91Z2huZXNzOiBJUEJSTWV0YWxsaWNSb3VnaG5lc3MsXHJcbiAgICAgICAgYmFieWxvblBCUk1hdGVyaWFsOiBQQlJCYXNlTWF0ZXJpYWwsXHJcbiAgICAgICAgZ2xURk1hdGVyaWFsOiBJTWF0ZXJpYWwsXHJcbiAgICAgICAgZ2xURlBick1ldGFsbGljUm91Z2huZXNzOiBJTWF0ZXJpYWxQYnJNZXRhbGxpY1JvdWdobmVzcyxcclxuICAgICAgICBtaW1lVHlwZTogSW1hZ2VNaW1lVHlwZSxcclxuICAgICAgICBoYXNVVnM6IGJvb2xlYW5cclxuICAgICk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIFNldEFscGhhTW9kZShnbFRGTWF0ZXJpYWwsIGJhYnlsb25QQlJNYXRlcmlhbCk7XHJcblxyXG4gICAgICAgIGlmICghbWV0YWxsaWNSb3VnaG5lc3MuYmFzZUNvbG9yLmVxdWFsc1dpdGhFcHNpbG9uKHdoaXRlLCBlcHNpbG9uKSB8fCAhU2NhbGFyLldpdGhpbkVwc2lsb24oYmFieWxvblBCUk1hdGVyaWFsLmFscGhhLCAxLCBlcHNpbG9uKSkge1xyXG4gICAgICAgICAgICBnbFRGUGJyTWV0YWxsaWNSb3VnaG5lc3MuYmFzZUNvbG9yRmFjdG9yID0gW21ldGFsbGljUm91Z2huZXNzLmJhc2VDb2xvci5yLCBtZXRhbGxpY1JvdWdobmVzcy5iYXNlQ29sb3IuZywgbWV0YWxsaWNSb3VnaG5lc3MuYmFzZUNvbG9yLmIsIGJhYnlsb25QQlJNYXRlcmlhbC5hbHBoYV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobWV0YWxsaWNSb3VnaG5lc3MubWV0YWxsaWMgIT0gbnVsbCAmJiBtZXRhbGxpY1JvdWdobmVzcy5tZXRhbGxpYyAhPT0gMSkge1xyXG4gICAgICAgICAgICBnbFRGUGJyTWV0YWxsaWNSb3VnaG5lc3MubWV0YWxsaWNGYWN0b3IgPSBtZXRhbGxpY1JvdWdobmVzcy5tZXRhbGxpYztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1ldGFsbGljUm91Z2huZXNzLnJvdWdobmVzcyAhPSBudWxsICYmIG1ldGFsbGljUm91Z2huZXNzLnJvdWdobmVzcyAhPT0gMSkge1xyXG4gICAgICAgICAgICBnbFRGUGJyTWV0YWxsaWNSb3VnaG5lc3Mucm91Z2huZXNzRmFjdG9yID0gbWV0YWxsaWNSb3VnaG5lc3Mucm91Z2huZXNzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGJhYnlsb25QQlJNYXRlcmlhbC5iYWNrRmFjZUN1bGxpbmcgIT0gbnVsbCAmJiAhYmFieWxvblBCUk1hdGVyaWFsLmJhY2tGYWNlQ3VsbGluZykge1xyXG4gICAgICAgICAgICBpZiAoIWJhYnlsb25QQlJNYXRlcmlhbC5fdHdvU2lkZWRMaWdodGluZykge1xyXG4gICAgICAgICAgICAgICAgVG9vbHMuV2FybihiYWJ5bG9uUEJSTWF0ZXJpYWwubmFtZSArIFwiOiBCYWNrLWZhY2UgY3VsbGluZyBkaXNhYmxlZCBhbmQgdHdvLXNpZGVkIGxpZ2h0aW5nIGRpc2FibGVkIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZ2xURi5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZ2xURk1hdGVyaWFsLmRvdWJsZVNpZGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChoYXNVVnMpIHtcclxuICAgICAgICAgICAgY29uc3QgcHJvbWlzZXM6IFByb21pc2U8dm9pZD5bXSA9IFtdO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYnVtcFRleHR1cmUgPSBiYWJ5bG9uUEJSTWF0ZXJpYWwuX2J1bXBUZXh0dXJlO1xyXG4gICAgICAgICAgICBpZiAoYnVtcFRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leHBvcnRUZXh0dXJlQXN5bmMoYnVtcFRleHR1cmUsIG1pbWVUeXBlKS50aGVuKChnbFRGVGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2xURlRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsVEZNYXRlcmlhbC5ub3JtYWxUZXh0dXJlID0gZ2xURlRleHR1cmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYnVtcFRleHR1cmUubGV2ZWwgIT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbFRGTWF0ZXJpYWwubm9ybWFsVGV4dHVyZS5zY2FsZSA9IGJ1bXBUZXh0dXJlLmxldmVsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGFtYmllbnRUZXh0dXJlID0gYmFieWxvblBCUk1hdGVyaWFsLl9hbWJpZW50VGV4dHVyZTtcclxuICAgICAgICAgICAgaWYgKGFtYmllbnRUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXhwb3J0VGV4dHVyZUFzeW5jKGFtYmllbnRUZXh0dXJlLCBtaW1lVHlwZSkudGhlbigoZ2xURlRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdsVEZUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvY2NsdXNpb25UZXh0dXJlOiBJTWF0ZXJpYWxPY2NsdXNpb25UZXh0dXJlSW5mbyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogZ2xURlRleHR1cmUuaW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4Q29vcmQ6IGdsVEZUZXh0dXJlLnRleENvb3JkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dGVuc2lvbnM6IGdsVEZUZXh0dXJlLmV4dGVuc2lvbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsVEZNYXRlcmlhbC5vY2NsdXNpb25UZXh0dXJlID0gb2NjbHVzaW9uVGV4dHVyZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFtYmllbnRUZXh0dXJlU3RyZW5ndGggPSBiYWJ5bG9uUEJSTWF0ZXJpYWwuX2FtYmllbnRUZXh0dXJlU3RyZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYW1iaWVudFRleHR1cmVTdHJlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9jY2x1c2lvblRleHR1cmUuc3RyZW5ndGggPSBhbWJpZW50VGV4dHVyZVN0cmVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGVtaXNzaXZlVGV4dHVyZSA9IGJhYnlsb25QQlJNYXRlcmlhbC5fZW1pc3NpdmVUZXh0dXJlO1xyXG4gICAgICAgICAgICBpZiAoZW1pc3NpdmVUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXhwb3J0VGV4dHVyZUFzeW5jKGVtaXNzaXZlVGV4dHVyZSwgbWltZVR5cGUpLnRoZW4oKGdsVEZUZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnbFRGVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xURk1hdGVyaWFsLmVtaXNzaXZlVGV4dHVyZSA9IGdsVEZUZXh0dXJlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChwcm9taXNlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9leHBvcnRlci5fbWF0ZXJpYWxOZWVkc1VWc1NldC5hZGQoYmFieWxvblBCUk1hdGVyaWFsKTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZW1pc3NpdmVDb2xvciA9IGJhYnlsb25QQlJNYXRlcmlhbC5fZW1pc3NpdmVDb2xvcjtcclxuICAgICAgICBpZiAoIWVtaXNzaXZlQ29sb3IuZXF1YWxzV2l0aEVwc2lsb24oYmxhY2ssIGVwc2lsb24pKSB7XHJcbiAgICAgICAgICAgIGdsVEZNYXRlcmlhbC5lbWlzc2l2ZUZhY3RvciA9IGVtaXNzaXZlQ29sb3IuYXNBcnJheSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2xURk1hdGVyaWFsLnBick1ldGFsbGljUm91Z2huZXNzID0gZ2xURlBick1ldGFsbGljUm91Z2huZXNzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2dldFBpeGVsc0Zyb21UZXh0dXJlKGJhYnlsb25UZXh0dXJlOiBCYXNlVGV4dHVyZSk6IFByb21pc2U8TnVsbGFibGU8VWludDhBcnJheSB8IEZsb2F0MzJBcnJheT4+IHtcclxuICAgICAgICBjb25zdCBwaXhlbHMgPVxyXG4gICAgICAgICAgICBiYWJ5bG9uVGV4dHVyZS50ZXh0dXJlVHlwZSA9PT0gQ29uc3RhbnRzLlRFWFRVUkVUWVBFX1VOU0lHTkVEX0JZVEVcclxuICAgICAgICAgICAgICAgID8gKGJhYnlsb25UZXh0dXJlLnJlYWRQaXhlbHMoKSBhcyBQcm9taXNlPFVpbnQ4QXJyYXk+KVxyXG4gICAgICAgICAgICAgICAgOiAoYmFieWxvblRleHR1cmUucmVhZFBpeGVscygpIGFzIFByb21pc2U8RmxvYXQzMkFycmF5Pik7XHJcbiAgICAgICAgcmV0dXJuIHBpeGVscztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZXhwb3J0VGV4dHVyZUFzeW5jKGJhYnlsb25UZXh0dXJlOiBCYXNlVGV4dHVyZSwgbWltZVR5cGU6IEltYWdlTWltZVR5cGUpOiBQcm9taXNlPE51bGxhYmxlPElUZXh0dXJlSW5mbz4+IHtcclxuICAgICAgICBjb25zdCBleHRlbnNpb25Qcm9taXNlID0gdGhpcy5fZXhwb3J0ZXIuX2V4dGVuc2lvbnNQcmVFeHBvcnRUZXh0dXJlQXN5bmMoXCJleHBvcnRlclwiLCBiYWJ5bG9uVGV4dHVyZSBhcyBUZXh0dXJlLCBtaW1lVHlwZSk7XHJcbiAgICAgICAgaWYgKCFleHRlbnNpb25Qcm9taXNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9leHBvcnRUZXh0dXJlSW5mb0FzeW5jKGJhYnlsb25UZXh0dXJlLCBtaW1lVHlwZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZXh0ZW5zaW9uUHJvbWlzZS50aGVuKCh0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghdGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2V4cG9ydFRleHR1cmVJbmZvQXN5bmMoYmFieWxvblRleHR1cmUsIG1pbWVUeXBlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZXhwb3J0VGV4dHVyZUluZm9Bc3luYyh0ZXh0dXJlLCBtaW1lVHlwZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBfZXhwb3J0VGV4dHVyZUluZm9Bc3luYyhiYWJ5bG9uVGV4dHVyZTogQmFzZVRleHR1cmUsIG1pbWVUeXBlOiBJbWFnZU1pbWVUeXBlKTogUHJvbWlzZTxOdWxsYWJsZTxJVGV4dHVyZUluZm8+PiB7XHJcbiAgICAgICAgbGV0IHRleHR1cmVJbmZvID0gdGhpcy5fdGV4dHVyZU1hcC5nZXQoYmFieWxvblRleHR1cmUpO1xyXG4gICAgICAgIGlmICghdGV4dHVyZUluZm8pIHtcclxuICAgICAgICAgICAgY29uc3QgcGl4ZWxzID0gYXdhaXQgdGhpcy5fZ2V0UGl4ZWxzRnJvbVRleHR1cmUoYmFieWxvblRleHR1cmUpO1xyXG4gICAgICAgICAgICBpZiAoIXBpeGVscykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNhbXBsZXJJbmRleCA9IHRoaXMuX2V4cG9ydFRleHR1cmVTYW1wbGVyKGJhYnlsb25UZXh0dXJlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFByZXNlcnZlIHRleHR1cmUgbWltZSB0eXBlIGlmIGRlZmluZWRcclxuICAgICAgICAgICAgY29uc3QgdGV4dHVyZU1pbWVUeXBlID0gKGJhYnlsb25UZXh0dXJlIGFzIFRleHR1cmUpLm1pbWVUeXBlO1xyXG4gICAgICAgICAgICBpZiAodGV4dHVyZU1pbWVUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRleHR1cmVNaW1lVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpbWFnZS9qcGVnXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImltYWdlL3BuZ1wiOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpbWFnZS93ZWJwXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbWVUeXBlID0gdGV4dHVyZU1pbWVUeXBlIGFzIEltYWdlTWltZVR5cGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRvb2xzLldhcm4oYFVuc3VwcG9ydGVkIG1lZGlhIHR5cGU6ICR7dGV4dHVyZU1pbWVUeXBlfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgaW50ZXJuYWxUZXh0dXJlVG9JbWFnZSA9IHRoaXMuX2ludGVybmFsVGV4dHVyZVRvSW1hZ2U7XHJcbiAgICAgICAgICAgIGNvbnN0IGludGVybmFsVGV4dHVyZVVuaXF1ZUlkID0gYmFieWxvblRleHR1cmUuZ2V0SW50ZXJuYWxUZXh0dXJlKCkhLnVuaXF1ZUlkO1xyXG4gICAgICAgICAgICBpbnRlcm5hbFRleHR1cmVUb0ltYWdlW2ludGVybmFsVGV4dHVyZVVuaXF1ZUlkXSB8fD0ge307XHJcbiAgICAgICAgICAgIGxldCBpbWFnZUluZGV4UHJvbWlzZSA9IGludGVybmFsVGV4dHVyZVRvSW1hZ2VbaW50ZXJuYWxUZXh0dXJlVW5pcXVlSWRdW21pbWVUeXBlXTtcclxuICAgICAgICAgICAgaWYgKGltYWdlSW5kZXhQcm9taXNlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNpemUgPSBiYWJ5bG9uVGV4dHVyZS5nZXRTaXplKCk7XHJcbiAgICAgICAgICAgICAgICBpbWFnZUluZGV4UHJvbWlzZSA9IChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuX2dldEltYWdlRGF0YUFzeW5jKHBpeGVscywgc2l6ZS53aWR0aCwgc2l6ZS5oZWlnaHQsIG1pbWVUeXBlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZXhwb3J0SW1hZ2UoYmFieWxvblRleHR1cmUubmFtZSwgbWltZVR5cGUsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSkoKTtcclxuICAgICAgICAgICAgICAgIGludGVybmFsVGV4dHVyZVRvSW1hZ2VbaW50ZXJuYWxUZXh0dXJlVW5pcXVlSWRdW21pbWVUeXBlXSA9IGltYWdlSW5kZXhQcm9taXNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0ZXh0dXJlSW5mbyA9IHRoaXMuX2V4cG9ydFRleHR1cmVJbmZvKGF3YWl0IGltYWdlSW5kZXhQcm9taXNlLCBzYW1wbGVySW5kZXgsIGJhYnlsb25UZXh0dXJlLmNvb3JkaW5hdGVzSW5kZXgpO1xyXG4gICAgICAgICAgICB0aGlzLl90ZXh0dXJlTWFwLnNldChiYWJ5bG9uVGV4dHVyZSwgdGV4dHVyZUluZm8pO1xyXG4gICAgICAgICAgICB0aGlzLl9leHBvcnRlci5fZXh0ZW5zaW9uc1Bvc3RFeHBvcnRUZXh0dXJlcyhcImV4cG9ydGVyXCIsIHRleHR1cmVJbmZvLCBiYWJ5bG9uVGV4dHVyZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGV4dHVyZUluZm87XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZXhwb3J0SW1hZ2UobmFtZTogc3RyaW5nLCBtaW1lVHlwZTogSW1hZ2VNaW1lVHlwZSwgZGF0YTogQXJyYXlCdWZmZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IGltYWdlcyA9IHRoaXMuX2V4cG9ydGVyLl9pbWFnZXM7XHJcblxyXG4gICAgICAgIGxldCBpbWFnZTogSUltYWdlO1xyXG4gICAgICAgIGlmICh0aGlzLl9leHBvcnRlci5fc2hvdWxkVXNlR2xiKSB7XHJcbiAgICAgICAgICAgIGltYWdlID0ge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgICAgIG1pbWVUeXBlOiBtaW1lVHlwZSxcclxuICAgICAgICAgICAgICAgIGJ1ZmZlclZpZXc6IHVuZGVmaW5lZCwgLy8gV2lsbCBiZSB1cGRhdGVkIGxhdGVyIGJ5IEJ1ZmZlck1hbmFnZXJcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc3QgYnVmZmVyVmlldyA9IHRoaXMuX2V4cG9ydGVyLl9idWZmZXJNYW5hZ2VyLmNyZWF0ZUJ1ZmZlclZpZXcobmV3IFVpbnQ4QXJyYXkoZGF0YSkpO1xyXG4gICAgICAgICAgICB0aGlzLl9leHBvcnRlci5fYnVmZmVyTWFuYWdlci5zZXRCdWZmZXJWaWV3KGltYWdlLCBidWZmZXJWaWV3KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBCdWlsZCBhIHVuaXF1ZSBVUklcclxuICAgICAgICAgICAgY29uc3QgYmFzZU5hbWUgPSBuYW1lLnJlcGxhY2UoL1xcLlxcL3xcXC98XFwuXFxcXHxcXFxcL2csIFwiX1wiKTtcclxuICAgICAgICAgICAgY29uc3QgZXh0ZW5zaW9uID0gR2V0RmlsZUV4dGVuc2lvbkZyb21NaW1lVHlwZShtaW1lVHlwZSk7XHJcbiAgICAgICAgICAgIGxldCBmaWxlTmFtZSA9IGJhc2VOYW1lICsgZXh0ZW5zaW9uO1xyXG4gICAgICAgICAgICBpZiAoaW1hZ2VzLnNvbWUoKGltYWdlKSA9PiBpbWFnZS51cmkgPT09IGZpbGVOYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgZmlsZU5hbWUgPSBgJHtiYXNlTmFtZX1fJHtUb29scy5SYW5kb21JZCgpfSR7ZXh0ZW5zaW9ufWA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGltYWdlID0ge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgICAgIHVyaTogZmlsZU5hbWUsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMuX2V4cG9ydGVyLl9pbWFnZURhdGFbZmlsZU5hbWVdID0geyBkYXRhOiBkYXRhLCBtaW1lVHlwZTogbWltZVR5cGUgfTsgLy8gU2F2ZSBpbWFnZSBkYXRhIHRvIGJlIHdyaXR0ZW4gdG8gZmlsZSBsYXRlclxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW1hZ2VzLnB1c2goaW1hZ2UpO1xyXG5cclxuICAgICAgICByZXR1cm4gaW1hZ2VzLmxlbmd0aCAtIDE7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZXhwb3J0VGV4dHVyZUluZm8oaW1hZ2VJbmRleDogbnVtYmVyLCBzYW1wbGVySW5kZXg6IG51bWJlciwgY29vcmRpbmF0ZXNJbmRleD86IG51bWJlcik6IElUZXh0dXJlSW5mbyB7XHJcbiAgICAgICAgY29uc3QgdGV4dHVyZXMgPSB0aGlzLl9leHBvcnRlci5fdGV4dHVyZXM7XHJcbiAgICAgICAgbGV0IHRleHR1cmVJbmRleCA9IHRleHR1cmVzLmZpbmRJbmRleCgodCkgPT4gdC5zYW1wbGVyID09IHNhbXBsZXJJbmRleCAmJiB0LnNvdXJjZSA9PT0gaW1hZ2VJbmRleCk7XHJcbiAgICAgICAgaWYgKHRleHR1cmVJbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgdGV4dHVyZUluZGV4ID0gdGV4dHVyZXMubGVuZ3RoO1xyXG4gICAgICAgICAgICB0ZXh0dXJlcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHNvdXJjZTogaW1hZ2VJbmRleCxcclxuICAgICAgICAgICAgICAgIHNhbXBsZXI6IHNhbXBsZXJJbmRleCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB0ZXh0dXJlSW5mbzogSVRleHR1cmVJbmZvID0geyBpbmRleDogdGV4dHVyZUluZGV4IH07XHJcbiAgICAgICAgaWYgKGNvb3JkaW5hdGVzSW5kZXgpIHtcclxuICAgICAgICAgICAgdGV4dHVyZUluZm8udGV4Q29vcmQgPSBjb29yZGluYXRlc0luZGV4O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGV4dHVyZUluZm87XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZXhwb3J0VGV4dHVyZVNhbXBsZXIodGV4dHVyZTogTnVsbGFibGU8QmFzZVRleHR1cmU+KTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCBzYW1wbGVyID0gdGhpcy5fZ2V0VGV4dHVyZVNhbXBsZXIodGV4dHVyZSk7XHJcblxyXG4gICAgICAgIC8vIGlmIGEgcHJlLWV4aXN0aW5nIHNhbXBsZXIgd2l0aCBpZGVudGljYWwgcGFyYW1ldGVycyBleGlzdHMsIHRoZW4gcmV1c2UgdGhlIHByZXZpb3VzIHNhbXBsZXJcclxuICAgICAgICBjb25zdCBzYW1wbGVycyA9IHRoaXMuX2V4cG9ydGVyLl9zYW1wbGVycztcclxuICAgICAgICBjb25zdCBzYW1wbGVySW5kZXggPSBzYW1wbGVycy5maW5kSW5kZXgoXHJcbiAgICAgICAgICAgIChzKSA9PiBzLm1pbkZpbHRlciA9PT0gc2FtcGxlci5taW5GaWx0ZXIgJiYgcy5tYWdGaWx0ZXIgPT09IHNhbXBsZXIubWFnRmlsdGVyICYmIHMud3JhcFMgPT09IHNhbXBsZXIud3JhcFMgJiYgcy53cmFwVCA9PT0gc2FtcGxlci53cmFwVFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWYgKHNhbXBsZXJJbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNhbXBsZXJJbmRleDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNhbXBsZXJzLnB1c2goc2FtcGxlcik7XHJcbiAgICAgICAgcmV0dXJuIHNhbXBsZXJzLmxlbmd0aCAtIDE7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHR5cGUgeyBJQnVmZmVyVmlldywgSUFjY2Vzc29yIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBBY2Nlc3NvckNvbXBvbmVudFR5cGUsIEFjY2Vzc29yVHlwZSB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHR5cGUgeyBNb3JwaFRhcmdldCB9IGZyb20gXCJjb3JlL01vcnBoL21vcnBoVGFyZ2V0XCI7XHJcbmltcG9ydCB0eXBlIHsgQnVmZmVyTWFuYWdlciB9IGZyb20gXCIuL2J1ZmZlck1hbmFnZXJcIjtcclxuXHJcbmltcG9ydCB7IE5vcm1hbGl6ZVRhbmdlbnQgfSBmcm9tIFwiLi9nbFRGVXRpbGl0aWVzXCI7XHJcbmltcG9ydCB0eXBlIHsgTWVzaCB9IGZyb20gXCJjb3JlL01lc2hlcy9tZXNoXCI7XHJcbmltcG9ydCB7IFZlcnRleEJ1ZmZlciB9IGZyb20gXCJjb3JlL0J1ZmZlcnMvYnVmZmVyXCI7XHJcbmltcG9ydCB7IFZlY3RvcjMsIFZlY3RvcjQgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLnZlY3RvclwiO1xyXG5pbXBvcnQgeyBUb29scyB9IGZyb20gXCJjb3JlL01pc2MvdG9vbHNcIjtcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgdG8gc3RvcmUgbW9ycGggdGFyZ2V0IGluZm9ybWF0aW9uLlxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU1vcnBoVGFyZ2V0RGF0YSB7XHJcbiAgICBhdHRyaWJ1dGVzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+O1xyXG4gICAgaW5mbHVlbmNlOiBudW1iZXI7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBCdWlsZE1vcnBoVGFyZ2V0QnVmZmVycyhcclxuICAgIG1vcnBoVGFyZ2V0OiBNb3JwaFRhcmdldCxcclxuICAgIG1lc2g6IE1lc2gsXHJcbiAgICBidWZmZXJNYW5hZ2VyOiBCdWZmZXJNYW5hZ2VyLFxyXG4gICAgYnVmZmVyVmlld3M6IElCdWZmZXJWaWV3W10sXHJcbiAgICBhY2Nlc3NvcnM6IElBY2Nlc3NvcltdLFxyXG4gICAgY29udmVydFRvUmlnaHRIYW5kZWQ6IGJvb2xlYW5cclxuKTogSU1vcnBoVGFyZ2V0RGF0YSB7XHJcbiAgICBjb25zdCByZXN1bHQ6IElNb3JwaFRhcmdldERhdGEgPSB7XHJcbiAgICAgICAgYXR0cmlidXRlczoge30sXHJcbiAgICAgICAgaW5mbHVlbmNlOiBtb3JwaFRhcmdldC5pbmZsdWVuY2UsXHJcbiAgICAgICAgbmFtZTogbW9ycGhUYXJnZXQubmFtZSxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZmxpcFggPSBjb252ZXJ0VG9SaWdodEhhbmRlZCA/IC0xIDogMTtcclxuICAgIGNvbnN0IGZsb2F0U2l6ZSA9IDQ7XHJcbiAgICBjb25zdCBkaWZmZXJlbmNlID0gVmVjdG9yMy5aZXJvKCk7XHJcbiAgICBsZXQgdmVydGV4U3RhcnQgPSAwO1xyXG4gICAgbGV0IHZlcnRleENvdW50ID0gMDtcclxuXHJcbiAgICBpZiAobW9ycGhUYXJnZXQuaGFzUG9zaXRpb25zKSB7XHJcbiAgICAgICAgY29uc3QgbW9ycGhQb3NpdGlvbnMgPSBtb3JwaFRhcmdldC5nZXRQb3NpdGlvbnMoKSE7XHJcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxQb3NpdGlvbnMgPSBtZXNoLmdldFZlcnRpY2VzRGF0YShWZXJ0ZXhCdWZmZXIuUG9zaXRpb25LaW5kLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIGlmIChvcmlnaW5hbFBvc2l0aW9ucykge1xyXG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvbkRhdGEgPSBuZXcgRmxvYXQzMkFycmF5KG9yaWdpbmFsUG9zaXRpb25zLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1pbiA9IFtJbmZpbml0eSwgSW5maW5pdHksIEluZmluaXR5XTtcclxuICAgICAgICAgICAgY29uc3QgbWF4ID0gWy1JbmZpbml0eSwgLUluZmluaXR5LCAtSW5maW5pdHldO1xyXG4gICAgICAgICAgICB2ZXJ0ZXhDb3VudCA9IG9yaWdpbmFsUG9zaXRpb25zLmxlbmd0aCAvIDM7XHJcbiAgICAgICAgICAgIHZlcnRleFN0YXJ0ID0gMDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHZlcnRleFN0YXJ0OyBpIDwgdmVydGV4Q291bnQ7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxQb3NpdGlvbiA9IFZlY3RvcjMuRnJvbUFycmF5KG9yaWdpbmFsUG9zaXRpb25zLCBpICogMyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtb3JwaFBvc2l0aW9uID0gVmVjdG9yMy5Gcm9tQXJyYXkobW9ycGhQb3NpdGlvbnMsIGkgKiAzKTtcclxuICAgICAgICAgICAgICAgIG1vcnBoUG9zaXRpb24uc3VidHJhY3RUb1JlZihvcmlnaW5hbFBvc2l0aW9uLCBkaWZmZXJlbmNlKTtcclxuICAgICAgICAgICAgICAgIGRpZmZlcmVuY2UueCAqPSBmbGlwWDtcclxuXHJcbiAgICAgICAgICAgICAgICBtaW5bMF0gPSBNYXRoLm1pbihtaW5bMF0sIGRpZmZlcmVuY2UueCk7XHJcbiAgICAgICAgICAgICAgICBtYXhbMF0gPSBNYXRoLm1heChtYXhbMF0sIGRpZmZlcmVuY2UueCk7XHJcblxyXG4gICAgICAgICAgICAgICAgbWluWzFdID0gTWF0aC5taW4obWluWzFdLCBkaWZmZXJlbmNlLnkpO1xyXG4gICAgICAgICAgICAgICAgbWF4WzFdID0gTWF0aC5tYXgobWF4WzFdLCBkaWZmZXJlbmNlLnkpO1xyXG5cclxuICAgICAgICAgICAgICAgIG1pblsyXSA9IE1hdGgubWluKG1pblsyXSwgZGlmZmVyZW5jZS56KTtcclxuICAgICAgICAgICAgICAgIG1heFsyXSA9IE1hdGgubWF4KG1heFsyXSwgZGlmZmVyZW5jZS56KTtcclxuXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbkRhdGFbaSAqIDNdID0gZGlmZmVyZW5jZS54O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25EYXRhW2kgKiAzICsgMV0gPSBkaWZmZXJlbmNlLnk7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbkRhdGFbaSAqIDMgKyAyXSA9IGRpZmZlcmVuY2UuejtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgYnVmZmVyVmlldyA9IGJ1ZmZlck1hbmFnZXIuY3JlYXRlQnVmZmVyVmlldyhwb3NpdGlvbkRhdGEsIGZsb2F0U2l6ZSAqIDMpO1xyXG4gICAgICAgICAgICBjb25zdCBhY2Nlc3NvciA9IGJ1ZmZlck1hbmFnZXIuY3JlYXRlQWNjZXNzb3IoYnVmZmVyVmlldywgQWNjZXNzb3JUeXBlLlZFQzMsIEFjY2Vzc29yQ29tcG9uZW50VHlwZS5GTE9BVCwgbW9ycGhQb3NpdGlvbnMubGVuZ3RoIC8gMywgMCwgeyBtaW4sIG1heCB9KTtcclxuICAgICAgICAgICAgYWNjZXNzb3JzLnB1c2goYWNjZXNzb3IpO1xyXG4gICAgICAgICAgICByZXN1bHQuYXR0cmlidXRlc1tcIlBPU0lUSU9OXCJdID0gYWNjZXNzb3JzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgVG9vbHMuV2FybihgTW9ycGggdGFyZ2V0IHBvc2l0aW9ucyBmb3IgbWVzaCAke21lc2gubmFtZX0gd2VyZSBub3QgZXhwb3J0ZWQuIE1lc2ggZG9lcyBub3QgaGF2ZSBwb3NpdGlvbiB2ZXJ0ZXggZGF0YWApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAobW9ycGhUYXJnZXQuaGFzTm9ybWFscykge1xyXG4gICAgICAgIGNvbnN0IG1vcnBoTm9ybWFscyA9IG1vcnBoVGFyZ2V0LmdldE5vcm1hbHMoKSE7XHJcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxOb3JtYWxzID0gbWVzaC5nZXRWZXJ0aWNlc0RhdGEoVmVydGV4QnVmZmVyLk5vcm1hbEtpbmQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0cnVlKTtcclxuXHJcbiAgICAgICAgaWYgKG9yaWdpbmFsTm9ybWFscykge1xyXG4gICAgICAgICAgICBjb25zdCBub3JtYWxEYXRhID0gbmV3IEZsb2F0MzJBcnJheShvcmlnaW5hbE5vcm1hbHMubGVuZ3RoKTtcclxuICAgICAgICAgICAgdmVydGV4Q291bnQgPSBvcmlnaW5hbE5vcm1hbHMubGVuZ3RoIC8gMztcclxuICAgICAgICAgICAgdmVydGV4U3RhcnQgPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gdmVydGV4U3RhcnQ7IGkgPCB2ZXJ0ZXhDb3VudDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvcmlnaW5hbE5vcm1hbCA9IFZlY3RvcjMuRnJvbUFycmF5KG9yaWdpbmFsTm9ybWFscywgaSAqIDMpLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbW9ycGhOb3JtYWwgPSBWZWN0b3IzLkZyb21BcnJheShtb3JwaE5vcm1hbHMsIGkgKiAzKS5ub3JtYWxpemUoKTtcclxuICAgICAgICAgICAgICAgIG1vcnBoTm9ybWFsLnN1YnRyYWN0VG9SZWYob3JpZ2luYWxOb3JtYWwsIGRpZmZlcmVuY2UpO1xyXG5cclxuICAgICAgICAgICAgICAgIG5vcm1hbERhdGFbaSAqIDNdID0gZGlmZmVyZW5jZS54ICogZmxpcFg7XHJcbiAgICAgICAgICAgICAgICBub3JtYWxEYXRhW2kgKiAzICsgMV0gPSBkaWZmZXJlbmNlLnk7XHJcbiAgICAgICAgICAgICAgICBub3JtYWxEYXRhW2kgKiAzICsgMl0gPSBkaWZmZXJlbmNlLno7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGJ1ZmZlclZpZXcgPSBidWZmZXJNYW5hZ2VyLmNyZWF0ZUJ1ZmZlclZpZXcobm9ybWFsRGF0YSwgZmxvYXRTaXplICogMyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGFjY2Vzc29yID0gYnVmZmVyTWFuYWdlci5jcmVhdGVBY2Nlc3NvcihidWZmZXJWaWV3LCBBY2Nlc3NvclR5cGUuVkVDMywgQWNjZXNzb3JDb21wb25lbnRUeXBlLkZMT0FULCBtb3JwaE5vcm1hbHMubGVuZ3RoIC8gMywgMCk7XHJcbiAgICAgICAgICAgIGFjY2Vzc29ycy5wdXNoKGFjY2Vzc29yKTtcclxuICAgICAgICAgICAgcmVzdWx0LmF0dHJpYnV0ZXNbXCJOT1JNQUxcIl0gPSBhY2Nlc3NvcnMubGVuZ3RoIC0gMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBUb29scy5XYXJuKGBNb3JwaCB0YXJnZXQgbm9ybWFscyBmb3IgbWVzaCAke21lc2gubmFtZX0gd2VyZSBub3QgZXhwb3J0ZWQuIE1lc2ggZG9lcyBub3QgaGF2ZSBub3JtYWxzIHZlcnRleCBkYXRhYCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChtb3JwaFRhcmdldC5oYXNUYW5nZW50cykge1xyXG4gICAgICAgIGNvbnN0IG1vcnBoVGFuZ2VudHMgPSBtb3JwaFRhcmdldC5nZXRUYW5nZW50cygpITtcclxuICAgICAgICBjb25zdCBvcmlnaW5hbFRhbmdlbnRzID0gbWVzaC5nZXRWZXJ0aWNlc0RhdGEoVmVydGV4QnVmZmVyLlRhbmdlbnRLaW5kLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIGlmIChvcmlnaW5hbFRhbmdlbnRzKSB7XHJcbiAgICAgICAgICAgIHZlcnRleENvdW50ID0gb3JpZ2luYWxUYW5nZW50cy5sZW5ndGggLyA0O1xyXG4gICAgICAgICAgICBjb25zdCB0YW5nZW50RGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkodmVydGV4Q291bnQgKiAzKTtcclxuICAgICAgICAgICAgdmVydGV4U3RhcnQgPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gdmVydGV4U3RhcnQ7IGkgPCB2ZXJ0ZXhDb3VudDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBPbmx5IHJlYWQgdGhlIHgsIHksIHogY29tcG9uZW50cyBhbmQgaWdub3JlIHdcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsVGFuZ2VudCA9IFZlY3RvcjMuRnJvbUFycmF5KG9yaWdpbmFsVGFuZ2VudHMsIGkgKiA0KTtcclxuICAgICAgICAgICAgICAgIE5vcm1hbGl6ZVRhbmdlbnQob3JpZ2luYWxUYW5nZW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBNb3JwaCB0YXJnZXQgdGFuZ2VudHMgb21pdCB0aGUgdyBjb21wb25lbnQgc28gaXQgd29uJ3QgYmUgcHJlc2VudCBpbiB0aGUgZGF0YVxyXG4gICAgICAgICAgICAgICAgY29uc3QgbW9ycGhUYW5nZW50ID0gVmVjdG9yMy5Gcm9tQXJyYXkobW9ycGhUYW5nZW50cywgaSAqIDMpO1xyXG4gICAgICAgICAgICAgICAgTm9ybWFsaXplVGFuZ2VudChtb3JwaFRhbmdlbnQpO1xyXG5cclxuICAgICAgICAgICAgICAgIG1vcnBoVGFuZ2VudC5zdWJ0cmFjdFRvUmVmKG9yaWdpbmFsVGFuZ2VudCwgZGlmZmVyZW5jZSk7XHJcbiAgICAgICAgICAgICAgICB0YW5nZW50RGF0YVtpICogM10gPSBkaWZmZXJlbmNlLnggKiBmbGlwWDtcclxuICAgICAgICAgICAgICAgIHRhbmdlbnREYXRhW2kgKiAzICsgMV0gPSBkaWZmZXJlbmNlLnk7XHJcbiAgICAgICAgICAgICAgICB0YW5nZW50RGF0YVtpICogMyArIDJdID0gZGlmZmVyZW5jZS56O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGJ1ZmZlclZpZXcgPSBidWZmZXJNYW5hZ2VyLmNyZWF0ZUJ1ZmZlclZpZXcodGFuZ2VudERhdGEsIGZsb2F0U2l6ZSAqIDMpO1xyXG4gICAgICAgICAgICBjb25zdCBhY2Nlc3NvciA9IGJ1ZmZlck1hbmFnZXIuY3JlYXRlQWNjZXNzb3IoYnVmZmVyVmlldywgQWNjZXNzb3JUeXBlLlZFQzMsIEFjY2Vzc29yQ29tcG9uZW50VHlwZS5GTE9BVCwgdmVydGV4Q291bnQsIDApO1xyXG4gICAgICAgICAgICBhY2Nlc3NvcnMucHVzaChhY2Nlc3Nvcik7XHJcbiAgICAgICAgICAgIHJlc3VsdC5hdHRyaWJ1dGVzW1wiVEFOR0VOVFwiXSA9IGFjY2Vzc29ycy5sZW5ndGggLSAxO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIFRvb2xzLldhcm4oYE1vcnBoIHRhcmdldCB0YW5nZW50cyBmb3IgbWVzaCAke21lc2gubmFtZX0gd2VyZSBub3QgZXhwb3J0ZWQuIE1lc2ggZG9lcyBub3QgaGF2ZSB0YW5nZW50cyB2ZXJ0ZXggZGF0YWApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAobW9ycGhUYXJnZXQuaGFzQ29sb3JzKSB7XHJcbiAgICAgICAgY29uc3QgbW9ycGhDb2xvcnMgPSBtb3JwaFRhcmdldC5nZXRDb2xvcnMoKSE7XHJcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxDb2xvcnMgPSBtZXNoLmdldFZlcnRpY2VzRGF0YShWZXJ0ZXhCdWZmZXIuQ29sb3JLaW5kLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IG1lc2guZ2V0VmVydGV4QnVmZmVyKFZlcnRleEJ1ZmZlci5Db2xvcktpbmQsIHRydWUpO1xyXG5cclxuICAgICAgICBpZiAob3JpZ2luYWxDb2xvcnMgJiYgYnVmZmVyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudFNpemUgPSBidWZmZXIuZ2V0U2l6ZSgpO1xyXG5cclxuICAgICAgICAgICAgdmVydGV4Q291bnQgPSBvcmlnaW5hbENvbG9ycy5sZW5ndGggLyBjb21wb25lbnRTaXplO1xyXG4gICAgICAgICAgICBjb25zdCBjb2xvckRhdGEgPSBuZXcgRmxvYXQzMkFycmF5KHZlcnRleENvdW50ICogY29tcG9uZW50U2l6ZSk7XHJcbiAgICAgICAgICAgIHZlcnRleFN0YXJ0ID0gMDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHZlcnRleFN0YXJ0OyBpIDwgdmVydGV4Q291bnQ7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbXBvbmVudFNpemUgPT09IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcmlnaW5hbENvbG9yID0gVmVjdG9yMy5Gcm9tQXJyYXkob3JpZ2luYWxDb2xvcnMsIGkgKiBjb21wb25lbnRTaXplKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtb3JwaENvbG9yID0gVmVjdG9yMy5Gcm9tQXJyYXkobW9ycGhDb2xvcnMsIGkgKiBjb21wb25lbnRTaXplKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbW9ycGhDb2xvci5zdWJ0cmFjdFRvUmVmKG9yaWdpbmFsQ29sb3IsIGRpZmZlcmVuY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yRGF0YVtpICogM10gPSBkaWZmZXJlbmNlLng7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3JEYXRhW2kgKiAzICsgMV0gPSBkaWZmZXJlbmNlLnk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3JEYXRhW2kgKiAzICsgMl0gPSBkaWZmZXJlbmNlLno7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvbXBvbmVudFNpemUgPT09IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkaWZmZXJlbmNlNCA9IG5ldyBWZWN0b3I0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxDb2xvciA9IFZlY3RvcjQuRnJvbUFycmF5KG9yaWdpbmFsQ29sb3JzLCBpICogY29tcG9uZW50U2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9ycGhDb2xvciA9IFZlY3RvcjQuRnJvbUFycmF5KG1vcnBoQ29sb3JzLCBpICogY29tcG9uZW50U2l6ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG1vcnBoQ29sb3Iuc3VidHJhY3RUb1JlZihvcmlnaW5hbENvbG9yLCBkaWZmZXJlbmNlNCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3JEYXRhW2kgKiA0XSA9IGRpZmZlcmVuY2U0Lng7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3JEYXRhW2kgKiA0ICsgMV0gPSBkaWZmZXJlbmNlNC55O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yRGF0YVtpICogNCArIDJdID0gZGlmZmVyZW5jZTQuejtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvckRhdGFbaSAqIDQgKyAzXSA9IGRpZmZlcmVuY2U0Lnc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIFRvb2xzLldhcm4oYFVuc3VwcG9ydGVkIG51bWJlciBvZiBjb21wb25lbnRzIGZvciBjb2xvciBhdHRyaWJ1dGU6ICR7Y29tcG9uZW50U2l6ZX1gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBidWZmZXJWaWV3ID0gYnVmZmVyTWFuYWdlci5jcmVhdGVCdWZmZXJWaWV3KGNvbG9yRGF0YSwgZmxvYXRTaXplICogY29tcG9uZW50U2l6ZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGFjY2Vzc29yID0gYnVmZmVyTWFuYWdlci5jcmVhdGVBY2Nlc3NvcihidWZmZXJWaWV3LCBjb21wb25lbnRTaXplID09PSAzID8gQWNjZXNzb3JUeXBlLlZFQzMgOiBBY2Nlc3NvclR5cGUuVkVDNCwgQWNjZXNzb3JDb21wb25lbnRUeXBlLkZMT0FULCB2ZXJ0ZXhDb3VudCwgMCk7XHJcbiAgICAgICAgICAgIGFjY2Vzc29ycy5wdXNoKGFjY2Vzc29yKTtcclxuICAgICAgICAgICAgcmVzdWx0LmF0dHJpYnV0ZXNbXCJDT0xPUl8wXCJdID0gYWNjZXNzb3JzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgVG9vbHMuV2FybihgTW9ycGggdGFyZ2V0IGNvbG9ycyBmb3IgbWVzaCAke21lc2gubmFtZX0gd2VyZSBub3QgZXhwb3J0ZWQuIE1lc2ggZG9lcyBub3QgaGF2ZSBjb2xvcnMgdmVydGV4IGRhdGFgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG4iLCJpbXBvcnQgdHlwZSB7IE5vZGUgfSBmcm9tIFwiY29yZS9ub2RlXCI7XHJcbmltcG9ydCB0eXBlIHsgU2NlbmUgfSBmcm9tIFwiY29yZS9zY2VuZVwiO1xyXG5pbXBvcnQgdHlwZSB7IEFuaW1hdGlvbiB9IGZyb20gXCJjb3JlL0FuaW1hdGlvbnMvYW5pbWF0aW9uXCI7XHJcbmltcG9ydCB0eXBlIHsgR0xURkRhdGEgfSBmcm9tIFwiLi9nbFRGRGF0YVwiO1xyXG5pbXBvcnQgeyBHTFRGRXhwb3J0ZXIgfSBmcm9tIFwiLi9nbFRGRXhwb3J0ZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBNZXNoIGNvbXByZXNzaW9uIG1ldGhvZHMuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBNZXNoQ29tcHJlc3Npb25NZXRob2QgPSBcIk5vbmVcIiB8IFwiRHJhY29cIjtcclxuXHJcbi8qKlxyXG4gKiBIb2xkcyBhIGNvbGxlY3Rpb24gb2YgZXhwb3J0ZXIgb3B0aW9ucyBhbmQgcGFyYW1ldGVyc1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRXhwb3J0T3B0aW9ucyB7XHJcbiAgICAvKipcclxuICAgICAqIEZ1bmN0aW9uIHdoaWNoIGluZGljYXRlcyB3aGV0aGVyIGEgYmFieWxvbiBub2RlIHNob3VsZCBiZSBleHBvcnRlZCBvciBub3RcclxuICAgICAqIEBwYXJhbSBub2RlIHNvdXJjZSBCYWJ5bG9uIG5vZGUuIEl0IGlzIHVzZWQgdG8gY2hlY2sgd2hldGhlciBpdCBzaG91bGQgYmUgZXhwb3J0ZWQgdG8gZ2xURiBvciBub3RcclxuICAgICAqIEByZXR1cm5zIGJvb2xlYW4sIHdoaWNoIGluZGljYXRlcyB3aGV0aGVyIHRoZSBub2RlIHNob3VsZCBiZSBleHBvcnRlZCAodHJ1ZSkgb3Igbm90IChmYWxzZSlcclxuICAgICAqL1xyXG4gICAgc2hvdWxkRXhwb3J0Tm9kZT8obm9kZTogTm9kZSk6IGJvb2xlYW47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGdW5jdGlvbiB3aGljaCBpbmRpY2F0ZXMgd2hldGhlciBhbiBhbmltYXRpb24gb24gdGhlIHNjZW5lIHNob3VsZCBiZSBleHBvcnRlZCBvciBub3RcclxuICAgICAqIEBwYXJhbSBhbmltYXRpb24gc291cmNlIGFuaW1hdGlvblxyXG4gICAgICogQHJldHVybnMgYm9vbGVhbiwgd2hpY2ggaW5kaWNhdGVzIHdoZXRoZXIgdGhlIGFuaW1hdGlvbiBzaG91bGQgYmUgZXhwb3J0ZWQgKHRydWUpIG9yIG5vdCAoZmFsc2UpXHJcbiAgICAgKi9cclxuICAgIHNob3VsZEV4cG9ydEFuaW1hdGlvbj8oYW5pbWF0aW9uOiBBbmltYXRpb24pOiBib29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRnVuY3Rpb24gdXNlZCB0byBleHRyYWN0IHRoZSBwYXJ0IG9mIG5vZGUncyBtZXRhZGF0YSB0aGF0IHdpbGwgYmUgZXhwb3J0ZWQgaW50byBnbFRGIG5vZGUgZXh0cmFzXHJcbiAgICAgKiBAcGFyYW0gbWV0YWRhdGEgc291cmNlIG1ldGFkYXRhIHRvIHJlYWQgZnJvbVxyXG4gICAgICogQHJldHVybnMgdGhlIGRhdGEgdG8gc3RvcmUgdG8gZ2xURiBub2RlIGV4dHJhc1xyXG4gICAgICovXHJcbiAgICBtZXRhZGF0YVNlbGVjdG9yPyhtZXRhZGF0YTogYW55KTogYW55O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHNhbXBsZSByYXRlIHRvIGJha2UgYW5pbWF0aW9uIGN1cnZlcy4gRGVmYXVsdHMgdG8gMSAvIDYwLlxyXG4gICAgICovXHJcbiAgICBhbmltYXRpb25TYW1wbGVSYXRlPzogbnVtYmVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQmVnaW4gc2VyaWFsaXphdGlvbiB3aXRob3V0IHdhaXRpbmcgZm9yIHRoZSBzY2VuZSB0byBiZSByZWFkeS4gRGVmYXVsdHMgdG8gZmFsc2UuXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydFdpdGhvdXRXYWl0aW5nRm9yU2NlbmU/OiBib29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5kaWNhdGVzIGlmIHVudXNlZCB2ZXJ0ZXggdXYgYXR0cmlidXRlcyBzaG91bGQgYmUgaW5jbHVkZWQgaW4gZXhwb3J0LiBEZWZhdWx0cyB0byBmYWxzZS5cclxuICAgICAqL1xyXG4gICAgZXhwb3J0VW51c2VkVVZzPzogYm9vbGVhbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZSBuby1vcCByb290IG5vZGVzIHdoZW4gcG9zc2libGUuIERlZmF1bHRzIHRvIHRydWUuXHJcbiAgICAgKi9cclxuICAgIHJlbW92ZU5vb3BSb290Tm9kZXM/OiBib29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5kaWNhdGVzIGlmIGNvb3JkaW5hdGUgc3lzdGVtIHN3YXBwaW5nIHJvb3Qgbm9kZXMgc2hvdWxkIGJlIGluY2x1ZGVkIGluIGV4cG9ydC4gRGVmYXVsdHMgdG8gZmFsc2UuXHJcbiAgICAgKiBAZGVwcmVjYXRlZCBQbGVhc2UgdXNlIHJlbW92ZU5vb3BSb290Tm9kZXMgaW5zdGVhZFxyXG4gICAgICovXHJcbiAgICBpbmNsdWRlQ29vcmRpbmF0ZVN5c3RlbUNvbnZlcnNpb25Ob2Rlcz86IGJvb2xlYW47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbmRpY2F0ZXMgd2hhdCBjb21wcmVzc2lvbiBtZXRob2QgdG8gYXBwbHkgdG8gbWVzaCBkYXRhLlxyXG4gICAgICovXHJcbiAgICBtZXNoQ29tcHJlc3Npb25NZXRob2Q/OiBNZXNoQ29tcHJlc3Npb25NZXRob2Q7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDbGFzcyBmb3IgZ2VuZXJhdGluZyBnbFRGIGRhdGEgZnJvbSBhIEJhYnlsb24gc2NlbmUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgR0xURjJFeHBvcnQge1xyXG4gICAgLyoqXHJcbiAgICAgKiBFeHBvcnRzIHRoZSBzY2VuZSB0byAuZ2x0ZiBmaWxlIGZvcm1hdFxyXG4gICAgICogQHBhcmFtIHNjZW5lIEJhYnlsb24gc2NlbmVcclxuICAgICAqIEBwYXJhbSBmaWxlTmFtZSBOYW1lIHRvIHVzZSBmb3IgdGhlIC5nbHRmIGZpbGVcclxuICAgICAqIEBwYXJhbSBvcHRpb25zIEV4cG9ydGVyIG9wdGlvbnNcclxuICAgICAqIEByZXR1cm5zIFJldHVybnMgdGhlIGV4cG9ydGVkIGRhdGFcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBHTFRGQXN5bmMoc2NlbmU6IFNjZW5lLCBmaWxlTmFtZTogc3RyaW5nLCBvcHRpb25zPzogSUV4cG9ydE9wdGlvbnMpOiBQcm9taXNlPEdMVEZEYXRhPiB7XHJcbiAgICAgICAgaWYgKCFvcHRpb25zIHx8ICFvcHRpb25zLmV4cG9ydFdpdGhvdXRXYWl0aW5nRm9yU2NlbmUpIHtcclxuICAgICAgICAgICAgYXdhaXQgc2NlbmUud2hlblJlYWR5QXN5bmMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGV4cG9ydGVyID0gbmV3IEdMVEZFeHBvcnRlcihzY2VuZSwgb3B0aW9ucyk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGV4cG9ydGVyLmdlbmVyYXRlR0xURkFzeW5jKGZpbGVOYW1lLnJlcGxhY2UoL1xcLlteLy5dKyQvLCBcIlwiKSk7XHJcbiAgICAgICAgZXhwb3J0ZXIuZGlzcG9zZSgpO1xyXG5cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEV4cG9ydHMgdGhlIHNjZW5lIHRvIC5nbGIgZmlsZSBmb3JtYXRcclxuICAgICAqIEBwYXJhbSBzY2VuZSBCYWJ5bG9uIHNjZW5lXHJcbiAgICAgKiBAcGFyYW0gZmlsZU5hbWUgTmFtZSB0byB1c2UgZm9yIHRoZSAuZ2xiIGZpbGVcclxuICAgICAqIEBwYXJhbSBvcHRpb25zIEV4cG9ydGVyIG9wdGlvbnNcclxuICAgICAqIEByZXR1cm5zIFJldHVybnMgdGhlIGV4cG9ydGVkIGRhdGFcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBHTEJBc3luYyhzY2VuZTogU2NlbmUsIGZpbGVOYW1lOiBzdHJpbmcsIG9wdGlvbnM/OiBJRXhwb3J0T3B0aW9ucyk6IFByb21pc2U8R0xURkRhdGE+IHtcclxuICAgICAgICBpZiAoIW9wdGlvbnMgfHwgIW9wdGlvbnMuZXhwb3J0V2l0aG91dFdhaXRpbmdGb3JTY2VuZSkge1xyXG4gICAgICAgICAgICBhd2FpdCBzY2VuZS53aGVuUmVhZHlBc3luYygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZXhwb3J0ZXIgPSBuZXcgR0xURkV4cG9ydGVyKHNjZW5lLCBvcHRpb25zKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZXhwb3J0ZXIuZ2VuZXJhdGVHTEJBc3luYyhmaWxlTmFtZS5yZXBsYWNlKC9cXC5bXi8uXSskLywgXCJcIikpO1xyXG4gICAgICAgIGV4cG9ydGVyLmRpc3Bvc2UoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUganNkb2MvcmVxdWlyZS1qc2RvYyAqL1xyXG5cclxuaW1wb3J0IHR5cGUgeyBJTm9kZSB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgQWNjZXNzb3JUeXBlLCBNZXNoUHJpbWl0aXZlTW9kZSB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHR5cGUgeyBGbG9hdEFycmF5LCBEYXRhQXJyYXksIEluZGljZXNBcnJheSB9IGZyb20gXCJjb3JlL3R5cGVzXCI7XHJcbmltcG9ydCB0eXBlIHsgVmVjdG9yNCB9IGZyb20gXCJjb3JlL01hdGhzL21hdGgudmVjdG9yXCI7XHJcbmltcG9ydCB7IFF1YXRlcm5pb24sIFRtcFZlY3RvcnMsIE1hdHJpeCwgVmVjdG9yMyB9IGZyb20gXCJjb3JlL01hdGhzL21hdGgudmVjdG9yXCI7XHJcbmltcG9ydCB7IFZlcnRleEJ1ZmZlciB9IGZyb20gXCJjb3JlL0J1ZmZlcnMvYnVmZmVyXCI7XHJcbmltcG9ydCB7IE1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IFRyYW5zZm9ybU5vZGUgfSBmcm9tIFwiY29yZS9NZXNoZXMvdHJhbnNmb3JtTm9kZVwiO1xyXG5pbXBvcnQgeyBNZXNoIH0gZnJvbSBcImNvcmUvTWVzaGVzL21lc2hcIjtcclxuaW1wb3J0IHsgSW5zdGFuY2VkTWVzaCB9IGZyb20gXCJjb3JlL01lc2hlcy9pbnN0YW5jZWRNZXNoXCI7XHJcbmltcG9ydCB7IEVudW1lcmF0ZUZsb2F0VmFsdWVzIH0gZnJvbSBcImNvcmUvQnVmZmVycy9idWZmZXJVdGlsc1wiO1xyXG5pbXBvcnQgdHlwZSB7IE5vZGUgfSBmcm9tIFwiY29yZS9ub2RlXCI7XHJcblxyXG4vLyBNYXRyaXggdGhhdCBjb252ZXJ0cyBoYW5kZWRuZXNzIG9uIHRoZSBYLWF4aXMuXHJcbmNvbnN0IGNvbnZlcnRIYW5kZWRuZXNzTWF0cml4ID0gTWF0cml4LkNvbXBvc2UobmV3IFZlY3RvcjMoLTEsIDEsIDEpLCBRdWF0ZXJuaW9uLklkZW50aXR5KCksIFZlY3RvcjMuWmVybygpKTtcclxuXHJcbi8vIDE4MCBkZWdyZWVzIHJvdGF0aW9uIGluIFkuXHJcbmNvbnN0IHJvdGF0aW9uMTgwWSA9IG5ldyBRdWF0ZXJuaW9uKDAsIDEsIDAsIDApO1xyXG5cclxuLy8gRGVmYXVsdCB2YWx1ZXMgZm9yIGNvbXBhcmlzb24uXHJcbmNvbnN0IGVwc2lsb24gPSAxZS02O1xyXG5jb25zdCBkZWZhdWx0VHJhbnNsYXRpb24gPSBWZWN0b3IzLlplcm8oKTtcclxuY29uc3QgZGVmYXVsdFNjYWxlID0gVmVjdG9yMy5PbmUoKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHZXRBY2Nlc3NvckVsZW1lbnRDb3VudChhY2Nlc3NvclR5cGU6IEFjY2Vzc29yVHlwZSk6IG51bWJlciB7XHJcbiAgICBzd2l0Y2ggKGFjY2Vzc29yVHlwZSkge1xyXG4gICAgICAgIGNhc2UgQWNjZXNzb3JUeXBlLk1BVDI6XHJcbiAgICAgICAgICAgIHJldHVybiA0O1xyXG4gICAgICAgIGNhc2UgQWNjZXNzb3JUeXBlLk1BVDM6XHJcbiAgICAgICAgICAgIHJldHVybiA5O1xyXG4gICAgICAgIGNhc2UgQWNjZXNzb3JUeXBlLk1BVDQ6XHJcbiAgICAgICAgICAgIHJldHVybiAxNjtcclxuICAgICAgICBjYXNlIEFjY2Vzc29yVHlwZS5TQ0FMQVI6XHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIGNhc2UgQWNjZXNzb3JUeXBlLlZFQzI6XHJcbiAgICAgICAgICAgIHJldHVybiAyO1xyXG4gICAgICAgIGNhc2UgQWNjZXNzb3JUeXBlLlZFQzM6XHJcbiAgICAgICAgICAgIHJldHVybiAzO1xyXG4gICAgICAgIGNhc2UgQWNjZXNzb3JUeXBlLlZFQzQ6XHJcbiAgICAgICAgICAgIHJldHVybiA0O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRmxvYXRzTmVlZDE2Qml0SW50ZWdlcihmbG9hdEFycmF5OiBGbG9hdEFycmF5KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZmxvYXRBcnJheS5zb21lKCh2YWx1ZSkgPT4gdmFsdWUgPj0gMjU2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIElzU3RhbmRhcmRWZXJ0ZXhBdHRyaWJ1dGUodHlwZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5Qb3NpdGlvbktpbmQ6XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuTm9ybWFsS2luZDpcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5UYW5nZW50S2luZDpcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5Db2xvcktpbmQ6XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuTWF0cmljZXNJbmRpY2VzS2luZDpcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5NYXRyaWNlc0luZGljZXNFeHRyYUtpbmQ6XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuTWF0cmljZXNXZWlnaHRzS2luZDpcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5NYXRyaWNlc1dlaWdodHNFeHRyYUtpbmQ6XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuVVZLaW5kOlxyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLlVWMktpbmQ6XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuVVYzS2luZDpcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5VVjRLaW5kOlxyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLlVWNUtpbmQ6XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuVVY2S2luZDpcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHZXRBY2Nlc3NvclR5cGUoa2luZDogc3RyaW5nLCBoYXNWZXJ0ZXhDb2xvckFscGhhOiBib29sZWFuKTogQWNjZXNzb3JUeXBlIHtcclxuICAgIGlmIChraW5kID09IFZlcnRleEJ1ZmZlci5Db2xvcktpbmQpIHtcclxuICAgICAgICByZXR1cm4gaGFzVmVydGV4Q29sb3JBbHBoYSA/IEFjY2Vzc29yVHlwZS5WRUM0IDogQWNjZXNzb3JUeXBlLlZFQzM7XHJcbiAgICB9XHJcblxyXG4gICAgc3dpdGNoIChraW5kKSB7XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuUG9zaXRpb25LaW5kOlxyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLk5vcm1hbEtpbmQ6XHJcbiAgICAgICAgICAgIHJldHVybiBBY2Nlc3NvclR5cGUuVkVDMztcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5UYW5nZW50S2luZDpcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5NYXRyaWNlc0luZGljZXNLaW5kOlxyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLk1hdHJpY2VzSW5kaWNlc0V4dHJhS2luZDpcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5NYXRyaWNlc1dlaWdodHNLaW5kOlxyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLk1hdHJpY2VzV2VpZ2h0c0V4dHJhS2luZDpcclxuICAgICAgICAgICAgcmV0dXJuIEFjY2Vzc29yVHlwZS5WRUM0O1xyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLlVWS2luZDpcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5VVjJLaW5kOlxyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLlVWM0tpbmQ6XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuVVY0S2luZDpcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5VVjVLaW5kOlxyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLlVWNktpbmQ6XHJcbiAgICAgICAgICAgIHJldHVybiBBY2Nlc3NvclR5cGUuVkVDMjtcclxuICAgIH1cclxuXHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24ga2luZCAke2tpbmR9YCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHZXRBdHRyaWJ1dGVUeXBlKGtpbmQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBzd2l0Y2ggKGtpbmQpIHtcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5Qb3NpdGlvbktpbmQ6XHJcbiAgICAgICAgICAgIHJldHVybiBcIlBPU0lUSU9OXCI7XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuTm9ybWFsS2luZDpcclxuICAgICAgICAgICAgcmV0dXJuIFwiTk9STUFMXCI7XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuVGFuZ2VudEtpbmQ6XHJcbiAgICAgICAgICAgIHJldHVybiBcIlRBTkdFTlRcIjtcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5Db2xvcktpbmQ6XHJcbiAgICAgICAgICAgIHJldHVybiBcIkNPTE9SXzBcIjtcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5VVktpbmQ6XHJcbiAgICAgICAgICAgIHJldHVybiBcIlRFWENPT1JEXzBcIjtcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5VVjJLaW5kOlxyXG4gICAgICAgICAgICByZXR1cm4gXCJURVhDT09SRF8xXCI7XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuVVYzS2luZDpcclxuICAgICAgICAgICAgcmV0dXJuIFwiVEVYQ09PUkRfMlwiO1xyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLlVWNEtpbmQ6XHJcbiAgICAgICAgICAgIHJldHVybiBcIlRFWENPT1JEXzNcIjtcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5VVjVLaW5kOlxyXG4gICAgICAgICAgICByZXR1cm4gXCJURVhDT09SRF80XCI7XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuVVY2S2luZDpcclxuICAgICAgICAgICAgcmV0dXJuIFwiVEVYQ09PUkRfNVwiO1xyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLk1hdHJpY2VzSW5kaWNlc0tpbmQ6XHJcbiAgICAgICAgICAgIHJldHVybiBcIkpPSU5UU18wXCI7XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuTWF0cmljZXNJbmRpY2VzRXh0cmFLaW5kOlxyXG4gICAgICAgICAgICByZXR1cm4gXCJKT0lOVFNfMVwiO1xyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLk1hdHJpY2VzV2VpZ2h0c0tpbmQ6XHJcbiAgICAgICAgICAgIHJldHVybiBcIldFSUdIVFNfMFwiO1xyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLk1hdHJpY2VzV2VpZ2h0c0V4dHJhS2luZDpcclxuICAgICAgICAgICAgcmV0dXJuIFwiV0VJR0hUU18xXCI7XHJcbiAgICB9XHJcblxyXG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGtpbmQ6ICR7a2luZH1gKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdldFByaW1pdGl2ZU1vZGUoZmlsbE1vZGU6IG51bWJlcik6IE1lc2hQcmltaXRpdmVNb2RlIHtcclxuICAgIHN3aXRjaCAoZmlsbE1vZGUpIHtcclxuICAgICAgICBjYXNlIE1hdGVyaWFsLlRyaWFuZ2xlRmlsbE1vZGU6XHJcbiAgICAgICAgICAgIHJldHVybiBNZXNoUHJpbWl0aXZlTW9kZS5UUklBTkdMRVM7XHJcbiAgICAgICAgY2FzZSBNYXRlcmlhbC5UcmlhbmdsZVN0cmlwRHJhd01vZGU6XHJcbiAgICAgICAgICAgIHJldHVybiBNZXNoUHJpbWl0aXZlTW9kZS5UUklBTkdMRV9TVFJJUDtcclxuICAgICAgICBjYXNlIE1hdGVyaWFsLlRyaWFuZ2xlRmFuRHJhd01vZGU6XHJcbiAgICAgICAgICAgIHJldHVybiBNZXNoUHJpbWl0aXZlTW9kZS5UUklBTkdMRV9GQU47XHJcbiAgICAgICAgY2FzZSBNYXRlcmlhbC5Qb2ludExpc3REcmF3TW9kZTpcclxuICAgICAgICBjYXNlIE1hdGVyaWFsLlBvaW50RmlsbE1vZGU6XHJcbiAgICAgICAgICAgIHJldHVybiBNZXNoUHJpbWl0aXZlTW9kZS5QT0lOVFM7XHJcbiAgICAgICAgY2FzZSBNYXRlcmlhbC5MaW5lTG9vcERyYXdNb2RlOlxyXG4gICAgICAgICAgICByZXR1cm4gTWVzaFByaW1pdGl2ZU1vZGUuTElORV9MT09QO1xyXG4gICAgICAgIGNhc2UgTWF0ZXJpYWwuTGluZUxpc3REcmF3TW9kZTpcclxuICAgICAgICAgICAgcmV0dXJuIE1lc2hQcmltaXRpdmVNb2RlLkxJTkVTO1xyXG4gICAgICAgIGNhc2UgTWF0ZXJpYWwuTGluZVN0cmlwRHJhd01vZGU6XHJcbiAgICAgICAgICAgIHJldHVybiBNZXNoUHJpbWl0aXZlTW9kZS5MSU5FX1NUUklQO1xyXG4gICAgfVxyXG5cclxuICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBmaWxsIG1vZGU6ICR7ZmlsbE1vZGV9YCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBJc1RyaWFuZ2xlRmlsbE1vZGUoZmlsbE1vZGU6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgc3dpdGNoIChmaWxsTW9kZSkge1xyXG4gICAgICAgIGNhc2UgTWF0ZXJpYWwuVHJpYW5nbGVGaWxsTW9kZTpcclxuICAgICAgICBjYXNlIE1hdGVyaWFsLlRyaWFuZ2xlU3RyaXBEcmF3TW9kZTpcclxuICAgICAgICBjYXNlIE1hdGVyaWFsLlRyaWFuZ2xlRmFuRHJhd01vZGU6XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE5vcm1hbGl6ZVRhbmdlbnQodGFuZ2VudDogVmVjdG9yNCB8IFZlY3RvcjMpIHtcclxuICAgIGNvbnN0IGxlbmd0aCA9IE1hdGguc3FydCh0YW5nZW50LnggKiB0YW5nZW50LnggKyB0YW5nZW50LnkgKiB0YW5nZW50LnkgKyB0YW5nZW50LnogKiB0YW5nZW50LnopO1xyXG4gICAgaWYgKGxlbmd0aCA+IDApIHtcclxuICAgICAgICB0YW5nZW50LnggLz0gbGVuZ3RoO1xyXG4gICAgICAgIHRhbmdlbnQueSAvPSBsZW5ndGg7XHJcbiAgICAgICAgdGFuZ2VudC56IC89IGxlbmd0aDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENvbnZlcnRUb1JpZ2h0SGFuZGVkUG9zaXRpb24odmFsdWU6IFZlY3RvcjMpOiBWZWN0b3IzIHtcclxuICAgIHZhbHVlLnggKj0gLTE7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDb252ZXJ0VG9SaWdodEhhbmRlZFJvdGF0aW9uKHZhbHVlOiBRdWF0ZXJuaW9uKTogUXVhdGVybmlvbiB7XHJcbiAgICB2YWx1ZS54ICo9IC0xO1xyXG4gICAgdmFsdWUueSAqPSAtMTtcclxuICAgIHJldHVybiB2YWx1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENvbnZlcnRUb1JpZ2h0SGFuZGVkTm9kZSh2YWx1ZTogSU5vZGUpIHtcclxuICAgIGxldCB0cmFuc2xhdGlvbiA9IFZlY3RvcjMuRnJvbUFycmF5VG9SZWYodmFsdWUudHJhbnNsYXRpb24gfHwgWzAsIDAsIDBdLCAwLCBUbXBWZWN0b3JzLlZlY3RvcjNbMF0pO1xyXG4gICAgbGV0IHJvdGF0aW9uID0gUXVhdGVybmlvbi5Gcm9tQXJyYXlUb1JlZih2YWx1ZS5yb3RhdGlvbiB8fCBbMCwgMCwgMCwgMV0sIDAsIFRtcFZlY3RvcnMuUXVhdGVybmlvblswXSk7XHJcblxyXG4gICAgdHJhbnNsYXRpb24gPSBDb252ZXJ0VG9SaWdodEhhbmRlZFBvc2l0aW9uKHRyYW5zbGF0aW9uKTtcclxuICAgIHJvdGF0aW9uID0gQ29udmVydFRvUmlnaHRIYW5kZWRSb3RhdGlvbihyb3RhdGlvbik7XHJcblxyXG4gICAgaWYgKHRyYW5zbGF0aW9uLmVxdWFsc1dpdGhFcHNpbG9uKGRlZmF1bHRUcmFuc2xhdGlvbiwgZXBzaWxvbikpIHtcclxuICAgICAgICBkZWxldGUgdmFsdWUudHJhbnNsYXRpb247XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhbHVlLnRyYW5zbGF0aW9uID0gdHJhbnNsYXRpb24uYXNBcnJheSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChRdWF0ZXJuaW9uLklzSWRlbnRpdHkocm90YXRpb24pKSB7XHJcbiAgICAgICAgZGVsZXRlIHZhbHVlLnJvdGF0aW9uO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB2YWx1ZS5yb3RhdGlvbiA9IHJvdGF0aW9uLmFzQXJyYXkoKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFJvdGF0aW9uIGJ5IDE4MCBhcyBnbFRGIGhhcyBhIGRpZmZlcmVudCBjb252ZW50aW9uIHRoYW4gQmFieWxvbi5cclxuICogQHBhcmFtIHJvdGF0aW9uIFRhcmdldCBjYW1lcmEgcm90YXRpb24uXHJcbiAqIEByZXR1cm5zIFJlZiB0byBjYW1lcmEgcm90YXRpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gQ29udmVydENhbWVyYVJvdGF0aW9uVG9HTFRGKHJvdGF0aW9uOiBRdWF0ZXJuaW9uKTogUXVhdGVybmlvbiB7XHJcbiAgICByZXR1cm4gcm90YXRpb24ubXVsdGlwbHlJblBsYWNlKHJvdGF0aW9uMTgwWSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBSb3RhdGVOb2RlMTgwWShub2RlOiBJTm9kZSkge1xyXG4gICAgY29uc3Qgcm90YXRpb24gPSBRdWF0ZXJuaW9uLkZyb21BcnJheVRvUmVmKG5vZGUucm90YXRpb24gfHwgWzAsIDAsIDAsIDFdLCAwLCBUbXBWZWN0b3JzLlF1YXRlcm5pb25bMV0pO1xyXG4gICAgcm90YXRpb24xODBZLm11bHRpcGx5VG9SZWYocm90YXRpb24sIHJvdGF0aW9uKTtcclxuICAgIG5vZGUucm90YXRpb24gPSByb3RhdGlvbi5hc0FycmF5KCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb2xsYXBzZXMgR0xURiBwYXJlbnQgYW5kIG5vZGUgaW50byBhIHNpbmdsZSBub2RlLiBUaGlzIGlzIHVzZWZ1bCBmb3IgcmVtb3Zpbmcgbm9kZXMgdGhhdCB3ZXJlIGFkZGVkIGJ5IHRoZSBHTFRGIGltcG9ydGVyLlxyXG4gKiBAcGFyYW0gbm9kZSBUYXJnZXQgcGFyZW50IG5vZGUuXHJcbiAqIEBwYXJhbSBwYXJlbnROb2RlIE9yaWdpbmFsIEdMVEYgbm9kZSAoTGlnaHQgb3IgQ2FtZXJhKS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBDb2xsYXBzZVBhcmVudE5vZGUobm9kZTogSU5vZGUsIHBhcmVudE5vZGU6IElOb2RlKSB7XHJcbiAgICBjb25zdCBwYXJlbnRUcmFuc2xhdGlvbiA9IFZlY3RvcjMuRnJvbUFycmF5VG9SZWYocGFyZW50Tm9kZS50cmFuc2xhdGlvbiB8fCBbMCwgMCwgMF0sIDAsIFRtcFZlY3RvcnMuVmVjdG9yM1swXSk7XHJcbiAgICBjb25zdCBwYXJlbnRSb3RhdGlvbiA9IFF1YXRlcm5pb24uRnJvbUFycmF5VG9SZWYocGFyZW50Tm9kZS5yb3RhdGlvbiB8fCBbMCwgMCwgMCwgMV0sIDAsIFRtcFZlY3RvcnMuUXVhdGVybmlvblswXSk7XHJcbiAgICBjb25zdCBwYXJlbnRTY2FsZSA9IFZlY3RvcjMuRnJvbUFycmF5VG9SZWYocGFyZW50Tm9kZS5zY2FsZSB8fCBbMSwgMSwgMV0sIDAsIFRtcFZlY3RvcnMuVmVjdG9yM1sxXSk7XHJcbiAgICBjb25zdCBwYXJlbnRNYXRyaXggPSBNYXRyaXguQ29tcG9zZVRvUmVmKHBhcmVudFNjYWxlLCBwYXJlbnRSb3RhdGlvbiwgcGFyZW50VHJhbnNsYXRpb24sIFRtcFZlY3RvcnMuTWF0cml4WzBdKTtcclxuXHJcbiAgICBjb25zdCB0cmFuc2xhdGlvbiA9IFZlY3RvcjMuRnJvbUFycmF5VG9SZWYobm9kZS50cmFuc2xhdGlvbiB8fCBbMCwgMCwgMF0sIDAsIFRtcFZlY3RvcnMuVmVjdG9yM1syXSk7XHJcbiAgICBjb25zdCByb3RhdGlvbiA9IFF1YXRlcm5pb24uRnJvbUFycmF5VG9SZWYobm9kZS5yb3RhdGlvbiB8fCBbMCwgMCwgMCwgMV0sIDAsIFRtcFZlY3RvcnMuUXVhdGVybmlvblsxXSk7XHJcbiAgICBjb25zdCBzY2FsZSA9IFZlY3RvcjMuRnJvbUFycmF5VG9SZWYobm9kZS5zY2FsZSB8fCBbMSwgMSwgMV0sIDAsIFRtcFZlY3RvcnMuVmVjdG9yM1sxXSk7XHJcbiAgICBjb25zdCBtYXRyaXggPSBNYXRyaXguQ29tcG9zZVRvUmVmKHNjYWxlLCByb3RhdGlvbiwgdHJhbnNsYXRpb24sIFRtcFZlY3RvcnMuTWF0cml4WzFdKTtcclxuXHJcbiAgICBwYXJlbnRNYXRyaXgubXVsdGlwbHlUb1JlZihtYXRyaXgsIG1hdHJpeCk7XHJcbiAgICBtYXRyaXguZGVjb21wb3NlKHBhcmVudFNjYWxlLCBwYXJlbnRSb3RhdGlvbiwgcGFyZW50VHJhbnNsYXRpb24pO1xyXG5cclxuICAgIGlmIChwYXJlbnRUcmFuc2xhdGlvbi5lcXVhbHNXaXRoRXBzaWxvbihkZWZhdWx0VHJhbnNsYXRpb24sIGVwc2lsb24pKSB7XHJcbiAgICAgICAgZGVsZXRlIHBhcmVudE5vZGUudHJhbnNsYXRpb247XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHBhcmVudE5vZGUudHJhbnNsYXRpb24gPSBwYXJlbnRUcmFuc2xhdGlvbi5hc0FycmF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKFF1YXRlcm5pb24uSXNJZGVudGl0eShwYXJlbnRSb3RhdGlvbikpIHtcclxuICAgICAgICBkZWxldGUgcGFyZW50Tm9kZS5yb3RhdGlvbjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcGFyZW50Tm9kZS5yb3RhdGlvbiA9IHBhcmVudFJvdGF0aW9uLmFzQXJyYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocGFyZW50U2NhbGUuZXF1YWxzV2l0aEVwc2lsb24oZGVmYXVsdFNjYWxlLCBlcHNpbG9uKSkge1xyXG4gICAgICAgIGRlbGV0ZSBwYXJlbnROb2RlLnNjYWxlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBwYXJlbnROb2RlLnNjYWxlID0gcGFyZW50U2NhbGUuYXNBcnJheSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogU29tZXRpbWVzIHRoZSBHTFRGIEltcG9ydGVyIGNhbiBhZGQgZXh0cmEgdHJhbnNmb3JtIG5vZGVzIChmb3IgbGlnaHRzIGFuZCBjYW1lcmFzKS4gVGhpcyBjaGVja3MgaWYgYSBwYXJlbnQgbm9kZSB3YXMgYWRkZWQgYnkgdGhlIEdMVEYgSW1wb3J0ZXIuIElmIHNvLCBpdCBzaG91bGQgYmUgcmVtb3ZlZCBkdXJpbmcgc2VyaWFsaXphdGlvbi5cclxuICogQHBhcmFtIGJhYnlsb25Ob2RlIE9yaWdpbmFsIEdMVEYgbm9kZSAoTGlnaHQgb3IgQ2FtZXJhKS5cclxuICogQHBhcmFtIHBhcmVudEJhYnlsb25Ob2RlIFRhcmdldCBwYXJlbnQgbm9kZS5cclxuICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgcGFyZW50IG5vZGUgd2FzIGFkZGVkIGJ5IHRoZSBHTFRGIGltcG9ydGVyLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIElzUGFyZW50QWRkZWRCeUltcG9ydGVyKGJhYnlsb25Ob2RlOiBOb2RlLCBwYXJlbnRCYWJ5bG9uTm9kZTogTm9kZSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHBhcmVudEJhYnlsb25Ob2RlIGluc3RhbmNlb2YgVHJhbnNmb3JtTm9kZSAmJiBwYXJlbnRCYWJ5bG9uTm9kZS5nZXRDaGlsZHJlbigpLmxlbmd0aCA9PSAxICYmIGJhYnlsb25Ob2RlLmdldENoaWxkcmVuKCkubGVuZ3RoID09IDA7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBJc05vb3BOb2RlKG5vZGU6IE5vZGUsIHVzZVJpZ2h0SGFuZGVkU3lzdGVtOiBib29sZWFuKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIShub2RlIGluc3RhbmNlb2YgVHJhbnNmb3JtTm9kZSkpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVHJhbnNmb3JtXHJcbiAgICBpZiAodXNlUmlnaHRIYW5kZWRTeXN0ZW0pIHtcclxuICAgICAgICBjb25zdCBtYXRyaXggPSBub2RlLmdldFdvcmxkTWF0cml4KCk7XHJcbiAgICAgICAgaWYgKCFtYXRyaXguaXNJZGVudGl0eSgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IG1hdHJpeCA9IG5vZGUuZ2V0V29ybGRNYXRyaXgoKS5tdWx0aXBseVRvUmVmKGNvbnZlcnRIYW5kZWRuZXNzTWF0cml4LCBUbXBWZWN0b3JzLk1hdHJpeFswXSk7XHJcbiAgICAgICAgaWYgKCFtYXRyaXguaXNJZGVudGl0eSgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2VvbWV0cnlcclxuICAgIGlmICgobm9kZSBpbnN0YW5jZW9mIE1lc2ggJiYgbm9kZS5nZW9tZXRyeSkgfHwgKG5vZGUgaW5zdGFuY2VvZiBJbnN0YW5jZWRNZXNoICYmIG5vZGUuc291cmNlTWVzaC5nZW9tZXRyeSkpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBhbiBJbmRpY2VzQXJyYXkgaW50byBlaXRoZXIgVWludDMyQXJyYXkgb3IgVWludDE2QXJyYXksIG9ubHkgY29weWluZyBpZiB0aGUgZGF0YSBpcyBudW1iZXJbXS5cclxuICogQHBhcmFtIGluZGljZXMgaW5wdXQgYXJyYXkgdG8gYmUgY29udmVydGVkXHJcbiAqIEBwYXJhbSBzdGFydCBzdGFydGluZyBpbmRleCB0byBjb3B5IGZyb21cclxuICogQHBhcmFtIGNvdW50IG51bWJlciBvZiBpbmRpY2VzIHRvIGNvcHlcclxuICogQHJldHVybnMgYSBVaW50MzJBcnJheSBvciBVaW50MTZBcnJheVxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBJbmRpY2VzQXJyYXlUb1R5cGVkQXJyYXkoaW5kaWNlczogSW5kaWNlc0FycmF5LCBzdGFydDogbnVtYmVyLCBjb3VudDogbnVtYmVyLCBpczMyQml0czogYm9vbGVhbik6IFVpbnQzMkFycmF5IHwgVWludDE2QXJyYXkge1xyXG4gICAgaWYgKGluZGljZXMgaW5zdGFuY2VvZiBVaW50MTZBcnJheSB8fCBpbmRpY2VzIGluc3RhbmNlb2YgVWludDMyQXJyYXkpIHtcclxuICAgICAgICByZXR1cm4gaW5kaWNlcztcclxuICAgIH1cclxuXHJcbiAgICAvLyBJZiBJbnQzMkFycmF5LCBjYXN0IHRoZSBpbmRpY2VzICh3aGljaCBhcmUgYWxsIHBvc2l0aXZlKSB0byBVaW50MzJBcnJheVxyXG4gICAgaWYgKGluZGljZXMgaW5zdGFuY2VvZiBJbnQzMkFycmF5KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBVaW50MzJBcnJheShpbmRpY2VzLmJ1ZmZlciwgaW5kaWNlcy5ieXRlT2Zmc2V0LCBpbmRpY2VzLmxlbmd0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3ViYXJyYXkgPSBpbmRpY2VzLnNsaWNlKHN0YXJ0LCBzdGFydCArIGNvdW50KTtcclxuICAgIHJldHVybiBpczMyQml0cyA/IG5ldyBVaW50MzJBcnJheShzdWJhcnJheSkgOiBuZXcgVWludDE2QXJyYXkoc3ViYXJyYXkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRGF0YUFycmF5VG9VaW50OEFycmF5KGRhdGE6IERhdGFBcnJheSk6IFVpbnQ4QXJyYXkge1xyXG4gICAgaWYgKGRhdGEgaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgIGNvbnN0IGZsb2F0RGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkoZGF0YSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGZsb2F0RGF0YS5idWZmZXIsIGZsb2F0RGF0YS5ieXRlT2Zmc2V0LCBmbG9hdERhdGEuYnl0ZUxlbmd0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIEFycmF5QnVmZmVyLmlzVmlldyhkYXRhKSA/IG5ldyBVaW50OEFycmF5KGRhdGEuYnVmZmVyLCBkYXRhLmJ5dGVPZmZzZXQsIGRhdGEuYnl0ZUxlbmd0aCkgOiBuZXcgVWludDhBcnJheShkYXRhKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdldE1pbk1heChkYXRhOiBEYXRhQXJyYXksIHZlcnRleEJ1ZmZlcjogVmVydGV4QnVmZmVyLCBzdGFydDogbnVtYmVyLCBjb3VudDogbnVtYmVyKTogeyBtaW46IG51bWJlcltdOyBtYXg6IG51bWJlcltdIH0ge1xyXG4gICAgY29uc3QgeyBieXRlT2Zmc2V0LCBieXRlU3RyaWRlLCB0eXBlLCBub3JtYWxpemVkIH0gPSB2ZXJ0ZXhCdWZmZXI7XHJcbiAgICBjb25zdCBzaXplID0gdmVydGV4QnVmZmVyLmdldFNpemUoKTtcclxuICAgIGNvbnN0IG1pbiA9IG5ldyBBcnJheTxudW1iZXI+KHNpemUpLmZpbGwoSW5maW5pdHkpO1xyXG4gICAgY29uc3QgbWF4ID0gbmV3IEFycmF5PG51bWJlcj4oc2l6ZSkuZmlsbCgtSW5maW5pdHkpO1xyXG4gICAgRW51bWVyYXRlRmxvYXRWYWx1ZXMoZGF0YSwgYnl0ZU9mZnNldCArIHN0YXJ0ICogYnl0ZVN0cmlkZSwgYnl0ZVN0cmlkZSwgc2l6ZSwgdHlwZSwgY291bnQgKiBzaXplLCBub3JtYWxpemVkLCAodmFsdWVzKSA9PiB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcclxuICAgICAgICAgICAgbWluW2ldID0gTWF0aC5taW4obWluW2ldLCB2YWx1ZXNbaV0pO1xyXG4gICAgICAgICAgICBtYXhbaV0gPSBNYXRoLm1heChtYXhbaV0sIHZhbHVlc1tpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHsgbWluLCBtYXggfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlbW92ZXMsIGluLXBsYWNlLCBvYmplY3QgcHJvcGVydGllcyB3aGljaCBoYXZlIHRoZSBzYW1lIHZhbHVlIGFzIHRoZSBkZWZhdWx0IHZhbHVlLlxyXG4gKiBVc2VmdWwgZm9yIGF2b2lkaW5nIHVubmVjZXNzYXJ5IHByb3BlcnRpZXMgaW4gdGhlIGdsVEYgSlNPTi5cclxuICogQHBhcmFtIG9iamVjdCB0aGUgb2JqZWN0IHRvIG9taXQgZGVmYXVsdCB2YWx1ZXMgZnJvbVxyXG4gKiBAcGFyYW0gZGVmYXVsdFZhbHVlcyBhIHBhcnRpYWwgb2JqZWN0IHdpdGggZGVmYXVsdCB2YWx1ZXNcclxuICogQHJldHVybnMgb2JqZWN0IHdpdGggZGVmYXVsdCB2YWx1ZXMgb21pdHRlZFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIE9taXREZWZhdWx0VmFsdWVzPFQgZXh0ZW5kcyBPYmplY3Q+KG9iamVjdDogVCwgZGVmYXVsdFZhbHVlczogUGFydGlhbDxUPik6IFQge1xyXG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMob2JqZWN0KSkge1xyXG4gICAgICAgIGNvbnN0IGRlZmF1bHRWYWx1ZSA9IGRlZmF1bHRWYWx1ZXNba2V5IGFzIGtleW9mIFRdO1xyXG4gICAgICAgIGlmICgoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgQXJyYXkuaXNBcnJheShkZWZhdWx0VmFsdWUpICYmIEFyZUFycmF5c0VxdWFsKHZhbHVlLCBkZWZhdWx0VmFsdWUpKSB8fCB2YWx1ZSA9PT0gZGVmYXVsdFZhbHVlKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBvYmplY3Rba2V5IGFzIGtleW9mIFRdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBvYmplY3Q7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEFyZUFycmF5c0VxdWFsKGFycmF5MTogdW5rbm93bltdLCBhcnJheTI6IHVua25vd25bXSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGFycmF5MS5sZW5ndGggPT09IGFycmF5Mi5sZW5ndGggJiYgYXJyYXkxLmV2ZXJ5KCh2YWwsIGkpID0+IHZhbCA9PT0gYXJyYXkyW2ldKTtcclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8taW50ZXJuYWwtbW9kdWxlcyAqL1xyXG5leHBvcnQgKiBmcm9tIFwiLi9nbFRGRGF0YVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9nbFRGU2VyaWFsaXplclwiO1xyXG5leHBvcnQgeyBfU29sdmVNZXRhbGxpYywgX0NvbnZlcnRUb0dMVEZQQlJNZXRhbGxpY1JvdWdobmVzcyB9IGZyb20gXCIuL2dsVEZNYXRlcmlhbEV4cG9ydGVyXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL0V4dGVuc2lvbnMvaW5kZXhcIjtcclxuIiwiLyoqIEBpbnRlcm5hbCAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdmFyLCBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IHZhciBfX0lHTFRGRXhwb3J0ZXJFeHRlbnNpb24gPSAwOyAvLyBJIGFtIGhlcmUgdG8gYWxsb3cgZHRzIHRvIGJlIGNyZWF0ZWRcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIGV4dGVuZGluZyB0aGUgZXhwb3J0ZXJcclxuICogQGludGVybmFsXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElHTFRGRXhwb3J0ZXJFeHRlbnNpb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGlzIGV4dGVuc2lvblxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBuYW1lOiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyBlbmFibGVkXHJcbiAgICAgKi9cclxuICAgIGVuYWJsZWQ6IGJvb2xlYW47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgcmVxdWlyZWRcclxuICAgICAqL1xyXG4gICAgcmVxdWlyZWQ6IGJvb2xlYW47XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWludGVybmFsLW1vZHVsZXMgKi9cclxuaW1wb3J0ICogYXMgRXhwb3J0ZXJzIGZyb20gXCJzZXJpYWxpemVycy9nbFRGL2dsVEZGaWxlRXhwb3J0ZXJcIjtcclxuaW1wb3J0ICogYXMgRGF0YXMgZnJvbSBcInNlcmlhbGl6ZXJzL2dsVEYvMi4wL2dsVEZEYXRhXCI7XHJcbmltcG9ydCAqIGFzIFNlcmlhbGl6ZXJzIGZyb20gXCJzZXJpYWxpemVycy9nbFRGLzIuMC9nbFRGU2VyaWFsaXplclwiO1xyXG5pbXBvcnQgKiBhcyBFeHRlbnNpb25zIGZyb20gXCJzZXJpYWxpemVycy9nbFRGLzIuMC9FeHRlbnNpb25zL2luZGV4XCI7XHJcbmltcG9ydCAqIGFzIEdMVEYyIGZyb20gXCJzZXJpYWxpemVycy9nbFRGLzIuMC9pbmRleFwiO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgaXMgdGhlIGVudHJ5IHBvaW50IGZvciB0aGUgVU1EIG1vZHVsZS5cclxuICogVGhlIGVudHJ5IHBvaW50IGZvciBhIGZ1dHVyZSBFU00gcGFja2FnZSBzaG91bGQgYmUgaW5kZXgudHNcclxuICovXHJcbmNvbnN0IGdsb2JhbE9iamVjdCA9IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDogdW5kZWZpbmVkO1xyXG5pZiAodHlwZW9mIGdsb2JhbE9iamVjdCAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgKDxhbnk+Z2xvYmFsT2JqZWN0KS5CQUJZTE9OID0gKDxhbnk+Z2xvYmFsT2JqZWN0KS5CQUJZTE9OIHx8IHt9O1xyXG4gICAgY29uc3QgQkFCWUxPTiA9ICg8YW55Pmdsb2JhbE9iamVjdCkuQkFCWUxPTjtcclxuICAgIEJBQllMT04uR0xURjIgPSBCQUJZTE9OLkdMVEYyIHx8IHt9O1xyXG4gICAgQkFCWUxPTi5HTFRGMi5FeHBvcnRlciA9IEJBQllMT04uR0xURjIuRXhwb3J0ZXIgfHwge307XHJcbiAgICBCQUJZTE9OLkdMVEYyLkV4cG9ydGVyLkV4dGVuc2lvbnMgPSBCQUJZTE9OLkdMVEYyLkV4cG9ydGVyLkV4dGVuc2lvbnMgfHwge307XHJcblxyXG4gICAgY29uc3Qga2V5cyA9IFtdO1xyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gRXhwb3J0ZXJzKSB7XHJcbiAgICAgICAgQkFCWUxPTltrZXldID0gKDxhbnk+RXhwb3J0ZXJzKVtrZXldO1xyXG4gICAgICAgIGtleXMucHVzaChrZXkpO1xyXG4gICAgfVxyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gRGF0YXMpIHtcclxuICAgICAgICBCQUJZTE9OW2tleV0gPSAoPGFueT5EYXRhcylba2V5XTtcclxuICAgICAgICBrZXlzLnB1c2goa2V5KTtcclxuICAgIH1cclxuICAgIGZvciAoY29uc3Qga2V5IGluIFNlcmlhbGl6ZXJzKSB7XHJcbiAgICAgICAgQkFCWUxPTltrZXldID0gKDxhbnk+U2VyaWFsaXplcnMpW2tleV07XHJcbiAgICAgICAga2V5cy5wdXNoKGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gRXh0ZW5zaW9ucykge1xyXG4gICAgICAgIEJBQllMT04uR0xURjIuRXhwb3J0ZXIuRXh0ZW5zaW9uc1trZXldID0gKDxhbnk+RXh0ZW5zaW9ucylba2V5XTtcclxuICAgICAgICBrZXlzLnB1c2goa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBHTFRGMikge1xyXG4gICAgICAgIC8vIFByZXZlbnQgUmVhc3NpZ25tZW50LlxyXG4gICAgICAgIGlmIChrZXlzLmluZGV4T2Yoa2V5KSA+IC0xKSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQkFCWUxPTi5HTFRGMi5FeHBvcnRlcltrZXldID0gKDxhbnk+R0xURjIpW2tleV07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCAqIGZyb20gXCJzZXJpYWxpemVycy9nbFRGL2dsVEZGaWxlRXhwb3J0ZXJcIjtcclxuZXhwb3J0ICogZnJvbSBcInNlcmlhbGl6ZXJzL2dsVEYvMi4wL2luZGV4XCI7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9iYWJ5bG9uanNfTWlzY190b29sc19fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsInZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiA/IChvYmopID0+IChPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKSkgOiAob2JqKSA9PiAob2JqLl9fcHJvdG9fXyk7XG52YXIgbGVhZlByb3RvdHlwZXM7XG4vLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuLy8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4vLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8vIG1vZGUgJiAxNjogcmV0dXJuIHZhbHVlIHdoZW4gaXQncyBQcm9taXNlLWxpa2Vcbi8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbl9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG5cdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IHRoaXModmFsdWUpO1xuXHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuXHRpZih0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlKSB7XG5cdFx0aWYoKG1vZGUgJiA0KSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG5cdFx0aWYoKG1vZGUgJiAxNikgJiYgdHlwZW9mIHZhbHVlLnRoZW4gPT09ICdmdW5jdGlvbicpIHJldHVybiB2YWx1ZTtcblx0fVxuXHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuXHR2YXIgZGVmID0ge307XG5cdGxlYWZQcm90b3R5cGVzID0gbGVhZlByb3RvdHlwZXMgfHwgW251bGwsIGdldFByb3RvKHt9KSwgZ2V0UHJvdG8oW10pLCBnZXRQcm90byhnZXRQcm90byldO1xuXHRmb3IodmFyIGN1cnJlbnQgPSBtb2RlICYgMiAmJiB2YWx1ZTsgdHlwZW9mIGN1cnJlbnQgPT0gJ29iamVjdCcgJiYgIX5sZWFmUHJvdG90eXBlcy5pbmRleE9mKGN1cnJlbnQpOyBjdXJyZW50ID0gZ2V0UHJvdG8oY3VycmVudCkpIHtcblx0XHRPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhjdXJyZW50KS5mb3JFYWNoKChrZXkpID0+IChkZWZba2V5XSA9ICgpID0+ICh2YWx1ZVtrZXldKSkpO1xuXHR9XG5cdGRlZlsnZGVmYXVsdCddID0gKCkgPT4gKHZhbHVlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBkZWYpO1xuXHRyZXR1cm4gbnM7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAqIGFzIHNlcmlhbGl6ZXJzIGZyb20gXCJAbHRzL3NlcmlhbGl6ZXJzL2xlZ2FjeS9sZWdhY3ktZ2xURjJTZXJpYWxpemVyXCI7XHJcbmV4cG9ydCB7IHNlcmlhbGl6ZXJzIH07XHJcbmV4cG9ydCBkZWZhdWx0IHNlcmlhbGl6ZXJzO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=