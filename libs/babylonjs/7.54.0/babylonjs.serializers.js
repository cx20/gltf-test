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
/* harmony import */ var babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Materials/material */ "babylonjs/Misc/tools");
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
            var mesh = meshes[j];
            var objectName = mesh.name || "mesh".concat(j, "}");
            output.push("o ".concat(objectName));
            //Uses the position of the item in the scene, to the file (this back to normal in the end)
            var inverseTransform = null;
            if (globalposition) {
                var transform = mesh.computeWorldMatrix(true);
                inverseTransform = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Matrix();
                transform.invertToRef(inverseTransform);
                mesh.bakeTransformIntoVertices(transform);
            }
            //TODO: submeshes (groups)
            //TODO: smoothing groups (s 1, s off);
            if (materials) {
                var mat = mesh.material;
                if (mat) {
                    output.push("usemtl " + mat.id);
                }
            }
            var g = mesh.geometry;
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
            var material = mesh.material || mesh.getScene().defaultMaterial;
            var sideOrientation = material._getEffectiveOrientation(mesh);
            var _a = sideOrientation === babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Material.ClockWiseSideOrientation ? [2, 1] : [1, 2], offset1 = _a[0], offset2 = _a[1];
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
                mesh.bakeTransformIntoVertices(inverseTransform);
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

/***/ "../../../dev/serializers/src/USDZ/index.ts":
/*!**************************************************!*\
  !*** ../../../dev/serializers/src/USDZ/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   USDZExportAsync: () => (/* reexport safe */ _usdzExporter__WEBPACK_IMPORTED_MODULE_0__.USDZExportAsync)
/* harmony export */ });
/* harmony import */ var _usdzExporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./usdzExporter */ "../../../dev/serializers/src/USDZ/usdzExporter.ts");
/* eslint-disable import/no-internal-modules */



/***/ }),

/***/ "../../../dev/serializers/src/USDZ/usdzExporter.ts":
/*!*********************************************************!*\
  !*** ../../../dev/serializers/src/USDZ/usdzExporter.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   USDZExportAsync: () => (/* binding */ USDZExportAsync)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Misc/tools */ "babylonjs/Misc/tools");
/* harmony import */ var babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__);

/* eslint-disable @typescript-eslint/naming-convention */






function BuildHeader() {
    return "#usda 1.0\n    (\n        customLayerData = {\n            string creator = \"Babylon.js USDZExportAsync\"\n        }\n        defaultPrim = \"Root\"\n        metersPerUnit = 1\n        upAxis = \"Y\"\n    )";
}
function BuildSceneStart(options) {
    var alignment = options.includeAnchoringProperties === true
        ? "\n\t\ttoken preliminary:anchoring:type = \"".concat(options.anchoringType, "\"\n\t\ttoken preliminary:planeAnchoring:alignment = \"").concat(options.planeAnchoringAlignment, "\"")
        : "";
    return "def Xform \"Root\"\n    {\n        def Scope \"Scenes\" (\n            kind = \"sceneLibrary\"\n        )\n        {\n            def Xform \"Scene\" (\n                customData = {\n                    bool preliminary_collidesWithEnvironment = 0\n                    string sceneName = \"Scene\"\n                }\n                sceneName = \"Scene\"\n            )\n            {".concat(alignment, "\n            ");
}
function BuildSceneEnd() {
    return "\n            }\n        }\n    }";
}
function BuildMeshVertexCount(geometry) {
    var _a;
    var count = ((_a = geometry.getIndices()) === null || _a === void 0 ? void 0 : _a.length) ? geometry.getTotalIndices() : geometry.getTotalVertices();
    return Array(count / 3)
        .fill(3)
        .join(", ");
}
function BuildMeshVertexIndices(geometry) {
    var index = geometry.getIndices();
    var array = [];
    if (index !== null) {
        for (var i = 0; i < index.length; i++) {
            array.push(index[i]);
        }
    }
    else {
        var length_1 = geometry.getTotalVertices();
        for (var i = 0; i < length_1; i++) {
            array.push(i);
        }
    }
    return array.join(", ");
}
function BuildVector3Array(attribute, options, stride) {
    if (stride === void 0) { stride = 3; }
    var array = [];
    for (var i = 0; i < attribute.length / stride; i++) {
        var x = attribute[i * stride];
        var y = attribute[i * stride + 1];
        var z = attribute[i * stride + 2];
        array.push("(".concat(x.toPrecision(options.precision), ", ").concat(y.toPrecision(options.precision), ", ").concat(z.toPrecision(options.precision), ")"));
    }
    return array.join(", ");
}
function BuildVector2Array(attribute, options) {
    var array = [];
    for (var i = 0; i < attribute.length / 2; i++) {
        var x = attribute[i * 2];
        var y = attribute[i * 2 + 1];
        array.push("(".concat(x.toPrecision(options.precision), ", ").concat((1 - y).toPrecision(options.precision), ")"));
    }
    return array.join(", ");
}
function BuildAdditionalAttributes(geometry, options) {
    var string = "";
    for (var i = 0; i < 4; i++) {
        var id = i > 0 ? i : "";
        var uvAttribute = geometry.getVerticesData(babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UVKind + (id ? id : ""));
        if (uvAttribute) {
            string += "\n\t\ttexCoord2f[] primvars:st".concat(id, " = [").concat(BuildVector2Array(uvAttribute, options), "] (\n\t\t\tinterpolation = \"vertex\"\n\t\t)");
        }
    }
    // vertex colors
    var colorAttribute = geometry.getVerticesData(babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.ColorKind);
    if (colorAttribute) {
        string += "\n\tcolor3f[] primvars:displayColor = [".concat(BuildVector3Array(colorAttribute, options, colorAttribute.length / geometry.getTotalVertices()), "] (\n\t\tinterpolation = \"vertex\"\n\t\t)");
    }
    return string;
}
function BuildMesh(geometry, options) {
    var name = "Geometry";
    var position = geometry.getVerticesData(babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.PositionKind);
    var normal = geometry.getVerticesData(babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.PositionKind);
    if (!position || !normal) {
        return;
    }
    return "\n\tdef Mesh \"".concat(name, "\"\n\t{\n\t\tint[] faceVertexCounts = [").concat(BuildMeshVertexCount(geometry), "]\n\t\tint[] faceVertexIndices = [").concat(BuildMeshVertexIndices(geometry), "]\n\t\tnormal3f[] normals = [").concat(BuildVector3Array(normal, options), "] (\n\t\t\tinterpolation = \"vertex\"\n\t\t)\n\t\tpoint3f[] points = [").concat(BuildVector3Array(position, options), "]\n        ").concat(BuildAdditionalAttributes(geometry, options), "\n\t\tuniform token subdivisionScheme = \"none\"\n\t}\n");
}
function BuildMeshObject(geometry, options) {
    var mesh = BuildMesh(geometry, options);
    return "\n        def \"Geometry\"\n        {\n        ".concat(mesh, "\n        }\n        ");
}
function BuildUSDFileAsString(dataToInsert) {
    var output = BuildHeader();
    output += dataToInsert;
    return fflate.strToU8(output);
}
function BuildMatrix(matrix) {
    var array = matrix.m;
    return "( ".concat(BuildMatrixRow(array, 0), ", ").concat(BuildMatrixRow(array, 4), ", ").concat(BuildMatrixRow(array, 8), ", ").concat(BuildMatrixRow(array, 12), " )");
}
function BuildMatrixRow(array, offset) {
    return "(".concat(array[offset + 0], ", ").concat(array[offset + 1], ", ").concat(array[offset + 2], ", ").concat(array[offset + 3], ")");
}
function BuildXform(mesh) {
    var name = "Object_" + mesh.uniqueId;
    var matrix = mesh.getWorldMatrix().clone();
    if (matrix.determinant() < 0) {
        matrix.multiplyToRef(babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.Matrix.Scaling(-1, 1, 1), matrix);
    }
    var transform = BuildMatrix(matrix);
    return "def Xform \"".concat(name, "\" (\n\tprepend references = @./geometries/Geometry_").concat(mesh.geometry.uniqueId, ".usda@</Geometry>\n\tprepend apiSchemas = [\"MaterialBindingAPI\"]\n)\n{\n\tmatrix4d xformOp:transform = ").concat(transform, "\n\tuniform token[] xformOpOrder = [\"xformOp:transform\"]\t\n\n    rel material:binding = </Materials/Material_").concat(mesh.material.uniqueId, ">\n}\n\n");
}
function BuildMaterials(materials, textureToExports, options) {
    var array = [];
    for (var uuid in materials) {
        var material = materials[uuid];
        array.push(BuildMaterial(material, textureToExports, options));
    }
    return "\n    def \"Materials\"\n{\n".concat(array.join(""), "\n}\n\n");
}
function BuildWrapping(wrapping) {
    switch (wrapping) {
        case babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.Constants.TEXTURE_CLAMP_ADDRESSMODE:
            return "clamp";
        case babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.Constants.TEXTURE_MIRROR_ADDRESSMODE:
            return "mirror";
        case babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.Constants.TEXTURE_WRAP_ADDRESSMODE:
        default:
            return "repeat";
    }
}
function BuildColor4(color) {
    return "(".concat(color.r, ", ").concat(color.g, ", ").concat(color.b, ", 1.0)");
}
function BuildVector2(vector) {
    return "(".concat(vector.x, ", ").concat(vector.y, ")");
}
function BuildColor(color) {
    return "(".concat(color.r, ", ").concat(color.g, ", ").concat(color.b, ")");
}
function BuildTexture(texture, material, mapType, color, textureToExports, options) {
    var id = texture.getInternalTexture().uniqueId + "_" + texture.invertY;
    textureToExports[id] = texture;
    var uv = texture.coordinatesIndex > 0 ? "st" + texture.coordinatesIndex : "st";
    var repeat = new babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.Vector2(texture.uScale, texture.vScale);
    var offset = new babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.Vector2(texture.uOffset, texture.vOffset);
    var rotation = texture.wAng;
    // rotation is around the wrong point. after rotation we need to shift offset again so that we're rotating around the right spot
    var xRotationOffset = Math.sin(rotation);
    var yRotationOffset = Math.cos(rotation);
    // texture coordinates start in the opposite corner, need to correct
    offset.y = 1 - offset.y - repeat.y;
    offset.x += xRotationOffset * repeat.x;
    offset.y += (1 - yRotationOffset) * repeat.y;
    return "\n    def Shader \"PrimvarReader_".concat(mapType, "\"\n    {\n        uniform token info:id = \"UsdPrimvarReader_float2\"\n        float2 inputs:fallback = (0.0, 0.0)\n        token inputs:varname = \"").concat(uv, "\"\n        float2 outputs:result\n    }\n\n    def Shader \"Transform2d_").concat(mapType, "\"\n    {\n        uniform token info:id = \"UsdTransform2d\"\n        token inputs:in.connect = </Materials/Material_").concat(material.uniqueId, "/PrimvarReader_").concat(mapType, ".outputs:result>\n        float inputs:rotation = ").concat((rotation * (180 / Math.PI)).toFixed(options.precision), "\n        float2 inputs:scale = ").concat(BuildVector2(repeat), "\n        float2 inputs:translation = ").concat(BuildVector2(offset), "\n        float2 outputs:result\n    }\n\n    def Shader \"Texture_").concat(texture.uniqueId, "_").concat(mapType, "\"\n    {\n        uniform token info:id = \"UsdUVTexture\"\n        asset inputs:file = @textures/Texture_").concat(id, ".png@\n        float2 inputs:st.connect = </Materials/Material_").concat(material.uniqueId, "/Transform2d_").concat(mapType, ".outputs:result>\n        ").concat(color ? "float4 inputs:scale = " + BuildColor4(color) : "", "\n        token inputs:sourceColorSpace = \"").concat(texture.gammaSpace ? "raw" : "sRGB", "\"\n        token inputs:wrapS = \"").concat(BuildWrapping(texture.wrapU), "\"\n        token inputs:wrapT = \"").concat(BuildWrapping(texture.wrapV), "\"\n        float outputs:r\n        float outputs:g\n        float outputs:b\n        float3 outputs:rgb\n        ").concat(material.needAlphaBlending() ? "float outputs:a" : "", "\n    }");
}
function ExtractTextureInformations(material) {
    var className = material.getClassName();
    switch (className) {
        case "StandardMaterial":
            return {
                diffuseMap: material.diffuseTexture,
                diffuse: material.diffuseColor,
                alphaCutOff: material.alphaCutOff,
                emissiveMap: material.emissiveTexture,
                emissive: material.emissiveColor,
                roughnessMap: null,
                normalMap: null,
                metalnessMap: null,
                roughness: 1,
                metalness: 0,
                aoMap: null,
                aoMapIntensity: 0,
                alphaMap: material.opacityTexture,
                ior: 1,
            };
        case "PBRMaterial":
            return {
                diffuseMap: material.albedoTexture,
                diffuse: material.albedoColor,
                alphaCutOff: material.alphaCutOff,
                emissiveMap: material.emissiveTexture,
                emissive: material.emissiveColor,
                normalMap: material.bumpTexture,
                roughnessMap: material.metallicTexture,
                roughnessChannel: material.useRoughnessFromMetallicTextureAlpha ? "a" : "g",
                roughness: material.roughness || 1,
                metalnessMap: material.metallicTexture,
                metalnessChannel: material.useMetallnessFromMetallicTextureBlue ? "b" : "r",
                metalness: material.metallic || 0,
                aoMap: material.ambientTexture,
                aoMapChannel: material.useAmbientInGrayScale ? "r" : "rgb",
                aoMapIntensity: material.ambientTextureStrength,
                alphaMap: material.opacityTexture,
                ior: material.indexOfRefraction,
            };
        case "PBRMetallicRoughnessMaterial":
            return {
                diffuseMap: material.baseTexture,
                diffuse: material.baseColor,
                alphaCutOff: material.alphaCutOff,
                emissiveMap: material.emissiveTexture,
                emissive: material.emissiveColor,
                normalMap: material.normalTexture,
                roughnessMap: material.metallicTexture,
                roughnessChannel: material.useRoughnessFromMetallicTextureAlpha ? "a" : "g",
                roughness: material.roughness || 1,
                metalnessMap: material.metallicTexture,
                metalnessChannel: material.useMetallnessFromMetallicTextureBlue ? "b" : "r",
                metalness: material.metallic || 0,
                aoMap: material.ambientTexture,
                aoMapChannel: material.useAmbientInGrayScale ? "r" : "rgb",
                aoMapIntensity: material.ambientTextureStrength,
                alphaMap: material.opacityTexture,
                ior: material.indexOfRefraction,
            };
        default:
            return {
                diffuseMap: null,
                diffuse: null,
                emissiveMap: null,
                emissemissiveiveColor: null,
                normalMap: null,
                roughnessMap: null,
                metalnessMap: null,
                alphaCutOff: 0,
                roughness: 0,
                metalness: 0,
                aoMap: null,
                aoMapIntensity: 0,
                alphaMap: null,
                ior: 1,
            };
    }
}
function BuildMaterial(material, textureToExports, options) {
    // https://graphics.pixar.com/usd/docs/UsdPreviewSurface-Proposal.html
    var pad = "			";
    var inputs = [];
    var samplers = [];
    var _a = ExtractTextureInformations(material), diffuseMap = _a.diffuseMap, diffuse = _a.diffuse, alphaCutOff = _a.alphaCutOff, emissiveMap = _a.emissiveMap, emissive = _a.emissive, normalMap = _a.normalMap, roughnessMap = _a.roughnessMap, roughnessChannel = _a.roughnessChannel, roughness = _a.roughness, metalnessMap = _a.metalnessMap, metalnessChannel = _a.metalnessChannel, metalness = _a.metalness, aoMap = _a.aoMap, aoMapChannel = _a.aoMapChannel, aoMapIntensity = _a.aoMapIntensity, alphaMap = _a.alphaMap, ior = _a.ior;
    if (diffuseMap !== null) {
        inputs.push("".concat(pad, "color3f inputs:diffuseColor.connect = </Materials/Material_").concat(material.uniqueId, "/Texture_").concat(diffuseMap.uniqueId, "_diffuse.outputs:rgb>"));
        if (material.needAlphaBlending()) {
            inputs.push("".concat(pad, "float inputs:opacity.connect = </Materials/Material_").concat(material.uniqueId, "/Texture_").concat(diffuseMap.uniqueId, "_diffuse.outputs:a>"));
        }
        else if (material.needAlphaTesting()) {
            inputs.push("".concat(pad, "float inputs:opacity.connect = </Materials/Material_").concat(material.uniqueId, "/Texture_").concat(diffuseMap.uniqueId, "_diffuse.outputs:a>"));
            inputs.push("".concat(pad, "float inputs:opacityThreshold = ").concat(alphaCutOff));
        }
        samplers.push(BuildTexture(diffuseMap, material, "diffuse", diffuse, textureToExports, options));
    }
    else {
        inputs.push("".concat(pad, "color3f inputs:diffuseColor = ").concat(BuildColor(diffuse || babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.Color3.White())));
    }
    if (emissiveMap !== null) {
        inputs.push("".concat(pad, "color3f inputs:emissiveColor.connect = </Materials/Material_").concat(material.uniqueId, "/Texture_").concat(emissiveMap.uniqueId, "_emissive.outputs:rgb>"));
        samplers.push(BuildTexture(emissiveMap, material, "emissive", emissive, textureToExports, options));
    }
    else if (emissive && emissive.toLuminance() > 0) {
        inputs.push("".concat(pad, "color3f inputs:emissiveColor = ").concat(BuildColor(emissive)));
    }
    if (normalMap !== null) {
        inputs.push("".concat(pad, "normal3f inputs:normal.connect = </Materials/Material_").concat(material.uniqueId, "/Texture_").concat(normalMap.uniqueId, "_normal.outputs:rgb>"));
        samplers.push(BuildTexture(normalMap, material, "normal", null, textureToExports, options));
    }
    if (aoMap !== null) {
        inputs.push("".concat(pad, "float inputs:occlusion.connect = </Materials/Material_").concat(material.uniqueId, "/Texture_").concat(aoMap.uniqueId, "_occlusion.outputs:").concat(aoMapChannel, ">"));
        samplers.push(BuildTexture(aoMap, material, "occlusion", new babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.Color3(aoMapIntensity, aoMapIntensity, aoMapIntensity), textureToExports, options));
    }
    if (roughnessMap !== null) {
        inputs.push("".concat(pad, "float inputs:roughness.connect = </Materials/Material_").concat(material.uniqueId, "/Texture_").concat(roughnessMap.uniqueId, "_roughness.outputs:").concat(roughnessChannel, ">"));
        samplers.push(BuildTexture(roughnessMap, material, "roughness", new babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.Color3(roughness, roughness, roughness), textureToExports, options));
    }
    else {
        inputs.push("".concat(pad, "float inputs:roughness = ").concat(roughness));
    }
    if (metalnessMap !== null) {
        inputs.push("".concat(pad, "float inputs:metallic.connect = </Materials/Material_").concat(material.uniqueId, "/Texture_").concat(metalnessMap.uniqueId, "_metallic.outputs:").concat(metalnessChannel, ">"));
        samplers.push(BuildTexture(metalnessMap, material, "metallic", new babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.Color3(metalness, metalness, metalness), textureToExports, options));
    }
    else {
        inputs.push("".concat(pad, "float inputs:metallic = ").concat(metalness));
    }
    if (alphaMap !== null) {
        inputs.push("".concat(pad, "float inputs:opacity.connect = </Materials/Material_").concat(material.uniqueId, "/Texture_").concat(alphaMap.uniqueId, "_opacity.outputs:r>"));
        inputs.push("".concat(pad, "float inputs:opacityThreshold = 0.0001"));
        samplers.push(BuildTexture(alphaMap, material, "opacity", null, textureToExports, options));
    }
    else {
        inputs.push("".concat(pad, "float inputs:opacity = ").concat(material.alpha));
    }
    inputs.push("".concat(pad, "float inputs:ior = ").concat(ior));
    return "\n\tdef Material \"Material_".concat(material.uniqueId, "\"\n\t{\n\t\tdef Shader \"PreviewSurface\"\n\t\t{\n\t\t\tuniform token info:id = \"UsdPreviewSurface\"\n").concat(inputs.join("\n"), "\n\t\t\tint inputs:useSpecularWorkflow = 0\n\t\t\ttoken outputs:surface\n\t\t}\n\n\t\ttoken outputs:surface.connect = </Materials/Material_").concat(material.uniqueId, "/PreviewSurface.outputs:surface>\n\n").concat(samplers.join("\n"), "\n\n\t}\n");
}
function BuildCamera(camera, options) {
    var name = "Camera_" + camera.uniqueId;
    var matrix = babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.Matrix.RotationY(Math.PI).multiply(camera.getWorldMatrix()); // work towards positive z
    var transform = BuildMatrix(matrix);
    if (camera.mode === babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.Constants.ORTHOGRAPHIC_CAMERA) {
        return "def Camera \"".concat(name, "\"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ").concat(transform, "\n\t\t\tuniform token[] xformOpOrder = [\"xformOp:transform\"]\n\n\t\t\tfloat2 clippingRange = (").concat(camera.minZ.toPrecision(options.precision), ", ").concat(camera.maxZ.toPrecision(options.precision), ")\n\t\t\tfloat horizontalAperture = ").concat(((Math.abs(camera.orthoLeft || 1) + Math.abs(camera.orthoRight || 1)) * 10).toPrecision(options.precision), "\n\t\t\tfloat verticalAperture = ").concat(((Math.abs(camera.orthoTop || 1) + Math.abs(camera.orthoBottom || 1)) * 10).toPrecision(options.precision), "\n\t\t\ttoken projection = \"orthographic\"\n\t\t}\n\t\n\t");
    }
    else {
        var aspect = camera.getEngine().getAspectRatio(camera);
        var sensorwidth = options.cameraSensorWidth || 35;
        return "def Camera \"".concat(name, "\"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ").concat(transform, "\n\t\t\tuniform token[] xformOpOrder = [\"xformOp:transform\"]\n\n\t\t\tfloat2 clippingRange = (").concat(camera.minZ.toPrecision(options.precision), ", ").concat(camera.maxZ.toPrecision(options.precision), ")\n\t\t\tfloat focalLength = ").concat((sensorwidth / (2 * Math.tan(camera.fov * 0.5))).toPrecision(options.precision), "\n            token projection = \"perspective\"\n\t\t\tfloat horizontalAperture = ").concat((sensorwidth * aspect).toPrecision(options.precision), "\n\t\t\tfloat verticalAperture = ").concat((sensorwidth / aspect).toPrecision(options.precision), "            \n\t\t}\n\t\n\t");
    }
}
/**
 *
 * @param scene scene to export
 * @param options options to configure the export
 * @param meshPredicate predicate to filter the meshes to export
 * @returns a uint8 array containing the USDZ file
 * @see [Simple sphere](https://playground.babylonjs.com/#H2G5XW#6)
 * @see [Red sphere](https://playground.babylonjs.com/#H2G5XW#7)
 * @see [Boombox](https://playground.babylonjs.com/#5N3RWK#5)
 */
function USDZExportAsync(scene, options, meshPredicate) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function () {
        var localOptions, files, output, materialToExports, _i, _a, abstractMesh, mesh, geometry, material, supportedMaterials, geometryFileName, meshObject, textureToExports, _b, _c, _d, _e, id, texture, size, textureData, fileContent, offset, filename, file, headerSize, offsetMod64, padLength, padding;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__generator)(this, function (_f) {
            switch (_f.label) {
                case 0:
                    localOptions = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({ fflateUrl: "https://unpkg.com/fflate@0.8.2", includeAnchoringProperties: true, anchoringType: "plane", planeAnchoringAlignment: "horizontal", modelFileName: "model.usda", precision: 5, exportCamera: false, cameraSensorWidth: 35 }, options);
                    if (!(typeof fflate === "undefined")) return [3 /*break*/, 2];
                    return [4 /*yield*/, babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.Tools.LoadScriptAsync(localOptions.fflateUrl)];
                case 1:
                    _f.sent();
                    _f.label = 2;
                case 2:
                    files = {};
                    // model file should be first in USDZ archive so we init it here
                    files[localOptions.modelFileName] = null;
                    output = BuildHeader();
                    output += BuildSceneStart(localOptions);
                    materialToExports = {};
                    // Meshes
                    for (_i = 0, _a = scene.meshes; _i < _a.length; _i++) {
                        abstractMesh = _a[_i];
                        if (abstractMesh.getTotalVertices() === 0) {
                            continue;
                        }
                        mesh = abstractMesh;
                        geometry = mesh.geometry;
                        material = mesh.material;
                        if (!material || !geometry || (meshPredicate && !meshPredicate(mesh))) {
                            continue;
                        }
                        supportedMaterials = ["StandardMaterial", "PBRMaterial", "PBRMetallicRoughnessMaterial"];
                        if (supportedMaterials.indexOf(material.getClassName()) !== -1) {
                            geometryFileName = "geometries/Geometry_" + geometry.uniqueId + ".usda";
                            if (!(geometryFileName in files)) {
                                meshObject = BuildMeshObject(geometry, localOptions);
                                files[geometryFileName] = BuildUSDFileAsString(meshObject);
                            }
                            if (!(material.uniqueId in materialToExports)) {
                                materialToExports[material.uniqueId] = material;
                            }
                            output += BuildXform(mesh);
                        }
                        else {
                            babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.Tools.Warn("USDZExportAsync does not support this material type: " + material.getClassName());
                        }
                    }
                    // Camera
                    if (scene.activeCamera && localOptions.exportCamera) {
                        output += BuildCamera(scene.activeCamera, localOptions);
                    }
                    // Close scene
                    output += BuildSceneEnd();
                    textureToExports = {};
                    output += BuildMaterials(materialToExports, textureToExports, localOptions);
                    // Compress
                    files[localOptions.modelFileName] = fflate.strToU8(output);
                    _b = textureToExports;
                    _c = [];
                    for (_d in _b)
                        _c.push(_d);
                    _e = 0;
                    _f.label = 3;
                case 3:
                    if (!(_e < _c.length)) return [3 /*break*/, 7];
                    _d = _c[_e];
                    if (!(_d in _b)) return [3 /*break*/, 6];
                    id = _d;
                    texture = textureToExports[id];
                    size = texture.getSize();
                    return [4 /*yield*/, texture.readPixels()];
                case 4:
                    textureData = _f.sent();
                    if (!textureData) {
                        throw new Error("Texture data is not available");
                    }
                    return [4 /*yield*/, babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.DumpTools.DumpDataAsync(size.width, size.height, textureData, "image/png", undefined, false, true)];
                case 5:
                    fileContent = _f.sent();
                    files["textures/Texture_".concat(id, ".png")] = new Uint8Array(fileContent).slice(); // This is to avoid getting a link and not a copy
                    _f.label = 6;
                case 6:
                    _e++;
                    return [3 /*break*/, 3];
                case 7:
                    offset = 0;
                    for (filename in files) {
                        file = files[filename];
                        if (!file) {
                            continue;
                        }
                        headerSize = 34 + filename.length;
                        offset += headerSize;
                        offsetMod64 = offset & 63;
                        if (offsetMod64 !== 4) {
                            padLength = 64 - offsetMod64;
                            padding = new Uint8Array(padLength);
                            // eslint-disable-next-line @typescript-eslint/naming-convention
                            files[filename] = [file, { extra: { 12345: padding } }];
                        }
                        offset = file.length;
                    }
                    return [2 /*return*/, fflate.zipSync(files, { level: 0 })];
            }
        });
    });
}


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
/* harmony export */   KHR_draco_mesh_compression: () => (/* reexport safe */ _2_0_index__WEBPACK_IMPORTED_MODULE_1__.KHR_draco_mesh_compression),
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
/* harmony export */   _ConvertToGLTFPBRMetallicRoughness: () => (/* reexport safe */ _2_0_index__WEBPACK_IMPORTED_MODULE_1__._ConvertToGLTFPBRMetallicRoughness),
/* harmony export */   _SolveMetallic: () => (/* reexport safe */ _2_0_index__WEBPACK_IMPORTED_MODULE_1__._SolveMetallic),
/* harmony export */   __IGLTFExporterExtension: () => (/* reexport safe */ _glTFFileExporter__WEBPACK_IMPORTED_MODULE_0__.__IGLTFExporterExtension)
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
/* harmony export */   KHR_draco_mesh_compression: () => (/* reexport safe */ _glTF_index__WEBPACK_IMPORTED_MODULE_1__.KHR_draco_mesh_compression),
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
/* harmony export */   USDZExportAsync: () => (/* reexport safe */ _USDZ_index__WEBPACK_IMPORTED_MODULE_3__.USDZExportAsync),
/* harmony export */   _ConvertToGLTFPBRMetallicRoughness: () => (/* reexport safe */ _glTF_index__WEBPACK_IMPORTED_MODULE_1__._ConvertToGLTFPBRMetallicRoughness),
/* harmony export */   _SolveMetallic: () => (/* reexport safe */ _glTF_index__WEBPACK_IMPORTED_MODULE_1__._SolveMetallic),
/* harmony export */   __IGLTFExporterExtension: () => (/* reexport safe */ _glTF_index__WEBPACK_IMPORTED_MODULE_1__.__IGLTFExporterExtension)
/* harmony export */ });
/* harmony import */ var _OBJ_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OBJ/index */ "../../../dev/serializers/src/OBJ/index.ts");
/* harmony import */ var _glTF_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./glTF/index */ "../../../dev/serializers/src/glTF/index.ts");
/* harmony import */ var _stl_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stl/index */ "../../../dev/serializers/src/stl/index.ts");
/* harmony import */ var _USDZ_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./USDZ/index */ "../../../dev/serializers/src/USDZ/index.ts");
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
/* harmony import */ var babylonjs_Meshes_mesh__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Maths/math.vector */ "babylonjs/Misc/tools");
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

/***/ "../../../lts/serializers/src/legacy/legacy-usdzSerializer.ts":
/*!********************************************************************!*\
  !*** ../../../lts/serializers/src/legacy/legacy-usdzSerializer.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   USDZExportAsync: () => (/* reexport safe */ serializers_USDZ_index__WEBPACK_IMPORTED_MODULE_0__.USDZExportAsync)
/* harmony export */ });
/* harmony import */ var serializers_USDZ_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! serializers/USDZ/index */ "../../../dev/serializers/src/USDZ/index.ts");
/* eslint-disable import/no-internal-modules */

/**
 * This is the entry point for the UMD module.
 * The entry point for a future ESM package should be index.ts
 */
var globalObject = typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : typeof window !== "undefined" ? window : undefined;
if (typeof globalObject !== "undefined") {
    for (var serializer in serializers_USDZ_index__WEBPACK_IMPORTED_MODULE_0__) {
        globalObject.BABYLON[serializer] = serializers_USDZ_index__WEBPACK_IMPORTED_MODULE_0__[serializer];
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
/* harmony export */   KHR_draco_mesh_compression: () => (/* reexport safe */ _legacy_glTF2Serializer__WEBPACK_IMPORTED_MODULE_1__.KHR_draco_mesh_compression),
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
/* harmony export */   USDZExportAsync: () => (/* reexport safe */ _legacy_usdzSerializer__WEBPACK_IMPORTED_MODULE_4__.USDZExportAsync),
/* harmony export */   _ConvertToGLTFPBRMetallicRoughness: () => (/* reexport safe */ _legacy_glTF2Serializer__WEBPACK_IMPORTED_MODULE_1__._ConvertToGLTFPBRMetallicRoughness),
/* harmony export */   _SolveMetallic: () => (/* reexport safe */ _legacy_glTF2Serializer__WEBPACK_IMPORTED_MODULE_1__._SolveMetallic),
/* harmony export */   __IGLTFExporterExtension: () => (/* reexport safe */ _legacy_glTF2Serializer__WEBPACK_IMPORTED_MODULE_1__.__IGLTFExporterExtension)
/* harmony export */ });
/* harmony import */ var serializers_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! serializers/index */ "../../../dev/serializers/src/index.ts");
/* harmony import */ var _legacy_glTF2Serializer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./legacy-glTF2Serializer */ "../../../lts/serializers/src/legacy/legacy-glTF2Serializer.ts");
/* harmony import */ var _legacy_objSerializer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./legacy-objSerializer */ "../../../lts/serializers/src/legacy/legacy-objSerializer.ts");
/* harmony import */ var _legacy_stlSerializer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./legacy-stlSerializer */ "../../../lts/serializers/src/legacy/legacy-stlSerializer.ts");
/* harmony import */ var _legacy_usdzSerializer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./legacy-usdzSerializer */ "../../../lts/serializers/src/legacy/legacy-usdzSerializer.ts");
/* eslint-disable import/export */
/* eslint-disable import/no-internal-modules */







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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFieWxvbmpzLnNlcmlhbGl6ZXJzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDaFpBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0NBO0FBQ0E7QUFJQTtBQUVBOztBQUVBO0FBQ0E7QUFBQTtBQThMQTtBQTdMQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUVBOzs7O0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pNQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTtBQUVBO0FBT0E7QUFDQTtBQUdBO0FBQ0E7QUFrREE7QUFDQTtBQVNBO0FBRUE7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQWVBO0FBRUE7QUFDQTtBQUlBO0FBRUE7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQWFBO0FBRUE7QUFDQTtBQUNBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBWUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBUUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQWtDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBb0JBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFpQkE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFZQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBYUE7QUFDQTtBQUVBOzs7Ozs7Ozs7QUFTQTtBQUNBOzs7Ozs7QUFDQTtBQWFBO0FBQ0E7O0FBQUE7OztBQUlBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTs7Ozs7Ozs7Ozs7QUFDQTtBQUVBO0FBQ0E7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFBQTtBQUVBOzs7Ozs7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3B0QkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBY0E7QUFiQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUdBO0FBQ0E7QUFFQTtBQUdBO0FBREE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBRUE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFBQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEpBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQTBCQTtBQUNBO0FBMUJBO0FBQ0E7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFTQTtBQUNBO0FBUEE7QUFEQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFPQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFXQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hMQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFlQTs7QUFFQTtBQUNBO0FBakJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQVdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBREE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pMQTtBQUVBO0FBR0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFjQTtBQWJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBR0E7QUFDQTtBQUVBO0FBR0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRkE7QUFFQTtBQUdBO0FBRUE7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFjQTtBQWJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBR0E7QUFDQTtBQUVBO0FBR0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNHQTtBQUVBO0FBRUE7QUFHQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQWNBO0FBYkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFHQTtBQUNBO0FBRUE7QUFHQTtBQURBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQUE7QUFDQTs7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakpBO0FBRUE7QUFFQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFZQTtBQUNBO0FBWkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFHQTtBQUVBO0FBQ0E7QUFHQTtBQURBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUVBO0FBRUE7QUFHQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUE2Q0E7QUEzQ0E7QUFDQTtBQUdBO0FBREE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRUE7QUFFQTtBQUVBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBWUE7QUFYQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUdBO0FBREE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRUE7QUFFQTtBQUdBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBY0E7QUFiQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUdBO0FBQ0E7QUFFQTtBQUdBO0FBREE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RkE7QUFFQTtBQUdBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBY0E7QUFiQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFFQTtBQUdBO0FBREE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRkE7QUFFQTtBQUdBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBY0E7QUFiQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUFBO0FBQ0E7O0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEhBO0FBRUE7QUFFQTtBQUVBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBY0E7QUFiQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7Ozs7OztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTs7O0FBSUE7QUFDQTs7QUFHQTs7OztBQUNBO0FBQ0E7QUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkhBO0FBRUE7QUFDQTtBQUVBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBWUE7QUFYQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBR0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFFQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6REE7QUFFQTtBQUVBO0FBRUE7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFjQTtBQWJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBR0E7QUFDQTtBQUVBO0FBR0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUFBO0FBQ0E7O0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2SEE7QUFHQTtBQUVBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFhQTtBQVpBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBR0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQVFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQW9KQTtBQWxKQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUFBO0FBQ0E7QUFDQTs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBS0E7QUFDQTtBQUVBO0FBaURBOzs7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUFBO0FBay9CQTtBQWovQkE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFhQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQWFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7QUFZQTtBQUNBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7OztBQVlBO0FBQ0E7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7QUFXQTtBQUNBOztBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7QUE5REE7QUFBQTtBQStEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBOUlBO0FBQUE7QUFBQTtBQStJQTtBQUNBO0FBQ0E7QUFFQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQWVBO0FBQ0E7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQVdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7O0FBUUE7QUFDQTtBQVFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7OztBQVFBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeGtDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFtQkE7QUFkQTtBQUhBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFHQTtBQUVBO0FBQ0E7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFxQkE7QUFwQkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBV0E7QUFDQTtBQVRBO0FBQ0E7QUFDQTtBQVNBOztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFvTEE7QUFBQTtBQW5MQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQVNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQW9JQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBYUE7QUFDQTtBQW5KQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFDQTs7O0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTs7QUFBQTs7O0FBSkE7Ozs7OztBQU9BO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBOzs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7QUFDQTs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFDQTtBQUVBOzs7O0FBQ0E7O0FBQUE7QUFDQTs7QUFBQTtBQUNBOzs7O0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7QUFDQTtBQUNBOztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBOztBQUVBO0FBRUE7QUFFQTs7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBaEVBO0FBQUE7QUFBQTtBQWlFQTtBQUNBO0FBRUE7Ozs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOztBQUFBOztBQUFBO0FBQ0E7QUFDQTs7QUFBQTs7QUFBQTtBQUNBO0FBQ0E7O0FBQUE7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQVdBOzs7OztBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7QUFDQTtBQUVBO0FBRUE7OztBQUFBO0FBQUE7QUFDQTs7QUFBQTs7O0FBREE7O0FBSUE7Ozs7QUFDQTtBQUVBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7O0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQTNEQTtBQUNBO0FBQUE7QUFBQTtBQTJEQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFFQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQXBKQTtBQUFBO0FBQUE7QUFxSkE7QUFFQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFhQTtBQUNBO0FBYUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7OztBQUFBO0FBQUE7QUFDQTs7QUFBQTs7O0FBREE7OztBQUlBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUVBOzs7QUFHQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFBQTs7O0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFDQTtBQUVBO0FBV0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFTQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUFBOzs7QUFDQTtBQUNBOztBQUFBOzs7QUFFQTtBQUNBOztBQUdBOzs7QUFHQTs7Ozs7QUFDQTtBQUVBOzs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7OztBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7OztBQUVBO0FBQ0E7O0FBREE7QUFDQTs7O0FBSUE7QUFFQTtBQUVBO0FBWUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBMUVBOzs7QUE4RUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFDQTtBQW52Q0E7QUFDQTtBQW12Q0E7QUFBQTtBQXZ5Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeE5BOztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUtBO0FBQ0E7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFPQTtBQUFBO0FBTkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBOztBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7O0FBQUE7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFDQTtBQUVBOzs7Ozs7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFBQTtBQUVBOztBQUFBOzs7OztBQUNBO0FBRUE7Ozs7OztBQUNBO0FBRUE7QUFDQTtBQUdBO0FBRUE7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7O0FBQUE7QUFDQTs7QUFBQTtBQUVBOztBQUFBO0FBRUE7QUFBQTs7OztBQUNBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7QUFTQTtBQUNBOzs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBQUE7QUFDQTs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUVBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7OztBQU9BO0FBQ0E7Ozs7OztBQU1BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFBQTs7QUFHQTs7OztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7OztBQU9BO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTs7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7QUFFQTtBQUVBOzs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUFBOztBQUNBOztBQUFBOzs7QUFGQTtBQUlBOztBQUFBO0FBQ0E7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFDQTtBQUVBOzs7Ozs7QUFRQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7O0FBQUE7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFFQTs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUNBOztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7O0FBQUE7QUFDQTtBQUNBOztBQUdBOzs7O0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzU5QkE7QUFFQTtBQUNBO0FBQ0E7QUFZQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkxBO0FBZ0VBOztBQUVBO0FBQ0E7QUFBQTtBQXNDQTtBQXJDQTs7Ozs7O0FBTUE7QUFDQTs7Ozs7O0FBQ0E7QUFDQTs7QUFBQTs7O0FBR0E7QUFDQTs7QUFBQTtBQUNBO0FBRUE7Ozs7QUFDQTtBQUVBOzs7Ozs7QUFNQTtBQUNBOzs7Ozs7QUFDQTtBQUNBOztBQUFBOzs7QUFHQTtBQUNBOztBQUFBO0FBQ0E7QUFFQTs7OztBQUNBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdHQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFBQTtBQW1KQTtBQWxKQTs7Ozs7Ozs7Ozs7QUFXQTtBQUNBO0FBVUE7QUFSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2pEQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNOQTs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYubWpzIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2Rldi9zZXJpYWxpemVycy9zcmMvT0JKL2luZGV4LnRzIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2Rldi9zZXJpYWxpemVycy9zcmMvT0JKL29ialNlcmlhbGl6ZXIudHMiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvLi4vLi4vLi4vZGV2L3NlcmlhbGl6ZXJzL3NyYy9VU0RaL2luZGV4LnRzIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2Rldi9zZXJpYWxpemVycy9zcmMvVVNEWi91c2R6RXhwb3J0ZXIudHMiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvLi4vLi4vLi4vZGV2L3NlcmlhbGl6ZXJzL3NyYy9nbFRGLzIuMC9FeHRlbnNpb25zL0VYVF9tZXNoX2dwdV9pbnN0YW5jaW5nLnRzIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2Rldi9zZXJpYWxpemVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9LSFJfZHJhY29fbWVzaF9jb21wcmVzc2lvbi50cyIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy8uLi8uLi8uLi9kZXYvc2VyaWFsaXplcnMvc3JjL2dsVEYvMi4wL0V4dGVuc2lvbnMvS0hSX2xpZ2h0c19wdW5jdHVhbC50cyIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy8uLi8uLi8uLi9kZXYvc2VyaWFsaXplcnMvc3JjL2dsVEYvMi4wL0V4dGVuc2lvbnMvS0hSX21hdGVyaWFsc19hbmlzb3Ryb3B5LnRzIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2Rldi9zZXJpYWxpemVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9LSFJfbWF0ZXJpYWxzX2NsZWFyY29hdC50cyIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy8uLi8uLi8uLi9kZXYvc2VyaWFsaXplcnMvc3JjL2dsVEYvMi4wL0V4dGVuc2lvbnMvS0hSX21hdGVyaWFsc19kaWZmdXNlX3RyYW5zbWlzc2lvbi50cyIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy8uLi8uLi8uLi9kZXYvc2VyaWFsaXplcnMvc3JjL2dsVEYvMi4wL0V4dGVuc2lvbnMvS0hSX21hdGVyaWFsc19kaXNwZXJzaW9uLnRzIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2Rldi9zZXJpYWxpemVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9LSFJfbWF0ZXJpYWxzX2VtaXNzaXZlX3N0cmVuZ3RoLnRzIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2Rldi9zZXJpYWxpemVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9LSFJfbWF0ZXJpYWxzX2lvci50cyIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy8uLi8uLi8uLi9kZXYvc2VyaWFsaXplcnMvc3JjL2dsVEYvMi4wL0V4dGVuc2lvbnMvS0hSX21hdGVyaWFsc19pcmlkZXNjZW5jZS50cyIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy8uLi8uLi8uLi9kZXYvc2VyaWFsaXplcnMvc3JjL2dsVEYvMi4wL0V4dGVuc2lvbnMvS0hSX21hdGVyaWFsc19zaGVlbi50cyIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy8uLi8uLi8uLi9kZXYvc2VyaWFsaXplcnMvc3JjL2dsVEYvMi4wL0V4dGVuc2lvbnMvS0hSX21hdGVyaWFsc19zcGVjdWxhci50cyIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy8uLi8uLi8uLi9kZXYvc2VyaWFsaXplcnMvc3JjL2dsVEYvMi4wL0V4dGVuc2lvbnMvS0hSX21hdGVyaWFsc190cmFuc21pc3Npb24udHMiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvLi4vLi4vLi4vZGV2L3NlcmlhbGl6ZXJzL3NyYy9nbFRGLzIuMC9FeHRlbnNpb25zL0tIUl9tYXRlcmlhbHNfdW5saXQudHMiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvLi4vLi4vLi4vZGV2L3NlcmlhbGl6ZXJzL3NyYy9nbFRGLzIuMC9FeHRlbnNpb25zL0tIUl9tYXRlcmlhbHNfdm9sdW1lLnRzIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2Rldi9zZXJpYWxpemVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9LSFJfdGV4dHVyZV90cmFuc2Zvcm0udHMiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvLi4vLi4vLi4vZGV2L3NlcmlhbGl6ZXJzL3NyYy9nbFRGLzIuMC9FeHRlbnNpb25zL2luZGV4LnRzIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2Rldi9zZXJpYWxpemVycy9zcmMvZ2xURi8yLjAvYnVmZmVyTWFuYWdlci50cyIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy8uLi8uLi8uLi9kZXYvc2VyaWFsaXplcnMvc3JjL2dsVEYvMi4wL2RhdGFXcml0ZXIudHMiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvLi4vLi4vLi4vZGV2L3NlcmlhbGl6ZXJzL3NyYy9nbFRGLzIuMC9nbFRGQW5pbWF0aW9uLnRzIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2Rldi9zZXJpYWxpemVycy9zcmMvZ2xURi8yLjAvZ2xURkRhdGEudHMiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvLi4vLi4vLi4vZGV2L3NlcmlhbGl6ZXJzL3NyYy9nbFRGLzIuMC9nbFRGRXhwb3J0ZXIudHMiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvLi4vLi4vLi4vZGV2L3NlcmlhbGl6ZXJzL3NyYy9nbFRGLzIuMC9nbFRGTWF0ZXJpYWxFeHBvcnRlci50cyIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy8uLi8uLi8uLi9kZXYvc2VyaWFsaXplcnMvc3JjL2dsVEYvMi4wL2dsVEZNb3JwaFRhcmdldHNVdGlsaXRpZXMudHMiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvLi4vLi4vLi4vZGV2L3NlcmlhbGl6ZXJzL3NyYy9nbFRGLzIuMC9nbFRGU2VyaWFsaXplci50cyIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy8uLi8uLi8uLi9kZXYvc2VyaWFsaXplcnMvc3JjL2dsVEYvMi4wL2dsVEZVdGlsaXRpZXMudHMiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvLi4vLi4vLi4vZGV2L3NlcmlhbGl6ZXJzL3NyYy9nbFRGLzIuMC9pbmRleC50cyIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy8uLi8uLi8uLi9kZXYvc2VyaWFsaXplcnMvc3JjL2dsVEYvZ2xURkZpbGVFeHBvcnRlci50cyIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy8uLi8uLi8uLi9kZXYvc2VyaWFsaXplcnMvc3JjL2dsVEYvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvLi4vLi4vLi4vZGV2L3NlcmlhbGl6ZXJzL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy8uLi8uLi8uLi9kZXYvc2VyaWFsaXplcnMvc3JjL3N0bC9pbmRleC50cyIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy8uLi8uLi8uLi9kZXYvc2VyaWFsaXplcnMvc3JjL3N0bC9zdGxTZXJpYWxpemVyLnRzIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2x0cy9zZXJpYWxpemVycy9zcmMvbGVnYWN5L2xlZ2FjeS1nbFRGMlNlcmlhbGl6ZXIudHMiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvLi4vLi4vLi4vbHRzL3NlcmlhbGl6ZXJzL3NyYy9sZWdhY3kvbGVnYWN5LW9ialNlcmlhbGl6ZXIudHMiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvLi4vLi4vLi4vbHRzL3NlcmlhbGl6ZXJzL3NyYy9sZWdhY3kvbGVnYWN5LXN0bFNlcmlhbGl6ZXIudHMiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvLi4vLi4vLi4vbHRzL3NlcmlhbGl6ZXJzL3NyYy9sZWdhY3kvbGVnYWN5LXVzZHpTZXJpYWxpemVyLnRzIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2x0cy9zZXJpYWxpemVycy9zcmMvbGVnYWN5L2xlZ2FjeS50cyIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy9leHRlcm5hbCB1bWQge1wicm9vdFwiOlwiQkFCWUxPTlwiLFwiY29tbW9uanNcIjpcImJhYnlsb25qc1wiLFwiY29tbW9uanMyXCI6XCJiYWJ5bG9uanNcIixcImFtZFwiOlwiYmFieWxvbmpzXCJ9Iiwid2VicGFjazovL1NFUklBTElaRVJTL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1NFUklBTElaRVJTL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL1NFUklBTElaRVJTL3dlYnBhY2svcnVudGltZS9jcmVhdGUgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL1NFUklBTElaRVJTL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL1NFUklBTElaRVJTL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJiYWJ5bG9uanNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJiYWJ5bG9uanMtc2VyaWFsaXplcnNcIiwgW1wiYmFieWxvbmpzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImJhYnlsb25qcy1zZXJpYWxpemVyc1wiXSA9IGZhY3RvcnkocmVxdWlyZShcImJhYnlsb25qc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiU0VSSUFMSVpFUlNcIl0gPSBmYWN0b3J5KHJvb3RbXCJCQUJZTE9OXCJdKTtcbn0pKCh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdGhpcyksIChfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2JhYnlsb25qc19NaXNjX3Rvb2xzX18pID0+IHtcbnJldHVybiAiLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cblxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSwgU3VwcHJlc3NlZEVycm9yLCBTeW1ib2wsIEl0ZXJhdG9yICovXG5cbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xuICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xuICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xufVxuXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XG4gIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XG4gICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XG4gICAgICB9XG4gICAgICByZXR1cm4gdDtcbiAgfVxuICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XG4gIHZhciB0ID0ge307XG4gIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgdFtwXSA9IHNbcF07XG4gIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXG4gICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgICAgfVxuICByZXR1cm4gdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX19lc0RlY29yYXRlKGN0b3IsIGRlc2NyaXB0b3JJbiwgZGVjb3JhdG9ycywgY29udGV4dEluLCBpbml0aWFsaXplcnMsIGV4dHJhSW5pdGlhbGl6ZXJzKSB7XG4gIGZ1bmN0aW9uIGFjY2VwdChmKSB7IGlmIChmICE9PSB2b2lkIDAgJiYgdHlwZW9mIGYgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZ1bmN0aW9uIGV4cGVjdGVkXCIpOyByZXR1cm4gZjsgfVxuICB2YXIga2luZCA9IGNvbnRleHRJbi5raW5kLCBrZXkgPSBraW5kID09PSBcImdldHRlclwiID8gXCJnZXRcIiA6IGtpbmQgPT09IFwic2V0dGVyXCIgPyBcInNldFwiIDogXCJ2YWx1ZVwiO1xuICB2YXIgdGFyZ2V0ID0gIWRlc2NyaXB0b3JJbiAmJiBjdG9yID8gY29udGV4dEluW1wic3RhdGljXCJdID8gY3RvciA6IGN0b3IucHJvdG90eXBlIDogbnVsbDtcbiAgdmFyIGRlc2NyaXB0b3IgPSBkZXNjcmlwdG9ySW4gfHwgKHRhcmdldCA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBjb250ZXh0SW4ubmFtZSkgOiB7fSk7XG4gIHZhciBfLCBkb25lID0gZmFsc2U7XG4gIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICB2YXIgY29udGV4dCA9IHt9O1xuICAgICAgZm9yICh2YXIgcCBpbiBjb250ZXh0SW4pIGNvbnRleHRbcF0gPSBwID09PSBcImFjY2Vzc1wiID8ge30gOiBjb250ZXh0SW5bcF07XG4gICAgICBmb3IgKHZhciBwIGluIGNvbnRleHRJbi5hY2Nlc3MpIGNvbnRleHQuYWNjZXNzW3BdID0gY29udGV4dEluLmFjY2Vzc1twXTtcbiAgICAgIGNvbnRleHQuYWRkSW5pdGlhbGl6ZXIgPSBmdW5jdGlvbiAoZikgeyBpZiAoZG9uZSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBhZGQgaW5pdGlhbGl6ZXJzIGFmdGVyIGRlY29yYXRpb24gaGFzIGNvbXBsZXRlZFwiKTsgZXh0cmFJbml0aWFsaXplcnMucHVzaChhY2NlcHQoZiB8fCBudWxsKSk7IH07XG4gICAgICB2YXIgcmVzdWx0ID0gKDAsIGRlY29yYXRvcnNbaV0pKGtpbmQgPT09IFwiYWNjZXNzb3JcIiA/IHsgZ2V0OiBkZXNjcmlwdG9yLmdldCwgc2V0OiBkZXNjcmlwdG9yLnNldCB9IDogZGVzY3JpcHRvcltrZXldLCBjb250ZXh0KTtcbiAgICAgIGlmIChraW5kID09PSBcImFjY2Vzc29yXCIpIHtcbiAgICAgICAgICBpZiAocmVzdWx0ID09PSB2b2lkIDApIGNvbnRpbnVlO1xuICAgICAgICAgIGlmIChyZXN1bHQgPT09IG51bGwgfHwgdHlwZW9mIHJlc3VsdCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdCBleHBlY3RlZFwiKTtcbiAgICAgICAgICBpZiAoXyA9IGFjY2VwdChyZXN1bHQuZ2V0KSkgZGVzY3JpcHRvci5nZXQgPSBfO1xuICAgICAgICAgIGlmIChfID0gYWNjZXB0KHJlc3VsdC5zZXQpKSBkZXNjcmlwdG9yLnNldCA9IF87XG4gICAgICAgICAgaWYgKF8gPSBhY2NlcHQocmVzdWx0LmluaXQpKSBpbml0aWFsaXplcnMudW5zaGlmdChfKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKF8gPSBhY2NlcHQocmVzdWx0KSkge1xuICAgICAgICAgIGlmIChraW5kID09PSBcImZpZWxkXCIpIGluaXRpYWxpemVycy51bnNoaWZ0KF8pO1xuICAgICAgICAgIGVsc2UgZGVzY3JpcHRvcltrZXldID0gXztcbiAgICAgIH1cbiAgfVxuICBpZiAodGFyZ2V0KSBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBjb250ZXh0SW4ubmFtZSwgZGVzY3JpcHRvcik7XG4gIGRvbmUgPSB0cnVlO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fcnVuSW5pdGlhbGl6ZXJzKHRoaXNBcmcsIGluaXRpYWxpemVycywgdmFsdWUpIHtcbiAgdmFyIHVzZVZhbHVlID0gYXJndW1lbnRzLmxlbmd0aCA+IDI7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgaW5pdGlhbGl6ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YWx1ZSA9IHVzZVZhbHVlID8gaW5pdGlhbGl6ZXJzW2ldLmNhbGwodGhpc0FyZywgdmFsdWUpIDogaW5pdGlhbGl6ZXJzW2ldLmNhbGwodGhpc0FyZyk7XG4gIH1cbiAgcmV0dXJuIHVzZVZhbHVlID8gdmFsdWUgOiB2b2lkIDA7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19wcm9wS2V5KHgpIHtcbiAgcmV0dXJuIHR5cGVvZiB4ID09PSBcInN5bWJvbFwiID8geCA6IFwiXCIuY29uY2F0KHgpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fc2V0RnVuY3Rpb25OYW1lKGYsIG5hbWUsIHByZWZpeCkge1xuICBpZiAodHlwZW9mIG5hbWUgPT09IFwic3ltYm9sXCIpIG5hbWUgPSBuYW1lLmRlc2NyaXB0aW9uID8gXCJbXCIuY29uY2F0KG5hbWUuZGVzY3JpcHRpb24sIFwiXVwiKSA6IFwiXCI7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZiwgXCJuYW1lXCIsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogcHJlZml4ID8gXCJcIi5jb25jYXQocHJlZml4LCBcIiBcIiwgbmFtZSkgOiBuYW1lIH0pO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcbiAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZyA9IE9iamVjdC5jcmVhdGUoKHR5cGVvZiBJdGVyYXRvciA9PT0gXCJmdW5jdGlvblwiID8gSXRlcmF0b3IgOiBPYmplY3QpLnByb3RvdHlwZSk7XG4gIHJldHVybiBnLm5leHQgPSB2ZXJiKDApLCBnW1widGhyb3dcIl0gPSB2ZXJiKDEpLCBnW1wicmV0dXJuXCJdID0gdmVyYigyKSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgd2hpbGUgKGcgJiYgKGcgPSAwLCBvcFswXSAmJiAoXyA9IDApKSwgXykgdHJ5IHtcbiAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICB9XG59XG5cbmV4cG9ydCB2YXIgX19jcmVhdGVCaW5kaW5nID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XG4gIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XG4gICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xuICB9XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICBvW2syXSA9IG1ba107XG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBvKSB7XG4gIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcbiAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcbiAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XG4gIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcbiAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xuICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcbiAgICAgIH1cbiAgfTtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcbiAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xuICBpZiAoIW0pIHJldHVybiBvO1xuICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcbiAgdHJ5IHtcbiAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xuICB9XG4gIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxuICBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XG4gICAgICB9XG4gICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cbiAgfVxuICByZXR1cm4gYXI7XG59XG5cbi8qKiBAZGVwcmVjYXRlZCAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xuICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcbiAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcbiAgcmV0dXJuIGFyO1xufVxuXG4vKiogQGRlcHJlY2F0ZWQgKi9cbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcbiAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XG4gIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcbiAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxuICAgICAgICAgIHJba10gPSBhW2pdO1xuICByZXR1cm4gcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXkodG8sIGZyb20sIHBhY2spIHtcbiAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcbiAgICAgIGlmIChhciB8fCAhKGkgaW4gZnJvbSkpIHtcbiAgICAgICAgICBpZiAoIWFyKSBhciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20sIDAsIGkpO1xuICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcbiAgICAgIH1cbiAgfVxuICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xuICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XG4gIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XG4gIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XG4gIHJldHVybiBpID0gT2JqZWN0LmNyZWF0ZSgodHlwZW9mIEFzeW5jSXRlcmF0b3IgPT09IFwiZnVuY3Rpb25cIiA/IEFzeW5jSXRlcmF0b3IgOiBPYmplY3QpLnByb3RvdHlwZSksIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiwgYXdhaXRSZXR1cm4pLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XG4gIGZ1bmN0aW9uIGF3YWl0UmV0dXJuKGYpIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUodikudGhlbihmLCByZWplY3QpOyB9OyB9XG4gIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpZiAoZ1tuXSkgeyBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyBpZiAoZikgaVtuXSA9IGYoaVtuXSk7IH0gfVxuICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XG4gIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxuICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XG4gIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cbiAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XG4gIHZhciBpLCBwO1xuICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xuICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBmYWxzZSB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XG4gIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XG4gIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XG4gIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcbiAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxuICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xuICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxuICByZXR1cm4gY29va2VkO1xufTtcblxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgb1tcImRlZmF1bHRcIl0gPSB2O1xufTtcblxudmFyIG93bktleXMgPSBmdW5jdGlvbihvKSB7XG4gIG93bktleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiAobykge1xuICAgIHZhciBhciA9IFtdO1xuICAgIGZvciAodmFyIGsgaW4gbykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBrKSkgYXJbYXIubGVuZ3RoXSA9IGs7XG4gICAgcmV0dXJuIGFyO1xuICB9O1xuICByZXR1cm4gb3duS2V5cyhvKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XG4gIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrID0gb3duS2V5cyhtb2QpLCBpID0gMDsgaSA8IGsubGVuZ3RoOyBpKyspIGlmIChrW2ldICE9PSBcImRlZmF1bHRcIikgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrW2ldKTtcbiAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcbiAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XG4gIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcbiAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcbiAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xuICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBzZXR0ZXJcIik7XG4gIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEluKHN0YXRlLCByZWNlaXZlcikge1xuICBpZiAocmVjZWl2ZXIgPT09IG51bGwgfHwgKHR5cGVvZiByZWNlaXZlciAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgcmVjZWl2ZXIgIT09IFwiZnVuY3Rpb25cIikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgdXNlICdpbicgb3BlcmF0b3Igb24gbm9uLW9iamVjdFwiKTtcbiAgcmV0dXJuIHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgPT09IHN0YXRlIDogc3RhdGUuaGFzKHJlY2VpdmVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fYWRkRGlzcG9zYWJsZVJlc291cmNlKGVudiwgdmFsdWUsIGFzeW5jKSB7XG4gIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdm9pZCAwKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgdmFsdWUgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdCBleHBlY3RlZC5cIik7XG4gICAgdmFyIGRpc3Bvc2UsIGlubmVyO1xuICAgIGlmIChhc3luYykge1xuICAgICAgaWYgKCFTeW1ib2wuYXN5bmNEaXNwb3NlKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jRGlzcG9zZSBpcyBub3QgZGVmaW5lZC5cIik7XG4gICAgICBkaXNwb3NlID0gdmFsdWVbU3ltYm9sLmFzeW5jRGlzcG9zZV07XG4gICAgfVxuICAgIGlmIChkaXNwb3NlID09PSB2b2lkIDApIHtcbiAgICAgIGlmICghU3ltYm9sLmRpc3Bvc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuZGlzcG9zZSBpcyBub3QgZGVmaW5lZC5cIik7XG4gICAgICBkaXNwb3NlID0gdmFsdWVbU3ltYm9sLmRpc3Bvc2VdO1xuICAgICAgaWYgKGFzeW5jKSBpbm5lciA9IGRpc3Bvc2U7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZGlzcG9zZSAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0IG5vdCBkaXNwb3NhYmxlLlwiKTtcbiAgICBpZiAoaW5uZXIpIGRpc3Bvc2UgPSBmdW5jdGlvbigpIHsgdHJ5IHsgaW5uZXIuY2FsbCh0aGlzKTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7IH0gfTtcbiAgICBlbnYuc3RhY2sucHVzaCh7IHZhbHVlOiB2YWx1ZSwgZGlzcG9zZTogZGlzcG9zZSwgYXN5bmM6IGFzeW5jIH0pO1xuICB9XG4gIGVsc2UgaWYgKGFzeW5jKSB7XG4gICAgZW52LnN0YWNrLnB1c2goeyBhc3luYzogdHJ1ZSB9KTtcbiAgfVxuICByZXR1cm4gdmFsdWU7XG59XG5cbnZhciBfU3VwcHJlc3NlZEVycm9yID0gdHlwZW9mIFN1cHByZXNzZWRFcnJvciA9PT0gXCJmdW5jdGlvblwiID8gU3VwcHJlc3NlZEVycm9yIDogZnVuY3Rpb24gKGVycm9yLCBzdXBwcmVzc2VkLCBtZXNzYWdlKSB7XG4gIHZhciBlID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICByZXR1cm4gZS5uYW1lID0gXCJTdXBwcmVzc2VkRXJyb3JcIiwgZS5lcnJvciA9IGVycm9yLCBlLnN1cHByZXNzZWQgPSBzdXBwcmVzc2VkLCBlO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fZGlzcG9zZVJlc291cmNlcyhlbnYpIHtcbiAgZnVuY3Rpb24gZmFpbChlKSB7XG4gICAgZW52LmVycm9yID0gZW52Lmhhc0Vycm9yID8gbmV3IF9TdXBwcmVzc2VkRXJyb3IoZSwgZW52LmVycm9yLCBcIkFuIGVycm9yIHdhcyBzdXBwcmVzc2VkIGR1cmluZyBkaXNwb3NhbC5cIikgOiBlO1xuICAgIGVudi5oYXNFcnJvciA9IHRydWU7XG4gIH1cbiAgdmFyIHIsIHMgPSAwO1xuICBmdW5jdGlvbiBuZXh0KCkge1xuICAgIHdoaWxlIChyID0gZW52LnN0YWNrLnBvcCgpKSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIXIuYXN5bmMgJiYgcyA9PT0gMSkgcmV0dXJuIHMgPSAwLCBlbnYuc3RhY2sucHVzaChyKSwgUHJvbWlzZS5yZXNvbHZlKCkudGhlbihuZXh0KTtcbiAgICAgICAgaWYgKHIuZGlzcG9zZSkge1xuICAgICAgICAgIHZhciByZXN1bHQgPSByLmRpc3Bvc2UuY2FsbChyLnZhbHVlKTtcbiAgICAgICAgICBpZiAoci5hc3luYykgcmV0dXJuIHMgfD0gMiwgUHJvbWlzZS5yZXNvbHZlKHJlc3VsdCkudGhlbihuZXh0LCBmdW5jdGlvbihlKSB7IGZhaWwoZSk7IHJldHVybiBuZXh0KCk7IH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgcyB8PSAxO1xuICAgICAgfVxuICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgZmFpbChlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHMgPT09IDEpIHJldHVybiBlbnYuaGFzRXJyb3IgPyBQcm9taXNlLnJlamVjdChlbnYuZXJyb3IpIDogUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgaWYgKGVudi5oYXNFcnJvcikgdGhyb3cgZW52LmVycm9yO1xuICB9XG4gIHJldHVybiBuZXh0KCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3Jld3JpdGVSZWxhdGl2ZUltcG9ydEV4dGVuc2lvbihwYXRoLCBwcmVzZXJ2ZUpzeCkge1xuICBpZiAodHlwZW9mIHBhdGggPT09IFwic3RyaW5nXCIgJiYgL15cXC5cXC4/XFwvLy50ZXN0KHBhdGgpKSB7XG4gICAgICByZXR1cm4gcGF0aC5yZXBsYWNlKC9cXC4odHN4KSR8KCg/OlxcLmQpPykoKD86XFwuW14uL10rPyk/KVxcLihbY21dPyl0cyQvaSwgZnVuY3Rpb24gKG0sIHRzeCwgZCwgZXh0LCBjbSkge1xuICAgICAgICAgIHJldHVybiB0c3ggPyBwcmVzZXJ2ZUpzeCA/IFwiLmpzeFwiIDogXCIuanNcIiA6IGQgJiYgKCFleHQgfHwgIWNtKSA/IG0gOiAoZCArIGV4dCArIFwiLlwiICsgY20udG9Mb3dlckNhc2UoKSArIFwianNcIik7XG4gICAgICB9KTtcbiAgfVxuICByZXR1cm4gcGF0aDtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBfX2V4dGVuZHMsXG4gIF9fYXNzaWduLFxuICBfX3Jlc3QsXG4gIF9fZGVjb3JhdGUsXG4gIF9fcGFyYW0sXG4gIF9fZXNEZWNvcmF0ZSxcbiAgX19ydW5Jbml0aWFsaXplcnMsXG4gIF9fcHJvcEtleSxcbiAgX19zZXRGdW5jdGlvbk5hbWUsXG4gIF9fbWV0YWRhdGEsXG4gIF9fYXdhaXRlcixcbiAgX19nZW5lcmF0b3IsXG4gIF9fY3JlYXRlQmluZGluZyxcbiAgX19leHBvcnRTdGFyLFxuICBfX3ZhbHVlcyxcbiAgX19yZWFkLFxuICBfX3NwcmVhZCxcbiAgX19zcHJlYWRBcnJheXMsXG4gIF9fc3ByZWFkQXJyYXksXG4gIF9fYXdhaXQsXG4gIF9fYXN5bmNHZW5lcmF0b3IsXG4gIF9fYXN5bmNEZWxlZ2F0b3IsXG4gIF9fYXN5bmNWYWx1ZXMsXG4gIF9fbWFrZVRlbXBsYXRlT2JqZWN0LFxuICBfX2ltcG9ydFN0YXIsXG4gIF9faW1wb3J0RGVmYXVsdCxcbiAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCxcbiAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCxcbiAgX19jbGFzc1ByaXZhdGVGaWVsZEluLFxuICBfX2FkZERpc3Bvc2FibGVSZXNvdXJjZSxcbiAgX19kaXNwb3NlUmVzb3VyY2VzLFxuICBfX3Jld3JpdGVSZWxhdGl2ZUltcG9ydEV4dGVuc2lvbixcbn07XG4iLCJleHBvcnQgKiBmcm9tIFwiLi9vYmpTZXJpYWxpemVyXCI7XHJcbiIsImltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xyXG5pbXBvcnQgeyBNYXRyaXggfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLnZlY3RvclwiO1xyXG5pbXBvcnQgeyBUb29scyB9IGZyb20gXCJjb3JlL01pc2MvdG9vbHNcIjtcclxuaW1wb3J0IHR5cGUgeyBTdGFuZGFyZE1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL3N0YW5kYXJkTWF0ZXJpYWxcIjtcclxuaW1wb3J0IHR5cGUgeyBHZW9tZXRyeSB9IGZyb20gXCJjb3JlL01lc2hlcy9nZW9tZXRyeVwiO1xyXG5pbXBvcnQgdHlwZSB7IE1lc2ggfSBmcm9tIFwiY29yZS9NZXNoZXMvbWVzaFwiO1xyXG5pbXBvcnQgeyBNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9tYXRlcmlhbFwiO1xyXG5cclxuLyoqXHJcbiAqIENsYXNzIGZvciBnZW5lcmF0aW5nIE9CSiBkYXRhIGZyb20gYSBCYWJ5bG9uIHNjZW5lLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE9CSkV4cG9ydCB7XHJcbiAgICAvKipcclxuICAgICAqIEV4cG9ydHMgdGhlIGdlb21ldHJ5IG9mIGEgTWVzaCBhcnJheSBpbiAuT0JKIGZpbGUgZm9ybWF0ICh0ZXh0KVxyXG4gICAgICogQHBhcmFtIG1lc2hlcyBkZWZpbmVzIHRoZSBsaXN0IG9mIG1lc2hlcyB0byBzZXJpYWxpemVcclxuICAgICAqIEBwYXJhbSBtYXRlcmlhbHMgZGVmaW5lcyBpZiBtYXRlcmlhbHMgc2hvdWxkIGJlIGV4cG9ydGVkXHJcbiAgICAgKiBAcGFyYW0gbWF0bGlibmFtZSBkZWZpbmVzIHRoZSBuYW1lIG9mIHRoZSBhc3NvY2lhdGVkIG10bCBmaWxlXHJcbiAgICAgKiBAcGFyYW0gZ2xvYmFscG9zaXRpb24gZGVmaW5lcyBpZiB0aGUgZXhwb3J0ZWQgcG9zaXRpb25zIGFyZSBnbG9iYWxzIG9yIGxvY2FsIHRvIHRoZSBleHBvcnRlZCBtZXNoXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgT0JKIGNvbnRlbnRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBPQkoobWVzaGVzOiBNZXNoW10sIG1hdGVyaWFscz86IGJvb2xlYW4sIG1hdGxpYm5hbWU/OiBzdHJpbmcsIGdsb2JhbHBvc2l0aW9uPzogYm9vbGVhbik6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3Qgb3V0cHV0OiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgIGxldCB2ID0gMTtcclxuICAgICAgICAvLyBrZWVwIHRyYWNrIG9mIHV2IGluZGV4IGluIGNhc2UgbWl4ZWQgbWVzaGVzIGFyZSBwYXNzZWQgaW5cclxuICAgICAgICBsZXQgdGV4dHVyZVYgPSAxO1xyXG5cclxuICAgICAgICBpZiAobWF0ZXJpYWxzKSB7XHJcbiAgICAgICAgICAgIGlmICghbWF0bGlibmFtZSkge1xyXG4gICAgICAgICAgICAgICAgbWF0bGlibmFtZSA9IFwibWF0XCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3V0cHV0LnB1c2goXCJtdGxsaWIgXCIgKyBtYXRsaWJuYW1lICsgXCIubXRsXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1lc2hlcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICBjb25zdCBtZXNoID0gbWVzaGVzW2pdO1xyXG4gICAgICAgICAgICBjb25zdCBvYmplY3ROYW1lID0gbWVzaC5uYW1lIHx8IGBtZXNoJHtqfX1gO1xyXG4gICAgICAgICAgICBvdXRwdXQucHVzaChgbyAke29iamVjdE5hbWV9YCk7XHJcblxyXG4gICAgICAgICAgICAvL1VzZXMgdGhlIHBvc2l0aW9uIG9mIHRoZSBpdGVtIGluIHRoZSBzY2VuZSwgdG8gdGhlIGZpbGUgKHRoaXMgYmFjayB0byBub3JtYWwgaW4gdGhlIGVuZClcclxuICAgICAgICAgICAgbGV0IGludmVyc2VUcmFuc2Zvcm06IE51bGxhYmxlPE1hdHJpeD4gPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAoZ2xvYmFscG9zaXRpb24pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zZm9ybSA9IG1lc2guY29tcHV0ZVdvcmxkTWF0cml4KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgaW52ZXJzZVRyYW5zZm9ybSA9IG5ldyBNYXRyaXgoKTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybS5pbnZlcnRUb1JlZihpbnZlcnNlVHJhbnNmb3JtKTtcclxuXHJcbiAgICAgICAgICAgICAgICBtZXNoLmJha2VUcmFuc2Zvcm1JbnRvVmVydGljZXModHJhbnNmb3JtKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9UT0RPOiBzdWJtZXNoZXMgKGdyb3VwcylcclxuICAgICAgICAgICAgLy9UT0RPOiBzbW9vdGhpbmcgZ3JvdXBzIChzIDEsIHMgb2ZmKTtcclxuICAgICAgICAgICAgaWYgKG1hdGVyaWFscykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWF0ID0gbWVzaC5tYXRlcmlhbDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobWF0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0LnB1c2goXCJ1c2VtdGwgXCIgKyBtYXQuaWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGc6IE51bGxhYmxlPEdlb21ldHJ5PiA9IG1lc2guZ2VvbWV0cnk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWcpIHtcclxuICAgICAgICAgICAgICAgIFRvb2xzLldhcm4oXCJObyBnZW9tZXRyeSBpcyBwcmVzZW50IG9uIHRoZSBtZXNoXCIpO1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRydW5rVmVydHMgPSBnLmdldFZlcnRpY2VzRGF0YShcInBvc2l0aW9uXCIpO1xyXG4gICAgICAgICAgICBjb25zdCB0cnVua05vcm1hbHMgPSBnLmdldFZlcnRpY2VzRGF0YShcIm5vcm1hbFwiKTtcclxuICAgICAgICAgICAgY29uc3QgdHJ1bmtVViA9IGcuZ2V0VmVydGljZXNEYXRhKFwidXZcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHRydW5rRmFjZXMgPSBnLmdldEluZGljZXMoKTtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRWID0gMDtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRUZXh0dXJlViA9IDA7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRydW5rVmVydHMgfHwgIXRydW5rRmFjZXMpIHtcclxuICAgICAgICAgICAgICAgIFRvb2xzLldhcm4oXCJUaGVyZSBhcmUgbm8gcG9zaXRpb24gdmVydGljZXMgb3IgaW5kaWNlcyBvbiB0aGUgbWVzaCFcIik7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgdXNlUmlnaHRIYW5kZWRTeXN0ZW0gPSBtZXNoZXNbMF0uZ2V0U2NlbmUoKS51c2VSaWdodEhhbmRlZFN5c3RlbTtcclxuICAgICAgICAgICAgY29uc3QgaGFuZGVkbmVzc1NpZ24gPSB1c2VSaWdodEhhbmRlZFN5c3RlbSA/IDEgOiAtMTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdHJ1bmtWZXJ0cy5sZW5ndGg7IGkgKz0gMykge1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0LnB1c2goXCJ2IFwiICsgdHJ1bmtWZXJ0c1tpXSAqIGhhbmRlZG5lc3NTaWduICsgXCIgXCIgKyB0cnVua1ZlcnRzW2kgKyAxXSArIFwiIFwiICsgdHJ1bmtWZXJ0c1tpICsgMl0pO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFYrKztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRydW5rTm9ybWFscyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRydW5rTm9ybWFscy5sZW5ndGg7IGkgKz0gMykge1xyXG4gICAgICAgICAgICAgICAgICAgIG91dHB1dC5wdXNoKFwidm4gXCIgKyB0cnVua05vcm1hbHNbaV0gKiBoYW5kZWRuZXNzU2lnbiArIFwiIFwiICsgdHJ1bmtOb3JtYWxzW2kgKyAxXSArIFwiIFwiICsgdHJ1bmtOb3JtYWxzW2kgKyAyXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRydW5rVVYgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0cnVua1VWLmxlbmd0aDsgaSArPSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0LnB1c2goXCJ2dCBcIiArIHRydW5rVVZbaV0gKyBcIiBcIiArIHRydW5rVVZbaSArIDFdKTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VGV4dHVyZVYrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgYmxhbmtzOiBzdHJpbmdbXSA9IFtcIlwiLCBcIlwiLCBcIlwiXTtcclxuICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWwgPSBtZXNoLm1hdGVyaWFsIHx8IG1lc2guZ2V0U2NlbmUoKS5kZWZhdWx0TWF0ZXJpYWw7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzaWRlT3JpZW50YXRpb24gPSBtYXRlcmlhbC5fZ2V0RWZmZWN0aXZlT3JpZW50YXRpb24obWVzaCk7XHJcbiAgICAgICAgICAgIGNvbnN0IFtvZmZzZXQxLCBvZmZzZXQyXSA9IHNpZGVPcmllbnRhdGlvbiA9PT0gTWF0ZXJpYWwuQ2xvY2tXaXNlU2lkZU9yaWVudGF0aW9uID8gWzIsIDFdIDogWzEsIDJdO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0cnVua0ZhY2VzLmxlbmd0aDsgaSArPSAzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRpY2VzID0gW1N0cmluZyh0cnVua0ZhY2VzW2ldICsgdiksIFN0cmluZyh0cnVua0ZhY2VzW2kgKyBvZmZzZXQxXSArIHYpLCBTdHJpbmcodHJ1bmtGYWNlc1tpICsgb2Zmc2V0Ml0gKyB2KV07XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0dXJlSW5kaWNlcyA9IFtTdHJpbmcodHJ1bmtGYWNlc1tpXSArIHRleHR1cmVWKSwgU3RyaW5nKHRydW5rRmFjZXNbaSArIG9mZnNldDFdICsgdGV4dHVyZVYpLCBTdHJpbmcodHJ1bmtGYWNlc1tpICsgb2Zmc2V0Ml0gKyB0ZXh0dXJlVildO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGZhY2VQb3NpdGlvbnMgPSBpbmRpY2VzO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmFjZVVWcyA9IHRydW5rVVYgIT0gbnVsbCA/IHRleHR1cmVJbmRpY2VzIDogYmxhbmtzO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmFjZU5vcm1hbHMgPSB0cnVua05vcm1hbHMgIT0gbnVsbCA/IGluZGljZXMgOiBibGFua3M7XHJcblxyXG4gICAgICAgICAgICAgICAgb3V0cHV0LnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgXCJmIFwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmFjZVBvc2l0aW9uc1swXSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiL1wiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmFjZVVWc1swXSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiL1wiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmFjZU5vcm1hbHNbMF0gK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhY2VQb3NpdGlvbnNbMV0gK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIi9cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhY2VVVnNbMV0gK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIi9cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhY2VOb3JtYWxzWzFdICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWNlUG9zaXRpb25zWzJdICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCIvXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWNlVVZzWzJdICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCIvXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWNlTm9ybWFsc1syXVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL2JhY2sgZGUgcHJldmlvdXMgbWF0cml4LCB0byBub3QgY2hhbmdlIHRoZSBvcmlnaW5hbCBtZXNoIGluIHRoZSBzY2VuZVxyXG4gICAgICAgICAgICBpZiAoZ2xvYmFscG9zaXRpb24gJiYgaW52ZXJzZVRyYW5zZm9ybSkge1xyXG4gICAgICAgICAgICAgICAgbWVzaC5iYWtlVHJhbnNmb3JtSW50b1ZlcnRpY2VzKGludmVyc2VUcmFuc2Zvcm0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHYgKz0gY3VycmVudFY7XHJcbiAgICAgICAgICAgIHRleHR1cmVWICs9IGN1cnJlbnRUZXh0dXJlVjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdGV4dDogc3RyaW5nID0gb3V0cHV0LmpvaW4oXCJcXG5cIik7XHJcbiAgICAgICAgcmV0dXJuIHRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFeHBvcnRzIHRoZSBtYXRlcmlhbChzKSBvZiBhIG1lc2ggaW4gLk1UTCBmaWxlIGZvcm1hdCAodGV4dClcclxuICAgICAqIEBwYXJhbSBtZXNoIGRlZmluZXMgdGhlIG1lc2ggdG8gZXh0cmFjdCB0aGUgbWF0ZXJpYWwgZnJvbVxyXG4gICAgICogQHJldHVybnMgdGhlIG10bCBjb250ZW50XHJcbiAgICAgKi9cclxuICAgIC8vVE9ETzogRXhwb3J0IHRoZSBtYXRlcmlhbHMgb2YgbWVzaCBhcnJheVxyXG4gICAgcHVibGljIHN0YXRpYyBNVEwobWVzaDogTWVzaCk6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3Qgb3V0cHV0ID0gW107XHJcbiAgICAgICAgY29uc3QgbSA9IDxTdGFuZGFyZE1hdGVyaWFsPm1lc2gubWF0ZXJpYWw7XHJcbiAgICAgICAgb3V0cHV0LnB1c2goXCJuZXdtdGwgbWF0MVwiKTtcclxuICAgICAgICBvdXRwdXQucHVzaChcIiAgTnMgXCIgKyBtLnNwZWN1bGFyUG93ZXIudG9GaXhlZCg0KSk7XHJcbiAgICAgICAgb3V0cHV0LnB1c2goXCIgIE5pIDEuNTAwMFwiKTtcclxuICAgICAgICBvdXRwdXQucHVzaChcIiAgZCBcIiArIG0uYWxwaGEudG9GaXhlZCg0KSk7XHJcbiAgICAgICAgb3V0cHV0LnB1c2goXCIgIFRyIDAuMDAwMFwiKTtcclxuICAgICAgICBvdXRwdXQucHVzaChcIiAgVGYgMS4wMDAwIDEuMDAwMCAxLjAwMDBcIik7XHJcbiAgICAgICAgb3V0cHV0LnB1c2goXCIgIGlsbHVtIDJcIik7XHJcbiAgICAgICAgb3V0cHV0LnB1c2goXCIgIEthIFwiICsgbS5hbWJpZW50Q29sb3Iuci50b0ZpeGVkKDQpICsgXCIgXCIgKyBtLmFtYmllbnRDb2xvci5nLnRvRml4ZWQoNCkgKyBcIiBcIiArIG0uYW1iaWVudENvbG9yLmIudG9GaXhlZCg0KSk7XHJcbiAgICAgICAgb3V0cHV0LnB1c2goXCIgIEtkIFwiICsgbS5kaWZmdXNlQ29sb3Iuci50b0ZpeGVkKDQpICsgXCIgXCIgKyBtLmRpZmZ1c2VDb2xvci5nLnRvRml4ZWQoNCkgKyBcIiBcIiArIG0uZGlmZnVzZUNvbG9yLmIudG9GaXhlZCg0KSk7XHJcbiAgICAgICAgb3V0cHV0LnB1c2goXCIgIEtzIFwiICsgbS5zcGVjdWxhckNvbG9yLnIudG9GaXhlZCg0KSArIFwiIFwiICsgbS5zcGVjdWxhckNvbG9yLmcudG9GaXhlZCg0KSArIFwiIFwiICsgbS5zcGVjdWxhckNvbG9yLmIudG9GaXhlZCg0KSk7XHJcbiAgICAgICAgb3V0cHV0LnB1c2goXCIgIEtlIFwiICsgbS5lbWlzc2l2ZUNvbG9yLnIudG9GaXhlZCg0KSArIFwiIFwiICsgbS5lbWlzc2l2ZUNvbG9yLmcudG9GaXhlZCg0KSArIFwiIFwiICsgbS5lbWlzc2l2ZUNvbG9yLmIudG9GaXhlZCg0KSk7XHJcblxyXG4gICAgICAgIC8vVE9ETzogdXYgc2NhbGUsIG9mZnNldCwgd3JhcFxyXG4gICAgICAgIC8vVE9ETzogVVYgbWlycm9yZWQgaW4gQmxlbmRlcj8gc2Vjb25kIFVWIGNoYW5uZWw/IGxpZ2h0TWFwPyByZWZsZWN0aW9uIHRleHR1cmVzP1xyXG4gICAgICAgIGNvbnN0IHV2c2NhbGUgPSBcIlwiO1xyXG5cclxuICAgICAgICBpZiAobS5hbWJpZW50VGV4dHVyZSkge1xyXG4gICAgICAgICAgICBvdXRwdXQucHVzaChcIiAgbWFwX0thIFwiICsgdXZzY2FsZSArIG0uYW1iaWVudFRleHR1cmUubmFtZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobS5kaWZmdXNlVGV4dHVyZSkge1xyXG4gICAgICAgICAgICBvdXRwdXQucHVzaChcIiAgbWFwX0tkIFwiICsgdXZzY2FsZSArIG0uZGlmZnVzZVRleHR1cmUubmFtZSk7XHJcbiAgICAgICAgICAgIC8vVE9ETzogYWxwaGEgdGVzdGluZywgb3BhY2l0eSBpbiBkaWZmdXNlIHRleHR1cmUgYWxwaGEgY2hhbm5lbCAoZGlmZnVzZVRleHR1cmUuaGFzQWxwaGEgLT4gbWFwX2QpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobS5zcGVjdWxhclRleHR1cmUpIHtcclxuICAgICAgICAgICAgb3V0cHV0LnB1c2goXCIgIG1hcF9LcyBcIiArIHV2c2NhbGUgKyBtLnNwZWN1bGFyVGV4dHVyZS5uYW1lKTtcclxuICAgICAgICAgICAgLyogVE9ETzogZ2xvc3NpbmVzcyA9IHNwZWN1bGFyIGhpZ2hsaWdodCBjb21wb25lbnQgaXMgaW4gYWxwaGEgY2hhbm5lbCBvZiBzcGVjdWxhclRleHR1cmUuICg/Pz8pXHJcbiAgICAgICAgICAgIGlmIChtLnVzZUdsb3NzaW5lc3NGcm9tU3BlY3VsYXJNYXBBbHBoYSkgIHtcclxuICAgICAgICAgICAgICAgIG91dHB1dC5wdXNoKFwiICBtYXBfTnMgXCIrdXZzY2FsZSArIG0uc3BlY3VsYXJUZXh0dXJlLm5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICovXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBUT0RPOiBlbWlzc2l2ZSB0ZXh0dXJlIG5vdCBpbiAuTUFUIGZvcm1hdCAoPz8/KVxyXG4gICAgICAgIGlmIChtLmVtaXNzaXZlVGV4dHVyZSkge1xyXG4gICAgICAgICAgICBvdXRwdXQucHVzaChcIiAgbWFwX2QgXCIrdXZzY2FsZSttLmVtaXNzaXZlVGV4dHVyZS5uYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgKi9cclxuXHJcbiAgICAgICAgaWYgKG0uYnVtcFRleHR1cmUpIHtcclxuICAgICAgICAgICAgb3V0cHV0LnB1c2goXCIgIG1hcF9idW1wIC1pbWZjaGFuIHogXCIgKyB1dnNjYWxlICsgbS5idW1wVGV4dHVyZS5uYW1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtLm9wYWNpdHlUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgIG91dHB1dC5wdXNoKFwiICBtYXBfZCBcIiArIHV2c2NhbGUgKyBtLm9wYWNpdHlUZXh0dXJlLm5hbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdGV4dCA9IG91dHB1dC5qb2luKFwiXFxuXCIpO1xyXG4gICAgICAgIHJldHVybiB0ZXh0O1xyXG4gICAgfVxyXG59XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1pbnRlcm5hbC1tb2R1bGVzICovXHJcbmV4cG9ydCAqIGZyb20gXCIuL3VzZHpFeHBvcnRlclwiO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb24gKi9cclxuaW1wb3J0IHsgVmVydGV4QnVmZmVyIH0gZnJvbSBcImNvcmUvQnVmZmVycy9idWZmZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBDYW1lcmEgfSBmcm9tIFwiY29yZS9DYW1lcmFzL2NhbWVyYVwiO1xyXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiY29yZS9FbmdpbmVzL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgdHlwZSB7IE1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL21hdGVyaWFsXCI7XHJcbmltcG9ydCB0eXBlIHsgUEJSTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvUEJSL3Bick1hdGVyaWFsXCI7XHJcbmltcG9ydCB0eXBlIHsgUEJSTWV0YWxsaWNSb3VnaG5lc3NNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9QQlIvcGJyTWV0YWxsaWNSb3VnaG5lc3NNYXRlcmlhbFwiO1xyXG5pbXBvcnQgdHlwZSB7IFN0YW5kYXJkTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvc3RhbmRhcmRNYXRlcmlhbFwiO1xyXG5pbXBvcnQgdHlwZSB7IEJhc2VUZXh0dXJlIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1RleHR1cmVzL2Jhc2VUZXh0dXJlXCI7XHJcbmltcG9ydCB0eXBlIHsgVGV4dHVyZSB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9UZXh0dXJlcy90ZXh0dXJlXCI7XHJcbmltcG9ydCB7IENvbG9yMyB9IGZyb20gXCJjb3JlL01hdGhzL21hdGguY29sb3JcIjtcclxuaW1wb3J0IHsgTWF0cml4LCBWZWN0b3IyIH0gZnJvbSBcImNvcmUvTWF0aHMvbWF0aC52ZWN0b3JcIjtcclxuaW1wb3J0IHR5cGUgeyBHZW9tZXRyeSB9IGZyb20gXCJjb3JlL01lc2hlcy9nZW9tZXRyeVwiO1xyXG5pbXBvcnQgdHlwZSB7IE1lc2ggfSBmcm9tIFwiY29yZS9NZXNoZXMvbWVzaFwiO1xyXG5pbXBvcnQgeyBEdW1wVG9vbHMgfSBmcm9tIFwiY29yZS9NaXNjL2R1bXBUb29sc1wiO1xyXG5pbXBvcnQgeyBUb29scyB9IGZyb20gXCJjb3JlL01pc2MvdG9vbHNcIjtcclxuaW1wb3J0IHR5cGUgeyBTY2VuZSB9IGZyb20gXCJjb3JlL3NjZW5lXCI7XHJcbmltcG9ydCB0eXBlIHsgRmxvYXRBcnJheSwgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xyXG5cclxuLyoqXHJcbiAqIFBvcnRlZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9tcmRvb2IvdGhyZWUuanMvYmxvYi9tYXN0ZXIvZXhhbXBsZXMvanNtL2V4cG9ydGVycy9VU0RaRXhwb3J0ZXIuanNcclxuICogVGhhbmtzIGEgbG90IHRvIHRoZSB0aHJlZS5qcyB0ZWFtIGZvciB0aGVpciBhbWF6aW5nIHdvcmshXHJcbiAqL1xyXG5cclxuLy8gRkZsYXRlIGFjY2Vzc1xyXG5kZWNsYXJlIGNvbnN0IGZmbGF0ZTogYW55O1xyXG5cclxuLyoqXHJcbiAqIE9wdGlvbnMgZm9yIHRoZSBVU0RaIGV4cG9ydFxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJVVNEWkV4cG9ydE9wdGlvbnMge1xyXG4gICAgLyoqXHJcbiAgICAgKiBVUkwgdG8gbG9hZCB0aGUgZmZsYXRlIGxpYnJhcnkgZnJvbVxyXG4gICAgICovXHJcbiAgICBmZmxhdGVVcmw/OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIEluY2x1ZGUgYW5jaG9yaW5nIHByb3BlcnRpZXMgaW4gdGhlIFVTRFogZmlsZVxyXG4gICAgICovXHJcbiAgICBpbmNsdWRlQW5jaG9yaW5nUHJvcGVydGllcz86IGJvb2xlYW47XHJcbiAgICAvKipcclxuICAgICAqIEFuY2hvcmluZyB0eXBlIChwbGFuZSBieSBkZWZhdWx0KVxyXG4gICAgICovXHJcbiAgICBhbmNob3JpbmdUeXBlPzogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBQbGFuZSBhbmNob3JpbmcgYWxpZ25tZW50IChob3Jpem9udGFsIGJ5IGRlZmF1bHQpXHJcbiAgICAgKi9cclxuICAgIHBsYW5lQW5jaG9yaW5nQWxpZ25tZW50Pzogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBNb2RlbCBmaWxlIG5hbWUgKG1vZGVsLnVzZGEgYnkgZGVmYXVsdClcclxuICAgICAqL1xyXG4gICAgbW9kZWxGaWxlTmFtZT86IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogUHJlY2lzaW9uIHRvIHVzZSBmb3IgbnVtYmVyICg1IGJ5IGRlZmF1bHQpXHJcbiAgICAgKi9cclxuICAgIHByZWNpc2lvbj86IG51bWJlcjtcclxuICAgIC8qKlxyXG4gICAgICogRXhwb3J0IHRoZSBjYW1lcmEgKGZhbHNlIGJ5IGRlZmF1bHQpXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydENhbWVyYT86IGJvb2xlYW47XHJcbiAgICAvKipcclxuICAgICAqIENhbWVyYSBzZW5zb3Igd2lkdGggKDM1IGJ5IGRlZmF1bHQpXHJcbiAgICAgKi9cclxuICAgIGNhbWVyYVNlbnNvcldpZHRoPzogbnVtYmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBCdWlsZEhlYWRlcigpIHtcclxuICAgIHJldHVybiBgI3VzZGEgMS4wXHJcbiAgICAoXHJcbiAgICAgICAgY3VzdG9tTGF5ZXJEYXRhID0ge1xyXG4gICAgICAgICAgICBzdHJpbmcgY3JlYXRvciA9IFwiQmFieWxvbi5qcyBVU0RaRXhwb3J0QXN5bmNcIlxyXG4gICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0UHJpbSA9IFwiUm9vdFwiXHJcbiAgICAgICAgbWV0ZXJzUGVyVW5pdCA9IDFcclxuICAgICAgICB1cEF4aXMgPSBcIllcIlxyXG4gICAgKWA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEJ1aWxkU2NlbmVTdGFydChvcHRpb25zOiBJVVNEWkV4cG9ydE9wdGlvbnMpIHtcclxuICAgIGNvbnN0IGFsaWdubWVudCA9XHJcbiAgICAgICAgb3B0aW9ucy5pbmNsdWRlQW5jaG9yaW5nUHJvcGVydGllcyA9PT0gdHJ1ZVxyXG4gICAgICAgICAgICA/IGBcclxuXHRcdHRva2VuIHByZWxpbWluYXJ5OmFuY2hvcmluZzp0eXBlID0gXCIke29wdGlvbnMuYW5jaG9yaW5nVHlwZX1cIlxyXG5cdFx0dG9rZW4gcHJlbGltaW5hcnk6cGxhbmVBbmNob3Jpbmc6YWxpZ25tZW50ID0gXCIke29wdGlvbnMucGxhbmVBbmNob3JpbmdBbGlnbm1lbnR9XCJgXHJcbiAgICAgICAgICAgIDogXCJcIjtcclxuICAgIHJldHVybiBgZGVmIFhmb3JtIFwiUm9vdFwiXHJcbiAgICB7XHJcbiAgICAgICAgZGVmIFNjb3BlIFwiU2NlbmVzXCIgKFxyXG4gICAgICAgICAgICBraW5kID0gXCJzY2VuZUxpYnJhcnlcIlxyXG4gICAgICAgIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGRlZiBYZm9ybSBcIlNjZW5lXCIgKFxyXG4gICAgICAgICAgICAgICAgY3VzdG9tRGF0YSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBib29sIHByZWxpbWluYXJ5X2NvbGxpZGVzV2l0aEVudmlyb25tZW50ID0gMFxyXG4gICAgICAgICAgICAgICAgICAgIHN0cmluZyBzY2VuZU5hbWUgPSBcIlNjZW5lXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNjZW5lTmFtZSA9IFwiU2NlbmVcIlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIHske2FsaWdubWVudH1cclxuICAgICAgICAgICAgYDtcclxufVxyXG5cclxuZnVuY3Rpb24gQnVpbGRTY2VuZUVuZCgpIHtcclxuICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9YDtcclxufVxyXG5cclxuZnVuY3Rpb24gQnVpbGRNZXNoVmVydGV4Q291bnQoZ2VvbWV0cnk6IEdlb21ldHJ5KSB7XHJcbiAgICBjb25zdCBjb3VudCA9IGdlb21ldHJ5LmdldEluZGljZXMoKT8ubGVuZ3RoID8gZ2VvbWV0cnkuZ2V0VG90YWxJbmRpY2VzKCkgOiBnZW9tZXRyeS5nZXRUb3RhbFZlcnRpY2VzKCk7XHJcblxyXG4gICAgcmV0dXJuIEFycmF5KGNvdW50IC8gMylcclxuICAgICAgICAuZmlsbCgzKVxyXG4gICAgICAgIC5qb2luKFwiLCBcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEJ1aWxkTWVzaFZlcnRleEluZGljZXMoZ2VvbWV0cnk6IEdlb21ldHJ5KSB7XHJcbiAgICBjb25zdCBpbmRleCA9IGdlb21ldHJ5LmdldEluZGljZXMoKTtcclxuICAgIGNvbnN0IGFycmF5ID0gW107XHJcblxyXG4gICAgaWYgKGluZGV4ICE9PSBudWxsKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbmRleC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBhcnJheS5wdXNoKGluZGV4W2ldKTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IGdlb21ldHJ5LmdldFRvdGFsVmVydGljZXMoKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBhcnJheS5wdXNoKGkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYXJyYXkuam9pbihcIiwgXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBCdWlsZFZlY3RvcjNBcnJheShhdHRyaWJ1dGU6IEZsb2F0QXJyYXksIG9wdGlvbnM6IElVU0RaRXhwb3J0T3B0aW9ucywgc3RyaWRlID0gMykge1xyXG4gICAgY29uc3QgYXJyYXkgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF0dHJpYnV0ZS5sZW5ndGggLyBzdHJpZGU7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IHggPSBhdHRyaWJ1dGVbaSAqIHN0cmlkZV07XHJcbiAgICAgICAgY29uc3QgeSA9IGF0dHJpYnV0ZVtpICogc3RyaWRlICsgMV07XHJcbiAgICAgICAgY29uc3QgeiA9IGF0dHJpYnV0ZVtpICogc3RyaWRlICsgMl07XHJcblxyXG4gICAgICAgIGFycmF5LnB1c2goYCgke3gudG9QcmVjaXNpb24ob3B0aW9ucy5wcmVjaXNpb24pfSwgJHt5LnRvUHJlY2lzaW9uKG9wdGlvbnMucHJlY2lzaW9uKX0sICR7ei50b1ByZWNpc2lvbihvcHRpb25zLnByZWNpc2lvbil9KWApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhcnJheS5qb2luKFwiLCBcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEJ1aWxkVmVjdG9yMkFycmF5KGF0dHJpYnV0ZTogRmxvYXRBcnJheSwgb3B0aW9uczogSVVTRFpFeHBvcnRPcHRpb25zKSB7XHJcbiAgICBjb25zdCBhcnJheSA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXR0cmlidXRlLmxlbmd0aCAvIDI7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IHggPSBhdHRyaWJ1dGVbaSAqIDJdO1xyXG4gICAgICAgIGNvbnN0IHkgPSBhdHRyaWJ1dGVbaSAqIDIgKyAxXTtcclxuXHJcbiAgICAgICAgYXJyYXkucHVzaChgKCR7eC50b1ByZWNpc2lvbihvcHRpb25zLnByZWNpc2lvbil9LCAkeygxIC0geSkudG9QcmVjaXNpb24ob3B0aW9ucy5wcmVjaXNpb24pfSlgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYXJyYXkuam9pbihcIiwgXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBCdWlsZEFkZGl0aW9uYWxBdHRyaWJ1dGVzKGdlb21ldHJ5OiBHZW9tZXRyeSwgb3B0aW9uczogSVVTRFpFeHBvcnRPcHRpb25zKSB7XHJcbiAgICBsZXQgc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGlkID0gaSA+IDAgPyBpIDogXCJcIjtcclxuICAgICAgICBjb25zdCB1dkF0dHJpYnV0ZSA9IGdlb21ldHJ5LmdldFZlcnRpY2VzRGF0YShWZXJ0ZXhCdWZmZXIuVVZLaW5kICsgKGlkID8gaWQgOiBcIlwiKSk7XHJcblxyXG4gICAgICAgIGlmICh1dkF0dHJpYnV0ZSkge1xyXG4gICAgICAgICAgICBzdHJpbmcgKz0gYFxyXG5cdFx0dGV4Q29vcmQyZltdIHByaW12YXJzOnN0JHtpZH0gPSBbJHtCdWlsZFZlY3RvcjJBcnJheSh1dkF0dHJpYnV0ZSwgb3B0aW9ucyl9XSAoXHJcblx0XHRcdGludGVycG9sYXRpb24gPSBcInZlcnRleFwiXHJcblx0XHQpYDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdmVydGV4IGNvbG9yc1xyXG5cclxuICAgIGNvbnN0IGNvbG9yQXR0cmlidXRlID0gZ2VvbWV0cnkuZ2V0VmVydGljZXNEYXRhKFZlcnRleEJ1ZmZlci5Db2xvcktpbmQpO1xyXG5cclxuICAgIGlmIChjb2xvckF0dHJpYnV0ZSkge1xyXG4gICAgICAgIHN0cmluZyArPSBgXHJcblx0Y29sb3IzZltdIHByaW12YXJzOmRpc3BsYXlDb2xvciA9IFske0J1aWxkVmVjdG9yM0FycmF5KGNvbG9yQXR0cmlidXRlLCBvcHRpb25zLCBjb2xvckF0dHJpYnV0ZS5sZW5ndGggLyBnZW9tZXRyeS5nZXRUb3RhbFZlcnRpY2VzKCkpfV0gKFxyXG5cdFx0aW50ZXJwb2xhdGlvbiA9IFwidmVydGV4XCJcclxuXHRcdClgO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdHJpbmc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEJ1aWxkTWVzaChnZW9tZXRyeTogR2VvbWV0cnksIG9wdGlvbnM6IElVU0RaRXhwb3J0T3B0aW9ucykge1xyXG4gICAgY29uc3QgbmFtZSA9IFwiR2VvbWV0cnlcIjtcclxuICAgIGNvbnN0IHBvc2l0aW9uID0gZ2VvbWV0cnkuZ2V0VmVydGljZXNEYXRhKFZlcnRleEJ1ZmZlci5Qb3NpdGlvbktpbmQpO1xyXG4gICAgY29uc3Qgbm9ybWFsID0gZ2VvbWV0cnkuZ2V0VmVydGljZXNEYXRhKFZlcnRleEJ1ZmZlci5Qb3NpdGlvbktpbmQpO1xyXG5cclxuICAgIGlmICghcG9zaXRpb24gfHwgIW5vcm1hbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYFxyXG5cdGRlZiBNZXNoIFwiJHtuYW1lfVwiXHJcblx0e1xyXG5cdFx0aW50W10gZmFjZVZlcnRleENvdW50cyA9IFske0J1aWxkTWVzaFZlcnRleENvdW50KGdlb21ldHJ5KX1dXHJcblx0XHRpbnRbXSBmYWNlVmVydGV4SW5kaWNlcyA9IFske0J1aWxkTWVzaFZlcnRleEluZGljZXMoZ2VvbWV0cnkpfV1cclxuXHRcdG5vcm1hbDNmW10gbm9ybWFscyA9IFske0J1aWxkVmVjdG9yM0FycmF5KG5vcm1hbCwgb3B0aW9ucyl9XSAoXHJcblx0XHRcdGludGVycG9sYXRpb24gPSBcInZlcnRleFwiXHJcblx0XHQpXHJcblx0XHRwb2ludDNmW10gcG9pbnRzID0gWyR7QnVpbGRWZWN0b3IzQXJyYXkocG9zaXRpb24sIG9wdGlvbnMpfV1cclxuICAgICAgICAke0J1aWxkQWRkaXRpb25hbEF0dHJpYnV0ZXMoZ2VvbWV0cnksIG9wdGlvbnMpfVxyXG5cdFx0dW5pZm9ybSB0b2tlbiBzdWJkaXZpc2lvblNjaGVtZSA9IFwibm9uZVwiXHJcblx0fVxyXG5gO1xyXG59XHJcblxyXG5mdW5jdGlvbiBCdWlsZE1lc2hPYmplY3QoZ2VvbWV0cnk6IEdlb21ldHJ5LCBvcHRpb25zOiBJVVNEWkV4cG9ydE9wdGlvbnMpIHtcclxuICAgIGNvbnN0IG1lc2ggPSBCdWlsZE1lc2goZ2VvbWV0cnksIG9wdGlvbnMpO1xyXG4gICAgcmV0dXJuIGBcclxuICAgICAgICBkZWYgXCJHZW9tZXRyeVwiXHJcbiAgICAgICAge1xyXG4gICAgICAgICR7bWVzaH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYDtcclxufVxyXG5cclxuZnVuY3Rpb24gQnVpbGRVU0RGaWxlQXNTdHJpbmcoZGF0YVRvSW5zZXJ0OiBzdHJpbmcpIHtcclxuICAgIGxldCBvdXRwdXQgPSBCdWlsZEhlYWRlcigpO1xyXG4gICAgb3V0cHV0ICs9IGRhdGFUb0luc2VydDtcclxuICAgIHJldHVybiBmZmxhdGUuc3RyVG9VOChvdXRwdXQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBCdWlsZE1hdHJpeChtYXRyaXg6IE1hdHJpeCkge1xyXG4gICAgY29uc3QgYXJyYXkgPSBtYXRyaXgubSBhcyBudW1iZXJbXTtcclxuXHJcbiAgICByZXR1cm4gYCggJHtCdWlsZE1hdHJpeFJvdyhhcnJheSwgMCl9LCAke0J1aWxkTWF0cml4Um93KGFycmF5LCA0KX0sICR7QnVpbGRNYXRyaXhSb3coYXJyYXksIDgpfSwgJHtCdWlsZE1hdHJpeFJvdyhhcnJheSwgMTIpfSApYDtcclxufVxyXG5cclxuZnVuY3Rpb24gQnVpbGRNYXRyaXhSb3coYXJyYXk6IG51bWJlcltdLCBvZmZzZXQ6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIGAoJHthcnJheVtvZmZzZXQgKyAwXX0sICR7YXJyYXlbb2Zmc2V0ICsgMV19LCAke2FycmF5W29mZnNldCArIDJdfSwgJHthcnJheVtvZmZzZXQgKyAzXX0pYDtcclxufVxyXG5cclxuZnVuY3Rpb24gQnVpbGRYZm9ybShtZXNoOiBNZXNoKSB7XHJcbiAgICBjb25zdCBuYW1lID0gXCJPYmplY3RfXCIgKyBtZXNoLnVuaXF1ZUlkO1xyXG4gICAgY29uc3QgbWF0cml4ID0gbWVzaC5nZXRXb3JsZE1hdHJpeCgpLmNsb25lKCk7XHJcblxyXG4gICAgaWYgKG1hdHJpeC5kZXRlcm1pbmFudCgpIDwgMCkge1xyXG4gICAgICAgIG1hdHJpeC5tdWx0aXBseVRvUmVmKE1hdHJpeC5TY2FsaW5nKC0xLCAxLCAxKSwgbWF0cml4KTtcclxuICAgIH1cclxuICAgIGNvbnN0IHRyYW5zZm9ybSA9IEJ1aWxkTWF0cml4KG1hdHJpeCk7XHJcblxyXG4gICAgcmV0dXJuIGBkZWYgWGZvcm0gXCIke25hbWV9XCIgKFxyXG5cdHByZXBlbmQgcmVmZXJlbmNlcyA9IEAuL2dlb21ldHJpZXMvR2VvbWV0cnlfJHttZXNoLmdlb21ldHJ5IS51bmlxdWVJZH0udXNkYUA8L0dlb21ldHJ5PlxyXG5cdHByZXBlbmQgYXBpU2NoZW1hcyA9IFtcIk1hdGVyaWFsQmluZGluZ0FQSVwiXVxyXG4pXHJcbntcclxuXHRtYXRyaXg0ZCB4Zm9ybU9wOnRyYW5zZm9ybSA9ICR7dHJhbnNmb3JtfVxyXG5cdHVuaWZvcm0gdG9rZW5bXSB4Zm9ybU9wT3JkZXIgPSBbXCJ4Zm9ybU9wOnRyYW5zZm9ybVwiXVx0XHJcblxyXG4gICAgcmVsIG1hdGVyaWFsOmJpbmRpbmcgPSA8L01hdGVyaWFscy9NYXRlcmlhbF8ke21lc2gubWF0ZXJpYWwhLnVuaXF1ZUlkfT5cclxufVxyXG5cclxuYDtcclxufVxyXG5cclxuZnVuY3Rpb24gQnVpbGRNYXRlcmlhbHMobWF0ZXJpYWxzOiB7IFtrZXk6IHN0cmluZ106IE1hdGVyaWFsIH0sIHRleHR1cmVUb0V4cG9ydHM6IHsgW2tleTogc3RyaW5nXTogQmFzZVRleHR1cmUgfSwgb3B0aW9uczogSVVTRFpFeHBvcnRPcHRpb25zKSB7XHJcbiAgICBjb25zdCBhcnJheSA9IFtdO1xyXG5cclxuICAgIGZvciAoY29uc3QgdXVpZCBpbiBtYXRlcmlhbHMpIHtcclxuICAgICAgICBjb25zdCBtYXRlcmlhbCA9IG1hdGVyaWFsc1t1dWlkXTtcclxuXHJcbiAgICAgICAgYXJyYXkucHVzaChCdWlsZE1hdGVyaWFsKG1hdGVyaWFsLCB0ZXh0dXJlVG9FeHBvcnRzLCBvcHRpb25zKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGBcclxuICAgIGRlZiBcIk1hdGVyaWFsc1wiXHJcbntcclxuJHthcnJheS5qb2luKFwiXCIpfVxyXG59XHJcblxyXG5gO1xyXG59XHJcblxyXG5mdW5jdGlvbiBCdWlsZFdyYXBwaW5nKHdyYXBwaW5nOiBudW1iZXIpIHtcclxuICAgIHN3aXRjaCAod3JhcHBpbmcpIHtcclxuICAgICAgICBjYXNlIENvbnN0YW50cy5URVhUVVJFX0NMQU1QX0FERFJFU1NNT0RFOlxyXG4gICAgICAgICAgICByZXR1cm4gXCJjbGFtcFwiO1xyXG4gICAgICAgIGNhc2UgQ29uc3RhbnRzLlRFWFRVUkVfTUlSUk9SX0FERFJFU1NNT0RFOlxyXG4gICAgICAgICAgICByZXR1cm4gXCJtaXJyb3JcIjtcclxuICAgICAgICBjYXNlIENvbnN0YW50cy5URVhUVVJFX1dSQVBfQUREUkVTU01PREU6XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIFwicmVwZWF0XCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEJ1aWxkQ29sb3I0KGNvbG9yOiBDb2xvcjMpIHtcclxuICAgIHJldHVybiBgKCR7Y29sb3Iucn0sICR7Y29sb3IuZ30sICR7Y29sb3IuYn0sIDEuMClgO1xyXG59XHJcblxyXG5mdW5jdGlvbiBCdWlsZFZlY3RvcjIodmVjdG9yOiBWZWN0b3IyKSB7XHJcbiAgICByZXR1cm4gYCgke3ZlY3Rvci54fSwgJHt2ZWN0b3IueX0pYDtcclxufVxyXG5cclxuZnVuY3Rpb24gQnVpbGRDb2xvcihjb2xvcjogQ29sb3IzKSB7XHJcbiAgICByZXR1cm4gYCgke2NvbG9yLnJ9LCAke2NvbG9yLmd9LCAke2NvbG9yLmJ9KWA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEJ1aWxkVGV4dHVyZShcclxuICAgIHRleHR1cmU6IFRleHR1cmUsXHJcbiAgICBtYXRlcmlhbDogTWF0ZXJpYWwsXHJcbiAgICBtYXBUeXBlOiBzdHJpbmcsXHJcbiAgICBjb2xvcjogTnVsbGFibGU8Q29sb3IzPixcclxuICAgIHRleHR1cmVUb0V4cG9ydHM6IHsgW2tleTogc3RyaW5nXTogQmFzZVRleHR1cmUgfSxcclxuICAgIG9wdGlvbnM6IElVU0RaRXhwb3J0T3B0aW9uc1xyXG4pIHtcclxuICAgIGNvbnN0IGlkID0gdGV4dHVyZS5nZXRJbnRlcm5hbFRleHR1cmUoKSEudW5pcXVlSWQgKyBcIl9cIiArIHRleHR1cmUuaW52ZXJ0WTtcclxuXHJcbiAgICB0ZXh0dXJlVG9FeHBvcnRzW2lkXSA9IHRleHR1cmU7XHJcblxyXG4gICAgY29uc3QgdXYgPSB0ZXh0dXJlLmNvb3JkaW5hdGVzSW5kZXggPiAwID8gXCJzdFwiICsgdGV4dHVyZS5jb29yZGluYXRlc0luZGV4IDogXCJzdFwiO1xyXG4gICAgY29uc3QgcmVwZWF0ID0gbmV3IFZlY3RvcjIodGV4dHVyZS51U2NhbGUsIHRleHR1cmUudlNjYWxlKTtcclxuICAgIGNvbnN0IG9mZnNldCA9IG5ldyBWZWN0b3IyKHRleHR1cmUudU9mZnNldCwgdGV4dHVyZS52T2Zmc2V0KTtcclxuICAgIGNvbnN0IHJvdGF0aW9uID0gdGV4dHVyZS53QW5nO1xyXG5cclxuICAgIC8vIHJvdGF0aW9uIGlzIGFyb3VuZCB0aGUgd3JvbmcgcG9pbnQuIGFmdGVyIHJvdGF0aW9uIHdlIG5lZWQgdG8gc2hpZnQgb2Zmc2V0IGFnYWluIHNvIHRoYXQgd2UncmUgcm90YXRpbmcgYXJvdW5kIHRoZSByaWdodCBzcG90XHJcbiAgICBjb25zdCB4Um90YXRpb25PZmZzZXQgPSBNYXRoLnNpbihyb3RhdGlvbik7XHJcbiAgICBjb25zdCB5Um90YXRpb25PZmZzZXQgPSBNYXRoLmNvcyhyb3RhdGlvbik7XHJcblxyXG4gICAgLy8gdGV4dHVyZSBjb29yZGluYXRlcyBzdGFydCBpbiB0aGUgb3Bwb3NpdGUgY29ybmVyLCBuZWVkIHRvIGNvcnJlY3RcclxuICAgIG9mZnNldC55ID0gMSAtIG9mZnNldC55IC0gcmVwZWF0Lnk7XHJcblxyXG4gICAgb2Zmc2V0LnggKz0geFJvdGF0aW9uT2Zmc2V0ICogcmVwZWF0Lng7XHJcbiAgICBvZmZzZXQueSArPSAoMSAtIHlSb3RhdGlvbk9mZnNldCkgKiByZXBlYXQueTtcclxuXHJcbiAgICByZXR1cm4gYFxyXG4gICAgZGVmIFNoYWRlciBcIlByaW12YXJSZWFkZXJfJHttYXBUeXBlfVwiXHJcbiAgICB7XHJcbiAgICAgICAgdW5pZm9ybSB0b2tlbiBpbmZvOmlkID0gXCJVc2RQcmltdmFyUmVhZGVyX2Zsb2F0MlwiXHJcbiAgICAgICAgZmxvYXQyIGlucHV0czpmYWxsYmFjayA9ICgwLjAsIDAuMClcclxuICAgICAgICB0b2tlbiBpbnB1dHM6dmFybmFtZSA9IFwiJHt1dn1cIlxyXG4gICAgICAgIGZsb2F0MiBvdXRwdXRzOnJlc3VsdFxyXG4gICAgfVxyXG5cclxuICAgIGRlZiBTaGFkZXIgXCJUcmFuc2Zvcm0yZF8ke21hcFR5cGV9XCJcclxuICAgIHtcclxuICAgICAgICB1bmlmb3JtIHRva2VuIGluZm86aWQgPSBcIlVzZFRyYW5zZm9ybTJkXCJcclxuICAgICAgICB0b2tlbiBpbnB1dHM6aW4uY29ubmVjdCA9IDwvTWF0ZXJpYWxzL01hdGVyaWFsXyR7bWF0ZXJpYWwudW5pcXVlSWR9L1ByaW12YXJSZWFkZXJfJHttYXBUeXBlfS5vdXRwdXRzOnJlc3VsdD5cclxuICAgICAgICBmbG9hdCBpbnB1dHM6cm90YXRpb24gPSAkeyhyb3RhdGlvbiAqICgxODAgLyBNYXRoLlBJKSkudG9GaXhlZChvcHRpb25zLnByZWNpc2lvbil9XHJcbiAgICAgICAgZmxvYXQyIGlucHV0czpzY2FsZSA9ICR7QnVpbGRWZWN0b3IyKHJlcGVhdCl9XHJcbiAgICAgICAgZmxvYXQyIGlucHV0czp0cmFuc2xhdGlvbiA9ICR7QnVpbGRWZWN0b3IyKG9mZnNldCl9XHJcbiAgICAgICAgZmxvYXQyIG91dHB1dHM6cmVzdWx0XHJcbiAgICB9XHJcblxyXG4gICAgZGVmIFNoYWRlciBcIlRleHR1cmVfJHt0ZXh0dXJlLnVuaXF1ZUlkfV8ke21hcFR5cGV9XCJcclxuICAgIHtcclxuICAgICAgICB1bmlmb3JtIHRva2VuIGluZm86aWQgPSBcIlVzZFVWVGV4dHVyZVwiXHJcbiAgICAgICAgYXNzZXQgaW5wdXRzOmZpbGUgPSBAdGV4dHVyZXMvVGV4dHVyZV8ke2lkfS5wbmdAXHJcbiAgICAgICAgZmxvYXQyIGlucHV0czpzdC5jb25uZWN0ID0gPC9NYXRlcmlhbHMvTWF0ZXJpYWxfJHttYXRlcmlhbC51bmlxdWVJZH0vVHJhbnNmb3JtMmRfJHttYXBUeXBlfS5vdXRwdXRzOnJlc3VsdD5cclxuICAgICAgICAke2NvbG9yID8gXCJmbG9hdDQgaW5wdXRzOnNjYWxlID0gXCIgKyBCdWlsZENvbG9yNChjb2xvcikgOiBcIlwifVxyXG4gICAgICAgIHRva2VuIGlucHV0czpzb3VyY2VDb2xvclNwYWNlID0gXCIke3RleHR1cmUuZ2FtbWFTcGFjZSA/IFwicmF3XCIgOiBcInNSR0JcIn1cIlxyXG4gICAgICAgIHRva2VuIGlucHV0czp3cmFwUyA9IFwiJHtCdWlsZFdyYXBwaW5nKHRleHR1cmUud3JhcFUpfVwiXHJcbiAgICAgICAgdG9rZW4gaW5wdXRzOndyYXBUID0gXCIke0J1aWxkV3JhcHBpbmcodGV4dHVyZS53cmFwVil9XCJcclxuICAgICAgICBmbG9hdCBvdXRwdXRzOnJcclxuICAgICAgICBmbG9hdCBvdXRwdXRzOmdcclxuICAgICAgICBmbG9hdCBvdXRwdXRzOmJcclxuICAgICAgICBmbG9hdDMgb3V0cHV0czpyZ2JcclxuICAgICAgICAke21hdGVyaWFsLm5lZWRBbHBoYUJsZW5kaW5nKCkgPyBcImZsb2F0IG91dHB1dHM6YVwiIDogXCJcIn1cclxuICAgIH1gO1xyXG59XHJcblxyXG5mdW5jdGlvbiBFeHRyYWN0VGV4dHVyZUluZm9ybWF0aW9ucyhtYXRlcmlhbDogTWF0ZXJpYWwpIHtcclxuICAgIGNvbnN0IGNsYXNzTmFtZSA9IG1hdGVyaWFsLmdldENsYXNzTmFtZSgpO1xyXG5cclxuICAgIHN3aXRjaCAoY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgY2FzZSBcIlN0YW5kYXJkTWF0ZXJpYWxcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGRpZmZ1c2VNYXA6IChtYXRlcmlhbCBhcyBTdGFuZGFyZE1hdGVyaWFsKS5kaWZmdXNlVGV4dHVyZSxcclxuICAgICAgICAgICAgICAgIGRpZmZ1c2U6IChtYXRlcmlhbCBhcyBTdGFuZGFyZE1hdGVyaWFsKS5kaWZmdXNlQ29sb3IsXHJcbiAgICAgICAgICAgICAgICBhbHBoYUN1dE9mZjogKG1hdGVyaWFsIGFzIFN0YW5kYXJkTWF0ZXJpYWwpLmFscGhhQ3V0T2ZmLFxyXG4gICAgICAgICAgICAgICAgZW1pc3NpdmVNYXA6IChtYXRlcmlhbCBhcyBTdGFuZGFyZE1hdGVyaWFsKS5lbWlzc2l2ZVRleHR1cmUsXHJcbiAgICAgICAgICAgICAgICBlbWlzc2l2ZTogKG1hdGVyaWFsIGFzIFN0YW5kYXJkTWF0ZXJpYWwpLmVtaXNzaXZlQ29sb3IsXHJcbiAgICAgICAgICAgICAgICByb3VnaG5lc3NNYXA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBub3JtYWxNYXA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBtZXRhbG5lc3NNYXA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICByb3VnaG5lc3M6IDEsXHJcbiAgICAgICAgICAgICAgICBtZXRhbG5lc3M6IDAsXHJcbiAgICAgICAgICAgICAgICBhb01hcDogbnVsbCxcclxuICAgICAgICAgICAgICAgIGFvTWFwSW50ZW5zaXR5OiAwLFxyXG4gICAgICAgICAgICAgICAgYWxwaGFNYXA6IChtYXRlcmlhbCBhcyBTdGFuZGFyZE1hdGVyaWFsKS5vcGFjaXR5VGV4dHVyZSxcclxuICAgICAgICAgICAgICAgIGlvcjogMSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIFwiUEJSTWF0ZXJpYWxcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGRpZmZ1c2VNYXA6IChtYXRlcmlhbCBhcyBQQlJNYXRlcmlhbCkuYWxiZWRvVGV4dHVyZSxcclxuICAgICAgICAgICAgICAgIGRpZmZ1c2U6IChtYXRlcmlhbCBhcyBQQlJNYXRlcmlhbCkuYWxiZWRvQ29sb3IsXHJcbiAgICAgICAgICAgICAgICBhbHBoYUN1dE9mZjogKG1hdGVyaWFsIGFzIFBCUk1hdGVyaWFsKS5hbHBoYUN1dE9mZixcclxuICAgICAgICAgICAgICAgIGVtaXNzaXZlTWFwOiAobWF0ZXJpYWwgYXMgUEJSTWF0ZXJpYWwpLmVtaXNzaXZlVGV4dHVyZSxcclxuICAgICAgICAgICAgICAgIGVtaXNzaXZlOiAobWF0ZXJpYWwgYXMgUEJSTWF0ZXJpYWwpLmVtaXNzaXZlQ29sb3IsXHJcbiAgICAgICAgICAgICAgICBub3JtYWxNYXA6IChtYXRlcmlhbCBhcyBQQlJNYXRlcmlhbCkuYnVtcFRleHR1cmUsXHJcbiAgICAgICAgICAgICAgICByb3VnaG5lc3NNYXA6IChtYXRlcmlhbCBhcyBQQlJNYXRlcmlhbCkubWV0YWxsaWNUZXh0dXJlLFxyXG4gICAgICAgICAgICAgICAgcm91Z2huZXNzQ2hhbm5lbDogKG1hdGVyaWFsIGFzIFBCUk1hdGVyaWFsKS51c2VSb3VnaG5lc3NGcm9tTWV0YWxsaWNUZXh0dXJlQWxwaGEgPyBcImFcIiA6IFwiZ1wiLFxyXG4gICAgICAgICAgICAgICAgcm91Z2huZXNzOiAobWF0ZXJpYWwgYXMgUEJSTWF0ZXJpYWwpLnJvdWdobmVzcyB8fCAxLFxyXG4gICAgICAgICAgICAgICAgbWV0YWxuZXNzTWFwOiAobWF0ZXJpYWwgYXMgUEJSTWF0ZXJpYWwpLm1ldGFsbGljVGV4dHVyZSxcclxuICAgICAgICAgICAgICAgIG1ldGFsbmVzc0NoYW5uZWw6IChtYXRlcmlhbCBhcyBQQlJNYXRlcmlhbCkudXNlTWV0YWxsbmVzc0Zyb21NZXRhbGxpY1RleHR1cmVCbHVlID8gXCJiXCIgOiBcInJcIixcclxuICAgICAgICAgICAgICAgIG1ldGFsbmVzczogKG1hdGVyaWFsIGFzIFBCUk1hdGVyaWFsKS5tZXRhbGxpYyB8fCAwLFxyXG4gICAgICAgICAgICAgICAgYW9NYXA6IChtYXRlcmlhbCBhcyBQQlJNYXRlcmlhbCkuYW1iaWVudFRleHR1cmUsXHJcbiAgICAgICAgICAgICAgICBhb01hcENoYW5uZWw6IChtYXRlcmlhbCBhcyBQQlJNYXRlcmlhbCkudXNlQW1iaWVudEluR3JheVNjYWxlID8gXCJyXCIgOiBcInJnYlwiLFxyXG4gICAgICAgICAgICAgICAgYW9NYXBJbnRlbnNpdHk6IChtYXRlcmlhbCBhcyBQQlJNYXRlcmlhbCkuYW1iaWVudFRleHR1cmVTdHJlbmd0aCxcclxuICAgICAgICAgICAgICAgIGFscGhhTWFwOiAobWF0ZXJpYWwgYXMgUEJSTWF0ZXJpYWwpLm9wYWNpdHlUZXh0dXJlLFxyXG4gICAgICAgICAgICAgICAgaW9yOiAobWF0ZXJpYWwgYXMgUEJSTWF0ZXJpYWwpLmluZGV4T2ZSZWZyYWN0aW9uLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgXCJQQlJNZXRhbGxpY1JvdWdobmVzc01hdGVyaWFsXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBkaWZmdXNlTWFwOiAobWF0ZXJpYWwgYXMgUEJSTWV0YWxsaWNSb3VnaG5lc3NNYXRlcmlhbCkuYmFzZVRleHR1cmUsXHJcbiAgICAgICAgICAgICAgICBkaWZmdXNlOiAobWF0ZXJpYWwgYXMgUEJSTWV0YWxsaWNSb3VnaG5lc3NNYXRlcmlhbCkuYmFzZUNvbG9yLFxyXG4gICAgICAgICAgICAgICAgYWxwaGFDdXRPZmY6IChtYXRlcmlhbCBhcyBQQlJNZXRhbGxpY1JvdWdobmVzc01hdGVyaWFsKS5hbHBoYUN1dE9mZixcclxuICAgICAgICAgICAgICAgIGVtaXNzaXZlTWFwOiAobWF0ZXJpYWwgYXMgUEJSTWV0YWxsaWNSb3VnaG5lc3NNYXRlcmlhbCkuZW1pc3NpdmVUZXh0dXJlLFxyXG4gICAgICAgICAgICAgICAgZW1pc3NpdmU6IChtYXRlcmlhbCBhcyBQQlJNZXRhbGxpY1JvdWdobmVzc01hdGVyaWFsKS5lbWlzc2l2ZUNvbG9yLFxyXG4gICAgICAgICAgICAgICAgbm9ybWFsTWFwOiAobWF0ZXJpYWwgYXMgUEJSTWV0YWxsaWNSb3VnaG5lc3NNYXRlcmlhbCkubm9ybWFsVGV4dHVyZSxcclxuICAgICAgICAgICAgICAgIHJvdWdobmVzc01hcDogKG1hdGVyaWFsIGFzIFBCUk1hdGVyaWFsKS5tZXRhbGxpY1RleHR1cmUsXHJcbiAgICAgICAgICAgICAgICByb3VnaG5lc3NDaGFubmVsOiAobWF0ZXJpYWwgYXMgUEJSTWF0ZXJpYWwpLnVzZVJvdWdobmVzc0Zyb21NZXRhbGxpY1RleHR1cmVBbHBoYSA/IFwiYVwiIDogXCJnXCIsXHJcbiAgICAgICAgICAgICAgICByb3VnaG5lc3M6IChtYXRlcmlhbCBhcyBQQlJNZXRhbGxpY1JvdWdobmVzc01hdGVyaWFsKS5yb3VnaG5lc3MgfHwgMSxcclxuICAgICAgICAgICAgICAgIG1ldGFsbmVzc01hcDogKG1hdGVyaWFsIGFzIFBCUk1hdGVyaWFsKS5tZXRhbGxpY1RleHR1cmUsXHJcbiAgICAgICAgICAgICAgICBtZXRhbG5lc3NDaGFubmVsOiAobWF0ZXJpYWwgYXMgUEJSTWF0ZXJpYWwpLnVzZU1ldGFsbG5lc3NGcm9tTWV0YWxsaWNUZXh0dXJlQmx1ZSA/IFwiYlwiIDogXCJyXCIsXHJcbiAgICAgICAgICAgICAgICBtZXRhbG5lc3M6IChtYXRlcmlhbCBhcyBQQlJNZXRhbGxpY1JvdWdobmVzc01hdGVyaWFsKS5tZXRhbGxpYyB8fCAwLFxyXG4gICAgICAgICAgICAgICAgYW9NYXA6IChtYXRlcmlhbCBhcyBQQlJNYXRlcmlhbCkuYW1iaWVudFRleHR1cmUsXHJcbiAgICAgICAgICAgICAgICBhb01hcENoYW5uZWw6IChtYXRlcmlhbCBhcyBQQlJNYXRlcmlhbCkudXNlQW1iaWVudEluR3JheVNjYWxlID8gXCJyXCIgOiBcInJnYlwiLFxyXG4gICAgICAgICAgICAgICAgYW9NYXBJbnRlbnNpdHk6IChtYXRlcmlhbCBhcyBQQlJNYXRlcmlhbCkuYW1iaWVudFRleHR1cmVTdHJlbmd0aCxcclxuICAgICAgICAgICAgICAgIGFscGhhTWFwOiAobWF0ZXJpYWwgYXMgUEJSTWF0ZXJpYWwpLm9wYWNpdHlUZXh0dXJlLFxyXG4gICAgICAgICAgICAgICAgaW9yOiAobWF0ZXJpYWwgYXMgUEJSTWF0ZXJpYWwpLmluZGV4T2ZSZWZyYWN0aW9uLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBkaWZmdXNlTWFwOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgZGlmZnVzZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIGVtaXNzaXZlTWFwOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgZW1pc3NlbWlzc2l2ZWl2ZUNvbG9yOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgbm9ybWFsTWFwOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgcm91Z2huZXNzTWFwOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgbWV0YWxuZXNzTWFwOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgYWxwaGFDdXRPZmY6IDAsXHJcbiAgICAgICAgICAgICAgICByb3VnaG5lc3M6IDAsXHJcbiAgICAgICAgICAgICAgICBtZXRhbG5lc3M6IDAsXHJcbiAgICAgICAgICAgICAgICBhb01hcDogbnVsbCxcclxuICAgICAgICAgICAgICAgIGFvTWFwSW50ZW5zaXR5OiAwLFxyXG4gICAgICAgICAgICAgICAgYWxwaGFNYXA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBpb3I6IDEsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEJ1aWxkTWF0ZXJpYWwobWF0ZXJpYWw6IE1hdGVyaWFsLCB0ZXh0dXJlVG9FeHBvcnRzOiB7IFtrZXk6IHN0cmluZ106IEJhc2VUZXh0dXJlIH0sIG9wdGlvbnM6IElVU0RaRXhwb3J0T3B0aW9ucykge1xyXG4gICAgLy8gaHR0cHM6Ly9ncmFwaGljcy5waXhhci5jb20vdXNkL2RvY3MvVXNkUHJldmlld1N1cmZhY2UtUHJvcG9zYWwuaHRtbFxyXG5cclxuICAgIGNvbnN0IHBhZCA9IFwiXHRcdFx0XCI7XHJcbiAgICBjb25zdCBpbnB1dHMgPSBbXTtcclxuICAgIGNvbnN0IHNhbXBsZXJzID0gW107XHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGRpZmZ1c2VNYXAsXHJcbiAgICAgICAgZGlmZnVzZSxcclxuICAgICAgICBhbHBoYUN1dE9mZixcclxuICAgICAgICBlbWlzc2l2ZU1hcCxcclxuICAgICAgICBlbWlzc2l2ZSxcclxuICAgICAgICBub3JtYWxNYXAsXHJcbiAgICAgICAgcm91Z2huZXNzTWFwLFxyXG4gICAgICAgIHJvdWdobmVzc0NoYW5uZWwsXHJcbiAgICAgICAgcm91Z2huZXNzLFxyXG4gICAgICAgIG1ldGFsbmVzc01hcCxcclxuICAgICAgICBtZXRhbG5lc3NDaGFubmVsLFxyXG4gICAgICAgIG1ldGFsbmVzcyxcclxuICAgICAgICBhb01hcCxcclxuICAgICAgICBhb01hcENoYW5uZWwsXHJcbiAgICAgICAgYW9NYXBJbnRlbnNpdHksXHJcbiAgICAgICAgYWxwaGFNYXAsXHJcbiAgICAgICAgaW9yLFxyXG4gICAgfSA9IEV4dHJhY3RUZXh0dXJlSW5mb3JtYXRpb25zKG1hdGVyaWFsKTtcclxuXHJcbiAgICBpZiAoZGlmZnVzZU1hcCAhPT0gbnVsbCkge1xyXG4gICAgICAgIGlucHV0cy5wdXNoKGAke3BhZH1jb2xvcjNmIGlucHV0czpkaWZmdXNlQ29sb3IuY29ubmVjdCA9IDwvTWF0ZXJpYWxzL01hdGVyaWFsXyR7bWF0ZXJpYWwudW5pcXVlSWR9L1RleHR1cmVfJHtkaWZmdXNlTWFwLnVuaXF1ZUlkfV9kaWZmdXNlLm91dHB1dHM6cmdiPmApO1xyXG5cclxuICAgICAgICBpZiAobWF0ZXJpYWwubmVlZEFscGhhQmxlbmRpbmcoKSkge1xyXG4gICAgICAgICAgICBpbnB1dHMucHVzaChgJHtwYWR9ZmxvYXQgaW5wdXRzOm9wYWNpdHkuY29ubmVjdCA9IDwvTWF0ZXJpYWxzL01hdGVyaWFsXyR7bWF0ZXJpYWwudW5pcXVlSWR9L1RleHR1cmVfJHtkaWZmdXNlTWFwLnVuaXF1ZUlkfV9kaWZmdXNlLm91dHB1dHM6YT5gKTtcclxuICAgICAgICB9IGVsc2UgaWYgKG1hdGVyaWFsLm5lZWRBbHBoYVRlc3RpbmcoKSkge1xyXG4gICAgICAgICAgICBpbnB1dHMucHVzaChgJHtwYWR9ZmxvYXQgaW5wdXRzOm9wYWNpdHkuY29ubmVjdCA9IDwvTWF0ZXJpYWxzL01hdGVyaWFsXyR7bWF0ZXJpYWwudW5pcXVlSWR9L1RleHR1cmVfJHtkaWZmdXNlTWFwLnVuaXF1ZUlkfV9kaWZmdXNlLm91dHB1dHM6YT5gKTtcclxuICAgICAgICAgICAgaW5wdXRzLnB1c2goYCR7cGFkfWZsb2F0IGlucHV0czpvcGFjaXR5VGhyZXNob2xkID0gJHthbHBoYUN1dE9mZn1gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNhbXBsZXJzLnB1c2goQnVpbGRUZXh0dXJlKGRpZmZ1c2VNYXAgYXMgVGV4dHVyZSwgbWF0ZXJpYWwsIFwiZGlmZnVzZVwiLCBkaWZmdXNlLCB0ZXh0dXJlVG9FeHBvcnRzLCBvcHRpb25zKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlucHV0cy5wdXNoKGAke3BhZH1jb2xvcjNmIGlucHV0czpkaWZmdXNlQ29sb3IgPSAke0J1aWxkQ29sb3IoZGlmZnVzZSB8fCBDb2xvcjMuV2hpdGUoKSl9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGVtaXNzaXZlTWFwICE9PSBudWxsKSB7XHJcbiAgICAgICAgaW5wdXRzLnB1c2goYCR7cGFkfWNvbG9yM2YgaW5wdXRzOmVtaXNzaXZlQ29sb3IuY29ubmVjdCA9IDwvTWF0ZXJpYWxzL01hdGVyaWFsXyR7bWF0ZXJpYWwudW5pcXVlSWR9L1RleHR1cmVfJHtlbWlzc2l2ZU1hcC51bmlxdWVJZH1fZW1pc3NpdmUub3V0cHV0czpyZ2I+YCk7XHJcblxyXG4gICAgICAgIHNhbXBsZXJzLnB1c2goQnVpbGRUZXh0dXJlKGVtaXNzaXZlTWFwIGFzIFRleHR1cmUsIG1hdGVyaWFsLCBcImVtaXNzaXZlXCIsIGVtaXNzaXZlLCB0ZXh0dXJlVG9FeHBvcnRzLCBvcHRpb25zKSk7XHJcbiAgICB9IGVsc2UgaWYgKGVtaXNzaXZlICYmIGVtaXNzaXZlLnRvTHVtaW5hbmNlKCkgPiAwKSB7XHJcbiAgICAgICAgaW5wdXRzLnB1c2goYCR7cGFkfWNvbG9yM2YgaW5wdXRzOmVtaXNzaXZlQ29sb3IgPSAke0J1aWxkQ29sb3IoZW1pc3NpdmUpfWApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChub3JtYWxNYXAgIT09IG51bGwpIHtcclxuICAgICAgICBpbnB1dHMucHVzaChgJHtwYWR9bm9ybWFsM2YgaW5wdXRzOm5vcm1hbC5jb25uZWN0ID0gPC9NYXRlcmlhbHMvTWF0ZXJpYWxfJHttYXRlcmlhbC51bmlxdWVJZH0vVGV4dHVyZV8ke25vcm1hbE1hcC51bmlxdWVJZH1fbm9ybWFsLm91dHB1dHM6cmdiPmApO1xyXG5cclxuICAgICAgICBzYW1wbGVycy5wdXNoKEJ1aWxkVGV4dHVyZShub3JtYWxNYXAgYXMgVGV4dHVyZSwgbWF0ZXJpYWwsIFwibm9ybWFsXCIsIG51bGwsIHRleHR1cmVUb0V4cG9ydHMsIG9wdGlvbnMpKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYW9NYXAgIT09IG51bGwpIHtcclxuICAgICAgICBpbnB1dHMucHVzaChgJHtwYWR9ZmxvYXQgaW5wdXRzOm9jY2x1c2lvbi5jb25uZWN0ID0gPC9NYXRlcmlhbHMvTWF0ZXJpYWxfJHttYXRlcmlhbC51bmlxdWVJZH0vVGV4dHVyZV8ke2FvTWFwLnVuaXF1ZUlkfV9vY2NsdXNpb24ub3V0cHV0czoke2FvTWFwQ2hhbm5lbH0+YCk7XHJcblxyXG4gICAgICAgIHNhbXBsZXJzLnB1c2goQnVpbGRUZXh0dXJlKGFvTWFwIGFzIFRleHR1cmUsIG1hdGVyaWFsLCBcIm9jY2x1c2lvblwiLCBuZXcgQ29sb3IzKGFvTWFwSW50ZW5zaXR5LCBhb01hcEludGVuc2l0eSwgYW9NYXBJbnRlbnNpdHkpLCB0ZXh0dXJlVG9FeHBvcnRzLCBvcHRpb25zKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJvdWdobmVzc01hcCAhPT0gbnVsbCkge1xyXG4gICAgICAgIGlucHV0cy5wdXNoKGAke3BhZH1mbG9hdCBpbnB1dHM6cm91Z2huZXNzLmNvbm5lY3QgPSA8L01hdGVyaWFscy9NYXRlcmlhbF8ke21hdGVyaWFsLnVuaXF1ZUlkfS9UZXh0dXJlXyR7cm91Z2huZXNzTWFwLnVuaXF1ZUlkfV9yb3VnaG5lc3Mub3V0cHV0czoke3JvdWdobmVzc0NoYW5uZWx9PmApO1xyXG5cclxuICAgICAgICBzYW1wbGVycy5wdXNoKEJ1aWxkVGV4dHVyZShyb3VnaG5lc3NNYXAgYXMgVGV4dHVyZSwgbWF0ZXJpYWwsIFwicm91Z2huZXNzXCIsIG5ldyBDb2xvcjMocm91Z2huZXNzLCByb3VnaG5lc3MsIHJvdWdobmVzcyksIHRleHR1cmVUb0V4cG9ydHMsIG9wdGlvbnMpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaW5wdXRzLnB1c2goYCR7cGFkfWZsb2F0IGlucHV0czpyb3VnaG5lc3MgPSAke3JvdWdobmVzc31gKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobWV0YWxuZXNzTWFwICE9PSBudWxsKSB7XHJcbiAgICAgICAgaW5wdXRzLnB1c2goYCR7cGFkfWZsb2F0IGlucHV0czptZXRhbGxpYy5jb25uZWN0ID0gPC9NYXRlcmlhbHMvTWF0ZXJpYWxfJHttYXRlcmlhbC51bmlxdWVJZH0vVGV4dHVyZV8ke21ldGFsbmVzc01hcC51bmlxdWVJZH1fbWV0YWxsaWMub3V0cHV0czoke21ldGFsbmVzc0NoYW5uZWx9PmApO1xyXG5cclxuICAgICAgICBzYW1wbGVycy5wdXNoKEJ1aWxkVGV4dHVyZShtZXRhbG5lc3NNYXAgYXMgVGV4dHVyZSwgbWF0ZXJpYWwsIFwibWV0YWxsaWNcIiwgbmV3IENvbG9yMyhtZXRhbG5lc3MsIG1ldGFsbmVzcywgbWV0YWxuZXNzKSwgdGV4dHVyZVRvRXhwb3J0cywgb3B0aW9ucykpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBpbnB1dHMucHVzaChgJHtwYWR9ZmxvYXQgaW5wdXRzOm1ldGFsbGljID0gJHttZXRhbG5lc3N9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFscGhhTWFwICE9PSBudWxsKSB7XHJcbiAgICAgICAgaW5wdXRzLnB1c2goYCR7cGFkfWZsb2F0IGlucHV0czpvcGFjaXR5LmNvbm5lY3QgPSA8L01hdGVyaWFscy9NYXRlcmlhbF8ke21hdGVyaWFsLnVuaXF1ZUlkfS9UZXh0dXJlXyR7YWxwaGFNYXAudW5pcXVlSWR9X29wYWNpdHkub3V0cHV0czpyPmApO1xyXG4gICAgICAgIGlucHV0cy5wdXNoKGAke3BhZH1mbG9hdCBpbnB1dHM6b3BhY2l0eVRocmVzaG9sZCA9IDAuMDAwMWApO1xyXG5cclxuICAgICAgICBzYW1wbGVycy5wdXNoKEJ1aWxkVGV4dHVyZShhbHBoYU1hcCBhcyBUZXh0dXJlLCBtYXRlcmlhbCwgXCJvcGFjaXR5XCIsIG51bGwsIHRleHR1cmVUb0V4cG9ydHMsIG9wdGlvbnMpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaW5wdXRzLnB1c2goYCR7cGFkfWZsb2F0IGlucHV0czpvcGFjaXR5ID0gJHttYXRlcmlhbC5hbHBoYX1gKTtcclxuICAgIH1cclxuXHJcbiAgICBpbnB1dHMucHVzaChgJHtwYWR9ZmxvYXQgaW5wdXRzOmlvciA9ICR7aW9yfWApO1xyXG5cclxuICAgIHJldHVybiBgXHJcblx0ZGVmIE1hdGVyaWFsIFwiTWF0ZXJpYWxfJHttYXRlcmlhbC51bmlxdWVJZH1cIlxyXG5cdHtcclxuXHRcdGRlZiBTaGFkZXIgXCJQcmV2aWV3U3VyZmFjZVwiXHJcblx0XHR7XHJcblx0XHRcdHVuaWZvcm0gdG9rZW4gaW5mbzppZCA9IFwiVXNkUHJldmlld1N1cmZhY2VcIlxyXG4ke2lucHV0cy5qb2luKFwiXFxuXCIpfVxyXG5cdFx0XHRpbnQgaW5wdXRzOnVzZVNwZWN1bGFyV29ya2Zsb3cgPSAwXHJcblx0XHRcdHRva2VuIG91dHB1dHM6c3VyZmFjZVxyXG5cdFx0fVxyXG5cclxuXHRcdHRva2VuIG91dHB1dHM6c3VyZmFjZS5jb25uZWN0ID0gPC9NYXRlcmlhbHMvTWF0ZXJpYWxfJHttYXRlcmlhbC51bmlxdWVJZH0vUHJldmlld1N1cmZhY2Uub3V0cHV0czpzdXJmYWNlPlxyXG5cclxuJHtzYW1wbGVycy5qb2luKFwiXFxuXCIpfVxyXG5cclxuXHR9XHJcbmA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEJ1aWxkQ2FtZXJhKGNhbWVyYTogQ2FtZXJhLCBvcHRpb25zOiBJVVNEWkV4cG9ydE9wdGlvbnMpIHtcclxuICAgIGNvbnN0IG5hbWUgPSBcIkNhbWVyYV9cIiArIGNhbWVyYS51bmlxdWVJZDtcclxuICAgIGNvbnN0IG1hdHJpeCA9IE1hdHJpeC5Sb3RhdGlvblkoTWF0aC5QSSkubXVsdGlwbHkoY2FtZXJhLmdldFdvcmxkTWF0cml4KCkpOyAvLyB3b3JrIHRvd2FyZHMgcG9zaXRpdmUgelxyXG5cclxuICAgIGNvbnN0IHRyYW5zZm9ybSA9IEJ1aWxkTWF0cml4KG1hdHJpeCk7XHJcblxyXG4gICAgaWYgKGNhbWVyYS5tb2RlID09PSBDb25zdGFudHMuT1JUSE9HUkFQSElDX0NBTUVSQSkge1xyXG4gICAgICAgIHJldHVybiBgZGVmIENhbWVyYSBcIiR7bmFtZX1cIlxyXG5cdFx0e1xyXG5cdFx0XHRtYXRyaXg0ZCB4Zm9ybU9wOnRyYW5zZm9ybSA9ICR7dHJhbnNmb3JtfVxyXG5cdFx0XHR1bmlmb3JtIHRva2VuW10geGZvcm1PcE9yZGVyID0gW1wieGZvcm1PcDp0cmFuc2Zvcm1cIl1cclxuXHJcblx0XHRcdGZsb2F0MiBjbGlwcGluZ1JhbmdlID0gKCR7Y2FtZXJhLm1pbloudG9QcmVjaXNpb24ob3B0aW9ucy5wcmVjaXNpb24pfSwgJHtjYW1lcmEubWF4Wi50b1ByZWNpc2lvbihvcHRpb25zLnByZWNpc2lvbil9KVxyXG5cdFx0XHRmbG9hdCBob3Jpem9udGFsQXBlcnR1cmUgPSAkeygoTWF0aC5hYnMoY2FtZXJhLm9ydGhvTGVmdCB8fCAxKSArIE1hdGguYWJzKGNhbWVyYS5vcnRob1JpZ2h0IHx8IDEpKSAqIDEwKS50b1ByZWNpc2lvbihvcHRpb25zLnByZWNpc2lvbil9XHJcblx0XHRcdGZsb2F0IHZlcnRpY2FsQXBlcnR1cmUgPSAkeygoTWF0aC5hYnMoY2FtZXJhLm9ydGhvVG9wIHx8IDEpICsgTWF0aC5hYnMoY2FtZXJhLm9ydGhvQm90dG9tIHx8IDEpKSAqIDEwKS50b1ByZWNpc2lvbihvcHRpb25zLnByZWNpc2lvbil9XHJcblx0XHRcdHRva2VuIHByb2plY3Rpb24gPSBcIm9ydGhvZ3JhcGhpY1wiXHJcblx0XHR9XHJcblx0XHJcblx0YDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgYXNwZWN0ID0gY2FtZXJhLmdldEVuZ2luZSgpLmdldEFzcGVjdFJhdGlvKGNhbWVyYSk7XHJcbiAgICAgICAgY29uc3Qgc2Vuc29yd2lkdGggPSBvcHRpb25zLmNhbWVyYVNlbnNvcldpZHRoIHx8IDM1O1xyXG5cclxuICAgICAgICByZXR1cm4gYGRlZiBDYW1lcmEgXCIke25hbWV9XCJcclxuXHRcdHtcclxuXHRcdFx0bWF0cml4NGQgeGZvcm1PcDp0cmFuc2Zvcm0gPSAke3RyYW5zZm9ybX1cclxuXHRcdFx0dW5pZm9ybSB0b2tlbltdIHhmb3JtT3BPcmRlciA9IFtcInhmb3JtT3A6dHJhbnNmb3JtXCJdXHJcblxyXG5cdFx0XHRmbG9hdDIgY2xpcHBpbmdSYW5nZSA9ICgke2NhbWVyYS5taW5aLnRvUHJlY2lzaW9uKG9wdGlvbnMucHJlY2lzaW9uKX0sICR7Y2FtZXJhLm1heFoudG9QcmVjaXNpb24ob3B0aW9ucy5wcmVjaXNpb24pfSlcclxuXHRcdFx0ZmxvYXQgZm9jYWxMZW5ndGggPSAkeyhzZW5zb3J3aWR0aCAvICgyICogTWF0aC50YW4oY2FtZXJhLmZvdiAqIDAuNSkpKS50b1ByZWNpc2lvbihvcHRpb25zLnByZWNpc2lvbil9XHJcbiAgICAgICAgICAgIHRva2VuIHByb2plY3Rpb24gPSBcInBlcnNwZWN0aXZlXCJcclxuXHRcdFx0ZmxvYXQgaG9yaXpvbnRhbEFwZXJ0dXJlID0gJHsoc2Vuc29yd2lkdGggKiBhc3BlY3QpLnRvUHJlY2lzaW9uKG9wdGlvbnMucHJlY2lzaW9uKX1cclxuXHRcdFx0ZmxvYXQgdmVydGljYWxBcGVydHVyZSA9ICR7KHNlbnNvcndpZHRoIC8gYXNwZWN0KS50b1ByZWNpc2lvbihvcHRpb25zLnByZWNpc2lvbil9ICAgICAgICAgICAgXHJcblx0XHR9XHJcblx0XHJcblx0YDtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSBzY2VuZSBzY2VuZSB0byBleHBvcnRcclxuICogQHBhcmFtIG9wdGlvbnMgb3B0aW9ucyB0byBjb25maWd1cmUgdGhlIGV4cG9ydFxyXG4gKiBAcGFyYW0gbWVzaFByZWRpY2F0ZSBwcmVkaWNhdGUgdG8gZmlsdGVyIHRoZSBtZXNoZXMgdG8gZXhwb3J0XHJcbiAqIEByZXR1cm5zIGEgdWludDggYXJyYXkgY29udGFpbmluZyB0aGUgVVNEWiBmaWxlXHJcbiAqIEBzZWUgW1NpbXBsZSBzcGhlcmVdKGh0dHBzOi8vcGxheWdyb3VuZC5iYWJ5bG9uanMuY29tLyNIMkc1WFcjNilcclxuICogQHNlZSBbUmVkIHNwaGVyZV0oaHR0cHM6Ly9wbGF5Z3JvdW5kLmJhYnlsb25qcy5jb20vI0gyRzVYVyM3KVxyXG4gKiBAc2VlIFtCb29tYm94XShodHRwczovL3BsYXlncm91bmQuYmFieWxvbmpzLmNvbS8jNU4zUldLIzUpXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gVVNEWkV4cG9ydEFzeW5jKHNjZW5lOiBTY2VuZSwgb3B0aW9uczogUGFydGlhbDxJVVNEWkV4cG9ydE9wdGlvbnM+LCBtZXNoUHJlZGljYXRlPzogKG06IE1lc2gpID0+IGJvb2xlYW4pOiBQcm9taXNlPFVpbnQ4QXJyYXk+IHtcclxuICAgIGNvbnN0IGxvY2FsT3B0aW9ucyA9IHtcclxuICAgICAgICBmZmxhdGVVcmw6IFwiaHR0cHM6Ly91bnBrZy5jb20vZmZsYXRlQDAuOC4yXCIsXHJcbiAgICAgICAgaW5jbHVkZUFuY2hvcmluZ1Byb3BlcnRpZXM6IHRydWUsXHJcbiAgICAgICAgYW5jaG9yaW5nVHlwZTogXCJwbGFuZVwiLFxyXG4gICAgICAgIHBsYW5lQW5jaG9yaW5nQWxpZ25tZW50OiBcImhvcml6b250YWxcIixcclxuICAgICAgICBtb2RlbEZpbGVOYW1lOiBcIm1vZGVsLnVzZGFcIixcclxuICAgICAgICBwcmVjaXNpb246IDUsXHJcbiAgICAgICAgZXhwb3J0Q2FtZXJhOiBmYWxzZSxcclxuICAgICAgICBjYW1lcmFTZW5zb3JXaWR0aDogMzUsXHJcbiAgICAgICAgLi4ub3B0aW9ucyxcclxuICAgIH07XHJcblxyXG4gICAgLy8gR2V0IHRoZSBmZmxhdGUgbGlicmFyeVxyXG4gICAgaWYgKHR5cGVvZiBmZmxhdGUgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICBhd2FpdCBUb29scy5Mb2FkU2NyaXB0QXN5bmMobG9jYWxPcHRpb25zLmZmbGF0ZVVybCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU3RhcnQgdGhlIGV4cG9ydFxyXG4gICAgY29uc3QgZmlsZXM6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7fTtcclxuXHJcbiAgICAvLyBtb2RlbCBmaWxlIHNob3VsZCBiZSBmaXJzdCBpbiBVU0RaIGFyY2hpdmUgc28gd2UgaW5pdCBpdCBoZXJlXHJcbiAgICBmaWxlc1tsb2NhbE9wdGlvbnMubW9kZWxGaWxlTmFtZV0gPSBudWxsO1xyXG5cclxuICAgIGxldCBvdXRwdXQgPSBCdWlsZEhlYWRlcigpO1xyXG4gICAgb3V0cHV0ICs9IEJ1aWxkU2NlbmVTdGFydChsb2NhbE9wdGlvbnMpO1xyXG5cclxuICAgIGNvbnN0IG1hdGVyaWFsVG9FeHBvcnRzOiB7IFtrZXk6IHN0cmluZ106IE1hdGVyaWFsIH0gPSB7fTtcclxuXHJcbiAgICAvLyBNZXNoZXNcclxuICAgIGZvciAoY29uc3QgYWJzdHJhY3RNZXNoIG9mIHNjZW5lLm1lc2hlcykge1xyXG4gICAgICAgIGlmIChhYnN0cmFjdE1lc2guZ2V0VG90YWxWZXJ0aWNlcygpID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBtZXNoID0gYWJzdHJhY3RNZXNoIGFzIE1lc2g7XHJcbiAgICAgICAgY29uc3QgZ2VvbWV0cnkgPSBtZXNoLmdlb21ldHJ5O1xyXG4gICAgICAgIGNvbnN0IG1hdGVyaWFsID0gbWVzaC5tYXRlcmlhbDtcclxuXHJcbiAgICAgICAgaWYgKCFtYXRlcmlhbCB8fCAhZ2VvbWV0cnkgfHwgKG1lc2hQcmVkaWNhdGUgJiYgIW1lc2hQcmVkaWNhdGUobWVzaCkpKSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc3VwcG9ydGVkTWF0ZXJpYWxzID0gW1wiU3RhbmRhcmRNYXRlcmlhbFwiLCBcIlBCUk1hdGVyaWFsXCIsIFwiUEJSTWV0YWxsaWNSb3VnaG5lc3NNYXRlcmlhbFwiXTtcclxuXHJcbiAgICAgICAgaWYgKHN1cHBvcnRlZE1hdGVyaWFscy5pbmRleE9mKG1hdGVyaWFsLmdldENsYXNzTmFtZSgpKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgY29uc3QgZ2VvbWV0cnlGaWxlTmFtZSA9IFwiZ2VvbWV0cmllcy9HZW9tZXRyeV9cIiArIGdlb21ldHJ5LnVuaXF1ZUlkICsgXCIudXNkYVwiO1xyXG5cclxuICAgICAgICAgICAgaWYgKCEoZ2VvbWV0cnlGaWxlTmFtZSBpbiBmaWxlcykpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1lc2hPYmplY3QgPSBCdWlsZE1lc2hPYmplY3QoZ2VvbWV0cnksIGxvY2FsT3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICBmaWxlc1tnZW9tZXRyeUZpbGVOYW1lXSA9IEJ1aWxkVVNERmlsZUFzU3RyaW5nKG1lc2hPYmplY3QpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIShtYXRlcmlhbC51bmlxdWVJZCBpbiBtYXRlcmlhbFRvRXhwb3J0cykpIHtcclxuICAgICAgICAgICAgICAgIG1hdGVyaWFsVG9FeHBvcnRzW21hdGVyaWFsLnVuaXF1ZUlkXSA9IG1hdGVyaWFsO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBvdXRwdXQgKz0gQnVpbGRYZm9ybShtZXNoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBUb29scy5XYXJuKFwiVVNEWkV4cG9ydEFzeW5jIGRvZXMgbm90IHN1cHBvcnQgdGhpcyBtYXRlcmlhbCB0eXBlOiBcIiArIG1hdGVyaWFsLmdldENsYXNzTmFtZSgpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2FtZXJhXHJcbiAgICBpZiAoc2NlbmUuYWN0aXZlQ2FtZXJhICYmIGxvY2FsT3B0aW9ucy5leHBvcnRDYW1lcmEpIHtcclxuICAgICAgICBvdXRwdXQgKz0gQnVpbGRDYW1lcmEoc2NlbmUuYWN0aXZlQ2FtZXJhLCBsb2NhbE9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENsb3NlIHNjZW5lXHJcbiAgICBvdXRwdXQgKz0gQnVpbGRTY2VuZUVuZCgpO1xyXG5cclxuICAgIC8vIE1hdGVyaWFsc1xyXG4gICAgY29uc3QgdGV4dHVyZVRvRXhwb3J0czogeyBba2V5OiBzdHJpbmddOiBCYXNlVGV4dHVyZSB9ID0ge307XHJcbiAgICBvdXRwdXQgKz0gQnVpbGRNYXRlcmlhbHMobWF0ZXJpYWxUb0V4cG9ydHMsIHRleHR1cmVUb0V4cG9ydHMsIGxvY2FsT3B0aW9ucyk7XHJcblxyXG4gICAgLy8gQ29tcHJlc3NcclxuICAgIGZpbGVzW2xvY2FsT3B0aW9ucy5tb2RlbEZpbGVOYW1lXSA9IGZmbGF0ZS5zdHJUb1U4KG91dHB1dCk7XHJcblxyXG4gICAgLy8gVGV4dHVyZXNcclxuICAgIGZvciAoY29uc3QgaWQgaW4gdGV4dHVyZVRvRXhwb3J0cykge1xyXG4gICAgICAgIGNvbnN0IHRleHR1cmUgPSB0ZXh0dXJlVG9FeHBvcnRzW2lkXTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2l6ZSA9IHRleHR1cmUuZ2V0U2l6ZSgpO1xyXG4gICAgICAgIGNvbnN0IHRleHR1cmVEYXRhID0gYXdhaXQgdGV4dHVyZS5yZWFkUGl4ZWxzKCk7XHJcblxyXG4gICAgICAgIGlmICghdGV4dHVyZURhdGEpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGV4dHVyZSBkYXRhIGlzIG5vdCBhdmFpbGFibGVcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBmaWxlQ29udGVudCA9IGF3YWl0IER1bXBUb29scy5EdW1wRGF0YUFzeW5jKHNpemUud2lkdGgsIHNpemUuaGVpZ2h0LCB0ZXh0dXJlRGF0YSwgXCJpbWFnZS9wbmdcIiwgdW5kZWZpbmVkLCBmYWxzZSwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIGZpbGVzW2B0ZXh0dXJlcy9UZXh0dXJlXyR7aWR9LnBuZ2BdID0gbmV3IFVpbnQ4QXJyYXkoZmlsZUNvbnRlbnQgYXMgQXJyYXlCdWZmZXIpLnNsaWNlKCk7IC8vIFRoaXMgaXMgdG8gYXZvaWQgZ2V0dGluZyBhIGxpbmsgYW5kIG5vdCBhIGNvcHlcclxuICAgIH1cclxuXHJcbiAgICAvLyA2NCBieXRlIGFsaWdubWVudFxyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tLzEwMWFycm93ei9mZmxhdGUvaXNzdWVzLzM5I2lzc3VlY29tbWVudC03NzcyNjMxMDlcclxuXHJcbiAgICBsZXQgb2Zmc2V0ID0gMDtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGZpbGVuYW1lIGluIGZpbGVzKSB7XHJcbiAgICAgICAgY29uc3QgZmlsZSA9IGZpbGVzW2ZpbGVuYW1lXTtcclxuICAgICAgICBpZiAoIWZpbGUpIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGhlYWRlclNpemUgPSAzNCArIGZpbGVuYW1lLmxlbmd0aDtcclxuXHJcbiAgICAgICAgb2Zmc2V0ICs9IGhlYWRlclNpemU7XHJcblxyXG4gICAgICAgIGNvbnN0IG9mZnNldE1vZDY0ID0gb2Zmc2V0ICYgNjM7XHJcblxyXG4gICAgICAgIGlmIChvZmZzZXRNb2Q2NCAhPT0gNCkge1xyXG4gICAgICAgICAgICBjb25zdCBwYWRMZW5ndGggPSA2NCAtIG9mZnNldE1vZDY0O1xyXG4gICAgICAgICAgICBjb25zdCBwYWRkaW5nID0gbmV3IFVpbnQ4QXJyYXkocGFkTGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuICAgICAgICAgICAgZmlsZXNbZmlsZW5hbWVdID0gW2ZpbGUsIHsgZXh0cmE6IHsgMTIzNDU6IHBhZGRpbmcgfSB9XTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9mZnNldCA9IGZpbGUubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmZmxhdGUuemlwU3luYyhmaWxlcywgeyBsZXZlbDogMCB9KTtcclxufVxyXG4iLCJpbXBvcnQgdHlwZSB7IElOb2RlLCBJRVhUTWVzaEdwdUluc3RhbmNpbmcgfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IEFjY2Vzc29yVHlwZSwgQWNjZXNzb3JDb21wb25lbnRUeXBlIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgdHlwZSB7IElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMiB9IGZyb20gXCIuLi9nbFRGRXhwb3J0ZXJFeHRlbnNpb25cIjtcclxuaW1wb3J0IHR5cGUgeyBCdWZmZXJNYW5hZ2VyIH0gZnJvbSBcIi4uL2J1ZmZlck1hbmFnZXJcIjtcclxuaW1wb3J0IHsgR0xURkV4cG9ydGVyIH0gZnJvbSBcIi4uL2dsVEZFeHBvcnRlclwiO1xyXG5pbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcImNvcmUvdHlwZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBOb2RlIH0gZnJvbSBcImNvcmUvbm9kZVwiO1xyXG5pbXBvcnQgeyBNZXNoIH0gZnJvbSBcImNvcmUvTWVzaGVzL21lc2hcIjtcclxuaW1wb3J0IFwiY29yZS9NZXNoZXMvdGhpbkluc3RhbmNlTWVzaFwiO1xyXG5pbXBvcnQgeyBUbXBWZWN0b3JzLCBRdWF0ZXJuaW9uLCBWZWN0b3IzIH0gZnJvbSBcImNvcmUvTWF0aHMvbWF0aC52ZWN0b3JcIjtcclxuaW1wb3J0IHsgQ29udmVydFRvUmlnaHRIYW5kZWRQb3NpdGlvbiwgQ29udmVydFRvUmlnaHRIYW5kZWRSb3RhdGlvbiB9IGZyb20gXCIuLi9nbFRGVXRpbGl0aWVzXCI7XHJcblxyXG5jb25zdCBOQU1FID0gXCJFWFRfbWVzaF9ncHVfaW5zdGFuY2luZ1wiO1xyXG5cclxuLyoqXHJcbiAqIFtTcGVjaWZpY2F0aW9uXShodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi9tYWluL2V4dGVuc2lvbnMvMi4wL1ZlbmRvci9FWFRfbWVzaF9ncHVfaW5zdGFuY2luZy9SRUFETUUubWQpXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBjbGFzcyBFWFRfbWVzaF9ncHVfaW5zdGFuY2luZyBpbXBsZW1lbnRzIElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMiB7XHJcbiAgICAvKiogTmFtZSBvZiB0aGlzIGV4dGVuc2lvbiAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBOQU1FO1xyXG5cclxuICAgIC8qKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgZW5hYmxlZCAqL1xyXG4gICAgcHVibGljIGVuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgIC8qKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgcmVxdWlyZWQgKi9cclxuICAgIHB1YmxpYyByZXF1aXJlZCA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgX2V4cG9ydGVyOiBHTFRGRXhwb3J0ZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBfd2FzVXNlZCA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGV4cG9ydGVyOiBHTFRGRXhwb3J0ZXIpIHtcclxuICAgICAgICB0aGlzLl9leHBvcnRlciA9IGV4cG9ydGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge31cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgZ2V0IHdhc1VzZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dhc1VzZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZnRlciBub2RlIGlzIGV4cG9ydGVkXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCB0aGUgR0xURiBjb250ZXh0IHdoZW4gbG9hZGluZyB0aGUgYXNzZXRcclxuICAgICAqIEBwYXJhbSBub2RlIHRoZSBub2RlIGV4cG9ydGVkXHJcbiAgICAgKiBAcGFyYW0gYmFieWxvbk5vZGUgdGhlIGNvcnJlc3BvbmRpbmcgYmFieWxvbiBub2RlXHJcbiAgICAgKiBAcGFyYW0gbm9kZU1hcCBtYXAgZnJvbSBiYWJ5bG9uIG5vZGUgaWQgdG8gbm9kZSBpbmRleFxyXG4gICAgICogQHBhcmFtIGNvbnZlcnRUb1JpZ2h0SGFuZGVkIHRydWUgaWYgd2UgbmVlZCB0byBjb252ZXJ0IGRhdGEgZnJvbSBsZWZ0IGhhbmQgdG8gcmlnaHQgaGFuZCBzeXN0ZW0uXHJcbiAgICAgKiBAcGFyYW0gYnVmZmVyTWFuYWdlciBidWZmZXIgbWFuYWdlclxyXG4gICAgICogQHJldHVybnMgbnVsbGFibGUgcHJvbWlzZSwgcmVzb2x2ZXMgd2l0aCB0aGUgbm9kZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcG9zdEV4cG9ydE5vZGVBc3luYyhcclxuICAgICAgICBjb250ZXh0OiBzdHJpbmcsXHJcbiAgICAgICAgbm9kZTogTnVsbGFibGU8SU5vZGU+LFxyXG4gICAgICAgIGJhYnlsb25Ob2RlOiBOb2RlLFxyXG4gICAgICAgIG5vZGVNYXA6IE1hcDxOb2RlLCBudW1iZXI+LFxyXG4gICAgICAgIGNvbnZlcnRUb1JpZ2h0SGFuZGVkOiBib29sZWFuLFxyXG4gICAgICAgIGJ1ZmZlck1hbmFnZXI6IEJ1ZmZlck1hbmFnZXJcclxuICAgICk6IFByb21pc2U8TnVsbGFibGU8SU5vZGU+PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChub2RlICYmIGJhYnlsb25Ob2RlIGluc3RhbmNlb2YgTWVzaCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGJhYnlsb25Ob2RlLmhhc1RoaW5JbnN0YW5jZXMgJiYgdGhpcy5fZXhwb3J0ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl93YXNVc2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm9UcmFuc2xhdGlvbiA9IFZlY3RvcjMuWmVybygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vUm90YXRpb24gPSBRdWF0ZXJuaW9uLklkZW50aXR5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm9TY2FsZSA9IFZlY3RvcjMuT25lKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHJldHJpZXZlIGFsbCB0aGUgaW5zdGFuY2Ugd29ybGQgbWF0cml4XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0cml4ID0gYmFieWxvbk5vZGUudGhpbkluc3RhbmNlR2V0V29ybGRNYXRyaWNlcygpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpd3QgPSBUbXBWZWN0b3JzLlZlY3RvcjNbMl07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXdyID0gVG1wVmVjdG9ycy5RdWF0ZXJuaW9uWzFdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGl3cyA9IFRtcFZlY3RvcnMuVmVjdG9yM1szXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGhhc0FueUluc3RhbmNlV29ybGRUcmFuc2xhdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBoYXNBbnlJbnN0YW5jZVdvcmxkUm90YXRpb24gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaGFzQW55SW5zdGFuY2VXb3JsZFNjYWxlID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHByZXBhcmUgdGVtcCBidWZmZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHJhbnNsYXRpb25CdWZmZXIgPSBuZXcgRmxvYXQzMkFycmF5KGJhYnlsb25Ob2RlLnRoaW5JbnN0YW5jZUNvdW50ICogMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm90YXRpb25CdWZmZXIgPSBuZXcgRmxvYXQzMkFycmF5KGJhYnlsb25Ob2RlLnRoaW5JbnN0YW5jZUNvdW50ICogNCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2NhbGVCdWZmZXIgPSBuZXcgRmxvYXQzMkFycmF5KGJhYnlsb25Ob2RlLnRoaW5JbnN0YW5jZUNvdW50ICogMyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG0gb2YgbWF0cml4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG0uZGVjb21wb3NlKGl3cywgaXdyLCBpd3QpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnZlcnRUb1JpZ2h0SGFuZGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb252ZXJ0VG9SaWdodEhhbmRlZFBvc2l0aW9uKGl3dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb252ZXJ0VG9SaWdodEhhbmRlZFJvdGF0aW9uKGl3cik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZpbGwgdGhlIHRlbXAgYnVmZmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0aW9uQnVmZmVyLnNldChpd3QuYXNBcnJheSgpLCBpICogMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0aW9uQnVmZmVyLnNldChpd3Iubm9ybWFsaXplKCkuYXNBcnJheSgpLCBpICogNCk7IC8vIGVuc3VyZSB0aGUgcXVhdGVybmlvbiBpcyBub3JtYWxpemVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlQnVmZmVyLnNldChpd3MuYXNBcnJheSgpLCBpICogMyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIGlzIHdoZXJlIHdlIGRlY2lkZSBpZiB0aGVyZSBpcyBhbnkgdHJhbnNmb3JtYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFzQW55SW5zdGFuY2VXb3JsZFRyYW5zbGF0aW9uID0gaGFzQW55SW5zdGFuY2VXb3JsZFRyYW5zbGF0aW9uIHx8ICFpd3QuZXF1YWxzV2l0aEVwc2lsb24obm9UcmFuc2xhdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhc0FueUluc3RhbmNlV29ybGRSb3RhdGlvbiA9IGhhc0FueUluc3RhbmNlV29ybGRSb3RhdGlvbiB8fCAhaXdyLmVxdWFsc1dpdGhFcHNpbG9uKG5vUm90YXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYXNBbnlJbnN0YW5jZVdvcmxkU2NhbGUgPSBoYXNBbnlJbnN0YW5jZVdvcmxkU2NhbGUgfHwgIWl3cy5lcXVhbHNXaXRoRXBzaWxvbihub1NjYWxlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGkrKztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4dGVuc2lvbjogSUVYVE1lc2hHcHVJbnN0YW5jaW5nID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiB7fSxcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBkbyB3ZSBuZWVkIHRvIHdyaXRlIFRSQU5TTEFUSU9OID9cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaGFzQW55SW5zdGFuY2VXb3JsZFRyYW5zbGF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4dGVuc2lvbi5hdHRyaWJ1dGVzW1wiVFJBTlNMQVRJT05cIl0gPSB0aGlzLl9idWlsZEFjY2Vzc29yKHRyYW5zbGF0aW9uQnVmZmVyLCBBY2Nlc3NvclR5cGUuVkVDMywgYmFieWxvbk5vZGUudGhpbkluc3RhbmNlQ291bnQsIGJ1ZmZlck1hbmFnZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBkbyB3ZSBuZWVkIHRvIHdyaXRlIFJPVEFUSU9OID9cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaGFzQW55SW5zdGFuY2VXb3JsZFJvdGF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIGRlY2lkZWQgdG8gc3RheSBvbiBGTE9BVCBmb3Igbm93IHNlZSBodHRwczovL2dpdGh1Yi5jb20vQmFieWxvbkpTL0JhYnlsb24uanMvcHVsbC8xMjQ5NVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHRlbnNpb24uYXR0cmlidXRlc1tcIlJPVEFUSU9OXCJdID0gdGhpcy5fYnVpbGRBY2Nlc3Nvcihyb3RhdGlvbkJ1ZmZlciwgQWNjZXNzb3JUeXBlLlZFQzQsIGJhYnlsb25Ob2RlLnRoaW5JbnN0YW5jZUNvdW50LCBidWZmZXJNYW5hZ2VyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZG8gd2UgbmVlZCB0byB3cml0ZSBTQ0FMRSA/XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhhc0FueUluc3RhbmNlV29ybGRTY2FsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHRlbnNpb24uYXR0cmlidXRlc1tcIlNDQUxFXCJdID0gdGhpcy5fYnVpbGRBY2Nlc3NvcihzY2FsZUJ1ZmZlciwgQWNjZXNzb3JUeXBlLlZFQzMsIGJhYnlsb25Ob2RlLnRoaW5JbnN0YW5jZUNvdW50LCBidWZmZXJNYW5hZ2VyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8qIGVzbGludC1lbmFibGUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uKi9cclxuICAgICAgICAgICAgICAgICAgICBub2RlLmV4dGVuc2lvbnMgPSBub2RlLmV4dGVuc2lvbnMgfHwge307XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5leHRlbnNpb25zW05BTUVdID0gZXh0ZW5zaW9uO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc29sdmUobm9kZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfYnVpbGRBY2Nlc3NvcihidWZmZXI6IEZsb2F0MzJBcnJheSwgdHlwZTogQWNjZXNzb3JUeXBlLCBjb3VudDogbnVtYmVyLCBidWZmZXJNYW5hZ2VyOiBCdWZmZXJNYW5hZ2VyKTogbnVtYmVyIHtcclxuICAgICAgICAvLyBidWlsZCB0aGUgYnVmZmVyIHZpZXdcclxuICAgICAgICBjb25zdCBidiA9IGJ1ZmZlck1hbmFnZXIuY3JlYXRlQnVmZmVyVmlldyhidWZmZXIpO1xyXG5cclxuICAgICAgICAvLyBmaW5hbGx5IGJ1aWxkIHRoZSBhY2Nlc3NvclxyXG4gICAgICAgIGNvbnN0IGFjY2Vzc29yID0gYnVmZmVyTWFuYWdlci5jcmVhdGVBY2Nlc3NvcihidiwgdHlwZSwgQWNjZXNzb3JDb21wb25lbnRUeXBlLkZMT0FULCBjb3VudCk7XHJcbiAgICAgICAgdGhpcy5fZXhwb3J0ZXIuX2FjY2Vzc29ycy5wdXNoKGFjY2Vzc29yKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZXhwb3J0ZXIuX2FjY2Vzc29ycy5sZW5ndGggLSAxO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXHJcbkdMVEZFeHBvcnRlci5SZWdpc3RlckV4dGVuc2lvbihOQU1FLCAoZXhwb3J0ZXIpID0+IG5ldyBFWFRfbWVzaF9ncHVfaW5zdGFuY2luZyhleHBvcnRlcikpO1xyXG4iLCJpbXBvcnQgdHlwZSB7IElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMiB9IGZyb20gXCIuLi9nbFRGRXhwb3J0ZXJFeHRlbnNpb25cIjtcbmltcG9ydCB7IEdMVEZFeHBvcnRlciB9IGZyb20gXCIuLi9nbFRGRXhwb3J0ZXJcIjtcbmltcG9ydCB7IE1lc2hQcmltaXRpdmVNb2RlIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xuaW1wb3J0IHR5cGUgeyBJQWNjZXNzb3IsIElCdWZmZXJWaWV3LCBJS0hSRHJhY29NZXNoQ29tcHJlc3Npb24sIElNZXNoUHJpbWl0aXZlIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xuaW1wb3J0IHR5cGUgeyBCdWZmZXJNYW5hZ2VyIH0gZnJvbSBcIi4uL2J1ZmZlck1hbmFnZXJcIjtcbmltcG9ydCB7IERyYWNvRW5jb2RlciB9IGZyb20gXCJjb3JlL01lc2hlcy9Db21wcmVzc2lvbi9kcmFjb0VuY29kZXJcIjtcbmltcG9ydCB7IEdldFR5cGVkQXJyYXlEYXRhLCBHZXRUeXBlQnl0ZUxlbmd0aCB9IGZyb20gXCJjb3JlL0J1ZmZlcnMvYnVmZmVyVXRpbHNcIjtcbmltcG9ydCB7IEdldEFjY2Vzc29yRWxlbWVudENvdW50IH0gZnJvbSBcIi4uL2dsVEZVdGlsaXRpZXNcIjtcbmltcG9ydCB0eXBlIHsgRHJhY29BdHRyaWJ1dGVOYW1lLCBJRHJhY29BdHRyaWJ1dGVEYXRhLCBJRHJhY29FbmNvZGVyT3B0aW9ucyB9IGZyb20gXCJjb3JlL01lc2hlcy9Db21wcmVzc2lvbi9kcmFjb0VuY29kZXIudHlwZXNcIjtcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gXCJjb3JlL01pc2MvbG9nZ2VyXCI7XG5pbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcImNvcmUvdHlwZXNcIjtcblxuY29uc3QgTkFNRSA9IFwiS0hSX2RyYWNvX21lc2hfY29tcHJlc3Npb25cIjtcblxuZnVuY3Rpb24gZ2V0RHJhY29BdHRyaWJ1dGVOYW1lKGdsVEZOYW1lOiBzdHJpbmcpOiBEcmFjb0F0dHJpYnV0ZU5hbWUge1xuICAgIGlmIChnbFRGTmFtZSA9PT0gXCJQT1NJVElPTlwiKSB7XG4gICAgICAgIHJldHVybiBcIlBPU0lUSU9OXCI7XG4gICAgfSBlbHNlIGlmIChnbFRGTmFtZSA9PT0gXCJOT1JNQUxcIikge1xuICAgICAgICByZXR1cm4gXCJOT1JNQUxcIjtcbiAgICB9IGVsc2UgaWYgKGdsVEZOYW1lLnN0YXJ0c1dpdGgoXCJDT0xPUlwiKSkge1xuICAgICAgICByZXR1cm4gXCJDT0xPUlwiO1xuICAgIH0gZWxzZSBpZiAoZ2xURk5hbWUuc3RhcnRzV2l0aChcIlRFWENPT1JEXCIpKSB7XG4gICAgICAgIHJldHVybiBcIlRFWF9DT09SRFwiO1xuICAgIH1cbiAgICByZXR1cm4gXCJHRU5FUklDXCI7XG59XG5cbi8qKlxuICogW1NwZWNpZmljYXRpb25dKGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9ibG9iL21haW4vZXh0ZW5zaW9ucy8yLjAvS2hyb25vcy9LSFJfZHJhY29fbWVzaF9jb21wcmVzc2lvbi9SRUFETUUubWQpXG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cbmV4cG9ydCBjbGFzcyBLSFJfZHJhY29fbWVzaF9jb21wcmVzc2lvbiBpbXBsZW1lbnRzIElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMiB7XG4gICAgLyoqIE5hbWUgb2YgdGhpcyBleHRlbnNpb24gKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZSA9IE5BTUU7XG5cbiAgICAvKiogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIGVuYWJsZWQgKi9cbiAgICBwdWJsaWMgZW5hYmxlZDtcblxuICAgIC8qKiBLSFJfZHJhY29fbWVzaF9jb21wcmVzc2lvbiBpcyByZXF1aXJlZCwgYXMgdW5jb21wcmVzc2VkIGZhbGxiYWNrIGRhdGEgaXMgbm90IHlldCBpbXBsZW1lbnRlZC4gKi9cbiAgICBwdWJsaWMgcmVxdWlyZWQgPSB0cnVlO1xuXG4gICAgLyoqIEJ1ZmZlclZpZXdzIHVzZWQgZm9yIERyYWNvIGRhdGEsIHdoaWNoIG1heSBiZSBlbGlnaWJsZSBmb3IgcmVtb3ZhbCBhZnRlciBEcmFjbyBlbmNvZGluZyAqL1xuICAgIHByaXZhdGUgX2J1ZmZlclZpZXdzVXNlZDogU2V0PElCdWZmZXJWaWV3PiA9IG5ldyBTZXQoKTtcblxuICAgIC8qKiBBY2Nlc3NvcnMgdGhhdCB3ZXJlIHJlcGxhY2VkIHdpdGggRHJhY28gZGF0YSwgd2hpY2ggbWF5IGJlIGVsaWdpYmxlIGZvciByZW1vdmFsIGFmdGVyIERyYWNvIGVuY29kaW5nICovXG4gICAgcHJpdmF0ZSBfYWNjZXNzb3JzVXNlZDogU2V0PElBY2Nlc3Nvcj4gPSBuZXcgU2V0KCk7XG5cbiAgICAvKiogUHJvbWlzZSBwb29sIGZvciBEcmFjbyBlbmNvZGluZyB3b3JrICovXG4gICAgcHJpdmF0ZSBfZW5jb2RlUHJvbWlzZXM6IFByb21pc2U8dm9pZD5bXSA9IFtdO1xuXG4gICAgcHJpdmF0ZSBfd2FzVXNlZCA9IGZhbHNlO1xuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBnZXQgd2FzVXNlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dhc1VzZWQ7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIGNvbnN0cnVjdG9yKGV4cG9ydGVyOiBHTFRGRXhwb3J0ZXIpIHtcbiAgICAgICAgdGhpcy5lbmFibGVkID0gZXhwb3J0ZXIub3B0aW9ucy5tZXNoQ29tcHJlc3Npb25NZXRob2QgPT09IFwiRHJhY29cIiAmJiBEcmFjb0VuY29kZXIuRGVmYXVsdEF2YWlsYWJsZTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7fVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBwb3N0RXhwb3J0TWVzaFByaW1pdGl2ZShwcmltaXRpdmU6IElNZXNoUHJpbWl0aXZlLCBidWZmZXJNYW5hZ2VyOiBCdWZmZXJNYW5hZ2VyLCBhY2Nlc3NvcnM6IElBY2Nlc3NvcltdKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpbWl0aXZlLm1vZGUgIT09IE1lc2hQcmltaXRpdmVNb2RlLlRSSUFOR0xFUyAmJiBwcmltaXRpdmUubW9kZSAhPT0gTWVzaFByaW1pdGl2ZU1vZGUuVFJJQU5HTEVfU1RSSVApIHtcbiAgICAgICAgICAgIExvZ2dlci5XYXJuKFwiQ2Fubm90IGNvbXByZXNzIHByaW1pdGl2ZSB3aXRoIG1vZGUgXCIgKyBwcmltaXRpdmUubW9kZSArIFwiLlwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENvbGxlY3QgYnVmZmVyVmlld3MgYW5kIGFjY2Vzc29ycyB1c2VkIGJ5IHRoaXMgcHJpbWl0aXZlXG4gICAgICAgIGNvbnN0IHByaW1pdGl2ZUJ1ZmZlclZpZXdzOiBJQnVmZmVyVmlld1tdID0gW107XG4gICAgICAgIGNvbnN0IHByaW1pdGl2ZUFjY2Vzc29yczogSUFjY2Vzc29yW10gPSBbXTtcblxuICAgICAgICAvLyBQcmVwYXJlIGluZGljZXMgZm9yIERyYWNvIGVuY29kaW5nXG4gICAgICAgIGxldCBpbmRpY2VzOiBOdWxsYWJsZTxVaW50MzJBcnJheSB8IFVpbnQxNkFycmF5PiA9IG51bGw7XG4gICAgICAgIGlmIChwcmltaXRpdmUuaW5kaWNlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zdCBhY2Nlc3NvciA9IGFjY2Vzc29yc1twcmltaXRpdmUuaW5kaWNlc107XG4gICAgICAgICAgICBjb25zdCBidWZmZXJWaWV3ID0gYnVmZmVyTWFuYWdlci5nZXRCdWZmZXJWaWV3KGFjY2Vzc29yKTtcbiAgICAgICAgICAgIC8vIFBlciBleHBvcnRJbmRpY2VzLCBpbmRpY2VzIG11c3QgYmUgZWl0aGVyIFVpbnQxNkFycmF5IG9yIFVpbnQzMkFycmF5XG4gICAgICAgICAgICBpbmRpY2VzID0gYnVmZmVyTWFuYWdlci5nZXREYXRhKGJ1ZmZlclZpZXcpLnNsaWNlKCkgYXMgVWludDMyQXJyYXkgfCBVaW50MTZBcnJheTtcblxuICAgICAgICAgICAgcHJpbWl0aXZlQnVmZmVyVmlld3MucHVzaChidWZmZXJWaWV3KTtcbiAgICAgICAgICAgIHByaW1pdGl2ZUFjY2Vzc29ycy5wdXNoKGFjY2Vzc29yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFByZXBhcmUgYXR0cmlidXRlcyBmb3IgRHJhY28gZW5jb2RpbmdcbiAgICAgICAgY29uc3QgYXR0cmlidXRlczogSURyYWNvQXR0cmlidXRlRGF0YVtdID0gW107XG4gICAgICAgIGZvciAoY29uc3QgW25hbWUsIGFjY2Vzc29ySW5kZXhdIG9mIE9iamVjdC5lbnRyaWVzKHByaW1pdGl2ZS5hdHRyaWJ1dGVzKSkge1xuICAgICAgICAgICAgY29uc3QgYWNjZXNzb3IgPSBhY2Nlc3NvcnNbYWNjZXNzb3JJbmRleF07XG4gICAgICAgICAgICBjb25zdCBidWZmZXJWaWV3ID0gYnVmZmVyTWFuYWdlci5nZXRCdWZmZXJWaWV3KGFjY2Vzc29yKTtcblxuICAgICAgICAgICAgY29uc3Qgc2l6ZSA9IEdldEFjY2Vzc29yRWxlbWVudENvdW50KGFjY2Vzc29yLnR5cGUpO1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IEdldFR5cGVkQXJyYXlEYXRhKFxuICAgICAgICAgICAgICAgIGJ1ZmZlck1hbmFnZXIuZ2V0RGF0YShidWZmZXJWaWV3KSxcbiAgICAgICAgICAgICAgICBzaXplLFxuICAgICAgICAgICAgICAgIGFjY2Vzc29yLmNvbXBvbmVudFR5cGUsXG4gICAgICAgICAgICAgICAgYWNjZXNzb3IuYnl0ZU9mZnNldCB8fCAwLFxuICAgICAgICAgICAgICAgIGJ1ZmZlclZpZXcuYnl0ZVN0cmlkZSB8fCBHZXRUeXBlQnl0ZUxlbmd0aChhY2Nlc3Nvci5jb21wb25lbnRUeXBlKSAqIHNpemUsXG4gICAgICAgICAgICAgICAgYWNjZXNzb3Iubm9ybWFsaXplZCB8fCBmYWxzZSxcbiAgICAgICAgICAgICAgICBhY2Nlc3Nvci5jb3VudCxcbiAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBhdHRyaWJ1dGVzLnB1c2goeyBraW5kOiBuYW1lLCBkcmFjb05hbWU6IGdldERyYWNvQXR0cmlidXRlTmFtZShuYW1lKSwgc2l6ZTogR2V0QWNjZXNzb3JFbGVtZW50Q291bnQoYWNjZXNzb3IudHlwZSksIGRhdGE6IGRhdGEgfSk7XG5cbiAgICAgICAgICAgIHByaW1pdGl2ZUJ1ZmZlclZpZXdzLnB1c2goYnVmZmVyVmlldyk7XG4gICAgICAgICAgICBwcmltaXRpdmVBY2Nlc3NvcnMucHVzaChhY2Nlc3Nvcik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVc2Ugc2VxdWVudGlhbCBlbmNvZGluZyB0byBwcmVzZXJ2ZSB2ZXJ0ZXggb3JkZXIgZm9yIGNhc2VzIGxpa2UgbW9ycGggdGFyZ2V0c1xuICAgICAgICBjb25zdCBvcHRpb25zOiBJRHJhY29FbmNvZGVyT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIG1ldGhvZDogcHJpbWl0aXZlLnRhcmdldHMgPyBcIk1FU0hfU0VRVUVOVElBTF9FTkNPRElOR1wiIDogXCJNRVNIX0VER0VCUkVBS0VSX0VOQ09ESU5HXCIsXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IERyYWNvRW5jb2Rlci5EZWZhdWx0Ll9lbmNvZGVBc3luYyhhdHRyaWJ1dGVzLCBpbmRpY2VzLCBvcHRpb25zKVxuICAgICAgICAgICAgLnRoZW4oKGVuY29kZWREYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFlbmNvZGVkRGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBMb2dnZXIuRXJyb3IoXCJEcmFjbyBlbmNvZGluZyBmYWlsZWQgZm9yIHByaW1pdGl2ZS5cIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkcmFjb0luZm86IElLSFJEcmFjb01lc2hDb21wcmVzc2lvbiA9IHtcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyVmlldzogLTEsIC8vIGJ1ZmZlclZpZXcgd2lsbCBiZSBzZXQgdG8gYSByZWFsIGluZGV4IGxhdGVyLCB3aGVuIHdlIHdyaXRlIHRoZSBiaW5hcnkgYW5kIGRlY2lkZSBidWZmZXJWaWV3IG9yZGVyaW5nXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IGVuY29kZWREYXRhLmF0dHJpYnV0ZUlEcyxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGNvbnN0IGJ1ZmZlclZpZXcgPSBidWZmZXJNYW5hZ2VyLmNyZWF0ZUJ1ZmZlclZpZXcoZW5jb2RlZERhdGEuZGF0YSk7XG4gICAgICAgICAgICAgICAgYnVmZmVyTWFuYWdlci5zZXRCdWZmZXJWaWV3KGRyYWNvSW5mbywgYnVmZmVyVmlldyk7XG5cbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGJ1ZmZlclZpZXcgb2YgcHJpbWl0aXZlQnVmZmVyVmlld3MpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYnVmZmVyVmlld3NVc2VkLmFkZChidWZmZXJWaWV3KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBhY2Nlc3NvciBvZiBwcmltaXRpdmVBY2Nlc3NvcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYWNjZXNzb3JzVXNlZC5hZGQoYWNjZXNzb3IpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHByaW1pdGl2ZS5leHRlbnNpb25zIHx8PSB7fTtcbiAgICAgICAgICAgICAgICBwcmltaXRpdmUuZXh0ZW5zaW9uc1tOQU1FXSA9IGRyYWNvSW5mbztcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgTG9nZ2VyLkVycm9yKFwiRHJhY28gZW5jb2RpbmcgZmFpbGVkIGZvciBwcmltaXRpdmU6IFwiICsgZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5fZW5jb2RlUHJvbWlzZXMucHVzaChwcm9taXNlKTtcblxuICAgICAgICB0aGlzLl93YXNVc2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGFzeW5jIHByZUdlbmVyYXRlQmluYXJ5QXN5bmMoYnVmZmVyTWFuYWdlcjogQnVmZmVyTWFuYWdlcik6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwodGhpcy5fZW5jb2RlUHJvbWlzZXMpO1xuXG4gICAgICAgIC8vIEN1bGwgb2Jzb2xldGUgYnVmZmVyVmlld3MgdGhhdCB3ZXJlIHJlcGxhY2VkIHdpdGggRHJhY28gZGF0YVxuICAgICAgICB0aGlzLl9idWZmZXJWaWV3c1VzZWQuZm9yRWFjaCgoYnVmZmVyVmlldykgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVmZXJlbmNlcyA9IGJ1ZmZlck1hbmFnZXIuZ2V0UHJvcGVydGllc1dpdGhCdWZmZXJWaWV3KGJ1ZmZlclZpZXcpO1xuICAgICAgICAgICAgY29uc3Qgb25seVVzZWRCeUVuY29kZWRQcmltaXRpdmVzID0gcmVmZXJlbmNlcy5ldmVyeSgob2JqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FjY2Vzc29yc1VzZWQuaGFzKG9iamVjdCBhcyBJQWNjZXNzb3IpOyAvLyBoYXMoKSBjYW4gaGFuZGxlIGFueSBvYmplY3QsIGJ1dCBUUyBkb2Vzbid0IGtub3cgdGhhdFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAob25seVVzZWRCeUVuY29kZWRQcmltaXRpdmVzKSB7XG4gICAgICAgICAgICAgICAgYnVmZmVyTWFuYWdlci5yZW1vdmVCdWZmZXJWaWV3KGJ1ZmZlclZpZXcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl9idWZmZXJWaWV3c1VzZWQuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5fYWNjZXNzb3JzVXNlZC5jbGVhcigpO1xuICAgIH1cbn1cblxuR0xURkV4cG9ydGVyLlJlZ2lzdGVyRXh0ZW5zaW9uKE5BTUUsIChleHBvcnRlcikgPT4gbmV3IEtIUl9kcmFjb19tZXNoX2NvbXByZXNzaW9uKGV4cG9ydGVyKSk7XG4iLCJpbXBvcnQgdHlwZSB7IFNwb3RMaWdodCB9IGZyb20gXCJjb3JlL0xpZ2h0cy9zcG90TGlnaHRcIjtcclxuaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCJjb3JlL3R5cGVzXCI7XHJcbmltcG9ydCB7IFZlY3RvcjMsIFF1YXRlcm5pb24sIFRtcFZlY3RvcnMgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLnZlY3RvclwiO1xyXG5pbXBvcnQgeyBMaWdodCB9IGZyb20gXCJjb3JlL0xpZ2h0cy9saWdodFwiO1xyXG5pbXBvcnQgdHlwZSB7IE5vZGUgfSBmcm9tIFwiY29yZS9ub2RlXCI7XHJcbmltcG9ydCB7IFNoYWRvd0xpZ2h0IH0gZnJvbSBcImNvcmUvTGlnaHRzL3NoYWRvd0xpZ2h0XCI7XHJcbmltcG9ydCB0eXBlIHsgSU5vZGUsIElLSFJMaWdodHNQdW5jdHVhbF9MaWdodFJlZmVyZW5jZSwgSUtIUkxpZ2h0c1B1bmN0dWFsX0xpZ2h0LCBJS0hSTGlnaHRzUHVuY3R1YWwgfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IEtIUkxpZ2h0c1B1bmN0dWFsX0xpZ2h0VHlwZSB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHR5cGUgeyBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIgfSBmcm9tIFwiLi4vZ2xURkV4cG9ydGVyRXh0ZW5zaW9uXCI7XHJcbmltcG9ydCB7IEdMVEZFeHBvcnRlciB9IGZyb20gXCIuLi9nbFRGRXhwb3J0ZXJcIjtcclxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSBcImNvcmUvTWlzYy9sb2dnZXJcIjtcclxuaW1wb3J0IHsgQ29udmVydFRvUmlnaHRIYW5kZWRQb3NpdGlvbiwgT21pdERlZmF1bHRWYWx1ZXMsIENvbGxhcHNlUGFyZW50Tm9kZSwgSXNQYXJlbnRBZGRlZEJ5SW1wb3J0ZXIgfSBmcm9tIFwiLi4vZ2xURlV0aWxpdGllc1wiO1xyXG5cclxuY29uc3QgTkFNRSA9IFwiS0hSX2xpZ2h0c19wdW5jdHVhbFwiO1xyXG5jb25zdCBERUZBVUxUUzogT21pdDxJS0hSTGlnaHRzUHVuY3R1YWxfTGlnaHQsIFwidHlwZVwiPiA9IHtcclxuICAgIG5hbWU6IFwiXCIsXHJcbiAgICBjb2xvcjogWzEsIDEsIDFdLFxyXG4gICAgaW50ZW5zaXR5OiAxLFxyXG4gICAgcmFuZ2U6IE51bWJlci5NQVhfVkFMVUUsXHJcbn07XHJcbmNvbnN0IFNQT1RERUZBVUxUUzogTm9uTnVsbGFibGU8SUtIUkxpZ2h0c1B1bmN0dWFsX0xpZ2h0W1wic3BvdFwiXT4gPSB7XHJcbiAgICBpbm5lckNvbmVBbmdsZTogMCxcclxuICAgIG91dGVyQ29uZUFuZ2xlOiBNYXRoLlBJIC8gNC4wLFxyXG59O1xyXG5jb25zdCBMSUdIVERJUkVDVElPTiA9IFZlY3RvcjMuQmFja3dhcmQoKTtcclxuXHJcbi8qKlxyXG4gKiBbU3BlY2lmaWNhdGlvbl0oaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFzdGVyL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX2xpZ2h0c19wdW5jdHVhbC9SRUFETUUubWQpXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBjbGFzcyBLSFJfbGlnaHRzX3B1bmN0dWFsIGltcGxlbWVudHMgSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyIHtcclxuICAgIC8qKiBUaGUgbmFtZSBvZiB0aGlzIGV4dGVuc2lvbi4gKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lID0gTkFNRTtcclxuXHJcbiAgICAvKiogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIGVuYWJsZWQuICovXHJcbiAgICBwdWJsaWMgZW5hYmxlZCA9IHRydWU7XHJcblxyXG4gICAgLyoqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyByZXF1aXJlZCAqL1xyXG4gICAgcHVibGljIHJlcXVpcmVkID0gZmFsc2U7XHJcblxyXG4gICAgLyoqIFJlZmVyZW5jZSB0byB0aGUgZ2xURiBleHBvcnRlciAqL1xyXG4gICAgcHJpdmF0ZSBfZXhwb3J0ZXI6IEdMVEZFeHBvcnRlcjtcclxuXHJcbiAgICBwcml2YXRlIF9saWdodHM6IElLSFJMaWdodHNQdW5jdHVhbDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihleHBvcnRlcjogR0xURkV4cG9ydGVyKSB7XHJcbiAgICAgICAgdGhpcy5fZXhwb3J0ZXIgPSBleHBvcnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHtcclxuICAgICAgICAodGhpcy5fbGlnaHRzIGFzIGFueSkgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBnZXQgd2FzVXNlZCgpIHtcclxuICAgICAgICByZXR1cm4gISF0aGlzLl9saWdodHM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIG9uRXhwb3J0aW5nKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2V4cG9ydGVyIS5fZ2xURi5leHRlbnNpb25zIVtOQU1FXSA9IHRoaXMuX2xpZ2h0cztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lIHRoaXMgbWV0aG9kIHRvIG1vZGlmeSB0aGUgZGVmYXVsdCBiZWhhdmlvciB3aGVuIGV4cG9ydGluZyBhIG5vZGVcclxuICAgICAqIEBwYXJhbSBjb250ZXh0IFRoZSBjb250ZXh0IHdoZW4gZXhwb3J0aW5nIHRoZSBub2RlXHJcbiAgICAgKiBAcGFyYW0gbm9kZSBnbFRGIG5vZGVcclxuICAgICAqIEBwYXJhbSBiYWJ5bG9uTm9kZSBCYWJ5bG9uSlMgbm9kZVxyXG4gICAgICogQHBhcmFtIG5vZGVNYXAgTm9kZSBtYXBwaW5nIG9mIGJhYnlsb24gbm9kZSB0byBnbFRGIG5vZGUgaW5kZXhcclxuICAgICAqIEBwYXJhbSBjb252ZXJ0VG9SaWdodEhhbmRlZCBGbGFnIHRvIGNvbnZlcnQgdGhlIHZhbHVlcyB0byByaWdodC1oYW5kZWRcclxuICAgICAqIEByZXR1cm5zIG51bGxhYmxlIElOb2RlIHByb21pc2VcclxuICAgICAqL1xyXG4gICAgcHVibGljIHBvc3RFeHBvcnROb2RlQXN5bmMoY29udGV4dDogc3RyaW5nLCBub2RlOiBJTm9kZSwgYmFieWxvbk5vZGU6IE5vZGUsIG5vZGVNYXA6IE1hcDxOb2RlLCBudW1iZXI+LCBjb252ZXJ0VG9SaWdodEhhbmRlZDogYm9vbGVhbik6IFByb21pc2U8TnVsbGFibGU8SU5vZGU+PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghKGJhYnlsb25Ob2RlIGluc3RhbmNlb2YgU2hhZG93TGlnaHQpKSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBsaWdodFR5cGUgPVxyXG4gICAgICAgICAgICAgICAgYmFieWxvbk5vZGUuZ2V0VHlwZUlEKCkgPT0gTGlnaHQuTElHSFRUWVBFSURfUE9JTlRMSUdIVFxyXG4gICAgICAgICAgICAgICAgICAgID8gS0hSTGlnaHRzUHVuY3R1YWxfTGlnaHRUeXBlLlBPSU5UXHJcbiAgICAgICAgICAgICAgICAgICAgOiBiYWJ5bG9uTm9kZS5nZXRUeXBlSUQoKSA9PSBMaWdodC5MSUdIVFRZUEVJRF9ESVJFQ1RJT05BTExJR0hUXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IEtIUkxpZ2h0c1B1bmN0dWFsX0xpZ2h0VHlwZS5ESVJFQ1RJT05BTFxyXG4gICAgICAgICAgICAgICAgICAgICAgOiBiYWJ5bG9uTm9kZS5nZXRUeXBlSUQoKSA9PSBMaWdodC5MSUdIVFRZUEVJRF9TUE9UTElHSFRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBLSFJMaWdodHNQdW5jdHVhbF9MaWdodFR5cGUuU1BPVFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG51bGw7XHJcbiAgICAgICAgICAgIGlmICghbGlnaHRUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICBMb2dnZXIuV2FybihgJHtjb250ZXh0fTogTGlnaHQgJHtiYWJ5bG9uTm9kZS5uYW1lfSBpcyBub3Qgc3VwcG9ydGVkIGluICR7TkFNRX1gKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUobm9kZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChiYWJ5bG9uTm9kZS5mYWxsb2ZmVHlwZSAhPT0gTGlnaHQuRkFMTE9GRl9HTFRGKSB7XHJcbiAgICAgICAgICAgICAgICBMb2dnZXIuV2FybihgJHtjb250ZXh0fTogTGlnaHQgZmFsbG9mZiBmb3IgJHtiYWJ5bG9uTm9kZS5uYW1lfSBkb2VzIG5vdCBtYXRjaCB0aGUgJHtOQU1FfSBzcGVjaWZpY2F0aW9uIWApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBTZXQgdGhlIG5vZGUncyB0cmFuc2xhdGlvbiBhbmQgcm90YXRpb24gaGVyZSwgc2luY2UgbGlnaHRzIGFyZSBub3QgaGFuZGxlZCBpbiBleHBvcnROb2RlQXN5bmNcclxuICAgICAgICAgICAgaWYgKCFiYWJ5bG9uTm9kZS5wb3NpdGlvbi5lcXVhbHNUb0Zsb2F0cygwLCAwLCAwKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdHJhbnNsYXRpb24gPSBUbXBWZWN0b3JzLlZlY3RvcjNbMF0uY29weUZyb20oYmFieWxvbk5vZGUucG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbnZlcnRUb1JpZ2h0SGFuZGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29udmVydFRvUmlnaHRIYW5kZWRQb3NpdGlvbih0cmFuc2xhdGlvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBub2RlLnRyYW5zbGF0aW9uID0gdHJhbnNsYXRpb24uYXNBcnJheSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBCYWJ5bG9uIGxpZ2h0cyBoYXZlIFwiY29uc3RhbnRcIiByb3RhdGlvbiBhbmQgdmFyaWFibGUgZGlyZWN0aW9uLCB3aGlsZVxyXG4gICAgICAgICAgICAvLyBnbFRGIGxpZ2h0cyBoYXZlIHZhcmlhYmxlIHJvdGF0aW9uIGFuZCBjb25zdGFudCBkaXJlY3Rpb24uIFRoZXJlZm9yZSxcclxuICAgICAgICAgICAgLy8gY29tcHV0ZSBhIHF1YXRlcm5pb24gdGhhdCBhbGlnbnMgdGhlIEJhYnlsb24gbGlnaHQncyBkaXJlY3Rpb24gd2l0aCBnbFRGJ3MgY29uc3RhbnQgb25lLlxyXG4gICAgICAgICAgICBpZiAobGlnaHRUeXBlICE9PSBLSFJMaWdodHNQdW5jdHVhbF9MaWdodFR5cGUuUE9JTlQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IGJhYnlsb25Ob2RlLmRpcmVjdGlvbi5ub3JtYWxpemVUb1JlZihUbXBWZWN0b3JzLlZlY3RvcjNbMF0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbnZlcnRUb1JpZ2h0SGFuZGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29udmVydFRvUmlnaHRIYW5kZWRQb3NpdGlvbihkaXJlY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgYW5nbGUgPSBNYXRoLmFjb3MoVmVjdG9yMy5Eb3QoTElHSFRESVJFQ1RJT04sIGRpcmVjdGlvbikpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXhpcyA9IFZlY3RvcjMuQ3Jvc3MoTElHSFRESVJFQ1RJT04sIGRpcmVjdGlvbik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsaWdodFJvdGF0aW9uUXVhdGVybmlvbiA9IFF1YXRlcm5pb24uUm90YXRpb25BeGlzVG9SZWYoYXhpcywgYW5nbGUsIFRtcFZlY3RvcnMuUXVhdGVybmlvblswXSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIVF1YXRlcm5pb24uSXNJZGVudGl0eShsaWdodFJvdGF0aW9uUXVhdGVybmlvbikpIHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLnJvdGF0aW9uID0gbGlnaHRSb3RhdGlvblF1YXRlcm5pb24uYXNBcnJheSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBsaWdodDogSUtIUkxpZ2h0c1B1bmN0dWFsX0xpZ2h0ID0ge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogbGlnaHRUeXBlLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogYmFieWxvbk5vZGUubmFtZSxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBiYWJ5bG9uTm9kZS5kaWZmdXNlLmFzQXJyYXkoKSxcclxuICAgICAgICAgICAgICAgIGludGVuc2l0eTogYmFieWxvbk5vZGUuaW50ZW5zaXR5LFxyXG4gICAgICAgICAgICAgICAgcmFuZ2U6IGJhYnlsb25Ob2RlLnJhbmdlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBPbWl0RGVmYXVsdFZhbHVlcyhsaWdodCwgREVGQVVMVFMpO1xyXG5cclxuICAgICAgICAgICAgLy8gU2VwYXJhdGVseSBoYW5kbGUgdGhlIHJlcXVpcmVkICdzcG90JyBmaWVsZCBmb3Igc3BvdCBsaWdodHNcclxuICAgICAgICAgICAgaWYgKGxpZ2h0VHlwZSA9PT0gS0hSTGlnaHRzUHVuY3R1YWxfTGlnaHRUeXBlLlNQT1QpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJhYnlsb25TcG90TGlnaHQgPSBiYWJ5bG9uTm9kZSBhcyBTcG90TGlnaHQ7XHJcbiAgICAgICAgICAgICAgICBsaWdodC5zcG90ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlubmVyQ29uZUFuZ2xlOiBiYWJ5bG9uU3BvdExpZ2h0LmlubmVyQW5nbGUgLyAyLjAsXHJcbiAgICAgICAgICAgICAgICAgICAgb3V0ZXJDb25lQW5nbGU6IGJhYnlsb25TcG90TGlnaHQuYW5nbGUgLyAyLjAsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgT21pdERlZmF1bHRWYWx1ZXMobGlnaHQuc3BvdCwgU1BPVERFRkFVTFRTKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5fbGlnaHRzIHx8PSB7XHJcbiAgICAgICAgICAgICAgICBsaWdodHM6IFtdLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLl9saWdodHMubGlnaHRzLnB1c2gobGlnaHQpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbGlnaHRSZWZlcmVuY2U6IElLSFJMaWdodHNQdW5jdHVhbF9MaWdodFJlZmVyZW5jZSA9IHtcclxuICAgICAgICAgICAgICAgIGxpZ2h0OiB0aGlzLl9saWdodHMubGlnaHRzLmxlbmd0aCAtIDEsXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvLyBBc3NpZ24gdGhlIGxpZ2h0IHRvIGl0cyBwYXJlbnQgbm9kZSwgaWYgcG9zc2libGUsIHRvIGNvbmRlbnNlIHRoZSBnbFRGXHJcbiAgICAgICAgICAgIC8vIFdoeSBhbmQgd2hlbjogdGhlIGdsVEYgbG9hZGVyIGdlbmVyYXRlcyBhIG5ldyBwYXJlbnQgVHJhbnNmb3JtTm9kZSBmb3IgZWFjaCBsaWdodCBub2RlLCB3aGljaCB3ZSBzaG91bGQgdW5kbyBvbiBleHBvcnRcclxuICAgICAgICAgICAgY29uc3QgcGFyZW50QmFieWxvbk5vZGUgPSBiYWJ5bG9uTm9kZS5wYXJlbnQ7XHJcblxyXG4gICAgICAgICAgICBpZiAocGFyZW50QmFieWxvbk5vZGUgJiYgSXNQYXJlbnRBZGRlZEJ5SW1wb3J0ZXIoYmFieWxvbk5vZGUsIHBhcmVudEJhYnlsb25Ob2RlKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50Tm9kZUluZGV4ID0gbm9kZU1hcC5nZXQocGFyZW50QmFieWxvbk5vZGUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudE5vZGVJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIENvbWJpbmUgdGhlIGxpZ2h0J3MgdHJhbnNmb3JtYXRpb24gd2l0aCB0aGUgcGFyZW50J3NcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnROb2RlID0gdGhpcy5fZXhwb3J0ZXIuX25vZGVzW3BhcmVudE5vZGVJbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgQ29sbGFwc2VQYXJlbnROb2RlKG5vZGUsIHBhcmVudE5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudE5vZGUuZXh0ZW5zaW9ucyB8fD0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5leHRlbnNpb25zW05BTUVdID0gbGlnaHRSZWZlcmVuY2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIERvIG5vdCBleHBvcnQgdGhlIG9yaWdpbmFsIG5vZGVcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbm9kZS5leHRlbnNpb25zIHx8PSB7fTtcclxuICAgICAgICAgICAgbm9kZS5leHRlbnNpb25zW05BTUVdID0gbGlnaHRSZWZlcmVuY2U7XHJcbiAgICAgICAgICAgIHJlc29sdmUobm9kZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkdMVEZFeHBvcnRlci5SZWdpc3RlckV4dGVuc2lvbihOQU1FLCAoZXhwb3J0ZXIpID0+IG5ldyBLSFJfbGlnaHRzX3B1bmN0dWFsKGV4cG9ydGVyKSk7XHJcbiIsImltcG9ydCB0eXBlIHsgSU1hdGVyaWFsLCBJS0hSTWF0ZXJpYWxzQW5pc290cm9weSB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHR5cGUgeyBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIgfSBmcm9tIFwiLi4vZ2xURkV4cG9ydGVyRXh0ZW5zaW9uXCI7XHJcbmltcG9ydCB7IEdMVEZFeHBvcnRlciB9IGZyb20gXCIuLi9nbFRGRXhwb3J0ZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBQQlJCYXNlTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvUEJSL3BickJhc2VNYXRlcmlhbFwiO1xyXG5pbXBvcnQgdHlwZSB7IEJhc2VUZXh0dXJlIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1RleHR1cmVzL2Jhc2VUZXh0dXJlXCI7XHJcblxyXG5jb25zdCBOQU1FID0gXCJLSFJfbWF0ZXJpYWxzX2FuaXNvdHJvcHlcIjtcclxuXHJcbi8qKlxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGNsYXNzIEtIUl9tYXRlcmlhbHNfYW5pc290cm9weSBpbXBsZW1lbnRzIElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMiB7XHJcbiAgICAvKiogTmFtZSBvZiB0aGlzIGV4dGVuc2lvbiAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBOQU1FO1xyXG5cclxuICAgIC8qKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgZW5hYmxlZCAqL1xyXG4gICAgcHVibGljIGVuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgIC8qKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgcmVxdWlyZWQgKi9cclxuICAgIHB1YmxpYyByZXF1aXJlZCA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgX2V4cG9ydGVyOiBHTFRGRXhwb3J0ZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBfd2FzVXNlZCA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGV4cG9ydGVyOiBHTFRGRXhwb3J0ZXIpIHtcclxuICAgICAgICB0aGlzLl9leHBvcnRlciA9IGV4cG9ydGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge31cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgZ2V0IHdhc1VzZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dhc1VzZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBvc3RFeHBvcnRNYXRlcmlhbEFkZGl0aW9uYWxUZXh0dXJlcz8oY29udGV4dDogc3RyaW5nLCBub2RlOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBCYXNlVGV4dHVyZVtdIHtcclxuICAgICAgICBjb25zdCBhZGRpdGlvbmFsVGV4dHVyZXM6IEJhc2VUZXh0dXJlW10gPSBbXTtcclxuICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsIGluc3RhbmNlb2YgUEJSQmFzZU1hdGVyaWFsKSB7XHJcbiAgICAgICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwuYW5pc290cm9weS5pc0VuYWJsZWQgJiYgIWJhYnlsb25NYXRlcmlhbC5hbmlzb3Ryb3B5LmxlZ2FjeSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbC5hbmlzb3Ryb3B5LnRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRpdGlvbmFsVGV4dHVyZXMucHVzaChiYWJ5bG9uTWF0ZXJpYWwuYW5pc290cm9weS50ZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBhZGRpdGlvbmFsVGV4dHVyZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcG9zdEV4cG9ydE1hdGVyaWFsQXN5bmM/KGNvbnRleHQ6IHN0cmluZywgbm9kZTogSU1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsKTogUHJvbWlzZTxJTWF0ZXJpYWw+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbCBpbnN0YW5jZW9mIFBCUkJhc2VNYXRlcmlhbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFiYWJ5bG9uTWF0ZXJpYWwuYW5pc290cm9weS5pc0VuYWJsZWQgfHwgYmFieWxvbk1hdGVyaWFsLmFuaXNvdHJvcHkubGVnYWN5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShub2RlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5fd2FzVXNlZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgbm9kZS5leHRlbnNpb25zID0gbm9kZS5leHRlbnNpb25zIHx8IHt9O1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGFuaXNvdHJvcHlUZXh0dXJlSW5mbyA9IHRoaXMuX2V4cG9ydGVyLl9tYXRlcmlhbEV4cG9ydGVyLmdldFRleHR1cmVJbmZvKGJhYnlsb25NYXRlcmlhbC5hbmlzb3Ryb3B5LnRleHR1cmUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGFuaXNvdHJvcHlJbmZvOiBJS0hSTWF0ZXJpYWxzQW5pc290cm9weSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBhbmlzb3Ryb3B5U3RyZW5ndGg6IGJhYnlsb25NYXRlcmlhbC5hbmlzb3Ryb3B5LmludGVuc2l0eSxcclxuICAgICAgICAgICAgICAgICAgICBhbmlzb3Ryb3B5Um90YXRpb246IGJhYnlsb25NYXRlcmlhbC5hbmlzb3Ryb3B5LmFuZ2xlLFxyXG4gICAgICAgICAgICAgICAgICAgIGFuaXNvdHJvcHlUZXh0dXJlOiBhbmlzb3Ryb3B5VGV4dHVyZUluZm8gPz8gdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYW5pc290cm9weUluZm8uYW5pc290cm9weVRleHR1cmUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9leHBvcnRlci5fbWF0ZXJpYWxOZWVkc1VWc1NldC5hZGQoYmFieWxvbk1hdGVyaWFsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBub2RlLmV4dGVuc2lvbnNbTkFNRV0gPSBhbmlzb3Ryb3B5SW5mbztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXNvbHZlKG5vZGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5HTFRGRXhwb3J0ZXIuUmVnaXN0ZXJFeHRlbnNpb24oTkFNRSwgKGV4cG9ydGVyKSA9PiBuZXcgS0hSX21hdGVyaWFsc19hbmlzb3Ryb3B5KGV4cG9ydGVyKSk7XHJcbiIsImltcG9ydCB0eXBlIHsgSU1hdGVyaWFsLCBJS0hSTWF0ZXJpYWxzQ2xlYXJjb2F0IH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgdHlwZSB7IElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMiB9IGZyb20gXCIuLi9nbFRGRXhwb3J0ZXJFeHRlbnNpb25cIjtcclxuaW1wb3J0IHsgR0xURkV4cG9ydGVyIH0gZnJvbSBcIi4uL2dsVEZFeHBvcnRlclwiO1xyXG5pbXBvcnQgdHlwZSB7IE1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IFBCUkJhc2VNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9QQlIvcGJyQmFzZU1hdGVyaWFsXCI7XHJcbmltcG9ydCB0eXBlIHsgQmFzZVRleHR1cmUgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvYmFzZVRleHR1cmVcIjtcclxuXHJcbmltcG9ydCB7IFRvb2xzIH0gZnJvbSBcImNvcmUvTWlzYy90b29sc1wiO1xyXG5cclxuY29uc3QgTkFNRSA9IFwiS0hSX21hdGVyaWFsc19jbGVhcmNvYXRcIjtcclxuXHJcbi8qKlxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGNsYXNzIEtIUl9tYXRlcmlhbHNfY2xlYXJjb2F0IGltcGxlbWVudHMgSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyIHtcclxuICAgIC8qKiBOYW1lIG9mIHRoaXMgZXh0ZW5zaW9uICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZSA9IE5BTUU7XHJcblxyXG4gICAgLyoqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyBlbmFibGVkICovXHJcbiAgICBwdWJsaWMgZW5hYmxlZCA9IHRydWU7XHJcblxyXG4gICAgLyoqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyByZXF1aXJlZCAqL1xyXG4gICAgcHVibGljIHJlcXVpcmVkID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBfZXhwb3J0ZXI6IEdMVEZFeHBvcnRlcjtcclxuXHJcbiAgICBwcml2YXRlIF93YXNVc2VkID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZXhwb3J0ZXI6IEdMVEZFeHBvcnRlcikge1xyXG4gICAgICAgIHRoaXMuX2V4cG9ydGVyID0gZXhwb3J0ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7fVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBnZXQgd2FzVXNlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fd2FzVXNlZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcG9zdEV4cG9ydE1hdGVyaWFsQWRkaXRpb25hbFRleHR1cmVzPyhjb250ZXh0OiBzdHJpbmcsIG5vZGU6IElNYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCk6IEJhc2VUZXh0dXJlW10ge1xyXG4gICAgICAgIGNvbnN0IGFkZGl0aW9uYWxUZXh0dXJlczogQmFzZVRleHR1cmVbXSA9IFtdO1xyXG4gICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwgaW5zdGFuY2VvZiBQQlJCYXNlTWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbC5jbGVhckNvYXQuaXNFbmFibGVkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsLmNsZWFyQ29hdC50ZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkaXRpb25hbFRleHR1cmVzLnB1c2goYmFieWxvbk1hdGVyaWFsLmNsZWFyQ29hdC50ZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghYmFieWxvbk1hdGVyaWFsLmNsZWFyQ29hdC51c2VSb3VnaG5lc3NGcm9tTWFpblRleHR1cmUgJiYgYmFieWxvbk1hdGVyaWFsLmNsZWFyQ29hdC50ZXh0dXJlUm91Z2huZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkaXRpb25hbFRleHR1cmVzLnB1c2goYmFieWxvbk1hdGVyaWFsLmNsZWFyQ29hdC50ZXh0dXJlUm91Z2huZXNzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwuY2xlYXJDb2F0LmJ1bXBUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkaXRpb25hbFRleHR1cmVzLnB1c2goYmFieWxvbk1hdGVyaWFsLmNsZWFyQ29hdC5idW1wVGV4dHVyZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYWRkaXRpb25hbFRleHR1cmVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBvc3RFeHBvcnRNYXRlcmlhbEFzeW5jPyhjb250ZXh0OiBzdHJpbmcsIG5vZGU6IElNYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCk6IFByb21pc2U8SU1hdGVyaWFsPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwgaW5zdGFuY2VvZiBQQlJCYXNlTWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgICAgIGlmICghYmFieWxvbk1hdGVyaWFsLmNsZWFyQ29hdC5pc0VuYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl93YXNVc2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBub2RlLmV4dGVuc2lvbnMgPSBub2RlLmV4dGVuc2lvbnMgfHwge307XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgY2xlYXJDb2F0VGV4dHVyZUluZm8gPSB0aGlzLl9leHBvcnRlci5fbWF0ZXJpYWxFeHBvcnRlci5nZXRUZXh0dXJlSW5mbyhiYWJ5bG9uTWF0ZXJpYWwuY2xlYXJDb2F0LnRleHR1cmUpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNsZWFyQ29hdFRleHR1cmVSb3VnaG5lc3NJbmZvO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbC5jbGVhckNvYXQudXNlUm91Z2huZXNzRnJvbU1haW5UZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJDb2F0VGV4dHVyZVJvdWdobmVzc0luZm8gPSB0aGlzLl9leHBvcnRlci5fbWF0ZXJpYWxFeHBvcnRlci5nZXRUZXh0dXJlSW5mbyhiYWJ5bG9uTWF0ZXJpYWwuY2xlYXJDb2F0LnRleHR1cmUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhckNvYXRUZXh0dXJlUm91Z2huZXNzSW5mbyA9IHRoaXMuX2V4cG9ydGVyLl9tYXRlcmlhbEV4cG9ydGVyLmdldFRleHR1cmVJbmZvKGJhYnlsb25NYXRlcmlhbC5jbGVhckNvYXQudGV4dHVyZVJvdWdobmVzcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbC5jbGVhckNvYXQuaXNUaW50RW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIFRvb2xzLldhcm4oYENsZWFyIENvbG9yIHRpbnQgaXMgbm90IHN1cHBvcnRlZCBmb3IgZ2xURiBleHBvcnQuIElnbm9yaW5nIGZvcjogJHtiYWJ5bG9uTWF0ZXJpYWwubmFtZX1gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsLmNsZWFyQ29hdC5yZW1hcEYwT25JbnRlcmZhY2VDaGFuZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBUb29scy5XYXJuKGBDbGVhciBDb2xvciBGMCByZW1hcHBpbmcgaXMgbm90IHN1cHBvcnRlZCBmb3IgZ2xURiBleHBvcnQuIElnbm9yaW5nIGZvcjogJHtiYWJ5bG9uTWF0ZXJpYWwubmFtZX1gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjbGVhckNvYXROb3JtYWxUZXh0dXJlSW5mbyA9IHRoaXMuX2V4cG9ydGVyLl9tYXRlcmlhbEV4cG9ydGVyLmdldFRleHR1cmVJbmZvKGJhYnlsb25NYXRlcmlhbC5jbGVhckNvYXQuYnVtcFRleHR1cmUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGNsZWFyQ29hdEluZm86IElLSFJNYXRlcmlhbHNDbGVhcmNvYXQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJjb2F0RmFjdG9yOiBiYWJ5bG9uTWF0ZXJpYWwuY2xlYXJDb2F0LmludGVuc2l0eSxcclxuICAgICAgICAgICAgICAgICAgICBjbGVhcmNvYXRUZXh0dXJlOiBjbGVhckNvYXRUZXh0dXJlSW5mbyA/PyB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJjb2F0Um91Z2huZXNzRmFjdG9yOiBiYWJ5bG9uTWF0ZXJpYWwuY2xlYXJDb2F0LnJvdWdobmVzcyxcclxuICAgICAgICAgICAgICAgICAgICBjbGVhcmNvYXRSb3VnaG5lc3NUZXh0dXJlOiBjbGVhckNvYXRUZXh0dXJlUm91Z2huZXNzSW5mbyA/PyB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJjb2F0Tm9ybWFsVGV4dHVyZTogY2xlYXJDb2F0Tm9ybWFsVGV4dHVyZUluZm8gPz8gdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY2xlYXJDb2F0SW5mby5jbGVhcmNvYXRUZXh0dXJlICE9PSBudWxsIHx8IGNsZWFyQ29hdEluZm8uY2xlYXJjb2F0Um91Z2huZXNzVGV4dHVyZSAhPT0gbnVsbCB8fCBjbGVhckNvYXRJbmZvLmNsZWFyY29hdFJvdWdobmVzc1RleHR1cmUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9leHBvcnRlci5fbWF0ZXJpYWxOZWVkc1VWc1NldC5hZGQoYmFieWxvbk1hdGVyaWFsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBub2RlLmV4dGVuc2lvbnNbTkFNRV0gPSBjbGVhckNvYXRJbmZvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc29sdmUobm9kZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkdMVEZFeHBvcnRlci5SZWdpc3RlckV4dGVuc2lvbihOQU1FLCAoZXhwb3J0ZXIpID0+IG5ldyBLSFJfbWF0ZXJpYWxzX2NsZWFyY29hdChleHBvcnRlcikpO1xyXG4iLCJpbXBvcnQgdHlwZSB7IElNYXRlcmlhbCwgSUtIUk1hdGVyaWFsc0RpZmZ1c2VUcmFuc21pc3Npb24gfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB0eXBlIHsgSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyIH0gZnJvbSBcIi4uL2dsVEZFeHBvcnRlckV4dGVuc2lvblwiO1xyXG5pbXBvcnQgeyBHTFRGRXhwb3J0ZXIgfSBmcm9tIFwiLi4vZ2xURkV4cG9ydGVyXCI7XHJcbmltcG9ydCB0eXBlIHsgTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgUEJSTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvUEJSL3Bick1hdGVyaWFsXCI7XHJcbmltcG9ydCB0eXBlIHsgQmFzZVRleHR1cmUgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvYmFzZVRleHR1cmVcIjtcclxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSBcImNvcmUvTWlzYy9sb2dnZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCJjb3JlL3R5cGVzXCI7XHJcblxyXG5jb25zdCBOQU1FID0gXCJLSFJfbWF0ZXJpYWxzX2RpZmZ1c2VfdHJhbnNtaXNzaW9uXCI7XHJcblxyXG4vKipcclxuICogR2V0IHRoZSBhcHByb3ByaWF0ZSB0cmFuc2x1Y2VuY3kgaW50ZW5zaXR5IHRleHR1cmUgZm9yIHRoZSBtYXRlcmlhbC5cclxuICogQGludGVybmFsXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRUcmFuc2x1Y2VuY3lJbnRlbnNpdHlUZXh0dXJlKGNvbnRleHQ6IHN0cmluZywgYmFieWxvbk1hdGVyaWFsOiBQQlJNYXRlcmlhbCk6IE51bGxhYmxlPEJhc2VUZXh0dXJlPiB7XHJcbiAgICBjb25zdCBzdWJzID0gYmFieWxvbk1hdGVyaWFsLnN1YlN1cmZhY2U7XHJcbiAgICBsZXQgdGV4dHVyZSA9IG51bGw7XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgdHJhbnNsdWNlbmN5IGludGVuc2l0eSB0ZXh0dXJlIGlzIGF2YWlsYWJsZSBvciBjYW4gYmUgZGVyaXZlZCBmcm9tIHRoaWNrbmVzcyB0ZXh0dXJlXHJcbiAgICBpZiAoc3Vicy50cmFuc2x1Y2VuY3lJbnRlbnNpdHlUZXh0dXJlKSB7XHJcbiAgICAgICAgdGV4dHVyZSA9IHN1YnMudHJhbnNsdWNlbmN5SW50ZW5zaXR5VGV4dHVyZTtcclxuICAgIH0gZWxzZSBpZiAoc3Vicy50aGlja25lc3NUZXh0dXJlICYmIHN1YnMudXNlTWFza0Zyb21UaGlja25lc3NUZXh0dXJlKSB7XHJcbiAgICAgICAgdGV4dHVyZSA9IHN1YnMudGhpY2tuZXNzVGV4dHVyZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGV4dHVyZSAmJiAhc3Vicy51c2VHbHRmU3R5bGVUZXh0dXJlcykge1xyXG4gICAgICAgIExvZ2dlci5XYXJuKGAke2NvbnRleHR9OiBUcmFuc2x1Y2VuY3kgaW50ZW5zaXR5IHRleHR1cmUgaXMgbm90IHN1cHBvcnRlZCB3aGVuIHVzZUdsdGZTdHlsZVRleHR1cmVzID0gZmFsc2UuIElnbm9yaW5nIGZvcjogJHtiYWJ5bG9uTWF0ZXJpYWwubmFtZX1gLCAxKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGV4dHVyZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFtQcm9wb3NlZCBTcGVjaWZpY2F0aW9uXShodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvcHVsbC8xODI1KVxyXG4gKiAhISEgRXhwZXJpbWVudGFsIEV4dGVuc2lvbiBTdWJqZWN0IHRvIENoYW5nZXMgISEhXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBjbGFzcyBLSFJfbWF0ZXJpYWxzX2RpZmZ1c2VfdHJhbnNtaXNzaW9uIGltcGxlbWVudHMgSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyIHtcclxuICAgIC8qKiBOYW1lIG9mIHRoaXMgZXh0ZW5zaW9uICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZSA9IE5BTUU7XHJcblxyXG4gICAgLyoqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyBlbmFibGVkICovXHJcbiAgICBwdWJsaWMgZW5hYmxlZCA9IHRydWU7XHJcblxyXG4gICAgLyoqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyByZXF1aXJlZCAqL1xyXG4gICAgcHVibGljIHJlcXVpcmVkID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBfZXhwb3J0ZXI6IEdMVEZFeHBvcnRlcjtcclxuXHJcbiAgICBwcml2YXRlIF93YXNVc2VkID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZXhwb3J0ZXI6IEdMVEZFeHBvcnRlcikge1xyXG4gICAgICAgIHRoaXMuX2V4cG9ydGVyID0gZXhwb3J0ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7fVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBnZXQgd2FzVXNlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fd2FzVXNlZDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFmdGVyIGV4cG9ydGluZyBhIG1hdGVyaWFsLCBkZWFsIHdpdGggYWRkaXRpb25hbCB0ZXh0dXJlc1xyXG4gICAgICogQHBhcmFtIGNvbnRleHQgR0xURiBjb250ZXh0IG9mIHRoZSBtYXRlcmlhbFxyXG4gICAgICogQHBhcmFtIG5vZGUgZXhwb3J0ZWQgR0xURiBub2RlXHJcbiAgICAgKiBAcGFyYW0gYmFieWxvbk1hdGVyaWFsIGNvcnJlc3BvbmRpbmcgYmFieWxvbiBtYXRlcmlhbFxyXG4gICAgICogQHJldHVybnMgYXJyYXkgb2YgYWRkaXRpb25hbCB0ZXh0dXJlcyB0byBleHBvcnRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHBvc3RFeHBvcnRNYXRlcmlhbEFkZGl0aW9uYWxUZXh0dXJlcz8oY29udGV4dDogc3RyaW5nLCBub2RlOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBCYXNlVGV4dHVyZVtdIHtcclxuICAgICAgICBjb25zdCBhZGRpdGlvbmFsVGV4dHVyZXM6IEJhc2VUZXh0dXJlW10gPSBbXTtcclxuXHJcbiAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbCBpbnN0YW5jZW9mIFBCUk1hdGVyaWFsICYmIHRoaXMuX2lzRXh0ZW5zaW9uRW5hYmxlZChiYWJ5bG9uTWF0ZXJpYWwpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRyYW5zbHVjZW5jeUludGVuc2l0eVRleHR1cmUgPSBnZXRUcmFuc2x1Y2VuY3lJbnRlbnNpdHlUZXh0dXJlKGNvbnRleHQsIGJhYnlsb25NYXRlcmlhbCk7XHJcbiAgICAgICAgICAgIGlmICh0cmFuc2x1Y2VuY3lJbnRlbnNpdHlUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICBhZGRpdGlvbmFsVGV4dHVyZXMucHVzaCh0cmFuc2x1Y2VuY3lJbnRlbnNpdHlUZXh0dXJlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsLnN1YlN1cmZhY2UudHJhbnNsdWNlbmN5Q29sb3JUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICBhZGRpdGlvbmFsVGV4dHVyZXMucHVzaChiYWJ5bG9uTWF0ZXJpYWwuc3ViU3VyZmFjZS50cmFuc2x1Y2VuY3lDb2xvclRleHR1cmUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBhZGRpdGlvbmFsVGV4dHVyZXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYWRkaXRpb25hbFRleHR1cmVzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2lzRXh0ZW5zaW9uRW5hYmxlZChtYXQ6IFBCUk1hdGVyaWFsKTogYm9vbGVhbiB7XHJcbiAgICAgICAgLy8gVGhpcyBleHRlbnNpb24gbXVzdCBub3QgYmUgdXNlZCBvbiBhIG1hdGVyaWFsIHRoYXQgYWxzbyB1c2VzIEtIUl9tYXRlcmlhbHNfdW5saXRcclxuICAgICAgICBpZiAobWF0LnVubGl0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc3VicyA9IG1hdC5zdWJTdXJmYWNlO1xyXG4gICAgICAgIGlmICghc3Vicy5pc1RyYW5zbHVjZW5jeUVuYWJsZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgIW1hdC51bmxpdCAmJlxyXG4gICAgICAgICAgICAhc3Vicy51c2VBbGJlZG9Ub1RpbnRUcmFuc2x1Y2VuY3kgJiZcclxuICAgICAgICAgICAgc3Vicy51c2VHbHRmU3R5bGVUZXh0dXJlcyAmJlxyXG4gICAgICAgICAgICBzdWJzLnZvbHVtZUluZGV4T2ZSZWZyYWN0aW9uID09PSAxICYmXHJcbiAgICAgICAgICAgIHN1YnMubWluaW11bVRoaWNrbmVzcyA9PT0gMCAmJlxyXG4gICAgICAgICAgICBzdWJzLm1heGltdW1UaGlja25lc3MgPT09IDBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWZ0ZXIgZXhwb3J0aW5nIGEgbWF0ZXJpYWxcclxuICAgICAqIEBwYXJhbSBjb250ZXh0IEdMVEYgY29udGV4dCBvZiB0aGUgbWF0ZXJpYWxcclxuICAgICAqIEBwYXJhbSBub2RlIGV4cG9ydGVkIEdMVEYgbm9kZVxyXG4gICAgICogQHBhcmFtIGJhYnlsb25NYXRlcmlhbCBjb3JyZXNwb25kaW5nIGJhYnlsb24gbWF0ZXJpYWxcclxuICAgICAqIEByZXR1cm5zIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSB1cGRhdGVkIG5vZGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHBvc3RFeHBvcnRNYXRlcmlhbEFzeW5jPyhjb250ZXh0OiBzdHJpbmcsIG5vZGU6IElNYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCk6IFByb21pc2U8SU1hdGVyaWFsPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwgaW5zdGFuY2VvZiBQQlJNYXRlcmlhbCAmJiB0aGlzLl9pc0V4dGVuc2lvbkVuYWJsZWQoYmFieWxvbk1hdGVyaWFsKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fd2FzVXNlZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3VicyA9IGJhYnlsb25NYXRlcmlhbC5zdWJTdXJmYWNlO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdHJhbnNsdWNlbmN5SW50ZW5zaXR5VGV4dHVyZSA9IGdldFRyYW5zbHVjZW5jeUludGVuc2l0eVRleHR1cmUoY29udGV4dCwgYmFieWxvbk1hdGVyaWFsKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkaWZmdXNlVHJhbnNtaXNzaW9uRmFjdG9yID0gc3Vicy50cmFuc2x1Y2VuY3lJbnRlbnNpdHkgPT0gMCA/IHVuZGVmaW5lZCA6IHN1YnMudHJhbnNsdWNlbmN5SW50ZW5zaXR5O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGlmZnVzZVRyYW5zbWlzc2lvblRleHR1cmUgPSB0aGlzLl9leHBvcnRlci5fbWF0ZXJpYWxFeHBvcnRlci5nZXRUZXh0dXJlSW5mbyh0cmFuc2x1Y2VuY3lJbnRlbnNpdHlUZXh0dXJlKSA/PyB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkaWZmdXNlVHJhbnNtaXNzaW9uQ29sb3JGYWN0b3IgPSAhc3Vicy50cmFuc2x1Y2VuY3lDb2xvciB8fCBzdWJzLnRyYW5zbHVjZW5jeUNvbG9yLmVxdWFsc0Zsb2F0cygxLjAsIDEuMCwgMS4wKSA/IHVuZGVmaW5lZCA6IHN1YnMudHJhbnNsdWNlbmN5Q29sb3IuYXNBcnJheSgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGlmZnVzZVRyYW5zbWlzc2lvbkNvbG9yVGV4dHVyZSA9IHRoaXMuX2V4cG9ydGVyLl9tYXRlcmlhbEV4cG9ydGVyLmdldFRleHR1cmVJbmZvKHN1YnMudHJhbnNsdWNlbmN5Q29sb3JUZXh0dXJlKSA/PyB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZGlmZnVzZVRyYW5zbWlzc2lvbkluZm86IElLSFJNYXRlcmlhbHNEaWZmdXNlVHJhbnNtaXNzaW9uID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpZmZ1c2VUcmFuc21pc3Npb25GYWN0b3IsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlmZnVzZVRyYW5zbWlzc2lvblRleHR1cmUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlmZnVzZVRyYW5zbWlzc2lvbkNvbG9yRmFjdG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpZmZ1c2VUcmFuc21pc3Npb25Db2xvclRleHR1cmUsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChkaWZmdXNlVHJhbnNtaXNzaW9uVGV4dHVyZSB8fCBkaWZmdXNlVHJhbnNtaXNzaW9uQ29sb3JUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXhwb3J0ZXIuX21hdGVyaWFsTmVlZHNVVnNTZXQuYWRkKGJhYnlsb25NYXRlcmlhbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbm9kZS5leHRlbnNpb25zID0gbm9kZS5leHRlbnNpb25zIHx8IHt9O1xyXG4gICAgICAgICAgICAgICAgbm9kZS5leHRlbnNpb25zW05BTUVdID0gZGlmZnVzZVRyYW5zbWlzc2lvbkluZm87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzb2x2ZShub2RlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuR0xURkV4cG9ydGVyLlJlZ2lzdGVyRXh0ZW5zaW9uKE5BTUUsIChleHBvcnRlcikgPT4gbmV3IEtIUl9tYXRlcmlhbHNfZGlmZnVzZV90cmFuc21pc3Npb24oZXhwb3J0ZXIpKTtcclxuIiwiaW1wb3J0IHR5cGUgeyBJTWF0ZXJpYWwsIElLSFJNYXRlcmlhbHNEaXNwZXJzaW9uIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgdHlwZSB7IElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMiB9IGZyb20gXCIuLi9nbFRGRXhwb3J0ZXJFeHRlbnNpb25cIjtcclxuaW1wb3J0IHsgR0xURkV4cG9ydGVyIH0gZnJvbSBcIi4uL2dsVEZFeHBvcnRlclwiO1xyXG5pbXBvcnQgdHlwZSB7IE1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IFBCUk1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1BCUi9wYnJNYXRlcmlhbFwiO1xyXG5cclxuY29uc3QgTkFNRSA9IFwiS0hSX21hdGVyaWFsc19kaXNwZXJzaW9uXCI7XHJcblxyXG4vKipcclxuICogW1NwZWNpZmljYXRpb25dKGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9ibG9iLzg3YmQ2NGE3ZjVlMjNjODRiNmFlZjJlNjA4MjA2OTU4M2VkMGRkYjQvZXh0ZW5zaW9ucy8yLjAvS2hyb25vcy9LSFJfbWF0ZXJpYWxzX2Rpc3BlcnNpb24vUkVBRE1FLm1kKVxyXG4gKiBAZXhwZXJpbWVudGFsXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBjbGFzcyBLSFJfbWF0ZXJpYWxzX2Rpc3BlcnNpb24gaW1wbGVtZW50cyBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIge1xyXG4gICAgLyoqIE5hbWUgb2YgdGhpcyBleHRlbnNpb24gKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lID0gTkFNRTtcclxuXHJcbiAgICAvKiogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIGVuYWJsZWQgKi9cclxuICAgIHB1YmxpYyBlbmFibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAvKiogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIHJlcXVpcmVkICovXHJcbiAgICBwdWJsaWMgcmVxdWlyZWQgPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIF93YXNVc2VkID0gZmFsc2U7XHJcblxyXG4gICAgLyoqIENvbnN0cnVjdG9yICovXHJcbiAgICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gICAgLyoqIERpc3Bvc2UgKi9cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge31cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgZ2V0IHdhc1VzZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dhc1VzZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfaXNFeHRlbnNpb25FbmFibGVkKG1hdDogUEJSTWF0ZXJpYWwpOiBib29sZWFuIHtcclxuICAgICAgICAvLyBUaGlzIGV4dGVuc2lvbiBtdXN0IG5vdCBiZSB1c2VkIG9uIGEgbWF0ZXJpYWwgdGhhdCBhbHNvIHVzZXMgS0hSX21hdGVyaWFsc191bmxpdFxyXG4gICAgICAgIGlmIChtYXQudW5saXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzdWJzID0gbWF0LnN1YlN1cmZhY2U7XHJcbiAgICAgICAgLy8gdGhpcyBleHRlbnNpb24gcmVxdWlyZXMgcmVmcmFjdGlvbiB0byBiZSBlbmFibGVkLlxyXG4gICAgICAgIGlmICghc3Vicy5pc1JlZnJhY3Rpb25FbmFibGVkICYmICFzdWJzLmlzRGlzcGVyc2lvbkVuYWJsZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFmdGVyIGV4cG9ydGluZyBhIG1hdGVyaWFsXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBHTFRGIGNvbnRleHQgb2YgdGhlIG1hdGVyaWFsXHJcbiAgICAgKiBAcGFyYW0gbm9kZSBleHBvcnRlZCBHTFRGIG5vZGVcclxuICAgICAqIEBwYXJhbSBiYWJ5bG9uTWF0ZXJpYWwgY29ycmVzcG9uZGluZyBiYWJ5bG9uIG1hdGVyaWFsXHJcbiAgICAgKiBAcmV0dXJucyBwcm9taXNlLCByZXNvbHZlcyB3aXRoIHRoZSBtYXRlcmlhbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcG9zdEV4cG9ydE1hdGVyaWFsQXN5bmM/KGNvbnRleHQ6IHN0cmluZywgbm9kZTogSU1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsKTogUHJvbWlzZTxJTWF0ZXJpYWw+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbCBpbnN0YW5jZW9mIFBCUk1hdGVyaWFsICYmIHRoaXMuX2lzRXh0ZW5zaW9uRW5hYmxlZChiYWJ5bG9uTWF0ZXJpYWwpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl93YXNVc2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdWJzID0gYmFieWxvbk1hdGVyaWFsLnN1YlN1cmZhY2U7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkaXNwZXJzaW9uID0gc3Vicy5kaXNwZXJzaW9uO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpc3BlcnNpb25JbmZvOiBJS0hSTWF0ZXJpYWxzRGlzcGVyc2lvbiA9IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwZXJzaW9uOiBkaXNwZXJzaW9uLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIG5vZGUuZXh0ZW5zaW9ucyA9IG5vZGUuZXh0ZW5zaW9ucyB8fCB7fTtcclxuICAgICAgICAgICAgICAgIG5vZGUuZXh0ZW5zaW9uc1tOQU1FXSA9IGRpc3BlcnNpb25JbmZvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc29sdmUobm9kZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkdMVEZFeHBvcnRlci5SZWdpc3RlckV4dGVuc2lvbihOQU1FLCAoKSA9PiBuZXcgS0hSX21hdGVyaWFsc19kaXNwZXJzaW9uKCkpO1xyXG4iLCJpbXBvcnQgdHlwZSB7IElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMiB9IGZyb20gXCIuLi9nbFRGRXhwb3J0ZXJFeHRlbnNpb25cIjtcclxuaW1wb3J0IHsgR0xURkV4cG9ydGVyIH0gZnJvbSBcIi4uL2dsVEZFeHBvcnRlclwiO1xyXG5pbXBvcnQgdHlwZSB7IE1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IFBCUk1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1BCUi9wYnJNYXRlcmlhbFwiO1xyXG5pbXBvcnQgdHlwZSB7IElNYXRlcmlhbCwgSUtIUk1hdGVyaWFsc0VtaXNzaXZlU3RyZW5ndGggfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcblxyXG5jb25zdCBOQU1FID0gXCJLSFJfbWF0ZXJpYWxzX2VtaXNzaXZlX3N0cmVuZ3RoXCI7XHJcblxyXG4vKipcclxuICogW1NwZWNpZmljYXRpb25dKGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9ibG9iL21haW4vZXh0ZW5zaW9ucy8yLjAvS2hyb25vcy9LSFJfbWF0ZXJpYWxzX2VtaXNzaXZlX3N0cmVuZ3RoL1JFQURNRS5tZClcclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGNsYXNzIEtIUl9tYXRlcmlhbHNfZW1pc3NpdmVfc3RyZW5ndGggaW1wbGVtZW50cyBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIge1xyXG4gICAgLyoqIE5hbWUgb2YgdGhpcyBleHRlbnNpb24gKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lID0gTkFNRTtcclxuXHJcbiAgICAvKiogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIGVuYWJsZWQgKi9cclxuICAgIHB1YmxpYyBlbmFibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAvKiogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIHJlcXVpcmVkICovXHJcbiAgICBwdWJsaWMgcmVxdWlyZWQgPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIF93YXNVc2VkID0gZmFsc2U7XHJcblxyXG4gICAgLyoqIERpc3Bvc2UgKi9cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge31cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgZ2V0IHdhc1VzZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dhc1VzZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZnRlciBleHBvcnRpbmcgYSBtYXRlcmlhbFxyXG4gICAgICogQHBhcmFtIGNvbnRleHQgR0xURiBjb250ZXh0IG9mIHRoZSBtYXRlcmlhbFxyXG4gICAgICogQHBhcmFtIG5vZGUgZXhwb3J0ZWQgR0xURiBub2RlXHJcbiAgICAgKiBAcGFyYW0gYmFieWxvbk1hdGVyaWFsIGNvcnJlc3BvbmRpbmcgYmFieWxvbiBtYXRlcmlhbFxyXG4gICAgICogQHJldHVybnMgcHJvbWlzZSwgcmVzb2x2ZXMgd2l0aCB0aGUgbWF0ZXJpYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIHBvc3RFeHBvcnRNYXRlcmlhbEFzeW5jKGNvbnRleHQ6IHN0cmluZywgbm9kZTogSU1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsKTogUHJvbWlzZTxJTWF0ZXJpYWw+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgaWYgKCEoYmFieWxvbk1hdGVyaWFsIGluc3RhbmNlb2YgUEJSTWF0ZXJpYWwpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShub2RlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgZW1pc3NpdmVDb2xvciA9IGJhYnlsb25NYXRlcmlhbC5lbWlzc2l2ZUNvbG9yLmFzQXJyYXkoKTtcclxuICAgICAgICAgICAgY29uc3QgdGVtcEVtaXNzaXZlU3RyZW5ndGggPSBNYXRoLm1heCguLi5lbWlzc2l2ZUNvbG9yKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0ZW1wRW1pc3NpdmVTdHJlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3dhc1VzZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIG5vZGUuZXh0ZW5zaW9ucyB8fD0ge307XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZW1pc3NpdmVTdHJlbmd0aEluZm86IElLSFJNYXRlcmlhbHNFbWlzc2l2ZVN0cmVuZ3RoID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGVtaXNzaXZlU3RyZW5ndGg6IHRlbXBFbWlzc2l2ZVN0cmVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBOb3JtYWxpemUgZWFjaCB2YWx1ZSBvZiB0aGUgZW1pc3NpdmUgZmFjdG9yIHRvIGhhdmUgYSBtYXggdmFsdWUgb2YgMVxyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3RW1pc3NpdmVGYWN0b3IgPSBiYWJ5bG9uTWF0ZXJpYWwuZW1pc3NpdmVDb2xvci5zY2FsZSgxIC8gZW1pc3NpdmVTdHJlbmd0aEluZm8uZW1pc3NpdmVTdHJlbmd0aCk7XHJcblxyXG4gICAgICAgICAgICAgICAgbm9kZS5lbWlzc2l2ZUZhY3RvciA9IG5ld0VtaXNzaXZlRmFjdG9yLmFzQXJyYXkoKTtcclxuICAgICAgICAgICAgICAgIG5vZGUuZXh0ZW5zaW9uc1tOQU1FXSA9IGVtaXNzaXZlU3RyZW5ndGhJbmZvO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShub2RlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuR0xURkV4cG9ydGVyLlJlZ2lzdGVyRXh0ZW5zaW9uKE5BTUUsIChleHBvcnRlcikgPT4gbmV3IEtIUl9tYXRlcmlhbHNfZW1pc3NpdmVfc3RyZW5ndGgoKSk7XHJcbiIsImltcG9ydCB0eXBlIHsgSU1hdGVyaWFsLCBJS0hSTWF0ZXJpYWxzSW9yIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgdHlwZSB7IElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMiB9IGZyb20gXCIuLi9nbFRGRXhwb3J0ZXJFeHRlbnNpb25cIjtcclxuaW1wb3J0IHsgR0xURkV4cG9ydGVyIH0gZnJvbSBcIi4uL2dsVEZFeHBvcnRlclwiO1xyXG5pbXBvcnQgdHlwZSB7IE1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IFBCUk1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1BCUi9wYnJNYXRlcmlhbFwiO1xyXG5cclxuY29uc3QgTkFNRSA9IFwiS0hSX21hdGVyaWFsc19pb3JcIjtcclxuXHJcbi8qKlxyXG4gKiBbU3BlY2lmaWNhdGlvbl0oaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFpbi9leHRlbnNpb25zLzIuMC9LaHJvbm9zL0tIUl9tYXRlcmlhbHNfaW9yL1JFQURNRS5tZClcclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGNsYXNzIEtIUl9tYXRlcmlhbHNfaW9yIGltcGxlbWVudHMgSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyIHtcclxuICAgIC8qKiBOYW1lIG9mIHRoaXMgZXh0ZW5zaW9uICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZSA9IE5BTUU7XHJcblxyXG4gICAgLyoqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyBlbmFibGVkICovXHJcbiAgICBwdWJsaWMgZW5hYmxlZCA9IHRydWU7XHJcblxyXG4gICAgLyoqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyByZXF1aXJlZCAqL1xyXG4gICAgcHVibGljIHJlcXVpcmVkID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBfd2FzVXNlZCA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgICAvKiogRGlzcG9zZSAqL1xyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7fVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBnZXQgd2FzVXNlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fd2FzVXNlZDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9pc0V4dGVuc2lvbkVuYWJsZWQobWF0OiBQQlJNYXRlcmlhbCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIC8vIFRoaXMgZXh0ZW5zaW9uIG11c3Qgbm90IGJlIHVzZWQgb24gYSBtYXRlcmlhbCB0aGF0IGFsc28gdXNlcyBLSFJfbWF0ZXJpYWxzX3VubGl0XHJcbiAgICAgICAgaWYgKG1hdC51bmxpdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtYXQuaW5kZXhPZlJlZnJhY3Rpb24gIT0gdW5kZWZpbmVkICYmIG1hdC5pbmRleE9mUmVmcmFjdGlvbiAhPSAxLjU7IC8vIDEuNSBpcyBub3JtYXRpdmUgZGVmYXVsdCB2YWx1ZS5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFmdGVyIGV4cG9ydGluZyBhIG1hdGVyaWFsXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBHTFRGIGNvbnRleHQgb2YgdGhlIG1hdGVyaWFsXHJcbiAgICAgKiBAcGFyYW0gbm9kZSBleHBvcnRlZCBHTFRGIG5vZGVcclxuICAgICAqIEBwYXJhbSBiYWJ5bG9uTWF0ZXJpYWwgY29ycmVzcG9uZGluZyBiYWJ5bG9uIG1hdGVyaWFsXHJcbiAgICAgKiBAcmV0dXJucyBwcm9taXNlLCByZXNvbHZlcyB3aXRoIHRoZSBtYXRlcmlhbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcG9zdEV4cG9ydE1hdGVyaWFsQXN5bmM/KGNvbnRleHQ6IHN0cmluZywgbm9kZTogSU1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsKTogUHJvbWlzZTxJTWF0ZXJpYWw+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbCBpbnN0YW5jZW9mIFBCUk1hdGVyaWFsICYmIHRoaXMuX2lzRXh0ZW5zaW9uRW5hYmxlZChiYWJ5bG9uTWF0ZXJpYWwpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl93YXNVc2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBpb3JJbmZvOiBJS0hSTWF0ZXJpYWxzSW9yID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlvcjogYmFieWxvbk1hdGVyaWFsLmluZGV4T2ZSZWZyYWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIG5vZGUuZXh0ZW5zaW9ucyA9IG5vZGUuZXh0ZW5zaW9ucyB8fCB7fTtcclxuICAgICAgICAgICAgICAgIG5vZGUuZXh0ZW5zaW9uc1tOQU1FXSA9IGlvckluZm87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzb2x2ZShub2RlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xyXG5HTFRGRXhwb3J0ZXIuUmVnaXN0ZXJFeHRlbnNpb24oTkFNRSwgKGV4cG9ydGVyKSA9PiBuZXcgS0hSX21hdGVyaWFsc19pb3IoKSk7XHJcbiIsImltcG9ydCB0eXBlIHsgSU1hdGVyaWFsLCBJS0hSTWF0ZXJpYWxzSXJpZGVzY2VuY2UgfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB0eXBlIHsgSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyIH0gZnJvbSBcIi4uL2dsVEZFeHBvcnRlckV4dGVuc2lvblwiO1xyXG5pbXBvcnQgeyBHTFRGRXhwb3J0ZXIgfSBmcm9tIFwiLi4vZ2xURkV4cG9ydGVyXCI7XHJcbmltcG9ydCB0eXBlIHsgTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgUEJSQmFzZU1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1BCUi9wYnJCYXNlTWF0ZXJpYWxcIjtcclxuaW1wb3J0IHR5cGUgeyBCYXNlVGV4dHVyZSB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9UZXh0dXJlcy9iYXNlVGV4dHVyZVwiO1xyXG5cclxuY29uc3QgTkFNRSA9IFwiS0hSX21hdGVyaWFsc19pcmlkZXNjZW5jZVwiO1xyXG5cclxuLyoqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgY2xhc3MgS0hSX21hdGVyaWFsc19pcmlkZXNjZW5jZSBpbXBsZW1lbnRzIElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMiB7XHJcbiAgICAvKiogTmFtZSBvZiB0aGlzIGV4dGVuc2lvbiAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBOQU1FO1xyXG5cclxuICAgIC8qKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgZW5hYmxlZCAqL1xyXG4gICAgcHVibGljIGVuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgIC8qKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgcmVxdWlyZWQgKi9cclxuICAgIHB1YmxpYyByZXF1aXJlZCA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgX2V4cG9ydGVyOiBHTFRGRXhwb3J0ZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBfd2FzVXNlZCA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGV4cG9ydGVyOiBHTFRGRXhwb3J0ZXIpIHtcclxuICAgICAgICB0aGlzLl9leHBvcnRlciA9IGV4cG9ydGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge31cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgZ2V0IHdhc1VzZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dhc1VzZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBvc3RFeHBvcnRNYXRlcmlhbEFkZGl0aW9uYWxUZXh0dXJlcz8oY29udGV4dDogc3RyaW5nLCBub2RlOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBCYXNlVGV4dHVyZVtdIHtcclxuICAgICAgICBjb25zdCBhZGRpdGlvbmFsVGV4dHVyZXM6IEJhc2VUZXh0dXJlW10gPSBbXTtcclxuICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsIGluc3RhbmNlb2YgUEJSQmFzZU1hdGVyaWFsKSB7XHJcbiAgICAgICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwuaXJpZGVzY2VuY2UuaXNFbmFibGVkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsLmlyaWRlc2NlbmNlLnRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRpdGlvbmFsVGV4dHVyZXMucHVzaChiYWJ5bG9uTWF0ZXJpYWwuaXJpZGVzY2VuY2UudGV4dHVyZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsLmlyaWRlc2NlbmNlLnRoaWNrbmVzc1RleHR1cmUgJiYgYmFieWxvbk1hdGVyaWFsLmlyaWRlc2NlbmNlLnRoaWNrbmVzc1RleHR1cmUgIT09IGJhYnlsb25NYXRlcmlhbC5pcmlkZXNjZW5jZS50ZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkaXRpb25hbFRleHR1cmVzLnB1c2goYmFieWxvbk1hdGVyaWFsLmlyaWRlc2NlbmNlLnRoaWNrbmVzc1RleHR1cmUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFkZGl0aW9uYWxUZXh0dXJlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwb3N0RXhwb3J0TWF0ZXJpYWxBc3luYz8oY29udGV4dDogc3RyaW5nLCBub2RlOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBQcm9taXNlPElNYXRlcmlhbD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsIGluc3RhbmNlb2YgUEJSQmFzZU1hdGVyaWFsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWJhYnlsb25NYXRlcmlhbC5pcmlkZXNjZW5jZS5pc0VuYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl93YXNVc2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBub2RlLmV4dGVuc2lvbnMgPSBub2RlLmV4dGVuc2lvbnMgfHwge307XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgaXJpZGVzY2VuY2VUZXh0dXJlSW5mbyA9IHRoaXMuX2V4cG9ydGVyLl9tYXRlcmlhbEV4cG9ydGVyLmdldFRleHR1cmVJbmZvKGJhYnlsb25NYXRlcmlhbC5pcmlkZXNjZW5jZS50ZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlyaWRlc2NlbmNlVGhpY2tuZXNzVGV4dHVyZUluZm8gPSB0aGlzLl9leHBvcnRlci5fbWF0ZXJpYWxFeHBvcnRlci5nZXRUZXh0dXJlSW5mbyhiYWJ5bG9uTWF0ZXJpYWwuaXJpZGVzY2VuY2UudGhpY2tuZXNzVGV4dHVyZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgaXJpZGVzY2VuY2VJbmZvOiBJS0hSTWF0ZXJpYWxzSXJpZGVzY2VuY2UgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXJpZGVzY2VuY2VGYWN0b3I6IGJhYnlsb25NYXRlcmlhbC5pcmlkZXNjZW5jZS5pbnRlbnNpdHksXHJcbiAgICAgICAgICAgICAgICAgICAgaXJpZGVzY2VuY2VJb3I6IGJhYnlsb25NYXRlcmlhbC5pcmlkZXNjZW5jZS5pbmRleE9mUmVmcmFjdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBpcmlkZXNjZW5jZVRoaWNrbmVzc01pbmltdW06IGJhYnlsb25NYXRlcmlhbC5pcmlkZXNjZW5jZS5taW5pbXVtVGhpY2tuZXNzLFxyXG4gICAgICAgICAgICAgICAgICAgIGlyaWRlc2NlbmNlVGhpY2tuZXNzTWF4aW11bTogYmFieWxvbk1hdGVyaWFsLmlyaWRlc2NlbmNlLm1heGltdW1UaGlja25lc3MsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlyaWRlc2NlbmNlVGV4dHVyZTogaXJpZGVzY2VuY2VUZXh0dXJlSW5mbyA/PyB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgaXJpZGVzY2VuY2VUaGlja25lc3NUZXh0dXJlOiBpcmlkZXNjZW5jZVRoaWNrbmVzc1RleHR1cmVJbmZvID8/IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGlyaWRlc2NlbmNlSW5mby5pcmlkZXNjZW5jZVRleHR1cmUgIT09IG51bGwgfHwgaXJpZGVzY2VuY2VJbmZvLmlyaWRlc2NlbmNlVGhpY2tuZXNzVGV4dHVyZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2V4cG9ydGVyLl9tYXRlcmlhbE5lZWRzVVZzU2V0LmFkZChiYWJ5bG9uTWF0ZXJpYWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIG5vZGUuZXh0ZW5zaW9uc1tOQU1FXSA9IGlyaWRlc2NlbmNlSW5mbztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXNvbHZlKG5vZGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5HTFRGRXhwb3J0ZXIuUmVnaXN0ZXJFeHRlbnNpb24oTkFNRSwgKGV4cG9ydGVyKSA9PiBuZXcgS0hSX21hdGVyaWFsc19pcmlkZXNjZW5jZShleHBvcnRlcikpO1xyXG4iLCJpbXBvcnQgdHlwZSB7IElNYXRlcmlhbCwgSUtIUk1hdGVyaWFsc1NoZWVuIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgdHlwZSB7IElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMiB9IGZyb20gXCIuLi9nbFRGRXhwb3J0ZXJFeHRlbnNpb25cIjtcclxuaW1wb3J0IHsgR0xURkV4cG9ydGVyIH0gZnJvbSBcIi4uL2dsVEZFeHBvcnRlclwiO1xyXG5pbXBvcnQgdHlwZSB7IE1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IFBCUk1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1BCUi9wYnJNYXRlcmlhbFwiO1xyXG5pbXBvcnQgdHlwZSB7IEJhc2VUZXh0dXJlIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1RleHR1cmVzL2Jhc2VUZXh0dXJlXCI7XHJcblxyXG5jb25zdCBOQU1FID0gXCJLSFJfbWF0ZXJpYWxzX3NoZWVuXCI7XHJcblxyXG4vKipcclxuICogQGludGVybmFsXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBjbGFzcyBLSFJfbWF0ZXJpYWxzX3NoZWVuIGltcGxlbWVudHMgSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyIHtcclxuICAgIC8qKiBOYW1lIG9mIHRoaXMgZXh0ZW5zaW9uICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZSA9IE5BTUU7XHJcblxyXG4gICAgLyoqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyBlbmFibGVkICovXHJcbiAgICBwdWJsaWMgZW5hYmxlZCA9IHRydWU7XHJcblxyXG4gICAgLyoqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyByZXF1aXJlZCAqL1xyXG4gICAgcHVibGljIHJlcXVpcmVkID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBfd2FzVXNlZCA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgX2V4cG9ydGVyOiBHTFRGRXhwb3J0ZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZXhwb3J0ZXI6IEdMVEZFeHBvcnRlcikge1xyXG4gICAgICAgIHRoaXMuX2V4cG9ydGVyID0gZXhwb3J0ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7fVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBnZXQgd2FzVXNlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fd2FzVXNlZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcG9zdEV4cG9ydE1hdGVyaWFsQWRkaXRpb25hbFRleHR1cmVzKGNvbnRleHQ6IHN0cmluZywgbm9kZTogSU1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsKTogQmFzZVRleHR1cmVbXSB7XHJcbiAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbCBpbnN0YW5jZW9mIFBCUk1hdGVyaWFsKSB7XHJcbiAgICAgICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwuc2hlZW4uaXNFbmFibGVkICYmIGJhYnlsb25NYXRlcmlhbC5zaGVlbi50ZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW2JhYnlsb25NYXRlcmlhbC5zaGVlbi50ZXh0dXJlXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwb3N0RXhwb3J0TWF0ZXJpYWxBc3luYyhjb250ZXh0OiBzdHJpbmcsIG5vZGU6IElNYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCk6IFByb21pc2U8SU1hdGVyaWFsPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwgaW5zdGFuY2VvZiBQQlJNYXRlcmlhbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFiYWJ5bG9uTWF0ZXJpYWwuc2hlZW4uaXNFbmFibGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShub2RlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5fd2FzVXNlZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG5vZGUuZXh0ZW5zaW9ucyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5leHRlbnNpb25zID0ge307XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzaGVlbkluZm86IElLSFJNYXRlcmlhbHNTaGVlbiA9IHtcclxuICAgICAgICAgICAgICAgICAgICBzaGVlbkNvbG9yRmFjdG9yOiBiYWJ5bG9uTWF0ZXJpYWwuc2hlZW4uY29sb3IuYXNBcnJheSgpLFxyXG4gICAgICAgICAgICAgICAgICAgIHNoZWVuUm91Z2huZXNzRmFjdG9yOiBiYWJ5bG9uTWF0ZXJpYWwuc2hlZW4ucm91Z2huZXNzID8/IDAsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzaGVlbkluZm8uc2hlZW5Db2xvclRleHR1cmUgIT09IG51bGwgfHwgc2hlZW5JbmZvLnNoZWVuUm91Z2huZXNzVGV4dHVyZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2V4cG9ydGVyLl9tYXRlcmlhbE5lZWRzVVZzU2V0LmFkZChiYWJ5bG9uTWF0ZXJpYWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwuc2hlZW4udGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNoZWVuSW5mby5zaGVlbkNvbG9yVGV4dHVyZSA9IHRoaXMuX2V4cG9ydGVyLl9tYXRlcmlhbEV4cG9ydGVyLmdldFRleHR1cmVJbmZvKGJhYnlsb25NYXRlcmlhbC5zaGVlbi50ZXh0dXJlKSA/PyB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbC5zaGVlbi50ZXh0dXJlUm91Z2huZXNzICYmICFiYWJ5bG9uTWF0ZXJpYWwuc2hlZW4udXNlUm91Z2huZXNzRnJvbU1haW5UZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hlZW5JbmZvLnNoZWVuUm91Z2huZXNzVGV4dHVyZSA9IHRoaXMuX2V4cG9ydGVyLl9tYXRlcmlhbEV4cG9ydGVyLmdldFRleHR1cmVJbmZvKGJhYnlsb25NYXRlcmlhbC5zaGVlbi50ZXh0dXJlUm91Z2huZXNzKSA/PyB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGJhYnlsb25NYXRlcmlhbC5zaGVlbi50ZXh0dXJlICYmIGJhYnlsb25NYXRlcmlhbC5zaGVlbi51c2VSb3VnaG5lc3NGcm9tTWFpblRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBzaGVlbkluZm8uc2hlZW5Sb3VnaG5lc3NUZXh0dXJlID0gdGhpcy5fZXhwb3J0ZXIuX21hdGVyaWFsRXhwb3J0ZXIuZ2V0VGV4dHVyZUluZm8oYmFieWxvbk1hdGVyaWFsLnNoZWVuLnRleHR1cmUpID8/IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBub2RlLmV4dGVuc2lvbnNbTkFNRV0gPSBzaGVlbkluZm87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzb2x2ZShub2RlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuR0xURkV4cG9ydGVyLlJlZ2lzdGVyRXh0ZW5zaW9uKE5BTUUsIChleHBvcnRlcikgPT4gbmV3IEtIUl9tYXRlcmlhbHNfc2hlZW4oZXhwb3J0ZXIpKTtcclxuIiwiaW1wb3J0IHR5cGUgeyBJTWF0ZXJpYWwsIElLSFJNYXRlcmlhbHNTcGVjdWxhciB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHR5cGUgeyBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIgfSBmcm9tIFwiLi4vZ2xURkV4cG9ydGVyRXh0ZW5zaW9uXCI7XHJcbmltcG9ydCB7IEdMVEZFeHBvcnRlciB9IGZyb20gXCIuLi9nbFRGRXhwb3J0ZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBQQlJNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9QQlIvcGJyTWF0ZXJpYWxcIjtcclxuaW1wb3J0IHR5cGUgeyBCYXNlVGV4dHVyZSB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9UZXh0dXJlcy9iYXNlVGV4dHVyZVwiO1xyXG5cclxuY29uc3QgTkFNRSA9IFwiS0hSX21hdGVyaWFsc19zcGVjdWxhclwiO1xyXG5cclxuLyoqXHJcbiAqIFtTcGVjaWZpY2F0aW9uXShodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi9tYWluL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX21hdGVyaWFsc19zcGVjdWxhci9SRUFETUUubWQpXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBjbGFzcyBLSFJfbWF0ZXJpYWxzX3NwZWN1bGFyIGltcGxlbWVudHMgSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyIHtcclxuICAgIC8qKiBOYW1lIG9mIHRoaXMgZXh0ZW5zaW9uICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZSA9IE5BTUU7XHJcblxyXG4gICAgLyoqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyBlbmFibGVkICovXHJcbiAgICBwdWJsaWMgZW5hYmxlZCA9IHRydWU7XHJcblxyXG4gICAgLyoqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyByZXF1aXJlZCAqL1xyXG4gICAgcHVibGljIHJlcXVpcmVkID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBfZXhwb3J0ZXI6IEdMVEZFeHBvcnRlcjtcclxuXHJcbiAgICBwcml2YXRlIF93YXNVc2VkID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZXhwb3J0ZXI6IEdMVEZFeHBvcnRlcikge1xyXG4gICAgICAgIHRoaXMuX2V4cG9ydGVyID0gZXhwb3J0ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIERpc3Bvc2UgKi9cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge31cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgZ2V0IHdhc1VzZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dhc1VzZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZnRlciBleHBvcnRpbmcgYSBtYXRlcmlhbCwgZGVhbCB3aXRoIHRoZSBhZGRpdGlvbmFsIHRleHR1cmVzXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBHTFRGIGNvbnRleHQgb2YgdGhlIG1hdGVyaWFsXHJcbiAgICAgKiBAcGFyYW0gbm9kZSBleHBvcnRlZCBHTFRGIG5vZGVcclxuICAgICAqIEBwYXJhbSBiYWJ5bG9uTWF0ZXJpYWwgY29ycmVzcG9uZGluZyBiYWJ5bG9uIG1hdGVyaWFsXHJcbiAgICAgKiBAcmV0dXJucyBhcnJheSBvZiBhZGRpdGlvbmFsIHRleHR1cmVzIHRvIGV4cG9ydFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcG9zdEV4cG9ydE1hdGVyaWFsQWRkaXRpb25hbFRleHR1cmVzPyhjb250ZXh0OiBzdHJpbmcsIG5vZGU6IElNYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCk6IEJhc2VUZXh0dXJlW10ge1xyXG4gICAgICAgIGNvbnN0IGFkZGl0aW9uYWxUZXh0dXJlczogQmFzZVRleHR1cmVbXSA9IFtdO1xyXG5cclxuICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsIGluc3RhbmNlb2YgUEJSTWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2lzRXh0ZW5zaW9uRW5hYmxlZChiYWJ5bG9uTWF0ZXJpYWwpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsLm1ldGFsbGljUmVmbGVjdGFuY2VUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkaXRpb25hbFRleHR1cmVzLnB1c2goYmFieWxvbk1hdGVyaWFsLm1ldGFsbGljUmVmbGVjdGFuY2VUZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwucmVmbGVjdGFuY2VUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkaXRpb25hbFRleHR1cmVzLnB1c2goYmFieWxvbk1hdGVyaWFsLnJlZmxlY3RhbmNlVGV4dHVyZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYWRkaXRpb25hbFRleHR1cmVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYWRkaXRpb25hbFRleHR1cmVzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2lzRXh0ZW5zaW9uRW5hYmxlZChtYXQ6IFBCUk1hdGVyaWFsKTogYm9vbGVhbiB7XHJcbiAgICAgICAgLy8gVGhpcyBleHRlbnNpb24gbXVzdCBub3QgYmUgdXNlZCBvbiBhIG1hdGVyaWFsIHRoYXQgYWxzbyB1c2VzIEtIUl9tYXRlcmlhbHNfdW5saXRcclxuICAgICAgICBpZiAobWF0LnVubGl0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgKG1hdC5tZXRhbGxpY0YwRmFjdG9yICE9IHVuZGVmaW5lZCAmJiBtYXQubWV0YWxsaWNGMEZhY3RvciAhPSAxLjApIHx8XHJcbiAgICAgICAgICAgIChtYXQubWV0YWxsaWNSZWZsZWN0YW5jZUNvbG9yICE9IHVuZGVmaW5lZCAmJiAhbWF0Lm1ldGFsbGljUmVmbGVjdGFuY2VDb2xvci5lcXVhbHNGbG9hdHMoMS4wLCAxLjAsIDEuMCkpIHx8XHJcbiAgICAgICAgICAgIHRoaXMuX2hhc1RleHR1cmVzRXh0ZW5zaW9uKG1hdClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2hhc1RleHR1cmVzRXh0ZW5zaW9uKG1hdDogUEJSTWF0ZXJpYWwpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gbWF0Lm1ldGFsbGljUmVmbGVjdGFuY2VUZXh0dXJlICE9IG51bGwgfHwgbWF0LnJlZmxlY3RhbmNlVGV4dHVyZSAhPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWZ0ZXIgZXhwb3J0aW5nIGEgbWF0ZXJpYWxcclxuICAgICAqIEBwYXJhbSBjb250ZXh0IEdMVEYgY29udGV4dCBvZiB0aGUgbWF0ZXJpYWxcclxuICAgICAqIEBwYXJhbSBub2RlIGV4cG9ydGVkIEdMVEYgbm9kZVxyXG4gICAgICogQHBhcmFtIGJhYnlsb25NYXRlcmlhbCBjb3JyZXNwb25kaW5nIGJhYnlsb24gbWF0ZXJpYWxcclxuICAgICAqIEByZXR1cm5zIHByb21pc2UsIHJlc29sdmVzIHdpdGggdGhlIG1hdGVyaWFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwb3N0RXhwb3J0TWF0ZXJpYWxBc3luYz8oY29udGV4dDogc3RyaW5nLCBub2RlOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBQcm9taXNlPElNYXRlcmlhbD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsIGluc3RhbmNlb2YgUEJSTWF0ZXJpYWwgJiYgdGhpcy5faXNFeHRlbnNpb25FbmFibGVkKGJhYnlsb25NYXRlcmlhbCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3dhc1VzZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIG5vZGUuZXh0ZW5zaW9ucyA9IG5vZGUuZXh0ZW5zaW9ucyB8fCB7fTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBtZXRhbGxpY1JlZmxlY3RhbmNlVGV4dHVyZSA9IHRoaXMuX2V4cG9ydGVyLl9tYXRlcmlhbEV4cG9ydGVyLmdldFRleHR1cmVJbmZvKGJhYnlsb25NYXRlcmlhbC5tZXRhbGxpY1JlZmxlY3RhbmNlVGV4dHVyZSkgPz8gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVmbGVjdGFuY2VUZXh0dXJlID0gdGhpcy5fZXhwb3J0ZXIuX21hdGVyaWFsRXhwb3J0ZXIuZ2V0VGV4dHVyZUluZm8oYmFieWxvbk1hdGVyaWFsLnJlZmxlY3RhbmNlVGV4dHVyZSkgPz8gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWV0YWxsaWNGMEZhY3RvciA9IGJhYnlsb25NYXRlcmlhbC5tZXRhbGxpY0YwRmFjdG9yID09IDEuMCA/IHVuZGVmaW5lZCA6IGJhYnlsb25NYXRlcmlhbC5tZXRhbGxpY0YwRmFjdG9yO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWV0YWxsaWNSZWZsZWN0YW5jZUNvbG9yID0gYmFieWxvbk1hdGVyaWFsLm1ldGFsbGljUmVmbGVjdGFuY2VDb2xvci5lcXVhbHNGbG9hdHMoMS4wLCAxLjAsIDEuMClcclxuICAgICAgICAgICAgICAgICAgICA/IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgIDogYmFieWxvbk1hdGVyaWFsLm1ldGFsbGljUmVmbGVjdGFuY2VDb2xvci5hc0FycmF5KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3BlY3VsYXJJbmZvOiBJS0hSTWF0ZXJpYWxzU3BlY3VsYXIgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3BlY3VsYXJGYWN0b3I6IG1ldGFsbGljRjBGYWN0b3IsXHJcbiAgICAgICAgICAgICAgICAgICAgc3BlY3VsYXJUZXh0dXJlOiBtZXRhbGxpY1JlZmxlY3RhbmNlVGV4dHVyZSxcclxuICAgICAgICAgICAgICAgICAgICBzcGVjdWxhckNvbG9yRmFjdG9yOiBtZXRhbGxpY1JlZmxlY3RhbmNlQ29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgc3BlY3VsYXJDb2xvclRleHR1cmU6IHJlZmxlY3RhbmNlVGV4dHVyZSxcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2hhc1RleHR1cmVzRXh0ZW5zaW9uKGJhYnlsb25NYXRlcmlhbCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9leHBvcnRlci5fbWF0ZXJpYWxOZWVkc1VWc1NldC5hZGQoYmFieWxvbk1hdGVyaWFsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBub2RlLmV4dGVuc2lvbnNbTkFNRV0gPSBzcGVjdWxhckluZm87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzb2x2ZShub2RlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuR0xURkV4cG9ydGVyLlJlZ2lzdGVyRXh0ZW5zaW9uKE5BTUUsIChleHBvcnRlcikgPT4gbmV3IEtIUl9tYXRlcmlhbHNfc3BlY3VsYXIoZXhwb3J0ZXIpKTtcclxuIiwiaW1wb3J0IHR5cGUgeyBJTWF0ZXJpYWwsIElLSFJNYXRlcmlhbHNUcmFuc21pc3Npb24gfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IEltYWdlTWltZVR5cGUgfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB0eXBlIHsgSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyIH0gZnJvbSBcIi4uL2dsVEZFeHBvcnRlckV4dGVuc2lvblwiO1xyXG5pbXBvcnQgeyBHTFRGRXhwb3J0ZXIgfSBmcm9tIFwiLi4vZ2xURkV4cG9ydGVyXCI7XHJcbmltcG9ydCB0eXBlIHsgTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgUEJSTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvUEJSL3Bick1hdGVyaWFsXCI7XHJcbmltcG9ydCB0eXBlIHsgQmFzZVRleHR1cmUgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvYmFzZVRleHR1cmVcIjtcclxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSBcImNvcmUvTWlzYy9sb2dnZXJcIjtcclxuXHJcbmNvbnN0IE5BTUUgPSBcIktIUl9tYXRlcmlhbHNfdHJhbnNtaXNzaW9uXCI7XHJcblxyXG4vKipcclxuICogW1NwZWNpZmljYXRpb25dKGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9ibG9iL21haW4vZXh0ZW5zaW9ucy8yLjAvS2hyb25vcy9LSFJfbWF0ZXJpYWxzX3RyYW5zbWlzc2lvbi9SRUFETUUubWQpXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBjbGFzcyBLSFJfbWF0ZXJpYWxzX3RyYW5zbWlzc2lvbiBpbXBsZW1lbnRzIElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMiB7XHJcbiAgICAvKiogTmFtZSBvZiB0aGlzIGV4dGVuc2lvbiAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBOQU1FO1xyXG5cclxuICAgIC8qKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgZW5hYmxlZCAqL1xyXG4gICAgcHVibGljIGVuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgIC8qKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgcmVxdWlyZWQgKi9cclxuICAgIHB1YmxpYyByZXF1aXJlZCA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgX2V4cG9ydGVyOiBHTFRGRXhwb3J0ZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBfd2FzVXNlZCA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGV4cG9ydGVyOiBHTFRGRXhwb3J0ZXIpIHtcclxuICAgICAgICB0aGlzLl9leHBvcnRlciA9IGV4cG9ydGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBEaXNwb3NlICovXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHt9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGdldCB3YXNVc2VkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl93YXNVc2VkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWZ0ZXIgZXhwb3J0aW5nIGEgbWF0ZXJpYWwsIGRlYWwgd2l0aCBhZGRpdGlvbmFsIHRleHR1cmVzXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBHTFRGIGNvbnRleHQgb2YgdGhlIG1hdGVyaWFsXHJcbiAgICAgKiBAcGFyYW0gbm9kZSBleHBvcnRlZCBHTFRGIG5vZGVcclxuICAgICAqIEBwYXJhbSBiYWJ5bG9uTWF0ZXJpYWwgY29ycmVzcG9uZGluZyBiYWJ5bG9uIG1hdGVyaWFsXHJcbiAgICAgKiBAcmV0dXJucyBhcnJheSBvZiBhZGRpdGlvbmFsIHRleHR1cmVzIHRvIGV4cG9ydFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcG9zdEV4cG9ydE1hdGVyaWFsQWRkaXRpb25hbFRleHR1cmVzPyhjb250ZXh0OiBzdHJpbmcsIG5vZGU6IElNYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCk6IEJhc2VUZXh0dXJlW10ge1xyXG4gICAgICAgIGNvbnN0IGFkZGl0aW9uYWxUZXh0dXJlczogQmFzZVRleHR1cmVbXSA9IFtdO1xyXG5cclxuICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsIGluc3RhbmNlb2YgUEJSTWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2lzRXh0ZW5zaW9uRW5hYmxlZChiYWJ5bG9uTWF0ZXJpYWwpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsLnN1YlN1cmZhY2UudGhpY2tuZXNzVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZGl0aW9uYWxUZXh0dXJlcy5wdXNoKGJhYnlsb25NYXRlcmlhbC5zdWJTdXJmYWNlLnRoaWNrbmVzc1RleHR1cmUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFkZGl0aW9uYWxUZXh0dXJlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGFkZGl0aW9uYWxUZXh0dXJlcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9pc0V4dGVuc2lvbkVuYWJsZWQobWF0OiBQQlJNYXRlcmlhbCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIC8vIFRoaXMgZXh0ZW5zaW9uIG11c3Qgbm90IGJlIHVzZWQgb24gYSBtYXRlcmlhbCB0aGF0IGFsc28gdXNlcyBLSFJfbWF0ZXJpYWxzX3VubGl0XHJcbiAgICAgICAgaWYgKG1hdC51bmxpdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHN1YnMgPSBtYXQuc3ViU3VyZmFjZTtcclxuICAgICAgICByZXR1cm4gKHN1YnMuaXNSZWZyYWN0aW9uRW5hYmxlZCAmJiBzdWJzLnJlZnJhY3Rpb25JbnRlbnNpdHkgIT0gdW5kZWZpbmVkICYmIHN1YnMucmVmcmFjdGlvbkludGVuc2l0eSAhPSAwKSB8fCB0aGlzLl9oYXNUZXh0dXJlc0V4dGVuc2lvbihtYXQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2hhc1RleHR1cmVzRXh0ZW5zaW9uKG1hdDogUEJSTWF0ZXJpYWwpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gbWF0LnN1YlN1cmZhY2UucmVmcmFjdGlvbkludGVuc2l0eVRleHR1cmUgIT0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFmdGVyIGV4cG9ydGluZyBhIG1hdGVyaWFsXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBHTFRGIGNvbnRleHQgb2YgdGhlIG1hdGVyaWFsXHJcbiAgICAgKiBAcGFyYW0gbm9kZSBleHBvcnRlZCBHTFRGIG5vZGVcclxuICAgICAqIEBwYXJhbSBiYWJ5bG9uTWF0ZXJpYWwgY29ycmVzcG9uZGluZyBiYWJ5bG9uIG1hdGVyaWFsXHJcbiAgICAgKiBAcmV0dXJucyB0cnVlIGlmIHN1Y2Nlc3NmdWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFzeW5jIHBvc3RFeHBvcnRNYXRlcmlhbEFzeW5jPyhjb250ZXh0OiBzdHJpbmcsIG5vZGU6IElNYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCk6IFByb21pc2U8SU1hdGVyaWFsPiB7XHJcbiAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbCBpbnN0YW5jZW9mIFBCUk1hdGVyaWFsICYmIHRoaXMuX2lzRXh0ZW5zaW9uRW5hYmxlZChiYWJ5bG9uTWF0ZXJpYWwpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3dhc1VzZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc3ViU3VyZmFjZSA9IGJhYnlsb25NYXRlcmlhbC5zdWJTdXJmYWNlO1xyXG4gICAgICAgICAgICBjb25zdCB0cmFuc21pc3Npb25GYWN0b3IgPSBzdWJTdXJmYWNlLnJlZnJhY3Rpb25JbnRlbnNpdHkgPT09IDAgPyB1bmRlZmluZWQgOiBzdWJTdXJmYWNlLnJlZnJhY3Rpb25JbnRlbnNpdHk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB2b2x1bWVJbmZvOiBJS0hSTWF0ZXJpYWxzVHJhbnNtaXNzaW9uID0ge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNtaXNzaW9uRmFjdG9yOiB0cmFuc21pc3Npb25GYWN0b3IsXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5faGFzVGV4dHVyZXNFeHRlbnNpb24oYmFieWxvbk1hdGVyaWFsKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZXhwb3J0ZXIuX21hdGVyaWFsTmVlZHNVVnNTZXQuYWRkKGJhYnlsb25NYXRlcmlhbCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChzdWJTdXJmYWNlLnJlZnJhY3Rpb25JbnRlbnNpdHlUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3ViU3VyZmFjZS51c2VHbHRmU3R5bGVUZXh0dXJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zbWlzc2lvblRleHR1cmUgPSBhd2FpdCB0aGlzLl9leHBvcnRlci5fbWF0ZXJpYWxFeHBvcnRlci5leHBvcnRUZXh0dXJlQXN5bmMoc3ViU3VyZmFjZS5yZWZyYWN0aW9uSW50ZW5zaXR5VGV4dHVyZSwgSW1hZ2VNaW1lVHlwZS5QTkcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0cmFuc21pc3Npb25UZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZvbHVtZUluZm8udHJhbnNtaXNzaW9uVGV4dHVyZSA9IHRyYW5zbWlzc2lvblRleHR1cmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2dnZXIuV2FybihgJHtjb250ZXh0fTogRXhwb3J0aW5nIGEgc3Vic3VyZmFjZSByZWZyYWN0aW9uIGludGVuc2l0eSB0ZXh0dXJlIHdpdGhvdXQgXFxgdXNlR2x0ZlN0eWxlVGV4dHVyZXNcXGAgaXMgbm90IHN1cHBvcnRlZGApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBub2RlLmV4dGVuc2lvbnMgfHw9IHt9O1xyXG4gICAgICAgICAgICBub2RlLmV4dGVuc2lvbnNbTkFNRV0gPSB2b2x1bWVJbmZvO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkdMVEZFeHBvcnRlci5SZWdpc3RlckV4dGVuc2lvbihOQU1FLCAoZXhwb3J0ZXIpID0+IG5ldyBLSFJfbWF0ZXJpYWxzX3RyYW5zbWlzc2lvbihleHBvcnRlcikpO1xyXG4iLCJpbXBvcnQgdHlwZSB7IElNYXRlcmlhbCB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHR5cGUgeyBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIgfSBmcm9tIFwiLi4vZ2xURkV4cG9ydGVyRXh0ZW5zaW9uXCI7XHJcbmltcG9ydCB7IEdMVEZFeHBvcnRlciB9IGZyb20gXCIuLi9nbFRGRXhwb3J0ZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBQQlJNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9QQlIvcGJyTWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgU3RhbmRhcmRNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9zdGFuZGFyZE1hdGVyaWFsXCI7XHJcblxyXG5jb25zdCBOQU1FID0gXCJLSFJfbWF0ZXJpYWxzX3VubGl0XCI7XHJcblxyXG4vKipcclxuICogQGludGVybmFsXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBjbGFzcyBLSFJfbWF0ZXJpYWxzX3VubGl0IGltcGxlbWVudHMgSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyIHtcclxuICAgIC8qKiBOYW1lIG9mIHRoaXMgZXh0ZW5zaW9uICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZSA9IE5BTUU7XHJcblxyXG4gICAgLyoqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyBlbmFibGVkICovXHJcbiAgICBwdWJsaWMgZW5hYmxlZCA9IHRydWU7XHJcblxyXG4gICAgLyoqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyByZXF1aXJlZCAqL1xyXG4gICAgcHVibGljIHJlcXVpcmVkID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBfd2FzVXNlZCA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgZ2V0IHdhc1VzZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dhc1VzZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7fVxyXG5cclxuICAgIHB1YmxpYyBwb3N0RXhwb3J0TWF0ZXJpYWxBc3luYz8oY29udGV4dDogc3RyaW5nLCBub2RlOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBQcm9taXNlPElNYXRlcmlhbD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdW5saXRNYXRlcmlhbCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbCBpbnN0YW5jZW9mIFBCUk1hdGVyaWFsKSB7XHJcbiAgICAgICAgICAgICAgICB1bmxpdE1hdGVyaWFsID0gYmFieWxvbk1hdGVyaWFsLnVubGl0O1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGJhYnlsb25NYXRlcmlhbCBpbnN0YW5jZW9mIFN0YW5kYXJkTWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgICAgIHVubGl0TWF0ZXJpYWwgPSBiYWJ5bG9uTWF0ZXJpYWwuZGlzYWJsZUxpZ2h0aW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodW5saXRNYXRlcmlhbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fd2FzVXNlZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG5vZGUuZXh0ZW5zaW9ucyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5leHRlbnNpb25zID0ge307XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbm9kZS5leHRlbnNpb25zW05BTUVdID0ge307XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJlc29sdmUobm9kZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkdMVEZFeHBvcnRlci5SZWdpc3RlckV4dGVuc2lvbihOQU1FLCAoKSA9PiBuZXcgS0hSX21hdGVyaWFsc191bmxpdCgpKTtcclxuIiwiaW1wb3J0IHR5cGUgeyBJTWF0ZXJpYWwsIElLSFJNYXRlcmlhbHNWb2x1bWUgfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB0eXBlIHsgSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyIH0gZnJvbSBcIi4uL2dsVEZFeHBvcnRlckV4dGVuc2lvblwiO1xyXG5pbXBvcnQgeyBHTFRGRXhwb3J0ZXIgfSBmcm9tIFwiLi4vZ2xURkV4cG9ydGVyXCI7XHJcbmltcG9ydCB0eXBlIHsgTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgUEJSTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvUEJSL3Bick1hdGVyaWFsXCI7XHJcbmltcG9ydCB0eXBlIHsgQmFzZVRleHR1cmUgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvYmFzZVRleHR1cmVcIjtcclxuaW1wb3J0IHsgQ29sb3IzIH0gZnJvbSBcImNvcmUvTWF0aHMvbWF0aC5jb2xvclwiO1xyXG5cclxuY29uc3QgTkFNRSA9IFwiS0hSX21hdGVyaWFsc192b2x1bWVcIjtcclxuXHJcbi8qKlxyXG4gKiBbU3BlY2lmaWNhdGlvbl0oaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFpbi9leHRlbnNpb25zLzIuMC9LaHJvbm9zL0tIUl9tYXRlcmlhbHNfdm9sdW1lL1JFQURNRS5tZClcclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGNsYXNzIEtIUl9tYXRlcmlhbHNfdm9sdW1lIGltcGxlbWVudHMgSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyIHtcclxuICAgIC8qKiBOYW1lIG9mIHRoaXMgZXh0ZW5zaW9uICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZSA9IE5BTUU7XHJcblxyXG4gICAgLyoqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyBlbmFibGVkICovXHJcbiAgICBwdWJsaWMgZW5hYmxlZCA9IHRydWU7XHJcblxyXG4gICAgLyoqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyByZXF1aXJlZCAqL1xyXG4gICAgcHVibGljIHJlcXVpcmVkID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBfZXhwb3J0ZXI6IEdMVEZFeHBvcnRlcjtcclxuXHJcbiAgICBwcml2YXRlIF93YXNVc2VkID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZXhwb3J0ZXI6IEdMVEZFeHBvcnRlcikge1xyXG4gICAgICAgIHRoaXMuX2V4cG9ydGVyID0gZXhwb3J0ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7fVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBnZXQgd2FzVXNlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fd2FzVXNlZDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFmdGVyIGV4cG9ydGluZyBhIG1hdGVyaWFsLCBkZWFsIHdpdGggYWRkaXRpb25hbCB0ZXh0dXJlc1xyXG4gICAgICogQHBhcmFtIGNvbnRleHQgR0xURiBjb250ZXh0IG9mIHRoZSBtYXRlcmlhbFxyXG4gICAgICogQHBhcmFtIG5vZGUgZXhwb3J0ZWQgR0xURiBub2RlXHJcbiAgICAgKiBAcGFyYW0gYmFieWxvbk1hdGVyaWFsIGNvcnJlc3BvbmRpbmcgYmFieWxvbiBtYXRlcmlhbFxyXG4gICAgICogQHJldHVybnMgYXJyYXkgb2YgYWRkaXRpb25hbCB0ZXh0dXJlcyB0byBleHBvcnRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHBvc3RFeHBvcnRNYXRlcmlhbEFkZGl0aW9uYWxUZXh0dXJlcz8oY29udGV4dDogc3RyaW5nLCBub2RlOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBCYXNlVGV4dHVyZVtdIHtcclxuICAgICAgICBjb25zdCBhZGRpdGlvbmFsVGV4dHVyZXM6IEJhc2VUZXh0dXJlW10gPSBbXTtcclxuXHJcbiAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbCBpbnN0YW5jZW9mIFBCUk1hdGVyaWFsKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9pc0V4dGVuc2lvbkVuYWJsZWQoYmFieWxvbk1hdGVyaWFsKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbC5zdWJTdXJmYWNlLnRoaWNrbmVzc1RleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRpdGlvbmFsVGV4dHVyZXMucHVzaChiYWJ5bG9uTWF0ZXJpYWwuc3ViU3VyZmFjZS50aGlja25lc3NUZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBhZGRpdGlvbmFsVGV4dHVyZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBhZGRpdGlvbmFsVGV4dHVyZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfaXNFeHRlbnNpb25FbmFibGVkKG1hdDogUEJSTWF0ZXJpYWwpOiBib29sZWFuIHtcclxuICAgICAgICAvLyBUaGlzIGV4dGVuc2lvbiBtdXN0IG5vdCBiZSB1c2VkIG9uIGEgbWF0ZXJpYWwgdGhhdCBhbHNvIHVzZXMgS0hSX21hdGVyaWFsc191bmxpdFxyXG4gICAgICAgIGlmIChtYXQudW5saXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzdWJzID0gbWF0LnN1YlN1cmZhY2U7XHJcbiAgICAgICAgLy8gdGhpcyBleHRlbnNpb24gcmVxdWlyZXMgZWl0aGVyIHRoZSBLSFJfbWF0ZXJpYWxzX3RyYW5zbWlzc2lvbiBvciBLSFJfbWF0ZXJpYWxzX2RpZmZ1c2VfdHJhbnNtaXNzaW9uIGV4dGVuc2lvbnMuXHJcbiAgICAgICAgaWYgKCFzdWJzLmlzUmVmcmFjdGlvbkVuYWJsZWQgJiYgIXN1YnMuaXNUcmFuc2x1Y2VuY3lFbmFibGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgKHN1YnMubWF4aW11bVRoaWNrbmVzcyAhPSB1bmRlZmluZWQgJiYgc3Vicy5tYXhpbXVtVGhpY2tuZXNzICE9IDApIHx8XHJcbiAgICAgICAgICAgIChzdWJzLnRpbnRDb2xvckF0RGlzdGFuY2UgIT0gdW5kZWZpbmVkICYmIHN1YnMudGludENvbG9yQXREaXN0YW5jZSAhPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFkpIHx8XHJcbiAgICAgICAgICAgIChzdWJzLnRpbnRDb2xvciAhPSB1bmRlZmluZWQgJiYgc3Vicy50aW50Q29sb3IgIT0gQ29sb3IzLldoaXRlKCkpIHx8XHJcbiAgICAgICAgICAgIHRoaXMuX2hhc1RleHR1cmVzRXh0ZW5zaW9uKG1hdClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2hhc1RleHR1cmVzRXh0ZW5zaW9uKG1hdDogUEJSTWF0ZXJpYWwpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gbWF0LnN1YlN1cmZhY2UudGhpY2tuZXNzVGV4dHVyZSAhPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWZ0ZXIgZXhwb3J0aW5nIGEgbWF0ZXJpYWxcclxuICAgICAqIEBwYXJhbSBjb250ZXh0IEdMVEYgY29udGV4dCBvZiB0aGUgbWF0ZXJpYWxcclxuICAgICAqIEBwYXJhbSBub2RlIGV4cG9ydGVkIEdMVEYgbm9kZVxyXG4gICAgICogQHBhcmFtIGJhYnlsb25NYXRlcmlhbCBjb3JyZXNwb25kaW5nIGJhYnlsb24gbWF0ZXJpYWxcclxuICAgICAqIEByZXR1cm5zIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSB1cGRhdGVkIG5vZGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHBvc3RFeHBvcnRNYXRlcmlhbEFzeW5jPyhjb250ZXh0OiBzdHJpbmcsIG5vZGU6IElNYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCk6IFByb21pc2U8SU1hdGVyaWFsPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwgaW5zdGFuY2VvZiBQQlJNYXRlcmlhbCAmJiB0aGlzLl9pc0V4dGVuc2lvbkVuYWJsZWQoYmFieWxvbk1hdGVyaWFsKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fd2FzVXNlZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3VicyA9IGJhYnlsb25NYXRlcmlhbC5zdWJTdXJmYWNlO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGhpY2tuZXNzRmFjdG9yID0gc3Vicy5tYXhpbXVtVGhpY2tuZXNzID09IDAgPyB1bmRlZmluZWQgOiBzdWJzLm1heGltdW1UaGlja25lc3M7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0aGlja25lc3NUZXh0dXJlID0gdGhpcy5fZXhwb3J0ZXIuX21hdGVyaWFsRXhwb3J0ZXIuZ2V0VGV4dHVyZUluZm8oc3Vicy50aGlja25lc3NUZXh0dXJlKSA/PyB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhdHRlbnVhdGlvbkRpc3RhbmNlID0gc3Vicy50aW50Q29sb3JBdERpc3RhbmNlID09IE51bWJlci5QT1NJVElWRV9JTkZJTklUWSA/IHVuZGVmaW5lZCA6IHN1YnMudGludENvbG9yQXREaXN0YW5jZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGF0dGVudWF0aW9uQ29sb3IgPSBzdWJzLnRpbnRDb2xvci5lcXVhbHNGbG9hdHMoMS4wLCAxLjAsIDEuMCkgPyB1bmRlZmluZWQgOiBzdWJzLnRpbnRDb2xvci5hc0FycmF5KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgdm9sdW1lSW5mbzogSUtIUk1hdGVyaWFsc1ZvbHVtZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlja25lc3NGYWN0b3I6IHRoaWNrbmVzc0ZhY3RvcixcclxuICAgICAgICAgICAgICAgICAgICB0aGlja25lc3NUZXh0dXJlOiB0aGlja25lc3NUZXh0dXJlLFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dGVudWF0aW9uRGlzdGFuY2U6IGF0dGVudWF0aW9uRGlzdGFuY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0ZW51YXRpb25Db2xvcjogYXR0ZW51YXRpb25Db2xvcixcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2hhc1RleHR1cmVzRXh0ZW5zaW9uKGJhYnlsb25NYXRlcmlhbCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9leHBvcnRlci5fbWF0ZXJpYWxOZWVkc1VWc1NldC5hZGQoYmFieWxvbk1hdGVyaWFsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBub2RlLmV4dGVuc2lvbnMgPSBub2RlLmV4dGVuc2lvbnMgfHwge307XHJcbiAgICAgICAgICAgICAgICBub2RlLmV4dGVuc2lvbnNbTkFNRV0gPSB2b2x1bWVJbmZvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc29sdmUobm9kZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkdMVEZFeHBvcnRlci5SZWdpc3RlckV4dGVuc2lvbihOQU1FLCAoZXhwb3J0ZXIpID0+IG5ldyBLSFJfbWF0ZXJpYWxzX3ZvbHVtZShleHBvcnRlcikpO1xyXG4iLCJpbXBvcnQgdHlwZSB7IElUZXh0dXJlSW5mbywgSUtIUlRleHR1cmVUcmFuc2Zvcm0gfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IFRvb2xzIH0gZnJvbSBcImNvcmUvTWlzYy90b29sc1wiO1xyXG5pbXBvcnQgdHlwZSB7IFRleHR1cmUgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvdGV4dHVyZVwiO1xyXG5pbXBvcnQgdHlwZSB7IElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMiB9IGZyb20gXCIuLi9nbFRGRXhwb3J0ZXJFeHRlbnNpb25cIjtcclxuaW1wb3J0IHsgR0xURkV4cG9ydGVyIH0gZnJvbSBcIi4uL2dsVEZFeHBvcnRlclwiO1xyXG5cclxuY29uc3QgTkFNRSA9IFwiS0hSX3RleHR1cmVfdHJhbnNmb3JtXCI7XHJcblxyXG4vKipcclxuICogQ29tcHV0ZXMgdGhlIGFkanVzdGVkIG9mZnNldCBmb3IgYSByb3RhdGlvbiBjZW50ZXJlZCBhYm91dCB0aGUgb3JpZ2luLlxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbmZ1bmN0aW9uIEFkanVzdE9mZnNldEZvclJvdGF0aW9uQ2VudGVyKGJhYnlsb25UZXh0dXJlOiBUZXh0dXJlKTogW251bWJlciwgbnVtYmVyXSB7XHJcbiAgICBjb25zdCB7IHVPZmZzZXQsIHZPZmZzZXQsIHVSb3RhdGlvbkNlbnRlciwgdlJvdGF0aW9uQ2VudGVyLCB1U2NhbGUsIHZTY2FsZSwgd0FuZyB9ID0gYmFieWxvblRleHR1cmU7XHJcbiAgICBjb25zdCBjb3NBbmdsZSA9IE1hdGguY29zKHdBbmcpO1xyXG4gICAgY29uc3Qgc2luQW5nbGUgPSBNYXRoLnNpbih3QW5nKTtcclxuICAgIGNvbnN0IHNjYWxlZFVSb3RhdGlvbkNlbnRlciA9IHVSb3RhdGlvbkNlbnRlciAqIHVTY2FsZTtcclxuICAgIGNvbnN0IHNjYWxlZFZSb3RhdGlvbkNlbnRlciA9IHZSb3RhdGlvbkNlbnRlciAqIHZTY2FsZTtcclxuICAgIGNvbnN0IGRlbHRhVSA9IHNjYWxlZFVSb3RhdGlvbkNlbnRlciAqICgxIC0gY29zQW5nbGUpICsgc2NhbGVkVlJvdGF0aW9uQ2VudGVyICogc2luQW5nbGU7XHJcbiAgICBjb25zdCBkZWx0YVYgPSBzY2FsZWRWUm90YXRpb25DZW50ZXIgKiAoMSAtIGNvc0FuZ2xlKSAtIHNjYWxlZFVSb3RhdGlvbkNlbnRlciAqIHNpbkFuZ2xlO1xyXG4gICAgcmV0dXJuIFt1T2Zmc2V0ICsgZGVsdGFVLCB2T2Zmc2V0ICsgZGVsdGFWXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgY2xhc3MgS0hSX3RleHR1cmVfdHJhbnNmb3JtIGltcGxlbWVudHMgSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyIHtcclxuICAgIC8qKiBOYW1lIG9mIHRoaXMgZXh0ZW5zaW9uICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZSA9IE5BTUU7XHJcblxyXG4gICAgLyoqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyBlbmFibGVkICovXHJcbiAgICBwdWJsaWMgZW5hYmxlZCA9IHRydWU7XHJcblxyXG4gICAgLyoqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyByZXF1aXJlZCAqL1xyXG4gICAgcHVibGljIHJlcXVpcmVkID0gZmFsc2U7XHJcblxyXG4gICAgLyoqIFJlZmVyZW5jZSB0byB0aGUgZ2xURiBleHBvcnRlciAqL1xyXG4gICAgcHJpdmF0ZSBfd2FzVXNlZCA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHt9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGdldCB3YXNVc2VkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl93YXNVc2VkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwb3N0RXhwb3J0VGV4dHVyZT8oY29udGV4dDogc3RyaW5nLCB0ZXh0dXJlSW5mbzogSVRleHR1cmVJbmZvLCBiYWJ5bG9uVGV4dHVyZTogVGV4dHVyZSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHNjZW5lID0gYmFieWxvblRleHR1cmUuZ2V0U2NlbmUoKTtcclxuICAgICAgICBpZiAoIXNjZW5lKSB7XHJcbiAgICAgICAgICAgIFRvb2xzLldhcm4oYCR7Y29udGV4dH06IFwic2NlbmVcIiBpcyBub3QgZGVmaW5lZCBmb3IgQmFieWxvbiB0ZXh0dXJlICR7YmFieWxvblRleHR1cmUubmFtZX0hYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKlxyXG4gICAgICAgICAqIFRoZSBLSFJfdGV4dHVyZV90cmFuc2Zvcm0gc2NoZW1hIG9ubHkgc3VwcG9ydHMgdyByb3RhdGlvbiBhcm91bmQgdGhlIG9yaWdpbi5cclxuICAgICAgICAgKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFpbi9leHRlbnNpb25zLzIuMC9LaHJvbm9zL0tIUl90ZXh0dXJlX3RyYW5zZm9ybSNnbHRmLXNjaGVtYS11cGRhdGVzLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGlmIChiYWJ5bG9uVGV4dHVyZS51QW5nICE9PSAwIHx8IGJhYnlsb25UZXh0dXJlLnZBbmcgIT09IDApIHtcclxuICAgICAgICAgICAgVG9vbHMuV2FybihgJHtjb250ZXh0fTogVGV4dHVyZSAke2JhYnlsb25UZXh0dXJlLm5hbWV9IHdpdGggcm90YXRpb24gaW4gdGhlIHUgb3IgdiBheGlzIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZ2xURi5gKTtcclxuICAgICAgICAgICAgLy8gVXN1YWxseSwgd2UnZCBhbHdheXMgZWFybHkgcmV0dXJuIGhlcmUgaWYgdGhlIHRleHR1cmUgdXNlcyBhbiB1bnN1cHBvcnRlZCBjb21iaW5hdGlvbiBvZiB0cmFuc2Zvcm0gcHJvcGVydGllcyxcclxuICAgICAgICAgICAgLy8gYnV0IHdlJ3JlIG1ha2luZyBhbiBleGNlcHRpb24gaGVyZSB0byBtYWludGFpbiBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cclxuICAgICAgICAgICAgaWYgKGJhYnlsb25UZXh0dXJlLnVSb3RhdGlvbkNlbnRlciAhPT0gMCB8fCBiYWJ5bG9uVGV4dHVyZS52Um90YXRpb25DZW50ZXIgIT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdGV4dHVyZVRyYW5zZm9ybTogSUtIUlRleHR1cmVUcmFuc2Zvcm0gPSB7fTtcclxuICAgICAgICBsZXQgdHJhbnNmb3JtSXNSZXF1aXJlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoYmFieWxvblRleHR1cmUudU9mZnNldCAhPT0gMCB8fCBiYWJ5bG9uVGV4dHVyZS52T2Zmc2V0ICE9PSAwKSB7XHJcbiAgICAgICAgICAgIHRleHR1cmVUcmFuc2Zvcm0ub2Zmc2V0ID0gW2JhYnlsb25UZXh0dXJlLnVPZmZzZXQsIGJhYnlsb25UZXh0dXJlLnZPZmZzZXRdO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm1Jc1JlcXVpcmVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChiYWJ5bG9uVGV4dHVyZS51U2NhbGUgIT09IDEgfHwgYmFieWxvblRleHR1cmUudlNjYWxlICE9PSAxKSB7XHJcbiAgICAgICAgICAgIHRleHR1cmVUcmFuc2Zvcm0uc2NhbGUgPSBbYmFieWxvblRleHR1cmUudVNjYWxlLCBiYWJ5bG9uVGV4dHVyZS52U2NhbGVdO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm1Jc1JlcXVpcmVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChiYWJ5bG9uVGV4dHVyZS53QW5nICE9PSAwKSB7XHJcbiAgICAgICAgICAgIGlmIChiYWJ5bG9uVGV4dHVyZS51Um90YXRpb25DZW50ZXIgIT09IDAgfHwgYmFieWxvblRleHR1cmUudlJvdGF0aW9uQ2VudGVyICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL21yZG9vYi90aHJlZS5qcy9pc3N1ZXMvMTU4MzEgZm9yIG1vcmUgZGV0YWlscy5cclxuICAgICAgICAgICAgICAgIGlmIChiYWJ5bG9uVGV4dHVyZS5ob21vZ2VuZW91c1JvdGF0aW9uSW5VVlRyYW5zZm9ybSAmJiBiYWJ5bG9uVGV4dHVyZS51U2NhbGUgIT09IGJhYnlsb25UZXh0dXJlLnZTY2FsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIFRvb2xzLldhcm4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGAke2NvbnRleHR9OiBUZXh0dXJlICR7YmFieWxvblRleHR1cmUubmFtZX0gd2l0aCBob21vZ2Vub3VzUm90YXRpb25JblVWVHJhbnNmb3JtLCBub24tdW5pZm9ybSBzY2FsaW5nLCBhbmQgbm9uLXplcm8gcm90YXRpb24gY2Fubm90IGJlIGV4cG9ydGVkIHdpdGggJHtOQU1FfS5gXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBUb29scy5XYXJuKGAke2NvbnRleHR9OiBUZXh0dXJlICR7YmFieWxvblRleHR1cmUubmFtZX0gd2l0aCBub24tb3JpZ2luIHJvdGF0aW9uIGNlbnRlciB3aWxsIGJlIGV4cG9ydGVkIHVzaW5nIGFuIGFkanVzdGVkIG9mZnNldCB3aXRoICR7TkFNRX0uYCk7XHJcbiAgICAgICAgICAgICAgICB0ZXh0dXJlVHJhbnNmb3JtLm9mZnNldCA9IEFkanVzdE9mZnNldEZvclJvdGF0aW9uQ2VudGVyKGJhYnlsb25UZXh0dXJlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0ZXh0dXJlVHJhbnNmb3JtLnJvdGF0aW9uID0gLWJhYnlsb25UZXh0dXJlLndBbmc7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybUlzUmVxdWlyZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGJhYnlsb25UZXh0dXJlLmNvb3JkaW5hdGVzSW5kZXggIT09IDApIHtcclxuICAgICAgICAgICAgdGV4dHVyZVRyYW5zZm9ybS50ZXhDb29yZCA9IGJhYnlsb25UZXh0dXJlLmNvb3JkaW5hdGVzSW5kZXg7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybUlzUmVxdWlyZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0cmFuc2Zvcm1Jc1JlcXVpcmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX3dhc1VzZWQgPSB0cnVlO1xyXG4gICAgICAgIGlmICghdGV4dHVyZUluZm8uZXh0ZW5zaW9ucykge1xyXG4gICAgICAgICAgICB0ZXh0dXJlSW5mby5leHRlbnNpb25zID0ge307XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRleHR1cmVJbmZvLmV4dGVuc2lvbnNbTkFNRV0gPSB0ZXh0dXJlVHJhbnNmb3JtO1xyXG4gICAgfVxyXG59XHJcblxyXG5HTFRGRXhwb3J0ZXIuUmVnaXN0ZXJFeHRlbnNpb24oTkFNRSwgKCkgPT4gbmV3IEtIUl90ZXh0dXJlX3RyYW5zZm9ybSgpKTtcclxuIiwiZXhwb3J0ICogZnJvbSBcIi4vRVhUX21lc2hfZ3B1X2luc3RhbmNpbmdcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vS0hSX2RyYWNvX21lc2hfY29tcHJlc3Npb25cIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vS0hSX2xpZ2h0c19wdW5jdHVhbFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9LSFJfbWF0ZXJpYWxzX2FuaXNvdHJvcHlcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vS0hSX21hdGVyaWFsc19jbGVhcmNvYXRcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vS0hSX21hdGVyaWFsc19kaWZmdXNlX3RyYW5zbWlzc2lvblwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9LSFJfbWF0ZXJpYWxzX2Rpc3BlcnNpb25cIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vS0hSX21hdGVyaWFsc19lbWlzc2l2ZV9zdHJlbmd0aFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9LSFJfbWF0ZXJpYWxzX2lvclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9LSFJfbWF0ZXJpYWxzX2lyaWRlc2NlbmNlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL0tIUl9tYXRlcmlhbHNfc2hlZW5cIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vS0hSX21hdGVyaWFsc19zcGVjdWxhclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9LSFJfbWF0ZXJpYWxzX3RyYW5zbWlzc2lvblwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9LSFJfbWF0ZXJpYWxzX3VubGl0XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL0tIUl9tYXRlcmlhbHNfdm9sdW1lXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL0tIUl90ZXh0dXJlX3RyYW5zZm9ybVwiO1xyXG4iLCJpbXBvcnQgdHlwZSB7IFR5cGVkQXJyYXkgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xuaW1wb3J0IHR5cGUgeyBBY2Nlc3NvckNvbXBvbmVudFR5cGUsIEFjY2Vzc29yVHlwZSwgSUFjY2Vzc29yLCBJQnVmZmVyVmlldyB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcbmltcG9ydCB7IERhdGFXcml0ZXIgfSBmcm9tIFwiLi9kYXRhV3JpdGVyXCI7XG5cbnR5cGUgVHlwZWRBcnJheUZvcmdsVEYgPSBFeGNsdWRlPFR5cGVkQXJyYXksIEZsb2F0NjRBcnJheSB8IEJpZ0ludDY0QXJyYXkgfCBCaWdVaW50NjRBcnJheT47XG5cbmludGVyZmFjZSBJUHJvcGVydHlXaXRoQnVmZmVyVmlldyB7XG4gICAgYnVmZmVyVmlldz86IG51bWJlcjtcbn1cblxuZnVuY3Rpb24gZ2V0SGlnaGVzdEJ5dGVBbGlnbm1lbnQoYnl0ZUxlbmd0aDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBpZiAoYnl0ZUxlbmd0aCAlIDQgPT09IDApIHJldHVybiA0O1xuICAgIGlmIChieXRlTGVuZ3RoICUgMiA9PT0gMCkgcmV0dXJuIDI7XG4gICAgcmV0dXJuIDE7XG59XG5cbi8qKlxuICogVXRpbGl0eSBjbGFzcyB0byBjZW50cmFsaXplIHRoZSBtYW5hZ2VtZW50IG9mIGJpbmFyeSBkYXRhLCBidWZmZXJWaWV3cywgYW5kIHRoZSBvYmplY3RzIHRoYXQgcmVmZXJlbmNlIHRoZW0uXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGNsYXNzIEJ1ZmZlck1hbmFnZXIge1xuICAgIC8qKlxuICAgICAqIE1hcHMgYSBidWZmZXJWaWV3IHRvIGl0cyBkYXRhXG4gICAgICovXG4gICAgcHJpdmF0ZSBfYnVmZmVyVmlld1RvRGF0YTogTWFwPElCdWZmZXJWaWV3LCBUeXBlZEFycmF5Rm9yZ2xURj4gPSBuZXcgTWFwPElCdWZmZXJWaWV3LCBUeXBlZEFycmF5Rm9yZ2xURj4oKTtcblxuICAgIC8qKlxuICAgICAqIE1hcHMgYSBidWZmZXJWaWV3IHRvIGdsVEYgb2JqZWN0cyB0aGF0IHJlZmVyZW5jZSBpdCB2aWEgYSBcImJ1ZmZlclZpZXdcIiBwcm9wZXJ0eSAoZS5nLiBhY2Nlc3NvcnMsIGltYWdlcylcbiAgICAgKi9cbiAgICBwcml2YXRlIF9idWZmZXJWaWV3VG9Qcm9wZXJ0aWVzOiBNYXA8SUJ1ZmZlclZpZXcsIElQcm9wZXJ0eVdpdGhCdWZmZXJWaWV3W10+ID0gbmV3IE1hcDxJQnVmZmVyVmlldywgSVByb3BlcnR5V2l0aEJ1ZmZlclZpZXdbXT4oKTtcblxuICAgIC8qKlxuICAgICAqIE1hcHMgYW4gYWNjZXNzb3IgdG8gaXRzIGJ1ZmZlclZpZXdcbiAgICAgKi9cbiAgICBwcml2YXRlIF9hY2Nlc3NvclRvQnVmZmVyVmlldzogTWFwPElBY2Nlc3NvciwgSUJ1ZmZlclZpZXc+ID0gbmV3IE1hcDxJQWNjZXNzb3IsIElCdWZmZXJWaWV3PigpO1xuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGVzIGEgYmluYXJ5IGJ1ZmZlciBmcm9tIHRoZSBzdG9yZWQgYnVmZmVyVmlld3MuIEFsc28gcG9wdWxhdGVzIHRoZSBidWZmZXJWaWV3cyBsaXN0LlxuICAgICAqIEBwYXJhbSBidWZmZXJWaWV3cyBUaGUgbGlzdCBvZiBidWZmZXJWaWV3cyB0byBiZSBwb3B1bGF0ZWQgd2hpbGUgd3JpdGluZyB0aGUgYmluYXJ5XG4gICAgICogQHJldHVybnMgVGhlIGJpbmFyeSBidWZmZXJcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2VuZXJhdGVCaW5hcnkoYnVmZmVyVmlld3M6IElCdWZmZXJWaWV3W10pOiBVaW50OEFycmF5IHtcbiAgICAgICAgLy8gQ29uc3RydWN0IGEgRGF0YVdyaXRlciB3aXRoIHRoZSB0b3RhbCBieXRlIGxlbmd0aCB0byBwcmV2ZW50IHJlc2l6aW5nXG4gICAgICAgIGxldCB0b3RhbEJ5dGVMZW5ndGggPSAwO1xuICAgICAgICB0aGlzLl9idWZmZXJWaWV3VG9EYXRhLmZvckVhY2goKGRhdGEpID0+IHtcbiAgICAgICAgICAgIHRvdGFsQnl0ZUxlbmd0aCArPSBkYXRhLmJ5dGVMZW5ndGg7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBkYXRhV3JpdGVyID0gbmV3IERhdGFXcml0ZXIodG90YWxCeXRlTGVuZ3RoKTtcblxuICAgICAgICAvLyBPcmRlciB0aGUgYnVmZmVyVmlld3MgaW4gZGVzY2VuZGluZyBvcmRlciBvZiB0aGVpciBhbGlnbm1lbnQgcmVxdWlyZW1lbnRzXG4gICAgICAgIGNvbnN0IG9yZGVyZWRCdWZmZXJWaWV3cyA9IEFycmF5LmZyb20odGhpcy5fYnVmZmVyVmlld1RvRGF0YS5rZXlzKCkpLnNvcnQoKGEsIGIpID0+IGdldEhpZ2hlc3RCeXRlQWxpZ25tZW50KGIuYnl0ZUxlbmd0aCkgLSBnZXRIaWdoZXN0Qnl0ZUFsaWdubWVudChhLmJ5dGVMZW5ndGgpKTtcblxuICAgICAgICAvLyBGaWxsIGluIHRoZSBidWZmZXJWaWV3cyBsaXN0IGFuZCBtaXNzaW5nIGJ1ZmZlclZpZXcgaW5kZXggcmVmZXJlbmNlcyB3aGlsZSB3cml0aW5nIHRoZSBiaW5hcnlcbiAgICAgICAgZm9yIChjb25zdCBidWZmZXJWaWV3IG9mIG9yZGVyZWRCdWZmZXJWaWV3cykge1xuICAgICAgICAgICAgYnVmZmVyVmlldy5ieXRlT2Zmc2V0ID0gZGF0YVdyaXRlci5ieXRlT2Zmc2V0O1xuICAgICAgICAgICAgYnVmZmVyVmlld3MucHVzaChidWZmZXJWaWV3KTtcblxuICAgICAgICAgICAgY29uc3QgYnVmZmVyVmlld0luZGV4ID0gYnVmZmVyVmlld3MubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIGNvbnN0IHByb3BlcnRpZXMgPSB0aGlzLmdldFByb3BlcnRpZXNXaXRoQnVmZmVyVmlldyhidWZmZXJWaWV3KTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qgb2JqZWN0IG9mIHByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgICAgICBvYmplY3QuYnVmZmVyVmlldyA9IGJ1ZmZlclZpZXdJbmRleDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGF0YVdyaXRlci53cml0ZVR5cGVkQXJyYXkodGhpcy5fYnVmZmVyVmlld1RvRGF0YS5nZXQoYnVmZmVyVmlldykhKTtcblxuICAgICAgICAgICAgdGhpcy5fYnVmZmVyVmlld1RvRGF0YS5kZWxldGUoYnVmZmVyVmlldyk7IC8vIFRyeSB0byBmcmVlIHVwIG1lbW9yeSBBU0FQXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGF0YVdyaXRlci5nZXRPdXRwdXREYXRhKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGJ1ZmZlciB2aWV3IGJhc2VkIG9uIHRoZSBzdXBwbGllZCBhcmd1bWVudHNcbiAgICAgKiBAcGFyYW0gZGF0YSBhIFR5cGVkQXJyYXkgdG8gY3JlYXRlIHRoZSBidWZmZXJWaWV3IGZvclxuICAgICAqIEBwYXJhbSBieXRlU3RyaWRlIGJ5dGUgZGlzdGFuY2UgYmV0d2VlbiBjb25zZWN1dGl2ZSBlbGVtZW50c1xuICAgICAqIEByZXR1cm5zIGJ1ZmZlclZpZXcgZm9yIGdsVEZcbiAgICAgKi9cbiAgICBwdWJsaWMgY3JlYXRlQnVmZmVyVmlldyhkYXRhOiBUeXBlZEFycmF5Rm9yZ2xURiwgYnl0ZVN0cmlkZT86IG51bWJlcik6IElCdWZmZXJWaWV3IHtcbiAgICAgICAgY29uc3QgYnVmZmVyVmlldzogSUJ1ZmZlclZpZXcgPSB7XG4gICAgICAgICAgICBidWZmZXI6IDAsXG4gICAgICAgICAgICBieXRlT2Zmc2V0OiB1bmRlZmluZWQsIC8vIGJ5dGVPZmZzZXQgd2lsbCBiZSBzZXQgbGF0ZXIsIHdoZW4gd2Ugd3JpdGUgdGhlIGJpbmFyeSBhbmQgZGVjaWRlIGJ1ZmZlclZpZXcgb3JkZXJpbmdcbiAgICAgICAgICAgIGJ5dGVMZW5ndGg6IGRhdGEuYnl0ZUxlbmd0aCxcbiAgICAgICAgICAgIGJ5dGVTdHJpZGU6IGJ5dGVTdHJpZGUsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2J1ZmZlclZpZXdUb0RhdGEuc2V0KGJ1ZmZlclZpZXcsIGRhdGEpO1xuICAgICAgICByZXR1cm4gYnVmZmVyVmlldztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIGFjY2Vzc29yIGJhc2VkIG9uIHRoZSBzdXBwbGllZCBhcmd1bWVudHMgYW5kIGFzc2lnbnMgaXQgdG8gdGhlIGJ1ZmZlclZpZXdcbiAgICAgKiBAcGFyYW0gYnVmZmVyVmlldyBUaGUgZ2xURiBidWZmZXJWaWV3IHJlZmVyZW5jZWQgYnkgdGhpcyBhY2Nlc3NvclxuICAgICAqIEBwYXJhbSB0eXBlIFRoZSB0eXBlIG9mIHRoZSBhY2Nlc3NvclxuICAgICAqIEBwYXJhbSBjb21wb25lbnRUeXBlIFRoZSBkYXRhdHlwZSBvZiBjb21wb25lbnRzIGluIHRoZSBhdHRyaWJ1dGVcbiAgICAgKiBAcGFyYW0gY291bnQgVGhlIG51bWJlciBvZiBhdHRyaWJ1dGVzIHJlZmVyZW5jZWQgYnkgdGhpcyBhY2Nlc3NvclxuICAgICAqIEBwYXJhbSBieXRlT2Zmc2V0IFRoZSBvZmZzZXQgcmVsYXRpdmUgdG8gdGhlIHN0YXJ0IG9mIHRoZSBidWZmZXJWaWV3IGluIGJ5dGVzXG4gICAgICogQHBhcmFtIG1pbk1heCBNaW5pbXVtIGFuZCBtYXhpbXVtIHZhbHVlIG9mIGVhY2ggY29tcG9uZW50IGluIHRoaXMgYXR0cmlidXRlXG4gICAgICogQHBhcmFtIG5vcm1hbGl6ZWQgU3BlY2lmaWVzIHdoZXRoZXIgaW50ZWdlciBkYXRhIHZhbHVlcyBhcmUgbm9ybWFsaXplZCBiZWZvcmUgdXNhZ2VcbiAgICAgKiBAcmV0dXJucyBhY2Nlc3NvciBmb3IgZ2xURlxuICAgICAqL1xuICAgIHB1YmxpYyBjcmVhdGVBY2Nlc3NvcihcbiAgICAgICAgYnVmZmVyVmlldzogSUJ1ZmZlclZpZXcsXG4gICAgICAgIHR5cGU6IEFjY2Vzc29yVHlwZSxcbiAgICAgICAgY29tcG9uZW50VHlwZTogQWNjZXNzb3JDb21wb25lbnRUeXBlLFxuICAgICAgICBjb3VudDogbnVtYmVyLFxuICAgICAgICBieXRlT2Zmc2V0PzogbnVtYmVyLFxuICAgICAgICBtaW5NYXg/OiB7IG1pbjogbnVtYmVyW107IG1heDogbnVtYmVyW10gfSxcbiAgICAgICAgbm9ybWFsaXplZD86IGJvb2xlYW5cbiAgICApOiBJQWNjZXNzb3Ige1xuICAgICAgICB0aGlzLl92ZXJpZnlCdWZmZXJWaWV3KGJ1ZmZlclZpZXcpO1xuICAgICAgICBjb25zdCBhY2Nlc3NvcjogSUFjY2Vzc29yID0ge1xuICAgICAgICAgICAgYnVmZmVyVmlldzogdW5kZWZpbmVkLCAvLyBidWZmZXJWaWV3IHdpbGwgYmUgc2V0IHRvIGEgcmVhbCBpbmRleCBsYXRlciwgb25jZSB3ZSB3cml0ZSB0aGUgYmluYXJ5IGFuZCBkZWNpZGUgYnVmZmVyVmlldyBvcmRlcmluZ1xuICAgICAgICAgICAgY29tcG9uZW50VHlwZTogY29tcG9uZW50VHlwZSxcbiAgICAgICAgICAgIGNvdW50OiBjb3VudCxcbiAgICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgICBtaW46IG1pbk1heD8ubWluLFxuICAgICAgICAgICAgbWF4OiBtaW5NYXg/Lm1heCxcbiAgICAgICAgICAgIG5vcm1hbGl6ZWQ6IG5vcm1hbGl6ZWQsXG4gICAgICAgICAgICBieXRlT2Zmc2V0OiBieXRlT2Zmc2V0LFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNldEJ1ZmZlclZpZXcoYWNjZXNzb3IsIGJ1ZmZlclZpZXcpO1xuICAgICAgICB0aGlzLl9hY2Nlc3NvclRvQnVmZmVyVmlldy5zZXQoYWNjZXNzb3IsIGJ1ZmZlclZpZXcpO1xuICAgICAgICByZXR1cm4gYWNjZXNzb3I7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXNzaWducyBhIGJ1ZmZlclZpZXcgdG8gYSBnbFRGIG9iamVjdCB0aGF0IHJlZmVyZW5jZXMgaXRcbiAgICAgKiBAcGFyYW0gb2JqZWN0IFRoZSBnbFRGIG9iamVjdFxuICAgICAqIEBwYXJhbSBidWZmZXJWaWV3IFRoZSBidWZmZXJWaWV3IHRvIGFzc2lnblxuICAgICAqL1xuICAgIHB1YmxpYyBzZXRCdWZmZXJWaWV3KG9iamVjdDogSVByb3BlcnR5V2l0aEJ1ZmZlclZpZXcsIGJ1ZmZlclZpZXc6IElCdWZmZXJWaWV3KSB7XG4gICAgICAgIHRoaXMuX3ZlcmlmeUJ1ZmZlclZpZXcoYnVmZmVyVmlldyk7XG4gICAgICAgIGNvbnN0IHByb3BlcnRpZXMgPSB0aGlzLmdldFByb3BlcnRpZXNXaXRoQnVmZmVyVmlldyhidWZmZXJWaWV3KTtcbiAgICAgICAgcHJvcGVydGllcy5wdXNoKG9iamVjdCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBidWZmZXIgdmlldyBmcm9tIHRoZSBiaW5hcnkgZGF0YSwgYXMgd2VsbCBhcyBmcm9tIGFsbCBpdHMga25vd24gcmVmZXJlbmNlc1xuICAgICAqIEBwYXJhbSBidWZmZXJWaWV3IHRoZSBidWZmZXJWaWV3IHRvIHJlbW92ZVxuICAgICAqL1xuICAgIHB1YmxpYyByZW1vdmVCdWZmZXJWaWV3KGJ1ZmZlclZpZXc6IElCdWZmZXJWaWV3KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHByb3BlcnRpZXMgPSB0aGlzLmdldFByb3BlcnRpZXNXaXRoQnVmZmVyVmlldyhidWZmZXJWaWV3KTtcbiAgICAgICAgZm9yIChjb25zdCBvYmplY3Qgb2YgcHJvcGVydGllcykge1xuICAgICAgICAgICAgaWYgKG9iamVjdC5idWZmZXJWaWV3ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgb2JqZWN0LmJ1ZmZlclZpZXc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9idWZmZXJWaWV3VG9EYXRhLmRlbGV0ZShidWZmZXJWaWV3KTtcbiAgICAgICAgdGhpcy5fYnVmZmVyVmlld1RvUHJvcGVydGllcy5kZWxldGUoYnVmZmVyVmlldyk7XG4gICAgICAgIHRoaXMuX2FjY2Vzc29yVG9CdWZmZXJWaWV3LmZvckVhY2goKGJ2LCBhY2Nlc3NvcikgPT4ge1xuICAgICAgICAgICAgaWYgKGJ2ID09PSBidWZmZXJWaWV3KSB7XG4gICAgICAgICAgICAgICAgLy8gQWRkaXRpb25hbGx5LCByZW1vdmUgYnl0ZU9mZnNldCBmcm9tIGFjY2Vzc29yIHJlZmVyZW5jaW5nIHRoaXMgYnVmZmVyVmlld1xuICAgICAgICAgICAgICAgIGlmIChhY2Nlc3Nvci5ieXRlT2Zmc2V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGFjY2Vzc29yLmJ5dGVPZmZzZXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX2FjY2Vzc29yVG9CdWZmZXJWaWV3LmRlbGV0ZShhY2Nlc3Nvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRCdWZmZXJWaWV3KGFjY2Vzc29yOiBJQWNjZXNzb3IpOiBJQnVmZmVyVmlldyB7XG4gICAgICAgIGNvbnN0IGJ1ZmZlclZpZXcgPSB0aGlzLl9hY2Nlc3NvclRvQnVmZmVyVmlldy5nZXQoYWNjZXNzb3IpO1xuICAgICAgICB0aGlzLl92ZXJpZnlCdWZmZXJWaWV3KGJ1ZmZlclZpZXcpO1xuICAgICAgICByZXR1cm4gYnVmZmVyVmlldyE7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFByb3BlcnRpZXNXaXRoQnVmZmVyVmlldyhidWZmZXJWaWV3OiBJQnVmZmVyVmlldyk6IElQcm9wZXJ0eVdpdGhCdWZmZXJWaWV3W10ge1xuICAgICAgICB0aGlzLl92ZXJpZnlCdWZmZXJWaWV3KGJ1ZmZlclZpZXcpO1xuICAgICAgICB0aGlzLl9idWZmZXJWaWV3VG9Qcm9wZXJ0aWVzLnNldChidWZmZXJWaWV3LCB0aGlzLl9idWZmZXJWaWV3VG9Qcm9wZXJ0aWVzLmdldChidWZmZXJWaWV3KSA/PyBbXSk7XG4gICAgICAgIHJldHVybiB0aGlzLl9idWZmZXJWaWV3VG9Qcm9wZXJ0aWVzLmdldChidWZmZXJWaWV3KSE7XG4gICAgfVxuXG4gICAgcHVibGljIGdldERhdGEoYnVmZmVyVmlldzogSUJ1ZmZlclZpZXcpOiBUeXBlZEFycmF5Rm9yZ2xURiB7XG4gICAgICAgIHRoaXMuX3ZlcmlmeUJ1ZmZlclZpZXcoYnVmZmVyVmlldyk7XG4gICAgICAgIHJldHVybiB0aGlzLl9idWZmZXJWaWV3VG9EYXRhLmdldChidWZmZXJWaWV3KSE7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdmVyaWZ5QnVmZmVyVmlldyhidWZmZXJWaWV3PzogSUJ1ZmZlclZpZXcpOiB2b2lkIHtcbiAgICAgICAgaWYgKGJ1ZmZlclZpZXcgPT09IHVuZGVmaW5lZCB8fCAhdGhpcy5fYnVmZmVyVmlld1RvRGF0YS5oYXMoYnVmZmVyVmlldykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQnVmZmVyVmlldyAke2J1ZmZlclZpZXd9IG5vdCBmb3VuZCBpbiBCdWZmZXJNYW5hZ2VyLmApO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGJhYnlsb25qcy9hdmFpbGFibGUgKi9cclxuaW1wb3J0IHR5cGUgeyBUeXBlZEFycmF5IH0gZnJvbSBcImNvcmUvdHlwZXNcIjtcclxuXHJcbmNvbnN0IFR5cGVkQXJyYXlUb1dyaXRlTWV0aG9kID0gbmV3IE1hcDxGdW5jdGlvbiwgKGRhdGFWaWV3OiBEYXRhVmlldywgYnl0ZU9mZnNldDogbnVtYmVyLCB2YWx1ZTogbnVtYmVyKSA9PiB2b2lkPihbXHJcbiAgICBbSW50OEFycmF5LCAoZCwgYiwgdikgPT4gZC5zZXRJbnQ4KGIsIHYpXSxcclxuICAgIFtVaW50OEFycmF5LCAoZHYsIGJvLCB2KSA9PiBkdi5zZXRVaW50OChibywgdildLFxyXG4gICAgW1VpbnQ4Q2xhbXBlZEFycmF5LCAoZHYsIGJvLCB2KSA9PiBkdi5zZXRVaW50OChibywgdildLFxyXG4gICAgW0ludDE2QXJyYXksIChkdiwgYm8sIHYpID0+IGR2LnNldEludDE2KGJvLCB2LCB0cnVlKV0sXHJcbiAgICBbVWludDE2QXJyYXksIChkdiwgYm8sIHYpID0+IGR2LnNldFVpbnQxNihibywgdiwgdHJ1ZSldLFxyXG4gICAgW0ludDMyQXJyYXksIChkdiwgYm8sIHYpID0+IGR2LnNldEludDMyKGJvLCB2LCB0cnVlKV0sXHJcbiAgICBbVWludDMyQXJyYXksIChkdiwgYm8sIHYpID0+IGR2LnNldFVpbnQzMihibywgdiwgdHJ1ZSldLFxyXG4gICAgW0Zsb2F0MzJBcnJheSwgKGR2LCBibywgdikgPT4gZHYuc2V0RmxvYXQzMihibywgdiwgdHJ1ZSldLFxyXG4gICAgW0Zsb2F0NjRBcnJheSwgKGR2LCBibywgdikgPT4gZHYuc2V0RmxvYXQ2NChibywgdiwgdHJ1ZSldLFxyXG5dKTtcclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuZXhwb3J0IGNsYXNzIERhdGFXcml0ZXIge1xyXG4gICAgcHJpdmF0ZSBfZGF0YTogVWludDhBcnJheTtcclxuICAgIHByaXZhdGUgX2RhdGFWaWV3OiBEYXRhVmlldztcclxuICAgIHByaXZhdGUgX2J5dGVPZmZzZXQ6IG51bWJlcjtcclxuXHJcbiAgICBwdWJsaWMgd3JpdGVUeXBlZEFycmF5KHZhbHVlOiBFeGNsdWRlPFR5cGVkQXJyYXksIEJpZ0ludDY0QXJyYXkgfCBCaWdVaW50NjRBcnJheT4pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9jaGVja0dyb3dCdWZmZXIodmFsdWUuYnl0ZUxlbmd0aCk7XHJcbiAgICAgICAgY29uc3Qgc2V0TWV0aG9kID0gVHlwZWRBcnJheVRvV3JpdGVNZXRob2QuZ2V0KHZhbHVlLmNvbnN0cnVjdG9yKSE7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBzZXRNZXRob2QodGhpcy5fZGF0YVZpZXcsIHRoaXMuX2J5dGVPZmZzZXQsIHZhbHVlW2ldIGFzIG51bWJlcik7XHJcbiAgICAgICAgICAgIHRoaXMuX2J5dGVPZmZzZXQgKz0gdmFsdWUuQllURVNfUEVSX0VMRU1FTlQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihieXRlTGVuZ3RoOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9kYXRhID0gbmV3IFVpbnQ4QXJyYXkoYnl0ZUxlbmd0aCk7XHJcbiAgICAgICAgdGhpcy5fZGF0YVZpZXcgPSBuZXcgRGF0YVZpZXcodGhpcy5fZGF0YS5idWZmZXIpO1xyXG4gICAgICAgIHRoaXMuX2J5dGVPZmZzZXQgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgYnl0ZU9mZnNldCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ieXRlT2Zmc2V0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRPdXRwdXREYXRhKCk6IFVpbnQ4QXJyYXkge1xyXG4gICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheSh0aGlzLl9kYXRhLmJ1ZmZlciwgMCwgdGhpcy5fYnl0ZU9mZnNldCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHdyaXRlVUludDgodmFsdWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2NoZWNrR3Jvd0J1ZmZlcigxKTtcclxuICAgICAgICB0aGlzLl9kYXRhVmlldy5zZXRVaW50OCh0aGlzLl9ieXRlT2Zmc2V0LCB2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5fYnl0ZU9mZnNldCsrO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB3cml0ZUludDgodmFsdWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2NoZWNrR3Jvd0J1ZmZlcigxKTtcclxuICAgICAgICB0aGlzLl9kYXRhVmlldy5zZXRJbnQ4KHRoaXMuX2J5dGVPZmZzZXQsIHZhbHVlKTtcclxuICAgICAgICB0aGlzLl9ieXRlT2Zmc2V0Kys7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHdyaXRlSW50MTYoZW50cnk6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2NoZWNrR3Jvd0J1ZmZlcigyKTtcclxuICAgICAgICB0aGlzLl9kYXRhVmlldy5zZXRJbnQxNih0aGlzLl9ieXRlT2Zmc2V0LCBlbnRyeSwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5fYnl0ZU9mZnNldCArPSAyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB3cml0ZVVJbnQxNih2YWx1ZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fY2hlY2tHcm93QnVmZmVyKDIpO1xyXG4gICAgICAgIHRoaXMuX2RhdGFWaWV3LnNldFVpbnQxNih0aGlzLl9ieXRlT2Zmc2V0LCB2YWx1ZSwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5fYnl0ZU9mZnNldCArPSAyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB3cml0ZUludDMyKGVudHJ5OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9jaGVja0dyb3dCdWZmZXIoNCk7XHJcbiAgICAgICAgdGhpcy5fZGF0YVZpZXcuc2V0SW50MzIodGhpcy5fYnl0ZU9mZnNldCwgZW50cnksIHRydWUpO1xyXG4gICAgICAgIHRoaXMuX2J5dGVPZmZzZXQgKz0gNDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgd3JpdGVVSW50MzIodmFsdWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2NoZWNrR3Jvd0J1ZmZlcig0KTtcclxuICAgICAgICB0aGlzLl9kYXRhVmlldy5zZXRVaW50MzIodGhpcy5fYnl0ZU9mZnNldCwgdmFsdWUsIHRydWUpO1xyXG4gICAgICAgIHRoaXMuX2J5dGVPZmZzZXQgKz0gNDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgd3JpdGVGbG9hdDMyKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9jaGVja0dyb3dCdWZmZXIoNCk7XHJcbiAgICAgICAgdGhpcy5fZGF0YVZpZXcuc2V0RmxvYXQzMih0aGlzLl9ieXRlT2Zmc2V0LCB2YWx1ZSwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5fYnl0ZU9mZnNldCArPSA0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB3cml0ZUZsb2F0NjQodmFsdWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2NoZWNrR3Jvd0J1ZmZlcig4KTtcclxuICAgICAgICB0aGlzLl9kYXRhVmlldy5zZXRGbG9hdDY0KHRoaXMuX2J5dGVPZmZzZXQsIHZhbHVlLCB0cnVlKTtcclxuICAgICAgICB0aGlzLl9ieXRlT2Zmc2V0ICs9IDg7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY2hlY2tHcm93QnVmZmVyKGJ5dGVMZW5ndGg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IG5ld0J5dGVMZW5ndGggPSB0aGlzLmJ5dGVPZmZzZXQgKyBieXRlTGVuZ3RoO1xyXG4gICAgICAgIGlmIChuZXdCeXRlTGVuZ3RoID4gdGhpcy5fZGF0YS5ieXRlTGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0RhdGEgPSBuZXcgVWludDhBcnJheShuZXdCeXRlTGVuZ3RoICogMik7XHJcbiAgICAgICAgICAgIG5ld0RhdGEuc2V0KHRoaXMuX2RhdGEpO1xyXG4gICAgICAgICAgICB0aGlzLl9kYXRhID0gbmV3RGF0YTtcclxuICAgICAgICAgICAgdGhpcy5fZGF0YVZpZXcgPSBuZXcgRGF0YVZpZXcodGhpcy5fZGF0YS5idWZmZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgdHlwZSB7IElBbmltYXRpb24sIElOb2RlLCBJQnVmZmVyVmlldywgSUFjY2Vzc29yLCBJQW5pbWF0aW9uU2FtcGxlciwgSUFuaW1hdGlvbkNoYW5uZWwgfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IEFuaW1hdGlvblNhbXBsZXJJbnRlcnBvbGF0aW9uLCBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCwgQWNjZXNzb3JUeXBlLCBBY2Nlc3NvckNvbXBvbmVudFR5cGUgfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB0eXBlIHsgTm9kZSB9IGZyb20gXCJjb3JlL25vZGVcIjtcclxuaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCJjb3JlL3R5cGVzXCI7XHJcbmltcG9ydCB7IFZlY3RvcjMsIFF1YXRlcm5pb24gfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLnZlY3RvclwiO1xyXG5pbXBvcnQgeyBUb29scyB9IGZyb20gXCJjb3JlL01pc2MvdG9vbHNcIjtcclxuaW1wb3J0IHsgQW5pbWF0aW9uIH0gZnJvbSBcImNvcmUvQW5pbWF0aW9ucy9hbmltYXRpb25cIjtcclxuaW1wb3J0IHsgVHJhbnNmb3JtTm9kZSB9IGZyb20gXCJjb3JlL01lc2hlcy90cmFuc2Zvcm1Ob2RlXCI7XHJcbmltcG9ydCB0eXBlIHsgU2NlbmUgfSBmcm9tIFwiY29yZS9zY2VuZVwiO1xyXG5pbXBvcnQgeyBNb3JwaFRhcmdldCB9IGZyb20gXCJjb3JlL01vcnBoL21vcnBoVGFyZ2V0XCI7XHJcbmltcG9ydCB7IE1lc2ggfSBmcm9tIFwiY29yZS9NZXNoZXMvbWVzaFwiO1xyXG5cclxuaW1wb3J0IHR5cGUgeyBJQW5pbWF0aW9uS2V5IH0gZnJvbSBcImNvcmUvQW5pbWF0aW9ucy9hbmltYXRpb25LZXlcIjtcclxuaW1wb3J0IHsgQW5pbWF0aW9uS2V5SW50ZXJwb2xhdGlvbiB9IGZyb20gXCJjb3JlL0FuaW1hdGlvbnMvYW5pbWF0aW9uS2V5XCI7XHJcblxyXG5pbXBvcnQgeyBDYW1lcmEgfSBmcm9tIFwiY29yZS9DYW1lcmFzL2NhbWVyYVwiO1xyXG5pbXBvcnQgeyBMaWdodCB9IGZyb20gXCJjb3JlL0xpZ2h0cy9saWdodFwiO1xyXG5pbXBvcnQgdHlwZSB7IEJ1ZmZlck1hbmFnZXIgfSBmcm9tIFwiLi9idWZmZXJNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IEdldEFjY2Vzc29yRWxlbWVudENvdW50LCBDb252ZXJ0VG9SaWdodEhhbmRlZFBvc2l0aW9uLCBDb252ZXJ0Q2FtZXJhUm90YXRpb25Ub0dMVEYsIENvbnZlcnRUb1JpZ2h0SGFuZGVkUm90YXRpb24gfSBmcm9tIFwiLi9nbFRGVXRpbGl0aWVzXCI7XHJcblxyXG4vKipcclxuICogQGludGVybmFsXHJcbiAqIEludGVyZmFjZSB0byBzdG9yZSBhbmltYXRpb24gZGF0YS5cclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGludGVyZmFjZSBfSUFuaW1hdGlvbkRhdGEge1xyXG4gICAgLyoqXHJcbiAgICAgKiBLZXlmcmFtZSBkYXRhLlxyXG4gICAgICovXHJcbiAgICBpbnB1dHM6IG51bWJlcltdO1xyXG4gICAgLyoqXHJcbiAgICAgKiBWYWx1ZSBkYXRhLlxyXG4gICAgICovXHJcbiAgICBvdXRwdXRzOiBudW1iZXJbXVtdO1xyXG4gICAgLyoqXHJcbiAgICAgKiBBbmltYXRpb24gaW50ZXJwb2xhdGlvbiBkYXRhLlxyXG4gICAgICovXHJcbiAgICBzYW1wbGVySW50ZXJwb2xhdGlvbjogQW5pbWF0aW9uU2FtcGxlckludGVycG9sYXRpb247XHJcbiAgICAvKipcclxuICAgICAqIE1pbmltdW0ga2V5ZnJhbWUgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIGlucHV0c01pbjogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBNYXhpbXVtIGtleWZyYW1lIHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBpbnB1dHNNYXg6IG51bWJlcjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgaW50ZXJmYWNlIF9JQW5pbWF0aW9uSW5mbyB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSB0YXJnZXQgY2hhbm5lbCBmb3IgdGhlIGFuaW1hdGlvblxyXG4gICAgICovXHJcbiAgICBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aDogQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGg7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBnbFRGIGFjY2Vzc29yIHR5cGUgZm9yIHRoZSBkYXRhLlxyXG4gICAgICovXHJcbiAgICBkYXRhQWNjZXNzb3JUeXBlOiBBY2Nlc3NvclR5cGUuVkVDMyB8IEFjY2Vzc29yVHlwZS5WRUM0IHwgQWNjZXNzb3JUeXBlLlNDQUxBUjtcclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIGlmIHF1YXRlcm5pb25zIHNob3VsZCBiZSB1c2VkLlxyXG4gICAgICovXHJcbiAgICB1c2VRdWF0ZXJuaW9uOiBib29sZWFuO1xyXG59XHJcblxyXG4vKipcclxuICogQGludGVybmFsXHJcbiAqIEVudW0gZm9yIGhhbmRsaW5nIGluIHRhbmdlbnQgYW5kIG91dCB0YW5nZW50LlxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5lbnVtIF9UYW5nZW50VHlwZSB7XHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGF0IGlucHV0IHRhbmdlbnRzIGFyZSB1c2VkLlxyXG4gICAgICovXHJcbiAgICBJTlRBTkdFTlQsXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGF0IG91dHB1dCB0YW5nZW50cyBhcmUgdXNlZC5cclxuICAgICAqL1xyXG4gICAgT1VUVEFOR0VOVCxcclxufVxyXG5cclxuLyoqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKiBVdGlsaXR5IGNsYXNzIGZvciBnZW5lcmF0aW5nIGdsVEYgYW5pbWF0aW9uIGRhdGEgZnJvbSBCYWJ5bG9uSlMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgX0dMVEZBbmltYXRpb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBEZXRlcm1pbmUgaWYgYSBub2RlIGlzIHRyYW5zZm9ybWFibGUgLSBpZSBoYXMgcHJvcGVydGllcyBpdCBzaG91bGQgYmUgcGFydCBvZiBhbmltYXRpb24gb2YgdHJhbnNmb3JtYXRpb24uXHJcbiAgICAgKiBAcGFyYW0gYmFieWxvbk5vZGUgdGhlIG5vZGUgdG8gdGVzdFxyXG4gICAgICogQHJldHVybnMgdHJ1ZSBpZiBjYW4gYmUgYW5pbWF0ZWQsIGZhbHNlIG90aGVyd2lzZS4gRmFsc2UgaWYgdGhlIHBhcmFtZXRlciBpcyBudWxsIG9yIHVuZGVmaW5lZC5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX0lzVHJhbnNmb3JtYWJsZShiYWJ5bG9uTm9kZTogTm9kZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBiYWJ5bG9uTm9kZSAmJiAoYmFieWxvbk5vZGUgaW5zdGFuY2VvZiBUcmFuc2Zvcm1Ob2RlIHx8IGJhYnlsb25Ob2RlIGluc3RhbmNlb2YgQ2FtZXJhIHx8IGJhYnlsb25Ob2RlIGluc3RhbmNlb2YgTGlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGlnbm9yZVxyXG4gICAgICpcclxuICAgICAqIENyZWF0ZXMgZ2xURiBjaGFubmVsIGFuaW1hdGlvbiBmcm9tIEJhYnlsb25KUyBhbmltYXRpb24uXHJcbiAgICAgKiBAcGFyYW0gYmFieWxvblRyYW5zZm9ybU5vZGUgLSBCYWJ5bG9uSlMgbWVzaC5cclxuICAgICAqIEBwYXJhbSBhbmltYXRpb24gLSBhbmltYXRpb24uXHJcbiAgICAgKiBAcGFyYW0gYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGggLSBUaGUgdGFyZ2V0IGFuaW1hdGlvbiBjaGFubmVsLlxyXG4gICAgICogQHBhcmFtIHVzZVF1YXRlcm5pb24gLSBTcGVjaWZpZXMgaWYgcXVhdGVybmlvbnMgYXJlIHVzZWQuXHJcbiAgICAgKiBAcmV0dXJucyBudWxsYWJsZSBJQW5pbWF0aW9uRGF0YVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIF9DcmVhdGVOb2RlQW5pbWF0aW9uKFxyXG4gICAgICAgIGJhYnlsb25UcmFuc2Zvcm1Ob2RlOiBOb2RlLFxyXG4gICAgICAgIGFuaW1hdGlvbjogQW5pbWF0aW9uLFxyXG4gICAgICAgIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoOiBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCxcclxuICAgICAgICB1c2VRdWF0ZXJuaW9uOiBib29sZWFuLFxyXG4gICAgICAgIGFuaW1hdGlvblNhbXBsZVJhdGU6IG51bWJlclxyXG4gICAgKTogTnVsbGFibGU8X0lBbmltYXRpb25EYXRhPiB7XHJcbiAgICAgICAgaWYgKHRoaXMuX0lzVHJhbnNmb3JtYWJsZShiYWJ5bG9uVHJhbnNmb3JtTm9kZSkpIHtcclxuICAgICAgICAgICAgY29uc3QgaW5wdXRzOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgICAgICAgICBjb25zdCBvdXRwdXRzOiBudW1iZXJbXVtdID0gW107XHJcbiAgICAgICAgICAgIGNvbnN0IGtleUZyYW1lcyA9IGFuaW1hdGlvbi5nZXRLZXlzKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1pbk1heEtleUZyYW1lcyA9IF9HTFRGQW5pbWF0aW9uLl9DYWxjdWxhdGVNaW5NYXhLZXlGcmFtZXMoa2V5RnJhbWVzKTtcclxuICAgICAgICAgICAgY29uc3QgaW50ZXJwb2xhdGlvbk9yQmFrZSA9IF9HTFRGQW5pbWF0aW9uLl9EZWR1Y2VJbnRlcnBvbGF0aW9uKGtleUZyYW1lcywgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsIHVzZVF1YXRlcm5pb24pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaW50ZXJwb2xhdGlvbiA9IGludGVycG9sYXRpb25PckJha2UuaW50ZXJwb2xhdGlvblR5cGU7XHJcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZEJha2VBbmltYXRpb24gPSBpbnRlcnBvbGF0aW9uT3JCYWtlLnNob3VsZEJha2VBbmltYXRpb247XHJcblxyXG4gICAgICAgICAgICBpZiAoc2hvdWxkQmFrZUFuaW1hdGlvbikge1xyXG4gICAgICAgICAgICAgICAgX0dMVEZBbmltYXRpb24uX0NyZWF0ZUJha2VkQW5pbWF0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgIGJhYnlsb25UcmFuc2Zvcm1Ob2RlLFxyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCxcclxuICAgICAgICAgICAgICAgICAgICBtaW5NYXhLZXlGcmFtZXMubWluLFxyXG4gICAgICAgICAgICAgICAgICAgIG1pbk1heEtleUZyYW1lcy5tYXgsXHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLmZyYW1lUGVyU2Vjb25kLFxyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvblNhbXBsZVJhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRzLFxyXG4gICAgICAgICAgICAgICAgICAgIG91dHB1dHMsXHJcbiAgICAgICAgICAgICAgICAgICAgbWluTWF4S2V5RnJhbWVzLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZVF1YXRlcm5pb25cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW50ZXJwb2xhdGlvbiA9PT0gQW5pbWF0aW9uU2FtcGxlckludGVycG9sYXRpb24uTElORUFSIHx8IGludGVycG9sYXRpb24gPT09IEFuaW1hdGlvblNhbXBsZXJJbnRlcnBvbGF0aW9uLlNURVApIHtcclxuICAgICAgICAgICAgICAgICAgICBfR0xURkFuaW1hdGlvbi5fQ3JlYXRlTGluZWFyT3JTdGVwQW5pbWF0aW9uKGJhYnlsb25UcmFuc2Zvcm1Ob2RlLCBhbmltYXRpb24sIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLCBpbnB1dHMsIG91dHB1dHMsIHVzZVF1YXRlcm5pb24pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpbnRlcnBvbGF0aW9uID09PSBBbmltYXRpb25TYW1wbGVySW50ZXJwb2xhdGlvbi5DVUJJQ1NQTElORSkge1xyXG4gICAgICAgICAgICAgICAgICAgIF9HTFRGQW5pbWF0aW9uLl9DcmVhdGVDdWJpY1NwbGluZUFuaW1hdGlvbihiYWJ5bG9uVHJhbnNmb3JtTm9kZSwgYW5pbWF0aW9uLCBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCwgaW5wdXRzLCBvdXRwdXRzLCB1c2VRdWF0ZXJuaW9uKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX0dMVEZBbmltYXRpb24uX0NyZWF0ZUJha2VkQW5pbWF0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uVHJhbnNmb3JtTm9kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluTWF4S2V5RnJhbWVzLm1pbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluTWF4S2V5RnJhbWVzLm1heCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLmZyYW1lUGVyU2Vjb25kLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25TYW1wbGVSYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbk1heEtleUZyYW1lcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlUXVhdGVybmlvblxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChpbnB1dHMubGVuZ3RoICYmIG91dHB1dHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQ6IF9JQW5pbWF0aW9uRGF0YSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dHM6IGlucHV0cyxcclxuICAgICAgICAgICAgICAgICAgICBvdXRwdXRzOiBvdXRwdXRzLFxyXG4gICAgICAgICAgICAgICAgICAgIHNhbXBsZXJJbnRlcnBvbGF0aW9uOiBpbnRlcnBvbGF0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0c01pbjogc2hvdWxkQmFrZUFuaW1hdGlvbiA/IG1pbk1heEtleUZyYW1lcy5taW4gOiBUb29scy5GbG9hdFJvdW5kKG1pbk1heEtleUZyYW1lcy5taW4gLyBhbmltYXRpb24uZnJhbWVQZXJTZWNvbmQpLFxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0c01heDogc2hvdWxkQmFrZUFuaW1hdGlvbiA/IG1pbk1heEtleUZyYW1lcy5tYXggOiBUb29scy5GbG9hdFJvdW5kKG1pbk1heEtleUZyYW1lcy5tYXggLyBhbmltYXRpb24uZnJhbWVQZXJTZWNvbmQpLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfRGVkdWNlQW5pbWF0aW9uSW5mbyhhbmltYXRpb246IEFuaW1hdGlvbik6IE51bGxhYmxlPF9JQW5pbWF0aW9uSW5mbz4ge1xyXG4gICAgICAgIGxldCBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aDogTnVsbGFibGU8QW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGg+ID0gbnVsbDtcclxuICAgICAgICBsZXQgZGF0YUFjY2Vzc29yVHlwZSA9IEFjY2Vzc29yVHlwZS5WRUMzO1xyXG4gICAgICAgIGxldCB1c2VRdWF0ZXJuaW9uOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAgICAgY29uc3QgcHJvcGVydHkgPSBhbmltYXRpb24udGFyZ2V0UHJvcGVydHkuc3BsaXQoXCIuXCIpO1xyXG4gICAgICAgIHN3aXRjaCAocHJvcGVydHlbMF0pIHtcclxuICAgICAgICAgICAgY2FzZSBcInNjYWxpbmdcIjoge1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGggPSBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aC5TQ0FMRTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJwb3NpdGlvblwiOiB7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCA9IEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLlRSQU5TTEFUSU9OO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcInJvdGF0aW9uXCI6IHtcclxuICAgICAgICAgICAgICAgIGRhdGFBY2Nlc3NvclR5cGUgPSBBY2Nlc3NvclR5cGUuVkVDNDtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoID0gQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGguUk9UQVRJT047XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwicm90YXRpb25RdWF0ZXJuaW9uXCI6IHtcclxuICAgICAgICAgICAgICAgIGRhdGFBY2Nlc3NvclR5cGUgPSBBY2Nlc3NvclR5cGUuVkVDNDtcclxuICAgICAgICAgICAgICAgIHVzZVF1YXRlcm5pb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGggPSBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aC5ST1RBVElPTjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJpbmZsdWVuY2VcIjoge1xyXG4gICAgICAgICAgICAgICAgZGF0YUFjY2Vzc29yVHlwZSA9IEFjY2Vzc29yVHlwZS5TQ0FMQVI7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCA9IEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLldFSUdIVFM7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgICAgICBUb29scy5FcnJvcihgVW5zdXBwb3J0ZWQgYW5pbWF0YWJsZSBwcm9wZXJ0eSAke3Byb3BlcnR5WzBdfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4geyBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aDogYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsIGRhdGFBY2Nlc3NvclR5cGU6IGRhdGFBY2Nlc3NvclR5cGUsIHVzZVF1YXRlcm5pb246IHVzZVF1YXRlcm5pb24gfTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBUb29scy5FcnJvcihcImFuaW1hdGlvbiBjaGFubmVsIHRhcmdldCBwYXRoIGFuZCBkYXRhIGFjY2Vzc29yIHR5cGUgY291bGQgYmUgZGVkdWNlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaWdub3JlXHJcbiAgICAgKiBDcmVhdGUgbm9kZSBhbmltYXRpb25zIGZyb20gdGhlIHRyYW5zZm9ybSBub2RlIGFuaW1hdGlvbnNcclxuICAgICAqIEBwYXJhbSBiYWJ5bG9uTm9kZVxyXG4gICAgICogQHBhcmFtIHJ1bnRpbWVHTFRGQW5pbWF0aW9uXHJcbiAgICAgKiBAcGFyYW0gaWRsZUdMVEZBbmltYXRpb25zXHJcbiAgICAgKiBAcGFyYW0gbm9kZU1hcFxyXG4gICAgICogQHBhcmFtIG5vZGVzXHJcbiAgICAgKiBAcGFyYW0gYnVmZmVyTWFuYWdlclxyXG4gICAgICogQHBhcmFtIGJ1ZmZlclZpZXdzXHJcbiAgICAgKiBAcGFyYW0gYWNjZXNzb3JzXHJcbiAgICAgKiBAcGFyYW0gYW5pbWF0aW9uU2FtcGxlUmF0ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIF9DcmVhdGVOb2RlQW5pbWF0aW9uRnJvbU5vZGVBbmltYXRpb25zKFxyXG4gICAgICAgIGJhYnlsb25Ob2RlOiBOb2RlLFxyXG4gICAgICAgIHJ1bnRpbWVHTFRGQW5pbWF0aW9uOiBJQW5pbWF0aW9uLFxyXG4gICAgICAgIGlkbGVHTFRGQW5pbWF0aW9uczogSUFuaW1hdGlvbltdLFxyXG4gICAgICAgIG5vZGVNYXA6IE1hcDxOb2RlLCBudW1iZXI+LFxyXG4gICAgICAgIG5vZGVzOiBJTm9kZVtdLFxyXG4gICAgICAgIGJ1ZmZlck1hbmFnZXI6IEJ1ZmZlck1hbmFnZXIsXHJcbiAgICAgICAgYnVmZmVyVmlld3M6IElCdWZmZXJWaWV3W10sXHJcbiAgICAgICAgYWNjZXNzb3JzOiBJQWNjZXNzb3JbXSxcclxuICAgICAgICBhbmltYXRpb25TYW1wbGVSYXRlOiBudW1iZXIsXHJcbiAgICAgICAgdXNlUmlnaHRIYW5kZWQ6IGJvb2xlYW4sXHJcbiAgICAgICAgc2hvdWxkRXhwb3J0QW5pbWF0aW9uPzogKGFuaW1hdGlvbjogQW5pbWF0aW9uKSA9PiBib29sZWFuXHJcbiAgICApIHtcclxuICAgICAgICBsZXQgZ2xURkFuaW1hdGlvbjogSUFuaW1hdGlvbjtcclxuICAgICAgICBpZiAoX0dMVEZBbmltYXRpb24uX0lzVHJhbnNmb3JtYWJsZShiYWJ5bG9uTm9kZSkpIHtcclxuICAgICAgICAgICAgaWYgKGJhYnlsb25Ob2RlLmFuaW1hdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYW5pbWF0aW9uIG9mIGJhYnlsb25Ob2RlLmFuaW1hdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2hvdWxkRXhwb3J0QW5pbWF0aW9uICYmICFzaG91bGRFeHBvcnRBbmltYXRpb24oYW5pbWF0aW9uKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYW5pbWF0aW9uSW5mbyA9IF9HTFRGQW5pbWF0aW9uLl9EZWR1Y2VBbmltYXRpb25JbmZvKGFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFuaW1hdGlvbkluZm8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2xURkFuaW1hdGlvbiA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGFuaW1hdGlvbi5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FtcGxlcnM6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbm5lbHM6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfR0xURkFuaW1hdGlvbi5fQWRkQW5pbWF0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7YW5pbWF0aW9uLm5hbWV9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi5oYXNSdW5uaW5nUnVudGltZUFuaW1hdGlvbnMgPyBydW50aW1lR0xURkFuaW1hdGlvbiA6IGdsVEZBbmltYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uTm9kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkluZm8uZGF0YUFjY2Vzc29yVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkluZm8uYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlTWFwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyTWFuYWdlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlclZpZXdzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXNzb3JzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uSW5mby51c2VRdWF0ZXJuaW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uU2FtcGxlUmF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZVJpZ2h0SGFuZGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnbFRGQW5pbWF0aW9uLnNhbXBsZXJzLmxlbmd0aCAmJiBnbFRGQW5pbWF0aW9uLmNoYW5uZWxzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRsZUdMVEZBbmltYXRpb25zLnB1c2goZ2xURkFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaWdub3JlXHJcbiAgICAgKiBDcmVhdGUgaW5kaXZpZHVhbCBtb3JwaCBhbmltYXRpb25zIGZyb20gdGhlIG1lc2gncyBtb3JwaCB0YXJnZXQgYW5pbWF0aW9uIHRyYWNrc1xyXG4gICAgICogQHBhcmFtIGJhYnlsb25Ob2RlXHJcbiAgICAgKiBAcGFyYW0gcnVudGltZUdMVEZBbmltYXRpb25cclxuICAgICAqIEBwYXJhbSBpZGxlR0xURkFuaW1hdGlvbnNcclxuICAgICAqIEBwYXJhbSBub2RlTWFwXHJcbiAgICAgKiBAcGFyYW0gbm9kZXNcclxuICAgICAqIEBwYXJhbSBidWZmZXJNYW5hZ2VyXHJcbiAgICAgKiBAcGFyYW0gYnVmZmVyVmlld3NcclxuICAgICAqIEBwYXJhbSBhY2Nlc3NvcnNcclxuICAgICAqIEBwYXJhbSBhbmltYXRpb25TYW1wbGVSYXRlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgX0NyZWF0ZU1vcnBoVGFyZ2V0QW5pbWF0aW9uRnJvbU1vcnBoVGFyZ2V0QW5pbWF0aW9ucyhcclxuICAgICAgICBiYWJ5bG9uTm9kZTogTm9kZSxcclxuICAgICAgICBydW50aW1lR0xURkFuaW1hdGlvbjogSUFuaW1hdGlvbixcclxuICAgICAgICBpZGxlR0xURkFuaW1hdGlvbnM6IElBbmltYXRpb25bXSxcclxuICAgICAgICBub2RlTWFwOiBNYXA8Tm9kZSwgbnVtYmVyPixcclxuICAgICAgICBub2RlczogSU5vZGVbXSxcclxuICAgICAgICBidWZmZXJNYW5hZ2VyOiBCdWZmZXJNYW5hZ2VyLFxyXG4gICAgICAgIGJ1ZmZlclZpZXdzOiBJQnVmZmVyVmlld1tdLFxyXG4gICAgICAgIGFjY2Vzc29yczogSUFjY2Vzc29yW10sXHJcbiAgICAgICAgYW5pbWF0aW9uU2FtcGxlUmF0ZTogbnVtYmVyLFxyXG4gICAgICAgIHVzZVJpZ2h0SGFuZGVkOiBib29sZWFuLFxyXG4gICAgICAgIHNob3VsZEV4cG9ydEFuaW1hdGlvbj86IChhbmltYXRpb246IEFuaW1hdGlvbikgPT4gYm9vbGVhblxyXG4gICAgKSB7XHJcbiAgICAgICAgbGV0IGdsVEZBbmltYXRpb246IElBbmltYXRpb247XHJcbiAgICAgICAgaWYgKGJhYnlsb25Ob2RlIGluc3RhbmNlb2YgTWVzaCkge1xyXG4gICAgICAgICAgICBjb25zdCBtb3JwaFRhcmdldE1hbmFnZXIgPSBiYWJ5bG9uTm9kZS5tb3JwaFRhcmdldE1hbmFnZXI7XHJcbiAgICAgICAgICAgIGlmIChtb3JwaFRhcmdldE1hbmFnZXIpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbW9ycGhUYXJnZXRNYW5hZ2VyLm51bVRhcmdldHM7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vcnBoVGFyZ2V0ID0gbW9ycGhUYXJnZXRNYW5hZ2VyLmdldFRhcmdldChpKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGFuaW1hdGlvbiBvZiBtb3JwaFRhcmdldC5hbmltYXRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaG91bGRFeHBvcnRBbmltYXRpb24gJiYgIXNob3VsZEV4cG9ydEFuaW1hdGlvbihhbmltYXRpb24pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21iaW5lZEFuaW1hdGlvbiA9IG5ldyBBbmltYXRpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHthbmltYXRpb24ubmFtZX1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpbmZsdWVuY2VcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi5mcmFtZVBlclNlY29uZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi5kYXRhVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi5sb29wTW9kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi5lbmFibGVCbGVuZGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21iaW5lZEFuaW1hdGlvbktleXM6IElBbmltYXRpb25LZXlbXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhbmltYXRpb25LZXlzID0gYW5pbWF0aW9uLmdldEtleXMoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYW5pbWF0aW9uS2V5cy5sZW5ndGg7ICsraikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYW5pbWF0aW9uS2V5ID0gYW5pbWF0aW9uS2V5c1tqXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgbW9ycGhUYXJnZXRNYW5hZ2VyLm51bVRhcmdldHM7ICsraykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrID09IGkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tYmluZWRBbmltYXRpb25LZXlzLnB1c2goYW5pbWF0aW9uS2V5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21iaW5lZEFuaW1hdGlvbktleXMucHVzaCh7IGZyYW1lOiBhbmltYXRpb25LZXkuZnJhbWUsIHZhbHVlOiAwIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21iaW5lZEFuaW1hdGlvbi5zZXRLZXlzKGNvbWJpbmVkQW5pbWF0aW9uS2V5cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFuaW1hdGlvbkluZm8gPSBfR0xURkFuaW1hdGlvbi5fRGVkdWNlQW5pbWF0aW9uSW5mbyhjb21iaW5lZEFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbmltYXRpb25JbmZvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbFRGQW5pbWF0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGNvbWJpbmVkQW5pbWF0aW9uLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FtcGxlcnM6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5uZWxzOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfR0xURkFuaW1hdGlvbi5fQWRkQW5pbWF0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi5oYXNSdW5uaW5nUnVudGltZUFuaW1hdGlvbnMgPyBydW50aW1lR0xURkFuaW1hdGlvbiA6IGdsVEZBbmltYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFieWxvbk5vZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tYmluZWRBbmltYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uSW5mby5kYXRhQWNjZXNzb3JUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkluZm8uYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZU1hcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZmZXJNYW5hZ2VyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlclZpZXdzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY2Vzc29ycyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25JbmZvLnVzZVF1YXRlcm5pb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uU2FtcGxlUmF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VSaWdodEhhbmRlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3JwaFRhcmdldE1hbmFnZXIubnVtVGFyZ2V0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnbFRGQW5pbWF0aW9uLnNhbXBsZXJzLmxlbmd0aCAmJiBnbFRGQW5pbWF0aW9uLmNoYW5uZWxzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkbGVHTFRGQW5pbWF0aW9ucy5wdXNoKGdsVEZBbmltYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKiBDcmVhdGUgbm9kZSBhbmQgbW9ycGggYW5pbWF0aW9ucyBmcm9tIHRoZSBhbmltYXRpb24gZ3JvdXBzXHJcbiAgICAgKiBAcGFyYW0gYmFieWxvblNjZW5lXHJcbiAgICAgKiBAcGFyYW0gZ2xURkFuaW1hdGlvbnNcclxuICAgICAqIEBwYXJhbSBub2RlTWFwXHJcbiAgICAgKiBAcGFyYW0gbm9kZXNcclxuICAgICAqIEBwYXJhbSBidWZmZXJNYW5hZ2VyXHJcbiAgICAgKiBAcGFyYW0gYnVmZmVyVmlld3NcclxuICAgICAqIEBwYXJhbSBhY2Nlc3NvcnNcclxuICAgICAqIEBwYXJhbSBhbmltYXRpb25TYW1wbGVSYXRlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgX0NyZWF0ZU5vZGVBbmRNb3JwaEFuaW1hdGlvbkZyb21BbmltYXRpb25Hcm91cHMoXHJcbiAgICAgICAgYmFieWxvblNjZW5lOiBTY2VuZSxcclxuICAgICAgICBnbFRGQW5pbWF0aW9uczogSUFuaW1hdGlvbltdLFxyXG4gICAgICAgIG5vZGVNYXA6IE1hcDxOb2RlLCBudW1iZXI+LFxyXG4gICAgICAgIGJ1ZmZlck1hbmFnZXI6IEJ1ZmZlck1hbmFnZXIsXHJcbiAgICAgICAgYnVmZmVyVmlld3M6IElCdWZmZXJWaWV3W10sXHJcbiAgICAgICAgYWNjZXNzb3JzOiBJQWNjZXNzb3JbXSxcclxuICAgICAgICBhbmltYXRpb25TYW1wbGVSYXRlOiBudW1iZXIsXHJcbiAgICAgICAgbGVmdEhhbmRlZE5vZGVzOiBTZXQ8Tm9kZT4sXHJcbiAgICAgICAgc2hvdWxkRXhwb3J0QW5pbWF0aW9uPzogKGFuaW1hdGlvbjogQW5pbWF0aW9uKSA9PiBib29sZWFuXHJcbiAgICApIHtcclxuICAgICAgICBsZXQgZ2xURkFuaW1hdGlvbjogSUFuaW1hdGlvbjtcclxuICAgICAgICBpZiAoYmFieWxvblNjZW5lLmFuaW1hdGlvbkdyb3Vwcykge1xyXG4gICAgICAgICAgICBjb25zdCBhbmltYXRpb25Hcm91cHMgPSBiYWJ5bG9uU2NlbmUuYW5pbWF0aW9uR3JvdXBzO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGFuaW1hdGlvbkdyb3VwIG9mIGFuaW1hdGlvbkdyb3Vwcykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbW9ycGhBbmltYXRpb25zOiBNYXA8TWVzaCwgTWFwPE1vcnBoVGFyZ2V0LCBBbmltYXRpb24+PiA9IG5ldyBNYXAoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNhbXBsZUFuaW1hdGlvbnM6IE1hcDxNZXNoLCBBbmltYXRpb24+ID0gbmV3IE1hcCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbW9ycGhBbmltYXRpb25NZXNoZXM6IFNldDxNZXNoPiA9IG5ldyBTZXQoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFuaW1hdGlvbkdyb3VwRnJhbWVEaWZmID0gYW5pbWF0aW9uR3JvdXAudG8gLSBhbmltYXRpb25Hcm91cC5mcm9tO1xyXG4gICAgICAgICAgICAgICAgZ2xURkFuaW1hdGlvbiA9IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBhbmltYXRpb25Hcm91cC5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGNoYW5uZWxzOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICBzYW1wbGVyczogW10sXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbmltYXRpb25Hcm91cC50YXJnZXRlZEFuaW1hdGlvbnMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRBbmltYXRpb24gPSBhbmltYXRpb25Hcm91cC50YXJnZXRlZEFuaW1hdGlvbnNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gdGFyZ2V0QW5pbWF0aW9uLnRhcmdldDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhbmltYXRpb24gPSB0YXJnZXRBbmltYXRpb24uYW5pbWF0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzaG91bGRFeHBvcnRBbmltYXRpb24gJiYgIXNob3VsZEV4cG9ydEFuaW1hdGlvbihhbmltYXRpb24pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udmVydFRvUmlnaHRIYW5kZWQgPSBsZWZ0SGFuZGVkTm9kZXMuaGFzKHRhcmdldCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9Jc1RyYW5zZm9ybWFibGUodGFyZ2V0KSB8fCAodGFyZ2V0Lmxlbmd0aCA9PT0gMSAmJiB0aGlzLl9Jc1RyYW5zZm9ybWFibGUodGFyZ2V0WzBdKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYW5pbWF0aW9uSW5mbyA9IF9HTFRGQW5pbWF0aW9uLl9EZWR1Y2VBbmltYXRpb25JbmZvKHRhcmdldEFuaW1hdGlvbi5hbmltYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYW5pbWF0aW9uSW5mbykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmFieWxvblRyYW5zZm9ybU5vZGUgPSB0aGlzLl9Jc1RyYW5zZm9ybWFibGUodGFyZ2V0KSA/IHRhcmdldCA6IHRoaXMuX0lzVHJhbnNmb3JtYWJsZSh0YXJnZXRbMF0pID8gdGFyZ2V0WzBdIDogbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiYWJ5bG9uVHJhbnNmb3JtTm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9HTFRGQW5pbWF0aW9uLl9BZGRBbmltYXRpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2FuaW1hdGlvbi5uYW1lfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsVEZBbmltYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhYnlsb25UcmFuc2Zvcm1Ob2RlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkluZm8uZGF0YUFjY2Vzc29yVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uSW5mby5hbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZU1hcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyTWFuYWdlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyVmlld3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY2Vzc29ycyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uSW5mby51c2VRdWF0ZXJuaW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25TYW1wbGVSYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb252ZXJ0VG9SaWdodEhhbmRlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldCBpbnN0YW5jZW9mIE1vcnBoVGFyZ2V0IHx8ICh0YXJnZXQubGVuZ3RoID09PSAxICYmIHRhcmdldFswXSBpbnN0YW5jZW9mIE1vcnBoVGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhbmltYXRpb25JbmZvID0gX0dMVEZBbmltYXRpb24uX0RlZHVjZUFuaW1hdGlvbkluZm8odGFyZ2V0QW5pbWF0aW9uLmFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbmltYXRpb25JbmZvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBiYWJ5bG9uTW9ycGhUYXJnZXQgPSB0YXJnZXQgaW5zdGFuY2VvZiBNb3JwaFRhcmdldCA/ICh0YXJnZXQgYXMgTW9ycGhUYXJnZXQpIDogKHRhcmdldFswXSBhcyBNb3JwaFRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmFieWxvbk1vcnBoVGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmFieWxvbk1vcnBoVGFyZ2V0TWFuYWdlciA9IGJhYnlsb25TY2VuZS5tb3JwaFRhcmdldE1hbmFnZXJzLmZpbmQoKG1vcnBoVGFyZ2V0TWFuYWdlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1vcnBoVGFyZ2V0TWFuYWdlci5udW1UYXJnZXRzOyArK2opIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb3JwaFRhcmdldE1hbmFnZXIuZ2V0VGFyZ2V0KGopID09PSBiYWJ5bG9uTW9ycGhUYXJnZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJhYnlsb25Nb3JwaFRhcmdldE1hbmFnZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmFieWxvbk1lc2ggPSBiYWJ5bG9uU2NlbmUubWVzaGVzLmZpbmQoKG1lc2gpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAobWVzaCBhcyBNZXNoKS5tb3JwaFRhcmdldE1hbmFnZXIgPT09IGJhYnlsb25Nb3JwaFRhcmdldE1hbmFnZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pIGFzIE1lc2g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiYWJ5bG9uTWVzaCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFtb3JwaEFuaW1hdGlvbnMuaGFzKGJhYnlsb25NZXNoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vcnBoQW5pbWF0aW9ucy5zZXQoYmFieWxvbk1lc2gsIG5ldyBNYXAoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3JwaEFuaW1hdGlvbnMuZ2V0KGJhYnlsb25NZXNoKT8uc2V0KGJhYnlsb25Nb3JwaFRhcmdldCwgYW5pbWF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vcnBoQW5pbWF0aW9uTWVzaGVzLmFkZChiYWJ5bG9uTWVzaCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYW1wbGVBbmltYXRpb25zLnNldChiYWJ5bG9uTWVzaCwgYW5pbWF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgaXMgdGhlIHBsYWNlIGZvciB0aGUgS0hSX2FuaW1hdGlvbl9wb2ludGVyLlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG1vcnBoQW5pbWF0aW9uTWVzaGVzLmZvckVhY2goKG1lc2gpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtb3JwaFRhcmdldE1hbmFnZXIgPSBtZXNoLm1vcnBoVGFyZ2V0TWFuYWdlciE7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbWJpbmVkQW5pbWF0aW9uR3JvdXA6IE51bGxhYmxlPEFuaW1hdGlvbj4gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFuaW1hdGlvbktleXM6IElBbmltYXRpb25LZXlbXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNhbXBsZUFuaW1hdGlvbiA9IHNhbXBsZUFuaW1hdGlvbnMuZ2V0KG1lc2gpITtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzYW1wbGVBbmltYXRpb25LZXlzID0gc2FtcGxlQW5pbWF0aW9uLmdldEtleXMoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBudW1BbmltYXRpb25LZXlzID0gc2FtcGxlQW5pbWF0aW9uS2V5cy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICAgICAgICAgICAgRHVlIHRvIGhvdyBnbFRGIGV4cGVjdHMgbW9ycGggdGFyZ2V0IGFuaW1hdGlvbiBkYXRhIHRvIGJlIGZvcm1hdHRlZCwgd2UgbmVlZCB0byByZWFycmFuZ2UgdGhlIGluZGl2aWR1YWwgbW9ycGggdGFyZ2V0IGFuaW1hdGlvbiB0cmFja3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2ggdGhhdCB3ZSBoYXZlIGEgc2luZ2xlIGFuaW1hdGlvbiwgd2hlcmUgYSBnaXZlbiBrZXlmcmFtZSBpbnB1dCB2YWx1ZSBoYXMgc3VjY2Vzc2l2ZSBvdXRwdXQgdmFsdWVzIGZvciBlYWNoIG1vcnBoIHRhcmdldCBiZWxvbmdpbmcgdG8gdGhlIG1hbmFnZXIuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL3NwZWNpZmljYXRpb24vMi4wI2FuaW1hdGlvbnNcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFdlIGRvIHRoaXMgdmlhIGNvbnN0cnVjdGluZyBhIG5ldyBBbmltYXRpb24gdHJhY2ssIGFuZCBpbnRlcmxlYXZpbmcgdGhlIGZyYW1lcyBvZiBlYWNoIG1vcnBoIHRhcmdldCBhbmltYXRpb24gdHJhY2sgaW4gdGhlIGN1cnJlbnQgQW5pbWF0aW9uIEdyb3VwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFdlIHJldXNlIHRoZSBCYWJ5bG9uIEFuaW1hdGlvbiBkYXRhIHN0cnVjdHVyZSBmb3IgZWFzZSBvZiBoYW5kbGluZyBleHBvcnQgb2YgY3ViaWMgc3BsaW5lIGFuaW1hdGlvbiBrZXlzLCBhbmQgdG8gcmV1c2UgdGhlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nIF9HTFRGQW5pbWF0aW9uLkFkZEFuaW1hdGlvbiBjb2RlcGF0aCB3aXRoIG1pbmltYWwgbW9kaWZpY2F0aW9uLCBob3dldmVyIHRoZSBjb25zdHJ1Y3RlZCBCYWJ5bG9uIEFuaW1hdGlvbiBpcyBOT1QgaW50ZW5kZWQgZm9yIHVzZSBpbi1lbmdpbmUuXHJcbiAgICAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUFuaW1hdGlvbktleXM7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1vcnBoVGFyZ2V0TWFuYWdlci5udW1UYXJnZXRzOyArK2opIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vcnBoVGFyZ2V0ID0gbW9ycGhUYXJnZXRNYW5hZ2VyLmdldFRhcmdldChqKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFuaW1hdGlvbnNCeU1vcnBoVGFyZ2V0ID0gbW9ycGhBbmltYXRpb25zLmdldChtZXNoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbmltYXRpb25zQnlNb3JwaFRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vcnBoVGFyZ2V0QW5pbWF0aW9uID0gYW5pbWF0aW9uc0J5TW9ycGhUYXJnZXQuZ2V0KG1vcnBoVGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9ycGhUYXJnZXRBbmltYXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjb21iaW5lZEFuaW1hdGlvbkdyb3VwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21iaW5lZEFuaW1hdGlvbkdyb3VwID0gbmV3IEFuaW1hdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHthbmltYXRpb25Hcm91cC5uYW1lfV8ke21lc2gubmFtZX1fTW9ycGhXZWlnaHRBbmltYXRpb25gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaW5mbHVlbmNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9ycGhUYXJnZXRBbmltYXRpb24uZnJhbWVQZXJTZWNvbmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQW5pbWF0aW9uLkFOSU1BVElPTlRZUEVfRkxPQVQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9ycGhUYXJnZXRBbmltYXRpb24ubG9vcE1vZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9ycGhUYXJnZXRBbmltYXRpb24uZW5hYmxlQmxlbmRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uS2V5cy5wdXNoKG1vcnBoVGFyZ2V0QW5pbWF0aW9uLmdldEtleXMoKVtpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uS2V5cy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lOiBhbmltYXRpb25Hcm91cC5mcm9tICsgKGFuaW1hdGlvbkdyb3VwRnJhbWVEaWZmIC8gbnVtQW5pbWF0aW9uS2V5cykgKiBpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG1vcnBoVGFyZ2V0LmluZmx1ZW5jZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluVGFuZ2VudDogc2FtcGxlQW5pbWF0aW9uS2V5c1swXS5pblRhbmdlbnQgPyAwIDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0VGFuZ2VudDogc2FtcGxlQW5pbWF0aW9uS2V5c1swXS5vdXRUYW5nZW50ID8gMCA6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbWJpbmVkQW5pbWF0aW9uR3JvdXAhLnNldEtleXMoYW5pbWF0aW9uS2V5cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYW5pbWF0aW9uSW5mbyA9IF9HTFRGQW5pbWF0aW9uLl9EZWR1Y2VBbmltYXRpb25JbmZvKGNvbWJpbmVkQW5pbWF0aW9uR3JvdXAhKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYW5pbWF0aW9uSW5mbykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfR0xURkFuaW1hdGlvbi5fQWRkQW5pbWF0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7YW5pbWF0aW9uR3JvdXAubmFtZX1fJHttZXNoLm5hbWV9X01vcnBoV2VpZ2h0QW5pbWF0aW9uYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsVEZBbmltYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tYmluZWRBbmltYXRpb25Hcm91cCEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25JbmZvLmRhdGFBY2Nlc3NvclR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25JbmZvLmFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZU1hcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlck1hbmFnZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZmZXJWaWV3cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY2Vzc29ycyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkluZm8udXNlUXVhdGVybmlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvblNhbXBsZVJhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vcnBoVGFyZ2V0TWFuYWdlcj8ubnVtVGFyZ2V0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGdsVEZBbmltYXRpb24uY2hhbm5lbHMubGVuZ3RoICYmIGdsVEZBbmltYXRpb24uc2FtcGxlcnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2xURkFuaW1hdGlvbnMucHVzaChnbFRGQW5pbWF0aW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfQWRkQW5pbWF0aW9uKFxyXG4gICAgICAgIG5hbWU6IHN0cmluZyxcclxuICAgICAgICBnbFRGQW5pbWF0aW9uOiBJQW5pbWF0aW9uLFxyXG4gICAgICAgIGJhYnlsb25UcmFuc2Zvcm1Ob2RlOiBOb2RlLFxyXG4gICAgICAgIGFuaW1hdGlvbjogQW5pbWF0aW9uLFxyXG4gICAgICAgIGRhdGFBY2Nlc3NvclR5cGU6IEFjY2Vzc29yVHlwZSxcclxuICAgICAgICBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aDogQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsXHJcbiAgICAgICAgbm9kZU1hcDogTWFwPE5vZGUsIG51bWJlcj4sXHJcbiAgICAgICAgYnVmZmVyTWFuYWdlcjogQnVmZmVyTWFuYWdlcixcclxuICAgICAgICBidWZmZXJWaWV3czogSUJ1ZmZlclZpZXdbXSxcclxuICAgICAgICBhY2Nlc3NvcnM6IElBY2Nlc3NvcltdLFxyXG4gICAgICAgIHVzZVF1YXRlcm5pb246IGJvb2xlYW4sXHJcbiAgICAgICAgYW5pbWF0aW9uU2FtcGxlUmF0ZTogbnVtYmVyLFxyXG4gICAgICAgIGNvbnZlcnRUb1JpZ2h0SGFuZGVkOiBib29sZWFuLFxyXG4gICAgICAgIG1vcnBoQW5pbWF0aW9uQ2hhbm5lbHM/OiBudW1iZXJcclxuICAgICkge1xyXG4gICAgICAgIGNvbnN0IGFuaW1hdGlvbkRhdGEgPSBfR0xURkFuaW1hdGlvbi5fQ3JlYXRlTm9kZUFuaW1hdGlvbihiYWJ5bG9uVHJhbnNmb3JtTm9kZSwgYW5pbWF0aW9uLCBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCwgdXNlUXVhdGVybmlvbiwgYW5pbWF0aW9uU2FtcGxlUmF0ZSk7XHJcbiAgICAgICAgbGV0IGJ1ZmZlclZpZXc6IElCdWZmZXJWaWV3O1xyXG4gICAgICAgIGxldCBhY2Nlc3NvcjogSUFjY2Vzc29yO1xyXG4gICAgICAgIGxldCBrZXlmcmFtZUFjY2Vzc29ySW5kZXg6IG51bWJlcjtcclxuICAgICAgICBsZXQgZGF0YUFjY2Vzc29ySW5kZXg6IG51bWJlcjtcclxuICAgICAgICBsZXQgYW5pbWF0aW9uU2FtcGxlcjogSUFuaW1hdGlvblNhbXBsZXI7XHJcbiAgICAgICAgbGV0IGFuaW1hdGlvbkNoYW5uZWw6IElBbmltYXRpb25DaGFubmVsO1xyXG5cclxuICAgICAgICBpZiAoYW5pbWF0aW9uRGF0YSkge1xyXG4gICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICAgKiBOb3cgdGhhdCB3ZSBoYXZlIHRoZSBnbFRGIGNvbnZlcnRlZCBtb3JwaCB0YXJnZXQgYW5pbWF0aW9uIGRhdGEsXHJcbiAgICAgICAgICAgICAqIHdlIGNhbiByZW1vdmUgcmVkdW5kYW50IGlucHV0IGRhdGEgc28gdGhhdCB3ZSBoYXZlIG4gaW5wdXQgZnJhbWVzLFxyXG4gICAgICAgICAgICAgKiBhbmQgbW9ycGhBbmltYXRpb25DaGFubmVscyAqIG4gb3V0cHV0IGZyYW1lc1xyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgaWYgKG1vcnBoQW5pbWF0aW9uQ2hhbm5lbHMpIHtcclxuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudElucHV0OiBudW1iZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3SW5wdXRzOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKGFuaW1hdGlvbkRhdGEuaW5wdXRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50SW5wdXQgPSBhbmltYXRpb25EYXRhLmlucHV0cy5zaGlmdCgpITtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggJSBtb3JwaEFuaW1hdGlvbkNoYW5uZWxzID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3SW5wdXRzLnB1c2goY3VycmVudElucHV0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXgrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbkRhdGEuaW5wdXRzID0gbmV3SW5wdXRzO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBub2RlSW5kZXggPSBub2RlTWFwLmdldChiYWJ5bG9uVHJhbnNmb3JtTm9kZSk7XHJcblxyXG4gICAgICAgICAgICAvLyBDcmVhdGUgYnVmZmVyIHZpZXcgYW5kIGFjY2Vzc29yIGZvciBrZXkgZnJhbWVzLlxyXG4gICAgICAgICAgICBjb25zdCBpbnB1dERhdGEgPSBuZXcgRmxvYXQzMkFycmF5KGFuaW1hdGlvbkRhdGEuaW5wdXRzKTtcclxuICAgICAgICAgICAgYnVmZmVyVmlldyA9IGJ1ZmZlck1hbmFnZXIuY3JlYXRlQnVmZmVyVmlldyhpbnB1dERhdGEpO1xyXG4gICAgICAgICAgICBhY2Nlc3NvciA9IGJ1ZmZlck1hbmFnZXIuY3JlYXRlQWNjZXNzb3IoYnVmZmVyVmlldywgQWNjZXNzb3JUeXBlLlNDQUxBUiwgQWNjZXNzb3JDb21wb25lbnRUeXBlLkZMT0FULCBhbmltYXRpb25EYXRhLmlucHV0cy5sZW5ndGgsIHVuZGVmaW5lZCwge1xyXG4gICAgICAgICAgICAgICAgbWluOiBbYW5pbWF0aW9uRGF0YS5pbnB1dHNNaW5dLFxyXG4gICAgICAgICAgICAgICAgbWF4OiBbYW5pbWF0aW9uRGF0YS5pbnB1dHNNYXhdLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgYWNjZXNzb3JzLnB1c2goYWNjZXNzb3IpO1xyXG4gICAgICAgICAgICBrZXlmcmFtZUFjY2Vzc29ySW5kZXggPSBhY2Nlc3NvcnMubGVuZ3RoIC0gMTtcclxuXHJcbiAgICAgICAgICAgIC8vIFBlcmZvcm0gY29udmVyc2lvbnMgb24ga2V5ZWQgdmFsdWVzIHdoaWxlIGFsc28gYnVpbGRpbmcgdGhlaXIgYnVmZmVyLlxyXG4gICAgICAgICAgICBjb25zdCByb3RhdGlvblF1YXRlcm5pb24gPSBuZXcgUXVhdGVybmlvbigpO1xyXG4gICAgICAgICAgICBjb25zdCBldWxlclZlYzMgPSBuZXcgVmVjdG9yMygpO1xyXG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IG5ldyBWZWN0b3IzKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzQ2FtZXJhID0gYmFieWxvblRyYW5zZm9ybU5vZGUgaW5zdGFuY2VvZiBDYW1lcmE7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50Q291bnQgPSBHZXRBY2Nlc3NvckVsZW1lbnRDb3VudChkYXRhQWNjZXNzb3JUeXBlKTtcclxuICAgICAgICAgICAgY29uc3Qgb3V0cHV0RGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkoYW5pbWF0aW9uRGF0YS5vdXRwdXRzLmxlbmd0aCAqIGVsZW1lbnRDb3VudCk7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbkRhdGEub3V0cHV0cy5mb3JFYWNoKGZ1bmN0aW9uIChvdXRwdXQ6IG51bWJlcltdLCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgb3V0cHV0VG9Xcml0ZTogbnVtYmVyW10gPSBvdXRwdXQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29udmVydFRvUmlnaHRIYW5kZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGguVFJBTlNMQVRJT046XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBWZWN0b3IzLkZyb21BcnJheVRvUmVmKG91dHB1dCwgMCwgcG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29udmVydFRvUmlnaHRIYW5kZWRQb3NpdGlvbihwb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbi50b0FycmF5KG91dHB1dFRvV3JpdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGguUk9UQVRJT046XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3V0cHV0Lmxlbmd0aCA9PT0gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFF1YXRlcm5pb24uRnJvbUFycmF5VG9SZWYob3V0cHV0LCAwLCByb3RhdGlvblF1YXRlcm5pb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRUb1dyaXRlID0gbmV3IEFycmF5KDQpOyAvLyBXaWxsIG5lZWQgNCwgbm90IDMsIGZvciBhIHF1YXRlcm5pb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWZWN0b3IzLkZyb21BcnJheVRvUmVmKG91dHB1dCwgMCwgZXVsZXJWZWMzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBRdWF0ZXJuaW9uLkZyb21FdWxlclZlY3RvclRvUmVmKGV1bGVyVmVjMywgcm90YXRpb25RdWF0ZXJuaW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNDYW1lcmEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb252ZXJ0Q2FtZXJhUm90YXRpb25Ub0dMVEYocm90YXRpb25RdWF0ZXJuaW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFRdWF0ZXJuaW9uLklzSWRlbnRpdHkocm90YXRpb25RdWF0ZXJuaW9uKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb252ZXJ0VG9SaWdodEhhbmRlZFJvdGF0aW9uKHJvdGF0aW9uUXVhdGVybmlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0aW9uUXVhdGVybmlvbi50b0FycmF5KG91dHB1dFRvV3JpdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGguUk9UQVRJT046XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3V0cHV0Lmxlbmd0aCA9PT0gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFF1YXRlcm5pb24uRnJvbUFycmF5VG9SZWYob3V0cHV0LCAwLCByb3RhdGlvblF1YXRlcm5pb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRUb1dyaXRlID0gbmV3IEFycmF5KDQpOyAvLyBXaWxsIG5lZWQgNCwgbm90IDMsIGZvciBhIHF1YXRlcm5pb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWZWN0b3IzLkZyb21BcnJheVRvUmVmKG91dHB1dCwgMCwgZXVsZXJWZWMzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBRdWF0ZXJuaW9uLkZyb21FdWxlclZlY3RvclRvUmVmKGV1bGVyVmVjMywgcm90YXRpb25RdWF0ZXJuaW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNDYW1lcmEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb252ZXJ0Q2FtZXJhUm90YXRpb25Ub0dMVEYocm90YXRpb25RdWF0ZXJuaW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3RhdGlvblF1YXRlcm5pb24udG9BcnJheShvdXRwdXRUb1dyaXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG91dHB1dERhdGEuc2V0KG91dHB1dFRvV3JpdGUsIGluZGV4ICogZWxlbWVudENvdW50KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBDcmVhdGUgYnVmZmVyIHZpZXcgYW5kIGFjY2Vzc29yIGZvciBrZXllZCB2YWx1ZXMuXHJcbiAgICAgICAgICAgIGJ1ZmZlclZpZXcgPSBidWZmZXJNYW5hZ2VyLmNyZWF0ZUJ1ZmZlclZpZXcob3V0cHV0RGF0YSk7XHJcbiAgICAgICAgICAgIGFjY2Vzc29yID0gYnVmZmVyTWFuYWdlci5jcmVhdGVBY2Nlc3NvcihidWZmZXJWaWV3LCBkYXRhQWNjZXNzb3JUeXBlLCBBY2Nlc3NvckNvbXBvbmVudFR5cGUuRkxPQVQsIGFuaW1hdGlvbkRhdGEub3V0cHV0cy5sZW5ndGgpO1xyXG4gICAgICAgICAgICBhY2Nlc3NvcnMucHVzaChhY2Nlc3Nvcik7XHJcbiAgICAgICAgICAgIGRhdGFBY2Nlc3NvckluZGV4ID0gYWNjZXNzb3JzLmxlbmd0aCAtIDE7XHJcblxyXG4gICAgICAgICAgICAvLyBjcmVhdGUgc2FtcGxlclxyXG4gICAgICAgICAgICBhbmltYXRpb25TYW1wbGVyID0ge1xyXG4gICAgICAgICAgICAgICAgaW50ZXJwb2xhdGlvbjogYW5pbWF0aW9uRGF0YS5zYW1wbGVySW50ZXJwb2xhdGlvbixcclxuICAgICAgICAgICAgICAgIGlucHV0OiBrZXlmcmFtZUFjY2Vzc29ySW5kZXgsXHJcbiAgICAgICAgICAgICAgICBvdXRwdXQ6IGRhdGFBY2Nlc3NvckluZGV4LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBnbFRGQW5pbWF0aW9uLnNhbXBsZXJzLnB1c2goYW5pbWF0aW9uU2FtcGxlcik7XHJcblxyXG4gICAgICAgICAgICAvLyBjcmVhdGUgY2hhbm5lbFxyXG4gICAgICAgICAgICBhbmltYXRpb25DaGFubmVsID0ge1xyXG4gICAgICAgICAgICAgICAgc2FtcGxlcjogZ2xURkFuaW1hdGlvbi5zYW1wbGVycy5sZW5ndGggLSAxLFxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZTogbm9kZUluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZ2xURkFuaW1hdGlvbi5jaGFubmVscy5wdXNoKGFuaW1hdGlvbkNoYW5uZWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIGJha2VkIGFuaW1hdGlvblxyXG4gICAgICogQHBhcmFtIGJhYnlsb25UcmFuc2Zvcm1Ob2RlIEJhYnlsb25KUyBtZXNoXHJcbiAgICAgKiBAcGFyYW0gYW5pbWF0aW9uIEJhYnlsb25KUyBhbmltYXRpb24gY29ycmVzcG9uZGluZyB0byB0aGUgQmFieWxvbkpTIG1lc2hcclxuICAgICAqIEBwYXJhbSBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCBhbmltYXRpb24gdGFyZ2V0IGNoYW5uZWxcclxuICAgICAqIEBwYXJhbSBtaW5GcmFtZSBtaW5pbXVtIGFuaW1hdGlvbiBmcmFtZVxyXG4gICAgICogQHBhcmFtIG1heEZyYW1lIG1heGltdW0gYW5pbWF0aW9uIGZyYW1lXHJcbiAgICAgKiBAcGFyYW0gZnBzIGZyYW1lcyBwZXIgc2Vjb25kIG9mIHRoZSBhbmltYXRpb25cclxuICAgICAqIEBwYXJhbSBzYW1wbGVSYXRlXHJcbiAgICAgKiBAcGFyYW0gaW5wdXRzIGlucHV0IGtleSBmcmFtZXMgb2YgdGhlIGFuaW1hdGlvblxyXG4gICAgICogQHBhcmFtIG91dHB1dHMgb3V0cHV0IGtleSBmcmFtZSBkYXRhIG9mIHRoZSBhbmltYXRpb25cclxuICAgICAqIEBwYXJhbSBtaW5NYXhGcmFtZXNcclxuICAgICAqIEBwYXJhbSBtaW5NYXhGcmFtZXMubWluXHJcbiAgICAgKiBAcGFyYW0gbWluTWF4RnJhbWVzLm1heFxyXG4gICAgICogQHBhcmFtIHVzZVF1YXRlcm5pb24gc3BlY2lmaWVzIGlmIHF1YXRlcm5pb25zIHNob3VsZCBiZSB1c2VkXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIF9DcmVhdGVCYWtlZEFuaW1hdGlvbihcclxuICAgICAgICBiYWJ5bG9uVHJhbnNmb3JtTm9kZTogTm9kZSxcclxuICAgICAgICBhbmltYXRpb246IEFuaW1hdGlvbixcclxuICAgICAgICBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aDogQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsXHJcbiAgICAgICAgbWluRnJhbWU6IG51bWJlcixcclxuICAgICAgICBtYXhGcmFtZTogbnVtYmVyLFxyXG4gICAgICAgIGZwczogbnVtYmVyLFxyXG4gICAgICAgIHNhbXBsZVJhdGU6IG51bWJlcixcclxuICAgICAgICBpbnB1dHM6IG51bWJlcltdLFxyXG4gICAgICAgIG91dHB1dHM6IG51bWJlcltdW10sXHJcbiAgICAgICAgbWluTWF4RnJhbWVzOiB7IG1pbjogbnVtYmVyOyBtYXg6IG51bWJlciB9LFxyXG4gICAgICAgIHVzZVF1YXRlcm5pb246IGJvb2xlYW5cclxuICAgICkge1xyXG4gICAgICAgIGxldCB2YWx1ZTogbnVtYmVyIHwgVmVjdG9yMyB8IFF1YXRlcm5pb247XHJcbiAgICAgICAgY29uc3QgcXVhdGVybmlvbkNhY2hlOiBRdWF0ZXJuaW9uID0gUXVhdGVybmlvbi5JZGVudGl0eSgpO1xyXG4gICAgICAgIGxldCBwcmV2aW91c1RpbWU6IE51bGxhYmxlPG51bWJlcj4gPSBudWxsO1xyXG4gICAgICAgIGxldCB0aW1lOiBudW1iZXI7XHJcbiAgICAgICAgbGV0IG1heFVzZWRGcmFtZTogTnVsbGFibGU8bnVtYmVyPiA9IG51bGw7XHJcbiAgICAgICAgbGV0IGN1cnJLZXlGcmFtZTogTnVsbGFibGU8SUFuaW1hdGlvbktleT4gPSBudWxsO1xyXG4gICAgICAgIGxldCBuZXh0S2V5RnJhbWU6IE51bGxhYmxlPElBbmltYXRpb25LZXk+ID0gbnVsbDtcclxuICAgICAgICBsZXQgcHJldktleUZyYW1lOiBOdWxsYWJsZTxJQW5pbWF0aW9uS2V5PiA9IG51bGw7XHJcbiAgICAgICAgbGV0IGVuZEZyYW1lOiBOdWxsYWJsZTxudW1iZXI+ID0gbnVsbDtcclxuICAgICAgICBtaW5NYXhGcmFtZXMubWluID0gVG9vbHMuRmxvYXRSb3VuZChtaW5GcmFtZSAvIGZwcyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGtleUZyYW1lcyA9IGFuaW1hdGlvbi5nZXRLZXlzKCk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW5ndGggPSBrZXlGcmFtZXMubGVuZ3RoOyBpIDwgbGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgZW5kRnJhbWUgPSBudWxsO1xyXG4gICAgICAgICAgICBjdXJyS2V5RnJhbWUgPSBrZXlGcmFtZXNbaV07XHJcblxyXG4gICAgICAgICAgICBpZiAoaSArIDEgPCBsZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIG5leHRLZXlGcmFtZSA9IGtleUZyYW1lc1tpICsgMV07XHJcbiAgICAgICAgICAgICAgICBpZiAoKGN1cnJLZXlGcmFtZS52YWx1ZS5lcXVhbHMgJiYgY3VycktleUZyYW1lLnZhbHVlLmVxdWFscyhuZXh0S2V5RnJhbWUudmFsdWUpKSB8fCBjdXJyS2V5RnJhbWUudmFsdWUgPT09IG5leHRLZXlGcmFtZS52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNldCB0aGUgZmlyc3QgZnJhbWUgdG8gaXRzZWxmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZEZyYW1lID0gY3VycktleUZyYW1lLmZyYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5kRnJhbWUgPSBuZXh0S2V5RnJhbWUuZnJhbWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBhdCB0aGUgbGFzdCBrZXkgZnJhbWVcclxuICAgICAgICAgICAgICAgIHByZXZLZXlGcmFtZSA9IGtleUZyYW1lc1tpIC0gMV07XHJcbiAgICAgICAgICAgICAgICBpZiAoKGN1cnJLZXlGcmFtZS52YWx1ZS5lcXVhbHMgJiYgY3VycktleUZyYW1lLnZhbHVlLmVxdWFscyhwcmV2S2V5RnJhbWUudmFsdWUpKSB8fCBjdXJyS2V5RnJhbWUudmFsdWUgPT09IHByZXZLZXlGcmFtZS52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBlbmRGcmFtZSA9IG1heEZyYW1lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChlbmRGcmFtZSkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgZiA9IGN1cnJLZXlGcmFtZS5mcmFtZTsgZiA8PSBlbmRGcmFtZTsgZiArPSBzYW1wbGVSYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZSA9IFRvb2xzLkZsb2F0Um91bmQoZiAvIGZwcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRpbWUgPT09IHByZXZpb3VzVGltZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNUaW1lID0gdGltZTtcclxuICAgICAgICAgICAgICAgICAgICBtYXhVc2VkRnJhbWUgPSB0aW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcGVhdENvdW50OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb29wTW9kZTogYW5pbWF0aW9uLmxvb3BNb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBhbmltYXRpb24uX2ludGVycG9sYXRlKGYsIHN0YXRlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgX0dMVEZBbmltYXRpb24uX1NldEludGVycG9sYXRlZFZhbHVlKGJhYnlsb25UcmFuc2Zvcm1Ob2RlLCB2YWx1ZSwgdGltZSwgYW5pbWF0aW9uLCBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCwgcXVhdGVybmlvbkNhY2hlLCBpbnB1dHMsIG91dHB1dHMsIHVzZVF1YXRlcm5pb24pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtYXhVc2VkRnJhbWUpIHtcclxuICAgICAgICAgICAgbWluTWF4RnJhbWVzLm1heCA9IG1heFVzZWRGcmFtZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX0NvbnZlcnRGYWN0b3JUb1ZlY3RvcjNPclF1YXRlcm5pb24oXHJcbiAgICAgICAgZmFjdG9yOiBudW1iZXIsXHJcbiAgICAgICAgYmFieWxvblRyYW5zZm9ybU5vZGU6IE5vZGUsXHJcbiAgICAgICAgYW5pbWF0aW9uOiBBbmltYXRpb24sXHJcbiAgICAgICAgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGg6IEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLFxyXG4gICAgICAgIHVzZVF1YXRlcm5pb246IGJvb2xlYW5cclxuICAgICk6IFZlY3RvcjMgfCBRdWF0ZXJuaW9uIHtcclxuICAgICAgICBjb25zdCBiYXNlUG9zaXRpb25Sb3RhdGlvbk9yU2NhbGUgPSBfR0xURkFuaW1hdGlvbi5fR2V0QmFzZVBvc2l0aW9uUm90YXRpb25PclNjYWxlKGJhYnlsb25UcmFuc2Zvcm1Ob2RlLCBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCwgdXNlUXVhdGVybmlvbik7XHJcbiAgICAgICAgLy8gaGFuZGxlcyBzaW5nbGUgY29tcG9uZW50IHgsIHksIHogb3IgdyBjb21wb25lbnQgYW5pbWF0aW9uIGJ5IHVzaW5nIGEgYmFzZSBwcm9wZXJ0eSBhbmQgYW5pbWF0aW5nIG92ZXIgYSBjb21wb25lbnQuXHJcbiAgICAgICAgY29uc3QgcHJvcGVydHkgPSBhbmltYXRpb24udGFyZ2V0UHJvcGVydHkuc3BsaXQoXCIuXCIpO1xyXG4gICAgICAgIGNvbnN0IGNvbXBvbmVudE5hbWUgPSBwcm9wZXJ0eSA/IHByb3BlcnR5WzFdIDogXCJcIjsgLy8geCwgeSwgeiwgb3IgdyBjb21wb25lbnRcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHVzZVF1YXRlcm5pb24gPyBRdWF0ZXJuaW9uLkZyb21BcnJheShiYXNlUG9zaXRpb25Sb3RhdGlvbk9yU2NhbGUpLm5vcm1hbGl6ZSgpIDogVmVjdG9yMy5Gcm9tQXJyYXkoYmFzZVBvc2l0aW9uUm90YXRpb25PclNjYWxlKTtcclxuXHJcbiAgICAgICAgc3dpdGNoIChjb21wb25lbnROYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ4XCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJ5XCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJ6XCI6IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlW2NvbXBvbmVudE5hbWVdID0gZmFjdG9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcIndcIjoge1xyXG4gICAgICAgICAgICAgICAgKHZhbHVlIGFzIFF1YXRlcm5pb24pLncgPSBmYWN0b3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgICAgICBUb29scy5FcnJvcihgZ2xURkFuaW1hdGlvbjogVW5zdXBwb3J0ZWQgY29tcG9uZW50IG5hbWUgXCIke2NvbXBvbmVudE5hbWV9XCIhYCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfU2V0SW50ZXJwb2xhdGVkVmFsdWUoXHJcbiAgICAgICAgYmFieWxvblRyYW5zZm9ybU5vZGU6IE5vZGUsXHJcbiAgICAgICAgdmFsdWU6IG51bWJlciB8IFZlY3RvcjMgfCBRdWF0ZXJuaW9uLFxyXG4gICAgICAgIHRpbWU6IG51bWJlcixcclxuICAgICAgICBhbmltYXRpb246IEFuaW1hdGlvbixcclxuICAgICAgICBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aDogQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsXHJcbiAgICAgICAgcXVhdGVybmlvbkNhY2hlOiBRdWF0ZXJuaW9uLFxyXG4gICAgICAgIGlucHV0czogbnVtYmVyW10sXHJcbiAgICAgICAgb3V0cHV0czogbnVtYmVyW11bXSxcclxuICAgICAgICB1c2VRdWF0ZXJuaW9uOiBib29sZWFuXHJcbiAgICApIHtcclxuICAgICAgICBsZXQgY2FjaGVWYWx1ZTogVmVjdG9yMyB8IFF1YXRlcm5pb24gfCBudW1iZXI7XHJcbiAgICAgICAgaW5wdXRzLnB1c2godGltZSk7XHJcblxyXG4gICAgICAgIGlmIChhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCA9PT0gQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGguV0VJR0hUUykge1xyXG4gICAgICAgICAgICBvdXRwdXRzLnB1c2goW3ZhbHVlIGFzIG51bWJlcl0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYW5pbWF0aW9uLmRhdGFUeXBlID09PSBBbmltYXRpb24uQU5JTUFUSU9OVFlQRV9GTE9BVCkge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuX0NvbnZlcnRGYWN0b3JUb1ZlY3RvcjNPclF1YXRlcm5pb24odmFsdWUgYXMgbnVtYmVyLCBiYWJ5bG9uVHJhbnNmb3JtTm9kZSwgYW5pbWF0aW9uLCBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCwgdXNlUXVhdGVybmlvbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGggPT09IEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLlJPVEFUSU9OKSB7XHJcbiAgICAgICAgICAgIGlmICh1c2VRdWF0ZXJuaW9uKSB7XHJcbiAgICAgICAgICAgICAgICBxdWF0ZXJuaW9uQ2FjaGUgPSB2YWx1ZSBhcyBRdWF0ZXJuaW9uO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2FjaGVWYWx1ZSA9IHZhbHVlIGFzIFZlY3RvcjM7XHJcbiAgICAgICAgICAgICAgICBRdWF0ZXJuaW9uLlJvdGF0aW9uWWF3UGl0Y2hSb2xsVG9SZWYoY2FjaGVWYWx1ZS55LCBjYWNoZVZhbHVlLngsIGNhY2hlVmFsdWUueiwgcXVhdGVybmlvbkNhY2hlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvdXRwdXRzLnB1c2gocXVhdGVybmlvbkNhY2hlLmFzQXJyYXkoKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gc2NhbGluZyBhbmQgcG9zaXRpb24gYW5pbWF0aW9uXHJcbiAgICAgICAgICAgIGNhY2hlVmFsdWUgPSB2YWx1ZSBhcyBWZWN0b3IzO1xyXG4gICAgICAgICAgICBvdXRwdXRzLnB1c2goY2FjaGVWYWx1ZS5hc0FycmF5KCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgbGluZWFyIGFuaW1hdGlvbiBmcm9tIHRoZSBhbmltYXRpb24ga2V5IGZyYW1lc1xyXG4gICAgICogQHBhcmFtIGJhYnlsb25UcmFuc2Zvcm1Ob2RlIEJhYnlsb25KUyBtZXNoXHJcbiAgICAgKiBAcGFyYW0gYW5pbWF0aW9uIEJhYnlsb25KUyBhbmltYXRpb25cclxuICAgICAqIEBwYXJhbSBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCBUaGUgdGFyZ2V0IGFuaW1hdGlvbiBjaGFubmVsXHJcbiAgICAgKiBAcGFyYW0gaW5wdXRzIEFycmF5IHRvIHN0b3JlIHRoZSBrZXkgZnJhbWUgdGltZXNcclxuICAgICAqIEBwYXJhbSBvdXRwdXRzIEFycmF5IHRvIHN0b3JlIHRoZSBrZXkgZnJhbWUgZGF0YVxyXG4gICAgICogQHBhcmFtIHVzZVF1YXRlcm5pb24gU3BlY2lmaWVzIGlmIHF1YXRlcm5pb25zIGFyZSB1c2VkIGluIHRoZSBhbmltYXRpb25cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX0NyZWF0ZUxpbmVhck9yU3RlcEFuaW1hdGlvbihcclxuICAgICAgICBiYWJ5bG9uVHJhbnNmb3JtTm9kZTogTm9kZSxcclxuICAgICAgICBhbmltYXRpb246IEFuaW1hdGlvbixcclxuICAgICAgICBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aDogQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsXHJcbiAgICAgICAgaW5wdXRzOiBudW1iZXJbXSxcclxuICAgICAgICBvdXRwdXRzOiBudW1iZXJbXVtdLFxyXG4gICAgICAgIHVzZVF1YXRlcm5pb246IGJvb2xlYW5cclxuICAgICkge1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5RnJhbWUgb2YgYW5pbWF0aW9uLmdldEtleXMoKSkge1xyXG4gICAgICAgICAgICBpbnB1dHMucHVzaChrZXlGcmFtZS5mcmFtZSAvIGFuaW1hdGlvbi5mcmFtZVBlclNlY29uZCk7IC8vIGtleWZyYW1lcyBpbiBzZWNvbmRzLlxyXG4gICAgICAgICAgICBfR0xURkFuaW1hdGlvbi5fQWRkS2V5ZnJhbWVWYWx1ZShrZXlGcmFtZSwgYW5pbWF0aW9uLCBvdXRwdXRzLCBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCwgYmFieWxvblRyYW5zZm9ybU5vZGUsIHVzZVF1YXRlcm5pb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgY3ViaWMgc3BsaW5lIGFuaW1hdGlvbiBmcm9tIHRoZSBhbmltYXRpb24ga2V5IGZyYW1lc1xyXG4gICAgICogQHBhcmFtIGJhYnlsb25UcmFuc2Zvcm1Ob2RlIEJhYnlsb25KUyBtZXNoXHJcbiAgICAgKiBAcGFyYW0gYW5pbWF0aW9uIEJhYnlsb25KUyBhbmltYXRpb25cclxuICAgICAqIEBwYXJhbSBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCBUaGUgdGFyZ2V0IGFuaW1hdGlvbiBjaGFubmVsXHJcbiAgICAgKiBAcGFyYW0gaW5wdXRzIEFycmF5IHRvIHN0b3JlIHRoZSBrZXkgZnJhbWUgdGltZXNcclxuICAgICAqIEBwYXJhbSBvdXRwdXRzIEFycmF5IHRvIHN0b3JlIHRoZSBrZXkgZnJhbWUgZGF0YVxyXG4gICAgICogQHBhcmFtIHVzZVF1YXRlcm5pb24gU3BlY2lmaWVzIGlmIHF1YXRlcm5pb25zIGFyZSB1c2VkIGluIHRoZSBhbmltYXRpb25cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX0NyZWF0ZUN1YmljU3BsaW5lQW5pbWF0aW9uKFxyXG4gICAgICAgIGJhYnlsb25UcmFuc2Zvcm1Ob2RlOiBOb2RlLFxyXG4gICAgICAgIGFuaW1hdGlvbjogQW5pbWF0aW9uLFxyXG4gICAgICAgIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoOiBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCxcclxuICAgICAgICBpbnB1dHM6IG51bWJlcltdLFxyXG4gICAgICAgIG91dHB1dHM6IG51bWJlcltdW10sXHJcbiAgICAgICAgdXNlUXVhdGVybmlvbjogYm9vbGVhblxyXG4gICAgKSB7XHJcbiAgICAgICAgYW5pbWF0aW9uLmdldEtleXMoKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXlGcmFtZSkge1xyXG4gICAgICAgICAgICBpbnB1dHMucHVzaChrZXlGcmFtZS5mcmFtZSAvIGFuaW1hdGlvbi5mcmFtZVBlclNlY29uZCk7IC8vIGtleWZyYW1lcyBpbiBzZWNvbmRzLlxyXG4gICAgICAgICAgICBfR0xURkFuaW1hdGlvbi5fQWRkU3BsaW5lVGFuZ2VudChfVGFuZ2VudFR5cGUuSU5UQU5HRU5ULCBvdXRwdXRzLCBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCwgQW5pbWF0aW9uU2FtcGxlckludGVycG9sYXRpb24uQ1VCSUNTUExJTkUsIGtleUZyYW1lLCB1c2VRdWF0ZXJuaW9uKTtcclxuICAgICAgICAgICAgX0dMVEZBbmltYXRpb24uX0FkZEtleWZyYW1lVmFsdWUoa2V5RnJhbWUsIGFuaW1hdGlvbiwgb3V0cHV0cywgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsIGJhYnlsb25UcmFuc2Zvcm1Ob2RlLCB1c2VRdWF0ZXJuaW9uKTtcclxuXHJcbiAgICAgICAgICAgIF9HTFRGQW5pbWF0aW9uLl9BZGRTcGxpbmVUYW5nZW50KF9UYW5nZW50VHlwZS5PVVRUQU5HRU5ULCBvdXRwdXRzLCBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCwgQW5pbWF0aW9uU2FtcGxlckludGVycG9sYXRpb24uQ1VCSUNTUExJTkUsIGtleUZyYW1lLCB1c2VRdWF0ZXJuaW9uKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfR2V0QmFzZVBvc2l0aW9uUm90YXRpb25PclNjYWxlKGJhYnlsb25UcmFuc2Zvcm1Ob2RlOiBOb2RlLCBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aDogQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsIHVzZVF1YXRlcm5pb246IGJvb2xlYW4pIHtcclxuICAgICAgICBsZXQgYmFzZVBvc2l0aW9uUm90YXRpb25PclNjYWxlOiBudW1iZXJbXTtcclxuICAgICAgICBpZiAoYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGggPT09IEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLlJPVEFUSU9OKSB7XHJcbiAgICAgICAgICAgIGlmICh1c2VRdWF0ZXJuaW9uKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBxID0gKGJhYnlsb25UcmFuc2Zvcm1Ob2RlIGFzIFRyYW5zZm9ybU5vZGUpLnJvdGF0aW9uUXVhdGVybmlvbjtcclxuICAgICAgICAgICAgICAgIGJhc2VQb3NpdGlvblJvdGF0aW9uT3JTY2FsZSA9IChxID8/IFF1YXRlcm5pb24uSWRlbnRpdHkoKSkuYXNBcnJheSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcjogVmVjdG9yMyA9IChiYWJ5bG9uVHJhbnNmb3JtTm9kZSBhcyBUcmFuc2Zvcm1Ob2RlKS5yb3RhdGlvbjtcclxuICAgICAgICAgICAgICAgIGJhc2VQb3NpdGlvblJvdGF0aW9uT3JTY2FsZSA9IChyID8/IFZlY3RvcjMuWmVybygpKS5hc0FycmF5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoID09PSBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aC5UUkFOU0xBVElPTikge1xyXG4gICAgICAgICAgICBjb25zdCBwOiBWZWN0b3IzID0gKGJhYnlsb25UcmFuc2Zvcm1Ob2RlIGFzIFRyYW5zZm9ybU5vZGUpLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICBiYXNlUG9zaXRpb25Sb3RhdGlvbk9yU2NhbGUgPSAocCA/PyBWZWN0b3IzLlplcm8oKSkuYXNBcnJheSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIHNjYWxlXHJcbiAgICAgICAgICAgIGNvbnN0IHM6IFZlY3RvcjMgPSAoYmFieWxvblRyYW5zZm9ybU5vZGUgYXMgVHJhbnNmb3JtTm9kZSkuc2NhbGluZztcclxuICAgICAgICAgICAgYmFzZVBvc2l0aW9uUm90YXRpb25PclNjYWxlID0gKHMgPz8gVmVjdG9yMy5PbmUoKSkuYXNBcnJheSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYmFzZVBvc2l0aW9uUm90YXRpb25PclNjYWxlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkcyBhIGtleSBmcmFtZSB2YWx1ZVxyXG4gICAgICogQHBhcmFtIGtleUZyYW1lXHJcbiAgICAgKiBAcGFyYW0gYW5pbWF0aW9uXHJcbiAgICAgKiBAcGFyYW0gb3V0cHV0c1xyXG4gICAgICogQHBhcmFtIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoXHJcbiAgICAgKiBAcGFyYW0gYmFieWxvblRyYW5zZm9ybU5vZGVcclxuICAgICAqIEBwYXJhbSB1c2VRdWF0ZXJuaW9uXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIF9BZGRLZXlmcmFtZVZhbHVlKFxyXG4gICAgICAgIGtleUZyYW1lOiBJQW5pbWF0aW9uS2V5LFxyXG4gICAgICAgIGFuaW1hdGlvbjogQW5pbWF0aW9uLFxyXG4gICAgICAgIG91dHB1dHM6IG51bWJlcltdW10sXHJcbiAgICAgICAgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGg6IEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLFxyXG4gICAgICAgIGJhYnlsb25UcmFuc2Zvcm1Ob2RlOiBOb2RlLFxyXG4gICAgICAgIHVzZVF1YXRlcm5pb246IGJvb2xlYW5cclxuICAgICkge1xyXG4gICAgICAgIGxldCBuZXdQb3NpdGlvblJvdGF0aW9uT3JTY2FsZTogTnVsbGFibGU8VmVjdG9yMyB8IFF1YXRlcm5pb24gfCBudW1iZXI+O1xyXG4gICAgICAgIGNvbnN0IGFuaW1hdGlvblR5cGUgPSBhbmltYXRpb24uZGF0YVR5cGU7XHJcbiAgICAgICAgaWYgKGFuaW1hdGlvblR5cGUgPT09IEFuaW1hdGlvbi5BTklNQVRJT05UWVBFX1ZFQ1RPUjMpIHtcclxuICAgICAgICAgICAgbGV0IHZhbHVlID0ga2V5RnJhbWUudmFsdWUuYXNBcnJheSgpO1xyXG4gICAgICAgICAgICBpZiAoYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGggPT09IEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLlJPVEFUSU9OKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhcnJheSA9IFZlY3RvcjMuRnJvbUFycmF5KHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJvdGF0aW9uUXVhdGVybmlvbiA9IFF1YXRlcm5pb24uUm90YXRpb25ZYXdQaXRjaFJvbGwoYXJyYXkueSwgYXJyYXkueCwgYXJyYXkueik7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHJvdGF0aW9uUXVhdGVybmlvbi5hc0FycmF5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3V0cHV0cy5wdXNoKHZhbHVlKTsgLy8gc2NhbGUgIHZlY3Rvci5cclxuICAgICAgICB9IGVsc2UgaWYgKGFuaW1hdGlvblR5cGUgPT09IEFuaW1hdGlvbi5BTklNQVRJT05UWVBFX0ZMT0FUKSB7XHJcbiAgICAgICAgICAgIGlmIChhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCA9PT0gQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGguV0VJR0hUUykge1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0cy5wdXNoKFtrZXlGcmFtZS52YWx1ZV0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlcyBzaW5nbGUgY29tcG9uZW50IHgsIHksIHogb3IgdyBjb21wb25lbnQgYW5pbWF0aW9uIGJ5IHVzaW5nIGEgYmFzZSBwcm9wZXJ0eSBhbmQgYW5pbWF0aW5nIG92ZXIgYSBjb21wb25lbnQuXHJcbiAgICAgICAgICAgICAgICBuZXdQb3NpdGlvblJvdGF0aW9uT3JTY2FsZSA9IHRoaXMuX0NvbnZlcnRGYWN0b3JUb1ZlY3RvcjNPclF1YXRlcm5pb24oXHJcbiAgICAgICAgICAgICAgICAgICAga2V5RnJhbWUudmFsdWUgYXMgbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhYnlsb25UcmFuc2Zvcm1Ob2RlLFxyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCxcclxuICAgICAgICAgICAgICAgICAgICB1c2VRdWF0ZXJuaW9uXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgaWYgKG5ld1Bvc2l0aW9uUm90YXRpb25PclNjYWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoID09PSBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aC5ST1RBVElPTikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3NSb3RTY2FsZSA9IHVzZVF1YXRlcm5pb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gKG5ld1Bvc2l0aW9uUm90YXRpb25PclNjYWxlIGFzIFF1YXRlcm5pb24pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFF1YXRlcm5pb24uUm90YXRpb25ZYXdQaXRjaFJvbGwobmV3UG9zaXRpb25Sb3RhdGlvbk9yU2NhbGUueSwgbmV3UG9zaXRpb25Sb3RhdGlvbk9yU2NhbGUueCwgbmV3UG9zaXRpb25Sb3RhdGlvbk9yU2NhbGUueikubm9ybWFsaXplKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dHMucHVzaChwb3NSb3RTY2FsZS5hc0FycmF5KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBvdXRwdXRzLnB1c2gobmV3UG9zaXRpb25Sb3RhdGlvbk9yU2NhbGUuYXNBcnJheSgpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoYW5pbWF0aW9uVHlwZSA9PT0gQW5pbWF0aW9uLkFOSU1BVElPTlRZUEVfUVVBVEVSTklPTikge1xyXG4gICAgICAgICAgICBvdXRwdXRzLnB1c2goKGtleUZyYW1lLnZhbHVlIGFzIFF1YXRlcm5pb24pLm5vcm1hbGl6ZSgpLmFzQXJyYXkoKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgVG9vbHMuRXJyb3IoXCJnbFRGQW5pbWF0aW9uOiBVbnN1cHBvcnRlZCBrZXkgZnJhbWUgdmFsdWVzIGZvciBhbmltYXRpb24hXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICogRGV0ZXJtaW5lIHRoZSBpbnRlcnBvbGF0aW9uIGJhc2VkIG9uIHRoZSBrZXkgZnJhbWVzXHJcbiAgICAgKiBAcGFyYW0ga2V5RnJhbWVzXHJcbiAgICAgKiBAcGFyYW0gYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGhcclxuICAgICAqIEBwYXJhbSB1c2VRdWF0ZXJuaW9uXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIF9EZWR1Y2VJbnRlcnBvbGF0aW9uKFxyXG4gICAgICAgIGtleUZyYW1lczogSUFuaW1hdGlvbktleVtdLFxyXG4gICAgICAgIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoOiBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCxcclxuICAgICAgICB1c2VRdWF0ZXJuaW9uOiBib29sZWFuXHJcbiAgICApOiB7IGludGVycG9sYXRpb25UeXBlOiBBbmltYXRpb25TYW1wbGVySW50ZXJwb2xhdGlvbjsgc2hvdWxkQmFrZUFuaW1hdGlvbjogYm9vbGVhbiB9IHtcclxuICAgICAgICBsZXQgaW50ZXJwb2xhdGlvblR5cGU6IEFuaW1hdGlvblNhbXBsZXJJbnRlcnBvbGF0aW9uIHwgdW5kZWZpbmVkO1xyXG4gICAgICAgIGxldCBzaG91bGRCYWtlQW5pbWF0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGtleTogSUFuaW1hdGlvbktleTtcclxuXHJcbiAgICAgICAgaWYgKGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoID09PSBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aC5ST1RBVElPTiAmJiAhdXNlUXVhdGVybmlvbikge1xyXG4gICAgICAgICAgICByZXR1cm4geyBpbnRlcnBvbGF0aW9uVHlwZTogQW5pbWF0aW9uU2FtcGxlckludGVycG9sYXRpb24uTElORUFSLCBzaG91bGRCYWtlQW5pbWF0aW9uOiB0cnVlIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuZ3RoID0ga2V5RnJhbWVzLmxlbmd0aDsgaSA8IGxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIGtleSA9IGtleUZyYW1lc1tpXTtcclxuICAgICAgICAgICAgaWYgKGtleS5pblRhbmdlbnQgfHwga2V5Lm91dFRhbmdlbnQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpbnRlcnBvbGF0aW9uVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbnRlcnBvbGF0aW9uVHlwZSAhPT0gQW5pbWF0aW9uU2FtcGxlckludGVycG9sYXRpb24uQ1VCSUNTUExJTkUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwb2xhdGlvblR5cGUgPSBBbmltYXRpb25TYW1wbGVySW50ZXJwb2xhdGlvbi5MSU5FQVI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3VsZEJha2VBbmltYXRpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGludGVycG9sYXRpb25UeXBlID0gQW5pbWF0aW9uU2FtcGxlckludGVycG9sYXRpb24uQ1VCSUNTUExJTkU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW50ZXJwb2xhdGlvblR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGludGVycG9sYXRpb25UeXBlID09PSBBbmltYXRpb25TYW1wbGVySW50ZXJwb2xhdGlvbi5DVUJJQ1NQTElORSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoa2V5LmludGVycG9sYXRpb24gJiYga2V5LmludGVycG9sYXRpb24gPT09IEFuaW1hdGlvbktleUludGVycG9sYXRpb24uU1RFUCAmJiBpbnRlcnBvbGF0aW9uVHlwZSAhPT0gQW5pbWF0aW9uU2FtcGxlckludGVycG9sYXRpb24uU1RFUClcclxuICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwb2xhdGlvblR5cGUgPSBBbmltYXRpb25TYW1wbGVySW50ZXJwb2xhdGlvbi5MSU5FQVI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3VsZEJha2VBbmltYXRpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXkuaW50ZXJwb2xhdGlvbiAmJiBrZXkuaW50ZXJwb2xhdGlvbiA9PT0gQW5pbWF0aW9uS2V5SW50ZXJwb2xhdGlvbi5TVEVQKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGludGVycG9sYXRpb25UeXBlID0gQW5pbWF0aW9uU2FtcGxlckludGVycG9sYXRpb24uU1RFUDtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnBvbGF0aW9uVHlwZSA9IEFuaW1hdGlvblNhbXBsZXJJbnRlcnBvbGF0aW9uLkxJTkVBUjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFpbnRlcnBvbGF0aW9uVHlwZSkge1xyXG4gICAgICAgICAgICBpbnRlcnBvbGF0aW9uVHlwZSA9IEFuaW1hdGlvblNhbXBsZXJJbnRlcnBvbGF0aW9uLkxJTkVBUjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7IGludGVycG9sYXRpb25UeXBlOiBpbnRlcnBvbGF0aW9uVHlwZSwgc2hvdWxkQmFrZUFuaW1hdGlvbjogc2hvdWxkQmFrZUFuaW1hdGlvbiB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkcyBhbiBpbnB1dCB0YW5nZW50IG9yIG91dHB1dCB0YW5nZW50IHRvIHRoZSBvdXRwdXQgZGF0YVxyXG4gICAgICogSWYgYW4gaW5wdXQgdGFuZ2VudCBvciBvdXRwdXQgdGFuZ2VudCBpcyBtaXNzaW5nLCBpdCB1c2VzIHRoZSB6ZXJvIHZlY3RvciBvciB6ZXJvIHF1YXRlcm5pb25cclxuICAgICAqIEBwYXJhbSB0YW5nZW50VHlwZSBTcGVjaWZpZXMgd2hpY2ggdHlwZSBvZiB0YW5nZW50IHRvIGhhbmRsZSAoaW5UYW5nZW50IG9yIG91dFRhbmdlbnQpXHJcbiAgICAgKiBAcGFyYW0gb3V0cHV0cyBUaGUgYW5pbWF0aW9uIGRhdGEgYnkga2V5ZnJhbWVcclxuICAgICAqIEBwYXJhbSBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCBUaGUgdGFyZ2V0IGFuaW1hdGlvbiBjaGFubmVsXHJcbiAgICAgKiBAcGFyYW0gaW50ZXJwb2xhdGlvbiBUaGUgaW50ZXJwb2xhdGlvbiB0eXBlXHJcbiAgICAgKiBAcGFyYW0ga2V5RnJhbWUgVGhlIGtleSBmcmFtZSB3aXRoIHRoZSBhbmltYXRpb24gZGF0YVxyXG4gICAgICogQHBhcmFtIHVzZVF1YXRlcm5pb24gU3BlY2lmaWVzIGlmIHF1YXRlcm5pb25zIGFyZSB1c2VkXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIF9BZGRTcGxpbmVUYW5nZW50KFxyXG4gICAgICAgIHRhbmdlbnRUeXBlOiBfVGFuZ2VudFR5cGUsXHJcbiAgICAgICAgb3V0cHV0czogbnVtYmVyW11bXSxcclxuICAgICAgICBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aDogQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsXHJcbiAgICAgICAgaW50ZXJwb2xhdGlvbjogQW5pbWF0aW9uU2FtcGxlckludGVycG9sYXRpb24sXHJcbiAgICAgICAga2V5RnJhbWU6IElBbmltYXRpb25LZXksXHJcbiAgICAgICAgdXNlUXVhdGVybmlvbjogYm9vbGVhblxyXG4gICAgKSB7XHJcbiAgICAgICAgbGV0IHRhbmdlbnQ6IG51bWJlcltdO1xyXG4gICAgICAgIGNvbnN0IHRhbmdlbnRWYWx1ZTogVmVjdG9yMyB8IFF1YXRlcm5pb24gfCBudW1iZXIgPSB0YW5nZW50VHlwZSA9PT0gX1RhbmdlbnRUeXBlLklOVEFOR0VOVCA/IGtleUZyYW1lLmluVGFuZ2VudCA6IGtleUZyYW1lLm91dFRhbmdlbnQ7XHJcbiAgICAgICAgaWYgKGludGVycG9sYXRpb24gPT09IEFuaW1hdGlvblNhbXBsZXJJbnRlcnBvbGF0aW9uLkNVQklDU1BMSU5FKSB7XHJcbiAgICAgICAgICAgIGlmIChhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCA9PT0gQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGguUk9UQVRJT04pIHtcclxuICAgICAgICAgICAgICAgIGlmICh0YW5nZW50VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodXNlUXVhdGVybmlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YW5nZW50ID0gKHRhbmdlbnRWYWx1ZSBhcyBRdWF0ZXJuaW9uKS5hc0FycmF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXJyYXkgPSB0YW5nZW50VmFsdWUgYXMgVmVjdG9yMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFuZ2VudCA9IFF1YXRlcm5pb24uUm90YXRpb25ZYXdQaXRjaFJvbGwoYXJyYXkueSwgYXJyYXkueCwgYXJyYXkueikuYXNBcnJheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFuZ2VudCA9IFswLCAwLCAwLCAwXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCA9PT0gQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGguV0VJR0hUUykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRhbmdlbnRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhbmdlbnQgPSBbdGFuZ2VudFZhbHVlIGFzIG51bWJlcl07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhbmdlbnQgPSBbMF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGFuZ2VudFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFuZ2VudCA9ICh0YW5nZW50VmFsdWUgYXMgVmVjdG9yMykuYXNBcnJheSgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0YW5nZW50ID0gWzAsIDAsIDBdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBvdXRwdXRzLnB1c2godGFuZ2VudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBtaW5pbXVtIGFuZCBtYXhpbXVtIGtleSBmcmFtZXMnIGZyYW1lIHZhbHVlc1xyXG4gICAgICogQHBhcmFtIGtleUZyYW1lcyBhbmltYXRpb24ga2V5IGZyYW1lc1xyXG4gICAgICogQHJldHVybnMgdGhlIG1pbmltdW0gYW5kIG1heGltdW0ga2V5IGZyYW1lIHZhbHVlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIF9DYWxjdWxhdGVNaW5NYXhLZXlGcmFtZXMoa2V5RnJhbWVzOiBJQW5pbWF0aW9uS2V5W10pOiB7IG1pbjogbnVtYmVyOyBtYXg6IG51bWJlciB9IHtcclxuICAgICAgICBsZXQgbWluOiBudW1iZXIgPSBJbmZpbml0eTtcclxuICAgICAgICBsZXQgbWF4OiBudW1iZXIgPSAtSW5maW5pdHk7XHJcbiAgICAgICAga2V5RnJhbWVzLmZvckVhY2goZnVuY3Rpb24gKGtleUZyYW1lKSB7XHJcbiAgICAgICAgICAgIG1pbiA9IE1hdGgubWluKG1pbiwga2V5RnJhbWUuZnJhbWUpO1xyXG4gICAgICAgICAgICBtYXggPSBNYXRoLm1heChtYXgsIGtleUZyYW1lLmZyYW1lKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHsgbWluOiBtaW4sIG1heDogbWF4IH07XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW1hZ2VNaW1lVHlwZSB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgVG9vbHMgfSBmcm9tIFwiY29yZS9NaXNjL3Rvb2xzXCI7XHJcblxyXG5mdW5jdGlvbiBHZXRNaW1lVHlwZShmaWxlTmFtZTogc3RyaW5nKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcclxuICAgIGlmIChmaWxlTmFtZS5lbmRzV2l0aChcIi5nbGJcIikpIHtcclxuICAgICAgICByZXR1cm4gXCJtb2RlbC9nbHRmLWJpbmFyeVwiO1xyXG4gICAgfSBlbHNlIGlmIChmaWxlTmFtZS5lbmRzV2l0aChcIi5iaW5cIikpIHtcclxuICAgICAgICByZXR1cm4gXCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIjtcclxuICAgIH0gZWxzZSBpZiAoZmlsZU5hbWUuZW5kc1dpdGgoXCIuZ2x0ZlwiKSkge1xyXG4gICAgICAgIHJldHVybiBcIm1vZGVsL2dsdGYranNvblwiO1xyXG4gICAgfSBlbHNlIGlmIChmaWxlTmFtZS5lbmRzV2l0aChcIi5qcGVnXCIpIHx8IGZpbGVOYW1lLmVuZHNXaXRoKFwiLmpwZ1wiKSkge1xyXG4gICAgICAgIHJldHVybiBJbWFnZU1pbWVUeXBlLkpQRUc7XHJcbiAgICB9IGVsc2UgaWYgKGZpbGVOYW1lLmVuZHNXaXRoKFwiLnBuZ1wiKSkge1xyXG4gICAgICAgIHJldHVybiBJbWFnZU1pbWVUeXBlLlBORztcclxuICAgIH0gZWxzZSBpZiAoZmlsZU5hbWUuZW5kc1dpdGgoXCIud2VicFwiKSkge1xyXG4gICAgICAgIHJldHVybiBJbWFnZU1pbWVUeXBlLldFQlA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIENsYXNzIGZvciBob2xkaW5nIGFuZCBkb3dubG9hZGluZyBnbFRGIGZpbGUgZGF0YVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEdMVEZEYXRhIHtcclxuICAgIC8qKlxyXG4gICAgICogT2JqZWN0IHdoaWNoIGNvbnRhaW5zIHRoZSBmaWxlIG5hbWUgYXMgdGhlIGtleSBhbmQgaXRzIGRhdGEgYXMgdGhlIHZhbHVlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBmaWxlczogeyBbZmlsZU5hbWU6IHN0cmluZ106IHN0cmluZyB8IEJsb2IgfSA9IHt9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGRlcHJlY2F0ZWQgVXNlIGZpbGVzIGluc3RlYWRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBnbFRGRmlsZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsZXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEb3dubG9hZHMgdGhlIGdsVEYgZGF0YSBhcyBmaWxlcyBiYXNlZCBvbiB0aGVpciBuYW1lcyBhbmQgZGF0YVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZG93bmxvYWRGaWxlcygpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLmZpbGVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5maWxlc1trZXldO1xyXG4gICAgICAgICAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW3ZhbHVlXSwgeyB0eXBlOiBHZXRNaW1lVHlwZShrZXkpIH0pO1xyXG4gICAgICAgICAgICBUb29scy5Eb3dubG9hZChibG9iLCBrZXkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgdHlwZSB7XHJcbiAgICBJQnVmZmVyVmlldyxcclxuICAgIElBY2Nlc3NvcixcclxuICAgIElOb2RlLFxyXG4gICAgSVNjZW5lLFxyXG4gICAgSU1lc2gsXHJcbiAgICBJTWF0ZXJpYWwsXHJcbiAgICBJVGV4dHVyZSxcclxuICAgIElJbWFnZSxcclxuICAgIElTYW1wbGVyLFxyXG4gICAgSUFuaW1hdGlvbixcclxuICAgIElNZXNoUHJpbWl0aXZlLFxyXG4gICAgSUJ1ZmZlcixcclxuICAgIElHTFRGLFxyXG4gICAgSVRleHR1cmVJbmZvLFxyXG4gICAgSVNraW4sXHJcbiAgICBJQ2FtZXJhLFxyXG59IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgQWNjZXNzb3JDb21wb25lbnRUeXBlLCBBY2Nlc3NvclR5cGUsIENhbWVyYVR5cGUsIEltYWdlTWltZVR5cGUgfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcblxyXG5pbXBvcnQgdHlwZSB7IEZsb2F0QXJyYXksIEluZGljZXNBcnJheSwgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xyXG5pbXBvcnQgeyBUbXBWZWN0b3JzLCBRdWF0ZXJuaW9uLCBNYXRyaXggfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLnZlY3RvclwiO1xyXG5pbXBvcnQgeyBUb29scyB9IGZyb20gXCJjb3JlL01pc2MvdG9vbHNcIjtcclxuaW1wb3J0IHR5cGUgeyBCdWZmZXIgfSBmcm9tIFwiY29yZS9CdWZmZXJzL2J1ZmZlclwiO1xyXG5pbXBvcnQgeyBWZXJ0ZXhCdWZmZXIgfSBmcm9tIFwiY29yZS9CdWZmZXJzL2J1ZmZlclwiO1xyXG5pbXBvcnQgdHlwZSB7IE5vZGUgfSBmcm9tIFwiY29yZS9ub2RlXCI7XHJcbmltcG9ydCB7IFRyYW5zZm9ybU5vZGUgfSBmcm9tIFwiY29yZS9NZXNoZXMvdHJhbnNmb3JtTm9kZVwiO1xyXG5pbXBvcnQgdHlwZSB7IFN1Yk1lc2ggfSBmcm9tIFwiY29yZS9NZXNoZXMvc3ViTWVzaFwiO1xyXG5pbXBvcnQgeyBNZXNoIH0gZnJvbSBcImNvcmUvTWVzaGVzL21lc2hcIjtcclxuaW1wb3J0IHsgSW5zdGFuY2VkTWVzaCB9IGZyb20gXCJjb3JlL01lc2hlcy9pbnN0YW5jZWRNZXNoXCI7XHJcbmltcG9ydCB0eXBlIHsgQmFzZVRleHR1cmUgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvYmFzZVRleHR1cmVcIjtcclxuaW1wb3J0IHR5cGUgeyBUZXh0dXJlIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1RleHR1cmVzL3RleHR1cmVcIjtcclxuaW1wb3J0IHsgTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgRW5naW5lIH0gZnJvbSBcImNvcmUvRW5naW5lcy9lbmdpbmVcIjtcclxuaW1wb3J0IHR5cGUgeyBTY2VuZSB9IGZyb20gXCJjb3JlL3NjZW5lXCI7XHJcbmltcG9ydCB7IEVuZ2luZVN0b3JlIH0gZnJvbSBcImNvcmUvRW5naW5lcy9lbmdpbmVTdG9yZVwiO1xyXG5cclxuaW1wb3J0IHR5cGUgeyBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIgfSBmcm9tIFwiLi9nbFRGRXhwb3J0ZXJFeHRlbnNpb25cIjtcclxuaW1wb3J0IHsgR0xURk1hdGVyaWFsRXhwb3J0ZXIgfSBmcm9tIFwiLi9nbFRGTWF0ZXJpYWxFeHBvcnRlclwiO1xyXG5pbXBvcnQgdHlwZSB7IElFeHBvcnRPcHRpb25zIH0gZnJvbSBcIi4vZ2xURlNlcmlhbGl6ZXJcIjtcclxuaW1wb3J0IHsgR0xURkRhdGEgfSBmcm9tIFwiLi9nbFRGRGF0YVwiO1xyXG5pbXBvcnQge1xyXG4gICAgQ29udmVydFRvUmlnaHRIYW5kZWRQb3NpdGlvbixcclxuICAgIENvbnZlcnRUb1JpZ2h0SGFuZGVkUm90YXRpb24sXHJcbiAgICBEYXRhQXJyYXlUb1VpbnQ4QXJyYXksXHJcbiAgICBHZXRBY2Nlc3NvclR5cGUsXHJcbiAgICBHZXRBdHRyaWJ1dGVUeXBlLFxyXG4gICAgR2V0TWluTWF4LFxyXG4gICAgR2V0UHJpbWl0aXZlTW9kZSxcclxuICAgIElzTm9vcE5vZGUsXHJcbiAgICBJc1RyaWFuZ2xlRmlsbE1vZGUsXHJcbiAgICBJc1BhcmVudEFkZGVkQnlJbXBvcnRlcixcclxuICAgIENvbnZlcnRUb1JpZ2h0SGFuZGVkTm9kZSxcclxuICAgIFJvdGF0ZU5vZGUxODBZLFxyXG4gICAgRmxvYXRzTmVlZDE2Qml0SW50ZWdlcixcclxuICAgIElzU3RhbmRhcmRWZXJ0ZXhBdHRyaWJ1dGUsXHJcbiAgICBJbmRpY2VzQXJyYXlUb1R5cGVkQXJyYXksXHJcbn0gZnJvbSBcIi4vZ2xURlV0aWxpdGllc1wiO1xyXG5pbXBvcnQgeyBCdWZmZXJNYW5hZ2VyIH0gZnJvbSBcIi4vYnVmZmVyTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBDYW1lcmEgfSBmcm9tIFwiY29yZS9DYW1lcmFzL2NhbWVyYVwiO1xyXG5pbXBvcnQgeyBNdWx0aU1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL211bHRpTWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgUEJSTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvUEJSL3Bick1hdGVyaWFsXCI7XHJcbmltcG9ydCB7IFN0YW5kYXJkTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvc3RhbmRhcmRNYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiY29yZS9NaXNjL2xvZ2dlclwiO1xyXG5pbXBvcnQgeyBFbnVtZXJhdGVGbG9hdFZhbHVlcywgQXJlSW5kaWNlczMyQml0cyB9IGZyb20gXCJjb3JlL0J1ZmZlcnMvYnVmZmVyVXRpbHNcIjtcclxuaW1wb3J0IHR5cGUgeyBCb25lLCBTa2VsZXRvbiB9IGZyb20gXCJjb3JlL0JvbmVzXCI7XHJcbmltcG9ydCB7IF9HTFRGQW5pbWF0aW9uIH0gZnJvbSBcIi4vZ2xURkFuaW1hdGlvblwiO1xyXG5pbXBvcnQgdHlwZSB7IE1vcnBoVGFyZ2V0IH0gZnJvbSBcImNvcmUvTW9ycGhcIjtcclxuaW1wb3J0IHsgQnVpbGRNb3JwaFRhcmdldEJ1ZmZlcnMgfSBmcm9tIFwiLi9nbFRGTW9ycGhUYXJnZXRzVXRpbGl0aWVzXCI7XHJcbmltcG9ydCB0eXBlIHsgSU1vcnBoVGFyZ2V0RGF0YSB9IGZyb20gXCIuL2dsVEZNb3JwaFRhcmdldHNVdGlsaXRpZXNcIjtcclxuaW1wb3J0IHsgTGluZXNNZXNoIH0gZnJvbSBcImNvcmUvTWVzaGVzL2xpbmVzTWVzaFwiO1xyXG5pbXBvcnQgeyBHcmVhc2VkTGluZUJhc2VNZXNoIH0gZnJvbSBcImNvcmUvTWVzaGVzL0dyZWFzZWRMaW5lL2dyZWFzZWRMaW5lQmFzZU1lc2hcIjtcclxuaW1wb3J0IHsgQ29sb3IzLCBDb2xvcjQgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLmNvbG9yXCI7XHJcblxyXG5jbGFzcyBFeHBvcnRlclN0YXRlIHtcclxuICAgIC8vIEJhYnlsb24gaW5kaWNlcyBhcnJheSwgc3RhcnQsIGNvdW50LCBvZmZzZXQsIGZsaXAgLT4gZ2xURiBhY2Nlc3NvciBpbmRleFxyXG4gICAgcHJpdmF0ZSBfaW5kaWNlc0FjY2Vzc29yTWFwID0gbmV3IE1hcDxOdWxsYWJsZTxJbmRpY2VzQXJyYXk+LCBNYXA8bnVtYmVyLCBNYXA8bnVtYmVyLCBNYXA8bnVtYmVyLCBNYXA8Ym9vbGVhbiwgbnVtYmVyPj4+Pj4oKTtcclxuXHJcbiAgICAvLyBCYWJ5bG9uIGJ1ZmZlciAtPiBnbFRGIGJ1ZmZlciB2aWV3XHJcbiAgICBwcml2YXRlIF92ZXJ0ZXhCdWZmZXJWaWV3TWFwID0gbmV3IE1hcDxCdWZmZXIsIElCdWZmZXJWaWV3PigpO1xyXG5cclxuICAgIC8vIEJhYnlsb24gdmVydGV4IGJ1ZmZlciwgc3RhcnQsIGNvdW50IC0+IGdsVEYgYWNjZXNzb3IgaW5kZXhcclxuICAgIHByaXZhdGUgX3ZlcnRleEFjY2Vzc29yTWFwID0gbmV3IE1hcDxWZXJ0ZXhCdWZmZXIsIE1hcDxudW1iZXIsIE1hcDxudW1iZXIsIG51bWJlcj4+PigpO1xyXG5cclxuICAgIHByaXZhdGUgX3JlbWFwcGVkQnVmZmVyVmlldyA9IG5ldyBNYXA8QnVmZmVyLCBNYXA8VmVydGV4QnVmZmVyLCBJQnVmZmVyVmlldz4+KCk7XHJcblxyXG4gICAgcHJpdmF0ZSBfbWVzaE1vcnBoVGFyZ2V0TWFwID0gbmV3IE1hcDxNZXNoLCBJTW9ycGhUYXJnZXREYXRhW10+KCk7XHJcblxyXG4gICAgcHJpdmF0ZSBfdmVydGV4TWFwQ29sb3JBbHBoYSA9IG5ldyBNYXA8VmVydGV4QnVmZmVyLCBib29sZWFuPigpO1xyXG5cclxuICAgIHByaXZhdGUgX2V4cG9ydGVkTm9kZXMgPSBuZXcgU2V0PE5vZGU+KCk7XHJcblxyXG4gICAgLy8gQmFieWxvbiBtZXNoIC0+IGdsVEYgbWVzaCBpbmRleFxyXG4gICAgcHJpdmF0ZSBfbWVzaE1hcCA9IG5ldyBNYXA8TWVzaCwgbnVtYmVyPigpO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb252ZXJ0VG9SaWdodEhhbmRlZDogYm9vbGVhbiwgd2FzQWRkZWRCeU5vb3BOb2RlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5jb252ZXJ0VG9SaWdodEhhbmRlZCA9IGNvbnZlcnRUb1JpZ2h0SGFuZGVkO1xyXG4gICAgICAgIHRoaXMud2FzQWRkZWRCeU5vb3BOb2RlID0gd2FzQWRkZWRCeU5vb3BOb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZWFkb25seSBjb252ZXJ0VG9SaWdodEhhbmRlZDogYm9vbGVhbjtcclxuXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgd2FzQWRkZWRCeU5vb3BOb2RlOiBib29sZWFuO1xyXG5cclxuICAgIC8vIE9ubHkgdXNlZCB3aGVuIGNvbnZlcnRUb1JpZ2h0SGFuZGVkIGlzIHRydWUuXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgY29udmVydGVkVG9SaWdodEhhbmRlZEJ1ZmZlcnMgPSBuZXcgTWFwPEJ1ZmZlciwgVWludDhBcnJheT4oKTtcclxuXHJcbiAgICBwdWJsaWMgZ2V0SW5kaWNlc0FjY2Vzc29yKGluZGljZXM6IE51bGxhYmxlPEluZGljZXNBcnJheT4sIHN0YXJ0OiBudW1iZXIsIGNvdW50OiBudW1iZXIsIG9mZnNldDogbnVtYmVyLCBmbGlwOiBib29sZWFuKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faW5kaWNlc0FjY2Vzc29yTWFwLmdldChpbmRpY2VzKT8uZ2V0KHN0YXJ0KT8uZ2V0KGNvdW50KT8uZ2V0KG9mZnNldCk/LmdldChmbGlwKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0SW5kaWNlc0FjY2Vzc29yKGluZGljZXM6IE51bGxhYmxlPEluZGljZXNBcnJheT4sIHN0YXJ0OiBudW1iZXIsIGNvdW50OiBudW1iZXIsIG9mZnNldDogbnVtYmVyLCBmbGlwOiBib29sZWFuLCBhY2Nlc3NvckluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBsZXQgbWFwMSA9IHRoaXMuX2luZGljZXNBY2Nlc3Nvck1hcC5nZXQoaW5kaWNlcyk7XHJcbiAgICAgICAgaWYgKCFtYXAxKSB7XHJcbiAgICAgICAgICAgIG1hcDEgPSBuZXcgTWFwPG51bWJlciwgTWFwPG51bWJlciwgTWFwPG51bWJlciwgTWFwPGJvb2xlYW4sIG51bWJlcj4+Pj4oKTtcclxuICAgICAgICAgICAgdGhpcy5faW5kaWNlc0FjY2Vzc29yTWFwLnNldChpbmRpY2VzLCBtYXAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBtYXAyID0gbWFwMS5nZXQoc3RhcnQpO1xyXG4gICAgICAgIGlmICghbWFwMikge1xyXG4gICAgICAgICAgICBtYXAyID0gbmV3IE1hcDxudW1iZXIsIE1hcDxudW1iZXIsIE1hcDxib29sZWFuLCBudW1iZXI+Pj4oKTtcclxuICAgICAgICAgICAgbWFwMS5zZXQoc3RhcnQsIG1hcDIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG1hcDMgPSBtYXAyLmdldChjb3VudCk7XHJcbiAgICAgICAgaWYgKCFtYXAzKSB7XHJcbiAgICAgICAgICAgIG1hcDMgPSBuZXcgTWFwPG51bWJlciwgTWFwPGJvb2xlYW4sIG51bWJlcj4+KCk7XHJcbiAgICAgICAgICAgIG1hcDIuc2V0KGNvdW50LCBtYXAzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBtYXA0ID0gbWFwMy5nZXQob2Zmc2V0KTtcclxuICAgICAgICBpZiAoIW1hcDQpIHtcclxuICAgICAgICAgICAgbWFwNCA9IG5ldyBNYXA8Ym9vbGVhbiwgbnVtYmVyPigpO1xyXG4gICAgICAgICAgICBtYXAzLnNldChvZmZzZXQsIG1hcDQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWFwNC5zZXQoZmxpcCwgYWNjZXNzb3JJbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHB1c2hFeHBvcnRlZE5vZGUobm9kZTogTm9kZSkge1xyXG4gICAgICAgIGlmICghdGhpcy5fZXhwb3J0ZWROb2Rlcy5oYXMobm9kZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5fZXhwb3J0ZWROb2Rlcy5hZGQobm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXROb2Rlc1NldCgpOiBTZXQ8Tm9kZT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9leHBvcnRlZE5vZGVzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRWZXJ0ZXhCdWZmZXJWaWV3KGJ1ZmZlcjogQnVmZmVyKTogSUJ1ZmZlclZpZXcgfCB1bmRlZmluZWQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92ZXJ0ZXhCdWZmZXJWaWV3TWFwLmdldChidWZmZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRWZXJ0ZXhCdWZmZXJWaWV3KGJ1ZmZlcjogQnVmZmVyLCBidWZmZXJWaWV3OiBJQnVmZmVyVmlldyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3ZlcnRleEJ1ZmZlclZpZXdNYXAuc2V0KGJ1ZmZlciwgYnVmZmVyVmlldyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFJlbWFwcGVkQnVmZmVyVmlldyhidWZmZXI6IEJ1ZmZlciwgdmVydGV4QnVmZmVyOiBWZXJ0ZXhCdWZmZXIsIGJ1ZmZlclZpZXc6IElCdWZmZXJWaWV3KSB7XHJcbiAgICAgICAgdGhpcy5fcmVtYXBwZWRCdWZmZXJWaWV3LnNldChidWZmZXIsIG5ldyBNYXA8VmVydGV4QnVmZmVyLCBJQnVmZmVyVmlldz4oKSk7XHJcbiAgICAgICAgdGhpcy5fcmVtYXBwZWRCdWZmZXJWaWV3LmdldChidWZmZXIpIS5zZXQodmVydGV4QnVmZmVyLCBidWZmZXJWaWV3KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UmVtYXBwZWRCdWZmZXJWaWV3KGJ1ZmZlcjogQnVmZmVyLCB2ZXJ0ZXhCdWZmZXI6IFZlcnRleEJ1ZmZlcik6IElCdWZmZXJWaWV3IHwgdW5kZWZpbmVkIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcmVtYXBwZWRCdWZmZXJWaWV3LmdldChidWZmZXIpPy5nZXQodmVydGV4QnVmZmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0VmVydGV4QWNjZXNzb3IodmVydGV4QnVmZmVyOiBWZXJ0ZXhCdWZmZXIsIHN0YXJ0OiBudW1iZXIsIGNvdW50OiBudW1iZXIpOiBudW1iZXIgfCB1bmRlZmluZWQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92ZXJ0ZXhBY2Nlc3Nvck1hcC5nZXQodmVydGV4QnVmZmVyKT8uZ2V0KHN0YXJ0KT8uZ2V0KGNvdW50KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0VmVydGV4QWNjZXNzb3IodmVydGV4QnVmZmVyOiBWZXJ0ZXhCdWZmZXIsIHN0YXJ0OiBudW1iZXIsIGNvdW50OiBudW1iZXIsIGFjY2Vzc29ySW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGxldCBtYXAxID0gdGhpcy5fdmVydGV4QWNjZXNzb3JNYXAuZ2V0KHZlcnRleEJ1ZmZlcik7XHJcbiAgICAgICAgaWYgKCFtYXAxKSB7XHJcbiAgICAgICAgICAgIG1hcDEgPSBuZXcgTWFwPG51bWJlciwgTWFwPG51bWJlciwgbnVtYmVyPj4oKTtcclxuICAgICAgICAgICAgdGhpcy5fdmVydGV4QWNjZXNzb3JNYXAuc2V0KHZlcnRleEJ1ZmZlciwgbWFwMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgbWFwMiA9IG1hcDEuZ2V0KHN0YXJ0KTtcclxuICAgICAgICBpZiAoIW1hcDIpIHtcclxuICAgICAgICAgICAgbWFwMiA9IG5ldyBNYXA8bnVtYmVyLCBudW1iZXI+KCk7XHJcbiAgICAgICAgICAgIG1hcDEuc2V0KHN0YXJ0LCBtYXAyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1hcDIuc2V0KGNvdW50LCBhY2Nlc3NvckluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGFzVmVydGV4Q29sb3JBbHBoYSh2ZXJ0ZXhCdWZmZXI6IFZlcnRleEJ1ZmZlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92ZXJ0ZXhNYXBDb2xvckFscGhhLmdldCh2ZXJ0ZXhCdWZmZXIpIHx8IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRIYXNWZXJ0ZXhDb2xvckFscGhhKHZlcnRleEJ1ZmZlcjogVmVydGV4QnVmZmVyLCBoYXNBbHBoYTogYm9vbGVhbikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92ZXJ0ZXhNYXBDb2xvckFscGhhLnNldCh2ZXJ0ZXhCdWZmZXIsIGhhc0FscGhhKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0TWVzaChtZXNoOiBNZXNoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWVzaE1hcC5nZXQobWVzaCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldE1lc2gobWVzaDogTWVzaCwgbWVzaEluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9tZXNoTWFwLnNldChtZXNoLCBtZXNoSW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBiaW5kTW9ycGhEYXRhVG9NZXNoKG1lc2g6IE1lc2gsIG1vcnBoRGF0YTogSU1vcnBoVGFyZ2V0RGF0YSkge1xyXG4gICAgICAgIGNvbnN0IG1vcnBoVGFyZ2V0cyA9IHRoaXMuX21lc2hNb3JwaFRhcmdldE1hcC5nZXQobWVzaCkgfHwgW107XHJcbiAgICAgICAgdGhpcy5fbWVzaE1vcnBoVGFyZ2V0TWFwLnNldChtZXNoLCBtb3JwaFRhcmdldHMpO1xyXG4gICAgICAgIGlmIChtb3JwaFRhcmdldHMuaW5kZXhPZihtb3JwaERhdGEpID09PSAtMSkge1xyXG4gICAgICAgICAgICBtb3JwaFRhcmdldHMucHVzaChtb3JwaERhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0TW9ycGhUYXJnZXRzRnJvbU1lc2gobWVzaDogTWVzaCk6IElNb3JwaFRhcmdldERhdGFbXSB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21lc2hNb3JwaFRhcmdldE1hcC5nZXQobWVzaCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuZXhwb3J0IGNsYXNzIEdMVEZFeHBvcnRlciB7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgX2dsVEY6IElHTFRGID0ge1xyXG4gICAgICAgIGFzc2V0OiB7IGdlbmVyYXRvcjogYEJhYnlsb24uanMgdiR7RW5naW5lLlZlcnNpb259YCwgdmVyc2lvbjogXCIyLjBcIiB9LFxyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgX2FuaW1hdGlvbnM6IElBbmltYXRpb25bXSA9IFtdO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IF9hY2Nlc3NvcnM6IElBY2Nlc3NvcltdID0gW107XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgX2J1ZmZlclZpZXdzOiBJQnVmZmVyVmlld1tdID0gW107XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgX2NhbWVyYXM6IElDYW1lcmFbXSA9IFtdO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IF9pbWFnZXM6IElJbWFnZVtdID0gW107XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgX21hdGVyaWFsczogSU1hdGVyaWFsW10gPSBbXTtcclxuICAgIHB1YmxpYyByZWFkb25seSBfbWVzaGVzOiBJTWVzaFtdID0gW107XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgX25vZGVzOiBJTm9kZVtdID0gW107XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgX3NhbXBsZXJzOiBJU2FtcGxlcltdID0gW107XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgX3NjZW5lczogSVNjZW5lW10gPSBbXTtcclxuICAgIHB1YmxpYyByZWFkb25seSBfc2tpbnM6IElTa2luW10gPSBbXTtcclxuICAgIHB1YmxpYyByZWFkb25seSBfdGV4dHVyZXM6IElUZXh0dXJlW10gPSBbXTtcclxuXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgX2JhYnlsb25TY2VuZTogU2NlbmU7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgX2ltYWdlRGF0YTogeyBbZmlsZU5hbWU6IHN0cmluZ106IHsgZGF0YTogQXJyYXlCdWZmZXI7IG1pbWVUeXBlOiBJbWFnZU1pbWVUeXBlIH0gfSA9IHt9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQmFrZWQgYW5pbWF0aW9uIHNhbXBsZSByYXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX2FuaW1hdGlvblNhbXBsZVJhdGU6IG51bWJlcjtcclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9vcHRpb25zOiBSZXF1aXJlZDxJRXhwb3J0T3B0aW9ucz47XHJcblxyXG4gICAgcHVibGljIF9zaG91bGRVc2VHbGI6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgX21hdGVyaWFsRXhwb3J0ZXIgPSBuZXcgR0xURk1hdGVyaWFsRXhwb3J0ZXIodGhpcyk7XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfZXh0ZW5zaW9uczogeyBbbmFtZTogc3RyaW5nXTogSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyIH0gPSB7fTtcclxuXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgX2J1ZmZlck1hbmFnZXIgPSBuZXcgQnVmZmVyTWFuYWdlcigpO1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX3Nob3VsZEV4cG9ydE5vZGVNYXAgPSBuZXcgTWFwPE5vZGUsIGJvb2xlYW4+KCk7XHJcblxyXG4gICAgLy8gQmFieWxvbiBub2RlIC0+IGdsVEYgbm9kZSBpbmRleFxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfbm9kZU1hcCA9IG5ldyBNYXA8Tm9kZSwgbnVtYmVyPigpO1xyXG5cclxuICAgIC8vIEJhYnlsb24gbWF0ZXJpYWwgLT4gZ2xURiBtYXRlcmlhbCBpbmRleFxyXG4gICAgcHVibGljIHJlYWRvbmx5IF9tYXRlcmlhbE1hcCA9IG5ldyBNYXA8TWF0ZXJpYWwsIG51bWJlcj4oKTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2NhbWVyYXNNYXAgPSBuZXcgTWFwPENhbWVyYSwgSUNhbWVyYT4oKTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX25vZGVzQ2FtZXJhTWFwID0gbmV3IE1hcDxJQ2FtZXJhLCBJTm9kZVtdPigpO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfc2tpbk1hcCA9IG5ldyBNYXA8U2tlbGV0b24sIElTa2luPigpO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfbm9kZXNTa2luTWFwID0gbmV3IE1hcDxJU2tpbiwgSU5vZGVbXT4oKTtcclxuXHJcbiAgICAvLyBBIG1hdGVyaWFsIGluIHRoaXMgc2V0IHJlcXVpcmVzIFVWc1xyXG4gICAgcHVibGljIHJlYWRvbmx5IF9tYXRlcmlhbE5lZWRzVVZzU2V0ID0gbmV3IFNldDxNYXRlcmlhbD4oKTtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBfRXh0ZW5zaW9uTmFtZXMgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgX0V4dGVuc2lvbkZhY3RvcmllczogeyBbbmFtZTogc3RyaW5nXTogKGV4cG9ydGVyOiBHTFRGRXhwb3J0ZXIpID0+IElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMiB9ID0ge307XHJcblxyXG4gICAgcHJpdmF0ZSBfYXBwbHlFeHRlbnNpb248VD4oXHJcbiAgICAgICAgbm9kZTogVCxcclxuICAgICAgICBleHRlbnNpb25zOiBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjJbXSxcclxuICAgICAgICBpbmRleDogbnVtYmVyLFxyXG4gICAgICAgIGFjdGlvbkFzeW5jOiAoZXh0ZW5zaW9uOiBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIsIG5vZGU6IFQpID0+IFByb21pc2U8TnVsbGFibGU8VD4+IHwgdW5kZWZpbmVkXHJcbiAgICApOiBQcm9taXNlPE51bGxhYmxlPFQ+PiB7XHJcbiAgICAgICAgaWYgKGluZGV4ID49IGV4dGVuc2lvbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobm9kZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjdXJyZW50UHJvbWlzZSA9IGFjdGlvbkFzeW5jKGV4dGVuc2lvbnNbaW5kZXhdLCBub2RlKTtcclxuXHJcbiAgICAgICAgaWYgKCFjdXJyZW50UHJvbWlzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYXBwbHlFeHRlbnNpb24obm9kZSwgZXh0ZW5zaW9ucywgaW5kZXggKyAxLCBhY3Rpb25Bc3luYyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gY3VycmVudFByb21pc2UudGhlbigobmV3Tm9kZSkgPT4gKG5ld05vZGUgPyB0aGlzLl9hcHBseUV4dGVuc2lvbihuZXdOb2RlLCBleHRlbnNpb25zLCBpbmRleCArIDEsIGFjdGlvbkFzeW5jKSA6IG51bGwpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9hcHBseUV4dGVuc2lvbnM8VD4obm9kZTogVCwgYWN0aW9uQXN5bmM6IChleHRlbnNpb246IElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMiwgbm9kZTogVCkgPT4gUHJvbWlzZTxOdWxsYWJsZTxUPj4gfCB1bmRlZmluZWQpOiBQcm9taXNlPE51bGxhYmxlPFQ+PiB7XHJcbiAgICAgICAgY29uc3QgZXh0ZW5zaW9uczogSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyW10gPSBbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IG5hbWUgb2YgR0xURkV4cG9ydGVyLl9FeHRlbnNpb25OYW1lcykge1xyXG4gICAgICAgICAgICBleHRlbnNpb25zLnB1c2godGhpcy5fZXh0ZW5zaW9uc1tuYW1lXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fYXBwbHlFeHRlbnNpb24obm9kZSwgZXh0ZW5zaW9ucywgMCwgYWN0aW9uQXN5bmMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBfZXh0ZW5zaW9uc1ByZUV4cG9ydFRleHR1cmVBc3luYyhjb250ZXh0OiBzdHJpbmcsIGJhYnlsb25UZXh0dXJlOiBUZXh0dXJlLCBtaW1lVHlwZTogSW1hZ2VNaW1lVHlwZSk6IFByb21pc2U8TnVsbGFibGU8QmFzZVRleHR1cmU+PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwcGx5RXh0ZW5zaW9ucyhiYWJ5bG9uVGV4dHVyZSwgKGV4dGVuc2lvbiwgbm9kZSkgPT4gZXh0ZW5zaW9uLnByZUV4cG9ydFRleHR1cmVBc3luYyAmJiBleHRlbnNpb24ucHJlRXhwb3J0VGV4dHVyZUFzeW5jKGNvbnRleHQsIG5vZGUsIG1pbWVUeXBlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIF9leHRlbnNpb25zUG9zdEV4cG9ydE5vZGVBc3luYyhjb250ZXh0OiBzdHJpbmcsIG5vZGU6IElOb2RlLCBiYWJ5bG9uTm9kZTogTm9kZSwgbm9kZU1hcDogTWFwPE5vZGUsIG51bWJlcj4sIGNvbnZlcnRUb1JpZ2h0SGFuZGVkOiBib29sZWFuKTogUHJvbWlzZTxOdWxsYWJsZTxJTm9kZT4+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXBwbHlFeHRlbnNpb25zKFxyXG4gICAgICAgICAgICBub2RlLFxyXG4gICAgICAgICAgICAoZXh0ZW5zaW9uLCBub2RlKSA9PiBleHRlbnNpb24ucG9zdEV4cG9ydE5vZGVBc3luYyAmJiBleHRlbnNpb24ucG9zdEV4cG9ydE5vZGVBc3luYyhjb250ZXh0LCBub2RlLCBiYWJ5bG9uTm9kZSwgbm9kZU1hcCwgY29udmVydFRvUmlnaHRIYW5kZWQsIHRoaXMuX2J1ZmZlck1hbmFnZXIpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgX2V4dGVuc2lvbnNQb3N0RXhwb3J0TWF0ZXJpYWxBc3luYyhjb250ZXh0OiBzdHJpbmcsIG1hdGVyaWFsOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBQcm9taXNlPE51bGxhYmxlPElNYXRlcmlhbD4+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXBwbHlFeHRlbnNpb25zKG1hdGVyaWFsLCAoZXh0ZW5zaW9uLCBub2RlKSA9PiBleHRlbnNpb24ucG9zdEV4cG9ydE1hdGVyaWFsQXN5bmMgJiYgZXh0ZW5zaW9uLnBvc3RFeHBvcnRNYXRlcmlhbEFzeW5jKGNvbnRleHQsIG5vZGUsIGJhYnlsb25NYXRlcmlhbCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBfZXh0ZW5zaW9uc1Bvc3RFeHBvcnRNYXRlcmlhbEFkZGl0aW9uYWxUZXh0dXJlcyhjb250ZXh0OiBzdHJpbmcsIG1hdGVyaWFsOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBCYXNlVGV4dHVyZVtdIHtcclxuICAgICAgICBjb25zdCBvdXRwdXQ6IEJhc2VUZXh0dXJlW10gPSBbXTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBuYW1lIG9mIEdMVEZFeHBvcnRlci5fRXh0ZW5zaW9uTmFtZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgZXh0ZW5zaW9uID0gdGhpcy5fZXh0ZW5zaW9uc1tuYW1lXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChleHRlbnNpb24ucG9zdEV4cG9ydE1hdGVyaWFsQWRkaXRpb25hbFRleHR1cmVzKSB7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXQucHVzaCguLi5leHRlbnNpb24ucG9zdEV4cG9ydE1hdGVyaWFsQWRkaXRpb25hbFRleHR1cmVzKGNvbnRleHQsIG1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWwpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgX2V4dGVuc2lvbnNQb3N0RXhwb3J0VGV4dHVyZXMoY29udGV4dDogc3RyaW5nLCB0ZXh0dXJlSW5mbzogSVRleHR1cmVJbmZvLCBiYWJ5bG9uVGV4dHVyZTogQmFzZVRleHR1cmUpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGNvbnN0IG5hbWUgb2YgR0xURkV4cG9ydGVyLl9FeHRlbnNpb25OYW1lcykge1xyXG4gICAgICAgICAgICBjb25zdCBleHRlbnNpb24gPSB0aGlzLl9leHRlbnNpb25zW25hbWVdO1xyXG5cclxuICAgICAgICAgICAgaWYgKGV4dGVuc2lvbi5wb3N0RXhwb3J0VGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgZXh0ZW5zaW9uLnBvc3RFeHBvcnRUZXh0dXJlKGNvbnRleHQsIHRleHR1cmVJbmZvLCBiYWJ5bG9uVGV4dHVyZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIF9leHRlbnNpb25zUG9zdEV4cG9ydE1lc2hQcmltaXRpdmUocHJpbWl0aXZlOiBJTWVzaFByaW1pdGl2ZSk6IHZvaWQge1xyXG4gICAgICAgIGZvciAoY29uc3QgbmFtZSBvZiBHTFRGRXhwb3J0ZXIuX0V4dGVuc2lvbk5hbWVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IHRoaXMuX2V4dGVuc2lvbnNbbmFtZV07XHJcblxyXG4gICAgICAgICAgICBpZiAoZXh0ZW5zaW9uLnBvc3RFeHBvcnRNZXNoUHJpbWl0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICBleHRlbnNpb24ucG9zdEV4cG9ydE1lc2hQcmltaXRpdmUocHJpbWl0aXZlLCB0aGlzLl9idWZmZXJNYW5hZ2VyLCB0aGlzLl9hY2Nlc3NvcnMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBfZXh0ZW5zaW9uc1ByZUdlbmVyYXRlQmluYXJ5QXN5bmMoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgZm9yIChjb25zdCBuYW1lIG9mIEdMVEZFeHBvcnRlci5fRXh0ZW5zaW9uTmFtZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgZXh0ZW5zaW9uID0gdGhpcy5fZXh0ZW5zaW9uc1tuYW1lXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChleHRlbnNpb24ucHJlR2VuZXJhdGVCaW5hcnlBc3luYykge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgZXh0ZW5zaW9uLnByZUdlbmVyYXRlQmluYXJ5QXN5bmModGhpcy5fYnVmZmVyTWFuYWdlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZm9yRWFjaEV4dGVuc2lvbnMoYWN0aW9uOiAoZXh0ZW5zaW9uOiBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGNvbnN0IG5hbWUgb2YgR0xURkV4cG9ydGVyLl9FeHRlbnNpb25OYW1lcykge1xyXG4gICAgICAgICAgICBjb25zdCBleHRlbnNpb24gPSB0aGlzLl9leHRlbnNpb25zW25hbWVdO1xyXG4gICAgICAgICAgICBpZiAoZXh0ZW5zaW9uLmVuYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbihleHRlbnNpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2V4dGVuc2lvbnNPbkV4cG9ydGluZygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9mb3JFYWNoRXh0ZW5zaW9ucygoZXh0ZW5zaW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChleHRlbnNpb24ud2FzVXNlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZ2xURi5leHRlbnNpb25zVXNlZCB8fD0gW107XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fZ2xURi5leHRlbnNpb25zVXNlZC5pbmRleE9mKGV4dGVuc2lvbi5uYW1lKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9nbFRGLmV4dGVuc2lvbnNVc2VkLnB1c2goZXh0ZW5zaW9uLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChleHRlbnNpb24ucmVxdWlyZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9nbFRGLmV4dGVuc2lvbnNSZXF1aXJlZCB8fD0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2dsVEYuZXh0ZW5zaW9uc1JlcXVpcmVkLmluZGV4T2YoZXh0ZW5zaW9uLm5hbWUpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9nbFRGLmV4dGVuc2lvbnNSZXF1aXJlZC5wdXNoKGV4dGVuc2lvbi5uYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5fZ2xURi5leHRlbnNpb25zIHx8PSB7fTtcclxuICAgICAgICAgICAgICAgIGlmIChleHRlbnNpb24ub25FeHBvcnRpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICBleHRlbnNpb24ub25FeHBvcnRpbmcoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2xvYWRFeHRlbnNpb25zKCk6IHZvaWQge1xyXG4gICAgICAgIGZvciAoY29uc3QgbmFtZSBvZiBHTFRGRXhwb3J0ZXIuX0V4dGVuc2lvbk5hbWVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IEdMVEZFeHBvcnRlci5fRXh0ZW5zaW9uRmFjdG9yaWVzW25hbWVdKHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLl9leHRlbnNpb25zW25hbWVdID0gZXh0ZW5zaW9uO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoYmFieWxvblNjZW5lOiBOdWxsYWJsZTxTY2VuZT4gPSBFbmdpbmVTdG9yZS5MYXN0Q3JlYXRlZFNjZW5lLCBvcHRpb25zPzogSUV4cG9ydE9wdGlvbnMpIHtcclxuICAgICAgICBpZiAoIWJhYnlsb25TY2VuZSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBzY2VuZSBhdmFpbGFibGUgdG8gZXhwb3J0XCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fYmFieWxvblNjZW5lID0gYmFieWxvblNjZW5lO1xyXG5cclxuICAgICAgICB0aGlzLl9vcHRpb25zID0ge1xyXG4gICAgICAgICAgICBzaG91bGRFeHBvcnROb2RlOiAoKSA9PiB0cnVlLFxyXG4gICAgICAgICAgICBzaG91bGRFeHBvcnRBbmltYXRpb246ICgpID0+IHRydWUsXHJcbiAgICAgICAgICAgIG1ldGFkYXRhU2VsZWN0b3I6IChtZXRhZGF0YSkgPT4gbWV0YWRhdGEsXHJcbiAgICAgICAgICAgIGFuaW1hdGlvblNhbXBsZVJhdGU6IDEgLyA2MCxcclxuICAgICAgICAgICAgZXhwb3J0V2l0aG91dFdhaXRpbmdGb3JTY2VuZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGV4cG9ydFVudXNlZFVWczogZmFsc2UsXHJcbiAgICAgICAgICAgIHJlbW92ZU5vb3BSb290Tm9kZXM6IHRydWUsXHJcbiAgICAgICAgICAgIGluY2x1ZGVDb29yZGluYXRlU3lzdGVtQ29udmVyc2lvbk5vZGVzOiBmYWxzZSxcclxuICAgICAgICAgICAgbWVzaENvbXByZXNzaW9uTWV0aG9kOiBcIk5vbmVcIixcclxuICAgICAgICAgICAgLi4ub3B0aW9ucyxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLl9sb2FkRXh0ZW5zaW9ucygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuX2V4dGVuc2lvbnMpIHtcclxuICAgICAgICAgICAgY29uc3QgZXh0ZW5zaW9uID0gdGhpcy5fZXh0ZW5zaW9uc1trZXldO1xyXG4gICAgICAgICAgICBleHRlbnNpb24uZGlzcG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IG9wdGlvbnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX29wdGlvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBSZWdpc3RlckV4dGVuc2lvbihuYW1lOiBzdHJpbmcsIGZhY3Rvcnk6IChleHBvcnRlcjogR0xURkV4cG9ydGVyKSA9PiBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIpOiB2b2lkIHtcclxuICAgICAgICBpZiAoR0xURkV4cG9ydGVyLlVucmVnaXN0ZXJFeHRlbnNpb24obmFtZSkpIHtcclxuICAgICAgICAgICAgVG9vbHMuV2FybihgRXh0ZW5zaW9uIHdpdGggdGhlIG5hbWUgJHtuYW1lfSBhbHJlYWR5IGV4aXN0c2ApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgR0xURkV4cG9ydGVyLl9FeHRlbnNpb25GYWN0b3JpZXNbbmFtZV0gPSBmYWN0b3J5O1xyXG4gICAgICAgIEdMVEZFeHBvcnRlci5fRXh0ZW5zaW9uTmFtZXMucHVzaChuYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIFVucmVnaXN0ZXJFeHRlbnNpb24obmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKCFHTFRGRXhwb3J0ZXIuX0V4dGVuc2lvbkZhY3Rvcmllc1tuYW1lXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlbGV0ZSBHTFRGRXhwb3J0ZXIuX0V4dGVuc2lvbkZhY3Rvcmllc1tuYW1lXTtcclxuXHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBHTFRGRXhwb3J0ZXIuX0V4dGVuc2lvbk5hbWVzLmluZGV4T2YobmFtZSk7XHJcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICBHTFRGRXhwb3J0ZXIuX0V4dGVuc2lvbk5hbWVzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9nZW5lcmF0ZUpTT04oYnVmZmVyQnl0ZUxlbmd0aDogbnVtYmVyLCBmaWxlTmFtZT86IHN0cmluZywgcHJldHR5UHJpbnQ/OiBib29sZWFuKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBidWZmZXI6IElCdWZmZXIgPSB7IGJ5dGVMZW5ndGg6IGJ1ZmZlckJ5dGVMZW5ndGggfTtcclxuXHJcbiAgICAgICAgaWYgKGJ1ZmZlci5ieXRlTGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2dsVEYuYnVmZmVycyA9IFtidWZmZXJdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fbm9kZXMgJiYgdGhpcy5fbm9kZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2dsVEYubm9kZXMgPSB0aGlzLl9ub2RlcztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX21lc2hlcyAmJiB0aGlzLl9tZXNoZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2dsVEYubWVzaGVzID0gdGhpcy5fbWVzaGVzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fc2NlbmVzICYmIHRoaXMuX3NjZW5lcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5fZ2xURi5zY2VuZXMgPSB0aGlzLl9zY2VuZXM7XHJcbiAgICAgICAgICAgIHRoaXMuX2dsVEYuc2NlbmUgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fY2FtZXJhcyAmJiB0aGlzLl9jYW1lcmFzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLl9nbFRGLmNhbWVyYXMgPSB0aGlzLl9jYW1lcmFzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fYnVmZmVyVmlld3MgJiYgdGhpcy5fYnVmZmVyVmlld3MubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2dsVEYuYnVmZmVyVmlld3MgPSB0aGlzLl9idWZmZXJWaWV3cztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX2FjY2Vzc29ycyAmJiB0aGlzLl9hY2Nlc3NvcnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2dsVEYuYWNjZXNzb3JzID0gdGhpcy5fYWNjZXNzb3JzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fYW5pbWF0aW9ucyAmJiB0aGlzLl9hbmltYXRpb25zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLl9nbFRGLmFuaW1hdGlvbnMgPSB0aGlzLl9hbmltYXRpb25zO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fbWF0ZXJpYWxzICYmIHRoaXMuX21hdGVyaWFscy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5fZ2xURi5tYXRlcmlhbHMgPSB0aGlzLl9tYXRlcmlhbHM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl90ZXh0dXJlcyAmJiB0aGlzLl90ZXh0dXJlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5fZ2xURi50ZXh0dXJlcyA9IHRoaXMuX3RleHR1cmVzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fc2FtcGxlcnMgJiYgdGhpcy5fc2FtcGxlcnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2dsVEYuc2FtcGxlcnMgPSB0aGlzLl9zYW1wbGVycztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX3NraW5zICYmIHRoaXMuX3NraW5zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLl9nbFRGLnNraW5zID0gdGhpcy5fc2tpbnM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9pbWFnZXMgJiYgdGhpcy5faW1hZ2VzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLl9nbFRGLmltYWdlcyA9IHRoaXMuX2ltYWdlcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5fc2hvdWxkVXNlR2xiKSB7XHJcbiAgICAgICAgICAgIGJ1ZmZlci51cmkgPSBmaWxlTmFtZSArIFwiLmJpblwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHByZXR0eVByaW50ID8gSlNPTi5zdHJpbmdpZnkodGhpcy5fZ2xURiwgbnVsbCwgMikgOiBKU09OLnN0cmluZ2lmeSh0aGlzLl9nbFRGKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZ2VuZXJhdGVHTFRGQXN5bmMoZ2xURlByZWZpeDogc3RyaW5nKTogUHJvbWlzZTxHTFRGRGF0YT4ge1xyXG4gICAgICAgIGNvbnN0IGJpbmFyeUJ1ZmZlciA9IGF3YWl0IHRoaXMuX2dlbmVyYXRlQmluYXJ5QXN5bmMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5fZXh0ZW5zaW9uc09uRXhwb3J0aW5nKCk7XHJcbiAgICAgICAgY29uc3QganNvblRleHQgPSB0aGlzLl9nZW5lcmF0ZUpTT04oYmluYXJ5QnVmZmVyLmJ5dGVMZW5ndGgsIGdsVEZQcmVmaXgsIHRydWUpO1xyXG4gICAgICAgIGNvbnN0IGJpbiA9IG5ldyBCbG9iKFtiaW5hcnlCdWZmZXJdLCB7IHR5cGU6IFwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCIgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGdsVEZGaWxlTmFtZSA9IGdsVEZQcmVmaXggKyBcIi5nbHRmXCI7XHJcbiAgICAgICAgY29uc3QgZ2xURkJpbkZpbGUgPSBnbFRGUHJlZml4ICsgXCIuYmluXCI7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IG5ldyBHTFRGRGF0YSgpO1xyXG5cclxuICAgICAgICBjb250YWluZXIuZmlsZXNbZ2xURkZpbGVOYW1lXSA9IGpzb25UZXh0O1xyXG4gICAgICAgIGNvbnRhaW5lci5maWxlc1tnbFRGQmluRmlsZV0gPSBiaW47XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9pbWFnZURhdGEpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBpbWFnZSBpbiB0aGlzLl9pbWFnZURhdGEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5maWxlc1tpbWFnZV0gPSBuZXcgQmxvYihbdGhpcy5faW1hZ2VEYXRhW2ltYWdlXS5kYXRhXSwgeyB0eXBlOiB0aGlzLl9pbWFnZURhdGFbaW1hZ2VdLm1pbWVUeXBlIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgX2dlbmVyYXRlQmluYXJ5QXN5bmMoKTogUHJvbWlzZTxVaW50OEFycmF5PiB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5fZXhwb3J0U2NlbmVBc3luYygpO1xyXG4gICAgICAgIGF3YWl0IHRoaXMuX2V4dGVuc2lvbnNQcmVHZW5lcmF0ZUJpbmFyeUFzeW5jKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2J1ZmZlck1hbmFnZXIuZ2VuZXJhdGVCaW5hcnkodGhpcy5fYnVmZmVyVmlld3MpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUGFkcyB0aGUgbnVtYmVyIHRvIGEgbXVsdGlwbGUgb2YgNFxyXG4gICAgICogQHBhcmFtIG51bSBudW1iZXIgdG8gcGFkXHJcbiAgICAgKiBAcmV0dXJucyBwYWRkZWQgbnVtYmVyXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX2dldFBhZGRpbmcobnVtOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IHJlbWFpbmRlciA9IG51bSAlIDQ7XHJcbiAgICAgICAgY29uc3QgcGFkZGluZyA9IHJlbWFpbmRlciA9PT0gMCA/IHJlbWFpbmRlciA6IDQgLSByZW1haW5kZXI7XHJcblxyXG4gICAgICAgIHJldHVybiBwYWRkaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBnZW5lcmF0ZUdMQkFzeW5jKGdsVEZQcmVmaXg6IHN0cmluZyk6IFByb21pc2U8R0xURkRhdGE+IHtcclxuICAgICAgICB0aGlzLl9zaG91bGRVc2VHbGIgPSB0cnVlO1xyXG4gICAgICAgIGNvbnN0IGJpbmFyeUJ1ZmZlciA9IGF3YWl0IHRoaXMuX2dlbmVyYXRlQmluYXJ5QXN5bmMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5fZXh0ZW5zaW9uc09uRXhwb3J0aW5nKCk7XHJcbiAgICAgICAgY29uc3QganNvblRleHQgPSB0aGlzLl9nZW5lcmF0ZUpTT04oYmluYXJ5QnVmZmVyLmJ5dGVMZW5ndGgpO1xyXG4gICAgICAgIGNvbnN0IGdsYkZpbGVOYW1lID0gZ2xURlByZWZpeCArIFwiLmdsYlwiO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlckxlbmd0aCA9IDEyO1xyXG4gICAgICAgIGNvbnN0IGNodW5rTGVuZ3RoUHJlZml4ID0gODtcclxuICAgICAgICBsZXQganNvbkxlbmd0aCA9IGpzb25UZXh0Lmxlbmd0aDtcclxuICAgICAgICBsZXQgZW5jb2RlZEpzb25UZXh0O1xyXG4gICAgICAgIC8vIG1ha2UgdXNlIG9mIFRleHRFbmNvZGVyIHdoZW4gYXZhaWxhYmxlXHJcbiAgICAgICAgaWYgKHR5cGVvZiBUZXh0RW5jb2RlciAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICBjb25zdCBlbmNvZGVyID0gbmV3IFRleHRFbmNvZGVyKCk7XHJcbiAgICAgICAgICAgIGVuY29kZWRKc29uVGV4dCA9IGVuY29kZXIuZW5jb2RlKGpzb25UZXh0KTtcclxuICAgICAgICAgICAganNvbkxlbmd0aCA9IGVuY29kZWRKc29uVGV4dC5sZW5ndGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGpzb25QYWRkaW5nID0gdGhpcy5fZ2V0UGFkZGluZyhqc29uTGVuZ3RoKTtcclxuICAgICAgICBjb25zdCBiaW5QYWRkaW5nID0gdGhpcy5fZ2V0UGFkZGluZyhiaW5hcnlCdWZmZXIuYnl0ZUxlbmd0aCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGJ5dGVMZW5ndGggPSBoZWFkZXJMZW5ndGggKyAyICogY2h1bmtMZW5ndGhQcmVmaXggKyBqc29uTGVuZ3RoICsganNvblBhZGRpbmcgKyBiaW5hcnlCdWZmZXIuYnl0ZUxlbmd0aCArIGJpblBhZGRpbmc7XHJcblxyXG4gICAgICAgIC8vIGhlYWRlclxyXG4gICAgICAgIGNvbnN0IGhlYWRlckJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcihoZWFkZXJMZW5ndGgpO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlckJ1ZmZlclZpZXcgPSBuZXcgRGF0YVZpZXcoaGVhZGVyQnVmZmVyKTtcclxuICAgICAgICBoZWFkZXJCdWZmZXJWaWV3LnNldFVpbnQzMigwLCAweDQ2NTQ2YzY3LCB0cnVlKTsgLy9nbFRGXHJcbiAgICAgICAgaGVhZGVyQnVmZmVyVmlldy5zZXRVaW50MzIoNCwgMiwgdHJ1ZSk7IC8vIHZlcnNpb25cclxuICAgICAgICBoZWFkZXJCdWZmZXJWaWV3LnNldFVpbnQzMig4LCBieXRlTGVuZ3RoLCB0cnVlKTsgLy8gdG90YWwgYnl0ZXMgaW4gZmlsZVxyXG5cclxuICAgICAgICAvLyBqc29uIGNodW5rXHJcbiAgICAgICAgY29uc3QganNvbkNodW5rQnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKGNodW5rTGVuZ3RoUHJlZml4ICsganNvbkxlbmd0aCArIGpzb25QYWRkaW5nKTtcclxuICAgICAgICBjb25zdCBqc29uQ2h1bmtCdWZmZXJWaWV3ID0gbmV3IERhdGFWaWV3KGpzb25DaHVua0J1ZmZlcik7XHJcbiAgICAgICAganNvbkNodW5rQnVmZmVyVmlldy5zZXRVaW50MzIoMCwganNvbkxlbmd0aCArIGpzb25QYWRkaW5nLCB0cnVlKTtcclxuICAgICAgICBqc29uQ2h1bmtCdWZmZXJWaWV3LnNldFVpbnQzMig0LCAweDRlNGY1MzRhLCB0cnVlKTtcclxuXHJcbiAgICAgICAgLy8ganNvbiBjaHVuayBieXRlc1xyXG4gICAgICAgIGNvbnN0IGpzb25EYXRhID0gbmV3IFVpbnQ4QXJyYXkoanNvbkNodW5rQnVmZmVyLCBjaHVua0xlbmd0aFByZWZpeCk7XHJcbiAgICAgICAgLy8gaWYgVGV4dEVuY29kZXIgd2FzIGF2YWlsYWJsZSwgd2UgY2FuIHNpbXBseSBjb3B5IHRoZSBlbmNvZGVkIGFycmF5XHJcbiAgICAgICAgaWYgKGVuY29kZWRKc29uVGV4dCkge1xyXG4gICAgICAgICAgICBqc29uRGF0YS5zZXQoZW5jb2RlZEpzb25UZXh0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBibGFua0NoYXJDb2RlID0gXCJfXCIuY2hhckNvZGVBdCgwKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBqc29uTGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNoYXJDb2RlID0ganNvblRleHQuY2hhckNvZGVBdChpKTtcclxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBjaGFyYWN0ZXIgZG9lc24ndCBmaXQgaW50byBhIHNpbmdsZSBVVEYtMTYgY29kZSB1bml0LCBqdXN0IHB1dCBhIGJsYW5rIGNoYXJhY3RlclxyXG4gICAgICAgICAgICAgICAgaWYgKGNoYXJDb2RlICE9IGpzb25UZXh0LmNvZGVQb2ludEF0KGkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAganNvbkRhdGFbaV0gPSBibGFua0NoYXJDb2RlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBqc29uRGF0YVtpXSA9IGNoYXJDb2RlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBqc29uIHBhZGRpbmdcclxuICAgICAgICBjb25zdCBqc29uUGFkZGluZ1ZpZXcgPSBuZXcgVWludDhBcnJheShqc29uQ2h1bmtCdWZmZXIsIGNodW5rTGVuZ3RoUHJlZml4ICsganNvbkxlbmd0aCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBqc29uUGFkZGluZzsgKytpKSB7XHJcbiAgICAgICAgICAgIGpzb25QYWRkaW5nVmlld1tpXSA9IDB4MjA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBiaW5hcnkgY2h1bmtcclxuICAgICAgICBjb25zdCBiaW5hcnlDaHVua0J1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcihjaHVua0xlbmd0aFByZWZpeCk7XHJcbiAgICAgICAgY29uc3QgYmluYXJ5Q2h1bmtCdWZmZXJWaWV3ID0gbmV3IERhdGFWaWV3KGJpbmFyeUNodW5rQnVmZmVyKTtcclxuICAgICAgICBiaW5hcnlDaHVua0J1ZmZlclZpZXcuc2V0VWludDMyKDAsIGJpbmFyeUJ1ZmZlci5ieXRlTGVuZ3RoICsgYmluUGFkZGluZywgdHJ1ZSk7XHJcbiAgICAgICAgYmluYXJ5Q2h1bmtCdWZmZXJWaWV3LnNldFVpbnQzMig0LCAweDAwNGU0OTQyLCB0cnVlKTtcclxuXHJcbiAgICAgICAgLy8gYmluYXJ5IHBhZGRpbmdcclxuICAgICAgICBjb25zdCBiaW5QYWRkaW5nQnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKGJpblBhZGRpbmcpO1xyXG4gICAgICAgIGNvbnN0IGJpblBhZGRpbmdWaWV3ID0gbmV3IFVpbnQ4QXJyYXkoYmluUGFkZGluZ0J1ZmZlcik7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiaW5QYWRkaW5nOyArK2kpIHtcclxuICAgICAgICAgICAgYmluUGFkZGluZ1ZpZXdbaV0gPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZ2xiRGF0YSA9IFtoZWFkZXJCdWZmZXIsIGpzb25DaHVua0J1ZmZlciwgYmluYXJ5Q2h1bmtCdWZmZXIsIGJpbmFyeUJ1ZmZlciwgYmluUGFkZGluZ0J1ZmZlcl07XHJcbiAgICAgICAgY29uc3QgZ2xiRmlsZSA9IG5ldyBCbG9iKGdsYkRhdGEsIHsgdHlwZTogXCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIiB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gbmV3IEdMVEZEYXRhKCk7XHJcbiAgICAgICAgY29udGFpbmVyLmZpbGVzW2dsYkZpbGVOYW1lXSA9IGdsYkZpbGU7XHJcblxyXG4gICAgICAgIHJldHVybiBjb250YWluZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfc2V0Tm9kZVRyYW5zZm9ybWF0aW9uKG5vZGU6IElOb2RlLCBiYWJ5bG9uVHJhbnNmb3JtTm9kZTogVHJhbnNmb3JtTm9kZSwgY29udmVydFRvUmlnaHRIYW5kZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICBpZiAoIWJhYnlsb25UcmFuc2Zvcm1Ob2RlLmdldFBpdm90UG9pbnQoKS5lcXVhbHNUb0Zsb2F0cygwLCAwLCAwKSkge1xyXG4gICAgICAgICAgICBUb29scy5XYXJuKFwiUGl2b3QgcG9pbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluIHRoZSBnbFRGIHNlcmlhbGl6ZXJcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWJhYnlsb25UcmFuc2Zvcm1Ob2RlLnBvc2l0aW9uLmVxdWFsc1RvRmxvYXRzKDAsIDAsIDApKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRyYW5zbGF0aW9uID0gVG1wVmVjdG9ycy5WZWN0b3IzWzBdLmNvcHlGcm9tKGJhYnlsb25UcmFuc2Zvcm1Ob2RlLnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgaWYgKGNvbnZlcnRUb1JpZ2h0SGFuZGVkKSB7XHJcbiAgICAgICAgICAgICAgICBDb252ZXJ0VG9SaWdodEhhbmRlZFBvc2l0aW9uKHRyYW5zbGF0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbm9kZS50cmFuc2xhdGlvbiA9IHRyYW5zbGF0aW9uLmFzQXJyYXkoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghYmFieWxvblRyYW5zZm9ybU5vZGUuc2NhbGluZy5lcXVhbHNUb0Zsb2F0cygxLCAxLCAxKSkge1xyXG4gICAgICAgICAgICBub2RlLnNjYWxlID0gYmFieWxvblRyYW5zZm9ybU5vZGUuc2NhbGluZy5hc0FycmF5KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCByb3RhdGlvblF1YXRlcm5pb24gPSBRdWF0ZXJuaW9uLkZyb21FdWxlckFuZ2xlcyhiYWJ5bG9uVHJhbnNmb3JtTm9kZS5yb3RhdGlvbi54LCBiYWJ5bG9uVHJhbnNmb3JtTm9kZS5yb3RhdGlvbi55LCBiYWJ5bG9uVHJhbnNmb3JtTm9kZS5yb3RhdGlvbi56KTtcclxuICAgICAgICBpZiAoYmFieWxvblRyYW5zZm9ybU5vZGUucm90YXRpb25RdWF0ZXJuaW9uKSB7XHJcbiAgICAgICAgICAgIHJvdGF0aW9uUXVhdGVybmlvbi5tdWx0aXBseUluUGxhY2UoYmFieWxvblRyYW5zZm9ybU5vZGUucm90YXRpb25RdWF0ZXJuaW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFRdWF0ZXJuaW9uLklzSWRlbnRpdHkocm90YXRpb25RdWF0ZXJuaW9uKSkge1xyXG4gICAgICAgICAgICBpZiAoY29udmVydFRvUmlnaHRIYW5kZWQpIHtcclxuICAgICAgICAgICAgICAgIENvbnZlcnRUb1JpZ2h0SGFuZGVkUm90YXRpb24ocm90YXRpb25RdWF0ZXJuaW9uKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbm9kZS5yb3RhdGlvbiA9IHJvdGF0aW9uUXVhdGVybmlvbi5ub3JtYWxpemUoKS5hc0FycmF5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3NldENhbWVyYVRyYW5zZm9ybWF0aW9uKG5vZGU6IElOb2RlLCBiYWJ5bG9uQ2FtZXJhOiBDYW1lcmEsIGNvbnZlcnRUb1JpZ2h0SGFuZGVkOiBib29sZWFuLCBwYXJlbnQ6IE51bGxhYmxlPE5vZGU+KTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgdHJhbnNsYXRpb24gPSBUbXBWZWN0b3JzLlZlY3RvcjNbMF07XHJcbiAgICAgICAgY29uc3Qgcm90YXRpb24gPSBUbXBWZWN0b3JzLlF1YXRlcm5pb25bMF07XHJcblxyXG4gICAgICAgIGlmIChwYXJlbnQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgLy8gQ2FtZXJhLmdldFdvcmxkTWF0cml4IHJldHVybnMgZ2xvYmFsIGNvb3JkaW5hdGVzLiBHTFRGIG5vZGUgbXVzdCB1c2UgbG9jYWwgY29vcmRpbmF0ZXMuIElmIGNhbWVyYSBoYXMgcGFyZW50IHdlIG5lZWQgdG8gdXNlIGxvY2FsIHRyYW5zbGF0aW9uL3JvdGF0aW9uLlxyXG4gICAgICAgICAgICBjb25zdCBwYXJlbnRXb3JsZE1hdHJpeCA9IE1hdHJpeC5JbnZlcnQocGFyZW50LmdldFdvcmxkTWF0cml4KCkpO1xyXG4gICAgICAgICAgICBjb25zdCBjYW1lcmFXb3JsZE1hdHJpeCA9IGJhYnlsb25DYW1lcmEuZ2V0V29ybGRNYXRyaXgoKTtcclxuICAgICAgICAgICAgY29uc3QgY2FtZXJhTG9jYWwgPSBjYW1lcmFXb3JsZE1hdHJpeC5tdWx0aXBseShwYXJlbnRXb3JsZE1hdHJpeCk7XHJcbiAgICAgICAgICAgIGNhbWVyYUxvY2FsLmRlY29tcG9zZSh1bmRlZmluZWQsIHJvdGF0aW9uLCB0cmFuc2xhdGlvbik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYmFieWxvbkNhbWVyYS5nZXRXb3JsZE1hdHJpeCgpLmRlY29tcG9zZSh1bmRlZmluZWQsIHJvdGF0aW9uLCB0cmFuc2xhdGlvbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRyYW5zbGF0aW9uLmVxdWFsc1RvRmxvYXRzKDAsIDAsIDApKSB7XHJcbiAgICAgICAgICAgIG5vZGUudHJhbnNsYXRpb24gPSB0cmFuc2xhdGlvbi5hc0FycmF5KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIVF1YXRlcm5pb24uSXNJZGVudGl0eShyb3RhdGlvbikpIHtcclxuICAgICAgICAgICAgbm9kZS5yb3RhdGlvbiA9IHJvdGF0aW9uLmFzQXJyYXkoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRXhwb3J0IGJhYnlsb24gY2FtZXJhcyB0byBnbFRGIGNhbWVyYXNcclxuICAgIHByaXZhdGUgX2xpc3RBdmFpbGFibGVDYW1lcmFzKCk6IHZvaWQge1xyXG4gICAgICAgIGZvciAoY29uc3QgY2FtZXJhIG9mIHRoaXMuX2JhYnlsb25TY2VuZS5jYW1lcmFzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdsVEZDYW1lcmE6IElDYW1lcmEgPSB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBjYW1lcmEubW9kZSA9PT0gQ2FtZXJhLlBFUlNQRUNUSVZFX0NBTUVSQSA/IENhbWVyYVR5cGUuUEVSU1BFQ1RJVkUgOiBDYW1lcmFUeXBlLk9SVEhPR1JBUEhJQyxcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjYW1lcmEubmFtZSkge1xyXG4gICAgICAgICAgICAgICAgZ2xURkNhbWVyYS5uYW1lID0gY2FtZXJhLm5hbWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChnbFRGQ2FtZXJhLnR5cGUgPT09IENhbWVyYVR5cGUuUEVSU1BFQ1RJVkUpIHtcclxuICAgICAgICAgICAgICAgIGdsVEZDYW1lcmEucGVyc3BlY3RpdmUgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXNwZWN0UmF0aW86IGNhbWVyYS5nZXRFbmdpbmUoKS5nZXRBc3BlY3RSYXRpbyhjYW1lcmEpLFxyXG4gICAgICAgICAgICAgICAgICAgIHlmb3Y6IGNhbWVyYS5mb3ZNb2RlID09PSBDYW1lcmEuRk9WTU9ERV9WRVJUSUNBTF9GSVhFRCA/IGNhbWVyYS5mb3YgOiBjYW1lcmEuZm92ICogY2FtZXJhLmdldEVuZ2luZSgpLmdldEFzcGVjdFJhdGlvKGNhbWVyYSksXHJcbiAgICAgICAgICAgICAgICAgICAgem5lYXI6IGNhbWVyYS5taW5aLFxyXG4gICAgICAgICAgICAgICAgICAgIHpmYXI6IGNhbWVyYS5tYXhaLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChnbFRGQ2FtZXJhLnR5cGUgPT09IENhbWVyYVR5cGUuT1JUSE9HUkFQSElDKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBoYWxmV2lkdGggPSBjYW1lcmEub3J0aG9MZWZ0ICYmIGNhbWVyYS5vcnRob1JpZ2h0ID8gMC41ICogKGNhbWVyYS5vcnRob1JpZ2h0IC0gY2FtZXJhLm9ydGhvTGVmdCkgOiBjYW1lcmEuZ2V0RW5naW5lKCkuZ2V0UmVuZGVyV2lkdGgoKSAqIDAuNTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGhhbGZIZWlnaHQgPSBjYW1lcmEub3J0aG9Cb3R0b20gJiYgY2FtZXJhLm9ydGhvVG9wID8gMC41ICogKGNhbWVyYS5vcnRob1RvcCAtIGNhbWVyYS5vcnRob0JvdHRvbSkgOiBjYW1lcmEuZ2V0RW5naW5lKCkuZ2V0UmVuZGVySGVpZ2h0KCkgKiAwLjU7XHJcbiAgICAgICAgICAgICAgICBnbFRGQ2FtZXJhLm9ydGhvZ3JhcGhpYyA9IHtcclxuICAgICAgICAgICAgICAgICAgICB4bWFnOiBoYWxmV2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgeW1hZzogaGFsZkhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICB6bmVhcjogY2FtZXJhLm1pblosXHJcbiAgICAgICAgICAgICAgICAgICAgemZhcjogY2FtZXJhLm1heFosXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2NhbWVyYXNNYXAuc2V0KGNhbWVyYSwgZ2xURkNhbWVyYSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIENsZWFudXAgdW51c2VkIGNhbWVyYXMgYW5kIGFzc2lnbiBpbmRleCB0byBub2Rlcy5cclxuICAgIHByaXZhdGUgX2V4cG9ydEFuZEFzc2lnbkNhbWVyYXMoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgZ2x0ZkNhbWVyYXMgPSBBcnJheS5mcm9tKHRoaXMuX2NhbWVyYXNNYXAudmFsdWVzKCkpO1xyXG4gICAgICAgIGZvciAoY29uc3QgZ2x0ZkNhbWVyYSBvZiBnbHRmQ2FtZXJhcykge1xyXG4gICAgICAgICAgICBjb25zdCB1c2VkTm9kZXMgPSB0aGlzLl9ub2Rlc0NhbWVyYU1hcC5nZXQoZ2x0ZkNhbWVyYSk7XHJcbiAgICAgICAgICAgIGlmICh1c2VkTm9kZXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2FtZXJhcy5wdXNoKGdsdGZDYW1lcmEpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBub2RlIG9mIHVzZWROb2Rlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuY2FtZXJhID0gdGhpcy5fY2FtZXJhcy5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEJ1aWxkcyBhbGwgc2tpbnMgaW4gdGhlIHNraW5zIGFycmF5IHNvIG5vZGVzIGNhbiByZWZlcmVuY2UgaXQgZHVyaW5nIG5vZGUgcGFyc2luZy5cclxuICAgIHByaXZhdGUgX2xpc3RBdmFpbGFibGVTa2VsZXRvbnMoKTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChjb25zdCBza2VsZXRvbiBvZiB0aGlzLl9iYWJ5bG9uU2NlbmUuc2tlbGV0b25zKSB7XHJcbiAgICAgICAgICAgIGlmIChza2VsZXRvbi5ib25lcy5sZW5ndGggPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNraW46IElTa2luID0geyBqb2ludHM6IFtdIH07XHJcbiAgICAgICAgICAgIHRoaXMuX3NraW5NYXAuc2V0KHNrZWxldG9uLCBza2luKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZXhwb3J0QW5kQXNzaWduU2tlbGV0b25zKCkge1xyXG4gICAgICAgIGZvciAoY29uc3Qgc2tlbGV0b24gb2YgdGhpcy5fYmFieWxvblNjZW5lLnNrZWxldG9ucykge1xyXG4gICAgICAgICAgICBpZiAoc2tlbGV0b24uYm9uZXMubGVuZ3RoIDw9IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBza2luID0gdGhpcy5fc2tpbk1hcC5nZXQoc2tlbGV0b24pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNraW4gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgYm9uZUluZGV4TWFwOiB7IFtpbmRleDogbnVtYmVyXTogQm9uZSB9ID0ge307XHJcbiAgICAgICAgICAgIGNvbnN0IGludmVyc2VCaW5kTWF0cmljZXM6IE1hdHJpeFtdID0gW107XHJcblxyXG4gICAgICAgICAgICBsZXQgbWF4Qm9uZUluZGV4ID0gLTE7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2tlbGV0b24uYm9uZXMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJvbmUgPSBza2VsZXRvbi5ib25lc1tpXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJvbmVJbmRleCA9IGJvbmUuZ2V0SW5kZXgoKSA/PyBpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJvbmVJbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBib25lSW5kZXhNYXBbYm9uZUluZGV4XSA9IGJvbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJvbmVJbmRleCA+IG1heEJvbmVJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhCb25lSW5kZXggPSBib25lSW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBTZXQgam9pbnRzIGluZGV4IHRvIHNjZW5lIG5vZGUuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGJvbmVJbmRleCA9IDA7IGJvbmVJbmRleCA8PSBtYXhCb25lSW5kZXg7ICsrYm9uZUluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBib25lID0gYm9uZUluZGV4TWFwW2JvbmVJbmRleF07XHJcbiAgICAgICAgICAgICAgICBpbnZlcnNlQmluZE1hdHJpY2VzLnB1c2goYm9uZS5nZXRBYnNvbHV0ZUludmVyc2VCaW5kTWF0cml4KCkpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdHJhbnNmb3JtTm9kZSA9IGJvbmUuZ2V0VHJhbnNmb3JtTm9kZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0cmFuc2Zvcm1Ob2RlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm9kZUlEID0gdGhpcy5fbm9kZU1hcC5nZXQodHJhbnNmb3JtTm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRyYW5zZm9ybU5vZGUgJiYgbm9kZUlEICE9PSBudWxsICYmIG5vZGVJRCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNraW4uam9pbnRzLnB1c2gobm9kZUlEKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBUb29scy5XYXJuKFwiRXhwb3J0aW5nIGEgYm9uZSB3aXRob3V0IGEgbGlua2VkIHRyYW5zZm9ybSBub2RlIGlzIGN1cnJlbnRseSB1bnN1cHBvcnRlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIFRvb2xzLldhcm4oXCJFeHBvcnRpbmcgYSBib25lIHdpdGhvdXQgYSBsaW5rZWQgdHJhbnNmb3JtIG5vZGUgaXMgY3VycmVudGx5IHVuc3VwcG9ydGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBOb2RlcyB0aGF0IHVzZSB0aGlzIHNraW4uXHJcbiAgICAgICAgICAgIGNvbnN0IHNraW5lZE5vZGVzID0gdGhpcy5fbm9kZXNTa2luTWFwLmdldChza2luKTtcclxuXHJcbiAgICAgICAgICAgIC8vIE9ubHkgY3JlYXRlIHNrZWxldG9uIGlmIGl0IGhhcyBhdCBsZWFzdCBvbmUgam9pbnQgYW5kIGlzIHVzZWQgYnkgYSBtZXNoLlxyXG4gICAgICAgICAgICBpZiAoc2tpbi5qb2ludHMubGVuZ3RoID4gMCAmJiBza2luZWROb2RlcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBQdXQgSUJNIGRhdGEgaW50byBUeXBlZEFycmF5YnVmZmVyIHZpZXdcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJ5dGVMZW5ndGggPSBpbnZlcnNlQmluZE1hdHJpY2VzLmxlbmd0aCAqIDY0OyAvLyBBbHdheXMgYSA0IHggNCBtYXRyaXggb2YgMzIgYml0IGZsb2F0XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbnZlcnNlQmluZE1hdHJpY2VzRGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkoYnl0ZUxlbmd0aCAvIDQpO1xyXG4gICAgICAgICAgICAgICAgaW52ZXJzZUJpbmRNYXRyaWNlcy5mb3JFYWNoKChtYXQ6IE1hdHJpeCwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGludmVyc2VCaW5kTWF0cmljZXNEYXRhLnNldChtYXQubSwgaW5kZXggKiAxNik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBidWZmZXIgdmlldyBhbmQgYWNjZXNzb3JcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJ1ZmZlclZpZXcgPSB0aGlzLl9idWZmZXJNYW5hZ2VyLmNyZWF0ZUJ1ZmZlclZpZXcoaW52ZXJzZUJpbmRNYXRyaWNlc0RhdGEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYWNjZXNzb3JzLnB1c2godGhpcy5fYnVmZmVyTWFuYWdlci5jcmVhdGVBY2Nlc3NvcihidWZmZXJWaWV3LCBBY2Nlc3NvclR5cGUuTUFUNCwgQWNjZXNzb3JDb21wb25lbnRUeXBlLkZMT0FULCBpbnZlcnNlQmluZE1hdHJpY2VzLmxlbmd0aCkpO1xyXG4gICAgICAgICAgICAgICAgc2tpbi5pbnZlcnNlQmluZE1hdHJpY2VzID0gdGhpcy5fYWNjZXNzb3JzLmxlbmd0aCAtIDE7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2tpbnMucHVzaChza2luKTtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgc2tpbmVkTm9kZSBvZiBza2luZWROb2Rlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNraW5lZE5vZGUuc2tpbiA9IHRoaXMuX3NraW5zLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBfZXhwb3J0U2NlbmVBc3luYygpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBjb25zdCBzY2VuZTogSVNjZW5lID0geyBub2RlczogW10gfTtcclxuXHJcbiAgICAgICAgLy8gU2NlbmUgbWV0YWRhdGFcclxuICAgICAgICBpZiAodGhpcy5fYmFieWxvblNjZW5lLm1ldGFkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9vcHRpb25zLm1ldGFkYXRhU2VsZWN0b3IpIHtcclxuICAgICAgICAgICAgICAgIHNjZW5lLmV4dHJhcyA9IHRoaXMuX29wdGlvbnMubWV0YWRhdGFTZWxlY3Rvcih0aGlzLl9iYWJ5bG9uU2NlbmUubWV0YWRhdGEpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JhYnlsb25TY2VuZS5tZXRhZGF0YS5nbHRmKSB7XHJcbiAgICAgICAgICAgICAgICBzY2VuZS5leHRyYXMgPSB0aGlzLl9iYWJ5bG9uU2NlbmUubWV0YWRhdGEuZ2x0Zi5leHRyYXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vICBUT0RPOlxyXG4gICAgICAgIC8vICBkZWFsIHdpdGggdGhpcyBmcm9tIHRoZSBsb2FkZXI6XHJcbiAgICAgICAgLy8gIGJhYnlsb25NYXRlcmlhbC5pbnZlcnROb3JtYWxNYXBYID0gIXRoaXMuX2JhYnlsb25TY2VuZS51c2VSaWdodEhhbmRlZFN5c3RlbTtcclxuICAgICAgICAvLyAgYmFieWxvbk1hdGVyaWFsLmludmVydE5vcm1hbE1hcFkgPSB0aGlzLl9iYWJ5bG9uU2NlbmUudXNlUmlnaHRIYW5kZWRTeXN0ZW07XHJcblxyXG4gICAgICAgIGNvbnN0IHJvb3ROb2Rlc1JIID0gbmV3IEFycmF5PE5vZGU+KCk7XHJcbiAgICAgICAgY29uc3Qgcm9vdE5vZGVzTEggPSBuZXcgQXJyYXk8Tm9kZT4oKTtcclxuICAgICAgICBjb25zdCByb290Tm9vcE5vZGVzUkggPSBuZXcgQXJyYXk8Tm9kZT4oKTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCByb290Tm9kZSBvZiB0aGlzLl9iYWJ5bG9uU2NlbmUucm9vdE5vZGVzKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9vcHRpb25zLnJlbW92ZU5vb3BSb290Tm9kZXMgJiYgIXRoaXMuX29wdGlvbnMuaW5jbHVkZUNvb3JkaW5hdGVTeXN0ZW1Db252ZXJzaW9uTm9kZXMgJiYgSXNOb29wTm9kZShyb290Tm9kZSwgdGhpcy5fYmFieWxvblNjZW5lLnVzZVJpZ2h0SGFuZGVkU3lzdGVtKSkge1xyXG4gICAgICAgICAgICAgICAgcm9vdE5vb3BOb2Rlc1JILnB1c2goLi4ucm9vdE5vZGUuZ2V0Q2hpbGRyZW4oKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYmFieWxvblNjZW5lLnVzZVJpZ2h0SGFuZGVkU3lzdGVtKSB7XHJcbiAgICAgICAgICAgICAgICByb290Tm9kZXNSSC5wdXNoKHJvb3ROb2RlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJvb3ROb2Rlc0xILnB1c2gocm9vdE5vZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9saXN0QXZhaWxhYmxlQ2FtZXJhcygpO1xyXG4gICAgICAgIHRoaXMuX2xpc3RBdmFpbGFibGVTa2VsZXRvbnMoKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3RhdGVMSCA9IG5ldyBFeHBvcnRlclN0YXRlKHRydWUsIGZhbHNlKTtcclxuICAgICAgICBzY2VuZS5ub2Rlcy5wdXNoKC4uLihhd2FpdCB0aGlzLl9leHBvcnROb2Rlc0FzeW5jKHJvb3ROb2Rlc0xILCBzdGF0ZUxIKSkpO1xyXG4gICAgICAgIGNvbnN0IHN0YXRlUkggPSBuZXcgRXhwb3J0ZXJTdGF0ZShmYWxzZSwgZmFsc2UpO1xyXG4gICAgICAgIHNjZW5lLm5vZGVzLnB1c2goLi4uKGF3YWl0IHRoaXMuX2V4cG9ydE5vZGVzQXN5bmMocm9vdE5vZGVzUkgsIHN0YXRlUkgpKSk7XHJcbiAgICAgICAgY29uc3Qgbm9vcFJIID0gbmV3IEV4cG9ydGVyU3RhdGUoZmFsc2UsIHRydWUpO1xyXG4gICAgICAgIHNjZW5lLm5vZGVzLnB1c2goLi4uKGF3YWl0IHRoaXMuX2V4cG9ydE5vZGVzQXN5bmMocm9vdE5vb3BOb2Rlc1JILCBub29wUkgpKSk7XHJcblxyXG4gICAgICAgIGlmIChzY2VuZS5ub2Rlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5fc2NlbmVzLnB1c2goc2NlbmUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fZXhwb3J0QW5kQXNzaWduQ2FtZXJhcygpO1xyXG4gICAgICAgIHRoaXMuX2V4cG9ydEFuZEFzc2lnblNrZWxldG9ucygpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fYmFieWxvblNjZW5lLmFuaW1hdGlvbkdyb3Vwcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgX0dMVEZBbmltYXRpb24uX0NyZWF0ZU5vZGVBbmRNb3JwaEFuaW1hdGlvbkZyb21BbmltYXRpb25Hcm91cHMoXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9iYWJ5bG9uU2NlbmUsXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hbmltYXRpb25zLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbm9kZU1hcCxcclxuICAgICAgICAgICAgICAgIHRoaXMuX2J1ZmZlck1hbmFnZXIsXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9idWZmZXJWaWV3cyxcclxuICAgICAgICAgICAgICAgIHRoaXMuX2FjY2Vzc29ycyxcclxuICAgICAgICAgICAgICAgIHRoaXMuX2FuaW1hdGlvblNhbXBsZVJhdGUsXHJcbiAgICAgICAgICAgICAgICBzdGF0ZUxILmdldE5vZGVzU2V0KCksXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9vcHRpb25zLnNob3VsZEV4cG9ydEFuaW1hdGlvblxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9zaG91bGRFeHBvcnROb2RlKGJhYnlsb25Ob2RlOiBOb2RlKTogYm9vbGVhbiB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMuX3Nob3VsZEV4cG9ydE5vZGVNYXAuZ2V0KGJhYnlsb25Ob2RlKTtcclxuXHJcbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuX29wdGlvbnMuc2hvdWxkRXhwb3J0Tm9kZShiYWJ5bG9uTm9kZSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Nob3VsZEV4cG9ydE5vZGVNYXAuc2V0KGJhYnlsb25Ob2RlLCByZXN1bHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIF9leHBvcnROb2Rlc0FzeW5jKGJhYnlsb25Sb290Tm9kZXM6IE5vZGVbXSwgc3RhdGU6IEV4cG9ydGVyU3RhdGUpOiBQcm9taXNlPG51bWJlcltdPiB7XHJcbiAgICAgICAgY29uc3Qgbm9kZXMgPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xyXG5cclxuICAgICAgICB0aGlzLl9leHBvcnRCdWZmZXJzKGJhYnlsb25Sb290Tm9kZXMsIHN0YXRlKTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBiYWJ5bG9uTm9kZSBvZiBiYWJ5bG9uUm9vdE5vZGVzKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuX2V4cG9ydE5vZGVBc3luYyhiYWJ5bG9uTm9kZSwgbm9kZXMsIHN0YXRlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBub2RlcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jb2xsZWN0QnVmZmVycyhcclxuICAgICAgICBiYWJ5bG9uTm9kZTogTm9kZSxcclxuICAgICAgICBidWZmZXJUb1ZlcnRleEJ1ZmZlcnNNYXA6IE1hcDxCdWZmZXIsIFZlcnRleEJ1ZmZlcltdPixcclxuICAgICAgICB2ZXJ0ZXhCdWZmZXJUb01lc2hlc01hcDogTWFwPFZlcnRleEJ1ZmZlciwgTWVzaFtdPixcclxuICAgICAgICBtb3JwaFRhcmdldHNUb01lc2hlc01hcDogTWFwPE1vcnBoVGFyZ2V0LCBNZXNoW10+LFxyXG4gICAgICAgIHN0YXRlOiBFeHBvcnRlclN0YXRlXHJcbiAgICApOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5fc2hvdWxkRXhwb3J0Tm9kZShiYWJ5bG9uTm9kZSkgJiYgYmFieWxvbk5vZGUgaW5zdGFuY2VvZiBNZXNoICYmIGJhYnlsb25Ob2RlLmdlb21ldHJ5KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZlcnRleEJ1ZmZlcnMgPSBiYWJ5bG9uTm9kZS5nZW9tZXRyeS5nZXRWZXJ0ZXhCdWZmZXJzKCk7XHJcbiAgICAgICAgICAgIGlmICh2ZXJ0ZXhCdWZmZXJzKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtpbmQgaW4gdmVydGV4QnVmZmVycykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghSXNTdGFuZGFyZFZlcnRleEF0dHJpYnV0ZShraW5kKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmVydGV4QnVmZmVyID0gdmVydGV4QnVmZmVyc1traW5kXTtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5zZXRIYXNWZXJ0ZXhDb2xvckFscGhhKHZlcnRleEJ1ZmZlciwgYmFieWxvbk5vZGUuaGFzVmVydGV4QWxwaGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJ1ZmZlciA9IHZlcnRleEJ1ZmZlci5fYnVmZmVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZlcnRleEJ1ZmZlckFycmF5ID0gYnVmZmVyVG9WZXJ0ZXhCdWZmZXJzTWFwLmdldChidWZmZXIpIHx8IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1ZmZlclRvVmVydGV4QnVmZmVyc01hcC5zZXQoYnVmZmVyLCB2ZXJ0ZXhCdWZmZXJBcnJheSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZlcnRleEJ1ZmZlckFycmF5LmluZGV4T2YodmVydGV4QnVmZmVyKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGV4QnVmZmVyQXJyYXkucHVzaCh2ZXJ0ZXhCdWZmZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVzaGVzID0gdmVydGV4QnVmZmVyVG9NZXNoZXNNYXAuZ2V0KHZlcnRleEJ1ZmZlcikgfHwgW107XHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGV4QnVmZmVyVG9NZXNoZXNNYXAuc2V0KHZlcnRleEJ1ZmZlciwgbWVzaGVzKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobWVzaGVzLmluZGV4T2YoYmFieWxvbk5vZGUpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNoZXMucHVzaChiYWJ5bG9uTm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtb3JwaFRhcmdldE1hbmFnZXIgPSBiYWJ5bG9uTm9kZS5tb3JwaFRhcmdldE1hbmFnZXI7XHJcblxyXG4gICAgICAgICAgICBpZiAobW9ycGhUYXJnZXRNYW5hZ2VyKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBtb3JwaEluZGV4ID0gMDsgbW9ycGhJbmRleCA8IG1vcnBoVGFyZ2V0TWFuYWdlci5udW1UYXJnZXRzOyBtb3JwaEluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtb3JwaFRhcmdldCA9IG1vcnBoVGFyZ2V0TWFuYWdlci5nZXRUYXJnZXQobW9ycGhJbmRleCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc2hlcyA9IG1vcnBoVGFyZ2V0c1RvTWVzaGVzTWFwLmdldChtb3JwaFRhcmdldCkgfHwgW107XHJcbiAgICAgICAgICAgICAgICAgICAgbW9ycGhUYXJnZXRzVG9NZXNoZXNNYXAuc2V0KG1vcnBoVGFyZ2V0LCBtZXNoZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtZXNoZXMuaW5kZXhPZihiYWJ5bG9uTm9kZSkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc2hlcy5wdXNoKGJhYnlsb25Ob2RlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgYmFieWxvbkNoaWxkTm9kZSBvZiBiYWJ5bG9uTm9kZS5nZXRDaGlsZHJlbigpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbGxlY3RCdWZmZXJzKGJhYnlsb25DaGlsZE5vZGUsIGJ1ZmZlclRvVmVydGV4QnVmZmVyc01hcCwgdmVydGV4QnVmZmVyVG9NZXNoZXNNYXAsIG1vcnBoVGFyZ2V0c1RvTWVzaGVzTWFwLCBzdGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2V4cG9ydEJ1ZmZlcnMoYmFieWxvblJvb3ROb2RlczogTm9kZVtdLCBzdGF0ZTogRXhwb3J0ZXJTdGF0ZSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGJ1ZmZlclRvVmVydGV4QnVmZmVyc01hcCA9IG5ldyBNYXA8QnVmZmVyLCBWZXJ0ZXhCdWZmZXJbXT4oKTtcclxuICAgICAgICBjb25zdCB2ZXJ0ZXhCdWZmZXJUb01lc2hlc01hcCA9IG5ldyBNYXA8VmVydGV4QnVmZmVyLCBNZXNoW10+KCk7XHJcbiAgICAgICAgY29uc3QgbW9ycGhUYWdldHNNZXNoZXNNYXAgPSBuZXcgTWFwPE1vcnBoVGFyZ2V0LCBNZXNoW10+KCk7XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgYmFieWxvbk5vZGUgb2YgYmFieWxvblJvb3ROb2Rlcykge1xyXG4gICAgICAgICAgICB0aGlzLl9jb2xsZWN0QnVmZmVycyhiYWJ5bG9uTm9kZSwgYnVmZmVyVG9WZXJ0ZXhCdWZmZXJzTWFwLCB2ZXJ0ZXhCdWZmZXJUb01lc2hlc01hcCwgbW9ycGhUYWdldHNNZXNoZXNNYXAsIHN0YXRlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGJ1ZmZlcnMgPSBBcnJheS5mcm9tKGJ1ZmZlclRvVmVydGV4QnVmZmVyc01hcC5rZXlzKCkpO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGJ1ZmZlciBvZiBidWZmZXJzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBidWZmZXIuZ2V0RGF0YSgpO1xyXG4gICAgICAgICAgICBpZiAoIWRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkJ1ZmZlciBkYXRhIGlzIG5vdCBhdmFpbGFibGVcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHZlcnRleEJ1ZmZlcnMgPSBidWZmZXJUb1ZlcnRleEJ1ZmZlcnNNYXAuZ2V0KGJ1ZmZlcik7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXZlcnRleEJ1ZmZlcnMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBieXRlU3RyaWRlID0gdmVydGV4QnVmZmVyc1swXS5ieXRlU3RyaWRlO1xyXG4gICAgICAgICAgICBpZiAodmVydGV4QnVmZmVycy5zb21lKCh2ZXJ0ZXhCdWZmZXIpID0+IHZlcnRleEJ1ZmZlci5ieXRlU3RyaWRlICE9PSBieXRlU3RyaWRlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVmVydGV4IGJ1ZmZlcnMgcG9pbnRpbmcgdG8gdGhlIHNhbWUgYnVmZmVyIG11c3QgaGF2ZSB0aGUgc2FtZSBieXRlIHN0cmlkZVwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgYnl0ZXMgPSBEYXRhQXJyYXlUb1VpbnQ4QXJyYXkoZGF0YSkuc2xpY2UoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEFwcGx5IGNvbnZlcnNpb25zIHRvIGJ1ZmZlciBkYXRhIGluLXBsYWNlLlxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHZlcnRleEJ1ZmZlciBvZiB2ZXJ0ZXhCdWZmZXJzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IGJ5dGVPZmZzZXQsIGJ5dGVTdHJpZGUsIHR5cGUsIG5vcm1hbGl6ZWQgfSA9IHZlcnRleEJ1ZmZlcjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNpemUgPSB2ZXJ0ZXhCdWZmZXIuZ2V0U2l6ZSgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWVzaGVzID0gdmVydGV4QnVmZmVyVG9NZXNoZXNNYXAuZ2V0KHZlcnRleEJ1ZmZlcikhO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWF4VG90YWxWZXJ0aWNlcyA9IG1lc2hlcy5yZWR1Y2UoKG1heCwgY3VycmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW50LmdldFRvdGFsVmVydGljZXMoKSA+IG1heCA/IGN1cnJlbnQuZ2V0VG90YWxWZXJ0aWNlcygpIDogbWF4O1xyXG4gICAgICAgICAgICAgICAgfSwgLU51bWJlci5NQVhfVkFMVUUpOyAvLyBUbyBlbnN1cmUgbm90aGluZyBpcyBtaXNzZWQgd2hlbiBlbnVtZXJhdGluZywgYnV0IG1heSBub3QgYmUgbmVjZXNzYXJ5LlxyXG5cclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodmVydGV4QnVmZmVyLmdldEtpbmQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIE5vcm1hbGl6ZSBub3JtYWxzIGFuZCB0YW5nZW50cy5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5Ob3JtYWxLaW5kOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLlRhbmdlbnRLaW5kOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEVudW1lcmF0ZUZsb2F0VmFsdWVzKGJ5dGVzLCBieXRlT2Zmc2V0LCBieXRlU3RyaWRlLCBzaXplLCB0eXBlLCBtYXhUb3RhbFZlcnRpY2VzICogc2l6ZSwgbm9ybWFsaXplZCwgKHZhbHVlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGVuZ3RoID0gTWF0aC5zcXJ0KHZhbHVlc1swXSAqIHZhbHVlc1swXSArIHZhbHVlc1sxXSAqIHZhbHVlc1sxXSArIHZhbHVlc1syXSAqIHZhbHVlc1syXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGludkxlbmd0aCA9IDEgLyBsZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzWzBdICo9IGludkxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXNbMV0gKj0gaW52TGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlc1syXSAqPSBpbnZMZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ29udmVydCBTdGFuZGFyZE1hdGVyaWFsIHZlcnRleCBjb2xvcnMgZnJvbSBnYW1tYSB0byBsaW5lYXIgc3BhY2UuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuQ29sb3JLaW5kOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0ZE1hdGVyaWFsQ291bnQgPSBtZXNoZXMuZmlsdGVyKChtZXNoKSA9PiBtZXNoLm1hdGVyaWFsIGluc3RhbmNlb2YgU3RhbmRhcmRNYXRlcmlhbCB8fCBtZXNoLm1hdGVyaWFsID09IG51bGwpLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGRNYXRlcmlhbENvdW50ID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrOyAvLyBCdWZmZXIgbm90IHVzZWQgYnkgU3RhbmRhcmRNYXRlcmlhbHMsIHNvIG5vIGNvbnZlcnNpb24gbmVlZGVkLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBJbXBsZW1lbnQgdGhpcyBjYXNlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RkTWF0ZXJpYWxDb3VudCAhPSBtZXNoZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dnZXIuV2FybihcIk5vdCBjb252ZXJ0aW5nIHZlcnRleCBjb2xvciBzcGFjZSwgYXMgYnVmZmVyIGlzIHNoYXJlZCBieSBTdGFuZGFyZE1hdGVyaWFscyBhbmQgb3RoZXIgbWF0ZXJpYWwgdHlwZXMuIFJlc3VsdHMgbWF5IGxvb2sgaW5jb3JyZWN0LlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PSBWZXJ0ZXhCdWZmZXIuVU5TSUdORURfQllURSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nZ2VyLldhcm4oXCJDb252ZXJ0aW5nIHVpbnQ4IHZlcnRleCBjb2xvcnMgdG8gbGluZWFyIHNwYWNlLiBSZXN1bHRzIG1heSBsb29rIGluY29ycmVjdC5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZlcnRleERhdGEzID0gbmV3IENvbG9yMygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2ZXJ0ZXhEYXRhNCA9IG5ldyBDb2xvcjQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXNlRXhhY3RTcmdiQ29udmVyc2lvbnMgPSB0aGlzLl9iYWJ5bG9uU2NlbmUuZ2V0RW5naW5lKCkudXNlRXhhY3RTcmdiQ29udmVyc2lvbnM7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBFbnVtZXJhdGVGbG9hdFZhbHVlcyhieXRlcywgYnl0ZU9mZnNldCwgYnl0ZVN0cmlkZSwgc2l6ZSwgdHlwZSwgbWF4VG90YWxWZXJ0aWNlcyAqIHNpemUsIG5vcm1hbGl6ZWQsICh2YWx1ZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVzaW5nIHNlcGFyYXRlIENvbG9yMyBhbmQgQ29sb3I0IG9iamVjdHMgdG8gZW5zdXJlIHRoZSByaWdodCBmdW5jdGlvbnMgYXJlIGNhbGxlZC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZXMubGVuZ3RoID09PSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGV4RGF0YTMuZnJvbUFycmF5KHZhbHVlcywgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGV4RGF0YTMudG9MaW5lYXJTcGFjZVRvUmVmKHZlcnRleERhdGEzLCB1c2VFeGFjdFNyZ2JDb252ZXJzaW9ucyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGV4RGF0YTMudG9BcnJheSh2YWx1ZXMsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0ZXhEYXRhNC5mcm9tQXJyYXkodmFsdWVzLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0ZXhEYXRhNC50b0xpbmVhclNwYWNlVG9SZWYodmVydGV4RGF0YTQsIHVzZUV4YWN0U3JnYkNvbnZlcnNpb25zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0ZXhEYXRhNC50b0FycmF5KHZhbHVlcywgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gUGVyZm9ybXMgY29vcmRpbmF0ZSBjb252ZXJzaW9uIGlmIG5lZWRlZCAob25seSBmb3IgcG9zaXRpb24sIG5vcm1hbCBhbmQgdGFuZ2VudCkuXHJcbiAgICAgICAgICAgIGlmIChzdGF0ZS5jb252ZXJ0VG9SaWdodEhhbmRlZCkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCB2ZXJ0ZXhCdWZmZXIgb2YgdmVydGV4QnVmZmVycykge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodmVydGV4QnVmZmVyLmdldEtpbmQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5Qb3NpdGlvbktpbmQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLk5vcm1hbEtpbmQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLlRhbmdlbnRLaW5kOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG1lc2ggb2YgdmVydGV4QnVmZmVyVG9NZXNoZXNNYXAuZ2V0KHZlcnRleEJ1ZmZlcikhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBieXRlT2Zmc2V0LCBieXRlU3RyaWRlLCB0eXBlLCBub3JtYWxpemVkIH0gPSB2ZXJ0ZXhCdWZmZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2l6ZSA9IHZlcnRleEJ1ZmZlci5nZXRTaXplKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRW51bWVyYXRlRmxvYXRWYWx1ZXMoYnl0ZXMsIGJ5dGVPZmZzZXQsIGJ5dGVTdHJpZGUsIHNpemUsIHR5cGUsIG1lc2guZ2V0VG90YWxWZXJ0aWNlcygpICogc2l6ZSwgbm9ybWFsaXplZCwgKHZhbHVlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXNbMF0gPSAtdmFsdWVzWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIFNhdmUgY29udmVydGVkIGJ5dGVzIGZvciBtaW4vbWF4IGNvbXB1dGF0aW9uLlxyXG4gICAgICAgICAgICAgICAgc3RhdGUuY29udmVydGVkVG9SaWdodEhhbmRlZEJ1ZmZlcnMuc2V0KGJ1ZmZlciwgYnl0ZXMpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBDcmVhdGUgYnVmZmVyIHZpZXcsIGJ1dCBkZWZlciBhY2Nlc3NvciBjcmVhdGlvbiBmb3IgbGF0ZXIuIEluc3RlYWQsIHRyYWNrIGl0IHZpYSBFeHBvcnRlclN0YXRlLlxyXG4gICAgICAgICAgICBjb25zdCBidWZmZXJWaWV3ID0gdGhpcy5fYnVmZmVyTWFuYWdlci5jcmVhdGVCdWZmZXJWaWV3KGJ5dGVzLCBieXRlU3RyaWRlKTtcclxuICAgICAgICAgICAgc3RhdGUuc2V0VmVydGV4QnVmZmVyVmlldyhidWZmZXIsIGJ1ZmZlclZpZXcpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZmxvYXRNYXRyaWNlc0luZGljZXMgPSBuZXcgTWFwPFZlcnRleEJ1ZmZlciwgRmxvYXRBcnJheT4oKTtcclxuXHJcbiAgICAgICAgICAgIC8vIElmIGJ1ZmZlcnMgYXJlIG9mIHR5cGUgTWF0cmljZXNJbmRpY2VzS2luZCBhbmQgaGF2ZSBmbG9hdCB2YWx1ZXMsIHdlIG5lZWQgdG8gY3JlYXRlIGEgbmV3IGJ1ZmZlciBpbnN0ZWFkLlxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHZlcnRleEJ1ZmZlciBvZiB2ZXJ0ZXhCdWZmZXJzKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHZlcnRleEJ1ZmZlci5nZXRLaW5kKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5NYXRyaWNlc0luZGljZXNLaW5kOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLk1hdHJpY2VzSW5kaWNlc0V4dHJhS2luZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmVydGV4QnVmZmVyLnR5cGUgPT0gVmVydGV4QnVmZmVyLkZMT0FUKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG1lc2ggb2YgdmVydGV4QnVmZmVyVG9NZXNoZXNNYXAuZ2V0KHZlcnRleEJ1ZmZlcikhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmxvYXREYXRhID0gdmVydGV4QnVmZmVyLmdldEZsb2F0RGF0YShtZXNoLmdldFRvdGFsVmVydGljZXMoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZsb2F0RGF0YSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdE1hdHJpY2VzSW5kaWNlcy5zZXQodmVydGV4QnVmZmVyLCBmbG9hdERhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGZsb2F0TWF0cmljZXNJbmRpY2VzLnNpemUgIT09IDApIHtcclxuICAgICAgICAgICAgICAgIExvZ2dlci5XYXJuKFxyXG4gICAgICAgICAgICAgICAgICAgIGBKb2ludHMgY29udmVyc2lvbiBuZWVkZWQ6IHNvbWUgam9pbnRzIGFyZSBzdG9yZWQgYXMgZmxvYXRzIGluIEJhYnlsb24gYnV0IEdMVEYgcmVxdWlyZXMgVU5TSUdORUQgQllURVMuIFdlIHdpbGwgcGVyZm9ybSB0aGUgY29udmVyc2lvbiBidXQgdGhpcyBtaWdodCBsZWFkIHRvIHVudXNlZCBkYXRhIGluIHRoZSBidWZmZXIuYFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgZmxvYXRBcnJheVZlcnRleEJ1ZmZlcnMgPSBBcnJheS5mcm9tKGZsb2F0TWF0cmljZXNJbmRpY2VzLmtleXMoKSk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHZlcnRleEJ1ZmZlciBvZiBmbG9hdEFycmF5VmVydGV4QnVmZmVycykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXJyYXkgPSBmbG9hdE1hdHJpY2VzSW5kaWNlcy5nZXQodmVydGV4QnVmZmVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIWFycmF5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgaXMxNkJpdCA9IEZsb2F0c05lZWQxNkJpdEludGVnZXIoYXJyYXkpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3QXJyYXkgPSBuZXcgKGlzMTZCaXQgPyBVaW50MTZBcnJheSA6IFVpbnQ4QXJyYXkpKGFycmF5Lmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXkubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3QXJyYXlbaW5kZXhdID0gYXJyYXlbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgYnVmZmVyVmlldyA9IHRoaXMuX2J1ZmZlck1hbmFnZXIuY3JlYXRlQnVmZmVyVmlldyhuZXdBcnJheSwgNCAqIChpczE2Qml0ID8gMiA6IDEpKTtcclxuICAgICAgICAgICAgICAgIHN0YXRlLnNldFJlbWFwcGVkQnVmZmVyVmlldyhidWZmZXIsIHZlcnRleEJ1ZmZlciwgYnVmZmVyVmlldyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG1vcnBoVGFyZ2V0cyA9IEFycmF5LmZyb20obW9ycGhUYWdldHNNZXNoZXNNYXAua2V5cygpKTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBtb3JwaFRhcmdldCBvZiBtb3JwaFRhcmdldHMpIHtcclxuICAgICAgICAgICAgY29uc3QgbWVzaGVzID0gbW9ycGhUYWdldHNNZXNoZXNNYXAuZ2V0KG1vcnBoVGFyZ2V0KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghbWVzaGVzKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgZ2xURk1vcnBoVGFyZ2V0ID0gQnVpbGRNb3JwaFRhcmdldEJ1ZmZlcnMobW9ycGhUYXJnZXQsIG1lc2hlc1swXSwgdGhpcy5fYnVmZmVyTWFuYWdlciwgdGhpcy5fYnVmZmVyVmlld3MsIHRoaXMuX2FjY2Vzc29ycywgc3RhdGUuY29udmVydFRvUmlnaHRIYW5kZWQpO1xyXG5cclxuICAgICAgICAgICAgZm9yIChjb25zdCBtZXNoIG9mIG1lc2hlcykge1xyXG4gICAgICAgICAgICAgICAgc3RhdGUuYmluZE1vcnBoRGF0YVRvTWVzaChtZXNoLCBnbFRGTW9ycGhUYXJnZXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUHJvY2Vzc2VzIGEgbm9kZSB0byBiZSBleHBvcnRlZCB0byB0aGUgZ2xURiBmaWxlXHJcbiAgICAgKiBAcmV0dXJucyBBIHByb21pc2UgdGhhdCByZXNvbHZlcyBvbmNlIHRoZSBub2RlIGhhcyBiZWVuIGV4cG9ydGVkXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBhc3luYyBfZXhwb3J0Tm9kZUFzeW5jKGJhYnlsb25Ob2RlOiBOb2RlLCBwYXJlbnROb2RlQ2hpbGRyZW46IEFycmF5PG51bWJlcj4sIHN0YXRlOiBFeHBvcnRlclN0YXRlKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgbGV0IG5vZGVJbmRleCA9IHRoaXMuX25vZGVNYXAuZ2V0KGJhYnlsb25Ob2RlKTtcclxuICAgICAgICBpZiAobm9kZUluZGV4ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaWYgKCFwYXJlbnROb2RlQ2hpbGRyZW4uaW5jbHVkZXMobm9kZUluZGV4KSkge1xyXG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZUNoaWxkcmVuLnB1c2gobm9kZUluZGV4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBub2RlID0gYXdhaXQgdGhpcy5fY3JlYXRlTm9kZUFzeW5jKGJhYnlsb25Ob2RlLCBzdGF0ZSk7XHJcblxyXG4gICAgICAgIGlmIChub2RlKSB7XHJcbiAgICAgICAgICAgIG5vZGVJbmRleCA9IHRoaXMuX25vZGVzLmxlbmd0aDtcclxuICAgICAgICAgICAgdGhpcy5fbm9kZXMucHVzaChub2RlKTtcclxuICAgICAgICAgICAgdGhpcy5fbm9kZU1hcC5zZXQoYmFieWxvbk5vZGUsIG5vZGVJbmRleCk7XHJcbiAgICAgICAgICAgIHN0YXRlLnB1c2hFeHBvcnRlZE5vZGUoYmFieWxvbk5vZGUpO1xyXG4gICAgICAgICAgICBwYXJlbnROb2RlQ2hpbGRyZW4ucHVzaChub2RlSW5kZXgpO1xyXG5cclxuICAgICAgICAgICAgLy8gUHJvY2VzcyBub2RlJ3MgYW5pbWF0aW9ucyBvbmNlIHRoZSBub2RlIGhhcyBiZWVuIGFkZGVkIHRvIG5vZGVNYXAgKFRPRE86IFRoaXMgc2hvdWxkIGJlIHJlZmFjdG9yZWQpXHJcbiAgICAgICAgICAgIGNvbnN0IHJ1bnRpbWVHTFRGQW5pbWF0aW9uOiBJQW5pbWF0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJydW50aW1lIGFuaW1hdGlvbnNcIixcclxuICAgICAgICAgICAgICAgIGNoYW5uZWxzOiBbXSxcclxuICAgICAgICAgICAgICAgIHNhbXBsZXJzOiBbXSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc3QgaWRsZUdMVEZBbmltYXRpb25zOiBJQW5pbWF0aW9uW10gPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5fYmFieWxvblNjZW5lLmFuaW1hdGlvbkdyb3Vwcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIF9HTFRGQW5pbWF0aW9uLl9DcmVhdGVNb3JwaFRhcmdldEFuaW1hdGlvbkZyb21Nb3JwaFRhcmdldEFuaW1hdGlvbnMoXHJcbiAgICAgICAgICAgICAgICAgICAgYmFieWxvbk5vZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVudGltZUdMVEZBbmltYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgaWRsZUdMVEZBbmltYXRpb25zLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX25vZGVNYXAsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbm9kZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYnVmZmVyTWFuYWdlcixcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9idWZmZXJWaWV3cyxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9hY2Nlc3NvcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYW5pbWF0aW9uU2FtcGxlUmF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5jb252ZXJ0VG9SaWdodEhhbmRlZCxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9vcHRpb25zLnNob3VsZEV4cG9ydEFuaW1hdGlvblxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGlmIChiYWJ5bG9uTm9kZS5hbmltYXRpb25zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIF9HTFRGQW5pbWF0aW9uLl9DcmVhdGVOb2RlQW5pbWF0aW9uRnJvbU5vZGVBbmltYXRpb25zKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uTm9kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcnVudGltZUdMVEZBbmltYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkbGVHTFRGQW5pbWF0aW9ucyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbm9kZU1hcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbm9kZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2J1ZmZlck1hbmFnZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2J1ZmZlclZpZXdzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9hY2Nlc3NvcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2FuaW1hdGlvblNhbXBsZVJhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLmNvbnZlcnRUb1JpZ2h0SGFuZGVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9vcHRpb25zLnNob3VsZEV4cG9ydEFuaW1hdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChydW50aW1lR0xURkFuaW1hdGlvbi5jaGFubmVscy5sZW5ndGggJiYgcnVudGltZUdMVEZBbmltYXRpb24uc2FtcGxlcnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hbmltYXRpb25zLnB1c2gocnVudGltZUdMVEZBbmltYXRpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlkbGVHTFRGQW5pbWF0aW9ucy5mb3JFYWNoKChpZGxlR0xURkFuaW1hdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlkbGVHTFRGQW5pbWF0aW9uLmNoYW5uZWxzLmxlbmd0aCAmJiBpZGxlR0xURkFuaW1hdGlvbi5zYW1wbGVycy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9hbmltYXRpb25zLnB1c2goaWRsZUdMVEZBbmltYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEJlZ2luIHByb2Nlc3NpbmcgY2hpbGQgbm9kZXMgb25jZSBwYXJlbnQgaGFzIGJlZW4gYWRkZWQgdG8gdGhlIG5vZGUgbGlzdFxyXG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gbm9kZSA/IFtdIDogcGFyZW50Tm9kZUNoaWxkcmVuO1xyXG4gICAgICAgIGZvciAoY29uc3QgYmFieWxvbkNoaWxkTm9kZSBvZiBiYWJ5bG9uTm9kZS5nZXRDaGlsZHJlbigpKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuX2V4cG9ydE5vZGVBc3luYyhiYWJ5bG9uQ2hpbGROb2RlLCBjaGlsZHJlbiwgc3RhdGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG5vZGUgJiYgY2hpbGRyZW4ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIG5vZGUuY2hpbGRyZW4gPSBjaGlsZHJlbjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgZ2xURiBub2RlIGZyb20gYSBCYWJ5bG9uLmpzIG5vZGUuIElmIHNraXBwZWQsIHJldHVybnMgbnVsbC5cclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGFzeW5jIF9jcmVhdGVOb2RlQXN5bmMoYmFieWxvbk5vZGU6IE5vZGUsIHN0YXRlOiBFeHBvcnRlclN0YXRlKTogUHJvbWlzZTxOdWxsYWJsZTxJTm9kZT4+IHtcclxuICAgICAgICBpZiAoIXRoaXMuX3Nob3VsZEV4cG9ydE5vZGUoYmFieWxvbk5vZGUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgbm9kZTogSU5vZGUgPSB7fTtcclxuXHJcbiAgICAgICAgaWYgKGJhYnlsb25Ob2RlLm5hbWUpIHtcclxuICAgICAgICAgICAgbm9kZS5uYW1lID0gYmFieWxvbk5vZGUubmFtZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChiYWJ5bG9uTm9kZSBpbnN0YW5jZW9mIFRyYW5zZm9ybU5vZGUpIHtcclxuICAgICAgICAgICAgdGhpcy5fc2V0Tm9kZVRyYW5zZm9ybWF0aW9uKG5vZGUsIGJhYnlsb25Ob2RlLCBzdGF0ZS5jb252ZXJ0VG9SaWdodEhhbmRlZCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoYmFieWxvbk5vZGUgaW5zdGFuY2VvZiBNZXNoIHx8IGJhYnlsb25Ob2RlIGluc3RhbmNlb2YgSW5zdGFuY2VkTWVzaCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYmFieWxvbk1lc2ggPSBiYWJ5bG9uTm9kZSBpbnN0YW5jZW9mIE1lc2ggPyBiYWJ5bG9uTm9kZSA6IGJhYnlsb25Ob2RlLnNvdXJjZU1lc2g7XHJcbiAgICAgICAgICAgICAgICBpZiAoYmFieWxvbk1lc2guc3ViTWVzaGVzICYmIGJhYnlsb25NZXNoLnN1Yk1lc2hlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5tZXNoID0gYXdhaXQgdGhpcy5fZXhwb3J0TWVzaEFzeW5jKGJhYnlsb25NZXNoLCBzdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGJhYnlsb25Ob2RlLnNrZWxldG9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2tpbiA9IHRoaXMuX3NraW5NYXAuZ2V0KGJhYnlsb25Ob2RlLnNrZWxldG9uKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNraW4gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fbm9kZXNTa2luTWFwLmdldChza2luKSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9ub2Rlc1NraW5NYXAuc2V0KHNraW4sIFtdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbm9kZXNTa2luTWFwLmdldChza2luKT8ucHVzaChub2RlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChiYWJ5bG9uTm9kZSBpbnN0YW5jZW9mIENhbWVyYSkge1xyXG4gICAgICAgICAgICBjb25zdCBnbHRmQ2FtZXJhID0gdGhpcy5fY2FtZXJhc01hcC5nZXQoYmFieWxvbk5vZGUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGdsdGZDYW1lcmEpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9ub2Rlc0NhbWVyYU1hcC5nZXQoZ2x0ZkNhbWVyYSkgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX25vZGVzQ2FtZXJhTWFwLnNldChnbHRmQ2FtZXJhLCBbXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50QmFieWxvbk5vZGUgPSBiYWJ5bG9uTm9kZS5wYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zZXRDYW1lcmFUcmFuc2Zvcm1hdGlvbihub2RlLCBiYWJ5bG9uTm9kZSwgc3RhdGUuY29udmVydFRvUmlnaHRIYW5kZWQsIHBhcmVudEJhYnlsb25Ob2RlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBJZiBhIGNhbWVyYSBoYXMgYSBub2RlIHRoYXQgd2FzIGFkZGVkIGJ5IHRoZSBHTFRGIGltcG9ydGVyLCB3ZSBjYW4ganVzdCB1c2UgdGhlIHBhcmVudCBub2RlIHRyYW5zZm9ybSBhcyB0aGUgXCJjYW1lcmFcIiB0cmFuc2Zvcm0uXHJcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50QmFieWxvbk5vZGUgJiYgSXNQYXJlbnRBZGRlZEJ5SW1wb3J0ZXIoYmFieWxvbk5vZGUsIHBhcmVudEJhYnlsb25Ob2RlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudE5vZGVJbmRleCA9IHRoaXMuX25vZGVNYXAuZ2V0KHBhcmVudEJhYnlsb25Ob2RlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocGFyZW50Tm9kZUluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudE5vZGUgPSB0aGlzLl9ub2Rlc1twYXJlbnROb2RlSW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9ub2Rlc0NhbWVyYU1hcC5nZXQoZ2x0ZkNhbWVyYSk/LnB1c2gocGFyZW50Tm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsOyAvLyBTa2lwIGV4cG9ydGluZyB0aGlzIG5vZGVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUuY29udmVydFRvUmlnaHRIYW5kZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBDb252ZXJ0VG9SaWdodEhhbmRlZE5vZGUobm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgUm90YXRlTm9kZTE4MFkobm9kZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9ub2Rlc0NhbWVyYU1hcC5nZXQoZ2x0ZkNhbWVyYSk/LnB1c2gobm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEFwcGx5IGV4dGVuc2lvbnMgdG8gdGhlIG5vZGUuIElmIHRoaXMgcmVzb2x2ZXMgdG8gbnVsbCwgaXQgbWVhbnMgd2Ugc2hvdWxkIHNraXAgZXhwb3J0aW5nIHRoaXMgbm9kZVxyXG4gICAgICAgIGNvbnN0IHByb2Nlc3NlZE5vZGUgPSBhd2FpdCB0aGlzLl9leHRlbnNpb25zUG9zdEV4cG9ydE5vZGVBc3luYyhcImV4cG9ydE5vZGVBc3luY1wiLCBub2RlLCBiYWJ5bG9uTm9kZSwgdGhpcy5fbm9kZU1hcCwgc3RhdGUuY29udmVydFRvUmlnaHRIYW5kZWQpO1xyXG4gICAgICAgIGlmICghcHJvY2Vzc2VkTm9kZSkge1xyXG4gICAgICAgICAgICBMb2dnZXIuV2FybihgTm90IGV4cG9ydGluZyBub2RlICR7YmFieWxvbk5vZGUubmFtZX1gKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9leHBvcnRJbmRpY2VzKFxyXG4gICAgICAgIGluZGljZXM6IE51bGxhYmxlPEluZGljZXNBcnJheT4sXHJcbiAgICAgICAgaXMzMkJpdHM6IGJvb2xlYW4sXHJcbiAgICAgICAgc3RhcnQ6IG51bWJlcixcclxuICAgICAgICBjb3VudDogbnVtYmVyLFxyXG4gICAgICAgIG9mZnNldDogbnVtYmVyLFxyXG4gICAgICAgIGZpbGxNb2RlOiBudW1iZXIsXHJcbiAgICAgICAgc2lkZU9yaWVudGF0aW9uOiBudW1iZXIsXHJcbiAgICAgICAgc3RhdGU6IEV4cG9ydGVyU3RhdGUsXHJcbiAgICAgICAgcHJpbWl0aXZlOiBJTWVzaFByaW1pdGl2ZVxyXG4gICAgKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGluZGljZXNUb0V4cG9ydCA9IGluZGljZXM7XHJcblxyXG4gICAgICAgIHByaW1pdGl2ZS5tb2RlID0gR2V0UHJpbWl0aXZlTW9kZShmaWxsTW9kZSk7XHJcblxyXG4gICAgICAgIC8vIEZsaXAgaWYgdHJpYW5nbGUgd2luZGluZyBvcmRlciBpcyBub3QgQ0NXIGFzIGdsVEYgaXMgYWx3YXlzIENDVy5cclxuICAgICAgICBjb25zdCBpbnZlcnRlZE1hdGVyaWFsID0gc2lkZU9yaWVudGF0aW9uICE9PSBNYXRlcmlhbC5Db3VudGVyQ2xvY2tXaXNlU2lkZU9yaWVudGF0aW9uO1xyXG5cclxuICAgICAgICBjb25zdCBmbGlwV2hlbkludmVydGVkTWF0ZXJpYWwgPSAhc3RhdGUud2FzQWRkZWRCeU5vb3BOb2RlICYmIGludmVydGVkTWF0ZXJpYWw7XHJcblxyXG4gICAgICAgIGNvbnN0IGZsaXAgPSBJc1RyaWFuZ2xlRmlsbE1vZGUoZmlsbE1vZGUpICYmIGZsaXBXaGVuSW52ZXJ0ZWRNYXRlcmlhbDtcclxuXHJcbiAgICAgICAgaWYgKGZsaXApIHtcclxuICAgICAgICAgICAgaWYgKGZpbGxNb2RlID09PSBNYXRlcmlhbC5UcmlhbmdsZVN0cmlwRHJhd01vZGUgfHwgZmlsbE1vZGUgPT09IE1hdGVyaWFsLlRyaWFuZ2xlRmFuRHJhd01vZGUpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRyaWFuZ2xlIHN0cmlwL2ZhbiBmaWxsIG1vZGUgaXMgbm90IGltcGxlbWVudGVkXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwcmltaXRpdmUubW9kZSA9IEdldFByaW1pdGl2ZU1vZGUoZmlsbE1vZGUpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbmV3SW5kaWNlcyA9IGlzMzJCaXRzID8gbmV3IFVpbnQzMkFycmF5KGNvdW50KSA6IG5ldyBVaW50MTZBcnJheShjb3VudCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaW5kaWNlcykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgKyAyIDwgY291bnQ7IGkgKz0gMykge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0luZGljZXNbaV0gPSBpbmRpY2VzW3N0YXJ0ICsgaV0gKyBvZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3SW5kaWNlc1tpICsgMV0gPSBpbmRpY2VzW3N0YXJ0ICsgaSArIDJdICsgb2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0luZGljZXNbaSArIDJdID0gaW5kaWNlc1tzdGFydCArIGkgKyAxXSArIG9mZnNldDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpICsgMiA8IGNvdW50OyBpICs9IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdJbmRpY2VzW2ldID0gaTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdJbmRpY2VzW2kgKyAxXSA9IGkgKyAyO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0luZGljZXNbaSArIDJdID0gaSArIDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGluZGljZXNUb0V4cG9ydCA9IG5ld0luZGljZXM7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpbmRpY2VzICYmIG9mZnNldCAhPT0gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdJbmRpY2VzID0gaXMzMkJpdHMgPyBuZXcgVWludDMyQXJyYXkoY291bnQpIDogbmV3IFVpbnQxNkFycmF5KGNvdW50KTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdJbmRpY2VzW2ldID0gaW5kaWNlc1tzdGFydCArIGldICsgb2Zmc2V0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbmRpY2VzVG9FeHBvcnQgPSBuZXdJbmRpY2VzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGluZGljZXNUb0V4cG9ydCkge1xyXG4gICAgICAgICAgICBsZXQgYWNjZXNzb3JJbmRleCA9IHN0YXRlLmdldEluZGljZXNBY2Nlc3NvcihpbmRpY2VzLCBzdGFydCwgY291bnQsIG9mZnNldCwgZmxpcCk7XHJcbiAgICAgICAgICAgIGlmIChhY2Nlc3NvckluZGV4ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJ5dGVzID0gSW5kaWNlc0FycmF5VG9UeXBlZEFycmF5KGluZGljZXNUb0V4cG9ydCwgMCwgY291bnQsIGlzMzJCaXRzKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJ1ZmZlclZpZXcgPSB0aGlzLl9idWZmZXJNYW5hZ2VyLmNyZWF0ZUJ1ZmZlclZpZXcoYnl0ZXMpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudFR5cGUgPSBpczMyQml0cyA/IEFjY2Vzc29yQ29tcG9uZW50VHlwZS5VTlNJR05FRF9JTlQgOiBBY2Nlc3NvckNvbXBvbmVudFR5cGUuVU5TSUdORURfU0hPUlQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hY2Nlc3NvcnMucHVzaCh0aGlzLl9idWZmZXJNYW5hZ2VyLmNyZWF0ZUFjY2Vzc29yKGJ1ZmZlclZpZXcsIEFjY2Vzc29yVHlwZS5TQ0FMQVIsIGNvbXBvbmVudFR5cGUsIGNvdW50LCAwKSk7XHJcbiAgICAgICAgICAgICAgICBhY2Nlc3NvckluZGV4ID0gdGhpcy5fYWNjZXNzb3JzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5zZXRJbmRpY2VzQWNjZXNzb3IoaW5kaWNlcywgc3RhcnQsIGNvdW50LCBvZmZzZXQsIGZsaXAsIGFjY2Vzc29ySW5kZXgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwcmltaXRpdmUuaW5kaWNlcyA9IGFjY2Vzc29ySW5kZXg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2V4cG9ydFZlcnRleEJ1ZmZlcih2ZXJ0ZXhCdWZmZXI6IFZlcnRleEJ1ZmZlciwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCwgc3RhcnQ6IG51bWJlciwgY291bnQ6IG51bWJlciwgc3RhdGU6IEV4cG9ydGVyU3RhdGUsIHByaW1pdGl2ZTogSU1lc2hQcmltaXRpdmUpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBraW5kID0gdmVydGV4QnVmZmVyLmdldEtpbmQoKTtcclxuXHJcbiAgICAgICAgaWYgKCFJc1N0YW5kYXJkVmVydGV4QXR0cmlidXRlKGtpbmQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChraW5kLnN0YXJ0c1dpdGgoXCJ1dlwiKSAmJiAhdGhpcy5fb3B0aW9ucy5leHBvcnRVbnVzZWRVVnMpIHtcclxuICAgICAgICAgICAgaWYgKCFiYWJ5bG9uTWF0ZXJpYWwgfHwgIXRoaXMuX21hdGVyaWFsTmVlZHNVVnNTZXQuaGFzKGJhYnlsb25NYXRlcmlhbCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGFjY2Vzc29ySW5kZXggPSBzdGF0ZS5nZXRWZXJ0ZXhBY2Nlc3Nvcih2ZXJ0ZXhCdWZmZXIsIHN0YXJ0LCBjb3VudCk7XHJcblxyXG4gICAgICAgIGlmIChhY2Nlc3NvckluZGV4ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgLy8gR2V0IG1pbi9tYXggZnJvbSBjb252ZXJ0ZWQgb3Igb3JpZ2luYWwgZGF0YS5cclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHN0YXRlLmNvbnZlcnRlZFRvUmlnaHRIYW5kZWRCdWZmZXJzLmdldCh2ZXJ0ZXhCdWZmZXIuX2J1ZmZlcikgfHwgdmVydGV4QnVmZmVyLl9idWZmZXIuZ2V0RGF0YSgpITtcclxuICAgICAgICAgICAgY29uc3QgbWluTWF4ID0ga2luZCA9PT0gVmVydGV4QnVmZmVyLlBvc2l0aW9uS2luZCA/IEdldE1pbk1heChkYXRhLCB2ZXJ0ZXhCdWZmZXIsIHN0YXJ0LCBjb3VudCkgOiB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgICAgICAvLyBGb3IgdGhlIHJlbWFwcGVkIGJ1ZmZlciB2aWV3cyB3ZSBjcmVhdGVkIGZvciBmbG9hdCBtYXRyaWNlcyBpbmRpY2VzLCBtYWtlIHN1cmUgdG8gdXNlIHRoZWlyIHVwZGF0ZWQgaW5mb3JtYXRpb24uXHJcbiAgICAgICAgICAgIGNvbnN0IGlzRmxvYXRNYXRyaWNlc0luZGljZXMgPVxyXG4gICAgICAgICAgICAgICAgKGtpbmQgPT09IFZlcnRleEJ1ZmZlci5NYXRyaWNlc0luZGljZXNLaW5kIHx8IGtpbmQgPT09IFZlcnRleEJ1ZmZlci5NYXRyaWNlc0luZGljZXNFeHRyYUtpbmQpICYmIHZlcnRleEJ1ZmZlci50eXBlID09PSBWZXJ0ZXhCdWZmZXIuRkxPQVQ7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB2ZXJ0ZXhCdWZmZXJUeXBlID0gaXNGbG9hdE1hdHJpY2VzSW5kaWNlcyA/IFZlcnRleEJ1ZmZlci5VTlNJR05FRF9CWVRFIDogdmVydGV4QnVmZmVyLnR5cGU7XHJcbiAgICAgICAgICAgIGNvbnN0IHZlcnRleEJ1ZmZlck5vcm1hbGl6ZWQgPSBpc0Zsb2F0TWF0cmljZXNJbmRpY2VzID8gdW5kZWZpbmVkIDogdmVydGV4QnVmZmVyLm5vcm1hbGl6ZWQ7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ1ZmZlclZpZXcgPSBpc0Zsb2F0TWF0cmljZXNJbmRpY2VzID8gc3RhdGUuZ2V0UmVtYXBwZWRCdWZmZXJWaWV3KHZlcnRleEJ1ZmZlci5fYnVmZmVyLCB2ZXJ0ZXhCdWZmZXIpISA6IHN0YXRlLmdldFZlcnRleEJ1ZmZlclZpZXcodmVydGV4QnVmZmVyLl9idWZmZXIpITtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGJ5dGVPZmZzZXQgPSB2ZXJ0ZXhCdWZmZXIuYnl0ZU9mZnNldCArIHN0YXJ0ICogdmVydGV4QnVmZmVyLmJ5dGVTdHJpZGU7XHJcbiAgICAgICAgICAgIHRoaXMuX2FjY2Vzc29ycy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fYnVmZmVyTWFuYWdlci5jcmVhdGVBY2Nlc3NvcihcclxuICAgICAgICAgICAgICAgICAgICBidWZmZXJWaWV3LFxyXG4gICAgICAgICAgICAgICAgICAgIEdldEFjY2Vzc29yVHlwZShraW5kLCBzdGF0ZS5oYXNWZXJ0ZXhDb2xvckFscGhhKHZlcnRleEJ1ZmZlcikpLFxyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRleEJ1ZmZlclR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgYnl0ZU9mZnNldCxcclxuICAgICAgICAgICAgICAgICAgICBtaW5NYXgsXHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGV4QnVmZmVyTm9ybWFsaXplZCAvLyBUT0RPOiBGaW5kIG90aGVyIHBsYWNlcyB3aGVyZSB0aGlzIGlzIG5lZWRlZC5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgYWNjZXNzb3JJbmRleCA9IHRoaXMuX2FjY2Vzc29ycy5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICBzdGF0ZS5zZXRWZXJ0ZXhBY2Nlc3Nvcih2ZXJ0ZXhCdWZmZXIsIHN0YXJ0LCBjb3VudCwgYWNjZXNzb3JJbmRleCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcmltaXRpdmUuYXR0cmlidXRlc1tHZXRBdHRyaWJ1dGVUeXBlKGtpbmQpXSA9IGFjY2Vzc29ySW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBfZXhwb3J0TWF0ZXJpYWxBc3luYyhiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsLCB2ZXJ0ZXhCdWZmZXJzOiB7IFtraW5kOiBzdHJpbmddOiBWZXJ0ZXhCdWZmZXIgfSwgc3ViTWVzaDogU3ViTWVzaCwgcHJpbWl0aXZlOiBJTWVzaFByaW1pdGl2ZSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGxldCBtYXRlcmlhbEluZGV4ID0gdGhpcy5fbWF0ZXJpYWxNYXAuZ2V0KGJhYnlsb25NYXRlcmlhbCk7XHJcbiAgICAgICAgaWYgKG1hdGVyaWFsSW5kZXggPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBjb25zdCBoYXNVVnMgPSB2ZXJ0ZXhCdWZmZXJzICYmIE9iamVjdC5rZXlzKHZlcnRleEJ1ZmZlcnMpLnNvbWUoKGtpbmQpID0+IGtpbmQuc3RhcnRzV2l0aChcInV2XCIpKTtcclxuICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsID0gYmFieWxvbk1hdGVyaWFsIGluc3RhbmNlb2YgTXVsdGlNYXRlcmlhbCA/IGJhYnlsb25NYXRlcmlhbC5zdWJNYXRlcmlhbHNbc3ViTWVzaC5tYXRlcmlhbEluZGV4XSEgOiBiYWJ5bG9uTWF0ZXJpYWw7XHJcbiAgICAgICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwgaW5zdGFuY2VvZiBQQlJNYXRlcmlhbCkge1xyXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWxJbmRleCA9IGF3YWl0IHRoaXMuX21hdGVyaWFsRXhwb3J0ZXIuZXhwb3J0UEJSTWF0ZXJpYWxBc3luYyhiYWJ5bG9uTWF0ZXJpYWwsIEltYWdlTWltZVR5cGUuUE5HLCBoYXNVVnMpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGJhYnlsb25NYXRlcmlhbCBpbnN0YW5jZW9mIFN0YW5kYXJkTWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgICAgIG1hdGVyaWFsSW5kZXggPSBhd2FpdCB0aGlzLl9tYXRlcmlhbEV4cG9ydGVyLmV4cG9ydFN0YW5kYXJkTWF0ZXJpYWxBc3luYyhiYWJ5bG9uTWF0ZXJpYWwsIEltYWdlTWltZVR5cGUuUE5HLCBoYXNVVnMpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgTG9nZ2VyLldhcm4oYFVuc3VwcG9ydGVkIG1hdGVyaWFsICcke2JhYnlsb25NYXRlcmlhbC5uYW1lfScgd2l0aCB0eXBlICR7YmFieWxvbk1hdGVyaWFsLmdldENsYXNzTmFtZSgpfWApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9tYXRlcmlhbE1hcC5zZXQoYmFieWxvbk1hdGVyaWFsLCBtYXRlcmlhbEluZGV4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaW1pdGl2ZS5tYXRlcmlhbCA9IG1hdGVyaWFsSW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBfZXhwb3J0TWVzaEFzeW5jKGJhYnlsb25NZXNoOiBNZXNoLCBzdGF0ZTogRXhwb3J0ZXJTdGF0ZSk6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgICAgICAgbGV0IG1lc2hJbmRleCA9IHN0YXRlLmdldE1lc2goYmFieWxvbk1lc2gpO1xyXG4gICAgICAgIGlmIChtZXNoSW5kZXggIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbWVzaEluZGV4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbWVzaDogSU1lc2ggPSB7IHByaW1pdGl2ZXM6IFtdIH07XHJcbiAgICAgICAgbWVzaEluZGV4ID0gdGhpcy5fbWVzaGVzLmxlbmd0aDtcclxuICAgICAgICB0aGlzLl9tZXNoZXMucHVzaChtZXNoKTtcclxuICAgICAgICBzdGF0ZS5zZXRNZXNoKGJhYnlsb25NZXNoLCBtZXNoSW5kZXgpO1xyXG5cclxuICAgICAgICBjb25zdCBpbmRpY2VzID0gYmFieWxvbk1lc2guaXNVbkluZGV4ZWQgPyBudWxsIDogYmFieWxvbk1lc2guZ2V0SW5kaWNlcygpO1xyXG4gICAgICAgIGNvbnN0IHZlcnRleEJ1ZmZlcnMgPSBiYWJ5bG9uTWVzaC5nZW9tZXRyeT8uZ2V0VmVydGV4QnVmZmVycygpO1xyXG4gICAgICAgIGNvbnN0IG1vcnBoVGFyZ2V0cyA9IHN0YXRlLmdldE1vcnBoVGFyZ2V0c0Zyb21NZXNoKGJhYnlsb25NZXNoKTtcclxuXHJcbiAgICAgICAgY29uc3QgaXNMaW5lc01lc2ggPSBiYWJ5bG9uTWVzaCBpbnN0YW5jZW9mIExpbmVzTWVzaDtcclxuICAgICAgICBjb25zdCBpc0dyZWFzZWRMaW5lTWVzaCA9IGJhYnlsb25NZXNoIGluc3RhbmNlb2YgR3JlYXNlZExpbmVCYXNlTWVzaDtcclxuXHJcbiAgICAgICAgY29uc3Qgc3ViTWVzaGVzID0gYmFieWxvbk1lc2guc3ViTWVzaGVzO1xyXG4gICAgICAgIGlmICh2ZXJ0ZXhCdWZmZXJzICYmIHN1Yk1lc2hlcyAmJiBzdWJNZXNoZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHN1Yk1lc2ggb2Ygc3ViTWVzaGVzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcmltaXRpdmU6IElNZXNoUHJpbWl0aXZlID0geyBhdHRyaWJ1dGVzOiB7fSB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGJhYnlsb25NYXRlcmlhbCA9IHN1Yk1lc2guZ2V0TWF0ZXJpYWwoKSB8fCB0aGlzLl9iYWJ5bG9uU2NlbmUuZGVmYXVsdE1hdGVyaWFsO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpc0dyZWFzZWRMaW5lTWVzaCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsOiBJTWF0ZXJpYWwgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGJhYnlsb25NYXRlcmlhbC5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhYnlsb25MaW5lc01lc2ggPSBiYWJ5bG9uTWVzaCBhcyBHcmVhc2VkTGluZUJhc2VNZXNoO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb2xvcldoaXRlID0gQ29sb3IzLldoaXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYWxwaGEgPSBiYWJ5bG9uTGluZXNNZXNoLm1hdGVyaWFsPy5hbHBoYSA/PyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gYmFieWxvbkxpbmVzTWVzaC5ncmVhc2VkTGluZU1hdGVyaWFsPy5jb2xvciA/PyBjb2xvcldoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghY29sb3IuZXF1YWxzKGNvbG9yV2hpdGUpIHx8IGFscGhhIDwgMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRlcmlhbC5wYnJNZXRhbGxpY1JvdWdobmVzcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VDb2xvckZhY3RvcjogWy4uLmNvbG9yLmFzQXJyYXkoKSwgYWxwaGFdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbWF0ZXJpYWxzLnB1c2gobWF0ZXJpYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHByaW1pdGl2ZS5tYXRlcmlhbCA9IHRoaXMuX21hdGVyaWFscy5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpc0xpbmVzTWVzaCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFNwZWNpYWwgY2FzZSBmb3IgTGluZXNNZXNoXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWw6IElNYXRlcmlhbCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogYmFieWxvbk1hdGVyaWFsLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmFieWxvbkxpbmVzTWVzaCA9IGJhYnlsb25NZXNoIGFzIExpbmVzTWVzaDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFiYWJ5bG9uTGluZXNNZXNoLmNvbG9yLmVxdWFscyhDb2xvcjMuV2hpdGUoKSkgfHwgYmFieWxvbkxpbmVzTWVzaC5hbHBoYSA8IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYWwucGJyTWV0YWxsaWNSb3VnaG5lc3MgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlQ29sb3JGYWN0b3I6IFsuLi5iYWJ5bG9uTGluZXNNZXNoLmNvbG9yLmFzQXJyYXkoKSwgYmFieWxvbkxpbmVzTWVzaC5hbHBoYV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tYXRlcmlhbHMucHVzaChtYXRlcmlhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpbWl0aXZlLm1hdGVyaWFsID0gdGhpcy5fbWF0ZXJpYWxzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIE1hdGVyaWFsXHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5fZXhwb3J0TWF0ZXJpYWxBc3luYyhiYWJ5bG9uTWF0ZXJpYWwsIHZlcnRleEJ1ZmZlcnMsIHN1Yk1lc2gsIHByaW1pdGl2ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gSW5kZXggYnVmZmVyXHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxsTW9kZSA9IGlzTGluZXNNZXNoIHx8IGlzR3JlYXNlZExpbmVNZXNoID8gTWF0ZXJpYWwuTGluZUxpc3REcmF3TW9kZSA6IChiYWJ5bG9uTWVzaC5vdmVycmlkZVJlbmRlcmluZ0ZpbGxNb2RlID8/IGJhYnlsb25NYXRlcmlhbC5maWxsTW9kZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2lkZU9yaWVudGF0aW9uID0gYmFieWxvbk1hdGVyaWFsLl9nZXRFZmZlY3RpdmVPcmllbnRhdGlvbihiYWJ5bG9uTWVzaCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5fZXhwb3J0SW5kaWNlcyhcclxuICAgICAgICAgICAgICAgICAgICBpbmRpY2VzLFxyXG4gICAgICAgICAgICAgICAgICAgIGluZGljZXMgPyBBcmVJbmRpY2VzMzJCaXRzKGluZGljZXMsIHN1Yk1lc2guaW5kZXhDb3VudCwgc3ViTWVzaC5pbmRleFN0YXJ0LCBzdWJNZXNoLnZlcnRpY2VzU3RhcnQpIDogc3ViTWVzaC52ZXJ0aWNlc0NvdW50ID4gNjU1MzUsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5kaWNlcyA/IHN1Yk1lc2guaW5kZXhTdGFydCA6IHN1Yk1lc2gudmVydGljZXNTdGFydCxcclxuICAgICAgICAgICAgICAgICAgICBpbmRpY2VzID8gc3ViTWVzaC5pbmRleENvdW50IDogc3ViTWVzaC52ZXJ0aWNlc0NvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgIC1zdWJNZXNoLnZlcnRpY2VzU3RhcnQsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbE1vZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgc2lkZU9yaWVudGF0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIHByaW1pdGl2ZVxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBWZXJ0ZXggYnVmZmVyc1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCB2ZXJ0ZXhCdWZmZXIgb2YgT2JqZWN0LnZhbHVlcyh2ZXJ0ZXhCdWZmZXJzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2V4cG9ydFZlcnRleEJ1ZmZlcih2ZXJ0ZXhCdWZmZXIsIGJhYnlsb25NYXRlcmlhbCwgc3ViTWVzaC52ZXJ0aWNlc1N0YXJ0LCBzdWJNZXNoLnZlcnRpY2VzQ291bnQsIHN0YXRlLCBwcmltaXRpdmUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChtb3JwaFRhcmdldHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBwcmltaXRpdmUudGFyZ2V0cyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZ2x0Zk1vcnBoVGFyZ2V0IG9mIG1vcnBoVGFyZ2V0cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmltaXRpdmUudGFyZ2V0cy5wdXNoKGdsdGZNb3JwaFRhcmdldC5hdHRyaWJ1dGVzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbWVzaC5wcmltaXRpdmVzLnB1c2gocHJpbWl0aXZlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2V4dGVuc2lvbnNQb3N0RXhwb3J0TWVzaFByaW1pdGl2ZShwcmltaXRpdmUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobW9ycGhUYXJnZXRzKSB7XHJcbiAgICAgICAgICAgIG1lc2gud2VpZ2h0cyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFtZXNoLmV4dHJhcykge1xyXG4gICAgICAgICAgICAgICAgbWVzaC5leHRyYXMgPSB7fTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtZXNoLmV4dHJhcy50YXJnZXROYW1lcyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgZm9yIChjb25zdCBnbHRmTW9ycGhUYXJnZXQgb2YgbW9ycGhUYXJnZXRzKSB7XHJcbiAgICAgICAgICAgICAgICBtZXNoLndlaWdodHMucHVzaChnbHRmTW9ycGhUYXJnZXQuaW5mbHVlbmNlKTtcclxuICAgICAgICAgICAgICAgIG1lc2guZXh0cmFzLnRhcmdldE5hbWVzLnB1c2goZ2x0Zk1vcnBoVGFyZ2V0Lm5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbWVzaEluZGV4O1xyXG4gICAgfVxyXG59XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGJhYnlsb25qcy9hdmFpbGFibGUgKi9cclxuXHJcbmltcG9ydCB0eXBlIHsgSVRleHR1cmVJbmZvLCBJTWF0ZXJpYWwsIElNYXRlcmlhbFBick1ldGFsbGljUm91Z2huZXNzLCBJTWF0ZXJpYWxPY2NsdXNpb25UZXh0dXJlSW5mbywgSVNhbXBsZXIsIElJbWFnZSB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgSW1hZ2VNaW1lVHlwZSwgTWF0ZXJpYWxBbHBoYU1vZGUsIFRleHR1cmVNYWdGaWx0ZXIsIFRleHR1cmVNaW5GaWx0ZXIsIFRleHR1cmVXcmFwTW9kZSB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuXHJcbmltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xyXG5pbXBvcnQgeyBDb2xvcjMgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLmNvbG9yXCI7XHJcbmltcG9ydCB7IFNjYWxhciB9IGZyb20gXCJjb3JlL01hdGhzL21hdGguc2NhbGFyXCI7XHJcbmltcG9ydCB7IFRvb2xzIH0gZnJvbSBcImNvcmUvTWlzYy90b29sc1wiO1xyXG5pbXBvcnQgeyBUZXh0dXJlVG9vbHMgfSBmcm9tIFwiY29yZS9NaXNjL3RleHR1cmVUb29sc1wiO1xyXG5pbXBvcnQgdHlwZSB7IEJhc2VUZXh0dXJlIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1RleHR1cmVzL2Jhc2VUZXh0dXJlXCI7XHJcbmltcG9ydCB7IFRleHR1cmUgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvdGV4dHVyZVwiO1xyXG5pbXBvcnQgeyBSYXdUZXh0dXJlIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1RleHR1cmVzL3Jhd1RleHR1cmVcIjtcclxuXHJcbmltcG9ydCB0eXBlIHsgU2NlbmUgfSBmcm9tIFwiY29yZS9zY2VuZVwiO1xyXG5cclxuaW1wb3J0IHR5cGUgeyBHTFRGRXhwb3J0ZXIgfSBmcm9tIFwiLi9nbFRGRXhwb3J0ZXJcIjtcclxuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcImNvcmUvRW5naW5lcy9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgRHVtcFRvb2xzIH0gZnJvbSBcImNvcmUvTWlzYy9kdW1wVG9vbHNcIjtcclxuXHJcbmltcG9ydCB0eXBlIHsgTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHR5cGUgeyBTdGFuZGFyZE1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL3N0YW5kYXJkTWF0ZXJpYWxcIjtcclxuaW1wb3J0IHR5cGUgeyBQQlJCYXNlTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvUEJSL3BickJhc2VNYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBTcGVjdWxhclBvd2VyVG9Sb3VnaG5lc3MgfSBmcm9tIFwiY29yZS9IZWxwZXJzL21hdGVyaWFsQ29udmVyc2lvbkhlbHBlclwiO1xyXG5cclxuY29uc3QgZXBzaWxvbiA9IDFlLTY7XHJcbmNvbnN0IGRpZWxlY3RyaWNTcGVjdWxhciA9IG5ldyBDb2xvcjMoMC4wNCwgMC4wNCwgMC4wNCk7XHJcbmNvbnN0IG1heFNwZWN1bGFyUG93ZXIgPSAxMDI0O1xyXG5jb25zdCB3aGl0ZSA9IENvbG9yMy5XaGl0ZSgpO1xyXG5jb25zdCBibGFjayA9IENvbG9yMy5CbGFjaygpO1xyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3Igc3RvcmluZyBzcGVjdWxhciBnbG9zc2luZXNzIGZhY3RvcnNcclxuICogQGludGVybmFsXHJcbiAqL1xyXG5pbnRlcmZhY2UgSVBCUlNwZWN1bGFyR2xvc3NpbmVzcyB7XHJcbiAgICAvKipcclxuICAgICAqIFJlcHJlc2VudHMgdGhlIGxpbmVhciBkaWZmdXNlIGZhY3RvcnMgb2YgdGhlIG1hdGVyaWFsXHJcbiAgICAgKi9cclxuICAgIGRpZmZ1c2VDb2xvcjogQ29sb3IzO1xyXG4gICAgc3BlY3VsYXJDb2xvcjogQ29sb3IzO1xyXG4gICAgZ2xvc3NpbmVzczogbnVtYmVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgSVBCUk1ldGFsbGljUm91Z2huZXNzIHtcclxuICAgIGJhc2VDb2xvcjogQ29sb3IzO1xyXG4gICAgbWV0YWxsaWM6IE51bGxhYmxlPG51bWJlcj47XHJcbiAgICByb3VnaG5lc3M6IE51bGxhYmxlPG51bWJlcj47XHJcbiAgICBtZXRhbGxpY1JvdWdobmVzc1RleHR1cmVEYXRhPzogTnVsbGFibGU8QXJyYXlCdWZmZXI+O1xyXG4gICAgYmFzZUNvbG9yVGV4dHVyZURhdGE/OiBOdWxsYWJsZTxBcnJheUJ1ZmZlcj47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEdldEZpbGVFeHRlbnNpb25Gcm9tTWltZVR5cGUobWltZVR5cGU6IEltYWdlTWltZVR5cGUpOiBzdHJpbmcge1xyXG4gICAgc3dpdGNoIChtaW1lVHlwZSkge1xyXG4gICAgICAgIGNhc2UgSW1hZ2VNaW1lVHlwZS5KUEVHOlxyXG4gICAgICAgICAgICByZXR1cm4gXCIuanBnXCI7XHJcbiAgICAgICAgY2FzZSBJbWFnZU1pbWVUeXBlLlBORzpcclxuICAgICAgICAgICAgcmV0dXJuIFwiLnBuZ1wiO1xyXG4gICAgICAgIGNhc2UgSW1hZ2VNaW1lVHlwZS5XRUJQOlxyXG4gICAgICAgICAgICByZXR1cm4gXCIud2VicFwiO1xyXG4gICAgICAgIGNhc2UgSW1hZ2VNaW1lVHlwZS5BVklGOlxyXG4gICAgICAgICAgICByZXR1cm4gXCIuYXZpZlwiO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQ29tcHV0ZXMgdGhlIG1ldGFsbGljIGZhY3RvciBmcm9tIHNwZWN1bGFyIGdsb3NzaW5lc3MgdmFsdWVzLlxyXG4gKiBAcGFyYW0gZGlmZnVzZSBkaWZmdXNlZCB2YWx1ZVxyXG4gKiBAcGFyYW0gc3BlY3VsYXIgc3BlY3VsYXIgdmFsdWVcclxuICogQHBhcmFtIG9uZU1pbnVzU3BlY3VsYXJTdHJlbmd0aCBvbmUgbWludXMgdGhlIHNwZWN1bGFyIHN0cmVuZ3RoXHJcbiAqIEByZXR1cm5zIG1ldGFsbGljIHZhbHVlXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9Tb2x2ZU1ldGFsbGljKGRpZmZ1c2U6IG51bWJlciwgc3BlY3VsYXI6IG51bWJlciwgb25lTWludXNTcGVjdWxhclN0cmVuZ3RoOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgaWYgKHNwZWN1bGFyIDwgZGllbGVjdHJpY1NwZWN1bGFyLnIpIHtcclxuICAgICAgICBkaWVsZWN0cmljU3BlY3VsYXI7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYSA9IGRpZWxlY3RyaWNTcGVjdWxhci5yO1xyXG4gICAgY29uc3QgYiA9IChkaWZmdXNlICogb25lTWludXNTcGVjdWxhclN0cmVuZ3RoKSAvICgxLjAgLSBkaWVsZWN0cmljU3BlY3VsYXIucikgKyBzcGVjdWxhciAtIDIuMCAqIGRpZWxlY3RyaWNTcGVjdWxhci5yO1xyXG4gICAgY29uc3QgYyA9IGRpZWxlY3RyaWNTcGVjdWxhci5yIC0gc3BlY3VsYXI7XHJcbiAgICBjb25zdCBkID0gYiAqIGIgLSA0LjAgKiBhICogYztcclxuICAgIHJldHVybiBTY2FsYXIuQ2xhbXAoKC1iICsgTWF0aC5zcXJ0KGQpKSAvICgyLjAgKiBhKSwgMCwgMSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb21wdXRlcyB0aGUgbWV0YWxsaWMvcm91Z2huZXNzIGZhY3RvcnMgZnJvbSBhIFN0YW5kYXJkIE1hdGVyaWFsLlxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfQ29udmVydFRvR0xURlBCUk1ldGFsbGljUm91Z2huZXNzKGJhYnlsb25TdGFuZGFyZE1hdGVyaWFsOiBTdGFuZGFyZE1hdGVyaWFsKTogSU1hdGVyaWFsUGJyTWV0YWxsaWNSb3VnaG5lc3Mge1xyXG4gICAgY29uc3QgZGlmZnVzZSA9IGJhYnlsb25TdGFuZGFyZE1hdGVyaWFsLmRpZmZ1c2VDb2xvci50b0xpbmVhclNwYWNlKGJhYnlsb25TdGFuZGFyZE1hdGVyaWFsLmdldFNjZW5lKCkuZ2V0RW5naW5lKCkudXNlRXhhY3RTcmdiQ29udmVyc2lvbnMpLnNjYWxlKDAuNSk7XHJcbiAgICBjb25zdCBvcGFjaXR5ID0gYmFieWxvblN0YW5kYXJkTWF0ZXJpYWwuYWxwaGE7XHJcbiAgICBjb25zdCBzcGVjdWxhclBvd2VyID0gU2NhbGFyLkNsYW1wKGJhYnlsb25TdGFuZGFyZE1hdGVyaWFsLnNwZWN1bGFyUG93ZXIsIDAsIG1heFNwZWN1bGFyUG93ZXIpO1xyXG5cclxuICAgIGNvbnN0IHJvdWdobmVzcyA9IFNwZWN1bGFyUG93ZXJUb1JvdWdobmVzcyhzcGVjdWxhclBvd2VyKTtcclxuXHJcbiAgICBjb25zdCBnbFRGUGJyTWV0YWxsaWNSb3VnaG5lc3M6IElNYXRlcmlhbFBick1ldGFsbGljUm91Z2huZXNzID0ge1xyXG4gICAgICAgIGJhc2VDb2xvckZhY3RvcjogW2RpZmZ1c2UuciwgZGlmZnVzZS5nLCBkaWZmdXNlLmIsIG9wYWNpdHldLFxyXG4gICAgICAgIG1ldGFsbGljRmFjdG9yOiAwLFxyXG4gICAgICAgIHJvdWdobmVzc0ZhY3Rvcjogcm91Z2huZXNzLFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gZ2xURlBick1ldGFsbGljUm91Z2huZXNzO1xyXG59XHJcblxyXG4vKipcclxuICogU2V0cyB0aGUgZ2xURiBhbHBoYSBtb2RlIHRvIGEgZ2xURiBtYXRlcmlhbCBmcm9tIHRoZSBCYWJ5bG9uIE1hdGVyaWFsXHJcbiAqIEBwYXJhbSBnbFRGTWF0ZXJpYWwgZ2xURiBtYXRlcmlhbFxyXG4gKiBAcGFyYW0gYmFieWxvbk1hdGVyaWFsIEJhYnlsb24gbWF0ZXJpYWxcclxuICovXHJcbmZ1bmN0aW9uIFNldEFscGhhTW9kZShnbFRGTWF0ZXJpYWw6IElNYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCAmIHsgYWxwaGFDdXRPZmY/OiBudW1iZXIgfSk6IHZvaWQge1xyXG4gICAgaWYgKGJhYnlsb25NYXRlcmlhbC5uZWVkQWxwaGFCbGVuZGluZygpKSB7XHJcbiAgICAgICAgZ2xURk1hdGVyaWFsLmFscGhhTW9kZSA9IE1hdGVyaWFsQWxwaGFNb2RlLkJMRU5EO1xyXG4gICAgfSBlbHNlIGlmIChiYWJ5bG9uTWF0ZXJpYWwubmVlZEFscGhhVGVzdGluZygpKSB7XHJcbiAgICAgICAgZ2xURk1hdGVyaWFsLmFscGhhTW9kZSA9IE1hdGVyaWFsQWxwaGFNb2RlLk1BU0s7XHJcbiAgICAgICAgZ2xURk1hdGVyaWFsLmFscGhhQ3V0b2ZmID0gYmFieWxvbk1hdGVyaWFsLmFscGhhQ3V0T2ZmO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBDcmVhdGVXaGl0ZVRleHR1cmUod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIHNjZW5lOiBTY2VuZSk6IFRleHR1cmUge1xyXG4gICAgY29uc3QgZGF0YSA9IG5ldyBVaW50OEFycmF5KHdpZHRoICogaGVpZ2h0ICogNCk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSA9IGkgKyA0KSB7XHJcbiAgICAgICAgZGF0YVtpXSA9IGRhdGFbaSArIDFdID0gZGF0YVtpICsgMl0gPSBkYXRhW2kgKyAzXSA9IDB4ZmY7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmF3VGV4dHVyZSA9IFJhd1RleHR1cmUuQ3JlYXRlUkdCQVRleHR1cmUoZGF0YSwgd2lkdGgsIGhlaWdodCwgc2NlbmUpO1xyXG5cclxuICAgIHJldHVybiByYXdUZXh0dXJlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBDb252ZXJ0UGl4ZWxBcnJheVRvRmxvYXQzMihwaXhlbHM6IEFycmF5QnVmZmVyVmlldyk6IEZsb2F0MzJBcnJheSB7XHJcbiAgICBpZiAocGl4ZWxzIGluc3RhbmNlb2YgVWludDhBcnJheSkge1xyXG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IHBpeGVscy5sZW5ndGg7XHJcbiAgICAgICAgY29uc3QgYnVmZmVyID0gbmV3IEZsb2F0MzJBcnJheShwaXhlbHMubGVuZ3RoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIGJ1ZmZlcltpXSA9IHBpeGVsc1tpXSAvIDI1NTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGJ1ZmZlcjtcclxuICAgIH0gZWxzZSBpZiAocGl4ZWxzIGluc3RhbmNlb2YgRmxvYXQzMkFycmF5KSB7XHJcbiAgICAgICAgcmV0dXJuIHBpeGVscztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5zdXBwb3J0ZWQgcGl4ZWwgZm9ybWF0IVwiKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFV0aWxpdHkgbWV0aG9kcyBmb3Igd29ya2luZyB3aXRoIGdsVEYgbWF0ZXJpYWwgY29udmVyc2lvbiBwcm9wZXJ0aWVzLlxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbmV4cG9ydCBjbGFzcyBHTFRGTWF0ZXJpYWxFeHBvcnRlciB7XHJcbiAgICAvLyBNYXBwaW5nIHRvIHN0b3JlIHRleHR1cmVzXHJcbiAgICBwcml2YXRlIF90ZXh0dXJlTWFwID0gbmV3IE1hcDxCYXNlVGV4dHVyZSwgSVRleHR1cmVJbmZvPigpO1xyXG5cclxuICAgIC8vIE1hcHBpbmcgb2YgaW50ZXJuYWwgdGV4dHVyZXMgdG8gaW1hZ2VzIHRvIGF2b2lkIGV4cG9ydGluZyBkdXBsaWNhdGUgaW1hZ2VzXHJcbiAgICBwcml2YXRlIF9pbnRlcm5hbFRleHR1cmVUb0ltYWdlOiB7IFt1bmlxdWVJZDogbnVtYmVyXTogeyBbbWltZVR5cGU6IHN0cmluZ106IFByb21pc2U8bnVtYmVyPiB9IH0gPSB7fTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IF9leHBvcnRlcjogR0xURkV4cG9ydGVyKSB7fVxyXG5cclxuICAgIHB1YmxpYyBnZXRUZXh0dXJlSW5mbyhiYWJ5bG9uVGV4dHVyZTogTnVsbGFibGU8QmFzZVRleHR1cmU+KTogTnVsbGFibGU8SVRleHR1cmVJbmZvPiB7XHJcbiAgICAgICAgcmV0dXJuIGJhYnlsb25UZXh0dXJlID8gKHRoaXMuX3RleHR1cmVNYXAuZ2V0KGJhYnlsb25UZXh0dXJlKSA/PyBudWxsKSA6IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGV4cG9ydFN0YW5kYXJkTWF0ZXJpYWxBc3luYyhiYWJ5bG9uU3RhbmRhcmRNYXRlcmlhbDogU3RhbmRhcmRNYXRlcmlhbCwgbWltZVR5cGU6IEltYWdlTWltZVR5cGUsIGhhc1VWczogYm9vbGVhbik6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgICAgICAgY29uc3QgcGJyTWV0YWxsaWNSb3VnaG5lc3MgPSBfQ29udmVydFRvR0xURlBCUk1ldGFsbGljUm91Z2huZXNzKGJhYnlsb25TdGFuZGFyZE1hdGVyaWFsKTtcclxuXHJcbiAgICAgICAgY29uc3QgbWF0ZXJpYWw6IElNYXRlcmlhbCA9IHsgbmFtZTogYmFieWxvblN0YW5kYXJkTWF0ZXJpYWwubmFtZSB9O1xyXG4gICAgICAgIGlmIChiYWJ5bG9uU3RhbmRhcmRNYXRlcmlhbC5iYWNrRmFjZUN1bGxpbmcgIT0gbnVsbCAmJiAhYmFieWxvblN0YW5kYXJkTWF0ZXJpYWwuYmFja0ZhY2VDdWxsaW5nKSB7XHJcbiAgICAgICAgICAgIGlmICghYmFieWxvblN0YW5kYXJkTWF0ZXJpYWwudHdvU2lkZWRMaWdodGluZykge1xyXG4gICAgICAgICAgICAgICAgVG9vbHMuV2FybihiYWJ5bG9uU3RhbmRhcmRNYXRlcmlhbC5uYW1lICsgXCI6IEJhY2stZmFjZSBjdWxsaW5nIGRpc2FibGVkIGFuZCB0d28tc2lkZWQgbGlnaHRpbmcgZGlzYWJsZWQgaXMgbm90IHN1cHBvcnRlZCBpbiBnbFRGLlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtYXRlcmlhbC5kb3VibGVTaWRlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaGFzVVZzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb21pc2VzOiBQcm9taXNlPHZvaWQ+W10gPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRpZmZ1c2VUZXh0dXJlID0gYmFieWxvblN0YW5kYXJkTWF0ZXJpYWwuZGlmZnVzZVRleHR1cmU7XHJcbiAgICAgICAgICAgIGlmIChkaWZmdXNlVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4cG9ydFRleHR1cmVBc3luYyhkaWZmdXNlVGV4dHVyZSwgbWltZVR5cGUpLnRoZW4oKHRleHR1cmVJbmZvKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ZXh0dXJlSW5mbykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGJyTWV0YWxsaWNSb3VnaG5lc3MuYmFzZUNvbG9yVGV4dHVyZSA9IHRleHR1cmVJbmZvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGJ1bXBUZXh0dXJlID0gYmFieWxvblN0YW5kYXJkTWF0ZXJpYWwuYnVtcFRleHR1cmU7XHJcbiAgICAgICAgICAgIGlmIChidW1wVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4cG9ydFRleHR1cmVBc3luYyhidW1wVGV4dHVyZSwgbWltZVR5cGUpLnRoZW4oKHRleHR1cmVJbmZvKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ZXh0dXJlSW5mbykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYWwubm9ybWFsVGV4dHVyZSA9IHRleHR1cmVJbmZvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJ1bXBUZXh0dXJlLmxldmVsICE9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYWwubm9ybWFsVGV4dHVyZS5zY2FsZSA9IGJ1bXBUZXh0dXJlLmxldmVsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGVtaXNzaXZlVGV4dHVyZSA9IGJhYnlsb25TdGFuZGFyZE1hdGVyaWFsLmVtaXNzaXZlVGV4dHVyZTtcclxuICAgICAgICAgICAgaWYgKGVtaXNzaXZlVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWwuZW1pc3NpdmVGYWN0b3IgPSBbMS4wLCAxLjAsIDEuMF07XHJcblxyXG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4cG9ydFRleHR1cmVBc3luYyhlbWlzc2l2ZVRleHR1cmUsIG1pbWVUeXBlKS50aGVuKCh0ZXh0dXJlSW5mbykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGV4dHVyZUluZm8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsLmVtaXNzaXZlVGV4dHVyZSA9IHRleHR1cmVJbmZvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGFtYmllbnRUZXh0dXJlID0gYmFieWxvblN0YW5kYXJkTWF0ZXJpYWwuYW1iaWVudFRleHR1cmU7XHJcbiAgICAgICAgICAgIGlmIChhbWJpZW50VGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4cG9ydFRleHR1cmVBc3luYyhhbWJpZW50VGV4dHVyZSwgbWltZVR5cGUpLnRoZW4oKHRleHR1cmVJbmZvKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ZXh0dXJlSW5mbykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2NjbHVzaW9uVGV4dHVyZTogSU1hdGVyaWFsT2NjbHVzaW9uVGV4dHVyZUluZm8gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg6IHRleHR1cmVJbmZvLmluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsLm9jY2x1c2lvblRleHR1cmUgPSBvY2NsdXNpb25UZXh0dXJlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChwcm9taXNlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9leHBvcnRlci5fbWF0ZXJpYWxOZWVkc1VWc1NldC5hZGQoYmFieWxvblN0YW5kYXJkTWF0ZXJpYWwpO1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYmFieWxvblN0YW5kYXJkTWF0ZXJpYWwuYWxwaGEgPCAxLjAgfHwgYmFieWxvblN0YW5kYXJkTWF0ZXJpYWwub3BhY2l0eVRleHR1cmUpIHtcclxuICAgICAgICAgICAgaWYgKGJhYnlsb25TdGFuZGFyZE1hdGVyaWFsLmFscGhhTW9kZSA9PT0gQ29uc3RhbnRzLkFMUEhBX0NPTUJJTkUpIHtcclxuICAgICAgICAgICAgICAgIG1hdGVyaWFsLmFscGhhTW9kZSA9IE1hdGVyaWFsQWxwaGFNb2RlLkJMRU5EO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgVG9vbHMuV2FybihiYWJ5bG9uU3RhbmRhcmRNYXRlcmlhbC5uYW1lICsgXCI6IGdsVEYgMi4wIGRvZXMgbm90IHN1cHBvcnQgYWxwaGEgbW9kZTogXCIgKyBiYWJ5bG9uU3RhbmRhcmRNYXRlcmlhbC5hbHBoYU1vZGUudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChiYWJ5bG9uU3RhbmRhcmRNYXRlcmlhbC5lbWlzc2l2ZUNvbG9yICYmICFiYWJ5bG9uU3RhbmRhcmRNYXRlcmlhbC5lbWlzc2l2ZUNvbG9yLmVxdWFsc1dpdGhFcHNpbG9uKGJsYWNrLCBlcHNpbG9uKSkge1xyXG4gICAgICAgICAgICBtYXRlcmlhbC5lbWlzc2l2ZUZhY3RvciA9IGJhYnlsb25TdGFuZGFyZE1hdGVyaWFsLmVtaXNzaXZlQ29sb3IuYXNBcnJheSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWF0ZXJpYWwucGJyTWV0YWxsaWNSb3VnaG5lc3MgPSBwYnJNZXRhbGxpY1JvdWdobmVzcztcclxuICAgICAgICBTZXRBbHBoYU1vZGUobWF0ZXJpYWwsIGJhYnlsb25TdGFuZGFyZE1hdGVyaWFsKTtcclxuXHJcbiAgICAgICAgYXdhaXQgdGhpcy5fZmluaXNoTWF0ZXJpYWxBc3luYyhtYXRlcmlhbCwgYmFieWxvblN0YW5kYXJkTWF0ZXJpYWwsIG1pbWVUeXBlKTtcclxuXHJcbiAgICAgICAgY29uc3QgbWF0ZXJpYWxzID0gdGhpcy5fZXhwb3J0ZXIuX21hdGVyaWFscztcclxuICAgICAgICBtYXRlcmlhbHMucHVzaChtYXRlcmlhbCk7XHJcbiAgICAgICAgcmV0dXJuIG1hdGVyaWFscy5sZW5ndGggLSAxO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgX2ZpbmlzaE1hdGVyaWFsQXN5bmMoZ2xURk1hdGVyaWFsOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwsIG1pbWVUeXBlOiBJbWFnZU1pbWVUeXBlKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgY29uc3QgdGV4dHVyZXMgPSB0aGlzLl9leHBvcnRlci5fZXh0ZW5zaW9uc1Bvc3RFeHBvcnRNYXRlcmlhbEFkZGl0aW9uYWxUZXh0dXJlcyhcImV4cG9ydE1hdGVyaWFsXCIsIGdsVEZNYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsKTtcclxuXHJcbiAgICAgICAgY29uc3QgcHJvbWlzZXM6IEFycmF5PFByb21pc2U8TnVsbGFibGU8SVRleHR1cmVJbmZvPj4+ID0gW107XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgdGV4dHVyZSBvZiB0ZXh0dXJlcykge1xyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMuZXhwb3J0VGV4dHVyZUFzeW5jKHRleHR1cmUsIG1pbWVUeXBlKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcblxyXG4gICAgICAgIGF3YWl0IHRoaXMuX2V4cG9ydGVyLl9leHRlbnNpb25zUG9zdEV4cG9ydE1hdGVyaWFsQXN5bmMoXCJleHBvcnRNYXRlcmlhbFwiLCBnbFRGTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBfZ2V0SW1hZ2VEYXRhQXN5bmMoYnVmZmVyOiBVaW50OEFycmF5IHwgRmxvYXQzMkFycmF5LCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgbWltZVR5cGU6IEltYWdlTWltZVR5cGUpOiBQcm9taXNlPEFycmF5QnVmZmVyPiB7XHJcbiAgICAgICAgY29uc3QgdGV4dHVyZVR5cGUgPSBDb25zdGFudHMuVEVYVFVSRVRZUEVfVU5TSUdORURfQllURTtcclxuXHJcbiAgICAgICAgY29uc3QgaG9zdGluZ1NjZW5lID0gdGhpcy5fZXhwb3J0ZXIuX2JhYnlsb25TY2VuZTtcclxuICAgICAgICBjb25zdCBlbmdpbmUgPSBob3N0aW5nU2NlbmUuZ2V0RW5naW5lKCk7XHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSBhIHRlbXBvcmFyeSB0ZXh0dXJlIHdpdGggdGhlIHRleHR1cmUgYnVmZmVyIGRhdGFcclxuICAgICAgICBjb25zdCB0ZW1wVGV4dHVyZSA9IGVuZ2luZS5jcmVhdGVSYXdUZXh0dXJlKGJ1ZmZlciwgd2lkdGgsIGhlaWdodCwgQ29uc3RhbnRzLlRFWFRVUkVGT1JNQVRfUkdCQSwgZmFsc2UsIHRydWUsIFRleHR1cmUuTkVBUkVTVF9TQU1QTElOR01PREUsIG51bGwsIHRleHR1cmVUeXBlKTtcclxuXHJcbiAgICAgICAgZW5naW5lLmlzV2ViR1BVID8gYXdhaXQgaW1wb3J0KFwiY29yZS9TaGFkZXJzV0dTTC9wYXNzLmZyYWdtZW50XCIpIDogYXdhaXQgaW1wb3J0KFwiY29yZS9TaGFkZXJzL3Bhc3MuZnJhZ21lbnRcIik7XHJcbiAgICAgICAgYXdhaXQgVGV4dHVyZVRvb2xzLkFwcGx5UG9zdFByb2Nlc3MoXCJwYXNzXCIsIHRlbXBUZXh0dXJlLCBob3N0aW5nU2NlbmUsIHRleHR1cmVUeXBlLCBDb25zdGFudHMuVEVYVFVSRV9ORUFSRVNUX1NBTVBMSU5HTU9ERSwgQ29uc3RhbnRzLlRFWFRVUkVGT1JNQVRfUkdCQSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBlbmdpbmUuX3JlYWRUZXh0dXJlUGl4ZWxzKHRlbXBUZXh0dXJlLCB3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChhd2FpdCBEdW1wVG9vbHMuRHVtcERhdGFBc3luYyh3aWR0aCwgaGVpZ2h0LCBkYXRhLCBtaW1lVHlwZSwgdW5kZWZpbmVkLCB0cnVlLCB0cnVlKSkgYXMgQXJyYXlCdWZmZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXNpemVzIHRoZSB0d28gc291cmNlIHRleHR1cmVzIHRvIHRoZSBzYW1lIGRpbWVuc2lvbnMuICBJZiBhIHRleHR1cmUgaXMgbnVsbCwgYSBkZWZhdWx0IHdoaXRlIHRleHR1cmUgaXMgZ2VuZXJhdGVkLiAgSWYgYm90aCB0ZXh0dXJlcyBhcmUgbnVsbCwgcmV0dXJucyBudWxsXHJcbiAgICAgKiBAcGFyYW0gdGV4dHVyZTEgZmlyc3QgdGV4dHVyZSB0byByZXNpemVcclxuICAgICAqIEBwYXJhbSB0ZXh0dXJlMiBzZWNvbmQgdGV4dHVyZSB0byByZXNpemVcclxuICAgICAqIEBwYXJhbSBzY2VuZSBiYWJ5bG9uanMgc2NlbmVcclxuICAgICAqIEByZXR1cm5zIHJlc2l6ZWQgdGV4dHVyZXMgb3IgbnVsbFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9yZXNpemVUZXh0dXJlc1RvU2FtZURpbWVuc2lvbnModGV4dHVyZTE6IE51bGxhYmxlPEJhc2VUZXh0dXJlPiwgdGV4dHVyZTI6IE51bGxhYmxlPEJhc2VUZXh0dXJlPiwgc2NlbmU6IFNjZW5lKTogeyB0ZXh0dXJlMTogQmFzZVRleHR1cmU7IHRleHR1cmUyOiBCYXNlVGV4dHVyZSB9IHtcclxuICAgICAgICBjb25zdCB0ZXh0dXJlMVNpemUgPSB0ZXh0dXJlMSA/IHRleHR1cmUxLmdldFNpemUoKSA6IHsgd2lkdGg6IDAsIGhlaWdodDogMCB9O1xyXG4gICAgICAgIGNvbnN0IHRleHR1cmUyU2l6ZSA9IHRleHR1cmUyID8gdGV4dHVyZTIuZ2V0U2l6ZSgpIDogeyB3aWR0aDogMCwgaGVpZ2h0OiAwIH07XHJcbiAgICAgICAgbGV0IHJlc2l6ZWRUZXh0dXJlMTogQmFzZVRleHR1cmU7XHJcbiAgICAgICAgbGV0IHJlc2l6ZWRUZXh0dXJlMjogQmFzZVRleHR1cmU7XHJcblxyXG4gICAgICAgIGlmICh0ZXh0dXJlMVNpemUud2lkdGggPCB0ZXh0dXJlMlNpemUud2lkdGgpIHtcclxuICAgICAgICAgICAgaWYgKHRleHR1cmUxICYmIHRleHR1cmUxIGluc3RhbmNlb2YgVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgcmVzaXplZFRleHR1cmUxID0gVGV4dHVyZVRvb2xzLkNyZWF0ZVJlc2l6ZWRDb3B5KHRleHR1cmUxLCB0ZXh0dXJlMlNpemUud2lkdGgsIHRleHR1cmUyU2l6ZS5oZWlnaHQsIHRydWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVzaXplZFRleHR1cmUxID0gQ3JlYXRlV2hpdGVUZXh0dXJlKHRleHR1cmUyU2l6ZS53aWR0aCwgdGV4dHVyZTJTaXplLmhlaWdodCwgc2NlbmUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc2l6ZWRUZXh0dXJlMiA9IHRleHR1cmUyITtcclxuICAgICAgICB9IGVsc2UgaWYgKHRleHR1cmUxU2l6ZS53aWR0aCA+IHRleHR1cmUyU2l6ZS53aWR0aCkge1xyXG4gICAgICAgICAgICBpZiAodGV4dHVyZTIgJiYgdGV4dHVyZTIgaW5zdGFuY2VvZiBUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICByZXNpemVkVGV4dHVyZTIgPSBUZXh0dXJlVG9vbHMuQ3JlYXRlUmVzaXplZENvcHkodGV4dHVyZTIsIHRleHR1cmUxU2l6ZS53aWR0aCwgdGV4dHVyZTFTaXplLmhlaWdodCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXNpemVkVGV4dHVyZTIgPSBDcmVhdGVXaGl0ZVRleHR1cmUodGV4dHVyZTFTaXplLndpZHRoLCB0ZXh0dXJlMVNpemUuaGVpZ2h0LCBzY2VuZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzaXplZFRleHR1cmUxID0gdGV4dHVyZTEhO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlc2l6ZWRUZXh0dXJlMSA9IHRleHR1cmUxITtcclxuICAgICAgICAgICAgcmVzaXplZFRleHR1cmUyID0gdGV4dHVyZTIhO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdGV4dHVyZTE6IHJlc2l6ZWRUZXh0dXJlMSEsXHJcbiAgICAgICAgICAgIHRleHR1cmUyOiByZXNpemVkVGV4dHVyZTIhLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IFNwZWN1bGFyIEdsb3NzaW5lc3MgVGV4dHVyZXMgdG8gTWV0YWxsaWMgUm91Z2huZXNzXHJcbiAgICAgKiBTZWUgbGluayBiZWxvdyBmb3IgaW5mbyBvbiB0aGUgbWF0ZXJpYWwgY29udmVyc2lvbnMgZnJvbSBQQlIgTWV0YWxsaWMvUm91Z2huZXNzIGFuZCBTcGVjdWxhci9HbG9zc2luZXNzXHJcbiAgICAgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9ibG9iL21haW4vZXh0ZW5zaW9ucy8yLjAvQXJjaGl2ZWQvS0hSX21hdGVyaWFsc19wYnJTcGVjdWxhckdsb3NzaW5lc3MvZXhhbXBsZXMvY29udmVydC1iZXR3ZWVuLXdvcmtmbG93cy1ianMvanMvYmFieWxvbi5wYnJVdGlsaXRpZXMuanNcclxuICAgICAqIEBwYXJhbSBkaWZmdXNlVGV4dHVyZSB0ZXh0dXJlIHVzZWQgdG8gc3RvcmUgZGlmZnVzZSBpbmZvcm1hdGlvblxyXG4gICAgICogQHBhcmFtIHNwZWN1bGFyR2xvc3NpbmVzc1RleHR1cmUgdGV4dHVyZSB1c2VkIHRvIHN0b3JlIHNwZWN1bGFyIGFuZCBnbG9zc2luZXNzIGluZm9ybWF0aW9uXHJcbiAgICAgKiBAcGFyYW0gZmFjdG9ycyBzcGVjdWxhciBnbG9zc2luZXNzIG1hdGVyaWFsIGZhY3RvcnNcclxuICAgICAqIEBwYXJhbSBtaW1lVHlwZSB0aGUgbWltZSB0eXBlIHRvIHVzZSBmb3IgdGhlIHRleHR1cmVcclxuICAgICAqIEByZXR1cm5zIHBiciBtZXRhbGxpYyByb3VnaG5lc3MgaW50ZXJmYWNlIG9yIG51bGxcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBhc3luYyBfY29udmVydFNwZWN1bGFyR2xvc3NpbmVzc1RleHR1cmVzVG9NZXRhbGxpY1JvdWdobmVzc0FzeW5jKFxyXG4gICAgICAgIGRpZmZ1c2VUZXh0dXJlOiBOdWxsYWJsZTxCYXNlVGV4dHVyZT4sXHJcbiAgICAgICAgc3BlY3VsYXJHbG9zc2luZXNzVGV4dHVyZTogTnVsbGFibGU8QmFzZVRleHR1cmU+LFxyXG4gICAgICAgIGZhY3RvcnM6IElQQlJTcGVjdWxhckdsb3NzaW5lc3MsXHJcbiAgICAgICAgbWltZVR5cGU6IEltYWdlTWltZVR5cGVcclxuICAgICk6IFByb21pc2U8SVBCUk1ldGFsbGljUm91Z2huZXNzPiB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBuZXcgQXJyYXk8UHJvbWlzZTx2b2lkPj4oKTtcclxuICAgICAgICBpZiAoIShkaWZmdXNlVGV4dHVyZSB8fCBzcGVjdWxhckdsb3NzaW5lc3NUZXh0dXJlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXCJkaWZmdXNlIGFuZCBzcGVjdWxhciBnbG9zc2luZXNzIHRleHR1cmVzIGFyZSBub3QgZGVmaW5lZCFcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzY2VuZTogTnVsbGFibGU8U2NlbmU+ID0gZGlmZnVzZVRleHR1cmUgPyBkaWZmdXNlVGV4dHVyZS5nZXRTY2VuZSgpIDogc3BlY3VsYXJHbG9zc2luZXNzVGV4dHVyZSA/IHNwZWN1bGFyR2xvc3NpbmVzc1RleHR1cmUuZ2V0U2NlbmUoKSA6IG51bGw7XHJcbiAgICAgICAgaWYgKHNjZW5lKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc2l6ZWRUZXh0dXJlcyA9IHRoaXMuX3Jlc2l6ZVRleHR1cmVzVG9TYW1lRGltZW5zaW9ucyhkaWZmdXNlVGV4dHVyZSwgc3BlY3VsYXJHbG9zc2luZXNzVGV4dHVyZSwgc2NlbmUpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZGlmZnVzZVNpemUgPSByZXNpemVkVGV4dHVyZXMudGV4dHVyZTE/LmdldFNpemUoKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBkaWZmdXNlQnVmZmVyOiBGbG9hdDMyQXJyYXk7XHJcbiAgICAgICAgICAgIGxldCBzcGVjdWxhckdsb3NzaW5lc3NCdWZmZXI6IEZsb2F0MzJBcnJheTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gZGlmZnVzZVNpemUud2lkdGg7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IGRpZmZ1c2VTaXplLmhlaWdodDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRpZmZ1c2VQaXhlbHMgPSBhd2FpdCByZXNpemVkVGV4dHVyZXMudGV4dHVyZTEucmVhZFBpeGVscygpO1xyXG4gICAgICAgICAgICBjb25zdCBzcGVjdWxhclBpeGVscyA9IGF3YWl0IHJlc2l6ZWRUZXh0dXJlcy50ZXh0dXJlMi5yZWFkUGl4ZWxzKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZGlmZnVzZVBpeGVscykge1xyXG4gICAgICAgICAgICAgICAgZGlmZnVzZUJ1ZmZlciA9IENvbnZlcnRQaXhlbEFycmF5VG9GbG9hdDMyKGRpZmZ1c2VQaXhlbHMpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFwiRmFpbGVkIHRvIHJldHJpZXZlIHBpeGVscyBmcm9tIGRpZmZ1c2UgdGV4dHVyZSFcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHNwZWN1bGFyUGl4ZWxzKSB7XHJcbiAgICAgICAgICAgICAgICBzcGVjdWxhckdsb3NzaW5lc3NCdWZmZXIgPSBDb252ZXJ0UGl4ZWxBcnJheVRvRmxvYXQzMihzcGVjdWxhclBpeGVscyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXCJGYWlsZWQgdG8gcmV0cmlldmUgcGl4ZWxzIGZyb20gc3BlY3VsYXIgZ2xvc3NpbmVzcyB0ZXh0dXJlIVwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgYnl0ZUxlbmd0aCA9IHNwZWN1bGFyR2xvc3NpbmVzc0J1ZmZlci5ieXRlTGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbWV0YWxsaWNSb3VnaG5lc3NCdWZmZXIgPSBuZXcgVWludDhBcnJheShieXRlTGVuZ3RoKTtcclxuICAgICAgICAgICAgY29uc3QgYmFzZUNvbG9yQnVmZmVyID0gbmV3IFVpbnQ4QXJyYXkoYnl0ZUxlbmd0aCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzdHJpZGVTaXplID0gNDtcclxuICAgICAgICAgICAgY29uc3QgbWF4QmFzZUNvbG9yID0gYmxhY2s7XHJcbiAgICAgICAgICAgIGxldCBtYXhNZXRhbGxpYyA9IDA7XHJcbiAgICAgICAgICAgIGxldCBtYXhSb3VnaG5lc3MgPSAwO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaCA9IDA7IGggPCBoZWlnaHQ7ICsraCkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgdyA9IDA7IHcgPCB3aWR0aDsgKyt3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gKHdpZHRoICogaCArIHcpICogc3RyaWRlU2l6ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGlmZnVzZUNvbG9yID0gbmV3IENvbG9yMyhkaWZmdXNlQnVmZmVyW29mZnNldF0sIGRpZmZ1c2VCdWZmZXJbb2Zmc2V0ICsgMV0sIGRpZmZ1c2VCdWZmZXJbb2Zmc2V0ICsgMl0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50b0xpbmVhclNwYWNlKHNjZW5lLmdldEVuZ2luZSgpLnVzZUV4YWN0U3JnYkNvbnZlcnNpb25zKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAubXVsdGlwbHkoZmFjdG9ycy5kaWZmdXNlQ29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNwZWN1bGFyQ29sb3IgPSBuZXcgQ29sb3IzKHNwZWN1bGFyR2xvc3NpbmVzc0J1ZmZlcltvZmZzZXRdLCBzcGVjdWxhckdsb3NzaW5lc3NCdWZmZXJbb2Zmc2V0ICsgMV0sIHNwZWN1bGFyR2xvc3NpbmVzc0J1ZmZlcltvZmZzZXQgKyAyXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvTGluZWFyU3BhY2Uoc2NlbmUuZ2V0RW5naW5lKCkudXNlRXhhY3RTcmdiQ29udmVyc2lvbnMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tdWx0aXBseShmYWN0b3JzLnNwZWN1bGFyQ29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGdsb3NzaW5lc3MgPSBzcGVjdWxhckdsb3NzaW5lc3NCdWZmZXJbb2Zmc2V0ICsgM10gKiBmYWN0b3JzLmdsb3NzaW5lc3M7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNwZWN1bGFyR2xvc3NpbmVzczogSVBCUlNwZWN1bGFyR2xvc3NpbmVzcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlmZnVzZUNvbG9yOiBkaWZmdXNlQ29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwZWN1bGFyQ29sb3I6IHNwZWN1bGFyQ29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdsb3NzaW5lc3M6IGdsb3NzaW5lc3MsXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWV0YWxsaWNSb3VnaG5lc3MgPSB0aGlzLl9jb252ZXJ0U3BlY3VsYXJHbG9zc2luZXNzVG9NZXRhbGxpY1JvdWdobmVzcyhzcGVjdWxhckdsb3NzaW5lc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heEJhc2VDb2xvci5yID0gTWF0aC5tYXgobWF4QmFzZUNvbG9yLnIsIG1ldGFsbGljUm91Z2huZXNzLmJhc2VDb2xvci5yKTtcclxuICAgICAgICAgICAgICAgICAgICBtYXhCYXNlQ29sb3IuZyA9IE1hdGgubWF4KG1heEJhc2VDb2xvci5nLCBtZXRhbGxpY1JvdWdobmVzcy5iYXNlQ29sb3IuZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4QmFzZUNvbG9yLmIgPSBNYXRoLm1heChtYXhCYXNlQ29sb3IuYiwgbWV0YWxsaWNSb3VnaG5lc3MuYmFzZUNvbG9yLmIpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heE1ldGFsbGljID0gTWF0aC5tYXgobWF4TWV0YWxsaWMsIG1ldGFsbGljUm91Z2huZXNzLm1ldGFsbGljISk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4Um91Z2huZXNzID0gTWF0aC5tYXgobWF4Um91Z2huZXNzLCBtZXRhbGxpY1JvdWdobmVzcy5yb3VnaG5lc3MhKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZUNvbG9yQnVmZmVyW29mZnNldF0gPSBtZXRhbGxpY1JvdWdobmVzcy5iYXNlQ29sb3IuciAqIDI1NTtcclxuICAgICAgICAgICAgICAgICAgICBiYXNlQ29sb3JCdWZmZXJbb2Zmc2V0ICsgMV0gPSBtZXRhbGxpY1JvdWdobmVzcy5iYXNlQ29sb3IuZyAqIDI1NTtcclxuICAgICAgICAgICAgICAgICAgICBiYXNlQ29sb3JCdWZmZXJbb2Zmc2V0ICsgMl0gPSBtZXRhbGxpY1JvdWdobmVzcy5iYXNlQ29sb3IuYiAqIDI1NTtcclxuICAgICAgICAgICAgICAgICAgICBiYXNlQ29sb3JCdWZmZXJbb2Zmc2V0ICsgM10gPSByZXNpemVkVGV4dHVyZXMudGV4dHVyZTEuaGFzQWxwaGEgPyBkaWZmdXNlQnVmZmVyW29mZnNldCArIDNdICogMjU1IDogMjU1O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBtZXRhbGxpY1JvdWdobmVzc0J1ZmZlcltvZmZzZXRdID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBtZXRhbGxpY1JvdWdobmVzc0J1ZmZlcltvZmZzZXQgKyAxXSA9IG1ldGFsbGljUm91Z2huZXNzLnJvdWdobmVzcyEgKiAyNTU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0YWxsaWNSb3VnaG5lc3NCdWZmZXJbb2Zmc2V0ICsgMl0gPSBtZXRhbGxpY1JvdWdobmVzcy5tZXRhbGxpYyEgKiAyNTU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0YWxsaWNSb3VnaG5lc3NCdWZmZXJbb2Zmc2V0ICsgM10gPSAyNTU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFJldHJpZXZlcyB0aGUgbWV0YWxsaWMgcm91Z2huZXNzIGZhY3RvcnMgZnJvbSB0aGUgbWF4aW11bSB0ZXh0dXJlIHZhbHVlcy5cclxuICAgICAgICAgICAgY29uc3QgbWV0YWxsaWNSb3VnaG5lc3NGYWN0b3JzOiBJUEJSTWV0YWxsaWNSb3VnaG5lc3MgPSB7XHJcbiAgICAgICAgICAgICAgICBiYXNlQ29sb3I6IG1heEJhc2VDb2xvcixcclxuICAgICAgICAgICAgICAgIG1ldGFsbGljOiBtYXhNZXRhbGxpYyxcclxuICAgICAgICAgICAgICAgIHJvdWdobmVzczogbWF4Um91Z2huZXNzLFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgbGV0IHdyaXRlT3V0TWV0YWxsaWNSb3VnaG5lc3NUZXh0dXJlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGxldCB3cml0ZU91dEJhc2VDb2xvclRleHR1cmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGggPSAwOyBoIDwgaGVpZ2h0OyArK2gpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHcgPSAwOyB3IDwgd2lkdGg7ICsrdykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uT2Zmc2V0ID0gKHdpZHRoICogaCArIHcpICogc3RyaWRlU2l6ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZUNvbG9yQnVmZmVyW2Rlc3RpbmF0aW9uT2Zmc2V0XSAvPSBtZXRhbGxpY1JvdWdobmVzc0ZhY3RvcnMuYmFzZUNvbG9yLnIgPiBlcHNpbG9uID8gbWV0YWxsaWNSb3VnaG5lc3NGYWN0b3JzLmJhc2VDb2xvci5yIDogMTtcclxuICAgICAgICAgICAgICAgICAgICBiYXNlQ29sb3JCdWZmZXJbZGVzdGluYXRpb25PZmZzZXQgKyAxXSAvPSBtZXRhbGxpY1JvdWdobmVzc0ZhY3RvcnMuYmFzZUNvbG9yLmcgPiBlcHNpbG9uID8gbWV0YWxsaWNSb3VnaG5lc3NGYWN0b3JzLmJhc2VDb2xvci5nIDogMTtcclxuICAgICAgICAgICAgICAgICAgICBiYXNlQ29sb3JCdWZmZXJbZGVzdGluYXRpb25PZmZzZXQgKyAyXSAvPSBtZXRhbGxpY1JvdWdobmVzc0ZhY3RvcnMuYmFzZUNvbG9yLmIgPiBlcHNpbG9uID8gbWV0YWxsaWNSb3VnaG5lc3NGYWN0b3JzLmJhc2VDb2xvci5iIDogMTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluZWFyQmFzZUNvbG9yUGl4ZWwgPSBDb2xvcjMuRnJvbUludHMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VDb2xvckJ1ZmZlcltkZXN0aW5hdGlvbk9mZnNldF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VDb2xvckJ1ZmZlcltkZXN0aW5hdGlvbk9mZnNldCArIDFdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlQ29sb3JCdWZmZXJbZGVzdGluYXRpb25PZmZzZXQgKyAyXVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc1JHQkJhc2VDb2xvclBpeGVsID0gbGluZWFyQmFzZUNvbG9yUGl4ZWwudG9HYW1tYVNwYWNlKHNjZW5lLmdldEVuZ2luZSgpLnVzZUV4YWN0U3JnYkNvbnZlcnNpb25zKTtcclxuICAgICAgICAgICAgICAgICAgICBiYXNlQ29sb3JCdWZmZXJbZGVzdGluYXRpb25PZmZzZXRdID0gc1JHQkJhc2VDb2xvclBpeGVsLnIgKiAyNTU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZUNvbG9yQnVmZmVyW2Rlc3RpbmF0aW9uT2Zmc2V0ICsgMV0gPSBzUkdCQmFzZUNvbG9yUGl4ZWwuZyAqIDI1NTtcclxuICAgICAgICAgICAgICAgICAgICBiYXNlQ29sb3JCdWZmZXJbZGVzdGluYXRpb25PZmZzZXQgKyAyXSA9IHNSR0JCYXNlQ29sb3JQaXhlbC5iICogMjU1O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXNSR0JCYXNlQ29sb3JQaXhlbC5lcXVhbHNXaXRoRXBzaWxvbih3aGl0ZSwgZXBzaWxvbikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3JpdGVPdXRCYXNlQ29sb3JUZXh0dXJlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG1ldGFsbGljUm91Z2huZXNzQnVmZmVyW2Rlc3RpbmF0aW9uT2Zmc2V0ICsgMV0gLz0gbWV0YWxsaWNSb3VnaG5lc3NGYWN0b3JzLnJvdWdobmVzcyEgPiBlcHNpbG9uID8gbWV0YWxsaWNSb3VnaG5lc3NGYWN0b3JzLnJvdWdobmVzcyEgOiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGFsbGljUm91Z2huZXNzQnVmZmVyW2Rlc3RpbmF0aW9uT2Zmc2V0ICsgMl0gLz0gbWV0YWxsaWNSb3VnaG5lc3NGYWN0b3JzLm1ldGFsbGljISA+IGVwc2lsb24gPyBtZXRhbGxpY1JvdWdobmVzc0ZhY3RvcnMubWV0YWxsaWMhIDogMTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWV0YWxsaWNSb3VnaG5lc3NQaXhlbCA9IENvbG9yMy5Gcm9tSW50cygyNTUsIG1ldGFsbGljUm91Z2huZXNzQnVmZmVyW2Rlc3RpbmF0aW9uT2Zmc2V0ICsgMV0sIG1ldGFsbGljUm91Z2huZXNzQnVmZmVyW2Rlc3RpbmF0aW9uT2Zmc2V0ICsgMl0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIW1ldGFsbGljUm91Z2huZXNzUGl4ZWwuZXF1YWxzV2l0aEVwc2lsb24od2hpdGUsIGVwc2lsb24pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdyaXRlT3V0TWV0YWxsaWNSb3VnaG5lc3NUZXh0dXJlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh3cml0ZU91dE1ldGFsbGljUm91Z2huZXNzVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9nZXRJbWFnZURhdGFBc3luYyhtZXRhbGxpY1JvdWdobmVzc0J1ZmZlciwgd2lkdGgsIGhlaWdodCwgbWltZVR5cGUpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWV0YWxsaWNSb3VnaG5lc3NGYWN0b3JzLm1ldGFsbGljUm91Z2huZXNzVGV4dHVyZURhdGEgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh3cml0ZU91dEJhc2VDb2xvclRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZ2V0SW1hZ2VEYXRhQXN5bmMoYmFzZUNvbG9yQnVmZmVyLCB3aWR0aCwgaGVpZ2h0LCBtaW1lVHlwZSkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRhbGxpY1JvdWdobmVzc0ZhY3RvcnMuYmFzZUNvbG9yVGV4dHVyZURhdGEgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1ldGFsbGljUm91Z2huZXNzRmFjdG9ycztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFwiX0NvbnZlcnRTcGVjdWxhckdsb3NzaW5lc3NUZXh0dXJlc1RvTWV0YWxsaWNSb3VnaG5lc3M6IFNjZW5lIGZyb20gdGV4dHVyZXMgaXMgbWlzc2luZyFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydHMgc3BlY3VsYXIgZ2xvc3NpbmVzcyBtYXRlcmlhbCBwcm9wZXJ0aWVzIHRvIG1ldGFsbGljIHJvdWdobmVzc1xyXG4gICAgICogQHBhcmFtIHNwZWN1bGFyR2xvc3NpbmVzcyBpbnRlcmZhY2Ugd2l0aCBzcGVjdWxhciBnbG9zc2luZXNzIG1hdGVyaWFsIHByb3BlcnRpZXNcclxuICAgICAqIEByZXR1cm5zIGludGVyZmFjZSB3aXRoIG1ldGFsbGljIHJvdWdobmVzcyBtYXRlcmlhbCBwcm9wZXJ0aWVzXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX2NvbnZlcnRTcGVjdWxhckdsb3NzaW5lc3NUb01ldGFsbGljUm91Z2huZXNzKHNwZWN1bGFyR2xvc3NpbmVzczogSVBCUlNwZWN1bGFyR2xvc3NpbmVzcyk6IElQQlJNZXRhbGxpY1JvdWdobmVzcyB7XHJcbiAgICAgICAgY29uc3QgZGlmZnVzZVBlcmNlaXZlZEJyaWdodG5lc3MgPSB0aGlzLl9nZXRQZXJjZWl2ZWRCcmlnaHRuZXNzKHNwZWN1bGFyR2xvc3NpbmVzcy5kaWZmdXNlQ29sb3IpO1xyXG4gICAgICAgIGNvbnN0IHNwZWN1bGFyUGVyY2VpdmVkQnJpZ2h0bmVzcyA9IHRoaXMuX2dldFBlcmNlaXZlZEJyaWdodG5lc3Moc3BlY3VsYXJHbG9zc2luZXNzLnNwZWN1bGFyQ29sb3IpO1xyXG4gICAgICAgIGNvbnN0IG9uZU1pbnVzU3BlY3VsYXJTdHJlbmd0aCA9IDEgLSB0aGlzLl9nZXRNYXhDb21wb25lbnQoc3BlY3VsYXJHbG9zc2luZXNzLnNwZWN1bGFyQ29sb3IpO1xyXG4gICAgICAgIGNvbnN0IG1ldGFsbGljID0gX1NvbHZlTWV0YWxsaWMoZGlmZnVzZVBlcmNlaXZlZEJyaWdodG5lc3MsIHNwZWN1bGFyUGVyY2VpdmVkQnJpZ2h0bmVzcywgb25lTWludXNTcGVjdWxhclN0cmVuZ3RoKTtcclxuICAgICAgICBjb25zdCBiYXNlQ29sb3JGcm9tRGlmZnVzZSA9IHNwZWN1bGFyR2xvc3NpbmVzcy5kaWZmdXNlQ29sb3Iuc2NhbGUob25lTWludXNTcGVjdWxhclN0cmVuZ3RoIC8gKDEuMCAtIGRpZWxlY3RyaWNTcGVjdWxhci5yKSAvIE1hdGgubWF4KDEgLSBtZXRhbGxpYykpO1xyXG4gICAgICAgIGNvbnN0IGJhc2VDb2xvckZyb21TcGVjdWxhciA9IHNwZWN1bGFyR2xvc3NpbmVzcy5zcGVjdWxhckNvbG9yLnN1YnRyYWN0KGRpZWxlY3RyaWNTcGVjdWxhci5zY2FsZSgxIC0gbWV0YWxsaWMpKS5zY2FsZSgxIC8gTWF0aC5tYXgobWV0YWxsaWMpKTtcclxuICAgICAgICBsZXQgYmFzZUNvbG9yID0gQ29sb3IzLkxlcnAoYmFzZUNvbG9yRnJvbURpZmZ1c2UsIGJhc2VDb2xvckZyb21TcGVjdWxhciwgbWV0YWxsaWMgKiBtZXRhbGxpYyk7XHJcbiAgICAgICAgYmFzZUNvbG9yID0gYmFzZUNvbG9yLmNsYW1wVG9SZWYoMCwgMSwgYmFzZUNvbG9yKTtcclxuXHJcbiAgICAgICAgY29uc3QgbWV0YWxsaWNSb3VnaG5lc3M6IElQQlJNZXRhbGxpY1JvdWdobmVzcyA9IHtcclxuICAgICAgICAgICAgYmFzZUNvbG9yOiBiYXNlQ29sb3IsXHJcbiAgICAgICAgICAgIG1ldGFsbGljOiBtZXRhbGxpYyxcclxuICAgICAgICAgICAgcm91Z2huZXNzOiAxIC0gc3BlY3VsYXJHbG9zc2luZXNzLmdsb3NzaW5lc3MsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG1ldGFsbGljUm91Z2huZXNzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsY3VsYXRlcyB0aGUgc3VyZmFjZSByZWZsZWN0YW5jZSwgaW5kZXBlbmRlbnQgb2YgbGlnaHRpbmcgY29uZGl0aW9uc1xyXG4gICAgICogQHBhcmFtIGNvbG9yIENvbG9yIHNvdXJjZSB0byBjYWxjdWxhdGUgYnJpZ2h0bmVzcyBmcm9tXHJcbiAgICAgKiBAcmV0dXJucyBudW1iZXIgcmVwcmVzZW50aW5nIHRoZSBwZXJjZWl2ZWQgYnJpZ2h0bmVzcywgb3IgemVybyBpZiBjb2xvciBpcyB1bmRlZmluZWRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfZ2V0UGVyY2VpdmVkQnJpZ2h0bmVzcyhjb2xvcjogQ29sb3IzKTogbnVtYmVyIHtcclxuICAgICAgICBpZiAoY29sb3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGguc3FydCgwLjI5OSAqIGNvbG9yLnIgKiBjb2xvci5yICsgMC41ODcgKiBjb2xvci5nICogY29sb3IuZyArIDAuMTE0ICogY29sb3IuYiAqIGNvbG9yLmIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIG1heGltdW0gY29sb3IgY29tcG9uZW50IHZhbHVlXHJcbiAgICAgKiBAcGFyYW0gY29sb3JcclxuICAgICAqIEByZXR1cm5zIG1heGltdW0gY29sb3IgY29tcG9uZW50IHZhbHVlLCBvciB6ZXJvIGlmIGNvbG9yIGlzIG51bGwgb3IgdW5kZWZpbmVkXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX2dldE1heENvbXBvbmVudChjb2xvcjogQ29sb3IzKTogbnVtYmVyIHtcclxuICAgICAgICBpZiAoY29sb3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4KGNvbG9yLnIsIE1hdGgubWF4KGNvbG9yLmcsIGNvbG9yLmIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IGEgUEJSTWF0ZXJpYWwgKE1ldGFsbGljL1JvdWdobmVzcykgdG8gTWV0YWxsaWMgUm91Z2huZXNzIGZhY3RvcnNcclxuICAgICAqIEBwYXJhbSBiYWJ5bG9uUEJSTWF0ZXJpYWwgQkpTIFBCUiBNZXRhbGxpYyBSb3VnaG5lc3MgTWF0ZXJpYWxcclxuICAgICAqIEBwYXJhbSBtaW1lVHlwZSBtaW1lIHR5cGUgdG8gdXNlIGZvciB0aGUgdGV4dHVyZXNcclxuICAgICAqIEBwYXJhbSBnbFRGUGJyTWV0YWxsaWNSb3VnaG5lc3MgZ2xURiBQQlIgTWV0YWxsaWMgUm91Z2huZXNzIGludGVyZmFjZVxyXG4gICAgICogQHBhcmFtIGhhc1VWcyBzcGVjaWZpZXMgaWYgdGV4dHVyZSBjb29yZGluYXRlcyBhcmUgcHJlc2VudCBvbiB0aGUgc3VibWVzaCB0byBkZXRlcm1pbmUgaWYgdGV4dHVyZXMgc2hvdWxkIGJlIGFwcGxpZWRcclxuICAgICAqIEByZXR1cm5zIGdsVEYgUEJSIE1ldGFsbGljIFJvdWdobmVzcyBmYWN0b3JzXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgYXN5bmMgX2NvbnZlcnRNZXRhbFJvdWdoRmFjdG9yc1RvTWV0YWxsaWNSb3VnaG5lc3NBc3luYyhcclxuICAgICAgICBiYWJ5bG9uUEJSTWF0ZXJpYWw6IFBCUkJhc2VNYXRlcmlhbCxcclxuICAgICAgICBtaW1lVHlwZTogSW1hZ2VNaW1lVHlwZSxcclxuICAgICAgICBnbFRGUGJyTWV0YWxsaWNSb3VnaG5lc3M6IElNYXRlcmlhbFBick1ldGFsbGljUm91Z2huZXNzLFxyXG4gICAgICAgIGhhc1VWczogYm9vbGVhblxyXG4gICAgKTogUHJvbWlzZTxJUEJSTWV0YWxsaWNSb3VnaG5lc3M+IHtcclxuICAgICAgICBjb25zdCBwcm9taXNlczogUHJvbWlzZTx2b2lkPltdID0gW107XHJcblxyXG4gICAgICAgIGNvbnN0IG1ldGFsbGljUm91Z2huZXNzOiBJUEJSTWV0YWxsaWNSb3VnaG5lc3MgPSB7XHJcbiAgICAgICAgICAgIGJhc2VDb2xvcjogYmFieWxvblBCUk1hdGVyaWFsLl9hbGJlZG9Db2xvcixcclxuICAgICAgICAgICAgbWV0YWxsaWM6IGJhYnlsb25QQlJNYXRlcmlhbC5fbWV0YWxsaWMsXHJcbiAgICAgICAgICAgIHJvdWdobmVzczogYmFieWxvblBCUk1hdGVyaWFsLl9yb3VnaG5lc3MsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKGhhc1VWcykge1xyXG4gICAgICAgICAgICBjb25zdCBhbGJlZG9UZXh0dXJlID0gYmFieWxvblBCUk1hdGVyaWFsLl9hbGJlZG9UZXh0dXJlO1xyXG4gICAgICAgICAgICBpZiAoYWxiZWRvVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4cG9ydFRleHR1cmVBc3luYyhiYWJ5bG9uUEJSTWF0ZXJpYWwuX2FsYmVkb1RleHR1cmUhLCBtaW1lVHlwZSkudGhlbigoZ2xURlRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdsVEZUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbFRGUGJyTWV0YWxsaWNSb3VnaG5lc3MuYmFzZUNvbG9yVGV4dHVyZSA9IGdsVEZUZXh0dXJlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgbWV0YWxsaWNUZXh0dXJlID0gYmFieWxvblBCUk1hdGVyaWFsLl9tZXRhbGxpY1RleHR1cmU7XHJcbiAgICAgICAgICAgIGlmIChtZXRhbGxpY1RleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leHBvcnRUZXh0dXJlQXN5bmMobWV0YWxsaWNUZXh0dXJlLCBtaW1lVHlwZSkudGhlbigoZ2xURlRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdsVEZUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbFRGUGJyTWV0YWxsaWNSb3VnaG5lc3MubWV0YWxsaWNSb3VnaG5lc3NUZXh0dXJlID0gZ2xURlRleHR1cmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHByb21pc2VzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5fZXhwb3J0ZXIuX21hdGVyaWFsTmVlZHNVVnNTZXQuYWRkKGJhYnlsb25QQlJNYXRlcmlhbCk7XHJcbiAgICAgICAgICAgIGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBtZXRhbGxpY1JvdWdobmVzcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9nZXRUZXh0dXJlU2FtcGxlcih0ZXh0dXJlOiBOdWxsYWJsZTxCYXNlVGV4dHVyZT4pOiBJU2FtcGxlciB7XHJcbiAgICAgICAgY29uc3Qgc2FtcGxlcjogSVNhbXBsZXIgPSB7fTtcclxuICAgICAgICBpZiAoIXRleHR1cmUgfHwgISh0ZXh0dXJlIGluc3RhbmNlb2YgVGV4dHVyZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNhbXBsZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB3cmFwUyA9IHRoaXMuX2dldEdMVEZUZXh0dXJlV3JhcE1vZGUodGV4dHVyZS53cmFwVSk7XHJcbiAgICAgICAgaWYgKHdyYXBTICE9PSBUZXh0dXJlV3JhcE1vZGUuUkVQRUFUKSB7XHJcbiAgICAgICAgICAgIHNhbXBsZXIud3JhcFMgPSB3cmFwUztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHdyYXBUID0gdGhpcy5fZ2V0R0xURlRleHR1cmVXcmFwTW9kZSh0ZXh0dXJlLndyYXBWKTtcclxuICAgICAgICBpZiAod3JhcFQgIT09IFRleHR1cmVXcmFwTW9kZS5SRVBFQVQpIHtcclxuICAgICAgICAgICAgc2FtcGxlci53cmFwVCA9IHdyYXBUO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3dpdGNoICh0ZXh0dXJlLnNhbXBsaW5nTW9kZSkge1xyXG4gICAgICAgICAgICBjYXNlIFRleHR1cmUuTElORUFSX0xJTkVBUjoge1xyXG4gICAgICAgICAgICAgICAgc2FtcGxlci5tYWdGaWx0ZXIgPSBUZXh0dXJlTWFnRmlsdGVyLkxJTkVBUjtcclxuICAgICAgICAgICAgICAgIHNhbXBsZXIubWluRmlsdGVyID0gVGV4dHVyZU1pbkZpbHRlci5MSU5FQVI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFRleHR1cmUuTElORUFSX05FQVJFU1Q6IHtcclxuICAgICAgICAgICAgICAgIHNhbXBsZXIubWFnRmlsdGVyID0gVGV4dHVyZU1hZ0ZpbHRlci5MSU5FQVI7XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVyLm1pbkZpbHRlciA9IFRleHR1cmVNaW5GaWx0ZXIuTkVBUkVTVDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgVGV4dHVyZS5ORUFSRVNUX0xJTkVBUjoge1xyXG4gICAgICAgICAgICAgICAgc2FtcGxlci5tYWdGaWx0ZXIgPSBUZXh0dXJlTWFnRmlsdGVyLk5FQVJFU1Q7XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVyLm1pbkZpbHRlciA9IFRleHR1cmVNaW5GaWx0ZXIuTElORUFSO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBUZXh0dXJlLk5FQVJFU1RfTElORUFSX01JUExJTkVBUjoge1xyXG4gICAgICAgICAgICAgICAgc2FtcGxlci5tYWdGaWx0ZXIgPSBUZXh0dXJlTWFnRmlsdGVyLk5FQVJFU1Q7XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVyLm1pbkZpbHRlciA9IFRleHR1cmVNaW5GaWx0ZXIuTElORUFSX01JUE1BUF9MSU5FQVI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFRleHR1cmUuTkVBUkVTVF9ORUFSRVNUOiB7XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVyLm1hZ0ZpbHRlciA9IFRleHR1cmVNYWdGaWx0ZXIuTkVBUkVTVDtcclxuICAgICAgICAgICAgICAgIHNhbXBsZXIubWluRmlsdGVyID0gVGV4dHVyZU1pbkZpbHRlci5ORUFSRVNUO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBUZXh0dXJlLk5FQVJFU1RfTElORUFSX01JUE5FQVJFU1Q6IHtcclxuICAgICAgICAgICAgICAgIHNhbXBsZXIubWFnRmlsdGVyID0gVGV4dHVyZU1hZ0ZpbHRlci5ORUFSRVNUO1xyXG4gICAgICAgICAgICAgICAgc2FtcGxlci5taW5GaWx0ZXIgPSBUZXh0dXJlTWluRmlsdGVyLkxJTkVBUl9NSVBNQVBfTkVBUkVTVDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgVGV4dHVyZS5MSU5FQVJfTkVBUkVTVF9NSVBORUFSRVNUOiB7XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVyLm1hZ0ZpbHRlciA9IFRleHR1cmVNYWdGaWx0ZXIuTElORUFSO1xyXG4gICAgICAgICAgICAgICAgc2FtcGxlci5taW5GaWx0ZXIgPSBUZXh0dXJlTWluRmlsdGVyLk5FQVJFU1RfTUlQTUFQX05FQVJFU1Q7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFRleHR1cmUuTElORUFSX05FQVJFU1RfTUlQTElORUFSOiB7XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVyLm1hZ0ZpbHRlciA9IFRleHR1cmVNYWdGaWx0ZXIuTElORUFSO1xyXG4gICAgICAgICAgICAgICAgc2FtcGxlci5taW5GaWx0ZXIgPSBUZXh0dXJlTWluRmlsdGVyLk5FQVJFU1RfTUlQTUFQX0xJTkVBUjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgVGV4dHVyZS5ORUFSRVNUX05FQVJFU1RfTUlQTElORUFSOiB7XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVyLm1hZ0ZpbHRlciA9IFRleHR1cmVNYWdGaWx0ZXIuTkVBUkVTVDtcclxuICAgICAgICAgICAgICAgIHNhbXBsZXIubWluRmlsdGVyID0gVGV4dHVyZU1pbkZpbHRlci5ORUFSRVNUX01JUE1BUF9MSU5FQVI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFRleHR1cmUuTElORUFSX0xJTkVBUl9NSVBMSU5FQVI6IHtcclxuICAgICAgICAgICAgICAgIHNhbXBsZXIubWFnRmlsdGVyID0gVGV4dHVyZU1hZ0ZpbHRlci5MSU5FQVI7XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVyLm1pbkZpbHRlciA9IFRleHR1cmVNaW5GaWx0ZXIuTElORUFSX01JUE1BUF9MSU5FQVI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFRleHR1cmUuTElORUFSX0xJTkVBUl9NSVBORUFSRVNUOiB7XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVyLm1hZ0ZpbHRlciA9IFRleHR1cmVNYWdGaWx0ZXIuTElORUFSO1xyXG4gICAgICAgICAgICAgICAgc2FtcGxlci5taW5GaWx0ZXIgPSBUZXh0dXJlTWluRmlsdGVyLkxJTkVBUl9NSVBNQVBfTkVBUkVTVDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgVGV4dHVyZS5ORUFSRVNUX05FQVJFU1RfTUlQTkVBUkVTVDoge1xyXG4gICAgICAgICAgICAgICAgc2FtcGxlci5tYWdGaWx0ZXIgPSBUZXh0dXJlTWFnRmlsdGVyLk5FQVJFU1Q7XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVyLm1pbkZpbHRlciA9IFRleHR1cmVNaW5GaWx0ZXIuTkVBUkVTVF9NSVBNQVBfTkVBUkVTVDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc2FtcGxlcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9nZXRHTFRGVGV4dHVyZVdyYXBNb2RlKHdyYXBNb2RlOiBudW1iZXIpOiBUZXh0dXJlV3JhcE1vZGUge1xyXG4gICAgICAgIHN3aXRjaCAod3JhcE1vZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBUZXh0dXJlLldSQVBfQUREUkVTU01PREU6IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBUZXh0dXJlV3JhcE1vZGUuUkVQRUFUO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgVGV4dHVyZS5DTEFNUF9BRERSRVNTTU9ERToge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFRleHR1cmVXcmFwTW9kZS5DTEFNUF9UT19FREdFO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgVGV4dHVyZS5NSVJST1JfQUREUkVTU01PREU6IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBUZXh0dXJlV3JhcE1vZGUuTUlSUk9SRURfUkVQRUFUO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgICAgIFRvb2xzLkVycm9yKGBVbnN1cHBvcnRlZCBUZXh0dXJlIFdyYXAgTW9kZSAke3dyYXBNb2RlfSFgKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBUZXh0dXJlV3JhcE1vZGUuUkVQRUFUO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCBhIFBCUk1hdGVyaWFsIChTcGVjdWxhci9HbG9zc2luZXNzKSB0byBNZXRhbGxpYyBSb3VnaG5lc3MgZmFjdG9yc1xyXG4gICAgICogQHBhcmFtIGJhYnlsb25QQlJNYXRlcmlhbCBCSlMgUEJSIE1ldGFsbGljIFJvdWdobmVzcyBNYXRlcmlhbFxyXG4gICAgICogQHBhcmFtIG1pbWVUeXBlIG1pbWUgdHlwZSB0byB1c2UgZm9yIHRoZSB0ZXh0dXJlc1xyXG4gICAgICogQHBhcmFtIHBick1ldGFsbGljUm91Z2huZXNzIGdsVEYgUEJSIE1ldGFsbGljIFJvdWdobmVzcyBpbnRlcmZhY2VcclxuICAgICAqIEBwYXJhbSBoYXNVVnMgc3BlY2lmaWVzIGlmIHRleHR1cmUgY29vcmRpbmF0ZXMgYXJlIHByZXNlbnQgb24gdGhlIHN1Ym1lc2ggdG8gZGV0ZXJtaW5lIGlmIHRleHR1cmVzIHNob3VsZCBiZSBhcHBsaWVkXHJcbiAgICAgKiBAcmV0dXJucyBnbFRGIFBCUiBNZXRhbGxpYyBSb3VnaG5lc3MgZmFjdG9yc1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGFzeW5jIF9jb252ZXJ0U3BlY0dsb3NzRmFjdG9yc1RvTWV0YWxsaWNSb3VnaG5lc3NBc3luYyhcclxuICAgICAgICBiYWJ5bG9uUEJSTWF0ZXJpYWw6IFBCUkJhc2VNYXRlcmlhbCxcclxuICAgICAgICBtaW1lVHlwZTogSW1hZ2VNaW1lVHlwZSxcclxuICAgICAgICBwYnJNZXRhbGxpY1JvdWdobmVzczogSU1hdGVyaWFsUGJyTWV0YWxsaWNSb3VnaG5lc3MsXHJcbiAgICAgICAgaGFzVVZzOiBib29sZWFuXHJcbiAgICApOiBQcm9taXNlPElQQlJNZXRhbGxpY1JvdWdobmVzcz4ge1xyXG4gICAgICAgIGNvbnN0IHNwZWNHbG9zczogSVBCUlNwZWN1bGFyR2xvc3NpbmVzcyA9IHtcclxuICAgICAgICAgICAgZGlmZnVzZUNvbG9yOiBiYWJ5bG9uUEJSTWF0ZXJpYWwuX2FsYmVkb0NvbG9yLFxyXG4gICAgICAgICAgICBzcGVjdWxhckNvbG9yOiBiYWJ5bG9uUEJSTWF0ZXJpYWwuX3JlZmxlY3Rpdml0eUNvbG9yLFxyXG4gICAgICAgICAgICBnbG9zc2luZXNzOiBiYWJ5bG9uUEJSTWF0ZXJpYWwuX21pY3JvU3VyZmFjZSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBhbGJlZG9UZXh0dXJlID0gYmFieWxvblBCUk1hdGVyaWFsLl9hbGJlZG9UZXh0dXJlO1xyXG4gICAgICAgIGNvbnN0IHJlZmxlY3Rpdml0eVRleHR1cmUgPSBiYWJ5bG9uUEJSTWF0ZXJpYWwuX3JlZmxlY3Rpdml0eVRleHR1cmU7XHJcbiAgICAgICAgY29uc3QgdXNlTWljcm9zdXJmYWNlRnJvbVJlZmxlY3Rpdml0eU1hcEFscGhhID0gYmFieWxvblBCUk1hdGVyaWFsLl91c2VNaWNyb1N1cmZhY2VGcm9tUmVmbGVjdGl2aXR5TWFwQWxwaGE7XHJcbiAgICAgICAgaWYgKHJlZmxlY3Rpdml0eVRleHR1cmUgJiYgIXVzZU1pY3Jvc3VyZmFjZUZyb21SZWZsZWN0aXZpdHlNYXBBbHBoYSkge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXCJfQ29udmVydFBCUk1hdGVyaWFsOiBHbG9zc2luZXNzIHZhbHVlcyBub3QgaW5jbHVkZWQgaW4gdGhlIHJlZmxlY3Rpdml0eSB0ZXh0dXJlIGFyZSBjdXJyZW50bHkgbm90IHN1cHBvcnRlZFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgoYWxiZWRvVGV4dHVyZSB8fCByZWZsZWN0aXZpdHlUZXh0dXJlKSAmJiBoYXNVVnMpIHtcclxuICAgICAgICAgICAgdGhpcy5fZXhwb3J0ZXIuX21hdGVyaWFsTmVlZHNVVnNTZXQuYWRkKGJhYnlsb25QQlJNYXRlcmlhbCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzYW1wbGVySW5kZXggPSB0aGlzLl9leHBvcnRUZXh0dXJlU2FtcGxlcihhbGJlZG9UZXh0dXJlIHx8IHJlZmxlY3Rpdml0eVRleHR1cmUpO1xyXG4gICAgICAgICAgICBjb25zdCBtZXRhbGxpY1JvdWdobmVzc0ZhY3RvcnMgPSBhd2FpdCB0aGlzLl9jb252ZXJ0U3BlY3VsYXJHbG9zc2luZXNzVGV4dHVyZXNUb01ldGFsbGljUm91Z2huZXNzQXN5bmMoYWxiZWRvVGV4dHVyZSwgcmVmbGVjdGl2aXR5VGV4dHVyZSwgc3BlY0dsb3NzLCBtaW1lVHlwZSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0ZXh0dXJlcyA9IHRoaXMuX2V4cG9ydGVyLl90ZXh0dXJlcztcclxuXHJcbiAgICAgICAgICAgIGlmIChtZXRhbGxpY1JvdWdobmVzc0ZhY3RvcnMuYmFzZUNvbG9yVGV4dHVyZURhdGEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlSW5kZXggPSB0aGlzLl9leHBvcnRJbWFnZShgYmFzZUNvbG9yJHt0ZXh0dXJlcy5sZW5ndGh9YCwgbWltZVR5cGUsIG1ldGFsbGljUm91Z2huZXNzRmFjdG9ycy5iYXNlQ29sb3JUZXh0dXJlRGF0YSk7XHJcbiAgICAgICAgICAgICAgICBwYnJNZXRhbGxpY1JvdWdobmVzcy5iYXNlQ29sb3JUZXh0dXJlID0gdGhpcy5fZXhwb3J0VGV4dHVyZUluZm8oaW1hZ2VJbmRleCwgc2FtcGxlckluZGV4LCBhbGJlZG9UZXh0dXJlPy5jb29yZGluYXRlc0luZGV4KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKG1ldGFsbGljUm91Z2huZXNzRmFjdG9ycy5tZXRhbGxpY1JvdWdobmVzc1RleHR1cmVEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbWFnZUluZGV4ID0gdGhpcy5fZXhwb3J0SW1hZ2UoYG1ldGFsbGljUm91Z2huZXNzJHt0ZXh0dXJlcy5sZW5ndGh9YCwgbWltZVR5cGUsIG1ldGFsbGljUm91Z2huZXNzRmFjdG9ycy5tZXRhbGxpY1JvdWdobmVzc1RleHR1cmVEYXRhKTtcclxuICAgICAgICAgICAgICAgIHBick1ldGFsbGljUm91Z2huZXNzLm1ldGFsbGljUm91Z2huZXNzVGV4dHVyZSA9IHRoaXMuX2V4cG9ydFRleHR1cmVJbmZvKGltYWdlSW5kZXgsIHNhbXBsZXJJbmRleCwgcmVmbGVjdGl2aXR5VGV4dHVyZT8uY29vcmRpbmF0ZXNJbmRleCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBtZXRhbGxpY1JvdWdobmVzc0ZhY3RvcnM7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbnZlcnRTcGVjdWxhckdsb3NzaW5lc3NUb01ldGFsbGljUm91Z2huZXNzKHNwZWNHbG9zcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBleHBvcnRQQlJNYXRlcmlhbEFzeW5jKGJhYnlsb25QQlJNYXRlcmlhbDogUEJSQmFzZU1hdGVyaWFsLCBtaW1lVHlwZTogSW1hZ2VNaW1lVHlwZSwgaGFzVVZzOiBib29sZWFuKTogUHJvbWlzZTxudW1iZXI+IHtcclxuICAgICAgICBjb25zdCBnbFRGUGJyTWV0YWxsaWNSb3VnaG5lc3M6IElNYXRlcmlhbFBick1ldGFsbGljUm91Z2huZXNzID0ge307XHJcblxyXG4gICAgICAgIGNvbnN0IGdsVEZNYXRlcmlhbDogSU1hdGVyaWFsID0ge1xyXG4gICAgICAgICAgICBuYW1lOiBiYWJ5bG9uUEJSTWF0ZXJpYWwubmFtZSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCB1c2VNZXRhbGxpY1JvdWdobmVzcyA9IGJhYnlsb25QQlJNYXRlcmlhbC5pc01ldGFsbGljV29ya2Zsb3coKTtcclxuXHJcbiAgICAgICAgaWYgKHVzZU1ldGFsbGljUm91Z2huZXNzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFsYmVkb0NvbG9yID0gYmFieWxvblBCUk1hdGVyaWFsLl9hbGJlZG9Db2xvcjtcclxuICAgICAgICAgICAgY29uc3QgYWxwaGEgPSBiYWJ5bG9uUEJSTWF0ZXJpYWwuYWxwaGE7XHJcbiAgICAgICAgICAgIGlmIChhbGJlZG9Db2xvcikge1xyXG4gICAgICAgICAgICAgICAgZ2xURlBick1ldGFsbGljUm91Z2huZXNzLmJhc2VDb2xvckZhY3RvciA9IFthbGJlZG9Db2xvci5yLCBhbGJlZG9Db2xvci5nLCBhbGJlZG9Db2xvci5iLCBhbHBoYV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG1ldGFsbGljUm91Z2huZXNzID0gdXNlTWV0YWxsaWNSb3VnaG5lc3NcclxuICAgICAgICAgICAgPyBhd2FpdCB0aGlzLl9jb252ZXJ0TWV0YWxSb3VnaEZhY3RvcnNUb01ldGFsbGljUm91Z2huZXNzQXN5bmMoYmFieWxvblBCUk1hdGVyaWFsLCBtaW1lVHlwZSwgZ2xURlBick1ldGFsbGljUm91Z2huZXNzLCBoYXNVVnMpXHJcbiAgICAgICAgICAgIDogYXdhaXQgdGhpcy5fY29udmVydFNwZWNHbG9zc0ZhY3RvcnNUb01ldGFsbGljUm91Z2huZXNzQXN5bmMoYmFieWxvblBCUk1hdGVyaWFsLCBtaW1lVHlwZSwgZ2xURlBick1ldGFsbGljUm91Z2huZXNzLCBoYXNVVnMpO1xyXG5cclxuICAgICAgICBhd2FpdCB0aGlzLl9zZXRNZXRhbGxpY1JvdWdobmVzc1Bick1hdGVyaWFsQXN5bmMobWV0YWxsaWNSb3VnaG5lc3MsIGJhYnlsb25QQlJNYXRlcmlhbCwgZ2xURk1hdGVyaWFsLCBnbFRGUGJyTWV0YWxsaWNSb3VnaG5lc3MsIG1pbWVUeXBlLCBoYXNVVnMpO1xyXG4gICAgICAgIGF3YWl0IHRoaXMuX2ZpbmlzaE1hdGVyaWFsQXN5bmMoZ2xURk1hdGVyaWFsLCBiYWJ5bG9uUEJSTWF0ZXJpYWwsIG1pbWVUeXBlKTtcclxuXHJcbiAgICAgICAgY29uc3QgbWF0ZXJpYWxzID0gdGhpcy5fZXhwb3J0ZXIuX21hdGVyaWFscztcclxuICAgICAgICBtYXRlcmlhbHMucHVzaChnbFRGTWF0ZXJpYWwpO1xyXG4gICAgICAgIHJldHVybiBtYXRlcmlhbHMubGVuZ3RoIC0gMTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIF9zZXRNZXRhbGxpY1JvdWdobmVzc1Bick1hdGVyaWFsQXN5bmMoXHJcbiAgICAgICAgbWV0YWxsaWNSb3VnaG5lc3M6IElQQlJNZXRhbGxpY1JvdWdobmVzcyxcclxuICAgICAgICBiYWJ5bG9uUEJSTWF0ZXJpYWw6IFBCUkJhc2VNYXRlcmlhbCxcclxuICAgICAgICBnbFRGTWF0ZXJpYWw6IElNYXRlcmlhbCxcclxuICAgICAgICBnbFRGUGJyTWV0YWxsaWNSb3VnaG5lc3M6IElNYXRlcmlhbFBick1ldGFsbGljUm91Z2huZXNzLFxyXG4gICAgICAgIG1pbWVUeXBlOiBJbWFnZU1pbWVUeXBlLFxyXG4gICAgICAgIGhhc1VWczogYm9vbGVhblxyXG4gICAgKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgU2V0QWxwaGFNb2RlKGdsVEZNYXRlcmlhbCwgYmFieWxvblBCUk1hdGVyaWFsKTtcclxuXHJcbiAgICAgICAgaWYgKCFtZXRhbGxpY1JvdWdobmVzcy5iYXNlQ29sb3IuZXF1YWxzV2l0aEVwc2lsb24od2hpdGUsIGVwc2lsb24pIHx8ICFTY2FsYXIuV2l0aGluRXBzaWxvbihiYWJ5bG9uUEJSTWF0ZXJpYWwuYWxwaGEsIDEsIGVwc2lsb24pKSB7XHJcbiAgICAgICAgICAgIGdsVEZQYnJNZXRhbGxpY1JvdWdobmVzcy5iYXNlQ29sb3JGYWN0b3IgPSBbbWV0YWxsaWNSb3VnaG5lc3MuYmFzZUNvbG9yLnIsIG1ldGFsbGljUm91Z2huZXNzLmJhc2VDb2xvci5nLCBtZXRhbGxpY1JvdWdobmVzcy5iYXNlQ29sb3IuYiwgYmFieWxvblBCUk1hdGVyaWFsLmFscGhhXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtZXRhbGxpY1JvdWdobmVzcy5tZXRhbGxpYyAhPSBudWxsICYmIG1ldGFsbGljUm91Z2huZXNzLm1ldGFsbGljICE9PSAxKSB7XHJcbiAgICAgICAgICAgIGdsVEZQYnJNZXRhbGxpY1JvdWdobmVzcy5tZXRhbGxpY0ZhY3RvciA9IG1ldGFsbGljUm91Z2huZXNzLm1ldGFsbGljO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWV0YWxsaWNSb3VnaG5lc3Mucm91Z2huZXNzICE9IG51bGwgJiYgbWV0YWxsaWNSb3VnaG5lc3Mucm91Z2huZXNzICE9PSAxKSB7XHJcbiAgICAgICAgICAgIGdsVEZQYnJNZXRhbGxpY1JvdWdobmVzcy5yb3VnaG5lc3NGYWN0b3IgPSBtZXRhbGxpY1JvdWdobmVzcy5yb3VnaG5lc3M7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYmFieWxvblBCUk1hdGVyaWFsLmJhY2tGYWNlQ3VsbGluZyAhPSBudWxsICYmICFiYWJ5bG9uUEJSTWF0ZXJpYWwuYmFja0ZhY2VDdWxsaW5nKSB7XHJcbiAgICAgICAgICAgIGlmICghYmFieWxvblBCUk1hdGVyaWFsLl90d29TaWRlZExpZ2h0aW5nKSB7XHJcbiAgICAgICAgICAgICAgICBUb29scy5XYXJuKGJhYnlsb25QQlJNYXRlcmlhbC5uYW1lICsgXCI6IEJhY2stZmFjZSBjdWxsaW5nIGRpc2FibGVkIGFuZCB0d28tc2lkZWQgbGlnaHRpbmcgZGlzYWJsZWQgaXMgbm90IHN1cHBvcnRlZCBpbiBnbFRGLlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBnbFRGTWF0ZXJpYWwuZG91YmxlU2lkZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGhhc1VWcykge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9taXNlczogUHJvbWlzZTx2b2lkPltdID0gW107XHJcblxyXG4gICAgICAgICAgICBjb25zdCBidW1wVGV4dHVyZSA9IGJhYnlsb25QQlJNYXRlcmlhbC5fYnVtcFRleHR1cmU7XHJcbiAgICAgICAgICAgIGlmIChidW1wVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4cG9ydFRleHR1cmVBc3luYyhidW1wVGV4dHVyZSwgbWltZVR5cGUpLnRoZW4oKGdsVEZUZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnbFRGVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xURk1hdGVyaWFsLm5vcm1hbFRleHR1cmUgPSBnbFRGVGV4dHVyZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChidW1wVGV4dHVyZS5sZXZlbCAhPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsVEZNYXRlcmlhbC5ub3JtYWxUZXh0dXJlLnNjYWxlID0gYnVtcFRleHR1cmUubGV2ZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgYW1iaWVudFRleHR1cmUgPSBiYWJ5bG9uUEJSTWF0ZXJpYWwuX2FtYmllbnRUZXh0dXJlO1xyXG4gICAgICAgICAgICBpZiAoYW1iaWVudFRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leHBvcnRUZXh0dXJlQXN5bmMoYW1iaWVudFRleHR1cmUsIG1pbWVUeXBlKS50aGVuKChnbFRGVGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2xURlRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9jY2x1c2lvblRleHR1cmU6IElNYXRlcmlhbE9jY2x1c2lvblRleHR1cmVJbmZvID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4OiBnbFRGVGV4dHVyZS5pbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXhDb29yZDogZ2xURlRleHR1cmUudGV4Q29vcmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0ZW5zaW9uczogZ2xURlRleHR1cmUuZXh0ZW5zaW9ucyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xURk1hdGVyaWFsLm9jY2x1c2lvblRleHR1cmUgPSBvY2NsdXNpb25UZXh0dXJlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYW1iaWVudFRleHR1cmVTdHJlbmd0aCA9IGJhYnlsb25QQlJNYXRlcmlhbC5fYW1iaWVudFRleHR1cmVTdHJlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbWJpZW50VGV4dHVyZVN0cmVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2NjbHVzaW9uVGV4dHVyZS5zdHJlbmd0aCA9IGFtYmllbnRUZXh0dXJlU3RyZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgZW1pc3NpdmVUZXh0dXJlID0gYmFieWxvblBCUk1hdGVyaWFsLl9lbWlzc2l2ZVRleHR1cmU7XHJcbiAgICAgICAgICAgIGlmIChlbWlzc2l2ZVRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leHBvcnRUZXh0dXJlQXN5bmMoZW1pc3NpdmVUZXh0dXJlLCBtaW1lVHlwZSkudGhlbigoZ2xURlRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdsVEZUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbFRGTWF0ZXJpYWwuZW1pc3NpdmVUZXh0dXJlID0gZ2xURlRleHR1cmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHByb21pc2VzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2V4cG9ydGVyLl9tYXRlcmlhbE5lZWRzVVZzU2V0LmFkZChiYWJ5bG9uUEJSTWF0ZXJpYWwpO1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBlbWlzc2l2ZUNvbG9yID0gYmFieWxvblBCUk1hdGVyaWFsLl9lbWlzc2l2ZUNvbG9yO1xyXG4gICAgICAgIGlmICghZW1pc3NpdmVDb2xvci5lcXVhbHNXaXRoRXBzaWxvbihibGFjaywgZXBzaWxvbikpIHtcclxuICAgICAgICAgICAgZ2xURk1hdGVyaWFsLmVtaXNzaXZlRmFjdG9yID0gZW1pc3NpdmVDb2xvci5hc0FycmF5KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnbFRGTWF0ZXJpYWwucGJyTWV0YWxsaWNSb3VnaG5lc3MgPSBnbFRGUGJyTWV0YWxsaWNSb3VnaG5lc3M7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZ2V0UGl4ZWxzRnJvbVRleHR1cmUoYmFieWxvblRleHR1cmU6IEJhc2VUZXh0dXJlKTogUHJvbWlzZTxOdWxsYWJsZTxVaW50OEFycmF5IHwgRmxvYXQzMkFycmF5Pj4ge1xyXG4gICAgICAgIGNvbnN0IHBpeGVscyA9XHJcbiAgICAgICAgICAgIGJhYnlsb25UZXh0dXJlLnRleHR1cmVUeXBlID09PSBDb25zdGFudHMuVEVYVFVSRVRZUEVfVU5TSUdORURfQllURVxyXG4gICAgICAgICAgICAgICAgPyAoYmFieWxvblRleHR1cmUucmVhZFBpeGVscygpIGFzIFByb21pc2U8VWludDhBcnJheT4pXHJcbiAgICAgICAgICAgICAgICA6IChiYWJ5bG9uVGV4dHVyZS5yZWFkUGl4ZWxzKCkgYXMgUHJvbWlzZTxGbG9hdDMyQXJyYXk+KTtcclxuICAgICAgICByZXR1cm4gcGl4ZWxzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBleHBvcnRUZXh0dXJlQXN5bmMoYmFieWxvblRleHR1cmU6IEJhc2VUZXh0dXJlLCBtaW1lVHlwZTogSW1hZ2VNaW1lVHlwZSk6IFByb21pc2U8TnVsbGFibGU8SVRleHR1cmVJbmZvPj4ge1xyXG4gICAgICAgIGNvbnN0IGV4dGVuc2lvblByb21pc2UgPSB0aGlzLl9leHBvcnRlci5fZXh0ZW5zaW9uc1ByZUV4cG9ydFRleHR1cmVBc3luYyhcImV4cG9ydGVyXCIsIGJhYnlsb25UZXh0dXJlIGFzIFRleHR1cmUsIG1pbWVUeXBlKTtcclxuICAgICAgICBpZiAoIWV4dGVuc2lvblByb21pc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2V4cG9ydFRleHR1cmVJbmZvQXN5bmMoYmFieWxvblRleHR1cmUsIG1pbWVUeXBlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBleHRlbnNpb25Qcm9taXNlLnRoZW4oKHRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgaWYgKCF0ZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZXhwb3J0VGV4dHVyZUluZm9Bc3luYyhiYWJ5bG9uVGV4dHVyZSwgbWltZVR5cGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9leHBvcnRUZXh0dXJlSW5mb0FzeW5jKHRleHR1cmUsIG1pbWVUeXBlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIF9leHBvcnRUZXh0dXJlSW5mb0FzeW5jKGJhYnlsb25UZXh0dXJlOiBCYXNlVGV4dHVyZSwgbWltZVR5cGU6IEltYWdlTWltZVR5cGUpOiBQcm9taXNlPE51bGxhYmxlPElUZXh0dXJlSW5mbz4+IHtcclxuICAgICAgICBsZXQgdGV4dHVyZUluZm8gPSB0aGlzLl90ZXh0dXJlTWFwLmdldChiYWJ5bG9uVGV4dHVyZSk7XHJcbiAgICAgICAgaWYgKCF0ZXh0dXJlSW5mbykge1xyXG4gICAgICAgICAgICBjb25zdCBwaXhlbHMgPSBhd2FpdCB0aGlzLl9nZXRQaXhlbHNGcm9tVGV4dHVyZShiYWJ5bG9uVGV4dHVyZSk7XHJcbiAgICAgICAgICAgIGlmICghcGl4ZWxzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2FtcGxlckluZGV4ID0gdGhpcy5fZXhwb3J0VGV4dHVyZVNhbXBsZXIoYmFieWxvblRleHR1cmUpO1xyXG5cclxuICAgICAgICAgICAgLy8gUHJlc2VydmUgdGV4dHVyZSBtaW1lIHR5cGUgaWYgZGVmaW5lZFxyXG4gICAgICAgICAgICBjb25zdCB0ZXh0dXJlTWltZVR5cGUgPSAoYmFieWxvblRleHR1cmUgYXMgVGV4dHVyZSkubWltZVR5cGU7XHJcbiAgICAgICAgICAgIGlmICh0ZXh0dXJlTWltZVR5cGUpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodGV4dHVyZU1pbWVUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImltYWdlL2pwZWdcIjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaW1hZ2UvcG5nXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImltYWdlL3dlYnBcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWltZVR5cGUgPSB0ZXh0dXJlTWltZVR5cGUgYXMgSW1hZ2VNaW1lVHlwZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgVG9vbHMuV2FybihgVW5zdXBwb3J0ZWQgbWVkaWEgdHlwZTogJHt0ZXh0dXJlTWltZVR5cGV9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBpbnRlcm5hbFRleHR1cmVUb0ltYWdlID0gdGhpcy5faW50ZXJuYWxUZXh0dXJlVG9JbWFnZTtcclxuICAgICAgICAgICAgY29uc3QgaW50ZXJuYWxUZXh0dXJlVW5pcXVlSWQgPSBiYWJ5bG9uVGV4dHVyZS5nZXRJbnRlcm5hbFRleHR1cmUoKSEudW5pcXVlSWQ7XHJcbiAgICAgICAgICAgIGludGVybmFsVGV4dHVyZVRvSW1hZ2VbaW50ZXJuYWxUZXh0dXJlVW5pcXVlSWRdIHx8PSB7fTtcclxuICAgICAgICAgICAgbGV0IGltYWdlSW5kZXhQcm9taXNlID0gaW50ZXJuYWxUZXh0dXJlVG9JbWFnZVtpbnRlcm5hbFRleHR1cmVVbmlxdWVJZF1bbWltZVR5cGVdO1xyXG4gICAgICAgICAgICBpZiAoaW1hZ2VJbmRleFByb21pc2UgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2l6ZSA9IGJhYnlsb25UZXh0dXJlLmdldFNpemUoKTtcclxuICAgICAgICAgICAgICAgIGltYWdlSW5kZXhQcm9taXNlID0gKGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5fZ2V0SW1hZ2VEYXRhQXN5bmMocGl4ZWxzLCBzaXplLndpZHRoLCBzaXplLmhlaWdodCwgbWltZVR5cGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9leHBvcnRJbWFnZShiYWJ5bG9uVGV4dHVyZS5uYW1lLCBtaW1lVHlwZSwgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9KSgpO1xyXG4gICAgICAgICAgICAgICAgaW50ZXJuYWxUZXh0dXJlVG9JbWFnZVtpbnRlcm5hbFRleHR1cmVVbmlxdWVJZF1bbWltZVR5cGVdID0gaW1hZ2VJbmRleFByb21pc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRleHR1cmVJbmZvID0gdGhpcy5fZXhwb3J0VGV4dHVyZUluZm8oYXdhaXQgaW1hZ2VJbmRleFByb21pc2UsIHNhbXBsZXJJbmRleCwgYmFieWxvblRleHR1cmUuY29vcmRpbmF0ZXNJbmRleCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3RleHR1cmVNYXAuc2V0KGJhYnlsb25UZXh0dXJlLCB0ZXh0dXJlSW5mbyk7XHJcbiAgICAgICAgICAgIHRoaXMuX2V4cG9ydGVyLl9leHRlbnNpb25zUG9zdEV4cG9ydFRleHR1cmVzKFwiZXhwb3J0ZXJcIiwgdGV4dHVyZUluZm8sIGJhYnlsb25UZXh0dXJlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0ZXh0dXJlSW5mbztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9leHBvcnRJbWFnZShuYW1lOiBzdHJpbmcsIG1pbWVUeXBlOiBJbWFnZU1pbWVUeXBlLCBkYXRhOiBBcnJheUJ1ZmZlcik6IG51bWJlciB7XHJcbiAgICAgICAgY29uc3QgaW1hZ2VzID0gdGhpcy5fZXhwb3J0ZXIuX2ltYWdlcztcclxuXHJcbiAgICAgICAgbGV0IGltYWdlOiBJSW1hZ2U7XHJcbiAgICAgICAgaWYgKHRoaXMuX2V4cG9ydGVyLl9zaG91bGRVc2VHbGIpIHtcclxuICAgICAgICAgICAgaW1hZ2UgPSB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgbWltZVR5cGU6IG1pbWVUeXBlLFxyXG4gICAgICAgICAgICAgICAgYnVmZmVyVmlldzogdW5kZWZpbmVkLCAvLyBXaWxsIGJlIHVwZGF0ZWQgbGF0ZXIgYnkgQnVmZmVyTWFuYWdlclxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zdCBidWZmZXJWaWV3ID0gdGhpcy5fZXhwb3J0ZXIuX2J1ZmZlck1hbmFnZXIuY3JlYXRlQnVmZmVyVmlldyhuZXcgVWludDhBcnJheShkYXRhKSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2V4cG9ydGVyLl9idWZmZXJNYW5hZ2VyLnNldEJ1ZmZlclZpZXcoaW1hZ2UsIGJ1ZmZlclZpZXcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIEJ1aWxkIGEgdW5pcXVlIFVSSVxyXG4gICAgICAgICAgICBjb25zdCBiYXNlTmFtZSA9IG5hbWUucmVwbGFjZSgvXFwuXFwvfFxcL3xcXC5cXFxcfFxcXFwvZywgXCJfXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBleHRlbnNpb24gPSBHZXRGaWxlRXh0ZW5zaW9uRnJvbU1pbWVUeXBlKG1pbWVUeXBlKTtcclxuICAgICAgICAgICAgbGV0IGZpbGVOYW1lID0gYmFzZU5hbWUgKyBleHRlbnNpb247XHJcbiAgICAgICAgICAgIGlmIChpbWFnZXMuc29tZSgoaW1hZ2UpID0+IGltYWdlLnVyaSA9PT0gZmlsZU5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICBmaWxlTmFtZSA9IGAke2Jhc2VOYW1lfV8ke1Rvb2xzLlJhbmRvbUlkKCl9JHtleHRlbnNpb259YDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW1hZ2UgPSB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgdXJpOiBmaWxlTmFtZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5fZXhwb3J0ZXIuX2ltYWdlRGF0YVtmaWxlTmFtZV0gPSB7IGRhdGE6IGRhdGEsIG1pbWVUeXBlOiBtaW1lVHlwZSB9OyAvLyBTYXZlIGltYWdlIGRhdGEgdG8gYmUgd3JpdHRlbiB0byBmaWxlIGxhdGVyXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbWFnZXMucHVzaChpbWFnZSk7XHJcblxyXG4gICAgICAgIHJldHVybiBpbWFnZXMubGVuZ3RoIC0gMTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9leHBvcnRUZXh0dXJlSW5mbyhpbWFnZUluZGV4OiBudW1iZXIsIHNhbXBsZXJJbmRleDogbnVtYmVyLCBjb29yZGluYXRlc0luZGV4PzogbnVtYmVyKTogSVRleHR1cmVJbmZvIHtcclxuICAgICAgICBjb25zdCB0ZXh0dXJlcyA9IHRoaXMuX2V4cG9ydGVyLl90ZXh0dXJlcztcclxuICAgICAgICBsZXQgdGV4dHVyZUluZGV4ID0gdGV4dHVyZXMuZmluZEluZGV4KCh0KSA9PiB0LnNhbXBsZXIgPT0gc2FtcGxlckluZGV4ICYmIHQuc291cmNlID09PSBpbWFnZUluZGV4KTtcclxuICAgICAgICBpZiAodGV4dHVyZUluZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgICB0ZXh0dXJlSW5kZXggPSB0ZXh0dXJlcy5sZW5ndGg7XHJcbiAgICAgICAgICAgIHRleHR1cmVzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgc291cmNlOiBpbWFnZUluZGV4LFxyXG4gICAgICAgICAgICAgICAgc2FtcGxlcjogc2FtcGxlckluZGV4LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHRleHR1cmVJbmZvOiBJVGV4dHVyZUluZm8gPSB7IGluZGV4OiB0ZXh0dXJlSW5kZXggfTtcclxuICAgICAgICBpZiAoY29vcmRpbmF0ZXNJbmRleCkge1xyXG4gICAgICAgICAgICB0ZXh0dXJlSW5mby50ZXhDb29yZCA9IGNvb3JkaW5hdGVzSW5kZXg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0ZXh0dXJlSW5mbztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9leHBvcnRUZXh0dXJlU2FtcGxlcih0ZXh0dXJlOiBOdWxsYWJsZTxCYXNlVGV4dHVyZT4pOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IHNhbXBsZXIgPSB0aGlzLl9nZXRUZXh0dXJlU2FtcGxlcih0ZXh0dXJlKTtcclxuXHJcbiAgICAgICAgLy8gaWYgYSBwcmUtZXhpc3Rpbmcgc2FtcGxlciB3aXRoIGlkZW50aWNhbCBwYXJhbWV0ZXJzIGV4aXN0cywgdGhlbiByZXVzZSB0aGUgcHJldmlvdXMgc2FtcGxlclxyXG4gICAgICAgIGNvbnN0IHNhbXBsZXJzID0gdGhpcy5fZXhwb3J0ZXIuX3NhbXBsZXJzO1xyXG4gICAgICAgIGNvbnN0IHNhbXBsZXJJbmRleCA9IHNhbXBsZXJzLmZpbmRJbmRleChcclxuICAgICAgICAgICAgKHMpID0+IHMubWluRmlsdGVyID09PSBzYW1wbGVyLm1pbkZpbHRlciAmJiBzLm1hZ0ZpbHRlciA9PT0gc2FtcGxlci5tYWdGaWx0ZXIgJiYgcy53cmFwUyA9PT0gc2FtcGxlci53cmFwUyAmJiBzLndyYXBUID09PSBzYW1wbGVyLndyYXBUXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAoc2FtcGxlckluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gc2FtcGxlckluZGV4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2FtcGxlcnMucHVzaChzYW1wbGVyKTtcclxuICAgICAgICByZXR1cm4gc2FtcGxlcnMubGVuZ3RoIC0gMTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgdHlwZSB7IElCdWZmZXJWaWV3LCBJQWNjZXNzb3IgfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IEFjY2Vzc29yQ29tcG9uZW50VHlwZSwgQWNjZXNzb3JUeXBlIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgdHlwZSB7IE1vcnBoVGFyZ2V0IH0gZnJvbSBcImNvcmUvTW9ycGgvbW9ycGhUYXJnZXRcIjtcclxuaW1wb3J0IHR5cGUgeyBCdWZmZXJNYW5hZ2VyIH0gZnJvbSBcIi4vYnVmZmVyTWFuYWdlclwiO1xyXG5cclxuaW1wb3J0IHsgTm9ybWFsaXplVGFuZ2VudCB9IGZyb20gXCIuL2dsVEZVdGlsaXRpZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBNZXNoIH0gZnJvbSBcImNvcmUvTWVzaGVzL21lc2hcIjtcclxuaW1wb3J0IHsgVmVydGV4QnVmZmVyIH0gZnJvbSBcImNvcmUvQnVmZmVycy9idWZmZXJcIjtcclxuaW1wb3J0IHsgVmVjdG9yMywgVmVjdG9yNCB9IGZyb20gXCJjb3JlL01hdGhzL21hdGgudmVjdG9yXCI7XHJcbmltcG9ydCB7IFRvb2xzIH0gZnJvbSBcImNvcmUvTWlzYy90b29sc1wiO1xyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSB0byBzdG9yZSBtb3JwaCB0YXJnZXQgaW5mb3JtYXRpb24uXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJTW9ycGhUYXJnZXREYXRhIHtcclxuICAgIGF0dHJpYnV0ZXM6IFJlY29yZDxzdHJpbmcsIG51bWJlcj47XHJcbiAgICBpbmZsdWVuY2U6IG51bWJlcjtcclxuICAgIG5hbWU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEJ1aWxkTW9ycGhUYXJnZXRCdWZmZXJzKFxyXG4gICAgbW9ycGhUYXJnZXQ6IE1vcnBoVGFyZ2V0LFxyXG4gICAgbWVzaDogTWVzaCxcclxuICAgIGJ1ZmZlck1hbmFnZXI6IEJ1ZmZlck1hbmFnZXIsXHJcbiAgICBidWZmZXJWaWV3czogSUJ1ZmZlclZpZXdbXSxcclxuICAgIGFjY2Vzc29yczogSUFjY2Vzc29yW10sXHJcbiAgICBjb252ZXJ0VG9SaWdodEhhbmRlZDogYm9vbGVhblxyXG4pOiBJTW9ycGhUYXJnZXREYXRhIHtcclxuICAgIGNvbnN0IHJlc3VsdDogSU1vcnBoVGFyZ2V0RGF0YSA9IHtcclxuICAgICAgICBhdHRyaWJ1dGVzOiB7fSxcclxuICAgICAgICBpbmZsdWVuY2U6IG1vcnBoVGFyZ2V0LmluZmx1ZW5jZSxcclxuICAgICAgICBuYW1lOiBtb3JwaFRhcmdldC5uYW1lLFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBmbGlwWCA9IGNvbnZlcnRUb1JpZ2h0SGFuZGVkID8gLTEgOiAxO1xyXG4gICAgY29uc3QgZmxvYXRTaXplID0gNDtcclxuICAgIGNvbnN0IGRpZmZlcmVuY2UgPSBWZWN0b3IzLlplcm8oKTtcclxuICAgIGxldCB2ZXJ0ZXhTdGFydCA9IDA7XHJcbiAgICBsZXQgdmVydGV4Q291bnQgPSAwO1xyXG5cclxuICAgIGlmIChtb3JwaFRhcmdldC5oYXNQb3NpdGlvbnMpIHtcclxuICAgICAgICBjb25zdCBtb3JwaFBvc2l0aW9ucyA9IG1vcnBoVGFyZ2V0LmdldFBvc2l0aW9ucygpITtcclxuICAgICAgICBjb25zdCBvcmlnaW5hbFBvc2l0aW9ucyA9IG1lc2guZ2V0VmVydGljZXNEYXRhKFZlcnRleEJ1ZmZlci5Qb3NpdGlvbktpbmQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0cnVlKTtcclxuXHJcbiAgICAgICAgaWYgKG9yaWdpbmFsUG9zaXRpb25zKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uRGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkob3JpZ2luYWxQb3NpdGlvbnMubGVuZ3RoKTtcclxuICAgICAgICAgICAgY29uc3QgbWluID0gW0luZmluaXR5LCBJbmZpbml0eSwgSW5maW5pdHldO1xyXG4gICAgICAgICAgICBjb25zdCBtYXggPSBbLUluZmluaXR5LCAtSW5maW5pdHksIC1JbmZpbml0eV07XHJcbiAgICAgICAgICAgIHZlcnRleENvdW50ID0gb3JpZ2luYWxQb3NpdGlvbnMubGVuZ3RoIC8gMztcclxuICAgICAgICAgICAgdmVydGV4U3RhcnQgPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gdmVydGV4U3RhcnQ7IGkgPCB2ZXJ0ZXhDb3VudDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvcmlnaW5hbFBvc2l0aW9uID0gVmVjdG9yMy5Gcm9tQXJyYXkob3JpZ2luYWxQb3NpdGlvbnMsIGkgKiAzKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1vcnBoUG9zaXRpb24gPSBWZWN0b3IzLkZyb21BcnJheShtb3JwaFBvc2l0aW9ucywgaSAqIDMpO1xyXG4gICAgICAgICAgICAgICAgbW9ycGhQb3NpdGlvbi5zdWJ0cmFjdFRvUmVmKG9yaWdpbmFsUG9zaXRpb24sIGRpZmZlcmVuY2UpO1xyXG4gICAgICAgICAgICAgICAgZGlmZmVyZW5jZS54ICo9IGZsaXBYO1xyXG5cclxuICAgICAgICAgICAgICAgIG1pblswXSA9IE1hdGgubWluKG1pblswXSwgZGlmZmVyZW5jZS54KTtcclxuICAgICAgICAgICAgICAgIG1heFswXSA9IE1hdGgubWF4KG1heFswXSwgZGlmZmVyZW5jZS54KTtcclxuXHJcbiAgICAgICAgICAgICAgICBtaW5bMV0gPSBNYXRoLm1pbihtaW5bMV0sIGRpZmZlcmVuY2UueSk7XHJcbiAgICAgICAgICAgICAgICBtYXhbMV0gPSBNYXRoLm1heChtYXhbMV0sIGRpZmZlcmVuY2UueSk7XHJcblxyXG4gICAgICAgICAgICAgICAgbWluWzJdID0gTWF0aC5taW4obWluWzJdLCBkaWZmZXJlbmNlLnopO1xyXG4gICAgICAgICAgICAgICAgbWF4WzJdID0gTWF0aC5tYXgobWF4WzJdLCBkaWZmZXJlbmNlLnopO1xyXG5cclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uRGF0YVtpICogM10gPSBkaWZmZXJlbmNlLng7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbkRhdGFbaSAqIDMgKyAxXSA9IGRpZmZlcmVuY2UueTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uRGF0YVtpICogMyArIDJdID0gZGlmZmVyZW5jZS56O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBidWZmZXJWaWV3ID0gYnVmZmVyTWFuYWdlci5jcmVhdGVCdWZmZXJWaWV3KHBvc2l0aW9uRGF0YSwgZmxvYXRTaXplICogMyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGFjY2Vzc29yID0gYnVmZmVyTWFuYWdlci5jcmVhdGVBY2Nlc3NvcihidWZmZXJWaWV3LCBBY2Nlc3NvclR5cGUuVkVDMywgQWNjZXNzb3JDb21wb25lbnRUeXBlLkZMT0FULCBtb3JwaFBvc2l0aW9ucy5sZW5ndGggLyAzLCAwLCB7IG1pbiwgbWF4IH0pO1xyXG4gICAgICAgICAgICBhY2Nlc3NvcnMucHVzaChhY2Nlc3Nvcik7XHJcbiAgICAgICAgICAgIHJlc3VsdC5hdHRyaWJ1dGVzW1wiUE9TSVRJT05cIl0gPSBhY2Nlc3NvcnMubGVuZ3RoIC0gMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBUb29scy5XYXJuKGBNb3JwaCB0YXJnZXQgcG9zaXRpb25zIGZvciBtZXNoICR7bWVzaC5uYW1lfSB3ZXJlIG5vdCBleHBvcnRlZC4gTWVzaCBkb2VzIG5vdCBoYXZlIHBvc2l0aW9uIHZlcnRleCBkYXRhYCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChtb3JwaFRhcmdldC5oYXNOb3JtYWxzKSB7XHJcbiAgICAgICAgY29uc3QgbW9ycGhOb3JtYWxzID0gbW9ycGhUYXJnZXQuZ2V0Tm9ybWFscygpITtcclxuICAgICAgICBjb25zdCBvcmlnaW5hbE5vcm1hbHMgPSBtZXNoLmdldFZlcnRpY2VzRGF0YShWZXJ0ZXhCdWZmZXIuTm9ybWFsS2luZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRydWUpO1xyXG5cclxuICAgICAgICBpZiAob3JpZ2luYWxOb3JtYWxzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vcm1hbERhdGEgPSBuZXcgRmxvYXQzMkFycmF5KG9yaWdpbmFsTm9ybWFscy5sZW5ndGgpO1xyXG4gICAgICAgICAgICB2ZXJ0ZXhDb3VudCA9IG9yaWdpbmFsTm9ybWFscy5sZW5ndGggLyAzO1xyXG4gICAgICAgICAgICB2ZXJ0ZXhTdGFydCA9IDA7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSB2ZXJ0ZXhTdGFydDsgaSA8IHZlcnRleENvdW50OyArK2kpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsTm9ybWFsID0gVmVjdG9yMy5Gcm9tQXJyYXkob3JpZ2luYWxOb3JtYWxzLCBpICogMykubm9ybWFsaXplKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtb3JwaE5vcm1hbCA9IFZlY3RvcjMuRnJvbUFycmF5KG1vcnBoTm9ybWFscywgaSAqIDMpLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgICAgICAgICAgbW9ycGhOb3JtYWwuc3VidHJhY3RUb1JlZihvcmlnaW5hbE5vcm1hbCwgZGlmZmVyZW5jZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgbm9ybWFsRGF0YVtpICogM10gPSBkaWZmZXJlbmNlLnggKiBmbGlwWDtcclxuICAgICAgICAgICAgICAgIG5vcm1hbERhdGFbaSAqIDMgKyAxXSA9IGRpZmZlcmVuY2UueTtcclxuICAgICAgICAgICAgICAgIG5vcm1hbERhdGFbaSAqIDMgKyAyXSA9IGRpZmZlcmVuY2UuejtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgYnVmZmVyVmlldyA9IGJ1ZmZlck1hbmFnZXIuY3JlYXRlQnVmZmVyVmlldyhub3JtYWxEYXRhLCBmbG9hdFNpemUgKiAzKTtcclxuICAgICAgICAgICAgY29uc3QgYWNjZXNzb3IgPSBidWZmZXJNYW5hZ2VyLmNyZWF0ZUFjY2Vzc29yKGJ1ZmZlclZpZXcsIEFjY2Vzc29yVHlwZS5WRUMzLCBBY2Nlc3NvckNvbXBvbmVudFR5cGUuRkxPQVQsIG1vcnBoTm9ybWFscy5sZW5ndGggLyAzLCAwKTtcclxuICAgICAgICAgICAgYWNjZXNzb3JzLnB1c2goYWNjZXNzb3IpO1xyXG4gICAgICAgICAgICByZXN1bHQuYXR0cmlidXRlc1tcIk5PUk1BTFwiXSA9IGFjY2Vzc29ycy5sZW5ndGggLSAxO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIFRvb2xzLldhcm4oYE1vcnBoIHRhcmdldCBub3JtYWxzIGZvciBtZXNoICR7bWVzaC5uYW1lfSB3ZXJlIG5vdCBleHBvcnRlZC4gTWVzaCBkb2VzIG5vdCBoYXZlIG5vcm1hbHMgdmVydGV4IGRhdGFgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG1vcnBoVGFyZ2V0Lmhhc1RhbmdlbnRzKSB7XHJcbiAgICAgICAgY29uc3QgbW9ycGhUYW5nZW50cyA9IG1vcnBoVGFyZ2V0LmdldFRhbmdlbnRzKCkhO1xyXG4gICAgICAgIGNvbnN0IG9yaWdpbmFsVGFuZ2VudHMgPSBtZXNoLmdldFZlcnRpY2VzRGF0YShWZXJ0ZXhCdWZmZXIuVGFuZ2VudEtpbmQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0cnVlKTtcclxuXHJcbiAgICAgICAgaWYgKG9yaWdpbmFsVGFuZ2VudHMpIHtcclxuICAgICAgICAgICAgdmVydGV4Q291bnQgPSBvcmlnaW5hbFRhbmdlbnRzLmxlbmd0aCAvIDQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhbmdlbnREYXRhID0gbmV3IEZsb2F0MzJBcnJheSh2ZXJ0ZXhDb3VudCAqIDMpO1xyXG4gICAgICAgICAgICB2ZXJ0ZXhTdGFydCA9IDA7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSB2ZXJ0ZXhTdGFydDsgaSA8IHZlcnRleENvdW50OyArK2kpIHtcclxuICAgICAgICAgICAgICAgIC8vIE9ubHkgcmVhZCB0aGUgeCwgeSwgeiBjb21wb25lbnRzIGFuZCBpZ25vcmUgd1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxUYW5nZW50ID0gVmVjdG9yMy5Gcm9tQXJyYXkob3JpZ2luYWxUYW5nZW50cywgaSAqIDQpO1xyXG4gICAgICAgICAgICAgICAgTm9ybWFsaXplVGFuZ2VudChvcmlnaW5hbFRhbmdlbnQpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIE1vcnBoIHRhcmdldCB0YW5nZW50cyBvbWl0IHRoZSB3IGNvbXBvbmVudCBzbyBpdCB3b24ndCBiZSBwcmVzZW50IGluIHRoZSBkYXRhXHJcbiAgICAgICAgICAgICAgICBjb25zdCBtb3JwaFRhbmdlbnQgPSBWZWN0b3IzLkZyb21BcnJheShtb3JwaFRhbmdlbnRzLCBpICogMyk7XHJcbiAgICAgICAgICAgICAgICBOb3JtYWxpemVUYW5nZW50KG1vcnBoVGFuZ2VudCk7XHJcblxyXG4gICAgICAgICAgICAgICAgbW9ycGhUYW5nZW50LnN1YnRyYWN0VG9SZWYob3JpZ2luYWxUYW5nZW50LCBkaWZmZXJlbmNlKTtcclxuICAgICAgICAgICAgICAgIHRhbmdlbnREYXRhW2kgKiAzXSA9IGRpZmZlcmVuY2UueCAqIGZsaXBYO1xyXG4gICAgICAgICAgICAgICAgdGFuZ2VudERhdGFbaSAqIDMgKyAxXSA9IGRpZmZlcmVuY2UueTtcclxuICAgICAgICAgICAgICAgIHRhbmdlbnREYXRhW2kgKiAzICsgMl0gPSBkaWZmZXJlbmNlLno7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgYnVmZmVyVmlldyA9IGJ1ZmZlck1hbmFnZXIuY3JlYXRlQnVmZmVyVmlldyh0YW5nZW50RGF0YSwgZmxvYXRTaXplICogMyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGFjY2Vzc29yID0gYnVmZmVyTWFuYWdlci5jcmVhdGVBY2Nlc3NvcihidWZmZXJWaWV3LCBBY2Nlc3NvclR5cGUuVkVDMywgQWNjZXNzb3JDb21wb25lbnRUeXBlLkZMT0FULCB2ZXJ0ZXhDb3VudCwgMCk7XHJcbiAgICAgICAgICAgIGFjY2Vzc29ycy5wdXNoKGFjY2Vzc29yKTtcclxuICAgICAgICAgICAgcmVzdWx0LmF0dHJpYnV0ZXNbXCJUQU5HRU5UXCJdID0gYWNjZXNzb3JzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgVG9vbHMuV2FybihgTW9ycGggdGFyZ2V0IHRhbmdlbnRzIGZvciBtZXNoICR7bWVzaC5uYW1lfSB3ZXJlIG5vdCBleHBvcnRlZC4gTWVzaCBkb2VzIG5vdCBoYXZlIHRhbmdlbnRzIHZlcnRleCBkYXRhYCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChtb3JwaFRhcmdldC5oYXNDb2xvcnMpIHtcclxuICAgICAgICBjb25zdCBtb3JwaENvbG9ycyA9IG1vcnBoVGFyZ2V0LmdldENvbG9ycygpITtcclxuICAgICAgICBjb25zdCBvcmlnaW5hbENvbG9ycyA9IG1lc2guZ2V0VmVydGljZXNEYXRhKFZlcnRleEJ1ZmZlci5Db2xvcktpbmQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0cnVlKTtcclxuXHJcbiAgICAgICAgY29uc3QgYnVmZmVyID0gbWVzaC5nZXRWZXJ0ZXhCdWZmZXIoVmVydGV4QnVmZmVyLkNvbG9yS2luZCwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIGlmIChvcmlnaW5hbENvbG9ycyAmJiBidWZmZXIpIHtcclxuICAgICAgICAgICAgY29uc3QgY29tcG9uZW50U2l6ZSA9IGJ1ZmZlci5nZXRTaXplKCk7XHJcblxyXG4gICAgICAgICAgICB2ZXJ0ZXhDb3VudCA9IG9yaWdpbmFsQ29sb3JzLmxlbmd0aCAvIGNvbXBvbmVudFNpemU7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yRGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkodmVydGV4Q291bnQgKiBjb21wb25lbnRTaXplKTtcclxuICAgICAgICAgICAgdmVydGV4U3RhcnQgPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gdmVydGV4U3RhcnQ7IGkgPCB2ZXJ0ZXhDb3VudDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29tcG9uZW50U2l6ZSA9PT0gMykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsQ29sb3IgPSBWZWN0b3IzLkZyb21BcnJheShvcmlnaW5hbENvbG9ycywgaSAqIGNvbXBvbmVudFNpemUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vcnBoQ29sb3IgPSBWZWN0b3IzLkZyb21BcnJheShtb3JwaENvbG9ycywgaSAqIGNvbXBvbmVudFNpemUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBtb3JwaENvbG9yLnN1YnRyYWN0VG9SZWYob3JpZ2luYWxDb2xvciwgZGlmZmVyZW5jZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3JEYXRhW2kgKiAzXSA9IGRpZmZlcmVuY2UueDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvckRhdGFbaSAqIDMgKyAxXSA9IGRpZmZlcmVuY2UueTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvckRhdGFbaSAqIDMgKyAyXSA9IGRpZmZlcmVuY2UuejtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29tcG9uZW50U2l6ZSA9PT0gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpZmZlcmVuY2U0ID0gbmV3IFZlY3RvcjQoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcmlnaW5hbENvbG9yID0gVmVjdG9yNC5Gcm9tQXJyYXkob3JpZ2luYWxDb2xvcnMsIGkgKiBjb21wb25lbnRTaXplKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtb3JwaENvbG9yID0gVmVjdG9yNC5Gcm9tQXJyYXkobW9ycGhDb2xvcnMsIGkgKiBjb21wb25lbnRTaXplKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbW9ycGhDb2xvci5zdWJ0cmFjdFRvUmVmKG9yaWdpbmFsQ29sb3IsIGRpZmZlcmVuY2U0KTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvckRhdGFbaSAqIDRdID0gZGlmZmVyZW5jZTQueDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvckRhdGFbaSAqIDQgKyAxXSA9IGRpZmZlcmVuY2U0Lnk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3JEYXRhW2kgKiA0ICsgMl0gPSBkaWZmZXJlbmNlNC56O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yRGF0YVtpICogNCArIDNdID0gZGlmZmVyZW5jZTQudztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgVG9vbHMuV2FybihgVW5zdXBwb3J0ZWQgbnVtYmVyIG9mIGNvbXBvbmVudHMgZm9yIGNvbG9yIGF0dHJpYnV0ZTogJHtjb21wb25lbnRTaXplfWApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGJ1ZmZlclZpZXcgPSBidWZmZXJNYW5hZ2VyLmNyZWF0ZUJ1ZmZlclZpZXcoY29sb3JEYXRhLCBmbG9hdFNpemUgKiBjb21wb25lbnRTaXplKTtcclxuICAgICAgICAgICAgY29uc3QgYWNjZXNzb3IgPSBidWZmZXJNYW5hZ2VyLmNyZWF0ZUFjY2Vzc29yKGJ1ZmZlclZpZXcsIGNvbXBvbmVudFNpemUgPT09IDMgPyBBY2Nlc3NvclR5cGUuVkVDMyA6IEFjY2Vzc29yVHlwZS5WRUM0LCBBY2Nlc3NvckNvbXBvbmVudFR5cGUuRkxPQVQsIHZlcnRleENvdW50LCAwKTtcclxuICAgICAgICAgICAgYWNjZXNzb3JzLnB1c2goYWNjZXNzb3IpO1xyXG4gICAgICAgICAgICByZXN1bHQuYXR0cmlidXRlc1tcIkNPTE9SXzBcIl0gPSBhY2Nlc3NvcnMubGVuZ3RoIC0gMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBUb29scy5XYXJuKGBNb3JwaCB0YXJnZXQgY29sb3JzIGZvciBtZXNoICR7bWVzaC5uYW1lfSB3ZXJlIG5vdCBleHBvcnRlZC4gTWVzaCBkb2VzIG5vdCBoYXZlIGNvbG9ycyB2ZXJ0ZXggZGF0YWApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbiIsImltcG9ydCB0eXBlIHsgTm9kZSB9IGZyb20gXCJjb3JlL25vZGVcIjtcclxuaW1wb3J0IHR5cGUgeyBTY2VuZSB9IGZyb20gXCJjb3JlL3NjZW5lXCI7XHJcbmltcG9ydCB0eXBlIHsgQW5pbWF0aW9uIH0gZnJvbSBcImNvcmUvQW5pbWF0aW9ucy9hbmltYXRpb25cIjtcclxuaW1wb3J0IHR5cGUgeyBHTFRGRGF0YSB9IGZyb20gXCIuL2dsVEZEYXRhXCI7XHJcbmltcG9ydCB7IEdMVEZFeHBvcnRlciB9IGZyb20gXCIuL2dsVEZFeHBvcnRlclwiO1xyXG5cclxuLyoqXHJcbiAqIE1lc2ggY29tcHJlc3Npb24gbWV0aG9kcy5cclxuICovXHJcbmV4cG9ydCB0eXBlIE1lc2hDb21wcmVzc2lvbk1ldGhvZCA9IFwiTm9uZVwiIHwgXCJEcmFjb1wiO1xyXG5cclxuLyoqXHJcbiAqIEhvbGRzIGEgY29sbGVjdGlvbiBvZiBleHBvcnRlciBvcHRpb25zIGFuZCBwYXJhbWV0ZXJzXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElFeHBvcnRPcHRpb25zIHtcclxuICAgIC8qKlxyXG4gICAgICogRnVuY3Rpb24gd2hpY2ggaW5kaWNhdGVzIHdoZXRoZXIgYSBiYWJ5bG9uIG5vZGUgc2hvdWxkIGJlIGV4cG9ydGVkIG9yIG5vdFxyXG4gICAgICogQHBhcmFtIG5vZGUgc291cmNlIEJhYnlsb24gbm9kZS4gSXQgaXMgdXNlZCB0byBjaGVjayB3aGV0aGVyIGl0IHNob3VsZCBiZSBleHBvcnRlZCB0byBnbFRGIG9yIG5vdFxyXG4gICAgICogQHJldHVybnMgYm9vbGVhbiwgd2hpY2ggaW5kaWNhdGVzIHdoZXRoZXIgdGhlIG5vZGUgc2hvdWxkIGJlIGV4cG9ydGVkICh0cnVlKSBvciBub3QgKGZhbHNlKVxyXG4gICAgICovXHJcbiAgICBzaG91bGRFeHBvcnROb2RlPyhub2RlOiBOb2RlKTogYm9vbGVhbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEZ1bmN0aW9uIHdoaWNoIGluZGljYXRlcyB3aGV0aGVyIGFuIGFuaW1hdGlvbiBvbiB0aGUgc2NlbmUgc2hvdWxkIGJlIGV4cG9ydGVkIG9yIG5vdFxyXG4gICAgICogQHBhcmFtIGFuaW1hdGlvbiBzb3VyY2UgYW5pbWF0aW9uXHJcbiAgICAgKiBAcmV0dXJucyBib29sZWFuLCB3aGljaCBpbmRpY2F0ZXMgd2hldGhlciB0aGUgYW5pbWF0aW9uIHNob3VsZCBiZSBleHBvcnRlZCAodHJ1ZSkgb3Igbm90IChmYWxzZSlcclxuICAgICAqL1xyXG4gICAgc2hvdWxkRXhwb3J0QW5pbWF0aW9uPyhhbmltYXRpb246IEFuaW1hdGlvbik6IGJvb2xlYW47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGdW5jdGlvbiB1c2VkIHRvIGV4dHJhY3QgdGhlIHBhcnQgb2Ygbm9kZSdzIG1ldGFkYXRhIHRoYXQgd2lsbCBiZSBleHBvcnRlZCBpbnRvIGdsVEYgbm9kZSBleHRyYXNcclxuICAgICAqIEBwYXJhbSBtZXRhZGF0YSBzb3VyY2UgbWV0YWRhdGEgdG8gcmVhZCBmcm9tXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgZGF0YSB0byBzdG9yZSB0byBnbFRGIG5vZGUgZXh0cmFzXHJcbiAgICAgKi9cclxuICAgIG1ldGFkYXRhU2VsZWN0b3I/KG1ldGFkYXRhOiBhbnkpOiBhbnk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgc2FtcGxlIHJhdGUgdG8gYmFrZSBhbmltYXRpb24gY3VydmVzLiBEZWZhdWx0cyB0byAxIC8gNjAuXHJcbiAgICAgKi9cclxuICAgIGFuaW1hdGlvblNhbXBsZVJhdGU/OiBudW1iZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBCZWdpbiBzZXJpYWxpemF0aW9uIHdpdGhvdXQgd2FpdGluZyBmb3IgdGhlIHNjZW5lIHRvIGJlIHJlYWR5LiBEZWZhdWx0cyB0byBmYWxzZS5cclxuICAgICAqL1xyXG4gICAgZXhwb3J0V2l0aG91dFdhaXRpbmdGb3JTY2VuZT86IGJvb2xlYW47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbmRpY2F0ZXMgaWYgdW51c2VkIHZlcnRleCB1diBhdHRyaWJ1dGVzIHNob3VsZCBiZSBpbmNsdWRlZCBpbiBleHBvcnQuIERlZmF1bHRzIHRvIGZhbHNlLlxyXG4gICAgICovXHJcbiAgICBleHBvcnRVbnVzZWRVVnM/OiBib29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlIG5vLW9wIHJvb3Qgbm9kZXMgd2hlbiBwb3NzaWJsZS4gRGVmYXVsdHMgdG8gdHJ1ZS5cclxuICAgICAqL1xyXG4gICAgcmVtb3ZlTm9vcFJvb3ROb2Rlcz86IGJvb2xlYW47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbmRpY2F0ZXMgaWYgY29vcmRpbmF0ZSBzeXN0ZW0gc3dhcHBpbmcgcm9vdCBub2RlcyBzaG91bGQgYmUgaW5jbHVkZWQgaW4gZXhwb3J0LiBEZWZhdWx0cyB0byBmYWxzZS5cclxuICAgICAqIEBkZXByZWNhdGVkIFBsZWFzZSB1c2UgcmVtb3ZlTm9vcFJvb3ROb2RlcyBpbnN0ZWFkXHJcbiAgICAgKi9cclxuICAgIGluY2x1ZGVDb29yZGluYXRlU3lzdGVtQ29udmVyc2lvbk5vZGVzPzogYm9vbGVhbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEluZGljYXRlcyB3aGF0IGNvbXByZXNzaW9uIG1ldGhvZCB0byBhcHBseSB0byBtZXNoIGRhdGEuXHJcbiAgICAgKi9cclxuICAgIG1lc2hDb21wcmVzc2lvbk1ldGhvZD86IE1lc2hDb21wcmVzc2lvbk1ldGhvZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIENsYXNzIGZvciBnZW5lcmF0aW5nIGdsVEYgZGF0YSBmcm9tIGEgQmFieWxvbiBzY2VuZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBHTFRGMkV4cG9ydCB7XHJcbiAgICAvKipcclxuICAgICAqIEV4cG9ydHMgdGhlIHNjZW5lIHRvIC5nbHRmIGZpbGUgZm9ybWF0XHJcbiAgICAgKiBAcGFyYW0gc2NlbmUgQmFieWxvbiBzY2VuZVxyXG4gICAgICogQHBhcmFtIGZpbGVOYW1lIE5hbWUgdG8gdXNlIGZvciB0aGUgLmdsdGYgZmlsZVxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgRXhwb3J0ZXIgb3B0aW9uc1xyXG4gICAgICogQHJldHVybnMgUmV0dXJucyB0aGUgZXhwb3J0ZWQgZGF0YVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIEdMVEZBc3luYyhzY2VuZTogU2NlbmUsIGZpbGVOYW1lOiBzdHJpbmcsIG9wdGlvbnM/OiBJRXhwb3J0T3B0aW9ucyk6IFByb21pc2U8R0xURkRhdGE+IHtcclxuICAgICAgICBpZiAoIW9wdGlvbnMgfHwgIW9wdGlvbnMuZXhwb3J0V2l0aG91dFdhaXRpbmdGb3JTY2VuZSkge1xyXG4gICAgICAgICAgICBhd2FpdCBzY2VuZS53aGVuUmVhZHlBc3luYygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZXhwb3J0ZXIgPSBuZXcgR0xURkV4cG9ydGVyKHNjZW5lLCBvcHRpb25zKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZXhwb3J0ZXIuZ2VuZXJhdGVHTFRGQXN5bmMoZmlsZU5hbWUucmVwbGFjZSgvXFwuW14vLl0rJC8sIFwiXCIpKTtcclxuICAgICAgICBleHBvcnRlci5kaXNwb3NlKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRXhwb3J0cyB0aGUgc2NlbmUgdG8gLmdsYiBmaWxlIGZvcm1hdFxyXG4gICAgICogQHBhcmFtIHNjZW5lIEJhYnlsb24gc2NlbmVcclxuICAgICAqIEBwYXJhbSBmaWxlTmFtZSBOYW1lIHRvIHVzZSBmb3IgdGhlIC5nbGIgZmlsZVxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgRXhwb3J0ZXIgb3B0aW9uc1xyXG4gICAgICogQHJldHVybnMgUmV0dXJucyB0aGUgZXhwb3J0ZWQgZGF0YVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIEdMQkFzeW5jKHNjZW5lOiBTY2VuZSwgZmlsZU5hbWU6IHN0cmluZywgb3B0aW9ucz86IElFeHBvcnRPcHRpb25zKTogUHJvbWlzZTxHTFRGRGF0YT4ge1xyXG4gICAgICAgIGlmICghb3B0aW9ucyB8fCAhb3B0aW9ucy5leHBvcnRXaXRob3V0V2FpdGluZ0ZvclNjZW5lKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHNjZW5lLndoZW5SZWFkeUFzeW5jKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBleHBvcnRlciA9IG5ldyBHTFRGRXhwb3J0ZXIoc2NlbmUsIG9wdGlvbnMpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBleHBvcnRlci5nZW5lcmF0ZUdMQkFzeW5jKGZpbGVOYW1lLnJlcGxhY2UoL1xcLlteLy5dKyQvLCBcIlwiKSk7XHJcbiAgICAgICAgZXhwb3J0ZXIuZGlzcG9zZSgpO1xyXG5cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBqc2RvYy9yZXF1aXJlLWpzZG9jICovXHJcblxyXG5pbXBvcnQgdHlwZSB7IElOb2RlIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBBY2Nlc3NvclR5cGUsIE1lc2hQcmltaXRpdmVNb2RlIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgdHlwZSB7IEZsb2F0QXJyYXksIERhdGFBcnJheSwgSW5kaWNlc0FycmF5IH0gZnJvbSBcImNvcmUvdHlwZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBWZWN0b3I0IH0gZnJvbSBcImNvcmUvTWF0aHMvbWF0aC52ZWN0b3JcIjtcclxuaW1wb3J0IHsgUXVhdGVybmlvbiwgVG1wVmVjdG9ycywgTWF0cml4LCBWZWN0b3IzIH0gZnJvbSBcImNvcmUvTWF0aHMvbWF0aC52ZWN0b3JcIjtcclxuaW1wb3J0IHsgVmVydGV4QnVmZmVyIH0gZnJvbSBcImNvcmUvQnVmZmVycy9idWZmZXJcIjtcclxuaW1wb3J0IHsgTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgVHJhbnNmb3JtTm9kZSB9IGZyb20gXCJjb3JlL01lc2hlcy90cmFuc2Zvcm1Ob2RlXCI7XHJcbmltcG9ydCB7IE1lc2ggfSBmcm9tIFwiY29yZS9NZXNoZXMvbWVzaFwiO1xyXG5pbXBvcnQgeyBJbnN0YW5jZWRNZXNoIH0gZnJvbSBcImNvcmUvTWVzaGVzL2luc3RhbmNlZE1lc2hcIjtcclxuaW1wb3J0IHsgRW51bWVyYXRlRmxvYXRWYWx1ZXMgfSBmcm9tIFwiY29yZS9CdWZmZXJzL2J1ZmZlclV0aWxzXCI7XHJcbmltcG9ydCB0eXBlIHsgTm9kZSB9IGZyb20gXCJjb3JlL25vZGVcIjtcclxuXHJcbi8vIE1hdHJpeCB0aGF0IGNvbnZlcnRzIGhhbmRlZG5lc3Mgb24gdGhlIFgtYXhpcy5cclxuY29uc3QgY29udmVydEhhbmRlZG5lc3NNYXRyaXggPSBNYXRyaXguQ29tcG9zZShuZXcgVmVjdG9yMygtMSwgMSwgMSksIFF1YXRlcm5pb24uSWRlbnRpdHkoKSwgVmVjdG9yMy5aZXJvKCkpO1xyXG5cclxuLy8gMTgwIGRlZ3JlZXMgcm90YXRpb24gaW4gWS5cclxuY29uc3Qgcm90YXRpb24xODBZID0gbmV3IFF1YXRlcm5pb24oMCwgMSwgMCwgMCk7XHJcblxyXG4vLyBEZWZhdWx0IHZhbHVlcyBmb3IgY29tcGFyaXNvbi5cclxuY29uc3QgZXBzaWxvbiA9IDFlLTY7XHJcbmNvbnN0IGRlZmF1bHRUcmFuc2xhdGlvbiA9IFZlY3RvcjMuWmVybygpO1xyXG5jb25zdCBkZWZhdWx0U2NhbGUgPSBWZWN0b3IzLk9uZSgpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdldEFjY2Vzc29yRWxlbWVudENvdW50KGFjY2Vzc29yVHlwZTogQWNjZXNzb3JUeXBlKTogbnVtYmVyIHtcclxuICAgIHN3aXRjaCAoYWNjZXNzb3JUeXBlKSB7XHJcbiAgICAgICAgY2FzZSBBY2Nlc3NvclR5cGUuTUFUMjpcclxuICAgICAgICAgICAgcmV0dXJuIDQ7XHJcbiAgICAgICAgY2FzZSBBY2Nlc3NvclR5cGUuTUFUMzpcclxuICAgICAgICAgICAgcmV0dXJuIDk7XHJcbiAgICAgICAgY2FzZSBBY2Nlc3NvclR5cGUuTUFUNDpcclxuICAgICAgICAgICAgcmV0dXJuIDE2O1xyXG4gICAgICAgIGNhc2UgQWNjZXNzb3JUeXBlLlNDQUxBUjpcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgY2FzZSBBY2Nlc3NvclR5cGUuVkVDMjpcclxuICAgICAgICAgICAgcmV0dXJuIDI7XHJcbiAgICAgICAgY2FzZSBBY2Nlc3NvclR5cGUuVkVDMzpcclxuICAgICAgICAgICAgcmV0dXJuIDM7XHJcbiAgICAgICAgY2FzZSBBY2Nlc3NvclR5cGUuVkVDNDpcclxuICAgICAgICAgICAgcmV0dXJuIDQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBGbG9hdHNOZWVkMTZCaXRJbnRlZ2VyKGZsb2F0QXJyYXk6IEZsb2F0QXJyYXkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBmbG9hdEFycmF5LnNvbWUoKHZhbHVlKSA9PiB2YWx1ZSA+PSAyNTYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gSXNTdGFuZGFyZFZlcnRleEF0dHJpYnV0ZSh0eXBlOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLlBvc2l0aW9uS2luZDpcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5Ob3JtYWxLaW5kOlxyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLlRhbmdlbnRLaW5kOlxyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLkNvbG9yS2luZDpcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5NYXRyaWNlc0luZGljZXNLaW5kOlxyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLk1hdHJpY2VzSW5kaWNlc0V4dHJhS2luZDpcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5NYXRyaWNlc1dlaWdodHNLaW5kOlxyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLk1hdHJpY2VzV2VpZ2h0c0V4dHJhS2luZDpcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5VVktpbmQ6XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuVVYyS2luZDpcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5VVjNLaW5kOlxyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLlVWNEtpbmQ6XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuVVY1S2luZDpcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5VVjZLaW5kOlxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdldEFjY2Vzc29yVHlwZShraW5kOiBzdHJpbmcsIGhhc1ZlcnRleENvbG9yQWxwaGE6IGJvb2xlYW4pOiBBY2Nlc3NvclR5cGUge1xyXG4gICAgaWYgKGtpbmQgPT0gVmVydGV4QnVmZmVyLkNvbG9yS2luZCkge1xyXG4gICAgICAgIHJldHVybiBoYXNWZXJ0ZXhDb2xvckFscGhhID8gQWNjZXNzb3JUeXBlLlZFQzQgOiBBY2Nlc3NvclR5cGUuVkVDMztcclxuICAgIH1cclxuXHJcbiAgICBzd2l0Y2ggKGtpbmQpIHtcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5Qb3NpdGlvbktpbmQ6XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuTm9ybWFsS2luZDpcclxuICAgICAgICAgICAgcmV0dXJuIEFjY2Vzc29yVHlwZS5WRUMzO1xyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLlRhbmdlbnRLaW5kOlxyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLk1hdHJpY2VzSW5kaWNlc0tpbmQ6XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuTWF0cmljZXNJbmRpY2VzRXh0cmFLaW5kOlxyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLk1hdHJpY2VzV2VpZ2h0c0tpbmQ6XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuTWF0cmljZXNXZWlnaHRzRXh0cmFLaW5kOlxyXG4gICAgICAgICAgICByZXR1cm4gQWNjZXNzb3JUeXBlLlZFQzQ7XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuVVZLaW5kOlxyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLlVWMktpbmQ6XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuVVYzS2luZDpcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5VVjRLaW5kOlxyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLlVWNUtpbmQ6XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuVVY2S2luZDpcclxuICAgICAgICAgICAgcmV0dXJuIEFjY2Vzc29yVHlwZS5WRUMyO1xyXG4gICAgfVxyXG5cclxuICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBraW5kICR7a2luZH1gKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdldEF0dHJpYnV0ZVR5cGUoa2luZDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHN3aXRjaCAoa2luZCkge1xyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLlBvc2l0aW9uS2luZDpcclxuICAgICAgICAgICAgcmV0dXJuIFwiUE9TSVRJT05cIjtcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5Ob3JtYWxLaW5kOlxyXG4gICAgICAgICAgICByZXR1cm4gXCJOT1JNQUxcIjtcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5UYW5nZW50S2luZDpcclxuICAgICAgICAgICAgcmV0dXJuIFwiVEFOR0VOVFwiO1xyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLkNvbG9yS2luZDpcclxuICAgICAgICAgICAgcmV0dXJuIFwiQ09MT1JfMFwiO1xyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLlVWS2luZDpcclxuICAgICAgICAgICAgcmV0dXJuIFwiVEVYQ09PUkRfMFwiO1xyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLlVWMktpbmQ6XHJcbiAgICAgICAgICAgIHJldHVybiBcIlRFWENPT1JEXzFcIjtcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5VVjNLaW5kOlxyXG4gICAgICAgICAgICByZXR1cm4gXCJURVhDT09SRF8yXCI7XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuVVY0S2luZDpcclxuICAgICAgICAgICAgcmV0dXJuIFwiVEVYQ09PUkRfM1wiO1xyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLlVWNUtpbmQ6XHJcbiAgICAgICAgICAgIHJldHVybiBcIlRFWENPT1JEXzRcIjtcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5VVjZLaW5kOlxyXG4gICAgICAgICAgICByZXR1cm4gXCJURVhDT09SRF81XCI7XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuTWF0cmljZXNJbmRpY2VzS2luZDpcclxuICAgICAgICAgICAgcmV0dXJuIFwiSk9JTlRTXzBcIjtcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5NYXRyaWNlc0luZGljZXNFeHRyYUtpbmQ6XHJcbiAgICAgICAgICAgIHJldHVybiBcIkpPSU5UU18xXCI7XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuTWF0cmljZXNXZWlnaHRzS2luZDpcclxuICAgICAgICAgICAgcmV0dXJuIFwiV0VJR0hUU18wXCI7XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuTWF0cmljZXNXZWlnaHRzRXh0cmFLaW5kOlxyXG4gICAgICAgICAgICByZXR1cm4gXCJXRUlHSFRTXzFcIjtcclxuICAgIH1cclxuXHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24ga2luZDogJHtraW5kfWApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gR2V0UHJpbWl0aXZlTW9kZShmaWxsTW9kZTogbnVtYmVyKTogTWVzaFByaW1pdGl2ZU1vZGUge1xyXG4gICAgc3dpdGNoIChmaWxsTW9kZSkge1xyXG4gICAgICAgIGNhc2UgTWF0ZXJpYWwuVHJpYW5nbGVGaWxsTW9kZTpcclxuICAgICAgICAgICAgcmV0dXJuIE1lc2hQcmltaXRpdmVNb2RlLlRSSUFOR0xFUztcclxuICAgICAgICBjYXNlIE1hdGVyaWFsLlRyaWFuZ2xlU3RyaXBEcmF3TW9kZTpcclxuICAgICAgICAgICAgcmV0dXJuIE1lc2hQcmltaXRpdmVNb2RlLlRSSUFOR0xFX1NUUklQO1xyXG4gICAgICAgIGNhc2UgTWF0ZXJpYWwuVHJpYW5nbGVGYW5EcmF3TW9kZTpcclxuICAgICAgICAgICAgcmV0dXJuIE1lc2hQcmltaXRpdmVNb2RlLlRSSUFOR0xFX0ZBTjtcclxuICAgICAgICBjYXNlIE1hdGVyaWFsLlBvaW50TGlzdERyYXdNb2RlOlxyXG4gICAgICAgIGNhc2UgTWF0ZXJpYWwuUG9pbnRGaWxsTW9kZTpcclxuICAgICAgICAgICAgcmV0dXJuIE1lc2hQcmltaXRpdmVNb2RlLlBPSU5UUztcclxuICAgICAgICBjYXNlIE1hdGVyaWFsLkxpbmVMb29wRHJhd01vZGU6XHJcbiAgICAgICAgICAgIHJldHVybiBNZXNoUHJpbWl0aXZlTW9kZS5MSU5FX0xPT1A7XHJcbiAgICAgICAgY2FzZSBNYXRlcmlhbC5MaW5lTGlzdERyYXdNb2RlOlxyXG4gICAgICAgICAgICByZXR1cm4gTWVzaFByaW1pdGl2ZU1vZGUuTElORVM7XHJcbiAgICAgICAgY2FzZSBNYXRlcmlhbC5MaW5lU3RyaXBEcmF3TW9kZTpcclxuICAgICAgICAgICAgcmV0dXJuIE1lc2hQcmltaXRpdmVNb2RlLkxJTkVfU1RSSVA7XHJcbiAgICB9XHJcblxyXG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGZpbGwgbW9kZTogJHtmaWxsTW9kZX1gKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIElzVHJpYW5nbGVGaWxsTW9kZShmaWxsTW9kZTogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICBzd2l0Y2ggKGZpbGxNb2RlKSB7XHJcbiAgICAgICAgY2FzZSBNYXRlcmlhbC5UcmlhbmdsZUZpbGxNb2RlOlxyXG4gICAgICAgIGNhc2UgTWF0ZXJpYWwuVHJpYW5nbGVTdHJpcERyYXdNb2RlOlxyXG4gICAgICAgIGNhc2UgTWF0ZXJpYWwuVHJpYW5nbGVGYW5EcmF3TW9kZTpcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTm9ybWFsaXplVGFuZ2VudCh0YW5nZW50OiBWZWN0b3I0IHwgVmVjdG9yMykge1xyXG4gICAgY29uc3QgbGVuZ3RoID0gTWF0aC5zcXJ0KHRhbmdlbnQueCAqIHRhbmdlbnQueCArIHRhbmdlbnQueSAqIHRhbmdlbnQueSArIHRhbmdlbnQueiAqIHRhbmdlbnQueik7XHJcbiAgICBpZiAobGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHRhbmdlbnQueCAvPSBsZW5ndGg7XHJcbiAgICAgICAgdGFuZ2VudC55IC89IGxlbmd0aDtcclxuICAgICAgICB0YW5nZW50LnogLz0gbGVuZ3RoO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ29udmVydFRvUmlnaHRIYW5kZWRQb3NpdGlvbih2YWx1ZTogVmVjdG9yMyk6IFZlY3RvcjMge1xyXG4gICAgdmFsdWUueCAqPSAtMTtcclxuICAgIHJldHVybiB2YWx1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENvbnZlcnRUb1JpZ2h0SGFuZGVkUm90YXRpb24odmFsdWU6IFF1YXRlcm5pb24pOiBRdWF0ZXJuaW9uIHtcclxuICAgIHZhbHVlLnggKj0gLTE7XHJcbiAgICB2YWx1ZS55ICo9IC0xO1xyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ29udmVydFRvUmlnaHRIYW5kZWROb2RlKHZhbHVlOiBJTm9kZSkge1xyXG4gICAgbGV0IHRyYW5zbGF0aW9uID0gVmVjdG9yMy5Gcm9tQXJyYXlUb1JlZih2YWx1ZS50cmFuc2xhdGlvbiB8fCBbMCwgMCwgMF0sIDAsIFRtcFZlY3RvcnMuVmVjdG9yM1swXSk7XHJcbiAgICBsZXQgcm90YXRpb24gPSBRdWF0ZXJuaW9uLkZyb21BcnJheVRvUmVmKHZhbHVlLnJvdGF0aW9uIHx8IFswLCAwLCAwLCAxXSwgMCwgVG1wVmVjdG9ycy5RdWF0ZXJuaW9uWzBdKTtcclxuXHJcbiAgICB0cmFuc2xhdGlvbiA9IENvbnZlcnRUb1JpZ2h0SGFuZGVkUG9zaXRpb24odHJhbnNsYXRpb24pO1xyXG4gICAgcm90YXRpb24gPSBDb252ZXJ0VG9SaWdodEhhbmRlZFJvdGF0aW9uKHJvdGF0aW9uKTtcclxuXHJcbiAgICBpZiAodHJhbnNsYXRpb24uZXF1YWxzV2l0aEVwc2lsb24oZGVmYXVsdFRyYW5zbGF0aW9uLCBlcHNpbG9uKSkge1xyXG4gICAgICAgIGRlbGV0ZSB2YWx1ZS50cmFuc2xhdGlvbjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFsdWUudHJhbnNsYXRpb24gPSB0cmFuc2xhdGlvbi5hc0FycmF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKFF1YXRlcm5pb24uSXNJZGVudGl0eShyb3RhdGlvbikpIHtcclxuICAgICAgICBkZWxldGUgdmFsdWUucm90YXRpb247XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhbHVlLnJvdGF0aW9uID0gcm90YXRpb24uYXNBcnJheSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogUm90YXRpb24gYnkgMTgwIGFzIGdsVEYgaGFzIGEgZGlmZmVyZW50IGNvbnZlbnRpb24gdGhhbiBCYWJ5bG9uLlxyXG4gKiBAcGFyYW0gcm90YXRpb24gVGFyZ2V0IGNhbWVyYSByb3RhdGlvbi5cclxuICogQHJldHVybnMgUmVmIHRvIGNhbWVyYSByb3RhdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBDb252ZXJ0Q2FtZXJhUm90YXRpb25Ub0dMVEYocm90YXRpb246IFF1YXRlcm5pb24pOiBRdWF0ZXJuaW9uIHtcclxuICAgIHJldHVybiByb3RhdGlvbi5tdWx0aXBseUluUGxhY2Uocm90YXRpb24xODBZKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFJvdGF0ZU5vZGUxODBZKG5vZGU6IElOb2RlKSB7XHJcbiAgICBjb25zdCByb3RhdGlvbiA9IFF1YXRlcm5pb24uRnJvbUFycmF5VG9SZWYobm9kZS5yb3RhdGlvbiB8fCBbMCwgMCwgMCwgMV0sIDAsIFRtcFZlY3RvcnMuUXVhdGVybmlvblsxXSk7XHJcbiAgICByb3RhdGlvbjE4MFkubXVsdGlwbHlUb1JlZihyb3RhdGlvbiwgcm90YXRpb24pO1xyXG4gICAgbm9kZS5yb3RhdGlvbiA9IHJvdGF0aW9uLmFzQXJyYXkoKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbGxhcHNlcyBHTFRGIHBhcmVudCBhbmQgbm9kZSBpbnRvIGEgc2luZ2xlIG5vZGUuIFRoaXMgaXMgdXNlZnVsIGZvciByZW1vdmluZyBub2RlcyB0aGF0IHdlcmUgYWRkZWQgYnkgdGhlIEdMVEYgaW1wb3J0ZXIuXHJcbiAqIEBwYXJhbSBub2RlIFRhcmdldCBwYXJlbnQgbm9kZS5cclxuICogQHBhcmFtIHBhcmVudE5vZGUgT3JpZ2luYWwgR0xURiBub2RlIChMaWdodCBvciBDYW1lcmEpLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIENvbGxhcHNlUGFyZW50Tm9kZShub2RlOiBJTm9kZSwgcGFyZW50Tm9kZTogSU5vZGUpIHtcclxuICAgIGNvbnN0IHBhcmVudFRyYW5zbGF0aW9uID0gVmVjdG9yMy5Gcm9tQXJyYXlUb1JlZihwYXJlbnROb2RlLnRyYW5zbGF0aW9uIHx8IFswLCAwLCAwXSwgMCwgVG1wVmVjdG9ycy5WZWN0b3IzWzBdKTtcclxuICAgIGNvbnN0IHBhcmVudFJvdGF0aW9uID0gUXVhdGVybmlvbi5Gcm9tQXJyYXlUb1JlZihwYXJlbnROb2RlLnJvdGF0aW9uIHx8IFswLCAwLCAwLCAxXSwgMCwgVG1wVmVjdG9ycy5RdWF0ZXJuaW9uWzBdKTtcclxuICAgIGNvbnN0IHBhcmVudFNjYWxlID0gVmVjdG9yMy5Gcm9tQXJyYXlUb1JlZihwYXJlbnROb2RlLnNjYWxlIHx8IFsxLCAxLCAxXSwgMCwgVG1wVmVjdG9ycy5WZWN0b3IzWzFdKTtcclxuICAgIGNvbnN0IHBhcmVudE1hdHJpeCA9IE1hdHJpeC5Db21wb3NlVG9SZWYocGFyZW50U2NhbGUsIHBhcmVudFJvdGF0aW9uLCBwYXJlbnRUcmFuc2xhdGlvbiwgVG1wVmVjdG9ycy5NYXRyaXhbMF0pO1xyXG5cclxuICAgIGNvbnN0IHRyYW5zbGF0aW9uID0gVmVjdG9yMy5Gcm9tQXJyYXlUb1JlZihub2RlLnRyYW5zbGF0aW9uIHx8IFswLCAwLCAwXSwgMCwgVG1wVmVjdG9ycy5WZWN0b3IzWzJdKTtcclxuICAgIGNvbnN0IHJvdGF0aW9uID0gUXVhdGVybmlvbi5Gcm9tQXJyYXlUb1JlZihub2RlLnJvdGF0aW9uIHx8IFswLCAwLCAwLCAxXSwgMCwgVG1wVmVjdG9ycy5RdWF0ZXJuaW9uWzFdKTtcclxuICAgIGNvbnN0IHNjYWxlID0gVmVjdG9yMy5Gcm9tQXJyYXlUb1JlZihub2RlLnNjYWxlIHx8IFsxLCAxLCAxXSwgMCwgVG1wVmVjdG9ycy5WZWN0b3IzWzFdKTtcclxuICAgIGNvbnN0IG1hdHJpeCA9IE1hdHJpeC5Db21wb3NlVG9SZWYoc2NhbGUsIHJvdGF0aW9uLCB0cmFuc2xhdGlvbiwgVG1wVmVjdG9ycy5NYXRyaXhbMV0pO1xyXG5cclxuICAgIHBhcmVudE1hdHJpeC5tdWx0aXBseVRvUmVmKG1hdHJpeCwgbWF0cml4KTtcclxuICAgIG1hdHJpeC5kZWNvbXBvc2UocGFyZW50U2NhbGUsIHBhcmVudFJvdGF0aW9uLCBwYXJlbnRUcmFuc2xhdGlvbik7XHJcblxyXG4gICAgaWYgKHBhcmVudFRyYW5zbGF0aW9uLmVxdWFsc1dpdGhFcHNpbG9uKGRlZmF1bHRUcmFuc2xhdGlvbiwgZXBzaWxvbikpIHtcclxuICAgICAgICBkZWxldGUgcGFyZW50Tm9kZS50cmFuc2xhdGlvbjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcGFyZW50Tm9kZS50cmFuc2xhdGlvbiA9IHBhcmVudFRyYW5zbGF0aW9uLmFzQXJyYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoUXVhdGVybmlvbi5Jc0lkZW50aXR5KHBhcmVudFJvdGF0aW9uKSkge1xyXG4gICAgICAgIGRlbGV0ZSBwYXJlbnROb2RlLnJvdGF0aW9uO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBwYXJlbnROb2RlLnJvdGF0aW9uID0gcGFyZW50Um90YXRpb24uYXNBcnJheSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChwYXJlbnRTY2FsZS5lcXVhbHNXaXRoRXBzaWxvbihkZWZhdWx0U2NhbGUsIGVwc2lsb24pKSB7XHJcbiAgICAgICAgZGVsZXRlIHBhcmVudE5vZGUuc2NhbGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHBhcmVudE5vZGUuc2NhbGUgPSBwYXJlbnRTY2FsZS5hc0FycmF5KCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTb21ldGltZXMgdGhlIEdMVEYgSW1wb3J0ZXIgY2FuIGFkZCBleHRyYSB0cmFuc2Zvcm0gbm9kZXMgKGZvciBsaWdodHMgYW5kIGNhbWVyYXMpLiBUaGlzIGNoZWNrcyBpZiBhIHBhcmVudCBub2RlIHdhcyBhZGRlZCBieSB0aGUgR0xURiBJbXBvcnRlci4gSWYgc28sIGl0IHNob3VsZCBiZSByZW1vdmVkIGR1cmluZyBzZXJpYWxpemF0aW9uLlxyXG4gKiBAcGFyYW0gYmFieWxvbk5vZGUgT3JpZ2luYWwgR0xURiBub2RlIChMaWdodCBvciBDYW1lcmEpLlxyXG4gKiBAcGFyYW0gcGFyZW50QmFieWxvbk5vZGUgVGFyZ2V0IHBhcmVudCBub2RlLlxyXG4gKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBwYXJlbnQgbm9kZSB3YXMgYWRkZWQgYnkgdGhlIEdMVEYgaW1wb3J0ZXIuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gSXNQYXJlbnRBZGRlZEJ5SW1wb3J0ZXIoYmFieWxvbk5vZGU6IE5vZGUsIHBhcmVudEJhYnlsb25Ob2RlOiBOb2RlKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gcGFyZW50QmFieWxvbk5vZGUgaW5zdGFuY2VvZiBUcmFuc2Zvcm1Ob2RlICYmIHBhcmVudEJhYnlsb25Ob2RlLmdldENoaWxkcmVuKCkubGVuZ3RoID09IDEgJiYgYmFieWxvbk5vZGUuZ2V0Q2hpbGRyZW4oKS5sZW5ndGggPT0gMDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIElzTm9vcE5vZGUobm9kZTogTm9kZSwgdXNlUmlnaHRIYW5kZWRTeXN0ZW06IGJvb2xlYW4pOiBib29sZWFuIHtcclxuICAgIGlmICghKG5vZGUgaW5zdGFuY2VvZiBUcmFuc2Zvcm1Ob2RlKSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUcmFuc2Zvcm1cclxuICAgIGlmICh1c2VSaWdodEhhbmRlZFN5c3RlbSkge1xyXG4gICAgICAgIGNvbnN0IG1hdHJpeCA9IG5vZGUuZ2V0V29ybGRNYXRyaXgoKTtcclxuICAgICAgICBpZiAoIW1hdHJpeC5pc0lkZW50aXR5KCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgbWF0cml4ID0gbm9kZS5nZXRXb3JsZE1hdHJpeCgpLm11bHRpcGx5VG9SZWYoY29udmVydEhhbmRlZG5lc3NNYXRyaXgsIFRtcFZlY3RvcnMuTWF0cml4WzBdKTtcclxuICAgICAgICBpZiAoIW1hdHJpeC5pc0lkZW50aXR5KCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBHZW9tZXRyeVxyXG4gICAgaWYgKChub2RlIGluc3RhbmNlb2YgTWVzaCAmJiBub2RlLmdlb21ldHJ5KSB8fCAobm9kZSBpbnN0YW5jZW9mIEluc3RhbmNlZE1lc2ggJiYgbm9kZS5zb3VyY2VNZXNoLmdlb21ldHJ5KSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGFuIEluZGljZXNBcnJheSBpbnRvIGVpdGhlciBVaW50MzJBcnJheSBvciBVaW50MTZBcnJheSwgb25seSBjb3B5aW5nIGlmIHRoZSBkYXRhIGlzIG51bWJlcltdLlxyXG4gKiBAcGFyYW0gaW5kaWNlcyBpbnB1dCBhcnJheSB0byBiZSBjb252ZXJ0ZWRcclxuICogQHBhcmFtIHN0YXJ0IHN0YXJ0aW5nIGluZGV4IHRvIGNvcHkgZnJvbVxyXG4gKiBAcGFyYW0gY291bnQgbnVtYmVyIG9mIGluZGljZXMgdG8gY29weVxyXG4gKiBAcmV0dXJucyBhIFVpbnQzMkFycmF5IG9yIFVpbnQxNkFycmF5XHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIEluZGljZXNBcnJheVRvVHlwZWRBcnJheShpbmRpY2VzOiBJbmRpY2VzQXJyYXksIHN0YXJ0OiBudW1iZXIsIGNvdW50OiBudW1iZXIsIGlzMzJCaXRzOiBib29sZWFuKTogVWludDMyQXJyYXkgfCBVaW50MTZBcnJheSB7XHJcbiAgICBpZiAoaW5kaWNlcyBpbnN0YW5jZW9mIFVpbnQxNkFycmF5IHx8IGluZGljZXMgaW5zdGFuY2VvZiBVaW50MzJBcnJheSkge1xyXG4gICAgICAgIHJldHVybiBpbmRpY2VzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIElmIEludDMyQXJyYXksIGNhc3QgdGhlIGluZGljZXMgKHdoaWNoIGFyZSBhbGwgcG9zaXRpdmUpIHRvIFVpbnQzMkFycmF5XHJcbiAgICBpZiAoaW5kaWNlcyBpbnN0YW5jZW9mIEludDMyQXJyYXkpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFVpbnQzMkFycmF5KGluZGljZXMuYnVmZmVyLCBpbmRpY2VzLmJ5dGVPZmZzZXQsIGluZGljZXMubGVuZ3RoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdWJhcnJheSA9IGluZGljZXMuc2xpY2Uoc3RhcnQsIHN0YXJ0ICsgY291bnQpO1xyXG4gICAgcmV0dXJuIGlzMzJCaXRzID8gbmV3IFVpbnQzMkFycmF5KHN1YmFycmF5KSA6IG5ldyBVaW50MTZBcnJheShzdWJhcnJheSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBEYXRhQXJyYXlUb1VpbnQ4QXJyYXkoZGF0YTogRGF0YUFycmF5KTogVWludDhBcnJheSB7XHJcbiAgICBpZiAoZGF0YSBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgY29uc3QgZmxvYXREYXRhID0gbmV3IEZsb2F0MzJBcnJheShkYXRhKTtcclxuICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoZmxvYXREYXRhLmJ1ZmZlciwgZmxvYXREYXRhLmJ5dGVPZmZzZXQsIGZsb2F0RGF0YS5ieXRlTGVuZ3RoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gQXJyYXlCdWZmZXIuaXNWaWV3KGRhdGEpID8gbmV3IFVpbnQ4QXJyYXkoZGF0YS5idWZmZXIsIGRhdGEuYnl0ZU9mZnNldCwgZGF0YS5ieXRlTGVuZ3RoKSA6IG5ldyBVaW50OEFycmF5KGRhdGEpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gR2V0TWluTWF4KGRhdGE6IERhdGFBcnJheSwgdmVydGV4QnVmZmVyOiBWZXJ0ZXhCdWZmZXIsIHN0YXJ0OiBudW1iZXIsIGNvdW50OiBudW1iZXIpOiB7IG1pbjogbnVtYmVyW107IG1heDogbnVtYmVyW10gfSB7XHJcbiAgICBjb25zdCB7IGJ5dGVPZmZzZXQsIGJ5dGVTdHJpZGUsIHR5cGUsIG5vcm1hbGl6ZWQgfSA9IHZlcnRleEJ1ZmZlcjtcclxuICAgIGNvbnN0IHNpemUgPSB2ZXJ0ZXhCdWZmZXIuZ2V0U2l6ZSgpO1xyXG4gICAgY29uc3QgbWluID0gbmV3IEFycmF5PG51bWJlcj4oc2l6ZSkuZmlsbChJbmZpbml0eSk7XHJcbiAgICBjb25zdCBtYXggPSBuZXcgQXJyYXk8bnVtYmVyPihzaXplKS5maWxsKC1JbmZpbml0eSk7XHJcbiAgICBFbnVtZXJhdGVGbG9hdFZhbHVlcyhkYXRhLCBieXRlT2Zmc2V0ICsgc3RhcnQgKiBieXRlU3RyaWRlLCBieXRlU3RyaWRlLCBzaXplLCB0eXBlLCBjb3VudCAqIHNpemUsIG5vcm1hbGl6ZWQsICh2YWx1ZXMpID0+IHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xyXG4gICAgICAgICAgICBtaW5baV0gPSBNYXRoLm1pbihtaW5baV0sIHZhbHVlc1tpXSk7XHJcbiAgICAgICAgICAgIG1heFtpXSA9IE1hdGgubWF4KG1heFtpXSwgdmFsdWVzW2ldKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4geyBtaW4sIG1heCB9O1xyXG59XHJcblxyXG4vKipcclxuICogUmVtb3ZlcywgaW4tcGxhY2UsIG9iamVjdCBwcm9wZXJ0aWVzIHdoaWNoIGhhdmUgdGhlIHNhbWUgdmFsdWUgYXMgdGhlIGRlZmF1bHQgdmFsdWUuXHJcbiAqIFVzZWZ1bCBmb3IgYXZvaWRpbmcgdW5uZWNlc3NhcnkgcHJvcGVydGllcyBpbiB0aGUgZ2xURiBKU09OLlxyXG4gKiBAcGFyYW0gb2JqZWN0IHRoZSBvYmplY3QgdG8gb21pdCBkZWZhdWx0IHZhbHVlcyBmcm9tXHJcbiAqIEBwYXJhbSBkZWZhdWx0VmFsdWVzIGEgcGFydGlhbCBvYmplY3Qgd2l0aCBkZWZhdWx0IHZhbHVlc1xyXG4gKiBAcmV0dXJucyBvYmplY3Qgd2l0aCBkZWZhdWx0IHZhbHVlcyBvbWl0dGVkXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gT21pdERlZmF1bHRWYWx1ZXM8VCBleHRlbmRzIE9iamVjdD4ob2JqZWN0OiBULCBkZWZhdWx0VmFsdWVzOiBQYXJ0aWFsPFQ+KTogVCB7XHJcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhvYmplY3QpKSB7XHJcbiAgICAgICAgY29uc3QgZGVmYXVsdFZhbHVlID0gZGVmYXVsdFZhbHVlc1trZXkgYXMga2V5b2YgVF07XHJcbiAgICAgICAgaWYgKChBcnJheS5pc0FycmF5KHZhbHVlKSAmJiBBcnJheS5pc0FycmF5KGRlZmF1bHRWYWx1ZSkgJiYgQXJlQXJyYXlzRXF1YWwodmFsdWUsIGRlZmF1bHRWYWx1ZSkpIHx8IHZhbHVlID09PSBkZWZhdWx0VmFsdWUpIHtcclxuICAgICAgICAgICAgZGVsZXRlIG9iamVjdFtrZXkgYXMga2V5b2YgVF07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9iamVjdDtcclxufVxyXG5cclxuZnVuY3Rpb24gQXJlQXJyYXlzRXF1YWwoYXJyYXkxOiB1bmtub3duW10sIGFycmF5MjogdW5rbm93bltdKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gYXJyYXkxLmxlbmd0aCA9PT0gYXJyYXkyLmxlbmd0aCAmJiBhcnJheTEuZXZlcnkoKHZhbCwgaSkgPT4gdmFsID09PSBhcnJheTJbaV0pO1xyXG59XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1pbnRlcm5hbC1tb2R1bGVzICovXHJcbmV4cG9ydCAqIGZyb20gXCIuL2dsVEZEYXRhXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2dsVEZTZXJpYWxpemVyXCI7XHJcbmV4cG9ydCB7IF9Tb2x2ZU1ldGFsbGljLCBfQ29udmVydFRvR0xURlBCUk1ldGFsbGljUm91Z2huZXNzIH0gZnJvbSBcIi4vZ2xURk1hdGVyaWFsRXhwb3J0ZXJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vRXh0ZW5zaW9ucy9pbmRleFwiO1xyXG4iLCIvKiogQGludGVybmFsICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby12YXIsIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgdmFyIF9fSUdMVEZFeHBvcnRlckV4dGVuc2lvbiA9IDA7IC8vIEkgYW0gaGVyZSB0byBhbGxvdyBkdHMgdG8gYmUgY3JlYXRlZFxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgZXh0ZW5kaW5nIHRoZSBleHBvcnRlclxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUdMVEZFeHBvcnRlckV4dGVuc2lvbiB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBuYW1lIG9mIHRoaXMgZXh0ZW5zaW9uXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIGVuYWJsZWRcclxuICAgICAqL1xyXG4gICAgZW5hYmxlZDogYm9vbGVhbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyByZXF1aXJlZFxyXG4gICAgICovXHJcbiAgICByZXF1aXJlZDogYm9vbGVhbjtcclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8taW50ZXJuYWwtbW9kdWxlcyAqL1xyXG5leHBvcnQgKiBmcm9tIFwiLi9nbFRGRmlsZUV4cG9ydGVyXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuLzIuMC9pbmRleFwiO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8taW50ZXJuYWwtbW9kdWxlcyAqL1xyXG5leHBvcnQgKiBmcm9tIFwiLi9PQkovaW5kZXhcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vZ2xURi9pbmRleFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9zdGwvaW5kZXhcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vVVNEWi9pbmRleFwiO1xyXG4iLCJleHBvcnQgKiBmcm9tIFwiLi9zdGxTZXJpYWxpemVyXCI7XHJcbiIsImltcG9ydCB7IE1lc2ggfSBmcm9tIFwiY29yZS9NZXNoZXMvbWVzaFwiO1xyXG5pbXBvcnQgeyBJbnN0YW5jZWRNZXNoIH0gZnJvbSBcImNvcmUvTWVzaGVzL2luc3RhbmNlZE1lc2hcIjtcclxuaW1wb3J0IHsgVmVydGV4QnVmZmVyIH0gZnJvbSBcImNvcmUvQnVmZmVycy9idWZmZXJcIjtcclxuaW1wb3J0IHsgVmVjdG9yMyB9IGZyb20gXCJjb3JlL01hdGhzL21hdGgudmVjdG9yXCI7XHJcblxyXG4vKipcclxuICogQ2xhc3MgZm9yIGdlbmVyYXRpbmcgU1RMIGRhdGEgZnJvbSBhIEJhYnlsb24gc2NlbmUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU1RMRXhwb3J0IHtcclxuICAgIC8qKlxyXG4gICAgICogRXhwb3J0cyB0aGUgZ2VvbWV0cnkgb2YgYSBNZXNoIGFycmF5IGluIC5TVEwgZmlsZSBmb3JtYXQgKEFTQ0lJKVxyXG4gICAgICogQHBhcmFtIG1lc2hlcyBsaXN0IGRlZmluZXMgdGhlIG1lc2ggdG8gc2VyaWFsaXplXHJcbiAgICAgKiBAcGFyYW0gZG93bmxvYWQgdHJpZ2dlcnMgdGhlIGF1dG9tYXRpYyBkb3dubG9hZCBvZiB0aGUgZmlsZS5cclxuICAgICAqIEBwYXJhbSBmaWxlTmFtZSBjaGFuZ2VzIHRoZSBkb3dubG9hZHMgZmlsZU5hbWUuXHJcbiAgICAgKiBAcGFyYW0gYmluYXJ5IGNoYW5nZXMgdGhlIFNUTCB0byBhIGJpbmFyeSB0eXBlLlxyXG4gICAgICogQHBhcmFtIGlzTGl0dGxlRW5kaWFuIHRvZ2dsZSBmb3IgYmluYXJ5IHR5cGUgZXhwb3J0ZXIuXHJcbiAgICAgKiBAcGFyYW0gZG9Ob3RCYWtlVHJhbnNmb3JtIHRvZ2dsZSBpZiBtZXNoZXMgdHJhbnNmb3JtcyBzaG91bGQgYmUgYmFrZWQgb3Igbm90LlxyXG4gICAgICogQHBhcmFtIHN1cHBvcnRJbnN0YW5jZWRNZXNoZXMgdG9nZ2xlIHRvIGV4cG9ydCBpbnN0YW5jZWQgTWVzaGVzLiBFbmFibGluZyBzdXBwb3J0IGZvciBpbnN0YW5jZWQgbWVzaGVzIHdpbGwgb3ZlcnJpZGUgZG9Ob0Jha2VUcmFuc2Zvcm0gYXMgdHJ1ZVxyXG4gICAgICogQHBhcmFtIGV4cG9ydEluZGl2aWR1YWxNZXNoZXMgdG9nZ2xlIHRvIGV4cG9ydCBlYWNoIG1lc2ggYXMgYW4gaW5kZXBlbmRlbnQgbWVzaC4gQnkgZGVmYXVsdCwgYWxsIHRoZSBtZXNoZXMgYXJlIGNvbWJpbmVkIGludG8gb25lIG1lc2guIFRoaXMgcHJvcGVydHkgaGFzIG5vIGVmZmVjdCB3aGVuIGV4cG9ydGluZyBpbiBiaW5hcnkgZm9ybWF0XHJcbiAgICAgKiBAcmV0dXJucyB0aGUgU1RMIGFzIFVURjggc3RyaW5nXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgQ3JlYXRlU1RMKFxyXG4gICAgICAgIG1lc2hlczogKE1lc2ggfCBJbnN0YW5jZWRNZXNoKVtdLFxyXG4gICAgICAgIGRvd25sb2FkOiBib29sZWFuID0gdHJ1ZSxcclxuICAgICAgICBmaWxlTmFtZTogc3RyaW5nID0gXCJzdGxtZXNoXCIsXHJcbiAgICAgICAgYmluYXJ5OiBib29sZWFuID0gZmFsc2UsXHJcbiAgICAgICAgaXNMaXR0bGVFbmRpYW46IGJvb2xlYW4gPSB0cnVlLFxyXG4gICAgICAgIGRvTm90QmFrZVRyYW5zZm9ybTogYm9vbGVhbiA9IGZhbHNlLFxyXG4gICAgICAgIHN1cHBvcnRJbnN0YW5jZWRNZXNoZXM6IGJvb2xlYW4gPSBmYWxzZSxcclxuICAgICAgICBleHBvcnRJbmRpdmlkdWFsTWVzaGVzOiBib29sZWFuID0gZmFsc2VcclxuICAgICk6IGFueSB7XHJcbiAgICAgICAgLy9CaW5hcnkgc3VwcG9ydCBhZGFwdGVkIGZyb20gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vcGF1bGthcGxhbi82ZDVmMGFiMmM3ZThmZGM2OGE2MVxyXG5cclxuICAgICAgICBjb25zdCBnZXRGYWNlRGF0YSA9IGZ1bmN0aW9uIChpbmRpY2VzOiBhbnksIHZlcnRpY2VzOiBhbnksIGk6IG51bWJlcikge1xyXG4gICAgICAgICAgICBjb25zdCBpZCA9IFtpbmRpY2VzW2ldICogMywgaW5kaWNlc1tpICsgMV0gKiAzLCBpbmRpY2VzW2kgKyAyXSAqIDNdO1xyXG4gICAgICAgICAgICBjb25zdCB2ID0gW1xyXG4gICAgICAgICAgICAgICAgbmV3IFZlY3RvcjModmVydGljZXNbaWRbMF1dLCB2ZXJ0aWNlc1tpZFswXSArIDJdLCB2ZXJ0aWNlc1tpZFswXSArIDFdKSxcclxuICAgICAgICAgICAgICAgIG5ldyBWZWN0b3IzKHZlcnRpY2VzW2lkWzFdXSwgdmVydGljZXNbaWRbMV0gKyAyXSwgdmVydGljZXNbaWRbMV0gKyAxXSksXHJcbiAgICAgICAgICAgICAgICBuZXcgVmVjdG9yMyh2ZXJ0aWNlc1tpZFsyXV0sIHZlcnRpY2VzW2lkWzJdICsgMl0sIHZlcnRpY2VzW2lkWzJdICsgMV0pLFxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICBjb25zdCBwMXAyID0gdlswXS5zdWJ0cmFjdCh2WzFdKTtcclxuICAgICAgICAgICAgY29uc3QgcDNwMiA9IHZbMl0uc3VidHJhY3QodlsxXSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG4gPSBWZWN0b3IzLkNyb3NzKHAzcDIsIHAxcDIpLm5vcm1hbGl6ZSgpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHsgdiwgbiB9O1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHdyaXRlVmVjdG9yID0gZnVuY3Rpb24gKGRhdGF2aWV3OiBhbnksIG9mZnNldDogbnVtYmVyLCB2ZWN0b3I6IFZlY3RvcjMsIGlzTGl0dGxlRW5kaWFuOiBib29sZWFuKSB7XHJcbiAgICAgICAgICAgIG9mZnNldCA9IHdyaXRlRmxvYXQoZGF0YXZpZXcsIG9mZnNldCwgdmVjdG9yLngsIGlzTGl0dGxlRW5kaWFuKTtcclxuICAgICAgICAgICAgb2Zmc2V0ID0gd3JpdGVGbG9hdChkYXRhdmlldywgb2Zmc2V0LCB2ZWN0b3IueSwgaXNMaXR0bGVFbmRpYW4pO1xyXG4gICAgICAgICAgICByZXR1cm4gd3JpdGVGbG9hdChkYXRhdmlldywgb2Zmc2V0LCB2ZWN0b3IueiwgaXNMaXR0bGVFbmRpYW4pO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHdyaXRlRmxvYXQgPSBmdW5jdGlvbiAoZGF0YXZpZXc6IGFueSwgb2Zmc2V0OiBudW1iZXIsIHZhbHVlOiBudW1iZXIsIGlzTGl0dGxlRW5kaWFuOiBib29sZWFuKSB7XHJcbiAgICAgICAgICAgIGRhdGF2aWV3LnNldEZsb2F0MzIob2Zmc2V0LCB2YWx1ZSwgaXNMaXR0bGVFbmRpYW4pO1xyXG4gICAgICAgICAgICByZXR1cm4gb2Zmc2V0ICsgNDtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBnZXRWZXJ0aWNlc0RhdGEgPSBmdW5jdGlvbiAobWVzaDogSW5zdGFuY2VkTWVzaCB8IE1lc2gpIHtcclxuICAgICAgICAgICAgaWYgKHN1cHBvcnRJbnN0YW5jZWRNZXNoZXMpIHtcclxuICAgICAgICAgICAgICAgIGxldCBzb3VyY2VNZXNoID0gbWVzaDtcclxuICAgICAgICAgICAgICAgIGlmIChtZXNoIGluc3RhbmNlb2YgSW5zdGFuY2VkTWVzaCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZU1lc2ggPSBtZXNoLnNvdXJjZU1lc2g7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gc291cmNlTWVzaC5nZXRWZXJ0aWNlc0RhdGEoVmVydGV4QnVmZmVyLlBvc2l0aW9uS2luZCwgdHJ1ZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWRhdGEpIHJldHVybiBbXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRlbXAgPSBWZWN0b3IzLlplcm8oKTtcclxuICAgICAgICAgICAgICAgIGxldCBpbmRleDtcclxuICAgICAgICAgICAgICAgIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IGRhdGEubGVuZ3RoOyBpbmRleCArPSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgVmVjdG9yMy5UcmFuc2Zvcm1Db29yZGluYXRlc0Zyb21GbG9hdHNUb1JlZihkYXRhW2luZGV4XSwgZGF0YVtpbmRleCArIDFdLCBkYXRhW2luZGV4ICsgMl0sIG1lc2guY29tcHV0ZVdvcmxkTWF0cml4KHRydWUpLCB0ZW1wKS50b0FycmF5KGRhdGEsIGluZGV4KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lc2guZ2V0VmVydGljZXNEYXRhKFZlcnRleEJ1ZmZlci5Qb3NpdGlvbktpbmQpIHx8IFtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKHN1cHBvcnRJbnN0YW5jZWRNZXNoZXMpIHtcclxuICAgICAgICAgICAgZG9Ob3RCYWtlVHJhbnNmb3JtID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBkYXRhOiBEYXRhVmlldyB8IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gICAgICAgIGxldCBmYWNlQ291bnQgPSAwO1xyXG4gICAgICAgIGxldCBvZmZzZXQgPSAwO1xyXG5cclxuICAgICAgICBpZiAoYmluYXJ5KSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVzaGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtZXNoID0gbWVzaGVzW2ldO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5kaWNlcyA9IG1lc2guZ2V0SW5kaWNlcygpO1xyXG4gICAgICAgICAgICAgICAgZmFjZUNvdW50ICs9IGluZGljZXMgPyBpbmRpY2VzLmxlbmd0aCAvIDMgOiAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBidWZmZXJTaXplID0gODQgKyA1MCAqIGZhY2VDb3VudDtcclxuICAgICAgICAgICAgY29uc3QgYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKGJ1ZmZlclNpemUpO1xyXG4gICAgICAgICAgICBkYXRhID0gbmV3IERhdGFWaWV3KGJ1ZmZlcik7XHJcblxyXG4gICAgICAgICAgICBvZmZzZXQgKz0gODA7XHJcbiAgICAgICAgICAgIGRhdGEuc2V0VWludDMyKG9mZnNldCwgZmFjZUNvdW50LCBpc0xpdHRsZUVuZGlhbik7XHJcbiAgICAgICAgICAgIG9mZnNldCArPSA0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghZXhwb3J0SW5kaXZpZHVhbE1lc2hlcykge1xyXG4gICAgICAgICAgICAgICAgZGF0YSA9IFwic29saWQgc3RsbWVzaFxcclxcblwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lc2hlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBtZXNoID0gbWVzaGVzW2ldO1xyXG4gICAgICAgICAgICBpZiAoIWJpbmFyeSAmJiBleHBvcnRJbmRpdmlkdWFsTWVzaGVzKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhICs9IFwic29saWQgXCIgKyBtZXNoLm5hbWUgKyBcIlxcclxcblwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghZG9Ob3RCYWtlVHJhbnNmb3JtICYmIG1lc2ggaW5zdGFuY2VvZiBNZXNoKSB7XHJcbiAgICAgICAgICAgICAgICBtZXNoLmJha2VDdXJyZW50VHJhbnNmb3JtSW50b1ZlcnRpY2VzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgdmVydGljZXMgPSBnZXRWZXJ0aWNlc0RhdGEobWVzaCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGljZXMgPSBtZXNoLmdldEluZGljZXMoKSB8fCBbXTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5kaWNlcy5sZW5ndGg7IGkgKz0gMykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmQgPSBnZXRGYWNlRGF0YShpbmRpY2VzLCB2ZXJ0aWNlcywgaSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGJpbmFyeSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldCA9IHdyaXRlVmVjdG9yKGRhdGEsIG9mZnNldCwgZmQubiwgaXNMaXR0bGVFbmRpYW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldCA9IHdyaXRlVmVjdG9yKGRhdGEsIG9mZnNldCwgZmQudlswXSwgaXNMaXR0bGVFbmRpYW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldCA9IHdyaXRlVmVjdG9yKGRhdGEsIG9mZnNldCwgZmQudlsxXSwgaXNMaXR0bGVFbmRpYW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldCA9IHdyaXRlVmVjdG9yKGRhdGEsIG9mZnNldCwgZmQudlsyXSwgaXNMaXR0bGVFbmRpYW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldCArPSAyO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhICs9IFwiXFx0ZmFjZXQgbm9ybWFsIFwiICsgZmQubi54ICsgXCIgXCIgKyBmZC5uLnkgKyBcIiBcIiArIGZkLm4ueiArIFwiXFxyXFxuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YSArPSBcIlxcdFxcdG91dGVyIGxvb3BcXHJcXG5cIjtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhICs9IFwiXFx0XFx0XFx0dmVydGV4IFwiICsgZmQudlswXS54ICsgXCIgXCIgKyBmZC52WzBdLnkgKyBcIiBcIiArIGZkLnZbMF0ueiArIFwiXFxyXFxuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YSArPSBcIlxcdFxcdFxcdHZlcnRleCBcIiArIGZkLnZbMV0ueCArIFwiIFwiICsgZmQudlsxXS55ICsgXCIgXCIgKyBmZC52WzFdLnogKyBcIlxcclxcblwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEgKz0gXCJcXHRcXHRcXHR2ZXJ0ZXggXCIgKyBmZC52WzJdLnggKyBcIiBcIiArIGZkLnZbMl0ueSArIFwiIFwiICsgZmQudlsyXS56ICsgXCJcXHJcXG5cIjtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhICs9IFwiXFx0XFx0ZW5kbG9vcFxcclxcblwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEgKz0gXCJcXHRlbmRmYWNldFxcclxcblwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghYmluYXJ5ICYmIGV4cG9ydEluZGl2aWR1YWxNZXNoZXMpIHtcclxuICAgICAgICAgICAgICAgIGRhdGEgKz0gXCJlbmRzb2xpZCBcIiArIG5hbWUgKyBcIlxcclxcblwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWJpbmFyeSAmJiAhZXhwb3J0SW5kaXZpZHVhbE1lc2hlcykge1xyXG4gICAgICAgICAgICBkYXRhICs9IFwiZW5kc29saWQgc3RsbWVzaFwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGRvd25sb2FkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgICAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtkYXRhXSwgeyB0eXBlOiBcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiIH0pO1xyXG4gICAgICAgICAgICBhLmhyZWYgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuICAgICAgICAgICAgYS5kb3dubG9hZCA9IGZpbGVOYW1lICsgXCIuc3RsXCI7XHJcbiAgICAgICAgICAgIGEuY2xpY2soKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1pbnRlcm5hbC1tb2R1bGVzICovXHJcbmltcG9ydCAqIGFzIEV4cG9ydGVycyBmcm9tIFwic2VyaWFsaXplcnMvZ2xURi9nbFRGRmlsZUV4cG9ydGVyXCI7XHJcbmltcG9ydCAqIGFzIERhdGFzIGZyb20gXCJzZXJpYWxpemVycy9nbFRGLzIuMC9nbFRGRGF0YVwiO1xyXG5pbXBvcnQgKiBhcyBTZXJpYWxpemVycyBmcm9tIFwic2VyaWFsaXplcnMvZ2xURi8yLjAvZ2xURlNlcmlhbGl6ZXJcIjtcclxuaW1wb3J0ICogYXMgRXh0ZW5zaW9ucyBmcm9tIFwic2VyaWFsaXplcnMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9pbmRleFwiO1xyXG5pbXBvcnQgKiBhcyBHTFRGMiBmcm9tIFwic2VyaWFsaXplcnMvZ2xURi8yLjAvaW5kZXhcIjtcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGlzIHRoZSBlbnRyeSBwb2ludCBmb3IgdGhlIFVNRCBtb2R1bGUuXHJcbiAqIFRoZSBlbnRyeSBwb2ludCBmb3IgYSBmdXR1cmUgRVNNIHBhY2thZ2Ugc2hvdWxkIGJlIGluZGV4LnRzXHJcbiAqL1xyXG5jb25zdCBnbG9iYWxPYmplY3QgPSB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHVuZGVmaW5lZDtcclxuaWYgKHR5cGVvZiBnbG9iYWxPYmplY3QgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICg8YW55Pmdsb2JhbE9iamVjdCkuQkFCWUxPTiA9ICg8YW55Pmdsb2JhbE9iamVjdCkuQkFCWUxPTiB8fCB7fTtcclxuICAgIGNvbnN0IEJBQllMT04gPSAoPGFueT5nbG9iYWxPYmplY3QpLkJBQllMT047XHJcbiAgICBCQUJZTE9OLkdMVEYyID0gQkFCWUxPTi5HTFRGMiB8fCB7fTtcclxuICAgIEJBQllMT04uR0xURjIuRXhwb3J0ZXIgPSBCQUJZTE9OLkdMVEYyLkV4cG9ydGVyIHx8IHt9O1xyXG4gICAgQkFCWUxPTi5HTFRGMi5FeHBvcnRlci5FeHRlbnNpb25zID0gQkFCWUxPTi5HTFRGMi5FeHBvcnRlci5FeHRlbnNpb25zIHx8IHt9O1xyXG5cclxuICAgIGNvbnN0IGtleXMgPSBbXTtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIEV4cG9ydGVycykge1xyXG4gICAgICAgIEJBQllMT05ba2V5XSA9ICg8YW55PkV4cG9ydGVycylba2V5XTtcclxuICAgICAgICBrZXlzLnB1c2goa2V5KTtcclxuICAgIH1cclxuICAgIGZvciAoY29uc3Qga2V5IGluIERhdGFzKSB7XHJcbiAgICAgICAgQkFCWUxPTltrZXldID0gKDxhbnk+RGF0YXMpW2tleV07XHJcbiAgICAgICAga2V5cy5wdXNoKGtleSk7XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBTZXJpYWxpemVycykge1xyXG4gICAgICAgIEJBQllMT05ba2V5XSA9ICg8YW55PlNlcmlhbGl6ZXJzKVtrZXldO1xyXG4gICAgICAgIGtleXMucHVzaChrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAoY29uc3Qga2V5IGluIEV4dGVuc2lvbnMpIHtcclxuICAgICAgICBCQUJZTE9OLkdMVEYyLkV4cG9ydGVyLkV4dGVuc2lvbnNba2V5XSA9ICg8YW55PkV4dGVuc2lvbnMpW2tleV07XHJcbiAgICAgICAga2V5cy5wdXNoKGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gR0xURjIpIHtcclxuICAgICAgICAvLyBQcmV2ZW50IFJlYXNzaWdubWVudC5cclxuICAgICAgICBpZiAoa2V5cy5pbmRleE9mKGtleSkgPiAtMSkge1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEJBQllMT04uR0xURjIuRXhwb3J0ZXJba2V5XSA9ICg8YW55PkdMVEYyKVtrZXldO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgKiBmcm9tIFwic2VyaWFsaXplcnMvZ2xURi9nbFRGRmlsZUV4cG9ydGVyXCI7XHJcbmV4cG9ydCAqIGZyb20gXCJzZXJpYWxpemVycy9nbFRGLzIuMC9pbmRleFwiO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8taW50ZXJuYWwtbW9kdWxlcyAqL1xyXG5pbXBvcnQgKiBhcyBTZXJpYWxpemVycyBmcm9tIFwic2VyaWFsaXplcnMvT0JKL2luZGV4XCI7XHJcblxyXG4vKipcclxuICogVGhpcyBpcyB0aGUgZW50cnkgcG9pbnQgZm9yIHRoZSBVTUQgbW9kdWxlLlxyXG4gKiBUaGUgZW50cnkgcG9pbnQgZm9yIGEgZnV0dXJlIEVTTSBwYWNrYWdlIHNob3VsZCBiZSBpbmRleC50c1xyXG4gKi9cclxuY29uc3QgZ2xvYmFsT2JqZWN0ID0gdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB1bmRlZmluZWQ7XHJcbmlmICh0eXBlb2YgZ2xvYmFsT2JqZWN0ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBmb3IgKGNvbnN0IHNlcmlhbGl6ZXIgaW4gU2VyaWFsaXplcnMpIHtcclxuICAgICAgICAoPGFueT5nbG9iYWxPYmplY3QpLkJBQllMT05bc2VyaWFsaXplcl0gPSAoPGFueT5TZXJpYWxpemVycylbc2VyaWFsaXplcl07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCAqIGZyb20gXCJzZXJpYWxpemVycy9PQkovaW5kZXhcIjtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWludGVybmFsLW1vZHVsZXMgKi9cclxuaW1wb3J0ICogYXMgU2VyaWFsaXplcnMgZnJvbSBcInNlcmlhbGl6ZXJzL3N0bC9pbmRleFwiO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgaXMgdGhlIGVudHJ5IHBvaW50IGZvciB0aGUgVU1EIG1vZHVsZS5cclxuICogVGhlIGVudHJ5IHBvaW50IGZvciBhIGZ1dHVyZSBFU00gcGFja2FnZSBzaG91bGQgYmUgaW5kZXgudHNcclxuICovXHJcbmNvbnN0IGdsb2JhbE9iamVjdCA9IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDogdW5kZWZpbmVkO1xyXG5pZiAodHlwZW9mIGdsb2JhbE9iamVjdCAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgZm9yIChjb25zdCBzZXJpYWxpemVyIGluIFNlcmlhbGl6ZXJzKSB7XHJcbiAgICAgICAgKDxhbnk+Z2xvYmFsT2JqZWN0KS5CQUJZTE9OW3NlcmlhbGl6ZXJdID0gKDxhbnk+U2VyaWFsaXplcnMpW3NlcmlhbGl6ZXJdO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgKiBmcm9tIFwic2VyaWFsaXplcnMvc3RsL2luZGV4XCI7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1pbnRlcm5hbC1tb2R1bGVzICovXHJcbmltcG9ydCAqIGFzIFNlcmlhbGl6ZXJzIGZyb20gXCJzZXJpYWxpemVycy9VU0RaL2luZGV4XCI7XHJcblxyXG4vKipcclxuICogVGhpcyBpcyB0aGUgZW50cnkgcG9pbnQgZm9yIHRoZSBVTUQgbW9kdWxlLlxyXG4gKiBUaGUgZW50cnkgcG9pbnQgZm9yIGEgZnV0dXJlIEVTTSBwYWNrYWdlIHNob3VsZCBiZSBpbmRleC50c1xyXG4gKi9cclxuY29uc3QgZ2xvYmFsT2JqZWN0ID0gdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB1bmRlZmluZWQ7XHJcbmlmICh0eXBlb2YgZ2xvYmFsT2JqZWN0ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBmb3IgKGNvbnN0IHNlcmlhbGl6ZXIgaW4gU2VyaWFsaXplcnMpIHtcclxuICAgICAgICAoPGFueT5nbG9iYWxPYmplY3QpLkJBQllMT05bc2VyaWFsaXplcl0gPSAoPGFueT5TZXJpYWxpemVycylbc2VyaWFsaXplcl07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCAqIGZyb20gXCJzZXJpYWxpemVycy9VU0RaL2luZGV4XCI7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9leHBvcnQgKi9cclxuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWludGVybmFsLW1vZHVsZXMgKi9cclxuaW1wb3J0IFwic2VyaWFsaXplcnMvaW5kZXhcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbGVnYWN5LWdsVEYyU2VyaWFsaXplclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9sZWdhY3ktb2JqU2VyaWFsaXplclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9sZWdhY3ktc3RsU2VyaWFsaXplclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9sZWdhY3ktdXNkelNlcmlhbGl6ZXJcIjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2JhYnlsb25qc19NaXNjX3Rvb2xzX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwidmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mID8gKG9iaikgPT4gKE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopKSA6IChvYmopID0+IChvYmouX19wcm90b19fKTtcbnZhciBsZWFmUHJvdG90eXBlcztcbi8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuLy8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4vLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbi8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuLy8gbW9kZSAmIDE2OiByZXR1cm4gdmFsdWUgd2hlbiBpdCdzIFByb21pc2UtbGlrZVxuLy8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuX193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcblx0aWYobW9kZSAmIDEpIHZhbHVlID0gdGhpcyh2YWx1ZSk7XG5cdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG5cdGlmKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUpIHtcblx0XHRpZigobW9kZSAmIDQpICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcblx0XHRpZigobW9kZSAmIDE2KSAmJiB0eXBlb2YgdmFsdWUudGhlbiA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIHZhbHVlO1xuXHR9XG5cdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG5cdHZhciBkZWYgPSB7fTtcblx0bGVhZlByb3RvdHlwZXMgPSBsZWFmUHJvdG90eXBlcyB8fCBbbnVsbCwgZ2V0UHJvdG8oe30pLCBnZXRQcm90byhbXSksIGdldFByb3RvKGdldFByb3RvKV07XG5cdGZvcih2YXIgY3VycmVudCA9IG1vZGUgJiAyICYmIHZhbHVlOyB0eXBlb2YgY3VycmVudCA9PSAnb2JqZWN0JyAmJiAhfmxlYWZQcm90b3R5cGVzLmluZGV4T2YoY3VycmVudCk7IGN1cnJlbnQgPSBnZXRQcm90byhjdXJyZW50KSkge1xuXHRcdE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGN1cnJlbnQpLmZvckVhY2goKGtleSkgPT4gKGRlZltrZXldID0gKCkgPT4gKHZhbHVlW2tleV0pKSk7XG5cdH1cblx0ZGVmWydkZWZhdWx0J10gPSAoKSA9PiAodmFsdWUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGRlZik7XG5cdHJldHVybiBucztcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICogYXMgc2VyaWFsaXplcnMgZnJvbSBcIkBsdHMvc2VyaWFsaXplcnMvbGVnYWN5L2xlZ2FjeVwiO1xyXG5leHBvcnQgeyBzZXJpYWxpemVycyB9O1xyXG5leHBvcnQgZGVmYXVsdCBzZXJpYWxpemVycztcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9