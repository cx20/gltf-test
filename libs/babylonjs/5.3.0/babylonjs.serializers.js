(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("babylonjs"));
	else if(typeof define === 'function' && define.amd)
		define("babylonjs-serializers", ["babylonjs"], factory);
	else if(typeof exports === 'object')
		exports["babylonjs-serializers"] = factory(require("babylonjs"));
	else
		root["SERIALIZERS"] = factory(root["BABYLON"]);
})((typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : this), function(__WEBPACK_EXTERNAL_MODULE_core_Maths_math_vector__) {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../node_modules/tslib/tslib.es6.js":
/*!***************************************************!*\
  !*** ../../../../node_modules/tslib/tslib.es6.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArray": () => (/* binding */ __spreadArray),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__values": () => (/* binding */ __values)
/* harmony export */ });
/*! *****************************************************************************
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
/* global Reflect, Promise */

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
        while (_) try {
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
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
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


/***/ }),

/***/ "../../../lts/serializers/dist/OBJ/index.js":
/*!**************************************************!*\
  !*** ../../../lts/serializers/dist/OBJ/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OBJExport": () => (/* reexport safe */ _objSerializer__WEBPACK_IMPORTED_MODULE_0__.OBJExport)
/* harmony export */ });
/* harmony import */ var _objSerializer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objSerializer */ "../../../lts/serializers/dist/OBJ/objSerializer.js");



/***/ }),

/***/ "../../../lts/serializers/dist/OBJ/objSerializer.js":
/*!**********************************************************!*\
  !*** ../../../lts/serializers/dist/OBJ/objSerializer.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OBJExport": () => (/* binding */ OBJExport)
/* harmony export */ });
/* harmony import */ var core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/Misc/tools */ "core/Maths/math.vector");
/* harmony import */ var core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Class for generating OBJ data from a Babylon scene.
 */
var OBJExport = /** @class */ (function () {
    function OBJExport() {
    }
    /**
     * Exports the geometry of a Mesh array in .OBJ file format (text)
     * @param mesh defines the list of meshes to serialize
     * @param materials defines if materials should be exported
     * @param matlibname defines the name of the associated mtl file
     * @param globalposition defines if the exported positions are globals or local to the exported mesh
     * @returns the OBJ content
     */
    OBJExport.OBJ = function (mesh, materials, matlibname, globalposition) {
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
        for (var j = 0; j < mesh.length; j++) {
            output.push("g object" + j);
            output.push("o object_" + j);
            //Uses the position of the item in the scene, to the file (this back to normal in the end)
            var inverseTransform = null;
            if (globalposition) {
                var transform = mesh[j].computeWorldMatrix(true);
                inverseTransform = new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Matrix();
                transform.invertToRef(inverseTransform);
                mesh[j].bakeTransformIntoVertices(transform);
            }
            //TODO: submeshes (groups)
            //TODO: smoothing groups (s 1, s off);
            if (materials) {
                var mat = mesh[j].material;
                if (mat) {
                    output.push("usemtl " + mat.id);
                }
            }
            var g = mesh[j].geometry;
            if (!g) {
                core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Warn("No geometry is present on the mesh");
                continue;
            }
            var trunkVerts = g.getVerticesData("position");
            var trunkNormals = g.getVerticesData("normal");
            var trunkUV = g.getVerticesData("uv");
            var trunkFaces = g.getIndices();
            var currentV = 0;
            var currentTextureV = 0;
            if (!trunkVerts || !trunkFaces) {
                core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Warn("There are no position vertices or indices on the mesh!");
                continue;
            }
            for (var i = 0; i < trunkVerts.length; i += 3) {
                // Babylon.js default is left handed, while OBJ default is right handed
                // Need to invert Z vertices unless Babylon is set to use a right handed system
                if (mesh[0].getScene().useRightHandedSystem) {
                    output.push("v " + trunkVerts[i] + " " + trunkVerts[i + 1] + " " + trunkVerts[i + 2]);
                }
                else {
                    output.push("v " + trunkVerts[i] + " " + trunkVerts[i + 1] + " " + -trunkVerts[i + 2]);
                }
                currentV++;
            }
            if (trunkNormals != null) {
                for (var i = 0; i < trunkNormals.length; i += 3) {
                    output.push("vn " + trunkNormals[i] + " " + trunkNormals[i + 1] + " " + trunkNormals[i + 2]);
                }
            }
            if (trunkUV != null) {
                for (var i = 0; i < trunkUV.length; i += 2) {
                    output.push("vt " + trunkUV[i] + " " + trunkUV[i + 1]);
                    currentTextureV++;
                }
            }
            for (var i = 0; i < trunkFaces.length; i += 3) {
                var indices = [String(trunkFaces[i + 2] + v), String(trunkFaces[i + 1] + v), String(trunkFaces[i] + v)];
                var textureIndices = [String(trunkFaces[i + 2] + textureV), String(trunkFaces[i + 1] + textureV), String(trunkFaces[i] + textureV)];
                var blanks = ["", "", ""];
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
                mesh[j].bakeTransformIntoVertices(inverseTransform);
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

/***/ "../../../lts/serializers/dist/glTF/2.0/Extensions/KHR_lights_punctual.js":
/*!********************************************************************************!*\
  !*** ../../../lts/serializers/dist/glTF/2.0/Extensions/KHR_lights_punctual.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KHR_lights_punctual": () => (/* binding */ KHR_lights_punctual)
/* harmony export */ });
/* harmony import */ var core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/Misc/logger */ "core/Maths/math.vector");
/* harmony import */ var core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _glTFExporter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../glTFExporter */ "../../../lts/serializers/dist/glTF/2.0/glTFExporter.js");
/* harmony import */ var _glTFUtilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../glTFUtilities */ "../../../lts/serializers/dist/glTF/2.0/glTFUtilities.js");








var NAME = "KHR_lights_punctual";
/**
 * [Specification](https://github.com/KhronosGroup/glTF/blob/master/extensions/2.0/Khronos/KHR_lights_punctual/README.md)
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
var KHR_lights_punctual = /** @class */ (function () {
    /**
     * @param exporter
     * @hidden
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
    /** @hidden */
    KHR_lights_punctual.prototype.dispose = function () {
        this._lights = null;
    };
    Object.defineProperty(KHR_lights_punctual.prototype, "wasUsed", {
        /** @hidden */
        get: function () {
            return !!this._lights;
        },
        enumerable: false,
        configurable: true
    });
    /** @hidden */
    KHR_lights_punctual.prototype.onExporting = function () {
        this._exporter._glTF.extensions[NAME] = this._lights;
    };
    /**
     * Define this method to modify the default behavior when exporting a node
     * @param context The context when exporting the node
     * @param node glTF node
     * @param babylonNode BabylonJS node
     * @param nodeMap Node mapping of unique id to glTF node index
     * @returns nullable INode promise
     */
    KHR_lights_punctual.prototype.postExportNodeAsync = function (context, node, babylonNode, nodeMap) {
        var _this = this;
        return new Promise(function (resolve) {
            if (node && babylonNode instanceof core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.ShadowLight) {
                var babylonLight = babylonNode;
                var light = void 0;
                var lightType = babylonLight.getTypeID() == core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Light.LIGHTTYPEID_POINTLIGHT
                    ? "point" /* POINT */
                    : babylonLight.getTypeID() == core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Light.LIGHTTYPEID_DIRECTIONALLIGHT
                        ? "directional" /* DIRECTIONAL */
                        : babylonLight.getTypeID() == core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Light.LIGHTTYPEID_SPOTLIGHT
                            ? "spot" /* SPOT */
                            : null;
                if (lightType == null) {
                    core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Logger.Warn("".concat(context, ": Light ").concat(babylonLight.name, " is not supported in ").concat(NAME));
                }
                else {
                    var lightPosition = babylonLight.position.clone();
                    var convertToRightHandedSystem = _this._exporter._convertToRightHandedSystemMap[babylonNode.uniqueId];
                    if (!lightPosition.equals(core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Zero())) {
                        if (convertToRightHandedSystem) {
                            _glTFUtilities__WEBPACK_IMPORTED_MODULE_2__._GLTFUtilities._GetRightHandedPositionVector3FromRef(lightPosition);
                        }
                        node.translation = lightPosition.asArray();
                    }
                    if (lightType !== "point" /* POINT */) {
                        var localAxis = babylonLight.direction;
                        var yaw = -Math.atan2(localAxis.z * (_this._exporter._babylonScene.useRightHandedSystem ? -1 : 1), localAxis.x) + Math.PI / 2;
                        var len = Math.sqrt(localAxis.x * localAxis.x + localAxis.z * localAxis.z);
                        var pitch = -Math.atan2(localAxis.y, len);
                        var lightRotationQuaternion = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.RotationYawPitchRoll(yaw, pitch, 0);
                        if (convertToRightHandedSystem) {
                            _glTFUtilities__WEBPACK_IMPORTED_MODULE_2__._GLTFUtilities._GetRightHandedQuaternionFromRef(lightRotationQuaternion);
                        }
                        if (!lightRotationQuaternion.equals(core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.Identity())) {
                            node.rotation = lightRotationQuaternion.asArray();
                        }
                    }
                    if (babylonLight.falloffType !== core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Light.FALLOFF_GLTF) {
                        core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Logger.Warn("".concat(context, ": Light falloff for ").concat(babylonLight.name, " does not match the ").concat(NAME, " specification!"));
                    }
                    light = {
                        type: lightType,
                    };
                    if (!babylonLight.diffuse.equals(core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Color3.White())) {
                        light.color = babylonLight.diffuse.asArray();
                    }
                    if (babylonLight.intensity !== 1.0) {
                        light.intensity = babylonLight.intensity;
                    }
                    if (babylonLight.range !== Number.MAX_VALUE) {
                        light.range = babylonLight.range;
                    }
                    if (lightType === "spot" /* SPOT */) {
                        var babylonSpotLight = babylonLight;
                        if (babylonSpotLight.angle !== Math.PI / 2.0) {
                            if (light.spot == null) {
                                light.spot = {};
                            }
                            light.spot.outerConeAngle = babylonSpotLight.angle / 2.0;
                        }
                        if (babylonSpotLight.innerAngle !== 0) {
                            if (light.spot == null) {
                                light.spot = {};
                            }
                            light.spot.innerConeAngle = babylonSpotLight.innerAngle / 2.0;
                        }
                    }
                    if (_this._lights == null) {
                        _this._lights = {
                            lights: [],
                        };
                    }
                    _this._lights.lights.push(light);
                    var lightReference = {
                        light: _this._lights.lights.length - 1,
                    };
                    // Avoid duplicating the Light's parent node if possible.
                    var parentBabylonNode = babylonNode.parent;
                    if (parentBabylonNode && parentBabylonNode.getChildren().length == 1) {
                        var parentNode = _this._exporter._nodes[nodeMap[parentBabylonNode.uniqueId]];
                        if (parentNode) {
                            var parentNodeLocalMatrix = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Matrix[0];
                            var parentInvertNodeLocalMatrix = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Matrix[1];
                            var parentNodeLocalTranslation = parentNode.translation
                                ? new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3(parentNode.translation[0], parentNode.translation[1], parentNode.translation[2])
                                : core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Zero();
                            var parentNodeLocalRotation = parentNode.rotation
                                ? new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion(parentNode.rotation[0], parentNode.rotation[1], parentNode.rotation[2], parentNode.rotation[3])
                                : core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.Identity();
                            var parentNodeLocalScale = parentNode.scale ? new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3(parentNode.scale[0], parentNode.scale[1], parentNode.scale[2]) : core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.One();
                            core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Matrix.ComposeToRef(parentNodeLocalScale, parentNodeLocalRotation, parentNodeLocalTranslation, parentNodeLocalMatrix);
                            parentNodeLocalMatrix.invertToRef(parentInvertNodeLocalMatrix);
                            // Convert light local matrix to local matrix relative to grandparent, facing -Z
                            var lightLocalMatrix = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Matrix[2];
                            var nodeLocalTranslation = node.translation ? new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3(node.translation[0], node.translation[1], node.translation[2]) : core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Zero();
                            // Undo directional light positional offset
                            if (babylonLight instanceof core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.DirectionalLight) {
                                nodeLocalTranslation.subtractInPlace(_this._exporter._babylonScene.useRightHandedSystem
                                    ? babylonLight.direction
                                    : _glTFUtilities__WEBPACK_IMPORTED_MODULE_2__._GLTFUtilities._GetRightHandedPositionVector3(babylonLight.direction));
                            }
                            var nodeLocalRotation = _this._exporter._babylonScene.useRightHandedSystem ? core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.Identity() : new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion(0, 1, 0, 0);
                            if (node.rotation) {
                                nodeLocalRotation.multiplyInPlace(new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion(node.rotation[0], node.rotation[1], node.rotation[2], node.rotation[3]));
                            }
                            var nodeLocalScale = node.scale ? new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3(node.scale[0], node.scale[1], node.scale[2]) : core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.One();
                            core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Matrix.ComposeToRef(nodeLocalScale, nodeLocalRotation, nodeLocalTranslation, lightLocalMatrix);
                            lightLocalMatrix.multiplyToRef(parentInvertNodeLocalMatrix, lightLocalMatrix);
                            var parentNewScale = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Vector3[0];
                            var parentNewRotationQuaternion = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Quaternion[0];
                            var parentNewTranslation = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Vector3[1];
                            lightLocalMatrix.decompose(parentNewScale, parentNewRotationQuaternion, parentNewTranslation);
                            parentNode.scale = parentNewScale.asArray();
                            parentNode.rotation = parentNewRotationQuaternion.asArray();
                            parentNode.translation = parentNewTranslation.asArray();
                            if (parentNode.extensions == null) {
                                parentNode.extensions = {};
                            }
                            parentNode.extensions[NAME] = lightReference;
                            // Do not export the original node
                            resolve(null);
                            return;
                        }
                    }
                    if (node.extensions == null) {
                        node.extensions = {};
                    }
                    node.extensions[NAME] = lightReference;
                }
            }
            resolve(node);
        });
    };
    return KHR_lights_punctual;
}());

_glTFExporter__WEBPACK_IMPORTED_MODULE_1__._Exporter.RegisterExtension(NAME, function (exporter) { return new KHR_lights_punctual(exporter); });


/***/ }),

/***/ "../../../lts/serializers/dist/glTF/2.0/Extensions/KHR_materials_clearcoat.js":
/*!************************************************************************************!*\
  !*** ../../../lts/serializers/dist/glTF/2.0/Extensions/KHR_materials_clearcoat.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KHR_materials_clearcoat": () => (/* binding */ KHR_materials_clearcoat)
/* harmony export */ });
/* harmony import */ var _glTFExporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../glTFExporter */ "../../../lts/serializers/dist/glTF/2.0/glTFExporter.js");
/* harmony import */ var core_Materials_PBR_pbrBaseMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/Misc/tools */ "core/Maths/math.vector");
/* harmony import */ var core_Materials_PBR_pbrBaseMaterial__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_Materials_PBR_pbrBaseMaterial__WEBPACK_IMPORTED_MODULE_1__);



var NAME = "KHR_materials_clearcoat";
/**
 * @hidden
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
        /** @hidden */
        get: function () {
            return this._wasUsed;
        },
        enumerable: false,
        configurable: true
    });
    KHR_materials_clearcoat.prototype.postExportMaterialAdditionalTextures = function (context, node, babylonMaterial) {
        var additionalTextures = [];
        if (babylonMaterial instanceof core_Materials_PBR_pbrBaseMaterial__WEBPACK_IMPORTED_MODULE_1__.PBRBaseMaterial) {
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
            if (babylonMaterial instanceof core_Materials_PBR_pbrBaseMaterial__WEBPACK_IMPORTED_MODULE_1__.PBRBaseMaterial) {
                if (!babylonMaterial.clearCoat.isEnabled) {
                    resolve(node);
                    return;
                }
                _this._wasUsed = true;
                node.extensions = node.extensions || {};
                var clearCoatTextureInfo = _this._exporter._glTFMaterialExporter._getTextureInfo(babylonMaterial.clearCoat.texture);
                var clearCoatTextureRoughnessInfo = void 0;
                if (babylonMaterial.clearCoat.useRoughnessFromMainTexture) {
                    clearCoatTextureRoughnessInfo = _this._exporter._glTFMaterialExporter._getTextureInfo(babylonMaterial.clearCoat.texture);
                }
                else {
                    clearCoatTextureRoughnessInfo = _this._exporter._glTFMaterialExporter._getTextureInfo(babylonMaterial.clearCoat.textureRoughness);
                }
                if (babylonMaterial.clearCoat.isTintEnabled) {
                    core_Materials_PBR_pbrBaseMaterial__WEBPACK_IMPORTED_MODULE_1__.Tools.Warn("Clear Color tint is not supported for glTF export. Ignoring for: ".concat(babylonMaterial.name));
                }
                if (babylonMaterial.clearCoat.remapF0OnInterfaceChange) {
                    core_Materials_PBR_pbrBaseMaterial__WEBPACK_IMPORTED_MODULE_1__.Tools.Warn("Clear Color F0 remapping is not supported for glTF export. Ignoring for: ".concat(babylonMaterial.name));
                }
                var clearCoatNormalTextureInfo = _this._exporter._glTFMaterialExporter._getTextureInfo(babylonMaterial.clearCoat.bumpTexture);
                var clearCoatInfo_1 = {
                    clearcoatFactor: babylonMaterial.clearCoat.intensity,
                    clearcoatTexture: clearCoatTextureInfo !== null && clearCoatTextureInfo !== void 0 ? clearCoatTextureInfo : undefined,
                    clearcoatRoughnessFactor: babylonMaterial.clearCoat.roughness,
                    clearcoatRoughnessTexture: clearCoatTextureRoughnessInfo !== null && clearCoatTextureRoughnessInfo !== void 0 ? clearCoatTextureRoughnessInfo : undefined,
                    clearcoatNormalTexture: clearCoatNormalTextureInfo !== null && clearCoatNormalTextureInfo !== void 0 ? clearCoatNormalTextureInfo : undefined,
                    hasTextures: function () {
                        return clearCoatInfo_1.clearcoatTexture !== null || clearCoatInfo_1.clearcoatRoughnessTexture !== null || clearCoatInfo_1.clearcoatRoughnessTexture !== null;
                    },
                };
                node.extensions[NAME] = clearCoatInfo_1;
            }
            resolve(node);
        });
    };
    return KHR_materials_clearcoat;
}());

_glTFExporter__WEBPACK_IMPORTED_MODULE_0__._Exporter.RegisterExtension(NAME, function (exporter) { return new KHR_materials_clearcoat(exporter); });


/***/ }),

/***/ "../../../lts/serializers/dist/glTF/2.0/Extensions/KHR_materials_iridescence.js":
/*!**************************************************************************************!*\
  !*** ../../../lts/serializers/dist/glTF/2.0/Extensions/KHR_materials_iridescence.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KHR_materials_iridescence": () => (/* binding */ KHR_materials_iridescence)
/* harmony export */ });
/* harmony import */ var _glTFExporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../glTFExporter */ "../../../lts/serializers/dist/glTF/2.0/glTFExporter.js");
/* harmony import */ var core_Materials_PBR_pbrBaseMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/Materials/PBR/pbrBaseMaterial */ "core/Maths/math.vector");
/* harmony import */ var core_Materials_PBR_pbrBaseMaterial__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_Materials_PBR_pbrBaseMaterial__WEBPACK_IMPORTED_MODULE_1__);


var NAME = "KHR_materials_iridescence";
/**
 * @hidden
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
        /** @hidden */
        get: function () {
            return this._wasUsed;
        },
        enumerable: false,
        configurable: true
    });
    KHR_materials_iridescence.prototype.postExportMaterialAdditionalTextures = function (context, node, babylonMaterial) {
        var additionalTextures = [];
        if (babylonMaterial instanceof core_Materials_PBR_pbrBaseMaterial__WEBPACK_IMPORTED_MODULE_1__.PBRBaseMaterial) {
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
            if (babylonMaterial instanceof core_Materials_PBR_pbrBaseMaterial__WEBPACK_IMPORTED_MODULE_1__.PBRBaseMaterial) {
                if (!babylonMaterial.iridescence.isEnabled) {
                    resolve(node);
                    return;
                }
                _this._wasUsed = true;
                node.extensions = node.extensions || {};
                var iridescenceTextureInfo = _this._exporter._glTFMaterialExporter._getTextureInfo(babylonMaterial.iridescence.texture);
                var iridescenceThicknessTextureInfo = _this._exporter._glTFMaterialExporter._getTextureInfo(babylonMaterial.iridescence.thicknessTexture);
                var iridescenceInfo_1 = {
                    iridescenceFactor: babylonMaterial.iridescence.intensity,
                    iridescenceIor: babylonMaterial.iridescence.indexOfRefraction,
                    iridescenceThicknessMinimum: babylonMaterial.iridescence.minimumThickness,
                    iridescenceThicknessMaximum: babylonMaterial.iridescence.maximumThickness,
                    iridescenceTexture: iridescenceTextureInfo !== null && iridescenceTextureInfo !== void 0 ? iridescenceTextureInfo : undefined,
                    iridescenceThicknessTexture: iridescenceThicknessTextureInfo !== null && iridescenceThicknessTextureInfo !== void 0 ? iridescenceThicknessTextureInfo : undefined,
                    hasTextures: function () {
                        return iridescenceInfo_1.iridescenceTexture !== null || iridescenceInfo_1.iridescenceThicknessTexture !== null;
                    },
                };
                node.extensions[NAME] = iridescenceInfo_1;
            }
            resolve(node);
        });
    };
    return KHR_materials_iridescence;
}());

_glTFExporter__WEBPACK_IMPORTED_MODULE_0__._Exporter.RegisterExtension(NAME, function (exporter) { return new KHR_materials_iridescence(exporter); });


/***/ }),

/***/ "../../../lts/serializers/dist/glTF/2.0/Extensions/KHR_materials_sheen.js":
/*!********************************************************************************!*\
  !*** ../../../lts/serializers/dist/glTF/2.0/Extensions/KHR_materials_sheen.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KHR_materials_sheen": () => (/* binding */ KHR_materials_sheen)
/* harmony export */ });
/* harmony import */ var _glTFExporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../glTFExporter */ "../../../lts/serializers/dist/glTF/2.0/glTFExporter.js");
/* harmony import */ var core_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/Materials/PBR/pbrMaterial */ "core/Maths/math.vector");
/* harmony import */ var core_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__);


var NAME = "KHR_materials_sheen";
/**
 * @hidden
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
        /** @hidden */
        get: function () {
            return this._wasUsed;
        },
        enumerable: false,
        configurable: true
    });
    KHR_materials_sheen.prototype.postExportMaterialAdditionalTextures = function (context, node, babylonMaterial) {
        if (babylonMaterial instanceof core_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__.PBRMaterial) {
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
            if (babylonMaterial instanceof core_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__.PBRMaterial) {
                if (!babylonMaterial.sheen.isEnabled) {
                    resolve(node);
                    return;
                }
                _this._wasUsed = true;
                if (node.extensions == null) {
                    node.extensions = {};
                }
                var sheenInfo_1 = {
                    sheenColorFactor: babylonMaterial.sheen.color.asArray(),
                    sheenRoughnessFactor: (_a = babylonMaterial.sheen.roughness) !== null && _a !== void 0 ? _a : 0,
                    hasTextures: function () {
                        return sheenInfo_1.sheenColorTexture !== null || sheenInfo_1.sheenRoughnessTexture !== null;
                    },
                };
                if (babylonMaterial.sheen.texture) {
                    sheenInfo_1.sheenColorTexture = (_b = _this._exporter._glTFMaterialExporter._getTextureInfo(babylonMaterial.sheen.texture)) !== null && _b !== void 0 ? _b : undefined;
                }
                if (babylonMaterial.sheen.textureRoughness && !babylonMaterial.sheen.useRoughnessFromMainTexture) {
                    sheenInfo_1.sheenRoughnessTexture = (_c = _this._exporter._glTFMaterialExporter._getTextureInfo(babylonMaterial.sheen.textureRoughness)) !== null && _c !== void 0 ? _c : undefined;
                }
                else if (babylonMaterial.sheen.texture && babylonMaterial.sheen.useRoughnessFromMainTexture) {
                    sheenInfo_1.sheenRoughnessTexture = (_d = _this._exporter._glTFMaterialExporter._getTextureInfo(babylonMaterial.sheen.texture)) !== null && _d !== void 0 ? _d : undefined;
                }
                node.extensions[NAME] = sheenInfo_1;
            }
            resolve(node);
        });
    };
    return KHR_materials_sheen;
}());

_glTFExporter__WEBPACK_IMPORTED_MODULE_0__._Exporter.RegisterExtension(NAME, function (exporter) { return new KHR_materials_sheen(exporter); });


/***/ }),

/***/ "../../../lts/serializers/dist/glTF/2.0/Extensions/KHR_materials_specular.js":
/*!***********************************************************************************!*\
  !*** ../../../lts/serializers/dist/glTF/2.0/Extensions/KHR_materials_specular.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KHR_materials_specular": () => (/* binding */ KHR_materials_specular)
/* harmony export */ });
/* harmony import */ var _glTFExporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../glTFExporter */ "../../../lts/serializers/dist/glTF/2.0/glTFExporter.js");
/* harmony import */ var core_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/Materials/PBR/pbrMaterial */ "core/Maths/math.vector");
/* harmony import */ var core_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__);


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
    KHR_materials_specular.prototype.dispose = function () { };
    Object.defineProperty(KHR_materials_specular.prototype, "wasUsed", {
        /** @hidden */
        get: function () {
            return this._wasUsed;
        },
        enumerable: false,
        configurable: true
    });
    KHR_materials_specular.prototype.postExportMaterialAdditionalTextures = function (context, node, babylonMaterial) {
        var additionalTextures = [];
        if (babylonMaterial instanceof core_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__.PBRMaterial) {
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
        return ((mat.metallicF0Factor != undefined && mat.metallicF0Factor != 1.0) ||
            (mat.metallicReflectanceColor != undefined && !mat.metallicReflectanceColor.equalsFloats(1.0, 1.0, 1.0)) ||
            this._hasTexturesExtension(mat));
    };
    KHR_materials_specular.prototype._hasTexturesExtension = function (mat) {
        return mat.metallicReflectanceTexture != null || mat.reflectanceTexture != null;
    };
    KHR_materials_specular.prototype.postExportMaterialAsync = function (context, node, babylonMaterial) {
        var _this = this;
        return new Promise(function (resolve) {
            var _a, _b;
            if (babylonMaterial instanceof core_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__.PBRMaterial && _this._isExtensionEnabled(babylonMaterial)) {
                _this._wasUsed = true;
                node.extensions = node.extensions || {};
                var metallicReflectanceTexture = (_a = _this._exporter._glTFMaterialExporter._getTextureInfo(babylonMaterial.metallicReflectanceTexture)) !== null && _a !== void 0 ? _a : undefined;
                var reflectanceTexture = (_b = _this._exporter._glTFMaterialExporter._getTextureInfo(babylonMaterial.reflectanceTexture)) !== null && _b !== void 0 ? _b : undefined;
                var metallicF0Factor = babylonMaterial.metallicF0Factor == 1.0 ? undefined : babylonMaterial.metallicF0Factor;
                var metallicReflectanceColor = babylonMaterial.metallicReflectanceColor.equalsFloats(1.0, 1.0, 1.0)
                    ? undefined
                    : babylonMaterial.metallicReflectanceColor.asArray();
                var specularInfo = {
                    specularFactor: metallicF0Factor,
                    specularTexture: metallicReflectanceTexture,
                    specularColorFactor: metallicReflectanceColor,
                    specularColorTexture: reflectanceTexture,
                    hasTextures: function () {
                        return _this._hasTexturesExtension(babylonMaterial);
                    },
                };
                node.extensions[NAME] = specularInfo;
            }
            resolve(node);
        });
    };
    return KHR_materials_specular;
}());

_glTFExporter__WEBPACK_IMPORTED_MODULE_0__._Exporter.RegisterExtension(NAME, function (exporter) { return new KHR_materials_specular(exporter); });


/***/ }),

/***/ "../../../lts/serializers/dist/glTF/2.0/Extensions/KHR_materials_unlit.js":
/*!********************************************************************************!*\
  !*** ../../../lts/serializers/dist/glTF/2.0/Extensions/KHR_materials_unlit.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KHR_materials_unlit": () => (/* binding */ KHR_materials_unlit)
/* harmony export */ });
/* harmony import */ var _glTFExporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../glTFExporter */ "../../../lts/serializers/dist/glTF/2.0/glTFExporter.js");
/* harmony import */ var core_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/Materials/standardMaterial */ "core/Maths/math.vector");
/* harmony import */ var core_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__);



var NAME = "KHR_materials_unlit";
/**
 * @hidden
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
        /** @hidden */
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
            if (babylonMaterial instanceof core_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__.PBRMaterial) {
                unlitMaterial = babylonMaterial.unlit;
            }
            else if (babylonMaterial instanceof core_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__.StandardMaterial) {
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

_glTFExporter__WEBPACK_IMPORTED_MODULE_0__._Exporter.RegisterExtension(NAME, function () { return new KHR_materials_unlit(); });


/***/ }),

/***/ "../../../lts/serializers/dist/glTF/2.0/Extensions/KHR_texture_transform.js":
/*!**********************************************************************************!*\
  !*** ../../../lts/serializers/dist/glTF/2.0/Extensions/KHR_texture_transform.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KHR_texture_transform": () => (/* binding */ KHR_texture_transform)
/* harmony export */ });
/* harmony import */ var core_Misc_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/Materials/Textures/Procedurals/proceduralTexture */ "core/Maths/math.vector");
/* harmony import */ var core_Misc_tools__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_Misc_tools__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _glTFExporter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../glTFExporter */ "../../../lts/serializers/dist/glTF/2.0/glTFExporter.js");
/* harmony import */ var _shaders_textureTransform_fragment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shaders/textureTransform.fragment */ "../../../lts/serializers/dist/glTF/2.0/shaders/textureTransform.fragment.js");



var NAME = "KHR_texture_transform";

/**
 * @hidden
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
var KHR_texture_transform = /** @class */ (function () {
    function KHR_texture_transform() {
        this._recordedTextures = [];
        /** Name of this extension */
        this.name = NAME;
        /** Defines whether this extension is enabled */
        this.enabled = true;
        /** Defines whether this extension is required */
        this.required = false;
        /** Reference to the glTF exporter */
        this._wasUsed = false;
    }
    KHR_texture_transform.prototype.dispose = function () {
        for (var _i = 0, _a = this._recordedTextures; _i < _a.length; _i++) {
            var texture = _a[_i];
            texture.dispose();
        }
    };
    Object.defineProperty(KHR_texture_transform.prototype, "wasUsed", {
        /** @hidden */
        get: function () {
            return this._wasUsed;
        },
        enumerable: false,
        configurable: true
    });
    KHR_texture_transform.prototype.postExportTexture = function (context, textureInfo, babylonTexture) {
        var canUseExtension = babylonTexture &&
            ((babylonTexture.uAng === 0 && babylonTexture.wAng === 0 && babylonTexture.vAng === 0) ||
                (babylonTexture.uRotationCenter === 0 && babylonTexture.vRotationCenter === 0));
        if (canUseExtension) {
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
                textureTransform.rotation = babylonTexture.wAng;
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
        }
    };
    KHR_texture_transform.prototype.preExportTextureAsync = function (context, babylonTexture) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var scene = babylonTexture.getScene();
            if (!scene) {
                reject("".concat(context, ": \"scene\" is not defined for Babylon texture ").concat(babylonTexture.name, "!"));
                return;
            }
            var bakeTextureTransform = false;
            /*
             * The KHR_texture_transform schema only supports rotation around the origin.
             * the texture must be baked to preserve appearance.
             * see: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_texture_transform#gltf-schema-updates
             */
            if ((babylonTexture.uAng !== 0 || babylonTexture.wAng !== 0 || babylonTexture.vAng !== 0) &&
                (babylonTexture.uRotationCenter !== 0 || babylonTexture.vRotationCenter !== 0)) {
                bakeTextureTransform = true;
            }
            if (!bakeTextureTransform) {
                resolve(babylonTexture);
                return;
            }
            return _this._textureTransformTextureAsync(babylonTexture, scene)
                .then(function (proceduralTexture) {
                resolve(proceduralTexture);
            })
                .catch(function (e) {
                reject(e);
            });
        });
    };
    /**
     * Transform the babylon texture by the offset, rotation and scale parameters using a procedural texture
     * @param babylonTexture
     * @param scene
     */
    KHR_texture_transform.prototype._textureTransformTextureAsync = function (babylonTexture, scene) {
        var _this = this;
        return new Promise(function (resolve) {
            var proceduralTexture = new core_Misc_tools__WEBPACK_IMPORTED_MODULE_0__.ProceduralTexture("".concat(babylonTexture.name), babylonTexture.getSize(), "textureTransform", scene);
            if (!proceduralTexture) {
                core_Misc_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.Log("Cannot create procedural texture for ".concat(babylonTexture.name, "!"));
                resolve(babylonTexture);
            }
            proceduralTexture.reservedDataStore = {
                hidden: true,
                source: babylonTexture,
            };
            _this._recordedTextures.push(proceduralTexture);
            proceduralTexture.coordinatesIndex = babylonTexture.coordinatesIndex;
            proceduralTexture.setTexture("textureSampler", babylonTexture);
            proceduralTexture.setMatrix("textureTransformMat", babylonTexture.getTextureMatrix());
            // isReady trigger creation of effect if it doesnt exist yet
            if (proceduralTexture.isReady()) {
                proceduralTexture.render();
                resolve(proceduralTexture);
            }
            else {
                proceduralTexture.getEffect().executeWhenCompiled(function () {
                    proceduralTexture.render();
                    resolve(proceduralTexture);
                });
            }
        });
    };
    return KHR_texture_transform;
}());

_glTFExporter__WEBPACK_IMPORTED_MODULE_1__._Exporter.RegisterExtension(NAME, function () { return new KHR_texture_transform(); });


/***/ }),

/***/ "../../../lts/serializers/dist/glTF/2.0/Extensions/index.js":
/*!******************************************************************!*\
  !*** ../../../lts/serializers/dist/glTF/2.0/Extensions/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KHR_lights_punctual": () => (/* reexport safe */ _KHR_lights_punctual__WEBPACK_IMPORTED_MODULE_1__.KHR_lights_punctual),
/* harmony export */   "KHR_materials_clearcoat": () => (/* reexport safe */ _KHR_materials_clearcoat__WEBPACK_IMPORTED_MODULE_2__.KHR_materials_clearcoat),
/* harmony export */   "KHR_materials_iridescence": () => (/* reexport safe */ _KHR_materials_iridescence__WEBPACK_IMPORTED_MODULE_3__.KHR_materials_iridescence),
/* harmony export */   "KHR_materials_sheen": () => (/* reexport safe */ _KHR_materials_sheen__WEBPACK_IMPORTED_MODULE_4__.KHR_materials_sheen),
/* harmony export */   "KHR_materials_specular": () => (/* reexport safe */ _KHR_materials_specular__WEBPACK_IMPORTED_MODULE_6__.KHR_materials_specular),
/* harmony export */   "KHR_materials_unlit": () => (/* reexport safe */ _KHR_materials_unlit__WEBPACK_IMPORTED_MODULE_5__.KHR_materials_unlit),
/* harmony export */   "KHR_texture_transform": () => (/* reexport safe */ _KHR_texture_transform__WEBPACK_IMPORTED_MODULE_0__.KHR_texture_transform)
/* harmony export */ });
/* harmony import */ var _KHR_texture_transform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KHR_texture_transform */ "../../../lts/serializers/dist/glTF/2.0/Extensions/KHR_texture_transform.js");
/* harmony import */ var _KHR_lights_punctual__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KHR_lights_punctual */ "../../../lts/serializers/dist/glTF/2.0/Extensions/KHR_lights_punctual.js");
/* harmony import */ var _KHR_materials_clearcoat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./KHR_materials_clearcoat */ "../../../lts/serializers/dist/glTF/2.0/Extensions/KHR_materials_clearcoat.js");
/* harmony import */ var _KHR_materials_iridescence__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./KHR_materials_iridescence */ "../../../lts/serializers/dist/glTF/2.0/Extensions/KHR_materials_iridescence.js");
/* harmony import */ var _KHR_materials_sheen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./KHR_materials_sheen */ "../../../lts/serializers/dist/glTF/2.0/Extensions/KHR_materials_sheen.js");
/* harmony import */ var _KHR_materials_unlit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./KHR_materials_unlit */ "../../../lts/serializers/dist/glTF/2.0/Extensions/KHR_materials_unlit.js");
/* harmony import */ var _KHR_materials_specular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./KHR_materials_specular */ "../../../lts/serializers/dist/glTF/2.0/Extensions/KHR_materials_specular.js");









/***/ }),

/***/ "../../../lts/serializers/dist/glTF/2.0/glTFAnimation.js":
/*!***************************************************************!*\
  !*** ../../../lts/serializers/dist/glTF/2.0/glTFAnimation.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_GLTFAnimation": () => (/* binding */ _GLTFAnimation)
/* harmony export */ });
/* harmony import */ var core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/Animations/animationKey */ "core/Maths/math.vector");
/* harmony import */ var core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _glTFUtilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./glTFUtilities */ "../../../lts/serializers/dist/glTF/2.0/glTFUtilities.js");








/**
 * @hidden
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
 * @hidden
 * Utility class for generating glTF animation data from BabylonJS.
 */
var _GLTFAnimation = /** @class */ (function () {
    function _GLTFAnimation() {
    }
    /**
     * @ignore
     *
     * Creates glTF channel animation from BabylonJS animation.
     * @param babylonTransformNode - BabylonJS mesh.
     * @param animation - animation.
     * @param animationChannelTargetPath - The target animation channel.
     * @param convertToRightHandedSystem - Specifies if the values should be converted to right-handed.
     * @param useQuaternion - Specifies if quaternions are used.
     * @returns nullable IAnimationData
     */
    _GLTFAnimation._CreateNodeAnimation = function (babylonTransformNode, animation, animationChannelTargetPath, convertToRightHandedSystem, useQuaternion, animationSampleRate) {
        var inputs = [];
        var outputs = [];
        var keyFrames = animation.getKeys();
        var minMaxKeyFrames = _GLTFAnimation._CalculateMinMaxKeyFrames(keyFrames);
        var interpolationOrBake = _GLTFAnimation._DeduceInterpolation(keyFrames, animationChannelTargetPath, useQuaternion);
        var frameDelta = minMaxKeyFrames.max - minMaxKeyFrames.min;
        var interpolation = interpolationOrBake.interpolationType;
        var shouldBakeAnimation = interpolationOrBake.shouldBakeAnimation;
        if (shouldBakeAnimation) {
            _GLTFAnimation._CreateBakedAnimation(babylonTransformNode, animation, animationChannelTargetPath, minMaxKeyFrames.min, minMaxKeyFrames.max, animation.framePerSecond, animationSampleRate, inputs, outputs, minMaxKeyFrames, convertToRightHandedSystem, useQuaternion);
        }
        else {
            if (interpolation === "LINEAR" /* LINEAR */ || interpolation === "STEP" /* STEP */) {
                _GLTFAnimation._CreateLinearOrStepAnimation(babylonTransformNode, animation, animationChannelTargetPath, frameDelta, inputs, outputs, convertToRightHandedSystem, useQuaternion);
            }
            else if (interpolation === "CUBICSPLINE" /* CUBICSPLINE */) {
                _GLTFAnimation._CreateCubicSplineAnimation(babylonTransformNode, animation, animationChannelTargetPath, frameDelta, inputs, outputs, convertToRightHandedSystem, useQuaternion);
            }
            else {
                _GLTFAnimation._CreateBakedAnimation(babylonTransformNode, animation, animationChannelTargetPath, minMaxKeyFrames.min, minMaxKeyFrames.max, animation.framePerSecond, animationSampleRate, inputs, outputs, minMaxKeyFrames, convertToRightHandedSystem, useQuaternion);
            }
        }
        if (inputs.length && outputs.length) {
            var result = {
                inputs: inputs,
                outputs: outputs,
                samplerInterpolation: interpolation,
                inputsMin: shouldBakeAnimation ? minMaxKeyFrames.min : core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.FloatRound(minMaxKeyFrames.min / animation.framePerSecond),
                inputsMax: shouldBakeAnimation ? minMaxKeyFrames.max : core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.FloatRound(minMaxKeyFrames.max / animation.framePerSecond),
            };
            return result;
        }
        return null;
    };
    _GLTFAnimation._DeduceAnimationInfo = function (animation) {
        var animationChannelTargetPath = null;
        var dataAccessorType = "VEC3" /* VEC3 */;
        var useQuaternion = false;
        var property = animation.targetProperty.split(".");
        switch (property[0]) {
            case "scaling": {
                animationChannelTargetPath = "scale" /* SCALE */;
                break;
            }
            case "position": {
                animationChannelTargetPath = "translation" /* TRANSLATION */;
                break;
            }
            case "rotation": {
                dataAccessorType = "VEC4" /* VEC4 */;
                animationChannelTargetPath = "rotation" /* ROTATION */;
                break;
            }
            case "rotationQuaternion": {
                dataAccessorType = "VEC4" /* VEC4 */;
                useQuaternion = true;
                animationChannelTargetPath = "rotation" /* ROTATION */;
                break;
            }
            case "influence": {
                dataAccessorType = "SCALAR" /* SCALAR */;
                animationChannelTargetPath = "weights" /* WEIGHTS */;
                break;
            }
            default: {
                core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Error("Unsupported animatable property ".concat(property[0]));
            }
        }
        if (animationChannelTargetPath) {
            return { animationChannelTargetPath: animationChannelTargetPath, dataAccessorType: dataAccessorType, useQuaternion: useQuaternion };
        }
        else {
            core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Error("animation channel target path and data accessor type could be deduced");
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
     * @param binaryWriter
     * @param bufferViews
     * @param accessors
     * @param convertToRightHandedSystem
     * @param animationSampleRate
     */
    _GLTFAnimation._CreateNodeAnimationFromNodeAnimations = function (babylonNode, runtimeGLTFAnimation, idleGLTFAnimations, nodeMap, nodes, binaryWriter, bufferViews, accessors, convertToRightHandedSystem, animationSampleRate) {
        var glTFAnimation;
        if (babylonNode instanceof core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TransformNode) {
            if (babylonNode.animations) {
                for (var _i = 0, _a = babylonNode.animations; _i < _a.length; _i++) {
                    var animation = _a[_i];
                    var animationInfo = _GLTFAnimation._DeduceAnimationInfo(animation);
                    if (animationInfo) {
                        glTFAnimation = {
                            name: animation.name,
                            samplers: [],
                            channels: [],
                        };
                        _GLTFAnimation._AddAnimation("".concat(animation.name), animation.hasRunningRuntimeAnimations ? runtimeGLTFAnimation : glTFAnimation, babylonNode, animation, animationInfo.dataAccessorType, animationInfo.animationChannelTargetPath, nodeMap, binaryWriter, bufferViews, accessors, convertToRightHandedSystem, animationInfo.useQuaternion, animationSampleRate);
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
     * @param binaryWriter
     * @param bufferViews
     * @param accessors
     * @param convertToRightHandedSystem
     * @param animationSampleRate
     */
    _GLTFAnimation._CreateMorphTargetAnimationFromMorphTargetAnimations = function (babylonNode, runtimeGLTFAnimation, idleGLTFAnimations, nodeMap, nodes, binaryWriter, bufferViews, accessors, convertToRightHandedSystem, animationSampleRate) {
        var glTFAnimation;
        if (babylonNode instanceof core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Mesh) {
            var morphTargetManager = babylonNode.morphTargetManager;
            if (morphTargetManager) {
                for (var i = 0; i < morphTargetManager.numTargets; ++i) {
                    var morphTarget = morphTargetManager.getTarget(i);
                    for (var _i = 0, _a = morphTarget.animations; _i < _a.length; _i++) {
                        var animation = _a[_i];
                        var combinedAnimation = new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Animation("".concat(animation.name), "influence", animation.framePerSecond, animation.dataType, animation.loopMode, animation.enableBlending);
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
                            _GLTFAnimation._AddAnimation(animation.name, animation.hasRunningRuntimeAnimations ? runtimeGLTFAnimation : glTFAnimation, babylonNode, combinedAnimation, animationInfo.dataAccessorType, animationInfo.animationChannelTargetPath, nodeMap, binaryWriter, bufferViews, accessors, convertToRightHandedSystem, animationInfo.useQuaternion, animationSampleRate, morphTargetManager.numTargets);
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
     * @ignore
     * Create node and morph animations from the animation groups
     * @param babylonScene
     * @param glTFAnimations
     * @param nodeMap
     * @param nodes
     * @param binaryWriter
     * @param bufferViews
     * @param accessors
     * @param convertToRightHandedSystemMap
     * @param animationSampleRate
     */
    _GLTFAnimation._CreateNodeAndMorphAnimationFromAnimationGroups = function (babylonScene, glTFAnimations, nodeMap, nodes, binaryWriter, bufferViews, accessors, convertToRightHandedSystemMap, animationSampleRate) {
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
                    if (target instanceof core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TransformNode || (target.length === 1 && target[0] instanceof core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TransformNode)) {
                        var animationInfo = _GLTFAnimation._DeduceAnimationInfo(targetAnimation.animation);
                        if (animationInfo) {
                            var babylonTransformNode = target instanceof core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TransformNode ? target : target[0];
                            var convertToRightHandedSystem = convertToRightHandedSystemMap[babylonTransformNode.uniqueId];
                            _GLTFAnimation._AddAnimation("".concat(animation.name), glTFAnimation, babylonTransformNode, animation, animationInfo.dataAccessorType, animationInfo.animationChannelTargetPath, nodeMap, binaryWriter, bufferViews, accessors, convertToRightHandedSystem, animationInfo.useQuaternion, animationSampleRate);
                        }
                    }
                    else if (target instanceof core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.MorphTarget || (target.length === 1 && target[0] instanceof core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.MorphTarget)) {
                        var animationInfo = _GLTFAnimation._DeduceAnimationInfo(targetAnimation.animation);
                        if (animationInfo) {
                            var babylonMorphTarget_1 = target instanceof core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.MorphTarget ? target : target[0];
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
                                        combinedAnimationGroup = new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Animation("".concat(animationGroup.name, "_").concat(mesh.name, "_MorphWeightAnimation"), "influence", morphTargetAnimation.framePerSecond, core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, morphTargetAnimation.loopMode, morphTargetAnimation.enableBlending);
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
                        _GLTFAnimation._AddAnimation("".concat(animationGroup.name, "_").concat(mesh.name, "_MorphWeightAnimation"), glTFAnimation, mesh, combinedAnimationGroup, animationInfo.dataAccessorType, animationInfo.animationChannelTargetPath, nodeMap, binaryWriter, bufferViews, accessors, false, animationInfo.useQuaternion, animationSampleRate, morphTargetManager === null || morphTargetManager === void 0 ? void 0 : morphTargetManager.numTargets);
                    }
                });
                if (glTFAnimation.channels.length && glTFAnimation.samplers.length) {
                    glTFAnimations.push(glTFAnimation);
                }
            };
            for (var _i = 0, animationGroups_1 = animationGroups; _i < animationGroups_1.length; _i++) {
                var animationGroup = animationGroups_1[_i];
                _loop_1(animationGroup);
            }
        }
    };
    _GLTFAnimation._AddAnimation = function (name, glTFAnimation, babylonTransformNode, animation, dataAccessorType, animationChannelTargetPath, nodeMap, binaryWriter, bufferViews, accessors, convertToRightHandedSystem, useQuaternion, animationSampleRate, morphAnimationChannels) {
        var animationData = _GLTFAnimation._CreateNodeAnimation(babylonTransformNode, animation, animationChannelTargetPath, convertToRightHandedSystem, useQuaternion, animationSampleRate);
        var bufferView;
        var accessor;
        var keyframeAccessorIndex;
        var dataAccessorIndex;
        var outputLength;
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
            var nodeIndex = nodeMap[babylonTransformNode.uniqueId];
            // Creates buffer view and accessor for key frames.
            var byteLength = animationData.inputs.length * 4;
            bufferView = _glTFUtilities__WEBPACK_IMPORTED_MODULE_1__._GLTFUtilities._CreateBufferView(0, binaryWriter.getByteOffset(), byteLength, undefined, "".concat(name, "  keyframe data view"));
            bufferViews.push(bufferView);
            animationData.inputs.forEach(function (input) {
                binaryWriter.setFloat32(input);
            });
            accessor = _glTFUtilities__WEBPACK_IMPORTED_MODULE_1__._GLTFUtilities._CreateAccessor(bufferViews.length - 1, "".concat(name, "  keyframes"), "SCALAR" /* SCALAR */, 5126 /* FLOAT */, animationData.inputs.length, null, [animationData.inputsMin], [animationData.inputsMax]);
            accessors.push(accessor);
            keyframeAccessorIndex = accessors.length - 1;
            // create bufferview and accessor for keyed values.
            outputLength = animationData.outputs.length;
            byteLength = _glTFUtilities__WEBPACK_IMPORTED_MODULE_1__._GLTFUtilities._GetDataAccessorElementCount(dataAccessorType) * 4 * animationData.outputs.length;
            // check for in and out tangents
            bufferView = _glTFUtilities__WEBPACK_IMPORTED_MODULE_1__._GLTFUtilities._CreateBufferView(0, binaryWriter.getByteOffset(), byteLength, undefined, "".concat(name, "  data view"));
            bufferViews.push(bufferView);
            animationData.outputs.forEach(function (output) {
                output.forEach(function (entry) {
                    binaryWriter.setFloat32(entry);
                });
            });
            accessor = _glTFUtilities__WEBPACK_IMPORTED_MODULE_1__._GLTFUtilities._CreateAccessor(bufferViews.length - 1, "".concat(name, "  data"), dataAccessorType, 5126 /* FLOAT */, outputLength, null, null, null);
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
     * @param convertToRightHandedSystem converts the values to right-handed
     * @param useQuaternion specifies if quaternions should be used
     */
    _GLTFAnimation._CreateBakedAnimation = function (babylonTransformNode, animation, animationChannelTargetPath, minFrame, maxFrame, fps, sampleRate, inputs, outputs, minMaxFrames, convertToRightHandedSystem, useQuaternion) {
        var value;
        var quaternionCache = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.Identity();
        var previousTime = null;
        var time;
        var maxUsedFrame = null;
        var currKeyFrame = null;
        var nextKeyFrame = null;
        var prevKeyFrame = null;
        var endFrame = null;
        minMaxFrames.min = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.FloatRound(minFrame / fps);
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
                    time = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.FloatRound(f / fps);
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
                    _GLTFAnimation._SetInterpolatedValue(babylonTransformNode, value, time, animation, animationChannelTargetPath, quaternionCache, inputs, outputs, convertToRightHandedSystem, useQuaternion);
                }
            }
        }
        if (maxUsedFrame) {
            minMaxFrames.max = maxUsedFrame;
        }
    };
    _GLTFAnimation._ConvertFactorToVector3OrQuaternion = function (factor, babylonTransformNode, animation, animationType, animationChannelTargetPath, convertToRightHandedSystem, useQuaternion) {
        var property;
        var componentName;
        var value = null;
        var basePositionRotationOrScale = _GLTFAnimation._GetBasePositionRotationOrScale(babylonTransformNode, animationChannelTargetPath, convertToRightHandedSystem, useQuaternion);
        if (animationType === core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT) {
            // handles single component x, y, z or w component animation by using a base property and animating over a component.
            property = animation.targetProperty.split(".");
            componentName = property ? property[1] : ""; // x, y, or z component
            value = useQuaternion ? core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.FromArray(basePositionRotationOrScale).normalize() : core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArray(basePositionRotationOrScale);
            switch (componentName) {
                case "x": {
                    value[componentName] = convertToRightHandedSystem && useQuaternion && animationChannelTargetPath !== "scale" /* SCALE */ ? -factor : factor;
                    break;
                }
                case "y": {
                    value[componentName] = convertToRightHandedSystem && useQuaternion && animationChannelTargetPath !== "scale" /* SCALE */ ? -factor : factor;
                    break;
                }
                case "z": {
                    value[componentName] = convertToRightHandedSystem && !useQuaternion && animationChannelTargetPath !== "scale" /* SCALE */ ? -factor : factor;
                    break;
                }
                case "w": {
                    value.w = factor;
                    break;
                }
                default: {
                    core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Error("glTFAnimation: Unsupported component type \"".concat(componentName, "\" for scale animation!"));
                }
            }
        }
        return value;
    };
    _GLTFAnimation._SetInterpolatedValue = function (babylonTransformNode, value, time, animation, animationChannelTargetPath, quaternionCache, inputs, outputs, convertToRightHandedSystem, useQuaternion) {
        var animationType = animation.dataType;
        var cacheValue;
        inputs.push(time);
        if (typeof value === "number" && babylonTransformNode instanceof core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TransformNode) {
            value = this._ConvertFactorToVector3OrQuaternion(value, babylonTransformNode, animation, animationType, animationChannelTargetPath, convertToRightHandedSystem, useQuaternion);
        }
        if (value) {
            if (animationChannelTargetPath === "rotation" /* ROTATION */) {
                if (useQuaternion) {
                    quaternionCache = value;
                }
                else {
                    cacheValue = value;
                    core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.RotationYawPitchRollToRef(cacheValue.y, cacheValue.x, cacheValue.z, quaternionCache);
                }
                if (convertToRightHandedSystem) {
                    _glTFUtilities__WEBPACK_IMPORTED_MODULE_1__._GLTFUtilities._GetRightHandedQuaternionFromRef(quaternionCache);
                    if (!babylonTransformNode.parent) {
                        quaternionCache = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.FromArray([0, 1, 0, 0]).multiply(quaternionCache);
                    }
                }
                outputs.push(quaternionCache.asArray());
            }
            else if (animationChannelTargetPath === "weights" /* WEIGHTS */) {
                outputs.push([value]);
            }
            else {
                // scaling and position animation
                cacheValue = value;
                if (convertToRightHandedSystem && animationChannelTargetPath !== "scale" /* SCALE */) {
                    _glTFUtilities__WEBPACK_IMPORTED_MODULE_1__._GLTFUtilities._GetRightHandedPositionVector3FromRef(cacheValue);
                    if (!babylonTransformNode.parent) {
                        cacheValue.x *= -1;
                        cacheValue.z *= -1;
                    }
                }
                outputs.push(cacheValue.asArray());
            }
        }
    };
    /**
     * Creates linear animation from the animation key frames
     * @param babylonTransformNode BabylonJS mesh
     * @param animation BabylonJS animation
     * @param animationChannelTargetPath The target animation channel
     * @param frameDelta The difference between the last and first frame of the animation
     * @param inputs Array to store the key frame times
     * @param outputs Array to store the key frame data
     * @param convertToRightHandedSystem Specifies if the position data should be converted to right handed
     * @param useQuaternion Specifies if quaternions are used in the animation
     */
    _GLTFAnimation._CreateLinearOrStepAnimation = function (babylonTransformNode, animation, animationChannelTargetPath, frameDelta, inputs, outputs, convertToRightHandedSystem, useQuaternion) {
        for (var _i = 0, _a = animation.getKeys(); _i < _a.length; _i++) {
            var keyFrame = _a[_i];
            inputs.push(keyFrame.frame / animation.framePerSecond); // keyframes in seconds.
            _GLTFAnimation._AddKeyframeValue(keyFrame, animation, outputs, animationChannelTargetPath, babylonTransformNode, convertToRightHandedSystem, useQuaternion);
        }
    };
    /**
     * Creates cubic spline animation from the animation key frames
     * @param babylonTransformNode BabylonJS mesh
     * @param animation BabylonJS animation
     * @param animationChannelTargetPath The target animation channel
     * @param frameDelta The difference between the last and first frame of the animation
     * @param inputs Array to store the key frame times
     * @param outputs Array to store the key frame data
     * @param convertToRightHandedSystem Specifies if the position data should be converted to right handed
     * @param useQuaternion Specifies if quaternions are used in the animation
     */
    _GLTFAnimation._CreateCubicSplineAnimation = function (babylonTransformNode, animation, animationChannelTargetPath, frameDelta, inputs, outputs, convertToRightHandedSystem, useQuaternion) {
        animation.getKeys().forEach(function (keyFrame) {
            inputs.push(keyFrame.frame / animation.framePerSecond); // keyframes in seconds.
            _GLTFAnimation._AddSplineTangent(babylonTransformNode, _TangentType.INTANGENT, outputs, animationChannelTargetPath, "CUBICSPLINE" /* CUBICSPLINE */, keyFrame, frameDelta, useQuaternion, convertToRightHandedSystem);
            _GLTFAnimation._AddKeyframeValue(keyFrame, animation, outputs, animationChannelTargetPath, babylonTransformNode, convertToRightHandedSystem, useQuaternion);
            _GLTFAnimation._AddSplineTangent(babylonTransformNode, _TangentType.OUTTANGENT, outputs, animationChannelTargetPath, "CUBICSPLINE" /* CUBICSPLINE */, keyFrame, frameDelta, useQuaternion, convertToRightHandedSystem);
        });
    };
    _GLTFAnimation._GetBasePositionRotationOrScale = function (babylonTransformNode, animationChannelTargetPath, convertToRightHandedSystem, useQuaternion) {
        var basePositionRotationOrScale;
        if (animationChannelTargetPath === "rotation" /* ROTATION */) {
            if (useQuaternion) {
                if (babylonTransformNode.rotationQuaternion) {
                    basePositionRotationOrScale = babylonTransformNode.rotationQuaternion.asArray();
                    if (convertToRightHandedSystem) {
                        _glTFUtilities__WEBPACK_IMPORTED_MODULE_1__._GLTFUtilities._GetRightHandedQuaternionArrayFromRef(basePositionRotationOrScale);
                        if (!babylonTransformNode.parent) {
                            basePositionRotationOrScale = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.FromArray([0, 1, 0, 0]).multiply(core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.FromArray(basePositionRotationOrScale)).asArray();
                        }
                    }
                }
                else {
                    basePositionRotationOrScale = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.Identity().asArray();
                }
            }
            else {
                basePositionRotationOrScale = babylonTransformNode.rotation.asArray();
                _glTFUtilities__WEBPACK_IMPORTED_MODULE_1__._GLTFUtilities._GetRightHandedNormalArray3FromRef(basePositionRotationOrScale);
            }
        }
        else if (animationChannelTargetPath === "translation" /* TRANSLATION */) {
            basePositionRotationOrScale = babylonTransformNode.position.asArray();
            if (convertToRightHandedSystem) {
                _glTFUtilities__WEBPACK_IMPORTED_MODULE_1__._GLTFUtilities._GetRightHandedPositionArray3FromRef(basePositionRotationOrScale);
            }
        }
        else {
            // scale
            basePositionRotationOrScale = babylonTransformNode.scaling.asArray();
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
     * @param convertToRightHandedSystem
     * @param useQuaternion
     */
    _GLTFAnimation._AddKeyframeValue = function (keyFrame, animation, outputs, animationChannelTargetPath, babylonTransformNode, convertToRightHandedSystem, useQuaternion) {
        var value;
        var newPositionRotationOrScale;
        var animationType = animation.dataType;
        if (animationType === core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_VECTOR3) {
            value = keyFrame.value.asArray();
            if (animationChannelTargetPath === "rotation" /* ROTATION */) {
                var array = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArray(value);
                var rotationQuaternion = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.RotationYawPitchRoll(array.y, array.x, array.z);
                if (convertToRightHandedSystem) {
                    _glTFUtilities__WEBPACK_IMPORTED_MODULE_1__._GLTFUtilities._GetRightHandedQuaternionFromRef(rotationQuaternion);
                    if (!babylonTransformNode.parent) {
                        rotationQuaternion = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.FromArray([0, 1, 0, 0]).multiply(rotationQuaternion);
                    }
                }
                value = rotationQuaternion.asArray();
            }
            else if (animationChannelTargetPath === "translation" /* TRANSLATION */) {
                if (convertToRightHandedSystem) {
                    _glTFUtilities__WEBPACK_IMPORTED_MODULE_1__._GLTFUtilities._GetRightHandedNormalArray3FromRef(value);
                    if (!babylonTransformNode.parent) {
                        value[0] *= -1;
                        value[2] *= -1;
                    }
                }
            }
            outputs.push(value); // scale  vector.
        }
        else if (animationType === core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT) {
            if (animationChannelTargetPath === "weights" /* WEIGHTS */) {
                outputs.push([keyFrame.value]);
            }
            else {
                // handles single component x, y, z or w component animation by using a base property and animating over a component.
                newPositionRotationOrScale = this._ConvertFactorToVector3OrQuaternion(keyFrame.value, babylonTransformNode, animation, animationType, animationChannelTargetPath, convertToRightHandedSystem, useQuaternion);
                if (newPositionRotationOrScale) {
                    if (animationChannelTargetPath === "rotation" /* ROTATION */) {
                        var posRotScale = useQuaternion
                            ? newPositionRotationOrScale
                            : core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.RotationYawPitchRoll(newPositionRotationOrScale.y, newPositionRotationOrScale.x, newPositionRotationOrScale.z).normalize();
                        if (convertToRightHandedSystem) {
                            _glTFUtilities__WEBPACK_IMPORTED_MODULE_1__._GLTFUtilities._GetRightHandedQuaternionFromRef(posRotScale);
                            if (!babylonTransformNode.parent) {
                                posRotScale = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.FromArray([0, 1, 0, 0]).multiply(posRotScale);
                            }
                        }
                        outputs.push(posRotScale.asArray());
                    }
                    else if (animationChannelTargetPath === "translation" /* TRANSLATION */) {
                        if (convertToRightHandedSystem) {
                            _glTFUtilities__WEBPACK_IMPORTED_MODULE_1__._GLTFUtilities._GetRightHandedNormalVector3FromRef(newPositionRotationOrScale);
                            if (!babylonTransformNode.parent) {
                                newPositionRotationOrScale.x *= -1;
                                newPositionRotationOrScale.z *= -1;
                            }
                        }
                    }
                    outputs.push(newPositionRotationOrScale.asArray());
                }
            }
        }
        else if (animationType === core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_QUATERNION) {
            value = keyFrame.value.normalize().asArray();
            if (convertToRightHandedSystem) {
                _glTFUtilities__WEBPACK_IMPORTED_MODULE_1__._GLTFUtilities._GetRightHandedQuaternionArrayFromRef(value);
                if (!babylonTransformNode.parent) {
                    value = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.FromArray([0, 1, 0, 0]).multiply(core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.FromArray(value)).asArray();
                }
            }
            outputs.push(value);
        }
        else {
            core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Error("glTFAnimation: Unsupported key frame values for animation!");
        }
    };
    /**
     * Determine the interpolation based on the key frames
     * @param keyFrames
     * @param animationChannelTargetPath
     * @param useQuaternion
     */
    _GLTFAnimation._DeduceInterpolation = function (keyFrames, animationChannelTargetPath, useQuaternion) {
        var interpolationType;
        var shouldBakeAnimation = false;
        var key;
        if (animationChannelTargetPath === "rotation" /* ROTATION */ && !useQuaternion) {
            return { interpolationType: "LINEAR" /* LINEAR */, shouldBakeAnimation: true };
        }
        for (var i = 0, length_2 = keyFrames.length; i < length_2; ++i) {
            key = keyFrames[i];
            if (key.inTangent || key.outTangent) {
                if (interpolationType) {
                    if (interpolationType !== "CUBICSPLINE" /* CUBICSPLINE */) {
                        interpolationType = "LINEAR" /* LINEAR */;
                        shouldBakeAnimation = true;
                        break;
                    }
                }
                else {
                    interpolationType = "CUBICSPLINE" /* CUBICSPLINE */;
                }
            }
            else {
                if (interpolationType) {
                    if (interpolationType === "CUBICSPLINE" /* CUBICSPLINE */ ||
                        (key.interpolation && key.interpolation === core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.AnimationKeyInterpolation.STEP && interpolationType !== "STEP" /* STEP */)) {
                        interpolationType = "LINEAR" /* LINEAR */;
                        shouldBakeAnimation = true;
                        break;
                    }
                }
                else {
                    if (key.interpolation && key.interpolation === core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.AnimationKeyInterpolation.STEP) {
                        interpolationType = "STEP" /* STEP */;
                    }
                    else {
                        interpolationType = "LINEAR" /* LINEAR */;
                    }
                }
            }
        }
        if (!interpolationType) {
            interpolationType = "LINEAR" /* LINEAR */;
        }
        return { interpolationType: interpolationType, shouldBakeAnimation: shouldBakeAnimation };
    };
    /**
     * Adds an input tangent or output tangent to the output data
     * If an input tangent or output tangent is missing, it uses the zero vector or zero quaternion
     * @param babylonTransformNode
     * @param tangentType Specifies which type of tangent to handle (inTangent or outTangent)
     * @param outputs The animation data by keyframe
     * @param animationChannelTargetPath The target animation channel
     * @param interpolation The interpolation type
     * @param keyFrame The key frame with the animation data
     * @param frameDelta Time difference between two frames used to scale the tangent by the frame delta
     * @param useQuaternion Specifies if quaternions are used
     * @param convertToRightHandedSystem Specifies if the values should be converted to right-handed
     */
    _GLTFAnimation._AddSplineTangent = function (babylonTransformNode, tangentType, outputs, animationChannelTargetPath, interpolation, keyFrame, frameDelta, useQuaternion, convertToRightHandedSystem) {
        var tangent;
        var tangentValue = tangentType === _TangentType.INTANGENT ? keyFrame.inTangent : keyFrame.outTangent;
        if (interpolation === "CUBICSPLINE" /* CUBICSPLINE */) {
            if (animationChannelTargetPath === "rotation" /* ROTATION */) {
                if (tangentValue) {
                    if (useQuaternion) {
                        tangent = tangentValue.asArray();
                    }
                    else {
                        var array = tangentValue;
                        tangent = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.RotationYawPitchRoll(array.y, array.x, array.z).asArray();
                    }
                    if (convertToRightHandedSystem) {
                        _glTFUtilities__WEBPACK_IMPORTED_MODULE_1__._GLTFUtilities._GetRightHandedQuaternionArrayFromRef(tangent);
                        if (!babylonTransformNode.parent) {
                            tangent = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.FromArray([0, 1, 0, 0]).multiply(core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.FromArray(tangent)).asArray();
                        }
                    }
                }
                else {
                    tangent = [0, 0, 0, 0];
                }
            }
            else if (animationChannelTargetPath === "weights" /* WEIGHTS */) {
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
                    if (convertToRightHandedSystem) {
                        if (animationChannelTargetPath === "translation" /* TRANSLATION */) {
                            _glTFUtilities__WEBPACK_IMPORTED_MODULE_1__._GLTFUtilities._GetRightHandedPositionArray3FromRef(tangent);
                            if (!babylonTransformNode.parent) {
                                tangent[0] *= -1; // x
                                tangent[2] *= -1; // z
                            }
                        }
                    }
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

/***/ "../../../lts/serializers/dist/glTF/2.0/glTFData.js":
/*!**********************************************************!*\
  !*** ../../../lts/serializers/dist/glTF/2.0/glTFData.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GLTFData": () => (/* binding */ GLTFData)
/* harmony export */ });
/**
 * Class for holding and downloading glTF file data
 */
var GLTFData = /** @class */ (function () {
    /**
     * Initializes the glTF file object
     */
    function GLTFData() {
        this.glTFFiles = {};
    }
    /**
     * Downloads the glTF data as files based on their names and data
     */
    GLTFData.prototype.downloadFiles = function () {
        /**
         * Checks for a matching suffix at the end of a string (for ES5 and lower)
         * @param str Source string
         * @param suffix Suffix to search for in the source string
         * @returns Boolean indicating whether the suffix was found (true) or not (false)
         */
        function endsWith(str, suffix) {
            return str.indexOf(suffix, str.length - suffix.length) !== -1;
        }
        for (var key in this.glTFFiles) {
            var link = document.createElement("a");
            document.body.appendChild(link);
            link.setAttribute("type", "hidden");
            link.download = key;
            var blob = this.glTFFiles[key];
            var mimeType = void 0;
            if (endsWith(key, ".glb")) {
                mimeType = { type: "model/gltf-binary" };
            }
            else if (endsWith(key, ".bin")) {
                mimeType = { type: "application/octet-stream" };
            }
            else if (endsWith(key, ".gltf")) {
                mimeType = { type: "model/gltf+json" };
            }
            else if (endsWith(key, ".jpeg") || endsWith(key, ".jpg")) {
                mimeType = { type: "image/jpeg" /* JPEG */ };
            }
            else if (endsWith(key, ".png")) {
                mimeType = { type: "image/png" /* PNG */ };
            }
            link.href = window.URL.createObjectURL(new Blob([blob], mimeType));
            link.click();
        }
    };
    return GLTFData;
}());



/***/ }),

/***/ "../../../lts/serializers/dist/glTF/2.0/glTFExporter.js":
/*!**************************************************************!*\
  !*** ../../../lts/serializers/dist/glTF/2.0/glTFExporter.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_BinaryWriter": () => (/* binding */ _BinaryWriter),
/* harmony export */   "_Exporter": () => (/* binding */ _Exporter)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/Materials/multiMaterial */ "core/Maths/math.vector");
/* harmony import */ var core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _glTFMaterialExporter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./glTFMaterialExporter */ "../../../lts/serializers/dist/glTF/2.0/glTFMaterialExporter.js");
/* harmony import */ var _glTFUtilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./glTFUtilities */ "../../../lts/serializers/dist/glTF/2.0/glTFUtilities.js");
/* harmony import */ var _glTFData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./glTFData */ "../../../lts/serializers/dist/glTF/2.0/glTFData.js");
/* harmony import */ var _glTFAnimation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./glTFAnimation */ "../../../lts/serializers/dist/glTF/2.0/glTFAnimation.js");



















/**
 * Converts Babylon Scene into glTF 2.0.
 * @hidden
 */
var _Exporter = /** @class */ (function () {
    /**
     * Creates a glTF Exporter instance, which can accept optional exporter options
     * @param babylonScene Babylon scene object
     * @param options Options to modify the behavior of the exporter
     */
    function _Exporter(babylonScene, options) {
        /*
         * Specifies if root Babylon empty nodes that act as a coordinate space transform should be included in export
         */
        this._includeCoordinateSystemConversionNodes = false;
        this._extensions = {};
        this._glTF = {
            asset: { generator: "Babylon.js v".concat(core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Engine.Version), version: "2.0" },
        };
        babylonScene = babylonScene || core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.EngineStore.LastCreatedScene;
        if (!babylonScene) {
            return;
        }
        this._babylonScene = babylonScene;
        this._bufferViews = [];
        this._accessors = [];
        this._meshes = [];
        this._scenes = [];
        this._cameras = [];
        this._nodes = [];
        this._images = [];
        this._materials = [];
        this._materialMap = [];
        this._textures = [];
        this._samplers = [];
        this._skins = [];
        this._animations = [];
        this._imageData = {};
        this._orderedImageData = [];
        this._options = options || {};
        this._animationSampleRate = options && options.animationSampleRate ? options.animationSampleRate : 1 / 60;
        this._includeCoordinateSystemConversionNodes = options && options.includeCoordinateSystemConversionNodes ? true : false;
        this._glTFMaterialExporter = new _glTFMaterialExporter__WEBPACK_IMPORTED_MODULE_2__._GLTFMaterialExporter(this);
        this._loadExtensions();
    }
    _Exporter.prototype._applyExtension = function (node, extensions, index, actionAsync) {
        var _this = this;
        if (index >= extensions.length) {
            return Promise.resolve(node);
        }
        var currentPromise = actionAsync(extensions[index], node);
        if (!currentPromise) {
            return this._applyExtension(node, extensions, index + 1, actionAsync);
        }
        return currentPromise.then(function (newNode) { return _this._applyExtension(newNode, extensions, index + 1, actionAsync); });
    };
    _Exporter.prototype._applyExtensions = function (node, actionAsync) {
        var extensions = [];
        for (var _i = 0, _a = _Exporter._ExtensionNames; _i < _a.length; _i++) {
            var name_1 = _a[_i];
            extensions.push(this._extensions[name_1]);
        }
        return this._applyExtension(node, extensions, 0, actionAsync);
    };
    _Exporter.prototype._extensionsPreExportTextureAsync = function (context, babylonTexture, mimeType) {
        return this._applyExtensions(babylonTexture, function (extension, node) { return extension.preExportTextureAsync && extension.preExportTextureAsync(context, node, mimeType); });
    };
    _Exporter.prototype._extensionsPostExportMeshPrimitiveAsync = function (context, meshPrimitive, babylonSubMesh, binaryWriter) {
        return this._applyExtensions(meshPrimitive, function (extension, node) { return extension.postExportMeshPrimitiveAsync && extension.postExportMeshPrimitiveAsync(context, node, babylonSubMesh, binaryWriter); });
    };
    _Exporter.prototype._extensionsPostExportNodeAsync = function (context, node, babylonNode, nodeMap) {
        return this._applyExtensions(node, function (extension, node) { return extension.postExportNodeAsync && extension.postExportNodeAsync(context, node, babylonNode, nodeMap); });
    };
    _Exporter.prototype._extensionsPostExportMaterialAsync = function (context, material, babylonMaterial) {
        return this._applyExtensions(material, function (extension, node) { return extension.postExportMaterialAsync && extension.postExportMaterialAsync(context, node, babylonMaterial); });
    };
    _Exporter.prototype._extensionsPostExportMaterialAdditionalTextures = function (context, material, babylonMaterial) {
        var output = [];
        for (var _i = 0, _a = _Exporter._ExtensionNames; _i < _a.length; _i++) {
            var name_2 = _a[_i];
            var extension = this._extensions[name_2];
            if (extension.postExportMaterialAdditionalTextures) {
                output.push.apply(output, extension.postExportMaterialAdditionalTextures(context, material, babylonMaterial));
            }
        }
        return output;
    };
    _Exporter.prototype._extensionsPostExportTextures = function (context, textureInfo, babylonTexture) {
        for (var _i = 0, _a = _Exporter._ExtensionNames; _i < _a.length; _i++) {
            var name_3 = _a[_i];
            var extension = this._extensions[name_3];
            if (extension.postExportTexture) {
                extension.postExportTexture(context, textureInfo, babylonTexture);
            }
        }
    };
    _Exporter.prototype._forEachExtensions = function (action) {
        for (var _i = 0, _a = _Exporter._ExtensionNames; _i < _a.length; _i++) {
            var name_4 = _a[_i];
            var extension = this._extensions[name_4];
            if (extension.enabled) {
                action(extension);
            }
        }
    };
    _Exporter.prototype._extensionsOnExporting = function () {
        var _this = this;
        this._forEachExtensions(function (extension) {
            if (extension.wasUsed) {
                if (_this._glTF.extensionsUsed == null) {
                    _this._glTF.extensionsUsed = [];
                }
                if (_this._glTF.extensionsUsed.indexOf(extension.name) === -1) {
                    _this._glTF.extensionsUsed.push(extension.name);
                }
                if (extension.required) {
                    if (_this._glTF.extensionsRequired == null) {
                        _this._glTF.extensionsRequired = [];
                    }
                    if (_this._glTF.extensionsRequired.indexOf(extension.name) === -1) {
                        _this._glTF.extensionsRequired.push(extension.name);
                    }
                }
                if (_this._glTF.extensions == null) {
                    _this._glTF.extensions = {};
                }
                if (extension.onExporting) {
                    extension.onExporting();
                }
            }
        });
    };
    /**
     * Load glTF serializer extensions
     */
    _Exporter.prototype._loadExtensions = function () {
        for (var _i = 0, _a = _Exporter._ExtensionNames; _i < _a.length; _i++) {
            var name_5 = _a[_i];
            var extension = _Exporter._ExtensionFactories[name_5](this);
            this._extensions[name_5] = extension;
        }
    };
    _Exporter.prototype.dispose = function () {
        for (var extensionKey in this._extensions) {
            var extension = this._extensions[extensionKey];
            extension.dispose();
        }
    };
    /**
     * Registers a glTF exporter extension
     * @param name Name of the extension to export
     * @param factory The factory function that creates the exporter extension
     */
    _Exporter.RegisterExtension = function (name, factory) {
        if (_Exporter.UnregisterExtension(name)) {
            core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.Warn("Extension with the name ".concat(name, " already exists"));
        }
        _Exporter._ExtensionFactories[name] = factory;
        _Exporter._ExtensionNames.push(name);
    };
    /**
     * Un-registers an exporter extension
     * @param name The name fo the exporter extension
     * @returns A boolean indicating whether the extension has been un-registered
     */
    _Exporter.UnregisterExtension = function (name) {
        if (!_Exporter._ExtensionFactories[name]) {
            return false;
        }
        delete _Exporter._ExtensionFactories[name];
        var index = _Exporter._ExtensionNames.indexOf(name);
        if (index !== -1) {
            _Exporter._ExtensionNames.splice(index, 1);
        }
        return true;
    };
    _Exporter.prototype._reorderIndicesBasedOnPrimitiveMode = function (submesh, primitiveMode, babylonIndices, byteOffset, binaryWriter) {
        switch (primitiveMode) {
            case core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Material.TriangleFillMode: {
                if (!byteOffset) {
                    byteOffset = 0;
                }
                for (var i = submesh.indexStart, length_1 = submesh.indexStart + submesh.indexCount; i < length_1; i = i + 3) {
                    var index = byteOffset + i * 4;
                    // swap the second and third indices
                    var secondIndex = binaryWriter.getUInt32(index + 4);
                    var thirdIndex = binaryWriter.getUInt32(index + 8);
                    binaryWriter.setUInt32(thirdIndex, index + 4);
                    binaryWriter.setUInt32(secondIndex, index + 8);
                }
                break;
            }
            case core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Material.TriangleFanDrawMode: {
                for (var i = submesh.indexStart + submesh.indexCount - 1, start = submesh.indexStart; i >= start; --i) {
                    binaryWriter.setUInt32(babylonIndices[i], byteOffset);
                    byteOffset += 4;
                }
                break;
            }
            case core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Material.TriangleStripDrawMode: {
                if (submesh.indexCount >= 3) {
                    binaryWriter.setUInt32(babylonIndices[submesh.indexStart + 2], byteOffset + 4);
                    binaryWriter.setUInt32(babylonIndices[submesh.indexStart + 1], byteOffset + 8);
                }
                break;
            }
        }
    };
    /**
     * Reorders the vertex attribute data based on the primitive mode.  This is necessary when indices are not available and the winding order is
     * clock-wise during export to glTF
     * @param submesh BabylonJS submesh
     * @param primitiveMode Primitive mode of the mesh
     * @param sideOrientation the winding order of the submesh
     * @param vertexBufferKind The type of vertex attribute
     * @param meshAttributeArray The vertex attribute data
     * @param byteOffset The offset to the binary data
     * @param binaryWriter The binary data for the glTF file
     * @param convertToRightHandedSystem Converts the values to right-handed
     */
    _Exporter.prototype._reorderVertexAttributeDataBasedOnPrimitiveMode = function (submesh, primitiveMode, sideOrientation, vertexBufferKind, meshAttributeArray, byteOffset, binaryWriter, convertToRightHandedSystem) {
        if (convertToRightHandedSystem && sideOrientation === core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Material.ClockWiseSideOrientation) {
            switch (primitiveMode) {
                case core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Material.TriangleFillMode: {
                    this._reorderTriangleFillMode(submesh, primitiveMode, sideOrientation, vertexBufferKind, meshAttributeArray, byteOffset, binaryWriter, convertToRightHandedSystem);
                    break;
                }
                case core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Material.TriangleStripDrawMode: {
                    this._reorderTriangleStripDrawMode(submesh, primitiveMode, sideOrientation, vertexBufferKind, meshAttributeArray, byteOffset, binaryWriter, convertToRightHandedSystem);
                    break;
                }
                case core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Material.TriangleFanDrawMode: {
                    this._reorderTriangleFanMode(submesh, primitiveMode, sideOrientation, vertexBufferKind, meshAttributeArray, byteOffset, binaryWriter, convertToRightHandedSystem);
                    break;
                }
            }
        }
    };
    /**
     * Reorders the vertex attributes in the correct triangle mode order .  This is necessary when indices are not available and the winding order is
     * clock-wise during export to glTF
     * @param submesh BabylonJS submesh
     * @param primitiveMode Primitive mode of the mesh
     * @param sideOrientation the winding order of the submesh
     * @param vertexBufferKind The type of vertex attribute
     * @param meshAttributeArray The vertex attribute data
     * @param byteOffset The offset to the binary data
     * @param binaryWriter The binary data for the glTF file
     * @param convertToRightHandedSystem Converts the values to right-handed
     */
    _Exporter.prototype._reorderTriangleFillMode = function (submesh, primitiveMode, sideOrientation, vertexBufferKind, meshAttributeArray, byteOffset, binaryWriter, convertToRightHandedSystem) {
        var vertexBuffer = this._getVertexBufferFromMesh(vertexBufferKind, submesh.getMesh());
        if (vertexBuffer) {
            var stride = vertexBuffer.byteStride / core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.GetTypeByteLength(vertexBuffer.type);
            if (submesh.verticesCount % 3 !== 0) {
                core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.Error("The submesh vertices for the triangle fill mode is not divisible by 3!");
            }
            else {
                var vertexData = [];
                var index = 0;
                switch (vertexBufferKind) {
                    case core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.PositionKind:
                    case core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.NormalKind: {
                        for (var x = submesh.verticesStart; x < submesh.verticesStart + submesh.verticesCount; x = x + 3) {
                            index = x * stride;
                            vertexData.push(core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.FromArray(meshAttributeArray, index));
                            vertexData.push(core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.FromArray(meshAttributeArray, index + 2 * stride));
                            vertexData.push(core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.FromArray(meshAttributeArray, index + stride));
                        }
                        break;
                    }
                    case core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.TangentKind: {
                        for (var x = submesh.verticesStart; x < submesh.verticesStart + submesh.verticesCount; x = x + 3) {
                            index = x * stride;
                            vertexData.push(core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector4.FromArray(meshAttributeArray, index));
                            vertexData.push(core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector4.FromArray(meshAttributeArray, index + 2 * stride));
                            vertexData.push(core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector4.FromArray(meshAttributeArray, index + stride));
                        }
                        break;
                    }
                    case core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.ColorKind: {
                        var size = vertexBuffer.getSize();
                        for (var x = submesh.verticesStart; x < submesh.verticesStart + submesh.verticesCount; x = x + size) {
                            index = x * stride;
                            if (size === 4) {
                                vertexData.push(core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector4.FromArray(meshAttributeArray, index));
                                vertexData.push(core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector4.FromArray(meshAttributeArray, index + 2 * stride));
                                vertexData.push(core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector4.FromArray(meshAttributeArray, index + stride));
                            }
                            else {
                                vertexData.push(core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.FromArray(meshAttributeArray, index));
                                vertexData.push(core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.FromArray(meshAttributeArray, index + 2 * stride));
                                vertexData.push(core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.FromArray(meshAttributeArray, index + stride));
                            }
                        }
                        break;
                    }
                    case core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.UVKind:
                    case core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.UV2Kind: {
                        for (var x = submesh.verticesStart; x < submesh.verticesStart + submesh.verticesCount; x = x + 3) {
                            index = x * stride;
                            vertexData.push(core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector2.FromArray(meshAttributeArray, index));
                            vertexData.push(core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector2.FromArray(meshAttributeArray, index + 2 * stride));
                            vertexData.push(core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector2.FromArray(meshAttributeArray, index + stride));
                        }
                        break;
                    }
                    default: {
                        core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.Error("Unsupported Vertex Buffer type: ".concat(vertexBufferKind));
                    }
                }
                this._writeVertexAttributeData(vertexData, byteOffset, vertexBufferKind, meshAttributeArray, binaryWriter, convertToRightHandedSystem);
            }
        }
        else {
            core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.Warn("reorderTriangleFillMode: Vertex Buffer Kind ".concat(vertexBufferKind, " not present!"));
        }
    };
    /**
     * Reorders the vertex attributes in the correct triangle strip order.  This is necessary when indices are not available and the winding order is
     * clock-wise during export to glTF
     * @param submesh BabylonJS submesh
     * @param primitiveMode Primitive mode of the mesh
     * @param sideOrientation the winding order of the submesh
     * @param vertexBufferKind The type of vertex attribute
     * @param meshAttributeArray The vertex attribute data
     * @param byteOffset The offset to the binary data
     * @param binaryWriter The binary data for the glTF file
     * @param convertToRightHandedSystem Converts the values to right-handed
     */
    _Exporter.prototype._reorderTriangleStripDrawMode = function (submesh, primitiveMode, sideOrientation, vertexBufferKind, meshAttributeArray, byteOffset, binaryWriter, convertToRightHandedSystem) {
        var vertexBuffer = this._getVertexBufferFromMesh(vertexBufferKind, submesh.getMesh());
        if (vertexBuffer) {
            var stride = vertexBuffer.byteStride / core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.GetTypeByteLength(vertexBuffer.type);
            var vertexData = [];
            var index = 0;
            switch (vertexBufferKind) {
                case core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.PositionKind:
                case core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.NormalKind: {
                    index = submesh.verticesStart;
                    vertexData.push(core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.FromArray(meshAttributeArray, index + 2 * stride));
                    vertexData.push(core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.FromArray(meshAttributeArray, index + stride));
                    break;
                }
                case core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.TangentKind: {
                    for (var x = submesh.verticesStart + submesh.verticesCount - 1; x >= submesh.verticesStart; --x) {
                        index = x * stride;
                        vertexData.push(core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector4.FromArray(meshAttributeArray, index));
                    }
                    break;
                }
                case core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.ColorKind: {
                    for (var x = submesh.verticesStart + submesh.verticesCount - 1; x >= submesh.verticesStart; --x) {
                        index = x * stride;
                        vertexBuffer.getSize() === 4
                            ? vertexData.push(core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector4.FromArray(meshAttributeArray, index))
                            : vertexData.push(core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.FromArray(meshAttributeArray, index));
                    }
                    break;
                }
                case core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.UVKind:
                case core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.UV2Kind: {
                    for (var x = submesh.verticesStart + submesh.verticesCount - 1; x >= submesh.verticesStart; --x) {
                        index = x * stride;
                        vertexData.push(core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector2.FromArray(meshAttributeArray, index));
                    }
                    break;
                }
                default: {
                    core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.Error("Unsupported Vertex Buffer type: ".concat(vertexBufferKind));
                }
            }
            this._writeVertexAttributeData(vertexData, byteOffset + 12, vertexBufferKind, meshAttributeArray, binaryWriter, convertToRightHandedSystem);
        }
        else {
            core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.Warn("reorderTriangleStripDrawMode: Vertex buffer kind ".concat(vertexBufferKind, " not present!"));
        }
    };
    /**
     * Reorders the vertex attributes in the correct triangle fan order.  This is necessary when indices are not available and the winding order is
     * clock-wise during export to glTF
     * @param submesh BabylonJS submesh
     * @param primitiveMode Primitive mode of the mesh
     * @param sideOrientation the winding order of the submesh
     * @param vertexBufferKind The type of vertex attribute
     * @param meshAttributeArray The vertex attribute data
     * @param byteOffset The offset to the binary data
     * @param binaryWriter The binary data for the glTF file
     * @param convertToRightHandedSystem Converts the values to right-handed
     */
    _Exporter.prototype._reorderTriangleFanMode = function (submesh, primitiveMode, sideOrientation, vertexBufferKind, meshAttributeArray, byteOffset, binaryWriter, convertToRightHandedSystem) {
        var vertexBuffer = this._getVertexBufferFromMesh(vertexBufferKind, submesh.getMesh());
        if (vertexBuffer) {
            var stride = vertexBuffer.byteStride / core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.GetTypeByteLength(vertexBuffer.type);
            var vertexData = [];
            var index = 0;
            switch (vertexBufferKind) {
                case core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.PositionKind:
                case core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.NormalKind: {
                    for (var x = submesh.verticesStart + submesh.verticesCount - 1; x >= submesh.verticesStart; --x) {
                        index = x * stride;
                        vertexData.push(core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.FromArray(meshAttributeArray, index));
                    }
                    break;
                }
                case core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.TangentKind: {
                    for (var x = submesh.verticesStart + submesh.verticesCount - 1; x >= submesh.verticesStart; --x) {
                        index = x * stride;
                        vertexData.push(core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector4.FromArray(meshAttributeArray, index));
                    }
                    break;
                }
                case core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.ColorKind: {
                    for (var x = submesh.verticesStart + submesh.verticesCount - 1; x >= submesh.verticesStart; --x) {
                        index = x * stride;
                        vertexData.push(core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector4.FromArray(meshAttributeArray, index));
                        vertexBuffer.getSize() === 4
                            ? vertexData.push(core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector4.FromArray(meshAttributeArray, index))
                            : vertexData.push(core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.FromArray(meshAttributeArray, index));
                    }
                    break;
                }
                case core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.UVKind:
                case core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.UV2Kind: {
                    for (var x = submesh.verticesStart + submesh.verticesCount - 1; x >= submesh.verticesStart; --x) {
                        index = x * stride;
                        vertexData.push(core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector2.FromArray(meshAttributeArray, index));
                    }
                    break;
                }
                default: {
                    core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.Error("Unsupported Vertex Buffer type: ".concat(vertexBufferKind));
                }
            }
            this._writeVertexAttributeData(vertexData, byteOffset, vertexBufferKind, meshAttributeArray, binaryWriter, convertToRightHandedSystem);
        }
        else {
            core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.Warn("reorderTriangleFanMode: Vertex buffer kind ".concat(vertexBufferKind, " not present!"));
        }
    };
    /**
     * Writes the vertex attribute data to binary
     * @param vertices The vertices to write to the binary writer
     * @param byteOffset The offset into the binary writer to overwrite binary data
     * @param vertexAttributeKind The vertex attribute type
     * @param meshAttributeArray The vertex attribute data
     * @param binaryWriter The writer containing the binary data
     * @param convertToRightHandedSystem Converts the values to right-handed
     */
    _Exporter.prototype._writeVertexAttributeData = function (vertices, byteOffset, vertexAttributeKind, meshAttributeArray, binaryWriter, convertToRightHandedSystem) {
        for (var _i = 0, vertices_1 = vertices; _i < vertices_1.length; _i++) {
            var vertex = vertices_1[_i];
            if (convertToRightHandedSystem && !(vertexAttributeKind === core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.ColorKind) && !(vertex instanceof core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector2)) {
                if (vertex instanceof core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3) {
                    if (vertexAttributeKind === core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.NormalKind) {
                        _glTFUtilities__WEBPACK_IMPORTED_MODULE_3__._GLTFUtilities._GetRightHandedNormalVector3FromRef(vertex);
                    }
                    else if (vertexAttributeKind === core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.PositionKind) {
                        _glTFUtilities__WEBPACK_IMPORTED_MODULE_3__._GLTFUtilities._GetRightHandedPositionVector3FromRef(vertex);
                    }
                    else {
                        core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.Error("Unsupported vertex attribute kind!");
                    }
                }
                else {
                    _glTFUtilities__WEBPACK_IMPORTED_MODULE_3__._GLTFUtilities._GetRightHandedVector4FromRef(vertex);
                }
            }
            if (vertexAttributeKind === core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.NormalKind) {
                vertex.normalize();
            }
            else if (vertexAttributeKind === core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.TangentKind && vertex instanceof core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector4) {
                _glTFUtilities__WEBPACK_IMPORTED_MODULE_3__._GLTFUtilities._NormalizeTangentFromRef(vertex);
            }
            for (var _a = 0, _b = vertex.asArray(); _a < _b.length; _a++) {
                var component = _b[_a];
                binaryWriter.setFloat32(component, byteOffset);
                byteOffset += 4;
            }
        }
    };
    /**
     * Writes mesh attribute data to a data buffer
     * Returns the bytelength of the data
     * @param vertexBufferKind Indicates what kind of vertex data is being passed in
     * @param attributeComponentKind
     * @param meshAttributeArray Array containing the attribute data
     * @param stride Specifies the space between data
     * @param binaryWriter The buffer to write the binary data to
     * @param convertToRightHandedSystem Converts the values to right-handed
     * @param babylonTransformNode
     */
    _Exporter.prototype._writeAttributeData = function (vertexBufferKind, attributeComponentKind, meshAttributeArray, stride, binaryWriter, convertToRightHandedSystem, babylonTransformNode) {
        var vertexAttributes = [];
        var index;
        switch (vertexBufferKind) {
            case core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.PositionKind: {
                for (var k = 0, length_2 = meshAttributeArray.length / stride; k < length_2; ++k) {
                    index = k * stride;
                    var vertexData = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.FromArray(meshAttributeArray, index);
                    if (convertToRightHandedSystem) {
                        _glTFUtilities__WEBPACK_IMPORTED_MODULE_3__._GLTFUtilities._GetRightHandedPositionVector3FromRef(vertexData);
                    }
                    vertexAttributes.push(vertexData.asArray());
                }
                break;
            }
            case core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.NormalKind: {
                for (var k = 0, length_3 = meshAttributeArray.length / stride; k < length_3; ++k) {
                    index = k * stride;
                    var vertexData = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.FromArray(meshAttributeArray, index);
                    if (convertToRightHandedSystem) {
                        _glTFUtilities__WEBPACK_IMPORTED_MODULE_3__._GLTFUtilities._GetRightHandedNormalVector3FromRef(vertexData);
                    }
                    vertexData.normalize();
                    vertexAttributes.push(vertexData.asArray());
                }
                break;
            }
            case core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.TangentKind: {
                for (var k = 0, length_4 = meshAttributeArray.length / stride; k < length_4; ++k) {
                    index = k * stride;
                    var vertexData = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector4.FromArray(meshAttributeArray, index);
                    if (convertToRightHandedSystem) {
                        _glTFUtilities__WEBPACK_IMPORTED_MODULE_3__._GLTFUtilities._GetRightHandedVector4FromRef(vertexData);
                    }
                    _glTFUtilities__WEBPACK_IMPORTED_MODULE_3__._GLTFUtilities._NormalizeTangentFromRef(vertexData);
                    vertexAttributes.push(vertexData.asArray());
                }
                break;
            }
            case core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.ColorKind: {
                var meshMaterial = babylonTransformNode.material;
                var convertToLinear = meshMaterial ? meshMaterial.getClassName() === "StandardMaterial" : true;
                var vertexData = stride === 3 ? new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Color3() : new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Color4();
                for (var k = 0, length_5 = meshAttributeArray.length / stride; k < length_5; ++k) {
                    index = k * stride;
                    if (stride === 3) {
                        core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Color3.FromArrayToRef(meshAttributeArray, index, vertexData);
                        if (convertToLinear) {
                            vertexData.toLinearSpaceToRef(vertexData);
                        }
                    }
                    else {
                        core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Color4.FromArrayToRef(meshAttributeArray, index, vertexData);
                        if (convertToLinear) {
                            vertexData.toLinearSpaceToRef(vertexData);
                        }
                    }
                    vertexAttributes.push(vertexData.asArray());
                }
                break;
            }
            case core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.UVKind:
            case core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.UV2Kind: {
                for (var k = 0, length_6 = meshAttributeArray.length / stride; k < length_6; ++k) {
                    index = k * stride;
                    vertexAttributes.push(convertToRightHandedSystem ? [meshAttributeArray[index], meshAttributeArray[index + 1]] : [meshAttributeArray[index], meshAttributeArray[index + 1]]);
                }
                break;
            }
            case core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.MatricesIndicesKind:
            case core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.MatricesIndicesExtraKind: {
                for (var k = 0, length_7 = meshAttributeArray.length / stride; k < length_7; ++k) {
                    index = k * stride;
                    var vertexData = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector4.FromArray(meshAttributeArray, index);
                    vertexAttributes.push(vertexData.asArray());
                }
                break;
            }
            case core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.MatricesWeightsKind:
            case core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.MatricesWeightsExtraKind: {
                for (var k = 0, length_8 = meshAttributeArray.length / stride; k < length_8; ++k) {
                    index = k * stride;
                    var vertexData = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector4.FromArray(meshAttributeArray, index);
                    vertexAttributes.push(vertexData.asArray());
                }
                break;
            }
            default: {
                core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.Warn("Unsupported Vertex Buffer Type: " + vertexBufferKind);
                vertexAttributes = [];
            }
        }
        var writeBinaryFunc;
        switch (attributeComponentKind) {
            case 5121 /* UNSIGNED_BYTE */: {
                writeBinaryFunc = binaryWriter.setUInt8.bind(binaryWriter);
                break;
            }
            case 5123 /* UNSIGNED_SHORT */: {
                writeBinaryFunc = binaryWriter.setUInt16.bind(binaryWriter);
                break;
            }
            case 5125 /* UNSIGNED_INT */: {
                writeBinaryFunc = binaryWriter.setUInt32.bind(binaryWriter);
                break;
            }
            case 5126 /* FLOAT */: {
                writeBinaryFunc = binaryWriter.setFloat32.bind(binaryWriter);
                break;
            }
            default: {
                core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.Warn("Unsupported Attribute Component kind: " + attributeComponentKind);
                return;
            }
        }
        for (var _i = 0, vertexAttributes_1 = vertexAttributes; _i < vertexAttributes_1.length; _i++) {
            var vertexAttribute = vertexAttributes_1[_i];
            for (var _a = 0, vertexAttribute_1 = vertexAttribute; _a < vertexAttribute_1.length; _a++) {
                var component = vertexAttribute_1[_a];
                writeBinaryFunc(component);
            }
        }
    };
    /**
     * Writes mesh attribute data to a data buffer
     * Returns the bytelength of the data
     * @param vertexBufferKind Indicates what kind of vertex data is being passed in
     * @param attributeComponentKind
     * @param meshPrimitive
     * @param morphTarget
     * @param meshAttributeArray Array containing the attribute data
     * @param morphTargetAttributeArray
     * @param stride Specifies the space between data
     * @param binaryWriter The buffer to write the binary data to
     * @param convertToRightHandedSystem Converts the values to right-handed
     * @param minMax
     */
    _Exporter.prototype.writeMorphTargetAttributeData = function (vertexBufferKind, attributeComponentKind, meshPrimitive, morphTarget, meshAttributeArray, morphTargetAttributeArray, stride, binaryWriter, convertToRightHandedSystem, minMax) {
        var vertexAttributes = [];
        var index;
        var difference = new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3();
        var difference4 = new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector4(0, 0, 0, 0);
        switch (vertexBufferKind) {
            case core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.PositionKind: {
                for (var k = meshPrimitive.verticesStart; k < meshPrimitive.verticesCount; ++k) {
                    index = meshPrimitive.indexStart + k * stride;
                    var vertexData = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.FromArray(meshAttributeArray, index);
                    var morphData = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.FromArray(morphTargetAttributeArray, index);
                    difference = morphData.subtractToRef(vertexData, difference);
                    if (convertToRightHandedSystem) {
                        _glTFUtilities__WEBPACK_IMPORTED_MODULE_3__._GLTFUtilities._GetRightHandedPositionVector3FromRef(difference);
                    }
                    if (minMax) {
                        minMax.min.copyFromFloats(Math.min(difference.x, minMax.min.x), Math.min(difference.y, minMax.min.y), Math.min(difference.z, minMax.min.z));
                        minMax.max.copyFromFloats(Math.max(difference.x, minMax.max.x), Math.max(difference.y, minMax.max.y), Math.max(difference.z, minMax.max.z));
                    }
                    vertexAttributes.push(difference.asArray());
                }
                break;
            }
            case core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.NormalKind: {
                for (var k = meshPrimitive.verticesStart; k < meshPrimitive.verticesCount; ++k) {
                    index = meshPrimitive.indexStart + k * stride;
                    var vertexData = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.FromArray(meshAttributeArray, index);
                    vertexData.normalize();
                    var morphData = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.FromArray(morphTargetAttributeArray, index);
                    morphData.normalize();
                    difference = morphData.subtractToRef(vertexData, difference);
                    if (convertToRightHandedSystem) {
                        _glTFUtilities__WEBPACK_IMPORTED_MODULE_3__._GLTFUtilities._GetRightHandedNormalVector3FromRef(difference);
                    }
                    vertexAttributes.push(difference.asArray());
                }
                break;
            }
            case core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.TangentKind: {
                for (var k = meshPrimitive.verticesStart; k < meshPrimitive.verticesCount; ++k) {
                    index = meshPrimitive.indexStart + k * (stride + 1);
                    var vertexData = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector4.FromArray(meshAttributeArray, index);
                    _glTFUtilities__WEBPACK_IMPORTED_MODULE_3__._GLTFUtilities._NormalizeTangentFromRef(vertexData);
                    var morphData = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector4.FromArray(morphTargetAttributeArray, index);
                    _glTFUtilities__WEBPACK_IMPORTED_MODULE_3__._GLTFUtilities._NormalizeTangentFromRef(morphData);
                    difference4 = morphData.subtractToRef(vertexData, difference4);
                    if (convertToRightHandedSystem) {
                        _glTFUtilities__WEBPACK_IMPORTED_MODULE_3__._GLTFUtilities._GetRightHandedVector4FromRef(difference4);
                    }
                    vertexAttributes.push([difference4.x, difference4.y, difference4.z]);
                }
                break;
            }
            default: {
                core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.Warn("Unsupported Vertex Buffer Type: " + vertexBufferKind);
                vertexAttributes = [];
            }
        }
        var writeBinaryFunc;
        switch (attributeComponentKind) {
            case 5121 /* UNSIGNED_BYTE */: {
                writeBinaryFunc = binaryWriter.setUInt8.bind(binaryWriter);
                break;
            }
            case 5123 /* UNSIGNED_SHORT */: {
                writeBinaryFunc = binaryWriter.setUInt16.bind(binaryWriter);
                break;
            }
            case 5125 /* UNSIGNED_INT */: {
                writeBinaryFunc = binaryWriter.setUInt32.bind(binaryWriter);
                break;
            }
            case 5126 /* FLOAT */: {
                writeBinaryFunc = binaryWriter.setFloat32.bind(binaryWriter);
                break;
            }
            default: {
                core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.Warn("Unsupported Attribute Component kind: " + attributeComponentKind);
                return;
            }
        }
        for (var _i = 0, vertexAttributes_2 = vertexAttributes; _i < vertexAttributes_2.length; _i++) {
            var vertexAttribute = vertexAttributes_2[_i];
            for (var _a = 0, vertexAttribute_2 = vertexAttribute; _a < vertexAttribute_2.length; _a++) {
                var component = vertexAttribute_2[_a];
                writeBinaryFunc(component);
            }
        }
    };
    /**
     * Generates glTF json data
     * @param shouldUseGlb Indicates whether the json should be written for a glb file
     * @param glTFPrefix Text to use when prefixing a glTF file
     * @param prettyPrint Indicates whether the json file should be pretty printed (true) or not (false)
     * @returns json data as string
     */
    _Exporter.prototype._generateJSON = function (shouldUseGlb, glTFPrefix, prettyPrint) {
        var _this = this;
        var buffer = { byteLength: this._totalByteLength };
        var imageName;
        var imageData;
        var bufferView;
        var byteOffset = this._totalByteLength;
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
            if (!shouldUseGlb) {
                this._glTF.images = this._images;
            }
            else {
                this._glTF.images = [];
                this._images.forEach(function (image) {
                    if (image.uri) {
                        imageData = _this._imageData[image.uri];
                        _this._orderedImageData.push(imageData);
                        imageName = image.uri.split(".")[0] + " image";
                        bufferView = _glTFUtilities__WEBPACK_IMPORTED_MODULE_3__._GLTFUtilities._CreateBufferView(0, byteOffset, imageData.data.length, undefined, imageName);
                        byteOffset += imageData.data.buffer.byteLength;
                        _this._bufferViews.push(bufferView);
                        image.bufferView = _this._bufferViews.length - 1;
                        image.name = imageName;
                        image.mimeType = imageData.mimeType;
                        image.uri = undefined;
                        if (!_this._glTF.images) {
                            _this._glTF.images = [];
                        }
                        _this._glTF.images.push(image);
                    }
                });
                // Replace uri with bufferview and mime type for glb
                buffer.byteLength = byteOffset;
            }
        }
        if (!shouldUseGlb) {
            buffer.uri = glTFPrefix + ".bin";
        }
        var jsonText = prettyPrint ? JSON.stringify(this._glTF, null, 2) : JSON.stringify(this._glTF);
        return jsonText;
    };
    /**
     * Generates data for .gltf and .bin files based on the glTF prefix string
     * @param glTFPrefix Text to use when prefixing a glTF file
     * @param dispose Dispose the exporter
     * @returns GLTFData with glTF file data
     */
    _Exporter.prototype._generateGLTFAsync = function (glTFPrefix, dispose) {
        var _this = this;
        if (dispose === void 0) { dispose = true; }
        return this._generateBinaryAsync().then(function (binaryBuffer) {
            _this._extensionsOnExporting();
            var jsonText = _this._generateJSON(false, glTFPrefix, true);
            var bin = new Blob([binaryBuffer], { type: "application/octet-stream" });
            var glTFFileName = glTFPrefix + ".gltf";
            var glTFBinFile = glTFPrefix + ".bin";
            var container = new _glTFData__WEBPACK_IMPORTED_MODULE_4__.GLTFData();
            container.glTFFiles[glTFFileName] = jsonText;
            container.glTFFiles[glTFBinFile] = bin;
            if (_this._imageData) {
                for (var image in _this._imageData) {
                    container.glTFFiles[image] = new Blob([_this._imageData[image].data], { type: _this._imageData[image].mimeType });
                }
            }
            if (dispose) {
                _this.dispose();
            }
            return container;
        });
    };
    /**
     * Creates a binary buffer for glTF
     * @returns array buffer for binary data
     */
    _Exporter.prototype._generateBinaryAsync = function () {
        var _this = this;
        var binaryWriter = new _BinaryWriter(4);
        return this._createSceneAsync(this._babylonScene, binaryWriter).then(function () {
            if (_this._localEngine) {
                _this._localEngine.dispose();
            }
            return binaryWriter.getArrayBuffer();
        });
    };
    /**
     * Pads the number to a multiple of 4
     * @param num number to pad
     * @returns padded number
     */
    _Exporter.prototype._getPadding = function (num) {
        var remainder = num % 4;
        var padding = remainder === 0 ? remainder : 4 - remainder;
        return padding;
    };
    /**
     * @param glTFPrefix
     * @param dispose
     * @hidden
     */
    _Exporter.prototype._generateGLBAsync = function (glTFPrefix, dispose) {
        var _this = this;
        if (dispose === void 0) { dispose = true; }
        return this._generateBinaryAsync().then(function (binaryBuffer) {
            _this._extensionsOnExporting();
            var jsonText = _this._generateJSON(true);
            var glbFileName = glTFPrefix + ".glb";
            var headerLength = 12;
            var chunkLengthPrefix = 8;
            var jsonLength = jsonText.length;
            var encodedJsonText;
            var imageByteLength = 0;
            // make use of TextEncoder when available
            if (typeof TextEncoder !== "undefined") {
                var encoder = new TextEncoder();
                encodedJsonText = encoder.encode(jsonText);
                jsonLength = encodedJsonText.length;
            }
            for (var i = 0; i < _this._orderedImageData.length; ++i) {
                imageByteLength += _this._orderedImageData[i].data.byteLength;
            }
            var jsonPadding = _this._getPadding(jsonLength);
            var binPadding = _this._getPadding(binaryBuffer.byteLength);
            var imagePadding = _this._getPadding(imageByteLength);
            var byteLength = headerLength + 2 * chunkLengthPrefix + jsonLength + jsonPadding + binaryBuffer.byteLength + binPadding + imageByteLength + imagePadding;
            //header
            var headerBuffer = new ArrayBuffer(headerLength);
            var headerBufferView = new DataView(headerBuffer);
            headerBufferView.setUint32(0, 0x46546c67, true); //glTF
            headerBufferView.setUint32(4, 2, true); // version
            headerBufferView.setUint32(8, byteLength, true); // total bytes in file
            //json chunk
            var jsonChunkBuffer = new ArrayBuffer(chunkLengthPrefix + jsonLength + jsonPadding);
            var jsonChunkBufferView = new DataView(jsonChunkBuffer);
            jsonChunkBufferView.setUint32(0, jsonLength + jsonPadding, true);
            jsonChunkBufferView.setUint32(4, 0x4e4f534a, true);
            //json chunk bytes
            var jsonData = new Uint8Array(jsonChunkBuffer, chunkLengthPrefix);
            // if TextEncoder was available, we can simply copy the encoded array
            if (encodedJsonText) {
                jsonData.set(encodedJsonText);
            }
            else {
                var blankCharCode = "_".charCodeAt(0);
                for (var i = 0; i < jsonLength; ++i) {
                    var charCode = jsonText.charCodeAt(i);
                    // if the character doesn't fit into a single UTF-16 code unit, just put a blank character
                    if (charCode != jsonText.codePointAt(i)) {
                        jsonData[i] = blankCharCode;
                    }
                    else {
                        jsonData[i] = charCode;
                    }
                }
            }
            //json padding
            var jsonPaddingView = new Uint8Array(jsonChunkBuffer, chunkLengthPrefix + jsonLength);
            for (var i = 0; i < jsonPadding; ++i) {
                jsonPaddingView[i] = 0x20;
            }
            //binary chunk
            var binaryChunkBuffer = new ArrayBuffer(chunkLengthPrefix);
            var binaryChunkBufferView = new DataView(binaryChunkBuffer);
            binaryChunkBufferView.setUint32(0, binaryBuffer.byteLength + imageByteLength + imagePadding, true);
            binaryChunkBufferView.setUint32(4, 0x004e4942, true);
            // binary padding
            var binPaddingBuffer = new ArrayBuffer(binPadding);
            var binPaddingView = new Uint8Array(binPaddingBuffer);
            for (var i = 0; i < binPadding; ++i) {
                binPaddingView[i] = 0;
            }
            var imagePaddingBuffer = new ArrayBuffer(imagePadding);
            var imagePaddingView = new Uint8Array(imagePaddingBuffer);
            for (var i = 0; i < imagePadding; ++i) {
                imagePaddingView[i] = 0;
            }
            var glbData = [headerBuffer, jsonChunkBuffer, binaryChunkBuffer, binaryBuffer];
            // binary data
            for (var i = 0; i < _this._orderedImageData.length; ++i) {
                glbData.push(_this._orderedImageData[i].data.buffer);
            }
            glbData.push(binPaddingBuffer);
            glbData.push(imagePaddingBuffer);
            var glbFile = new Blob(glbData, { type: "application/octet-stream" });
            var container = new _glTFData__WEBPACK_IMPORTED_MODULE_4__.GLTFData();
            container.glTFFiles[glbFileName] = glbFile;
            if (_this._localEngine != null) {
                _this._localEngine.dispose();
            }
            if (dispose) {
                _this.dispose();
            }
            return container;
        });
    };
    /**
     * Sets the TRS for each node
     * @param node glTF Node for storing the transformation data
     * @param babylonTransformNode Babylon mesh used as the source for the transformation data
     * @param convertToRightHandedSystem Converts the values to right-handed
     */
    _Exporter.prototype._setNodeTransformation = function (node, babylonTransformNode, convertToRightHandedSystem) {
        if (!babylonTransformNode.getPivotPoint().equalsToFloats(0, 0, 0)) {
            core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.Warn("Pivot points are not supported in the glTF serializer");
        }
        if (!babylonTransformNode.position.equalsToFloats(0, 0, 0)) {
            node.translation = convertToRightHandedSystem
                ? _glTFUtilities__WEBPACK_IMPORTED_MODULE_3__._GLTFUtilities._GetRightHandedPositionVector3(babylonTransformNode.position).asArray()
                : babylonTransformNode.position.asArray();
        }
        if (!babylonTransformNode.scaling.equalsToFloats(1, 1, 1)) {
            node.scale = babylonTransformNode.scaling.asArray();
        }
        var rotationQuaternion = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Quaternion.RotationYawPitchRoll(babylonTransformNode.rotation.y, babylonTransformNode.rotation.x, babylonTransformNode.rotation.z);
        if (babylonTransformNode.rotationQuaternion) {
            rotationQuaternion.multiplyInPlace(babylonTransformNode.rotationQuaternion);
        }
        if (!core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Quaternion.IsIdentity(rotationQuaternion)) {
            if (convertToRightHandedSystem) {
                _glTFUtilities__WEBPACK_IMPORTED_MODULE_3__._GLTFUtilities._GetRightHandedQuaternionFromRef(rotationQuaternion);
            }
            node.rotation = rotationQuaternion.normalize().asArray();
        }
    };
    _Exporter.prototype._setCameraTransformation = function (node, babylonCamera, convertToRightHandedSystem) {
        if (!babylonCamera.position.equalsToFloats(0, 0, 0)) {
            node.translation = convertToRightHandedSystem ? _glTFUtilities__WEBPACK_IMPORTED_MODULE_3__._GLTFUtilities._GetRightHandedPositionVector3(babylonCamera.position).asArray() : babylonCamera.position.asArray();
        }
        var rotationQuaternion = babylonCamera.absoluteRotation;
        if (!core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Quaternion.IsIdentity(rotationQuaternion)) {
            if (convertToRightHandedSystem) {
                _glTFUtilities__WEBPACK_IMPORTED_MODULE_3__._GLTFUtilities._GetRightHandedQuaternionFromRef(rotationQuaternion);
            }
            node.rotation = rotationQuaternion.normalize().asArray();
        }
    };
    _Exporter.prototype._getVertexBufferFromMesh = function (attributeKind, bufferMesh) {
        if (bufferMesh.isVerticesDataPresent(attributeKind)) {
            var vertexBuffer = bufferMesh.getVertexBuffer(attributeKind);
            if (vertexBuffer) {
                return vertexBuffer;
            }
        }
        return null;
    };
    /**
     * Creates a bufferview based on the vertices type for the Babylon mesh
     * @param kind Indicates the type of vertices data
     * @param attributeComponentKind Indicates the numerical type used to store the data
     * @param babylonTransformNode The Babylon mesh to get the vertices data from
     * @param binaryWriter The buffer to write the bufferview data to
     * @param byteStride
     * @param convertToRightHandedSystem Converts the values to right-handed
     */
    _Exporter.prototype._createBufferViewKind = function (kind, attributeComponentKind, babylonTransformNode, binaryWriter, byteStride, convertToRightHandedSystem) {
        var bufferMesh = babylonTransformNode instanceof core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Mesh
            ? babylonTransformNode
            : babylonTransformNode instanceof core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.InstancedMesh
                ? babylonTransformNode.sourceMesh
                : null;
        if (bufferMesh) {
            var vertexBuffer = bufferMesh.getVertexBuffer(kind);
            var vertexData = bufferMesh.getVerticesData(kind);
            if (vertexBuffer && vertexData) {
                var typeByteLength = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.GetTypeByteLength(attributeComponentKind);
                var byteLength = vertexData.length * typeByteLength;
                var bufferView = _glTFUtilities__WEBPACK_IMPORTED_MODULE_3__._GLTFUtilities._CreateBufferView(0, binaryWriter.getByteOffset(), byteLength, byteStride, kind + " - " + bufferMesh.name);
                this._bufferViews.push(bufferView);
                this._writeAttributeData(kind, attributeComponentKind, vertexData, byteStride / typeByteLength, binaryWriter, convertToRightHandedSystem, babylonTransformNode);
            }
        }
    };
    /**
     * Creates a bufferview based on the vertices type for the Babylon mesh
     * @param babylonSubMesh The Babylon submesh that the morph target is applied to
     * @param meshPrimitive
     * @param babylonMorphTarget the morph target to be exported
     * @param binaryWriter The buffer to write the bufferview data to
     * @param convertToRightHandedSystem Converts the values to right-handed
     */
    _Exporter.prototype._setMorphTargetAttributes = function (babylonSubMesh, meshPrimitive, babylonMorphTarget, binaryWriter, convertToRightHandedSystem) {
        if (babylonMorphTarget) {
            if (!meshPrimitive.targets) {
                meshPrimitive.targets = [];
            }
            var target = {};
            if (babylonMorphTarget.hasNormals) {
                var vertexNormals = babylonSubMesh.getMesh().getVerticesData(core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.NormalKind);
                var morphNormals = babylonMorphTarget.getNormals();
                var count = babylonSubMesh.verticesCount;
                var byteStride = 12; // 3 x 4 byte floats
                var byteLength = count * byteStride;
                var bufferView = _glTFUtilities__WEBPACK_IMPORTED_MODULE_3__._GLTFUtilities._CreateBufferView(0, binaryWriter.getByteOffset(), byteLength, byteStride, babylonMorphTarget.name + "_NORMAL");
                this._bufferViews.push(bufferView);
                var bufferViewIndex = this._bufferViews.length - 1;
                var accessor = _glTFUtilities__WEBPACK_IMPORTED_MODULE_3__._GLTFUtilities._CreateAccessor(bufferViewIndex, babylonMorphTarget.name + " - " + "NORMAL", "VEC3" /* VEC3 */, 5126 /* FLOAT */, count, 0, null, null);
                this._accessors.push(accessor);
                target.NORMAL = this._accessors.length - 1;
                this.writeMorphTargetAttributeData(core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.NormalKind, 5126 /* FLOAT */, babylonSubMesh, babylonMorphTarget, vertexNormals, morphNormals, byteStride / 4, binaryWriter, convertToRightHandedSystem);
            }
            if (babylonMorphTarget.hasPositions) {
                var vertexPositions = babylonSubMesh.getMesh().getVerticesData(core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.PositionKind);
                var morphPositions = babylonMorphTarget.getPositions();
                var count = babylonSubMesh.verticesCount;
                var byteStride = 12; // 3 x 4 byte floats
                var byteLength = count * byteStride;
                var bufferView = _glTFUtilities__WEBPACK_IMPORTED_MODULE_3__._GLTFUtilities._CreateBufferView(0, binaryWriter.getByteOffset(), byteLength, byteStride, babylonMorphTarget.name + "_POSITION");
                this._bufferViews.push(bufferView);
                var bufferViewIndex = this._bufferViews.length - 1;
                var minMax = { min: new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3(Infinity, Infinity, Infinity), max: new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3(-Infinity, -Infinity, -Infinity) };
                var accessor = _glTFUtilities__WEBPACK_IMPORTED_MODULE_3__._GLTFUtilities._CreateAccessor(bufferViewIndex, babylonMorphTarget.name + " - " + "POSITION", "VEC3" /* VEC3 */, 5126 /* FLOAT */, count, 0, null, null);
                this._accessors.push(accessor);
                target.POSITION = this._accessors.length - 1;
                this.writeMorphTargetAttributeData(core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.PositionKind, 5126 /* FLOAT */, babylonSubMesh, babylonMorphTarget, vertexPositions, morphPositions, byteStride / 4, binaryWriter, convertToRightHandedSystem, minMax);
                accessor.min = minMax.min.asArray();
                accessor.max = minMax.max.asArray();
            }
            if (babylonMorphTarget.hasTangents) {
                var vertexTangents = babylonSubMesh.getMesh().getVerticesData(core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.TangentKind);
                var morphTangents = babylonMorphTarget.getTangents();
                var count = babylonSubMesh.verticesCount;
                var byteStride = 12; // 3 x 4 byte floats
                var byteLength = count * byteStride;
                var bufferView = _glTFUtilities__WEBPACK_IMPORTED_MODULE_3__._GLTFUtilities._CreateBufferView(0, binaryWriter.getByteOffset(), byteLength, byteStride, babylonMorphTarget.name + "_NORMAL");
                this._bufferViews.push(bufferView);
                var bufferViewIndex = this._bufferViews.length - 1;
                var accessor = _glTFUtilities__WEBPACK_IMPORTED_MODULE_3__._GLTFUtilities._CreateAccessor(bufferViewIndex, babylonMorphTarget.name + " - " + "TANGENT", "VEC3" /* VEC3 */, 5126 /* FLOAT */, count, 0, null, null);
                this._accessors.push(accessor);
                target.TANGENT = this._accessors.length - 1;
                this.writeMorphTargetAttributeData(core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.TangentKind, 5126 /* FLOAT */, babylonSubMesh, babylonMorphTarget, vertexTangents, morphTangents, byteStride / 4, binaryWriter, convertToRightHandedSystem);
            }
            meshPrimitive.targets.push(target);
        }
    };
    /**
     * The primitive mode of the Babylon mesh
     * @param babylonMesh The BabylonJS mesh
     */
    _Exporter.prototype._getMeshPrimitiveMode = function (babylonMesh) {
        if (babylonMesh instanceof core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.LinesMesh) {
            return core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Material.LineListDrawMode;
        }
        return babylonMesh.material ? babylonMesh.material.fillMode : core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Material.TriangleFillMode;
    };
    /**
     * Sets the primitive mode of the glTF mesh primitive
     * @param meshPrimitive glTF mesh primitive
     * @param primitiveMode The primitive mode
     */
    _Exporter.prototype._setPrimitiveMode = function (meshPrimitive, primitiveMode) {
        switch (primitiveMode) {
            case core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Material.TriangleFillMode: {
                // glTF defaults to using Triangle Mode
                break;
            }
            case core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Material.TriangleStripDrawMode: {
                meshPrimitive.mode = 5 /* TRIANGLE_STRIP */;
                break;
            }
            case core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Material.TriangleFanDrawMode: {
                meshPrimitive.mode = 6 /* TRIANGLE_FAN */;
                break;
            }
            case core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Material.PointListDrawMode: {
                meshPrimitive.mode = 0 /* POINTS */;
                break;
            }
            case core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Material.PointFillMode: {
                meshPrimitive.mode = 0 /* POINTS */;
                break;
            }
            case core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Material.LineLoopDrawMode: {
                meshPrimitive.mode = 2 /* LINE_LOOP */;
                break;
            }
            case core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Material.LineListDrawMode: {
                meshPrimitive.mode = 1 /* LINES */;
                break;
            }
            case core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Material.LineStripDrawMode: {
                meshPrimitive.mode = 3 /* LINE_STRIP */;
                break;
            }
        }
    };
    /**
     * Sets the vertex attribute accessor based of the glTF mesh primitive
     * @param meshPrimitive glTF mesh primitive
     * @param attributeKind vertex attribute
     * @returns boolean specifying if uv coordinates are present
     */
    _Exporter.prototype._setAttributeKind = function (meshPrimitive, attributeKind) {
        switch (attributeKind) {
            case core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.PositionKind: {
                meshPrimitive.attributes.POSITION = this._accessors.length - 1;
                break;
            }
            case core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.NormalKind: {
                meshPrimitive.attributes.NORMAL = this._accessors.length - 1;
                break;
            }
            case core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.ColorKind: {
                meshPrimitive.attributes.COLOR_0 = this._accessors.length - 1;
                break;
            }
            case core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.TangentKind: {
                meshPrimitive.attributes.TANGENT = this._accessors.length - 1;
                break;
            }
            case core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.UVKind: {
                meshPrimitive.attributes.TEXCOORD_0 = this._accessors.length - 1;
                break;
            }
            case core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.UV2Kind: {
                meshPrimitive.attributes.TEXCOORD_1 = this._accessors.length - 1;
                break;
            }
            case core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.MatricesIndicesKind: {
                meshPrimitive.attributes.JOINTS_0 = this._accessors.length - 1;
                break;
            }
            case core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.MatricesIndicesExtraKind: {
                meshPrimitive.attributes.JOINTS_1 = this._accessors.length - 1;
                break;
            }
            case core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.MatricesWeightsKind: {
                meshPrimitive.attributes.WEIGHTS_0 = this._accessors.length - 1;
                break;
            }
            case core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.MatricesWeightsExtraKind: {
                meshPrimitive.attributes.WEIGHTS_1 = this._accessors.length - 1;
                break;
            }
            default: {
                core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.Warn("Unsupported Vertex Buffer Type: " + attributeKind);
            }
        }
    };
    /**
     * Sets data for the primitive attributes of each submesh
     * @param mesh glTF Mesh object to store the primitive attribute information
     * @param babylonTransformNode Babylon mesh to get the primitive attribute data from
     * @param binaryWriter Buffer to write the attribute data to
     * @param convertToRightHandedSystem Converts the values to right-handed
     */
    _Exporter.prototype._setPrimitiveAttributesAsync = function (mesh, babylonTransformNode, binaryWriter, convertToRightHandedSystem) {
        var _a;
        var promises = [];
        var bufferMesh = null;
        var bufferView;
        var minMax;
        if (babylonTransformNode instanceof core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Mesh) {
            bufferMesh = babylonTransformNode;
        }
        else if (babylonTransformNode instanceof core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.InstancedMesh) {
            bufferMesh = babylonTransformNode.sourceMesh;
        }
        var attributeData = [
            { kind: core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.PositionKind, accessorType: "VEC3" /* VEC3 */, accessorComponentType: 5126 /* FLOAT */, byteStride: 12 },
            { kind: core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.NormalKind, accessorType: "VEC3" /* VEC3 */, accessorComponentType: 5126 /* FLOAT */, byteStride: 12 },
            { kind: core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.ColorKind, accessorType: "VEC4" /* VEC4 */, accessorComponentType: 5126 /* FLOAT */, byteStride: 16 },
            { kind: core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.TangentKind, accessorType: "VEC4" /* VEC4 */, accessorComponentType: 5126 /* FLOAT */, byteStride: 16 },
            { kind: core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.UVKind, accessorType: "VEC2" /* VEC2 */, accessorComponentType: 5126 /* FLOAT */, byteStride: 8 },
            { kind: core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.UV2Kind, accessorType: "VEC2" /* VEC2 */, accessorComponentType: 5126 /* FLOAT */, byteStride: 8 },
            { kind: core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.MatricesIndicesKind, accessorType: "VEC4" /* VEC4 */, accessorComponentType: 5123 /* UNSIGNED_SHORT */, byteStride: 8 },
            { kind: core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.MatricesIndicesExtraKind, accessorType: "VEC4" /* VEC4 */, accessorComponentType: 5123 /* UNSIGNED_SHORT */, byteStride: 8 },
            { kind: core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.MatricesWeightsKind, accessorType: "VEC4" /* VEC4 */, accessorComponentType: 5126 /* FLOAT */, byteStride: 16 },
            { kind: core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.MatricesWeightsExtraKind, accessorType: "VEC4" /* VEC4 */, accessorComponentType: 5126 /* FLOAT */, byteStride: 16 },
        ];
        if (bufferMesh) {
            var indexBufferViewIndex = null;
            var primitiveMode = this._getMeshPrimitiveMode(bufferMesh);
            var vertexAttributeBufferViews = {};
            var morphTargetManager = bufferMesh.morphTargetManager;
            // For each BabylonMesh, create bufferviews for each 'kind'
            for (var _i = 0, attributeData_1 = attributeData; _i < attributeData_1.length; _i++) {
                var attribute = attributeData_1[_i];
                var attributeKind = attribute.kind;
                var attributeComponentKind = attribute.accessorComponentType;
                if (bufferMesh.isVerticesDataPresent(attributeKind)) {
                    var vertexBuffer = this._getVertexBufferFromMesh(attributeKind, bufferMesh);
                    attribute.byteStride = vertexBuffer
                        ? vertexBuffer.getSize() * core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.GetTypeByteLength(attribute.accessorComponentType)
                        : core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.DeduceStride(attributeKind) * 4;
                    if (attribute.byteStride === 12) {
                        attribute.accessorType = "VEC3" /* VEC3 */;
                    }
                    this._createBufferViewKind(attributeKind, attributeComponentKind, babylonTransformNode, binaryWriter, attribute.byteStride, convertToRightHandedSystem);
                    attribute.bufferViewIndex = this._bufferViews.length - 1;
                    vertexAttributeBufferViews[attributeKind] = attribute.bufferViewIndex;
                }
            }
            if (bufferMesh.getTotalIndices()) {
                var indices = bufferMesh.getIndices();
                if (indices) {
                    var byteLength = indices.length * 4;
                    bufferView = _glTFUtilities__WEBPACK_IMPORTED_MODULE_3__._GLTFUtilities._CreateBufferView(0, binaryWriter.getByteOffset(), byteLength, undefined, "Indices - " + bufferMesh.name);
                    this._bufferViews.push(bufferView);
                    indexBufferViewIndex = this._bufferViews.length - 1;
                    for (var k = 0, length_9 = indices.length; k < length_9; ++k) {
                        binaryWriter.setUInt32(indices[k]);
                    }
                }
            }
            if (bufferMesh.subMeshes) {
                // go through all mesh primitives (submeshes)
                for (var _b = 0, _c = bufferMesh.subMeshes; _b < _c.length; _b++) {
                    var submesh = _c[_b];
                    var babylonMaterial = submesh.getMaterial() || bufferMesh.getScene().defaultMaterial;
                    var materialIndex = null;
                    if (babylonMaterial) {
                        if (bufferMesh instanceof core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.LinesMesh) {
                            // get the color from the lines mesh and set it in the material
                            var material = {
                                name: bufferMesh.name + " material",
                            };
                            if (!bufferMesh.color.equals(core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Color3.White()) || bufferMesh.alpha < 1) {
                                material.pbrMetallicRoughness = {
                                    baseColorFactor: bufferMesh.color.asArray().concat([bufferMesh.alpha]),
                                };
                            }
                            this._materials.push(material);
                            materialIndex = this._materials.length - 1;
                        }
                        else if (babylonMaterial instanceof core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.MultiMaterial) {
                            var subMaterial = babylonMaterial.subMaterials[submesh.materialIndex];
                            if (subMaterial) {
                                babylonMaterial = subMaterial;
                                materialIndex = this._materialMap[babylonMaterial.uniqueId];
                            }
                        }
                        else {
                            materialIndex = this._materialMap[babylonMaterial.uniqueId];
                        }
                    }
                    var glTFMaterial = materialIndex != null ? this._materials[materialIndex] : null;
                    var meshPrimitive = { attributes: {} };
                    this._setPrimitiveMode(meshPrimitive, primitiveMode);
                    for (var _d = 0, attributeData_2 = attributeData; _d < attributeData_2.length; _d++) {
                        var attribute = attributeData_2[_d];
                        var attributeKind = attribute.kind;
                        if ((attributeKind === core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.UVKind || attributeKind === core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.UV2Kind) && !this._options.exportUnusedUVs) {
                            if (!glTFMaterial || !this._glTFMaterialExporter._hasTexturesPresent(glTFMaterial)) {
                                continue;
                            }
                        }
                        var vertexData = bufferMesh.getVerticesData(attributeKind);
                        if (vertexData) {
                            var vertexBuffer = this._getVertexBufferFromMesh(attributeKind, bufferMesh);
                            if (vertexBuffer) {
                                var stride = vertexBuffer.getSize();
                                var bufferViewIndex = attribute.bufferViewIndex;
                                if (bufferViewIndex != undefined) {
                                    // check to see if bufferviewindex has a numeric value assigned.
                                    minMax = { min: null, max: null };
                                    if (attributeKind == core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.PositionKind) {
                                        minMax = _glTFUtilities__WEBPACK_IMPORTED_MODULE_3__._GLTFUtilities._CalculateMinMaxPositions(vertexData, 0, vertexData.length / stride, convertToRightHandedSystem);
                                    }
                                    var accessor = _glTFUtilities__WEBPACK_IMPORTED_MODULE_3__._GLTFUtilities._CreateAccessor(bufferViewIndex, attributeKind + " - " + babylonTransformNode.name, attribute.accessorType, attribute.accessorComponentType, vertexData.length / stride, 0, minMax.min, minMax.max);
                                    this._accessors.push(accessor);
                                    this._setAttributeKind(meshPrimitive, attributeKind);
                                }
                            }
                        }
                    }
                    if (indexBufferViewIndex) {
                        // Create accessor
                        var accessor = _glTFUtilities__WEBPACK_IMPORTED_MODULE_3__._GLTFUtilities._CreateAccessor(indexBufferViewIndex, "indices - " + babylonTransformNode.name, "SCALAR" /* SCALAR */, 5125 /* UNSIGNED_INT */, submesh.indexCount, submesh.indexStart * 4, null, null);
                        this._accessors.push(accessor);
                        meshPrimitive.indices = this._accessors.length - 1;
                    }
                    if (materialIndex != null && Object.keys(meshPrimitive.attributes).length > 0) {
                        var sideOrientation = bufferMesh.overrideMaterialSideOrientation !== null ? bufferMesh.overrideMaterialSideOrientation : babylonMaterial.sideOrientation;
                        if ((sideOrientation == core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Material.ClockWiseSideOrientation && this._babylonScene.useRightHandedSystem) ||
                            (sideOrientation == core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Material.ClockWiseSideOrientation &&
                                convertToRightHandedSystem &&
                                bufferMesh.overrideMaterialSideOrientation !== ((_a = bufferMesh.material) === null || _a === void 0 ? void 0 : _a.sideOrientation))) {
                            var byteOffset = indexBufferViewIndex != null ? this._bufferViews[indexBufferViewIndex].byteOffset : null;
                            if (byteOffset == null) {
                                byteOffset = 0;
                            }
                            var babylonIndices = null;
                            if (indexBufferViewIndex != null) {
                                babylonIndices = bufferMesh.getIndices();
                            }
                            if (babylonIndices) {
                                this._reorderIndicesBasedOnPrimitiveMode(submesh, primitiveMode, babylonIndices, byteOffset, binaryWriter);
                            }
                            else {
                                for (var _e = 0, attributeData_3 = attributeData; _e < attributeData_3.length; _e++) {
                                    var attribute = attributeData_3[_e];
                                    var vertexData = bufferMesh.getVerticesData(attribute.kind);
                                    if (vertexData) {
                                        var byteOffset_1 = this._bufferViews[vertexAttributeBufferViews[attribute.kind]].byteOffset;
                                        if (!byteOffset_1) {
                                            byteOffset_1 = 0;
                                        }
                                        this._reorderVertexAttributeDataBasedOnPrimitiveMode(submesh, primitiveMode, sideOrientation, attribute.kind, vertexData, byteOffset_1, binaryWriter, convertToRightHandedSystem);
                                    }
                                }
                            }
                        }
                        meshPrimitive.material = materialIndex;
                    }
                    if (morphTargetManager) {
                        var target = void 0;
                        for (var i = 0; i < morphTargetManager.numTargets; ++i) {
                            target = morphTargetManager.getTarget(i);
                            this._setMorphTargetAttributes(submesh, meshPrimitive, target, binaryWriter, convertToRightHandedSystem);
                        }
                    }
                    mesh.primitives.push(meshPrimitive);
                    this._extensionsPostExportMeshPrimitiveAsync("postExport", meshPrimitive, submesh, binaryWriter);
                    promises.push();
                }
            }
        }
        return Promise.all(promises).then(function () {
            /* do nothing */
        });
    };
    /**
     * Check if the node is used to convert its descendants from a right handed coordinate system to the Babylon scene's coordinate system.
     * @param node The node to check
     * @returns True if the node is used to convert its descendants from right-handed to left-handed. False otherwise
     */
    _Exporter.prototype._isBabylonCoordinateSystemConvertingNode = function (node) {
        if (node instanceof core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.TransformNode) {
            if (node.name !== "__root__") {
                return false;
            }
            // Transform
            var matrix = node.getWorldMatrix();
            if (matrix.determinant() === 1) {
                return false;
            }
            // Geometry
            if ((node instanceof core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Mesh && node.geometry !== null) || (node instanceof core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.InstancedMesh && node.sourceMesh.geometry !== null)) {
                return false;
            }
            if (this._includeCoordinateSystemConversionNodes) {
                return false;
            }
            return true;
        }
        return false;
    };
    /**
     * Creates a glTF scene based on the array of meshes
     * Returns the the total byte offset
     * @param babylonScene Babylon scene to get the mesh data from
     * @param binaryWriter Buffer to write binary data to
     */
    _Exporter.prototype._createSceneAsync = function (babylonScene, binaryWriter) {
        var _this = this;
        var scene = { nodes: [] };
        var glTFNodeIndex;
        var glTFNode;
        var directDescendents;
        var nodes = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([], babylonScene.transformNodes, true), babylonScene.meshes, true), babylonScene.lights, true), babylonScene.cameras, true);
        var rootNodesToLeftHanded = [];
        this._convertToRightHandedSystem = !babylonScene.useRightHandedSystem;
        this._convertToRightHandedSystemMap = {};
        // Set default values for all nodes
        babylonScene.rootNodes.forEach(function (rootNode) {
            _this._convertToRightHandedSystemMap[rootNode.uniqueId] = _this._convertToRightHandedSystem;
            rootNode.getDescendants(false).forEach(function (descendant) {
                _this._convertToRightHandedSystemMap[descendant.uniqueId] = _this._convertToRightHandedSystem;
            });
        });
        // Check if root nodes converting to left-handed are present
        babylonScene.rootNodes.forEach(function (rootNode) {
            if (_this._isBabylonCoordinateSystemConvertingNode(rootNode)) {
                rootNodesToLeftHanded.push(rootNode);
                // Exclude the node from list of nodes to export
                var indexRootNode = nodes.indexOf(rootNode);
                if (indexRootNode !== -1) {
                    // should always be true
                    nodes.splice(indexRootNode, 1);
                }
                // Cancel conversion to right handed system
                rootNode.getDescendants(false).forEach(function (descendant) {
                    _this._convertToRightHandedSystemMap[descendant.uniqueId] = false;
                });
            }
        });
        // Export babylon cameras to glTFCamera
        var cameraMap = new Map();
        babylonScene.cameras.forEach(function (camera) {
            if (!_this._options.shouldExportNode || _this._options.shouldExportNode(camera)) {
                var glTFCamera = {
                    type: camera.mode === core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Camera.PERSPECTIVE_CAMERA ? "perspective" /* PERSPECTIVE */ : "orthographic" /* ORTHOGRAPHIC */,
                };
                if (camera.name) {
                    glTFCamera.name = camera.name;
                }
                if (glTFCamera.type === "perspective" /* PERSPECTIVE */) {
                    glTFCamera.perspective = {
                        aspectRatio: camera.getEngine().getAspectRatio(camera),
                        yfov: camera.fovMode === core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Camera.FOVMODE_VERTICAL_FIXED ? camera.fov : camera.fov * camera.getEngine().getAspectRatio(camera),
                        znear: camera.minZ,
                        zfar: camera.maxZ,
                    };
                }
                else if (glTFCamera.type === "orthographic" /* ORTHOGRAPHIC */) {
                    var halfWidth = camera.orthoLeft && camera.orthoRight ? 0.5 * (camera.orthoRight - camera.orthoLeft) : camera.getEngine().getRenderWidth() * 0.5;
                    var halfHeight = camera.orthoBottom && camera.orthoTop ? 0.5 * (camera.orthoTop - camera.orthoBottom) : camera.getEngine().getRenderHeight() * 0.5;
                    glTFCamera.orthographic = {
                        xmag: halfWidth,
                        ymag: halfHeight,
                        znear: camera.minZ,
                        zfar: camera.maxZ,
                    };
                }
                cameraMap.set(camera, _this._cameras.length);
                _this._cameras.push(glTFCamera);
            }
        });
        var _a = this._getExportNodes(nodes), exportNodes = _a[0], exportMaterials = _a[1];
        return this._glTFMaterialExporter._convertMaterialsToGLTFAsync(exportMaterials, "image/png" /* PNG */, true).then(function () {
            return _this._createNodeMapAndAnimationsAsync(babylonScene, exportNodes, binaryWriter).then(function (nodeMap) {
                return _this._createSkinsAsync(babylonScene, nodeMap, binaryWriter).then(function (skinMap) {
                    _this._nodeMap = nodeMap;
                    _this._totalByteLength = binaryWriter.getByteOffset();
                    if (_this._totalByteLength == undefined) {
                        throw new Error("undefined byte length!");
                    }
                    // Build Hierarchy with the node map.
                    for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
                        var babylonNode = nodes_1[_i];
                        glTFNodeIndex = _this._nodeMap[babylonNode.uniqueId];
                        if (glTFNodeIndex !== undefined) {
                            glTFNode = _this._nodes[glTFNodeIndex];
                            if (babylonNode.metadata) {
                                if (_this._options.metadataSelector) {
                                    glTFNode.extras = _this._options.metadataSelector(babylonNode.metadata);
                                }
                                else if (babylonNode.metadata.gltf) {
                                    glTFNode.extras = babylonNode.metadata.gltf.extras;
                                }
                            }
                            if (babylonNode instanceof core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Camera) {
                                glTFNode.camera = cameraMap.get(babylonNode);
                            }
                            if (!babylonNode.parent || rootNodesToLeftHanded.indexOf(babylonNode.parent) !== -1) {
                                if (_this._options.shouldExportNode && !_this._options.shouldExportNode(babylonNode)) {
                                    core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.Log("Omitting " + babylonNode.name + " from scene.");
                                }
                                else {
                                    var convertToRightHandedSystem = _this._convertToRightHandedSystemMap[babylonNode.uniqueId];
                                    if (convertToRightHandedSystem) {
                                        if (glTFNode.translation) {
                                            glTFNode.translation[2] *= -1;
                                            glTFNode.translation[0] *= -1;
                                        }
                                        glTFNode.rotation = glTFNode.rotation
                                            ? core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Quaternion.FromArray([0, 1, 0, 0]).multiply(core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Quaternion.FromArray(glTFNode.rotation)).asArray()
                                            : core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Quaternion.FromArray([0, 1, 0, 0]).asArray();
                                    }
                                    scene.nodes.push(glTFNodeIndex);
                                }
                            }
                            if (babylonNode instanceof core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Mesh) {
                                var babylonMesh = babylonNode;
                                if (babylonMesh.skeleton) {
                                    glTFNode.skin = skinMap[babylonMesh.skeleton.uniqueId];
                                }
                            }
                            directDescendents = babylonNode.getDescendants(true);
                            if (!glTFNode.children && directDescendents && directDescendents.length) {
                                var children = [];
                                for (var _a = 0, directDescendents_1 = directDescendents; _a < directDescendents_1.length; _a++) {
                                    var descendent = directDescendents_1[_a];
                                    if (_this._nodeMap[descendent.uniqueId] != null) {
                                        children.push(_this._nodeMap[descendent.uniqueId]);
                                    }
                                }
                                if (children.length) {
                                    glTFNode.children = children;
                                }
                            }
                        }
                    }
                    if (scene.nodes.length) {
                        _this._scenes.push(scene);
                    }
                });
            });
        });
    };
    /**
     * Getting the nodes and materials that would be exported.
     * @param nodes Babylon transform nodes
     * @returns Array of nodes which would be exported.
     * @returns Set of materials which would be exported.
     */
    _Exporter.prototype._getExportNodes = function (nodes) {
        var exportNodes = [];
        var exportMaterials = new Set();
        for (var _i = 0, nodes_2 = nodes; _i < nodes_2.length; _i++) {
            var babylonNode = nodes_2[_i];
            if (!this._options.shouldExportNode || this._options.shouldExportNode(babylonNode)) {
                exportNodes.push(babylonNode);
                if (babylonNode instanceof core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.AbstractMesh) {
                    var material = babylonNode.material || babylonNode.getScene().defaultMaterial;
                    if (material instanceof core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.MultiMaterial) {
                        for (var _a = 0, _b = material.subMaterials; _a < _b.length; _a++) {
                            var subMaterial = _b[_a];
                            if (subMaterial) {
                                exportMaterials.add(subMaterial);
                            }
                        }
                    }
                    else {
                        exportMaterials.add(material);
                    }
                }
            }
            else {
                "Excluding node ".concat(babylonNode.name);
            }
        }
        return [exportNodes, exportMaterials];
    };
    /**
     * Creates a mapping of Node unique id to node index and handles animations
     * @param babylonScene Babylon Scene
     * @param nodes Babylon transform nodes
     * @param binaryWriter Buffer to write binary data to
     * @returns Node mapping of unique id to index
     */
    _Exporter.prototype._createNodeMapAndAnimationsAsync = function (babylonScene, nodes, binaryWriter) {
        var _this = this;
        var promiseChain = Promise.resolve();
        var nodeMap = {};
        var nodeIndex;
        var runtimeGLTFAnimation = {
            name: "runtime animations",
            channels: [],
            samplers: [],
        };
        var idleGLTFAnimations = [];
        var _loop_1 = function (babylonNode) {
            promiseChain = promiseChain.then(function () {
                var convertToRightHandedSystem = _this._convertToRightHandedSystemMap[babylonNode.uniqueId];
                return _this._createNodeAsync(babylonNode, binaryWriter, convertToRightHandedSystem).then(function (node) {
                    var promise = _this._extensionsPostExportNodeAsync("createNodeAsync", node, babylonNode, nodeMap);
                    if (promise == null) {
                        core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.Warn("Not exporting node ".concat(babylonNode.name));
                        return Promise.resolve();
                    }
                    else {
                        return promise.then(function (node) {
                            if (!node) {
                                return;
                            }
                            _this._nodes.push(node);
                            nodeIndex = _this._nodes.length - 1;
                            nodeMap[babylonNode.uniqueId] = nodeIndex;
                            if (!babylonScene.animationGroups.length) {
                                _glTFAnimation__WEBPACK_IMPORTED_MODULE_5__._GLTFAnimation._CreateMorphTargetAnimationFromMorphTargetAnimations(babylonNode, runtimeGLTFAnimation, idleGLTFAnimations, nodeMap, _this._nodes, binaryWriter, _this._bufferViews, _this._accessors, convertToRightHandedSystem, _this._animationSampleRate);
                                if (babylonNode.animations.length) {
                                    _glTFAnimation__WEBPACK_IMPORTED_MODULE_5__._GLTFAnimation._CreateNodeAnimationFromNodeAnimations(babylonNode, runtimeGLTFAnimation, idleGLTFAnimations, nodeMap, _this._nodes, binaryWriter, _this._bufferViews, _this._accessors, convertToRightHandedSystem, _this._animationSampleRate);
                                }
                            }
                        });
                    }
                });
            });
        };
        for (var _i = 0, nodes_3 = nodes; _i < nodes_3.length; _i++) {
            var babylonNode = nodes_3[_i];
            _loop_1(babylonNode);
        }
        return promiseChain.then(function () {
            if (runtimeGLTFAnimation.channels.length && runtimeGLTFAnimation.samplers.length) {
                _this._animations.push(runtimeGLTFAnimation);
            }
            idleGLTFAnimations.forEach(function (idleGLTFAnimation) {
                if (idleGLTFAnimation.channels.length && idleGLTFAnimation.samplers.length) {
                    _this._animations.push(idleGLTFAnimation);
                }
            });
            if (babylonScene.animationGroups.length) {
                _glTFAnimation__WEBPACK_IMPORTED_MODULE_5__._GLTFAnimation._CreateNodeAndMorphAnimationFromAnimationGroups(babylonScene, _this._animations, nodeMap, _this._nodes, binaryWriter, _this._bufferViews, _this._accessors, _this._convertToRightHandedSystemMap, _this._animationSampleRate);
            }
            return nodeMap;
        });
    };
    /**
     * Creates a glTF node from a Babylon mesh
     * @param babylonNode Source Babylon mesh
     * @param binaryWriter Buffer for storing geometry data
     * @param convertToRightHandedSystem Converts the values to right-handed
     * @returns glTF node
     */
    _Exporter.prototype._createNodeAsync = function (babylonNode, binaryWriter, convertToRightHandedSystem) {
        var _this = this;
        return Promise.resolve().then(function () {
            // create node to hold translation/rotation/scale and the mesh
            var node = {};
            // create mesh
            var mesh = { primitives: [] };
            if (babylonNode.name) {
                node.name = babylonNode.name;
            }
            if (babylonNode instanceof core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.TransformNode) {
                // Set transformation
                _this._setNodeTransformation(node, babylonNode, convertToRightHandedSystem);
                if (babylonNode instanceof core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Mesh) {
                    var morphTargetManager = babylonNode.morphTargetManager;
                    if (morphTargetManager && morphTargetManager.numTargets > 0) {
                        mesh.weights = [];
                        for (var i = 0; i < morphTargetManager.numTargets; ++i) {
                            mesh.weights.push(morphTargetManager.getTarget(i).influence);
                        }
                    }
                }
                return _this._setPrimitiveAttributesAsync(mesh, babylonNode, binaryWriter, convertToRightHandedSystem).then(function () {
                    if (mesh.primitives.length) {
                        _this._meshes.push(mesh);
                        node.mesh = _this._meshes.length - 1;
                    }
                    return node;
                });
            }
            else if (babylonNode instanceof core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Camera) {
                _this._setCameraTransformation(node, babylonNode, convertToRightHandedSystem);
                return node;
            }
            else {
                return node;
            }
        });
    };
    /**
     * Creates a glTF skin from a Babylon skeleton
     * @param babylonScene Babylon Scene
     * @param nodeMap Babylon transform nodes
     * @param binaryWriter Buffer to write binary data to
     * @returns Node mapping of unique id to index
     */
    _Exporter.prototype._createSkinsAsync = function (babylonScene, nodeMap, binaryWriter) {
        var _a;
        var promiseChain = Promise.resolve();
        var skinMap = {};
        for (var _i = 0, _b = babylonScene.skeletons; _i < _b.length; _i++) {
            var skeleton = _b[_i];
            // create skin
            var skin = { joints: [] };
            var inverseBindMatrices = [];
            var boneIndexMap = {};
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
            for (var boneIndex = 0; boneIndex <= maxBoneIndex; ++boneIndex) {
                var bone = boneIndexMap[boneIndex];
                inverseBindMatrices.push(bone.getInvertedAbsoluteTransform());
                var transformNode = bone.getTransformNode();
                if (transformNode) {
                    skin.joints.push(nodeMap[transformNode.uniqueId]);
                }
                else {
                    core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.Warn("Exporting a bone without a linked transform node is currently unsupported");
                }
            }
            // create buffer view for inverse bind matrices
            var byteStride = 64; // 4 x 4 matrix of 32 bit float
            var byteLength = inverseBindMatrices.length * byteStride;
            var bufferViewOffset = binaryWriter.getByteOffset();
            var bufferView = _glTFUtilities__WEBPACK_IMPORTED_MODULE_3__._GLTFUtilities._CreateBufferView(0, bufferViewOffset, byteLength, undefined, "InverseBindMatrices" + " - " + skeleton.name);
            this._bufferViews.push(bufferView);
            var bufferViewIndex = this._bufferViews.length - 1;
            var bindMatrixAccessor = _glTFUtilities__WEBPACK_IMPORTED_MODULE_3__._GLTFUtilities._CreateAccessor(bufferViewIndex, "InverseBindMatrices" + " - " + skeleton.name, "MAT4" /* MAT4 */, 5126 /* FLOAT */, inverseBindMatrices.length, null, null, null);
            var inverseBindAccessorIndex = this._accessors.push(bindMatrixAccessor) - 1;
            skin.inverseBindMatrices = inverseBindAccessorIndex;
            this._skins.push(skin);
            skinMap[skeleton.uniqueId] = this._skins.length - 1;
            inverseBindMatrices.forEach(function (mat) {
                mat.m.forEach(function (cell) {
                    binaryWriter.setFloat32(cell);
                });
            });
        }
        return promiseChain.then(function () {
            return skinMap;
        });
    };
    _Exporter._ExtensionNames = new Array();
    _Exporter._ExtensionFactories = {};
    return _Exporter;
}());

/**
 * @hidden
 *
 * Stores glTF binary data.  If the array buffer byte length is exceeded, it doubles in size dynamically
 */
var _BinaryWriter = /** @class */ (function () {
    /**
     * Initialize binary writer with an initial byte length
     * @param byteLength Initial byte length of the array buffer
     */
    function _BinaryWriter(byteLength) {
        this._arrayBuffer = new ArrayBuffer(byteLength);
        this._dataView = new DataView(this._arrayBuffer);
        this._byteOffset = 0;
    }
    /**
     * Resize the array buffer to the specified byte length
     * @param byteLength
     */
    _BinaryWriter.prototype._resizeBuffer = function (byteLength) {
        var newBuffer = new ArrayBuffer(byteLength);
        var oldUint8Array = new Uint8Array(this._arrayBuffer);
        var newUint8Array = new Uint8Array(newBuffer);
        for (var i = 0, length_10 = newUint8Array.byteLength; i < length_10; ++i) {
            newUint8Array[i] = oldUint8Array[i];
        }
        this._arrayBuffer = newBuffer;
        this._dataView = new DataView(this._arrayBuffer);
        return newBuffer;
    };
    /**
     * Get an array buffer with the length of the byte offset
     * @returns ArrayBuffer resized to the byte offset
     */
    _BinaryWriter.prototype.getArrayBuffer = function () {
        return this._resizeBuffer(this.getByteOffset());
    };
    /**
     * Get the byte offset of the array buffer
     * @returns byte offset
     */
    _BinaryWriter.prototype.getByteOffset = function () {
        if (this._byteOffset == undefined) {
            throw new Error("Byte offset is undefined!");
        }
        return this._byteOffset;
    };
    /**
     * Stores an UInt8 in the array buffer
     * @param entry
     * @param byteOffset If defined, specifies where to set the value as an offset.
     */
    _BinaryWriter.prototype.setUInt8 = function (entry, byteOffset) {
        if (byteOffset != null) {
            if (byteOffset < this._byteOffset) {
                this._dataView.setUint8(byteOffset, entry);
            }
            else {
                core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.Error("BinaryWriter: byteoffset is greater than the current binary buffer length!");
            }
        }
        else {
            if (this._byteOffset + 1 > this._arrayBuffer.byteLength) {
                this._resizeBuffer(this._arrayBuffer.byteLength * 2);
            }
            this._dataView.setUint8(this._byteOffset, entry);
            this._byteOffset += 1;
        }
    };
    /**
     * Stores an UInt16 in the array buffer
     * @param entry
     * @param byteOffset If defined, specifies where to set the value as an offset.
     */
    _BinaryWriter.prototype.setUInt16 = function (entry, byteOffset) {
        if (byteOffset != null) {
            if (byteOffset < this._byteOffset) {
                this._dataView.setUint16(byteOffset, entry, true);
            }
            else {
                core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.Error("BinaryWriter: byteoffset is greater than the current binary buffer length!");
            }
        }
        else {
            if (this._byteOffset + 2 > this._arrayBuffer.byteLength) {
                this._resizeBuffer(this._arrayBuffer.byteLength * 2);
            }
            this._dataView.setUint16(this._byteOffset, entry, true);
            this._byteOffset += 2;
        }
    };
    /**
     * Gets an UInt32 in the array buffer
     * @param byteOffset If defined, specifies where to set the value as an offset.
     */
    _BinaryWriter.prototype.getUInt32 = function (byteOffset) {
        if (byteOffset < this._byteOffset) {
            return this._dataView.getUint32(byteOffset, true);
        }
        else {
            core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.Error("BinaryWriter: byteoffset is greater than the current binary buffer length!");
            throw new Error("BinaryWriter: byteoffset is greater than the current binary buffer length!");
        }
    };
    _BinaryWriter.prototype.getVector3Float32FromRef = function (vector3, byteOffset) {
        if (byteOffset + 8 > this._byteOffset) {
            core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.Error("BinaryWriter: byteoffset is greater than the current binary buffer length!");
        }
        else {
            vector3.x = this._dataView.getFloat32(byteOffset, true);
            vector3.y = this._dataView.getFloat32(byteOffset + 4, true);
            vector3.z = this._dataView.getFloat32(byteOffset + 8, true);
        }
    };
    _BinaryWriter.prototype.setVector3Float32FromRef = function (vector3, byteOffset) {
        if (byteOffset + 8 > this._byteOffset) {
            core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.Error("BinaryWriter: byteoffset is greater than the current binary buffer length!");
        }
        else {
            this._dataView.setFloat32(byteOffset, vector3.x, true);
            this._dataView.setFloat32(byteOffset + 4, vector3.y, true);
            this._dataView.setFloat32(byteOffset + 8, vector3.z, true);
        }
    };
    _BinaryWriter.prototype.getVector4Float32FromRef = function (vector4, byteOffset) {
        if (byteOffset + 12 > this._byteOffset) {
            core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.Error("BinaryWriter: byteoffset is greater than the current binary buffer length!");
        }
        else {
            vector4.x = this._dataView.getFloat32(byteOffset, true);
            vector4.y = this._dataView.getFloat32(byteOffset + 4, true);
            vector4.z = this._dataView.getFloat32(byteOffset + 8, true);
            vector4.w = this._dataView.getFloat32(byteOffset + 12, true);
        }
    };
    _BinaryWriter.prototype.setVector4Float32FromRef = function (vector4, byteOffset) {
        if (byteOffset + 12 > this._byteOffset) {
            core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.Error("BinaryWriter: byteoffset is greater than the current binary buffer length!");
        }
        else {
            this._dataView.setFloat32(byteOffset, vector4.x, true);
            this._dataView.setFloat32(byteOffset + 4, vector4.y, true);
            this._dataView.setFloat32(byteOffset + 8, vector4.z, true);
            this._dataView.setFloat32(byteOffset + 12, vector4.w, true);
        }
    };
    /**
     * Stores a Float32 in the array buffer
     * @param entry
     * @param byteOffset
     */
    _BinaryWriter.prototype.setFloat32 = function (entry, byteOffset) {
        if (isNaN(entry)) {
            core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.Error("Invalid data being written!");
        }
        if (byteOffset != null) {
            if (byteOffset < this._byteOffset) {
                this._dataView.setFloat32(byteOffset, entry, true);
            }
            else {
                core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.Error("BinaryWriter: byteoffset is greater than the current binary length!");
            }
        }
        if (this._byteOffset + 4 > this._arrayBuffer.byteLength) {
            this._resizeBuffer(this._arrayBuffer.byteLength * 2);
        }
        this._dataView.setFloat32(this._byteOffset, entry, true);
        this._byteOffset += 4;
    };
    /**
     * Stores an UInt32 in the array buffer
     * @param entry
     * @param byteOffset If defined, specifies where to set the value as an offset.
     */
    _BinaryWriter.prototype.setUInt32 = function (entry, byteOffset) {
        if (byteOffset != null) {
            if (byteOffset < this._byteOffset) {
                this._dataView.setUint32(byteOffset, entry, true);
            }
            else {
                core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.Error("BinaryWriter: byteoffset is greater than the current binary buffer length!");
            }
        }
        else {
            if (this._byteOffset + 4 > this._arrayBuffer.byteLength) {
                this._resizeBuffer(this._arrayBuffer.byteLength * 2);
            }
            this._dataView.setUint32(this._byteOffset, entry, true);
            this._byteOffset += 4;
        }
    };
    return _BinaryWriter;
}());



/***/ }),

/***/ "../../../lts/serializers/dist/glTF/2.0/glTFExporterExtension.js":
/*!***********************************************************************!*\
  !*** ../../../lts/serializers/dist/glTF/2.0/glTFExporterExtension.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__IGLTFExporterExtensionV2": () => (/* binding */ __IGLTFExporterExtensionV2)
/* harmony export */ });
/** @hidden */
// eslint-disable-next-line no-var, @typescript-eslint/naming-convention
var __IGLTFExporterExtensionV2 = 0; // I am here to allow dts to be created


/***/ }),

/***/ "../../../lts/serializers/dist/glTF/2.0/glTFMaterialExporter.js":
/*!**********************************************************************!*\
  !*** ../../../lts/serializers/dist/glTF/2.0/glTFMaterialExporter.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_GLTFMaterialExporter": () => (/* binding */ _GLTFMaterialExporter)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/Engines/constants */ "core/Maths/math.vector");
/* harmony import */ var core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__);









/**
 * Utility methods for working with glTF material conversion properties.  This class should only be used internally
 * @hidden
 */
var _GLTFMaterialExporter = /** @class */ (function () {
    function _GLTFMaterialExporter(exporter) {
        /**
         * Mapping to store textures
         */
        this._textureMap = {};
        this._textureMap = {};
        this._exporter = exporter;
    }
    /**
     * Specifies if two colors are approximately equal in value
     * @param color1 first color to compare to
     * @param color2 second color to compare to
     * @param epsilon threshold value
     */
    _GLTFMaterialExporter._FuzzyEquals = function (color1, color2, epsilon) {
        return core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Scalar.WithinEpsilon(color1.r, color2.r, epsilon) && core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Scalar.WithinEpsilon(color1.g, color2.g, epsilon) && core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Scalar.WithinEpsilon(color1.b, color2.b, epsilon);
    };
    /**
     * Gets the materials from a Babylon scene and converts them to glTF materials
     * @param exportMaterials
     * @param mimeType texture mime type
     * @param hasTextureCoords specifies if texture coordinates are present on the material
     */
    _GLTFMaterialExporter.prototype._convertMaterialsToGLTFAsync = function (exportMaterials, mimeType, hasTextureCoords) {
        var _this = this;
        var promises = [];
        exportMaterials.forEach(function (material) {
            if (material.getClassName() === "StandardMaterial") {
                promises.push(_this._convertStandardMaterialAsync(material, mimeType, hasTextureCoords));
            }
            else if (material.getClassName().indexOf("PBR") !== -1) {
                promises.push(_this._convertPBRMaterialAsync(material, mimeType, hasTextureCoords));
            }
            else {
                core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.Warn("Unsupported material type: ".concat(material.name));
            }
        });
        return Promise.all(promises).then(function () {
            /* do nothing */
        });
    };
    /**
     * Makes a copy of the glTF material without the texture parameters
     * @param originalMaterial original glTF material
     * @returns glTF material without texture parameters
     */
    _GLTFMaterialExporter.prototype._stripTexturesFromMaterial = function (originalMaterial) {
        var newMaterial = {};
        if (originalMaterial) {
            newMaterial.name = originalMaterial.name;
            newMaterial.doubleSided = originalMaterial.doubleSided;
            newMaterial.alphaMode = originalMaterial.alphaMode;
            newMaterial.alphaCutoff = originalMaterial.alphaCutoff;
            newMaterial.emissiveFactor = originalMaterial.emissiveFactor;
            var originalPBRMetallicRoughness = originalMaterial.pbrMetallicRoughness;
            if (originalPBRMetallicRoughness) {
                newMaterial.pbrMetallicRoughness = {};
                newMaterial.pbrMetallicRoughness.baseColorFactor = originalPBRMetallicRoughness.baseColorFactor;
                newMaterial.pbrMetallicRoughness.metallicFactor = originalPBRMetallicRoughness.metallicFactor;
                newMaterial.pbrMetallicRoughness.roughnessFactor = originalPBRMetallicRoughness.roughnessFactor;
            }
        }
        return newMaterial;
    };
    /**
     * Specifies if the material has any texture parameters present
     * @param material glTF Material
     * @returns boolean specifying if texture parameters are present
     */
    _GLTFMaterialExporter.prototype._hasTexturesPresent = function (material) {
        var _a;
        if (material.emissiveTexture || material.normalTexture || material.occlusionTexture) {
            return true;
        }
        var pbrMat = material.pbrMetallicRoughness;
        if (pbrMat) {
            if (pbrMat.baseColorTexture || pbrMat.metallicRoughnessTexture) {
                return true;
            }
        }
        if (material.extensions) {
            for (var extension in material.extensions) {
                var extensionObject = material.extensions[extension];
                if (extensionObject) {
                    return (_a = extensionObject.hasTextures) === null || _a === void 0 ? void 0 : _a.call(extensionObject);
                }
            }
        }
        return false;
    };
    _GLTFMaterialExporter.prototype._getTextureInfo = function (babylonTexture) {
        if (babylonTexture) {
            var textureUid = babylonTexture.uid;
            if (textureUid in this._textureMap) {
                return this._textureMap[textureUid];
            }
        }
        return null;
    };
    /**
     * Converts a Babylon StandardMaterial to a glTF Metallic Roughness Material
     * @param babylonStandardMaterial
     * @returns glTF Metallic Roughness Material representation
     */
    _GLTFMaterialExporter.prototype._convertToGLTFPBRMetallicRoughness = function (babylonStandardMaterial) {
        // Defines a cubic bezier curve where x is specular power and y is roughness
        var P0 = new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector2(0, 1);
        var P1 = new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector2(0, 0.1);
        var P2 = new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector2(0, 0.1);
        var P3 = new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector2(1300, 0.1);
        /**
         * Given the control points, solve for x based on a given t for a cubic bezier curve
         * @param t a value between 0 and 1
         * @param p0 first control point
         * @param p1 second control point
         * @param p2 third control point
         * @param p3 fourth control point
         * @returns number result of cubic bezier curve at the specified t
         */
        function cubicBezierCurve(t, p0, p1, p2, p3) {
            return (1 - t) * (1 - t) * (1 - t) * p0 + 3 * (1 - t) * (1 - t) * t * p1 + 3 * (1 - t) * t * t * p2 + t * t * t * p3;
        }
        /**
         * Evaluates a specified specular power value to determine the appropriate roughness value,
         * based on a pre-defined cubic bezier curve with specular on the abscissa axis (x-axis)
         * and roughness on the ordinant axis (y-axis)
         * @param specularPower specular power of standard material
         * @returns Number representing the roughness value
         */
        function solveForRoughness(specularPower) {
            // Given P0.x = 0, P1.x = 0, P2.x = 0
            //   x = t * t * t * P3.x
            //   t = (x / P3.x)^(1/3)
            var t = Math.pow(specularPower / P3.x, 0.333333);
            return cubicBezierCurve(t, P0.y, P1.y, P2.y, P3.y);
        }
        var diffuse = babylonStandardMaterial.diffuseColor.toLinearSpace().scale(0.5);
        var opacity = babylonStandardMaterial.alpha;
        var specularPower = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Scalar.Clamp(babylonStandardMaterial.specularPower, 0, _GLTFMaterialExporter._MaxSpecularPower);
        var roughness = solveForRoughness(specularPower);
        var glTFPbrMetallicRoughness = {
            baseColorFactor: [diffuse.r, diffuse.g, diffuse.b, opacity],
            metallicFactor: 0,
            roughnessFactor: roughness,
        };
        return glTFPbrMetallicRoughness;
    };
    /**
     * Computes the metallic factor
     * @param diffuse diffused value
     * @param specular specular value
     * @param oneMinusSpecularStrength one minus the specular strength
     * @returns metallic value
     */
    _GLTFMaterialExporter._SolveMetallic = function (diffuse, specular, oneMinusSpecularStrength) {
        if (specular < this._DielectricSpecular.r) {
            this._DielectricSpecular;
            return 0;
        }
        var a = this._DielectricSpecular.r;
        var b = (diffuse * oneMinusSpecularStrength) / (1.0 - this._DielectricSpecular.r) + specular - 2.0 * this._DielectricSpecular.r;
        var c = this._DielectricSpecular.r - specular;
        var D = b * b - 4.0 * a * c;
        return core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Scalar.Clamp((-b + Math.sqrt(D)) / (2.0 * a), 0, 1);
    };
    /**
     * Sets the glTF alpha mode to a glTF material from the Babylon Material
     * @param glTFMaterial glTF material
     * @param babylonMaterial Babylon material
     */
    _GLTFMaterialExporter._SetAlphaMode = function (glTFMaterial, babylonMaterial) {
        if (babylonMaterial.needAlphaBlending()) {
            glTFMaterial.alphaMode = "BLEND" /* BLEND */;
        }
        else if (babylonMaterial.needAlphaTesting()) {
            glTFMaterial.alphaMode = "MASK" /* MASK */;
            glTFMaterial.alphaCutoff = babylonMaterial.alphaCutOff;
        }
    };
    /**
     * Converts a Babylon Standard Material to a glTF Material
     * @param babylonStandardMaterial BJS Standard Material
     * @param mimeType mime type to use for the textures
     * @param hasTextureCoords specifies if texture coordinates are present on the submesh to determine if textures should be applied
     */
    _GLTFMaterialExporter.prototype._convertStandardMaterialAsync = function (babylonStandardMaterial, mimeType, hasTextureCoords) {
        var materialMap = this._exporter._materialMap;
        var materials = this._exporter._materials;
        var promises = [];
        var glTFPbrMetallicRoughness = this._convertToGLTFPBRMetallicRoughness(babylonStandardMaterial);
        var glTFMaterial = { name: babylonStandardMaterial.name };
        if (babylonStandardMaterial.backFaceCulling != null && !babylonStandardMaterial.backFaceCulling) {
            if (!babylonStandardMaterial.twoSidedLighting) {
                core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.Warn(babylonStandardMaterial.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF.");
            }
            glTFMaterial.doubleSided = true;
        }
        if (hasTextureCoords) {
            if (babylonStandardMaterial.diffuseTexture) {
                promises.push(this._exportTextureAsync(babylonStandardMaterial.diffuseTexture, mimeType).then(function (glTFTexture) {
                    if (glTFTexture) {
                        glTFPbrMetallicRoughness.baseColorTexture = glTFTexture;
                    }
                }));
            }
            if (babylonStandardMaterial.bumpTexture) {
                promises.push(this._exportTextureAsync(babylonStandardMaterial.bumpTexture, mimeType).then(function (glTFTexture) {
                    if (glTFTexture) {
                        glTFMaterial.normalTexture = glTFTexture;
                        if (babylonStandardMaterial.bumpTexture != null && babylonStandardMaterial.bumpTexture.level !== 1) {
                            glTFMaterial.normalTexture.scale = babylonStandardMaterial.bumpTexture.level;
                        }
                    }
                }));
            }
            if (babylonStandardMaterial.emissiveTexture) {
                glTFMaterial.emissiveFactor = [1.0, 1.0, 1.0];
                promises.push(this._exportTextureAsync(babylonStandardMaterial.emissiveTexture, mimeType).then(function (glTFEmissiveTexture) {
                    if (glTFEmissiveTexture) {
                        glTFMaterial.emissiveTexture = glTFEmissiveTexture;
                    }
                }));
            }
            if (babylonStandardMaterial.ambientTexture) {
                promises.push(this._exportTextureAsync(babylonStandardMaterial.ambientTexture, mimeType).then(function (glTFTexture) {
                    if (glTFTexture) {
                        var occlusionTexture = {
                            index: glTFTexture.index,
                        };
                        glTFMaterial.occlusionTexture = occlusionTexture;
                        occlusionTexture.strength = 1.0;
                    }
                }));
            }
        }
        if (babylonStandardMaterial.alpha < 1.0 || babylonStandardMaterial.opacityTexture) {
            if (babylonStandardMaterial.alphaMode === core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Constants.ALPHA_COMBINE) {
                glTFMaterial.alphaMode = "BLEND" /* BLEND */;
            }
            else {
                core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.Warn(babylonStandardMaterial.name + ": glTF 2.0 does not support alpha mode: " + babylonStandardMaterial.alphaMode.toString());
            }
        }
        if (babylonStandardMaterial.emissiveColor && !_GLTFMaterialExporter._FuzzyEquals(babylonStandardMaterial.emissiveColor, core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Color3.Black(), _GLTFMaterialExporter._Epsilon)) {
            glTFMaterial.emissiveFactor = babylonStandardMaterial.emissiveColor.asArray();
        }
        glTFMaterial.pbrMetallicRoughness = glTFPbrMetallicRoughness;
        _GLTFMaterialExporter._SetAlphaMode(glTFMaterial, babylonStandardMaterial);
        materials.push(glTFMaterial);
        materialMap[babylonStandardMaterial.uniqueId] = materials.length - 1;
        return this._finishMaterial(promises, glTFMaterial, babylonStandardMaterial, mimeType);
    };
    _GLTFMaterialExporter.prototype._finishMaterial = function (promises, glTFMaterial, babylonMaterial, mimeType) {
        var _this = this;
        return Promise.all(promises).then(function () {
            var textures = _this._exporter._extensionsPostExportMaterialAdditionalTextures("exportMaterial", glTFMaterial, babylonMaterial);
            var tasks = null;
            for (var _i = 0, textures_1 = textures; _i < textures_1.length; _i++) {
                var texture = textures_1[_i];
                if (!tasks) {
                    tasks = [];
                }
                tasks.push(_this._exportTextureAsync(texture, mimeType));
            }
            if (!tasks) {
                tasks = [Promise.resolve(null)];
            }
            return Promise.all(tasks).then(function () {
                var extensionWork = _this._exporter._extensionsPostExportMaterialAsync("exportMaterial", glTFMaterial, babylonMaterial);
                if (!extensionWork) {
                    return glTFMaterial;
                }
                return extensionWork.then(function () { return glTFMaterial; });
            });
        });
    };
    /**
     * Converts an image typed array buffer to a base64 image
     * @param buffer typed array buffer
     * @param width width of the image
     * @param height height of the image
     * @param mimeType mimetype of the image
     * @returns base64 image string
     */
    _GLTFMaterialExporter.prototype._createBase64FromCanvasAsync = function (buffer, width, height, mimeType) {
        var _this = this;
        // eslint-disable-next-line no-async-promise-executor
        return new Promise(function (resolve) { return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(_this, void 0, void 0, function () {
            var textureType, hostingScene, engine, tempTexture, data, base64;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        textureType = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Constants.TEXTURETYPE_UNSIGNED_INT;
                        hostingScene = this._exporter._babylonScene;
                        engine = hostingScene.getEngine();
                        tempTexture = engine.createRawTexture(buffer, width, height, core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Constants.TEXTUREFORMAT_RGBA, false, true, core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Texture.NEAREST_SAMPLINGMODE, null, textureType);
                        return [4 /*yield*/, core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.TextureTools.ApplyPostProcess("pass", tempTexture, hostingScene, textureType, core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Constants.TEXTURE_NEAREST_SAMPLINGMODE, core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Constants.TEXTUREFORMAT_RGBA)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, engine._readTexturePixels(tempTexture, width, height)];
                    case 2:
                        data = _a.sent();
                        return [4 /*yield*/, core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.DumpDataAsync(width, height, data, mimeType, undefined, true, false)];
                    case 3:
                        base64 = _a.sent();
                        resolve(base64);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    /**
     * Generates a white texture based on the specified width and height
     * @param width width of the texture in pixels
     * @param height height of the texture in pixels
     * @param scene babylonjs scene
     * @returns white texture
     */
    _GLTFMaterialExporter.prototype._createWhiteTexture = function (width, height, scene) {
        var data = new Uint8Array(width * height * 4);
        for (var i = 0; i < data.length; i = i + 4) {
            data[i] = data[i + 1] = data[i + 2] = data[i + 3] = 0xff;
        }
        var rawTexture = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.RawTexture.CreateRGBATexture(data, width, height, scene);
        return rawTexture;
    };
    /**
     * Resizes the two source textures to the same dimensions.  If a texture is null, a default white texture is generated.  If both textures are null, returns null
     * @param texture1 first texture to resize
     * @param texture2 second texture to resize
     * @param scene babylonjs scene
     * @returns resized textures or null
     */
    _GLTFMaterialExporter.prototype._resizeTexturesToSameDimensions = function (texture1, texture2, scene) {
        var texture1Size = texture1 ? texture1.getSize() : { width: 0, height: 0 };
        var texture2Size = texture2 ? texture2.getSize() : { width: 0, height: 0 };
        var resizedTexture1;
        var resizedTexture2;
        if (texture1Size.width < texture2Size.width) {
            if (texture1 && texture1 instanceof core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Texture) {
                resizedTexture1 = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.TextureTools.CreateResizedCopy(texture1, texture2Size.width, texture2Size.height, true);
            }
            else {
                resizedTexture1 = this._createWhiteTexture(texture2Size.width, texture2Size.height, scene);
            }
            resizedTexture2 = texture2;
        }
        else if (texture1Size.width > texture2Size.width) {
            if (texture2 && texture2 instanceof core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Texture) {
                resizedTexture2 = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.TextureTools.CreateResizedCopy(texture2, texture1Size.width, texture1Size.height, true);
            }
            else {
                resizedTexture2 = this._createWhiteTexture(texture1Size.width, texture1Size.height, scene);
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
     * Converts an array of pixels to a Float32Array
     * Throws an error if the pixel format is not supported
     * @param pixels - array buffer containing pixel values
     * @returns Float32 of pixels
     */
    _GLTFMaterialExporter.prototype._convertPixelArrayToFloat32 = function (pixels) {
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
    };
    /**
     * Convert Specular Glossiness Textures to Metallic Roughness
     * See link below for info on the material conversions from PBR Metallic/Roughness and Specular/Glossiness
     * @link https://github.com/KhronosGroup/glTF/blob/master/extensions/2.0/Khronos/KHR_materials_pbrSpecularGlossiness/examples/convert-between-workflows-bjs/js/babylon.pbrUtilities.js
     * @param diffuseTexture texture used to store diffuse information
     * @param specularGlossinessTexture texture used to store specular and glossiness information
     * @param factors specular glossiness material factors
     * @param mimeType the mime type to use for the texture
     * @returns pbr metallic roughness interface or null
     */
    _GLTFMaterialExporter.prototype._convertSpecularGlossinessTexturesToMetallicRoughnessAsync = function (diffuseTexture, specularGlossinessTexture, factors, mimeType) {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function () {
            var promises, scene, resizedTextures, diffuseSize, diffuseBuffer, specularGlossinessBuffer, width, height, diffusePixels, specularPixels, byteLength, metallicRoughnessBuffer, baseColorBuffer, strideSize, maxBaseColor, maxMetallic, maxRoughness, h, w, offset, diffuseColor, specularColor, glossiness, specularGlossiness, metallicRoughness, metallicRoughnessFactors_1, writeOutMetallicRoughnessTexture, writeOutBaseColorTexture, h, w, destinationOffset, linearBaseColorPixel, sRGBBaseColorPixel, metallicRoughnessPixel, promise, promise;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        promises = [];
                        if (!(diffuseTexture || specularGlossinessTexture)) {
                            return [2 /*return*/, Promise.reject("_ConvertSpecularGlosinessTexturesToMetallicRoughness: diffuse and specular glossiness textures are not defined!")];
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
                            diffuseBuffer = this._convertPixelArrayToFloat32(diffusePixels);
                        }
                        else {
                            return [2 /*return*/, Promise.reject("Failed to retrieve pixels from diffuse texture!")];
                        }
                        if (specularPixels) {
                            specularGlossinessBuffer = this._convertPixelArrayToFloat32(specularPixels);
                        }
                        else {
                            return [2 /*return*/, Promise.reject("Failed to retrieve pixels from specular glossiness texture!")];
                        }
                        byteLength = specularGlossinessBuffer.byteLength;
                        metallicRoughnessBuffer = new Uint8Array(byteLength);
                        baseColorBuffer = new Uint8Array(byteLength);
                        strideSize = 4;
                        maxBaseColor = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Color3.Black();
                        maxMetallic = 0;
                        maxRoughness = 0;
                        for (h = 0; h < height; ++h) {
                            for (w = 0; w < width; ++w) {
                                offset = (width * h + w) * strideSize;
                                diffuseColor = new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Color3(diffuseBuffer[offset], diffuseBuffer[offset + 1], diffuseBuffer[offset + 2]).toLinearSpace().multiply(factors.diffuseColor);
                                specularColor = new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Color3(specularGlossinessBuffer[offset], specularGlossinessBuffer[offset + 1], specularGlossinessBuffer[offset + 2])
                                    .toLinearSpace()
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
                                baseColorBuffer[destinationOffset] /= metallicRoughnessFactors_1.baseColor.r > _GLTFMaterialExporter._Epsilon ? metallicRoughnessFactors_1.baseColor.r : 1;
                                baseColorBuffer[destinationOffset + 1] /= metallicRoughnessFactors_1.baseColor.g > _GLTFMaterialExporter._Epsilon ? metallicRoughnessFactors_1.baseColor.g : 1;
                                baseColorBuffer[destinationOffset + 2] /= metallicRoughnessFactors_1.baseColor.b > _GLTFMaterialExporter._Epsilon ? metallicRoughnessFactors_1.baseColor.b : 1;
                                linearBaseColorPixel = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Color3.FromInts(baseColorBuffer[destinationOffset], baseColorBuffer[destinationOffset + 1], baseColorBuffer[destinationOffset + 2]);
                                sRGBBaseColorPixel = linearBaseColorPixel.toGammaSpace();
                                baseColorBuffer[destinationOffset] = sRGBBaseColorPixel.r * 255;
                                baseColorBuffer[destinationOffset + 1] = sRGBBaseColorPixel.g * 255;
                                baseColorBuffer[destinationOffset + 2] = sRGBBaseColorPixel.b * 255;
                                if (!_GLTFMaterialExporter._FuzzyEquals(sRGBBaseColorPixel, core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Color3.White(), _GLTFMaterialExporter._Epsilon)) {
                                    writeOutBaseColorTexture = true;
                                }
                                metallicRoughnessBuffer[destinationOffset + 1] /=
                                    metallicRoughnessFactors_1.roughness > _GLTFMaterialExporter._Epsilon ? metallicRoughnessFactors_1.roughness : 1;
                                metallicRoughnessBuffer[destinationOffset + 2] /= metallicRoughnessFactors_1.metallic > _GLTFMaterialExporter._Epsilon ? metallicRoughnessFactors_1.metallic : 1;
                                metallicRoughnessPixel = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Color3.FromInts(255, metallicRoughnessBuffer[destinationOffset + 1], metallicRoughnessBuffer[destinationOffset + 2]);
                                if (!_GLTFMaterialExporter._FuzzyEquals(metallicRoughnessPixel, core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Color3.White(), _GLTFMaterialExporter._Epsilon)) {
                                    writeOutMetallicRoughnessTexture = true;
                                }
                            }
                        }
                        if (writeOutMetallicRoughnessTexture) {
                            promise = this._createBase64FromCanvasAsync(metallicRoughnessBuffer, width, height, mimeType).then(function (metallicRoughnessBase64) {
                                metallicRoughnessFactors_1.metallicRoughnessTextureBase64 = metallicRoughnessBase64;
                            });
                            promises.push(promise);
                        }
                        if (writeOutBaseColorTexture) {
                            promise = this._createBase64FromCanvasAsync(baseColorBuffer, width, height, mimeType).then(function (baseColorBase64) {
                                metallicRoughnessFactors_1.baseColorTextureBase64 = baseColorBase64;
                            });
                            promises.push(promise);
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
    _GLTFMaterialExporter.prototype._convertSpecularGlossinessToMetallicRoughness = function (specularGlossiness) {
        var diffusePerceivedBrightness = this._getPerceivedBrightness(specularGlossiness.diffuseColor);
        var specularPerceivedBrightness = this._getPerceivedBrightness(specularGlossiness.specularColor);
        var oneMinusSpecularStrength = 1 - this._getMaxComponent(specularGlossiness.specularColor);
        var metallic = _GLTFMaterialExporter._SolveMetallic(diffusePerceivedBrightness, specularPerceivedBrightness, oneMinusSpecularStrength);
        var baseColorFromDiffuse = specularGlossiness.diffuseColor.scale(oneMinusSpecularStrength / (1.0 - _GLTFMaterialExporter._DielectricSpecular.r) / Math.max(1 - metallic, _GLTFMaterialExporter._Epsilon));
        var baseColorFromSpecular = specularGlossiness.specularColor
            .subtract(_GLTFMaterialExporter._DielectricSpecular.scale(1 - metallic))
            .scale(1 / Math.max(metallic, _GLTFMaterialExporter._Epsilon));
        var baseColor = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Color3.Lerp(baseColorFromDiffuse, baseColorFromSpecular, metallic * metallic);
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
    _GLTFMaterialExporter.prototype._getPerceivedBrightness = function (color) {
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
    _GLTFMaterialExporter.prototype._getMaxComponent = function (color) {
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
     * @param hasTextureCoords specifies if texture coordinates are present on the submesh to determine if textures should be applied
     * @returns glTF PBR Metallic Roughness factors
     */
    _GLTFMaterialExporter.prototype._convertMetalRoughFactorsToMetallicRoughnessAsync = function (babylonPBRMaterial, mimeType, glTFPbrMetallicRoughness, hasTextureCoords) {
        var promises = [];
        var baseColor = babylonPBRMaterial._albedoColor;
        var metallic = babylonPBRMaterial._metallic;
        var roughness = babylonPBRMaterial._roughness;
        var metallicRoughness = {
            baseColor: baseColor,
            metallic: metallic,
            roughness: roughness,
        };
        if (hasTextureCoords) {
            var albedoTexture = babylonPBRMaterial._albedoTexture;
            if (albedoTexture) {
                promises.push(this._exportTextureAsync(babylonPBRMaterial._albedoTexture, mimeType).then(function (glTFTexture) {
                    if (glTFTexture) {
                        glTFPbrMetallicRoughness.baseColorTexture = glTFTexture;
                    }
                }));
            }
            var metallicTexture = babylonPBRMaterial._metallicTexture;
            if (metallicTexture) {
                promises.push(this._exportTextureAsync(metallicTexture, mimeType).then(function (glTFTexture) {
                    if (glTFTexture) {
                        glTFPbrMetallicRoughness.metallicRoughnessTexture = glTFTexture;
                    }
                }));
            }
        }
        return Promise.all(promises).then(function () {
            return metallicRoughness;
        });
    };
    _GLTFMaterialExporter.prototype._getGLTFTextureSampler = function (texture) {
        var sampler = this._getGLTFTextureWrapModesSampler(texture);
        var samplingMode = texture instanceof core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Texture ? texture.samplingMode : null;
        if (samplingMode != null) {
            switch (samplingMode) {
                case core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Texture.LINEAR_LINEAR: {
                    sampler.magFilter = 9729 /* LINEAR */;
                    sampler.minFilter = 9729 /* LINEAR */;
                    break;
                }
                case core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Texture.LINEAR_NEAREST: {
                    sampler.magFilter = 9729 /* LINEAR */;
                    sampler.minFilter = 9728 /* NEAREST */;
                    break;
                }
                case core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Texture.NEAREST_LINEAR: {
                    sampler.magFilter = 9728 /* NEAREST */;
                    sampler.minFilter = 9729 /* LINEAR */;
                    break;
                }
                case core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Texture.NEAREST_LINEAR_MIPLINEAR: {
                    sampler.magFilter = 9728 /* NEAREST */;
                    sampler.minFilter = 9987 /* LINEAR_MIPMAP_LINEAR */;
                    break;
                }
                case core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Texture.NEAREST_NEAREST: {
                    sampler.magFilter = 9728 /* NEAREST */;
                    sampler.minFilter = 9728 /* NEAREST */;
                    break;
                }
                case core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Texture.NEAREST_LINEAR_MIPNEAREST: {
                    sampler.magFilter = 9728 /* NEAREST */;
                    sampler.minFilter = 9985 /* LINEAR_MIPMAP_NEAREST */;
                    break;
                }
                case core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Texture.LINEAR_NEAREST_MIPNEAREST: {
                    sampler.magFilter = 9729 /* LINEAR */;
                    sampler.minFilter = 9984 /* NEAREST_MIPMAP_NEAREST */;
                    break;
                }
                case core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Texture.LINEAR_NEAREST_MIPLINEAR: {
                    sampler.magFilter = 9729 /* LINEAR */;
                    sampler.minFilter = 9986 /* NEAREST_MIPMAP_LINEAR */;
                    break;
                }
                case core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Texture.NEAREST_NEAREST_MIPLINEAR: {
                    sampler.magFilter = 9728 /* NEAREST */;
                    sampler.minFilter = 9986 /* NEAREST_MIPMAP_LINEAR */;
                    break;
                }
                case core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Texture.LINEAR_LINEAR_MIPLINEAR: {
                    sampler.magFilter = 9729 /* LINEAR */;
                    sampler.minFilter = 9987 /* LINEAR_MIPMAP_LINEAR */;
                    break;
                }
                case core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Texture.LINEAR_LINEAR_MIPNEAREST: {
                    sampler.magFilter = 9729 /* LINEAR */;
                    sampler.minFilter = 9985 /* LINEAR_MIPMAP_NEAREST */;
                    break;
                }
                case core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Texture.NEAREST_NEAREST_MIPNEAREST: {
                    sampler.magFilter = 9728 /* NEAREST */;
                    sampler.minFilter = 9984 /* NEAREST_MIPMAP_NEAREST */;
                    break;
                }
            }
        }
        return sampler;
    };
    _GLTFMaterialExporter.prototype._getGLTFTextureWrapMode = function (wrapMode) {
        switch (wrapMode) {
            case core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Texture.WRAP_ADDRESSMODE: {
                return 10497 /* REPEAT */;
            }
            case core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Texture.CLAMP_ADDRESSMODE: {
                return 33071 /* CLAMP_TO_EDGE */;
            }
            case core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Texture.MIRROR_ADDRESSMODE: {
                return 33648 /* MIRRORED_REPEAT */;
            }
            default: {
                core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.Error("Unsupported Texture Wrap Mode ".concat(wrapMode, "!"));
                return 10497 /* REPEAT */;
            }
        }
    };
    _GLTFMaterialExporter.prototype._getGLTFTextureWrapModesSampler = function (texture) {
        var wrapS = this._getGLTFTextureWrapMode(texture instanceof core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Texture ? texture.wrapU : core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Texture.WRAP_ADDRESSMODE);
        var wrapT = this._getGLTFTextureWrapMode(texture instanceof core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Texture ? texture.wrapV : core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Texture.WRAP_ADDRESSMODE);
        if (wrapS === 10497 /* REPEAT */ && wrapT === 10497 /* REPEAT */) {
            // default wrapping mode in glTF, so omitting
            return {};
        }
        return { wrapS: wrapS, wrapT: wrapT };
    };
    /**
     * Convert a PBRMaterial (Specular/Glossiness) to Metallic Roughness factors
     * @param babylonPBRMaterial BJS PBR Metallic Roughness Material
     * @param mimeType mime type to use for the textures
     * @param glTFPbrMetallicRoughness glTF PBR Metallic Roughness interface
     * @param hasTextureCoords specifies if texture coordinates are present on the submesh to determine if textures should be applied
     * @returns glTF PBR Metallic Roughness factors
     */
    _GLTFMaterialExporter.prototype._convertSpecGlossFactorsToMetallicRoughnessAsync = function (babylonPBRMaterial, mimeType, glTFPbrMetallicRoughness, hasTextureCoords) {
        var _this = this;
        return Promise.resolve().then(function () {
            var samplers = _this._exporter._samplers;
            var textures = _this._exporter._textures;
            var diffuseColor = babylonPBRMaterial._albedoColor;
            var specularColor = babylonPBRMaterial._reflectivityColor;
            var glossiness = babylonPBRMaterial._microSurface;
            var specGloss = {
                diffuseColor: diffuseColor,
                specularColor: specularColor,
                glossiness: glossiness,
            };
            var samplerIndex = null;
            var albedoTexture = babylonPBRMaterial._albedoTexture;
            var reflectivityTexture = babylonPBRMaterial._reflectivityTexture;
            if (albedoTexture) {
                var sampler = _this._getGLTFTextureSampler(albedoTexture);
                if (sampler.magFilter != null && sampler.minFilter != null && sampler.wrapS != null && sampler.wrapT != null) {
                    samplers.push(sampler);
                    samplerIndex = samplers.length - 1;
                }
            }
            var useMicrosurfaceFromReflectivityMapAlpha = babylonPBRMaterial._useMicroSurfaceFromReflectivityMapAlpha;
            if (reflectivityTexture && !useMicrosurfaceFromReflectivityMapAlpha) {
                return Promise.reject("_ConvertPBRMaterial: Glossiness values not included in the reflectivity texture are currently not supported");
            }
            if ((albedoTexture || reflectivityTexture) && hasTextureCoords) {
                return _this._convertSpecularGlossinessTexturesToMetallicRoughnessAsync(albedoTexture, reflectivityTexture, specGloss, mimeType).then(function (metallicRoughnessFactors) {
                    if (metallicRoughnessFactors.baseColorTextureBase64) {
                        var glTFBaseColorTexture = _this._getTextureInfoFromBase64(metallicRoughnessFactors.baseColorTextureBase64, "bjsBaseColorTexture_" + textures.length + ".png", mimeType, albedoTexture ? albedoTexture.coordinatesIndex : null, samplerIndex);
                        if (glTFBaseColorTexture) {
                            glTFPbrMetallicRoughness.baseColorTexture = glTFBaseColorTexture;
                        }
                    }
                    if (metallicRoughnessFactors.metallicRoughnessTextureBase64) {
                        var glTFMRColorTexture = _this._getTextureInfoFromBase64(metallicRoughnessFactors.metallicRoughnessTextureBase64, "bjsMetallicRoughnessTexture_" + textures.length + ".png", mimeType, reflectivityTexture ? reflectivityTexture.coordinatesIndex : null, samplerIndex);
                        if (glTFMRColorTexture) {
                            glTFPbrMetallicRoughness.metallicRoughnessTexture = glTFMRColorTexture;
                        }
                    }
                    return metallicRoughnessFactors;
                });
            }
            else {
                return _this._convertSpecularGlossinessToMetallicRoughness(specGloss);
            }
        });
    };
    /**
     * Converts a Babylon PBR Base Material to a glTF Material
     * @param babylonPBRMaterial BJS PBR Base Material
     * @param mimeType mime type to use for the textures
     * @param hasTextureCoords specifies if texture coordinates are present on the submesh to determine if textures should be applied
     */
    _GLTFMaterialExporter.prototype._convertPBRMaterialAsync = function (babylonPBRMaterial, mimeType, hasTextureCoords) {
        var _this = this;
        var glTFPbrMetallicRoughness = {};
        var glTFMaterial = {
            name: babylonPBRMaterial.name,
        };
        var useMetallicRoughness = babylonPBRMaterial.isMetallicWorkflow();
        if (useMetallicRoughness) {
            var albedoColor = babylonPBRMaterial._albedoColor;
            var alpha = babylonPBRMaterial.alpha;
            if (albedoColor) {
                glTFPbrMetallicRoughness.baseColorFactor = [albedoColor.r, albedoColor.g, albedoColor.b, alpha];
            }
            return this._convertMetalRoughFactorsToMetallicRoughnessAsync(babylonPBRMaterial, mimeType, glTFPbrMetallicRoughness, hasTextureCoords).then(function (metallicRoughness) {
                return _this._setMetallicRoughnessPbrMaterial(metallicRoughness, babylonPBRMaterial, glTFMaterial, glTFPbrMetallicRoughness, mimeType, hasTextureCoords);
            });
        }
        else {
            return this._convertSpecGlossFactorsToMetallicRoughnessAsync(babylonPBRMaterial, mimeType, glTFPbrMetallicRoughness, hasTextureCoords).then(function (metallicRoughness) {
                return _this._setMetallicRoughnessPbrMaterial(metallicRoughness, babylonPBRMaterial, glTFMaterial, glTFPbrMetallicRoughness, mimeType, hasTextureCoords);
            });
        }
    };
    _GLTFMaterialExporter.prototype._setMetallicRoughnessPbrMaterial = function (metallicRoughness, babylonPBRMaterial, glTFMaterial, glTFPbrMetallicRoughness, mimeType, hasTextureCoords) {
        var materialMap = this._exporter._materialMap;
        var materials = this._exporter._materials;
        var promises = [];
        if (metallicRoughness) {
            _GLTFMaterialExporter._SetAlphaMode(glTFMaterial, babylonPBRMaterial);
            if (!(_GLTFMaterialExporter._FuzzyEquals(metallicRoughness.baseColor, core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Color3.White(), _GLTFMaterialExporter._Epsilon) &&
                babylonPBRMaterial.alpha >= _GLTFMaterialExporter._Epsilon)) {
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
                    core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.Warn(babylonPBRMaterial.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF.");
                }
                glTFMaterial.doubleSided = true;
            }
            if (hasTextureCoords) {
                var bumpTexture_1 = babylonPBRMaterial._bumpTexture;
                if (bumpTexture_1) {
                    var promise = this._exportTextureAsync(bumpTexture_1, mimeType).then(function (glTFTexture) {
                        if (glTFTexture) {
                            glTFMaterial.normalTexture = glTFTexture;
                            if (bumpTexture_1.level !== 1) {
                                glTFMaterial.normalTexture.scale = bumpTexture_1.level;
                            }
                        }
                    });
                    promises.push(promise);
                }
                var ambientTexture = babylonPBRMaterial._ambientTexture;
                if (ambientTexture) {
                    var promise = this._exportTextureAsync(ambientTexture, mimeType).then(function (glTFTexture) {
                        if (glTFTexture) {
                            var occlusionTexture = {
                                index: glTFTexture.index,
                                texCoord: glTFTexture.texCoord,
                            };
                            glTFMaterial.occlusionTexture = occlusionTexture;
                            var ambientTextureStrength = babylonPBRMaterial._ambientTextureStrength;
                            if (ambientTextureStrength) {
                                occlusionTexture.strength = ambientTextureStrength;
                            }
                        }
                    });
                    promises.push(promise);
                }
                var emissiveTexture = babylonPBRMaterial._emissiveTexture;
                if (emissiveTexture) {
                    var promise = this._exportTextureAsync(emissiveTexture, mimeType).then(function (glTFTexture) {
                        if (glTFTexture) {
                            glTFMaterial.emissiveTexture = glTFTexture;
                        }
                    });
                    promises.push(promise);
                }
            }
            var emissiveColor = babylonPBRMaterial._emissiveColor;
            if (!_GLTFMaterialExporter._FuzzyEquals(emissiveColor, core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Color3.Black(), _GLTFMaterialExporter._Epsilon)) {
                glTFMaterial.emissiveFactor = emissiveColor.asArray();
            }
            glTFMaterial.pbrMetallicRoughness = glTFPbrMetallicRoughness;
            materials.push(glTFMaterial);
            materialMap[babylonPBRMaterial.uniqueId] = materials.length - 1;
        }
        return this._finishMaterial(promises, glTFMaterial, babylonPBRMaterial, mimeType);
    };
    _GLTFMaterialExporter.prototype._getPixelsFromTexture = function (babylonTexture) {
        var pixels = babylonTexture.textureType === core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Constants.TEXTURETYPE_UNSIGNED_INT
            ? babylonTexture.readPixels()
            : babylonTexture.readPixels();
        return pixels;
    };
    /**
     * Extracts a texture from a Babylon texture into file data and glTF data
     * @param babylonTexture Babylon texture to extract
     * @param mimeType Mime Type of the babylonTexture
     * @return glTF texture info, or null if the texture format is not supported
     */
    _GLTFMaterialExporter.prototype._exportTextureAsync = function (babylonTexture, mimeType) {
        var _this = this;
        var extensionPromise = this._exporter._extensionsPreExportTextureAsync("exporter", babylonTexture, mimeType);
        if (!extensionPromise) {
            return this._exportTextureInfoAsync(babylonTexture, mimeType);
        }
        return extensionPromise.then(function (texture) {
            if (!texture) {
                return _this._exportTextureInfoAsync(babylonTexture, mimeType);
            }
            return _this._exportTextureInfoAsync(texture, mimeType);
        });
    };
    _GLTFMaterialExporter.prototype._exportTextureInfoAsync = function (babylonTexture, mimeType) {
        var _this = this;
        return Promise.resolve().then(function () { return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(_this, void 0, void 0, function () {
            var textureUid, pixels, samplers, sampler, samplerIndex_1, foundSamplerIndex, i, s, size;
            var _this = this;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        textureUid = babylonTexture.uid;
                        if (!(textureUid in this._textureMap)) return [3 /*break*/, 1];
                        return [2 /*return*/, this._textureMap[textureUid]];
                    case 1: return [4 /*yield*/, this._getPixelsFromTexture(babylonTexture)];
                    case 2:
                        pixels = _a.sent();
                        if (!pixels) {
                            return [2 /*return*/, null];
                        }
                        samplers = this._exporter._samplers;
                        sampler = this._getGLTFTextureSampler(babylonTexture);
                        samplerIndex_1 = null;
                        foundSamplerIndex = null;
                        for (i = 0; i < samplers.length; ++i) {
                            s = samplers[i];
                            if (s.minFilter === sampler.minFilter && s.magFilter === sampler.magFilter && s.wrapS === sampler.wrapS && s.wrapT === sampler.wrapT) {
                                foundSamplerIndex = i;
                                break;
                            }
                        }
                        if (foundSamplerIndex == null) {
                            samplers.push(sampler);
                            samplerIndex_1 = samplers.length - 1;
                        }
                        else {
                            samplerIndex_1 = foundSamplerIndex;
                        }
                        size = babylonTexture.getSize();
                        // Preserve texture mime type if defined
                        if (babylonTexture.mimeType) {
                            switch (babylonTexture.mimeType) {
                                case "image/jpeg":
                                    mimeType = "image/jpeg" /* JPEG */;
                                    break;
                                case "image/png":
                                    mimeType = "image/png" /* PNG */;
                                    break;
                            }
                        }
                        return [2 /*return*/, this._createBase64FromCanvasAsync(pixels, size.width, size.height, mimeType).then(function (base64Data) {
                                var textureInfo = _this._getTextureInfoFromBase64(base64Data, babylonTexture.name.replace(/\.\/|\/|\.\\|\\/g, "_"), mimeType, babylonTexture.coordinatesIndex, samplerIndex_1);
                                if (textureInfo) {
                                    _this._textureMap[textureUid] = textureInfo;
                                    _this._exporter._extensionsPostExportTextures("linkTextureInfo", textureInfo, babylonTexture);
                                }
                                return textureInfo;
                            })];
                }
            });
        }); });
    };
    /**
     * Builds a texture from base64 string
     * @param base64Texture base64 texture string
     * @param baseTextureName Name to use for the texture
     * @param mimeType image mime type for the texture
     * @param texCoordIndex
     * @param samplerIndex
     * @returns glTF texture info, or null if the texture format is not supported
     */
    _GLTFMaterialExporter.prototype._getTextureInfoFromBase64 = function (base64Texture, baseTextureName, mimeType, texCoordIndex, samplerIndex) {
        var textures = this._exporter._textures;
        var images = this._exporter._images;
        var imageData = this._exporter._imageData;
        var textureInfo = null;
        var glTFTexture = {
            source: images.length,
            name: baseTextureName,
        };
        if (samplerIndex != null) {
            glTFTexture.sampler = samplerIndex;
        }
        var binStr = atob(base64Texture.split(",")[1]);
        var arrBuff = new ArrayBuffer(binStr.length);
        var arr = new Uint8Array(arrBuff);
        for (var i = 0, length_2 = binStr.length; i < length_2; ++i) {
            arr[i] = binStr.charCodeAt(i);
        }
        var imageValues = { data: arr, mimeType: mimeType };
        var extension = mimeType === "image/jpeg" /* JPEG */ ? ".jpeg" : ".png";
        var textureName = baseTextureName + extension;
        var originalTextureName = textureName;
        if (textureName in imageData) {
            textureName = "".concat(baseTextureName, "_").concat(core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.RandomId()).concat(extension);
        }
        imageData[textureName] = imageValues;
        if (mimeType === "image/jpeg" /* JPEG */ || mimeType === "image/png" /* PNG */) {
            var glTFImage = {
                name: baseTextureName,
                uri: textureName,
            };
            var foundIndex = null;
            for (var i = 0; i < images.length; ++i) {
                if (images[i].uri === originalTextureName) {
                    foundIndex = i;
                    break;
                }
            }
            if (foundIndex == null) {
                images.push(glTFImage);
                glTFTexture.source = images.length - 1;
            }
            else {
                glTFTexture.source = foundIndex;
            }
            textures.push(glTFTexture);
            textureInfo = {
                index: textures.length - 1,
            };
            if (texCoordIndex != null) {
                textureInfo.texCoord = texCoordIndex;
            }
        }
        else {
            core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.Error("Unsupported texture mime type ".concat(mimeType));
        }
        return textureInfo;
    };
    /**
     * Represents the dielectric specular values for R, G and B
     */
    _GLTFMaterialExporter._DielectricSpecular = new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Color3(0.04, 0.04, 0.04);
    /**
     * Allows the maximum specular power to be defined for material calculations
     */
    _GLTFMaterialExporter._MaxSpecularPower = 1024;
    /**
     * Numeric tolerance value
     */
    _GLTFMaterialExporter._Epsilon = 1e-6;
    return _GLTFMaterialExporter;
}());



/***/ }),

/***/ "../../../lts/serializers/dist/glTF/2.0/glTFSerializer.js":
/*!****************************************************************!*\
  !*** ../../../lts/serializers/dist/glTF/2.0/glTFSerializer.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GLTF2Export": () => (/* binding */ GLTF2Export)
/* harmony export */ });
/* harmony import */ var _glTFExporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glTFExporter */ "../../../lts/serializers/dist/glTF/2.0/glTFExporter.js");

/**
 * Class for generating glTF data from a Babylon scene.
 */
var GLTF2Export = /** @class */ (function () {
    function GLTF2Export() {
    }
    /**
     * Exports the geometry of the scene to .gltf file format asynchronously
     * @param scene Babylon scene with scene hierarchy information
     * @param filePrefix File prefix to use when generating the glTF file
     * @param options Exporter options
     * @returns Returns an object with a .gltf file and associates texture names
     * as keys and their data and paths as values
     */
    GLTF2Export.GLTFAsync = function (scene, filePrefix, options) {
        return scene.whenReadyAsync().then(function () {
            var glTFPrefix = filePrefix.replace(/\.[^/.]+$/, "");
            var gltfGenerator = new _glTFExporter__WEBPACK_IMPORTED_MODULE_0__._Exporter(scene, options);
            return gltfGenerator._generateGLTFAsync(glTFPrefix);
        });
    };
    GLTF2Export._PreExportAsync = function (scene, options) {
        return Promise.resolve().then(function () {
            if (options && options.exportWithoutWaitingForScene) {
                return Promise.resolve();
            }
            else {
                return scene.whenReadyAsync();
            }
        });
    };
    GLTF2Export._PostExportAsync = function (scene, glTFData, options) {
        return Promise.resolve().then(function () {
            if (options && options.exportWithoutWaitingForScene) {
                return glTFData;
            }
            else {
                return glTFData;
            }
        });
    };
    /**
     * Exports the geometry of the scene to .glb file format asychronously
     * @param scene Babylon scene with scene hierarchy information
     * @param filePrefix File prefix to use when generating glb file
     * @param options Exporter options
     * @returns Returns an object with a .glb filename as key and data as value
     */
    GLTF2Export.GLBAsync = function (scene, filePrefix, options) {
        var _this = this;
        return this._PreExportAsync(scene, options).then(function () {
            var glTFPrefix = filePrefix.replace(/\.[^/.]+$/, "");
            var gltfGenerator = new _glTFExporter__WEBPACK_IMPORTED_MODULE_0__._Exporter(scene, options);
            return gltfGenerator._generateGLBAsync(glTFPrefix).then(function (glTFData) {
                return _this._PostExportAsync(scene, glTFData, options);
            });
        });
    };
    return GLTF2Export;
}());



/***/ }),

/***/ "../../../lts/serializers/dist/glTF/2.0/glTFUtilities.js":
/*!***************************************************************!*\
  !*** ../../../lts/serializers/dist/glTF/2.0/glTFUtilities.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_GLTFUtilities": () => (/* binding */ _GLTFUtilities)
/* harmony export */ });
/* harmony import */ var core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/Maths/math.vector */ "core/Maths/math.vector");
/* harmony import */ var core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @hidden
 */
var _GLTFUtilities = /** @class */ (function () {
    function _GLTFUtilities() {
    }
    /**
     * Creates a buffer view based on the supplied arguments
     * @param bufferIndex index value of the specified buffer
     * @param byteOffset byte offset value
     * @param byteLength byte length of the bufferView
     * @param byteStride byte distance between conequential elements
     * @param name name of the buffer view
     * @returns bufferView for glTF
     */
    _GLTFUtilities._CreateBufferView = function (bufferIndex, byteOffset, byteLength, byteStride, name) {
        var bufferview = { buffer: bufferIndex, byteLength: byteLength };
        if (byteOffset) {
            bufferview.byteOffset = byteOffset;
        }
        if (name) {
            bufferview.name = name;
        }
        if (byteStride) {
            bufferview.byteStride = byteStride;
        }
        return bufferview;
    };
    /**
     * Creates an accessor based on the supplied arguments
     * @param bufferviewIndex The index of the bufferview referenced by this accessor
     * @param name The name of the accessor
     * @param type The type of the accessor
     * @param componentType The datatype of components in the attribute
     * @param count The number of attributes referenced by this accessor
     * @param byteOffset The offset relative to the start of the bufferView in bytes
     * @param min Minimum value of each component in this attribute
     * @param max Maximum value of each component in this attribute
     * @returns accessor for glTF
     */
    _GLTFUtilities._CreateAccessor = function (bufferviewIndex, name, type, componentType, count, byteOffset, min, max) {
        var accessor = { name: name, bufferView: bufferviewIndex, componentType: componentType, count: count, type: type };
        if (min != null) {
            accessor.min = min;
        }
        if (max != null) {
            accessor.max = max;
        }
        if (byteOffset != null) {
            accessor.byteOffset = byteOffset;
        }
        return accessor;
    };
    /**
     * Calculates the minimum and maximum values of an array of position floats
     * @param positions Positions array of a mesh
     * @param vertexStart Starting vertex offset to calculate min and max values
     * @param vertexCount Number of vertices to check for min and max values
     * @param convertToRightHandedSystem
     * @returns min number array and max number array
     */
    _GLTFUtilities._CalculateMinMaxPositions = function (positions, vertexStart, vertexCount, convertToRightHandedSystem) {
        var min = [Infinity, Infinity, Infinity];
        var max = [-Infinity, -Infinity, -Infinity];
        var positionStrideSize = 3;
        var indexOffset;
        var position;
        var vector;
        if (vertexCount) {
            for (var i = vertexStart, length_1 = vertexStart + vertexCount; i < length_1; ++i) {
                indexOffset = positionStrideSize * i;
                position = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArray(positions, indexOffset);
                if (convertToRightHandedSystem) {
                    _GLTFUtilities._GetRightHandedPositionVector3FromRef(position);
                }
                vector = position.asArray();
                for (var j = 0; j < positionStrideSize; ++j) {
                    var num = vector[j];
                    if (num < min[j]) {
                        min[j] = num;
                    }
                    if (num > max[j]) {
                        max[j] = num;
                    }
                    ++indexOffset;
                }
            }
        }
        return { min: min, max: max };
    };
    /**
     * Converts a new right-handed Vector3
     * @param vector vector3 array
     * @returns right-handed Vector3
     */
    _GLTFUtilities._GetRightHandedPositionVector3 = function (vector) {
        return new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3(vector.x, vector.y, -vector.z);
    };
    /**
     * Converts a Vector3 to right-handed
     * @param vector Vector3 to convert to right-handed
     */
    _GLTFUtilities._GetRightHandedPositionVector3FromRef = function (vector) {
        vector.z *= -1;
    };
    /**
     * Converts a three element number array to right-handed
     * @param vector number array to convert to right-handed
     */
    _GLTFUtilities._GetRightHandedPositionArray3FromRef = function (vector) {
        vector[2] *= -1;
    };
    /**
     * Converts a new right-handed Vector3
     * @param vector vector3 array
     * @returns right-handed Vector3
     */
    _GLTFUtilities._GetRightHandedNormalVector3 = function (vector) {
        return new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3(vector.x, vector.y, -vector.z);
    };
    /**
     * Converts a Vector3 to right-handed
     * @param vector Vector3 to convert to right-handed
     */
    _GLTFUtilities._GetRightHandedNormalVector3FromRef = function (vector) {
        vector.z *= -1;
    };
    /**
     * Converts a three element number array to right-handed
     * @param vector number array to convert to right-handed
     */
    _GLTFUtilities._GetRightHandedNormalArray3FromRef = function (vector) {
        vector[2] *= -1;
    };
    /**
     * Converts a Vector4 to right-handed
     * @param vector Vector4 to convert to right-handed
     */
    _GLTFUtilities._GetRightHandedVector4FromRef = function (vector) {
        vector.z *= -1;
        vector.w *= -1;
    };
    /**
     * Converts a Vector4 to right-handed
     * @param vector Vector4 to convert to right-handed
     */
    _GLTFUtilities._GetRightHandedArray4FromRef = function (vector) {
        vector[2] *= -1;
        vector[3] *= -1;
    };
    /**
     * Converts a Quaternion to right-handed
     * @param quaternion Source quaternion to convert to right-handed
     */
    _GLTFUtilities._GetRightHandedQuaternionFromRef = function (quaternion) {
        quaternion.x *= -1;
        quaternion.y *= -1;
    };
    /**
     * Converts a Quaternion to right-handed
     * @param quaternion Source quaternion to convert to right-handed
     */
    _GLTFUtilities._GetRightHandedQuaternionArrayFromRef = function (quaternion) {
        quaternion[0] *= -1;
        quaternion[1] *= -1;
    };
    _GLTFUtilities._NormalizeTangentFromRef = function (tangent) {
        var length = Math.sqrt(tangent.x * tangent.x + tangent.y * tangent.y + tangent.z * tangent.z);
        if (length > 0) {
            tangent.x /= length;
            tangent.y /= length;
            tangent.z /= length;
        }
    };
    _GLTFUtilities._GetDataAccessorElementCount = function (accessorType) {
        switch (accessorType) {
            case "MAT2" /* MAT2 */:
                return 4;
            case "MAT3" /* MAT3 */:
                return 9;
            case "MAT4" /* MAT4 */:
                return 16;
            case "SCALAR" /* SCALAR */:
                return 1;
            case "VEC2" /* VEC2 */:
                return 2;
            case "VEC3" /* VEC3 */:
                return 3;
            case "VEC4" /* VEC4 */:
                return 4;
        }
    };
    return _GLTFUtilities;
}());



/***/ }),

/***/ "../../../lts/serializers/dist/glTF/2.0/index.js":
/*!*******************************************************!*\
  !*** ../../../lts/serializers/dist/glTF/2.0/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GLTF2Export": () => (/* reexport safe */ _glTFSerializer__WEBPACK_IMPORTED_MODULE_5__.GLTF2Export),
/* harmony export */   "GLTFData": () => (/* reexport safe */ _glTFData__WEBPACK_IMPORTED_MODULE_1__.GLTFData),
/* harmony export */   "KHR_lights_punctual": () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_7__.KHR_lights_punctual),
/* harmony export */   "KHR_materials_clearcoat": () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_7__.KHR_materials_clearcoat),
/* harmony export */   "KHR_materials_iridescence": () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_7__.KHR_materials_iridescence),
/* harmony export */   "KHR_materials_sheen": () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_7__.KHR_materials_sheen),
/* harmony export */   "KHR_materials_specular": () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_7__.KHR_materials_specular),
/* harmony export */   "KHR_materials_unlit": () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_7__.KHR_materials_unlit),
/* harmony export */   "KHR_texture_transform": () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_7__.KHR_texture_transform),
/* harmony export */   "_BinaryWriter": () => (/* reexport safe */ _glTFExporter__WEBPACK_IMPORTED_MODULE_2__._BinaryWriter),
/* harmony export */   "_Exporter": () => (/* reexport safe */ _glTFExporter__WEBPACK_IMPORTED_MODULE_2__._Exporter),
/* harmony export */   "_GLTFAnimation": () => (/* reexport safe */ _glTFAnimation__WEBPACK_IMPORTED_MODULE_0__._GLTFAnimation),
/* harmony export */   "_GLTFMaterialExporter": () => (/* reexport safe */ _glTFMaterialExporter__WEBPACK_IMPORTED_MODULE_4__._GLTFMaterialExporter),
/* harmony export */   "_GLTFUtilities": () => (/* reexport safe */ _glTFUtilities__WEBPACK_IMPORTED_MODULE_6__._GLTFUtilities),
/* harmony export */   "__IGLTFExporterExtensionV2": () => (/* reexport safe */ _glTFExporterExtension__WEBPACK_IMPORTED_MODULE_3__.__IGLTFExporterExtensionV2)
/* harmony export */ });
/* harmony import */ var _glTFAnimation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glTFAnimation */ "../../../lts/serializers/dist/glTF/2.0/glTFAnimation.js");
/* harmony import */ var _glTFData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./glTFData */ "../../../lts/serializers/dist/glTF/2.0/glTFData.js");
/* harmony import */ var _glTFExporter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./glTFExporter */ "../../../lts/serializers/dist/glTF/2.0/glTFExporter.js");
/* harmony import */ var _glTFExporterExtension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./glTFExporterExtension */ "../../../lts/serializers/dist/glTF/2.0/glTFExporterExtension.js");
/* harmony import */ var _glTFMaterialExporter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./glTFMaterialExporter */ "../../../lts/serializers/dist/glTF/2.0/glTFMaterialExporter.js");
/* harmony import */ var _glTFSerializer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./glTFSerializer */ "../../../lts/serializers/dist/glTF/2.0/glTFSerializer.js");
/* harmony import */ var _glTFUtilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./glTFUtilities */ "../../../lts/serializers/dist/glTF/2.0/glTFUtilities.js");
/* harmony import */ var _Extensions_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Extensions/index */ "../../../lts/serializers/dist/glTF/2.0/Extensions/index.js");
/* eslint-disable import/no-internal-modules */










/***/ }),

/***/ "../../../lts/serializers/dist/glTF/2.0/shaders/textureTransform.fragment.js":
/*!***********************************************************************************!*\
  !*** ../../../lts/serializers/dist/glTF/2.0/shaders/textureTransform.fragment.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "textureTransformPixelShader": () => (/* binding */ textureTransformPixelShader)
/* harmony export */ });
/* harmony import */ var core_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/Engines/shaderStore */ "core/Maths/math.vector");
/* harmony import */ var core_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__);
// Do not edit.

var name = "textureTransformPixelShader";
var shader = "precision highp float;varying vec2 vUV;uniform sampler2D textureSampler;uniform mat4 textureTransformMat;void main(void) {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\nvec2 uvTransformed=(textureTransformMat*vec4(vUV.xy,1,1)).xy;gl_FragColor=texture2D(textureSampler,uvTransformed);\n#define CUSTOM_FRAGMENT_MAIN_END\n}";
// Sideeffect
core_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name] = shader;
/** @hidden */
var textureTransformPixelShader = { name: name, shader: shader };


/***/ }),

/***/ "../../../lts/serializers/dist/glTF/glTFFileExporter.js":
/*!**************************************************************!*\
  !*** ../../../lts/serializers/dist/glTF/glTFFileExporter.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__IGLTFExporterExtension": () => (/* binding */ __IGLTFExporterExtension)
/* harmony export */ });
/** @hidden */
// eslint-disable-next-line no-var, @typescript-eslint/naming-convention
var __IGLTFExporterExtension = 0; // I am here to allow dts to be created


/***/ }),

/***/ "../../../lts/serializers/dist/glTF/index.js":
/*!***************************************************!*\
  !*** ../../../lts/serializers/dist/glTF/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GLTF2Export": () => (/* reexport safe */ _2_0_index__WEBPACK_IMPORTED_MODULE_1__.GLTF2Export),
/* harmony export */   "GLTFData": () => (/* reexport safe */ _2_0_index__WEBPACK_IMPORTED_MODULE_1__.GLTFData),
/* harmony export */   "KHR_lights_punctual": () => (/* reexport safe */ _2_0_index__WEBPACK_IMPORTED_MODULE_1__.KHR_lights_punctual),
/* harmony export */   "KHR_materials_clearcoat": () => (/* reexport safe */ _2_0_index__WEBPACK_IMPORTED_MODULE_1__.KHR_materials_clearcoat),
/* harmony export */   "KHR_materials_iridescence": () => (/* reexport safe */ _2_0_index__WEBPACK_IMPORTED_MODULE_1__.KHR_materials_iridescence),
/* harmony export */   "KHR_materials_sheen": () => (/* reexport safe */ _2_0_index__WEBPACK_IMPORTED_MODULE_1__.KHR_materials_sheen),
/* harmony export */   "KHR_materials_specular": () => (/* reexport safe */ _2_0_index__WEBPACK_IMPORTED_MODULE_1__.KHR_materials_specular),
/* harmony export */   "KHR_materials_unlit": () => (/* reexport safe */ _2_0_index__WEBPACK_IMPORTED_MODULE_1__.KHR_materials_unlit),
/* harmony export */   "KHR_texture_transform": () => (/* reexport safe */ _2_0_index__WEBPACK_IMPORTED_MODULE_1__.KHR_texture_transform),
/* harmony export */   "_BinaryWriter": () => (/* reexport safe */ _2_0_index__WEBPACK_IMPORTED_MODULE_1__._BinaryWriter),
/* harmony export */   "_Exporter": () => (/* reexport safe */ _2_0_index__WEBPACK_IMPORTED_MODULE_1__._Exporter),
/* harmony export */   "_GLTFAnimation": () => (/* reexport safe */ _2_0_index__WEBPACK_IMPORTED_MODULE_1__._GLTFAnimation),
/* harmony export */   "_GLTFMaterialExporter": () => (/* reexport safe */ _2_0_index__WEBPACK_IMPORTED_MODULE_1__._GLTFMaterialExporter),
/* harmony export */   "_GLTFUtilities": () => (/* reexport safe */ _2_0_index__WEBPACK_IMPORTED_MODULE_1__._GLTFUtilities),
/* harmony export */   "__IGLTFExporterExtension": () => (/* reexport safe */ _glTFFileExporter__WEBPACK_IMPORTED_MODULE_0__.__IGLTFExporterExtension),
/* harmony export */   "__IGLTFExporterExtensionV2": () => (/* reexport safe */ _2_0_index__WEBPACK_IMPORTED_MODULE_1__.__IGLTFExporterExtensionV2)
/* harmony export */ });
/* harmony import */ var _glTFFileExporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glTFFileExporter */ "../../../lts/serializers/dist/glTF/glTFFileExporter.js");
/* harmony import */ var _2_0_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./2.0/index */ "../../../lts/serializers/dist/glTF/2.0/index.js");
/* eslint-disable import/no-internal-modules */




/***/ }),

/***/ "../../../lts/serializers/dist/index.js":
/*!**********************************************!*\
  !*** ../../../lts/serializers/dist/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GLTF2Export": () => (/* reexport safe */ _glTF_index__WEBPACK_IMPORTED_MODULE_1__.GLTF2Export),
/* harmony export */   "GLTFData": () => (/* reexport safe */ _glTF_index__WEBPACK_IMPORTED_MODULE_1__.GLTFData),
/* harmony export */   "KHR_lights_punctual": () => (/* reexport safe */ _glTF_index__WEBPACK_IMPORTED_MODULE_1__.KHR_lights_punctual),
/* harmony export */   "KHR_materials_clearcoat": () => (/* reexport safe */ _glTF_index__WEBPACK_IMPORTED_MODULE_1__.KHR_materials_clearcoat),
/* harmony export */   "KHR_materials_iridescence": () => (/* reexport safe */ _glTF_index__WEBPACK_IMPORTED_MODULE_1__.KHR_materials_iridescence),
/* harmony export */   "KHR_materials_sheen": () => (/* reexport safe */ _glTF_index__WEBPACK_IMPORTED_MODULE_1__.KHR_materials_sheen),
/* harmony export */   "KHR_materials_specular": () => (/* reexport safe */ _glTF_index__WEBPACK_IMPORTED_MODULE_1__.KHR_materials_specular),
/* harmony export */   "KHR_materials_unlit": () => (/* reexport safe */ _glTF_index__WEBPACK_IMPORTED_MODULE_1__.KHR_materials_unlit),
/* harmony export */   "KHR_texture_transform": () => (/* reexport safe */ _glTF_index__WEBPACK_IMPORTED_MODULE_1__.KHR_texture_transform),
/* harmony export */   "OBJExport": () => (/* reexport safe */ _OBJ_index__WEBPACK_IMPORTED_MODULE_0__.OBJExport),
/* harmony export */   "STLExport": () => (/* reexport safe */ _stl_index__WEBPACK_IMPORTED_MODULE_2__.STLExport),
/* harmony export */   "_BinaryWriter": () => (/* reexport safe */ _glTF_index__WEBPACK_IMPORTED_MODULE_1__._BinaryWriter),
/* harmony export */   "_Exporter": () => (/* reexport safe */ _glTF_index__WEBPACK_IMPORTED_MODULE_1__._Exporter),
/* harmony export */   "_GLTFAnimation": () => (/* reexport safe */ _glTF_index__WEBPACK_IMPORTED_MODULE_1__._GLTFAnimation),
/* harmony export */   "_GLTFMaterialExporter": () => (/* reexport safe */ _glTF_index__WEBPACK_IMPORTED_MODULE_1__._GLTFMaterialExporter),
/* harmony export */   "_GLTFUtilities": () => (/* reexport safe */ _glTF_index__WEBPACK_IMPORTED_MODULE_1__._GLTFUtilities),
/* harmony export */   "__IGLTFExporterExtension": () => (/* reexport safe */ _glTF_index__WEBPACK_IMPORTED_MODULE_1__.__IGLTFExporterExtension),
/* harmony export */   "__IGLTFExporterExtensionV2": () => (/* reexport safe */ _glTF_index__WEBPACK_IMPORTED_MODULE_1__.__IGLTFExporterExtensionV2)
/* harmony export */ });
/* harmony import */ var _OBJ_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OBJ/index */ "../../../lts/serializers/dist/OBJ/index.js");
/* harmony import */ var _glTF_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./glTF/index */ "../../../lts/serializers/dist/glTF/index.js");
/* harmony import */ var _stl_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stl/index */ "../../../lts/serializers/dist/stl/index.js");
/* eslint-disable import/no-internal-modules */





/***/ }),

/***/ "../../../lts/serializers/dist/legacy/legacy-glTF2Serializer.js":
/*!**********************************************************************!*\
  !*** ../../../lts/serializers/dist/legacy/legacy-glTF2Serializer.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GLTF2Export": () => (/* reexport safe */ _glTF_2_0_index__WEBPACK_IMPORTED_MODULE_4__.GLTF2Export),
/* harmony export */   "GLTFData": () => (/* reexport safe */ _glTF_2_0_index__WEBPACK_IMPORTED_MODULE_4__.GLTFData),
/* harmony export */   "KHR_lights_punctual": () => (/* reexport safe */ _glTF_2_0_index__WEBPACK_IMPORTED_MODULE_4__.KHR_lights_punctual),
/* harmony export */   "KHR_materials_clearcoat": () => (/* reexport safe */ _glTF_2_0_index__WEBPACK_IMPORTED_MODULE_4__.KHR_materials_clearcoat),
/* harmony export */   "KHR_materials_iridescence": () => (/* reexport safe */ _glTF_2_0_index__WEBPACK_IMPORTED_MODULE_4__.KHR_materials_iridescence),
/* harmony export */   "KHR_materials_sheen": () => (/* reexport safe */ _glTF_2_0_index__WEBPACK_IMPORTED_MODULE_4__.KHR_materials_sheen),
/* harmony export */   "KHR_materials_specular": () => (/* reexport safe */ _glTF_2_0_index__WEBPACK_IMPORTED_MODULE_4__.KHR_materials_specular),
/* harmony export */   "KHR_materials_unlit": () => (/* reexport safe */ _glTF_2_0_index__WEBPACK_IMPORTED_MODULE_4__.KHR_materials_unlit),
/* harmony export */   "KHR_texture_transform": () => (/* reexport safe */ _glTF_2_0_index__WEBPACK_IMPORTED_MODULE_4__.KHR_texture_transform),
/* harmony export */   "_BinaryWriter": () => (/* reexport safe */ _glTF_2_0_index__WEBPACK_IMPORTED_MODULE_4__._BinaryWriter),
/* harmony export */   "_Exporter": () => (/* reexport safe */ _glTF_2_0_index__WEBPACK_IMPORTED_MODULE_4__._Exporter),
/* harmony export */   "_GLTFAnimation": () => (/* reexport safe */ _glTF_2_0_index__WEBPACK_IMPORTED_MODULE_4__._GLTFAnimation),
/* harmony export */   "_GLTFMaterialExporter": () => (/* reexport safe */ _glTF_2_0_index__WEBPACK_IMPORTED_MODULE_4__._GLTFMaterialExporter),
/* harmony export */   "_GLTFUtilities": () => (/* reexport safe */ _glTF_2_0_index__WEBPACK_IMPORTED_MODULE_4__._GLTFUtilities),
/* harmony export */   "__IGLTFExporterExtension": () => (/* reexport safe */ _glTF_glTFFileExporter__WEBPACK_IMPORTED_MODULE_0__.__IGLTFExporterExtension),
/* harmony export */   "__IGLTFExporterExtensionV2": () => (/* reexport safe */ _glTF_2_0_index__WEBPACK_IMPORTED_MODULE_4__.__IGLTFExporterExtensionV2)
/* harmony export */ });
/* harmony import */ var _glTF_glTFFileExporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../glTF/glTFFileExporter */ "../../../lts/serializers/dist/glTF/glTFFileExporter.js");
/* harmony import */ var _glTF_2_0_glTFData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../glTF/2.0/glTFData */ "../../../lts/serializers/dist/glTF/2.0/glTFData.js");
/* harmony import */ var _glTF_2_0_glTFSerializer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../glTF/2.0/glTFSerializer */ "../../../lts/serializers/dist/glTF/2.0/glTFSerializer.js");
/* harmony import */ var _glTF_2_0_Extensions_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../glTF/2.0/Extensions/index */ "../../../lts/serializers/dist/glTF/2.0/Extensions/index.js");
/* harmony import */ var _glTF_2_0_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../glTF/2.0/index */ "../../../lts/serializers/dist/glTF/2.0/index.js");
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
    for (var key in _glTF_glTFFileExporter__WEBPACK_IMPORTED_MODULE_0__) {
        BABYLON_1[key] = _glTF_glTFFileExporter__WEBPACK_IMPORTED_MODULE_0__[key];
        keys.push(key);
    }
    for (var key in _glTF_2_0_glTFData__WEBPACK_IMPORTED_MODULE_1__) {
        BABYLON_1[key] = _glTF_2_0_glTFData__WEBPACK_IMPORTED_MODULE_1__[key];
        keys.push(key);
    }
    for (var key in _glTF_2_0_glTFSerializer__WEBPACK_IMPORTED_MODULE_2__) {
        BABYLON_1[key] = _glTF_2_0_glTFSerializer__WEBPACK_IMPORTED_MODULE_2__[key];
        keys.push(key);
    }
    for (var key in _glTF_2_0_Extensions_index__WEBPACK_IMPORTED_MODULE_3__) {
        BABYLON_1.GLTF2.Exporter.Extensions[key] = _glTF_2_0_Extensions_index__WEBPACK_IMPORTED_MODULE_3__[key];
        keys.push(key);
    }
    for (var key in _glTF_2_0_index__WEBPACK_IMPORTED_MODULE_4__) {
        // Prevent Reassignment.
        if (keys.indexOf(key) > -1) {
            continue;
        }
        BABYLON_1.GLTF2.Exporter[key] = _glTF_2_0_index__WEBPACK_IMPORTED_MODULE_4__[key];
    }
}




/***/ }),

/***/ "../../../lts/serializers/dist/legacy/legacy-objSerializer.js":
/*!********************************************************************!*\
  !*** ../../../lts/serializers/dist/legacy/legacy-objSerializer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OBJExport": () => (/* reexport safe */ _OBJ_index__WEBPACK_IMPORTED_MODULE_0__.OBJExport)
/* harmony export */ });
/* harmony import */ var _OBJ_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../OBJ/index */ "../../../lts/serializers/dist/OBJ/index.js");
/* eslint-disable import/no-internal-modules */

/**
 * This is the entry point for the UMD module.
 * The entry point for a future ESM package should be index.ts
 */
var globalObject = typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : typeof window !== "undefined" ? window : undefined;
if (typeof globalObject !== "undefined") {
    for (var serializer in _OBJ_index__WEBPACK_IMPORTED_MODULE_0__) {
        globalObject.BABYLON[serializer] = _OBJ_index__WEBPACK_IMPORTED_MODULE_0__[serializer];
    }
}



/***/ }),

/***/ "../../../lts/serializers/dist/legacy/legacy-stlSerializer.js":
/*!********************************************************************!*\
  !*** ../../../lts/serializers/dist/legacy/legacy-stlSerializer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "STLExport": () => (/* reexport safe */ _stl_index__WEBPACK_IMPORTED_MODULE_0__.STLExport)
/* harmony export */ });
/* harmony import */ var _stl_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stl/index */ "../../../lts/serializers/dist/stl/index.js");
/* eslint-disable import/no-internal-modules */

/**
 * This is the entry point for the UMD module.
 * The entry point for a future ESM package should be index.ts
 */
var globalObject = typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : typeof window !== "undefined" ? window : undefined;
if (typeof globalObject !== "undefined") {
    for (var serializer in _stl_index__WEBPACK_IMPORTED_MODULE_0__) {
        globalObject.BABYLON[serializer] = _stl_index__WEBPACK_IMPORTED_MODULE_0__[serializer];
    }
}



/***/ }),

/***/ "../../../lts/serializers/dist/legacy/legacy.js":
/*!******************************************************!*\
  !*** ../../../lts/serializers/dist/legacy/legacy.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GLTF2Export": () => (/* reexport safe */ _legacy_glTF2Serializer__WEBPACK_IMPORTED_MODULE_1__.GLTF2Export),
/* harmony export */   "GLTFData": () => (/* reexport safe */ _legacy_glTF2Serializer__WEBPACK_IMPORTED_MODULE_1__.GLTFData),
/* harmony export */   "KHR_lights_punctual": () => (/* reexport safe */ _legacy_glTF2Serializer__WEBPACK_IMPORTED_MODULE_1__.KHR_lights_punctual),
/* harmony export */   "KHR_materials_clearcoat": () => (/* reexport safe */ _legacy_glTF2Serializer__WEBPACK_IMPORTED_MODULE_1__.KHR_materials_clearcoat),
/* harmony export */   "KHR_materials_iridescence": () => (/* reexport safe */ _legacy_glTF2Serializer__WEBPACK_IMPORTED_MODULE_1__.KHR_materials_iridescence),
/* harmony export */   "KHR_materials_sheen": () => (/* reexport safe */ _legacy_glTF2Serializer__WEBPACK_IMPORTED_MODULE_1__.KHR_materials_sheen),
/* harmony export */   "KHR_materials_specular": () => (/* reexport safe */ _legacy_glTF2Serializer__WEBPACK_IMPORTED_MODULE_1__.KHR_materials_specular),
/* harmony export */   "KHR_materials_unlit": () => (/* reexport safe */ _legacy_glTF2Serializer__WEBPACK_IMPORTED_MODULE_1__.KHR_materials_unlit),
/* harmony export */   "KHR_texture_transform": () => (/* reexport safe */ _legacy_glTF2Serializer__WEBPACK_IMPORTED_MODULE_1__.KHR_texture_transform),
/* harmony export */   "OBJExport": () => (/* reexport safe */ _legacy_objSerializer__WEBPACK_IMPORTED_MODULE_2__.OBJExport),
/* harmony export */   "STLExport": () => (/* reexport safe */ _legacy_stlSerializer__WEBPACK_IMPORTED_MODULE_3__.STLExport),
/* harmony export */   "_BinaryWriter": () => (/* reexport safe */ _legacy_glTF2Serializer__WEBPACK_IMPORTED_MODULE_1__._BinaryWriter),
/* harmony export */   "_Exporter": () => (/* reexport safe */ _legacy_glTF2Serializer__WEBPACK_IMPORTED_MODULE_1__._Exporter),
/* harmony export */   "_GLTFAnimation": () => (/* reexport safe */ _legacy_glTF2Serializer__WEBPACK_IMPORTED_MODULE_1__._GLTFAnimation),
/* harmony export */   "_GLTFMaterialExporter": () => (/* reexport safe */ _legacy_glTF2Serializer__WEBPACK_IMPORTED_MODULE_1__._GLTFMaterialExporter),
/* harmony export */   "_GLTFUtilities": () => (/* reexport safe */ _legacy_glTF2Serializer__WEBPACK_IMPORTED_MODULE_1__._GLTFUtilities),
/* harmony export */   "__IGLTFExporterExtension": () => (/* reexport safe */ _legacy_glTF2Serializer__WEBPACK_IMPORTED_MODULE_1__.__IGLTFExporterExtension),
/* harmony export */   "__IGLTFExporterExtensionV2": () => (/* reexport safe */ _legacy_glTF2Serializer__WEBPACK_IMPORTED_MODULE_1__.__IGLTFExporterExtensionV2)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "../../../lts/serializers/dist/index.js");
/* harmony import */ var _legacy_glTF2Serializer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./legacy-glTF2Serializer */ "../../../lts/serializers/dist/legacy/legacy-glTF2Serializer.js");
/* harmony import */ var _legacy_objSerializer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./legacy-objSerializer */ "../../../lts/serializers/dist/legacy/legacy-objSerializer.js");
/* harmony import */ var _legacy_stlSerializer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./legacy-stlSerializer */ "../../../lts/serializers/dist/legacy/legacy-stlSerializer.js");
/* eslint-disable import/export */
/* eslint-disable import/no-internal-modules */






/***/ }),

/***/ "../../../lts/serializers/dist/stl/index.js":
/*!**************************************************!*\
  !*** ../../../lts/serializers/dist/stl/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "STLExport": () => (/* reexport safe */ _stlSerializer__WEBPACK_IMPORTED_MODULE_0__.STLExport)
/* harmony export */ });
/* harmony import */ var _stlSerializer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stlSerializer */ "../../../lts/serializers/dist/stl/stlSerializer.js");



/***/ }),

/***/ "../../../lts/serializers/dist/stl/stlSerializer.js":
/*!**********************************************************!*\
  !*** ../../../lts/serializers/dist/stl/stlSerializer.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "STLExport": () => (/* binding */ STLExport)
/* harmony export */ });
/* harmony import */ var core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/Maths/math.vector */ "core/Maths/math.vector");
/* harmony import */ var core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__);


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
     * @returns the STL as UTF8 string
     */
    STLExport.CreateSTL = function (meshes, download, fileName, binary, isLittleEndian, doNotBakeTransform) {
        //Binary support adapted from https://gist.github.com/paulkaplan/6d5f0ab2c7e8fdc68a61
        if (download === void 0) { download = true; }
        if (fileName === void 0) { fileName = "stlmesh"; }
        if (binary === void 0) { binary = false; }
        if (isLittleEndian === void 0) { isLittleEndian = true; }
        if (doNotBakeTransform === void 0) { doNotBakeTransform = false; }
        var getFaceData = function (indices, vertices, i) {
            var id = [indices[i] * 3, indices[i + 1] * 3, indices[i + 2] * 3];
            var v = [
                new core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.Vector3(vertices[id[0]], vertices[id[0] + 2], vertices[id[0] + 1]),
                new core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.Vector3(vertices[id[1]], vertices[id[1] + 2], vertices[id[1] + 1]),
                new core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.Vector3(vertices[id[2]], vertices[id[2] + 2], vertices[id[2] + 1]),
            ];
            var p1p2 = v[0].subtract(v[1]);
            var p3p2 = v[2].subtract(v[1]);
            var n = core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.Vector3.Cross(p3p2, p1p2).normalize();
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
        var data;
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
            data = "solid stlmesh\r\n";
        }
        for (var i = 0; i < meshes.length; i++) {
            var mesh = meshes[i];
            if (!doNotBakeTransform) {
                mesh.bakeCurrentTransformIntoVertices();
            }
            var vertices = mesh.getVerticesData(core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.PositionKind) || [];
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
                    data += "facet normal " + fd.n.x + " " + fd.n.y + " " + fd.n.z + "\r\n";
                    data += "\touter loop\r\n";
                    data += "\t\tvertex " + fd.v[0].x + " " + fd.v[0].y + " " + fd.v[0].z + "\r\n";
                    data += "\t\tvertex " + fd.v[1].x + " " + fd.v[1].y + " " + fd.v[1].z + "\r\n";
                    data += "\t\tvertex " + fd.v[2].x + " " + fd.v[2].y + " " + fd.v[2].z + "\r\n";
                    data += "\tendloop\r\n";
                    data += "endfacet\r\n";
                }
            }
        }
        if (!binary) {
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

/***/ "core/Maths/math.vector":
/*!****************************************************************************************************!*\
  !*** external {"root":"BABYLON","commonjs":"babylonjs","commonjs2":"babylonjs","amd":"babylonjs"} ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_Maths_math_vector__;

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
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "serializers": () => (/* reexport module object */ serializers_legacy_legacy__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var serializers_legacy_legacy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! serializers/legacy/legacy */ "../../../lts/serializers/dist/legacy/legacy.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (serializers_legacy_legacy__WEBPACK_IMPORTED_MODULE_0__);

})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=babylonjs.serializers.js.map