(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("babylonjs"));
	else if(typeof define === 'function' && define.amd)
		define("babylonjs-serializers", ["babylonjs"], factory);
	else if(typeof exports === 'object')
		exports["babylonjs-serializers"] = factory(require("babylonjs"));
	else
		root["SERIALIZERS"] = factory(root["BABYLON"]);
})((typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : this), (__WEBPACK_EXTERNAL_MODULE_babylonjs_Misc_fileTools__) => {
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

/***/ "../../../dev/serializers/src/glTF/2.0/Extensions/EXT_materials_diffuse_roughness.ts":
/*!*******************************************************************************************!*\
  !*** ../../../dev/serializers/src/glTF/2.0/Extensions/EXT_materials_diffuse_roughness.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EXT_materials_diffuse_roughness: () => (/* binding */ EXT_materials_diffuse_roughness)
/* harmony export */ });
/* harmony import */ var _glTFExporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../glTFExporter */ "../../../dev/serializers/src/glTF/2.0/glTFExporter.ts");
/* harmony import */ var babylonjs_Materials_PBR_pbrBaseMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs/Materials/PBR/pbrBaseMaterial */ "babylonjs/Misc/fileTools");
/* harmony import */ var babylonjs_Materials_PBR_pbrBaseMaterial__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Materials_PBR_pbrBaseMaterial__WEBPACK_IMPORTED_MODULE_1__);


var NAME = "EXT_materials_diffuse_roughness";
/**
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
var EXT_materials_diffuse_roughness = /** @class */ (function () {
    function EXT_materials_diffuse_roughness(exporter) {
        /** Name of this extension */
        this.name = NAME;
        /** Defines whether this extension is enabled */
        this.enabled = true;
        /** Defines whether this extension is required */
        this.required = false;
        this._wasUsed = false;
        this._exporter = exporter;
    }
    EXT_materials_diffuse_roughness.prototype.dispose = function () { };
    Object.defineProperty(EXT_materials_diffuse_roughness.prototype, "wasUsed", {
        /** @internal */
        get: function () {
            return this._wasUsed;
        },
        enumerable: false,
        configurable: true
    });
    EXT_materials_diffuse_roughness.prototype.postExportMaterialAdditionalTextures = function (context, node, babylonMaterial) {
        var additionalTextures = [];
        if (babylonMaterial instanceof babylonjs_Materials_PBR_pbrBaseMaterial__WEBPACK_IMPORTED_MODULE_1__.PBRBaseMaterial) {
            if (babylonMaterial._baseDiffuseRoughness) {
                if (babylonMaterial._baseDiffuseRoughnessTexture) {
                    additionalTextures.push(babylonMaterial._baseDiffuseRoughnessTexture);
                }
                return additionalTextures;
            }
        }
        return [];
    };
    // eslint-disable-next-line no-restricted-syntax
    EXT_materials_diffuse_roughness.prototype.postExportMaterialAsync = function (context, node, babylonMaterial) {
        var _this = this;
        return new Promise(function (resolve) {
            if (babylonMaterial instanceof babylonjs_Materials_PBR_pbrBaseMaterial__WEBPACK_IMPORTED_MODULE_1__.PBRBaseMaterial) {
                if (!babylonMaterial._baseDiffuseRoughness) {
                    resolve(node);
                    return;
                }
                _this._wasUsed = true;
                node.extensions = node.extensions || {};
                var diffuseRoughnessTextureInfo = _this._exporter._materialExporter.getTextureInfo(babylonMaterial._baseDiffuseRoughnessTexture);
                var diffuseRoughnessInfo = {
                    diffuseRoughnessFactor: babylonMaterial._baseDiffuseRoughness,
                    diffuseRoughnessTexture: diffuseRoughnessTextureInfo !== null && diffuseRoughnessTextureInfo !== void 0 ? diffuseRoughnessTextureInfo : undefined,
                };
                if (diffuseRoughnessInfo.diffuseRoughnessTexture !== null) {
                    _this._exporter._materialNeedsUVsSet.add(babylonMaterial);
                }
                node.extensions[NAME] = diffuseRoughnessInfo;
            }
            resolve(node);
        });
    };
    return EXT_materials_diffuse_roughness;
}());

_glTFExporter__WEBPACK_IMPORTED_MODULE_0__.GLTFExporter.RegisterExtension(NAME, function (exporter) { return new EXT_materials_diffuse_roughness(exporter); });


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _glTFExporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../glTFExporter */ "../../../dev/serializers/src/glTF/2.0/glTFExporter.ts");
/* harmony import */ var babylonjs_Meshes_mesh__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs/Maths/math.vector */ "babylonjs/Misc/fileTools");
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function () {
            var _this = this;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve) {
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
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
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
/* harmony import */ var babylonjs_Meshes_Compression_dracoEncoder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs/Misc/logger */ "babylonjs/Misc/fileTools");
/* harmony import */ var babylonjs_Meshes_Compression_dracoEncoder__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Meshes_Compression_dracoEncoder__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _glTFUtilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../glTFUtilities */ "../../../dev/serializers/src/glTF/2.0/glTFUtilities.ts");






var NAME = "KHR_draco_mesh_compression";
function GetDracoAttributeName(glTFName) {
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
            attributes.push({ kind: name_1, dracoName: GetDracoAttributeName(name_1), size: (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_2__.GetAccessorElementCount)(accessor.type), data: data });
            primitiveBufferViews.push(bufferView);
            primitiveAccessors.push(accessor);
        }
        // Use sequential encoding to preserve vertex order for cases like morph targets
        var options = {
            method: primitive.targets ? "MESH_SEQUENTIAL_ENCODING" : "MESH_EDGEBREAKER_ENCODING",
        };
        var promise = babylonjs_Meshes_Compression_dracoEncoder__WEBPACK_IMPORTED_MODULE_1__.DracoEncoder.Default._encodeAsync(attributes, indices, options)
            // eslint-disable-next-line github/no-then
            .then(function (encodedData) {
            if (!encodedData) {
                babylonjs_Meshes_Compression_dracoEncoder__WEBPACK_IMPORTED_MODULE_1__.Logger.Error("Draco encoding failed for primitive.");
                return;
            }
            var dracoInfo = {
                bufferView: -1, // bufferView will be set to a real index later, when we write the binary and decide bufferView ordering
                attributes: encodedData.attributeIds,
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
            // eslint-disable-next-line github/no-then
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Misc/logger */ "babylonjs/Misc/fileTools");
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function () {
            var _this = this;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve) {
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
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
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
/* harmony import */ var babylonjs_Materials_PBR_pbrBaseMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs/Materials/PBR/pbrBaseMaterial */ "babylonjs/Misc/fileTools");
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
    // eslint-disable-next-line no-restricted-syntax
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
/* harmony import */ var babylonjs_Materials_PBR_pbrBaseMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs/Misc/tools */ "babylonjs/Misc/fileTools");
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
    // eslint-disable-next-line no-restricted-syntax
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
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs/Misc/logger */ "babylonjs/Misc/fileTools");
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__);



var NAME = "KHR_materials_diffuse_transmission";
/**
 * Get the appropriate translucency intensity texture for the material.
 * @internal
 */
function GetTranslucencyIntensityTexture(context, babylonMaterial) {
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
            var translucencyIntensityTexture = GetTranslucencyIntensityTexture(context, babylonMaterial);
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
    // eslint-disable-next-line no-restricted-syntax
    KHR_materials_diffuse_transmission.prototype.postExportMaterialAsync = function (context, node, babylonMaterial) {
        var _this = this;
        return new Promise(function (resolve) {
            var _a, _b;
            if (babylonMaterial instanceof babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__.PBRMaterial && _this._isExtensionEnabled(babylonMaterial)) {
                _this._wasUsed = true;
                var subs = babylonMaterial.subSurface;
                var translucencyIntensityTexture = GetTranslucencyIntensityTexture(context, babylonMaterial);
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
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs/Materials/PBR/pbrMaterial */ "babylonjs/Misc/fileTools");
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
    // eslint-disable-next-line no-restricted-syntax
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _glTFExporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../glTFExporter */ "../../../dev/serializers/src/glTF/2.0/glTFExporter.ts");
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs/Materials/PBR/pbrMaterial */ "babylonjs/Misc/fileTools");
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function () {
            var _this = this;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve) {
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
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
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
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs/Materials/PBR/pbrMaterial */ "babylonjs/Misc/fileTools");
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
    // eslint-disable-next-line no-restricted-syntax
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
/* harmony import */ var babylonjs_Materials_PBR_pbrBaseMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs/Materials/PBR/pbrBaseMaterial */ "babylonjs/Misc/fileTools");
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
    // eslint-disable-next-line no-restricted-syntax
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _glTFExporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../glTFExporter */ "../../../dev/serializers/src/glTF/2.0/glTFExporter.ts");
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs/Materials/PBR/pbrMaterial */ "babylonjs/Misc/fileTools");
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function () {
            var _this = this;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve) {
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
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
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
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs/Materials/PBR/pbrMaterial */ "babylonjs/Misc/fileTools");
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
    // eslint-disable-next-line no-restricted-syntax
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
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs/Misc/logger */ "babylonjs/Misc/fileTools");
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
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs/Materials/standardMaterial */ "babylonjs/Misc/fileTools");
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
    // eslint-disable-next-line no-restricted-syntax
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
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs/Maths/math.color */ "babylonjs/Misc/fileTools");
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
    // eslint-disable-next-line no-restricted-syntax
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
/* harmony import */ var babylonjs_Misc_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Misc/tools */ "babylonjs/Misc/fileTools");
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
/* harmony export */   EXT_materials_diffuse_roughness: () => (/* reexport safe */ _EXT_materials_diffuse_roughness__WEBPACK_IMPORTED_MODULE_15__.EXT_materials_diffuse_roughness),
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
/* harmony export */   KHR_texture_transform: () => (/* reexport safe */ _KHR_texture_transform__WEBPACK_IMPORTED_MODULE_16__.KHR_texture_transform)
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
/* harmony import */ var _EXT_materials_diffuse_roughness__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./EXT_materials_diffuse_roughness */ "../../../dev/serializers/src/glTF/2.0/Extensions/EXT_materials_diffuse_roughness.ts");
/* harmony import */ var _KHR_texture_transform__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./KHR_texture_transform */ "../../../dev/serializers/src/glTF/2.0/Extensions/KHR_texture_transform.ts");



















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

function GetHighestByteAlignment(byteLength) {
    if (byteLength % 4 === 0) {
        return 4;
    }
    if (byteLength % 2 === 0) {
        return 2;
    }
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
        var orderedBufferViews = Array.from(this._bufferViewToData.keys()).sort(function (a, b) { return GetHighestByteAlignment(b.byteLength) - GetHighestByteAlignment(a.byteLength); });
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
/* harmony import */ var babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Lights/light */ "babylonjs/Misc/fileTools");
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
/* harmony import */ var babylonjs_Misc_fileTools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Misc/tools */ "babylonjs/Misc/fileTools");
/* harmony import */ var babylonjs_Misc_fileTools__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Misc_fileTools__WEBPACK_IMPORTED_MODULE_0__);


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
            var blob = new Blob([value], { type: (0,babylonjs_Misc_fileTools__WEBPACK_IMPORTED_MODULE_0__.GetMimeType)(key) });
            babylonjs_Misc_fileTools__WEBPACK_IMPORTED_MODULE_0__.Tools.Download(blob, key);
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
/* harmony import */ var babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Maths/math.color */ "babylonjs/Misc/fileTools");
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
        this._options = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__assign)({ shouldExportNode: function () { return true; }, shouldExportAnimation: function () { return true; }, metadataSelector: function (metadata) { var _a; return (_a = metadata === null || metadata === void 0 ? void 0 : metadata.gltf) === null || _a === void 0 ? void 0 : _a.extras; }, animationSampleRate: 1 / 60, exportWithoutWaitingForScene: false, exportUnusedUVs: false, removeNoopRootNodes: true, includeCoordinateSystemConversionNodes: false, meshCompressionMethod: "None" }, options);
        this._loadExtensions();
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/promise-function-async
    GLTFExporter.prototype._ApplyExtension = function (node, extensions, index, actionAsync) {
        var _this = this;
        if (index >= extensions.length) {
            return Promise.resolve(node);
        }
        var currentPromise = actionAsync(extensions[index], node);
        if (!currentPromise) {
            return this._ApplyExtension(node, extensions, index + 1, actionAsync);
        }
        // eslint-disable-next-line github/no-then
        return currentPromise.then(function (newNode) { return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(_this, void 0, void 0, function () { var _a; return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__generator)(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!newNode) return [3 /*break*/, 2];
                    return [4 /*yield*/, this._ApplyExtension(newNode, extensions, index + 1, actionAsync)];
                case 1:
                    _a = _b.sent();
                    return [3 /*break*/, 3];
                case 2:
                    _a = null;
                    _b.label = 3;
                case 3: return [2 /*return*/, (_a)];
            }
        }); }); });
    };
    // eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/promise-function-async
    GLTFExporter.prototype._ApplyExtensions = function (node, actionAsync) {
        var extensions = [];
        for (var _i = 0, _a = GLTFExporter._ExtensionNames; _i < _a.length; _i++) {
            var name_1 = _a[_i];
            extensions.push(this._extensions[name_1]);
        }
        return this._ApplyExtension(node, extensions, 0, actionAsync);
    };
    // eslint-disable-next-line no-restricted-syntax, @typescript-eslint/promise-function-async
    GLTFExporter.prototype._extensionsPreExportTextureAsync = function (context, babylonTexture, mimeType) {
        // eslint-disable-next-line @typescript-eslint/promise-function-async
        return this._ApplyExtensions(babylonTexture, function (extension, node) { return extension.preExportTextureAsync && extension.preExportTextureAsync(context, node, mimeType); });
    };
    // eslint-disable-next-line no-restricted-syntax, @typescript-eslint/promise-function-async
    GLTFExporter.prototype._extensionsPostExportNodeAsync = function (context, node, babylonNode, nodeMap, convertToRightHanded) {
        var _this = this;
        return this._ApplyExtensions(node, 
        // eslint-disable-next-line @typescript-eslint/promise-function-async
        function (extension, node) { return extension.postExportNodeAsync && extension.postExportNodeAsync(context, node, babylonNode, nodeMap, convertToRightHanded, _this._bufferManager); });
    };
    // eslint-disable-next-line no-restricted-syntax, @typescript-eslint/promise-function-async
    GLTFExporter.prototype._extensionsPostExportMaterialAsync = function (context, material, babylonMaterial) {
        // eslint-disable-next-line @typescript-eslint/promise-function-async
        return this._ApplyExtensions(material, function (extension, node) { return extension.postExportMaterialAsync && extension.postExportMaterialAsync(context, node, babylonMaterial); });
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
                        // eslint-disable-next-line no-await-in-loop
                        return [4 /*yield*/, extension.preGenerateBinaryAsync(this._bufferManager)];
                    case 2:
                        // eslint-disable-next-line no-await-in-loop
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
            var scene, extras, rootNodesRH, rootNodesLH, rootNoopNodesRH, _i, _a, rootNode, stateLH, _b, _c, _d, stateRH, _e, _f, _g, noopRH, _h, _j, _k;
            var _l, _m, _o;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__generator)(this, function (_p) {
                switch (_p.label) {
                    case 0:
                        scene = { nodes: [] };
                        // Scene metadata
                        if (this._babylonScene.metadata) {
                            extras = this._options.metadataSelector(this._babylonScene.metadata);
                            if (extras) {
                                scene.extras = extras;
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
                        // eslint-disable-next-line no-await-in-loop
                        return [4 /*yield*/, this._exportNodeAsync(babylonNode, nodes, state)];
                    case 2:
                        // eslint-disable-next-line no-await-in-loop
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
        if (this._shouldExportNode(babylonNode) && babylonNode instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.AbstractMesh && babylonNode.geometry) {
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
        var morphTargetsMeshesMap = new Map();
        for (var _i = 0, babylonRootNodes_2 = babylonRootNodes; _i < babylonRootNodes_2.length; _i++) {
            var babylonNode = babylonRootNodes_2[_i];
            this._collectBuffers(babylonNode, bufferToVertexBuffersMap, vertexBufferToMeshesMap, morphTargetsMeshesMap, state);
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
                var meshes = vertexBufferToMeshesMap.get(vertexBuffer);
                var _k = (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_3__.GetVertexBufferInfo)(vertexBuffer, meshes), byteOffset = _k.byteOffset, byteStride_1 = _k.byteStride, componentCount = _k.componentCount, type = _k.type, count = _k.count, normalized = _k.normalized, kind = _k.kind;
                switch (kind) {
                    // Normalize normals and tangents.
                    case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.NormalKind:
                    case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.TangentKind: {
                        (0,babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.EnumerateFloatValues)(bytes, byteOffset, byteStride_1, componentCount, type, count, normalized, function (values) {
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
                        (0,babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.EnumerateFloatValues)(bytes, byteOffset, byteStride_1, componentCount, type, count, normalized, function (values) {
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
            // Apply normalizations and color corrections to buffer data in-place.
            for (var _d = 0, vertexBuffers_1 = vertexBuffers; _d < vertexBuffers_1.length; _d++) {
                var vertexBuffer = vertexBuffers_1[_d];
                _loop_3(vertexBuffer);
            }
            // Perform coordinate conversions, if needed, to buffer data in-place (only for positions, normals and tangents).
            if (state.convertToRightHanded) {
                for (var _e = 0, vertexBuffers_2 = vertexBuffers; _e < vertexBuffers_2.length; _e++) {
                    var vertexBuffer = vertexBuffers_2[_e];
                    var meshes = vertexBufferToMeshesMap.get(vertexBuffer);
                    var _f = (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_3__.GetVertexBufferInfo)(vertexBuffer, meshes), byteOffset = _f.byteOffset, byteStride_2 = _f.byteStride, componentCount = _f.componentCount, type = _f.type, count = _f.count, normalized = _f.normalized, kind = _f.kind;
                    switch (kind) {
                        case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.PositionKind:
                        case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.NormalKind:
                        case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.TangentKind: {
                            (0,babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.EnumerateFloatValues)(bytes, byteOffset, byteStride_2, componentCount, type, count, normalized, function (values) {
                                values[0] = -values[0];
                            });
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
            for (var _g = 0, vertexBuffers_3 = vertexBuffers; _g < vertexBuffers_3.length; _g++) {
                var vertexBuffer = vertexBuffers_3[_g];
                var meshes = vertexBufferToMeshesMap.get(vertexBuffer);
                var _h = (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_3__.GetVertexBufferInfo)(vertexBuffer, meshes), kind = _h.kind, totalVertices = _h.totalVertices;
                switch (kind) {
                    case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.MatricesIndicesKind:
                    case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.MatricesIndicesExtraKind: {
                        if (vertexBuffer.type == babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.FLOAT) {
                            var floatData = vertexBuffer.getFloatData(totalVertices);
                            if (floatData !== null) {
                                floatMatricesIndices.set(vertexBuffer, floatData);
                            }
                        }
                    }
                }
            }
            if (floatMatricesIndices.size !== 0) {
                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Logger.Warn("Joints conversion needed: some joints are stored as floats in Babylon but GLTF requires UNSIGNED BYTES. We will perform the conversion but this might lead to unused data in the buffer.");
            }
            var floatArrayVertexBuffers = Array.from(floatMatricesIndices.keys());
            for (var _j = 0, floatArrayVertexBuffers_1 = floatArrayVertexBuffers; _j < floatArrayVertexBuffers_1.length; _j++) {
                var vertexBuffer = floatArrayVertexBuffers_1[_j];
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
        // Build morph targets buffers
        var morphTargets = Array.from(morphTargetsMeshesMap.keys());
        for (var _b = 0, morphTargets_1 = morphTargets; _b < morphTargets_1.length; _b++) {
            var morphTarget = morphTargets_1[_b];
            var meshes = morphTargetsMeshesMap.get(morphTarget);
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
                        // eslint-disable-next-line no-await-in-loop
                        return [4 /*yield*/, this._exportNodeAsync(babylonChildNode, children, state)];
                    case 3:
                        // eslint-disable-next-line no-await-in-loop
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
            var node, extras, babylonMesh, _a, skin, gltfCamera, parentBabylonNode, parentNodeIndex, parentNode, processedNode;
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
                        // Node metadata
                        if (babylonNode.metadata) {
                            extras = this._options.metadataSelector(babylonNode.metadata);
                            if (extras) {
                                node.extras = extras;
                            }
                        }
                        if (!(babylonNode instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TransformNode)) return [3 /*break*/, 3];
                        this._setNodeTransformation(node, babylonNode, state.convertToRightHanded);
                        if (!(babylonNode instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.AbstractMesh)) return [3 /*break*/, 3];
                        babylonMesh = babylonNode instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.InstancedMesh ? babylonNode.sourceMesh : babylonNode;
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
                    // eslint-disable-next-line no-await-in-loop
                    return [4 /*yield*/, this._exportMaterialAsync(babylonMaterial, vertexBuffers, subMesh, primitive)];
                    case 4:
                        // Material
                        // eslint-disable-next-line no-await-in-loop
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
/* harmony import */ var babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Helpers/materialConversionHelper */ "babylonjs/Misc/fileTools");
/* harmony import */ var babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable @typescript-eslint/prefer-promise-reject-errors */
/* eslint-disable github/no-then */
/* eslint-disable babylonjs/available */










var Epsilon = 1e-6;
var DielectricSpecular = new babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Color3(0.04, 0.04, 0.04);
var MaxSpecularPower = 1024;
var White = babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Color3.White();
var Black = babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Color3.Black();
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
function IsCompressedTextureFormat(format) {
    switch (format) {
        case babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Constants.TEXTUREFORMAT_COMPRESSED_RGBA_BPTC_UNORM:
        case babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Constants.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_BPTC_UNORM:
        case babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Constants.TEXTUREFORMAT_COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT:
        case babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Constants.TEXTUREFORMAT_COMPRESSED_RGB_BPTC_SIGNED_FLOAT:
        case babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Constants.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT5:
        case babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Constants.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT:
        case babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Constants.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT3:
        case babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Constants.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT:
        case babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Constants.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT1:
        case babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Constants.TEXTUREFORMAT_COMPRESSED_RGB_S3TC_DXT1:
        case babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Constants.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT:
        case babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Constants.TEXTUREFORMAT_COMPRESSED_SRGB_S3TC_DXT1_EXT:
        case babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Constants.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_4x4:
        case babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Constants.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:
        case babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Constants.TEXTUREFORMAT_COMPRESSED_RGB_ETC1_WEBGL:
        case babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Constants.TEXTUREFORMAT_COMPRESSED_RGB8_ETC2:
        case babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Constants.TEXTUREFORMAT_COMPRESSED_SRGB8_ETC2:
        case babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Constants.TEXTUREFORMAT_COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2:
        case babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Constants.TEXTUREFORMAT_COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2:
        case babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Constants.TEXTUREFORMAT_COMPRESSED_RGBA8_ETC2_EAC:
        case babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Constants.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:
            return true;
        default:
            return false;
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
    if (specular < DielectricSpecular.r) {
        DielectricSpecular;
        return 0;
    }
    var a = DielectricSpecular.r;
    var b = (diffuse * oneMinusSpecularStrength) / (1.0 - DielectricSpecular.r) + specular - 2.0 * DielectricSpecular.r;
    var c = DielectricSpecular.r - specular;
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
    var specularPower = babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Scalar.Clamp(babylonStandardMaterial.specularPower, 0, MaxSpecularPower);
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
                        if (babylonStandardMaterial.emissiveColor && !babylonStandardMaterial.emissiveColor.equalsWithEpsilon(Black, Epsilon)) {
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
                        return [4 /*yield*/, Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! babylonjs/ShadersWGSL/pass.fragment */ "babylonjs/Misc/fileTools", 23))];
                    case 1:
                        _a = _b.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! babylonjs/Shaders/pass.fragment */ "babylonjs/Misc/fileTools", 23))];
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
                        if (!!(diffuseTexture || specularGlossinessTexture)) return [3 /*break*/, 2];
                        return [4 /*yield*/, Promise.reject("diffuse and specular glossiness textures are not defined!")];
                    case 1: return [2 /*return*/, _b.sent()];
                    case 2:
                        scene = diffuseTexture ? diffuseTexture.getScene() : specularGlossinessTexture ? specularGlossinessTexture.getScene() : null;
                        if (!scene) return [3 /*break*/, 12];
                        resizedTextures = this._resizeTexturesToSameDimensions(diffuseTexture, specularGlossinessTexture, scene);
                        diffuseSize = (_a = resizedTextures.texture1) === null || _a === void 0 ? void 0 : _a.getSize();
                        diffuseBuffer = void 0;
                        specularGlossinessBuffer = void 0;
                        width = diffuseSize.width;
                        height = diffuseSize.height;
                        return [4 /*yield*/, resizedTextures.texture1.readPixels()];
                    case 3:
                        diffusePixels = _b.sent();
                        return [4 /*yield*/, resizedTextures.texture2.readPixels()];
                    case 4:
                        specularPixels = _b.sent();
                        if (!diffusePixels) return [3 /*break*/, 5];
                        diffuseBuffer = ConvertPixelArrayToFloat32(diffusePixels);
                        return [3 /*break*/, 7];
                    case 5: return [4 /*yield*/, Promise.reject("Failed to retrieve pixels from diffuse texture!")];
                    case 6: return [2 /*return*/, _b.sent()];
                    case 7:
                        if (!specularPixels) return [3 /*break*/, 8];
                        specularGlossinessBuffer = ConvertPixelArrayToFloat32(specularPixels);
                        return [3 /*break*/, 10];
                    case 8: return [4 /*yield*/, Promise.reject("Failed to retrieve pixels from specular glossiness texture!")];
                    case 9: return [2 /*return*/, _b.sent()];
                    case 10:
                        byteLength = specularGlossinessBuffer.byteLength;
                        metallicRoughnessBuffer = new Uint8Array(byteLength);
                        baseColorBuffer = new Uint8Array(byteLength);
                        strideSize = 4;
                        maxBaseColor = Black;
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
                                baseColorBuffer[destinationOffset] /= metallicRoughnessFactors_1.baseColor.r > Epsilon ? metallicRoughnessFactors_1.baseColor.r : 1;
                                baseColorBuffer[destinationOffset + 1] /= metallicRoughnessFactors_1.baseColor.g > Epsilon ? metallicRoughnessFactors_1.baseColor.g : 1;
                                baseColorBuffer[destinationOffset + 2] /= metallicRoughnessFactors_1.baseColor.b > Epsilon ? metallicRoughnessFactors_1.baseColor.b : 1;
                                linearBaseColorPixel = babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Color3.FromInts(baseColorBuffer[destinationOffset], baseColorBuffer[destinationOffset + 1], baseColorBuffer[destinationOffset + 2]);
                                sRGBBaseColorPixel = linearBaseColorPixel.toGammaSpace(scene.getEngine().useExactSrgbConversions);
                                baseColorBuffer[destinationOffset] = sRGBBaseColorPixel.r * 255;
                                baseColorBuffer[destinationOffset + 1] = sRGBBaseColorPixel.g * 255;
                                baseColorBuffer[destinationOffset + 2] = sRGBBaseColorPixel.b * 255;
                                if (!sRGBBaseColorPixel.equalsWithEpsilon(White, Epsilon)) {
                                    writeOutBaseColorTexture = true;
                                }
                                metallicRoughnessBuffer[destinationOffset + 1] /= metallicRoughnessFactors_1.roughness > Epsilon ? metallicRoughnessFactors_1.roughness : 1;
                                metallicRoughnessBuffer[destinationOffset + 2] /= metallicRoughnessFactors_1.metallic > Epsilon ? metallicRoughnessFactors_1.metallic : 1;
                                metallicRoughnessPixel = babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Color3.FromInts(255, metallicRoughnessBuffer[destinationOffset + 1], metallicRoughnessBuffer[destinationOffset + 2]);
                                if (!metallicRoughnessPixel.equalsWithEpsilon(White, Epsilon)) {
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
                        return [4 /*yield*/, Promise.all(promises).then(function () {
                                return metallicRoughnessFactors_1;
                            })];
                    case 11: return [2 /*return*/, _b.sent()];
                    case 12: return [4 /*yield*/, Promise.reject("_ConvertSpecularGlossinessTexturesToMetallicRoughness: Scene from textures is missing!")];
                    case 13: return [2 /*return*/, _b.sent()];
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
        var baseColorFromDiffuse = specularGlossiness.diffuseColor.scale(oneMinusSpecularStrength / (1.0 - DielectricSpecular.r) / Math.max(1 - metallic));
        var baseColorFromSpecular = specularGlossiness.specularColor.subtract(DielectricSpecular.scale(1 - metallic)).scale(1 / Math.max(metallic));
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
                        if (!(reflectivityTexture && !useMicrosurfaceFromReflectivityMapAlpha)) return [3 /*break*/, 2];
                        return [4 /*yield*/, Promise.reject("_ConvertPBRMaterial: Glossiness values not included in the reflectivity texture are currently not supported")];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        if (!((albedoTexture || reflectivityTexture) && hasUVs)) return [3 /*break*/, 4];
                        this._exporter._materialNeedsUVsSet.add(babylonPBRMaterial);
                        samplerIndex = this._exportTextureSampler(albedoTexture || reflectivityTexture);
                        return [4 /*yield*/, this._convertSpecularGlossinessTexturesToMetallicRoughnessAsync(albedoTexture, reflectivityTexture, specGloss, mimeType)];
                    case 3:
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
                    case 4: return [2 /*return*/, this._convertSpecularGlossinessToMetallicRoughness(specGloss)];
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
                        if (!metallicRoughness.baseColor.equalsWithEpsilon(White, Epsilon) || !babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Scalar.WithinEpsilon(babylonPBRMaterial.alpha, 1, Epsilon)) {
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
                        if (!emissiveColor.equalsWithEpsilon(Black, Epsilon)) {
                            glTFMaterial.emissiveFactor = emissiveColor.asArray();
                        }
                        glTFMaterial.pbrMetallicRoughness = glTFPbrMetallicRoughness;
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Get the RGBA pixel data from a texture
     * @param babylonTexture
     * @returns an array buffer promise containing the pixel data
     */
    // eslint-disable-next-line no-restricted-syntax, @typescript-eslint/promise-function-async
    GLTFMaterialExporter.prototype._getPixelsFromTextureAsync = function (babylonTexture) {
        // If the internal texture format is compressed, we cannot read the pixels directly.
        if (IsCompressedTextureFormat(babylonTexture.textureFormat)) {
            return (0,babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.GetTextureDataAsync)(babylonTexture, babylonTexture._texture.width, babylonTexture._texture.height);
        }
        return babylonTexture.textureType === babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Constants.TEXTURETYPE_UNSIGNED_BYTE
            ? babylonTexture.readPixels()
            : babylonTexture.readPixels();
    };
    GLTFMaterialExporter.prototype.exportTextureAsync = function (babylonTexture, mimeType) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function () {
            var extensionPromise;
            var _this = this;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        extensionPromise = this._exporter._extensionsPreExportTextureAsync("exporter", babylonTexture, mimeType);
                        if (!!extensionPromise) return [3 /*break*/, 2];
                        return [4 /*yield*/, this._exportTextureInfoAsync(babylonTexture, mimeType)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [4 /*yield*/, extensionPromise.then(function (texture) { return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(_this, void 0, void 0, function () {
                            return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__generator)(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!!texture) return [3 /*break*/, 2];
                                        return [4 /*yield*/, this._exportTextureInfoAsync(babylonTexture, mimeType)];
                                    case 1: return [2 /*return*/, _a.sent()];
                                    case 2: return [4 /*yield*/, this._exportTextureInfoAsync(texture, mimeType)];
                                    case 3: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); })];
                    case 3: return [2 /*return*/, _a.sent()];
                }
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
                        return [4 /*yield*/, this._getPixelsFromTextureAsync(babylonTexture)];
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
                                    babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Tools.Warn("Unsupported media type: ".concat(textureMimeType, ". Exporting texture as PNG."));
                                    // Will later fallback to default mime type, image/png, from Canvas API
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
/* harmony import */ var babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs/Misc/tools */ "babylonjs/Misc/fileTools");
/* harmony import */ var babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__);




function BuildMorphTargetBuffers(morphTarget, mesh, bufferManager, bufferViews, accessors, convertToRightHanded) {
    var result = {
        attributes: {},
        influence: morphTarget.influence,
        name: morphTarget.name,
    };
    var geometry = mesh.geometry;
    if (!geometry) {
        babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.Tools.Warn("Attempted to export morph target data from a mesh without geometry. This should not happen.");
        return result;
    }
    var flipX = convertToRightHanded ? -1 : 1;
    var floatSize = 4;
    var difference = babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.Vector3.Zero();
    var vertexStart = 0;
    var vertexCount = 0;
    if (morphTarget.hasPositions) {
        var morphPositions = morphTarget.getPositions();
        var originalPositions = geometry.getVerticesData(babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.PositionKind); // Bypasses any instance data of mesh
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
        var originalNormals = geometry.getVerticesData(babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.NormalKind);
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
        var originalTangents = geometry.getVerticesData(babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.TangentKind);
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
        var originalColors = geometry.getVerticesData(babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.ColorKind);
        var buffer = geometry.getVertexBuffer(babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.ColorKind);
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
/* harmony export */   GetVertexBufferInfo: () => (/* binding */ GetVertexBufferInfo),
/* harmony export */   IndicesArrayToTypedArray: () => (/* binding */ IndicesArrayToTypedArray),
/* harmony export */   IsNoopNode: () => (/* binding */ IsNoopNode),
/* harmony export */   IsParentAddedByImporter: () => (/* binding */ IsParentAddedByImporter),
/* harmony export */   IsStandardVertexAttribute: () => (/* binding */ IsStandardVertexAttribute),
/* harmony export */   IsTriangleFillMode: () => (/* binding */ IsTriangleFillMode),
/* harmony export */   NormalizeTangent: () => (/* binding */ NormalizeTangent),
/* harmony export */   OmitDefaultValues: () => (/* binding */ OmitDefaultValues),
/* harmony export */   RotateNode180Y: () => (/* binding */ RotateNode180Y)
/* harmony export */ });
/* harmony import */ var babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Buffers/bufferUtils */ "babylonjs/Misc/fileTools");
/* harmony import */ var babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable jsdoc/require-jsdoc */






// Matrix that converts handedness on the X-axis. Can convert from LH to RH and vice versa.
var ConvertHandednessMatrix = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Matrix.Compose(new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3(-1, 1, 1), babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.Identity(), babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Zero());
// Default values for comparison.
var Epsilon = 1e-6;
var DefaultTranslation = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Zero();
var DefaultScale = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.One();
/**
 * Get the information necessary for enumerating a vertex buffer.
 * @param vertexBuffer the vertex buffer to enumerate
 * @param meshes the meshes that use the vertex buffer
 * @returns the information necessary to enumerate the vertex buffer
 */
function GetVertexBufferInfo(vertexBuffer, meshes) {
    var byteOffset = vertexBuffer.byteOffset, byteStride = vertexBuffer.byteStride, type = vertexBuffer.type, normalized = vertexBuffer.normalized;
    var componentCount = vertexBuffer.getSize();
    var totalVertices = meshes.reduce(function (max, current) {
        return current.getTotalVertices() > max ? current.getTotalVertices() : max;
    }, -Number.MAX_VALUE); // Get the max total vertices count, to ensure we capture the full range of vertex data used by the meshes.
    var count = totalVertices * componentCount;
    var kind = vertexBuffer.getKind();
    return { byteOffset: byteOffset, byteStride: byteStride, componentCount: componentCount, type: type, count: count, normalized: normalized, totalVertices: totalVertices, kind: kind };
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
/**
 * Converts, in-place, a left-handed quaternion to a right-handed quaternion via a change of basis.
 * @param value the unit quaternion to convert
 * @returns the converted quaternion
 */
function ConvertToRightHandedRotation(value) {
    /**
     * This is the simplified version of the following equation:
     *    q' = to_quaternion(M * to_matrix(q) * M^-1)
     * where M is the conversion matrix `convertHandednessMatrix`,
     * q is the input quaternion, and q' is the converted quaternion.
     * Reference: https://d3cw3dd2w32x2b.cloudfront.net/wp-content/uploads/2015/01/matrix-to-quat.pdf
     */
    if (value.x * value.x + value.y * value.y > 0.5) {
        var absX = Math.abs(value.x);
        var absY = Math.abs(value.y);
        if (absX > absY) {
            var sign = Math.sign(value.x);
            value.x = absX;
            value.y *= -sign;
            value.z *= -sign;
            value.w *= sign;
        }
        else {
            var sign = Math.sign(value.y);
            value.x *= -sign;
            value.y = absY;
            value.z *= sign;
            value.w *= -sign;
        }
    }
    else {
        var absZ = Math.abs(value.z);
        var absW = Math.abs(value.w);
        if (absZ > absW) {
            var sign = Math.sign(value.z);
            value.x *= -sign;
            value.y *= sign;
            value.z = absZ;
            value.w *= -sign;
        }
        else {
            var sign = Math.sign(value.w);
            value.x *= sign;
            value.y *= -sign;
            value.z *= -sign;
            value.w = absW;
        }
    }
    return value;
}
function ConvertToRightHandedNode(value) {
    var translation = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArrayToRef(value.translation || [0, 0, 0], 0, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Vector3[0]);
    var rotation = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.FromArrayToRef(value.rotation || [0, 0, 0, 1], 0, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Quaternion[0]);
    translation = ConvertToRightHandedPosition(translation);
    rotation = ConvertToRightHandedRotation(rotation);
    if (translation.equalsWithEpsilon(DefaultTranslation, Epsilon)) {
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
 * Pre-multiplies a 180-degree Y rotation to the quaternion, in order to match glTF's flipped forward direction for cameras.
 * @param rotation Target camera rotation.
 */
function ConvertCameraRotationToGLTF(rotation) {
    // Simplified from: rotation * (0, 1, 0, 0).
    rotation.copyFromFloats(-rotation.z, rotation.w, rotation.x, -rotation.y);
}
function RotateNode180Y(node) {
    babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.FromArrayToRef(node.rotation || [0, 0, 0, 1], 0, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Quaternion[1]);
    ConvertCameraRotationToGLTF(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Quaternion[1]);
    node.rotation = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Quaternion[1].asArray();
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
    if (parentTranslation.equalsWithEpsilon(DefaultTranslation, Epsilon)) {
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
    if (parentScale.equalsWithEpsilon(DefaultScale, Epsilon)) {
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
        var matrix = node.getWorldMatrix().multiplyToRef(ConvertHandednessMatrix, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Matrix[0]);
        if (!matrix.isIdentity()) {
            return false;
        }
    }
    // Geometry
    if (node instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.AbstractMesh && node.geometry) {
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
/* harmony export */   EXT_materials_diffuse_roughness: () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_3__.EXT_materials_diffuse_roughness),
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
/* harmony export */   EXT_materials_diffuse_roughness: () => (/* reexport safe */ serializers_glTF_2_0_index__WEBPACK_IMPORTED_MODULE_4__.EXT_materials_diffuse_roughness),
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

/***/ "babylonjs/Misc/fileTools":
/*!****************************************************************************************************!*\
  !*** external {"root":"BABYLON","commonjs":"babylonjs","commonjs2":"babylonjs","amd":"babylonjs"} ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_babylonjs_Misc_fileTools__;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFieWxvbi5nbFRGMlNlcmlhbGl6ZXIuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlZQTtBQUVBO0FBR0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFjQTtBQWJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBR0E7QUFDQTtBQUVBO0FBR0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBY0E7QUFiQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUdBO0FBQ0E7QUFFQTtBQUdBO0FBREE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBRUE7Ozs7Ozs7OztBQVNBO0FBQ0E7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdkVBOzs7O0FBd0VBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEpBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQTBCQTtBQUNBO0FBMUJBO0FBQ0E7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFTQTtBQUNBO0FBUEE7QUFEQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFPQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFXQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xMQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFlQTs7QUFFQTtBQUNBO0FBakJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQVdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBREE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFRQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQW5HQTs7OztBQW9HQTtBQUNBO0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pMQTtBQUVBO0FBR0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFjQTtBQWJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBR0E7QUFDQTtBQUVBO0FBR0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUVBO0FBR0E7QUFFQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQWNBO0FBYkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFHQTtBQUNBO0FBRUE7QUFHQTtBQURBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1R0E7QUFFQTtBQUVBO0FBR0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFjQTtBQWJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBR0E7QUFDQTtBQUVBO0FBR0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFDQTs7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEpBO0FBRUE7QUFFQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFZQTtBQUNBO0FBWkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFHQTtBQUVBO0FBQ0E7QUFHQTtBQURBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNFQTtBQUVBO0FBR0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBNkNBO0FBM0NBO0FBQ0E7QUFHQTtBQURBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUVBOzs7Ozs7QUFNQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBekJBOzs7O0FBMEJBO0FBQ0E7QUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkVBO0FBRUE7QUFFQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQVlBO0FBWEE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFHQTtBQURBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRUE7QUFFQTtBQUdBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBY0E7QUFiQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUdBO0FBQ0E7QUFFQTtBQUdBO0FBREE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUZBO0FBRUE7QUFHQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQWNBO0FBYkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBRUE7QUFHQTtBQURBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBbENBOzs7O0FBbUNBO0FBQ0E7QUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckZBO0FBRUE7QUFHQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQWNBO0FBYkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBREE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7O0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckhBO0FBRUE7QUFFQTtBQUVBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBY0E7QUFiQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7Ozs7OztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTs7O0FBSUE7QUFDQTs7QUFHQTs7OztBQUNBO0FBQ0E7QUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkhBO0FBRUE7QUFDQTtBQUVBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBWUE7QUFYQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBR0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFEQTtBQUVBO0FBRUE7QUFFQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQWNBO0FBYkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFHQTtBQUNBO0FBRUE7QUFHQTtBQURBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEhBO0FBR0E7QUFFQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBYUE7QUFaQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUdBO0FBREE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQW9KQTtBQWxKQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUFBO0FBQ0E7QUFDQTs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBS0E7QUFDQTtBQUVBO0FBaURBOzs7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUFBO0FBay9CQTtBQWovQkE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFhQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQWFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7QUFZQTtBQUNBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7OztBQVlBO0FBQ0E7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7QUFXQTtBQUNBOztBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7QUE5REE7QUFBQTtBQStEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBOUlBO0FBQUE7QUFBQTtBQStJQTtBQUNBO0FBQ0E7QUFFQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQWVBO0FBQ0E7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQVdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7O0FBUUE7QUFDQTtBQVFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7OztBQVFBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDemtDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQW1CQTtBQWRBO0FBSEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUVBO0FBRUE7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBR0E7QUFFQTtBQUNBO0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBcUJBO0FBcEJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQVdBO0FBQ0E7QUFUQTtBQUNBO0FBQ0E7QUFTQTs7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBOExBO0FBQUE7QUE3TEE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFTQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUE4SUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQWFBO0FBQ0E7QUE3SkE7QUFDQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFBQTtBQUFBOztBQUFBOzs7QUFBQTs7QUFBQTs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBQ0E7OztBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFEQTtBQUNBOzs7QUFMQTs7Ozs7O0FBUUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7OztBQUNBOztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUNBO0FBRUE7Ozs7QUFDQTs7QUFBQTtBQUNBOztBQUFBO0FBQ0E7Ozs7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7OztBQUNBO0FBQ0E7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7O0FBRUE7QUFFQTtBQUVBOztBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFoRUE7QUFBQTtBQUFBO0FBaUVBO0FBQ0E7QUFFQTs7Ozs7OztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTs7QUFBQTs7QUFBQTtBQUNBO0FBQ0E7O0FBQUE7O0FBQUE7QUFDQTtBQUNBOztBQUFBOztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFXQTs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7O0FBQ0E7QUFFQTtBQUVBOzs7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFEQTtBQUNBOzs7QUFGQTs7QUFLQTs7OztBQUNBO0FBRUE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQXBEQTtBQUNBO0FBQUE7QUFBQTtBQW9EQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBRUE7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUE1SUE7QUFBQTtBQUFBO0FBNklBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFhQTtBQUNBO0FBYUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7OztBQUFBO0FBQUE7QUFDQTtBQUNBOztBQURBO0FBQ0E7OztBQUZBOzs7QUFLQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFBQTs7O0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFDQTtBQUVBO0FBV0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFTQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUFBOzs7QUFDQTtBQUNBOztBQUFBOzs7QUFFQTtBQUNBOztBQUdBOzs7QUFHQTs7Ozs7QUFDQTtBQUVBOzs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7OztBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7QUFGQTtBQUNBO0FBQ0E7OztBQUlBO0FBRUE7QUFFQTtBQVlBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7OztBQTNFQTs7O0FBK0VBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBQ0E7QUFod0NBO0FBQ0E7QUFnd0NBO0FBQUE7QUFwekNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFOQTtBQUNBO0FBQ0E7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBS0E7QUFDQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBT0E7QUFBQTtBQU5BO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTs7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBOztBQUFBOzs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOztBQUFBO0FBRUE7QUFDQTtBQUNBOzs7O0FBQ0E7QUFFQTs7Ozs7O0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBQUE7QUFFQTs7QUFBQTs7Ozs7QUFDQTtBQUVBOzs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUVBO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7OztBQUFBO0FBQ0E7O0FBQUE7QUFFQTs7QUFBQTtBQUVBO0FBQUE7Ozs7QUFDQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7O0FBU0E7QUFDQTs7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUFBOztBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7QUFBQTtBQUNBOztBQUFBO0FBRUE7QUFDQTs7QUFFQTtBQUFBOztBQUVBO0FBQ0E7O0FBRUE7QUFBQTs7QUFHQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBOzs7O0FBRUE7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7O0FBT0E7QUFDQTs7Ozs7O0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUFBOztBQUdBOzs7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7O0FBT0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFHQTtBQUNBO0FBRUE7QUFDQTs7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7QUFFQTtBQUVBOzs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUFBOztBQUNBOztBQUFBOzs7QUFGQTtBQUlBOztBQUFBO0FBQ0E7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFDQTtBQUVBOzs7Ozs7QUFRQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7O0FBQUE7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7Ozs7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUFBOzs7QUFDQTtBQUxBOzs7O0FBTUE7QUFFQTs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBQ0E7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTs7QUFBQTtBQUNBO0FBQ0E7O0FBR0E7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcmdDQTtBQUVBO0FBQ0E7QUFDQTtBQVlBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeExBO0FBaUVBOztBQUVBO0FBQ0E7QUFBQTtBQXNDQTtBQXJDQTs7Ozs7O0FBTUE7QUFDQTs7Ozs7O0FBQ0E7QUFDQTs7QUFBQTs7O0FBR0E7QUFDQTs7QUFBQTtBQUNBO0FBRUE7Ozs7QUFDQTtBQUVBOzs7Ozs7QUFNQTtBQUNBOzs7Ozs7QUFDQTtBQUNBOztBQUFBOzs7QUFHQTtBQUNBOztBQUFBO0FBQ0E7QUFFQTs7OztBQUNBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5R0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7OztBQ2pEQTs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYubWpzIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2Rldi9zZXJpYWxpemVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9FWFRfbWF0ZXJpYWxzX2RpZmZ1c2Vfcm91Z2huZXNzLnRzIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2Rldi9zZXJpYWxpemVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9FWFRfbWVzaF9ncHVfaW5zdGFuY2luZy50cyIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy8uLi8uLi8uLi9kZXYvc2VyaWFsaXplcnMvc3JjL2dsVEYvMi4wL0V4dGVuc2lvbnMvS0hSX2RyYWNvX21lc2hfY29tcHJlc3Npb24udHMiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvLi4vLi4vLi4vZGV2L3NlcmlhbGl6ZXJzL3NyYy9nbFRGLzIuMC9FeHRlbnNpb25zL0tIUl9saWdodHNfcHVuY3R1YWwudHMiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvLi4vLi4vLi4vZGV2L3NlcmlhbGl6ZXJzL3NyYy9nbFRGLzIuMC9FeHRlbnNpb25zL0tIUl9tYXRlcmlhbHNfYW5pc290cm9weS50cyIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy8uLi8uLi8uLi9kZXYvc2VyaWFsaXplcnMvc3JjL2dsVEYvMi4wL0V4dGVuc2lvbnMvS0hSX21hdGVyaWFsc19jbGVhcmNvYXQudHMiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvLi4vLi4vLi4vZGV2L3NlcmlhbGl6ZXJzL3NyYy9nbFRGLzIuMC9FeHRlbnNpb25zL0tIUl9tYXRlcmlhbHNfZGlmZnVzZV90cmFuc21pc3Npb24udHMiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvLi4vLi4vLi4vZGV2L3NlcmlhbGl6ZXJzL3NyYy9nbFRGLzIuMC9FeHRlbnNpb25zL0tIUl9tYXRlcmlhbHNfZGlzcGVyc2lvbi50cyIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy8uLi8uLi8uLi9kZXYvc2VyaWFsaXplcnMvc3JjL2dsVEYvMi4wL0V4dGVuc2lvbnMvS0hSX21hdGVyaWFsc19lbWlzc2l2ZV9zdHJlbmd0aC50cyIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy8uLi8uLi8uLi9kZXYvc2VyaWFsaXplcnMvc3JjL2dsVEYvMi4wL0V4dGVuc2lvbnMvS0hSX21hdGVyaWFsc19pb3IudHMiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvLi4vLi4vLi4vZGV2L3NlcmlhbGl6ZXJzL3NyYy9nbFRGLzIuMC9FeHRlbnNpb25zL0tIUl9tYXRlcmlhbHNfaXJpZGVzY2VuY2UudHMiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvLi4vLi4vLi4vZGV2L3NlcmlhbGl6ZXJzL3NyYy9nbFRGLzIuMC9FeHRlbnNpb25zL0tIUl9tYXRlcmlhbHNfc2hlZW4udHMiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvLi4vLi4vLi4vZGV2L3NlcmlhbGl6ZXJzL3NyYy9nbFRGLzIuMC9FeHRlbnNpb25zL0tIUl9tYXRlcmlhbHNfc3BlY3VsYXIudHMiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvLi4vLi4vLi4vZGV2L3NlcmlhbGl6ZXJzL3NyYy9nbFRGLzIuMC9FeHRlbnNpb25zL0tIUl9tYXRlcmlhbHNfdHJhbnNtaXNzaW9uLnRzIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2Rldi9zZXJpYWxpemVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9LSFJfbWF0ZXJpYWxzX3VubGl0LnRzIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2Rldi9zZXJpYWxpemVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9LSFJfbWF0ZXJpYWxzX3ZvbHVtZS50cyIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy8uLi8uLi8uLi9kZXYvc2VyaWFsaXplcnMvc3JjL2dsVEYvMi4wL0V4dGVuc2lvbnMvS0hSX3RleHR1cmVfdHJhbnNmb3JtLnRzIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2Rldi9zZXJpYWxpemVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9pbmRleC50cyIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy8uLi8uLi8uLi9kZXYvc2VyaWFsaXplcnMvc3JjL2dsVEYvMi4wL2J1ZmZlck1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvLi4vLi4vLi4vZGV2L3NlcmlhbGl6ZXJzL3NyYy9nbFRGLzIuMC9kYXRhV3JpdGVyLnRzIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2Rldi9zZXJpYWxpemVycy9zcmMvZ2xURi8yLjAvZ2xURkFuaW1hdGlvbi50cyIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy8uLi8uLi8uLi9kZXYvc2VyaWFsaXplcnMvc3JjL2dsVEYvMi4wL2dsVEZEYXRhLnRzIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2Rldi9zZXJpYWxpemVycy9zcmMvZ2xURi8yLjAvZ2xURkV4cG9ydGVyLnRzIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2Rldi9zZXJpYWxpemVycy9zcmMvZ2xURi8yLjAvZ2xURk1hdGVyaWFsRXhwb3J0ZXIudHMiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvLi4vLi4vLi4vZGV2L3NlcmlhbGl6ZXJzL3NyYy9nbFRGLzIuMC9nbFRGTW9ycGhUYXJnZXRzVXRpbGl0aWVzLnRzIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2Rldi9zZXJpYWxpemVycy9zcmMvZ2xURi8yLjAvZ2xURlNlcmlhbGl6ZXIudHMiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvLi4vLi4vLi4vZGV2L3NlcmlhbGl6ZXJzL3NyYy9nbFRGLzIuMC9nbFRGVXRpbGl0aWVzLnRzIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2Rldi9zZXJpYWxpemVycy9zcmMvZ2xURi8yLjAvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvLi4vLi4vLi4vZGV2L3NlcmlhbGl6ZXJzL3NyYy9nbFRGL2dsVEZGaWxlRXhwb3J0ZXIudHMiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvLi4vLi4vLi4vbHRzL3NlcmlhbGl6ZXJzL3NyYy9sZWdhY3kvbGVnYWN5LWdsVEYyU2VyaWFsaXplci50cyIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy9leHRlcm5hbCB1bWQge1wicm9vdFwiOlwiQkFCWUxPTlwiLFwiY29tbW9uanNcIjpcImJhYnlsb25qc1wiLFwiY29tbW9uanMyXCI6XCJiYWJ5bG9uanNcIixcImFtZFwiOlwiYmFieWxvbmpzXCJ9Iiwid2VicGFjazovL1NFUklBTElaRVJTL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1NFUklBTElaRVJTL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL1NFUklBTElaRVJTL3dlYnBhY2svcnVudGltZS9jcmVhdGUgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL1NFUklBTElaRVJTL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL1NFUklBTElaRVJTL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy8uL3NyYy9nbFRGMi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJiYWJ5bG9uanNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJiYWJ5bG9uanMtc2VyaWFsaXplcnNcIiwgW1wiYmFieWxvbmpzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImJhYnlsb25qcy1zZXJpYWxpemVyc1wiXSA9IGZhY3RvcnkocmVxdWlyZShcImJhYnlsb25qc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiU0VSSUFMSVpFUlNcIl0gPSBmYWN0b3J5KHJvb3RbXCJCQUJZTE9OXCJdKTtcbn0pKCh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdGhpcyksIChfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2JhYnlsb25qc19NaXNjX2ZpbGVUb29sc19fKSA9PiB7XG5yZXR1cm4gIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXG5cblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1Jcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UsIFN1cHByZXNzZWRFcnJvciwgU3ltYm9sLCBJdGVyYXRvciAqL1xuXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcbiAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcbiAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbn1cblxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xuICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xuICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHQ7XG4gIH1cbiAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xuICB2YXIgdCA9IHt9O1xuICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgIHRbcF0gPSBzW3BdO1xuICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxuICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgIH1cbiAgcmV0dXJuIHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xuICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fZXNEZWNvcmF0ZShjdG9yLCBkZXNjcmlwdG9ySW4sIGRlY29yYXRvcnMsIGNvbnRleHRJbiwgaW5pdGlhbGl6ZXJzLCBleHRyYUluaXRpYWxpemVycykge1xuICBmdW5jdGlvbiBhY2NlcHQoZikgeyBpZiAoZiAhPT0gdm9pZCAwICYmIHR5cGVvZiBmICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJGdW5jdGlvbiBleHBlY3RlZFwiKTsgcmV0dXJuIGY7IH1cbiAgdmFyIGtpbmQgPSBjb250ZXh0SW4ua2luZCwga2V5ID0ga2luZCA9PT0gXCJnZXR0ZXJcIiA/IFwiZ2V0XCIgOiBraW5kID09PSBcInNldHRlclwiID8gXCJzZXRcIiA6IFwidmFsdWVcIjtcbiAgdmFyIHRhcmdldCA9ICFkZXNjcmlwdG9ySW4gJiYgY3RvciA/IGNvbnRleHRJbltcInN0YXRpY1wiXSA/IGN0b3IgOiBjdG9yLnByb3RvdHlwZSA6IG51bGw7XG4gIHZhciBkZXNjcmlwdG9yID0gZGVzY3JpcHRvckluIHx8ICh0YXJnZXQgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwgY29udGV4dEluLm5hbWUpIDoge30pO1xuICB2YXIgXywgZG9uZSA9IGZhbHNlO1xuICBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgdmFyIGNvbnRleHQgPSB7fTtcbiAgICAgIGZvciAodmFyIHAgaW4gY29udGV4dEluKSBjb250ZXh0W3BdID0gcCA9PT0gXCJhY2Nlc3NcIiA/IHt9IDogY29udGV4dEluW3BdO1xuICAgICAgZm9yICh2YXIgcCBpbiBjb250ZXh0SW4uYWNjZXNzKSBjb250ZXh0LmFjY2Vzc1twXSA9IGNvbnRleHRJbi5hY2Nlc3NbcF07XG4gICAgICBjb250ZXh0LmFkZEluaXRpYWxpemVyID0gZnVuY3Rpb24gKGYpIHsgaWYgKGRvbmUpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgYWRkIGluaXRpYWxpemVycyBhZnRlciBkZWNvcmF0aW9uIGhhcyBjb21wbGV0ZWRcIik7IGV4dHJhSW5pdGlhbGl6ZXJzLnB1c2goYWNjZXB0KGYgfHwgbnVsbCkpOyB9O1xuICAgICAgdmFyIHJlc3VsdCA9ICgwLCBkZWNvcmF0b3JzW2ldKShraW5kID09PSBcImFjY2Vzc29yXCIgPyB7IGdldDogZGVzY3JpcHRvci5nZXQsIHNldDogZGVzY3JpcHRvci5zZXQgfSA6IGRlc2NyaXB0b3Jba2V5XSwgY29udGV4dCk7XG4gICAgICBpZiAoa2luZCA9PT0gXCJhY2Nlc3NvclwiKSB7XG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gdm9pZCAwKSBjb250aW51ZTtcbiAgICAgICAgICBpZiAocmVzdWx0ID09PSBudWxsIHx8IHR5cGVvZiByZXN1bHQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3QgZXhwZWN0ZWRcIik7XG4gICAgICAgICAgaWYgKF8gPSBhY2NlcHQocmVzdWx0LmdldCkpIGRlc2NyaXB0b3IuZ2V0ID0gXztcbiAgICAgICAgICBpZiAoXyA9IGFjY2VwdChyZXN1bHQuc2V0KSkgZGVzY3JpcHRvci5zZXQgPSBfO1xuICAgICAgICAgIGlmIChfID0gYWNjZXB0KHJlc3VsdC5pbml0KSkgaW5pdGlhbGl6ZXJzLnVuc2hpZnQoXyk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChfID0gYWNjZXB0KHJlc3VsdCkpIHtcbiAgICAgICAgICBpZiAoa2luZCA9PT0gXCJmaWVsZFwiKSBpbml0aWFsaXplcnMudW5zaGlmdChfKTtcbiAgICAgICAgICBlbHNlIGRlc2NyaXB0b3Jba2V5XSA9IF87XG4gICAgICB9XG4gIH1cbiAgaWYgKHRhcmdldCkgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgY29udGV4dEluLm5hbWUsIGRlc2NyaXB0b3IpO1xuICBkb25lID0gdHJ1ZTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3J1bkluaXRpYWxpemVycyh0aGlzQXJnLCBpbml0aWFsaXplcnMsIHZhbHVlKSB7XG4gIHZhciB1c2VWYWx1ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGluaXRpYWxpemVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFsdWUgPSB1c2VWYWx1ZSA/IGluaXRpYWxpemVyc1tpXS5jYWxsKHRoaXNBcmcsIHZhbHVlKSA6IGluaXRpYWxpemVyc1tpXS5jYWxsKHRoaXNBcmcpO1xuICB9XG4gIHJldHVybiB1c2VWYWx1ZSA/IHZhbHVlIDogdm9pZCAwO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fcHJvcEtleSh4KSB7XG4gIHJldHVybiB0eXBlb2YgeCA9PT0gXCJzeW1ib2xcIiA/IHggOiBcIlwiLmNvbmNhdCh4KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3NldEZ1bmN0aW9uTmFtZShmLCBuYW1lLCBwcmVmaXgpIHtcbiAgaWYgKHR5cGVvZiBuYW1lID09PSBcInN5bWJvbFwiKSBuYW1lID0gbmFtZS5kZXNjcmlwdGlvbiA/IFwiW1wiLmNvbmNhdChuYW1lLmRlc2NyaXB0aW9uLCBcIl1cIikgOiBcIlwiO1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGYsIFwibmFtZVwiLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHByZWZpeCA/IFwiXCIuY29uY2F0KHByZWZpeCwgXCIgXCIsIG5hbWUpIDogbmFtZSB9KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XG4gIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGcgPSBPYmplY3QuY3JlYXRlKCh0eXBlb2YgSXRlcmF0b3IgPT09IFwiZnVuY3Rpb25cIiA/IEl0ZXJhdG9yIDogT2JqZWN0KS5wcm90b3R5cGUpO1xuICByZXR1cm4gZy5uZXh0ID0gdmVyYigwKSwgZ1tcInRocm93XCJdID0gdmVyYigxKSwgZ1tcInJldHVyblwiXSA9IHZlcmIoMiksIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgIHdoaWxlIChnICYmIChnID0gMCwgb3BbMF0gJiYgKF8gPSAwKSksIF8pIHRyeSB7XG4gICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgfVxufVxuXG5leHBvcnQgdmFyIF9fY3JlYXRlQmluZGluZyA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xuICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcbiAgfVxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgb1trMl0gPSBtW2tdO1xufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgbykge1xuICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIHApKSBfX2NyZWF0ZUJpbmRpbmcobywgbSwgcCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XG4gIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XG4gIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xuICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XG4gICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcbiAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XG4gICAgICB9XG4gIH07XG4gIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XG4gIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcbiAgaWYgKCFtKSByZXR1cm4gbztcbiAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XG4gIHRyeSB7XG4gICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcbiAgfVxuICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cbiAgZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xuICAgICAgfVxuICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XG4gIH1cbiAgcmV0dXJuIGFyO1xufVxuXG4vKiogQGRlcHJlY2F0ZWQgKi9cbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcbiAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXG4gICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XG4gIHJldHVybiBhcjtcbn1cblxuLyoqIEBkZXByZWNhdGVkICovXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XG4gIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xuICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXG4gICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcbiAgICAgICAgICByW2tdID0gYVtqXTtcbiAgcmV0dXJuIHI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5KHRvLCBmcm9tLCBwYWNrKSB7XG4gIGlmIChwYWNrIHx8IGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIGZvciAodmFyIGkgPSAwLCBsID0gZnJvbS5sZW5ndGgsIGFyOyBpIDwgbDsgaSsrKSB7XG4gICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XG4gICAgICAgICAgaWYgKCFhcikgYXIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tLCAwLCBpKTtcbiAgICAgICAgICBhcltpXSA9IGZyb21baV07XG4gICAgICB9XG4gIH1cbiAgcmV0dXJuIHRvLmNvbmNhdChhciB8fCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcbiAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xuICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xuICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xuICByZXR1cm4gaSA9IE9iamVjdC5jcmVhdGUoKHR5cGVvZiBBc3luY0l0ZXJhdG9yID09PSBcImZ1bmN0aW9uXCIgPyBBc3luY0l0ZXJhdG9yIDogT2JqZWN0KS5wcm90b3R5cGUpLCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIsIGF3YWl0UmV0dXJuKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xuICBmdW5jdGlvbiBhd2FpdFJldHVybihmKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZiwgcmVqZWN0KTsgfTsgfVxuICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaWYgKGdbbl0pIHsgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgaWYgKGYpIGlbbl0gPSBmKGlbbl0pOyB9IH1cbiAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxuICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cbiAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxuICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XG4gIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xuICB2YXIgaSwgcDtcbiAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcbiAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogZmFsc2UgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xuICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xuICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xuICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XG4gIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cbiAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcbiAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cbiAgcmV0dXJuIGNvb2tlZDtcbn07XG5cbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gIG9bXCJkZWZhdWx0XCJdID0gdjtcbn07XG5cbnZhciBvd25LZXlzID0gZnVuY3Rpb24obykge1xuICBvd25LZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gKG8pIHtcbiAgICB2YXIgYXIgPSBbXTtcbiAgICBmb3IgKHZhciBrIGluIG8pIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgaykpIGFyW2FyLmxlbmd0aF0gPSBrO1xuICAgIHJldHVybiBhcjtcbiAgfTtcbiAgcmV0dXJuIG93bktleXMobyk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xuICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayA9IG93bktleXMobW9kKSwgaSA9IDA7IGkgPCBrLmxlbmd0aDsgaSsrKSBpZiAoa1tpXSAhPT0gXCJkZWZhdWx0XCIpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwga1tpXSk7XG4gIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XG4gIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xuICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XG4gIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XG4gIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcbiAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xuICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRJbihzdGF0ZSwgcmVjZWl2ZXIpIHtcbiAgaWYgKHJlY2VpdmVyID09PSBudWxsIHx8ICh0eXBlb2YgcmVjZWl2ZXIgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHJlY2VpdmVyICE9PSBcImZ1bmN0aW9uXCIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHVzZSAnaW4nIG9wZXJhdG9yIG9uIG5vbi1vYmplY3RcIik7XG4gIHJldHVybiB0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyID09PSBzdGF0ZSA6IHN0YXRlLmhhcyhyZWNlaXZlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2FkZERpc3Bvc2FibGVSZXNvdXJjZShlbnYsIHZhbHVlLCBhc3luYykge1xuICBpZiAodmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHZvaWQgMCkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHZhbHVlICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3QgZXhwZWN0ZWQuXCIpO1xuICAgIHZhciBkaXNwb3NlLCBpbm5lcjtcbiAgICBpZiAoYXN5bmMpIHtcbiAgICAgIGlmICghU3ltYm9sLmFzeW5jRGlzcG9zZSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0Rpc3Bvc2UgaXMgbm90IGRlZmluZWQuXCIpO1xuICAgICAgZGlzcG9zZSA9IHZhbHVlW1N5bWJvbC5hc3luY0Rpc3Bvc2VdO1xuICAgIH1cbiAgICBpZiAoZGlzcG9zZSA9PT0gdm9pZCAwKSB7XG4gICAgICBpZiAoIVN5bWJvbC5kaXNwb3NlKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmRpc3Bvc2UgaXMgbm90IGRlZmluZWQuXCIpO1xuICAgICAgZGlzcG9zZSA9IHZhbHVlW1N5bWJvbC5kaXNwb3NlXTtcbiAgICAgIGlmIChhc3luYykgaW5uZXIgPSBkaXNwb3NlO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGRpc3Bvc2UgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdCBub3QgZGlzcG9zYWJsZS5cIik7XG4gICAgaWYgKGlubmVyKSBkaXNwb3NlID0gZnVuY3Rpb24oKSB7IHRyeSB7IGlubmVyLmNhbGwodGhpcyk7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIFByb21pc2UucmVqZWN0KGUpOyB9IH07XG4gICAgZW52LnN0YWNrLnB1c2goeyB2YWx1ZTogdmFsdWUsIGRpc3Bvc2U6IGRpc3Bvc2UsIGFzeW5jOiBhc3luYyB9KTtcbiAgfVxuICBlbHNlIGlmIChhc3luYykge1xuICAgIGVudi5zdGFjay5wdXNoKHsgYXN5bmM6IHRydWUgfSk7XG4gIH1cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG52YXIgX1N1cHByZXNzZWRFcnJvciA9IHR5cGVvZiBTdXBwcmVzc2VkRXJyb3IgPT09IFwiZnVuY3Rpb25cIiA/IFN1cHByZXNzZWRFcnJvciA6IGZ1bmN0aW9uIChlcnJvciwgc3VwcHJlc3NlZCwgbWVzc2FnZSkge1xuICB2YXIgZSA9IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgcmV0dXJuIGUubmFtZSA9IFwiU3VwcHJlc3NlZEVycm9yXCIsIGUuZXJyb3IgPSBlcnJvciwgZS5zdXBwcmVzc2VkID0gc3VwcHJlc3NlZCwgZTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2Rpc3Bvc2VSZXNvdXJjZXMoZW52KSB7XG4gIGZ1bmN0aW9uIGZhaWwoZSkge1xuICAgIGVudi5lcnJvciA9IGVudi5oYXNFcnJvciA/IG5ldyBfU3VwcHJlc3NlZEVycm9yKGUsIGVudi5lcnJvciwgXCJBbiBlcnJvciB3YXMgc3VwcHJlc3NlZCBkdXJpbmcgZGlzcG9zYWwuXCIpIDogZTtcbiAgICBlbnYuaGFzRXJyb3IgPSB0cnVlO1xuICB9XG4gIHZhciByLCBzID0gMDtcbiAgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICB3aGlsZSAociA9IGVudi5zdGFjay5wb3AoKSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFyLmFzeW5jICYmIHMgPT09IDEpIHJldHVybiBzID0gMCwgZW52LnN0YWNrLnB1c2gociksIFByb21pc2UucmVzb2x2ZSgpLnRoZW4obmV4dCk7XG4gICAgICAgIGlmIChyLmRpc3Bvc2UpIHtcbiAgICAgICAgICB2YXIgcmVzdWx0ID0gci5kaXNwb3NlLmNhbGwoci52YWx1ZSk7XG4gICAgICAgICAgaWYgKHIuYXN5bmMpIHJldHVybiBzIHw9IDIsIFByb21pc2UucmVzb2x2ZShyZXN1bHQpLnRoZW4obmV4dCwgZnVuY3Rpb24oZSkgeyBmYWlsKGUpOyByZXR1cm4gbmV4dCgpOyB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHMgfD0gMTtcbiAgICAgIH1cbiAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGZhaWwoZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChzID09PSAxKSByZXR1cm4gZW52Lmhhc0Vycm9yID8gUHJvbWlzZS5yZWplY3QoZW52LmVycm9yKSA6IFByb21pc2UucmVzb2x2ZSgpO1xuICAgIGlmIChlbnYuaGFzRXJyb3IpIHRocm93IGVudi5lcnJvcjtcbiAgfVxuICByZXR1cm4gbmV4dCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19yZXdyaXRlUmVsYXRpdmVJbXBvcnRFeHRlbnNpb24ocGF0aCwgcHJlc2VydmVKc3gpIHtcbiAgaWYgKHR5cGVvZiBwYXRoID09PSBcInN0cmluZ1wiICYmIC9eXFwuXFwuP1xcLy8udGVzdChwYXRoKSkge1xuICAgICAgcmV0dXJuIHBhdGgucmVwbGFjZSgvXFwuKHRzeCkkfCgoPzpcXC5kKT8pKCg/OlxcLlteLi9dKz8pPylcXC4oW2NtXT8pdHMkL2ksIGZ1bmN0aW9uIChtLCB0c3gsIGQsIGV4dCwgY20pIHtcbiAgICAgICAgICByZXR1cm4gdHN4ID8gcHJlc2VydmVKc3ggPyBcIi5qc3hcIiA6IFwiLmpzXCIgOiBkICYmICghZXh0IHx8ICFjbSkgPyBtIDogKGQgKyBleHQgKyBcIi5cIiArIGNtLnRvTG93ZXJDYXNlKCkgKyBcImpzXCIpO1xuICAgICAgfSk7XG4gIH1cbiAgcmV0dXJuIHBhdGg7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgX19leHRlbmRzLFxuICBfX2Fzc2lnbixcbiAgX19yZXN0LFxuICBfX2RlY29yYXRlLFxuICBfX3BhcmFtLFxuICBfX2VzRGVjb3JhdGUsXG4gIF9fcnVuSW5pdGlhbGl6ZXJzLFxuICBfX3Byb3BLZXksXG4gIF9fc2V0RnVuY3Rpb25OYW1lLFxuICBfX21ldGFkYXRhLFxuICBfX2F3YWl0ZXIsXG4gIF9fZ2VuZXJhdG9yLFxuICBfX2NyZWF0ZUJpbmRpbmcsXG4gIF9fZXhwb3J0U3RhcixcbiAgX192YWx1ZXMsXG4gIF9fcmVhZCxcbiAgX19zcHJlYWQsXG4gIF9fc3ByZWFkQXJyYXlzLFxuICBfX3NwcmVhZEFycmF5LFxuICBfX2F3YWl0LFxuICBfX2FzeW5jR2VuZXJhdG9yLFxuICBfX2FzeW5jRGVsZWdhdG9yLFxuICBfX2FzeW5jVmFsdWVzLFxuICBfX21ha2VUZW1wbGF0ZU9iamVjdCxcbiAgX19pbXBvcnRTdGFyLFxuICBfX2ltcG9ydERlZmF1bHQsXG4gIF9fY2xhc3NQcml2YXRlRmllbGRHZXQsXG4gIF9fY2xhc3NQcml2YXRlRmllbGRTZXQsXG4gIF9fY2xhc3NQcml2YXRlRmllbGRJbixcbiAgX19hZGREaXNwb3NhYmxlUmVzb3VyY2UsXG4gIF9fZGlzcG9zZVJlc291cmNlcyxcbiAgX19yZXdyaXRlUmVsYXRpdmVJbXBvcnRFeHRlbnNpb24sXG59O1xuIiwiaW1wb3J0IHR5cGUgeyBJTWF0ZXJpYWwsIElFWFRNYXRlcmlhbHNEaWZmdXNlUm91Z2huZXNzIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgdHlwZSB7IElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMiB9IGZyb20gXCIuLi9nbFRGRXhwb3J0ZXJFeHRlbnNpb25cIjtcclxuaW1wb3J0IHsgR0xURkV4cG9ydGVyIH0gZnJvbSBcIi4uL2dsVEZFeHBvcnRlclwiO1xyXG5pbXBvcnQgdHlwZSB7IE1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IFBCUkJhc2VNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9QQlIvcGJyQmFzZU1hdGVyaWFsXCI7XHJcbmltcG9ydCB0eXBlIHsgQmFzZVRleHR1cmUgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvYmFzZVRleHR1cmVcIjtcclxuXHJcbmNvbnN0IE5BTUUgPSBcIkVYVF9tYXRlcmlhbHNfZGlmZnVzZV9yb3VnaG5lc3NcIjtcclxuXHJcbi8qKlxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGNsYXNzIEVYVF9tYXRlcmlhbHNfZGlmZnVzZV9yb3VnaG5lc3MgaW1wbGVtZW50cyBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIge1xyXG4gICAgLyoqIE5hbWUgb2YgdGhpcyBleHRlbnNpb24gKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lID0gTkFNRTtcclxuXHJcbiAgICAvKiogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIGVuYWJsZWQgKi9cclxuICAgIHB1YmxpYyBlbmFibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAvKiogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIHJlcXVpcmVkICovXHJcbiAgICBwdWJsaWMgcmVxdWlyZWQgPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIF9leHBvcnRlcjogR0xURkV4cG9ydGVyO1xyXG5cclxuICAgIHByaXZhdGUgX3dhc1VzZWQgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihleHBvcnRlcjogR0xURkV4cG9ydGVyKSB7XHJcbiAgICAgICAgdGhpcy5fZXhwb3J0ZXIgPSBleHBvcnRlcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHt9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGdldCB3YXNVc2VkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl93YXNVc2VkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwb3N0RXhwb3J0TWF0ZXJpYWxBZGRpdGlvbmFsVGV4dHVyZXM/KGNvbnRleHQ6IHN0cmluZywgbm9kZTogSU1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsKTogQmFzZVRleHR1cmVbXSB7XHJcbiAgICAgICAgY29uc3QgYWRkaXRpb25hbFRleHR1cmVzOiBCYXNlVGV4dHVyZVtdID0gW107XHJcbiAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbCBpbnN0YW5jZW9mIFBCUkJhc2VNYXRlcmlhbCkge1xyXG4gICAgICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsLl9iYXNlRGlmZnVzZVJvdWdobmVzcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbC5fYmFzZURpZmZ1c2VSb3VnaG5lc3NUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkaXRpb25hbFRleHR1cmVzLnB1c2goYmFieWxvbk1hdGVyaWFsLl9iYXNlRGlmZnVzZVJvdWdobmVzc1RleHR1cmUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFkZGl0aW9uYWxUZXh0dXJlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxyXG4gICAgcHVibGljIHBvc3RFeHBvcnRNYXRlcmlhbEFzeW5jPyhjb250ZXh0OiBzdHJpbmcsIG5vZGU6IElNYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCk6IFByb21pc2U8SU1hdGVyaWFsPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwgaW5zdGFuY2VvZiBQQlJCYXNlTWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgICAgIGlmICghYmFieWxvbk1hdGVyaWFsLl9iYXNlRGlmZnVzZVJvdWdobmVzcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUobm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX3dhc1VzZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIG5vZGUuZXh0ZW5zaW9ucyA9IG5vZGUuZXh0ZW5zaW9ucyB8fCB7fTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkaWZmdXNlUm91Z2huZXNzVGV4dHVyZUluZm8gPSB0aGlzLl9leHBvcnRlci5fbWF0ZXJpYWxFeHBvcnRlci5nZXRUZXh0dXJlSW5mbyhiYWJ5bG9uTWF0ZXJpYWwuX2Jhc2VEaWZmdXNlUm91Z2huZXNzVGV4dHVyZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZGlmZnVzZVJvdWdobmVzc0luZm86IElFWFRNYXRlcmlhbHNEaWZmdXNlUm91Z2huZXNzID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpZmZ1c2VSb3VnaG5lc3NGYWN0b3I6IGJhYnlsb25NYXRlcmlhbC5fYmFzZURpZmZ1c2VSb3VnaG5lc3MsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlmZnVzZVJvdWdobmVzc1RleHR1cmU6IGRpZmZ1c2VSb3VnaG5lc3NUZXh0dXJlSW5mbyA/PyB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChkaWZmdXNlUm91Z2huZXNzSW5mby5kaWZmdXNlUm91Z2huZXNzVGV4dHVyZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2V4cG9ydGVyLl9tYXRlcmlhbE5lZWRzVVZzU2V0LmFkZChiYWJ5bG9uTWF0ZXJpYWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIG5vZGUuZXh0ZW5zaW9uc1tOQU1FXSA9IGRpZmZ1c2VSb3VnaG5lc3NJbmZvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc29sdmUobm9kZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkdMVEZFeHBvcnRlci5SZWdpc3RlckV4dGVuc2lvbihOQU1FLCAoZXhwb3J0ZXIpID0+IG5ldyBFWFRfbWF0ZXJpYWxzX2RpZmZ1c2Vfcm91Z2huZXNzKGV4cG9ydGVyKSk7XHJcbiIsImltcG9ydCB0eXBlIHsgSU5vZGUsIElFWFRNZXNoR3B1SW5zdGFuY2luZyB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgQWNjZXNzb3JUeXBlLCBBY2Nlc3NvckNvbXBvbmVudFR5cGUgfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB0eXBlIHsgSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyIH0gZnJvbSBcIi4uL2dsVEZFeHBvcnRlckV4dGVuc2lvblwiO1xyXG5pbXBvcnQgdHlwZSB7IEJ1ZmZlck1hbmFnZXIgfSBmcm9tIFwiLi4vYnVmZmVyTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBHTFRGRXhwb3J0ZXIgfSBmcm9tIFwiLi4vZ2xURkV4cG9ydGVyXCI7XHJcbmltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xyXG5pbXBvcnQgdHlwZSB7IE5vZGUgfSBmcm9tIFwiY29yZS9ub2RlXCI7XHJcbmltcG9ydCB7IE1lc2ggfSBmcm9tIFwiY29yZS9NZXNoZXMvbWVzaFwiO1xyXG5pbXBvcnQgXCJjb3JlL01lc2hlcy90aGluSW5zdGFuY2VNZXNoXCI7XHJcbmltcG9ydCB7IFRtcFZlY3RvcnMsIFF1YXRlcm5pb24sIFZlY3RvcjMgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLnZlY3RvclwiO1xyXG5pbXBvcnQgeyBDb252ZXJ0VG9SaWdodEhhbmRlZFBvc2l0aW9uLCBDb252ZXJ0VG9SaWdodEhhbmRlZFJvdGF0aW9uIH0gZnJvbSBcIi4uL2dsVEZVdGlsaXRpZXNcIjtcclxuXHJcbmNvbnN0IE5BTUUgPSBcIkVYVF9tZXNoX2dwdV9pbnN0YW5jaW5nXCI7XHJcblxyXG4vKipcclxuICogW1NwZWNpZmljYXRpb25dKGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9ibG9iL21haW4vZXh0ZW5zaW9ucy8yLjAvVmVuZG9yL0VYVF9tZXNoX2dwdV9pbnN0YW5jaW5nL1JFQURNRS5tZClcclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGNsYXNzIEVYVF9tZXNoX2dwdV9pbnN0YW5jaW5nIGltcGxlbWVudHMgSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyIHtcclxuICAgIC8qKiBOYW1lIG9mIHRoaXMgZXh0ZW5zaW9uICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZSA9IE5BTUU7XHJcblxyXG4gICAgLyoqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyBlbmFibGVkICovXHJcbiAgICBwdWJsaWMgZW5hYmxlZCA9IHRydWU7XHJcblxyXG4gICAgLyoqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyByZXF1aXJlZCAqL1xyXG4gICAgcHVibGljIHJlcXVpcmVkID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBfZXhwb3J0ZXI6IEdMVEZFeHBvcnRlcjtcclxuXHJcbiAgICBwcml2YXRlIF93YXNVc2VkID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZXhwb3J0ZXI6IEdMVEZFeHBvcnRlcikge1xyXG4gICAgICAgIHRoaXMuX2V4cG9ydGVyID0gZXhwb3J0ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7fVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBnZXQgd2FzVXNlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fd2FzVXNlZDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFmdGVyIG5vZGUgaXMgZXhwb3J0ZWRcclxuICAgICAqIEBwYXJhbSBjb250ZXh0IHRoZSBHTFRGIGNvbnRleHQgd2hlbiBsb2FkaW5nIHRoZSBhc3NldFxyXG4gICAgICogQHBhcmFtIG5vZGUgdGhlIG5vZGUgZXhwb3J0ZWRcclxuICAgICAqIEBwYXJhbSBiYWJ5bG9uTm9kZSB0aGUgY29ycmVzcG9uZGluZyBiYWJ5bG9uIG5vZGVcclxuICAgICAqIEBwYXJhbSBub2RlTWFwIG1hcCBmcm9tIGJhYnlsb24gbm9kZSBpZCB0byBub2RlIGluZGV4XHJcbiAgICAgKiBAcGFyYW0gY29udmVydFRvUmlnaHRIYW5kZWQgdHJ1ZSBpZiB3ZSBuZWVkIHRvIGNvbnZlcnQgZGF0YSBmcm9tIGxlZnQgaGFuZCB0byByaWdodCBoYW5kIHN5c3RlbS5cclxuICAgICAqIEBwYXJhbSBidWZmZXJNYW5hZ2VyIGJ1ZmZlciBtYW5hZ2VyXHJcbiAgICAgKiBAcmV0dXJucyBudWxsYWJsZSBwcm9taXNlLCByZXNvbHZlcyB3aXRoIHRoZSBub2RlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhc3luYyBwb3N0RXhwb3J0Tm9kZUFzeW5jKFxyXG4gICAgICAgIGNvbnRleHQ6IHN0cmluZyxcclxuICAgICAgICBub2RlOiBOdWxsYWJsZTxJTm9kZT4sXHJcbiAgICAgICAgYmFieWxvbk5vZGU6IE5vZGUsXHJcbiAgICAgICAgbm9kZU1hcDogTWFwPE5vZGUsIG51bWJlcj4sXHJcbiAgICAgICAgY29udmVydFRvUmlnaHRIYW5kZWQ6IGJvb2xlYW4sXHJcbiAgICAgICAgYnVmZmVyTWFuYWdlcjogQnVmZmVyTWFuYWdlclxyXG4gICAgKTogUHJvbWlzZTxOdWxsYWJsZTxJTm9kZT4+IHtcclxuICAgICAgICByZXR1cm4gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgaWYgKG5vZGUgJiYgYmFieWxvbk5vZGUgaW5zdGFuY2VvZiBNZXNoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYmFieWxvbk5vZGUuaGFzVGhpbkluc3RhbmNlcyAmJiB0aGlzLl9leHBvcnRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3dhc1VzZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBub1RyYW5zbGF0aW9uID0gVmVjdG9yMy5aZXJvKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm9Sb3RhdGlvbiA9IFF1YXRlcm5pb24uSWRlbnRpdHkoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBub1NjYWxlID0gVmVjdG9yMy5PbmUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcmV0cmlldmUgYWxsIHRoZSBpbnN0YW5jZSB3b3JsZCBtYXRyaXhcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRyaXggPSBiYWJ5bG9uTm9kZS50aGluSW5zdGFuY2VHZXRXb3JsZE1hdHJpY2VzKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGl3dCA9IFRtcFZlY3RvcnMuVmVjdG9yM1syXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpd3IgPSBUbXBWZWN0b3JzLlF1YXRlcm5pb25bMV07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXdzID0gVG1wVmVjdG9ycy5WZWN0b3IzWzNdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgaGFzQW55SW5zdGFuY2VXb3JsZFRyYW5zbGF0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGhhc0FueUluc3RhbmNlV29ybGRSb3RhdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBoYXNBbnlJbnN0YW5jZVdvcmxkU2NhbGUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcHJlcGFyZSB0ZW1wIGJ1ZmZlcnNcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0cmFuc2xhdGlvbkJ1ZmZlciA9IG5ldyBGbG9hdDMyQXJyYXkoYmFieWxvbk5vZGUudGhpbkluc3RhbmNlQ291bnQgKiAzKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByb3RhdGlvbkJ1ZmZlciA9IG5ldyBGbG9hdDMyQXJyYXkoYmFieWxvbk5vZGUudGhpbkluc3RhbmNlQ291bnQgKiA0KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzY2FsZUJ1ZmZlciA9IG5ldyBGbG9hdDMyQXJyYXkoYmFieWxvbk5vZGUudGhpbkluc3RhbmNlQ291bnQgKiAzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgbSBvZiBtYXRyaXgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbS5kZWNvbXBvc2UoaXdzLCBpd3IsIGl3dCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29udmVydFRvUmlnaHRIYW5kZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnZlcnRUb1JpZ2h0SGFuZGVkUG9zaXRpb24oaXd0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnZlcnRUb1JpZ2h0SGFuZGVkUm90YXRpb24oaXdyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZmlsbCB0aGUgdGVtcCBidWZmZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRpb25CdWZmZXIuc2V0KGl3dC5hc0FycmF5KCksIGkgKiAzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm90YXRpb25CdWZmZXIuc2V0KGl3ci5ub3JtYWxpemUoKS5hc0FycmF5KCksIGkgKiA0KTsgLy8gZW5zdXJlIHRoZSBxdWF0ZXJuaW9uIGlzIG5vcm1hbGl6ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGVCdWZmZXIuc2V0KGl3cy5hc0FycmF5KCksIGkgKiAzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgaXMgd2hlcmUgd2UgZGVjaWRlIGlmIHRoZXJlIGlzIGFueSB0cmFuc2Zvcm1hdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYXNBbnlJbnN0YW5jZVdvcmxkVHJhbnNsYXRpb24gPSBoYXNBbnlJbnN0YW5jZVdvcmxkVHJhbnNsYXRpb24gfHwgIWl3dC5lcXVhbHNXaXRoRXBzaWxvbihub1RyYW5zbGF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFzQW55SW5zdGFuY2VXb3JsZFJvdGF0aW9uID0gaGFzQW55SW5zdGFuY2VXb3JsZFJvdGF0aW9uIHx8ICFpd3IuZXF1YWxzV2l0aEVwc2lsb24obm9Sb3RhdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhc0FueUluc3RhbmNlV29ybGRTY2FsZSA9IGhhc0FueUluc3RhbmNlV29ybGRTY2FsZSB8fCAhaXdzLmVxdWFsc1dpdGhFcHNpbG9uKG5vU2NhbGUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXh0ZW5zaW9uOiBJRVhUTWVzaEdwdUluc3RhbmNpbmcgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGRvIHdlIG5lZWQgdG8gd3JpdGUgVFJBTlNMQVRJT04gP1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChoYXNBbnlJbnN0YW5jZVdvcmxkVHJhbnNsYXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXh0ZW5zaW9uLmF0dHJpYnV0ZXNbXCJUUkFOU0xBVElPTlwiXSA9IHRoaXMuX2J1aWxkQWNjZXNzb3IodHJhbnNsYXRpb25CdWZmZXIsIEFjY2Vzc29yVHlwZS5WRUMzLCBiYWJ5bG9uTm9kZS50aGluSW5zdGFuY2VDb3VudCwgYnVmZmVyTWFuYWdlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGRvIHdlIG5lZWQgdG8gd3JpdGUgUk9UQVRJT04gP1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChoYXNBbnlJbnN0YW5jZVdvcmxkUm90YXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2UgZGVjaWRlZCB0byBzdGF5IG9uIEZMT0FUIGZvciBub3cgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9CYWJ5bG9uSlMvQmFieWxvbi5qcy9wdWxsLzEyNDk1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4dGVuc2lvbi5hdHRyaWJ1dGVzW1wiUk9UQVRJT05cIl0gPSB0aGlzLl9idWlsZEFjY2Vzc29yKHJvdGF0aW9uQnVmZmVyLCBBY2Nlc3NvclR5cGUuVkVDNCwgYmFieWxvbk5vZGUudGhpbkluc3RhbmNlQ291bnQsIGJ1ZmZlck1hbmFnZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBkbyB3ZSBuZWVkIHRvIHdyaXRlIFNDQUxFID9cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaGFzQW55SW5zdGFuY2VXb3JsZFNjYWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4dGVuc2lvbi5hdHRyaWJ1dGVzW1wiU0NBTEVcIl0gPSB0aGlzLl9idWlsZEFjY2Vzc29yKHNjYWxlQnVmZmVyLCBBY2Nlc3NvclR5cGUuVkVDMywgYmFieWxvbk5vZGUudGhpbkluc3RhbmNlQ291bnQsIGJ1ZmZlck1hbmFnZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLyogZXNsaW50LWVuYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb24qL1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuZXh0ZW5zaW9ucyA9IG5vZGUuZXh0ZW5zaW9ucyB8fCB7fTtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLmV4dGVuc2lvbnNbTkFNRV0gPSBleHRlbnNpb247XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzb2x2ZShub2RlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9idWlsZEFjY2Vzc29yKGJ1ZmZlcjogRmxvYXQzMkFycmF5LCB0eXBlOiBBY2Nlc3NvclR5cGUsIGNvdW50OiBudW1iZXIsIGJ1ZmZlck1hbmFnZXI6IEJ1ZmZlck1hbmFnZXIpOiBudW1iZXIge1xyXG4gICAgICAgIC8vIGJ1aWxkIHRoZSBidWZmZXIgdmlld1xyXG4gICAgICAgIGNvbnN0IGJ2ID0gYnVmZmVyTWFuYWdlci5jcmVhdGVCdWZmZXJWaWV3KGJ1ZmZlcik7XHJcblxyXG4gICAgICAgIC8vIGZpbmFsbHkgYnVpbGQgdGhlIGFjY2Vzc29yXHJcbiAgICAgICAgY29uc3QgYWNjZXNzb3IgPSBidWZmZXJNYW5hZ2VyLmNyZWF0ZUFjY2Vzc29yKGJ2LCB0eXBlLCBBY2Nlc3NvckNvbXBvbmVudFR5cGUuRkxPQVQsIGNvdW50KTtcclxuICAgICAgICB0aGlzLl9leHBvcnRlci5fYWNjZXNzb3JzLnB1c2goYWNjZXNzb3IpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9leHBvcnRlci5fYWNjZXNzb3JzLmxlbmd0aCAtIDE7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcclxuR0xURkV4cG9ydGVyLlJlZ2lzdGVyRXh0ZW5zaW9uKE5BTUUsIChleHBvcnRlcikgPT4gbmV3IEVYVF9tZXNoX2dwdV9pbnN0YW5jaW5nKGV4cG9ydGVyKSk7XHJcbiIsImltcG9ydCB0eXBlIHsgSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyIH0gZnJvbSBcIi4uL2dsVEZFeHBvcnRlckV4dGVuc2lvblwiO1xuaW1wb3J0IHsgR0xURkV4cG9ydGVyIH0gZnJvbSBcIi4uL2dsVEZFeHBvcnRlclwiO1xuaW1wb3J0IHsgTWVzaFByaW1pdGl2ZU1vZGUgfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XG5pbXBvcnQgdHlwZSB7IElBY2Nlc3NvciwgSUJ1ZmZlclZpZXcsIElLSFJEcmFjb01lc2hDb21wcmVzc2lvbiwgSU1lc2hQcmltaXRpdmUgfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XG5pbXBvcnQgdHlwZSB7IEJ1ZmZlck1hbmFnZXIgfSBmcm9tIFwiLi4vYnVmZmVyTWFuYWdlclwiO1xuaW1wb3J0IHsgRHJhY29FbmNvZGVyIH0gZnJvbSBcImNvcmUvTWVzaGVzL0NvbXByZXNzaW9uL2RyYWNvRW5jb2RlclwiO1xuaW1wb3J0IHsgR2V0VHlwZWRBcnJheURhdGEsIEdldFR5cGVCeXRlTGVuZ3RoIH0gZnJvbSBcImNvcmUvQnVmZmVycy9idWZmZXJVdGlsc1wiO1xuaW1wb3J0IHsgR2V0QWNjZXNzb3JFbGVtZW50Q291bnQgfSBmcm9tIFwiLi4vZ2xURlV0aWxpdGllc1wiO1xuaW1wb3J0IHR5cGUgeyBEcmFjb0F0dHJpYnV0ZU5hbWUsIElEcmFjb0F0dHJpYnV0ZURhdGEsIElEcmFjb0VuY29kZXJPcHRpb25zIH0gZnJvbSBcImNvcmUvTWVzaGVzL0NvbXByZXNzaW9uL2RyYWNvRW5jb2Rlci50eXBlc1wiO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSBcImNvcmUvTWlzYy9sb2dnZXJcIjtcbmltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xuXG5jb25zdCBOQU1FID0gXCJLSFJfZHJhY29fbWVzaF9jb21wcmVzc2lvblwiO1xuXG5mdW5jdGlvbiBHZXREcmFjb0F0dHJpYnV0ZU5hbWUoZ2xURk5hbWU6IHN0cmluZyk6IERyYWNvQXR0cmlidXRlTmFtZSB7XG4gICAgaWYgKGdsVEZOYW1lID09PSBcIlBPU0lUSU9OXCIpIHtcbiAgICAgICAgcmV0dXJuIFwiUE9TSVRJT05cIjtcbiAgICB9IGVsc2UgaWYgKGdsVEZOYW1lID09PSBcIk5PUk1BTFwiKSB7XG4gICAgICAgIHJldHVybiBcIk5PUk1BTFwiO1xuICAgIH0gZWxzZSBpZiAoZ2xURk5hbWUuc3RhcnRzV2l0aChcIkNPTE9SXCIpKSB7XG4gICAgICAgIHJldHVybiBcIkNPTE9SXCI7XG4gICAgfSBlbHNlIGlmIChnbFRGTmFtZS5zdGFydHNXaXRoKFwiVEVYQ09PUkRcIikpIHtcbiAgICAgICAgcmV0dXJuIFwiVEVYX0NPT1JEXCI7XG4gICAgfVxuICAgIHJldHVybiBcIkdFTkVSSUNcIjtcbn1cblxuLyoqXG4gKiBbU3BlY2lmaWNhdGlvbl0oaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFpbi9leHRlbnNpb25zLzIuMC9LaHJvbm9zL0tIUl9kcmFjb19tZXNoX2NvbXByZXNzaW9uL1JFQURNRS5tZClcbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxuZXhwb3J0IGNsYXNzIEtIUl9kcmFjb19tZXNoX2NvbXByZXNzaW9uIGltcGxlbWVudHMgSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyIHtcbiAgICAvKiogTmFtZSBvZiB0aGlzIGV4dGVuc2lvbiAqL1xuICAgIHB1YmxpYyByZWFkb25seSBuYW1lID0gTkFNRTtcblxuICAgIC8qKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgZW5hYmxlZCAqL1xuICAgIHB1YmxpYyBlbmFibGVkO1xuXG4gICAgLyoqIEtIUl9kcmFjb19tZXNoX2NvbXByZXNzaW9uIGlzIHJlcXVpcmVkLCBhcyB1bmNvbXByZXNzZWQgZmFsbGJhY2sgZGF0YSBpcyBub3QgeWV0IGltcGxlbWVudGVkLiAqL1xuICAgIHB1YmxpYyByZXF1aXJlZCA9IHRydWU7XG5cbiAgICAvKiogQnVmZmVyVmlld3MgdXNlZCBmb3IgRHJhY28gZGF0YSwgd2hpY2ggbWF5IGJlIGVsaWdpYmxlIGZvciByZW1vdmFsIGFmdGVyIERyYWNvIGVuY29kaW5nICovXG4gICAgcHJpdmF0ZSBfYnVmZmVyVmlld3NVc2VkOiBTZXQ8SUJ1ZmZlclZpZXc+ID0gbmV3IFNldCgpO1xuXG4gICAgLyoqIEFjY2Vzc29ycyB0aGF0IHdlcmUgcmVwbGFjZWQgd2l0aCBEcmFjbyBkYXRhLCB3aGljaCBtYXkgYmUgZWxpZ2libGUgZm9yIHJlbW92YWwgYWZ0ZXIgRHJhY28gZW5jb2RpbmcgKi9cbiAgICBwcml2YXRlIF9hY2Nlc3NvcnNVc2VkOiBTZXQ8SUFjY2Vzc29yPiA9IG5ldyBTZXQoKTtcblxuICAgIC8qKiBQcm9taXNlIHBvb2wgZm9yIERyYWNvIGVuY29kaW5nIHdvcmsgKi9cbiAgICBwcml2YXRlIF9lbmNvZGVQcm9taXNlczogUHJvbWlzZTx2b2lkPltdID0gW107XG5cbiAgICBwcml2YXRlIF93YXNVc2VkID0gZmFsc2U7XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGdldCB3YXNVc2VkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fd2FzVXNlZDtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgY29uc3RydWN0b3IoZXhwb3J0ZXI6IEdMVEZFeHBvcnRlcikge1xuICAgICAgICB0aGlzLmVuYWJsZWQgPSBleHBvcnRlci5vcHRpb25zLm1lc2hDb21wcmVzc2lvbk1ldGhvZCA9PT0gXCJEcmFjb1wiICYmIERyYWNvRW5jb2Rlci5EZWZhdWx0QXZhaWxhYmxlO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZGlzcG9zZSgpIHt9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIHBvc3RFeHBvcnRNZXNoUHJpbWl0aXZlKHByaW1pdGl2ZTogSU1lc2hQcmltaXRpdmUsIGJ1ZmZlck1hbmFnZXI6IEJ1ZmZlck1hbmFnZXIsIGFjY2Vzc29yczogSUFjY2Vzc29yW10pOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmltaXRpdmUubW9kZSAhPT0gTWVzaFByaW1pdGl2ZU1vZGUuVFJJQU5HTEVTICYmIHByaW1pdGl2ZS5tb2RlICE9PSBNZXNoUHJpbWl0aXZlTW9kZS5UUklBTkdMRV9TVFJJUCkge1xuICAgICAgICAgICAgTG9nZ2VyLldhcm4oXCJDYW5ub3QgY29tcHJlc3MgcHJpbWl0aXZlIHdpdGggbW9kZSBcIiArIHByaW1pdGl2ZS5tb2RlICsgXCIuXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ29sbGVjdCBidWZmZXJWaWV3cyBhbmQgYWNjZXNzb3JzIHVzZWQgYnkgdGhpcyBwcmltaXRpdmVcbiAgICAgICAgY29uc3QgcHJpbWl0aXZlQnVmZmVyVmlld3M6IElCdWZmZXJWaWV3W10gPSBbXTtcbiAgICAgICAgY29uc3QgcHJpbWl0aXZlQWNjZXNzb3JzOiBJQWNjZXNzb3JbXSA9IFtdO1xuXG4gICAgICAgIC8vIFByZXBhcmUgaW5kaWNlcyBmb3IgRHJhY28gZW5jb2RpbmdcbiAgICAgICAgbGV0IGluZGljZXM6IE51bGxhYmxlPFVpbnQzMkFycmF5IHwgVWludDE2QXJyYXk+ID0gbnVsbDtcbiAgICAgICAgaWYgKHByaW1pdGl2ZS5pbmRpY2VzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGFjY2Vzc29yID0gYWNjZXNzb3JzW3ByaW1pdGl2ZS5pbmRpY2VzXTtcbiAgICAgICAgICAgIGNvbnN0IGJ1ZmZlclZpZXcgPSBidWZmZXJNYW5hZ2VyLmdldEJ1ZmZlclZpZXcoYWNjZXNzb3IpO1xuICAgICAgICAgICAgLy8gUGVyIGV4cG9ydEluZGljZXMsIGluZGljZXMgbXVzdCBiZSBlaXRoZXIgVWludDE2QXJyYXkgb3IgVWludDMyQXJyYXlcbiAgICAgICAgICAgIGluZGljZXMgPSBidWZmZXJNYW5hZ2VyLmdldERhdGEoYnVmZmVyVmlldykuc2xpY2UoKSBhcyBVaW50MzJBcnJheSB8IFVpbnQxNkFycmF5O1xuXG4gICAgICAgICAgICBwcmltaXRpdmVCdWZmZXJWaWV3cy5wdXNoKGJ1ZmZlclZpZXcpO1xuICAgICAgICAgICAgcHJpbWl0aXZlQWNjZXNzb3JzLnB1c2goYWNjZXNzb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUHJlcGFyZSBhdHRyaWJ1dGVzIGZvciBEcmFjbyBlbmNvZGluZ1xuICAgICAgICBjb25zdCBhdHRyaWJ1dGVzOiBJRHJhY29BdHRyaWJ1dGVEYXRhW10gPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBbbmFtZSwgYWNjZXNzb3JJbmRleF0gb2YgT2JqZWN0LmVudHJpZXMocHJpbWl0aXZlLmF0dHJpYnV0ZXMpKSB7XG4gICAgICAgICAgICBjb25zdCBhY2Nlc3NvciA9IGFjY2Vzc29yc1thY2Nlc3NvckluZGV4XTtcbiAgICAgICAgICAgIGNvbnN0IGJ1ZmZlclZpZXcgPSBidWZmZXJNYW5hZ2VyLmdldEJ1ZmZlclZpZXcoYWNjZXNzb3IpO1xuXG4gICAgICAgICAgICBjb25zdCBzaXplID0gR2V0QWNjZXNzb3JFbGVtZW50Q291bnQoYWNjZXNzb3IudHlwZSk7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gR2V0VHlwZWRBcnJheURhdGEoXG4gICAgICAgICAgICAgICAgYnVmZmVyTWFuYWdlci5nZXREYXRhKGJ1ZmZlclZpZXcpLFxuICAgICAgICAgICAgICAgIHNpemUsXG4gICAgICAgICAgICAgICAgYWNjZXNzb3IuY29tcG9uZW50VHlwZSxcbiAgICAgICAgICAgICAgICBhY2Nlc3Nvci5ieXRlT2Zmc2V0IHx8IDAsXG4gICAgICAgICAgICAgICAgYnVmZmVyVmlldy5ieXRlU3RyaWRlIHx8IEdldFR5cGVCeXRlTGVuZ3RoKGFjY2Vzc29yLmNvbXBvbmVudFR5cGUpICogc2l6ZSxcbiAgICAgICAgICAgICAgICBhY2Nlc3Nvci5ub3JtYWxpemVkIHx8IGZhbHNlLFxuICAgICAgICAgICAgICAgIGFjY2Vzc29yLmNvdW50LFxuICAgICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGF0dHJpYnV0ZXMucHVzaCh7IGtpbmQ6IG5hbWUsIGRyYWNvTmFtZTogR2V0RHJhY29BdHRyaWJ1dGVOYW1lKG5hbWUpLCBzaXplOiBHZXRBY2Nlc3NvckVsZW1lbnRDb3VudChhY2Nlc3Nvci50eXBlKSwgZGF0YTogZGF0YSB9KTtcblxuICAgICAgICAgICAgcHJpbWl0aXZlQnVmZmVyVmlld3MucHVzaChidWZmZXJWaWV3KTtcbiAgICAgICAgICAgIHByaW1pdGl2ZUFjY2Vzc29ycy5wdXNoKGFjY2Vzc29yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVzZSBzZXF1ZW50aWFsIGVuY29kaW5nIHRvIHByZXNlcnZlIHZlcnRleCBvcmRlciBmb3IgY2FzZXMgbGlrZSBtb3JwaCB0YXJnZXRzXG4gICAgICAgIGNvbnN0IG9wdGlvbnM6IElEcmFjb0VuY29kZXJPcHRpb25zID0ge1xuICAgICAgICAgICAgbWV0aG9kOiBwcmltaXRpdmUudGFyZ2V0cyA/IFwiTUVTSF9TRVFVRU5USUFMX0VOQ09ESU5HXCIgOiBcIk1FU0hfRURHRUJSRUFLRVJfRU5DT0RJTkdcIixcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBwcm9taXNlID0gRHJhY29FbmNvZGVyLkRlZmF1bHQuX2VuY29kZUFzeW5jKGF0dHJpYnV0ZXMsIGluZGljZXMsIG9wdGlvbnMpXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZ2l0aHViL25vLXRoZW5cbiAgICAgICAgICAgIC50aGVuKChlbmNvZGVkRGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghZW5jb2RlZERhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nZ2VyLkVycm9yKFwiRHJhY28gZW5jb2RpbmcgZmFpbGVkIGZvciBwcmltaXRpdmUuXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgZHJhY29JbmZvOiBJS0hSRHJhY29NZXNoQ29tcHJlc3Npb24gPSB7XG4gICAgICAgICAgICAgICAgICAgIGJ1ZmZlclZpZXc6IC0xLCAvLyBidWZmZXJWaWV3IHdpbGwgYmUgc2V0IHRvIGEgcmVhbCBpbmRleCBsYXRlciwgd2hlbiB3ZSB3cml0ZSB0aGUgYmluYXJ5IGFuZCBkZWNpZGUgYnVmZmVyVmlldyBvcmRlcmluZ1xuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBlbmNvZGVkRGF0YS5hdHRyaWJ1dGVJZHMsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBjb25zdCBidWZmZXJWaWV3ID0gYnVmZmVyTWFuYWdlci5jcmVhdGVCdWZmZXJWaWV3KGVuY29kZWREYXRhLmRhdGEpO1xuICAgICAgICAgICAgICAgIGJ1ZmZlck1hbmFnZXIuc2V0QnVmZmVyVmlldyhkcmFjb0luZm8sIGJ1ZmZlclZpZXcpO1xuXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBidWZmZXJWaWV3IG9mIHByaW1pdGl2ZUJ1ZmZlclZpZXdzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2J1ZmZlclZpZXdzVXNlZC5hZGQoYnVmZmVyVmlldyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYWNjZXNzb3Igb2YgcHJpbWl0aXZlQWNjZXNzb3JzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2FjY2Vzc29yc1VzZWQuYWRkKGFjY2Vzc29yKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwcmltaXRpdmUuZXh0ZW5zaW9ucyB8fD0ge307XG4gICAgICAgICAgICAgICAgcHJpbWl0aXZlLmV4dGVuc2lvbnNbTkFNRV0gPSBkcmFjb0luZm87XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGdpdGh1Yi9uby10aGVuXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgTG9nZ2VyLkVycm9yKFwiRHJhY28gZW5jb2RpbmcgZmFpbGVkIGZvciBwcmltaXRpdmU6IFwiICsgZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5fZW5jb2RlUHJvbWlzZXMucHVzaChwcm9taXNlKTtcblxuICAgICAgICB0aGlzLl93YXNVc2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGFzeW5jIHByZUdlbmVyYXRlQmluYXJ5QXN5bmMoYnVmZmVyTWFuYWdlcjogQnVmZmVyTWFuYWdlcik6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwodGhpcy5fZW5jb2RlUHJvbWlzZXMpO1xuXG4gICAgICAgIC8vIEN1bGwgb2Jzb2xldGUgYnVmZmVyVmlld3MgdGhhdCB3ZXJlIHJlcGxhY2VkIHdpdGggRHJhY28gZGF0YVxuICAgICAgICB0aGlzLl9idWZmZXJWaWV3c1VzZWQuZm9yRWFjaCgoYnVmZmVyVmlldykgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVmZXJlbmNlcyA9IGJ1ZmZlck1hbmFnZXIuZ2V0UHJvcGVydGllc1dpdGhCdWZmZXJWaWV3KGJ1ZmZlclZpZXcpO1xuICAgICAgICAgICAgY29uc3Qgb25seVVzZWRCeUVuY29kZWRQcmltaXRpdmVzID0gcmVmZXJlbmNlcy5ldmVyeSgob2JqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FjY2Vzc29yc1VzZWQuaGFzKG9iamVjdCBhcyBJQWNjZXNzb3IpOyAvLyBoYXMoKSBjYW4gaGFuZGxlIGFueSBvYmplY3QsIGJ1dCBUUyBkb2Vzbid0IGtub3cgdGhhdFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAob25seVVzZWRCeUVuY29kZWRQcmltaXRpdmVzKSB7XG4gICAgICAgICAgICAgICAgYnVmZmVyTWFuYWdlci5yZW1vdmVCdWZmZXJWaWV3KGJ1ZmZlclZpZXcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl9idWZmZXJWaWV3c1VzZWQuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5fYWNjZXNzb3JzVXNlZC5jbGVhcigpO1xuICAgIH1cbn1cblxuR0xURkV4cG9ydGVyLlJlZ2lzdGVyRXh0ZW5zaW9uKE5BTUUsIChleHBvcnRlcikgPT4gbmV3IEtIUl9kcmFjb19tZXNoX2NvbXByZXNzaW9uKGV4cG9ydGVyKSk7XG4iLCJpbXBvcnQgdHlwZSB7IFNwb3RMaWdodCB9IGZyb20gXCJjb3JlL0xpZ2h0cy9zcG90TGlnaHRcIjtcclxuaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCJjb3JlL3R5cGVzXCI7XHJcbmltcG9ydCB7IFZlY3RvcjMsIFF1YXRlcm5pb24sIFRtcFZlY3RvcnMgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLnZlY3RvclwiO1xyXG5pbXBvcnQgeyBMaWdodCB9IGZyb20gXCJjb3JlL0xpZ2h0cy9saWdodFwiO1xyXG5pbXBvcnQgdHlwZSB7IE5vZGUgfSBmcm9tIFwiY29yZS9ub2RlXCI7XHJcbmltcG9ydCB7IFNoYWRvd0xpZ2h0IH0gZnJvbSBcImNvcmUvTGlnaHRzL3NoYWRvd0xpZ2h0XCI7XHJcbmltcG9ydCB0eXBlIHsgSU5vZGUsIElLSFJMaWdodHNQdW5jdHVhbF9MaWdodFJlZmVyZW5jZSwgSUtIUkxpZ2h0c1B1bmN0dWFsX0xpZ2h0LCBJS0hSTGlnaHRzUHVuY3R1YWwgfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IEtIUkxpZ2h0c1B1bmN0dWFsX0xpZ2h0VHlwZSB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHR5cGUgeyBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIgfSBmcm9tIFwiLi4vZ2xURkV4cG9ydGVyRXh0ZW5zaW9uXCI7XHJcbmltcG9ydCB7IEdMVEZFeHBvcnRlciB9IGZyb20gXCIuLi9nbFRGRXhwb3J0ZXJcIjtcclxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSBcImNvcmUvTWlzYy9sb2dnZXJcIjtcclxuaW1wb3J0IHsgQ29udmVydFRvUmlnaHRIYW5kZWRQb3NpdGlvbiwgT21pdERlZmF1bHRWYWx1ZXMsIENvbGxhcHNlUGFyZW50Tm9kZSwgSXNQYXJlbnRBZGRlZEJ5SW1wb3J0ZXIgfSBmcm9tIFwiLi4vZ2xURlV0aWxpdGllc1wiO1xyXG5cclxuY29uc3QgTkFNRSA9IFwiS0hSX2xpZ2h0c19wdW5jdHVhbFwiO1xyXG5jb25zdCBERUZBVUxUUzogT21pdDxJS0hSTGlnaHRzUHVuY3R1YWxfTGlnaHQsIFwidHlwZVwiPiA9IHtcclxuICAgIG5hbWU6IFwiXCIsXHJcbiAgICBjb2xvcjogWzEsIDEsIDFdLFxyXG4gICAgaW50ZW5zaXR5OiAxLFxyXG4gICAgcmFuZ2U6IE51bWJlci5NQVhfVkFMVUUsXHJcbn07XHJcbmNvbnN0IFNQT1RERUZBVUxUUzogTm9uTnVsbGFibGU8SUtIUkxpZ2h0c1B1bmN0dWFsX0xpZ2h0W1wic3BvdFwiXT4gPSB7XHJcbiAgICBpbm5lckNvbmVBbmdsZTogMCxcclxuICAgIG91dGVyQ29uZUFuZ2xlOiBNYXRoLlBJIC8gNC4wLFxyXG59O1xyXG5jb25zdCBMSUdIVERJUkVDVElPTiA9IFZlY3RvcjMuQmFja3dhcmQoKTtcclxuXHJcbi8qKlxyXG4gKiBbU3BlY2lmaWNhdGlvbl0oaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFzdGVyL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX2xpZ2h0c19wdW5jdHVhbC9SRUFETUUubWQpXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBjbGFzcyBLSFJfbGlnaHRzX3B1bmN0dWFsIGltcGxlbWVudHMgSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyIHtcclxuICAgIC8qKiBUaGUgbmFtZSBvZiB0aGlzIGV4dGVuc2lvbi4gKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lID0gTkFNRTtcclxuXHJcbiAgICAvKiogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIGVuYWJsZWQuICovXHJcbiAgICBwdWJsaWMgZW5hYmxlZCA9IHRydWU7XHJcblxyXG4gICAgLyoqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyByZXF1aXJlZCAqL1xyXG4gICAgcHVibGljIHJlcXVpcmVkID0gZmFsc2U7XHJcblxyXG4gICAgLyoqIFJlZmVyZW5jZSB0byB0aGUgZ2xURiBleHBvcnRlciAqL1xyXG4gICAgcHJpdmF0ZSBfZXhwb3J0ZXI6IEdMVEZFeHBvcnRlcjtcclxuXHJcbiAgICBwcml2YXRlIF9saWdodHM6IElLSFJMaWdodHNQdW5jdHVhbDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihleHBvcnRlcjogR0xURkV4cG9ydGVyKSB7XHJcbiAgICAgICAgdGhpcy5fZXhwb3J0ZXIgPSBleHBvcnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHtcclxuICAgICAgICAodGhpcy5fbGlnaHRzIGFzIGFueSkgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBnZXQgd2FzVXNlZCgpIHtcclxuICAgICAgICByZXR1cm4gISF0aGlzLl9saWdodHM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIG9uRXhwb3J0aW5nKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2V4cG9ydGVyLl9nbFRGLmV4dGVuc2lvbnMhW05BTUVdID0gdGhpcy5fbGlnaHRzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmUgdGhpcyBtZXRob2QgdG8gbW9kaWZ5IHRoZSBkZWZhdWx0IGJlaGF2aW9yIHdoZW4gZXhwb3J0aW5nIGEgbm9kZVxyXG4gICAgICogQHBhcmFtIGNvbnRleHQgVGhlIGNvbnRleHQgd2hlbiBleHBvcnRpbmcgdGhlIG5vZGVcclxuICAgICAqIEBwYXJhbSBub2RlIGdsVEYgbm9kZVxyXG4gICAgICogQHBhcmFtIGJhYnlsb25Ob2RlIEJhYnlsb25KUyBub2RlXHJcbiAgICAgKiBAcGFyYW0gbm9kZU1hcCBOb2RlIG1hcHBpbmcgb2YgYmFieWxvbiBub2RlIHRvIGdsVEYgbm9kZSBpbmRleFxyXG4gICAgICogQHBhcmFtIGNvbnZlcnRUb1JpZ2h0SGFuZGVkIEZsYWcgdG8gY29udmVydCB0aGUgdmFsdWVzIHRvIHJpZ2h0LWhhbmRlZFxyXG4gICAgICogQHJldHVybnMgbnVsbGFibGUgSU5vZGUgcHJvbWlzZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXN5bmMgcG9zdEV4cG9ydE5vZGVBc3luYyhjb250ZXh0OiBzdHJpbmcsIG5vZGU6IElOb2RlLCBiYWJ5bG9uTm9kZTogTm9kZSwgbm9kZU1hcDogTWFwPE5vZGUsIG51bWJlcj4sIGNvbnZlcnRUb1JpZ2h0SGFuZGVkOiBib29sZWFuKTogUHJvbWlzZTxOdWxsYWJsZTxJTm9kZT4+IHtcclxuICAgICAgICByZXR1cm4gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgaWYgKCEoYmFieWxvbk5vZGUgaW5zdGFuY2VvZiBTaGFkb3dMaWdodCkpIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUobm9kZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGxpZ2h0VHlwZSA9XHJcbiAgICAgICAgICAgICAgICBiYWJ5bG9uTm9kZS5nZXRUeXBlSUQoKSA9PSBMaWdodC5MSUdIVFRZUEVJRF9QT0lOVExJR0hUXHJcbiAgICAgICAgICAgICAgICAgICAgPyBLSFJMaWdodHNQdW5jdHVhbF9MaWdodFR5cGUuUE9JTlRcclxuICAgICAgICAgICAgICAgICAgICA6IGJhYnlsb25Ob2RlLmdldFR5cGVJRCgpID09IExpZ2h0LkxJR0hUVFlQRUlEX0RJUkVDVElPTkFMTElHSFRcclxuICAgICAgICAgICAgICAgICAgICAgID8gS0hSTGlnaHRzUHVuY3R1YWxfTGlnaHRUeXBlLkRJUkVDVElPTkFMXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IGJhYnlsb25Ob2RlLmdldFR5cGVJRCgpID09IExpZ2h0LkxJR0hUVFlQRUlEX1NQT1RMSUdIVFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IEtIUkxpZ2h0c1B1bmN0dWFsX0xpZ2h0VHlwZS5TUE9UXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbDtcclxuICAgICAgICAgICAgaWYgKCFsaWdodFR5cGUpIHtcclxuICAgICAgICAgICAgICAgIExvZ2dlci5XYXJuKGAke2NvbnRleHR9OiBMaWdodCAke2JhYnlsb25Ob2RlLm5hbWV9IGlzIG5vdCBzdXBwb3J0ZWQgaW4gJHtOQU1FfWApO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShub2RlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGJhYnlsb25Ob2RlLmZhbGxvZmZUeXBlICE9PSBMaWdodC5GQUxMT0ZGX0dMVEYpIHtcclxuICAgICAgICAgICAgICAgIExvZ2dlci5XYXJuKGAke2NvbnRleHR9OiBMaWdodCBmYWxsb2ZmIGZvciAke2JhYnlsb25Ob2RlLm5hbWV9IGRvZXMgbm90IG1hdGNoIHRoZSAke05BTUV9IHNwZWNpZmljYXRpb24hYCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFNldCB0aGUgbm9kZSdzIHRyYW5zbGF0aW9uIGFuZCByb3RhdGlvbiBoZXJlLCBzaW5jZSBsaWdodHMgYXJlIG5vdCBoYW5kbGVkIGluIGV4cG9ydE5vZGVBc3luY1xyXG4gICAgICAgICAgICBpZiAoIWJhYnlsb25Ob2RlLnBvc2l0aW9uLmVxdWFsc1RvRmxvYXRzKDAsIDAsIDApKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0cmFuc2xhdGlvbiA9IFRtcFZlY3RvcnMuVmVjdG9yM1swXS5jb3B5RnJvbShiYWJ5bG9uTm9kZS5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29udmVydFRvUmlnaHRIYW5kZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBDb252ZXJ0VG9SaWdodEhhbmRlZFBvc2l0aW9uKHRyYW5zbGF0aW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG5vZGUudHJhbnNsYXRpb24gPSB0cmFuc2xhdGlvbi5hc0FycmF5KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEJhYnlsb24gbGlnaHRzIGhhdmUgXCJjb25zdGFudFwiIHJvdGF0aW9uIGFuZCB2YXJpYWJsZSBkaXJlY3Rpb24sIHdoaWxlXHJcbiAgICAgICAgICAgIC8vIGdsVEYgbGlnaHRzIGhhdmUgdmFyaWFibGUgcm90YXRpb24gYW5kIGNvbnN0YW50IGRpcmVjdGlvbi4gVGhlcmVmb3JlLFxyXG4gICAgICAgICAgICAvLyBjb21wdXRlIGEgcXVhdGVybmlvbiB0aGF0IGFsaWducyB0aGUgQmFieWxvbiBsaWdodCdzIGRpcmVjdGlvbiB3aXRoIGdsVEYncyBjb25zdGFudCBvbmUuXHJcbiAgICAgICAgICAgIGlmIChsaWdodFR5cGUgIT09IEtIUkxpZ2h0c1B1bmN0dWFsX0xpZ2h0VHlwZS5QT0lOVCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gYmFieWxvbk5vZGUuZGlyZWN0aW9uLm5vcm1hbGl6ZVRvUmVmKFRtcFZlY3RvcnMuVmVjdG9yM1swXSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29udmVydFRvUmlnaHRIYW5kZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBDb252ZXJ0VG9SaWdodEhhbmRlZFBvc2l0aW9uKGRpcmVjdGlvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhbmdsZSA9IE1hdGguYWNvcyhWZWN0b3IzLkRvdChMSUdIVERJUkVDVElPTiwgZGlyZWN0aW9uKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBheGlzID0gVmVjdG9yMy5Dcm9zcyhMSUdIVERJUkVDVElPTiwgZGlyZWN0aW9uKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxpZ2h0Um90YXRpb25RdWF0ZXJuaW9uID0gUXVhdGVybmlvbi5Sb3RhdGlvbkF4aXNUb1JlZihheGlzLCBhbmdsZSwgVG1wVmVjdG9ycy5RdWF0ZXJuaW9uWzBdKTtcclxuICAgICAgICAgICAgICAgIGlmICghUXVhdGVybmlvbi5Jc0lkZW50aXR5KGxpZ2h0Um90YXRpb25RdWF0ZXJuaW9uKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUucm90YXRpb24gPSBsaWdodFJvdGF0aW9uUXVhdGVybmlvbi5hc0FycmF5KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGxpZ2h0OiBJS0hSTGlnaHRzUHVuY3R1YWxfTGlnaHQgPSB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBsaWdodFR5cGUsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBiYWJ5bG9uTm9kZS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IGJhYnlsb25Ob2RlLmRpZmZ1c2UuYXNBcnJheSgpLFxyXG4gICAgICAgICAgICAgICAgaW50ZW5zaXR5OiBiYWJ5bG9uTm9kZS5pbnRlbnNpdHksXHJcbiAgICAgICAgICAgICAgICByYW5nZTogYmFieWxvbk5vZGUucmFuZ2UsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIE9taXREZWZhdWx0VmFsdWVzKGxpZ2h0LCBERUZBVUxUUyk7XHJcblxyXG4gICAgICAgICAgICAvLyBTZXBhcmF0ZWx5IGhhbmRsZSB0aGUgcmVxdWlyZWQgJ3Nwb3QnIGZpZWxkIGZvciBzcG90IGxpZ2h0c1xyXG4gICAgICAgICAgICBpZiAobGlnaHRUeXBlID09PSBLSFJMaWdodHNQdW5jdHVhbF9MaWdodFR5cGUuU1BPVCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYmFieWxvblNwb3RMaWdodCA9IGJhYnlsb25Ob2RlIGFzIFNwb3RMaWdodDtcclxuICAgICAgICAgICAgICAgIGxpZ2h0LnNwb3QgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5uZXJDb25lQW5nbGU6IGJhYnlsb25TcG90TGlnaHQuaW5uZXJBbmdsZSAvIDIuMCxcclxuICAgICAgICAgICAgICAgICAgICBvdXRlckNvbmVBbmdsZTogYmFieWxvblNwb3RMaWdodC5hbmdsZSAvIDIuMCxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBPbWl0RGVmYXVsdFZhbHVlcyhsaWdodC5zcG90LCBTUE9UREVGQVVMVFMpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9saWdodHMgfHw9IHtcclxuICAgICAgICAgICAgICAgIGxpZ2h0czogW10sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMuX2xpZ2h0cy5saWdodHMucHVzaChsaWdodCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBsaWdodFJlZmVyZW5jZTogSUtIUkxpZ2h0c1B1bmN0dWFsX0xpZ2h0UmVmZXJlbmNlID0ge1xyXG4gICAgICAgICAgICAgICAgbGlnaHQ6IHRoaXMuX2xpZ2h0cy5saWdodHMubGVuZ3RoIC0gMSxcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8vIEFzc2lnbiB0aGUgbGlnaHQgdG8gaXRzIHBhcmVudCBub2RlLCBpZiBwb3NzaWJsZSwgdG8gY29uZGVuc2UgdGhlIGdsVEZcclxuICAgICAgICAgICAgLy8gV2h5IGFuZCB3aGVuOiB0aGUgZ2xURiBsb2FkZXIgZ2VuZXJhdGVzIGEgbmV3IHBhcmVudCBUcmFuc2Zvcm1Ob2RlIGZvciBlYWNoIGxpZ2h0IG5vZGUsIHdoaWNoIHdlIHNob3VsZCB1bmRvIG9uIGV4cG9ydFxyXG4gICAgICAgICAgICBjb25zdCBwYXJlbnRCYWJ5bG9uTm9kZSA9IGJhYnlsb25Ob2RlLnBhcmVudDtcclxuXHJcbiAgICAgICAgICAgIGlmIChwYXJlbnRCYWJ5bG9uTm9kZSAmJiBJc1BhcmVudEFkZGVkQnlJbXBvcnRlcihiYWJ5bG9uTm9kZSwgcGFyZW50QmFieWxvbk5vZGUpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnROb2RlSW5kZXggPSBub2RlTWFwLmdldChwYXJlbnRCYWJ5bG9uTm9kZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50Tm9kZUluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ29tYmluZSB0aGUgbGlnaHQncyB0cmFuc2Zvcm1hdGlvbiB3aXRoIHRoZSBwYXJlbnQnc1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudE5vZGUgPSB0aGlzLl9leHBvcnRlci5fbm9kZXNbcGFyZW50Tm9kZUluZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICBDb2xsYXBzZVBhcmVudE5vZGUobm9kZSwgcGFyZW50Tm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5leHRlbnNpb25zIHx8PSB7fTtcclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnROb2RlLmV4dGVuc2lvbnNbTkFNRV0gPSBsaWdodFJlZmVyZW5jZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRG8gbm90IGV4cG9ydCB0aGUgb3JpZ2luYWwgbm9kZVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBub2RlLmV4dGVuc2lvbnMgfHw9IHt9O1xyXG4gICAgICAgICAgICBub2RlLmV4dGVuc2lvbnNbTkFNRV0gPSBsaWdodFJlZmVyZW5jZTtcclxuICAgICAgICAgICAgcmVzb2x2ZShub2RlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuR0xURkV4cG9ydGVyLlJlZ2lzdGVyRXh0ZW5zaW9uKE5BTUUsIChleHBvcnRlcikgPT4gbmV3IEtIUl9saWdodHNfcHVuY3R1YWwoZXhwb3J0ZXIpKTtcclxuIiwiaW1wb3J0IHR5cGUgeyBJTWF0ZXJpYWwsIElLSFJNYXRlcmlhbHNBbmlzb3Ryb3B5IH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgdHlwZSB7IElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMiB9IGZyb20gXCIuLi9nbFRGRXhwb3J0ZXJFeHRlbnNpb25cIjtcclxuaW1wb3J0IHsgR0xURkV4cG9ydGVyIH0gZnJvbSBcIi4uL2dsVEZFeHBvcnRlclwiO1xyXG5pbXBvcnQgdHlwZSB7IE1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IFBCUkJhc2VNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9QQlIvcGJyQmFzZU1hdGVyaWFsXCI7XHJcbmltcG9ydCB0eXBlIHsgQmFzZVRleHR1cmUgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvYmFzZVRleHR1cmVcIjtcclxuXHJcbmNvbnN0IE5BTUUgPSBcIktIUl9tYXRlcmlhbHNfYW5pc290cm9weVwiO1xyXG5cclxuLyoqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgY2xhc3MgS0hSX21hdGVyaWFsc19hbmlzb3Ryb3B5IGltcGxlbWVudHMgSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyIHtcclxuICAgIC8qKiBOYW1lIG9mIHRoaXMgZXh0ZW5zaW9uICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZSA9IE5BTUU7XHJcblxyXG4gICAgLyoqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyBlbmFibGVkICovXHJcbiAgICBwdWJsaWMgZW5hYmxlZCA9IHRydWU7XHJcblxyXG4gICAgLyoqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyByZXF1aXJlZCAqL1xyXG4gICAgcHVibGljIHJlcXVpcmVkID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBfZXhwb3J0ZXI6IEdMVEZFeHBvcnRlcjtcclxuXHJcbiAgICBwcml2YXRlIF93YXNVc2VkID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZXhwb3J0ZXI6IEdMVEZFeHBvcnRlcikge1xyXG4gICAgICAgIHRoaXMuX2V4cG9ydGVyID0gZXhwb3J0ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7fVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBnZXQgd2FzVXNlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fd2FzVXNlZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcG9zdEV4cG9ydE1hdGVyaWFsQWRkaXRpb25hbFRleHR1cmVzPyhjb250ZXh0OiBzdHJpbmcsIG5vZGU6IElNYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCk6IEJhc2VUZXh0dXJlW10ge1xyXG4gICAgICAgIGNvbnN0IGFkZGl0aW9uYWxUZXh0dXJlczogQmFzZVRleHR1cmVbXSA9IFtdO1xyXG4gICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwgaW5zdGFuY2VvZiBQQlJCYXNlTWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbC5hbmlzb3Ryb3B5LmlzRW5hYmxlZCAmJiAhYmFieWxvbk1hdGVyaWFsLmFuaXNvdHJvcHkubGVnYWN5KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsLmFuaXNvdHJvcHkudGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZGl0aW9uYWxUZXh0dXJlcy5wdXNoKGJhYnlsb25NYXRlcmlhbC5hbmlzb3Ryb3B5LnRleHR1cmUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFkZGl0aW9uYWxUZXh0dXJlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxyXG4gICAgcHVibGljIHBvc3RFeHBvcnRNYXRlcmlhbEFzeW5jPyhjb250ZXh0OiBzdHJpbmcsIG5vZGU6IElNYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCk6IFByb21pc2U8SU1hdGVyaWFsPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwgaW5zdGFuY2VvZiBQQlJCYXNlTWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgICAgIGlmICghYmFieWxvbk1hdGVyaWFsLmFuaXNvdHJvcHkuaXNFbmFibGVkIHx8IGJhYnlsb25NYXRlcmlhbC5hbmlzb3Ryb3B5LmxlZ2FjeSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUobm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX3dhc1VzZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIG5vZGUuZXh0ZW5zaW9ucyA9IG5vZGUuZXh0ZW5zaW9ucyB8fCB7fTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBhbmlzb3Ryb3B5VGV4dHVyZUluZm8gPSB0aGlzLl9leHBvcnRlci5fbWF0ZXJpYWxFeHBvcnRlci5nZXRUZXh0dXJlSW5mbyhiYWJ5bG9uTWF0ZXJpYWwuYW5pc290cm9weS50ZXh0dXJlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBhbmlzb3Ryb3B5SW5mbzogSUtIUk1hdGVyaWFsc0FuaXNvdHJvcHkgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pc290cm9weVN0cmVuZ3RoOiBiYWJ5bG9uTWF0ZXJpYWwuYW5pc290cm9weS5pbnRlbnNpdHksXHJcbiAgICAgICAgICAgICAgICAgICAgYW5pc290cm9weVJvdGF0aW9uOiBiYWJ5bG9uTWF0ZXJpYWwuYW5pc290cm9weS5hbmdsZSxcclxuICAgICAgICAgICAgICAgICAgICBhbmlzb3Ryb3B5VGV4dHVyZTogYW5pc290cm9weVRleHR1cmVJbmZvID8/IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGFuaXNvdHJvcHlJbmZvLmFuaXNvdHJvcHlUZXh0dXJlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXhwb3J0ZXIuX21hdGVyaWFsTmVlZHNVVnNTZXQuYWRkKGJhYnlsb25NYXRlcmlhbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbm9kZS5leHRlbnNpb25zW05BTUVdID0gYW5pc290cm9weUluZm87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzb2x2ZShub2RlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuR0xURkV4cG9ydGVyLlJlZ2lzdGVyRXh0ZW5zaW9uKE5BTUUsIChleHBvcnRlcikgPT4gbmV3IEtIUl9tYXRlcmlhbHNfYW5pc290cm9weShleHBvcnRlcikpO1xyXG4iLCJpbXBvcnQgdHlwZSB7IElNYXRlcmlhbCwgSUtIUk1hdGVyaWFsc0NsZWFyY29hdCB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHR5cGUgeyBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIgfSBmcm9tIFwiLi4vZ2xURkV4cG9ydGVyRXh0ZW5zaW9uXCI7XHJcbmltcG9ydCB7IEdMVEZFeHBvcnRlciB9IGZyb20gXCIuLi9nbFRGRXhwb3J0ZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBQQlJCYXNlTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvUEJSL3BickJhc2VNYXRlcmlhbFwiO1xyXG5pbXBvcnQgdHlwZSB7IEJhc2VUZXh0dXJlIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1RleHR1cmVzL2Jhc2VUZXh0dXJlXCI7XHJcblxyXG5pbXBvcnQgeyBUb29scyB9IGZyb20gXCJjb3JlL01pc2MvdG9vbHNcIjtcclxuXHJcbmNvbnN0IE5BTUUgPSBcIktIUl9tYXRlcmlhbHNfY2xlYXJjb2F0XCI7XHJcblxyXG4vKipcclxuICogQGludGVybmFsXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBjbGFzcyBLSFJfbWF0ZXJpYWxzX2NsZWFyY29hdCBpbXBsZW1lbnRzIElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMiB7XHJcbiAgICAvKiogTmFtZSBvZiB0aGlzIGV4dGVuc2lvbiAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBOQU1FO1xyXG5cclxuICAgIC8qKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgZW5hYmxlZCAqL1xyXG4gICAgcHVibGljIGVuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgIC8qKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgcmVxdWlyZWQgKi9cclxuICAgIHB1YmxpYyByZXF1aXJlZCA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgX2V4cG9ydGVyOiBHTFRGRXhwb3J0ZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBfd2FzVXNlZCA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGV4cG9ydGVyOiBHTFRGRXhwb3J0ZXIpIHtcclxuICAgICAgICB0aGlzLl9leHBvcnRlciA9IGV4cG9ydGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge31cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgZ2V0IHdhc1VzZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dhc1VzZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBvc3RFeHBvcnRNYXRlcmlhbEFkZGl0aW9uYWxUZXh0dXJlcz8oY29udGV4dDogc3RyaW5nLCBub2RlOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBCYXNlVGV4dHVyZVtdIHtcclxuICAgICAgICBjb25zdCBhZGRpdGlvbmFsVGV4dHVyZXM6IEJhc2VUZXh0dXJlW10gPSBbXTtcclxuICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsIGluc3RhbmNlb2YgUEJSQmFzZU1hdGVyaWFsKSB7XHJcbiAgICAgICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwuY2xlYXJDb2F0LmlzRW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbC5jbGVhckNvYXQudGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZGl0aW9uYWxUZXh0dXJlcy5wdXNoKGJhYnlsb25NYXRlcmlhbC5jbGVhckNvYXQudGV4dHVyZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIWJhYnlsb25NYXRlcmlhbC5jbGVhckNvYXQudXNlUm91Z2huZXNzRnJvbU1haW5UZXh0dXJlICYmIGJhYnlsb25NYXRlcmlhbC5jbGVhckNvYXQudGV4dHVyZVJvdWdobmVzcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZGl0aW9uYWxUZXh0dXJlcy5wdXNoKGJhYnlsb25NYXRlcmlhbC5jbGVhckNvYXQudGV4dHVyZVJvdWdobmVzcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsLmNsZWFyQ29hdC5idW1wVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZGl0aW9uYWxUZXh0dXJlcy5wdXNoKGJhYnlsb25NYXRlcmlhbC5jbGVhckNvYXQuYnVtcFRleHR1cmUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFkZGl0aW9uYWxUZXh0dXJlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxyXG4gICAgcHVibGljIHBvc3RFeHBvcnRNYXRlcmlhbEFzeW5jPyhjb250ZXh0OiBzdHJpbmcsIG5vZGU6IElNYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCk6IFByb21pc2U8SU1hdGVyaWFsPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwgaW5zdGFuY2VvZiBQQlJCYXNlTWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgICAgIGlmICghYmFieWxvbk1hdGVyaWFsLmNsZWFyQ29hdC5pc0VuYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl93YXNVc2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBub2RlLmV4dGVuc2lvbnMgPSBub2RlLmV4dGVuc2lvbnMgfHwge307XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgY2xlYXJDb2F0VGV4dHVyZUluZm8gPSB0aGlzLl9leHBvcnRlci5fbWF0ZXJpYWxFeHBvcnRlci5nZXRUZXh0dXJlSW5mbyhiYWJ5bG9uTWF0ZXJpYWwuY2xlYXJDb2F0LnRleHR1cmUpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNsZWFyQ29hdFRleHR1cmVSb3VnaG5lc3NJbmZvO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbC5jbGVhckNvYXQudXNlUm91Z2huZXNzRnJvbU1haW5UZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJDb2F0VGV4dHVyZVJvdWdobmVzc0luZm8gPSB0aGlzLl9leHBvcnRlci5fbWF0ZXJpYWxFeHBvcnRlci5nZXRUZXh0dXJlSW5mbyhiYWJ5bG9uTWF0ZXJpYWwuY2xlYXJDb2F0LnRleHR1cmUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhckNvYXRUZXh0dXJlUm91Z2huZXNzSW5mbyA9IHRoaXMuX2V4cG9ydGVyLl9tYXRlcmlhbEV4cG9ydGVyLmdldFRleHR1cmVJbmZvKGJhYnlsb25NYXRlcmlhbC5jbGVhckNvYXQudGV4dHVyZVJvdWdobmVzcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbC5jbGVhckNvYXQuaXNUaW50RW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIFRvb2xzLldhcm4oYENsZWFyIENvbG9yIHRpbnQgaXMgbm90IHN1cHBvcnRlZCBmb3IgZ2xURiBleHBvcnQuIElnbm9yaW5nIGZvcjogJHtiYWJ5bG9uTWF0ZXJpYWwubmFtZX1gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsLmNsZWFyQ29hdC5yZW1hcEYwT25JbnRlcmZhY2VDaGFuZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBUb29scy5XYXJuKGBDbGVhciBDb2xvciBGMCByZW1hcHBpbmcgaXMgbm90IHN1cHBvcnRlZCBmb3IgZ2xURiBleHBvcnQuIElnbm9yaW5nIGZvcjogJHtiYWJ5bG9uTWF0ZXJpYWwubmFtZX1gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjbGVhckNvYXROb3JtYWxUZXh0dXJlSW5mbyA9IHRoaXMuX2V4cG9ydGVyLl9tYXRlcmlhbEV4cG9ydGVyLmdldFRleHR1cmVJbmZvKGJhYnlsb25NYXRlcmlhbC5jbGVhckNvYXQuYnVtcFRleHR1cmUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGNsZWFyQ29hdEluZm86IElLSFJNYXRlcmlhbHNDbGVhcmNvYXQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJjb2F0RmFjdG9yOiBiYWJ5bG9uTWF0ZXJpYWwuY2xlYXJDb2F0LmludGVuc2l0eSxcclxuICAgICAgICAgICAgICAgICAgICBjbGVhcmNvYXRUZXh0dXJlOiBjbGVhckNvYXRUZXh0dXJlSW5mbyA/PyB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJjb2F0Um91Z2huZXNzRmFjdG9yOiBiYWJ5bG9uTWF0ZXJpYWwuY2xlYXJDb2F0LnJvdWdobmVzcyxcclxuICAgICAgICAgICAgICAgICAgICBjbGVhcmNvYXRSb3VnaG5lc3NUZXh0dXJlOiBjbGVhckNvYXRUZXh0dXJlUm91Z2huZXNzSW5mbyA/PyB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJjb2F0Tm9ybWFsVGV4dHVyZTogY2xlYXJDb2F0Tm9ybWFsVGV4dHVyZUluZm8gPz8gdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY2xlYXJDb2F0SW5mby5jbGVhcmNvYXRUZXh0dXJlICE9PSBudWxsIHx8IGNsZWFyQ29hdEluZm8uY2xlYXJjb2F0Um91Z2huZXNzVGV4dHVyZSAhPT0gbnVsbCB8fCBjbGVhckNvYXRJbmZvLmNsZWFyY29hdFJvdWdobmVzc1RleHR1cmUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9leHBvcnRlci5fbWF0ZXJpYWxOZWVkc1VWc1NldC5hZGQoYmFieWxvbk1hdGVyaWFsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBub2RlLmV4dGVuc2lvbnNbTkFNRV0gPSBjbGVhckNvYXRJbmZvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc29sdmUobm9kZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkdMVEZFeHBvcnRlci5SZWdpc3RlckV4dGVuc2lvbihOQU1FLCAoZXhwb3J0ZXIpID0+IG5ldyBLSFJfbWF0ZXJpYWxzX2NsZWFyY29hdChleHBvcnRlcikpO1xyXG4iLCJpbXBvcnQgdHlwZSB7IElNYXRlcmlhbCwgSUtIUk1hdGVyaWFsc0RpZmZ1c2VUcmFuc21pc3Npb24gfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB0eXBlIHsgSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyIH0gZnJvbSBcIi4uL2dsVEZFeHBvcnRlckV4dGVuc2lvblwiO1xyXG5pbXBvcnQgeyBHTFRGRXhwb3J0ZXIgfSBmcm9tIFwiLi4vZ2xURkV4cG9ydGVyXCI7XHJcbmltcG9ydCB0eXBlIHsgTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgUEJSTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvUEJSL3Bick1hdGVyaWFsXCI7XHJcbmltcG9ydCB0eXBlIHsgQmFzZVRleHR1cmUgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvYmFzZVRleHR1cmVcIjtcclxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSBcImNvcmUvTWlzYy9sb2dnZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCJjb3JlL3R5cGVzXCI7XHJcblxyXG5jb25zdCBOQU1FID0gXCJLSFJfbWF0ZXJpYWxzX2RpZmZ1c2VfdHJhbnNtaXNzaW9uXCI7XHJcblxyXG4vKipcclxuICogR2V0IHRoZSBhcHByb3ByaWF0ZSB0cmFuc2x1Y2VuY3kgaW50ZW5zaXR5IHRleHR1cmUgZm9yIHRoZSBtYXRlcmlhbC5cclxuICogQGludGVybmFsXHJcbiAqL1xyXG5mdW5jdGlvbiBHZXRUcmFuc2x1Y2VuY3lJbnRlbnNpdHlUZXh0dXJlKGNvbnRleHQ6IHN0cmluZywgYmFieWxvbk1hdGVyaWFsOiBQQlJNYXRlcmlhbCk6IE51bGxhYmxlPEJhc2VUZXh0dXJlPiB7XHJcbiAgICBjb25zdCBzdWJzID0gYmFieWxvbk1hdGVyaWFsLnN1YlN1cmZhY2U7XHJcbiAgICBsZXQgdGV4dHVyZSA9IG51bGw7XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgdHJhbnNsdWNlbmN5IGludGVuc2l0eSB0ZXh0dXJlIGlzIGF2YWlsYWJsZSBvciBjYW4gYmUgZGVyaXZlZCBmcm9tIHRoaWNrbmVzcyB0ZXh0dXJlXHJcbiAgICBpZiAoc3Vicy50cmFuc2x1Y2VuY3lJbnRlbnNpdHlUZXh0dXJlKSB7XHJcbiAgICAgICAgdGV4dHVyZSA9IHN1YnMudHJhbnNsdWNlbmN5SW50ZW5zaXR5VGV4dHVyZTtcclxuICAgIH0gZWxzZSBpZiAoc3Vicy50aGlja25lc3NUZXh0dXJlICYmIHN1YnMudXNlTWFza0Zyb21UaGlja25lc3NUZXh0dXJlKSB7XHJcbiAgICAgICAgdGV4dHVyZSA9IHN1YnMudGhpY2tuZXNzVGV4dHVyZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGV4dHVyZSAmJiAhc3Vicy51c2VHbHRmU3R5bGVUZXh0dXJlcykge1xyXG4gICAgICAgIExvZ2dlci5XYXJuKGAke2NvbnRleHR9OiBUcmFuc2x1Y2VuY3kgaW50ZW5zaXR5IHRleHR1cmUgaXMgbm90IHN1cHBvcnRlZCB3aGVuIHVzZUdsdGZTdHlsZVRleHR1cmVzID0gZmFsc2UuIElnbm9yaW5nIGZvcjogJHtiYWJ5bG9uTWF0ZXJpYWwubmFtZX1gLCAxKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGV4dHVyZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFtQcm9wb3NlZCBTcGVjaWZpY2F0aW9uXShodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvcHVsbC8xODI1KVxyXG4gKiAhISEgRXhwZXJpbWVudGFsIEV4dGVuc2lvbiBTdWJqZWN0IHRvIENoYW5nZXMgISEhXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBjbGFzcyBLSFJfbWF0ZXJpYWxzX2RpZmZ1c2VfdHJhbnNtaXNzaW9uIGltcGxlbWVudHMgSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyIHtcclxuICAgIC8qKiBOYW1lIG9mIHRoaXMgZXh0ZW5zaW9uICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZSA9IE5BTUU7XHJcblxyXG4gICAgLyoqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyBlbmFibGVkICovXHJcbiAgICBwdWJsaWMgZW5hYmxlZCA9IHRydWU7XHJcblxyXG4gICAgLyoqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyByZXF1aXJlZCAqL1xyXG4gICAgcHVibGljIHJlcXVpcmVkID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBfZXhwb3J0ZXI6IEdMVEZFeHBvcnRlcjtcclxuXHJcbiAgICBwcml2YXRlIF93YXNVc2VkID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZXhwb3J0ZXI6IEdMVEZFeHBvcnRlcikge1xyXG4gICAgICAgIHRoaXMuX2V4cG9ydGVyID0gZXhwb3J0ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7fVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBnZXQgd2FzVXNlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fd2FzVXNlZDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFmdGVyIGV4cG9ydGluZyBhIG1hdGVyaWFsLCBkZWFsIHdpdGggYWRkaXRpb25hbCB0ZXh0dXJlc1xyXG4gICAgICogQHBhcmFtIGNvbnRleHQgR0xURiBjb250ZXh0IG9mIHRoZSBtYXRlcmlhbFxyXG4gICAgICogQHBhcmFtIG5vZGUgZXhwb3J0ZWQgR0xURiBub2RlXHJcbiAgICAgKiBAcGFyYW0gYmFieWxvbk1hdGVyaWFsIGNvcnJlc3BvbmRpbmcgYmFieWxvbiBtYXRlcmlhbFxyXG4gICAgICogQHJldHVybnMgYXJyYXkgb2YgYWRkaXRpb25hbCB0ZXh0dXJlcyB0byBleHBvcnRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHBvc3RFeHBvcnRNYXRlcmlhbEFkZGl0aW9uYWxUZXh0dXJlcz8oY29udGV4dDogc3RyaW5nLCBub2RlOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBCYXNlVGV4dHVyZVtdIHtcclxuICAgICAgICBjb25zdCBhZGRpdGlvbmFsVGV4dHVyZXM6IEJhc2VUZXh0dXJlW10gPSBbXTtcclxuXHJcbiAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbCBpbnN0YW5jZW9mIFBCUk1hdGVyaWFsICYmIHRoaXMuX2lzRXh0ZW5zaW9uRW5hYmxlZChiYWJ5bG9uTWF0ZXJpYWwpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRyYW5zbHVjZW5jeUludGVuc2l0eVRleHR1cmUgPSBHZXRUcmFuc2x1Y2VuY3lJbnRlbnNpdHlUZXh0dXJlKGNvbnRleHQsIGJhYnlsb25NYXRlcmlhbCk7XHJcbiAgICAgICAgICAgIGlmICh0cmFuc2x1Y2VuY3lJbnRlbnNpdHlUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICBhZGRpdGlvbmFsVGV4dHVyZXMucHVzaCh0cmFuc2x1Y2VuY3lJbnRlbnNpdHlUZXh0dXJlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsLnN1YlN1cmZhY2UudHJhbnNsdWNlbmN5Q29sb3JUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICBhZGRpdGlvbmFsVGV4dHVyZXMucHVzaChiYWJ5bG9uTWF0ZXJpYWwuc3ViU3VyZmFjZS50cmFuc2x1Y2VuY3lDb2xvclRleHR1cmUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBhZGRpdGlvbmFsVGV4dHVyZXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYWRkaXRpb25hbFRleHR1cmVzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2lzRXh0ZW5zaW9uRW5hYmxlZChtYXQ6IFBCUk1hdGVyaWFsKTogYm9vbGVhbiB7XHJcbiAgICAgICAgLy8gVGhpcyBleHRlbnNpb24gbXVzdCBub3QgYmUgdXNlZCBvbiBhIG1hdGVyaWFsIHRoYXQgYWxzbyB1c2VzIEtIUl9tYXRlcmlhbHNfdW5saXRcclxuICAgICAgICBpZiAobWF0LnVubGl0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc3VicyA9IG1hdC5zdWJTdXJmYWNlO1xyXG4gICAgICAgIGlmICghc3Vicy5pc1RyYW5zbHVjZW5jeUVuYWJsZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgIW1hdC51bmxpdCAmJlxyXG4gICAgICAgICAgICAhc3Vicy51c2VBbGJlZG9Ub1RpbnRUcmFuc2x1Y2VuY3kgJiZcclxuICAgICAgICAgICAgc3Vicy51c2VHbHRmU3R5bGVUZXh0dXJlcyAmJlxyXG4gICAgICAgICAgICBzdWJzLnZvbHVtZUluZGV4T2ZSZWZyYWN0aW9uID09PSAxICYmXHJcbiAgICAgICAgICAgIHN1YnMubWluaW11bVRoaWNrbmVzcyA9PT0gMCAmJlxyXG4gICAgICAgICAgICBzdWJzLm1heGltdW1UaGlja25lc3MgPT09IDBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWZ0ZXIgZXhwb3J0aW5nIGEgbWF0ZXJpYWxcclxuICAgICAqIEBwYXJhbSBjb250ZXh0IEdMVEYgY29udGV4dCBvZiB0aGUgbWF0ZXJpYWxcclxuICAgICAqIEBwYXJhbSBub2RlIGV4cG9ydGVkIEdMVEYgbm9kZVxyXG4gICAgICogQHBhcmFtIGJhYnlsb25NYXRlcmlhbCBjb3JyZXNwb25kaW5nIGJhYnlsb24gbWF0ZXJpYWxcclxuICAgICAqIEByZXR1cm5zIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSB1cGRhdGVkIG5vZGVcclxuICAgICAqL1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XHJcbiAgICBwdWJsaWMgcG9zdEV4cG9ydE1hdGVyaWFsQXN5bmM/KGNvbnRleHQ6IHN0cmluZywgbm9kZTogSU1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsKTogUHJvbWlzZTxJTWF0ZXJpYWw+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbCBpbnN0YW5jZW9mIFBCUk1hdGVyaWFsICYmIHRoaXMuX2lzRXh0ZW5zaW9uRW5hYmxlZChiYWJ5bG9uTWF0ZXJpYWwpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl93YXNVc2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdWJzID0gYmFieWxvbk1hdGVyaWFsLnN1YlN1cmZhY2U7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0cmFuc2x1Y2VuY3lJbnRlbnNpdHlUZXh0dXJlID0gR2V0VHJhbnNsdWNlbmN5SW50ZW5zaXR5VGV4dHVyZShjb250ZXh0LCBiYWJ5bG9uTWF0ZXJpYWwpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpZmZ1c2VUcmFuc21pc3Npb25GYWN0b3IgPSBzdWJzLnRyYW5zbHVjZW5jeUludGVuc2l0eSA9PSAwID8gdW5kZWZpbmVkIDogc3Vicy50cmFuc2x1Y2VuY3lJbnRlbnNpdHk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkaWZmdXNlVHJhbnNtaXNzaW9uVGV4dHVyZSA9IHRoaXMuX2V4cG9ydGVyLl9tYXRlcmlhbEV4cG9ydGVyLmdldFRleHR1cmVJbmZvKHRyYW5zbHVjZW5jeUludGVuc2l0eVRleHR1cmUpID8/IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpZmZ1c2VUcmFuc21pc3Npb25Db2xvckZhY3RvciA9ICFzdWJzLnRyYW5zbHVjZW5jeUNvbG9yIHx8IHN1YnMudHJhbnNsdWNlbmN5Q29sb3IuZXF1YWxzRmxvYXRzKDEuMCwgMS4wLCAxLjApID8gdW5kZWZpbmVkIDogc3Vicy50cmFuc2x1Y2VuY3lDb2xvci5hc0FycmF5KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkaWZmdXNlVHJhbnNtaXNzaW9uQ29sb3JUZXh0dXJlID0gdGhpcy5fZXhwb3J0ZXIuX21hdGVyaWFsRXhwb3J0ZXIuZ2V0VGV4dHVyZUluZm8oc3Vicy50cmFuc2x1Y2VuY3lDb2xvclRleHR1cmUpID8/IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkaWZmdXNlVHJhbnNtaXNzaW9uSW5mbzogSUtIUk1hdGVyaWFsc0RpZmZ1c2VUcmFuc21pc3Npb24gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlmZnVzZVRyYW5zbWlzc2lvbkZhY3RvcixcclxuICAgICAgICAgICAgICAgICAgICBkaWZmdXNlVHJhbnNtaXNzaW9uVGV4dHVyZSxcclxuICAgICAgICAgICAgICAgICAgICBkaWZmdXNlVHJhbnNtaXNzaW9uQ29sb3JGYWN0b3IsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlmZnVzZVRyYW5zbWlzc2lvbkNvbG9yVGV4dHVyZSxcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRpZmZ1c2VUcmFuc21pc3Npb25UZXh0dXJlIHx8IGRpZmZ1c2VUcmFuc21pc3Npb25Db2xvclRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9leHBvcnRlci5fbWF0ZXJpYWxOZWVkc1VWc1NldC5hZGQoYmFieWxvbk1hdGVyaWFsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBub2RlLmV4dGVuc2lvbnMgPSBub2RlLmV4dGVuc2lvbnMgfHwge307XHJcbiAgICAgICAgICAgICAgICBub2RlLmV4dGVuc2lvbnNbTkFNRV0gPSBkaWZmdXNlVHJhbnNtaXNzaW9uSW5mbztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXNvbHZlKG5vZGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5HTFRGRXhwb3J0ZXIuUmVnaXN0ZXJFeHRlbnNpb24oTkFNRSwgKGV4cG9ydGVyKSA9PiBuZXcgS0hSX21hdGVyaWFsc19kaWZmdXNlX3RyYW5zbWlzc2lvbihleHBvcnRlcikpO1xyXG4iLCJpbXBvcnQgdHlwZSB7IElNYXRlcmlhbCwgSUtIUk1hdGVyaWFsc0Rpc3BlcnNpb24gfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB0eXBlIHsgSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyIH0gZnJvbSBcIi4uL2dsVEZFeHBvcnRlckV4dGVuc2lvblwiO1xyXG5pbXBvcnQgeyBHTFRGRXhwb3J0ZXIgfSBmcm9tIFwiLi4vZ2xURkV4cG9ydGVyXCI7XHJcbmltcG9ydCB0eXBlIHsgTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgUEJSTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvUEJSL3Bick1hdGVyaWFsXCI7XHJcblxyXG5jb25zdCBOQU1FID0gXCJLSFJfbWF0ZXJpYWxzX2Rpc3BlcnNpb25cIjtcclxuXHJcbi8qKlxyXG4gKiBbU3BlY2lmaWNhdGlvbl0oaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvODdiZDY0YTdmNWUyM2M4NGI2YWVmMmU2MDgyMDY5NTgzZWQwZGRiNC9leHRlbnNpb25zLzIuMC9LaHJvbm9zL0tIUl9tYXRlcmlhbHNfZGlzcGVyc2lvbi9SRUFETUUubWQpXHJcbiAqIEBleHBlcmltZW50YWxcclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGNsYXNzIEtIUl9tYXRlcmlhbHNfZGlzcGVyc2lvbiBpbXBsZW1lbnRzIElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMiB7XHJcbiAgICAvKiogTmFtZSBvZiB0aGlzIGV4dGVuc2lvbiAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBOQU1FO1xyXG5cclxuICAgIC8qKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgZW5hYmxlZCAqL1xyXG4gICAgcHVibGljIGVuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgIC8qKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgcmVxdWlyZWQgKi9cclxuICAgIHB1YmxpYyByZXF1aXJlZCA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgX3dhc1VzZWQgPSBmYWxzZTtcclxuXHJcbiAgICAvKiogQ29uc3RydWN0b3IgKi9cclxuICAgIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgICAvKiogRGlzcG9zZSAqL1xyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7fVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBnZXQgd2FzVXNlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fd2FzVXNlZDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9pc0V4dGVuc2lvbkVuYWJsZWQobWF0OiBQQlJNYXRlcmlhbCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIC8vIFRoaXMgZXh0ZW5zaW9uIG11c3Qgbm90IGJlIHVzZWQgb24gYSBtYXRlcmlhbCB0aGF0IGFsc28gdXNlcyBLSFJfbWF0ZXJpYWxzX3VubGl0XHJcbiAgICAgICAgaWYgKG1hdC51bmxpdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHN1YnMgPSBtYXQuc3ViU3VyZmFjZTtcclxuICAgICAgICAvLyB0aGlzIGV4dGVuc2lvbiByZXF1aXJlcyByZWZyYWN0aW9uIHRvIGJlIGVuYWJsZWQuXHJcbiAgICAgICAgaWYgKCFzdWJzLmlzUmVmcmFjdGlvbkVuYWJsZWQgJiYgIXN1YnMuaXNEaXNwZXJzaW9uRW5hYmxlZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWZ0ZXIgZXhwb3J0aW5nIGEgbWF0ZXJpYWxcclxuICAgICAqIEBwYXJhbSBjb250ZXh0IEdMVEYgY29udGV4dCBvZiB0aGUgbWF0ZXJpYWxcclxuICAgICAqIEBwYXJhbSBub2RlIGV4cG9ydGVkIEdMVEYgbm9kZVxyXG4gICAgICogQHBhcmFtIGJhYnlsb25NYXRlcmlhbCBjb3JyZXNwb25kaW5nIGJhYnlsb24gbWF0ZXJpYWxcclxuICAgICAqIEByZXR1cm5zIHByb21pc2UsIHJlc29sdmVzIHdpdGggdGhlIG1hdGVyaWFsXHJcbiAgICAgKi9cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxyXG4gICAgcHVibGljIHBvc3RFeHBvcnRNYXRlcmlhbEFzeW5jPyhjb250ZXh0OiBzdHJpbmcsIG5vZGU6IElNYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCk6IFByb21pc2U8SU1hdGVyaWFsPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwgaW5zdGFuY2VvZiBQQlJNYXRlcmlhbCAmJiB0aGlzLl9pc0V4dGVuc2lvbkVuYWJsZWQoYmFieWxvbk1hdGVyaWFsKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fd2FzVXNlZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3VicyA9IGJhYnlsb25NYXRlcmlhbC5zdWJTdXJmYWNlO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGlzcGVyc2lvbiA9IHN1YnMuZGlzcGVyc2lvbjtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkaXNwZXJzaW9uSW5mbzogSUtIUk1hdGVyaWFsc0Rpc3BlcnNpb24gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGVyc2lvbjogZGlzcGVyc2lvbixcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBub2RlLmV4dGVuc2lvbnMgPSBub2RlLmV4dGVuc2lvbnMgfHwge307XHJcbiAgICAgICAgICAgICAgICBub2RlLmV4dGVuc2lvbnNbTkFNRV0gPSBkaXNwZXJzaW9uSW5mbztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXNvbHZlKG5vZGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5HTFRGRXhwb3J0ZXIuUmVnaXN0ZXJFeHRlbnNpb24oTkFNRSwgKCkgPT4gbmV3IEtIUl9tYXRlcmlhbHNfZGlzcGVyc2lvbigpKTtcclxuIiwiaW1wb3J0IHR5cGUgeyBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIgfSBmcm9tIFwiLi4vZ2xURkV4cG9ydGVyRXh0ZW5zaW9uXCI7XHJcbmltcG9ydCB7IEdMVEZFeHBvcnRlciB9IGZyb20gXCIuLi9nbFRGRXhwb3J0ZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBQQlJNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9QQlIvcGJyTWF0ZXJpYWxcIjtcclxuaW1wb3J0IHR5cGUgeyBJTWF0ZXJpYWwsIElLSFJNYXRlcmlhbHNFbWlzc2l2ZVN0cmVuZ3RoIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5cclxuY29uc3QgTkFNRSA9IFwiS0hSX21hdGVyaWFsc19lbWlzc2l2ZV9zdHJlbmd0aFwiO1xyXG5cclxuLyoqXHJcbiAqIFtTcGVjaWZpY2F0aW9uXShodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi9tYWluL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX21hdGVyaWFsc19lbWlzc2l2ZV9zdHJlbmd0aC9SRUFETUUubWQpXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBjbGFzcyBLSFJfbWF0ZXJpYWxzX2VtaXNzaXZlX3N0cmVuZ3RoIGltcGxlbWVudHMgSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyIHtcclxuICAgIC8qKiBOYW1lIG9mIHRoaXMgZXh0ZW5zaW9uICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZSA9IE5BTUU7XHJcblxyXG4gICAgLyoqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyBlbmFibGVkICovXHJcbiAgICBwdWJsaWMgZW5hYmxlZCA9IHRydWU7XHJcblxyXG4gICAgLyoqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyByZXF1aXJlZCAqL1xyXG4gICAgcHVibGljIHJlcXVpcmVkID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBfd2FzVXNlZCA9IGZhbHNlO1xyXG5cclxuICAgIC8qKiBEaXNwb3NlICovXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHt9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGdldCB3YXNVc2VkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl93YXNVc2VkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWZ0ZXIgZXhwb3J0aW5nIGEgbWF0ZXJpYWxcclxuICAgICAqIEBwYXJhbSBjb250ZXh0IEdMVEYgY29udGV4dCBvZiB0aGUgbWF0ZXJpYWxcclxuICAgICAqIEBwYXJhbSBub2RlIGV4cG9ydGVkIEdMVEYgbm9kZVxyXG4gICAgICogQHBhcmFtIGJhYnlsb25NYXRlcmlhbCBjb3JyZXNwb25kaW5nIGJhYnlsb24gbWF0ZXJpYWxcclxuICAgICAqIEByZXR1cm5zIHByb21pc2UsIHJlc29sdmVzIHdpdGggdGhlIG1hdGVyaWFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhc3luYyBwb3N0RXhwb3J0TWF0ZXJpYWxBc3luYyhjb250ZXh0OiBzdHJpbmcsIG5vZGU6IElNYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCk6IFByb21pc2U8SU1hdGVyaWFsPiB7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghKGJhYnlsb25NYXRlcmlhbCBpbnN0YW5jZW9mIFBCUk1hdGVyaWFsKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUobm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGVtaXNzaXZlQ29sb3IgPSBiYWJ5bG9uTWF0ZXJpYWwuZW1pc3NpdmVDb2xvci5hc0FycmF5KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRlbXBFbWlzc2l2ZVN0cmVuZ3RoID0gTWF0aC5tYXgoLi4uZW1pc3NpdmVDb2xvcik7XHJcblxyXG4gICAgICAgICAgICBpZiAodGVtcEVtaXNzaXZlU3RyZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl93YXNVc2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBub2RlLmV4dGVuc2lvbnMgfHw9IHt9O1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGVtaXNzaXZlU3RyZW5ndGhJbmZvOiBJS0hSTWF0ZXJpYWxzRW1pc3NpdmVTdHJlbmd0aCA9IHtcclxuICAgICAgICAgICAgICAgICAgICBlbWlzc2l2ZVN0cmVuZ3RoOiB0ZW1wRW1pc3NpdmVTdHJlbmd0aCxcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gTm9ybWFsaXplIGVhY2ggdmFsdWUgb2YgdGhlIGVtaXNzaXZlIGZhY3RvciB0byBoYXZlIGEgbWF4IHZhbHVlIG9mIDFcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0VtaXNzaXZlRmFjdG9yID0gYmFieWxvbk1hdGVyaWFsLmVtaXNzaXZlQ29sb3Iuc2NhbGUoMSAvIGVtaXNzaXZlU3RyZW5ndGhJbmZvLmVtaXNzaXZlU3RyZW5ndGgpO1xyXG5cclxuICAgICAgICAgICAgICAgIG5vZGUuZW1pc3NpdmVGYWN0b3IgPSBuZXdFbWlzc2l2ZUZhY3Rvci5hc0FycmF5KCk7XHJcbiAgICAgICAgICAgICAgICBub2RlLmV4dGVuc2lvbnNbTkFNRV0gPSBlbWlzc2l2ZVN0cmVuZ3RoSW5mbztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUobm9kZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkdMVEZFeHBvcnRlci5SZWdpc3RlckV4dGVuc2lvbihOQU1FLCAoZXhwb3J0ZXIpID0+IG5ldyBLSFJfbWF0ZXJpYWxzX2VtaXNzaXZlX3N0cmVuZ3RoKCkpO1xyXG4iLCJpbXBvcnQgdHlwZSB7IElNYXRlcmlhbCwgSUtIUk1hdGVyaWFsc0lvciB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHR5cGUgeyBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIgfSBmcm9tIFwiLi4vZ2xURkV4cG9ydGVyRXh0ZW5zaW9uXCI7XHJcbmltcG9ydCB7IEdMVEZFeHBvcnRlciB9IGZyb20gXCIuLi9nbFRGRXhwb3J0ZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBQQlJNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9QQlIvcGJyTWF0ZXJpYWxcIjtcclxuXHJcbmNvbnN0IE5BTUUgPSBcIktIUl9tYXRlcmlhbHNfaW9yXCI7XHJcblxyXG4vKipcclxuICogW1NwZWNpZmljYXRpb25dKGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9ibG9iL21haW4vZXh0ZW5zaW9ucy8yLjAvS2hyb25vcy9LSFJfbWF0ZXJpYWxzX2lvci9SRUFETUUubWQpXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBjbGFzcyBLSFJfbWF0ZXJpYWxzX2lvciBpbXBsZW1lbnRzIElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMiB7XHJcbiAgICAvKiogTmFtZSBvZiB0aGlzIGV4dGVuc2lvbiAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBOQU1FO1xyXG5cclxuICAgIC8qKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgZW5hYmxlZCAqL1xyXG4gICAgcHVibGljIGVuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgIC8qKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgcmVxdWlyZWQgKi9cclxuICAgIHB1YmxpYyByZXF1aXJlZCA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgX3dhc1VzZWQgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gICAgLyoqIERpc3Bvc2UgKi9cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge31cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgZ2V0IHdhc1VzZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dhc1VzZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfaXNFeHRlbnNpb25FbmFibGVkKG1hdDogUEJSTWF0ZXJpYWwpOiBib29sZWFuIHtcclxuICAgICAgICAvLyBUaGlzIGV4dGVuc2lvbiBtdXN0IG5vdCBiZSB1c2VkIG9uIGEgbWF0ZXJpYWwgdGhhdCBhbHNvIHVzZXMgS0hSX21hdGVyaWFsc191bmxpdFxyXG4gICAgICAgIGlmIChtYXQudW5saXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbWF0LmluZGV4T2ZSZWZyYWN0aW9uICE9IHVuZGVmaW5lZCAmJiBtYXQuaW5kZXhPZlJlZnJhY3Rpb24gIT0gMS41OyAvLyAxLjUgaXMgbm9ybWF0aXZlIGRlZmF1bHQgdmFsdWUuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZnRlciBleHBvcnRpbmcgYSBtYXRlcmlhbFxyXG4gICAgICogQHBhcmFtIGNvbnRleHQgR0xURiBjb250ZXh0IG9mIHRoZSBtYXRlcmlhbFxyXG4gICAgICogQHBhcmFtIG5vZGUgZXhwb3J0ZWQgR0xURiBub2RlXHJcbiAgICAgKiBAcGFyYW0gYmFieWxvbk1hdGVyaWFsIGNvcnJlc3BvbmRpbmcgYmFieWxvbiBtYXRlcmlhbFxyXG4gICAgICogQHJldHVybnMgcHJvbWlzZSwgcmVzb2x2ZXMgd2l0aCB0aGUgbWF0ZXJpYWxcclxuICAgICAqL1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XHJcbiAgICBwdWJsaWMgcG9zdEV4cG9ydE1hdGVyaWFsQXN5bmM/KGNvbnRleHQ6IHN0cmluZywgbm9kZTogSU1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsKTogUHJvbWlzZTxJTWF0ZXJpYWw+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbCBpbnN0YW5jZW9mIFBCUk1hdGVyaWFsICYmIHRoaXMuX2lzRXh0ZW5zaW9uRW5hYmxlZChiYWJ5bG9uTWF0ZXJpYWwpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl93YXNVc2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBpb3JJbmZvOiBJS0hSTWF0ZXJpYWxzSW9yID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlvcjogYmFieWxvbk1hdGVyaWFsLmluZGV4T2ZSZWZyYWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIG5vZGUuZXh0ZW5zaW9ucyA9IG5vZGUuZXh0ZW5zaW9ucyB8fCB7fTtcclxuICAgICAgICAgICAgICAgIG5vZGUuZXh0ZW5zaW9uc1tOQU1FXSA9IGlvckluZm87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzb2x2ZShub2RlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xyXG5HTFRGRXhwb3J0ZXIuUmVnaXN0ZXJFeHRlbnNpb24oTkFNRSwgKGV4cG9ydGVyKSA9PiBuZXcgS0hSX21hdGVyaWFsc19pb3IoKSk7XHJcbiIsImltcG9ydCB0eXBlIHsgSU1hdGVyaWFsLCBJS0hSTWF0ZXJpYWxzSXJpZGVzY2VuY2UgfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB0eXBlIHsgSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyIH0gZnJvbSBcIi4uL2dsVEZFeHBvcnRlckV4dGVuc2lvblwiO1xyXG5pbXBvcnQgeyBHTFRGRXhwb3J0ZXIgfSBmcm9tIFwiLi4vZ2xURkV4cG9ydGVyXCI7XHJcbmltcG9ydCB0eXBlIHsgTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgUEJSQmFzZU1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1BCUi9wYnJCYXNlTWF0ZXJpYWxcIjtcclxuaW1wb3J0IHR5cGUgeyBCYXNlVGV4dHVyZSB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9UZXh0dXJlcy9iYXNlVGV4dHVyZVwiO1xyXG5cclxuY29uc3QgTkFNRSA9IFwiS0hSX21hdGVyaWFsc19pcmlkZXNjZW5jZVwiO1xyXG5cclxuLyoqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgY2xhc3MgS0hSX21hdGVyaWFsc19pcmlkZXNjZW5jZSBpbXBsZW1lbnRzIElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMiB7XHJcbiAgICAvKiogTmFtZSBvZiB0aGlzIGV4dGVuc2lvbiAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBOQU1FO1xyXG5cclxuICAgIC8qKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgZW5hYmxlZCAqL1xyXG4gICAgcHVibGljIGVuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgIC8qKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgcmVxdWlyZWQgKi9cclxuICAgIHB1YmxpYyByZXF1aXJlZCA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgX2V4cG9ydGVyOiBHTFRGRXhwb3J0ZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBfd2FzVXNlZCA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGV4cG9ydGVyOiBHTFRGRXhwb3J0ZXIpIHtcclxuICAgICAgICB0aGlzLl9leHBvcnRlciA9IGV4cG9ydGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge31cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgZ2V0IHdhc1VzZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dhc1VzZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBvc3RFeHBvcnRNYXRlcmlhbEFkZGl0aW9uYWxUZXh0dXJlcz8oY29udGV4dDogc3RyaW5nLCBub2RlOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBCYXNlVGV4dHVyZVtdIHtcclxuICAgICAgICBjb25zdCBhZGRpdGlvbmFsVGV4dHVyZXM6IEJhc2VUZXh0dXJlW10gPSBbXTtcclxuICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsIGluc3RhbmNlb2YgUEJSQmFzZU1hdGVyaWFsKSB7XHJcbiAgICAgICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwuaXJpZGVzY2VuY2UuaXNFbmFibGVkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsLmlyaWRlc2NlbmNlLnRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRpdGlvbmFsVGV4dHVyZXMucHVzaChiYWJ5bG9uTWF0ZXJpYWwuaXJpZGVzY2VuY2UudGV4dHVyZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsLmlyaWRlc2NlbmNlLnRoaWNrbmVzc1RleHR1cmUgJiYgYmFieWxvbk1hdGVyaWFsLmlyaWRlc2NlbmNlLnRoaWNrbmVzc1RleHR1cmUgIT09IGJhYnlsb25NYXRlcmlhbC5pcmlkZXNjZW5jZS50ZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkaXRpb25hbFRleHR1cmVzLnB1c2goYmFieWxvbk1hdGVyaWFsLmlyaWRlc2NlbmNlLnRoaWNrbmVzc1RleHR1cmUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFkZGl0aW9uYWxUZXh0dXJlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxyXG4gICAgcHVibGljIHBvc3RFeHBvcnRNYXRlcmlhbEFzeW5jPyhjb250ZXh0OiBzdHJpbmcsIG5vZGU6IElNYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCk6IFByb21pc2U8SU1hdGVyaWFsPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwgaW5zdGFuY2VvZiBQQlJCYXNlTWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgICAgIGlmICghYmFieWxvbk1hdGVyaWFsLmlyaWRlc2NlbmNlLmlzRW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUobm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX3dhc1VzZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIG5vZGUuZXh0ZW5zaW9ucyA9IG5vZGUuZXh0ZW5zaW9ucyB8fCB7fTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBpcmlkZXNjZW5jZVRleHR1cmVJbmZvID0gdGhpcy5fZXhwb3J0ZXIuX21hdGVyaWFsRXhwb3J0ZXIuZ2V0VGV4dHVyZUluZm8oYmFieWxvbk1hdGVyaWFsLmlyaWRlc2NlbmNlLnRleHR1cmUpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXJpZGVzY2VuY2VUaGlja25lc3NUZXh0dXJlSW5mbyA9IHRoaXMuX2V4cG9ydGVyLl9tYXRlcmlhbEV4cG9ydGVyLmdldFRleHR1cmVJbmZvKGJhYnlsb25NYXRlcmlhbC5pcmlkZXNjZW5jZS50aGlja25lc3NUZXh0dXJlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBpcmlkZXNjZW5jZUluZm86IElLSFJNYXRlcmlhbHNJcmlkZXNjZW5jZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBpcmlkZXNjZW5jZUZhY3RvcjogYmFieWxvbk1hdGVyaWFsLmlyaWRlc2NlbmNlLmludGVuc2l0eSxcclxuICAgICAgICAgICAgICAgICAgICBpcmlkZXNjZW5jZUlvcjogYmFieWxvbk1hdGVyaWFsLmlyaWRlc2NlbmNlLmluZGV4T2ZSZWZyYWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIGlyaWRlc2NlbmNlVGhpY2tuZXNzTWluaW11bTogYmFieWxvbk1hdGVyaWFsLmlyaWRlc2NlbmNlLm1pbmltdW1UaGlja25lc3MsXHJcbiAgICAgICAgICAgICAgICAgICAgaXJpZGVzY2VuY2VUaGlja25lc3NNYXhpbXVtOiBiYWJ5bG9uTWF0ZXJpYWwuaXJpZGVzY2VuY2UubWF4aW11bVRoaWNrbmVzcyxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaXJpZGVzY2VuY2VUZXh0dXJlOiBpcmlkZXNjZW5jZVRleHR1cmVJbmZvID8/IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICAgICBpcmlkZXNjZW5jZVRoaWNrbmVzc1RleHR1cmU6IGlyaWRlc2NlbmNlVGhpY2tuZXNzVGV4dHVyZUluZm8gPz8gdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaXJpZGVzY2VuY2VJbmZvLmlyaWRlc2NlbmNlVGV4dHVyZSAhPT0gbnVsbCB8fCBpcmlkZXNjZW5jZUluZm8uaXJpZGVzY2VuY2VUaGlja25lc3NUZXh0dXJlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXhwb3J0ZXIuX21hdGVyaWFsTmVlZHNVVnNTZXQuYWRkKGJhYnlsb25NYXRlcmlhbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbm9kZS5leHRlbnNpb25zW05BTUVdID0gaXJpZGVzY2VuY2VJbmZvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc29sdmUobm9kZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkdMVEZFeHBvcnRlci5SZWdpc3RlckV4dGVuc2lvbihOQU1FLCAoZXhwb3J0ZXIpID0+IG5ldyBLSFJfbWF0ZXJpYWxzX2lyaWRlc2NlbmNlKGV4cG9ydGVyKSk7XHJcbiIsImltcG9ydCB0eXBlIHsgSU1hdGVyaWFsLCBJS0hSTWF0ZXJpYWxzU2hlZW4gfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB0eXBlIHsgSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyIH0gZnJvbSBcIi4uL2dsVEZFeHBvcnRlckV4dGVuc2lvblwiO1xyXG5pbXBvcnQgeyBHTFRGRXhwb3J0ZXIgfSBmcm9tIFwiLi4vZ2xURkV4cG9ydGVyXCI7XHJcbmltcG9ydCB0eXBlIHsgTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgUEJSTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvUEJSL3Bick1hdGVyaWFsXCI7XHJcbmltcG9ydCB0eXBlIHsgQmFzZVRleHR1cmUgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvYmFzZVRleHR1cmVcIjtcclxuXHJcbmNvbnN0IE5BTUUgPSBcIktIUl9tYXRlcmlhbHNfc2hlZW5cIjtcclxuXHJcbi8qKlxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGNsYXNzIEtIUl9tYXRlcmlhbHNfc2hlZW4gaW1wbGVtZW50cyBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIge1xyXG4gICAgLyoqIE5hbWUgb2YgdGhpcyBleHRlbnNpb24gKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lID0gTkFNRTtcclxuXHJcbiAgICAvKiogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIGVuYWJsZWQgKi9cclxuICAgIHB1YmxpYyBlbmFibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAvKiogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIHJlcXVpcmVkICovXHJcbiAgICBwdWJsaWMgcmVxdWlyZWQgPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIF93YXNVc2VkID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBfZXhwb3J0ZXI6IEdMVEZFeHBvcnRlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihleHBvcnRlcjogR0xURkV4cG9ydGVyKSB7XHJcbiAgICAgICAgdGhpcy5fZXhwb3J0ZXIgPSBleHBvcnRlcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHt9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGdldCB3YXNVc2VkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl93YXNVc2VkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwb3N0RXhwb3J0TWF0ZXJpYWxBZGRpdGlvbmFsVGV4dHVyZXMoY29udGV4dDogc3RyaW5nLCBub2RlOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBCYXNlVGV4dHVyZVtdIHtcclxuICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsIGluc3RhbmNlb2YgUEJSTWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbC5zaGVlbi5pc0VuYWJsZWQgJiYgYmFieWxvbk1hdGVyaWFsLnNoZWVuLnRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbYmFieWxvbk1hdGVyaWFsLnNoZWVuLnRleHR1cmVdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIHBvc3RFeHBvcnRNYXRlcmlhbEFzeW5jKGNvbnRleHQ6IHN0cmluZywgbm9kZTogSU1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsKTogUHJvbWlzZTxJTWF0ZXJpYWw+IHtcclxuICAgICAgICByZXR1cm4gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbCBpbnN0YW5jZW9mIFBCUk1hdGVyaWFsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWJhYnlsb25NYXRlcmlhbC5zaGVlbi5pc0VuYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl93YXNVc2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5leHRlbnNpb25zID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLmV4dGVuc2lvbnMgPSB7fTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IHNoZWVuSW5mbzogSUtIUk1hdGVyaWFsc1NoZWVuID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNoZWVuQ29sb3JGYWN0b3I6IGJhYnlsb25NYXRlcmlhbC5zaGVlbi5jb2xvci5hc0FycmF5KCksXHJcbiAgICAgICAgICAgICAgICAgICAgc2hlZW5Sb3VnaG5lc3NGYWN0b3I6IGJhYnlsb25NYXRlcmlhbC5zaGVlbi5yb3VnaG5lc3MgPz8gMCxcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHNoZWVuSW5mby5zaGVlbkNvbG9yVGV4dHVyZSAhPT0gbnVsbCB8fCBzaGVlbkluZm8uc2hlZW5Sb3VnaG5lc3NUZXh0dXJlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXhwb3J0ZXIuX21hdGVyaWFsTmVlZHNVVnNTZXQuYWRkKGJhYnlsb25NYXRlcmlhbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbC5zaGVlbi50ZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hlZW5JbmZvLnNoZWVuQ29sb3JUZXh0dXJlID0gdGhpcy5fZXhwb3J0ZXIuX21hdGVyaWFsRXhwb3J0ZXIuZ2V0VGV4dHVyZUluZm8oYmFieWxvbk1hdGVyaWFsLnNoZWVuLnRleHR1cmUpID8/IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsLnNoZWVuLnRleHR1cmVSb3VnaG5lc3MgJiYgIWJhYnlsb25NYXRlcmlhbC5zaGVlbi51c2VSb3VnaG5lc3NGcm9tTWFpblRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBzaGVlbkluZm8uc2hlZW5Sb3VnaG5lc3NUZXh0dXJlID0gdGhpcy5fZXhwb3J0ZXIuX21hdGVyaWFsRXhwb3J0ZXIuZ2V0VGV4dHVyZUluZm8oYmFieWxvbk1hdGVyaWFsLnNoZWVuLnRleHR1cmVSb3VnaG5lc3MpID8/IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYmFieWxvbk1hdGVyaWFsLnNoZWVuLnRleHR1cmUgJiYgYmFieWxvbk1hdGVyaWFsLnNoZWVuLnVzZVJvdWdobmVzc0Zyb21NYWluVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNoZWVuSW5mby5zaGVlblJvdWdobmVzc1RleHR1cmUgPSB0aGlzLl9leHBvcnRlci5fbWF0ZXJpYWxFeHBvcnRlci5nZXRUZXh0dXJlSW5mbyhiYWJ5bG9uTWF0ZXJpYWwuc2hlZW4udGV4dHVyZSkgPz8gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIG5vZGUuZXh0ZW5zaW9uc1tOQU1FXSA9IHNoZWVuSW5mbztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXNvbHZlKG5vZGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5HTFRGRXhwb3J0ZXIuUmVnaXN0ZXJFeHRlbnNpb24oTkFNRSwgKGV4cG9ydGVyKSA9PiBuZXcgS0hSX21hdGVyaWFsc19zaGVlbihleHBvcnRlcikpO1xyXG4iLCJpbXBvcnQgdHlwZSB7IElNYXRlcmlhbCwgSUtIUk1hdGVyaWFsc1NwZWN1bGFyIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgdHlwZSB7IElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMiB9IGZyb20gXCIuLi9nbFRGRXhwb3J0ZXJFeHRlbnNpb25cIjtcclxuaW1wb3J0IHsgR0xURkV4cG9ydGVyIH0gZnJvbSBcIi4uL2dsVEZFeHBvcnRlclwiO1xyXG5pbXBvcnQgdHlwZSB7IE1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IFBCUk1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1BCUi9wYnJNYXRlcmlhbFwiO1xyXG5pbXBvcnQgdHlwZSB7IEJhc2VUZXh0dXJlIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1RleHR1cmVzL2Jhc2VUZXh0dXJlXCI7XHJcblxyXG5jb25zdCBOQU1FID0gXCJLSFJfbWF0ZXJpYWxzX3NwZWN1bGFyXCI7XHJcblxyXG4vKipcclxuICogW1NwZWNpZmljYXRpb25dKGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9ibG9iL21haW4vZXh0ZW5zaW9ucy8yLjAvS2hyb25vcy9LSFJfbWF0ZXJpYWxzX3NwZWN1bGFyL1JFQURNRS5tZClcclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGNsYXNzIEtIUl9tYXRlcmlhbHNfc3BlY3VsYXIgaW1wbGVtZW50cyBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIge1xyXG4gICAgLyoqIE5hbWUgb2YgdGhpcyBleHRlbnNpb24gKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lID0gTkFNRTtcclxuXHJcbiAgICAvKiogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIGVuYWJsZWQgKi9cclxuICAgIHB1YmxpYyBlbmFibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAvKiogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIHJlcXVpcmVkICovXHJcbiAgICBwdWJsaWMgcmVxdWlyZWQgPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIF9leHBvcnRlcjogR0xURkV4cG9ydGVyO1xyXG5cclxuICAgIHByaXZhdGUgX3dhc1VzZWQgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihleHBvcnRlcjogR0xURkV4cG9ydGVyKSB7XHJcbiAgICAgICAgdGhpcy5fZXhwb3J0ZXIgPSBleHBvcnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAvKiogRGlzcG9zZSAqL1xyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7fVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBnZXQgd2FzVXNlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fd2FzVXNlZDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFmdGVyIGV4cG9ydGluZyBhIG1hdGVyaWFsLCBkZWFsIHdpdGggdGhlIGFkZGl0aW9uYWwgdGV4dHVyZXNcclxuICAgICAqIEBwYXJhbSBjb250ZXh0IEdMVEYgY29udGV4dCBvZiB0aGUgbWF0ZXJpYWxcclxuICAgICAqIEBwYXJhbSBub2RlIGV4cG9ydGVkIEdMVEYgbm9kZVxyXG4gICAgICogQHBhcmFtIGJhYnlsb25NYXRlcmlhbCBjb3JyZXNwb25kaW5nIGJhYnlsb24gbWF0ZXJpYWxcclxuICAgICAqIEByZXR1cm5zIGFycmF5IG9mIGFkZGl0aW9uYWwgdGV4dHVyZXMgdG8gZXhwb3J0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwb3N0RXhwb3J0TWF0ZXJpYWxBZGRpdGlvbmFsVGV4dHVyZXM/KGNvbnRleHQ6IHN0cmluZywgbm9kZTogSU1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsKTogQmFzZVRleHR1cmVbXSB7XHJcbiAgICAgICAgY29uc3QgYWRkaXRpb25hbFRleHR1cmVzOiBCYXNlVGV4dHVyZVtdID0gW107XHJcblxyXG4gICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwgaW5zdGFuY2VvZiBQQlJNYXRlcmlhbCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5faXNFeHRlbnNpb25FbmFibGVkKGJhYnlsb25NYXRlcmlhbCkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwubWV0YWxsaWNSZWZsZWN0YW5jZVRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRpdGlvbmFsVGV4dHVyZXMucHVzaChiYWJ5bG9uTWF0ZXJpYWwubWV0YWxsaWNSZWZsZWN0YW5jZVRleHR1cmUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbC5yZWZsZWN0YW5jZVRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRpdGlvbmFsVGV4dHVyZXMucHVzaChiYWJ5bG9uTWF0ZXJpYWwucmVmbGVjdGFuY2VUZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBhZGRpdGlvbmFsVGV4dHVyZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBhZGRpdGlvbmFsVGV4dHVyZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfaXNFeHRlbnNpb25FbmFibGVkKG1hdDogUEJSTWF0ZXJpYWwpOiBib29sZWFuIHtcclxuICAgICAgICAvLyBUaGlzIGV4dGVuc2lvbiBtdXN0IG5vdCBiZSB1c2VkIG9uIGEgbWF0ZXJpYWwgdGhhdCBhbHNvIHVzZXMgS0hSX21hdGVyaWFsc191bmxpdFxyXG4gICAgICAgIGlmIChtYXQudW5saXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAobWF0Lm1ldGFsbGljRjBGYWN0b3IgIT0gdW5kZWZpbmVkICYmIG1hdC5tZXRhbGxpY0YwRmFjdG9yICE9IDEuMCkgfHxcclxuICAgICAgICAgICAgKG1hdC5tZXRhbGxpY1JlZmxlY3RhbmNlQ29sb3IgIT0gdW5kZWZpbmVkICYmICFtYXQubWV0YWxsaWNSZWZsZWN0YW5jZUNvbG9yLmVxdWFsc0Zsb2F0cygxLjAsIDEuMCwgMS4wKSkgfHxcclxuICAgICAgICAgICAgdGhpcy5faGFzVGV4dHVyZXNFeHRlbnNpb24obWF0KVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfaGFzVGV4dHVyZXNFeHRlbnNpb24obWF0OiBQQlJNYXRlcmlhbCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBtYXQubWV0YWxsaWNSZWZsZWN0YW5jZVRleHR1cmUgIT0gbnVsbCB8fCBtYXQucmVmbGVjdGFuY2VUZXh0dXJlICE9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZnRlciBleHBvcnRpbmcgYSBtYXRlcmlhbFxyXG4gICAgICogQHBhcmFtIGNvbnRleHQgR0xURiBjb250ZXh0IG9mIHRoZSBtYXRlcmlhbFxyXG4gICAgICogQHBhcmFtIG5vZGUgZXhwb3J0ZWQgR0xURiBub2RlXHJcbiAgICAgKiBAcGFyYW0gYmFieWxvbk1hdGVyaWFsIGNvcnJlc3BvbmRpbmcgYmFieWxvbiBtYXRlcmlhbFxyXG4gICAgICogQHJldHVybnMgcHJvbWlzZSwgcmVzb2x2ZXMgd2l0aCB0aGUgbWF0ZXJpYWxcclxuICAgICAqL1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XHJcbiAgICBwdWJsaWMgcG9zdEV4cG9ydE1hdGVyaWFsQXN5bmM/KGNvbnRleHQ6IHN0cmluZywgbm9kZTogSU1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsKTogUHJvbWlzZTxJTWF0ZXJpYWw+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbCBpbnN0YW5jZW9mIFBCUk1hdGVyaWFsICYmIHRoaXMuX2lzRXh0ZW5zaW9uRW5hYmxlZChiYWJ5bG9uTWF0ZXJpYWwpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl93YXNVc2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBub2RlLmV4dGVuc2lvbnMgPSBub2RlLmV4dGVuc2lvbnMgfHwge307XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgbWV0YWxsaWNSZWZsZWN0YW5jZVRleHR1cmUgPSB0aGlzLl9leHBvcnRlci5fbWF0ZXJpYWxFeHBvcnRlci5nZXRUZXh0dXJlSW5mbyhiYWJ5bG9uTWF0ZXJpYWwubWV0YWxsaWNSZWZsZWN0YW5jZVRleHR1cmUpID8/IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlZmxlY3RhbmNlVGV4dHVyZSA9IHRoaXMuX2V4cG9ydGVyLl9tYXRlcmlhbEV4cG9ydGVyLmdldFRleHR1cmVJbmZvKGJhYnlsb25NYXRlcmlhbC5yZWZsZWN0YW5jZVRleHR1cmUpID8/IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1ldGFsbGljRjBGYWN0b3IgPSBiYWJ5bG9uTWF0ZXJpYWwubWV0YWxsaWNGMEZhY3RvciA9PSAxLjAgPyB1bmRlZmluZWQgOiBiYWJ5bG9uTWF0ZXJpYWwubWV0YWxsaWNGMEZhY3RvcjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1ldGFsbGljUmVmbGVjdGFuY2VDb2xvciA9IGJhYnlsb25NYXRlcmlhbC5tZXRhbGxpY1JlZmxlY3RhbmNlQ29sb3IuZXF1YWxzRmxvYXRzKDEuMCwgMS4wLCAxLjApXHJcbiAgICAgICAgICAgICAgICAgICAgPyB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICA6IGJhYnlsb25NYXRlcmlhbC5tZXRhbGxpY1JlZmxlY3RhbmNlQ29sb3IuYXNBcnJheSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHNwZWN1bGFySW5mbzogSUtIUk1hdGVyaWFsc1NwZWN1bGFyID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNwZWN1bGFyRmFjdG9yOiBtZXRhbGxpY0YwRmFjdG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwZWN1bGFyVGV4dHVyZTogbWV0YWxsaWNSZWZsZWN0YW5jZVRleHR1cmUsXHJcbiAgICAgICAgICAgICAgICAgICAgc3BlY3VsYXJDb2xvckZhY3RvcjogbWV0YWxsaWNSZWZsZWN0YW5jZUNvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwZWN1bGFyQ29sb3JUZXh0dXJlOiByZWZsZWN0YW5jZVRleHR1cmUsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9oYXNUZXh0dXJlc0V4dGVuc2lvbihiYWJ5bG9uTWF0ZXJpYWwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXhwb3J0ZXIuX21hdGVyaWFsTmVlZHNVVnNTZXQuYWRkKGJhYnlsb25NYXRlcmlhbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbm9kZS5leHRlbnNpb25zW05BTUVdID0gc3BlY3VsYXJJbmZvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc29sdmUobm9kZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkdMVEZFeHBvcnRlci5SZWdpc3RlckV4dGVuc2lvbihOQU1FLCAoZXhwb3J0ZXIpID0+IG5ldyBLSFJfbWF0ZXJpYWxzX3NwZWN1bGFyKGV4cG9ydGVyKSk7XHJcbiIsImltcG9ydCB0eXBlIHsgSU1hdGVyaWFsLCBJS0hSTWF0ZXJpYWxzVHJhbnNtaXNzaW9uIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBJbWFnZU1pbWVUeXBlIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgdHlwZSB7IElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMiB9IGZyb20gXCIuLi9nbFRGRXhwb3J0ZXJFeHRlbnNpb25cIjtcclxuaW1wb3J0IHsgR0xURkV4cG9ydGVyIH0gZnJvbSBcIi4uL2dsVEZFeHBvcnRlclwiO1xyXG5pbXBvcnQgdHlwZSB7IE1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IFBCUk1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1BCUi9wYnJNYXRlcmlhbFwiO1xyXG5pbXBvcnQgdHlwZSB7IEJhc2VUZXh0dXJlIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1RleHR1cmVzL2Jhc2VUZXh0dXJlXCI7XHJcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gXCJjb3JlL01pc2MvbG9nZ2VyXCI7XHJcblxyXG5jb25zdCBOQU1FID0gXCJLSFJfbWF0ZXJpYWxzX3RyYW5zbWlzc2lvblwiO1xyXG5cclxuLyoqXHJcbiAqIFtTcGVjaWZpY2F0aW9uXShodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi9tYWluL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX21hdGVyaWFsc190cmFuc21pc3Npb24vUkVBRE1FLm1kKVxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgY2xhc3MgS0hSX21hdGVyaWFsc190cmFuc21pc3Npb24gaW1wbGVtZW50cyBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIge1xyXG4gICAgLyoqIE5hbWUgb2YgdGhpcyBleHRlbnNpb24gKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lID0gTkFNRTtcclxuXHJcbiAgICAvKiogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIGVuYWJsZWQgKi9cclxuICAgIHB1YmxpYyBlbmFibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAvKiogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIHJlcXVpcmVkICovXHJcbiAgICBwdWJsaWMgcmVxdWlyZWQgPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIF9leHBvcnRlcjogR0xURkV4cG9ydGVyO1xyXG5cclxuICAgIHByaXZhdGUgX3dhc1VzZWQgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihleHBvcnRlcjogR0xURkV4cG9ydGVyKSB7XHJcbiAgICAgICAgdGhpcy5fZXhwb3J0ZXIgPSBleHBvcnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAvKiogRGlzcG9zZSAqL1xyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7fVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBnZXQgd2FzVXNlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fd2FzVXNlZDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFmdGVyIGV4cG9ydGluZyBhIG1hdGVyaWFsLCBkZWFsIHdpdGggYWRkaXRpb25hbCB0ZXh0dXJlc1xyXG4gICAgICogQHBhcmFtIGNvbnRleHQgR0xURiBjb250ZXh0IG9mIHRoZSBtYXRlcmlhbFxyXG4gICAgICogQHBhcmFtIG5vZGUgZXhwb3J0ZWQgR0xURiBub2RlXHJcbiAgICAgKiBAcGFyYW0gYmFieWxvbk1hdGVyaWFsIGNvcnJlc3BvbmRpbmcgYmFieWxvbiBtYXRlcmlhbFxyXG4gICAgICogQHJldHVybnMgYXJyYXkgb2YgYWRkaXRpb25hbCB0ZXh0dXJlcyB0byBleHBvcnRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHBvc3RFeHBvcnRNYXRlcmlhbEFkZGl0aW9uYWxUZXh0dXJlcz8oY29udGV4dDogc3RyaW5nLCBub2RlOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBCYXNlVGV4dHVyZVtdIHtcclxuICAgICAgICBjb25zdCBhZGRpdGlvbmFsVGV4dHVyZXM6IEJhc2VUZXh0dXJlW10gPSBbXTtcclxuXHJcbiAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbCBpbnN0YW5jZW9mIFBCUk1hdGVyaWFsKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9pc0V4dGVuc2lvbkVuYWJsZWQoYmFieWxvbk1hdGVyaWFsKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbC5zdWJTdXJmYWNlLnRoaWNrbmVzc1RleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRpdGlvbmFsVGV4dHVyZXMucHVzaChiYWJ5bG9uTWF0ZXJpYWwuc3ViU3VyZmFjZS50aGlja25lc3NUZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBhZGRpdGlvbmFsVGV4dHVyZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBhZGRpdGlvbmFsVGV4dHVyZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfaXNFeHRlbnNpb25FbmFibGVkKG1hdDogUEJSTWF0ZXJpYWwpOiBib29sZWFuIHtcclxuICAgICAgICAvLyBUaGlzIGV4dGVuc2lvbiBtdXN0IG5vdCBiZSB1c2VkIG9uIGEgbWF0ZXJpYWwgdGhhdCBhbHNvIHVzZXMgS0hSX21hdGVyaWFsc191bmxpdFxyXG4gICAgICAgIGlmIChtYXQudW5saXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzdWJzID0gbWF0LnN1YlN1cmZhY2U7XHJcbiAgICAgICAgcmV0dXJuIChzdWJzLmlzUmVmcmFjdGlvbkVuYWJsZWQgJiYgc3Vicy5yZWZyYWN0aW9uSW50ZW5zaXR5ICE9IHVuZGVmaW5lZCAmJiBzdWJzLnJlZnJhY3Rpb25JbnRlbnNpdHkgIT0gMCkgfHwgdGhpcy5faGFzVGV4dHVyZXNFeHRlbnNpb24obWF0KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9oYXNUZXh0dXJlc0V4dGVuc2lvbihtYXQ6IFBCUk1hdGVyaWFsKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIG1hdC5zdWJTdXJmYWNlLnJlZnJhY3Rpb25JbnRlbnNpdHlUZXh0dXJlICE9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZnRlciBleHBvcnRpbmcgYSBtYXRlcmlhbFxyXG4gICAgICogQHBhcmFtIGNvbnRleHQgR0xURiBjb250ZXh0IG9mIHRoZSBtYXRlcmlhbFxyXG4gICAgICogQHBhcmFtIG5vZGUgZXhwb3J0ZWQgR0xURiBub2RlXHJcbiAgICAgKiBAcGFyYW0gYmFieWxvbk1hdGVyaWFsIGNvcnJlc3BvbmRpbmcgYmFieWxvbiBtYXRlcmlhbFxyXG4gICAgICogQHJldHVybnMgdHJ1ZSBpZiBzdWNjZXNzZnVsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhc3luYyBwb3N0RXhwb3J0TWF0ZXJpYWxBc3luYz8oY29udGV4dDogc3RyaW5nLCBub2RlOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBQcm9taXNlPElNYXRlcmlhbD4ge1xyXG4gICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwgaW5zdGFuY2VvZiBQQlJNYXRlcmlhbCAmJiB0aGlzLl9pc0V4dGVuc2lvbkVuYWJsZWQoYmFieWxvbk1hdGVyaWFsKSkge1xyXG4gICAgICAgICAgICB0aGlzLl93YXNVc2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHN1YlN1cmZhY2UgPSBiYWJ5bG9uTWF0ZXJpYWwuc3ViU3VyZmFjZTtcclxuICAgICAgICAgICAgY29uc3QgdHJhbnNtaXNzaW9uRmFjdG9yID0gc3ViU3VyZmFjZS5yZWZyYWN0aW9uSW50ZW5zaXR5ID09PSAwID8gdW5kZWZpbmVkIDogc3ViU3VyZmFjZS5yZWZyYWN0aW9uSW50ZW5zaXR5O1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgdm9sdW1lSW5mbzogSUtIUk1hdGVyaWFsc1RyYW5zbWlzc2lvbiA9IHtcclxuICAgICAgICAgICAgICAgIHRyYW5zbWlzc2lvbkZhY3RvcjogdHJhbnNtaXNzaW9uRmFjdG9yLFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2hhc1RleHR1cmVzRXh0ZW5zaW9uKGJhYnlsb25NYXRlcmlhbCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2V4cG9ydGVyLl9tYXRlcmlhbE5lZWRzVVZzU2V0LmFkZChiYWJ5bG9uTWF0ZXJpYWwpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoc3ViU3VyZmFjZS5yZWZyYWN0aW9uSW50ZW5zaXR5VGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN1YlN1cmZhY2UudXNlR2x0ZlN0eWxlVGV4dHVyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0cmFuc21pc3Npb25UZXh0dXJlID0gYXdhaXQgdGhpcy5fZXhwb3J0ZXIuX21hdGVyaWFsRXhwb3J0ZXIuZXhwb3J0VGV4dHVyZUFzeW5jKHN1YlN1cmZhY2UucmVmcmFjdGlvbkludGVuc2l0eVRleHR1cmUsIEltYWdlTWltZVR5cGUuUE5HKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHJhbnNtaXNzaW9uVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2b2x1bWVJbmZvLnRyYW5zbWlzc2lvblRleHR1cmUgPSB0cmFuc21pc3Npb25UZXh0dXJlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nZ2VyLldhcm4oYCR7Y29udGV4dH06IEV4cG9ydGluZyBhIHN1YnN1cmZhY2UgcmVmcmFjdGlvbiBpbnRlbnNpdHkgdGV4dHVyZSB3aXRob3V0IFxcYHVzZUdsdGZTdHlsZVRleHR1cmVzXFxgIGlzIG5vdCBzdXBwb3J0ZWRgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbm9kZS5leHRlbnNpb25zIHx8PSB7fTtcclxuICAgICAgICAgICAgbm9kZS5leHRlbnNpb25zW05BTUVdID0gdm9sdW1lSW5mbztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgfVxyXG59XHJcblxyXG5HTFRGRXhwb3J0ZXIuUmVnaXN0ZXJFeHRlbnNpb24oTkFNRSwgKGV4cG9ydGVyKSA9PiBuZXcgS0hSX21hdGVyaWFsc190cmFuc21pc3Npb24oZXhwb3J0ZXIpKTtcclxuIiwiaW1wb3J0IHR5cGUgeyBJTWF0ZXJpYWwgfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB0eXBlIHsgSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyIH0gZnJvbSBcIi4uL2dsVEZFeHBvcnRlckV4dGVuc2lvblwiO1xyXG5pbXBvcnQgeyBHTFRGRXhwb3J0ZXIgfSBmcm9tIFwiLi4vZ2xURkV4cG9ydGVyXCI7XHJcbmltcG9ydCB0eXBlIHsgTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgUEJSTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvUEJSL3Bick1hdGVyaWFsXCI7XHJcbmltcG9ydCB7IFN0YW5kYXJkTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvc3RhbmRhcmRNYXRlcmlhbFwiO1xyXG5cclxuY29uc3QgTkFNRSA9IFwiS0hSX21hdGVyaWFsc191bmxpdFwiO1xyXG5cclxuLyoqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgY2xhc3MgS0hSX21hdGVyaWFsc191bmxpdCBpbXBsZW1lbnRzIElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMiB7XHJcbiAgICAvKiogTmFtZSBvZiB0aGlzIGV4dGVuc2lvbiAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBOQU1FO1xyXG5cclxuICAgIC8qKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgZW5hYmxlZCAqL1xyXG4gICAgcHVibGljIGVuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgIC8qKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgcmVxdWlyZWQgKi9cclxuICAgIHB1YmxpYyByZXF1aXJlZCA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgX3dhc1VzZWQgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGdldCB3YXNVc2VkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl93YXNVc2VkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge31cclxuXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcclxuICAgIHB1YmxpYyBwb3N0RXhwb3J0TWF0ZXJpYWxBc3luYz8oY29udGV4dDogc3RyaW5nLCBub2RlOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBQcm9taXNlPElNYXRlcmlhbD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdW5saXRNYXRlcmlhbCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbCBpbnN0YW5jZW9mIFBCUk1hdGVyaWFsKSB7XHJcbiAgICAgICAgICAgICAgICB1bmxpdE1hdGVyaWFsID0gYmFieWxvbk1hdGVyaWFsLnVubGl0O1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGJhYnlsb25NYXRlcmlhbCBpbnN0YW5jZW9mIFN0YW5kYXJkTWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgICAgIHVubGl0TWF0ZXJpYWwgPSBiYWJ5bG9uTWF0ZXJpYWwuZGlzYWJsZUxpZ2h0aW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodW5saXRNYXRlcmlhbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fd2FzVXNlZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG5vZGUuZXh0ZW5zaW9ucyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5leHRlbnNpb25zID0ge307XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbm9kZS5leHRlbnNpb25zW05BTUVdID0ge307XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJlc29sdmUobm9kZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkdMVEZFeHBvcnRlci5SZWdpc3RlckV4dGVuc2lvbihOQU1FLCAoKSA9PiBuZXcgS0hSX21hdGVyaWFsc191bmxpdCgpKTtcclxuIiwiaW1wb3J0IHR5cGUgeyBJTWF0ZXJpYWwsIElLSFJNYXRlcmlhbHNWb2x1bWUgfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB0eXBlIHsgSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyIH0gZnJvbSBcIi4uL2dsVEZFeHBvcnRlckV4dGVuc2lvblwiO1xyXG5pbXBvcnQgeyBHTFRGRXhwb3J0ZXIgfSBmcm9tIFwiLi4vZ2xURkV4cG9ydGVyXCI7XHJcbmltcG9ydCB0eXBlIHsgTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgUEJSTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvUEJSL3Bick1hdGVyaWFsXCI7XHJcbmltcG9ydCB0eXBlIHsgQmFzZVRleHR1cmUgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvYmFzZVRleHR1cmVcIjtcclxuaW1wb3J0IHsgQ29sb3IzIH0gZnJvbSBcImNvcmUvTWF0aHMvbWF0aC5jb2xvclwiO1xyXG5cclxuY29uc3QgTkFNRSA9IFwiS0hSX21hdGVyaWFsc192b2x1bWVcIjtcclxuXHJcbi8qKlxyXG4gKiBbU3BlY2lmaWNhdGlvbl0oaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFpbi9leHRlbnNpb25zLzIuMC9LaHJvbm9zL0tIUl9tYXRlcmlhbHNfdm9sdW1lL1JFQURNRS5tZClcclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGNsYXNzIEtIUl9tYXRlcmlhbHNfdm9sdW1lIGltcGxlbWVudHMgSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyIHtcclxuICAgIC8qKiBOYW1lIG9mIHRoaXMgZXh0ZW5zaW9uICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZSA9IE5BTUU7XHJcblxyXG4gICAgLyoqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyBlbmFibGVkICovXHJcbiAgICBwdWJsaWMgZW5hYmxlZCA9IHRydWU7XHJcblxyXG4gICAgLyoqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyByZXF1aXJlZCAqL1xyXG4gICAgcHVibGljIHJlcXVpcmVkID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBfZXhwb3J0ZXI6IEdMVEZFeHBvcnRlcjtcclxuXHJcbiAgICBwcml2YXRlIF93YXNVc2VkID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZXhwb3J0ZXI6IEdMVEZFeHBvcnRlcikge1xyXG4gICAgICAgIHRoaXMuX2V4cG9ydGVyID0gZXhwb3J0ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7fVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBnZXQgd2FzVXNlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fd2FzVXNlZDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFmdGVyIGV4cG9ydGluZyBhIG1hdGVyaWFsLCBkZWFsIHdpdGggYWRkaXRpb25hbCB0ZXh0dXJlc1xyXG4gICAgICogQHBhcmFtIGNvbnRleHQgR0xURiBjb250ZXh0IG9mIHRoZSBtYXRlcmlhbFxyXG4gICAgICogQHBhcmFtIG5vZGUgZXhwb3J0ZWQgR0xURiBub2RlXHJcbiAgICAgKiBAcGFyYW0gYmFieWxvbk1hdGVyaWFsIGNvcnJlc3BvbmRpbmcgYmFieWxvbiBtYXRlcmlhbFxyXG4gICAgICogQHJldHVybnMgYXJyYXkgb2YgYWRkaXRpb25hbCB0ZXh0dXJlcyB0byBleHBvcnRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHBvc3RFeHBvcnRNYXRlcmlhbEFkZGl0aW9uYWxUZXh0dXJlcz8oY29udGV4dDogc3RyaW5nLCBub2RlOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBCYXNlVGV4dHVyZVtdIHtcclxuICAgICAgICBjb25zdCBhZGRpdGlvbmFsVGV4dHVyZXM6IEJhc2VUZXh0dXJlW10gPSBbXTtcclxuXHJcbiAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbCBpbnN0YW5jZW9mIFBCUk1hdGVyaWFsKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9pc0V4dGVuc2lvbkVuYWJsZWQoYmFieWxvbk1hdGVyaWFsKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbC5zdWJTdXJmYWNlLnRoaWNrbmVzc1RleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRpdGlvbmFsVGV4dHVyZXMucHVzaChiYWJ5bG9uTWF0ZXJpYWwuc3ViU3VyZmFjZS50aGlja25lc3NUZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBhZGRpdGlvbmFsVGV4dHVyZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBhZGRpdGlvbmFsVGV4dHVyZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfaXNFeHRlbnNpb25FbmFibGVkKG1hdDogUEJSTWF0ZXJpYWwpOiBib29sZWFuIHtcclxuICAgICAgICAvLyBUaGlzIGV4dGVuc2lvbiBtdXN0IG5vdCBiZSB1c2VkIG9uIGEgbWF0ZXJpYWwgdGhhdCBhbHNvIHVzZXMgS0hSX21hdGVyaWFsc191bmxpdFxyXG4gICAgICAgIGlmIChtYXQudW5saXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzdWJzID0gbWF0LnN1YlN1cmZhY2U7XHJcbiAgICAgICAgLy8gdGhpcyBleHRlbnNpb24gcmVxdWlyZXMgZWl0aGVyIHRoZSBLSFJfbWF0ZXJpYWxzX3RyYW5zbWlzc2lvbiBvciBLSFJfbWF0ZXJpYWxzX2RpZmZ1c2VfdHJhbnNtaXNzaW9uIGV4dGVuc2lvbnMuXHJcbiAgICAgICAgaWYgKCFzdWJzLmlzUmVmcmFjdGlvbkVuYWJsZWQgJiYgIXN1YnMuaXNUcmFuc2x1Y2VuY3lFbmFibGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgKHN1YnMubWF4aW11bVRoaWNrbmVzcyAhPSB1bmRlZmluZWQgJiYgc3Vicy5tYXhpbXVtVGhpY2tuZXNzICE9IDApIHx8XHJcbiAgICAgICAgICAgIChzdWJzLnRpbnRDb2xvckF0RGlzdGFuY2UgIT0gdW5kZWZpbmVkICYmIHN1YnMudGludENvbG9yQXREaXN0YW5jZSAhPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFkpIHx8XHJcbiAgICAgICAgICAgIChzdWJzLnRpbnRDb2xvciAhPSB1bmRlZmluZWQgJiYgc3Vicy50aW50Q29sb3IgIT0gQ29sb3IzLldoaXRlKCkpIHx8XHJcbiAgICAgICAgICAgIHRoaXMuX2hhc1RleHR1cmVzRXh0ZW5zaW9uKG1hdClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2hhc1RleHR1cmVzRXh0ZW5zaW9uKG1hdDogUEJSTWF0ZXJpYWwpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gbWF0LnN1YlN1cmZhY2UudGhpY2tuZXNzVGV4dHVyZSAhPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWZ0ZXIgZXhwb3J0aW5nIGEgbWF0ZXJpYWxcclxuICAgICAqIEBwYXJhbSBjb250ZXh0IEdMVEYgY29udGV4dCBvZiB0aGUgbWF0ZXJpYWxcclxuICAgICAqIEBwYXJhbSBub2RlIGV4cG9ydGVkIEdMVEYgbm9kZVxyXG4gICAgICogQHBhcmFtIGJhYnlsb25NYXRlcmlhbCBjb3JyZXNwb25kaW5nIGJhYnlsb24gbWF0ZXJpYWxcclxuICAgICAqIEByZXR1cm5zIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSB1cGRhdGVkIG5vZGVcclxuICAgICAqL1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XHJcbiAgICBwdWJsaWMgcG9zdEV4cG9ydE1hdGVyaWFsQXN5bmM/KGNvbnRleHQ6IHN0cmluZywgbm9kZTogSU1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsKTogUHJvbWlzZTxJTWF0ZXJpYWw+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbCBpbnN0YW5jZW9mIFBCUk1hdGVyaWFsICYmIHRoaXMuX2lzRXh0ZW5zaW9uRW5hYmxlZChiYWJ5bG9uTWF0ZXJpYWwpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl93YXNVc2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdWJzID0gYmFieWxvbk1hdGVyaWFsLnN1YlN1cmZhY2U7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0aGlja25lc3NGYWN0b3IgPSBzdWJzLm1heGltdW1UaGlja25lc3MgPT0gMCA/IHVuZGVmaW5lZCA6IHN1YnMubWF4aW11bVRoaWNrbmVzcztcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRoaWNrbmVzc1RleHR1cmUgPSB0aGlzLl9leHBvcnRlci5fbWF0ZXJpYWxFeHBvcnRlci5nZXRUZXh0dXJlSW5mbyhzdWJzLnRoaWNrbmVzc1RleHR1cmUpID8/IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGF0dGVudWF0aW9uRGlzdGFuY2UgPSBzdWJzLnRpbnRDb2xvckF0RGlzdGFuY2UgPT0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZID8gdW5kZWZpbmVkIDogc3Vicy50aW50Q29sb3JBdERpc3RhbmNlO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXR0ZW51YXRpb25Db2xvciA9IHN1YnMudGludENvbG9yLmVxdWFsc0Zsb2F0cygxLjAsIDEuMCwgMS4wKSA/IHVuZGVmaW5lZCA6IHN1YnMudGludENvbG9yLmFzQXJyYXkoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCB2b2x1bWVJbmZvOiBJS0hSTWF0ZXJpYWxzVm9sdW1lID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaWNrbmVzc0ZhY3RvcjogdGhpY2tuZXNzRmFjdG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaWNrbmVzc1RleHR1cmU6IHRoaWNrbmVzc1RleHR1cmUsXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0ZW51YXRpb25EaXN0YW5jZTogYXR0ZW51YXRpb25EaXN0YW5jZSxcclxuICAgICAgICAgICAgICAgICAgICBhdHRlbnVhdGlvbkNvbG9yOiBhdHRlbnVhdGlvbkNvbG9yLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5faGFzVGV4dHVyZXNFeHRlbnNpb24oYmFieWxvbk1hdGVyaWFsKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2V4cG9ydGVyLl9tYXRlcmlhbE5lZWRzVVZzU2V0LmFkZChiYWJ5bG9uTWF0ZXJpYWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIG5vZGUuZXh0ZW5zaW9ucyA9IG5vZGUuZXh0ZW5zaW9ucyB8fCB7fTtcclxuICAgICAgICAgICAgICAgIG5vZGUuZXh0ZW5zaW9uc1tOQU1FXSA9IHZvbHVtZUluZm87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzb2x2ZShub2RlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuR0xURkV4cG9ydGVyLlJlZ2lzdGVyRXh0ZW5zaW9uKE5BTUUsIChleHBvcnRlcikgPT4gbmV3IEtIUl9tYXRlcmlhbHNfdm9sdW1lKGV4cG9ydGVyKSk7XHJcbiIsImltcG9ydCB0eXBlIHsgSVRleHR1cmVJbmZvLCBJS0hSVGV4dHVyZVRyYW5zZm9ybSB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgVG9vbHMgfSBmcm9tIFwiY29yZS9NaXNjL3Rvb2xzXCI7XHJcbmltcG9ydCB0eXBlIHsgVGV4dHVyZSB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9UZXh0dXJlcy90ZXh0dXJlXCI7XHJcbmltcG9ydCB0eXBlIHsgSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyIH0gZnJvbSBcIi4uL2dsVEZFeHBvcnRlckV4dGVuc2lvblwiO1xyXG5pbXBvcnQgeyBHTFRGRXhwb3J0ZXIgfSBmcm9tIFwiLi4vZ2xURkV4cG9ydGVyXCI7XHJcblxyXG5jb25zdCBOQU1FID0gXCJLSFJfdGV4dHVyZV90cmFuc2Zvcm1cIjtcclxuXHJcbi8qKlxyXG4gKiBDb21wdXRlcyB0aGUgYWRqdXN0ZWQgb2Zmc2V0IGZvciBhIHJvdGF0aW9uIGNlbnRlcmVkIGFib3V0IHRoZSBvcmlnaW4uXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuZnVuY3Rpb24gQWRqdXN0T2Zmc2V0Rm9yUm90YXRpb25DZW50ZXIoYmFieWxvblRleHR1cmU6IFRleHR1cmUpOiBbbnVtYmVyLCBudW1iZXJdIHtcclxuICAgIGNvbnN0IHsgdU9mZnNldCwgdk9mZnNldCwgdVJvdGF0aW9uQ2VudGVyLCB2Um90YXRpb25DZW50ZXIsIHVTY2FsZSwgdlNjYWxlLCB3QW5nIH0gPSBiYWJ5bG9uVGV4dHVyZTtcclxuICAgIGNvbnN0IGNvc0FuZ2xlID0gTWF0aC5jb3Mod0FuZyk7XHJcbiAgICBjb25zdCBzaW5BbmdsZSA9IE1hdGguc2luKHdBbmcpO1xyXG4gICAgY29uc3Qgc2NhbGVkVVJvdGF0aW9uQ2VudGVyID0gdVJvdGF0aW9uQ2VudGVyICogdVNjYWxlO1xyXG4gICAgY29uc3Qgc2NhbGVkVlJvdGF0aW9uQ2VudGVyID0gdlJvdGF0aW9uQ2VudGVyICogdlNjYWxlO1xyXG4gICAgY29uc3QgZGVsdGFVID0gc2NhbGVkVVJvdGF0aW9uQ2VudGVyICogKDEgLSBjb3NBbmdsZSkgKyBzY2FsZWRWUm90YXRpb25DZW50ZXIgKiBzaW5BbmdsZTtcclxuICAgIGNvbnN0IGRlbHRhViA9IHNjYWxlZFZSb3RhdGlvbkNlbnRlciAqICgxIC0gY29zQW5nbGUpIC0gc2NhbGVkVVJvdGF0aW9uQ2VudGVyICogc2luQW5nbGU7XHJcbiAgICByZXR1cm4gW3VPZmZzZXQgKyBkZWx0YVUsIHZPZmZzZXQgKyBkZWx0YVZdO1xyXG59XHJcblxyXG4vKipcclxuICogQGludGVybmFsXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBjbGFzcyBLSFJfdGV4dHVyZV90cmFuc2Zvcm0gaW1wbGVtZW50cyBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIge1xyXG4gICAgLyoqIE5hbWUgb2YgdGhpcyBleHRlbnNpb24gKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lID0gTkFNRTtcclxuXHJcbiAgICAvKiogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIGVuYWJsZWQgKi9cclxuICAgIHB1YmxpYyBlbmFibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAvKiogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIHJlcXVpcmVkICovXHJcbiAgICBwdWJsaWMgcmVxdWlyZWQgPSBmYWxzZTtcclxuXHJcbiAgICAvKiogUmVmZXJlbmNlIHRvIHRoZSBnbFRGIGV4cG9ydGVyICovXHJcbiAgICBwcml2YXRlIF93YXNVc2VkID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge31cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgZ2V0IHdhc1VzZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dhc1VzZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBvc3RFeHBvcnRUZXh0dXJlPyhjb250ZXh0OiBzdHJpbmcsIHRleHR1cmVJbmZvOiBJVGV4dHVyZUluZm8sIGJhYnlsb25UZXh0dXJlOiBUZXh0dXJlKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgc2NlbmUgPSBiYWJ5bG9uVGV4dHVyZS5nZXRTY2VuZSgpO1xyXG4gICAgICAgIGlmICghc2NlbmUpIHtcclxuICAgICAgICAgICAgVG9vbHMuV2FybihgJHtjb250ZXh0fTogXCJzY2VuZVwiIGlzIG5vdCBkZWZpbmVkIGZvciBCYWJ5bG9uIHRleHR1cmUgJHtiYWJ5bG9uVGV4dHVyZS5uYW1lfSFgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgICogVGhlIEtIUl90ZXh0dXJlX3RyYW5zZm9ybSBzY2hlbWEgb25seSBzdXBwb3J0cyB3IHJvdGF0aW9uIGFyb3VuZCB0aGUgb3JpZ2luLlxyXG4gICAgICAgICAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYWluL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX3RleHR1cmVfdHJhbnNmb3JtI2dsdGYtc2NoZW1hLXVwZGF0ZXMuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgaWYgKGJhYnlsb25UZXh0dXJlLnVBbmcgIT09IDAgfHwgYmFieWxvblRleHR1cmUudkFuZyAhPT0gMCkge1xyXG4gICAgICAgICAgICBUb29scy5XYXJuKGAke2NvbnRleHR9OiBUZXh0dXJlICR7YmFieWxvblRleHR1cmUubmFtZX0gd2l0aCByb3RhdGlvbiBpbiB0aGUgdSBvciB2IGF4aXMgaXMgbm90IHN1cHBvcnRlZCBpbiBnbFRGLmApO1xyXG4gICAgICAgICAgICAvLyBVc3VhbGx5LCB3ZSdkIGFsd2F5cyBlYXJseSByZXR1cm4gaGVyZSBpZiB0aGUgdGV4dHVyZSB1c2VzIGFuIHVuc3VwcG9ydGVkIGNvbWJpbmF0aW9uIG9mIHRyYW5zZm9ybSBwcm9wZXJ0aWVzLFxyXG4gICAgICAgICAgICAvLyBidXQgd2UncmUgbWFraW5nIGFuIGV4Y2VwdGlvbiBoZXJlIHRvIG1haW50YWluIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxyXG4gICAgICAgICAgICBpZiAoYmFieWxvblRleHR1cmUudVJvdGF0aW9uQ2VudGVyICE9PSAwIHx8IGJhYnlsb25UZXh0dXJlLnZSb3RhdGlvbkNlbnRlciAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB0ZXh0dXJlVHJhbnNmb3JtOiBJS0hSVGV4dHVyZVRyYW5zZm9ybSA9IHt9O1xyXG4gICAgICAgIGxldCB0cmFuc2Zvcm1Jc1JlcXVpcmVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmIChiYWJ5bG9uVGV4dHVyZS51T2Zmc2V0ICE9PSAwIHx8IGJhYnlsb25UZXh0dXJlLnZPZmZzZXQgIT09IDApIHtcclxuICAgICAgICAgICAgdGV4dHVyZVRyYW5zZm9ybS5vZmZzZXQgPSBbYmFieWxvblRleHR1cmUudU9mZnNldCwgYmFieWxvblRleHR1cmUudk9mZnNldF07XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybUlzUmVxdWlyZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGJhYnlsb25UZXh0dXJlLnVTY2FsZSAhPT0gMSB8fCBiYWJ5bG9uVGV4dHVyZS52U2NhbGUgIT09IDEpIHtcclxuICAgICAgICAgICAgdGV4dHVyZVRyYW5zZm9ybS5zY2FsZSA9IFtiYWJ5bG9uVGV4dHVyZS51U2NhbGUsIGJhYnlsb25UZXh0dXJlLnZTY2FsZV07XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybUlzUmVxdWlyZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGJhYnlsb25UZXh0dXJlLndBbmcgIT09IDApIHtcclxuICAgICAgICAgICAgaWYgKGJhYnlsb25UZXh0dXJlLnVSb3RhdGlvbkNlbnRlciAhPT0gMCB8fCBiYWJ5bG9uVGV4dHVyZS52Um90YXRpb25DZW50ZXIgIT09IDApIHtcclxuICAgICAgICAgICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbXJkb29iL3RocmVlLmpzL2lzc3Vlcy8xNTgzMSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gICAgICAgICAgICAgICAgaWYgKGJhYnlsb25UZXh0dXJlLmhvbW9nZW5lb3VzUm90YXRpb25JblVWVHJhbnNmb3JtICYmIGJhYnlsb25UZXh0dXJlLnVTY2FsZSAhPT0gYmFieWxvblRleHR1cmUudlNjYWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgVG9vbHMuV2FybihcclxuICAgICAgICAgICAgICAgICAgICAgICAgYCR7Y29udGV4dH06IFRleHR1cmUgJHtiYWJ5bG9uVGV4dHVyZS5uYW1lfSB3aXRoIGhvbW9nZW5vdXNSb3RhdGlvbkluVVZUcmFuc2Zvcm0sIG5vbi11bmlmb3JtIHNjYWxpbmcsIGFuZCBub24temVybyByb3RhdGlvbiBjYW5ub3QgYmUgZXhwb3J0ZWQgd2l0aCAke05BTUV9LmBcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFRvb2xzLldhcm4oYCR7Y29udGV4dH06IFRleHR1cmUgJHtiYWJ5bG9uVGV4dHVyZS5uYW1lfSB3aXRoIG5vbi1vcmlnaW4gcm90YXRpb24gY2VudGVyIHdpbGwgYmUgZXhwb3J0ZWQgdXNpbmcgYW4gYWRqdXN0ZWQgb2Zmc2V0IHdpdGggJHtOQU1FfS5gKTtcclxuICAgICAgICAgICAgICAgIHRleHR1cmVUcmFuc2Zvcm0ub2Zmc2V0ID0gQWRqdXN0T2Zmc2V0Rm9yUm90YXRpb25DZW50ZXIoYmFieWxvblRleHR1cmUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRleHR1cmVUcmFuc2Zvcm0ucm90YXRpb24gPSAtYmFieWxvblRleHR1cmUud0FuZztcclxuICAgICAgICAgICAgdHJhbnNmb3JtSXNSZXF1aXJlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYmFieWxvblRleHR1cmUuY29vcmRpbmF0ZXNJbmRleCAhPT0gMCkge1xyXG4gICAgICAgICAgICB0ZXh0dXJlVHJhbnNmb3JtLnRleENvb3JkID0gYmFieWxvblRleHR1cmUuY29vcmRpbmF0ZXNJbmRleDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtSXNSZXF1aXJlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRyYW5zZm9ybUlzUmVxdWlyZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fd2FzVXNlZCA9IHRydWU7XHJcbiAgICAgICAgaWYgKCF0ZXh0dXJlSW5mby5leHRlbnNpb25zKSB7XHJcbiAgICAgICAgICAgIHRleHR1cmVJbmZvLmV4dGVuc2lvbnMgPSB7fTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGV4dHVyZUluZm8uZXh0ZW5zaW9uc1tOQU1FXSA9IHRleHR1cmVUcmFuc2Zvcm07XHJcbiAgICB9XHJcbn1cclxuXHJcbkdMVEZFeHBvcnRlci5SZWdpc3RlckV4dGVuc2lvbihOQU1FLCAoKSA9PiBuZXcgS0hSX3RleHR1cmVfdHJhbnNmb3JtKCkpO1xyXG4iLCJleHBvcnQgKiBmcm9tIFwiLi9FWFRfbWVzaF9ncHVfaW5zdGFuY2luZ1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9LSFJfZHJhY29fbWVzaF9jb21wcmVzc2lvblwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9LSFJfbGlnaHRzX3B1bmN0dWFsXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL0tIUl9tYXRlcmlhbHNfYW5pc290cm9weVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9LSFJfbWF0ZXJpYWxzX2NsZWFyY29hdFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9LSFJfbWF0ZXJpYWxzX2RpZmZ1c2VfdHJhbnNtaXNzaW9uXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL0tIUl9tYXRlcmlhbHNfZGlzcGVyc2lvblwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9LSFJfbWF0ZXJpYWxzX2VtaXNzaXZlX3N0cmVuZ3RoXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL0tIUl9tYXRlcmlhbHNfaW9yXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL0tIUl9tYXRlcmlhbHNfaXJpZGVzY2VuY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vS0hSX21hdGVyaWFsc19zaGVlblwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9LSFJfbWF0ZXJpYWxzX3NwZWN1bGFyXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL0tIUl9tYXRlcmlhbHNfdHJhbnNtaXNzaW9uXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL0tIUl9tYXRlcmlhbHNfdW5saXRcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vS0hSX21hdGVyaWFsc192b2x1bWVcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vRVhUX21hdGVyaWFsc19kaWZmdXNlX3JvdWdobmVzc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9LSFJfdGV4dHVyZV90cmFuc2Zvcm1cIjtcclxuIiwiaW1wb3J0IHR5cGUgeyBUeXBlZEFycmF5IH0gZnJvbSBcImNvcmUvdHlwZXNcIjtcbmltcG9ydCB0eXBlIHsgQWNjZXNzb3JDb21wb25lbnRUeXBlLCBBY2Nlc3NvclR5cGUsIElBY2Nlc3NvciwgSUJ1ZmZlclZpZXcgfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBEYXRhV3JpdGVyIH0gZnJvbSBcIi4vZGF0YVdyaXRlclwiO1xuXG50eXBlIFR5cGVkQXJyYXlGb3JnbFRGID0gRXhjbHVkZTxUeXBlZEFycmF5LCBGbG9hdDY0QXJyYXkgfCBCaWdJbnQ2NEFycmF5IHwgQmlnVWludDY0QXJyYXk+O1xuXG5pbnRlcmZhY2UgSVByb3BlcnR5V2l0aEJ1ZmZlclZpZXcge1xuICAgIGJ1ZmZlclZpZXc/OiBudW1iZXI7XG59XG5cbmZ1bmN0aW9uIEdldEhpZ2hlc3RCeXRlQWxpZ25tZW50KGJ5dGVMZW5ndGg6IG51bWJlcik6IG51bWJlciB7XG4gICAgaWYgKGJ5dGVMZW5ndGggJSA0ID09PSAwKSB7XG4gICAgICAgIHJldHVybiA0O1xuICAgIH1cbiAgICBpZiAoYnl0ZUxlbmd0aCAlIDIgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIDI7XG4gICAgfVxuICAgIHJldHVybiAxO1xufVxuXG4vKipcbiAqIFV0aWxpdHkgY2xhc3MgdG8gY2VudHJhbGl6ZSB0aGUgbWFuYWdlbWVudCBvZiBiaW5hcnkgZGF0YSwgYnVmZmVyVmlld3MsIGFuZCB0aGUgb2JqZWN0cyB0aGF0IHJlZmVyZW5jZSB0aGVtLlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBjbGFzcyBCdWZmZXJNYW5hZ2VyIHtcbiAgICAvKipcbiAgICAgKiBNYXBzIGEgYnVmZmVyVmlldyB0byBpdHMgZGF0YVxuICAgICAqL1xuICAgIHByaXZhdGUgX2J1ZmZlclZpZXdUb0RhdGE6IE1hcDxJQnVmZmVyVmlldywgVHlwZWRBcnJheUZvcmdsVEY+ID0gbmV3IE1hcDxJQnVmZmVyVmlldywgVHlwZWRBcnJheUZvcmdsVEY+KCk7XG5cbiAgICAvKipcbiAgICAgKiBNYXBzIGEgYnVmZmVyVmlldyB0byBnbFRGIG9iamVjdHMgdGhhdCByZWZlcmVuY2UgaXQgdmlhIGEgXCJidWZmZXJWaWV3XCIgcHJvcGVydHkgKGUuZy4gYWNjZXNzb3JzLCBpbWFnZXMpXG4gICAgICovXG4gICAgcHJpdmF0ZSBfYnVmZmVyVmlld1RvUHJvcGVydGllczogTWFwPElCdWZmZXJWaWV3LCBJUHJvcGVydHlXaXRoQnVmZmVyVmlld1tdPiA9IG5ldyBNYXA8SUJ1ZmZlclZpZXcsIElQcm9wZXJ0eVdpdGhCdWZmZXJWaWV3W10+KCk7XG5cbiAgICAvKipcbiAgICAgKiBNYXBzIGFuIGFjY2Vzc29yIHRvIGl0cyBidWZmZXJWaWV3XG4gICAgICovXG4gICAgcHJpdmF0ZSBfYWNjZXNzb3JUb0J1ZmZlclZpZXc6IE1hcDxJQWNjZXNzb3IsIElCdWZmZXJWaWV3PiA9IG5ldyBNYXA8SUFjY2Vzc29yLCBJQnVmZmVyVmlldz4oKTtcblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlcyBhIGJpbmFyeSBidWZmZXIgZnJvbSB0aGUgc3RvcmVkIGJ1ZmZlclZpZXdzLiBBbHNvIHBvcHVsYXRlcyB0aGUgYnVmZmVyVmlld3MgbGlzdC5cbiAgICAgKiBAcGFyYW0gYnVmZmVyVmlld3MgVGhlIGxpc3Qgb2YgYnVmZmVyVmlld3MgdG8gYmUgcG9wdWxhdGVkIHdoaWxlIHdyaXRpbmcgdGhlIGJpbmFyeVxuICAgICAqIEByZXR1cm5zIFRoZSBiaW5hcnkgYnVmZmVyXG4gICAgICovXG4gICAgcHVibGljIGdlbmVyYXRlQmluYXJ5KGJ1ZmZlclZpZXdzOiBJQnVmZmVyVmlld1tdKTogVWludDhBcnJheSB7XG4gICAgICAgIC8vIENvbnN0cnVjdCBhIERhdGFXcml0ZXIgd2l0aCB0aGUgdG90YWwgYnl0ZSBsZW5ndGggdG8gcHJldmVudCByZXNpemluZ1xuICAgICAgICBsZXQgdG90YWxCeXRlTGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5fYnVmZmVyVmlld1RvRGF0YS5mb3JFYWNoKChkYXRhKSA9PiB7XG4gICAgICAgICAgICB0b3RhbEJ5dGVMZW5ndGggKz0gZGF0YS5ieXRlTGVuZ3RoO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgZGF0YVdyaXRlciA9IG5ldyBEYXRhV3JpdGVyKHRvdGFsQnl0ZUxlbmd0aCk7XG5cbiAgICAgICAgLy8gT3JkZXIgdGhlIGJ1ZmZlclZpZXdzIGluIGRlc2NlbmRpbmcgb3JkZXIgb2YgdGhlaXIgYWxpZ25tZW50IHJlcXVpcmVtZW50c1xuICAgICAgICBjb25zdCBvcmRlcmVkQnVmZmVyVmlld3MgPSBBcnJheS5mcm9tKHRoaXMuX2J1ZmZlclZpZXdUb0RhdGEua2V5cygpKS5zb3J0KChhLCBiKSA9PiBHZXRIaWdoZXN0Qnl0ZUFsaWdubWVudChiLmJ5dGVMZW5ndGgpIC0gR2V0SGlnaGVzdEJ5dGVBbGlnbm1lbnQoYS5ieXRlTGVuZ3RoKSk7XG5cbiAgICAgICAgLy8gRmlsbCBpbiB0aGUgYnVmZmVyVmlld3MgbGlzdCBhbmQgbWlzc2luZyBidWZmZXJWaWV3IGluZGV4IHJlZmVyZW5jZXMgd2hpbGUgd3JpdGluZyB0aGUgYmluYXJ5XG4gICAgICAgIGZvciAoY29uc3QgYnVmZmVyVmlldyBvZiBvcmRlcmVkQnVmZmVyVmlld3MpIHtcbiAgICAgICAgICAgIGJ1ZmZlclZpZXcuYnl0ZU9mZnNldCA9IGRhdGFXcml0ZXIuYnl0ZU9mZnNldDtcbiAgICAgICAgICAgIGJ1ZmZlclZpZXdzLnB1c2goYnVmZmVyVmlldyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGJ1ZmZlclZpZXdJbmRleCA9IGJ1ZmZlclZpZXdzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICBjb25zdCBwcm9wZXJ0aWVzID0gdGhpcy5nZXRQcm9wZXJ0aWVzV2l0aEJ1ZmZlclZpZXcoYnVmZmVyVmlldyk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IG9iamVjdCBvZiBwcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICAgICAgb2JqZWN0LmJ1ZmZlclZpZXcgPSBidWZmZXJWaWV3SW5kZXg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRhdGFXcml0ZXIud3JpdGVUeXBlZEFycmF5KHRoaXMuX2J1ZmZlclZpZXdUb0RhdGEuZ2V0KGJ1ZmZlclZpZXcpISk7XG5cbiAgICAgICAgICAgIHRoaXMuX2J1ZmZlclZpZXdUb0RhdGEuZGVsZXRlKGJ1ZmZlclZpZXcpOyAvLyBUcnkgdG8gZnJlZSB1cCBtZW1vcnkgQVNBUFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRhdGFXcml0ZXIuZ2V0T3V0cHV0RGF0YSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBidWZmZXIgdmlldyBiYXNlZCBvbiB0aGUgc3VwcGxpZWQgYXJndW1lbnRzXG4gICAgICogQHBhcmFtIGRhdGEgYSBUeXBlZEFycmF5IHRvIGNyZWF0ZSB0aGUgYnVmZmVyVmlldyBmb3JcbiAgICAgKiBAcGFyYW0gYnl0ZVN0cmlkZSBieXRlIGRpc3RhbmNlIGJldHdlZW4gY29uc2VjdXRpdmUgZWxlbWVudHNcbiAgICAgKiBAcmV0dXJucyBidWZmZXJWaWV3IGZvciBnbFRGXG4gICAgICovXG4gICAgcHVibGljIGNyZWF0ZUJ1ZmZlclZpZXcoZGF0YTogVHlwZWRBcnJheUZvcmdsVEYsIGJ5dGVTdHJpZGU/OiBudW1iZXIpOiBJQnVmZmVyVmlldyB7XG4gICAgICAgIGNvbnN0IGJ1ZmZlclZpZXc6IElCdWZmZXJWaWV3ID0ge1xuICAgICAgICAgICAgYnVmZmVyOiAwLFxuICAgICAgICAgICAgYnl0ZU9mZnNldDogdW5kZWZpbmVkLCAvLyBieXRlT2Zmc2V0IHdpbGwgYmUgc2V0IGxhdGVyLCB3aGVuIHdlIHdyaXRlIHRoZSBiaW5hcnkgYW5kIGRlY2lkZSBidWZmZXJWaWV3IG9yZGVyaW5nXG4gICAgICAgICAgICBieXRlTGVuZ3RoOiBkYXRhLmJ5dGVMZW5ndGgsXG4gICAgICAgICAgICBieXRlU3RyaWRlOiBieXRlU3RyaWRlLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9idWZmZXJWaWV3VG9EYXRhLnNldChidWZmZXJWaWV3LCBkYXRhKTtcbiAgICAgICAgcmV0dXJuIGJ1ZmZlclZpZXc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBhY2Nlc3NvciBiYXNlZCBvbiB0aGUgc3VwcGxpZWQgYXJndW1lbnRzIGFuZCBhc3NpZ25zIGl0IHRvIHRoZSBidWZmZXJWaWV3XG4gICAgICogQHBhcmFtIGJ1ZmZlclZpZXcgVGhlIGdsVEYgYnVmZmVyVmlldyByZWZlcmVuY2VkIGJ5IHRoaXMgYWNjZXNzb3JcbiAgICAgKiBAcGFyYW0gdHlwZSBUaGUgdHlwZSBvZiB0aGUgYWNjZXNzb3JcbiAgICAgKiBAcGFyYW0gY29tcG9uZW50VHlwZSBUaGUgZGF0YXR5cGUgb2YgY29tcG9uZW50cyBpbiB0aGUgYXR0cmlidXRlXG4gICAgICogQHBhcmFtIGNvdW50IFRoZSBudW1iZXIgb2YgYXR0cmlidXRlcyByZWZlcmVuY2VkIGJ5IHRoaXMgYWNjZXNzb3JcbiAgICAgKiBAcGFyYW0gYnl0ZU9mZnNldCBUaGUgb2Zmc2V0IHJlbGF0aXZlIHRvIHRoZSBzdGFydCBvZiB0aGUgYnVmZmVyVmlldyBpbiBieXRlc1xuICAgICAqIEBwYXJhbSBtaW5NYXggTWluaW11bSBhbmQgbWF4aW11bSB2YWx1ZSBvZiBlYWNoIGNvbXBvbmVudCBpbiB0aGlzIGF0dHJpYnV0ZVxuICAgICAqIEBwYXJhbSBub3JtYWxpemVkIFNwZWNpZmllcyB3aGV0aGVyIGludGVnZXIgZGF0YSB2YWx1ZXMgYXJlIG5vcm1hbGl6ZWQgYmVmb3JlIHVzYWdlXG4gICAgICogQHJldHVybnMgYWNjZXNzb3IgZm9yIGdsVEZcbiAgICAgKi9cbiAgICBwdWJsaWMgY3JlYXRlQWNjZXNzb3IoXG4gICAgICAgIGJ1ZmZlclZpZXc6IElCdWZmZXJWaWV3LFxuICAgICAgICB0eXBlOiBBY2Nlc3NvclR5cGUsXG4gICAgICAgIGNvbXBvbmVudFR5cGU6IEFjY2Vzc29yQ29tcG9uZW50VHlwZSxcbiAgICAgICAgY291bnQ6IG51bWJlcixcbiAgICAgICAgYnl0ZU9mZnNldD86IG51bWJlcixcbiAgICAgICAgbWluTWF4PzogeyBtaW46IG51bWJlcltdOyBtYXg6IG51bWJlcltdIH0sXG4gICAgICAgIG5vcm1hbGl6ZWQ/OiBib29sZWFuXG4gICAgKTogSUFjY2Vzc29yIHtcbiAgICAgICAgdGhpcy5fdmVyaWZ5QnVmZmVyVmlldyhidWZmZXJWaWV3KTtcbiAgICAgICAgY29uc3QgYWNjZXNzb3I6IElBY2Nlc3NvciA9IHtcbiAgICAgICAgICAgIGJ1ZmZlclZpZXc6IHVuZGVmaW5lZCwgLy8gYnVmZmVyVmlldyB3aWxsIGJlIHNldCB0byBhIHJlYWwgaW5kZXggbGF0ZXIsIG9uY2Ugd2Ugd3JpdGUgdGhlIGJpbmFyeSBhbmQgZGVjaWRlIGJ1ZmZlclZpZXcgb3JkZXJpbmdcbiAgICAgICAgICAgIGNvbXBvbmVudFR5cGU6IGNvbXBvbmVudFR5cGUsXG4gICAgICAgICAgICBjb3VudDogY291bnQsXG4gICAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgICAgbWluOiBtaW5NYXg/Lm1pbixcbiAgICAgICAgICAgIG1heDogbWluTWF4Py5tYXgsXG4gICAgICAgICAgICBub3JtYWxpemVkOiBub3JtYWxpemVkLFxuICAgICAgICAgICAgYnl0ZU9mZnNldDogYnl0ZU9mZnNldCxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zZXRCdWZmZXJWaWV3KGFjY2Vzc29yLCBidWZmZXJWaWV3KTtcbiAgICAgICAgdGhpcy5fYWNjZXNzb3JUb0J1ZmZlclZpZXcuc2V0KGFjY2Vzc29yLCBidWZmZXJWaWV3KTtcbiAgICAgICAgcmV0dXJuIGFjY2Vzc29yO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFzc2lnbnMgYSBidWZmZXJWaWV3IHRvIGEgZ2xURiBvYmplY3QgdGhhdCByZWZlcmVuY2VzIGl0XG4gICAgICogQHBhcmFtIG9iamVjdCBUaGUgZ2xURiBvYmplY3RcbiAgICAgKiBAcGFyYW0gYnVmZmVyVmlldyBUaGUgYnVmZmVyVmlldyB0byBhc3NpZ25cbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0QnVmZmVyVmlldyhvYmplY3Q6IElQcm9wZXJ0eVdpdGhCdWZmZXJWaWV3LCBidWZmZXJWaWV3OiBJQnVmZmVyVmlldykge1xuICAgICAgICB0aGlzLl92ZXJpZnlCdWZmZXJWaWV3KGJ1ZmZlclZpZXcpO1xuICAgICAgICBjb25zdCBwcm9wZXJ0aWVzID0gdGhpcy5nZXRQcm9wZXJ0aWVzV2l0aEJ1ZmZlclZpZXcoYnVmZmVyVmlldyk7XG4gICAgICAgIHByb3BlcnRpZXMucHVzaChvYmplY3QpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYnVmZmVyIHZpZXcgZnJvbSB0aGUgYmluYXJ5IGRhdGEsIGFzIHdlbGwgYXMgZnJvbSBhbGwgaXRzIGtub3duIHJlZmVyZW5jZXNcbiAgICAgKiBAcGFyYW0gYnVmZmVyVmlldyB0aGUgYnVmZmVyVmlldyB0byByZW1vdmVcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVtb3ZlQnVmZmVyVmlldyhidWZmZXJWaWV3OiBJQnVmZmVyVmlldyk6IHZvaWQge1xuICAgICAgICBjb25zdCBwcm9wZXJ0aWVzID0gdGhpcy5nZXRQcm9wZXJ0aWVzV2l0aEJ1ZmZlclZpZXcoYnVmZmVyVmlldyk7XG4gICAgICAgIGZvciAoY29uc3Qgb2JqZWN0IG9mIHByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIGlmIChvYmplY3QuYnVmZmVyVmlldyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIG9iamVjdC5idWZmZXJWaWV3O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fYnVmZmVyVmlld1RvRGF0YS5kZWxldGUoYnVmZmVyVmlldyk7XG4gICAgICAgIHRoaXMuX2J1ZmZlclZpZXdUb1Byb3BlcnRpZXMuZGVsZXRlKGJ1ZmZlclZpZXcpO1xuICAgICAgICB0aGlzLl9hY2Nlc3NvclRvQnVmZmVyVmlldy5mb3JFYWNoKChidiwgYWNjZXNzb3IpID0+IHtcbiAgICAgICAgICAgIGlmIChidiA9PT0gYnVmZmVyVmlldykge1xuICAgICAgICAgICAgICAgIC8vIEFkZGl0aW9uYWxseSwgcmVtb3ZlIGJ5dGVPZmZzZXQgZnJvbSBhY2Nlc3NvciByZWZlcmVuY2luZyB0aGlzIGJ1ZmZlclZpZXdcbiAgICAgICAgICAgICAgICBpZiAoYWNjZXNzb3IuYnl0ZU9mZnNldCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBhY2Nlc3Nvci5ieXRlT2Zmc2V0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl9hY2Nlc3NvclRvQnVmZmVyVmlldy5kZWxldGUoYWNjZXNzb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0QnVmZmVyVmlldyhhY2Nlc3NvcjogSUFjY2Vzc29yKTogSUJ1ZmZlclZpZXcge1xuICAgICAgICBjb25zdCBidWZmZXJWaWV3ID0gdGhpcy5fYWNjZXNzb3JUb0J1ZmZlclZpZXcuZ2V0KGFjY2Vzc29yKTtcbiAgICAgICAgdGhpcy5fdmVyaWZ5QnVmZmVyVmlldyhidWZmZXJWaWV3KTtcbiAgICAgICAgcmV0dXJuIGJ1ZmZlclZpZXchO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRQcm9wZXJ0aWVzV2l0aEJ1ZmZlclZpZXcoYnVmZmVyVmlldzogSUJ1ZmZlclZpZXcpOiBJUHJvcGVydHlXaXRoQnVmZmVyVmlld1tdIHtcbiAgICAgICAgdGhpcy5fdmVyaWZ5QnVmZmVyVmlldyhidWZmZXJWaWV3KTtcbiAgICAgICAgdGhpcy5fYnVmZmVyVmlld1RvUHJvcGVydGllcy5zZXQoYnVmZmVyVmlldywgdGhpcy5fYnVmZmVyVmlld1RvUHJvcGVydGllcy5nZXQoYnVmZmVyVmlldykgPz8gW10pO1xuICAgICAgICByZXR1cm4gdGhpcy5fYnVmZmVyVmlld1RvUHJvcGVydGllcy5nZXQoYnVmZmVyVmlldykhO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXREYXRhKGJ1ZmZlclZpZXc6IElCdWZmZXJWaWV3KTogVHlwZWRBcnJheUZvcmdsVEYge1xuICAgICAgICB0aGlzLl92ZXJpZnlCdWZmZXJWaWV3KGJ1ZmZlclZpZXcpO1xuICAgICAgICByZXR1cm4gdGhpcy5fYnVmZmVyVmlld1RvRGF0YS5nZXQoYnVmZmVyVmlldykhO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3ZlcmlmeUJ1ZmZlclZpZXcoYnVmZmVyVmlldz86IElCdWZmZXJWaWV3KTogdm9pZCB7XG4gICAgICAgIGlmIChidWZmZXJWaWV3ID09PSB1bmRlZmluZWQgfHwgIXRoaXMuX2J1ZmZlclZpZXdUb0RhdGEuaGFzKGJ1ZmZlclZpZXcpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEJ1ZmZlclZpZXcgJHtidWZmZXJWaWV3fSBub3QgZm91bmQgaW4gQnVmZmVyTWFuYWdlci5gKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBiYWJ5bG9uanMvYXZhaWxhYmxlICovXHJcbmltcG9ydCB0eXBlIHsgVHlwZWRBcnJheSB9IGZyb20gXCJjb3JlL3R5cGVzXCI7XHJcblxyXG5jb25zdCBUeXBlZEFycmF5VG9Xcml0ZU1ldGhvZCA9IG5ldyBNYXA8RnVuY3Rpb24sIChkYXRhVmlldzogRGF0YVZpZXcsIGJ5dGVPZmZzZXQ6IG51bWJlciwgdmFsdWU6IG51bWJlcikgPT4gdm9pZD4oW1xyXG4gICAgW0ludDhBcnJheSwgKGQsIGIsIHYpID0+IGQuc2V0SW50OChiLCB2KV0sXHJcbiAgICBbVWludDhBcnJheSwgKGR2LCBibywgdikgPT4gZHYuc2V0VWludDgoYm8sIHYpXSxcclxuICAgIFtVaW50OENsYW1wZWRBcnJheSwgKGR2LCBibywgdikgPT4gZHYuc2V0VWludDgoYm8sIHYpXSxcclxuICAgIFtJbnQxNkFycmF5LCAoZHYsIGJvLCB2KSA9PiBkdi5zZXRJbnQxNihibywgdiwgdHJ1ZSldLFxyXG4gICAgW1VpbnQxNkFycmF5LCAoZHYsIGJvLCB2KSA9PiBkdi5zZXRVaW50MTYoYm8sIHYsIHRydWUpXSxcclxuICAgIFtJbnQzMkFycmF5LCAoZHYsIGJvLCB2KSA9PiBkdi5zZXRJbnQzMihibywgdiwgdHJ1ZSldLFxyXG4gICAgW1VpbnQzMkFycmF5LCAoZHYsIGJvLCB2KSA9PiBkdi5zZXRVaW50MzIoYm8sIHYsIHRydWUpXSxcclxuICAgIFtGbG9hdDMyQXJyYXksIChkdiwgYm8sIHYpID0+IGR2LnNldEZsb2F0MzIoYm8sIHYsIHRydWUpXSxcclxuICAgIFtGbG9hdDY0QXJyYXksIChkdiwgYm8sIHYpID0+IGR2LnNldEZsb2F0NjQoYm8sIHYsIHRydWUpXSxcclxuXSk7XHJcblxyXG4vKiogQGludGVybmFsICovXHJcbmV4cG9ydCBjbGFzcyBEYXRhV3JpdGVyIHtcclxuICAgIHByaXZhdGUgX2RhdGE6IFVpbnQ4QXJyYXk7XHJcbiAgICBwcml2YXRlIF9kYXRhVmlldzogRGF0YVZpZXc7XHJcbiAgICBwcml2YXRlIF9ieXRlT2Zmc2V0OiBudW1iZXI7XHJcblxyXG4gICAgcHVibGljIHdyaXRlVHlwZWRBcnJheSh2YWx1ZTogRXhjbHVkZTxUeXBlZEFycmF5LCBCaWdJbnQ2NEFycmF5IHwgQmlnVWludDY0QXJyYXk+KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fY2hlY2tHcm93QnVmZmVyKHZhbHVlLmJ5dGVMZW5ndGgpO1xyXG4gICAgICAgIGNvbnN0IHNldE1ldGhvZCA9IFR5cGVkQXJyYXlUb1dyaXRlTWV0aG9kLmdldCh2YWx1ZS5jb25zdHJ1Y3RvcikhO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgc2V0TWV0aG9kKHRoaXMuX2RhdGFWaWV3LCB0aGlzLl9ieXRlT2Zmc2V0LCB2YWx1ZVtpXSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2J5dGVPZmZzZXQgKz0gdmFsdWUuQllURVNfUEVSX0VMRU1FTlQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihieXRlTGVuZ3RoOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9kYXRhID0gbmV3IFVpbnQ4QXJyYXkoYnl0ZUxlbmd0aCk7XHJcbiAgICAgICAgdGhpcy5fZGF0YVZpZXcgPSBuZXcgRGF0YVZpZXcodGhpcy5fZGF0YS5idWZmZXIpO1xyXG4gICAgICAgIHRoaXMuX2J5dGVPZmZzZXQgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgYnl0ZU9mZnNldCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ieXRlT2Zmc2V0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRPdXRwdXREYXRhKCk6IFVpbnQ4QXJyYXkge1xyXG4gICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheSh0aGlzLl9kYXRhLmJ1ZmZlciwgMCwgdGhpcy5fYnl0ZU9mZnNldCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHdyaXRlVUludDgodmFsdWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2NoZWNrR3Jvd0J1ZmZlcigxKTtcclxuICAgICAgICB0aGlzLl9kYXRhVmlldy5zZXRVaW50OCh0aGlzLl9ieXRlT2Zmc2V0LCB2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5fYnl0ZU9mZnNldCsrO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB3cml0ZUludDgodmFsdWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2NoZWNrR3Jvd0J1ZmZlcigxKTtcclxuICAgICAgICB0aGlzLl9kYXRhVmlldy5zZXRJbnQ4KHRoaXMuX2J5dGVPZmZzZXQsIHZhbHVlKTtcclxuICAgICAgICB0aGlzLl9ieXRlT2Zmc2V0Kys7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHdyaXRlSW50MTYoZW50cnk6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2NoZWNrR3Jvd0J1ZmZlcigyKTtcclxuICAgICAgICB0aGlzLl9kYXRhVmlldy5zZXRJbnQxNih0aGlzLl9ieXRlT2Zmc2V0LCBlbnRyeSwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5fYnl0ZU9mZnNldCArPSAyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB3cml0ZVVJbnQxNih2YWx1ZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fY2hlY2tHcm93QnVmZmVyKDIpO1xyXG4gICAgICAgIHRoaXMuX2RhdGFWaWV3LnNldFVpbnQxNih0aGlzLl9ieXRlT2Zmc2V0LCB2YWx1ZSwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5fYnl0ZU9mZnNldCArPSAyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB3cml0ZUludDMyKGVudHJ5OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9jaGVja0dyb3dCdWZmZXIoNCk7XHJcbiAgICAgICAgdGhpcy5fZGF0YVZpZXcuc2V0SW50MzIodGhpcy5fYnl0ZU9mZnNldCwgZW50cnksIHRydWUpO1xyXG4gICAgICAgIHRoaXMuX2J5dGVPZmZzZXQgKz0gNDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgd3JpdGVVSW50MzIodmFsdWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2NoZWNrR3Jvd0J1ZmZlcig0KTtcclxuICAgICAgICB0aGlzLl9kYXRhVmlldy5zZXRVaW50MzIodGhpcy5fYnl0ZU9mZnNldCwgdmFsdWUsIHRydWUpO1xyXG4gICAgICAgIHRoaXMuX2J5dGVPZmZzZXQgKz0gNDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgd3JpdGVGbG9hdDMyKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9jaGVja0dyb3dCdWZmZXIoNCk7XHJcbiAgICAgICAgdGhpcy5fZGF0YVZpZXcuc2V0RmxvYXQzMih0aGlzLl9ieXRlT2Zmc2V0LCB2YWx1ZSwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5fYnl0ZU9mZnNldCArPSA0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB3cml0ZUZsb2F0NjQodmFsdWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2NoZWNrR3Jvd0J1ZmZlcig4KTtcclxuICAgICAgICB0aGlzLl9kYXRhVmlldy5zZXRGbG9hdDY0KHRoaXMuX2J5dGVPZmZzZXQsIHZhbHVlLCB0cnVlKTtcclxuICAgICAgICB0aGlzLl9ieXRlT2Zmc2V0ICs9IDg7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY2hlY2tHcm93QnVmZmVyKGJ5dGVMZW5ndGg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IG5ld0J5dGVMZW5ndGggPSB0aGlzLmJ5dGVPZmZzZXQgKyBieXRlTGVuZ3RoO1xyXG4gICAgICAgIGlmIChuZXdCeXRlTGVuZ3RoID4gdGhpcy5fZGF0YS5ieXRlTGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0RhdGEgPSBuZXcgVWludDhBcnJheShuZXdCeXRlTGVuZ3RoICogMik7XHJcbiAgICAgICAgICAgIG5ld0RhdGEuc2V0KHRoaXMuX2RhdGEpO1xyXG4gICAgICAgICAgICB0aGlzLl9kYXRhID0gbmV3RGF0YTtcclxuICAgICAgICAgICAgdGhpcy5fZGF0YVZpZXcgPSBuZXcgRGF0YVZpZXcodGhpcy5fZGF0YS5idWZmZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgdHlwZSB7IElBbmltYXRpb24sIElOb2RlLCBJQnVmZmVyVmlldywgSUFjY2Vzc29yLCBJQW5pbWF0aW9uU2FtcGxlciwgSUFuaW1hdGlvbkNoYW5uZWwgfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IEFuaW1hdGlvblNhbXBsZXJJbnRlcnBvbGF0aW9uLCBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCwgQWNjZXNzb3JUeXBlLCBBY2Nlc3NvckNvbXBvbmVudFR5cGUgfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB0eXBlIHsgTm9kZSB9IGZyb20gXCJjb3JlL25vZGVcIjtcclxuaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCJjb3JlL3R5cGVzXCI7XHJcbmltcG9ydCB7IFZlY3RvcjMsIFF1YXRlcm5pb24gfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLnZlY3RvclwiO1xyXG5pbXBvcnQgeyBUb29scyB9IGZyb20gXCJjb3JlL01pc2MvdG9vbHNcIjtcclxuaW1wb3J0IHsgQW5pbWF0aW9uIH0gZnJvbSBcImNvcmUvQW5pbWF0aW9ucy9hbmltYXRpb25cIjtcclxuaW1wb3J0IHsgVHJhbnNmb3JtTm9kZSB9IGZyb20gXCJjb3JlL01lc2hlcy90cmFuc2Zvcm1Ob2RlXCI7XHJcbmltcG9ydCB0eXBlIHsgU2NlbmUgfSBmcm9tIFwiY29yZS9zY2VuZVwiO1xyXG5pbXBvcnQgeyBNb3JwaFRhcmdldCB9IGZyb20gXCJjb3JlL01vcnBoL21vcnBoVGFyZ2V0XCI7XHJcbmltcG9ydCB7IE1lc2ggfSBmcm9tIFwiY29yZS9NZXNoZXMvbWVzaFwiO1xyXG5cclxuaW1wb3J0IHR5cGUgeyBJQW5pbWF0aW9uS2V5IH0gZnJvbSBcImNvcmUvQW5pbWF0aW9ucy9hbmltYXRpb25LZXlcIjtcclxuaW1wb3J0IHsgQW5pbWF0aW9uS2V5SW50ZXJwb2xhdGlvbiB9IGZyb20gXCJjb3JlL0FuaW1hdGlvbnMvYW5pbWF0aW9uS2V5XCI7XHJcblxyXG5pbXBvcnQgeyBDYW1lcmEgfSBmcm9tIFwiY29yZS9DYW1lcmFzL2NhbWVyYVwiO1xyXG5pbXBvcnQgeyBMaWdodCB9IGZyb20gXCJjb3JlL0xpZ2h0cy9saWdodFwiO1xyXG5pbXBvcnQgdHlwZSB7IEJ1ZmZlck1hbmFnZXIgfSBmcm9tIFwiLi9idWZmZXJNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IEdldEFjY2Vzc29yRWxlbWVudENvdW50LCBDb252ZXJ0VG9SaWdodEhhbmRlZFBvc2l0aW9uLCBDb252ZXJ0Q2FtZXJhUm90YXRpb25Ub0dMVEYsIENvbnZlcnRUb1JpZ2h0SGFuZGVkUm90YXRpb24gfSBmcm9tIFwiLi9nbFRGVXRpbGl0aWVzXCI7XHJcblxyXG4vKipcclxuICogQGludGVybmFsXHJcbiAqIEludGVyZmFjZSB0byBzdG9yZSBhbmltYXRpb24gZGF0YS5cclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGludGVyZmFjZSBfSUFuaW1hdGlvbkRhdGEge1xyXG4gICAgLyoqXHJcbiAgICAgKiBLZXlmcmFtZSBkYXRhLlxyXG4gICAgICovXHJcbiAgICBpbnB1dHM6IG51bWJlcltdO1xyXG4gICAgLyoqXHJcbiAgICAgKiBWYWx1ZSBkYXRhLlxyXG4gICAgICovXHJcbiAgICBvdXRwdXRzOiBudW1iZXJbXVtdO1xyXG4gICAgLyoqXHJcbiAgICAgKiBBbmltYXRpb24gaW50ZXJwb2xhdGlvbiBkYXRhLlxyXG4gICAgICovXHJcbiAgICBzYW1wbGVySW50ZXJwb2xhdGlvbjogQW5pbWF0aW9uU2FtcGxlckludGVycG9sYXRpb247XHJcbiAgICAvKipcclxuICAgICAqIE1pbmltdW0ga2V5ZnJhbWUgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIGlucHV0c01pbjogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBNYXhpbXVtIGtleWZyYW1lIHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBpbnB1dHNNYXg6IG51bWJlcjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgaW50ZXJmYWNlIF9JQW5pbWF0aW9uSW5mbyB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSB0YXJnZXQgY2hhbm5lbCBmb3IgdGhlIGFuaW1hdGlvblxyXG4gICAgICovXHJcbiAgICBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aDogQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGg7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBnbFRGIGFjY2Vzc29yIHR5cGUgZm9yIHRoZSBkYXRhLlxyXG4gICAgICovXHJcbiAgICBkYXRhQWNjZXNzb3JUeXBlOiBBY2Nlc3NvclR5cGUuVkVDMyB8IEFjY2Vzc29yVHlwZS5WRUM0IHwgQWNjZXNzb3JUeXBlLlNDQUxBUjtcclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIGlmIHF1YXRlcm5pb25zIHNob3VsZCBiZSB1c2VkLlxyXG4gICAgICovXHJcbiAgICB1c2VRdWF0ZXJuaW9uOiBib29sZWFuO1xyXG59XHJcblxyXG4vKipcclxuICogQGludGVybmFsXHJcbiAqIEVudW0gZm9yIGhhbmRsaW5nIGluIHRhbmdlbnQgYW5kIG91dCB0YW5nZW50LlxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5lbnVtIF9UYW5nZW50VHlwZSB7XHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGF0IGlucHV0IHRhbmdlbnRzIGFyZSB1c2VkLlxyXG4gICAgICovXHJcbiAgICBJTlRBTkdFTlQsXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGF0IG91dHB1dCB0YW5nZW50cyBhcmUgdXNlZC5cclxuICAgICAqL1xyXG4gICAgT1VUVEFOR0VOVCxcclxufVxyXG5cclxuLyoqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKiBVdGlsaXR5IGNsYXNzIGZvciBnZW5lcmF0aW5nIGdsVEYgYW5pbWF0aW9uIGRhdGEgZnJvbSBCYWJ5bG9uSlMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgX0dMVEZBbmltYXRpb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBEZXRlcm1pbmUgaWYgYSBub2RlIGlzIHRyYW5zZm9ybWFibGUgLSBpZSBoYXMgcHJvcGVydGllcyBpdCBzaG91bGQgYmUgcGFydCBvZiBhbmltYXRpb24gb2YgdHJhbnNmb3JtYXRpb24uXHJcbiAgICAgKiBAcGFyYW0gYmFieWxvbk5vZGUgdGhlIG5vZGUgdG8gdGVzdFxyXG4gICAgICogQHJldHVybnMgdHJ1ZSBpZiBjYW4gYmUgYW5pbWF0ZWQsIGZhbHNlIG90aGVyd2lzZS4gRmFsc2UgaWYgdGhlIHBhcmFtZXRlciBpcyBudWxsIG9yIHVuZGVmaW5lZC5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX0lzVHJhbnNmb3JtYWJsZShiYWJ5bG9uTm9kZTogTm9kZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBiYWJ5bG9uTm9kZSAmJiAoYmFieWxvbk5vZGUgaW5zdGFuY2VvZiBUcmFuc2Zvcm1Ob2RlIHx8IGJhYnlsb25Ob2RlIGluc3RhbmNlb2YgQ2FtZXJhIHx8IGJhYnlsb25Ob2RlIGluc3RhbmNlb2YgTGlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGlnbm9yZVxyXG4gICAgICpcclxuICAgICAqIENyZWF0ZXMgZ2xURiBjaGFubmVsIGFuaW1hdGlvbiBmcm9tIEJhYnlsb25KUyBhbmltYXRpb24uXHJcbiAgICAgKiBAcGFyYW0gYmFieWxvblRyYW5zZm9ybU5vZGUgLSBCYWJ5bG9uSlMgbWVzaC5cclxuICAgICAqIEBwYXJhbSBhbmltYXRpb24gLSBhbmltYXRpb24uXHJcbiAgICAgKiBAcGFyYW0gYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGggLSBUaGUgdGFyZ2V0IGFuaW1hdGlvbiBjaGFubmVsLlxyXG4gICAgICogQHBhcmFtIHVzZVF1YXRlcm5pb24gLSBTcGVjaWZpZXMgaWYgcXVhdGVybmlvbnMgYXJlIHVzZWQuXHJcbiAgICAgKiBAcmV0dXJucyBudWxsYWJsZSBJQW5pbWF0aW9uRGF0YVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIF9DcmVhdGVOb2RlQW5pbWF0aW9uKFxyXG4gICAgICAgIGJhYnlsb25UcmFuc2Zvcm1Ob2RlOiBOb2RlLFxyXG4gICAgICAgIGFuaW1hdGlvbjogQW5pbWF0aW9uLFxyXG4gICAgICAgIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoOiBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCxcclxuICAgICAgICB1c2VRdWF0ZXJuaW9uOiBib29sZWFuLFxyXG4gICAgICAgIGFuaW1hdGlvblNhbXBsZVJhdGU6IG51bWJlclxyXG4gICAgKTogTnVsbGFibGU8X0lBbmltYXRpb25EYXRhPiB7XHJcbiAgICAgICAgaWYgKHRoaXMuX0lzVHJhbnNmb3JtYWJsZShiYWJ5bG9uVHJhbnNmb3JtTm9kZSkpIHtcclxuICAgICAgICAgICAgY29uc3QgaW5wdXRzOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgICAgICAgICBjb25zdCBvdXRwdXRzOiBudW1iZXJbXVtdID0gW107XHJcbiAgICAgICAgICAgIGNvbnN0IGtleUZyYW1lcyA9IGFuaW1hdGlvbi5nZXRLZXlzKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1pbk1heEtleUZyYW1lcyA9IF9HTFRGQW5pbWF0aW9uLl9DYWxjdWxhdGVNaW5NYXhLZXlGcmFtZXMoa2V5RnJhbWVzKTtcclxuICAgICAgICAgICAgY29uc3QgaW50ZXJwb2xhdGlvbk9yQmFrZSA9IF9HTFRGQW5pbWF0aW9uLl9EZWR1Y2VJbnRlcnBvbGF0aW9uKGtleUZyYW1lcywgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsIHVzZVF1YXRlcm5pb24pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaW50ZXJwb2xhdGlvbiA9IGludGVycG9sYXRpb25PckJha2UuaW50ZXJwb2xhdGlvblR5cGU7XHJcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZEJha2VBbmltYXRpb24gPSBpbnRlcnBvbGF0aW9uT3JCYWtlLnNob3VsZEJha2VBbmltYXRpb247XHJcblxyXG4gICAgICAgICAgICBpZiAoc2hvdWxkQmFrZUFuaW1hdGlvbikge1xyXG4gICAgICAgICAgICAgICAgX0dMVEZBbmltYXRpb24uX0NyZWF0ZUJha2VkQW5pbWF0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgIGJhYnlsb25UcmFuc2Zvcm1Ob2RlLFxyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCxcclxuICAgICAgICAgICAgICAgICAgICBtaW5NYXhLZXlGcmFtZXMubWluLFxyXG4gICAgICAgICAgICAgICAgICAgIG1pbk1heEtleUZyYW1lcy5tYXgsXHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLmZyYW1lUGVyU2Vjb25kLFxyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvblNhbXBsZVJhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRzLFxyXG4gICAgICAgICAgICAgICAgICAgIG91dHB1dHMsXHJcbiAgICAgICAgICAgICAgICAgICAgbWluTWF4S2V5RnJhbWVzLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZVF1YXRlcm5pb25cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW50ZXJwb2xhdGlvbiA9PT0gQW5pbWF0aW9uU2FtcGxlckludGVycG9sYXRpb24uTElORUFSIHx8IGludGVycG9sYXRpb24gPT09IEFuaW1hdGlvblNhbXBsZXJJbnRlcnBvbGF0aW9uLlNURVApIHtcclxuICAgICAgICAgICAgICAgICAgICBfR0xURkFuaW1hdGlvbi5fQ3JlYXRlTGluZWFyT3JTdGVwQW5pbWF0aW9uKGJhYnlsb25UcmFuc2Zvcm1Ob2RlLCBhbmltYXRpb24sIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLCBpbnB1dHMsIG91dHB1dHMsIHVzZVF1YXRlcm5pb24pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpbnRlcnBvbGF0aW9uID09PSBBbmltYXRpb25TYW1wbGVySW50ZXJwb2xhdGlvbi5DVUJJQ1NQTElORSkge1xyXG4gICAgICAgICAgICAgICAgICAgIF9HTFRGQW5pbWF0aW9uLl9DcmVhdGVDdWJpY1NwbGluZUFuaW1hdGlvbihiYWJ5bG9uVHJhbnNmb3JtTm9kZSwgYW5pbWF0aW9uLCBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCwgaW5wdXRzLCBvdXRwdXRzLCB1c2VRdWF0ZXJuaW9uKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX0dMVEZBbmltYXRpb24uX0NyZWF0ZUJha2VkQW5pbWF0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uVHJhbnNmb3JtTm9kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluTWF4S2V5RnJhbWVzLm1pbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluTWF4S2V5RnJhbWVzLm1heCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLmZyYW1lUGVyU2Vjb25kLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25TYW1wbGVSYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbk1heEtleUZyYW1lcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlUXVhdGVybmlvblxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChpbnB1dHMubGVuZ3RoICYmIG91dHB1dHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQ6IF9JQW5pbWF0aW9uRGF0YSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dHM6IGlucHV0cyxcclxuICAgICAgICAgICAgICAgICAgICBvdXRwdXRzOiBvdXRwdXRzLFxyXG4gICAgICAgICAgICAgICAgICAgIHNhbXBsZXJJbnRlcnBvbGF0aW9uOiBpbnRlcnBvbGF0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0c01pbjogc2hvdWxkQmFrZUFuaW1hdGlvbiA/IG1pbk1heEtleUZyYW1lcy5taW4gOiBUb29scy5GbG9hdFJvdW5kKG1pbk1heEtleUZyYW1lcy5taW4gLyBhbmltYXRpb24uZnJhbWVQZXJTZWNvbmQpLFxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0c01heDogc2hvdWxkQmFrZUFuaW1hdGlvbiA/IG1pbk1heEtleUZyYW1lcy5tYXggOiBUb29scy5GbG9hdFJvdW5kKG1pbk1heEtleUZyYW1lcy5tYXggLyBhbmltYXRpb24uZnJhbWVQZXJTZWNvbmQpLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfRGVkdWNlQW5pbWF0aW9uSW5mbyhhbmltYXRpb246IEFuaW1hdGlvbik6IE51bGxhYmxlPF9JQW5pbWF0aW9uSW5mbz4ge1xyXG4gICAgICAgIGxldCBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aDogTnVsbGFibGU8QW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGg+ID0gbnVsbDtcclxuICAgICAgICBsZXQgZGF0YUFjY2Vzc29yVHlwZSA9IEFjY2Vzc29yVHlwZS5WRUMzO1xyXG4gICAgICAgIGxldCB1c2VRdWF0ZXJuaW9uOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAgICAgY29uc3QgcHJvcGVydHkgPSBhbmltYXRpb24udGFyZ2V0UHJvcGVydHkuc3BsaXQoXCIuXCIpO1xyXG4gICAgICAgIHN3aXRjaCAocHJvcGVydHlbMF0pIHtcclxuICAgICAgICAgICAgY2FzZSBcInNjYWxpbmdcIjoge1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGggPSBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aC5TQ0FMRTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJwb3NpdGlvblwiOiB7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCA9IEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLlRSQU5TTEFUSU9OO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcInJvdGF0aW9uXCI6IHtcclxuICAgICAgICAgICAgICAgIGRhdGFBY2Nlc3NvclR5cGUgPSBBY2Nlc3NvclR5cGUuVkVDNDtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoID0gQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGguUk9UQVRJT047XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwicm90YXRpb25RdWF0ZXJuaW9uXCI6IHtcclxuICAgICAgICAgICAgICAgIGRhdGFBY2Nlc3NvclR5cGUgPSBBY2Nlc3NvclR5cGUuVkVDNDtcclxuICAgICAgICAgICAgICAgIHVzZVF1YXRlcm5pb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGggPSBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aC5ST1RBVElPTjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJpbmZsdWVuY2VcIjoge1xyXG4gICAgICAgICAgICAgICAgZGF0YUFjY2Vzc29yVHlwZSA9IEFjY2Vzc29yVHlwZS5TQ0FMQVI7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCA9IEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLldFSUdIVFM7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgICAgICBUb29scy5FcnJvcihgVW5zdXBwb3J0ZWQgYW5pbWF0YWJsZSBwcm9wZXJ0eSAke3Byb3BlcnR5WzBdfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4geyBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aDogYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsIGRhdGFBY2Nlc3NvclR5cGU6IGRhdGFBY2Nlc3NvclR5cGUsIHVzZVF1YXRlcm5pb246IHVzZVF1YXRlcm5pb24gfTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBUb29scy5FcnJvcihcImFuaW1hdGlvbiBjaGFubmVsIHRhcmdldCBwYXRoIGFuZCBkYXRhIGFjY2Vzc29yIHR5cGUgY291bGQgYmUgZGVkdWNlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaWdub3JlXHJcbiAgICAgKiBDcmVhdGUgbm9kZSBhbmltYXRpb25zIGZyb20gdGhlIHRyYW5zZm9ybSBub2RlIGFuaW1hdGlvbnNcclxuICAgICAqIEBwYXJhbSBiYWJ5bG9uTm9kZVxyXG4gICAgICogQHBhcmFtIHJ1bnRpbWVHTFRGQW5pbWF0aW9uXHJcbiAgICAgKiBAcGFyYW0gaWRsZUdMVEZBbmltYXRpb25zXHJcbiAgICAgKiBAcGFyYW0gbm9kZU1hcFxyXG4gICAgICogQHBhcmFtIG5vZGVzXHJcbiAgICAgKiBAcGFyYW0gYnVmZmVyTWFuYWdlclxyXG4gICAgICogQHBhcmFtIGJ1ZmZlclZpZXdzXHJcbiAgICAgKiBAcGFyYW0gYWNjZXNzb3JzXHJcbiAgICAgKiBAcGFyYW0gYW5pbWF0aW9uU2FtcGxlUmF0ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIF9DcmVhdGVOb2RlQW5pbWF0aW9uRnJvbU5vZGVBbmltYXRpb25zKFxyXG4gICAgICAgIGJhYnlsb25Ob2RlOiBOb2RlLFxyXG4gICAgICAgIHJ1bnRpbWVHTFRGQW5pbWF0aW9uOiBJQW5pbWF0aW9uLFxyXG4gICAgICAgIGlkbGVHTFRGQW5pbWF0aW9uczogSUFuaW1hdGlvbltdLFxyXG4gICAgICAgIG5vZGVNYXA6IE1hcDxOb2RlLCBudW1iZXI+LFxyXG4gICAgICAgIG5vZGVzOiBJTm9kZVtdLFxyXG4gICAgICAgIGJ1ZmZlck1hbmFnZXI6IEJ1ZmZlck1hbmFnZXIsXHJcbiAgICAgICAgYnVmZmVyVmlld3M6IElCdWZmZXJWaWV3W10sXHJcbiAgICAgICAgYWNjZXNzb3JzOiBJQWNjZXNzb3JbXSxcclxuICAgICAgICBhbmltYXRpb25TYW1wbGVSYXRlOiBudW1iZXIsXHJcbiAgICAgICAgdXNlUmlnaHRIYW5kZWQ6IGJvb2xlYW4sXHJcbiAgICAgICAgc2hvdWxkRXhwb3J0QW5pbWF0aW9uPzogKGFuaW1hdGlvbjogQW5pbWF0aW9uKSA9PiBib29sZWFuXHJcbiAgICApIHtcclxuICAgICAgICBsZXQgZ2xURkFuaW1hdGlvbjogSUFuaW1hdGlvbjtcclxuICAgICAgICBpZiAoX0dMVEZBbmltYXRpb24uX0lzVHJhbnNmb3JtYWJsZShiYWJ5bG9uTm9kZSkpIHtcclxuICAgICAgICAgICAgaWYgKGJhYnlsb25Ob2RlLmFuaW1hdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYW5pbWF0aW9uIG9mIGJhYnlsb25Ob2RlLmFuaW1hdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2hvdWxkRXhwb3J0QW5pbWF0aW9uICYmICFzaG91bGRFeHBvcnRBbmltYXRpb24oYW5pbWF0aW9uKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYW5pbWF0aW9uSW5mbyA9IF9HTFRGQW5pbWF0aW9uLl9EZWR1Y2VBbmltYXRpb25JbmZvKGFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFuaW1hdGlvbkluZm8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2xURkFuaW1hdGlvbiA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGFuaW1hdGlvbi5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FtcGxlcnM6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbm5lbHM6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfR0xURkFuaW1hdGlvbi5fQWRkQW5pbWF0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7YW5pbWF0aW9uLm5hbWV9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi5oYXNSdW5uaW5nUnVudGltZUFuaW1hdGlvbnMgPyBydW50aW1lR0xURkFuaW1hdGlvbiA6IGdsVEZBbmltYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uTm9kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkluZm8uZGF0YUFjY2Vzc29yVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkluZm8uYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlTWFwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyTWFuYWdlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlclZpZXdzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXNzb3JzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uSW5mby51c2VRdWF0ZXJuaW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uU2FtcGxlUmF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZVJpZ2h0SGFuZGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnbFRGQW5pbWF0aW9uLnNhbXBsZXJzLmxlbmd0aCAmJiBnbFRGQW5pbWF0aW9uLmNoYW5uZWxzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRsZUdMVEZBbmltYXRpb25zLnB1c2goZ2xURkFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaWdub3JlXHJcbiAgICAgKiBDcmVhdGUgaW5kaXZpZHVhbCBtb3JwaCBhbmltYXRpb25zIGZyb20gdGhlIG1lc2gncyBtb3JwaCB0YXJnZXQgYW5pbWF0aW9uIHRyYWNrc1xyXG4gICAgICogQHBhcmFtIGJhYnlsb25Ob2RlXHJcbiAgICAgKiBAcGFyYW0gcnVudGltZUdMVEZBbmltYXRpb25cclxuICAgICAqIEBwYXJhbSBpZGxlR0xURkFuaW1hdGlvbnNcclxuICAgICAqIEBwYXJhbSBub2RlTWFwXHJcbiAgICAgKiBAcGFyYW0gbm9kZXNcclxuICAgICAqIEBwYXJhbSBidWZmZXJNYW5hZ2VyXHJcbiAgICAgKiBAcGFyYW0gYnVmZmVyVmlld3NcclxuICAgICAqIEBwYXJhbSBhY2Nlc3NvcnNcclxuICAgICAqIEBwYXJhbSBhbmltYXRpb25TYW1wbGVSYXRlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgX0NyZWF0ZU1vcnBoVGFyZ2V0QW5pbWF0aW9uRnJvbU1vcnBoVGFyZ2V0QW5pbWF0aW9ucyhcclxuICAgICAgICBiYWJ5bG9uTm9kZTogTm9kZSxcclxuICAgICAgICBydW50aW1lR0xURkFuaW1hdGlvbjogSUFuaW1hdGlvbixcclxuICAgICAgICBpZGxlR0xURkFuaW1hdGlvbnM6IElBbmltYXRpb25bXSxcclxuICAgICAgICBub2RlTWFwOiBNYXA8Tm9kZSwgbnVtYmVyPixcclxuICAgICAgICBub2RlczogSU5vZGVbXSxcclxuICAgICAgICBidWZmZXJNYW5hZ2VyOiBCdWZmZXJNYW5hZ2VyLFxyXG4gICAgICAgIGJ1ZmZlclZpZXdzOiBJQnVmZmVyVmlld1tdLFxyXG4gICAgICAgIGFjY2Vzc29yczogSUFjY2Vzc29yW10sXHJcbiAgICAgICAgYW5pbWF0aW9uU2FtcGxlUmF0ZTogbnVtYmVyLFxyXG4gICAgICAgIHVzZVJpZ2h0SGFuZGVkOiBib29sZWFuLFxyXG4gICAgICAgIHNob3VsZEV4cG9ydEFuaW1hdGlvbj86IChhbmltYXRpb246IEFuaW1hdGlvbikgPT4gYm9vbGVhblxyXG4gICAgKSB7XHJcbiAgICAgICAgbGV0IGdsVEZBbmltYXRpb246IElBbmltYXRpb247XHJcbiAgICAgICAgaWYgKGJhYnlsb25Ob2RlIGluc3RhbmNlb2YgTWVzaCkge1xyXG4gICAgICAgICAgICBjb25zdCBtb3JwaFRhcmdldE1hbmFnZXIgPSBiYWJ5bG9uTm9kZS5tb3JwaFRhcmdldE1hbmFnZXI7XHJcbiAgICAgICAgICAgIGlmIChtb3JwaFRhcmdldE1hbmFnZXIpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbW9ycGhUYXJnZXRNYW5hZ2VyLm51bVRhcmdldHM7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vcnBoVGFyZ2V0ID0gbW9ycGhUYXJnZXRNYW5hZ2VyLmdldFRhcmdldChpKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGFuaW1hdGlvbiBvZiBtb3JwaFRhcmdldC5hbmltYXRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaG91bGRFeHBvcnRBbmltYXRpb24gJiYgIXNob3VsZEV4cG9ydEFuaW1hdGlvbihhbmltYXRpb24pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21iaW5lZEFuaW1hdGlvbiA9IG5ldyBBbmltYXRpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHthbmltYXRpb24ubmFtZX1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpbmZsdWVuY2VcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi5mcmFtZVBlclNlY29uZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi5kYXRhVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi5sb29wTW9kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi5lbmFibGVCbGVuZGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21iaW5lZEFuaW1hdGlvbktleXM6IElBbmltYXRpb25LZXlbXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhbmltYXRpb25LZXlzID0gYW5pbWF0aW9uLmdldEtleXMoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYW5pbWF0aW9uS2V5cy5sZW5ndGg7ICsraikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYW5pbWF0aW9uS2V5ID0gYW5pbWF0aW9uS2V5c1tqXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgbW9ycGhUYXJnZXRNYW5hZ2VyLm51bVRhcmdldHM7ICsraykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrID09IGkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tYmluZWRBbmltYXRpb25LZXlzLnB1c2goYW5pbWF0aW9uS2V5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21iaW5lZEFuaW1hdGlvbktleXMucHVzaCh7IGZyYW1lOiBhbmltYXRpb25LZXkuZnJhbWUsIHZhbHVlOiAwIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21iaW5lZEFuaW1hdGlvbi5zZXRLZXlzKGNvbWJpbmVkQW5pbWF0aW9uS2V5cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFuaW1hdGlvbkluZm8gPSBfR0xURkFuaW1hdGlvbi5fRGVkdWNlQW5pbWF0aW9uSW5mbyhjb21iaW5lZEFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbmltYXRpb25JbmZvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbFRGQW5pbWF0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGNvbWJpbmVkQW5pbWF0aW9uLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FtcGxlcnM6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5uZWxzOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfR0xURkFuaW1hdGlvbi5fQWRkQW5pbWF0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi5oYXNSdW5uaW5nUnVudGltZUFuaW1hdGlvbnMgPyBydW50aW1lR0xURkFuaW1hdGlvbiA6IGdsVEZBbmltYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFieWxvbk5vZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tYmluZWRBbmltYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uSW5mby5kYXRhQWNjZXNzb3JUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkluZm8uYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZU1hcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZmZXJNYW5hZ2VyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlclZpZXdzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY2Vzc29ycyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25JbmZvLnVzZVF1YXRlcm5pb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uU2FtcGxlUmF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VSaWdodEhhbmRlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3JwaFRhcmdldE1hbmFnZXIubnVtVGFyZ2V0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnbFRGQW5pbWF0aW9uLnNhbXBsZXJzLmxlbmd0aCAmJiBnbFRGQW5pbWF0aW9uLmNoYW5uZWxzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkbGVHTFRGQW5pbWF0aW9ucy5wdXNoKGdsVEZBbmltYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKiBDcmVhdGUgbm9kZSBhbmQgbW9ycGggYW5pbWF0aW9ucyBmcm9tIHRoZSBhbmltYXRpb24gZ3JvdXBzXHJcbiAgICAgKiBAcGFyYW0gYmFieWxvblNjZW5lXHJcbiAgICAgKiBAcGFyYW0gZ2xURkFuaW1hdGlvbnNcclxuICAgICAqIEBwYXJhbSBub2RlTWFwXHJcbiAgICAgKiBAcGFyYW0gbm9kZXNcclxuICAgICAqIEBwYXJhbSBidWZmZXJNYW5hZ2VyXHJcbiAgICAgKiBAcGFyYW0gYnVmZmVyVmlld3NcclxuICAgICAqIEBwYXJhbSBhY2Nlc3NvcnNcclxuICAgICAqIEBwYXJhbSBhbmltYXRpb25TYW1wbGVSYXRlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgX0NyZWF0ZU5vZGVBbmRNb3JwaEFuaW1hdGlvbkZyb21BbmltYXRpb25Hcm91cHMoXHJcbiAgICAgICAgYmFieWxvblNjZW5lOiBTY2VuZSxcclxuICAgICAgICBnbFRGQW5pbWF0aW9uczogSUFuaW1hdGlvbltdLFxyXG4gICAgICAgIG5vZGVNYXA6IE1hcDxOb2RlLCBudW1iZXI+LFxyXG4gICAgICAgIGJ1ZmZlck1hbmFnZXI6IEJ1ZmZlck1hbmFnZXIsXHJcbiAgICAgICAgYnVmZmVyVmlld3M6IElCdWZmZXJWaWV3W10sXHJcbiAgICAgICAgYWNjZXNzb3JzOiBJQWNjZXNzb3JbXSxcclxuICAgICAgICBhbmltYXRpb25TYW1wbGVSYXRlOiBudW1iZXIsXHJcbiAgICAgICAgbGVmdEhhbmRlZE5vZGVzOiBTZXQ8Tm9kZT4sXHJcbiAgICAgICAgc2hvdWxkRXhwb3J0QW5pbWF0aW9uPzogKGFuaW1hdGlvbjogQW5pbWF0aW9uKSA9PiBib29sZWFuXHJcbiAgICApIHtcclxuICAgICAgICBsZXQgZ2xURkFuaW1hdGlvbjogSUFuaW1hdGlvbjtcclxuICAgICAgICBpZiAoYmFieWxvblNjZW5lLmFuaW1hdGlvbkdyb3Vwcykge1xyXG4gICAgICAgICAgICBjb25zdCBhbmltYXRpb25Hcm91cHMgPSBiYWJ5bG9uU2NlbmUuYW5pbWF0aW9uR3JvdXBzO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGFuaW1hdGlvbkdyb3VwIG9mIGFuaW1hdGlvbkdyb3Vwcykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbW9ycGhBbmltYXRpb25zOiBNYXA8TWVzaCwgTWFwPE1vcnBoVGFyZ2V0LCBBbmltYXRpb24+PiA9IG5ldyBNYXAoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNhbXBsZUFuaW1hdGlvbnM6IE1hcDxNZXNoLCBBbmltYXRpb24+ID0gbmV3IE1hcCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbW9ycGhBbmltYXRpb25NZXNoZXM6IFNldDxNZXNoPiA9IG5ldyBTZXQoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFuaW1hdGlvbkdyb3VwRnJhbWVEaWZmID0gYW5pbWF0aW9uR3JvdXAudG8gLSBhbmltYXRpb25Hcm91cC5mcm9tO1xyXG4gICAgICAgICAgICAgICAgZ2xURkFuaW1hdGlvbiA9IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBhbmltYXRpb25Hcm91cC5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGNoYW5uZWxzOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICBzYW1wbGVyczogW10sXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbmltYXRpb25Hcm91cC50YXJnZXRlZEFuaW1hdGlvbnMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRBbmltYXRpb24gPSBhbmltYXRpb25Hcm91cC50YXJnZXRlZEFuaW1hdGlvbnNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gdGFyZ2V0QW5pbWF0aW9uLnRhcmdldDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhbmltYXRpb24gPSB0YXJnZXRBbmltYXRpb24uYW5pbWF0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzaG91bGRFeHBvcnRBbmltYXRpb24gJiYgIXNob3VsZEV4cG9ydEFuaW1hdGlvbihhbmltYXRpb24pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udmVydFRvUmlnaHRIYW5kZWQgPSBsZWZ0SGFuZGVkTm9kZXMuaGFzKHRhcmdldCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9Jc1RyYW5zZm9ybWFibGUodGFyZ2V0KSB8fCAodGFyZ2V0Lmxlbmd0aCA9PT0gMSAmJiB0aGlzLl9Jc1RyYW5zZm9ybWFibGUodGFyZ2V0WzBdKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYW5pbWF0aW9uSW5mbyA9IF9HTFRGQW5pbWF0aW9uLl9EZWR1Y2VBbmltYXRpb25JbmZvKHRhcmdldEFuaW1hdGlvbi5hbmltYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYW5pbWF0aW9uSW5mbykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmFieWxvblRyYW5zZm9ybU5vZGUgPSB0aGlzLl9Jc1RyYW5zZm9ybWFibGUodGFyZ2V0KSA/IHRhcmdldCA6IHRoaXMuX0lzVHJhbnNmb3JtYWJsZSh0YXJnZXRbMF0pID8gdGFyZ2V0WzBdIDogbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiYWJ5bG9uVHJhbnNmb3JtTm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9HTFRGQW5pbWF0aW9uLl9BZGRBbmltYXRpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2FuaW1hdGlvbi5uYW1lfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsVEZBbmltYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhYnlsb25UcmFuc2Zvcm1Ob2RlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkluZm8uZGF0YUFjY2Vzc29yVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uSW5mby5hbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZU1hcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyTWFuYWdlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyVmlld3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY2Vzc29ycyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uSW5mby51c2VRdWF0ZXJuaW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25TYW1wbGVSYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb252ZXJ0VG9SaWdodEhhbmRlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldCBpbnN0YW5jZW9mIE1vcnBoVGFyZ2V0IHx8ICh0YXJnZXQubGVuZ3RoID09PSAxICYmIHRhcmdldFswXSBpbnN0YW5jZW9mIE1vcnBoVGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhbmltYXRpb25JbmZvID0gX0dMVEZBbmltYXRpb24uX0RlZHVjZUFuaW1hdGlvbkluZm8odGFyZ2V0QW5pbWF0aW9uLmFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbmltYXRpb25JbmZvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBiYWJ5bG9uTW9ycGhUYXJnZXQgPSB0YXJnZXQgaW5zdGFuY2VvZiBNb3JwaFRhcmdldCA/IHRhcmdldCA6ICh0YXJnZXRbMF0gYXMgTW9ycGhUYXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJhYnlsb25Nb3JwaFRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhYnlsb25Nb3JwaFRhcmdldE1hbmFnZXIgPSBiYWJ5bG9uU2NlbmUubW9ycGhUYXJnZXRNYW5hZ2Vycy5maW5kKChtb3JwaFRhcmdldE1hbmFnZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBtb3JwaFRhcmdldE1hbmFnZXIubnVtVGFyZ2V0czsgKytqKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9ycGhUYXJnZXRNYW5hZ2VyLmdldFRhcmdldChqKSA9PT0gYmFieWxvbk1vcnBoVGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiYWJ5bG9uTW9ycGhUYXJnZXRNYW5hZ2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhYnlsb25NZXNoID0gYmFieWxvblNjZW5lLm1lc2hlcy5maW5kKChtZXNoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKG1lc2ggYXMgTWVzaCkubW9ycGhUYXJnZXRNYW5hZ2VyID09PSBiYWJ5bG9uTW9ycGhUYXJnZXRNYW5hZ2VyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSBhcyBNZXNoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmFieWxvbk1lc2gpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbW9ycGhBbmltYXRpb25zLmhhcyhiYWJ5bG9uTWVzaCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3JwaEFuaW1hdGlvbnMuc2V0KGJhYnlsb25NZXNoLCBuZXcgTWFwKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9ycGhBbmltYXRpb25zLmdldChiYWJ5bG9uTWVzaCk/LnNldChiYWJ5bG9uTW9ycGhUYXJnZXQsIGFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3JwaEFuaW1hdGlvbk1lc2hlcy5hZGQoYmFieWxvbk1lc2gpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FtcGxlQW5pbWF0aW9ucy5zZXQoYmFieWxvbk1lc2gsIGFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIGlzIHRoZSBwbGFjZSBmb3IgdGhlIEtIUl9hbmltYXRpb25fcG9pbnRlci5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBtb3JwaEFuaW1hdGlvbk1lc2hlcy5mb3JFYWNoKChtZXNoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9ycGhUYXJnZXRNYW5hZ2VyID0gbWVzaC5tb3JwaFRhcmdldE1hbmFnZXIhO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb21iaW5lZEFuaW1hdGlvbkdyb3VwOiBOdWxsYWJsZTxBbmltYXRpb24+ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhbmltYXRpb25LZXlzOiBJQW5pbWF0aW9uS2V5W10gPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzYW1wbGVBbmltYXRpb24gPSBzYW1wbGVBbmltYXRpb25zLmdldChtZXNoKSE7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2FtcGxlQW5pbWF0aW9uS2V5cyA9IHNhbXBsZUFuaW1hdGlvbi5nZXRLZXlzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbnVtQW5pbWF0aW9uS2V5cyA9IHNhbXBsZUFuaW1hdGlvbktleXMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIER1ZSB0byBob3cgZ2xURiBleHBlY3RzIG1vcnBoIHRhcmdldCBhbmltYXRpb24gZGF0YSB0byBiZSBmb3JtYXR0ZWQsIHdlIG5lZWQgdG8gcmVhcnJhbmdlIHRoZSBpbmRpdmlkdWFsIG1vcnBoIHRhcmdldCBhbmltYXRpb24gdHJhY2tzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNoIHRoYXQgd2UgaGF2ZSBhIHNpbmdsZSBhbmltYXRpb24sIHdoZXJlIGEgZ2l2ZW4ga2V5ZnJhbWUgaW5wdXQgdmFsdWUgaGFzIHN1Y2Nlc3NpdmUgb3V0cHV0IHZhbHVlcyBmb3IgZWFjaCBtb3JwaCB0YXJnZXQgYmVsb25naW5nIHRvIHRoZSBtYW5hZ2VyLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9zcGVjaWZpY2F0aW9uLzIuMCNhbmltYXRpb25zXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBXZSBkbyB0aGlzIHZpYSBjb25zdHJ1Y3RpbmcgYSBuZXcgQW5pbWF0aW9uIHRyYWNrLCBhbmQgaW50ZXJsZWF2aW5nIHRoZSBmcmFtZXMgb2YgZWFjaCBtb3JwaCB0YXJnZXQgYW5pbWF0aW9uIHRyYWNrIGluIHRoZSBjdXJyZW50IEFuaW1hdGlvbiBHcm91cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBXZSByZXVzZSB0aGUgQmFieWxvbiBBbmltYXRpb24gZGF0YSBzdHJ1Y3R1cmUgZm9yIGVhc2Ugb2YgaGFuZGxpbmcgZXhwb3J0IG9mIGN1YmljIHNwbGluZSBhbmltYXRpb24ga2V5cywgYW5kIHRvIHJldXNlIHRoZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZyBfR0xURkFuaW1hdGlvbi5BZGRBbmltYXRpb24gY29kZXBhdGggd2l0aCBtaW5pbWFsIG1vZGlmaWNhdGlvbiwgaG93ZXZlciB0aGUgY29uc3RydWN0ZWQgQmFieWxvbiBBbmltYXRpb24gaXMgTk9UIGludGVuZGVkIGZvciB1c2UgaW4tZW5naW5lLlxyXG4gICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1BbmltYXRpb25LZXlzOyArK2kpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBtb3JwaFRhcmdldE1hbmFnZXIubnVtVGFyZ2V0czsgKytqKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtb3JwaFRhcmdldCA9IG1vcnBoVGFyZ2V0TWFuYWdlci5nZXRUYXJnZXQoaik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhbmltYXRpb25zQnlNb3JwaFRhcmdldCA9IG1vcnBoQW5pbWF0aW9ucy5nZXQobWVzaCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYW5pbWF0aW9uc0J5TW9ycGhUYXJnZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtb3JwaFRhcmdldEFuaW1hdGlvbiA9IGFuaW1hdGlvbnNCeU1vcnBoVGFyZ2V0LmdldChtb3JwaFRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vcnBoVGFyZ2V0QW5pbWF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY29tYmluZWRBbmltYXRpb25Hcm91cCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tYmluZWRBbmltYXRpb25Hcm91cCA9IG5ldyBBbmltYXRpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7YW5pbWF0aW9uR3JvdXAubmFtZX1fJHttZXNoLm5hbWV9X01vcnBoV2VpZ2h0QW5pbWF0aW9uYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImluZmx1ZW5jZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vcnBoVGFyZ2V0QW5pbWF0aW9uLmZyYW1lUGVyU2Vjb25kLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFuaW1hdGlvbi5BTklNQVRJT05UWVBFX0ZMT0FULFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vcnBoVGFyZ2V0QW5pbWF0aW9uLmxvb3BNb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vcnBoVGFyZ2V0QW5pbWF0aW9uLmVuYWJsZUJsZW5kaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbktleXMucHVzaChtb3JwaFRhcmdldEFuaW1hdGlvbi5nZXRLZXlzKClbaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbktleXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFtZTogYW5pbWF0aW9uR3JvdXAuZnJvbSArIChhbmltYXRpb25Hcm91cEZyYW1lRGlmZiAvIG51bUFuaW1hdGlvbktleXMpICogaSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBtb3JwaFRhcmdldC5pbmZsdWVuY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpblRhbmdlbnQ6IHNhbXBsZUFuaW1hdGlvbktleXNbMF0uaW5UYW5nZW50ID8gMCA6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dFRhbmdlbnQ6IHNhbXBsZUFuaW1hdGlvbktleXNbMF0ub3V0VGFuZ2VudCA/IDAgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb21iaW5lZEFuaW1hdGlvbkdyb3VwIS5zZXRLZXlzKGFuaW1hdGlvbktleXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFuaW1hdGlvbkluZm8gPSBfR0xURkFuaW1hdGlvbi5fRGVkdWNlQW5pbWF0aW9uSW5mbyhjb21iaW5lZEFuaW1hdGlvbkdyb3VwISk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFuaW1hdGlvbkluZm8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX0dMVEZBbmltYXRpb24uX0FkZEFuaW1hdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2FuaW1hdGlvbkdyb3VwLm5hbWV9XyR7bWVzaC5uYW1lfV9Nb3JwaFdlaWdodEFuaW1hdGlvbmAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbFRGQW5pbWF0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzaCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbWJpbmVkQW5pbWF0aW9uR3JvdXAhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uSW5mby5kYXRhQWNjZXNzb3JUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uSW5mby5hbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVNYXAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZmZXJNYW5hZ2VyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyVmlld3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2Nlc3NvcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25JbmZvLnVzZVF1YXRlcm5pb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25TYW1wbGVSYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3JwaFRhcmdldE1hbmFnZXI/Lm51bVRhcmdldHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmIChnbFRGQW5pbWF0aW9uLmNoYW5uZWxzLmxlbmd0aCAmJiBnbFRGQW5pbWF0aW9uLnNhbXBsZXJzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGdsVEZBbmltYXRpb25zLnB1c2goZ2xURkFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX0FkZEFuaW1hdGlvbihcclxuICAgICAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgZ2xURkFuaW1hdGlvbjogSUFuaW1hdGlvbixcclxuICAgICAgICBiYWJ5bG9uVHJhbnNmb3JtTm9kZTogTm9kZSxcclxuICAgICAgICBhbmltYXRpb246IEFuaW1hdGlvbixcclxuICAgICAgICBkYXRhQWNjZXNzb3JUeXBlOiBBY2Nlc3NvclR5cGUsXHJcbiAgICAgICAgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGg6IEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLFxyXG4gICAgICAgIG5vZGVNYXA6IE1hcDxOb2RlLCBudW1iZXI+LFxyXG4gICAgICAgIGJ1ZmZlck1hbmFnZXI6IEJ1ZmZlck1hbmFnZXIsXHJcbiAgICAgICAgYnVmZmVyVmlld3M6IElCdWZmZXJWaWV3W10sXHJcbiAgICAgICAgYWNjZXNzb3JzOiBJQWNjZXNzb3JbXSxcclxuICAgICAgICB1c2VRdWF0ZXJuaW9uOiBib29sZWFuLFxyXG4gICAgICAgIGFuaW1hdGlvblNhbXBsZVJhdGU6IG51bWJlcixcclxuICAgICAgICBjb252ZXJ0VG9SaWdodEhhbmRlZDogYm9vbGVhbixcclxuICAgICAgICBtb3JwaEFuaW1hdGlvbkNoYW5uZWxzPzogbnVtYmVyXHJcbiAgICApIHtcclxuICAgICAgICBjb25zdCBhbmltYXRpb25EYXRhID0gX0dMVEZBbmltYXRpb24uX0NyZWF0ZU5vZGVBbmltYXRpb24oYmFieWxvblRyYW5zZm9ybU5vZGUsIGFuaW1hdGlvbiwgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsIHVzZVF1YXRlcm5pb24sIGFuaW1hdGlvblNhbXBsZVJhdGUpO1xyXG4gICAgICAgIGxldCBidWZmZXJWaWV3OiBJQnVmZmVyVmlldztcclxuICAgICAgICBsZXQgYWNjZXNzb3I6IElBY2Nlc3NvcjtcclxuICAgICAgICBsZXQga2V5ZnJhbWVBY2Nlc3NvckluZGV4OiBudW1iZXI7XHJcbiAgICAgICAgbGV0IGRhdGFBY2Nlc3NvckluZGV4OiBudW1iZXI7XHJcbiAgICAgICAgbGV0IGFuaW1hdGlvblNhbXBsZXI6IElBbmltYXRpb25TYW1wbGVyO1xyXG4gICAgICAgIGxldCBhbmltYXRpb25DaGFubmVsOiBJQW5pbWF0aW9uQ2hhbm5lbDtcclxuXHJcbiAgICAgICAgaWYgKGFuaW1hdGlvbkRhdGEpIHtcclxuICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICogTm93IHRoYXQgd2UgaGF2ZSB0aGUgZ2xURiBjb252ZXJ0ZWQgbW9ycGggdGFyZ2V0IGFuaW1hdGlvbiBkYXRhLFxyXG4gICAgICAgICAgICAgKiB3ZSBjYW4gcmVtb3ZlIHJlZHVuZGFudCBpbnB1dCBkYXRhIHNvIHRoYXQgd2UgaGF2ZSBuIGlucHV0IGZyYW1lcyxcclxuICAgICAgICAgICAgICogYW5kIG1vcnBoQW5pbWF0aW9uQ2hhbm5lbHMgKiBuIG91dHB1dCBmcmFtZXNcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGlmIChtb3JwaEFuaW1hdGlvbkNoYW5uZWxzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRJbnB1dDogbnVtYmVyID0gMDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0lucHV0czogbnVtYmVyW10gPSBbXTtcclxuICAgICAgICAgICAgICAgIHdoaWxlIChhbmltYXRpb25EYXRhLmlucHV0cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudElucHV0ID0gYW5pbWF0aW9uRGF0YS5pbnB1dHMuc2hpZnQoKSE7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ICUgbW9ycGhBbmltYXRpb25DaGFubmVscyA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0lucHV0cy5wdXNoKGN1cnJlbnRJbnB1dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4Kys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb25EYXRhLmlucHV0cyA9IG5ld0lucHV0cztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3Qgbm9kZUluZGV4ID0gbm9kZU1hcC5nZXQoYmFieWxvblRyYW5zZm9ybU5vZGUpO1xyXG5cclxuICAgICAgICAgICAgLy8gQ3JlYXRlIGJ1ZmZlciB2aWV3IGFuZCBhY2Nlc3NvciBmb3Iga2V5IGZyYW1lcy5cclxuICAgICAgICAgICAgY29uc3QgaW5wdXREYXRhID0gbmV3IEZsb2F0MzJBcnJheShhbmltYXRpb25EYXRhLmlucHV0cyk7XHJcbiAgICAgICAgICAgIGJ1ZmZlclZpZXcgPSBidWZmZXJNYW5hZ2VyLmNyZWF0ZUJ1ZmZlclZpZXcoaW5wdXREYXRhKTtcclxuICAgICAgICAgICAgYWNjZXNzb3IgPSBidWZmZXJNYW5hZ2VyLmNyZWF0ZUFjY2Vzc29yKGJ1ZmZlclZpZXcsIEFjY2Vzc29yVHlwZS5TQ0FMQVIsIEFjY2Vzc29yQ29tcG9uZW50VHlwZS5GTE9BVCwgYW5pbWF0aW9uRGF0YS5pbnB1dHMubGVuZ3RoLCB1bmRlZmluZWQsIHtcclxuICAgICAgICAgICAgICAgIG1pbjogW2FuaW1hdGlvbkRhdGEuaW5wdXRzTWluXSxcclxuICAgICAgICAgICAgICAgIG1heDogW2FuaW1hdGlvbkRhdGEuaW5wdXRzTWF4XSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGFjY2Vzc29ycy5wdXNoKGFjY2Vzc29yKTtcclxuICAgICAgICAgICAga2V5ZnJhbWVBY2Nlc3NvckluZGV4ID0gYWNjZXNzb3JzLmxlbmd0aCAtIDE7XHJcblxyXG4gICAgICAgICAgICAvLyBQZXJmb3JtIGNvbnZlcnNpb25zIG9uIGtleWVkIHZhbHVlcyB3aGlsZSBhbHNvIGJ1aWxkaW5nIHRoZWlyIGJ1ZmZlci5cclxuICAgICAgICAgICAgY29uc3Qgcm90YXRpb25RdWF0ZXJuaW9uID0gbmV3IFF1YXRlcm5pb24oKTtcclxuICAgICAgICAgICAgY29uc3QgZXVsZXJWZWMzID0gbmV3IFZlY3RvcjMoKTtcclxuICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSBuZXcgVmVjdG9yMygpO1xyXG4gICAgICAgICAgICBjb25zdCBpc0NhbWVyYSA9IGJhYnlsb25UcmFuc2Zvcm1Ob2RlIGluc3RhbmNlb2YgQ2FtZXJhO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudENvdW50ID0gR2V0QWNjZXNzb3JFbGVtZW50Q291bnQoZGF0YUFjY2Vzc29yVHlwZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG91dHB1dERhdGEgPSBuZXcgRmxvYXQzMkFycmF5KGFuaW1hdGlvbkRhdGEub3V0cHV0cy5sZW5ndGggKiBlbGVtZW50Q291bnQpO1xyXG4gICAgICAgICAgICBhbmltYXRpb25EYXRhLm91dHB1dHMuZm9yRWFjaChmdW5jdGlvbiAob3V0cHV0OiBudW1iZXJbXSwgaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgICAgICAgICAgbGV0IG91dHB1dFRvV3JpdGU6IG51bWJlcltdID0gb3V0cHV0O1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbnZlcnRUb1JpZ2h0SGFuZGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLlRSQU5TTEFUSU9OOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVmVjdG9yMy5Gcm9tQXJyYXlUb1JlZihvdXRwdXQsIDAsIHBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnZlcnRUb1JpZ2h0SGFuZGVkUG9zaXRpb24ocG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24udG9BcnJheShvdXRwdXRUb1dyaXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLlJPVEFUSU9OOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG91dHB1dC5sZW5ndGggPT09IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBRdWF0ZXJuaW9uLkZyb21BcnJheVRvUmVmKG91dHB1dCwgMCwgcm90YXRpb25RdWF0ZXJuaW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0VG9Xcml0ZSA9IG5ldyBBcnJheSg0KTsgLy8gV2lsbCBuZWVkIDQsIG5vdCAzLCBmb3IgYSBxdWF0ZXJuaW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmVjdG9yMy5Gcm9tQXJyYXlUb1JlZihvdXRwdXQsIDAsIGV1bGVyVmVjMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUXVhdGVybmlvbi5Gcm9tRXVsZXJWZWN0b3JUb1JlZihldWxlclZlYzMsIHJvdGF0aW9uUXVhdGVybmlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzQ2FtZXJhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29udmVydENhbWVyYVJvdGF0aW9uVG9HTFRGKHJvdGF0aW9uUXVhdGVybmlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghUXVhdGVybmlvbi5Jc0lkZW50aXR5KHJvdGF0aW9uUXVhdGVybmlvbikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29udmVydFRvUmlnaHRIYW5kZWRSb3RhdGlvbihyb3RhdGlvblF1YXRlcm5pb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3RhdGlvblF1YXRlcm5pb24udG9BcnJheShvdXRwdXRUb1dyaXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLlJPVEFUSU9OOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG91dHB1dC5sZW5ndGggPT09IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBRdWF0ZXJuaW9uLkZyb21BcnJheVRvUmVmKG91dHB1dCwgMCwgcm90YXRpb25RdWF0ZXJuaW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0VG9Xcml0ZSA9IG5ldyBBcnJheSg0KTsgLy8gV2lsbCBuZWVkIDQsIG5vdCAzLCBmb3IgYSBxdWF0ZXJuaW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmVjdG9yMy5Gcm9tQXJyYXlUb1JlZihvdXRwdXQsIDAsIGV1bGVyVmVjMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUXVhdGVybmlvbi5Gcm9tRXVsZXJWZWN0b3JUb1JlZihldWxlclZlYzMsIHJvdGF0aW9uUXVhdGVybmlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzQ2FtZXJhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29udmVydENhbWVyYVJvdGF0aW9uVG9HTFRGKHJvdGF0aW9uUXVhdGVybmlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm90YXRpb25RdWF0ZXJuaW9uLnRvQXJyYXkob3V0cHV0VG9Xcml0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBvdXRwdXREYXRhLnNldChvdXRwdXRUb1dyaXRlLCBpbmRleCAqIGVsZW1lbnRDb3VudCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gQ3JlYXRlIGJ1ZmZlciB2aWV3IGFuZCBhY2Nlc3NvciBmb3Iga2V5ZWQgdmFsdWVzLlxyXG4gICAgICAgICAgICBidWZmZXJWaWV3ID0gYnVmZmVyTWFuYWdlci5jcmVhdGVCdWZmZXJWaWV3KG91dHB1dERhdGEpO1xyXG4gICAgICAgICAgICBhY2Nlc3NvciA9IGJ1ZmZlck1hbmFnZXIuY3JlYXRlQWNjZXNzb3IoYnVmZmVyVmlldywgZGF0YUFjY2Vzc29yVHlwZSwgQWNjZXNzb3JDb21wb25lbnRUeXBlLkZMT0FULCBhbmltYXRpb25EYXRhLm91dHB1dHMubGVuZ3RoKTtcclxuICAgICAgICAgICAgYWNjZXNzb3JzLnB1c2goYWNjZXNzb3IpO1xyXG4gICAgICAgICAgICBkYXRhQWNjZXNzb3JJbmRleCA9IGFjY2Vzc29ycy5sZW5ndGggLSAxO1xyXG5cclxuICAgICAgICAgICAgLy8gY3JlYXRlIHNhbXBsZXJcclxuICAgICAgICAgICAgYW5pbWF0aW9uU2FtcGxlciA9IHtcclxuICAgICAgICAgICAgICAgIGludGVycG9sYXRpb246IGFuaW1hdGlvbkRhdGEuc2FtcGxlckludGVycG9sYXRpb24sXHJcbiAgICAgICAgICAgICAgICBpbnB1dDoga2V5ZnJhbWVBY2Nlc3NvckluZGV4LFxyXG4gICAgICAgICAgICAgICAgb3V0cHV0OiBkYXRhQWNjZXNzb3JJbmRleCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZ2xURkFuaW1hdGlvbi5zYW1wbGVycy5wdXNoKGFuaW1hdGlvblNhbXBsZXIpO1xyXG5cclxuICAgICAgICAgICAgLy8gY3JlYXRlIGNoYW5uZWxcclxuICAgICAgICAgICAgYW5pbWF0aW9uQ2hhbm5lbCA9IHtcclxuICAgICAgICAgICAgICAgIHNhbXBsZXI6IGdsVEZBbmltYXRpb24uc2FtcGxlcnMubGVuZ3RoIC0gMSxcclxuICAgICAgICAgICAgICAgIHRhcmdldDoge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGU6IG5vZGVJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGdsVEZBbmltYXRpb24uY2hhbm5lbHMucHVzaChhbmltYXRpb25DaGFubmVsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBiYWtlZCBhbmltYXRpb25cclxuICAgICAqIEBwYXJhbSBiYWJ5bG9uVHJhbnNmb3JtTm9kZSBCYWJ5bG9uSlMgbWVzaFxyXG4gICAgICogQHBhcmFtIGFuaW1hdGlvbiBCYWJ5bG9uSlMgYW5pbWF0aW9uIGNvcnJlc3BvbmRpbmcgdG8gdGhlIEJhYnlsb25KUyBtZXNoXHJcbiAgICAgKiBAcGFyYW0gYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGggYW5pbWF0aW9uIHRhcmdldCBjaGFubmVsXHJcbiAgICAgKiBAcGFyYW0gbWluRnJhbWUgbWluaW11bSBhbmltYXRpb24gZnJhbWVcclxuICAgICAqIEBwYXJhbSBtYXhGcmFtZSBtYXhpbXVtIGFuaW1hdGlvbiBmcmFtZVxyXG4gICAgICogQHBhcmFtIGZwcyBmcmFtZXMgcGVyIHNlY29uZCBvZiB0aGUgYW5pbWF0aW9uXHJcbiAgICAgKiBAcGFyYW0gc2FtcGxlUmF0ZVxyXG4gICAgICogQHBhcmFtIGlucHV0cyBpbnB1dCBrZXkgZnJhbWVzIG9mIHRoZSBhbmltYXRpb25cclxuICAgICAqIEBwYXJhbSBvdXRwdXRzIG91dHB1dCBrZXkgZnJhbWUgZGF0YSBvZiB0aGUgYW5pbWF0aW9uXHJcbiAgICAgKiBAcGFyYW0gbWluTWF4RnJhbWVzXHJcbiAgICAgKiBAcGFyYW0gbWluTWF4RnJhbWVzLm1pblxyXG4gICAgICogQHBhcmFtIG1pbk1heEZyYW1lcy5tYXhcclxuICAgICAqIEBwYXJhbSB1c2VRdWF0ZXJuaW9uIHNwZWNpZmllcyBpZiBxdWF0ZXJuaW9ucyBzaG91bGQgYmUgdXNlZFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfQ3JlYXRlQmFrZWRBbmltYXRpb24oXHJcbiAgICAgICAgYmFieWxvblRyYW5zZm9ybU5vZGU6IE5vZGUsXHJcbiAgICAgICAgYW5pbWF0aW9uOiBBbmltYXRpb24sXHJcbiAgICAgICAgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGg6IEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLFxyXG4gICAgICAgIG1pbkZyYW1lOiBudW1iZXIsXHJcbiAgICAgICAgbWF4RnJhbWU6IG51bWJlcixcclxuICAgICAgICBmcHM6IG51bWJlcixcclxuICAgICAgICBzYW1wbGVSYXRlOiBudW1iZXIsXHJcbiAgICAgICAgaW5wdXRzOiBudW1iZXJbXSxcclxuICAgICAgICBvdXRwdXRzOiBudW1iZXJbXVtdLFxyXG4gICAgICAgIG1pbk1heEZyYW1lczogeyBtaW46IG51bWJlcjsgbWF4OiBudW1iZXIgfSxcclxuICAgICAgICB1c2VRdWF0ZXJuaW9uOiBib29sZWFuXHJcbiAgICApIHtcclxuICAgICAgICBsZXQgdmFsdWU6IG51bWJlciB8IFZlY3RvcjMgfCBRdWF0ZXJuaW9uO1xyXG4gICAgICAgIGNvbnN0IHF1YXRlcm5pb25DYWNoZTogUXVhdGVybmlvbiA9IFF1YXRlcm5pb24uSWRlbnRpdHkoKTtcclxuICAgICAgICBsZXQgcHJldmlvdXNUaW1lOiBOdWxsYWJsZTxudW1iZXI+ID0gbnVsbDtcclxuICAgICAgICBsZXQgdGltZTogbnVtYmVyO1xyXG4gICAgICAgIGxldCBtYXhVc2VkRnJhbWU6IE51bGxhYmxlPG51bWJlcj4gPSBudWxsO1xyXG4gICAgICAgIGxldCBjdXJyS2V5RnJhbWU6IE51bGxhYmxlPElBbmltYXRpb25LZXk+ID0gbnVsbDtcclxuICAgICAgICBsZXQgbmV4dEtleUZyYW1lOiBOdWxsYWJsZTxJQW5pbWF0aW9uS2V5PiA9IG51bGw7XHJcbiAgICAgICAgbGV0IHByZXZLZXlGcmFtZTogTnVsbGFibGU8SUFuaW1hdGlvbktleT4gPSBudWxsO1xyXG4gICAgICAgIGxldCBlbmRGcmFtZTogTnVsbGFibGU8bnVtYmVyPiA9IG51bGw7XHJcbiAgICAgICAgbWluTWF4RnJhbWVzLm1pbiA9IFRvb2xzLkZsb2F0Um91bmQobWluRnJhbWUgLyBmcHMpO1xyXG5cclxuICAgICAgICBjb25zdCBrZXlGcmFtZXMgPSBhbmltYXRpb24uZ2V0S2V5cygpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuZ3RoID0ga2V5RnJhbWVzLmxlbmd0aDsgaSA8IGxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIGVuZEZyYW1lID0gbnVsbDtcclxuICAgICAgICAgICAgY3VycktleUZyYW1lID0ga2V5RnJhbWVzW2ldO1xyXG5cclxuICAgICAgICAgICAgaWYgKGkgKyAxIDwgbGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBuZXh0S2V5RnJhbWUgPSBrZXlGcmFtZXNbaSArIDFdO1xyXG4gICAgICAgICAgICAgICAgaWYgKChjdXJyS2V5RnJhbWUudmFsdWUuZXF1YWxzICYmIGN1cnJLZXlGcmFtZS52YWx1ZS5lcXVhbHMobmV4dEtleUZyYW1lLnZhbHVlKSkgfHwgY3VycktleUZyYW1lLnZhbHVlID09PSBuZXh0S2V5RnJhbWUudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzZXQgdGhlIGZpcnN0IGZyYW1lIHRvIGl0c2VsZlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRGcmFtZSA9IGN1cnJLZXlGcmFtZS5mcmFtZTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuZEZyYW1lID0gbmV4dEtleUZyYW1lLmZyYW1lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gYXQgdGhlIGxhc3Qga2V5IGZyYW1lXHJcbiAgICAgICAgICAgICAgICBwcmV2S2V5RnJhbWUgPSBrZXlGcmFtZXNbaSAtIDFdO1xyXG4gICAgICAgICAgICAgICAgaWYgKChjdXJyS2V5RnJhbWUudmFsdWUuZXF1YWxzICYmIGN1cnJLZXlGcmFtZS52YWx1ZS5lcXVhbHMocHJldktleUZyYW1lLnZhbHVlKSkgfHwgY3VycktleUZyYW1lLnZhbHVlID09PSBwcmV2S2V5RnJhbWUudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5kRnJhbWUgPSBtYXhGcmFtZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZW5kRnJhbWUpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGYgPSBjdXJyS2V5RnJhbWUuZnJhbWU7IGYgPD0gZW5kRnJhbWU7IGYgKz0gc2FtcGxlUmF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWUgPSBUb29scy5GbG9hdFJvdW5kKGYgLyBmcHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aW1lID09PSBwcmV2aW91c1RpbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzVGltZSA9IHRpbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4VXNlZEZyYW1lID0gdGltZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXBlYXRDb3VudDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9vcE1vZGU6IGFuaW1hdGlvbi5sb29wTW9kZSxcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gYW5pbWF0aW9uLl9pbnRlcnBvbGF0ZShmLCBzdGF0ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIF9HTFRGQW5pbWF0aW9uLl9TZXRJbnRlcnBvbGF0ZWRWYWx1ZShiYWJ5bG9uVHJhbnNmb3JtTm9kZSwgdmFsdWUsIHRpbWUsIGFuaW1hdGlvbiwgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsIHF1YXRlcm5pb25DYWNoZSwgaW5wdXRzLCBvdXRwdXRzLCB1c2VRdWF0ZXJuaW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWF4VXNlZEZyYW1lKSB7XHJcbiAgICAgICAgICAgIG1pbk1heEZyYW1lcy5tYXggPSBtYXhVc2VkRnJhbWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9Db252ZXJ0RmFjdG9yVG9WZWN0b3IzT3JRdWF0ZXJuaW9uKFxyXG4gICAgICAgIGZhY3RvcjogbnVtYmVyLFxyXG4gICAgICAgIGJhYnlsb25UcmFuc2Zvcm1Ob2RlOiBOb2RlLFxyXG4gICAgICAgIGFuaW1hdGlvbjogQW5pbWF0aW9uLFxyXG4gICAgICAgIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoOiBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCxcclxuICAgICAgICB1c2VRdWF0ZXJuaW9uOiBib29sZWFuXHJcbiAgICApOiBWZWN0b3IzIHwgUXVhdGVybmlvbiB7XHJcbiAgICAgICAgY29uc3QgYmFzZVBvc2l0aW9uUm90YXRpb25PclNjYWxlID0gX0dMVEZBbmltYXRpb24uX0dldEJhc2VQb3NpdGlvblJvdGF0aW9uT3JTY2FsZShiYWJ5bG9uVHJhbnNmb3JtTm9kZSwgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsIHVzZVF1YXRlcm5pb24pO1xyXG4gICAgICAgIC8vIGhhbmRsZXMgc2luZ2xlIGNvbXBvbmVudCB4LCB5LCB6IG9yIHcgY29tcG9uZW50IGFuaW1hdGlvbiBieSB1c2luZyBhIGJhc2UgcHJvcGVydHkgYW5kIGFuaW1hdGluZyBvdmVyIGEgY29tcG9uZW50LlxyXG4gICAgICAgIGNvbnN0IHByb3BlcnR5ID0gYW5pbWF0aW9uLnRhcmdldFByb3BlcnR5LnNwbGl0KFwiLlwiKTtcclxuICAgICAgICBjb25zdCBjb21wb25lbnROYW1lID0gcHJvcGVydHkgPyBwcm9wZXJ0eVsxXSA6IFwiXCI7IC8vIHgsIHksIHosIG9yIHcgY29tcG9uZW50XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSB1c2VRdWF0ZXJuaW9uID8gUXVhdGVybmlvbi5Gcm9tQXJyYXkoYmFzZVBvc2l0aW9uUm90YXRpb25PclNjYWxlKS5ub3JtYWxpemUoKSA6IFZlY3RvcjMuRnJvbUFycmF5KGJhc2VQb3NpdGlvblJvdGF0aW9uT3JTY2FsZSk7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoY29tcG9uZW50TmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwieFwiOlxyXG4gICAgICAgICAgICBjYXNlIFwieVwiOlxyXG4gICAgICAgICAgICBjYXNlIFwielwiOiB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZVtjb21wb25lbnROYW1lXSA9IGZhY3RvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJ3XCI6IHtcclxuICAgICAgICAgICAgICAgICh2YWx1ZSBhcyBRdWF0ZXJuaW9uKS53ID0gZmFjdG9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICAgICAgVG9vbHMuRXJyb3IoYGdsVEZBbmltYXRpb246IFVuc3VwcG9ydGVkIGNvbXBvbmVudCBuYW1lIFwiJHtjb21wb25lbnROYW1lfVwiIWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX1NldEludGVycG9sYXRlZFZhbHVlKFxyXG4gICAgICAgIGJhYnlsb25UcmFuc2Zvcm1Ob2RlOiBOb2RlLFxyXG4gICAgICAgIHZhbHVlOiBudW1iZXIgfCBWZWN0b3IzIHwgUXVhdGVybmlvbixcclxuICAgICAgICB0aW1lOiBudW1iZXIsXHJcbiAgICAgICAgYW5pbWF0aW9uOiBBbmltYXRpb24sXHJcbiAgICAgICAgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGg6IEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLFxyXG4gICAgICAgIHF1YXRlcm5pb25DYWNoZTogUXVhdGVybmlvbixcclxuICAgICAgICBpbnB1dHM6IG51bWJlcltdLFxyXG4gICAgICAgIG91dHB1dHM6IG51bWJlcltdW10sXHJcbiAgICAgICAgdXNlUXVhdGVybmlvbjogYm9vbGVhblxyXG4gICAgKSB7XHJcbiAgICAgICAgbGV0IGNhY2hlVmFsdWU6IFZlY3RvcjMgfCBRdWF0ZXJuaW9uIHwgbnVtYmVyO1xyXG4gICAgICAgIGlucHV0cy5wdXNoKHRpbWUpO1xyXG5cclxuICAgICAgICBpZiAoYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGggPT09IEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLldFSUdIVFMpIHtcclxuICAgICAgICAgICAgb3V0cHV0cy5wdXNoKFt2YWx1ZSBhcyBudW1iZXJdKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGFuaW1hdGlvbi5kYXRhVHlwZSA9PT0gQW5pbWF0aW9uLkFOSU1BVElPTlRZUEVfRkxPQVQpIHtcclxuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLl9Db252ZXJ0RmFjdG9yVG9WZWN0b3IzT3JRdWF0ZXJuaW9uKHZhbHVlIGFzIG51bWJlciwgYmFieWxvblRyYW5zZm9ybU5vZGUsIGFuaW1hdGlvbiwgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsIHVzZVF1YXRlcm5pb24pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoID09PSBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aC5ST1RBVElPTikge1xyXG4gICAgICAgICAgICBpZiAodXNlUXVhdGVybmlvbikge1xyXG4gICAgICAgICAgICAgICAgcXVhdGVybmlvbkNhY2hlID0gdmFsdWUgYXMgUXVhdGVybmlvbjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNhY2hlVmFsdWUgPSB2YWx1ZSBhcyBWZWN0b3IzO1xyXG4gICAgICAgICAgICAgICAgUXVhdGVybmlvbi5Sb3RhdGlvbllhd1BpdGNoUm9sbFRvUmVmKGNhY2hlVmFsdWUueSwgY2FjaGVWYWx1ZS54LCBjYWNoZVZhbHVlLnosIHF1YXRlcm5pb25DYWNoZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3V0cHV0cy5wdXNoKHF1YXRlcm5pb25DYWNoZS5hc0FycmF5KCkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIHNjYWxpbmcgYW5kIHBvc2l0aW9uIGFuaW1hdGlvblxyXG4gICAgICAgICAgICBjYWNoZVZhbHVlID0gdmFsdWUgYXMgVmVjdG9yMztcclxuICAgICAgICAgICAgb3V0cHV0cy5wdXNoKGNhY2hlVmFsdWUuYXNBcnJheSgpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGxpbmVhciBhbmltYXRpb24gZnJvbSB0aGUgYW5pbWF0aW9uIGtleSBmcmFtZXNcclxuICAgICAqIEBwYXJhbSBiYWJ5bG9uVHJhbnNmb3JtTm9kZSBCYWJ5bG9uSlMgbWVzaFxyXG4gICAgICogQHBhcmFtIGFuaW1hdGlvbiBCYWJ5bG9uSlMgYW5pbWF0aW9uXHJcbiAgICAgKiBAcGFyYW0gYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGggVGhlIHRhcmdldCBhbmltYXRpb24gY2hhbm5lbFxyXG4gICAgICogQHBhcmFtIGlucHV0cyBBcnJheSB0byBzdG9yZSB0aGUga2V5IGZyYW1lIHRpbWVzXHJcbiAgICAgKiBAcGFyYW0gb3V0cHV0cyBBcnJheSB0byBzdG9yZSB0aGUga2V5IGZyYW1lIGRhdGFcclxuICAgICAqIEBwYXJhbSB1c2VRdWF0ZXJuaW9uIFNwZWNpZmllcyBpZiBxdWF0ZXJuaW9ucyBhcmUgdXNlZCBpbiB0aGUgYW5pbWF0aW9uXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIF9DcmVhdGVMaW5lYXJPclN0ZXBBbmltYXRpb24oXHJcbiAgICAgICAgYmFieWxvblRyYW5zZm9ybU5vZGU6IE5vZGUsXHJcbiAgICAgICAgYW5pbWF0aW9uOiBBbmltYXRpb24sXHJcbiAgICAgICAgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGg6IEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLFxyXG4gICAgICAgIGlucHV0czogbnVtYmVyW10sXHJcbiAgICAgICAgb3V0cHV0czogbnVtYmVyW11bXSxcclxuICAgICAgICB1c2VRdWF0ZXJuaW9uOiBib29sZWFuXHJcbiAgICApIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleUZyYW1lIG9mIGFuaW1hdGlvbi5nZXRLZXlzKCkpIHtcclxuICAgICAgICAgICAgaW5wdXRzLnB1c2goa2V5RnJhbWUuZnJhbWUgLyBhbmltYXRpb24uZnJhbWVQZXJTZWNvbmQpOyAvLyBrZXlmcmFtZXMgaW4gc2Vjb25kcy5cclxuICAgICAgICAgICAgX0dMVEZBbmltYXRpb24uX0FkZEtleWZyYW1lVmFsdWUoa2V5RnJhbWUsIGFuaW1hdGlvbiwgb3V0cHV0cywgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsIGJhYnlsb25UcmFuc2Zvcm1Ob2RlLCB1c2VRdWF0ZXJuaW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGN1YmljIHNwbGluZSBhbmltYXRpb24gZnJvbSB0aGUgYW5pbWF0aW9uIGtleSBmcmFtZXNcclxuICAgICAqIEBwYXJhbSBiYWJ5bG9uVHJhbnNmb3JtTm9kZSBCYWJ5bG9uSlMgbWVzaFxyXG4gICAgICogQHBhcmFtIGFuaW1hdGlvbiBCYWJ5bG9uSlMgYW5pbWF0aW9uXHJcbiAgICAgKiBAcGFyYW0gYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGggVGhlIHRhcmdldCBhbmltYXRpb24gY2hhbm5lbFxyXG4gICAgICogQHBhcmFtIGlucHV0cyBBcnJheSB0byBzdG9yZSB0aGUga2V5IGZyYW1lIHRpbWVzXHJcbiAgICAgKiBAcGFyYW0gb3V0cHV0cyBBcnJheSB0byBzdG9yZSB0aGUga2V5IGZyYW1lIGRhdGFcclxuICAgICAqIEBwYXJhbSB1c2VRdWF0ZXJuaW9uIFNwZWNpZmllcyBpZiBxdWF0ZXJuaW9ucyBhcmUgdXNlZCBpbiB0aGUgYW5pbWF0aW9uXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIF9DcmVhdGVDdWJpY1NwbGluZUFuaW1hdGlvbihcclxuICAgICAgICBiYWJ5bG9uVHJhbnNmb3JtTm9kZTogTm9kZSxcclxuICAgICAgICBhbmltYXRpb246IEFuaW1hdGlvbixcclxuICAgICAgICBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aDogQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsXHJcbiAgICAgICAgaW5wdXRzOiBudW1iZXJbXSxcclxuICAgICAgICBvdXRwdXRzOiBudW1iZXJbXVtdLFxyXG4gICAgICAgIHVzZVF1YXRlcm5pb246IGJvb2xlYW5cclxuICAgICkge1xyXG4gICAgICAgIGFuaW1hdGlvbi5nZXRLZXlzKCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5RnJhbWUpIHtcclxuICAgICAgICAgICAgaW5wdXRzLnB1c2goa2V5RnJhbWUuZnJhbWUgLyBhbmltYXRpb24uZnJhbWVQZXJTZWNvbmQpOyAvLyBrZXlmcmFtZXMgaW4gc2Vjb25kcy5cclxuICAgICAgICAgICAgX0dMVEZBbmltYXRpb24uX0FkZFNwbGluZVRhbmdlbnQoX1RhbmdlbnRUeXBlLklOVEFOR0VOVCwgb3V0cHV0cywgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsIEFuaW1hdGlvblNhbXBsZXJJbnRlcnBvbGF0aW9uLkNVQklDU1BMSU5FLCBrZXlGcmFtZSwgdXNlUXVhdGVybmlvbik7XHJcbiAgICAgICAgICAgIF9HTFRGQW5pbWF0aW9uLl9BZGRLZXlmcmFtZVZhbHVlKGtleUZyYW1lLCBhbmltYXRpb24sIG91dHB1dHMsIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLCBiYWJ5bG9uVHJhbnNmb3JtTm9kZSwgdXNlUXVhdGVybmlvbik7XHJcblxyXG4gICAgICAgICAgICBfR0xURkFuaW1hdGlvbi5fQWRkU3BsaW5lVGFuZ2VudChfVGFuZ2VudFR5cGUuT1VUVEFOR0VOVCwgb3V0cHV0cywgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsIEFuaW1hdGlvblNhbXBsZXJJbnRlcnBvbGF0aW9uLkNVQklDU1BMSU5FLCBrZXlGcmFtZSwgdXNlUXVhdGVybmlvbik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX0dldEJhc2VQb3NpdGlvblJvdGF0aW9uT3JTY2FsZShiYWJ5bG9uVHJhbnNmb3JtTm9kZTogTm9kZSwgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGg6IEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLCB1c2VRdWF0ZXJuaW9uOiBib29sZWFuKSB7XHJcbiAgICAgICAgbGV0IGJhc2VQb3NpdGlvblJvdGF0aW9uT3JTY2FsZTogbnVtYmVyW107XHJcbiAgICAgICAgaWYgKGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoID09PSBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aC5ST1RBVElPTikge1xyXG4gICAgICAgICAgICBpZiAodXNlUXVhdGVybmlvbikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcSA9IChiYWJ5bG9uVHJhbnNmb3JtTm9kZSBhcyBUcmFuc2Zvcm1Ob2RlKS5yb3RhdGlvblF1YXRlcm5pb247XHJcbiAgICAgICAgICAgICAgICBiYXNlUG9zaXRpb25Sb3RhdGlvbk9yU2NhbGUgPSAocSA/PyBRdWF0ZXJuaW9uLklkZW50aXR5KCkpLmFzQXJyYXkoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHI6IFZlY3RvcjMgPSAoYmFieWxvblRyYW5zZm9ybU5vZGUgYXMgVHJhbnNmb3JtTm9kZSkucm90YXRpb247XHJcbiAgICAgICAgICAgICAgICBiYXNlUG9zaXRpb25Sb3RhdGlvbk9yU2NhbGUgPSAociA/PyBWZWN0b3IzLlplcm8oKSkuYXNBcnJheSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCA9PT0gQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGguVFJBTlNMQVRJT04pIHtcclxuICAgICAgICAgICAgY29uc3QgcDogVmVjdG9yMyA9IChiYWJ5bG9uVHJhbnNmb3JtTm9kZSBhcyBUcmFuc2Zvcm1Ob2RlKS5wb3NpdGlvbjtcclxuICAgICAgICAgICAgYmFzZVBvc2l0aW9uUm90YXRpb25PclNjYWxlID0gKHAgPz8gVmVjdG9yMy5aZXJvKCkpLmFzQXJyYXkoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBzY2FsZVxyXG4gICAgICAgICAgICBjb25zdCBzOiBWZWN0b3IzID0gKGJhYnlsb25UcmFuc2Zvcm1Ob2RlIGFzIFRyYW5zZm9ybU5vZGUpLnNjYWxpbmc7XHJcbiAgICAgICAgICAgIGJhc2VQb3NpdGlvblJvdGF0aW9uT3JTY2FsZSA9IChzID8/IFZlY3RvcjMuT25lKCkpLmFzQXJyYXkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGJhc2VQb3NpdGlvblJvdGF0aW9uT3JTY2FsZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgYSBrZXkgZnJhbWUgdmFsdWVcclxuICAgICAqIEBwYXJhbSBrZXlGcmFtZVxyXG4gICAgICogQHBhcmFtIGFuaW1hdGlvblxyXG4gICAgICogQHBhcmFtIG91dHB1dHNcclxuICAgICAqIEBwYXJhbSBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aFxyXG4gICAgICogQHBhcmFtIGJhYnlsb25UcmFuc2Zvcm1Ob2RlXHJcbiAgICAgKiBAcGFyYW0gdXNlUXVhdGVybmlvblxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfQWRkS2V5ZnJhbWVWYWx1ZShcclxuICAgICAgICBrZXlGcmFtZTogSUFuaW1hdGlvbktleSxcclxuICAgICAgICBhbmltYXRpb246IEFuaW1hdGlvbixcclxuICAgICAgICBvdXRwdXRzOiBudW1iZXJbXVtdLFxyXG4gICAgICAgIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoOiBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCxcclxuICAgICAgICBiYWJ5bG9uVHJhbnNmb3JtTm9kZTogTm9kZSxcclxuICAgICAgICB1c2VRdWF0ZXJuaW9uOiBib29sZWFuXHJcbiAgICApIHtcclxuICAgICAgICBsZXQgbmV3UG9zaXRpb25Sb3RhdGlvbk9yU2NhbGU6IE51bGxhYmxlPFZlY3RvcjMgfCBRdWF0ZXJuaW9uIHwgbnVtYmVyPjtcclxuICAgICAgICBjb25zdCBhbmltYXRpb25UeXBlID0gYW5pbWF0aW9uLmRhdGFUeXBlO1xyXG4gICAgICAgIGlmIChhbmltYXRpb25UeXBlID09PSBBbmltYXRpb24uQU5JTUFUSU9OVFlQRV9WRUNUT1IzKSB7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IGtleUZyYW1lLnZhbHVlLmFzQXJyYXkoKTtcclxuICAgICAgICAgICAgaWYgKGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoID09PSBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aC5ST1RBVElPTikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXJyYXkgPSBWZWN0b3IzLkZyb21BcnJheSh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByb3RhdGlvblF1YXRlcm5pb24gPSBRdWF0ZXJuaW9uLlJvdGF0aW9uWWF3UGl0Y2hSb2xsKGFycmF5LnksIGFycmF5LngsIGFycmF5LnopO1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSByb3RhdGlvblF1YXRlcm5pb24uYXNBcnJheSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG91dHB1dHMucHVzaCh2YWx1ZSk7IC8vIHNjYWxlICB2ZWN0b3IuXHJcbiAgICAgICAgfSBlbHNlIGlmIChhbmltYXRpb25UeXBlID09PSBBbmltYXRpb24uQU5JTUFUSU9OVFlQRV9GTE9BVCkge1xyXG4gICAgICAgICAgICBpZiAoYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGggPT09IEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLldFSUdIVFMpIHtcclxuICAgICAgICAgICAgICAgIG91dHB1dHMucHVzaChba2V5RnJhbWUudmFsdWVdKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIGhhbmRsZXMgc2luZ2xlIGNvbXBvbmVudCB4LCB5LCB6IG9yIHcgY29tcG9uZW50IGFuaW1hdGlvbiBieSB1c2luZyBhIGJhc2UgcHJvcGVydHkgYW5kIGFuaW1hdGluZyBvdmVyIGEgY29tcG9uZW50LlxyXG4gICAgICAgICAgICAgICAgbmV3UG9zaXRpb25Sb3RhdGlvbk9yU2NhbGUgPSB0aGlzLl9Db252ZXJ0RmFjdG9yVG9WZWN0b3IzT3JRdWF0ZXJuaW9uKFxyXG4gICAgICAgICAgICAgICAgICAgIGtleUZyYW1lLnZhbHVlIGFzIG51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uVHJhbnNmb3JtTm9kZSxcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlUXVhdGVybmlvblxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGlmIChuZXdQb3NpdGlvblJvdGF0aW9uT3JTY2FsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCA9PT0gQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGguUk9UQVRJT04pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9zUm90U2NhbGUgPSB1c2VRdWF0ZXJuaW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IChuZXdQb3NpdGlvblJvdGF0aW9uT3JTY2FsZSBhcyBRdWF0ZXJuaW9uKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBRdWF0ZXJuaW9uLlJvdGF0aW9uWWF3UGl0Y2hSb2xsKG5ld1Bvc2l0aW9uUm90YXRpb25PclNjYWxlLnksIG5ld1Bvc2l0aW9uUm90YXRpb25PclNjYWxlLngsIG5ld1Bvc2l0aW9uUm90YXRpb25PclNjYWxlLnopLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRzLnB1c2gocG9zUm90U2NhbGUuYXNBcnJheSgpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0cy5wdXNoKG5ld1Bvc2l0aW9uUm90YXRpb25PclNjYWxlLmFzQXJyYXkoKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGFuaW1hdGlvblR5cGUgPT09IEFuaW1hdGlvbi5BTklNQVRJT05UWVBFX1FVQVRFUk5JT04pIHtcclxuICAgICAgICAgICAgb3V0cHV0cy5wdXNoKChrZXlGcmFtZS52YWx1ZSBhcyBRdWF0ZXJuaW9uKS5ub3JtYWxpemUoKS5hc0FycmF5KCkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIFRvb2xzLkVycm9yKFwiZ2xURkFuaW1hdGlvbjogVW5zdXBwb3J0ZWQga2V5IGZyYW1lIHZhbHVlcyBmb3IgYW5pbWF0aW9uIVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqIERldGVybWluZSB0aGUgaW50ZXJwb2xhdGlvbiBiYXNlZCBvbiB0aGUga2V5IGZyYW1lc1xyXG4gICAgICogQHBhcmFtIGtleUZyYW1lc1xyXG4gICAgICogQHBhcmFtIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoXHJcbiAgICAgKiBAcGFyYW0gdXNlUXVhdGVybmlvblxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfRGVkdWNlSW50ZXJwb2xhdGlvbihcclxuICAgICAgICBrZXlGcmFtZXM6IElBbmltYXRpb25LZXlbXSxcclxuICAgICAgICBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aDogQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsXHJcbiAgICAgICAgdXNlUXVhdGVybmlvbjogYm9vbGVhblxyXG4gICAgKTogeyBpbnRlcnBvbGF0aW9uVHlwZTogQW5pbWF0aW9uU2FtcGxlckludGVycG9sYXRpb247IHNob3VsZEJha2VBbmltYXRpb246IGJvb2xlYW4gfSB7XHJcbiAgICAgICAgbGV0IGludGVycG9sYXRpb25UeXBlOiBBbmltYXRpb25TYW1wbGVySW50ZXJwb2xhdGlvbiB8IHVuZGVmaW5lZDtcclxuICAgICAgICBsZXQgc2hvdWxkQmFrZUFuaW1hdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBrZXk6IElBbmltYXRpb25LZXk7XHJcblxyXG4gICAgICAgIGlmIChhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCA9PT0gQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGguUk9UQVRJT04gJiYgIXVzZVF1YXRlcm5pb24pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgaW50ZXJwb2xhdGlvblR5cGU6IEFuaW1hdGlvblNhbXBsZXJJbnRlcnBvbGF0aW9uLkxJTkVBUiwgc2hvdWxkQmFrZUFuaW1hdGlvbjogdHJ1ZSB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbmd0aCA9IGtleUZyYW1lcy5sZW5ndGg7IGkgPCBsZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBrZXkgPSBrZXlGcmFtZXNbaV07XHJcbiAgICAgICAgICAgIGlmIChrZXkuaW5UYW5nZW50IHx8IGtleS5vdXRUYW5nZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW50ZXJwb2xhdGlvblR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW50ZXJwb2xhdGlvblR5cGUgIT09IEFuaW1hdGlvblNhbXBsZXJJbnRlcnBvbGF0aW9uLkNVQklDU1BMSU5FKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGludGVycG9sYXRpb25UeXBlID0gQW5pbWF0aW9uU2FtcGxlckludGVycG9sYXRpb24uTElORUFSO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG91bGRCYWtlQW5pbWF0aW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnRlcnBvbGF0aW9uVHlwZSA9IEFuaW1hdGlvblNhbXBsZXJJbnRlcnBvbGF0aW9uLkNVQklDU1BMSU5FO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGludGVycG9sYXRpb25UeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnBvbGF0aW9uVHlwZSA9PT0gQW5pbWF0aW9uU2FtcGxlckludGVycG9sYXRpb24uQ1VCSUNTUExJTkUgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGtleS5pbnRlcnBvbGF0aW9uICYmIGtleS5pbnRlcnBvbGF0aW9uID09PSBBbmltYXRpb25LZXlJbnRlcnBvbGF0aW9uLlNURVAgJiYgaW50ZXJwb2xhdGlvblR5cGUgIT09IEFuaW1hdGlvblNhbXBsZXJJbnRlcnBvbGF0aW9uLlNURVApXHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGludGVycG9sYXRpb25UeXBlID0gQW5pbWF0aW9uU2FtcGxlckludGVycG9sYXRpb24uTElORUFSO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG91bGRCYWtlQW5pbWF0aW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5LmludGVycG9sYXRpb24gJiYga2V5LmludGVycG9sYXRpb24gPT09IEFuaW1hdGlvbktleUludGVycG9sYXRpb24uU1RFUCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnBvbGF0aW9uVHlwZSA9IEFuaW1hdGlvblNhbXBsZXJJbnRlcnBvbGF0aW9uLlNURVA7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwb2xhdGlvblR5cGUgPSBBbmltYXRpb25TYW1wbGVySW50ZXJwb2xhdGlvbi5MSU5FQVI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghaW50ZXJwb2xhdGlvblR5cGUpIHtcclxuICAgICAgICAgICAgaW50ZXJwb2xhdGlvblR5cGUgPSBBbmltYXRpb25TYW1wbGVySW50ZXJwb2xhdGlvbi5MSU5FQVI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4geyBpbnRlcnBvbGF0aW9uVHlwZTogaW50ZXJwb2xhdGlvblR5cGUsIHNob3VsZEJha2VBbmltYXRpb246IHNob3VsZEJha2VBbmltYXRpb24gfTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgYW4gaW5wdXQgdGFuZ2VudCBvciBvdXRwdXQgdGFuZ2VudCB0byB0aGUgb3V0cHV0IGRhdGFcclxuICAgICAqIElmIGFuIGlucHV0IHRhbmdlbnQgb3Igb3V0cHV0IHRhbmdlbnQgaXMgbWlzc2luZywgaXQgdXNlcyB0aGUgemVybyB2ZWN0b3Igb3IgemVybyBxdWF0ZXJuaW9uXHJcbiAgICAgKiBAcGFyYW0gdGFuZ2VudFR5cGUgU3BlY2lmaWVzIHdoaWNoIHR5cGUgb2YgdGFuZ2VudCB0byBoYW5kbGUgKGluVGFuZ2VudCBvciBvdXRUYW5nZW50KVxyXG4gICAgICogQHBhcmFtIG91dHB1dHMgVGhlIGFuaW1hdGlvbiBkYXRhIGJ5IGtleWZyYW1lXHJcbiAgICAgKiBAcGFyYW0gYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGggVGhlIHRhcmdldCBhbmltYXRpb24gY2hhbm5lbFxyXG4gICAgICogQHBhcmFtIGludGVycG9sYXRpb24gVGhlIGludGVycG9sYXRpb24gdHlwZVxyXG4gICAgICogQHBhcmFtIGtleUZyYW1lIFRoZSBrZXkgZnJhbWUgd2l0aCB0aGUgYW5pbWF0aW9uIGRhdGFcclxuICAgICAqIEBwYXJhbSB1c2VRdWF0ZXJuaW9uIFNwZWNpZmllcyBpZiBxdWF0ZXJuaW9ucyBhcmUgdXNlZFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfQWRkU3BsaW5lVGFuZ2VudChcclxuICAgICAgICB0YW5nZW50VHlwZTogX1RhbmdlbnRUeXBlLFxyXG4gICAgICAgIG91dHB1dHM6IG51bWJlcltdW10sXHJcbiAgICAgICAgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGg6IEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLFxyXG4gICAgICAgIGludGVycG9sYXRpb246IEFuaW1hdGlvblNhbXBsZXJJbnRlcnBvbGF0aW9uLFxyXG4gICAgICAgIGtleUZyYW1lOiBJQW5pbWF0aW9uS2V5LFxyXG4gICAgICAgIHVzZVF1YXRlcm5pb246IGJvb2xlYW5cclxuICAgICkge1xyXG4gICAgICAgIGxldCB0YW5nZW50OiBudW1iZXJbXTtcclxuICAgICAgICBjb25zdCB0YW5nZW50VmFsdWU6IFZlY3RvcjMgfCBRdWF0ZXJuaW9uIHwgbnVtYmVyID0gdGFuZ2VudFR5cGUgPT09IF9UYW5nZW50VHlwZS5JTlRBTkdFTlQgPyBrZXlGcmFtZS5pblRhbmdlbnQgOiBrZXlGcmFtZS5vdXRUYW5nZW50O1xyXG4gICAgICAgIGlmIChpbnRlcnBvbGF0aW9uID09PSBBbmltYXRpb25TYW1wbGVySW50ZXJwb2xhdGlvbi5DVUJJQ1NQTElORSkge1xyXG4gICAgICAgICAgICBpZiAoYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGggPT09IEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLlJPVEFUSU9OKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGFuZ2VudFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVzZVF1YXRlcm5pb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFuZ2VudCA9ICh0YW5nZW50VmFsdWUgYXMgUXVhdGVybmlvbikuYXNBcnJheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFycmF5ID0gdGFuZ2VudFZhbHVlIGFzIFZlY3RvcjM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhbmdlbnQgPSBRdWF0ZXJuaW9uLlJvdGF0aW9uWWF3UGl0Y2hSb2xsKGFycmF5LnksIGFycmF5LngsIGFycmF5LnopLmFzQXJyYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhbmdlbnQgPSBbMCwgMCwgMCwgMF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGggPT09IEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLldFSUdIVFMpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0YW5nZW50VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0YW5nZW50ID0gW3RhbmdlbnRWYWx1ZSBhcyBudW1iZXJdO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0YW5nZW50ID0gWzBdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRhbmdlbnRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhbmdlbnQgPSAodGFuZ2VudFZhbHVlIGFzIFZlY3RvcjMpLmFzQXJyYXkoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFuZ2VudCA9IFswLCAwLCAwXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgb3V0cHV0cy5wdXNoKHRhbmdlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgbWluaW11bSBhbmQgbWF4aW11bSBrZXkgZnJhbWVzJyBmcmFtZSB2YWx1ZXNcclxuICAgICAqIEBwYXJhbSBrZXlGcmFtZXMgYW5pbWF0aW9uIGtleSBmcmFtZXNcclxuICAgICAqIEByZXR1cm5zIHRoZSBtaW5pbXVtIGFuZCBtYXhpbXVtIGtleSBmcmFtZSB2YWx1ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfQ2FsY3VsYXRlTWluTWF4S2V5RnJhbWVzKGtleUZyYW1lczogSUFuaW1hdGlvbktleVtdKTogeyBtaW46IG51bWJlcjsgbWF4OiBudW1iZXIgfSB7XHJcbiAgICAgICAgbGV0IG1pbjogbnVtYmVyID0gSW5maW5pdHk7XHJcbiAgICAgICAgbGV0IG1heDogbnVtYmVyID0gLUluZmluaXR5O1xyXG4gICAgICAgIGtleUZyYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChrZXlGcmFtZSkge1xyXG4gICAgICAgICAgICBtaW4gPSBNYXRoLm1pbihtaW4sIGtleUZyYW1lLmZyYW1lKTtcclxuICAgICAgICAgICAgbWF4ID0gTWF0aC5tYXgobWF4LCBrZXlGcmFtZS5mcmFtZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7IG1pbjogbWluLCBtYXg6IG1heCB9O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEdldE1pbWVUeXBlIH0gZnJvbSBcImNvcmUvTWlzYy9maWxlVG9vbHNcIjtcclxuaW1wb3J0IHsgVG9vbHMgfSBmcm9tIFwiY29yZS9NaXNjL3Rvb2xzXCI7XHJcblxyXG4vKipcclxuICogQ2xhc3MgZm9yIGhvbGRpbmcgYW5kIGRvd25sb2FkaW5nIGdsVEYgZmlsZSBkYXRhXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgR0xURkRhdGEge1xyXG4gICAgLyoqXHJcbiAgICAgKiBPYmplY3Qgd2hpY2ggY29udGFpbnMgdGhlIGZpbGUgbmFtZSBhcyB0aGUga2V5IGFuZCBpdHMgZGF0YSBhcyB0aGUgdmFsdWVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IGZpbGVzOiB7IFtmaWxlTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgQmxvYiB9ID0ge307XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVwcmVjYXRlZCBVc2UgZmlsZXMgaW5zdGVhZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGdsVEZGaWxlcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5maWxlcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERvd25sb2FkcyB0aGUgZ2xURiBkYXRhIGFzIGZpbGVzIGJhc2VkIG9uIHRoZWlyIG5hbWVzIGFuZCBkYXRhXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkb3dubG9hZEZpbGVzKCk6IHZvaWQge1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuZmlsZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmZpbGVzW2tleV07XHJcbiAgICAgICAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbdmFsdWVdLCB7IHR5cGU6IEdldE1pbWVUeXBlKGtleSkgfSk7XHJcbiAgICAgICAgICAgIFRvb2xzLkRvd25sb2FkKGJsb2IsIGtleSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB0eXBlIHtcclxuICAgIElCdWZmZXJWaWV3LFxyXG4gICAgSUFjY2Vzc29yLFxyXG4gICAgSU5vZGUsXHJcbiAgICBJU2NlbmUsXHJcbiAgICBJTWVzaCxcclxuICAgIElNYXRlcmlhbCxcclxuICAgIElUZXh0dXJlLFxyXG4gICAgSUltYWdlLFxyXG4gICAgSVNhbXBsZXIsXHJcbiAgICBJQW5pbWF0aW9uLFxyXG4gICAgSU1lc2hQcmltaXRpdmUsXHJcbiAgICBJQnVmZmVyLFxyXG4gICAgSUdMVEYsXHJcbiAgICBJVGV4dHVyZUluZm8sXHJcbiAgICBJU2tpbixcclxuICAgIElDYW1lcmEsXHJcbn0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBBY2Nlc3NvckNvbXBvbmVudFR5cGUsIEFjY2Vzc29yVHlwZSwgQ2FtZXJhVHlwZSwgSW1hZ2VNaW1lVHlwZSB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuXHJcbmltcG9ydCB0eXBlIHsgRmxvYXRBcnJheSwgSW5kaWNlc0FycmF5LCBOdWxsYWJsZSB9IGZyb20gXCJjb3JlL3R5cGVzXCI7XHJcbmltcG9ydCB7IFRtcFZlY3RvcnMsIFF1YXRlcm5pb24sIE1hdHJpeCB9IGZyb20gXCJjb3JlL01hdGhzL21hdGgudmVjdG9yXCI7XHJcbmltcG9ydCB7IFRvb2xzIH0gZnJvbSBcImNvcmUvTWlzYy90b29sc1wiO1xyXG5pbXBvcnQgdHlwZSB7IEJ1ZmZlciB9IGZyb20gXCJjb3JlL0J1ZmZlcnMvYnVmZmVyXCI7XHJcbmltcG9ydCB7IFZlcnRleEJ1ZmZlciB9IGZyb20gXCJjb3JlL0J1ZmZlcnMvYnVmZmVyXCI7XHJcbmltcG9ydCB0eXBlIHsgTm9kZSB9IGZyb20gXCJjb3JlL25vZGVcIjtcclxuaW1wb3J0IHsgVHJhbnNmb3JtTm9kZSB9IGZyb20gXCJjb3JlL01lc2hlcy90cmFuc2Zvcm1Ob2RlXCI7XHJcbmltcG9ydCB0eXBlIHsgU3ViTWVzaCB9IGZyb20gXCJjb3JlL01lc2hlcy9zdWJNZXNoXCI7XHJcbmltcG9ydCB0eXBlIHsgTWVzaCB9IGZyb20gXCJjb3JlL01lc2hlcy9tZXNoXCI7XHJcbmltcG9ydCB7IEFic3RyYWN0TWVzaCB9IGZyb20gXCJjb3JlL01lc2hlcy9hYnN0cmFjdE1lc2hcIjtcclxuaW1wb3J0IHsgSW5zdGFuY2VkTWVzaCB9IGZyb20gXCJjb3JlL01lc2hlcy9pbnN0YW5jZWRNZXNoXCI7XHJcbmltcG9ydCB0eXBlIHsgQmFzZVRleHR1cmUgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvYmFzZVRleHR1cmVcIjtcclxuaW1wb3J0IHR5cGUgeyBUZXh0dXJlIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1RleHR1cmVzL3RleHR1cmVcIjtcclxuaW1wb3J0IHsgTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgRW5naW5lIH0gZnJvbSBcImNvcmUvRW5naW5lcy9lbmdpbmVcIjtcclxuaW1wb3J0IHR5cGUgeyBTY2VuZSB9IGZyb20gXCJjb3JlL3NjZW5lXCI7XHJcbmltcG9ydCB7IEVuZ2luZVN0b3JlIH0gZnJvbSBcImNvcmUvRW5naW5lcy9lbmdpbmVTdG9yZVwiO1xyXG5cclxuaW1wb3J0IHR5cGUgeyBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIgfSBmcm9tIFwiLi9nbFRGRXhwb3J0ZXJFeHRlbnNpb25cIjtcclxuaW1wb3J0IHsgR0xURk1hdGVyaWFsRXhwb3J0ZXIgfSBmcm9tIFwiLi9nbFRGTWF0ZXJpYWxFeHBvcnRlclwiO1xyXG5pbXBvcnQgdHlwZSB7IElFeHBvcnRPcHRpb25zIH0gZnJvbSBcIi4vZ2xURlNlcmlhbGl6ZXJcIjtcclxuaW1wb3J0IHsgR0xURkRhdGEgfSBmcm9tIFwiLi9nbFRGRGF0YVwiO1xyXG5pbXBvcnQge1xyXG4gICAgQ29udmVydFRvUmlnaHRIYW5kZWRQb3NpdGlvbixcclxuICAgIENvbnZlcnRUb1JpZ2h0SGFuZGVkUm90YXRpb24sXHJcbiAgICBEYXRhQXJyYXlUb1VpbnQ4QXJyYXksXHJcbiAgICBHZXRBY2Nlc3NvclR5cGUsXHJcbiAgICBHZXRBdHRyaWJ1dGVUeXBlLFxyXG4gICAgR2V0TWluTWF4LFxyXG4gICAgR2V0UHJpbWl0aXZlTW9kZSxcclxuICAgIElzTm9vcE5vZGUsXHJcbiAgICBJc1RyaWFuZ2xlRmlsbE1vZGUsXHJcbiAgICBJc1BhcmVudEFkZGVkQnlJbXBvcnRlcixcclxuICAgIENvbnZlcnRUb1JpZ2h0SGFuZGVkTm9kZSxcclxuICAgIFJvdGF0ZU5vZGUxODBZLFxyXG4gICAgRmxvYXRzTmVlZDE2Qml0SW50ZWdlcixcclxuICAgIElzU3RhbmRhcmRWZXJ0ZXhBdHRyaWJ1dGUsXHJcbiAgICBJbmRpY2VzQXJyYXlUb1R5cGVkQXJyYXksXHJcbiAgICBHZXRWZXJ0ZXhCdWZmZXJJbmZvLFxyXG59IGZyb20gXCIuL2dsVEZVdGlsaXRpZXNcIjtcclxuaW1wb3J0IHsgQnVmZmVyTWFuYWdlciB9IGZyb20gXCIuL2J1ZmZlck1hbmFnZXJcIjtcclxuaW1wb3J0IHsgQ2FtZXJhIH0gZnJvbSBcImNvcmUvQ2FtZXJhcy9jYW1lcmFcIjtcclxuaW1wb3J0IHsgTXVsdGlNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9tdWx0aU1hdGVyaWFsXCI7XHJcbmltcG9ydCB7IFBCUk1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1BCUi9wYnJNYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBTdGFuZGFyZE1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL3N0YW5kYXJkTWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSBcImNvcmUvTWlzYy9sb2dnZXJcIjtcclxuaW1wb3J0IHsgRW51bWVyYXRlRmxvYXRWYWx1ZXMsIEFyZUluZGljZXMzMkJpdHMgfSBmcm9tIFwiY29yZS9CdWZmZXJzL2J1ZmZlclV0aWxzXCI7XHJcbmltcG9ydCB0eXBlIHsgQm9uZSwgU2tlbGV0b24gfSBmcm9tIFwiY29yZS9Cb25lc1wiO1xyXG5pbXBvcnQgeyBfR0xURkFuaW1hdGlvbiB9IGZyb20gXCIuL2dsVEZBbmltYXRpb25cIjtcclxuaW1wb3J0IHR5cGUgeyBNb3JwaFRhcmdldCB9IGZyb20gXCJjb3JlL01vcnBoXCI7XHJcbmltcG9ydCB7IEJ1aWxkTW9ycGhUYXJnZXRCdWZmZXJzIH0gZnJvbSBcIi4vZ2xURk1vcnBoVGFyZ2V0c1V0aWxpdGllc1wiO1xyXG5pbXBvcnQgdHlwZSB7IElNb3JwaFRhcmdldERhdGEgfSBmcm9tIFwiLi9nbFRGTW9ycGhUYXJnZXRzVXRpbGl0aWVzXCI7XHJcbmltcG9ydCB7IExpbmVzTWVzaCB9IGZyb20gXCJjb3JlL01lc2hlcy9saW5lc01lc2hcIjtcclxuaW1wb3J0IHsgR3JlYXNlZExpbmVCYXNlTWVzaCB9IGZyb20gXCJjb3JlL01lc2hlcy9HcmVhc2VkTGluZS9ncmVhc2VkTGluZUJhc2VNZXNoXCI7XHJcbmltcG9ydCB7IENvbG9yMywgQ29sb3I0IH0gZnJvbSBcImNvcmUvTWF0aHMvbWF0aC5jb2xvclwiO1xyXG5cclxuY2xhc3MgRXhwb3J0ZXJTdGF0ZSB7XHJcbiAgICAvLyBCYWJ5bG9uIGluZGljZXMgYXJyYXksIHN0YXJ0LCBjb3VudCwgb2Zmc2V0LCBmbGlwIC0+IGdsVEYgYWNjZXNzb3IgaW5kZXhcclxuICAgIHByaXZhdGUgX2luZGljZXNBY2Nlc3Nvck1hcCA9IG5ldyBNYXA8TnVsbGFibGU8SW5kaWNlc0FycmF5PiwgTWFwPG51bWJlciwgTWFwPG51bWJlciwgTWFwPG51bWJlciwgTWFwPGJvb2xlYW4sIG51bWJlcj4+Pj4+KCk7XHJcblxyXG4gICAgLy8gQmFieWxvbiBidWZmZXIgLT4gZ2xURiBidWZmZXIgdmlld1xyXG4gICAgcHJpdmF0ZSBfdmVydGV4QnVmZmVyVmlld01hcCA9IG5ldyBNYXA8QnVmZmVyLCBJQnVmZmVyVmlldz4oKTtcclxuXHJcbiAgICAvLyBCYWJ5bG9uIHZlcnRleCBidWZmZXIsIHN0YXJ0LCBjb3VudCAtPiBnbFRGIGFjY2Vzc29yIGluZGV4XHJcbiAgICBwcml2YXRlIF92ZXJ0ZXhBY2Nlc3Nvck1hcCA9IG5ldyBNYXA8VmVydGV4QnVmZmVyLCBNYXA8bnVtYmVyLCBNYXA8bnVtYmVyLCBudW1iZXI+Pj4oKTtcclxuXHJcbiAgICBwcml2YXRlIF9yZW1hcHBlZEJ1ZmZlclZpZXcgPSBuZXcgTWFwPEJ1ZmZlciwgTWFwPFZlcnRleEJ1ZmZlciwgSUJ1ZmZlclZpZXc+PigpO1xyXG5cclxuICAgIHByaXZhdGUgX21lc2hNb3JwaFRhcmdldE1hcCA9IG5ldyBNYXA8QWJzdHJhY3RNZXNoLCBJTW9ycGhUYXJnZXREYXRhW10+KCk7XHJcblxyXG4gICAgcHJpdmF0ZSBfdmVydGV4TWFwQ29sb3JBbHBoYSA9IG5ldyBNYXA8VmVydGV4QnVmZmVyLCBib29sZWFuPigpO1xyXG5cclxuICAgIHByaXZhdGUgX2V4cG9ydGVkTm9kZXMgPSBuZXcgU2V0PE5vZGU+KCk7XHJcblxyXG4gICAgLy8gQmFieWxvbiBtZXNoIC0+IGdsVEYgbWVzaCBpbmRleFxyXG4gICAgcHJpdmF0ZSBfbWVzaE1hcCA9IG5ldyBNYXA8QWJzdHJhY3RNZXNoLCBudW1iZXI+KCk7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGNvbnZlcnRUb1JpZ2h0SGFuZGVkOiBib29sZWFuLCB3YXNBZGRlZEJ5Tm9vcE5vZGU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmNvbnZlcnRUb1JpZ2h0SGFuZGVkID0gY29udmVydFRvUmlnaHRIYW5kZWQ7XHJcbiAgICAgICAgdGhpcy53YXNBZGRlZEJ5Tm9vcE5vZGUgPSB3YXNBZGRlZEJ5Tm9vcE5vZGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlYWRvbmx5IGNvbnZlcnRUb1JpZ2h0SGFuZGVkOiBib29sZWFuO1xyXG5cclxuICAgIHB1YmxpYyByZWFkb25seSB3YXNBZGRlZEJ5Tm9vcE5vZGU6IGJvb2xlYW47XHJcblxyXG4gICAgLy8gT25seSB1c2VkIHdoZW4gY29udmVydFRvUmlnaHRIYW5kZWQgaXMgdHJ1ZS5cclxuICAgIHB1YmxpYyByZWFkb25seSBjb252ZXJ0ZWRUb1JpZ2h0SGFuZGVkQnVmZmVycyA9IG5ldyBNYXA8QnVmZmVyLCBVaW50OEFycmF5PigpO1xyXG5cclxuICAgIHB1YmxpYyBnZXRJbmRpY2VzQWNjZXNzb3IoaW5kaWNlczogTnVsbGFibGU8SW5kaWNlc0FycmF5Piwgc3RhcnQ6IG51bWJlciwgY291bnQ6IG51bWJlciwgb2Zmc2V0OiBudW1iZXIsIGZsaXA6IGJvb2xlYW4pOiBudW1iZXIgfCB1bmRlZmluZWQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbmRpY2VzQWNjZXNzb3JNYXAuZ2V0KGluZGljZXMpPy5nZXQoc3RhcnQpPy5nZXQoY291bnQpPy5nZXQob2Zmc2V0KT8uZ2V0KGZsaXApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRJbmRpY2VzQWNjZXNzb3IoaW5kaWNlczogTnVsbGFibGU8SW5kaWNlc0FycmF5Piwgc3RhcnQ6IG51bWJlciwgY291bnQ6IG51bWJlciwgb2Zmc2V0OiBudW1iZXIsIGZsaXA6IGJvb2xlYW4sIGFjY2Vzc29ySW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGxldCBtYXAxID0gdGhpcy5faW5kaWNlc0FjY2Vzc29yTWFwLmdldChpbmRpY2VzKTtcclxuICAgICAgICBpZiAoIW1hcDEpIHtcclxuICAgICAgICAgICAgbWFwMSA9IG5ldyBNYXA8bnVtYmVyLCBNYXA8bnVtYmVyLCBNYXA8bnVtYmVyLCBNYXA8Ym9vbGVhbiwgbnVtYmVyPj4+PigpO1xyXG4gICAgICAgICAgICB0aGlzLl9pbmRpY2VzQWNjZXNzb3JNYXAuc2V0KGluZGljZXMsIG1hcDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG1hcDIgPSBtYXAxLmdldChzdGFydCk7XHJcbiAgICAgICAgaWYgKCFtYXAyKSB7XHJcbiAgICAgICAgICAgIG1hcDIgPSBuZXcgTWFwPG51bWJlciwgTWFwPG51bWJlciwgTWFwPGJvb2xlYW4sIG51bWJlcj4+PigpO1xyXG4gICAgICAgICAgICBtYXAxLnNldChzdGFydCwgbWFwMik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgbWFwMyA9IG1hcDIuZ2V0KGNvdW50KTtcclxuICAgICAgICBpZiAoIW1hcDMpIHtcclxuICAgICAgICAgICAgbWFwMyA9IG5ldyBNYXA8bnVtYmVyLCBNYXA8Ym9vbGVhbiwgbnVtYmVyPj4oKTtcclxuICAgICAgICAgICAgbWFwMi5zZXQoY291bnQsIG1hcDMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG1hcDQgPSBtYXAzLmdldChvZmZzZXQpO1xyXG4gICAgICAgIGlmICghbWFwNCkge1xyXG4gICAgICAgICAgICBtYXA0ID0gbmV3IE1hcDxib29sZWFuLCBudW1iZXI+KCk7XHJcbiAgICAgICAgICAgIG1hcDMuc2V0KG9mZnNldCwgbWFwNCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtYXA0LnNldChmbGlwLCBhY2Nlc3NvckluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcHVzaEV4cG9ydGVkTm9kZShub2RlOiBOb2RlKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9leHBvcnRlZE5vZGVzLmhhcyhub2RlKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9leHBvcnRlZE5vZGVzLmFkZChub2RlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldE5vZGVzU2V0KCk6IFNldDxOb2RlPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2V4cG9ydGVkTm9kZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFZlcnRleEJ1ZmZlclZpZXcoYnVmZmVyOiBCdWZmZXIpOiBJQnVmZmVyVmlldyB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZlcnRleEJ1ZmZlclZpZXdNYXAuZ2V0KGJ1ZmZlcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFZlcnRleEJ1ZmZlclZpZXcoYnVmZmVyOiBCdWZmZXIsIGJ1ZmZlclZpZXc6IElCdWZmZXJWaWV3KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fdmVydGV4QnVmZmVyVmlld01hcC5zZXQoYnVmZmVyLCBidWZmZXJWaWV3KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0UmVtYXBwZWRCdWZmZXJWaWV3KGJ1ZmZlcjogQnVmZmVyLCB2ZXJ0ZXhCdWZmZXI6IFZlcnRleEJ1ZmZlciwgYnVmZmVyVmlldzogSUJ1ZmZlclZpZXcpIHtcclxuICAgICAgICB0aGlzLl9yZW1hcHBlZEJ1ZmZlclZpZXcuc2V0KGJ1ZmZlciwgbmV3IE1hcDxWZXJ0ZXhCdWZmZXIsIElCdWZmZXJWaWV3PigpKTtcclxuICAgICAgICB0aGlzLl9yZW1hcHBlZEJ1ZmZlclZpZXcuZ2V0KGJ1ZmZlcikhLnNldCh2ZXJ0ZXhCdWZmZXIsIGJ1ZmZlclZpZXcpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRSZW1hcHBlZEJ1ZmZlclZpZXcoYnVmZmVyOiBCdWZmZXIsIHZlcnRleEJ1ZmZlcjogVmVydGV4QnVmZmVyKTogSUJ1ZmZlclZpZXcgfCB1bmRlZmluZWQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yZW1hcHBlZEJ1ZmZlclZpZXcuZ2V0KGJ1ZmZlcik/LmdldCh2ZXJ0ZXhCdWZmZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRWZXJ0ZXhBY2Nlc3Nvcih2ZXJ0ZXhCdWZmZXI6IFZlcnRleEJ1ZmZlciwgc3RhcnQ6IG51bWJlciwgY291bnQ6IG51bWJlcik6IG51bWJlciB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZlcnRleEFjY2Vzc29yTWFwLmdldCh2ZXJ0ZXhCdWZmZXIpPy5nZXQoc3RhcnQpPy5nZXQoY291bnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRWZXJ0ZXhBY2Nlc3Nvcih2ZXJ0ZXhCdWZmZXI6IFZlcnRleEJ1ZmZlciwgc3RhcnQ6IG51bWJlciwgY291bnQ6IG51bWJlciwgYWNjZXNzb3JJbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IG1hcDEgPSB0aGlzLl92ZXJ0ZXhBY2Nlc3Nvck1hcC5nZXQodmVydGV4QnVmZmVyKTtcclxuICAgICAgICBpZiAoIW1hcDEpIHtcclxuICAgICAgICAgICAgbWFwMSA9IG5ldyBNYXA8bnVtYmVyLCBNYXA8bnVtYmVyLCBudW1iZXI+PigpO1xyXG4gICAgICAgICAgICB0aGlzLl92ZXJ0ZXhBY2Nlc3Nvck1hcC5zZXQodmVydGV4QnVmZmVyLCBtYXAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBtYXAyID0gbWFwMS5nZXQoc3RhcnQpO1xyXG4gICAgICAgIGlmICghbWFwMikge1xyXG4gICAgICAgICAgICBtYXAyID0gbmV3IE1hcDxudW1iZXIsIG51bWJlcj4oKTtcclxuICAgICAgICAgICAgbWFwMS5zZXQoc3RhcnQsIG1hcDIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWFwMi5zZXQoY291bnQsIGFjY2Vzc29ySW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBoYXNWZXJ0ZXhDb2xvckFscGhhKHZlcnRleEJ1ZmZlcjogVmVydGV4QnVmZmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZlcnRleE1hcENvbG9yQWxwaGEuZ2V0KHZlcnRleEJ1ZmZlcikgfHwgZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldEhhc1ZlcnRleENvbG9yQWxwaGEodmVydGV4QnVmZmVyOiBWZXJ0ZXhCdWZmZXIsIGhhc0FscGhhOiBib29sZWFuKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZlcnRleE1hcENvbG9yQWxwaGEuc2V0KHZlcnRleEJ1ZmZlciwgaGFzQWxwaGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRNZXNoKG1lc2g6IEFic3RyYWN0TWVzaCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21lc2hNYXAuZ2V0KG1lc2gpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRNZXNoKG1lc2g6IEFic3RyYWN0TWVzaCwgbWVzaEluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9tZXNoTWFwLnNldChtZXNoLCBtZXNoSW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBiaW5kTW9ycGhEYXRhVG9NZXNoKG1lc2g6IEFic3RyYWN0TWVzaCwgbW9ycGhEYXRhOiBJTW9ycGhUYXJnZXREYXRhKSB7XHJcbiAgICAgICAgY29uc3QgbW9ycGhUYXJnZXRzID0gdGhpcy5fbWVzaE1vcnBoVGFyZ2V0TWFwLmdldChtZXNoKSB8fCBbXTtcclxuICAgICAgICB0aGlzLl9tZXNoTW9ycGhUYXJnZXRNYXAuc2V0KG1lc2gsIG1vcnBoVGFyZ2V0cyk7XHJcbiAgICAgICAgaWYgKG1vcnBoVGFyZ2V0cy5pbmRleE9mKG1vcnBoRGF0YSkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIG1vcnBoVGFyZ2V0cy5wdXNoKG1vcnBoRGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRNb3JwaFRhcmdldHNGcm9tTWVzaChtZXNoOiBBYnN0cmFjdE1lc2gpOiBJTW9ycGhUYXJnZXREYXRhW10gfCB1bmRlZmluZWQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tZXNoTW9ycGhUYXJnZXRNYXAuZ2V0KG1lc2gpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiogQGludGVybmFsICovXHJcbmV4cG9ydCBjbGFzcyBHTFRGRXhwb3J0ZXIge1xyXG4gICAgcHVibGljIHJlYWRvbmx5IF9nbFRGOiBJR0xURiA9IHtcclxuICAgICAgICBhc3NldDogeyBnZW5lcmF0b3I6IGBCYWJ5bG9uLmpzIHYke0VuZ2luZS5WZXJzaW9ufWAsIHZlcnNpb246IFwiMi4wXCIgfSxcclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIHJlYWRvbmx5IF9hbmltYXRpb25zOiBJQW5pbWF0aW9uW10gPSBbXTtcclxuICAgIHB1YmxpYyByZWFkb25seSBfYWNjZXNzb3JzOiBJQWNjZXNzb3JbXSA9IFtdO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IF9idWZmZXJWaWV3czogSUJ1ZmZlclZpZXdbXSA9IFtdO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IF9jYW1lcmFzOiBJQ2FtZXJhW10gPSBbXTtcclxuICAgIHB1YmxpYyByZWFkb25seSBfaW1hZ2VzOiBJSW1hZ2VbXSA9IFtdO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IF9tYXRlcmlhbHM6IElNYXRlcmlhbFtdID0gW107XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgX21lc2hlczogSU1lc2hbXSA9IFtdO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IF9ub2RlczogSU5vZGVbXSA9IFtdO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IF9zYW1wbGVyczogSVNhbXBsZXJbXSA9IFtdO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IF9zY2VuZXM6IElTY2VuZVtdID0gW107XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgX3NraW5zOiBJU2tpbltdID0gW107XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgX3RleHR1cmVzOiBJVGV4dHVyZVtdID0gW107XHJcblxyXG4gICAgcHVibGljIHJlYWRvbmx5IF9iYWJ5bG9uU2NlbmU6IFNjZW5lO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IF9pbWFnZURhdGE6IHsgW2ZpbGVOYW1lOiBzdHJpbmddOiB7IGRhdGE6IEFycmF5QnVmZmVyOyBtaW1lVHlwZTogSW1hZ2VNaW1lVHlwZSB9IH0gPSB7fTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEJha2VkIGFuaW1hdGlvbiBzYW1wbGUgcmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9hbmltYXRpb25TYW1wbGVSYXRlOiBudW1iZXI7XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfb3B0aW9uczogUmVxdWlyZWQ8SUV4cG9ydE9wdGlvbnM+O1xyXG5cclxuICAgIHB1YmxpYyBfc2hvdWxkVXNlR2xiOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHVibGljIHJlYWRvbmx5IF9tYXRlcmlhbEV4cG9ydGVyID0gbmV3IEdMVEZNYXRlcmlhbEV4cG9ydGVyKHRoaXMpO1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2V4dGVuc2lvbnM6IHsgW25hbWU6IHN0cmluZ106IElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMiB9ID0ge307XHJcblxyXG4gICAgcHVibGljIHJlYWRvbmx5IF9idWZmZXJNYW5hZ2VyID0gbmV3IEJ1ZmZlck1hbmFnZXIoKTtcclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9zaG91bGRFeHBvcnROb2RlTWFwID0gbmV3IE1hcDxOb2RlLCBib29sZWFuPigpO1xyXG5cclxuICAgIC8vIEJhYnlsb24gbm9kZSAtPiBnbFRGIG5vZGUgaW5kZXhcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX25vZGVNYXAgPSBuZXcgTWFwPE5vZGUsIG51bWJlcj4oKTtcclxuXHJcbiAgICAvLyBCYWJ5bG9uIG1hdGVyaWFsIC0+IGdsVEYgbWF0ZXJpYWwgaW5kZXhcclxuICAgIHB1YmxpYyByZWFkb25seSBfbWF0ZXJpYWxNYXAgPSBuZXcgTWFwPE1hdGVyaWFsLCBudW1iZXI+KCk7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9jYW1lcmFzTWFwID0gbmV3IE1hcDxDYW1lcmEsIElDYW1lcmE+KCk7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9ub2Rlc0NhbWVyYU1hcCA9IG5ldyBNYXA8SUNhbWVyYSwgSU5vZGVbXT4oKTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX3NraW5NYXAgPSBuZXcgTWFwPFNrZWxldG9uLCBJU2tpbj4oKTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX25vZGVzU2tpbk1hcCA9IG5ldyBNYXA8SVNraW4sIElOb2RlW10+KCk7XHJcblxyXG4gICAgLy8gQSBtYXRlcmlhbCBpbiB0aGlzIHNldCByZXF1aXJlcyBVVnNcclxuICAgIHB1YmxpYyByZWFkb25seSBfbWF0ZXJpYWxOZWVkc1VWc1NldCA9IG5ldyBTZXQ8TWF0ZXJpYWw+KCk7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgX0V4dGVuc2lvbk5hbWVzID0gbmV3IEFycmF5PHN0cmluZz4oKTtcclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IF9FeHRlbnNpb25GYWN0b3JpZXM6IHsgW25hbWU6IHN0cmluZ106IChleHBvcnRlcjogR0xURkV4cG9ydGVyKSA9PiBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIgfSA9IHt9O1xyXG5cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb24sIEB0eXBlc2NyaXB0LWVzbGludC9wcm9taXNlLWZ1bmN0aW9uLWFzeW5jXHJcbiAgICBwcml2YXRlIF9BcHBseUV4dGVuc2lvbjxUPihcclxuICAgICAgICBub2RlOiBULFxyXG4gICAgICAgIGV4dGVuc2lvbnM6IElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMltdLFxyXG4gICAgICAgIGluZGV4OiBudW1iZXIsXHJcbiAgICAgICAgYWN0aW9uQXN5bmM6IChleHRlbnNpb246IElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMiwgbm9kZTogVCkgPT4gUHJvbWlzZTxOdWxsYWJsZTxUPj4gfCB1bmRlZmluZWRcclxuICAgICk6IFByb21pc2U8TnVsbGFibGU8VD4+IHtcclxuICAgICAgICBpZiAoaW5kZXggPj0gZXh0ZW5zaW9ucy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShub2RlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9taXNlID0gYWN0aW9uQXN5bmMoZXh0ZW5zaW9uc1tpbmRleF0sIG5vZGUpO1xyXG5cclxuICAgICAgICBpZiAoIWN1cnJlbnRQcm9taXNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9BcHBseUV4dGVuc2lvbihub2RlLCBleHRlbnNpb25zLCBpbmRleCArIDEsIGFjdGlvbkFzeW5jKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBnaXRodWIvbm8tdGhlblxyXG4gICAgICAgIHJldHVybiBjdXJyZW50UHJvbWlzZS50aGVuKGFzeW5jIChuZXdOb2RlKSA9PiAobmV3Tm9kZSA/IGF3YWl0IHRoaXMuX0FwcGx5RXh0ZW5zaW9uKG5ld05vZGUsIGV4dGVuc2lvbnMsIGluZGV4ICsgMSwgYWN0aW9uQXN5bmMpIDogbnVsbCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb24sIEB0eXBlc2NyaXB0LWVzbGludC9wcm9taXNlLWZ1bmN0aW9uLWFzeW5jXHJcbiAgICBwcml2YXRlIF9BcHBseUV4dGVuc2lvbnM8VD4obm9kZTogVCwgYWN0aW9uQXN5bmM6IChleHRlbnNpb246IElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMiwgbm9kZTogVCkgPT4gUHJvbWlzZTxOdWxsYWJsZTxUPj4gfCB1bmRlZmluZWQpOiBQcm9taXNlPE51bGxhYmxlPFQ+PiB7XHJcbiAgICAgICAgY29uc3QgZXh0ZW5zaW9uczogSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyW10gPSBbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IG5hbWUgb2YgR0xURkV4cG9ydGVyLl9FeHRlbnNpb25OYW1lcykge1xyXG4gICAgICAgICAgICBleHRlbnNpb25zLnB1c2godGhpcy5fZXh0ZW5zaW9uc1tuYW1lXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fQXBwbHlFeHRlbnNpb24obm9kZSwgZXh0ZW5zaW9ucywgMCwgYWN0aW9uQXN5bmMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheCwgQHR5cGVzY3JpcHQtZXNsaW50L3Byb21pc2UtZnVuY3Rpb24tYXN5bmNcclxuICAgIHB1YmxpYyBfZXh0ZW5zaW9uc1ByZUV4cG9ydFRleHR1cmVBc3luYyhjb250ZXh0OiBzdHJpbmcsIGJhYnlsb25UZXh0dXJlOiBUZXh0dXJlLCBtaW1lVHlwZTogSW1hZ2VNaW1lVHlwZSk6IFByb21pc2U8TnVsbGFibGU8QmFzZVRleHR1cmU+PiB7XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9wcm9taXNlLWZ1bmN0aW9uLWFzeW5jXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0FwcGx5RXh0ZW5zaW9ucyhiYWJ5bG9uVGV4dHVyZSwgKGV4dGVuc2lvbiwgbm9kZSkgPT4gZXh0ZW5zaW9uLnByZUV4cG9ydFRleHR1cmVBc3luYyAmJiBleHRlbnNpb24ucHJlRXhwb3J0VGV4dHVyZUFzeW5jKGNvbnRleHQsIG5vZGUsIG1pbWVUeXBlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4LCBAdHlwZXNjcmlwdC1lc2xpbnQvcHJvbWlzZS1mdW5jdGlvbi1hc3luY1xyXG4gICAgcHVibGljIF9leHRlbnNpb25zUG9zdEV4cG9ydE5vZGVBc3luYyhjb250ZXh0OiBzdHJpbmcsIG5vZGU6IElOb2RlLCBiYWJ5bG9uTm9kZTogTm9kZSwgbm9kZU1hcDogTWFwPE5vZGUsIG51bWJlcj4sIGNvbnZlcnRUb1JpZ2h0SGFuZGVkOiBib29sZWFuKTogUHJvbWlzZTxOdWxsYWJsZTxJTm9kZT4+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fQXBwbHlFeHRlbnNpb25zKFxyXG4gICAgICAgICAgICBub2RlLFxyXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3Byb21pc2UtZnVuY3Rpb24tYXN5bmNcclxuICAgICAgICAgICAgKGV4dGVuc2lvbiwgbm9kZSkgPT4gZXh0ZW5zaW9uLnBvc3RFeHBvcnROb2RlQXN5bmMgJiYgZXh0ZW5zaW9uLnBvc3RFeHBvcnROb2RlQXN5bmMoY29udGV4dCwgbm9kZSwgYmFieWxvbk5vZGUsIG5vZGVNYXAsIGNvbnZlcnRUb1JpZ2h0SGFuZGVkLCB0aGlzLl9idWZmZXJNYW5hZ2VyKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4LCBAdHlwZXNjcmlwdC1lc2xpbnQvcHJvbWlzZS1mdW5jdGlvbi1hc3luY1xyXG4gICAgcHVibGljIF9leHRlbnNpb25zUG9zdEV4cG9ydE1hdGVyaWFsQXN5bmMoY29udGV4dDogc3RyaW5nLCBtYXRlcmlhbDogSU1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsKTogUHJvbWlzZTxOdWxsYWJsZTxJTWF0ZXJpYWw+PiB7XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9wcm9taXNlLWZ1bmN0aW9uLWFzeW5jXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0FwcGx5RXh0ZW5zaW9ucyhtYXRlcmlhbCwgKGV4dGVuc2lvbiwgbm9kZSkgPT4gZXh0ZW5zaW9uLnBvc3RFeHBvcnRNYXRlcmlhbEFzeW5jICYmIGV4dGVuc2lvbi5wb3N0RXhwb3J0TWF0ZXJpYWxBc3luYyhjb250ZXh0LCBub2RlLCBiYWJ5bG9uTWF0ZXJpYWwpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgX2V4dGVuc2lvbnNQb3N0RXhwb3J0TWF0ZXJpYWxBZGRpdGlvbmFsVGV4dHVyZXMoY29udGV4dDogc3RyaW5nLCBtYXRlcmlhbDogSU1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsKTogQmFzZVRleHR1cmVbXSB7XHJcbiAgICAgICAgY29uc3Qgb3V0cHV0OiBCYXNlVGV4dHVyZVtdID0gW107XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgbmFtZSBvZiBHTFRGRXhwb3J0ZXIuX0V4dGVuc2lvbk5hbWVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IHRoaXMuX2V4dGVuc2lvbnNbbmFtZV07XHJcblxyXG4gICAgICAgICAgICBpZiAoZXh0ZW5zaW9uLnBvc3RFeHBvcnRNYXRlcmlhbEFkZGl0aW9uYWxUZXh0dXJlcykge1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0LnB1c2goLi4uZXh0ZW5zaW9uLnBvc3RFeHBvcnRNYXRlcmlhbEFkZGl0aW9uYWxUZXh0dXJlcyhjb250ZXh0LCBtYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIF9leHRlbnNpb25zUG9zdEV4cG9ydFRleHR1cmVzKGNvbnRleHQ6IHN0cmluZywgdGV4dHVyZUluZm86IElUZXh0dXJlSW5mbywgYmFieWxvblRleHR1cmU6IEJhc2VUZXh0dXJlKTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChjb25zdCBuYW1lIG9mIEdMVEZFeHBvcnRlci5fRXh0ZW5zaW9uTmFtZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgZXh0ZW5zaW9uID0gdGhpcy5fZXh0ZW5zaW9uc1tuYW1lXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChleHRlbnNpb24ucG9zdEV4cG9ydFRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgIGV4dGVuc2lvbi5wb3N0RXhwb3J0VGV4dHVyZShjb250ZXh0LCB0ZXh0dXJlSW5mbywgYmFieWxvblRleHR1cmUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBfZXh0ZW5zaW9uc1Bvc3RFeHBvcnRNZXNoUHJpbWl0aXZlKHByaW1pdGl2ZTogSU1lc2hQcmltaXRpdmUpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGNvbnN0IG5hbWUgb2YgR0xURkV4cG9ydGVyLl9FeHRlbnNpb25OYW1lcykge1xyXG4gICAgICAgICAgICBjb25zdCBleHRlbnNpb24gPSB0aGlzLl9leHRlbnNpb25zW25hbWVdO1xyXG5cclxuICAgICAgICAgICAgaWYgKGV4dGVuc2lvbi5wb3N0RXhwb3J0TWVzaFByaW1pdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgZXh0ZW5zaW9uLnBvc3RFeHBvcnRNZXNoUHJpbWl0aXZlKHByaW1pdGl2ZSwgdGhpcy5fYnVmZmVyTWFuYWdlciwgdGhpcy5fYWNjZXNzb3JzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgX2V4dGVuc2lvbnNQcmVHZW5lcmF0ZUJpbmFyeUFzeW5jKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGZvciAoY29uc3QgbmFtZSBvZiBHTFRGRXhwb3J0ZXIuX0V4dGVuc2lvbk5hbWVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IHRoaXMuX2V4dGVuc2lvbnNbbmFtZV07XHJcblxyXG4gICAgICAgICAgICBpZiAoZXh0ZW5zaW9uLnByZUdlbmVyYXRlQmluYXJ5QXN5bmMpIHtcclxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hd2FpdC1pbi1sb29wXHJcbiAgICAgICAgICAgICAgICBhd2FpdCBleHRlbnNpb24ucHJlR2VuZXJhdGVCaW5hcnlBc3luYyh0aGlzLl9idWZmZXJNYW5hZ2VyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9mb3JFYWNoRXh0ZW5zaW9ucyhhY3Rpb246IChleHRlbnNpb246IElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMikgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIGZvciAoY29uc3QgbmFtZSBvZiBHTFRGRXhwb3J0ZXIuX0V4dGVuc2lvbk5hbWVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IHRoaXMuX2V4dGVuc2lvbnNbbmFtZV07XHJcbiAgICAgICAgICAgIGlmIChleHRlbnNpb24uZW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uKGV4dGVuc2lvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZXh0ZW5zaW9uc09uRXhwb3J0aW5nKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2ZvckVhY2hFeHRlbnNpb25zKChleHRlbnNpb24pID0+IHtcclxuICAgICAgICAgICAgaWYgKGV4dGVuc2lvbi53YXNVc2VkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9nbFRGLmV4dGVuc2lvbnNVc2VkIHx8PSBbXTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9nbFRGLmV4dGVuc2lvbnNVc2VkLmluZGV4T2YoZXh0ZW5zaW9uLm5hbWUpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2dsVEYuZXh0ZW5zaW9uc1VzZWQucHVzaChleHRlbnNpb24ubmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGV4dGVuc2lvbi5yZXF1aXJlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2dsVEYuZXh0ZW5zaW9uc1JlcXVpcmVkIHx8PSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fZ2xURi5leHRlbnNpb25zUmVxdWlyZWQuaW5kZXhPZihleHRlbnNpb24ubmFtZSkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2dsVEYuZXh0ZW5zaW9uc1JlcXVpcmVkLnB1c2goZXh0ZW5zaW9uLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9nbFRGLmV4dGVuc2lvbnMgfHw9IHt9O1xyXG4gICAgICAgICAgICAgICAgaWYgKGV4dGVuc2lvbi5vbkV4cG9ydGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGV4dGVuc2lvbi5vbkV4cG9ydGluZygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZEV4dGVuc2lvbnMoKTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChjb25zdCBuYW1lIG9mIEdMVEZFeHBvcnRlci5fRXh0ZW5zaW9uTmFtZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgZXh0ZW5zaW9uID0gR0xURkV4cG9ydGVyLl9FeHRlbnNpb25GYWN0b3JpZXNbbmFtZV0odGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMuX2V4dGVuc2lvbnNbbmFtZV0gPSBleHRlbnNpb247XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihiYWJ5bG9uU2NlbmU6IE51bGxhYmxlPFNjZW5lPiA9IEVuZ2luZVN0b3JlLkxhc3RDcmVhdGVkU2NlbmUsIG9wdGlvbnM/OiBJRXhwb3J0T3B0aW9ucykge1xyXG4gICAgICAgIGlmICghYmFieWxvblNjZW5lKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHNjZW5lIGF2YWlsYWJsZSB0byBleHBvcnRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9iYWJ5bG9uU2NlbmUgPSBiYWJ5bG9uU2NlbmU7XHJcblxyXG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHNob3VsZEV4cG9ydE5vZGU6ICgpID0+IHRydWUsXHJcbiAgICAgICAgICAgIHNob3VsZEV4cG9ydEFuaW1hdGlvbjogKCkgPT4gdHJ1ZSxcclxuICAgICAgICAgICAgbWV0YWRhdGFTZWxlY3RvcjogKG1ldGFkYXRhKSA9PiBtZXRhZGF0YT8uZ2x0Zj8uZXh0cmFzLFxyXG4gICAgICAgICAgICBhbmltYXRpb25TYW1wbGVSYXRlOiAxIC8gNjAsXHJcbiAgICAgICAgICAgIGV4cG9ydFdpdGhvdXRXYWl0aW5nRm9yU2NlbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICBleHBvcnRVbnVzZWRVVnM6IGZhbHNlLFxyXG4gICAgICAgICAgICByZW1vdmVOb29wUm9vdE5vZGVzOiB0cnVlLFxyXG4gICAgICAgICAgICBpbmNsdWRlQ29vcmRpbmF0ZVN5c3RlbUNvbnZlcnNpb25Ob2RlczogZmFsc2UsXHJcbiAgICAgICAgICAgIG1lc2hDb21wcmVzc2lvbk1ldGhvZDogXCJOb25lXCIsXHJcbiAgICAgICAgICAgIC4uLm9wdGlvbnMsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5fbG9hZEV4dGVuc2lvbnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLl9leHRlbnNpb25zKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IHRoaXMuX2V4dGVuc2lvbnNba2V5XTtcclxuICAgICAgICAgICAgZXh0ZW5zaW9uLmRpc3Bvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBvcHRpb25zKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9vcHRpb25zO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgUmVnaXN0ZXJFeHRlbnNpb24obmFtZTogc3RyaW5nLCBmYWN0b3J5OiAoZXhwb3J0ZXI6IEdMVEZFeHBvcnRlcikgPT4gSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKEdMVEZFeHBvcnRlci5VbnJlZ2lzdGVyRXh0ZW5zaW9uKG5hbWUpKSB7XHJcbiAgICAgICAgICAgIFRvb2xzLldhcm4oYEV4dGVuc2lvbiB3aXRoIHRoZSBuYW1lICR7bmFtZX0gYWxyZWFkeSBleGlzdHNgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEdMVEZFeHBvcnRlci5fRXh0ZW5zaW9uRmFjdG9yaWVzW25hbWVdID0gZmFjdG9yeTtcclxuICAgICAgICBHTFRGRXhwb3J0ZXIuX0V4dGVuc2lvbk5hbWVzLnB1c2gobmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBVbnJlZ2lzdGVyRXh0ZW5zaW9uKG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICghR0xURkV4cG9ydGVyLl9FeHRlbnNpb25GYWN0b3JpZXNbbmFtZV0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWxldGUgR0xURkV4cG9ydGVyLl9FeHRlbnNpb25GYWN0b3JpZXNbbmFtZV07XHJcblxyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gR0xURkV4cG9ydGVyLl9FeHRlbnNpb25OYW1lcy5pbmRleE9mKG5hbWUpO1xyXG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgR0xURkV4cG9ydGVyLl9FeHRlbnNpb25OYW1lcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZ2VuZXJhdGVKU09OKGJ1ZmZlckJ5dGVMZW5ndGg6IG51bWJlciwgZmlsZU5hbWU/OiBzdHJpbmcsIHByZXR0eVByaW50PzogYm9vbGVhbik6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3QgYnVmZmVyOiBJQnVmZmVyID0geyBieXRlTGVuZ3RoOiBidWZmZXJCeXRlTGVuZ3RoIH07XHJcblxyXG4gICAgICAgIGlmIChidWZmZXIuYnl0ZUxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLl9nbFRGLmJ1ZmZlcnMgPSBbYnVmZmVyXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX25vZGVzICYmIHRoaXMuX25vZGVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLl9nbFRGLm5vZGVzID0gdGhpcy5fbm9kZXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9tZXNoZXMgJiYgdGhpcy5fbWVzaGVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLl9nbFRGLm1lc2hlcyA9IHRoaXMuX21lc2hlcztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX3NjZW5lcyAmJiB0aGlzLl9zY2VuZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2dsVEYuc2NlbmVzID0gdGhpcy5fc2NlbmVzO1xyXG4gICAgICAgICAgICB0aGlzLl9nbFRGLnNjZW5lID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX2NhbWVyYXMgJiYgdGhpcy5fY2FtZXJhcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5fZ2xURi5jYW1lcmFzID0gdGhpcy5fY2FtZXJhcztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX2J1ZmZlclZpZXdzICYmIHRoaXMuX2J1ZmZlclZpZXdzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLl9nbFRGLmJ1ZmZlclZpZXdzID0gdGhpcy5fYnVmZmVyVmlld3M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9hY2Nlc3NvcnMgJiYgdGhpcy5fYWNjZXNzb3JzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLl9nbFRGLmFjY2Vzc29ycyA9IHRoaXMuX2FjY2Vzc29ycztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX2FuaW1hdGlvbnMgJiYgdGhpcy5fYW5pbWF0aW9ucy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5fZ2xURi5hbmltYXRpb25zID0gdGhpcy5fYW5pbWF0aW9ucztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX21hdGVyaWFscyAmJiB0aGlzLl9tYXRlcmlhbHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2dsVEYubWF0ZXJpYWxzID0gdGhpcy5fbWF0ZXJpYWxzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fdGV4dHVyZXMgJiYgdGhpcy5fdGV4dHVyZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2dsVEYudGV4dHVyZXMgPSB0aGlzLl90ZXh0dXJlcztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX3NhbXBsZXJzICYmIHRoaXMuX3NhbXBsZXJzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLl9nbFRGLnNhbXBsZXJzID0gdGhpcy5fc2FtcGxlcnM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9za2lucyAmJiB0aGlzLl9za2lucy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5fZ2xURi5za2lucyA9IHRoaXMuX3NraW5zO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5faW1hZ2VzICYmIHRoaXMuX2ltYWdlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5fZ2xURi5pbWFnZXMgPSB0aGlzLl9pbWFnZXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuX3Nob3VsZFVzZUdsYikge1xyXG4gICAgICAgICAgICBidWZmZXIudXJpID0gZmlsZU5hbWUgKyBcIi5iaW5cIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBwcmV0dHlQcmludCA/IEpTT04uc3RyaW5naWZ5KHRoaXMuX2dsVEYsIG51bGwsIDIpIDogSlNPTi5zdHJpbmdpZnkodGhpcy5fZ2xURik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGdlbmVyYXRlR0xURkFzeW5jKGdsVEZQcmVmaXg6IHN0cmluZyk6IFByb21pc2U8R0xURkRhdGE+IHtcclxuICAgICAgICBjb25zdCBiaW5hcnlCdWZmZXIgPSBhd2FpdCB0aGlzLl9nZW5lcmF0ZUJpbmFyeUFzeW5jKCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2V4dGVuc2lvbnNPbkV4cG9ydGluZygpO1xyXG4gICAgICAgIGNvbnN0IGpzb25UZXh0ID0gdGhpcy5fZ2VuZXJhdGVKU09OKGJpbmFyeUJ1ZmZlci5ieXRlTGVuZ3RoLCBnbFRGUHJlZml4LCB0cnVlKTtcclxuICAgICAgICBjb25zdCBiaW4gPSBuZXcgQmxvYihbYmluYXJ5QnVmZmVyXSwgeyB0eXBlOiBcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBnbFRGRmlsZU5hbWUgPSBnbFRGUHJlZml4ICsgXCIuZ2x0ZlwiO1xyXG4gICAgICAgIGNvbnN0IGdsVEZCaW5GaWxlID0gZ2xURlByZWZpeCArIFwiLmJpblwiO1xyXG5cclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBuZXcgR0xURkRhdGEoKTtcclxuXHJcbiAgICAgICAgY29udGFpbmVyLmZpbGVzW2dsVEZGaWxlTmFtZV0gPSBqc29uVGV4dDtcclxuICAgICAgICBjb250YWluZXIuZmlsZXNbZ2xURkJpbkZpbGVdID0gYmluO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5faW1hZ2VEYXRhKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgaW1hZ2UgaW4gdGhpcy5faW1hZ2VEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIuZmlsZXNbaW1hZ2VdID0gbmV3IEJsb2IoW3RoaXMuX2ltYWdlRGF0YVtpbWFnZV0uZGF0YV0sIHsgdHlwZTogdGhpcy5faW1hZ2VEYXRhW2ltYWdlXS5taW1lVHlwZSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIF9nZW5lcmF0ZUJpbmFyeUFzeW5jKCk6IFByb21pc2U8VWludDhBcnJheT4ge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuX2V4cG9ydFNjZW5lQXN5bmMoKTtcclxuICAgICAgICBhd2FpdCB0aGlzLl9leHRlbnNpb25zUHJlR2VuZXJhdGVCaW5hcnlBc3luYygpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9idWZmZXJNYW5hZ2VyLmdlbmVyYXRlQmluYXJ5KHRoaXMuX2J1ZmZlclZpZXdzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFBhZHMgdGhlIG51bWJlciB0byBhIG11bHRpcGxlIG9mIDRcclxuICAgICAqIEBwYXJhbSBudW0gbnVtYmVyIHRvIHBhZFxyXG4gICAgICogQHJldHVybnMgcGFkZGVkIG51bWJlclxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9nZXRQYWRkaW5nKG51bTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCByZW1haW5kZXIgPSBudW0gJSA0O1xyXG4gICAgICAgIGNvbnN0IHBhZGRpbmcgPSByZW1haW5kZXIgPT09IDAgPyByZW1haW5kZXIgOiA0IC0gcmVtYWluZGVyO1xyXG5cclxuICAgICAgICByZXR1cm4gcGFkZGluZztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZ2VuZXJhdGVHTEJBc3luYyhnbFRGUHJlZml4OiBzdHJpbmcpOiBQcm9taXNlPEdMVEZEYXRhPiB7XHJcbiAgICAgICAgdGhpcy5fc2hvdWxkVXNlR2xiID0gdHJ1ZTtcclxuICAgICAgICBjb25zdCBiaW5hcnlCdWZmZXIgPSBhd2FpdCB0aGlzLl9nZW5lcmF0ZUJpbmFyeUFzeW5jKCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2V4dGVuc2lvbnNPbkV4cG9ydGluZygpO1xyXG4gICAgICAgIGNvbnN0IGpzb25UZXh0ID0gdGhpcy5fZ2VuZXJhdGVKU09OKGJpbmFyeUJ1ZmZlci5ieXRlTGVuZ3RoKTtcclxuICAgICAgICBjb25zdCBnbGJGaWxlTmFtZSA9IGdsVEZQcmVmaXggKyBcIi5nbGJcIjtcclxuICAgICAgICBjb25zdCBoZWFkZXJMZW5ndGggPSAxMjtcclxuICAgICAgICBjb25zdCBjaHVua0xlbmd0aFByZWZpeCA9IDg7XHJcbiAgICAgICAgbGV0IGpzb25MZW5ndGggPSBqc29uVGV4dC5sZW5ndGg7XHJcbiAgICAgICAgbGV0IGVuY29kZWRKc29uVGV4dDtcclxuICAgICAgICAvLyBtYWtlIHVzZSBvZiBUZXh0RW5jb2RlciB3aGVuIGF2YWlsYWJsZVxyXG4gICAgICAgIGlmICh0eXBlb2YgVGV4dEVuY29kZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgZW5jb2RlciA9IG5ldyBUZXh0RW5jb2RlcigpO1xyXG4gICAgICAgICAgICBlbmNvZGVkSnNvblRleHQgPSBlbmNvZGVyLmVuY29kZShqc29uVGV4dCk7XHJcbiAgICAgICAgICAgIGpzb25MZW5ndGggPSBlbmNvZGVkSnNvblRleHQubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBqc29uUGFkZGluZyA9IHRoaXMuX2dldFBhZGRpbmcoanNvbkxlbmd0aCk7XHJcbiAgICAgICAgY29uc3QgYmluUGFkZGluZyA9IHRoaXMuX2dldFBhZGRpbmcoYmluYXJ5QnVmZmVyLmJ5dGVMZW5ndGgpO1xyXG5cclxuICAgICAgICBjb25zdCBieXRlTGVuZ3RoID0gaGVhZGVyTGVuZ3RoICsgMiAqIGNodW5rTGVuZ3RoUHJlZml4ICsganNvbkxlbmd0aCArIGpzb25QYWRkaW5nICsgYmluYXJ5QnVmZmVyLmJ5dGVMZW5ndGggKyBiaW5QYWRkaW5nO1xyXG5cclxuICAgICAgICAvLyBoZWFkZXJcclxuICAgICAgICBjb25zdCBoZWFkZXJCdWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoaGVhZGVyTGVuZ3RoKTtcclxuICAgICAgICBjb25zdCBoZWFkZXJCdWZmZXJWaWV3ID0gbmV3IERhdGFWaWV3KGhlYWRlckJ1ZmZlcik7XHJcbiAgICAgICAgaGVhZGVyQnVmZmVyVmlldy5zZXRVaW50MzIoMCwgMHg0NjU0NmM2NywgdHJ1ZSk7IC8vZ2xURlxyXG4gICAgICAgIGhlYWRlckJ1ZmZlclZpZXcuc2V0VWludDMyKDQsIDIsIHRydWUpOyAvLyB2ZXJzaW9uXHJcbiAgICAgICAgaGVhZGVyQnVmZmVyVmlldy5zZXRVaW50MzIoOCwgYnl0ZUxlbmd0aCwgdHJ1ZSk7IC8vIHRvdGFsIGJ5dGVzIGluIGZpbGVcclxuXHJcbiAgICAgICAgLy8ganNvbiBjaHVua1xyXG4gICAgICAgIGNvbnN0IGpzb25DaHVua0J1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcihjaHVua0xlbmd0aFByZWZpeCArIGpzb25MZW5ndGggKyBqc29uUGFkZGluZyk7XHJcbiAgICAgICAgY29uc3QganNvbkNodW5rQnVmZmVyVmlldyA9IG5ldyBEYXRhVmlldyhqc29uQ2h1bmtCdWZmZXIpO1xyXG4gICAgICAgIGpzb25DaHVua0J1ZmZlclZpZXcuc2V0VWludDMyKDAsIGpzb25MZW5ndGggKyBqc29uUGFkZGluZywgdHJ1ZSk7XHJcbiAgICAgICAganNvbkNodW5rQnVmZmVyVmlldy5zZXRVaW50MzIoNCwgMHg0ZTRmNTM0YSwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIC8vIGpzb24gY2h1bmsgYnl0ZXNcclxuICAgICAgICBjb25zdCBqc29uRGF0YSA9IG5ldyBVaW50OEFycmF5KGpzb25DaHVua0J1ZmZlciwgY2h1bmtMZW5ndGhQcmVmaXgpO1xyXG4gICAgICAgIC8vIGlmIFRleHRFbmNvZGVyIHdhcyBhdmFpbGFibGUsIHdlIGNhbiBzaW1wbHkgY29weSB0aGUgZW5jb2RlZCBhcnJheVxyXG4gICAgICAgIGlmIChlbmNvZGVkSnNvblRleHQpIHtcclxuICAgICAgICAgICAganNvbkRhdGEuc2V0KGVuY29kZWRKc29uVGV4dCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgYmxhbmtDaGFyQ29kZSA9IFwiX1wiLmNoYXJDb2RlQXQoMCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwganNvbkxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaGFyQ29kZSA9IGpzb25UZXh0LmNoYXJDb2RlQXQoaSk7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgY2hhcmFjdGVyIGRvZXNuJ3QgZml0IGludG8gYSBzaW5nbGUgVVRGLTE2IGNvZGUgdW5pdCwganVzdCBwdXQgYSBibGFuayBjaGFyYWN0ZXJcclxuICAgICAgICAgICAgICAgIGlmIChjaGFyQ29kZSAhPSBqc29uVGV4dC5jb2RlUG9pbnRBdChpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGpzb25EYXRhW2ldID0gYmxhbmtDaGFyQ29kZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAganNvbkRhdGFbaV0gPSBjaGFyQ29kZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8ganNvbiBwYWRkaW5nXHJcbiAgICAgICAgY29uc3QganNvblBhZGRpbmdWaWV3ID0gbmV3IFVpbnQ4QXJyYXkoanNvbkNodW5rQnVmZmVyLCBjaHVua0xlbmd0aFByZWZpeCArIGpzb25MZW5ndGgpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwganNvblBhZGRpbmc7ICsraSkge1xyXG4gICAgICAgICAgICBqc29uUGFkZGluZ1ZpZXdbaV0gPSAweDIwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gYmluYXJ5IGNodW5rXHJcbiAgICAgICAgY29uc3QgYmluYXJ5Q2h1bmtCdWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoY2h1bmtMZW5ndGhQcmVmaXgpO1xyXG4gICAgICAgIGNvbnN0IGJpbmFyeUNodW5rQnVmZmVyVmlldyA9IG5ldyBEYXRhVmlldyhiaW5hcnlDaHVua0J1ZmZlcik7XHJcbiAgICAgICAgYmluYXJ5Q2h1bmtCdWZmZXJWaWV3LnNldFVpbnQzMigwLCBiaW5hcnlCdWZmZXIuYnl0ZUxlbmd0aCArIGJpblBhZGRpbmcsIHRydWUpO1xyXG4gICAgICAgIGJpbmFyeUNodW5rQnVmZmVyVmlldy5zZXRVaW50MzIoNCwgMHgwMDRlNDk0MiwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIC8vIGJpbmFyeSBwYWRkaW5nXHJcbiAgICAgICAgY29uc3QgYmluUGFkZGluZ0J1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcihiaW5QYWRkaW5nKTtcclxuICAgICAgICBjb25zdCBiaW5QYWRkaW5nVmlldyA9IG5ldyBVaW50OEFycmF5KGJpblBhZGRpbmdCdWZmZXIpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmluUGFkZGluZzsgKytpKSB7XHJcbiAgICAgICAgICAgIGJpblBhZGRpbmdWaWV3W2ldID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGdsYkRhdGEgPSBbaGVhZGVyQnVmZmVyLCBqc29uQ2h1bmtCdWZmZXIsIGJpbmFyeUNodW5rQnVmZmVyLCBiaW5hcnlCdWZmZXIsIGJpblBhZGRpbmdCdWZmZXJdO1xyXG4gICAgICAgIGNvbnN0IGdsYkZpbGUgPSBuZXcgQmxvYihnbGJEYXRhLCB7IHR5cGU6IFwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCIgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IG5ldyBHTFRGRGF0YSgpO1xyXG4gICAgICAgIGNvbnRhaW5lci5maWxlc1tnbGJGaWxlTmFtZV0gPSBnbGJGaWxlO1xyXG5cclxuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3NldE5vZGVUcmFuc2Zvcm1hdGlvbihub2RlOiBJTm9kZSwgYmFieWxvblRyYW5zZm9ybU5vZGU6IFRyYW5zZm9ybU5vZGUsIGNvbnZlcnRUb1JpZ2h0SGFuZGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCFiYWJ5bG9uVHJhbnNmb3JtTm9kZS5nZXRQaXZvdFBvaW50KCkuZXF1YWxzVG9GbG9hdHMoMCwgMCwgMCkpIHtcclxuICAgICAgICAgICAgVG9vbHMuV2FybihcIlBpdm90IHBvaW50cyBhcmUgbm90IHN1cHBvcnRlZCBpbiB0aGUgZ2xURiBzZXJpYWxpemVyXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFiYWJ5bG9uVHJhbnNmb3JtTm9kZS5wb3NpdGlvbi5lcXVhbHNUb0Zsb2F0cygwLCAwLCAwKSkge1xyXG4gICAgICAgICAgICBjb25zdCB0cmFuc2xhdGlvbiA9IFRtcFZlY3RvcnMuVmVjdG9yM1swXS5jb3B5RnJvbShiYWJ5bG9uVHJhbnNmb3JtTm9kZS5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgIGlmIChjb252ZXJ0VG9SaWdodEhhbmRlZCkge1xyXG4gICAgICAgICAgICAgICAgQ29udmVydFRvUmlnaHRIYW5kZWRQb3NpdGlvbih0cmFuc2xhdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5vZGUudHJhbnNsYXRpb24gPSB0cmFuc2xhdGlvbi5hc0FycmF5KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWJhYnlsb25UcmFuc2Zvcm1Ob2RlLnNjYWxpbmcuZXF1YWxzVG9GbG9hdHMoMSwgMSwgMSkpIHtcclxuICAgICAgICAgICAgbm9kZS5zY2FsZSA9IGJhYnlsb25UcmFuc2Zvcm1Ob2RlLnNjYWxpbmcuYXNBcnJheSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgcm90YXRpb25RdWF0ZXJuaW9uID0gUXVhdGVybmlvbi5Gcm9tRXVsZXJBbmdsZXMoYmFieWxvblRyYW5zZm9ybU5vZGUucm90YXRpb24ueCwgYmFieWxvblRyYW5zZm9ybU5vZGUucm90YXRpb24ueSwgYmFieWxvblRyYW5zZm9ybU5vZGUucm90YXRpb24ueik7XHJcbiAgICAgICAgaWYgKGJhYnlsb25UcmFuc2Zvcm1Ob2RlLnJvdGF0aW9uUXVhdGVybmlvbikge1xyXG4gICAgICAgICAgICByb3RhdGlvblF1YXRlcm5pb24ubXVsdGlwbHlJblBsYWNlKGJhYnlsb25UcmFuc2Zvcm1Ob2RlLnJvdGF0aW9uUXVhdGVybmlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghUXVhdGVybmlvbi5Jc0lkZW50aXR5KHJvdGF0aW9uUXVhdGVybmlvbikpIHtcclxuICAgICAgICAgICAgaWYgKGNvbnZlcnRUb1JpZ2h0SGFuZGVkKSB7XHJcbiAgICAgICAgICAgICAgICBDb252ZXJ0VG9SaWdodEhhbmRlZFJvdGF0aW9uKHJvdGF0aW9uUXVhdGVybmlvbik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5vZGUucm90YXRpb24gPSByb3RhdGlvblF1YXRlcm5pb24ubm9ybWFsaXplKCkuYXNBcnJheSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9zZXRDYW1lcmFUcmFuc2Zvcm1hdGlvbihub2RlOiBJTm9kZSwgYmFieWxvbkNhbWVyYTogQ2FtZXJhLCBjb252ZXJ0VG9SaWdodEhhbmRlZDogYm9vbGVhbiwgcGFyZW50OiBOdWxsYWJsZTxOb2RlPik6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHRyYW5zbGF0aW9uID0gVG1wVmVjdG9ycy5WZWN0b3IzWzBdO1xyXG4gICAgICAgIGNvbnN0IHJvdGF0aW9uID0gVG1wVmVjdG9ycy5RdWF0ZXJuaW9uWzBdO1xyXG5cclxuICAgICAgICBpZiAocGFyZW50ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIC8vIENhbWVyYS5nZXRXb3JsZE1hdHJpeCByZXR1cm5zIGdsb2JhbCBjb29yZGluYXRlcy4gR0xURiBub2RlIG11c3QgdXNlIGxvY2FsIGNvb3JkaW5hdGVzLiBJZiBjYW1lcmEgaGFzIHBhcmVudCB3ZSBuZWVkIHRvIHVzZSBsb2NhbCB0cmFuc2xhdGlvbi9yb3RhdGlvbi5cclxuICAgICAgICAgICAgY29uc3QgcGFyZW50V29ybGRNYXRyaXggPSBNYXRyaXguSW52ZXJ0KHBhcmVudC5nZXRXb3JsZE1hdHJpeCgpKTtcclxuICAgICAgICAgICAgY29uc3QgY2FtZXJhV29ybGRNYXRyaXggPSBiYWJ5bG9uQ2FtZXJhLmdldFdvcmxkTWF0cml4KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhbWVyYUxvY2FsID0gY2FtZXJhV29ybGRNYXRyaXgubXVsdGlwbHkocGFyZW50V29ybGRNYXRyaXgpO1xyXG4gICAgICAgICAgICBjYW1lcmFMb2NhbC5kZWNvbXBvc2UodW5kZWZpbmVkLCByb3RhdGlvbiwgdHJhbnNsYXRpb24pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGJhYnlsb25DYW1lcmEuZ2V0V29ybGRNYXRyaXgoKS5kZWNvbXBvc2UodW5kZWZpbmVkLCByb3RhdGlvbiwgdHJhbnNsYXRpb24pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0cmFuc2xhdGlvbi5lcXVhbHNUb0Zsb2F0cygwLCAwLCAwKSkge1xyXG4gICAgICAgICAgICBub2RlLnRyYW5zbGF0aW9uID0gdHJhbnNsYXRpb24uYXNBcnJheSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFRdWF0ZXJuaW9uLklzSWRlbnRpdHkocm90YXRpb24pKSB7XHJcbiAgICAgICAgICAgIG5vZGUucm90YXRpb24gPSByb3RhdGlvbi5hc0FycmF5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEV4cG9ydCBiYWJ5bG9uIGNhbWVyYXMgdG8gZ2xURiBjYW1lcmFzXHJcbiAgICBwcml2YXRlIF9saXN0QXZhaWxhYmxlQ2FtZXJhcygpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGNhbWVyYSBvZiB0aGlzLl9iYWJ5bG9uU2NlbmUuY2FtZXJhcykge1xyXG4gICAgICAgICAgICBjb25zdCBnbFRGQ2FtZXJhOiBJQ2FtZXJhID0ge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogY2FtZXJhLm1vZGUgPT09IENhbWVyYS5QRVJTUEVDVElWRV9DQU1FUkEgPyBDYW1lcmFUeXBlLlBFUlNQRUNUSVZFIDogQ2FtZXJhVHlwZS5PUlRIT0dSQVBISUMsXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBpZiAoY2FtZXJhLm5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGdsVEZDYW1lcmEubmFtZSA9IGNhbWVyYS5uYW1lO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZ2xURkNhbWVyYS50eXBlID09PSBDYW1lcmFUeXBlLlBFUlNQRUNUSVZFKSB7XHJcbiAgICAgICAgICAgICAgICBnbFRGQ2FtZXJhLnBlcnNwZWN0aXZlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGFzcGVjdFJhdGlvOiBjYW1lcmEuZ2V0RW5naW5lKCkuZ2V0QXNwZWN0UmF0aW8oY2FtZXJhKSxcclxuICAgICAgICAgICAgICAgICAgICB5Zm92OiBjYW1lcmEuZm92TW9kZSA9PT0gQ2FtZXJhLkZPVk1PREVfVkVSVElDQUxfRklYRUQgPyBjYW1lcmEuZm92IDogY2FtZXJhLmZvdiAqIGNhbWVyYS5nZXRFbmdpbmUoKS5nZXRBc3BlY3RSYXRpbyhjYW1lcmEpLFxyXG4gICAgICAgICAgICAgICAgICAgIHpuZWFyOiBjYW1lcmEubWluWixcclxuICAgICAgICAgICAgICAgICAgICB6ZmFyOiBjYW1lcmEubWF4WixcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZ2xURkNhbWVyYS50eXBlID09PSBDYW1lcmFUeXBlLk9SVEhPR1JBUEhJQykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaGFsZldpZHRoID0gY2FtZXJhLm9ydGhvTGVmdCAmJiBjYW1lcmEub3J0aG9SaWdodCA/IDAuNSAqIChjYW1lcmEub3J0aG9SaWdodCAtIGNhbWVyYS5vcnRob0xlZnQpIDogY2FtZXJhLmdldEVuZ2luZSgpLmdldFJlbmRlcldpZHRoKCkgKiAwLjU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBoYWxmSGVpZ2h0ID0gY2FtZXJhLm9ydGhvQm90dG9tICYmIGNhbWVyYS5vcnRob1RvcCA/IDAuNSAqIChjYW1lcmEub3J0aG9Ub3AgLSBjYW1lcmEub3J0aG9Cb3R0b20pIDogY2FtZXJhLmdldEVuZ2luZSgpLmdldFJlbmRlckhlaWdodCgpICogMC41O1xyXG4gICAgICAgICAgICAgICAgZ2xURkNhbWVyYS5vcnRob2dyYXBoaWMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgeG1hZzogaGFsZldpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgIHltYWc6IGhhbGZIZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgem5lYXI6IGNhbWVyYS5taW5aLFxyXG4gICAgICAgICAgICAgICAgICAgIHpmYXI6IGNhbWVyYS5tYXhaLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9jYW1lcmFzTWFwLnNldChjYW1lcmEsIGdsVEZDYW1lcmEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBDbGVhbnVwIHVudXNlZCBjYW1lcmFzIGFuZCBhc3NpZ24gaW5kZXggdG8gbm9kZXMuXHJcbiAgICBwcml2YXRlIF9leHBvcnRBbmRBc3NpZ25DYW1lcmFzKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGdsdGZDYW1lcmFzID0gQXJyYXkuZnJvbSh0aGlzLl9jYW1lcmFzTWFwLnZhbHVlcygpKTtcclxuICAgICAgICBmb3IgKGNvbnN0IGdsdGZDYW1lcmEgb2YgZ2x0ZkNhbWVyYXMpIHtcclxuICAgICAgICAgICAgY29uc3QgdXNlZE5vZGVzID0gdGhpcy5fbm9kZXNDYW1lcmFNYXAuZ2V0KGdsdGZDYW1lcmEpO1xyXG4gICAgICAgICAgICBpZiAodXNlZE5vZGVzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NhbWVyYXMucHVzaChnbHRmQ2FtZXJhKTtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiB1c2VkTm9kZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLmNhbWVyYSA9IHRoaXMuX2NhbWVyYXMubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBCdWlsZHMgYWxsIHNraW5zIGluIHRoZSBza2lucyBhcnJheSBzbyBub2RlcyBjYW4gcmVmZXJlbmNlIGl0IGR1cmluZyBub2RlIHBhcnNpbmcuXHJcbiAgICBwcml2YXRlIF9saXN0QXZhaWxhYmxlU2tlbGV0b25zKCk6IHZvaWQge1xyXG4gICAgICAgIGZvciAoY29uc3Qgc2tlbGV0b24gb2YgdGhpcy5fYmFieWxvblNjZW5lLnNrZWxldG9ucykge1xyXG4gICAgICAgICAgICBpZiAoc2tlbGV0b24uYm9uZXMubGVuZ3RoIDw9IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBza2luOiBJU2tpbiA9IHsgam9pbnRzOiBbXSB9O1xyXG4gICAgICAgICAgICB0aGlzLl9za2luTWFwLnNldChza2VsZXRvbiwgc2tpbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2V4cG9ydEFuZEFzc2lnblNrZWxldG9ucygpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IHNrZWxldG9uIG9mIHRoaXMuX2JhYnlsb25TY2VuZS5za2VsZXRvbnMpIHtcclxuICAgICAgICAgICAgaWYgKHNrZWxldG9uLmJvbmVzLmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2tpbiA9IHRoaXMuX3NraW5NYXAuZ2V0KHNrZWxldG9uKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChza2luID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGJvbmVJbmRleE1hcDogeyBbaW5kZXg6IG51bWJlcl06IEJvbmUgfSA9IHt9O1xyXG4gICAgICAgICAgICBjb25zdCBpbnZlcnNlQmluZE1hdHJpY2VzOiBNYXRyaXhbXSA9IFtdO1xyXG5cclxuICAgICAgICAgICAgbGV0IG1heEJvbmVJbmRleCA9IC0xO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNrZWxldG9uLmJvbmVzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBib25lID0gc2tlbGV0b24uYm9uZXNbaV07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBib25lSW5kZXggPSBib25lLmdldEluZGV4KCkgPz8gaTtcclxuICAgICAgICAgICAgICAgIGlmIChib25lSW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4TWFwW2JvbmVJbmRleF0gPSBib25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChib25lSW5kZXggPiBtYXhCb25lSW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4Qm9uZUluZGV4ID0gYm9uZUluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gU2V0IGpvaW50cyBpbmRleCB0byBzY2VuZSBub2RlLlxyXG4gICAgICAgICAgICBmb3IgKGxldCBib25lSW5kZXggPSAwOyBib25lSW5kZXggPD0gbWF4Qm9uZUluZGV4OyArK2JvbmVJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYm9uZSA9IGJvbmVJbmRleE1hcFtib25lSW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgaW52ZXJzZUJpbmRNYXRyaWNlcy5wdXNoKGJvbmUuZ2V0QWJzb2x1dGVJbnZlcnNlQmluZE1hdHJpeCgpKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zZm9ybU5vZGUgPSBib25lLmdldFRyYW5zZm9ybU5vZGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodHJhbnNmb3JtTm9kZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vZGVJRCA9IHRoaXMuX25vZGVNYXAuZ2V0KHRyYW5zZm9ybU5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0cmFuc2Zvcm1Ob2RlICYmIG5vZGVJRCAhPT0gbnVsbCAmJiBub2RlSUQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBza2luLmpvaW50cy5wdXNoKG5vZGVJRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVG9vbHMuV2FybihcIkV4cG9ydGluZyBhIGJvbmUgd2l0aG91dCBhIGxpbmtlZCB0cmFuc2Zvcm0gbm9kZSBpcyBjdXJyZW50bHkgdW5zdXBwb3J0ZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBUb29scy5XYXJuKFwiRXhwb3J0aW5nIGEgYm9uZSB3aXRob3V0IGEgbGlua2VkIHRyYW5zZm9ybSBub2RlIGlzIGN1cnJlbnRseSB1bnN1cHBvcnRlZFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gTm9kZXMgdGhhdCB1c2UgdGhpcyBza2luLlxyXG4gICAgICAgICAgICBjb25zdCBza2luZWROb2RlcyA9IHRoaXMuX25vZGVzU2tpbk1hcC5nZXQoc2tpbik7XHJcblxyXG4gICAgICAgICAgICAvLyBPbmx5IGNyZWF0ZSBza2VsZXRvbiBpZiBpdCBoYXMgYXQgbGVhc3Qgb25lIGpvaW50IGFuZCBpcyB1c2VkIGJ5IGEgbWVzaC5cclxuICAgICAgICAgICAgaWYgKHNraW4uam9pbnRzLmxlbmd0aCA+IDAgJiYgc2tpbmVkTm9kZXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgLy8gUHV0IElCTSBkYXRhIGludG8gVHlwZWRBcnJheWJ1ZmZlciB2aWV3XHJcbiAgICAgICAgICAgICAgICBjb25zdCBieXRlTGVuZ3RoID0gaW52ZXJzZUJpbmRNYXRyaWNlcy5sZW5ndGggKiA2NDsgLy8gQWx3YXlzIGEgNCB4IDQgbWF0cml4IG9mIDMyIGJpdCBmbG9hdFxyXG4gICAgICAgICAgICAgICAgY29uc3QgaW52ZXJzZUJpbmRNYXRyaWNlc0RhdGEgPSBuZXcgRmxvYXQzMkFycmF5KGJ5dGVMZW5ndGggLyA0KTtcclxuICAgICAgICAgICAgICAgIGludmVyc2VCaW5kTWF0cmljZXMuZm9yRWFjaCgobWF0OiBNYXRyaXgsIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpbnZlcnNlQmluZE1hdHJpY2VzRGF0YS5zZXQobWF0Lm0sIGluZGV4ICogMTYpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgYnVmZmVyIHZpZXcgYW5kIGFjY2Vzc29yXHJcbiAgICAgICAgICAgICAgICBjb25zdCBidWZmZXJWaWV3ID0gdGhpcy5fYnVmZmVyTWFuYWdlci5jcmVhdGVCdWZmZXJWaWV3KGludmVyc2VCaW5kTWF0cmljZXNEYXRhKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2FjY2Vzc29ycy5wdXNoKHRoaXMuX2J1ZmZlck1hbmFnZXIuY3JlYXRlQWNjZXNzb3IoYnVmZmVyVmlldywgQWNjZXNzb3JUeXBlLk1BVDQsIEFjY2Vzc29yQ29tcG9uZW50VHlwZS5GTE9BVCwgaW52ZXJzZUJpbmRNYXRyaWNlcy5sZW5ndGgpKTtcclxuICAgICAgICAgICAgICAgIHNraW4uaW52ZXJzZUJpbmRNYXRyaWNlcyA9IHRoaXMuX2FjY2Vzc29ycy5sZW5ndGggLSAxO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX3NraW5zLnB1c2goc2tpbik7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHNraW5lZE5vZGUgb2Ygc2tpbmVkTm9kZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBza2luZWROb2RlLnNraW4gPSB0aGlzLl9za2lucy5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgX2V4cG9ydFNjZW5lQXN5bmMoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgY29uc3Qgc2NlbmU6IElTY2VuZSA9IHsgbm9kZXM6IFtdIH07XHJcblxyXG4gICAgICAgIC8vIFNjZW5lIG1ldGFkYXRhXHJcbiAgICAgICAgaWYgKHRoaXMuX2JhYnlsb25TY2VuZS5tZXRhZGF0YSkge1xyXG4gICAgICAgICAgICBjb25zdCBleHRyYXMgPSB0aGlzLl9vcHRpb25zLm1ldGFkYXRhU2VsZWN0b3IodGhpcy5fYmFieWxvblNjZW5lLm1ldGFkYXRhKTtcclxuICAgICAgICAgICAgaWYgKGV4dHJhcykge1xyXG4gICAgICAgICAgICAgICAgc2NlbmUuZXh0cmFzID0gZXh0cmFzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAgVE9ETzpcclxuICAgICAgICAvLyAgZGVhbCB3aXRoIHRoaXMgZnJvbSB0aGUgbG9hZGVyOlxyXG4gICAgICAgIC8vICBiYWJ5bG9uTWF0ZXJpYWwuaW52ZXJ0Tm9ybWFsTWFwWCA9ICF0aGlzLl9iYWJ5bG9uU2NlbmUudXNlUmlnaHRIYW5kZWRTeXN0ZW07XHJcbiAgICAgICAgLy8gIGJhYnlsb25NYXRlcmlhbC5pbnZlcnROb3JtYWxNYXBZID0gdGhpcy5fYmFieWxvblNjZW5lLnVzZVJpZ2h0SGFuZGVkU3lzdGVtO1xyXG5cclxuICAgICAgICBjb25zdCByb290Tm9kZXNSSCA9IG5ldyBBcnJheTxOb2RlPigpO1xyXG4gICAgICAgIGNvbnN0IHJvb3ROb2Rlc0xIID0gbmV3IEFycmF5PE5vZGU+KCk7XHJcbiAgICAgICAgY29uc3Qgcm9vdE5vb3BOb2Rlc1JIID0gbmV3IEFycmF5PE5vZGU+KCk7XHJcblxyXG4gICAgICAgIGZvciAoY29uc3Qgcm9vdE5vZGUgb2YgdGhpcy5fYmFieWxvblNjZW5lLnJvb3ROb2Rlcykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fb3B0aW9ucy5yZW1vdmVOb29wUm9vdE5vZGVzICYmICF0aGlzLl9vcHRpb25zLmluY2x1ZGVDb29yZGluYXRlU3lzdGVtQ29udmVyc2lvbk5vZGVzICYmIElzTm9vcE5vZGUocm9vdE5vZGUsIHRoaXMuX2JhYnlsb25TY2VuZS51c2VSaWdodEhhbmRlZFN5c3RlbSkpIHtcclxuICAgICAgICAgICAgICAgIHJvb3ROb29wTm9kZXNSSC5wdXNoKC4uLnJvb3ROb2RlLmdldENoaWxkcmVuKCkpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JhYnlsb25TY2VuZS51c2VSaWdodEhhbmRlZFN5c3RlbSkge1xyXG4gICAgICAgICAgICAgICAgcm9vdE5vZGVzUkgucHVzaChyb290Tm9kZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByb290Tm9kZXNMSC5wdXNoKHJvb3ROb2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fbGlzdEF2YWlsYWJsZUNhbWVyYXMoKTtcclxuICAgICAgICB0aGlzLl9saXN0QXZhaWxhYmxlU2tlbGV0b25zKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHN0YXRlTEggPSBuZXcgRXhwb3J0ZXJTdGF0ZSh0cnVlLCBmYWxzZSk7XHJcbiAgICAgICAgc2NlbmUubm9kZXMucHVzaCguLi4oYXdhaXQgdGhpcy5fZXhwb3J0Tm9kZXNBc3luYyhyb290Tm9kZXNMSCwgc3RhdGVMSCkpKTtcclxuICAgICAgICBjb25zdCBzdGF0ZVJIID0gbmV3IEV4cG9ydGVyU3RhdGUoZmFsc2UsIGZhbHNlKTtcclxuICAgICAgICBzY2VuZS5ub2Rlcy5wdXNoKC4uLihhd2FpdCB0aGlzLl9leHBvcnROb2Rlc0FzeW5jKHJvb3ROb2Rlc1JILCBzdGF0ZVJIKSkpO1xyXG4gICAgICAgIGNvbnN0IG5vb3BSSCA9IG5ldyBFeHBvcnRlclN0YXRlKGZhbHNlLCB0cnVlKTtcclxuICAgICAgICBzY2VuZS5ub2Rlcy5wdXNoKC4uLihhd2FpdCB0aGlzLl9leHBvcnROb2Rlc0FzeW5jKHJvb3ROb29wTm9kZXNSSCwgbm9vcFJIKSkpO1xyXG5cclxuICAgICAgICBpZiAoc2NlbmUubm9kZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NjZW5lcy5wdXNoKHNjZW5lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2V4cG9ydEFuZEFzc2lnbkNhbWVyYXMoKTtcclxuICAgICAgICB0aGlzLl9leHBvcnRBbmRBc3NpZ25Ta2VsZXRvbnMoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2JhYnlsb25TY2VuZS5hbmltYXRpb25Hcm91cHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIF9HTFRGQW5pbWF0aW9uLl9DcmVhdGVOb2RlQW5kTW9ycGhBbmltYXRpb25Gcm9tQW5pbWF0aW9uR3JvdXBzKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fYmFieWxvblNjZW5lLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fYW5pbWF0aW9ucyxcclxuICAgICAgICAgICAgICAgIHRoaXMuX25vZGVNYXAsXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9idWZmZXJNYW5hZ2VyLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fYnVmZmVyVmlld3MsXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hY2Nlc3NvcnMsXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hbmltYXRpb25TYW1wbGVSYXRlLFxyXG4gICAgICAgICAgICAgICAgc3RhdGVMSC5nZXROb2Rlc1NldCgpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fb3B0aW9ucy5zaG91bGRFeHBvcnRBbmltYXRpb25cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfc2hvdWxkRXhwb3J0Tm9kZShiYWJ5bG9uTm9kZTogTm9kZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSB0aGlzLl9zaG91bGRFeHBvcnROb2RlTWFwLmdldChiYWJ5bG9uTm9kZSk7XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLl9vcHRpb25zLnNob3VsZEV4cG9ydE5vZGUoYmFieWxvbk5vZGUpO1xyXG4gICAgICAgICAgICB0aGlzLl9zaG91bGRFeHBvcnROb2RlTWFwLnNldChiYWJ5bG9uTm9kZSwgcmVzdWx0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBfZXhwb3J0Tm9kZXNBc3luYyhiYWJ5bG9uUm9vdE5vZGVzOiBOb2RlW10sIHN0YXRlOiBFeHBvcnRlclN0YXRlKTogUHJvbWlzZTxudW1iZXJbXT4ge1xyXG4gICAgICAgIGNvbnN0IG5vZGVzID0gbmV3IEFycmF5PG51bWJlcj4oKTtcclxuXHJcbiAgICAgICAgdGhpcy5fZXhwb3J0QnVmZmVycyhiYWJ5bG9uUm9vdE5vZGVzLCBzdGF0ZSk7XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgYmFieWxvbk5vZGUgb2YgYmFieWxvblJvb3ROb2Rlcykge1xyXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYXdhaXQtaW4tbG9vcFxyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLl9leHBvcnROb2RlQXN5bmMoYmFieWxvbk5vZGUsIG5vZGVzLCBzdGF0ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbm9kZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY29sbGVjdEJ1ZmZlcnMoXHJcbiAgICAgICAgYmFieWxvbk5vZGU6IE5vZGUsXHJcbiAgICAgICAgYnVmZmVyVG9WZXJ0ZXhCdWZmZXJzTWFwOiBNYXA8QnVmZmVyLCBWZXJ0ZXhCdWZmZXJbXT4sXHJcbiAgICAgICAgdmVydGV4QnVmZmVyVG9NZXNoZXNNYXA6IE1hcDxWZXJ0ZXhCdWZmZXIsIEFic3RyYWN0TWVzaFtdPixcclxuICAgICAgICBtb3JwaFRhcmdldHNUb01lc2hlc01hcDogTWFwPE1vcnBoVGFyZ2V0LCBBYnN0cmFjdE1lc2hbXT4sXHJcbiAgICAgICAgc3RhdGU6IEV4cG9ydGVyU3RhdGVcclxuICAgICk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl9zaG91bGRFeHBvcnROb2RlKGJhYnlsb25Ob2RlKSAmJiBiYWJ5bG9uTm9kZSBpbnN0YW5jZW9mIEFic3RyYWN0TWVzaCAmJiBiYWJ5bG9uTm9kZS5nZW9tZXRyeSkge1xyXG4gICAgICAgICAgICBjb25zdCB2ZXJ0ZXhCdWZmZXJzID0gYmFieWxvbk5vZGUuZ2VvbWV0cnkuZ2V0VmVydGV4QnVmZmVycygpO1xyXG4gICAgICAgICAgICBpZiAodmVydGV4QnVmZmVycykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBraW5kIGluIHZlcnRleEJ1ZmZlcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIUlzU3RhbmRhcmRWZXJ0ZXhBdHRyaWJ1dGUoa2luZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZlcnRleEJ1ZmZlciA9IHZlcnRleEJ1ZmZlcnNba2luZF07XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuc2V0SGFzVmVydGV4Q29sb3JBbHBoYSh2ZXJ0ZXhCdWZmZXIsIGJhYnlsb25Ob2RlLmhhc1ZlcnRleEFscGhhKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBidWZmZXIgPSB2ZXJ0ZXhCdWZmZXIuX2J1ZmZlcjtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2ZXJ0ZXhCdWZmZXJBcnJheSA9IGJ1ZmZlclRvVmVydGV4QnVmZmVyc01hcC5nZXQoYnVmZmVyKSB8fCBbXTtcclxuICAgICAgICAgICAgICAgICAgICBidWZmZXJUb1ZlcnRleEJ1ZmZlcnNNYXAuc2V0KGJ1ZmZlciwgdmVydGV4QnVmZmVyQXJyYXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2ZXJ0ZXhCdWZmZXJBcnJheS5pbmRleE9mKHZlcnRleEJ1ZmZlcikgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRleEJ1ZmZlckFycmF5LnB1c2godmVydGV4QnVmZmVyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc2hlcyA9IHZlcnRleEJ1ZmZlclRvTWVzaGVzTWFwLmdldCh2ZXJ0ZXhCdWZmZXIpIHx8IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRleEJ1ZmZlclRvTWVzaGVzTWFwLnNldCh2ZXJ0ZXhCdWZmZXIsIG1lc2hlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1lc2hlcy5pbmRleE9mKGJhYnlsb25Ob2RlKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzaGVzLnB1c2goYmFieWxvbk5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgbW9ycGhUYXJnZXRNYW5hZ2VyID0gYmFieWxvbk5vZGUubW9ycGhUYXJnZXRNYW5hZ2VyO1xyXG5cclxuICAgICAgICAgICAgaWYgKG1vcnBoVGFyZ2V0TWFuYWdlcikge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgbW9ycGhJbmRleCA9IDA7IG1vcnBoSW5kZXggPCBtb3JwaFRhcmdldE1hbmFnZXIubnVtVGFyZ2V0czsgbW9ycGhJbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9ycGhUYXJnZXQgPSBtb3JwaFRhcmdldE1hbmFnZXIuZ2V0VGFyZ2V0KG1vcnBoSW5kZXgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXNoZXMgPSBtb3JwaFRhcmdldHNUb01lc2hlc01hcC5nZXQobW9ycGhUYXJnZXQpIHx8IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIG1vcnBoVGFyZ2V0c1RvTWVzaGVzTWFwLnNldChtb3JwaFRhcmdldCwgbWVzaGVzKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobWVzaGVzLmluZGV4T2YoYmFieWxvbk5vZGUpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNoZXMucHVzaChiYWJ5bG9uTm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGJhYnlsb25DaGlsZE5vZGUgb2YgYmFieWxvbk5vZGUuZ2V0Q2hpbGRyZW4oKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9jb2xsZWN0QnVmZmVycyhiYWJ5bG9uQ2hpbGROb2RlLCBidWZmZXJUb1ZlcnRleEJ1ZmZlcnNNYXAsIHZlcnRleEJ1ZmZlclRvTWVzaGVzTWFwLCBtb3JwaFRhcmdldHNUb01lc2hlc01hcCwgc3RhdGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9leHBvcnRCdWZmZXJzKGJhYnlsb25Sb290Tm9kZXM6IE5vZGVbXSwgc3RhdGU6IEV4cG9ydGVyU3RhdGUpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBidWZmZXJUb1ZlcnRleEJ1ZmZlcnNNYXAgPSBuZXcgTWFwPEJ1ZmZlciwgVmVydGV4QnVmZmVyW10+KCk7XHJcbiAgICAgICAgY29uc3QgdmVydGV4QnVmZmVyVG9NZXNoZXNNYXAgPSBuZXcgTWFwPFZlcnRleEJ1ZmZlciwgQWJzdHJhY3RNZXNoW10+KCk7XHJcbiAgICAgICAgY29uc3QgbW9ycGhUYXJnZXRzTWVzaGVzTWFwID0gbmV3IE1hcDxNb3JwaFRhcmdldCwgQWJzdHJhY3RNZXNoW10+KCk7XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgYmFieWxvbk5vZGUgb2YgYmFieWxvblJvb3ROb2Rlcykge1xyXG4gICAgICAgICAgICB0aGlzLl9jb2xsZWN0QnVmZmVycyhiYWJ5bG9uTm9kZSwgYnVmZmVyVG9WZXJ0ZXhCdWZmZXJzTWFwLCB2ZXJ0ZXhCdWZmZXJUb01lc2hlc01hcCwgbW9ycGhUYXJnZXRzTWVzaGVzTWFwLCBzdGF0ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBidWZmZXJzID0gQXJyYXkuZnJvbShidWZmZXJUb1ZlcnRleEJ1ZmZlcnNNYXAua2V5cygpKTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBidWZmZXIgb2YgYnVmZmVycykge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYnVmZmVyLmdldERhdGEoKTtcclxuICAgICAgICAgICAgaWYgKCFkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJCdWZmZXIgZGF0YSBpcyBub3QgYXZhaWxhYmxlXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCB2ZXJ0ZXhCdWZmZXJzID0gYnVmZmVyVG9WZXJ0ZXhCdWZmZXJzTWFwLmdldChidWZmZXIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCF2ZXJ0ZXhCdWZmZXJzKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgYnl0ZVN0cmlkZSA9IHZlcnRleEJ1ZmZlcnNbMF0uYnl0ZVN0cmlkZTtcclxuICAgICAgICAgICAgaWYgKHZlcnRleEJ1ZmZlcnMuc29tZSgodmVydGV4QnVmZmVyKSA9PiB2ZXJ0ZXhCdWZmZXIuYnl0ZVN0cmlkZSAhPT0gYnl0ZVN0cmlkZSkpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlZlcnRleCBidWZmZXJzIHBvaW50aW5nIHRvIHRoZSBzYW1lIGJ1ZmZlciBtdXN0IGhhdmUgdGhlIHNhbWUgYnl0ZSBzdHJpZGVcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGJ5dGVzID0gRGF0YUFycmF5VG9VaW50OEFycmF5KGRhdGEpLnNsaWNlKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBBcHBseSBub3JtYWxpemF0aW9ucyBhbmQgY29sb3IgY29ycmVjdGlvbnMgdG8gYnVmZmVyIGRhdGEgaW4tcGxhY2UuXHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgdmVydGV4QnVmZmVyIG9mIHZlcnRleEJ1ZmZlcnMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1lc2hlcyA9IHZlcnRleEJ1ZmZlclRvTWVzaGVzTWFwLmdldCh2ZXJ0ZXhCdWZmZXIpITtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgYnl0ZU9mZnNldCwgYnl0ZVN0cmlkZSwgY29tcG9uZW50Q291bnQsIHR5cGUsIGNvdW50LCBub3JtYWxpemVkLCBraW5kIH0gPSBHZXRWZXJ0ZXhCdWZmZXJJbmZvKHZlcnRleEJ1ZmZlciwgbWVzaGVzKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGtpbmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBOb3JtYWxpemUgbm9ybWFscyBhbmQgdGFuZ2VudHMuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuTm9ybWFsS2luZDpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5UYW5nZW50S2luZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBFbnVtZXJhdGVGbG9hdFZhbHVlcyhieXRlcywgYnl0ZU9mZnNldCwgYnl0ZVN0cmlkZSwgY29tcG9uZW50Q291bnQsIHR5cGUsIGNvdW50LCBub3JtYWxpemVkLCAodmFsdWVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsZW5ndGggPSBNYXRoLnNxcnQodmFsdWVzWzBdICogdmFsdWVzWzBdICsgdmFsdWVzWzFdICogdmFsdWVzWzFdICsgdmFsdWVzWzJdICogdmFsdWVzWzJdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW52TGVuZ3RoID0gMSAvIGxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXNbMF0gKj0gaW52TGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlc1sxXSAqPSBpbnZMZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzWzJdICo9IGludkxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBDb252ZXJ0IFN0YW5kYXJkTWF0ZXJpYWwgdmVydGV4IGNvbG9ycyBmcm9tIGdhbW1hIHRvIGxpbmVhciBzcGFjZS5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5Db2xvcktpbmQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RkTWF0ZXJpYWxDb3VudCA9IG1lc2hlcy5maWx0ZXIoKG1lc2gpID0+IG1lc2gubWF0ZXJpYWwgaW5zdGFuY2VvZiBTdGFuZGFyZE1hdGVyaWFsIHx8IG1lc2gubWF0ZXJpYWwgPT0gbnVsbCkubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RkTWF0ZXJpYWxDb3VudCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhazsgLy8gQnVmZmVyIG5vdCB1c2VkIGJ5IFN0YW5kYXJkTWF0ZXJpYWxzLCBzbyBubyBjb252ZXJzaW9uIG5lZWRlZC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBJbXBsZW1lbnQgdGhpcyBjYXNlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RkTWF0ZXJpYWxDb3VudCAhPSBtZXNoZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dnZXIuV2FybihcIk5vdCBjb252ZXJ0aW5nIHZlcnRleCBjb2xvciBzcGFjZSwgYXMgYnVmZmVyIGlzIHNoYXJlZCBieSBTdGFuZGFyZE1hdGVyaWFscyBhbmQgb3RoZXIgbWF0ZXJpYWwgdHlwZXMuIFJlc3VsdHMgbWF5IGxvb2sgaW5jb3JyZWN0LlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09IFZlcnRleEJ1ZmZlci5VTlNJR05FRF9CWVRFKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dnZXIuV2FybihcIkNvbnZlcnRpbmcgdWludDggdmVydGV4IGNvbG9ycyB0byBsaW5lYXIgc3BhY2UuIFJlc3VsdHMgbWF5IGxvb2sgaW5jb3JyZWN0LlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmVydGV4RGF0YTMgPSBuZXcgQ29sb3IzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZlcnRleERhdGE0ID0gbmV3IENvbG9yNCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1c2VFeGFjdFNyZ2JDb252ZXJzaW9ucyA9IHRoaXMuX2JhYnlsb25TY2VuZS5nZXRFbmdpbmUoKS51c2VFeGFjdFNyZ2JDb252ZXJzaW9ucztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEVudW1lcmF0ZUZsb2F0VmFsdWVzKGJ5dGVzLCBieXRlT2Zmc2V0LCBieXRlU3RyaWRlLCBjb21wb25lbnRDb3VudCwgdHlwZSwgY291bnQsIG5vcm1hbGl6ZWQsICh2YWx1ZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVzaW5nIHNlcGFyYXRlIENvbG9yMyBhbmQgQ29sb3I0IG9iamVjdHMgdG8gZW5zdXJlIHRoZSByaWdodCBmdW5jdGlvbnMgYXJlIGNhbGxlZC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZXMubGVuZ3RoID09PSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGV4RGF0YTMuZnJvbUFycmF5KHZhbHVlcywgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGV4RGF0YTMudG9MaW5lYXJTcGFjZVRvUmVmKHZlcnRleERhdGEzLCB1c2VFeGFjdFNyZ2JDb252ZXJzaW9ucyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGV4RGF0YTMudG9BcnJheSh2YWx1ZXMsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0ZXhEYXRhNC5mcm9tQXJyYXkodmFsdWVzLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0ZXhEYXRhNC50b0xpbmVhclNwYWNlVG9SZWYodmVydGV4RGF0YTQsIHVzZUV4YWN0U3JnYkNvbnZlcnNpb25zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0ZXhEYXRhNC50b0FycmF5KHZhbHVlcywgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gUGVyZm9ybSBjb29yZGluYXRlIGNvbnZlcnNpb25zLCBpZiBuZWVkZWQsIHRvIGJ1ZmZlciBkYXRhIGluLXBsYWNlIChvbmx5IGZvciBwb3NpdGlvbnMsIG5vcm1hbHMgYW5kIHRhbmdlbnRzKS5cclxuICAgICAgICAgICAgaWYgKHN0YXRlLmNvbnZlcnRUb1JpZ2h0SGFuZGVkKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHZlcnRleEJ1ZmZlciBvZiB2ZXJ0ZXhCdWZmZXJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVzaGVzID0gdmVydGV4QnVmZmVyVG9NZXNoZXNNYXAuZ2V0KHZlcnRleEJ1ZmZlcikhO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgYnl0ZU9mZnNldCwgYnl0ZVN0cmlkZSwgY29tcG9uZW50Q291bnQsIHR5cGUsIGNvdW50LCBub3JtYWxpemVkLCBraW5kIH0gPSBHZXRWZXJ0ZXhCdWZmZXJJbmZvKHZlcnRleEJ1ZmZlciwgbWVzaGVzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChraW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLlBvc2l0aW9uS2luZDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuTm9ybWFsS2luZDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuVGFuZ2VudEtpbmQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVudW1lcmF0ZUZsb2F0VmFsdWVzKGJ5dGVzLCBieXRlT2Zmc2V0LCBieXRlU3RyaWRlLCBjb21wb25lbnRDb3VudCwgdHlwZSwgY291bnQsIG5vcm1hbGl6ZWQsICh2YWx1ZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXNbMF0gPSAtdmFsdWVzWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gU2F2ZSBjb252ZXJ0ZWQgYnl0ZXMgZm9yIG1pbi9tYXggY29tcHV0YXRpb24uXHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5jb252ZXJ0ZWRUb1JpZ2h0SGFuZGVkQnVmZmVycy5zZXQoYnVmZmVyLCBieXRlcyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSBidWZmZXIgdmlldywgYnV0IGRlZmVyIGFjY2Vzc29yIGNyZWF0aW9uIGZvciBsYXRlci4gSW5zdGVhZCwgdHJhY2sgaXQgdmlhIEV4cG9ydGVyU3RhdGUuXHJcbiAgICAgICAgICAgIGNvbnN0IGJ1ZmZlclZpZXcgPSB0aGlzLl9idWZmZXJNYW5hZ2VyLmNyZWF0ZUJ1ZmZlclZpZXcoYnl0ZXMsIGJ5dGVTdHJpZGUpO1xyXG4gICAgICAgICAgICBzdGF0ZS5zZXRWZXJ0ZXhCdWZmZXJWaWV3KGJ1ZmZlciwgYnVmZmVyVmlldyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBmbG9hdE1hdHJpY2VzSW5kaWNlcyA9IG5ldyBNYXA8VmVydGV4QnVmZmVyLCBGbG9hdEFycmF5PigpO1xyXG5cclxuICAgICAgICAgICAgLy8gSWYgYnVmZmVycyBhcmUgb2YgdHlwZSBNYXRyaWNlc0luZGljZXNLaW5kIGFuZCBoYXZlIGZsb2F0IHZhbHVlcywgd2UgbmVlZCB0byBjcmVhdGUgYSBuZXcgYnVmZmVyIGluc3RlYWQuXHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgdmVydGV4QnVmZmVyIG9mIHZlcnRleEJ1ZmZlcnMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1lc2hlcyA9IHZlcnRleEJ1ZmZlclRvTWVzaGVzTWFwLmdldCh2ZXJ0ZXhCdWZmZXIpITtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsga2luZCwgdG90YWxWZXJ0aWNlcyB9ID0gR2V0VmVydGV4QnVmZmVySW5mbyh2ZXJ0ZXhCdWZmZXIsIG1lc2hlcyk7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGtpbmQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5NYXRyaWNlc0luZGljZXNLaW5kOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLk1hdHJpY2VzSW5kaWNlc0V4dHJhS2luZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmVydGV4QnVmZmVyLnR5cGUgPT0gVmVydGV4QnVmZmVyLkZMT0FUKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmbG9hdERhdGEgPSB2ZXJ0ZXhCdWZmZXIuZ2V0RmxvYXREYXRhKHRvdGFsVmVydGljZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZsb2F0RGF0YSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0TWF0cmljZXNJbmRpY2VzLnNldCh2ZXJ0ZXhCdWZmZXIsIGZsb2F0RGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChmbG9hdE1hdHJpY2VzSW5kaWNlcy5zaXplICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBMb2dnZXIuV2FybihcclxuICAgICAgICAgICAgICAgICAgICBgSm9pbnRzIGNvbnZlcnNpb24gbmVlZGVkOiBzb21lIGpvaW50cyBhcmUgc3RvcmVkIGFzIGZsb2F0cyBpbiBCYWJ5bG9uIGJ1dCBHTFRGIHJlcXVpcmVzIFVOU0lHTkVEIEJZVEVTLiBXZSB3aWxsIHBlcmZvcm0gdGhlIGNvbnZlcnNpb24gYnV0IHRoaXMgbWlnaHQgbGVhZCB0byB1bnVzZWQgZGF0YSBpbiB0aGUgYnVmZmVyLmBcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGZsb2F0QXJyYXlWZXJ0ZXhCdWZmZXJzID0gQXJyYXkuZnJvbShmbG9hdE1hdHJpY2VzSW5kaWNlcy5rZXlzKCkpO1xyXG5cclxuICAgICAgICAgICAgZm9yIChjb25zdCB2ZXJ0ZXhCdWZmZXIgb2YgZmxvYXRBcnJheVZlcnRleEJ1ZmZlcnMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFycmF5ID0gZmxvYXRNYXRyaWNlc0luZGljZXMuZ2V0KHZlcnRleEJ1ZmZlcik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFhcnJheSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzMTZCaXQgPSBGbG9hdHNOZWVkMTZCaXRJbnRlZ2VyKGFycmF5KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0FycmF5ID0gbmV3IChpczE2Qml0ID8gVWludDE2QXJyYXkgOiBVaW50OEFycmF5KShhcnJheS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0FycmF5W2luZGV4XSA9IGFycmF5W2luZGV4XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IGJ1ZmZlclZpZXcgPSB0aGlzLl9idWZmZXJNYW5hZ2VyLmNyZWF0ZUJ1ZmZlclZpZXcobmV3QXJyYXksIDQgKiAoaXMxNkJpdCA/IDIgOiAxKSk7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5zZXRSZW1hcHBlZEJ1ZmZlclZpZXcoYnVmZmVyLCB2ZXJ0ZXhCdWZmZXIsIGJ1ZmZlclZpZXcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBCdWlsZCBtb3JwaCB0YXJnZXRzIGJ1ZmZlcnNcclxuICAgICAgICBjb25zdCBtb3JwaFRhcmdldHMgPSBBcnJheS5mcm9tKG1vcnBoVGFyZ2V0c01lc2hlc01hcC5rZXlzKCkpO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IG1vcnBoVGFyZ2V0IG9mIG1vcnBoVGFyZ2V0cykge1xyXG4gICAgICAgICAgICBjb25zdCBtZXNoZXMgPSBtb3JwaFRhcmdldHNNZXNoZXNNYXAuZ2V0KG1vcnBoVGFyZ2V0KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghbWVzaGVzKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgZ2xURk1vcnBoVGFyZ2V0ID0gQnVpbGRNb3JwaFRhcmdldEJ1ZmZlcnMobW9ycGhUYXJnZXQsIG1lc2hlc1swXSwgdGhpcy5fYnVmZmVyTWFuYWdlciwgdGhpcy5fYnVmZmVyVmlld3MsIHRoaXMuX2FjY2Vzc29ycywgc3RhdGUuY29udmVydFRvUmlnaHRIYW5kZWQpO1xyXG5cclxuICAgICAgICAgICAgZm9yIChjb25zdCBtZXNoIG9mIG1lc2hlcykge1xyXG4gICAgICAgICAgICAgICAgc3RhdGUuYmluZE1vcnBoRGF0YVRvTWVzaChtZXNoLCBnbFRGTW9ycGhUYXJnZXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUHJvY2Vzc2VzIGEgbm9kZSB0byBiZSBleHBvcnRlZCB0byB0aGUgZ2xURiBmaWxlXHJcbiAgICAgKiBAcmV0dXJucyBBIHByb21pc2UgdGhhdCByZXNvbHZlcyBvbmNlIHRoZSBub2RlIGhhcyBiZWVuIGV4cG9ydGVkXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBhc3luYyBfZXhwb3J0Tm9kZUFzeW5jKGJhYnlsb25Ob2RlOiBOb2RlLCBwYXJlbnROb2RlQ2hpbGRyZW46IEFycmF5PG51bWJlcj4sIHN0YXRlOiBFeHBvcnRlclN0YXRlKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgbGV0IG5vZGVJbmRleCA9IHRoaXMuX25vZGVNYXAuZ2V0KGJhYnlsb25Ob2RlKTtcclxuICAgICAgICBpZiAobm9kZUluZGV4ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaWYgKCFwYXJlbnROb2RlQ2hpbGRyZW4uaW5jbHVkZXMobm9kZUluZGV4KSkge1xyXG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZUNoaWxkcmVuLnB1c2gobm9kZUluZGV4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBub2RlID0gYXdhaXQgdGhpcy5fY3JlYXRlTm9kZUFzeW5jKGJhYnlsb25Ob2RlLCBzdGF0ZSk7XHJcblxyXG4gICAgICAgIGlmIChub2RlKSB7XHJcbiAgICAgICAgICAgIG5vZGVJbmRleCA9IHRoaXMuX25vZGVzLmxlbmd0aDtcclxuICAgICAgICAgICAgdGhpcy5fbm9kZXMucHVzaChub2RlKTtcclxuICAgICAgICAgICAgdGhpcy5fbm9kZU1hcC5zZXQoYmFieWxvbk5vZGUsIG5vZGVJbmRleCk7XHJcbiAgICAgICAgICAgIHN0YXRlLnB1c2hFeHBvcnRlZE5vZGUoYmFieWxvbk5vZGUpO1xyXG4gICAgICAgICAgICBwYXJlbnROb2RlQ2hpbGRyZW4ucHVzaChub2RlSW5kZXgpO1xyXG5cclxuICAgICAgICAgICAgLy8gUHJvY2VzcyBub2RlJ3MgYW5pbWF0aW9ucyBvbmNlIHRoZSBub2RlIGhhcyBiZWVuIGFkZGVkIHRvIG5vZGVNYXAgKFRPRE86IFRoaXMgc2hvdWxkIGJlIHJlZmFjdG9yZWQpXHJcbiAgICAgICAgICAgIGNvbnN0IHJ1bnRpbWVHTFRGQW5pbWF0aW9uOiBJQW5pbWF0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJydW50aW1lIGFuaW1hdGlvbnNcIixcclxuICAgICAgICAgICAgICAgIGNoYW5uZWxzOiBbXSxcclxuICAgICAgICAgICAgICAgIHNhbXBsZXJzOiBbXSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc3QgaWRsZUdMVEZBbmltYXRpb25zOiBJQW5pbWF0aW9uW10gPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5fYmFieWxvblNjZW5lLmFuaW1hdGlvbkdyb3Vwcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIF9HTFRGQW5pbWF0aW9uLl9DcmVhdGVNb3JwaFRhcmdldEFuaW1hdGlvbkZyb21Nb3JwaFRhcmdldEFuaW1hdGlvbnMoXHJcbiAgICAgICAgICAgICAgICAgICAgYmFieWxvbk5vZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVudGltZUdMVEZBbmltYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgaWRsZUdMVEZBbmltYXRpb25zLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX25vZGVNYXAsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbm9kZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYnVmZmVyTWFuYWdlcixcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9idWZmZXJWaWV3cyxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9hY2Nlc3NvcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYW5pbWF0aW9uU2FtcGxlUmF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5jb252ZXJ0VG9SaWdodEhhbmRlZCxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9vcHRpb25zLnNob3VsZEV4cG9ydEFuaW1hdGlvblxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGlmIChiYWJ5bG9uTm9kZS5hbmltYXRpb25zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIF9HTFRGQW5pbWF0aW9uLl9DcmVhdGVOb2RlQW5pbWF0aW9uRnJvbU5vZGVBbmltYXRpb25zKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uTm9kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcnVudGltZUdMVEZBbmltYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkbGVHTFRGQW5pbWF0aW9ucyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbm9kZU1hcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbm9kZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2J1ZmZlck1hbmFnZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2J1ZmZlclZpZXdzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9hY2Nlc3NvcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2FuaW1hdGlvblNhbXBsZVJhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLmNvbnZlcnRUb1JpZ2h0SGFuZGVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9vcHRpb25zLnNob3VsZEV4cG9ydEFuaW1hdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChydW50aW1lR0xURkFuaW1hdGlvbi5jaGFubmVscy5sZW5ndGggJiYgcnVudGltZUdMVEZBbmltYXRpb24uc2FtcGxlcnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hbmltYXRpb25zLnB1c2gocnVudGltZUdMVEZBbmltYXRpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlkbGVHTFRGQW5pbWF0aW9ucy5mb3JFYWNoKChpZGxlR0xURkFuaW1hdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlkbGVHTFRGQW5pbWF0aW9uLmNoYW5uZWxzLmxlbmd0aCAmJiBpZGxlR0xURkFuaW1hdGlvbi5zYW1wbGVycy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9hbmltYXRpb25zLnB1c2goaWRsZUdMVEZBbmltYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEJlZ2luIHByb2Nlc3NpbmcgY2hpbGQgbm9kZXMgb25jZSBwYXJlbnQgaGFzIGJlZW4gYWRkZWQgdG8gdGhlIG5vZGUgbGlzdFxyXG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gbm9kZSA/IFtdIDogcGFyZW50Tm9kZUNoaWxkcmVuO1xyXG4gICAgICAgIGZvciAoY29uc3QgYmFieWxvbkNoaWxkTm9kZSBvZiBiYWJ5bG9uTm9kZS5nZXRDaGlsZHJlbigpKSB7XHJcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hd2FpdC1pbi1sb29wXHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuX2V4cG9ydE5vZGVBc3luYyhiYWJ5bG9uQ2hpbGROb2RlLCBjaGlsZHJlbiwgc3RhdGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG5vZGUgJiYgY2hpbGRyZW4ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIG5vZGUuY2hpbGRyZW4gPSBjaGlsZHJlbjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgZ2xURiBub2RlIGZyb20gYSBCYWJ5bG9uLmpzIG5vZGUuIElmIHNraXBwZWQsIHJldHVybnMgbnVsbC5cclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGFzeW5jIF9jcmVhdGVOb2RlQXN5bmMoYmFieWxvbk5vZGU6IE5vZGUsIHN0YXRlOiBFeHBvcnRlclN0YXRlKTogUHJvbWlzZTxOdWxsYWJsZTxJTm9kZT4+IHtcclxuICAgICAgICBpZiAoIXRoaXMuX3Nob3VsZEV4cG9ydE5vZGUoYmFieWxvbk5vZGUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgbm9kZTogSU5vZGUgPSB7fTtcclxuXHJcbiAgICAgICAgaWYgKGJhYnlsb25Ob2RlLm5hbWUpIHtcclxuICAgICAgICAgICAgbm9kZS5uYW1lID0gYmFieWxvbk5vZGUubmFtZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIE5vZGUgbWV0YWRhdGFcclxuICAgICAgICBpZiAoYmFieWxvbk5vZGUubWV0YWRhdGEpIHtcclxuICAgICAgICAgICAgY29uc3QgZXh0cmFzID0gdGhpcy5fb3B0aW9ucy5tZXRhZGF0YVNlbGVjdG9yKGJhYnlsb25Ob2RlLm1ldGFkYXRhKTtcclxuICAgICAgICAgICAgaWYgKGV4dHJhcykge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5leHRyYXMgPSBleHRyYXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChiYWJ5bG9uTm9kZSBpbnN0YW5jZW9mIFRyYW5zZm9ybU5vZGUpIHtcclxuICAgICAgICAgICAgdGhpcy5fc2V0Tm9kZVRyYW5zZm9ybWF0aW9uKG5vZGUsIGJhYnlsb25Ob2RlLCBzdGF0ZS5jb252ZXJ0VG9SaWdodEhhbmRlZCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoYmFieWxvbk5vZGUgaW5zdGFuY2VvZiBBYnN0cmFjdE1lc2gpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJhYnlsb25NZXNoID0gYmFieWxvbk5vZGUgaW5zdGFuY2VvZiBJbnN0YW5jZWRNZXNoID8gYmFieWxvbk5vZGUuc291cmNlTWVzaCA6IChiYWJ5bG9uTm9kZSBhcyBNZXNoKTtcclxuICAgICAgICAgICAgICAgIGlmIChiYWJ5bG9uTWVzaC5zdWJNZXNoZXMgJiYgYmFieWxvbk1lc2guc3ViTWVzaGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLm1lc2ggPSBhd2FpdCB0aGlzLl9leHBvcnRNZXNoQXN5bmMoYmFieWxvbk1lc2gsIHN0YXRlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYmFieWxvbk5vZGUuc2tlbGV0b24pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBza2luID0gdGhpcy5fc2tpbk1hcC5nZXQoYmFieWxvbk5vZGUuc2tlbGV0b24pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2tpbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9ub2Rlc1NraW5NYXAuZ2V0KHNraW4pID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX25vZGVzU2tpbk1hcC5zZXQoc2tpbiwgW10pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9ub2Rlc1NraW5NYXAuZ2V0KHNraW4pPy5wdXNoKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGJhYnlsb25Ob2RlIGluc3RhbmNlb2YgQ2FtZXJhKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdsdGZDYW1lcmEgPSB0aGlzLl9jYW1lcmFzTWFwLmdldChiYWJ5bG9uTm9kZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZ2x0ZkNhbWVyYSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX25vZGVzQ2FtZXJhTWFwLmdldChnbHRmQ2FtZXJhKSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbm9kZXNDYW1lcmFNYXAuc2V0KGdsdGZDYW1lcmEsIFtdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnRCYWJ5bG9uTm9kZSA9IGJhYnlsb25Ob2RlLnBhcmVudDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NldENhbWVyYVRyYW5zZm9ybWF0aW9uKG5vZGUsIGJhYnlsb25Ob2RlLCBzdGF0ZS5jb252ZXJ0VG9SaWdodEhhbmRlZCwgcGFyZW50QmFieWxvbk5vZGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIElmIGEgY2FtZXJhIGhhcyBhIG5vZGUgdGhhdCB3YXMgYWRkZWQgYnkgdGhlIEdMVEYgaW1wb3J0ZXIsIHdlIGNhbiBqdXN0IHVzZSB0aGUgcGFyZW50IG5vZGUgdHJhbnNmb3JtIGFzIHRoZSBcImNhbWVyYVwiIHRyYW5zZm9ybS5cclxuICAgICAgICAgICAgICAgIGlmIChwYXJlbnRCYWJ5bG9uTm9kZSAmJiBJc1BhcmVudEFkZGVkQnlJbXBvcnRlcihiYWJ5bG9uTm9kZSwgcGFyZW50QmFieWxvbk5vZGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyZW50Tm9kZUluZGV4ID0gdGhpcy5fbm9kZU1hcC5nZXQocGFyZW50QmFieWxvbk5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJlbnROb2RlSW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyZW50Tm9kZSA9IHRoaXMuX25vZGVzW3BhcmVudE5vZGVJbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX25vZGVzQ2FtZXJhTWFwLmdldChnbHRmQ2FtZXJhKT8ucHVzaChwYXJlbnROb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7IC8vIFNraXAgZXhwb3J0aW5nIHRoaXMgbm9kZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5jb252ZXJ0VG9SaWdodEhhbmRlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIENvbnZlcnRUb1JpZ2h0SGFuZGVkTm9kZShub2RlKTtcclxuICAgICAgICAgICAgICAgICAgICBSb3RhdGVOb2RlMTgwWShub2RlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuX25vZGVzQ2FtZXJhTWFwLmdldChnbHRmQ2FtZXJhKT8ucHVzaChub2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQXBwbHkgZXh0ZW5zaW9ucyB0byB0aGUgbm9kZS4gSWYgdGhpcyByZXNvbHZlcyB0byBudWxsLCBpdCBtZWFucyB3ZSBzaG91bGQgc2tpcCBleHBvcnRpbmcgdGhpcyBub2RlXHJcbiAgICAgICAgY29uc3QgcHJvY2Vzc2VkTm9kZSA9IGF3YWl0IHRoaXMuX2V4dGVuc2lvbnNQb3N0RXhwb3J0Tm9kZUFzeW5jKFwiZXhwb3J0Tm9kZUFzeW5jXCIsIG5vZGUsIGJhYnlsb25Ob2RlLCB0aGlzLl9ub2RlTWFwLCBzdGF0ZS5jb252ZXJ0VG9SaWdodEhhbmRlZCk7XHJcbiAgICAgICAgaWYgKCFwcm9jZXNzZWROb2RlKSB7XHJcbiAgICAgICAgICAgIExvZ2dlci5XYXJuKGBOb3QgZXhwb3J0aW5nIG5vZGUgJHtiYWJ5bG9uTm9kZS5uYW1lfWApO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2V4cG9ydEluZGljZXMoXHJcbiAgICAgICAgaW5kaWNlczogTnVsbGFibGU8SW5kaWNlc0FycmF5PixcclxuICAgICAgICBpczMyQml0czogYm9vbGVhbixcclxuICAgICAgICBzdGFydDogbnVtYmVyLFxyXG4gICAgICAgIGNvdW50OiBudW1iZXIsXHJcbiAgICAgICAgb2Zmc2V0OiBudW1iZXIsXHJcbiAgICAgICAgZmlsbE1vZGU6IG51bWJlcixcclxuICAgICAgICBzaWRlT3JpZW50YXRpb246IG51bWJlcixcclxuICAgICAgICBzdGF0ZTogRXhwb3J0ZXJTdGF0ZSxcclxuICAgICAgICBwcmltaXRpdmU6IElNZXNoUHJpbWl0aXZlXHJcbiAgICApOiB2b2lkIHtcclxuICAgICAgICBsZXQgaW5kaWNlc1RvRXhwb3J0ID0gaW5kaWNlcztcclxuXHJcbiAgICAgICAgcHJpbWl0aXZlLm1vZGUgPSBHZXRQcmltaXRpdmVNb2RlKGZpbGxNb2RlKTtcclxuXHJcbiAgICAgICAgLy8gRmxpcCBpZiB0cmlhbmdsZSB3aW5kaW5nIG9yZGVyIGlzIG5vdCBDQ1cgYXMgZ2xURiBpcyBhbHdheXMgQ0NXLlxyXG4gICAgICAgIGNvbnN0IGludmVydGVkTWF0ZXJpYWwgPSBzaWRlT3JpZW50YXRpb24gIT09IE1hdGVyaWFsLkNvdW50ZXJDbG9ja1dpc2VTaWRlT3JpZW50YXRpb247XHJcblxyXG4gICAgICAgIGNvbnN0IGZsaXBXaGVuSW52ZXJ0ZWRNYXRlcmlhbCA9ICFzdGF0ZS53YXNBZGRlZEJ5Tm9vcE5vZGUgJiYgaW52ZXJ0ZWRNYXRlcmlhbDtcclxuXHJcbiAgICAgICAgY29uc3QgZmxpcCA9IElzVHJpYW5nbGVGaWxsTW9kZShmaWxsTW9kZSkgJiYgZmxpcFdoZW5JbnZlcnRlZE1hdGVyaWFsO1xyXG5cclxuICAgICAgICBpZiAoZmxpcCkge1xyXG4gICAgICAgICAgICBpZiAoZmlsbE1vZGUgPT09IE1hdGVyaWFsLlRyaWFuZ2xlU3RyaXBEcmF3TW9kZSB8fCBmaWxsTW9kZSA9PT0gTWF0ZXJpYWwuVHJpYW5nbGVGYW5EcmF3TW9kZSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVHJpYW5nbGUgc3RyaXAvZmFuIGZpbGwgbW9kZSBpcyBub3QgaW1wbGVtZW50ZWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHByaW1pdGl2ZS5tb2RlID0gR2V0UHJpbWl0aXZlTW9kZShmaWxsTW9kZSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBuZXdJbmRpY2VzID0gaXMzMkJpdHMgPyBuZXcgVWludDMyQXJyYXkoY291bnQpIDogbmV3IFVpbnQxNkFycmF5KGNvdW50KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpbmRpY2VzKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSArIDIgPCBjb3VudDsgaSArPSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3SW5kaWNlc1tpXSA9IGluZGljZXNbc3RhcnQgKyBpXSArIG9mZnNldDtcclxuICAgICAgICAgICAgICAgICAgICBuZXdJbmRpY2VzW2kgKyAxXSA9IGluZGljZXNbc3RhcnQgKyBpICsgMl0gKyBvZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3SW5kaWNlc1tpICsgMl0gPSBpbmRpY2VzW3N0YXJ0ICsgaSArIDFdICsgb2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgKyAyIDwgY291bnQ7IGkgKz0gMykge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0luZGljZXNbaV0gPSBpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0luZGljZXNbaSArIDFdID0gaSArIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3SW5kaWNlc1tpICsgMl0gPSBpICsgMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW5kaWNlc1RvRXhwb3J0ID0gbmV3SW5kaWNlcztcclxuICAgICAgICB9IGVsc2UgaWYgKGluZGljZXMgJiYgb2Zmc2V0ICE9PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0luZGljZXMgPSBpczMyQml0cyA/IG5ldyBVaW50MzJBcnJheShjb3VudCkgOiBuZXcgVWludDE2QXJyYXkoY291bnQpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIG5ld0luZGljZXNbaV0gPSBpbmRpY2VzW3N0YXJ0ICsgaV0gKyBvZmZzZXQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGluZGljZXNUb0V4cG9ydCA9IG5ld0luZGljZXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaW5kaWNlc1RvRXhwb3J0KSB7XHJcbiAgICAgICAgICAgIGxldCBhY2Nlc3NvckluZGV4ID0gc3RhdGUuZ2V0SW5kaWNlc0FjY2Vzc29yKGluZGljZXMsIHN0YXJ0LCBjb3VudCwgb2Zmc2V0LCBmbGlwKTtcclxuICAgICAgICAgICAgaWYgKGFjY2Vzc29ySW5kZXggPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYnl0ZXMgPSBJbmRpY2VzQXJyYXlUb1R5cGVkQXJyYXkoaW5kaWNlc1RvRXhwb3J0LCAwLCBjb3VudCwgaXMzMkJpdHMpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYnVmZmVyVmlldyA9IHRoaXMuX2J1ZmZlck1hbmFnZXIuY3JlYXRlQnVmZmVyVmlldyhieXRlcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50VHlwZSA9IGlzMzJCaXRzID8gQWNjZXNzb3JDb21wb25lbnRUeXBlLlVOU0lHTkVEX0lOVCA6IEFjY2Vzc29yQ29tcG9uZW50VHlwZS5VTlNJR05FRF9TSE9SVDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2FjY2Vzc29ycy5wdXNoKHRoaXMuX2J1ZmZlck1hbmFnZXIuY3JlYXRlQWNjZXNzb3IoYnVmZmVyVmlldywgQWNjZXNzb3JUeXBlLlNDQUxBUiwgY29tcG9uZW50VHlwZSwgY291bnQsIDApKTtcclxuICAgICAgICAgICAgICAgIGFjY2Vzc29ySW5kZXggPSB0aGlzLl9hY2Nlc3NvcnMubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgICAgIHN0YXRlLnNldEluZGljZXNBY2Nlc3NvcihpbmRpY2VzLCBzdGFydCwgY291bnQsIG9mZnNldCwgZmxpcCwgYWNjZXNzb3JJbmRleCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHByaW1pdGl2ZS5pbmRpY2VzID0gYWNjZXNzb3JJbmRleDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZXhwb3J0VmVydGV4QnVmZmVyKHZlcnRleEJ1ZmZlcjogVmVydGV4QnVmZmVyLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsLCBzdGFydDogbnVtYmVyLCBjb3VudDogbnVtYmVyLCBzdGF0ZTogRXhwb3J0ZXJTdGF0ZSwgcHJpbWl0aXZlOiBJTWVzaFByaW1pdGl2ZSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGtpbmQgPSB2ZXJ0ZXhCdWZmZXIuZ2V0S2luZCgpO1xyXG5cclxuICAgICAgICBpZiAoIUlzU3RhbmRhcmRWZXJ0ZXhBdHRyaWJ1dGUoa2luZCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGtpbmQuc3RhcnRzV2l0aChcInV2XCIpICYmICF0aGlzLl9vcHRpb25zLmV4cG9ydFVudXNlZFVWcykge1xyXG4gICAgICAgICAgICBpZiAoIWJhYnlsb25NYXRlcmlhbCB8fCAhdGhpcy5fbWF0ZXJpYWxOZWVkc1VWc1NldC5oYXMoYmFieWxvbk1hdGVyaWFsKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgYWNjZXNzb3JJbmRleCA9IHN0YXRlLmdldFZlcnRleEFjY2Vzc29yKHZlcnRleEJ1ZmZlciwgc3RhcnQsIGNvdW50KTtcclxuXHJcbiAgICAgICAgaWYgKGFjY2Vzc29ySW5kZXggPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAvLyBHZXQgbWluL21heCBmcm9tIGNvbnZlcnRlZCBvciBvcmlnaW5hbCBkYXRhLlxyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gc3RhdGUuY29udmVydGVkVG9SaWdodEhhbmRlZEJ1ZmZlcnMuZ2V0KHZlcnRleEJ1ZmZlci5fYnVmZmVyKSB8fCB2ZXJ0ZXhCdWZmZXIuX2J1ZmZlci5nZXREYXRhKCkhO1xyXG4gICAgICAgICAgICBjb25zdCBtaW5NYXggPSBraW5kID09PSBWZXJ0ZXhCdWZmZXIuUG9zaXRpb25LaW5kID8gR2V0TWluTWF4KGRhdGEsIHZlcnRleEJ1ZmZlciwgc3RhcnQsIGNvdW50KSA6IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgICAgIC8vIEZvciB0aGUgcmVtYXBwZWQgYnVmZmVyIHZpZXdzIHdlIGNyZWF0ZWQgZm9yIGZsb2F0IG1hdHJpY2VzIGluZGljZXMsIG1ha2Ugc3VyZSB0byB1c2UgdGhlaXIgdXBkYXRlZCBpbmZvcm1hdGlvbi5cclxuICAgICAgICAgICAgY29uc3QgaXNGbG9hdE1hdHJpY2VzSW5kaWNlcyA9XHJcbiAgICAgICAgICAgICAgICAoa2luZCA9PT0gVmVydGV4QnVmZmVyLk1hdHJpY2VzSW5kaWNlc0tpbmQgfHwga2luZCA9PT0gVmVydGV4QnVmZmVyLk1hdHJpY2VzSW5kaWNlc0V4dHJhS2luZCkgJiYgdmVydGV4QnVmZmVyLnR5cGUgPT09IFZlcnRleEJ1ZmZlci5GTE9BVDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHZlcnRleEJ1ZmZlclR5cGUgPSBpc0Zsb2F0TWF0cmljZXNJbmRpY2VzID8gVmVydGV4QnVmZmVyLlVOU0lHTkVEX0JZVEUgOiB2ZXJ0ZXhCdWZmZXIudHlwZTtcclxuICAgICAgICAgICAgY29uc3QgdmVydGV4QnVmZmVyTm9ybWFsaXplZCA9IGlzRmxvYXRNYXRyaWNlc0luZGljZXMgPyB1bmRlZmluZWQgOiB2ZXJ0ZXhCdWZmZXIubm9ybWFsaXplZDtcclxuICAgICAgICAgICAgY29uc3QgYnVmZmVyVmlldyA9IGlzRmxvYXRNYXRyaWNlc0luZGljZXMgPyBzdGF0ZS5nZXRSZW1hcHBlZEJ1ZmZlclZpZXcodmVydGV4QnVmZmVyLl9idWZmZXIsIHZlcnRleEJ1ZmZlcikhIDogc3RhdGUuZ2V0VmVydGV4QnVmZmVyVmlldyh2ZXJ0ZXhCdWZmZXIuX2J1ZmZlcikhO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYnl0ZU9mZnNldCA9IHZlcnRleEJ1ZmZlci5ieXRlT2Zmc2V0ICsgc3RhcnQgKiB2ZXJ0ZXhCdWZmZXIuYnl0ZVN0cmlkZTtcclxuICAgICAgICAgICAgdGhpcy5fYWNjZXNzb3JzLnB1c2goXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9idWZmZXJNYW5hZ2VyLmNyZWF0ZUFjY2Vzc29yKFxyXG4gICAgICAgICAgICAgICAgICAgIGJ1ZmZlclZpZXcsXHJcbiAgICAgICAgICAgICAgICAgICAgR2V0QWNjZXNzb3JUeXBlKGtpbmQsIHN0YXRlLmhhc1ZlcnRleENvbG9yQWxwaGEodmVydGV4QnVmZmVyKSksXHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGV4QnVmZmVyVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICBjb3VudCxcclxuICAgICAgICAgICAgICAgICAgICBieXRlT2Zmc2V0LFxyXG4gICAgICAgICAgICAgICAgICAgIG1pbk1heCxcclxuICAgICAgICAgICAgICAgICAgICB2ZXJ0ZXhCdWZmZXJOb3JtYWxpemVkIC8vIFRPRE86IEZpbmQgb3RoZXIgcGxhY2VzIHdoZXJlIHRoaXMgaXMgbmVlZGVkLlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBhY2Nlc3NvckluZGV4ID0gdGhpcy5fYWNjZXNzb3JzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgIHN0YXRlLnNldFZlcnRleEFjY2Vzc29yKHZlcnRleEJ1ZmZlciwgc3RhcnQsIGNvdW50LCBhY2Nlc3NvckluZGV4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaW1pdGl2ZS5hdHRyaWJ1dGVzW0dldEF0dHJpYnV0ZVR5cGUoa2luZCldID0gYWNjZXNzb3JJbmRleDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIF9leHBvcnRNYXRlcmlhbEFzeW5jKGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwsIHZlcnRleEJ1ZmZlcnM6IHsgW2tpbmQ6IHN0cmluZ106IFZlcnRleEJ1ZmZlciB9LCBzdWJNZXNoOiBTdWJNZXNoLCBwcmltaXRpdmU6IElNZXNoUHJpbWl0aXZlKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgbGV0IG1hdGVyaWFsSW5kZXggPSB0aGlzLl9tYXRlcmlhbE1hcC5nZXQoYmFieWxvbk1hdGVyaWFsKTtcclxuICAgICAgICBpZiAobWF0ZXJpYWxJbmRleCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhhc1VWcyA9IHZlcnRleEJ1ZmZlcnMgJiYgT2JqZWN0LmtleXModmVydGV4QnVmZmVycykuc29tZSgoa2luZCkgPT4ga2luZC5zdGFydHNXaXRoKFwidXZcIikpO1xyXG4gICAgICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwgPSBiYWJ5bG9uTWF0ZXJpYWwgaW5zdGFuY2VvZiBNdWx0aU1hdGVyaWFsID8gYmFieWxvbk1hdGVyaWFsLnN1Yk1hdGVyaWFsc1tzdWJNZXNoLm1hdGVyaWFsSW5kZXhdISA6IGJhYnlsb25NYXRlcmlhbDtcclxuICAgICAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbCBpbnN0YW5jZW9mIFBCUk1hdGVyaWFsKSB7XHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbEluZGV4ID0gYXdhaXQgdGhpcy5fbWF0ZXJpYWxFeHBvcnRlci5leHBvcnRQQlJNYXRlcmlhbEFzeW5jKGJhYnlsb25NYXRlcmlhbCwgSW1hZ2VNaW1lVHlwZS5QTkcsIGhhc1VWcyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYmFieWxvbk1hdGVyaWFsIGluc3RhbmNlb2YgU3RhbmRhcmRNYXRlcmlhbCkge1xyXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWxJbmRleCA9IGF3YWl0IHRoaXMuX21hdGVyaWFsRXhwb3J0ZXIuZXhwb3J0U3RhbmRhcmRNYXRlcmlhbEFzeW5jKGJhYnlsb25NYXRlcmlhbCwgSW1hZ2VNaW1lVHlwZS5QTkcsIGhhc1VWcyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBMb2dnZXIuV2FybihgVW5zdXBwb3J0ZWQgbWF0ZXJpYWwgJyR7YmFieWxvbk1hdGVyaWFsLm5hbWV9JyB3aXRoIHR5cGUgJHtiYWJ5bG9uTWF0ZXJpYWwuZ2V0Q2xhc3NOYW1lKCl9YCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX21hdGVyaWFsTWFwLnNldChiYWJ5bG9uTWF0ZXJpYWwsIG1hdGVyaWFsSW5kZXgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpbWl0aXZlLm1hdGVyaWFsID0gbWF0ZXJpYWxJbmRleDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIF9leHBvcnRNZXNoQXN5bmMoYmFieWxvbk1lc2g6IE1lc2gsIHN0YXRlOiBFeHBvcnRlclN0YXRlKTogUHJvbWlzZTxudW1iZXI+IHtcclxuICAgICAgICBsZXQgbWVzaEluZGV4ID0gc3RhdGUuZ2V0TWVzaChiYWJ5bG9uTWVzaCk7XHJcbiAgICAgICAgaWYgKG1lc2hJbmRleCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtZXNoSW5kZXg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBtZXNoOiBJTWVzaCA9IHsgcHJpbWl0aXZlczogW10gfTtcclxuICAgICAgICBtZXNoSW5kZXggPSB0aGlzLl9tZXNoZXMubGVuZ3RoO1xyXG4gICAgICAgIHRoaXMuX21lc2hlcy5wdXNoKG1lc2gpO1xyXG4gICAgICAgIHN0YXRlLnNldE1lc2goYmFieWxvbk1lc2gsIG1lc2hJbmRleCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGluZGljZXMgPSBiYWJ5bG9uTWVzaC5pc1VuSW5kZXhlZCA/IG51bGwgOiBiYWJ5bG9uTWVzaC5nZXRJbmRpY2VzKCk7XHJcbiAgICAgICAgY29uc3QgdmVydGV4QnVmZmVycyA9IGJhYnlsb25NZXNoLmdlb21ldHJ5Py5nZXRWZXJ0ZXhCdWZmZXJzKCk7XHJcbiAgICAgICAgY29uc3QgbW9ycGhUYXJnZXRzID0gc3RhdGUuZ2V0TW9ycGhUYXJnZXRzRnJvbU1lc2goYmFieWxvbk1lc2gpO1xyXG5cclxuICAgICAgICBjb25zdCBpc0xpbmVzTWVzaCA9IGJhYnlsb25NZXNoIGluc3RhbmNlb2YgTGluZXNNZXNoO1xyXG4gICAgICAgIGNvbnN0IGlzR3JlYXNlZExpbmVNZXNoID0gYmFieWxvbk1lc2ggaW5zdGFuY2VvZiBHcmVhc2VkTGluZUJhc2VNZXNoO1xyXG5cclxuICAgICAgICBjb25zdCBzdWJNZXNoZXMgPSBiYWJ5bG9uTWVzaC5zdWJNZXNoZXM7XHJcbiAgICAgICAgaWYgKHZlcnRleEJ1ZmZlcnMgJiYgc3ViTWVzaGVzICYmIHN1Yk1lc2hlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qgc3ViTWVzaCBvZiBzdWJNZXNoZXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByaW1pdGl2ZTogSU1lc2hQcmltaXRpdmUgPSB7IGF0dHJpYnV0ZXM6IHt9IH07XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgYmFieWxvbk1hdGVyaWFsID0gc3ViTWVzaC5nZXRNYXRlcmlhbCgpIHx8IHRoaXMuX2JhYnlsb25TY2VuZS5kZWZhdWx0TWF0ZXJpYWw7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGlzR3JlYXNlZExpbmVNZXNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWw6IElNYXRlcmlhbCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogYmFieWxvbk1hdGVyaWFsLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmFieWxvbkxpbmVzTWVzaCA9IGJhYnlsb25NZXNoO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb2xvcldoaXRlID0gQ29sb3IzLldoaXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYWxwaGEgPSBiYWJ5bG9uTGluZXNNZXNoLm1hdGVyaWFsPy5hbHBoYSA/PyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gYmFieWxvbkxpbmVzTWVzaC5ncmVhc2VkTGluZU1hdGVyaWFsPy5jb2xvciA/PyBjb2xvcldoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghY29sb3IuZXF1YWxzKGNvbG9yV2hpdGUpIHx8IGFscGhhIDwgMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRlcmlhbC5wYnJNZXRhbGxpY1JvdWdobmVzcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VDb2xvckZhY3RvcjogWy4uLmNvbG9yLmFzQXJyYXkoKSwgYWxwaGFdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbWF0ZXJpYWxzLnB1c2gobWF0ZXJpYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHByaW1pdGl2ZS5tYXRlcmlhbCA9IHRoaXMuX21hdGVyaWFscy5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpc0xpbmVzTWVzaCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFNwZWNpYWwgY2FzZSBmb3IgTGluZXNNZXNoXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWw6IElNYXRlcmlhbCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogYmFieWxvbk1hdGVyaWFsLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmFieWxvbkxpbmVzTWVzaCA9IGJhYnlsb25NZXNoO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWJhYnlsb25MaW5lc01lc2guY29sb3IuZXF1YWxzKENvbG9yMy5XaGl0ZSgpKSB8fCBiYWJ5bG9uTGluZXNNZXNoLmFscGhhIDwgMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRlcmlhbC5wYnJNZXRhbGxpY1JvdWdobmVzcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VDb2xvckZhY3RvcjogWy4uLmJhYnlsb25MaW5lc01lc2guY29sb3IuYXNBcnJheSgpLCBiYWJ5bG9uTGluZXNNZXNoLmFscGhhXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21hdGVyaWFscy5wdXNoKG1hdGVyaWFsKTtcclxuICAgICAgICAgICAgICAgICAgICBwcmltaXRpdmUubWF0ZXJpYWwgPSB0aGlzLl9tYXRlcmlhbHMubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTWF0ZXJpYWxcclxuICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYXdhaXQtaW4tbG9vcFxyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuX2V4cG9ydE1hdGVyaWFsQXN5bmMoYmFieWxvbk1hdGVyaWFsLCB2ZXJ0ZXhCdWZmZXJzLCBzdWJNZXNoLCBwcmltaXRpdmUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIEluZGV4IGJ1ZmZlclxyXG4gICAgICAgICAgICAgICAgY29uc3QgZmlsbE1vZGUgPSBpc0xpbmVzTWVzaCB8fCBpc0dyZWFzZWRMaW5lTWVzaCA/IE1hdGVyaWFsLkxpbmVMaXN0RHJhd01vZGUgOiAoYmFieWxvbk1lc2gub3ZlcnJpZGVSZW5kZXJpbmdGaWxsTW9kZSA/PyBiYWJ5bG9uTWF0ZXJpYWwuZmlsbE1vZGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHNpZGVPcmllbnRhdGlvbiA9IGJhYnlsb25NYXRlcmlhbC5fZ2V0RWZmZWN0aXZlT3JpZW50YXRpb24oYmFieWxvbk1lc2gpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX2V4cG9ydEluZGljZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgaW5kaWNlcyxcclxuICAgICAgICAgICAgICAgICAgICBpbmRpY2VzID8gQXJlSW5kaWNlczMyQml0cyhpbmRpY2VzLCBzdWJNZXNoLmluZGV4Q291bnQsIHN1Yk1lc2guaW5kZXhTdGFydCwgc3ViTWVzaC52ZXJ0aWNlc1N0YXJ0KSA6IHN1Yk1lc2gudmVydGljZXNDb3VudCA+IDY1NTM1LFxyXG4gICAgICAgICAgICAgICAgICAgIGluZGljZXMgPyBzdWJNZXNoLmluZGV4U3RhcnQgOiBzdWJNZXNoLnZlcnRpY2VzU3RhcnQsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5kaWNlcyA/IHN1Yk1lc2guaW5kZXhDb3VudCA6IHN1Yk1lc2gudmVydGljZXNDb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAtc3ViTWVzaC52ZXJ0aWNlc1N0YXJ0LFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGxNb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNpZGVPcmllbnRhdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBwcmltaXRpdmVcclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gVmVydGV4IGJ1ZmZlcnNcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgdmVydGV4QnVmZmVyIG9mIE9iamVjdC52YWx1ZXModmVydGV4QnVmZmVycykpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9leHBvcnRWZXJ0ZXhCdWZmZXIodmVydGV4QnVmZmVyLCBiYWJ5bG9uTWF0ZXJpYWwsIHN1Yk1lc2gudmVydGljZXNTdGFydCwgc3ViTWVzaC52ZXJ0aWNlc0NvdW50LCBzdGF0ZSwgcHJpbWl0aXZlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobW9ycGhUYXJnZXRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpbWl0aXZlLnRhcmdldHMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGdsdGZNb3JwaFRhcmdldCBvZiBtb3JwaFRhcmdldHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWl0aXZlLnRhcmdldHMucHVzaChnbHRmTW9ycGhUYXJnZXQuYXR0cmlidXRlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIG1lc2gucHJpbWl0aXZlcy5wdXNoKHByaW1pdGl2ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9leHRlbnNpb25zUG9zdEV4cG9ydE1lc2hQcmltaXRpdmUocHJpbWl0aXZlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG1vcnBoVGFyZ2V0cykge1xyXG4gICAgICAgICAgICBtZXNoLndlaWdodHMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGlmICghbWVzaC5leHRyYXMpIHtcclxuICAgICAgICAgICAgICAgIG1lc2guZXh0cmFzID0ge307XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbWVzaC5leHRyYXMudGFyZ2V0TmFtZXMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgZ2x0Zk1vcnBoVGFyZ2V0IG9mIG1vcnBoVGFyZ2V0cykge1xyXG4gICAgICAgICAgICAgICAgbWVzaC53ZWlnaHRzLnB1c2goZ2x0Zk1vcnBoVGFyZ2V0LmluZmx1ZW5jZSk7XHJcbiAgICAgICAgICAgICAgICBtZXNoLmV4dHJhcy50YXJnZXROYW1lcy5wdXNoKGdsdGZNb3JwaFRhcmdldC5uYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG1lc2hJbmRleDtcclxuICAgIH1cclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvcHJlZmVyLXByb21pc2UtcmVqZWN0LWVycm9ycyAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBnaXRodWIvbm8tdGhlbiAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBiYWJ5bG9uanMvYXZhaWxhYmxlICovXHJcblxyXG5pbXBvcnQgdHlwZSB7IElUZXh0dXJlSW5mbywgSU1hdGVyaWFsLCBJTWF0ZXJpYWxQYnJNZXRhbGxpY1JvdWdobmVzcywgSU1hdGVyaWFsT2NjbHVzaW9uVGV4dHVyZUluZm8sIElTYW1wbGVyLCBJSW1hZ2UgfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IEltYWdlTWltZVR5cGUsIE1hdGVyaWFsQWxwaGFNb2RlLCBUZXh0dXJlTWFnRmlsdGVyLCBUZXh0dXJlTWluRmlsdGVyLCBUZXh0dXJlV3JhcE1vZGUgfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcblxyXG5pbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcImNvcmUvdHlwZXNcIjtcclxuaW1wb3J0IHsgQ29sb3IzIH0gZnJvbSBcImNvcmUvTWF0aHMvbWF0aC5jb2xvclwiO1xyXG5pbXBvcnQgeyBTY2FsYXIgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLnNjYWxhclwiO1xyXG5pbXBvcnQgeyBUb29scyB9IGZyb20gXCJjb3JlL01pc2MvdG9vbHNcIjtcclxuaW1wb3J0IHsgR2V0VGV4dHVyZURhdGFBc3luYywgVGV4dHVyZVRvb2xzIH0gZnJvbSBcImNvcmUvTWlzYy90ZXh0dXJlVG9vbHNcIjtcclxuaW1wb3J0IHR5cGUgeyBCYXNlVGV4dHVyZSB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9UZXh0dXJlcy9iYXNlVGV4dHVyZVwiO1xyXG5pbXBvcnQgeyBUZXh0dXJlIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1RleHR1cmVzL3RleHR1cmVcIjtcclxuaW1wb3J0IHsgUmF3VGV4dHVyZSB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9UZXh0dXJlcy9yYXdUZXh0dXJlXCI7XHJcblxyXG5pbXBvcnQgdHlwZSB7IFNjZW5lIH0gZnJvbSBcImNvcmUvc2NlbmVcIjtcclxuXHJcbmltcG9ydCB0eXBlIHsgR0xURkV4cG9ydGVyIH0gZnJvbSBcIi4vZ2xURkV4cG9ydGVyXCI7XHJcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCJjb3JlL0VuZ2luZXMvY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IER1bXBUb29scyB9IGZyb20gXCJjb3JlL01pc2MvZHVtcFRvb2xzXCI7XHJcblxyXG5pbXBvcnQgdHlwZSB7IE1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL21hdGVyaWFsXCI7XHJcbmltcG9ydCB0eXBlIHsgU3RhbmRhcmRNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9zdGFuZGFyZE1hdGVyaWFsXCI7XHJcbmltcG9ydCB0eXBlIHsgUEJSQmFzZU1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1BCUi9wYnJCYXNlTWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgU3BlY3VsYXJQb3dlclRvUm91Z2huZXNzIH0gZnJvbSBcImNvcmUvSGVscGVycy9tYXRlcmlhbENvbnZlcnNpb25IZWxwZXJcIjtcclxuXHJcbmNvbnN0IEVwc2lsb24gPSAxZS02O1xyXG5jb25zdCBEaWVsZWN0cmljU3BlY3VsYXIgPSBuZXcgQ29sb3IzKDAuMDQsIDAuMDQsIDAuMDQpO1xyXG5jb25zdCBNYXhTcGVjdWxhclBvd2VyID0gMTAyNDtcclxuY29uc3QgV2hpdGUgPSBDb2xvcjMuV2hpdGUoKTtcclxuY29uc3QgQmxhY2sgPSBDb2xvcjMuQmxhY2soKTtcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIHN0b3Jpbmcgc3BlY3VsYXIgZ2xvc3NpbmVzcyBmYWN0b3JzXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuaW50ZXJmYWNlIElQQlJTcGVjdWxhckdsb3NzaW5lc3Mge1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXByZXNlbnRzIHRoZSBsaW5lYXIgZGlmZnVzZSBmYWN0b3JzIG9mIHRoZSBtYXRlcmlhbFxyXG4gICAgICovXHJcbiAgICBkaWZmdXNlQ29sb3I6IENvbG9yMztcclxuICAgIHNwZWN1bGFyQ29sb3I6IENvbG9yMztcclxuICAgIGdsb3NzaW5lc3M6IG51bWJlcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIElQQlJNZXRhbGxpY1JvdWdobmVzcyB7XHJcbiAgICBiYXNlQ29sb3I6IENvbG9yMztcclxuICAgIG1ldGFsbGljOiBOdWxsYWJsZTxudW1iZXI+O1xyXG4gICAgcm91Z2huZXNzOiBOdWxsYWJsZTxudW1iZXI+O1xyXG4gICAgbWV0YWxsaWNSb3VnaG5lc3NUZXh0dXJlRGF0YT86IE51bGxhYmxlPEFycmF5QnVmZmVyPjtcclxuICAgIGJhc2VDb2xvclRleHR1cmVEYXRhPzogTnVsbGFibGU8QXJyYXlCdWZmZXI+O1xyXG59XHJcblxyXG5mdW5jdGlvbiBHZXRGaWxlRXh0ZW5zaW9uRnJvbU1pbWVUeXBlKG1pbWVUeXBlOiBJbWFnZU1pbWVUeXBlKTogc3RyaW5nIHtcclxuICAgIHN3aXRjaCAobWltZVR5cGUpIHtcclxuICAgICAgICBjYXNlIEltYWdlTWltZVR5cGUuSlBFRzpcclxuICAgICAgICAgICAgcmV0dXJuIFwiLmpwZ1wiO1xyXG4gICAgICAgIGNhc2UgSW1hZ2VNaW1lVHlwZS5QTkc6XHJcbiAgICAgICAgICAgIHJldHVybiBcIi5wbmdcIjtcclxuICAgICAgICBjYXNlIEltYWdlTWltZVR5cGUuV0VCUDpcclxuICAgICAgICAgICAgcmV0dXJuIFwiLndlYnBcIjtcclxuICAgICAgICBjYXNlIEltYWdlTWltZVR5cGUuQVZJRjpcclxuICAgICAgICAgICAgcmV0dXJuIFwiLmF2aWZcIjtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gSXNDb21wcmVzc2VkVGV4dHVyZUZvcm1hdChmb3JtYXQ6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgc3dpdGNoIChmb3JtYXQpIHtcclxuICAgICAgICBjYXNlIENvbnN0YW50cy5URVhUVVJFRk9STUFUX0NPTVBSRVNTRURfUkdCQV9CUFRDX1VOT1JNOlxyXG4gICAgICAgIGNhc2UgQ29uc3RhbnRzLlRFWFRVUkVGT1JNQVRfQ09NUFJFU1NFRF9TUkdCX0FMUEhBX0JQVENfVU5PUk06XHJcbiAgICAgICAgY2FzZSBDb25zdGFudHMuVEVYVFVSRUZPUk1BVF9DT01QUkVTU0VEX1JHQl9CUFRDX1VOU0lHTkVEX0ZMT0FUOlxyXG4gICAgICAgIGNhc2UgQ29uc3RhbnRzLlRFWFRVUkVGT1JNQVRfQ09NUFJFU1NFRF9SR0JfQlBUQ19TSUdORURfRkxPQVQ6XHJcbiAgICAgICAgY2FzZSBDb25zdGFudHMuVEVYVFVSRUZPUk1BVF9DT01QUkVTU0VEX1JHQkFfUzNUQ19EWFQ1OlxyXG4gICAgICAgIGNhc2UgQ29uc3RhbnRzLlRFWFRVUkVGT1JNQVRfQ09NUFJFU1NFRF9TUkdCX0FMUEhBX1MzVENfRFhUNV9FWFQ6XHJcbiAgICAgICAgY2FzZSBDb25zdGFudHMuVEVYVFVSRUZPUk1BVF9DT01QUkVTU0VEX1JHQkFfUzNUQ19EWFQzOlxyXG4gICAgICAgIGNhc2UgQ29uc3RhbnRzLlRFWFRVUkVGT1JNQVRfQ09NUFJFU1NFRF9TUkdCX0FMUEhBX1MzVENfRFhUM19FWFQ6XHJcbiAgICAgICAgY2FzZSBDb25zdGFudHMuVEVYVFVSRUZPUk1BVF9DT01QUkVTU0VEX1JHQkFfUzNUQ19EWFQxOlxyXG4gICAgICAgIGNhc2UgQ29uc3RhbnRzLlRFWFRVUkVGT1JNQVRfQ09NUFJFU1NFRF9SR0JfUzNUQ19EWFQxOlxyXG4gICAgICAgIGNhc2UgQ29uc3RhbnRzLlRFWFRVUkVGT1JNQVRfQ09NUFJFU1NFRF9TUkdCX0FMUEhBX1MzVENfRFhUMV9FWFQ6XHJcbiAgICAgICAgY2FzZSBDb25zdGFudHMuVEVYVFVSRUZPUk1BVF9DT01QUkVTU0VEX1NSR0JfUzNUQ19EWFQxX0VYVDpcclxuICAgICAgICBjYXNlIENvbnN0YW50cy5URVhUVVJFRk9STUFUX0NPTVBSRVNTRURfUkdCQV9BU1RDXzR4NDpcclxuICAgICAgICBjYXNlIENvbnN0YW50cy5URVhUVVJFRk9STUFUX0NPTVBSRVNTRURfU1JHQjhfQUxQSEE4X0FTVENfNHg0X0tIUjpcclxuICAgICAgICBjYXNlIENvbnN0YW50cy5URVhUVVJFRk9STUFUX0NPTVBSRVNTRURfUkdCX0VUQzFfV0VCR0w6XHJcbiAgICAgICAgY2FzZSBDb25zdGFudHMuVEVYVFVSRUZPUk1BVF9DT01QUkVTU0VEX1JHQjhfRVRDMjpcclxuICAgICAgICBjYXNlIENvbnN0YW50cy5URVhUVVJFRk9STUFUX0NPTVBSRVNTRURfU1JHQjhfRVRDMjpcclxuICAgICAgICBjYXNlIENvbnN0YW50cy5URVhUVVJFRk9STUFUX0NPTVBSRVNTRURfUkdCOF9QVU5DSFRIUk9VR0hfQUxQSEExX0VUQzI6XHJcbiAgICAgICAgY2FzZSBDb25zdGFudHMuVEVYVFVSRUZPUk1BVF9DT01QUkVTU0VEX1NSR0I4X1BVTkNIVEhST1VHSF9BTFBIQTFfRVRDMjpcclxuICAgICAgICBjYXNlIENvbnN0YW50cy5URVhUVVJFRk9STUFUX0NPTVBSRVNTRURfUkdCQThfRVRDMl9FQUM6XHJcbiAgICAgICAgY2FzZSBDb25zdGFudHMuVEVYVFVSRUZPUk1BVF9DT01QUkVTU0VEX1NSR0I4X0FMUEhBOF9FVEMyX0VBQzpcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQ29tcHV0ZXMgdGhlIG1ldGFsbGljIGZhY3RvciBmcm9tIHNwZWN1bGFyIGdsb3NzaW5lc3MgdmFsdWVzLlxyXG4gKiBAcGFyYW0gZGlmZnVzZSBkaWZmdXNlZCB2YWx1ZVxyXG4gKiBAcGFyYW0gc3BlY3VsYXIgc3BlY3VsYXIgdmFsdWVcclxuICogQHBhcmFtIG9uZU1pbnVzU3BlY3VsYXJTdHJlbmd0aCBvbmUgbWludXMgdGhlIHNwZWN1bGFyIHN0cmVuZ3RoXHJcbiAqIEByZXR1cm5zIG1ldGFsbGljIHZhbHVlXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9Tb2x2ZU1ldGFsbGljKGRpZmZ1c2U6IG51bWJlciwgc3BlY3VsYXI6IG51bWJlciwgb25lTWludXNTcGVjdWxhclN0cmVuZ3RoOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgaWYgKHNwZWN1bGFyIDwgRGllbGVjdHJpY1NwZWN1bGFyLnIpIHtcclxuICAgICAgICBEaWVsZWN0cmljU3BlY3VsYXI7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYSA9IERpZWxlY3RyaWNTcGVjdWxhci5yO1xyXG4gICAgY29uc3QgYiA9IChkaWZmdXNlICogb25lTWludXNTcGVjdWxhclN0cmVuZ3RoKSAvICgxLjAgLSBEaWVsZWN0cmljU3BlY3VsYXIucikgKyBzcGVjdWxhciAtIDIuMCAqIERpZWxlY3RyaWNTcGVjdWxhci5yO1xyXG4gICAgY29uc3QgYyA9IERpZWxlY3RyaWNTcGVjdWxhci5yIC0gc3BlY3VsYXI7XHJcbiAgICBjb25zdCBkID0gYiAqIGIgLSA0LjAgKiBhICogYztcclxuICAgIHJldHVybiBTY2FsYXIuQ2xhbXAoKC1iICsgTWF0aC5zcXJ0KGQpKSAvICgyLjAgKiBhKSwgMCwgMSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb21wdXRlcyB0aGUgbWV0YWxsaWMvcm91Z2huZXNzIGZhY3RvcnMgZnJvbSBhIFN0YW5kYXJkIE1hdGVyaWFsLlxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfQ29udmVydFRvR0xURlBCUk1ldGFsbGljUm91Z2huZXNzKGJhYnlsb25TdGFuZGFyZE1hdGVyaWFsOiBTdGFuZGFyZE1hdGVyaWFsKTogSU1hdGVyaWFsUGJyTWV0YWxsaWNSb3VnaG5lc3Mge1xyXG4gICAgY29uc3QgZGlmZnVzZSA9IGJhYnlsb25TdGFuZGFyZE1hdGVyaWFsLmRpZmZ1c2VDb2xvci50b0xpbmVhclNwYWNlKGJhYnlsb25TdGFuZGFyZE1hdGVyaWFsLmdldFNjZW5lKCkuZ2V0RW5naW5lKCkudXNlRXhhY3RTcmdiQ29udmVyc2lvbnMpLnNjYWxlKDAuNSk7XHJcbiAgICBjb25zdCBvcGFjaXR5ID0gYmFieWxvblN0YW5kYXJkTWF0ZXJpYWwuYWxwaGE7XHJcbiAgICBjb25zdCBzcGVjdWxhclBvd2VyID0gU2NhbGFyLkNsYW1wKGJhYnlsb25TdGFuZGFyZE1hdGVyaWFsLnNwZWN1bGFyUG93ZXIsIDAsIE1heFNwZWN1bGFyUG93ZXIpO1xyXG5cclxuICAgIGNvbnN0IHJvdWdobmVzcyA9IFNwZWN1bGFyUG93ZXJUb1JvdWdobmVzcyhzcGVjdWxhclBvd2VyKTtcclxuXHJcbiAgICBjb25zdCBnbFRGUGJyTWV0YWxsaWNSb3VnaG5lc3M6IElNYXRlcmlhbFBick1ldGFsbGljUm91Z2huZXNzID0ge1xyXG4gICAgICAgIGJhc2VDb2xvckZhY3RvcjogW2RpZmZ1c2UuciwgZGlmZnVzZS5nLCBkaWZmdXNlLmIsIG9wYWNpdHldLFxyXG4gICAgICAgIG1ldGFsbGljRmFjdG9yOiAwLFxyXG4gICAgICAgIHJvdWdobmVzc0ZhY3Rvcjogcm91Z2huZXNzLFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gZ2xURlBick1ldGFsbGljUm91Z2huZXNzO1xyXG59XHJcblxyXG4vKipcclxuICogU2V0cyB0aGUgZ2xURiBhbHBoYSBtb2RlIHRvIGEgZ2xURiBtYXRlcmlhbCBmcm9tIHRoZSBCYWJ5bG9uIE1hdGVyaWFsXHJcbiAqIEBwYXJhbSBnbFRGTWF0ZXJpYWwgZ2xURiBtYXRlcmlhbFxyXG4gKiBAcGFyYW0gYmFieWxvbk1hdGVyaWFsIEJhYnlsb24gbWF0ZXJpYWxcclxuICovXHJcbmZ1bmN0aW9uIFNldEFscGhhTW9kZShnbFRGTWF0ZXJpYWw6IElNYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCAmIHsgYWxwaGFDdXRPZmY/OiBudW1iZXIgfSk6IHZvaWQge1xyXG4gICAgaWYgKGJhYnlsb25NYXRlcmlhbC5uZWVkQWxwaGFCbGVuZGluZygpKSB7XHJcbiAgICAgICAgZ2xURk1hdGVyaWFsLmFscGhhTW9kZSA9IE1hdGVyaWFsQWxwaGFNb2RlLkJMRU5EO1xyXG4gICAgfSBlbHNlIGlmIChiYWJ5bG9uTWF0ZXJpYWwubmVlZEFscGhhVGVzdGluZygpKSB7XHJcbiAgICAgICAgZ2xURk1hdGVyaWFsLmFscGhhTW9kZSA9IE1hdGVyaWFsQWxwaGFNb2RlLk1BU0s7XHJcbiAgICAgICAgZ2xURk1hdGVyaWFsLmFscGhhQ3V0b2ZmID0gYmFieWxvbk1hdGVyaWFsLmFscGhhQ3V0T2ZmO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBDcmVhdGVXaGl0ZVRleHR1cmUod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIHNjZW5lOiBTY2VuZSk6IFRleHR1cmUge1xyXG4gICAgY29uc3QgZGF0YSA9IG5ldyBVaW50OEFycmF5KHdpZHRoICogaGVpZ2h0ICogNCk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSA9IGkgKyA0KSB7XHJcbiAgICAgICAgZGF0YVtpXSA9IGRhdGFbaSArIDFdID0gZGF0YVtpICsgMl0gPSBkYXRhW2kgKyAzXSA9IDB4ZmY7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmF3VGV4dHVyZSA9IFJhd1RleHR1cmUuQ3JlYXRlUkdCQVRleHR1cmUoZGF0YSwgd2lkdGgsIGhlaWdodCwgc2NlbmUpO1xyXG5cclxuICAgIHJldHVybiByYXdUZXh0dXJlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBDb252ZXJ0UGl4ZWxBcnJheVRvRmxvYXQzMihwaXhlbHM6IEFycmF5QnVmZmVyVmlldyk6IEZsb2F0MzJBcnJheSB7XHJcbiAgICBpZiAocGl4ZWxzIGluc3RhbmNlb2YgVWludDhBcnJheSkge1xyXG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IHBpeGVscy5sZW5ndGg7XHJcbiAgICAgICAgY29uc3QgYnVmZmVyID0gbmV3IEZsb2F0MzJBcnJheShwaXhlbHMubGVuZ3RoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIGJ1ZmZlcltpXSA9IHBpeGVsc1tpXSAvIDI1NTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGJ1ZmZlcjtcclxuICAgIH0gZWxzZSBpZiAocGl4ZWxzIGluc3RhbmNlb2YgRmxvYXQzMkFycmF5KSB7XHJcbiAgICAgICAgcmV0dXJuIHBpeGVscztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5zdXBwb3J0ZWQgcGl4ZWwgZm9ybWF0IVwiKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFV0aWxpdHkgbWV0aG9kcyBmb3Igd29ya2luZyB3aXRoIGdsVEYgbWF0ZXJpYWwgY29udmVyc2lvbiBwcm9wZXJ0aWVzLlxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbmV4cG9ydCBjbGFzcyBHTFRGTWF0ZXJpYWxFeHBvcnRlciB7XHJcbiAgICAvLyBNYXBwaW5nIHRvIHN0b3JlIHRleHR1cmVzXHJcbiAgICBwcml2YXRlIF90ZXh0dXJlTWFwID0gbmV3IE1hcDxCYXNlVGV4dHVyZSwgSVRleHR1cmVJbmZvPigpO1xyXG5cclxuICAgIC8vIE1hcHBpbmcgb2YgaW50ZXJuYWwgdGV4dHVyZXMgdG8gaW1hZ2VzIHRvIGF2b2lkIGV4cG9ydGluZyBkdXBsaWNhdGUgaW1hZ2VzXHJcbiAgICBwcml2YXRlIF9pbnRlcm5hbFRleHR1cmVUb0ltYWdlOiB7IFt1bmlxdWVJZDogbnVtYmVyXTogeyBbbWltZVR5cGU6IHN0cmluZ106IFByb21pc2U8bnVtYmVyPiB9IH0gPSB7fTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IF9leHBvcnRlcjogR0xURkV4cG9ydGVyKSB7fVxyXG5cclxuICAgIHB1YmxpYyBnZXRUZXh0dXJlSW5mbyhiYWJ5bG9uVGV4dHVyZTogTnVsbGFibGU8QmFzZVRleHR1cmU+KTogTnVsbGFibGU8SVRleHR1cmVJbmZvPiB7XHJcbiAgICAgICAgcmV0dXJuIGJhYnlsb25UZXh0dXJlID8gKHRoaXMuX3RleHR1cmVNYXAuZ2V0KGJhYnlsb25UZXh0dXJlKSA/PyBudWxsKSA6IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGV4cG9ydFN0YW5kYXJkTWF0ZXJpYWxBc3luYyhiYWJ5bG9uU3RhbmRhcmRNYXRlcmlhbDogU3RhbmRhcmRNYXRlcmlhbCwgbWltZVR5cGU6IEltYWdlTWltZVR5cGUsIGhhc1VWczogYm9vbGVhbik6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgICAgICAgY29uc3QgcGJyTWV0YWxsaWNSb3VnaG5lc3MgPSBfQ29udmVydFRvR0xURlBCUk1ldGFsbGljUm91Z2huZXNzKGJhYnlsb25TdGFuZGFyZE1hdGVyaWFsKTtcclxuXHJcbiAgICAgICAgY29uc3QgbWF0ZXJpYWw6IElNYXRlcmlhbCA9IHsgbmFtZTogYmFieWxvblN0YW5kYXJkTWF0ZXJpYWwubmFtZSB9O1xyXG4gICAgICAgIGlmIChiYWJ5bG9uU3RhbmRhcmRNYXRlcmlhbC5iYWNrRmFjZUN1bGxpbmcgIT0gbnVsbCAmJiAhYmFieWxvblN0YW5kYXJkTWF0ZXJpYWwuYmFja0ZhY2VDdWxsaW5nKSB7XHJcbiAgICAgICAgICAgIGlmICghYmFieWxvblN0YW5kYXJkTWF0ZXJpYWwudHdvU2lkZWRMaWdodGluZykge1xyXG4gICAgICAgICAgICAgICAgVG9vbHMuV2FybihiYWJ5bG9uU3RhbmRhcmRNYXRlcmlhbC5uYW1lICsgXCI6IEJhY2stZmFjZSBjdWxsaW5nIGRpc2FibGVkIGFuZCB0d28tc2lkZWQgbGlnaHRpbmcgZGlzYWJsZWQgaXMgbm90IHN1cHBvcnRlZCBpbiBnbFRGLlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtYXRlcmlhbC5kb3VibGVTaWRlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaGFzVVZzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb21pc2VzOiBQcm9taXNlPHZvaWQ+W10gPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRpZmZ1c2VUZXh0dXJlID0gYmFieWxvblN0YW5kYXJkTWF0ZXJpYWwuZGlmZnVzZVRleHR1cmU7XHJcbiAgICAgICAgICAgIGlmIChkaWZmdXNlVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4cG9ydFRleHR1cmVBc3luYyhkaWZmdXNlVGV4dHVyZSwgbWltZVR5cGUpLnRoZW4oKHRleHR1cmVJbmZvKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ZXh0dXJlSW5mbykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGJyTWV0YWxsaWNSb3VnaG5lc3MuYmFzZUNvbG9yVGV4dHVyZSA9IHRleHR1cmVJbmZvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGJ1bXBUZXh0dXJlID0gYmFieWxvblN0YW5kYXJkTWF0ZXJpYWwuYnVtcFRleHR1cmU7XHJcbiAgICAgICAgICAgIGlmIChidW1wVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4cG9ydFRleHR1cmVBc3luYyhidW1wVGV4dHVyZSwgbWltZVR5cGUpLnRoZW4oKHRleHR1cmVJbmZvKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ZXh0dXJlSW5mbykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYWwubm9ybWFsVGV4dHVyZSA9IHRleHR1cmVJbmZvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJ1bXBUZXh0dXJlLmxldmVsICE9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYWwubm9ybWFsVGV4dHVyZS5zY2FsZSA9IGJ1bXBUZXh0dXJlLmxldmVsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGVtaXNzaXZlVGV4dHVyZSA9IGJhYnlsb25TdGFuZGFyZE1hdGVyaWFsLmVtaXNzaXZlVGV4dHVyZTtcclxuICAgICAgICAgICAgaWYgKGVtaXNzaXZlVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWwuZW1pc3NpdmVGYWN0b3IgPSBbMS4wLCAxLjAsIDEuMF07XHJcblxyXG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4cG9ydFRleHR1cmVBc3luYyhlbWlzc2l2ZVRleHR1cmUsIG1pbWVUeXBlKS50aGVuKCh0ZXh0dXJlSW5mbykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGV4dHVyZUluZm8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsLmVtaXNzaXZlVGV4dHVyZSA9IHRleHR1cmVJbmZvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGFtYmllbnRUZXh0dXJlID0gYmFieWxvblN0YW5kYXJkTWF0ZXJpYWwuYW1iaWVudFRleHR1cmU7XHJcbiAgICAgICAgICAgIGlmIChhbWJpZW50VGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4cG9ydFRleHR1cmVBc3luYyhhbWJpZW50VGV4dHVyZSwgbWltZVR5cGUpLnRoZW4oKHRleHR1cmVJbmZvKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ZXh0dXJlSW5mbykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2NjbHVzaW9uVGV4dHVyZTogSU1hdGVyaWFsT2NjbHVzaW9uVGV4dHVyZUluZm8gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg6IHRleHR1cmVJbmZvLmluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsLm9jY2x1c2lvblRleHR1cmUgPSBvY2NsdXNpb25UZXh0dXJlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChwcm9taXNlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9leHBvcnRlci5fbWF0ZXJpYWxOZWVkc1VWc1NldC5hZGQoYmFieWxvblN0YW5kYXJkTWF0ZXJpYWwpO1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYmFieWxvblN0YW5kYXJkTWF0ZXJpYWwuYWxwaGEgPCAxLjAgfHwgYmFieWxvblN0YW5kYXJkTWF0ZXJpYWwub3BhY2l0eVRleHR1cmUpIHtcclxuICAgICAgICAgICAgaWYgKGJhYnlsb25TdGFuZGFyZE1hdGVyaWFsLmFscGhhTW9kZSA9PT0gQ29uc3RhbnRzLkFMUEhBX0NPTUJJTkUpIHtcclxuICAgICAgICAgICAgICAgIG1hdGVyaWFsLmFscGhhTW9kZSA9IE1hdGVyaWFsQWxwaGFNb2RlLkJMRU5EO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgVG9vbHMuV2FybihiYWJ5bG9uU3RhbmRhcmRNYXRlcmlhbC5uYW1lICsgXCI6IGdsVEYgMi4wIGRvZXMgbm90IHN1cHBvcnQgYWxwaGEgbW9kZTogXCIgKyBiYWJ5bG9uU3RhbmRhcmRNYXRlcmlhbC5hbHBoYU1vZGUudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChiYWJ5bG9uU3RhbmRhcmRNYXRlcmlhbC5lbWlzc2l2ZUNvbG9yICYmICFiYWJ5bG9uU3RhbmRhcmRNYXRlcmlhbC5lbWlzc2l2ZUNvbG9yLmVxdWFsc1dpdGhFcHNpbG9uKEJsYWNrLCBFcHNpbG9uKSkge1xyXG4gICAgICAgICAgICBtYXRlcmlhbC5lbWlzc2l2ZUZhY3RvciA9IGJhYnlsb25TdGFuZGFyZE1hdGVyaWFsLmVtaXNzaXZlQ29sb3IuYXNBcnJheSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWF0ZXJpYWwucGJyTWV0YWxsaWNSb3VnaG5lc3MgPSBwYnJNZXRhbGxpY1JvdWdobmVzcztcclxuICAgICAgICBTZXRBbHBoYU1vZGUobWF0ZXJpYWwsIGJhYnlsb25TdGFuZGFyZE1hdGVyaWFsKTtcclxuXHJcbiAgICAgICAgYXdhaXQgdGhpcy5fZmluaXNoTWF0ZXJpYWxBc3luYyhtYXRlcmlhbCwgYmFieWxvblN0YW5kYXJkTWF0ZXJpYWwsIG1pbWVUeXBlKTtcclxuXHJcbiAgICAgICAgY29uc3QgbWF0ZXJpYWxzID0gdGhpcy5fZXhwb3J0ZXIuX21hdGVyaWFscztcclxuICAgICAgICBtYXRlcmlhbHMucHVzaChtYXRlcmlhbCk7XHJcbiAgICAgICAgcmV0dXJuIG1hdGVyaWFscy5sZW5ndGggLSAxO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgX2ZpbmlzaE1hdGVyaWFsQXN5bmMoZ2xURk1hdGVyaWFsOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwsIG1pbWVUeXBlOiBJbWFnZU1pbWVUeXBlKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgY29uc3QgdGV4dHVyZXMgPSB0aGlzLl9leHBvcnRlci5fZXh0ZW5zaW9uc1Bvc3RFeHBvcnRNYXRlcmlhbEFkZGl0aW9uYWxUZXh0dXJlcyhcImV4cG9ydE1hdGVyaWFsXCIsIGdsVEZNYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsKTtcclxuXHJcbiAgICAgICAgY29uc3QgcHJvbWlzZXM6IEFycmF5PFByb21pc2U8TnVsbGFibGU8SVRleHR1cmVJbmZvPj4+ID0gW107XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgdGV4dHVyZSBvZiB0ZXh0dXJlcykge1xyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMuZXhwb3J0VGV4dHVyZUFzeW5jKHRleHR1cmUsIG1pbWVUeXBlKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcblxyXG4gICAgICAgIGF3YWl0IHRoaXMuX2V4cG9ydGVyLl9leHRlbnNpb25zUG9zdEV4cG9ydE1hdGVyaWFsQXN5bmMoXCJleHBvcnRNYXRlcmlhbFwiLCBnbFRGTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBfZ2V0SW1hZ2VEYXRhQXN5bmMoYnVmZmVyOiBVaW50OEFycmF5IHwgRmxvYXQzMkFycmF5LCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgbWltZVR5cGU6IEltYWdlTWltZVR5cGUpOiBQcm9taXNlPEFycmF5QnVmZmVyPiB7XHJcbiAgICAgICAgY29uc3QgdGV4dHVyZVR5cGUgPSBDb25zdGFudHMuVEVYVFVSRVRZUEVfVU5TSUdORURfQllURTtcclxuXHJcbiAgICAgICAgY29uc3QgaG9zdGluZ1NjZW5lID0gdGhpcy5fZXhwb3J0ZXIuX2JhYnlsb25TY2VuZTtcclxuICAgICAgICBjb25zdCBlbmdpbmUgPSBob3N0aW5nU2NlbmUuZ2V0RW5naW5lKCk7XHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSBhIHRlbXBvcmFyeSB0ZXh0dXJlIHdpdGggdGhlIHRleHR1cmUgYnVmZmVyIGRhdGFcclxuICAgICAgICBjb25zdCB0ZW1wVGV4dHVyZSA9IGVuZ2luZS5jcmVhdGVSYXdUZXh0dXJlKGJ1ZmZlciwgd2lkdGgsIGhlaWdodCwgQ29uc3RhbnRzLlRFWFRVUkVGT1JNQVRfUkdCQSwgZmFsc2UsIHRydWUsIFRleHR1cmUuTkVBUkVTVF9TQU1QTElOR01PREUsIG51bGwsIHRleHR1cmVUeXBlKTtcclxuXHJcbiAgICAgICAgZW5naW5lLmlzV2ViR1BVID8gYXdhaXQgaW1wb3J0KFwiY29yZS9TaGFkZXJzV0dTTC9wYXNzLmZyYWdtZW50XCIpIDogYXdhaXQgaW1wb3J0KFwiY29yZS9TaGFkZXJzL3Bhc3MuZnJhZ21lbnRcIik7XHJcbiAgICAgICAgYXdhaXQgVGV4dHVyZVRvb2xzLkFwcGx5UG9zdFByb2Nlc3MoXCJwYXNzXCIsIHRlbXBUZXh0dXJlLCBob3N0aW5nU2NlbmUsIHRleHR1cmVUeXBlLCBDb25zdGFudHMuVEVYVFVSRV9ORUFSRVNUX1NBTVBMSU5HTU9ERSwgQ29uc3RhbnRzLlRFWFRVUkVGT1JNQVRfUkdCQSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBlbmdpbmUuX3JlYWRUZXh0dXJlUGl4ZWxzKHRlbXBUZXh0dXJlLCB3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChhd2FpdCBEdW1wVG9vbHMuRHVtcERhdGFBc3luYyh3aWR0aCwgaGVpZ2h0LCBkYXRhLCBtaW1lVHlwZSwgdW5kZWZpbmVkLCB0cnVlLCB0cnVlKSkgYXMgQXJyYXlCdWZmZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXNpemVzIHRoZSB0d28gc291cmNlIHRleHR1cmVzIHRvIHRoZSBzYW1lIGRpbWVuc2lvbnMuICBJZiBhIHRleHR1cmUgaXMgbnVsbCwgYSBkZWZhdWx0IHdoaXRlIHRleHR1cmUgaXMgZ2VuZXJhdGVkLiAgSWYgYm90aCB0ZXh0dXJlcyBhcmUgbnVsbCwgcmV0dXJucyBudWxsXHJcbiAgICAgKiBAcGFyYW0gdGV4dHVyZTEgZmlyc3QgdGV4dHVyZSB0byByZXNpemVcclxuICAgICAqIEBwYXJhbSB0ZXh0dXJlMiBzZWNvbmQgdGV4dHVyZSB0byByZXNpemVcclxuICAgICAqIEBwYXJhbSBzY2VuZSBiYWJ5bG9uanMgc2NlbmVcclxuICAgICAqIEByZXR1cm5zIHJlc2l6ZWQgdGV4dHVyZXMgb3IgbnVsbFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9yZXNpemVUZXh0dXJlc1RvU2FtZURpbWVuc2lvbnModGV4dHVyZTE6IE51bGxhYmxlPEJhc2VUZXh0dXJlPiwgdGV4dHVyZTI6IE51bGxhYmxlPEJhc2VUZXh0dXJlPiwgc2NlbmU6IFNjZW5lKTogeyB0ZXh0dXJlMTogQmFzZVRleHR1cmU7IHRleHR1cmUyOiBCYXNlVGV4dHVyZSB9IHtcclxuICAgICAgICBjb25zdCB0ZXh0dXJlMVNpemUgPSB0ZXh0dXJlMSA/IHRleHR1cmUxLmdldFNpemUoKSA6IHsgd2lkdGg6IDAsIGhlaWdodDogMCB9O1xyXG4gICAgICAgIGNvbnN0IHRleHR1cmUyU2l6ZSA9IHRleHR1cmUyID8gdGV4dHVyZTIuZ2V0U2l6ZSgpIDogeyB3aWR0aDogMCwgaGVpZ2h0OiAwIH07XHJcbiAgICAgICAgbGV0IHJlc2l6ZWRUZXh0dXJlMTogQmFzZVRleHR1cmU7XHJcbiAgICAgICAgbGV0IHJlc2l6ZWRUZXh0dXJlMjogQmFzZVRleHR1cmU7XHJcblxyXG4gICAgICAgIGlmICh0ZXh0dXJlMVNpemUud2lkdGggPCB0ZXh0dXJlMlNpemUud2lkdGgpIHtcclxuICAgICAgICAgICAgaWYgKHRleHR1cmUxICYmIHRleHR1cmUxIGluc3RhbmNlb2YgVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgcmVzaXplZFRleHR1cmUxID0gVGV4dHVyZVRvb2xzLkNyZWF0ZVJlc2l6ZWRDb3B5KHRleHR1cmUxLCB0ZXh0dXJlMlNpemUud2lkdGgsIHRleHR1cmUyU2l6ZS5oZWlnaHQsIHRydWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVzaXplZFRleHR1cmUxID0gQ3JlYXRlV2hpdGVUZXh0dXJlKHRleHR1cmUyU2l6ZS53aWR0aCwgdGV4dHVyZTJTaXplLmhlaWdodCwgc2NlbmUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc2l6ZWRUZXh0dXJlMiA9IHRleHR1cmUyITtcclxuICAgICAgICB9IGVsc2UgaWYgKHRleHR1cmUxU2l6ZS53aWR0aCA+IHRleHR1cmUyU2l6ZS53aWR0aCkge1xyXG4gICAgICAgICAgICBpZiAodGV4dHVyZTIgJiYgdGV4dHVyZTIgaW5zdGFuY2VvZiBUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICByZXNpemVkVGV4dHVyZTIgPSBUZXh0dXJlVG9vbHMuQ3JlYXRlUmVzaXplZENvcHkodGV4dHVyZTIsIHRleHR1cmUxU2l6ZS53aWR0aCwgdGV4dHVyZTFTaXplLmhlaWdodCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXNpemVkVGV4dHVyZTIgPSBDcmVhdGVXaGl0ZVRleHR1cmUodGV4dHVyZTFTaXplLndpZHRoLCB0ZXh0dXJlMVNpemUuaGVpZ2h0LCBzY2VuZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzaXplZFRleHR1cmUxID0gdGV4dHVyZTEhO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlc2l6ZWRUZXh0dXJlMSA9IHRleHR1cmUxITtcclxuICAgICAgICAgICAgcmVzaXplZFRleHR1cmUyID0gdGV4dHVyZTIhO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdGV4dHVyZTE6IHJlc2l6ZWRUZXh0dXJlMSEsXHJcbiAgICAgICAgICAgIHRleHR1cmUyOiByZXNpemVkVGV4dHVyZTIhLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IFNwZWN1bGFyIEdsb3NzaW5lc3MgVGV4dHVyZXMgdG8gTWV0YWxsaWMgUm91Z2huZXNzXHJcbiAgICAgKiBTZWUgbGluayBiZWxvdyBmb3IgaW5mbyBvbiB0aGUgbWF0ZXJpYWwgY29udmVyc2lvbnMgZnJvbSBQQlIgTWV0YWxsaWMvUm91Z2huZXNzIGFuZCBTcGVjdWxhci9HbG9zc2luZXNzXHJcbiAgICAgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9ibG9iL21haW4vZXh0ZW5zaW9ucy8yLjAvQXJjaGl2ZWQvS0hSX21hdGVyaWFsc19wYnJTcGVjdWxhckdsb3NzaW5lc3MvZXhhbXBsZXMvY29udmVydC1iZXR3ZWVuLXdvcmtmbG93cy1ianMvanMvYmFieWxvbi5wYnJVdGlsaXRpZXMuanNcclxuICAgICAqIEBwYXJhbSBkaWZmdXNlVGV4dHVyZSB0ZXh0dXJlIHVzZWQgdG8gc3RvcmUgZGlmZnVzZSBpbmZvcm1hdGlvblxyXG4gICAgICogQHBhcmFtIHNwZWN1bGFyR2xvc3NpbmVzc1RleHR1cmUgdGV4dHVyZSB1c2VkIHRvIHN0b3JlIHNwZWN1bGFyIGFuZCBnbG9zc2luZXNzIGluZm9ybWF0aW9uXHJcbiAgICAgKiBAcGFyYW0gZmFjdG9ycyBzcGVjdWxhciBnbG9zc2luZXNzIG1hdGVyaWFsIGZhY3RvcnNcclxuICAgICAqIEBwYXJhbSBtaW1lVHlwZSB0aGUgbWltZSB0eXBlIHRvIHVzZSBmb3IgdGhlIHRleHR1cmVcclxuICAgICAqIEByZXR1cm5zIHBiciBtZXRhbGxpYyByb3VnaG5lc3MgaW50ZXJmYWNlIG9yIG51bGxcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBhc3luYyBfY29udmVydFNwZWN1bGFyR2xvc3NpbmVzc1RleHR1cmVzVG9NZXRhbGxpY1JvdWdobmVzc0FzeW5jKFxyXG4gICAgICAgIGRpZmZ1c2VUZXh0dXJlOiBOdWxsYWJsZTxCYXNlVGV4dHVyZT4sXHJcbiAgICAgICAgc3BlY3VsYXJHbG9zc2luZXNzVGV4dHVyZTogTnVsbGFibGU8QmFzZVRleHR1cmU+LFxyXG4gICAgICAgIGZhY3RvcnM6IElQQlJTcGVjdWxhckdsb3NzaW5lc3MsXHJcbiAgICAgICAgbWltZVR5cGU6IEltYWdlTWltZVR5cGVcclxuICAgICk6IFByb21pc2U8SVBCUk1ldGFsbGljUm91Z2huZXNzPiB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBuZXcgQXJyYXk8UHJvbWlzZTx2b2lkPj4oKTtcclxuICAgICAgICBpZiAoIShkaWZmdXNlVGV4dHVyZSB8fCBzcGVjdWxhckdsb3NzaW5lc3NUZXh0dXJlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZWplY3QoXCJkaWZmdXNlIGFuZCBzcGVjdWxhciBnbG9zc2luZXNzIHRleHR1cmVzIGFyZSBub3QgZGVmaW5lZCFcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzY2VuZTogTnVsbGFibGU8U2NlbmU+ID0gZGlmZnVzZVRleHR1cmUgPyBkaWZmdXNlVGV4dHVyZS5nZXRTY2VuZSgpIDogc3BlY3VsYXJHbG9zc2luZXNzVGV4dHVyZSA/IHNwZWN1bGFyR2xvc3NpbmVzc1RleHR1cmUuZ2V0U2NlbmUoKSA6IG51bGw7XHJcbiAgICAgICAgaWYgKHNjZW5lKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc2l6ZWRUZXh0dXJlcyA9IHRoaXMuX3Jlc2l6ZVRleHR1cmVzVG9TYW1lRGltZW5zaW9ucyhkaWZmdXNlVGV4dHVyZSwgc3BlY3VsYXJHbG9zc2luZXNzVGV4dHVyZSwgc2NlbmUpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZGlmZnVzZVNpemUgPSByZXNpemVkVGV4dHVyZXMudGV4dHVyZTE/LmdldFNpemUoKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBkaWZmdXNlQnVmZmVyOiBGbG9hdDMyQXJyYXk7XHJcbiAgICAgICAgICAgIGxldCBzcGVjdWxhckdsb3NzaW5lc3NCdWZmZXI6IEZsb2F0MzJBcnJheTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gZGlmZnVzZVNpemUud2lkdGg7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IGRpZmZ1c2VTaXplLmhlaWdodDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRpZmZ1c2VQaXhlbHMgPSBhd2FpdCByZXNpemVkVGV4dHVyZXMudGV4dHVyZTEucmVhZFBpeGVscygpO1xyXG4gICAgICAgICAgICBjb25zdCBzcGVjdWxhclBpeGVscyA9IGF3YWl0IHJlc2l6ZWRUZXh0dXJlcy50ZXh0dXJlMi5yZWFkUGl4ZWxzKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZGlmZnVzZVBpeGVscykge1xyXG4gICAgICAgICAgICAgICAgZGlmZnVzZUJ1ZmZlciA9IENvbnZlcnRQaXhlbEFycmF5VG9GbG9hdDMyKGRpZmZ1c2VQaXhlbHMpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVqZWN0KFwiRmFpbGVkIHRvIHJldHJpZXZlIHBpeGVscyBmcm9tIGRpZmZ1c2UgdGV4dHVyZSFcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHNwZWN1bGFyUGl4ZWxzKSB7XHJcbiAgICAgICAgICAgICAgICBzcGVjdWxhckdsb3NzaW5lc3NCdWZmZXIgPSBDb252ZXJ0UGl4ZWxBcnJheVRvRmxvYXQzMihzcGVjdWxhclBpeGVscyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZWplY3QoXCJGYWlsZWQgdG8gcmV0cmlldmUgcGl4ZWxzIGZyb20gc3BlY3VsYXIgZ2xvc3NpbmVzcyB0ZXh0dXJlIVwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgYnl0ZUxlbmd0aCA9IHNwZWN1bGFyR2xvc3NpbmVzc0J1ZmZlci5ieXRlTGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbWV0YWxsaWNSb3VnaG5lc3NCdWZmZXIgPSBuZXcgVWludDhBcnJheShieXRlTGVuZ3RoKTtcclxuICAgICAgICAgICAgY29uc3QgYmFzZUNvbG9yQnVmZmVyID0gbmV3IFVpbnQ4QXJyYXkoYnl0ZUxlbmd0aCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzdHJpZGVTaXplID0gNDtcclxuICAgICAgICAgICAgY29uc3QgbWF4QmFzZUNvbG9yID0gQmxhY2s7XHJcbiAgICAgICAgICAgIGxldCBtYXhNZXRhbGxpYyA9IDA7XHJcbiAgICAgICAgICAgIGxldCBtYXhSb3VnaG5lc3MgPSAwO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaCA9IDA7IGggPCBoZWlnaHQ7ICsraCkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgdyA9IDA7IHcgPCB3aWR0aDsgKyt3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gKHdpZHRoICogaCArIHcpICogc3RyaWRlU2l6ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGlmZnVzZUNvbG9yID0gbmV3IENvbG9yMyhkaWZmdXNlQnVmZmVyW29mZnNldF0sIGRpZmZ1c2VCdWZmZXJbb2Zmc2V0ICsgMV0sIGRpZmZ1c2VCdWZmZXJbb2Zmc2V0ICsgMl0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50b0xpbmVhclNwYWNlKHNjZW5lLmdldEVuZ2luZSgpLnVzZUV4YWN0U3JnYkNvbnZlcnNpb25zKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAubXVsdGlwbHkoZmFjdG9ycy5kaWZmdXNlQ29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNwZWN1bGFyQ29sb3IgPSBuZXcgQ29sb3IzKHNwZWN1bGFyR2xvc3NpbmVzc0J1ZmZlcltvZmZzZXRdLCBzcGVjdWxhckdsb3NzaW5lc3NCdWZmZXJbb2Zmc2V0ICsgMV0sIHNwZWN1bGFyR2xvc3NpbmVzc0J1ZmZlcltvZmZzZXQgKyAyXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvTGluZWFyU3BhY2Uoc2NlbmUuZ2V0RW5naW5lKCkudXNlRXhhY3RTcmdiQ29udmVyc2lvbnMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tdWx0aXBseShmYWN0b3JzLnNwZWN1bGFyQ29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGdsb3NzaW5lc3MgPSBzcGVjdWxhckdsb3NzaW5lc3NCdWZmZXJbb2Zmc2V0ICsgM10gKiBmYWN0b3JzLmdsb3NzaW5lc3M7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNwZWN1bGFyR2xvc3NpbmVzczogSVBCUlNwZWN1bGFyR2xvc3NpbmVzcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlmZnVzZUNvbG9yOiBkaWZmdXNlQ29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwZWN1bGFyQ29sb3I6IHNwZWN1bGFyQ29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdsb3NzaW5lc3M6IGdsb3NzaW5lc3MsXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWV0YWxsaWNSb3VnaG5lc3MgPSB0aGlzLl9jb252ZXJ0U3BlY3VsYXJHbG9zc2luZXNzVG9NZXRhbGxpY1JvdWdobmVzcyhzcGVjdWxhckdsb3NzaW5lc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heEJhc2VDb2xvci5yID0gTWF0aC5tYXgobWF4QmFzZUNvbG9yLnIsIG1ldGFsbGljUm91Z2huZXNzLmJhc2VDb2xvci5yKTtcclxuICAgICAgICAgICAgICAgICAgICBtYXhCYXNlQ29sb3IuZyA9IE1hdGgubWF4KG1heEJhc2VDb2xvci5nLCBtZXRhbGxpY1JvdWdobmVzcy5iYXNlQ29sb3IuZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4QmFzZUNvbG9yLmIgPSBNYXRoLm1heChtYXhCYXNlQ29sb3IuYiwgbWV0YWxsaWNSb3VnaG5lc3MuYmFzZUNvbG9yLmIpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heE1ldGFsbGljID0gTWF0aC5tYXgobWF4TWV0YWxsaWMsIG1ldGFsbGljUm91Z2huZXNzLm1ldGFsbGljISk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4Um91Z2huZXNzID0gTWF0aC5tYXgobWF4Um91Z2huZXNzLCBtZXRhbGxpY1JvdWdobmVzcy5yb3VnaG5lc3MhKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZUNvbG9yQnVmZmVyW29mZnNldF0gPSBtZXRhbGxpY1JvdWdobmVzcy5iYXNlQ29sb3IuciAqIDI1NTtcclxuICAgICAgICAgICAgICAgICAgICBiYXNlQ29sb3JCdWZmZXJbb2Zmc2V0ICsgMV0gPSBtZXRhbGxpY1JvdWdobmVzcy5iYXNlQ29sb3IuZyAqIDI1NTtcclxuICAgICAgICAgICAgICAgICAgICBiYXNlQ29sb3JCdWZmZXJbb2Zmc2V0ICsgMl0gPSBtZXRhbGxpY1JvdWdobmVzcy5iYXNlQ29sb3IuYiAqIDI1NTtcclxuICAgICAgICAgICAgICAgICAgICBiYXNlQ29sb3JCdWZmZXJbb2Zmc2V0ICsgM10gPSByZXNpemVkVGV4dHVyZXMudGV4dHVyZTEuaGFzQWxwaGEgPyBkaWZmdXNlQnVmZmVyW29mZnNldCArIDNdICogMjU1IDogMjU1O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBtZXRhbGxpY1JvdWdobmVzc0J1ZmZlcltvZmZzZXRdID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBtZXRhbGxpY1JvdWdobmVzc0J1ZmZlcltvZmZzZXQgKyAxXSA9IG1ldGFsbGljUm91Z2huZXNzLnJvdWdobmVzcyEgKiAyNTU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0YWxsaWNSb3VnaG5lc3NCdWZmZXJbb2Zmc2V0ICsgMl0gPSBtZXRhbGxpY1JvdWdobmVzcy5tZXRhbGxpYyEgKiAyNTU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0YWxsaWNSb3VnaG5lc3NCdWZmZXJbb2Zmc2V0ICsgM10gPSAyNTU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFJldHJpZXZlcyB0aGUgbWV0YWxsaWMgcm91Z2huZXNzIGZhY3RvcnMgZnJvbSB0aGUgbWF4aW11bSB0ZXh0dXJlIHZhbHVlcy5cclxuICAgICAgICAgICAgY29uc3QgbWV0YWxsaWNSb3VnaG5lc3NGYWN0b3JzOiBJUEJSTWV0YWxsaWNSb3VnaG5lc3MgPSB7XHJcbiAgICAgICAgICAgICAgICBiYXNlQ29sb3I6IG1heEJhc2VDb2xvcixcclxuICAgICAgICAgICAgICAgIG1ldGFsbGljOiBtYXhNZXRhbGxpYyxcclxuICAgICAgICAgICAgICAgIHJvdWdobmVzczogbWF4Um91Z2huZXNzLFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgbGV0IHdyaXRlT3V0TWV0YWxsaWNSb3VnaG5lc3NUZXh0dXJlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGxldCB3cml0ZU91dEJhc2VDb2xvclRleHR1cmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGggPSAwOyBoIDwgaGVpZ2h0OyArK2gpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHcgPSAwOyB3IDwgd2lkdGg7ICsrdykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uT2Zmc2V0ID0gKHdpZHRoICogaCArIHcpICogc3RyaWRlU2l6ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZUNvbG9yQnVmZmVyW2Rlc3RpbmF0aW9uT2Zmc2V0XSAvPSBtZXRhbGxpY1JvdWdobmVzc0ZhY3RvcnMuYmFzZUNvbG9yLnIgPiBFcHNpbG9uID8gbWV0YWxsaWNSb3VnaG5lc3NGYWN0b3JzLmJhc2VDb2xvci5yIDogMTtcclxuICAgICAgICAgICAgICAgICAgICBiYXNlQ29sb3JCdWZmZXJbZGVzdGluYXRpb25PZmZzZXQgKyAxXSAvPSBtZXRhbGxpY1JvdWdobmVzc0ZhY3RvcnMuYmFzZUNvbG9yLmcgPiBFcHNpbG9uID8gbWV0YWxsaWNSb3VnaG5lc3NGYWN0b3JzLmJhc2VDb2xvci5nIDogMTtcclxuICAgICAgICAgICAgICAgICAgICBiYXNlQ29sb3JCdWZmZXJbZGVzdGluYXRpb25PZmZzZXQgKyAyXSAvPSBtZXRhbGxpY1JvdWdobmVzc0ZhY3RvcnMuYmFzZUNvbG9yLmIgPiBFcHNpbG9uID8gbWV0YWxsaWNSb3VnaG5lc3NGYWN0b3JzLmJhc2VDb2xvci5iIDogMTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluZWFyQmFzZUNvbG9yUGl4ZWwgPSBDb2xvcjMuRnJvbUludHMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VDb2xvckJ1ZmZlcltkZXN0aW5hdGlvbk9mZnNldF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VDb2xvckJ1ZmZlcltkZXN0aW5hdGlvbk9mZnNldCArIDFdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlQ29sb3JCdWZmZXJbZGVzdGluYXRpb25PZmZzZXQgKyAyXVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc1JHQkJhc2VDb2xvclBpeGVsID0gbGluZWFyQmFzZUNvbG9yUGl4ZWwudG9HYW1tYVNwYWNlKHNjZW5lLmdldEVuZ2luZSgpLnVzZUV4YWN0U3JnYkNvbnZlcnNpb25zKTtcclxuICAgICAgICAgICAgICAgICAgICBiYXNlQ29sb3JCdWZmZXJbZGVzdGluYXRpb25PZmZzZXRdID0gc1JHQkJhc2VDb2xvclBpeGVsLnIgKiAyNTU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZUNvbG9yQnVmZmVyW2Rlc3RpbmF0aW9uT2Zmc2V0ICsgMV0gPSBzUkdCQmFzZUNvbG9yUGl4ZWwuZyAqIDI1NTtcclxuICAgICAgICAgICAgICAgICAgICBiYXNlQ29sb3JCdWZmZXJbZGVzdGluYXRpb25PZmZzZXQgKyAyXSA9IHNSR0JCYXNlQ29sb3JQaXhlbC5iICogMjU1O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXNSR0JCYXNlQ29sb3JQaXhlbC5lcXVhbHNXaXRoRXBzaWxvbihXaGl0ZSwgRXBzaWxvbikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3JpdGVPdXRCYXNlQ29sb3JUZXh0dXJlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG1ldGFsbGljUm91Z2huZXNzQnVmZmVyW2Rlc3RpbmF0aW9uT2Zmc2V0ICsgMV0gLz0gbWV0YWxsaWNSb3VnaG5lc3NGYWN0b3JzLnJvdWdobmVzcyEgPiBFcHNpbG9uID8gbWV0YWxsaWNSb3VnaG5lc3NGYWN0b3JzLnJvdWdobmVzcyEgOiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGFsbGljUm91Z2huZXNzQnVmZmVyW2Rlc3RpbmF0aW9uT2Zmc2V0ICsgMl0gLz0gbWV0YWxsaWNSb3VnaG5lc3NGYWN0b3JzLm1ldGFsbGljISA+IEVwc2lsb24gPyBtZXRhbGxpY1JvdWdobmVzc0ZhY3RvcnMubWV0YWxsaWMhIDogMTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWV0YWxsaWNSb3VnaG5lc3NQaXhlbCA9IENvbG9yMy5Gcm9tSW50cygyNTUsIG1ldGFsbGljUm91Z2huZXNzQnVmZmVyW2Rlc3RpbmF0aW9uT2Zmc2V0ICsgMV0sIG1ldGFsbGljUm91Z2huZXNzQnVmZmVyW2Rlc3RpbmF0aW9uT2Zmc2V0ICsgMl0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIW1ldGFsbGljUm91Z2huZXNzUGl4ZWwuZXF1YWxzV2l0aEVwc2lsb24oV2hpdGUsIEVwc2lsb24pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdyaXRlT3V0TWV0YWxsaWNSb3VnaG5lc3NUZXh0dXJlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh3cml0ZU91dE1ldGFsbGljUm91Z2huZXNzVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9nZXRJbWFnZURhdGFBc3luYyhtZXRhbGxpY1JvdWdobmVzc0J1ZmZlciwgd2lkdGgsIGhlaWdodCwgbWltZVR5cGUpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWV0YWxsaWNSb3VnaG5lc3NGYWN0b3JzLm1ldGFsbGljUm91Z2huZXNzVGV4dHVyZURhdGEgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh3cml0ZU91dEJhc2VDb2xvclRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZ2V0SW1hZ2VEYXRhQXN5bmMoYmFzZUNvbG9yQnVmZmVyLCB3aWR0aCwgaGVpZ2h0LCBtaW1lVHlwZSkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRhbGxpY1JvdWdobmVzc0ZhY3RvcnMuYmFzZUNvbG9yVGV4dHVyZURhdGEgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1ldGFsbGljUm91Z2huZXNzRmFjdG9ycztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVqZWN0KFwiX0NvbnZlcnRTcGVjdWxhckdsb3NzaW5lc3NUZXh0dXJlc1RvTWV0YWxsaWNSb3VnaG5lc3M6IFNjZW5lIGZyb20gdGV4dHVyZXMgaXMgbWlzc2luZyFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydHMgc3BlY3VsYXIgZ2xvc3NpbmVzcyBtYXRlcmlhbCBwcm9wZXJ0aWVzIHRvIG1ldGFsbGljIHJvdWdobmVzc1xyXG4gICAgICogQHBhcmFtIHNwZWN1bGFyR2xvc3NpbmVzcyBpbnRlcmZhY2Ugd2l0aCBzcGVjdWxhciBnbG9zc2luZXNzIG1hdGVyaWFsIHByb3BlcnRpZXNcclxuICAgICAqIEByZXR1cm5zIGludGVyZmFjZSB3aXRoIG1ldGFsbGljIHJvdWdobmVzcyBtYXRlcmlhbCBwcm9wZXJ0aWVzXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX2NvbnZlcnRTcGVjdWxhckdsb3NzaW5lc3NUb01ldGFsbGljUm91Z2huZXNzKHNwZWN1bGFyR2xvc3NpbmVzczogSVBCUlNwZWN1bGFyR2xvc3NpbmVzcyk6IElQQlJNZXRhbGxpY1JvdWdobmVzcyB7XHJcbiAgICAgICAgY29uc3QgZGlmZnVzZVBlcmNlaXZlZEJyaWdodG5lc3MgPSB0aGlzLl9nZXRQZXJjZWl2ZWRCcmlnaHRuZXNzKHNwZWN1bGFyR2xvc3NpbmVzcy5kaWZmdXNlQ29sb3IpO1xyXG4gICAgICAgIGNvbnN0IHNwZWN1bGFyUGVyY2VpdmVkQnJpZ2h0bmVzcyA9IHRoaXMuX2dldFBlcmNlaXZlZEJyaWdodG5lc3Moc3BlY3VsYXJHbG9zc2luZXNzLnNwZWN1bGFyQ29sb3IpO1xyXG4gICAgICAgIGNvbnN0IG9uZU1pbnVzU3BlY3VsYXJTdHJlbmd0aCA9IDEgLSB0aGlzLl9nZXRNYXhDb21wb25lbnQoc3BlY3VsYXJHbG9zc2luZXNzLnNwZWN1bGFyQ29sb3IpO1xyXG4gICAgICAgIGNvbnN0IG1ldGFsbGljID0gX1NvbHZlTWV0YWxsaWMoZGlmZnVzZVBlcmNlaXZlZEJyaWdodG5lc3MsIHNwZWN1bGFyUGVyY2VpdmVkQnJpZ2h0bmVzcywgb25lTWludXNTcGVjdWxhclN0cmVuZ3RoKTtcclxuICAgICAgICBjb25zdCBiYXNlQ29sb3JGcm9tRGlmZnVzZSA9IHNwZWN1bGFyR2xvc3NpbmVzcy5kaWZmdXNlQ29sb3Iuc2NhbGUob25lTWludXNTcGVjdWxhclN0cmVuZ3RoIC8gKDEuMCAtIERpZWxlY3RyaWNTcGVjdWxhci5yKSAvIE1hdGgubWF4KDEgLSBtZXRhbGxpYykpO1xyXG4gICAgICAgIGNvbnN0IGJhc2VDb2xvckZyb21TcGVjdWxhciA9IHNwZWN1bGFyR2xvc3NpbmVzcy5zcGVjdWxhckNvbG9yLnN1YnRyYWN0KERpZWxlY3RyaWNTcGVjdWxhci5zY2FsZSgxIC0gbWV0YWxsaWMpKS5zY2FsZSgxIC8gTWF0aC5tYXgobWV0YWxsaWMpKTtcclxuICAgICAgICBsZXQgYmFzZUNvbG9yID0gQ29sb3IzLkxlcnAoYmFzZUNvbG9yRnJvbURpZmZ1c2UsIGJhc2VDb2xvckZyb21TcGVjdWxhciwgbWV0YWxsaWMgKiBtZXRhbGxpYyk7XHJcbiAgICAgICAgYmFzZUNvbG9yID0gYmFzZUNvbG9yLmNsYW1wVG9SZWYoMCwgMSwgYmFzZUNvbG9yKTtcclxuXHJcbiAgICAgICAgY29uc3QgbWV0YWxsaWNSb3VnaG5lc3M6IElQQlJNZXRhbGxpY1JvdWdobmVzcyA9IHtcclxuICAgICAgICAgICAgYmFzZUNvbG9yOiBiYXNlQ29sb3IsXHJcbiAgICAgICAgICAgIG1ldGFsbGljOiBtZXRhbGxpYyxcclxuICAgICAgICAgICAgcm91Z2huZXNzOiAxIC0gc3BlY3VsYXJHbG9zc2luZXNzLmdsb3NzaW5lc3MsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG1ldGFsbGljUm91Z2huZXNzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsY3VsYXRlcyB0aGUgc3VyZmFjZSByZWZsZWN0YW5jZSwgaW5kZXBlbmRlbnQgb2YgbGlnaHRpbmcgY29uZGl0aW9uc1xyXG4gICAgICogQHBhcmFtIGNvbG9yIENvbG9yIHNvdXJjZSB0byBjYWxjdWxhdGUgYnJpZ2h0bmVzcyBmcm9tXHJcbiAgICAgKiBAcmV0dXJucyBudW1iZXIgcmVwcmVzZW50aW5nIHRoZSBwZXJjZWl2ZWQgYnJpZ2h0bmVzcywgb3IgemVybyBpZiBjb2xvciBpcyB1bmRlZmluZWRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfZ2V0UGVyY2VpdmVkQnJpZ2h0bmVzcyhjb2xvcjogQ29sb3IzKTogbnVtYmVyIHtcclxuICAgICAgICBpZiAoY29sb3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGguc3FydCgwLjI5OSAqIGNvbG9yLnIgKiBjb2xvci5yICsgMC41ODcgKiBjb2xvci5nICogY29sb3IuZyArIDAuMTE0ICogY29sb3IuYiAqIGNvbG9yLmIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIG1heGltdW0gY29sb3IgY29tcG9uZW50IHZhbHVlXHJcbiAgICAgKiBAcGFyYW0gY29sb3JcclxuICAgICAqIEByZXR1cm5zIG1heGltdW0gY29sb3IgY29tcG9uZW50IHZhbHVlLCBvciB6ZXJvIGlmIGNvbG9yIGlzIG51bGwgb3IgdW5kZWZpbmVkXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX2dldE1heENvbXBvbmVudChjb2xvcjogQ29sb3IzKTogbnVtYmVyIHtcclxuICAgICAgICBpZiAoY29sb3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4KGNvbG9yLnIsIE1hdGgubWF4KGNvbG9yLmcsIGNvbG9yLmIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IGEgUEJSTWF0ZXJpYWwgKE1ldGFsbGljL1JvdWdobmVzcykgdG8gTWV0YWxsaWMgUm91Z2huZXNzIGZhY3RvcnNcclxuICAgICAqIEBwYXJhbSBiYWJ5bG9uUEJSTWF0ZXJpYWwgQkpTIFBCUiBNZXRhbGxpYyBSb3VnaG5lc3MgTWF0ZXJpYWxcclxuICAgICAqIEBwYXJhbSBtaW1lVHlwZSBtaW1lIHR5cGUgdG8gdXNlIGZvciB0aGUgdGV4dHVyZXNcclxuICAgICAqIEBwYXJhbSBnbFRGUGJyTWV0YWxsaWNSb3VnaG5lc3MgZ2xURiBQQlIgTWV0YWxsaWMgUm91Z2huZXNzIGludGVyZmFjZVxyXG4gICAgICogQHBhcmFtIGhhc1VWcyBzcGVjaWZpZXMgaWYgdGV4dHVyZSBjb29yZGluYXRlcyBhcmUgcHJlc2VudCBvbiB0aGUgc3VibWVzaCB0byBkZXRlcm1pbmUgaWYgdGV4dHVyZXMgc2hvdWxkIGJlIGFwcGxpZWRcclxuICAgICAqIEByZXR1cm5zIGdsVEYgUEJSIE1ldGFsbGljIFJvdWdobmVzcyBmYWN0b3JzXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgYXN5bmMgX2NvbnZlcnRNZXRhbFJvdWdoRmFjdG9yc1RvTWV0YWxsaWNSb3VnaG5lc3NBc3luYyhcclxuICAgICAgICBiYWJ5bG9uUEJSTWF0ZXJpYWw6IFBCUkJhc2VNYXRlcmlhbCxcclxuICAgICAgICBtaW1lVHlwZTogSW1hZ2VNaW1lVHlwZSxcclxuICAgICAgICBnbFRGUGJyTWV0YWxsaWNSb3VnaG5lc3M6IElNYXRlcmlhbFBick1ldGFsbGljUm91Z2huZXNzLFxyXG4gICAgICAgIGhhc1VWczogYm9vbGVhblxyXG4gICAgKTogUHJvbWlzZTxJUEJSTWV0YWxsaWNSb3VnaG5lc3M+IHtcclxuICAgICAgICBjb25zdCBwcm9taXNlczogUHJvbWlzZTx2b2lkPltdID0gW107XHJcblxyXG4gICAgICAgIGNvbnN0IG1ldGFsbGljUm91Z2huZXNzOiBJUEJSTWV0YWxsaWNSb3VnaG5lc3MgPSB7XHJcbiAgICAgICAgICAgIGJhc2VDb2xvcjogYmFieWxvblBCUk1hdGVyaWFsLl9hbGJlZG9Db2xvcixcclxuICAgICAgICAgICAgbWV0YWxsaWM6IGJhYnlsb25QQlJNYXRlcmlhbC5fbWV0YWxsaWMsXHJcbiAgICAgICAgICAgIHJvdWdobmVzczogYmFieWxvblBCUk1hdGVyaWFsLl9yb3VnaG5lc3MsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKGhhc1VWcykge1xyXG4gICAgICAgICAgICBjb25zdCBhbGJlZG9UZXh0dXJlID0gYmFieWxvblBCUk1hdGVyaWFsLl9hbGJlZG9UZXh0dXJlO1xyXG4gICAgICAgICAgICBpZiAoYWxiZWRvVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4cG9ydFRleHR1cmVBc3luYyhiYWJ5bG9uUEJSTWF0ZXJpYWwuX2FsYmVkb1RleHR1cmUhLCBtaW1lVHlwZSkudGhlbigoZ2xURlRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdsVEZUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbFRGUGJyTWV0YWxsaWNSb3VnaG5lc3MuYmFzZUNvbG9yVGV4dHVyZSA9IGdsVEZUZXh0dXJlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgbWV0YWxsaWNUZXh0dXJlID0gYmFieWxvblBCUk1hdGVyaWFsLl9tZXRhbGxpY1RleHR1cmU7XHJcbiAgICAgICAgICAgIGlmIChtZXRhbGxpY1RleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leHBvcnRUZXh0dXJlQXN5bmMobWV0YWxsaWNUZXh0dXJlLCBtaW1lVHlwZSkudGhlbigoZ2xURlRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdsVEZUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbFRGUGJyTWV0YWxsaWNSb3VnaG5lc3MubWV0YWxsaWNSb3VnaG5lc3NUZXh0dXJlID0gZ2xURlRleHR1cmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHByb21pc2VzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5fZXhwb3J0ZXIuX21hdGVyaWFsTmVlZHNVVnNTZXQuYWRkKGJhYnlsb25QQlJNYXRlcmlhbCk7XHJcbiAgICAgICAgICAgIGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBtZXRhbGxpY1JvdWdobmVzcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9nZXRUZXh0dXJlU2FtcGxlcih0ZXh0dXJlOiBOdWxsYWJsZTxCYXNlVGV4dHVyZT4pOiBJU2FtcGxlciB7XHJcbiAgICAgICAgY29uc3Qgc2FtcGxlcjogSVNhbXBsZXIgPSB7fTtcclxuICAgICAgICBpZiAoIXRleHR1cmUgfHwgISh0ZXh0dXJlIGluc3RhbmNlb2YgVGV4dHVyZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNhbXBsZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB3cmFwUyA9IHRoaXMuX2dldEdMVEZUZXh0dXJlV3JhcE1vZGUodGV4dHVyZS53cmFwVSk7XHJcbiAgICAgICAgaWYgKHdyYXBTICE9PSBUZXh0dXJlV3JhcE1vZGUuUkVQRUFUKSB7XHJcbiAgICAgICAgICAgIHNhbXBsZXIud3JhcFMgPSB3cmFwUztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHdyYXBUID0gdGhpcy5fZ2V0R0xURlRleHR1cmVXcmFwTW9kZSh0ZXh0dXJlLndyYXBWKTtcclxuICAgICAgICBpZiAod3JhcFQgIT09IFRleHR1cmVXcmFwTW9kZS5SRVBFQVQpIHtcclxuICAgICAgICAgICAgc2FtcGxlci53cmFwVCA9IHdyYXBUO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3dpdGNoICh0ZXh0dXJlLnNhbXBsaW5nTW9kZSkge1xyXG4gICAgICAgICAgICBjYXNlIFRleHR1cmUuTElORUFSX0xJTkVBUjoge1xyXG4gICAgICAgICAgICAgICAgc2FtcGxlci5tYWdGaWx0ZXIgPSBUZXh0dXJlTWFnRmlsdGVyLkxJTkVBUjtcclxuICAgICAgICAgICAgICAgIHNhbXBsZXIubWluRmlsdGVyID0gVGV4dHVyZU1pbkZpbHRlci5MSU5FQVI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFRleHR1cmUuTElORUFSX05FQVJFU1Q6IHtcclxuICAgICAgICAgICAgICAgIHNhbXBsZXIubWFnRmlsdGVyID0gVGV4dHVyZU1hZ0ZpbHRlci5MSU5FQVI7XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVyLm1pbkZpbHRlciA9IFRleHR1cmVNaW5GaWx0ZXIuTkVBUkVTVDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgVGV4dHVyZS5ORUFSRVNUX0xJTkVBUjoge1xyXG4gICAgICAgICAgICAgICAgc2FtcGxlci5tYWdGaWx0ZXIgPSBUZXh0dXJlTWFnRmlsdGVyLk5FQVJFU1Q7XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVyLm1pbkZpbHRlciA9IFRleHR1cmVNaW5GaWx0ZXIuTElORUFSO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBUZXh0dXJlLk5FQVJFU1RfTElORUFSX01JUExJTkVBUjoge1xyXG4gICAgICAgICAgICAgICAgc2FtcGxlci5tYWdGaWx0ZXIgPSBUZXh0dXJlTWFnRmlsdGVyLk5FQVJFU1Q7XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVyLm1pbkZpbHRlciA9IFRleHR1cmVNaW5GaWx0ZXIuTElORUFSX01JUE1BUF9MSU5FQVI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFRleHR1cmUuTkVBUkVTVF9ORUFSRVNUOiB7XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVyLm1hZ0ZpbHRlciA9IFRleHR1cmVNYWdGaWx0ZXIuTkVBUkVTVDtcclxuICAgICAgICAgICAgICAgIHNhbXBsZXIubWluRmlsdGVyID0gVGV4dHVyZU1pbkZpbHRlci5ORUFSRVNUO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBUZXh0dXJlLk5FQVJFU1RfTElORUFSX01JUE5FQVJFU1Q6IHtcclxuICAgICAgICAgICAgICAgIHNhbXBsZXIubWFnRmlsdGVyID0gVGV4dHVyZU1hZ0ZpbHRlci5ORUFSRVNUO1xyXG4gICAgICAgICAgICAgICAgc2FtcGxlci5taW5GaWx0ZXIgPSBUZXh0dXJlTWluRmlsdGVyLkxJTkVBUl9NSVBNQVBfTkVBUkVTVDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgVGV4dHVyZS5MSU5FQVJfTkVBUkVTVF9NSVBORUFSRVNUOiB7XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVyLm1hZ0ZpbHRlciA9IFRleHR1cmVNYWdGaWx0ZXIuTElORUFSO1xyXG4gICAgICAgICAgICAgICAgc2FtcGxlci5taW5GaWx0ZXIgPSBUZXh0dXJlTWluRmlsdGVyLk5FQVJFU1RfTUlQTUFQX05FQVJFU1Q7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFRleHR1cmUuTElORUFSX05FQVJFU1RfTUlQTElORUFSOiB7XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVyLm1hZ0ZpbHRlciA9IFRleHR1cmVNYWdGaWx0ZXIuTElORUFSO1xyXG4gICAgICAgICAgICAgICAgc2FtcGxlci5taW5GaWx0ZXIgPSBUZXh0dXJlTWluRmlsdGVyLk5FQVJFU1RfTUlQTUFQX0xJTkVBUjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgVGV4dHVyZS5ORUFSRVNUX05FQVJFU1RfTUlQTElORUFSOiB7XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVyLm1hZ0ZpbHRlciA9IFRleHR1cmVNYWdGaWx0ZXIuTkVBUkVTVDtcclxuICAgICAgICAgICAgICAgIHNhbXBsZXIubWluRmlsdGVyID0gVGV4dHVyZU1pbkZpbHRlci5ORUFSRVNUX01JUE1BUF9MSU5FQVI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFRleHR1cmUuTElORUFSX0xJTkVBUl9NSVBMSU5FQVI6IHtcclxuICAgICAgICAgICAgICAgIHNhbXBsZXIubWFnRmlsdGVyID0gVGV4dHVyZU1hZ0ZpbHRlci5MSU5FQVI7XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVyLm1pbkZpbHRlciA9IFRleHR1cmVNaW5GaWx0ZXIuTElORUFSX01JUE1BUF9MSU5FQVI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFRleHR1cmUuTElORUFSX0xJTkVBUl9NSVBORUFSRVNUOiB7XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVyLm1hZ0ZpbHRlciA9IFRleHR1cmVNYWdGaWx0ZXIuTElORUFSO1xyXG4gICAgICAgICAgICAgICAgc2FtcGxlci5taW5GaWx0ZXIgPSBUZXh0dXJlTWluRmlsdGVyLkxJTkVBUl9NSVBNQVBfTkVBUkVTVDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgVGV4dHVyZS5ORUFSRVNUX05FQVJFU1RfTUlQTkVBUkVTVDoge1xyXG4gICAgICAgICAgICAgICAgc2FtcGxlci5tYWdGaWx0ZXIgPSBUZXh0dXJlTWFnRmlsdGVyLk5FQVJFU1Q7XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVyLm1pbkZpbHRlciA9IFRleHR1cmVNaW5GaWx0ZXIuTkVBUkVTVF9NSVBNQVBfTkVBUkVTVDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc2FtcGxlcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9nZXRHTFRGVGV4dHVyZVdyYXBNb2RlKHdyYXBNb2RlOiBudW1iZXIpOiBUZXh0dXJlV3JhcE1vZGUge1xyXG4gICAgICAgIHN3aXRjaCAod3JhcE1vZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBUZXh0dXJlLldSQVBfQUREUkVTU01PREU6IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBUZXh0dXJlV3JhcE1vZGUuUkVQRUFUO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgVGV4dHVyZS5DTEFNUF9BRERSRVNTTU9ERToge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFRleHR1cmVXcmFwTW9kZS5DTEFNUF9UT19FREdFO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgVGV4dHVyZS5NSVJST1JfQUREUkVTU01PREU6IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBUZXh0dXJlV3JhcE1vZGUuTUlSUk9SRURfUkVQRUFUO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgICAgIFRvb2xzLkVycm9yKGBVbnN1cHBvcnRlZCBUZXh0dXJlIFdyYXAgTW9kZSAke3dyYXBNb2RlfSFgKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBUZXh0dXJlV3JhcE1vZGUuUkVQRUFUO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCBhIFBCUk1hdGVyaWFsIChTcGVjdWxhci9HbG9zc2luZXNzKSB0byBNZXRhbGxpYyBSb3VnaG5lc3MgZmFjdG9yc1xyXG4gICAgICogQHBhcmFtIGJhYnlsb25QQlJNYXRlcmlhbCBCSlMgUEJSIE1ldGFsbGljIFJvdWdobmVzcyBNYXRlcmlhbFxyXG4gICAgICogQHBhcmFtIG1pbWVUeXBlIG1pbWUgdHlwZSB0byB1c2UgZm9yIHRoZSB0ZXh0dXJlc1xyXG4gICAgICogQHBhcmFtIHBick1ldGFsbGljUm91Z2huZXNzIGdsVEYgUEJSIE1ldGFsbGljIFJvdWdobmVzcyBpbnRlcmZhY2VcclxuICAgICAqIEBwYXJhbSBoYXNVVnMgc3BlY2lmaWVzIGlmIHRleHR1cmUgY29vcmRpbmF0ZXMgYXJlIHByZXNlbnQgb24gdGhlIHN1Ym1lc2ggdG8gZGV0ZXJtaW5lIGlmIHRleHR1cmVzIHNob3VsZCBiZSBhcHBsaWVkXHJcbiAgICAgKiBAcmV0dXJucyBnbFRGIFBCUiBNZXRhbGxpYyBSb3VnaG5lc3MgZmFjdG9yc1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGFzeW5jIF9jb252ZXJ0U3BlY0dsb3NzRmFjdG9yc1RvTWV0YWxsaWNSb3VnaG5lc3NBc3luYyhcclxuICAgICAgICBiYWJ5bG9uUEJSTWF0ZXJpYWw6IFBCUkJhc2VNYXRlcmlhbCxcclxuICAgICAgICBtaW1lVHlwZTogSW1hZ2VNaW1lVHlwZSxcclxuICAgICAgICBwYnJNZXRhbGxpY1JvdWdobmVzczogSU1hdGVyaWFsUGJyTWV0YWxsaWNSb3VnaG5lc3MsXHJcbiAgICAgICAgaGFzVVZzOiBib29sZWFuXHJcbiAgICApOiBQcm9taXNlPElQQlJNZXRhbGxpY1JvdWdobmVzcz4ge1xyXG4gICAgICAgIGNvbnN0IHNwZWNHbG9zczogSVBCUlNwZWN1bGFyR2xvc3NpbmVzcyA9IHtcclxuICAgICAgICAgICAgZGlmZnVzZUNvbG9yOiBiYWJ5bG9uUEJSTWF0ZXJpYWwuX2FsYmVkb0NvbG9yLFxyXG4gICAgICAgICAgICBzcGVjdWxhckNvbG9yOiBiYWJ5bG9uUEJSTWF0ZXJpYWwuX3JlZmxlY3Rpdml0eUNvbG9yLFxyXG4gICAgICAgICAgICBnbG9zc2luZXNzOiBiYWJ5bG9uUEJSTWF0ZXJpYWwuX21pY3JvU3VyZmFjZSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBhbGJlZG9UZXh0dXJlID0gYmFieWxvblBCUk1hdGVyaWFsLl9hbGJlZG9UZXh0dXJlO1xyXG4gICAgICAgIGNvbnN0IHJlZmxlY3Rpdml0eVRleHR1cmUgPSBiYWJ5bG9uUEJSTWF0ZXJpYWwuX3JlZmxlY3Rpdml0eVRleHR1cmU7XHJcbiAgICAgICAgY29uc3QgdXNlTWljcm9zdXJmYWNlRnJvbVJlZmxlY3Rpdml0eU1hcEFscGhhID0gYmFieWxvblBCUk1hdGVyaWFsLl91c2VNaWNyb1N1cmZhY2VGcm9tUmVmbGVjdGl2aXR5TWFwQWxwaGE7XHJcbiAgICAgICAgaWYgKHJlZmxlY3Rpdml0eVRleHR1cmUgJiYgIXVzZU1pY3Jvc3VyZmFjZUZyb21SZWZsZWN0aXZpdHlNYXBBbHBoYSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZWplY3QoXCJfQ29udmVydFBCUk1hdGVyaWFsOiBHbG9zc2luZXNzIHZhbHVlcyBub3QgaW5jbHVkZWQgaW4gdGhlIHJlZmxlY3Rpdml0eSB0ZXh0dXJlIGFyZSBjdXJyZW50bHkgbm90IHN1cHBvcnRlZFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgoYWxiZWRvVGV4dHVyZSB8fCByZWZsZWN0aXZpdHlUZXh0dXJlKSAmJiBoYXNVVnMpIHtcclxuICAgICAgICAgICAgdGhpcy5fZXhwb3J0ZXIuX21hdGVyaWFsTmVlZHNVVnNTZXQuYWRkKGJhYnlsb25QQlJNYXRlcmlhbCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzYW1wbGVySW5kZXggPSB0aGlzLl9leHBvcnRUZXh0dXJlU2FtcGxlcihhbGJlZG9UZXh0dXJlIHx8IHJlZmxlY3Rpdml0eVRleHR1cmUpO1xyXG4gICAgICAgICAgICBjb25zdCBtZXRhbGxpY1JvdWdobmVzc0ZhY3RvcnMgPSBhd2FpdCB0aGlzLl9jb252ZXJ0U3BlY3VsYXJHbG9zc2luZXNzVGV4dHVyZXNUb01ldGFsbGljUm91Z2huZXNzQXN5bmMoYWxiZWRvVGV4dHVyZSwgcmVmbGVjdGl2aXR5VGV4dHVyZSwgc3BlY0dsb3NzLCBtaW1lVHlwZSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0ZXh0dXJlcyA9IHRoaXMuX2V4cG9ydGVyLl90ZXh0dXJlcztcclxuXHJcbiAgICAgICAgICAgIGlmIChtZXRhbGxpY1JvdWdobmVzc0ZhY3RvcnMuYmFzZUNvbG9yVGV4dHVyZURhdGEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlSW5kZXggPSB0aGlzLl9leHBvcnRJbWFnZShgYmFzZUNvbG9yJHt0ZXh0dXJlcy5sZW5ndGh9YCwgbWltZVR5cGUsIG1ldGFsbGljUm91Z2huZXNzRmFjdG9ycy5iYXNlQ29sb3JUZXh0dXJlRGF0YSk7XHJcbiAgICAgICAgICAgICAgICBwYnJNZXRhbGxpY1JvdWdobmVzcy5iYXNlQ29sb3JUZXh0dXJlID0gdGhpcy5fZXhwb3J0VGV4dHVyZUluZm8oaW1hZ2VJbmRleCwgc2FtcGxlckluZGV4LCBhbGJlZG9UZXh0dXJlPy5jb29yZGluYXRlc0luZGV4KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKG1ldGFsbGljUm91Z2huZXNzRmFjdG9ycy5tZXRhbGxpY1JvdWdobmVzc1RleHR1cmVEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbWFnZUluZGV4ID0gdGhpcy5fZXhwb3J0SW1hZ2UoYG1ldGFsbGljUm91Z2huZXNzJHt0ZXh0dXJlcy5sZW5ndGh9YCwgbWltZVR5cGUsIG1ldGFsbGljUm91Z2huZXNzRmFjdG9ycy5tZXRhbGxpY1JvdWdobmVzc1RleHR1cmVEYXRhKTtcclxuICAgICAgICAgICAgICAgIHBick1ldGFsbGljUm91Z2huZXNzLm1ldGFsbGljUm91Z2huZXNzVGV4dHVyZSA9IHRoaXMuX2V4cG9ydFRleHR1cmVJbmZvKGltYWdlSW5kZXgsIHNhbXBsZXJJbmRleCwgcmVmbGVjdGl2aXR5VGV4dHVyZT8uY29vcmRpbmF0ZXNJbmRleCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBtZXRhbGxpY1JvdWdobmVzc0ZhY3RvcnM7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbnZlcnRTcGVjdWxhckdsb3NzaW5lc3NUb01ldGFsbGljUm91Z2huZXNzKHNwZWNHbG9zcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBleHBvcnRQQlJNYXRlcmlhbEFzeW5jKGJhYnlsb25QQlJNYXRlcmlhbDogUEJSQmFzZU1hdGVyaWFsLCBtaW1lVHlwZTogSW1hZ2VNaW1lVHlwZSwgaGFzVVZzOiBib29sZWFuKTogUHJvbWlzZTxudW1iZXI+IHtcclxuICAgICAgICBjb25zdCBnbFRGUGJyTWV0YWxsaWNSb3VnaG5lc3M6IElNYXRlcmlhbFBick1ldGFsbGljUm91Z2huZXNzID0ge307XHJcblxyXG4gICAgICAgIGNvbnN0IGdsVEZNYXRlcmlhbDogSU1hdGVyaWFsID0ge1xyXG4gICAgICAgICAgICBuYW1lOiBiYWJ5bG9uUEJSTWF0ZXJpYWwubmFtZSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCB1c2VNZXRhbGxpY1JvdWdobmVzcyA9IGJhYnlsb25QQlJNYXRlcmlhbC5pc01ldGFsbGljV29ya2Zsb3coKTtcclxuXHJcbiAgICAgICAgaWYgKHVzZU1ldGFsbGljUm91Z2huZXNzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFsYmVkb0NvbG9yID0gYmFieWxvblBCUk1hdGVyaWFsLl9hbGJlZG9Db2xvcjtcclxuICAgICAgICAgICAgY29uc3QgYWxwaGEgPSBiYWJ5bG9uUEJSTWF0ZXJpYWwuYWxwaGE7XHJcbiAgICAgICAgICAgIGlmIChhbGJlZG9Db2xvcikge1xyXG4gICAgICAgICAgICAgICAgZ2xURlBick1ldGFsbGljUm91Z2huZXNzLmJhc2VDb2xvckZhY3RvciA9IFthbGJlZG9Db2xvci5yLCBhbGJlZG9Db2xvci5nLCBhbGJlZG9Db2xvci5iLCBhbHBoYV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG1ldGFsbGljUm91Z2huZXNzID0gdXNlTWV0YWxsaWNSb3VnaG5lc3NcclxuICAgICAgICAgICAgPyBhd2FpdCB0aGlzLl9jb252ZXJ0TWV0YWxSb3VnaEZhY3RvcnNUb01ldGFsbGljUm91Z2huZXNzQXN5bmMoYmFieWxvblBCUk1hdGVyaWFsLCBtaW1lVHlwZSwgZ2xURlBick1ldGFsbGljUm91Z2huZXNzLCBoYXNVVnMpXHJcbiAgICAgICAgICAgIDogYXdhaXQgdGhpcy5fY29udmVydFNwZWNHbG9zc0ZhY3RvcnNUb01ldGFsbGljUm91Z2huZXNzQXN5bmMoYmFieWxvblBCUk1hdGVyaWFsLCBtaW1lVHlwZSwgZ2xURlBick1ldGFsbGljUm91Z2huZXNzLCBoYXNVVnMpO1xyXG5cclxuICAgICAgICBhd2FpdCB0aGlzLl9zZXRNZXRhbGxpY1JvdWdobmVzc1Bick1hdGVyaWFsQXN5bmMobWV0YWxsaWNSb3VnaG5lc3MsIGJhYnlsb25QQlJNYXRlcmlhbCwgZ2xURk1hdGVyaWFsLCBnbFRGUGJyTWV0YWxsaWNSb3VnaG5lc3MsIG1pbWVUeXBlLCBoYXNVVnMpO1xyXG4gICAgICAgIGF3YWl0IHRoaXMuX2ZpbmlzaE1hdGVyaWFsQXN5bmMoZ2xURk1hdGVyaWFsLCBiYWJ5bG9uUEJSTWF0ZXJpYWwsIG1pbWVUeXBlKTtcclxuXHJcbiAgICAgICAgY29uc3QgbWF0ZXJpYWxzID0gdGhpcy5fZXhwb3J0ZXIuX21hdGVyaWFscztcclxuICAgICAgICBtYXRlcmlhbHMucHVzaChnbFRGTWF0ZXJpYWwpO1xyXG4gICAgICAgIHJldHVybiBtYXRlcmlhbHMubGVuZ3RoIC0gMTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIF9zZXRNZXRhbGxpY1JvdWdobmVzc1Bick1hdGVyaWFsQXN5bmMoXHJcbiAgICAgICAgbWV0YWxsaWNSb3VnaG5lc3M6IElQQlJNZXRhbGxpY1JvdWdobmVzcyxcclxuICAgICAgICBiYWJ5bG9uUEJSTWF0ZXJpYWw6IFBCUkJhc2VNYXRlcmlhbCxcclxuICAgICAgICBnbFRGTWF0ZXJpYWw6IElNYXRlcmlhbCxcclxuICAgICAgICBnbFRGUGJyTWV0YWxsaWNSb3VnaG5lc3M6IElNYXRlcmlhbFBick1ldGFsbGljUm91Z2huZXNzLFxyXG4gICAgICAgIG1pbWVUeXBlOiBJbWFnZU1pbWVUeXBlLFxyXG4gICAgICAgIGhhc1VWczogYm9vbGVhblxyXG4gICAgKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgU2V0QWxwaGFNb2RlKGdsVEZNYXRlcmlhbCwgYmFieWxvblBCUk1hdGVyaWFsKTtcclxuXHJcbiAgICAgICAgaWYgKCFtZXRhbGxpY1JvdWdobmVzcy5iYXNlQ29sb3IuZXF1YWxzV2l0aEVwc2lsb24oV2hpdGUsIEVwc2lsb24pIHx8ICFTY2FsYXIuV2l0aGluRXBzaWxvbihiYWJ5bG9uUEJSTWF0ZXJpYWwuYWxwaGEsIDEsIEVwc2lsb24pKSB7XHJcbiAgICAgICAgICAgIGdsVEZQYnJNZXRhbGxpY1JvdWdobmVzcy5iYXNlQ29sb3JGYWN0b3IgPSBbbWV0YWxsaWNSb3VnaG5lc3MuYmFzZUNvbG9yLnIsIG1ldGFsbGljUm91Z2huZXNzLmJhc2VDb2xvci5nLCBtZXRhbGxpY1JvdWdobmVzcy5iYXNlQ29sb3IuYiwgYmFieWxvblBCUk1hdGVyaWFsLmFscGhhXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtZXRhbGxpY1JvdWdobmVzcy5tZXRhbGxpYyAhPSBudWxsICYmIG1ldGFsbGljUm91Z2huZXNzLm1ldGFsbGljICE9PSAxKSB7XHJcbiAgICAgICAgICAgIGdsVEZQYnJNZXRhbGxpY1JvdWdobmVzcy5tZXRhbGxpY0ZhY3RvciA9IG1ldGFsbGljUm91Z2huZXNzLm1ldGFsbGljO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWV0YWxsaWNSb3VnaG5lc3Mucm91Z2huZXNzICE9IG51bGwgJiYgbWV0YWxsaWNSb3VnaG5lc3Mucm91Z2huZXNzICE9PSAxKSB7XHJcbiAgICAgICAgICAgIGdsVEZQYnJNZXRhbGxpY1JvdWdobmVzcy5yb3VnaG5lc3NGYWN0b3IgPSBtZXRhbGxpY1JvdWdobmVzcy5yb3VnaG5lc3M7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYmFieWxvblBCUk1hdGVyaWFsLmJhY2tGYWNlQ3VsbGluZyAhPSBudWxsICYmICFiYWJ5bG9uUEJSTWF0ZXJpYWwuYmFja0ZhY2VDdWxsaW5nKSB7XHJcbiAgICAgICAgICAgIGlmICghYmFieWxvblBCUk1hdGVyaWFsLl90d29TaWRlZExpZ2h0aW5nKSB7XHJcbiAgICAgICAgICAgICAgICBUb29scy5XYXJuKGJhYnlsb25QQlJNYXRlcmlhbC5uYW1lICsgXCI6IEJhY2stZmFjZSBjdWxsaW5nIGRpc2FibGVkIGFuZCB0d28tc2lkZWQgbGlnaHRpbmcgZGlzYWJsZWQgaXMgbm90IHN1cHBvcnRlZCBpbiBnbFRGLlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBnbFRGTWF0ZXJpYWwuZG91YmxlU2lkZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGhhc1VWcykge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9taXNlczogUHJvbWlzZTx2b2lkPltdID0gW107XHJcblxyXG4gICAgICAgICAgICBjb25zdCBidW1wVGV4dHVyZSA9IGJhYnlsb25QQlJNYXRlcmlhbC5fYnVtcFRleHR1cmU7XHJcbiAgICAgICAgICAgIGlmIChidW1wVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4cG9ydFRleHR1cmVBc3luYyhidW1wVGV4dHVyZSwgbWltZVR5cGUpLnRoZW4oKGdsVEZUZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnbFRGVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xURk1hdGVyaWFsLm5vcm1hbFRleHR1cmUgPSBnbFRGVGV4dHVyZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChidW1wVGV4dHVyZS5sZXZlbCAhPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsVEZNYXRlcmlhbC5ub3JtYWxUZXh0dXJlLnNjYWxlID0gYnVtcFRleHR1cmUubGV2ZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgYW1iaWVudFRleHR1cmUgPSBiYWJ5bG9uUEJSTWF0ZXJpYWwuX2FtYmllbnRUZXh0dXJlO1xyXG4gICAgICAgICAgICBpZiAoYW1iaWVudFRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leHBvcnRUZXh0dXJlQXN5bmMoYW1iaWVudFRleHR1cmUsIG1pbWVUeXBlKS50aGVuKChnbFRGVGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2xURlRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9jY2x1c2lvblRleHR1cmU6IElNYXRlcmlhbE9jY2x1c2lvblRleHR1cmVJbmZvID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4OiBnbFRGVGV4dHVyZS5pbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXhDb29yZDogZ2xURlRleHR1cmUudGV4Q29vcmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0ZW5zaW9uczogZ2xURlRleHR1cmUuZXh0ZW5zaW9ucyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xURk1hdGVyaWFsLm9jY2x1c2lvblRleHR1cmUgPSBvY2NsdXNpb25UZXh0dXJlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYW1iaWVudFRleHR1cmVTdHJlbmd0aCA9IGJhYnlsb25QQlJNYXRlcmlhbC5fYW1iaWVudFRleHR1cmVTdHJlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbWJpZW50VGV4dHVyZVN0cmVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2NjbHVzaW9uVGV4dHVyZS5zdHJlbmd0aCA9IGFtYmllbnRUZXh0dXJlU3RyZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgZW1pc3NpdmVUZXh0dXJlID0gYmFieWxvblBCUk1hdGVyaWFsLl9lbWlzc2l2ZVRleHR1cmU7XHJcbiAgICAgICAgICAgIGlmIChlbWlzc2l2ZVRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leHBvcnRUZXh0dXJlQXN5bmMoZW1pc3NpdmVUZXh0dXJlLCBtaW1lVHlwZSkudGhlbigoZ2xURlRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdsVEZUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbFRGTWF0ZXJpYWwuZW1pc3NpdmVUZXh0dXJlID0gZ2xURlRleHR1cmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHByb21pc2VzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2V4cG9ydGVyLl9tYXRlcmlhbE5lZWRzVVZzU2V0LmFkZChiYWJ5bG9uUEJSTWF0ZXJpYWwpO1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBlbWlzc2l2ZUNvbG9yID0gYmFieWxvblBCUk1hdGVyaWFsLl9lbWlzc2l2ZUNvbG9yO1xyXG4gICAgICAgIGlmICghZW1pc3NpdmVDb2xvci5lcXVhbHNXaXRoRXBzaWxvbihCbGFjaywgRXBzaWxvbikpIHtcclxuICAgICAgICAgICAgZ2xURk1hdGVyaWFsLmVtaXNzaXZlRmFjdG9yID0gZW1pc3NpdmVDb2xvci5hc0FycmF5KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnbFRGTWF0ZXJpYWwucGJyTWV0YWxsaWNSb3VnaG5lc3MgPSBnbFRGUGJyTWV0YWxsaWNSb3VnaG5lc3M7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIFJHQkEgcGl4ZWwgZGF0YSBmcm9tIGEgdGV4dHVyZVxyXG4gICAgICogQHBhcmFtIGJhYnlsb25UZXh0dXJlXHJcbiAgICAgKiBAcmV0dXJucyBhbiBhcnJheSBidWZmZXIgcHJvbWlzZSBjb250YWluaW5nIHRoZSBwaXhlbCBkYXRhXHJcbiAgICAgKi9cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheCwgQHR5cGVzY3JpcHQtZXNsaW50L3Byb21pc2UtZnVuY3Rpb24tYXN5bmNcclxuICAgIHByaXZhdGUgX2dldFBpeGVsc0Zyb21UZXh0dXJlQXN5bmMoYmFieWxvblRleHR1cmU6IEJhc2VUZXh0dXJlKTogUHJvbWlzZTxOdWxsYWJsZTxVaW50OEFycmF5IHwgRmxvYXQzMkFycmF5Pj4ge1xyXG4gICAgICAgIC8vIElmIHRoZSBpbnRlcm5hbCB0ZXh0dXJlIGZvcm1hdCBpcyBjb21wcmVzc2VkLCB3ZSBjYW5ub3QgcmVhZCB0aGUgcGl4ZWxzIGRpcmVjdGx5LlxyXG4gICAgICAgIGlmIChJc0NvbXByZXNzZWRUZXh0dXJlRm9ybWF0KGJhYnlsb25UZXh0dXJlLnRleHR1cmVGb3JtYXQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBHZXRUZXh0dXJlRGF0YUFzeW5jKGJhYnlsb25UZXh0dXJlLCBiYWJ5bG9uVGV4dHVyZS5fdGV4dHVyZSEud2lkdGgsIGJhYnlsb25UZXh0dXJlLl90ZXh0dXJlIS5oZWlnaHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGJhYnlsb25UZXh0dXJlLnRleHR1cmVUeXBlID09PSBDb25zdGFudHMuVEVYVFVSRVRZUEVfVU5TSUdORURfQllURVxyXG4gICAgICAgICAgICA/IChiYWJ5bG9uVGV4dHVyZS5yZWFkUGl4ZWxzKCkgYXMgUHJvbWlzZTxVaW50OEFycmF5PilcclxuICAgICAgICAgICAgOiAoYmFieWxvblRleHR1cmUucmVhZFBpeGVscygpIGFzIFByb21pc2U8RmxvYXQzMkFycmF5Pik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGV4cG9ydFRleHR1cmVBc3luYyhiYWJ5bG9uVGV4dHVyZTogQmFzZVRleHR1cmUsIG1pbWVUeXBlOiBJbWFnZU1pbWVUeXBlKTogUHJvbWlzZTxOdWxsYWJsZTxJVGV4dHVyZUluZm8+PiB7XHJcbiAgICAgICAgY29uc3QgZXh0ZW5zaW9uUHJvbWlzZSA9IHRoaXMuX2V4cG9ydGVyLl9leHRlbnNpb25zUHJlRXhwb3J0VGV4dHVyZUFzeW5jKFwiZXhwb3J0ZXJcIiwgYmFieWxvblRleHR1cmUgYXMgVGV4dHVyZSwgbWltZVR5cGUpO1xyXG4gICAgICAgIGlmICghZXh0ZW5zaW9uUHJvbWlzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5fZXhwb3J0VGV4dHVyZUluZm9Bc3luYyhiYWJ5bG9uVGV4dHVyZSwgbWltZVR5cGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IGV4dGVuc2lvblByb21pc2UudGhlbihhc3luYyAodGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCB0aGlzLl9leHBvcnRUZXh0dXJlSW5mb0FzeW5jKGJhYnlsb25UZXh0dXJlLCBtaW1lVHlwZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuX2V4cG9ydFRleHR1cmVJbmZvQXN5bmModGV4dHVyZSwgbWltZVR5cGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgX2V4cG9ydFRleHR1cmVJbmZvQXN5bmMoYmFieWxvblRleHR1cmU6IEJhc2VUZXh0dXJlLCBtaW1lVHlwZTogSW1hZ2VNaW1lVHlwZSk6IFByb21pc2U8TnVsbGFibGU8SVRleHR1cmVJbmZvPj4ge1xyXG4gICAgICAgIGxldCB0ZXh0dXJlSW5mbyA9IHRoaXMuX3RleHR1cmVNYXAuZ2V0KGJhYnlsb25UZXh0dXJlKTtcclxuICAgICAgICBpZiAoIXRleHR1cmVJbmZvKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBpeGVscyA9IGF3YWl0IHRoaXMuX2dldFBpeGVsc0Zyb21UZXh0dXJlQXN5bmMoYmFieWxvblRleHR1cmUpO1xyXG4gICAgICAgICAgICBpZiAoIXBpeGVscykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNhbXBsZXJJbmRleCA9IHRoaXMuX2V4cG9ydFRleHR1cmVTYW1wbGVyKGJhYnlsb25UZXh0dXJlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFByZXNlcnZlIHRleHR1cmUgbWltZSB0eXBlIGlmIGRlZmluZWRcclxuICAgICAgICAgICAgY29uc3QgdGV4dHVyZU1pbWVUeXBlID0gKGJhYnlsb25UZXh0dXJlIGFzIFRleHR1cmUpLm1pbWVUeXBlO1xyXG4gICAgICAgICAgICBpZiAodGV4dHVyZU1pbWVUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRleHR1cmVNaW1lVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpbWFnZS9qcGVnXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImltYWdlL3BuZ1wiOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpbWFnZS93ZWJwXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbWVUeXBlID0gdGV4dHVyZU1pbWVUeXBlIGFzIEltYWdlTWltZVR5cGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRvb2xzLldhcm4oYFVuc3VwcG9ydGVkIG1lZGlhIHR5cGU6ICR7dGV4dHVyZU1pbWVUeXBlfS4gRXhwb3J0aW5nIHRleHR1cmUgYXMgUE5HLmApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBXaWxsIGxhdGVyIGZhbGxiYWNrIHRvIGRlZmF1bHQgbWltZSB0eXBlLCBpbWFnZS9wbmcsIGZyb20gQ2FudmFzIEFQSVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgaW50ZXJuYWxUZXh0dXJlVG9JbWFnZSA9IHRoaXMuX2ludGVybmFsVGV4dHVyZVRvSW1hZ2U7XHJcbiAgICAgICAgICAgIGNvbnN0IGludGVybmFsVGV4dHVyZVVuaXF1ZUlkID0gYmFieWxvblRleHR1cmUuZ2V0SW50ZXJuYWxUZXh0dXJlKCkhLnVuaXF1ZUlkO1xyXG4gICAgICAgICAgICBpbnRlcm5hbFRleHR1cmVUb0ltYWdlW2ludGVybmFsVGV4dHVyZVVuaXF1ZUlkXSB8fD0ge307XHJcbiAgICAgICAgICAgIGxldCBpbWFnZUluZGV4UHJvbWlzZSA9IGludGVybmFsVGV4dHVyZVRvSW1hZ2VbaW50ZXJuYWxUZXh0dXJlVW5pcXVlSWRdW21pbWVUeXBlXTtcclxuICAgICAgICAgICAgaWYgKGltYWdlSW5kZXhQcm9taXNlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNpemUgPSBiYWJ5bG9uVGV4dHVyZS5nZXRTaXplKCk7XHJcbiAgICAgICAgICAgICAgICBpbWFnZUluZGV4UHJvbWlzZSA9IChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuX2dldEltYWdlRGF0YUFzeW5jKHBpeGVscywgc2l6ZS53aWR0aCwgc2l6ZS5oZWlnaHQsIG1pbWVUeXBlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZXhwb3J0SW1hZ2UoYmFieWxvblRleHR1cmUubmFtZSwgbWltZVR5cGUsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSkoKTtcclxuICAgICAgICAgICAgICAgIGludGVybmFsVGV4dHVyZVRvSW1hZ2VbaW50ZXJuYWxUZXh0dXJlVW5pcXVlSWRdW21pbWVUeXBlXSA9IGltYWdlSW5kZXhQcm9taXNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0ZXh0dXJlSW5mbyA9IHRoaXMuX2V4cG9ydFRleHR1cmVJbmZvKGF3YWl0IGltYWdlSW5kZXhQcm9taXNlLCBzYW1wbGVySW5kZXgsIGJhYnlsb25UZXh0dXJlLmNvb3JkaW5hdGVzSW5kZXgpO1xyXG4gICAgICAgICAgICB0aGlzLl90ZXh0dXJlTWFwLnNldChiYWJ5bG9uVGV4dHVyZSwgdGV4dHVyZUluZm8pO1xyXG4gICAgICAgICAgICB0aGlzLl9leHBvcnRlci5fZXh0ZW5zaW9uc1Bvc3RFeHBvcnRUZXh0dXJlcyhcImV4cG9ydGVyXCIsIHRleHR1cmVJbmZvLCBiYWJ5bG9uVGV4dHVyZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGV4dHVyZUluZm87XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZXhwb3J0SW1hZ2UobmFtZTogc3RyaW5nLCBtaW1lVHlwZTogSW1hZ2VNaW1lVHlwZSwgZGF0YTogQXJyYXlCdWZmZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IGltYWdlcyA9IHRoaXMuX2V4cG9ydGVyLl9pbWFnZXM7XHJcblxyXG4gICAgICAgIGxldCBpbWFnZTogSUltYWdlO1xyXG4gICAgICAgIGlmICh0aGlzLl9leHBvcnRlci5fc2hvdWxkVXNlR2xiKSB7XHJcbiAgICAgICAgICAgIGltYWdlID0ge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgICAgIG1pbWVUeXBlOiBtaW1lVHlwZSxcclxuICAgICAgICAgICAgICAgIGJ1ZmZlclZpZXc6IHVuZGVmaW5lZCwgLy8gV2lsbCBiZSB1cGRhdGVkIGxhdGVyIGJ5IEJ1ZmZlck1hbmFnZXJcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc3QgYnVmZmVyVmlldyA9IHRoaXMuX2V4cG9ydGVyLl9idWZmZXJNYW5hZ2VyLmNyZWF0ZUJ1ZmZlclZpZXcobmV3IFVpbnQ4QXJyYXkoZGF0YSkpO1xyXG4gICAgICAgICAgICB0aGlzLl9leHBvcnRlci5fYnVmZmVyTWFuYWdlci5zZXRCdWZmZXJWaWV3KGltYWdlLCBidWZmZXJWaWV3KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBCdWlsZCBhIHVuaXF1ZSBVUklcclxuICAgICAgICAgICAgY29uc3QgYmFzZU5hbWUgPSBuYW1lLnJlcGxhY2UoL1xcLlxcL3xcXC98XFwuXFxcXHxcXFxcL2csIFwiX1wiKTtcclxuICAgICAgICAgICAgY29uc3QgZXh0ZW5zaW9uID0gR2V0RmlsZUV4dGVuc2lvbkZyb21NaW1lVHlwZShtaW1lVHlwZSk7XHJcbiAgICAgICAgICAgIGxldCBmaWxlTmFtZSA9IGJhc2VOYW1lICsgZXh0ZW5zaW9uO1xyXG4gICAgICAgICAgICBpZiAoaW1hZ2VzLnNvbWUoKGltYWdlKSA9PiBpbWFnZS51cmkgPT09IGZpbGVOYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgZmlsZU5hbWUgPSBgJHtiYXNlTmFtZX1fJHtUb29scy5SYW5kb21JZCgpfSR7ZXh0ZW5zaW9ufWA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGltYWdlID0ge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgICAgIHVyaTogZmlsZU5hbWUsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMuX2V4cG9ydGVyLl9pbWFnZURhdGFbZmlsZU5hbWVdID0geyBkYXRhOiBkYXRhLCBtaW1lVHlwZTogbWltZVR5cGUgfTsgLy8gU2F2ZSBpbWFnZSBkYXRhIHRvIGJlIHdyaXR0ZW4gdG8gZmlsZSBsYXRlclxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW1hZ2VzLnB1c2goaW1hZ2UpO1xyXG5cclxuICAgICAgICByZXR1cm4gaW1hZ2VzLmxlbmd0aCAtIDE7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZXhwb3J0VGV4dHVyZUluZm8oaW1hZ2VJbmRleDogbnVtYmVyLCBzYW1wbGVySW5kZXg6IG51bWJlciwgY29vcmRpbmF0ZXNJbmRleD86IG51bWJlcik6IElUZXh0dXJlSW5mbyB7XHJcbiAgICAgICAgY29uc3QgdGV4dHVyZXMgPSB0aGlzLl9leHBvcnRlci5fdGV4dHVyZXM7XHJcbiAgICAgICAgbGV0IHRleHR1cmVJbmRleCA9IHRleHR1cmVzLmZpbmRJbmRleCgodCkgPT4gdC5zYW1wbGVyID09IHNhbXBsZXJJbmRleCAmJiB0LnNvdXJjZSA9PT0gaW1hZ2VJbmRleCk7XHJcbiAgICAgICAgaWYgKHRleHR1cmVJbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgdGV4dHVyZUluZGV4ID0gdGV4dHVyZXMubGVuZ3RoO1xyXG4gICAgICAgICAgICB0ZXh0dXJlcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHNvdXJjZTogaW1hZ2VJbmRleCxcclxuICAgICAgICAgICAgICAgIHNhbXBsZXI6IHNhbXBsZXJJbmRleCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB0ZXh0dXJlSW5mbzogSVRleHR1cmVJbmZvID0geyBpbmRleDogdGV4dHVyZUluZGV4IH07XHJcbiAgICAgICAgaWYgKGNvb3JkaW5hdGVzSW5kZXgpIHtcclxuICAgICAgICAgICAgdGV4dHVyZUluZm8udGV4Q29vcmQgPSBjb29yZGluYXRlc0luZGV4O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGV4dHVyZUluZm87XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZXhwb3J0VGV4dHVyZVNhbXBsZXIodGV4dHVyZTogTnVsbGFibGU8QmFzZVRleHR1cmU+KTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCBzYW1wbGVyID0gdGhpcy5fZ2V0VGV4dHVyZVNhbXBsZXIodGV4dHVyZSk7XHJcblxyXG4gICAgICAgIC8vIGlmIGEgcHJlLWV4aXN0aW5nIHNhbXBsZXIgd2l0aCBpZGVudGljYWwgcGFyYW1ldGVycyBleGlzdHMsIHRoZW4gcmV1c2UgdGhlIHByZXZpb3VzIHNhbXBsZXJcclxuICAgICAgICBjb25zdCBzYW1wbGVycyA9IHRoaXMuX2V4cG9ydGVyLl9zYW1wbGVycztcclxuICAgICAgICBjb25zdCBzYW1wbGVySW5kZXggPSBzYW1wbGVycy5maW5kSW5kZXgoXHJcbiAgICAgICAgICAgIChzKSA9PiBzLm1pbkZpbHRlciA9PT0gc2FtcGxlci5taW5GaWx0ZXIgJiYgcy5tYWdGaWx0ZXIgPT09IHNhbXBsZXIubWFnRmlsdGVyICYmIHMud3JhcFMgPT09IHNhbXBsZXIud3JhcFMgJiYgcy53cmFwVCA9PT0gc2FtcGxlci53cmFwVFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWYgKHNhbXBsZXJJbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNhbXBsZXJJbmRleDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNhbXBsZXJzLnB1c2goc2FtcGxlcik7XHJcbiAgICAgICAgcmV0dXJuIHNhbXBsZXJzLmxlbmd0aCAtIDE7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHR5cGUgeyBJQnVmZmVyVmlldywgSUFjY2Vzc29yIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBBY2Nlc3NvckNvbXBvbmVudFR5cGUsIEFjY2Vzc29yVHlwZSB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHR5cGUgeyBNb3JwaFRhcmdldCB9IGZyb20gXCJjb3JlL01vcnBoL21vcnBoVGFyZ2V0XCI7XHJcbmltcG9ydCB0eXBlIHsgQnVmZmVyTWFuYWdlciB9IGZyb20gXCIuL2J1ZmZlck1hbmFnZXJcIjtcclxuXHJcbmltcG9ydCB7IE5vcm1hbGl6ZVRhbmdlbnQgfSBmcm9tIFwiLi9nbFRGVXRpbGl0aWVzXCI7XHJcbmltcG9ydCB0eXBlIHsgQWJzdHJhY3RNZXNoIH0gZnJvbSBcImNvcmUvTWVzaGVzL2Fic3RyYWN0TWVzaFwiO1xyXG5pbXBvcnQgeyBWZXJ0ZXhCdWZmZXIgfSBmcm9tIFwiY29yZS9CdWZmZXJzL2J1ZmZlclwiO1xyXG5pbXBvcnQgeyBWZWN0b3IzLCBWZWN0b3I0IH0gZnJvbSBcImNvcmUvTWF0aHMvbWF0aC52ZWN0b3JcIjtcclxuaW1wb3J0IHsgVG9vbHMgfSBmcm9tIFwiY29yZS9NaXNjL3Rvb2xzXCI7XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIHRvIHN0b3JlIG1vcnBoIHRhcmdldCBpbmZvcm1hdGlvbi5cclxuICogQGludGVybmFsXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElNb3JwaFRhcmdldERhdGEge1xyXG4gICAgYXR0cmlidXRlczogUmVjb3JkPHN0cmluZywgbnVtYmVyPjtcclxuICAgIGluZmx1ZW5jZTogbnVtYmVyO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQnVpbGRNb3JwaFRhcmdldEJ1ZmZlcnMoXHJcbiAgICBtb3JwaFRhcmdldDogTW9ycGhUYXJnZXQsXHJcbiAgICBtZXNoOiBBYnN0cmFjdE1lc2gsXHJcbiAgICBidWZmZXJNYW5hZ2VyOiBCdWZmZXJNYW5hZ2VyLFxyXG4gICAgYnVmZmVyVmlld3M6IElCdWZmZXJWaWV3W10sXHJcbiAgICBhY2Nlc3NvcnM6IElBY2Nlc3NvcltdLFxyXG4gICAgY29udmVydFRvUmlnaHRIYW5kZWQ6IGJvb2xlYW5cclxuKTogSU1vcnBoVGFyZ2V0RGF0YSB7XHJcbiAgICBjb25zdCByZXN1bHQ6IElNb3JwaFRhcmdldERhdGEgPSB7XHJcbiAgICAgICAgYXR0cmlidXRlczoge30sXHJcbiAgICAgICAgaW5mbHVlbmNlOiBtb3JwaFRhcmdldC5pbmZsdWVuY2UsXHJcbiAgICAgICAgbmFtZTogbW9ycGhUYXJnZXQubmFtZSxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZ2VvbWV0cnkgPSBtZXNoLmdlb21ldHJ5O1xyXG4gICAgaWYgKCFnZW9tZXRyeSkge1xyXG4gICAgICAgIFRvb2xzLldhcm4oXCJBdHRlbXB0ZWQgdG8gZXhwb3J0IG1vcnBoIHRhcmdldCBkYXRhIGZyb20gYSBtZXNoIHdpdGhvdXQgZ2VvbWV0cnkuIFRoaXMgc2hvdWxkIG5vdCBoYXBwZW4uXCIpO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZmxpcFggPSBjb252ZXJ0VG9SaWdodEhhbmRlZCA/IC0xIDogMTtcclxuICAgIGNvbnN0IGZsb2F0U2l6ZSA9IDQ7XHJcbiAgICBjb25zdCBkaWZmZXJlbmNlID0gVmVjdG9yMy5aZXJvKCk7XHJcbiAgICBsZXQgdmVydGV4U3RhcnQgPSAwO1xyXG4gICAgbGV0IHZlcnRleENvdW50ID0gMDtcclxuXHJcbiAgICBpZiAobW9ycGhUYXJnZXQuaGFzUG9zaXRpb25zKSB7XHJcbiAgICAgICAgY29uc3QgbW9ycGhQb3NpdGlvbnMgPSBtb3JwaFRhcmdldC5nZXRQb3NpdGlvbnMoKSE7XHJcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxQb3NpdGlvbnMgPSBnZW9tZXRyeS5nZXRWZXJ0aWNlc0RhdGEoVmVydGV4QnVmZmVyLlBvc2l0aW9uS2luZCk7IC8vIEJ5cGFzc2VzIGFueSBpbnN0YW5jZSBkYXRhIG9mIG1lc2hcclxuXHJcbiAgICAgICAgaWYgKG9yaWdpbmFsUG9zaXRpb25zKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uRGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkob3JpZ2luYWxQb3NpdGlvbnMubGVuZ3RoKTtcclxuICAgICAgICAgICAgY29uc3QgbWluID0gW0luZmluaXR5LCBJbmZpbml0eSwgSW5maW5pdHldO1xyXG4gICAgICAgICAgICBjb25zdCBtYXggPSBbLUluZmluaXR5LCAtSW5maW5pdHksIC1JbmZpbml0eV07XHJcbiAgICAgICAgICAgIHZlcnRleENvdW50ID0gb3JpZ2luYWxQb3NpdGlvbnMubGVuZ3RoIC8gMztcclxuICAgICAgICAgICAgdmVydGV4U3RhcnQgPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gdmVydGV4U3RhcnQ7IGkgPCB2ZXJ0ZXhDb3VudDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvcmlnaW5hbFBvc2l0aW9uID0gVmVjdG9yMy5Gcm9tQXJyYXkob3JpZ2luYWxQb3NpdGlvbnMsIGkgKiAzKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1vcnBoUG9zaXRpb24gPSBWZWN0b3IzLkZyb21BcnJheShtb3JwaFBvc2l0aW9ucywgaSAqIDMpO1xyXG4gICAgICAgICAgICAgICAgbW9ycGhQb3NpdGlvbi5zdWJ0cmFjdFRvUmVmKG9yaWdpbmFsUG9zaXRpb24sIGRpZmZlcmVuY2UpO1xyXG4gICAgICAgICAgICAgICAgZGlmZmVyZW5jZS54ICo9IGZsaXBYO1xyXG5cclxuICAgICAgICAgICAgICAgIG1pblswXSA9IE1hdGgubWluKG1pblswXSwgZGlmZmVyZW5jZS54KTtcclxuICAgICAgICAgICAgICAgIG1heFswXSA9IE1hdGgubWF4KG1heFswXSwgZGlmZmVyZW5jZS54KTtcclxuXHJcbiAgICAgICAgICAgICAgICBtaW5bMV0gPSBNYXRoLm1pbihtaW5bMV0sIGRpZmZlcmVuY2UueSk7XHJcbiAgICAgICAgICAgICAgICBtYXhbMV0gPSBNYXRoLm1heChtYXhbMV0sIGRpZmZlcmVuY2UueSk7XHJcblxyXG4gICAgICAgICAgICAgICAgbWluWzJdID0gTWF0aC5taW4obWluWzJdLCBkaWZmZXJlbmNlLnopO1xyXG4gICAgICAgICAgICAgICAgbWF4WzJdID0gTWF0aC5tYXgobWF4WzJdLCBkaWZmZXJlbmNlLnopO1xyXG5cclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uRGF0YVtpICogM10gPSBkaWZmZXJlbmNlLng7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbkRhdGFbaSAqIDMgKyAxXSA9IGRpZmZlcmVuY2UueTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uRGF0YVtpICogMyArIDJdID0gZGlmZmVyZW5jZS56O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBidWZmZXJWaWV3ID0gYnVmZmVyTWFuYWdlci5jcmVhdGVCdWZmZXJWaWV3KHBvc2l0aW9uRGF0YSwgZmxvYXRTaXplICogMyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGFjY2Vzc29yID0gYnVmZmVyTWFuYWdlci5jcmVhdGVBY2Nlc3NvcihidWZmZXJWaWV3LCBBY2Nlc3NvclR5cGUuVkVDMywgQWNjZXNzb3JDb21wb25lbnRUeXBlLkZMT0FULCBtb3JwaFBvc2l0aW9ucy5sZW5ndGggLyAzLCAwLCB7IG1pbiwgbWF4IH0pO1xyXG4gICAgICAgICAgICBhY2Nlc3NvcnMucHVzaChhY2Nlc3Nvcik7XHJcbiAgICAgICAgICAgIHJlc3VsdC5hdHRyaWJ1dGVzW1wiUE9TSVRJT05cIl0gPSBhY2Nlc3NvcnMubGVuZ3RoIC0gMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBUb29scy5XYXJuKGBNb3JwaCB0YXJnZXQgcG9zaXRpb25zIGZvciBtZXNoICR7bWVzaC5uYW1lfSB3ZXJlIG5vdCBleHBvcnRlZC4gTWVzaCBkb2VzIG5vdCBoYXZlIHBvc2l0aW9uIHZlcnRleCBkYXRhYCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChtb3JwaFRhcmdldC5oYXNOb3JtYWxzKSB7XHJcbiAgICAgICAgY29uc3QgbW9ycGhOb3JtYWxzID0gbW9ycGhUYXJnZXQuZ2V0Tm9ybWFscygpITtcclxuICAgICAgICBjb25zdCBvcmlnaW5hbE5vcm1hbHMgPSBnZW9tZXRyeS5nZXRWZXJ0aWNlc0RhdGEoVmVydGV4QnVmZmVyLk5vcm1hbEtpbmQpO1xyXG5cclxuICAgICAgICBpZiAob3JpZ2luYWxOb3JtYWxzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vcm1hbERhdGEgPSBuZXcgRmxvYXQzMkFycmF5KG9yaWdpbmFsTm9ybWFscy5sZW5ndGgpO1xyXG4gICAgICAgICAgICB2ZXJ0ZXhDb3VudCA9IG9yaWdpbmFsTm9ybWFscy5sZW5ndGggLyAzO1xyXG4gICAgICAgICAgICB2ZXJ0ZXhTdGFydCA9IDA7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSB2ZXJ0ZXhTdGFydDsgaSA8IHZlcnRleENvdW50OyArK2kpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsTm9ybWFsID0gVmVjdG9yMy5Gcm9tQXJyYXkob3JpZ2luYWxOb3JtYWxzLCBpICogMykubm9ybWFsaXplKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtb3JwaE5vcm1hbCA9IFZlY3RvcjMuRnJvbUFycmF5KG1vcnBoTm9ybWFscywgaSAqIDMpLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgICAgICAgICAgbW9ycGhOb3JtYWwuc3VidHJhY3RUb1JlZihvcmlnaW5hbE5vcm1hbCwgZGlmZmVyZW5jZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgbm9ybWFsRGF0YVtpICogM10gPSBkaWZmZXJlbmNlLnggKiBmbGlwWDtcclxuICAgICAgICAgICAgICAgIG5vcm1hbERhdGFbaSAqIDMgKyAxXSA9IGRpZmZlcmVuY2UueTtcclxuICAgICAgICAgICAgICAgIG5vcm1hbERhdGFbaSAqIDMgKyAyXSA9IGRpZmZlcmVuY2UuejtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgYnVmZmVyVmlldyA9IGJ1ZmZlck1hbmFnZXIuY3JlYXRlQnVmZmVyVmlldyhub3JtYWxEYXRhLCBmbG9hdFNpemUgKiAzKTtcclxuICAgICAgICAgICAgY29uc3QgYWNjZXNzb3IgPSBidWZmZXJNYW5hZ2VyLmNyZWF0ZUFjY2Vzc29yKGJ1ZmZlclZpZXcsIEFjY2Vzc29yVHlwZS5WRUMzLCBBY2Nlc3NvckNvbXBvbmVudFR5cGUuRkxPQVQsIG1vcnBoTm9ybWFscy5sZW5ndGggLyAzLCAwKTtcclxuICAgICAgICAgICAgYWNjZXNzb3JzLnB1c2goYWNjZXNzb3IpO1xyXG4gICAgICAgICAgICByZXN1bHQuYXR0cmlidXRlc1tcIk5PUk1BTFwiXSA9IGFjY2Vzc29ycy5sZW5ndGggLSAxO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIFRvb2xzLldhcm4oYE1vcnBoIHRhcmdldCBub3JtYWxzIGZvciBtZXNoICR7bWVzaC5uYW1lfSB3ZXJlIG5vdCBleHBvcnRlZC4gTWVzaCBkb2VzIG5vdCBoYXZlIG5vcm1hbHMgdmVydGV4IGRhdGFgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG1vcnBoVGFyZ2V0Lmhhc1RhbmdlbnRzKSB7XHJcbiAgICAgICAgY29uc3QgbW9ycGhUYW5nZW50cyA9IG1vcnBoVGFyZ2V0LmdldFRhbmdlbnRzKCkhO1xyXG4gICAgICAgIGNvbnN0IG9yaWdpbmFsVGFuZ2VudHMgPSBnZW9tZXRyeS5nZXRWZXJ0aWNlc0RhdGEoVmVydGV4QnVmZmVyLlRhbmdlbnRLaW5kKTtcclxuXHJcbiAgICAgICAgaWYgKG9yaWdpbmFsVGFuZ2VudHMpIHtcclxuICAgICAgICAgICAgdmVydGV4Q291bnQgPSBvcmlnaW5hbFRhbmdlbnRzLmxlbmd0aCAvIDQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhbmdlbnREYXRhID0gbmV3IEZsb2F0MzJBcnJheSh2ZXJ0ZXhDb3VudCAqIDMpO1xyXG4gICAgICAgICAgICB2ZXJ0ZXhTdGFydCA9IDA7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSB2ZXJ0ZXhTdGFydDsgaSA8IHZlcnRleENvdW50OyArK2kpIHtcclxuICAgICAgICAgICAgICAgIC8vIE9ubHkgcmVhZCB0aGUgeCwgeSwgeiBjb21wb25lbnRzIGFuZCBpZ25vcmUgd1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxUYW5nZW50ID0gVmVjdG9yMy5Gcm9tQXJyYXkob3JpZ2luYWxUYW5nZW50cywgaSAqIDQpO1xyXG4gICAgICAgICAgICAgICAgTm9ybWFsaXplVGFuZ2VudChvcmlnaW5hbFRhbmdlbnQpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIE1vcnBoIHRhcmdldCB0YW5nZW50cyBvbWl0IHRoZSB3IGNvbXBvbmVudCBzbyBpdCB3b24ndCBiZSBwcmVzZW50IGluIHRoZSBkYXRhXHJcbiAgICAgICAgICAgICAgICBjb25zdCBtb3JwaFRhbmdlbnQgPSBWZWN0b3IzLkZyb21BcnJheShtb3JwaFRhbmdlbnRzLCBpICogMyk7XHJcbiAgICAgICAgICAgICAgICBOb3JtYWxpemVUYW5nZW50KG1vcnBoVGFuZ2VudCk7XHJcblxyXG4gICAgICAgICAgICAgICAgbW9ycGhUYW5nZW50LnN1YnRyYWN0VG9SZWYob3JpZ2luYWxUYW5nZW50LCBkaWZmZXJlbmNlKTtcclxuICAgICAgICAgICAgICAgIHRhbmdlbnREYXRhW2kgKiAzXSA9IGRpZmZlcmVuY2UueCAqIGZsaXBYO1xyXG4gICAgICAgICAgICAgICAgdGFuZ2VudERhdGFbaSAqIDMgKyAxXSA9IGRpZmZlcmVuY2UueTtcclxuICAgICAgICAgICAgICAgIHRhbmdlbnREYXRhW2kgKiAzICsgMl0gPSBkaWZmZXJlbmNlLno7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgYnVmZmVyVmlldyA9IGJ1ZmZlck1hbmFnZXIuY3JlYXRlQnVmZmVyVmlldyh0YW5nZW50RGF0YSwgZmxvYXRTaXplICogMyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGFjY2Vzc29yID0gYnVmZmVyTWFuYWdlci5jcmVhdGVBY2Nlc3NvcihidWZmZXJWaWV3LCBBY2Nlc3NvclR5cGUuVkVDMywgQWNjZXNzb3JDb21wb25lbnRUeXBlLkZMT0FULCB2ZXJ0ZXhDb3VudCwgMCk7XHJcbiAgICAgICAgICAgIGFjY2Vzc29ycy5wdXNoKGFjY2Vzc29yKTtcclxuICAgICAgICAgICAgcmVzdWx0LmF0dHJpYnV0ZXNbXCJUQU5HRU5UXCJdID0gYWNjZXNzb3JzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgVG9vbHMuV2FybihgTW9ycGggdGFyZ2V0IHRhbmdlbnRzIGZvciBtZXNoICR7bWVzaC5uYW1lfSB3ZXJlIG5vdCBleHBvcnRlZC4gTWVzaCBkb2VzIG5vdCBoYXZlIHRhbmdlbnRzIHZlcnRleCBkYXRhYCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChtb3JwaFRhcmdldC5oYXNDb2xvcnMpIHtcclxuICAgICAgICBjb25zdCBtb3JwaENvbG9ycyA9IG1vcnBoVGFyZ2V0LmdldENvbG9ycygpITtcclxuICAgICAgICBjb25zdCBvcmlnaW5hbENvbG9ycyA9IGdlb21ldHJ5LmdldFZlcnRpY2VzRGF0YShWZXJ0ZXhCdWZmZXIuQ29sb3JLaW5kKTtcclxuICAgICAgICBjb25zdCBidWZmZXIgPSBnZW9tZXRyeS5nZXRWZXJ0ZXhCdWZmZXIoVmVydGV4QnVmZmVyLkNvbG9yS2luZCk7XHJcblxyXG4gICAgICAgIGlmIChvcmlnaW5hbENvbG9ycyAmJiBidWZmZXIpIHtcclxuICAgICAgICAgICAgY29uc3QgY29tcG9uZW50U2l6ZSA9IGJ1ZmZlci5nZXRTaXplKCk7XHJcblxyXG4gICAgICAgICAgICB2ZXJ0ZXhDb3VudCA9IG9yaWdpbmFsQ29sb3JzLmxlbmd0aCAvIGNvbXBvbmVudFNpemU7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yRGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkodmVydGV4Q291bnQgKiBjb21wb25lbnRTaXplKTtcclxuICAgICAgICAgICAgdmVydGV4U3RhcnQgPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gdmVydGV4U3RhcnQ7IGkgPCB2ZXJ0ZXhDb3VudDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29tcG9uZW50U2l6ZSA9PT0gMykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsQ29sb3IgPSBWZWN0b3IzLkZyb21BcnJheShvcmlnaW5hbENvbG9ycywgaSAqIGNvbXBvbmVudFNpemUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vcnBoQ29sb3IgPSBWZWN0b3IzLkZyb21BcnJheShtb3JwaENvbG9ycywgaSAqIGNvbXBvbmVudFNpemUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBtb3JwaENvbG9yLnN1YnRyYWN0VG9SZWYob3JpZ2luYWxDb2xvciwgZGlmZmVyZW5jZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3JEYXRhW2kgKiAzXSA9IGRpZmZlcmVuY2UueDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvckRhdGFbaSAqIDMgKyAxXSA9IGRpZmZlcmVuY2UueTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvckRhdGFbaSAqIDMgKyAyXSA9IGRpZmZlcmVuY2UuejtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29tcG9uZW50U2l6ZSA9PT0gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpZmZlcmVuY2U0ID0gbmV3IFZlY3RvcjQoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcmlnaW5hbENvbG9yID0gVmVjdG9yNC5Gcm9tQXJyYXkob3JpZ2luYWxDb2xvcnMsIGkgKiBjb21wb25lbnRTaXplKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtb3JwaENvbG9yID0gVmVjdG9yNC5Gcm9tQXJyYXkobW9ycGhDb2xvcnMsIGkgKiBjb21wb25lbnRTaXplKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbW9ycGhDb2xvci5zdWJ0cmFjdFRvUmVmKG9yaWdpbmFsQ29sb3IsIGRpZmZlcmVuY2U0KTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvckRhdGFbaSAqIDRdID0gZGlmZmVyZW5jZTQueDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvckRhdGFbaSAqIDQgKyAxXSA9IGRpZmZlcmVuY2U0Lnk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3JEYXRhW2kgKiA0ICsgMl0gPSBkaWZmZXJlbmNlNC56O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yRGF0YVtpICogNCArIDNdID0gZGlmZmVyZW5jZTQudztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgVG9vbHMuV2FybihgVW5zdXBwb3J0ZWQgbnVtYmVyIG9mIGNvbXBvbmVudHMgZm9yIGNvbG9yIGF0dHJpYnV0ZTogJHtjb21wb25lbnRTaXplfWApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGJ1ZmZlclZpZXcgPSBidWZmZXJNYW5hZ2VyLmNyZWF0ZUJ1ZmZlclZpZXcoY29sb3JEYXRhLCBmbG9hdFNpemUgKiBjb21wb25lbnRTaXplKTtcclxuICAgICAgICAgICAgY29uc3QgYWNjZXNzb3IgPSBidWZmZXJNYW5hZ2VyLmNyZWF0ZUFjY2Vzc29yKGJ1ZmZlclZpZXcsIGNvbXBvbmVudFNpemUgPT09IDMgPyBBY2Nlc3NvclR5cGUuVkVDMyA6IEFjY2Vzc29yVHlwZS5WRUM0LCBBY2Nlc3NvckNvbXBvbmVudFR5cGUuRkxPQVQsIHZlcnRleENvdW50LCAwKTtcclxuICAgICAgICAgICAgYWNjZXNzb3JzLnB1c2goYWNjZXNzb3IpO1xyXG4gICAgICAgICAgICByZXN1bHQuYXR0cmlidXRlc1tcIkNPTE9SXzBcIl0gPSBhY2Nlc3NvcnMubGVuZ3RoIC0gMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBUb29scy5XYXJuKGBNb3JwaCB0YXJnZXQgY29sb3JzIGZvciBtZXNoICR7bWVzaC5uYW1lfSB3ZXJlIG5vdCBleHBvcnRlZC4gTWVzaCBkb2VzIG5vdCBoYXZlIGNvbG9ycyB2ZXJ0ZXggZGF0YWApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbiIsImltcG9ydCB0eXBlIHsgTm9kZSB9IGZyb20gXCJjb3JlL25vZGVcIjtcclxuaW1wb3J0IHR5cGUgeyBTY2VuZSB9IGZyb20gXCJjb3JlL3NjZW5lXCI7XHJcbmltcG9ydCB0eXBlIHsgQW5pbWF0aW9uIH0gZnJvbSBcImNvcmUvQW5pbWF0aW9ucy9hbmltYXRpb25cIjtcclxuaW1wb3J0IHR5cGUgeyBHTFRGRGF0YSB9IGZyb20gXCIuL2dsVEZEYXRhXCI7XHJcbmltcG9ydCB7IEdMVEZFeHBvcnRlciB9IGZyb20gXCIuL2dsVEZFeHBvcnRlclwiO1xyXG5cclxuLyoqXHJcbiAqIE1lc2ggY29tcHJlc3Npb24gbWV0aG9kcy5cclxuICovXHJcbmV4cG9ydCB0eXBlIE1lc2hDb21wcmVzc2lvbk1ldGhvZCA9IFwiTm9uZVwiIHwgXCJEcmFjb1wiO1xyXG5cclxuLyoqXHJcbiAqIEhvbGRzIGEgY29sbGVjdGlvbiBvZiBleHBvcnRlciBvcHRpb25zIGFuZCBwYXJhbWV0ZXJzXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElFeHBvcnRPcHRpb25zIHtcclxuICAgIC8qKlxyXG4gICAgICogRnVuY3Rpb24gd2hpY2ggaW5kaWNhdGVzIHdoZXRoZXIgYSBiYWJ5bG9uIG5vZGUgc2hvdWxkIGJlIGV4cG9ydGVkIG9yIG5vdFxyXG4gICAgICogQHBhcmFtIG5vZGUgc291cmNlIEJhYnlsb24gbm9kZS4gSXQgaXMgdXNlZCB0byBjaGVjayB3aGV0aGVyIGl0IHNob3VsZCBiZSBleHBvcnRlZCB0byBnbFRGIG9yIG5vdFxyXG4gICAgICogQHJldHVybnMgYm9vbGVhbiwgd2hpY2ggaW5kaWNhdGVzIHdoZXRoZXIgdGhlIG5vZGUgc2hvdWxkIGJlIGV4cG9ydGVkICh0cnVlKSBvciBub3QgKGZhbHNlKVxyXG4gICAgICovXHJcbiAgICBzaG91bGRFeHBvcnROb2RlPyhub2RlOiBOb2RlKTogYm9vbGVhbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEZ1bmN0aW9uIHdoaWNoIGluZGljYXRlcyB3aGV0aGVyIGFuIGFuaW1hdGlvbiBvbiB0aGUgc2NlbmUgc2hvdWxkIGJlIGV4cG9ydGVkIG9yIG5vdFxyXG4gICAgICogQHBhcmFtIGFuaW1hdGlvbiBzb3VyY2UgYW5pbWF0aW9uXHJcbiAgICAgKiBAcmV0dXJucyBib29sZWFuLCB3aGljaCBpbmRpY2F0ZXMgd2hldGhlciB0aGUgYW5pbWF0aW9uIHNob3VsZCBiZSBleHBvcnRlZCAodHJ1ZSkgb3Igbm90IChmYWxzZSlcclxuICAgICAqL1xyXG4gICAgc2hvdWxkRXhwb3J0QW5pbWF0aW9uPyhhbmltYXRpb246IEFuaW1hdGlvbik6IGJvb2xlYW47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGdW5jdGlvbiB0byBleHRyYWN0IHRoZSBwYXJ0IG9mIHRoZSBzY2VuZSBvciBub2RlJ3MgYG1ldGFkYXRhYCB0aGF0IHdpbGwgcG9wdWxhdGUgdGhlIGNvcnJlc3BvbmRpbmdcclxuICAgICAqIGdsVEYgb2JqZWN0J3MgYGV4dHJhc2AgZmllbGQuIElmIG5vdCBkZWZpbmVkLCBgbm9kZS5tZXRhZGF0YS5nbHRmLmV4dHJhc2Agd2lsbCBiZSB1c2VkLlxyXG4gICAgICogQHBhcmFtIG1ldGFkYXRhIHNvdXJjZSBtZXRhZGF0YSB0byByZWFkIGZyb21cclxuICAgICAqIEByZXR1cm5zIHRoZSBkYXRhIHRvIHN0b3JlIGludG8gdGhlIGdsVEYgZXh0cmFzIGZpZWxkXHJcbiAgICAgKi9cclxuICAgIG1ldGFkYXRhU2VsZWN0b3I/KG1ldGFkYXRhOiBhbnkpOiBhbnk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgc2FtcGxlIHJhdGUgdG8gYmFrZSBhbmltYXRpb24gY3VydmVzLiBEZWZhdWx0cyB0byAxIC8gNjAuXHJcbiAgICAgKi9cclxuICAgIGFuaW1hdGlvblNhbXBsZVJhdGU/OiBudW1iZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBCZWdpbiBzZXJpYWxpemF0aW9uIHdpdGhvdXQgd2FpdGluZyBmb3IgdGhlIHNjZW5lIHRvIGJlIHJlYWR5LiBEZWZhdWx0cyB0byBmYWxzZS5cclxuICAgICAqL1xyXG4gICAgZXhwb3J0V2l0aG91dFdhaXRpbmdGb3JTY2VuZT86IGJvb2xlYW47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbmRpY2F0ZXMgaWYgdW51c2VkIHZlcnRleCB1diBhdHRyaWJ1dGVzIHNob3VsZCBiZSBpbmNsdWRlZCBpbiBleHBvcnQuIERlZmF1bHRzIHRvIGZhbHNlLlxyXG4gICAgICovXHJcbiAgICBleHBvcnRVbnVzZWRVVnM/OiBib29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlIG5vLW9wIHJvb3Qgbm9kZXMgd2hlbiBwb3NzaWJsZS4gRGVmYXVsdHMgdG8gdHJ1ZS5cclxuICAgICAqL1xyXG4gICAgcmVtb3ZlTm9vcFJvb3ROb2Rlcz86IGJvb2xlYW47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbmRpY2F0ZXMgaWYgY29vcmRpbmF0ZSBzeXN0ZW0gc3dhcHBpbmcgcm9vdCBub2RlcyBzaG91bGQgYmUgaW5jbHVkZWQgaW4gZXhwb3J0LiBEZWZhdWx0cyB0byBmYWxzZS5cclxuICAgICAqIEBkZXByZWNhdGVkIFBsZWFzZSB1c2UgcmVtb3ZlTm9vcFJvb3ROb2RlcyBpbnN0ZWFkXHJcbiAgICAgKi9cclxuICAgIGluY2x1ZGVDb29yZGluYXRlU3lzdGVtQ29udmVyc2lvbk5vZGVzPzogYm9vbGVhbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEluZGljYXRlcyB3aGF0IGNvbXByZXNzaW9uIG1ldGhvZCB0byBhcHBseSB0byBtZXNoIGRhdGEuXHJcbiAgICAgKi9cclxuICAgIG1lc2hDb21wcmVzc2lvbk1ldGhvZD86IE1lc2hDb21wcmVzc2lvbk1ldGhvZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIENsYXNzIGZvciBnZW5lcmF0aW5nIGdsVEYgZGF0YSBmcm9tIGEgQmFieWxvbiBzY2VuZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBHTFRGMkV4cG9ydCB7XHJcbiAgICAvKipcclxuICAgICAqIEV4cG9ydHMgdGhlIHNjZW5lIHRvIC5nbHRmIGZpbGUgZm9ybWF0XHJcbiAgICAgKiBAcGFyYW0gc2NlbmUgQmFieWxvbiBzY2VuZVxyXG4gICAgICogQHBhcmFtIGZpbGVOYW1lIE5hbWUgdG8gdXNlIGZvciB0aGUgLmdsdGYgZmlsZVxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgRXhwb3J0ZXIgb3B0aW9uc1xyXG4gICAgICogQHJldHVybnMgUmV0dXJucyB0aGUgZXhwb3J0ZWQgZGF0YVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIEdMVEZBc3luYyhzY2VuZTogU2NlbmUsIGZpbGVOYW1lOiBzdHJpbmcsIG9wdGlvbnM/OiBJRXhwb3J0T3B0aW9ucyk6IFByb21pc2U8R0xURkRhdGE+IHtcclxuICAgICAgICBpZiAoIW9wdGlvbnMgfHwgIW9wdGlvbnMuZXhwb3J0V2l0aG91dFdhaXRpbmdGb3JTY2VuZSkge1xyXG4gICAgICAgICAgICBhd2FpdCBzY2VuZS53aGVuUmVhZHlBc3luYygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZXhwb3J0ZXIgPSBuZXcgR0xURkV4cG9ydGVyKHNjZW5lLCBvcHRpb25zKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZXhwb3J0ZXIuZ2VuZXJhdGVHTFRGQXN5bmMoZmlsZU5hbWUucmVwbGFjZSgvXFwuW14vLl0rJC8sIFwiXCIpKTtcclxuICAgICAgICBleHBvcnRlci5kaXNwb3NlKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRXhwb3J0cyB0aGUgc2NlbmUgdG8gLmdsYiBmaWxlIGZvcm1hdFxyXG4gICAgICogQHBhcmFtIHNjZW5lIEJhYnlsb24gc2NlbmVcclxuICAgICAqIEBwYXJhbSBmaWxlTmFtZSBOYW1lIHRvIHVzZSBmb3IgdGhlIC5nbGIgZmlsZVxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgRXhwb3J0ZXIgb3B0aW9uc1xyXG4gICAgICogQHJldHVybnMgUmV0dXJucyB0aGUgZXhwb3J0ZWQgZGF0YVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIEdMQkFzeW5jKHNjZW5lOiBTY2VuZSwgZmlsZU5hbWU6IHN0cmluZywgb3B0aW9ucz86IElFeHBvcnRPcHRpb25zKTogUHJvbWlzZTxHTFRGRGF0YT4ge1xyXG4gICAgICAgIGlmICghb3B0aW9ucyB8fCAhb3B0aW9ucy5leHBvcnRXaXRob3V0V2FpdGluZ0ZvclNjZW5lKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHNjZW5lLndoZW5SZWFkeUFzeW5jKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBleHBvcnRlciA9IG5ldyBHTFRGRXhwb3J0ZXIoc2NlbmUsIG9wdGlvbnMpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBleHBvcnRlci5nZW5lcmF0ZUdMQkFzeW5jKGZpbGVOYW1lLnJlcGxhY2UoL1xcLlteLy5dKyQvLCBcIlwiKSk7XHJcbiAgICAgICAgZXhwb3J0ZXIuZGlzcG9zZSgpO1xyXG5cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBqc2RvYy9yZXF1aXJlLWpzZG9jICovXHJcblxyXG5pbXBvcnQgdHlwZSB7IElOb2RlIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBBY2Nlc3NvclR5cGUsIE1lc2hQcmltaXRpdmVNb2RlIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgdHlwZSB7IEZsb2F0QXJyYXksIERhdGFBcnJheSwgSW5kaWNlc0FycmF5IH0gZnJvbSBcImNvcmUvdHlwZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBWZWN0b3I0IH0gZnJvbSBcImNvcmUvTWF0aHMvbWF0aC52ZWN0b3JcIjtcclxuaW1wb3J0IHsgUXVhdGVybmlvbiwgVG1wVmVjdG9ycywgTWF0cml4LCBWZWN0b3IzIH0gZnJvbSBcImNvcmUvTWF0aHMvbWF0aC52ZWN0b3JcIjtcclxuaW1wb3J0IHsgVmVydGV4QnVmZmVyIH0gZnJvbSBcImNvcmUvQnVmZmVycy9idWZmZXJcIjtcclxuaW1wb3J0IHsgTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgVHJhbnNmb3JtTm9kZSB9IGZyb20gXCJjb3JlL01lc2hlcy90cmFuc2Zvcm1Ob2RlXCI7XHJcbmltcG9ydCB7IEFic3RyYWN0TWVzaCB9IGZyb20gXCJjb3JlL01lc2hlcy9hYnN0cmFjdE1lc2hcIjtcclxuaW1wb3J0IHsgRW51bWVyYXRlRmxvYXRWYWx1ZXMgfSBmcm9tIFwiY29yZS9CdWZmZXJzL2J1ZmZlclV0aWxzXCI7XHJcbmltcG9ydCB0eXBlIHsgTm9kZSB9IGZyb20gXCJjb3JlL25vZGVcIjtcclxuXHJcbi8vIE1hdHJpeCB0aGF0IGNvbnZlcnRzIGhhbmRlZG5lc3Mgb24gdGhlIFgtYXhpcy4gQ2FuIGNvbnZlcnQgZnJvbSBMSCB0byBSSCBhbmQgdmljZSB2ZXJzYS5cclxuY29uc3QgQ29udmVydEhhbmRlZG5lc3NNYXRyaXggPSBNYXRyaXguQ29tcG9zZShuZXcgVmVjdG9yMygtMSwgMSwgMSksIFF1YXRlcm5pb24uSWRlbnRpdHkoKSwgVmVjdG9yMy5aZXJvKCkpO1xyXG5cclxuLy8gRGVmYXVsdCB2YWx1ZXMgZm9yIGNvbXBhcmlzb24uXHJcbmNvbnN0IEVwc2lsb24gPSAxZS02O1xyXG5jb25zdCBEZWZhdWx0VHJhbnNsYXRpb24gPSBWZWN0b3IzLlplcm8oKTtcclxuY29uc3QgRGVmYXVsdFNjYWxlID0gVmVjdG9yMy5PbmUoKTtcclxuXHJcbi8qKlxyXG4gKiBHZXQgdGhlIGluZm9ybWF0aW9uIG5lY2Vzc2FyeSBmb3IgZW51bWVyYXRpbmcgYSB2ZXJ0ZXggYnVmZmVyLlxyXG4gKiBAcGFyYW0gdmVydGV4QnVmZmVyIHRoZSB2ZXJ0ZXggYnVmZmVyIHRvIGVudW1lcmF0ZVxyXG4gKiBAcGFyYW0gbWVzaGVzIHRoZSBtZXNoZXMgdGhhdCB1c2UgdGhlIHZlcnRleCBidWZmZXJcclxuICogQHJldHVybnMgdGhlIGluZm9ybWF0aW9uIG5lY2Vzc2FyeSB0byBlbnVtZXJhdGUgdGhlIHZlcnRleCBidWZmZXJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBHZXRWZXJ0ZXhCdWZmZXJJbmZvKHZlcnRleEJ1ZmZlcjogVmVydGV4QnVmZmVyLCBtZXNoZXM6IEFic3RyYWN0TWVzaFtdKSB7XHJcbiAgICBjb25zdCB7IGJ5dGVPZmZzZXQsIGJ5dGVTdHJpZGUsIHR5cGUsIG5vcm1hbGl6ZWQgfSA9IHZlcnRleEJ1ZmZlcjtcclxuICAgIGNvbnN0IGNvbXBvbmVudENvdW50ID0gdmVydGV4QnVmZmVyLmdldFNpemUoKTtcclxuICAgIGNvbnN0IHRvdGFsVmVydGljZXMgPSBtZXNoZXMucmVkdWNlKChtYXgsIGN1cnJlbnQpID0+IHtcclxuICAgICAgICByZXR1cm4gY3VycmVudC5nZXRUb3RhbFZlcnRpY2VzKCkgPiBtYXggPyBjdXJyZW50LmdldFRvdGFsVmVydGljZXMoKSA6IG1heDtcclxuICAgIH0sIC1OdW1iZXIuTUFYX1ZBTFVFKTsgLy8gR2V0IHRoZSBtYXggdG90YWwgdmVydGljZXMgY291bnQsIHRvIGVuc3VyZSB3ZSBjYXB0dXJlIHRoZSBmdWxsIHJhbmdlIG9mIHZlcnRleCBkYXRhIHVzZWQgYnkgdGhlIG1lc2hlcy5cclxuICAgIGNvbnN0IGNvdW50ID0gdG90YWxWZXJ0aWNlcyAqIGNvbXBvbmVudENvdW50O1xyXG4gICAgY29uc3Qga2luZCA9IHZlcnRleEJ1ZmZlci5nZXRLaW5kKCk7XHJcblxyXG4gICAgcmV0dXJuIHsgYnl0ZU9mZnNldCwgYnl0ZVN0cmlkZSwgY29tcG9uZW50Q291bnQsIHR5cGUsIGNvdW50LCBub3JtYWxpemVkLCB0b3RhbFZlcnRpY2VzLCBraW5kIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHZXRBY2Nlc3NvckVsZW1lbnRDb3VudChhY2Nlc3NvclR5cGU6IEFjY2Vzc29yVHlwZSk6IG51bWJlciB7XHJcbiAgICBzd2l0Y2ggKGFjY2Vzc29yVHlwZSkge1xyXG4gICAgICAgIGNhc2UgQWNjZXNzb3JUeXBlLk1BVDI6XHJcbiAgICAgICAgICAgIHJldHVybiA0O1xyXG4gICAgICAgIGNhc2UgQWNjZXNzb3JUeXBlLk1BVDM6XHJcbiAgICAgICAgICAgIHJldHVybiA5O1xyXG4gICAgICAgIGNhc2UgQWNjZXNzb3JUeXBlLk1BVDQ6XHJcbiAgICAgICAgICAgIHJldHVybiAxNjtcclxuICAgICAgICBjYXNlIEFjY2Vzc29yVHlwZS5TQ0FMQVI6XHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIGNhc2UgQWNjZXNzb3JUeXBlLlZFQzI6XHJcbiAgICAgICAgICAgIHJldHVybiAyO1xyXG4gICAgICAgIGNhc2UgQWNjZXNzb3JUeXBlLlZFQzM6XHJcbiAgICAgICAgICAgIHJldHVybiAzO1xyXG4gICAgICAgIGNhc2UgQWNjZXNzb3JUeXBlLlZFQzQ6XHJcbiAgICAgICAgICAgIHJldHVybiA0O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRmxvYXRzTmVlZDE2Qml0SW50ZWdlcihmbG9hdEFycmF5OiBGbG9hdEFycmF5KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZmxvYXRBcnJheS5zb21lKCh2YWx1ZSkgPT4gdmFsdWUgPj0gMjU2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIElzU3RhbmRhcmRWZXJ0ZXhBdHRyaWJ1dGUodHlwZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5Qb3NpdGlvbktpbmQ6XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuTm9ybWFsS2luZDpcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5UYW5nZW50S2luZDpcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5Db2xvcktpbmQ6XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuTWF0cmljZXNJbmRpY2VzS2luZDpcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5NYXRyaWNlc0luZGljZXNFeHRyYUtpbmQ6XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuTWF0cmljZXNXZWlnaHRzS2luZDpcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5NYXRyaWNlc1dlaWdodHNFeHRyYUtpbmQ6XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuVVZLaW5kOlxyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLlVWMktpbmQ6XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuVVYzS2luZDpcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5VVjRLaW5kOlxyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLlVWNUtpbmQ6XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuVVY2S2luZDpcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHZXRBY2Nlc3NvclR5cGUoa2luZDogc3RyaW5nLCBoYXNWZXJ0ZXhDb2xvckFscGhhOiBib29sZWFuKTogQWNjZXNzb3JUeXBlIHtcclxuICAgIGlmIChraW5kID09IFZlcnRleEJ1ZmZlci5Db2xvcktpbmQpIHtcclxuICAgICAgICByZXR1cm4gaGFzVmVydGV4Q29sb3JBbHBoYSA/IEFjY2Vzc29yVHlwZS5WRUM0IDogQWNjZXNzb3JUeXBlLlZFQzM7XHJcbiAgICB9XHJcblxyXG4gICAgc3dpdGNoIChraW5kKSB7XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuUG9zaXRpb25LaW5kOlxyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLk5vcm1hbEtpbmQ6XHJcbiAgICAgICAgICAgIHJldHVybiBBY2Nlc3NvclR5cGUuVkVDMztcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5UYW5nZW50S2luZDpcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5NYXRyaWNlc0luZGljZXNLaW5kOlxyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLk1hdHJpY2VzSW5kaWNlc0V4dHJhS2luZDpcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5NYXRyaWNlc1dlaWdodHNLaW5kOlxyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLk1hdHJpY2VzV2VpZ2h0c0V4dHJhS2luZDpcclxuICAgICAgICAgICAgcmV0dXJuIEFjY2Vzc29yVHlwZS5WRUM0O1xyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLlVWS2luZDpcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5VVjJLaW5kOlxyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLlVWM0tpbmQ6XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuVVY0S2luZDpcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5VVjVLaW5kOlxyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLlVWNktpbmQ6XHJcbiAgICAgICAgICAgIHJldHVybiBBY2Nlc3NvclR5cGUuVkVDMjtcclxuICAgIH1cclxuXHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24ga2luZCAke2tpbmR9YCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHZXRBdHRyaWJ1dGVUeXBlKGtpbmQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBzd2l0Y2ggKGtpbmQpIHtcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5Qb3NpdGlvbktpbmQ6XHJcbiAgICAgICAgICAgIHJldHVybiBcIlBPU0lUSU9OXCI7XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuTm9ybWFsS2luZDpcclxuICAgICAgICAgICAgcmV0dXJuIFwiTk9STUFMXCI7XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuVGFuZ2VudEtpbmQ6XHJcbiAgICAgICAgICAgIHJldHVybiBcIlRBTkdFTlRcIjtcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5Db2xvcktpbmQ6XHJcbiAgICAgICAgICAgIHJldHVybiBcIkNPTE9SXzBcIjtcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5VVktpbmQ6XHJcbiAgICAgICAgICAgIHJldHVybiBcIlRFWENPT1JEXzBcIjtcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5VVjJLaW5kOlxyXG4gICAgICAgICAgICByZXR1cm4gXCJURVhDT09SRF8xXCI7XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuVVYzS2luZDpcclxuICAgICAgICAgICAgcmV0dXJuIFwiVEVYQ09PUkRfMlwiO1xyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLlVWNEtpbmQ6XHJcbiAgICAgICAgICAgIHJldHVybiBcIlRFWENPT1JEXzNcIjtcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5VVjVLaW5kOlxyXG4gICAgICAgICAgICByZXR1cm4gXCJURVhDT09SRF80XCI7XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuVVY2S2luZDpcclxuICAgICAgICAgICAgcmV0dXJuIFwiVEVYQ09PUkRfNVwiO1xyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLk1hdHJpY2VzSW5kaWNlc0tpbmQ6XHJcbiAgICAgICAgICAgIHJldHVybiBcIkpPSU5UU18wXCI7XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuTWF0cmljZXNJbmRpY2VzRXh0cmFLaW5kOlxyXG4gICAgICAgICAgICByZXR1cm4gXCJKT0lOVFNfMVwiO1xyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLk1hdHJpY2VzV2VpZ2h0c0tpbmQ6XHJcbiAgICAgICAgICAgIHJldHVybiBcIldFSUdIVFNfMFwiO1xyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLk1hdHJpY2VzV2VpZ2h0c0V4dHJhS2luZDpcclxuICAgICAgICAgICAgcmV0dXJuIFwiV0VJR0hUU18xXCI7XHJcbiAgICB9XHJcblxyXG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGtpbmQ6ICR7a2luZH1gKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdldFByaW1pdGl2ZU1vZGUoZmlsbE1vZGU6IG51bWJlcik6IE1lc2hQcmltaXRpdmVNb2RlIHtcclxuICAgIHN3aXRjaCAoZmlsbE1vZGUpIHtcclxuICAgICAgICBjYXNlIE1hdGVyaWFsLlRyaWFuZ2xlRmlsbE1vZGU6XHJcbiAgICAgICAgICAgIHJldHVybiBNZXNoUHJpbWl0aXZlTW9kZS5UUklBTkdMRVM7XHJcbiAgICAgICAgY2FzZSBNYXRlcmlhbC5UcmlhbmdsZVN0cmlwRHJhd01vZGU6XHJcbiAgICAgICAgICAgIHJldHVybiBNZXNoUHJpbWl0aXZlTW9kZS5UUklBTkdMRV9TVFJJUDtcclxuICAgICAgICBjYXNlIE1hdGVyaWFsLlRyaWFuZ2xlRmFuRHJhd01vZGU6XHJcbiAgICAgICAgICAgIHJldHVybiBNZXNoUHJpbWl0aXZlTW9kZS5UUklBTkdMRV9GQU47XHJcbiAgICAgICAgY2FzZSBNYXRlcmlhbC5Qb2ludExpc3REcmF3TW9kZTpcclxuICAgICAgICBjYXNlIE1hdGVyaWFsLlBvaW50RmlsbE1vZGU6XHJcbiAgICAgICAgICAgIHJldHVybiBNZXNoUHJpbWl0aXZlTW9kZS5QT0lOVFM7XHJcbiAgICAgICAgY2FzZSBNYXRlcmlhbC5MaW5lTG9vcERyYXdNb2RlOlxyXG4gICAgICAgICAgICByZXR1cm4gTWVzaFByaW1pdGl2ZU1vZGUuTElORV9MT09QO1xyXG4gICAgICAgIGNhc2UgTWF0ZXJpYWwuTGluZUxpc3REcmF3TW9kZTpcclxuICAgICAgICAgICAgcmV0dXJuIE1lc2hQcmltaXRpdmVNb2RlLkxJTkVTO1xyXG4gICAgICAgIGNhc2UgTWF0ZXJpYWwuTGluZVN0cmlwRHJhd01vZGU6XHJcbiAgICAgICAgICAgIHJldHVybiBNZXNoUHJpbWl0aXZlTW9kZS5MSU5FX1NUUklQO1xyXG4gICAgfVxyXG5cclxuICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBmaWxsIG1vZGU6ICR7ZmlsbE1vZGV9YCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBJc1RyaWFuZ2xlRmlsbE1vZGUoZmlsbE1vZGU6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgc3dpdGNoIChmaWxsTW9kZSkge1xyXG4gICAgICAgIGNhc2UgTWF0ZXJpYWwuVHJpYW5nbGVGaWxsTW9kZTpcclxuICAgICAgICBjYXNlIE1hdGVyaWFsLlRyaWFuZ2xlU3RyaXBEcmF3TW9kZTpcclxuICAgICAgICBjYXNlIE1hdGVyaWFsLlRyaWFuZ2xlRmFuRHJhd01vZGU6XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE5vcm1hbGl6ZVRhbmdlbnQodGFuZ2VudDogVmVjdG9yNCB8IFZlY3RvcjMpIHtcclxuICAgIGNvbnN0IGxlbmd0aCA9IE1hdGguc3FydCh0YW5nZW50LnggKiB0YW5nZW50LnggKyB0YW5nZW50LnkgKiB0YW5nZW50LnkgKyB0YW5nZW50LnogKiB0YW5nZW50LnopO1xyXG4gICAgaWYgKGxlbmd0aCA+IDApIHtcclxuICAgICAgICB0YW5nZW50LnggLz0gbGVuZ3RoO1xyXG4gICAgICAgIHRhbmdlbnQueSAvPSBsZW5ndGg7XHJcbiAgICAgICAgdGFuZ2VudC56IC89IGxlbmd0aDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENvbnZlcnRUb1JpZ2h0SGFuZGVkUG9zaXRpb24odmFsdWU6IFZlY3RvcjMpOiBWZWN0b3IzIHtcclxuICAgIHZhbHVlLnggKj0gLTE7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cywgaW4tcGxhY2UsIGEgbGVmdC1oYW5kZWQgcXVhdGVybmlvbiB0byBhIHJpZ2h0LWhhbmRlZCBxdWF0ZXJuaW9uIHZpYSBhIGNoYW5nZSBvZiBiYXNpcy5cclxuICogQHBhcmFtIHZhbHVlIHRoZSB1bml0IHF1YXRlcm5pb24gdG8gY29udmVydFxyXG4gKiBAcmV0dXJucyB0aGUgY29udmVydGVkIHF1YXRlcm5pb25cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBDb252ZXJ0VG9SaWdodEhhbmRlZFJvdGF0aW9uKHZhbHVlOiBRdWF0ZXJuaW9uKTogUXVhdGVybmlvbiB7XHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgaXMgdGhlIHNpbXBsaWZpZWQgdmVyc2lvbiBvZiB0aGUgZm9sbG93aW5nIGVxdWF0aW9uOlxyXG4gICAgICogICAgcScgPSB0b19xdWF0ZXJuaW9uKE0gKiB0b19tYXRyaXgocSkgKiBNXi0xKVxyXG4gICAgICogd2hlcmUgTSBpcyB0aGUgY29udmVyc2lvbiBtYXRyaXggYGNvbnZlcnRIYW5kZWRuZXNzTWF0cml4YCxcclxuICAgICAqIHEgaXMgdGhlIGlucHV0IHF1YXRlcm5pb24sIGFuZCBxJyBpcyB0aGUgY29udmVydGVkIHF1YXRlcm5pb24uXHJcbiAgICAgKiBSZWZlcmVuY2U6IGh0dHBzOi8vZDNjdzNkZDJ3MzJ4MmIuY2xvdWRmcm9udC5uZXQvd3AtY29udGVudC91cGxvYWRzLzIwMTUvMDEvbWF0cml4LXRvLXF1YXQucGRmXHJcbiAgICAgKi9cclxuICAgIGlmICh2YWx1ZS54ICogdmFsdWUueCArIHZhbHVlLnkgKiB2YWx1ZS55ID4gMC41KSB7XHJcbiAgICAgICAgY29uc3QgYWJzWCA9IE1hdGguYWJzKHZhbHVlLngpO1xyXG4gICAgICAgIGNvbnN0IGFic1kgPSBNYXRoLmFicyh2YWx1ZS55KTtcclxuICAgICAgICBpZiAoYWJzWCA+IGFic1kpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2lnbiA9IE1hdGguc2lnbih2YWx1ZS54KTtcclxuICAgICAgICAgICAgdmFsdWUueCA9IGFic1g7XHJcbiAgICAgICAgICAgIHZhbHVlLnkgKj0gLXNpZ247XHJcbiAgICAgICAgICAgIHZhbHVlLnogKj0gLXNpZ247XHJcbiAgICAgICAgICAgIHZhbHVlLncgKj0gc2lnbjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBzaWduID0gTWF0aC5zaWduKHZhbHVlLnkpO1xyXG4gICAgICAgICAgICB2YWx1ZS54ICo9IC1zaWduO1xyXG4gICAgICAgICAgICB2YWx1ZS55ID0gYWJzWTtcclxuICAgICAgICAgICAgdmFsdWUueiAqPSBzaWduO1xyXG4gICAgICAgICAgICB2YWx1ZS53ICo9IC1zaWduO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgYWJzWiA9IE1hdGguYWJzKHZhbHVlLnopO1xyXG4gICAgICAgIGNvbnN0IGFic1cgPSBNYXRoLmFicyh2YWx1ZS53KTtcclxuICAgICAgICBpZiAoYWJzWiA+IGFic1cpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2lnbiA9IE1hdGguc2lnbih2YWx1ZS56KTtcclxuICAgICAgICAgICAgdmFsdWUueCAqPSAtc2lnbjtcclxuICAgICAgICAgICAgdmFsdWUueSAqPSBzaWduO1xyXG4gICAgICAgICAgICB2YWx1ZS56ID0gYWJzWjtcclxuICAgICAgICAgICAgdmFsdWUudyAqPSAtc2lnbjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBzaWduID0gTWF0aC5zaWduKHZhbHVlLncpO1xyXG4gICAgICAgICAgICB2YWx1ZS54ICo9IHNpZ247XHJcbiAgICAgICAgICAgIHZhbHVlLnkgKj0gLXNpZ247XHJcbiAgICAgICAgICAgIHZhbHVlLnogKj0gLXNpZ247XHJcbiAgICAgICAgICAgIHZhbHVlLncgPSBhYnNXO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDb252ZXJ0VG9SaWdodEhhbmRlZE5vZGUodmFsdWU6IElOb2RlKSB7XHJcbiAgICBsZXQgdHJhbnNsYXRpb24gPSBWZWN0b3IzLkZyb21BcnJheVRvUmVmKHZhbHVlLnRyYW5zbGF0aW9uIHx8IFswLCAwLCAwXSwgMCwgVG1wVmVjdG9ycy5WZWN0b3IzWzBdKTtcclxuICAgIGxldCByb3RhdGlvbiA9IFF1YXRlcm5pb24uRnJvbUFycmF5VG9SZWYodmFsdWUucm90YXRpb24gfHwgWzAsIDAsIDAsIDFdLCAwLCBUbXBWZWN0b3JzLlF1YXRlcm5pb25bMF0pO1xyXG5cclxuICAgIHRyYW5zbGF0aW9uID0gQ29udmVydFRvUmlnaHRIYW5kZWRQb3NpdGlvbih0cmFuc2xhdGlvbik7XHJcbiAgICByb3RhdGlvbiA9IENvbnZlcnRUb1JpZ2h0SGFuZGVkUm90YXRpb24ocm90YXRpb24pO1xyXG5cclxuICAgIGlmICh0cmFuc2xhdGlvbi5lcXVhbHNXaXRoRXBzaWxvbihEZWZhdWx0VHJhbnNsYXRpb24sIEVwc2lsb24pKSB7XHJcbiAgICAgICAgZGVsZXRlIHZhbHVlLnRyYW5zbGF0aW9uO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB2YWx1ZS50cmFuc2xhdGlvbiA9IHRyYW5zbGF0aW9uLmFzQXJyYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoUXVhdGVybmlvbi5Jc0lkZW50aXR5KHJvdGF0aW9uKSkge1xyXG4gICAgICAgIGRlbGV0ZSB2YWx1ZS5yb3RhdGlvbjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFsdWUucm90YXRpb24gPSByb3RhdGlvbi5hc0FycmF5KCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQcmUtbXVsdGlwbGllcyBhIDE4MC1kZWdyZWUgWSByb3RhdGlvbiB0byB0aGUgcXVhdGVybmlvbiwgaW4gb3JkZXIgdG8gbWF0Y2ggZ2xURidzIGZsaXBwZWQgZm9yd2FyZCBkaXJlY3Rpb24gZm9yIGNhbWVyYXMuXHJcbiAqIEBwYXJhbSByb3RhdGlvbiBUYXJnZXQgY2FtZXJhIHJvdGF0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIENvbnZlcnRDYW1lcmFSb3RhdGlvblRvR0xURihyb3RhdGlvbjogUXVhdGVybmlvbik6IHZvaWQge1xyXG4gICAgLy8gU2ltcGxpZmllZCBmcm9tOiByb3RhdGlvbiAqICgwLCAxLCAwLCAwKS5cclxuICAgIHJvdGF0aW9uLmNvcHlGcm9tRmxvYXRzKC1yb3RhdGlvbi56LCByb3RhdGlvbi53LCByb3RhdGlvbi54LCAtcm90YXRpb24ueSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBSb3RhdGVOb2RlMTgwWShub2RlOiBJTm9kZSk6IHZvaWQge1xyXG4gICAgUXVhdGVybmlvbi5Gcm9tQXJyYXlUb1JlZihub2RlLnJvdGF0aW9uIHx8IFswLCAwLCAwLCAxXSwgMCwgVG1wVmVjdG9ycy5RdWF0ZXJuaW9uWzFdKTtcclxuICAgIENvbnZlcnRDYW1lcmFSb3RhdGlvblRvR0xURihUbXBWZWN0b3JzLlF1YXRlcm5pb25bMV0pO1xyXG4gICAgbm9kZS5yb3RhdGlvbiA9IFRtcFZlY3RvcnMuUXVhdGVybmlvblsxXS5hc0FycmF5KCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb2xsYXBzZXMgR0xURiBwYXJlbnQgYW5kIG5vZGUgaW50byBhIHNpbmdsZSBub2RlLiBUaGlzIGlzIHVzZWZ1bCBmb3IgcmVtb3Zpbmcgbm9kZXMgdGhhdCB3ZXJlIGFkZGVkIGJ5IHRoZSBHTFRGIGltcG9ydGVyLlxyXG4gKiBAcGFyYW0gbm9kZSBUYXJnZXQgcGFyZW50IG5vZGUuXHJcbiAqIEBwYXJhbSBwYXJlbnROb2RlIE9yaWdpbmFsIEdMVEYgbm9kZSAoTGlnaHQgb3IgQ2FtZXJhKS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBDb2xsYXBzZVBhcmVudE5vZGUobm9kZTogSU5vZGUsIHBhcmVudE5vZGU6IElOb2RlKSB7XHJcbiAgICBjb25zdCBwYXJlbnRUcmFuc2xhdGlvbiA9IFZlY3RvcjMuRnJvbUFycmF5VG9SZWYocGFyZW50Tm9kZS50cmFuc2xhdGlvbiB8fCBbMCwgMCwgMF0sIDAsIFRtcFZlY3RvcnMuVmVjdG9yM1swXSk7XHJcbiAgICBjb25zdCBwYXJlbnRSb3RhdGlvbiA9IFF1YXRlcm5pb24uRnJvbUFycmF5VG9SZWYocGFyZW50Tm9kZS5yb3RhdGlvbiB8fCBbMCwgMCwgMCwgMV0sIDAsIFRtcFZlY3RvcnMuUXVhdGVybmlvblswXSk7XHJcbiAgICBjb25zdCBwYXJlbnRTY2FsZSA9IFZlY3RvcjMuRnJvbUFycmF5VG9SZWYocGFyZW50Tm9kZS5zY2FsZSB8fCBbMSwgMSwgMV0sIDAsIFRtcFZlY3RvcnMuVmVjdG9yM1sxXSk7XHJcbiAgICBjb25zdCBwYXJlbnRNYXRyaXggPSBNYXRyaXguQ29tcG9zZVRvUmVmKHBhcmVudFNjYWxlLCBwYXJlbnRSb3RhdGlvbiwgcGFyZW50VHJhbnNsYXRpb24sIFRtcFZlY3RvcnMuTWF0cml4WzBdKTtcclxuXHJcbiAgICBjb25zdCB0cmFuc2xhdGlvbiA9IFZlY3RvcjMuRnJvbUFycmF5VG9SZWYobm9kZS50cmFuc2xhdGlvbiB8fCBbMCwgMCwgMF0sIDAsIFRtcFZlY3RvcnMuVmVjdG9yM1syXSk7XHJcbiAgICBjb25zdCByb3RhdGlvbiA9IFF1YXRlcm5pb24uRnJvbUFycmF5VG9SZWYobm9kZS5yb3RhdGlvbiB8fCBbMCwgMCwgMCwgMV0sIDAsIFRtcFZlY3RvcnMuUXVhdGVybmlvblsxXSk7XHJcbiAgICBjb25zdCBzY2FsZSA9IFZlY3RvcjMuRnJvbUFycmF5VG9SZWYobm9kZS5zY2FsZSB8fCBbMSwgMSwgMV0sIDAsIFRtcFZlY3RvcnMuVmVjdG9yM1sxXSk7XHJcbiAgICBjb25zdCBtYXRyaXggPSBNYXRyaXguQ29tcG9zZVRvUmVmKHNjYWxlLCByb3RhdGlvbiwgdHJhbnNsYXRpb24sIFRtcFZlY3RvcnMuTWF0cml4WzFdKTtcclxuXHJcbiAgICBwYXJlbnRNYXRyaXgubXVsdGlwbHlUb1JlZihtYXRyaXgsIG1hdHJpeCk7XHJcbiAgICBtYXRyaXguZGVjb21wb3NlKHBhcmVudFNjYWxlLCBwYXJlbnRSb3RhdGlvbiwgcGFyZW50VHJhbnNsYXRpb24pO1xyXG5cclxuICAgIGlmIChwYXJlbnRUcmFuc2xhdGlvbi5lcXVhbHNXaXRoRXBzaWxvbihEZWZhdWx0VHJhbnNsYXRpb24sIEVwc2lsb24pKSB7XHJcbiAgICAgICAgZGVsZXRlIHBhcmVudE5vZGUudHJhbnNsYXRpb247XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHBhcmVudE5vZGUudHJhbnNsYXRpb24gPSBwYXJlbnRUcmFuc2xhdGlvbi5hc0FycmF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKFF1YXRlcm5pb24uSXNJZGVudGl0eShwYXJlbnRSb3RhdGlvbikpIHtcclxuICAgICAgICBkZWxldGUgcGFyZW50Tm9kZS5yb3RhdGlvbjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcGFyZW50Tm9kZS5yb3RhdGlvbiA9IHBhcmVudFJvdGF0aW9uLmFzQXJyYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocGFyZW50U2NhbGUuZXF1YWxzV2l0aEVwc2lsb24oRGVmYXVsdFNjYWxlLCBFcHNpbG9uKSkge1xyXG4gICAgICAgIGRlbGV0ZSBwYXJlbnROb2RlLnNjYWxlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBwYXJlbnROb2RlLnNjYWxlID0gcGFyZW50U2NhbGUuYXNBcnJheSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogU29tZXRpbWVzIHRoZSBHTFRGIEltcG9ydGVyIGNhbiBhZGQgZXh0cmEgdHJhbnNmb3JtIG5vZGVzIChmb3IgbGlnaHRzIGFuZCBjYW1lcmFzKS4gVGhpcyBjaGVja3MgaWYgYSBwYXJlbnQgbm9kZSB3YXMgYWRkZWQgYnkgdGhlIEdMVEYgSW1wb3J0ZXIuIElmIHNvLCBpdCBzaG91bGQgYmUgcmVtb3ZlZCBkdXJpbmcgc2VyaWFsaXphdGlvbi5cclxuICogQHBhcmFtIGJhYnlsb25Ob2RlIE9yaWdpbmFsIEdMVEYgbm9kZSAoTGlnaHQgb3IgQ2FtZXJhKS5cclxuICogQHBhcmFtIHBhcmVudEJhYnlsb25Ob2RlIFRhcmdldCBwYXJlbnQgbm9kZS5cclxuICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgcGFyZW50IG5vZGUgd2FzIGFkZGVkIGJ5IHRoZSBHTFRGIGltcG9ydGVyLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIElzUGFyZW50QWRkZWRCeUltcG9ydGVyKGJhYnlsb25Ob2RlOiBOb2RlLCBwYXJlbnRCYWJ5bG9uTm9kZTogTm9kZSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHBhcmVudEJhYnlsb25Ob2RlIGluc3RhbmNlb2YgVHJhbnNmb3JtTm9kZSAmJiBwYXJlbnRCYWJ5bG9uTm9kZS5nZXRDaGlsZHJlbigpLmxlbmd0aCA9PSAxICYmIGJhYnlsb25Ob2RlLmdldENoaWxkcmVuKCkubGVuZ3RoID09IDA7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBJc05vb3BOb2RlKG5vZGU6IE5vZGUsIHVzZVJpZ2h0SGFuZGVkU3lzdGVtOiBib29sZWFuKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIShub2RlIGluc3RhbmNlb2YgVHJhbnNmb3JtTm9kZSkpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVHJhbnNmb3JtXHJcbiAgICBpZiAodXNlUmlnaHRIYW5kZWRTeXN0ZW0pIHtcclxuICAgICAgICBjb25zdCBtYXRyaXggPSBub2RlLmdldFdvcmxkTWF0cml4KCk7XHJcbiAgICAgICAgaWYgKCFtYXRyaXguaXNJZGVudGl0eSgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IG1hdHJpeCA9IG5vZGUuZ2V0V29ybGRNYXRyaXgoKS5tdWx0aXBseVRvUmVmKENvbnZlcnRIYW5kZWRuZXNzTWF0cml4LCBUbXBWZWN0b3JzLk1hdHJpeFswXSk7XHJcbiAgICAgICAgaWYgKCFtYXRyaXguaXNJZGVudGl0eSgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2VvbWV0cnlcclxuICAgIGlmIChub2RlIGluc3RhbmNlb2YgQWJzdHJhY3RNZXNoICYmIG5vZGUuZ2VvbWV0cnkpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBhbiBJbmRpY2VzQXJyYXkgaW50byBlaXRoZXIgVWludDMyQXJyYXkgb3IgVWludDE2QXJyYXksIG9ubHkgY29weWluZyBpZiB0aGUgZGF0YSBpcyBudW1iZXJbXS5cclxuICogQHBhcmFtIGluZGljZXMgaW5wdXQgYXJyYXkgdG8gYmUgY29udmVydGVkXHJcbiAqIEBwYXJhbSBzdGFydCBzdGFydGluZyBpbmRleCB0byBjb3B5IGZyb21cclxuICogQHBhcmFtIGNvdW50IG51bWJlciBvZiBpbmRpY2VzIHRvIGNvcHlcclxuICogQHJldHVybnMgYSBVaW50MzJBcnJheSBvciBVaW50MTZBcnJheVxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBJbmRpY2VzQXJyYXlUb1R5cGVkQXJyYXkoaW5kaWNlczogSW5kaWNlc0FycmF5LCBzdGFydDogbnVtYmVyLCBjb3VudDogbnVtYmVyLCBpczMyQml0czogYm9vbGVhbik6IFVpbnQzMkFycmF5IHwgVWludDE2QXJyYXkge1xyXG4gICAgaWYgKGluZGljZXMgaW5zdGFuY2VvZiBVaW50MTZBcnJheSB8fCBpbmRpY2VzIGluc3RhbmNlb2YgVWludDMyQXJyYXkpIHtcclxuICAgICAgICByZXR1cm4gaW5kaWNlcztcclxuICAgIH1cclxuXHJcbiAgICAvLyBJZiBJbnQzMkFycmF5LCBjYXN0IHRoZSBpbmRpY2VzICh3aGljaCBhcmUgYWxsIHBvc2l0aXZlKSB0byBVaW50MzJBcnJheVxyXG4gICAgaWYgKGluZGljZXMgaW5zdGFuY2VvZiBJbnQzMkFycmF5KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBVaW50MzJBcnJheShpbmRpY2VzLmJ1ZmZlciwgaW5kaWNlcy5ieXRlT2Zmc2V0LCBpbmRpY2VzLmxlbmd0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3ViYXJyYXkgPSBpbmRpY2VzLnNsaWNlKHN0YXJ0LCBzdGFydCArIGNvdW50KTtcclxuICAgIHJldHVybiBpczMyQml0cyA/IG5ldyBVaW50MzJBcnJheShzdWJhcnJheSkgOiBuZXcgVWludDE2QXJyYXkoc3ViYXJyYXkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRGF0YUFycmF5VG9VaW50OEFycmF5KGRhdGE6IERhdGFBcnJheSk6IFVpbnQ4QXJyYXkge1xyXG4gICAgaWYgKGRhdGEgaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgIGNvbnN0IGZsb2F0RGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkoZGF0YSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGZsb2F0RGF0YS5idWZmZXIsIGZsb2F0RGF0YS5ieXRlT2Zmc2V0LCBmbG9hdERhdGEuYnl0ZUxlbmd0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIEFycmF5QnVmZmVyLmlzVmlldyhkYXRhKSA/IG5ldyBVaW50OEFycmF5KGRhdGEuYnVmZmVyLCBkYXRhLmJ5dGVPZmZzZXQsIGRhdGEuYnl0ZUxlbmd0aCkgOiBuZXcgVWludDhBcnJheShkYXRhKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdldE1pbk1heChkYXRhOiBEYXRhQXJyYXksIHZlcnRleEJ1ZmZlcjogVmVydGV4QnVmZmVyLCBzdGFydDogbnVtYmVyLCBjb3VudDogbnVtYmVyKTogeyBtaW46IG51bWJlcltdOyBtYXg6IG51bWJlcltdIH0ge1xyXG4gICAgY29uc3QgeyBieXRlT2Zmc2V0LCBieXRlU3RyaWRlLCB0eXBlLCBub3JtYWxpemVkIH0gPSB2ZXJ0ZXhCdWZmZXI7XHJcbiAgICBjb25zdCBzaXplID0gdmVydGV4QnVmZmVyLmdldFNpemUoKTtcclxuICAgIGNvbnN0IG1pbiA9IG5ldyBBcnJheTxudW1iZXI+KHNpemUpLmZpbGwoSW5maW5pdHkpO1xyXG4gICAgY29uc3QgbWF4ID0gbmV3IEFycmF5PG51bWJlcj4oc2l6ZSkuZmlsbCgtSW5maW5pdHkpO1xyXG4gICAgRW51bWVyYXRlRmxvYXRWYWx1ZXMoZGF0YSwgYnl0ZU9mZnNldCArIHN0YXJ0ICogYnl0ZVN0cmlkZSwgYnl0ZVN0cmlkZSwgc2l6ZSwgdHlwZSwgY291bnQgKiBzaXplLCBub3JtYWxpemVkLCAodmFsdWVzKSA9PiB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcclxuICAgICAgICAgICAgbWluW2ldID0gTWF0aC5taW4obWluW2ldLCB2YWx1ZXNbaV0pO1xyXG4gICAgICAgICAgICBtYXhbaV0gPSBNYXRoLm1heChtYXhbaV0sIHZhbHVlc1tpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHsgbWluLCBtYXggfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlbW92ZXMsIGluLXBsYWNlLCBvYmplY3QgcHJvcGVydGllcyB3aGljaCBoYXZlIHRoZSBzYW1lIHZhbHVlIGFzIHRoZSBkZWZhdWx0IHZhbHVlLlxyXG4gKiBVc2VmdWwgZm9yIGF2b2lkaW5nIHVubmVjZXNzYXJ5IHByb3BlcnRpZXMgaW4gdGhlIGdsVEYgSlNPTi5cclxuICogQHBhcmFtIG9iamVjdCB0aGUgb2JqZWN0IHRvIG9taXQgZGVmYXVsdCB2YWx1ZXMgZnJvbVxyXG4gKiBAcGFyYW0gZGVmYXVsdFZhbHVlcyBhIHBhcnRpYWwgb2JqZWN0IHdpdGggZGVmYXVsdCB2YWx1ZXNcclxuICogQHJldHVybnMgb2JqZWN0IHdpdGggZGVmYXVsdCB2YWx1ZXMgb21pdHRlZFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIE9taXREZWZhdWx0VmFsdWVzPFQgZXh0ZW5kcyBvYmplY3Q+KG9iamVjdDogVCwgZGVmYXVsdFZhbHVlczogUGFydGlhbDxUPik6IFQge1xyXG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMob2JqZWN0KSkge1xyXG4gICAgICAgIGNvbnN0IGRlZmF1bHRWYWx1ZSA9IGRlZmF1bHRWYWx1ZXNba2V5IGFzIGtleW9mIFRdO1xyXG4gICAgICAgIGlmICgoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgQXJyYXkuaXNBcnJheShkZWZhdWx0VmFsdWUpICYmIEFyZUFycmF5c0VxdWFsKHZhbHVlLCBkZWZhdWx0VmFsdWUpKSB8fCB2YWx1ZSA9PT0gZGVmYXVsdFZhbHVlKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBvYmplY3Rba2V5IGFzIGtleW9mIFRdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBvYmplY3Q7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEFyZUFycmF5c0VxdWFsKGFycmF5MTogdW5rbm93bltdLCBhcnJheTI6IHVua25vd25bXSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGFycmF5MS5sZW5ndGggPT09IGFycmF5Mi5sZW5ndGggJiYgYXJyYXkxLmV2ZXJ5KCh2YWwsIGkpID0+IHZhbCA9PT0gYXJyYXkyW2ldKTtcclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8taW50ZXJuYWwtbW9kdWxlcyAqL1xyXG5leHBvcnQgKiBmcm9tIFwiLi9nbFRGRGF0YVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9nbFRGU2VyaWFsaXplclwiO1xyXG5leHBvcnQgeyBfU29sdmVNZXRhbGxpYywgX0NvbnZlcnRUb0dMVEZQQlJNZXRhbGxpY1JvdWdobmVzcyB9IGZyb20gXCIuL2dsVEZNYXRlcmlhbEV4cG9ydGVyXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL0V4dGVuc2lvbnMvaW5kZXhcIjtcclxuIiwiLyoqIEBpbnRlcm5hbCAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdmFyLCBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IHZhciBfX0lHTFRGRXhwb3J0ZXJFeHRlbnNpb24gPSAwOyAvLyBJIGFtIGhlcmUgdG8gYWxsb3cgZHRzIHRvIGJlIGNyZWF0ZWRcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIGV4dGVuZGluZyB0aGUgZXhwb3J0ZXJcclxuICogQGludGVybmFsXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElHTFRGRXhwb3J0ZXJFeHRlbnNpb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGlzIGV4dGVuc2lvblxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBuYW1lOiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyBlbmFibGVkXHJcbiAgICAgKi9cclxuICAgIGVuYWJsZWQ6IGJvb2xlYW47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgcmVxdWlyZWRcclxuICAgICAqL1xyXG4gICAgcmVxdWlyZWQ6IGJvb2xlYW47XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWludGVybmFsLW1vZHVsZXMgKi9cclxuaW1wb3J0ICogYXMgRXhwb3J0ZXJzIGZyb20gXCJzZXJpYWxpemVycy9nbFRGL2dsVEZGaWxlRXhwb3J0ZXJcIjtcclxuaW1wb3J0ICogYXMgRGF0YXMgZnJvbSBcInNlcmlhbGl6ZXJzL2dsVEYvMi4wL2dsVEZEYXRhXCI7XHJcbmltcG9ydCAqIGFzIFNlcmlhbGl6ZXJzIGZyb20gXCJzZXJpYWxpemVycy9nbFRGLzIuMC9nbFRGU2VyaWFsaXplclwiO1xyXG5pbXBvcnQgKiBhcyBFeHRlbnNpb25zIGZyb20gXCJzZXJpYWxpemVycy9nbFRGLzIuMC9FeHRlbnNpb25zL2luZGV4XCI7XHJcbmltcG9ydCAqIGFzIEdMVEYyIGZyb20gXCJzZXJpYWxpemVycy9nbFRGLzIuMC9pbmRleFwiO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgaXMgdGhlIGVudHJ5IHBvaW50IGZvciB0aGUgVU1EIG1vZHVsZS5cclxuICogVGhlIGVudHJ5IHBvaW50IGZvciBhIGZ1dHVyZSBFU00gcGFja2FnZSBzaG91bGQgYmUgaW5kZXgudHNcclxuICovXHJcbmNvbnN0IGdsb2JhbE9iamVjdCA9IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDogdW5kZWZpbmVkO1xyXG5pZiAodHlwZW9mIGdsb2JhbE9iamVjdCAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgKDxhbnk+Z2xvYmFsT2JqZWN0KS5CQUJZTE9OID0gKDxhbnk+Z2xvYmFsT2JqZWN0KS5CQUJZTE9OIHx8IHt9O1xyXG4gICAgY29uc3QgQkFCWUxPTiA9ICg8YW55Pmdsb2JhbE9iamVjdCkuQkFCWUxPTjtcclxuICAgIEJBQllMT04uR0xURjIgPSBCQUJZTE9OLkdMVEYyIHx8IHt9O1xyXG4gICAgQkFCWUxPTi5HTFRGMi5FeHBvcnRlciA9IEJBQllMT04uR0xURjIuRXhwb3J0ZXIgfHwge307XHJcbiAgICBCQUJZTE9OLkdMVEYyLkV4cG9ydGVyLkV4dGVuc2lvbnMgPSBCQUJZTE9OLkdMVEYyLkV4cG9ydGVyLkV4dGVuc2lvbnMgfHwge307XHJcblxyXG4gICAgY29uc3Qga2V5cyA9IFtdO1xyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gRXhwb3J0ZXJzKSB7XHJcbiAgICAgICAgQkFCWUxPTltrZXldID0gKDxhbnk+RXhwb3J0ZXJzKVtrZXldO1xyXG4gICAgICAgIGtleXMucHVzaChrZXkpO1xyXG4gICAgfVxyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gRGF0YXMpIHtcclxuICAgICAgICBCQUJZTE9OW2tleV0gPSAoPGFueT5EYXRhcylba2V5XTtcclxuICAgICAgICBrZXlzLnB1c2goa2V5KTtcclxuICAgIH1cclxuICAgIGZvciAoY29uc3Qga2V5IGluIFNlcmlhbGl6ZXJzKSB7XHJcbiAgICAgICAgQkFCWUxPTltrZXldID0gKDxhbnk+U2VyaWFsaXplcnMpW2tleV07XHJcbiAgICAgICAga2V5cy5wdXNoKGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gRXh0ZW5zaW9ucykge1xyXG4gICAgICAgIEJBQllMT04uR0xURjIuRXhwb3J0ZXIuRXh0ZW5zaW9uc1trZXldID0gKDxhbnk+RXh0ZW5zaW9ucylba2V5XTtcclxuICAgICAgICBrZXlzLnB1c2goa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBHTFRGMikge1xyXG4gICAgICAgIC8vIFByZXZlbnQgUmVhc3NpZ25tZW50LlxyXG4gICAgICAgIGlmIChrZXlzLmluZGV4T2Yoa2V5KSA+IC0xKSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQkFCWUxPTi5HTFRGMi5FeHBvcnRlcltrZXldID0gKDxhbnk+R0xURjIpW2tleV07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCAqIGZyb20gXCJzZXJpYWxpemVycy9nbFRGL2dsVEZGaWxlRXhwb3J0ZXJcIjtcclxuZXhwb3J0ICogZnJvbSBcInNlcmlhbGl6ZXJzL2dsVEYvMi4wL2luZGV4XCI7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9iYWJ5bG9uanNfTWlzY19maWxlVG9vbHNfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCJ2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgPyAob2JqKSA9PiAoT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaikpIDogKG9iaikgPT4gKG9iai5fX3Byb3RvX18pO1xudmFyIGxlYWZQcm90b3R5cGVzO1xuLy8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4vLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbi8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuLy8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4vLyBtb2RlICYgMTY6IHJldHVybiB2YWx1ZSB3aGVuIGl0J3MgUHJvbWlzZS1saWtlXG4vLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuXHRpZihtb2RlICYgMSkgdmFsdWUgPSB0aGlzKHZhbHVlKTtcblx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcblx0aWYodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSkge1xuXHRcdGlmKChtb2RlICYgNCkgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuXHRcdGlmKChtb2RlICYgMTYpICYmIHR5cGVvZiB2YWx1ZS50aGVuID09PSAnZnVuY3Rpb24nKSByZXR1cm4gdmFsdWU7XG5cdH1cblx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcblx0dmFyIGRlZiA9IHt9O1xuXHRsZWFmUHJvdG90eXBlcyA9IGxlYWZQcm90b3R5cGVzIHx8IFtudWxsLCBnZXRQcm90byh7fSksIGdldFByb3RvKFtdKSwgZ2V0UHJvdG8oZ2V0UHJvdG8pXTtcblx0Zm9yKHZhciBjdXJyZW50ID0gbW9kZSAmIDIgJiYgdmFsdWU7IHR5cGVvZiBjdXJyZW50ID09ICdvYmplY3QnICYmICF+bGVhZlByb3RvdHlwZXMuaW5kZXhPZihjdXJyZW50KTsgY3VycmVudCA9IGdldFByb3RvKGN1cnJlbnQpKSB7XG5cdFx0T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoY3VycmVudCkuZm9yRWFjaCgoa2V5KSA9PiAoZGVmW2tleV0gPSAoKSA9PiAodmFsdWVba2V5XSkpKTtcblx0fVxuXHRkZWZbJ2RlZmF1bHQnXSA9ICgpID0+ICh2YWx1ZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChucywgZGVmKTtcblx0cmV0dXJuIG5zO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgKiBhcyBzZXJpYWxpemVycyBmcm9tIFwiQGx0cy9zZXJpYWxpemVycy9sZWdhY3kvbGVnYWN5LWdsVEYyU2VyaWFsaXplclwiO1xyXG5leHBvcnQgeyBzZXJpYWxpemVycyB9O1xyXG5leHBvcnQgZGVmYXVsdCBzZXJpYWxpemVycztcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9