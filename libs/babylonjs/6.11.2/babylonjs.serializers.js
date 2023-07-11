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
/* harmony import */ var babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Misc/tools */ "babylonjs/Maths/math.vector");
/* harmony import */ var babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Class for generating OBJ data from a Babylon scene.
 */
class OBJExport {
    /**
     * Exports the geometry of a Mesh array in .OBJ file format (text)
     * @param mesh defines the list of meshes to serialize
     * @param materials defines if materials should be exported
     * @param matlibname defines the name of the associated mtl file
     * @param globalposition defines if the exported positions are globals or local to the exported mesh
     * @returns the OBJ content
     */
    static OBJ(mesh, materials, matlibname, globalposition) {
        const output = [];
        let v = 1;
        // keep track of uv index in case mixed meshes are passed in
        let textureV = 1;
        if (materials) {
            if (!matlibname) {
                matlibname = "mat";
            }
            output.push("mtllib " + matlibname + ".mtl");
        }
        for (let j = 0; j < mesh.length; j++) {
            output.push("g object" + j);
            output.push("o object_" + j);
            //Uses the position of the item in the scene, to the file (this back to normal in the end)
            let inverseTransform = null;
            if (globalposition) {
                const transform = mesh[j].computeWorldMatrix(true);
                inverseTransform = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Matrix();
                transform.invertToRef(inverseTransform);
                mesh[j].bakeTransformIntoVertices(transform);
            }
            //TODO: submeshes (groups)
            //TODO: smoothing groups (s 1, s off);
            if (materials) {
                const mat = mesh[j].material;
                if (mat) {
                    output.push("usemtl " + mat.id);
                }
            }
            const g = mesh[j].geometry;
            if (!g) {
                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Warn("No geometry is present on the mesh");
                continue;
            }
            const trunkVerts = g.getVerticesData("position");
            const trunkNormals = g.getVerticesData("normal");
            const trunkUV = g.getVerticesData("uv");
            const trunkFaces = g.getIndices();
            let currentV = 0;
            let currentTextureV = 0;
            if (!trunkVerts || !trunkFaces) {
                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Warn("There are no position vertices or indices on the mesh!");
                continue;
            }
            for (let i = 0; i < trunkVerts.length; i += 3) {
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
                for (let i = 0; i < trunkNormals.length; i += 3) {
                    output.push("vn " + trunkNormals[i] + " " + trunkNormals[i + 1] + " " + trunkNormals[i + 2]);
                }
            }
            if (trunkUV != null) {
                for (let i = 0; i < trunkUV.length; i += 2) {
                    output.push("vt " + trunkUV[i] + " " + trunkUV[i + 1]);
                    currentTextureV++;
                }
            }
            for (let i = 0; i < trunkFaces.length; i += 3) {
                const indices = [String(trunkFaces[i + 2] + v), String(trunkFaces[i + 1] + v), String(trunkFaces[i] + v)];
                const textureIndices = [String(trunkFaces[i + 2] + textureV), String(trunkFaces[i + 1] + textureV), String(trunkFaces[i] + textureV)];
                const blanks = ["", "", ""];
                const facePositions = indices;
                const faceUVs = trunkUV != null ? textureIndices : blanks;
                const faceNormals = trunkNormals != null ? indices : blanks;
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
        const text = output.join("\n");
        return text;
    }
    /**
     * Exports the material(s) of a mesh in .MTL file format (text)
     * @param mesh defines the mesh to extract the material from
     * @returns the mtl content
     */
    //TODO: Export the materials of mesh array
    static MTL(mesh) {
        const output = [];
        const m = mesh.material;
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
        const uvscale = "";
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
        const text = output.join("\n");
        return text;
    }
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
/* harmony import */ var babylonjs_Meshes_mesh__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs/Buffers/buffer */ "babylonjs/Maths/math.vector");
/* harmony import */ var babylonjs_Meshes_mesh__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Meshes_mesh__WEBPACK_IMPORTED_MODULE_1__);





const NAME = "EXT_mesh_gpu_instancing";
/**
 * [Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Vendor/EXT_mesh_gpu_instancing/README.md)
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
class EXT_mesh_gpu_instancing {
    constructor(exporter) {
        /** Name of this extension */
        this.name = NAME;
        /** Defines whether this extension is enabled */
        this.enabled = true;
        /** Defines whether this extension is required */
        this.required = false;
        this._wasUsed = false;
        this._exporter = exporter;
    }
    dispose() { }
    /** @internal */
    get wasUsed() {
        return this._wasUsed;
    }
    postExportNodeAsync(context, node, babylonNode, nodeMap, binaryWriter) {
        return new Promise((resolve) => {
            if (node && babylonNode instanceof babylonjs_Meshes_mesh__WEBPACK_IMPORTED_MODULE_1__.Mesh) {
                if (babylonNode.hasThinInstances && binaryWriter) {
                    this._wasUsed = true;
                    const noTranslation = babylonjs_Meshes_mesh__WEBPACK_IMPORTED_MODULE_1__.Vector3.Zero();
                    const noRotation = babylonjs_Meshes_mesh__WEBPACK_IMPORTED_MODULE_1__.Quaternion.Identity();
                    const noScale = babylonjs_Meshes_mesh__WEBPACK_IMPORTED_MODULE_1__.Vector3.One();
                    // retreive all the instance world matrix
                    const matrix = babylonNode.thinInstanceGetWorldMatrices();
                    const iwt = babylonjs_Meshes_mesh__WEBPACK_IMPORTED_MODULE_1__.TmpVectors.Vector3[2];
                    const iwr = babylonjs_Meshes_mesh__WEBPACK_IMPORTED_MODULE_1__.TmpVectors.Quaternion[1];
                    const iws = babylonjs_Meshes_mesh__WEBPACK_IMPORTED_MODULE_1__.TmpVectors.Vector3[3];
                    let hasAnyInstanceWorldTranslation = false;
                    let hasAnyInstanceWorldRotation = false;
                    let hasAnyInstanceWorldScale = false;
                    // prepare temp buffers
                    const translationBuffer = new Float32Array(babylonNode.thinInstanceCount * 3);
                    const rotationBuffer = new Float32Array(babylonNode.thinInstanceCount * 4);
                    const scaleBuffer = new Float32Array(babylonNode.thinInstanceCount * 3);
                    let i = 0;
                    for (const m of matrix) {
                        m.decompose(iws, iwr, iwt);
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
                    const extension = {
                        attributes: {},
                    };
                    // do we need to write TRANSLATION ?
                    if (hasAnyInstanceWorldTranslation) {
                        extension.attributes["TRANSLATION"] = this._buildAccessor(translationBuffer, "VEC3" /* AccessorType.VEC3 */, babylonNode.thinInstanceCount, binaryWriter, 5126 /* AccessorComponentType.FLOAT */);
                    }
                    // do we need to write ROTATION ?
                    if (hasAnyInstanceWorldRotation) {
                        const componentType = 5126 /* AccessorComponentType.FLOAT */; // we decided to stay on FLOAT for now see https://github.com/BabylonJS/Babylon.js/pull/12495
                        extension.attributes["ROTATION"] = this._buildAccessor(rotationBuffer, "VEC4" /* AccessorType.VEC4 */, babylonNode.thinInstanceCount, binaryWriter, componentType);
                    }
                    // do we need to write SCALE ?
                    if (hasAnyInstanceWorldScale) {
                        extension.attributes["SCALE"] = this._buildAccessor(scaleBuffer, "VEC3" /* AccessorType.VEC3 */, babylonNode.thinInstanceCount, binaryWriter, 5126 /* AccessorComponentType.FLOAT */);
                    }
                    /* eslint-enable @typescript-eslint/naming-convention*/
                    node.extensions = node.extensions || {};
                    node.extensions[NAME] = extension;
                }
            }
            resolve(node);
        });
    }
    _buildAccessor(buffer, type, count, binaryWriter, componentType) {
        // write the buffer
        const bufferOffset = binaryWriter.getByteOffset();
        switch (componentType) {
            case 5126 /* AccessorComponentType.FLOAT */: {
                for (let i = 0; i != buffer.length; i++) {
                    binaryWriter.setFloat32(buffer[i]);
                }
                break;
            }
            case 5120 /* AccessorComponentType.BYTE */: {
                for (let i = 0; i != buffer.length; i++) {
                    binaryWriter.setByte(buffer[i] * 127);
                }
                break;
            }
            case 5122 /* AccessorComponentType.SHORT */: {
                for (let i = 0; i != buffer.length; i++) {
                    binaryWriter.setInt16(buffer[i] * 32767);
                }
                break;
            }
        }
        // build the buffer view
        const bv = { buffer: 0, byteOffset: bufferOffset, byteLength: buffer.length * babylonjs_Meshes_mesh__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.GetTypeByteLength(componentType) };
        const bufferViewIndex = this._exporter._bufferViews.length;
        this._exporter._bufferViews.push(bv);
        // finally build the accessor
        const accessorIndex = this._exporter._accessors.length;
        const accessor = {
            bufferView: bufferViewIndex,
            componentType: componentType,
            count: count,
            type: type,
            normalized: componentType == 5120 /* AccessorComponentType.BYTE */ || componentType == 5122 /* AccessorComponentType.SHORT */,
        };
        this._exporter._accessors.push(accessor);
        return accessorIndex;
    }
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
_glTFExporter__WEBPACK_IMPORTED_MODULE_0__._Exporter.RegisterExtension(NAME, (exporter) => new EXT_mesh_gpu_instancing(exporter));


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
/* harmony import */ var babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Misc/logger */ "babylonjs/Maths/math.vector");
/* harmony import */ var babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _glTFExporter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../glTFExporter */ "../../../dev/serializers/src/glTF/2.0/glTFExporter.ts");






const NAME = "KHR_lights_punctual";
/**
 * [Specification](https://github.com/KhronosGroup/glTF/blob/master/extensions/2.0/Khronos/KHR_lights_punctual/README.md)
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
class KHR_lights_punctual {
    /**
     * @internal
     */
    constructor(exporter) {
        /** The name of this extension. */
        this.name = NAME;
        /** Defines whether this extension is enabled. */
        this.enabled = true;
        /** Defines whether this extension is required */
        this.required = false;
        this._exporter = exporter;
    }
    /** @internal */
    dispose() {
        this._lights = null;
    }
    /** @internal */
    get wasUsed() {
        return !!this._lights;
    }
    /** @internal */
    onExporting() {
        this._exporter._glTF.extensions[NAME] = this._lights;
    }
    /**
     * Define this method to modify the default behavior when exporting a node
     * @param context The context when exporting the node
     * @param node glTF node
     * @param babylonNode BabylonJS node
     * @param nodeMap Node mapping of unique id to glTF node index
     * @returns nullable INode promise
     */
    postExportNodeAsync(context, node, babylonNode, nodeMap) {
        return new Promise((resolve) => {
            if (node && babylonNode instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.ShadowLight) {
                let light;
                const lightType = babylonNode.getTypeID() == babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Light.LIGHTTYPEID_POINTLIGHT
                    ? "point" /* KHRLightsPunctual_LightType.POINT */
                    : babylonNode.getTypeID() == babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Light.LIGHTTYPEID_DIRECTIONALLIGHT
                        ? "directional" /* KHRLightsPunctual_LightType.DIRECTIONAL */
                        : babylonNode.getTypeID() == babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Light.LIGHTTYPEID_SPOTLIGHT
                            ? "spot" /* KHRLightsPunctual_LightType.SPOT */
                            : null;
                if (lightType == null) {
                    babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Logger.Warn(`${context}: Light ${babylonNode.name} is not supported in ${NAME}`);
                }
                else {
                    if (!babylonNode.position.equalsToFloats(0, 0, 0)) {
                        node.translation = babylonNode.position.asArray();
                    }
                    if (lightType !== "point" /* KHRLightsPunctual_LightType.POINT */) {
                        const localAxis = babylonNode.direction;
                        const yaw = -Math.atan2(localAxis.z, localAxis.x) + Math.PI / 2;
                        const len = Math.sqrt(localAxis.x * localAxis.x + localAxis.z * localAxis.z);
                        const pitch = -Math.atan2(localAxis.y, len);
                        const lightRotationQuaternion = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.RotationYawPitchRoll(yaw + Math.PI, pitch, 0);
                        if (!babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.IsIdentity(lightRotationQuaternion)) {
                            node.rotation = lightRotationQuaternion.asArray();
                        }
                    }
                    if (babylonNode.falloffType !== babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Light.FALLOFF_GLTF) {
                        babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Logger.Warn(`${context}: Light falloff for ${babylonNode.name} does not match the ${NAME} specification!`);
                    }
                    light = {
                        type: lightType,
                    };
                    if (!babylonNode.diffuse.equals(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Color3.White())) {
                        light.color = babylonNode.diffuse.asArray();
                    }
                    if (babylonNode.intensity !== 1.0) {
                        light.intensity = babylonNode.intensity;
                    }
                    if (babylonNode.range !== Number.MAX_VALUE) {
                        light.range = babylonNode.range;
                    }
                    if (lightType === "spot" /* KHRLightsPunctual_LightType.SPOT */) {
                        const babylonSpotLight = babylonNode;
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
                    this._lights ||= {
                        lights: [],
                    };
                    this._lights.lights.push(light);
                    const lightReference = {
                        light: this._lights.lights.length - 1,
                    };
                    // Avoid duplicating the Light's parent node if possible.
                    const parentBabylonNode = babylonNode.parent;
                    if (parentBabylonNode && parentBabylonNode.getChildren().length == 1) {
                        const parentNode = this._exporter._nodes[nodeMap[parentBabylonNode.uniqueId]];
                        if (parentNode) {
                            const parentTranslation = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArrayToRef(parentNode.translation || [0, 0, 0], 0, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Vector3[0]);
                            const parentRotation = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.FromArrayToRef(parentNode.rotation || [0, 0, 0, 1], 0, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Quaternion[0]);
                            const parentScale = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArrayToRef(parentNode.scale || [1, 1, 1], 0, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Vector3[1]);
                            const parentMatrix = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Matrix.ComposeToRef(parentScale, parentRotation, parentTranslation, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Matrix[0]);
                            const translation = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArrayToRef(node.translation || [0, 0, 0], 0, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Vector3[2]);
                            const rotation = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.FromArrayToRef(node.rotation || [0, 0, 0, 1], 0, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Quaternion[1]);
                            const matrix = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Matrix.ComposeToRef(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.OneReadOnly, rotation, translation, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Matrix[1]);
                            parentMatrix.multiplyToRef(matrix, matrix);
                            matrix.decompose(parentScale, parentRotation, parentTranslation);
                            if (parentTranslation.equalsToFloats(0, 0, 0)) {
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
                            if (parentScale.equalsToFloats(1, 1, 1)) {
                                delete parentNode.scale;
                            }
                            else {
                                parentNode.scale = parentScale.asArray();
                            }
                            parentNode.extensions ||= {};
                            parentNode.extensions[NAME] = lightReference;
                            // Do not export the original node
                            resolve(null);
                            return;
                        }
                    }
                    node.extensions ||= {};
                    node.extensions[NAME] = lightReference;
                }
            }
            resolve(node);
        });
    }
}
_glTFExporter__WEBPACK_IMPORTED_MODULE_1__._Exporter.RegisterExtension(NAME, (exporter) => new KHR_lights_punctual(exporter));


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
/* harmony import */ var babylonjs_Materials_PBR_pbrBaseMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs/Materials/PBR/pbrBaseMaterial */ "babylonjs/Maths/math.vector");
/* harmony import */ var babylonjs_Materials_PBR_pbrBaseMaterial__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Materials_PBR_pbrBaseMaterial__WEBPACK_IMPORTED_MODULE_1__);


const NAME = "KHR_materials_anisotropy";
/**
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
class KHR_materials_anisotropy {
    constructor(exporter) {
        /** Name of this extension */
        this.name = NAME;
        /** Defines whether this extension is enabled */
        this.enabled = true;
        /** Defines whether this extension is required */
        this.required = false;
        this._wasUsed = false;
        this._exporter = exporter;
    }
    dispose() { }
    /** @internal */
    get wasUsed() {
        return this._wasUsed;
    }
    postExportMaterialAdditionalTextures(context, node, babylonMaterial) {
        const additionalTextures = [];
        if (babylonMaterial instanceof babylonjs_Materials_PBR_pbrBaseMaterial__WEBPACK_IMPORTED_MODULE_1__.PBRBaseMaterial) {
            if (babylonMaterial.anisotropy.isEnabled && !babylonMaterial.anisotropy.legacy) {
                if (babylonMaterial.anisotropy.texture) {
                    additionalTextures.push(babylonMaterial.anisotropy.texture);
                }
                return additionalTextures;
            }
        }
        return [];
    }
    postExportMaterialAsync(context, node, babylonMaterial) {
        return new Promise((resolve) => {
            if (babylonMaterial instanceof babylonjs_Materials_PBR_pbrBaseMaterial__WEBPACK_IMPORTED_MODULE_1__.PBRBaseMaterial) {
                if (!babylonMaterial.anisotropy.isEnabled || babylonMaterial.anisotropy.legacy) {
                    resolve(node);
                    return;
                }
                this._wasUsed = true;
                node.extensions = node.extensions || {};
                const anisotropyTextureInfo = this._exporter._glTFMaterialExporter._getTextureInfo(babylonMaterial.anisotropy.texture);
                const anisotropyInfo = {
                    anisotropyStrength: babylonMaterial.anisotropy.intensity,
                    anisotropyRotation: babylonMaterial.anisotropy.angle,
                    anisotropyTexture: anisotropyTextureInfo ?? undefined,
                    hasTextures: () => {
                        return anisotropyInfo.anisotropyTexture !== null;
                    },
                };
                node.extensions[NAME] = anisotropyInfo;
            }
            resolve(node);
        });
    }
}
_glTFExporter__WEBPACK_IMPORTED_MODULE_0__._Exporter.RegisterExtension(NAME, (exporter) => new KHR_materials_anisotropy(exporter));


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
/* harmony import */ var babylonjs_Materials_PBR_pbrBaseMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs/Misc/tools */ "babylonjs/Maths/math.vector");
/* harmony import */ var babylonjs_Materials_PBR_pbrBaseMaterial__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Materials_PBR_pbrBaseMaterial__WEBPACK_IMPORTED_MODULE_1__);



const NAME = "KHR_materials_clearcoat";
/**
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
class KHR_materials_clearcoat {
    constructor(exporter) {
        /** Name of this extension */
        this.name = NAME;
        /** Defines whether this extension is enabled */
        this.enabled = true;
        /** Defines whether this extension is required */
        this.required = false;
        this._wasUsed = false;
        this._exporter = exporter;
    }
    dispose() { }
    /** @internal */
    get wasUsed() {
        return this._wasUsed;
    }
    postExportMaterialAdditionalTextures(context, node, babylonMaterial) {
        const additionalTextures = [];
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
    }
    postExportMaterialAsync(context, node, babylonMaterial) {
        return new Promise((resolve) => {
            if (babylonMaterial instanceof babylonjs_Materials_PBR_pbrBaseMaterial__WEBPACK_IMPORTED_MODULE_1__.PBRBaseMaterial) {
                if (!babylonMaterial.clearCoat.isEnabled) {
                    resolve(node);
                    return;
                }
                this._wasUsed = true;
                node.extensions = node.extensions || {};
                const clearCoatTextureInfo = this._exporter._glTFMaterialExporter._getTextureInfo(babylonMaterial.clearCoat.texture);
                let clearCoatTextureRoughnessInfo;
                if (babylonMaterial.clearCoat.useRoughnessFromMainTexture) {
                    clearCoatTextureRoughnessInfo = this._exporter._glTFMaterialExporter._getTextureInfo(babylonMaterial.clearCoat.texture);
                }
                else {
                    clearCoatTextureRoughnessInfo = this._exporter._glTFMaterialExporter._getTextureInfo(babylonMaterial.clearCoat.textureRoughness);
                }
                if (babylonMaterial.clearCoat.isTintEnabled) {
                    babylonjs_Materials_PBR_pbrBaseMaterial__WEBPACK_IMPORTED_MODULE_1__.Tools.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${babylonMaterial.name}`);
                }
                if (babylonMaterial.clearCoat.remapF0OnInterfaceChange) {
                    babylonjs_Materials_PBR_pbrBaseMaterial__WEBPACK_IMPORTED_MODULE_1__.Tools.Warn(`Clear Color F0 remapping is not supported for glTF export. Ignoring for: ${babylonMaterial.name}`);
                }
                const clearCoatNormalTextureInfo = this._exporter._glTFMaterialExporter._getTextureInfo(babylonMaterial.clearCoat.bumpTexture);
                const clearCoatInfo = {
                    clearcoatFactor: babylonMaterial.clearCoat.intensity,
                    clearcoatTexture: clearCoatTextureInfo ?? undefined,
                    clearcoatRoughnessFactor: babylonMaterial.clearCoat.roughness,
                    clearcoatRoughnessTexture: clearCoatTextureRoughnessInfo ?? undefined,
                    clearcoatNormalTexture: clearCoatNormalTextureInfo ?? undefined,
                    hasTextures: () => {
                        return clearCoatInfo.clearcoatTexture !== null || clearCoatInfo.clearcoatRoughnessTexture !== null || clearCoatInfo.clearcoatRoughnessTexture !== null;
                    },
                };
                node.extensions[NAME] = clearCoatInfo;
            }
            resolve(node);
        });
    }
}
_glTFExporter__WEBPACK_IMPORTED_MODULE_0__._Exporter.RegisterExtension(NAME, (exporter) => new KHR_materials_clearcoat(exporter));


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
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs/Materials/PBR/pbrMaterial */ "babylonjs/Maths/math.vector");
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__);


const NAME = "KHR_materials_emissive_strength";
/**
 * [Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_materials_emissive_strength/README.md)
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
class KHR_materials_emissive_strength {
    constructor() {
        /** Name of this extension */
        this.name = NAME;
        /** Defines whether this extension is enabled */
        this.enabled = true;
        /** Defines whether this extension is required */
        this.required = false;
        this._wasUsed = false;
    }
    dispose() { }
    /** @interal */
    get wasUsed() {
        return this._wasUsed;
    }
    postExportMaterialAsync(context, node, babylonMaterial) {
        return new Promise((resolve) => {
            if (!(babylonMaterial instanceof babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__.PBRMaterial)) {
                return resolve(node);
            }
            const emissiveColor = babylonMaterial.emissiveColor.asArray();
            const tempEmissiveStrength = Math.max(...emissiveColor);
            if (tempEmissiveStrength > 1) {
                this._wasUsed = true;
                node.extensions ||= {};
                const emissiveStrengthInfo = {
                    emissiveStrength: tempEmissiveStrength,
                };
                // Normalize each value of the emissive factor to have a max value of 1
                const newEmissiveFactor = babylonMaterial.emissiveColor.scale(1 / emissiveStrengthInfo.emissiveStrength);
                node.emissiveFactor = newEmissiveFactor.asArray();
                node.extensions[NAME] = emissiveStrengthInfo;
            }
            return resolve(node);
        });
    }
}
_glTFExporter__WEBPACK_IMPORTED_MODULE_0__._Exporter.RegisterExtension(NAME, (exporter) => new KHR_materials_emissive_strength());


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
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs/Materials/PBR/pbrMaterial */ "babylonjs/Maths/math.vector");
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__);


const NAME = "KHR_materials_ior";
/**
 * [Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_materials_ior/README.md)
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
class KHR_materials_ior {
    constructor() {
        /** Name of this extension */
        this.name = NAME;
        /** Defines whether this extension is enabled */
        this.enabled = true;
        /** Defines whether this extension is required */
        this.required = false;
        this._wasUsed = false;
    }
    dispose() { }
    /** @internal */
    get wasUsed() {
        return this._wasUsed;
    }
    _isExtensionEnabled(mat) {
        // This extension must not be used on a material that also uses KHR_materials_unlit
        if (mat.unlit) {
            return false;
        }
        return mat.indexOfRefraction != undefined && mat.indexOfRefraction != 1.5; // 1.5 is normative default value.
    }
    postExportMaterialAsync(context, node, babylonMaterial) {
        return new Promise((resolve) => {
            if (babylonMaterial instanceof babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__.PBRMaterial && this._isExtensionEnabled(babylonMaterial)) {
                this._wasUsed = true;
                const iorInfo = {
                    ior: babylonMaterial.indexOfRefraction,
                };
                node.extensions = node.extensions || {};
                node.extensions[NAME] = iorInfo;
            }
            resolve(node);
        });
    }
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
_glTFExporter__WEBPACK_IMPORTED_MODULE_0__._Exporter.RegisterExtension(NAME, (exporter) => new KHR_materials_ior());


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
/* harmony import */ var babylonjs_Materials_PBR_pbrBaseMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs/Materials/PBR/pbrBaseMaterial */ "babylonjs/Maths/math.vector");
/* harmony import */ var babylonjs_Materials_PBR_pbrBaseMaterial__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Materials_PBR_pbrBaseMaterial__WEBPACK_IMPORTED_MODULE_1__);


const NAME = "KHR_materials_iridescence";
/**
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
class KHR_materials_iridescence {
    constructor(exporter) {
        /** Name of this extension */
        this.name = NAME;
        /** Defines whether this extension is enabled */
        this.enabled = true;
        /** Defines whether this extension is required */
        this.required = false;
        this._wasUsed = false;
        this._exporter = exporter;
    }
    dispose() { }
    /** @internal */
    get wasUsed() {
        return this._wasUsed;
    }
    postExportMaterialAdditionalTextures(context, node, babylonMaterial) {
        const additionalTextures = [];
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
    }
    postExportMaterialAsync(context, node, babylonMaterial) {
        return new Promise((resolve) => {
            if (babylonMaterial instanceof babylonjs_Materials_PBR_pbrBaseMaterial__WEBPACK_IMPORTED_MODULE_1__.PBRBaseMaterial) {
                if (!babylonMaterial.iridescence.isEnabled) {
                    resolve(node);
                    return;
                }
                this._wasUsed = true;
                node.extensions = node.extensions || {};
                const iridescenceTextureInfo = this._exporter._glTFMaterialExporter._getTextureInfo(babylonMaterial.iridescence.texture);
                const iridescenceThicknessTextureInfo = this._exporter._glTFMaterialExporter._getTextureInfo(babylonMaterial.iridescence.thicknessTexture);
                const iridescenceInfo = {
                    iridescenceFactor: babylonMaterial.iridescence.intensity,
                    iridescenceIor: babylonMaterial.iridescence.indexOfRefraction,
                    iridescenceThicknessMinimum: babylonMaterial.iridescence.minimumThickness,
                    iridescenceThicknessMaximum: babylonMaterial.iridescence.maximumThickness,
                    iridescenceTexture: iridescenceTextureInfo ?? undefined,
                    iridescenceThicknessTexture: iridescenceThicknessTextureInfo ?? undefined,
                    hasTextures: () => {
                        return iridescenceInfo.iridescenceTexture !== null || iridescenceInfo.iridescenceThicknessTexture !== null;
                    },
                };
                node.extensions[NAME] = iridescenceInfo;
            }
            resolve(node);
        });
    }
}
_glTFExporter__WEBPACK_IMPORTED_MODULE_0__._Exporter.RegisterExtension(NAME, (exporter) => new KHR_materials_iridescence(exporter));


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
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs/Materials/PBR/pbrMaterial */ "babylonjs/Maths/math.vector");
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__);


const NAME = "KHR_materials_sheen";
/**
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
class KHR_materials_sheen {
    constructor(exporter) {
        /** Name of this extension */
        this.name = NAME;
        /** Defines whether this extension is enabled */
        this.enabled = true;
        /** Defines whether this extension is required */
        this.required = false;
        this._wasUsed = false;
        this._exporter = exporter;
    }
    dispose() { }
    /** @internal */
    get wasUsed() {
        return this._wasUsed;
    }
    postExportMaterialAdditionalTextures(context, node, babylonMaterial) {
        if (babylonMaterial instanceof babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__.PBRMaterial) {
            if (babylonMaterial.sheen.isEnabled && babylonMaterial.sheen.texture) {
                return [babylonMaterial.sheen.texture];
            }
        }
        return [];
    }
    postExportMaterialAsync(context, node, babylonMaterial) {
        return new Promise((resolve) => {
            if (babylonMaterial instanceof babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__.PBRMaterial) {
                if (!babylonMaterial.sheen.isEnabled) {
                    resolve(node);
                    return;
                }
                this._wasUsed = true;
                if (node.extensions == null) {
                    node.extensions = {};
                }
                const sheenInfo = {
                    sheenColorFactor: babylonMaterial.sheen.color.asArray(),
                    sheenRoughnessFactor: babylonMaterial.sheen.roughness ?? 0,
                    hasTextures: () => {
                        return sheenInfo.sheenColorTexture !== null || sheenInfo.sheenRoughnessTexture !== null;
                    },
                };
                if (babylonMaterial.sheen.texture) {
                    sheenInfo.sheenColorTexture = this._exporter._glTFMaterialExporter._getTextureInfo(babylonMaterial.sheen.texture) ?? undefined;
                }
                if (babylonMaterial.sheen.textureRoughness && !babylonMaterial.sheen.useRoughnessFromMainTexture) {
                    sheenInfo.sheenRoughnessTexture = this._exporter._glTFMaterialExporter._getTextureInfo(babylonMaterial.sheen.textureRoughness) ?? undefined;
                }
                else if (babylonMaterial.sheen.texture && babylonMaterial.sheen.useRoughnessFromMainTexture) {
                    sheenInfo.sheenRoughnessTexture = this._exporter._glTFMaterialExporter._getTextureInfo(babylonMaterial.sheen.texture) ?? undefined;
                }
                node.extensions[NAME] = sheenInfo;
            }
            resolve(node);
        });
    }
}
_glTFExporter__WEBPACK_IMPORTED_MODULE_0__._Exporter.RegisterExtension(NAME, (exporter) => new KHR_materials_sheen(exporter));


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
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs/Materials/PBR/pbrMaterial */ "babylonjs/Maths/math.vector");
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__);


const NAME = "KHR_materials_specular";
/**
 * [Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_materials_specular/README.md)
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
class KHR_materials_specular {
    constructor(exporter) {
        /** Name of this extension */
        this.name = NAME;
        /** Defines whether this extension is enabled */
        this.enabled = true;
        /** Defines whether this extension is required */
        this.required = false;
        this._wasUsed = false;
        this._exporter = exporter;
    }
    dispose() { }
    /** @internal */
    get wasUsed() {
        return this._wasUsed;
    }
    postExportMaterialAdditionalTextures(context, node, babylonMaterial) {
        const additionalTextures = [];
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
    }
    _isExtensionEnabled(mat) {
        // This extension must not be used on a material that also uses KHR_materials_unlit
        if (mat.unlit) {
            return false;
        }
        return ((mat.metallicF0Factor != undefined && mat.metallicF0Factor != 1.0) ||
            (mat.metallicReflectanceColor != undefined && !mat.metallicReflectanceColor.equalsFloats(1.0, 1.0, 1.0)) ||
            this._hasTexturesExtension(mat));
    }
    _hasTexturesExtension(mat) {
        return mat.metallicReflectanceTexture != null || mat.reflectanceTexture != null;
    }
    postExportMaterialAsync(context, node, babylonMaterial) {
        return new Promise((resolve) => {
            if (babylonMaterial instanceof babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__.PBRMaterial && this._isExtensionEnabled(babylonMaterial)) {
                this._wasUsed = true;
                node.extensions = node.extensions || {};
                const metallicReflectanceTexture = this._exporter._glTFMaterialExporter._getTextureInfo(babylonMaterial.metallicReflectanceTexture) ?? undefined;
                const reflectanceTexture = this._exporter._glTFMaterialExporter._getTextureInfo(babylonMaterial.reflectanceTexture) ?? undefined;
                const metallicF0Factor = babylonMaterial.metallicF0Factor == 1.0 ? undefined : babylonMaterial.metallicF0Factor;
                const metallicReflectanceColor = babylonMaterial.metallicReflectanceColor.equalsFloats(1.0, 1.0, 1.0)
                    ? undefined
                    : babylonMaterial.metallicReflectanceColor.asArray();
                const specularInfo = {
                    specularFactor: metallicF0Factor,
                    specularTexture: metallicReflectanceTexture,
                    specularColorFactor: metallicReflectanceColor,
                    specularColorTexture: reflectanceTexture,
                    hasTextures: () => {
                        return this._hasTexturesExtension(babylonMaterial);
                    },
                };
                node.extensions[NAME] = specularInfo;
            }
            resolve(node);
        });
    }
}
_glTFExporter__WEBPACK_IMPORTED_MODULE_0__._Exporter.RegisterExtension(NAME, (exporter) => new KHR_materials_specular(exporter));


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
/* harmony import */ var _glTFExporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../glTFExporter */ "../../../dev/serializers/src/glTF/2.0/glTFExporter.ts");
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs/Materials/PBR/pbrMaterial */ "babylonjs/Maths/math.vector");
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__);


const NAME = "KHR_materials_transmission";
/**
 * [Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_materials_transmission/README.md)
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
class KHR_materials_transmission {
    constructor(exporter) {
        /** Name of this extension */
        this.name = NAME;
        /** Defines whether this extension is enabled */
        this.enabled = true;
        /** Defines whether this extension is required */
        this.required = false;
        this._wasUsed = false;
        this._exporter = exporter;
    }
    dispose() { }
    /** @internal */
    get wasUsed() {
        return this._wasUsed;
    }
    postExportMaterialAdditionalTextures(context, node, babylonMaterial) {
        const additionalTextures = [];
        if (babylonMaterial instanceof babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__.PBRMaterial) {
            if (this._isExtensionEnabled(babylonMaterial)) {
                if (babylonMaterial.subSurface.thicknessTexture) {
                    additionalTextures.push(babylonMaterial.subSurface.thicknessTexture);
                }
                return additionalTextures;
            }
        }
        return additionalTextures;
    }
    _isExtensionEnabled(mat) {
        // This extension must not be used on a material that also uses KHR_materials_unlit
        if (mat.unlit) {
            return false;
        }
        const subs = mat.subSurface;
        return (subs.isRefractionEnabled && subs.refractionIntensity != undefined && subs.refractionIntensity != 0) || this._hasTexturesExtension(mat);
    }
    _hasTexturesExtension(mat) {
        return mat.subSurface.refractionIntensityTexture != null;
    }
    postExportMaterialAsync(context, node, babylonMaterial) {
        return new Promise((resolve) => {
            if (babylonMaterial instanceof babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__.PBRMaterial && this._isExtensionEnabled(babylonMaterial)) {
                this._wasUsed = true;
                const subs = babylonMaterial.subSurface;
                const transmissionFactor = subs.refractionIntensity === 0 ? undefined : subs.refractionIntensity;
                const transmissionTexture = this._exporter._glTFMaterialExporter._getTextureInfo(subs.refractionIntensityTexture) ?? undefined;
                const volumeInfo = {
                    transmissionFactor: transmissionFactor,
                    transmissionTexture: transmissionTexture,
                    hasTextures: () => {
                        return this._hasTexturesExtension(babylonMaterial);
                    },
                };
                node.extensions = node.extensions || {};
                node.extensions[NAME] = volumeInfo;
            }
            resolve(node);
        });
    }
}
_glTFExporter__WEBPACK_IMPORTED_MODULE_0__._Exporter.RegisterExtension(NAME, (exporter) => new KHR_materials_transmission(exporter));


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
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs/Materials/standardMaterial */ "babylonjs/Maths/math.vector");
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__);



const NAME = "KHR_materials_unlit";
/**
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
class KHR_materials_unlit {
    constructor() {
        /** Name of this extension */
        this.name = NAME;
        /** Defines whether this extension is enabled */
        this.enabled = true;
        /** Defines whether this extension is required */
        this.required = false;
        this._wasUsed = false;
    }
    /** @internal */
    get wasUsed() {
        return this._wasUsed;
    }
    dispose() { }
    postExportMaterialAsync(context, node, babylonMaterial) {
        return new Promise((resolve) => {
            let unlitMaterial = false;
            if (babylonMaterial instanceof babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__.PBRMaterial) {
                unlitMaterial = babylonMaterial.unlit;
            }
            else if (babylonMaterial instanceof babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__.StandardMaterial) {
                unlitMaterial = babylonMaterial.disableLighting;
            }
            if (unlitMaterial) {
                this._wasUsed = true;
                if (node.extensions == null) {
                    node.extensions = {};
                }
                node.extensions[NAME] = {};
            }
            resolve(node);
        });
    }
}
_glTFExporter__WEBPACK_IMPORTED_MODULE_0__._Exporter.RegisterExtension(NAME, () => new KHR_materials_unlit());


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
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs/Maths/math.color */ "babylonjs/Maths/math.vector");
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__);



const NAME = "KHR_materials_volume";
/**
 * [Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_materials_volume/README.md)
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
class KHR_materials_volume {
    constructor(exporter) {
        /** Name of this extension */
        this.name = NAME;
        /** Defines whether this extension is enabled */
        this.enabled = true;
        /** Defines whether this extension is required */
        this.required = false;
        this._wasUsed = false;
        this._exporter = exporter;
    }
    dispose() { }
    /** @internal */
    get wasUsed() {
        return this._wasUsed;
    }
    postExportMaterialAdditionalTextures(context, node, babylonMaterial) {
        const additionalTextures = [];
        if (babylonMaterial instanceof babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__.PBRMaterial) {
            if (this._isExtensionEnabled(babylonMaterial)) {
                if (babylonMaterial.subSurface.thicknessTexture) {
                    additionalTextures.push(babylonMaterial.subSurface.thicknessTexture);
                }
                return additionalTextures;
            }
        }
        return additionalTextures;
    }
    _isExtensionEnabled(mat) {
        // This extension must not be used on a material that also uses KHR_materials_unlit
        if (mat.unlit) {
            return false;
        }
        const subs = mat.subSurface;
        // this extension requires either the KHR_materials_transmission or KHR_materials_translucency extensions.
        if (!subs.isRefractionEnabled && !subs.isTranslucencyEnabled) {
            return false;
        }
        return ((subs.maximumThickness != undefined && subs.maximumThickness != 0) ||
            (subs.tintColorAtDistance != undefined && subs.tintColorAtDistance != Number.POSITIVE_INFINITY) ||
            (subs.tintColor != undefined && subs.tintColor != babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__.Color3.White()) ||
            this._hasTexturesExtension(mat));
    }
    _hasTexturesExtension(mat) {
        return mat.subSurface.thicknessTexture != null;
    }
    postExportMaterialAsync(context, node, babylonMaterial) {
        return new Promise((resolve) => {
            if (babylonMaterial instanceof babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__.PBRMaterial && this._isExtensionEnabled(babylonMaterial)) {
                this._wasUsed = true;
                const subs = babylonMaterial.subSurface;
                const thicknessFactor = subs.maximumThickness == 0 ? undefined : subs.maximumThickness;
                const thicknessTexture = this._exporter._glTFMaterialExporter._getTextureInfo(subs.thicknessTexture) ?? undefined;
                const attenuationDistance = subs.tintColorAtDistance == Number.POSITIVE_INFINITY ? undefined : subs.tintColorAtDistance;
                const attenuationColor = subs.tintColor.equalsFloats(1.0, 1.0, 1.0) ? undefined : subs.tintColor.asArray();
                const volumeInfo = {
                    thicknessFactor: thicknessFactor,
                    thicknessTexture: thicknessTexture,
                    attenuationDistance: attenuationDistance,
                    attenuationColor: attenuationColor,
                    hasTextures: () => {
                        return this._hasTexturesExtension(babylonMaterial);
                    },
                };
                node.extensions = node.extensions || {};
                node.extensions[NAME] = volumeInfo;
            }
            resolve(node);
        });
    }
}
_glTFExporter__WEBPACK_IMPORTED_MODULE_0__._Exporter.RegisterExtension(NAME, (exporter) => new KHR_materials_volume(exporter));


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
/* harmony import */ var babylonjs_Misc_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Misc/tools */ "babylonjs/Maths/math.vector");
/* harmony import */ var babylonjs_Misc_tools__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Misc_tools__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _glTFExporter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../glTFExporter */ "../../../dev/serializers/src/glTF/2.0/glTFExporter.ts");


const NAME = "KHR_texture_transform";
/**
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
class KHR_texture_transform {
    constructor() {
        /** Name of this extension */
        this.name = NAME;
        /** Defines whether this extension is enabled */
        this.enabled = true;
        /** Defines whether this extension is required */
        this.required = false;
        /** Reference to the glTF exporter */
        this._wasUsed = false;
    }
    dispose() { }
    /** @internal */
    get wasUsed() {
        return this._wasUsed;
    }
    postExportTexture(context, textureInfo, babylonTexture) {
        const canUseExtension = babylonTexture &&
            ((babylonTexture.uAng === 0 && babylonTexture.wAng === 0 && babylonTexture.vAng === 0) ||
                (babylonTexture.uRotationCenter === 0 && babylonTexture.vRotationCenter === 0));
        if (canUseExtension) {
            const textureTransform = {};
            let transformIsRequired = false;
            if (babylonTexture.uOffset !== 0 || babylonTexture.vOffset !== 0) {
                textureTransform.offset = [babylonTexture.uOffset, babylonTexture.vOffset];
                transformIsRequired = true;
            }
            if (babylonTexture.uScale !== 1 || babylonTexture.vScale !== 1) {
                textureTransform.scale = [babylonTexture.uScale, babylonTexture.vScale];
                transformIsRequired = true;
            }
            if (babylonTexture.wAng !== 0) {
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
        }
    }
    preExportTextureAsync(context, babylonTexture) {
        return new Promise((resolve, reject) => {
            const scene = babylonTexture.getScene();
            if (!scene) {
                reject(`${context}: "scene" is not defined for Babylon texture ${babylonTexture.name}!`);
                return;
            }
            /*
             * The KHR_texture_transform schema only supports w rotation around the origin.
             * See https://github.com/KhronosGroup/glTF/tree/main/extensions/2.0/Khronos/KHR_texture_transform#gltf-schema-updates.
             */
            if (babylonTexture.uAng !== 0 || babylonTexture.vAng !== 0) {
                babylonjs_Misc_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.Warn(`${context}: Texture ${babylonTexture.name} with rotation in the u or v axis is not supported in glTF.`);
                resolve(null);
            }
            else if (babylonTexture.wAng !== 0 && (babylonTexture.uRotationCenter !== 0 || babylonTexture.vRotationCenter !== 0)) {
                babylonjs_Misc_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.Warn(`${context}: Texture ${babylonTexture.name} with rotation not centered at the origin cannot be exported with ${NAME}`);
                resolve(null);
            }
            else {
                resolve(babylonTexture);
            }
        });
    }
}
_glTFExporter__WEBPACK_IMPORTED_MODULE_1__._Exporter.RegisterExtension(NAME, () => new KHR_texture_transform());


/***/ }),

/***/ "../../../dev/serializers/src/glTF/2.0/Extensions/index.ts":
/*!*****************************************************************!*\
  !*** ../../../dev/serializers/src/glTF/2.0/Extensions/index.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EXT_mesh_gpu_instancing: () => (/* reexport safe */ _EXT_mesh_gpu_instancing__WEBPACK_IMPORTED_MODULE_11__.EXT_mesh_gpu_instancing),
/* harmony export */   KHR_lights_punctual: () => (/* reexport safe */ _KHR_lights_punctual__WEBPACK_IMPORTED_MODULE_1__.KHR_lights_punctual),
/* harmony export */   KHR_materials_anisotropy: () => (/* reexport safe */ _KHR_materials_anisotropy__WEBPACK_IMPORTED_MODULE_4__.KHR_materials_anisotropy),
/* harmony export */   KHR_materials_clearcoat: () => (/* reexport safe */ _KHR_materials_clearcoat__WEBPACK_IMPORTED_MODULE_2__.KHR_materials_clearcoat),
/* harmony export */   KHR_materials_emissive_strength: () => (/* reexport safe */ _KHR_materials_emissive_strength__WEBPACK_IMPORTED_MODULE_12__.KHR_materials_emissive_strength),
/* harmony export */   KHR_materials_ior: () => (/* reexport safe */ _KHR_materials_ior__WEBPACK_IMPORTED_MODULE_7__.KHR_materials_ior),
/* harmony export */   KHR_materials_iridescence: () => (/* reexport safe */ _KHR_materials_iridescence__WEBPACK_IMPORTED_MODULE_3__.KHR_materials_iridescence),
/* harmony export */   KHR_materials_sheen: () => (/* reexport safe */ _KHR_materials_sheen__WEBPACK_IMPORTED_MODULE_5__.KHR_materials_sheen),
/* harmony export */   KHR_materials_specular: () => (/* reexport safe */ _KHR_materials_specular__WEBPACK_IMPORTED_MODULE_8__.KHR_materials_specular),
/* harmony export */   KHR_materials_transmission: () => (/* reexport safe */ _KHR_materials_transmission__WEBPACK_IMPORTED_MODULE_10__.KHR_materials_transmission),
/* harmony export */   KHR_materials_unlit: () => (/* reexport safe */ _KHR_materials_unlit__WEBPACK_IMPORTED_MODULE_6__.KHR_materials_unlit),
/* harmony export */   KHR_materials_volume: () => (/* reexport safe */ _KHR_materials_volume__WEBPACK_IMPORTED_MODULE_9__.KHR_materials_volume),
/* harmony export */   KHR_texture_transform: () => (/* reexport safe */ _KHR_texture_transform__WEBPACK_IMPORTED_MODULE_0__.KHR_texture_transform)
/* harmony export */ });
/* harmony import */ var _KHR_texture_transform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KHR_texture_transform */ "../../../dev/serializers/src/glTF/2.0/Extensions/KHR_texture_transform.ts");
/* harmony import */ var _KHR_lights_punctual__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KHR_lights_punctual */ "../../../dev/serializers/src/glTF/2.0/Extensions/KHR_lights_punctual.ts");
/* harmony import */ var _KHR_materials_clearcoat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./KHR_materials_clearcoat */ "../../../dev/serializers/src/glTF/2.0/Extensions/KHR_materials_clearcoat.ts");
/* harmony import */ var _KHR_materials_iridescence__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./KHR_materials_iridescence */ "../../../dev/serializers/src/glTF/2.0/Extensions/KHR_materials_iridescence.ts");
/* harmony import */ var _KHR_materials_anisotropy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./KHR_materials_anisotropy */ "../../../dev/serializers/src/glTF/2.0/Extensions/KHR_materials_anisotropy.ts");
/* harmony import */ var _KHR_materials_sheen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./KHR_materials_sheen */ "../../../dev/serializers/src/glTF/2.0/Extensions/KHR_materials_sheen.ts");
/* harmony import */ var _KHR_materials_unlit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./KHR_materials_unlit */ "../../../dev/serializers/src/glTF/2.0/Extensions/KHR_materials_unlit.ts");
/* harmony import */ var _KHR_materials_ior__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./KHR_materials_ior */ "../../../dev/serializers/src/glTF/2.0/Extensions/KHR_materials_ior.ts");
/* harmony import */ var _KHR_materials_specular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./KHR_materials_specular */ "../../../dev/serializers/src/glTF/2.0/Extensions/KHR_materials_specular.ts");
/* harmony import */ var _KHR_materials_volume__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./KHR_materials_volume */ "../../../dev/serializers/src/glTF/2.0/Extensions/KHR_materials_volume.ts");
/* harmony import */ var _KHR_materials_transmission__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./KHR_materials_transmission */ "../../../dev/serializers/src/glTF/2.0/Extensions/KHR_materials_transmission.ts");
/* harmony import */ var _EXT_mesh_gpu_instancing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./EXT_mesh_gpu_instancing */ "../../../dev/serializers/src/glTF/2.0/Extensions/EXT_mesh_gpu_instancing.ts");
/* harmony import */ var _KHR_materials_emissive_strength__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./KHR_materials_emissive_strength */ "../../../dev/serializers/src/glTF/2.0/Extensions/KHR_materials_emissive_strength.ts");















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
/* harmony import */ var babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Lights/light */ "babylonjs/Maths/math.vector");
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
class _GLTFAnimation {
    /**
     * Determine if a node is transformable - ie has properties it should be part of animation of transformation.
     * @param babylonNode the node to test
     * @returns true if can be animated, false otherwise. False if the parameter is null or undefined.
     */
    static _IsTransformable(babylonNode) {
        return babylonNode && (babylonNode instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TransformNode || babylonNode instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Camera || babylonNode instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Light);
    }
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
    static _CreateNodeAnimation(babylonTransformNode, animation, animationChannelTargetPath, useQuaternion, animationSampleRate) {
        if (this._IsTransformable(babylonTransformNode)) {
            const inputs = [];
            const outputs = [];
            const keyFrames = animation.getKeys();
            const minMaxKeyFrames = _GLTFAnimation._CalculateMinMaxKeyFrames(keyFrames);
            const interpolationOrBake = _GLTFAnimation._DeduceInterpolation(keyFrames, animationChannelTargetPath, useQuaternion);
            const interpolation = interpolationOrBake.interpolationType;
            const shouldBakeAnimation = interpolationOrBake.shouldBakeAnimation;
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
                const result = {
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
    }
    static _DeduceAnimationInfo(animation) {
        let animationChannelTargetPath = null;
        let dataAccessorType = "VEC3" /* AccessorType.VEC3 */;
        let useQuaternion = false;
        const property = animation.targetProperty.split(".");
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
                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Error(`Unsupported animatable property ${property[0]}`);
            }
        }
        if (animationChannelTargetPath) {
            return { animationChannelTargetPath: animationChannelTargetPath, dataAccessorType: dataAccessorType, useQuaternion: useQuaternion };
        }
        else {
            babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Error("animation channel target path and data accessor type could be deduced");
        }
        return null;
    }
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
     * @param animationSampleRate
     */
    static _CreateNodeAnimationFromNodeAnimations(babylonNode, runtimeGLTFAnimation, idleGLTFAnimations, nodeMap, nodes, binaryWriter, bufferViews, accessors, animationSampleRate, shouldExportAnimation) {
        let glTFAnimation;
        if (_GLTFAnimation._IsTransformable(babylonNode)) {
            if (babylonNode.animations) {
                for (const animation of babylonNode.animations) {
                    if (shouldExportAnimation && !shouldExportAnimation(animation)) {
                        continue;
                    }
                    const animationInfo = _GLTFAnimation._DeduceAnimationInfo(animation);
                    if (animationInfo) {
                        glTFAnimation = {
                            name: animation.name,
                            samplers: [],
                            channels: [],
                        };
                        _GLTFAnimation._AddAnimation(`${animation.name}`, animation.hasRunningRuntimeAnimations ? runtimeGLTFAnimation : glTFAnimation, babylonNode, animation, animationInfo.dataAccessorType, animationInfo.animationChannelTargetPath, nodeMap, binaryWriter, bufferViews, accessors, animationInfo.useQuaternion, animationSampleRate);
                        if (glTFAnimation.samplers.length && glTFAnimation.channels.length) {
                            idleGLTFAnimations.push(glTFAnimation);
                        }
                    }
                }
            }
        }
    }
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
     * @param animationSampleRate
     */
    static _CreateMorphTargetAnimationFromMorphTargetAnimations(babylonNode, runtimeGLTFAnimation, idleGLTFAnimations, nodeMap, nodes, binaryWriter, bufferViews, accessors, animationSampleRate, shouldExportAnimation) {
        let glTFAnimation;
        if (babylonNode instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Mesh) {
            const morphTargetManager = babylonNode.morphTargetManager;
            if (morphTargetManager) {
                for (let i = 0; i < morphTargetManager.numTargets; ++i) {
                    const morphTarget = morphTargetManager.getTarget(i);
                    for (const animation of morphTarget.animations) {
                        if (shouldExportAnimation && !shouldExportAnimation(animation)) {
                            continue;
                        }
                        const combinedAnimation = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Animation(`${animation.name}`, "influence", animation.framePerSecond, animation.dataType, animation.loopMode, animation.enableBlending);
                        const combinedAnimationKeys = [];
                        const animationKeys = animation.getKeys();
                        for (let j = 0; j < animationKeys.length; ++j) {
                            const animationKey = animationKeys[j];
                            for (let k = 0; k < morphTargetManager.numTargets; ++k) {
                                if (k == i) {
                                    combinedAnimationKeys.push(animationKey);
                                }
                                else {
                                    combinedAnimationKeys.push({ frame: animationKey.frame, value: 0 });
                                }
                            }
                        }
                        combinedAnimation.setKeys(combinedAnimationKeys);
                        const animationInfo = _GLTFAnimation._DeduceAnimationInfo(combinedAnimation);
                        if (animationInfo) {
                            glTFAnimation = {
                                name: combinedAnimation.name,
                                samplers: [],
                                channels: [],
                            };
                            _GLTFAnimation._AddAnimation(animation.name, animation.hasRunningRuntimeAnimations ? runtimeGLTFAnimation : glTFAnimation, babylonNode, combinedAnimation, animationInfo.dataAccessorType, animationInfo.animationChannelTargetPath, nodeMap, binaryWriter, bufferViews, accessors, animationInfo.useQuaternion, animationSampleRate, morphTargetManager.numTargets);
                            if (glTFAnimation.samplers.length && glTFAnimation.channels.length) {
                                idleGLTFAnimations.push(glTFAnimation);
                            }
                        }
                    }
                }
            }
        }
    }
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
     * @param animationSampleRate
     */
    static _CreateNodeAndMorphAnimationFromAnimationGroups(babylonScene, glTFAnimations, nodeMap, binaryWriter, bufferViews, accessors, animationSampleRate, shouldExportAnimation) {
        let glTFAnimation;
        if (babylonScene.animationGroups) {
            const animationGroups = babylonScene.animationGroups;
            for (const animationGroup of animationGroups) {
                const morphAnimations = new Map();
                const sampleAnimations = new Map();
                const morphAnimationMeshes = new Set();
                const animationGroupFrameDiff = animationGroup.to - animationGroup.from;
                glTFAnimation = {
                    name: animationGroup.name,
                    channels: [],
                    samplers: [],
                };
                for (let i = 0; i < animationGroup.targetedAnimations.length; ++i) {
                    const targetAnimation = animationGroup.targetedAnimations[i];
                    const target = targetAnimation.target;
                    const animation = targetAnimation.animation;
                    if (shouldExportAnimation && !shouldExportAnimation(animation)) {
                        continue;
                    }
                    if (this._IsTransformable(target) || (target.length === 1 && this._IsTransformable(target[0]))) {
                        const animationInfo = _GLTFAnimation._DeduceAnimationInfo(targetAnimation.animation);
                        if (animationInfo) {
                            const babylonTransformNode = this._IsTransformable(target) ? target : this._IsTransformable(target[0]) ? target[0] : null;
                            if (babylonTransformNode) {
                                _GLTFAnimation._AddAnimation(`${animation.name}`, glTFAnimation, babylonTransformNode, animation, animationInfo.dataAccessorType, animationInfo.animationChannelTargetPath, nodeMap, binaryWriter, bufferViews, accessors, animationInfo.useQuaternion, animationSampleRate);
                            }
                        }
                    }
                    else if (target instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.MorphTarget || (target.length === 1 && target[0] instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.MorphTarget)) {
                        const animationInfo = _GLTFAnimation._DeduceAnimationInfo(targetAnimation.animation);
                        if (animationInfo) {
                            const babylonMorphTarget = target instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.MorphTarget ? target : target[0];
                            if (babylonMorphTarget) {
                                const babylonMorphTargetManager = babylonScene.morphTargetManagers.find((morphTargetManager) => {
                                    for (let j = 0; j < morphTargetManager.numTargets; ++j) {
                                        if (morphTargetManager.getTarget(j) === babylonMorphTarget) {
                                            return true;
                                        }
                                    }
                                    return false;
                                });
                                if (babylonMorphTargetManager) {
                                    const babylonMesh = babylonScene.meshes.find((mesh) => {
                                        return mesh.morphTargetManager === babylonMorphTargetManager;
                                    });
                                    if (babylonMesh) {
                                        if (!morphAnimations.has(babylonMesh)) {
                                            morphAnimations.set(babylonMesh, new Map());
                                        }
                                        morphAnimations.get(babylonMesh)?.set(babylonMorphTarget, animation);
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
                }
                morphAnimationMeshes.forEach((mesh) => {
                    const morphTargetManager = mesh.morphTargetManager;
                    let combinedAnimationGroup = null;
                    const animationKeys = [];
                    const sampleAnimation = sampleAnimations.get(mesh);
                    const sampleAnimationKeys = sampleAnimation.getKeys();
                    const numAnimationKeys = sampleAnimationKeys.length;
                    /*
                        Due to how glTF expects morph target animation data to be formatted, we need to rearrange the individual morph target animation tracks,
                        such that we have a single animation, where a given keyframe input value has successive output values for each morph target belonging to the manager.
                        See: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#animations

                        We do this via constructing a new Animation track, and interleaving the frames of each morph target animation track in the current Animation Group
                        We reuse the Babylon Animation data structure for ease of handling export of cubic spline animation keys, and to reuse the
                        existing _GLTFAnimation.AddAnimation codepath with minimal modification, however the constructed Babylon Animation is NOT intended for use in-engine.
                    */
                    for (let i = 0; i < numAnimationKeys; ++i) {
                        for (let j = 0; j < morphTargetManager.numTargets; ++j) {
                            const morphTarget = morphTargetManager.getTarget(j);
                            const animationsByMorphTarget = morphAnimations.get(mesh);
                            if (animationsByMorphTarget) {
                                const morphTargetAnimation = animationsByMorphTarget.get(morphTarget);
                                if (morphTargetAnimation) {
                                    if (!combinedAnimationGroup) {
                                        combinedAnimationGroup = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Animation(`${animationGroup.name}_${mesh.name}_MorphWeightAnimation`, "influence", morphTargetAnimation.framePerSecond, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, morphTargetAnimation.loopMode, morphTargetAnimation.enableBlending);
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
                    const animationInfo = _GLTFAnimation._DeduceAnimationInfo(combinedAnimationGroup);
                    if (animationInfo) {
                        _GLTFAnimation._AddAnimation(`${animationGroup.name}_${mesh.name}_MorphWeightAnimation`, glTFAnimation, mesh, combinedAnimationGroup, animationInfo.dataAccessorType, animationInfo.animationChannelTargetPath, nodeMap, binaryWriter, bufferViews, accessors, animationInfo.useQuaternion, animationSampleRate, morphTargetManager?.numTargets);
                    }
                });
                if (glTFAnimation.channels.length && glTFAnimation.samplers.length) {
                    glTFAnimations.push(glTFAnimation);
                }
            }
        }
    }
    static _AddAnimation(name, glTFAnimation, babylonTransformNode, animation, dataAccessorType, animationChannelTargetPath, nodeMap, binaryWriter, bufferViews, accessors, useQuaternion, animationSampleRate, morphAnimationChannels) {
        const animationData = _GLTFAnimation._CreateNodeAnimation(babylonTransformNode, animation, animationChannelTargetPath, useQuaternion, animationSampleRate);
        let bufferView;
        let accessor;
        let keyframeAccessorIndex;
        let dataAccessorIndex;
        let outputLength;
        let animationSampler;
        let animationChannel;
        if (animationData) {
            /*
             * Now that we have the glTF converted morph target animation data,
             * we can remove redundant input data so that we have n input frames,
             * and morphAnimationChannels * n output frames
             */
            if (morphAnimationChannels) {
                let index = 0;
                let currentInput = 0;
                const newInputs = [];
                while (animationData.inputs.length > 0) {
                    currentInput = animationData.inputs.shift();
                    if (index % morphAnimationChannels == 0) {
                        newInputs.push(currentInput);
                    }
                    index++;
                }
                animationData.inputs = newInputs;
            }
            const nodeIndex = nodeMap[babylonTransformNode.uniqueId];
            // Creates buffer view and accessor for key frames.
            let byteLength = animationData.inputs.length * 4;
            bufferView = _glTFUtilities__WEBPACK_IMPORTED_MODULE_1__._GLTFUtilities._CreateBufferView(0, binaryWriter.getByteOffset(), byteLength, undefined, `${name}  keyframe data view`);
            bufferViews.push(bufferView);
            animationData.inputs.forEach(function (input) {
                binaryWriter.setFloat32(input);
            });
            accessor = _glTFUtilities__WEBPACK_IMPORTED_MODULE_1__._GLTFUtilities._CreateAccessor(bufferViews.length - 1, `${name}  keyframes`, "SCALAR" /* AccessorType.SCALAR */, 5126 /* AccessorComponentType.FLOAT */, animationData.inputs.length, null, [animationData.inputsMin], [animationData.inputsMax]);
            accessors.push(accessor);
            keyframeAccessorIndex = accessors.length - 1;
            // create bufferview and accessor for keyed values.
            outputLength = animationData.outputs.length;
            byteLength = _glTFUtilities__WEBPACK_IMPORTED_MODULE_1__._GLTFUtilities._GetDataAccessorElementCount(dataAccessorType) * 4 * animationData.outputs.length;
            // check for in and out tangents
            bufferView = _glTFUtilities__WEBPACK_IMPORTED_MODULE_1__._GLTFUtilities._CreateBufferView(0, binaryWriter.getByteOffset(), byteLength, undefined, `${name}  data view`);
            bufferViews.push(bufferView);
            animationData.outputs.forEach(function (output) {
                output.forEach(function (entry) {
                    binaryWriter.setFloat32(entry);
                });
            });
            accessor = _glTFUtilities__WEBPACK_IMPORTED_MODULE_1__._GLTFUtilities._CreateAccessor(bufferViews.length - 1, `${name}  data`, dataAccessorType, 5126 /* AccessorComponentType.FLOAT */, outputLength, null, null, null);
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
    }
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
    static _CreateBakedAnimation(babylonTransformNode, animation, animationChannelTargetPath, minFrame, maxFrame, fps, sampleRate, inputs, outputs, minMaxFrames, useQuaternion) {
        let value;
        const quaternionCache = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.Identity();
        let previousTime = null;
        let time;
        let maxUsedFrame = null;
        let currKeyFrame = null;
        let nextKeyFrame = null;
        let prevKeyFrame = null;
        let endFrame = null;
        minMaxFrames.min = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.FloatRound(minFrame / fps);
        const keyFrames = animation.getKeys();
        for (let i = 0, length = keyFrames.length; i < length; ++i) {
            endFrame = null;
            currKeyFrame = keyFrames[i];
            if (i + 1 < length) {
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
                for (let f = currKeyFrame.frame; f <= endFrame; f += sampleRate) {
                    time = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.FloatRound(f / fps);
                    if (time === previousTime) {
                        continue;
                    }
                    previousTime = time;
                    maxUsedFrame = time;
                    const state = {
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
    }
    static _ConvertFactorToVector3OrQuaternion(factor, babylonTransformNode, animation, animationChannelTargetPath, useQuaternion) {
        const basePositionRotationOrScale = _GLTFAnimation._GetBasePositionRotationOrScale(babylonTransformNode, animationChannelTargetPath, useQuaternion);
        // handles single component x, y, z or w component animation by using a base property and animating over a component.
        const property = animation.targetProperty.split(".");
        const componentName = property ? property[1] : ""; // x, y, z, or w component
        const value = useQuaternion ? babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.FromArray(basePositionRotationOrScale).normalize() : babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArray(basePositionRotationOrScale);
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
                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Error(`glTFAnimation: Unsupported component name "${componentName}"!`);
            }
        }
        return value;
    }
    static _SetInterpolatedValue(babylonTransformNode, value, time, animation, animationChannelTargetPath, quaternionCache, inputs, outputs, useQuaternion) {
        let cacheValue;
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
    }
    /**
     * Creates linear animation from the animation key frames
     * @param babylonTransformNode BabylonJS mesh
     * @param animation BabylonJS animation
     * @param animationChannelTargetPath The target animation channel
     * @param inputs Array to store the key frame times
     * @param outputs Array to store the key frame data
     * @param useQuaternion Specifies if quaternions are used in the animation
     */
    static _CreateLinearOrStepAnimation(babylonTransformNode, animation, animationChannelTargetPath, inputs, outputs, useQuaternion) {
        for (const keyFrame of animation.getKeys()) {
            inputs.push(keyFrame.frame / animation.framePerSecond); // keyframes in seconds.
            _GLTFAnimation._AddKeyframeValue(keyFrame, animation, outputs, animationChannelTargetPath, babylonTransformNode, useQuaternion);
        }
    }
    /**
     * Creates cubic spline animation from the animation key frames
     * @param babylonTransformNode BabylonJS mesh
     * @param animation BabylonJS animation
     * @param animationChannelTargetPath The target animation channel
     * @param frameDelta The difference between the last and first frame of the animation
     * @param inputs Array to store the key frame times
     * @param outputs Array to store the key frame data
     * @param useQuaternion Specifies if quaternions are used in the animation
     */
    static _CreateCubicSplineAnimation(babylonTransformNode, animation, animationChannelTargetPath, inputs, outputs, useQuaternion) {
        animation.getKeys().forEach(function (keyFrame) {
            inputs.push(keyFrame.frame / animation.framePerSecond); // keyframes in seconds.
            _GLTFAnimation._AddSplineTangent(_TangentType.INTANGENT, outputs, animationChannelTargetPath, "CUBICSPLINE" /* AnimationSamplerInterpolation.CUBICSPLINE */, keyFrame, useQuaternion);
            _GLTFAnimation._AddKeyframeValue(keyFrame, animation, outputs, animationChannelTargetPath, babylonTransformNode, useQuaternion);
            _GLTFAnimation._AddSplineTangent(_TangentType.OUTTANGENT, outputs, animationChannelTargetPath, "CUBICSPLINE" /* AnimationSamplerInterpolation.CUBICSPLINE */, keyFrame, useQuaternion);
        });
    }
    static _GetBasePositionRotationOrScale(babylonTransformNode, animationChannelTargetPath, useQuaternion) {
        let basePositionRotationOrScale;
        if (animationChannelTargetPath === "rotation" /* AnimationChannelTargetPath.ROTATION */) {
            if (useQuaternion) {
                const q = babylonTransformNode.rotationQuaternion;
                basePositionRotationOrScale = (q ?? babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.Identity()).asArray();
            }
            else {
                const r = babylonTransformNode.rotation;
                basePositionRotationOrScale = (r ?? babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Zero()).asArray();
            }
        }
        else if (animationChannelTargetPath === "translation" /* AnimationChannelTargetPath.TRANSLATION */) {
            const p = babylonTransformNode.position;
            basePositionRotationOrScale = (p ?? babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Zero()).asArray();
        }
        else {
            // scale
            const s = babylonTransformNode.scaling;
            basePositionRotationOrScale = (s ?? babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.One()).asArray();
        }
        return basePositionRotationOrScale;
    }
    /**
     * Adds a key frame value
     * @param keyFrame
     * @param animation
     * @param outputs
     * @param animationChannelTargetPath
     * @param babylonTransformNode
     * @param useQuaternion
     */
    static _AddKeyframeValue(keyFrame, animation, outputs, animationChannelTargetPath, babylonTransformNode, useQuaternion) {
        let newPositionRotationOrScale;
        const animationType = animation.dataType;
        if (animationType === babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_VECTOR3) {
            let value = keyFrame.value.asArray();
            if (animationChannelTargetPath === "rotation" /* AnimationChannelTargetPath.ROTATION */) {
                const array = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArray(value);
                const rotationQuaternion = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.RotationYawPitchRoll(array.y, array.x, array.z);
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
                        const posRotScale = useQuaternion
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
    }
    /**
     * Determine the interpolation based on the key frames
     * @param keyFrames
     * @param animationChannelTargetPath
     * @param useQuaternion
     */
    static _DeduceInterpolation(keyFrames, animationChannelTargetPath, useQuaternion) {
        let interpolationType;
        let shouldBakeAnimation = false;
        let key;
        if (animationChannelTargetPath === "rotation" /* AnimationChannelTargetPath.ROTATION */ && !useQuaternion) {
            return { interpolationType: "LINEAR" /* AnimationSamplerInterpolation.LINEAR */, shouldBakeAnimation: true };
        }
        for (let i = 0, length = keyFrames.length; i < length; ++i) {
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
                        (key.interpolation && key.interpolation === babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.AnimationKeyInterpolation.STEP && interpolationType !== "STEP" /* AnimationSamplerInterpolation.STEP */)) {
                        interpolationType = "LINEAR" /* AnimationSamplerInterpolation.LINEAR */;
                        shouldBakeAnimation = true;
                        break;
                    }
                }
                else {
                    if (key.interpolation && key.interpolation === babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.AnimationKeyInterpolation.STEP) {
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
    }
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
     */
    static _AddSplineTangent(tangentType, outputs, animationChannelTargetPath, interpolation, keyFrame, useQuaternion) {
        let tangent;
        const tangentValue = tangentType === _TangentType.INTANGENT ? keyFrame.inTangent : keyFrame.outTangent;
        if (interpolation === "CUBICSPLINE" /* AnimationSamplerInterpolation.CUBICSPLINE */) {
            if (animationChannelTargetPath === "rotation" /* AnimationChannelTargetPath.ROTATION */) {
                if (tangentValue) {
                    if (useQuaternion) {
                        tangent = tangentValue.asArray();
                    }
                    else {
                        const array = tangentValue;
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
    }
    /**
     * Get the minimum and maximum key frames' frame values
     * @param keyFrames animation key frames
     * @returns the minimum and maximum key frame value
     */
    static _CalculateMinMaxKeyFrames(keyFrames) {
        let min = Infinity;
        let max = -Infinity;
        keyFrames.forEach(function (keyFrame) {
            min = Math.min(min, keyFrame.frame);
            max = Math.max(max, keyFrame.frame);
        });
        return { min: min, max: max };
    }
}


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
/**
 * Class for holding and downloading glTF file data
 */
class GLTFData {
    /**
     * Initializes the glTF file object
     */
    constructor() {
        this.glTFFiles = {};
    }
    /**
     * Downloads the glTF data as files based on their names and data
     */
    downloadFiles() {
        /**
         * Checks for a matching suffix at the end of a string (for ES5 and lower)
         * @param str Source string
         * @param suffix Suffix to search for in the source string
         * @returns Boolean indicating whether the suffix was found (true) or not (false)
         */
        function endsWith(str, suffix) {
            return str.indexOf(suffix, str.length - suffix.length) !== -1;
        }
        for (const key in this.glTFFiles) {
            const link = document.createElement("a");
            document.body.appendChild(link);
            link.setAttribute("type", "hidden");
            link.download = key;
            const blob = this.glTFFiles[key];
            let mimeType;
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
                mimeType = { type: "image/jpeg" /* ImageMimeType.JPEG */ };
            }
            else if (endsWith(key, ".png")) {
                mimeType = { type: "image/png" /* ImageMimeType.PNG */ };
            }
            link.href = window.URL.createObjectURL(new Blob([blob], mimeType));
            link.click();
        }
    }
}


/***/ }),

/***/ "../../../dev/serializers/src/glTF/2.0/glTFExporter.ts":
/*!*************************************************************!*\
  !*** ../../../dev/serializers/src/glTF/2.0/glTFExporter.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _BinaryWriter: () => (/* binding */ _BinaryWriter),
/* harmony export */   _Exporter: () => (/* binding */ _Exporter)
/* harmony export */ });
/* harmony import */ var babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Materials/multiMaterial */ "babylonjs/Maths/math.vector");
/* harmony import */ var babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _glTFMaterialExporter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./glTFMaterialExporter */ "../../../dev/serializers/src/glTF/2.0/glTFMaterialExporter.ts");
/* harmony import */ var _glTFUtilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./glTFUtilities */ "../../../dev/serializers/src/glTF/2.0/glTFUtilities.ts");
/* harmony import */ var _glTFData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./glTFData */ "../../../dev/serializers/src/glTF/2.0/glTFData.ts");
/* harmony import */ var _glTFAnimation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./glTFAnimation */ "../../../dev/serializers/src/glTF/2.0/glTFAnimation.ts");


















// Matrix that converts handedness on the X-axis.
const convertHandednessMatrix = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Matrix.Compose(new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3(-1, 1, 1), babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.Identity(), babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Zero());
function isNoopNode(node, useRightHandedSystem) {
    if (!(node instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TransformNode)) {
        return false;
    }
    // Transform
    if (useRightHandedSystem) {
        const matrix = node.getWorldMatrix();
        if (!matrix.isIdentity()) {
            return false;
        }
    }
    else {
        const matrix = node.getWorldMatrix().multiplyToRef(convertHandednessMatrix, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Matrix[0]);
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
function convertNodeHandedness(node) {
    const translation = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArrayToRef(node.translation || [0, 0, 0], 0, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Vector3[0]);
    const rotation = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.FromArrayToRef(node.rotation || [0, 0, 0, 1], 0, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Quaternion[0]);
    const scale = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArrayToRef(node.scale || [1, 1, 1], 0, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Vector3[1]);
    const matrix = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Matrix.ComposeToRef(scale, rotation, translation, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Matrix[0]).multiplyToRef(convertHandednessMatrix, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Matrix[0]);
    matrix.decompose(scale, rotation, translation);
    if (translation.equalsToFloats(0, 0, 0)) {
        delete node.translation;
    }
    else {
        node.translation = translation.asArray();
    }
    if (babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.IsIdentity(rotation)) {
        delete node.rotation;
    }
    else {
        node.rotation = rotation.asArray();
    }
    if (scale.equalsToFloats(1, 1, 1)) {
        delete node.scale;
    }
    else {
        node.scale = scale.asArray();
    }
}
/**
 * Converts Babylon Scene into glTF 2.0.
 * @internal
 */
class _Exporter {
    _applyExtension(node, extensions, index, actionAsync) {
        if (index >= extensions.length) {
            return Promise.resolve(node);
        }
        const currentPromise = actionAsync(extensions[index], node);
        if (!currentPromise) {
            return this._applyExtension(node, extensions, index + 1, actionAsync);
        }
        return currentPromise.then((newNode) => this._applyExtension(newNode, extensions, index + 1, actionAsync));
    }
    _applyExtensions(node, actionAsync) {
        const extensions = [];
        for (const name of _Exporter._ExtensionNames) {
            extensions.push(this._extensions[name]);
        }
        return this._applyExtension(node, extensions, 0, actionAsync);
    }
    _extensionsPreExportTextureAsync(context, babylonTexture, mimeType) {
        return this._applyExtensions(babylonTexture, (extension, node) => extension.preExportTextureAsync && extension.preExportTextureAsync(context, node, mimeType));
    }
    _extensionsPostExportMeshPrimitiveAsync(context, meshPrimitive, babylonSubMesh, binaryWriter) {
        return this._applyExtensions(meshPrimitive, (extension, node) => extension.postExportMeshPrimitiveAsync && extension.postExportMeshPrimitiveAsync(context, node, babylonSubMesh, binaryWriter));
    }
    _extensionsPostExportNodeAsync(context, node, babylonNode, nodeMap, binaryWriter) {
        return this._applyExtensions(node, (extension, node) => extension.postExportNodeAsync && extension.postExportNodeAsync(context, node, babylonNode, nodeMap, binaryWriter));
    }
    _extensionsPostExportMaterialAsync(context, material, babylonMaterial) {
        return this._applyExtensions(material, (extension, node) => extension.postExportMaterialAsync && extension.postExportMaterialAsync(context, node, babylonMaterial));
    }
    _extensionsPostExportMaterialAdditionalTextures(context, material, babylonMaterial) {
        const output = [];
        for (const name of _Exporter._ExtensionNames) {
            const extension = this._extensions[name];
            if (extension.postExportMaterialAdditionalTextures) {
                output.push(...extension.postExportMaterialAdditionalTextures(context, material, babylonMaterial));
            }
        }
        return output;
    }
    _extensionsPostExportTextures(context, textureInfo, babylonTexture) {
        for (const name of _Exporter._ExtensionNames) {
            const extension = this._extensions[name];
            if (extension.postExportTexture) {
                extension.postExportTexture(context, textureInfo, babylonTexture);
            }
        }
    }
    _forEachExtensions(action) {
        for (const name of _Exporter._ExtensionNames) {
            const extension = this._extensions[name];
            if (extension.enabled) {
                action(extension);
            }
        }
    }
    _extensionsOnExporting() {
        this._forEachExtensions((extension) => {
            if (extension.wasUsed) {
                if (this._glTF.extensionsUsed == null) {
                    this._glTF.extensionsUsed = [];
                }
                if (this._glTF.extensionsUsed.indexOf(extension.name) === -1) {
                    this._glTF.extensionsUsed.push(extension.name);
                }
                if (extension.required) {
                    if (this._glTF.extensionsRequired == null) {
                        this._glTF.extensionsRequired = [];
                    }
                    if (this._glTF.extensionsRequired.indexOf(extension.name) === -1) {
                        this._glTF.extensionsRequired.push(extension.name);
                    }
                }
                if (this._glTF.extensions == null) {
                    this._glTF.extensions = {};
                }
                if (extension.onExporting) {
                    extension.onExporting();
                }
            }
        });
    }
    /**
     * Load glTF serializer extensions
     */
    _loadExtensions() {
        for (const name of _Exporter._ExtensionNames) {
            const extension = _Exporter._ExtensionFactories[name](this);
            this._extensions[name] = extension;
        }
    }
    /**
     * Creates a glTF Exporter instance, which can accept optional exporter options
     * @param babylonScene Babylon scene object
     * @param options Options to modify the behavior of the exporter
     */
    constructor(babylonScene, options) {
        this._extensions = {};
        this._glTF = {
            asset: { generator: `Babylon.js v${babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Engine.Version}`, version: "2.0" },
        };
        babylonScene = babylonScene || babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.EngineStore.LastCreatedScene;
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
        this._animationSampleRate = this._options.animationSampleRate || 1 / 60;
        this._glTFMaterialExporter = new _glTFMaterialExporter__WEBPACK_IMPORTED_MODULE_1__._GLTFMaterialExporter(this);
        this._loadExtensions();
    }
    dispose() {
        for (const extensionKey in this._extensions) {
            const extension = this._extensions[extensionKey];
            extension.dispose();
        }
    }
    get options() {
        return this._options;
    }
    /**
     * Registers a glTF exporter extension
     * @param name Name of the extension to export
     * @param factory The factory function that creates the exporter extension
     */
    static RegisterExtension(name, factory) {
        if (_Exporter.UnregisterExtension(name)) {
            babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Warn(`Extension with the name ${name} already exists`);
        }
        _Exporter._ExtensionFactories[name] = factory;
        _Exporter._ExtensionNames.push(name);
    }
    /**
     * Un-registers an exporter extension
     * @param name The name fo the exporter extension
     * @returns A boolean indicating whether the extension has been un-registered
     */
    static UnregisterExtension(name) {
        if (!_Exporter._ExtensionFactories[name]) {
            return false;
        }
        delete _Exporter._ExtensionFactories[name];
        const index = _Exporter._ExtensionNames.indexOf(name);
        if (index !== -1) {
            _Exporter._ExtensionNames.splice(index, 1);
        }
        return true;
    }
    _reorderIndicesBasedOnPrimitiveMode(submesh, primitiveMode, babylonIndices, byteOffset, binaryWriter) {
        switch (primitiveMode) {
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Material.TriangleFillMode: {
                if (!byteOffset) {
                    byteOffset = 0;
                }
                for (let i = submesh.indexStart, length = submesh.indexStart + submesh.indexCount; i < length; i = i + 3) {
                    const index = byteOffset + i * 4;
                    // swap the second and third indices
                    const secondIndex = binaryWriter.getUInt32(index + 4);
                    const thirdIndex = binaryWriter.getUInt32(index + 8);
                    binaryWriter.setUInt32(thirdIndex, index + 4);
                    binaryWriter.setUInt32(secondIndex, index + 8);
                }
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Material.TriangleFanDrawMode: {
                for (let i = submesh.indexStart + submesh.indexCount - 1, start = submesh.indexStart; i >= start; --i) {
                    binaryWriter.setUInt32(babylonIndices[i], byteOffset);
                    byteOffset += 4;
                }
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Material.TriangleStripDrawMode: {
                if (submesh.indexCount >= 3) {
                    binaryWriter.setUInt32(babylonIndices[submesh.indexStart + 2], byteOffset + 4);
                    binaryWriter.setUInt32(babylonIndices[submesh.indexStart + 1], byteOffset + 8);
                }
                break;
            }
        }
    }
    /**
     * Reorders the vertex attribute data based on the primitive mode.  This is necessary when indices are not available and the winding order is
     * clock-wise during export to glTF
     * @param submesh BabylonJS submesh
     * @param primitiveMode Primitive mode of the mesh
     * @param vertexBufferKind The type of vertex attribute
     * @param meshAttributeArray The vertex attribute data
     * @param byteOffset The offset to the binary data
     * @param binaryWriter The binary data for the glTF file
     */
    _reorderVertexAttributeDataBasedOnPrimitiveMode(submesh, primitiveMode, vertexBufferKind, meshAttributeArray, byteOffset, binaryWriter) {
        switch (primitiveMode) {
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Material.TriangleFillMode: {
                this._reorderTriangleFillMode(submesh, vertexBufferKind, meshAttributeArray, byteOffset, binaryWriter);
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Material.TriangleStripDrawMode: {
                this._reorderTriangleStripDrawMode(submesh, vertexBufferKind, meshAttributeArray, byteOffset, binaryWriter);
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Material.TriangleFanDrawMode: {
                this._reorderTriangleFanMode(submesh, vertexBufferKind, meshAttributeArray, byteOffset, binaryWriter);
                break;
            }
        }
    }
    /**
     * Reorders the vertex attributes in the correct triangle mode order .  This is necessary when indices are not available and the winding order is
     * clock-wise during export to glTF
     * @param submesh BabylonJS submesh
     * @param vertexBufferKind The type of vertex attribute
     * @param meshAttributeArray The vertex attribute data
     * @param byteOffset The offset to the binary data
     * @param binaryWriter The binary data for the glTF file
     */
    _reorderTriangleFillMode(submesh, vertexBufferKind, meshAttributeArray, byteOffset, binaryWriter) {
        const vertexBuffer = this._getVertexBufferFromMesh(vertexBufferKind, submesh.getMesh());
        if (vertexBuffer) {
            const stride = vertexBuffer.byteStride / babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.GetTypeByteLength(vertexBuffer.type);
            if (submesh.verticesCount % 3 !== 0) {
                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Error("The submesh vertices for the triangle fill mode is not divisible by 3!");
            }
            else {
                const vertexData = [];
                let index = 0;
                switch (vertexBufferKind) {
                    case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.PositionKind:
                    case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.NormalKind: {
                        for (let x = submesh.verticesStart; x < submesh.verticesStart + submesh.verticesCount; x = x + 3) {
                            index = x * stride;
                            vertexData.push(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArray(meshAttributeArray, index));
                            vertexData.push(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArray(meshAttributeArray, index + 2 * stride));
                            vertexData.push(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArray(meshAttributeArray, index + stride));
                        }
                        break;
                    }
                    case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.TangentKind: {
                        for (let x = submesh.verticesStart; x < submesh.verticesStart + submesh.verticesCount; x = x + 3) {
                            index = x * stride;
                            vertexData.push(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector4.FromArray(meshAttributeArray, index));
                            vertexData.push(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector4.FromArray(meshAttributeArray, index + 2 * stride));
                            vertexData.push(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector4.FromArray(meshAttributeArray, index + stride));
                        }
                        break;
                    }
                    case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.ColorKind: {
                        const size = vertexBuffer.getSize();
                        for (let x = submesh.verticesStart; x < submesh.verticesStart + submesh.verticesCount; x = x + size) {
                            index = x * stride;
                            if (size === 4) {
                                vertexData.push(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector4.FromArray(meshAttributeArray, index));
                                vertexData.push(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector4.FromArray(meshAttributeArray, index + 2 * stride));
                                vertexData.push(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector4.FromArray(meshAttributeArray, index + stride));
                            }
                            else {
                                vertexData.push(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArray(meshAttributeArray, index));
                                vertexData.push(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArray(meshAttributeArray, index + 2 * stride));
                                vertexData.push(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArray(meshAttributeArray, index + stride));
                            }
                        }
                        break;
                    }
                    case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UVKind:
                    case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UV2Kind: {
                        for (let x = submesh.verticesStart; x < submesh.verticesStart + submesh.verticesCount; x = x + 3) {
                            index = x * stride;
                            vertexData.push(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector2.FromArray(meshAttributeArray, index));
                            vertexData.push(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector2.FromArray(meshAttributeArray, index + 2 * stride));
                            vertexData.push(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector2.FromArray(meshAttributeArray, index + stride));
                        }
                        break;
                    }
                    default: {
                        babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Error(`Unsupported Vertex Buffer type: ${vertexBufferKind}`);
                    }
                }
                this._writeVertexAttributeData(vertexData, byteOffset, vertexBufferKind, binaryWriter);
            }
        }
        else {
            babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Warn(`reorderTriangleFillMode: Vertex Buffer Kind ${vertexBufferKind} not present!`);
        }
    }
    /**
     * Reorders the vertex attributes in the correct triangle strip order.  This is necessary when indices are not available and the winding order is
     * clock-wise during export to glTF
     * @param submesh BabylonJS submesh
     * @param vertexBufferKind The type of vertex attribute
     * @param meshAttributeArray The vertex attribute data
     * @param byteOffset The offset to the binary data
     * @param binaryWriter The binary data for the glTF file
     */
    _reorderTriangleStripDrawMode(submesh, vertexBufferKind, meshAttributeArray, byteOffset, binaryWriter) {
        const vertexBuffer = this._getVertexBufferFromMesh(vertexBufferKind, submesh.getMesh());
        if (vertexBuffer) {
            const stride = vertexBuffer.byteStride / babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.GetTypeByteLength(vertexBuffer.type);
            const vertexData = [];
            let index = 0;
            switch (vertexBufferKind) {
                case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.PositionKind:
                case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.NormalKind: {
                    index = submesh.verticesStart;
                    vertexData.push(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArray(meshAttributeArray, index + 2 * stride));
                    vertexData.push(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArray(meshAttributeArray, index + stride));
                    break;
                }
                case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.TangentKind: {
                    for (let x = submesh.verticesStart + submesh.verticesCount - 1; x >= submesh.verticesStart; --x) {
                        index = x * stride;
                        vertexData.push(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector4.FromArray(meshAttributeArray, index));
                    }
                    break;
                }
                case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.ColorKind: {
                    for (let x = submesh.verticesStart + submesh.verticesCount - 1; x >= submesh.verticesStart; --x) {
                        index = x * stride;
                        vertexBuffer.getSize() === 4
                            ? vertexData.push(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector4.FromArray(meshAttributeArray, index))
                            : vertexData.push(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArray(meshAttributeArray, index));
                    }
                    break;
                }
                case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UVKind:
                case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UV2Kind: {
                    for (let x = submesh.verticesStart + submesh.verticesCount - 1; x >= submesh.verticesStart; --x) {
                        index = x * stride;
                        vertexData.push(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector2.FromArray(meshAttributeArray, index));
                    }
                    break;
                }
                default: {
                    babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Error(`Unsupported Vertex Buffer type: ${vertexBufferKind}`);
                }
            }
            this._writeVertexAttributeData(vertexData, byteOffset + 12, vertexBufferKind, binaryWriter);
        }
        else {
            babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Warn(`reorderTriangleStripDrawMode: Vertex buffer kind ${vertexBufferKind} not present!`);
        }
    }
    /**
     * Reorders the vertex attributes in the correct triangle fan order.  This is necessary when indices are not available and the winding order is
     * clock-wise during export to glTF
     * @param submesh BabylonJS submesh
     * @param vertexBufferKind The type of vertex attribute
     * @param meshAttributeArray The vertex attribute data
     * @param byteOffset The offset to the binary data
     * @param binaryWriter The binary data for the glTF file
     */
    _reorderTriangleFanMode(submesh, vertexBufferKind, meshAttributeArray, byteOffset, binaryWriter) {
        const vertexBuffer = this._getVertexBufferFromMesh(vertexBufferKind, submesh.getMesh());
        if (vertexBuffer) {
            const stride = vertexBuffer.byteStride / babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.GetTypeByteLength(vertexBuffer.type);
            const vertexData = [];
            let index = 0;
            switch (vertexBufferKind) {
                case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.PositionKind:
                case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.NormalKind: {
                    for (let x = submesh.verticesStart + submesh.verticesCount - 1; x >= submesh.verticesStart; --x) {
                        index = x * stride;
                        vertexData.push(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArray(meshAttributeArray, index));
                    }
                    break;
                }
                case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.TangentKind: {
                    for (let x = submesh.verticesStart + submesh.verticesCount - 1; x >= submesh.verticesStart; --x) {
                        index = x * stride;
                        vertexData.push(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector4.FromArray(meshAttributeArray, index));
                    }
                    break;
                }
                case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.ColorKind: {
                    for (let x = submesh.verticesStart + submesh.verticesCount - 1; x >= submesh.verticesStart; --x) {
                        index = x * stride;
                        vertexData.push(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector4.FromArray(meshAttributeArray, index));
                        vertexBuffer.getSize() === 4
                            ? vertexData.push(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector4.FromArray(meshAttributeArray, index))
                            : vertexData.push(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArray(meshAttributeArray, index));
                    }
                    break;
                }
                case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UVKind:
                case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UV2Kind: {
                    for (let x = submesh.verticesStart + submesh.verticesCount - 1; x >= submesh.verticesStart; --x) {
                        index = x * stride;
                        vertexData.push(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector2.FromArray(meshAttributeArray, index));
                    }
                    break;
                }
                default: {
                    babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Error(`Unsupported Vertex Buffer type: ${vertexBufferKind}`);
                }
            }
            this._writeVertexAttributeData(vertexData, byteOffset, vertexBufferKind, binaryWriter);
        }
        else {
            babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Warn(`reorderTriangleFanMode: Vertex buffer kind ${vertexBufferKind} not present!`);
        }
    }
    /**
     * Writes the vertex attribute data to binary
     * @param vertices The vertices to write to the binary writer
     * @param byteOffset The offset into the binary writer to overwrite binary data
     * @param vertexAttributeKind The vertex attribute type
     * @param binaryWriter The writer containing the binary data
     */
    _writeVertexAttributeData(vertices, byteOffset, vertexAttributeKind, binaryWriter) {
        for (const vertex of vertices) {
            if (vertexAttributeKind === babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.NormalKind) {
                vertex.normalize();
            }
            else if (vertexAttributeKind === babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.TangentKind && vertex instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector4) {
                _glTFUtilities__WEBPACK_IMPORTED_MODULE_2__._GLTFUtilities._NormalizeTangentFromRef(vertex);
            }
            for (const component of vertex.asArray()) {
                binaryWriter.setFloat32(component, byteOffset);
                byteOffset += 4;
            }
        }
    }
    /**
     * Writes mesh attribute data to a data buffer
     * Returns the bytelength of the data
     * @param vertexBufferKind Indicates what kind of vertex data is being passed in
     * @param attributeComponentKind
     * @param meshAttributeArray Array containing the attribute data
     * @param stride Specifies the space between data
     * @param binaryWriter The buffer to write the binary data to
     * @param babylonTransformNode
     */
    _writeAttributeData(vertexBufferKind, attributeComponentKind, meshAttributeArray, stride, binaryWriter, babylonTransformNode) {
        let vertexAttributes = [];
        let index;
        switch (vertexBufferKind) {
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.PositionKind: {
                for (let k = 0, length = meshAttributeArray.length / stride; k < length; ++k) {
                    index = k * stride;
                    const vertexData = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArray(meshAttributeArray, index);
                    vertexAttributes.push(vertexData.asArray());
                }
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.NormalKind: {
                for (let k = 0, length = meshAttributeArray.length / stride; k < length; ++k) {
                    index = k * stride;
                    const vertexData = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArray(meshAttributeArray, index);
                    vertexAttributes.push(vertexData.normalize().asArray());
                }
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.TangentKind: {
                for (let k = 0, length = meshAttributeArray.length / stride; k < length; ++k) {
                    index = k * stride;
                    const vertexData = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector4.FromArray(meshAttributeArray, index);
                    _glTFUtilities__WEBPACK_IMPORTED_MODULE_2__._GLTFUtilities._NormalizeTangentFromRef(vertexData);
                    vertexAttributes.push(vertexData.asArray());
                }
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.ColorKind: {
                const meshMaterial = babylonTransformNode.material;
                const convertToLinear = meshMaterial ? meshMaterial.getClassName() === "StandardMaterial" : true;
                const vertexData = stride === 3 ? new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Color3() : new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Color4();
                const useExactSrgbConversions = this._babylonScene.getEngine().useExactSrgbConversions;
                for (let k = 0, length = meshAttributeArray.length / stride; k < length; ++k) {
                    index = k * stride;
                    if (stride === 3) {
                        babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Color3.FromArrayToRef(meshAttributeArray, index, vertexData);
                        if (convertToLinear) {
                            vertexData.toLinearSpaceToRef(vertexData, useExactSrgbConversions);
                        }
                    }
                    else {
                        babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Color4.FromArrayToRef(meshAttributeArray, index, vertexData);
                        if (convertToLinear) {
                            vertexData.toLinearSpaceToRef(vertexData, useExactSrgbConversions);
                        }
                    }
                    vertexAttributes.push(vertexData.asArray());
                }
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UVKind:
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UV2Kind: {
                for (let k = 0, length = meshAttributeArray.length / stride; k < length; ++k) {
                    index = k * stride;
                    const vertexData = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector2.FromArray(meshAttributeArray, index);
                    vertexAttributes.push(vertexData.asArray());
                }
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.MatricesIndicesKind:
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.MatricesIndicesExtraKind: {
                for (let k = 0, length = meshAttributeArray.length / stride; k < length; ++k) {
                    index = k * stride;
                    const vertexData = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector4.FromArray(meshAttributeArray, index);
                    vertexAttributes.push(vertexData.asArray());
                }
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.MatricesWeightsKind:
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.MatricesWeightsExtraKind: {
                for (let k = 0, length = meshAttributeArray.length / stride; k < length; ++k) {
                    index = k * stride;
                    const vertexData = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector4.FromArray(meshAttributeArray, index);
                    vertexAttributes.push(vertexData.asArray());
                }
                break;
            }
            default: {
                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Warn("Unsupported Vertex Buffer Type: " + vertexBufferKind);
                vertexAttributes = [];
            }
        }
        let writeBinaryFunc;
        switch (attributeComponentKind) {
            case 5121 /* AccessorComponentType.UNSIGNED_BYTE */: {
                writeBinaryFunc = binaryWriter.setUInt8.bind(binaryWriter);
                break;
            }
            case 5123 /* AccessorComponentType.UNSIGNED_SHORT */: {
                writeBinaryFunc = binaryWriter.setUInt16.bind(binaryWriter);
                break;
            }
            case 5125 /* AccessorComponentType.UNSIGNED_INT */: {
                writeBinaryFunc = binaryWriter.setUInt32.bind(binaryWriter);
                break;
            }
            case 5126 /* AccessorComponentType.FLOAT */: {
                writeBinaryFunc = binaryWriter.setFloat32.bind(binaryWriter);
                break;
            }
            default: {
                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Warn("Unsupported Attribute Component kind: " + attributeComponentKind);
                return;
            }
        }
        for (const vertexAttribute of vertexAttributes) {
            for (const component of vertexAttribute) {
                writeBinaryFunc(component);
            }
        }
    }
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
     * @param minMax
     */
    writeMorphTargetAttributeData(vertexBufferKind, attributeComponentKind, meshPrimitive, meshAttributeArray, morphTargetAttributeArray, stride, binaryWriter, minMax) {
        let vertexAttributes = [];
        let index;
        let difference = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3();
        let difference4 = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector4(0, 0, 0, 0);
        switch (vertexBufferKind) {
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.PositionKind: {
                for (let k = meshPrimitive.verticesStart; k < meshPrimitive.verticesCount; ++k) {
                    index = meshPrimitive.indexStart + k * stride;
                    const vertexData = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArray(meshAttributeArray, index);
                    const morphData = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArray(morphTargetAttributeArray, index);
                    difference = morphData.subtractToRef(vertexData, difference);
                    if (minMax) {
                        minMax.min.copyFromFloats(Math.min(difference.x, minMax.min.x), Math.min(difference.y, minMax.min.y), Math.min(difference.z, minMax.min.z));
                        minMax.max.copyFromFloats(Math.max(difference.x, minMax.max.x), Math.max(difference.y, minMax.max.y), Math.max(difference.z, minMax.max.z));
                    }
                    vertexAttributes.push(difference.asArray());
                }
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.NormalKind: {
                for (let k = meshPrimitive.verticesStart; k < meshPrimitive.verticesCount; ++k) {
                    index = meshPrimitive.indexStart + k * stride;
                    const vertexData = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArray(meshAttributeArray, index).normalize();
                    const morphData = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArray(morphTargetAttributeArray, index).normalize();
                    difference = morphData.subtractToRef(vertexData, difference);
                    vertexAttributes.push(difference.asArray());
                }
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.TangentKind: {
                for (let k = meshPrimitive.verticesStart; k < meshPrimitive.verticesCount; ++k) {
                    index = meshPrimitive.indexStart + k * (stride + 1);
                    const vertexData = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector4.FromArray(meshAttributeArray, index);
                    _glTFUtilities__WEBPACK_IMPORTED_MODULE_2__._GLTFUtilities._NormalizeTangentFromRef(vertexData);
                    const morphData = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector4.FromArray(morphTargetAttributeArray, index);
                    _glTFUtilities__WEBPACK_IMPORTED_MODULE_2__._GLTFUtilities._NormalizeTangentFromRef(morphData);
                    difference4 = morphData.subtractToRef(vertexData, difference4);
                    vertexAttributes.push([difference4.x, difference4.y, difference4.z]);
                }
                break;
            }
            default: {
                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Warn("Unsupported Vertex Buffer Type: " + vertexBufferKind);
                vertexAttributes = [];
            }
        }
        let writeBinaryFunc;
        switch (attributeComponentKind) {
            case 5121 /* AccessorComponentType.UNSIGNED_BYTE */: {
                writeBinaryFunc = binaryWriter.setUInt8.bind(binaryWriter);
                break;
            }
            case 5123 /* AccessorComponentType.UNSIGNED_SHORT */: {
                writeBinaryFunc = binaryWriter.setUInt16.bind(binaryWriter);
                break;
            }
            case 5125 /* AccessorComponentType.UNSIGNED_INT */: {
                writeBinaryFunc = binaryWriter.setUInt32.bind(binaryWriter);
                break;
            }
            case 5126 /* AccessorComponentType.FLOAT */: {
                writeBinaryFunc = binaryWriter.setFloat32.bind(binaryWriter);
                break;
            }
            default: {
                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Warn("Unsupported Attribute Component kind: " + attributeComponentKind);
                return;
            }
        }
        for (const vertexAttribute of vertexAttributes) {
            for (const component of vertexAttribute) {
                writeBinaryFunc(component);
            }
        }
    }
    /**
     * Generates glTF json data
     * @param shouldUseGlb Indicates whether the json should be written for a glb file
     * @param glTFPrefix Text to use when prefixing a glTF file
     * @param prettyPrint Indicates whether the json file should be pretty printed (true) or not (false)
     * @returns json data as string
     */
    _generateJSON(shouldUseGlb, glTFPrefix, prettyPrint) {
        const buffer = { byteLength: this._totalByteLength };
        let imageName;
        let imageData;
        let bufferView;
        let byteOffset = this._totalByteLength;
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
                this._images.forEach((image) => {
                    if (image.uri) {
                        imageData = this._imageData[image.uri];
                        this._orderedImageData.push(imageData);
                        imageName = image.uri.split(".")[0] + " image";
                        bufferView = _glTFUtilities__WEBPACK_IMPORTED_MODULE_2__._GLTFUtilities._CreateBufferView(0, byteOffset, imageData.data.byteLength, undefined, imageName);
                        byteOffset += imageData.data.byteLength;
                        this._bufferViews.push(bufferView);
                        image.bufferView = this._bufferViews.length - 1;
                        image.name = imageName;
                        image.mimeType = imageData.mimeType;
                        image.uri = undefined;
                        if (!this._glTF.images) {
                            this._glTF.images = [];
                        }
                        this._glTF.images.push(image);
                    }
                });
                // Replace uri with bufferview and mime type for glb
                buffer.byteLength = byteOffset;
            }
        }
        if (!shouldUseGlb) {
            buffer.uri = glTFPrefix + ".bin";
        }
        const jsonText = prettyPrint ? JSON.stringify(this._glTF, null, 2) : JSON.stringify(this._glTF);
        return jsonText;
    }
    /**
     * Generates data for .gltf and .bin files based on the glTF prefix string
     * @param glTFPrefix Text to use when prefixing a glTF file
     * @param dispose Dispose the exporter
     * @returns GLTFData with glTF file data
     */
    _generateGLTFAsync(glTFPrefix, dispose = true) {
        return this._generateBinaryAsync().then((binaryBuffer) => {
            this._extensionsOnExporting();
            const jsonText = this._generateJSON(false, glTFPrefix, true);
            const bin = new Blob([binaryBuffer], { type: "application/octet-stream" });
            const glTFFileName = glTFPrefix + ".gltf";
            const glTFBinFile = glTFPrefix + ".bin";
            const container = new _glTFData__WEBPACK_IMPORTED_MODULE_3__.GLTFData();
            container.glTFFiles[glTFFileName] = jsonText;
            container.glTFFiles[glTFBinFile] = bin;
            if (this._imageData) {
                for (const image in this._imageData) {
                    container.glTFFiles[image] = new Blob([this._imageData[image].data], { type: this._imageData[image].mimeType });
                }
            }
            if (dispose) {
                this.dispose();
            }
            return container;
        });
    }
    /**
     * Creates a binary buffer for glTF
     * @returns array buffer for binary data
     */
    _generateBinaryAsync() {
        const binaryWriter = new _BinaryWriter(4);
        return this._createSceneAsync(binaryWriter).then(() => {
            if (this._localEngine) {
                this._localEngine.dispose();
            }
            return binaryWriter.getArrayBuffer();
        });
    }
    /**
     * Pads the number to a multiple of 4
     * @param num number to pad
     * @returns padded number
     */
    _getPadding(num) {
        const remainder = num % 4;
        const padding = remainder === 0 ? remainder : 4 - remainder;
        return padding;
    }
    /**
     * @internal
     */
    _generateGLBAsync(glTFPrefix, dispose = true) {
        return this._generateBinaryAsync().then((binaryBuffer) => {
            this._extensionsOnExporting();
            const jsonText = this._generateJSON(true);
            const glbFileName = glTFPrefix + ".glb";
            const headerLength = 12;
            const chunkLengthPrefix = 8;
            let jsonLength = jsonText.length;
            let encodedJsonText;
            let imageByteLength = 0;
            // make use of TextEncoder when available
            if (typeof TextEncoder !== "undefined") {
                const encoder = new TextEncoder();
                encodedJsonText = encoder.encode(jsonText);
                jsonLength = encodedJsonText.length;
            }
            for (let i = 0; i < this._orderedImageData.length; ++i) {
                imageByteLength += this._orderedImageData[i].data.byteLength;
            }
            const jsonPadding = this._getPadding(jsonLength);
            const binPadding = this._getPadding(binaryBuffer.byteLength);
            const imagePadding = this._getPadding(imageByteLength);
            const byteLength = headerLength + 2 * chunkLengthPrefix + jsonLength + jsonPadding + binaryBuffer.byteLength + binPadding + imageByteLength + imagePadding;
            //header
            const headerBuffer = new ArrayBuffer(headerLength);
            const headerBufferView = new DataView(headerBuffer);
            headerBufferView.setUint32(0, 0x46546c67, true); //glTF
            headerBufferView.setUint32(4, 2, true); // version
            headerBufferView.setUint32(8, byteLength, true); // total bytes in file
            //json chunk
            const jsonChunkBuffer = new ArrayBuffer(chunkLengthPrefix + jsonLength + jsonPadding);
            const jsonChunkBufferView = new DataView(jsonChunkBuffer);
            jsonChunkBufferView.setUint32(0, jsonLength + jsonPadding, true);
            jsonChunkBufferView.setUint32(4, 0x4e4f534a, true);
            //json chunk bytes
            const jsonData = new Uint8Array(jsonChunkBuffer, chunkLengthPrefix);
            // if TextEncoder was available, we can simply copy the encoded array
            if (encodedJsonText) {
                jsonData.set(encodedJsonText);
            }
            else {
                const blankCharCode = "_".charCodeAt(0);
                for (let i = 0; i < jsonLength; ++i) {
                    const charCode = jsonText.charCodeAt(i);
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
            const jsonPaddingView = new Uint8Array(jsonChunkBuffer, chunkLengthPrefix + jsonLength);
            for (let i = 0; i < jsonPadding; ++i) {
                jsonPaddingView[i] = 0x20;
            }
            //binary chunk
            const binaryChunkBuffer = new ArrayBuffer(chunkLengthPrefix);
            const binaryChunkBufferView = new DataView(binaryChunkBuffer);
            binaryChunkBufferView.setUint32(0, binaryBuffer.byteLength + imageByteLength + imagePadding, true);
            binaryChunkBufferView.setUint32(4, 0x004e4942, true);
            // binary padding
            const binPaddingBuffer = new ArrayBuffer(binPadding);
            const binPaddingView = new Uint8Array(binPaddingBuffer);
            for (let i = 0; i < binPadding; ++i) {
                binPaddingView[i] = 0;
            }
            const imagePaddingBuffer = new ArrayBuffer(imagePadding);
            const imagePaddingView = new Uint8Array(imagePaddingBuffer);
            for (let i = 0; i < imagePadding; ++i) {
                imagePaddingView[i] = 0;
            }
            const glbData = [headerBuffer, jsonChunkBuffer, binaryChunkBuffer, binaryBuffer];
            // binary data
            for (let i = 0; i < this._orderedImageData.length; ++i) {
                glbData.push(this._orderedImageData[i].data);
            }
            glbData.push(binPaddingBuffer);
            glbData.push(imagePaddingBuffer);
            const glbFile = new Blob(glbData, { type: "application/octet-stream" });
            const container = new _glTFData__WEBPACK_IMPORTED_MODULE_3__.GLTFData();
            container.glTFFiles[glbFileName] = glbFile;
            if (this._localEngine != null) {
                this._localEngine.dispose();
            }
            if (dispose) {
                this.dispose();
            }
            return container;
        });
    }
    /**
     * Sets the TRS for each node
     * @param node glTF Node for storing the transformation data
     * @param babylonTransformNode Babylon mesh used as the source for the transformation data
     */
    _setNodeTransformation(node, babylonTransformNode) {
        if (!babylonTransformNode.getPivotPoint().equalsToFloats(0, 0, 0)) {
            babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Warn("Pivot points are not supported in the glTF serializer");
        }
        if (!babylonTransformNode.position.equalsToFloats(0, 0, 0)) {
            node.translation = babylonTransformNode.position.asArray();
        }
        if (!babylonTransformNode.scaling.equalsToFloats(1, 1, 1)) {
            node.scale = babylonTransformNode.scaling.asArray();
        }
        const rotationQuaternion = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.RotationYawPitchRoll(babylonTransformNode.rotation.y, babylonTransformNode.rotation.x, babylonTransformNode.rotation.z);
        if (babylonTransformNode.rotationQuaternion) {
            rotationQuaternion.multiplyInPlace(babylonTransformNode.rotationQuaternion);
        }
        if (!babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.IsIdentity(rotationQuaternion)) {
            node.rotation = rotationQuaternion.normalize().asArray();
        }
    }
    _setCameraTransformation(node, babylonCamera) {
        if (!babylonCamera.position.equalsToFloats(0, 0, 0)) {
            node.translation = babylonCamera.position.asArray();
        }
        const rotationQuaternion = babylonCamera.rotationQuaternion; // we target the local transformation if one.
        if (rotationQuaternion && !babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.IsIdentity(rotationQuaternion)) {
            node.rotation = rotationQuaternion.normalize().asArray();
        }
    }
    _getVertexBufferFromMesh(attributeKind, bufferMesh) {
        if (bufferMesh.isVerticesDataPresent(attributeKind, true)) {
            const vertexBuffer = bufferMesh.getVertexBuffer(attributeKind, true);
            if (vertexBuffer) {
                return vertexBuffer;
            }
        }
        return null;
    }
    /**
     * Creates a bufferview based on the vertices type for the Babylon mesh
     * @param kind Indicates the type of vertices data
     * @param attributeComponentKind Indicates the numerical type used to store the data
     * @param babylonTransformNode The Babylon mesh to get the vertices data from
     * @param binaryWriter The buffer to write the bufferview data to
     * @param byteStride
     */
    _createBufferViewKind(kind, attributeComponentKind, babylonTransformNode, binaryWriter, byteStride) {
        const bufferMesh = babylonTransformNode instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Mesh
            ? babylonTransformNode
            : babylonTransformNode instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.InstancedMesh
                ? babylonTransformNode.sourceMesh
                : null;
        if (bufferMesh) {
            const vertexBuffer = bufferMesh.getVertexBuffer(kind, true);
            const vertexData = bufferMesh.getVerticesData(kind, undefined, undefined, true);
            if (vertexBuffer && vertexData) {
                const typeByteLength = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.GetTypeByteLength(attributeComponentKind);
                const byteLength = vertexData.length * typeByteLength;
                const bufferView = _glTFUtilities__WEBPACK_IMPORTED_MODULE_2__._GLTFUtilities._CreateBufferView(0, binaryWriter.getByteOffset(), byteLength, byteStride, kind + " - " + bufferMesh.name);
                this._bufferViews.push(bufferView);
                this._writeAttributeData(kind, attributeComponentKind, vertexData, byteStride / typeByteLength, binaryWriter, babylonTransformNode);
            }
        }
    }
    /**
     * Creates a bufferview based on the vertices type for the Babylon mesh
     * @param babylonSubMesh The Babylon submesh that the morph target is applied to
     * @param meshPrimitive
     * @param babylonMorphTarget the morph target to be exported
     * @param binaryWriter The buffer to write the bufferview data to
     */
    _setMorphTargetAttributes(babylonSubMesh, meshPrimitive, babylonMorphTarget, binaryWriter) {
        if (babylonMorphTarget) {
            if (!meshPrimitive.targets) {
                meshPrimitive.targets = [];
            }
            const target = {};
            const mesh = babylonSubMesh.getMesh();
            if (babylonMorphTarget.hasNormals) {
                const vertexNormals = mesh.getVerticesData(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.NormalKind, undefined, undefined, true);
                const morphNormals = babylonMorphTarget.getNormals();
                const count = babylonSubMesh.verticesCount;
                const byteStride = 12; // 3 x 4 byte floats
                const byteLength = count * byteStride;
                const bufferView = _glTFUtilities__WEBPACK_IMPORTED_MODULE_2__._GLTFUtilities._CreateBufferView(0, binaryWriter.getByteOffset(), byteLength, byteStride, babylonMorphTarget.name + "_NORMAL");
                this._bufferViews.push(bufferView);
                const bufferViewIndex = this._bufferViews.length - 1;
                const accessor = _glTFUtilities__WEBPACK_IMPORTED_MODULE_2__._GLTFUtilities._CreateAccessor(bufferViewIndex, babylonMorphTarget.name + " - " + "NORMAL", "VEC3" /* AccessorType.VEC3 */, 5126 /* AccessorComponentType.FLOAT */, count, 0, null, null);
                this._accessors.push(accessor);
                target.NORMAL = this._accessors.length - 1;
                this.writeMorphTargetAttributeData(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.NormalKind, 5126 /* AccessorComponentType.FLOAT */, babylonSubMesh, vertexNormals, morphNormals, byteStride / 4, binaryWriter);
            }
            if (babylonMorphTarget.hasPositions) {
                const vertexPositions = mesh.getVerticesData(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.PositionKind, undefined, undefined, true);
                const morphPositions = babylonMorphTarget.getPositions();
                const count = babylonSubMesh.verticesCount;
                const byteStride = 12; // 3 x 4 byte floats
                const byteLength = count * byteStride;
                const bufferView = _glTFUtilities__WEBPACK_IMPORTED_MODULE_2__._GLTFUtilities._CreateBufferView(0, binaryWriter.getByteOffset(), byteLength, byteStride, babylonMorphTarget.name + "_POSITION");
                this._bufferViews.push(bufferView);
                const bufferViewIndex = this._bufferViews.length - 1;
                const minMax = { min: new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3(Infinity, Infinity, Infinity), max: new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3(-Infinity, -Infinity, -Infinity) };
                const accessor = _glTFUtilities__WEBPACK_IMPORTED_MODULE_2__._GLTFUtilities._CreateAccessor(bufferViewIndex, babylonMorphTarget.name + " - " + "POSITION", "VEC3" /* AccessorType.VEC3 */, 5126 /* AccessorComponentType.FLOAT */, count, 0, null, null);
                this._accessors.push(accessor);
                target.POSITION = this._accessors.length - 1;
                this.writeMorphTargetAttributeData(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.PositionKind, 5126 /* AccessorComponentType.FLOAT */, babylonSubMesh, vertexPositions, morphPositions, byteStride / 4, binaryWriter, minMax);
                accessor.min = minMax.min.asArray();
                accessor.max = minMax.max.asArray();
            }
            if (babylonMorphTarget.hasTangents) {
                const vertexTangents = mesh.getVerticesData(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.TangentKind, undefined, undefined, true);
                const morphTangents = babylonMorphTarget.getTangents();
                const count = babylonSubMesh.verticesCount;
                const byteStride = 12; // 3 x 4 byte floats
                const byteLength = count * byteStride;
                const bufferView = _glTFUtilities__WEBPACK_IMPORTED_MODULE_2__._GLTFUtilities._CreateBufferView(0, binaryWriter.getByteOffset(), byteLength, byteStride, babylonMorphTarget.name + "_NORMAL");
                this._bufferViews.push(bufferView);
                const bufferViewIndex = this._bufferViews.length - 1;
                const accessor = _glTFUtilities__WEBPACK_IMPORTED_MODULE_2__._GLTFUtilities._CreateAccessor(bufferViewIndex, babylonMorphTarget.name + " - " + "TANGENT", "VEC3" /* AccessorType.VEC3 */, 5126 /* AccessorComponentType.FLOAT */, count, 0, null, null);
                this._accessors.push(accessor);
                target.TANGENT = this._accessors.length - 1;
                this.writeMorphTargetAttributeData(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.TangentKind, 5126 /* AccessorComponentType.FLOAT */, babylonSubMesh, vertexTangents, morphTangents, byteStride / 4, binaryWriter);
            }
            meshPrimitive.targets.push(target);
        }
    }
    /**
     * The primitive mode of the Babylon mesh
     * @param babylonMesh The BabylonJS mesh
     */
    _getMeshPrimitiveMode(babylonMesh) {
        if (babylonMesh instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.LinesMesh) {
            return babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Material.LineListDrawMode;
        }
        if (babylonMesh instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.InstancedMesh || babylonMesh instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Mesh) {
            const baseMesh = babylonMesh instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Mesh ? babylonMesh : babylonMesh.sourceMesh;
            if (typeof baseMesh.overrideRenderingFillMode === "number") {
                return baseMesh.overrideRenderingFillMode;
            }
        }
        return babylonMesh.material ? babylonMesh.material.fillMode : babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Material.TriangleFillMode;
    }
    /**
     * Sets the primitive mode of the glTF mesh primitive
     * @param meshPrimitive glTF mesh primitive
     * @param primitiveMode The primitive mode
     */
    _setPrimitiveMode(meshPrimitive, primitiveMode) {
        switch (primitiveMode) {
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Material.TriangleFillMode: {
                // glTF defaults to using Triangle Mode
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Material.TriangleStripDrawMode: {
                meshPrimitive.mode = 5 /* MeshPrimitiveMode.TRIANGLE_STRIP */;
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Material.TriangleFanDrawMode: {
                meshPrimitive.mode = 6 /* MeshPrimitiveMode.TRIANGLE_FAN */;
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Material.PointListDrawMode: {
                meshPrimitive.mode = 0 /* MeshPrimitiveMode.POINTS */;
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Material.PointFillMode: {
                meshPrimitive.mode = 0 /* MeshPrimitiveMode.POINTS */;
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Material.LineLoopDrawMode: {
                meshPrimitive.mode = 2 /* MeshPrimitiveMode.LINE_LOOP */;
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Material.LineListDrawMode: {
                meshPrimitive.mode = 1 /* MeshPrimitiveMode.LINES */;
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Material.LineStripDrawMode: {
                meshPrimitive.mode = 3 /* MeshPrimitiveMode.LINE_STRIP */;
                break;
            }
        }
    }
    /**
     * Sets the vertex attribute accessor based of the glTF mesh primitive
     * @param meshPrimitive glTF mesh primitive
     * @param attributeKind vertex attribute
     * @returns boolean specifying if uv coordinates are present
     */
    _setAttributeKind(meshPrimitive, attributeKind) {
        switch (attributeKind) {
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.PositionKind: {
                meshPrimitive.attributes.POSITION = this._accessors.length - 1;
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.NormalKind: {
                meshPrimitive.attributes.NORMAL = this._accessors.length - 1;
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.ColorKind: {
                meshPrimitive.attributes.COLOR_0 = this._accessors.length - 1;
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.TangentKind: {
                meshPrimitive.attributes.TANGENT = this._accessors.length - 1;
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UVKind: {
                meshPrimitive.attributes.TEXCOORD_0 = this._accessors.length - 1;
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UV2Kind: {
                meshPrimitive.attributes.TEXCOORD_1 = this._accessors.length - 1;
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.MatricesIndicesKind: {
                meshPrimitive.attributes.JOINTS_0 = this._accessors.length - 1;
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.MatricesIndicesExtraKind: {
                meshPrimitive.attributes.JOINTS_1 = this._accessors.length - 1;
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.MatricesWeightsKind: {
                meshPrimitive.attributes.WEIGHTS_0 = this._accessors.length - 1;
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.MatricesWeightsExtraKind: {
                meshPrimitive.attributes.WEIGHTS_1 = this._accessors.length - 1;
                break;
            }
            default: {
                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Warn("Unsupported Vertex Buffer Type: " + attributeKind);
            }
        }
    }
    /**
     * Sets data for the primitive attributes of each submesh
     * @param mesh glTF Mesh object to store the primitive attribute information
     * @param babylonTransformNode Babylon mesh to get the primitive attribute data from
     * @param binaryWriter Buffer to write the attribute data to
     */
    _setPrimitiveAttributesAsync(mesh, babylonTransformNode, binaryWriter) {
        const promises = [];
        let bufferMesh = null;
        let bufferView;
        let minMax;
        if (babylonTransformNode instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Mesh) {
            bufferMesh = babylonTransformNode;
        }
        else if (babylonTransformNode instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.InstancedMesh) {
            bufferMesh = babylonTransformNode.sourceMesh;
        }
        const attributeData = [
            { kind: babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.PositionKind, accessorType: "VEC3" /* AccessorType.VEC3 */, accessorComponentType: 5126 /* AccessorComponentType.FLOAT */, byteStride: 12 },
            { kind: babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.NormalKind, accessorType: "VEC3" /* AccessorType.VEC3 */, accessorComponentType: 5126 /* AccessorComponentType.FLOAT */, byteStride: 12 },
            { kind: babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.ColorKind, accessorType: "VEC4" /* AccessorType.VEC4 */, accessorComponentType: 5126 /* AccessorComponentType.FLOAT */, byteStride: 16 },
            { kind: babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.TangentKind, accessorType: "VEC4" /* AccessorType.VEC4 */, accessorComponentType: 5126 /* AccessorComponentType.FLOAT */, byteStride: 16 },
            { kind: babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UVKind, accessorType: "VEC2" /* AccessorType.VEC2 */, accessorComponentType: 5126 /* AccessorComponentType.FLOAT */, byteStride: 8 },
            { kind: babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UV2Kind, accessorType: "VEC2" /* AccessorType.VEC2 */, accessorComponentType: 5126 /* AccessorComponentType.FLOAT */, byteStride: 8 },
            { kind: babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.MatricesIndicesKind, accessorType: "VEC4" /* AccessorType.VEC4 */, accessorComponentType: 5123 /* AccessorComponentType.UNSIGNED_SHORT */, byteStride: 8 },
            { kind: babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.MatricesIndicesExtraKind, accessorType: "VEC4" /* AccessorType.VEC4 */, accessorComponentType: 5123 /* AccessorComponentType.UNSIGNED_SHORT */, byteStride: 8 },
            { kind: babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.MatricesWeightsKind, accessorType: "VEC4" /* AccessorType.VEC4 */, accessorComponentType: 5126 /* AccessorComponentType.FLOAT */, byteStride: 16 },
            { kind: babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.MatricesWeightsExtraKind, accessorType: "VEC4" /* AccessorType.VEC4 */, accessorComponentType: 5126 /* AccessorComponentType.FLOAT */, byteStride: 16 },
        ];
        if (bufferMesh) {
            let indexBufferViewIndex = null;
            const primitiveMode = this._getMeshPrimitiveMode(bufferMesh);
            const vertexAttributeBufferViews = {};
            const morphTargetManager = bufferMesh.morphTargetManager;
            // For each BabylonMesh, create bufferviews for each 'kind'
            for (const attribute of attributeData) {
                const attributeKind = attribute.kind;
                const attributeComponentKind = attribute.accessorComponentType;
                if (bufferMesh.isVerticesDataPresent(attributeKind, true)) {
                    const vertexBuffer = this._getVertexBufferFromMesh(attributeKind, bufferMesh);
                    attribute.byteStride = vertexBuffer
                        ? vertexBuffer.getSize() * babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.GetTypeByteLength(attribute.accessorComponentType)
                        : babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.DeduceStride(attributeKind) * 4;
                    if (attribute.byteStride === 12) {
                        attribute.accessorType = "VEC3" /* AccessorType.VEC3 */;
                    }
                    this._createBufferViewKind(attributeKind, attributeComponentKind, babylonTransformNode, binaryWriter, attribute.byteStride);
                    attribute.bufferViewIndex = this._bufferViews.length - 1;
                    vertexAttributeBufferViews[attributeKind] = attribute.bufferViewIndex;
                }
            }
            if (bufferMesh.getTotalIndices()) {
                const indices = bufferMesh.getIndices();
                if (indices) {
                    const byteLength = indices.length * 4;
                    bufferView = _glTFUtilities__WEBPACK_IMPORTED_MODULE_2__._GLTFUtilities._CreateBufferView(0, binaryWriter.getByteOffset(), byteLength, undefined, "Indices - " + bufferMesh.name);
                    this._bufferViews.push(bufferView);
                    indexBufferViewIndex = this._bufferViews.length - 1;
                    for (let k = 0, length = indices.length; k < length; ++k) {
                        binaryWriter.setUInt32(indices[k]);
                    }
                }
            }
            if (bufferMesh.subMeshes) {
                // go through all mesh primitives (submeshes)
                for (const submesh of bufferMesh.subMeshes) {
                    let babylonMaterial = submesh.getMaterial() || bufferMesh.getScene().defaultMaterial;
                    let materialIndex = null;
                    if (babylonMaterial) {
                        if (bufferMesh instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.LinesMesh) {
                            // get the color from the lines mesh and set it in the material
                            const material = {
                                name: bufferMesh.name + " material",
                            };
                            if (!bufferMesh.color.equals(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Color3.White()) || bufferMesh.alpha < 1) {
                                material.pbrMetallicRoughness = {
                                    baseColorFactor: bufferMesh.color.asArray().concat([bufferMesh.alpha]),
                                };
                            }
                            this._materials.push(material);
                            materialIndex = this._materials.length - 1;
                        }
                        else if (babylonMaterial instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.MultiMaterial) {
                            const subMaterial = babylonMaterial.subMaterials[submesh.materialIndex];
                            if (subMaterial) {
                                babylonMaterial = subMaterial;
                                materialIndex = this._materialMap[babylonMaterial.uniqueId];
                            }
                        }
                        else {
                            materialIndex = this._materialMap[babylonMaterial.uniqueId];
                        }
                    }
                    const glTFMaterial = materialIndex != null ? this._materials[materialIndex] : null;
                    const meshPrimitive = { attributes: {} };
                    this._setPrimitiveMode(meshPrimitive, primitiveMode);
                    for (const attribute of attributeData) {
                        const attributeKind = attribute.kind;
                        if ((attributeKind === babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UVKind || attributeKind === babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UV2Kind) && !this._options.exportUnusedUVs) {
                            if (!glTFMaterial || !this._glTFMaterialExporter._hasTexturesPresent(glTFMaterial)) {
                                continue;
                            }
                        }
                        const vertexData = bufferMesh.getVerticesData(attributeKind, undefined, undefined, true);
                        if (vertexData) {
                            const vertexBuffer = this._getVertexBufferFromMesh(attributeKind, bufferMesh);
                            if (vertexBuffer) {
                                const stride = vertexBuffer.getSize();
                                const bufferViewIndex = attribute.bufferViewIndex;
                                if (bufferViewIndex != undefined) {
                                    // check to see if bufferviewindex has a numeric value assigned.
                                    minMax = { min: null, max: null };
                                    if (attributeKind == babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.PositionKind) {
                                        minMax = _glTFUtilities__WEBPACK_IMPORTED_MODULE_2__._GLTFUtilities._CalculateMinMaxPositions(vertexData, 0, vertexData.length / stride);
                                    }
                                    const accessor = _glTFUtilities__WEBPACK_IMPORTED_MODULE_2__._GLTFUtilities._CreateAccessor(bufferViewIndex, attributeKind + " - " + babylonTransformNode.name, attribute.accessorType, attribute.accessorComponentType, vertexData.length / stride, 0, minMax.min, minMax.max);
                                    this._accessors.push(accessor);
                                    this._setAttributeKind(meshPrimitive, attributeKind);
                                }
                            }
                        }
                    }
                    if (indexBufferViewIndex) {
                        // Create accessor
                        const accessor = _glTFUtilities__WEBPACK_IMPORTED_MODULE_2__._GLTFUtilities._CreateAccessor(indexBufferViewIndex, "indices - " + babylonTransformNode.name, "SCALAR" /* AccessorType.SCALAR */, 5125 /* AccessorComponentType.UNSIGNED_INT */, submesh.indexCount, submesh.indexStart * 4, null, null);
                        this._accessors.push(accessor);
                        meshPrimitive.indices = this._accessors.length - 1;
                    }
                    if (materialIndex != null && Object.keys(meshPrimitive.attributes).length > 0) {
                        const sideOrientation = bufferMesh.overrideMaterialSideOrientation !== null ? bufferMesh.overrideMaterialSideOrientation : babylonMaterial.sideOrientation;
                        if (sideOrientation === (this._babylonScene.useRightHandedSystem ? babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Material.ClockWiseSideOrientation : babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Material.CounterClockWiseSideOrientation)) {
                            let byteOffset = indexBufferViewIndex != null ? this._bufferViews[indexBufferViewIndex].byteOffset : null;
                            if (byteOffset == null) {
                                byteOffset = 0;
                            }
                            let babylonIndices = null;
                            if (indexBufferViewIndex != null) {
                                babylonIndices = bufferMesh.getIndices();
                            }
                            if (babylonIndices) {
                                this._reorderIndicesBasedOnPrimitiveMode(submesh, primitiveMode, babylonIndices, byteOffset, binaryWriter);
                            }
                            else {
                                for (const attribute of attributeData) {
                                    const vertexData = bufferMesh.getVerticesData(attribute.kind, undefined, undefined, true);
                                    if (vertexData) {
                                        const byteOffset = this._bufferViews[vertexAttributeBufferViews[attribute.kind]].byteOffset || 0;
                                        this._reorderVertexAttributeDataBasedOnPrimitiveMode(submesh, primitiveMode, attribute.kind, vertexData, byteOffset, binaryWriter);
                                    }
                                }
                            }
                        }
                        meshPrimitive.material = materialIndex;
                    }
                    if (morphTargetManager) {
                        let target;
                        for (let i = 0; i < morphTargetManager.numTargets; ++i) {
                            target = morphTargetManager.getTarget(i);
                            this._setMorphTargetAttributes(submesh, meshPrimitive, target, binaryWriter);
                        }
                    }
                    mesh.primitives.push(meshPrimitive);
                    this._extensionsPostExportMeshPrimitiveAsync("postExport", meshPrimitive, submesh, binaryWriter);
                    promises.push();
                }
            }
        }
        return Promise.all(promises).then(() => {
            /* do nothing */
        });
    }
    /**
     * Creates a glTF scene based on the array of meshes
     * Returns the the total byte offset
     * @param babylonScene Babylon scene to get the mesh data from
     * @param binaryWriter Buffer to write binary data to
     */
    _createSceneAsync(binaryWriter) {
        const scene = { nodes: [] };
        let glTFNodeIndex;
        let glTFNode;
        let directDescendents;
        const nodes = [...this._babylonScene.transformNodes, ...this._babylonScene.meshes, ...this._babylonScene.lights, ...this._babylonScene.cameras];
        const removedRootNodes = new Set();
        // Scene metadata
        if (this._babylonScene.metadata) {
            if (this._options.metadataSelector) {
                scene.extras = this._options.metadataSelector(this._babylonScene.metadata);
            }
            else if (this._babylonScene.metadata.gltf) {
                scene.extras = this._babylonScene.metadata.gltf.extras;
            }
        }
        // Remove no-op root nodes
        if ((this._options.removeNoopRootNodes ?? true) && !this._options.includeCoordinateSystemConversionNodes) {
            for (const rootNode of this._babylonScene.rootNodes) {
                if (isNoopNode(rootNode, this._babylonScene.useRightHandedSystem)) {
                    removedRootNodes.add(rootNode);
                    // Exclude the node from list of nodes to export
                    nodes.splice(nodes.indexOf(rootNode), 1);
                }
            }
        }
        // Export babylon cameras to glTFCamera
        const cameraMap = new Map();
        this._babylonScene.cameras.forEach((camera) => {
            if (!this._options.shouldExportNode || this._options.shouldExportNode(camera)) {
                const glTFCamera = {
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
                    const halfWidth = camera.orthoLeft && camera.orthoRight ? 0.5 * (camera.orthoRight - camera.orthoLeft) : camera.getEngine().getRenderWidth() * 0.5;
                    const halfHeight = camera.orthoBottom && camera.orthoTop ? 0.5 * (camera.orthoTop - camera.orthoBottom) : camera.getEngine().getRenderHeight() * 0.5;
                    glTFCamera.orthographic = {
                        xmag: halfWidth,
                        ymag: halfHeight,
                        znear: camera.minZ,
                        zfar: camera.maxZ,
                    };
                }
                cameraMap.set(camera, this._cameras.length);
                this._cameras.push(glTFCamera);
            }
        });
        const [exportNodes, exportMaterials] = this._getExportNodes(nodes);
        return this._glTFMaterialExporter._convertMaterialsToGLTFAsync(exportMaterials, "image/png" /* ImageMimeType.PNG */, true).then(() => {
            return this._createNodeMapAndAnimationsAsync(exportNodes, binaryWriter).then((nodeMap) => {
                return this._createSkinsAsync(nodeMap, binaryWriter).then((skinMap) => {
                    this._nodeMap = nodeMap;
                    this._totalByteLength = binaryWriter.getByteOffset();
                    if (this._totalByteLength == undefined) {
                        throw new Error("undefined byte length!");
                    }
                    // Build Hierarchy with the node map.
                    for (const babylonNode of nodes) {
                        glTFNodeIndex = this._nodeMap[babylonNode.uniqueId];
                        if (glTFNodeIndex !== undefined) {
                            glTFNode = this._nodes[glTFNodeIndex];
                            if (babylonNode.metadata) {
                                if (this._options.metadataSelector) {
                                    glTFNode.extras = this._options.metadataSelector(babylonNode.metadata);
                                }
                                else if (babylonNode.metadata.gltf) {
                                    glTFNode.extras = babylonNode.metadata.gltf.extras;
                                }
                            }
                            if (babylonNode instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Camera) {
                                glTFNode.camera = cameraMap.get(babylonNode);
                            }
                            if (this._options.shouldExportNode && !this._options.shouldExportNode(babylonNode)) {
                                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Log("Omitting " + babylonNode.name + " from scene.");
                            }
                            else {
                                if (!babylonNode.parent && !this._babylonScene.useRightHandedSystem) {
                                    convertNodeHandedness(glTFNode);
                                }
                                if (!babylonNode.parent || removedRootNodes.has(babylonNode.parent)) {
                                    scene.nodes.push(glTFNodeIndex);
                                }
                            }
                            if (babylonNode instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Mesh) {
                                if (babylonNode.skeleton) {
                                    glTFNode.skin = skinMap[babylonNode.skeleton.uniqueId];
                                }
                            }
                            directDescendents = babylonNode.getDescendants(true);
                            if (!glTFNode.children && directDescendents && directDescendents.length) {
                                const children = [];
                                for (const descendent of directDescendents) {
                                    if (this._nodeMap[descendent.uniqueId] != null) {
                                        children.push(this._nodeMap[descendent.uniqueId]);
                                    }
                                }
                                if (children.length) {
                                    glTFNode.children = children;
                                }
                            }
                        }
                    }
                    if (scene.nodes.length) {
                        this._scenes.push(scene);
                    }
                });
            });
        });
    }
    /**
     * Getting the nodes and materials that would be exported.
     * @param nodes Babylon transform nodes
     * @returns Array of nodes which would be exported.
     * @returns Set of materials which would be exported.
     */
    _getExportNodes(nodes) {
        const exportNodes = [];
        const exportMaterials = new Set();
        for (const babylonNode of nodes) {
            if (!this._options.shouldExportNode || this._options.shouldExportNode(babylonNode)) {
                exportNodes.push(babylonNode);
                const babylonMesh = babylonNode;
                if (babylonMesh.subMeshes && babylonMesh.subMeshes.length > 0) {
                    const material = babylonMesh.material || babylonMesh.getScene().defaultMaterial;
                    if (material instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.MultiMaterial) {
                        for (const subMaterial of material.subMaterials) {
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
                `Excluding node ${babylonNode.name}`;
            }
        }
        return [exportNodes, exportMaterials];
    }
    /**
     * Creates a mapping of Node unique id to node index and handles animations
     * @param nodes Babylon transform nodes
     * @param binaryWriter Buffer to write binary data to
     * @returns Node mapping of unique id to index
     */
    _createNodeMapAndAnimationsAsync(nodes, binaryWriter) {
        let promiseChain = Promise.resolve();
        const nodeMap = {};
        let nodeIndex;
        const runtimeGLTFAnimation = {
            name: "runtime animations",
            channels: [],
            samplers: [],
        };
        const idleGLTFAnimations = [];
        for (const babylonNode of nodes) {
            promiseChain = promiseChain.then(() => {
                return this._createNodeAsync(babylonNode, binaryWriter).then((node) => {
                    const promise = this._extensionsPostExportNodeAsync("createNodeAsync", node, babylonNode, nodeMap, binaryWriter);
                    if (promise == null) {
                        babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Warn(`Not exporting node ${babylonNode.name}`);
                        return Promise.resolve();
                    }
                    else {
                        return promise.then((node) => {
                            if (!node) {
                                return;
                            }
                            this._nodes.push(node);
                            nodeIndex = this._nodes.length - 1;
                            nodeMap[babylonNode.uniqueId] = nodeIndex;
                            if (!this._babylonScene.animationGroups.length) {
                                _glTFAnimation__WEBPACK_IMPORTED_MODULE_4__._GLTFAnimation._CreateMorphTargetAnimationFromMorphTargetAnimations(babylonNode, runtimeGLTFAnimation, idleGLTFAnimations, nodeMap, this._nodes, binaryWriter, this._bufferViews, this._accessors, this._animationSampleRate, this._options.shouldExportAnimation);
                                if (babylonNode.animations.length) {
                                    _glTFAnimation__WEBPACK_IMPORTED_MODULE_4__._GLTFAnimation._CreateNodeAnimationFromNodeAnimations(babylonNode, runtimeGLTFAnimation, idleGLTFAnimations, nodeMap, this._nodes, binaryWriter, this._bufferViews, this._accessors, this._animationSampleRate, this._options.shouldExportAnimation);
                                }
                            }
                        });
                    }
                });
            });
        }
        return promiseChain.then(() => {
            if (runtimeGLTFAnimation.channels.length && runtimeGLTFAnimation.samplers.length) {
                this._animations.push(runtimeGLTFAnimation);
            }
            idleGLTFAnimations.forEach((idleGLTFAnimation) => {
                if (idleGLTFAnimation.channels.length && idleGLTFAnimation.samplers.length) {
                    this._animations.push(idleGLTFAnimation);
                }
            });
            if (this._babylonScene.animationGroups.length) {
                _glTFAnimation__WEBPACK_IMPORTED_MODULE_4__._GLTFAnimation._CreateNodeAndMorphAnimationFromAnimationGroups(this._babylonScene, this._animations, nodeMap, binaryWriter, this._bufferViews, this._accessors, this._animationSampleRate, this._options.shouldExportAnimation);
            }
            return nodeMap;
        });
    }
    /**
     * Creates a glTF node from a Babylon mesh
     * @param babylonNode Source Babylon mesh
     * @param binaryWriter Buffer for storing geometry data
     * @returns glTF node
     */
    _createNodeAsync(babylonNode, binaryWriter) {
        return Promise.resolve().then(() => {
            // create node to hold translation/rotation/scale and the mesh
            const node = {};
            // create mesh
            const mesh = { primitives: [] };
            if (babylonNode.name) {
                node.name = babylonNode.name;
            }
            if (babylonNode instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TransformNode) {
                // Set transformation
                this._setNodeTransformation(node, babylonNode);
                if (babylonNode instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Mesh) {
                    const morphTargetManager = babylonNode.morphTargetManager;
                    if (morphTargetManager && morphTargetManager.numTargets > 0) {
                        mesh.weights = [];
                        for (let i = 0; i < morphTargetManager.numTargets; ++i) {
                            mesh.weights.push(morphTargetManager.getTarget(i).influence);
                        }
                    }
                }
                return this._setPrimitiveAttributesAsync(mesh, babylonNode, binaryWriter).then(() => {
                    if (mesh.primitives.length) {
                        this._meshes.push(mesh);
                        node.mesh = this._meshes.length - 1;
                    }
                    return node;
                });
            }
            else if (babylonNode instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Camera) {
                this._setCameraTransformation(node, babylonNode);
                return node;
            }
            else {
                return node;
            }
        });
    }
    /**
     * Creates a glTF skin from a Babylon skeleton
     * @param babylonScene Babylon Scene
     * @param nodeMap Babylon transform nodes
     * @param binaryWriter Buffer to write binary data to
     * @returns Node mapping of unique id to index
     */
    _createSkinsAsync(nodeMap, binaryWriter) {
        const promiseChain = Promise.resolve();
        const skinMap = {};
        for (const skeleton of this._babylonScene.skeletons) {
            if (skeleton.bones.length <= 0) {
                continue;
            }
            // create skin
            const skin = { joints: [] };
            const inverseBindMatrices = [];
            const boneIndexMap = {};
            let maxBoneIndex = -1;
            for (let i = 0; i < skeleton.bones.length; ++i) {
                const bone = skeleton.bones[i];
                const boneIndex = bone.getIndex() ?? i;
                if (boneIndex !== -1) {
                    boneIndexMap[boneIndex] = bone;
                    if (boneIndex > maxBoneIndex) {
                        maxBoneIndex = boneIndex;
                    }
                }
            }
            for (let boneIndex = 0; boneIndex <= maxBoneIndex; ++boneIndex) {
                const bone = boneIndexMap[boneIndex];
                inverseBindMatrices.push(bone.getInvertedAbsoluteTransform());
                const transformNode = bone.getTransformNode();
                if (transformNode && nodeMap[transformNode.uniqueId] !== null && nodeMap[transformNode.uniqueId] !== undefined) {
                    skin.joints.push(nodeMap[transformNode.uniqueId]);
                }
                else {
                    babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Warn("Exporting a bone without a linked transform node is currently unsupported");
                }
            }
            if (skin.joints.length > 0) {
                // create buffer view for inverse bind matrices
                const byteStride = 64; // 4 x 4 matrix of 32 bit float
                const byteLength = inverseBindMatrices.length * byteStride;
                const bufferViewOffset = binaryWriter.getByteOffset();
                const bufferView = _glTFUtilities__WEBPACK_IMPORTED_MODULE_2__._GLTFUtilities._CreateBufferView(0, bufferViewOffset, byteLength, undefined, "InverseBindMatrices" + " - " + skeleton.name);
                this._bufferViews.push(bufferView);
                const bufferViewIndex = this._bufferViews.length - 1;
                const bindMatrixAccessor = _glTFUtilities__WEBPACK_IMPORTED_MODULE_2__._GLTFUtilities._CreateAccessor(bufferViewIndex, "InverseBindMatrices" + " - " + skeleton.name, "MAT4" /* AccessorType.MAT4 */, 5126 /* AccessorComponentType.FLOAT */, inverseBindMatrices.length, null, null, null);
                const inverseBindAccessorIndex = this._accessors.push(bindMatrixAccessor) - 1;
                skin.inverseBindMatrices = inverseBindAccessorIndex;
                this._skins.push(skin);
                skinMap[skeleton.uniqueId] = this._skins.length - 1;
                inverseBindMatrices.forEach((mat) => {
                    mat.m.forEach((cell) => {
                        binaryWriter.setFloat32(cell);
                    });
                });
            }
        }
        return promiseChain.then(() => {
            return skinMap;
        });
    }
}
_Exporter._ExtensionNames = new Array();
_Exporter._ExtensionFactories = {};
/**
 * @internal
 *
 * Stores glTF binary data.  If the array buffer byte length is exceeded, it doubles in size dynamically
 */
class _BinaryWriter {
    /**
     * Initialize binary writer with an initial byte length
     * @param byteLength Initial byte length of the array buffer
     */
    constructor(byteLength) {
        this._arrayBuffer = new ArrayBuffer(byteLength);
        this._dataView = new DataView(this._arrayBuffer);
        this._byteOffset = 0;
    }
    /**
     * Resize the array buffer to the specified byte length
     * @param byteLength
     */
    _resizeBuffer(byteLength) {
        const newBuffer = new ArrayBuffer(byteLength);
        const copyOldBufferSize = Math.min(this._arrayBuffer.byteLength, byteLength);
        const oldUint8Array = new Uint8Array(this._arrayBuffer, 0, copyOldBufferSize);
        const newUint8Array = new Uint8Array(newBuffer);
        newUint8Array.set(oldUint8Array, 0);
        this._arrayBuffer = newBuffer;
        this._dataView = new DataView(this._arrayBuffer);
        return newBuffer;
    }
    /**
     * Get an array buffer with the length of the byte offset
     * @returns ArrayBuffer resized to the byte offset
     */
    getArrayBuffer() {
        return this._resizeBuffer(this.getByteOffset());
    }
    /**
     * Get the byte offset of the array buffer
     * @returns byte offset
     */
    getByteOffset() {
        if (this._byteOffset == undefined) {
            throw new Error("Byte offset is undefined!");
        }
        return this._byteOffset;
    }
    /**
     * Stores an UInt8 in the array buffer
     * @param entry
     * @param byteOffset If defined, specifies where to set the value as an offset.
     */
    setUInt8(entry, byteOffset) {
        if (byteOffset != null) {
            if (byteOffset < this._byteOffset) {
                this._dataView.setUint8(byteOffset, entry);
            }
            else {
                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Error("BinaryWriter: byteoffset is greater than the current binary buffer length!");
            }
        }
        else {
            if (this._byteOffset + 1 > this._arrayBuffer.byteLength) {
                this._resizeBuffer(this._arrayBuffer.byteLength * 2);
            }
            this._dataView.setUint8(this._byteOffset, entry);
            this._byteOffset += 1;
        }
    }
    /**
     * Stores an UInt16 in the array buffer
     * @param entry
     * @param byteOffset If defined, specifies where to set the value as an offset.
     */
    setUInt16(entry, byteOffset) {
        if (byteOffset != null) {
            if (byteOffset < this._byteOffset) {
                this._dataView.setUint16(byteOffset, entry, true);
            }
            else {
                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Error("BinaryWriter: byteoffset is greater than the current binary buffer length!");
            }
        }
        else {
            if (this._byteOffset + 2 > this._arrayBuffer.byteLength) {
                this._resizeBuffer(this._arrayBuffer.byteLength * 2);
            }
            this._dataView.setUint16(this._byteOffset, entry, true);
            this._byteOffset += 2;
        }
    }
    /**
     * Gets an UInt32 in the array buffer
     * @param byteOffset If defined, specifies where to set the value as an offset.
     */
    getUInt32(byteOffset) {
        if (byteOffset < this._byteOffset) {
            return this._dataView.getUint32(byteOffset, true);
        }
        else {
            babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Error("BinaryWriter: byteoffset is greater than the current binary buffer length!");
            throw new Error("BinaryWriter: byteoffset is greater than the current binary buffer length!");
        }
    }
    getVector3Float32FromRef(vector3, byteOffset) {
        if (byteOffset + 8 > this._byteOffset) {
            babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Error(`BinaryWriter: byteoffset is greater than the current binary buffer length!`);
        }
        else {
            vector3.x = this._dataView.getFloat32(byteOffset, true);
            vector3.y = this._dataView.getFloat32(byteOffset + 4, true);
            vector3.z = this._dataView.getFloat32(byteOffset + 8, true);
        }
    }
    setVector3Float32FromRef(vector3, byteOffset) {
        if (byteOffset + 8 > this._byteOffset) {
            babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Error(`BinaryWriter: byteoffset is greater than the current binary buffer length!`);
        }
        else {
            this._dataView.setFloat32(byteOffset, vector3.x, true);
            this._dataView.setFloat32(byteOffset + 4, vector3.y, true);
            this._dataView.setFloat32(byteOffset + 8, vector3.z, true);
        }
    }
    getVector4Float32FromRef(vector4, byteOffset) {
        if (byteOffset + 12 > this._byteOffset) {
            babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Error(`BinaryWriter: byteoffset is greater than the current binary buffer length!`);
        }
        else {
            vector4.x = this._dataView.getFloat32(byteOffset, true);
            vector4.y = this._dataView.getFloat32(byteOffset + 4, true);
            vector4.z = this._dataView.getFloat32(byteOffset + 8, true);
            vector4.w = this._dataView.getFloat32(byteOffset + 12, true);
        }
    }
    setVector4Float32FromRef(vector4, byteOffset) {
        if (byteOffset + 12 > this._byteOffset) {
            babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Error(`BinaryWriter: byteoffset is greater than the current binary buffer length!`);
        }
        else {
            this._dataView.setFloat32(byteOffset, vector4.x, true);
            this._dataView.setFloat32(byteOffset + 4, vector4.y, true);
            this._dataView.setFloat32(byteOffset + 8, vector4.z, true);
            this._dataView.setFloat32(byteOffset + 12, vector4.w, true);
        }
    }
    /**
     * Stores a Float32 in the array buffer
     * @param entry
     * @param byteOffset
     */
    setFloat32(entry, byteOffset) {
        if (isNaN(entry)) {
            babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Error("Invalid data being written!");
        }
        if (byteOffset != null) {
            if (byteOffset < this._byteOffset) {
                this._dataView.setFloat32(byteOffset, entry, true);
            }
            else {
                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Error("BinaryWriter: byteoffset is greater than the current binary length!");
            }
        }
        if (this._byteOffset + 4 > this._arrayBuffer.byteLength) {
            this._resizeBuffer(this._arrayBuffer.byteLength * 2);
        }
        this._dataView.setFloat32(this._byteOffset, entry, true);
        this._byteOffset += 4;
    }
    /**
     * Stores an UInt32 in the array buffer
     * @param entry
     * @param byteOffset If defined, specifies where to set the value as an offset.
     */
    setUInt32(entry, byteOffset) {
        if (byteOffset != null) {
            if (byteOffset < this._byteOffset) {
                this._dataView.setUint32(byteOffset, entry, true);
            }
            else {
                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Error("BinaryWriter: byteoffset is greater than the current binary buffer length!");
            }
        }
        else {
            if (this._byteOffset + 4 > this._arrayBuffer.byteLength) {
                this._resizeBuffer(this._arrayBuffer.byteLength * 2);
            }
            this._dataView.setUint32(this._byteOffset, entry, true);
            this._byteOffset += 4;
        }
    }
    /**
     * Stores an Int16 in the array buffer
     * @param entry
     * @param byteOffset If defined, specifies where to set the value as an offset.
     */
    setInt16(entry, byteOffset) {
        if (byteOffset != null) {
            if (byteOffset < this._byteOffset) {
                this._dataView.setInt16(byteOffset, entry, true);
            }
            else {
                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Error("BinaryWriter: byteoffset is greater than the current binary buffer length!");
            }
        }
        else {
            if (this._byteOffset + 2 > this._arrayBuffer.byteLength) {
                this._resizeBuffer(this._arrayBuffer.byteLength * 2);
            }
            this._dataView.setInt16(this._byteOffset, entry, true);
            this._byteOffset += 2;
        }
    }
    /**
     * Stores a byte in the array buffer
     * @param entry
     * @param byteOffset If defined, specifies where to set the value as an offset.
     */
    setByte(entry, byteOffset) {
        if (byteOffset != null) {
            if (byteOffset < this._byteOffset) {
                this._dataView.setInt8(byteOffset, entry);
            }
            else {
                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Error("BinaryWriter: byteoffset is greater than the current binary buffer length!");
            }
        }
        else {
            if (this._byteOffset + 1 > this._arrayBuffer.byteLength) {
                this._resizeBuffer(this._arrayBuffer.byteLength * 2);
            }
            this._dataView.setInt8(this._byteOffset, entry);
            this._byteOffset++;
        }
    }
}


/***/ }),

/***/ "../../../dev/serializers/src/glTF/2.0/glTFExporterExtension.ts":
/*!**********************************************************************!*\
  !*** ../../../dev/serializers/src/glTF/2.0/glTFExporterExtension.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __IGLTFExporterExtensionV2: () => (/* binding */ __IGLTFExporterExtensionV2)
/* harmony export */ });
/** @internal */
// eslint-disable-next-line no-var, @typescript-eslint/naming-convention
var __IGLTFExporterExtensionV2 = 0; // I am here to allow dts to be created


/***/ }),

/***/ "../../../dev/serializers/src/glTF/2.0/glTFMaterialExporter.ts":
/*!*********************************************************************!*\
  !*** ../../../dev/serializers/src/glTF/2.0/glTFMaterialExporter.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _GLTFMaterialExporter: () => (/* binding */ _GLTFMaterialExporter)
/* harmony export */ });
/* harmony import */ var babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Misc/dumpTools */ "babylonjs/Maths/math.vector");
/* harmony import */ var babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__);









function getFileExtensionFromMimeType(mimeType) {
    switch (mimeType) {
        case "image/jpeg" /* ImageMimeType.JPEG */:
            return ".jpg";
        case "image/png" /* ImageMimeType.PNG */:
            return ".png";
        case "image/webp" /* ImageMimeType.WEBP */:
            return ".webp";
    }
}
/**
 * Utility methods for working with glTF material conversion properties.  This class should only be used internally
 * @internal
 */
class _GLTFMaterialExporter {
    constructor(exporter) {
        /**
         * Mapping to store textures
         */
        this._textureMap = {};
        // Mapping of internal textures to images to avoid exporting duplicate images.
        this._internalTextureToImage = {};
        this._textureMap = {};
        this._exporter = exporter;
    }
    /**
     * Specifies if two colors are approximately equal in value
     * @param color1 first color to compare to
     * @param color2 second color to compare to
     * @param epsilon threshold value
     */
    static _FuzzyEquals(color1, color2, epsilon) {
        return babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Scalar.WithinEpsilon(color1.r, color2.r, epsilon) && babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Scalar.WithinEpsilon(color1.g, color2.g, epsilon) && babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Scalar.WithinEpsilon(color1.b, color2.b, epsilon);
    }
    /**
     * Gets the materials from a Babylon scene and converts them to glTF materials
     * @param exportMaterials
     * @param mimeType texture mime type
     * @param hasTextureCoords specifies if texture coordinates are present on the material
     */
    _convertMaterialsToGLTFAsync(exportMaterials, mimeType, hasTextureCoords) {
        const promises = [];
        exportMaterials.forEach((material) => {
            if (material.getClassName() === "StandardMaterial") {
                promises.push(this._convertStandardMaterialAsync(material, mimeType, hasTextureCoords));
            }
            else if (material.getClassName().indexOf("PBR") !== -1) {
                promises.push(this._convertPBRMaterialAsync(material, mimeType, hasTextureCoords));
            }
            else {
                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Warn(`Unsupported material type: ${material.name}`);
            }
        });
        return Promise.all(promises).then(() => {
            /* do nothing */
        });
    }
    /**
     * Makes a copy of the glTF material without the texture parameters
     * @param originalMaterial original glTF material
     * @returns glTF material without texture parameters
     */
    _stripTexturesFromMaterial(originalMaterial) {
        const newMaterial = {};
        if (originalMaterial) {
            newMaterial.name = originalMaterial.name;
            newMaterial.doubleSided = originalMaterial.doubleSided;
            newMaterial.alphaMode = originalMaterial.alphaMode;
            newMaterial.alphaCutoff = originalMaterial.alphaCutoff;
            newMaterial.emissiveFactor = originalMaterial.emissiveFactor;
            const originalPBRMetallicRoughness = originalMaterial.pbrMetallicRoughness;
            if (originalPBRMetallicRoughness) {
                newMaterial.pbrMetallicRoughness = {};
                newMaterial.pbrMetallicRoughness.baseColorFactor = originalPBRMetallicRoughness.baseColorFactor;
                newMaterial.pbrMetallicRoughness.metallicFactor = originalPBRMetallicRoughness.metallicFactor;
                newMaterial.pbrMetallicRoughness.roughnessFactor = originalPBRMetallicRoughness.roughnessFactor;
            }
        }
        return newMaterial;
    }
    /**
     * Specifies if the material has any texture parameters present
     * @param material glTF Material
     * @returns boolean specifying if texture parameters are present
     */
    _hasTexturesPresent(material) {
        if (material.emissiveTexture || material.normalTexture || material.occlusionTexture) {
            return true;
        }
        const pbrMat = material.pbrMetallicRoughness;
        if (pbrMat) {
            if (pbrMat.baseColorTexture || pbrMat.metallicRoughnessTexture) {
                return true;
            }
        }
        if (material.extensions) {
            for (const extension in material.extensions) {
                const extensionObject = material.extensions[extension];
                if (extensionObject) {
                    return extensionObject.hasTextures?.();
                }
            }
        }
        return false;
    }
    _getTextureInfo(babylonTexture) {
        if (babylonTexture) {
            const textureUid = babylonTexture.uid;
            if (textureUid in this._textureMap) {
                return this._textureMap[textureUid];
            }
        }
        return null;
    }
    /**
     * Converts a Babylon StandardMaterial to a glTF Metallic Roughness Material
     * @param babylonStandardMaterial
     * @returns glTF Metallic Roughness Material representation
     */
    _convertToGLTFPBRMetallicRoughness(babylonStandardMaterial) {
        // Defines a cubic bezier curve where x is specular power and y is roughness
        const P0 = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector2(0, 1);
        const P1 = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector2(0, 0.1);
        const P2 = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector2(0, 0.1);
        const P3 = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector2(1300, 0.1);
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
            const t = Math.pow(specularPower / P3.x, 0.333333);
            return cubicBezierCurve(t, P0.y, P1.y, P2.y, P3.y);
        }
        const diffuse = babylonStandardMaterial.diffuseColor.toLinearSpace(babylonStandardMaterial.getScene().getEngine().useExactSrgbConversions).scale(0.5);
        const opacity = babylonStandardMaterial.alpha;
        const specularPower = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Scalar.Clamp(babylonStandardMaterial.specularPower, 0, _GLTFMaterialExporter._MaxSpecularPower);
        const roughness = solveForRoughness(specularPower);
        const glTFPbrMetallicRoughness = {
            baseColorFactor: [diffuse.r, diffuse.g, diffuse.b, opacity],
            metallicFactor: 0,
            roughnessFactor: roughness,
        };
        return glTFPbrMetallicRoughness;
    }
    /**
     * Computes the metallic factor
     * @param diffuse diffused value
     * @param specular specular value
     * @param oneMinusSpecularStrength one minus the specular strength
     * @returns metallic value
     */
    static _SolveMetallic(diffuse, specular, oneMinusSpecularStrength) {
        if (specular < this._DielectricSpecular.r) {
            this._DielectricSpecular;
            return 0;
        }
        const a = this._DielectricSpecular.r;
        const b = (diffuse * oneMinusSpecularStrength) / (1.0 - this._DielectricSpecular.r) + specular - 2.0 * this._DielectricSpecular.r;
        const c = this._DielectricSpecular.r - specular;
        const D = b * b - 4.0 * a * c;
        return babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Scalar.Clamp((-b + Math.sqrt(D)) / (2.0 * a), 0, 1);
    }
    /**
     * Sets the glTF alpha mode to a glTF material from the Babylon Material
     * @param glTFMaterial glTF material
     * @param babylonMaterial Babylon material
     */
    static _SetAlphaMode(glTFMaterial, babylonMaterial) {
        if (babylonMaterial.needAlphaBlending()) {
            glTFMaterial.alphaMode = "BLEND" /* MaterialAlphaMode.BLEND */;
        }
        else if (babylonMaterial.needAlphaTesting()) {
            glTFMaterial.alphaMode = "MASK" /* MaterialAlphaMode.MASK */;
            glTFMaterial.alphaCutoff = babylonMaterial.alphaCutOff;
        }
    }
    /**
     * Converts a Babylon Standard Material to a glTF Material
     * @param babylonStandardMaterial BJS Standard Material
     * @param mimeType mime type to use for the textures
     * @param hasTextureCoords specifies if texture coordinates are present on the submesh to determine if textures should be applied
     */
    _convertStandardMaterialAsync(babylonStandardMaterial, mimeType, hasTextureCoords) {
        const materialMap = this._exporter._materialMap;
        const materials = this._exporter._materials;
        const promises = [];
        const pbrMetallicRoughness = this._convertToGLTFPBRMetallicRoughness(babylonStandardMaterial);
        const material = { name: babylonStandardMaterial.name };
        if (babylonStandardMaterial.backFaceCulling != null && !babylonStandardMaterial.backFaceCulling) {
            if (!babylonStandardMaterial.twoSidedLighting) {
                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Warn(babylonStandardMaterial.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF.");
            }
            material.doubleSided = true;
        }
        if (hasTextureCoords) {
            if (babylonStandardMaterial.diffuseTexture) {
                promises.push(this._exportTextureAsync(babylonStandardMaterial.diffuseTexture, mimeType).then((textureInfo) => {
                    if (textureInfo) {
                        pbrMetallicRoughness.baseColorTexture = textureInfo;
                    }
                }));
            }
            const bumpTexture = babylonStandardMaterial.bumpTexture;
            if (bumpTexture) {
                promises.push(this._exportTextureAsync(bumpTexture, mimeType).then((textureInfo) => {
                    if (textureInfo) {
                        material.normalTexture = textureInfo;
                        if (bumpTexture.level !== 1) {
                            material.normalTexture.scale = bumpTexture.level;
                        }
                    }
                }));
            }
            if (babylonStandardMaterial.emissiveTexture) {
                material.emissiveFactor = [1.0, 1.0, 1.0];
                promises.push(this._exportTextureAsync(babylonStandardMaterial.emissiveTexture, mimeType).then((textureInfo) => {
                    if (textureInfo) {
                        material.emissiveTexture = textureInfo;
                    }
                }));
            }
            if (babylonStandardMaterial.ambientTexture) {
                promises.push(this._exportTextureAsync(babylonStandardMaterial.ambientTexture, mimeType).then((textureInfo) => {
                    if (textureInfo) {
                        const occlusionTexture = {
                            index: textureInfo.index,
                        };
                        material.occlusionTexture = occlusionTexture;
                    }
                }));
            }
        }
        if (babylonStandardMaterial.alpha < 1.0 || babylonStandardMaterial.opacityTexture) {
            if (babylonStandardMaterial.alphaMode === babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Constants.ALPHA_COMBINE) {
                material.alphaMode = "BLEND" /* MaterialAlphaMode.BLEND */;
            }
            else {
                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Warn(babylonStandardMaterial.name + ": glTF 2.0 does not support alpha mode: " + babylonStandardMaterial.alphaMode.toString());
            }
        }
        if (babylonStandardMaterial.emissiveColor && !_GLTFMaterialExporter._FuzzyEquals(babylonStandardMaterial.emissiveColor, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Color3.Black(), _GLTFMaterialExporter._Epsilon)) {
            material.emissiveFactor = babylonStandardMaterial.emissiveColor.asArray();
        }
        material.pbrMetallicRoughness = pbrMetallicRoughness;
        _GLTFMaterialExporter._SetAlphaMode(material, babylonStandardMaterial);
        materials.push(material);
        materialMap[babylonStandardMaterial.uniqueId] = materials.length - 1;
        return this._finishMaterial(promises, material, babylonStandardMaterial, mimeType);
    }
    _finishMaterial(promises, glTFMaterial, babylonMaterial, mimeType) {
        return Promise.all(promises).then(() => {
            const textures = this._exporter._extensionsPostExportMaterialAdditionalTextures("exportMaterial", glTFMaterial, babylonMaterial);
            let tasks = null;
            for (const texture of textures) {
                if (!tasks) {
                    tasks = [];
                }
                tasks.push(this._exportTextureAsync(texture, mimeType));
            }
            if (!tasks) {
                tasks = [Promise.resolve(null)];
            }
            return Promise.all(tasks).then(() => {
                const extensionWork = this._exporter._extensionsPostExportMaterialAsync("exportMaterial", glTFMaterial, babylonMaterial);
                if (!extensionWork) {
                    return glTFMaterial;
                }
                return extensionWork.then(() => glTFMaterial);
            });
        });
    }
    /**
     * Converts an image typed array buffer to a base64 image
     * @param buffer typed array buffer
     * @param width width of the image
     * @param height height of the image
     * @param mimeType mimetype of the image
     * @returns base64 image string
     */
    async _getImageDataAsync(buffer, width, height, mimeType) {
        const textureType = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Constants.TEXTURETYPE_UNSIGNED_INT;
        const hostingScene = this._exporter._babylonScene;
        const engine = hostingScene.getEngine();
        // Create a temporary texture with the texture buffer data
        const tempTexture = engine.createRawTexture(buffer, width, height, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Constants.TEXTUREFORMAT_RGBA, false, true, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Texture.NEAREST_SAMPLINGMODE, null, textureType);
        await babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TextureTools.ApplyPostProcess("pass", tempTexture, hostingScene, textureType, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Constants.TEXTURE_NEAREST_SAMPLINGMODE, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Constants.TEXTUREFORMAT_RGBA);
        const data = await engine._readTexturePixels(tempTexture, width, height);
        return (await babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.DumpTools.DumpDataAsync(width, height, data, mimeType, undefined, true, true));
    }
    /**
     * Generates a white texture based on the specified width and height
     * @param width width of the texture in pixels
     * @param height height of the texture in pixels
     * @param scene babylonjs scene
     * @returns white texture
     */
    _createWhiteTexture(width, height, scene) {
        const data = new Uint8Array(width * height * 4);
        for (let i = 0; i < data.length; i = i + 4) {
            data[i] = data[i + 1] = data[i + 2] = data[i + 3] = 0xff;
        }
        const rawTexture = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.RawTexture.CreateRGBATexture(data, width, height, scene);
        return rawTexture;
    }
    /**
     * Resizes the two source textures to the same dimensions.  If a texture is null, a default white texture is generated.  If both textures are null, returns null
     * @param texture1 first texture to resize
     * @param texture2 second texture to resize
     * @param scene babylonjs scene
     * @returns resized textures or null
     */
    _resizeTexturesToSameDimensions(texture1, texture2, scene) {
        const texture1Size = texture1 ? texture1.getSize() : { width: 0, height: 0 };
        const texture2Size = texture2 ? texture2.getSize() : { width: 0, height: 0 };
        let resizedTexture1;
        let resizedTexture2;
        if (texture1Size.width < texture2Size.width) {
            if (texture1 && texture1 instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Texture) {
                resizedTexture1 = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TextureTools.CreateResizedCopy(texture1, texture2Size.width, texture2Size.height, true);
            }
            else {
                resizedTexture1 = this._createWhiteTexture(texture2Size.width, texture2Size.height, scene);
            }
            resizedTexture2 = texture2;
        }
        else if (texture1Size.width > texture2Size.width) {
            if (texture2 && texture2 instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Texture) {
                resizedTexture2 = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TextureTools.CreateResizedCopy(texture2, texture1Size.width, texture1Size.height, true);
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
    }
    /**
     * Converts an array of pixels to a Float32Array
     * Throws an error if the pixel format is not supported
     * @param pixels - array buffer containing pixel values
     * @returns Float32 of pixels
     */
    _convertPixelArrayToFloat32(pixels) {
        if (pixels instanceof Uint8Array) {
            const length = pixels.length;
            const buffer = new Float32Array(pixels.length);
            for (let i = 0; i < length; ++i) {
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
     * Convert Specular Glossiness Textures to Metallic Roughness
     * See link below for info on the material conversions from PBR Metallic/Roughness and Specular/Glossiness
     * @link https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Archived/KHR_materials_pbrSpecularGlossiness/examples/convert-between-workflows-bjs/js/babylon.pbrUtilities.js
     * @param diffuseTexture texture used to store diffuse information
     * @param specularGlossinessTexture texture used to store specular and glossiness information
     * @param factors specular glossiness material factors
     * @param mimeType the mime type to use for the texture
     * @returns pbr metallic roughness interface or null
     */
    async _convertSpecularGlossinessTexturesToMetallicRoughnessAsync(diffuseTexture, specularGlossinessTexture, factors, mimeType) {
        const promises = new Array();
        if (!(diffuseTexture || specularGlossinessTexture)) {
            return Promise.reject("_ConvertSpecularGlosinessTexturesToMetallicRoughness: diffuse and specular glossiness textures are not defined!");
        }
        const scene = diffuseTexture ? diffuseTexture.getScene() : specularGlossinessTexture ? specularGlossinessTexture.getScene() : null;
        if (scene) {
            const resizedTextures = this._resizeTexturesToSameDimensions(diffuseTexture, specularGlossinessTexture, scene);
            const diffuseSize = resizedTextures.texture1?.getSize();
            let diffuseBuffer;
            let specularGlossinessBuffer;
            const width = diffuseSize.width;
            const height = diffuseSize.height;
            const diffusePixels = await resizedTextures.texture1.readPixels();
            const specularPixels = await resizedTextures.texture2.readPixels();
            if (diffusePixels) {
                diffuseBuffer = this._convertPixelArrayToFloat32(diffusePixels);
            }
            else {
                return Promise.reject("Failed to retrieve pixels from diffuse texture!");
            }
            if (specularPixels) {
                specularGlossinessBuffer = this._convertPixelArrayToFloat32(specularPixels);
            }
            else {
                return Promise.reject("Failed to retrieve pixels from specular glossiness texture!");
            }
            const byteLength = specularGlossinessBuffer.byteLength;
            const metallicRoughnessBuffer = new Uint8Array(byteLength);
            const baseColorBuffer = new Uint8Array(byteLength);
            const strideSize = 4;
            const maxBaseColor = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Color3.Black();
            let maxMetallic = 0;
            let maxRoughness = 0;
            for (let h = 0; h < height; ++h) {
                for (let w = 0; w < width; ++w) {
                    const offset = (width * h + w) * strideSize;
                    const diffuseColor = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Color3(diffuseBuffer[offset], diffuseBuffer[offset + 1], diffuseBuffer[offset + 2])
                        .toLinearSpace(scene.getEngine().useExactSrgbConversions)
                        .multiply(factors.diffuseColor);
                    const specularColor = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Color3(specularGlossinessBuffer[offset], specularGlossinessBuffer[offset + 1], specularGlossinessBuffer[offset + 2])
                        .toLinearSpace(scene.getEngine().useExactSrgbConversions)
                        .multiply(factors.specularColor);
                    const glossiness = specularGlossinessBuffer[offset + 3] * factors.glossiness;
                    const specularGlossiness = {
                        diffuseColor: diffuseColor,
                        specularColor: specularColor,
                        glossiness: glossiness,
                    };
                    const metallicRoughness = this._convertSpecularGlossinessToMetallicRoughness(specularGlossiness);
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
            // Retrieves the metallic roughness factors from the maximum texture values.
            const metallicRoughnessFactors = {
                baseColor: maxBaseColor,
                metallic: maxMetallic,
                roughness: maxRoughness,
            };
            let writeOutMetallicRoughnessTexture = false;
            let writeOutBaseColorTexture = false;
            for (let h = 0; h < height; ++h) {
                for (let w = 0; w < width; ++w) {
                    const destinationOffset = (width * h + w) * strideSize;
                    baseColorBuffer[destinationOffset] /= metallicRoughnessFactors.baseColor.r > _GLTFMaterialExporter._Epsilon ? metallicRoughnessFactors.baseColor.r : 1;
                    baseColorBuffer[destinationOffset + 1] /= metallicRoughnessFactors.baseColor.g > _GLTFMaterialExporter._Epsilon ? metallicRoughnessFactors.baseColor.g : 1;
                    baseColorBuffer[destinationOffset + 2] /= metallicRoughnessFactors.baseColor.b > _GLTFMaterialExporter._Epsilon ? metallicRoughnessFactors.baseColor.b : 1;
                    const linearBaseColorPixel = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Color3.FromInts(baseColorBuffer[destinationOffset], baseColorBuffer[destinationOffset + 1], baseColorBuffer[destinationOffset + 2]);
                    const sRGBBaseColorPixel = linearBaseColorPixel.toGammaSpace(scene.getEngine().useExactSrgbConversions);
                    baseColorBuffer[destinationOffset] = sRGBBaseColorPixel.r * 255;
                    baseColorBuffer[destinationOffset + 1] = sRGBBaseColorPixel.g * 255;
                    baseColorBuffer[destinationOffset + 2] = sRGBBaseColorPixel.b * 255;
                    if (!_GLTFMaterialExporter._FuzzyEquals(sRGBBaseColorPixel, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Color3.White(), _GLTFMaterialExporter._Epsilon)) {
                        writeOutBaseColorTexture = true;
                    }
                    metallicRoughnessBuffer[destinationOffset + 1] /=
                        metallicRoughnessFactors.roughness > _GLTFMaterialExporter._Epsilon ? metallicRoughnessFactors.roughness : 1;
                    metallicRoughnessBuffer[destinationOffset + 2] /= metallicRoughnessFactors.metallic > _GLTFMaterialExporter._Epsilon ? metallicRoughnessFactors.metallic : 1;
                    const metallicRoughnessPixel = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Color3.FromInts(255, metallicRoughnessBuffer[destinationOffset + 1], metallicRoughnessBuffer[destinationOffset + 2]);
                    if (!_GLTFMaterialExporter._FuzzyEquals(metallicRoughnessPixel, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Color3.White(), _GLTFMaterialExporter._Epsilon)) {
                        writeOutMetallicRoughnessTexture = true;
                    }
                }
            }
            if (writeOutMetallicRoughnessTexture) {
                promises.push(this._getImageDataAsync(metallicRoughnessBuffer, width, height, mimeType).then((data) => {
                    metallicRoughnessFactors.metallicRoughnessTextureData = data;
                }));
            }
            if (writeOutBaseColorTexture) {
                promises.push(this._getImageDataAsync(baseColorBuffer, width, height, mimeType).then((data) => {
                    metallicRoughnessFactors.baseColorTextureData = data;
                }));
            }
            return Promise.all(promises).then(() => {
                return metallicRoughnessFactors;
            });
        }
        else {
            return Promise.reject("_ConvertSpecularGlossinessTexturesToMetallicRoughness: Scene from textures is missing!");
        }
    }
    /**
     * Converts specular glossiness material properties to metallic roughness
     * @param specularGlossiness interface with specular glossiness material properties
     * @returns interface with metallic roughness material properties
     */
    _convertSpecularGlossinessToMetallicRoughness(specularGlossiness) {
        const diffusePerceivedBrightness = this._getPerceivedBrightness(specularGlossiness.diffuseColor);
        const specularPerceivedBrightness = this._getPerceivedBrightness(specularGlossiness.specularColor);
        const oneMinusSpecularStrength = 1 - this._getMaxComponent(specularGlossiness.specularColor);
        const metallic = _GLTFMaterialExporter._SolveMetallic(diffusePerceivedBrightness, specularPerceivedBrightness, oneMinusSpecularStrength);
        const baseColorFromDiffuse = specularGlossiness.diffuseColor.scale(oneMinusSpecularStrength / (1.0 - _GLTFMaterialExporter._DielectricSpecular.r) / Math.max(1 - metallic, _GLTFMaterialExporter._Epsilon));
        const baseColorFromSpecular = specularGlossiness.specularColor
            .subtract(_GLTFMaterialExporter._DielectricSpecular.scale(1 - metallic))
            .scale(1 / Math.max(metallic, _GLTFMaterialExporter._Epsilon));
        let baseColor = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Color3.Lerp(baseColorFromDiffuse, baseColorFromSpecular, metallic * metallic);
        baseColor = baseColor.clampToRef(0, 1, baseColor);
        const metallicRoughness = {
            baseColor: baseColor,
            metallic: metallic,
            roughness: 1 - specularGlossiness.glossiness,
        };
        return metallicRoughness;
    }
    /**
     * Calculates the surface reflectance, independent of lighting conditions
     * @param color Color source to calculate brightness from
     * @returns number representing the perceived brightness, or zero if color is undefined
     */
    _getPerceivedBrightness(color) {
        if (color) {
            return Math.sqrt(0.299 * color.r * color.r + 0.587 * color.g * color.g + 0.114 * color.b * color.b);
        }
        return 0;
    }
    /**
     * Returns the maximum color component value
     * @param color
     * @returns maximum color component value, or zero if color is null or undefined
     */
    _getMaxComponent(color) {
        if (color) {
            return Math.max(color.r, Math.max(color.g, color.b));
        }
        return 0;
    }
    /**
     * Convert a PBRMaterial (Metallic/Roughness) to Metallic Roughness factors
     * @param babylonPBRMaterial BJS PBR Metallic Roughness Material
     * @param mimeType mime type to use for the textures
     * @param glTFPbrMetallicRoughness glTF PBR Metallic Roughness interface
     * @param hasTextureCoords specifies if texture coordinates are present on the submesh to determine if textures should be applied
     * @returns glTF PBR Metallic Roughness factors
     */
    _convertMetalRoughFactorsToMetallicRoughnessAsync(babylonPBRMaterial, mimeType, glTFPbrMetallicRoughness, hasTextureCoords) {
        const promises = [];
        const baseColor = babylonPBRMaterial._albedoColor;
        const metallic = babylonPBRMaterial._metallic;
        const roughness = babylonPBRMaterial._roughness;
        const metallicRoughness = {
            baseColor: baseColor,
            metallic: metallic,
            roughness: roughness,
        };
        if (hasTextureCoords) {
            const albedoTexture = babylonPBRMaterial._albedoTexture;
            if (albedoTexture) {
                promises.push(this._exportTextureAsync(babylonPBRMaterial._albedoTexture, mimeType).then((glTFTexture) => {
                    if (glTFTexture) {
                        glTFPbrMetallicRoughness.baseColorTexture = glTFTexture;
                    }
                }));
            }
            const metallicTexture = babylonPBRMaterial._metallicTexture;
            if (metallicTexture) {
                promises.push(this._exportTextureAsync(metallicTexture, mimeType).then((glTFTexture) => {
                    if (glTFTexture) {
                        glTFPbrMetallicRoughness.metallicRoughnessTexture = glTFTexture;
                    }
                }));
            }
        }
        return Promise.all(promises).then(() => {
            return metallicRoughness;
        });
    }
    _getTextureSampler(texture) {
        const sampler = {};
        if (!texture || !(texture instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Texture)) {
            return sampler;
        }
        const wrapS = this._getGLTFTextureWrapMode(texture.wrapU);
        if (wrapS !== 10497 /* TextureWrapMode.REPEAT */) {
            sampler.wrapS = wrapS;
        }
        const wrapT = this._getGLTFTextureWrapMode(texture.wrapV);
        if (wrapT !== 10497 /* TextureWrapMode.REPEAT */) {
            sampler.wrapT = wrapT;
        }
        switch (texture.samplingMode) {
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Texture.LINEAR_LINEAR: {
                sampler.magFilter = 9729 /* TextureMagFilter.LINEAR */;
                sampler.minFilter = 9729 /* TextureMinFilter.LINEAR */;
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Texture.LINEAR_NEAREST: {
                sampler.magFilter = 9729 /* TextureMagFilter.LINEAR */;
                sampler.minFilter = 9728 /* TextureMinFilter.NEAREST */;
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Texture.NEAREST_LINEAR: {
                sampler.magFilter = 9728 /* TextureMagFilter.NEAREST */;
                sampler.minFilter = 9729 /* TextureMinFilter.LINEAR */;
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Texture.NEAREST_LINEAR_MIPLINEAR: {
                sampler.magFilter = 9728 /* TextureMagFilter.NEAREST */;
                sampler.minFilter = 9987 /* TextureMinFilter.LINEAR_MIPMAP_LINEAR */;
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Texture.NEAREST_NEAREST: {
                sampler.magFilter = 9728 /* TextureMagFilter.NEAREST */;
                sampler.minFilter = 9728 /* TextureMinFilter.NEAREST */;
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Texture.NEAREST_LINEAR_MIPNEAREST: {
                sampler.magFilter = 9728 /* TextureMagFilter.NEAREST */;
                sampler.minFilter = 9985 /* TextureMinFilter.LINEAR_MIPMAP_NEAREST */;
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Texture.LINEAR_NEAREST_MIPNEAREST: {
                sampler.magFilter = 9729 /* TextureMagFilter.LINEAR */;
                sampler.minFilter = 9984 /* TextureMinFilter.NEAREST_MIPMAP_NEAREST */;
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Texture.LINEAR_NEAREST_MIPLINEAR: {
                sampler.magFilter = 9729 /* TextureMagFilter.LINEAR */;
                sampler.minFilter = 9986 /* TextureMinFilter.NEAREST_MIPMAP_LINEAR */;
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Texture.NEAREST_NEAREST_MIPLINEAR: {
                sampler.magFilter = 9728 /* TextureMagFilter.NEAREST */;
                sampler.minFilter = 9986 /* TextureMinFilter.NEAREST_MIPMAP_LINEAR */;
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Texture.LINEAR_LINEAR_MIPLINEAR: {
                sampler.magFilter = 9729 /* TextureMagFilter.LINEAR */;
                sampler.minFilter = 9987 /* TextureMinFilter.LINEAR_MIPMAP_LINEAR */;
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Texture.LINEAR_LINEAR_MIPNEAREST: {
                sampler.magFilter = 9729 /* TextureMagFilter.LINEAR */;
                sampler.minFilter = 9985 /* TextureMinFilter.LINEAR_MIPMAP_NEAREST */;
                break;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Texture.NEAREST_NEAREST_MIPNEAREST: {
                sampler.magFilter = 9728 /* TextureMagFilter.NEAREST */;
                sampler.minFilter = 9984 /* TextureMinFilter.NEAREST_MIPMAP_NEAREST */;
                break;
            }
        }
        return sampler;
    }
    _getGLTFTextureWrapMode(wrapMode) {
        switch (wrapMode) {
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Texture.WRAP_ADDRESSMODE: {
                return 10497 /* TextureWrapMode.REPEAT */;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Texture.CLAMP_ADDRESSMODE: {
                return 33071 /* TextureWrapMode.CLAMP_TO_EDGE */;
            }
            case babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Texture.MIRROR_ADDRESSMODE: {
                return 33648 /* TextureWrapMode.MIRRORED_REPEAT */;
            }
            default: {
                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Error(`Unsupported Texture Wrap Mode ${wrapMode}!`);
                return 10497 /* TextureWrapMode.REPEAT */;
            }
        }
    }
    /**
     * Convert a PBRMaterial (Specular/Glossiness) to Metallic Roughness factors
     * @param babylonPBRMaterial BJS PBR Metallic Roughness Material
     * @param mimeType mime type to use for the textures
     * @param glTFPbrMetallicRoughness glTF PBR Metallic Roughness interface
     * @param hasTextureCoords specifies if texture coordinates are present on the submesh to determine if textures should be applied
     * @returns glTF PBR Metallic Roughness factors
     */
    _convertSpecGlossFactorsToMetallicRoughnessAsync(babylonPBRMaterial, mimeType, pbrMetallicRoughness, hasTextureCoords) {
        return Promise.resolve().then(() => {
            const specGloss = {
                diffuseColor: babylonPBRMaterial._albedoColor,
                specularColor: babylonPBRMaterial._reflectivityColor,
                glossiness: babylonPBRMaterial._microSurface,
            };
            const albedoTexture = babylonPBRMaterial._albedoTexture;
            const reflectivityTexture = babylonPBRMaterial._reflectivityTexture;
            const useMicrosurfaceFromReflectivityMapAlpha = babylonPBRMaterial._useMicroSurfaceFromReflectivityMapAlpha;
            if (reflectivityTexture && !useMicrosurfaceFromReflectivityMapAlpha) {
                return Promise.reject("_ConvertPBRMaterial: Glossiness values not included in the reflectivity texture are currently not supported");
            }
            if ((albedoTexture || reflectivityTexture) && hasTextureCoords) {
                const samplerIndex = this._exportTextureSampler(albedoTexture || reflectivityTexture);
                return this._convertSpecularGlossinessTexturesToMetallicRoughnessAsync(albedoTexture, reflectivityTexture, specGloss, mimeType).then((metallicRoughnessFactors) => {
                    const textures = this._exporter._textures;
                    if (metallicRoughnessFactors.baseColorTextureData) {
                        const imageIndex = this._exportImage(`baseColor${textures.length}`, mimeType, metallicRoughnessFactors.baseColorTextureData);
                        pbrMetallicRoughness.baseColorTexture = this._exportTextureInfo(imageIndex, samplerIndex, albedoTexture?.coordinatesIndex);
                    }
                    if (metallicRoughnessFactors.metallicRoughnessTextureData) {
                        const imageIndex = this._exportImage(`metallicRoughness${textures.length}`, mimeType, metallicRoughnessFactors.metallicRoughnessTextureData);
                        pbrMetallicRoughness.metallicRoughnessTexture = this._exportTextureInfo(imageIndex, samplerIndex, reflectivityTexture?.coordinatesIndex);
                    }
                    return metallicRoughnessFactors;
                });
            }
            else {
                return this._convertSpecularGlossinessToMetallicRoughness(specGloss);
            }
        });
    }
    /**
     * Converts a Babylon PBR Base Material to a glTF Material
     * @param babylonPBRMaterial BJS PBR Base Material
     * @param mimeType mime type to use for the textures
     * @param hasTextureCoords specifies if texture coordinates are present on the submesh to determine if textures should be applied
     */
    _convertPBRMaterialAsync(babylonPBRMaterial, mimeType, hasTextureCoords) {
        const glTFPbrMetallicRoughness = {};
        const glTFMaterial = {
            name: babylonPBRMaterial.name,
        };
        const useMetallicRoughness = babylonPBRMaterial.isMetallicWorkflow();
        if (useMetallicRoughness) {
            const albedoColor = babylonPBRMaterial._albedoColor;
            const alpha = babylonPBRMaterial.alpha;
            if (albedoColor) {
                glTFPbrMetallicRoughness.baseColorFactor = [albedoColor.r, albedoColor.g, albedoColor.b, alpha];
            }
            return this._convertMetalRoughFactorsToMetallicRoughnessAsync(babylonPBRMaterial, mimeType, glTFPbrMetallicRoughness, hasTextureCoords).then((metallicRoughness) => {
                return this._setMetallicRoughnessPbrMaterial(metallicRoughness, babylonPBRMaterial, glTFMaterial, glTFPbrMetallicRoughness, mimeType, hasTextureCoords);
            });
        }
        else {
            return this._convertSpecGlossFactorsToMetallicRoughnessAsync(babylonPBRMaterial, mimeType, glTFPbrMetallicRoughness, hasTextureCoords).then((metallicRoughness) => {
                return this._setMetallicRoughnessPbrMaterial(metallicRoughness, babylonPBRMaterial, glTFMaterial, glTFPbrMetallicRoughness, mimeType, hasTextureCoords);
            });
        }
    }
    _setMetallicRoughnessPbrMaterial(metallicRoughness, babylonPBRMaterial, glTFMaterial, glTFPbrMetallicRoughness, mimeType, hasTextureCoords) {
        const materialMap = this._exporter._materialMap;
        const materials = this._exporter._materials;
        const promises = [];
        if (metallicRoughness) {
            _GLTFMaterialExporter._SetAlphaMode(glTFMaterial, babylonPBRMaterial);
            if (!(_GLTFMaterialExporter._FuzzyEquals(metallicRoughness.baseColor, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Color3.White(), _GLTFMaterialExporter._Epsilon) &&
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
                    babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Warn(babylonPBRMaterial.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF.");
                }
                glTFMaterial.doubleSided = true;
            }
            if (hasTextureCoords) {
                const bumpTexture = babylonPBRMaterial._bumpTexture;
                if (bumpTexture) {
                    const promise = this._exportTextureAsync(bumpTexture, mimeType).then((glTFTexture) => {
                        if (glTFTexture) {
                            glTFMaterial.normalTexture = glTFTexture;
                            if (bumpTexture.level !== 1) {
                                glTFMaterial.normalTexture.scale = bumpTexture.level;
                            }
                        }
                    });
                    promises.push(promise);
                }
                const ambientTexture = babylonPBRMaterial._ambientTexture;
                if (ambientTexture) {
                    const promise = this._exportTextureAsync(ambientTexture, mimeType).then((glTFTexture) => {
                        if (glTFTexture) {
                            const occlusionTexture = {
                                index: glTFTexture.index,
                                texCoord: glTFTexture.texCoord,
                                extensions: glTFTexture.extensions,
                            };
                            glTFMaterial.occlusionTexture = occlusionTexture;
                            const ambientTextureStrength = babylonPBRMaterial._ambientTextureStrength;
                            if (ambientTextureStrength) {
                                occlusionTexture.strength = ambientTextureStrength;
                            }
                        }
                    });
                    promises.push(promise);
                }
                const emissiveTexture = babylonPBRMaterial._emissiveTexture;
                if (emissiveTexture) {
                    const promise = this._exportTextureAsync(emissiveTexture, mimeType).then((glTFTexture) => {
                        if (glTFTexture) {
                            glTFMaterial.emissiveTexture = glTFTexture;
                        }
                    });
                    promises.push(promise);
                }
            }
            const emissiveColor = babylonPBRMaterial._emissiveColor;
            if (!_GLTFMaterialExporter._FuzzyEquals(emissiveColor, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Color3.Black(), _GLTFMaterialExporter._Epsilon)) {
                glTFMaterial.emissiveFactor = emissiveColor.asArray();
            }
            glTFMaterial.pbrMetallicRoughness = glTFPbrMetallicRoughness;
            materials.push(glTFMaterial);
            materialMap[babylonPBRMaterial.uniqueId] = materials.length - 1;
        }
        return this._finishMaterial(promises, glTFMaterial, babylonPBRMaterial, mimeType);
    }
    _getPixelsFromTexture(babylonTexture) {
        const pixels = babylonTexture.textureType === babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Constants.TEXTURETYPE_UNSIGNED_INT
            ? babylonTexture.readPixels()
            : babylonTexture.readPixels();
        return pixels;
    }
    /**
     * Extracts a texture from a Babylon texture into file data and glTF data
     * @param babylonTexture Babylon texture to extract
     * @param mimeType Mime Type of the babylonTexture
     * @returns glTF texture info, or null if the texture format is not supported
     */
    _exportTextureAsync(babylonTexture, mimeType) {
        const extensionPromise = this._exporter._extensionsPreExportTextureAsync("exporter", babylonTexture, mimeType);
        if (!extensionPromise) {
            return this._exportTextureInfoAsync(babylonTexture, mimeType);
        }
        return extensionPromise.then((texture) => {
            if (!texture) {
                return this._exportTextureInfoAsync(babylonTexture, mimeType);
            }
            return this._exportTextureInfoAsync(texture, mimeType);
        });
    }
    async _exportTextureInfoAsync(babylonTexture, mimeType) {
        const textureUid = babylonTexture.uid;
        if (!(textureUid in this._textureMap)) {
            const pixels = await this._getPixelsFromTexture(babylonTexture);
            if (!pixels) {
                return null;
            }
            const samplerIndex = this._exportTextureSampler(babylonTexture);
            // Preserve texture mime type if defined
            const textureMimeType = babylonTexture.mimeType;
            if (textureMimeType) {
                switch (textureMimeType) {
                    case "image/jpeg":
                    case "image/png":
                    case "image/webp":
                        mimeType = textureMimeType;
                        break;
                    default:
                        babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Warn(`Unsupported media type: ${textureMimeType}`);
                        break;
                }
            }
            const internalTextureToImage = this._internalTextureToImage;
            const internalTextureUniqueId = babylonTexture.getInternalTexture().uniqueId;
            internalTextureToImage[internalTextureUniqueId] ||= {};
            let imageIndexPromise = internalTextureToImage[internalTextureUniqueId][mimeType];
            if (imageIndexPromise === undefined) {
                const size = babylonTexture.getSize();
                imageIndexPromise = (async () => {
                    const data = await this._getImageDataAsync(pixels, size.width, size.height, mimeType);
                    return this._exportImage(babylonTexture.name, mimeType, data);
                })();
                internalTextureToImage[internalTextureUniqueId][mimeType] = imageIndexPromise;
            }
            const textureInfo = this._exportTextureInfo(await imageIndexPromise, samplerIndex, babylonTexture.coordinatesIndex);
            this._textureMap[textureUid] = textureInfo;
            this._exporter._extensionsPostExportTextures("exporter", this._textureMap[textureUid], babylonTexture);
        }
        return this._textureMap[textureUid];
    }
    _exportImage(name, mimeType, data) {
        const imageData = this._exporter._imageData;
        const baseName = name.replace(/\.\/|\/|\.\\|\\/g, "_");
        const extension = getFileExtensionFromMimeType(mimeType);
        let fileName = baseName + extension;
        if (fileName in imageData) {
            fileName = `${baseName}_${babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.RandomId()}${extension}`;
        }
        imageData[fileName] = {
            data: data,
            mimeType: mimeType,
        };
        const images = this._exporter._images;
        images.push({
            name: name,
            uri: fileName,
        });
        return images.length - 1;
    }
    _exportTextureInfo(imageIndex, samplerIndex, coordinatesIndex) {
        const textures = this._exporter._textures;
        let textureIndex = textures.findIndex((t) => t.sampler == samplerIndex && t.source === imageIndex);
        if (textureIndex === -1) {
            textureIndex = textures.length;
            textures.push({
                source: imageIndex,
                sampler: samplerIndex,
            });
        }
        const textureInfo = { index: textureIndex };
        if (coordinatesIndex) {
            textureInfo.texCoord = coordinatesIndex;
        }
        return textureInfo;
    }
    _exportTextureSampler(texture) {
        const sampler = this._getTextureSampler(texture);
        // if a pre-existing sampler with identical parameters exists, then reuse the previous sampler
        const samplers = this._exporter._samplers;
        const samplerIndex = samplers.findIndex((s) => s.minFilter === sampler.minFilter && s.magFilter === sampler.magFilter && s.wrapS === sampler.wrapS && s.wrapT === sampler.wrapT);
        if (samplerIndex !== -1) {
            return samplerIndex;
        }
        samplers.push(sampler);
        return samplers.length - 1;
    }
}
/**
 * Represents the dielectric specular values for R, G and B
 */
_GLTFMaterialExporter._DielectricSpecular = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Color3(0.04, 0.04, 0.04);
/**
 * Allows the maximum specular power to be defined for material calculations
 */
_GLTFMaterialExporter._MaxSpecularPower = 1024;
/**
 * Numeric tolerance value
 */
_GLTFMaterialExporter._Epsilon = 1e-6;


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
/* harmony import */ var _glTFExporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glTFExporter */ "../../../dev/serializers/src/glTF/2.0/glTFExporter.ts");

/**
 * Class for generating glTF data from a Babylon scene.
 */
class GLTF2Export {
    /**
     * Exports the geometry of the scene to .gltf file format asynchronously
     * @param scene Babylon scene with scene hierarchy information
     * @param filePrefix File prefix to use when generating the glTF file
     * @param options Exporter options
     * @returns Returns an object with a .gltf file and associates texture names
     * as keys and their data and paths as values
     */
    static GLTFAsync(scene, filePrefix, options) {
        return scene.whenReadyAsync().then(() => {
            const glTFPrefix = filePrefix.replace(/\.[^/.]+$/, "");
            const gltfGenerator = new _glTFExporter__WEBPACK_IMPORTED_MODULE_0__._Exporter(scene, options);
            return gltfGenerator._generateGLTFAsync(glTFPrefix);
        });
    }
    static _PreExportAsync(scene, options) {
        return Promise.resolve().then(() => {
            if (options && options.exportWithoutWaitingForScene) {
                return Promise.resolve();
            }
            else {
                return scene.whenReadyAsync();
            }
        });
    }
    static _PostExportAsync(scene, glTFData, options) {
        return Promise.resolve().then(() => {
            if (options && options.exportWithoutWaitingForScene) {
                return glTFData;
            }
            else {
                return glTFData;
            }
        });
    }
    /**
     * Exports the geometry of the scene to .glb file format asychronously
     * @param scene Babylon scene with scene hierarchy information
     * @param filePrefix File prefix to use when generating glb file
     * @param options Exporter options
     * @returns Returns an object with a .glb filename as key and data as value
     */
    static GLBAsync(scene, filePrefix, options) {
        return this._PreExportAsync(scene, options).then(() => {
            const glTFPrefix = filePrefix.replace(/\.[^/.]+$/, "");
            const gltfGenerator = new _glTFExporter__WEBPACK_IMPORTED_MODULE_0__._Exporter(scene, options);
            return gltfGenerator._generateGLBAsync(glTFPrefix).then((glTFData) => {
                return this._PostExportAsync(scene, glTFData, options);
            });
        });
    }
}


/***/ }),

/***/ "../../../dev/serializers/src/glTF/2.0/glTFUtilities.ts":
/*!**************************************************************!*\
  !*** ../../../dev/serializers/src/glTF/2.0/glTFUtilities.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _GLTFUtilities: () => (/* binding */ _GLTFUtilities)
/* harmony export */ });
/* harmony import */ var babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Maths/math.vector */ "babylonjs/Maths/math.vector");
/* harmony import */ var babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @internal
 */
class _GLTFUtilities {
    /**
     * Creates a buffer view based on the supplied arguments
     * @param bufferIndex index value of the specified buffer
     * @param byteOffset byte offset value
     * @param byteLength byte length of the bufferView
     * @param byteStride byte distance between conequential elements
     * @param name name of the buffer view
     * @returns bufferView for glTF
     */
    static _CreateBufferView(bufferIndex, byteOffset, byteLength, byteStride, name) {
        const bufferview = { buffer: bufferIndex, byteLength: byteLength };
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
    }
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
    static _CreateAccessor(bufferviewIndex, name, type, componentType, count, byteOffset, min, max) {
        const accessor = { name: name, bufferView: bufferviewIndex, componentType: componentType, count: count, type: type };
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
    }
    /**
     * Calculates the minimum and maximum values of an array of position floats
     * @param positions Positions array of a mesh
     * @param vertexStart Starting vertex offset to calculate min and max values
     * @param vertexCount Number of vertices to check for min and max values
     * @returns min number array and max number array
     */
    static _CalculateMinMaxPositions(positions, vertexStart, vertexCount) {
        const min = [Infinity, Infinity, Infinity];
        const max = [-Infinity, -Infinity, -Infinity];
        const positionStrideSize = 3;
        let indexOffset;
        let position;
        let vector;
        if (vertexCount) {
            for (let i = vertexStart, length = vertexStart + vertexCount; i < length; ++i) {
                indexOffset = positionStrideSize * i;
                position = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArray(positions, indexOffset);
                vector = position.asArray();
                for (let j = 0; j < positionStrideSize; ++j) {
                    const num = vector[j];
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
        return { min, max };
    }
    static _NormalizeTangentFromRef(tangent) {
        const length = Math.sqrt(tangent.x * tangent.x + tangent.y * tangent.y + tangent.z * tangent.z);
        if (length > 0) {
            tangent.x /= length;
            tangent.y /= length;
            tangent.z /= length;
        }
    }
    static _GetDataAccessorElementCount(accessorType) {
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
}


/***/ }),

/***/ "../../../dev/serializers/src/glTF/2.0/index.ts":
/*!******************************************************!*\
  !*** ../../../dev/serializers/src/glTF/2.0/index.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EXT_mesh_gpu_instancing: () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_7__.EXT_mesh_gpu_instancing),
/* harmony export */   GLTF2Export: () => (/* reexport safe */ _glTFSerializer__WEBPACK_IMPORTED_MODULE_5__.GLTF2Export),
/* harmony export */   GLTFData: () => (/* reexport safe */ _glTFData__WEBPACK_IMPORTED_MODULE_1__.GLTFData),
/* harmony export */   KHR_lights_punctual: () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_7__.KHR_lights_punctual),
/* harmony export */   KHR_materials_anisotropy: () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_7__.KHR_materials_anisotropy),
/* harmony export */   KHR_materials_clearcoat: () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_7__.KHR_materials_clearcoat),
/* harmony export */   KHR_materials_emissive_strength: () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_7__.KHR_materials_emissive_strength),
/* harmony export */   KHR_materials_ior: () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_7__.KHR_materials_ior),
/* harmony export */   KHR_materials_iridescence: () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_7__.KHR_materials_iridescence),
/* harmony export */   KHR_materials_sheen: () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_7__.KHR_materials_sheen),
/* harmony export */   KHR_materials_specular: () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_7__.KHR_materials_specular),
/* harmony export */   KHR_materials_transmission: () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_7__.KHR_materials_transmission),
/* harmony export */   KHR_materials_unlit: () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_7__.KHR_materials_unlit),
/* harmony export */   KHR_materials_volume: () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_7__.KHR_materials_volume),
/* harmony export */   KHR_texture_transform: () => (/* reexport safe */ _Extensions_index__WEBPACK_IMPORTED_MODULE_7__.KHR_texture_transform),
/* harmony export */   _BinaryWriter: () => (/* reexport safe */ _glTFExporter__WEBPACK_IMPORTED_MODULE_2__._BinaryWriter),
/* harmony export */   _Exporter: () => (/* reexport safe */ _glTFExporter__WEBPACK_IMPORTED_MODULE_2__._Exporter),
/* harmony export */   _GLTFAnimation: () => (/* reexport safe */ _glTFAnimation__WEBPACK_IMPORTED_MODULE_0__._GLTFAnimation),
/* harmony export */   _GLTFMaterialExporter: () => (/* reexport safe */ _glTFMaterialExporter__WEBPACK_IMPORTED_MODULE_4__._GLTFMaterialExporter),
/* harmony export */   _GLTFUtilities: () => (/* reexport safe */ _glTFUtilities__WEBPACK_IMPORTED_MODULE_6__._GLTFUtilities),
/* harmony export */   __IGLTFExporterExtensionV2: () => (/* reexport safe */ _glTFExporterExtension__WEBPACK_IMPORTED_MODULE_3__.__IGLTFExporterExtensionV2)
/* harmony export */ });
/* harmony import */ var _glTFAnimation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glTFAnimation */ "../../../dev/serializers/src/glTF/2.0/glTFAnimation.ts");
/* harmony import */ var _glTFData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./glTFData */ "../../../dev/serializers/src/glTF/2.0/glTFData.ts");
/* harmony import */ var _glTFExporter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./glTFExporter */ "../../../dev/serializers/src/glTF/2.0/glTFExporter.ts");
/* harmony import */ var _glTFExporterExtension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./glTFExporterExtension */ "../../../dev/serializers/src/glTF/2.0/glTFExporterExtension.ts");
/* harmony import */ var _glTFMaterialExporter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./glTFMaterialExporter */ "../../../dev/serializers/src/glTF/2.0/glTFMaterialExporter.ts");
/* harmony import */ var _glTFSerializer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./glTFSerializer */ "../../../dev/serializers/src/glTF/2.0/glTFSerializer.ts");
/* harmony import */ var _glTFUtilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./glTFUtilities */ "../../../dev/serializers/src/glTF/2.0/glTFUtilities.ts");
/* harmony import */ var _Extensions_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Extensions/index */ "../../../dev/serializers/src/glTF/2.0/Extensions/index.ts");
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
/* harmony export */   KHR_lights_punctual: () => (/* reexport safe */ _2_0_index__WEBPACK_IMPORTED_MODULE_1__.KHR_lights_punctual),
/* harmony export */   KHR_materials_anisotropy: () => (/* reexport safe */ _2_0_index__WEBPACK_IMPORTED_MODULE_1__.KHR_materials_anisotropy),
/* harmony export */   KHR_materials_clearcoat: () => (/* reexport safe */ _2_0_index__WEBPACK_IMPORTED_MODULE_1__.KHR_materials_clearcoat),
/* harmony export */   KHR_materials_emissive_strength: () => (/* reexport safe */ _2_0_index__WEBPACK_IMPORTED_MODULE_1__.KHR_materials_emissive_strength),
/* harmony export */   KHR_materials_ior: () => (/* reexport safe */ _2_0_index__WEBPACK_IMPORTED_MODULE_1__.KHR_materials_ior),
/* harmony export */   KHR_materials_iridescence: () => (/* reexport safe */ _2_0_index__WEBPACK_IMPORTED_MODULE_1__.KHR_materials_iridescence),
/* harmony export */   KHR_materials_sheen: () => (/* reexport safe */ _2_0_index__WEBPACK_IMPORTED_MODULE_1__.KHR_materials_sheen),
/* harmony export */   KHR_materials_specular: () => (/* reexport safe */ _2_0_index__WEBPACK_IMPORTED_MODULE_1__.KHR_materials_specular),
/* harmony export */   KHR_materials_transmission: () => (/* reexport safe */ _2_0_index__WEBPACK_IMPORTED_MODULE_1__.KHR_materials_transmission),
/* harmony export */   KHR_materials_unlit: () => (/* reexport safe */ _2_0_index__WEBPACK_IMPORTED_MODULE_1__.KHR_materials_unlit),
/* harmony export */   KHR_materials_volume: () => (/* reexport safe */ _2_0_index__WEBPACK_IMPORTED_MODULE_1__.KHR_materials_volume),
/* harmony export */   KHR_texture_transform: () => (/* reexport safe */ _2_0_index__WEBPACK_IMPORTED_MODULE_1__.KHR_texture_transform),
/* harmony export */   _BinaryWriter: () => (/* reexport safe */ _2_0_index__WEBPACK_IMPORTED_MODULE_1__._BinaryWriter),
/* harmony export */   _Exporter: () => (/* reexport safe */ _2_0_index__WEBPACK_IMPORTED_MODULE_1__._Exporter),
/* harmony export */   _GLTFAnimation: () => (/* reexport safe */ _2_0_index__WEBPACK_IMPORTED_MODULE_1__._GLTFAnimation),
/* harmony export */   _GLTFMaterialExporter: () => (/* reexport safe */ _2_0_index__WEBPACK_IMPORTED_MODULE_1__._GLTFMaterialExporter),
/* harmony export */   _GLTFUtilities: () => (/* reexport safe */ _2_0_index__WEBPACK_IMPORTED_MODULE_1__._GLTFUtilities),
/* harmony export */   __IGLTFExporterExtension: () => (/* reexport safe */ _glTFFileExporter__WEBPACK_IMPORTED_MODULE_0__.__IGLTFExporterExtension),
/* harmony export */   __IGLTFExporterExtensionV2: () => (/* reexport safe */ _2_0_index__WEBPACK_IMPORTED_MODULE_1__.__IGLTFExporterExtensionV2)
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
/* harmony export */   KHR_lights_punctual: () => (/* reexport safe */ _glTF_index__WEBPACK_IMPORTED_MODULE_1__.KHR_lights_punctual),
/* harmony export */   KHR_materials_anisotropy: () => (/* reexport safe */ _glTF_index__WEBPACK_IMPORTED_MODULE_1__.KHR_materials_anisotropy),
/* harmony export */   KHR_materials_clearcoat: () => (/* reexport safe */ _glTF_index__WEBPACK_IMPORTED_MODULE_1__.KHR_materials_clearcoat),
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
/* harmony export */   _BinaryWriter: () => (/* reexport safe */ _glTF_index__WEBPACK_IMPORTED_MODULE_1__._BinaryWriter),
/* harmony export */   _Exporter: () => (/* reexport safe */ _glTF_index__WEBPACK_IMPORTED_MODULE_1__._Exporter),
/* harmony export */   _GLTFAnimation: () => (/* reexport safe */ _glTF_index__WEBPACK_IMPORTED_MODULE_1__._GLTFAnimation),
/* harmony export */   _GLTFMaterialExporter: () => (/* reexport safe */ _glTF_index__WEBPACK_IMPORTED_MODULE_1__._GLTFMaterialExporter),
/* harmony export */   _GLTFUtilities: () => (/* reexport safe */ _glTF_index__WEBPACK_IMPORTED_MODULE_1__._GLTFUtilities),
/* harmony export */   __IGLTFExporterExtension: () => (/* reexport safe */ _glTF_index__WEBPACK_IMPORTED_MODULE_1__.__IGLTFExporterExtension),
/* harmony export */   __IGLTFExporterExtensionV2: () => (/* reexport safe */ _glTF_index__WEBPACK_IMPORTED_MODULE_1__.__IGLTFExporterExtensionV2)
/* harmony export */ });
/* harmony import */ var _OBJ_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OBJ/index */ "../../../dev/serializers/src/OBJ/index.ts");
/* harmony import */ var _glTF_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./glTF/index */ "../../../dev/serializers/src/glTF/index.ts");
/* harmony import */ var _stl_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stl/index */ "../../../dev/serializers/src/stl/index.ts");
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
/* harmony import */ var babylonjs_Meshes_mesh__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Maths/math.vector */ "babylonjs/Maths/math.vector");
/* harmony import */ var babylonjs_Meshes_mesh__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Meshes_mesh__WEBPACK_IMPORTED_MODULE_0__);




/**
 * Class for generating STL data from a Babylon scene.
 */
class STLExport {
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
    static CreateSTL(meshes, download = true, fileName = "stlmesh", binary = false, isLittleEndian = true, doNotBakeTransform = false, supportInstancedMeshes = false, exportIndividualMeshes = false) {
        //Binary support adapted from https://gist.github.com/paulkaplan/6d5f0ab2c7e8fdc68a61
        const getFaceData = function (indices, vertices, i) {
            const id = [indices[i] * 3, indices[i + 1] * 3, indices[i + 2] * 3];
            const v = [
                new babylonjs_Meshes_mesh__WEBPACK_IMPORTED_MODULE_0__.Vector3(vertices[id[0]], vertices[id[0] + 2], vertices[id[0] + 1]),
                new babylonjs_Meshes_mesh__WEBPACK_IMPORTED_MODULE_0__.Vector3(vertices[id[1]], vertices[id[1] + 2], vertices[id[1] + 1]),
                new babylonjs_Meshes_mesh__WEBPACK_IMPORTED_MODULE_0__.Vector3(vertices[id[2]], vertices[id[2] + 2], vertices[id[2] + 1]),
            ];
            const p1p2 = v[0].subtract(v[1]);
            const p3p2 = v[2].subtract(v[1]);
            const n = babylonjs_Meshes_mesh__WEBPACK_IMPORTED_MODULE_0__.Vector3.Cross(p3p2, p1p2).normalize();
            return { v, n };
        };
        const writeVector = function (dataview, offset, vector, isLittleEndian) {
            offset = writeFloat(dataview, offset, vector.x, isLittleEndian);
            offset = writeFloat(dataview, offset, vector.y, isLittleEndian);
            return writeFloat(dataview, offset, vector.z, isLittleEndian);
        };
        const writeFloat = function (dataview, offset, value, isLittleEndian) {
            dataview.setFloat32(offset, value, isLittleEndian);
            return offset + 4;
        };
        const getVerticesData = function (mesh) {
            if (supportInstancedMeshes) {
                let sourceMesh = mesh;
                if (mesh instanceof babylonjs_Meshes_mesh__WEBPACK_IMPORTED_MODULE_0__.InstancedMesh) {
                    sourceMesh = mesh.sourceMesh;
                }
                const data = sourceMesh.getVerticesData(babylonjs_Meshes_mesh__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.PositionKind, true, true);
                if (!data)
                    return [];
                const temp = babylonjs_Meshes_mesh__WEBPACK_IMPORTED_MODULE_0__.Vector3.Zero();
                let index;
                for (index = 0; index < data.length; index += 3) {
                    babylonjs_Meshes_mesh__WEBPACK_IMPORTED_MODULE_0__.Vector3.TransformCoordinatesFromFloatsToRef(data[index], data[index + 1], data[index + 2], mesh.computeWorldMatrix(true), temp).toArray(data, index);
                }
                return data;
            }
            else {
                return mesh.getVerticesData(babylonjs_Meshes_mesh__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.PositionKind) || [];
            }
        };
        if (supportInstancedMeshes) {
            doNotBakeTransform = true;
        }
        let data = "";
        let faceCount = 0;
        let offset = 0;
        if (binary) {
            for (let i = 0; i < meshes.length; i++) {
                const mesh = meshes[i];
                const indices = mesh.getIndices();
                faceCount += indices ? indices.length / 3 : 0;
            }
            const bufferSize = 84 + 50 * faceCount;
            const buffer = new ArrayBuffer(bufferSize);
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
        for (let i = 0; i < meshes.length; i++) {
            const mesh = meshes[i];
            if (!binary && exportIndividualMeshes) {
                data += "solid " + mesh.name + "\r\n";
            }
            if (!doNotBakeTransform && mesh instanceof babylonjs_Meshes_mesh__WEBPACK_IMPORTED_MODULE_0__.Mesh) {
                mesh.bakeCurrentTransformIntoVertices();
            }
            const vertices = getVerticesData(mesh);
            const indices = mesh.getIndices() || [];
            for (let i = 0; i < indices.length; i += 3) {
                const fd = getFaceData(indices, vertices, i);
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
            const a = document.createElement("a");
            const blob = new Blob([data], { type: "application/octet-stream" });
            a.href = window.URL.createObjectURL(blob);
            a.download = fileName + ".stl";
            a.click();
        }
        return data;
    }
}


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
/* harmony export */   KHR_lights_punctual: () => (/* reexport safe */ serializers_glTF_2_0_index__WEBPACK_IMPORTED_MODULE_4__.KHR_lights_punctual),
/* harmony export */   KHR_materials_anisotropy: () => (/* reexport safe */ serializers_glTF_2_0_index__WEBPACK_IMPORTED_MODULE_4__.KHR_materials_anisotropy),
/* harmony export */   KHR_materials_clearcoat: () => (/* reexport safe */ serializers_glTF_2_0_index__WEBPACK_IMPORTED_MODULE_4__.KHR_materials_clearcoat),
/* harmony export */   KHR_materials_emissive_strength: () => (/* reexport safe */ serializers_glTF_2_0_index__WEBPACK_IMPORTED_MODULE_4__.KHR_materials_emissive_strength),
/* harmony export */   KHR_materials_ior: () => (/* reexport safe */ serializers_glTF_2_0_index__WEBPACK_IMPORTED_MODULE_4__.KHR_materials_ior),
/* harmony export */   KHR_materials_iridescence: () => (/* reexport safe */ serializers_glTF_2_0_index__WEBPACK_IMPORTED_MODULE_4__.KHR_materials_iridescence),
/* harmony export */   KHR_materials_sheen: () => (/* reexport safe */ serializers_glTF_2_0_index__WEBPACK_IMPORTED_MODULE_4__.KHR_materials_sheen),
/* harmony export */   KHR_materials_specular: () => (/* reexport safe */ serializers_glTF_2_0_index__WEBPACK_IMPORTED_MODULE_4__.KHR_materials_specular),
/* harmony export */   KHR_materials_transmission: () => (/* reexport safe */ serializers_glTF_2_0_index__WEBPACK_IMPORTED_MODULE_4__.KHR_materials_transmission),
/* harmony export */   KHR_materials_unlit: () => (/* reexport safe */ serializers_glTF_2_0_index__WEBPACK_IMPORTED_MODULE_4__.KHR_materials_unlit),
/* harmony export */   KHR_materials_volume: () => (/* reexport safe */ serializers_glTF_2_0_index__WEBPACK_IMPORTED_MODULE_4__.KHR_materials_volume),
/* harmony export */   KHR_texture_transform: () => (/* reexport safe */ serializers_glTF_2_0_index__WEBPACK_IMPORTED_MODULE_4__.KHR_texture_transform),
/* harmony export */   _BinaryWriter: () => (/* reexport safe */ serializers_glTF_2_0_index__WEBPACK_IMPORTED_MODULE_4__._BinaryWriter),
/* harmony export */   _Exporter: () => (/* reexport safe */ serializers_glTF_2_0_index__WEBPACK_IMPORTED_MODULE_4__._Exporter),
/* harmony export */   _GLTFAnimation: () => (/* reexport safe */ serializers_glTF_2_0_index__WEBPACK_IMPORTED_MODULE_4__._GLTFAnimation),
/* harmony export */   _GLTFMaterialExporter: () => (/* reexport safe */ serializers_glTF_2_0_index__WEBPACK_IMPORTED_MODULE_4__._GLTFMaterialExporter),
/* harmony export */   _GLTFUtilities: () => (/* reexport safe */ serializers_glTF_2_0_index__WEBPACK_IMPORTED_MODULE_4__._GLTFUtilities),
/* harmony export */   __IGLTFExporterExtension: () => (/* reexport safe */ serializers_glTF_glTFFileExporter__WEBPACK_IMPORTED_MODULE_0__.__IGLTFExporterExtension),
/* harmony export */   __IGLTFExporterExtensionV2: () => (/* reexport safe */ serializers_glTF_2_0_index__WEBPACK_IMPORTED_MODULE_4__.__IGLTFExporterExtensionV2)
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
const globalObject = typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : typeof window !== "undefined" ? window : undefined;
if (typeof globalObject !== "undefined") {
    globalObject.BABYLON = globalObject.BABYLON || {};
    const BABYLON = globalObject.BABYLON;
    BABYLON.GLTF2 = BABYLON.GLTF2 || {};
    BABYLON.GLTF2.Exporter = BABYLON.GLTF2.Exporter || {};
    BABYLON.GLTF2.Exporter.Extensions = BABYLON.GLTF2.Exporter.Extensions || {};
    const keys = [];
    for (const key in serializers_glTF_glTFFileExporter__WEBPACK_IMPORTED_MODULE_0__) {
        BABYLON[key] = serializers_glTF_glTFFileExporter__WEBPACK_IMPORTED_MODULE_0__[key];
        keys.push(key);
    }
    for (const key in serializers_glTF_2_0_glTFData__WEBPACK_IMPORTED_MODULE_1__) {
        BABYLON[key] = serializers_glTF_2_0_glTFData__WEBPACK_IMPORTED_MODULE_1__[key];
        keys.push(key);
    }
    for (const key in serializers_glTF_2_0_glTFSerializer__WEBPACK_IMPORTED_MODULE_2__) {
        BABYLON[key] = serializers_glTF_2_0_glTFSerializer__WEBPACK_IMPORTED_MODULE_2__[key];
        keys.push(key);
    }
    for (const key in serializers_glTF_2_0_Extensions_index__WEBPACK_IMPORTED_MODULE_3__) {
        BABYLON.GLTF2.Exporter.Extensions[key] = serializers_glTF_2_0_Extensions_index__WEBPACK_IMPORTED_MODULE_3__[key];
        keys.push(key);
    }
    for (const key in serializers_glTF_2_0_index__WEBPACK_IMPORTED_MODULE_4__) {
        // Prevent Reassignment.
        if (keys.indexOf(key) > -1) {
            continue;
        }
        BABYLON.GLTF2.Exporter[key] = serializers_glTF_2_0_index__WEBPACK_IMPORTED_MODULE_4__[key];
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
const globalObject = typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : typeof window !== "undefined" ? window : undefined;
if (typeof globalObject !== "undefined") {
    for (const serializer in serializers_OBJ_index__WEBPACK_IMPORTED_MODULE_0__) {
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
const globalObject = typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : typeof window !== "undefined" ? window : undefined;
if (typeof globalObject !== "undefined") {
    for (const serializer in serializers_stl_index__WEBPACK_IMPORTED_MODULE_0__) {
        globalObject.BABYLON[serializer] = serializers_stl_index__WEBPACK_IMPORTED_MODULE_0__[serializer];
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
/* harmony export */   KHR_lights_punctual: () => (/* reexport safe */ _legacy_glTF2Serializer__WEBPACK_IMPORTED_MODULE_1__.KHR_lights_punctual),
/* harmony export */   KHR_materials_anisotropy: () => (/* reexport safe */ _legacy_glTF2Serializer__WEBPACK_IMPORTED_MODULE_1__.KHR_materials_anisotropy),
/* harmony export */   KHR_materials_clearcoat: () => (/* reexport safe */ _legacy_glTF2Serializer__WEBPACK_IMPORTED_MODULE_1__.KHR_materials_clearcoat),
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
/* harmony export */   _BinaryWriter: () => (/* reexport safe */ _legacy_glTF2Serializer__WEBPACK_IMPORTED_MODULE_1__._BinaryWriter),
/* harmony export */   _Exporter: () => (/* reexport safe */ _legacy_glTF2Serializer__WEBPACK_IMPORTED_MODULE_1__._Exporter),
/* harmony export */   _GLTFAnimation: () => (/* reexport safe */ _legacy_glTF2Serializer__WEBPACK_IMPORTED_MODULE_1__._GLTFAnimation),
/* harmony export */   _GLTFMaterialExporter: () => (/* reexport safe */ _legacy_glTF2Serializer__WEBPACK_IMPORTED_MODULE_1__._GLTFMaterialExporter),
/* harmony export */   _GLTFUtilities: () => (/* reexport safe */ _legacy_glTF2Serializer__WEBPACK_IMPORTED_MODULE_1__._GLTFUtilities),
/* harmony export */   __IGLTFExporterExtension: () => (/* reexport safe */ _legacy_glTF2Serializer__WEBPACK_IMPORTED_MODULE_1__.__IGLTFExporterExtension),
/* harmony export */   __IGLTFExporterExtensionV2: () => (/* reexport safe */ _legacy_glTF2Serializer__WEBPACK_IMPORTED_MODULE_1__.__IGLTFExporterExtensionV2)
/* harmony export */ });
/* harmony import */ var serializers_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! serializers/index */ "../../../dev/serializers/src/index.ts");
/* harmony import */ var _legacy_glTF2Serializer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./legacy-glTF2Serializer */ "../../../lts/serializers/src/legacy/legacy-glTF2Serializer.ts");
/* harmony import */ var _legacy_objSerializer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./legacy-objSerializer */ "../../../lts/serializers/src/legacy/legacy-objSerializer.ts");
/* harmony import */ var _legacy_stlSerializer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./legacy-stlSerializer */ "../../../lts/serializers/src/legacy/legacy-stlSerializer.ts");
/* eslint-disable import/export */
/* eslint-disable import/no-internal-modules */






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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
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
//# sourceMappingURL=babylonjs.serializers.js.map