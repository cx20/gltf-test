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
/* harmony import */ var babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Materials/material */ "babylonjs/Misc/fileTools");
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
/* harmony import */ var babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Misc/tools */ "babylonjs/Misc/fileTools");
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
/* harmony import */ var babylonjs_Meshes_Compression_dracoEncoder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs/Misc/logger */ "babylonjs/Misc/fileTools");
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
/* harmony import */ var babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Helpers/materialConversionHelper */ "babylonjs/Misc/fileTools");
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






// Matrix that converts handedness on the X-axis.
var convertHandednessMatrix = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Matrix.Compose(new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3(-1, 1, 1), babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.Identity(), babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Zero());
// 180 degrees rotation in Y.
var rotation180Y = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion(0, 1, 0, 0);
// Default values for comparison.
var epsilon = 1e-6;
var defaultTranslation = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Zero();
var defaultScale = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.One();
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
/* harmony import */ var babylonjs_Meshes_mesh__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Maths/math.vector */ "babylonjs/Misc/fileTools");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFieWxvbmpzLnNlcmlhbGl6ZXJzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDaFpBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0NBO0FBQ0E7QUFJQTtBQUVBOztBQUVBO0FBQ0E7QUFBQTtBQThMQTtBQTdMQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUVBOzs7O0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pNQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTtBQUVBO0FBT0E7QUFDQTtBQUdBO0FBQ0E7QUFrREE7QUFDQTtBQVNBO0FBRUE7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQWVBO0FBRUE7QUFDQTtBQUlBO0FBRUE7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQWFBO0FBRUE7QUFDQTtBQUNBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBWUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBUUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQWtDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBb0JBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFpQkE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFZQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBYUE7QUFDQTtBQUVBOzs7Ozs7Ozs7QUFTQTtBQUNBOzs7Ozs7QUFDQTtBQWFBO0FBQ0E7O0FBQUE7OztBQUlBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTs7Ozs7Ozs7Ozs7QUFDQTtBQUVBO0FBQ0E7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFBQTtBQUVBOzs7Ozs7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3B0QkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBY0E7QUFiQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUdBO0FBQ0E7QUFFQTtBQUdBO0FBREE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBRUE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFBQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEpBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQTBCQTtBQUNBO0FBMUJBO0FBQ0E7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFTQTtBQUNBO0FBUEE7QUFEQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFPQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFXQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hMQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFlQTs7QUFFQTtBQUNBO0FBakJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQVdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBREE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pMQTtBQUVBO0FBR0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFjQTtBQWJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBR0E7QUFDQTtBQUVBO0FBR0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRkE7QUFFQTtBQUdBO0FBRUE7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFjQTtBQWJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBR0E7QUFDQTtBQUVBO0FBR0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNHQTtBQUVBO0FBRUE7QUFHQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQWNBO0FBYkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFHQTtBQUNBO0FBRUE7QUFHQTtBQURBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQUE7QUFDQTs7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakpBO0FBRUE7QUFFQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFZQTtBQUNBO0FBWkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFHQTtBQUVBO0FBQ0E7QUFHQTtBQURBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUVBO0FBRUE7QUFHQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUE2Q0E7QUEzQ0E7QUFDQTtBQUdBO0FBREE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRUE7QUFFQTtBQUVBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBWUE7QUFYQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUdBO0FBREE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRUE7QUFFQTtBQUdBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBY0E7QUFiQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUdBO0FBQ0E7QUFFQTtBQUdBO0FBREE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RkE7QUFFQTtBQUdBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBY0E7QUFiQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFFQTtBQUdBO0FBREE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRkE7QUFFQTtBQUdBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBY0E7QUFiQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUFBO0FBQ0E7O0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEhBO0FBRUE7QUFFQTtBQUVBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBY0E7QUFiQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7Ozs7OztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTs7O0FBSUE7QUFDQTs7QUFHQTs7OztBQUNBO0FBQ0E7QUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkhBO0FBRUE7QUFDQTtBQUVBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBWUE7QUFYQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBR0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFFQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6REE7QUFFQTtBQUVBO0FBRUE7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFjQTtBQWJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBR0E7QUFDQTtBQUVBO0FBR0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUFBO0FBQ0E7O0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2SEE7QUFHQTtBQUVBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFhQTtBQVpBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBR0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQVFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQW9KQTtBQWxKQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUFBO0FBQ0E7QUFDQTs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBS0E7QUFDQTtBQUVBO0FBaURBOzs7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUFBO0FBay9CQTtBQWovQkE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFhQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQWFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7QUFZQTtBQUNBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7OztBQVlBO0FBQ0E7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7QUFXQTtBQUNBOztBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7QUE5REE7QUFBQTtBQStEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBOUlBO0FBQUE7QUFBQTtBQStJQTtBQUNBO0FBQ0E7QUFFQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQWVBO0FBQ0E7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQVdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7O0FBUUE7QUFDQTtBQVFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7OztBQVFBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDemtDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQW1CQTtBQWRBO0FBSEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUVBO0FBRUE7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBR0E7QUFFQTtBQUNBO0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBcUJBO0FBcEJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQVdBO0FBQ0E7QUFUQTtBQUNBO0FBQ0E7QUFTQTs7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBb0xBO0FBQUE7QUFuTEE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFTQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFvSUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQWFBO0FBQ0E7QUFuSkE7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBQ0E7OztBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7O0FBQUE7OztBQUpBOzs7Ozs7QUFPQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7O0FBQ0E7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBQ0E7QUFFQTs7OztBQUNBOztBQUFBO0FBQ0E7O0FBQUE7QUFDQTs7OztBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7O0FBQ0E7QUFDQTs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7OztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTs7QUFFQTtBQUVBO0FBRUE7O0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQWhFQTtBQUFBO0FBQUE7QUFpRUE7QUFDQTtBQUVBOzs7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOztBQUFBOztBQUFBO0FBQ0E7QUFDQTs7QUFBQTs7QUFBQTtBQUNBO0FBQ0E7O0FBQUE7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQVdBOzs7OztBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7QUFDQTtBQUVBO0FBRUE7OztBQUFBO0FBQUE7QUFDQTs7QUFBQTs7O0FBREE7O0FBSUE7Ozs7QUFDQTtBQUVBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7O0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFwREE7QUFDQTtBQUFBO0FBQUE7QUFvREE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUVBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBNUlBO0FBQUE7QUFBQTtBQTZJQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBYUE7QUFDQTtBQWFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBOzs7QUFBQTtBQUFBO0FBQ0E7O0FBQUE7OztBQURBOzs7QUFJQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFBQTs7O0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFDQTtBQUVBO0FBV0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFTQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUFBOzs7QUFDQTtBQUNBOztBQUFBOzs7QUFFQTtBQUNBOztBQUdBOzs7QUFHQTs7Ozs7QUFDQTtBQUVBOzs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7OztBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7OztBQUVBO0FBQ0E7O0FBREE7QUFDQTs7O0FBSUE7QUFFQTtBQUVBO0FBWUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBMUVBOzs7QUE4RUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFDQTtBQW52Q0E7QUFDQTtBQW12Q0E7QUFBQTtBQXZ5Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMU5BOztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUtBO0FBQ0E7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFPQTtBQUFBO0FBTkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBOztBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7O0FBQUE7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFDQTtBQUVBOzs7Ozs7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFBQTtBQUVBOztBQUFBOzs7OztBQUNBO0FBRUE7Ozs7OztBQUNBO0FBRUE7QUFDQTtBQUdBO0FBRUE7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7O0FBQUE7QUFDQTs7QUFBQTtBQUVBOztBQUFBO0FBRUE7QUFBQTs7OztBQUNBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7QUFTQTtBQUNBOzs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBQUE7QUFDQTs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUVBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7OztBQU9BO0FBQ0E7Ozs7OztBQU1BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFBQTs7QUFHQTs7OztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7OztBQU9BO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTs7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7QUFFQTtBQUVBOzs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUFBOztBQUNBOztBQUFBOzs7QUFGQTtBQUlBOztBQUFBO0FBQ0E7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFDQTtBQUVBOzs7Ozs7QUFRQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7O0FBQUE7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFFQTs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUNBOztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7O0FBQUE7QUFDQTtBQUNBOztBQUdBOzs7O0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzU5QkE7QUFFQTtBQUNBO0FBQ0E7QUFZQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hMQTtBQWlFQTs7QUFFQTtBQUNBO0FBQUE7QUFzQ0E7QUFyQ0E7Ozs7OztBQU1BO0FBQ0E7Ozs7OztBQUNBO0FBQ0E7O0FBQUE7OztBQUdBO0FBQ0E7O0FBQUE7QUFDQTtBQUVBOzs7O0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTs7Ozs7O0FBQ0E7QUFDQTs7QUFBQTs7O0FBR0E7QUFDQTs7QUFBQTtBQUNBO0FBRUE7Ozs7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUdBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4WEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQUE7QUFtSkE7QUFsSkE7Ozs7Ozs7Ozs7O0FBV0E7QUFDQTtBQVVBO0FBUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqREE7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDTkE7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL1NFUklBTElaRVJTL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2Lm1qcyIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy8uLi8uLi8uLi9kZXYvc2VyaWFsaXplcnMvc3JjL09CSi9pbmRleC50cyIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy8uLi8uLi8uLi9kZXYvc2VyaWFsaXplcnMvc3JjL09CSi9vYmpTZXJpYWxpemVyLnRzIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2Rldi9zZXJpYWxpemVycy9zcmMvVVNEWi9pbmRleC50cyIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy8uLi8uLi8uLi9kZXYvc2VyaWFsaXplcnMvc3JjL1VTRFovdXNkekV4cG9ydGVyLnRzIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2Rldi9zZXJpYWxpemVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9FWFRfbWVzaF9ncHVfaW5zdGFuY2luZy50cyIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy8uLi8uLi8uLi9kZXYvc2VyaWFsaXplcnMvc3JjL2dsVEYvMi4wL0V4dGVuc2lvbnMvS0hSX2RyYWNvX21lc2hfY29tcHJlc3Npb24udHMiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvLi4vLi4vLi4vZGV2L3NlcmlhbGl6ZXJzL3NyYy9nbFRGLzIuMC9FeHRlbnNpb25zL0tIUl9saWdodHNfcHVuY3R1YWwudHMiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvLi4vLi4vLi4vZGV2L3NlcmlhbGl6ZXJzL3NyYy9nbFRGLzIuMC9FeHRlbnNpb25zL0tIUl9tYXRlcmlhbHNfYW5pc290cm9weS50cyIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy8uLi8uLi8uLi9kZXYvc2VyaWFsaXplcnMvc3JjL2dsVEYvMi4wL0V4dGVuc2lvbnMvS0hSX21hdGVyaWFsc19jbGVhcmNvYXQudHMiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvLi4vLi4vLi4vZGV2L3NlcmlhbGl6ZXJzL3NyYy9nbFRGLzIuMC9FeHRlbnNpb25zL0tIUl9tYXRlcmlhbHNfZGlmZnVzZV90cmFuc21pc3Npb24udHMiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvLi4vLi4vLi4vZGV2L3NlcmlhbGl6ZXJzL3NyYy9nbFRGLzIuMC9FeHRlbnNpb25zL0tIUl9tYXRlcmlhbHNfZGlzcGVyc2lvbi50cyIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy8uLi8uLi8uLi9kZXYvc2VyaWFsaXplcnMvc3JjL2dsVEYvMi4wL0V4dGVuc2lvbnMvS0hSX21hdGVyaWFsc19lbWlzc2l2ZV9zdHJlbmd0aC50cyIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy8uLi8uLi8uLi9kZXYvc2VyaWFsaXplcnMvc3JjL2dsVEYvMi4wL0V4dGVuc2lvbnMvS0hSX21hdGVyaWFsc19pb3IudHMiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvLi4vLi4vLi4vZGV2L3NlcmlhbGl6ZXJzL3NyYy9nbFRGLzIuMC9FeHRlbnNpb25zL0tIUl9tYXRlcmlhbHNfaXJpZGVzY2VuY2UudHMiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvLi4vLi4vLi4vZGV2L3NlcmlhbGl6ZXJzL3NyYy9nbFRGLzIuMC9FeHRlbnNpb25zL0tIUl9tYXRlcmlhbHNfc2hlZW4udHMiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvLi4vLi4vLi4vZGV2L3NlcmlhbGl6ZXJzL3NyYy9nbFRGLzIuMC9FeHRlbnNpb25zL0tIUl9tYXRlcmlhbHNfc3BlY3VsYXIudHMiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvLi4vLi4vLi4vZGV2L3NlcmlhbGl6ZXJzL3NyYy9nbFRGLzIuMC9FeHRlbnNpb25zL0tIUl9tYXRlcmlhbHNfdHJhbnNtaXNzaW9uLnRzIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2Rldi9zZXJpYWxpemVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9LSFJfbWF0ZXJpYWxzX3VubGl0LnRzIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2Rldi9zZXJpYWxpemVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9LSFJfbWF0ZXJpYWxzX3ZvbHVtZS50cyIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy8uLi8uLi8uLi9kZXYvc2VyaWFsaXplcnMvc3JjL2dsVEYvMi4wL0V4dGVuc2lvbnMvS0hSX3RleHR1cmVfdHJhbnNmb3JtLnRzIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2Rldi9zZXJpYWxpemVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9pbmRleC50cyIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy8uLi8uLi8uLi9kZXYvc2VyaWFsaXplcnMvc3JjL2dsVEYvMi4wL2J1ZmZlck1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvLi4vLi4vLi4vZGV2L3NlcmlhbGl6ZXJzL3NyYy9nbFRGLzIuMC9kYXRhV3JpdGVyLnRzIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2Rldi9zZXJpYWxpemVycy9zcmMvZ2xURi8yLjAvZ2xURkFuaW1hdGlvbi50cyIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy8uLi8uLi8uLi9kZXYvc2VyaWFsaXplcnMvc3JjL2dsVEYvMi4wL2dsVEZEYXRhLnRzIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2Rldi9zZXJpYWxpemVycy9zcmMvZ2xURi8yLjAvZ2xURkV4cG9ydGVyLnRzIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2Rldi9zZXJpYWxpemVycy9zcmMvZ2xURi8yLjAvZ2xURk1hdGVyaWFsRXhwb3J0ZXIudHMiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvLi4vLi4vLi4vZGV2L3NlcmlhbGl6ZXJzL3NyYy9nbFRGLzIuMC9nbFRGTW9ycGhUYXJnZXRzVXRpbGl0aWVzLnRzIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2Rldi9zZXJpYWxpemVycy9zcmMvZ2xURi8yLjAvZ2xURlNlcmlhbGl6ZXIudHMiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvLi4vLi4vLi4vZGV2L3NlcmlhbGl6ZXJzL3NyYy9nbFRGLzIuMC9nbFRGVXRpbGl0aWVzLnRzIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2Rldi9zZXJpYWxpemVycy9zcmMvZ2xURi8yLjAvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvLi4vLi4vLi4vZGV2L3NlcmlhbGl6ZXJzL3NyYy9nbFRGL2dsVEZGaWxlRXhwb3J0ZXIudHMiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvLi4vLi4vLi4vZGV2L3NlcmlhbGl6ZXJzL3NyYy9nbFRGL2luZGV4LnRzIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2Rldi9zZXJpYWxpemVycy9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvLi4vLi4vLi4vZGV2L3NlcmlhbGl6ZXJzL3NyYy9zdGwvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvLi4vLi4vLi4vZGV2L3NlcmlhbGl6ZXJzL3NyYy9zdGwvc3RsU2VyaWFsaXplci50cyIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy8uLi8uLi8uLi9sdHMvc2VyaWFsaXplcnMvc3JjL2xlZ2FjeS9sZWdhY3ktZ2xURjJTZXJpYWxpemVyLnRzIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2x0cy9zZXJpYWxpemVycy9zcmMvbGVnYWN5L2xlZ2FjeS1vYmpTZXJpYWxpemVyLnRzIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2x0cy9zZXJpYWxpemVycy9zcmMvbGVnYWN5L2xlZ2FjeS1zdGxTZXJpYWxpemVyLnRzIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2x0cy9zZXJpYWxpemVycy9zcmMvbGVnYWN5L2xlZ2FjeS11c2R6U2VyaWFsaXplci50cyIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy8uLi8uLi8uLi9sdHMvc2VyaWFsaXplcnMvc3JjL2xlZ2FjeS9sZWdhY3kudHMiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvZXh0ZXJuYWwgdW1kIHtcInJvb3RcIjpcIkJBQllMT05cIixcImNvbW1vbmpzXCI6XCJiYWJ5bG9uanNcIixcImNvbW1vbmpzMlwiOlwiYmFieWxvbmpzXCIsXCJhbWRcIjpcImJhYnlsb25qc1wifSIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy93ZWJwYWNrL3J1bnRpbWUvY3JlYXRlIGZha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL1NFUklBTElaRVJTL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiYmFieWxvbmpzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiYmFieWxvbmpzLXNlcmlhbGl6ZXJzXCIsIFtcImJhYnlsb25qc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJiYWJ5bG9uanMtc2VyaWFsaXplcnNcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJiYWJ5bG9uanNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlNFUklBTElaRVJTXCJdID0gZmFjdG9yeShyb290W1wiQkFCWUxPTlwiXSk7XG59KSgodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHRoaXMpLCAoX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9iYWJ5bG9uanNfTWlzY19maWxlVG9vbHNfXykgPT4ge1xucmV0dXJuICIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxuXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlLCBTdXBwcmVzc2VkRXJyb3IsIFN5bWJvbCwgSXRlcmF0b3IgKi9cblxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XG4gIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XG4gIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG59XG5cbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcbiAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcbiAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0O1xuICB9XG4gIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcbiAgdmFyIHQgPSB7fTtcbiAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICB0W3BdID0gc1twXTtcbiAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICB9XG4gIHJldHVybiB0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2VzRGVjb3JhdGUoY3RvciwgZGVzY3JpcHRvckluLCBkZWNvcmF0b3JzLCBjb250ZXh0SW4sIGluaXRpYWxpemVycywgZXh0cmFJbml0aWFsaXplcnMpIHtcbiAgZnVuY3Rpb24gYWNjZXB0KGYpIHsgaWYgKGYgIT09IHZvaWQgMCAmJiB0eXBlb2YgZiAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRnVuY3Rpb24gZXhwZWN0ZWRcIik7IHJldHVybiBmOyB9XG4gIHZhciBraW5kID0gY29udGV4dEluLmtpbmQsIGtleSA9IGtpbmQgPT09IFwiZ2V0dGVyXCIgPyBcImdldFwiIDoga2luZCA9PT0gXCJzZXR0ZXJcIiA/IFwic2V0XCIgOiBcInZhbHVlXCI7XG4gIHZhciB0YXJnZXQgPSAhZGVzY3JpcHRvckluICYmIGN0b3IgPyBjb250ZXh0SW5bXCJzdGF0aWNcIl0gPyBjdG9yIDogY3Rvci5wcm90b3R5cGUgOiBudWxsO1xuICB2YXIgZGVzY3JpcHRvciA9IGRlc2NyaXB0b3JJbiB8fCAodGFyZ2V0ID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGNvbnRleHRJbi5uYW1lKSA6IHt9KTtcbiAgdmFyIF8sIGRvbmUgPSBmYWxzZTtcbiAgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHZhciBjb250ZXh0ID0ge307XG4gICAgICBmb3IgKHZhciBwIGluIGNvbnRleHRJbikgY29udGV4dFtwXSA9IHAgPT09IFwiYWNjZXNzXCIgPyB7fSA6IGNvbnRleHRJbltwXTtcbiAgICAgIGZvciAodmFyIHAgaW4gY29udGV4dEluLmFjY2VzcykgY29udGV4dC5hY2Nlc3NbcF0gPSBjb250ZXh0SW4uYWNjZXNzW3BdO1xuICAgICAgY29udGV4dC5hZGRJbml0aWFsaXplciA9IGZ1bmN0aW9uIChmKSB7IGlmIChkb25lKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGFkZCBpbml0aWFsaXplcnMgYWZ0ZXIgZGVjb3JhdGlvbiBoYXMgY29tcGxldGVkXCIpOyBleHRyYUluaXRpYWxpemVycy5wdXNoKGFjY2VwdChmIHx8IG51bGwpKTsgfTtcbiAgICAgIHZhciByZXN1bHQgPSAoMCwgZGVjb3JhdG9yc1tpXSkoa2luZCA9PT0gXCJhY2Nlc3NvclwiID8geyBnZXQ6IGRlc2NyaXB0b3IuZ2V0LCBzZXQ6IGRlc2NyaXB0b3Iuc2V0IH0gOiBkZXNjcmlwdG9yW2tleV0sIGNvbnRleHQpO1xuICAgICAgaWYgKGtpbmQgPT09IFwiYWNjZXNzb3JcIikge1xuICAgICAgICAgIGlmIChyZXN1bHQgPT09IHZvaWQgMCkgY29udGludWU7XG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gbnVsbCB8fCB0eXBlb2YgcmVzdWx0ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0IGV4cGVjdGVkXCIpO1xuICAgICAgICAgIGlmIChfID0gYWNjZXB0KHJlc3VsdC5nZXQpKSBkZXNjcmlwdG9yLmdldCA9IF87XG4gICAgICAgICAgaWYgKF8gPSBhY2NlcHQocmVzdWx0LnNldCkpIGRlc2NyaXB0b3Iuc2V0ID0gXztcbiAgICAgICAgICBpZiAoXyA9IGFjY2VwdChyZXN1bHQuaW5pdCkpIGluaXRpYWxpemVycy51bnNoaWZ0KF8pO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoXyA9IGFjY2VwdChyZXN1bHQpKSB7XG4gICAgICAgICAgaWYgKGtpbmQgPT09IFwiZmllbGRcIikgaW5pdGlhbGl6ZXJzLnVuc2hpZnQoXyk7XG4gICAgICAgICAgZWxzZSBkZXNjcmlwdG9yW2tleV0gPSBfO1xuICAgICAgfVxuICB9XG4gIGlmICh0YXJnZXQpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGNvbnRleHRJbi5uYW1lLCBkZXNjcmlwdG9yKTtcbiAgZG9uZSA9IHRydWU7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19ydW5Jbml0aWFsaXplcnModGhpc0FyZywgaW5pdGlhbGl6ZXJzLCB2YWx1ZSkge1xuICB2YXIgdXNlVmFsdWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMjtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbml0aWFsaXplcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhbHVlID0gdXNlVmFsdWUgPyBpbml0aWFsaXplcnNbaV0uY2FsbCh0aGlzQXJnLCB2YWx1ZSkgOiBpbml0aWFsaXplcnNbaV0uY2FsbCh0aGlzQXJnKTtcbiAgfVxuICByZXR1cm4gdXNlVmFsdWUgPyB2YWx1ZSA6IHZvaWQgMDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3Byb3BLZXkoeCkge1xuICByZXR1cm4gdHlwZW9mIHggPT09IFwic3ltYm9sXCIgPyB4IDogXCJcIi5jb25jYXQoeCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19zZXRGdW5jdGlvbk5hbWUoZiwgbmFtZSwgcHJlZml4KSB7XG4gIGlmICh0eXBlb2YgbmFtZSA9PT0gXCJzeW1ib2xcIikgbmFtZSA9IG5hbWUuZGVzY3JpcHRpb24gPyBcIltcIi5jb25jYXQobmFtZS5kZXNjcmlwdGlvbiwgXCJdXCIpIDogXCJcIjtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmLCBcIm5hbWVcIiwgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiBwcmVmaXggPyBcIlwiLmNvbmNhdChwcmVmaXgsIFwiIFwiLCBuYW1lKSA6IG5hbWUgfSk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xuICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnID0gT2JqZWN0LmNyZWF0ZSgodHlwZW9mIEl0ZXJhdG9yID09PSBcImZ1bmN0aW9uXCIgPyBJdGVyYXRvciA6IE9iamVjdCkucHJvdG90eXBlKTtcbiAgcmV0dXJuIGcubmV4dCA9IHZlcmIoMCksIGdbXCJ0aHJvd1wiXSA9IHZlcmIoMSksIGdbXCJyZXR1cm5cIl0gPSB2ZXJiKDIpLCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICB3aGlsZSAoZyAmJiAoZyA9IDAsIG9wWzBdICYmIChfID0gMCkpLCBfKSB0cnkge1xuICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gIH1cbn1cblxuZXhwb3J0IHZhciBfX2NyZWF0ZUJpbmRpbmcgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcbiAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcbiAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XG4gIH1cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gIG9bazJdID0gbVtrXTtcbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIG8pIHtcbiAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBwKSkgX19jcmVhdGVCaW5kaW5nKG8sIG0sIHApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xuICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xuICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcbiAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xuICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XG4gICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xuICAgICAgfVxuICB9O1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xuICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XG4gIGlmICghbSkgcmV0dXJuIG87XG4gIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xuICB0cnkge1xuICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XG4gIH1cbiAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XG4gIGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcbiAgICAgIH1cbiAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxuICB9XG4gIHJldHVybiBhcjtcbn1cblxuLyoqIEBkZXByZWNhdGVkICovXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XG4gIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxuICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xuICByZXR1cm4gYXI7XG59XG5cbi8qKiBAZGVwcmVjYXRlZCAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xuICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcbiAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxuICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXG4gICAgICAgICAgcltrXSA9IGFbal07XG4gIHJldHVybiByO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheSh0bywgZnJvbSwgcGFjaykge1xuICBpZiAocGFjayB8fCBhcmd1bWVudHMubGVuZ3RoID09PSAyKSBmb3IgKHZhciBpID0gMCwgbCA9IGZyb20ubGVuZ3RoLCBhcjsgaSA8IGw7IGkrKykge1xuICAgICAgaWYgKGFyIHx8ICEoaSBpbiBmcm9tKSkge1xuICAgICAgICAgIGlmICghYXIpIGFyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSwgMCwgaSk7XG4gICAgICAgICAgYXJbaV0gPSBmcm9tW2ldO1xuICAgICAgfVxuICB9XG4gIHJldHVybiB0by5jb25jYXQoYXIgfHwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XG4gIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcbiAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcbiAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcbiAgcmV0dXJuIGkgPSBPYmplY3QuY3JlYXRlKCh0eXBlb2YgQXN5bmNJdGVyYXRvciA9PT0gXCJmdW5jdGlvblwiID8gQXN5bmNJdGVyYXRvciA6IE9iamVjdCkucHJvdG90eXBlKSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiLCBhd2FpdFJldHVybiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcbiAgZnVuY3Rpb24gYXdhaXRSZXR1cm4oZikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGYsIHJlamVjdCk7IH07IH1cbiAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlmIChnW25dKSB7IGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IGlmIChmKSBpW25dID0gZihpW25dKTsgfSB9XG4gIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cbiAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XG4gIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cbiAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxuICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcbiAgdmFyIGksIHA7XG4gIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XG4gIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IGZhbHNlIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcbiAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcbiAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcbiAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xuICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XG4gIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XG4gIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XG4gIHJldHVybiBjb29rZWQ7XG59O1xuXG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59O1xuXG52YXIgb3duS2V5cyA9IGZ1bmN0aW9uKG8pIHtcbiAgb3duS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIChvKSB7XG4gICAgdmFyIGFyID0gW107XG4gICAgZm9yICh2YXIgayBpbiBvKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIGspKSBhclthci5sZW5ndGhdID0gaztcbiAgICByZXR1cm4gYXI7XG4gIH07XG4gIHJldHVybiBvd25LZXlzKG8pO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcbiAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgPSBvd25LZXlzKG1vZCksIGkgPSAwOyBpIDwgay5sZW5ndGg7IGkrKykgaWYgKGtbaV0gIT09IFwiZGVmYXVsdFwiKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGtbaV0pO1xuICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xuICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcbiAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xuICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xuICBpZiAoa2luZCA9PT0gXCJtXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIG1ldGhvZCBpcyBub3Qgd3JpdGFibGVcIik7XG4gIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcbiAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgcmV0dXJuIChraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlciwgdmFsdWUpIDogZiA/IGYudmFsdWUgPSB2YWx1ZSA6IHN0YXRlLnNldChyZWNlaXZlciwgdmFsdWUpKSwgdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkSW4oc3RhdGUsIHJlY2VpdmVyKSB7XG4gIGlmIChyZWNlaXZlciA9PT0gbnVsbCB8fCAodHlwZW9mIHJlY2VpdmVyICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiByZWNlaXZlciAhPT0gXCJmdW5jdGlvblwiKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB1c2UgJ2luJyBvcGVyYXRvciBvbiBub24tb2JqZWN0XCIpO1xuICByZXR1cm4gdHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciA9PT0gc3RhdGUgOiBzdGF0ZS5oYXMocmVjZWl2ZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hZGREaXNwb3NhYmxlUmVzb3VyY2UoZW52LCB2YWx1ZSwgYXN5bmMpIHtcbiAgaWYgKHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB2b2lkIDApIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiB2YWx1ZSAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0IGV4cGVjdGVkLlwiKTtcbiAgICB2YXIgZGlzcG9zZSwgaW5uZXI7XG4gICAgaWYgKGFzeW5jKSB7XG4gICAgICBpZiAoIVN5bWJvbC5hc3luY0Rpc3Bvc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNEaXNwb3NlIGlzIG5vdCBkZWZpbmVkLlwiKTtcbiAgICAgIGRpc3Bvc2UgPSB2YWx1ZVtTeW1ib2wuYXN5bmNEaXNwb3NlXTtcbiAgICB9XG4gICAgaWYgKGRpc3Bvc2UgPT09IHZvaWQgMCkge1xuICAgICAgaWYgKCFTeW1ib2wuZGlzcG9zZSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5kaXNwb3NlIGlzIG5vdCBkZWZpbmVkLlwiKTtcbiAgICAgIGRpc3Bvc2UgPSB2YWx1ZVtTeW1ib2wuZGlzcG9zZV07XG4gICAgICBpZiAoYXN5bmMpIGlubmVyID0gZGlzcG9zZTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBkaXNwb3NlICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3Qgbm90IGRpc3Bvc2FibGUuXCIpO1xuICAgIGlmIChpbm5lcikgZGlzcG9zZSA9IGZ1bmN0aW9uKCkgeyB0cnkgeyBpbm5lci5jYWxsKHRoaXMpOyB9IGNhdGNoIChlKSB7IHJldHVybiBQcm9taXNlLnJlamVjdChlKTsgfSB9O1xuICAgIGVudi5zdGFjay5wdXNoKHsgdmFsdWU6IHZhbHVlLCBkaXNwb3NlOiBkaXNwb3NlLCBhc3luYzogYXN5bmMgfSk7XG4gIH1cbiAgZWxzZSBpZiAoYXN5bmMpIHtcbiAgICBlbnYuc3RhY2sucHVzaCh7IGFzeW5jOiB0cnVlIH0pO1xuICB9XG4gIHJldHVybiB2YWx1ZTtcbn1cblxudmFyIF9TdXBwcmVzc2VkRXJyb3IgPSB0eXBlb2YgU3VwcHJlc3NlZEVycm9yID09PSBcImZ1bmN0aW9uXCIgPyBTdXBwcmVzc2VkRXJyb3IgOiBmdW5jdGlvbiAoZXJyb3IsIHN1cHByZXNzZWQsIG1lc3NhZ2UpIHtcbiAgdmFyIGUgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIHJldHVybiBlLm5hbWUgPSBcIlN1cHByZXNzZWRFcnJvclwiLCBlLmVycm9yID0gZXJyb3IsIGUuc3VwcHJlc3NlZCA9IHN1cHByZXNzZWQsIGU7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19kaXNwb3NlUmVzb3VyY2VzKGVudikge1xuICBmdW5jdGlvbiBmYWlsKGUpIHtcbiAgICBlbnYuZXJyb3IgPSBlbnYuaGFzRXJyb3IgPyBuZXcgX1N1cHByZXNzZWRFcnJvcihlLCBlbnYuZXJyb3IsIFwiQW4gZXJyb3Igd2FzIHN1cHByZXNzZWQgZHVyaW5nIGRpc3Bvc2FsLlwiKSA6IGU7XG4gICAgZW52Lmhhc0Vycm9yID0gdHJ1ZTtcbiAgfVxuICB2YXIgciwgcyA9IDA7XG4gIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgd2hpbGUgKHIgPSBlbnYuc3RhY2sucG9wKCkpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghci5hc3luYyAmJiBzID09PSAxKSByZXR1cm4gcyA9IDAsIGVudi5zdGFjay5wdXNoKHIpLCBQcm9taXNlLnJlc29sdmUoKS50aGVuKG5leHQpO1xuICAgICAgICBpZiAoci5kaXNwb3NlKSB7XG4gICAgICAgICAgdmFyIHJlc3VsdCA9IHIuZGlzcG9zZS5jYWxsKHIudmFsdWUpO1xuICAgICAgICAgIGlmIChyLmFzeW5jKSByZXR1cm4gcyB8PSAyLCBQcm9taXNlLnJlc29sdmUocmVzdWx0KS50aGVuKG5leHQsIGZ1bmN0aW9uKGUpIHsgZmFpbChlKTsgcmV0dXJuIG5leHQoKTsgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBzIHw9IDE7XG4gICAgICB9XG4gICAgICBjYXRjaCAoZSkge1xuICAgICAgICBmYWlsKGUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAocyA9PT0gMSkgcmV0dXJuIGVudi5oYXNFcnJvciA/IFByb21pc2UucmVqZWN0KGVudi5lcnJvcikgOiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICBpZiAoZW52Lmhhc0Vycm9yKSB0aHJvdyBlbnYuZXJyb3I7XG4gIH1cbiAgcmV0dXJuIG5leHQoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fcmV3cml0ZVJlbGF0aXZlSW1wb3J0RXh0ZW5zaW9uKHBhdGgsIHByZXNlcnZlSnN4KSB7XG4gIGlmICh0eXBlb2YgcGF0aCA9PT0gXCJzdHJpbmdcIiAmJiAvXlxcLlxcLj9cXC8vLnRlc3QocGF0aCkpIHtcbiAgICAgIHJldHVybiBwYXRoLnJlcGxhY2UoL1xcLih0c3gpJHwoKD86XFwuZCk/KSgoPzpcXC5bXi4vXSs/KT8pXFwuKFtjbV0/KXRzJC9pLCBmdW5jdGlvbiAobSwgdHN4LCBkLCBleHQsIGNtKSB7XG4gICAgICAgICAgcmV0dXJuIHRzeCA/IHByZXNlcnZlSnN4ID8gXCIuanN4XCIgOiBcIi5qc1wiIDogZCAmJiAoIWV4dCB8fCAhY20pID8gbSA6IChkICsgZXh0ICsgXCIuXCIgKyBjbS50b0xvd2VyQ2FzZSgpICsgXCJqc1wiKTtcbiAgICAgIH0pO1xuICB9XG4gIHJldHVybiBwYXRoO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIF9fZXh0ZW5kcyxcbiAgX19hc3NpZ24sXG4gIF9fcmVzdCxcbiAgX19kZWNvcmF0ZSxcbiAgX19wYXJhbSxcbiAgX19lc0RlY29yYXRlLFxuICBfX3J1bkluaXRpYWxpemVycyxcbiAgX19wcm9wS2V5LFxuICBfX3NldEZ1bmN0aW9uTmFtZSxcbiAgX19tZXRhZGF0YSxcbiAgX19hd2FpdGVyLFxuICBfX2dlbmVyYXRvcixcbiAgX19jcmVhdGVCaW5kaW5nLFxuICBfX2V4cG9ydFN0YXIsXG4gIF9fdmFsdWVzLFxuICBfX3JlYWQsXG4gIF9fc3ByZWFkLFxuICBfX3NwcmVhZEFycmF5cyxcbiAgX19zcHJlYWRBcnJheSxcbiAgX19hd2FpdCxcbiAgX19hc3luY0dlbmVyYXRvcixcbiAgX19hc3luY0RlbGVnYXRvcixcbiAgX19hc3luY1ZhbHVlcyxcbiAgX19tYWtlVGVtcGxhdGVPYmplY3QsXG4gIF9faW1wb3J0U3RhcixcbiAgX19pbXBvcnREZWZhdWx0LFxuICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0LFxuICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0LFxuICBfX2NsYXNzUHJpdmF0ZUZpZWxkSW4sXG4gIF9fYWRkRGlzcG9zYWJsZVJlc291cmNlLFxuICBfX2Rpc3Bvc2VSZXNvdXJjZXMsXG4gIF9fcmV3cml0ZVJlbGF0aXZlSW1wb3J0RXh0ZW5zaW9uLFxufTtcbiIsImV4cG9ydCAqIGZyb20gXCIuL29ialNlcmlhbGl6ZXJcIjtcclxuIiwiaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCJjb3JlL3R5cGVzXCI7XHJcbmltcG9ydCB7IE1hdHJpeCB9IGZyb20gXCJjb3JlL01hdGhzL21hdGgudmVjdG9yXCI7XHJcbmltcG9ydCB7IFRvb2xzIH0gZnJvbSBcImNvcmUvTWlzYy90b29sc1wiO1xyXG5pbXBvcnQgdHlwZSB7IFN0YW5kYXJkTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvc3RhbmRhcmRNYXRlcmlhbFwiO1xyXG5pbXBvcnQgdHlwZSB7IEdlb21ldHJ5IH0gZnJvbSBcImNvcmUvTWVzaGVzL2dlb21ldHJ5XCI7XHJcbmltcG9ydCB0eXBlIHsgTWVzaCB9IGZyb20gXCJjb3JlL01lc2hlcy9tZXNoXCI7XHJcbmltcG9ydCB7IE1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL21hdGVyaWFsXCI7XHJcblxyXG4vKipcclxuICogQ2xhc3MgZm9yIGdlbmVyYXRpbmcgT0JKIGRhdGEgZnJvbSBhIEJhYnlsb24gc2NlbmUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgT0JKRXhwb3J0IHtcclxuICAgIC8qKlxyXG4gICAgICogRXhwb3J0cyB0aGUgZ2VvbWV0cnkgb2YgYSBNZXNoIGFycmF5IGluIC5PQkogZmlsZSBmb3JtYXQgKHRleHQpXHJcbiAgICAgKiBAcGFyYW0gbWVzaGVzIGRlZmluZXMgdGhlIGxpc3Qgb2YgbWVzaGVzIHRvIHNlcmlhbGl6ZVxyXG4gICAgICogQHBhcmFtIG1hdGVyaWFscyBkZWZpbmVzIGlmIG1hdGVyaWFscyBzaG91bGQgYmUgZXhwb3J0ZWRcclxuICAgICAqIEBwYXJhbSBtYXRsaWJuYW1lIGRlZmluZXMgdGhlIG5hbWUgb2YgdGhlIGFzc29jaWF0ZWQgbXRsIGZpbGVcclxuICAgICAqIEBwYXJhbSBnbG9iYWxwb3NpdGlvbiBkZWZpbmVzIGlmIHRoZSBleHBvcnRlZCBwb3NpdGlvbnMgYXJlIGdsb2JhbHMgb3IgbG9jYWwgdG8gdGhlIGV4cG9ydGVkIG1lc2hcclxuICAgICAqIEByZXR1cm5zIHRoZSBPQkogY29udGVudFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIE9CSihtZXNoZXM6IE1lc2hbXSwgbWF0ZXJpYWxzPzogYm9vbGVhbiwgbWF0bGlibmFtZT86IHN0cmluZywgZ2xvYmFscG9zaXRpb24/OiBib29sZWFuKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBvdXRwdXQ6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgbGV0IHYgPSAxO1xyXG4gICAgICAgIC8vIGtlZXAgdHJhY2sgb2YgdXYgaW5kZXggaW4gY2FzZSBtaXhlZCBtZXNoZXMgYXJlIHBhc3NlZCBpblxyXG4gICAgICAgIGxldCB0ZXh0dXJlViA9IDE7XHJcblxyXG4gICAgICAgIGlmIChtYXRlcmlhbHMpIHtcclxuICAgICAgICAgICAgaWYgKCFtYXRsaWJuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBtYXRsaWJuYW1lID0gXCJtYXRcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvdXRwdXQucHVzaChcIm10bGxpYiBcIiArIG1hdGxpYm5hbWUgKyBcIi5tdGxcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbWVzaGVzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc2ggPSBtZXNoZXNbal07XHJcbiAgICAgICAgICAgIGNvbnN0IG9iamVjdE5hbWUgPSBtZXNoLm5hbWUgfHwgYG1lc2gke2p9fWA7XHJcbiAgICAgICAgICAgIG91dHB1dC5wdXNoKGBvICR7b2JqZWN0TmFtZX1gKTtcclxuXHJcbiAgICAgICAgICAgIC8vVXNlcyB0aGUgcG9zaXRpb24gb2YgdGhlIGl0ZW0gaW4gdGhlIHNjZW5lLCB0byB0aGUgZmlsZSAodGhpcyBiYWNrIHRvIG5vcm1hbCBpbiB0aGUgZW5kKVxyXG4gICAgICAgICAgICBsZXQgaW52ZXJzZVRyYW5zZm9ybTogTnVsbGFibGU8TWF0cml4PiA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmIChnbG9iYWxwb3NpdGlvbikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdHJhbnNmb3JtID0gbWVzaC5jb21wdXRlV29ybGRNYXRyaXgodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBpbnZlcnNlVHJhbnNmb3JtID0gbmV3IE1hdHJpeCgpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtLmludmVydFRvUmVmKGludmVyc2VUcmFuc2Zvcm0pO1xyXG5cclxuICAgICAgICAgICAgICAgIG1lc2guYmFrZVRyYW5zZm9ybUludG9WZXJ0aWNlcyh0cmFuc2Zvcm0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL1RPRE86IHN1Ym1lc2hlcyAoZ3JvdXBzKVxyXG4gICAgICAgICAgICAvL1RPRE86IHNtb290aGluZyBncm91cHMgKHMgMSwgcyBvZmYpO1xyXG4gICAgICAgICAgICBpZiAobWF0ZXJpYWxzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYXQgPSBtZXNoLm1hdGVyaWFsO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChtYXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBvdXRwdXQucHVzaChcInVzZW10bCBcIiArIG1hdC5pZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgZzogTnVsbGFibGU8R2VvbWV0cnk+ID0gbWVzaC5nZW9tZXRyeTtcclxuXHJcbiAgICAgICAgICAgIGlmICghZykge1xyXG4gICAgICAgICAgICAgICAgVG9vbHMuV2FybihcIk5vIGdlb21ldHJ5IGlzIHByZXNlbnQgb24gdGhlIG1lc2hcIik7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgdHJ1bmtWZXJ0cyA9IGcuZ2V0VmVydGljZXNEYXRhKFwicG9zaXRpb25cIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHRydW5rTm9ybWFscyA9IGcuZ2V0VmVydGljZXNEYXRhKFwibm9ybWFsXCIpO1xyXG4gICAgICAgICAgICBjb25zdCB0cnVua1VWID0gZy5nZXRWZXJ0aWNlc0RhdGEoXCJ1dlwiKTtcclxuICAgICAgICAgICAgY29uc3QgdHJ1bmtGYWNlcyA9IGcuZ2V0SW5kaWNlcygpO1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudFYgPSAwO1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudFRleHR1cmVWID0gMDtcclxuXHJcbiAgICAgICAgICAgIGlmICghdHJ1bmtWZXJ0cyB8fCAhdHJ1bmtGYWNlcykge1xyXG4gICAgICAgICAgICAgICAgVG9vbHMuV2FybihcIlRoZXJlIGFyZSBubyBwb3NpdGlvbiB2ZXJ0aWNlcyBvciBpbmRpY2VzIG9uIHRoZSBtZXNoIVwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCB1c2VSaWdodEhhbmRlZFN5c3RlbSA9IG1lc2hlc1swXS5nZXRTY2VuZSgpLnVzZVJpZ2h0SGFuZGVkU3lzdGVtO1xyXG4gICAgICAgICAgICBjb25zdCBoYW5kZWRuZXNzU2lnbiA9IHVzZVJpZ2h0SGFuZGVkU3lzdGVtID8gMSA6IC0xO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0cnVua1ZlcnRzLmxlbmd0aDsgaSArPSAzKSB7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXQucHVzaChcInYgXCIgKyB0cnVua1ZlcnRzW2ldICogaGFuZGVkbmVzc1NpZ24gKyBcIiBcIiArIHRydW5rVmVydHNbaSArIDFdICsgXCIgXCIgKyB0cnVua1ZlcnRzW2kgKyAyXSk7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50VisrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodHJ1bmtOb3JtYWxzICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdHJ1bmtOb3JtYWxzLmxlbmd0aDsgaSArPSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0LnB1c2goXCJ2biBcIiArIHRydW5rTm9ybWFsc1tpXSAqIGhhbmRlZG5lc3NTaWduICsgXCIgXCIgKyB0cnVua05vcm1hbHNbaSArIDFdICsgXCIgXCIgKyB0cnVua05vcm1hbHNbaSArIDJdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodHJ1bmtVViAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRydW5rVVYubGVuZ3RoOyBpICs9IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBvdXRwdXQucHVzaChcInZ0IFwiICsgdHJ1bmtVVltpXSArIFwiIFwiICsgdHJ1bmtVVltpICsgMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUZXh0dXJlVisrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBibGFua3M6IHN0cmluZ1tdID0gW1wiXCIsIFwiXCIsIFwiXCJdO1xyXG4gICAgICAgICAgICBjb25zdCBtYXRlcmlhbCA9IG1lc2gubWF0ZXJpYWwgfHwgbWVzaC5nZXRTY2VuZSgpLmRlZmF1bHRNYXRlcmlhbDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNpZGVPcmllbnRhdGlvbiA9IG1hdGVyaWFsLl9nZXRFZmZlY3RpdmVPcmllbnRhdGlvbihtZXNoKTtcclxuICAgICAgICAgICAgY29uc3QgW29mZnNldDEsIG9mZnNldDJdID0gc2lkZU9yaWVudGF0aW9uID09PSBNYXRlcmlhbC5DbG9ja1dpc2VTaWRlT3JpZW50YXRpb24gPyBbMiwgMV0gOiBbMSwgMl07XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRydW5rRmFjZXMubGVuZ3RoOyBpICs9IDMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGluZGljZXMgPSBbU3RyaW5nKHRydW5rRmFjZXNbaV0gKyB2KSwgU3RyaW5nKHRydW5rRmFjZXNbaSArIG9mZnNldDFdICsgdiksIFN0cmluZyh0cnVua0ZhY2VzW2kgKyBvZmZzZXQyXSArIHYpXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRleHR1cmVJbmRpY2VzID0gW1N0cmluZyh0cnVua0ZhY2VzW2ldICsgdGV4dHVyZVYpLCBTdHJpbmcodHJ1bmtGYWNlc1tpICsgb2Zmc2V0MV0gKyB0ZXh0dXJlViksIFN0cmluZyh0cnVua0ZhY2VzW2kgKyBvZmZzZXQyXSArIHRleHR1cmVWKV07XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZmFjZVBvc2l0aW9ucyA9IGluZGljZXM7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmYWNlVVZzID0gdHJ1bmtVViAhPSBudWxsID8gdGV4dHVyZUluZGljZXMgOiBibGFua3M7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmYWNlTm9ybWFscyA9IHRydW5rTm9ybWFscyAhPSBudWxsID8gaW5kaWNlcyA6IGJsYW5rcztcclxuXHJcbiAgICAgICAgICAgICAgICBvdXRwdXQucHVzaChcclxuICAgICAgICAgICAgICAgICAgICBcImYgXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWNlUG9zaXRpb25zWzBdICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCIvXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWNlVVZzWzBdICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCIvXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWNlTm9ybWFsc1swXSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmFjZVBvc2l0aW9uc1sxXSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiL1wiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmFjZVVWc1sxXSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiL1wiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmFjZU5vcm1hbHNbMV0gK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhY2VQb3NpdGlvbnNbMl0gK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIi9cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhY2VVVnNbMl0gK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIi9cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhY2VOb3JtYWxzWzJdXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vYmFjayBkZSBwcmV2aW91cyBtYXRyaXgsIHRvIG5vdCBjaGFuZ2UgdGhlIG9yaWdpbmFsIG1lc2ggaW4gdGhlIHNjZW5lXHJcbiAgICAgICAgICAgIGlmIChnbG9iYWxwb3NpdGlvbiAmJiBpbnZlcnNlVHJhbnNmb3JtKSB7XHJcbiAgICAgICAgICAgICAgICBtZXNoLmJha2VUcmFuc2Zvcm1JbnRvVmVydGljZXMoaW52ZXJzZVRyYW5zZm9ybSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdiArPSBjdXJyZW50VjtcclxuICAgICAgICAgICAgdGV4dHVyZVYgKz0gY3VycmVudFRleHR1cmVWO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0ZXh0OiBzdHJpbmcgPSBvdXRwdXQuam9pbihcIlxcblwiKTtcclxuICAgICAgICByZXR1cm4gdGV4dDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEV4cG9ydHMgdGhlIG1hdGVyaWFsKHMpIG9mIGEgbWVzaCBpbiAuTVRMIGZpbGUgZm9ybWF0ICh0ZXh0KVxyXG4gICAgICogQHBhcmFtIG1lc2ggZGVmaW5lcyB0aGUgbWVzaCB0byBleHRyYWN0IHRoZSBtYXRlcmlhbCBmcm9tXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgbXRsIGNvbnRlbnRcclxuICAgICAqL1xyXG4gICAgLy9UT0RPOiBFeHBvcnQgdGhlIG1hdGVyaWFscyBvZiBtZXNoIGFycmF5XHJcbiAgICBwdWJsaWMgc3RhdGljIE1UTChtZXNoOiBNZXNoKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBvdXRwdXQgPSBbXTtcclxuICAgICAgICBjb25zdCBtID0gPFN0YW5kYXJkTWF0ZXJpYWw+bWVzaC5tYXRlcmlhbDtcclxuICAgICAgICBvdXRwdXQucHVzaChcIm5ld210bCBtYXQxXCIpO1xyXG4gICAgICAgIG91dHB1dC5wdXNoKFwiICBOcyBcIiArIG0uc3BlY3VsYXJQb3dlci50b0ZpeGVkKDQpKTtcclxuICAgICAgICBvdXRwdXQucHVzaChcIiAgTmkgMS41MDAwXCIpO1xyXG4gICAgICAgIG91dHB1dC5wdXNoKFwiICBkIFwiICsgbS5hbHBoYS50b0ZpeGVkKDQpKTtcclxuICAgICAgICBvdXRwdXQucHVzaChcIiAgVHIgMC4wMDAwXCIpO1xyXG4gICAgICAgIG91dHB1dC5wdXNoKFwiICBUZiAxLjAwMDAgMS4wMDAwIDEuMDAwMFwiKTtcclxuICAgICAgICBvdXRwdXQucHVzaChcIiAgaWxsdW0gMlwiKTtcclxuICAgICAgICBvdXRwdXQucHVzaChcIiAgS2EgXCIgKyBtLmFtYmllbnRDb2xvci5yLnRvRml4ZWQoNCkgKyBcIiBcIiArIG0uYW1iaWVudENvbG9yLmcudG9GaXhlZCg0KSArIFwiIFwiICsgbS5hbWJpZW50Q29sb3IuYi50b0ZpeGVkKDQpKTtcclxuICAgICAgICBvdXRwdXQucHVzaChcIiAgS2QgXCIgKyBtLmRpZmZ1c2VDb2xvci5yLnRvRml4ZWQoNCkgKyBcIiBcIiArIG0uZGlmZnVzZUNvbG9yLmcudG9GaXhlZCg0KSArIFwiIFwiICsgbS5kaWZmdXNlQ29sb3IuYi50b0ZpeGVkKDQpKTtcclxuICAgICAgICBvdXRwdXQucHVzaChcIiAgS3MgXCIgKyBtLnNwZWN1bGFyQ29sb3Iuci50b0ZpeGVkKDQpICsgXCIgXCIgKyBtLnNwZWN1bGFyQ29sb3IuZy50b0ZpeGVkKDQpICsgXCIgXCIgKyBtLnNwZWN1bGFyQ29sb3IuYi50b0ZpeGVkKDQpKTtcclxuICAgICAgICBvdXRwdXQucHVzaChcIiAgS2UgXCIgKyBtLmVtaXNzaXZlQ29sb3Iuci50b0ZpeGVkKDQpICsgXCIgXCIgKyBtLmVtaXNzaXZlQ29sb3IuZy50b0ZpeGVkKDQpICsgXCIgXCIgKyBtLmVtaXNzaXZlQ29sb3IuYi50b0ZpeGVkKDQpKTtcclxuXHJcbiAgICAgICAgLy9UT0RPOiB1diBzY2FsZSwgb2Zmc2V0LCB3cmFwXHJcbiAgICAgICAgLy9UT0RPOiBVViBtaXJyb3JlZCBpbiBCbGVuZGVyPyBzZWNvbmQgVVYgY2hhbm5lbD8gbGlnaHRNYXA/IHJlZmxlY3Rpb24gdGV4dHVyZXM/XHJcbiAgICAgICAgY29uc3QgdXZzY2FsZSA9IFwiXCI7XHJcblxyXG4gICAgICAgIGlmIChtLmFtYmllbnRUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgIG91dHB1dC5wdXNoKFwiICBtYXBfS2EgXCIgKyB1dnNjYWxlICsgbS5hbWJpZW50VGV4dHVyZS5uYW1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtLmRpZmZ1c2VUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgIG91dHB1dC5wdXNoKFwiICBtYXBfS2QgXCIgKyB1dnNjYWxlICsgbS5kaWZmdXNlVGV4dHVyZS5uYW1lKTtcclxuICAgICAgICAgICAgLy9UT0RPOiBhbHBoYSB0ZXN0aW5nLCBvcGFjaXR5IGluIGRpZmZ1c2UgdGV4dHVyZSBhbHBoYSBjaGFubmVsIChkaWZmdXNlVGV4dHVyZS5oYXNBbHBoYSAtPiBtYXBfZClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtLnNwZWN1bGFyVGV4dHVyZSkge1xyXG4gICAgICAgICAgICBvdXRwdXQucHVzaChcIiAgbWFwX0tzIFwiICsgdXZzY2FsZSArIG0uc3BlY3VsYXJUZXh0dXJlLm5hbWUpO1xyXG4gICAgICAgICAgICAvKiBUT0RPOiBnbG9zc2luZXNzID0gc3BlY3VsYXIgaGlnaGxpZ2h0IGNvbXBvbmVudCBpcyBpbiBhbHBoYSBjaGFubmVsIG9mIHNwZWN1bGFyVGV4dHVyZS4gKD8/PylcclxuICAgICAgICAgICAgaWYgKG0udXNlR2xvc3NpbmVzc0Zyb21TcGVjdWxhck1hcEFscGhhKSAge1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0LnB1c2goXCIgIG1hcF9OcyBcIit1dnNjYWxlICsgbS5zcGVjdWxhclRleHR1cmUubmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKi9cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qIFRPRE86IGVtaXNzaXZlIHRleHR1cmUgbm90IGluIC5NQVQgZm9ybWF0ICg/Pz8pXHJcbiAgICAgICAgaWYgKG0uZW1pc3NpdmVUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgIG91dHB1dC5wdXNoKFwiICBtYXBfZCBcIit1dnNjYWxlK20uZW1pc3NpdmVUZXh0dXJlLm5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAqL1xyXG5cclxuICAgICAgICBpZiAobS5idW1wVGV4dHVyZSkge1xyXG4gICAgICAgICAgICBvdXRwdXQucHVzaChcIiAgbWFwX2J1bXAgLWltZmNoYW4geiBcIiArIHV2c2NhbGUgKyBtLmJ1bXBUZXh0dXJlLm5hbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG0ub3BhY2l0eVRleHR1cmUpIHtcclxuICAgICAgICAgICAgb3V0cHV0LnB1c2goXCIgIG1hcF9kIFwiICsgdXZzY2FsZSArIG0ub3BhY2l0eVRleHR1cmUubmFtZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB0ZXh0ID0gb3V0cHV0LmpvaW4oXCJcXG5cIik7XHJcbiAgICAgICAgcmV0dXJuIHRleHQ7XHJcbiAgICB9XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWludGVybmFsLW1vZHVsZXMgKi9cclxuZXhwb3J0ICogZnJvbSBcIi4vdXNkekV4cG9ydGVyXCI7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiAqL1xyXG5pbXBvcnQgeyBWZXJ0ZXhCdWZmZXIgfSBmcm9tIFwiY29yZS9CdWZmZXJzL2J1ZmZlclwiO1xyXG5pbXBvcnQgdHlwZSB7IENhbWVyYSB9IGZyb20gXCJjb3JlL0NhbWVyYXMvY2FtZXJhXCI7XHJcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCJjb3JlL0VuZ2luZXMvY29uc3RhbnRzXCI7XHJcbmltcG9ydCB0eXBlIHsgTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHR5cGUgeyBQQlJNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9QQlIvcGJyTWF0ZXJpYWxcIjtcclxuaW1wb3J0IHR5cGUgeyBQQlJNZXRhbGxpY1JvdWdobmVzc01hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1BCUi9wYnJNZXRhbGxpY1JvdWdobmVzc01hdGVyaWFsXCI7XHJcbmltcG9ydCB0eXBlIHsgU3RhbmRhcmRNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9zdGFuZGFyZE1hdGVyaWFsXCI7XHJcbmltcG9ydCB0eXBlIHsgQmFzZVRleHR1cmUgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvYmFzZVRleHR1cmVcIjtcclxuaW1wb3J0IHR5cGUgeyBUZXh0dXJlIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1RleHR1cmVzL3RleHR1cmVcIjtcclxuaW1wb3J0IHsgQ29sb3IzIH0gZnJvbSBcImNvcmUvTWF0aHMvbWF0aC5jb2xvclwiO1xyXG5pbXBvcnQgeyBNYXRyaXgsIFZlY3RvcjIgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLnZlY3RvclwiO1xyXG5pbXBvcnQgdHlwZSB7IEdlb21ldHJ5IH0gZnJvbSBcImNvcmUvTWVzaGVzL2dlb21ldHJ5XCI7XHJcbmltcG9ydCB0eXBlIHsgTWVzaCB9IGZyb20gXCJjb3JlL01lc2hlcy9tZXNoXCI7XHJcbmltcG9ydCB7IER1bXBUb29scyB9IGZyb20gXCJjb3JlL01pc2MvZHVtcFRvb2xzXCI7XHJcbmltcG9ydCB7IFRvb2xzIH0gZnJvbSBcImNvcmUvTWlzYy90b29sc1wiO1xyXG5pbXBvcnQgdHlwZSB7IFNjZW5lIH0gZnJvbSBcImNvcmUvc2NlbmVcIjtcclxuaW1wb3J0IHR5cGUgeyBGbG9hdEFycmF5LCBOdWxsYWJsZSB9IGZyb20gXCJjb3JlL3R5cGVzXCI7XHJcblxyXG4vKipcclxuICogUG9ydGVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL21yZG9vYi90aHJlZS5qcy9ibG9iL21hc3Rlci9leGFtcGxlcy9qc20vZXhwb3J0ZXJzL1VTRFpFeHBvcnRlci5qc1xyXG4gKiBUaGFua3MgYSBsb3QgdG8gdGhlIHRocmVlLmpzIHRlYW0gZm9yIHRoZWlyIGFtYXppbmcgd29yayFcclxuICovXHJcblxyXG4vLyBGRmxhdGUgYWNjZXNzXHJcbmRlY2xhcmUgY29uc3QgZmZsYXRlOiBhbnk7XHJcblxyXG4vKipcclxuICogT3B0aW9ucyBmb3IgdGhlIFVTRFogZXhwb3J0XHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElVU0RaRXhwb3J0T3B0aW9ucyB7XHJcbiAgICAvKipcclxuICAgICAqIFVSTCB0byBsb2FkIHRoZSBmZmxhdGUgbGlicmFyeSBmcm9tXHJcbiAgICAgKi9cclxuICAgIGZmbGF0ZVVybD86IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogSW5jbHVkZSBhbmNob3JpbmcgcHJvcGVydGllcyBpbiB0aGUgVVNEWiBmaWxlXHJcbiAgICAgKi9cclxuICAgIGluY2x1ZGVBbmNob3JpbmdQcm9wZXJ0aWVzPzogYm9vbGVhbjtcclxuICAgIC8qKlxyXG4gICAgICogQW5jaG9yaW5nIHR5cGUgKHBsYW5lIGJ5IGRlZmF1bHQpXHJcbiAgICAgKi9cclxuICAgIGFuY2hvcmluZ1R5cGU/OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIFBsYW5lIGFuY2hvcmluZyBhbGlnbm1lbnQgKGhvcml6b250YWwgYnkgZGVmYXVsdClcclxuICAgICAqL1xyXG4gICAgcGxhbmVBbmNob3JpbmdBbGlnbm1lbnQ/OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIE1vZGVsIGZpbGUgbmFtZSAobW9kZWwudXNkYSBieSBkZWZhdWx0KVxyXG4gICAgICovXHJcbiAgICBtb2RlbEZpbGVOYW1lPzogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBQcmVjaXNpb24gdG8gdXNlIGZvciBudW1iZXIgKDUgYnkgZGVmYXVsdClcclxuICAgICAqL1xyXG4gICAgcHJlY2lzaW9uPzogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBFeHBvcnQgdGhlIGNhbWVyYSAoZmFsc2UgYnkgZGVmYXVsdClcclxuICAgICAqL1xyXG4gICAgZXhwb3J0Q2FtZXJhPzogYm9vbGVhbjtcclxuICAgIC8qKlxyXG4gICAgICogQ2FtZXJhIHNlbnNvciB3aWR0aCAoMzUgYnkgZGVmYXVsdClcclxuICAgICAqL1xyXG4gICAgY2FtZXJhU2Vuc29yV2lkdGg/OiBudW1iZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEJ1aWxkSGVhZGVyKCkge1xyXG4gICAgcmV0dXJuIGAjdXNkYSAxLjBcclxuICAgIChcclxuICAgICAgICBjdXN0b21MYXllckRhdGEgPSB7XHJcbiAgICAgICAgICAgIHN0cmluZyBjcmVhdG9yID0gXCJCYWJ5bG9uLmpzIFVTRFpFeHBvcnRBc3luY1wiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHRQcmltID0gXCJSb290XCJcclxuICAgICAgICBtZXRlcnNQZXJVbml0ID0gMVxyXG4gICAgICAgIHVwQXhpcyA9IFwiWVwiXHJcbiAgICApYDtcclxufVxyXG5cclxuZnVuY3Rpb24gQnVpbGRTY2VuZVN0YXJ0KG9wdGlvbnM6IElVU0RaRXhwb3J0T3B0aW9ucykge1xyXG4gICAgY29uc3QgYWxpZ25tZW50ID1cclxuICAgICAgICBvcHRpb25zLmluY2x1ZGVBbmNob3JpbmdQcm9wZXJ0aWVzID09PSB0cnVlXHJcbiAgICAgICAgICAgID8gYFxyXG5cdFx0dG9rZW4gcHJlbGltaW5hcnk6YW5jaG9yaW5nOnR5cGUgPSBcIiR7b3B0aW9ucy5hbmNob3JpbmdUeXBlfVwiXHJcblx0XHR0b2tlbiBwcmVsaW1pbmFyeTpwbGFuZUFuY2hvcmluZzphbGlnbm1lbnQgPSBcIiR7b3B0aW9ucy5wbGFuZUFuY2hvcmluZ0FsaWdubWVudH1cImBcclxuICAgICAgICAgICAgOiBcIlwiO1xyXG4gICAgcmV0dXJuIGBkZWYgWGZvcm0gXCJSb290XCJcclxuICAgIHtcclxuICAgICAgICBkZWYgU2NvcGUgXCJTY2VuZXNcIiAoXHJcbiAgICAgICAgICAgIGtpbmQgPSBcInNjZW5lTGlicmFyeVwiXHJcbiAgICAgICAgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZGVmIFhmb3JtIFwiU2NlbmVcIiAoXHJcbiAgICAgICAgICAgICAgICBjdXN0b21EYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvb2wgcHJlbGltaW5hcnlfY29sbGlkZXNXaXRoRW52aXJvbm1lbnQgPSAwXHJcbiAgICAgICAgICAgICAgICAgICAgc3RyaW5nIHNjZW5lTmFtZSA9IFwiU2NlbmVcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2NlbmVOYW1lID0gXCJTY2VuZVwiXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgeyR7YWxpZ25tZW50fVxyXG4gICAgICAgICAgICBgO1xyXG59XHJcblxyXG5mdW5jdGlvbiBCdWlsZFNjZW5lRW5kKCkge1xyXG4gICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1gO1xyXG59XHJcblxyXG5mdW5jdGlvbiBCdWlsZE1lc2hWZXJ0ZXhDb3VudChnZW9tZXRyeTogR2VvbWV0cnkpIHtcclxuICAgIGNvbnN0IGNvdW50ID0gZ2VvbWV0cnkuZ2V0SW5kaWNlcygpPy5sZW5ndGggPyBnZW9tZXRyeS5nZXRUb3RhbEluZGljZXMoKSA6IGdlb21ldHJ5LmdldFRvdGFsVmVydGljZXMoKTtcclxuXHJcbiAgICByZXR1cm4gQXJyYXkoY291bnQgLyAzKVxyXG4gICAgICAgIC5maWxsKDMpXHJcbiAgICAgICAgLmpvaW4oXCIsIFwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gQnVpbGRNZXNoVmVydGV4SW5kaWNlcyhnZW9tZXRyeTogR2VvbWV0cnkpIHtcclxuICAgIGNvbnN0IGluZGV4ID0gZ2VvbWV0cnkuZ2V0SW5kaWNlcygpO1xyXG4gICAgY29uc3QgYXJyYXkgPSBbXTtcclxuXHJcbiAgICBpZiAoaW5kZXggIT09IG51bGwpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluZGV4Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGFycmF5LnB1c2goaW5kZXhbaV0pO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gZ2VvbWV0cnkuZ2V0VG90YWxWZXJ0aWNlcygpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGFycmF5LnB1c2goaSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhcnJheS5qb2luKFwiLCBcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEJ1aWxkVmVjdG9yM0FycmF5KGF0dHJpYnV0ZTogRmxvYXRBcnJheSwgb3B0aW9uczogSVVTRFpFeHBvcnRPcHRpb25zLCBzdHJpZGUgPSAzKSB7XHJcbiAgICBjb25zdCBhcnJheSA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXR0cmlidXRlLmxlbmd0aCAvIHN0cmlkZTsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgeCA9IGF0dHJpYnV0ZVtpICogc3RyaWRlXTtcclxuICAgICAgICBjb25zdCB5ID0gYXR0cmlidXRlW2kgKiBzdHJpZGUgKyAxXTtcclxuICAgICAgICBjb25zdCB6ID0gYXR0cmlidXRlW2kgKiBzdHJpZGUgKyAyXTtcclxuXHJcbiAgICAgICAgYXJyYXkucHVzaChgKCR7eC50b1ByZWNpc2lvbihvcHRpb25zLnByZWNpc2lvbil9LCAke3kudG9QcmVjaXNpb24ob3B0aW9ucy5wcmVjaXNpb24pfSwgJHt6LnRvUHJlY2lzaW9uKG9wdGlvbnMucHJlY2lzaW9uKX0pYCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFycmF5LmpvaW4oXCIsIFwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gQnVpbGRWZWN0b3IyQXJyYXkoYXR0cmlidXRlOiBGbG9hdEFycmF5LCBvcHRpb25zOiBJVVNEWkV4cG9ydE9wdGlvbnMpIHtcclxuICAgIGNvbnN0IGFycmF5ID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRyaWJ1dGUubGVuZ3RoIC8gMjsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgeCA9IGF0dHJpYnV0ZVtpICogMl07XHJcbiAgICAgICAgY29uc3QgeSA9IGF0dHJpYnV0ZVtpICogMiArIDFdO1xyXG5cclxuICAgICAgICBhcnJheS5wdXNoKGAoJHt4LnRvUHJlY2lzaW9uKG9wdGlvbnMucHJlY2lzaW9uKX0sICR7KDEgLSB5KS50b1ByZWNpc2lvbihvcHRpb25zLnByZWNpc2lvbil9KWApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhcnJheS5qb2luKFwiLCBcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEJ1aWxkQWRkaXRpb25hbEF0dHJpYnV0ZXMoZ2VvbWV0cnk6IEdlb21ldHJ5LCBvcHRpb25zOiBJVVNEWkV4cG9ydE9wdGlvbnMpIHtcclxuICAgIGxldCBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgaWQgPSBpID4gMCA/IGkgOiBcIlwiO1xyXG4gICAgICAgIGNvbnN0IHV2QXR0cmlidXRlID0gZ2VvbWV0cnkuZ2V0VmVydGljZXNEYXRhKFZlcnRleEJ1ZmZlci5VVktpbmQgKyAoaWQgPyBpZCA6IFwiXCIpKTtcclxuXHJcbiAgICAgICAgaWYgKHV2QXR0cmlidXRlKSB7XHJcbiAgICAgICAgICAgIHN0cmluZyArPSBgXHJcblx0XHR0ZXhDb29yZDJmW10gcHJpbXZhcnM6c3Qke2lkfSA9IFske0J1aWxkVmVjdG9yMkFycmF5KHV2QXR0cmlidXRlLCBvcHRpb25zKX1dIChcclxuXHRcdFx0aW50ZXJwb2xhdGlvbiA9IFwidmVydGV4XCJcclxuXHRcdClgO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyB2ZXJ0ZXggY29sb3JzXHJcblxyXG4gICAgY29uc3QgY29sb3JBdHRyaWJ1dGUgPSBnZW9tZXRyeS5nZXRWZXJ0aWNlc0RhdGEoVmVydGV4QnVmZmVyLkNvbG9yS2luZCk7XHJcblxyXG4gICAgaWYgKGNvbG9yQXR0cmlidXRlKSB7XHJcbiAgICAgICAgc3RyaW5nICs9IGBcclxuXHRjb2xvcjNmW10gcHJpbXZhcnM6ZGlzcGxheUNvbG9yID0gWyR7QnVpbGRWZWN0b3IzQXJyYXkoY29sb3JBdHRyaWJ1dGUsIG9wdGlvbnMsIGNvbG9yQXR0cmlidXRlLmxlbmd0aCAvIGdlb21ldHJ5LmdldFRvdGFsVmVydGljZXMoKSl9XSAoXHJcblx0XHRpbnRlcnBvbGF0aW9uID0gXCJ2ZXJ0ZXhcIlxyXG5cdFx0KWA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHN0cmluZztcclxufVxyXG5cclxuZnVuY3Rpb24gQnVpbGRNZXNoKGdlb21ldHJ5OiBHZW9tZXRyeSwgb3B0aW9uczogSVVTRFpFeHBvcnRPcHRpb25zKSB7XHJcbiAgICBjb25zdCBuYW1lID0gXCJHZW9tZXRyeVwiO1xyXG4gICAgY29uc3QgcG9zaXRpb24gPSBnZW9tZXRyeS5nZXRWZXJ0aWNlc0RhdGEoVmVydGV4QnVmZmVyLlBvc2l0aW9uS2luZCk7XHJcbiAgICBjb25zdCBub3JtYWwgPSBnZW9tZXRyeS5nZXRWZXJ0aWNlc0RhdGEoVmVydGV4QnVmZmVyLlBvc2l0aW9uS2luZCk7XHJcblxyXG4gICAgaWYgKCFwb3NpdGlvbiB8fCAhbm9ybWFsKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBgXHJcblx0ZGVmIE1lc2ggXCIke25hbWV9XCJcclxuXHR7XHJcblx0XHRpbnRbXSBmYWNlVmVydGV4Q291bnRzID0gWyR7QnVpbGRNZXNoVmVydGV4Q291bnQoZ2VvbWV0cnkpfV1cclxuXHRcdGludFtdIGZhY2VWZXJ0ZXhJbmRpY2VzID0gWyR7QnVpbGRNZXNoVmVydGV4SW5kaWNlcyhnZW9tZXRyeSl9XVxyXG5cdFx0bm9ybWFsM2ZbXSBub3JtYWxzID0gWyR7QnVpbGRWZWN0b3IzQXJyYXkobm9ybWFsLCBvcHRpb25zKX1dIChcclxuXHRcdFx0aW50ZXJwb2xhdGlvbiA9IFwidmVydGV4XCJcclxuXHRcdClcclxuXHRcdHBvaW50M2ZbXSBwb2ludHMgPSBbJHtCdWlsZFZlY3RvcjNBcnJheShwb3NpdGlvbiwgb3B0aW9ucyl9XVxyXG4gICAgICAgICR7QnVpbGRBZGRpdGlvbmFsQXR0cmlidXRlcyhnZW9tZXRyeSwgb3B0aW9ucyl9XHJcblx0XHR1bmlmb3JtIHRva2VuIHN1YmRpdmlzaW9uU2NoZW1lID0gXCJub25lXCJcclxuXHR9XHJcbmA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEJ1aWxkTWVzaE9iamVjdChnZW9tZXRyeTogR2VvbWV0cnksIG9wdGlvbnM6IElVU0RaRXhwb3J0T3B0aW9ucykge1xyXG4gICAgY29uc3QgbWVzaCA9IEJ1aWxkTWVzaChnZW9tZXRyeSwgb3B0aW9ucyk7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgICAgIGRlZiBcIkdlb21ldHJ5XCJcclxuICAgICAgICB7XHJcbiAgICAgICAgJHttZXNofVxyXG4gICAgICAgIH1cclxuICAgICAgICBgO1xyXG59XHJcblxyXG5mdW5jdGlvbiBCdWlsZFVTREZpbGVBc1N0cmluZyhkYXRhVG9JbnNlcnQ6IHN0cmluZykge1xyXG4gICAgbGV0IG91dHB1dCA9IEJ1aWxkSGVhZGVyKCk7XHJcbiAgICBvdXRwdXQgKz0gZGF0YVRvSW5zZXJ0O1xyXG4gICAgcmV0dXJuIGZmbGF0ZS5zdHJUb1U4KG91dHB1dCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEJ1aWxkTWF0cml4KG1hdHJpeDogTWF0cml4KSB7XHJcbiAgICBjb25zdCBhcnJheSA9IG1hdHJpeC5tIGFzIG51bWJlcltdO1xyXG5cclxuICAgIHJldHVybiBgKCAke0J1aWxkTWF0cml4Um93KGFycmF5LCAwKX0sICR7QnVpbGRNYXRyaXhSb3coYXJyYXksIDQpfSwgJHtCdWlsZE1hdHJpeFJvdyhhcnJheSwgOCl9LCAke0J1aWxkTWF0cml4Um93KGFycmF5LCAxMil9IClgO1xyXG59XHJcblxyXG5mdW5jdGlvbiBCdWlsZE1hdHJpeFJvdyhhcnJheTogbnVtYmVyW10sIG9mZnNldDogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gYCgke2FycmF5W29mZnNldCArIDBdfSwgJHthcnJheVtvZmZzZXQgKyAxXX0sICR7YXJyYXlbb2Zmc2V0ICsgMl19LCAke2FycmF5W29mZnNldCArIDNdfSlgO1xyXG59XHJcblxyXG5mdW5jdGlvbiBCdWlsZFhmb3JtKG1lc2g6IE1lc2gpIHtcclxuICAgIGNvbnN0IG5hbWUgPSBcIk9iamVjdF9cIiArIG1lc2gudW5pcXVlSWQ7XHJcbiAgICBjb25zdCBtYXRyaXggPSBtZXNoLmdldFdvcmxkTWF0cml4KCkuY2xvbmUoKTtcclxuXHJcbiAgICBpZiAobWF0cml4LmRldGVybWluYW50KCkgPCAwKSB7XHJcbiAgICAgICAgbWF0cml4Lm11bHRpcGx5VG9SZWYoTWF0cml4LlNjYWxpbmcoLTEsIDEsIDEpLCBtYXRyaXgpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdHJhbnNmb3JtID0gQnVpbGRNYXRyaXgobWF0cml4KTtcclxuXHJcbiAgICByZXR1cm4gYGRlZiBYZm9ybSBcIiR7bmFtZX1cIiAoXHJcblx0cHJlcGVuZCByZWZlcmVuY2VzID0gQC4vZ2VvbWV0cmllcy9HZW9tZXRyeV8ke21lc2guZ2VvbWV0cnkhLnVuaXF1ZUlkfS51c2RhQDwvR2VvbWV0cnk+XHJcblx0cHJlcGVuZCBhcGlTY2hlbWFzID0gW1wiTWF0ZXJpYWxCaW5kaW5nQVBJXCJdXHJcbilcclxue1xyXG5cdG1hdHJpeDRkIHhmb3JtT3A6dHJhbnNmb3JtID0gJHt0cmFuc2Zvcm19XHJcblx0dW5pZm9ybSB0b2tlbltdIHhmb3JtT3BPcmRlciA9IFtcInhmb3JtT3A6dHJhbnNmb3JtXCJdXHRcclxuXHJcbiAgICByZWwgbWF0ZXJpYWw6YmluZGluZyA9IDwvTWF0ZXJpYWxzL01hdGVyaWFsXyR7bWVzaC5tYXRlcmlhbCEudW5pcXVlSWR9PlxyXG59XHJcblxyXG5gO1xyXG59XHJcblxyXG5mdW5jdGlvbiBCdWlsZE1hdGVyaWFscyhtYXRlcmlhbHM6IHsgW2tleTogc3RyaW5nXTogTWF0ZXJpYWwgfSwgdGV4dHVyZVRvRXhwb3J0czogeyBba2V5OiBzdHJpbmddOiBCYXNlVGV4dHVyZSB9LCBvcHRpb25zOiBJVVNEWkV4cG9ydE9wdGlvbnMpIHtcclxuICAgIGNvbnN0IGFycmF5ID0gW107XHJcblxyXG4gICAgZm9yIChjb25zdCB1dWlkIGluIG1hdGVyaWFscykge1xyXG4gICAgICAgIGNvbnN0IG1hdGVyaWFsID0gbWF0ZXJpYWxzW3V1aWRdO1xyXG5cclxuICAgICAgICBhcnJheS5wdXNoKEJ1aWxkTWF0ZXJpYWwobWF0ZXJpYWwsIHRleHR1cmVUb0V4cG9ydHMsIG9wdGlvbnMpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYFxyXG4gICAgZGVmIFwiTWF0ZXJpYWxzXCJcclxue1xyXG4ke2FycmF5LmpvaW4oXCJcIil9XHJcbn1cclxuXHJcbmA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEJ1aWxkV3JhcHBpbmcod3JhcHBpbmc6IG51bWJlcikge1xyXG4gICAgc3dpdGNoICh3cmFwcGluZykge1xyXG4gICAgICAgIGNhc2UgQ29uc3RhbnRzLlRFWFRVUkVfQ0xBTVBfQUREUkVTU01PREU6XHJcbiAgICAgICAgICAgIHJldHVybiBcImNsYW1wXCI7XHJcbiAgICAgICAgY2FzZSBDb25zdGFudHMuVEVYVFVSRV9NSVJST1JfQUREUkVTU01PREU6XHJcbiAgICAgICAgICAgIHJldHVybiBcIm1pcnJvclwiO1xyXG4gICAgICAgIGNhc2UgQ29uc3RhbnRzLlRFWFRVUkVfV1JBUF9BRERSRVNTTU9ERTpcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gXCJyZXBlYXRcIjtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gQnVpbGRDb2xvcjQoY29sb3I6IENvbG9yMykge1xyXG4gICAgcmV0dXJuIGAoJHtjb2xvci5yfSwgJHtjb2xvci5nfSwgJHtjb2xvci5ifSwgMS4wKWA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEJ1aWxkVmVjdG9yMih2ZWN0b3I6IFZlY3RvcjIpIHtcclxuICAgIHJldHVybiBgKCR7dmVjdG9yLnh9LCAke3ZlY3Rvci55fSlgO1xyXG59XHJcblxyXG5mdW5jdGlvbiBCdWlsZENvbG9yKGNvbG9yOiBDb2xvcjMpIHtcclxuICAgIHJldHVybiBgKCR7Y29sb3Iucn0sICR7Y29sb3IuZ30sICR7Y29sb3IuYn0pYDtcclxufVxyXG5cclxuZnVuY3Rpb24gQnVpbGRUZXh0dXJlKFxyXG4gICAgdGV4dHVyZTogVGV4dHVyZSxcclxuICAgIG1hdGVyaWFsOiBNYXRlcmlhbCxcclxuICAgIG1hcFR5cGU6IHN0cmluZyxcclxuICAgIGNvbG9yOiBOdWxsYWJsZTxDb2xvcjM+LFxyXG4gICAgdGV4dHVyZVRvRXhwb3J0czogeyBba2V5OiBzdHJpbmddOiBCYXNlVGV4dHVyZSB9LFxyXG4gICAgb3B0aW9uczogSVVTRFpFeHBvcnRPcHRpb25zXHJcbikge1xyXG4gICAgY29uc3QgaWQgPSB0ZXh0dXJlLmdldEludGVybmFsVGV4dHVyZSgpIS51bmlxdWVJZCArIFwiX1wiICsgdGV4dHVyZS5pbnZlcnRZO1xyXG5cclxuICAgIHRleHR1cmVUb0V4cG9ydHNbaWRdID0gdGV4dHVyZTtcclxuXHJcbiAgICBjb25zdCB1diA9IHRleHR1cmUuY29vcmRpbmF0ZXNJbmRleCA+IDAgPyBcInN0XCIgKyB0ZXh0dXJlLmNvb3JkaW5hdGVzSW5kZXggOiBcInN0XCI7XHJcbiAgICBjb25zdCByZXBlYXQgPSBuZXcgVmVjdG9yMih0ZXh0dXJlLnVTY2FsZSwgdGV4dHVyZS52U2NhbGUpO1xyXG4gICAgY29uc3Qgb2Zmc2V0ID0gbmV3IFZlY3RvcjIodGV4dHVyZS51T2Zmc2V0LCB0ZXh0dXJlLnZPZmZzZXQpO1xyXG4gICAgY29uc3Qgcm90YXRpb24gPSB0ZXh0dXJlLndBbmc7XHJcblxyXG4gICAgLy8gcm90YXRpb24gaXMgYXJvdW5kIHRoZSB3cm9uZyBwb2ludC4gYWZ0ZXIgcm90YXRpb24gd2UgbmVlZCB0byBzaGlmdCBvZmZzZXQgYWdhaW4gc28gdGhhdCB3ZSdyZSByb3RhdGluZyBhcm91bmQgdGhlIHJpZ2h0IHNwb3RcclxuICAgIGNvbnN0IHhSb3RhdGlvbk9mZnNldCA9IE1hdGguc2luKHJvdGF0aW9uKTtcclxuICAgIGNvbnN0IHlSb3RhdGlvbk9mZnNldCA9IE1hdGguY29zKHJvdGF0aW9uKTtcclxuXHJcbiAgICAvLyB0ZXh0dXJlIGNvb3JkaW5hdGVzIHN0YXJ0IGluIHRoZSBvcHBvc2l0ZSBjb3JuZXIsIG5lZWQgdG8gY29ycmVjdFxyXG4gICAgb2Zmc2V0LnkgPSAxIC0gb2Zmc2V0LnkgLSByZXBlYXQueTtcclxuXHJcbiAgICBvZmZzZXQueCArPSB4Um90YXRpb25PZmZzZXQgKiByZXBlYXQueDtcclxuICAgIG9mZnNldC55ICs9ICgxIC0geVJvdGF0aW9uT2Zmc2V0KSAqIHJlcGVhdC55O1xyXG5cclxuICAgIHJldHVybiBgXHJcbiAgICBkZWYgU2hhZGVyIFwiUHJpbXZhclJlYWRlcl8ke21hcFR5cGV9XCJcclxuICAgIHtcclxuICAgICAgICB1bmlmb3JtIHRva2VuIGluZm86aWQgPSBcIlVzZFByaW12YXJSZWFkZXJfZmxvYXQyXCJcclxuICAgICAgICBmbG9hdDIgaW5wdXRzOmZhbGxiYWNrID0gKDAuMCwgMC4wKVxyXG4gICAgICAgIHRva2VuIGlucHV0czp2YXJuYW1lID0gXCIke3V2fVwiXHJcbiAgICAgICAgZmxvYXQyIG91dHB1dHM6cmVzdWx0XHJcbiAgICB9XHJcblxyXG4gICAgZGVmIFNoYWRlciBcIlRyYW5zZm9ybTJkXyR7bWFwVHlwZX1cIlxyXG4gICAge1xyXG4gICAgICAgIHVuaWZvcm0gdG9rZW4gaW5mbzppZCA9IFwiVXNkVHJhbnNmb3JtMmRcIlxyXG4gICAgICAgIHRva2VuIGlucHV0czppbi5jb25uZWN0ID0gPC9NYXRlcmlhbHMvTWF0ZXJpYWxfJHttYXRlcmlhbC51bmlxdWVJZH0vUHJpbXZhclJlYWRlcl8ke21hcFR5cGV9Lm91dHB1dHM6cmVzdWx0PlxyXG4gICAgICAgIGZsb2F0IGlucHV0czpyb3RhdGlvbiA9ICR7KHJvdGF0aW9uICogKDE4MCAvIE1hdGguUEkpKS50b0ZpeGVkKG9wdGlvbnMucHJlY2lzaW9uKX1cclxuICAgICAgICBmbG9hdDIgaW5wdXRzOnNjYWxlID0gJHtCdWlsZFZlY3RvcjIocmVwZWF0KX1cclxuICAgICAgICBmbG9hdDIgaW5wdXRzOnRyYW5zbGF0aW9uID0gJHtCdWlsZFZlY3RvcjIob2Zmc2V0KX1cclxuICAgICAgICBmbG9hdDIgb3V0cHV0czpyZXN1bHRcclxuICAgIH1cclxuXHJcbiAgICBkZWYgU2hhZGVyIFwiVGV4dHVyZV8ke3RleHR1cmUudW5pcXVlSWR9XyR7bWFwVHlwZX1cIlxyXG4gICAge1xyXG4gICAgICAgIHVuaWZvcm0gdG9rZW4gaW5mbzppZCA9IFwiVXNkVVZUZXh0dXJlXCJcclxuICAgICAgICBhc3NldCBpbnB1dHM6ZmlsZSA9IEB0ZXh0dXJlcy9UZXh0dXJlXyR7aWR9LnBuZ0BcclxuICAgICAgICBmbG9hdDIgaW5wdXRzOnN0LmNvbm5lY3QgPSA8L01hdGVyaWFscy9NYXRlcmlhbF8ke21hdGVyaWFsLnVuaXF1ZUlkfS9UcmFuc2Zvcm0yZF8ke21hcFR5cGV9Lm91dHB1dHM6cmVzdWx0PlxyXG4gICAgICAgICR7Y29sb3IgPyBcImZsb2F0NCBpbnB1dHM6c2NhbGUgPSBcIiArIEJ1aWxkQ29sb3I0KGNvbG9yKSA6IFwiXCJ9XHJcbiAgICAgICAgdG9rZW4gaW5wdXRzOnNvdXJjZUNvbG9yU3BhY2UgPSBcIiR7dGV4dHVyZS5nYW1tYVNwYWNlID8gXCJyYXdcIiA6IFwic1JHQlwifVwiXHJcbiAgICAgICAgdG9rZW4gaW5wdXRzOndyYXBTID0gXCIke0J1aWxkV3JhcHBpbmcodGV4dHVyZS53cmFwVSl9XCJcclxuICAgICAgICB0b2tlbiBpbnB1dHM6d3JhcFQgPSBcIiR7QnVpbGRXcmFwcGluZyh0ZXh0dXJlLndyYXBWKX1cIlxyXG4gICAgICAgIGZsb2F0IG91dHB1dHM6clxyXG4gICAgICAgIGZsb2F0IG91dHB1dHM6Z1xyXG4gICAgICAgIGZsb2F0IG91dHB1dHM6YlxyXG4gICAgICAgIGZsb2F0MyBvdXRwdXRzOnJnYlxyXG4gICAgICAgICR7bWF0ZXJpYWwubmVlZEFscGhhQmxlbmRpbmcoKSA/IFwiZmxvYXQgb3V0cHV0czphXCIgOiBcIlwifVxyXG4gICAgfWA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEV4dHJhY3RUZXh0dXJlSW5mb3JtYXRpb25zKG1hdGVyaWFsOiBNYXRlcmlhbCkge1xyXG4gICAgY29uc3QgY2xhc3NOYW1lID0gbWF0ZXJpYWwuZ2V0Q2xhc3NOYW1lKCk7XHJcblxyXG4gICAgc3dpdGNoIChjbGFzc05hbWUpIHtcclxuICAgICAgICBjYXNlIFwiU3RhbmRhcmRNYXRlcmlhbFwiOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgZGlmZnVzZU1hcDogKG1hdGVyaWFsIGFzIFN0YW5kYXJkTWF0ZXJpYWwpLmRpZmZ1c2VUZXh0dXJlLFxyXG4gICAgICAgICAgICAgICAgZGlmZnVzZTogKG1hdGVyaWFsIGFzIFN0YW5kYXJkTWF0ZXJpYWwpLmRpZmZ1c2VDb2xvcixcclxuICAgICAgICAgICAgICAgIGFscGhhQ3V0T2ZmOiAobWF0ZXJpYWwgYXMgU3RhbmRhcmRNYXRlcmlhbCkuYWxwaGFDdXRPZmYsXHJcbiAgICAgICAgICAgICAgICBlbWlzc2l2ZU1hcDogKG1hdGVyaWFsIGFzIFN0YW5kYXJkTWF0ZXJpYWwpLmVtaXNzaXZlVGV4dHVyZSxcclxuICAgICAgICAgICAgICAgIGVtaXNzaXZlOiAobWF0ZXJpYWwgYXMgU3RhbmRhcmRNYXRlcmlhbCkuZW1pc3NpdmVDb2xvcixcclxuICAgICAgICAgICAgICAgIHJvdWdobmVzc01hcDogbnVsbCxcclxuICAgICAgICAgICAgICAgIG5vcm1hbE1hcDogbnVsbCxcclxuICAgICAgICAgICAgICAgIG1ldGFsbmVzc01hcDogbnVsbCxcclxuICAgICAgICAgICAgICAgIHJvdWdobmVzczogMSxcclxuICAgICAgICAgICAgICAgIG1ldGFsbmVzczogMCxcclxuICAgICAgICAgICAgICAgIGFvTWFwOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgYW9NYXBJbnRlbnNpdHk6IDAsXHJcbiAgICAgICAgICAgICAgICBhbHBoYU1hcDogKG1hdGVyaWFsIGFzIFN0YW5kYXJkTWF0ZXJpYWwpLm9wYWNpdHlUZXh0dXJlLFxyXG4gICAgICAgICAgICAgICAgaW9yOiAxLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgXCJQQlJNYXRlcmlhbFwiOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgZGlmZnVzZU1hcDogKG1hdGVyaWFsIGFzIFBCUk1hdGVyaWFsKS5hbGJlZG9UZXh0dXJlLFxyXG4gICAgICAgICAgICAgICAgZGlmZnVzZTogKG1hdGVyaWFsIGFzIFBCUk1hdGVyaWFsKS5hbGJlZG9Db2xvcixcclxuICAgICAgICAgICAgICAgIGFscGhhQ3V0T2ZmOiAobWF0ZXJpYWwgYXMgUEJSTWF0ZXJpYWwpLmFscGhhQ3V0T2ZmLFxyXG4gICAgICAgICAgICAgICAgZW1pc3NpdmVNYXA6IChtYXRlcmlhbCBhcyBQQlJNYXRlcmlhbCkuZW1pc3NpdmVUZXh0dXJlLFxyXG4gICAgICAgICAgICAgICAgZW1pc3NpdmU6IChtYXRlcmlhbCBhcyBQQlJNYXRlcmlhbCkuZW1pc3NpdmVDb2xvcixcclxuICAgICAgICAgICAgICAgIG5vcm1hbE1hcDogKG1hdGVyaWFsIGFzIFBCUk1hdGVyaWFsKS5idW1wVGV4dHVyZSxcclxuICAgICAgICAgICAgICAgIHJvdWdobmVzc01hcDogKG1hdGVyaWFsIGFzIFBCUk1hdGVyaWFsKS5tZXRhbGxpY1RleHR1cmUsXHJcbiAgICAgICAgICAgICAgICByb3VnaG5lc3NDaGFubmVsOiAobWF0ZXJpYWwgYXMgUEJSTWF0ZXJpYWwpLnVzZVJvdWdobmVzc0Zyb21NZXRhbGxpY1RleHR1cmVBbHBoYSA/IFwiYVwiIDogXCJnXCIsXHJcbiAgICAgICAgICAgICAgICByb3VnaG5lc3M6IChtYXRlcmlhbCBhcyBQQlJNYXRlcmlhbCkucm91Z2huZXNzIHx8IDEsXHJcbiAgICAgICAgICAgICAgICBtZXRhbG5lc3NNYXA6IChtYXRlcmlhbCBhcyBQQlJNYXRlcmlhbCkubWV0YWxsaWNUZXh0dXJlLFxyXG4gICAgICAgICAgICAgICAgbWV0YWxuZXNzQ2hhbm5lbDogKG1hdGVyaWFsIGFzIFBCUk1hdGVyaWFsKS51c2VNZXRhbGxuZXNzRnJvbU1ldGFsbGljVGV4dHVyZUJsdWUgPyBcImJcIiA6IFwiclwiLFxyXG4gICAgICAgICAgICAgICAgbWV0YWxuZXNzOiAobWF0ZXJpYWwgYXMgUEJSTWF0ZXJpYWwpLm1ldGFsbGljIHx8IDAsXHJcbiAgICAgICAgICAgICAgICBhb01hcDogKG1hdGVyaWFsIGFzIFBCUk1hdGVyaWFsKS5hbWJpZW50VGV4dHVyZSxcclxuICAgICAgICAgICAgICAgIGFvTWFwQ2hhbm5lbDogKG1hdGVyaWFsIGFzIFBCUk1hdGVyaWFsKS51c2VBbWJpZW50SW5HcmF5U2NhbGUgPyBcInJcIiA6IFwicmdiXCIsXHJcbiAgICAgICAgICAgICAgICBhb01hcEludGVuc2l0eTogKG1hdGVyaWFsIGFzIFBCUk1hdGVyaWFsKS5hbWJpZW50VGV4dHVyZVN0cmVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgYWxwaGFNYXA6IChtYXRlcmlhbCBhcyBQQlJNYXRlcmlhbCkub3BhY2l0eVRleHR1cmUsXHJcbiAgICAgICAgICAgICAgICBpb3I6IChtYXRlcmlhbCBhcyBQQlJNYXRlcmlhbCkuaW5kZXhPZlJlZnJhY3Rpb24sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBcIlBCUk1ldGFsbGljUm91Z2huZXNzTWF0ZXJpYWxcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGRpZmZ1c2VNYXA6IChtYXRlcmlhbCBhcyBQQlJNZXRhbGxpY1JvdWdobmVzc01hdGVyaWFsKS5iYXNlVGV4dHVyZSxcclxuICAgICAgICAgICAgICAgIGRpZmZ1c2U6IChtYXRlcmlhbCBhcyBQQlJNZXRhbGxpY1JvdWdobmVzc01hdGVyaWFsKS5iYXNlQ29sb3IsXHJcbiAgICAgICAgICAgICAgICBhbHBoYUN1dE9mZjogKG1hdGVyaWFsIGFzIFBCUk1ldGFsbGljUm91Z2huZXNzTWF0ZXJpYWwpLmFscGhhQ3V0T2ZmLFxyXG4gICAgICAgICAgICAgICAgZW1pc3NpdmVNYXA6IChtYXRlcmlhbCBhcyBQQlJNZXRhbGxpY1JvdWdobmVzc01hdGVyaWFsKS5lbWlzc2l2ZVRleHR1cmUsXHJcbiAgICAgICAgICAgICAgICBlbWlzc2l2ZTogKG1hdGVyaWFsIGFzIFBCUk1ldGFsbGljUm91Z2huZXNzTWF0ZXJpYWwpLmVtaXNzaXZlQ29sb3IsXHJcbiAgICAgICAgICAgICAgICBub3JtYWxNYXA6IChtYXRlcmlhbCBhcyBQQlJNZXRhbGxpY1JvdWdobmVzc01hdGVyaWFsKS5ub3JtYWxUZXh0dXJlLFxyXG4gICAgICAgICAgICAgICAgcm91Z2huZXNzTWFwOiAobWF0ZXJpYWwgYXMgUEJSTWF0ZXJpYWwpLm1ldGFsbGljVGV4dHVyZSxcclxuICAgICAgICAgICAgICAgIHJvdWdobmVzc0NoYW5uZWw6IChtYXRlcmlhbCBhcyBQQlJNYXRlcmlhbCkudXNlUm91Z2huZXNzRnJvbU1ldGFsbGljVGV4dHVyZUFscGhhID8gXCJhXCIgOiBcImdcIixcclxuICAgICAgICAgICAgICAgIHJvdWdobmVzczogKG1hdGVyaWFsIGFzIFBCUk1ldGFsbGljUm91Z2huZXNzTWF0ZXJpYWwpLnJvdWdobmVzcyB8fCAxLFxyXG4gICAgICAgICAgICAgICAgbWV0YWxuZXNzTWFwOiAobWF0ZXJpYWwgYXMgUEJSTWF0ZXJpYWwpLm1ldGFsbGljVGV4dHVyZSxcclxuICAgICAgICAgICAgICAgIG1ldGFsbmVzc0NoYW5uZWw6IChtYXRlcmlhbCBhcyBQQlJNYXRlcmlhbCkudXNlTWV0YWxsbmVzc0Zyb21NZXRhbGxpY1RleHR1cmVCbHVlID8gXCJiXCIgOiBcInJcIixcclxuICAgICAgICAgICAgICAgIG1ldGFsbmVzczogKG1hdGVyaWFsIGFzIFBCUk1ldGFsbGljUm91Z2huZXNzTWF0ZXJpYWwpLm1ldGFsbGljIHx8IDAsXHJcbiAgICAgICAgICAgICAgICBhb01hcDogKG1hdGVyaWFsIGFzIFBCUk1hdGVyaWFsKS5hbWJpZW50VGV4dHVyZSxcclxuICAgICAgICAgICAgICAgIGFvTWFwQ2hhbm5lbDogKG1hdGVyaWFsIGFzIFBCUk1hdGVyaWFsKS51c2VBbWJpZW50SW5HcmF5U2NhbGUgPyBcInJcIiA6IFwicmdiXCIsXHJcbiAgICAgICAgICAgICAgICBhb01hcEludGVuc2l0eTogKG1hdGVyaWFsIGFzIFBCUk1hdGVyaWFsKS5hbWJpZW50VGV4dHVyZVN0cmVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgYWxwaGFNYXA6IChtYXRlcmlhbCBhcyBQQlJNYXRlcmlhbCkub3BhY2l0eVRleHR1cmUsXHJcbiAgICAgICAgICAgICAgICBpb3I6IChtYXRlcmlhbCBhcyBQQlJNYXRlcmlhbCkuaW5kZXhPZlJlZnJhY3Rpb24sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGRpZmZ1c2VNYXA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBkaWZmdXNlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgZW1pc3NpdmVNYXA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBlbWlzc2VtaXNzaXZlaXZlQ29sb3I6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBub3JtYWxNYXA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICByb3VnaG5lc3NNYXA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBtZXRhbG5lc3NNYXA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBhbHBoYUN1dE9mZjogMCxcclxuICAgICAgICAgICAgICAgIHJvdWdobmVzczogMCxcclxuICAgICAgICAgICAgICAgIG1ldGFsbmVzczogMCxcclxuICAgICAgICAgICAgICAgIGFvTWFwOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgYW9NYXBJbnRlbnNpdHk6IDAsXHJcbiAgICAgICAgICAgICAgICBhbHBoYU1hcDogbnVsbCxcclxuICAgICAgICAgICAgICAgIGlvcjogMSxcclxuICAgICAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gQnVpbGRNYXRlcmlhbChtYXRlcmlhbDogTWF0ZXJpYWwsIHRleHR1cmVUb0V4cG9ydHM6IHsgW2tleTogc3RyaW5nXTogQmFzZVRleHR1cmUgfSwgb3B0aW9uczogSVVTRFpFeHBvcnRPcHRpb25zKSB7XHJcbiAgICAvLyBodHRwczovL2dyYXBoaWNzLnBpeGFyLmNvbS91c2QvZG9jcy9Vc2RQcmV2aWV3U3VyZmFjZS1Qcm9wb3NhbC5odG1sXHJcblxyXG4gICAgY29uc3QgcGFkID0gXCJcdFx0XHRcIjtcclxuICAgIGNvbnN0IGlucHV0cyA9IFtdO1xyXG4gICAgY29uc3Qgc2FtcGxlcnMgPSBbXTtcclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgZGlmZnVzZU1hcCxcclxuICAgICAgICBkaWZmdXNlLFxyXG4gICAgICAgIGFscGhhQ3V0T2ZmLFxyXG4gICAgICAgIGVtaXNzaXZlTWFwLFxyXG4gICAgICAgIGVtaXNzaXZlLFxyXG4gICAgICAgIG5vcm1hbE1hcCxcclxuICAgICAgICByb3VnaG5lc3NNYXAsXHJcbiAgICAgICAgcm91Z2huZXNzQ2hhbm5lbCxcclxuICAgICAgICByb3VnaG5lc3MsXHJcbiAgICAgICAgbWV0YWxuZXNzTWFwLFxyXG4gICAgICAgIG1ldGFsbmVzc0NoYW5uZWwsXHJcbiAgICAgICAgbWV0YWxuZXNzLFxyXG4gICAgICAgIGFvTWFwLFxyXG4gICAgICAgIGFvTWFwQ2hhbm5lbCxcclxuICAgICAgICBhb01hcEludGVuc2l0eSxcclxuICAgICAgICBhbHBoYU1hcCxcclxuICAgICAgICBpb3IsXHJcbiAgICB9ID0gRXh0cmFjdFRleHR1cmVJbmZvcm1hdGlvbnMobWF0ZXJpYWwpO1xyXG5cclxuICAgIGlmIChkaWZmdXNlTWFwICE9PSBudWxsKSB7XHJcbiAgICAgICAgaW5wdXRzLnB1c2goYCR7cGFkfWNvbG9yM2YgaW5wdXRzOmRpZmZ1c2VDb2xvci5jb25uZWN0ID0gPC9NYXRlcmlhbHMvTWF0ZXJpYWxfJHttYXRlcmlhbC51bmlxdWVJZH0vVGV4dHVyZV8ke2RpZmZ1c2VNYXAudW5pcXVlSWR9X2RpZmZ1c2Uub3V0cHV0czpyZ2I+YCk7XHJcblxyXG4gICAgICAgIGlmIChtYXRlcmlhbC5uZWVkQWxwaGFCbGVuZGluZygpKSB7XHJcbiAgICAgICAgICAgIGlucHV0cy5wdXNoKGAke3BhZH1mbG9hdCBpbnB1dHM6b3BhY2l0eS5jb25uZWN0ID0gPC9NYXRlcmlhbHMvTWF0ZXJpYWxfJHttYXRlcmlhbC51bmlxdWVJZH0vVGV4dHVyZV8ke2RpZmZ1c2VNYXAudW5pcXVlSWR9X2RpZmZ1c2Uub3V0cHV0czphPmApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobWF0ZXJpYWwubmVlZEFscGhhVGVzdGluZygpKSB7XHJcbiAgICAgICAgICAgIGlucHV0cy5wdXNoKGAke3BhZH1mbG9hdCBpbnB1dHM6b3BhY2l0eS5jb25uZWN0ID0gPC9NYXRlcmlhbHMvTWF0ZXJpYWxfJHttYXRlcmlhbC51bmlxdWVJZH0vVGV4dHVyZV8ke2RpZmZ1c2VNYXAudW5pcXVlSWR9X2RpZmZ1c2Uub3V0cHV0czphPmApO1xyXG4gICAgICAgICAgICBpbnB1dHMucHVzaChgJHtwYWR9ZmxvYXQgaW5wdXRzOm9wYWNpdHlUaHJlc2hvbGQgPSAke2FscGhhQ3V0T2ZmfWApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2FtcGxlcnMucHVzaChCdWlsZFRleHR1cmUoZGlmZnVzZU1hcCBhcyBUZXh0dXJlLCBtYXRlcmlhbCwgXCJkaWZmdXNlXCIsIGRpZmZ1c2UsIHRleHR1cmVUb0V4cG9ydHMsIG9wdGlvbnMpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaW5wdXRzLnB1c2goYCR7cGFkfWNvbG9yM2YgaW5wdXRzOmRpZmZ1c2VDb2xvciA9ICR7QnVpbGRDb2xvcihkaWZmdXNlIHx8IENvbG9yMy5XaGl0ZSgpKX1gKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZW1pc3NpdmVNYXAgIT09IG51bGwpIHtcclxuICAgICAgICBpbnB1dHMucHVzaChgJHtwYWR9Y29sb3IzZiBpbnB1dHM6ZW1pc3NpdmVDb2xvci5jb25uZWN0ID0gPC9NYXRlcmlhbHMvTWF0ZXJpYWxfJHttYXRlcmlhbC51bmlxdWVJZH0vVGV4dHVyZV8ke2VtaXNzaXZlTWFwLnVuaXF1ZUlkfV9lbWlzc2l2ZS5vdXRwdXRzOnJnYj5gKTtcclxuXHJcbiAgICAgICAgc2FtcGxlcnMucHVzaChCdWlsZFRleHR1cmUoZW1pc3NpdmVNYXAgYXMgVGV4dHVyZSwgbWF0ZXJpYWwsIFwiZW1pc3NpdmVcIiwgZW1pc3NpdmUsIHRleHR1cmVUb0V4cG9ydHMsIG9wdGlvbnMpKTtcclxuICAgIH0gZWxzZSBpZiAoZW1pc3NpdmUgJiYgZW1pc3NpdmUudG9MdW1pbmFuY2UoKSA+IDApIHtcclxuICAgICAgICBpbnB1dHMucHVzaChgJHtwYWR9Y29sb3IzZiBpbnB1dHM6ZW1pc3NpdmVDb2xvciA9ICR7QnVpbGRDb2xvcihlbWlzc2l2ZSl9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG5vcm1hbE1hcCAhPT0gbnVsbCkge1xyXG4gICAgICAgIGlucHV0cy5wdXNoKGAke3BhZH1ub3JtYWwzZiBpbnB1dHM6bm9ybWFsLmNvbm5lY3QgPSA8L01hdGVyaWFscy9NYXRlcmlhbF8ke21hdGVyaWFsLnVuaXF1ZUlkfS9UZXh0dXJlXyR7bm9ybWFsTWFwLnVuaXF1ZUlkfV9ub3JtYWwub3V0cHV0czpyZ2I+YCk7XHJcblxyXG4gICAgICAgIHNhbXBsZXJzLnB1c2goQnVpbGRUZXh0dXJlKG5vcm1hbE1hcCBhcyBUZXh0dXJlLCBtYXRlcmlhbCwgXCJub3JtYWxcIiwgbnVsbCwgdGV4dHVyZVRvRXhwb3J0cywgb3B0aW9ucykpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChhb01hcCAhPT0gbnVsbCkge1xyXG4gICAgICAgIGlucHV0cy5wdXNoKGAke3BhZH1mbG9hdCBpbnB1dHM6b2NjbHVzaW9uLmNvbm5lY3QgPSA8L01hdGVyaWFscy9NYXRlcmlhbF8ke21hdGVyaWFsLnVuaXF1ZUlkfS9UZXh0dXJlXyR7YW9NYXAudW5pcXVlSWR9X29jY2x1c2lvbi5vdXRwdXRzOiR7YW9NYXBDaGFubmVsfT5gKTtcclxuXHJcbiAgICAgICAgc2FtcGxlcnMucHVzaChCdWlsZFRleHR1cmUoYW9NYXAgYXMgVGV4dHVyZSwgbWF0ZXJpYWwsIFwib2NjbHVzaW9uXCIsIG5ldyBDb2xvcjMoYW9NYXBJbnRlbnNpdHksIGFvTWFwSW50ZW5zaXR5LCBhb01hcEludGVuc2l0eSksIHRleHR1cmVUb0V4cG9ydHMsIG9wdGlvbnMpKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocm91Z2huZXNzTWFwICE9PSBudWxsKSB7XHJcbiAgICAgICAgaW5wdXRzLnB1c2goYCR7cGFkfWZsb2F0IGlucHV0czpyb3VnaG5lc3MuY29ubmVjdCA9IDwvTWF0ZXJpYWxzL01hdGVyaWFsXyR7bWF0ZXJpYWwudW5pcXVlSWR9L1RleHR1cmVfJHtyb3VnaG5lc3NNYXAudW5pcXVlSWR9X3JvdWdobmVzcy5vdXRwdXRzOiR7cm91Z2huZXNzQ2hhbm5lbH0+YCk7XHJcblxyXG4gICAgICAgIHNhbXBsZXJzLnB1c2goQnVpbGRUZXh0dXJlKHJvdWdobmVzc01hcCBhcyBUZXh0dXJlLCBtYXRlcmlhbCwgXCJyb3VnaG5lc3NcIiwgbmV3IENvbG9yMyhyb3VnaG5lc3MsIHJvdWdobmVzcywgcm91Z2huZXNzKSwgdGV4dHVyZVRvRXhwb3J0cywgb3B0aW9ucykpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBpbnB1dHMucHVzaChgJHtwYWR9ZmxvYXQgaW5wdXRzOnJvdWdobmVzcyA9ICR7cm91Z2huZXNzfWApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChtZXRhbG5lc3NNYXAgIT09IG51bGwpIHtcclxuICAgICAgICBpbnB1dHMucHVzaChgJHtwYWR9ZmxvYXQgaW5wdXRzOm1ldGFsbGljLmNvbm5lY3QgPSA8L01hdGVyaWFscy9NYXRlcmlhbF8ke21hdGVyaWFsLnVuaXF1ZUlkfS9UZXh0dXJlXyR7bWV0YWxuZXNzTWFwLnVuaXF1ZUlkfV9tZXRhbGxpYy5vdXRwdXRzOiR7bWV0YWxuZXNzQ2hhbm5lbH0+YCk7XHJcblxyXG4gICAgICAgIHNhbXBsZXJzLnB1c2goQnVpbGRUZXh0dXJlKG1ldGFsbmVzc01hcCBhcyBUZXh0dXJlLCBtYXRlcmlhbCwgXCJtZXRhbGxpY1wiLCBuZXcgQ29sb3IzKG1ldGFsbmVzcywgbWV0YWxuZXNzLCBtZXRhbG5lc3MpLCB0ZXh0dXJlVG9FeHBvcnRzLCBvcHRpb25zKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlucHV0cy5wdXNoKGAke3BhZH1mbG9hdCBpbnB1dHM6bWV0YWxsaWMgPSAke21ldGFsbmVzc31gKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYWxwaGFNYXAgIT09IG51bGwpIHtcclxuICAgICAgICBpbnB1dHMucHVzaChgJHtwYWR9ZmxvYXQgaW5wdXRzOm9wYWNpdHkuY29ubmVjdCA9IDwvTWF0ZXJpYWxzL01hdGVyaWFsXyR7bWF0ZXJpYWwudW5pcXVlSWR9L1RleHR1cmVfJHthbHBoYU1hcC51bmlxdWVJZH1fb3BhY2l0eS5vdXRwdXRzOnI+YCk7XHJcbiAgICAgICAgaW5wdXRzLnB1c2goYCR7cGFkfWZsb2F0IGlucHV0czpvcGFjaXR5VGhyZXNob2xkID0gMC4wMDAxYCk7XHJcblxyXG4gICAgICAgIHNhbXBsZXJzLnB1c2goQnVpbGRUZXh0dXJlKGFscGhhTWFwIGFzIFRleHR1cmUsIG1hdGVyaWFsLCBcIm9wYWNpdHlcIiwgbnVsbCwgdGV4dHVyZVRvRXhwb3J0cywgb3B0aW9ucykpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBpbnB1dHMucHVzaChgJHtwYWR9ZmxvYXQgaW5wdXRzOm9wYWNpdHkgPSAke21hdGVyaWFsLmFscGhhfWApO1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0cy5wdXNoKGAke3BhZH1mbG9hdCBpbnB1dHM6aW9yID0gJHtpb3J9YCk7XHJcblxyXG4gICAgcmV0dXJuIGBcclxuXHRkZWYgTWF0ZXJpYWwgXCJNYXRlcmlhbF8ke21hdGVyaWFsLnVuaXF1ZUlkfVwiXHJcblx0e1xyXG5cdFx0ZGVmIFNoYWRlciBcIlByZXZpZXdTdXJmYWNlXCJcclxuXHRcdHtcclxuXHRcdFx0dW5pZm9ybSB0b2tlbiBpbmZvOmlkID0gXCJVc2RQcmV2aWV3U3VyZmFjZVwiXHJcbiR7aW5wdXRzLmpvaW4oXCJcXG5cIil9XHJcblx0XHRcdGludCBpbnB1dHM6dXNlU3BlY3VsYXJXb3JrZmxvdyA9IDBcclxuXHRcdFx0dG9rZW4gb3V0cHV0czpzdXJmYWNlXHJcblx0XHR9XHJcblxyXG5cdFx0dG9rZW4gb3V0cHV0czpzdXJmYWNlLmNvbm5lY3QgPSA8L01hdGVyaWFscy9NYXRlcmlhbF8ke21hdGVyaWFsLnVuaXF1ZUlkfS9QcmV2aWV3U3VyZmFjZS5vdXRwdXRzOnN1cmZhY2U+XHJcblxyXG4ke3NhbXBsZXJzLmpvaW4oXCJcXG5cIil9XHJcblxyXG5cdH1cclxuYDtcclxufVxyXG5cclxuZnVuY3Rpb24gQnVpbGRDYW1lcmEoY2FtZXJhOiBDYW1lcmEsIG9wdGlvbnM6IElVU0RaRXhwb3J0T3B0aW9ucykge1xyXG4gICAgY29uc3QgbmFtZSA9IFwiQ2FtZXJhX1wiICsgY2FtZXJhLnVuaXF1ZUlkO1xyXG4gICAgY29uc3QgbWF0cml4ID0gTWF0cml4LlJvdGF0aW9uWShNYXRoLlBJKS5tdWx0aXBseShjYW1lcmEuZ2V0V29ybGRNYXRyaXgoKSk7IC8vIHdvcmsgdG93YXJkcyBwb3NpdGl2ZSB6XHJcblxyXG4gICAgY29uc3QgdHJhbnNmb3JtID0gQnVpbGRNYXRyaXgobWF0cml4KTtcclxuXHJcbiAgICBpZiAoY2FtZXJhLm1vZGUgPT09IENvbnN0YW50cy5PUlRIT0dSQVBISUNfQ0FNRVJBKSB7XHJcbiAgICAgICAgcmV0dXJuIGBkZWYgQ2FtZXJhIFwiJHtuYW1lfVwiXHJcblx0XHR7XHJcblx0XHRcdG1hdHJpeDRkIHhmb3JtT3A6dHJhbnNmb3JtID0gJHt0cmFuc2Zvcm19XHJcblx0XHRcdHVuaWZvcm0gdG9rZW5bXSB4Zm9ybU9wT3JkZXIgPSBbXCJ4Zm9ybU9wOnRyYW5zZm9ybVwiXVxyXG5cclxuXHRcdFx0ZmxvYXQyIGNsaXBwaW5nUmFuZ2UgPSAoJHtjYW1lcmEubWluWi50b1ByZWNpc2lvbihvcHRpb25zLnByZWNpc2lvbil9LCAke2NhbWVyYS5tYXhaLnRvUHJlY2lzaW9uKG9wdGlvbnMucHJlY2lzaW9uKX0pXHJcblx0XHRcdGZsb2F0IGhvcml6b250YWxBcGVydHVyZSA9ICR7KChNYXRoLmFicyhjYW1lcmEub3J0aG9MZWZ0IHx8IDEpICsgTWF0aC5hYnMoY2FtZXJhLm9ydGhvUmlnaHQgfHwgMSkpICogMTApLnRvUHJlY2lzaW9uKG9wdGlvbnMucHJlY2lzaW9uKX1cclxuXHRcdFx0ZmxvYXQgdmVydGljYWxBcGVydHVyZSA9ICR7KChNYXRoLmFicyhjYW1lcmEub3J0aG9Ub3AgfHwgMSkgKyBNYXRoLmFicyhjYW1lcmEub3J0aG9Cb3R0b20gfHwgMSkpICogMTApLnRvUHJlY2lzaW9uKG9wdGlvbnMucHJlY2lzaW9uKX1cclxuXHRcdFx0dG9rZW4gcHJvamVjdGlvbiA9IFwib3J0aG9ncmFwaGljXCJcclxuXHRcdH1cclxuXHRcclxuXHRgO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBhc3BlY3QgPSBjYW1lcmEuZ2V0RW5naW5lKCkuZ2V0QXNwZWN0UmF0aW8oY2FtZXJhKTtcclxuICAgICAgICBjb25zdCBzZW5zb3J3aWR0aCA9IG9wdGlvbnMuY2FtZXJhU2Vuc29yV2lkdGggfHwgMzU7XHJcblxyXG4gICAgICAgIHJldHVybiBgZGVmIENhbWVyYSBcIiR7bmFtZX1cIlxyXG5cdFx0e1xyXG5cdFx0XHRtYXRyaXg0ZCB4Zm9ybU9wOnRyYW5zZm9ybSA9ICR7dHJhbnNmb3JtfVxyXG5cdFx0XHR1bmlmb3JtIHRva2VuW10geGZvcm1PcE9yZGVyID0gW1wieGZvcm1PcDp0cmFuc2Zvcm1cIl1cclxuXHJcblx0XHRcdGZsb2F0MiBjbGlwcGluZ1JhbmdlID0gKCR7Y2FtZXJhLm1pbloudG9QcmVjaXNpb24ob3B0aW9ucy5wcmVjaXNpb24pfSwgJHtjYW1lcmEubWF4Wi50b1ByZWNpc2lvbihvcHRpb25zLnByZWNpc2lvbil9KVxyXG5cdFx0XHRmbG9hdCBmb2NhbExlbmd0aCA9ICR7KHNlbnNvcndpZHRoIC8gKDIgKiBNYXRoLnRhbihjYW1lcmEuZm92ICogMC41KSkpLnRvUHJlY2lzaW9uKG9wdGlvbnMucHJlY2lzaW9uKX1cclxuICAgICAgICAgICAgdG9rZW4gcHJvamVjdGlvbiA9IFwicGVyc3BlY3RpdmVcIlxyXG5cdFx0XHRmbG9hdCBob3Jpem9udGFsQXBlcnR1cmUgPSAkeyhzZW5zb3J3aWR0aCAqIGFzcGVjdCkudG9QcmVjaXNpb24ob3B0aW9ucy5wcmVjaXNpb24pfVxyXG5cdFx0XHRmbG9hdCB2ZXJ0aWNhbEFwZXJ0dXJlID0gJHsoc2Vuc29yd2lkdGggLyBhc3BlY3QpLnRvUHJlY2lzaW9uKG9wdGlvbnMucHJlY2lzaW9uKX0gICAgICAgICAgICBcclxuXHRcdH1cclxuXHRcclxuXHRgO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIHNjZW5lIHNjZW5lIHRvIGV4cG9ydFxyXG4gKiBAcGFyYW0gb3B0aW9ucyBvcHRpb25zIHRvIGNvbmZpZ3VyZSB0aGUgZXhwb3J0XHJcbiAqIEBwYXJhbSBtZXNoUHJlZGljYXRlIHByZWRpY2F0ZSB0byBmaWx0ZXIgdGhlIG1lc2hlcyB0byBleHBvcnRcclxuICogQHJldHVybnMgYSB1aW50OCBhcnJheSBjb250YWluaW5nIHRoZSBVU0RaIGZpbGVcclxuICogQHNlZSBbU2ltcGxlIHNwaGVyZV0oaHR0cHM6Ly9wbGF5Z3JvdW5kLmJhYnlsb25qcy5jb20vI0gyRzVYVyM2KVxyXG4gKiBAc2VlIFtSZWQgc3BoZXJlXShodHRwczovL3BsYXlncm91bmQuYmFieWxvbmpzLmNvbS8jSDJHNVhXIzcpXHJcbiAqIEBzZWUgW0Jvb21ib3hdKGh0dHBzOi8vcGxheWdyb3VuZC5iYWJ5bG9uanMuY29tLyM1TjNSV0sjNSlcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBVU0RaRXhwb3J0QXN5bmMoc2NlbmU6IFNjZW5lLCBvcHRpb25zOiBQYXJ0aWFsPElVU0RaRXhwb3J0T3B0aW9ucz4sIG1lc2hQcmVkaWNhdGU/OiAobTogTWVzaCkgPT4gYm9vbGVhbik6IFByb21pc2U8VWludDhBcnJheT4ge1xyXG4gICAgY29uc3QgbG9jYWxPcHRpb25zID0ge1xyXG4gICAgICAgIGZmbGF0ZVVybDogXCJodHRwczovL3VucGtnLmNvbS9mZmxhdGVAMC44LjJcIixcclxuICAgICAgICBpbmNsdWRlQW5jaG9yaW5nUHJvcGVydGllczogdHJ1ZSxcclxuICAgICAgICBhbmNob3JpbmdUeXBlOiBcInBsYW5lXCIsXHJcbiAgICAgICAgcGxhbmVBbmNob3JpbmdBbGlnbm1lbnQ6IFwiaG9yaXpvbnRhbFwiLFxyXG4gICAgICAgIG1vZGVsRmlsZU5hbWU6IFwibW9kZWwudXNkYVwiLFxyXG4gICAgICAgIHByZWNpc2lvbjogNSxcclxuICAgICAgICBleHBvcnRDYW1lcmE6IGZhbHNlLFxyXG4gICAgICAgIGNhbWVyYVNlbnNvcldpZHRoOiAzNSxcclxuICAgICAgICAuLi5vcHRpb25zLFxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBHZXQgdGhlIGZmbGF0ZSBsaWJyYXJ5XHJcbiAgICBpZiAodHlwZW9mIGZmbGF0ZSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIGF3YWl0IFRvb2xzLkxvYWRTY3JpcHRBc3luYyhsb2NhbE9wdGlvbnMuZmZsYXRlVXJsKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTdGFydCB0aGUgZXhwb3J0XHJcbiAgICBjb25zdCBmaWxlczogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xyXG5cclxuICAgIC8vIG1vZGVsIGZpbGUgc2hvdWxkIGJlIGZpcnN0IGluIFVTRFogYXJjaGl2ZSBzbyB3ZSBpbml0IGl0IGhlcmVcclxuICAgIGZpbGVzW2xvY2FsT3B0aW9ucy5tb2RlbEZpbGVOYW1lXSA9IG51bGw7XHJcblxyXG4gICAgbGV0IG91dHB1dCA9IEJ1aWxkSGVhZGVyKCk7XHJcbiAgICBvdXRwdXQgKz0gQnVpbGRTY2VuZVN0YXJ0KGxvY2FsT3B0aW9ucyk7XHJcblxyXG4gICAgY29uc3QgbWF0ZXJpYWxUb0V4cG9ydHM6IHsgW2tleTogc3RyaW5nXTogTWF0ZXJpYWwgfSA9IHt9O1xyXG5cclxuICAgIC8vIE1lc2hlc1xyXG4gICAgZm9yIChjb25zdCBhYnN0cmFjdE1lc2ggb2Ygc2NlbmUubWVzaGVzKSB7XHJcbiAgICAgICAgaWYgKGFic3RyYWN0TWVzaC5nZXRUb3RhbFZlcnRpY2VzKCkgPT09IDApIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG1lc2ggPSBhYnN0cmFjdE1lc2ggYXMgTWVzaDtcclxuICAgICAgICBjb25zdCBnZW9tZXRyeSA9IG1lc2guZ2VvbWV0cnk7XHJcbiAgICAgICAgY29uc3QgbWF0ZXJpYWwgPSBtZXNoLm1hdGVyaWFsO1xyXG5cclxuICAgICAgICBpZiAoIW1hdGVyaWFsIHx8ICFnZW9tZXRyeSB8fCAobWVzaFByZWRpY2F0ZSAmJiAhbWVzaFByZWRpY2F0ZShtZXNoKSkpIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzdXBwb3J0ZWRNYXRlcmlhbHMgPSBbXCJTdGFuZGFyZE1hdGVyaWFsXCIsIFwiUEJSTWF0ZXJpYWxcIiwgXCJQQlJNZXRhbGxpY1JvdWdobmVzc01hdGVyaWFsXCJdO1xyXG5cclxuICAgICAgICBpZiAoc3VwcG9ydGVkTWF0ZXJpYWxzLmluZGV4T2YobWF0ZXJpYWwuZ2V0Q2xhc3NOYW1lKCkpICE9PSAtMSkge1xyXG4gICAgICAgICAgICBjb25zdCBnZW9tZXRyeUZpbGVOYW1lID0gXCJnZW9tZXRyaWVzL0dlb21ldHJ5X1wiICsgZ2VvbWV0cnkudW5pcXVlSWQgKyBcIi51c2RhXCI7XHJcblxyXG4gICAgICAgICAgICBpZiAoIShnZW9tZXRyeUZpbGVOYW1lIGluIGZpbGVzKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWVzaE9iamVjdCA9IEJ1aWxkTWVzaE9iamVjdChnZW9tZXRyeSwgbG9jYWxPcHRpb25zKTtcclxuICAgICAgICAgICAgICAgIGZpbGVzW2dlb21ldHJ5RmlsZU5hbWVdID0gQnVpbGRVU0RGaWxlQXNTdHJpbmcobWVzaE9iamVjdCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghKG1hdGVyaWFsLnVuaXF1ZUlkIGluIG1hdGVyaWFsVG9FeHBvcnRzKSkge1xyXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWxUb0V4cG9ydHNbbWF0ZXJpYWwudW5pcXVlSWRdID0gbWF0ZXJpYWw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG91dHB1dCArPSBCdWlsZFhmb3JtKG1lc2gpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIFRvb2xzLldhcm4oXCJVU0RaRXhwb3J0QXN5bmMgZG9lcyBub3Qgc3VwcG9ydCB0aGlzIG1hdGVyaWFsIHR5cGU6IFwiICsgbWF0ZXJpYWwuZ2V0Q2xhc3NOYW1lKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBDYW1lcmFcclxuICAgIGlmIChzY2VuZS5hY3RpdmVDYW1lcmEgJiYgbG9jYWxPcHRpb25zLmV4cG9ydENhbWVyYSkge1xyXG4gICAgICAgIG91dHB1dCArPSBCdWlsZENhbWVyYShzY2VuZS5hY3RpdmVDYW1lcmEsIGxvY2FsT3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2xvc2Ugc2NlbmVcclxuICAgIG91dHB1dCArPSBCdWlsZFNjZW5lRW5kKCk7XHJcblxyXG4gICAgLy8gTWF0ZXJpYWxzXHJcbiAgICBjb25zdCB0ZXh0dXJlVG9FeHBvcnRzOiB7IFtrZXk6IHN0cmluZ106IEJhc2VUZXh0dXJlIH0gPSB7fTtcclxuICAgIG91dHB1dCArPSBCdWlsZE1hdGVyaWFscyhtYXRlcmlhbFRvRXhwb3J0cywgdGV4dHVyZVRvRXhwb3J0cywgbG9jYWxPcHRpb25zKTtcclxuXHJcbiAgICAvLyBDb21wcmVzc1xyXG4gICAgZmlsZXNbbG9jYWxPcHRpb25zLm1vZGVsRmlsZU5hbWVdID0gZmZsYXRlLnN0clRvVTgob3V0cHV0KTtcclxuXHJcbiAgICAvLyBUZXh0dXJlc1xyXG4gICAgZm9yIChjb25zdCBpZCBpbiB0ZXh0dXJlVG9FeHBvcnRzKSB7XHJcbiAgICAgICAgY29uc3QgdGV4dHVyZSA9IHRleHR1cmVUb0V4cG9ydHNbaWRdO1xyXG5cclxuICAgICAgICBjb25zdCBzaXplID0gdGV4dHVyZS5nZXRTaXplKCk7XHJcbiAgICAgICAgY29uc3QgdGV4dHVyZURhdGEgPSBhd2FpdCB0ZXh0dXJlLnJlYWRQaXhlbHMoKTtcclxuXHJcbiAgICAgICAgaWYgKCF0ZXh0dXJlRGF0YSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUZXh0dXJlIGRhdGEgaXMgbm90IGF2YWlsYWJsZVwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGZpbGVDb250ZW50ID0gYXdhaXQgRHVtcFRvb2xzLkR1bXBEYXRhQXN5bmMoc2l6ZS53aWR0aCwgc2l6ZS5oZWlnaHQsIHRleHR1cmVEYXRhLCBcImltYWdlL3BuZ1wiLCB1bmRlZmluZWQsIGZhbHNlLCB0cnVlKTtcclxuXHJcbiAgICAgICAgZmlsZXNbYHRleHR1cmVzL1RleHR1cmVfJHtpZH0ucG5nYF0gPSBuZXcgVWludDhBcnJheShmaWxlQ29udGVudCBhcyBBcnJheUJ1ZmZlcikuc2xpY2UoKTsgLy8gVGhpcyBpcyB0byBhdm9pZCBnZXR0aW5nIGEgbGluayBhbmQgbm90IGEgY29weVxyXG4gICAgfVxyXG5cclxuICAgIC8vIDY0IGJ5dGUgYWxpZ25tZW50XHJcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vMTAxYXJyb3d6L2ZmbGF0ZS9pc3N1ZXMvMzkjaXNzdWVjb21tZW50LTc3NzI2MzEwOVxyXG5cclxuICAgIGxldCBvZmZzZXQgPSAwO1xyXG5cclxuICAgIGZvciAoY29uc3QgZmlsZW5hbWUgaW4gZmlsZXMpIHtcclxuICAgICAgICBjb25zdCBmaWxlID0gZmlsZXNbZmlsZW5hbWVdO1xyXG4gICAgICAgIGlmICghZmlsZSkge1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaGVhZGVyU2l6ZSA9IDM0ICsgZmlsZW5hbWUubGVuZ3RoO1xyXG5cclxuICAgICAgICBvZmZzZXQgKz0gaGVhZGVyU2l6ZTtcclxuXHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0TW9kNjQgPSBvZmZzZXQgJiA2MztcclxuXHJcbiAgICAgICAgaWYgKG9mZnNldE1vZDY0ICE9PSA0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhZExlbmd0aCA9IDY0IC0gb2Zmc2V0TW9kNjQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhZGRpbmcgPSBuZXcgVWludDhBcnJheShwYWRMZW5ndGgpO1xyXG5cclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG4gICAgICAgICAgICBmaWxlc1tmaWxlbmFtZV0gPSBbZmlsZSwgeyBleHRyYTogeyAxMjM0NTogcGFkZGluZyB9IH1dO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb2Zmc2V0ID0gZmlsZS5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZmbGF0ZS56aXBTeW5jKGZpbGVzLCB7IGxldmVsOiAwIH0pO1xyXG59XHJcbiIsImltcG9ydCB0eXBlIHsgSU5vZGUsIElFWFRNZXNoR3B1SW5zdGFuY2luZyB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgQWNjZXNzb3JUeXBlLCBBY2Nlc3NvckNvbXBvbmVudFR5cGUgfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB0eXBlIHsgSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyIH0gZnJvbSBcIi4uL2dsVEZFeHBvcnRlckV4dGVuc2lvblwiO1xyXG5pbXBvcnQgdHlwZSB7IEJ1ZmZlck1hbmFnZXIgfSBmcm9tIFwiLi4vYnVmZmVyTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBHTFRGRXhwb3J0ZXIgfSBmcm9tIFwiLi4vZ2xURkV4cG9ydGVyXCI7XHJcbmltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xyXG5pbXBvcnQgdHlwZSB7IE5vZGUgfSBmcm9tIFwiY29yZS9ub2RlXCI7XHJcbmltcG9ydCB7IE1lc2ggfSBmcm9tIFwiY29yZS9NZXNoZXMvbWVzaFwiO1xyXG5pbXBvcnQgXCJjb3JlL01lc2hlcy90aGluSW5zdGFuY2VNZXNoXCI7XHJcbmltcG9ydCB7IFRtcFZlY3RvcnMsIFF1YXRlcm5pb24sIFZlY3RvcjMgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLnZlY3RvclwiO1xyXG5pbXBvcnQgeyBDb252ZXJ0VG9SaWdodEhhbmRlZFBvc2l0aW9uLCBDb252ZXJ0VG9SaWdodEhhbmRlZFJvdGF0aW9uIH0gZnJvbSBcIi4uL2dsVEZVdGlsaXRpZXNcIjtcclxuXHJcbmNvbnN0IE5BTUUgPSBcIkVYVF9tZXNoX2dwdV9pbnN0YW5jaW5nXCI7XHJcblxyXG4vKipcclxuICogW1NwZWNpZmljYXRpb25dKGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9ibG9iL21haW4vZXh0ZW5zaW9ucy8yLjAvVmVuZG9yL0VYVF9tZXNoX2dwdV9pbnN0YW5jaW5nL1JFQURNRS5tZClcclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGNsYXNzIEVYVF9tZXNoX2dwdV9pbnN0YW5jaW5nIGltcGxlbWVudHMgSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyIHtcclxuICAgIC8qKiBOYW1lIG9mIHRoaXMgZXh0ZW5zaW9uICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZSA9IE5BTUU7XHJcblxyXG4gICAgLyoqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyBlbmFibGVkICovXHJcbiAgICBwdWJsaWMgZW5hYmxlZCA9IHRydWU7XHJcblxyXG4gICAgLyoqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyByZXF1aXJlZCAqL1xyXG4gICAgcHVibGljIHJlcXVpcmVkID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBfZXhwb3J0ZXI6IEdMVEZFeHBvcnRlcjtcclxuXHJcbiAgICBwcml2YXRlIF93YXNVc2VkID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZXhwb3J0ZXI6IEdMVEZFeHBvcnRlcikge1xyXG4gICAgICAgIHRoaXMuX2V4cG9ydGVyID0gZXhwb3J0ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7fVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBnZXQgd2FzVXNlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fd2FzVXNlZDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFmdGVyIG5vZGUgaXMgZXhwb3J0ZWRcclxuICAgICAqIEBwYXJhbSBjb250ZXh0IHRoZSBHTFRGIGNvbnRleHQgd2hlbiBsb2FkaW5nIHRoZSBhc3NldFxyXG4gICAgICogQHBhcmFtIG5vZGUgdGhlIG5vZGUgZXhwb3J0ZWRcclxuICAgICAqIEBwYXJhbSBiYWJ5bG9uTm9kZSB0aGUgY29ycmVzcG9uZGluZyBiYWJ5bG9uIG5vZGVcclxuICAgICAqIEBwYXJhbSBub2RlTWFwIG1hcCBmcm9tIGJhYnlsb24gbm9kZSBpZCB0byBub2RlIGluZGV4XHJcbiAgICAgKiBAcGFyYW0gY29udmVydFRvUmlnaHRIYW5kZWQgdHJ1ZSBpZiB3ZSBuZWVkIHRvIGNvbnZlcnQgZGF0YSBmcm9tIGxlZnQgaGFuZCB0byByaWdodCBoYW5kIHN5c3RlbS5cclxuICAgICAqIEBwYXJhbSBidWZmZXJNYW5hZ2VyIGJ1ZmZlciBtYW5hZ2VyXHJcbiAgICAgKiBAcmV0dXJucyBudWxsYWJsZSBwcm9taXNlLCByZXNvbHZlcyB3aXRoIHRoZSBub2RlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwb3N0RXhwb3J0Tm9kZUFzeW5jKFxyXG4gICAgICAgIGNvbnRleHQ6IHN0cmluZyxcclxuICAgICAgICBub2RlOiBOdWxsYWJsZTxJTm9kZT4sXHJcbiAgICAgICAgYmFieWxvbk5vZGU6IE5vZGUsXHJcbiAgICAgICAgbm9kZU1hcDogTWFwPE5vZGUsIG51bWJlcj4sXHJcbiAgICAgICAgY29udmVydFRvUmlnaHRIYW5kZWQ6IGJvb2xlYW4sXHJcbiAgICAgICAgYnVmZmVyTWFuYWdlcjogQnVmZmVyTWFuYWdlclxyXG4gICAgKTogUHJvbWlzZTxOdWxsYWJsZTxJTm9kZT4+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgaWYgKG5vZGUgJiYgYmFieWxvbk5vZGUgaW5zdGFuY2VvZiBNZXNoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYmFieWxvbk5vZGUuaGFzVGhpbkluc3RhbmNlcyAmJiB0aGlzLl9leHBvcnRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3dhc1VzZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBub1RyYW5zbGF0aW9uID0gVmVjdG9yMy5aZXJvKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm9Sb3RhdGlvbiA9IFF1YXRlcm5pb24uSWRlbnRpdHkoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBub1NjYWxlID0gVmVjdG9yMy5PbmUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcmV0cmlldmUgYWxsIHRoZSBpbnN0YW5jZSB3b3JsZCBtYXRyaXhcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRyaXggPSBiYWJ5bG9uTm9kZS50aGluSW5zdGFuY2VHZXRXb3JsZE1hdHJpY2VzKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGl3dCA9IFRtcFZlY3RvcnMuVmVjdG9yM1syXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpd3IgPSBUbXBWZWN0b3JzLlF1YXRlcm5pb25bMV07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXdzID0gVG1wVmVjdG9ycy5WZWN0b3IzWzNdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgaGFzQW55SW5zdGFuY2VXb3JsZFRyYW5zbGF0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGhhc0FueUluc3RhbmNlV29ybGRSb3RhdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBoYXNBbnlJbnN0YW5jZVdvcmxkU2NhbGUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcHJlcGFyZSB0ZW1wIGJ1ZmZlcnNcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0cmFuc2xhdGlvbkJ1ZmZlciA9IG5ldyBGbG9hdDMyQXJyYXkoYmFieWxvbk5vZGUudGhpbkluc3RhbmNlQ291bnQgKiAzKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByb3RhdGlvbkJ1ZmZlciA9IG5ldyBGbG9hdDMyQXJyYXkoYmFieWxvbk5vZGUudGhpbkluc3RhbmNlQ291bnQgKiA0KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzY2FsZUJ1ZmZlciA9IG5ldyBGbG9hdDMyQXJyYXkoYmFieWxvbk5vZGUudGhpbkluc3RhbmNlQ291bnQgKiAzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgbSBvZiBtYXRyaXgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbS5kZWNvbXBvc2UoaXdzLCBpd3IsIGl3dCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29udmVydFRvUmlnaHRIYW5kZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnZlcnRUb1JpZ2h0SGFuZGVkUG9zaXRpb24oaXd0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnZlcnRUb1JpZ2h0SGFuZGVkUm90YXRpb24oaXdyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZmlsbCB0aGUgdGVtcCBidWZmZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRpb25CdWZmZXIuc2V0KGl3dC5hc0FycmF5KCksIGkgKiAzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm90YXRpb25CdWZmZXIuc2V0KGl3ci5ub3JtYWxpemUoKS5hc0FycmF5KCksIGkgKiA0KTsgLy8gZW5zdXJlIHRoZSBxdWF0ZXJuaW9uIGlzIG5vcm1hbGl6ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGVCdWZmZXIuc2V0KGl3cy5hc0FycmF5KCksIGkgKiAzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgaXMgd2hlcmUgd2UgZGVjaWRlIGlmIHRoZXJlIGlzIGFueSB0cmFuc2Zvcm1hdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYXNBbnlJbnN0YW5jZVdvcmxkVHJhbnNsYXRpb24gPSBoYXNBbnlJbnN0YW5jZVdvcmxkVHJhbnNsYXRpb24gfHwgIWl3dC5lcXVhbHNXaXRoRXBzaWxvbihub1RyYW5zbGF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFzQW55SW5zdGFuY2VXb3JsZFJvdGF0aW9uID0gaGFzQW55SW5zdGFuY2VXb3JsZFJvdGF0aW9uIHx8ICFpd3IuZXF1YWxzV2l0aEVwc2lsb24obm9Sb3RhdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhc0FueUluc3RhbmNlV29ybGRTY2FsZSA9IGhhc0FueUluc3RhbmNlV29ybGRTY2FsZSB8fCAhaXdzLmVxdWFsc1dpdGhFcHNpbG9uKG5vU2NhbGUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXh0ZW5zaW9uOiBJRVhUTWVzaEdwdUluc3RhbmNpbmcgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGRvIHdlIG5lZWQgdG8gd3JpdGUgVFJBTlNMQVRJT04gP1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChoYXNBbnlJbnN0YW5jZVdvcmxkVHJhbnNsYXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXh0ZW5zaW9uLmF0dHJpYnV0ZXNbXCJUUkFOU0xBVElPTlwiXSA9IHRoaXMuX2J1aWxkQWNjZXNzb3IodHJhbnNsYXRpb25CdWZmZXIsIEFjY2Vzc29yVHlwZS5WRUMzLCBiYWJ5bG9uTm9kZS50aGluSW5zdGFuY2VDb3VudCwgYnVmZmVyTWFuYWdlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGRvIHdlIG5lZWQgdG8gd3JpdGUgUk9UQVRJT04gP1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChoYXNBbnlJbnN0YW5jZVdvcmxkUm90YXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2UgZGVjaWRlZCB0byBzdGF5IG9uIEZMT0FUIGZvciBub3cgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9CYWJ5bG9uSlMvQmFieWxvbi5qcy9wdWxsLzEyNDk1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4dGVuc2lvbi5hdHRyaWJ1dGVzW1wiUk9UQVRJT05cIl0gPSB0aGlzLl9idWlsZEFjY2Vzc29yKHJvdGF0aW9uQnVmZmVyLCBBY2Nlc3NvclR5cGUuVkVDNCwgYmFieWxvbk5vZGUudGhpbkluc3RhbmNlQ291bnQsIGJ1ZmZlck1hbmFnZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBkbyB3ZSBuZWVkIHRvIHdyaXRlIFNDQUxFID9cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaGFzQW55SW5zdGFuY2VXb3JsZFNjYWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4dGVuc2lvbi5hdHRyaWJ1dGVzW1wiU0NBTEVcIl0gPSB0aGlzLl9idWlsZEFjY2Vzc29yKHNjYWxlQnVmZmVyLCBBY2Nlc3NvclR5cGUuVkVDMywgYmFieWxvbk5vZGUudGhpbkluc3RhbmNlQ291bnQsIGJ1ZmZlck1hbmFnZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLyogZXNsaW50LWVuYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb24qL1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuZXh0ZW5zaW9ucyA9IG5vZGUuZXh0ZW5zaW9ucyB8fCB7fTtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLmV4dGVuc2lvbnNbTkFNRV0gPSBleHRlbnNpb247XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzb2x2ZShub2RlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9idWlsZEFjY2Vzc29yKGJ1ZmZlcjogRmxvYXQzMkFycmF5LCB0eXBlOiBBY2Nlc3NvclR5cGUsIGNvdW50OiBudW1iZXIsIGJ1ZmZlck1hbmFnZXI6IEJ1ZmZlck1hbmFnZXIpOiBudW1iZXIge1xyXG4gICAgICAgIC8vIGJ1aWxkIHRoZSBidWZmZXIgdmlld1xyXG4gICAgICAgIGNvbnN0IGJ2ID0gYnVmZmVyTWFuYWdlci5jcmVhdGVCdWZmZXJWaWV3KGJ1ZmZlcik7XHJcblxyXG4gICAgICAgIC8vIGZpbmFsbHkgYnVpbGQgdGhlIGFjY2Vzc29yXHJcbiAgICAgICAgY29uc3QgYWNjZXNzb3IgPSBidWZmZXJNYW5hZ2VyLmNyZWF0ZUFjY2Vzc29yKGJ2LCB0eXBlLCBBY2Nlc3NvckNvbXBvbmVudFR5cGUuRkxPQVQsIGNvdW50KTtcclxuICAgICAgICB0aGlzLl9leHBvcnRlci5fYWNjZXNzb3JzLnB1c2goYWNjZXNzb3IpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9leHBvcnRlci5fYWNjZXNzb3JzLmxlbmd0aCAtIDE7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcclxuR0xURkV4cG9ydGVyLlJlZ2lzdGVyRXh0ZW5zaW9uKE5BTUUsIChleHBvcnRlcikgPT4gbmV3IEVYVF9tZXNoX2dwdV9pbnN0YW5jaW5nKGV4cG9ydGVyKSk7XHJcbiIsImltcG9ydCB0eXBlIHsgSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyIH0gZnJvbSBcIi4uL2dsVEZFeHBvcnRlckV4dGVuc2lvblwiO1xuaW1wb3J0IHsgR0xURkV4cG9ydGVyIH0gZnJvbSBcIi4uL2dsVEZFeHBvcnRlclwiO1xuaW1wb3J0IHsgTWVzaFByaW1pdGl2ZU1vZGUgfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XG5pbXBvcnQgdHlwZSB7IElBY2Nlc3NvciwgSUJ1ZmZlclZpZXcsIElLSFJEcmFjb01lc2hDb21wcmVzc2lvbiwgSU1lc2hQcmltaXRpdmUgfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XG5pbXBvcnQgdHlwZSB7IEJ1ZmZlck1hbmFnZXIgfSBmcm9tIFwiLi4vYnVmZmVyTWFuYWdlclwiO1xuaW1wb3J0IHsgRHJhY29FbmNvZGVyIH0gZnJvbSBcImNvcmUvTWVzaGVzL0NvbXByZXNzaW9uL2RyYWNvRW5jb2RlclwiO1xuaW1wb3J0IHsgR2V0VHlwZWRBcnJheURhdGEsIEdldFR5cGVCeXRlTGVuZ3RoIH0gZnJvbSBcImNvcmUvQnVmZmVycy9idWZmZXJVdGlsc1wiO1xuaW1wb3J0IHsgR2V0QWNjZXNzb3JFbGVtZW50Q291bnQgfSBmcm9tIFwiLi4vZ2xURlV0aWxpdGllc1wiO1xuaW1wb3J0IHR5cGUgeyBEcmFjb0F0dHJpYnV0ZU5hbWUsIElEcmFjb0F0dHJpYnV0ZURhdGEsIElEcmFjb0VuY29kZXJPcHRpb25zIH0gZnJvbSBcImNvcmUvTWVzaGVzL0NvbXByZXNzaW9uL2RyYWNvRW5jb2Rlci50eXBlc1wiO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSBcImNvcmUvTWlzYy9sb2dnZXJcIjtcbmltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xuXG5jb25zdCBOQU1FID0gXCJLSFJfZHJhY29fbWVzaF9jb21wcmVzc2lvblwiO1xuXG5mdW5jdGlvbiBnZXREcmFjb0F0dHJpYnV0ZU5hbWUoZ2xURk5hbWU6IHN0cmluZyk6IERyYWNvQXR0cmlidXRlTmFtZSB7XG4gICAgaWYgKGdsVEZOYW1lID09PSBcIlBPU0lUSU9OXCIpIHtcbiAgICAgICAgcmV0dXJuIFwiUE9TSVRJT05cIjtcbiAgICB9IGVsc2UgaWYgKGdsVEZOYW1lID09PSBcIk5PUk1BTFwiKSB7XG4gICAgICAgIHJldHVybiBcIk5PUk1BTFwiO1xuICAgIH0gZWxzZSBpZiAoZ2xURk5hbWUuc3RhcnRzV2l0aChcIkNPTE9SXCIpKSB7XG4gICAgICAgIHJldHVybiBcIkNPTE9SXCI7XG4gICAgfSBlbHNlIGlmIChnbFRGTmFtZS5zdGFydHNXaXRoKFwiVEVYQ09PUkRcIikpIHtcbiAgICAgICAgcmV0dXJuIFwiVEVYX0NPT1JEXCI7XG4gICAgfVxuICAgIHJldHVybiBcIkdFTkVSSUNcIjtcbn1cblxuLyoqXG4gKiBbU3BlY2lmaWNhdGlvbl0oaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFpbi9leHRlbnNpb25zLzIuMC9LaHJvbm9zL0tIUl9kcmFjb19tZXNoX2NvbXByZXNzaW9uL1JFQURNRS5tZClcbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxuZXhwb3J0IGNsYXNzIEtIUl9kcmFjb19tZXNoX2NvbXByZXNzaW9uIGltcGxlbWVudHMgSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyIHtcbiAgICAvKiogTmFtZSBvZiB0aGlzIGV4dGVuc2lvbiAqL1xuICAgIHB1YmxpYyByZWFkb25seSBuYW1lID0gTkFNRTtcblxuICAgIC8qKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgZW5hYmxlZCAqL1xuICAgIHB1YmxpYyBlbmFibGVkO1xuXG4gICAgLyoqIEtIUl9kcmFjb19tZXNoX2NvbXByZXNzaW9uIGlzIHJlcXVpcmVkLCBhcyB1bmNvbXByZXNzZWQgZmFsbGJhY2sgZGF0YSBpcyBub3QgeWV0IGltcGxlbWVudGVkLiAqL1xuICAgIHB1YmxpYyByZXF1aXJlZCA9IHRydWU7XG5cbiAgICAvKiogQnVmZmVyVmlld3MgdXNlZCBmb3IgRHJhY28gZGF0YSwgd2hpY2ggbWF5IGJlIGVsaWdpYmxlIGZvciByZW1vdmFsIGFmdGVyIERyYWNvIGVuY29kaW5nICovXG4gICAgcHJpdmF0ZSBfYnVmZmVyVmlld3NVc2VkOiBTZXQ8SUJ1ZmZlclZpZXc+ID0gbmV3IFNldCgpO1xuXG4gICAgLyoqIEFjY2Vzc29ycyB0aGF0IHdlcmUgcmVwbGFjZWQgd2l0aCBEcmFjbyBkYXRhLCB3aGljaCBtYXkgYmUgZWxpZ2libGUgZm9yIHJlbW92YWwgYWZ0ZXIgRHJhY28gZW5jb2RpbmcgKi9cbiAgICBwcml2YXRlIF9hY2Nlc3NvcnNVc2VkOiBTZXQ8SUFjY2Vzc29yPiA9IG5ldyBTZXQoKTtcblxuICAgIC8qKiBQcm9taXNlIHBvb2wgZm9yIERyYWNvIGVuY29kaW5nIHdvcmsgKi9cbiAgICBwcml2YXRlIF9lbmNvZGVQcm9taXNlczogUHJvbWlzZTx2b2lkPltdID0gW107XG5cbiAgICBwcml2YXRlIF93YXNVc2VkID0gZmFsc2U7XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGdldCB3YXNVc2VkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fd2FzVXNlZDtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgY29uc3RydWN0b3IoZXhwb3J0ZXI6IEdMVEZFeHBvcnRlcikge1xuICAgICAgICB0aGlzLmVuYWJsZWQgPSBleHBvcnRlci5vcHRpb25zLm1lc2hDb21wcmVzc2lvbk1ldGhvZCA9PT0gXCJEcmFjb1wiICYmIERyYWNvRW5jb2Rlci5EZWZhdWx0QXZhaWxhYmxlO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZGlzcG9zZSgpIHt9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIHBvc3RFeHBvcnRNZXNoUHJpbWl0aXZlKHByaW1pdGl2ZTogSU1lc2hQcmltaXRpdmUsIGJ1ZmZlck1hbmFnZXI6IEJ1ZmZlck1hbmFnZXIsIGFjY2Vzc29yczogSUFjY2Vzc29yW10pOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmltaXRpdmUubW9kZSAhPT0gTWVzaFByaW1pdGl2ZU1vZGUuVFJJQU5HTEVTICYmIHByaW1pdGl2ZS5tb2RlICE9PSBNZXNoUHJpbWl0aXZlTW9kZS5UUklBTkdMRV9TVFJJUCkge1xuICAgICAgICAgICAgTG9nZ2VyLldhcm4oXCJDYW5ub3QgY29tcHJlc3MgcHJpbWl0aXZlIHdpdGggbW9kZSBcIiArIHByaW1pdGl2ZS5tb2RlICsgXCIuXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ29sbGVjdCBidWZmZXJWaWV3cyBhbmQgYWNjZXNzb3JzIHVzZWQgYnkgdGhpcyBwcmltaXRpdmVcbiAgICAgICAgY29uc3QgcHJpbWl0aXZlQnVmZmVyVmlld3M6IElCdWZmZXJWaWV3W10gPSBbXTtcbiAgICAgICAgY29uc3QgcHJpbWl0aXZlQWNjZXNzb3JzOiBJQWNjZXNzb3JbXSA9IFtdO1xuXG4gICAgICAgIC8vIFByZXBhcmUgaW5kaWNlcyBmb3IgRHJhY28gZW5jb2RpbmdcbiAgICAgICAgbGV0IGluZGljZXM6IE51bGxhYmxlPFVpbnQzMkFycmF5IHwgVWludDE2QXJyYXk+ID0gbnVsbDtcbiAgICAgICAgaWYgKHByaW1pdGl2ZS5pbmRpY2VzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGFjY2Vzc29yID0gYWNjZXNzb3JzW3ByaW1pdGl2ZS5pbmRpY2VzXTtcbiAgICAgICAgICAgIGNvbnN0IGJ1ZmZlclZpZXcgPSBidWZmZXJNYW5hZ2VyLmdldEJ1ZmZlclZpZXcoYWNjZXNzb3IpO1xuICAgICAgICAgICAgLy8gUGVyIGV4cG9ydEluZGljZXMsIGluZGljZXMgbXVzdCBiZSBlaXRoZXIgVWludDE2QXJyYXkgb3IgVWludDMyQXJyYXlcbiAgICAgICAgICAgIGluZGljZXMgPSBidWZmZXJNYW5hZ2VyLmdldERhdGEoYnVmZmVyVmlldykuc2xpY2UoKSBhcyBVaW50MzJBcnJheSB8IFVpbnQxNkFycmF5O1xuXG4gICAgICAgICAgICBwcmltaXRpdmVCdWZmZXJWaWV3cy5wdXNoKGJ1ZmZlclZpZXcpO1xuICAgICAgICAgICAgcHJpbWl0aXZlQWNjZXNzb3JzLnB1c2goYWNjZXNzb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUHJlcGFyZSBhdHRyaWJ1dGVzIGZvciBEcmFjbyBlbmNvZGluZ1xuICAgICAgICBjb25zdCBhdHRyaWJ1dGVzOiBJRHJhY29BdHRyaWJ1dGVEYXRhW10gPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBbbmFtZSwgYWNjZXNzb3JJbmRleF0gb2YgT2JqZWN0LmVudHJpZXMocHJpbWl0aXZlLmF0dHJpYnV0ZXMpKSB7XG4gICAgICAgICAgICBjb25zdCBhY2Nlc3NvciA9IGFjY2Vzc29yc1thY2Nlc3NvckluZGV4XTtcbiAgICAgICAgICAgIGNvbnN0IGJ1ZmZlclZpZXcgPSBidWZmZXJNYW5hZ2VyLmdldEJ1ZmZlclZpZXcoYWNjZXNzb3IpO1xuXG4gICAgICAgICAgICBjb25zdCBzaXplID0gR2V0QWNjZXNzb3JFbGVtZW50Q291bnQoYWNjZXNzb3IudHlwZSk7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gR2V0VHlwZWRBcnJheURhdGEoXG4gICAgICAgICAgICAgICAgYnVmZmVyTWFuYWdlci5nZXREYXRhKGJ1ZmZlclZpZXcpLFxuICAgICAgICAgICAgICAgIHNpemUsXG4gICAgICAgICAgICAgICAgYWNjZXNzb3IuY29tcG9uZW50VHlwZSxcbiAgICAgICAgICAgICAgICBhY2Nlc3Nvci5ieXRlT2Zmc2V0IHx8IDAsXG4gICAgICAgICAgICAgICAgYnVmZmVyVmlldy5ieXRlU3RyaWRlIHx8IEdldFR5cGVCeXRlTGVuZ3RoKGFjY2Vzc29yLmNvbXBvbmVudFR5cGUpICogc2l6ZSxcbiAgICAgICAgICAgICAgICBhY2Nlc3Nvci5ub3JtYWxpemVkIHx8IGZhbHNlLFxuICAgICAgICAgICAgICAgIGFjY2Vzc29yLmNvdW50LFxuICAgICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGF0dHJpYnV0ZXMucHVzaCh7IGtpbmQ6IG5hbWUsIGRyYWNvTmFtZTogZ2V0RHJhY29BdHRyaWJ1dGVOYW1lKG5hbWUpLCBzaXplOiBHZXRBY2Nlc3NvckVsZW1lbnRDb3VudChhY2Nlc3Nvci50eXBlKSwgZGF0YTogZGF0YSB9KTtcblxuICAgICAgICAgICAgcHJpbWl0aXZlQnVmZmVyVmlld3MucHVzaChidWZmZXJWaWV3KTtcbiAgICAgICAgICAgIHByaW1pdGl2ZUFjY2Vzc29ycy5wdXNoKGFjY2Vzc29yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVzZSBzZXF1ZW50aWFsIGVuY29kaW5nIHRvIHByZXNlcnZlIHZlcnRleCBvcmRlciBmb3IgY2FzZXMgbGlrZSBtb3JwaCB0YXJnZXRzXG4gICAgICAgIGNvbnN0IG9wdGlvbnM6IElEcmFjb0VuY29kZXJPcHRpb25zID0ge1xuICAgICAgICAgICAgbWV0aG9kOiBwcmltaXRpdmUudGFyZ2V0cyA/IFwiTUVTSF9TRVFVRU5USUFMX0VOQ09ESU5HXCIgOiBcIk1FU0hfRURHRUJSRUFLRVJfRU5DT0RJTkdcIixcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBwcm9taXNlID0gRHJhY29FbmNvZGVyLkRlZmF1bHQuX2VuY29kZUFzeW5jKGF0dHJpYnV0ZXMsIGluZGljZXMsIG9wdGlvbnMpXG4gICAgICAgICAgICAudGhlbigoZW5jb2RlZERhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWVuY29kZWREYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIExvZ2dlci5FcnJvcihcIkRyYWNvIGVuY29kaW5nIGZhaWxlZCBmb3IgcHJpbWl0aXZlLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IGRyYWNvSW5mbzogSUtIUkRyYWNvTWVzaENvbXByZXNzaW9uID0ge1xuICAgICAgICAgICAgICAgICAgICBidWZmZXJWaWV3OiAtMSwgLy8gYnVmZmVyVmlldyB3aWxsIGJlIHNldCB0byBhIHJlYWwgaW5kZXggbGF0ZXIsIHdoZW4gd2Ugd3JpdGUgdGhlIGJpbmFyeSBhbmQgZGVjaWRlIGJ1ZmZlclZpZXcgb3JkZXJpbmdcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlczogZW5jb2RlZERhdGEuYXR0cmlidXRlSURzLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgY29uc3QgYnVmZmVyVmlldyA9IGJ1ZmZlck1hbmFnZXIuY3JlYXRlQnVmZmVyVmlldyhlbmNvZGVkRGF0YS5kYXRhKTtcbiAgICAgICAgICAgICAgICBidWZmZXJNYW5hZ2VyLnNldEJ1ZmZlclZpZXcoZHJhY29JbmZvLCBidWZmZXJWaWV3KTtcblxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYnVmZmVyVmlldyBvZiBwcmltaXRpdmVCdWZmZXJWaWV3cykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9idWZmZXJWaWV3c1VzZWQuYWRkKGJ1ZmZlclZpZXcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGFjY2Vzc29yIG9mIHByaW1pdGl2ZUFjY2Vzc29ycykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9hY2Nlc3NvcnNVc2VkLmFkZChhY2Nlc3Nvcik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcHJpbWl0aXZlLmV4dGVuc2lvbnMgfHw9IHt9O1xuICAgICAgICAgICAgICAgIHByaW1pdGl2ZS5leHRlbnNpb25zW05BTUVdID0gZHJhY29JbmZvO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBMb2dnZXIuRXJyb3IoXCJEcmFjbyBlbmNvZGluZyBmYWlsZWQgZm9yIHByaW1pdGl2ZTogXCIgKyBlcnJvcik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl9lbmNvZGVQcm9taXNlcy5wdXNoKHByb21pc2UpO1xuXG4gICAgICAgIHRoaXMuX3dhc1VzZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgYXN5bmMgcHJlR2VuZXJhdGVCaW5hcnlBc3luYyhidWZmZXJNYW5hZ2VyOiBCdWZmZXJNYW5hZ2VyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbCh0aGlzLl9lbmNvZGVQcm9taXNlcyk7XG5cbiAgICAgICAgLy8gQ3VsbCBvYnNvbGV0ZSBidWZmZXJWaWV3cyB0aGF0IHdlcmUgcmVwbGFjZWQgd2l0aCBEcmFjbyBkYXRhXG4gICAgICAgIHRoaXMuX2J1ZmZlclZpZXdzVXNlZC5mb3JFYWNoKChidWZmZXJWaWV3KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZWZlcmVuY2VzID0gYnVmZmVyTWFuYWdlci5nZXRQcm9wZXJ0aWVzV2l0aEJ1ZmZlclZpZXcoYnVmZmVyVmlldyk7XG4gICAgICAgICAgICBjb25zdCBvbmx5VXNlZEJ5RW5jb2RlZFByaW1pdGl2ZXMgPSByZWZlcmVuY2VzLmV2ZXJ5KChvYmplY3QpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fYWNjZXNzb3JzVXNlZC5oYXMob2JqZWN0IGFzIElBY2Nlc3Nvcik7IC8vIGhhcygpIGNhbiBoYW5kbGUgYW55IG9iamVjdCwgYnV0IFRTIGRvZXNuJ3Qga25vdyB0aGF0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChvbmx5VXNlZEJ5RW5jb2RlZFByaW1pdGl2ZXMpIHtcbiAgICAgICAgICAgICAgICBidWZmZXJNYW5hZ2VyLnJlbW92ZUJ1ZmZlclZpZXcoYnVmZmVyVmlldyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX2J1ZmZlclZpZXdzVXNlZC5jbGVhcigpO1xuICAgICAgICB0aGlzLl9hY2Nlc3NvcnNVc2VkLmNsZWFyKCk7XG4gICAgfVxufVxuXG5HTFRGRXhwb3J0ZXIuUmVnaXN0ZXJFeHRlbnNpb24oTkFNRSwgKGV4cG9ydGVyKSA9PiBuZXcgS0hSX2RyYWNvX21lc2hfY29tcHJlc3Npb24oZXhwb3J0ZXIpKTtcbiIsImltcG9ydCB0eXBlIHsgU3BvdExpZ2h0IH0gZnJvbSBcImNvcmUvTGlnaHRzL3Nwb3RMaWdodFwiO1xyXG5pbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcImNvcmUvdHlwZXNcIjtcclxuaW1wb3J0IHsgVmVjdG9yMywgUXVhdGVybmlvbiwgVG1wVmVjdG9ycyB9IGZyb20gXCJjb3JlL01hdGhzL21hdGgudmVjdG9yXCI7XHJcbmltcG9ydCB7IExpZ2h0IH0gZnJvbSBcImNvcmUvTGlnaHRzL2xpZ2h0XCI7XHJcbmltcG9ydCB0eXBlIHsgTm9kZSB9IGZyb20gXCJjb3JlL25vZGVcIjtcclxuaW1wb3J0IHsgU2hhZG93TGlnaHQgfSBmcm9tIFwiY29yZS9MaWdodHMvc2hhZG93TGlnaHRcIjtcclxuaW1wb3J0IHR5cGUgeyBJTm9kZSwgSUtIUkxpZ2h0c1B1bmN0dWFsX0xpZ2h0UmVmZXJlbmNlLCBJS0hSTGlnaHRzUHVuY3R1YWxfTGlnaHQsIElLSFJMaWdodHNQdW5jdHVhbCB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgS0hSTGlnaHRzUHVuY3R1YWxfTGlnaHRUeXBlIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgdHlwZSB7IElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMiB9IGZyb20gXCIuLi9nbFRGRXhwb3J0ZXJFeHRlbnNpb25cIjtcclxuaW1wb3J0IHsgR0xURkV4cG9ydGVyIH0gZnJvbSBcIi4uL2dsVEZFeHBvcnRlclwiO1xyXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiY29yZS9NaXNjL2xvZ2dlclwiO1xyXG5pbXBvcnQgeyBDb252ZXJ0VG9SaWdodEhhbmRlZFBvc2l0aW9uLCBPbWl0RGVmYXVsdFZhbHVlcywgQ29sbGFwc2VQYXJlbnROb2RlLCBJc1BhcmVudEFkZGVkQnlJbXBvcnRlciB9IGZyb20gXCIuLi9nbFRGVXRpbGl0aWVzXCI7XHJcblxyXG5jb25zdCBOQU1FID0gXCJLSFJfbGlnaHRzX3B1bmN0dWFsXCI7XHJcbmNvbnN0IERFRkFVTFRTOiBPbWl0PElLSFJMaWdodHNQdW5jdHVhbF9MaWdodCwgXCJ0eXBlXCI+ID0ge1xyXG4gICAgbmFtZTogXCJcIixcclxuICAgIGNvbG9yOiBbMSwgMSwgMV0sXHJcbiAgICBpbnRlbnNpdHk6IDEsXHJcbiAgICByYW5nZTogTnVtYmVyLk1BWF9WQUxVRSxcclxufTtcclxuY29uc3QgU1BPVERFRkFVTFRTOiBOb25OdWxsYWJsZTxJS0hSTGlnaHRzUHVuY3R1YWxfTGlnaHRbXCJzcG90XCJdPiA9IHtcclxuICAgIGlubmVyQ29uZUFuZ2xlOiAwLFxyXG4gICAgb3V0ZXJDb25lQW5nbGU6IE1hdGguUEkgLyA0LjAsXHJcbn07XHJcbmNvbnN0IExJR0hURElSRUNUSU9OID0gVmVjdG9yMy5CYWNrd2FyZCgpO1xyXG5cclxuLyoqXHJcbiAqIFtTcGVjaWZpY2F0aW9uXShodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi9tYXN0ZXIvZXh0ZW5zaW9ucy8yLjAvS2hyb25vcy9LSFJfbGlnaHRzX3B1bmN0dWFsL1JFQURNRS5tZClcclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGNsYXNzIEtIUl9saWdodHNfcHVuY3R1YWwgaW1wbGVtZW50cyBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIge1xyXG4gICAgLyoqIFRoZSBuYW1lIG9mIHRoaXMgZXh0ZW5zaW9uLiAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBOQU1FO1xyXG5cclxuICAgIC8qKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgZW5hYmxlZC4gKi9cclxuICAgIHB1YmxpYyBlbmFibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAvKiogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIHJlcXVpcmVkICovXHJcbiAgICBwdWJsaWMgcmVxdWlyZWQgPSBmYWxzZTtcclxuXHJcbiAgICAvKiogUmVmZXJlbmNlIHRvIHRoZSBnbFRGIGV4cG9ydGVyICovXHJcbiAgICBwcml2YXRlIF9leHBvcnRlcjogR0xURkV4cG9ydGVyO1xyXG5cclxuICAgIHByaXZhdGUgX2xpZ2h0czogSUtIUkxpZ2h0c1B1bmN0dWFsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGV4cG9ydGVyOiBHTFRGRXhwb3J0ZXIpIHtcclxuICAgICAgICB0aGlzLl9leHBvcnRlciA9IGV4cG9ydGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge1xyXG4gICAgICAgICh0aGlzLl9saWdodHMgYXMgYW55KSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGdldCB3YXNVc2VkKCkge1xyXG4gICAgICAgIHJldHVybiAhIXRoaXMuX2xpZ2h0cztcclxuICAgIH1cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgb25FeHBvcnRpbmcoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fZXhwb3J0ZXIhLl9nbFRGLmV4dGVuc2lvbnMhW05BTUVdID0gdGhpcy5fbGlnaHRzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmUgdGhpcyBtZXRob2QgdG8gbW9kaWZ5IHRoZSBkZWZhdWx0IGJlaGF2aW9yIHdoZW4gZXhwb3J0aW5nIGEgbm9kZVxyXG4gICAgICogQHBhcmFtIGNvbnRleHQgVGhlIGNvbnRleHQgd2hlbiBleHBvcnRpbmcgdGhlIG5vZGVcclxuICAgICAqIEBwYXJhbSBub2RlIGdsVEYgbm9kZVxyXG4gICAgICogQHBhcmFtIGJhYnlsb25Ob2RlIEJhYnlsb25KUyBub2RlXHJcbiAgICAgKiBAcGFyYW0gbm9kZU1hcCBOb2RlIG1hcHBpbmcgb2YgYmFieWxvbiBub2RlIHRvIGdsVEYgbm9kZSBpbmRleFxyXG4gICAgICogQHBhcmFtIGNvbnZlcnRUb1JpZ2h0SGFuZGVkIEZsYWcgdG8gY29udmVydCB0aGUgdmFsdWVzIHRvIHJpZ2h0LWhhbmRlZFxyXG4gICAgICogQHJldHVybnMgbnVsbGFibGUgSU5vZGUgcHJvbWlzZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcG9zdEV4cG9ydE5vZGVBc3luYyhjb250ZXh0OiBzdHJpbmcsIG5vZGU6IElOb2RlLCBiYWJ5bG9uTm9kZTogTm9kZSwgbm9kZU1hcDogTWFwPE5vZGUsIG51bWJlcj4sIGNvbnZlcnRUb1JpZ2h0SGFuZGVkOiBib29sZWFuKTogUHJvbWlzZTxOdWxsYWJsZTxJTm9kZT4+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgaWYgKCEoYmFieWxvbk5vZGUgaW5zdGFuY2VvZiBTaGFkb3dMaWdodCkpIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUobm9kZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGxpZ2h0VHlwZSA9XHJcbiAgICAgICAgICAgICAgICBiYWJ5bG9uTm9kZS5nZXRUeXBlSUQoKSA9PSBMaWdodC5MSUdIVFRZUEVJRF9QT0lOVExJR0hUXHJcbiAgICAgICAgICAgICAgICAgICAgPyBLSFJMaWdodHNQdW5jdHVhbF9MaWdodFR5cGUuUE9JTlRcclxuICAgICAgICAgICAgICAgICAgICA6IGJhYnlsb25Ob2RlLmdldFR5cGVJRCgpID09IExpZ2h0LkxJR0hUVFlQRUlEX0RJUkVDVElPTkFMTElHSFRcclxuICAgICAgICAgICAgICAgICAgICAgID8gS0hSTGlnaHRzUHVuY3R1YWxfTGlnaHRUeXBlLkRJUkVDVElPTkFMXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IGJhYnlsb25Ob2RlLmdldFR5cGVJRCgpID09IExpZ2h0LkxJR0hUVFlQRUlEX1NQT1RMSUdIVFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IEtIUkxpZ2h0c1B1bmN0dWFsX0xpZ2h0VHlwZS5TUE9UXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbDtcclxuICAgICAgICAgICAgaWYgKCFsaWdodFR5cGUpIHtcclxuICAgICAgICAgICAgICAgIExvZ2dlci5XYXJuKGAke2NvbnRleHR9OiBMaWdodCAke2JhYnlsb25Ob2RlLm5hbWV9IGlzIG5vdCBzdXBwb3J0ZWQgaW4gJHtOQU1FfWApO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShub2RlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGJhYnlsb25Ob2RlLmZhbGxvZmZUeXBlICE9PSBMaWdodC5GQUxMT0ZGX0dMVEYpIHtcclxuICAgICAgICAgICAgICAgIExvZ2dlci5XYXJuKGAke2NvbnRleHR9OiBMaWdodCBmYWxsb2ZmIGZvciAke2JhYnlsb25Ob2RlLm5hbWV9IGRvZXMgbm90IG1hdGNoIHRoZSAke05BTUV9IHNwZWNpZmljYXRpb24hYCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFNldCB0aGUgbm9kZSdzIHRyYW5zbGF0aW9uIGFuZCByb3RhdGlvbiBoZXJlLCBzaW5jZSBsaWdodHMgYXJlIG5vdCBoYW5kbGVkIGluIGV4cG9ydE5vZGVBc3luY1xyXG4gICAgICAgICAgICBpZiAoIWJhYnlsb25Ob2RlLnBvc2l0aW9uLmVxdWFsc1RvRmxvYXRzKDAsIDAsIDApKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0cmFuc2xhdGlvbiA9IFRtcFZlY3RvcnMuVmVjdG9yM1swXS5jb3B5RnJvbShiYWJ5bG9uTm9kZS5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29udmVydFRvUmlnaHRIYW5kZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBDb252ZXJ0VG9SaWdodEhhbmRlZFBvc2l0aW9uKHRyYW5zbGF0aW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG5vZGUudHJhbnNsYXRpb24gPSB0cmFuc2xhdGlvbi5hc0FycmF5KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEJhYnlsb24gbGlnaHRzIGhhdmUgXCJjb25zdGFudFwiIHJvdGF0aW9uIGFuZCB2YXJpYWJsZSBkaXJlY3Rpb24sIHdoaWxlXHJcbiAgICAgICAgICAgIC8vIGdsVEYgbGlnaHRzIGhhdmUgdmFyaWFibGUgcm90YXRpb24gYW5kIGNvbnN0YW50IGRpcmVjdGlvbi4gVGhlcmVmb3JlLFxyXG4gICAgICAgICAgICAvLyBjb21wdXRlIGEgcXVhdGVybmlvbiB0aGF0IGFsaWducyB0aGUgQmFieWxvbiBsaWdodCdzIGRpcmVjdGlvbiB3aXRoIGdsVEYncyBjb25zdGFudCBvbmUuXHJcbiAgICAgICAgICAgIGlmIChsaWdodFR5cGUgIT09IEtIUkxpZ2h0c1B1bmN0dWFsX0xpZ2h0VHlwZS5QT0lOVCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gYmFieWxvbk5vZGUuZGlyZWN0aW9uLm5vcm1hbGl6ZVRvUmVmKFRtcFZlY3RvcnMuVmVjdG9yM1swXSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29udmVydFRvUmlnaHRIYW5kZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBDb252ZXJ0VG9SaWdodEhhbmRlZFBvc2l0aW9uKGRpcmVjdGlvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhbmdsZSA9IE1hdGguYWNvcyhWZWN0b3IzLkRvdChMSUdIVERJUkVDVElPTiwgZGlyZWN0aW9uKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBheGlzID0gVmVjdG9yMy5Dcm9zcyhMSUdIVERJUkVDVElPTiwgZGlyZWN0aW9uKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxpZ2h0Um90YXRpb25RdWF0ZXJuaW9uID0gUXVhdGVybmlvbi5Sb3RhdGlvbkF4aXNUb1JlZihheGlzLCBhbmdsZSwgVG1wVmVjdG9ycy5RdWF0ZXJuaW9uWzBdKTtcclxuICAgICAgICAgICAgICAgIGlmICghUXVhdGVybmlvbi5Jc0lkZW50aXR5KGxpZ2h0Um90YXRpb25RdWF0ZXJuaW9uKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUucm90YXRpb24gPSBsaWdodFJvdGF0aW9uUXVhdGVybmlvbi5hc0FycmF5KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGxpZ2h0OiBJS0hSTGlnaHRzUHVuY3R1YWxfTGlnaHQgPSB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBsaWdodFR5cGUsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBiYWJ5bG9uTm9kZS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IGJhYnlsb25Ob2RlLmRpZmZ1c2UuYXNBcnJheSgpLFxyXG4gICAgICAgICAgICAgICAgaW50ZW5zaXR5OiBiYWJ5bG9uTm9kZS5pbnRlbnNpdHksXHJcbiAgICAgICAgICAgICAgICByYW5nZTogYmFieWxvbk5vZGUucmFuZ2UsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIE9taXREZWZhdWx0VmFsdWVzKGxpZ2h0LCBERUZBVUxUUyk7XHJcblxyXG4gICAgICAgICAgICAvLyBTZXBhcmF0ZWx5IGhhbmRsZSB0aGUgcmVxdWlyZWQgJ3Nwb3QnIGZpZWxkIGZvciBzcG90IGxpZ2h0c1xyXG4gICAgICAgICAgICBpZiAobGlnaHRUeXBlID09PSBLSFJMaWdodHNQdW5jdHVhbF9MaWdodFR5cGUuU1BPVCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYmFieWxvblNwb3RMaWdodCA9IGJhYnlsb25Ob2RlIGFzIFNwb3RMaWdodDtcclxuICAgICAgICAgICAgICAgIGxpZ2h0LnNwb3QgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5uZXJDb25lQW5nbGU6IGJhYnlsb25TcG90TGlnaHQuaW5uZXJBbmdsZSAvIDIuMCxcclxuICAgICAgICAgICAgICAgICAgICBvdXRlckNvbmVBbmdsZTogYmFieWxvblNwb3RMaWdodC5hbmdsZSAvIDIuMCxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBPbWl0RGVmYXVsdFZhbHVlcyhsaWdodC5zcG90LCBTUE9UREVGQVVMVFMpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9saWdodHMgfHw9IHtcclxuICAgICAgICAgICAgICAgIGxpZ2h0czogW10sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMuX2xpZ2h0cy5saWdodHMucHVzaChsaWdodCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBsaWdodFJlZmVyZW5jZTogSUtIUkxpZ2h0c1B1bmN0dWFsX0xpZ2h0UmVmZXJlbmNlID0ge1xyXG4gICAgICAgICAgICAgICAgbGlnaHQ6IHRoaXMuX2xpZ2h0cy5saWdodHMubGVuZ3RoIC0gMSxcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8vIEFzc2lnbiB0aGUgbGlnaHQgdG8gaXRzIHBhcmVudCBub2RlLCBpZiBwb3NzaWJsZSwgdG8gY29uZGVuc2UgdGhlIGdsVEZcclxuICAgICAgICAgICAgLy8gV2h5IGFuZCB3aGVuOiB0aGUgZ2xURiBsb2FkZXIgZ2VuZXJhdGVzIGEgbmV3IHBhcmVudCBUcmFuc2Zvcm1Ob2RlIGZvciBlYWNoIGxpZ2h0IG5vZGUsIHdoaWNoIHdlIHNob3VsZCB1bmRvIG9uIGV4cG9ydFxyXG4gICAgICAgICAgICBjb25zdCBwYXJlbnRCYWJ5bG9uTm9kZSA9IGJhYnlsb25Ob2RlLnBhcmVudDtcclxuXHJcbiAgICAgICAgICAgIGlmIChwYXJlbnRCYWJ5bG9uTm9kZSAmJiBJc1BhcmVudEFkZGVkQnlJbXBvcnRlcihiYWJ5bG9uTm9kZSwgcGFyZW50QmFieWxvbk5vZGUpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnROb2RlSW5kZXggPSBub2RlTWFwLmdldChwYXJlbnRCYWJ5bG9uTm9kZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50Tm9kZUluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ29tYmluZSB0aGUgbGlnaHQncyB0cmFuc2Zvcm1hdGlvbiB3aXRoIHRoZSBwYXJlbnQnc1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudE5vZGUgPSB0aGlzLl9leHBvcnRlci5fbm9kZXNbcGFyZW50Tm9kZUluZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICBDb2xsYXBzZVBhcmVudE5vZGUobm9kZSwgcGFyZW50Tm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5leHRlbnNpb25zIHx8PSB7fTtcclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnROb2RlLmV4dGVuc2lvbnNbTkFNRV0gPSBsaWdodFJlZmVyZW5jZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRG8gbm90IGV4cG9ydCB0aGUgb3JpZ2luYWwgbm9kZVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBub2RlLmV4dGVuc2lvbnMgfHw9IHt9O1xyXG4gICAgICAgICAgICBub2RlLmV4dGVuc2lvbnNbTkFNRV0gPSBsaWdodFJlZmVyZW5jZTtcclxuICAgICAgICAgICAgcmVzb2x2ZShub2RlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuR0xURkV4cG9ydGVyLlJlZ2lzdGVyRXh0ZW5zaW9uKE5BTUUsIChleHBvcnRlcikgPT4gbmV3IEtIUl9saWdodHNfcHVuY3R1YWwoZXhwb3J0ZXIpKTtcclxuIiwiaW1wb3J0IHR5cGUgeyBJTWF0ZXJpYWwsIElLSFJNYXRlcmlhbHNBbmlzb3Ryb3B5IH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgdHlwZSB7IElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMiB9IGZyb20gXCIuLi9nbFRGRXhwb3J0ZXJFeHRlbnNpb25cIjtcclxuaW1wb3J0IHsgR0xURkV4cG9ydGVyIH0gZnJvbSBcIi4uL2dsVEZFeHBvcnRlclwiO1xyXG5pbXBvcnQgdHlwZSB7IE1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IFBCUkJhc2VNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9QQlIvcGJyQmFzZU1hdGVyaWFsXCI7XHJcbmltcG9ydCB0eXBlIHsgQmFzZVRleHR1cmUgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvYmFzZVRleHR1cmVcIjtcclxuXHJcbmNvbnN0IE5BTUUgPSBcIktIUl9tYXRlcmlhbHNfYW5pc290cm9weVwiO1xyXG5cclxuLyoqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgY2xhc3MgS0hSX21hdGVyaWFsc19hbmlzb3Ryb3B5IGltcGxlbWVudHMgSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyIHtcclxuICAgIC8qKiBOYW1lIG9mIHRoaXMgZXh0ZW5zaW9uICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZSA9IE5BTUU7XHJcblxyXG4gICAgLyoqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyBlbmFibGVkICovXHJcbiAgICBwdWJsaWMgZW5hYmxlZCA9IHRydWU7XHJcblxyXG4gICAgLyoqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyByZXF1aXJlZCAqL1xyXG4gICAgcHVibGljIHJlcXVpcmVkID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBfZXhwb3J0ZXI6IEdMVEZFeHBvcnRlcjtcclxuXHJcbiAgICBwcml2YXRlIF93YXNVc2VkID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZXhwb3J0ZXI6IEdMVEZFeHBvcnRlcikge1xyXG4gICAgICAgIHRoaXMuX2V4cG9ydGVyID0gZXhwb3J0ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7fVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBnZXQgd2FzVXNlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fd2FzVXNlZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcG9zdEV4cG9ydE1hdGVyaWFsQWRkaXRpb25hbFRleHR1cmVzPyhjb250ZXh0OiBzdHJpbmcsIG5vZGU6IElNYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCk6IEJhc2VUZXh0dXJlW10ge1xyXG4gICAgICAgIGNvbnN0IGFkZGl0aW9uYWxUZXh0dXJlczogQmFzZVRleHR1cmVbXSA9IFtdO1xyXG4gICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwgaW5zdGFuY2VvZiBQQlJCYXNlTWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbC5hbmlzb3Ryb3B5LmlzRW5hYmxlZCAmJiAhYmFieWxvbk1hdGVyaWFsLmFuaXNvdHJvcHkubGVnYWN5KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsLmFuaXNvdHJvcHkudGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZGl0aW9uYWxUZXh0dXJlcy5wdXNoKGJhYnlsb25NYXRlcmlhbC5hbmlzb3Ryb3B5LnRleHR1cmUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFkZGl0aW9uYWxUZXh0dXJlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwb3N0RXhwb3J0TWF0ZXJpYWxBc3luYz8oY29udGV4dDogc3RyaW5nLCBub2RlOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBQcm9taXNlPElNYXRlcmlhbD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsIGluc3RhbmNlb2YgUEJSQmFzZU1hdGVyaWFsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWJhYnlsb25NYXRlcmlhbC5hbmlzb3Ryb3B5LmlzRW5hYmxlZCB8fCBiYWJ5bG9uTWF0ZXJpYWwuYW5pc290cm9weS5sZWdhY3kpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl93YXNVc2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBub2RlLmV4dGVuc2lvbnMgPSBub2RlLmV4dGVuc2lvbnMgfHwge307XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgYW5pc290cm9weVRleHR1cmVJbmZvID0gdGhpcy5fZXhwb3J0ZXIuX21hdGVyaWFsRXhwb3J0ZXIuZ2V0VGV4dHVyZUluZm8oYmFieWxvbk1hdGVyaWFsLmFuaXNvdHJvcHkudGV4dHVyZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgYW5pc290cm9weUluZm86IElLSFJNYXRlcmlhbHNBbmlzb3Ryb3B5ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaXNvdHJvcHlTdHJlbmd0aDogYmFieWxvbk1hdGVyaWFsLmFuaXNvdHJvcHkuaW50ZW5zaXR5LFxyXG4gICAgICAgICAgICAgICAgICAgIGFuaXNvdHJvcHlSb3RhdGlvbjogYmFieWxvbk1hdGVyaWFsLmFuaXNvdHJvcHkuYW5nbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgYW5pc290cm9weVRleHR1cmU6IGFuaXNvdHJvcHlUZXh0dXJlSW5mbyA/PyB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChhbmlzb3Ryb3B5SW5mby5hbmlzb3Ryb3B5VGV4dHVyZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2V4cG9ydGVyLl9tYXRlcmlhbE5lZWRzVVZzU2V0LmFkZChiYWJ5bG9uTWF0ZXJpYWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIG5vZGUuZXh0ZW5zaW9uc1tOQU1FXSA9IGFuaXNvdHJvcHlJbmZvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc29sdmUobm9kZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkdMVEZFeHBvcnRlci5SZWdpc3RlckV4dGVuc2lvbihOQU1FLCAoZXhwb3J0ZXIpID0+IG5ldyBLSFJfbWF0ZXJpYWxzX2FuaXNvdHJvcHkoZXhwb3J0ZXIpKTtcclxuIiwiaW1wb3J0IHR5cGUgeyBJTWF0ZXJpYWwsIElLSFJNYXRlcmlhbHNDbGVhcmNvYXQgfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB0eXBlIHsgSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyIH0gZnJvbSBcIi4uL2dsVEZFeHBvcnRlckV4dGVuc2lvblwiO1xyXG5pbXBvcnQgeyBHTFRGRXhwb3J0ZXIgfSBmcm9tIFwiLi4vZ2xURkV4cG9ydGVyXCI7XHJcbmltcG9ydCB0eXBlIHsgTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgUEJSQmFzZU1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1BCUi9wYnJCYXNlTWF0ZXJpYWxcIjtcclxuaW1wb3J0IHR5cGUgeyBCYXNlVGV4dHVyZSB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9UZXh0dXJlcy9iYXNlVGV4dHVyZVwiO1xyXG5cclxuaW1wb3J0IHsgVG9vbHMgfSBmcm9tIFwiY29yZS9NaXNjL3Rvb2xzXCI7XHJcblxyXG5jb25zdCBOQU1FID0gXCJLSFJfbWF0ZXJpYWxzX2NsZWFyY29hdFwiO1xyXG5cclxuLyoqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgY2xhc3MgS0hSX21hdGVyaWFsc19jbGVhcmNvYXQgaW1wbGVtZW50cyBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIge1xyXG4gICAgLyoqIE5hbWUgb2YgdGhpcyBleHRlbnNpb24gKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lID0gTkFNRTtcclxuXHJcbiAgICAvKiogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIGVuYWJsZWQgKi9cclxuICAgIHB1YmxpYyBlbmFibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAvKiogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIHJlcXVpcmVkICovXHJcbiAgICBwdWJsaWMgcmVxdWlyZWQgPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIF9leHBvcnRlcjogR0xURkV4cG9ydGVyO1xyXG5cclxuICAgIHByaXZhdGUgX3dhc1VzZWQgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihleHBvcnRlcjogR0xURkV4cG9ydGVyKSB7XHJcbiAgICAgICAgdGhpcy5fZXhwb3J0ZXIgPSBleHBvcnRlcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHt9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGdldCB3YXNVc2VkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl93YXNVc2VkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwb3N0RXhwb3J0TWF0ZXJpYWxBZGRpdGlvbmFsVGV4dHVyZXM/KGNvbnRleHQ6IHN0cmluZywgbm9kZTogSU1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsKTogQmFzZVRleHR1cmVbXSB7XHJcbiAgICAgICAgY29uc3QgYWRkaXRpb25hbFRleHR1cmVzOiBCYXNlVGV4dHVyZVtdID0gW107XHJcbiAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbCBpbnN0YW5jZW9mIFBCUkJhc2VNYXRlcmlhbCkge1xyXG4gICAgICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsLmNsZWFyQ29hdC5pc0VuYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwuY2xlYXJDb2F0LnRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRpdGlvbmFsVGV4dHVyZXMucHVzaChiYWJ5bG9uTWF0ZXJpYWwuY2xlYXJDb2F0LnRleHR1cmUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCFiYWJ5bG9uTWF0ZXJpYWwuY2xlYXJDb2F0LnVzZVJvdWdobmVzc0Zyb21NYWluVGV4dHVyZSAmJiBiYWJ5bG9uTWF0ZXJpYWwuY2xlYXJDb2F0LnRleHR1cmVSb3VnaG5lc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRpdGlvbmFsVGV4dHVyZXMucHVzaChiYWJ5bG9uTWF0ZXJpYWwuY2xlYXJDb2F0LnRleHR1cmVSb3VnaG5lc3MpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbC5jbGVhckNvYXQuYnVtcFRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRpdGlvbmFsVGV4dHVyZXMucHVzaChiYWJ5bG9uTWF0ZXJpYWwuY2xlYXJDb2F0LmJ1bXBUZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBhZGRpdGlvbmFsVGV4dHVyZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcG9zdEV4cG9ydE1hdGVyaWFsQXN5bmM/KGNvbnRleHQ6IHN0cmluZywgbm9kZTogSU1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsKTogUHJvbWlzZTxJTWF0ZXJpYWw+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbCBpbnN0YW5jZW9mIFBCUkJhc2VNYXRlcmlhbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFiYWJ5bG9uTWF0ZXJpYWwuY2xlYXJDb2F0LmlzRW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUobm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX3dhc1VzZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIG5vZGUuZXh0ZW5zaW9ucyA9IG5vZGUuZXh0ZW5zaW9ucyB8fCB7fTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjbGVhckNvYXRUZXh0dXJlSW5mbyA9IHRoaXMuX2V4cG9ydGVyLl9tYXRlcmlhbEV4cG9ydGVyLmdldFRleHR1cmVJbmZvKGJhYnlsb25NYXRlcmlhbC5jbGVhckNvYXQudGV4dHVyZSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2xlYXJDb2F0VGV4dHVyZVJvdWdobmVzc0luZm87XHJcbiAgICAgICAgICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsLmNsZWFyQ29hdC51c2VSb3VnaG5lc3NGcm9tTWFpblRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhckNvYXRUZXh0dXJlUm91Z2huZXNzSW5mbyA9IHRoaXMuX2V4cG9ydGVyLl9tYXRlcmlhbEV4cG9ydGVyLmdldFRleHR1cmVJbmZvKGJhYnlsb25NYXRlcmlhbC5jbGVhckNvYXQudGV4dHVyZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyQ29hdFRleHR1cmVSb3VnaG5lc3NJbmZvID0gdGhpcy5fZXhwb3J0ZXIuX21hdGVyaWFsRXhwb3J0ZXIuZ2V0VGV4dHVyZUluZm8oYmFieWxvbk1hdGVyaWFsLmNsZWFyQ29hdC50ZXh0dXJlUm91Z2huZXNzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsLmNsZWFyQ29hdC5pc1RpbnRFbmFibGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgVG9vbHMuV2FybihgQ2xlYXIgQ29sb3IgdGludCBpcyBub3Qgc3VwcG9ydGVkIGZvciBnbFRGIGV4cG9ydC4gSWdub3JpbmcgZm9yOiAke2JhYnlsb25NYXRlcmlhbC5uYW1lfWApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwuY2xlYXJDb2F0LnJlbWFwRjBPbkludGVyZmFjZUNoYW5nZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIFRvb2xzLldhcm4oYENsZWFyIENvbG9yIEYwIHJlbWFwcGluZyBpcyBub3Qgc3VwcG9ydGVkIGZvciBnbFRGIGV4cG9ydC4gSWdub3JpbmcgZm9yOiAke2JhYnlsb25NYXRlcmlhbC5uYW1lfWApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGNsZWFyQ29hdE5vcm1hbFRleHR1cmVJbmZvID0gdGhpcy5fZXhwb3J0ZXIuX21hdGVyaWFsRXhwb3J0ZXIuZ2V0VGV4dHVyZUluZm8oYmFieWxvbk1hdGVyaWFsLmNsZWFyQ29hdC5idW1wVGV4dHVyZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgY2xlYXJDb2F0SW5mbzogSUtIUk1hdGVyaWFsc0NsZWFyY29hdCA9IHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhcmNvYXRGYWN0b3I6IGJhYnlsb25NYXRlcmlhbC5jbGVhckNvYXQuaW50ZW5zaXR5LFxyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyY29hdFRleHR1cmU6IGNsZWFyQ29hdFRleHR1cmVJbmZvID8/IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICAgICBjbGVhcmNvYXRSb3VnaG5lc3NGYWN0b3I6IGJhYnlsb25NYXRlcmlhbC5jbGVhckNvYXQucm91Z2huZXNzLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyY29hdFJvdWdobmVzc1RleHR1cmU6IGNsZWFyQ29hdFRleHR1cmVSb3VnaG5lc3NJbmZvID8/IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICAgICBjbGVhcmNvYXROb3JtYWxUZXh0dXJlOiBjbGVhckNvYXROb3JtYWxUZXh0dXJlSW5mbyA/PyB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjbGVhckNvYXRJbmZvLmNsZWFyY29hdFRleHR1cmUgIT09IG51bGwgfHwgY2xlYXJDb2F0SW5mby5jbGVhcmNvYXRSb3VnaG5lc3NUZXh0dXJlICE9PSBudWxsIHx8IGNsZWFyQ29hdEluZm8uY2xlYXJjb2F0Um91Z2huZXNzVGV4dHVyZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2V4cG9ydGVyLl9tYXRlcmlhbE5lZWRzVVZzU2V0LmFkZChiYWJ5bG9uTWF0ZXJpYWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIG5vZGUuZXh0ZW5zaW9uc1tOQU1FXSA9IGNsZWFyQ29hdEluZm87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzb2x2ZShub2RlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuR0xURkV4cG9ydGVyLlJlZ2lzdGVyRXh0ZW5zaW9uKE5BTUUsIChleHBvcnRlcikgPT4gbmV3IEtIUl9tYXRlcmlhbHNfY2xlYXJjb2F0KGV4cG9ydGVyKSk7XHJcbiIsImltcG9ydCB0eXBlIHsgSU1hdGVyaWFsLCBJS0hSTWF0ZXJpYWxzRGlmZnVzZVRyYW5zbWlzc2lvbiB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHR5cGUgeyBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIgfSBmcm9tIFwiLi4vZ2xURkV4cG9ydGVyRXh0ZW5zaW9uXCI7XHJcbmltcG9ydCB7IEdMVEZFeHBvcnRlciB9IGZyb20gXCIuLi9nbFRGRXhwb3J0ZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBQQlJNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9QQlIvcGJyTWF0ZXJpYWxcIjtcclxuaW1wb3J0IHR5cGUgeyBCYXNlVGV4dHVyZSB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9UZXh0dXJlcy9iYXNlVGV4dHVyZVwiO1xyXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiY29yZS9NaXNjL2xvZ2dlclwiO1xyXG5pbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcImNvcmUvdHlwZXNcIjtcclxuXHJcbmNvbnN0IE5BTUUgPSBcIktIUl9tYXRlcmlhbHNfZGlmZnVzZV90cmFuc21pc3Npb25cIjtcclxuXHJcbi8qKlxyXG4gKiBHZXQgdGhlIGFwcHJvcHJpYXRlIHRyYW5zbHVjZW5jeSBpbnRlbnNpdHkgdGV4dHVyZSBmb3IgdGhlIG1hdGVyaWFsLlxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbmZ1bmN0aW9uIGdldFRyYW5zbHVjZW5jeUludGVuc2l0eVRleHR1cmUoY29udGV4dDogc3RyaW5nLCBiYWJ5bG9uTWF0ZXJpYWw6IFBCUk1hdGVyaWFsKTogTnVsbGFibGU8QmFzZVRleHR1cmU+IHtcclxuICAgIGNvbnN0IHN1YnMgPSBiYWJ5bG9uTWF0ZXJpYWwuc3ViU3VyZmFjZTtcclxuICAgIGxldCB0ZXh0dXJlID0gbnVsbDtcclxuXHJcbiAgICAvLyBDaGVjayBpZiB0cmFuc2x1Y2VuY3kgaW50ZW5zaXR5IHRleHR1cmUgaXMgYXZhaWxhYmxlIG9yIGNhbiBiZSBkZXJpdmVkIGZyb20gdGhpY2tuZXNzIHRleHR1cmVcclxuICAgIGlmIChzdWJzLnRyYW5zbHVjZW5jeUludGVuc2l0eVRleHR1cmUpIHtcclxuICAgICAgICB0ZXh0dXJlID0gc3Vicy50cmFuc2x1Y2VuY3lJbnRlbnNpdHlUZXh0dXJlO1xyXG4gICAgfSBlbHNlIGlmIChzdWJzLnRoaWNrbmVzc1RleHR1cmUgJiYgc3Vicy51c2VNYXNrRnJvbVRoaWNrbmVzc1RleHR1cmUpIHtcclxuICAgICAgICB0ZXh0dXJlID0gc3Vicy50aGlja25lc3NUZXh0dXJlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0ZXh0dXJlICYmICFzdWJzLnVzZUdsdGZTdHlsZVRleHR1cmVzKSB7XHJcbiAgICAgICAgTG9nZ2VyLldhcm4oYCR7Y29udGV4dH06IFRyYW5zbHVjZW5jeSBpbnRlbnNpdHkgdGV4dHVyZSBpcyBub3Qgc3VwcG9ydGVkIHdoZW4gdXNlR2x0ZlN0eWxlVGV4dHVyZXMgPSBmYWxzZS4gSWdub3JpbmcgZm9yOiAke2JhYnlsb25NYXRlcmlhbC5uYW1lfWAsIDEpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0ZXh0dXJlO1xyXG59XHJcblxyXG4vKipcclxuICogW1Byb3Bvc2VkIFNwZWNpZmljYXRpb25dKGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9wdWxsLzE4MjUpXHJcbiAqICEhISBFeHBlcmltZW50YWwgRXh0ZW5zaW9uIFN1YmplY3QgdG8gQ2hhbmdlcyAhISFcclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGNsYXNzIEtIUl9tYXRlcmlhbHNfZGlmZnVzZV90cmFuc21pc3Npb24gaW1wbGVtZW50cyBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIge1xyXG4gICAgLyoqIE5hbWUgb2YgdGhpcyBleHRlbnNpb24gKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lID0gTkFNRTtcclxuXHJcbiAgICAvKiogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIGVuYWJsZWQgKi9cclxuICAgIHB1YmxpYyBlbmFibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAvKiogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIHJlcXVpcmVkICovXHJcbiAgICBwdWJsaWMgcmVxdWlyZWQgPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIF9leHBvcnRlcjogR0xURkV4cG9ydGVyO1xyXG5cclxuICAgIHByaXZhdGUgX3dhc1VzZWQgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihleHBvcnRlcjogR0xURkV4cG9ydGVyKSB7XHJcbiAgICAgICAgdGhpcy5fZXhwb3J0ZXIgPSBleHBvcnRlcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHt9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGdldCB3YXNVc2VkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl93YXNVc2VkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWZ0ZXIgZXhwb3J0aW5nIGEgbWF0ZXJpYWwsIGRlYWwgd2l0aCBhZGRpdGlvbmFsIHRleHR1cmVzXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBHTFRGIGNvbnRleHQgb2YgdGhlIG1hdGVyaWFsXHJcbiAgICAgKiBAcGFyYW0gbm9kZSBleHBvcnRlZCBHTFRGIG5vZGVcclxuICAgICAqIEBwYXJhbSBiYWJ5bG9uTWF0ZXJpYWwgY29ycmVzcG9uZGluZyBiYWJ5bG9uIG1hdGVyaWFsXHJcbiAgICAgKiBAcmV0dXJucyBhcnJheSBvZiBhZGRpdGlvbmFsIHRleHR1cmVzIHRvIGV4cG9ydFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcG9zdEV4cG9ydE1hdGVyaWFsQWRkaXRpb25hbFRleHR1cmVzPyhjb250ZXh0OiBzdHJpbmcsIG5vZGU6IElNYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCk6IEJhc2VUZXh0dXJlW10ge1xyXG4gICAgICAgIGNvbnN0IGFkZGl0aW9uYWxUZXh0dXJlczogQmFzZVRleHR1cmVbXSA9IFtdO1xyXG5cclxuICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsIGluc3RhbmNlb2YgUEJSTWF0ZXJpYWwgJiYgdGhpcy5faXNFeHRlbnNpb25FbmFibGVkKGJhYnlsb25NYXRlcmlhbCkpIHtcclxuICAgICAgICAgICAgY29uc3QgdHJhbnNsdWNlbmN5SW50ZW5zaXR5VGV4dHVyZSA9IGdldFRyYW5zbHVjZW5jeUludGVuc2l0eVRleHR1cmUoY29udGV4dCwgYmFieWxvbk1hdGVyaWFsKTtcclxuICAgICAgICAgICAgaWYgKHRyYW5zbHVjZW5jeUludGVuc2l0eVRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgIGFkZGl0aW9uYWxUZXh0dXJlcy5wdXNoKHRyYW5zbHVjZW5jeUludGVuc2l0eVRleHR1cmUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwuc3ViU3VyZmFjZS50cmFuc2x1Y2VuY3lDb2xvclRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgIGFkZGl0aW9uYWxUZXh0dXJlcy5wdXNoKGJhYnlsb25NYXRlcmlhbC5zdWJTdXJmYWNlLnRyYW5zbHVjZW5jeUNvbG9yVGV4dHVyZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGFkZGl0aW9uYWxUZXh0dXJlcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBhZGRpdGlvbmFsVGV4dHVyZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfaXNFeHRlbnNpb25FbmFibGVkKG1hdDogUEJSTWF0ZXJpYWwpOiBib29sZWFuIHtcclxuICAgICAgICAvLyBUaGlzIGV4dGVuc2lvbiBtdXN0IG5vdCBiZSB1c2VkIG9uIGEgbWF0ZXJpYWwgdGhhdCBhbHNvIHVzZXMgS0hSX21hdGVyaWFsc191bmxpdFxyXG4gICAgICAgIGlmIChtYXQudW5saXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzdWJzID0gbWF0LnN1YlN1cmZhY2U7XHJcbiAgICAgICAgaWYgKCFzdWJzLmlzVHJhbnNsdWNlbmN5RW5hYmxlZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAhbWF0LnVubGl0ICYmXHJcbiAgICAgICAgICAgICFzdWJzLnVzZUFsYmVkb1RvVGludFRyYW5zbHVjZW5jeSAmJlxyXG4gICAgICAgICAgICBzdWJzLnVzZUdsdGZTdHlsZVRleHR1cmVzICYmXHJcbiAgICAgICAgICAgIHN1YnMudm9sdW1lSW5kZXhPZlJlZnJhY3Rpb24gPT09IDEgJiZcclxuICAgICAgICAgICAgc3Vicy5taW5pbXVtVGhpY2tuZXNzID09PSAwICYmXHJcbiAgICAgICAgICAgIHN1YnMubWF4aW11bVRoaWNrbmVzcyA9PT0gMFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZnRlciBleHBvcnRpbmcgYSBtYXRlcmlhbFxyXG4gICAgICogQHBhcmFtIGNvbnRleHQgR0xURiBjb250ZXh0IG9mIHRoZSBtYXRlcmlhbFxyXG4gICAgICogQHBhcmFtIG5vZGUgZXhwb3J0ZWQgR0xURiBub2RlXHJcbiAgICAgKiBAcGFyYW0gYmFieWxvbk1hdGVyaWFsIGNvcnJlc3BvbmRpbmcgYmFieWxvbiBtYXRlcmlhbFxyXG4gICAgICogQHJldHVybnMgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIHVwZGF0ZWQgbm9kZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcG9zdEV4cG9ydE1hdGVyaWFsQXN5bmM/KGNvbnRleHQ6IHN0cmluZywgbm9kZTogSU1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsKTogUHJvbWlzZTxJTWF0ZXJpYWw+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbCBpbnN0YW5jZW9mIFBCUk1hdGVyaWFsICYmIHRoaXMuX2lzRXh0ZW5zaW9uRW5hYmxlZChiYWJ5bG9uTWF0ZXJpYWwpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl93YXNVc2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdWJzID0gYmFieWxvbk1hdGVyaWFsLnN1YlN1cmZhY2U7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0cmFuc2x1Y2VuY3lJbnRlbnNpdHlUZXh0dXJlID0gZ2V0VHJhbnNsdWNlbmN5SW50ZW5zaXR5VGV4dHVyZShjb250ZXh0LCBiYWJ5bG9uTWF0ZXJpYWwpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpZmZ1c2VUcmFuc21pc3Npb25GYWN0b3IgPSBzdWJzLnRyYW5zbHVjZW5jeUludGVuc2l0eSA9PSAwID8gdW5kZWZpbmVkIDogc3Vicy50cmFuc2x1Y2VuY3lJbnRlbnNpdHk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkaWZmdXNlVHJhbnNtaXNzaW9uVGV4dHVyZSA9IHRoaXMuX2V4cG9ydGVyLl9tYXRlcmlhbEV4cG9ydGVyLmdldFRleHR1cmVJbmZvKHRyYW5zbHVjZW5jeUludGVuc2l0eVRleHR1cmUpID8/IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpZmZ1c2VUcmFuc21pc3Npb25Db2xvckZhY3RvciA9ICFzdWJzLnRyYW5zbHVjZW5jeUNvbG9yIHx8IHN1YnMudHJhbnNsdWNlbmN5Q29sb3IuZXF1YWxzRmxvYXRzKDEuMCwgMS4wLCAxLjApID8gdW5kZWZpbmVkIDogc3Vicy50cmFuc2x1Y2VuY3lDb2xvci5hc0FycmF5KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkaWZmdXNlVHJhbnNtaXNzaW9uQ29sb3JUZXh0dXJlID0gdGhpcy5fZXhwb3J0ZXIuX21hdGVyaWFsRXhwb3J0ZXIuZ2V0VGV4dHVyZUluZm8oc3Vicy50cmFuc2x1Y2VuY3lDb2xvclRleHR1cmUpID8/IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkaWZmdXNlVHJhbnNtaXNzaW9uSW5mbzogSUtIUk1hdGVyaWFsc0RpZmZ1c2VUcmFuc21pc3Npb24gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlmZnVzZVRyYW5zbWlzc2lvbkZhY3RvcixcclxuICAgICAgICAgICAgICAgICAgICBkaWZmdXNlVHJhbnNtaXNzaW9uVGV4dHVyZSxcclxuICAgICAgICAgICAgICAgICAgICBkaWZmdXNlVHJhbnNtaXNzaW9uQ29sb3JGYWN0b3IsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlmZnVzZVRyYW5zbWlzc2lvbkNvbG9yVGV4dHVyZSxcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRpZmZ1c2VUcmFuc21pc3Npb25UZXh0dXJlIHx8IGRpZmZ1c2VUcmFuc21pc3Npb25Db2xvclRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9leHBvcnRlci5fbWF0ZXJpYWxOZWVkc1VWc1NldC5hZGQoYmFieWxvbk1hdGVyaWFsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBub2RlLmV4dGVuc2lvbnMgPSBub2RlLmV4dGVuc2lvbnMgfHwge307XHJcbiAgICAgICAgICAgICAgICBub2RlLmV4dGVuc2lvbnNbTkFNRV0gPSBkaWZmdXNlVHJhbnNtaXNzaW9uSW5mbztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXNvbHZlKG5vZGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5HTFRGRXhwb3J0ZXIuUmVnaXN0ZXJFeHRlbnNpb24oTkFNRSwgKGV4cG9ydGVyKSA9PiBuZXcgS0hSX21hdGVyaWFsc19kaWZmdXNlX3RyYW5zbWlzc2lvbihleHBvcnRlcikpO1xyXG4iLCJpbXBvcnQgdHlwZSB7IElNYXRlcmlhbCwgSUtIUk1hdGVyaWFsc0Rpc3BlcnNpb24gfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB0eXBlIHsgSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyIH0gZnJvbSBcIi4uL2dsVEZFeHBvcnRlckV4dGVuc2lvblwiO1xyXG5pbXBvcnQgeyBHTFRGRXhwb3J0ZXIgfSBmcm9tIFwiLi4vZ2xURkV4cG9ydGVyXCI7XHJcbmltcG9ydCB0eXBlIHsgTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgUEJSTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvUEJSL3Bick1hdGVyaWFsXCI7XHJcblxyXG5jb25zdCBOQU1FID0gXCJLSFJfbWF0ZXJpYWxzX2Rpc3BlcnNpb25cIjtcclxuXHJcbi8qKlxyXG4gKiBbU3BlY2lmaWNhdGlvbl0oaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvODdiZDY0YTdmNWUyM2M4NGI2YWVmMmU2MDgyMDY5NTgzZWQwZGRiNC9leHRlbnNpb25zLzIuMC9LaHJvbm9zL0tIUl9tYXRlcmlhbHNfZGlzcGVyc2lvbi9SRUFETUUubWQpXHJcbiAqIEBleHBlcmltZW50YWxcclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGNsYXNzIEtIUl9tYXRlcmlhbHNfZGlzcGVyc2lvbiBpbXBsZW1lbnRzIElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMiB7XHJcbiAgICAvKiogTmFtZSBvZiB0aGlzIGV4dGVuc2lvbiAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBOQU1FO1xyXG5cclxuICAgIC8qKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgZW5hYmxlZCAqL1xyXG4gICAgcHVibGljIGVuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgIC8qKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgcmVxdWlyZWQgKi9cclxuICAgIHB1YmxpYyByZXF1aXJlZCA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgX3dhc1VzZWQgPSBmYWxzZTtcclxuXHJcbiAgICAvKiogQ29uc3RydWN0b3IgKi9cclxuICAgIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgICAvKiogRGlzcG9zZSAqL1xyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7fVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBnZXQgd2FzVXNlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fd2FzVXNlZDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9pc0V4dGVuc2lvbkVuYWJsZWQobWF0OiBQQlJNYXRlcmlhbCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIC8vIFRoaXMgZXh0ZW5zaW9uIG11c3Qgbm90IGJlIHVzZWQgb24gYSBtYXRlcmlhbCB0aGF0IGFsc28gdXNlcyBLSFJfbWF0ZXJpYWxzX3VubGl0XHJcbiAgICAgICAgaWYgKG1hdC51bmxpdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHN1YnMgPSBtYXQuc3ViU3VyZmFjZTtcclxuICAgICAgICAvLyB0aGlzIGV4dGVuc2lvbiByZXF1aXJlcyByZWZyYWN0aW9uIHRvIGJlIGVuYWJsZWQuXHJcbiAgICAgICAgaWYgKCFzdWJzLmlzUmVmcmFjdGlvbkVuYWJsZWQgJiYgIXN1YnMuaXNEaXNwZXJzaW9uRW5hYmxlZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWZ0ZXIgZXhwb3J0aW5nIGEgbWF0ZXJpYWxcclxuICAgICAqIEBwYXJhbSBjb250ZXh0IEdMVEYgY29udGV4dCBvZiB0aGUgbWF0ZXJpYWxcclxuICAgICAqIEBwYXJhbSBub2RlIGV4cG9ydGVkIEdMVEYgbm9kZVxyXG4gICAgICogQHBhcmFtIGJhYnlsb25NYXRlcmlhbCBjb3JyZXNwb25kaW5nIGJhYnlsb24gbWF0ZXJpYWxcclxuICAgICAqIEByZXR1cm5zIHByb21pc2UsIHJlc29sdmVzIHdpdGggdGhlIG1hdGVyaWFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwb3N0RXhwb3J0TWF0ZXJpYWxBc3luYz8oY29udGV4dDogc3RyaW5nLCBub2RlOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBQcm9taXNlPElNYXRlcmlhbD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsIGluc3RhbmNlb2YgUEJSTWF0ZXJpYWwgJiYgdGhpcy5faXNFeHRlbnNpb25FbmFibGVkKGJhYnlsb25NYXRlcmlhbCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3dhc1VzZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHN1YnMgPSBiYWJ5bG9uTWF0ZXJpYWwuc3ViU3VyZmFjZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpc3BlcnNpb24gPSBzdWJzLmRpc3BlcnNpb247XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZGlzcGVyc2lvbkluZm86IElLSFJNYXRlcmlhbHNEaXNwZXJzaW9uID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BlcnNpb246IGRpc3BlcnNpb24sXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgbm9kZS5leHRlbnNpb25zID0gbm9kZS5leHRlbnNpb25zIHx8IHt9O1xyXG4gICAgICAgICAgICAgICAgbm9kZS5leHRlbnNpb25zW05BTUVdID0gZGlzcGVyc2lvbkluZm87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzb2x2ZShub2RlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuR0xURkV4cG9ydGVyLlJlZ2lzdGVyRXh0ZW5zaW9uKE5BTUUsICgpID0+IG5ldyBLSFJfbWF0ZXJpYWxzX2Rpc3BlcnNpb24oKSk7XHJcbiIsImltcG9ydCB0eXBlIHsgSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyIH0gZnJvbSBcIi4uL2dsVEZFeHBvcnRlckV4dGVuc2lvblwiO1xyXG5pbXBvcnQgeyBHTFRGRXhwb3J0ZXIgfSBmcm9tIFwiLi4vZ2xURkV4cG9ydGVyXCI7XHJcbmltcG9ydCB0eXBlIHsgTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgUEJSTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvUEJSL3Bick1hdGVyaWFsXCI7XHJcbmltcG9ydCB0eXBlIHsgSU1hdGVyaWFsLCBJS0hSTWF0ZXJpYWxzRW1pc3NpdmVTdHJlbmd0aCB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuXHJcbmNvbnN0IE5BTUUgPSBcIktIUl9tYXRlcmlhbHNfZW1pc3NpdmVfc3RyZW5ndGhcIjtcclxuXHJcbi8qKlxyXG4gKiBbU3BlY2lmaWNhdGlvbl0oaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFpbi9leHRlbnNpb25zLzIuMC9LaHJvbm9zL0tIUl9tYXRlcmlhbHNfZW1pc3NpdmVfc3RyZW5ndGgvUkVBRE1FLm1kKVxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgY2xhc3MgS0hSX21hdGVyaWFsc19lbWlzc2l2ZV9zdHJlbmd0aCBpbXBsZW1lbnRzIElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMiB7XHJcbiAgICAvKiogTmFtZSBvZiB0aGlzIGV4dGVuc2lvbiAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBOQU1FO1xyXG5cclxuICAgIC8qKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgZW5hYmxlZCAqL1xyXG4gICAgcHVibGljIGVuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgIC8qKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgcmVxdWlyZWQgKi9cclxuICAgIHB1YmxpYyByZXF1aXJlZCA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgX3dhc1VzZWQgPSBmYWxzZTtcclxuXHJcbiAgICAvKiogRGlzcG9zZSAqL1xyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7fVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBnZXQgd2FzVXNlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fd2FzVXNlZDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFmdGVyIGV4cG9ydGluZyBhIG1hdGVyaWFsXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBHTFRGIGNvbnRleHQgb2YgdGhlIG1hdGVyaWFsXHJcbiAgICAgKiBAcGFyYW0gbm9kZSBleHBvcnRlZCBHTFRGIG5vZGVcclxuICAgICAqIEBwYXJhbSBiYWJ5bG9uTWF0ZXJpYWwgY29ycmVzcG9uZGluZyBiYWJ5bG9uIG1hdGVyaWFsXHJcbiAgICAgKiBAcmV0dXJucyBwcm9taXNlLCByZXNvbHZlcyB3aXRoIHRoZSBtYXRlcmlhbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcG9zdEV4cG9ydE1hdGVyaWFsQXN5bmMoY29udGV4dDogc3RyaW5nLCBub2RlOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBQcm9taXNlPElNYXRlcmlhbD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIShiYWJ5bG9uTWF0ZXJpYWwgaW5zdGFuY2VvZiBQQlJNYXRlcmlhbCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKG5vZGUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBlbWlzc2l2ZUNvbG9yID0gYmFieWxvbk1hdGVyaWFsLmVtaXNzaXZlQ29sb3IuYXNBcnJheSgpO1xyXG4gICAgICAgICAgICBjb25zdCB0ZW1wRW1pc3NpdmVTdHJlbmd0aCA9IE1hdGgubWF4KC4uLmVtaXNzaXZlQ29sb3IpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRlbXBFbWlzc2l2ZVN0cmVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fd2FzVXNlZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgbm9kZS5leHRlbnNpb25zIHx8PSB7fTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbWlzc2l2ZVN0cmVuZ3RoSW5mbzogSUtIUk1hdGVyaWFsc0VtaXNzaXZlU3RyZW5ndGggPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW1pc3NpdmVTdHJlbmd0aDogdGVtcEVtaXNzaXZlU3RyZW5ndGgsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIE5vcm1hbGl6ZSBlYWNoIHZhbHVlIG9mIHRoZSBlbWlzc2l2ZSBmYWN0b3IgdG8gaGF2ZSBhIG1heCB2YWx1ZSBvZiAxXHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdFbWlzc2l2ZUZhY3RvciA9IGJhYnlsb25NYXRlcmlhbC5lbWlzc2l2ZUNvbG9yLnNjYWxlKDEgLyBlbWlzc2l2ZVN0cmVuZ3RoSW5mby5lbWlzc2l2ZVN0cmVuZ3RoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBub2RlLmVtaXNzaXZlRmFjdG9yID0gbmV3RW1pc3NpdmVGYWN0b3IuYXNBcnJheSgpO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5leHRlbnNpb25zW05BTUVdID0gZW1pc3NpdmVTdHJlbmd0aEluZm87XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKG5vZGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5HTFRGRXhwb3J0ZXIuUmVnaXN0ZXJFeHRlbnNpb24oTkFNRSwgKGV4cG9ydGVyKSA9PiBuZXcgS0hSX21hdGVyaWFsc19lbWlzc2l2ZV9zdHJlbmd0aCgpKTtcclxuIiwiaW1wb3J0IHR5cGUgeyBJTWF0ZXJpYWwsIElLSFJNYXRlcmlhbHNJb3IgfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB0eXBlIHsgSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyIH0gZnJvbSBcIi4uL2dsVEZFeHBvcnRlckV4dGVuc2lvblwiO1xyXG5pbXBvcnQgeyBHTFRGRXhwb3J0ZXIgfSBmcm9tIFwiLi4vZ2xURkV4cG9ydGVyXCI7XHJcbmltcG9ydCB0eXBlIHsgTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgUEJSTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvUEJSL3Bick1hdGVyaWFsXCI7XHJcblxyXG5jb25zdCBOQU1FID0gXCJLSFJfbWF0ZXJpYWxzX2lvclwiO1xyXG5cclxuLyoqXHJcbiAqIFtTcGVjaWZpY2F0aW9uXShodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi9tYWluL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX21hdGVyaWFsc19pb3IvUkVBRE1FLm1kKVxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgY2xhc3MgS0hSX21hdGVyaWFsc19pb3IgaW1wbGVtZW50cyBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIge1xyXG4gICAgLyoqIE5hbWUgb2YgdGhpcyBleHRlbnNpb24gKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lID0gTkFNRTtcclxuXHJcbiAgICAvKiogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIGVuYWJsZWQgKi9cclxuICAgIHB1YmxpYyBlbmFibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAvKiogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIHJlcXVpcmVkICovXHJcbiAgICBwdWJsaWMgcmVxdWlyZWQgPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIF93YXNVc2VkID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICAgIC8qKiBEaXNwb3NlICovXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHt9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGdldCB3YXNVc2VkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl93YXNVc2VkO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2lzRXh0ZW5zaW9uRW5hYmxlZChtYXQ6IFBCUk1hdGVyaWFsKTogYm9vbGVhbiB7XHJcbiAgICAgICAgLy8gVGhpcyBleHRlbnNpb24gbXVzdCBub3QgYmUgdXNlZCBvbiBhIG1hdGVyaWFsIHRoYXQgYWxzbyB1c2VzIEtIUl9tYXRlcmlhbHNfdW5saXRcclxuICAgICAgICBpZiAobWF0LnVubGl0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1hdC5pbmRleE9mUmVmcmFjdGlvbiAhPSB1bmRlZmluZWQgJiYgbWF0LmluZGV4T2ZSZWZyYWN0aW9uICE9IDEuNTsgLy8gMS41IGlzIG5vcm1hdGl2ZSBkZWZhdWx0IHZhbHVlLlxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWZ0ZXIgZXhwb3J0aW5nIGEgbWF0ZXJpYWxcclxuICAgICAqIEBwYXJhbSBjb250ZXh0IEdMVEYgY29udGV4dCBvZiB0aGUgbWF0ZXJpYWxcclxuICAgICAqIEBwYXJhbSBub2RlIGV4cG9ydGVkIEdMVEYgbm9kZVxyXG4gICAgICogQHBhcmFtIGJhYnlsb25NYXRlcmlhbCBjb3JyZXNwb25kaW5nIGJhYnlsb24gbWF0ZXJpYWxcclxuICAgICAqIEByZXR1cm5zIHByb21pc2UsIHJlc29sdmVzIHdpdGggdGhlIG1hdGVyaWFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwb3N0RXhwb3J0TWF0ZXJpYWxBc3luYz8oY29udGV4dDogc3RyaW5nLCBub2RlOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBQcm9taXNlPElNYXRlcmlhbD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsIGluc3RhbmNlb2YgUEJSTWF0ZXJpYWwgJiYgdGhpcy5faXNFeHRlbnNpb25FbmFibGVkKGJhYnlsb25NYXRlcmlhbCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3dhc1VzZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGlvckluZm86IElLSFJNYXRlcmlhbHNJb3IgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW9yOiBiYWJ5bG9uTWF0ZXJpYWwuaW5kZXhPZlJlZnJhY3Rpb24sXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgbm9kZS5leHRlbnNpb25zID0gbm9kZS5leHRlbnNpb25zIHx8IHt9O1xyXG4gICAgICAgICAgICAgICAgbm9kZS5leHRlbnNpb25zW05BTUVdID0gaW9ySW5mbztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXNvbHZlKG5vZGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXHJcbkdMVEZFeHBvcnRlci5SZWdpc3RlckV4dGVuc2lvbihOQU1FLCAoZXhwb3J0ZXIpID0+IG5ldyBLSFJfbWF0ZXJpYWxzX2lvcigpKTtcclxuIiwiaW1wb3J0IHR5cGUgeyBJTWF0ZXJpYWwsIElLSFJNYXRlcmlhbHNJcmlkZXNjZW5jZSB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHR5cGUgeyBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIgfSBmcm9tIFwiLi4vZ2xURkV4cG9ydGVyRXh0ZW5zaW9uXCI7XHJcbmltcG9ydCB7IEdMVEZFeHBvcnRlciB9IGZyb20gXCIuLi9nbFRGRXhwb3J0ZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBQQlJCYXNlTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvUEJSL3BickJhc2VNYXRlcmlhbFwiO1xyXG5pbXBvcnQgdHlwZSB7IEJhc2VUZXh0dXJlIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1RleHR1cmVzL2Jhc2VUZXh0dXJlXCI7XHJcblxyXG5jb25zdCBOQU1FID0gXCJLSFJfbWF0ZXJpYWxzX2lyaWRlc2NlbmNlXCI7XHJcblxyXG4vKipcclxuICogQGludGVybmFsXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBjbGFzcyBLSFJfbWF0ZXJpYWxzX2lyaWRlc2NlbmNlIGltcGxlbWVudHMgSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyIHtcclxuICAgIC8qKiBOYW1lIG9mIHRoaXMgZXh0ZW5zaW9uICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZSA9IE5BTUU7XHJcblxyXG4gICAgLyoqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyBlbmFibGVkICovXHJcbiAgICBwdWJsaWMgZW5hYmxlZCA9IHRydWU7XHJcblxyXG4gICAgLyoqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyByZXF1aXJlZCAqL1xyXG4gICAgcHVibGljIHJlcXVpcmVkID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBfZXhwb3J0ZXI6IEdMVEZFeHBvcnRlcjtcclxuXHJcbiAgICBwcml2YXRlIF93YXNVc2VkID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZXhwb3J0ZXI6IEdMVEZFeHBvcnRlcikge1xyXG4gICAgICAgIHRoaXMuX2V4cG9ydGVyID0gZXhwb3J0ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7fVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBnZXQgd2FzVXNlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fd2FzVXNlZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcG9zdEV4cG9ydE1hdGVyaWFsQWRkaXRpb25hbFRleHR1cmVzPyhjb250ZXh0OiBzdHJpbmcsIG5vZGU6IElNYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCk6IEJhc2VUZXh0dXJlW10ge1xyXG4gICAgICAgIGNvbnN0IGFkZGl0aW9uYWxUZXh0dXJlczogQmFzZVRleHR1cmVbXSA9IFtdO1xyXG4gICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwgaW5zdGFuY2VvZiBQQlJCYXNlTWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbC5pcmlkZXNjZW5jZS5pc0VuYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwuaXJpZGVzY2VuY2UudGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZGl0aW9uYWxUZXh0dXJlcy5wdXNoKGJhYnlsb25NYXRlcmlhbC5pcmlkZXNjZW5jZS50ZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwuaXJpZGVzY2VuY2UudGhpY2tuZXNzVGV4dHVyZSAmJiBiYWJ5bG9uTWF0ZXJpYWwuaXJpZGVzY2VuY2UudGhpY2tuZXNzVGV4dHVyZSAhPT0gYmFieWxvbk1hdGVyaWFsLmlyaWRlc2NlbmNlLnRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRpdGlvbmFsVGV4dHVyZXMucHVzaChiYWJ5bG9uTWF0ZXJpYWwuaXJpZGVzY2VuY2UudGhpY2tuZXNzVGV4dHVyZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYWRkaXRpb25hbFRleHR1cmVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBvc3RFeHBvcnRNYXRlcmlhbEFzeW5jPyhjb250ZXh0OiBzdHJpbmcsIG5vZGU6IElNYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCk6IFByb21pc2U8SU1hdGVyaWFsPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwgaW5zdGFuY2VvZiBQQlJCYXNlTWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgICAgIGlmICghYmFieWxvbk1hdGVyaWFsLmlyaWRlc2NlbmNlLmlzRW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUobm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX3dhc1VzZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIG5vZGUuZXh0ZW5zaW9ucyA9IG5vZGUuZXh0ZW5zaW9ucyB8fCB7fTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBpcmlkZXNjZW5jZVRleHR1cmVJbmZvID0gdGhpcy5fZXhwb3J0ZXIuX21hdGVyaWFsRXhwb3J0ZXIuZ2V0VGV4dHVyZUluZm8oYmFieWxvbk1hdGVyaWFsLmlyaWRlc2NlbmNlLnRleHR1cmUpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXJpZGVzY2VuY2VUaGlja25lc3NUZXh0dXJlSW5mbyA9IHRoaXMuX2V4cG9ydGVyLl9tYXRlcmlhbEV4cG9ydGVyLmdldFRleHR1cmVJbmZvKGJhYnlsb25NYXRlcmlhbC5pcmlkZXNjZW5jZS50aGlja25lc3NUZXh0dXJlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBpcmlkZXNjZW5jZUluZm86IElLSFJNYXRlcmlhbHNJcmlkZXNjZW5jZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBpcmlkZXNjZW5jZUZhY3RvcjogYmFieWxvbk1hdGVyaWFsLmlyaWRlc2NlbmNlLmludGVuc2l0eSxcclxuICAgICAgICAgICAgICAgICAgICBpcmlkZXNjZW5jZUlvcjogYmFieWxvbk1hdGVyaWFsLmlyaWRlc2NlbmNlLmluZGV4T2ZSZWZyYWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIGlyaWRlc2NlbmNlVGhpY2tuZXNzTWluaW11bTogYmFieWxvbk1hdGVyaWFsLmlyaWRlc2NlbmNlLm1pbmltdW1UaGlja25lc3MsXHJcbiAgICAgICAgICAgICAgICAgICAgaXJpZGVzY2VuY2VUaGlja25lc3NNYXhpbXVtOiBiYWJ5bG9uTWF0ZXJpYWwuaXJpZGVzY2VuY2UubWF4aW11bVRoaWNrbmVzcyxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaXJpZGVzY2VuY2VUZXh0dXJlOiBpcmlkZXNjZW5jZVRleHR1cmVJbmZvID8/IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICAgICBpcmlkZXNjZW5jZVRoaWNrbmVzc1RleHR1cmU6IGlyaWRlc2NlbmNlVGhpY2tuZXNzVGV4dHVyZUluZm8gPz8gdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaXJpZGVzY2VuY2VJbmZvLmlyaWRlc2NlbmNlVGV4dHVyZSAhPT0gbnVsbCB8fCBpcmlkZXNjZW5jZUluZm8uaXJpZGVzY2VuY2VUaGlja25lc3NUZXh0dXJlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXhwb3J0ZXIuX21hdGVyaWFsTmVlZHNVVnNTZXQuYWRkKGJhYnlsb25NYXRlcmlhbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbm9kZS5leHRlbnNpb25zW05BTUVdID0gaXJpZGVzY2VuY2VJbmZvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc29sdmUobm9kZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkdMVEZFeHBvcnRlci5SZWdpc3RlckV4dGVuc2lvbihOQU1FLCAoZXhwb3J0ZXIpID0+IG5ldyBLSFJfbWF0ZXJpYWxzX2lyaWRlc2NlbmNlKGV4cG9ydGVyKSk7XHJcbiIsImltcG9ydCB0eXBlIHsgSU1hdGVyaWFsLCBJS0hSTWF0ZXJpYWxzU2hlZW4gfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB0eXBlIHsgSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyIH0gZnJvbSBcIi4uL2dsVEZFeHBvcnRlckV4dGVuc2lvblwiO1xyXG5pbXBvcnQgeyBHTFRGRXhwb3J0ZXIgfSBmcm9tIFwiLi4vZ2xURkV4cG9ydGVyXCI7XHJcbmltcG9ydCB0eXBlIHsgTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgUEJSTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvUEJSL3Bick1hdGVyaWFsXCI7XHJcbmltcG9ydCB0eXBlIHsgQmFzZVRleHR1cmUgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvYmFzZVRleHR1cmVcIjtcclxuXHJcbmNvbnN0IE5BTUUgPSBcIktIUl9tYXRlcmlhbHNfc2hlZW5cIjtcclxuXHJcbi8qKlxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGNsYXNzIEtIUl9tYXRlcmlhbHNfc2hlZW4gaW1wbGVtZW50cyBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIge1xyXG4gICAgLyoqIE5hbWUgb2YgdGhpcyBleHRlbnNpb24gKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lID0gTkFNRTtcclxuXHJcbiAgICAvKiogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIGVuYWJsZWQgKi9cclxuICAgIHB1YmxpYyBlbmFibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAvKiogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIHJlcXVpcmVkICovXHJcbiAgICBwdWJsaWMgcmVxdWlyZWQgPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIF93YXNVc2VkID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBfZXhwb3J0ZXI6IEdMVEZFeHBvcnRlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihleHBvcnRlcjogR0xURkV4cG9ydGVyKSB7XHJcbiAgICAgICAgdGhpcy5fZXhwb3J0ZXIgPSBleHBvcnRlcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHt9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGdldCB3YXNVc2VkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl93YXNVc2VkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwb3N0RXhwb3J0TWF0ZXJpYWxBZGRpdGlvbmFsVGV4dHVyZXMoY29udGV4dDogc3RyaW5nLCBub2RlOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBCYXNlVGV4dHVyZVtdIHtcclxuICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsIGluc3RhbmNlb2YgUEJSTWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbC5zaGVlbi5pc0VuYWJsZWQgJiYgYmFieWxvbk1hdGVyaWFsLnNoZWVuLnRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbYmFieWxvbk1hdGVyaWFsLnNoZWVuLnRleHR1cmVdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBvc3RFeHBvcnRNYXRlcmlhbEFzeW5jKGNvbnRleHQ6IHN0cmluZywgbm9kZTogSU1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsKTogUHJvbWlzZTxJTWF0ZXJpYWw+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbCBpbnN0YW5jZW9mIFBCUk1hdGVyaWFsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWJhYnlsb25NYXRlcmlhbC5zaGVlbi5pc0VuYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl93YXNVc2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5leHRlbnNpb25zID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLmV4dGVuc2lvbnMgPSB7fTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IHNoZWVuSW5mbzogSUtIUk1hdGVyaWFsc1NoZWVuID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNoZWVuQ29sb3JGYWN0b3I6IGJhYnlsb25NYXRlcmlhbC5zaGVlbi5jb2xvci5hc0FycmF5KCksXHJcbiAgICAgICAgICAgICAgICAgICAgc2hlZW5Sb3VnaG5lc3NGYWN0b3I6IGJhYnlsb25NYXRlcmlhbC5zaGVlbi5yb3VnaG5lc3MgPz8gMCxcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHNoZWVuSW5mby5zaGVlbkNvbG9yVGV4dHVyZSAhPT0gbnVsbCB8fCBzaGVlbkluZm8uc2hlZW5Sb3VnaG5lc3NUZXh0dXJlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXhwb3J0ZXIuX21hdGVyaWFsTmVlZHNVVnNTZXQuYWRkKGJhYnlsb25NYXRlcmlhbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbC5zaGVlbi50ZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hlZW5JbmZvLnNoZWVuQ29sb3JUZXh0dXJlID0gdGhpcy5fZXhwb3J0ZXIuX21hdGVyaWFsRXhwb3J0ZXIuZ2V0VGV4dHVyZUluZm8oYmFieWxvbk1hdGVyaWFsLnNoZWVuLnRleHR1cmUpID8/IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsLnNoZWVuLnRleHR1cmVSb3VnaG5lc3MgJiYgIWJhYnlsb25NYXRlcmlhbC5zaGVlbi51c2VSb3VnaG5lc3NGcm9tTWFpblRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBzaGVlbkluZm8uc2hlZW5Sb3VnaG5lc3NUZXh0dXJlID0gdGhpcy5fZXhwb3J0ZXIuX21hdGVyaWFsRXhwb3J0ZXIuZ2V0VGV4dHVyZUluZm8oYmFieWxvbk1hdGVyaWFsLnNoZWVuLnRleHR1cmVSb3VnaG5lc3MpID8/IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYmFieWxvbk1hdGVyaWFsLnNoZWVuLnRleHR1cmUgJiYgYmFieWxvbk1hdGVyaWFsLnNoZWVuLnVzZVJvdWdobmVzc0Zyb21NYWluVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNoZWVuSW5mby5zaGVlblJvdWdobmVzc1RleHR1cmUgPSB0aGlzLl9leHBvcnRlci5fbWF0ZXJpYWxFeHBvcnRlci5nZXRUZXh0dXJlSW5mbyhiYWJ5bG9uTWF0ZXJpYWwuc2hlZW4udGV4dHVyZSkgPz8gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIG5vZGUuZXh0ZW5zaW9uc1tOQU1FXSA9IHNoZWVuSW5mbztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXNvbHZlKG5vZGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5HTFRGRXhwb3J0ZXIuUmVnaXN0ZXJFeHRlbnNpb24oTkFNRSwgKGV4cG9ydGVyKSA9PiBuZXcgS0hSX21hdGVyaWFsc19zaGVlbihleHBvcnRlcikpO1xyXG4iLCJpbXBvcnQgdHlwZSB7IElNYXRlcmlhbCwgSUtIUk1hdGVyaWFsc1NwZWN1bGFyIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgdHlwZSB7IElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMiB9IGZyb20gXCIuLi9nbFRGRXhwb3J0ZXJFeHRlbnNpb25cIjtcclxuaW1wb3J0IHsgR0xURkV4cG9ydGVyIH0gZnJvbSBcIi4uL2dsVEZFeHBvcnRlclwiO1xyXG5pbXBvcnQgdHlwZSB7IE1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IFBCUk1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1BCUi9wYnJNYXRlcmlhbFwiO1xyXG5pbXBvcnQgdHlwZSB7IEJhc2VUZXh0dXJlIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1RleHR1cmVzL2Jhc2VUZXh0dXJlXCI7XHJcblxyXG5jb25zdCBOQU1FID0gXCJLSFJfbWF0ZXJpYWxzX3NwZWN1bGFyXCI7XHJcblxyXG4vKipcclxuICogW1NwZWNpZmljYXRpb25dKGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9ibG9iL21haW4vZXh0ZW5zaW9ucy8yLjAvS2hyb25vcy9LSFJfbWF0ZXJpYWxzX3NwZWN1bGFyL1JFQURNRS5tZClcclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGNsYXNzIEtIUl9tYXRlcmlhbHNfc3BlY3VsYXIgaW1wbGVtZW50cyBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIge1xyXG4gICAgLyoqIE5hbWUgb2YgdGhpcyBleHRlbnNpb24gKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lID0gTkFNRTtcclxuXHJcbiAgICAvKiogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIGVuYWJsZWQgKi9cclxuICAgIHB1YmxpYyBlbmFibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAvKiogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIHJlcXVpcmVkICovXHJcbiAgICBwdWJsaWMgcmVxdWlyZWQgPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIF9leHBvcnRlcjogR0xURkV4cG9ydGVyO1xyXG5cclxuICAgIHByaXZhdGUgX3dhc1VzZWQgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihleHBvcnRlcjogR0xURkV4cG9ydGVyKSB7XHJcbiAgICAgICAgdGhpcy5fZXhwb3J0ZXIgPSBleHBvcnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAvKiogRGlzcG9zZSAqL1xyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7fVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBnZXQgd2FzVXNlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fd2FzVXNlZDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFmdGVyIGV4cG9ydGluZyBhIG1hdGVyaWFsLCBkZWFsIHdpdGggdGhlIGFkZGl0aW9uYWwgdGV4dHVyZXNcclxuICAgICAqIEBwYXJhbSBjb250ZXh0IEdMVEYgY29udGV4dCBvZiB0aGUgbWF0ZXJpYWxcclxuICAgICAqIEBwYXJhbSBub2RlIGV4cG9ydGVkIEdMVEYgbm9kZVxyXG4gICAgICogQHBhcmFtIGJhYnlsb25NYXRlcmlhbCBjb3JyZXNwb25kaW5nIGJhYnlsb24gbWF0ZXJpYWxcclxuICAgICAqIEByZXR1cm5zIGFycmF5IG9mIGFkZGl0aW9uYWwgdGV4dHVyZXMgdG8gZXhwb3J0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwb3N0RXhwb3J0TWF0ZXJpYWxBZGRpdGlvbmFsVGV4dHVyZXM/KGNvbnRleHQ6IHN0cmluZywgbm9kZTogSU1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsKTogQmFzZVRleHR1cmVbXSB7XHJcbiAgICAgICAgY29uc3QgYWRkaXRpb25hbFRleHR1cmVzOiBCYXNlVGV4dHVyZVtdID0gW107XHJcblxyXG4gICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwgaW5zdGFuY2VvZiBQQlJNYXRlcmlhbCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5faXNFeHRlbnNpb25FbmFibGVkKGJhYnlsb25NYXRlcmlhbCkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwubWV0YWxsaWNSZWZsZWN0YW5jZVRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRpdGlvbmFsVGV4dHVyZXMucHVzaChiYWJ5bG9uTWF0ZXJpYWwubWV0YWxsaWNSZWZsZWN0YW5jZVRleHR1cmUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbC5yZWZsZWN0YW5jZVRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRpdGlvbmFsVGV4dHVyZXMucHVzaChiYWJ5bG9uTWF0ZXJpYWwucmVmbGVjdGFuY2VUZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBhZGRpdGlvbmFsVGV4dHVyZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBhZGRpdGlvbmFsVGV4dHVyZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfaXNFeHRlbnNpb25FbmFibGVkKG1hdDogUEJSTWF0ZXJpYWwpOiBib29sZWFuIHtcclxuICAgICAgICAvLyBUaGlzIGV4dGVuc2lvbiBtdXN0IG5vdCBiZSB1c2VkIG9uIGEgbWF0ZXJpYWwgdGhhdCBhbHNvIHVzZXMgS0hSX21hdGVyaWFsc191bmxpdFxyXG4gICAgICAgIGlmIChtYXQudW5saXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAobWF0Lm1ldGFsbGljRjBGYWN0b3IgIT0gdW5kZWZpbmVkICYmIG1hdC5tZXRhbGxpY0YwRmFjdG9yICE9IDEuMCkgfHxcclxuICAgICAgICAgICAgKG1hdC5tZXRhbGxpY1JlZmxlY3RhbmNlQ29sb3IgIT0gdW5kZWZpbmVkICYmICFtYXQubWV0YWxsaWNSZWZsZWN0YW5jZUNvbG9yLmVxdWFsc0Zsb2F0cygxLjAsIDEuMCwgMS4wKSkgfHxcclxuICAgICAgICAgICAgdGhpcy5faGFzVGV4dHVyZXNFeHRlbnNpb24obWF0KVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfaGFzVGV4dHVyZXNFeHRlbnNpb24obWF0OiBQQlJNYXRlcmlhbCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBtYXQubWV0YWxsaWNSZWZsZWN0YW5jZVRleHR1cmUgIT0gbnVsbCB8fCBtYXQucmVmbGVjdGFuY2VUZXh0dXJlICE9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZnRlciBleHBvcnRpbmcgYSBtYXRlcmlhbFxyXG4gICAgICogQHBhcmFtIGNvbnRleHQgR0xURiBjb250ZXh0IG9mIHRoZSBtYXRlcmlhbFxyXG4gICAgICogQHBhcmFtIG5vZGUgZXhwb3J0ZWQgR0xURiBub2RlXHJcbiAgICAgKiBAcGFyYW0gYmFieWxvbk1hdGVyaWFsIGNvcnJlc3BvbmRpbmcgYmFieWxvbiBtYXRlcmlhbFxyXG4gICAgICogQHJldHVybnMgcHJvbWlzZSwgcmVzb2x2ZXMgd2l0aCB0aGUgbWF0ZXJpYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIHBvc3RFeHBvcnRNYXRlcmlhbEFzeW5jPyhjb250ZXh0OiBzdHJpbmcsIG5vZGU6IElNYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCk6IFByb21pc2U8SU1hdGVyaWFsPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwgaW5zdGFuY2VvZiBQQlJNYXRlcmlhbCAmJiB0aGlzLl9pc0V4dGVuc2lvbkVuYWJsZWQoYmFieWxvbk1hdGVyaWFsKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fd2FzVXNlZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgbm9kZS5leHRlbnNpb25zID0gbm9kZS5leHRlbnNpb25zIHx8IHt9O1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IG1ldGFsbGljUmVmbGVjdGFuY2VUZXh0dXJlID0gdGhpcy5fZXhwb3J0ZXIuX21hdGVyaWFsRXhwb3J0ZXIuZ2V0VGV4dHVyZUluZm8oYmFieWxvbk1hdGVyaWFsLm1ldGFsbGljUmVmbGVjdGFuY2VUZXh0dXJlKSA/PyB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZWZsZWN0YW5jZVRleHR1cmUgPSB0aGlzLl9leHBvcnRlci5fbWF0ZXJpYWxFeHBvcnRlci5nZXRUZXh0dXJlSW5mbyhiYWJ5bG9uTWF0ZXJpYWwucmVmbGVjdGFuY2VUZXh0dXJlKSA/PyB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtZXRhbGxpY0YwRmFjdG9yID0gYmFieWxvbk1hdGVyaWFsLm1ldGFsbGljRjBGYWN0b3IgPT0gMS4wID8gdW5kZWZpbmVkIDogYmFieWxvbk1hdGVyaWFsLm1ldGFsbGljRjBGYWN0b3I7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtZXRhbGxpY1JlZmxlY3RhbmNlQ29sb3IgPSBiYWJ5bG9uTWF0ZXJpYWwubWV0YWxsaWNSZWZsZWN0YW5jZUNvbG9yLmVxdWFsc0Zsb2F0cygxLjAsIDEuMCwgMS4wKVxyXG4gICAgICAgICAgICAgICAgICAgID8gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgOiBiYWJ5bG9uTWF0ZXJpYWwubWV0YWxsaWNSZWZsZWN0YW5jZUNvbG9yLmFzQXJyYXkoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzcGVjdWxhckluZm86IElLSFJNYXRlcmlhbHNTcGVjdWxhciA9IHtcclxuICAgICAgICAgICAgICAgICAgICBzcGVjdWxhckZhY3RvcjogbWV0YWxsaWNGMEZhY3RvcixcclxuICAgICAgICAgICAgICAgICAgICBzcGVjdWxhclRleHR1cmU6IG1ldGFsbGljUmVmbGVjdGFuY2VUZXh0dXJlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwZWN1bGFyQ29sb3JGYWN0b3I6IG1ldGFsbGljUmVmbGVjdGFuY2VDb2xvcixcclxuICAgICAgICAgICAgICAgICAgICBzcGVjdWxhckNvbG9yVGV4dHVyZTogcmVmbGVjdGFuY2VUZXh0dXJlLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5faGFzVGV4dHVyZXNFeHRlbnNpb24oYmFieWxvbk1hdGVyaWFsKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2V4cG9ydGVyLl9tYXRlcmlhbE5lZWRzVVZzU2V0LmFkZChiYWJ5bG9uTWF0ZXJpYWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIG5vZGUuZXh0ZW5zaW9uc1tOQU1FXSA9IHNwZWN1bGFySW5mbztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXNvbHZlKG5vZGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5HTFRGRXhwb3J0ZXIuUmVnaXN0ZXJFeHRlbnNpb24oTkFNRSwgKGV4cG9ydGVyKSA9PiBuZXcgS0hSX21hdGVyaWFsc19zcGVjdWxhcihleHBvcnRlcikpO1xyXG4iLCJpbXBvcnQgdHlwZSB7IElNYXRlcmlhbCwgSUtIUk1hdGVyaWFsc1RyYW5zbWlzc2lvbiB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgSW1hZ2VNaW1lVHlwZSB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHR5cGUgeyBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIgfSBmcm9tIFwiLi4vZ2xURkV4cG9ydGVyRXh0ZW5zaW9uXCI7XHJcbmltcG9ydCB7IEdMVEZFeHBvcnRlciB9IGZyb20gXCIuLi9nbFRGRXhwb3J0ZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBQQlJNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9QQlIvcGJyTWF0ZXJpYWxcIjtcclxuaW1wb3J0IHR5cGUgeyBCYXNlVGV4dHVyZSB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9UZXh0dXJlcy9iYXNlVGV4dHVyZVwiO1xyXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiY29yZS9NaXNjL2xvZ2dlclwiO1xyXG5cclxuY29uc3QgTkFNRSA9IFwiS0hSX21hdGVyaWFsc190cmFuc21pc3Npb25cIjtcclxuXHJcbi8qKlxyXG4gKiBbU3BlY2lmaWNhdGlvbl0oaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFpbi9leHRlbnNpb25zLzIuMC9LaHJvbm9zL0tIUl9tYXRlcmlhbHNfdHJhbnNtaXNzaW9uL1JFQURNRS5tZClcclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGNsYXNzIEtIUl9tYXRlcmlhbHNfdHJhbnNtaXNzaW9uIGltcGxlbWVudHMgSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyIHtcclxuICAgIC8qKiBOYW1lIG9mIHRoaXMgZXh0ZW5zaW9uICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZSA9IE5BTUU7XHJcblxyXG4gICAgLyoqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyBlbmFibGVkICovXHJcbiAgICBwdWJsaWMgZW5hYmxlZCA9IHRydWU7XHJcblxyXG4gICAgLyoqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyByZXF1aXJlZCAqL1xyXG4gICAgcHVibGljIHJlcXVpcmVkID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBfZXhwb3J0ZXI6IEdMVEZFeHBvcnRlcjtcclxuXHJcbiAgICBwcml2YXRlIF93YXNVc2VkID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZXhwb3J0ZXI6IEdMVEZFeHBvcnRlcikge1xyXG4gICAgICAgIHRoaXMuX2V4cG9ydGVyID0gZXhwb3J0ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIERpc3Bvc2UgKi9cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge31cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgZ2V0IHdhc1VzZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dhc1VzZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZnRlciBleHBvcnRpbmcgYSBtYXRlcmlhbCwgZGVhbCB3aXRoIGFkZGl0aW9uYWwgdGV4dHVyZXNcclxuICAgICAqIEBwYXJhbSBjb250ZXh0IEdMVEYgY29udGV4dCBvZiB0aGUgbWF0ZXJpYWxcclxuICAgICAqIEBwYXJhbSBub2RlIGV4cG9ydGVkIEdMVEYgbm9kZVxyXG4gICAgICogQHBhcmFtIGJhYnlsb25NYXRlcmlhbCBjb3JyZXNwb25kaW5nIGJhYnlsb24gbWF0ZXJpYWxcclxuICAgICAqIEByZXR1cm5zIGFycmF5IG9mIGFkZGl0aW9uYWwgdGV4dHVyZXMgdG8gZXhwb3J0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwb3N0RXhwb3J0TWF0ZXJpYWxBZGRpdGlvbmFsVGV4dHVyZXM/KGNvbnRleHQ6IHN0cmluZywgbm9kZTogSU1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsKTogQmFzZVRleHR1cmVbXSB7XHJcbiAgICAgICAgY29uc3QgYWRkaXRpb25hbFRleHR1cmVzOiBCYXNlVGV4dHVyZVtdID0gW107XHJcblxyXG4gICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwgaW5zdGFuY2VvZiBQQlJNYXRlcmlhbCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5faXNFeHRlbnNpb25FbmFibGVkKGJhYnlsb25NYXRlcmlhbCkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChiYWJ5bG9uTWF0ZXJpYWwuc3ViU3VyZmFjZS50aGlja25lc3NUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkaXRpb25hbFRleHR1cmVzLnB1c2goYmFieWxvbk1hdGVyaWFsLnN1YlN1cmZhY2UudGhpY2tuZXNzVGV4dHVyZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYWRkaXRpb25hbFRleHR1cmVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYWRkaXRpb25hbFRleHR1cmVzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2lzRXh0ZW5zaW9uRW5hYmxlZChtYXQ6IFBCUk1hdGVyaWFsKTogYm9vbGVhbiB7XHJcbiAgICAgICAgLy8gVGhpcyBleHRlbnNpb24gbXVzdCBub3QgYmUgdXNlZCBvbiBhIG1hdGVyaWFsIHRoYXQgYWxzbyB1c2VzIEtIUl9tYXRlcmlhbHNfdW5saXRcclxuICAgICAgICBpZiAobWF0LnVubGl0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc3VicyA9IG1hdC5zdWJTdXJmYWNlO1xyXG4gICAgICAgIHJldHVybiAoc3Vicy5pc1JlZnJhY3Rpb25FbmFibGVkICYmIHN1YnMucmVmcmFjdGlvbkludGVuc2l0eSAhPSB1bmRlZmluZWQgJiYgc3Vicy5yZWZyYWN0aW9uSW50ZW5zaXR5ICE9IDApIHx8IHRoaXMuX2hhc1RleHR1cmVzRXh0ZW5zaW9uKG1hdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfaGFzVGV4dHVyZXNFeHRlbnNpb24obWF0OiBQQlJNYXRlcmlhbCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBtYXQuc3ViU3VyZmFjZS5yZWZyYWN0aW9uSW50ZW5zaXR5VGV4dHVyZSAhPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWZ0ZXIgZXhwb3J0aW5nIGEgbWF0ZXJpYWxcclxuICAgICAqIEBwYXJhbSBjb250ZXh0IEdMVEYgY29udGV4dCBvZiB0aGUgbWF0ZXJpYWxcclxuICAgICAqIEBwYXJhbSBub2RlIGV4cG9ydGVkIEdMVEYgbm9kZVxyXG4gICAgICogQHBhcmFtIGJhYnlsb25NYXRlcmlhbCBjb3JyZXNwb25kaW5nIGJhYnlsb24gbWF0ZXJpYWxcclxuICAgICAqIEByZXR1cm5zIHRydWUgaWYgc3VjY2Vzc2Z1bFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXN5bmMgcG9zdEV4cG9ydE1hdGVyaWFsQXN5bmM/KGNvbnRleHQ6IHN0cmluZywgbm9kZTogSU1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsKTogUHJvbWlzZTxJTWF0ZXJpYWw+IHtcclxuICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsIGluc3RhbmNlb2YgUEJSTWF0ZXJpYWwgJiYgdGhpcy5faXNFeHRlbnNpb25FbmFibGVkKGJhYnlsb25NYXRlcmlhbCkpIHtcclxuICAgICAgICAgICAgdGhpcy5fd2FzVXNlZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzdWJTdXJmYWNlID0gYmFieWxvbk1hdGVyaWFsLnN1YlN1cmZhY2U7XHJcbiAgICAgICAgICAgIGNvbnN0IHRyYW5zbWlzc2lvbkZhY3RvciA9IHN1YlN1cmZhY2UucmVmcmFjdGlvbkludGVuc2l0eSA9PT0gMCA/IHVuZGVmaW5lZCA6IHN1YlN1cmZhY2UucmVmcmFjdGlvbkludGVuc2l0eTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHZvbHVtZUluZm86IElLSFJNYXRlcmlhbHNUcmFuc21pc3Npb24gPSB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc21pc3Npb25GYWN0b3I6IHRyYW5zbWlzc2lvbkZhY3RvcixcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9oYXNUZXh0dXJlc0V4dGVuc2lvbihiYWJ5bG9uTWF0ZXJpYWwpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9leHBvcnRlci5fbWF0ZXJpYWxOZWVkc1VWc1NldC5hZGQoYmFieWxvbk1hdGVyaWFsKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHN1YlN1cmZhY2UucmVmcmFjdGlvbkludGVuc2l0eVRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzdWJTdXJmYWNlLnVzZUdsdGZTdHlsZVRleHR1cmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHJhbnNtaXNzaW9uVGV4dHVyZSA9IGF3YWl0IHRoaXMuX2V4cG9ydGVyLl9tYXRlcmlhbEV4cG9ydGVyLmV4cG9ydFRleHR1cmVBc3luYyhzdWJTdXJmYWNlLnJlZnJhY3Rpb25JbnRlbnNpdHlUZXh0dXJlLCBJbWFnZU1pbWVUeXBlLlBORyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRyYW5zbWlzc2lvblRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdm9sdW1lSW5mby50cmFuc21pc3Npb25UZXh0dXJlID0gdHJhbnNtaXNzaW9uVGV4dHVyZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZ2dlci5XYXJuKGAke2NvbnRleHR9OiBFeHBvcnRpbmcgYSBzdWJzdXJmYWNlIHJlZnJhY3Rpb24gaW50ZW5zaXR5IHRleHR1cmUgd2l0aG91dCBcXGB1c2VHbHRmU3R5bGVUZXh0dXJlc1xcYCBpcyBub3Qgc3VwcG9ydGVkYCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5vZGUuZXh0ZW5zaW9ucyB8fD0ge307XHJcbiAgICAgICAgICAgIG5vZGUuZXh0ZW5zaW9uc1tOQU1FXSA9IHZvbHVtZUluZm87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgIH1cclxufVxyXG5cclxuR0xURkV4cG9ydGVyLlJlZ2lzdGVyRXh0ZW5zaW9uKE5BTUUsIChleHBvcnRlcikgPT4gbmV3IEtIUl9tYXRlcmlhbHNfdHJhbnNtaXNzaW9uKGV4cG9ydGVyKSk7XHJcbiIsImltcG9ydCB0eXBlIHsgSU1hdGVyaWFsIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgdHlwZSB7IElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMiB9IGZyb20gXCIuLi9nbFRGRXhwb3J0ZXJFeHRlbnNpb25cIjtcclxuaW1wb3J0IHsgR0xURkV4cG9ydGVyIH0gZnJvbSBcIi4uL2dsVEZFeHBvcnRlclwiO1xyXG5pbXBvcnQgdHlwZSB7IE1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IFBCUk1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1BCUi9wYnJNYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBTdGFuZGFyZE1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL3N0YW5kYXJkTWF0ZXJpYWxcIjtcclxuXHJcbmNvbnN0IE5BTUUgPSBcIktIUl9tYXRlcmlhbHNfdW5saXRcIjtcclxuXHJcbi8qKlxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGNsYXNzIEtIUl9tYXRlcmlhbHNfdW5saXQgaW1wbGVtZW50cyBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIge1xyXG4gICAgLyoqIE5hbWUgb2YgdGhpcyBleHRlbnNpb24gKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lID0gTkFNRTtcclxuXHJcbiAgICAvKiogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIGVuYWJsZWQgKi9cclxuICAgIHB1YmxpYyBlbmFibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAvKiogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIHJlcXVpcmVkICovXHJcbiAgICBwdWJsaWMgcmVxdWlyZWQgPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIF93YXNVc2VkID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBnZXQgd2FzVXNlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fd2FzVXNlZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHt9XHJcblxyXG4gICAgcHVibGljIHBvc3RFeHBvcnRNYXRlcmlhbEFzeW5jPyhjb250ZXh0OiBzdHJpbmcsIG5vZGU6IElNYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCk6IFByb21pc2U8SU1hdGVyaWFsPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB1bmxpdE1hdGVyaWFsID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsIGluc3RhbmNlb2YgUEJSTWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgICAgIHVubGl0TWF0ZXJpYWwgPSBiYWJ5bG9uTWF0ZXJpYWwudW5saXQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYmFieWxvbk1hdGVyaWFsIGluc3RhbmNlb2YgU3RhbmRhcmRNYXRlcmlhbCkge1xyXG4gICAgICAgICAgICAgICAgdW5saXRNYXRlcmlhbCA9IGJhYnlsb25NYXRlcmlhbC5kaXNhYmxlTGlnaHRpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh1bmxpdE1hdGVyaWFsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl93YXNVc2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5leHRlbnNpb25zID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLmV4dGVuc2lvbnMgPSB7fTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBub2RlLmV4dGVuc2lvbnNbTkFNRV0gPSB7fTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmVzb2x2ZShub2RlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuR0xURkV4cG9ydGVyLlJlZ2lzdGVyRXh0ZW5zaW9uKE5BTUUsICgpID0+IG5ldyBLSFJfbWF0ZXJpYWxzX3VubGl0KCkpO1xyXG4iLCJpbXBvcnQgdHlwZSB7IElNYXRlcmlhbCwgSUtIUk1hdGVyaWFsc1ZvbHVtZSB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHR5cGUgeyBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIgfSBmcm9tIFwiLi4vZ2xURkV4cG9ydGVyRXh0ZW5zaW9uXCI7XHJcbmltcG9ydCB7IEdMVEZFeHBvcnRlciB9IGZyb20gXCIuLi9nbFRGRXhwb3J0ZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBQQlJNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9QQlIvcGJyTWF0ZXJpYWxcIjtcclxuaW1wb3J0IHR5cGUgeyBCYXNlVGV4dHVyZSB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9UZXh0dXJlcy9iYXNlVGV4dHVyZVwiO1xyXG5pbXBvcnQgeyBDb2xvcjMgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLmNvbG9yXCI7XHJcblxyXG5jb25zdCBOQU1FID0gXCJLSFJfbWF0ZXJpYWxzX3ZvbHVtZVwiO1xyXG5cclxuLyoqXHJcbiAqIFtTcGVjaWZpY2F0aW9uXShodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi9tYWluL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX21hdGVyaWFsc192b2x1bWUvUkVBRE1FLm1kKVxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgY2xhc3MgS0hSX21hdGVyaWFsc192b2x1bWUgaW1wbGVtZW50cyBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIge1xyXG4gICAgLyoqIE5hbWUgb2YgdGhpcyBleHRlbnNpb24gKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lID0gTkFNRTtcclxuXHJcbiAgICAvKiogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIGVuYWJsZWQgKi9cclxuICAgIHB1YmxpYyBlbmFibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAvKiogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIHJlcXVpcmVkICovXHJcbiAgICBwdWJsaWMgcmVxdWlyZWQgPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIF9leHBvcnRlcjogR0xURkV4cG9ydGVyO1xyXG5cclxuICAgIHByaXZhdGUgX3dhc1VzZWQgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihleHBvcnRlcjogR0xURkV4cG9ydGVyKSB7XHJcbiAgICAgICAgdGhpcy5fZXhwb3J0ZXIgPSBleHBvcnRlcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHt9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGdldCB3YXNVc2VkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl93YXNVc2VkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWZ0ZXIgZXhwb3J0aW5nIGEgbWF0ZXJpYWwsIGRlYWwgd2l0aCBhZGRpdGlvbmFsIHRleHR1cmVzXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBHTFRGIGNvbnRleHQgb2YgdGhlIG1hdGVyaWFsXHJcbiAgICAgKiBAcGFyYW0gbm9kZSBleHBvcnRlZCBHTFRGIG5vZGVcclxuICAgICAqIEBwYXJhbSBiYWJ5bG9uTWF0ZXJpYWwgY29ycmVzcG9uZGluZyBiYWJ5bG9uIG1hdGVyaWFsXHJcbiAgICAgKiBAcmV0dXJucyBhcnJheSBvZiBhZGRpdGlvbmFsIHRleHR1cmVzIHRvIGV4cG9ydFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcG9zdEV4cG9ydE1hdGVyaWFsQWRkaXRpb25hbFRleHR1cmVzPyhjb250ZXh0OiBzdHJpbmcsIG5vZGU6IElNYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCk6IEJhc2VUZXh0dXJlW10ge1xyXG4gICAgICAgIGNvbnN0IGFkZGl0aW9uYWxUZXh0dXJlczogQmFzZVRleHR1cmVbXSA9IFtdO1xyXG5cclxuICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsIGluc3RhbmNlb2YgUEJSTWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2lzRXh0ZW5zaW9uRW5hYmxlZChiYWJ5bG9uTWF0ZXJpYWwpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsLnN1YlN1cmZhY2UudGhpY2tuZXNzVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZGl0aW9uYWxUZXh0dXJlcy5wdXNoKGJhYnlsb25NYXRlcmlhbC5zdWJTdXJmYWNlLnRoaWNrbmVzc1RleHR1cmUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFkZGl0aW9uYWxUZXh0dXJlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGFkZGl0aW9uYWxUZXh0dXJlcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9pc0V4dGVuc2lvbkVuYWJsZWQobWF0OiBQQlJNYXRlcmlhbCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIC8vIFRoaXMgZXh0ZW5zaW9uIG11c3Qgbm90IGJlIHVzZWQgb24gYSBtYXRlcmlhbCB0aGF0IGFsc28gdXNlcyBLSFJfbWF0ZXJpYWxzX3VubGl0XHJcbiAgICAgICAgaWYgKG1hdC51bmxpdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHN1YnMgPSBtYXQuc3ViU3VyZmFjZTtcclxuICAgICAgICAvLyB0aGlzIGV4dGVuc2lvbiByZXF1aXJlcyBlaXRoZXIgdGhlIEtIUl9tYXRlcmlhbHNfdHJhbnNtaXNzaW9uIG9yIEtIUl9tYXRlcmlhbHNfZGlmZnVzZV90cmFuc21pc3Npb24gZXh0ZW5zaW9ucy5cclxuICAgICAgICBpZiAoIXN1YnMuaXNSZWZyYWN0aW9uRW5hYmxlZCAmJiAhc3Vicy5pc1RyYW5zbHVjZW5jeUVuYWJsZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAoc3Vicy5tYXhpbXVtVGhpY2tuZXNzICE9IHVuZGVmaW5lZCAmJiBzdWJzLm1heGltdW1UaGlja25lc3MgIT0gMCkgfHxcclxuICAgICAgICAgICAgKHN1YnMudGludENvbG9yQXREaXN0YW5jZSAhPSB1bmRlZmluZWQgJiYgc3Vicy50aW50Q29sb3JBdERpc3RhbmNlICE9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWSkgfHxcclxuICAgICAgICAgICAgKHN1YnMudGludENvbG9yICE9IHVuZGVmaW5lZCAmJiBzdWJzLnRpbnRDb2xvciAhPSBDb2xvcjMuV2hpdGUoKSkgfHxcclxuICAgICAgICAgICAgdGhpcy5faGFzVGV4dHVyZXNFeHRlbnNpb24obWF0KVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfaGFzVGV4dHVyZXNFeHRlbnNpb24obWF0OiBQQlJNYXRlcmlhbCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBtYXQuc3ViU3VyZmFjZS50aGlja25lc3NUZXh0dXJlICE9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZnRlciBleHBvcnRpbmcgYSBtYXRlcmlhbFxyXG4gICAgICogQHBhcmFtIGNvbnRleHQgR0xURiBjb250ZXh0IG9mIHRoZSBtYXRlcmlhbFxyXG4gICAgICogQHBhcmFtIG5vZGUgZXhwb3J0ZWQgR0xURiBub2RlXHJcbiAgICAgKiBAcGFyYW0gYmFieWxvbk1hdGVyaWFsIGNvcnJlc3BvbmRpbmcgYmFieWxvbiBtYXRlcmlhbFxyXG4gICAgICogQHJldHVybnMgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIHVwZGF0ZWQgbm9kZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcG9zdEV4cG9ydE1hdGVyaWFsQXN5bmM/KGNvbnRleHQ6IHN0cmluZywgbm9kZTogSU1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsKTogUHJvbWlzZTxJTWF0ZXJpYWw+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbCBpbnN0YW5jZW9mIFBCUk1hdGVyaWFsICYmIHRoaXMuX2lzRXh0ZW5zaW9uRW5hYmxlZChiYWJ5bG9uTWF0ZXJpYWwpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl93YXNVc2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdWJzID0gYmFieWxvbk1hdGVyaWFsLnN1YlN1cmZhY2U7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0aGlja25lc3NGYWN0b3IgPSBzdWJzLm1heGltdW1UaGlja25lc3MgPT0gMCA/IHVuZGVmaW5lZCA6IHN1YnMubWF4aW11bVRoaWNrbmVzcztcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRoaWNrbmVzc1RleHR1cmUgPSB0aGlzLl9leHBvcnRlci5fbWF0ZXJpYWxFeHBvcnRlci5nZXRUZXh0dXJlSW5mbyhzdWJzLnRoaWNrbmVzc1RleHR1cmUpID8/IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGF0dGVudWF0aW9uRGlzdGFuY2UgPSBzdWJzLnRpbnRDb2xvckF0RGlzdGFuY2UgPT0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZID8gdW5kZWZpbmVkIDogc3Vicy50aW50Q29sb3JBdERpc3RhbmNlO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXR0ZW51YXRpb25Db2xvciA9IHN1YnMudGludENvbG9yLmVxdWFsc0Zsb2F0cygxLjAsIDEuMCwgMS4wKSA/IHVuZGVmaW5lZCA6IHN1YnMudGludENvbG9yLmFzQXJyYXkoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCB2b2x1bWVJbmZvOiBJS0hSTWF0ZXJpYWxzVm9sdW1lID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaWNrbmVzc0ZhY3RvcjogdGhpY2tuZXNzRmFjdG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaWNrbmVzc1RleHR1cmU6IHRoaWNrbmVzc1RleHR1cmUsXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0ZW51YXRpb25EaXN0YW5jZTogYXR0ZW51YXRpb25EaXN0YW5jZSxcclxuICAgICAgICAgICAgICAgICAgICBhdHRlbnVhdGlvbkNvbG9yOiBhdHRlbnVhdGlvbkNvbG9yLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5faGFzVGV4dHVyZXNFeHRlbnNpb24oYmFieWxvbk1hdGVyaWFsKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2V4cG9ydGVyLl9tYXRlcmlhbE5lZWRzVVZzU2V0LmFkZChiYWJ5bG9uTWF0ZXJpYWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIG5vZGUuZXh0ZW5zaW9ucyA9IG5vZGUuZXh0ZW5zaW9ucyB8fCB7fTtcclxuICAgICAgICAgICAgICAgIG5vZGUuZXh0ZW5zaW9uc1tOQU1FXSA9IHZvbHVtZUluZm87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzb2x2ZShub2RlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuR0xURkV4cG9ydGVyLlJlZ2lzdGVyRXh0ZW5zaW9uKE5BTUUsIChleHBvcnRlcikgPT4gbmV3IEtIUl9tYXRlcmlhbHNfdm9sdW1lKGV4cG9ydGVyKSk7XHJcbiIsImltcG9ydCB0eXBlIHsgSVRleHR1cmVJbmZvLCBJS0hSVGV4dHVyZVRyYW5zZm9ybSB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgVG9vbHMgfSBmcm9tIFwiY29yZS9NaXNjL3Rvb2xzXCI7XHJcbmltcG9ydCB0eXBlIHsgVGV4dHVyZSB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9UZXh0dXJlcy90ZXh0dXJlXCI7XHJcbmltcG9ydCB0eXBlIHsgSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyIH0gZnJvbSBcIi4uL2dsVEZFeHBvcnRlckV4dGVuc2lvblwiO1xyXG5pbXBvcnQgeyBHTFRGRXhwb3J0ZXIgfSBmcm9tIFwiLi4vZ2xURkV4cG9ydGVyXCI7XHJcblxyXG5jb25zdCBOQU1FID0gXCJLSFJfdGV4dHVyZV90cmFuc2Zvcm1cIjtcclxuXHJcbi8qKlxyXG4gKiBDb21wdXRlcyB0aGUgYWRqdXN0ZWQgb2Zmc2V0IGZvciBhIHJvdGF0aW9uIGNlbnRlcmVkIGFib3V0IHRoZSBvcmlnaW4uXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuZnVuY3Rpb24gQWRqdXN0T2Zmc2V0Rm9yUm90YXRpb25DZW50ZXIoYmFieWxvblRleHR1cmU6IFRleHR1cmUpOiBbbnVtYmVyLCBudW1iZXJdIHtcclxuICAgIGNvbnN0IHsgdU9mZnNldCwgdk9mZnNldCwgdVJvdGF0aW9uQ2VudGVyLCB2Um90YXRpb25DZW50ZXIsIHVTY2FsZSwgdlNjYWxlLCB3QW5nIH0gPSBiYWJ5bG9uVGV4dHVyZTtcclxuICAgIGNvbnN0IGNvc0FuZ2xlID0gTWF0aC5jb3Mod0FuZyk7XHJcbiAgICBjb25zdCBzaW5BbmdsZSA9IE1hdGguc2luKHdBbmcpO1xyXG4gICAgY29uc3Qgc2NhbGVkVVJvdGF0aW9uQ2VudGVyID0gdVJvdGF0aW9uQ2VudGVyICogdVNjYWxlO1xyXG4gICAgY29uc3Qgc2NhbGVkVlJvdGF0aW9uQ2VudGVyID0gdlJvdGF0aW9uQ2VudGVyICogdlNjYWxlO1xyXG4gICAgY29uc3QgZGVsdGFVID0gc2NhbGVkVVJvdGF0aW9uQ2VudGVyICogKDEgLSBjb3NBbmdsZSkgKyBzY2FsZWRWUm90YXRpb25DZW50ZXIgKiBzaW5BbmdsZTtcclxuICAgIGNvbnN0IGRlbHRhViA9IHNjYWxlZFZSb3RhdGlvbkNlbnRlciAqICgxIC0gY29zQW5nbGUpIC0gc2NhbGVkVVJvdGF0aW9uQ2VudGVyICogc2luQW5nbGU7XHJcbiAgICByZXR1cm4gW3VPZmZzZXQgKyBkZWx0YVUsIHZPZmZzZXQgKyBkZWx0YVZdO1xyXG59XHJcblxyXG4vKipcclxuICogQGludGVybmFsXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBjbGFzcyBLSFJfdGV4dHVyZV90cmFuc2Zvcm0gaW1wbGVtZW50cyBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIge1xyXG4gICAgLyoqIE5hbWUgb2YgdGhpcyBleHRlbnNpb24gKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lID0gTkFNRTtcclxuXHJcbiAgICAvKiogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIGVuYWJsZWQgKi9cclxuICAgIHB1YmxpYyBlbmFibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAvKiogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIHJlcXVpcmVkICovXHJcbiAgICBwdWJsaWMgcmVxdWlyZWQgPSBmYWxzZTtcclxuXHJcbiAgICAvKiogUmVmZXJlbmNlIHRvIHRoZSBnbFRGIGV4cG9ydGVyICovXHJcbiAgICBwcml2YXRlIF93YXNVc2VkID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge31cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgZ2V0IHdhc1VzZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dhc1VzZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBvc3RFeHBvcnRUZXh0dXJlPyhjb250ZXh0OiBzdHJpbmcsIHRleHR1cmVJbmZvOiBJVGV4dHVyZUluZm8sIGJhYnlsb25UZXh0dXJlOiBUZXh0dXJlKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgc2NlbmUgPSBiYWJ5bG9uVGV4dHVyZS5nZXRTY2VuZSgpO1xyXG4gICAgICAgIGlmICghc2NlbmUpIHtcclxuICAgICAgICAgICAgVG9vbHMuV2FybihgJHtjb250ZXh0fTogXCJzY2VuZVwiIGlzIG5vdCBkZWZpbmVkIGZvciBCYWJ5bG9uIHRleHR1cmUgJHtiYWJ5bG9uVGV4dHVyZS5uYW1lfSFgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgICogVGhlIEtIUl90ZXh0dXJlX3RyYW5zZm9ybSBzY2hlbWEgb25seSBzdXBwb3J0cyB3IHJvdGF0aW9uIGFyb3VuZCB0aGUgb3JpZ2luLlxyXG4gICAgICAgICAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYWluL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX3RleHR1cmVfdHJhbnNmb3JtI2dsdGYtc2NoZW1hLXVwZGF0ZXMuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgaWYgKGJhYnlsb25UZXh0dXJlLnVBbmcgIT09IDAgfHwgYmFieWxvblRleHR1cmUudkFuZyAhPT0gMCkge1xyXG4gICAgICAgICAgICBUb29scy5XYXJuKGAke2NvbnRleHR9OiBUZXh0dXJlICR7YmFieWxvblRleHR1cmUubmFtZX0gd2l0aCByb3RhdGlvbiBpbiB0aGUgdSBvciB2IGF4aXMgaXMgbm90IHN1cHBvcnRlZCBpbiBnbFRGLmApO1xyXG4gICAgICAgICAgICAvLyBVc3VhbGx5LCB3ZSdkIGFsd2F5cyBlYXJseSByZXR1cm4gaGVyZSBpZiB0aGUgdGV4dHVyZSB1c2VzIGFuIHVuc3VwcG9ydGVkIGNvbWJpbmF0aW9uIG9mIHRyYW5zZm9ybSBwcm9wZXJ0aWVzLFxyXG4gICAgICAgICAgICAvLyBidXQgd2UncmUgbWFraW5nIGFuIGV4Y2VwdGlvbiBoZXJlIHRvIG1haW50YWluIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxyXG4gICAgICAgICAgICBpZiAoYmFieWxvblRleHR1cmUudVJvdGF0aW9uQ2VudGVyICE9PSAwIHx8IGJhYnlsb25UZXh0dXJlLnZSb3RhdGlvbkNlbnRlciAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB0ZXh0dXJlVHJhbnNmb3JtOiBJS0hSVGV4dHVyZVRyYW5zZm9ybSA9IHt9O1xyXG4gICAgICAgIGxldCB0cmFuc2Zvcm1Jc1JlcXVpcmVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmIChiYWJ5bG9uVGV4dHVyZS51T2Zmc2V0ICE9PSAwIHx8IGJhYnlsb25UZXh0dXJlLnZPZmZzZXQgIT09IDApIHtcclxuICAgICAgICAgICAgdGV4dHVyZVRyYW5zZm9ybS5vZmZzZXQgPSBbYmFieWxvblRleHR1cmUudU9mZnNldCwgYmFieWxvblRleHR1cmUudk9mZnNldF07XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybUlzUmVxdWlyZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGJhYnlsb25UZXh0dXJlLnVTY2FsZSAhPT0gMSB8fCBiYWJ5bG9uVGV4dHVyZS52U2NhbGUgIT09IDEpIHtcclxuICAgICAgICAgICAgdGV4dHVyZVRyYW5zZm9ybS5zY2FsZSA9IFtiYWJ5bG9uVGV4dHVyZS51U2NhbGUsIGJhYnlsb25UZXh0dXJlLnZTY2FsZV07XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybUlzUmVxdWlyZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGJhYnlsb25UZXh0dXJlLndBbmcgIT09IDApIHtcclxuICAgICAgICAgICAgaWYgKGJhYnlsb25UZXh0dXJlLnVSb3RhdGlvbkNlbnRlciAhPT0gMCB8fCBiYWJ5bG9uVGV4dHVyZS52Um90YXRpb25DZW50ZXIgIT09IDApIHtcclxuICAgICAgICAgICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbXJkb29iL3RocmVlLmpzL2lzc3Vlcy8xNTgzMSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gICAgICAgICAgICAgICAgaWYgKGJhYnlsb25UZXh0dXJlLmhvbW9nZW5lb3VzUm90YXRpb25JblVWVHJhbnNmb3JtICYmIGJhYnlsb25UZXh0dXJlLnVTY2FsZSAhPT0gYmFieWxvblRleHR1cmUudlNjYWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgVG9vbHMuV2FybihcclxuICAgICAgICAgICAgICAgICAgICAgICAgYCR7Y29udGV4dH06IFRleHR1cmUgJHtiYWJ5bG9uVGV4dHVyZS5uYW1lfSB3aXRoIGhvbW9nZW5vdXNSb3RhdGlvbkluVVZUcmFuc2Zvcm0sIG5vbi11bmlmb3JtIHNjYWxpbmcsIGFuZCBub24temVybyByb3RhdGlvbiBjYW5ub3QgYmUgZXhwb3J0ZWQgd2l0aCAke05BTUV9LmBcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFRvb2xzLldhcm4oYCR7Y29udGV4dH06IFRleHR1cmUgJHtiYWJ5bG9uVGV4dHVyZS5uYW1lfSB3aXRoIG5vbi1vcmlnaW4gcm90YXRpb24gY2VudGVyIHdpbGwgYmUgZXhwb3J0ZWQgdXNpbmcgYW4gYWRqdXN0ZWQgb2Zmc2V0IHdpdGggJHtOQU1FfS5gKTtcclxuICAgICAgICAgICAgICAgIHRleHR1cmVUcmFuc2Zvcm0ub2Zmc2V0ID0gQWRqdXN0T2Zmc2V0Rm9yUm90YXRpb25DZW50ZXIoYmFieWxvblRleHR1cmUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRleHR1cmVUcmFuc2Zvcm0ucm90YXRpb24gPSAtYmFieWxvblRleHR1cmUud0FuZztcclxuICAgICAgICAgICAgdHJhbnNmb3JtSXNSZXF1aXJlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYmFieWxvblRleHR1cmUuY29vcmRpbmF0ZXNJbmRleCAhPT0gMCkge1xyXG4gICAgICAgICAgICB0ZXh0dXJlVHJhbnNmb3JtLnRleENvb3JkID0gYmFieWxvblRleHR1cmUuY29vcmRpbmF0ZXNJbmRleDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtSXNSZXF1aXJlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRyYW5zZm9ybUlzUmVxdWlyZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fd2FzVXNlZCA9IHRydWU7XHJcbiAgICAgICAgaWYgKCF0ZXh0dXJlSW5mby5leHRlbnNpb25zKSB7XHJcbiAgICAgICAgICAgIHRleHR1cmVJbmZvLmV4dGVuc2lvbnMgPSB7fTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGV4dHVyZUluZm8uZXh0ZW5zaW9uc1tOQU1FXSA9IHRleHR1cmVUcmFuc2Zvcm07XHJcbiAgICB9XHJcbn1cclxuXHJcbkdMVEZFeHBvcnRlci5SZWdpc3RlckV4dGVuc2lvbihOQU1FLCAoKSA9PiBuZXcgS0hSX3RleHR1cmVfdHJhbnNmb3JtKCkpO1xyXG4iLCJleHBvcnQgKiBmcm9tIFwiLi9FWFRfbWVzaF9ncHVfaW5zdGFuY2luZ1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9LSFJfZHJhY29fbWVzaF9jb21wcmVzc2lvblwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9LSFJfbGlnaHRzX3B1bmN0dWFsXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL0tIUl9tYXRlcmlhbHNfYW5pc290cm9weVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9LSFJfbWF0ZXJpYWxzX2NsZWFyY29hdFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9LSFJfbWF0ZXJpYWxzX2RpZmZ1c2VfdHJhbnNtaXNzaW9uXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL0tIUl9tYXRlcmlhbHNfZGlzcGVyc2lvblwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9LSFJfbWF0ZXJpYWxzX2VtaXNzaXZlX3N0cmVuZ3RoXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL0tIUl9tYXRlcmlhbHNfaW9yXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL0tIUl9tYXRlcmlhbHNfaXJpZGVzY2VuY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vS0hSX21hdGVyaWFsc19zaGVlblwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9LSFJfbWF0ZXJpYWxzX3NwZWN1bGFyXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL0tIUl9tYXRlcmlhbHNfdHJhbnNtaXNzaW9uXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL0tIUl9tYXRlcmlhbHNfdW5saXRcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vS0hSX21hdGVyaWFsc192b2x1bWVcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vS0hSX3RleHR1cmVfdHJhbnNmb3JtXCI7XHJcbiIsImltcG9ydCB0eXBlIHsgVHlwZWRBcnJheSB9IGZyb20gXCJjb3JlL3R5cGVzXCI7XG5pbXBvcnQgdHlwZSB7IEFjY2Vzc29yQ29tcG9uZW50VHlwZSwgQWNjZXNzb3JUeXBlLCBJQWNjZXNzb3IsIElCdWZmZXJWaWV3IH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xuaW1wb3J0IHsgRGF0YVdyaXRlciB9IGZyb20gXCIuL2RhdGFXcml0ZXJcIjtcblxudHlwZSBUeXBlZEFycmF5Rm9yZ2xURiA9IEV4Y2x1ZGU8VHlwZWRBcnJheSwgRmxvYXQ2NEFycmF5IHwgQmlnSW50NjRBcnJheSB8IEJpZ1VpbnQ2NEFycmF5PjtcblxuaW50ZXJmYWNlIElQcm9wZXJ0eVdpdGhCdWZmZXJWaWV3IHtcbiAgICBidWZmZXJWaWV3PzogbnVtYmVyO1xufVxuXG5mdW5jdGlvbiBnZXRIaWdoZXN0Qnl0ZUFsaWdubWVudChieXRlTGVuZ3RoOiBudW1iZXIpOiBudW1iZXIge1xuICAgIGlmIChieXRlTGVuZ3RoICUgNCA9PT0gMCkgcmV0dXJuIDQ7XG4gICAgaWYgKGJ5dGVMZW5ndGggJSAyID09PSAwKSByZXR1cm4gMjtcbiAgICByZXR1cm4gMTtcbn1cblxuLyoqXG4gKiBVdGlsaXR5IGNsYXNzIHRvIGNlbnRyYWxpemUgdGhlIG1hbmFnZW1lbnQgb2YgYmluYXJ5IGRhdGEsIGJ1ZmZlclZpZXdzLCBhbmQgdGhlIG9iamVjdHMgdGhhdCByZWZlcmVuY2UgdGhlbS5cbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgY2xhc3MgQnVmZmVyTWFuYWdlciB7XG4gICAgLyoqXG4gICAgICogTWFwcyBhIGJ1ZmZlclZpZXcgdG8gaXRzIGRhdGFcbiAgICAgKi9cbiAgICBwcml2YXRlIF9idWZmZXJWaWV3VG9EYXRhOiBNYXA8SUJ1ZmZlclZpZXcsIFR5cGVkQXJyYXlGb3JnbFRGPiA9IG5ldyBNYXA8SUJ1ZmZlclZpZXcsIFR5cGVkQXJyYXlGb3JnbFRGPigpO1xuXG4gICAgLyoqXG4gICAgICogTWFwcyBhIGJ1ZmZlclZpZXcgdG8gZ2xURiBvYmplY3RzIHRoYXQgcmVmZXJlbmNlIGl0IHZpYSBhIFwiYnVmZmVyVmlld1wiIHByb3BlcnR5IChlLmcuIGFjY2Vzc29ycywgaW1hZ2VzKVxuICAgICAqL1xuICAgIHByaXZhdGUgX2J1ZmZlclZpZXdUb1Byb3BlcnRpZXM6IE1hcDxJQnVmZmVyVmlldywgSVByb3BlcnR5V2l0aEJ1ZmZlclZpZXdbXT4gPSBuZXcgTWFwPElCdWZmZXJWaWV3LCBJUHJvcGVydHlXaXRoQnVmZmVyVmlld1tdPigpO1xuXG4gICAgLyoqXG4gICAgICogTWFwcyBhbiBhY2Nlc3NvciB0byBpdHMgYnVmZmVyVmlld1xuICAgICAqL1xuICAgIHByaXZhdGUgX2FjY2Vzc29yVG9CdWZmZXJWaWV3OiBNYXA8SUFjY2Vzc29yLCBJQnVmZmVyVmlldz4gPSBuZXcgTWFwPElBY2Nlc3NvciwgSUJ1ZmZlclZpZXc+KCk7XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZXMgYSBiaW5hcnkgYnVmZmVyIGZyb20gdGhlIHN0b3JlZCBidWZmZXJWaWV3cy4gQWxzbyBwb3B1bGF0ZXMgdGhlIGJ1ZmZlclZpZXdzIGxpc3QuXG4gICAgICogQHBhcmFtIGJ1ZmZlclZpZXdzIFRoZSBsaXN0IG9mIGJ1ZmZlclZpZXdzIHRvIGJlIHBvcHVsYXRlZCB3aGlsZSB3cml0aW5nIHRoZSBiaW5hcnlcbiAgICAgKiBAcmV0dXJucyBUaGUgYmluYXJ5IGJ1ZmZlclxuICAgICAqL1xuICAgIHB1YmxpYyBnZW5lcmF0ZUJpbmFyeShidWZmZXJWaWV3czogSUJ1ZmZlclZpZXdbXSk6IFVpbnQ4QXJyYXkge1xuICAgICAgICAvLyBDb25zdHJ1Y3QgYSBEYXRhV3JpdGVyIHdpdGggdGhlIHRvdGFsIGJ5dGUgbGVuZ3RoIHRvIHByZXZlbnQgcmVzaXppbmdcbiAgICAgICAgbGV0IHRvdGFsQnl0ZUxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMuX2J1ZmZlclZpZXdUb0RhdGEuZm9yRWFjaCgoZGF0YSkgPT4ge1xuICAgICAgICAgICAgdG90YWxCeXRlTGVuZ3RoICs9IGRhdGEuYnl0ZUxlbmd0aDtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGRhdGFXcml0ZXIgPSBuZXcgRGF0YVdyaXRlcih0b3RhbEJ5dGVMZW5ndGgpO1xuXG4gICAgICAgIC8vIE9yZGVyIHRoZSBidWZmZXJWaWV3cyBpbiBkZXNjZW5kaW5nIG9yZGVyIG9mIHRoZWlyIGFsaWdubWVudCByZXF1aXJlbWVudHNcbiAgICAgICAgY29uc3Qgb3JkZXJlZEJ1ZmZlclZpZXdzID0gQXJyYXkuZnJvbSh0aGlzLl9idWZmZXJWaWV3VG9EYXRhLmtleXMoKSkuc29ydCgoYSwgYikgPT4gZ2V0SGlnaGVzdEJ5dGVBbGlnbm1lbnQoYi5ieXRlTGVuZ3RoKSAtIGdldEhpZ2hlc3RCeXRlQWxpZ25tZW50KGEuYnl0ZUxlbmd0aCkpO1xuXG4gICAgICAgIC8vIEZpbGwgaW4gdGhlIGJ1ZmZlclZpZXdzIGxpc3QgYW5kIG1pc3NpbmcgYnVmZmVyVmlldyBpbmRleCByZWZlcmVuY2VzIHdoaWxlIHdyaXRpbmcgdGhlIGJpbmFyeVxuICAgICAgICBmb3IgKGNvbnN0IGJ1ZmZlclZpZXcgb2Ygb3JkZXJlZEJ1ZmZlclZpZXdzKSB7XG4gICAgICAgICAgICBidWZmZXJWaWV3LmJ5dGVPZmZzZXQgPSBkYXRhV3JpdGVyLmJ5dGVPZmZzZXQ7XG4gICAgICAgICAgICBidWZmZXJWaWV3cy5wdXNoKGJ1ZmZlclZpZXcpO1xuXG4gICAgICAgICAgICBjb25zdCBidWZmZXJWaWV3SW5kZXggPSBidWZmZXJWaWV3cy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgY29uc3QgcHJvcGVydGllcyA9IHRoaXMuZ2V0UHJvcGVydGllc1dpdGhCdWZmZXJWaWV3KGJ1ZmZlclZpZXcpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBvYmplY3Qgb2YgcHJvcGVydGllcykge1xuICAgICAgICAgICAgICAgIG9iamVjdC5idWZmZXJWaWV3ID0gYnVmZmVyVmlld0luZGV4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkYXRhV3JpdGVyLndyaXRlVHlwZWRBcnJheSh0aGlzLl9idWZmZXJWaWV3VG9EYXRhLmdldChidWZmZXJWaWV3KSEpO1xuXG4gICAgICAgICAgICB0aGlzLl9idWZmZXJWaWV3VG9EYXRhLmRlbGV0ZShidWZmZXJWaWV3KTsgLy8gVHJ5IHRvIGZyZWUgdXAgbWVtb3J5IEFTQVBcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkYXRhV3JpdGVyLmdldE91dHB1dERhdGEoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgYnVmZmVyIHZpZXcgYmFzZWQgb24gdGhlIHN1cHBsaWVkIGFyZ3VtZW50c1xuICAgICAqIEBwYXJhbSBkYXRhIGEgVHlwZWRBcnJheSB0byBjcmVhdGUgdGhlIGJ1ZmZlclZpZXcgZm9yXG4gICAgICogQHBhcmFtIGJ5dGVTdHJpZGUgYnl0ZSBkaXN0YW5jZSBiZXR3ZWVuIGNvbnNlY3V0aXZlIGVsZW1lbnRzXG4gICAgICogQHJldHVybnMgYnVmZmVyVmlldyBmb3IgZ2xURlxuICAgICAqL1xuICAgIHB1YmxpYyBjcmVhdGVCdWZmZXJWaWV3KGRhdGE6IFR5cGVkQXJyYXlGb3JnbFRGLCBieXRlU3RyaWRlPzogbnVtYmVyKTogSUJ1ZmZlclZpZXcge1xuICAgICAgICBjb25zdCBidWZmZXJWaWV3OiBJQnVmZmVyVmlldyA9IHtcbiAgICAgICAgICAgIGJ1ZmZlcjogMCxcbiAgICAgICAgICAgIGJ5dGVPZmZzZXQ6IHVuZGVmaW5lZCwgLy8gYnl0ZU9mZnNldCB3aWxsIGJlIHNldCBsYXRlciwgd2hlbiB3ZSB3cml0ZSB0aGUgYmluYXJ5IGFuZCBkZWNpZGUgYnVmZmVyVmlldyBvcmRlcmluZ1xuICAgICAgICAgICAgYnl0ZUxlbmd0aDogZGF0YS5ieXRlTGVuZ3RoLFxuICAgICAgICAgICAgYnl0ZVN0cmlkZTogYnl0ZVN0cmlkZSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fYnVmZmVyVmlld1RvRGF0YS5zZXQoYnVmZmVyVmlldywgZGF0YSk7XG4gICAgICAgIHJldHVybiBidWZmZXJWaWV3O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gYWNjZXNzb3IgYmFzZWQgb24gdGhlIHN1cHBsaWVkIGFyZ3VtZW50cyBhbmQgYXNzaWducyBpdCB0byB0aGUgYnVmZmVyVmlld1xuICAgICAqIEBwYXJhbSBidWZmZXJWaWV3IFRoZSBnbFRGIGJ1ZmZlclZpZXcgcmVmZXJlbmNlZCBieSB0aGlzIGFjY2Vzc29yXG4gICAgICogQHBhcmFtIHR5cGUgVGhlIHR5cGUgb2YgdGhlIGFjY2Vzc29yXG4gICAgICogQHBhcmFtIGNvbXBvbmVudFR5cGUgVGhlIGRhdGF0eXBlIG9mIGNvbXBvbmVudHMgaW4gdGhlIGF0dHJpYnV0ZVxuICAgICAqIEBwYXJhbSBjb3VudCBUaGUgbnVtYmVyIG9mIGF0dHJpYnV0ZXMgcmVmZXJlbmNlZCBieSB0aGlzIGFjY2Vzc29yXG4gICAgICogQHBhcmFtIGJ5dGVPZmZzZXQgVGhlIG9mZnNldCByZWxhdGl2ZSB0byB0aGUgc3RhcnQgb2YgdGhlIGJ1ZmZlclZpZXcgaW4gYnl0ZXNcbiAgICAgKiBAcGFyYW0gbWluTWF4IE1pbmltdW0gYW5kIG1heGltdW0gdmFsdWUgb2YgZWFjaCBjb21wb25lbnQgaW4gdGhpcyBhdHRyaWJ1dGVcbiAgICAgKiBAcGFyYW0gbm9ybWFsaXplZCBTcGVjaWZpZXMgd2hldGhlciBpbnRlZ2VyIGRhdGEgdmFsdWVzIGFyZSBub3JtYWxpemVkIGJlZm9yZSB1c2FnZVxuICAgICAqIEByZXR1cm5zIGFjY2Vzc29yIGZvciBnbFRGXG4gICAgICovXG4gICAgcHVibGljIGNyZWF0ZUFjY2Vzc29yKFxuICAgICAgICBidWZmZXJWaWV3OiBJQnVmZmVyVmlldyxcbiAgICAgICAgdHlwZTogQWNjZXNzb3JUeXBlLFxuICAgICAgICBjb21wb25lbnRUeXBlOiBBY2Nlc3NvckNvbXBvbmVudFR5cGUsXG4gICAgICAgIGNvdW50OiBudW1iZXIsXG4gICAgICAgIGJ5dGVPZmZzZXQ/OiBudW1iZXIsXG4gICAgICAgIG1pbk1heD86IHsgbWluOiBudW1iZXJbXTsgbWF4OiBudW1iZXJbXSB9LFxuICAgICAgICBub3JtYWxpemVkPzogYm9vbGVhblxuICAgICk6IElBY2Nlc3NvciB7XG4gICAgICAgIHRoaXMuX3ZlcmlmeUJ1ZmZlclZpZXcoYnVmZmVyVmlldyk7XG4gICAgICAgIGNvbnN0IGFjY2Vzc29yOiBJQWNjZXNzb3IgPSB7XG4gICAgICAgICAgICBidWZmZXJWaWV3OiB1bmRlZmluZWQsIC8vIGJ1ZmZlclZpZXcgd2lsbCBiZSBzZXQgdG8gYSByZWFsIGluZGV4IGxhdGVyLCBvbmNlIHdlIHdyaXRlIHRoZSBiaW5hcnkgYW5kIGRlY2lkZSBidWZmZXJWaWV3IG9yZGVyaW5nXG4gICAgICAgICAgICBjb21wb25lbnRUeXBlOiBjb21wb25lbnRUeXBlLFxuICAgICAgICAgICAgY291bnQ6IGNvdW50LFxuICAgICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICAgIG1pbjogbWluTWF4Py5taW4sXG4gICAgICAgICAgICBtYXg6IG1pbk1heD8ubWF4LFxuICAgICAgICAgICAgbm9ybWFsaXplZDogbm9ybWFsaXplZCxcbiAgICAgICAgICAgIGJ5dGVPZmZzZXQ6IGJ5dGVPZmZzZXQsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2V0QnVmZmVyVmlldyhhY2Nlc3NvciwgYnVmZmVyVmlldyk7XG4gICAgICAgIHRoaXMuX2FjY2Vzc29yVG9CdWZmZXJWaWV3LnNldChhY2Nlc3NvciwgYnVmZmVyVmlldyk7XG4gICAgICAgIHJldHVybiBhY2Nlc3NvcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBc3NpZ25zIGEgYnVmZmVyVmlldyB0byBhIGdsVEYgb2JqZWN0IHRoYXQgcmVmZXJlbmNlcyBpdFxuICAgICAqIEBwYXJhbSBvYmplY3QgVGhlIGdsVEYgb2JqZWN0XG4gICAgICogQHBhcmFtIGJ1ZmZlclZpZXcgVGhlIGJ1ZmZlclZpZXcgdG8gYXNzaWduXG4gICAgICovXG4gICAgcHVibGljIHNldEJ1ZmZlclZpZXcob2JqZWN0OiBJUHJvcGVydHlXaXRoQnVmZmVyVmlldywgYnVmZmVyVmlldzogSUJ1ZmZlclZpZXcpIHtcbiAgICAgICAgdGhpcy5fdmVyaWZ5QnVmZmVyVmlldyhidWZmZXJWaWV3KTtcbiAgICAgICAgY29uc3QgcHJvcGVydGllcyA9IHRoaXMuZ2V0UHJvcGVydGllc1dpdGhCdWZmZXJWaWV3KGJ1ZmZlclZpZXcpO1xuICAgICAgICBwcm9wZXJ0aWVzLnB1c2gob2JqZWN0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGJ1ZmZlciB2aWV3IGZyb20gdGhlIGJpbmFyeSBkYXRhLCBhcyB3ZWxsIGFzIGZyb20gYWxsIGl0cyBrbm93biByZWZlcmVuY2VzXG4gICAgICogQHBhcmFtIGJ1ZmZlclZpZXcgdGhlIGJ1ZmZlclZpZXcgdG8gcmVtb3ZlXG4gICAgICovXG4gICAgcHVibGljIHJlbW92ZUJ1ZmZlclZpZXcoYnVmZmVyVmlldzogSUJ1ZmZlclZpZXcpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgcHJvcGVydGllcyA9IHRoaXMuZ2V0UHJvcGVydGllc1dpdGhCdWZmZXJWaWV3KGJ1ZmZlclZpZXcpO1xuICAgICAgICBmb3IgKGNvbnN0IG9iamVjdCBvZiBwcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICBpZiAob2JqZWN0LmJ1ZmZlclZpZXcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBvYmplY3QuYnVmZmVyVmlldztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2J1ZmZlclZpZXdUb0RhdGEuZGVsZXRlKGJ1ZmZlclZpZXcpO1xuICAgICAgICB0aGlzLl9idWZmZXJWaWV3VG9Qcm9wZXJ0aWVzLmRlbGV0ZShidWZmZXJWaWV3KTtcbiAgICAgICAgdGhpcy5fYWNjZXNzb3JUb0J1ZmZlclZpZXcuZm9yRWFjaCgoYnYsIGFjY2Vzc29yKSA9PiB7XG4gICAgICAgICAgICBpZiAoYnYgPT09IGJ1ZmZlclZpZXcpIHtcbiAgICAgICAgICAgICAgICAvLyBBZGRpdGlvbmFsbHksIHJlbW92ZSBieXRlT2Zmc2V0IGZyb20gYWNjZXNzb3IgcmVmZXJlbmNpbmcgdGhpcyBidWZmZXJWaWV3XG4gICAgICAgICAgICAgICAgaWYgKGFjY2Vzc29yLmJ5dGVPZmZzZXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgYWNjZXNzb3IuYnl0ZU9mZnNldDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fYWNjZXNzb3JUb0J1ZmZlclZpZXcuZGVsZXRlKGFjY2Vzc29yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEJ1ZmZlclZpZXcoYWNjZXNzb3I6IElBY2Nlc3Nvcik6IElCdWZmZXJWaWV3IHtcbiAgICAgICAgY29uc3QgYnVmZmVyVmlldyA9IHRoaXMuX2FjY2Vzc29yVG9CdWZmZXJWaWV3LmdldChhY2Nlc3Nvcik7XG4gICAgICAgIHRoaXMuX3ZlcmlmeUJ1ZmZlclZpZXcoYnVmZmVyVmlldyk7XG4gICAgICAgIHJldHVybiBidWZmZXJWaWV3ITtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0UHJvcGVydGllc1dpdGhCdWZmZXJWaWV3KGJ1ZmZlclZpZXc6IElCdWZmZXJWaWV3KTogSVByb3BlcnR5V2l0aEJ1ZmZlclZpZXdbXSB7XG4gICAgICAgIHRoaXMuX3ZlcmlmeUJ1ZmZlclZpZXcoYnVmZmVyVmlldyk7XG4gICAgICAgIHRoaXMuX2J1ZmZlclZpZXdUb1Byb3BlcnRpZXMuc2V0KGJ1ZmZlclZpZXcsIHRoaXMuX2J1ZmZlclZpZXdUb1Byb3BlcnRpZXMuZ2V0KGJ1ZmZlclZpZXcpID8/IFtdKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2J1ZmZlclZpZXdUb1Byb3BlcnRpZXMuZ2V0KGJ1ZmZlclZpZXcpITtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0RGF0YShidWZmZXJWaWV3OiBJQnVmZmVyVmlldyk6IFR5cGVkQXJyYXlGb3JnbFRGIHtcbiAgICAgICAgdGhpcy5fdmVyaWZ5QnVmZmVyVmlldyhidWZmZXJWaWV3KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2J1ZmZlclZpZXdUb0RhdGEuZ2V0KGJ1ZmZlclZpZXcpITtcbiAgICB9XG5cbiAgICBwcml2YXRlIF92ZXJpZnlCdWZmZXJWaWV3KGJ1ZmZlclZpZXc/OiBJQnVmZmVyVmlldyk6IHZvaWQge1xuICAgICAgICBpZiAoYnVmZmVyVmlldyA9PT0gdW5kZWZpbmVkIHx8ICF0aGlzLl9idWZmZXJWaWV3VG9EYXRhLmhhcyhidWZmZXJWaWV3KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBCdWZmZXJWaWV3ICR7YnVmZmVyVmlld30gbm90IGZvdW5kIGluIEJ1ZmZlck1hbmFnZXIuYCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb24gKi9cclxuLyogZXNsaW50LWRpc2FibGUgYmFieWxvbmpzL2F2YWlsYWJsZSAqL1xyXG5pbXBvcnQgdHlwZSB7IFR5cGVkQXJyYXkgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xyXG5cclxuY29uc3QgVHlwZWRBcnJheVRvV3JpdGVNZXRob2QgPSBuZXcgTWFwPEZ1bmN0aW9uLCAoZGF0YVZpZXc6IERhdGFWaWV3LCBieXRlT2Zmc2V0OiBudW1iZXIsIHZhbHVlOiBudW1iZXIpID0+IHZvaWQ+KFtcclxuICAgIFtJbnQ4QXJyYXksIChkLCBiLCB2KSA9PiBkLnNldEludDgoYiwgdildLFxyXG4gICAgW1VpbnQ4QXJyYXksIChkdiwgYm8sIHYpID0+IGR2LnNldFVpbnQ4KGJvLCB2KV0sXHJcbiAgICBbVWludDhDbGFtcGVkQXJyYXksIChkdiwgYm8sIHYpID0+IGR2LnNldFVpbnQ4KGJvLCB2KV0sXHJcbiAgICBbSW50MTZBcnJheSwgKGR2LCBibywgdikgPT4gZHYuc2V0SW50MTYoYm8sIHYsIHRydWUpXSxcclxuICAgIFtVaW50MTZBcnJheSwgKGR2LCBibywgdikgPT4gZHYuc2V0VWludDE2KGJvLCB2LCB0cnVlKV0sXHJcbiAgICBbSW50MzJBcnJheSwgKGR2LCBibywgdikgPT4gZHYuc2V0SW50MzIoYm8sIHYsIHRydWUpXSxcclxuICAgIFtVaW50MzJBcnJheSwgKGR2LCBibywgdikgPT4gZHYuc2V0VWludDMyKGJvLCB2LCB0cnVlKV0sXHJcbiAgICBbRmxvYXQzMkFycmF5LCAoZHYsIGJvLCB2KSA9PiBkdi5zZXRGbG9hdDMyKGJvLCB2LCB0cnVlKV0sXHJcbiAgICBbRmxvYXQ2NEFycmF5LCAoZHYsIGJvLCB2KSA9PiBkdi5zZXRGbG9hdDY0KGJvLCB2LCB0cnVlKV0sXHJcbl0pO1xyXG5cclxuLyoqIEBpbnRlcm5hbCAqL1xyXG5leHBvcnQgY2xhc3MgRGF0YVdyaXRlciB7XHJcbiAgICBwcml2YXRlIF9kYXRhOiBVaW50OEFycmF5O1xyXG4gICAgcHJpdmF0ZSBfZGF0YVZpZXc6IERhdGFWaWV3O1xyXG4gICAgcHJpdmF0ZSBfYnl0ZU9mZnNldDogbnVtYmVyO1xyXG5cclxuICAgIHB1YmxpYyB3cml0ZVR5cGVkQXJyYXkodmFsdWU6IEV4Y2x1ZGU8VHlwZWRBcnJheSwgQmlnSW50NjRBcnJheSB8IEJpZ1VpbnQ2NEFycmF5Pik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2NoZWNrR3Jvd0J1ZmZlcih2YWx1ZS5ieXRlTGVuZ3RoKTtcclxuICAgICAgICBjb25zdCBzZXRNZXRob2QgPSBUeXBlZEFycmF5VG9Xcml0ZU1ldGhvZC5nZXQodmFsdWUuY29uc3RydWN0b3IpITtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHNldE1ldGhvZCh0aGlzLl9kYXRhVmlldywgdGhpcy5fYnl0ZU9mZnNldCwgdmFsdWVbaV0gYXMgbnVtYmVyKTtcclxuICAgICAgICAgICAgdGhpcy5fYnl0ZU9mZnNldCArPSB2YWx1ZS5CWVRFU19QRVJfRUxFTUVOVDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGJ5dGVMZW5ndGg6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX2RhdGEgPSBuZXcgVWludDhBcnJheShieXRlTGVuZ3RoKTtcclxuICAgICAgICB0aGlzLl9kYXRhVmlldyA9IG5ldyBEYXRhVmlldyh0aGlzLl9kYXRhLmJ1ZmZlcik7XHJcbiAgICAgICAgdGhpcy5fYnl0ZU9mZnNldCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBieXRlT2Zmc2V0KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2J5dGVPZmZzZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldE91dHB1dERhdGEoKTogVWludDhBcnJheSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KHRoaXMuX2RhdGEuYnVmZmVyLCAwLCB0aGlzLl9ieXRlT2Zmc2V0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgd3JpdGVVSW50OCh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fY2hlY2tHcm93QnVmZmVyKDEpO1xyXG4gICAgICAgIHRoaXMuX2RhdGFWaWV3LnNldFVpbnQ4KHRoaXMuX2J5dGVPZmZzZXQsIHZhbHVlKTtcclxuICAgICAgICB0aGlzLl9ieXRlT2Zmc2V0Kys7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHdyaXRlSW50OCh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fY2hlY2tHcm93QnVmZmVyKDEpO1xyXG4gICAgICAgIHRoaXMuX2RhdGFWaWV3LnNldEludDgodGhpcy5fYnl0ZU9mZnNldCwgdmFsdWUpO1xyXG4gICAgICAgIHRoaXMuX2J5dGVPZmZzZXQrKztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgd3JpdGVJbnQxNihlbnRyeTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fY2hlY2tHcm93QnVmZmVyKDIpO1xyXG4gICAgICAgIHRoaXMuX2RhdGFWaWV3LnNldEludDE2KHRoaXMuX2J5dGVPZmZzZXQsIGVudHJ5LCB0cnVlKTtcclxuICAgICAgICB0aGlzLl9ieXRlT2Zmc2V0ICs9IDI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHdyaXRlVUludDE2KHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9jaGVja0dyb3dCdWZmZXIoMik7XHJcbiAgICAgICAgdGhpcy5fZGF0YVZpZXcuc2V0VWludDE2KHRoaXMuX2J5dGVPZmZzZXQsIHZhbHVlLCB0cnVlKTtcclxuICAgICAgICB0aGlzLl9ieXRlT2Zmc2V0ICs9IDI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHdyaXRlSW50MzIoZW50cnk6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2NoZWNrR3Jvd0J1ZmZlcig0KTtcclxuICAgICAgICB0aGlzLl9kYXRhVmlldy5zZXRJbnQzMih0aGlzLl9ieXRlT2Zmc2V0LCBlbnRyeSwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5fYnl0ZU9mZnNldCArPSA0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB3cml0ZVVJbnQzMih2YWx1ZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fY2hlY2tHcm93QnVmZmVyKDQpO1xyXG4gICAgICAgIHRoaXMuX2RhdGFWaWV3LnNldFVpbnQzMih0aGlzLl9ieXRlT2Zmc2V0LCB2YWx1ZSwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5fYnl0ZU9mZnNldCArPSA0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB3cml0ZUZsb2F0MzIodmFsdWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2NoZWNrR3Jvd0J1ZmZlcig0KTtcclxuICAgICAgICB0aGlzLl9kYXRhVmlldy5zZXRGbG9hdDMyKHRoaXMuX2J5dGVPZmZzZXQsIHZhbHVlLCB0cnVlKTtcclxuICAgICAgICB0aGlzLl9ieXRlT2Zmc2V0ICs9IDQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHdyaXRlRmxvYXQ2NCh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fY2hlY2tHcm93QnVmZmVyKDgpO1xyXG4gICAgICAgIHRoaXMuX2RhdGFWaWV3LnNldEZsb2F0NjQodGhpcy5fYnl0ZU9mZnNldCwgdmFsdWUsIHRydWUpO1xyXG4gICAgICAgIHRoaXMuX2J5dGVPZmZzZXQgKz0gODtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jaGVja0dyb3dCdWZmZXIoYnl0ZUxlbmd0aDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgbmV3Qnl0ZUxlbmd0aCA9IHRoaXMuYnl0ZU9mZnNldCArIGJ5dGVMZW5ndGg7XHJcbiAgICAgICAgaWYgKG5ld0J5dGVMZW5ndGggPiB0aGlzLl9kYXRhLmJ5dGVMZW5ndGgpIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3RGF0YSA9IG5ldyBVaW50OEFycmF5KG5ld0J5dGVMZW5ndGggKiAyKTtcclxuICAgICAgICAgICAgbmV3RGF0YS5zZXQodGhpcy5fZGF0YSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2RhdGEgPSBuZXdEYXRhO1xyXG4gICAgICAgICAgICB0aGlzLl9kYXRhVmlldyA9IG5ldyBEYXRhVmlldyh0aGlzLl9kYXRhLmJ1ZmZlcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB0eXBlIHsgSUFuaW1hdGlvbiwgSU5vZGUsIElCdWZmZXJWaWV3LCBJQWNjZXNzb3IsIElBbmltYXRpb25TYW1wbGVyLCBJQW5pbWF0aW9uQ2hhbm5lbCB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgQW5pbWF0aW9uU2FtcGxlckludGVycG9sYXRpb24sIEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLCBBY2Nlc3NvclR5cGUsIEFjY2Vzc29yQ29tcG9uZW50VHlwZSB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHR5cGUgeyBOb2RlIH0gZnJvbSBcImNvcmUvbm9kZVwiO1xyXG5pbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcImNvcmUvdHlwZXNcIjtcclxuaW1wb3J0IHsgVmVjdG9yMywgUXVhdGVybmlvbiB9IGZyb20gXCJjb3JlL01hdGhzL21hdGgudmVjdG9yXCI7XHJcbmltcG9ydCB7IFRvb2xzIH0gZnJvbSBcImNvcmUvTWlzYy90b29sc1wiO1xyXG5pbXBvcnQgeyBBbmltYXRpb24gfSBmcm9tIFwiY29yZS9BbmltYXRpb25zL2FuaW1hdGlvblwiO1xyXG5pbXBvcnQgeyBUcmFuc2Zvcm1Ob2RlIH0gZnJvbSBcImNvcmUvTWVzaGVzL3RyYW5zZm9ybU5vZGVcIjtcclxuaW1wb3J0IHR5cGUgeyBTY2VuZSB9IGZyb20gXCJjb3JlL3NjZW5lXCI7XHJcbmltcG9ydCB7IE1vcnBoVGFyZ2V0IH0gZnJvbSBcImNvcmUvTW9ycGgvbW9ycGhUYXJnZXRcIjtcclxuaW1wb3J0IHsgTWVzaCB9IGZyb20gXCJjb3JlL01lc2hlcy9tZXNoXCI7XHJcblxyXG5pbXBvcnQgdHlwZSB7IElBbmltYXRpb25LZXkgfSBmcm9tIFwiY29yZS9BbmltYXRpb25zL2FuaW1hdGlvbktleVwiO1xyXG5pbXBvcnQgeyBBbmltYXRpb25LZXlJbnRlcnBvbGF0aW9uIH0gZnJvbSBcImNvcmUvQW5pbWF0aW9ucy9hbmltYXRpb25LZXlcIjtcclxuXHJcbmltcG9ydCB7IENhbWVyYSB9IGZyb20gXCJjb3JlL0NhbWVyYXMvY2FtZXJhXCI7XHJcbmltcG9ydCB7IExpZ2h0IH0gZnJvbSBcImNvcmUvTGlnaHRzL2xpZ2h0XCI7XHJcbmltcG9ydCB0eXBlIHsgQnVmZmVyTWFuYWdlciB9IGZyb20gXCIuL2J1ZmZlck1hbmFnZXJcIjtcclxuaW1wb3J0IHsgR2V0QWNjZXNzb3JFbGVtZW50Q291bnQsIENvbnZlcnRUb1JpZ2h0SGFuZGVkUG9zaXRpb24sIENvbnZlcnRDYW1lcmFSb3RhdGlvblRvR0xURiwgQ29udmVydFRvUmlnaHRIYW5kZWRSb3RhdGlvbiB9IGZyb20gXCIuL2dsVEZVdGlsaXRpZXNcIjtcclxuXHJcbi8qKlxyXG4gKiBAaW50ZXJuYWxcclxuICogSW50ZXJmYWNlIHRvIHN0b3JlIGFuaW1hdGlvbiBkYXRhLlxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgaW50ZXJmYWNlIF9JQW5pbWF0aW9uRGF0YSB7XHJcbiAgICAvKipcclxuICAgICAqIEtleWZyYW1lIGRhdGEuXHJcbiAgICAgKi9cclxuICAgIGlucHV0czogbnVtYmVyW107XHJcbiAgICAvKipcclxuICAgICAqIFZhbHVlIGRhdGEuXHJcbiAgICAgKi9cclxuICAgIG91dHB1dHM6IG51bWJlcltdW107XHJcbiAgICAvKipcclxuICAgICAqIEFuaW1hdGlvbiBpbnRlcnBvbGF0aW9uIGRhdGEuXHJcbiAgICAgKi9cclxuICAgIHNhbXBsZXJJbnRlcnBvbGF0aW9uOiBBbmltYXRpb25TYW1wbGVySW50ZXJwb2xhdGlvbjtcclxuICAgIC8qKlxyXG4gICAgICogTWluaW11bSBrZXlmcmFtZSB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgaW5wdXRzTWluOiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIE1heGltdW0ga2V5ZnJhbWUgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIGlucHV0c01heDogbnVtYmVyO1xyXG59XHJcblxyXG4vKipcclxuICogQGludGVybmFsXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBpbnRlcmZhY2UgX0lBbmltYXRpb25JbmZvIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIHRhcmdldCBjaGFubmVsIGZvciB0aGUgYW5pbWF0aW9uXHJcbiAgICAgKi9cclxuICAgIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoOiBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aDtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIGdsVEYgYWNjZXNzb3IgdHlwZSBmb3IgdGhlIGRhdGEuXHJcbiAgICAgKi9cclxuICAgIGRhdGFBY2Nlc3NvclR5cGU6IEFjY2Vzc29yVHlwZS5WRUMzIHwgQWNjZXNzb3JUeXBlLlZFQzQgfCBBY2Nlc3NvclR5cGUuU0NBTEFSO1xyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgaWYgcXVhdGVybmlvbnMgc2hvdWxkIGJlIHVzZWQuXHJcbiAgICAgKi9cclxuICAgIHVzZVF1YXRlcm5pb246IGJvb2xlYW47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAaW50ZXJuYWxcclxuICogRW51bSBmb3IgaGFuZGxpbmcgaW4gdGFuZ2VudCBhbmQgb3V0IHRhbmdlbnQuXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmVudW0gX1RhbmdlbnRUeXBlIHtcclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoYXQgaW5wdXQgdGFuZ2VudHMgYXJlIHVzZWQuXHJcbiAgICAgKi9cclxuICAgIElOVEFOR0VOVCxcclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoYXQgb3V0cHV0IHRhbmdlbnRzIGFyZSB1c2VkLlxyXG4gICAgICovXHJcbiAgICBPVVRUQU5HRU5ULFxyXG59XHJcblxyXG4vKipcclxuICogQGludGVybmFsXHJcbiAqIFV0aWxpdHkgY2xhc3MgZm9yIGdlbmVyYXRpbmcgZ2xURiBhbmltYXRpb24gZGF0YSBmcm9tIEJhYnlsb25KUy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBfR0xURkFuaW1hdGlvbiB7XHJcbiAgICAvKipcclxuICAgICAqIERldGVybWluZSBpZiBhIG5vZGUgaXMgdHJhbnNmb3JtYWJsZSAtIGllIGhhcyBwcm9wZXJ0aWVzIGl0IHNob3VsZCBiZSBwYXJ0IG9mIGFuaW1hdGlvbiBvZiB0cmFuc2Zvcm1hdGlvbi5cclxuICAgICAqIEBwYXJhbSBiYWJ5bG9uTm9kZSB0aGUgbm9kZSB0byB0ZXN0XHJcbiAgICAgKiBAcmV0dXJucyB0cnVlIGlmIGNhbiBiZSBhbmltYXRlZCwgZmFsc2Ugb3RoZXJ3aXNlLiBGYWxzZSBpZiB0aGUgcGFyYW1ldGVyIGlzIG51bGwgb3IgdW5kZWZpbmVkLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfSXNUcmFuc2Zvcm1hYmxlKGJhYnlsb25Ob2RlOiBOb2RlKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIGJhYnlsb25Ob2RlICYmIChiYWJ5bG9uTm9kZSBpbnN0YW5jZW9mIFRyYW5zZm9ybU5vZGUgfHwgYmFieWxvbk5vZGUgaW5zdGFuY2VvZiBDYW1lcmEgfHwgYmFieWxvbk5vZGUgaW5zdGFuY2VvZiBMaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaWdub3JlXHJcbiAgICAgKlxyXG4gICAgICogQ3JlYXRlcyBnbFRGIGNoYW5uZWwgYW5pbWF0aW9uIGZyb20gQmFieWxvbkpTIGFuaW1hdGlvbi5cclxuICAgICAqIEBwYXJhbSBiYWJ5bG9uVHJhbnNmb3JtTm9kZSAtIEJhYnlsb25KUyBtZXNoLlxyXG4gICAgICogQHBhcmFtIGFuaW1hdGlvbiAtIGFuaW1hdGlvbi5cclxuICAgICAqIEBwYXJhbSBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCAtIFRoZSB0YXJnZXQgYW5pbWF0aW9uIGNoYW5uZWwuXHJcbiAgICAgKiBAcGFyYW0gdXNlUXVhdGVybmlvbiAtIFNwZWNpZmllcyBpZiBxdWF0ZXJuaW9ucyBhcmUgdXNlZC5cclxuICAgICAqIEByZXR1cm5zIG51bGxhYmxlIElBbmltYXRpb25EYXRhXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgX0NyZWF0ZU5vZGVBbmltYXRpb24oXHJcbiAgICAgICAgYmFieWxvblRyYW5zZm9ybU5vZGU6IE5vZGUsXHJcbiAgICAgICAgYW5pbWF0aW9uOiBBbmltYXRpb24sXHJcbiAgICAgICAgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGg6IEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLFxyXG4gICAgICAgIHVzZVF1YXRlcm5pb246IGJvb2xlYW4sXHJcbiAgICAgICAgYW5pbWF0aW9uU2FtcGxlUmF0ZTogbnVtYmVyXHJcbiAgICApOiBOdWxsYWJsZTxfSUFuaW1hdGlvbkRhdGE+IHtcclxuICAgICAgICBpZiAodGhpcy5fSXNUcmFuc2Zvcm1hYmxlKGJhYnlsb25UcmFuc2Zvcm1Ob2RlKSkge1xyXG4gICAgICAgICAgICBjb25zdCBpbnB1dHM6IG51bWJlcltdID0gW107XHJcbiAgICAgICAgICAgIGNvbnN0IG91dHB1dHM6IG51bWJlcltdW10gPSBbXTtcclxuICAgICAgICAgICAgY29uc3Qga2V5RnJhbWVzID0gYW5pbWF0aW9uLmdldEtleXMoKTtcclxuICAgICAgICAgICAgY29uc3QgbWluTWF4S2V5RnJhbWVzID0gX0dMVEZBbmltYXRpb24uX0NhbGN1bGF0ZU1pbk1heEtleUZyYW1lcyhrZXlGcmFtZXMpO1xyXG4gICAgICAgICAgICBjb25zdCBpbnRlcnBvbGF0aW9uT3JCYWtlID0gX0dMVEZBbmltYXRpb24uX0RlZHVjZUludGVycG9sYXRpb24oa2V5RnJhbWVzLCBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCwgdXNlUXVhdGVybmlvbik7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBpbnRlcnBvbGF0aW9uID0gaW50ZXJwb2xhdGlvbk9yQmFrZS5pbnRlcnBvbGF0aW9uVHlwZTtcclxuICAgICAgICAgICAgY29uc3Qgc2hvdWxkQmFrZUFuaW1hdGlvbiA9IGludGVycG9sYXRpb25PckJha2Uuc2hvdWxkQmFrZUFuaW1hdGlvbjtcclxuXHJcbiAgICAgICAgICAgIGlmIChzaG91bGRCYWtlQW5pbWF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBfR0xURkFuaW1hdGlvbi5fQ3JlYXRlQmFrZWRBbmltYXRpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgYmFieWxvblRyYW5zZm9ybU5vZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLFxyXG4gICAgICAgICAgICAgICAgICAgIG1pbk1heEtleUZyYW1lcy5taW4sXHJcbiAgICAgICAgICAgICAgICAgICAgbWluTWF4S2V5RnJhbWVzLm1heCxcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24uZnJhbWVQZXJTZWNvbmQsXHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uU2FtcGxlUmF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dHMsXHJcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0cyxcclxuICAgICAgICAgICAgICAgICAgICBtaW5NYXhLZXlGcmFtZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlUXVhdGVybmlvblxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChpbnRlcnBvbGF0aW9uID09PSBBbmltYXRpb25TYW1wbGVySW50ZXJwb2xhdGlvbi5MSU5FQVIgfHwgaW50ZXJwb2xhdGlvbiA9PT0gQW5pbWF0aW9uU2FtcGxlckludGVycG9sYXRpb24uU1RFUCkge1xyXG4gICAgICAgICAgICAgICAgICAgIF9HTFRGQW5pbWF0aW9uLl9DcmVhdGVMaW5lYXJPclN0ZXBBbmltYXRpb24oYmFieWxvblRyYW5zZm9ybU5vZGUsIGFuaW1hdGlvbiwgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsIGlucHV0cywgb3V0cHV0cywgdXNlUXVhdGVybmlvbik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGludGVycG9sYXRpb24gPT09IEFuaW1hdGlvblNhbXBsZXJJbnRlcnBvbGF0aW9uLkNVQklDU1BMSU5FKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX0dMVEZBbmltYXRpb24uX0NyZWF0ZUN1YmljU3BsaW5lQW5pbWF0aW9uKGJhYnlsb25UcmFuc2Zvcm1Ob2RlLCBhbmltYXRpb24sIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLCBpbnB1dHMsIG91dHB1dHMsIHVzZVF1YXRlcm5pb24pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBfR0xURkFuaW1hdGlvbi5fQ3JlYXRlQmFrZWRBbmltYXRpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhYnlsb25UcmFuc2Zvcm1Ob2RlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5NYXhLZXlGcmFtZXMubWluLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5NYXhLZXlGcmFtZXMubWF4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24uZnJhbWVQZXJTZWNvbmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvblNhbXBsZVJhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluTWF4S2V5RnJhbWVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VRdWF0ZXJuaW9uXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGlucHV0cy5sZW5ndGggJiYgb3V0cHV0cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdDogX0lBbmltYXRpb25EYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0czogaW5wdXRzLFxyXG4gICAgICAgICAgICAgICAgICAgIG91dHB1dHM6IG91dHB1dHMsXHJcbiAgICAgICAgICAgICAgICAgICAgc2FtcGxlckludGVycG9sYXRpb246IGludGVycG9sYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRzTWluOiBzaG91bGRCYWtlQW5pbWF0aW9uID8gbWluTWF4S2V5RnJhbWVzLm1pbiA6IFRvb2xzLkZsb2F0Um91bmQobWluTWF4S2V5RnJhbWVzLm1pbiAvIGFuaW1hdGlvbi5mcmFtZVBlclNlY29uZCksXHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRzTWF4OiBzaG91bGRCYWtlQW5pbWF0aW9uID8gbWluTWF4S2V5RnJhbWVzLm1heCA6IFRvb2xzLkZsb2F0Um91bmQobWluTWF4S2V5RnJhbWVzLm1heCAvIGFuaW1hdGlvbi5mcmFtZVBlclNlY29uZCksXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9EZWR1Y2VBbmltYXRpb25JbmZvKGFuaW1hdGlvbjogQW5pbWF0aW9uKTogTnVsbGFibGU8X0lBbmltYXRpb25JbmZvPiB7XHJcbiAgICAgICAgbGV0IGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoOiBOdWxsYWJsZTxBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aD4gPSBudWxsO1xyXG4gICAgICAgIGxldCBkYXRhQWNjZXNzb3JUeXBlID0gQWNjZXNzb3JUeXBlLlZFQzM7XHJcbiAgICAgICAgbGV0IHVzZVF1YXRlcm5pb246IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgICBjb25zdCBwcm9wZXJ0eSA9IGFuaW1hdGlvbi50YXJnZXRQcm9wZXJ0eS5zcGxpdChcIi5cIik7XHJcbiAgICAgICAgc3dpdGNoIChwcm9wZXJ0eVswXSkge1xyXG4gICAgICAgICAgICBjYXNlIFwic2NhbGluZ1wiOiB7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCA9IEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLlNDQUxFO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcInBvc2l0aW9uXCI6IHtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoID0gQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGguVFJBTlNMQVRJT047XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwicm90YXRpb25cIjoge1xyXG4gICAgICAgICAgICAgICAgZGF0YUFjY2Vzc29yVHlwZSA9IEFjY2Vzc29yVHlwZS5WRUM0O1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGggPSBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aC5ST1RBVElPTjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJyb3RhdGlvblF1YXRlcm5pb25cIjoge1xyXG4gICAgICAgICAgICAgICAgZGF0YUFjY2Vzc29yVHlwZSA9IEFjY2Vzc29yVHlwZS5WRUM0O1xyXG4gICAgICAgICAgICAgICAgdXNlUXVhdGVybmlvbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCA9IEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLlJPVEFUSU9OO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcImluZmx1ZW5jZVwiOiB7XHJcbiAgICAgICAgICAgICAgICBkYXRhQWNjZXNzb3JUeXBlID0gQWNjZXNzb3JUeXBlLlNDQUxBUjtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoID0gQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGguV0VJR0hUUztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgICAgIFRvb2xzLkVycm9yKGBVbnN1cHBvcnRlZCBhbmltYXRhYmxlIHByb3BlcnR5ICR7cHJvcGVydHlbMF19YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoOiBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCwgZGF0YUFjY2Vzc29yVHlwZTogZGF0YUFjY2Vzc29yVHlwZSwgdXNlUXVhdGVybmlvbjogdXNlUXVhdGVybmlvbiB9O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIFRvb2xzLkVycm9yKFwiYW5pbWF0aW9uIGNoYW5uZWwgdGFyZ2V0IHBhdGggYW5kIGRhdGEgYWNjZXNzb3IgdHlwZSBjb3VsZCBiZSBkZWR1Y2VkXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpZ25vcmVcclxuICAgICAqIENyZWF0ZSBub2RlIGFuaW1hdGlvbnMgZnJvbSB0aGUgdHJhbnNmb3JtIG5vZGUgYW5pbWF0aW9uc1xyXG4gICAgICogQHBhcmFtIGJhYnlsb25Ob2RlXHJcbiAgICAgKiBAcGFyYW0gcnVudGltZUdMVEZBbmltYXRpb25cclxuICAgICAqIEBwYXJhbSBpZGxlR0xURkFuaW1hdGlvbnNcclxuICAgICAqIEBwYXJhbSBub2RlTWFwXHJcbiAgICAgKiBAcGFyYW0gbm9kZXNcclxuICAgICAqIEBwYXJhbSBidWZmZXJNYW5hZ2VyXHJcbiAgICAgKiBAcGFyYW0gYnVmZmVyVmlld3NcclxuICAgICAqIEBwYXJhbSBhY2Nlc3NvcnNcclxuICAgICAqIEBwYXJhbSBhbmltYXRpb25TYW1wbGVSYXRlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgX0NyZWF0ZU5vZGVBbmltYXRpb25Gcm9tTm9kZUFuaW1hdGlvbnMoXHJcbiAgICAgICAgYmFieWxvbk5vZGU6IE5vZGUsXHJcbiAgICAgICAgcnVudGltZUdMVEZBbmltYXRpb246IElBbmltYXRpb24sXHJcbiAgICAgICAgaWRsZUdMVEZBbmltYXRpb25zOiBJQW5pbWF0aW9uW10sXHJcbiAgICAgICAgbm9kZU1hcDogTWFwPE5vZGUsIG51bWJlcj4sXHJcbiAgICAgICAgbm9kZXM6IElOb2RlW10sXHJcbiAgICAgICAgYnVmZmVyTWFuYWdlcjogQnVmZmVyTWFuYWdlcixcclxuICAgICAgICBidWZmZXJWaWV3czogSUJ1ZmZlclZpZXdbXSxcclxuICAgICAgICBhY2Nlc3NvcnM6IElBY2Nlc3NvcltdLFxyXG4gICAgICAgIGFuaW1hdGlvblNhbXBsZVJhdGU6IG51bWJlcixcclxuICAgICAgICB1c2VSaWdodEhhbmRlZDogYm9vbGVhbixcclxuICAgICAgICBzaG91bGRFeHBvcnRBbmltYXRpb24/OiAoYW5pbWF0aW9uOiBBbmltYXRpb24pID0+IGJvb2xlYW5cclxuICAgICkge1xyXG4gICAgICAgIGxldCBnbFRGQW5pbWF0aW9uOiBJQW5pbWF0aW9uO1xyXG4gICAgICAgIGlmIChfR0xURkFuaW1hdGlvbi5fSXNUcmFuc2Zvcm1hYmxlKGJhYnlsb25Ob2RlKSkge1xyXG4gICAgICAgICAgICBpZiAoYmFieWxvbk5vZGUuYW5pbWF0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBhbmltYXRpb24gb2YgYmFieWxvbk5vZGUuYW5pbWF0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzaG91bGRFeHBvcnRBbmltYXRpb24gJiYgIXNob3VsZEV4cG9ydEFuaW1hdGlvbihhbmltYXRpb24pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhbmltYXRpb25JbmZvID0gX0dMVEZBbmltYXRpb24uX0RlZHVjZUFuaW1hdGlvbkluZm8oYW5pbWF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYW5pbWF0aW9uSW5mbykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnbFRGQW5pbWF0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogYW5pbWF0aW9uLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYW1wbGVyczogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFubmVsczogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9HTFRGQW5pbWF0aW9uLl9BZGRBbmltYXRpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHthbmltYXRpb24ubmFtZX1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLmhhc1J1bm5pbmdSdW50aW1lQW5pbWF0aW9ucyA/IHJ1bnRpbWVHTFRGQW5pbWF0aW9uIDogZ2xURkFuaW1hdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhYnlsb25Ob2RlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uSW5mby5kYXRhQWNjZXNzb3JUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uSW5mby5hbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVNYXAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZmZXJNYW5hZ2VyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyVmlld3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2Nlc3NvcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25JbmZvLnVzZVF1YXRlcm5pb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25TYW1wbGVSYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlUmlnaHRIYW5kZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdsVEZBbmltYXRpb24uc2FtcGxlcnMubGVuZ3RoICYmIGdsVEZBbmltYXRpb24uY2hhbm5lbHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZGxlR0xURkFuaW1hdGlvbnMucHVzaChnbFRGQW5pbWF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpZ25vcmVcclxuICAgICAqIENyZWF0ZSBpbmRpdmlkdWFsIG1vcnBoIGFuaW1hdGlvbnMgZnJvbSB0aGUgbWVzaCdzIG1vcnBoIHRhcmdldCBhbmltYXRpb24gdHJhY2tzXHJcbiAgICAgKiBAcGFyYW0gYmFieWxvbk5vZGVcclxuICAgICAqIEBwYXJhbSBydW50aW1lR0xURkFuaW1hdGlvblxyXG4gICAgICogQHBhcmFtIGlkbGVHTFRGQW5pbWF0aW9uc1xyXG4gICAgICogQHBhcmFtIG5vZGVNYXBcclxuICAgICAqIEBwYXJhbSBub2Rlc1xyXG4gICAgICogQHBhcmFtIGJ1ZmZlck1hbmFnZXJcclxuICAgICAqIEBwYXJhbSBidWZmZXJWaWV3c1xyXG4gICAgICogQHBhcmFtIGFjY2Vzc29yc1xyXG4gICAgICogQHBhcmFtIGFuaW1hdGlvblNhbXBsZVJhdGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBfQ3JlYXRlTW9ycGhUYXJnZXRBbmltYXRpb25Gcm9tTW9ycGhUYXJnZXRBbmltYXRpb25zKFxyXG4gICAgICAgIGJhYnlsb25Ob2RlOiBOb2RlLFxyXG4gICAgICAgIHJ1bnRpbWVHTFRGQW5pbWF0aW9uOiBJQW5pbWF0aW9uLFxyXG4gICAgICAgIGlkbGVHTFRGQW5pbWF0aW9uczogSUFuaW1hdGlvbltdLFxyXG4gICAgICAgIG5vZGVNYXA6IE1hcDxOb2RlLCBudW1iZXI+LFxyXG4gICAgICAgIG5vZGVzOiBJTm9kZVtdLFxyXG4gICAgICAgIGJ1ZmZlck1hbmFnZXI6IEJ1ZmZlck1hbmFnZXIsXHJcbiAgICAgICAgYnVmZmVyVmlld3M6IElCdWZmZXJWaWV3W10sXHJcbiAgICAgICAgYWNjZXNzb3JzOiBJQWNjZXNzb3JbXSxcclxuICAgICAgICBhbmltYXRpb25TYW1wbGVSYXRlOiBudW1iZXIsXHJcbiAgICAgICAgdXNlUmlnaHRIYW5kZWQ6IGJvb2xlYW4sXHJcbiAgICAgICAgc2hvdWxkRXhwb3J0QW5pbWF0aW9uPzogKGFuaW1hdGlvbjogQW5pbWF0aW9uKSA9PiBib29sZWFuXHJcbiAgICApIHtcclxuICAgICAgICBsZXQgZ2xURkFuaW1hdGlvbjogSUFuaW1hdGlvbjtcclxuICAgICAgICBpZiAoYmFieWxvbk5vZGUgaW5zdGFuY2VvZiBNZXNoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1vcnBoVGFyZ2V0TWFuYWdlciA9IGJhYnlsb25Ob2RlLm1vcnBoVGFyZ2V0TWFuYWdlcjtcclxuICAgICAgICAgICAgaWYgKG1vcnBoVGFyZ2V0TWFuYWdlcikge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb3JwaFRhcmdldE1hbmFnZXIubnVtVGFyZ2V0czsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9ycGhUYXJnZXQgPSBtb3JwaFRhcmdldE1hbmFnZXIuZ2V0VGFyZ2V0KGkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYW5pbWF0aW9uIG9mIG1vcnBoVGFyZ2V0LmFuaW1hdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNob3VsZEV4cG9ydEFuaW1hdGlvbiAmJiAhc2hvdWxkRXhwb3J0QW5pbWF0aW9uKGFuaW1hdGlvbikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbWJpbmVkQW5pbWF0aW9uID0gbmV3IEFuaW1hdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2FuaW1hdGlvbi5uYW1lfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImluZmx1ZW5jZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLmZyYW1lUGVyU2Vjb25kLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLmRhdGFUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLmxvb3BNb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLmVuYWJsZUJsZW5kaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbWJpbmVkQW5pbWF0aW9uS2V5czogSUFuaW1hdGlvbktleVtdID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFuaW1hdGlvbktleXMgPSBhbmltYXRpb24uZ2V0S2V5cygpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBhbmltYXRpb25LZXlzLmxlbmd0aDsgKytqKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhbmltYXRpb25LZXkgPSBhbmltYXRpb25LZXlzW2pdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBtb3JwaFRhcmdldE1hbmFnZXIubnVtVGFyZ2V0czsgKytrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGsgPT0gaSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21iaW5lZEFuaW1hdGlvbktleXMucHVzaChhbmltYXRpb25LZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbWJpbmVkQW5pbWF0aW9uS2V5cy5wdXNoKHsgZnJhbWU6IGFuaW1hdGlvbktleS5mcmFtZSwgdmFsdWU6IDAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbWJpbmVkQW5pbWF0aW9uLnNldEtleXMoY29tYmluZWRBbmltYXRpb25LZXlzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYW5pbWF0aW9uSW5mbyA9IF9HTFRGQW5pbWF0aW9uLl9EZWR1Y2VBbmltYXRpb25JbmZvKGNvbWJpbmVkQW5pbWF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFuaW1hdGlvbkluZm8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsVEZBbmltYXRpb24gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogY29tYmluZWRBbmltYXRpb24ubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYW1wbGVyczogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbm5lbHM6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9HTFRGQW5pbWF0aW9uLl9BZGRBbmltYXRpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLmhhc1J1bm5pbmdSdW50aW1lQW5pbWF0aW9ucyA/IHJ1bnRpbWVHTFRGQW5pbWF0aW9uIDogZ2xURkFuaW1hdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uTm9kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21iaW5lZEFuaW1hdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25JbmZvLmRhdGFBY2Nlc3NvclR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uSW5mby5hbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlTWFwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlck1hbmFnZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyVmlld3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXNzb3JzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkluZm8udXNlUXVhdGVybmlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25TYW1wbGVSYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZVJpZ2h0SGFuZGVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vcnBoVGFyZ2V0TWFuYWdlci5udW1UYXJnZXRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdsVEZBbmltYXRpb24uc2FtcGxlcnMubGVuZ3RoICYmIGdsVEZBbmltYXRpb24uY2hhbm5lbHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRsZUdMVEZBbmltYXRpb25zLnB1c2goZ2xURkFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqIENyZWF0ZSBub2RlIGFuZCBtb3JwaCBhbmltYXRpb25zIGZyb20gdGhlIGFuaW1hdGlvbiBncm91cHNcclxuICAgICAqIEBwYXJhbSBiYWJ5bG9uU2NlbmVcclxuICAgICAqIEBwYXJhbSBnbFRGQW5pbWF0aW9uc1xyXG4gICAgICogQHBhcmFtIG5vZGVNYXBcclxuICAgICAqIEBwYXJhbSBub2Rlc1xyXG4gICAgICogQHBhcmFtIGJ1ZmZlck1hbmFnZXJcclxuICAgICAqIEBwYXJhbSBidWZmZXJWaWV3c1xyXG4gICAgICogQHBhcmFtIGFjY2Vzc29yc1xyXG4gICAgICogQHBhcmFtIGFuaW1hdGlvblNhbXBsZVJhdGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBfQ3JlYXRlTm9kZUFuZE1vcnBoQW5pbWF0aW9uRnJvbUFuaW1hdGlvbkdyb3VwcyhcclxuICAgICAgICBiYWJ5bG9uU2NlbmU6IFNjZW5lLFxyXG4gICAgICAgIGdsVEZBbmltYXRpb25zOiBJQW5pbWF0aW9uW10sXHJcbiAgICAgICAgbm9kZU1hcDogTWFwPE5vZGUsIG51bWJlcj4sXHJcbiAgICAgICAgYnVmZmVyTWFuYWdlcjogQnVmZmVyTWFuYWdlcixcclxuICAgICAgICBidWZmZXJWaWV3czogSUJ1ZmZlclZpZXdbXSxcclxuICAgICAgICBhY2Nlc3NvcnM6IElBY2Nlc3NvcltdLFxyXG4gICAgICAgIGFuaW1hdGlvblNhbXBsZVJhdGU6IG51bWJlcixcclxuICAgICAgICBsZWZ0SGFuZGVkTm9kZXM6IFNldDxOb2RlPixcclxuICAgICAgICBzaG91bGRFeHBvcnRBbmltYXRpb24/OiAoYW5pbWF0aW9uOiBBbmltYXRpb24pID0+IGJvb2xlYW5cclxuICAgICkge1xyXG4gICAgICAgIGxldCBnbFRGQW5pbWF0aW9uOiBJQW5pbWF0aW9uO1xyXG4gICAgICAgIGlmIChiYWJ5bG9uU2NlbmUuYW5pbWF0aW9uR3JvdXBzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFuaW1hdGlvbkdyb3VwcyA9IGJhYnlsb25TY2VuZS5hbmltYXRpb25Hcm91cHM7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgYW5pbWF0aW9uR3JvdXAgb2YgYW5pbWF0aW9uR3JvdXBzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtb3JwaEFuaW1hdGlvbnM6IE1hcDxNZXNoLCBNYXA8TW9ycGhUYXJnZXQsIEFuaW1hdGlvbj4+ID0gbmV3IE1hcCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2FtcGxlQW5pbWF0aW9uczogTWFwPE1lc2gsIEFuaW1hdGlvbj4gPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtb3JwaEFuaW1hdGlvbk1lc2hlczogU2V0PE1lc2g+ID0gbmV3IFNldCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYW5pbWF0aW9uR3JvdXBGcmFtZURpZmYgPSBhbmltYXRpb25Hcm91cC50byAtIGFuaW1hdGlvbkdyb3VwLmZyb207XHJcbiAgICAgICAgICAgICAgICBnbFRGQW5pbWF0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGFuaW1hdGlvbkdyb3VwLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgY2hhbm5lbHM6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgIHNhbXBsZXJzOiBbXSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFuaW1hdGlvbkdyb3VwLnRhcmdldGVkQW5pbWF0aW9ucy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldEFuaW1hdGlvbiA9IGFuaW1hdGlvbkdyb3VwLnRhcmdldGVkQW5pbWF0aW9uc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSB0YXJnZXRBbmltYXRpb24udGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFuaW1hdGlvbiA9IHRhcmdldEFuaW1hdGlvbi5hbmltYXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNob3VsZEV4cG9ydEFuaW1hdGlvbiAmJiAhc2hvdWxkRXhwb3J0QW5pbWF0aW9uKGFuaW1hdGlvbikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb252ZXJ0VG9SaWdodEhhbmRlZCA9IGxlZnRIYW5kZWROb2Rlcy5oYXModGFyZ2V0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX0lzVHJhbnNmb3JtYWJsZSh0YXJnZXQpIHx8ICh0YXJnZXQubGVuZ3RoID09PSAxICYmIHRoaXMuX0lzVHJhbnNmb3JtYWJsZSh0YXJnZXRbMF0pKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhbmltYXRpb25JbmZvID0gX0dMVEZBbmltYXRpb24uX0RlZHVjZUFuaW1hdGlvbkluZm8odGFyZ2V0QW5pbWF0aW9uLmFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbmltYXRpb25JbmZvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBiYWJ5bG9uVHJhbnNmb3JtTm9kZSA9IHRoaXMuX0lzVHJhbnNmb3JtYWJsZSh0YXJnZXQpID8gdGFyZ2V0IDogdGhpcy5fSXNUcmFuc2Zvcm1hYmxlKHRhcmdldFswXSkgPyB0YXJnZXRbMF0gOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJhYnlsb25UcmFuc2Zvcm1Ob2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX0dMVEZBbmltYXRpb24uX0FkZEFuaW1hdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7YW5pbWF0aW9uLm5hbWV9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xURkFuaW1hdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFieWxvblRyYW5zZm9ybU5vZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uSW5mby5kYXRhQWNjZXNzb3JUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25JbmZvLmFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlTWFwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZmZXJNYW5hZ2VyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZmZXJWaWV3cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXNzb3JzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25JbmZvLnVzZVF1YXRlcm5pb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvblNhbXBsZVJhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnZlcnRUb1JpZ2h0SGFuZGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0IGluc3RhbmNlb2YgTW9ycGhUYXJnZXQgfHwgKHRhcmdldC5sZW5ndGggPT09IDEgJiYgdGFyZ2V0WzBdIGluc3RhbmNlb2YgTW9ycGhUYXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFuaW1hdGlvbkluZm8gPSBfR0xURkFuaW1hdGlvbi5fRGVkdWNlQW5pbWF0aW9uSW5mbyh0YXJnZXRBbmltYXRpb24uYW5pbWF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFuaW1hdGlvbkluZm8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhYnlsb25Nb3JwaFRhcmdldCA9IHRhcmdldCBpbnN0YW5jZW9mIE1vcnBoVGFyZ2V0ID8gKHRhcmdldCBhcyBNb3JwaFRhcmdldCkgOiAodGFyZ2V0WzBdIGFzIE1vcnBoVGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiYWJ5bG9uTW9ycGhUYXJnZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBiYWJ5bG9uTW9ycGhUYXJnZXRNYW5hZ2VyID0gYmFieWxvblNjZW5lLm1vcnBoVGFyZ2V0TWFuYWdlcnMuZmluZCgobW9ycGhUYXJnZXRNYW5hZ2VyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbW9ycGhUYXJnZXRNYW5hZ2VyLm51bVRhcmdldHM7ICsraikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vcnBoVGFyZ2V0TWFuYWdlci5nZXRUYXJnZXQoaikgPT09IGJhYnlsb25Nb3JwaFRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmFieWxvbk1vcnBoVGFyZ2V0TWFuYWdlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBiYWJ5bG9uTWVzaCA9IGJhYnlsb25TY2VuZS5tZXNoZXMuZmluZCgobWVzaCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChtZXNoIGFzIE1lc2gpLm1vcnBoVGFyZ2V0TWFuYWdlciA9PT0gYmFieWxvbk1vcnBoVGFyZ2V0TWFuYWdlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgYXMgTWVzaDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJhYnlsb25NZXNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW1vcnBoQW5pbWF0aW9ucy5oYXMoYmFieWxvbk1lc2gpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9ycGhBbmltYXRpb25zLnNldChiYWJ5bG9uTWVzaCwgbmV3IE1hcCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vcnBoQW5pbWF0aW9ucy5nZXQoYmFieWxvbk1lc2gpPy5zZXQoYmFieWxvbk1vcnBoVGFyZ2V0LCBhbmltYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9ycGhBbmltYXRpb25NZXNoZXMuYWRkKGJhYnlsb25NZXNoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbXBsZUFuaW1hdGlvbnMuc2V0KGJhYnlsb25NZXNoLCBhbmltYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyBpcyB0aGUgcGxhY2UgZm9yIHRoZSBLSFJfYW5pbWF0aW9uX3BvaW50ZXIuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbW9ycGhBbmltYXRpb25NZXNoZXMuZm9yRWFjaCgobWVzaCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vcnBoVGFyZ2V0TWFuYWdlciA9IG1lc2gubW9ycGhUYXJnZXRNYW5hZ2VyITtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY29tYmluZWRBbmltYXRpb25Hcm91cDogTnVsbGFibGU8QW5pbWF0aW9uPiA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYW5pbWF0aW9uS2V5czogSUFuaW1hdGlvbktleVtdID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2FtcGxlQW5pbWF0aW9uID0gc2FtcGxlQW5pbWF0aW9ucy5nZXQobWVzaCkhO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNhbXBsZUFuaW1hdGlvbktleXMgPSBzYW1wbGVBbmltYXRpb24uZ2V0S2V5cygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG51bUFuaW1hdGlvbktleXMgPSBzYW1wbGVBbmltYXRpb25LZXlzLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBEdWUgdG8gaG93IGdsVEYgZXhwZWN0cyBtb3JwaCB0YXJnZXQgYW5pbWF0aW9uIGRhdGEgdG8gYmUgZm9ybWF0dGVkLCB3ZSBuZWVkIHRvIHJlYXJyYW5nZSB0aGUgaW5kaXZpZHVhbCBtb3JwaCB0YXJnZXQgYW5pbWF0aW9uIHRyYWNrcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjaCB0aGF0IHdlIGhhdmUgYSBzaW5nbGUgYW5pbWF0aW9uLCB3aGVyZSBhIGdpdmVuIGtleWZyYW1lIGlucHV0IHZhbHVlIGhhcyBzdWNjZXNzaXZlIG91dHB1dCB2YWx1ZXMgZm9yIGVhY2ggbW9ycGggdGFyZ2V0IGJlbG9uZ2luZyB0byB0aGUgbWFuYWdlci5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU2VlOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAjYW5pbWF0aW9uc1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgV2UgZG8gdGhpcyB2aWEgY29uc3RydWN0aW5nIGEgbmV3IEFuaW1hdGlvbiB0cmFjaywgYW5kIGludGVybGVhdmluZyB0aGUgZnJhbWVzIG9mIGVhY2ggbW9ycGggdGFyZ2V0IGFuaW1hdGlvbiB0cmFjayBpbiB0aGUgY3VycmVudCBBbmltYXRpb24gR3JvdXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgV2UgcmV1c2UgdGhlIEJhYnlsb24gQW5pbWF0aW9uIGRhdGEgc3RydWN0dXJlIGZvciBlYXNlIG9mIGhhbmRsaW5nIGV4cG9ydCBvZiBjdWJpYyBzcGxpbmUgYW5pbWF0aW9uIGtleXMsIGFuZCB0byByZXVzZSB0aGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmcgX0dMVEZBbmltYXRpb24uQWRkQW5pbWF0aW9uIGNvZGVwYXRoIHdpdGggbWluaW1hbCBtb2RpZmljYXRpb24sIGhvd2V2ZXIgdGhlIGNvbnN0cnVjdGVkIEJhYnlsb24gQW5pbWF0aW9uIGlzIE5PVCBpbnRlbmRlZCBmb3IgdXNlIGluLWVuZ2luZS5cclxuICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQW5pbWF0aW9uS2V5czsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbW9ycGhUYXJnZXRNYW5hZ2VyLm51bVRhcmdldHM7ICsraikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9ycGhUYXJnZXQgPSBtb3JwaFRhcmdldE1hbmFnZXIuZ2V0VGFyZ2V0KGopO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYW5pbWF0aW9uc0J5TW9ycGhUYXJnZXQgPSBtb3JwaEFuaW1hdGlvbnMuZ2V0KG1lc2gpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFuaW1hdGlvbnNCeU1vcnBoVGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9ycGhUYXJnZXRBbmltYXRpb24gPSBhbmltYXRpb25zQnlNb3JwaFRhcmdldC5nZXQobW9ycGhUYXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb3JwaFRhcmdldEFuaW1hdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbWJpbmVkQW5pbWF0aW9uR3JvdXApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbWJpbmVkQW5pbWF0aW9uR3JvdXAgPSBuZXcgQW5pbWF0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2FuaW1hdGlvbkdyb3VwLm5hbWV9XyR7bWVzaC5uYW1lfV9Nb3JwaFdlaWdodEFuaW1hdGlvbmAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpbmZsdWVuY2VcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3JwaFRhcmdldEFuaW1hdGlvbi5mcmFtZVBlclNlY29uZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBbmltYXRpb24uQU5JTUFUSU9OVFlQRV9GTE9BVCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3JwaFRhcmdldEFuaW1hdGlvbi5sb29wTW9kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3JwaFRhcmdldEFuaW1hdGlvbi5lbmFibGVCbGVuZGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25LZXlzLnB1c2gobW9ycGhUYXJnZXRBbmltYXRpb24uZ2V0S2V5cygpW2ldKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25LZXlzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWU6IGFuaW1hdGlvbkdyb3VwLmZyb20gKyAoYW5pbWF0aW9uR3JvdXBGcmFtZURpZmYgLyBudW1BbmltYXRpb25LZXlzKSAqIGksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbW9ycGhUYXJnZXQuaW5mbHVlbmNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5UYW5nZW50OiBzYW1wbGVBbmltYXRpb25LZXlzWzBdLmluVGFuZ2VudCA/IDAgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRUYW5nZW50OiBzYW1wbGVBbmltYXRpb25LZXlzWzBdLm91dFRhbmdlbnQgPyAwIDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29tYmluZWRBbmltYXRpb25Hcm91cCEuc2V0S2V5cyhhbmltYXRpb25LZXlzKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhbmltYXRpb25JbmZvID0gX0dMVEZBbmltYXRpb24uX0RlZHVjZUFuaW1hdGlvbkluZm8oY29tYmluZWRBbmltYXRpb25Hcm91cCEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhbmltYXRpb25JbmZvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9HTFRGQW5pbWF0aW9uLl9BZGRBbmltYXRpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHthbmltYXRpb25Hcm91cC5uYW1lfV8ke21lc2gubmFtZX1fTW9ycGhXZWlnaHRBbmltYXRpb25gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xURkFuaW1hdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc2gsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21iaW5lZEFuaW1hdGlvbkdyb3VwISxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkluZm8uZGF0YUFjY2Vzc29yVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkluZm8uYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlTWFwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyTWFuYWdlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlclZpZXdzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXNzb3JzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uSW5mby51c2VRdWF0ZXJuaW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uU2FtcGxlUmF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9ycGhUYXJnZXRNYW5hZ2VyPy5udW1UYXJnZXRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZ2xURkFuaW1hdGlvbi5jaGFubmVscy5sZW5ndGggJiYgZ2xURkFuaW1hdGlvbi5zYW1wbGVycy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBnbFRGQW5pbWF0aW9ucy5wdXNoKGdsVEZBbmltYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9BZGRBbmltYXRpb24oXHJcbiAgICAgICAgbmFtZTogc3RyaW5nLFxyXG4gICAgICAgIGdsVEZBbmltYXRpb246IElBbmltYXRpb24sXHJcbiAgICAgICAgYmFieWxvblRyYW5zZm9ybU5vZGU6IE5vZGUsXHJcbiAgICAgICAgYW5pbWF0aW9uOiBBbmltYXRpb24sXHJcbiAgICAgICAgZGF0YUFjY2Vzc29yVHlwZTogQWNjZXNzb3JUeXBlLFxyXG4gICAgICAgIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoOiBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCxcclxuICAgICAgICBub2RlTWFwOiBNYXA8Tm9kZSwgbnVtYmVyPixcclxuICAgICAgICBidWZmZXJNYW5hZ2VyOiBCdWZmZXJNYW5hZ2VyLFxyXG4gICAgICAgIGJ1ZmZlclZpZXdzOiBJQnVmZmVyVmlld1tdLFxyXG4gICAgICAgIGFjY2Vzc29yczogSUFjY2Vzc29yW10sXHJcbiAgICAgICAgdXNlUXVhdGVybmlvbjogYm9vbGVhbixcclxuICAgICAgICBhbmltYXRpb25TYW1wbGVSYXRlOiBudW1iZXIsXHJcbiAgICAgICAgY29udmVydFRvUmlnaHRIYW5kZWQ6IGJvb2xlYW4sXHJcbiAgICAgICAgbW9ycGhBbmltYXRpb25DaGFubmVscz86IG51bWJlclxyXG4gICAgKSB7XHJcbiAgICAgICAgY29uc3QgYW5pbWF0aW9uRGF0YSA9IF9HTFRGQW5pbWF0aW9uLl9DcmVhdGVOb2RlQW5pbWF0aW9uKGJhYnlsb25UcmFuc2Zvcm1Ob2RlLCBhbmltYXRpb24sIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLCB1c2VRdWF0ZXJuaW9uLCBhbmltYXRpb25TYW1wbGVSYXRlKTtcclxuICAgICAgICBsZXQgYnVmZmVyVmlldzogSUJ1ZmZlclZpZXc7XHJcbiAgICAgICAgbGV0IGFjY2Vzc29yOiBJQWNjZXNzb3I7XHJcbiAgICAgICAgbGV0IGtleWZyYW1lQWNjZXNzb3JJbmRleDogbnVtYmVyO1xyXG4gICAgICAgIGxldCBkYXRhQWNjZXNzb3JJbmRleDogbnVtYmVyO1xyXG4gICAgICAgIGxldCBhbmltYXRpb25TYW1wbGVyOiBJQW5pbWF0aW9uU2FtcGxlcjtcclxuICAgICAgICBsZXQgYW5pbWF0aW9uQ2hhbm5lbDogSUFuaW1hdGlvbkNoYW5uZWw7XHJcblxyXG4gICAgICAgIGlmIChhbmltYXRpb25EYXRhKSB7XHJcbiAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICAqIE5vdyB0aGF0IHdlIGhhdmUgdGhlIGdsVEYgY29udmVydGVkIG1vcnBoIHRhcmdldCBhbmltYXRpb24gZGF0YSxcclxuICAgICAgICAgICAgICogd2UgY2FuIHJlbW92ZSByZWR1bmRhbnQgaW5wdXQgZGF0YSBzbyB0aGF0IHdlIGhhdmUgbiBpbnB1dCBmcmFtZXMsXHJcbiAgICAgICAgICAgICAqIGFuZCBtb3JwaEFuaW1hdGlvbkNoYW5uZWxzICogbiBvdXRwdXQgZnJhbWVzXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBpZiAobW9ycGhBbmltYXRpb25DaGFubmVscykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50SW5wdXQ6IG51bWJlciA9IDA7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdJbnB1dHM6IG51bWJlcltdID0gW107XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAoYW5pbWF0aW9uRGF0YS5pbnB1dHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRJbnB1dCA9IGFuaW1hdGlvbkRhdGEuaW5wdXRzLnNoaWZ0KCkhO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCAlIG1vcnBoQW5pbWF0aW9uQ2hhbm5lbHMgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdJbnB1dHMucHVzaChjdXJyZW50SW5wdXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uRGF0YS5pbnB1dHMgPSBuZXdJbnB1dHM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG5vZGVJbmRleCA9IG5vZGVNYXAuZ2V0KGJhYnlsb25UcmFuc2Zvcm1Ob2RlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSBidWZmZXIgdmlldyBhbmQgYWNjZXNzb3IgZm9yIGtleSBmcmFtZXMuXHJcbiAgICAgICAgICAgIGNvbnN0IGlucHV0RGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkoYW5pbWF0aW9uRGF0YS5pbnB1dHMpO1xyXG4gICAgICAgICAgICBidWZmZXJWaWV3ID0gYnVmZmVyTWFuYWdlci5jcmVhdGVCdWZmZXJWaWV3KGlucHV0RGF0YSk7XHJcbiAgICAgICAgICAgIGFjY2Vzc29yID0gYnVmZmVyTWFuYWdlci5jcmVhdGVBY2Nlc3NvcihidWZmZXJWaWV3LCBBY2Nlc3NvclR5cGUuU0NBTEFSLCBBY2Nlc3NvckNvbXBvbmVudFR5cGUuRkxPQVQsIGFuaW1hdGlvbkRhdGEuaW5wdXRzLmxlbmd0aCwgdW5kZWZpbmVkLCB7XHJcbiAgICAgICAgICAgICAgICBtaW46IFthbmltYXRpb25EYXRhLmlucHV0c01pbl0sXHJcbiAgICAgICAgICAgICAgICBtYXg6IFthbmltYXRpb25EYXRhLmlucHV0c01heF0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBhY2Nlc3NvcnMucHVzaChhY2Nlc3Nvcik7XHJcbiAgICAgICAgICAgIGtleWZyYW1lQWNjZXNzb3JJbmRleCA9IGFjY2Vzc29ycy5sZW5ndGggLSAxO1xyXG5cclxuICAgICAgICAgICAgLy8gUGVyZm9ybSBjb252ZXJzaW9ucyBvbiBrZXllZCB2YWx1ZXMgd2hpbGUgYWxzbyBidWlsZGluZyB0aGVpciBidWZmZXIuXHJcbiAgICAgICAgICAgIGNvbnN0IHJvdGF0aW9uUXVhdGVybmlvbiA9IG5ldyBRdWF0ZXJuaW9uKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGV1bGVyVmVjMyA9IG5ldyBWZWN0b3IzKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gbmV3IFZlY3RvcjMoKTtcclxuICAgICAgICAgICAgY29uc3QgaXNDYW1lcmEgPSBiYWJ5bG9uVHJhbnNmb3JtTm9kZSBpbnN0YW5jZW9mIENhbWVyYTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRDb3VudCA9IEdldEFjY2Vzc29yRWxlbWVudENvdW50KGRhdGFBY2Nlc3NvclR5cGUpO1xyXG4gICAgICAgICAgICBjb25zdCBvdXRwdXREYXRhID0gbmV3IEZsb2F0MzJBcnJheShhbmltYXRpb25EYXRhLm91dHB1dHMubGVuZ3RoICogZWxlbWVudENvdW50KTtcclxuICAgICAgICAgICAgYW5pbWF0aW9uRGF0YS5vdXRwdXRzLmZvckVhY2goZnVuY3Rpb24gKG91dHB1dDogbnVtYmVyW10sIGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICAgICAgICAgIGxldCBvdXRwdXRUb1dyaXRlOiBudW1iZXJbXSA9IG91dHB1dDtcclxuICAgICAgICAgICAgICAgIGlmIChjb252ZXJ0VG9SaWdodEhhbmRlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aC5UUkFOU0xBVElPTjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZlY3RvcjMuRnJvbUFycmF5VG9SZWYob3V0cHV0LCAwLCBwb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb252ZXJ0VG9SaWdodEhhbmRlZFBvc2l0aW9uKHBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLnRvQXJyYXkob3V0cHV0VG9Xcml0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aC5ST1RBVElPTjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvdXRwdXQubGVuZ3RoID09PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUXVhdGVybmlvbi5Gcm9tQXJyYXlUb1JlZihvdXRwdXQsIDAsIHJvdGF0aW9uUXVhdGVybmlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dFRvV3JpdGUgPSBuZXcgQXJyYXkoNCk7IC8vIFdpbGwgbmVlZCA0LCBub3QgMywgZm9yIGEgcXVhdGVybmlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZlY3RvcjMuRnJvbUFycmF5VG9SZWYob3V0cHV0LCAwLCBldWxlclZlYzMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFF1YXRlcm5pb24uRnJvbUV1bGVyVmVjdG9yVG9SZWYoZXVsZXJWZWMzLCByb3RhdGlvblF1YXRlcm5pb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0NhbWVyYSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnZlcnRDYW1lcmFSb3RhdGlvblRvR0xURihyb3RhdGlvblF1YXRlcm5pb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIVF1YXRlcm5pb24uSXNJZGVudGl0eShyb3RhdGlvblF1YXRlcm5pb24pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnZlcnRUb1JpZ2h0SGFuZGVkUm90YXRpb24ocm90YXRpb25RdWF0ZXJuaW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm90YXRpb25RdWF0ZXJuaW9uLnRvQXJyYXkob3V0cHV0VG9Xcml0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aC5ST1RBVElPTjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvdXRwdXQubGVuZ3RoID09PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUXVhdGVybmlvbi5Gcm9tQXJyYXlUb1JlZihvdXRwdXQsIDAsIHJvdGF0aW9uUXVhdGVybmlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dFRvV3JpdGUgPSBuZXcgQXJyYXkoNCk7IC8vIFdpbGwgbmVlZCA0LCBub3QgMywgZm9yIGEgcXVhdGVybmlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZlY3RvcjMuRnJvbUFycmF5VG9SZWYob3V0cHV0LCAwLCBldWxlclZlYzMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFF1YXRlcm5pb24uRnJvbUV1bGVyVmVjdG9yVG9SZWYoZXVsZXJWZWMzLCByb3RhdGlvblF1YXRlcm5pb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0NhbWVyYSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnZlcnRDYW1lcmFSb3RhdGlvblRvR0xURihyb3RhdGlvblF1YXRlcm5pb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0aW9uUXVhdGVybmlvbi50b0FycmF5KG91dHB1dFRvV3JpdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgb3V0cHV0RGF0YS5zZXQob3V0cHV0VG9Xcml0ZSwgaW5kZXggKiBlbGVtZW50Q291bnQpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSBidWZmZXIgdmlldyBhbmQgYWNjZXNzb3IgZm9yIGtleWVkIHZhbHVlcy5cclxuICAgICAgICAgICAgYnVmZmVyVmlldyA9IGJ1ZmZlck1hbmFnZXIuY3JlYXRlQnVmZmVyVmlldyhvdXRwdXREYXRhKTtcclxuICAgICAgICAgICAgYWNjZXNzb3IgPSBidWZmZXJNYW5hZ2VyLmNyZWF0ZUFjY2Vzc29yKGJ1ZmZlclZpZXcsIGRhdGFBY2Nlc3NvclR5cGUsIEFjY2Vzc29yQ29tcG9uZW50VHlwZS5GTE9BVCwgYW5pbWF0aW9uRGF0YS5vdXRwdXRzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGFjY2Vzc29ycy5wdXNoKGFjY2Vzc29yKTtcclxuICAgICAgICAgICAgZGF0YUFjY2Vzc29ySW5kZXggPSBhY2Nlc3NvcnMubGVuZ3RoIC0gMTtcclxuXHJcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBzYW1wbGVyXHJcbiAgICAgICAgICAgIGFuaW1hdGlvblNhbXBsZXIgPSB7XHJcbiAgICAgICAgICAgICAgICBpbnRlcnBvbGF0aW9uOiBhbmltYXRpb25EYXRhLnNhbXBsZXJJbnRlcnBvbGF0aW9uLFxyXG4gICAgICAgICAgICAgICAgaW5wdXQ6IGtleWZyYW1lQWNjZXNzb3JJbmRleCxcclxuICAgICAgICAgICAgICAgIG91dHB1dDogZGF0YUFjY2Vzc29ySW5kZXgsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGdsVEZBbmltYXRpb24uc2FtcGxlcnMucHVzaChhbmltYXRpb25TYW1wbGVyKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBjaGFubmVsXHJcbiAgICAgICAgICAgIGFuaW1hdGlvbkNoYW5uZWwgPSB7XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVyOiBnbFRGQW5pbWF0aW9uLnNhbXBsZXJzLmxlbmd0aCAtIDEsXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlOiBub2RlSW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBnbFRGQW5pbWF0aW9uLmNoYW5uZWxzLnB1c2goYW5pbWF0aW9uQ2hhbm5lbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgYmFrZWQgYW5pbWF0aW9uXHJcbiAgICAgKiBAcGFyYW0gYmFieWxvblRyYW5zZm9ybU5vZGUgQmFieWxvbkpTIG1lc2hcclxuICAgICAqIEBwYXJhbSBhbmltYXRpb24gQmFieWxvbkpTIGFuaW1hdGlvbiBjb3JyZXNwb25kaW5nIHRvIHRoZSBCYWJ5bG9uSlMgbWVzaFxyXG4gICAgICogQHBhcmFtIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoIGFuaW1hdGlvbiB0YXJnZXQgY2hhbm5lbFxyXG4gICAgICogQHBhcmFtIG1pbkZyYW1lIG1pbmltdW0gYW5pbWF0aW9uIGZyYW1lXHJcbiAgICAgKiBAcGFyYW0gbWF4RnJhbWUgbWF4aW11bSBhbmltYXRpb24gZnJhbWVcclxuICAgICAqIEBwYXJhbSBmcHMgZnJhbWVzIHBlciBzZWNvbmQgb2YgdGhlIGFuaW1hdGlvblxyXG4gICAgICogQHBhcmFtIHNhbXBsZVJhdGVcclxuICAgICAqIEBwYXJhbSBpbnB1dHMgaW5wdXQga2V5IGZyYW1lcyBvZiB0aGUgYW5pbWF0aW9uXHJcbiAgICAgKiBAcGFyYW0gb3V0cHV0cyBvdXRwdXQga2V5IGZyYW1lIGRhdGEgb2YgdGhlIGFuaW1hdGlvblxyXG4gICAgICogQHBhcmFtIG1pbk1heEZyYW1lc1xyXG4gICAgICogQHBhcmFtIG1pbk1heEZyYW1lcy5taW5cclxuICAgICAqIEBwYXJhbSBtaW5NYXhGcmFtZXMubWF4XHJcbiAgICAgKiBAcGFyYW0gdXNlUXVhdGVybmlvbiBzcGVjaWZpZXMgaWYgcXVhdGVybmlvbnMgc2hvdWxkIGJlIHVzZWRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX0NyZWF0ZUJha2VkQW5pbWF0aW9uKFxyXG4gICAgICAgIGJhYnlsb25UcmFuc2Zvcm1Ob2RlOiBOb2RlLFxyXG4gICAgICAgIGFuaW1hdGlvbjogQW5pbWF0aW9uLFxyXG4gICAgICAgIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoOiBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCxcclxuICAgICAgICBtaW5GcmFtZTogbnVtYmVyLFxyXG4gICAgICAgIG1heEZyYW1lOiBudW1iZXIsXHJcbiAgICAgICAgZnBzOiBudW1iZXIsXHJcbiAgICAgICAgc2FtcGxlUmF0ZTogbnVtYmVyLFxyXG4gICAgICAgIGlucHV0czogbnVtYmVyW10sXHJcbiAgICAgICAgb3V0cHV0czogbnVtYmVyW11bXSxcclxuICAgICAgICBtaW5NYXhGcmFtZXM6IHsgbWluOiBudW1iZXI7IG1heDogbnVtYmVyIH0sXHJcbiAgICAgICAgdXNlUXVhdGVybmlvbjogYm9vbGVhblxyXG4gICAgKSB7XHJcbiAgICAgICAgbGV0IHZhbHVlOiBudW1iZXIgfCBWZWN0b3IzIHwgUXVhdGVybmlvbjtcclxuICAgICAgICBjb25zdCBxdWF0ZXJuaW9uQ2FjaGU6IFF1YXRlcm5pb24gPSBRdWF0ZXJuaW9uLklkZW50aXR5KCk7XHJcbiAgICAgICAgbGV0IHByZXZpb3VzVGltZTogTnVsbGFibGU8bnVtYmVyPiA9IG51bGw7XHJcbiAgICAgICAgbGV0IHRpbWU6IG51bWJlcjtcclxuICAgICAgICBsZXQgbWF4VXNlZEZyYW1lOiBOdWxsYWJsZTxudW1iZXI+ID0gbnVsbDtcclxuICAgICAgICBsZXQgY3VycktleUZyYW1lOiBOdWxsYWJsZTxJQW5pbWF0aW9uS2V5PiA9IG51bGw7XHJcbiAgICAgICAgbGV0IG5leHRLZXlGcmFtZTogTnVsbGFibGU8SUFuaW1hdGlvbktleT4gPSBudWxsO1xyXG4gICAgICAgIGxldCBwcmV2S2V5RnJhbWU6IE51bGxhYmxlPElBbmltYXRpb25LZXk+ID0gbnVsbDtcclxuICAgICAgICBsZXQgZW5kRnJhbWU6IE51bGxhYmxlPG51bWJlcj4gPSBudWxsO1xyXG4gICAgICAgIG1pbk1heEZyYW1lcy5taW4gPSBUb29scy5GbG9hdFJvdW5kKG1pbkZyYW1lIC8gZnBzKTtcclxuXHJcbiAgICAgICAgY29uc3Qga2V5RnJhbWVzID0gYW5pbWF0aW9uLmdldEtleXMoKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbmd0aCA9IGtleUZyYW1lcy5sZW5ndGg7IGkgPCBsZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBlbmRGcmFtZSA9IG51bGw7XHJcbiAgICAgICAgICAgIGN1cnJLZXlGcmFtZSA9IGtleUZyYW1lc1tpXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpICsgMSA8IGxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgbmV4dEtleUZyYW1lID0ga2V5RnJhbWVzW2kgKyAxXTtcclxuICAgICAgICAgICAgICAgIGlmICgoY3VycktleUZyYW1lLnZhbHVlLmVxdWFscyAmJiBjdXJyS2V5RnJhbWUudmFsdWUuZXF1YWxzKG5leHRLZXlGcmFtZS52YWx1ZSkpIHx8IGN1cnJLZXlGcmFtZS52YWx1ZSA9PT0gbmV4dEtleUZyYW1lLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2V0IHRoZSBmaXJzdCBmcmFtZSB0byBpdHNlbGZcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kRnJhbWUgPSBjdXJyS2V5RnJhbWUuZnJhbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBlbmRGcmFtZSA9IG5leHRLZXlGcmFtZS5mcmFtZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIGF0IHRoZSBsYXN0IGtleSBmcmFtZVxyXG4gICAgICAgICAgICAgICAgcHJldktleUZyYW1lID0ga2V5RnJhbWVzW2kgLSAxXTtcclxuICAgICAgICAgICAgICAgIGlmICgoY3VycktleUZyYW1lLnZhbHVlLmVxdWFscyAmJiBjdXJyS2V5RnJhbWUudmFsdWUuZXF1YWxzKHByZXZLZXlGcmFtZS52YWx1ZSkpIHx8IGN1cnJLZXlGcmFtZS52YWx1ZSA9PT0gcHJldktleUZyYW1lLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuZEZyYW1lID0gbWF4RnJhbWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGVuZEZyYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBmID0gY3VycktleUZyYW1lLmZyYW1lOyBmIDw9IGVuZEZyYW1lOyBmICs9IHNhbXBsZVJhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lID0gVG9vbHMuRmxvYXRSb3VuZChmIC8gZnBzKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGltZSA9PT0gcHJldmlvdXNUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1RpbWUgPSB0aW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heFVzZWRGcmFtZSA9IHRpbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVwZWF0Q291bnQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvb3BNb2RlOiBhbmltYXRpb24ubG9vcE1vZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGFuaW1hdGlvbi5faW50ZXJwb2xhdGUoZiwgc3RhdGUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBfR0xURkFuaW1hdGlvbi5fU2V0SW50ZXJwb2xhdGVkVmFsdWUoYmFieWxvblRyYW5zZm9ybU5vZGUsIHZhbHVlLCB0aW1lLCBhbmltYXRpb24sIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLCBxdWF0ZXJuaW9uQ2FjaGUsIGlucHV0cywgb3V0cHV0cywgdXNlUXVhdGVybmlvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1heFVzZWRGcmFtZSkge1xyXG4gICAgICAgICAgICBtaW5NYXhGcmFtZXMubWF4ID0gbWF4VXNlZEZyYW1lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfQ29udmVydEZhY3RvclRvVmVjdG9yM09yUXVhdGVybmlvbihcclxuICAgICAgICBmYWN0b3I6IG51bWJlcixcclxuICAgICAgICBiYWJ5bG9uVHJhbnNmb3JtTm9kZTogTm9kZSxcclxuICAgICAgICBhbmltYXRpb246IEFuaW1hdGlvbixcclxuICAgICAgICBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aDogQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsXHJcbiAgICAgICAgdXNlUXVhdGVybmlvbjogYm9vbGVhblxyXG4gICAgKTogVmVjdG9yMyB8IFF1YXRlcm5pb24ge1xyXG4gICAgICAgIGNvbnN0IGJhc2VQb3NpdGlvblJvdGF0aW9uT3JTY2FsZSA9IF9HTFRGQW5pbWF0aW9uLl9HZXRCYXNlUG9zaXRpb25Sb3RhdGlvbk9yU2NhbGUoYmFieWxvblRyYW5zZm9ybU5vZGUsIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLCB1c2VRdWF0ZXJuaW9uKTtcclxuICAgICAgICAvLyBoYW5kbGVzIHNpbmdsZSBjb21wb25lbnQgeCwgeSwgeiBvciB3IGNvbXBvbmVudCBhbmltYXRpb24gYnkgdXNpbmcgYSBiYXNlIHByb3BlcnR5IGFuZCBhbmltYXRpbmcgb3ZlciBhIGNvbXBvbmVudC5cclxuICAgICAgICBjb25zdCBwcm9wZXJ0eSA9IGFuaW1hdGlvbi50YXJnZXRQcm9wZXJ0eS5zcGxpdChcIi5cIik7XHJcbiAgICAgICAgY29uc3QgY29tcG9uZW50TmFtZSA9IHByb3BlcnR5ID8gcHJvcGVydHlbMV0gOiBcIlwiOyAvLyB4LCB5LCB6LCBvciB3IGNvbXBvbmVudFxyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdXNlUXVhdGVybmlvbiA/IFF1YXRlcm5pb24uRnJvbUFycmF5KGJhc2VQb3NpdGlvblJvdGF0aW9uT3JTY2FsZSkubm9ybWFsaXplKCkgOiBWZWN0b3IzLkZyb21BcnJheShiYXNlUG9zaXRpb25Sb3RhdGlvbk9yU2NhbGUpO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKGNvbXBvbmVudE5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcInhcIjpcclxuICAgICAgICAgICAgY2FzZSBcInlcIjpcclxuICAgICAgICAgICAgY2FzZSBcInpcIjoge1xyXG4gICAgICAgICAgICAgICAgdmFsdWVbY29tcG9uZW50TmFtZV0gPSBmYWN0b3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwid1wiOiB7XHJcbiAgICAgICAgICAgICAgICAodmFsdWUgYXMgUXVhdGVybmlvbikudyA9IGZhY3RvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgICAgIFRvb2xzLkVycm9yKGBnbFRGQW5pbWF0aW9uOiBVbnN1cHBvcnRlZCBjb21wb25lbnQgbmFtZSBcIiR7Y29tcG9uZW50TmFtZX1cIiFgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9TZXRJbnRlcnBvbGF0ZWRWYWx1ZShcclxuICAgICAgICBiYWJ5bG9uVHJhbnNmb3JtTm9kZTogTm9kZSxcclxuICAgICAgICB2YWx1ZTogbnVtYmVyIHwgVmVjdG9yMyB8IFF1YXRlcm5pb24sXHJcbiAgICAgICAgdGltZTogbnVtYmVyLFxyXG4gICAgICAgIGFuaW1hdGlvbjogQW5pbWF0aW9uLFxyXG4gICAgICAgIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoOiBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCxcclxuICAgICAgICBxdWF0ZXJuaW9uQ2FjaGU6IFF1YXRlcm5pb24sXHJcbiAgICAgICAgaW5wdXRzOiBudW1iZXJbXSxcclxuICAgICAgICBvdXRwdXRzOiBudW1iZXJbXVtdLFxyXG4gICAgICAgIHVzZVF1YXRlcm5pb246IGJvb2xlYW5cclxuICAgICkge1xyXG4gICAgICAgIGxldCBjYWNoZVZhbHVlOiBWZWN0b3IzIHwgUXVhdGVybmlvbiB8IG51bWJlcjtcclxuICAgICAgICBpbnB1dHMucHVzaCh0aW1lKTtcclxuXHJcbiAgICAgICAgaWYgKGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoID09PSBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aC5XRUlHSFRTKSB7XHJcbiAgICAgICAgICAgIG91dHB1dHMucHVzaChbdmFsdWUgYXMgbnVtYmVyXSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChhbmltYXRpb24uZGF0YVR5cGUgPT09IEFuaW1hdGlvbi5BTklNQVRJT05UWVBFX0ZMT0FUKSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5fQ29udmVydEZhY3RvclRvVmVjdG9yM09yUXVhdGVybmlvbih2YWx1ZSBhcyBudW1iZXIsIGJhYnlsb25UcmFuc2Zvcm1Ob2RlLCBhbmltYXRpb24sIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLCB1c2VRdWF0ZXJuaW9uKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCA9PT0gQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGguUk9UQVRJT04pIHtcclxuICAgICAgICAgICAgaWYgKHVzZVF1YXRlcm5pb24pIHtcclxuICAgICAgICAgICAgICAgIHF1YXRlcm5pb25DYWNoZSA9IHZhbHVlIGFzIFF1YXRlcm5pb247XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjYWNoZVZhbHVlID0gdmFsdWUgYXMgVmVjdG9yMztcclxuICAgICAgICAgICAgICAgIFF1YXRlcm5pb24uUm90YXRpb25ZYXdQaXRjaFJvbGxUb1JlZihjYWNoZVZhbHVlLnksIGNhY2hlVmFsdWUueCwgY2FjaGVWYWx1ZS56LCBxdWF0ZXJuaW9uQ2FjaGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG91dHB1dHMucHVzaChxdWF0ZXJuaW9uQ2FjaGUuYXNBcnJheSgpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBzY2FsaW5nIGFuZCBwb3NpdGlvbiBhbmltYXRpb25cclxuICAgICAgICAgICAgY2FjaGVWYWx1ZSA9IHZhbHVlIGFzIFZlY3RvcjM7XHJcbiAgICAgICAgICAgIG91dHB1dHMucHVzaChjYWNoZVZhbHVlLmFzQXJyYXkoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBsaW5lYXIgYW5pbWF0aW9uIGZyb20gdGhlIGFuaW1hdGlvbiBrZXkgZnJhbWVzXHJcbiAgICAgKiBAcGFyYW0gYmFieWxvblRyYW5zZm9ybU5vZGUgQmFieWxvbkpTIG1lc2hcclxuICAgICAqIEBwYXJhbSBhbmltYXRpb24gQmFieWxvbkpTIGFuaW1hdGlvblxyXG4gICAgICogQHBhcmFtIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoIFRoZSB0YXJnZXQgYW5pbWF0aW9uIGNoYW5uZWxcclxuICAgICAqIEBwYXJhbSBpbnB1dHMgQXJyYXkgdG8gc3RvcmUgdGhlIGtleSBmcmFtZSB0aW1lc1xyXG4gICAgICogQHBhcmFtIG91dHB1dHMgQXJyYXkgdG8gc3RvcmUgdGhlIGtleSBmcmFtZSBkYXRhXHJcbiAgICAgKiBAcGFyYW0gdXNlUXVhdGVybmlvbiBTcGVjaWZpZXMgaWYgcXVhdGVybmlvbnMgYXJlIHVzZWQgaW4gdGhlIGFuaW1hdGlvblxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfQ3JlYXRlTGluZWFyT3JTdGVwQW5pbWF0aW9uKFxyXG4gICAgICAgIGJhYnlsb25UcmFuc2Zvcm1Ob2RlOiBOb2RlLFxyXG4gICAgICAgIGFuaW1hdGlvbjogQW5pbWF0aW9uLFxyXG4gICAgICAgIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoOiBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCxcclxuICAgICAgICBpbnB1dHM6IG51bWJlcltdLFxyXG4gICAgICAgIG91dHB1dHM6IG51bWJlcltdW10sXHJcbiAgICAgICAgdXNlUXVhdGVybmlvbjogYm9vbGVhblxyXG4gICAgKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXlGcmFtZSBvZiBhbmltYXRpb24uZ2V0S2V5cygpKSB7XHJcbiAgICAgICAgICAgIGlucHV0cy5wdXNoKGtleUZyYW1lLmZyYW1lIC8gYW5pbWF0aW9uLmZyYW1lUGVyU2Vjb25kKTsgLy8ga2V5ZnJhbWVzIGluIHNlY29uZHMuXHJcbiAgICAgICAgICAgIF9HTFRGQW5pbWF0aW9uLl9BZGRLZXlmcmFtZVZhbHVlKGtleUZyYW1lLCBhbmltYXRpb24sIG91dHB1dHMsIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLCBiYWJ5bG9uVHJhbnNmb3JtTm9kZSwgdXNlUXVhdGVybmlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBjdWJpYyBzcGxpbmUgYW5pbWF0aW9uIGZyb20gdGhlIGFuaW1hdGlvbiBrZXkgZnJhbWVzXHJcbiAgICAgKiBAcGFyYW0gYmFieWxvblRyYW5zZm9ybU5vZGUgQmFieWxvbkpTIG1lc2hcclxuICAgICAqIEBwYXJhbSBhbmltYXRpb24gQmFieWxvbkpTIGFuaW1hdGlvblxyXG4gICAgICogQHBhcmFtIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoIFRoZSB0YXJnZXQgYW5pbWF0aW9uIGNoYW5uZWxcclxuICAgICAqIEBwYXJhbSBpbnB1dHMgQXJyYXkgdG8gc3RvcmUgdGhlIGtleSBmcmFtZSB0aW1lc1xyXG4gICAgICogQHBhcmFtIG91dHB1dHMgQXJyYXkgdG8gc3RvcmUgdGhlIGtleSBmcmFtZSBkYXRhXHJcbiAgICAgKiBAcGFyYW0gdXNlUXVhdGVybmlvbiBTcGVjaWZpZXMgaWYgcXVhdGVybmlvbnMgYXJlIHVzZWQgaW4gdGhlIGFuaW1hdGlvblxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfQ3JlYXRlQ3ViaWNTcGxpbmVBbmltYXRpb24oXHJcbiAgICAgICAgYmFieWxvblRyYW5zZm9ybU5vZGU6IE5vZGUsXHJcbiAgICAgICAgYW5pbWF0aW9uOiBBbmltYXRpb24sXHJcbiAgICAgICAgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGg6IEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLFxyXG4gICAgICAgIGlucHV0czogbnVtYmVyW10sXHJcbiAgICAgICAgb3V0cHV0czogbnVtYmVyW11bXSxcclxuICAgICAgICB1c2VRdWF0ZXJuaW9uOiBib29sZWFuXHJcbiAgICApIHtcclxuICAgICAgICBhbmltYXRpb24uZ2V0S2V5cygpLmZvckVhY2goZnVuY3Rpb24gKGtleUZyYW1lKSB7XHJcbiAgICAgICAgICAgIGlucHV0cy5wdXNoKGtleUZyYW1lLmZyYW1lIC8gYW5pbWF0aW9uLmZyYW1lUGVyU2Vjb25kKTsgLy8ga2V5ZnJhbWVzIGluIHNlY29uZHMuXHJcbiAgICAgICAgICAgIF9HTFRGQW5pbWF0aW9uLl9BZGRTcGxpbmVUYW5nZW50KF9UYW5nZW50VHlwZS5JTlRBTkdFTlQsIG91dHB1dHMsIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLCBBbmltYXRpb25TYW1wbGVySW50ZXJwb2xhdGlvbi5DVUJJQ1NQTElORSwga2V5RnJhbWUsIHVzZVF1YXRlcm5pb24pO1xyXG4gICAgICAgICAgICBfR0xURkFuaW1hdGlvbi5fQWRkS2V5ZnJhbWVWYWx1ZShrZXlGcmFtZSwgYW5pbWF0aW9uLCBvdXRwdXRzLCBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCwgYmFieWxvblRyYW5zZm9ybU5vZGUsIHVzZVF1YXRlcm5pb24pO1xyXG5cclxuICAgICAgICAgICAgX0dMVEZBbmltYXRpb24uX0FkZFNwbGluZVRhbmdlbnQoX1RhbmdlbnRUeXBlLk9VVFRBTkdFTlQsIG91dHB1dHMsIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLCBBbmltYXRpb25TYW1wbGVySW50ZXJwb2xhdGlvbi5DVUJJQ1NQTElORSwga2V5RnJhbWUsIHVzZVF1YXRlcm5pb24pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9HZXRCYXNlUG9zaXRpb25Sb3RhdGlvbk9yU2NhbGUoYmFieWxvblRyYW5zZm9ybU5vZGU6IE5vZGUsIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoOiBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCwgdXNlUXVhdGVybmlvbjogYm9vbGVhbikge1xyXG4gICAgICAgIGxldCBiYXNlUG9zaXRpb25Sb3RhdGlvbk9yU2NhbGU6IG51bWJlcltdO1xyXG4gICAgICAgIGlmIChhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCA9PT0gQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGguUk9UQVRJT04pIHtcclxuICAgICAgICAgICAgaWYgKHVzZVF1YXRlcm5pb24pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHEgPSAoYmFieWxvblRyYW5zZm9ybU5vZGUgYXMgVHJhbnNmb3JtTm9kZSkucm90YXRpb25RdWF0ZXJuaW9uO1xyXG4gICAgICAgICAgICAgICAgYmFzZVBvc2l0aW9uUm90YXRpb25PclNjYWxlID0gKHEgPz8gUXVhdGVybmlvbi5JZGVudGl0eSgpKS5hc0FycmF5KCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByOiBWZWN0b3IzID0gKGJhYnlsb25UcmFuc2Zvcm1Ob2RlIGFzIFRyYW5zZm9ybU5vZGUpLnJvdGF0aW9uO1xyXG4gICAgICAgICAgICAgICAgYmFzZVBvc2l0aW9uUm90YXRpb25PclNjYWxlID0gKHIgPz8gVmVjdG9yMy5aZXJvKCkpLmFzQXJyYXkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGggPT09IEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLlRSQU5TTEFUSU9OKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHA6IFZlY3RvcjMgPSAoYmFieWxvblRyYW5zZm9ybU5vZGUgYXMgVHJhbnNmb3JtTm9kZSkucG9zaXRpb247XHJcbiAgICAgICAgICAgIGJhc2VQb3NpdGlvblJvdGF0aW9uT3JTY2FsZSA9IChwID8/IFZlY3RvcjMuWmVybygpKS5hc0FycmF5KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gc2NhbGVcclxuICAgICAgICAgICAgY29uc3QgczogVmVjdG9yMyA9IChiYWJ5bG9uVHJhbnNmb3JtTm9kZSBhcyBUcmFuc2Zvcm1Ob2RlKS5zY2FsaW5nO1xyXG4gICAgICAgICAgICBiYXNlUG9zaXRpb25Sb3RhdGlvbk9yU2NhbGUgPSAocyA/PyBWZWN0b3IzLk9uZSgpKS5hc0FycmF5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBiYXNlUG9zaXRpb25Sb3RhdGlvbk9yU2NhbGU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGRzIGEga2V5IGZyYW1lIHZhbHVlXHJcbiAgICAgKiBAcGFyYW0ga2V5RnJhbWVcclxuICAgICAqIEBwYXJhbSBhbmltYXRpb25cclxuICAgICAqIEBwYXJhbSBvdXRwdXRzXHJcbiAgICAgKiBAcGFyYW0gYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGhcclxuICAgICAqIEBwYXJhbSBiYWJ5bG9uVHJhbnNmb3JtTm9kZVxyXG4gICAgICogQHBhcmFtIHVzZVF1YXRlcm5pb25cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX0FkZEtleWZyYW1lVmFsdWUoXHJcbiAgICAgICAga2V5RnJhbWU6IElBbmltYXRpb25LZXksXHJcbiAgICAgICAgYW5pbWF0aW9uOiBBbmltYXRpb24sXHJcbiAgICAgICAgb3V0cHV0czogbnVtYmVyW11bXSxcclxuICAgICAgICBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aDogQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsXHJcbiAgICAgICAgYmFieWxvblRyYW5zZm9ybU5vZGU6IE5vZGUsXHJcbiAgICAgICAgdXNlUXVhdGVybmlvbjogYm9vbGVhblxyXG4gICAgKSB7XHJcbiAgICAgICAgbGV0IG5ld1Bvc2l0aW9uUm90YXRpb25PclNjYWxlOiBOdWxsYWJsZTxWZWN0b3IzIHwgUXVhdGVybmlvbiB8IG51bWJlcj47XHJcbiAgICAgICAgY29uc3QgYW5pbWF0aW9uVHlwZSA9IGFuaW1hdGlvbi5kYXRhVHlwZTtcclxuICAgICAgICBpZiAoYW5pbWF0aW9uVHlwZSA9PT0gQW5pbWF0aW9uLkFOSU1BVElPTlRZUEVfVkVDVE9SMykge1xyXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBrZXlGcmFtZS52YWx1ZS5hc0FycmF5KCk7XHJcbiAgICAgICAgICAgIGlmIChhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCA9PT0gQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGguUk9UQVRJT04pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFycmF5ID0gVmVjdG9yMy5Gcm9tQXJyYXkodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgcm90YXRpb25RdWF0ZXJuaW9uID0gUXVhdGVybmlvbi5Sb3RhdGlvbllhd1BpdGNoUm9sbChhcnJheS55LCBhcnJheS54LCBhcnJheS56KTtcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gcm90YXRpb25RdWF0ZXJuaW9uLmFzQXJyYXkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvdXRwdXRzLnB1c2godmFsdWUpOyAvLyBzY2FsZSAgdmVjdG9yLlxyXG4gICAgICAgIH0gZWxzZSBpZiAoYW5pbWF0aW9uVHlwZSA9PT0gQW5pbWF0aW9uLkFOSU1BVElPTlRZUEVfRkxPQVQpIHtcclxuICAgICAgICAgICAgaWYgKGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoID09PSBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aC5XRUlHSFRTKSB7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXRzLnB1c2goW2tleUZyYW1lLnZhbHVlXSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGVzIHNpbmdsZSBjb21wb25lbnQgeCwgeSwgeiBvciB3IGNvbXBvbmVudCBhbmltYXRpb24gYnkgdXNpbmcgYSBiYXNlIHByb3BlcnR5IGFuZCBhbmltYXRpbmcgb3ZlciBhIGNvbXBvbmVudC5cclxuICAgICAgICAgICAgICAgIG5ld1Bvc2l0aW9uUm90YXRpb25PclNjYWxlID0gdGhpcy5fQ29udmVydEZhY3RvclRvVmVjdG9yM09yUXVhdGVybmlvbihcclxuICAgICAgICAgICAgICAgICAgICBrZXlGcmFtZS52YWx1ZSBhcyBudW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFieWxvblRyYW5zZm9ybU5vZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZVF1YXRlcm5pb25cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBpZiAobmV3UG9zaXRpb25Sb3RhdGlvbk9yU2NhbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGggPT09IEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLlJPVEFUSU9OKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvc1JvdFNjYWxlID0gdXNlUXVhdGVybmlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAobmV3UG9zaXRpb25Sb3RhdGlvbk9yU2NhbGUgYXMgUXVhdGVybmlvbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogUXVhdGVybmlvbi5Sb3RhdGlvbllhd1BpdGNoUm9sbChuZXdQb3NpdGlvblJvdGF0aW9uT3JTY2FsZS55LCBuZXdQb3NpdGlvblJvdGF0aW9uT3JTY2FsZS54LCBuZXdQb3NpdGlvblJvdGF0aW9uT3JTY2FsZS56KS5ub3JtYWxpemUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0cy5wdXNoKHBvc1JvdFNjYWxlLmFzQXJyYXkoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG91dHB1dHMucHVzaChuZXdQb3NpdGlvblJvdGF0aW9uT3JTY2FsZS5hc0FycmF5KCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChhbmltYXRpb25UeXBlID09PSBBbmltYXRpb24uQU5JTUFUSU9OVFlQRV9RVUFURVJOSU9OKSB7XHJcbiAgICAgICAgICAgIG91dHB1dHMucHVzaCgoa2V5RnJhbWUudmFsdWUgYXMgUXVhdGVybmlvbikubm9ybWFsaXplKCkuYXNBcnJheSgpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBUb29scy5FcnJvcihcImdsVEZBbmltYXRpb246IFVuc3VwcG9ydGVkIGtleSBmcmFtZSB2YWx1ZXMgZm9yIGFuaW1hdGlvbiFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKiBEZXRlcm1pbmUgdGhlIGludGVycG9sYXRpb24gYmFzZWQgb24gdGhlIGtleSBmcmFtZXNcclxuICAgICAqIEBwYXJhbSBrZXlGcmFtZXNcclxuICAgICAqIEBwYXJhbSBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aFxyXG4gICAgICogQHBhcmFtIHVzZVF1YXRlcm5pb25cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX0RlZHVjZUludGVycG9sYXRpb24oXHJcbiAgICAgICAga2V5RnJhbWVzOiBJQW5pbWF0aW9uS2V5W10sXHJcbiAgICAgICAgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGg6IEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLFxyXG4gICAgICAgIHVzZVF1YXRlcm5pb246IGJvb2xlYW5cclxuICAgICk6IHsgaW50ZXJwb2xhdGlvblR5cGU6IEFuaW1hdGlvblNhbXBsZXJJbnRlcnBvbGF0aW9uOyBzaG91bGRCYWtlQW5pbWF0aW9uOiBib29sZWFuIH0ge1xyXG4gICAgICAgIGxldCBpbnRlcnBvbGF0aW9uVHlwZTogQW5pbWF0aW9uU2FtcGxlckludGVycG9sYXRpb24gfCB1bmRlZmluZWQ7XHJcbiAgICAgICAgbGV0IHNob3VsZEJha2VBbmltYXRpb24gPSBmYWxzZTtcclxuICAgICAgICBsZXQga2V5OiBJQW5pbWF0aW9uS2V5O1xyXG5cclxuICAgICAgICBpZiAoYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGggPT09IEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLlJPVEFUSU9OICYmICF1c2VRdWF0ZXJuaW9uKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IGludGVycG9sYXRpb25UeXBlOiBBbmltYXRpb25TYW1wbGVySW50ZXJwb2xhdGlvbi5MSU5FQVIsIHNob3VsZEJha2VBbmltYXRpb246IHRydWUgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW5ndGggPSBrZXlGcmFtZXMubGVuZ3RoOyBpIDwgbGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAga2V5ID0ga2V5RnJhbWVzW2ldO1xyXG4gICAgICAgICAgICBpZiAoa2V5LmluVGFuZ2VudCB8fCBrZXkub3V0VGFuZ2VudCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGludGVycG9sYXRpb25UeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGludGVycG9sYXRpb25UeXBlICE9PSBBbmltYXRpb25TYW1wbGVySW50ZXJwb2xhdGlvbi5DVUJJQ1NQTElORSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnBvbGF0aW9uVHlwZSA9IEFuaW1hdGlvblNhbXBsZXJJbnRlcnBvbGF0aW9uLkxJTkVBUjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdWxkQmFrZUFuaW1hdGlvbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJwb2xhdGlvblR5cGUgPSBBbmltYXRpb25TYW1wbGVySW50ZXJwb2xhdGlvbi5DVUJJQ1NQTElORTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChpbnRlcnBvbGF0aW9uVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwb2xhdGlvblR5cGUgPT09IEFuaW1hdGlvblNhbXBsZXJJbnRlcnBvbGF0aW9uLkNVQklDU1BMSU5FIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChrZXkuaW50ZXJwb2xhdGlvbiAmJiBrZXkuaW50ZXJwb2xhdGlvbiA9PT0gQW5pbWF0aW9uS2V5SW50ZXJwb2xhdGlvbi5TVEVQICYmIGludGVycG9sYXRpb25UeXBlICE9PSBBbmltYXRpb25TYW1wbGVySW50ZXJwb2xhdGlvbi5TVEVQKVxyXG4gICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnBvbGF0aW9uVHlwZSA9IEFuaW1hdGlvblNhbXBsZXJJbnRlcnBvbGF0aW9uLkxJTkVBUjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdWxkQmFrZUFuaW1hdGlvbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleS5pbnRlcnBvbGF0aW9uICYmIGtleS5pbnRlcnBvbGF0aW9uID09PSBBbmltYXRpb25LZXlJbnRlcnBvbGF0aW9uLlNURVApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwb2xhdGlvblR5cGUgPSBBbmltYXRpb25TYW1wbGVySW50ZXJwb2xhdGlvbi5TVEVQO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGludGVycG9sYXRpb25UeXBlID0gQW5pbWF0aW9uU2FtcGxlckludGVycG9sYXRpb24uTElORUFSO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWludGVycG9sYXRpb25UeXBlKSB7XHJcbiAgICAgICAgICAgIGludGVycG9sYXRpb25UeXBlID0gQW5pbWF0aW9uU2FtcGxlckludGVycG9sYXRpb24uTElORUFSO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHsgaW50ZXJwb2xhdGlvblR5cGU6IGludGVycG9sYXRpb25UeXBlLCBzaG91bGRCYWtlQW5pbWF0aW9uOiBzaG91bGRCYWtlQW5pbWF0aW9uIH07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGRzIGFuIGlucHV0IHRhbmdlbnQgb3Igb3V0cHV0IHRhbmdlbnQgdG8gdGhlIG91dHB1dCBkYXRhXHJcbiAgICAgKiBJZiBhbiBpbnB1dCB0YW5nZW50IG9yIG91dHB1dCB0YW5nZW50IGlzIG1pc3NpbmcsIGl0IHVzZXMgdGhlIHplcm8gdmVjdG9yIG9yIHplcm8gcXVhdGVybmlvblxyXG4gICAgICogQHBhcmFtIHRhbmdlbnRUeXBlIFNwZWNpZmllcyB3aGljaCB0eXBlIG9mIHRhbmdlbnQgdG8gaGFuZGxlIChpblRhbmdlbnQgb3Igb3V0VGFuZ2VudClcclxuICAgICAqIEBwYXJhbSBvdXRwdXRzIFRoZSBhbmltYXRpb24gZGF0YSBieSBrZXlmcmFtZVxyXG4gICAgICogQHBhcmFtIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoIFRoZSB0YXJnZXQgYW5pbWF0aW9uIGNoYW5uZWxcclxuICAgICAqIEBwYXJhbSBpbnRlcnBvbGF0aW9uIFRoZSBpbnRlcnBvbGF0aW9uIHR5cGVcclxuICAgICAqIEBwYXJhbSBrZXlGcmFtZSBUaGUga2V5IGZyYW1lIHdpdGggdGhlIGFuaW1hdGlvbiBkYXRhXHJcbiAgICAgKiBAcGFyYW0gdXNlUXVhdGVybmlvbiBTcGVjaWZpZXMgaWYgcXVhdGVybmlvbnMgYXJlIHVzZWRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX0FkZFNwbGluZVRhbmdlbnQoXHJcbiAgICAgICAgdGFuZ2VudFR5cGU6IF9UYW5nZW50VHlwZSxcclxuICAgICAgICBvdXRwdXRzOiBudW1iZXJbXVtdLFxyXG4gICAgICAgIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoOiBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCxcclxuICAgICAgICBpbnRlcnBvbGF0aW9uOiBBbmltYXRpb25TYW1wbGVySW50ZXJwb2xhdGlvbixcclxuICAgICAgICBrZXlGcmFtZTogSUFuaW1hdGlvbktleSxcclxuICAgICAgICB1c2VRdWF0ZXJuaW9uOiBib29sZWFuXHJcbiAgICApIHtcclxuICAgICAgICBsZXQgdGFuZ2VudDogbnVtYmVyW107XHJcbiAgICAgICAgY29uc3QgdGFuZ2VudFZhbHVlOiBWZWN0b3IzIHwgUXVhdGVybmlvbiB8IG51bWJlciA9IHRhbmdlbnRUeXBlID09PSBfVGFuZ2VudFR5cGUuSU5UQU5HRU5UID8ga2V5RnJhbWUuaW5UYW5nZW50IDoga2V5RnJhbWUub3V0VGFuZ2VudDtcclxuICAgICAgICBpZiAoaW50ZXJwb2xhdGlvbiA9PT0gQW5pbWF0aW9uU2FtcGxlckludGVycG9sYXRpb24uQ1VCSUNTUExJTkUpIHtcclxuICAgICAgICAgICAgaWYgKGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoID09PSBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aC5ST1RBVElPTikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRhbmdlbnRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh1c2VRdWF0ZXJuaW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhbmdlbnQgPSAodGFuZ2VudFZhbHVlIGFzIFF1YXRlcm5pb24pLmFzQXJyYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhcnJheSA9IHRhbmdlbnRWYWx1ZSBhcyBWZWN0b3IzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YW5nZW50ID0gUXVhdGVybmlvbi5Sb3RhdGlvbllhd1BpdGNoUm9sbChhcnJheS55LCBhcnJheS54LCBhcnJheS56KS5hc0FycmF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0YW5nZW50ID0gWzAsIDAsIDAsIDBdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoID09PSBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aC5XRUlHSFRTKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGFuZ2VudFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFuZ2VudCA9IFt0YW5nZW50VmFsdWUgYXMgbnVtYmVyXTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFuZ2VudCA9IFswXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICh0YW5nZW50VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0YW5nZW50ID0gKHRhbmdlbnRWYWx1ZSBhcyBWZWN0b3IzKS5hc0FycmF5KCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhbmdlbnQgPSBbMCwgMCwgMF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG91dHB1dHMucHVzaCh0YW5nZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIG1pbmltdW0gYW5kIG1heGltdW0ga2V5IGZyYW1lcycgZnJhbWUgdmFsdWVzXHJcbiAgICAgKiBAcGFyYW0ga2V5RnJhbWVzIGFuaW1hdGlvbiBrZXkgZnJhbWVzXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgbWluaW11bSBhbmQgbWF4aW11bSBrZXkgZnJhbWUgdmFsdWVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX0NhbGN1bGF0ZU1pbk1heEtleUZyYW1lcyhrZXlGcmFtZXM6IElBbmltYXRpb25LZXlbXSk6IHsgbWluOiBudW1iZXI7IG1heDogbnVtYmVyIH0ge1xyXG4gICAgICAgIGxldCBtaW46IG51bWJlciA9IEluZmluaXR5O1xyXG4gICAgICAgIGxldCBtYXg6IG51bWJlciA9IC1JbmZpbml0eTtcclxuICAgICAgICBrZXlGcmFtZXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5RnJhbWUpIHtcclxuICAgICAgICAgICAgbWluID0gTWF0aC5taW4obWluLCBrZXlGcmFtZS5mcmFtZSk7XHJcbiAgICAgICAgICAgIG1heCA9IE1hdGgubWF4KG1heCwga2V5RnJhbWUuZnJhbWUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4geyBtaW46IG1pbiwgbWF4OiBtYXggfTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBHZXRNaW1lVHlwZSB9IGZyb20gXCJjb3JlL01pc2MvZmlsZVRvb2xzXCI7XHJcbmltcG9ydCB7IFRvb2xzIH0gZnJvbSBcImNvcmUvTWlzYy90b29sc1wiO1xyXG5cclxuLyoqXHJcbiAqIENsYXNzIGZvciBob2xkaW5nIGFuZCBkb3dubG9hZGluZyBnbFRGIGZpbGUgZGF0YVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEdMVEZEYXRhIHtcclxuICAgIC8qKlxyXG4gICAgICogT2JqZWN0IHdoaWNoIGNvbnRhaW5zIHRoZSBmaWxlIG5hbWUgYXMgdGhlIGtleSBhbmQgaXRzIGRhdGEgYXMgdGhlIHZhbHVlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBmaWxlczogeyBbZmlsZU5hbWU6IHN0cmluZ106IHN0cmluZyB8IEJsb2IgfSA9IHt9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGRlcHJlY2F0ZWQgVXNlIGZpbGVzIGluc3RlYWRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBnbFRGRmlsZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsZXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEb3dubG9hZHMgdGhlIGdsVEYgZGF0YSBhcyBmaWxlcyBiYXNlZCBvbiB0aGVpciBuYW1lcyBhbmQgZGF0YVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZG93bmxvYWRGaWxlcygpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLmZpbGVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5maWxlc1trZXldO1xyXG4gICAgICAgICAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW3ZhbHVlXSwgeyB0eXBlOiBHZXRNaW1lVHlwZShrZXkpIH0pO1xyXG4gICAgICAgICAgICBUb29scy5Eb3dubG9hZChibG9iLCBrZXkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgdHlwZSB7XHJcbiAgICBJQnVmZmVyVmlldyxcclxuICAgIElBY2Nlc3NvcixcclxuICAgIElOb2RlLFxyXG4gICAgSVNjZW5lLFxyXG4gICAgSU1lc2gsXHJcbiAgICBJTWF0ZXJpYWwsXHJcbiAgICBJVGV4dHVyZSxcclxuICAgIElJbWFnZSxcclxuICAgIElTYW1wbGVyLFxyXG4gICAgSUFuaW1hdGlvbixcclxuICAgIElNZXNoUHJpbWl0aXZlLFxyXG4gICAgSUJ1ZmZlcixcclxuICAgIElHTFRGLFxyXG4gICAgSVRleHR1cmVJbmZvLFxyXG4gICAgSVNraW4sXHJcbiAgICBJQ2FtZXJhLFxyXG59IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgQWNjZXNzb3JDb21wb25lbnRUeXBlLCBBY2Nlc3NvclR5cGUsIENhbWVyYVR5cGUsIEltYWdlTWltZVR5cGUgfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcblxyXG5pbXBvcnQgdHlwZSB7IEZsb2F0QXJyYXksIEluZGljZXNBcnJheSwgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xyXG5pbXBvcnQgeyBUbXBWZWN0b3JzLCBRdWF0ZXJuaW9uLCBNYXRyaXggfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLnZlY3RvclwiO1xyXG5pbXBvcnQgeyBUb29scyB9IGZyb20gXCJjb3JlL01pc2MvdG9vbHNcIjtcclxuaW1wb3J0IHR5cGUgeyBCdWZmZXIgfSBmcm9tIFwiY29yZS9CdWZmZXJzL2J1ZmZlclwiO1xyXG5pbXBvcnQgeyBWZXJ0ZXhCdWZmZXIgfSBmcm9tIFwiY29yZS9CdWZmZXJzL2J1ZmZlclwiO1xyXG5pbXBvcnQgdHlwZSB7IE5vZGUgfSBmcm9tIFwiY29yZS9ub2RlXCI7XHJcbmltcG9ydCB7IFRyYW5zZm9ybU5vZGUgfSBmcm9tIFwiY29yZS9NZXNoZXMvdHJhbnNmb3JtTm9kZVwiO1xyXG5pbXBvcnQgdHlwZSB7IFN1Yk1lc2ggfSBmcm9tIFwiY29yZS9NZXNoZXMvc3ViTWVzaFwiO1xyXG5pbXBvcnQgdHlwZSB7IE1lc2ggfSBmcm9tIFwiY29yZS9NZXNoZXMvbWVzaFwiO1xyXG5pbXBvcnQgeyBBYnN0cmFjdE1lc2ggfSBmcm9tIFwiY29yZS9NZXNoZXMvYWJzdHJhY3RNZXNoXCI7XHJcbmltcG9ydCB7IEluc3RhbmNlZE1lc2ggfSBmcm9tIFwiY29yZS9NZXNoZXMvaW5zdGFuY2VkTWVzaFwiO1xyXG5pbXBvcnQgdHlwZSB7IEJhc2VUZXh0dXJlIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1RleHR1cmVzL2Jhc2VUZXh0dXJlXCI7XHJcbmltcG9ydCB0eXBlIHsgVGV4dHVyZSB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9UZXh0dXJlcy90ZXh0dXJlXCI7XHJcbmltcG9ydCB7IE1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IEVuZ2luZSB9IGZyb20gXCJjb3JlL0VuZ2luZXMvZW5naW5lXCI7XHJcbmltcG9ydCB0eXBlIHsgU2NlbmUgfSBmcm9tIFwiY29yZS9zY2VuZVwiO1xyXG5pbXBvcnQgeyBFbmdpbmVTdG9yZSB9IGZyb20gXCJjb3JlL0VuZ2luZXMvZW5naW5lU3RvcmVcIjtcclxuXHJcbmltcG9ydCB0eXBlIHsgSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyIH0gZnJvbSBcIi4vZ2xURkV4cG9ydGVyRXh0ZW5zaW9uXCI7XHJcbmltcG9ydCB7IEdMVEZNYXRlcmlhbEV4cG9ydGVyIH0gZnJvbSBcIi4vZ2xURk1hdGVyaWFsRXhwb3J0ZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBJRXhwb3J0T3B0aW9ucyB9IGZyb20gXCIuL2dsVEZTZXJpYWxpemVyXCI7XHJcbmltcG9ydCB7IEdMVEZEYXRhIH0gZnJvbSBcIi4vZ2xURkRhdGFcIjtcclxuaW1wb3J0IHtcclxuICAgIENvbnZlcnRUb1JpZ2h0SGFuZGVkUG9zaXRpb24sXHJcbiAgICBDb252ZXJ0VG9SaWdodEhhbmRlZFJvdGF0aW9uLFxyXG4gICAgRGF0YUFycmF5VG9VaW50OEFycmF5LFxyXG4gICAgR2V0QWNjZXNzb3JUeXBlLFxyXG4gICAgR2V0QXR0cmlidXRlVHlwZSxcclxuICAgIEdldE1pbk1heCxcclxuICAgIEdldFByaW1pdGl2ZU1vZGUsXHJcbiAgICBJc05vb3BOb2RlLFxyXG4gICAgSXNUcmlhbmdsZUZpbGxNb2RlLFxyXG4gICAgSXNQYXJlbnRBZGRlZEJ5SW1wb3J0ZXIsXHJcbiAgICBDb252ZXJ0VG9SaWdodEhhbmRlZE5vZGUsXHJcbiAgICBSb3RhdGVOb2RlMTgwWSxcclxuICAgIEZsb2F0c05lZWQxNkJpdEludGVnZXIsXHJcbiAgICBJc1N0YW5kYXJkVmVydGV4QXR0cmlidXRlLFxyXG4gICAgSW5kaWNlc0FycmF5VG9UeXBlZEFycmF5LFxyXG4gICAgR2V0VmVydGV4QnVmZmVySW5mbyxcclxufSBmcm9tIFwiLi9nbFRGVXRpbGl0aWVzXCI7XHJcbmltcG9ydCB7IEJ1ZmZlck1hbmFnZXIgfSBmcm9tIFwiLi9idWZmZXJNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IENhbWVyYSB9IGZyb20gXCJjb3JlL0NhbWVyYXMvY2FtZXJhXCI7XHJcbmltcG9ydCB7IE11bHRpTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvbXVsdGlNYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBQQlJNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9QQlIvcGJyTWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgU3RhbmRhcmRNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9zdGFuZGFyZE1hdGVyaWFsXCI7XHJcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gXCJjb3JlL01pc2MvbG9nZ2VyXCI7XHJcbmltcG9ydCB7IEVudW1lcmF0ZUZsb2F0VmFsdWVzLCBBcmVJbmRpY2VzMzJCaXRzIH0gZnJvbSBcImNvcmUvQnVmZmVycy9idWZmZXJVdGlsc1wiO1xyXG5pbXBvcnQgdHlwZSB7IEJvbmUsIFNrZWxldG9uIH0gZnJvbSBcImNvcmUvQm9uZXNcIjtcclxuaW1wb3J0IHsgX0dMVEZBbmltYXRpb24gfSBmcm9tIFwiLi9nbFRGQW5pbWF0aW9uXCI7XHJcbmltcG9ydCB0eXBlIHsgTW9ycGhUYXJnZXQgfSBmcm9tIFwiY29yZS9Nb3JwaFwiO1xyXG5pbXBvcnQgeyBCdWlsZE1vcnBoVGFyZ2V0QnVmZmVycyB9IGZyb20gXCIuL2dsVEZNb3JwaFRhcmdldHNVdGlsaXRpZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBJTW9ycGhUYXJnZXREYXRhIH0gZnJvbSBcIi4vZ2xURk1vcnBoVGFyZ2V0c1V0aWxpdGllc1wiO1xyXG5pbXBvcnQgeyBMaW5lc01lc2ggfSBmcm9tIFwiY29yZS9NZXNoZXMvbGluZXNNZXNoXCI7XHJcbmltcG9ydCB7IEdyZWFzZWRMaW5lQmFzZU1lc2ggfSBmcm9tIFwiY29yZS9NZXNoZXMvR3JlYXNlZExpbmUvZ3JlYXNlZExpbmVCYXNlTWVzaFwiO1xyXG5pbXBvcnQgeyBDb2xvcjMsIENvbG9yNCB9IGZyb20gXCJjb3JlL01hdGhzL21hdGguY29sb3JcIjtcclxuXHJcbmNsYXNzIEV4cG9ydGVyU3RhdGUge1xyXG4gICAgLy8gQmFieWxvbiBpbmRpY2VzIGFycmF5LCBzdGFydCwgY291bnQsIG9mZnNldCwgZmxpcCAtPiBnbFRGIGFjY2Vzc29yIGluZGV4XHJcbiAgICBwcml2YXRlIF9pbmRpY2VzQWNjZXNzb3JNYXAgPSBuZXcgTWFwPE51bGxhYmxlPEluZGljZXNBcnJheT4sIE1hcDxudW1iZXIsIE1hcDxudW1iZXIsIE1hcDxudW1iZXIsIE1hcDxib29sZWFuLCBudW1iZXI+Pj4+PigpO1xyXG5cclxuICAgIC8vIEJhYnlsb24gYnVmZmVyIC0+IGdsVEYgYnVmZmVyIHZpZXdcclxuICAgIHByaXZhdGUgX3ZlcnRleEJ1ZmZlclZpZXdNYXAgPSBuZXcgTWFwPEJ1ZmZlciwgSUJ1ZmZlclZpZXc+KCk7XHJcblxyXG4gICAgLy8gQmFieWxvbiB2ZXJ0ZXggYnVmZmVyLCBzdGFydCwgY291bnQgLT4gZ2xURiBhY2Nlc3NvciBpbmRleFxyXG4gICAgcHJpdmF0ZSBfdmVydGV4QWNjZXNzb3JNYXAgPSBuZXcgTWFwPFZlcnRleEJ1ZmZlciwgTWFwPG51bWJlciwgTWFwPG51bWJlciwgbnVtYmVyPj4+KCk7XHJcblxyXG4gICAgcHJpdmF0ZSBfcmVtYXBwZWRCdWZmZXJWaWV3ID0gbmV3IE1hcDxCdWZmZXIsIE1hcDxWZXJ0ZXhCdWZmZXIsIElCdWZmZXJWaWV3Pj4oKTtcclxuXHJcbiAgICBwcml2YXRlIF9tZXNoTW9ycGhUYXJnZXRNYXAgPSBuZXcgTWFwPEFic3RyYWN0TWVzaCwgSU1vcnBoVGFyZ2V0RGF0YVtdPigpO1xyXG5cclxuICAgIHByaXZhdGUgX3ZlcnRleE1hcENvbG9yQWxwaGEgPSBuZXcgTWFwPFZlcnRleEJ1ZmZlciwgYm9vbGVhbj4oKTtcclxuXHJcbiAgICBwcml2YXRlIF9leHBvcnRlZE5vZGVzID0gbmV3IFNldDxOb2RlPigpO1xyXG5cclxuICAgIC8vIEJhYnlsb24gbWVzaCAtPiBnbFRGIG1lc2ggaW5kZXhcclxuICAgIHByaXZhdGUgX21lc2hNYXAgPSBuZXcgTWFwPEFic3RyYWN0TWVzaCwgbnVtYmVyPigpO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb252ZXJ0VG9SaWdodEhhbmRlZDogYm9vbGVhbiwgd2FzQWRkZWRCeU5vb3BOb2RlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5jb252ZXJ0VG9SaWdodEhhbmRlZCA9IGNvbnZlcnRUb1JpZ2h0SGFuZGVkO1xyXG4gICAgICAgIHRoaXMud2FzQWRkZWRCeU5vb3BOb2RlID0gd2FzQWRkZWRCeU5vb3BOb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZWFkb25seSBjb252ZXJ0VG9SaWdodEhhbmRlZDogYm9vbGVhbjtcclxuXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgd2FzQWRkZWRCeU5vb3BOb2RlOiBib29sZWFuO1xyXG5cclxuICAgIC8vIE9ubHkgdXNlZCB3aGVuIGNvbnZlcnRUb1JpZ2h0SGFuZGVkIGlzIHRydWUuXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgY29udmVydGVkVG9SaWdodEhhbmRlZEJ1ZmZlcnMgPSBuZXcgTWFwPEJ1ZmZlciwgVWludDhBcnJheT4oKTtcclxuXHJcbiAgICBwdWJsaWMgZ2V0SW5kaWNlc0FjY2Vzc29yKGluZGljZXM6IE51bGxhYmxlPEluZGljZXNBcnJheT4sIHN0YXJ0OiBudW1iZXIsIGNvdW50OiBudW1iZXIsIG9mZnNldDogbnVtYmVyLCBmbGlwOiBib29sZWFuKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faW5kaWNlc0FjY2Vzc29yTWFwLmdldChpbmRpY2VzKT8uZ2V0KHN0YXJ0KT8uZ2V0KGNvdW50KT8uZ2V0KG9mZnNldCk/LmdldChmbGlwKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0SW5kaWNlc0FjY2Vzc29yKGluZGljZXM6IE51bGxhYmxlPEluZGljZXNBcnJheT4sIHN0YXJ0OiBudW1iZXIsIGNvdW50OiBudW1iZXIsIG9mZnNldDogbnVtYmVyLCBmbGlwOiBib29sZWFuLCBhY2Nlc3NvckluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBsZXQgbWFwMSA9IHRoaXMuX2luZGljZXNBY2Nlc3Nvck1hcC5nZXQoaW5kaWNlcyk7XHJcbiAgICAgICAgaWYgKCFtYXAxKSB7XHJcbiAgICAgICAgICAgIG1hcDEgPSBuZXcgTWFwPG51bWJlciwgTWFwPG51bWJlciwgTWFwPG51bWJlciwgTWFwPGJvb2xlYW4sIG51bWJlcj4+Pj4oKTtcclxuICAgICAgICAgICAgdGhpcy5faW5kaWNlc0FjY2Vzc29yTWFwLnNldChpbmRpY2VzLCBtYXAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBtYXAyID0gbWFwMS5nZXQoc3RhcnQpO1xyXG4gICAgICAgIGlmICghbWFwMikge1xyXG4gICAgICAgICAgICBtYXAyID0gbmV3IE1hcDxudW1iZXIsIE1hcDxudW1iZXIsIE1hcDxib29sZWFuLCBudW1iZXI+Pj4oKTtcclxuICAgICAgICAgICAgbWFwMS5zZXQoc3RhcnQsIG1hcDIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG1hcDMgPSBtYXAyLmdldChjb3VudCk7XHJcbiAgICAgICAgaWYgKCFtYXAzKSB7XHJcbiAgICAgICAgICAgIG1hcDMgPSBuZXcgTWFwPG51bWJlciwgTWFwPGJvb2xlYW4sIG51bWJlcj4+KCk7XHJcbiAgICAgICAgICAgIG1hcDIuc2V0KGNvdW50LCBtYXAzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBtYXA0ID0gbWFwMy5nZXQob2Zmc2V0KTtcclxuICAgICAgICBpZiAoIW1hcDQpIHtcclxuICAgICAgICAgICAgbWFwNCA9IG5ldyBNYXA8Ym9vbGVhbiwgbnVtYmVyPigpO1xyXG4gICAgICAgICAgICBtYXAzLnNldChvZmZzZXQsIG1hcDQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWFwNC5zZXQoZmxpcCwgYWNjZXNzb3JJbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHB1c2hFeHBvcnRlZE5vZGUobm9kZTogTm9kZSkge1xyXG4gICAgICAgIGlmICghdGhpcy5fZXhwb3J0ZWROb2Rlcy5oYXMobm9kZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5fZXhwb3J0ZWROb2Rlcy5hZGQobm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXROb2Rlc1NldCgpOiBTZXQ8Tm9kZT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9leHBvcnRlZE5vZGVzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRWZXJ0ZXhCdWZmZXJWaWV3KGJ1ZmZlcjogQnVmZmVyKTogSUJ1ZmZlclZpZXcgfCB1bmRlZmluZWQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92ZXJ0ZXhCdWZmZXJWaWV3TWFwLmdldChidWZmZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRWZXJ0ZXhCdWZmZXJWaWV3KGJ1ZmZlcjogQnVmZmVyLCBidWZmZXJWaWV3OiBJQnVmZmVyVmlldyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3ZlcnRleEJ1ZmZlclZpZXdNYXAuc2V0KGJ1ZmZlciwgYnVmZmVyVmlldyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFJlbWFwcGVkQnVmZmVyVmlldyhidWZmZXI6IEJ1ZmZlciwgdmVydGV4QnVmZmVyOiBWZXJ0ZXhCdWZmZXIsIGJ1ZmZlclZpZXc6IElCdWZmZXJWaWV3KSB7XHJcbiAgICAgICAgdGhpcy5fcmVtYXBwZWRCdWZmZXJWaWV3LnNldChidWZmZXIsIG5ldyBNYXA8VmVydGV4QnVmZmVyLCBJQnVmZmVyVmlldz4oKSk7XHJcbiAgICAgICAgdGhpcy5fcmVtYXBwZWRCdWZmZXJWaWV3LmdldChidWZmZXIpIS5zZXQodmVydGV4QnVmZmVyLCBidWZmZXJWaWV3KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UmVtYXBwZWRCdWZmZXJWaWV3KGJ1ZmZlcjogQnVmZmVyLCB2ZXJ0ZXhCdWZmZXI6IFZlcnRleEJ1ZmZlcik6IElCdWZmZXJWaWV3IHwgdW5kZWZpbmVkIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcmVtYXBwZWRCdWZmZXJWaWV3LmdldChidWZmZXIpPy5nZXQodmVydGV4QnVmZmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0VmVydGV4QWNjZXNzb3IodmVydGV4QnVmZmVyOiBWZXJ0ZXhCdWZmZXIsIHN0YXJ0OiBudW1iZXIsIGNvdW50OiBudW1iZXIpOiBudW1iZXIgfCB1bmRlZmluZWQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92ZXJ0ZXhBY2Nlc3Nvck1hcC5nZXQodmVydGV4QnVmZmVyKT8uZ2V0KHN0YXJ0KT8uZ2V0KGNvdW50KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0VmVydGV4QWNjZXNzb3IodmVydGV4QnVmZmVyOiBWZXJ0ZXhCdWZmZXIsIHN0YXJ0OiBudW1iZXIsIGNvdW50OiBudW1iZXIsIGFjY2Vzc29ySW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGxldCBtYXAxID0gdGhpcy5fdmVydGV4QWNjZXNzb3JNYXAuZ2V0KHZlcnRleEJ1ZmZlcik7XHJcbiAgICAgICAgaWYgKCFtYXAxKSB7XHJcbiAgICAgICAgICAgIG1hcDEgPSBuZXcgTWFwPG51bWJlciwgTWFwPG51bWJlciwgbnVtYmVyPj4oKTtcclxuICAgICAgICAgICAgdGhpcy5fdmVydGV4QWNjZXNzb3JNYXAuc2V0KHZlcnRleEJ1ZmZlciwgbWFwMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgbWFwMiA9IG1hcDEuZ2V0KHN0YXJ0KTtcclxuICAgICAgICBpZiAoIW1hcDIpIHtcclxuICAgICAgICAgICAgbWFwMiA9IG5ldyBNYXA8bnVtYmVyLCBudW1iZXI+KCk7XHJcbiAgICAgICAgICAgIG1hcDEuc2V0KHN0YXJ0LCBtYXAyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1hcDIuc2V0KGNvdW50LCBhY2Nlc3NvckluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGFzVmVydGV4Q29sb3JBbHBoYSh2ZXJ0ZXhCdWZmZXI6IFZlcnRleEJ1ZmZlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92ZXJ0ZXhNYXBDb2xvckFscGhhLmdldCh2ZXJ0ZXhCdWZmZXIpIHx8IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRIYXNWZXJ0ZXhDb2xvckFscGhhKHZlcnRleEJ1ZmZlcjogVmVydGV4QnVmZmVyLCBoYXNBbHBoYTogYm9vbGVhbikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92ZXJ0ZXhNYXBDb2xvckFscGhhLnNldCh2ZXJ0ZXhCdWZmZXIsIGhhc0FscGhhKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0TWVzaChtZXNoOiBBYnN0cmFjdE1lc2gpOiBudW1iZXIgfCB1bmRlZmluZWQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tZXNoTWFwLmdldChtZXNoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0TWVzaChtZXNoOiBBYnN0cmFjdE1lc2gsIG1lc2hJbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fbWVzaE1hcC5zZXQobWVzaCwgbWVzaEluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYmluZE1vcnBoRGF0YVRvTWVzaChtZXNoOiBBYnN0cmFjdE1lc2gsIG1vcnBoRGF0YTogSU1vcnBoVGFyZ2V0RGF0YSkge1xyXG4gICAgICAgIGNvbnN0IG1vcnBoVGFyZ2V0cyA9IHRoaXMuX21lc2hNb3JwaFRhcmdldE1hcC5nZXQobWVzaCkgfHwgW107XHJcbiAgICAgICAgdGhpcy5fbWVzaE1vcnBoVGFyZ2V0TWFwLnNldChtZXNoLCBtb3JwaFRhcmdldHMpO1xyXG4gICAgICAgIGlmIChtb3JwaFRhcmdldHMuaW5kZXhPZihtb3JwaERhdGEpID09PSAtMSkge1xyXG4gICAgICAgICAgICBtb3JwaFRhcmdldHMucHVzaChtb3JwaERhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0TW9ycGhUYXJnZXRzRnJvbU1lc2gobWVzaDogQWJzdHJhY3RNZXNoKTogSU1vcnBoVGFyZ2V0RGF0YVtdIHwgdW5kZWZpbmVkIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWVzaE1vcnBoVGFyZ2V0TWFwLmdldChtZXNoKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqIEBpbnRlcm5hbCAqL1xyXG5leHBvcnQgY2xhc3MgR0xURkV4cG9ydGVyIHtcclxuICAgIHB1YmxpYyByZWFkb25seSBfZ2xURjogSUdMVEYgPSB7XHJcbiAgICAgICAgYXNzZXQ6IHsgZ2VuZXJhdG9yOiBgQmFieWxvbi5qcyB2JHtFbmdpbmUuVmVyc2lvbn1gLCB2ZXJzaW9uOiBcIjIuMFwiIH0sXHJcbiAgICB9O1xyXG5cclxuICAgIHB1YmxpYyByZWFkb25seSBfYW5pbWF0aW9uczogSUFuaW1hdGlvbltdID0gW107XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgX2FjY2Vzc29yczogSUFjY2Vzc29yW10gPSBbXTtcclxuICAgIHB1YmxpYyByZWFkb25seSBfYnVmZmVyVmlld3M6IElCdWZmZXJWaWV3W10gPSBbXTtcclxuICAgIHB1YmxpYyByZWFkb25seSBfY2FtZXJhczogSUNhbWVyYVtdID0gW107XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgX2ltYWdlczogSUltYWdlW10gPSBbXTtcclxuICAgIHB1YmxpYyByZWFkb25seSBfbWF0ZXJpYWxzOiBJTWF0ZXJpYWxbXSA9IFtdO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IF9tZXNoZXM6IElNZXNoW10gPSBbXTtcclxuICAgIHB1YmxpYyByZWFkb25seSBfbm9kZXM6IElOb2RlW10gPSBbXTtcclxuICAgIHB1YmxpYyByZWFkb25seSBfc2FtcGxlcnM6IElTYW1wbGVyW10gPSBbXTtcclxuICAgIHB1YmxpYyByZWFkb25seSBfc2NlbmVzOiBJU2NlbmVbXSA9IFtdO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IF9za2luczogSVNraW5bXSA9IFtdO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IF90ZXh0dXJlczogSVRleHR1cmVbXSA9IFtdO1xyXG5cclxuICAgIHB1YmxpYyByZWFkb25seSBfYmFieWxvblNjZW5lOiBTY2VuZTtcclxuICAgIHB1YmxpYyByZWFkb25seSBfaW1hZ2VEYXRhOiB7IFtmaWxlTmFtZTogc3RyaW5nXTogeyBkYXRhOiBBcnJheUJ1ZmZlcjsgbWltZVR5cGU6IEltYWdlTWltZVR5cGUgfSB9ID0ge307XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBCYWtlZCBhbmltYXRpb24gc2FtcGxlIHJhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfYW5pbWF0aW9uU2FtcGxlUmF0ZTogbnVtYmVyO1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX29wdGlvbnM6IFJlcXVpcmVkPElFeHBvcnRPcHRpb25zPjtcclxuXHJcbiAgICBwdWJsaWMgX3Nob3VsZFVzZUdsYjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHB1YmxpYyByZWFkb25seSBfbWF0ZXJpYWxFeHBvcnRlciA9IG5ldyBHTFRGTWF0ZXJpYWxFeHBvcnRlcih0aGlzKTtcclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9leHRlbnNpb25zOiB7IFtuYW1lOiBzdHJpbmddOiBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIgfSA9IHt9O1xyXG5cclxuICAgIHB1YmxpYyByZWFkb25seSBfYnVmZmVyTWFuYWdlciA9IG5ldyBCdWZmZXJNYW5hZ2VyKCk7XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfc2hvdWxkRXhwb3J0Tm9kZU1hcCA9IG5ldyBNYXA8Tm9kZSwgYm9vbGVhbj4oKTtcclxuXHJcbiAgICAvLyBCYWJ5bG9uIG5vZGUgLT4gZ2xURiBub2RlIGluZGV4XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9ub2RlTWFwID0gbmV3IE1hcDxOb2RlLCBudW1iZXI+KCk7XHJcblxyXG4gICAgLy8gQmFieWxvbiBtYXRlcmlhbCAtPiBnbFRGIG1hdGVyaWFsIGluZGV4XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgX21hdGVyaWFsTWFwID0gbmV3IE1hcDxNYXRlcmlhbCwgbnVtYmVyPigpO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfY2FtZXJhc01hcCA9IG5ldyBNYXA8Q2FtZXJhLCBJQ2FtZXJhPigpO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfbm9kZXNDYW1lcmFNYXAgPSBuZXcgTWFwPElDYW1lcmEsIElOb2RlW10+KCk7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9za2luTWFwID0gbmV3IE1hcDxTa2VsZXRvbiwgSVNraW4+KCk7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9ub2Rlc1NraW5NYXAgPSBuZXcgTWFwPElTa2luLCBJTm9kZVtdPigpO1xyXG5cclxuICAgIC8vIEEgbWF0ZXJpYWwgaW4gdGhpcyBzZXQgcmVxdWlyZXMgVVZzXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgX21hdGVyaWFsTmVlZHNVVnNTZXQgPSBuZXcgU2V0PE1hdGVyaWFsPigpO1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IF9FeHRlbnNpb25OYW1lcyA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBfRXh0ZW5zaW9uRmFjdG9yaWVzOiB7IFtuYW1lOiBzdHJpbmddOiAoZXhwb3J0ZXI6IEdMVEZFeHBvcnRlcikgPT4gSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyIH0gPSB7fTtcclxuXHJcbiAgICBwcml2YXRlIF9hcHBseUV4dGVuc2lvbjxUPihcclxuICAgICAgICBub2RlOiBULFxyXG4gICAgICAgIGV4dGVuc2lvbnM6IElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMltdLFxyXG4gICAgICAgIGluZGV4OiBudW1iZXIsXHJcbiAgICAgICAgYWN0aW9uQXN5bmM6IChleHRlbnNpb246IElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMiwgbm9kZTogVCkgPT4gUHJvbWlzZTxOdWxsYWJsZTxUPj4gfCB1bmRlZmluZWRcclxuICAgICk6IFByb21pc2U8TnVsbGFibGU8VD4+IHtcclxuICAgICAgICBpZiAoaW5kZXggPj0gZXh0ZW5zaW9ucy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShub2RlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9taXNlID0gYWN0aW9uQXN5bmMoZXh0ZW5zaW9uc1tpbmRleF0sIG5vZGUpO1xyXG5cclxuICAgICAgICBpZiAoIWN1cnJlbnRQcm9taXNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9hcHBseUV4dGVuc2lvbihub2RlLCBleHRlbnNpb25zLCBpbmRleCArIDEsIGFjdGlvbkFzeW5jKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjdXJyZW50UHJvbWlzZS50aGVuKChuZXdOb2RlKSA9PiAobmV3Tm9kZSA/IHRoaXMuX2FwcGx5RXh0ZW5zaW9uKG5ld05vZGUsIGV4dGVuc2lvbnMsIGluZGV4ICsgMSwgYWN0aW9uQXN5bmMpIDogbnVsbCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2FwcGx5RXh0ZW5zaW9uczxUPihub2RlOiBULCBhY3Rpb25Bc3luYzogKGV4dGVuc2lvbjogSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyLCBub2RlOiBUKSA9PiBQcm9taXNlPE51bGxhYmxlPFQ+PiB8IHVuZGVmaW5lZCk6IFByb21pc2U8TnVsbGFibGU8VD4+IHtcclxuICAgICAgICBjb25zdCBleHRlbnNpb25zOiBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjJbXSA9IFtdO1xyXG4gICAgICAgIGZvciAoY29uc3QgbmFtZSBvZiBHTFRGRXhwb3J0ZXIuX0V4dGVuc2lvbk5hbWVzKSB7XHJcbiAgICAgICAgICAgIGV4dGVuc2lvbnMucHVzaCh0aGlzLl9leHRlbnNpb25zW25hbWVdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9hcHBseUV4dGVuc2lvbihub2RlLCBleHRlbnNpb25zLCAwLCBhY3Rpb25Bc3luYyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIF9leHRlbnNpb25zUHJlRXhwb3J0VGV4dHVyZUFzeW5jKGNvbnRleHQ6IHN0cmluZywgYmFieWxvblRleHR1cmU6IFRleHR1cmUsIG1pbWVUeXBlOiBJbWFnZU1pbWVUeXBlKTogUHJvbWlzZTxOdWxsYWJsZTxCYXNlVGV4dHVyZT4+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXBwbHlFeHRlbnNpb25zKGJhYnlsb25UZXh0dXJlLCAoZXh0ZW5zaW9uLCBub2RlKSA9PiBleHRlbnNpb24ucHJlRXhwb3J0VGV4dHVyZUFzeW5jICYmIGV4dGVuc2lvbi5wcmVFeHBvcnRUZXh0dXJlQXN5bmMoY29udGV4dCwgbm9kZSwgbWltZVR5cGUpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgX2V4dGVuc2lvbnNQb3N0RXhwb3J0Tm9kZUFzeW5jKGNvbnRleHQ6IHN0cmluZywgbm9kZTogSU5vZGUsIGJhYnlsb25Ob2RlOiBOb2RlLCBub2RlTWFwOiBNYXA8Tm9kZSwgbnVtYmVyPiwgY29udmVydFRvUmlnaHRIYW5kZWQ6IGJvb2xlYW4pOiBQcm9taXNlPE51bGxhYmxlPElOb2RlPj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hcHBseUV4dGVuc2lvbnMoXHJcbiAgICAgICAgICAgIG5vZGUsXHJcbiAgICAgICAgICAgIChleHRlbnNpb24sIG5vZGUpID0+IGV4dGVuc2lvbi5wb3N0RXhwb3J0Tm9kZUFzeW5jICYmIGV4dGVuc2lvbi5wb3N0RXhwb3J0Tm9kZUFzeW5jKGNvbnRleHQsIG5vZGUsIGJhYnlsb25Ob2RlLCBub2RlTWFwLCBjb252ZXJ0VG9SaWdodEhhbmRlZCwgdGhpcy5fYnVmZmVyTWFuYWdlcilcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBfZXh0ZW5zaW9uc1Bvc3RFeHBvcnRNYXRlcmlhbEFzeW5jKGNvbnRleHQ6IHN0cmluZywgbWF0ZXJpYWw6IElNYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCk6IFByb21pc2U8TnVsbGFibGU8SU1hdGVyaWFsPj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hcHBseUV4dGVuc2lvbnMobWF0ZXJpYWwsIChleHRlbnNpb24sIG5vZGUpID0+IGV4dGVuc2lvbi5wb3N0RXhwb3J0TWF0ZXJpYWxBc3luYyAmJiBleHRlbnNpb24ucG9zdEV4cG9ydE1hdGVyaWFsQXN5bmMoY29udGV4dCwgbm9kZSwgYmFieWxvbk1hdGVyaWFsKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIF9leHRlbnNpb25zUG9zdEV4cG9ydE1hdGVyaWFsQWRkaXRpb25hbFRleHR1cmVzKGNvbnRleHQ6IHN0cmluZywgbWF0ZXJpYWw6IElNYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCk6IEJhc2VUZXh0dXJlW10ge1xyXG4gICAgICAgIGNvbnN0IG91dHB1dDogQmFzZVRleHR1cmVbXSA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IG5hbWUgb2YgR0xURkV4cG9ydGVyLl9FeHRlbnNpb25OYW1lcykge1xyXG4gICAgICAgICAgICBjb25zdCBleHRlbnNpb24gPSB0aGlzLl9leHRlbnNpb25zW25hbWVdO1xyXG5cclxuICAgICAgICAgICAgaWYgKGV4dGVuc2lvbi5wb3N0RXhwb3J0TWF0ZXJpYWxBZGRpdGlvbmFsVGV4dHVyZXMpIHtcclxuICAgICAgICAgICAgICAgIG91dHB1dC5wdXNoKC4uLmV4dGVuc2lvbi5wb3N0RXhwb3J0TWF0ZXJpYWxBZGRpdGlvbmFsVGV4dHVyZXMoY29udGV4dCwgbWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBfZXh0ZW5zaW9uc1Bvc3RFeHBvcnRUZXh0dXJlcyhjb250ZXh0OiBzdHJpbmcsIHRleHR1cmVJbmZvOiBJVGV4dHVyZUluZm8sIGJhYnlsb25UZXh0dXJlOiBCYXNlVGV4dHVyZSk6IHZvaWQge1xyXG4gICAgICAgIGZvciAoY29uc3QgbmFtZSBvZiBHTFRGRXhwb3J0ZXIuX0V4dGVuc2lvbk5hbWVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IHRoaXMuX2V4dGVuc2lvbnNbbmFtZV07XHJcblxyXG4gICAgICAgICAgICBpZiAoZXh0ZW5zaW9uLnBvc3RFeHBvcnRUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICBleHRlbnNpb24ucG9zdEV4cG9ydFRleHR1cmUoY29udGV4dCwgdGV4dHVyZUluZm8sIGJhYnlsb25UZXh0dXJlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgX2V4dGVuc2lvbnNQb3N0RXhwb3J0TWVzaFByaW1pdGl2ZShwcmltaXRpdmU6IElNZXNoUHJpbWl0aXZlKTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChjb25zdCBuYW1lIG9mIEdMVEZFeHBvcnRlci5fRXh0ZW5zaW9uTmFtZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgZXh0ZW5zaW9uID0gdGhpcy5fZXh0ZW5zaW9uc1tuYW1lXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChleHRlbnNpb24ucG9zdEV4cG9ydE1lc2hQcmltaXRpdmUpIHtcclxuICAgICAgICAgICAgICAgIGV4dGVuc2lvbi5wb3N0RXhwb3J0TWVzaFByaW1pdGl2ZShwcmltaXRpdmUsIHRoaXMuX2J1ZmZlck1hbmFnZXIsIHRoaXMuX2FjY2Vzc29ycyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIF9leHRlbnNpb25zUHJlR2VuZXJhdGVCaW5hcnlBc3luYygpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBmb3IgKGNvbnN0IG5hbWUgb2YgR0xURkV4cG9ydGVyLl9FeHRlbnNpb25OYW1lcykge1xyXG4gICAgICAgICAgICBjb25zdCBleHRlbnNpb24gPSB0aGlzLl9leHRlbnNpb25zW25hbWVdO1xyXG5cclxuICAgICAgICAgICAgaWYgKGV4dGVuc2lvbi5wcmVHZW5lcmF0ZUJpbmFyeUFzeW5jKSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBleHRlbnNpb24ucHJlR2VuZXJhdGVCaW5hcnlBc3luYyh0aGlzLl9idWZmZXJNYW5hZ2VyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9mb3JFYWNoRXh0ZW5zaW9ucyhhY3Rpb246IChleHRlbnNpb246IElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMikgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIGZvciAoY29uc3QgbmFtZSBvZiBHTFRGRXhwb3J0ZXIuX0V4dGVuc2lvbk5hbWVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IHRoaXMuX2V4dGVuc2lvbnNbbmFtZV07XHJcbiAgICAgICAgICAgIGlmIChleHRlbnNpb24uZW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uKGV4dGVuc2lvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZXh0ZW5zaW9uc09uRXhwb3J0aW5nKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2ZvckVhY2hFeHRlbnNpb25zKChleHRlbnNpb24pID0+IHtcclxuICAgICAgICAgICAgaWYgKGV4dGVuc2lvbi53YXNVc2VkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9nbFRGLmV4dGVuc2lvbnNVc2VkIHx8PSBbXTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9nbFRGLmV4dGVuc2lvbnNVc2VkLmluZGV4T2YoZXh0ZW5zaW9uLm5hbWUpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2dsVEYuZXh0ZW5zaW9uc1VzZWQucHVzaChleHRlbnNpb24ubmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGV4dGVuc2lvbi5yZXF1aXJlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2dsVEYuZXh0ZW5zaW9uc1JlcXVpcmVkIHx8PSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fZ2xURi5leHRlbnNpb25zUmVxdWlyZWQuaW5kZXhPZihleHRlbnNpb24ubmFtZSkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2dsVEYuZXh0ZW5zaW9uc1JlcXVpcmVkLnB1c2goZXh0ZW5zaW9uLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9nbFRGLmV4dGVuc2lvbnMgfHw9IHt9O1xyXG4gICAgICAgICAgICAgICAgaWYgKGV4dGVuc2lvbi5vbkV4cG9ydGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGV4dGVuc2lvbi5vbkV4cG9ydGluZygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZEV4dGVuc2lvbnMoKTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChjb25zdCBuYW1lIG9mIEdMVEZFeHBvcnRlci5fRXh0ZW5zaW9uTmFtZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgZXh0ZW5zaW9uID0gR0xURkV4cG9ydGVyLl9FeHRlbnNpb25GYWN0b3JpZXNbbmFtZV0odGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMuX2V4dGVuc2lvbnNbbmFtZV0gPSBleHRlbnNpb247XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihiYWJ5bG9uU2NlbmU6IE51bGxhYmxlPFNjZW5lPiA9IEVuZ2luZVN0b3JlLkxhc3RDcmVhdGVkU2NlbmUsIG9wdGlvbnM/OiBJRXhwb3J0T3B0aW9ucykge1xyXG4gICAgICAgIGlmICghYmFieWxvblNjZW5lKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHNjZW5lIGF2YWlsYWJsZSB0byBleHBvcnRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9iYWJ5bG9uU2NlbmUgPSBiYWJ5bG9uU2NlbmU7XHJcblxyXG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHNob3VsZEV4cG9ydE5vZGU6ICgpID0+IHRydWUsXHJcbiAgICAgICAgICAgIHNob3VsZEV4cG9ydEFuaW1hdGlvbjogKCkgPT4gdHJ1ZSxcclxuICAgICAgICAgICAgbWV0YWRhdGFTZWxlY3RvcjogKG1ldGFkYXRhKSA9PiBtZXRhZGF0YT8uZ2x0Zj8uZXh0cmFzLFxyXG4gICAgICAgICAgICBhbmltYXRpb25TYW1wbGVSYXRlOiAxIC8gNjAsXHJcbiAgICAgICAgICAgIGV4cG9ydFdpdGhvdXRXYWl0aW5nRm9yU2NlbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICBleHBvcnRVbnVzZWRVVnM6IGZhbHNlLFxyXG4gICAgICAgICAgICByZW1vdmVOb29wUm9vdE5vZGVzOiB0cnVlLFxyXG4gICAgICAgICAgICBpbmNsdWRlQ29vcmRpbmF0ZVN5c3RlbUNvbnZlcnNpb25Ob2RlczogZmFsc2UsXHJcbiAgICAgICAgICAgIG1lc2hDb21wcmVzc2lvbk1ldGhvZDogXCJOb25lXCIsXHJcbiAgICAgICAgICAgIC4uLm9wdGlvbnMsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5fbG9hZEV4dGVuc2lvbnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLl9leHRlbnNpb25zKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IHRoaXMuX2V4dGVuc2lvbnNba2V5XTtcclxuICAgICAgICAgICAgZXh0ZW5zaW9uLmRpc3Bvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBvcHRpb25zKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9vcHRpb25zO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgUmVnaXN0ZXJFeHRlbnNpb24obmFtZTogc3RyaW5nLCBmYWN0b3J5OiAoZXhwb3J0ZXI6IEdMVEZFeHBvcnRlcikgPT4gSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKEdMVEZFeHBvcnRlci5VbnJlZ2lzdGVyRXh0ZW5zaW9uKG5hbWUpKSB7XHJcbiAgICAgICAgICAgIFRvb2xzLldhcm4oYEV4dGVuc2lvbiB3aXRoIHRoZSBuYW1lICR7bmFtZX0gYWxyZWFkeSBleGlzdHNgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEdMVEZFeHBvcnRlci5fRXh0ZW5zaW9uRmFjdG9yaWVzW25hbWVdID0gZmFjdG9yeTtcclxuICAgICAgICBHTFRGRXhwb3J0ZXIuX0V4dGVuc2lvbk5hbWVzLnB1c2gobmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBVbnJlZ2lzdGVyRXh0ZW5zaW9uKG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICghR0xURkV4cG9ydGVyLl9FeHRlbnNpb25GYWN0b3JpZXNbbmFtZV0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWxldGUgR0xURkV4cG9ydGVyLl9FeHRlbnNpb25GYWN0b3JpZXNbbmFtZV07XHJcblxyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gR0xURkV4cG9ydGVyLl9FeHRlbnNpb25OYW1lcy5pbmRleE9mKG5hbWUpO1xyXG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgR0xURkV4cG9ydGVyLl9FeHRlbnNpb25OYW1lcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZ2VuZXJhdGVKU09OKGJ1ZmZlckJ5dGVMZW5ndGg6IG51bWJlciwgZmlsZU5hbWU/OiBzdHJpbmcsIHByZXR0eVByaW50PzogYm9vbGVhbik6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3QgYnVmZmVyOiBJQnVmZmVyID0geyBieXRlTGVuZ3RoOiBidWZmZXJCeXRlTGVuZ3RoIH07XHJcblxyXG4gICAgICAgIGlmIChidWZmZXIuYnl0ZUxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLl9nbFRGLmJ1ZmZlcnMgPSBbYnVmZmVyXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX25vZGVzICYmIHRoaXMuX25vZGVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLl9nbFRGLm5vZGVzID0gdGhpcy5fbm9kZXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9tZXNoZXMgJiYgdGhpcy5fbWVzaGVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLl9nbFRGLm1lc2hlcyA9IHRoaXMuX21lc2hlcztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX3NjZW5lcyAmJiB0aGlzLl9zY2VuZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2dsVEYuc2NlbmVzID0gdGhpcy5fc2NlbmVzO1xyXG4gICAgICAgICAgICB0aGlzLl9nbFRGLnNjZW5lID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX2NhbWVyYXMgJiYgdGhpcy5fY2FtZXJhcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5fZ2xURi5jYW1lcmFzID0gdGhpcy5fY2FtZXJhcztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX2J1ZmZlclZpZXdzICYmIHRoaXMuX2J1ZmZlclZpZXdzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLl9nbFRGLmJ1ZmZlclZpZXdzID0gdGhpcy5fYnVmZmVyVmlld3M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9hY2Nlc3NvcnMgJiYgdGhpcy5fYWNjZXNzb3JzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLl9nbFRGLmFjY2Vzc29ycyA9IHRoaXMuX2FjY2Vzc29ycztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX2FuaW1hdGlvbnMgJiYgdGhpcy5fYW5pbWF0aW9ucy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5fZ2xURi5hbmltYXRpb25zID0gdGhpcy5fYW5pbWF0aW9ucztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX21hdGVyaWFscyAmJiB0aGlzLl9tYXRlcmlhbHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2dsVEYubWF0ZXJpYWxzID0gdGhpcy5fbWF0ZXJpYWxzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fdGV4dHVyZXMgJiYgdGhpcy5fdGV4dHVyZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2dsVEYudGV4dHVyZXMgPSB0aGlzLl90ZXh0dXJlcztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX3NhbXBsZXJzICYmIHRoaXMuX3NhbXBsZXJzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLl9nbFRGLnNhbXBsZXJzID0gdGhpcy5fc2FtcGxlcnM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9za2lucyAmJiB0aGlzLl9za2lucy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5fZ2xURi5za2lucyA9IHRoaXMuX3NraW5zO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5faW1hZ2VzICYmIHRoaXMuX2ltYWdlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5fZ2xURi5pbWFnZXMgPSB0aGlzLl9pbWFnZXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuX3Nob3VsZFVzZUdsYikge1xyXG4gICAgICAgICAgICBidWZmZXIudXJpID0gZmlsZU5hbWUgKyBcIi5iaW5cIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBwcmV0dHlQcmludCA/IEpTT04uc3RyaW5naWZ5KHRoaXMuX2dsVEYsIG51bGwsIDIpIDogSlNPTi5zdHJpbmdpZnkodGhpcy5fZ2xURik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGdlbmVyYXRlR0xURkFzeW5jKGdsVEZQcmVmaXg6IHN0cmluZyk6IFByb21pc2U8R0xURkRhdGE+IHtcclxuICAgICAgICBjb25zdCBiaW5hcnlCdWZmZXIgPSBhd2FpdCB0aGlzLl9nZW5lcmF0ZUJpbmFyeUFzeW5jKCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2V4dGVuc2lvbnNPbkV4cG9ydGluZygpO1xyXG4gICAgICAgIGNvbnN0IGpzb25UZXh0ID0gdGhpcy5fZ2VuZXJhdGVKU09OKGJpbmFyeUJ1ZmZlci5ieXRlTGVuZ3RoLCBnbFRGUHJlZml4LCB0cnVlKTtcclxuICAgICAgICBjb25zdCBiaW4gPSBuZXcgQmxvYihbYmluYXJ5QnVmZmVyXSwgeyB0eXBlOiBcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBnbFRGRmlsZU5hbWUgPSBnbFRGUHJlZml4ICsgXCIuZ2x0ZlwiO1xyXG4gICAgICAgIGNvbnN0IGdsVEZCaW5GaWxlID0gZ2xURlByZWZpeCArIFwiLmJpblwiO1xyXG5cclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBuZXcgR0xURkRhdGEoKTtcclxuXHJcbiAgICAgICAgY29udGFpbmVyLmZpbGVzW2dsVEZGaWxlTmFtZV0gPSBqc29uVGV4dDtcclxuICAgICAgICBjb250YWluZXIuZmlsZXNbZ2xURkJpbkZpbGVdID0gYmluO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5faW1hZ2VEYXRhKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgaW1hZ2UgaW4gdGhpcy5faW1hZ2VEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIuZmlsZXNbaW1hZ2VdID0gbmV3IEJsb2IoW3RoaXMuX2ltYWdlRGF0YVtpbWFnZV0uZGF0YV0sIHsgdHlwZTogdGhpcy5faW1hZ2VEYXRhW2ltYWdlXS5taW1lVHlwZSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIF9nZW5lcmF0ZUJpbmFyeUFzeW5jKCk6IFByb21pc2U8VWludDhBcnJheT4ge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuX2V4cG9ydFNjZW5lQXN5bmMoKTtcclxuICAgICAgICBhd2FpdCB0aGlzLl9leHRlbnNpb25zUHJlR2VuZXJhdGVCaW5hcnlBc3luYygpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9idWZmZXJNYW5hZ2VyLmdlbmVyYXRlQmluYXJ5KHRoaXMuX2J1ZmZlclZpZXdzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFBhZHMgdGhlIG51bWJlciB0byBhIG11bHRpcGxlIG9mIDRcclxuICAgICAqIEBwYXJhbSBudW0gbnVtYmVyIHRvIHBhZFxyXG4gICAgICogQHJldHVybnMgcGFkZGVkIG51bWJlclxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9nZXRQYWRkaW5nKG51bTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCByZW1haW5kZXIgPSBudW0gJSA0O1xyXG4gICAgICAgIGNvbnN0IHBhZGRpbmcgPSByZW1haW5kZXIgPT09IDAgPyByZW1haW5kZXIgOiA0IC0gcmVtYWluZGVyO1xyXG5cclxuICAgICAgICByZXR1cm4gcGFkZGluZztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZ2VuZXJhdGVHTEJBc3luYyhnbFRGUHJlZml4OiBzdHJpbmcpOiBQcm9taXNlPEdMVEZEYXRhPiB7XHJcbiAgICAgICAgdGhpcy5fc2hvdWxkVXNlR2xiID0gdHJ1ZTtcclxuICAgICAgICBjb25zdCBiaW5hcnlCdWZmZXIgPSBhd2FpdCB0aGlzLl9nZW5lcmF0ZUJpbmFyeUFzeW5jKCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2V4dGVuc2lvbnNPbkV4cG9ydGluZygpO1xyXG4gICAgICAgIGNvbnN0IGpzb25UZXh0ID0gdGhpcy5fZ2VuZXJhdGVKU09OKGJpbmFyeUJ1ZmZlci5ieXRlTGVuZ3RoKTtcclxuICAgICAgICBjb25zdCBnbGJGaWxlTmFtZSA9IGdsVEZQcmVmaXggKyBcIi5nbGJcIjtcclxuICAgICAgICBjb25zdCBoZWFkZXJMZW5ndGggPSAxMjtcclxuICAgICAgICBjb25zdCBjaHVua0xlbmd0aFByZWZpeCA9IDg7XHJcbiAgICAgICAgbGV0IGpzb25MZW5ndGggPSBqc29uVGV4dC5sZW5ndGg7XHJcbiAgICAgICAgbGV0IGVuY29kZWRKc29uVGV4dDtcclxuICAgICAgICAvLyBtYWtlIHVzZSBvZiBUZXh0RW5jb2RlciB3aGVuIGF2YWlsYWJsZVxyXG4gICAgICAgIGlmICh0eXBlb2YgVGV4dEVuY29kZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgZW5jb2RlciA9IG5ldyBUZXh0RW5jb2RlcigpO1xyXG4gICAgICAgICAgICBlbmNvZGVkSnNvblRleHQgPSBlbmNvZGVyLmVuY29kZShqc29uVGV4dCk7XHJcbiAgICAgICAgICAgIGpzb25MZW5ndGggPSBlbmNvZGVkSnNvblRleHQubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBqc29uUGFkZGluZyA9IHRoaXMuX2dldFBhZGRpbmcoanNvbkxlbmd0aCk7XHJcbiAgICAgICAgY29uc3QgYmluUGFkZGluZyA9IHRoaXMuX2dldFBhZGRpbmcoYmluYXJ5QnVmZmVyLmJ5dGVMZW5ndGgpO1xyXG5cclxuICAgICAgICBjb25zdCBieXRlTGVuZ3RoID0gaGVhZGVyTGVuZ3RoICsgMiAqIGNodW5rTGVuZ3RoUHJlZml4ICsganNvbkxlbmd0aCArIGpzb25QYWRkaW5nICsgYmluYXJ5QnVmZmVyLmJ5dGVMZW5ndGggKyBiaW5QYWRkaW5nO1xyXG5cclxuICAgICAgICAvLyBoZWFkZXJcclxuICAgICAgICBjb25zdCBoZWFkZXJCdWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoaGVhZGVyTGVuZ3RoKTtcclxuICAgICAgICBjb25zdCBoZWFkZXJCdWZmZXJWaWV3ID0gbmV3IERhdGFWaWV3KGhlYWRlckJ1ZmZlcik7XHJcbiAgICAgICAgaGVhZGVyQnVmZmVyVmlldy5zZXRVaW50MzIoMCwgMHg0NjU0NmM2NywgdHJ1ZSk7IC8vZ2xURlxyXG4gICAgICAgIGhlYWRlckJ1ZmZlclZpZXcuc2V0VWludDMyKDQsIDIsIHRydWUpOyAvLyB2ZXJzaW9uXHJcbiAgICAgICAgaGVhZGVyQnVmZmVyVmlldy5zZXRVaW50MzIoOCwgYnl0ZUxlbmd0aCwgdHJ1ZSk7IC8vIHRvdGFsIGJ5dGVzIGluIGZpbGVcclxuXHJcbiAgICAgICAgLy8ganNvbiBjaHVua1xyXG4gICAgICAgIGNvbnN0IGpzb25DaHVua0J1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcihjaHVua0xlbmd0aFByZWZpeCArIGpzb25MZW5ndGggKyBqc29uUGFkZGluZyk7XHJcbiAgICAgICAgY29uc3QganNvbkNodW5rQnVmZmVyVmlldyA9IG5ldyBEYXRhVmlldyhqc29uQ2h1bmtCdWZmZXIpO1xyXG4gICAgICAgIGpzb25DaHVua0J1ZmZlclZpZXcuc2V0VWludDMyKDAsIGpzb25MZW5ndGggKyBqc29uUGFkZGluZywgdHJ1ZSk7XHJcbiAgICAgICAganNvbkNodW5rQnVmZmVyVmlldy5zZXRVaW50MzIoNCwgMHg0ZTRmNTM0YSwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIC8vIGpzb24gY2h1bmsgYnl0ZXNcclxuICAgICAgICBjb25zdCBqc29uRGF0YSA9IG5ldyBVaW50OEFycmF5KGpzb25DaHVua0J1ZmZlciwgY2h1bmtMZW5ndGhQcmVmaXgpO1xyXG4gICAgICAgIC8vIGlmIFRleHRFbmNvZGVyIHdhcyBhdmFpbGFibGUsIHdlIGNhbiBzaW1wbHkgY29weSB0aGUgZW5jb2RlZCBhcnJheVxyXG4gICAgICAgIGlmIChlbmNvZGVkSnNvblRleHQpIHtcclxuICAgICAgICAgICAganNvbkRhdGEuc2V0KGVuY29kZWRKc29uVGV4dCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgYmxhbmtDaGFyQ29kZSA9IFwiX1wiLmNoYXJDb2RlQXQoMCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwganNvbkxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaGFyQ29kZSA9IGpzb25UZXh0LmNoYXJDb2RlQXQoaSk7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgY2hhcmFjdGVyIGRvZXNuJ3QgZml0IGludG8gYSBzaW5nbGUgVVRGLTE2IGNvZGUgdW5pdCwganVzdCBwdXQgYSBibGFuayBjaGFyYWN0ZXJcclxuICAgICAgICAgICAgICAgIGlmIChjaGFyQ29kZSAhPSBqc29uVGV4dC5jb2RlUG9pbnRBdChpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGpzb25EYXRhW2ldID0gYmxhbmtDaGFyQ29kZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAganNvbkRhdGFbaV0gPSBjaGFyQ29kZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8ganNvbiBwYWRkaW5nXHJcbiAgICAgICAgY29uc3QganNvblBhZGRpbmdWaWV3ID0gbmV3IFVpbnQ4QXJyYXkoanNvbkNodW5rQnVmZmVyLCBjaHVua0xlbmd0aFByZWZpeCArIGpzb25MZW5ndGgpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwganNvblBhZGRpbmc7ICsraSkge1xyXG4gICAgICAgICAgICBqc29uUGFkZGluZ1ZpZXdbaV0gPSAweDIwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gYmluYXJ5IGNodW5rXHJcbiAgICAgICAgY29uc3QgYmluYXJ5Q2h1bmtCdWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoY2h1bmtMZW5ndGhQcmVmaXgpO1xyXG4gICAgICAgIGNvbnN0IGJpbmFyeUNodW5rQnVmZmVyVmlldyA9IG5ldyBEYXRhVmlldyhiaW5hcnlDaHVua0J1ZmZlcik7XHJcbiAgICAgICAgYmluYXJ5Q2h1bmtCdWZmZXJWaWV3LnNldFVpbnQzMigwLCBiaW5hcnlCdWZmZXIuYnl0ZUxlbmd0aCArIGJpblBhZGRpbmcsIHRydWUpO1xyXG4gICAgICAgIGJpbmFyeUNodW5rQnVmZmVyVmlldy5zZXRVaW50MzIoNCwgMHgwMDRlNDk0MiwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIC8vIGJpbmFyeSBwYWRkaW5nXHJcbiAgICAgICAgY29uc3QgYmluUGFkZGluZ0J1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcihiaW5QYWRkaW5nKTtcclxuICAgICAgICBjb25zdCBiaW5QYWRkaW5nVmlldyA9IG5ldyBVaW50OEFycmF5KGJpblBhZGRpbmdCdWZmZXIpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmluUGFkZGluZzsgKytpKSB7XHJcbiAgICAgICAgICAgIGJpblBhZGRpbmdWaWV3W2ldID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGdsYkRhdGEgPSBbaGVhZGVyQnVmZmVyLCBqc29uQ2h1bmtCdWZmZXIsIGJpbmFyeUNodW5rQnVmZmVyLCBiaW5hcnlCdWZmZXIsIGJpblBhZGRpbmdCdWZmZXJdO1xyXG4gICAgICAgIGNvbnN0IGdsYkZpbGUgPSBuZXcgQmxvYihnbGJEYXRhLCB7IHR5cGU6IFwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCIgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IG5ldyBHTFRGRGF0YSgpO1xyXG4gICAgICAgIGNvbnRhaW5lci5maWxlc1tnbGJGaWxlTmFtZV0gPSBnbGJGaWxlO1xyXG5cclxuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3NldE5vZGVUcmFuc2Zvcm1hdGlvbihub2RlOiBJTm9kZSwgYmFieWxvblRyYW5zZm9ybU5vZGU6IFRyYW5zZm9ybU5vZGUsIGNvbnZlcnRUb1JpZ2h0SGFuZGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCFiYWJ5bG9uVHJhbnNmb3JtTm9kZS5nZXRQaXZvdFBvaW50KCkuZXF1YWxzVG9GbG9hdHMoMCwgMCwgMCkpIHtcclxuICAgICAgICAgICAgVG9vbHMuV2FybihcIlBpdm90IHBvaW50cyBhcmUgbm90IHN1cHBvcnRlZCBpbiB0aGUgZ2xURiBzZXJpYWxpemVyXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFiYWJ5bG9uVHJhbnNmb3JtTm9kZS5wb3NpdGlvbi5lcXVhbHNUb0Zsb2F0cygwLCAwLCAwKSkge1xyXG4gICAgICAgICAgICBjb25zdCB0cmFuc2xhdGlvbiA9IFRtcFZlY3RvcnMuVmVjdG9yM1swXS5jb3B5RnJvbShiYWJ5bG9uVHJhbnNmb3JtTm9kZS5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgIGlmIChjb252ZXJ0VG9SaWdodEhhbmRlZCkge1xyXG4gICAgICAgICAgICAgICAgQ29udmVydFRvUmlnaHRIYW5kZWRQb3NpdGlvbih0cmFuc2xhdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5vZGUudHJhbnNsYXRpb24gPSB0cmFuc2xhdGlvbi5hc0FycmF5KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWJhYnlsb25UcmFuc2Zvcm1Ob2RlLnNjYWxpbmcuZXF1YWxzVG9GbG9hdHMoMSwgMSwgMSkpIHtcclxuICAgICAgICAgICAgbm9kZS5zY2FsZSA9IGJhYnlsb25UcmFuc2Zvcm1Ob2RlLnNjYWxpbmcuYXNBcnJheSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgcm90YXRpb25RdWF0ZXJuaW9uID0gUXVhdGVybmlvbi5Gcm9tRXVsZXJBbmdsZXMoYmFieWxvblRyYW5zZm9ybU5vZGUucm90YXRpb24ueCwgYmFieWxvblRyYW5zZm9ybU5vZGUucm90YXRpb24ueSwgYmFieWxvblRyYW5zZm9ybU5vZGUucm90YXRpb24ueik7XHJcbiAgICAgICAgaWYgKGJhYnlsb25UcmFuc2Zvcm1Ob2RlLnJvdGF0aW9uUXVhdGVybmlvbikge1xyXG4gICAgICAgICAgICByb3RhdGlvblF1YXRlcm5pb24ubXVsdGlwbHlJblBsYWNlKGJhYnlsb25UcmFuc2Zvcm1Ob2RlLnJvdGF0aW9uUXVhdGVybmlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghUXVhdGVybmlvbi5Jc0lkZW50aXR5KHJvdGF0aW9uUXVhdGVybmlvbikpIHtcclxuICAgICAgICAgICAgaWYgKGNvbnZlcnRUb1JpZ2h0SGFuZGVkKSB7XHJcbiAgICAgICAgICAgICAgICBDb252ZXJ0VG9SaWdodEhhbmRlZFJvdGF0aW9uKHJvdGF0aW9uUXVhdGVybmlvbik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5vZGUucm90YXRpb24gPSByb3RhdGlvblF1YXRlcm5pb24ubm9ybWFsaXplKCkuYXNBcnJheSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9zZXRDYW1lcmFUcmFuc2Zvcm1hdGlvbihub2RlOiBJTm9kZSwgYmFieWxvbkNhbWVyYTogQ2FtZXJhLCBjb252ZXJ0VG9SaWdodEhhbmRlZDogYm9vbGVhbiwgcGFyZW50OiBOdWxsYWJsZTxOb2RlPik6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHRyYW5zbGF0aW9uID0gVG1wVmVjdG9ycy5WZWN0b3IzWzBdO1xyXG4gICAgICAgIGNvbnN0IHJvdGF0aW9uID0gVG1wVmVjdG9ycy5RdWF0ZXJuaW9uWzBdO1xyXG5cclxuICAgICAgICBpZiAocGFyZW50ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIC8vIENhbWVyYS5nZXRXb3JsZE1hdHJpeCByZXR1cm5zIGdsb2JhbCBjb29yZGluYXRlcy4gR0xURiBub2RlIG11c3QgdXNlIGxvY2FsIGNvb3JkaW5hdGVzLiBJZiBjYW1lcmEgaGFzIHBhcmVudCB3ZSBuZWVkIHRvIHVzZSBsb2NhbCB0cmFuc2xhdGlvbi9yb3RhdGlvbi5cclxuICAgICAgICAgICAgY29uc3QgcGFyZW50V29ybGRNYXRyaXggPSBNYXRyaXguSW52ZXJ0KHBhcmVudC5nZXRXb3JsZE1hdHJpeCgpKTtcclxuICAgICAgICAgICAgY29uc3QgY2FtZXJhV29ybGRNYXRyaXggPSBiYWJ5bG9uQ2FtZXJhLmdldFdvcmxkTWF0cml4KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhbWVyYUxvY2FsID0gY2FtZXJhV29ybGRNYXRyaXgubXVsdGlwbHkocGFyZW50V29ybGRNYXRyaXgpO1xyXG4gICAgICAgICAgICBjYW1lcmFMb2NhbC5kZWNvbXBvc2UodW5kZWZpbmVkLCByb3RhdGlvbiwgdHJhbnNsYXRpb24pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGJhYnlsb25DYW1lcmEuZ2V0V29ybGRNYXRyaXgoKS5kZWNvbXBvc2UodW5kZWZpbmVkLCByb3RhdGlvbiwgdHJhbnNsYXRpb24pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0cmFuc2xhdGlvbi5lcXVhbHNUb0Zsb2F0cygwLCAwLCAwKSkge1xyXG4gICAgICAgICAgICBub2RlLnRyYW5zbGF0aW9uID0gdHJhbnNsYXRpb24uYXNBcnJheSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFRdWF0ZXJuaW9uLklzSWRlbnRpdHkocm90YXRpb24pKSB7XHJcbiAgICAgICAgICAgIG5vZGUucm90YXRpb24gPSByb3RhdGlvbi5hc0FycmF5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEV4cG9ydCBiYWJ5bG9uIGNhbWVyYXMgdG8gZ2xURiBjYW1lcmFzXHJcbiAgICBwcml2YXRlIF9saXN0QXZhaWxhYmxlQ2FtZXJhcygpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGNhbWVyYSBvZiB0aGlzLl9iYWJ5bG9uU2NlbmUuY2FtZXJhcykge1xyXG4gICAgICAgICAgICBjb25zdCBnbFRGQ2FtZXJhOiBJQ2FtZXJhID0ge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogY2FtZXJhLm1vZGUgPT09IENhbWVyYS5QRVJTUEVDVElWRV9DQU1FUkEgPyBDYW1lcmFUeXBlLlBFUlNQRUNUSVZFIDogQ2FtZXJhVHlwZS5PUlRIT0dSQVBISUMsXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBpZiAoY2FtZXJhLm5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGdsVEZDYW1lcmEubmFtZSA9IGNhbWVyYS5uYW1lO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZ2xURkNhbWVyYS50eXBlID09PSBDYW1lcmFUeXBlLlBFUlNQRUNUSVZFKSB7XHJcbiAgICAgICAgICAgICAgICBnbFRGQ2FtZXJhLnBlcnNwZWN0aXZlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGFzcGVjdFJhdGlvOiBjYW1lcmEuZ2V0RW5naW5lKCkuZ2V0QXNwZWN0UmF0aW8oY2FtZXJhKSxcclxuICAgICAgICAgICAgICAgICAgICB5Zm92OiBjYW1lcmEuZm92TW9kZSA9PT0gQ2FtZXJhLkZPVk1PREVfVkVSVElDQUxfRklYRUQgPyBjYW1lcmEuZm92IDogY2FtZXJhLmZvdiAqIGNhbWVyYS5nZXRFbmdpbmUoKS5nZXRBc3BlY3RSYXRpbyhjYW1lcmEpLFxyXG4gICAgICAgICAgICAgICAgICAgIHpuZWFyOiBjYW1lcmEubWluWixcclxuICAgICAgICAgICAgICAgICAgICB6ZmFyOiBjYW1lcmEubWF4WixcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZ2xURkNhbWVyYS50eXBlID09PSBDYW1lcmFUeXBlLk9SVEhPR1JBUEhJQykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaGFsZldpZHRoID0gY2FtZXJhLm9ydGhvTGVmdCAmJiBjYW1lcmEub3J0aG9SaWdodCA/IDAuNSAqIChjYW1lcmEub3J0aG9SaWdodCAtIGNhbWVyYS5vcnRob0xlZnQpIDogY2FtZXJhLmdldEVuZ2luZSgpLmdldFJlbmRlcldpZHRoKCkgKiAwLjU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBoYWxmSGVpZ2h0ID0gY2FtZXJhLm9ydGhvQm90dG9tICYmIGNhbWVyYS5vcnRob1RvcCA/IDAuNSAqIChjYW1lcmEub3J0aG9Ub3AgLSBjYW1lcmEub3J0aG9Cb3R0b20pIDogY2FtZXJhLmdldEVuZ2luZSgpLmdldFJlbmRlckhlaWdodCgpICogMC41O1xyXG4gICAgICAgICAgICAgICAgZ2xURkNhbWVyYS5vcnRob2dyYXBoaWMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgeG1hZzogaGFsZldpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgIHltYWc6IGhhbGZIZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgem5lYXI6IGNhbWVyYS5taW5aLFxyXG4gICAgICAgICAgICAgICAgICAgIHpmYXI6IGNhbWVyYS5tYXhaLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9jYW1lcmFzTWFwLnNldChjYW1lcmEsIGdsVEZDYW1lcmEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBDbGVhbnVwIHVudXNlZCBjYW1lcmFzIGFuZCBhc3NpZ24gaW5kZXggdG8gbm9kZXMuXHJcbiAgICBwcml2YXRlIF9leHBvcnRBbmRBc3NpZ25DYW1lcmFzKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGdsdGZDYW1lcmFzID0gQXJyYXkuZnJvbSh0aGlzLl9jYW1lcmFzTWFwLnZhbHVlcygpKTtcclxuICAgICAgICBmb3IgKGNvbnN0IGdsdGZDYW1lcmEgb2YgZ2x0ZkNhbWVyYXMpIHtcclxuICAgICAgICAgICAgY29uc3QgdXNlZE5vZGVzID0gdGhpcy5fbm9kZXNDYW1lcmFNYXAuZ2V0KGdsdGZDYW1lcmEpO1xyXG4gICAgICAgICAgICBpZiAodXNlZE5vZGVzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NhbWVyYXMucHVzaChnbHRmQ2FtZXJhKTtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiB1c2VkTm9kZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLmNhbWVyYSA9IHRoaXMuX2NhbWVyYXMubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBCdWlsZHMgYWxsIHNraW5zIGluIHRoZSBza2lucyBhcnJheSBzbyBub2RlcyBjYW4gcmVmZXJlbmNlIGl0IGR1cmluZyBub2RlIHBhcnNpbmcuXHJcbiAgICBwcml2YXRlIF9saXN0QXZhaWxhYmxlU2tlbGV0b25zKCk6IHZvaWQge1xyXG4gICAgICAgIGZvciAoY29uc3Qgc2tlbGV0b24gb2YgdGhpcy5fYmFieWxvblNjZW5lLnNrZWxldG9ucykge1xyXG4gICAgICAgICAgICBpZiAoc2tlbGV0b24uYm9uZXMubGVuZ3RoIDw9IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBza2luOiBJU2tpbiA9IHsgam9pbnRzOiBbXSB9O1xyXG4gICAgICAgICAgICB0aGlzLl9za2luTWFwLnNldChza2VsZXRvbiwgc2tpbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2V4cG9ydEFuZEFzc2lnblNrZWxldG9ucygpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IHNrZWxldG9uIG9mIHRoaXMuX2JhYnlsb25TY2VuZS5za2VsZXRvbnMpIHtcclxuICAgICAgICAgICAgaWYgKHNrZWxldG9uLmJvbmVzLmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2tpbiA9IHRoaXMuX3NraW5NYXAuZ2V0KHNrZWxldG9uKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChza2luID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGJvbmVJbmRleE1hcDogeyBbaW5kZXg6IG51bWJlcl06IEJvbmUgfSA9IHt9O1xyXG4gICAgICAgICAgICBjb25zdCBpbnZlcnNlQmluZE1hdHJpY2VzOiBNYXRyaXhbXSA9IFtdO1xyXG5cclxuICAgICAgICAgICAgbGV0IG1heEJvbmVJbmRleCA9IC0xO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNrZWxldG9uLmJvbmVzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBib25lID0gc2tlbGV0b24uYm9uZXNbaV07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBib25lSW5kZXggPSBib25lLmdldEluZGV4KCkgPz8gaTtcclxuICAgICAgICAgICAgICAgIGlmIChib25lSW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4TWFwW2JvbmVJbmRleF0gPSBib25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChib25lSW5kZXggPiBtYXhCb25lSW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4Qm9uZUluZGV4ID0gYm9uZUluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gU2V0IGpvaW50cyBpbmRleCB0byBzY2VuZSBub2RlLlxyXG4gICAgICAgICAgICBmb3IgKGxldCBib25lSW5kZXggPSAwOyBib25lSW5kZXggPD0gbWF4Qm9uZUluZGV4OyArK2JvbmVJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYm9uZSA9IGJvbmVJbmRleE1hcFtib25lSW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgaW52ZXJzZUJpbmRNYXRyaWNlcy5wdXNoKGJvbmUuZ2V0QWJzb2x1dGVJbnZlcnNlQmluZE1hdHJpeCgpKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zZm9ybU5vZGUgPSBib25lLmdldFRyYW5zZm9ybU5vZGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodHJhbnNmb3JtTm9kZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vZGVJRCA9IHRoaXMuX25vZGVNYXAuZ2V0KHRyYW5zZm9ybU5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0cmFuc2Zvcm1Ob2RlICYmIG5vZGVJRCAhPT0gbnVsbCAmJiBub2RlSUQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBza2luLmpvaW50cy5wdXNoKG5vZGVJRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVG9vbHMuV2FybihcIkV4cG9ydGluZyBhIGJvbmUgd2l0aG91dCBhIGxpbmtlZCB0cmFuc2Zvcm0gbm9kZSBpcyBjdXJyZW50bHkgdW5zdXBwb3J0ZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBUb29scy5XYXJuKFwiRXhwb3J0aW5nIGEgYm9uZSB3aXRob3V0IGEgbGlua2VkIHRyYW5zZm9ybSBub2RlIGlzIGN1cnJlbnRseSB1bnN1cHBvcnRlZFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gTm9kZXMgdGhhdCB1c2UgdGhpcyBza2luLlxyXG4gICAgICAgICAgICBjb25zdCBza2luZWROb2RlcyA9IHRoaXMuX25vZGVzU2tpbk1hcC5nZXQoc2tpbik7XHJcblxyXG4gICAgICAgICAgICAvLyBPbmx5IGNyZWF0ZSBza2VsZXRvbiBpZiBpdCBoYXMgYXQgbGVhc3Qgb25lIGpvaW50IGFuZCBpcyB1c2VkIGJ5IGEgbWVzaC5cclxuICAgICAgICAgICAgaWYgKHNraW4uam9pbnRzLmxlbmd0aCA+IDAgJiYgc2tpbmVkTm9kZXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgLy8gUHV0IElCTSBkYXRhIGludG8gVHlwZWRBcnJheWJ1ZmZlciB2aWV3XHJcbiAgICAgICAgICAgICAgICBjb25zdCBieXRlTGVuZ3RoID0gaW52ZXJzZUJpbmRNYXRyaWNlcy5sZW5ndGggKiA2NDsgLy8gQWx3YXlzIGEgNCB4IDQgbWF0cml4IG9mIDMyIGJpdCBmbG9hdFxyXG4gICAgICAgICAgICAgICAgY29uc3QgaW52ZXJzZUJpbmRNYXRyaWNlc0RhdGEgPSBuZXcgRmxvYXQzMkFycmF5KGJ5dGVMZW5ndGggLyA0KTtcclxuICAgICAgICAgICAgICAgIGludmVyc2VCaW5kTWF0cmljZXMuZm9yRWFjaCgobWF0OiBNYXRyaXgsIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpbnZlcnNlQmluZE1hdHJpY2VzRGF0YS5zZXQobWF0Lm0sIGluZGV4ICogMTYpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgYnVmZmVyIHZpZXcgYW5kIGFjY2Vzc29yXHJcbiAgICAgICAgICAgICAgICBjb25zdCBidWZmZXJWaWV3ID0gdGhpcy5fYnVmZmVyTWFuYWdlci5jcmVhdGVCdWZmZXJWaWV3KGludmVyc2VCaW5kTWF0cmljZXNEYXRhKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2FjY2Vzc29ycy5wdXNoKHRoaXMuX2J1ZmZlck1hbmFnZXIuY3JlYXRlQWNjZXNzb3IoYnVmZmVyVmlldywgQWNjZXNzb3JUeXBlLk1BVDQsIEFjY2Vzc29yQ29tcG9uZW50VHlwZS5GTE9BVCwgaW52ZXJzZUJpbmRNYXRyaWNlcy5sZW5ndGgpKTtcclxuICAgICAgICAgICAgICAgIHNraW4uaW52ZXJzZUJpbmRNYXRyaWNlcyA9IHRoaXMuX2FjY2Vzc29ycy5sZW5ndGggLSAxO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX3NraW5zLnB1c2goc2tpbik7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHNraW5lZE5vZGUgb2Ygc2tpbmVkTm9kZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBza2luZWROb2RlLnNraW4gPSB0aGlzLl9za2lucy5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgX2V4cG9ydFNjZW5lQXN5bmMoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgY29uc3Qgc2NlbmU6IElTY2VuZSA9IHsgbm9kZXM6IFtdIH07XHJcblxyXG4gICAgICAgIC8vIFNjZW5lIG1ldGFkYXRhXHJcbiAgICAgICAgaWYgKHRoaXMuX2JhYnlsb25TY2VuZS5tZXRhZGF0YSkge1xyXG4gICAgICAgICAgICBjb25zdCBleHRyYXMgPSB0aGlzLl9vcHRpb25zLm1ldGFkYXRhU2VsZWN0b3IodGhpcy5fYmFieWxvblNjZW5lLm1ldGFkYXRhKTtcclxuICAgICAgICAgICAgaWYgKGV4dHJhcykge1xyXG4gICAgICAgICAgICAgICAgc2NlbmUuZXh0cmFzID0gZXh0cmFzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAgVE9ETzpcclxuICAgICAgICAvLyAgZGVhbCB3aXRoIHRoaXMgZnJvbSB0aGUgbG9hZGVyOlxyXG4gICAgICAgIC8vICBiYWJ5bG9uTWF0ZXJpYWwuaW52ZXJ0Tm9ybWFsTWFwWCA9ICF0aGlzLl9iYWJ5bG9uU2NlbmUudXNlUmlnaHRIYW5kZWRTeXN0ZW07XHJcbiAgICAgICAgLy8gIGJhYnlsb25NYXRlcmlhbC5pbnZlcnROb3JtYWxNYXBZID0gdGhpcy5fYmFieWxvblNjZW5lLnVzZVJpZ2h0SGFuZGVkU3lzdGVtO1xyXG5cclxuICAgICAgICBjb25zdCByb290Tm9kZXNSSCA9IG5ldyBBcnJheTxOb2RlPigpO1xyXG4gICAgICAgIGNvbnN0IHJvb3ROb2Rlc0xIID0gbmV3IEFycmF5PE5vZGU+KCk7XHJcbiAgICAgICAgY29uc3Qgcm9vdE5vb3BOb2Rlc1JIID0gbmV3IEFycmF5PE5vZGU+KCk7XHJcblxyXG4gICAgICAgIGZvciAoY29uc3Qgcm9vdE5vZGUgb2YgdGhpcy5fYmFieWxvblNjZW5lLnJvb3ROb2Rlcykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fb3B0aW9ucy5yZW1vdmVOb29wUm9vdE5vZGVzICYmICF0aGlzLl9vcHRpb25zLmluY2x1ZGVDb29yZGluYXRlU3lzdGVtQ29udmVyc2lvbk5vZGVzICYmIElzTm9vcE5vZGUocm9vdE5vZGUsIHRoaXMuX2JhYnlsb25TY2VuZS51c2VSaWdodEhhbmRlZFN5c3RlbSkpIHtcclxuICAgICAgICAgICAgICAgIHJvb3ROb29wTm9kZXNSSC5wdXNoKC4uLnJvb3ROb2RlLmdldENoaWxkcmVuKCkpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JhYnlsb25TY2VuZS51c2VSaWdodEhhbmRlZFN5c3RlbSkge1xyXG4gICAgICAgICAgICAgICAgcm9vdE5vZGVzUkgucHVzaChyb290Tm9kZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByb290Tm9kZXNMSC5wdXNoKHJvb3ROb2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fbGlzdEF2YWlsYWJsZUNhbWVyYXMoKTtcclxuICAgICAgICB0aGlzLl9saXN0QXZhaWxhYmxlU2tlbGV0b25zKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHN0YXRlTEggPSBuZXcgRXhwb3J0ZXJTdGF0ZSh0cnVlLCBmYWxzZSk7XHJcbiAgICAgICAgc2NlbmUubm9kZXMucHVzaCguLi4oYXdhaXQgdGhpcy5fZXhwb3J0Tm9kZXNBc3luYyhyb290Tm9kZXNMSCwgc3RhdGVMSCkpKTtcclxuICAgICAgICBjb25zdCBzdGF0ZVJIID0gbmV3IEV4cG9ydGVyU3RhdGUoZmFsc2UsIGZhbHNlKTtcclxuICAgICAgICBzY2VuZS5ub2Rlcy5wdXNoKC4uLihhd2FpdCB0aGlzLl9leHBvcnROb2Rlc0FzeW5jKHJvb3ROb2Rlc1JILCBzdGF0ZVJIKSkpO1xyXG4gICAgICAgIGNvbnN0IG5vb3BSSCA9IG5ldyBFeHBvcnRlclN0YXRlKGZhbHNlLCB0cnVlKTtcclxuICAgICAgICBzY2VuZS5ub2Rlcy5wdXNoKC4uLihhd2FpdCB0aGlzLl9leHBvcnROb2Rlc0FzeW5jKHJvb3ROb29wTm9kZXNSSCwgbm9vcFJIKSkpO1xyXG5cclxuICAgICAgICBpZiAoc2NlbmUubm9kZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NjZW5lcy5wdXNoKHNjZW5lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2V4cG9ydEFuZEFzc2lnbkNhbWVyYXMoKTtcclxuICAgICAgICB0aGlzLl9leHBvcnRBbmRBc3NpZ25Ta2VsZXRvbnMoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2JhYnlsb25TY2VuZS5hbmltYXRpb25Hcm91cHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIF9HTFRGQW5pbWF0aW9uLl9DcmVhdGVOb2RlQW5kTW9ycGhBbmltYXRpb25Gcm9tQW5pbWF0aW9uR3JvdXBzKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fYmFieWxvblNjZW5lLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fYW5pbWF0aW9ucyxcclxuICAgICAgICAgICAgICAgIHRoaXMuX25vZGVNYXAsXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9idWZmZXJNYW5hZ2VyLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fYnVmZmVyVmlld3MsXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hY2Nlc3NvcnMsXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hbmltYXRpb25TYW1wbGVSYXRlLFxyXG4gICAgICAgICAgICAgICAgc3RhdGVMSC5nZXROb2Rlc1NldCgpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fb3B0aW9ucy5zaG91bGRFeHBvcnRBbmltYXRpb25cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfc2hvdWxkRXhwb3J0Tm9kZShiYWJ5bG9uTm9kZTogTm9kZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSB0aGlzLl9zaG91bGRFeHBvcnROb2RlTWFwLmdldChiYWJ5bG9uTm9kZSk7XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLl9vcHRpb25zLnNob3VsZEV4cG9ydE5vZGUoYmFieWxvbk5vZGUpO1xyXG4gICAgICAgICAgICB0aGlzLl9zaG91bGRFeHBvcnROb2RlTWFwLnNldChiYWJ5bG9uTm9kZSwgcmVzdWx0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBfZXhwb3J0Tm9kZXNBc3luYyhiYWJ5bG9uUm9vdE5vZGVzOiBOb2RlW10sIHN0YXRlOiBFeHBvcnRlclN0YXRlKTogUHJvbWlzZTxudW1iZXJbXT4ge1xyXG4gICAgICAgIGNvbnN0IG5vZGVzID0gbmV3IEFycmF5PG51bWJlcj4oKTtcclxuXHJcbiAgICAgICAgdGhpcy5fZXhwb3J0QnVmZmVycyhiYWJ5bG9uUm9vdE5vZGVzLCBzdGF0ZSk7XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgYmFieWxvbk5vZGUgb2YgYmFieWxvblJvb3ROb2Rlcykge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLl9leHBvcnROb2RlQXN5bmMoYmFieWxvbk5vZGUsIG5vZGVzLCBzdGF0ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbm9kZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY29sbGVjdEJ1ZmZlcnMoXHJcbiAgICAgICAgYmFieWxvbk5vZGU6IE5vZGUsXHJcbiAgICAgICAgYnVmZmVyVG9WZXJ0ZXhCdWZmZXJzTWFwOiBNYXA8QnVmZmVyLCBWZXJ0ZXhCdWZmZXJbXT4sXHJcbiAgICAgICAgdmVydGV4QnVmZmVyVG9NZXNoZXNNYXA6IE1hcDxWZXJ0ZXhCdWZmZXIsIEFic3RyYWN0TWVzaFtdPixcclxuICAgICAgICBtb3JwaFRhcmdldHNUb01lc2hlc01hcDogTWFwPE1vcnBoVGFyZ2V0LCBBYnN0cmFjdE1lc2hbXT4sXHJcbiAgICAgICAgc3RhdGU6IEV4cG9ydGVyU3RhdGVcclxuICAgICk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl9zaG91bGRFeHBvcnROb2RlKGJhYnlsb25Ob2RlKSAmJiBiYWJ5bG9uTm9kZSBpbnN0YW5jZW9mIEFic3RyYWN0TWVzaCAmJiBiYWJ5bG9uTm9kZS5nZW9tZXRyeSkge1xyXG4gICAgICAgICAgICBjb25zdCB2ZXJ0ZXhCdWZmZXJzID0gYmFieWxvbk5vZGUuZ2VvbWV0cnkuZ2V0VmVydGV4QnVmZmVycygpO1xyXG4gICAgICAgICAgICBpZiAodmVydGV4QnVmZmVycykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBraW5kIGluIHZlcnRleEJ1ZmZlcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIUlzU3RhbmRhcmRWZXJ0ZXhBdHRyaWJ1dGUoa2luZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZlcnRleEJ1ZmZlciA9IHZlcnRleEJ1ZmZlcnNba2luZF07XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuc2V0SGFzVmVydGV4Q29sb3JBbHBoYSh2ZXJ0ZXhCdWZmZXIsIGJhYnlsb25Ob2RlLmhhc1ZlcnRleEFscGhhKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBidWZmZXIgPSB2ZXJ0ZXhCdWZmZXIuX2J1ZmZlcjtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2ZXJ0ZXhCdWZmZXJBcnJheSA9IGJ1ZmZlclRvVmVydGV4QnVmZmVyc01hcC5nZXQoYnVmZmVyKSB8fCBbXTtcclxuICAgICAgICAgICAgICAgICAgICBidWZmZXJUb1ZlcnRleEJ1ZmZlcnNNYXAuc2V0KGJ1ZmZlciwgdmVydGV4QnVmZmVyQXJyYXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2ZXJ0ZXhCdWZmZXJBcnJheS5pbmRleE9mKHZlcnRleEJ1ZmZlcikgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRleEJ1ZmZlckFycmF5LnB1c2godmVydGV4QnVmZmVyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc2hlcyA9IHZlcnRleEJ1ZmZlclRvTWVzaGVzTWFwLmdldCh2ZXJ0ZXhCdWZmZXIpIHx8IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRleEJ1ZmZlclRvTWVzaGVzTWFwLnNldCh2ZXJ0ZXhCdWZmZXIsIG1lc2hlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1lc2hlcy5pbmRleE9mKGJhYnlsb25Ob2RlKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzaGVzLnB1c2goYmFieWxvbk5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgbW9ycGhUYXJnZXRNYW5hZ2VyID0gYmFieWxvbk5vZGUubW9ycGhUYXJnZXRNYW5hZ2VyO1xyXG5cclxuICAgICAgICAgICAgaWYgKG1vcnBoVGFyZ2V0TWFuYWdlcikge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgbW9ycGhJbmRleCA9IDA7IG1vcnBoSW5kZXggPCBtb3JwaFRhcmdldE1hbmFnZXIubnVtVGFyZ2V0czsgbW9ycGhJbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9ycGhUYXJnZXQgPSBtb3JwaFRhcmdldE1hbmFnZXIuZ2V0VGFyZ2V0KG1vcnBoSW5kZXgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXNoZXMgPSBtb3JwaFRhcmdldHNUb01lc2hlc01hcC5nZXQobW9ycGhUYXJnZXQpIHx8IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIG1vcnBoVGFyZ2V0c1RvTWVzaGVzTWFwLnNldChtb3JwaFRhcmdldCwgbWVzaGVzKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobWVzaGVzLmluZGV4T2YoYmFieWxvbk5vZGUpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNoZXMucHVzaChiYWJ5bG9uTm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGJhYnlsb25DaGlsZE5vZGUgb2YgYmFieWxvbk5vZGUuZ2V0Q2hpbGRyZW4oKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9jb2xsZWN0QnVmZmVycyhiYWJ5bG9uQ2hpbGROb2RlLCBidWZmZXJUb1ZlcnRleEJ1ZmZlcnNNYXAsIHZlcnRleEJ1ZmZlclRvTWVzaGVzTWFwLCBtb3JwaFRhcmdldHNUb01lc2hlc01hcCwgc3RhdGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9leHBvcnRCdWZmZXJzKGJhYnlsb25Sb290Tm9kZXM6IE5vZGVbXSwgc3RhdGU6IEV4cG9ydGVyU3RhdGUpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBidWZmZXJUb1ZlcnRleEJ1ZmZlcnNNYXAgPSBuZXcgTWFwPEJ1ZmZlciwgVmVydGV4QnVmZmVyW10+KCk7XHJcbiAgICAgICAgY29uc3QgdmVydGV4QnVmZmVyVG9NZXNoZXNNYXAgPSBuZXcgTWFwPFZlcnRleEJ1ZmZlciwgQWJzdHJhY3RNZXNoW10+KCk7XHJcbiAgICAgICAgY29uc3QgbW9ycGhUYXJnZXRzTWVzaGVzTWFwID0gbmV3IE1hcDxNb3JwaFRhcmdldCwgQWJzdHJhY3RNZXNoW10+KCk7XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgYmFieWxvbk5vZGUgb2YgYmFieWxvblJvb3ROb2Rlcykge1xyXG4gICAgICAgICAgICB0aGlzLl9jb2xsZWN0QnVmZmVycyhiYWJ5bG9uTm9kZSwgYnVmZmVyVG9WZXJ0ZXhCdWZmZXJzTWFwLCB2ZXJ0ZXhCdWZmZXJUb01lc2hlc01hcCwgbW9ycGhUYXJnZXRzTWVzaGVzTWFwLCBzdGF0ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBidWZmZXJzID0gQXJyYXkuZnJvbShidWZmZXJUb1ZlcnRleEJ1ZmZlcnNNYXAua2V5cygpKTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBidWZmZXIgb2YgYnVmZmVycykge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYnVmZmVyLmdldERhdGEoKTtcclxuICAgICAgICAgICAgaWYgKCFkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJCdWZmZXIgZGF0YSBpcyBub3QgYXZhaWxhYmxlXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCB2ZXJ0ZXhCdWZmZXJzID0gYnVmZmVyVG9WZXJ0ZXhCdWZmZXJzTWFwLmdldChidWZmZXIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCF2ZXJ0ZXhCdWZmZXJzKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgYnl0ZVN0cmlkZSA9IHZlcnRleEJ1ZmZlcnNbMF0uYnl0ZVN0cmlkZTtcclxuICAgICAgICAgICAgaWYgKHZlcnRleEJ1ZmZlcnMuc29tZSgodmVydGV4QnVmZmVyKSA9PiB2ZXJ0ZXhCdWZmZXIuYnl0ZVN0cmlkZSAhPT0gYnl0ZVN0cmlkZSkpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlZlcnRleCBidWZmZXJzIHBvaW50aW5nIHRvIHRoZSBzYW1lIGJ1ZmZlciBtdXN0IGhhdmUgdGhlIHNhbWUgYnl0ZSBzdHJpZGVcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGJ5dGVzID0gRGF0YUFycmF5VG9VaW50OEFycmF5KGRhdGEpLnNsaWNlKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBBcHBseSBub3JtYWxpemF0aW9ucyBhbmQgY29sb3IgY29ycmVjdGlvbnMgdG8gYnVmZmVyIGRhdGEgaW4tcGxhY2UuXHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgdmVydGV4QnVmZmVyIG9mIHZlcnRleEJ1ZmZlcnMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1lc2hlcyA9IHZlcnRleEJ1ZmZlclRvTWVzaGVzTWFwLmdldCh2ZXJ0ZXhCdWZmZXIpITtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgYnl0ZU9mZnNldCwgYnl0ZVN0cmlkZSwgY29tcG9uZW50Q291bnQsIHR5cGUsIGNvdW50LCBub3JtYWxpemVkLCBraW5kIH0gPSBHZXRWZXJ0ZXhCdWZmZXJJbmZvKHZlcnRleEJ1ZmZlciwgbWVzaGVzKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGtpbmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBOb3JtYWxpemUgbm9ybWFscyBhbmQgdGFuZ2VudHMuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuTm9ybWFsS2luZDpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5UYW5nZW50S2luZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBFbnVtZXJhdGVGbG9hdFZhbHVlcyhieXRlcywgYnl0ZU9mZnNldCwgYnl0ZVN0cmlkZSwgY29tcG9uZW50Q291bnQsIHR5cGUsIGNvdW50LCBub3JtYWxpemVkLCAodmFsdWVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsZW5ndGggPSBNYXRoLnNxcnQodmFsdWVzWzBdICogdmFsdWVzWzBdICsgdmFsdWVzWzFdICogdmFsdWVzWzFdICsgdmFsdWVzWzJdICogdmFsdWVzWzJdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW52TGVuZ3RoID0gMSAvIGxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXNbMF0gKj0gaW52TGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlc1sxXSAqPSBpbnZMZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzWzJdICo9IGludkxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBDb252ZXJ0IFN0YW5kYXJkTWF0ZXJpYWwgdmVydGV4IGNvbG9ycyBmcm9tIGdhbW1hIHRvIGxpbmVhciBzcGFjZS5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5Db2xvcktpbmQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RkTWF0ZXJpYWxDb3VudCA9IG1lc2hlcy5maWx0ZXIoKG1lc2gpID0+IG1lc2gubWF0ZXJpYWwgaW5zdGFuY2VvZiBTdGFuZGFyZE1hdGVyaWFsIHx8IG1lc2gubWF0ZXJpYWwgPT0gbnVsbCkubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RkTWF0ZXJpYWxDb3VudCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhazsgLy8gQnVmZmVyIG5vdCB1c2VkIGJ5IFN0YW5kYXJkTWF0ZXJpYWxzLCBzbyBubyBjb252ZXJzaW9uIG5lZWRlZC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBJbXBsZW1lbnQgdGhpcyBjYXNlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RkTWF0ZXJpYWxDb3VudCAhPSBtZXNoZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dnZXIuV2FybihcIk5vdCBjb252ZXJ0aW5nIHZlcnRleCBjb2xvciBzcGFjZSwgYXMgYnVmZmVyIGlzIHNoYXJlZCBieSBTdGFuZGFyZE1hdGVyaWFscyBhbmQgb3RoZXIgbWF0ZXJpYWwgdHlwZXMuIFJlc3VsdHMgbWF5IGxvb2sgaW5jb3JyZWN0LlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09IFZlcnRleEJ1ZmZlci5VTlNJR05FRF9CWVRFKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dnZXIuV2FybihcIkNvbnZlcnRpbmcgdWludDggdmVydGV4IGNvbG9ycyB0byBsaW5lYXIgc3BhY2UuIFJlc3VsdHMgbWF5IGxvb2sgaW5jb3JyZWN0LlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmVydGV4RGF0YTMgPSBuZXcgQ29sb3IzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZlcnRleERhdGE0ID0gbmV3IENvbG9yNCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1c2VFeGFjdFNyZ2JDb252ZXJzaW9ucyA9IHRoaXMuX2JhYnlsb25TY2VuZS5nZXRFbmdpbmUoKS51c2VFeGFjdFNyZ2JDb252ZXJzaW9ucztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEVudW1lcmF0ZUZsb2F0VmFsdWVzKGJ5dGVzLCBieXRlT2Zmc2V0LCBieXRlU3RyaWRlLCBjb21wb25lbnRDb3VudCwgdHlwZSwgY291bnQsIG5vcm1hbGl6ZWQsICh2YWx1ZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVzaW5nIHNlcGFyYXRlIENvbG9yMyBhbmQgQ29sb3I0IG9iamVjdHMgdG8gZW5zdXJlIHRoZSByaWdodCBmdW5jdGlvbnMgYXJlIGNhbGxlZC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZXMubGVuZ3RoID09PSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGV4RGF0YTMuZnJvbUFycmF5KHZhbHVlcywgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGV4RGF0YTMudG9MaW5lYXJTcGFjZVRvUmVmKHZlcnRleERhdGEzLCB1c2VFeGFjdFNyZ2JDb252ZXJzaW9ucyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGV4RGF0YTMudG9BcnJheSh2YWx1ZXMsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0ZXhEYXRhNC5mcm9tQXJyYXkodmFsdWVzLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0ZXhEYXRhNC50b0xpbmVhclNwYWNlVG9SZWYodmVydGV4RGF0YTQsIHVzZUV4YWN0U3JnYkNvbnZlcnNpb25zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0ZXhEYXRhNC50b0FycmF5KHZhbHVlcywgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gUGVyZm9ybSBjb29yZGluYXRlIGNvbnZlcnNpb25zLCBpZiBuZWVkZWQsIHRvIGJ1ZmZlciBkYXRhIGluLXBsYWNlIChvbmx5IGZvciBwb3NpdGlvbnMsIG5vcm1hbHMgYW5kIHRhbmdlbnRzKS5cclxuICAgICAgICAgICAgaWYgKHN0YXRlLmNvbnZlcnRUb1JpZ2h0SGFuZGVkKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHZlcnRleEJ1ZmZlciBvZiB2ZXJ0ZXhCdWZmZXJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVzaGVzID0gdmVydGV4QnVmZmVyVG9NZXNoZXNNYXAuZ2V0KHZlcnRleEJ1ZmZlcikhO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgYnl0ZU9mZnNldCwgYnl0ZVN0cmlkZSwgY29tcG9uZW50Q291bnQsIHR5cGUsIGNvdW50LCBub3JtYWxpemVkLCBraW5kIH0gPSBHZXRWZXJ0ZXhCdWZmZXJJbmZvKHZlcnRleEJ1ZmZlciwgbWVzaGVzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChraW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLlBvc2l0aW9uS2luZDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuTm9ybWFsS2luZDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuVGFuZ2VudEtpbmQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVudW1lcmF0ZUZsb2F0VmFsdWVzKGJ5dGVzLCBieXRlT2Zmc2V0LCBieXRlU3RyaWRlLCBjb21wb25lbnRDb3VudCwgdHlwZSwgY291bnQsIG5vcm1hbGl6ZWQsICh2YWx1ZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXNbMF0gPSAtdmFsdWVzWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gU2F2ZSBjb252ZXJ0ZWQgYnl0ZXMgZm9yIG1pbi9tYXggY29tcHV0YXRpb24uXHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5jb252ZXJ0ZWRUb1JpZ2h0SGFuZGVkQnVmZmVycy5zZXQoYnVmZmVyLCBieXRlcyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSBidWZmZXIgdmlldywgYnV0IGRlZmVyIGFjY2Vzc29yIGNyZWF0aW9uIGZvciBsYXRlci4gSW5zdGVhZCwgdHJhY2sgaXQgdmlhIEV4cG9ydGVyU3RhdGUuXHJcbiAgICAgICAgICAgIGNvbnN0IGJ1ZmZlclZpZXcgPSB0aGlzLl9idWZmZXJNYW5hZ2VyLmNyZWF0ZUJ1ZmZlclZpZXcoYnl0ZXMsIGJ5dGVTdHJpZGUpO1xyXG4gICAgICAgICAgICBzdGF0ZS5zZXRWZXJ0ZXhCdWZmZXJWaWV3KGJ1ZmZlciwgYnVmZmVyVmlldyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBmbG9hdE1hdHJpY2VzSW5kaWNlcyA9IG5ldyBNYXA8VmVydGV4QnVmZmVyLCBGbG9hdEFycmF5PigpO1xyXG5cclxuICAgICAgICAgICAgLy8gSWYgYnVmZmVycyBhcmUgb2YgdHlwZSBNYXRyaWNlc0luZGljZXNLaW5kIGFuZCBoYXZlIGZsb2F0IHZhbHVlcywgd2UgbmVlZCB0byBjcmVhdGUgYSBuZXcgYnVmZmVyIGluc3RlYWQuXHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgdmVydGV4QnVmZmVyIG9mIHZlcnRleEJ1ZmZlcnMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1lc2hlcyA9IHZlcnRleEJ1ZmZlclRvTWVzaGVzTWFwLmdldCh2ZXJ0ZXhCdWZmZXIpITtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsga2luZCwgdG90YWxWZXJ0aWNlcyB9ID0gR2V0VmVydGV4QnVmZmVySW5mbyh2ZXJ0ZXhCdWZmZXIsIG1lc2hlcyk7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGtpbmQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5NYXRyaWNlc0luZGljZXNLaW5kOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLk1hdHJpY2VzSW5kaWNlc0V4dHJhS2luZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmVydGV4QnVmZmVyLnR5cGUgPT0gVmVydGV4QnVmZmVyLkZMT0FUKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmbG9hdERhdGEgPSB2ZXJ0ZXhCdWZmZXIuZ2V0RmxvYXREYXRhKHRvdGFsVmVydGljZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZsb2F0RGF0YSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0TWF0cmljZXNJbmRpY2VzLnNldCh2ZXJ0ZXhCdWZmZXIsIGZsb2F0RGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChmbG9hdE1hdHJpY2VzSW5kaWNlcy5zaXplICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBMb2dnZXIuV2FybihcclxuICAgICAgICAgICAgICAgICAgICBgSm9pbnRzIGNvbnZlcnNpb24gbmVlZGVkOiBzb21lIGpvaW50cyBhcmUgc3RvcmVkIGFzIGZsb2F0cyBpbiBCYWJ5bG9uIGJ1dCBHTFRGIHJlcXVpcmVzIFVOU0lHTkVEIEJZVEVTLiBXZSB3aWxsIHBlcmZvcm0gdGhlIGNvbnZlcnNpb24gYnV0IHRoaXMgbWlnaHQgbGVhZCB0byB1bnVzZWQgZGF0YSBpbiB0aGUgYnVmZmVyLmBcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGZsb2F0QXJyYXlWZXJ0ZXhCdWZmZXJzID0gQXJyYXkuZnJvbShmbG9hdE1hdHJpY2VzSW5kaWNlcy5rZXlzKCkpO1xyXG5cclxuICAgICAgICAgICAgZm9yIChjb25zdCB2ZXJ0ZXhCdWZmZXIgb2YgZmxvYXRBcnJheVZlcnRleEJ1ZmZlcnMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFycmF5ID0gZmxvYXRNYXRyaWNlc0luZGljZXMuZ2V0KHZlcnRleEJ1ZmZlcik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFhcnJheSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzMTZCaXQgPSBGbG9hdHNOZWVkMTZCaXRJbnRlZ2VyKGFycmF5KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0FycmF5ID0gbmV3IChpczE2Qml0ID8gVWludDE2QXJyYXkgOiBVaW50OEFycmF5KShhcnJheS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0FycmF5W2luZGV4XSA9IGFycmF5W2luZGV4XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IGJ1ZmZlclZpZXcgPSB0aGlzLl9idWZmZXJNYW5hZ2VyLmNyZWF0ZUJ1ZmZlclZpZXcobmV3QXJyYXksIDQgKiAoaXMxNkJpdCA/IDIgOiAxKSk7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5zZXRSZW1hcHBlZEJ1ZmZlclZpZXcoYnVmZmVyLCB2ZXJ0ZXhCdWZmZXIsIGJ1ZmZlclZpZXcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBCdWlsZCBtb3JwaCB0YXJnZXRzIGJ1ZmZlcnNcclxuICAgICAgICBjb25zdCBtb3JwaFRhcmdldHMgPSBBcnJheS5mcm9tKG1vcnBoVGFyZ2V0c01lc2hlc01hcC5rZXlzKCkpO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IG1vcnBoVGFyZ2V0IG9mIG1vcnBoVGFyZ2V0cykge1xyXG4gICAgICAgICAgICBjb25zdCBtZXNoZXMgPSBtb3JwaFRhcmdldHNNZXNoZXNNYXAuZ2V0KG1vcnBoVGFyZ2V0KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghbWVzaGVzKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgZ2xURk1vcnBoVGFyZ2V0ID0gQnVpbGRNb3JwaFRhcmdldEJ1ZmZlcnMobW9ycGhUYXJnZXQsIG1lc2hlc1swXSwgdGhpcy5fYnVmZmVyTWFuYWdlciwgdGhpcy5fYnVmZmVyVmlld3MsIHRoaXMuX2FjY2Vzc29ycywgc3RhdGUuY29udmVydFRvUmlnaHRIYW5kZWQpO1xyXG5cclxuICAgICAgICAgICAgZm9yIChjb25zdCBtZXNoIG9mIG1lc2hlcykge1xyXG4gICAgICAgICAgICAgICAgc3RhdGUuYmluZE1vcnBoRGF0YVRvTWVzaChtZXNoLCBnbFRGTW9ycGhUYXJnZXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUHJvY2Vzc2VzIGEgbm9kZSB0byBiZSBleHBvcnRlZCB0byB0aGUgZ2xURiBmaWxlXHJcbiAgICAgKiBAcmV0dXJucyBBIHByb21pc2UgdGhhdCByZXNvbHZlcyBvbmNlIHRoZSBub2RlIGhhcyBiZWVuIGV4cG9ydGVkXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBhc3luYyBfZXhwb3J0Tm9kZUFzeW5jKGJhYnlsb25Ob2RlOiBOb2RlLCBwYXJlbnROb2RlQ2hpbGRyZW46IEFycmF5PG51bWJlcj4sIHN0YXRlOiBFeHBvcnRlclN0YXRlKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgbGV0IG5vZGVJbmRleCA9IHRoaXMuX25vZGVNYXAuZ2V0KGJhYnlsb25Ob2RlKTtcclxuICAgICAgICBpZiAobm9kZUluZGV4ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaWYgKCFwYXJlbnROb2RlQ2hpbGRyZW4uaW5jbHVkZXMobm9kZUluZGV4KSkge1xyXG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZUNoaWxkcmVuLnB1c2gobm9kZUluZGV4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBub2RlID0gYXdhaXQgdGhpcy5fY3JlYXRlTm9kZUFzeW5jKGJhYnlsb25Ob2RlLCBzdGF0ZSk7XHJcblxyXG4gICAgICAgIGlmIChub2RlKSB7XHJcbiAgICAgICAgICAgIG5vZGVJbmRleCA9IHRoaXMuX25vZGVzLmxlbmd0aDtcclxuICAgICAgICAgICAgdGhpcy5fbm9kZXMucHVzaChub2RlKTtcclxuICAgICAgICAgICAgdGhpcy5fbm9kZU1hcC5zZXQoYmFieWxvbk5vZGUsIG5vZGVJbmRleCk7XHJcbiAgICAgICAgICAgIHN0YXRlLnB1c2hFeHBvcnRlZE5vZGUoYmFieWxvbk5vZGUpO1xyXG4gICAgICAgICAgICBwYXJlbnROb2RlQ2hpbGRyZW4ucHVzaChub2RlSW5kZXgpO1xyXG5cclxuICAgICAgICAgICAgLy8gUHJvY2VzcyBub2RlJ3MgYW5pbWF0aW9ucyBvbmNlIHRoZSBub2RlIGhhcyBiZWVuIGFkZGVkIHRvIG5vZGVNYXAgKFRPRE86IFRoaXMgc2hvdWxkIGJlIHJlZmFjdG9yZWQpXHJcbiAgICAgICAgICAgIGNvbnN0IHJ1bnRpbWVHTFRGQW5pbWF0aW9uOiBJQW5pbWF0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJydW50aW1lIGFuaW1hdGlvbnNcIixcclxuICAgICAgICAgICAgICAgIGNoYW5uZWxzOiBbXSxcclxuICAgICAgICAgICAgICAgIHNhbXBsZXJzOiBbXSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc3QgaWRsZUdMVEZBbmltYXRpb25zOiBJQW5pbWF0aW9uW10gPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5fYmFieWxvblNjZW5lLmFuaW1hdGlvbkdyb3Vwcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIF9HTFRGQW5pbWF0aW9uLl9DcmVhdGVNb3JwaFRhcmdldEFuaW1hdGlvbkZyb21Nb3JwaFRhcmdldEFuaW1hdGlvbnMoXHJcbiAgICAgICAgICAgICAgICAgICAgYmFieWxvbk5vZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVudGltZUdMVEZBbmltYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgaWRsZUdMVEZBbmltYXRpb25zLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX25vZGVNYXAsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbm9kZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYnVmZmVyTWFuYWdlcixcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9idWZmZXJWaWV3cyxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9hY2Nlc3NvcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYW5pbWF0aW9uU2FtcGxlUmF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5jb252ZXJ0VG9SaWdodEhhbmRlZCxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9vcHRpb25zLnNob3VsZEV4cG9ydEFuaW1hdGlvblxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGlmIChiYWJ5bG9uTm9kZS5hbmltYXRpb25zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIF9HTFRGQW5pbWF0aW9uLl9DcmVhdGVOb2RlQW5pbWF0aW9uRnJvbU5vZGVBbmltYXRpb25zKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uTm9kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcnVudGltZUdMVEZBbmltYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkbGVHTFRGQW5pbWF0aW9ucyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbm9kZU1hcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbm9kZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2J1ZmZlck1hbmFnZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2J1ZmZlclZpZXdzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9hY2Nlc3NvcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2FuaW1hdGlvblNhbXBsZVJhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLmNvbnZlcnRUb1JpZ2h0SGFuZGVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9vcHRpb25zLnNob3VsZEV4cG9ydEFuaW1hdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChydW50aW1lR0xURkFuaW1hdGlvbi5jaGFubmVscy5sZW5ndGggJiYgcnVudGltZUdMVEZBbmltYXRpb24uc2FtcGxlcnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hbmltYXRpb25zLnB1c2gocnVudGltZUdMVEZBbmltYXRpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlkbGVHTFRGQW5pbWF0aW9ucy5mb3JFYWNoKChpZGxlR0xURkFuaW1hdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlkbGVHTFRGQW5pbWF0aW9uLmNoYW5uZWxzLmxlbmd0aCAmJiBpZGxlR0xURkFuaW1hdGlvbi5zYW1wbGVycy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9hbmltYXRpb25zLnB1c2goaWRsZUdMVEZBbmltYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEJlZ2luIHByb2Nlc3NpbmcgY2hpbGQgbm9kZXMgb25jZSBwYXJlbnQgaGFzIGJlZW4gYWRkZWQgdG8gdGhlIG5vZGUgbGlzdFxyXG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gbm9kZSA/IFtdIDogcGFyZW50Tm9kZUNoaWxkcmVuO1xyXG4gICAgICAgIGZvciAoY29uc3QgYmFieWxvbkNoaWxkTm9kZSBvZiBiYWJ5bG9uTm9kZS5nZXRDaGlsZHJlbigpKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuX2V4cG9ydE5vZGVBc3luYyhiYWJ5bG9uQ2hpbGROb2RlLCBjaGlsZHJlbiwgc3RhdGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG5vZGUgJiYgY2hpbGRyZW4ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIG5vZGUuY2hpbGRyZW4gPSBjaGlsZHJlbjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgZ2xURiBub2RlIGZyb20gYSBCYWJ5bG9uLmpzIG5vZGUuIElmIHNraXBwZWQsIHJldHVybnMgbnVsbC5cclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGFzeW5jIF9jcmVhdGVOb2RlQXN5bmMoYmFieWxvbk5vZGU6IE5vZGUsIHN0YXRlOiBFeHBvcnRlclN0YXRlKTogUHJvbWlzZTxOdWxsYWJsZTxJTm9kZT4+IHtcclxuICAgICAgICBpZiAoIXRoaXMuX3Nob3VsZEV4cG9ydE5vZGUoYmFieWxvbk5vZGUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgbm9kZTogSU5vZGUgPSB7fTtcclxuXHJcbiAgICAgICAgaWYgKGJhYnlsb25Ob2RlLm5hbWUpIHtcclxuICAgICAgICAgICAgbm9kZS5uYW1lID0gYmFieWxvbk5vZGUubmFtZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIE5vZGUgbWV0YWRhdGFcclxuICAgICAgICBpZiAoYmFieWxvbk5vZGUubWV0YWRhdGEpIHtcclxuICAgICAgICAgICAgY29uc3QgZXh0cmFzID0gdGhpcy5fb3B0aW9ucy5tZXRhZGF0YVNlbGVjdG9yKGJhYnlsb25Ob2RlLm1ldGFkYXRhKTtcclxuICAgICAgICAgICAgaWYgKGV4dHJhcykge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5leHRyYXMgPSBleHRyYXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChiYWJ5bG9uTm9kZSBpbnN0YW5jZW9mIFRyYW5zZm9ybU5vZGUpIHtcclxuICAgICAgICAgICAgdGhpcy5fc2V0Tm9kZVRyYW5zZm9ybWF0aW9uKG5vZGUsIGJhYnlsb25Ob2RlLCBzdGF0ZS5jb252ZXJ0VG9SaWdodEhhbmRlZCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoYmFieWxvbk5vZGUgaW5zdGFuY2VvZiBBYnN0cmFjdE1lc2gpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJhYnlsb25NZXNoID0gYmFieWxvbk5vZGUgaW5zdGFuY2VvZiBJbnN0YW5jZWRNZXNoID8gYmFieWxvbk5vZGUuc291cmNlTWVzaCA6IChiYWJ5bG9uTm9kZSBhcyBNZXNoKTtcclxuICAgICAgICAgICAgICAgIGlmIChiYWJ5bG9uTWVzaC5zdWJNZXNoZXMgJiYgYmFieWxvbk1lc2guc3ViTWVzaGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLm1lc2ggPSBhd2FpdCB0aGlzLl9leHBvcnRNZXNoQXN5bmMoYmFieWxvbk1lc2gsIHN0YXRlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYmFieWxvbk5vZGUuc2tlbGV0b24pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBza2luID0gdGhpcy5fc2tpbk1hcC5nZXQoYmFieWxvbk5vZGUuc2tlbGV0b24pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2tpbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9ub2Rlc1NraW5NYXAuZ2V0KHNraW4pID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX25vZGVzU2tpbk1hcC5zZXQoc2tpbiwgW10pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9ub2Rlc1NraW5NYXAuZ2V0KHNraW4pPy5wdXNoKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGJhYnlsb25Ob2RlIGluc3RhbmNlb2YgQ2FtZXJhKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdsdGZDYW1lcmEgPSB0aGlzLl9jYW1lcmFzTWFwLmdldChiYWJ5bG9uTm9kZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZ2x0ZkNhbWVyYSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX25vZGVzQ2FtZXJhTWFwLmdldChnbHRmQ2FtZXJhKSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbm9kZXNDYW1lcmFNYXAuc2V0KGdsdGZDYW1lcmEsIFtdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnRCYWJ5bG9uTm9kZSA9IGJhYnlsb25Ob2RlLnBhcmVudDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NldENhbWVyYVRyYW5zZm9ybWF0aW9uKG5vZGUsIGJhYnlsb25Ob2RlLCBzdGF0ZS5jb252ZXJ0VG9SaWdodEhhbmRlZCwgcGFyZW50QmFieWxvbk5vZGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIElmIGEgY2FtZXJhIGhhcyBhIG5vZGUgdGhhdCB3YXMgYWRkZWQgYnkgdGhlIEdMVEYgaW1wb3J0ZXIsIHdlIGNhbiBqdXN0IHVzZSB0aGUgcGFyZW50IG5vZGUgdHJhbnNmb3JtIGFzIHRoZSBcImNhbWVyYVwiIHRyYW5zZm9ybS5cclxuICAgICAgICAgICAgICAgIGlmIChwYXJlbnRCYWJ5bG9uTm9kZSAmJiBJc1BhcmVudEFkZGVkQnlJbXBvcnRlcihiYWJ5bG9uTm9kZSwgcGFyZW50QmFieWxvbk5vZGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyZW50Tm9kZUluZGV4ID0gdGhpcy5fbm9kZU1hcC5nZXQocGFyZW50QmFieWxvbk5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJlbnROb2RlSW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyZW50Tm9kZSA9IHRoaXMuX25vZGVzW3BhcmVudE5vZGVJbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX25vZGVzQ2FtZXJhTWFwLmdldChnbHRmQ2FtZXJhKT8ucHVzaChwYXJlbnROb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7IC8vIFNraXAgZXhwb3J0aW5nIHRoaXMgbm9kZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5jb252ZXJ0VG9SaWdodEhhbmRlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIENvbnZlcnRUb1JpZ2h0SGFuZGVkTm9kZShub2RlKTtcclxuICAgICAgICAgICAgICAgICAgICBSb3RhdGVOb2RlMTgwWShub2RlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuX25vZGVzQ2FtZXJhTWFwLmdldChnbHRmQ2FtZXJhKT8ucHVzaChub2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQXBwbHkgZXh0ZW5zaW9ucyB0byB0aGUgbm9kZS4gSWYgdGhpcyByZXNvbHZlcyB0byBudWxsLCBpdCBtZWFucyB3ZSBzaG91bGQgc2tpcCBleHBvcnRpbmcgdGhpcyBub2RlXHJcbiAgICAgICAgY29uc3QgcHJvY2Vzc2VkTm9kZSA9IGF3YWl0IHRoaXMuX2V4dGVuc2lvbnNQb3N0RXhwb3J0Tm9kZUFzeW5jKFwiZXhwb3J0Tm9kZUFzeW5jXCIsIG5vZGUsIGJhYnlsb25Ob2RlLCB0aGlzLl9ub2RlTWFwLCBzdGF0ZS5jb252ZXJ0VG9SaWdodEhhbmRlZCk7XHJcbiAgICAgICAgaWYgKCFwcm9jZXNzZWROb2RlKSB7XHJcbiAgICAgICAgICAgIExvZ2dlci5XYXJuKGBOb3QgZXhwb3J0aW5nIG5vZGUgJHtiYWJ5bG9uTm9kZS5uYW1lfWApO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2V4cG9ydEluZGljZXMoXHJcbiAgICAgICAgaW5kaWNlczogTnVsbGFibGU8SW5kaWNlc0FycmF5PixcclxuICAgICAgICBpczMyQml0czogYm9vbGVhbixcclxuICAgICAgICBzdGFydDogbnVtYmVyLFxyXG4gICAgICAgIGNvdW50OiBudW1iZXIsXHJcbiAgICAgICAgb2Zmc2V0OiBudW1iZXIsXHJcbiAgICAgICAgZmlsbE1vZGU6IG51bWJlcixcclxuICAgICAgICBzaWRlT3JpZW50YXRpb246IG51bWJlcixcclxuICAgICAgICBzdGF0ZTogRXhwb3J0ZXJTdGF0ZSxcclxuICAgICAgICBwcmltaXRpdmU6IElNZXNoUHJpbWl0aXZlXHJcbiAgICApOiB2b2lkIHtcclxuICAgICAgICBsZXQgaW5kaWNlc1RvRXhwb3J0ID0gaW5kaWNlcztcclxuXHJcbiAgICAgICAgcHJpbWl0aXZlLm1vZGUgPSBHZXRQcmltaXRpdmVNb2RlKGZpbGxNb2RlKTtcclxuXHJcbiAgICAgICAgLy8gRmxpcCBpZiB0cmlhbmdsZSB3aW5kaW5nIG9yZGVyIGlzIG5vdCBDQ1cgYXMgZ2xURiBpcyBhbHdheXMgQ0NXLlxyXG4gICAgICAgIGNvbnN0IGludmVydGVkTWF0ZXJpYWwgPSBzaWRlT3JpZW50YXRpb24gIT09IE1hdGVyaWFsLkNvdW50ZXJDbG9ja1dpc2VTaWRlT3JpZW50YXRpb247XHJcblxyXG4gICAgICAgIGNvbnN0IGZsaXBXaGVuSW52ZXJ0ZWRNYXRlcmlhbCA9ICFzdGF0ZS53YXNBZGRlZEJ5Tm9vcE5vZGUgJiYgaW52ZXJ0ZWRNYXRlcmlhbDtcclxuXHJcbiAgICAgICAgY29uc3QgZmxpcCA9IElzVHJpYW5nbGVGaWxsTW9kZShmaWxsTW9kZSkgJiYgZmxpcFdoZW5JbnZlcnRlZE1hdGVyaWFsO1xyXG5cclxuICAgICAgICBpZiAoZmxpcCkge1xyXG4gICAgICAgICAgICBpZiAoZmlsbE1vZGUgPT09IE1hdGVyaWFsLlRyaWFuZ2xlU3RyaXBEcmF3TW9kZSB8fCBmaWxsTW9kZSA9PT0gTWF0ZXJpYWwuVHJpYW5nbGVGYW5EcmF3TW9kZSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVHJpYW5nbGUgc3RyaXAvZmFuIGZpbGwgbW9kZSBpcyBub3QgaW1wbGVtZW50ZWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHByaW1pdGl2ZS5tb2RlID0gR2V0UHJpbWl0aXZlTW9kZShmaWxsTW9kZSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBuZXdJbmRpY2VzID0gaXMzMkJpdHMgPyBuZXcgVWludDMyQXJyYXkoY291bnQpIDogbmV3IFVpbnQxNkFycmF5KGNvdW50KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpbmRpY2VzKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSArIDIgPCBjb3VudDsgaSArPSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3SW5kaWNlc1tpXSA9IGluZGljZXNbc3RhcnQgKyBpXSArIG9mZnNldDtcclxuICAgICAgICAgICAgICAgICAgICBuZXdJbmRpY2VzW2kgKyAxXSA9IGluZGljZXNbc3RhcnQgKyBpICsgMl0gKyBvZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3SW5kaWNlc1tpICsgMl0gPSBpbmRpY2VzW3N0YXJ0ICsgaSArIDFdICsgb2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgKyAyIDwgY291bnQ7IGkgKz0gMykge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0luZGljZXNbaV0gPSBpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0luZGljZXNbaSArIDFdID0gaSArIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3SW5kaWNlc1tpICsgMl0gPSBpICsgMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW5kaWNlc1RvRXhwb3J0ID0gbmV3SW5kaWNlcztcclxuICAgICAgICB9IGVsc2UgaWYgKGluZGljZXMgJiYgb2Zmc2V0ICE9PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0luZGljZXMgPSBpczMyQml0cyA/IG5ldyBVaW50MzJBcnJheShjb3VudCkgOiBuZXcgVWludDE2QXJyYXkoY291bnQpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIG5ld0luZGljZXNbaV0gPSBpbmRpY2VzW3N0YXJ0ICsgaV0gKyBvZmZzZXQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGluZGljZXNUb0V4cG9ydCA9IG5ld0luZGljZXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaW5kaWNlc1RvRXhwb3J0KSB7XHJcbiAgICAgICAgICAgIGxldCBhY2Nlc3NvckluZGV4ID0gc3RhdGUuZ2V0SW5kaWNlc0FjY2Vzc29yKGluZGljZXMsIHN0YXJ0LCBjb3VudCwgb2Zmc2V0LCBmbGlwKTtcclxuICAgICAgICAgICAgaWYgKGFjY2Vzc29ySW5kZXggPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYnl0ZXMgPSBJbmRpY2VzQXJyYXlUb1R5cGVkQXJyYXkoaW5kaWNlc1RvRXhwb3J0LCAwLCBjb3VudCwgaXMzMkJpdHMpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYnVmZmVyVmlldyA9IHRoaXMuX2J1ZmZlck1hbmFnZXIuY3JlYXRlQnVmZmVyVmlldyhieXRlcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50VHlwZSA9IGlzMzJCaXRzID8gQWNjZXNzb3JDb21wb25lbnRUeXBlLlVOU0lHTkVEX0lOVCA6IEFjY2Vzc29yQ29tcG9uZW50VHlwZS5VTlNJR05FRF9TSE9SVDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2FjY2Vzc29ycy5wdXNoKHRoaXMuX2J1ZmZlck1hbmFnZXIuY3JlYXRlQWNjZXNzb3IoYnVmZmVyVmlldywgQWNjZXNzb3JUeXBlLlNDQUxBUiwgY29tcG9uZW50VHlwZSwgY291bnQsIDApKTtcclxuICAgICAgICAgICAgICAgIGFjY2Vzc29ySW5kZXggPSB0aGlzLl9hY2Nlc3NvcnMubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgICAgIHN0YXRlLnNldEluZGljZXNBY2Nlc3NvcihpbmRpY2VzLCBzdGFydCwgY291bnQsIG9mZnNldCwgZmxpcCwgYWNjZXNzb3JJbmRleCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHByaW1pdGl2ZS5pbmRpY2VzID0gYWNjZXNzb3JJbmRleDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZXhwb3J0VmVydGV4QnVmZmVyKHZlcnRleEJ1ZmZlcjogVmVydGV4QnVmZmVyLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsLCBzdGFydDogbnVtYmVyLCBjb3VudDogbnVtYmVyLCBzdGF0ZTogRXhwb3J0ZXJTdGF0ZSwgcHJpbWl0aXZlOiBJTWVzaFByaW1pdGl2ZSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGtpbmQgPSB2ZXJ0ZXhCdWZmZXIuZ2V0S2luZCgpO1xyXG5cclxuICAgICAgICBpZiAoIUlzU3RhbmRhcmRWZXJ0ZXhBdHRyaWJ1dGUoa2luZCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGtpbmQuc3RhcnRzV2l0aChcInV2XCIpICYmICF0aGlzLl9vcHRpb25zLmV4cG9ydFVudXNlZFVWcykge1xyXG4gICAgICAgICAgICBpZiAoIWJhYnlsb25NYXRlcmlhbCB8fCAhdGhpcy5fbWF0ZXJpYWxOZWVkc1VWc1NldC5oYXMoYmFieWxvbk1hdGVyaWFsKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgYWNjZXNzb3JJbmRleCA9IHN0YXRlLmdldFZlcnRleEFjY2Vzc29yKHZlcnRleEJ1ZmZlciwgc3RhcnQsIGNvdW50KTtcclxuXHJcbiAgICAgICAgaWYgKGFjY2Vzc29ySW5kZXggPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAvLyBHZXQgbWluL21heCBmcm9tIGNvbnZlcnRlZCBvciBvcmlnaW5hbCBkYXRhLlxyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gc3RhdGUuY29udmVydGVkVG9SaWdodEhhbmRlZEJ1ZmZlcnMuZ2V0KHZlcnRleEJ1ZmZlci5fYnVmZmVyKSB8fCB2ZXJ0ZXhCdWZmZXIuX2J1ZmZlci5nZXREYXRhKCkhO1xyXG4gICAgICAgICAgICBjb25zdCBtaW5NYXggPSBraW5kID09PSBWZXJ0ZXhCdWZmZXIuUG9zaXRpb25LaW5kID8gR2V0TWluTWF4KGRhdGEsIHZlcnRleEJ1ZmZlciwgc3RhcnQsIGNvdW50KSA6IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgICAgIC8vIEZvciB0aGUgcmVtYXBwZWQgYnVmZmVyIHZpZXdzIHdlIGNyZWF0ZWQgZm9yIGZsb2F0IG1hdHJpY2VzIGluZGljZXMsIG1ha2Ugc3VyZSB0byB1c2UgdGhlaXIgdXBkYXRlZCBpbmZvcm1hdGlvbi5cclxuICAgICAgICAgICAgY29uc3QgaXNGbG9hdE1hdHJpY2VzSW5kaWNlcyA9XHJcbiAgICAgICAgICAgICAgICAoa2luZCA9PT0gVmVydGV4QnVmZmVyLk1hdHJpY2VzSW5kaWNlc0tpbmQgfHwga2luZCA9PT0gVmVydGV4QnVmZmVyLk1hdHJpY2VzSW5kaWNlc0V4dHJhS2luZCkgJiYgdmVydGV4QnVmZmVyLnR5cGUgPT09IFZlcnRleEJ1ZmZlci5GTE9BVDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHZlcnRleEJ1ZmZlclR5cGUgPSBpc0Zsb2F0TWF0cmljZXNJbmRpY2VzID8gVmVydGV4QnVmZmVyLlVOU0lHTkVEX0JZVEUgOiB2ZXJ0ZXhCdWZmZXIudHlwZTtcclxuICAgICAgICAgICAgY29uc3QgdmVydGV4QnVmZmVyTm9ybWFsaXplZCA9IGlzRmxvYXRNYXRyaWNlc0luZGljZXMgPyB1bmRlZmluZWQgOiB2ZXJ0ZXhCdWZmZXIubm9ybWFsaXplZDtcclxuICAgICAgICAgICAgY29uc3QgYnVmZmVyVmlldyA9IGlzRmxvYXRNYXRyaWNlc0luZGljZXMgPyBzdGF0ZS5nZXRSZW1hcHBlZEJ1ZmZlclZpZXcodmVydGV4QnVmZmVyLl9idWZmZXIsIHZlcnRleEJ1ZmZlcikhIDogc3RhdGUuZ2V0VmVydGV4QnVmZmVyVmlldyh2ZXJ0ZXhCdWZmZXIuX2J1ZmZlcikhO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYnl0ZU9mZnNldCA9IHZlcnRleEJ1ZmZlci5ieXRlT2Zmc2V0ICsgc3RhcnQgKiB2ZXJ0ZXhCdWZmZXIuYnl0ZVN0cmlkZTtcclxuICAgICAgICAgICAgdGhpcy5fYWNjZXNzb3JzLnB1c2goXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9idWZmZXJNYW5hZ2VyLmNyZWF0ZUFjY2Vzc29yKFxyXG4gICAgICAgICAgICAgICAgICAgIGJ1ZmZlclZpZXcsXHJcbiAgICAgICAgICAgICAgICAgICAgR2V0QWNjZXNzb3JUeXBlKGtpbmQsIHN0YXRlLmhhc1ZlcnRleENvbG9yQWxwaGEodmVydGV4QnVmZmVyKSksXHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGV4QnVmZmVyVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICBjb3VudCxcclxuICAgICAgICAgICAgICAgICAgICBieXRlT2Zmc2V0LFxyXG4gICAgICAgICAgICAgICAgICAgIG1pbk1heCxcclxuICAgICAgICAgICAgICAgICAgICB2ZXJ0ZXhCdWZmZXJOb3JtYWxpemVkIC8vIFRPRE86IEZpbmQgb3RoZXIgcGxhY2VzIHdoZXJlIHRoaXMgaXMgbmVlZGVkLlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBhY2Nlc3NvckluZGV4ID0gdGhpcy5fYWNjZXNzb3JzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgIHN0YXRlLnNldFZlcnRleEFjY2Vzc29yKHZlcnRleEJ1ZmZlciwgc3RhcnQsIGNvdW50LCBhY2Nlc3NvckluZGV4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaW1pdGl2ZS5hdHRyaWJ1dGVzW0dldEF0dHJpYnV0ZVR5cGUoa2luZCldID0gYWNjZXNzb3JJbmRleDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIF9leHBvcnRNYXRlcmlhbEFzeW5jKGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwsIHZlcnRleEJ1ZmZlcnM6IHsgW2tpbmQ6IHN0cmluZ106IFZlcnRleEJ1ZmZlciB9LCBzdWJNZXNoOiBTdWJNZXNoLCBwcmltaXRpdmU6IElNZXNoUHJpbWl0aXZlKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgbGV0IG1hdGVyaWFsSW5kZXggPSB0aGlzLl9tYXRlcmlhbE1hcC5nZXQoYmFieWxvbk1hdGVyaWFsKTtcclxuICAgICAgICBpZiAobWF0ZXJpYWxJbmRleCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhhc1VWcyA9IHZlcnRleEJ1ZmZlcnMgJiYgT2JqZWN0LmtleXModmVydGV4QnVmZmVycykuc29tZSgoa2luZCkgPT4ga2luZC5zdGFydHNXaXRoKFwidXZcIikpO1xyXG4gICAgICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwgPSBiYWJ5bG9uTWF0ZXJpYWwgaW5zdGFuY2VvZiBNdWx0aU1hdGVyaWFsID8gYmFieWxvbk1hdGVyaWFsLnN1Yk1hdGVyaWFsc1tzdWJNZXNoLm1hdGVyaWFsSW5kZXhdISA6IGJhYnlsb25NYXRlcmlhbDtcclxuICAgICAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbCBpbnN0YW5jZW9mIFBCUk1hdGVyaWFsKSB7XHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbEluZGV4ID0gYXdhaXQgdGhpcy5fbWF0ZXJpYWxFeHBvcnRlci5leHBvcnRQQlJNYXRlcmlhbEFzeW5jKGJhYnlsb25NYXRlcmlhbCwgSW1hZ2VNaW1lVHlwZS5QTkcsIGhhc1VWcyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYmFieWxvbk1hdGVyaWFsIGluc3RhbmNlb2YgU3RhbmRhcmRNYXRlcmlhbCkge1xyXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWxJbmRleCA9IGF3YWl0IHRoaXMuX21hdGVyaWFsRXhwb3J0ZXIuZXhwb3J0U3RhbmRhcmRNYXRlcmlhbEFzeW5jKGJhYnlsb25NYXRlcmlhbCwgSW1hZ2VNaW1lVHlwZS5QTkcsIGhhc1VWcyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBMb2dnZXIuV2FybihgVW5zdXBwb3J0ZWQgbWF0ZXJpYWwgJyR7YmFieWxvbk1hdGVyaWFsLm5hbWV9JyB3aXRoIHR5cGUgJHtiYWJ5bG9uTWF0ZXJpYWwuZ2V0Q2xhc3NOYW1lKCl9YCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX21hdGVyaWFsTWFwLnNldChiYWJ5bG9uTWF0ZXJpYWwsIG1hdGVyaWFsSW5kZXgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpbWl0aXZlLm1hdGVyaWFsID0gbWF0ZXJpYWxJbmRleDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIF9leHBvcnRNZXNoQXN5bmMoYmFieWxvbk1lc2g6IE1lc2gsIHN0YXRlOiBFeHBvcnRlclN0YXRlKTogUHJvbWlzZTxudW1iZXI+IHtcclxuICAgICAgICBsZXQgbWVzaEluZGV4ID0gc3RhdGUuZ2V0TWVzaChiYWJ5bG9uTWVzaCk7XHJcbiAgICAgICAgaWYgKG1lc2hJbmRleCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtZXNoSW5kZXg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBtZXNoOiBJTWVzaCA9IHsgcHJpbWl0aXZlczogW10gfTtcclxuICAgICAgICBtZXNoSW5kZXggPSB0aGlzLl9tZXNoZXMubGVuZ3RoO1xyXG4gICAgICAgIHRoaXMuX21lc2hlcy5wdXNoKG1lc2gpO1xyXG4gICAgICAgIHN0YXRlLnNldE1lc2goYmFieWxvbk1lc2gsIG1lc2hJbmRleCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGluZGljZXMgPSBiYWJ5bG9uTWVzaC5pc1VuSW5kZXhlZCA/IG51bGwgOiBiYWJ5bG9uTWVzaC5nZXRJbmRpY2VzKCk7XHJcbiAgICAgICAgY29uc3QgdmVydGV4QnVmZmVycyA9IGJhYnlsb25NZXNoLmdlb21ldHJ5Py5nZXRWZXJ0ZXhCdWZmZXJzKCk7XHJcbiAgICAgICAgY29uc3QgbW9ycGhUYXJnZXRzID0gc3RhdGUuZ2V0TW9ycGhUYXJnZXRzRnJvbU1lc2goYmFieWxvbk1lc2gpO1xyXG5cclxuICAgICAgICBjb25zdCBpc0xpbmVzTWVzaCA9IGJhYnlsb25NZXNoIGluc3RhbmNlb2YgTGluZXNNZXNoO1xyXG4gICAgICAgIGNvbnN0IGlzR3JlYXNlZExpbmVNZXNoID0gYmFieWxvbk1lc2ggaW5zdGFuY2VvZiBHcmVhc2VkTGluZUJhc2VNZXNoO1xyXG5cclxuICAgICAgICBjb25zdCBzdWJNZXNoZXMgPSBiYWJ5bG9uTWVzaC5zdWJNZXNoZXM7XHJcbiAgICAgICAgaWYgKHZlcnRleEJ1ZmZlcnMgJiYgc3ViTWVzaGVzICYmIHN1Yk1lc2hlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qgc3ViTWVzaCBvZiBzdWJNZXNoZXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByaW1pdGl2ZTogSU1lc2hQcmltaXRpdmUgPSB7IGF0dHJpYnV0ZXM6IHt9IH07XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgYmFieWxvbk1hdGVyaWFsID0gc3ViTWVzaC5nZXRNYXRlcmlhbCgpIHx8IHRoaXMuX2JhYnlsb25TY2VuZS5kZWZhdWx0TWF0ZXJpYWw7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGlzR3JlYXNlZExpbmVNZXNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWw6IElNYXRlcmlhbCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogYmFieWxvbk1hdGVyaWFsLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmFieWxvbkxpbmVzTWVzaCA9IGJhYnlsb25NZXNoIGFzIEdyZWFzZWRMaW5lQmFzZU1lc2g7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbG9yV2hpdGUgPSBDb2xvcjMuV2hpdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhbHBoYSA9IGJhYnlsb25MaW5lc01lc2gubWF0ZXJpYWw/LmFscGhhID8/IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29sb3IgPSBiYWJ5bG9uTGluZXNNZXNoLmdyZWFzZWRMaW5lTWF0ZXJpYWw/LmNvbG9yID8/IGNvbG9yV2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjb2xvci5lcXVhbHMoY29sb3JXaGl0ZSkgfHwgYWxwaGEgPCAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsLnBick1ldGFsbGljUm91Z2huZXNzID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZUNvbG9yRmFjdG9yOiBbLi4uY29sb3IuYXNBcnJheSgpLCBhbHBoYV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tYXRlcmlhbHMucHVzaChtYXRlcmlhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpbWl0aXZlLm1hdGVyaWFsID0gdGhpcy5fbWF0ZXJpYWxzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlzTGluZXNNZXNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU3BlY2lhbCBjYXNlIGZvciBMaW5lc01lc2hcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRlcmlhbDogSU1hdGVyaWFsID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBiYWJ5bG9uTWF0ZXJpYWwubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBiYWJ5bG9uTGluZXNNZXNoID0gYmFieWxvbk1lc2ggYXMgTGluZXNNZXNoO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWJhYnlsb25MaW5lc01lc2guY29sb3IuZXF1YWxzKENvbG9yMy5XaGl0ZSgpKSB8fCBiYWJ5bG9uTGluZXNNZXNoLmFscGhhIDwgMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRlcmlhbC5wYnJNZXRhbGxpY1JvdWdobmVzcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VDb2xvckZhY3RvcjogWy4uLmJhYnlsb25MaW5lc01lc2guY29sb3IuYXNBcnJheSgpLCBiYWJ5bG9uTGluZXNNZXNoLmFscGhhXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21hdGVyaWFscy5wdXNoKG1hdGVyaWFsKTtcclxuICAgICAgICAgICAgICAgICAgICBwcmltaXRpdmUubWF0ZXJpYWwgPSB0aGlzLl9tYXRlcmlhbHMubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTWF0ZXJpYWxcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLl9leHBvcnRNYXRlcmlhbEFzeW5jKGJhYnlsb25NYXRlcmlhbCwgdmVydGV4QnVmZmVycywgc3ViTWVzaCwgcHJpbWl0aXZlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBJbmRleCBidWZmZXJcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGxNb2RlID0gaXNMaW5lc01lc2ggfHwgaXNHcmVhc2VkTGluZU1lc2ggPyBNYXRlcmlhbC5MaW5lTGlzdERyYXdNb2RlIDogKGJhYnlsb25NZXNoLm92ZXJyaWRlUmVuZGVyaW5nRmlsbE1vZGUgPz8gYmFieWxvbk1hdGVyaWFsLmZpbGxNb2RlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzaWRlT3JpZW50YXRpb24gPSBiYWJ5bG9uTWF0ZXJpYWwuX2dldEVmZmVjdGl2ZU9yaWVudGF0aW9uKGJhYnlsb25NZXNoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9leHBvcnRJbmRpY2VzKFxyXG4gICAgICAgICAgICAgICAgICAgIGluZGljZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5kaWNlcyA/IEFyZUluZGljZXMzMkJpdHMoaW5kaWNlcywgc3ViTWVzaC5pbmRleENvdW50LCBzdWJNZXNoLmluZGV4U3RhcnQsIHN1Yk1lc2gudmVydGljZXNTdGFydCkgOiBzdWJNZXNoLnZlcnRpY2VzQ291bnQgPiA2NTUzNSxcclxuICAgICAgICAgICAgICAgICAgICBpbmRpY2VzID8gc3ViTWVzaC5pbmRleFN0YXJ0IDogc3ViTWVzaC52ZXJ0aWNlc1N0YXJ0LFxyXG4gICAgICAgICAgICAgICAgICAgIGluZGljZXMgPyBzdWJNZXNoLmluZGV4Q291bnQgOiBzdWJNZXNoLnZlcnRpY2VzQ291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgLXN1Yk1lc2gudmVydGljZXNTdGFydCxcclxuICAgICAgICAgICAgICAgICAgICBmaWxsTW9kZSxcclxuICAgICAgICAgICAgICAgICAgICBzaWRlT3JpZW50YXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpbWl0aXZlXHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFZlcnRleCBidWZmZXJzXHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHZlcnRleEJ1ZmZlciBvZiBPYmplY3QudmFsdWVzKHZlcnRleEJ1ZmZlcnMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXhwb3J0VmVydGV4QnVmZmVyKHZlcnRleEJ1ZmZlciwgYmFieWxvbk1hdGVyaWFsLCBzdWJNZXNoLnZlcnRpY2VzU3RhcnQsIHN1Yk1lc2gudmVydGljZXNDb3VudCwgc3RhdGUsIHByaW1pdGl2ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG1vcnBoVGFyZ2V0cykge1xyXG4gICAgICAgICAgICAgICAgICAgIHByaW1pdGl2ZS50YXJnZXRzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBnbHRmTW9ycGhUYXJnZXQgb2YgbW9ycGhUYXJnZXRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW1pdGl2ZS50YXJnZXRzLnB1c2goZ2x0Zk1vcnBoVGFyZ2V0LmF0dHJpYnV0ZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBtZXNoLnByaW1pdGl2ZXMucHVzaChwcmltaXRpdmUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZXh0ZW5zaW9uc1Bvc3RFeHBvcnRNZXNoUHJpbWl0aXZlKHByaW1pdGl2ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtb3JwaFRhcmdldHMpIHtcclxuICAgICAgICAgICAgbWVzaC53ZWlnaHRzID0gW107XHJcblxyXG4gICAgICAgICAgICBpZiAoIW1lc2guZXh0cmFzKSB7XHJcbiAgICAgICAgICAgICAgICBtZXNoLmV4dHJhcyA9IHt9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1lc2guZXh0cmFzLnRhcmdldE5hbWVzID0gW107XHJcblxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGdsdGZNb3JwaFRhcmdldCBvZiBtb3JwaFRhcmdldHMpIHtcclxuICAgICAgICAgICAgICAgIG1lc2gud2VpZ2h0cy5wdXNoKGdsdGZNb3JwaFRhcmdldC5pbmZsdWVuY2UpO1xyXG4gICAgICAgICAgICAgICAgbWVzaC5leHRyYXMudGFyZ2V0TmFtZXMucHVzaChnbHRmTW9ycGhUYXJnZXQubmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBtZXNoSW5kZXg7XHJcbiAgICB9XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgYmFieWxvbmpzL2F2YWlsYWJsZSAqL1xyXG5cclxuaW1wb3J0IHR5cGUgeyBJVGV4dHVyZUluZm8sIElNYXRlcmlhbCwgSU1hdGVyaWFsUGJyTWV0YWxsaWNSb3VnaG5lc3MsIElNYXRlcmlhbE9jY2x1c2lvblRleHR1cmVJbmZvLCBJU2FtcGxlciwgSUltYWdlIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBJbWFnZU1pbWVUeXBlLCBNYXRlcmlhbEFscGhhTW9kZSwgVGV4dHVyZU1hZ0ZpbHRlciwgVGV4dHVyZU1pbkZpbHRlciwgVGV4dHVyZVdyYXBNb2RlIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5cclxuaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCJjb3JlL3R5cGVzXCI7XHJcbmltcG9ydCB7IENvbG9yMyB9IGZyb20gXCJjb3JlL01hdGhzL21hdGguY29sb3JcIjtcclxuaW1wb3J0IHsgU2NhbGFyIH0gZnJvbSBcImNvcmUvTWF0aHMvbWF0aC5zY2FsYXJcIjtcclxuaW1wb3J0IHsgVG9vbHMgfSBmcm9tIFwiY29yZS9NaXNjL3Rvb2xzXCI7XHJcbmltcG9ydCB7IFRleHR1cmVUb29scyB9IGZyb20gXCJjb3JlL01pc2MvdGV4dHVyZVRvb2xzXCI7XHJcbmltcG9ydCB0eXBlIHsgQmFzZVRleHR1cmUgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvYmFzZVRleHR1cmVcIjtcclxuaW1wb3J0IHsgVGV4dHVyZSB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9UZXh0dXJlcy90ZXh0dXJlXCI7XHJcbmltcG9ydCB7IFJhd1RleHR1cmUgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvcmF3VGV4dHVyZVwiO1xyXG5cclxuaW1wb3J0IHR5cGUgeyBTY2VuZSB9IGZyb20gXCJjb3JlL3NjZW5lXCI7XHJcblxyXG5pbXBvcnQgdHlwZSB7IEdMVEZFeHBvcnRlciB9IGZyb20gXCIuL2dsVEZFeHBvcnRlclwiO1xyXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiY29yZS9FbmdpbmVzL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBEdW1wVG9vbHMgfSBmcm9tIFwiY29yZS9NaXNjL2R1bXBUb29sc1wiO1xyXG5cclxuaW1wb3J0IHR5cGUgeyBNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgdHlwZSB7IFN0YW5kYXJkTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvc3RhbmRhcmRNYXRlcmlhbFwiO1xyXG5pbXBvcnQgdHlwZSB7IFBCUkJhc2VNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9QQlIvcGJyQmFzZU1hdGVyaWFsXCI7XHJcbmltcG9ydCB7IFNwZWN1bGFyUG93ZXJUb1JvdWdobmVzcyB9IGZyb20gXCJjb3JlL0hlbHBlcnMvbWF0ZXJpYWxDb252ZXJzaW9uSGVscGVyXCI7XHJcblxyXG5jb25zdCBlcHNpbG9uID0gMWUtNjtcclxuY29uc3QgZGllbGVjdHJpY1NwZWN1bGFyID0gbmV3IENvbG9yMygwLjA0LCAwLjA0LCAwLjA0KTtcclxuY29uc3QgbWF4U3BlY3VsYXJQb3dlciA9IDEwMjQ7XHJcbmNvbnN0IHdoaXRlID0gQ29sb3IzLldoaXRlKCk7XHJcbmNvbnN0IGJsYWNrID0gQ29sb3IzLkJsYWNrKCk7XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBzdG9yaW5nIHNwZWN1bGFyIGdsb3NzaW5lc3MgZmFjdG9yc1xyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbmludGVyZmFjZSBJUEJSU3BlY3VsYXJHbG9zc2luZXNzIHtcclxuICAgIC8qKlxyXG4gICAgICogUmVwcmVzZW50cyB0aGUgbGluZWFyIGRpZmZ1c2UgZmFjdG9ycyBvZiB0aGUgbWF0ZXJpYWxcclxuICAgICAqL1xyXG4gICAgZGlmZnVzZUNvbG9yOiBDb2xvcjM7XHJcbiAgICBzcGVjdWxhckNvbG9yOiBDb2xvcjM7XHJcbiAgICBnbG9zc2luZXNzOiBudW1iZXI7XHJcbn1cclxuXHJcbmludGVyZmFjZSBJUEJSTWV0YWxsaWNSb3VnaG5lc3Mge1xyXG4gICAgYmFzZUNvbG9yOiBDb2xvcjM7XHJcbiAgICBtZXRhbGxpYzogTnVsbGFibGU8bnVtYmVyPjtcclxuICAgIHJvdWdobmVzczogTnVsbGFibGU8bnVtYmVyPjtcclxuICAgIG1ldGFsbGljUm91Z2huZXNzVGV4dHVyZURhdGE/OiBOdWxsYWJsZTxBcnJheUJ1ZmZlcj47XHJcbiAgICBiYXNlQ29sb3JUZXh0dXJlRGF0YT86IE51bGxhYmxlPEFycmF5QnVmZmVyPjtcclxufVxyXG5cclxuZnVuY3Rpb24gR2V0RmlsZUV4dGVuc2lvbkZyb21NaW1lVHlwZShtaW1lVHlwZTogSW1hZ2VNaW1lVHlwZSk6IHN0cmluZyB7XHJcbiAgICBzd2l0Y2ggKG1pbWVUeXBlKSB7XHJcbiAgICAgICAgY2FzZSBJbWFnZU1pbWVUeXBlLkpQRUc6XHJcbiAgICAgICAgICAgIHJldHVybiBcIi5qcGdcIjtcclxuICAgICAgICBjYXNlIEltYWdlTWltZVR5cGUuUE5HOlxyXG4gICAgICAgICAgICByZXR1cm4gXCIucG5nXCI7XHJcbiAgICAgICAgY2FzZSBJbWFnZU1pbWVUeXBlLldFQlA6XHJcbiAgICAgICAgICAgIHJldHVybiBcIi53ZWJwXCI7XHJcbiAgICAgICAgY2FzZSBJbWFnZU1pbWVUeXBlLkFWSUY6XHJcbiAgICAgICAgICAgIHJldHVybiBcIi5hdmlmXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb21wdXRlcyB0aGUgbWV0YWxsaWMgZmFjdG9yIGZyb20gc3BlY3VsYXIgZ2xvc3NpbmVzcyB2YWx1ZXMuXHJcbiAqIEBwYXJhbSBkaWZmdXNlIGRpZmZ1c2VkIHZhbHVlXHJcbiAqIEBwYXJhbSBzcGVjdWxhciBzcGVjdWxhciB2YWx1ZVxyXG4gKiBAcGFyYW0gb25lTWludXNTcGVjdWxhclN0cmVuZ3RoIG9uZSBtaW51cyB0aGUgc3BlY3VsYXIgc3RyZW5ndGhcclxuICogQHJldHVybnMgbWV0YWxsaWMgdmFsdWVcclxuICogQGludGVybmFsXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX1NvbHZlTWV0YWxsaWMoZGlmZnVzZTogbnVtYmVyLCBzcGVjdWxhcjogbnVtYmVyLCBvbmVNaW51c1NwZWN1bGFyU3RyZW5ndGg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBpZiAoc3BlY3VsYXIgPCBkaWVsZWN0cmljU3BlY3VsYXIucikge1xyXG4gICAgICAgIGRpZWxlY3RyaWNTcGVjdWxhcjtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhID0gZGllbGVjdHJpY1NwZWN1bGFyLnI7XHJcbiAgICBjb25zdCBiID0gKGRpZmZ1c2UgKiBvbmVNaW51c1NwZWN1bGFyU3RyZW5ndGgpIC8gKDEuMCAtIGRpZWxlY3RyaWNTcGVjdWxhci5yKSArIHNwZWN1bGFyIC0gMi4wICogZGllbGVjdHJpY1NwZWN1bGFyLnI7XHJcbiAgICBjb25zdCBjID0gZGllbGVjdHJpY1NwZWN1bGFyLnIgLSBzcGVjdWxhcjtcclxuICAgIGNvbnN0IGQgPSBiICogYiAtIDQuMCAqIGEgKiBjO1xyXG4gICAgcmV0dXJuIFNjYWxhci5DbGFtcCgoLWIgKyBNYXRoLnNxcnQoZCkpIC8gKDIuMCAqIGEpLCAwLCAxKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbXB1dGVzIHRoZSBtZXRhbGxpYy9yb3VnaG5lc3MgZmFjdG9ycyBmcm9tIGEgU3RhbmRhcmQgTWF0ZXJpYWwuXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9Db252ZXJ0VG9HTFRGUEJSTWV0YWxsaWNSb3VnaG5lc3MoYmFieWxvblN0YW5kYXJkTWF0ZXJpYWw6IFN0YW5kYXJkTWF0ZXJpYWwpOiBJTWF0ZXJpYWxQYnJNZXRhbGxpY1JvdWdobmVzcyB7XHJcbiAgICBjb25zdCBkaWZmdXNlID0gYmFieWxvblN0YW5kYXJkTWF0ZXJpYWwuZGlmZnVzZUNvbG9yLnRvTGluZWFyU3BhY2UoYmFieWxvblN0YW5kYXJkTWF0ZXJpYWwuZ2V0U2NlbmUoKS5nZXRFbmdpbmUoKS51c2VFeGFjdFNyZ2JDb252ZXJzaW9ucykuc2NhbGUoMC41KTtcclxuICAgIGNvbnN0IG9wYWNpdHkgPSBiYWJ5bG9uU3RhbmRhcmRNYXRlcmlhbC5hbHBoYTtcclxuICAgIGNvbnN0IHNwZWN1bGFyUG93ZXIgPSBTY2FsYXIuQ2xhbXAoYmFieWxvblN0YW5kYXJkTWF0ZXJpYWwuc3BlY3VsYXJQb3dlciwgMCwgbWF4U3BlY3VsYXJQb3dlcik7XHJcblxyXG4gICAgY29uc3Qgcm91Z2huZXNzID0gU3BlY3VsYXJQb3dlclRvUm91Z2huZXNzKHNwZWN1bGFyUG93ZXIpO1xyXG5cclxuICAgIGNvbnN0IGdsVEZQYnJNZXRhbGxpY1JvdWdobmVzczogSU1hdGVyaWFsUGJyTWV0YWxsaWNSb3VnaG5lc3MgPSB7XHJcbiAgICAgICAgYmFzZUNvbG9yRmFjdG9yOiBbZGlmZnVzZS5yLCBkaWZmdXNlLmcsIGRpZmZ1c2UuYiwgb3BhY2l0eV0sXHJcbiAgICAgICAgbWV0YWxsaWNGYWN0b3I6IDAsXHJcbiAgICAgICAgcm91Z2huZXNzRmFjdG9yOiByb3VnaG5lc3MsXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBnbFRGUGJyTWV0YWxsaWNSb3VnaG5lc3M7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTZXRzIHRoZSBnbFRGIGFscGhhIG1vZGUgdG8gYSBnbFRGIG1hdGVyaWFsIGZyb20gdGhlIEJhYnlsb24gTWF0ZXJpYWxcclxuICogQHBhcmFtIGdsVEZNYXRlcmlhbCBnbFRGIG1hdGVyaWFsXHJcbiAqIEBwYXJhbSBiYWJ5bG9uTWF0ZXJpYWwgQmFieWxvbiBtYXRlcmlhbFxyXG4gKi9cclxuZnVuY3Rpb24gU2V0QWxwaGFNb2RlKGdsVEZNYXRlcmlhbDogSU1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsICYgeyBhbHBoYUN1dE9mZj86IG51bWJlciB9KTogdm9pZCB7XHJcbiAgICBpZiAoYmFieWxvbk1hdGVyaWFsLm5lZWRBbHBoYUJsZW5kaW5nKCkpIHtcclxuICAgICAgICBnbFRGTWF0ZXJpYWwuYWxwaGFNb2RlID0gTWF0ZXJpYWxBbHBoYU1vZGUuQkxFTkQ7XHJcbiAgICB9IGVsc2UgaWYgKGJhYnlsb25NYXRlcmlhbC5uZWVkQWxwaGFUZXN0aW5nKCkpIHtcclxuICAgICAgICBnbFRGTWF0ZXJpYWwuYWxwaGFNb2RlID0gTWF0ZXJpYWxBbHBoYU1vZGUuTUFTSztcclxuICAgICAgICBnbFRGTWF0ZXJpYWwuYWxwaGFDdXRvZmYgPSBiYWJ5bG9uTWF0ZXJpYWwuYWxwaGFDdXRPZmY7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIENyZWF0ZVdoaXRlVGV4dHVyZSh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgc2NlbmU6IFNjZW5lKTogVGV4dHVyZSB7XHJcbiAgICBjb25zdCBkYXRhID0gbmV3IFVpbnQ4QXJyYXkod2lkdGggKiBoZWlnaHQgKiA0KTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpID0gaSArIDQpIHtcclxuICAgICAgICBkYXRhW2ldID0gZGF0YVtpICsgMV0gPSBkYXRhW2kgKyAyXSA9IGRhdGFbaSArIDNdID0gMHhmZjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByYXdUZXh0dXJlID0gUmF3VGV4dHVyZS5DcmVhdGVSR0JBVGV4dHVyZShkYXRhLCB3aWR0aCwgaGVpZ2h0LCBzY2VuZSk7XHJcblxyXG4gICAgcmV0dXJuIHJhd1RleHR1cmU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIENvbnZlcnRQaXhlbEFycmF5VG9GbG9hdDMyKHBpeGVsczogQXJyYXlCdWZmZXJWaWV3KTogRmxvYXQzMkFycmF5IHtcclxuICAgIGlmIChwaXhlbHMgaW5zdGFuY2VvZiBVaW50OEFycmF5KSB7XHJcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gcGl4ZWxzLmxlbmd0aDtcclxuICAgICAgICBjb25zdCBidWZmZXIgPSBuZXcgRmxvYXQzMkFycmF5KHBpeGVscy5sZW5ndGgpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgYnVmZmVyW2ldID0gcGl4ZWxzW2ldIC8gMjU1O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYnVmZmVyO1xyXG4gICAgfSBlbHNlIGlmIChwaXhlbHMgaW5zdGFuY2VvZiBGbG9hdDMyQXJyYXkpIHtcclxuICAgICAgICByZXR1cm4gcGl4ZWxzO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbnN1cHBvcnRlZCBwaXhlbCBmb3JtYXQhXCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogVXRpbGl0eSBtZXRob2RzIGZvciB3b3JraW5nIHdpdGggZ2xURiBtYXRlcmlhbCBjb252ZXJzaW9uIHByb3BlcnRpZXMuXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEdMVEZNYXRlcmlhbEV4cG9ydGVyIHtcclxuICAgIC8vIE1hcHBpbmcgdG8gc3RvcmUgdGV4dHVyZXNcclxuICAgIHByaXZhdGUgX3RleHR1cmVNYXAgPSBuZXcgTWFwPEJhc2VUZXh0dXJlLCBJVGV4dHVyZUluZm8+KCk7XHJcblxyXG4gICAgLy8gTWFwcGluZyBvZiBpbnRlcm5hbCB0ZXh0dXJlcyB0byBpbWFnZXMgdG8gYXZvaWQgZXhwb3J0aW5nIGR1cGxpY2F0ZSBpbWFnZXNcclxuICAgIHByaXZhdGUgX2ludGVybmFsVGV4dHVyZVRvSW1hZ2U6IHsgW3VuaXF1ZUlkOiBudW1iZXJdOiB7IFttaW1lVHlwZTogc3RyaW5nXTogUHJvbWlzZTxudW1iZXI+IH0gfSA9IHt9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgX2V4cG9ydGVyOiBHTFRGRXhwb3J0ZXIpIHt9XHJcblxyXG4gICAgcHVibGljIGdldFRleHR1cmVJbmZvKGJhYnlsb25UZXh0dXJlOiBOdWxsYWJsZTxCYXNlVGV4dHVyZT4pOiBOdWxsYWJsZTxJVGV4dHVyZUluZm8+IHtcclxuICAgICAgICByZXR1cm4gYmFieWxvblRleHR1cmUgPyAodGhpcy5fdGV4dHVyZU1hcC5nZXQoYmFieWxvblRleHR1cmUpID8/IG51bGwpIDogbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZXhwb3J0U3RhbmRhcmRNYXRlcmlhbEFzeW5jKGJhYnlsb25TdGFuZGFyZE1hdGVyaWFsOiBTdGFuZGFyZE1hdGVyaWFsLCBtaW1lVHlwZTogSW1hZ2VNaW1lVHlwZSwgaGFzVVZzOiBib29sZWFuKTogUHJvbWlzZTxudW1iZXI+IHtcclxuICAgICAgICBjb25zdCBwYnJNZXRhbGxpY1JvdWdobmVzcyA9IF9Db252ZXJ0VG9HTFRGUEJSTWV0YWxsaWNSb3VnaG5lc3MoYmFieWxvblN0YW5kYXJkTWF0ZXJpYWwpO1xyXG5cclxuICAgICAgICBjb25zdCBtYXRlcmlhbDogSU1hdGVyaWFsID0geyBuYW1lOiBiYWJ5bG9uU3RhbmRhcmRNYXRlcmlhbC5uYW1lIH07XHJcbiAgICAgICAgaWYgKGJhYnlsb25TdGFuZGFyZE1hdGVyaWFsLmJhY2tGYWNlQ3VsbGluZyAhPSBudWxsICYmICFiYWJ5bG9uU3RhbmRhcmRNYXRlcmlhbC5iYWNrRmFjZUN1bGxpbmcpIHtcclxuICAgICAgICAgICAgaWYgKCFiYWJ5bG9uU3RhbmRhcmRNYXRlcmlhbC50d29TaWRlZExpZ2h0aW5nKSB7XHJcbiAgICAgICAgICAgICAgICBUb29scy5XYXJuKGJhYnlsb25TdGFuZGFyZE1hdGVyaWFsLm5hbWUgKyBcIjogQmFjay1mYWNlIGN1bGxpbmcgZGlzYWJsZWQgYW5kIHR3by1zaWRlZCBsaWdodGluZyBkaXNhYmxlZCBpcyBub3Qgc3VwcG9ydGVkIGluIGdsVEYuXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1hdGVyaWFsLmRvdWJsZVNpZGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChoYXNVVnMpIHtcclxuICAgICAgICAgICAgY29uc3QgcHJvbWlzZXM6IFByb21pc2U8dm9pZD5bXSA9IFtdO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZGlmZnVzZVRleHR1cmUgPSBiYWJ5bG9uU3RhbmRhcmRNYXRlcmlhbC5kaWZmdXNlVGV4dHVyZTtcclxuICAgICAgICAgICAgaWYgKGRpZmZ1c2VUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXhwb3J0VGV4dHVyZUFzeW5jKGRpZmZ1c2VUZXh0dXJlLCBtaW1lVHlwZSkudGhlbigodGV4dHVyZUluZm8pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRleHR1cmVJbmZvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYnJNZXRhbGxpY1JvdWdobmVzcy5iYXNlQ29sb3JUZXh0dXJlID0gdGV4dHVyZUluZm87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgYnVtcFRleHR1cmUgPSBiYWJ5bG9uU3RhbmRhcmRNYXRlcmlhbC5idW1wVGV4dHVyZTtcclxuICAgICAgICAgICAgaWYgKGJ1bXBUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXhwb3J0VGV4dHVyZUFzeW5jKGJ1bXBUZXh0dXJlLCBtaW1lVHlwZSkudGhlbigodGV4dHVyZUluZm8pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRleHR1cmVJbmZvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRlcmlhbC5ub3JtYWxUZXh0dXJlID0gdGV4dHVyZUluZm87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYnVtcFRleHR1cmUubGV2ZWwgIT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRlcmlhbC5ub3JtYWxUZXh0dXJlLnNjYWxlID0gYnVtcFRleHR1cmUubGV2ZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgZW1pc3NpdmVUZXh0dXJlID0gYmFieWxvblN0YW5kYXJkTWF0ZXJpYWwuZW1pc3NpdmVUZXh0dXJlO1xyXG4gICAgICAgICAgICBpZiAoZW1pc3NpdmVUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbC5lbWlzc2l2ZUZhY3RvciA9IFsxLjAsIDEuMCwgMS4wXTtcclxuXHJcbiAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXhwb3J0VGV4dHVyZUFzeW5jKGVtaXNzaXZlVGV4dHVyZSwgbWltZVR5cGUpLnRoZW4oKHRleHR1cmVJbmZvKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ZXh0dXJlSW5mbykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYWwuZW1pc3NpdmVUZXh0dXJlID0gdGV4dHVyZUluZm87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgYW1iaWVudFRleHR1cmUgPSBiYWJ5bG9uU3RhbmRhcmRNYXRlcmlhbC5hbWJpZW50VGV4dHVyZTtcclxuICAgICAgICAgICAgaWYgKGFtYmllbnRUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXhwb3J0VGV4dHVyZUFzeW5jKGFtYmllbnRUZXh0dXJlLCBtaW1lVHlwZSkudGhlbigodGV4dHVyZUluZm8pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRleHR1cmVJbmZvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvY2NsdXNpb25UZXh0dXJlOiBJTWF0ZXJpYWxPY2NsdXNpb25UZXh0dXJlSW5mbyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogdGV4dHVyZUluZm8uaW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYWwub2NjbHVzaW9uVGV4dHVyZSA9IG9jY2x1c2lvblRleHR1cmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHByb21pc2VzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2V4cG9ydGVyLl9tYXRlcmlhbE5lZWRzVVZzU2V0LmFkZChiYWJ5bG9uU3RhbmRhcmRNYXRlcmlhbCk7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChiYWJ5bG9uU3RhbmRhcmRNYXRlcmlhbC5hbHBoYSA8IDEuMCB8fCBiYWJ5bG9uU3RhbmRhcmRNYXRlcmlhbC5vcGFjaXR5VGV4dHVyZSkge1xyXG4gICAgICAgICAgICBpZiAoYmFieWxvblN0YW5kYXJkTWF0ZXJpYWwuYWxwaGFNb2RlID09PSBDb25zdGFudHMuQUxQSEFfQ09NQklORSkge1xyXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWwuYWxwaGFNb2RlID0gTWF0ZXJpYWxBbHBoYU1vZGUuQkxFTkQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBUb29scy5XYXJuKGJhYnlsb25TdGFuZGFyZE1hdGVyaWFsLm5hbWUgKyBcIjogZ2xURiAyLjAgZG9lcyBub3Qgc3VwcG9ydCBhbHBoYSBtb2RlOiBcIiArIGJhYnlsb25TdGFuZGFyZE1hdGVyaWFsLmFscGhhTW9kZS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGJhYnlsb25TdGFuZGFyZE1hdGVyaWFsLmVtaXNzaXZlQ29sb3IgJiYgIWJhYnlsb25TdGFuZGFyZE1hdGVyaWFsLmVtaXNzaXZlQ29sb3IuZXF1YWxzV2l0aEVwc2lsb24oYmxhY2ssIGVwc2lsb24pKSB7XHJcbiAgICAgICAgICAgIG1hdGVyaWFsLmVtaXNzaXZlRmFjdG9yID0gYmFieWxvblN0YW5kYXJkTWF0ZXJpYWwuZW1pc3NpdmVDb2xvci5hc0FycmF5KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtYXRlcmlhbC5wYnJNZXRhbGxpY1JvdWdobmVzcyA9IHBick1ldGFsbGljUm91Z2huZXNzO1xyXG4gICAgICAgIFNldEFscGhhTW9kZShtYXRlcmlhbCwgYmFieWxvblN0YW5kYXJkTWF0ZXJpYWwpO1xyXG5cclxuICAgICAgICBhd2FpdCB0aGlzLl9maW5pc2hNYXRlcmlhbEFzeW5jKG1hdGVyaWFsLCBiYWJ5bG9uU3RhbmRhcmRNYXRlcmlhbCwgbWltZVR5cGUpO1xyXG5cclxuICAgICAgICBjb25zdCBtYXRlcmlhbHMgPSB0aGlzLl9leHBvcnRlci5fbWF0ZXJpYWxzO1xyXG4gICAgICAgIG1hdGVyaWFscy5wdXNoKG1hdGVyaWFsKTtcclxuICAgICAgICByZXR1cm4gbWF0ZXJpYWxzLmxlbmd0aCAtIDE7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBfZmluaXNoTWF0ZXJpYWxBc3luYyhnbFRGTWF0ZXJpYWw6IElNYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCwgbWltZVR5cGU6IEltYWdlTWltZVR5cGUpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBjb25zdCB0ZXh0dXJlcyA9IHRoaXMuX2V4cG9ydGVyLl9leHRlbnNpb25zUG9zdEV4cG9ydE1hdGVyaWFsQWRkaXRpb25hbFRleHR1cmVzKFwiZXhwb3J0TWF0ZXJpYWxcIiwgZ2xURk1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWwpO1xyXG5cclxuICAgICAgICBjb25zdCBwcm9taXNlczogQXJyYXk8UHJvbWlzZTxOdWxsYWJsZTxJVGV4dHVyZUluZm8+Pj4gPSBbXTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCB0ZXh0dXJlIG9mIHRleHR1cmVzKSB7XHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5leHBvcnRUZXh0dXJlQXN5bmModGV4dHVyZSwgbWltZVR5cGUpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuXHJcbiAgICAgICAgYXdhaXQgdGhpcy5fZXhwb3J0ZXIuX2V4dGVuc2lvbnNQb3N0RXhwb3J0TWF0ZXJpYWxBc3luYyhcImV4cG9ydE1hdGVyaWFsXCIsIGdsVEZNYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIF9nZXRJbWFnZURhdGFBc3luYyhidWZmZXI6IFVpbnQ4QXJyYXkgfCBGbG9hdDMyQXJyYXksIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBtaW1lVHlwZTogSW1hZ2VNaW1lVHlwZSk6IFByb21pc2U8QXJyYXlCdWZmZXI+IHtcclxuICAgICAgICBjb25zdCB0ZXh0dXJlVHlwZSA9IENvbnN0YW50cy5URVhUVVJFVFlQRV9VTlNJR05FRF9CWVRFO1xyXG5cclxuICAgICAgICBjb25zdCBob3N0aW5nU2NlbmUgPSB0aGlzLl9leHBvcnRlci5fYmFieWxvblNjZW5lO1xyXG4gICAgICAgIGNvbnN0IGVuZ2luZSA9IGhvc3RpbmdTY2VuZS5nZXRFbmdpbmUoKTtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIGEgdGVtcG9yYXJ5IHRleHR1cmUgd2l0aCB0aGUgdGV4dHVyZSBidWZmZXIgZGF0YVxyXG4gICAgICAgIGNvbnN0IHRlbXBUZXh0dXJlID0gZW5naW5lLmNyZWF0ZVJhd1RleHR1cmUoYnVmZmVyLCB3aWR0aCwgaGVpZ2h0LCBDb25zdGFudHMuVEVYVFVSRUZPUk1BVF9SR0JBLCBmYWxzZSwgdHJ1ZSwgVGV4dHVyZS5ORUFSRVNUX1NBTVBMSU5HTU9ERSwgbnVsbCwgdGV4dHVyZVR5cGUpO1xyXG5cclxuICAgICAgICBlbmdpbmUuaXNXZWJHUFUgPyBhd2FpdCBpbXBvcnQoXCJjb3JlL1NoYWRlcnNXR1NML3Bhc3MuZnJhZ21lbnRcIikgOiBhd2FpdCBpbXBvcnQoXCJjb3JlL1NoYWRlcnMvcGFzcy5mcmFnbWVudFwiKTtcclxuICAgICAgICBhd2FpdCBUZXh0dXJlVG9vbHMuQXBwbHlQb3N0UHJvY2VzcyhcInBhc3NcIiwgdGVtcFRleHR1cmUsIGhvc3RpbmdTY2VuZSwgdGV4dHVyZVR5cGUsIENvbnN0YW50cy5URVhUVVJFX05FQVJFU1RfU0FNUExJTkdNT0RFLCBDb25zdGFudHMuVEVYVFVSRUZPUk1BVF9SR0JBKTtcclxuXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGVuZ2luZS5fcmVhZFRleHR1cmVQaXhlbHModGVtcFRleHR1cmUsIHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgICAgICByZXR1cm4gKGF3YWl0IER1bXBUb29scy5EdW1wRGF0YUFzeW5jKHdpZHRoLCBoZWlnaHQsIGRhdGEsIG1pbWVUeXBlLCB1bmRlZmluZWQsIHRydWUsIHRydWUpKSBhcyBBcnJheUJ1ZmZlcjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlc2l6ZXMgdGhlIHR3byBzb3VyY2UgdGV4dHVyZXMgdG8gdGhlIHNhbWUgZGltZW5zaW9ucy4gIElmIGEgdGV4dHVyZSBpcyBudWxsLCBhIGRlZmF1bHQgd2hpdGUgdGV4dHVyZSBpcyBnZW5lcmF0ZWQuICBJZiBib3RoIHRleHR1cmVzIGFyZSBudWxsLCByZXR1cm5zIG51bGxcclxuICAgICAqIEBwYXJhbSB0ZXh0dXJlMSBmaXJzdCB0ZXh0dXJlIHRvIHJlc2l6ZVxyXG4gICAgICogQHBhcmFtIHRleHR1cmUyIHNlY29uZCB0ZXh0dXJlIHRvIHJlc2l6ZVxyXG4gICAgICogQHBhcmFtIHNjZW5lIGJhYnlsb25qcyBzY2VuZVxyXG4gICAgICogQHJldHVybnMgcmVzaXplZCB0ZXh0dXJlcyBvciBudWxsXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX3Jlc2l6ZVRleHR1cmVzVG9TYW1lRGltZW5zaW9ucyh0ZXh0dXJlMTogTnVsbGFibGU8QmFzZVRleHR1cmU+LCB0ZXh0dXJlMjogTnVsbGFibGU8QmFzZVRleHR1cmU+LCBzY2VuZTogU2NlbmUpOiB7IHRleHR1cmUxOiBCYXNlVGV4dHVyZTsgdGV4dHVyZTI6IEJhc2VUZXh0dXJlIH0ge1xyXG4gICAgICAgIGNvbnN0IHRleHR1cmUxU2l6ZSA9IHRleHR1cmUxID8gdGV4dHVyZTEuZ2V0U2l6ZSgpIDogeyB3aWR0aDogMCwgaGVpZ2h0OiAwIH07XHJcbiAgICAgICAgY29uc3QgdGV4dHVyZTJTaXplID0gdGV4dHVyZTIgPyB0ZXh0dXJlMi5nZXRTaXplKCkgOiB7IHdpZHRoOiAwLCBoZWlnaHQ6IDAgfTtcclxuICAgICAgICBsZXQgcmVzaXplZFRleHR1cmUxOiBCYXNlVGV4dHVyZTtcclxuICAgICAgICBsZXQgcmVzaXplZFRleHR1cmUyOiBCYXNlVGV4dHVyZTtcclxuXHJcbiAgICAgICAgaWYgKHRleHR1cmUxU2l6ZS53aWR0aCA8IHRleHR1cmUyU2l6ZS53aWR0aCkge1xyXG4gICAgICAgICAgICBpZiAodGV4dHVyZTEgJiYgdGV4dHVyZTEgaW5zdGFuY2VvZiBUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICByZXNpemVkVGV4dHVyZTEgPSBUZXh0dXJlVG9vbHMuQ3JlYXRlUmVzaXplZENvcHkodGV4dHVyZTEsIHRleHR1cmUyU2l6ZS53aWR0aCwgdGV4dHVyZTJTaXplLmhlaWdodCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXNpemVkVGV4dHVyZTEgPSBDcmVhdGVXaGl0ZVRleHR1cmUodGV4dHVyZTJTaXplLndpZHRoLCB0ZXh0dXJlMlNpemUuaGVpZ2h0LCBzY2VuZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzaXplZFRleHR1cmUyID0gdGV4dHVyZTIhO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGV4dHVyZTFTaXplLndpZHRoID4gdGV4dHVyZTJTaXplLndpZHRoKSB7XHJcbiAgICAgICAgICAgIGlmICh0ZXh0dXJlMiAmJiB0ZXh0dXJlMiBpbnN0YW5jZW9mIFRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgIHJlc2l6ZWRUZXh0dXJlMiA9IFRleHR1cmVUb29scy5DcmVhdGVSZXNpemVkQ29weSh0ZXh0dXJlMiwgdGV4dHVyZTFTaXplLndpZHRoLCB0ZXh0dXJlMVNpemUuaGVpZ2h0LCB0cnVlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlc2l6ZWRUZXh0dXJlMiA9IENyZWF0ZVdoaXRlVGV4dHVyZSh0ZXh0dXJlMVNpemUud2lkdGgsIHRleHR1cmUxU2l6ZS5oZWlnaHQsIHNjZW5lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXNpemVkVGV4dHVyZTEgPSB0ZXh0dXJlMSE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVzaXplZFRleHR1cmUxID0gdGV4dHVyZTEhO1xyXG4gICAgICAgICAgICByZXNpemVkVGV4dHVyZTIgPSB0ZXh0dXJlMiE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0ZXh0dXJlMTogcmVzaXplZFRleHR1cmUxISxcclxuICAgICAgICAgICAgdGV4dHVyZTI6IHJlc2l6ZWRUZXh0dXJlMiEsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgU3BlY3VsYXIgR2xvc3NpbmVzcyBUZXh0dXJlcyB0byBNZXRhbGxpYyBSb3VnaG5lc3NcclxuICAgICAqIFNlZSBsaW5rIGJlbG93IGZvciBpbmZvIG9uIHRoZSBtYXRlcmlhbCBjb252ZXJzaW9ucyBmcm9tIFBCUiBNZXRhbGxpYy9Sb3VnaG5lc3MgYW5kIFNwZWN1bGFyL0dsb3NzaW5lc3NcclxuICAgICAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFpbi9leHRlbnNpb25zLzIuMC9BcmNoaXZlZC9LSFJfbWF0ZXJpYWxzX3BiclNwZWN1bGFyR2xvc3NpbmVzcy9leGFtcGxlcy9jb252ZXJ0LWJldHdlZW4td29ya2Zsb3dzLWJqcy9qcy9iYWJ5bG9uLnBiclV0aWxpdGllcy5qc1xyXG4gICAgICogQHBhcmFtIGRpZmZ1c2VUZXh0dXJlIHRleHR1cmUgdXNlZCB0byBzdG9yZSBkaWZmdXNlIGluZm9ybWF0aW9uXHJcbiAgICAgKiBAcGFyYW0gc3BlY3VsYXJHbG9zc2luZXNzVGV4dHVyZSB0ZXh0dXJlIHVzZWQgdG8gc3RvcmUgc3BlY3VsYXIgYW5kIGdsb3NzaW5lc3MgaW5mb3JtYXRpb25cclxuICAgICAqIEBwYXJhbSBmYWN0b3JzIHNwZWN1bGFyIGdsb3NzaW5lc3MgbWF0ZXJpYWwgZmFjdG9yc1xyXG4gICAgICogQHBhcmFtIG1pbWVUeXBlIHRoZSBtaW1lIHR5cGUgdG8gdXNlIGZvciB0aGUgdGV4dHVyZVxyXG4gICAgICogQHJldHVybnMgcGJyIG1ldGFsbGljIHJvdWdobmVzcyBpbnRlcmZhY2Ugb3IgbnVsbFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGFzeW5jIF9jb252ZXJ0U3BlY3VsYXJHbG9zc2luZXNzVGV4dHVyZXNUb01ldGFsbGljUm91Z2huZXNzQXN5bmMoXHJcbiAgICAgICAgZGlmZnVzZVRleHR1cmU6IE51bGxhYmxlPEJhc2VUZXh0dXJlPixcclxuICAgICAgICBzcGVjdWxhckdsb3NzaW5lc3NUZXh0dXJlOiBOdWxsYWJsZTxCYXNlVGV4dHVyZT4sXHJcbiAgICAgICAgZmFjdG9yczogSVBCUlNwZWN1bGFyR2xvc3NpbmVzcyxcclxuICAgICAgICBtaW1lVHlwZTogSW1hZ2VNaW1lVHlwZVxyXG4gICAgKTogUHJvbWlzZTxJUEJSTWV0YWxsaWNSb3VnaG5lc3M+IHtcclxuICAgICAgICBjb25zdCBwcm9taXNlcyA9IG5ldyBBcnJheTxQcm9taXNlPHZvaWQ+PigpO1xyXG4gICAgICAgIGlmICghKGRpZmZ1c2VUZXh0dXJlIHx8IHNwZWN1bGFyR2xvc3NpbmVzc1RleHR1cmUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcImRpZmZ1c2UgYW5kIHNwZWN1bGFyIGdsb3NzaW5lc3MgdGV4dHVyZXMgYXJlIG5vdCBkZWZpbmVkIVwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNjZW5lOiBOdWxsYWJsZTxTY2VuZT4gPSBkaWZmdXNlVGV4dHVyZSA/IGRpZmZ1c2VUZXh0dXJlLmdldFNjZW5lKCkgOiBzcGVjdWxhckdsb3NzaW5lc3NUZXh0dXJlID8gc3BlY3VsYXJHbG9zc2luZXNzVGV4dHVyZS5nZXRTY2VuZSgpIDogbnVsbDtcclxuICAgICAgICBpZiAoc2NlbmUpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzaXplZFRleHR1cmVzID0gdGhpcy5fcmVzaXplVGV4dHVyZXNUb1NhbWVEaW1lbnNpb25zKGRpZmZ1c2VUZXh0dXJlLCBzcGVjdWxhckdsb3NzaW5lc3NUZXh0dXJlLCBzY2VuZSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkaWZmdXNlU2l6ZSA9IHJlc2l6ZWRUZXh0dXJlcy50ZXh0dXJlMT8uZ2V0U2l6ZSgpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGRpZmZ1c2VCdWZmZXI6IEZsb2F0MzJBcnJheTtcclxuICAgICAgICAgICAgbGV0IHNwZWN1bGFyR2xvc3NpbmVzc0J1ZmZlcjogRmxvYXQzMkFycmF5O1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBkaWZmdXNlU2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gZGlmZnVzZVNpemUuaGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZGlmZnVzZVBpeGVscyA9IGF3YWl0IHJlc2l6ZWRUZXh0dXJlcy50ZXh0dXJlMS5yZWFkUGl4ZWxzKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNwZWN1bGFyUGl4ZWxzID0gYXdhaXQgcmVzaXplZFRleHR1cmVzLnRleHR1cmUyLnJlYWRQaXhlbHMoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChkaWZmdXNlUGl4ZWxzKSB7XHJcbiAgICAgICAgICAgICAgICBkaWZmdXNlQnVmZmVyID0gQ29udmVydFBpeGVsQXJyYXlUb0Zsb2F0MzIoZGlmZnVzZVBpeGVscyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXCJGYWlsZWQgdG8gcmV0cmlldmUgcGl4ZWxzIGZyb20gZGlmZnVzZSB0ZXh0dXJlIVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc3BlY3VsYXJQaXhlbHMpIHtcclxuICAgICAgICAgICAgICAgIHNwZWN1bGFyR2xvc3NpbmVzc0J1ZmZlciA9IENvbnZlcnRQaXhlbEFycmF5VG9GbG9hdDMyKHNwZWN1bGFyUGl4ZWxzKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcIkZhaWxlZCB0byByZXRyaWV2ZSBwaXhlbHMgZnJvbSBzcGVjdWxhciBnbG9zc2luZXNzIHRleHR1cmUhXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBieXRlTGVuZ3RoID0gc3BlY3VsYXJHbG9zc2luZXNzQnVmZmVyLmJ5dGVMZW5ndGg7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtZXRhbGxpY1JvdWdobmVzc0J1ZmZlciA9IG5ldyBVaW50OEFycmF5KGJ5dGVMZW5ndGgpO1xyXG4gICAgICAgICAgICBjb25zdCBiYXNlQ29sb3JCdWZmZXIgPSBuZXcgVWludDhBcnJheShieXRlTGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHN0cmlkZVNpemUgPSA0O1xyXG4gICAgICAgICAgICBjb25zdCBtYXhCYXNlQ29sb3IgPSBibGFjaztcclxuICAgICAgICAgICAgbGV0IG1heE1ldGFsbGljID0gMDtcclxuICAgICAgICAgICAgbGV0IG1heFJvdWdobmVzcyA9IDA7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBoID0gMDsgaCA8IGhlaWdodDsgKytoKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB3ID0gMDsgdyA8IHdpZHRoOyArK3cpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvZmZzZXQgPSAod2lkdGggKiBoICsgdykgKiBzdHJpZGVTaXplO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkaWZmdXNlQ29sb3IgPSBuZXcgQ29sb3IzKGRpZmZ1c2VCdWZmZXJbb2Zmc2V0XSwgZGlmZnVzZUJ1ZmZlcltvZmZzZXQgKyAxXSwgZGlmZnVzZUJ1ZmZlcltvZmZzZXQgKyAyXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvTGluZWFyU3BhY2Uoc2NlbmUuZ2V0RW5naW5lKCkudXNlRXhhY3RTcmdiQ29udmVyc2lvbnMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tdWx0aXBseShmYWN0b3JzLmRpZmZ1c2VDb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3BlY3VsYXJDb2xvciA9IG5ldyBDb2xvcjMoc3BlY3VsYXJHbG9zc2luZXNzQnVmZmVyW29mZnNldF0sIHNwZWN1bGFyR2xvc3NpbmVzc0J1ZmZlcltvZmZzZXQgKyAxXSwgc3BlY3VsYXJHbG9zc2luZXNzQnVmZmVyW29mZnNldCArIDJdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudG9MaW5lYXJTcGFjZShzY2VuZS5nZXRFbmdpbmUoKS51c2VFeGFjdFNyZ2JDb252ZXJzaW9ucylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm11bHRpcGx5KGZhY3RvcnMuc3BlY3VsYXJDb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZ2xvc3NpbmVzcyA9IHNwZWN1bGFyR2xvc3NpbmVzc0J1ZmZlcltvZmZzZXQgKyAzXSAqIGZhY3RvcnMuZ2xvc3NpbmVzcztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3BlY3VsYXJHbG9zc2luZXNzOiBJUEJSU3BlY3VsYXJHbG9zc2luZXNzID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaWZmdXNlQ29sb3I6IGRpZmZ1c2VDb2xvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3BlY3VsYXJDb2xvcjogc3BlY3VsYXJDb2xvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2xvc3NpbmVzczogZ2xvc3NpbmVzcyxcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXRhbGxpY1JvdWdobmVzcyA9IHRoaXMuX2NvbnZlcnRTcGVjdWxhckdsb3NzaW5lc3NUb01ldGFsbGljUm91Z2huZXNzKHNwZWN1bGFyR2xvc3NpbmVzcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4QmFzZUNvbG9yLnIgPSBNYXRoLm1heChtYXhCYXNlQ29sb3IuciwgbWV0YWxsaWNSb3VnaG5lc3MuYmFzZUNvbG9yLnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heEJhc2VDb2xvci5nID0gTWF0aC5tYXgobWF4QmFzZUNvbG9yLmcsIG1ldGFsbGljUm91Z2huZXNzLmJhc2VDb2xvci5nKTtcclxuICAgICAgICAgICAgICAgICAgICBtYXhCYXNlQ29sb3IuYiA9IE1hdGgubWF4KG1heEJhc2VDb2xvci5iLCBtZXRhbGxpY1JvdWdobmVzcy5iYXNlQ29sb3IuYik7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4TWV0YWxsaWMgPSBNYXRoLm1heChtYXhNZXRhbGxpYywgbWV0YWxsaWNSb3VnaG5lc3MubWV0YWxsaWMhKTtcclxuICAgICAgICAgICAgICAgICAgICBtYXhSb3VnaG5lc3MgPSBNYXRoLm1heChtYXhSb3VnaG5lc3MsIG1ldGFsbGljUm91Z2huZXNzLnJvdWdobmVzcyEpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBiYXNlQ29sb3JCdWZmZXJbb2Zmc2V0XSA9IG1ldGFsbGljUm91Z2huZXNzLmJhc2VDb2xvci5yICogMjU1O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhc2VDb2xvckJ1ZmZlcltvZmZzZXQgKyAxXSA9IG1ldGFsbGljUm91Z2huZXNzLmJhc2VDb2xvci5nICogMjU1O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhc2VDb2xvckJ1ZmZlcltvZmZzZXQgKyAyXSA9IG1ldGFsbGljUm91Z2huZXNzLmJhc2VDb2xvci5iICogMjU1O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhc2VDb2xvckJ1ZmZlcltvZmZzZXQgKyAzXSA9IHJlc2l6ZWRUZXh0dXJlcy50ZXh0dXJlMS5oYXNBbHBoYSA/IGRpZmZ1c2VCdWZmZXJbb2Zmc2V0ICsgM10gKiAyNTUgOiAyNTU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG1ldGFsbGljUm91Z2huZXNzQnVmZmVyW29mZnNldF0gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGFsbGljUm91Z2huZXNzQnVmZmVyW29mZnNldCArIDFdID0gbWV0YWxsaWNSb3VnaG5lc3Mucm91Z2huZXNzISAqIDI1NTtcclxuICAgICAgICAgICAgICAgICAgICBtZXRhbGxpY1JvdWdobmVzc0J1ZmZlcltvZmZzZXQgKyAyXSA9IG1ldGFsbGljUm91Z2huZXNzLm1ldGFsbGljISAqIDI1NTtcclxuICAgICAgICAgICAgICAgICAgICBtZXRhbGxpY1JvdWdobmVzc0J1ZmZlcltvZmZzZXQgKyAzXSA9IDI1NTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gUmV0cmlldmVzIHRoZSBtZXRhbGxpYyByb3VnaG5lc3MgZmFjdG9ycyBmcm9tIHRoZSBtYXhpbXVtIHRleHR1cmUgdmFsdWVzLlxyXG4gICAgICAgICAgICBjb25zdCBtZXRhbGxpY1JvdWdobmVzc0ZhY3RvcnM6IElQQlJNZXRhbGxpY1JvdWdobmVzcyA9IHtcclxuICAgICAgICAgICAgICAgIGJhc2VDb2xvcjogbWF4QmFzZUNvbG9yLFxyXG4gICAgICAgICAgICAgICAgbWV0YWxsaWM6IG1heE1ldGFsbGljLFxyXG4gICAgICAgICAgICAgICAgcm91Z2huZXNzOiBtYXhSb3VnaG5lc3MsXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBsZXQgd3JpdGVPdXRNZXRhbGxpY1JvdWdobmVzc1RleHR1cmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgbGV0IHdyaXRlT3V0QmFzZUNvbG9yVGV4dHVyZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaCA9IDA7IGggPCBoZWlnaHQ7ICsraCkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgdyA9IDA7IHcgPCB3aWR0aDsgKyt3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVzdGluYXRpb25PZmZzZXQgPSAod2lkdGggKiBoICsgdykgKiBzdHJpZGVTaXplO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBiYXNlQ29sb3JCdWZmZXJbZGVzdGluYXRpb25PZmZzZXRdIC89IG1ldGFsbGljUm91Z2huZXNzRmFjdG9ycy5iYXNlQ29sb3IuciA+IGVwc2lsb24gPyBtZXRhbGxpY1JvdWdobmVzc0ZhY3RvcnMuYmFzZUNvbG9yLnIgOiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhc2VDb2xvckJ1ZmZlcltkZXN0aW5hdGlvbk9mZnNldCArIDFdIC89IG1ldGFsbGljUm91Z2huZXNzRmFjdG9ycy5iYXNlQ29sb3IuZyA+IGVwc2lsb24gPyBtZXRhbGxpY1JvdWdobmVzc0ZhY3RvcnMuYmFzZUNvbG9yLmcgOiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhc2VDb2xvckJ1ZmZlcltkZXN0aW5hdGlvbk9mZnNldCArIDJdIC89IG1ldGFsbGljUm91Z2huZXNzRmFjdG9ycy5iYXNlQ29sb3IuYiA+IGVwc2lsb24gPyBtZXRhbGxpY1JvdWdobmVzc0ZhY3RvcnMuYmFzZUNvbG9yLmIgOiAxO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lYXJCYXNlQ29sb3JQaXhlbCA9IENvbG9yMy5Gcm9tSW50cyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZUNvbG9yQnVmZmVyW2Rlc3RpbmF0aW9uT2Zmc2V0XSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZUNvbG9yQnVmZmVyW2Rlc3RpbmF0aW9uT2Zmc2V0ICsgMV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VDb2xvckJ1ZmZlcltkZXN0aW5hdGlvbk9mZnNldCArIDJdXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzUkdCQmFzZUNvbG9yUGl4ZWwgPSBsaW5lYXJCYXNlQ29sb3JQaXhlbC50b0dhbW1hU3BhY2Uoc2NlbmUuZ2V0RW5naW5lKCkudXNlRXhhY3RTcmdiQ29udmVyc2lvbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhc2VDb2xvckJ1ZmZlcltkZXN0aW5hdGlvbk9mZnNldF0gPSBzUkdCQmFzZUNvbG9yUGl4ZWwuciAqIDI1NTtcclxuICAgICAgICAgICAgICAgICAgICBiYXNlQ29sb3JCdWZmZXJbZGVzdGluYXRpb25PZmZzZXQgKyAxXSA9IHNSR0JCYXNlQ29sb3JQaXhlbC5nICogMjU1O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhc2VDb2xvckJ1ZmZlcltkZXN0aW5hdGlvbk9mZnNldCArIDJdID0gc1JHQkJhc2VDb2xvclBpeGVsLmIgKiAyNTU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghc1JHQkJhc2VDb2xvclBpeGVsLmVxdWFsc1dpdGhFcHNpbG9uKHdoaXRlLCBlcHNpbG9uKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3cml0ZU91dEJhc2VDb2xvclRleHR1cmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbWV0YWxsaWNSb3VnaG5lc3NCdWZmZXJbZGVzdGluYXRpb25PZmZzZXQgKyAxXSAvPSBtZXRhbGxpY1JvdWdobmVzc0ZhY3RvcnMucm91Z2huZXNzISA+IGVwc2lsb24gPyBtZXRhbGxpY1JvdWdobmVzc0ZhY3RvcnMucm91Z2huZXNzISA6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0YWxsaWNSb3VnaG5lc3NCdWZmZXJbZGVzdGluYXRpb25PZmZzZXQgKyAyXSAvPSBtZXRhbGxpY1JvdWdobmVzc0ZhY3RvcnMubWV0YWxsaWMhID4gZXBzaWxvbiA/IG1ldGFsbGljUm91Z2huZXNzRmFjdG9ycy5tZXRhbGxpYyEgOiAxO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXRhbGxpY1JvdWdobmVzc1BpeGVsID0gQ29sb3IzLkZyb21JbnRzKDI1NSwgbWV0YWxsaWNSb3VnaG5lc3NCdWZmZXJbZGVzdGluYXRpb25PZmZzZXQgKyAxXSwgbWV0YWxsaWNSb3VnaG5lc3NCdWZmZXJbZGVzdGluYXRpb25PZmZzZXQgKyAyXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghbWV0YWxsaWNSb3VnaG5lc3NQaXhlbC5lcXVhbHNXaXRoRXBzaWxvbih3aGl0ZSwgZXBzaWxvbikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3JpdGVPdXRNZXRhbGxpY1JvdWdobmVzc1RleHR1cmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHdyaXRlT3V0TWV0YWxsaWNSb3VnaG5lc3NUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2dldEltYWdlRGF0YUFzeW5jKG1ldGFsbGljUm91Z2huZXNzQnVmZmVyLCB3aWR0aCwgaGVpZ2h0LCBtaW1lVHlwZSkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRhbGxpY1JvdWdobmVzc0ZhY3RvcnMubWV0YWxsaWNSb3VnaG5lc3NUZXh0dXJlRGF0YSA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHdyaXRlT3V0QmFzZUNvbG9yVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9nZXRJbWFnZURhdGFBc3luYyhiYXNlQ29sb3JCdWZmZXIsIHdpZHRoLCBoZWlnaHQsIG1pbWVUeXBlKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGFsbGljUm91Z2huZXNzRmFjdG9ycy5iYXNlQ29sb3JUZXh0dXJlRGF0YSA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWV0YWxsaWNSb3VnaG5lc3NGYWN0b3JzO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXCJfQ29udmVydFNwZWN1bGFyR2xvc3NpbmVzc1RleHR1cmVzVG9NZXRhbGxpY1JvdWdobmVzczogU2NlbmUgZnJvbSB0ZXh0dXJlcyBpcyBtaXNzaW5nIVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0cyBzcGVjdWxhciBnbG9zc2luZXNzIG1hdGVyaWFsIHByb3BlcnRpZXMgdG8gbWV0YWxsaWMgcm91Z2huZXNzXHJcbiAgICAgKiBAcGFyYW0gc3BlY3VsYXJHbG9zc2luZXNzIGludGVyZmFjZSB3aXRoIHNwZWN1bGFyIGdsb3NzaW5lc3MgbWF0ZXJpYWwgcHJvcGVydGllc1xyXG4gICAgICogQHJldHVybnMgaW50ZXJmYWNlIHdpdGggbWV0YWxsaWMgcm91Z2huZXNzIG1hdGVyaWFsIHByb3BlcnRpZXNcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfY29udmVydFNwZWN1bGFyR2xvc3NpbmVzc1RvTWV0YWxsaWNSb3VnaG5lc3Moc3BlY3VsYXJHbG9zc2luZXNzOiBJUEJSU3BlY3VsYXJHbG9zc2luZXNzKTogSVBCUk1ldGFsbGljUm91Z2huZXNzIHtcclxuICAgICAgICBjb25zdCBkaWZmdXNlUGVyY2VpdmVkQnJpZ2h0bmVzcyA9IHRoaXMuX2dldFBlcmNlaXZlZEJyaWdodG5lc3Moc3BlY3VsYXJHbG9zc2luZXNzLmRpZmZ1c2VDb2xvcik7XHJcbiAgICAgICAgY29uc3Qgc3BlY3VsYXJQZXJjZWl2ZWRCcmlnaHRuZXNzID0gdGhpcy5fZ2V0UGVyY2VpdmVkQnJpZ2h0bmVzcyhzcGVjdWxhckdsb3NzaW5lc3Muc3BlY3VsYXJDb2xvcik7XHJcbiAgICAgICAgY29uc3Qgb25lTWludXNTcGVjdWxhclN0cmVuZ3RoID0gMSAtIHRoaXMuX2dldE1heENvbXBvbmVudChzcGVjdWxhckdsb3NzaW5lc3Muc3BlY3VsYXJDb2xvcik7XHJcbiAgICAgICAgY29uc3QgbWV0YWxsaWMgPSBfU29sdmVNZXRhbGxpYyhkaWZmdXNlUGVyY2VpdmVkQnJpZ2h0bmVzcywgc3BlY3VsYXJQZXJjZWl2ZWRCcmlnaHRuZXNzLCBvbmVNaW51c1NwZWN1bGFyU3RyZW5ndGgpO1xyXG4gICAgICAgIGNvbnN0IGJhc2VDb2xvckZyb21EaWZmdXNlID0gc3BlY3VsYXJHbG9zc2luZXNzLmRpZmZ1c2VDb2xvci5zY2FsZShvbmVNaW51c1NwZWN1bGFyU3RyZW5ndGggLyAoMS4wIC0gZGllbGVjdHJpY1NwZWN1bGFyLnIpIC8gTWF0aC5tYXgoMSAtIG1ldGFsbGljKSk7XHJcbiAgICAgICAgY29uc3QgYmFzZUNvbG9yRnJvbVNwZWN1bGFyID0gc3BlY3VsYXJHbG9zc2luZXNzLnNwZWN1bGFyQ29sb3Iuc3VidHJhY3QoZGllbGVjdHJpY1NwZWN1bGFyLnNjYWxlKDEgLSBtZXRhbGxpYykpLnNjYWxlKDEgLyBNYXRoLm1heChtZXRhbGxpYykpO1xyXG4gICAgICAgIGxldCBiYXNlQ29sb3IgPSBDb2xvcjMuTGVycChiYXNlQ29sb3JGcm9tRGlmZnVzZSwgYmFzZUNvbG9yRnJvbVNwZWN1bGFyLCBtZXRhbGxpYyAqIG1ldGFsbGljKTtcclxuICAgICAgICBiYXNlQ29sb3IgPSBiYXNlQ29sb3IuY2xhbXBUb1JlZigwLCAxLCBiYXNlQ29sb3IpO1xyXG5cclxuICAgICAgICBjb25zdCBtZXRhbGxpY1JvdWdobmVzczogSVBCUk1ldGFsbGljUm91Z2huZXNzID0ge1xyXG4gICAgICAgICAgICBiYXNlQ29sb3I6IGJhc2VDb2xvcixcclxuICAgICAgICAgICAgbWV0YWxsaWM6IG1ldGFsbGljLFxyXG4gICAgICAgICAgICByb3VnaG5lc3M6IDEgLSBzcGVjdWxhckdsb3NzaW5lc3MuZ2xvc3NpbmVzcyxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gbWV0YWxsaWNSb3VnaG5lc3M7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxjdWxhdGVzIHRoZSBzdXJmYWNlIHJlZmxlY3RhbmNlLCBpbmRlcGVuZGVudCBvZiBsaWdodGluZyBjb25kaXRpb25zXHJcbiAgICAgKiBAcGFyYW0gY29sb3IgQ29sb3Igc291cmNlIHRvIGNhbGN1bGF0ZSBicmlnaHRuZXNzIGZyb21cclxuICAgICAqIEByZXR1cm5zIG51bWJlciByZXByZXNlbnRpbmcgdGhlIHBlcmNlaXZlZCBicmlnaHRuZXNzLCBvciB6ZXJvIGlmIGNvbG9yIGlzIHVuZGVmaW5lZFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9nZXRQZXJjZWl2ZWRCcmlnaHRuZXNzKGNvbG9yOiBDb2xvcjMpOiBudW1iZXIge1xyXG4gICAgICAgIGlmIChjb2xvcikge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KDAuMjk5ICogY29sb3IuciAqIGNvbG9yLnIgKyAwLjU4NyAqIGNvbG9yLmcgKiBjb2xvci5nICsgMC4xMTQgKiBjb2xvci5iICogY29sb3IuYik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgbWF4aW11bSBjb2xvciBjb21wb25lbnQgdmFsdWVcclxuICAgICAqIEBwYXJhbSBjb2xvclxyXG4gICAgICogQHJldHVybnMgbWF4aW11bSBjb2xvciBjb21wb25lbnQgdmFsdWUsIG9yIHplcm8gaWYgY29sb3IgaXMgbnVsbCBvciB1bmRlZmluZWRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfZ2V0TWF4Q29tcG9uZW50KGNvbG9yOiBDb2xvcjMpOiBudW1iZXIge1xyXG4gICAgICAgIGlmIChjb2xvcikge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoY29sb3IuciwgTWF0aC5tYXgoY29sb3IuZywgY29sb3IuYikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgYSBQQlJNYXRlcmlhbCAoTWV0YWxsaWMvUm91Z2huZXNzKSB0byBNZXRhbGxpYyBSb3VnaG5lc3MgZmFjdG9yc1xyXG4gICAgICogQHBhcmFtIGJhYnlsb25QQlJNYXRlcmlhbCBCSlMgUEJSIE1ldGFsbGljIFJvdWdobmVzcyBNYXRlcmlhbFxyXG4gICAgICogQHBhcmFtIG1pbWVUeXBlIG1pbWUgdHlwZSB0byB1c2UgZm9yIHRoZSB0ZXh0dXJlc1xyXG4gICAgICogQHBhcmFtIGdsVEZQYnJNZXRhbGxpY1JvdWdobmVzcyBnbFRGIFBCUiBNZXRhbGxpYyBSb3VnaG5lc3MgaW50ZXJmYWNlXHJcbiAgICAgKiBAcGFyYW0gaGFzVVZzIHNwZWNpZmllcyBpZiB0ZXh0dXJlIGNvb3JkaW5hdGVzIGFyZSBwcmVzZW50IG9uIHRoZSBzdWJtZXNoIHRvIGRldGVybWluZSBpZiB0ZXh0dXJlcyBzaG91bGQgYmUgYXBwbGllZFxyXG4gICAgICogQHJldHVybnMgZ2xURiBQQlIgTWV0YWxsaWMgUm91Z2huZXNzIGZhY3RvcnNcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBhc3luYyBfY29udmVydE1ldGFsUm91Z2hGYWN0b3JzVG9NZXRhbGxpY1JvdWdobmVzc0FzeW5jKFxyXG4gICAgICAgIGJhYnlsb25QQlJNYXRlcmlhbDogUEJSQmFzZU1hdGVyaWFsLFxyXG4gICAgICAgIG1pbWVUeXBlOiBJbWFnZU1pbWVUeXBlLFxyXG4gICAgICAgIGdsVEZQYnJNZXRhbGxpY1JvdWdobmVzczogSU1hdGVyaWFsUGJyTWV0YWxsaWNSb3VnaG5lc3MsXHJcbiAgICAgICAgaGFzVVZzOiBib29sZWFuXHJcbiAgICApOiBQcm9taXNlPElQQlJNZXRhbGxpY1JvdWdobmVzcz4ge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2VzOiBQcm9taXNlPHZvaWQ+W10gPSBbXTtcclxuXHJcbiAgICAgICAgY29uc3QgbWV0YWxsaWNSb3VnaG5lc3M6IElQQlJNZXRhbGxpY1JvdWdobmVzcyA9IHtcclxuICAgICAgICAgICAgYmFzZUNvbG9yOiBiYWJ5bG9uUEJSTWF0ZXJpYWwuX2FsYmVkb0NvbG9yLFxyXG4gICAgICAgICAgICBtZXRhbGxpYzogYmFieWxvblBCUk1hdGVyaWFsLl9tZXRhbGxpYyxcclxuICAgICAgICAgICAgcm91Z2huZXNzOiBiYWJ5bG9uUEJSTWF0ZXJpYWwuX3JvdWdobmVzcyxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAoaGFzVVZzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFsYmVkb1RleHR1cmUgPSBiYWJ5bG9uUEJSTWF0ZXJpYWwuX2FsYmVkb1RleHR1cmU7XHJcbiAgICAgICAgICAgIGlmIChhbGJlZG9UZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXhwb3J0VGV4dHVyZUFzeW5jKGJhYnlsb25QQlJNYXRlcmlhbC5fYWxiZWRvVGV4dHVyZSEsIG1pbWVUeXBlKS50aGVuKChnbFRGVGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2xURlRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsVEZQYnJNZXRhbGxpY1JvdWdobmVzcy5iYXNlQ29sb3JUZXh0dXJlID0gZ2xURlRleHR1cmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBtZXRhbGxpY1RleHR1cmUgPSBiYWJ5bG9uUEJSTWF0ZXJpYWwuX21ldGFsbGljVGV4dHVyZTtcclxuICAgICAgICAgICAgaWYgKG1ldGFsbGljVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4cG9ydFRleHR1cmVBc3luYyhtZXRhbGxpY1RleHR1cmUsIG1pbWVUeXBlKS50aGVuKChnbFRGVGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2xURlRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsVEZQYnJNZXRhbGxpY1JvdWdobmVzcy5tZXRhbGxpY1JvdWdobmVzc1RleHR1cmUgPSBnbFRGVGV4dHVyZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocHJvbWlzZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLl9leHBvcnRlci5fbWF0ZXJpYWxOZWVkc1VWc1NldC5hZGQoYmFieWxvblBCUk1hdGVyaWFsKTtcclxuICAgICAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG1ldGFsbGljUm91Z2huZXNzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2dldFRleHR1cmVTYW1wbGVyKHRleHR1cmU6IE51bGxhYmxlPEJhc2VUZXh0dXJlPik6IElTYW1wbGVyIHtcclxuICAgICAgICBjb25zdCBzYW1wbGVyOiBJU2FtcGxlciA9IHt9O1xyXG4gICAgICAgIGlmICghdGV4dHVyZSB8fCAhKHRleHR1cmUgaW5zdGFuY2VvZiBUZXh0dXJlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gc2FtcGxlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHdyYXBTID0gdGhpcy5fZ2V0R0xURlRleHR1cmVXcmFwTW9kZSh0ZXh0dXJlLndyYXBVKTtcclxuICAgICAgICBpZiAod3JhcFMgIT09IFRleHR1cmVXcmFwTW9kZS5SRVBFQVQpIHtcclxuICAgICAgICAgICAgc2FtcGxlci53cmFwUyA9IHdyYXBTO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgd3JhcFQgPSB0aGlzLl9nZXRHTFRGVGV4dHVyZVdyYXBNb2RlKHRleHR1cmUud3JhcFYpO1xyXG4gICAgICAgIGlmICh3cmFwVCAhPT0gVGV4dHVyZVdyYXBNb2RlLlJFUEVBVCkge1xyXG4gICAgICAgICAgICBzYW1wbGVyLndyYXBUID0gd3JhcFQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzd2l0Y2ggKHRleHR1cmUuc2FtcGxpbmdNb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgVGV4dHVyZS5MSU5FQVJfTElORUFSOiB7XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVyLm1hZ0ZpbHRlciA9IFRleHR1cmVNYWdGaWx0ZXIuTElORUFSO1xyXG4gICAgICAgICAgICAgICAgc2FtcGxlci5taW5GaWx0ZXIgPSBUZXh0dXJlTWluRmlsdGVyLkxJTkVBUjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgVGV4dHVyZS5MSU5FQVJfTkVBUkVTVDoge1xyXG4gICAgICAgICAgICAgICAgc2FtcGxlci5tYWdGaWx0ZXIgPSBUZXh0dXJlTWFnRmlsdGVyLkxJTkVBUjtcclxuICAgICAgICAgICAgICAgIHNhbXBsZXIubWluRmlsdGVyID0gVGV4dHVyZU1pbkZpbHRlci5ORUFSRVNUO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBUZXh0dXJlLk5FQVJFU1RfTElORUFSOiB7XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVyLm1hZ0ZpbHRlciA9IFRleHR1cmVNYWdGaWx0ZXIuTkVBUkVTVDtcclxuICAgICAgICAgICAgICAgIHNhbXBsZXIubWluRmlsdGVyID0gVGV4dHVyZU1pbkZpbHRlci5MSU5FQVI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFRleHR1cmUuTkVBUkVTVF9MSU5FQVJfTUlQTElORUFSOiB7XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVyLm1hZ0ZpbHRlciA9IFRleHR1cmVNYWdGaWx0ZXIuTkVBUkVTVDtcclxuICAgICAgICAgICAgICAgIHNhbXBsZXIubWluRmlsdGVyID0gVGV4dHVyZU1pbkZpbHRlci5MSU5FQVJfTUlQTUFQX0xJTkVBUjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgVGV4dHVyZS5ORUFSRVNUX05FQVJFU1Q6IHtcclxuICAgICAgICAgICAgICAgIHNhbXBsZXIubWFnRmlsdGVyID0gVGV4dHVyZU1hZ0ZpbHRlci5ORUFSRVNUO1xyXG4gICAgICAgICAgICAgICAgc2FtcGxlci5taW5GaWx0ZXIgPSBUZXh0dXJlTWluRmlsdGVyLk5FQVJFU1Q7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFRleHR1cmUuTkVBUkVTVF9MSU5FQVJfTUlQTkVBUkVTVDoge1xyXG4gICAgICAgICAgICAgICAgc2FtcGxlci5tYWdGaWx0ZXIgPSBUZXh0dXJlTWFnRmlsdGVyLk5FQVJFU1Q7XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVyLm1pbkZpbHRlciA9IFRleHR1cmVNaW5GaWx0ZXIuTElORUFSX01JUE1BUF9ORUFSRVNUO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBUZXh0dXJlLkxJTkVBUl9ORUFSRVNUX01JUE5FQVJFU1Q6IHtcclxuICAgICAgICAgICAgICAgIHNhbXBsZXIubWFnRmlsdGVyID0gVGV4dHVyZU1hZ0ZpbHRlci5MSU5FQVI7XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVyLm1pbkZpbHRlciA9IFRleHR1cmVNaW5GaWx0ZXIuTkVBUkVTVF9NSVBNQVBfTkVBUkVTVDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgVGV4dHVyZS5MSU5FQVJfTkVBUkVTVF9NSVBMSU5FQVI6IHtcclxuICAgICAgICAgICAgICAgIHNhbXBsZXIubWFnRmlsdGVyID0gVGV4dHVyZU1hZ0ZpbHRlci5MSU5FQVI7XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVyLm1pbkZpbHRlciA9IFRleHR1cmVNaW5GaWx0ZXIuTkVBUkVTVF9NSVBNQVBfTElORUFSO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBUZXh0dXJlLk5FQVJFU1RfTkVBUkVTVF9NSVBMSU5FQVI6IHtcclxuICAgICAgICAgICAgICAgIHNhbXBsZXIubWFnRmlsdGVyID0gVGV4dHVyZU1hZ0ZpbHRlci5ORUFSRVNUO1xyXG4gICAgICAgICAgICAgICAgc2FtcGxlci5taW5GaWx0ZXIgPSBUZXh0dXJlTWluRmlsdGVyLk5FQVJFU1RfTUlQTUFQX0xJTkVBUjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgVGV4dHVyZS5MSU5FQVJfTElORUFSX01JUExJTkVBUjoge1xyXG4gICAgICAgICAgICAgICAgc2FtcGxlci5tYWdGaWx0ZXIgPSBUZXh0dXJlTWFnRmlsdGVyLkxJTkVBUjtcclxuICAgICAgICAgICAgICAgIHNhbXBsZXIubWluRmlsdGVyID0gVGV4dHVyZU1pbkZpbHRlci5MSU5FQVJfTUlQTUFQX0xJTkVBUjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgVGV4dHVyZS5MSU5FQVJfTElORUFSX01JUE5FQVJFU1Q6IHtcclxuICAgICAgICAgICAgICAgIHNhbXBsZXIubWFnRmlsdGVyID0gVGV4dHVyZU1hZ0ZpbHRlci5MSU5FQVI7XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVyLm1pbkZpbHRlciA9IFRleHR1cmVNaW5GaWx0ZXIuTElORUFSX01JUE1BUF9ORUFSRVNUO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBUZXh0dXJlLk5FQVJFU1RfTkVBUkVTVF9NSVBORUFSRVNUOiB7XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVyLm1hZ0ZpbHRlciA9IFRleHR1cmVNYWdGaWx0ZXIuTkVBUkVTVDtcclxuICAgICAgICAgICAgICAgIHNhbXBsZXIubWluRmlsdGVyID0gVGV4dHVyZU1pbkZpbHRlci5ORUFSRVNUX01JUE1BUF9ORUFSRVNUO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBzYW1wbGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2dldEdMVEZUZXh0dXJlV3JhcE1vZGUod3JhcE1vZGU6IG51bWJlcik6IFRleHR1cmVXcmFwTW9kZSB7XHJcbiAgICAgICAgc3dpdGNoICh3cmFwTW9kZSkge1xyXG4gICAgICAgICAgICBjYXNlIFRleHR1cmUuV1JBUF9BRERSRVNTTU9ERToge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFRleHR1cmVXcmFwTW9kZS5SRVBFQVQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBUZXh0dXJlLkNMQU1QX0FERFJFU1NNT0RFOiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gVGV4dHVyZVdyYXBNb2RlLkNMQU1QX1RPX0VER0U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBUZXh0dXJlLk1JUlJPUl9BRERSRVNTTU9ERToge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFRleHR1cmVXcmFwTW9kZS5NSVJST1JFRF9SRVBFQVQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICAgICAgVG9vbHMuRXJyb3IoYFVuc3VwcG9ydGVkIFRleHR1cmUgV3JhcCBNb2RlICR7d3JhcE1vZGV9IWApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFRleHR1cmVXcmFwTW9kZS5SRVBFQVQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IGEgUEJSTWF0ZXJpYWwgKFNwZWN1bGFyL0dsb3NzaW5lc3MpIHRvIE1ldGFsbGljIFJvdWdobmVzcyBmYWN0b3JzXHJcbiAgICAgKiBAcGFyYW0gYmFieWxvblBCUk1hdGVyaWFsIEJKUyBQQlIgTWV0YWxsaWMgUm91Z2huZXNzIE1hdGVyaWFsXHJcbiAgICAgKiBAcGFyYW0gbWltZVR5cGUgbWltZSB0eXBlIHRvIHVzZSBmb3IgdGhlIHRleHR1cmVzXHJcbiAgICAgKiBAcGFyYW0gcGJyTWV0YWxsaWNSb3VnaG5lc3MgZ2xURiBQQlIgTWV0YWxsaWMgUm91Z2huZXNzIGludGVyZmFjZVxyXG4gICAgICogQHBhcmFtIGhhc1VWcyBzcGVjaWZpZXMgaWYgdGV4dHVyZSBjb29yZGluYXRlcyBhcmUgcHJlc2VudCBvbiB0aGUgc3VibWVzaCB0byBkZXRlcm1pbmUgaWYgdGV4dHVyZXMgc2hvdWxkIGJlIGFwcGxpZWRcclxuICAgICAqIEByZXR1cm5zIGdsVEYgUEJSIE1ldGFsbGljIFJvdWdobmVzcyBmYWN0b3JzXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgYXN5bmMgX2NvbnZlcnRTcGVjR2xvc3NGYWN0b3JzVG9NZXRhbGxpY1JvdWdobmVzc0FzeW5jKFxyXG4gICAgICAgIGJhYnlsb25QQlJNYXRlcmlhbDogUEJSQmFzZU1hdGVyaWFsLFxyXG4gICAgICAgIG1pbWVUeXBlOiBJbWFnZU1pbWVUeXBlLFxyXG4gICAgICAgIHBick1ldGFsbGljUm91Z2huZXNzOiBJTWF0ZXJpYWxQYnJNZXRhbGxpY1JvdWdobmVzcyxcclxuICAgICAgICBoYXNVVnM6IGJvb2xlYW5cclxuICAgICk6IFByb21pc2U8SVBCUk1ldGFsbGljUm91Z2huZXNzPiB7XHJcbiAgICAgICAgY29uc3Qgc3BlY0dsb3NzOiBJUEJSU3BlY3VsYXJHbG9zc2luZXNzID0ge1xyXG4gICAgICAgICAgICBkaWZmdXNlQ29sb3I6IGJhYnlsb25QQlJNYXRlcmlhbC5fYWxiZWRvQ29sb3IsXHJcbiAgICAgICAgICAgIHNwZWN1bGFyQ29sb3I6IGJhYnlsb25QQlJNYXRlcmlhbC5fcmVmbGVjdGl2aXR5Q29sb3IsXHJcbiAgICAgICAgICAgIGdsb3NzaW5lc3M6IGJhYnlsb25QQlJNYXRlcmlhbC5fbWljcm9TdXJmYWNlLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGFsYmVkb1RleHR1cmUgPSBiYWJ5bG9uUEJSTWF0ZXJpYWwuX2FsYmVkb1RleHR1cmU7XHJcbiAgICAgICAgY29uc3QgcmVmbGVjdGl2aXR5VGV4dHVyZSA9IGJhYnlsb25QQlJNYXRlcmlhbC5fcmVmbGVjdGl2aXR5VGV4dHVyZTtcclxuICAgICAgICBjb25zdCB1c2VNaWNyb3N1cmZhY2VGcm9tUmVmbGVjdGl2aXR5TWFwQWxwaGEgPSBiYWJ5bG9uUEJSTWF0ZXJpYWwuX3VzZU1pY3JvU3VyZmFjZUZyb21SZWZsZWN0aXZpdHlNYXBBbHBoYTtcclxuICAgICAgICBpZiAocmVmbGVjdGl2aXR5VGV4dHVyZSAmJiAhdXNlTWljcm9zdXJmYWNlRnJvbVJlZmxlY3Rpdml0eU1hcEFscGhhKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcIl9Db252ZXJ0UEJSTWF0ZXJpYWw6IEdsb3NzaW5lc3MgdmFsdWVzIG5vdCBpbmNsdWRlZCBpbiB0aGUgcmVmbGVjdGl2aXR5IHRleHR1cmUgYXJlIGN1cnJlbnRseSBub3Qgc3VwcG9ydGVkXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKChhbGJlZG9UZXh0dXJlIHx8IHJlZmxlY3Rpdml0eVRleHR1cmUpICYmIGhhc1VWcykge1xyXG4gICAgICAgICAgICB0aGlzLl9leHBvcnRlci5fbWF0ZXJpYWxOZWVkc1VWc1NldC5hZGQoYmFieWxvblBCUk1hdGVyaWFsKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNhbXBsZXJJbmRleCA9IHRoaXMuX2V4cG9ydFRleHR1cmVTYW1wbGVyKGFsYmVkb1RleHR1cmUgfHwgcmVmbGVjdGl2aXR5VGV4dHVyZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1ldGFsbGljUm91Z2huZXNzRmFjdG9ycyA9IGF3YWl0IHRoaXMuX2NvbnZlcnRTcGVjdWxhckdsb3NzaW5lc3NUZXh0dXJlc1RvTWV0YWxsaWNSb3VnaG5lc3NBc3luYyhhbGJlZG9UZXh0dXJlLCByZWZsZWN0aXZpdHlUZXh0dXJlLCBzcGVjR2xvc3MsIG1pbWVUeXBlKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRleHR1cmVzID0gdGhpcy5fZXhwb3J0ZXIuX3RleHR1cmVzO1xyXG5cclxuICAgICAgICAgICAgaWYgKG1ldGFsbGljUm91Z2huZXNzRmFjdG9ycy5iYXNlQ29sb3JUZXh0dXJlRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW1hZ2VJbmRleCA9IHRoaXMuX2V4cG9ydEltYWdlKGBiYXNlQ29sb3Ike3RleHR1cmVzLmxlbmd0aH1gLCBtaW1lVHlwZSwgbWV0YWxsaWNSb3VnaG5lc3NGYWN0b3JzLmJhc2VDb2xvclRleHR1cmVEYXRhKTtcclxuICAgICAgICAgICAgICAgIHBick1ldGFsbGljUm91Z2huZXNzLmJhc2VDb2xvclRleHR1cmUgPSB0aGlzLl9leHBvcnRUZXh0dXJlSW5mbyhpbWFnZUluZGV4LCBzYW1wbGVySW5kZXgsIGFsYmVkb1RleHR1cmU/LmNvb3JkaW5hdGVzSW5kZXgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAobWV0YWxsaWNSb3VnaG5lc3NGYWN0b3JzLm1ldGFsbGljUm91Z2huZXNzVGV4dHVyZURhdGEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlSW5kZXggPSB0aGlzLl9leHBvcnRJbWFnZShgbWV0YWxsaWNSb3VnaG5lc3Mke3RleHR1cmVzLmxlbmd0aH1gLCBtaW1lVHlwZSwgbWV0YWxsaWNSb3VnaG5lc3NGYWN0b3JzLm1ldGFsbGljUm91Z2huZXNzVGV4dHVyZURhdGEpO1xyXG4gICAgICAgICAgICAgICAgcGJyTWV0YWxsaWNSb3VnaG5lc3MubWV0YWxsaWNSb3VnaG5lc3NUZXh0dXJlID0gdGhpcy5fZXhwb3J0VGV4dHVyZUluZm8oaW1hZ2VJbmRleCwgc2FtcGxlckluZGV4LCByZWZsZWN0aXZpdHlUZXh0dXJlPy5jb29yZGluYXRlc0luZGV4KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG1ldGFsbGljUm91Z2huZXNzRmFjdG9ycztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY29udmVydFNwZWN1bGFyR2xvc3NpbmVzc1RvTWV0YWxsaWNSb3VnaG5lc3Moc3BlY0dsb3NzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGV4cG9ydFBCUk1hdGVyaWFsQXN5bmMoYmFieWxvblBCUk1hdGVyaWFsOiBQQlJCYXNlTWF0ZXJpYWwsIG1pbWVUeXBlOiBJbWFnZU1pbWVUeXBlLCBoYXNVVnM6IGJvb2xlYW4pOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gICAgICAgIGNvbnN0IGdsVEZQYnJNZXRhbGxpY1JvdWdobmVzczogSU1hdGVyaWFsUGJyTWV0YWxsaWNSb3VnaG5lc3MgPSB7fTtcclxuXHJcbiAgICAgICAgY29uc3QgZ2xURk1hdGVyaWFsOiBJTWF0ZXJpYWwgPSB7XHJcbiAgICAgICAgICAgIG5hbWU6IGJhYnlsb25QQlJNYXRlcmlhbC5uYW1lLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHVzZU1ldGFsbGljUm91Z2huZXNzID0gYmFieWxvblBCUk1hdGVyaWFsLmlzTWV0YWxsaWNXb3JrZmxvdygpO1xyXG5cclxuICAgICAgICBpZiAodXNlTWV0YWxsaWNSb3VnaG5lc3MpIHtcclxuICAgICAgICAgICAgY29uc3QgYWxiZWRvQ29sb3IgPSBiYWJ5bG9uUEJSTWF0ZXJpYWwuX2FsYmVkb0NvbG9yO1xyXG4gICAgICAgICAgICBjb25zdCBhbHBoYSA9IGJhYnlsb25QQlJNYXRlcmlhbC5hbHBoYTtcclxuICAgICAgICAgICAgaWYgKGFsYmVkb0NvbG9yKSB7XHJcbiAgICAgICAgICAgICAgICBnbFRGUGJyTWV0YWxsaWNSb3VnaG5lc3MuYmFzZUNvbG9yRmFjdG9yID0gW2FsYmVkb0NvbG9yLnIsIGFsYmVkb0NvbG9yLmcsIGFsYmVkb0NvbG9yLmIsIGFscGhhXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbWV0YWxsaWNSb3VnaG5lc3MgPSB1c2VNZXRhbGxpY1JvdWdobmVzc1xyXG4gICAgICAgICAgICA/IGF3YWl0IHRoaXMuX2NvbnZlcnRNZXRhbFJvdWdoRmFjdG9yc1RvTWV0YWxsaWNSb3VnaG5lc3NBc3luYyhiYWJ5bG9uUEJSTWF0ZXJpYWwsIG1pbWVUeXBlLCBnbFRGUGJyTWV0YWxsaWNSb3VnaG5lc3MsIGhhc1VWcylcclxuICAgICAgICAgICAgOiBhd2FpdCB0aGlzLl9jb252ZXJ0U3BlY0dsb3NzRmFjdG9yc1RvTWV0YWxsaWNSb3VnaG5lc3NBc3luYyhiYWJ5bG9uUEJSTWF0ZXJpYWwsIG1pbWVUeXBlLCBnbFRGUGJyTWV0YWxsaWNSb3VnaG5lc3MsIGhhc1VWcyk7XHJcblxyXG4gICAgICAgIGF3YWl0IHRoaXMuX3NldE1ldGFsbGljUm91Z2huZXNzUGJyTWF0ZXJpYWxBc3luYyhtZXRhbGxpY1JvdWdobmVzcywgYmFieWxvblBCUk1hdGVyaWFsLCBnbFRGTWF0ZXJpYWwsIGdsVEZQYnJNZXRhbGxpY1JvdWdobmVzcywgbWltZVR5cGUsIGhhc1VWcyk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5fZmluaXNoTWF0ZXJpYWxBc3luYyhnbFRGTWF0ZXJpYWwsIGJhYnlsb25QQlJNYXRlcmlhbCwgbWltZVR5cGUpO1xyXG5cclxuICAgICAgICBjb25zdCBtYXRlcmlhbHMgPSB0aGlzLl9leHBvcnRlci5fbWF0ZXJpYWxzO1xyXG4gICAgICAgIG1hdGVyaWFscy5wdXNoKGdsVEZNYXRlcmlhbCk7XHJcbiAgICAgICAgcmV0dXJuIG1hdGVyaWFscy5sZW5ndGggLSAxO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgX3NldE1ldGFsbGljUm91Z2huZXNzUGJyTWF0ZXJpYWxBc3luYyhcclxuICAgICAgICBtZXRhbGxpY1JvdWdobmVzczogSVBCUk1ldGFsbGljUm91Z2huZXNzLFxyXG4gICAgICAgIGJhYnlsb25QQlJNYXRlcmlhbDogUEJSQmFzZU1hdGVyaWFsLFxyXG4gICAgICAgIGdsVEZNYXRlcmlhbDogSU1hdGVyaWFsLFxyXG4gICAgICAgIGdsVEZQYnJNZXRhbGxpY1JvdWdobmVzczogSU1hdGVyaWFsUGJyTWV0YWxsaWNSb3VnaG5lc3MsXHJcbiAgICAgICAgbWltZVR5cGU6IEltYWdlTWltZVR5cGUsXHJcbiAgICAgICAgaGFzVVZzOiBib29sZWFuXHJcbiAgICApOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBTZXRBbHBoYU1vZGUoZ2xURk1hdGVyaWFsLCBiYWJ5bG9uUEJSTWF0ZXJpYWwpO1xyXG5cclxuICAgICAgICBpZiAoIW1ldGFsbGljUm91Z2huZXNzLmJhc2VDb2xvci5lcXVhbHNXaXRoRXBzaWxvbih3aGl0ZSwgZXBzaWxvbikgfHwgIVNjYWxhci5XaXRoaW5FcHNpbG9uKGJhYnlsb25QQlJNYXRlcmlhbC5hbHBoYSwgMSwgZXBzaWxvbikpIHtcclxuICAgICAgICAgICAgZ2xURlBick1ldGFsbGljUm91Z2huZXNzLmJhc2VDb2xvckZhY3RvciA9IFttZXRhbGxpY1JvdWdobmVzcy5iYXNlQ29sb3IuciwgbWV0YWxsaWNSb3VnaG5lc3MuYmFzZUNvbG9yLmcsIG1ldGFsbGljUm91Z2huZXNzLmJhc2VDb2xvci5iLCBiYWJ5bG9uUEJSTWF0ZXJpYWwuYWxwaGFdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG1ldGFsbGljUm91Z2huZXNzLm1ldGFsbGljICE9IG51bGwgJiYgbWV0YWxsaWNSb3VnaG5lc3MubWV0YWxsaWMgIT09IDEpIHtcclxuICAgICAgICAgICAgZ2xURlBick1ldGFsbGljUm91Z2huZXNzLm1ldGFsbGljRmFjdG9yID0gbWV0YWxsaWNSb3VnaG5lc3MubWV0YWxsaWM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtZXRhbGxpY1JvdWdobmVzcy5yb3VnaG5lc3MgIT0gbnVsbCAmJiBtZXRhbGxpY1JvdWdobmVzcy5yb3VnaG5lc3MgIT09IDEpIHtcclxuICAgICAgICAgICAgZ2xURlBick1ldGFsbGljUm91Z2huZXNzLnJvdWdobmVzc0ZhY3RvciA9IG1ldGFsbGljUm91Z2huZXNzLnJvdWdobmVzcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChiYWJ5bG9uUEJSTWF0ZXJpYWwuYmFja0ZhY2VDdWxsaW5nICE9IG51bGwgJiYgIWJhYnlsb25QQlJNYXRlcmlhbC5iYWNrRmFjZUN1bGxpbmcpIHtcclxuICAgICAgICAgICAgaWYgKCFiYWJ5bG9uUEJSTWF0ZXJpYWwuX3R3b1NpZGVkTGlnaHRpbmcpIHtcclxuICAgICAgICAgICAgICAgIFRvb2xzLldhcm4oYmFieWxvblBCUk1hdGVyaWFsLm5hbWUgKyBcIjogQmFjay1mYWNlIGN1bGxpbmcgZGlzYWJsZWQgYW5kIHR3by1zaWRlZCBsaWdodGluZyBkaXNhYmxlZCBpcyBub3Qgc3VwcG9ydGVkIGluIGdsVEYuXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGdsVEZNYXRlcmlhbC5kb3VibGVTaWRlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaGFzVVZzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb21pc2VzOiBQcm9taXNlPHZvaWQ+W10gPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGJ1bXBUZXh0dXJlID0gYmFieWxvblBCUk1hdGVyaWFsLl9idW1wVGV4dHVyZTtcclxuICAgICAgICAgICAgaWYgKGJ1bXBUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXhwb3J0VGV4dHVyZUFzeW5jKGJ1bXBUZXh0dXJlLCBtaW1lVHlwZSkudGhlbigoZ2xURlRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdsVEZUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbFRGTWF0ZXJpYWwubm9ybWFsVGV4dHVyZSA9IGdsVEZUZXh0dXJlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJ1bXBUZXh0dXJlLmxldmVsICE9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xURk1hdGVyaWFsLm5vcm1hbFRleHR1cmUuc2NhbGUgPSBidW1wVGV4dHVyZS5sZXZlbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBhbWJpZW50VGV4dHVyZSA9IGJhYnlsb25QQlJNYXRlcmlhbC5fYW1iaWVudFRleHR1cmU7XHJcbiAgICAgICAgICAgIGlmIChhbWJpZW50VGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4cG9ydFRleHR1cmVBc3luYyhhbWJpZW50VGV4dHVyZSwgbWltZVR5cGUpLnRoZW4oKGdsVEZUZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnbFRGVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2NjbHVzaW9uVGV4dHVyZTogSU1hdGVyaWFsT2NjbHVzaW9uVGV4dHVyZUluZm8gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGdsVEZUZXh0dXJlLmluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleENvb3JkOiBnbFRGVGV4dHVyZS50ZXhDb29yZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHRlbnNpb25zOiBnbFRGVGV4dHVyZS5leHRlbnNpb25zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbFRGTWF0ZXJpYWwub2NjbHVzaW9uVGV4dHVyZSA9IG9jY2x1c2lvblRleHR1cmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhbWJpZW50VGV4dHVyZVN0cmVuZ3RoID0gYmFieWxvblBCUk1hdGVyaWFsLl9hbWJpZW50VGV4dHVyZVN0cmVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFtYmllbnRUZXh0dXJlU3RyZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvY2NsdXNpb25UZXh0dXJlLnN0cmVuZ3RoID0gYW1iaWVudFRleHR1cmVTdHJlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBlbWlzc2l2ZVRleHR1cmUgPSBiYWJ5bG9uUEJSTWF0ZXJpYWwuX2VtaXNzaXZlVGV4dHVyZTtcclxuICAgICAgICAgICAgaWYgKGVtaXNzaXZlVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4cG9ydFRleHR1cmVBc3luYyhlbWlzc2l2ZVRleHR1cmUsIG1pbWVUeXBlKS50aGVuKChnbFRGVGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2xURlRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsVEZNYXRlcmlhbC5lbWlzc2l2ZVRleHR1cmUgPSBnbFRGVGV4dHVyZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAocHJvbWlzZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZXhwb3J0ZXIuX21hdGVyaWFsTmVlZHNVVnNTZXQuYWRkKGJhYnlsb25QQlJNYXRlcmlhbCk7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGVtaXNzaXZlQ29sb3IgPSBiYWJ5bG9uUEJSTWF0ZXJpYWwuX2VtaXNzaXZlQ29sb3I7XHJcbiAgICAgICAgaWYgKCFlbWlzc2l2ZUNvbG9yLmVxdWFsc1dpdGhFcHNpbG9uKGJsYWNrLCBlcHNpbG9uKSkge1xyXG4gICAgICAgICAgICBnbFRGTWF0ZXJpYWwuZW1pc3NpdmVGYWN0b3IgPSBlbWlzc2l2ZUNvbG9yLmFzQXJyYXkoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdsVEZNYXRlcmlhbC5wYnJNZXRhbGxpY1JvdWdobmVzcyA9IGdsVEZQYnJNZXRhbGxpY1JvdWdobmVzcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9nZXRQaXhlbHNGcm9tVGV4dHVyZShiYWJ5bG9uVGV4dHVyZTogQmFzZVRleHR1cmUpOiBQcm9taXNlPE51bGxhYmxlPFVpbnQ4QXJyYXkgfCBGbG9hdDMyQXJyYXk+PiB7XHJcbiAgICAgICAgY29uc3QgcGl4ZWxzID1cclxuICAgICAgICAgICAgYmFieWxvblRleHR1cmUudGV4dHVyZVR5cGUgPT09IENvbnN0YW50cy5URVhUVVJFVFlQRV9VTlNJR05FRF9CWVRFXHJcbiAgICAgICAgICAgICAgICA/IChiYWJ5bG9uVGV4dHVyZS5yZWFkUGl4ZWxzKCkgYXMgUHJvbWlzZTxVaW50OEFycmF5PilcclxuICAgICAgICAgICAgICAgIDogKGJhYnlsb25UZXh0dXJlLnJlYWRQaXhlbHMoKSBhcyBQcm9taXNlPEZsb2F0MzJBcnJheT4pO1xyXG4gICAgICAgIHJldHVybiBwaXhlbHM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGV4cG9ydFRleHR1cmVBc3luYyhiYWJ5bG9uVGV4dHVyZTogQmFzZVRleHR1cmUsIG1pbWVUeXBlOiBJbWFnZU1pbWVUeXBlKTogUHJvbWlzZTxOdWxsYWJsZTxJVGV4dHVyZUluZm8+PiB7XHJcbiAgICAgICAgY29uc3QgZXh0ZW5zaW9uUHJvbWlzZSA9IHRoaXMuX2V4cG9ydGVyLl9leHRlbnNpb25zUHJlRXhwb3J0VGV4dHVyZUFzeW5jKFwiZXhwb3J0ZXJcIiwgYmFieWxvblRleHR1cmUgYXMgVGV4dHVyZSwgbWltZVR5cGUpO1xyXG4gICAgICAgIGlmICghZXh0ZW5zaW9uUHJvbWlzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZXhwb3J0VGV4dHVyZUluZm9Bc3luYyhiYWJ5bG9uVGV4dHVyZSwgbWltZVR5cGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGV4dGVuc2lvblByb21pc2UudGhlbigodGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9leHBvcnRUZXh0dXJlSW5mb0FzeW5jKGJhYnlsb25UZXh0dXJlLCBtaW1lVHlwZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2V4cG9ydFRleHR1cmVJbmZvQXN5bmModGV4dHVyZSwgbWltZVR5cGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgX2V4cG9ydFRleHR1cmVJbmZvQXN5bmMoYmFieWxvblRleHR1cmU6IEJhc2VUZXh0dXJlLCBtaW1lVHlwZTogSW1hZ2VNaW1lVHlwZSk6IFByb21pc2U8TnVsbGFibGU8SVRleHR1cmVJbmZvPj4ge1xyXG4gICAgICAgIGxldCB0ZXh0dXJlSW5mbyA9IHRoaXMuX3RleHR1cmVNYXAuZ2V0KGJhYnlsb25UZXh0dXJlKTtcclxuICAgICAgICBpZiAoIXRleHR1cmVJbmZvKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBpeGVscyA9IGF3YWl0IHRoaXMuX2dldFBpeGVsc0Zyb21UZXh0dXJlKGJhYnlsb25UZXh0dXJlKTtcclxuICAgICAgICAgICAgaWYgKCFwaXhlbHMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzYW1wbGVySW5kZXggPSB0aGlzLl9leHBvcnRUZXh0dXJlU2FtcGxlcihiYWJ5bG9uVGV4dHVyZSk7XHJcblxyXG4gICAgICAgICAgICAvLyBQcmVzZXJ2ZSB0ZXh0dXJlIG1pbWUgdHlwZSBpZiBkZWZpbmVkXHJcbiAgICAgICAgICAgIGNvbnN0IHRleHR1cmVNaW1lVHlwZSA9IChiYWJ5bG9uVGV4dHVyZSBhcyBUZXh0dXJlKS5taW1lVHlwZTtcclxuICAgICAgICAgICAgaWYgKHRleHR1cmVNaW1lVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0ZXh0dXJlTWltZVR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaW1hZ2UvanBlZ1wiOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpbWFnZS9wbmdcIjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaW1hZ2Uvd2VicFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW1lVHlwZSA9IHRleHR1cmVNaW1lVHlwZSBhcyBJbWFnZU1pbWVUeXBlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUb29scy5XYXJuKGBVbnN1cHBvcnRlZCBtZWRpYSB0eXBlOiAke3RleHR1cmVNaW1lVHlwZX1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGludGVybmFsVGV4dHVyZVRvSW1hZ2UgPSB0aGlzLl9pbnRlcm5hbFRleHR1cmVUb0ltYWdlO1xyXG4gICAgICAgICAgICBjb25zdCBpbnRlcm5hbFRleHR1cmVVbmlxdWVJZCA9IGJhYnlsb25UZXh0dXJlLmdldEludGVybmFsVGV4dHVyZSgpIS51bmlxdWVJZDtcclxuICAgICAgICAgICAgaW50ZXJuYWxUZXh0dXJlVG9JbWFnZVtpbnRlcm5hbFRleHR1cmVVbmlxdWVJZF0gfHw9IHt9O1xyXG4gICAgICAgICAgICBsZXQgaW1hZ2VJbmRleFByb21pc2UgPSBpbnRlcm5hbFRleHR1cmVUb0ltYWdlW2ludGVybmFsVGV4dHVyZVVuaXF1ZUlkXVttaW1lVHlwZV07XHJcbiAgICAgICAgICAgIGlmIChpbWFnZUluZGV4UHJvbWlzZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzaXplID0gYmFieWxvblRleHR1cmUuZ2V0U2l6ZSgpO1xyXG4gICAgICAgICAgICAgICAgaW1hZ2VJbmRleFByb21pc2UgPSAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLl9nZXRJbWFnZURhdGFBc3luYyhwaXhlbHMsIHNpemUud2lkdGgsIHNpemUuaGVpZ2h0LCBtaW1lVHlwZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2V4cG9ydEltYWdlKGJhYnlsb25UZXh0dXJlLm5hbWUsIG1pbWVUeXBlLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgIH0pKCk7XHJcbiAgICAgICAgICAgICAgICBpbnRlcm5hbFRleHR1cmVUb0ltYWdlW2ludGVybmFsVGV4dHVyZVVuaXF1ZUlkXVttaW1lVHlwZV0gPSBpbWFnZUluZGV4UHJvbWlzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGV4dHVyZUluZm8gPSB0aGlzLl9leHBvcnRUZXh0dXJlSW5mbyhhd2FpdCBpbWFnZUluZGV4UHJvbWlzZSwgc2FtcGxlckluZGV4LCBiYWJ5bG9uVGV4dHVyZS5jb29yZGluYXRlc0luZGV4KTtcclxuICAgICAgICAgICAgdGhpcy5fdGV4dHVyZU1hcC5zZXQoYmFieWxvblRleHR1cmUsIHRleHR1cmVJbmZvKTtcclxuICAgICAgICAgICAgdGhpcy5fZXhwb3J0ZXIuX2V4dGVuc2lvbnNQb3N0RXhwb3J0VGV4dHVyZXMoXCJleHBvcnRlclwiLCB0ZXh0dXJlSW5mbywgYmFieWxvblRleHR1cmUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRleHR1cmVJbmZvO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2V4cG9ydEltYWdlKG5hbWU6IHN0cmluZywgbWltZVR5cGU6IEltYWdlTWltZVR5cGUsIGRhdGE6IEFycmF5QnVmZmVyKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCBpbWFnZXMgPSB0aGlzLl9leHBvcnRlci5faW1hZ2VzO1xyXG5cclxuICAgICAgICBsZXQgaW1hZ2U6IElJbWFnZTtcclxuICAgICAgICBpZiAodGhpcy5fZXhwb3J0ZXIuX3Nob3VsZFVzZUdsYikge1xyXG4gICAgICAgICAgICBpbWFnZSA9IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICBtaW1lVHlwZTogbWltZVR5cGUsXHJcbiAgICAgICAgICAgICAgICBidWZmZXJWaWV3OiB1bmRlZmluZWQsIC8vIFdpbGwgYmUgdXBkYXRlZCBsYXRlciBieSBCdWZmZXJNYW5hZ2VyXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbnN0IGJ1ZmZlclZpZXcgPSB0aGlzLl9leHBvcnRlci5fYnVmZmVyTWFuYWdlci5jcmVhdGVCdWZmZXJWaWV3KG5ldyBVaW50OEFycmF5KGRhdGEpKTtcclxuICAgICAgICAgICAgdGhpcy5fZXhwb3J0ZXIuX2J1ZmZlck1hbmFnZXIuc2V0QnVmZmVyVmlldyhpbWFnZSwgYnVmZmVyVmlldyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gQnVpbGQgYSB1bmlxdWUgVVJJXHJcbiAgICAgICAgICAgIGNvbnN0IGJhc2VOYW1lID0gbmFtZS5yZXBsYWNlKC9cXC5cXC98XFwvfFxcLlxcXFx8XFxcXC9nLCBcIl9cIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IEdldEZpbGVFeHRlbnNpb25Gcm9tTWltZVR5cGUobWltZVR5cGUpO1xyXG4gICAgICAgICAgICBsZXQgZmlsZU5hbWUgPSBiYXNlTmFtZSArIGV4dGVuc2lvbjtcclxuICAgICAgICAgICAgaWYgKGltYWdlcy5zb21lKChpbWFnZSkgPT4gaW1hZ2UudXJpID09PSBmaWxlTmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIGZpbGVOYW1lID0gYCR7YmFzZU5hbWV9XyR7VG9vbHMuUmFuZG9tSWQoKX0ke2V4dGVuc2lvbn1gO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbWFnZSA9IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICB1cmk6IGZpbGVOYW1lLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLl9leHBvcnRlci5faW1hZ2VEYXRhW2ZpbGVOYW1lXSA9IHsgZGF0YTogZGF0YSwgbWltZVR5cGU6IG1pbWVUeXBlIH07IC8vIFNhdmUgaW1hZ2UgZGF0YSB0byBiZSB3cml0dGVuIHRvIGZpbGUgbGF0ZXJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGltYWdlcy5wdXNoKGltYWdlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGltYWdlcy5sZW5ndGggLSAxO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2V4cG9ydFRleHR1cmVJbmZvKGltYWdlSW5kZXg6IG51bWJlciwgc2FtcGxlckluZGV4OiBudW1iZXIsIGNvb3JkaW5hdGVzSW5kZXg/OiBudW1iZXIpOiBJVGV4dHVyZUluZm8ge1xyXG4gICAgICAgIGNvbnN0IHRleHR1cmVzID0gdGhpcy5fZXhwb3J0ZXIuX3RleHR1cmVzO1xyXG4gICAgICAgIGxldCB0ZXh0dXJlSW5kZXggPSB0ZXh0dXJlcy5maW5kSW5kZXgoKHQpID0+IHQuc2FtcGxlciA9PSBzYW1wbGVySW5kZXggJiYgdC5zb3VyY2UgPT09IGltYWdlSW5kZXgpO1xyXG4gICAgICAgIGlmICh0ZXh0dXJlSW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRleHR1cmVJbmRleCA9IHRleHR1cmVzLmxlbmd0aDtcclxuICAgICAgICAgICAgdGV4dHVyZXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2U6IGltYWdlSW5kZXgsXHJcbiAgICAgICAgICAgICAgICBzYW1wbGVyOiBzYW1wbGVySW5kZXgsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdGV4dHVyZUluZm86IElUZXh0dXJlSW5mbyA9IHsgaW5kZXg6IHRleHR1cmVJbmRleCB9O1xyXG4gICAgICAgIGlmIChjb29yZGluYXRlc0luZGV4KSB7XHJcbiAgICAgICAgICAgIHRleHR1cmVJbmZvLnRleENvb3JkID0gY29vcmRpbmF0ZXNJbmRleDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRleHR1cmVJbmZvO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2V4cG9ydFRleHR1cmVTYW1wbGVyKHRleHR1cmU6IE51bGxhYmxlPEJhc2VUZXh0dXJlPik6IG51bWJlciB7XHJcbiAgICAgICAgY29uc3Qgc2FtcGxlciA9IHRoaXMuX2dldFRleHR1cmVTYW1wbGVyKHRleHR1cmUpO1xyXG5cclxuICAgICAgICAvLyBpZiBhIHByZS1leGlzdGluZyBzYW1wbGVyIHdpdGggaWRlbnRpY2FsIHBhcmFtZXRlcnMgZXhpc3RzLCB0aGVuIHJldXNlIHRoZSBwcmV2aW91cyBzYW1wbGVyXHJcbiAgICAgICAgY29uc3Qgc2FtcGxlcnMgPSB0aGlzLl9leHBvcnRlci5fc2FtcGxlcnM7XHJcbiAgICAgICAgY29uc3Qgc2FtcGxlckluZGV4ID0gc2FtcGxlcnMuZmluZEluZGV4KFxyXG4gICAgICAgICAgICAocykgPT4gcy5taW5GaWx0ZXIgPT09IHNhbXBsZXIubWluRmlsdGVyICYmIHMubWFnRmlsdGVyID09PSBzYW1wbGVyLm1hZ0ZpbHRlciAmJiBzLndyYXBTID09PSBzYW1wbGVyLndyYXBTICYmIHMud3JhcFQgPT09IHNhbXBsZXIud3JhcFRcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmIChzYW1wbGVySW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzYW1wbGVySW5kZXg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzYW1wbGVycy5wdXNoKHNhbXBsZXIpO1xyXG4gICAgICAgIHJldHVybiBzYW1wbGVycy5sZW5ndGggLSAxO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB0eXBlIHsgSUJ1ZmZlclZpZXcsIElBY2Nlc3NvciB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgQWNjZXNzb3JDb21wb25lbnRUeXBlLCBBY2Nlc3NvclR5cGUgfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB0eXBlIHsgTW9ycGhUYXJnZXQgfSBmcm9tIFwiY29yZS9Nb3JwaC9tb3JwaFRhcmdldFwiO1xyXG5pbXBvcnQgdHlwZSB7IEJ1ZmZlck1hbmFnZXIgfSBmcm9tIFwiLi9idWZmZXJNYW5hZ2VyXCI7XHJcblxyXG5pbXBvcnQgeyBOb3JtYWxpemVUYW5nZW50IH0gZnJvbSBcIi4vZ2xURlV0aWxpdGllc1wiO1xyXG5pbXBvcnQgdHlwZSB7IEFic3RyYWN0TWVzaCB9IGZyb20gXCJjb3JlL01lc2hlcy9hYnN0cmFjdE1lc2hcIjtcclxuaW1wb3J0IHsgVmVydGV4QnVmZmVyIH0gZnJvbSBcImNvcmUvQnVmZmVycy9idWZmZXJcIjtcclxuaW1wb3J0IHsgVmVjdG9yMywgVmVjdG9yNCB9IGZyb20gXCJjb3JlL01hdGhzL21hdGgudmVjdG9yXCI7XHJcbmltcG9ydCB7IFRvb2xzIH0gZnJvbSBcImNvcmUvTWlzYy90b29sc1wiO1xyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSB0byBzdG9yZSBtb3JwaCB0YXJnZXQgaW5mb3JtYXRpb24uXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJTW9ycGhUYXJnZXREYXRhIHtcclxuICAgIGF0dHJpYnV0ZXM6IFJlY29yZDxzdHJpbmcsIG51bWJlcj47XHJcbiAgICBpbmZsdWVuY2U6IG51bWJlcjtcclxuICAgIG5hbWU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEJ1aWxkTW9ycGhUYXJnZXRCdWZmZXJzKFxyXG4gICAgbW9ycGhUYXJnZXQ6IE1vcnBoVGFyZ2V0LFxyXG4gICAgbWVzaDogQWJzdHJhY3RNZXNoLFxyXG4gICAgYnVmZmVyTWFuYWdlcjogQnVmZmVyTWFuYWdlcixcclxuICAgIGJ1ZmZlclZpZXdzOiBJQnVmZmVyVmlld1tdLFxyXG4gICAgYWNjZXNzb3JzOiBJQWNjZXNzb3JbXSxcclxuICAgIGNvbnZlcnRUb1JpZ2h0SGFuZGVkOiBib29sZWFuXHJcbik6IElNb3JwaFRhcmdldERhdGEge1xyXG4gICAgY29uc3QgcmVzdWx0OiBJTW9ycGhUYXJnZXREYXRhID0ge1xyXG4gICAgICAgIGF0dHJpYnV0ZXM6IHt9LFxyXG4gICAgICAgIGluZmx1ZW5jZTogbW9ycGhUYXJnZXQuaW5mbHVlbmNlLFxyXG4gICAgICAgIG5hbWU6IG1vcnBoVGFyZ2V0Lm5hbWUsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGdlb21ldHJ5ID0gbWVzaC5nZW9tZXRyeTtcclxuICAgIGlmICghZ2VvbWV0cnkpIHtcclxuICAgICAgICBUb29scy5XYXJuKFwiQXR0ZW1wdGVkIHRvIGV4cG9ydCBtb3JwaCB0YXJnZXQgZGF0YSBmcm9tIGEgbWVzaCB3aXRob3V0IGdlb21ldHJ5LiBUaGlzIHNob3VsZCBub3QgaGFwcGVuLlwiKTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZsaXBYID0gY29udmVydFRvUmlnaHRIYW5kZWQgPyAtMSA6IDE7XHJcbiAgICBjb25zdCBmbG9hdFNpemUgPSA0O1xyXG4gICAgY29uc3QgZGlmZmVyZW5jZSA9IFZlY3RvcjMuWmVybygpO1xyXG4gICAgbGV0IHZlcnRleFN0YXJ0ID0gMDtcclxuICAgIGxldCB2ZXJ0ZXhDb3VudCA9IDA7XHJcblxyXG4gICAgaWYgKG1vcnBoVGFyZ2V0Lmhhc1Bvc2l0aW9ucykge1xyXG4gICAgICAgIGNvbnN0IG1vcnBoUG9zaXRpb25zID0gbW9ycGhUYXJnZXQuZ2V0UG9zaXRpb25zKCkhO1xyXG4gICAgICAgIGNvbnN0IG9yaWdpbmFsUG9zaXRpb25zID0gZ2VvbWV0cnkuZ2V0VmVydGljZXNEYXRhKFZlcnRleEJ1ZmZlci5Qb3NpdGlvbktpbmQpOyAvLyBCeXBhc3NlcyBhbnkgaW5zdGFuY2UgZGF0YSBvZiBtZXNoXHJcblxyXG4gICAgICAgIGlmIChvcmlnaW5hbFBvc2l0aW9ucykge1xyXG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvbkRhdGEgPSBuZXcgRmxvYXQzMkFycmF5KG9yaWdpbmFsUG9zaXRpb25zLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1pbiA9IFtJbmZpbml0eSwgSW5maW5pdHksIEluZmluaXR5XTtcclxuICAgICAgICAgICAgY29uc3QgbWF4ID0gWy1JbmZpbml0eSwgLUluZmluaXR5LCAtSW5maW5pdHldO1xyXG4gICAgICAgICAgICB2ZXJ0ZXhDb3VudCA9IG9yaWdpbmFsUG9zaXRpb25zLmxlbmd0aCAvIDM7XHJcbiAgICAgICAgICAgIHZlcnRleFN0YXJ0ID0gMDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHZlcnRleFN0YXJ0OyBpIDwgdmVydGV4Q291bnQ7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxQb3NpdGlvbiA9IFZlY3RvcjMuRnJvbUFycmF5KG9yaWdpbmFsUG9zaXRpb25zLCBpICogMyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtb3JwaFBvc2l0aW9uID0gVmVjdG9yMy5Gcm9tQXJyYXkobW9ycGhQb3NpdGlvbnMsIGkgKiAzKTtcclxuICAgICAgICAgICAgICAgIG1vcnBoUG9zaXRpb24uc3VidHJhY3RUb1JlZihvcmlnaW5hbFBvc2l0aW9uLCBkaWZmZXJlbmNlKTtcclxuICAgICAgICAgICAgICAgIGRpZmZlcmVuY2UueCAqPSBmbGlwWDtcclxuXHJcbiAgICAgICAgICAgICAgICBtaW5bMF0gPSBNYXRoLm1pbihtaW5bMF0sIGRpZmZlcmVuY2UueCk7XHJcbiAgICAgICAgICAgICAgICBtYXhbMF0gPSBNYXRoLm1heChtYXhbMF0sIGRpZmZlcmVuY2UueCk7XHJcblxyXG4gICAgICAgICAgICAgICAgbWluWzFdID0gTWF0aC5taW4obWluWzFdLCBkaWZmZXJlbmNlLnkpO1xyXG4gICAgICAgICAgICAgICAgbWF4WzFdID0gTWF0aC5tYXgobWF4WzFdLCBkaWZmZXJlbmNlLnkpO1xyXG5cclxuICAgICAgICAgICAgICAgIG1pblsyXSA9IE1hdGgubWluKG1pblsyXSwgZGlmZmVyZW5jZS56KTtcclxuICAgICAgICAgICAgICAgIG1heFsyXSA9IE1hdGgubWF4KG1heFsyXSwgZGlmZmVyZW5jZS56KTtcclxuXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbkRhdGFbaSAqIDNdID0gZGlmZmVyZW5jZS54O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25EYXRhW2kgKiAzICsgMV0gPSBkaWZmZXJlbmNlLnk7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbkRhdGFbaSAqIDMgKyAyXSA9IGRpZmZlcmVuY2UuejtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgYnVmZmVyVmlldyA9IGJ1ZmZlck1hbmFnZXIuY3JlYXRlQnVmZmVyVmlldyhwb3NpdGlvbkRhdGEsIGZsb2F0U2l6ZSAqIDMpO1xyXG4gICAgICAgICAgICBjb25zdCBhY2Nlc3NvciA9IGJ1ZmZlck1hbmFnZXIuY3JlYXRlQWNjZXNzb3IoYnVmZmVyVmlldywgQWNjZXNzb3JUeXBlLlZFQzMsIEFjY2Vzc29yQ29tcG9uZW50VHlwZS5GTE9BVCwgbW9ycGhQb3NpdGlvbnMubGVuZ3RoIC8gMywgMCwgeyBtaW4sIG1heCB9KTtcclxuICAgICAgICAgICAgYWNjZXNzb3JzLnB1c2goYWNjZXNzb3IpO1xyXG4gICAgICAgICAgICByZXN1bHQuYXR0cmlidXRlc1tcIlBPU0lUSU9OXCJdID0gYWNjZXNzb3JzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgVG9vbHMuV2FybihgTW9ycGggdGFyZ2V0IHBvc2l0aW9ucyBmb3IgbWVzaCAke21lc2gubmFtZX0gd2VyZSBub3QgZXhwb3J0ZWQuIE1lc2ggZG9lcyBub3QgaGF2ZSBwb3NpdGlvbiB2ZXJ0ZXggZGF0YWApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAobW9ycGhUYXJnZXQuaGFzTm9ybWFscykge1xyXG4gICAgICAgIGNvbnN0IG1vcnBoTm9ybWFscyA9IG1vcnBoVGFyZ2V0LmdldE5vcm1hbHMoKSE7XHJcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxOb3JtYWxzID0gZ2VvbWV0cnkuZ2V0VmVydGljZXNEYXRhKFZlcnRleEJ1ZmZlci5Ob3JtYWxLaW5kKTtcclxuXHJcbiAgICAgICAgaWYgKG9yaWdpbmFsTm9ybWFscykge1xyXG4gICAgICAgICAgICBjb25zdCBub3JtYWxEYXRhID0gbmV3IEZsb2F0MzJBcnJheShvcmlnaW5hbE5vcm1hbHMubGVuZ3RoKTtcclxuICAgICAgICAgICAgdmVydGV4Q291bnQgPSBvcmlnaW5hbE5vcm1hbHMubGVuZ3RoIC8gMztcclxuICAgICAgICAgICAgdmVydGV4U3RhcnQgPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gdmVydGV4U3RhcnQ7IGkgPCB2ZXJ0ZXhDb3VudDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvcmlnaW5hbE5vcm1hbCA9IFZlY3RvcjMuRnJvbUFycmF5KG9yaWdpbmFsTm9ybWFscywgaSAqIDMpLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbW9ycGhOb3JtYWwgPSBWZWN0b3IzLkZyb21BcnJheShtb3JwaE5vcm1hbHMsIGkgKiAzKS5ub3JtYWxpemUoKTtcclxuICAgICAgICAgICAgICAgIG1vcnBoTm9ybWFsLnN1YnRyYWN0VG9SZWYob3JpZ2luYWxOb3JtYWwsIGRpZmZlcmVuY2UpO1xyXG5cclxuICAgICAgICAgICAgICAgIG5vcm1hbERhdGFbaSAqIDNdID0gZGlmZmVyZW5jZS54ICogZmxpcFg7XHJcbiAgICAgICAgICAgICAgICBub3JtYWxEYXRhW2kgKiAzICsgMV0gPSBkaWZmZXJlbmNlLnk7XHJcbiAgICAgICAgICAgICAgICBub3JtYWxEYXRhW2kgKiAzICsgMl0gPSBkaWZmZXJlbmNlLno7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGJ1ZmZlclZpZXcgPSBidWZmZXJNYW5hZ2VyLmNyZWF0ZUJ1ZmZlclZpZXcobm9ybWFsRGF0YSwgZmxvYXRTaXplICogMyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGFjY2Vzc29yID0gYnVmZmVyTWFuYWdlci5jcmVhdGVBY2Nlc3NvcihidWZmZXJWaWV3LCBBY2Nlc3NvclR5cGUuVkVDMywgQWNjZXNzb3JDb21wb25lbnRUeXBlLkZMT0FULCBtb3JwaE5vcm1hbHMubGVuZ3RoIC8gMywgMCk7XHJcbiAgICAgICAgICAgIGFjY2Vzc29ycy5wdXNoKGFjY2Vzc29yKTtcclxuICAgICAgICAgICAgcmVzdWx0LmF0dHJpYnV0ZXNbXCJOT1JNQUxcIl0gPSBhY2Nlc3NvcnMubGVuZ3RoIC0gMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBUb29scy5XYXJuKGBNb3JwaCB0YXJnZXQgbm9ybWFscyBmb3IgbWVzaCAke21lc2gubmFtZX0gd2VyZSBub3QgZXhwb3J0ZWQuIE1lc2ggZG9lcyBub3QgaGF2ZSBub3JtYWxzIHZlcnRleCBkYXRhYCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChtb3JwaFRhcmdldC5oYXNUYW5nZW50cykge1xyXG4gICAgICAgIGNvbnN0IG1vcnBoVGFuZ2VudHMgPSBtb3JwaFRhcmdldC5nZXRUYW5nZW50cygpITtcclxuICAgICAgICBjb25zdCBvcmlnaW5hbFRhbmdlbnRzID0gZ2VvbWV0cnkuZ2V0VmVydGljZXNEYXRhKFZlcnRleEJ1ZmZlci5UYW5nZW50S2luZCk7XHJcblxyXG4gICAgICAgIGlmIChvcmlnaW5hbFRhbmdlbnRzKSB7XHJcbiAgICAgICAgICAgIHZlcnRleENvdW50ID0gb3JpZ2luYWxUYW5nZW50cy5sZW5ndGggLyA0O1xyXG4gICAgICAgICAgICBjb25zdCB0YW5nZW50RGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkodmVydGV4Q291bnQgKiAzKTtcclxuICAgICAgICAgICAgdmVydGV4U3RhcnQgPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gdmVydGV4U3RhcnQ7IGkgPCB2ZXJ0ZXhDb3VudDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBPbmx5IHJlYWQgdGhlIHgsIHksIHogY29tcG9uZW50cyBhbmQgaWdub3JlIHdcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsVGFuZ2VudCA9IFZlY3RvcjMuRnJvbUFycmF5KG9yaWdpbmFsVGFuZ2VudHMsIGkgKiA0KTtcclxuICAgICAgICAgICAgICAgIE5vcm1hbGl6ZVRhbmdlbnQob3JpZ2luYWxUYW5nZW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBNb3JwaCB0YXJnZXQgdGFuZ2VudHMgb21pdCB0aGUgdyBjb21wb25lbnQgc28gaXQgd29uJ3QgYmUgcHJlc2VudCBpbiB0aGUgZGF0YVxyXG4gICAgICAgICAgICAgICAgY29uc3QgbW9ycGhUYW5nZW50ID0gVmVjdG9yMy5Gcm9tQXJyYXkobW9ycGhUYW5nZW50cywgaSAqIDMpO1xyXG4gICAgICAgICAgICAgICAgTm9ybWFsaXplVGFuZ2VudChtb3JwaFRhbmdlbnQpO1xyXG5cclxuICAgICAgICAgICAgICAgIG1vcnBoVGFuZ2VudC5zdWJ0cmFjdFRvUmVmKG9yaWdpbmFsVGFuZ2VudCwgZGlmZmVyZW5jZSk7XHJcbiAgICAgICAgICAgICAgICB0YW5nZW50RGF0YVtpICogM10gPSBkaWZmZXJlbmNlLnggKiBmbGlwWDtcclxuICAgICAgICAgICAgICAgIHRhbmdlbnREYXRhW2kgKiAzICsgMV0gPSBkaWZmZXJlbmNlLnk7XHJcbiAgICAgICAgICAgICAgICB0YW5nZW50RGF0YVtpICogMyArIDJdID0gZGlmZmVyZW5jZS56O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGJ1ZmZlclZpZXcgPSBidWZmZXJNYW5hZ2VyLmNyZWF0ZUJ1ZmZlclZpZXcodGFuZ2VudERhdGEsIGZsb2F0U2l6ZSAqIDMpO1xyXG4gICAgICAgICAgICBjb25zdCBhY2Nlc3NvciA9IGJ1ZmZlck1hbmFnZXIuY3JlYXRlQWNjZXNzb3IoYnVmZmVyVmlldywgQWNjZXNzb3JUeXBlLlZFQzMsIEFjY2Vzc29yQ29tcG9uZW50VHlwZS5GTE9BVCwgdmVydGV4Q291bnQsIDApO1xyXG4gICAgICAgICAgICBhY2Nlc3NvcnMucHVzaChhY2Nlc3Nvcik7XHJcbiAgICAgICAgICAgIHJlc3VsdC5hdHRyaWJ1dGVzW1wiVEFOR0VOVFwiXSA9IGFjY2Vzc29ycy5sZW5ndGggLSAxO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIFRvb2xzLldhcm4oYE1vcnBoIHRhcmdldCB0YW5nZW50cyBmb3IgbWVzaCAke21lc2gubmFtZX0gd2VyZSBub3QgZXhwb3J0ZWQuIE1lc2ggZG9lcyBub3QgaGF2ZSB0YW5nZW50cyB2ZXJ0ZXggZGF0YWApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAobW9ycGhUYXJnZXQuaGFzQ29sb3JzKSB7XHJcbiAgICAgICAgY29uc3QgbW9ycGhDb2xvcnMgPSBtb3JwaFRhcmdldC5nZXRDb2xvcnMoKSE7XHJcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxDb2xvcnMgPSBnZW9tZXRyeS5nZXRWZXJ0aWNlc0RhdGEoVmVydGV4QnVmZmVyLkNvbG9yS2luZCk7XHJcbiAgICAgICAgY29uc3QgYnVmZmVyID0gZ2VvbWV0cnkuZ2V0VmVydGV4QnVmZmVyKFZlcnRleEJ1ZmZlci5Db2xvcktpbmQpO1xyXG5cclxuICAgICAgICBpZiAob3JpZ2luYWxDb2xvcnMgJiYgYnVmZmVyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudFNpemUgPSBidWZmZXIuZ2V0U2l6ZSgpO1xyXG5cclxuICAgICAgICAgICAgdmVydGV4Q291bnQgPSBvcmlnaW5hbENvbG9ycy5sZW5ndGggLyBjb21wb25lbnRTaXplO1xyXG4gICAgICAgICAgICBjb25zdCBjb2xvckRhdGEgPSBuZXcgRmxvYXQzMkFycmF5KHZlcnRleENvdW50ICogY29tcG9uZW50U2l6ZSk7XHJcbiAgICAgICAgICAgIHZlcnRleFN0YXJ0ID0gMDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHZlcnRleFN0YXJ0OyBpIDwgdmVydGV4Q291bnQ7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbXBvbmVudFNpemUgPT09IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcmlnaW5hbENvbG9yID0gVmVjdG9yMy5Gcm9tQXJyYXkob3JpZ2luYWxDb2xvcnMsIGkgKiBjb21wb25lbnRTaXplKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtb3JwaENvbG9yID0gVmVjdG9yMy5Gcm9tQXJyYXkobW9ycGhDb2xvcnMsIGkgKiBjb21wb25lbnRTaXplKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbW9ycGhDb2xvci5zdWJ0cmFjdFRvUmVmKG9yaWdpbmFsQ29sb3IsIGRpZmZlcmVuY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yRGF0YVtpICogM10gPSBkaWZmZXJlbmNlLng7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3JEYXRhW2kgKiAzICsgMV0gPSBkaWZmZXJlbmNlLnk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3JEYXRhW2kgKiAzICsgMl0gPSBkaWZmZXJlbmNlLno7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvbXBvbmVudFNpemUgPT09IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkaWZmZXJlbmNlNCA9IG5ldyBWZWN0b3I0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxDb2xvciA9IFZlY3RvcjQuRnJvbUFycmF5KG9yaWdpbmFsQ29sb3JzLCBpICogY29tcG9uZW50U2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9ycGhDb2xvciA9IFZlY3RvcjQuRnJvbUFycmF5KG1vcnBoQ29sb3JzLCBpICogY29tcG9uZW50U2l6ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG1vcnBoQ29sb3Iuc3VidHJhY3RUb1JlZihvcmlnaW5hbENvbG9yLCBkaWZmZXJlbmNlNCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3JEYXRhW2kgKiA0XSA9IGRpZmZlcmVuY2U0Lng7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3JEYXRhW2kgKiA0ICsgMV0gPSBkaWZmZXJlbmNlNC55O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yRGF0YVtpICogNCArIDJdID0gZGlmZmVyZW5jZTQuejtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvckRhdGFbaSAqIDQgKyAzXSA9IGRpZmZlcmVuY2U0Lnc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIFRvb2xzLldhcm4oYFVuc3VwcG9ydGVkIG51bWJlciBvZiBjb21wb25lbnRzIGZvciBjb2xvciBhdHRyaWJ1dGU6ICR7Y29tcG9uZW50U2l6ZX1gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBidWZmZXJWaWV3ID0gYnVmZmVyTWFuYWdlci5jcmVhdGVCdWZmZXJWaWV3KGNvbG9yRGF0YSwgZmxvYXRTaXplICogY29tcG9uZW50U2l6ZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGFjY2Vzc29yID0gYnVmZmVyTWFuYWdlci5jcmVhdGVBY2Nlc3NvcihidWZmZXJWaWV3LCBjb21wb25lbnRTaXplID09PSAzID8gQWNjZXNzb3JUeXBlLlZFQzMgOiBBY2Nlc3NvclR5cGUuVkVDNCwgQWNjZXNzb3JDb21wb25lbnRUeXBlLkZMT0FULCB2ZXJ0ZXhDb3VudCwgMCk7XHJcbiAgICAgICAgICAgIGFjY2Vzc29ycy5wdXNoKGFjY2Vzc29yKTtcclxuICAgICAgICAgICAgcmVzdWx0LmF0dHJpYnV0ZXNbXCJDT0xPUl8wXCJdID0gYWNjZXNzb3JzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgVG9vbHMuV2FybihgTW9ycGggdGFyZ2V0IGNvbG9ycyBmb3IgbWVzaCAke21lc2gubmFtZX0gd2VyZSBub3QgZXhwb3J0ZWQuIE1lc2ggZG9lcyBub3QgaGF2ZSBjb2xvcnMgdmVydGV4IGRhdGFgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG4iLCJpbXBvcnQgdHlwZSB7IE5vZGUgfSBmcm9tIFwiY29yZS9ub2RlXCI7XHJcbmltcG9ydCB0eXBlIHsgU2NlbmUgfSBmcm9tIFwiY29yZS9zY2VuZVwiO1xyXG5pbXBvcnQgdHlwZSB7IEFuaW1hdGlvbiB9IGZyb20gXCJjb3JlL0FuaW1hdGlvbnMvYW5pbWF0aW9uXCI7XHJcbmltcG9ydCB0eXBlIHsgR0xURkRhdGEgfSBmcm9tIFwiLi9nbFRGRGF0YVwiO1xyXG5pbXBvcnQgeyBHTFRGRXhwb3J0ZXIgfSBmcm9tIFwiLi9nbFRGRXhwb3J0ZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBNZXNoIGNvbXByZXNzaW9uIG1ldGhvZHMuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBNZXNoQ29tcHJlc3Npb25NZXRob2QgPSBcIk5vbmVcIiB8IFwiRHJhY29cIjtcclxuXHJcbi8qKlxyXG4gKiBIb2xkcyBhIGNvbGxlY3Rpb24gb2YgZXhwb3J0ZXIgb3B0aW9ucyBhbmQgcGFyYW1ldGVyc1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRXhwb3J0T3B0aW9ucyB7XHJcbiAgICAvKipcclxuICAgICAqIEZ1bmN0aW9uIHdoaWNoIGluZGljYXRlcyB3aGV0aGVyIGEgYmFieWxvbiBub2RlIHNob3VsZCBiZSBleHBvcnRlZCBvciBub3RcclxuICAgICAqIEBwYXJhbSBub2RlIHNvdXJjZSBCYWJ5bG9uIG5vZGUuIEl0IGlzIHVzZWQgdG8gY2hlY2sgd2hldGhlciBpdCBzaG91bGQgYmUgZXhwb3J0ZWQgdG8gZ2xURiBvciBub3RcclxuICAgICAqIEByZXR1cm5zIGJvb2xlYW4sIHdoaWNoIGluZGljYXRlcyB3aGV0aGVyIHRoZSBub2RlIHNob3VsZCBiZSBleHBvcnRlZCAodHJ1ZSkgb3Igbm90IChmYWxzZSlcclxuICAgICAqL1xyXG4gICAgc2hvdWxkRXhwb3J0Tm9kZT8obm9kZTogTm9kZSk6IGJvb2xlYW47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGdW5jdGlvbiB3aGljaCBpbmRpY2F0ZXMgd2hldGhlciBhbiBhbmltYXRpb24gb24gdGhlIHNjZW5lIHNob3VsZCBiZSBleHBvcnRlZCBvciBub3RcclxuICAgICAqIEBwYXJhbSBhbmltYXRpb24gc291cmNlIGFuaW1hdGlvblxyXG4gICAgICogQHJldHVybnMgYm9vbGVhbiwgd2hpY2ggaW5kaWNhdGVzIHdoZXRoZXIgdGhlIGFuaW1hdGlvbiBzaG91bGQgYmUgZXhwb3J0ZWQgKHRydWUpIG9yIG5vdCAoZmFsc2UpXHJcbiAgICAgKi9cclxuICAgIHNob3VsZEV4cG9ydEFuaW1hdGlvbj8oYW5pbWF0aW9uOiBBbmltYXRpb24pOiBib29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRnVuY3Rpb24gdG8gZXh0cmFjdCB0aGUgcGFydCBvZiB0aGUgc2NlbmUgb3Igbm9kZSdzIGBtZXRhZGF0YWAgdGhhdCB3aWxsIHBvcHVsYXRlIHRoZSBjb3JyZXNwb25kaW5nXHJcbiAgICAgKiBnbFRGIG9iamVjdCdzIGBleHRyYXNgIGZpZWxkLiBJZiBub3QgZGVmaW5lZCwgYG5vZGUubWV0YWRhdGEuZ2x0Zi5leHRyYXNgIHdpbGwgYmUgdXNlZC5cclxuICAgICAqIEBwYXJhbSBtZXRhZGF0YSBzb3VyY2UgbWV0YWRhdGEgdG8gcmVhZCBmcm9tXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgZGF0YSB0byBzdG9yZSBpbnRvIHRoZSBnbFRGIGV4dHJhcyBmaWVsZFxyXG4gICAgICovXHJcbiAgICBtZXRhZGF0YVNlbGVjdG9yPyhtZXRhZGF0YTogYW55KTogYW55O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHNhbXBsZSByYXRlIHRvIGJha2UgYW5pbWF0aW9uIGN1cnZlcy4gRGVmYXVsdHMgdG8gMSAvIDYwLlxyXG4gICAgICovXHJcbiAgICBhbmltYXRpb25TYW1wbGVSYXRlPzogbnVtYmVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQmVnaW4gc2VyaWFsaXphdGlvbiB3aXRob3V0IHdhaXRpbmcgZm9yIHRoZSBzY2VuZSB0byBiZSByZWFkeS4gRGVmYXVsdHMgdG8gZmFsc2UuXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydFdpdGhvdXRXYWl0aW5nRm9yU2NlbmU/OiBib29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5kaWNhdGVzIGlmIHVudXNlZCB2ZXJ0ZXggdXYgYXR0cmlidXRlcyBzaG91bGQgYmUgaW5jbHVkZWQgaW4gZXhwb3J0LiBEZWZhdWx0cyB0byBmYWxzZS5cclxuICAgICAqL1xyXG4gICAgZXhwb3J0VW51c2VkVVZzPzogYm9vbGVhbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZSBuby1vcCByb290IG5vZGVzIHdoZW4gcG9zc2libGUuIERlZmF1bHRzIHRvIHRydWUuXHJcbiAgICAgKi9cclxuICAgIHJlbW92ZU5vb3BSb290Tm9kZXM/OiBib29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5kaWNhdGVzIGlmIGNvb3JkaW5hdGUgc3lzdGVtIHN3YXBwaW5nIHJvb3Qgbm9kZXMgc2hvdWxkIGJlIGluY2x1ZGVkIGluIGV4cG9ydC4gRGVmYXVsdHMgdG8gZmFsc2UuXHJcbiAgICAgKiBAZGVwcmVjYXRlZCBQbGVhc2UgdXNlIHJlbW92ZU5vb3BSb290Tm9kZXMgaW5zdGVhZFxyXG4gICAgICovXHJcbiAgICBpbmNsdWRlQ29vcmRpbmF0ZVN5c3RlbUNvbnZlcnNpb25Ob2Rlcz86IGJvb2xlYW47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbmRpY2F0ZXMgd2hhdCBjb21wcmVzc2lvbiBtZXRob2QgdG8gYXBwbHkgdG8gbWVzaCBkYXRhLlxyXG4gICAgICovXHJcbiAgICBtZXNoQ29tcHJlc3Npb25NZXRob2Q/OiBNZXNoQ29tcHJlc3Npb25NZXRob2Q7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDbGFzcyBmb3IgZ2VuZXJhdGluZyBnbFRGIGRhdGEgZnJvbSBhIEJhYnlsb24gc2NlbmUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgR0xURjJFeHBvcnQge1xyXG4gICAgLyoqXHJcbiAgICAgKiBFeHBvcnRzIHRoZSBzY2VuZSB0byAuZ2x0ZiBmaWxlIGZvcm1hdFxyXG4gICAgICogQHBhcmFtIHNjZW5lIEJhYnlsb24gc2NlbmVcclxuICAgICAqIEBwYXJhbSBmaWxlTmFtZSBOYW1lIHRvIHVzZSBmb3IgdGhlIC5nbHRmIGZpbGVcclxuICAgICAqIEBwYXJhbSBvcHRpb25zIEV4cG9ydGVyIG9wdGlvbnNcclxuICAgICAqIEByZXR1cm5zIFJldHVybnMgdGhlIGV4cG9ydGVkIGRhdGFcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBHTFRGQXN5bmMoc2NlbmU6IFNjZW5lLCBmaWxlTmFtZTogc3RyaW5nLCBvcHRpb25zPzogSUV4cG9ydE9wdGlvbnMpOiBQcm9taXNlPEdMVEZEYXRhPiB7XHJcbiAgICAgICAgaWYgKCFvcHRpb25zIHx8ICFvcHRpb25zLmV4cG9ydFdpdGhvdXRXYWl0aW5nRm9yU2NlbmUpIHtcclxuICAgICAgICAgICAgYXdhaXQgc2NlbmUud2hlblJlYWR5QXN5bmMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGV4cG9ydGVyID0gbmV3IEdMVEZFeHBvcnRlcihzY2VuZSwgb3B0aW9ucyk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGV4cG9ydGVyLmdlbmVyYXRlR0xURkFzeW5jKGZpbGVOYW1lLnJlcGxhY2UoL1xcLlteLy5dKyQvLCBcIlwiKSk7XHJcbiAgICAgICAgZXhwb3J0ZXIuZGlzcG9zZSgpO1xyXG5cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEV4cG9ydHMgdGhlIHNjZW5lIHRvIC5nbGIgZmlsZSBmb3JtYXRcclxuICAgICAqIEBwYXJhbSBzY2VuZSBCYWJ5bG9uIHNjZW5lXHJcbiAgICAgKiBAcGFyYW0gZmlsZU5hbWUgTmFtZSB0byB1c2UgZm9yIHRoZSAuZ2xiIGZpbGVcclxuICAgICAqIEBwYXJhbSBvcHRpb25zIEV4cG9ydGVyIG9wdGlvbnNcclxuICAgICAqIEByZXR1cm5zIFJldHVybnMgdGhlIGV4cG9ydGVkIGRhdGFcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBHTEJBc3luYyhzY2VuZTogU2NlbmUsIGZpbGVOYW1lOiBzdHJpbmcsIG9wdGlvbnM/OiBJRXhwb3J0T3B0aW9ucyk6IFByb21pc2U8R0xURkRhdGE+IHtcclxuICAgICAgICBpZiAoIW9wdGlvbnMgfHwgIW9wdGlvbnMuZXhwb3J0V2l0aG91dFdhaXRpbmdGb3JTY2VuZSkge1xyXG4gICAgICAgICAgICBhd2FpdCBzY2VuZS53aGVuUmVhZHlBc3luYygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZXhwb3J0ZXIgPSBuZXcgR0xURkV4cG9ydGVyKHNjZW5lLCBvcHRpb25zKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZXhwb3J0ZXIuZ2VuZXJhdGVHTEJBc3luYyhmaWxlTmFtZS5yZXBsYWNlKC9cXC5bXi8uXSskLywgXCJcIikpO1xyXG4gICAgICAgIGV4cG9ydGVyLmRpc3Bvc2UoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUganNkb2MvcmVxdWlyZS1qc2RvYyAqL1xyXG5cclxuaW1wb3J0IHR5cGUgeyBJTm9kZSB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgQWNjZXNzb3JUeXBlLCBNZXNoUHJpbWl0aXZlTW9kZSB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHR5cGUgeyBGbG9hdEFycmF5LCBEYXRhQXJyYXksIEluZGljZXNBcnJheSB9IGZyb20gXCJjb3JlL3R5cGVzXCI7XHJcbmltcG9ydCB0eXBlIHsgVmVjdG9yNCB9IGZyb20gXCJjb3JlL01hdGhzL21hdGgudmVjdG9yXCI7XHJcbmltcG9ydCB7IFF1YXRlcm5pb24sIFRtcFZlY3RvcnMsIE1hdHJpeCwgVmVjdG9yMyB9IGZyb20gXCJjb3JlL01hdGhzL21hdGgudmVjdG9yXCI7XHJcbmltcG9ydCB7IFZlcnRleEJ1ZmZlciB9IGZyb20gXCJjb3JlL0J1ZmZlcnMvYnVmZmVyXCI7XHJcbmltcG9ydCB7IE1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IFRyYW5zZm9ybU5vZGUgfSBmcm9tIFwiY29yZS9NZXNoZXMvdHJhbnNmb3JtTm9kZVwiO1xyXG5pbXBvcnQgeyBBYnN0cmFjdE1lc2ggfSBmcm9tIFwiY29yZS9NZXNoZXMvYWJzdHJhY3RNZXNoXCI7XHJcbmltcG9ydCB7IEVudW1lcmF0ZUZsb2F0VmFsdWVzIH0gZnJvbSBcImNvcmUvQnVmZmVycy9idWZmZXJVdGlsc1wiO1xyXG5pbXBvcnQgdHlwZSB7IE5vZGUgfSBmcm9tIFwiY29yZS9ub2RlXCI7XHJcblxyXG4vLyBNYXRyaXggdGhhdCBjb252ZXJ0cyBoYW5kZWRuZXNzIG9uIHRoZSBYLWF4aXMuXHJcbmNvbnN0IGNvbnZlcnRIYW5kZWRuZXNzTWF0cml4ID0gTWF0cml4LkNvbXBvc2UobmV3IFZlY3RvcjMoLTEsIDEsIDEpLCBRdWF0ZXJuaW9uLklkZW50aXR5KCksIFZlY3RvcjMuWmVybygpKTtcclxuXHJcbi8vIDE4MCBkZWdyZWVzIHJvdGF0aW9uIGluIFkuXHJcbmNvbnN0IHJvdGF0aW9uMTgwWSA9IG5ldyBRdWF0ZXJuaW9uKDAsIDEsIDAsIDApO1xyXG5cclxuLy8gRGVmYXVsdCB2YWx1ZXMgZm9yIGNvbXBhcmlzb24uXHJcbmNvbnN0IGVwc2lsb24gPSAxZS02O1xyXG5jb25zdCBkZWZhdWx0VHJhbnNsYXRpb24gPSBWZWN0b3IzLlplcm8oKTtcclxuY29uc3QgZGVmYXVsdFNjYWxlID0gVmVjdG9yMy5PbmUoKTtcclxuXHJcbi8qKlxyXG4gKiBHZXQgdGhlIGluZm9ybWF0aW9uIG5lY2Vzc2FyeSBmb3IgZW51bWVyYXRpbmcgYSB2ZXJ0ZXggYnVmZmVyLlxyXG4gKiBAcGFyYW0gdmVydGV4QnVmZmVyIHRoZSB2ZXJ0ZXggYnVmZmVyIHRvIGVudW1lcmF0ZVxyXG4gKiBAcGFyYW0gbWVzaGVzIHRoZSBtZXNoZXMgdGhhdCB1c2UgdGhlIHZlcnRleCBidWZmZXJcclxuICogQHJldHVybnMgdGhlIGluZm9ybWF0aW9uIG5lY2Vzc2FyeSB0byBlbnVtZXJhdGUgdGhlIHZlcnRleCBidWZmZXJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBHZXRWZXJ0ZXhCdWZmZXJJbmZvKHZlcnRleEJ1ZmZlcjogVmVydGV4QnVmZmVyLCBtZXNoZXM6IEFic3RyYWN0TWVzaFtdKSB7XHJcbiAgICBjb25zdCB7IGJ5dGVPZmZzZXQsIGJ5dGVTdHJpZGUsIHR5cGUsIG5vcm1hbGl6ZWQgfSA9IHZlcnRleEJ1ZmZlcjtcclxuICAgIGNvbnN0IGNvbXBvbmVudENvdW50ID0gdmVydGV4QnVmZmVyLmdldFNpemUoKTtcclxuICAgIGNvbnN0IHRvdGFsVmVydGljZXMgPSBtZXNoZXMucmVkdWNlKChtYXgsIGN1cnJlbnQpID0+IHtcclxuICAgICAgICByZXR1cm4gY3VycmVudC5nZXRUb3RhbFZlcnRpY2VzKCkgPiBtYXggPyBjdXJyZW50LmdldFRvdGFsVmVydGljZXMoKSA6IG1heDtcclxuICAgIH0sIC1OdW1iZXIuTUFYX1ZBTFVFKTsgLy8gR2V0IHRoZSBtYXggdG90YWwgdmVydGljZXMgY291bnQsIHRvIGVuc3VyZSB3ZSBjYXB0dXJlIHRoZSBmdWxsIHJhbmdlIG9mIHZlcnRleCBkYXRhIHVzZWQgYnkgdGhlIG1lc2hlcy5cclxuICAgIGNvbnN0IGNvdW50ID0gdG90YWxWZXJ0aWNlcyAqIGNvbXBvbmVudENvdW50O1xyXG4gICAgY29uc3Qga2luZCA9IHZlcnRleEJ1ZmZlci5nZXRLaW5kKCk7XHJcblxyXG4gICAgcmV0dXJuIHsgYnl0ZU9mZnNldCwgYnl0ZVN0cmlkZSwgY29tcG9uZW50Q291bnQsIHR5cGUsIGNvdW50LCBub3JtYWxpemVkLCB0b3RhbFZlcnRpY2VzLCBraW5kIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHZXRBY2Nlc3NvckVsZW1lbnRDb3VudChhY2Nlc3NvclR5cGU6IEFjY2Vzc29yVHlwZSk6IG51bWJlciB7XHJcbiAgICBzd2l0Y2ggKGFjY2Vzc29yVHlwZSkge1xyXG4gICAgICAgIGNhc2UgQWNjZXNzb3JUeXBlLk1BVDI6XHJcbiAgICAgICAgICAgIHJldHVybiA0O1xyXG4gICAgICAgIGNhc2UgQWNjZXNzb3JUeXBlLk1BVDM6XHJcbiAgICAgICAgICAgIHJldHVybiA5O1xyXG4gICAgICAgIGNhc2UgQWNjZXNzb3JUeXBlLk1BVDQ6XHJcbiAgICAgICAgICAgIHJldHVybiAxNjtcclxuICAgICAgICBjYXNlIEFjY2Vzc29yVHlwZS5TQ0FMQVI6XHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIGNhc2UgQWNjZXNzb3JUeXBlLlZFQzI6XHJcbiAgICAgICAgICAgIHJldHVybiAyO1xyXG4gICAgICAgIGNhc2UgQWNjZXNzb3JUeXBlLlZFQzM6XHJcbiAgICAgICAgICAgIHJldHVybiAzO1xyXG4gICAgICAgIGNhc2UgQWNjZXNzb3JUeXBlLlZFQzQ6XHJcbiAgICAgICAgICAgIHJldHVybiA0O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRmxvYXRzTmVlZDE2Qml0SW50ZWdlcihmbG9hdEFycmF5OiBGbG9hdEFycmF5KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZmxvYXRBcnJheS5zb21lKCh2YWx1ZSkgPT4gdmFsdWUgPj0gMjU2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIElzU3RhbmRhcmRWZXJ0ZXhBdHRyaWJ1dGUodHlwZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5Qb3NpdGlvbktpbmQ6XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuTm9ybWFsS2luZDpcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5UYW5nZW50S2luZDpcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5Db2xvcktpbmQ6XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuTWF0cmljZXNJbmRpY2VzS2luZDpcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5NYXRyaWNlc0luZGljZXNFeHRyYUtpbmQ6XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuTWF0cmljZXNXZWlnaHRzS2luZDpcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5NYXRyaWNlc1dlaWdodHNFeHRyYUtpbmQ6XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuVVZLaW5kOlxyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLlVWMktpbmQ6XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuVVYzS2luZDpcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5VVjRLaW5kOlxyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLlVWNUtpbmQ6XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuVVY2S2luZDpcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHZXRBY2Nlc3NvclR5cGUoa2luZDogc3RyaW5nLCBoYXNWZXJ0ZXhDb2xvckFscGhhOiBib29sZWFuKTogQWNjZXNzb3JUeXBlIHtcclxuICAgIGlmIChraW5kID09IFZlcnRleEJ1ZmZlci5Db2xvcktpbmQpIHtcclxuICAgICAgICByZXR1cm4gaGFzVmVydGV4Q29sb3JBbHBoYSA/IEFjY2Vzc29yVHlwZS5WRUM0IDogQWNjZXNzb3JUeXBlLlZFQzM7XHJcbiAgICB9XHJcblxyXG4gICAgc3dpdGNoIChraW5kKSB7XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuUG9zaXRpb25LaW5kOlxyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLk5vcm1hbEtpbmQ6XHJcbiAgICAgICAgICAgIHJldHVybiBBY2Nlc3NvclR5cGUuVkVDMztcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5UYW5nZW50S2luZDpcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5NYXRyaWNlc0luZGljZXNLaW5kOlxyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLk1hdHJpY2VzSW5kaWNlc0V4dHJhS2luZDpcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5NYXRyaWNlc1dlaWdodHNLaW5kOlxyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLk1hdHJpY2VzV2VpZ2h0c0V4dHJhS2luZDpcclxuICAgICAgICAgICAgcmV0dXJuIEFjY2Vzc29yVHlwZS5WRUM0O1xyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLlVWS2luZDpcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5VVjJLaW5kOlxyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLlVWM0tpbmQ6XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuVVY0S2luZDpcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5VVjVLaW5kOlxyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLlVWNktpbmQ6XHJcbiAgICAgICAgICAgIHJldHVybiBBY2Nlc3NvclR5cGUuVkVDMjtcclxuICAgIH1cclxuXHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24ga2luZCAke2tpbmR9YCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHZXRBdHRyaWJ1dGVUeXBlKGtpbmQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBzd2l0Y2ggKGtpbmQpIHtcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5Qb3NpdGlvbktpbmQ6XHJcbiAgICAgICAgICAgIHJldHVybiBcIlBPU0lUSU9OXCI7XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuTm9ybWFsS2luZDpcclxuICAgICAgICAgICAgcmV0dXJuIFwiTk9STUFMXCI7XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuVGFuZ2VudEtpbmQ6XHJcbiAgICAgICAgICAgIHJldHVybiBcIlRBTkdFTlRcIjtcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5Db2xvcktpbmQ6XHJcbiAgICAgICAgICAgIHJldHVybiBcIkNPTE9SXzBcIjtcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5VVktpbmQ6XHJcbiAgICAgICAgICAgIHJldHVybiBcIlRFWENPT1JEXzBcIjtcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5VVjJLaW5kOlxyXG4gICAgICAgICAgICByZXR1cm4gXCJURVhDT09SRF8xXCI7XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuVVYzS2luZDpcclxuICAgICAgICAgICAgcmV0dXJuIFwiVEVYQ09PUkRfMlwiO1xyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLlVWNEtpbmQ6XHJcbiAgICAgICAgICAgIHJldHVybiBcIlRFWENPT1JEXzNcIjtcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5VVjVLaW5kOlxyXG4gICAgICAgICAgICByZXR1cm4gXCJURVhDT09SRF80XCI7XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuVVY2S2luZDpcclxuICAgICAgICAgICAgcmV0dXJuIFwiVEVYQ09PUkRfNVwiO1xyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLk1hdHJpY2VzSW5kaWNlc0tpbmQ6XHJcbiAgICAgICAgICAgIHJldHVybiBcIkpPSU5UU18wXCI7XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuTWF0cmljZXNJbmRpY2VzRXh0cmFLaW5kOlxyXG4gICAgICAgICAgICByZXR1cm4gXCJKT0lOVFNfMVwiO1xyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLk1hdHJpY2VzV2VpZ2h0c0tpbmQ6XHJcbiAgICAgICAgICAgIHJldHVybiBcIldFSUdIVFNfMFwiO1xyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLk1hdHJpY2VzV2VpZ2h0c0V4dHJhS2luZDpcclxuICAgICAgICAgICAgcmV0dXJuIFwiV0VJR0hUU18xXCI7XHJcbiAgICB9XHJcblxyXG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGtpbmQ6ICR7a2luZH1gKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdldFByaW1pdGl2ZU1vZGUoZmlsbE1vZGU6IG51bWJlcik6IE1lc2hQcmltaXRpdmVNb2RlIHtcclxuICAgIHN3aXRjaCAoZmlsbE1vZGUpIHtcclxuICAgICAgICBjYXNlIE1hdGVyaWFsLlRyaWFuZ2xlRmlsbE1vZGU6XHJcbiAgICAgICAgICAgIHJldHVybiBNZXNoUHJpbWl0aXZlTW9kZS5UUklBTkdMRVM7XHJcbiAgICAgICAgY2FzZSBNYXRlcmlhbC5UcmlhbmdsZVN0cmlwRHJhd01vZGU6XHJcbiAgICAgICAgICAgIHJldHVybiBNZXNoUHJpbWl0aXZlTW9kZS5UUklBTkdMRV9TVFJJUDtcclxuICAgICAgICBjYXNlIE1hdGVyaWFsLlRyaWFuZ2xlRmFuRHJhd01vZGU6XHJcbiAgICAgICAgICAgIHJldHVybiBNZXNoUHJpbWl0aXZlTW9kZS5UUklBTkdMRV9GQU47XHJcbiAgICAgICAgY2FzZSBNYXRlcmlhbC5Qb2ludExpc3REcmF3TW9kZTpcclxuICAgICAgICBjYXNlIE1hdGVyaWFsLlBvaW50RmlsbE1vZGU6XHJcbiAgICAgICAgICAgIHJldHVybiBNZXNoUHJpbWl0aXZlTW9kZS5QT0lOVFM7XHJcbiAgICAgICAgY2FzZSBNYXRlcmlhbC5MaW5lTG9vcERyYXdNb2RlOlxyXG4gICAgICAgICAgICByZXR1cm4gTWVzaFByaW1pdGl2ZU1vZGUuTElORV9MT09QO1xyXG4gICAgICAgIGNhc2UgTWF0ZXJpYWwuTGluZUxpc3REcmF3TW9kZTpcclxuICAgICAgICAgICAgcmV0dXJuIE1lc2hQcmltaXRpdmVNb2RlLkxJTkVTO1xyXG4gICAgICAgIGNhc2UgTWF0ZXJpYWwuTGluZVN0cmlwRHJhd01vZGU6XHJcbiAgICAgICAgICAgIHJldHVybiBNZXNoUHJpbWl0aXZlTW9kZS5MSU5FX1NUUklQO1xyXG4gICAgfVxyXG5cclxuICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBmaWxsIG1vZGU6ICR7ZmlsbE1vZGV9YCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBJc1RyaWFuZ2xlRmlsbE1vZGUoZmlsbE1vZGU6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgc3dpdGNoIChmaWxsTW9kZSkge1xyXG4gICAgICAgIGNhc2UgTWF0ZXJpYWwuVHJpYW5nbGVGaWxsTW9kZTpcclxuICAgICAgICBjYXNlIE1hdGVyaWFsLlRyaWFuZ2xlU3RyaXBEcmF3TW9kZTpcclxuICAgICAgICBjYXNlIE1hdGVyaWFsLlRyaWFuZ2xlRmFuRHJhd01vZGU6XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE5vcm1hbGl6ZVRhbmdlbnQodGFuZ2VudDogVmVjdG9yNCB8IFZlY3RvcjMpIHtcclxuICAgIGNvbnN0IGxlbmd0aCA9IE1hdGguc3FydCh0YW5nZW50LnggKiB0YW5nZW50LnggKyB0YW5nZW50LnkgKiB0YW5nZW50LnkgKyB0YW5nZW50LnogKiB0YW5nZW50LnopO1xyXG4gICAgaWYgKGxlbmd0aCA+IDApIHtcclxuICAgICAgICB0YW5nZW50LnggLz0gbGVuZ3RoO1xyXG4gICAgICAgIHRhbmdlbnQueSAvPSBsZW5ndGg7XHJcbiAgICAgICAgdGFuZ2VudC56IC89IGxlbmd0aDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENvbnZlcnRUb1JpZ2h0SGFuZGVkUG9zaXRpb24odmFsdWU6IFZlY3RvcjMpOiBWZWN0b3IzIHtcclxuICAgIHZhbHVlLnggKj0gLTE7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDb252ZXJ0VG9SaWdodEhhbmRlZFJvdGF0aW9uKHZhbHVlOiBRdWF0ZXJuaW9uKTogUXVhdGVybmlvbiB7XHJcbiAgICB2YWx1ZS54ICo9IC0xO1xyXG4gICAgdmFsdWUueSAqPSAtMTtcclxuICAgIHJldHVybiB2YWx1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENvbnZlcnRUb1JpZ2h0SGFuZGVkTm9kZSh2YWx1ZTogSU5vZGUpIHtcclxuICAgIGxldCB0cmFuc2xhdGlvbiA9IFZlY3RvcjMuRnJvbUFycmF5VG9SZWYodmFsdWUudHJhbnNsYXRpb24gfHwgWzAsIDAsIDBdLCAwLCBUbXBWZWN0b3JzLlZlY3RvcjNbMF0pO1xyXG4gICAgbGV0IHJvdGF0aW9uID0gUXVhdGVybmlvbi5Gcm9tQXJyYXlUb1JlZih2YWx1ZS5yb3RhdGlvbiB8fCBbMCwgMCwgMCwgMV0sIDAsIFRtcFZlY3RvcnMuUXVhdGVybmlvblswXSk7XHJcblxyXG4gICAgdHJhbnNsYXRpb24gPSBDb252ZXJ0VG9SaWdodEhhbmRlZFBvc2l0aW9uKHRyYW5zbGF0aW9uKTtcclxuICAgIHJvdGF0aW9uID0gQ29udmVydFRvUmlnaHRIYW5kZWRSb3RhdGlvbihyb3RhdGlvbik7XHJcblxyXG4gICAgaWYgKHRyYW5zbGF0aW9uLmVxdWFsc1dpdGhFcHNpbG9uKGRlZmF1bHRUcmFuc2xhdGlvbiwgZXBzaWxvbikpIHtcclxuICAgICAgICBkZWxldGUgdmFsdWUudHJhbnNsYXRpb247XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhbHVlLnRyYW5zbGF0aW9uID0gdHJhbnNsYXRpb24uYXNBcnJheSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChRdWF0ZXJuaW9uLklzSWRlbnRpdHkocm90YXRpb24pKSB7XHJcbiAgICAgICAgZGVsZXRlIHZhbHVlLnJvdGF0aW9uO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB2YWx1ZS5yb3RhdGlvbiA9IHJvdGF0aW9uLmFzQXJyYXkoKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFJvdGF0aW9uIGJ5IDE4MCBhcyBnbFRGIGhhcyBhIGRpZmZlcmVudCBjb252ZW50aW9uIHRoYW4gQmFieWxvbi5cclxuICogQHBhcmFtIHJvdGF0aW9uIFRhcmdldCBjYW1lcmEgcm90YXRpb24uXHJcbiAqIEByZXR1cm5zIFJlZiB0byBjYW1lcmEgcm90YXRpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gQ29udmVydENhbWVyYVJvdGF0aW9uVG9HTFRGKHJvdGF0aW9uOiBRdWF0ZXJuaW9uKTogUXVhdGVybmlvbiB7XHJcbiAgICByZXR1cm4gcm90YXRpb24ubXVsdGlwbHlJblBsYWNlKHJvdGF0aW9uMTgwWSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBSb3RhdGVOb2RlMTgwWShub2RlOiBJTm9kZSkge1xyXG4gICAgY29uc3Qgcm90YXRpb24gPSBRdWF0ZXJuaW9uLkZyb21BcnJheVRvUmVmKG5vZGUucm90YXRpb24gfHwgWzAsIDAsIDAsIDFdLCAwLCBUbXBWZWN0b3JzLlF1YXRlcm5pb25bMV0pO1xyXG4gICAgcm90YXRpb24xODBZLm11bHRpcGx5VG9SZWYocm90YXRpb24sIHJvdGF0aW9uKTtcclxuICAgIG5vZGUucm90YXRpb24gPSByb3RhdGlvbi5hc0FycmF5KCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb2xsYXBzZXMgR0xURiBwYXJlbnQgYW5kIG5vZGUgaW50byBhIHNpbmdsZSBub2RlLiBUaGlzIGlzIHVzZWZ1bCBmb3IgcmVtb3Zpbmcgbm9kZXMgdGhhdCB3ZXJlIGFkZGVkIGJ5IHRoZSBHTFRGIGltcG9ydGVyLlxyXG4gKiBAcGFyYW0gbm9kZSBUYXJnZXQgcGFyZW50IG5vZGUuXHJcbiAqIEBwYXJhbSBwYXJlbnROb2RlIE9yaWdpbmFsIEdMVEYgbm9kZSAoTGlnaHQgb3IgQ2FtZXJhKS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBDb2xsYXBzZVBhcmVudE5vZGUobm9kZTogSU5vZGUsIHBhcmVudE5vZGU6IElOb2RlKSB7XHJcbiAgICBjb25zdCBwYXJlbnRUcmFuc2xhdGlvbiA9IFZlY3RvcjMuRnJvbUFycmF5VG9SZWYocGFyZW50Tm9kZS50cmFuc2xhdGlvbiB8fCBbMCwgMCwgMF0sIDAsIFRtcFZlY3RvcnMuVmVjdG9yM1swXSk7XHJcbiAgICBjb25zdCBwYXJlbnRSb3RhdGlvbiA9IFF1YXRlcm5pb24uRnJvbUFycmF5VG9SZWYocGFyZW50Tm9kZS5yb3RhdGlvbiB8fCBbMCwgMCwgMCwgMV0sIDAsIFRtcFZlY3RvcnMuUXVhdGVybmlvblswXSk7XHJcbiAgICBjb25zdCBwYXJlbnRTY2FsZSA9IFZlY3RvcjMuRnJvbUFycmF5VG9SZWYocGFyZW50Tm9kZS5zY2FsZSB8fCBbMSwgMSwgMV0sIDAsIFRtcFZlY3RvcnMuVmVjdG9yM1sxXSk7XHJcbiAgICBjb25zdCBwYXJlbnRNYXRyaXggPSBNYXRyaXguQ29tcG9zZVRvUmVmKHBhcmVudFNjYWxlLCBwYXJlbnRSb3RhdGlvbiwgcGFyZW50VHJhbnNsYXRpb24sIFRtcFZlY3RvcnMuTWF0cml4WzBdKTtcclxuXHJcbiAgICBjb25zdCB0cmFuc2xhdGlvbiA9IFZlY3RvcjMuRnJvbUFycmF5VG9SZWYobm9kZS50cmFuc2xhdGlvbiB8fCBbMCwgMCwgMF0sIDAsIFRtcFZlY3RvcnMuVmVjdG9yM1syXSk7XHJcbiAgICBjb25zdCByb3RhdGlvbiA9IFF1YXRlcm5pb24uRnJvbUFycmF5VG9SZWYobm9kZS5yb3RhdGlvbiB8fCBbMCwgMCwgMCwgMV0sIDAsIFRtcFZlY3RvcnMuUXVhdGVybmlvblsxXSk7XHJcbiAgICBjb25zdCBzY2FsZSA9IFZlY3RvcjMuRnJvbUFycmF5VG9SZWYobm9kZS5zY2FsZSB8fCBbMSwgMSwgMV0sIDAsIFRtcFZlY3RvcnMuVmVjdG9yM1sxXSk7XHJcbiAgICBjb25zdCBtYXRyaXggPSBNYXRyaXguQ29tcG9zZVRvUmVmKHNjYWxlLCByb3RhdGlvbiwgdHJhbnNsYXRpb24sIFRtcFZlY3RvcnMuTWF0cml4WzFdKTtcclxuXHJcbiAgICBwYXJlbnRNYXRyaXgubXVsdGlwbHlUb1JlZihtYXRyaXgsIG1hdHJpeCk7XHJcbiAgICBtYXRyaXguZGVjb21wb3NlKHBhcmVudFNjYWxlLCBwYXJlbnRSb3RhdGlvbiwgcGFyZW50VHJhbnNsYXRpb24pO1xyXG5cclxuICAgIGlmIChwYXJlbnRUcmFuc2xhdGlvbi5lcXVhbHNXaXRoRXBzaWxvbihkZWZhdWx0VHJhbnNsYXRpb24sIGVwc2lsb24pKSB7XHJcbiAgICAgICAgZGVsZXRlIHBhcmVudE5vZGUudHJhbnNsYXRpb247XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHBhcmVudE5vZGUudHJhbnNsYXRpb24gPSBwYXJlbnRUcmFuc2xhdGlvbi5hc0FycmF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKFF1YXRlcm5pb24uSXNJZGVudGl0eShwYXJlbnRSb3RhdGlvbikpIHtcclxuICAgICAgICBkZWxldGUgcGFyZW50Tm9kZS5yb3RhdGlvbjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcGFyZW50Tm9kZS5yb3RhdGlvbiA9IHBhcmVudFJvdGF0aW9uLmFzQXJyYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocGFyZW50U2NhbGUuZXF1YWxzV2l0aEVwc2lsb24oZGVmYXVsdFNjYWxlLCBlcHNpbG9uKSkge1xyXG4gICAgICAgIGRlbGV0ZSBwYXJlbnROb2RlLnNjYWxlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBwYXJlbnROb2RlLnNjYWxlID0gcGFyZW50U2NhbGUuYXNBcnJheSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogU29tZXRpbWVzIHRoZSBHTFRGIEltcG9ydGVyIGNhbiBhZGQgZXh0cmEgdHJhbnNmb3JtIG5vZGVzIChmb3IgbGlnaHRzIGFuZCBjYW1lcmFzKS4gVGhpcyBjaGVja3MgaWYgYSBwYXJlbnQgbm9kZSB3YXMgYWRkZWQgYnkgdGhlIEdMVEYgSW1wb3J0ZXIuIElmIHNvLCBpdCBzaG91bGQgYmUgcmVtb3ZlZCBkdXJpbmcgc2VyaWFsaXphdGlvbi5cclxuICogQHBhcmFtIGJhYnlsb25Ob2RlIE9yaWdpbmFsIEdMVEYgbm9kZSAoTGlnaHQgb3IgQ2FtZXJhKS5cclxuICogQHBhcmFtIHBhcmVudEJhYnlsb25Ob2RlIFRhcmdldCBwYXJlbnQgbm9kZS5cclxuICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgcGFyZW50IG5vZGUgd2FzIGFkZGVkIGJ5IHRoZSBHTFRGIGltcG9ydGVyLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIElzUGFyZW50QWRkZWRCeUltcG9ydGVyKGJhYnlsb25Ob2RlOiBOb2RlLCBwYXJlbnRCYWJ5bG9uTm9kZTogTm9kZSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHBhcmVudEJhYnlsb25Ob2RlIGluc3RhbmNlb2YgVHJhbnNmb3JtTm9kZSAmJiBwYXJlbnRCYWJ5bG9uTm9kZS5nZXRDaGlsZHJlbigpLmxlbmd0aCA9PSAxICYmIGJhYnlsb25Ob2RlLmdldENoaWxkcmVuKCkubGVuZ3RoID09IDA7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBJc05vb3BOb2RlKG5vZGU6IE5vZGUsIHVzZVJpZ2h0SGFuZGVkU3lzdGVtOiBib29sZWFuKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIShub2RlIGluc3RhbmNlb2YgVHJhbnNmb3JtTm9kZSkpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVHJhbnNmb3JtXHJcbiAgICBpZiAodXNlUmlnaHRIYW5kZWRTeXN0ZW0pIHtcclxuICAgICAgICBjb25zdCBtYXRyaXggPSBub2RlLmdldFdvcmxkTWF0cml4KCk7XHJcbiAgICAgICAgaWYgKCFtYXRyaXguaXNJZGVudGl0eSgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IG1hdHJpeCA9IG5vZGUuZ2V0V29ybGRNYXRyaXgoKS5tdWx0aXBseVRvUmVmKGNvbnZlcnRIYW5kZWRuZXNzTWF0cml4LCBUbXBWZWN0b3JzLk1hdHJpeFswXSk7XHJcbiAgICAgICAgaWYgKCFtYXRyaXguaXNJZGVudGl0eSgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2VvbWV0cnlcclxuICAgIGlmIChub2RlIGluc3RhbmNlb2YgQWJzdHJhY3RNZXNoICYmIG5vZGUuZ2VvbWV0cnkpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBhbiBJbmRpY2VzQXJyYXkgaW50byBlaXRoZXIgVWludDMyQXJyYXkgb3IgVWludDE2QXJyYXksIG9ubHkgY29weWluZyBpZiB0aGUgZGF0YSBpcyBudW1iZXJbXS5cclxuICogQHBhcmFtIGluZGljZXMgaW5wdXQgYXJyYXkgdG8gYmUgY29udmVydGVkXHJcbiAqIEBwYXJhbSBzdGFydCBzdGFydGluZyBpbmRleCB0byBjb3B5IGZyb21cclxuICogQHBhcmFtIGNvdW50IG51bWJlciBvZiBpbmRpY2VzIHRvIGNvcHlcclxuICogQHJldHVybnMgYSBVaW50MzJBcnJheSBvciBVaW50MTZBcnJheVxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBJbmRpY2VzQXJyYXlUb1R5cGVkQXJyYXkoaW5kaWNlczogSW5kaWNlc0FycmF5LCBzdGFydDogbnVtYmVyLCBjb3VudDogbnVtYmVyLCBpczMyQml0czogYm9vbGVhbik6IFVpbnQzMkFycmF5IHwgVWludDE2QXJyYXkge1xyXG4gICAgaWYgKGluZGljZXMgaW5zdGFuY2VvZiBVaW50MTZBcnJheSB8fCBpbmRpY2VzIGluc3RhbmNlb2YgVWludDMyQXJyYXkpIHtcclxuICAgICAgICByZXR1cm4gaW5kaWNlcztcclxuICAgIH1cclxuXHJcbiAgICAvLyBJZiBJbnQzMkFycmF5LCBjYXN0IHRoZSBpbmRpY2VzICh3aGljaCBhcmUgYWxsIHBvc2l0aXZlKSB0byBVaW50MzJBcnJheVxyXG4gICAgaWYgKGluZGljZXMgaW5zdGFuY2VvZiBJbnQzMkFycmF5KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBVaW50MzJBcnJheShpbmRpY2VzLmJ1ZmZlciwgaW5kaWNlcy5ieXRlT2Zmc2V0LCBpbmRpY2VzLmxlbmd0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3ViYXJyYXkgPSBpbmRpY2VzLnNsaWNlKHN0YXJ0LCBzdGFydCArIGNvdW50KTtcclxuICAgIHJldHVybiBpczMyQml0cyA/IG5ldyBVaW50MzJBcnJheShzdWJhcnJheSkgOiBuZXcgVWludDE2QXJyYXkoc3ViYXJyYXkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRGF0YUFycmF5VG9VaW50OEFycmF5KGRhdGE6IERhdGFBcnJheSk6IFVpbnQ4QXJyYXkge1xyXG4gICAgaWYgKGRhdGEgaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgIGNvbnN0IGZsb2F0RGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkoZGF0YSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGZsb2F0RGF0YS5idWZmZXIsIGZsb2F0RGF0YS5ieXRlT2Zmc2V0LCBmbG9hdERhdGEuYnl0ZUxlbmd0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIEFycmF5QnVmZmVyLmlzVmlldyhkYXRhKSA/IG5ldyBVaW50OEFycmF5KGRhdGEuYnVmZmVyLCBkYXRhLmJ5dGVPZmZzZXQsIGRhdGEuYnl0ZUxlbmd0aCkgOiBuZXcgVWludDhBcnJheShkYXRhKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdldE1pbk1heChkYXRhOiBEYXRhQXJyYXksIHZlcnRleEJ1ZmZlcjogVmVydGV4QnVmZmVyLCBzdGFydDogbnVtYmVyLCBjb3VudDogbnVtYmVyKTogeyBtaW46IG51bWJlcltdOyBtYXg6IG51bWJlcltdIH0ge1xyXG4gICAgY29uc3QgeyBieXRlT2Zmc2V0LCBieXRlU3RyaWRlLCB0eXBlLCBub3JtYWxpemVkIH0gPSB2ZXJ0ZXhCdWZmZXI7XHJcbiAgICBjb25zdCBzaXplID0gdmVydGV4QnVmZmVyLmdldFNpemUoKTtcclxuICAgIGNvbnN0IG1pbiA9IG5ldyBBcnJheTxudW1iZXI+KHNpemUpLmZpbGwoSW5maW5pdHkpO1xyXG4gICAgY29uc3QgbWF4ID0gbmV3IEFycmF5PG51bWJlcj4oc2l6ZSkuZmlsbCgtSW5maW5pdHkpO1xyXG4gICAgRW51bWVyYXRlRmxvYXRWYWx1ZXMoZGF0YSwgYnl0ZU9mZnNldCArIHN0YXJ0ICogYnl0ZVN0cmlkZSwgYnl0ZVN0cmlkZSwgc2l6ZSwgdHlwZSwgY291bnQgKiBzaXplLCBub3JtYWxpemVkLCAodmFsdWVzKSA9PiB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcclxuICAgICAgICAgICAgbWluW2ldID0gTWF0aC5taW4obWluW2ldLCB2YWx1ZXNbaV0pO1xyXG4gICAgICAgICAgICBtYXhbaV0gPSBNYXRoLm1heChtYXhbaV0sIHZhbHVlc1tpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHsgbWluLCBtYXggfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlbW92ZXMsIGluLXBsYWNlLCBvYmplY3QgcHJvcGVydGllcyB3aGljaCBoYXZlIHRoZSBzYW1lIHZhbHVlIGFzIHRoZSBkZWZhdWx0IHZhbHVlLlxyXG4gKiBVc2VmdWwgZm9yIGF2b2lkaW5nIHVubmVjZXNzYXJ5IHByb3BlcnRpZXMgaW4gdGhlIGdsVEYgSlNPTi5cclxuICogQHBhcmFtIG9iamVjdCB0aGUgb2JqZWN0IHRvIG9taXQgZGVmYXVsdCB2YWx1ZXMgZnJvbVxyXG4gKiBAcGFyYW0gZGVmYXVsdFZhbHVlcyBhIHBhcnRpYWwgb2JqZWN0IHdpdGggZGVmYXVsdCB2YWx1ZXNcclxuICogQHJldHVybnMgb2JqZWN0IHdpdGggZGVmYXVsdCB2YWx1ZXMgb21pdHRlZFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIE9taXREZWZhdWx0VmFsdWVzPFQgZXh0ZW5kcyBPYmplY3Q+KG9iamVjdDogVCwgZGVmYXVsdFZhbHVlczogUGFydGlhbDxUPik6IFQge1xyXG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMob2JqZWN0KSkge1xyXG4gICAgICAgIGNvbnN0IGRlZmF1bHRWYWx1ZSA9IGRlZmF1bHRWYWx1ZXNba2V5IGFzIGtleW9mIFRdO1xyXG4gICAgICAgIGlmICgoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgQXJyYXkuaXNBcnJheShkZWZhdWx0VmFsdWUpICYmIEFyZUFycmF5c0VxdWFsKHZhbHVlLCBkZWZhdWx0VmFsdWUpKSB8fCB2YWx1ZSA9PT0gZGVmYXVsdFZhbHVlKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBvYmplY3Rba2V5IGFzIGtleW9mIFRdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBvYmplY3Q7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEFyZUFycmF5c0VxdWFsKGFycmF5MTogdW5rbm93bltdLCBhcnJheTI6IHVua25vd25bXSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGFycmF5MS5sZW5ndGggPT09IGFycmF5Mi5sZW5ndGggJiYgYXJyYXkxLmV2ZXJ5KCh2YWwsIGkpID0+IHZhbCA9PT0gYXJyYXkyW2ldKTtcclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8taW50ZXJuYWwtbW9kdWxlcyAqL1xyXG5leHBvcnQgKiBmcm9tIFwiLi9nbFRGRGF0YVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9nbFRGU2VyaWFsaXplclwiO1xyXG5leHBvcnQgeyBfU29sdmVNZXRhbGxpYywgX0NvbnZlcnRUb0dMVEZQQlJNZXRhbGxpY1JvdWdobmVzcyB9IGZyb20gXCIuL2dsVEZNYXRlcmlhbEV4cG9ydGVyXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL0V4dGVuc2lvbnMvaW5kZXhcIjtcclxuIiwiLyoqIEBpbnRlcm5hbCAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdmFyLCBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IHZhciBfX0lHTFRGRXhwb3J0ZXJFeHRlbnNpb24gPSAwOyAvLyBJIGFtIGhlcmUgdG8gYWxsb3cgZHRzIHRvIGJlIGNyZWF0ZWRcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIGV4dGVuZGluZyB0aGUgZXhwb3J0ZXJcclxuICogQGludGVybmFsXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElHTFRGRXhwb3J0ZXJFeHRlbnNpb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGlzIGV4dGVuc2lvblxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBuYW1lOiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyBlbmFibGVkXHJcbiAgICAgKi9cclxuICAgIGVuYWJsZWQ6IGJvb2xlYW47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgcmVxdWlyZWRcclxuICAgICAqL1xyXG4gICAgcmVxdWlyZWQ6IGJvb2xlYW47XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWludGVybmFsLW1vZHVsZXMgKi9cclxuZXhwb3J0ICogZnJvbSBcIi4vZ2xURkZpbGVFeHBvcnRlclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi8yLjAvaW5kZXhcIjtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWludGVybmFsLW1vZHVsZXMgKi9cclxuZXhwb3J0ICogZnJvbSBcIi4vT0JKL2luZGV4XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2dsVEYvaW5kZXhcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc3RsL2luZGV4XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL1VTRFovaW5kZXhcIjtcclxuIiwiZXhwb3J0ICogZnJvbSBcIi4vc3RsU2VyaWFsaXplclwiO1xyXG4iLCJpbXBvcnQgeyBNZXNoIH0gZnJvbSBcImNvcmUvTWVzaGVzL21lc2hcIjtcclxuaW1wb3J0IHsgSW5zdGFuY2VkTWVzaCB9IGZyb20gXCJjb3JlL01lc2hlcy9pbnN0YW5jZWRNZXNoXCI7XHJcbmltcG9ydCB7IFZlcnRleEJ1ZmZlciB9IGZyb20gXCJjb3JlL0J1ZmZlcnMvYnVmZmVyXCI7XHJcbmltcG9ydCB7IFZlY3RvcjMgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLnZlY3RvclwiO1xyXG5cclxuLyoqXHJcbiAqIENsYXNzIGZvciBnZW5lcmF0aW5nIFNUTCBkYXRhIGZyb20gYSBCYWJ5bG9uIHNjZW5lLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNUTEV4cG9ydCB7XHJcbiAgICAvKipcclxuICAgICAqIEV4cG9ydHMgdGhlIGdlb21ldHJ5IG9mIGEgTWVzaCBhcnJheSBpbiAuU1RMIGZpbGUgZm9ybWF0IChBU0NJSSlcclxuICAgICAqIEBwYXJhbSBtZXNoZXMgbGlzdCBkZWZpbmVzIHRoZSBtZXNoIHRvIHNlcmlhbGl6ZVxyXG4gICAgICogQHBhcmFtIGRvd25sb2FkIHRyaWdnZXJzIHRoZSBhdXRvbWF0aWMgZG93bmxvYWQgb2YgdGhlIGZpbGUuXHJcbiAgICAgKiBAcGFyYW0gZmlsZU5hbWUgY2hhbmdlcyB0aGUgZG93bmxvYWRzIGZpbGVOYW1lLlxyXG4gICAgICogQHBhcmFtIGJpbmFyeSBjaGFuZ2VzIHRoZSBTVEwgdG8gYSBiaW5hcnkgdHlwZS5cclxuICAgICAqIEBwYXJhbSBpc0xpdHRsZUVuZGlhbiB0b2dnbGUgZm9yIGJpbmFyeSB0eXBlIGV4cG9ydGVyLlxyXG4gICAgICogQHBhcmFtIGRvTm90QmFrZVRyYW5zZm9ybSB0b2dnbGUgaWYgbWVzaGVzIHRyYW5zZm9ybXMgc2hvdWxkIGJlIGJha2VkIG9yIG5vdC5cclxuICAgICAqIEBwYXJhbSBzdXBwb3J0SW5zdGFuY2VkTWVzaGVzIHRvZ2dsZSB0byBleHBvcnQgaW5zdGFuY2VkIE1lc2hlcy4gRW5hYmxpbmcgc3VwcG9ydCBmb3IgaW5zdGFuY2VkIG1lc2hlcyB3aWxsIG92ZXJyaWRlIGRvTm9CYWtlVHJhbnNmb3JtIGFzIHRydWVcclxuICAgICAqIEBwYXJhbSBleHBvcnRJbmRpdmlkdWFsTWVzaGVzIHRvZ2dsZSB0byBleHBvcnQgZWFjaCBtZXNoIGFzIGFuIGluZGVwZW5kZW50IG1lc2guIEJ5IGRlZmF1bHQsIGFsbCB0aGUgbWVzaGVzIGFyZSBjb21iaW5lZCBpbnRvIG9uZSBtZXNoLiBUaGlzIHByb3BlcnR5IGhhcyBubyBlZmZlY3Qgd2hlbiBleHBvcnRpbmcgaW4gYmluYXJ5IGZvcm1hdFxyXG4gICAgICogQHJldHVybnMgdGhlIFNUTCBhcyBVVEY4IHN0cmluZ1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIENyZWF0ZVNUTChcclxuICAgICAgICBtZXNoZXM6IChNZXNoIHwgSW5zdGFuY2VkTWVzaClbXSxcclxuICAgICAgICBkb3dubG9hZDogYm9vbGVhbiA9IHRydWUsXHJcbiAgICAgICAgZmlsZU5hbWU6IHN0cmluZyA9IFwic3RsbWVzaFwiLFxyXG4gICAgICAgIGJpbmFyeTogYm9vbGVhbiA9IGZhbHNlLFxyXG4gICAgICAgIGlzTGl0dGxlRW5kaWFuOiBib29sZWFuID0gdHJ1ZSxcclxuICAgICAgICBkb05vdEJha2VUcmFuc2Zvcm06IGJvb2xlYW4gPSBmYWxzZSxcclxuICAgICAgICBzdXBwb3J0SW5zdGFuY2VkTWVzaGVzOiBib29sZWFuID0gZmFsc2UsXHJcbiAgICAgICAgZXhwb3J0SW5kaXZpZHVhbE1lc2hlczogYm9vbGVhbiA9IGZhbHNlXHJcbiAgICApOiBhbnkge1xyXG4gICAgICAgIC8vQmluYXJ5IHN1cHBvcnQgYWRhcHRlZCBmcm9tIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL3BhdWxrYXBsYW4vNmQ1ZjBhYjJjN2U4ZmRjNjhhNjFcclxuXHJcbiAgICAgICAgY29uc3QgZ2V0RmFjZURhdGEgPSBmdW5jdGlvbiAoaW5kaWNlczogYW55LCB2ZXJ0aWNlczogYW55LCBpOiBudW1iZXIpIHtcclxuICAgICAgICAgICAgY29uc3QgaWQgPSBbaW5kaWNlc1tpXSAqIDMsIGluZGljZXNbaSArIDFdICogMywgaW5kaWNlc1tpICsgMl0gKiAzXTtcclxuICAgICAgICAgICAgY29uc3QgdiA9IFtcclxuICAgICAgICAgICAgICAgIG5ldyBWZWN0b3IzKHZlcnRpY2VzW2lkWzBdXSwgdmVydGljZXNbaWRbMF0gKyAyXSwgdmVydGljZXNbaWRbMF0gKyAxXSksXHJcbiAgICAgICAgICAgICAgICBuZXcgVmVjdG9yMyh2ZXJ0aWNlc1tpZFsxXV0sIHZlcnRpY2VzW2lkWzFdICsgMl0sIHZlcnRpY2VzW2lkWzFdICsgMV0pLFxyXG4gICAgICAgICAgICAgICAgbmV3IFZlY3RvcjModmVydGljZXNbaWRbMl1dLCB2ZXJ0aWNlc1tpZFsyXSArIDJdLCB2ZXJ0aWNlc1tpZFsyXSArIDFdKSxcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgY29uc3QgcDFwMiA9IHZbMF0uc3VidHJhY3QodlsxXSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHAzcDIgPSB2WzJdLnN1YnRyYWN0KHZbMV0pO1xyXG4gICAgICAgICAgICBjb25zdCBuID0gVmVjdG9yMy5Dcm9zcyhwM3AyLCBwMXAyKS5ub3JtYWxpemUoKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7IHYsIG4gfTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCB3cml0ZVZlY3RvciA9IGZ1bmN0aW9uIChkYXRhdmlldzogYW55LCBvZmZzZXQ6IG51bWJlciwgdmVjdG9yOiBWZWN0b3IzLCBpc0xpdHRsZUVuZGlhbjogYm9vbGVhbikge1xyXG4gICAgICAgICAgICBvZmZzZXQgPSB3cml0ZUZsb2F0KGRhdGF2aWV3LCBvZmZzZXQsIHZlY3Rvci54LCBpc0xpdHRsZUVuZGlhbik7XHJcbiAgICAgICAgICAgIG9mZnNldCA9IHdyaXRlRmxvYXQoZGF0YXZpZXcsIG9mZnNldCwgdmVjdG9yLnksIGlzTGl0dGxlRW5kaWFuKTtcclxuICAgICAgICAgICAgcmV0dXJuIHdyaXRlRmxvYXQoZGF0YXZpZXcsIG9mZnNldCwgdmVjdG9yLnosIGlzTGl0dGxlRW5kaWFuKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCB3cml0ZUZsb2F0ID0gZnVuY3Rpb24gKGRhdGF2aWV3OiBhbnksIG9mZnNldDogbnVtYmVyLCB2YWx1ZTogbnVtYmVyLCBpc0xpdHRsZUVuZGlhbjogYm9vbGVhbikge1xyXG4gICAgICAgICAgICBkYXRhdmlldy5zZXRGbG9hdDMyKG9mZnNldCwgdmFsdWUsIGlzTGl0dGxlRW5kaWFuKTtcclxuICAgICAgICAgICAgcmV0dXJuIG9mZnNldCArIDQ7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgZ2V0VmVydGljZXNEYXRhID0gZnVuY3Rpb24gKG1lc2g6IEluc3RhbmNlZE1lc2ggfCBNZXNoKSB7XHJcbiAgICAgICAgICAgIGlmIChzdXBwb3J0SW5zdGFuY2VkTWVzaGVzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc291cmNlTWVzaCA9IG1lc2g7XHJcbiAgICAgICAgICAgICAgICBpZiAobWVzaCBpbnN0YW5jZW9mIEluc3RhbmNlZE1lc2gpIHtcclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VNZXNoID0gbWVzaC5zb3VyY2VNZXNoO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHNvdXJjZU1lc2guZ2V0VmVydGljZXNEYXRhKFZlcnRleEJ1ZmZlci5Qb3NpdGlvbktpbmQsIHRydWUsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFkYXRhKSByZXR1cm4gW107XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZW1wID0gVmVjdG9yMy5aZXJvKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXg7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCBkYXRhLmxlbmd0aDsgaW5kZXggKz0gMykge1xyXG4gICAgICAgICAgICAgICAgICAgIFZlY3RvcjMuVHJhbnNmb3JtQ29vcmRpbmF0ZXNGcm9tRmxvYXRzVG9SZWYoZGF0YVtpbmRleF0sIGRhdGFbaW5kZXggKyAxXSwgZGF0YVtpbmRleCArIDJdLCBtZXNoLmNvbXB1dGVXb3JsZE1hdHJpeCh0cnVlKSwgdGVtcCkudG9BcnJheShkYXRhLCBpbmRleCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBtZXNoLmdldFZlcnRpY2VzRGF0YShWZXJ0ZXhCdWZmZXIuUG9zaXRpb25LaW5kKSB8fCBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmIChzdXBwb3J0SW5zdGFuY2VkTWVzaGVzKSB7XHJcbiAgICAgICAgICAgIGRvTm90QmFrZVRyYW5zZm9ybSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZGF0YTogRGF0YVZpZXcgfCBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgICAgICBsZXQgZmFjZUNvdW50ID0gMDtcclxuICAgICAgICBsZXQgb2Zmc2V0ID0gMDtcclxuXHJcbiAgICAgICAgaWYgKGJpbmFyeSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lc2hlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWVzaCA9IG1lc2hlc1tpXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGluZGljZXMgPSBtZXNoLmdldEluZGljZXMoKTtcclxuICAgICAgICAgICAgICAgIGZhY2VDb3VudCArPSBpbmRpY2VzID8gaW5kaWNlcy5sZW5ndGggLyAzIDogMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgYnVmZmVyU2l6ZSA9IDg0ICsgNTAgKiBmYWNlQ291bnQ7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcihidWZmZXJTaXplKTtcclxuICAgICAgICAgICAgZGF0YSA9IG5ldyBEYXRhVmlldyhidWZmZXIpO1xyXG5cclxuICAgICAgICAgICAgb2Zmc2V0ICs9IDgwO1xyXG4gICAgICAgICAgICBkYXRhLnNldFVpbnQzMihvZmZzZXQsIGZhY2VDb3VudCwgaXNMaXR0bGVFbmRpYW4pO1xyXG4gICAgICAgICAgICBvZmZzZXQgKz0gNDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIWV4cG9ydEluZGl2aWR1YWxNZXNoZXMpIHtcclxuICAgICAgICAgICAgICAgIGRhdGEgPSBcInNvbGlkIHN0bG1lc2hcXHJcXG5cIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZXNoZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgbWVzaCA9IG1lc2hlc1tpXTtcclxuICAgICAgICAgICAgaWYgKCFiaW5hcnkgJiYgZXhwb3J0SW5kaXZpZHVhbE1lc2hlcykge1xyXG4gICAgICAgICAgICAgICAgZGF0YSArPSBcInNvbGlkIFwiICsgbWVzaC5uYW1lICsgXCJcXHJcXG5cIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWRvTm90QmFrZVRyYW5zZm9ybSAmJiBtZXNoIGluc3RhbmNlb2YgTWVzaCkge1xyXG4gICAgICAgICAgICAgICAgbWVzaC5iYWtlQ3VycmVudFRyYW5zZm9ybUludG9WZXJ0aWNlcygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHZlcnRpY2VzID0gZ2V0VmVydGljZXNEYXRhKG1lc2gpO1xyXG4gICAgICAgICAgICBjb25zdCBpbmRpY2VzID0gbWVzaC5nZXRJbmRpY2VzKCkgfHwgW107XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluZGljZXMubGVuZ3RoOyBpICs9IDMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZkID0gZ2V0RmFjZURhdGEoaW5kaWNlcywgdmVydGljZXMsIGkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChiaW5hcnkpIHtcclxuICAgICAgICAgICAgICAgICAgICBvZmZzZXQgPSB3cml0ZVZlY3RvcihkYXRhLCBvZmZzZXQsIGZkLm4sIGlzTGl0dGxlRW5kaWFuKTtcclxuICAgICAgICAgICAgICAgICAgICBvZmZzZXQgPSB3cml0ZVZlY3RvcihkYXRhLCBvZmZzZXQsIGZkLnZbMF0sIGlzTGl0dGxlRW5kaWFuKTtcclxuICAgICAgICAgICAgICAgICAgICBvZmZzZXQgPSB3cml0ZVZlY3RvcihkYXRhLCBvZmZzZXQsIGZkLnZbMV0sIGlzTGl0dGxlRW5kaWFuKTtcclxuICAgICAgICAgICAgICAgICAgICBvZmZzZXQgPSB3cml0ZVZlY3RvcihkYXRhLCBvZmZzZXQsIGZkLnZbMl0sIGlzTGl0dGxlRW5kaWFuKTtcclxuICAgICAgICAgICAgICAgICAgICBvZmZzZXQgKz0gMjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YSArPSBcIlxcdGZhY2V0IG5vcm1hbCBcIiArIGZkLm4ueCArIFwiIFwiICsgZmQubi55ICsgXCIgXCIgKyBmZC5uLnogKyBcIlxcclxcblwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEgKz0gXCJcXHRcXHRvdXRlciBsb29wXFxyXFxuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YSArPSBcIlxcdFxcdFxcdHZlcnRleCBcIiArIGZkLnZbMF0ueCArIFwiIFwiICsgZmQudlswXS55ICsgXCIgXCIgKyBmZC52WzBdLnogKyBcIlxcclxcblwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEgKz0gXCJcXHRcXHRcXHR2ZXJ0ZXggXCIgKyBmZC52WzFdLnggKyBcIiBcIiArIGZkLnZbMV0ueSArIFwiIFwiICsgZmQudlsxXS56ICsgXCJcXHJcXG5cIjtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhICs9IFwiXFx0XFx0XFx0dmVydGV4IFwiICsgZmQudlsyXS54ICsgXCIgXCIgKyBmZC52WzJdLnkgKyBcIiBcIiArIGZkLnZbMl0ueiArIFwiXFxyXFxuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YSArPSBcIlxcdFxcdGVuZGxvb3BcXHJcXG5cIjtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhICs9IFwiXFx0ZW5kZmFjZXRcXHJcXG5cIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWJpbmFyeSAmJiBleHBvcnRJbmRpdmlkdWFsTWVzaGVzKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhICs9IFwiZW5kc29saWQgXCIgKyBuYW1lICsgXCJcXHJcXG5cIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFiaW5hcnkgJiYgIWV4cG9ydEluZGl2aWR1YWxNZXNoZXMpIHtcclxuICAgICAgICAgICAgZGF0YSArPSBcImVuZHNvbGlkIHN0bG1lc2hcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChkb3dubG9hZCkge1xyXG4gICAgICAgICAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbZGF0YV0sIHsgdHlwZTogXCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIiB9KTtcclxuICAgICAgICAgICAgYS5ocmVmID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAgICAgICAgICAgIGEuZG93bmxvYWQgPSBmaWxlTmFtZSArIFwiLnN0bFwiO1xyXG4gICAgICAgICAgICBhLmNsaWNrKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8taW50ZXJuYWwtbW9kdWxlcyAqL1xyXG5pbXBvcnQgKiBhcyBFeHBvcnRlcnMgZnJvbSBcInNlcmlhbGl6ZXJzL2dsVEYvZ2xURkZpbGVFeHBvcnRlclwiO1xyXG5pbXBvcnQgKiBhcyBEYXRhcyBmcm9tIFwic2VyaWFsaXplcnMvZ2xURi8yLjAvZ2xURkRhdGFcIjtcclxuaW1wb3J0ICogYXMgU2VyaWFsaXplcnMgZnJvbSBcInNlcmlhbGl6ZXJzL2dsVEYvMi4wL2dsVEZTZXJpYWxpemVyXCI7XHJcbmltcG9ydCAqIGFzIEV4dGVuc2lvbnMgZnJvbSBcInNlcmlhbGl6ZXJzL2dsVEYvMi4wL0V4dGVuc2lvbnMvaW5kZXhcIjtcclxuaW1wb3J0ICogYXMgR0xURjIgZnJvbSBcInNlcmlhbGl6ZXJzL2dsVEYvMi4wL2luZGV4XCI7XHJcblxyXG4vKipcclxuICogVGhpcyBpcyB0aGUgZW50cnkgcG9pbnQgZm9yIHRoZSBVTUQgbW9kdWxlLlxyXG4gKiBUaGUgZW50cnkgcG9pbnQgZm9yIGEgZnV0dXJlIEVTTSBwYWNrYWdlIHNob3VsZCBiZSBpbmRleC50c1xyXG4gKi9cclxuY29uc3QgZ2xvYmFsT2JqZWN0ID0gdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB1bmRlZmluZWQ7XHJcbmlmICh0eXBlb2YgZ2xvYmFsT2JqZWN0ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAoPGFueT5nbG9iYWxPYmplY3QpLkJBQllMT04gPSAoPGFueT5nbG9iYWxPYmplY3QpLkJBQllMT04gfHwge307XHJcbiAgICBjb25zdCBCQUJZTE9OID0gKDxhbnk+Z2xvYmFsT2JqZWN0KS5CQUJZTE9OO1xyXG4gICAgQkFCWUxPTi5HTFRGMiA9IEJBQllMT04uR0xURjIgfHwge307XHJcbiAgICBCQUJZTE9OLkdMVEYyLkV4cG9ydGVyID0gQkFCWUxPTi5HTFRGMi5FeHBvcnRlciB8fCB7fTtcclxuICAgIEJBQllMT04uR0xURjIuRXhwb3J0ZXIuRXh0ZW5zaW9ucyA9IEJBQllMT04uR0xURjIuRXhwb3J0ZXIuRXh0ZW5zaW9ucyB8fCB7fTtcclxuXHJcbiAgICBjb25zdCBrZXlzID0gW107XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBFeHBvcnRlcnMpIHtcclxuICAgICAgICBCQUJZTE9OW2tleV0gPSAoPGFueT5FeHBvcnRlcnMpW2tleV07XHJcbiAgICAgICAga2V5cy5wdXNoKGtleSk7XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBEYXRhcykge1xyXG4gICAgICAgIEJBQllMT05ba2V5XSA9ICg8YW55PkRhdGFzKVtrZXldO1xyXG4gICAgICAgIGtleXMucHVzaChrZXkpO1xyXG4gICAgfVxyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gU2VyaWFsaXplcnMpIHtcclxuICAgICAgICBCQUJZTE9OW2tleV0gPSAoPGFueT5TZXJpYWxpemVycylba2V5XTtcclxuICAgICAgICBrZXlzLnB1c2goa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBFeHRlbnNpb25zKSB7XHJcbiAgICAgICAgQkFCWUxPTi5HTFRGMi5FeHBvcnRlci5FeHRlbnNpb25zW2tleV0gPSAoPGFueT5FeHRlbnNpb25zKVtrZXldO1xyXG4gICAgICAgIGtleXMucHVzaChrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAoY29uc3Qga2V5IGluIEdMVEYyKSB7XHJcbiAgICAgICAgLy8gUHJldmVudCBSZWFzc2lnbm1lbnQuXHJcbiAgICAgICAgaWYgKGtleXMuaW5kZXhPZihrZXkpID4gLTEpIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBCQUJZTE9OLkdMVEYyLkV4cG9ydGVyW2tleV0gPSAoPGFueT5HTFRGMilba2V5XTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0ICogZnJvbSBcInNlcmlhbGl6ZXJzL2dsVEYvZ2xURkZpbGVFeHBvcnRlclwiO1xyXG5leHBvcnQgKiBmcm9tIFwic2VyaWFsaXplcnMvZ2xURi8yLjAvaW5kZXhcIjtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWludGVybmFsLW1vZHVsZXMgKi9cclxuaW1wb3J0ICogYXMgU2VyaWFsaXplcnMgZnJvbSBcInNlcmlhbGl6ZXJzL09CSi9pbmRleFwiO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgaXMgdGhlIGVudHJ5IHBvaW50IGZvciB0aGUgVU1EIG1vZHVsZS5cclxuICogVGhlIGVudHJ5IHBvaW50IGZvciBhIGZ1dHVyZSBFU00gcGFja2FnZSBzaG91bGQgYmUgaW5kZXgudHNcclxuICovXHJcbmNvbnN0IGdsb2JhbE9iamVjdCA9IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDogdW5kZWZpbmVkO1xyXG5pZiAodHlwZW9mIGdsb2JhbE9iamVjdCAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgZm9yIChjb25zdCBzZXJpYWxpemVyIGluIFNlcmlhbGl6ZXJzKSB7XHJcbiAgICAgICAgKDxhbnk+Z2xvYmFsT2JqZWN0KS5CQUJZTE9OW3NlcmlhbGl6ZXJdID0gKDxhbnk+U2VyaWFsaXplcnMpW3NlcmlhbGl6ZXJdO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgKiBmcm9tIFwic2VyaWFsaXplcnMvT0JKL2luZGV4XCI7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1pbnRlcm5hbC1tb2R1bGVzICovXHJcbmltcG9ydCAqIGFzIFNlcmlhbGl6ZXJzIGZyb20gXCJzZXJpYWxpemVycy9zdGwvaW5kZXhcIjtcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGlzIHRoZSBlbnRyeSBwb2ludCBmb3IgdGhlIFVNRCBtb2R1bGUuXHJcbiAqIFRoZSBlbnRyeSBwb2ludCBmb3IgYSBmdXR1cmUgRVNNIHBhY2thZ2Ugc2hvdWxkIGJlIGluZGV4LnRzXHJcbiAqL1xyXG5jb25zdCBnbG9iYWxPYmplY3QgPSB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHVuZGVmaW5lZDtcclxuaWYgKHR5cGVvZiBnbG9iYWxPYmplY3QgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGZvciAoY29uc3Qgc2VyaWFsaXplciBpbiBTZXJpYWxpemVycykge1xyXG4gICAgICAgICg8YW55Pmdsb2JhbE9iamVjdCkuQkFCWUxPTltzZXJpYWxpemVyXSA9ICg8YW55PlNlcmlhbGl6ZXJzKVtzZXJpYWxpemVyXTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0ICogZnJvbSBcInNlcmlhbGl6ZXJzL3N0bC9pbmRleFwiO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8taW50ZXJuYWwtbW9kdWxlcyAqL1xyXG5pbXBvcnQgKiBhcyBTZXJpYWxpemVycyBmcm9tIFwic2VyaWFsaXplcnMvVVNEWi9pbmRleFwiO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgaXMgdGhlIGVudHJ5IHBvaW50IGZvciB0aGUgVU1EIG1vZHVsZS5cclxuICogVGhlIGVudHJ5IHBvaW50IGZvciBhIGZ1dHVyZSBFU00gcGFja2FnZSBzaG91bGQgYmUgaW5kZXgudHNcclxuICovXHJcbmNvbnN0IGdsb2JhbE9iamVjdCA9IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDogdW5kZWZpbmVkO1xyXG5pZiAodHlwZW9mIGdsb2JhbE9iamVjdCAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgZm9yIChjb25zdCBzZXJpYWxpemVyIGluIFNlcmlhbGl6ZXJzKSB7XHJcbiAgICAgICAgKDxhbnk+Z2xvYmFsT2JqZWN0KS5CQUJZTE9OW3NlcmlhbGl6ZXJdID0gKDxhbnk+U2VyaWFsaXplcnMpW3NlcmlhbGl6ZXJdO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgKiBmcm9tIFwic2VyaWFsaXplcnMvVVNEWi9pbmRleFwiO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvZXhwb3J0ICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1pbnRlcm5hbC1tb2R1bGVzICovXHJcbmltcG9ydCBcInNlcmlhbGl6ZXJzL2luZGV4XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2xlZ2FjeS1nbFRGMlNlcmlhbGl6ZXJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbGVnYWN5LW9ialNlcmlhbGl6ZXJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbGVnYWN5LXN0bFNlcmlhbGl6ZXJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbGVnYWN5LXVzZHpTZXJpYWxpemVyXCI7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9iYWJ5bG9uanNfTWlzY19maWxlVG9vbHNfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCJ2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgPyAob2JqKSA9PiAoT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaikpIDogKG9iaikgPT4gKG9iai5fX3Byb3RvX18pO1xudmFyIGxlYWZQcm90b3R5cGVzO1xuLy8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4vLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbi8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuLy8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4vLyBtb2RlICYgMTY6IHJldHVybiB2YWx1ZSB3aGVuIGl0J3MgUHJvbWlzZS1saWtlXG4vLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuXHRpZihtb2RlICYgMSkgdmFsdWUgPSB0aGlzKHZhbHVlKTtcblx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcblx0aWYodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSkge1xuXHRcdGlmKChtb2RlICYgNCkgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuXHRcdGlmKChtb2RlICYgMTYpICYmIHR5cGVvZiB2YWx1ZS50aGVuID09PSAnZnVuY3Rpb24nKSByZXR1cm4gdmFsdWU7XG5cdH1cblx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcblx0dmFyIGRlZiA9IHt9O1xuXHRsZWFmUHJvdG90eXBlcyA9IGxlYWZQcm90b3R5cGVzIHx8IFtudWxsLCBnZXRQcm90byh7fSksIGdldFByb3RvKFtdKSwgZ2V0UHJvdG8oZ2V0UHJvdG8pXTtcblx0Zm9yKHZhciBjdXJyZW50ID0gbW9kZSAmIDIgJiYgdmFsdWU7IHR5cGVvZiBjdXJyZW50ID09ICdvYmplY3QnICYmICF+bGVhZlByb3RvdHlwZXMuaW5kZXhPZihjdXJyZW50KTsgY3VycmVudCA9IGdldFByb3RvKGN1cnJlbnQpKSB7XG5cdFx0T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoY3VycmVudCkuZm9yRWFjaCgoa2V5KSA9PiAoZGVmW2tleV0gPSAoKSA9PiAodmFsdWVba2V5XSkpKTtcblx0fVxuXHRkZWZbJ2RlZmF1bHQnXSA9ICgpID0+ICh2YWx1ZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChucywgZGVmKTtcblx0cmV0dXJuIG5zO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgKiBhcyBzZXJpYWxpemVycyBmcm9tIFwiQGx0cy9zZXJpYWxpemVycy9sZWdhY3kvbGVnYWN5XCI7XHJcbmV4cG9ydCB7IHNlcmlhbGl6ZXJzIH07XHJcbmV4cG9ydCBkZWZhdWx0IHNlcmlhbGl6ZXJzO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=