(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("babylonjs"));
	else if(typeof define === 'function' && define.amd)
		define("babylonjs-serializers", ["babylonjs"], factory);
	else if(typeof exports === 'object')
		exports["babylonjs-serializers"] = factory(require("babylonjs"));
	else
		root["SERIALIZERS"] = factory(root["BABYLON"]);
})((typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : this), (__WEBPACK_EXTERNAL_MODULE_babylonjs_Maths_math_vector__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/* harmony import */ var babylonjs_Meshes_mesh__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Maths/math.vector */ "babylonjs/Maths/math.vector");
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

/***/ "babylonjs/Maths/math.vector":
/*!****************************************************************************************************!*\
  !*** external {"root":"BABYLON","commonjs":"babylonjs","commonjs2":"babylonjs","amd":"babylonjs"} ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_babylonjs_Maths_math_vector__;

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
/*!********************!*\
  !*** ./src/stl.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   serializers: () => (/* reexport module object */ _lts_serializers_legacy_legacy_stlSerializer__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _lts_serializers_legacy_legacy_stlSerializer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lts/serializers/legacy/legacy-stlSerializer */ "../../../lts/serializers/src/legacy/legacy-stlSerializer.ts");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_lts_serializers_legacy_legacy_stlSerializer__WEBPACK_IMPORTED_MODULE_0__);

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFieWxvbi5zdGxTZXJpYWxpemVyLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUFBO0FBbUpBO0FBbEpBOzs7Ozs7Ozs7OztBQVdBO0FBQ0E7QUFVQTtBQVJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0pBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7QUNkQTs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL1NFUklBTElaRVJTL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy8uLi8uLi8uLi9kZXYvc2VyaWFsaXplcnMvc3JjL3N0bC9pbmRleC50cyIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy8uLi8uLi8uLi9kZXYvc2VyaWFsaXplcnMvc3JjL3N0bC9zdGxTZXJpYWxpemVyLnRzIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2x0cy9zZXJpYWxpemVycy9zcmMvbGVnYWN5L2xlZ2FjeS1zdGxTZXJpYWxpemVyLnRzIiwid2VicGFjazovL1NFUklBTElaRVJTL2V4dGVybmFsIHVtZCB7XCJyb290XCI6XCJCQUJZTE9OXCIsXCJjb21tb25qc1wiOlwiYmFieWxvbmpzXCIsXCJjb21tb25qczJcIjpcImJhYnlsb25qc1wiLFwiYW1kXCI6XCJiYWJ5bG9uanNcIn0iLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL1NFUklBTElaRVJTL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL1NFUklBTElaRVJTLy4vc3JjL3N0bC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJiYWJ5bG9uanNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJiYWJ5bG9uanMtc2VyaWFsaXplcnNcIiwgW1wiYmFieWxvbmpzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImJhYnlsb25qcy1zZXJpYWxpemVyc1wiXSA9IGZhY3RvcnkocmVxdWlyZShcImJhYnlsb25qc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiU0VSSUFMSVpFUlNcIl0gPSBmYWN0b3J5KHJvb3RbXCJCQUJZTE9OXCJdKTtcbn0pKCh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdGhpcyksIChfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2JhYnlsb25qc19NYXRoc19tYXRoX3ZlY3Rvcl9fKSA9PiB7XG5yZXR1cm4gIiwiZXhwb3J0ICogZnJvbSBcIi4vc3RsU2VyaWFsaXplclwiO1xyXG4iLCJpbXBvcnQgeyBNZXNoIH0gZnJvbSBcImNvcmUvTWVzaGVzL21lc2hcIjtcclxuaW1wb3J0IHsgSW5zdGFuY2VkTWVzaCB9IGZyb20gXCJjb3JlL01lc2hlcy9pbnN0YW5jZWRNZXNoXCI7XHJcbmltcG9ydCB7IFZlcnRleEJ1ZmZlciB9IGZyb20gXCJjb3JlL0J1ZmZlcnMvYnVmZmVyXCI7XHJcbmltcG9ydCB7IFZlY3RvcjMgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLnZlY3RvclwiO1xyXG5cclxuLyoqXHJcbiAqIENsYXNzIGZvciBnZW5lcmF0aW5nIFNUTCBkYXRhIGZyb20gYSBCYWJ5bG9uIHNjZW5lLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNUTEV4cG9ydCB7XHJcbiAgICAvKipcclxuICAgICAqIEV4cG9ydHMgdGhlIGdlb21ldHJ5IG9mIGEgTWVzaCBhcnJheSBpbiAuU1RMIGZpbGUgZm9ybWF0IChBU0NJSSlcclxuICAgICAqIEBwYXJhbSBtZXNoZXMgbGlzdCBkZWZpbmVzIHRoZSBtZXNoIHRvIHNlcmlhbGl6ZVxyXG4gICAgICogQHBhcmFtIGRvd25sb2FkIHRyaWdnZXJzIHRoZSBhdXRvbWF0aWMgZG93bmxvYWQgb2YgdGhlIGZpbGUuXHJcbiAgICAgKiBAcGFyYW0gZmlsZU5hbWUgY2hhbmdlcyB0aGUgZG93bmxvYWRzIGZpbGVOYW1lLlxyXG4gICAgICogQHBhcmFtIGJpbmFyeSBjaGFuZ2VzIHRoZSBTVEwgdG8gYSBiaW5hcnkgdHlwZS5cclxuICAgICAqIEBwYXJhbSBpc0xpdHRsZUVuZGlhbiB0b2dnbGUgZm9yIGJpbmFyeSB0eXBlIGV4cG9ydGVyLlxyXG4gICAgICogQHBhcmFtIGRvTm90QmFrZVRyYW5zZm9ybSB0b2dnbGUgaWYgbWVzaGVzIHRyYW5zZm9ybXMgc2hvdWxkIGJlIGJha2VkIG9yIG5vdC5cclxuICAgICAqIEBwYXJhbSBzdXBwb3J0SW5zdGFuY2VkTWVzaGVzIHRvZ2dsZSB0byBleHBvcnQgaW5zdGFuY2VkIE1lc2hlcy4gRW5hYmxpbmcgc3VwcG9ydCBmb3IgaW5zdGFuY2VkIG1lc2hlcyB3aWxsIG92ZXJyaWRlIGRvTm9CYWtlVHJhbnNmb3JtIGFzIHRydWVcclxuICAgICAqIEBwYXJhbSBleHBvcnRJbmRpdmlkdWFsTWVzaGVzIHRvZ2dsZSB0byBleHBvcnQgZWFjaCBtZXNoIGFzIGFuIGluZGVwZW5kZW50IG1lc2guIEJ5IGRlZmF1bHQsIGFsbCB0aGUgbWVzaGVzIGFyZSBjb21iaW5lZCBpbnRvIG9uZSBtZXNoLiBUaGlzIHByb3BlcnR5IGhhcyBubyBlZmZlY3Qgd2hlbiBleHBvcnRpbmcgaW4gYmluYXJ5IGZvcm1hdFxyXG4gICAgICogQHJldHVybnMgdGhlIFNUTCBhcyBVVEY4IHN0cmluZ1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIENyZWF0ZVNUTChcclxuICAgICAgICBtZXNoZXM6IChNZXNoIHwgSW5zdGFuY2VkTWVzaClbXSxcclxuICAgICAgICBkb3dubG9hZDogYm9vbGVhbiA9IHRydWUsXHJcbiAgICAgICAgZmlsZU5hbWU6IHN0cmluZyA9IFwic3RsbWVzaFwiLFxyXG4gICAgICAgIGJpbmFyeTogYm9vbGVhbiA9IGZhbHNlLFxyXG4gICAgICAgIGlzTGl0dGxlRW5kaWFuOiBib29sZWFuID0gdHJ1ZSxcclxuICAgICAgICBkb05vdEJha2VUcmFuc2Zvcm06IGJvb2xlYW4gPSBmYWxzZSxcclxuICAgICAgICBzdXBwb3J0SW5zdGFuY2VkTWVzaGVzOiBib29sZWFuID0gZmFsc2UsXHJcbiAgICAgICAgZXhwb3J0SW5kaXZpZHVhbE1lc2hlczogYm9vbGVhbiA9IGZhbHNlXHJcbiAgICApOiBhbnkge1xyXG4gICAgICAgIC8vQmluYXJ5IHN1cHBvcnQgYWRhcHRlZCBmcm9tIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL3BhdWxrYXBsYW4vNmQ1ZjBhYjJjN2U4ZmRjNjhhNjFcclxuXHJcbiAgICAgICAgY29uc3QgZ2V0RmFjZURhdGEgPSBmdW5jdGlvbiAoaW5kaWNlczogYW55LCB2ZXJ0aWNlczogYW55LCBpOiBudW1iZXIpIHtcclxuICAgICAgICAgICAgY29uc3QgaWQgPSBbaW5kaWNlc1tpXSAqIDMsIGluZGljZXNbaSArIDFdICogMywgaW5kaWNlc1tpICsgMl0gKiAzXTtcclxuICAgICAgICAgICAgY29uc3QgdiA9IFtcclxuICAgICAgICAgICAgICAgIG5ldyBWZWN0b3IzKHZlcnRpY2VzW2lkWzBdXSwgdmVydGljZXNbaWRbMF0gKyAyXSwgdmVydGljZXNbaWRbMF0gKyAxXSksXHJcbiAgICAgICAgICAgICAgICBuZXcgVmVjdG9yMyh2ZXJ0aWNlc1tpZFsxXV0sIHZlcnRpY2VzW2lkWzFdICsgMl0sIHZlcnRpY2VzW2lkWzFdICsgMV0pLFxyXG4gICAgICAgICAgICAgICAgbmV3IFZlY3RvcjModmVydGljZXNbaWRbMl1dLCB2ZXJ0aWNlc1tpZFsyXSArIDJdLCB2ZXJ0aWNlc1tpZFsyXSArIDFdKSxcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgY29uc3QgcDFwMiA9IHZbMF0uc3VidHJhY3QodlsxXSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHAzcDIgPSB2WzJdLnN1YnRyYWN0KHZbMV0pO1xyXG4gICAgICAgICAgICBjb25zdCBuID0gVmVjdG9yMy5Dcm9zcyhwM3AyLCBwMXAyKS5ub3JtYWxpemUoKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7IHYsIG4gfTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCB3cml0ZVZlY3RvciA9IGZ1bmN0aW9uIChkYXRhdmlldzogYW55LCBvZmZzZXQ6IG51bWJlciwgdmVjdG9yOiBWZWN0b3IzLCBpc0xpdHRsZUVuZGlhbjogYm9vbGVhbikge1xyXG4gICAgICAgICAgICBvZmZzZXQgPSB3cml0ZUZsb2F0KGRhdGF2aWV3LCBvZmZzZXQsIHZlY3Rvci54LCBpc0xpdHRsZUVuZGlhbik7XHJcbiAgICAgICAgICAgIG9mZnNldCA9IHdyaXRlRmxvYXQoZGF0YXZpZXcsIG9mZnNldCwgdmVjdG9yLnksIGlzTGl0dGxlRW5kaWFuKTtcclxuICAgICAgICAgICAgcmV0dXJuIHdyaXRlRmxvYXQoZGF0YXZpZXcsIG9mZnNldCwgdmVjdG9yLnosIGlzTGl0dGxlRW5kaWFuKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCB3cml0ZUZsb2F0ID0gZnVuY3Rpb24gKGRhdGF2aWV3OiBhbnksIG9mZnNldDogbnVtYmVyLCB2YWx1ZTogbnVtYmVyLCBpc0xpdHRsZUVuZGlhbjogYm9vbGVhbikge1xyXG4gICAgICAgICAgICBkYXRhdmlldy5zZXRGbG9hdDMyKG9mZnNldCwgdmFsdWUsIGlzTGl0dGxlRW5kaWFuKTtcclxuICAgICAgICAgICAgcmV0dXJuIG9mZnNldCArIDQ7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgZ2V0VmVydGljZXNEYXRhID0gZnVuY3Rpb24gKG1lc2g6IEluc3RhbmNlZE1lc2ggfCBNZXNoKSB7XHJcbiAgICAgICAgICAgIGlmIChzdXBwb3J0SW5zdGFuY2VkTWVzaGVzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc291cmNlTWVzaCA9IG1lc2g7XHJcbiAgICAgICAgICAgICAgICBpZiAobWVzaCBpbnN0YW5jZW9mIEluc3RhbmNlZE1lc2gpIHtcclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VNZXNoID0gbWVzaC5zb3VyY2VNZXNoO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHNvdXJjZU1lc2guZ2V0VmVydGljZXNEYXRhKFZlcnRleEJ1ZmZlci5Qb3NpdGlvbktpbmQsIHRydWUsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFkYXRhKSByZXR1cm4gW107XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZW1wID0gVmVjdG9yMy5aZXJvKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXg7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCBkYXRhLmxlbmd0aDsgaW5kZXggKz0gMykge1xyXG4gICAgICAgICAgICAgICAgICAgIFZlY3RvcjMuVHJhbnNmb3JtQ29vcmRpbmF0ZXNGcm9tRmxvYXRzVG9SZWYoZGF0YVtpbmRleF0sIGRhdGFbaW5kZXggKyAxXSwgZGF0YVtpbmRleCArIDJdLCBtZXNoLmNvbXB1dGVXb3JsZE1hdHJpeCh0cnVlKSwgdGVtcCkudG9BcnJheShkYXRhLCBpbmRleCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBtZXNoLmdldFZlcnRpY2VzRGF0YShWZXJ0ZXhCdWZmZXIuUG9zaXRpb25LaW5kKSB8fCBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmIChzdXBwb3J0SW5zdGFuY2VkTWVzaGVzKSB7XHJcbiAgICAgICAgICAgIGRvTm90QmFrZVRyYW5zZm9ybSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZGF0YTogRGF0YVZpZXcgfCBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgICAgICBsZXQgZmFjZUNvdW50ID0gMDtcclxuICAgICAgICBsZXQgb2Zmc2V0ID0gMDtcclxuXHJcbiAgICAgICAgaWYgKGJpbmFyeSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lc2hlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWVzaCA9IG1lc2hlc1tpXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGluZGljZXMgPSBtZXNoLmdldEluZGljZXMoKTtcclxuICAgICAgICAgICAgICAgIGZhY2VDb3VudCArPSBpbmRpY2VzID8gaW5kaWNlcy5sZW5ndGggLyAzIDogMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgYnVmZmVyU2l6ZSA9IDg0ICsgNTAgKiBmYWNlQ291bnQ7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcihidWZmZXJTaXplKTtcclxuICAgICAgICAgICAgZGF0YSA9IG5ldyBEYXRhVmlldyhidWZmZXIpO1xyXG5cclxuICAgICAgICAgICAgb2Zmc2V0ICs9IDgwO1xyXG4gICAgICAgICAgICBkYXRhLnNldFVpbnQzMihvZmZzZXQsIGZhY2VDb3VudCwgaXNMaXR0bGVFbmRpYW4pO1xyXG4gICAgICAgICAgICBvZmZzZXQgKz0gNDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIWV4cG9ydEluZGl2aWR1YWxNZXNoZXMpIHtcclxuICAgICAgICAgICAgICAgIGRhdGEgPSBcInNvbGlkIHN0bG1lc2hcXHJcXG5cIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZXNoZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgbWVzaCA9IG1lc2hlc1tpXTtcclxuICAgICAgICAgICAgaWYgKCFiaW5hcnkgJiYgZXhwb3J0SW5kaXZpZHVhbE1lc2hlcykge1xyXG4gICAgICAgICAgICAgICAgZGF0YSArPSBcInNvbGlkIFwiICsgbWVzaC5uYW1lICsgXCJcXHJcXG5cIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWRvTm90QmFrZVRyYW5zZm9ybSAmJiBtZXNoIGluc3RhbmNlb2YgTWVzaCkge1xyXG4gICAgICAgICAgICAgICAgbWVzaC5iYWtlQ3VycmVudFRyYW5zZm9ybUludG9WZXJ0aWNlcygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHZlcnRpY2VzID0gZ2V0VmVydGljZXNEYXRhKG1lc2gpO1xyXG4gICAgICAgICAgICBjb25zdCBpbmRpY2VzID0gbWVzaC5nZXRJbmRpY2VzKCkgfHwgW107XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluZGljZXMubGVuZ3RoOyBpICs9IDMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZkID0gZ2V0RmFjZURhdGEoaW5kaWNlcywgdmVydGljZXMsIGkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChiaW5hcnkpIHtcclxuICAgICAgICAgICAgICAgICAgICBvZmZzZXQgPSB3cml0ZVZlY3RvcihkYXRhLCBvZmZzZXQsIGZkLm4sIGlzTGl0dGxlRW5kaWFuKTtcclxuICAgICAgICAgICAgICAgICAgICBvZmZzZXQgPSB3cml0ZVZlY3RvcihkYXRhLCBvZmZzZXQsIGZkLnZbMF0sIGlzTGl0dGxlRW5kaWFuKTtcclxuICAgICAgICAgICAgICAgICAgICBvZmZzZXQgPSB3cml0ZVZlY3RvcihkYXRhLCBvZmZzZXQsIGZkLnZbMV0sIGlzTGl0dGxlRW5kaWFuKTtcclxuICAgICAgICAgICAgICAgICAgICBvZmZzZXQgPSB3cml0ZVZlY3RvcihkYXRhLCBvZmZzZXQsIGZkLnZbMl0sIGlzTGl0dGxlRW5kaWFuKTtcclxuICAgICAgICAgICAgICAgICAgICBvZmZzZXQgKz0gMjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YSArPSBcIlxcdGZhY2V0IG5vcm1hbCBcIiArIGZkLm4ueCArIFwiIFwiICsgZmQubi55ICsgXCIgXCIgKyBmZC5uLnogKyBcIlxcclxcblwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEgKz0gXCJcXHRcXHRvdXRlciBsb29wXFxyXFxuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YSArPSBcIlxcdFxcdFxcdHZlcnRleCBcIiArIGZkLnZbMF0ueCArIFwiIFwiICsgZmQudlswXS55ICsgXCIgXCIgKyBmZC52WzBdLnogKyBcIlxcclxcblwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEgKz0gXCJcXHRcXHRcXHR2ZXJ0ZXggXCIgKyBmZC52WzFdLnggKyBcIiBcIiArIGZkLnZbMV0ueSArIFwiIFwiICsgZmQudlsxXS56ICsgXCJcXHJcXG5cIjtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhICs9IFwiXFx0XFx0XFx0dmVydGV4IFwiICsgZmQudlsyXS54ICsgXCIgXCIgKyBmZC52WzJdLnkgKyBcIiBcIiArIGZkLnZbMl0ueiArIFwiXFxyXFxuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YSArPSBcIlxcdFxcdGVuZGxvb3BcXHJcXG5cIjtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhICs9IFwiXFx0ZW5kZmFjZXRcXHJcXG5cIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWJpbmFyeSAmJiBleHBvcnRJbmRpdmlkdWFsTWVzaGVzKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhICs9IFwiZW5kc29saWQgXCIgKyBuYW1lICsgXCJcXHJcXG5cIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFiaW5hcnkgJiYgIWV4cG9ydEluZGl2aWR1YWxNZXNoZXMpIHtcclxuICAgICAgICAgICAgZGF0YSArPSBcImVuZHNvbGlkIHN0bG1lc2hcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChkb3dubG9hZCkge1xyXG4gICAgICAgICAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbZGF0YV0sIHsgdHlwZTogXCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIiB9KTtcclxuICAgICAgICAgICAgYS5ocmVmID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAgICAgICAgICAgIGEuZG93bmxvYWQgPSBmaWxlTmFtZSArIFwiLnN0bFwiO1xyXG4gICAgICAgICAgICBhLmNsaWNrKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8taW50ZXJuYWwtbW9kdWxlcyAqL1xyXG5pbXBvcnQgKiBhcyBTZXJpYWxpemVycyBmcm9tIFwic2VyaWFsaXplcnMvc3RsL2luZGV4XCI7XHJcblxyXG4vKipcclxuICogVGhpcyBpcyB0aGUgZW50cnkgcG9pbnQgZm9yIHRoZSBVTUQgbW9kdWxlLlxyXG4gKiBUaGUgZW50cnkgcG9pbnQgZm9yIGEgZnV0dXJlIEVTTSBwYWNrYWdlIHNob3VsZCBiZSBpbmRleC50c1xyXG4gKi9cclxuY29uc3QgZ2xvYmFsT2JqZWN0ID0gdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB1bmRlZmluZWQ7XHJcbmlmICh0eXBlb2YgZ2xvYmFsT2JqZWN0ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBmb3IgKGNvbnN0IHNlcmlhbGl6ZXIgaW4gU2VyaWFsaXplcnMpIHtcclxuICAgICAgICAoPGFueT5nbG9iYWxPYmplY3QpLkJBQllMT05bc2VyaWFsaXplcl0gPSAoPGFueT5TZXJpYWxpemVycylbc2VyaWFsaXplcl07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCAqIGZyb20gXCJzZXJpYWxpemVycy9zdGwvaW5kZXhcIjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2JhYnlsb25qc19NYXRoc19tYXRoX3ZlY3Rvcl9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAqIGFzIHNlcmlhbGl6ZXJzIGZyb20gXCJAbHRzL3NlcmlhbGl6ZXJzL2xlZ2FjeS9sZWdhY3ktc3RsU2VyaWFsaXplclwiO1xyXG5leHBvcnQgeyBzZXJpYWxpemVycyB9O1xyXG5leHBvcnQgZGVmYXVsdCBzZXJpYWxpemVycztcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9