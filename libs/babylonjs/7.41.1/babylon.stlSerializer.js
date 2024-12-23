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

})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFieWxvbi5zdGxTZXJpYWxpemVyLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUFBO0FBbUpBO0FBbEpBOzs7Ozs7Ozs7OztBQVdBO0FBQ0E7QUFVQTtBQVJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0pBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7QUNkQTs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2Rldi9zZXJpYWxpemVycy9zcmMvc3RsL2luZGV4LnRzIiwid2VicGFjazovL1NFUklBTElaRVJTLy4uLy4uLy4uL2Rldi9zZXJpYWxpemVycy9zcmMvc3RsL3N0bFNlcmlhbGl6ZXIudHMiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvLi4vLi4vLi4vbHRzL3NlcmlhbGl6ZXJzL3NyYy9sZWdhY3kvbGVnYWN5LXN0bFNlcmlhbGl6ZXIudHMiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvZXh0ZXJuYWwgdW1kIHtcInJvb3RcIjpcIkJBQllMT05cIixcImNvbW1vbmpzXCI6XCJiYWJ5bG9uanNcIixcImNvbW1vbmpzMlwiOlwiYmFieWxvbmpzXCIsXCJhbWRcIjpcImJhYnlsb25qc1wifSIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9TRVJJQUxJWkVSUy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL1NFUklBTElaRVJTL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vU0VSSUFMSVpFUlMvLi9zcmMvc3RsLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImJhYnlsb25qc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImJhYnlsb25qcy1zZXJpYWxpemVyc1wiLCBbXCJiYWJ5bG9uanNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiYmFieWxvbmpzLXNlcmlhbGl6ZXJzXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiYmFieWxvbmpzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJTRVJJQUxJWkVSU1wiXSA9IGZhY3Rvcnkocm9vdFtcIkJBQllMT05cIl0pO1xufSkoKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0aGlzKSwgKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfYmFieWxvbmpzX01pc2NfdG9vbHNfXykgPT4ge1xucmV0dXJuICIsImV4cG9ydCAqIGZyb20gXCIuL3N0bFNlcmlhbGl6ZXJcIjtcclxuIiwiaW1wb3J0IHsgTWVzaCB9IGZyb20gXCJjb3JlL01lc2hlcy9tZXNoXCI7XHJcbmltcG9ydCB7IEluc3RhbmNlZE1lc2ggfSBmcm9tIFwiY29yZS9NZXNoZXMvaW5zdGFuY2VkTWVzaFwiO1xyXG5pbXBvcnQgeyBWZXJ0ZXhCdWZmZXIgfSBmcm9tIFwiY29yZS9CdWZmZXJzL2J1ZmZlclwiO1xyXG5pbXBvcnQgeyBWZWN0b3IzIH0gZnJvbSBcImNvcmUvTWF0aHMvbWF0aC52ZWN0b3JcIjtcclxuXHJcbi8qKlxyXG4gKiBDbGFzcyBmb3IgZ2VuZXJhdGluZyBTVEwgZGF0YSBmcm9tIGEgQmFieWxvbiBzY2VuZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBTVExFeHBvcnQge1xyXG4gICAgLyoqXHJcbiAgICAgKiBFeHBvcnRzIHRoZSBnZW9tZXRyeSBvZiBhIE1lc2ggYXJyYXkgaW4gLlNUTCBmaWxlIGZvcm1hdCAoQVNDSUkpXHJcbiAgICAgKiBAcGFyYW0gbWVzaGVzIGxpc3QgZGVmaW5lcyB0aGUgbWVzaCB0byBzZXJpYWxpemVcclxuICAgICAqIEBwYXJhbSBkb3dubG9hZCB0cmlnZ2VycyB0aGUgYXV0b21hdGljIGRvd25sb2FkIG9mIHRoZSBmaWxlLlxyXG4gICAgICogQHBhcmFtIGZpbGVOYW1lIGNoYW5nZXMgdGhlIGRvd25sb2FkcyBmaWxlTmFtZS5cclxuICAgICAqIEBwYXJhbSBiaW5hcnkgY2hhbmdlcyB0aGUgU1RMIHRvIGEgYmluYXJ5IHR5cGUuXHJcbiAgICAgKiBAcGFyYW0gaXNMaXR0bGVFbmRpYW4gdG9nZ2xlIGZvciBiaW5hcnkgdHlwZSBleHBvcnRlci5cclxuICAgICAqIEBwYXJhbSBkb05vdEJha2VUcmFuc2Zvcm0gdG9nZ2xlIGlmIG1lc2hlcyB0cmFuc2Zvcm1zIHNob3VsZCBiZSBiYWtlZCBvciBub3QuXHJcbiAgICAgKiBAcGFyYW0gc3VwcG9ydEluc3RhbmNlZE1lc2hlcyB0b2dnbGUgdG8gZXhwb3J0IGluc3RhbmNlZCBNZXNoZXMuIEVuYWJsaW5nIHN1cHBvcnQgZm9yIGluc3RhbmNlZCBtZXNoZXMgd2lsbCBvdmVycmlkZSBkb05vQmFrZVRyYW5zZm9ybSBhcyB0cnVlXHJcbiAgICAgKiBAcGFyYW0gZXhwb3J0SW5kaXZpZHVhbE1lc2hlcyB0b2dnbGUgdG8gZXhwb3J0IGVhY2ggbWVzaCBhcyBhbiBpbmRlcGVuZGVudCBtZXNoLiBCeSBkZWZhdWx0LCBhbGwgdGhlIG1lc2hlcyBhcmUgY29tYmluZWQgaW50byBvbmUgbWVzaC4gVGhpcyBwcm9wZXJ0eSBoYXMgbm8gZWZmZWN0IHdoZW4gZXhwb3J0aW5nIGluIGJpbmFyeSBmb3JtYXRcclxuICAgICAqIEByZXR1cm5zIHRoZSBTVEwgYXMgVVRGOCBzdHJpbmdcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBDcmVhdGVTVEwoXHJcbiAgICAgICAgbWVzaGVzOiAoTWVzaCB8IEluc3RhbmNlZE1lc2gpW10sXHJcbiAgICAgICAgZG93bmxvYWQ6IGJvb2xlYW4gPSB0cnVlLFxyXG4gICAgICAgIGZpbGVOYW1lOiBzdHJpbmcgPSBcInN0bG1lc2hcIixcclxuICAgICAgICBiaW5hcnk6IGJvb2xlYW4gPSBmYWxzZSxcclxuICAgICAgICBpc0xpdHRsZUVuZGlhbjogYm9vbGVhbiA9IHRydWUsXHJcbiAgICAgICAgZG9Ob3RCYWtlVHJhbnNmb3JtOiBib29sZWFuID0gZmFsc2UsXHJcbiAgICAgICAgc3VwcG9ydEluc3RhbmNlZE1lc2hlczogYm9vbGVhbiA9IGZhbHNlLFxyXG4gICAgICAgIGV4cG9ydEluZGl2aWR1YWxNZXNoZXM6IGJvb2xlYW4gPSBmYWxzZVxyXG4gICAgKTogYW55IHtcclxuICAgICAgICAvL0JpbmFyeSBzdXBwb3J0IGFkYXB0ZWQgZnJvbSBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9wYXVsa2FwbGFuLzZkNWYwYWIyYzdlOGZkYzY4YTYxXHJcblxyXG4gICAgICAgIGNvbnN0IGdldEZhY2VEYXRhID0gZnVuY3Rpb24gKGluZGljZXM6IGFueSwgdmVydGljZXM6IGFueSwgaTogbnVtYmVyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkID0gW2luZGljZXNbaV0gKiAzLCBpbmRpY2VzW2kgKyAxXSAqIDMsIGluZGljZXNbaSArIDJdICogM107XHJcbiAgICAgICAgICAgIGNvbnN0IHYgPSBbXHJcbiAgICAgICAgICAgICAgICBuZXcgVmVjdG9yMyh2ZXJ0aWNlc1tpZFswXV0sIHZlcnRpY2VzW2lkWzBdICsgMl0sIHZlcnRpY2VzW2lkWzBdICsgMV0pLFxyXG4gICAgICAgICAgICAgICAgbmV3IFZlY3RvcjModmVydGljZXNbaWRbMV1dLCB2ZXJ0aWNlc1tpZFsxXSArIDJdLCB2ZXJ0aWNlc1tpZFsxXSArIDFdKSxcclxuICAgICAgICAgICAgICAgIG5ldyBWZWN0b3IzKHZlcnRpY2VzW2lkWzJdXSwgdmVydGljZXNbaWRbMl0gKyAyXSwgdmVydGljZXNbaWRbMl0gKyAxXSksXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIGNvbnN0IHAxcDIgPSB2WzBdLnN1YnRyYWN0KHZbMV0pO1xyXG4gICAgICAgICAgICBjb25zdCBwM3AyID0gdlsyXS5zdWJ0cmFjdCh2WzFdKTtcclxuICAgICAgICAgICAgY29uc3QgbiA9IFZlY3RvcjMuQ3Jvc3MocDNwMiwgcDFwMikubm9ybWFsaXplKCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4geyB2LCBuIH07XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3Qgd3JpdGVWZWN0b3IgPSBmdW5jdGlvbiAoZGF0YXZpZXc6IGFueSwgb2Zmc2V0OiBudW1iZXIsIHZlY3RvcjogVmVjdG9yMywgaXNMaXR0bGVFbmRpYW46IGJvb2xlYW4pIHtcclxuICAgICAgICAgICAgb2Zmc2V0ID0gd3JpdGVGbG9hdChkYXRhdmlldywgb2Zmc2V0LCB2ZWN0b3IueCwgaXNMaXR0bGVFbmRpYW4pO1xyXG4gICAgICAgICAgICBvZmZzZXQgPSB3cml0ZUZsb2F0KGRhdGF2aWV3LCBvZmZzZXQsIHZlY3Rvci55LCBpc0xpdHRsZUVuZGlhbik7XHJcbiAgICAgICAgICAgIHJldHVybiB3cml0ZUZsb2F0KGRhdGF2aWV3LCBvZmZzZXQsIHZlY3Rvci56LCBpc0xpdHRsZUVuZGlhbik7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3Qgd3JpdGVGbG9hdCA9IGZ1bmN0aW9uIChkYXRhdmlldzogYW55LCBvZmZzZXQ6IG51bWJlciwgdmFsdWU6IG51bWJlciwgaXNMaXR0bGVFbmRpYW46IGJvb2xlYW4pIHtcclxuICAgICAgICAgICAgZGF0YXZpZXcuc2V0RmxvYXQzMihvZmZzZXQsIHZhbHVlLCBpc0xpdHRsZUVuZGlhbik7XHJcbiAgICAgICAgICAgIHJldHVybiBvZmZzZXQgKyA0O1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGdldFZlcnRpY2VzRGF0YSA9IGZ1bmN0aW9uIChtZXNoOiBJbnN0YW5jZWRNZXNoIHwgTWVzaCkge1xyXG4gICAgICAgICAgICBpZiAoc3VwcG9ydEluc3RhbmNlZE1lc2hlcykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHNvdXJjZU1lc2ggPSBtZXNoO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1lc2ggaW5zdGFuY2VvZiBJbnN0YW5jZWRNZXNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlTWVzaCA9IG1lc2guc291cmNlTWVzaDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBzb3VyY2VNZXNoLmdldFZlcnRpY2VzRGF0YShWZXJ0ZXhCdWZmZXIuUG9zaXRpb25LaW5kLCB0cnVlLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGlmICghZGF0YSkgcmV0dXJuIFtdO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGVtcCA9IFZlY3RvcjMuWmVybygpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGluZGV4O1xyXG4gICAgICAgICAgICAgICAgZm9yIChpbmRleCA9IDA7IGluZGV4IDwgZGF0YS5sZW5ndGg7IGluZGV4ICs9IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICBWZWN0b3IzLlRyYW5zZm9ybUNvb3JkaW5hdGVzRnJvbUZsb2F0c1RvUmVmKGRhdGFbaW5kZXhdLCBkYXRhW2luZGV4ICsgMV0sIGRhdGFbaW5kZXggKyAyXSwgbWVzaC5jb21wdXRlV29ybGRNYXRyaXgodHJ1ZSksIHRlbXApLnRvQXJyYXkoZGF0YSwgaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWVzaC5nZXRWZXJ0aWNlc0RhdGEoVmVydGV4QnVmZmVyLlBvc2l0aW9uS2luZCkgfHwgW107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAoc3VwcG9ydEluc3RhbmNlZE1lc2hlcykge1xyXG4gICAgICAgICAgICBkb05vdEJha2VUcmFuc2Zvcm0gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGRhdGE6IERhdGFWaWV3IHwgc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICAgICAgbGV0IGZhY2VDb3VudCA9IDA7XHJcbiAgICAgICAgbGV0IG9mZnNldCA9IDA7XHJcblxyXG4gICAgICAgIGlmIChiaW5hcnkpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZXNoZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1lc2ggPSBtZXNoZXNbaV07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRpY2VzID0gbWVzaC5nZXRJbmRpY2VzKCk7XHJcbiAgICAgICAgICAgICAgICBmYWNlQ291bnQgKz0gaW5kaWNlcyA/IGluZGljZXMubGVuZ3RoIC8gMyA6IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGJ1ZmZlclNpemUgPSA4NCArIDUwICogZmFjZUNvdW50O1xyXG4gICAgICAgICAgICBjb25zdCBidWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoYnVmZmVyU2l6ZSk7XHJcbiAgICAgICAgICAgIGRhdGEgPSBuZXcgRGF0YVZpZXcoYnVmZmVyKTtcclxuXHJcbiAgICAgICAgICAgIG9mZnNldCArPSA4MDtcclxuICAgICAgICAgICAgZGF0YS5zZXRVaW50MzIob2Zmc2V0LCBmYWNlQ291bnQsIGlzTGl0dGxlRW5kaWFuKTtcclxuICAgICAgICAgICAgb2Zmc2V0ICs9IDQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKCFleHBvcnRJbmRpdmlkdWFsTWVzaGVzKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhID0gXCJzb2xpZCBzdGxtZXNoXFxyXFxuXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVzaGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc2ggPSBtZXNoZXNbaV07XHJcbiAgICAgICAgICAgIGlmICghYmluYXJ5ICYmIGV4cG9ydEluZGl2aWR1YWxNZXNoZXMpIHtcclxuICAgICAgICAgICAgICAgIGRhdGEgKz0gXCJzb2xpZCBcIiArIG1lc2gubmFtZSArIFwiXFxyXFxuXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFkb05vdEJha2VUcmFuc2Zvcm0gJiYgbWVzaCBpbnN0YW5jZW9mIE1lc2gpIHtcclxuICAgICAgICAgICAgICAgIG1lc2guYmFrZUN1cnJlbnRUcmFuc2Zvcm1JbnRvVmVydGljZXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCB2ZXJ0aWNlcyA9IGdldFZlcnRpY2VzRGF0YShtZXNoKTtcclxuICAgICAgICAgICAgY29uc3QgaW5kaWNlcyA9IG1lc2guZ2V0SW5kaWNlcygpIHx8IFtdO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbmRpY2VzLmxlbmd0aDsgaSArPSAzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmZCA9IGdldEZhY2VEYXRhKGluZGljZXMsIHZlcnRpY2VzLCBpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYmluYXJ5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0ID0gd3JpdGVWZWN0b3IoZGF0YSwgb2Zmc2V0LCBmZC5uLCBpc0xpdHRsZUVuZGlhbik7XHJcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0ID0gd3JpdGVWZWN0b3IoZGF0YSwgb2Zmc2V0LCBmZC52WzBdLCBpc0xpdHRsZUVuZGlhbik7XHJcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0ID0gd3JpdGVWZWN0b3IoZGF0YSwgb2Zmc2V0LCBmZC52WzFdLCBpc0xpdHRsZUVuZGlhbik7XHJcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0ID0gd3JpdGVWZWN0b3IoZGF0YSwgb2Zmc2V0LCBmZC52WzJdLCBpc0xpdHRsZUVuZGlhbik7XHJcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0ICs9IDI7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEgKz0gXCJcXHRmYWNldCBub3JtYWwgXCIgKyBmZC5uLnggKyBcIiBcIiArIGZkLm4ueSArIFwiIFwiICsgZmQubi56ICsgXCJcXHJcXG5cIjtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhICs9IFwiXFx0XFx0b3V0ZXIgbG9vcFxcclxcblwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEgKz0gXCJcXHRcXHRcXHR2ZXJ0ZXggXCIgKyBmZC52WzBdLnggKyBcIiBcIiArIGZkLnZbMF0ueSArIFwiIFwiICsgZmQudlswXS56ICsgXCJcXHJcXG5cIjtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhICs9IFwiXFx0XFx0XFx0dmVydGV4IFwiICsgZmQudlsxXS54ICsgXCIgXCIgKyBmZC52WzFdLnkgKyBcIiBcIiArIGZkLnZbMV0ueiArIFwiXFxyXFxuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YSArPSBcIlxcdFxcdFxcdHZlcnRleCBcIiArIGZkLnZbMl0ueCArIFwiIFwiICsgZmQudlsyXS55ICsgXCIgXCIgKyBmZC52WzJdLnogKyBcIlxcclxcblwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEgKz0gXCJcXHRcXHRlbmRsb29wXFxyXFxuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YSArPSBcIlxcdGVuZGZhY2V0XFxyXFxuXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFiaW5hcnkgJiYgZXhwb3J0SW5kaXZpZHVhbE1lc2hlcykge1xyXG4gICAgICAgICAgICAgICAgZGF0YSArPSBcImVuZHNvbGlkIFwiICsgbmFtZSArIFwiXFxyXFxuXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghYmluYXJ5ICYmICFleHBvcnRJbmRpdmlkdWFsTWVzaGVzKSB7XHJcbiAgICAgICAgICAgIGRhdGEgKz0gXCJlbmRzb2xpZCBzdGxtZXNoXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZG93bmxvYWQpIHtcclxuICAgICAgICAgICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW2RhdGFdLCB7IHR5cGU6IFwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCIgfSk7XHJcbiAgICAgICAgICAgIGEuaHJlZiA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gICAgICAgICAgICBhLmRvd25sb2FkID0gZmlsZU5hbWUgKyBcIi5zdGxcIjtcclxuICAgICAgICAgICAgYS5jbGljaygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWludGVybmFsLW1vZHVsZXMgKi9cclxuaW1wb3J0ICogYXMgU2VyaWFsaXplcnMgZnJvbSBcInNlcmlhbGl6ZXJzL3N0bC9pbmRleFwiO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgaXMgdGhlIGVudHJ5IHBvaW50IGZvciB0aGUgVU1EIG1vZHVsZS5cclxuICogVGhlIGVudHJ5IHBvaW50IGZvciBhIGZ1dHVyZSBFU00gcGFja2FnZSBzaG91bGQgYmUgaW5kZXgudHNcclxuICovXHJcbmNvbnN0IGdsb2JhbE9iamVjdCA9IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDogdW5kZWZpbmVkO1xyXG5pZiAodHlwZW9mIGdsb2JhbE9iamVjdCAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgZm9yIChjb25zdCBzZXJpYWxpemVyIGluIFNlcmlhbGl6ZXJzKSB7XHJcbiAgICAgICAgKDxhbnk+Z2xvYmFsT2JqZWN0KS5CQUJZTE9OW3NlcmlhbGl6ZXJdID0gKDxhbnk+U2VyaWFsaXplcnMpW3NlcmlhbGl6ZXJdO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgKiBmcm9tIFwic2VyaWFsaXplcnMvc3RsL2luZGV4XCI7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9iYWJ5bG9uanNfTWlzY190b29sc19fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAqIGFzIHNlcmlhbGl6ZXJzIGZyb20gXCJAbHRzL3NlcmlhbGl6ZXJzL2xlZ2FjeS9sZWdhY3ktc3RsU2VyaWFsaXplclwiO1xyXG5leHBvcnQgeyBzZXJpYWxpemVycyB9O1xyXG5leHBvcnQgZGVmYXVsdCBzZXJpYWxpemVycztcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9