(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global.Ashes = {}));
}(this, (function (exports) { 'use strict';

    class Texture {
        constructor(rawImage, sampler = undefined, width = 2, height = 2, border = 0) {
            // channel: number = null;
            this.isDirty = true;
            this.glType = WebGL2RenderingContext.TEXTURE_2D;
            this.isCubetex = false;
            this.data = null;
            this.level = 0;
            this.internalformat = WebGL2RenderingContext.RGBA;
            this.format = WebGL2RenderingContext.RGBA;
            this.type = WebGL2RenderingContext.UNSIGNED_BYTE;
            this.flipY = false;
            this.sampler = new Sampler(sampler);
            this.image = rawImage;
            this.width = width;
            this.height = height;
            this.border = border;
            if (rawImage && rawImage.length == 6) {
                this.isCubetex = true;
                this.glType = WebGL2RenderingContext.TEXTURE_CUBE_MAP;
            }
        }
        static clone(origin) {
            let temp = new Texture(origin.image, origin.sampler);
            // temp.sampler = origin.sampler;
            // temp.sampler = new Sampler(origin.sampler);
            // temp.sampler.texture = null;
            temp.flipY = origin.flipY;
            temp.data = origin.data;
            temp.width = origin.width;
            temp.height = origin.height;
            temp.isCubetex = origin.isCubetex;
            temp.glType = origin.glType;
            temp.border = origin.border;
            temp.level = origin.level;
            temp.internalformat = origin.internalformat;
            temp.format = origin.format;
            temp.type = origin.type;
            return temp;
        }
        static createTexture(gl, tex) {
            if (!tex.sampler.texture) {
                // gl.deleteTexture(tex.sampler.texture);
                tex.sampler.texture = gl.createTexture();
            }
            gl.bindTexture(tex.glType, tex.sampler.texture);
            gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, tex.flipY ? 1 : 0);
            if (tex.isCubetex) {
                for (let i in this.cubetexOrder) {
                    if (tex.image) {
                        gl.texImage2D(this.cubetexOrder[i], tex.level, tex.internalformat, tex.format, tex.type, tex.image[i]);
                    }
                    else {
                        gl.texImage2D(this.cubetexOrder[i], tex.level, tex.internalformat, tex.width, tex.height, 0, tex.format, tex.type, tex.data[i]);
                    }
                }
            }
            else {
                if (tex.image) {
                    gl.texImage2D(tex.glType, tex.level, tex.internalformat, tex.format, tex.type, tex.image);
                }
                else { // Data texture
                    gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1);
                    gl.texImage2D(tex.glType, tex.level, tex.internalformat, tex.width, tex.height, tex.border, tex.format, tex.type, tex.data);
                }
            }
            gl.texParameterf(tex.glType, gl.TEXTURE_WRAP_S, tex.sampler.wrapS);
            gl.texParameterf(tex.glType, gl.TEXTURE_WRAP_T, tex.sampler.wrapT);
            gl.texParameterf(tex.glType, gl.TEXTURE_MAG_FILTER, tex.sampler.magFilter);
            gl.texParameterf(tex.glType, gl.TEXTURE_MIN_FILTER, tex.sampler.minFilter);
            if (tex.sampler.minFilter == WebGL2RenderingContext.NEAREST_MIPMAP_NEAREST
                || tex.sampler.minFilter == WebGL2RenderingContext.NEAREST_MIPMAP_LINEAR
                || tex.sampler.minFilter == WebGL2RenderingContext.LINEAR_MIPMAP_NEAREST
                || tex.sampler.minFilter == WebGL2RenderingContext.LINEAR_MIPMAP_LINEAR) {
                gl.generateMipmap(tex.glType);
            }
            // gl.texParameterf(tex.glType, gl.TEXTURE_MIN_FILTER, tex.sampler.minFilter);
            gl.bindTexture(tex.glType, null);
        }
        static unbindTexture(gl, tex, channel) {
            if (channel != null) {
                gl.activeTexture(WebGL2RenderingContext.TEXTURE0 + channel);
            }
            gl.bindTexture(tex.glType, null);
        }
        static bindTexture(gl, tex, channel) {
            if (channel != null) {
                gl.activeTexture(WebGL2RenderingContext.TEXTURE0 + channel);
            }
            if (tex.sampler.texture == null || (tex.isDirty && (tex.data || tex.image))) {
                // Ignore texture belongs to framebuffer after created once
                this.createTexture(gl, tex);
            }
            gl.bindTexture(tex.glType, tex.sampler.texture);
        }
    }
    Texture.defaultData = new Uint8Array([
        1, 1, 1, 1,
        1, 0.5, 0.4, 1,
        0.4, 0.5, 1, 1,
        1, 1, 1, 1,
    ].map(v => v * 255));
    Texture.cubetexOrder = [
        WebGL2RenderingContext.TEXTURE_CUBE_MAP_POSITIVE_X,
        WebGL2RenderingContext.TEXTURE_CUBE_MAP_NEGATIVE_X,
        WebGL2RenderingContext.TEXTURE_CUBE_MAP_POSITIVE_Y,
        WebGL2RenderingContext.TEXTURE_CUBE_MAP_NEGATIVE_Y,
        WebGL2RenderingContext.TEXTURE_CUBE_MAP_POSITIVE_Z,
        WebGL2RenderingContext.TEXTURE_CUBE_MAP_NEGATIVE_Z,
    ];
    class Sampler {
        constructor({ magFilter = WebGL2RenderingContext.NEAREST, minFilter = WebGL2RenderingContext.NEAREST, wrapS = 10497, wrapT = 10497, texture = null } = { magFilter: WebGL2RenderingContext.NEAREST, minFilter: WebGL2RenderingContext.NEAREST, wrapS: 10497, wrapT: 10497, texture: null }) {
            this.texture = null;
            this.magFilter = magFilter;
            this.minFilter = minFilter;
            this.wrapS = wrapS;
            this.wrapT = wrapT;
            this.texture = texture;
        }
    }

    /**
     * Common utilities
     * @module glMatrix
     */

    // Configuration Constants
    var EPSILON = 0.000001;
    var ARRAY_TYPE = typeof Float32Array !== 'undefined' ? Float32Array : Array;
    var RANDOM = Math.random;

    /**
     * 3x3 Matrix
     * @module mat3
     */

    /**
     * Creates a new identity mat3
     *
     * @returns {mat3} a new 3x3 matrix
     */
    function create() {
      var out = new ARRAY_TYPE(9);
      if (ARRAY_TYPE != Float32Array) {
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[5] = 0;
        out[6] = 0;
        out[7] = 0;
      }
      out[0] = 1;
      out[4] = 1;
      out[8] = 1;
      return out;
    }

    /**
     * Copies the upper-left 3x3 values into the given mat3.
     *
     * @param {mat3} out the receiving 3x3 matrix
     * @param {mat4} a   the source 4x4 matrix
     * @returns {mat3} out
     */
    function fromMat4(out, a) {
      out[0] = a[0];
      out[1] = a[1];
      out[2] = a[2];
      out[3] = a[4];
      out[4] = a[5];
      out[5] = a[6];
      out[6] = a[8];
      out[7] = a[9];
      out[8] = a[10];
      return out;
    }

    /**
     * Creates a new mat3 initialized with values from an existing matrix
     *
     * @param {mat3} a matrix to clone
     * @returns {mat3} a new 3x3 matrix
     */
    function clone(a) {
      var out = new ARRAY_TYPE(9);
      out[0] = a[0];
      out[1] = a[1];
      out[2] = a[2];
      out[3] = a[3];
      out[4] = a[4];
      out[5] = a[5];
      out[6] = a[6];
      out[7] = a[7];
      out[8] = a[8];
      return out;
    }

    /**
     * Copy the values from one mat3 to another
     *
     * @param {mat3} out the receiving matrix
     * @param {mat3} a the source matrix
     * @returns {mat3} out
     */
    function copy(out, a) {
      out[0] = a[0];
      out[1] = a[1];
      out[2] = a[2];
      out[3] = a[3];
      out[4] = a[4];
      out[5] = a[5];
      out[6] = a[6];
      out[7] = a[7];
      out[8] = a[8];
      return out;
    }

    /**
     * Create a new mat3 with the given values
     *
     * @param {Number} m00 Component in column 0, row 0 position (index 0)
     * @param {Number} m01 Component in column 0, row 1 position (index 1)
     * @param {Number} m02 Component in column 0, row 2 position (index 2)
     * @param {Number} m10 Component in column 1, row 0 position (index 3)
     * @param {Number} m11 Component in column 1, row 1 position (index 4)
     * @param {Number} m12 Component in column 1, row 2 position (index 5)
     * @param {Number} m20 Component in column 2, row 0 position (index 6)
     * @param {Number} m21 Component in column 2, row 1 position (index 7)
     * @param {Number} m22 Component in column 2, row 2 position (index 8)
     * @returns {mat3} A new mat3
     */
    function fromValues(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
      var out = new ARRAY_TYPE(9);
      out[0] = m00;
      out[1] = m01;
      out[2] = m02;
      out[3] = m10;
      out[4] = m11;
      out[5] = m12;
      out[6] = m20;
      out[7] = m21;
      out[8] = m22;
      return out;
    }

    /**
     * Set the components of a mat3 to the given values
     *
     * @param {mat3} out the receiving matrix
     * @param {Number} m00 Component in column 0, row 0 position (index 0)
     * @param {Number} m01 Component in column 0, row 1 position (index 1)
     * @param {Number} m02 Component in column 0, row 2 position (index 2)
     * @param {Number} m10 Component in column 1, row 0 position (index 3)
     * @param {Number} m11 Component in column 1, row 1 position (index 4)
     * @param {Number} m12 Component in column 1, row 2 position (index 5)
     * @param {Number} m20 Component in column 2, row 0 position (index 6)
     * @param {Number} m21 Component in column 2, row 1 position (index 7)
     * @param {Number} m22 Component in column 2, row 2 position (index 8)
     * @returns {mat3} out
     */
    function set(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
      out[0] = m00;
      out[1] = m01;
      out[2] = m02;
      out[3] = m10;
      out[4] = m11;
      out[5] = m12;
      out[6] = m20;
      out[7] = m21;
      out[8] = m22;
      return out;
    }

    /**
     * Set a mat3 to the identity matrix
     *
     * @param {mat3} out the receiving matrix
     * @returns {mat3} out
     */
    function identity(out) {
      out[0] = 1;
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
      out[4] = 1;
      out[5] = 0;
      out[6] = 0;
      out[7] = 0;
      out[8] = 1;
      return out;
    }

    /**
     * Transpose the values of a mat3
     *
     * @param {mat3} out the receiving matrix
     * @param {mat3} a the source matrix
     * @returns {mat3} out
     */
    function transpose(out, a) {
      // If we are transposing ourselves we can skip a few steps but have to cache some values
      if (out === a) {
        var a01 = a[1],
            a02 = a[2],
            a12 = a[5];
        out[1] = a[3];
        out[2] = a[6];
        out[3] = a01;
        out[5] = a[7];
        out[6] = a02;
        out[7] = a12;
      } else {
        out[0] = a[0];
        out[1] = a[3];
        out[2] = a[6];
        out[3] = a[1];
        out[4] = a[4];
        out[5] = a[7];
        out[6] = a[2];
        out[7] = a[5];
        out[8] = a[8];
      }

      return out;
    }

    /**
     * Inverts a mat3
     *
     * @param {mat3} out the receiving matrix
     * @param {mat3} a the source matrix
     * @returns {mat3} out
     */
    function invert(out, a) {
      var a00 = a[0],
          a01 = a[1],
          a02 = a[2];
      var a10 = a[3],
          a11 = a[4],
          a12 = a[5];
      var a20 = a[6],
          a21 = a[7],
          a22 = a[8];

      var b01 = a22 * a11 - a12 * a21;
      var b11 = -a22 * a10 + a12 * a20;
      var b21 = a21 * a10 - a11 * a20;

      // Calculate the determinant
      var det = a00 * b01 + a01 * b11 + a02 * b21;

      if (!det) {
        return null;
      }
      det = 1.0 / det;

      out[0] = b01 * det;
      out[1] = (-a22 * a01 + a02 * a21) * det;
      out[2] = (a12 * a01 - a02 * a11) * det;
      out[3] = b11 * det;
      out[4] = (a22 * a00 - a02 * a20) * det;
      out[5] = (-a12 * a00 + a02 * a10) * det;
      out[6] = b21 * det;
      out[7] = (-a21 * a00 + a01 * a20) * det;
      out[8] = (a11 * a00 - a01 * a10) * det;
      return out;
    }

    /**
     * Calculates the adjugate of a mat3
     *
     * @param {mat3} out the receiving matrix
     * @param {mat3} a the source matrix
     * @returns {mat3} out
     */
    function adjoint(out, a) {
      var a00 = a[0],
          a01 = a[1],
          a02 = a[2];
      var a10 = a[3],
          a11 = a[4],
          a12 = a[5];
      var a20 = a[6],
          a21 = a[7],
          a22 = a[8];

      out[0] = a11 * a22 - a12 * a21;
      out[1] = a02 * a21 - a01 * a22;
      out[2] = a01 * a12 - a02 * a11;
      out[3] = a12 * a20 - a10 * a22;
      out[4] = a00 * a22 - a02 * a20;
      out[5] = a02 * a10 - a00 * a12;
      out[6] = a10 * a21 - a11 * a20;
      out[7] = a01 * a20 - a00 * a21;
      out[8] = a00 * a11 - a01 * a10;
      return out;
    }

    /**
     * Calculates the determinant of a mat3
     *
     * @param {mat3} a the source matrix
     * @returns {Number} determinant of a
     */
    function determinant(a) {
      var a00 = a[0],
          a01 = a[1],
          a02 = a[2];
      var a10 = a[3],
          a11 = a[4],
          a12 = a[5];
      var a20 = a[6],
          a21 = a[7],
          a22 = a[8];

      return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
    }

    /**
     * Multiplies two mat3's
     *
     * @param {mat3} out the receiving matrix
     * @param {mat3} a the first operand
     * @param {mat3} b the second operand
     * @returns {mat3} out
     */
    function multiply(out, a, b) {
      var a00 = a[0],
          a01 = a[1],
          a02 = a[2];
      var a10 = a[3],
          a11 = a[4],
          a12 = a[5];
      var a20 = a[6],
          a21 = a[7],
          a22 = a[8];

      var b00 = b[0],
          b01 = b[1],
          b02 = b[2];
      var b10 = b[3],
          b11 = b[4],
          b12 = b[5];
      var b20 = b[6],
          b21 = b[7],
          b22 = b[8];

      out[0] = b00 * a00 + b01 * a10 + b02 * a20;
      out[1] = b00 * a01 + b01 * a11 + b02 * a21;
      out[2] = b00 * a02 + b01 * a12 + b02 * a22;

      out[3] = b10 * a00 + b11 * a10 + b12 * a20;
      out[4] = b10 * a01 + b11 * a11 + b12 * a21;
      out[5] = b10 * a02 + b11 * a12 + b12 * a22;

      out[6] = b20 * a00 + b21 * a10 + b22 * a20;
      out[7] = b20 * a01 + b21 * a11 + b22 * a21;
      out[8] = b20 * a02 + b21 * a12 + b22 * a22;
      return out;
    }

    /**
     * Translate a mat3 by the given vector
     *
     * @param {mat3} out the receiving matrix
     * @param {mat3} a the matrix to translate
     * @param {vec2} v vector to translate by
     * @returns {mat3} out
     */
    function translate(out, a, v) {
      var a00 = a[0],
          a01 = a[1],
          a02 = a[2],
          a10 = a[3],
          a11 = a[4],
          a12 = a[5],
          a20 = a[6],
          a21 = a[7],
          a22 = a[8],
          x = v[0],
          y = v[1];

      out[0] = a00;
      out[1] = a01;
      out[2] = a02;

      out[3] = a10;
      out[4] = a11;
      out[5] = a12;

      out[6] = x * a00 + y * a10 + a20;
      out[7] = x * a01 + y * a11 + a21;
      out[8] = x * a02 + y * a12 + a22;
      return out;
    }

    /**
     * Rotates a mat3 by the given angle
     *
     * @param {mat3} out the receiving matrix
     * @param {mat3} a the matrix to rotate
     * @param {Number} rad the angle to rotate the matrix by
     * @returns {mat3} out
     */
    function rotate(out, a, rad) {
      var a00 = a[0],
          a01 = a[1],
          a02 = a[2],
          a10 = a[3],
          a11 = a[4],
          a12 = a[5],
          a20 = a[6],
          a21 = a[7],
          a22 = a[8],
          s = Math.sin(rad),
          c = Math.cos(rad);

      out[0] = c * a00 + s * a10;
      out[1] = c * a01 + s * a11;
      out[2] = c * a02 + s * a12;

      out[3] = c * a10 - s * a00;
      out[4] = c * a11 - s * a01;
      out[5] = c * a12 - s * a02;

      out[6] = a20;
      out[7] = a21;
      out[8] = a22;
      return out;
    }
    /**
     * Scales the mat3 by the dimensions in the given vec2
     *
     * @param {mat3} out the receiving matrix
     * @param {mat3} a the matrix to rotate
     * @param {vec2} v the vec2 to scale the matrix by
     * @returns {mat3} out
     **/
    function scale(out, a, v) {
      var x = v[0],
          y = v[1];

      out[0] = x * a[0];
      out[1] = x * a[1];
      out[2] = x * a[2];

      out[3] = y * a[3];
      out[4] = y * a[4];
      out[5] = y * a[5];

      out[6] = a[6];
      out[7] = a[7];
      out[8] = a[8];
      return out;
    }

    /**
     * Creates a matrix from a vector translation
     * This is equivalent to (but much faster than):
     *
     *     mat3.identity(dest);
     *     mat3.translate(dest, dest, vec);
     *
     * @param {mat3} out mat3 receiving operation result
     * @param {vec2} v Translation vector
     * @returns {mat3} out
     */
    function fromTranslation(out, v) {
      out[0] = 1;
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
      out[4] = 1;
      out[5] = 0;
      out[6] = v[0];
      out[7] = v[1];
      out[8] = 1;
      return out;
    }

    /**
     * Creates a matrix from a given angle
     * This is equivalent to (but much faster than):
     *
     *     mat3.identity(dest);
     *     mat3.rotate(dest, dest, rad);
     *
     * @param {mat3} out mat3 receiving operation result
     * @param {Number} rad the angle to rotate the matrix by
     * @returns {mat3} out
     */
    function fromRotation(out, rad) {
      var s = Math.sin(rad),
          c = Math.cos(rad);

      out[0] = c;
      out[1] = s;
      out[2] = 0;

      out[3] = -s;
      out[4] = c;
      out[5] = 0;

      out[6] = 0;
      out[7] = 0;
      out[8] = 1;
      return out;
    }

    /**
     * Creates a matrix from a vector scaling
     * This is equivalent to (but much faster than):
     *
     *     mat3.identity(dest);
     *     mat3.scale(dest, dest, vec);
     *
     * @param {mat3} out mat3 receiving operation result
     * @param {vec2} v Scaling vector
     * @returns {mat3} out
     */
    function fromScaling(out, v) {
      out[0] = v[0];
      out[1] = 0;
      out[2] = 0;

      out[3] = 0;
      out[4] = v[1];
      out[5] = 0;

      out[6] = 0;
      out[7] = 0;
      out[8] = 1;
      return out;
    }

    /**
     * Copies the values from a mat2d into a mat3
     *
     * @param {mat3} out the receiving matrix
     * @param {mat2d} a the matrix to copy
     * @returns {mat3} out
     **/
    function fromMat2d(out, a) {
      out[0] = a[0];
      out[1] = a[1];
      out[2] = 0;

      out[3] = a[2];
      out[4] = a[3];
      out[5] = 0;

      out[6] = a[4];
      out[7] = a[5];
      out[8] = 1;
      return out;
    }

    /**
    * Calculates a 3x3 matrix from the given quaternion
    *
    * @param {mat3} out mat3 receiving operation result
    * @param {quat} q Quaternion to create matrix from
    *
    * @returns {mat3} out
    */
    function fromQuat(out, q) {
      var x = q[0],
          y = q[1],
          z = q[2],
          w = q[3];
      var x2 = x + x;
      var y2 = y + y;
      var z2 = z + z;

      var xx = x * x2;
      var yx = y * x2;
      var yy = y * y2;
      var zx = z * x2;
      var zy = z * y2;
      var zz = z * z2;
      var wx = w * x2;
      var wy = w * y2;
      var wz = w * z2;

      out[0] = 1 - yy - zz;
      out[3] = yx - wz;
      out[6] = zx + wy;

      out[1] = yx + wz;
      out[4] = 1 - xx - zz;
      out[7] = zy - wx;

      out[2] = zx - wy;
      out[5] = zy + wx;
      out[8] = 1 - xx - yy;

      return out;
    }

    /**
    * Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
    *
    * @param {mat3} out mat3 receiving operation result
    * @param {mat4} a Mat4 to derive the normal matrix from
    *
    * @returns {mat3} out
    */
    function normalFromMat4(out, a) {
      var a00 = a[0],
          a01 = a[1],
          a02 = a[2],
          a03 = a[3];
      var a10 = a[4],
          a11 = a[5],
          a12 = a[6],
          a13 = a[7];
      var a20 = a[8],
          a21 = a[9],
          a22 = a[10],
          a23 = a[11];
      var a30 = a[12],
          a31 = a[13],
          a32 = a[14],
          a33 = a[15];

      var b00 = a00 * a11 - a01 * a10;
      var b01 = a00 * a12 - a02 * a10;
      var b02 = a00 * a13 - a03 * a10;
      var b03 = a01 * a12 - a02 * a11;
      var b04 = a01 * a13 - a03 * a11;
      var b05 = a02 * a13 - a03 * a12;
      var b06 = a20 * a31 - a21 * a30;
      var b07 = a20 * a32 - a22 * a30;
      var b08 = a20 * a33 - a23 * a30;
      var b09 = a21 * a32 - a22 * a31;
      var b10 = a21 * a33 - a23 * a31;
      var b11 = a22 * a33 - a23 * a32;

      // Calculate the determinant
      var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

      if (!det) {
        return null;
      }
      det = 1.0 / det;

      out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
      out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
      out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;

      out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
      out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
      out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;

      out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
      out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
      out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;

      return out;
    }

    /**
     * Generates a 2D projection matrix with the given bounds
     *
     * @param {mat3} out mat3 frustum matrix will be written into
     * @param {number} width Width of your gl context
     * @param {number} height Height of gl context
     * @returns {mat3} out
     */
    function projection(out, width, height) {
      out[0] = 2 / width;
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
      out[4] = -2 / height;
      out[5] = 0;
      out[6] = -1;
      out[7] = 1;
      out[8] = 1;
      return out;
    }

    /**
     * Returns a string representation of a mat3
     *
     * @param {mat3} a matrix to represent as a string
     * @returns {String} string representation of the matrix
     */
    function str(a) {
      return 'mat3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' + a[8] + ')';
    }

    /**
     * Returns Frobenius norm of a mat3
     *
     * @param {mat3} a the matrix to calculate Frobenius norm of
     * @returns {Number} Frobenius norm
     */
    function frob(a) {
      return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2));
    }

    /**
     * Adds two mat3's
     *
     * @param {mat3} out the receiving matrix
     * @param {mat3} a the first operand
     * @param {mat3} b the second operand
     * @returns {mat3} out
     */
    function add(out, a, b) {
      out[0] = a[0] + b[0];
      out[1] = a[1] + b[1];
      out[2] = a[2] + b[2];
      out[3] = a[3] + b[3];
      out[4] = a[4] + b[4];
      out[5] = a[5] + b[5];
      out[6] = a[6] + b[6];
      out[7] = a[7] + b[7];
      out[8] = a[8] + b[8];
      return out;
    }

    /**
     * Subtracts matrix b from matrix a
     *
     * @param {mat3} out the receiving matrix
     * @param {mat3} a the first operand
     * @param {mat3} b the second operand
     * @returns {mat3} out
     */
    function subtract(out, a, b) {
      out[0] = a[0] - b[0];
      out[1] = a[1] - b[1];
      out[2] = a[2] - b[2];
      out[3] = a[3] - b[3];
      out[4] = a[4] - b[4];
      out[5] = a[5] - b[5];
      out[6] = a[6] - b[6];
      out[7] = a[7] - b[7];
      out[8] = a[8] - b[8];
      return out;
    }

    /**
     * Multiply each element of the matrix by a scalar.
     *
     * @param {mat3} out the receiving matrix
     * @param {mat3} a the matrix to scale
     * @param {Number} b amount to scale the matrix's elements by
     * @returns {mat3} out
     */
    function multiplyScalar(out, a, b) {
      out[0] = a[0] * b;
      out[1] = a[1] * b;
      out[2] = a[2] * b;
      out[3] = a[3] * b;
      out[4] = a[4] * b;
      out[5] = a[5] * b;
      out[6] = a[6] * b;
      out[7] = a[7] * b;
      out[8] = a[8] * b;
      return out;
    }

    /**
     * Adds two mat3's after multiplying each element of the second operand by a scalar value.
     *
     * @param {mat3} out the receiving vector
     * @param {mat3} a the first operand
     * @param {mat3} b the second operand
     * @param {Number} scale the amount to scale b's elements by before adding
     * @returns {mat3} out
     */
    function multiplyScalarAndAdd(out, a, b, scale) {
      out[0] = a[0] + b[0] * scale;
      out[1] = a[1] + b[1] * scale;
      out[2] = a[2] + b[2] * scale;
      out[3] = a[3] + b[3] * scale;
      out[4] = a[4] + b[4] * scale;
      out[5] = a[5] + b[5] * scale;
      out[6] = a[6] + b[6] * scale;
      out[7] = a[7] + b[7] * scale;
      out[8] = a[8] + b[8] * scale;
      return out;
    }

    /**
     * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
     *
     * @param {mat3} a The first matrix.
     * @param {mat3} b The second matrix.
     * @returns {Boolean} True if the matrices are equal, false otherwise.
     */
    function exactEquals(a, b) {
      return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8];
    }

    /**
     * Returns whether or not the matrices have approximately the same elements in the same position.
     *
     * @param {mat3} a The first matrix.
     * @param {mat3} b The second matrix.
     * @returns {Boolean} True if the matrices are equal, false otherwise.
     */
    function equals(a, b) {
      var a0 = a[0],
          a1 = a[1],
          a2 = a[2],
          a3 = a[3],
          a4 = a[4],
          a5 = a[5],
          a6 = a[6],
          a7 = a[7],
          a8 = a[8];
      var b0 = b[0],
          b1 = b[1],
          b2 = b[2],
          b3 = b[3],
          b4 = b[4],
          b5 = b[5],
          b6 = b[6],
          b7 = b[7],
          b8 = b[8];
      return Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= EPSILON * Math.max(1.0, Math.abs(a8), Math.abs(b8));
    }

    /**
     * Alias for {@link mat3.multiply}
     * @function
     */
    var mul = multiply;

    /**
     * Alias for {@link mat3.subtract}
     * @function
     */
    var sub = subtract;

    var mat3 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        create: create,
        fromMat4: fromMat4,
        clone: clone,
        copy: copy,
        fromValues: fromValues,
        set: set,
        identity: identity,
        transpose: transpose,
        invert: invert,
        adjoint: adjoint,
        determinant: determinant,
        multiply: multiply,
        translate: translate,
        rotate: rotate,
        scale: scale,
        fromTranslation: fromTranslation,
        fromRotation: fromRotation,
        fromScaling: fromScaling,
        fromMat2d: fromMat2d,
        fromQuat: fromQuat,
        normalFromMat4: normalFromMat4,
        projection: projection,
        str: str,
        frob: frob,
        add: add,
        subtract: subtract,
        multiplyScalar: multiplyScalar,
        multiplyScalarAndAdd: multiplyScalarAndAdd,
        exactEquals: exactEquals,
        equals: equals,
        mul: mul,
        sub: sub
    });

    /**
     * 4x4 Matrix<br>Format: column-major, when typed out it looks like row-major<br>The matrices are being post multiplied.
     * @module mat4
     */

    /**
     * Creates a new identity mat4
     *
     * @returns {mat4} a new 4x4 matrix
     */
    function create$1() {
      var out = new ARRAY_TYPE(16);
      if (ARRAY_TYPE != Float32Array) {
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[6] = 0;
        out[7] = 0;
        out[8] = 0;
        out[9] = 0;
        out[11] = 0;
        out[12] = 0;
        out[13] = 0;
        out[14] = 0;
      }
      out[0] = 1;
      out[5] = 1;
      out[10] = 1;
      out[15] = 1;
      return out;
    }

    /**
     * Creates a new mat4 initialized with values from an existing matrix
     *
     * @param {mat4} a matrix to clone
     * @returns {mat4} a new 4x4 matrix
     */
    function clone$1(a) {
      var out = new ARRAY_TYPE(16);
      out[0] = a[0];
      out[1] = a[1];
      out[2] = a[2];
      out[3] = a[3];
      out[4] = a[4];
      out[5] = a[5];
      out[6] = a[6];
      out[7] = a[7];
      out[8] = a[8];
      out[9] = a[9];
      out[10] = a[10];
      out[11] = a[11];
      out[12] = a[12];
      out[13] = a[13];
      out[14] = a[14];
      out[15] = a[15];
      return out;
    }

    /**
     * Copy the values from one mat4 to another
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the source matrix
     * @returns {mat4} out
     */
    function copy$1(out, a) {
      out[0] = a[0];
      out[1] = a[1];
      out[2] = a[2];
      out[3] = a[3];
      out[4] = a[4];
      out[5] = a[5];
      out[6] = a[6];
      out[7] = a[7];
      out[8] = a[8];
      out[9] = a[9];
      out[10] = a[10];
      out[11] = a[11];
      out[12] = a[12];
      out[13] = a[13];
      out[14] = a[14];
      out[15] = a[15];
      return out;
    }

    /**
     * Create a new mat4 with the given values
     *
     * @param {Number} m00 Component in column 0, row 0 position (index 0)
     * @param {Number} m01 Component in column 0, row 1 position (index 1)
     * @param {Number} m02 Component in column 0, row 2 position (index 2)
     * @param {Number} m03 Component in column 0, row 3 position (index 3)
     * @param {Number} m10 Component in column 1, row 0 position (index 4)
     * @param {Number} m11 Component in column 1, row 1 position (index 5)
     * @param {Number} m12 Component in column 1, row 2 position (index 6)
     * @param {Number} m13 Component in column 1, row 3 position (index 7)
     * @param {Number} m20 Component in column 2, row 0 position (index 8)
     * @param {Number} m21 Component in column 2, row 1 position (index 9)
     * @param {Number} m22 Component in column 2, row 2 position (index 10)
     * @param {Number} m23 Component in column 2, row 3 position (index 11)
     * @param {Number} m30 Component in column 3, row 0 position (index 12)
     * @param {Number} m31 Component in column 3, row 1 position (index 13)
     * @param {Number} m32 Component in column 3, row 2 position (index 14)
     * @param {Number} m33 Component in column 3, row 3 position (index 15)
     * @returns {mat4} A new mat4
     */
    function fromValues$1(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
      var out = new ARRAY_TYPE(16);
      out[0] = m00;
      out[1] = m01;
      out[2] = m02;
      out[3] = m03;
      out[4] = m10;
      out[5] = m11;
      out[6] = m12;
      out[7] = m13;
      out[8] = m20;
      out[9] = m21;
      out[10] = m22;
      out[11] = m23;
      out[12] = m30;
      out[13] = m31;
      out[14] = m32;
      out[15] = m33;
      return out;
    }

    /**
     * Set the components of a mat4 to the given values
     *
     * @param {mat4} out the receiving matrix
     * @param {Number} m00 Component in column 0, row 0 position (index 0)
     * @param {Number} m01 Component in column 0, row 1 position (index 1)
     * @param {Number} m02 Component in column 0, row 2 position (index 2)
     * @param {Number} m03 Component in column 0, row 3 position (index 3)
     * @param {Number} m10 Component in column 1, row 0 position (index 4)
     * @param {Number} m11 Component in column 1, row 1 position (index 5)
     * @param {Number} m12 Component in column 1, row 2 position (index 6)
     * @param {Number} m13 Component in column 1, row 3 position (index 7)
     * @param {Number} m20 Component in column 2, row 0 position (index 8)
     * @param {Number} m21 Component in column 2, row 1 position (index 9)
     * @param {Number} m22 Component in column 2, row 2 position (index 10)
     * @param {Number} m23 Component in column 2, row 3 position (index 11)
     * @param {Number} m30 Component in column 3, row 0 position (index 12)
     * @param {Number} m31 Component in column 3, row 1 position (index 13)
     * @param {Number} m32 Component in column 3, row 2 position (index 14)
     * @param {Number} m33 Component in column 3, row 3 position (index 15)
     * @returns {mat4} out
     */
    function set$1(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
      out[0] = m00;
      out[1] = m01;
      out[2] = m02;
      out[3] = m03;
      out[4] = m10;
      out[5] = m11;
      out[6] = m12;
      out[7] = m13;
      out[8] = m20;
      out[9] = m21;
      out[10] = m22;
      out[11] = m23;
      out[12] = m30;
      out[13] = m31;
      out[14] = m32;
      out[15] = m33;
      return out;
    }

    /**
     * Set a mat4 to the identity matrix
     *
     * @param {mat4} out the receiving matrix
     * @returns {mat4} out
     */
    function identity$1(out) {
      out[0] = 1;
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
      out[4] = 0;
      out[5] = 1;
      out[6] = 0;
      out[7] = 0;
      out[8] = 0;
      out[9] = 0;
      out[10] = 1;
      out[11] = 0;
      out[12] = 0;
      out[13] = 0;
      out[14] = 0;
      out[15] = 1;
      return out;
    }

    /**
     * Transpose the values of a mat4
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the source matrix
     * @returns {mat4} out
     */
    function transpose$1(out, a) {
      // If we are transposing ourselves we can skip a few steps but have to cache some values
      if (out === a) {
        var a01 = a[1],
            a02 = a[2],
            a03 = a[3];
        var a12 = a[6],
            a13 = a[7];
        var a23 = a[11];

        out[1] = a[4];
        out[2] = a[8];
        out[3] = a[12];
        out[4] = a01;
        out[6] = a[9];
        out[7] = a[13];
        out[8] = a02;
        out[9] = a12;
        out[11] = a[14];
        out[12] = a03;
        out[13] = a13;
        out[14] = a23;
      } else {
        out[0] = a[0];
        out[1] = a[4];
        out[2] = a[8];
        out[3] = a[12];
        out[4] = a[1];
        out[5] = a[5];
        out[6] = a[9];
        out[7] = a[13];
        out[8] = a[2];
        out[9] = a[6];
        out[10] = a[10];
        out[11] = a[14];
        out[12] = a[3];
        out[13] = a[7];
        out[14] = a[11];
        out[15] = a[15];
      }

      return out;
    }

    /**
     * Inverts a mat4
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the source matrix
     * @returns {mat4} out
     */
    function invert$1(out, a) {
      var a00 = a[0],
          a01 = a[1],
          a02 = a[2],
          a03 = a[3];
      var a10 = a[4],
          a11 = a[5],
          a12 = a[6],
          a13 = a[7];
      var a20 = a[8],
          a21 = a[9],
          a22 = a[10],
          a23 = a[11];
      var a30 = a[12],
          a31 = a[13],
          a32 = a[14],
          a33 = a[15];

      var b00 = a00 * a11 - a01 * a10;
      var b01 = a00 * a12 - a02 * a10;
      var b02 = a00 * a13 - a03 * a10;
      var b03 = a01 * a12 - a02 * a11;
      var b04 = a01 * a13 - a03 * a11;
      var b05 = a02 * a13 - a03 * a12;
      var b06 = a20 * a31 - a21 * a30;
      var b07 = a20 * a32 - a22 * a30;
      var b08 = a20 * a33 - a23 * a30;
      var b09 = a21 * a32 - a22 * a31;
      var b10 = a21 * a33 - a23 * a31;
      var b11 = a22 * a33 - a23 * a32;

      // Calculate the determinant
      var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

      if (!det) {
        return null;
      }
      det = 1.0 / det;

      out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
      out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
      out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
      out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
      out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
      out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
      out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
      out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
      out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
      out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
      out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
      out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
      out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
      out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
      out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
      out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;

      return out;
    }

    /**
     * Calculates the adjugate of a mat4
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the source matrix
     * @returns {mat4} out
     */
    function adjoint$1(out, a) {
      var a00 = a[0],
          a01 = a[1],
          a02 = a[2],
          a03 = a[3];
      var a10 = a[4],
          a11 = a[5],
          a12 = a[6],
          a13 = a[7];
      var a20 = a[8],
          a21 = a[9],
          a22 = a[10],
          a23 = a[11];
      var a30 = a[12],
          a31 = a[13],
          a32 = a[14],
          a33 = a[15];

      out[0] = a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22);
      out[1] = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
      out[2] = a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12);
      out[3] = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
      out[4] = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
      out[5] = a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22);
      out[6] = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
      out[7] = a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12);
      out[8] = a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21);
      out[9] = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
      out[10] = a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11);
      out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
      out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
      out[13] = a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21);
      out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
      out[15] = a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11);
      return out;
    }

    /**
     * Calculates the determinant of a mat4
     *
     * @param {mat4} a the source matrix
     * @returns {Number} determinant of a
     */
    function determinant$1(a) {
      var a00 = a[0],
          a01 = a[1],
          a02 = a[2],
          a03 = a[3];
      var a10 = a[4],
          a11 = a[5],
          a12 = a[6],
          a13 = a[7];
      var a20 = a[8],
          a21 = a[9],
          a22 = a[10],
          a23 = a[11];
      var a30 = a[12],
          a31 = a[13],
          a32 = a[14],
          a33 = a[15];

      var b00 = a00 * a11 - a01 * a10;
      var b01 = a00 * a12 - a02 * a10;
      var b02 = a00 * a13 - a03 * a10;
      var b03 = a01 * a12 - a02 * a11;
      var b04 = a01 * a13 - a03 * a11;
      var b05 = a02 * a13 - a03 * a12;
      var b06 = a20 * a31 - a21 * a30;
      var b07 = a20 * a32 - a22 * a30;
      var b08 = a20 * a33 - a23 * a30;
      var b09 = a21 * a32 - a22 * a31;
      var b10 = a21 * a33 - a23 * a31;
      var b11 = a22 * a33 - a23 * a32;

      // Calculate the determinant
      return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
    }

    /**
     * Multiplies two mat4s
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the first operand
     * @param {mat4} b the second operand
     * @returns {mat4} out
     */
    function multiply$1(out, a, b) {
      var a00 = a[0],
          a01 = a[1],
          a02 = a[2],
          a03 = a[3];
      var a10 = a[4],
          a11 = a[5],
          a12 = a[6],
          a13 = a[7];
      var a20 = a[8],
          a21 = a[9],
          a22 = a[10],
          a23 = a[11];
      var a30 = a[12],
          a31 = a[13],
          a32 = a[14],
          a33 = a[15];

      // Cache only the current line of the second matrix
      var b0 = b[0],
          b1 = b[1],
          b2 = b[2],
          b3 = b[3];
      out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
      out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
      out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
      out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

      b0 = b[4];b1 = b[5];b2 = b[6];b3 = b[7];
      out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
      out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
      out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
      out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

      b0 = b[8];b1 = b[9];b2 = b[10];b3 = b[11];
      out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
      out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
      out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
      out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

      b0 = b[12];b1 = b[13];b2 = b[14];b3 = b[15];
      out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
      out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
      out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
      out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
      return out;
    }

    /**
     * Translate a mat4 by the given vector
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the matrix to translate
     * @param {vec3} v vector to translate by
     * @returns {mat4} out
     */
    function translate$1(out, a, v) {
      var x = v[0],
          y = v[1],
          z = v[2];
      var a00 = void 0,
          a01 = void 0,
          a02 = void 0,
          a03 = void 0;
      var a10 = void 0,
          a11 = void 0,
          a12 = void 0,
          a13 = void 0;
      var a20 = void 0,
          a21 = void 0,
          a22 = void 0,
          a23 = void 0;

      if (a === out) {
        out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
        out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
        out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
        out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
      } else {
        a00 = a[0];a01 = a[1];a02 = a[2];a03 = a[3];
        a10 = a[4];a11 = a[5];a12 = a[6];a13 = a[7];
        a20 = a[8];a21 = a[9];a22 = a[10];a23 = a[11];

        out[0] = a00;out[1] = a01;out[2] = a02;out[3] = a03;
        out[4] = a10;out[5] = a11;out[6] = a12;out[7] = a13;
        out[8] = a20;out[9] = a21;out[10] = a22;out[11] = a23;

        out[12] = a00 * x + a10 * y + a20 * z + a[12];
        out[13] = a01 * x + a11 * y + a21 * z + a[13];
        out[14] = a02 * x + a12 * y + a22 * z + a[14];
        out[15] = a03 * x + a13 * y + a23 * z + a[15];
      }

      return out;
    }

    /**
     * Scales the mat4 by the dimensions in the given vec3 not using vectorization
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the matrix to scale
     * @param {vec3} v the vec3 to scale the matrix by
     * @returns {mat4} out
     **/
    function scale$1(out, a, v) {
      var x = v[0],
          y = v[1],
          z = v[2];

      out[0] = a[0] * x;
      out[1] = a[1] * x;
      out[2] = a[2] * x;
      out[3] = a[3] * x;
      out[4] = a[4] * y;
      out[5] = a[5] * y;
      out[6] = a[6] * y;
      out[7] = a[7] * y;
      out[8] = a[8] * z;
      out[9] = a[9] * z;
      out[10] = a[10] * z;
      out[11] = a[11] * z;
      out[12] = a[12];
      out[13] = a[13];
      out[14] = a[14];
      out[15] = a[15];
      return out;
    }

    /**
     * Rotates a mat4 by the given angle around the given axis
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the matrix to rotate
     * @param {Number} rad the angle to rotate the matrix by
     * @param {vec3} axis the axis to rotate around
     * @returns {mat4} out
     */
    function rotate$1(out, a, rad, axis) {
      var x = axis[0],
          y = axis[1],
          z = axis[2];
      var len = Math.sqrt(x * x + y * y + z * z);
      var s = void 0,
          c = void 0,
          t = void 0;
      var a00 = void 0,
          a01 = void 0,
          a02 = void 0,
          a03 = void 0;
      var a10 = void 0,
          a11 = void 0,
          a12 = void 0,
          a13 = void 0;
      var a20 = void 0,
          a21 = void 0,
          a22 = void 0,
          a23 = void 0;
      var b00 = void 0,
          b01 = void 0,
          b02 = void 0;
      var b10 = void 0,
          b11 = void 0,
          b12 = void 0;
      var b20 = void 0,
          b21 = void 0,
          b22 = void 0;

      if (len < EPSILON) {
        return null;
      }

      len = 1 / len;
      x *= len;
      y *= len;
      z *= len;

      s = Math.sin(rad);
      c = Math.cos(rad);
      t = 1 - c;

      a00 = a[0];a01 = a[1];a02 = a[2];a03 = a[3];
      a10 = a[4];a11 = a[5];a12 = a[6];a13 = a[7];
      a20 = a[8];a21 = a[9];a22 = a[10];a23 = a[11];

      // Construct the elements of the rotation matrix
      b00 = x * x * t + c;b01 = y * x * t + z * s;b02 = z * x * t - y * s;
      b10 = x * y * t - z * s;b11 = y * y * t + c;b12 = z * y * t + x * s;
      b20 = x * z * t + y * s;b21 = y * z * t - x * s;b22 = z * z * t + c;

      // Perform rotation-specific matrix multiplication
      out[0] = a00 * b00 + a10 * b01 + a20 * b02;
      out[1] = a01 * b00 + a11 * b01 + a21 * b02;
      out[2] = a02 * b00 + a12 * b01 + a22 * b02;
      out[3] = a03 * b00 + a13 * b01 + a23 * b02;
      out[4] = a00 * b10 + a10 * b11 + a20 * b12;
      out[5] = a01 * b10 + a11 * b11 + a21 * b12;
      out[6] = a02 * b10 + a12 * b11 + a22 * b12;
      out[7] = a03 * b10 + a13 * b11 + a23 * b12;
      out[8] = a00 * b20 + a10 * b21 + a20 * b22;
      out[9] = a01 * b20 + a11 * b21 + a21 * b22;
      out[10] = a02 * b20 + a12 * b21 + a22 * b22;
      out[11] = a03 * b20 + a13 * b21 + a23 * b22;

      if (a !== out) {
        // If the source and destination differ, copy the unchanged last row
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
      }
      return out;
    }

    /**
     * Rotates a matrix by the given angle around the X axis
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the matrix to rotate
     * @param {Number} rad the angle to rotate the matrix by
     * @returns {mat4} out
     */
    function rotateX(out, a, rad) {
      var s = Math.sin(rad);
      var c = Math.cos(rad);
      var a10 = a[4];
      var a11 = a[5];
      var a12 = a[6];
      var a13 = a[7];
      var a20 = a[8];
      var a21 = a[9];
      var a22 = a[10];
      var a23 = a[11];

      if (a !== out) {
        // If the source and destination differ, copy the unchanged rows
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
      }

      // Perform axis-specific matrix multiplication
      out[4] = a10 * c + a20 * s;
      out[5] = a11 * c + a21 * s;
      out[6] = a12 * c + a22 * s;
      out[7] = a13 * c + a23 * s;
      out[8] = a20 * c - a10 * s;
      out[9] = a21 * c - a11 * s;
      out[10] = a22 * c - a12 * s;
      out[11] = a23 * c - a13 * s;
      return out;
    }

    /**
     * Rotates a matrix by the given angle around the Y axis
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the matrix to rotate
     * @param {Number} rad the angle to rotate the matrix by
     * @returns {mat4} out
     */
    function rotateY(out, a, rad) {
      var s = Math.sin(rad);
      var c = Math.cos(rad);
      var a00 = a[0];
      var a01 = a[1];
      var a02 = a[2];
      var a03 = a[3];
      var a20 = a[8];
      var a21 = a[9];
      var a22 = a[10];
      var a23 = a[11];

      if (a !== out) {
        // If the source and destination differ, copy the unchanged rows
        out[4] = a[4];
        out[5] = a[5];
        out[6] = a[6];
        out[7] = a[7];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
      }

      // Perform axis-specific matrix multiplication
      out[0] = a00 * c - a20 * s;
      out[1] = a01 * c - a21 * s;
      out[2] = a02 * c - a22 * s;
      out[3] = a03 * c - a23 * s;
      out[8] = a00 * s + a20 * c;
      out[9] = a01 * s + a21 * c;
      out[10] = a02 * s + a22 * c;
      out[11] = a03 * s + a23 * c;
      return out;
    }

    /**
     * Rotates a matrix by the given angle around the Z axis
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the matrix to rotate
     * @param {Number} rad the angle to rotate the matrix by
     * @returns {mat4} out
     */
    function rotateZ(out, a, rad) {
      var s = Math.sin(rad);
      var c = Math.cos(rad);
      var a00 = a[0];
      var a01 = a[1];
      var a02 = a[2];
      var a03 = a[3];
      var a10 = a[4];
      var a11 = a[5];
      var a12 = a[6];
      var a13 = a[7];

      if (a !== out) {
        // If the source and destination differ, copy the unchanged last row
        out[8] = a[8];
        out[9] = a[9];
        out[10] = a[10];
        out[11] = a[11];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
      }

      // Perform axis-specific matrix multiplication
      out[0] = a00 * c + a10 * s;
      out[1] = a01 * c + a11 * s;
      out[2] = a02 * c + a12 * s;
      out[3] = a03 * c + a13 * s;
      out[4] = a10 * c - a00 * s;
      out[5] = a11 * c - a01 * s;
      out[6] = a12 * c - a02 * s;
      out[7] = a13 * c - a03 * s;
      return out;
    }

    /**
     * Creates a matrix from a vector translation
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest);
     *     mat4.translate(dest, dest, vec);
     *
     * @param {mat4} out mat4 receiving operation result
     * @param {vec3} v Translation vector
     * @returns {mat4} out
     */
    function fromTranslation$1(out, v) {
      out[0] = 1;
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
      out[4] = 0;
      out[5] = 1;
      out[6] = 0;
      out[7] = 0;
      out[8] = 0;
      out[9] = 0;
      out[10] = 1;
      out[11] = 0;
      out[12] = v[0];
      out[13] = v[1];
      out[14] = v[2];
      out[15] = 1;
      return out;
    }

    /**
     * Creates a matrix from a vector scaling
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest);
     *     mat4.scale(dest, dest, vec);
     *
     * @param {mat4} out mat4 receiving operation result
     * @param {vec3} v Scaling vector
     * @returns {mat4} out
     */
    function fromScaling$1(out, v) {
      out[0] = v[0];
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
      out[4] = 0;
      out[5] = v[1];
      out[6] = 0;
      out[7] = 0;
      out[8] = 0;
      out[9] = 0;
      out[10] = v[2];
      out[11] = 0;
      out[12] = 0;
      out[13] = 0;
      out[14] = 0;
      out[15] = 1;
      return out;
    }

    /**
     * Creates a matrix from a given angle around a given axis
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest);
     *     mat4.rotate(dest, dest, rad, axis);
     *
     * @param {mat4} out mat4 receiving operation result
     * @param {Number} rad the angle to rotate the matrix by
     * @param {vec3} axis the axis to rotate around
     * @returns {mat4} out
     */
    function fromRotation$1(out, rad, axis) {
      var x = axis[0],
          y = axis[1],
          z = axis[2];
      var len = Math.sqrt(x * x + y * y + z * z);
      var s = void 0,
          c = void 0,
          t = void 0;

      if (len < EPSILON) {
        return null;
      }

      len = 1 / len;
      x *= len;
      y *= len;
      z *= len;

      s = Math.sin(rad);
      c = Math.cos(rad);
      t = 1 - c;

      // Perform rotation-specific matrix multiplication
      out[0] = x * x * t + c;
      out[1] = y * x * t + z * s;
      out[2] = z * x * t - y * s;
      out[3] = 0;
      out[4] = x * y * t - z * s;
      out[5] = y * y * t + c;
      out[6] = z * y * t + x * s;
      out[7] = 0;
      out[8] = x * z * t + y * s;
      out[9] = y * z * t - x * s;
      out[10] = z * z * t + c;
      out[11] = 0;
      out[12] = 0;
      out[13] = 0;
      out[14] = 0;
      out[15] = 1;
      return out;
    }

    /**
     * Creates a matrix from the given angle around the X axis
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest);
     *     mat4.rotateX(dest, dest, rad);
     *
     * @param {mat4} out mat4 receiving operation result
     * @param {Number} rad the angle to rotate the matrix by
     * @returns {mat4} out
     */
    function fromXRotation(out, rad) {
      var s = Math.sin(rad);
      var c = Math.cos(rad);

      // Perform axis-specific matrix multiplication
      out[0] = 1;
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
      out[4] = 0;
      out[5] = c;
      out[6] = s;
      out[7] = 0;
      out[8] = 0;
      out[9] = -s;
      out[10] = c;
      out[11] = 0;
      out[12] = 0;
      out[13] = 0;
      out[14] = 0;
      out[15] = 1;
      return out;
    }

    /**
     * Creates a matrix from the given angle around the Y axis
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest);
     *     mat4.rotateY(dest, dest, rad);
     *
     * @param {mat4} out mat4 receiving operation result
     * @param {Number} rad the angle to rotate the matrix by
     * @returns {mat4} out
     */
    function fromYRotation(out, rad) {
      var s = Math.sin(rad);
      var c = Math.cos(rad);

      // Perform axis-specific matrix multiplication
      out[0] = c;
      out[1] = 0;
      out[2] = -s;
      out[3] = 0;
      out[4] = 0;
      out[5] = 1;
      out[6] = 0;
      out[7] = 0;
      out[8] = s;
      out[9] = 0;
      out[10] = c;
      out[11] = 0;
      out[12] = 0;
      out[13] = 0;
      out[14] = 0;
      out[15] = 1;
      return out;
    }

    /**
     * Creates a matrix from the given angle around the Z axis
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest);
     *     mat4.rotateZ(dest, dest, rad);
     *
     * @param {mat4} out mat4 receiving operation result
     * @param {Number} rad the angle to rotate the matrix by
     * @returns {mat4} out
     */
    function fromZRotation(out, rad) {
      var s = Math.sin(rad);
      var c = Math.cos(rad);

      // Perform axis-specific matrix multiplication
      out[0] = c;
      out[1] = s;
      out[2] = 0;
      out[3] = 0;
      out[4] = -s;
      out[5] = c;
      out[6] = 0;
      out[7] = 0;
      out[8] = 0;
      out[9] = 0;
      out[10] = 1;
      out[11] = 0;
      out[12] = 0;
      out[13] = 0;
      out[14] = 0;
      out[15] = 1;
      return out;
    }

    /**
     * Creates a matrix from a quaternion rotation and vector translation
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest);
     *     mat4.translate(dest, vec);
     *     let quatMat = mat4.create();
     *     quat4.toMat4(quat, quatMat);
     *     mat4.multiply(dest, quatMat);
     *
     * @param {mat4} out mat4 receiving operation result
     * @param {quat4} q Rotation quaternion
     * @param {vec3} v Translation vector
     * @returns {mat4} out
     */
    function fromRotationTranslation(out, q, v) {
      // Quaternion math
      var x = q[0],
          y = q[1],
          z = q[2],
          w = q[3];
      var x2 = x + x;
      var y2 = y + y;
      var z2 = z + z;

      var xx = x * x2;
      var xy = x * y2;
      var xz = x * z2;
      var yy = y * y2;
      var yz = y * z2;
      var zz = z * z2;
      var wx = w * x2;
      var wy = w * y2;
      var wz = w * z2;

      out[0] = 1 - (yy + zz);
      out[1] = xy + wz;
      out[2] = xz - wy;
      out[3] = 0;
      out[4] = xy - wz;
      out[5] = 1 - (xx + zz);
      out[6] = yz + wx;
      out[7] = 0;
      out[8] = xz + wy;
      out[9] = yz - wx;
      out[10] = 1 - (xx + yy);
      out[11] = 0;
      out[12] = v[0];
      out[13] = v[1];
      out[14] = v[2];
      out[15] = 1;

      return out;
    }

    /**
     * Creates a new mat4 from a dual quat.
     *
     * @param {mat4} out Matrix
     * @param {quat2} a Dual Quaternion
     * @returns {mat4} mat4 receiving operation result
     */
    function fromQuat2(out, a) {
      var translation = new ARRAY_TYPE(3);
      var bx = -a[0],
          by = -a[1],
          bz = -a[2],
          bw = a[3],
          ax = a[4],
          ay = a[5],
          az = a[6],
          aw = a[7];

      var magnitude = bx * bx + by * by + bz * bz + bw * bw;
      //Only scale if it makes sense
      if (magnitude > 0) {
        translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2 / magnitude;
        translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2 / magnitude;
        translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2 / magnitude;
      } else {
        translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
        translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
        translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
      }
      fromRotationTranslation(out, a, translation);
      return out;
    }

    /**
     * Returns the translation vector component of a transformation
     *  matrix. If a matrix is built with fromRotationTranslation,
     *  the returned vector will be the same as the translation vector
     *  originally supplied.
     * @param  {vec3} out Vector to receive translation component
     * @param  {mat4} mat Matrix to be decomposed (input)
     * @return {vec3} out
     */
    function getTranslation(out, mat) {
      out[0] = mat[12];
      out[1] = mat[13];
      out[2] = mat[14];

      return out;
    }

    /**
     * Returns the scaling factor component of a transformation
     *  matrix. If a matrix is built with fromRotationTranslationScale
     *  with a normalized Quaternion paramter, the returned vector will be
     *  the same as the scaling vector
     *  originally supplied.
     * @param  {vec3} out Vector to receive scaling factor component
     * @param  {mat4} mat Matrix to be decomposed (input)
     * @return {vec3} out
     */
    function getScaling(out, mat) {
      var m11 = mat[0];
      var m12 = mat[1];
      var m13 = mat[2];
      var m21 = mat[4];
      var m22 = mat[5];
      var m23 = mat[6];
      var m31 = mat[8];
      var m32 = mat[9];
      var m33 = mat[10];

      out[0] = Math.sqrt(m11 * m11 + m12 * m12 + m13 * m13);
      out[1] = Math.sqrt(m21 * m21 + m22 * m22 + m23 * m23);
      out[2] = Math.sqrt(m31 * m31 + m32 * m32 + m33 * m33);

      return out;
    }

    /**
     * Returns a quaternion representing the rotational component
     *  of a transformation matrix. If a matrix is built with
     *  fromRotationTranslation, the returned quaternion will be the
     *  same as the quaternion originally supplied.
     * @param {quat} out Quaternion to receive the rotation component
     * @param {mat4} mat Matrix to be decomposed (input)
     * @return {quat} out
     */
    function getRotation(out, mat) {
      // Algorithm taken from http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm
      var trace = mat[0] + mat[5] + mat[10];
      var S = 0;

      if (trace > 0) {
        S = Math.sqrt(trace + 1.0) * 2;
        out[3] = 0.25 * S;
        out[0] = (mat[6] - mat[9]) / S;
        out[1] = (mat[8] - mat[2]) / S;
        out[2] = (mat[1] - mat[4]) / S;
      } else if (mat[0] > mat[5] && mat[0] > mat[10]) {
        S = Math.sqrt(1.0 + mat[0] - mat[5] - mat[10]) * 2;
        out[3] = (mat[6] - mat[9]) / S;
        out[0] = 0.25 * S;
        out[1] = (mat[1] + mat[4]) / S;
        out[2] = (mat[8] + mat[2]) / S;
      } else if (mat[5] > mat[10]) {
        S = Math.sqrt(1.0 + mat[5] - mat[0] - mat[10]) * 2;
        out[3] = (mat[8] - mat[2]) / S;
        out[0] = (mat[1] + mat[4]) / S;
        out[1] = 0.25 * S;
        out[2] = (mat[6] + mat[9]) / S;
      } else {
        S = Math.sqrt(1.0 + mat[10] - mat[0] - mat[5]) * 2;
        out[3] = (mat[1] - mat[4]) / S;
        out[0] = (mat[8] + mat[2]) / S;
        out[1] = (mat[6] + mat[9]) / S;
        out[2] = 0.25 * S;
      }

      return out;
    }

    /**
     * Creates a matrix from a quaternion rotation, vector translation and vector scale
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest);
     *     mat4.translate(dest, vec);
     *     let quatMat = mat4.create();
     *     quat4.toMat4(quat, quatMat);
     *     mat4.multiply(dest, quatMat);
     *     mat4.scale(dest, scale)
     *
     * @param {mat4} out mat4 receiving operation result
     * @param {quat4} q Rotation quaternion
     * @param {vec3} v Translation vector
     * @param {vec3} s Scaling vector
     * @returns {mat4} out
     */
    function fromRotationTranslationScale(out, q, v, s) {
      // Quaternion math
      var x = q[0],
          y = q[1],
          z = q[2],
          w = q[3];
      var x2 = x + x;
      var y2 = y + y;
      var z2 = z + z;

      var xx = x * x2;
      var xy = x * y2;
      var xz = x * z2;
      var yy = y * y2;
      var yz = y * z2;
      var zz = z * z2;
      var wx = w * x2;
      var wy = w * y2;
      var wz = w * z2;
      var sx = s[0];
      var sy = s[1];
      var sz = s[2];

      out[0] = (1 - (yy + zz)) * sx;
      out[1] = (xy + wz) * sx;
      out[2] = (xz - wy) * sx;
      out[3] = 0;
      out[4] = (xy - wz) * sy;
      out[5] = (1 - (xx + zz)) * sy;
      out[6] = (yz + wx) * sy;
      out[7] = 0;
      out[8] = (xz + wy) * sz;
      out[9] = (yz - wx) * sz;
      out[10] = (1 - (xx + yy)) * sz;
      out[11] = 0;
      out[12] = v[0];
      out[13] = v[1];
      out[14] = v[2];
      out[15] = 1;

      return out;
    }

    /**
     * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest);
     *     mat4.translate(dest, vec);
     *     mat4.translate(dest, origin);
     *     let quatMat = mat4.create();
     *     quat4.toMat4(quat, quatMat);
     *     mat4.multiply(dest, quatMat);
     *     mat4.scale(dest, scale)
     *     mat4.translate(dest, negativeOrigin);
     *
     * @param {mat4} out mat4 receiving operation result
     * @param {quat4} q Rotation quaternion
     * @param {vec3} v Translation vector
     * @param {vec3} s Scaling vector
     * @param {vec3} o The origin vector around which to scale and rotate
     * @returns {mat4} out
     */
    function fromRotationTranslationScaleOrigin(out, q, v, s, o) {
      // Quaternion math
      var x = q[0],
          y = q[1],
          z = q[2],
          w = q[3];
      var x2 = x + x;
      var y2 = y + y;
      var z2 = z + z;

      var xx = x * x2;
      var xy = x * y2;
      var xz = x * z2;
      var yy = y * y2;
      var yz = y * z2;
      var zz = z * z2;
      var wx = w * x2;
      var wy = w * y2;
      var wz = w * z2;

      var sx = s[0];
      var sy = s[1];
      var sz = s[2];

      var ox = o[0];
      var oy = o[1];
      var oz = o[2];

      var out0 = (1 - (yy + zz)) * sx;
      var out1 = (xy + wz) * sx;
      var out2 = (xz - wy) * sx;
      var out4 = (xy - wz) * sy;
      var out5 = (1 - (xx + zz)) * sy;
      var out6 = (yz + wx) * sy;
      var out8 = (xz + wy) * sz;
      var out9 = (yz - wx) * sz;
      var out10 = (1 - (xx + yy)) * sz;

      out[0] = out0;
      out[1] = out1;
      out[2] = out2;
      out[3] = 0;
      out[4] = out4;
      out[5] = out5;
      out[6] = out6;
      out[7] = 0;
      out[8] = out8;
      out[9] = out9;
      out[10] = out10;
      out[11] = 0;
      out[12] = v[0] + ox - (out0 * ox + out4 * oy + out8 * oz);
      out[13] = v[1] + oy - (out1 * ox + out5 * oy + out9 * oz);
      out[14] = v[2] + oz - (out2 * ox + out6 * oy + out10 * oz);
      out[15] = 1;

      return out;
    }

    /**
     * Calculates a 4x4 matrix from the given quaternion
     *
     * @param {mat4} out mat4 receiving operation result
     * @param {quat} q Quaternion to create matrix from
     *
     * @returns {mat4} out
     */
    function fromQuat$1(out, q) {
      var x = q[0],
          y = q[1],
          z = q[2],
          w = q[3];
      var x2 = x + x;
      var y2 = y + y;
      var z2 = z + z;

      var xx = x * x2;
      var yx = y * x2;
      var yy = y * y2;
      var zx = z * x2;
      var zy = z * y2;
      var zz = z * z2;
      var wx = w * x2;
      var wy = w * y2;
      var wz = w * z2;

      out[0] = 1 - yy - zz;
      out[1] = yx + wz;
      out[2] = zx - wy;
      out[3] = 0;

      out[4] = yx - wz;
      out[5] = 1 - xx - zz;
      out[6] = zy + wx;
      out[7] = 0;

      out[8] = zx + wy;
      out[9] = zy - wx;
      out[10] = 1 - xx - yy;
      out[11] = 0;

      out[12] = 0;
      out[13] = 0;
      out[14] = 0;
      out[15] = 1;

      return out;
    }

    /**
     * Generates a frustum matrix with the given bounds
     *
     * @param {mat4} out mat4 frustum matrix will be written into
     * @param {Number} left Left bound of the frustum
     * @param {Number} right Right bound of the frustum
     * @param {Number} bottom Bottom bound of the frustum
     * @param {Number} top Top bound of the frustum
     * @param {Number} near Near bound of the frustum
     * @param {Number} far Far bound of the frustum
     * @returns {mat4} out
     */
    function frustum(out, left, right, bottom, top, near, far) {
      var rl = 1 / (right - left);
      var tb = 1 / (top - bottom);
      var nf = 1 / (near - far);
      out[0] = near * 2 * rl;
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
      out[4] = 0;
      out[5] = near * 2 * tb;
      out[6] = 0;
      out[7] = 0;
      out[8] = (right + left) * rl;
      out[9] = (top + bottom) * tb;
      out[10] = (far + near) * nf;
      out[11] = -1;
      out[12] = 0;
      out[13] = 0;
      out[14] = far * near * 2 * nf;
      out[15] = 0;
      return out;
    }

    /**
     * Generates a perspective projection matrix with the given bounds.
     * Passing null/undefined/no value for far will generate infinite projection matrix.
     *
     * @param {mat4} out mat4 frustum matrix will be written into
     * @param {number} fovy Vertical field of view in radians
     * @param {number} aspect Aspect ratio. typically viewport width/height
     * @param {number} near Near bound of the frustum
     * @param {number} far Far bound of the frustum, can be null or Infinity
     * @returns {mat4} out
     */
    function perspective(out, fovy, aspect, near, far) {
      var f = 1.0 / Math.tan(fovy / 2),
          nf = void 0;
      out[0] = f / aspect;
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
      out[4] = 0;
      out[5] = f;
      out[6] = 0;
      out[7] = 0;
      out[8] = 0;
      out[9] = 0;
      out[11] = -1;
      out[12] = 0;
      out[13] = 0;
      out[15] = 0;
      if (far != null && far !== Infinity) {
        nf = 1 / (near - far);
        out[10] = (far + near) * nf;
        out[14] = 2 * far * near * nf;
      } else {
        out[10] = -1;
        out[14] = -2 * near;
      }
      return out;
    }

    /**
     * Generates a perspective projection matrix with the given field of view.
     * This is primarily useful for generating projection matrices to be used
     * with the still experiemental WebVR API.
     *
     * @param {mat4} out mat4 frustum matrix will be written into
     * @param {Object} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
     * @param {number} near Near bound of the frustum
     * @param {number} far Far bound of the frustum
     * @returns {mat4} out
     */
    function perspectiveFromFieldOfView(out, fov, near, far) {
      var upTan = Math.tan(fov.upDegrees * Math.PI / 180.0);
      var downTan = Math.tan(fov.downDegrees * Math.PI / 180.0);
      var leftTan = Math.tan(fov.leftDegrees * Math.PI / 180.0);
      var rightTan = Math.tan(fov.rightDegrees * Math.PI / 180.0);
      var xScale = 2.0 / (leftTan + rightTan);
      var yScale = 2.0 / (upTan + downTan);

      out[0] = xScale;
      out[1] = 0.0;
      out[2] = 0.0;
      out[3] = 0.0;
      out[4] = 0.0;
      out[5] = yScale;
      out[6] = 0.0;
      out[7] = 0.0;
      out[8] = -((leftTan - rightTan) * xScale * 0.5);
      out[9] = (upTan - downTan) * yScale * 0.5;
      out[10] = far / (near - far);
      out[11] = -1.0;
      out[12] = 0.0;
      out[13] = 0.0;
      out[14] = far * near / (near - far);
      out[15] = 0.0;
      return out;
    }

    /**
     * Generates a orthogonal projection matrix with the given bounds
     *
     * @param {mat4} out mat4 frustum matrix will be written into
     * @param {number} left Left bound of the frustum
     * @param {number} right Right bound of the frustum
     * @param {number} bottom Bottom bound of the frustum
     * @param {number} top Top bound of the frustum
     * @param {number} near Near bound of the frustum
     * @param {number} far Far bound of the frustum
     * @returns {mat4} out
     */
    function ortho(out, left, right, bottom, top, near, far) {
      var lr = 1 / (left - right);
      var bt = 1 / (bottom - top);
      var nf = 1 / (near - far);
      out[0] = -2 * lr;
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
      out[4] = 0;
      out[5] = -2 * bt;
      out[6] = 0;
      out[7] = 0;
      out[8] = 0;
      out[9] = 0;
      out[10] = 2 * nf;
      out[11] = 0;
      out[12] = (left + right) * lr;
      out[13] = (top + bottom) * bt;
      out[14] = (far + near) * nf;
      out[15] = 1;
      return out;
    }

    /**
     * Generates a look-at matrix with the given eye position, focal point, and up axis.
     * If you want a matrix that actually makes an object look at another object, you should use targetTo instead.
     *
     * @param {mat4} out mat4 frustum matrix will be written into
     * @param {vec3} eye Position of the viewer
     * @param {vec3} center Point the viewer is looking at
     * @param {vec3} up vec3 pointing up
     * @returns {mat4} out
     */
    function lookAt(out, eye, center, up) {
      var x0 = void 0,
          x1 = void 0,
          x2 = void 0,
          y0 = void 0,
          y1 = void 0,
          y2 = void 0,
          z0 = void 0,
          z1 = void 0,
          z2 = void 0,
          len = void 0;
      var eyex = eye[0];
      var eyey = eye[1];
      var eyez = eye[2];
      var upx = up[0];
      var upy = up[1];
      var upz = up[2];
      var centerx = center[0];
      var centery = center[1];
      var centerz = center[2];

      if (Math.abs(eyex - centerx) < EPSILON && Math.abs(eyey - centery) < EPSILON && Math.abs(eyez - centerz) < EPSILON) {
        return identity$1(out);
      }

      z0 = eyex - centerx;
      z1 = eyey - centery;
      z2 = eyez - centerz;

      len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
      z0 *= len;
      z1 *= len;
      z2 *= len;

      x0 = upy * z2 - upz * z1;
      x1 = upz * z0 - upx * z2;
      x2 = upx * z1 - upy * z0;
      len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
      if (!len) {
        x0 = 0;
        x1 = 0;
        x2 = 0;
      } else {
        len = 1 / len;
        x0 *= len;
        x1 *= len;
        x2 *= len;
      }

      y0 = z1 * x2 - z2 * x1;
      y1 = z2 * x0 - z0 * x2;
      y2 = z0 * x1 - z1 * x0;

      len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
      if (!len) {
        y0 = 0;
        y1 = 0;
        y2 = 0;
      } else {
        len = 1 / len;
        y0 *= len;
        y1 *= len;
        y2 *= len;
      }

      out[0] = x0;
      out[1] = y0;
      out[2] = z0;
      out[3] = 0;
      out[4] = x1;
      out[5] = y1;
      out[6] = z1;
      out[7] = 0;
      out[8] = x2;
      out[9] = y2;
      out[10] = z2;
      out[11] = 0;
      out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
      out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
      out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
      out[15] = 1;

      return out;
    }

    /**
     * Generates a matrix that makes something look at something else.
     *
     * @param {mat4} out mat4 frustum matrix will be written into
     * @param {vec3} eye Position of the viewer
     * @param {vec3} center Point the viewer is looking at
     * @param {vec3} up vec3 pointing up
     * @returns {mat4} out
     */
    function targetTo(out, eye, target, up) {
      var eyex = eye[0],
          eyey = eye[1],
          eyez = eye[2],
          upx = up[0],
          upy = up[1],
          upz = up[2];

      var z0 = eyex - target[0],
          z1 = eyey - target[1],
          z2 = eyez - target[2];

      var len = z0 * z0 + z1 * z1 + z2 * z2;
      if (len > 0) {
        len = 1 / Math.sqrt(len);
        z0 *= len;
        z1 *= len;
        z2 *= len;
      }

      var x0 = upy * z2 - upz * z1,
          x1 = upz * z0 - upx * z2,
          x2 = upx * z1 - upy * z0;

      len = x0 * x0 + x1 * x1 + x2 * x2;
      if (len > 0) {
        len = 1 / Math.sqrt(len);
        x0 *= len;
        x1 *= len;
        x2 *= len;
      }

      out[0] = x0;
      out[1] = x1;
      out[2] = x2;
      out[3] = 0;
      out[4] = z1 * x2 - z2 * x1;
      out[5] = z2 * x0 - z0 * x2;
      out[6] = z0 * x1 - z1 * x0;
      out[7] = 0;
      out[8] = z0;
      out[9] = z1;
      out[10] = z2;
      out[11] = 0;
      out[12] = eyex;
      out[13] = eyey;
      out[14] = eyez;
      out[15] = 1;
      return out;
    }
    /**
     * Returns a string representation of a mat4
     *
     * @param {mat4} a matrix to represent as a string
     * @returns {String} string representation of the matrix
     */
    function str$1(a) {
      return 'mat4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' + a[8] + ', ' + a[9] + ', ' + a[10] + ', ' + a[11] + ', ' + a[12] + ', ' + a[13] + ', ' + a[14] + ', ' + a[15] + ')';
    }

    /**
     * Returns Frobenius norm of a mat4
     *
     * @param {mat4} a the matrix to calculate Frobenius norm of
     * @returns {Number} Frobenius norm
     */
    function frob$1(a) {
      return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2) + Math.pow(a[9], 2) + Math.pow(a[10], 2) + Math.pow(a[11], 2) + Math.pow(a[12], 2) + Math.pow(a[13], 2) + Math.pow(a[14], 2) + Math.pow(a[15], 2));
    }

    /**
     * Adds two mat4's
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the first operand
     * @param {mat4} b the second operand
     * @returns {mat4} out
     */
    function add$1(out, a, b) {
      out[0] = a[0] + b[0];
      out[1] = a[1] + b[1];
      out[2] = a[2] + b[2];
      out[3] = a[3] + b[3];
      out[4] = a[4] + b[4];
      out[5] = a[5] + b[5];
      out[6] = a[6] + b[6];
      out[7] = a[7] + b[7];
      out[8] = a[8] + b[8];
      out[9] = a[9] + b[9];
      out[10] = a[10] + b[10];
      out[11] = a[11] + b[11];
      out[12] = a[12] + b[12];
      out[13] = a[13] + b[13];
      out[14] = a[14] + b[14];
      out[15] = a[15] + b[15];
      return out;
    }

    /**
     * Subtracts matrix b from matrix a
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the first operand
     * @param {mat4} b the second operand
     * @returns {mat4} out
     */
    function subtract$1(out, a, b) {
      out[0] = a[0] - b[0];
      out[1] = a[1] - b[1];
      out[2] = a[2] - b[2];
      out[3] = a[3] - b[3];
      out[4] = a[4] - b[4];
      out[5] = a[5] - b[5];
      out[6] = a[6] - b[6];
      out[7] = a[7] - b[7];
      out[8] = a[8] - b[8];
      out[9] = a[9] - b[9];
      out[10] = a[10] - b[10];
      out[11] = a[11] - b[11];
      out[12] = a[12] - b[12];
      out[13] = a[13] - b[13];
      out[14] = a[14] - b[14];
      out[15] = a[15] - b[15];
      return out;
    }

    /**
     * Multiply each element of the matrix by a scalar.
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the matrix to scale
     * @param {Number} b amount to scale the matrix's elements by
     * @returns {mat4} out
     */
    function multiplyScalar$1(out, a, b) {
      out[0] = a[0] * b;
      out[1] = a[1] * b;
      out[2] = a[2] * b;
      out[3] = a[3] * b;
      out[4] = a[4] * b;
      out[5] = a[5] * b;
      out[6] = a[6] * b;
      out[7] = a[7] * b;
      out[8] = a[8] * b;
      out[9] = a[9] * b;
      out[10] = a[10] * b;
      out[11] = a[11] * b;
      out[12] = a[12] * b;
      out[13] = a[13] * b;
      out[14] = a[14] * b;
      out[15] = a[15] * b;
      return out;
    }

    /**
     * Adds two mat4's after multiplying each element of the second operand by a scalar value.
     *
     * @param {mat4} out the receiving vector
     * @param {mat4} a the first operand
     * @param {mat4} b the second operand
     * @param {Number} scale the amount to scale b's elements by before adding
     * @returns {mat4} out
     */
    function multiplyScalarAndAdd$1(out, a, b, scale) {
      out[0] = a[0] + b[0] * scale;
      out[1] = a[1] + b[1] * scale;
      out[2] = a[2] + b[2] * scale;
      out[3] = a[3] + b[3] * scale;
      out[4] = a[4] + b[4] * scale;
      out[5] = a[5] + b[5] * scale;
      out[6] = a[6] + b[6] * scale;
      out[7] = a[7] + b[7] * scale;
      out[8] = a[8] + b[8] * scale;
      out[9] = a[9] + b[9] * scale;
      out[10] = a[10] + b[10] * scale;
      out[11] = a[11] + b[11] * scale;
      out[12] = a[12] + b[12] * scale;
      out[13] = a[13] + b[13] * scale;
      out[14] = a[14] + b[14] * scale;
      out[15] = a[15] + b[15] * scale;
      return out;
    }

    /**
     * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
     *
     * @param {mat4} a The first matrix.
     * @param {mat4} b The second matrix.
     * @returns {Boolean} True if the matrices are equal, false otherwise.
     */
    function exactEquals$1(a, b) {
      return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] && a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
    }

    /**
     * Returns whether or not the matrices have approximately the same elements in the same position.
     *
     * @param {mat4} a The first matrix.
     * @param {mat4} b The second matrix.
     * @returns {Boolean} True if the matrices are equal, false otherwise.
     */
    function equals$1(a, b) {
      var a0 = a[0],
          a1 = a[1],
          a2 = a[2],
          a3 = a[3];
      var a4 = a[4],
          a5 = a[5],
          a6 = a[6],
          a7 = a[7];
      var a8 = a[8],
          a9 = a[9],
          a10 = a[10],
          a11 = a[11];
      var a12 = a[12],
          a13 = a[13],
          a14 = a[14],
          a15 = a[15];

      var b0 = b[0],
          b1 = b[1],
          b2 = b[2],
          b3 = b[3];
      var b4 = b[4],
          b5 = b[5],
          b6 = b[6],
          b7 = b[7];
      var b8 = b[8],
          b9 = b[9],
          b10 = b[10],
          b11 = b[11];
      var b12 = b[12],
          b13 = b[13],
          b14 = b[14],
          b15 = b[15];

      return Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= EPSILON * Math.max(1.0, Math.abs(a8), Math.abs(b8)) && Math.abs(a9 - b9) <= EPSILON * Math.max(1.0, Math.abs(a9), Math.abs(b9)) && Math.abs(a10 - b10) <= EPSILON * Math.max(1.0, Math.abs(a10), Math.abs(b10)) && Math.abs(a11 - b11) <= EPSILON * Math.max(1.0, Math.abs(a11), Math.abs(b11)) && Math.abs(a12 - b12) <= EPSILON * Math.max(1.0, Math.abs(a12), Math.abs(b12)) && Math.abs(a13 - b13) <= EPSILON * Math.max(1.0, Math.abs(a13), Math.abs(b13)) && Math.abs(a14 - b14) <= EPSILON * Math.max(1.0, Math.abs(a14), Math.abs(b14)) && Math.abs(a15 - b15) <= EPSILON * Math.max(1.0, Math.abs(a15), Math.abs(b15));
    }

    /**
     * Alias for {@link mat4.multiply}
     * @function
     */
    var mul$1 = multiply$1;

    /**
     * Alias for {@link mat4.subtract}
     * @function
     */
    var sub$1 = subtract$1;

    var mat4 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        create: create$1,
        clone: clone$1,
        copy: copy$1,
        fromValues: fromValues$1,
        set: set$1,
        identity: identity$1,
        transpose: transpose$1,
        invert: invert$1,
        adjoint: adjoint$1,
        determinant: determinant$1,
        multiply: multiply$1,
        translate: translate$1,
        scale: scale$1,
        rotate: rotate$1,
        rotateX: rotateX,
        rotateY: rotateY,
        rotateZ: rotateZ,
        fromTranslation: fromTranslation$1,
        fromScaling: fromScaling$1,
        fromRotation: fromRotation$1,
        fromXRotation: fromXRotation,
        fromYRotation: fromYRotation,
        fromZRotation: fromZRotation,
        fromRotationTranslation: fromRotationTranslation,
        fromQuat2: fromQuat2,
        getTranslation: getTranslation,
        getScaling: getScaling,
        getRotation: getRotation,
        fromRotationTranslationScale: fromRotationTranslationScale,
        fromRotationTranslationScaleOrigin: fromRotationTranslationScaleOrigin,
        fromQuat: fromQuat$1,
        frustum: frustum,
        perspective: perspective,
        perspectiveFromFieldOfView: perspectiveFromFieldOfView,
        ortho: ortho,
        lookAt: lookAt,
        targetTo: targetTo,
        str: str$1,
        frob: frob$1,
        add: add$1,
        subtract: subtract$1,
        multiplyScalar: multiplyScalar$1,
        multiplyScalarAndAdd: multiplyScalarAndAdd$1,
        exactEquals: exactEquals$1,
        equals: equals$1,
        mul: mul$1,
        sub: sub$1
    });

    /**
     * 3 Dimensional Vector
     * @module vec3
     */

    /**
     * Creates a new, empty vec3
     *
     * @returns {vec3} a new 3D vector
     */
    function create$2() {
      var out = new ARRAY_TYPE(3);
      if (ARRAY_TYPE != Float32Array) {
        out[0] = 0;
        out[1] = 0;
        out[2] = 0;
      }
      return out;
    }

    /**
     * Creates a new vec3 initialized with values from an existing vector
     *
     * @param {vec3} a vector to clone
     * @returns {vec3} a new 3D vector
     */
    function clone$2(a) {
      var out = new ARRAY_TYPE(3);
      out[0] = a[0];
      out[1] = a[1];
      out[2] = a[2];
      return out;
    }

    /**
     * Calculates the length of a vec3
     *
     * @param {vec3} a vector to calculate length of
     * @returns {Number} length of a
     */
    function length(a) {
      var x = a[0];
      var y = a[1];
      var z = a[2];
      return Math.sqrt(x * x + y * y + z * z);
    }

    /**
     * Creates a new vec3 initialized with the given values
     *
     * @param {Number} x X component
     * @param {Number} y Y component
     * @param {Number} z Z component
     * @returns {vec3} a new 3D vector
     */
    function fromValues$2(x, y, z) {
      var out = new ARRAY_TYPE(3);
      out[0] = x;
      out[1] = y;
      out[2] = z;
      return out;
    }

    /**
     * Copy the values from one vec3 to another
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the source vector
     * @returns {vec3} out
     */
    function copy$2(out, a) {
      out[0] = a[0];
      out[1] = a[1];
      out[2] = a[2];
      return out;
    }

    /**
     * Set the components of a vec3 to the given values
     *
     * @param {vec3} out the receiving vector
     * @param {Number} x X component
     * @param {Number} y Y component
     * @param {Number} z Z component
     * @returns {vec3} out
     */
    function set$2(out, x, y, z) {
      out[0] = x;
      out[1] = y;
      out[2] = z;
      return out;
    }

    /**
     * Adds two vec3's
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {vec3} out
     */
    function add$2(out, a, b) {
      out[0] = a[0] + b[0];
      out[1] = a[1] + b[1];
      out[2] = a[2] + b[2];
      return out;
    }

    /**
     * Subtracts vector b from vector a
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {vec3} out
     */
    function subtract$2(out, a, b) {
      out[0] = a[0] - b[0];
      out[1] = a[1] - b[1];
      out[2] = a[2] - b[2];
      return out;
    }

    /**
     * Multiplies two vec3's
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {vec3} out
     */
    function multiply$2(out, a, b) {
      out[0] = a[0] * b[0];
      out[1] = a[1] * b[1];
      out[2] = a[2] * b[2];
      return out;
    }

    /**
     * Divides two vec3's
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {vec3} out
     */
    function divide(out, a, b) {
      out[0] = a[0] / b[0];
      out[1] = a[1] / b[1];
      out[2] = a[2] / b[2];
      return out;
    }

    /**
     * Math.ceil the components of a vec3
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a vector to ceil
     * @returns {vec3} out
     */
    function ceil(out, a) {
      out[0] = Math.ceil(a[0]);
      out[1] = Math.ceil(a[1]);
      out[2] = Math.ceil(a[2]);
      return out;
    }

    /**
     * Math.floor the components of a vec3
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a vector to floor
     * @returns {vec3} out
     */
    function floor(out, a) {
      out[0] = Math.floor(a[0]);
      out[1] = Math.floor(a[1]);
      out[2] = Math.floor(a[2]);
      return out;
    }

    /**
     * Returns the minimum of two vec3's
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {vec3} out
     */
    function min(out, a, b) {
      out[0] = Math.min(a[0], b[0]);
      out[1] = Math.min(a[1], b[1]);
      out[2] = Math.min(a[2], b[2]);
      return out;
    }

    /**
     * Returns the maximum of two vec3's
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {vec3} out
     */
    function max(out, a, b) {
      out[0] = Math.max(a[0], b[0]);
      out[1] = Math.max(a[1], b[1]);
      out[2] = Math.max(a[2], b[2]);
      return out;
    }

    /**
     * Math.round the components of a vec3
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a vector to round
     * @returns {vec3} out
     */
    function round(out, a) {
      out[0] = Math.round(a[0]);
      out[1] = Math.round(a[1]);
      out[2] = Math.round(a[2]);
      return out;
    }

    /**
     * Scales a vec3 by a scalar number
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the vector to scale
     * @param {Number} b amount to scale the vector by
     * @returns {vec3} out
     */
    function scale$2(out, a, b) {
      out[0] = a[0] * b;
      out[1] = a[1] * b;
      out[2] = a[2] * b;
      return out;
    }

    /**
     * Adds two vec3's after scaling the second operand by a scalar value
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @param {Number} scale the amount to scale b by before adding
     * @returns {vec3} out
     */
    function scaleAndAdd(out, a, b, scale) {
      out[0] = a[0] + b[0] * scale;
      out[1] = a[1] + b[1] * scale;
      out[2] = a[2] + b[2] * scale;
      return out;
    }

    /**
     * Calculates the euclidian distance between two vec3's
     *
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {Number} distance between a and b
     */
    function distance(a, b) {
      var x = b[0] - a[0];
      var y = b[1] - a[1];
      var z = b[2] - a[2];
      return Math.sqrt(x * x + y * y + z * z);
    }

    /**
     * Calculates the squared euclidian distance between two vec3's
     *
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {Number} squared distance between a and b
     */
    function squaredDistance(a, b) {
      var x = b[0] - a[0];
      var y = b[1] - a[1];
      var z = b[2] - a[2];
      return x * x + y * y + z * z;
    }

    /**
     * Calculates the squared length of a vec3
     *
     * @param {vec3} a vector to calculate squared length of
     * @returns {Number} squared length of a
     */
    function squaredLength(a) {
      var x = a[0];
      var y = a[1];
      var z = a[2];
      return x * x + y * y + z * z;
    }

    /**
     * Negates the components of a vec3
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a vector to negate
     * @returns {vec3} out
     */
    function negate(out, a) {
      out[0] = -a[0];
      out[1] = -a[1];
      out[2] = -a[2];
      return out;
    }

    /**
     * Returns the inverse of the components of a vec3
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a vector to invert
     * @returns {vec3} out
     */
    function inverse(out, a) {
      out[0] = 1.0 / a[0];
      out[1] = 1.0 / a[1];
      out[2] = 1.0 / a[2];
      return out;
    }

    /**
     * Normalize a vec3
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a vector to normalize
     * @returns {vec3} out
     */
    function normalize(out, a) {
      var x = a[0];
      var y = a[1];
      var z = a[2];
      var len = x * x + y * y + z * z;
      if (len > 0) {
        //TODO: evaluate use of glm_invsqrt here?
        len = 1 / Math.sqrt(len);
        out[0] = a[0] * len;
        out[1] = a[1] * len;
        out[2] = a[2] * len;
      }
      return out;
    }

    /**
     * Calculates the dot product of two vec3's
     *
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {Number} dot product of a and b
     */
    function dot(a, b) {
      return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
    }

    /**
     * Computes the cross product of two vec3's
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {vec3} out
     */
    function cross(out, a, b) {
      var ax = a[0],
          ay = a[1],
          az = a[2];
      var bx = b[0],
          by = b[1],
          bz = b[2];

      out[0] = ay * bz - az * by;
      out[1] = az * bx - ax * bz;
      out[2] = ax * by - ay * bx;
      return out;
    }

    /**
     * Performs a linear interpolation between two vec3's
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
     * @returns {vec3} out
     */
    function lerp(out, a, b, t) {
      var ax = a[0];
      var ay = a[1];
      var az = a[2];
      out[0] = ax + t * (b[0] - ax);
      out[1] = ay + t * (b[1] - ay);
      out[2] = az + t * (b[2] - az);
      return out;
    }

    /**
     * Performs a hermite interpolation with two control points
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @param {vec3} c the third operand
     * @param {vec3} d the fourth operand
     * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
     * @returns {vec3} out
     */
    function hermite(out, a, b, c, d, t) {
      var factorTimes2 = t * t;
      var factor1 = factorTimes2 * (2 * t - 3) + 1;
      var factor2 = factorTimes2 * (t - 2) + t;
      var factor3 = factorTimes2 * (t - 1);
      var factor4 = factorTimes2 * (3 - 2 * t);

      out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
      out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
      out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;

      return out;
    }

    /**
     * Performs a bezier interpolation with two control points
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @param {vec3} c the third operand
     * @param {vec3} d the fourth operand
     * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
     * @returns {vec3} out
     */
    function bezier(out, a, b, c, d, t) {
      var inverseFactor = 1 - t;
      var inverseFactorTimesTwo = inverseFactor * inverseFactor;
      var factorTimes2 = t * t;
      var factor1 = inverseFactorTimesTwo * inverseFactor;
      var factor2 = 3 * t * inverseFactorTimesTwo;
      var factor3 = 3 * factorTimes2 * inverseFactor;
      var factor4 = factorTimes2 * t;

      out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
      out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
      out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;

      return out;
    }

    /**
     * Generates a random vector with the given scale
     *
     * @param {vec3} out the receiving vector
     * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
     * @returns {vec3} out
     */
    function random(out, scale) {
      scale = scale || 1.0;

      var r = RANDOM() * 2.0 * Math.PI;
      var z = RANDOM() * 2.0 - 1.0;
      var zScale = Math.sqrt(1.0 - z * z) * scale;

      out[0] = Math.cos(r) * zScale;
      out[1] = Math.sin(r) * zScale;
      out[2] = z * scale;
      return out;
    }

    /**
     * Transforms the vec3 with a mat4.
     * 4th vector component is implicitly '1'
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the vector to transform
     * @param {mat4} m matrix to transform with
     * @returns {vec3} out
     */
    function transformMat4(out, a, m) {
      var x = a[0],
          y = a[1],
          z = a[2];
      var w = m[3] * x + m[7] * y + m[11] * z + m[15];
      w = w || 1.0;
      out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
      out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
      out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
      return out;
    }

    /**
     * Transforms the vec3 with a mat3.
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the vector to transform
     * @param {mat3} m the 3x3 matrix to transform with
     * @returns {vec3} out
     */
    function transformMat3(out, a, m) {
      var x = a[0],
          y = a[1],
          z = a[2];
      out[0] = x * m[0] + y * m[3] + z * m[6];
      out[1] = x * m[1] + y * m[4] + z * m[7];
      out[2] = x * m[2] + y * m[5] + z * m[8];
      return out;
    }

    /**
     * Transforms the vec3 with a quat
     * Can also be used for dual quaternions. (Multiply it with the real part)
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the vector to transform
     * @param {quat} q quaternion to transform with
     * @returns {vec3} out
     */
    function transformQuat(out, a, q) {
      // benchmarks: https://jsperf.com/quaternion-transform-vec3-implementations-fixed
      var qx = q[0],
          qy = q[1],
          qz = q[2],
          qw = q[3];
      var x = a[0],
          y = a[1],
          z = a[2];
      // var qvec = [qx, qy, qz];
      // var uv = vec3.cross([], qvec, a);
      var uvx = qy * z - qz * y,
          uvy = qz * x - qx * z,
          uvz = qx * y - qy * x;
      // var uuv = vec3.cross([], qvec, uv);
      var uuvx = qy * uvz - qz * uvy,
          uuvy = qz * uvx - qx * uvz,
          uuvz = qx * uvy - qy * uvx;
      // vec3.scale(uv, uv, 2 * w);
      var w2 = qw * 2;
      uvx *= w2;
      uvy *= w2;
      uvz *= w2;
      // vec3.scale(uuv, uuv, 2);
      uuvx *= 2;
      uuvy *= 2;
      uuvz *= 2;
      // return vec3.add(out, a, vec3.add(out, uv, uuv));
      out[0] = x + uvx + uuvx;
      out[1] = y + uvy + uuvy;
      out[2] = z + uvz + uuvz;
      return out;
    }

    /**
     * Rotate a 3D vector around the x-axis
     * @param {vec3} out The receiving vec3
     * @param {vec3} a The vec3 point to rotate
     * @param {vec3} b The origin of the rotation
     * @param {Number} c The angle of rotation
     * @returns {vec3} out
     */
    function rotateX$1(out, a, b, c) {
      var p = [],
          r = [];
      //Translate point to the origin
      p[0] = a[0] - b[0];
      p[1] = a[1] - b[1];
      p[2] = a[2] - b[2];

      //perform rotation
      r[0] = p[0];
      r[1] = p[1] * Math.cos(c) - p[2] * Math.sin(c);
      r[2] = p[1] * Math.sin(c) + p[2] * Math.cos(c);

      //translate to correct position
      out[0] = r[0] + b[0];
      out[1] = r[1] + b[1];
      out[2] = r[2] + b[2];

      return out;
    }

    /**
     * Rotate a 3D vector around the y-axis
     * @param {vec3} out The receiving vec3
     * @param {vec3} a The vec3 point to rotate
     * @param {vec3} b The origin of the rotation
     * @param {Number} c The angle of rotation
     * @returns {vec3} out
     */
    function rotateY$1(out, a, b, c) {
      var p = [],
          r = [];
      //Translate point to the origin
      p[0] = a[0] - b[0];
      p[1] = a[1] - b[1];
      p[2] = a[2] - b[2];

      //perform rotation
      r[0] = p[2] * Math.sin(c) + p[0] * Math.cos(c);
      r[1] = p[1];
      r[2] = p[2] * Math.cos(c) - p[0] * Math.sin(c);

      //translate to correct position
      out[0] = r[0] + b[0];
      out[1] = r[1] + b[1];
      out[2] = r[2] + b[2];

      return out;
    }

    /**
     * Rotate a 3D vector around the z-axis
     * @param {vec3} out The receiving vec3
     * @param {vec3} a The vec3 point to rotate
     * @param {vec3} b The origin of the rotation
     * @param {Number} c The angle of rotation
     * @returns {vec3} out
     */
    function rotateZ$1(out, a, b, c) {
      var p = [],
          r = [];
      //Translate point to the origin
      p[0] = a[0] - b[0];
      p[1] = a[1] - b[1];
      p[2] = a[2] - b[2];

      //perform rotation
      r[0] = p[0] * Math.cos(c) - p[1] * Math.sin(c);
      r[1] = p[0] * Math.sin(c) + p[1] * Math.cos(c);
      r[2] = p[2];

      //translate to correct position
      out[0] = r[0] + b[0];
      out[1] = r[1] + b[1];
      out[2] = r[2] + b[2];

      return out;
    }

    /**
     * Get the angle between two 3D vectors
     * @param {vec3} a The first operand
     * @param {vec3} b The second operand
     * @returns {Number} The angle in radians
     */
    function angle(a, b) {
      var tempA = fromValues$2(a[0], a[1], a[2]);
      var tempB = fromValues$2(b[0], b[1], b[2]);

      normalize(tempA, tempA);
      normalize(tempB, tempB);

      var cosine = dot(tempA, tempB);

      if (cosine > 1.0) {
        return 0;
      } else if (cosine < -1.0) {
        return Math.PI;
      } else {
        return Math.acos(cosine);
      }
    }

    /**
     * Returns a string representation of a vector
     *
     * @param {vec3} a vector to represent as a string
     * @returns {String} string representation of the vector
     */
    function str$2(a) {
      return 'vec3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ')';
    }

    /**
     * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
     *
     * @param {vec3} a The first vector.
     * @param {vec3} b The second vector.
     * @returns {Boolean} True if the vectors are equal, false otherwise.
     */
    function exactEquals$2(a, b) {
      return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
    }

    /**
     * Returns whether or not the vectors have approximately the same elements in the same position.
     *
     * @param {vec3} a The first vector.
     * @param {vec3} b The second vector.
     * @returns {Boolean} True if the vectors are equal, false otherwise.
     */
    function equals$2(a, b) {
      var a0 = a[0],
          a1 = a[1],
          a2 = a[2];
      var b0 = b[0],
          b1 = b[1],
          b2 = b[2];
      return Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2));
    }

    /**
     * Alias for {@link vec3.subtract}
     * @function
     */
    var sub$2 = subtract$2;

    /**
     * Alias for {@link vec3.multiply}
     * @function
     */
    var mul$2 = multiply$2;

    /**
     * Alias for {@link vec3.divide}
     * @function
     */
    var div = divide;

    /**
     * Alias for {@link vec3.distance}
     * @function
     */
    var dist = distance;

    /**
     * Alias for {@link vec3.squaredDistance}
     * @function
     */
    var sqrDist = squaredDistance;

    /**
     * Alias for {@link vec3.length}
     * @function
     */
    var len = length;

    /**
     * Alias for {@link vec3.squaredLength}
     * @function
     */
    var sqrLen = squaredLength;

    /**
     * Perform some operation over an array of vec3s.
     *
     * @param {Array} a the array of vectors to iterate over
     * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
     * @param {Number} offset Number of elements to skip at the beginning of the array
     * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
     * @param {Function} fn Function to call for each vector in the array
     * @param {Object} [arg] additional argument to pass to fn
     * @returns {Array} a
     * @function
     */
    var forEach = function () {
      var vec = create$2();

      return function (a, stride, offset, count, fn, arg) {
        var i = void 0,
            l = void 0;
        if (!stride) {
          stride = 3;
        }

        if (!offset) {
          offset = 0;
        }

        if (count) {
          l = Math.min(count * stride + offset, a.length);
        } else {
          l = a.length;
        }

        for (i = offset; i < l; i += stride) {
          vec[0] = a[i];vec[1] = a[i + 1];vec[2] = a[i + 2];
          fn(vec, vec, arg);
          a[i] = vec[0];a[i + 1] = vec[1];a[i + 2] = vec[2];
        }

        return a;
      };
    }();

    var vec3 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        create: create$2,
        clone: clone$2,
        length: length,
        fromValues: fromValues$2,
        copy: copy$2,
        set: set$2,
        add: add$2,
        subtract: subtract$2,
        multiply: multiply$2,
        divide: divide,
        ceil: ceil,
        floor: floor,
        min: min,
        max: max,
        round: round,
        scale: scale$2,
        scaleAndAdd: scaleAndAdd,
        distance: distance,
        squaredDistance: squaredDistance,
        squaredLength: squaredLength,
        negate: negate,
        inverse: inverse,
        normalize: normalize,
        dot: dot,
        cross: cross,
        lerp: lerp,
        hermite: hermite,
        bezier: bezier,
        random: random,
        transformMat4: transformMat4,
        transformMat3: transformMat3,
        transformQuat: transformQuat,
        rotateX: rotateX$1,
        rotateY: rotateY$1,
        rotateZ: rotateZ$1,
        angle: angle,
        str: str$2,
        exactEquals: exactEquals$2,
        equals: equals$2,
        sub: sub$2,
        mul: mul$2,
        div: div,
        dist: dist,
        sqrDist: sqrDist,
        len: len,
        sqrLen: sqrLen,
        forEach: forEach
    });

    /**
     * 4 Dimensional Vector
     * @module vec4
     */

    /**
     * Creates a new, empty vec4
     *
     * @returns {vec4} a new 4D vector
     */
    function create$3() {
      var out = new ARRAY_TYPE(4);
      if (ARRAY_TYPE != Float32Array) {
        out[0] = 0;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
      }
      return out;
    }

    /**
     * Creates a new vec4 initialized with values from an existing vector
     *
     * @param {vec4} a vector to clone
     * @returns {vec4} a new 4D vector
     */
    function clone$3(a) {
      var out = new ARRAY_TYPE(4);
      out[0] = a[0];
      out[1] = a[1];
      out[2] = a[2];
      out[3] = a[3];
      return out;
    }

    /**
     * Creates a new vec4 initialized with the given values
     *
     * @param {Number} x X component
     * @param {Number} y Y component
     * @param {Number} z Z component
     * @param {Number} w W component
     * @returns {vec4} a new 4D vector
     */
    function fromValues$3(x, y, z, w) {
      var out = new ARRAY_TYPE(4);
      out[0] = x;
      out[1] = y;
      out[2] = z;
      out[3] = w;
      return out;
    }

    /**
     * Copy the values from one vec4 to another
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a the source vector
     * @returns {vec4} out
     */
    function copy$3(out, a) {
      out[0] = a[0];
      out[1] = a[1];
      out[2] = a[2];
      out[3] = a[3];
      return out;
    }

    /**
     * Set the components of a vec4 to the given values
     *
     * @param {vec4} out the receiving vector
     * @param {Number} x X component
     * @param {Number} y Y component
     * @param {Number} z Z component
     * @param {Number} w W component
     * @returns {vec4} out
     */
    function set$3(out, x, y, z, w) {
      out[0] = x;
      out[1] = y;
      out[2] = z;
      out[3] = w;
      return out;
    }

    /**
     * Adds two vec4's
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a the first operand
     * @param {vec4} b the second operand
     * @returns {vec4} out
     */
    function add$3(out, a, b) {
      out[0] = a[0] + b[0];
      out[1] = a[1] + b[1];
      out[2] = a[2] + b[2];
      out[3] = a[3] + b[3];
      return out;
    }

    /**
     * Subtracts vector b from vector a
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a the first operand
     * @param {vec4} b the second operand
     * @returns {vec4} out
     */
    function subtract$3(out, a, b) {
      out[0] = a[0] - b[0];
      out[1] = a[1] - b[1];
      out[2] = a[2] - b[2];
      out[3] = a[3] - b[3];
      return out;
    }

    /**
     * Multiplies two vec4's
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a the first operand
     * @param {vec4} b the second operand
     * @returns {vec4} out
     */
    function multiply$3(out, a, b) {
      out[0] = a[0] * b[0];
      out[1] = a[1] * b[1];
      out[2] = a[2] * b[2];
      out[3] = a[3] * b[3];
      return out;
    }

    /**
     * Divides two vec4's
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a the first operand
     * @param {vec4} b the second operand
     * @returns {vec4} out
     */
    function divide$1(out, a, b) {
      out[0] = a[0] / b[0];
      out[1] = a[1] / b[1];
      out[2] = a[2] / b[2];
      out[3] = a[3] / b[3];
      return out;
    }

    /**
     * Math.ceil the components of a vec4
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a vector to ceil
     * @returns {vec4} out
     */
    function ceil$1(out, a) {
      out[0] = Math.ceil(a[0]);
      out[1] = Math.ceil(a[1]);
      out[2] = Math.ceil(a[2]);
      out[3] = Math.ceil(a[3]);
      return out;
    }

    /**
     * Math.floor the components of a vec4
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a vector to floor
     * @returns {vec4} out
     */
    function floor$1(out, a) {
      out[0] = Math.floor(a[0]);
      out[1] = Math.floor(a[1]);
      out[2] = Math.floor(a[2]);
      out[3] = Math.floor(a[3]);
      return out;
    }

    /**
     * Returns the minimum of two vec4's
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a the first operand
     * @param {vec4} b the second operand
     * @returns {vec4} out
     */
    function min$1(out, a, b) {
      out[0] = Math.min(a[0], b[0]);
      out[1] = Math.min(a[1], b[1]);
      out[2] = Math.min(a[2], b[2]);
      out[3] = Math.min(a[3], b[3]);
      return out;
    }

    /**
     * Returns the maximum of two vec4's
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a the first operand
     * @param {vec4} b the second operand
     * @returns {vec4} out
     */
    function max$1(out, a, b) {
      out[0] = Math.max(a[0], b[0]);
      out[1] = Math.max(a[1], b[1]);
      out[2] = Math.max(a[2], b[2]);
      out[3] = Math.max(a[3], b[3]);
      return out;
    }

    /**
     * Math.round the components of a vec4
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a vector to round
     * @returns {vec4} out
     */
    function round$1(out, a) {
      out[0] = Math.round(a[0]);
      out[1] = Math.round(a[1]);
      out[2] = Math.round(a[2]);
      out[3] = Math.round(a[3]);
      return out;
    }

    /**
     * Scales a vec4 by a scalar number
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a the vector to scale
     * @param {Number} b amount to scale the vector by
     * @returns {vec4} out
     */
    function scale$3(out, a, b) {
      out[0] = a[0] * b;
      out[1] = a[1] * b;
      out[2] = a[2] * b;
      out[3] = a[3] * b;
      return out;
    }

    /**
     * Adds two vec4's after scaling the second operand by a scalar value
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a the first operand
     * @param {vec4} b the second operand
     * @param {Number} scale the amount to scale b by before adding
     * @returns {vec4} out
     */
    function scaleAndAdd$1(out, a, b, scale) {
      out[0] = a[0] + b[0] * scale;
      out[1] = a[1] + b[1] * scale;
      out[2] = a[2] + b[2] * scale;
      out[3] = a[3] + b[3] * scale;
      return out;
    }

    /**
     * Calculates the euclidian distance between two vec4's
     *
     * @param {vec4} a the first operand
     * @param {vec4} b the second operand
     * @returns {Number} distance between a and b
     */
    function distance$1(a, b) {
      var x = b[0] - a[0];
      var y = b[1] - a[1];
      var z = b[2] - a[2];
      var w = b[3] - a[3];
      return Math.sqrt(x * x + y * y + z * z + w * w);
    }

    /**
     * Calculates the squared euclidian distance between two vec4's
     *
     * @param {vec4} a the first operand
     * @param {vec4} b the second operand
     * @returns {Number} squared distance between a and b
     */
    function squaredDistance$1(a, b) {
      var x = b[0] - a[0];
      var y = b[1] - a[1];
      var z = b[2] - a[2];
      var w = b[3] - a[3];
      return x * x + y * y + z * z + w * w;
    }

    /**
     * Calculates the length of a vec4
     *
     * @param {vec4} a vector to calculate length of
     * @returns {Number} length of a
     */
    function length$1(a) {
      var x = a[0];
      var y = a[1];
      var z = a[2];
      var w = a[3];
      return Math.sqrt(x * x + y * y + z * z + w * w);
    }

    /**
     * Calculates the squared length of a vec4
     *
     * @param {vec4} a vector to calculate squared length of
     * @returns {Number} squared length of a
     */
    function squaredLength$1(a) {
      var x = a[0];
      var y = a[1];
      var z = a[2];
      var w = a[3];
      return x * x + y * y + z * z + w * w;
    }

    /**
     * Negates the components of a vec4
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a vector to negate
     * @returns {vec4} out
     */
    function negate$1(out, a) {
      out[0] = -a[0];
      out[1] = -a[1];
      out[2] = -a[2];
      out[3] = -a[3];
      return out;
    }

    /**
     * Returns the inverse of the components of a vec4
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a vector to invert
     * @returns {vec4} out
     */
    function inverse$1(out, a) {
      out[0] = 1.0 / a[0];
      out[1] = 1.0 / a[1];
      out[2] = 1.0 / a[2];
      out[3] = 1.0 / a[3];
      return out;
    }

    /**
     * Normalize a vec4
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a vector to normalize
     * @returns {vec4} out
     */
    function normalize$1(out, a) {
      var x = a[0];
      var y = a[1];
      var z = a[2];
      var w = a[3];
      var len = x * x + y * y + z * z + w * w;
      if (len > 0) {
        len = 1 / Math.sqrt(len);
        out[0] = x * len;
        out[1] = y * len;
        out[2] = z * len;
        out[3] = w * len;
      }
      return out;
    }

    /**
     * Calculates the dot product of two vec4's
     *
     * @param {vec4} a the first operand
     * @param {vec4} b the second operand
     * @returns {Number} dot product of a and b
     */
    function dot$1(a, b) {
      return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
    }

    /**
     * Performs a linear interpolation between two vec4's
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a the first operand
     * @param {vec4} b the second operand
     * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
     * @returns {vec4} out
     */
    function lerp$1(out, a, b, t) {
      var ax = a[0];
      var ay = a[1];
      var az = a[2];
      var aw = a[3];
      out[0] = ax + t * (b[0] - ax);
      out[1] = ay + t * (b[1] - ay);
      out[2] = az + t * (b[2] - az);
      out[3] = aw + t * (b[3] - aw);
      return out;
    }

    /**
     * Generates a random vector with the given scale
     *
     * @param {vec4} out the receiving vector
     * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
     * @returns {vec4} out
     */
    function random$1(out, scale) {
      scale = scale || 1.0;

      // Marsaglia, George. Choosing a Point from the Surface of a
      // Sphere. Ann. Math. Statist. 43 (1972), no. 2, 645--646.
      // http://projecteuclid.org/euclid.aoms/1177692644;
      var v1, v2, v3, v4;
      var s1, s2;
      do {
        v1 = RANDOM() * 2 - 1;
        v2 = RANDOM() * 2 - 1;
        s1 = v1 * v1 + v2 * v2;
      } while (s1 >= 1);
      do {
        v3 = RANDOM() * 2 - 1;
        v4 = RANDOM() * 2 - 1;
        s2 = v3 * v3 + v4 * v4;
      } while (s2 >= 1);

      var d = Math.sqrt((1 - s1) / s2);
      out[0] = scale * v1;
      out[1] = scale * v2;
      out[2] = scale * v3 * d;
      out[3] = scale * v4 * d;
      return out;
    }

    /**
     * Transforms the vec4 with a mat4.
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a the vector to transform
     * @param {mat4} m matrix to transform with
     * @returns {vec4} out
     */
    function transformMat4$1(out, a, m) {
      var x = a[0],
          y = a[1],
          z = a[2],
          w = a[3];
      out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
      out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
      out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
      out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
      return out;
    }

    /**
     * Transforms the vec4 with a quat
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a the vector to transform
     * @param {quat} q quaternion to transform with
     * @returns {vec4} out
     */
    function transformQuat$1(out, a, q) {
      var x = a[0],
          y = a[1],
          z = a[2];
      var qx = q[0],
          qy = q[1],
          qz = q[2],
          qw = q[3];

      // calculate quat * vec
      var ix = qw * x + qy * z - qz * y;
      var iy = qw * y + qz * x - qx * z;
      var iz = qw * z + qx * y - qy * x;
      var iw = -qx * x - qy * y - qz * z;

      // calculate result * inverse quat
      out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
      out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
      out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
      out[3] = a[3];
      return out;
    }

    /**
     * Returns a string representation of a vector
     *
     * @param {vec4} a vector to represent as a string
     * @returns {String} string representation of the vector
     */
    function str$3(a) {
      return 'vec4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
    }

    /**
     * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
     *
     * @param {vec4} a The first vector.
     * @param {vec4} b The second vector.
     * @returns {Boolean} True if the vectors are equal, false otherwise.
     */
    function exactEquals$3(a, b) {
      return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
    }

    /**
     * Returns whether or not the vectors have approximately the same elements in the same position.
     *
     * @param {vec4} a The first vector.
     * @param {vec4} b The second vector.
     * @returns {Boolean} True if the vectors are equal, false otherwise.
     */
    function equals$3(a, b) {
      var a0 = a[0],
          a1 = a[1],
          a2 = a[2],
          a3 = a[3];
      var b0 = b[0],
          b1 = b[1],
          b2 = b[2],
          b3 = b[3];
      return Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3));
    }

    /**
     * Alias for {@link vec4.subtract}
     * @function
     */
    var sub$3 = subtract$3;

    /**
     * Alias for {@link vec4.multiply}
     * @function
     */
    var mul$3 = multiply$3;

    /**
     * Alias for {@link vec4.divide}
     * @function
     */
    var div$1 = divide$1;

    /**
     * Alias for {@link vec4.distance}
     * @function
     */
    var dist$1 = distance$1;

    /**
     * Alias for {@link vec4.squaredDistance}
     * @function
     */
    var sqrDist$1 = squaredDistance$1;

    /**
     * Alias for {@link vec4.length}
     * @function
     */
    var len$1 = length$1;

    /**
     * Alias for {@link vec4.squaredLength}
     * @function
     */
    var sqrLen$1 = squaredLength$1;

    /**
     * Perform some operation over an array of vec4s.
     *
     * @param {Array} a the array of vectors to iterate over
     * @param {Number} stride Number of elements between the start of each vec4. If 0 assumes tightly packed
     * @param {Number} offset Number of elements to skip at the beginning of the array
     * @param {Number} count Number of vec4s to iterate over. If 0 iterates over entire array
     * @param {Function} fn Function to call for each vector in the array
     * @param {Object} [arg] additional argument to pass to fn
     * @returns {Array} a
     * @function
     */
    var forEach$1 = function () {
      var vec = create$3();

      return function (a, stride, offset, count, fn, arg) {
        var i = void 0,
            l = void 0;
        if (!stride) {
          stride = 4;
        }

        if (!offset) {
          offset = 0;
        }

        if (count) {
          l = Math.min(count * stride + offset, a.length);
        } else {
          l = a.length;
        }

        for (i = offset; i < l; i += stride) {
          vec[0] = a[i];vec[1] = a[i + 1];vec[2] = a[i + 2];vec[3] = a[i + 3];
          fn(vec, vec, arg);
          a[i] = vec[0];a[i + 1] = vec[1];a[i + 2] = vec[2];a[i + 3] = vec[3];
        }

        return a;
      };
    }();

    var vec4 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        create: create$3,
        clone: clone$3,
        fromValues: fromValues$3,
        copy: copy$3,
        set: set$3,
        add: add$3,
        subtract: subtract$3,
        multiply: multiply$3,
        divide: divide$1,
        ceil: ceil$1,
        floor: floor$1,
        min: min$1,
        max: max$1,
        round: round$1,
        scale: scale$3,
        scaleAndAdd: scaleAndAdd$1,
        distance: distance$1,
        squaredDistance: squaredDistance$1,
        length: length$1,
        squaredLength: squaredLength$1,
        negate: negate$1,
        inverse: inverse$1,
        normalize: normalize$1,
        dot: dot$1,
        lerp: lerp$1,
        random: random$1,
        transformMat4: transformMat4$1,
        transformQuat: transformQuat$1,
        str: str$3,
        exactEquals: exactEquals$3,
        equals: equals$3,
        sub: sub$3,
        mul: mul$3,
        div: div$1,
        dist: dist$1,
        sqrDist: sqrDist$1,
        len: len$1,
        sqrLen: sqrLen$1,
        forEach: forEach$1
    });

    /**
     * Quaternion
     * @module quat
     */

    /**
     * Creates a new identity quat
     *
     * @returns {quat} a new quaternion
     */
    function create$4() {
      var out = new ARRAY_TYPE(4);
      if (ARRAY_TYPE != Float32Array) {
        out[0] = 0;
        out[1] = 0;
        out[2] = 0;
      }
      out[3] = 1;
      return out;
    }

    /**
     * Set a quat to the identity quaternion
     *
     * @param {quat} out the receiving quaternion
     * @returns {quat} out
     */
    function identity$2(out) {
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
      out[3] = 1;
      return out;
    }

    /**
     * Sets a quat from the given angle and rotation axis,
     * then returns it.
     *
     * @param {quat} out the receiving quaternion
     * @param {vec3} axis the axis around which to rotate
     * @param {Number} rad the angle in radians
     * @returns {quat} out
     **/
    function setAxisAngle(out, axis, rad) {
      rad = rad * 0.5;
      var s = Math.sin(rad);
      out[0] = s * axis[0];
      out[1] = s * axis[1];
      out[2] = s * axis[2];
      out[3] = Math.cos(rad);
      return out;
    }

    /**
     * Gets the rotation axis and angle for a given
     *  quaternion. If a quaternion is created with
     *  setAxisAngle, this method will return the same
     *  values as providied in the original parameter list
     *  OR functionally equivalent values.
     * Example: The quaternion formed by axis [0, 0, 1] and
     *  angle -90 is the same as the quaternion formed by
     *  [0, 0, 1] and 270. This method favors the latter.
     * @param  {vec3} out_axis  Vector receiving the axis of rotation
     * @param  {quat} q     Quaternion to be decomposed
     * @return {Number}     Angle, in radians, of the rotation
     */
    function getAxisAngle(out_axis, q) {
      var rad = Math.acos(q[3]) * 2.0;
      var s = Math.sin(rad / 2.0);
      if (s > EPSILON) {
        out_axis[0] = q[0] / s;
        out_axis[1] = q[1] / s;
        out_axis[2] = q[2] / s;
      } else {
        // If s is zero, return any axis (no rotation - axis does not matter)
        out_axis[0] = 1;
        out_axis[1] = 0;
        out_axis[2] = 0;
      }
      return rad;
    }

    /**
     * Multiplies two quat's
     *
     * @param {quat} out the receiving quaternion
     * @param {quat} a the first operand
     * @param {quat} b the second operand
     * @returns {quat} out
     */
    function multiply$4(out, a, b) {
      var ax = a[0],
          ay = a[1],
          az = a[2],
          aw = a[3];
      var bx = b[0],
          by = b[1],
          bz = b[2],
          bw = b[3];

      out[0] = ax * bw + aw * bx + ay * bz - az * by;
      out[1] = ay * bw + aw * by + az * bx - ax * bz;
      out[2] = az * bw + aw * bz + ax * by - ay * bx;
      out[3] = aw * bw - ax * bx - ay * by - az * bz;
      return out;
    }

    /**
     * Rotates a quaternion by the given angle about the X axis
     *
     * @param {quat} out quat receiving operation result
     * @param {quat} a quat to rotate
     * @param {number} rad angle (in radians) to rotate
     * @returns {quat} out
     */
    function rotateX$2(out, a, rad) {
      rad *= 0.5;

      var ax = a[0],
          ay = a[1],
          az = a[2],
          aw = a[3];
      var bx = Math.sin(rad),
          bw = Math.cos(rad);

      out[0] = ax * bw + aw * bx;
      out[1] = ay * bw + az * bx;
      out[2] = az * bw - ay * bx;
      out[3] = aw * bw - ax * bx;
      return out;
    }

    /**
     * Rotates a quaternion by the given angle about the Y axis
     *
     * @param {quat} out quat receiving operation result
     * @param {quat} a quat to rotate
     * @param {number} rad angle (in radians) to rotate
     * @returns {quat} out
     */
    function rotateY$2(out, a, rad) {
      rad *= 0.5;

      var ax = a[0],
          ay = a[1],
          az = a[2],
          aw = a[3];
      var by = Math.sin(rad),
          bw = Math.cos(rad);

      out[0] = ax * bw - az * by;
      out[1] = ay * bw + aw * by;
      out[2] = az * bw + ax * by;
      out[3] = aw * bw - ay * by;
      return out;
    }

    /**
     * Rotates a quaternion by the given angle about the Z axis
     *
     * @param {quat} out quat receiving operation result
     * @param {quat} a quat to rotate
     * @param {number} rad angle (in radians) to rotate
     * @returns {quat} out
     */
    function rotateZ$2(out, a, rad) {
      rad *= 0.5;

      var ax = a[0],
          ay = a[1],
          az = a[2],
          aw = a[3];
      var bz = Math.sin(rad),
          bw = Math.cos(rad);

      out[0] = ax * bw + ay * bz;
      out[1] = ay * bw - ax * bz;
      out[2] = az * bw + aw * bz;
      out[3] = aw * bw - az * bz;
      return out;
    }

    /**
     * Calculates the W component of a quat from the X, Y, and Z components.
     * Assumes that quaternion is 1 unit in length.
     * Any existing W component will be ignored.
     *
     * @param {quat} out the receiving quaternion
     * @param {quat} a quat to calculate W component of
     * @returns {quat} out
     */
    function calculateW(out, a) {
      var x = a[0],
          y = a[1],
          z = a[2];

      out[0] = x;
      out[1] = y;
      out[2] = z;
      out[3] = Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z));
      return out;
    }

    /**
     * Performs a spherical linear interpolation between two quat
     *
     * @param {quat} out the receiving quaternion
     * @param {quat} a the first operand
     * @param {quat} b the second operand
     * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
     * @returns {quat} out
     */
    function slerp(out, a, b, t) {
      // benchmarks:
      //    http://jsperf.com/quaternion-slerp-implementations
      var ax = a[0],
          ay = a[1],
          az = a[2],
          aw = a[3];
      var bx = b[0],
          by = b[1],
          bz = b[2],
          bw = b[3];

      var omega = void 0,
          cosom = void 0,
          sinom = void 0,
          scale0 = void 0,
          scale1 = void 0;

      // calc cosine
      cosom = ax * bx + ay * by + az * bz + aw * bw;
      // adjust signs (if necessary)
      if (cosom < 0.0) {
        cosom = -cosom;
        bx = -bx;
        by = -by;
        bz = -bz;
        bw = -bw;
      }
      // calculate coefficients
      if (1.0 - cosom > EPSILON) {
        // standard case (slerp)
        omega = Math.acos(cosom);
        sinom = Math.sin(omega);
        scale0 = Math.sin((1.0 - t) * omega) / sinom;
        scale1 = Math.sin(t * omega) / sinom;
      } else {
        // "from" and "to" quaternions are very close
        //  ... so we can do a linear interpolation
        scale0 = 1.0 - t;
        scale1 = t;
      }
      // calculate final values
      out[0] = scale0 * ax + scale1 * bx;
      out[1] = scale0 * ay + scale1 * by;
      out[2] = scale0 * az + scale1 * bz;
      out[3] = scale0 * aw + scale1 * bw;

      return out;
    }

    /**
     * Generates a random quaternion
     *
     * @param {quat} out the receiving quaternion
     * @returns {quat} out
     */
    function random$2(out) {
      // Implementation of http://planning.cs.uiuc.edu/node198.html
      // TODO: Calling random 3 times is probably not the fastest solution
      var u1 = RANDOM();
      var u2 = RANDOM();
      var u3 = RANDOM();

      var sqrt1MinusU1 = Math.sqrt(1 - u1);
      var sqrtU1 = Math.sqrt(u1);

      out[0] = sqrt1MinusU1 * Math.sin(2.0 * Math.PI * u2);
      out[1] = sqrt1MinusU1 * Math.cos(2.0 * Math.PI * u2);
      out[2] = sqrtU1 * Math.sin(2.0 * Math.PI * u3);
      out[3] = sqrtU1 * Math.cos(2.0 * Math.PI * u3);
      return out;
    }

    /**
     * Calculates the inverse of a quat
     *
     * @param {quat} out the receiving quaternion
     * @param {quat} a quat to calculate inverse of
     * @returns {quat} out
     */
    function invert$2(out, a) {
      var a0 = a[0],
          a1 = a[1],
          a2 = a[2],
          a3 = a[3];
      var dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
      var invDot = dot ? 1.0 / dot : 0;

      // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0

      out[0] = -a0 * invDot;
      out[1] = -a1 * invDot;
      out[2] = -a2 * invDot;
      out[3] = a3 * invDot;
      return out;
    }

    /**
     * Calculates the conjugate of a quat
     * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
     *
     * @param {quat} out the receiving quaternion
     * @param {quat} a quat to calculate conjugate of
     * @returns {quat} out
     */
    function conjugate(out, a) {
      out[0] = -a[0];
      out[1] = -a[1];
      out[2] = -a[2];
      out[3] = a[3];
      return out;
    }

    /**
     * Creates a quaternion from the given 3x3 rotation matrix.
     *
     * NOTE: The resultant quaternion is not normalized, so you should be sure
     * to renormalize the quaternion yourself where necessary.
     *
     * @param {quat} out the receiving quaternion
     * @param {mat3} m rotation matrix
     * @returns {quat} out
     * @function
     */
    function fromMat3(out, m) {
      // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
      // article "Quaternion Calculus and Fast Animation".
      var fTrace = m[0] + m[4] + m[8];
      var fRoot = void 0;

      if (fTrace > 0.0) {
        // |w| > 1/2, may as well choose w > 1/2
        fRoot = Math.sqrt(fTrace + 1.0); // 2w
        out[3] = 0.5 * fRoot;
        fRoot = 0.5 / fRoot; // 1/(4w)
        out[0] = (m[5] - m[7]) * fRoot;
        out[1] = (m[6] - m[2]) * fRoot;
        out[2] = (m[1] - m[3]) * fRoot;
      } else {
        // |w| <= 1/2
        var i = 0;
        if (m[4] > m[0]) i = 1;
        if (m[8] > m[i * 3 + i]) i = 2;
        var j = (i + 1) % 3;
        var k = (i + 2) % 3;

        fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1.0);
        out[i] = 0.5 * fRoot;
        fRoot = 0.5 / fRoot;
        out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
        out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
        out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
      }

      return out;
    }

    /**
     * Creates a quaternion from the given euler angle x, y, z.
     *
     * @param {quat} out the receiving quaternion
     * @param {x} Angle to rotate around X axis in degrees.
     * @param {y} Angle to rotate around Y axis in degrees.
     * @param {z} Angle to rotate around Z axis in degrees.
     * @returns {quat} out
     * @function
     */
    function fromEuler(out, x, y, z) {
      var halfToRad = 0.5 * Math.PI / 180.0;
      x *= halfToRad;
      y *= halfToRad;
      z *= halfToRad;

      var sx = Math.sin(x);
      var cx = Math.cos(x);
      var sy = Math.sin(y);
      var cy = Math.cos(y);
      var sz = Math.sin(z);
      var cz = Math.cos(z);

      out[0] = sx * cy * cz - cx * sy * sz;
      out[1] = cx * sy * cz + sx * cy * sz;
      out[2] = cx * cy * sz - sx * sy * cz;
      out[3] = cx * cy * cz + sx * sy * sz;

      return out;
    }

    /**
     * Returns a string representation of a quatenion
     *
     * @param {quat} a vector to represent as a string
     * @returns {String} string representation of the vector
     */
    function str$4(a) {
      return 'quat(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
    }

    /**
     * Creates a new quat initialized with values from an existing quaternion
     *
     * @param {quat} a quaternion to clone
     * @returns {quat} a new quaternion
     * @function
     */
    var clone$4 = clone$3;

    /**
     * Creates a new quat initialized with the given values
     *
     * @param {Number} x X component
     * @param {Number} y Y component
     * @param {Number} z Z component
     * @param {Number} w W component
     * @returns {quat} a new quaternion
     * @function
     */
    var fromValues$4 = fromValues$3;

    /**
     * Copy the values from one quat to another
     *
     * @param {quat} out the receiving quaternion
     * @param {quat} a the source quaternion
     * @returns {quat} out
     * @function
     */
    var copy$4 = copy$3;

    /**
     * Set the components of a quat to the given values
     *
     * @param {quat} out the receiving quaternion
     * @param {Number} x X component
     * @param {Number} y Y component
     * @param {Number} z Z component
     * @param {Number} w W component
     * @returns {quat} out
     * @function
     */
    var set$4 = set$3;

    /**
     * Adds two quat's
     *
     * @param {quat} out the receiving quaternion
     * @param {quat} a the first operand
     * @param {quat} b the second operand
     * @returns {quat} out
     * @function
     */
    var add$4 = add$3;

    /**
     * Alias for {@link quat.multiply}
     * @function
     */
    var mul$4 = multiply$4;

    /**
     * Scales a quat by a scalar number
     *
     * @param {quat} out the receiving vector
     * @param {quat} a the vector to scale
     * @param {Number} b amount to scale the vector by
     * @returns {quat} out
     * @function
     */
    var scale$4 = scale$3;

    /**
     * Calculates the dot product of two quat's
     *
     * @param {quat} a the first operand
     * @param {quat} b the second operand
     * @returns {Number} dot product of a and b
     * @function
     */
    var dot$2 = dot$1;

    /**
     * Performs a linear interpolation between two quat's
     *
     * @param {quat} out the receiving quaternion
     * @param {quat} a the first operand
     * @param {quat} b the second operand
     * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
     * @returns {quat} out
     * @function
     */
    var lerp$2 = lerp$1;

    /**
     * Calculates the length of a quat
     *
     * @param {quat} a vector to calculate length of
     * @returns {Number} length of a
     */
    var length$2 = length$1;

    /**
     * Alias for {@link quat.length}
     * @function
     */
    var len$2 = length$2;

    /**
     * Calculates the squared length of a quat
     *
     * @param {quat} a vector to calculate squared length of
     * @returns {Number} squared length of a
     * @function
     */
    var squaredLength$2 = squaredLength$1;

    /**
     * Alias for {@link quat.squaredLength}
     * @function
     */
    var sqrLen$2 = squaredLength$2;

    /**
     * Normalize a quat
     *
     * @param {quat} out the receiving quaternion
     * @param {quat} a quaternion to normalize
     * @returns {quat} out
     * @function
     */
    var normalize$2 = normalize$1;

    /**
     * Returns whether or not the quaternions have exactly the same elements in the same position (when compared with ===)
     *
     * @param {quat} a The first quaternion.
     * @param {quat} b The second quaternion.
     * @returns {Boolean} True if the vectors are equal, false otherwise.
     */
    var exactEquals$4 = exactEquals$3;

    /**
     * Returns whether or not the quaternions have approximately the same elements in the same position.
     *
     * @param {quat} a The first vector.
     * @param {quat} b The second vector.
     * @returns {Boolean} True if the vectors are equal, false otherwise.
     */
    var equals$4 = equals$3;

    /**
     * Sets a quaternion to represent the shortest rotation from one
     * vector to another.
     *
     * Both vectors are assumed to be unit length.
     *
     * @param {quat} out the receiving quaternion.
     * @param {vec3} a the initial vector
     * @param {vec3} b the destination vector
     * @returns {quat} out
     */
    var rotationTo = function () {
      var tmpvec3 = create$2();
      var xUnitVec3 = fromValues$2(1, 0, 0);
      var yUnitVec3 = fromValues$2(0, 1, 0);

      return function (out, a, b) {
        var dot$1 = dot(a, b);
        if (dot$1 < -0.999999) {
          cross(tmpvec3, xUnitVec3, a);
          if (len(tmpvec3) < 0.000001) cross(tmpvec3, yUnitVec3, a);
          normalize(tmpvec3, tmpvec3);
          setAxisAngle(out, tmpvec3, Math.PI);
          return out;
        } else if (dot$1 > 0.999999) {
          out[0] = 0;
          out[1] = 0;
          out[2] = 0;
          out[3] = 1;
          return out;
        } else {
          cross(tmpvec3, a, b);
          out[0] = tmpvec3[0];
          out[1] = tmpvec3[1];
          out[2] = tmpvec3[2];
          out[3] = 1 + dot$1;
          return normalize$2(out, out);
        }
      };
    }();

    /**
     * Performs a spherical linear interpolation with two control points
     *
     * @param {quat} out the receiving quaternion
     * @param {quat} a the first operand
     * @param {quat} b the second operand
     * @param {quat} c the third operand
     * @param {quat} d the fourth operand
     * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
     * @returns {quat} out
     */
    var sqlerp = function () {
      var temp1 = create$4();
      var temp2 = create$4();

      return function (out, a, b, c, d, t) {
        slerp(temp1, a, d, t);
        slerp(temp2, b, c, t);
        slerp(out, temp1, temp2, 2 * t * (1 - t));

        return out;
      };
    }();

    /**
     * Sets the specified quaternion with values corresponding to the given
     * axes. Each axis is a vec3 and is expected to be unit length and
     * perpendicular to all other specified axes.
     *
     * @param {vec3} view  the vector representing the viewing direction
     * @param {vec3} right the vector representing the local "right" direction
     * @param {vec3} up    the vector representing the local "up" direction
     * @returns {quat} out
     */
    var setAxes = function () {
      var matr = create();

      return function (out, view, right, up) {
        matr[0] = right[0];
        matr[3] = right[1];
        matr[6] = right[2];

        matr[1] = up[0];
        matr[4] = up[1];
        matr[7] = up[2];

        matr[2] = -view[0];
        matr[5] = -view[1];
        matr[8] = -view[2];

        return normalize$2(out, fromMat3(out, matr));
      };
    }();

    var quat = /*#__PURE__*/Object.freeze({
        __proto__: null,
        create: create$4,
        identity: identity$2,
        setAxisAngle: setAxisAngle,
        getAxisAngle: getAxisAngle,
        multiply: multiply$4,
        rotateX: rotateX$2,
        rotateY: rotateY$2,
        rotateZ: rotateZ$2,
        calculateW: calculateW,
        slerp: slerp,
        random: random$2,
        invert: invert$2,
        conjugate: conjugate,
        fromMat3: fromMat3,
        fromEuler: fromEuler,
        str: str$4,
        clone: clone$4,
        fromValues: fromValues$4,
        copy: copy$4,
        set: set$4,
        add: add$4,
        mul: mul$4,
        scale: scale$4,
        dot: dot$2,
        lerp: lerp$2,
        length: length$2,
        len: len$2,
        squaredLength: squaredLength$2,
        sqrLen: sqrLen$2,
        normalize: normalize$2,
        exactEquals: exactEquals$4,
        equals: equals$4,
        rotationTo: rotationTo,
        sqlerp: sqlerp,
        setAxes: setAxes
    });

    /**
     * 2 Dimensional Vector
     * @module vec2
     */

    /**
     * Creates a new, empty vec2
     *
     * @returns {vec2} a new 2D vector
     */
    function create$5() {
      var out = new ARRAY_TYPE(2);
      if (ARRAY_TYPE != Float32Array) {
        out[0] = 0;
        out[1] = 0;
      }
      return out;
    }

    /**
     * Creates a new vec2 initialized with values from an existing vector
     *
     * @param {vec2} a vector to clone
     * @returns {vec2} a new 2D vector
     */
    function clone$5(a) {
      var out = new ARRAY_TYPE(2);
      out[0] = a[0];
      out[1] = a[1];
      return out;
    }

    /**
     * Creates a new vec2 initialized with the given values
     *
     * @param {Number} x X component
     * @param {Number} y Y component
     * @returns {vec2} a new 2D vector
     */
    function fromValues$5(x, y) {
      var out = new ARRAY_TYPE(2);
      out[0] = x;
      out[1] = y;
      return out;
    }

    /**
     * Copy the values from one vec2 to another
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the source vector
     * @returns {vec2} out
     */
    function copy$5(out, a) {
      out[0] = a[0];
      out[1] = a[1];
      return out;
    }

    /**
     * Set the components of a vec2 to the given values
     *
     * @param {vec2} out the receiving vector
     * @param {Number} x X component
     * @param {Number} y Y component
     * @returns {vec2} out
     */
    function set$5(out, x, y) {
      out[0] = x;
      out[1] = y;
      return out;
    }

    /**
     * Adds two vec2's
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @returns {vec2} out
     */
    function add$5(out, a, b) {
      out[0] = a[0] + b[0];
      out[1] = a[1] + b[1];
      return out;
    }

    /**
     * Subtracts vector b from vector a
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @returns {vec2} out
     */
    function subtract$4(out, a, b) {
      out[0] = a[0] - b[0];
      out[1] = a[1] - b[1];
      return out;
    }

    /**
     * Multiplies two vec2's
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @returns {vec2} out
     */
    function multiply$5(out, a, b) {
      out[0] = a[0] * b[0];
      out[1] = a[1] * b[1];
      return out;
    }

    /**
     * Divides two vec2's
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @returns {vec2} out
     */
    function divide$2(out, a, b) {
      out[0] = a[0] / b[0];
      out[1] = a[1] / b[1];
      return out;
    }

    /**
     * Math.ceil the components of a vec2
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a vector to ceil
     * @returns {vec2} out
     */
    function ceil$2(out, a) {
      out[0] = Math.ceil(a[0]);
      out[1] = Math.ceil(a[1]);
      return out;
    }

    /**
     * Math.floor the components of a vec2
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a vector to floor
     * @returns {vec2} out
     */
    function floor$2(out, a) {
      out[0] = Math.floor(a[0]);
      out[1] = Math.floor(a[1]);
      return out;
    }

    /**
     * Returns the minimum of two vec2's
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @returns {vec2} out
     */
    function min$2(out, a, b) {
      out[0] = Math.min(a[0], b[0]);
      out[1] = Math.min(a[1], b[1]);
      return out;
    }

    /**
     * Returns the maximum of two vec2's
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @returns {vec2} out
     */
    function max$2(out, a, b) {
      out[0] = Math.max(a[0], b[0]);
      out[1] = Math.max(a[1], b[1]);
      return out;
    }

    /**
     * Math.round the components of a vec2
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a vector to round
     * @returns {vec2} out
     */
    function round$2(out, a) {
      out[0] = Math.round(a[0]);
      out[1] = Math.round(a[1]);
      return out;
    }

    /**
     * Scales a vec2 by a scalar number
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the vector to scale
     * @param {Number} b amount to scale the vector by
     * @returns {vec2} out
     */
    function scale$5(out, a, b) {
      out[0] = a[0] * b;
      out[1] = a[1] * b;
      return out;
    }

    /**
     * Adds two vec2's after scaling the second operand by a scalar value
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @param {Number} scale the amount to scale b by before adding
     * @returns {vec2} out
     */
    function scaleAndAdd$2(out, a, b, scale) {
      out[0] = a[0] + b[0] * scale;
      out[1] = a[1] + b[1] * scale;
      return out;
    }

    /**
     * Calculates the euclidian distance between two vec2's
     *
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @returns {Number} distance between a and b
     */
    function distance$2(a, b) {
      var x = b[0] - a[0],
          y = b[1] - a[1];
      return Math.sqrt(x * x + y * y);
    }

    /**
     * Calculates the squared euclidian distance between two vec2's
     *
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @returns {Number} squared distance between a and b
     */
    function squaredDistance$2(a, b) {
      var x = b[0] - a[0],
          y = b[1] - a[1];
      return x * x + y * y;
    }

    /**
     * Calculates the length of a vec2
     *
     * @param {vec2} a vector to calculate length of
     * @returns {Number} length of a
     */
    function length$3(a) {
      var x = a[0],
          y = a[1];
      return Math.sqrt(x * x + y * y);
    }

    /**
     * Calculates the squared length of a vec2
     *
     * @param {vec2} a vector to calculate squared length of
     * @returns {Number} squared length of a
     */
    function squaredLength$3(a) {
      var x = a[0],
          y = a[1];
      return x * x + y * y;
    }

    /**
     * Negates the components of a vec2
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a vector to negate
     * @returns {vec2} out
     */
    function negate$2(out, a) {
      out[0] = -a[0];
      out[1] = -a[1];
      return out;
    }

    /**
     * Returns the inverse of the components of a vec2
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a vector to invert
     * @returns {vec2} out
     */
    function inverse$2(out, a) {
      out[0] = 1.0 / a[0];
      out[1] = 1.0 / a[1];
      return out;
    }

    /**
     * Normalize a vec2
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a vector to normalize
     * @returns {vec2} out
     */
    function normalize$3(out, a) {
      var x = a[0],
          y = a[1];
      var len = x * x + y * y;
      if (len > 0) {
        //TODO: evaluate use of glm_invsqrt here?
        len = 1 / Math.sqrt(len);
        out[0] = a[0] * len;
        out[1] = a[1] * len;
      }
      return out;
    }

    /**
     * Calculates the dot product of two vec2's
     *
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @returns {Number} dot product of a and b
     */
    function dot$3(a, b) {
      return a[0] * b[0] + a[1] * b[1];
    }

    /**
     * Computes the cross product of two vec2's
     * Note that the cross product must by definition produce a 3D vector
     *
     * @param {vec3} out the receiving vector
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @returns {vec3} out
     */
    function cross$1(out, a, b) {
      var z = a[0] * b[1] - a[1] * b[0];
      out[0] = out[1] = 0;
      out[2] = z;
      return out;
    }

    /**
     * Performs a linear interpolation between two vec2's
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
     * @returns {vec2} out
     */
    function lerp$3(out, a, b, t) {
      var ax = a[0],
          ay = a[1];
      out[0] = ax + t * (b[0] - ax);
      out[1] = ay + t * (b[1] - ay);
      return out;
    }

    /**
     * Generates a random vector with the given scale
     *
     * @param {vec2} out the receiving vector
     * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
     * @returns {vec2} out
     */
    function random$3(out, scale) {
      scale = scale || 1.0;
      var r = RANDOM() * 2.0 * Math.PI;
      out[0] = Math.cos(r) * scale;
      out[1] = Math.sin(r) * scale;
      return out;
    }

    /**
     * Transforms the vec2 with a mat2
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the vector to transform
     * @param {mat2} m matrix to transform with
     * @returns {vec2} out
     */
    function transformMat2(out, a, m) {
      var x = a[0],
          y = a[1];
      out[0] = m[0] * x + m[2] * y;
      out[1] = m[1] * x + m[3] * y;
      return out;
    }

    /**
     * Transforms the vec2 with a mat2d
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the vector to transform
     * @param {mat2d} m matrix to transform with
     * @returns {vec2} out
     */
    function transformMat2d(out, a, m) {
      var x = a[0],
          y = a[1];
      out[0] = m[0] * x + m[2] * y + m[4];
      out[1] = m[1] * x + m[3] * y + m[5];
      return out;
    }

    /**
     * Transforms the vec2 with a mat3
     * 3rd vector component is implicitly '1'
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the vector to transform
     * @param {mat3} m matrix to transform with
     * @returns {vec2} out
     */
    function transformMat3$1(out, a, m) {
      var x = a[0],
          y = a[1];
      out[0] = m[0] * x + m[3] * y + m[6];
      out[1] = m[1] * x + m[4] * y + m[7];
      return out;
    }

    /**
     * Transforms the vec2 with a mat4
     * 3rd vector component is implicitly '0'
     * 4th vector component is implicitly '1'
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the vector to transform
     * @param {mat4} m matrix to transform with
     * @returns {vec2} out
     */
    function transformMat4$2(out, a, m) {
      var x = a[0];
      var y = a[1];
      out[0] = m[0] * x + m[4] * y + m[12];
      out[1] = m[1] * x + m[5] * y + m[13];
      return out;
    }

    /**
     * Rotate a 2D vector
     * @param {vec2} out The receiving vec2
     * @param {vec2} a The vec2 point to rotate
     * @param {vec2} b The origin of the rotation
     * @param {Number} c The angle of rotation
     * @returns {vec2} out
     */
    function rotate$2(out, a, b, c) {
      //Translate point to the origin
      var p0 = a[0] - b[0],
          p1 = a[1] - b[1],
          sinC = Math.sin(c),
          cosC = Math.cos(c);

      //perform rotation and translate to correct position
      out[0] = p0 * cosC - p1 * sinC + b[0];
      out[1] = p0 * sinC + p1 * cosC + b[1];

      return out;
    }

    /**
     * Get the angle between two 2D vectors
     * @param {vec2} a The first operand
     * @param {vec2} b The second operand
     * @returns {Number} The angle in radians
     */
    function angle$1(a, b) {
      var x1 = a[0],
          y1 = a[1],
          x2 = b[0],
          y2 = b[1];

      var len1 = x1 * x1 + y1 * y1;
      if (len1 > 0) {
        //TODO: evaluate use of glm_invsqrt here?
        len1 = 1 / Math.sqrt(len1);
      }

      var len2 = x2 * x2 + y2 * y2;
      if (len2 > 0) {
        //TODO: evaluate use of glm_invsqrt here?
        len2 = 1 / Math.sqrt(len2);
      }

      var cosine = (x1 * x2 + y1 * y2) * len1 * len2;

      if (cosine > 1.0) {
        return 0;
      } else if (cosine < -1.0) {
        return Math.PI;
      } else {
        return Math.acos(cosine);
      }
    }

    /**
     * Returns a string representation of a vector
     *
     * @param {vec2} a vector to represent as a string
     * @returns {String} string representation of the vector
     */
    function str$5(a) {
      return 'vec2(' + a[0] + ', ' + a[1] + ')';
    }

    /**
     * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
     *
     * @param {vec2} a The first vector.
     * @param {vec2} b The second vector.
     * @returns {Boolean} True if the vectors are equal, false otherwise.
     */
    function exactEquals$5(a, b) {
      return a[0] === b[0] && a[1] === b[1];
    }

    /**
     * Returns whether or not the vectors have approximately the same elements in the same position.
     *
     * @param {vec2} a The first vector.
     * @param {vec2} b The second vector.
     * @returns {Boolean} True if the vectors are equal, false otherwise.
     */
    function equals$5(a, b) {
      var a0 = a[0],
          a1 = a[1];
      var b0 = b[0],
          b1 = b[1];
      return Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1));
    }

    /**
     * Alias for {@link vec2.length}
     * @function
     */
    var len$3 = length$3;

    /**
     * Alias for {@link vec2.subtract}
     * @function
     */
    var sub$4 = subtract$4;

    /**
     * Alias for {@link vec2.multiply}
     * @function
     */
    var mul$5 = multiply$5;

    /**
     * Alias for {@link vec2.divide}
     * @function
     */
    var div$2 = divide$2;

    /**
     * Alias for {@link vec2.distance}
     * @function
     */
    var dist$2 = distance$2;

    /**
     * Alias for {@link vec2.squaredDistance}
     * @function
     */
    var sqrDist$2 = squaredDistance$2;

    /**
     * Alias for {@link vec2.squaredLength}
     * @function
     */
    var sqrLen$3 = squaredLength$3;

    /**
     * Perform some operation over an array of vec2s.
     *
     * @param {Array} a the array of vectors to iterate over
     * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
     * @param {Number} offset Number of elements to skip at the beginning of the array
     * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
     * @param {Function} fn Function to call for each vector in the array
     * @param {Object} [arg] additional argument to pass to fn
     * @returns {Array} a
     * @function
     */
    var forEach$2 = function () {
      var vec = create$5();

      return function (a, stride, offset, count, fn, arg) {
        var i = void 0,
            l = void 0;
        if (!stride) {
          stride = 2;
        }

        if (!offset) {
          offset = 0;
        }

        if (count) {
          l = Math.min(count * stride + offset, a.length);
        } else {
          l = a.length;
        }

        for (i = offset; i < l; i += stride) {
          vec[0] = a[i];vec[1] = a[i + 1];
          fn(vec, vec, arg);
          a[i] = vec[0];a[i + 1] = vec[1];
        }

        return a;
      };
    }();

    var vec2 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        create: create$5,
        clone: clone$5,
        fromValues: fromValues$5,
        copy: copy$5,
        set: set$5,
        add: add$5,
        subtract: subtract$4,
        multiply: multiply$5,
        divide: divide$2,
        ceil: ceil$2,
        floor: floor$2,
        min: min$2,
        max: max$2,
        round: round$2,
        scale: scale$5,
        scaleAndAdd: scaleAndAdd$2,
        distance: distance$2,
        squaredDistance: squaredDistance$2,
        length: length$3,
        squaredLength: squaredLength$3,
        negate: negate$2,
        inverse: inverse$2,
        normalize: normalize$3,
        dot: dot$3,
        cross: cross$1,
        lerp: lerp$3,
        random: random$3,
        transformMat2: transformMat2,
        transformMat2d: transformMat2d,
        transformMat3: transformMat3$1,
        transformMat4: transformMat4$2,
        rotate: rotate$2,
        angle: angle$1,
        str: str$5,
        exactEquals: exactEquals$5,
        equals: equals$5,
        len: len$3,
        sub: sub$4,
        mul: mul$5,
        div: div$2,
        dist: dist$2,
        sqrDist: sqrDist$2,
        sqrLen: sqrLen$3,
        forEach: forEach$2
    });

    class Mesh {
        constructor(attributes, indices, mode = WebGL2RenderingContext.TRIANGLES) {
            this.data = {}; // Raw data
            this.attributes = attributes;
            if (indices) {
                this.indices = indices;
                // Ensure current buffer type is exist, considering the target value is not required at glTF
                this.indices.bufferView.target = WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER;
            }
            this.mode = mode;
            // reference mesh data
            for (let attr of attributes) {
                const name = attr.attribute;
                this.data[name] = attr.data;
            }
        }
        static bindAccessorsVBO(target, gl, locationList) {
            for (let acc of target.attributes) {
                // Ignore indeces
                let loc = locationList[acc.attribute];
                if (acc.attribute && loc != undefined) {
                    bufferView.bindBuffer(acc.bufferView, gl);
                    gl.enableVertexAttribArray(loc);
                    let offset = acc.byteOffset;
                    gl.vertexAttribPointer(loc, acc.size, acc.componentType, acc.normalized, acc.bufferView.byteStride, offset);
                }
            }
        }
        static drawElements(target, gl) {
            let acc = target.indices;
            gl.drawElements(target.mode, acc.count, acc.componentType, acc.byteOffset);
        }
        static drawArrays(target, gl) {
            gl.drawArrays(target.mode, 0, target.attributes[0].count);
        }
        static drawcall(target, gl) {
            if (target.indices) {
                bufferView.bindBuffer(target.indices.bufferView, gl);
                this.drawElements(target, gl);
            }
            else {
                this.drawArrays(target, gl);
            }
        }
        static preComputeNormal(mesh) {
            let { indices } = mesh;
            // Collect required data chunks
            let atts = {};
            for (let acc of mesh.attributes) {
                if (acc.attribute != 'POSITION')
                    continue;
                let data = Accessor.newFloat32Array(acc);
                let chunks = Accessor.getSubChunks(acc, data);
                atts['_' + acc.attribute] = data;
                atts[acc.attribute] = chunks;
                // normal data is vec3, same as position
                if (acc.attribute == 'POSITION') {
                    // malloc space for normal buffer
                    atts['_NORMAL'] = new Float32Array(data.length);
                    atts['NORMAL'] = Accessor.getSubChunks(acc, atts['_NORMAL']);
                }
            }
            if (indices) { // element
                atts['i'] = Accessor.newTypedArray(indices);
            }
            else { // array
                atts['i'] = atts['POSITION'].map((e, i) => i);
            }
            let pos = atts['POSITION'];
            let ind = atts['i'];
            let normal = atts['NORMAL'];
            // Temp
            let edge1 = create$2();
            let edge2 = create$2();
            for (let i = 0, l = ind.length; i < l; i += 3) {
                let i0 = ind[i];
                let i1 = ind[i + 1];
                let i2 = ind[i + 2];
                let p1 = pos[i0];
                let p2 = pos[i1];
                let p3 = pos[i2];
                sub$2(edge1, p2, p1);
                sub$2(edge2, p3, p1);
                let nor = normal[i0];
                // let f = 1.0 / (duv1[0] * duv2[1] - duv2[0] * duv1[1]);
                // nor[0] = f * (duv2[1] * edge1[0] - duv1[1] * edge2[0]);
                // nor[1] = f * (duv2[1] * edge1[1] - duv1[1] * edge2[1]);
                // nor[2] = f * (duv2[1] * edge1[2] - duv1[1] * edge2[2]);
                cross(nor, edge1, edge2);
                normalize(nor, nor);
                // Sharing the same normal vector
                copy$2(normal[i1], nor);
                copy$2(normal[i2], nor);
            }
            let normalBuffer = new bufferView();
            normalBuffer.dataView = atts['_NORMAL'];
            mesh.attributes.push(new Accessor({
                bufferView: normalBuffer,
                byteOffset: 0,
                componentType: 5126,
                count: normal.length,
                type: 'VEC3',
            }, 'NORMAL'));
        }
        static preComputeTangent(mesh) {
            // http://www.opengl-tutorial.org/cn/intermediate-tutorials/tutorial-13-normal-mapping/
            // https://learnopengl-cn.readthedocs.io/zh/latest/05%20Advanced%20Lighting/04%20Normal%20Mapping/
            let indices = mesh.indices;
            let atts = {};
            for (let acc of mesh.attributes) {
                if (acc.attribute != 'POSITION' && acc.attribute != 'TEXCOORD_0')
                    continue;
                let data = Accessor.newFloat32Array(acc);
                let chunks = Accessor.getSubChunks(acc, data);
                atts['_' + acc.attribute] = data;
                atts[acc.attribute] = chunks;
                // tagent data is vec3, same as position
                if (acc.attribute == 'POSITION') {
                    // malloc space for tangent buffer
                    atts['_TANGENT'] = new Float32Array(data.length);
                    atts['TANGENT'] = Accessor.getSubChunks(acc, atts['_TANGENT']);
                }
            }
            if (indices) { // element
                atts['i'] = Accessor.newTypedArray(indices);
            }
            else { // array
                atts['i'] = atts['POSITION'].map((e, i) => i);
            }
            let pos = atts['POSITION'];
            let uv = atts['TEXCOORD_0'];
            let ind = atts['i'];
            let tangent = atts['TANGENT'];
            // Temp
            let edge1 = create$2();
            let edge2 = create$2();
            let duv1 = create$5();
            let duv2 = create$5();
            for (let i = 0, l = ind.length; i < l; i += 3) {
                let i0 = ind[i];
                let i1 = ind[i + 1];
                let i2 = ind[i + 2];
                let p1 = pos[i0];
                let p2 = pos[i1];
                let p3 = pos[i2];
                let uv1 = uv[i0];
                let uv2 = uv[i1];
                let uv3 = uv[i2];
                sub$2(edge1, p2, p1);
                sub$2(edge2, p3, p1);
                sub$2(duv1, uv2, uv1);
                sub$2(duv2, uv3, uv1);
                let tan = tangent[i0];
                let f = 1.0 / (duv1[0] * duv2[1] - duv2[0] * duv1[1]);
                tan[0] = f * (duv2[1] * edge1[0] - duv1[1] * edge2[0]);
                tan[1] = f * (duv2[1] * edge1[1] - duv1[1] * edge2[1]);
                tan[2] = f * (duv2[1] * edge1[2] - duv1[1] * edge2[2]);
                normalize(tan, tan);
                copy$2(tangent[i1], tan);
                copy$2(tangent[i2], tan);
            }
            let tangentBuffer = new bufferView();
            tangentBuffer.dataView = atts['_TANGENT'];
            mesh.attributes.push(new Accessor({
                bufferView: tangentBuffer,
                byteOffset: 0,
                componentType: 5126,
                count: tangent.length,
                type: 'VEC3',
            }, 'TANGENT'));
            // return atts;
        }
    }
    class Accessor {
        constructor({ bufferView, byteOffset = 0, componentType, normalized = false, count, type, max = [], min = [] }, name = '') {
            this.attribute = name;
            this.bufferView = bufferView;
            this.byteOffset = byteOffset;
            this.componentType = componentType;
            this.normalized = normalized;
            this.count = count;
            this.max = max;
            this.min = min;
            this.size = Accessor.types[type];
        }
        get data() {
            if (!this._data)
                this._data = Accessor.getData(this);
            return this._data;
        }
        static newFloat32Array(acc) {
            return new Float32Array(acc.bufferView.rawBuffer, acc.byteOffset + acc.bufferView.byteOffset, acc.size * acc.count);
        }
        static getSubChunks(acc, data) {
            let blocks = [];
            for (let i = 0; i < acc.count; i++) {
                let offset = i * acc.size;
                blocks.push(data.subarray(offset, offset + acc.size));
            }
            return blocks;
        }
        static getFloat32Blocks(acc) {
            return this.getSubChunks(acc, Accessor.newTypedArray(acc));
        }
        static getUint16Blocks(acc) {
            return this.getSubChunks(acc, Accessor.newTypedArray(acc));
        }
        static newTypedArray(acc) {
            switch (acc.componentType) {
                case 5120:
                    return new Int8Array(acc.bufferView.rawBuffer, acc.byteOffset + acc.bufferView.byteOffset, acc.size * acc.count);
                case 5121:
                    return new Uint8Array(acc.bufferView.rawBuffer, acc.byteOffset + acc.bufferView.byteOffset, acc.size * acc.count);
                case 5122:
                    return new Int16Array(acc.bufferView.rawBuffer, acc.byteOffset + acc.bufferView.byteOffset, acc.size * acc.count);
                case 5123:
                    return new Uint16Array(acc.bufferView.rawBuffer, acc.byteOffset + acc.bufferView.byteOffset, acc.size * acc.count);
                case 5125:
                    return new Uint32Array(acc.bufferView.rawBuffer, acc.byteOffset + acc.bufferView.byteOffset, acc.size * acc.count);
                case 5126:
                    return new Float32Array(acc.bufferView.rawBuffer, acc.byteOffset + acc.bufferView.byteOffset, acc.size * acc.count);
            }
        }
        static getData(acc) {
            if (acc.size > 1) {
                return this.getFloat32Blocks(acc);
            }
            return this.newTypedArray(acc);
        }
    }
    Accessor.types = {
        "SCALAR": 1,
        'VEC1': 1,
        'VEC2': 2,
        'VEC3': 3,
        'VEC4': 4,
        "MAT2": 4,
        "MAT3": 9,
        "MAT4": 16,
    };
    class bufferView {
        constructor(rawData, { byteOffset = 0, byteLength = 0, byteStride = 0, target = 34962 } = {}) {
            this.buffer = null;
            this.rawBuffer = rawData;
            this.byteOffset = byteOffset;
            this.byteLength = byteLength;
            this.byteStride = byteStride;
            if (rawData)
                this.dataView = new DataView(rawData, this.byteOffset, this.byteLength);
            this.target = target;
        }
        static updateBuffer(bView, gl, usage = WebGL2RenderingContext.STATIC_DRAW) {
            if (bView.buffer) {
                gl.deleteBuffer(bView.buffer);
            }
            bView.buffer = gl.createBuffer();
            gl.bindBuffer(bView.target, bView.buffer);
            gl.bufferData(bView.target, bView.dataView, usage);
        }
        static bindBuffer(bView, gl) {
            if (!bView.buffer) {
                this.updateBuffer(bView, gl);
            }
            gl.bindBuffer(bView.target, bView.buffer);
        }
    }

    var basic_vs = "#include <macros>\nattribute vec3 POSITION;void main(){gl_Position=vec4(POSITION,1);}";

    var basic_fs = "precision highp float;\n#include <macros>\nuniform sampler2D base;void main(){vec2 uv=gl_FragCoord.xy/screenSize;gl_FragColor=texture2D(base,uv);}";

    var stylize_vs = "#include <macros>\nattribute vec3 POSITION;attribute vec3 NORMAL;attribute vec2 TEXCOORD_0;attribute vec2 TEXCOORD_1;attribute vec4 TANGENT;\n#ifdef COLOR_0_SIZE_3\nattribute vec3 COLOR_0;\n#elif defined(COLOR_0_SIZE_4)\nattribute vec4 COLOR_0;\n#endif\n#ifdef HAS_SKINS\n#ifndef JOINT_AMOUNT\n#define JOINT_AMOUNT 200\n#endif\nattribute vec4 JOINTS_0;attribute vec4 WEIGHTS_0;uniform mat4 jointMat[JOINT_AMOUNT];\n#endif\nuniform mat4 M;uniform mat4 VP;uniform mat4 nM;\n#ifdef HAS_MORPH_TARGETS\nuniform float weights;attribute vec3 TAR_POSITION;\n#endif\nvarying vec3 normal;varying vec2 uv;varying vec2 uv1;varying vec3 pos;varying vec4 vColor;varying mat3 TBN;void main(){uv=TEXCOORD_0;uv1=TEXCOORD_1;vec3 skinedNormal=NORMAL;\n#ifdef HAS_MORPH_TARGETS\nvec4 position=vec4((POSITION+TAR_POSITION*weights),1);\n#else\nvec4 position=vec4(POSITION,1);\n#endif\n#ifdef HAS_SKINS\nmat4 skinMat=WEIGHTS_0.x*jointMat[int(JOINTS_0.x)]+WEIGHTS_0.y*jointMat[int(JOINTS_0.y)]+WEIGHTS_0.z*jointMat[int(JOINTS_0.z)]+WEIGHTS_0.w*jointMat[int(JOINTS_0.w)];position=M*skinMat*position;skinedNormal=(skinMat*vec4(skinedNormal,0)).xyz;\n#else\nposition=M*position;\n#endif\nnormal=normalize((nM*vec4(skinedNormal,0)).xyz);vec3 tangent=normalize(vec3(nM*vec4(TANGENT.xyz,0)));vec3 bitangent=cross(normal,tangent)*TANGENT.w;TBN=mat3(tangent,bitangent,normal);\n#ifdef COLOR_0_SIZE_3\nvColor=vec4(COLOR_0,1);\n#elif defined(COLOR_0_SIZE_4)\nvColor=COLOR_0;\n#endif\npos=position.xyz/position.w;gl_Position=VP*position;}";

    var stylize_fs = "precision highp float;\n#include <macros>\n#define PI 3.14159265358979\n#define GAMMA 2.2\nvarying vec3 normal;varying vec2 uv;varying vec2 uv1;varying vec3 pos;varying vec4 vColor;varying mat3 TBN;uniform sampler2D brdfLUT;\n#ifdef HAS_EMISSIVE_MAP\n#ifndef emissiveTexture_uv\n#define emissiveTexture_uv uv\n#endif\nuniform sampler2D emissiveTexture;\n#endif\n#ifdef HAS_NORMAL_MAP\n#ifndef normalTexture_uv\n#define normalTexture_uv uv\n#endif\nuniform sampler2D normalTexture;\n#endif\n#ifdef HAS_BASECOLOR_MAP\n#ifndef baseColorTexture_uv\n#define baseColorTexture_uv uv\n#endif\nuniform sampler2D baseColorTexture;\n#endif\n#ifdef HAS_METALLIC_ROUGHNESS_MAP\n#ifndef metallicRoughnessTexture_uv\n#define metallicRoughnessTexture_uv uv\n#endif\nuniform sampler2D metallicRoughnessTexture;\n#endif\n#ifdef HAS_AO_MAP\n#ifndef occlusionTexture_uv\n#define occlusionTexture_uv uv\n#endif\nuniform sampler2D occlusionTexture;\n#endif\n#ifdef HAS_ENV_MAP\nuniform samplerCube env;\n#endif\nuniform vec3 u_Camera;vec4 sRGBtoLINEAR(vec4 color){return vec4(pow(color.rgb,vec3(GAMMA)),color.a);}vec4 LINEARtoSRGB(vec4 color){return vec4(pow(color.rgb,vec3(1.0/GAMMA)),color.a);}vec3 F_Schlick(float VoH,vec3 F0){return F0+(vec3(1)-F0)*pow(1.0-VoH,5.0);}vec3 F_UE4(float VoH,vec3 F0){return F0+(vec3(1.0)-F0)*pow(2.0,(-5.55473*VoH-6.98316)*VoH);}float G_CookTorrance(float NoV,float NoH,float VoH,float NoL){return min(min(2.0*NoV*NoH/VoH,2.0*NoL*NoH/VoH),1.0);}float G_UE4(float NoV,float NoH,float VoH,float NoL,float roughness){float k=(roughness+1.0)*(roughness+1.0)/8.0;float l=NoL/(NoL*(1.0-k)+k);float v=NoV/(NoV*(1.0-k)+k);return l*v;}float D_GGX(float a,float NoH){a=a*a;float f=NoH*NoH*(a-1.0)+1.0;return a/(PI*f*f);}struct coreData{vec3 diffuse;vec3 f0;vec3 N;vec3 V;vec3 R;float NoV;float metallic;float roughness;float alphaRoughness;};vec3 lightContrib(vec3 lightDir,coreData core){vec3 L=normalize(lightDir);vec3 H=normalize(core.V+L);float NoL=clamp(dot(core.N,L),0.001,1.0);float NoH=clamp(dot(core.N,H),0.0,1.0);float LoH=clamp(dot(L,H),0.0,1.0);float VoH=clamp(dot(core.V,H),0.0,1.0);vec3 F=F_Schlick(VoH,core.f0);float G=G_UE4(core.NoV,NoH,VoH,NoL,core.roughness);float D=D_GGX(core.alphaRoughness,NoH);vec3 specContrib=F*G*D/(4.0*NoL*core.NoV);vec3 diffuseContrib=(1.0-F)*core.diffuse*(1.0-core.metallic);vec3 color=NoL*(diffuseContrib+specContrib);return color;}void main(){\n#ifdef HAS_EMISSIVE_MAP\nvec4 em=sRGBtoLINEAR(texture2D(emissiveTexture,emissiveTexture_uv));\n#endif\n#ifdef HAS_BASECOLOR_MAP\nvec4 base=sRGBtoLINEAR(texture2D(baseColorTexture,baseColorTexture_uv));\n#else\nvec4 base=vec4(1);\n#endif\n#if defined(COLOR_0_SIZE_3) || defined(COLOR_0_SIZE_4)\nbase*=vColor;\n#endif\n#ifdef BASECOLOR_FACTOR\nbase*=BASECOLOR_FACTOR;\n#endif\n#ifdef HAS_METALLIC_ROUGHNESS_MAP\nvec3 rm=texture2D(metallicRoughnessTexture,metallicRoughnessTexture_uv).rgb;\n#else\nvec3 rm=vec3(1);\n#endif\n#ifdef HAS_AO_MAP\nvec4 ao=texture2D(occlusionTexture,occlusionTexture_uv);\n#endif\n#ifdef HAS_NORMAL_MAP\nvec3 normalAddation=texture2D(normalTexture,normalTexture_uv).rgb*2.0-1.0;vec3 N=normalize(TBN*normalAddation);\n#else\nvec3 N=normalize(normal);\n#endif\nvec3 V=normalize(u_Camera-pos);float NoV=clamp(abs(dot(N,V)),0.001,1.0);vec3 R=-normalize(reflect(V,N));float roughness=clamp(rm.g,0.04,1.0);\n#ifdef ROUGHNESS_FACTOR\nroughness*=ROUGHNESS_FACTOR;\n#endif\nfloat alphaRoughness=roughness*roughness;float metallic=clamp(rm.b,0.0,1.0);\n#ifdef METALLIC_FACTOR\nmetallic*=METALLIC_FACTOR;\n#endif\nvec3 f0=vec3(0.04);vec3 diffuse=base.rgb*(vec3(1)-f0)*(1.0-metallic);diffuse/=PI;f0=mix(f0,base.xyz,metallic);coreData core=coreData(diffuse,f0,N,V,R,NoV,metallic,roughness,alphaRoughness);vec3 color;\n#ifdef HAS_ENV_MAP\nvec3 brdf=sRGBtoLINEAR(texture2D(brdfLUT,vec2(NoV,1.0-alphaRoughness))).rgb;vec3 IBLcolor=sRGBtoLINEAR(textureCube(env,R)).rgb;vec3 IBLspecular=1.0*IBLcolor*(f0*brdf.x+brdf.y);color+=IBLspecular;\n#endif\ncolor+=lightContrib(vec3(2,5,2),core)*vec3(2);color+=lightContrib(vec3(1,1,5),core)*vec3(1.0,0.8902,0.6902)*4.0;color+=lightContrib(vec3(-5,3,-5),core)*vec3(0.6431,0.9176,1.0);\n#ifdef HAS_EMISSIVE_MAP\ncolor+=em.rgb;\n#endif\n#ifdef BLEND\ngl_FragColor=LINEARtoSRGB(vec4(color,base.a));\n#elif defined(MASK)\n#ifndef ALPHA_CUTOFF\n#define ALPHA_CUTOFF 0.5\n#endif\nif(base.a<ALPHA_CUTOFF)discard;gl_FragColor=LINEARtoSRGB(vec4(color,1));\n#else\ngl_FragColor=LINEARtoSRGB(vec4(color,1));\n#endif\n}";

    var stylize2_vs = "#version 300 es\n#include <macros>\nin vec3 POSITION;in vec3 NORMAL;in vec2 TEXCOORD_0;in vec2 TEXCOORD_1;in vec4 TANGENT;\n#ifdef COLOR_0_SIZE_3\nin vec3 COLOR_0;\n#elif defined(COLOR_0_SIZE_4)\nin vec4 COLOR_0;\n#endif\n#ifdef HAS_SKINS\n#ifndef JOINT_AMOUNT\n#define JOINT_AMOUNT 200\n#endif\nin vec4 JOINTS_0;in vec4 WEIGHTS_0;uniform mat4 jointMat[JOINT_AMOUNT];\n#endif\nuniform mat4 M;uniform mat4 VP;uniform mat4 nM;\n#ifdef HAS_MORPH_TARGETS\nuniform float weights;in vec3 TAR_POSITION;\n#endif\nout vec3 normal;out vec2 uv;out vec2 uv1;out vec3 pos;out vec4 vColor;out mat3 TBN;void main(){uv=TEXCOORD_0;uv1=TEXCOORD_1;vec3 skinedNormal=NORMAL;\n#ifdef HAS_MORPH_TARGETS\nvec4 position=vec4((POSITION+TAR_POSITION*weights),1);\n#else\nvec4 position=vec4(POSITION,1);\n#endif\n#ifdef HAS_SKINS\nmat4 skinMat=WEIGHTS_0.x*jointMat[int(JOINTS_0.x)]+WEIGHTS_0.y*jointMat[int(JOINTS_0.y)]+WEIGHTS_0.z*jointMat[int(JOINTS_0.z)]+WEIGHTS_0.w*jointMat[int(JOINTS_0.w)];position=M*skinMat*position;skinedNormal=(skinMat*vec4(skinedNormal,0)).xyz;\n#else\nposition=M*position;\n#endif\nnormal=normalize((nM*vec4(skinedNormal,0)).xyz);vec3 tangent=normalize(vec3(nM*vec4(TANGENT.xyz,0)));vec3 bitangent=cross(normal,tangent)*TANGENT.w;TBN=mat3(tangent,bitangent,normal);\n#ifdef COLOR_0_SIZE_3\nvColor=vec4(COLOR_0,1);\n#elif defined(COLOR_0_SIZE_4)\nvColor=COLOR_0;\n#endif\npos=position.xyz/position.w;gl_Position=VP*position;}";

    var stylize2_fs = "#version 300 es\n#define USE_HDR\n#ifdef USE_HDR\n#extension GL_OES_texture_float : enable\n#extension GL_OES_texture_float_linear : enable\n#endif\nprecision highp float;\n#include <macros>\n#define PI 3.14159265358979\n#define GAMMA 2.2\nout vec4 outColor;in vec3 normal;in vec2 uv;in vec2 uv1;in vec3 pos;in vec4 vColor;in mat3 TBN;uniform sampler2D brdfLUT;\n#ifdef HAS_EMISSIVE_MAP\n#ifndef emissiveTexture_uv\n#define emissiveTexture_uv uv\n#endif\nuniform sampler2D emissiveTexture;\n#endif\n#ifdef HAS_NORMAL_MAP\n#ifndef normalTexture_uv\n#define normalTexture_uv uv\n#endif\nuniform sampler2D normalTexture;\n#endif\n#ifdef HAS_BASECOLOR_MAP\n#ifndef baseColorTexture_uv\n#define baseColorTexture_uv uv\n#endif\nuniform sampler2D baseColorTexture;\n#endif\n#ifdef HAS_METALLIC_ROUGHNESS_MAP\n#ifndef metallicRoughnessTexture_uv\n#define metallicRoughnessTexture_uv uv\n#endif\nuniform sampler2D metallicRoughnessTexture;\n#endif\n#ifdef HAS_AO_MAP\n#ifndef occlusionTexture_uv\n#define occlusionTexture_uv uv\n#endif\nuniform sampler2D occlusionTexture;\n#endif\n#ifdef HAS_ENV_MAP\nuniform samplerCube env;\n#endif\n#ifdef HAS_DIFFENV_MAP\nuniform samplerCube diffenv;\n#else\n#define HAS_IRRSH\n#endif\nuniform vec3 u_Camera;\n#ifdef USE_HDR\n#ifdef HAS_EXPUSRE\nuniform float u_Exposure;\n#else\n#define u_Exposure 2.\n#endif\n#endif\n#ifdef HAS_IRRSH\nuniform vec3 u_irrSH[9];vec3 diffuseSH(const in vec3 n){return max(vec3(0),u_irrSH[0]+u_irrSH[1]*n.y+u_irrSH[2]*n.z+u_irrSH[3]*n.x+u_irrSH[4]*n.y*n.x+u_irrSH[5]*n.y*n.z+u_irrSH[6]*(3.0*n.z*n.z-1.0)+u_irrSH[7]*(n.z*n.x)+u_irrSH[8]*(n.x*n.x-n.y*n.y));}\n#endif\nvec4 sRGBtoLINEAR(vec4 color){return vec4(pow(color.rgb,vec3(GAMMA)),color.a);}vec4 LINEARtoSRGB(vec4 color){return vec4(pow(color.rgb,vec3(1.0/GAMMA)),color.a);}vec3 toneMapACES(vec3 color){const float A=2.51;const float B=0.03;const float C=2.43;const float D=0.59;const float E=0.14;return pow(clamp((color*(A*color+B))/(color*(C*color+D)+E),0.0,1.0),vec3(1.0/GAMMA));}vec3 F_Schlick(float VoH,vec3 F0){return F0+(vec3(1)-F0)*pow(1.0-VoH,5.0);}vec3 F_UE4(float VoH,vec3 F0){return F0+(vec3(1.0)-F0)*pow(2.0,(-5.55473*VoH-6.98316)*VoH);}float G_CookTorrance(float NoV,float NoH,float VoH,float NoL){return min(min(2.0*NoV*NoH/VoH,2.0*NoL*NoH/VoH),1.0);}float G_UE4(float NoV,float NoH,float VoH,float NoL,float roughness){float k=(roughness+1.0)*(roughness+1.0)/8.0;float l=NoL/(NoL*(1.0-k)+k);float v=NoV/(NoV*(1.0-k)+k);return l*v;}float D_GGX(float a,float NoH){a=a*a;float f=NoH*NoH*(a-1.0)+1.0;return a/(PI*f*f);}struct coreData{vec3 diffuse;vec3 f0;vec3 N;vec3 V;vec3 R;float NoV;float metallic;float roughness;float alphaRoughness;};vec3 lightContrib(vec3 lightDir,coreData core){vec3 L=normalize(lightDir);vec3 H=normalize(core.V+L);float NoL=clamp(dot(core.N,L),0.001,1.0);float NoH=clamp(dot(core.N,H),0.0,1.0);float LoH=clamp(dot(L,H),0.0,1.0);float VoH=clamp(dot(core.V,H),0.0,1.0);vec3 F=F_Schlick(VoH,core.f0);float G=G_UE4(core.NoV,NoH,VoH,NoL,core.roughness);float D=D_GGX(core.alphaRoughness,NoH);vec3 specContrib=F*G*D/(4.0*NoL*core.NoV);vec3 diffuseContrib=(1.0-F)*core.diffuse/PI;vec3 color=NoL*(diffuseContrib+specContrib);return color;}vec3 decoRGBE(vec4 r){r*=255.;if(r.a!=0.){float e=pow(2.,r.a-128.-8.);return vec3(r.r*e,r.g*e,r.b*e);}return vec3(0);}void main(){\n#ifdef HAS_EMISSIVE_MAP\nvec4 em=sRGBtoLINEAR(texture(emissiveTexture,emissiveTexture_uv));\n#endif\n#ifdef HAS_BASECOLOR_MAP\nvec4 base=sRGBtoLINEAR(texture(baseColorTexture,baseColorTexture_uv));\n#else\nvec4 base=vec4(1);\n#endif\n#if defined(COLOR_0_SIZE_3) || defined(COLOR_0_SIZE_4)\nbase*=vColor;\n#endif\n#ifdef BASECOLOR_FACTOR\nbase*=BASECOLOR_FACTOR;\n#endif\n#ifdef HAS_METALLIC_ROUGHNESS_MAP\nvec3 rm=texture(metallicRoughnessTexture,metallicRoughnessTexture_uv).rgb;\n#else\nvec3 rm=vec3(1);\n#endif\n#ifdef HAS_AO_MAP\nvec4 ao=texture(occlusionTexture,occlusionTexture_uv);\n#endif\n#ifdef HAS_NORMAL_MAP\nvec3 normalAddation=texture(normalTexture,normalTexture_uv).rgb*2.0-1.0;vec3 N=normalize(TBN*normalAddation);\n#else\nvec3 N=normalize(normal);\n#endif\nvec3 V=normalize(u_Camera-pos);float NoV=clamp(abs(dot(N,V)),0.0,1.0);vec3 R=-normalize(reflect(V,N));float roughness=clamp(rm.g,0.04,1.0);\n#ifdef ROUGHNESS_FACTOR\nroughness*=ROUGHNESS_FACTOR;\n#endif\nfloat alphaRoughness=roughness*roughness;float metallic=clamp(rm.b,0.0,1.0);\n#ifdef METALLIC_FACTOR\nmetallic*=METALLIC_FACTOR;\n#endif\nvec3 f0=vec3(0.04);vec3 diffuse=base.rgb*(vec3(1)-f0)*(1.0-metallic);f0=mix(f0,base.xyz,metallic);coreData core=coreData(diffuse,f0,N,V,R,NoV,metallic,roughness,alphaRoughness);vec3 color;color+=lightContrib(vec3(2,5,2),core)*vec3(1);float lod=clamp(roughness*11.,0.0,11.);\n#ifdef HAS_DIFFENV_MAP\n#ifdef USE_HDR\nvec3 diffSample=decoRGBE(texture(diffenv,R,lod));\n#else\nvec3 diffSample=sRGBtoLINEAR(texture(diffenv,R,lod)).rgb;\n#endif\ncolor+=diffSample*diffuse;\n#endif\n#ifdef HAS_IRRSH\n#ifdef USE_HDR\ncolor+=diffuse*diffuseSH(N)*.1;\n#else\ncolor+=diffuse*diffuseSH(N);\n#endif\n#endif\n#ifdef HAS_ENV_MAP\nvec3 brdf=sRGBtoLINEAR(texture(brdfLUT,vec2(NoV,1.0-alphaRoughness))).rgb;\n#ifdef USE_HDR\nvec3 IBLcolor=decoRGBE(texture(env,R,lod))*u_Exposure;\n#else\nvec3 IBLcolor=sRGBtoLINEAR(texture(env,R,lod)).rgb;\n#endif\nvec3 IBLspecular=IBLcolor*(f0*brdf.x+brdf.y);color+=IBLspecular;\n#endif\n#ifdef HAS_EMISSIVE_MAP\ncolor+=em.rgb;\n#endif\n#ifdef USE_HDR\ncolor.rgb*=u_Exposure;\n#endif\n#ifdef BLEND\noutColor=LINEARtoSRGB(vec4(color,base.a));\n#elif defined(MASK)\n#ifndef ALPHA_CUTOFF\n#define ALPHA_CUTOFF 0.5\n#endif\nif(base.a<ALPHA_CUTOFF)discard;outColor=vec4(toneMapACES(color),1);\n#else\noutColor=vec4(toneMapACES(color),1);\n#endif\n}";

    var vignetting_vs = "attribute vec3 POSITION;void main(){vec4 position=vec4(POSITION,1);gl_Position=position;}";

    var vignetting_fs = "precision highp float;\n#include <macros>\nuniform sampler2D base;void main(){vec2 uv=gl_FragCoord.xy/screenSize;vec2 pos=uv*2.-1.;float mask=1.-dot(pos,pos)*FACTOR;mask=clamp(.5+(mask-.5)*HARDNESS,0.,1.);vec4 color=texture2D(base,uv);gl_FragColor=mix(vec4(vec3(0),1),color,mask);}";

    var line_vs = "#include <macros>\nattribute vec3 POSITION;attribute vec3 NORMAL;attribute vec2 TEXCOORD_0;attribute vec2 TEXCOORD_1;attribute vec4 TANGENT;\n#ifdef COLOR_0_SIZE_3\nattribute vec3 COLOR_0;\n#elif defined(COLOR_0_SIZE_4)\nattribute vec4 COLOR_0;\n#endif\n#ifdef HAS_SKINS\n#ifndef JOINT_AMOUNT\n#define JOINT_AMOUNT 200\n#endif\nattribute vec4 JOINTS_0;attribute vec4 WEIGHTS_0;uniform mat4 jointMat[JOINT_AMOUNT];\n#endif\nuniform mat4 M;uniform mat4 VP;uniform mat4 nM;\n#ifdef HAS_MORPH_TARGETS\nuniform float weights;attribute vec3 TAR_POSITION;\n#endif\nvarying vec3 normal;varying vec2 uv;varying vec2 uv1;varying vec3 pos;varying vec4 vColor;varying mat3 TBN;void main(){uv=TEXCOORD_0;uv1=TEXCOORD_1;vec3 skinedNormal=NORMAL;\n#ifdef HAS_MORPH_TARGETS\nvec4 position=vec4((POSITION+TAR_POSITION*weights),1);\n#else\nvec4 position=vec4(POSITION,1);\n#endif\n#ifdef HAS_SKINS\nmat4 skinMat=WEIGHTS_0.x*jointMat[int(JOINTS_0.x)]+WEIGHTS_0.y*jointMat[int(JOINTS_0.y)]+WEIGHTS_0.z*jointMat[int(JOINTS_0.z)]+WEIGHTS_0.w*jointMat[int(JOINTS_0.w)];position=M*skinMat*position;skinedNormal=(skinMat*vec4(skinedNormal,0)).xyz;\n#else\nposition=M*position;\n#endif\nnormal=normalize((nM*vec4(skinedNormal,0)).xyz);vec3 tangent=normalize(vec3(nM*vec4(TANGENT.xyz,0)));vec3 bitangent=cross(normal,tangent)*TANGENT.w;TBN=mat3(tangent,bitangent,normal);\n#ifdef COLOR_0_SIZE_3\nvColor=vec4(COLOR_0,1);\n#elif defined(COLOR_0_SIZE_4)\nvColor=COLOR_0;\n#endif\npos=position.xyz/position.w;gl_Position=VP*position;}";

    var line_fs = "precision highp float;\n#include <macros>\n#define PI 3.14159265358979\n#define GAMMA 2.2\nvarying vec3 normal;varying vec2 uv;varying vec2 uv1;varying vec3 pos;varying vec4 vColor;varying mat3 TBN;uniform sampler2D brdfLUT;\n#ifdef HAS_EMISSIVE_MAP\n#ifndef emissiveTexture_uv\n#define emissiveTexture_uv uv\n#endif\nuniform sampler2D emissiveTexture;\n#endif\n#ifdef HAS_NORMAL_MAP\n#ifndef normalTexture_uv\n#define normalTexture_uv uv\n#endif\nuniform sampler2D normalTexture;\n#endif\n#ifdef HAS_BASECOLOR_MAP\n#ifndef baseColorTexture_uv\n#define baseColorTexture_uv uv\n#endif\nuniform sampler2D baseColorTexture;\n#endif\n#ifdef HAS_METALLIC_ROUGHNESS_MAP\n#ifndef metallicRoughnessTexture_uv\n#define metallicRoughnessTexture_uv uv\n#endif\nuniform sampler2D metallicRoughnessTexture;\n#endif\n#ifdef HAS_AO_MAP\n#ifndef occlusionTexture_uv\n#define occlusionTexture_uv uv\n#endif\nuniform sampler2D occlusionTexture;\n#endif\n#ifdef HAS_ENV_MAP\nuniform samplerCube env;\n#endif\nuniform vec3 u_Camera;vec4 sRGBtoLINEAR(vec4 color){return vec4(pow(color.rgb,vec3(GAMMA)),color.a);}vec4 LINEARtoSRGB(vec4 color){return vec4(pow(color.rgb,vec3(1.0/GAMMA)),color.a);}void main(){gl_FragColor=vec4(0,1,.4,0.2);}";

    var ray_vs = "#version 300 es\n#include <macros>\n#define SHADER_NAME ray_vs\nin vec3 POSITION;void main(){gl_Position=vec4(POSITION,1);}";

    var ray_fs = "#version 300 es\n#extension GL_OES_texture_float : enable\n#extension GL_OES_texture_float_linear : enable\nprecision highp float;\n#define HDR_IBL\nuniform int DEBUG_NORMAL;uniform float EXP;uniform int iFrame;uniform float iTime;uniform sampler2D base;uniform sampler2D test;uniform sampler2D triangleTex;uniform sampler2D LBVHTex;\n#ifdef HDR_IBL\nuniform sampler2D hdrSky;\n#else\nuniform samplerCube hdrSky;\n#endif\nuniform sampler2D skybox;uniform sampler2D ground;uniform sampler2D uvck;\n#include <mat_params>\nuniform mat3 TBN;uniform vec3 vp;uniform vec2 mousePos;\n#include <macros>\n#define SHADER_NAME ray_fs\n#define PI 3.14159265358979\n#define invPI 0.3183098861837697\n#define invTWO_PI 0.15915494309\n#define GAMMA 2.2\nout vec4 outColor;vec4 sRGBtoLINEAR(vec4 color){return vec4(pow(color.rgb,vec3(GAMMA)),color.a);}vec4 LINEARtoSRGB(vec4 color){return vec4(pow(color.rgb,vec3(1.0/GAMMA)),color.a);}vec2 getuv(vec3 p){float theta=acos(p.y);float phi=atan(p.z,p.x);if(phi<0.0){phi+=2.0*PI;}vec2 s;s.x=1.0-phi*invTWO_PI;s.y=1.-theta*invPI;return s;}vec3 pal(in float t,in vec3 a,in vec3 b,in vec3 c,in vec3 d){return a+b*cos(6.28318530718*(c*t+d));}uint baseHash(uvec2 p){p=1103515245U*((p>>1U)^(p.yx));uint h32=1103515245U*((p.x)^(p.y>>3U));return h32^(h32>>16);}float hash1(inout float seed){uint n=baseHash(floatBitsToUint(vec2(seed+=.1,seed+=.1)));return float(n)/float(0xffffffffU);}vec2 hash2(inout float seed){uint n=baseHash(floatBitsToUint(vec2(seed+=.1,seed+=.1)));uvec2 rz=uvec2(n,n*48271U);return vec2(rz.xy&uvec2(0x7fffffffU))/float(0x7fffffff);}vec2 randomInUnitDisk(inout float seed){vec2 h=hash2(seed)*vec2(1,6.28318530718);float r=sqrt(h.x);return r*vec2(sin(h.y),cos(h.y));}\n#define MAX_DIST 1e10\nfloat hitAABB(vec3 ro,vec3 ird,vec3 bmax,vec3 bmin){vec2 Tx,Ty,Tz=vec2(0);Tx.x=(bmin.x-ro.x)*ird.x;Tx.y=(bmax.x-ro.x)*ird.x;if(Tx.y<Tx.x){Tx=Tx.yx;}Ty.x=(bmin.y-ro.y)*ird.y;Ty.y=(bmax.y-ro.y)*ird.y;if(Ty.y<Ty.x){Ty=Ty.yx;}if(Tx.x>Ty.y||Ty.x>Tx.y){return MAX_DIST;}vec2 T=vec2(0);T.x=max(Tx.x,Ty.x);T.y=min(Tx.y,Ty.y);Tz.x=(bmin.z-ro.z)*ird.z;Tz.y=(bmax.z-ro.z)*ird.z;if(Tz.y<Tz.x){Tz=Tz.yx;}if(T.x>Tz.y||Tz.x>T.y){return MAX_DIST;}return max(T.x,Tz.x);}float iBox(in vec3 ro,in vec3 rd,in vec2 distBound,inout vec3 normal,in vec3 boxSize){vec3 m=sign(rd)/max(abs(rd),1e-8);vec3 n=m*ro;vec3 k=abs(m)*boxSize;vec3 t1=-n-k;vec3 t2=-n+k;float tN=max(max(t1.x,t1.y),t1.z);float tF=min(min(t2.x,t2.y),t2.z);if(tN>tF||tF<=0.){return MAX_DIST;}else{if(tN>=distBound.x&&tN<=distBound.y){normal=-sign(rd)*step(t1.yzx,t1.xyz)*step(t1.zxy,t1.xyz);return tN;}else if(tF>=distBound.x&&tF<=distBound.y){normal=-sign(rd)*step(t1.yzx,t1.xyz)*step(t1.zxy,t1.xyz);return tF;}else{return MAX_DIST;}}}float iPlane(in vec3 ro,in vec3 rd,in vec2 distBound,inout vec3 normal,in vec3 planeNormal,in float planeDist){float a=dot(rd,planeNormal);float d=-(dot(ro,planeNormal)+planeDist)/a;if(a>0.||d<distBound.x||d>distBound.y){return MAX_DIST;}else{normal=planeNormal;return d;}}float iTriangle(in vec3 ro,in vec3 rd,in vec2 distBound,in vec3 v0,in vec3 v1,in vec3 v2){vec3 v1v0=v1-v0;vec3 v2v0=v2-v0;vec3 rov0=ro-v0;vec3 n=cross(v1v0,v2v0);vec3 q=cross(rov0,rd);float d=1.0/dot(rd,n);float u=d*dot(-q,v2v0);float v=d*dot(q,v1v0);float t=d*dot(-n,rov0);if(u<0.||v<0.||(u+v)>1.||t<distBound.x||t>distBound.y){return MAX_DIST;}else{return t;}}struct BVHNode{vec3 bmin;float branch;vec3 bmax;float index;};\n#define INV_TEXTURE_WIDTH 0.00048828125\nBVHNode getBVH(float i){float offset=(i*2.);ivec2 uv0=ivec2(mod(offset+0.,2048.),floor((offset+0.)*INV_TEXTURE_WIDTH));ivec2 uv1=ivec2(mod(offset+1.,2048.),floor((offset+1.)*INV_TEXTURE_WIDTH));vec4 bvh0=texelFetch(LBVHTex,uv0,0);vec4 bvh1=texelFetch(LBVHTex,uv1,0);return BVHNode(bvh0.rgb,bvh0.a,bvh1.rgb,bvh1.a);}\n#define HAS_NORMAL\n#define TRI_TEXSIZE 2048.\n#define INV_TRIANGLE 1./TRI_TEXSIZE\nfloat hitTriangle(float i,vec3 ro,vec3 rd){\n#ifdef HAS_NORMAL\nivec2 puv0=ivec2(mod(i+0.,TRI_TEXSIZE),floor((i+0.)*INV_TRIANGLE));ivec2 nuv0=ivec2(mod(i+1.,TRI_TEXSIZE),floor((i+1.)*INV_TRIANGLE));ivec2 puv1=ivec2(mod(i+2.,TRI_TEXSIZE),floor((i+2.)*INV_TRIANGLE));ivec2 nuv1=ivec2(mod(i+3.,TRI_TEXSIZE),floor((i+3.)*INV_TRIANGLE));ivec2 puv2=ivec2(mod(i+4.,TRI_TEXSIZE),floor((i+4.)*INV_TRIANGLE));ivec2 nuv2=ivec2(mod(i+5.,TRI_TEXSIZE),floor((i+5.)*INV_TRIANGLE));\n#else\nivec2 puv0=ivec2(mod(i+0.,TRI_TEXSIZE),floor((i+0.)*INV_TRIANGLE));ivec2 puv1=ivec2(mod(i+1.,TRI_TEXSIZE),floor((i+1.)*INV_TRIANGLE));ivec2 puv2=ivec2(mod(i+2.,TRI_TEXSIZE),floor((i+2.)*INV_TRIANGLE));\n#endif\nvec4 v0=texelFetch(triangleTex,puv0,0);vec4 v1=texelFetch(triangleTex,puv1,0);vec4 v2=texelFetch(triangleTex,puv2,0);return iTriangle(ro,rd,vec2(0,MAX_DIST),v0.xyz,v1.xyz,v2.xyz);}void getTriangle(float i,vec3 p,inout vec3 N,inout vec2 iuv){\n#ifdef HAS_NORMAL\nivec2 puv0=ivec2(mod(i+0.,TRI_TEXSIZE),floor((i+0.)*INV_TRIANGLE));ivec2 nuv0=ivec2(mod(i+1.,TRI_TEXSIZE),floor((i+1.)*INV_TRIANGLE));ivec2 puv1=ivec2(mod(i+2.,TRI_TEXSIZE),floor((i+2.)*INV_TRIANGLE));ivec2 nuv1=ivec2(mod(i+3.,TRI_TEXSIZE),floor((i+3.)*INV_TRIANGLE));ivec2 puv2=ivec2(mod(i+4.,TRI_TEXSIZE),floor((i+4.)*INV_TRIANGLE));ivec2 nuv2=ivec2(mod(i+5.,TRI_TEXSIZE),floor((i+5.)*INV_TRIANGLE));vec4 v0=texelFetch(triangleTex,puv0,0);vec4 v1=texelFetch(triangleTex,puv1,0);vec4 v2=texelFetch(triangleTex,puv2,0);vec3 e1=v0.xyz-v1.xyz;vec3 e2=v2.xyz-v1.xyz;vec3 ep=p-v1.xyz;float s=length(cross(e1,e2));float s1=length(cross(ep,e1))/s;float s2=length(cross(ep,e2))/s;vec4 n0=texelFetch(triangleTex,nuv0,0);vec4 n1=texelFetch(triangleTex,nuv1,0);vec4 n2=texelFetch(triangleTex,nuv2,0);N=normalize(n0.xyz*s2+n1.xyz*(1.-s1-s2)+n2.xyz*s1);vec2 uv0=vec2(v0.w,n0.w);vec2 uv1=vec2(v1.w,n1.w);vec2 uv2=vec2(v2.w,n2.w);iuv=uv0*s2+uv1*(1.-s1-s2)+uv2*s1;\n#endif\n}\n#ifndef SL\n#define SL 46\n#endif\nfloat hitLBVH2(float i,vec3 ro,vec3 rd,inout float mat,inout float tri){vec3 ird=1./rd;vec3 normal;float offsetStack[SL];int sp=0;float t=MAX_DIST;float pNode=i;BVHNode bvh=getBVH(pNode);float bvhRoot=hitAABB(ro,ird,bvh.bmax,bvh.bmin);if(bvhRoot==MAX_DIST)return MAX_DIST;int c=32;BVHNode l,r,cur;float lt,rt,current;while(c>0){bvh=getBVH(pNode);current=hitAABB(ro,ird,bvh.bmax,bvh.bmin);if(current>=t){if(sp==0)return t;pNode=offsetStack[--sp];}else{if(bvh.index<0.){l=getBVH(pNode+1.);r=getBVH(bvh.branch);lt=hitAABB(ro,ird,l.bmax,l.bmin);rt=hitAABB(ro,ird,r.bmax,r.bmin);if(rt==MAX_DIST&&lt==MAX_DIST){if(sp==0)return t;pNode=offsetStack[--sp];}else{if(sp==SL)return t;if(rt<lt){offsetStack[sp++]=pNode+1.;pNode=bvh.branch;}else{offsetStack[sp++]=bvh.branch;pNode+=1.;}}}else{if(t!=MAX_DIST){current=hitTriangle(bvh.index,ro,rd);if(current>0.&&current<t){tri=bvh.index;mat=bvh.branch;t=current;}}else{current=hitTriangle(bvh.index,ro,rd);if(current>0.&&current!=MAX_DIST){tri=bvh.index;t=current;mat=bvh.branch;}}if(sp==0)return t;pNode=offsetStack[--sp];}}}return t;}vec3 cosWeightedRandomHemisphereDirection(const vec3 n,inout float seed){vec3 t=normalize(cross(n,abs(n.y)>.5 ? vec3(1.,0.,0.): vec3(0.,1.,0.)));vec3 b=cross(t,n);vec2 h=hash2(seed)*vec2(1,6.28318530718);vec3 r=vec3(sqrt(h.x)*vec2(cos(h.y),sin(h.y)),sqrt(1.-h.x));return normalize(mat3(t,b,n)*r);}vec3 modifyDirectionWithRoughness(const vec3 normal,const vec3 n,const float roughness,inout float seed){vec2 r=hash2(seed);vec3 uu=normalize(cross(n,abs(n.y)>.5 ? vec3(1.,0.,0.): vec3(0.,1.,0.)));vec3 vv=cross(uu,n);float a=roughness*roughness;r.x*=6.28318530718;float rz=sqrt(abs((1.0-r.y)/clamp(1.+(a-1.)*r.y,.00001,1.)));float ra=sqrt(abs(1.-rz*rz));float rx=ra*cos(r.x);float ry=ra*sin(r.x);vec3 rr=vec3(rx*uu+ry*vv+rz*n);vec3 ret=normalize(rr);return dot(ret,normal)>0. ? ret : n;}float FresnelSchlickRoughness(float cosTheta,float F0,float roughness){return F0+(max((1.-roughness),F0)-F0)*pow(abs(1.-cosTheta),5.0);}vec3 opU(vec3 d,float iResult,float mat){return(iResult<d.y)? vec3(d.x,iResult,mat): d;}\n#define W_RATIO 0.5625\n#define W_WIDTH 10.\nfloat hitWorld(in vec3 ro,in vec3 rd,in vec2 dist,out vec3 normal,out vec2 iuv,out float mat){vec3 d=vec3(dist,-1);vec3 ird=1./rd;float tri=-1.;d=opU(d,hitLBVH2(0.,ro-vec3(0,0,0),rd,mat,tri),mat);if(tri>=0.){getTriangle(tri,ro+rd*d.y,normal,iuv);}mat=d.z;return d.y;}\n#define PATH_LENGTH 8\nvec3 render(in vec3 ro,in vec3 rd,inout float seed){vec3 albedo,normal,col=vec3(1);vec2 iuv=vec2(0);float roughness=.0;float metal=.01;for(int i=0;i<PATH_LENGTH;i++){float mat=-1.;float t=hitWorld(ro,rd,vec2(0,MAX_DIST),normal,iuv,mat);if(t>0.&&t<MAX_DIST){ro+=rd*(t-.01);if(mat<0.){continue;}if(DEBUG_NORMAL>0){\n#ifdef DEBUG_UV\nreturn sRGBtoLINEAR(texture(uvck,iuv)).rgb;\n#else\nreturn max(vec3(0),normal)*sRGBtoLINEAR(texture(uvck,iuv)).rgb;\n#endif\n}\n#include <mat_route>\nfloat F=FresnelSchlickRoughness(max(0.,-dot(normal,rd)),.04,roughness);if(F>hash1(seed)-metal){col*=albedo;rd=modifyDirectionWithRoughness(normal,reflect(rd,normal),roughness,seed);}else{col*=albedo;rd=cosWeightedRandomHemisphereDirection(normal,seed);}}else{\n#ifdef HDR_IBL\ncol*=texture(hdrSky,getuv(rd)+vec2(0,0)).rgb;\n#else\ncol*=texture(hdrSky,rd).rgb;\n#endif\nreturn col;}}return vec3(0);}\n#define DOF_FACTOR .028\n#define FOV 1.8\nvoid main(){vec2 uv=gl_FragCoord.xy*iResolution;vec3 ro=vec3(0,0,10);ro=vp;int Frame=iFrame;float fpd=texelFetch(base,ivec2(0),0).r;if(all(equal(ivec2(gl_FragCoord),ivec2(0)))){if(Frame==0){float tmp;vec3 tmp3;vec2 tmp2;float nfpd=hitWorld(ro,TBN*normalize(vec3(mousePos,FOV)),vec2(0,MAX_DIST),tmp3,tmp2,tmp);outColor=vec4(nfpd);}else{outColor=vec4(fpd);}}else{vec3 col=vec3(1);vec2 p=(gl_FragCoord.xy*2.-Resolution.xy)*iResolution.y;float seed=float(baseHash(floatBitsToUint(p-iTime)))/float(0xffffffffU);p+=2.*hash2(seed)*iResolution.y;vec3 rd=normalize(vec3(p,FOV));rd=TBN*rd;vec3 fp=ro+rd*fpd;ro=ro+TBN*vec3(randomInUnitDisk(seed),0.)*DOF_FACTOR;rd=normalize(fp-ro);col=render(ro,rd,seed);if(Frame==0){outColor=vec4(col,1);}else{outColor=vec4(col,1)+texelFetch(base,ivec2(gl_FragCoord),0);}}}";

    var ray_comb_vs = "#version 300 es\n#include <macros>\nin vec3 POSITION;void main(){gl_Position=vec4(POSITION,1);}";

    var ray_comb_fs = "#version 300 es\n#extension GL_OES_texture_float : enable\n#extension GL_OES_texture_float_linear : enable\nprecision highp float;uniform sampler2D base;uniform sampler2D test;uniform float EXPOSURE;\n#include <macros>\n#define SHADER_NAME ray_final\n#define PI 3.14159265358979\n#define GAMMA 2.2\nout vec4 outColor;vec3 toneMapACES(vec3 color){const float A=2.51;const float B=0.03;const float C=2.43;const float D=0.59;const float E=0.14;return pow(clamp((color*(A*color+B))/(color*(C*color+D)+E),0.0,1.0),vec3(1.0/GAMMA));}void main(){vec4 data=texelFetch(test,ivec2(gl_FragCoord),0);outColor=vec4(toneMapACES(data.rgb/data.w*EXPOSURE),1);}";

    var background_fs = "#version 300 es\n#define USE_HDR\n#ifdef USE_HDR\n#extension GL_OES_texture_float : enable\n#extension GL_OES_texture_float_linear : enable\n#endif\nprecision highp float;\n#include <macros>\n#define PI 3.14159265358979\n#define GAMMA 2.2\nout vec4 outColor;in vec3 normal;in vec2 uv;in vec2 uv1;in vec3 pos;in vec4 vColor;in mat3 TBN;uniform vec3 u_irrSH[9];\n#ifdef HAS_ENV_MAP\nuniform samplerCube env;\n#endif\nuniform vec3 u_Camera;\n#ifdef USE_HDR\n#ifdef HAS_EXPUSRE\nuniform float u_Exposure;\n#else\n#define u_Exposure 1.\n#endif\n#endif\nvec4 sRGBtoLINEAR(vec4 color){return vec4(pow(color.rgb,vec3(GAMMA)),color.a);}vec4 LINEARtoSRGB(vec4 color){return vec4(pow(color.rgb,vec3(1.0/GAMMA)),color.a);}vec3 toneMapACES(vec3 color){const float A=2.51;const float B=0.03;const float C=2.43;const float D=0.59;const float E=0.14;return pow(clamp((color*(A*color+B))/(color*(C*color+D)+E),0.0,1.0),vec3(1.0/GAMMA));}vec3 diffuseSH(const in vec3 n){return max(vec3(0),u_irrSH[0]+u_irrSH[1]*n.y+u_irrSH[2]*n.z+u_irrSH[3]*n.x+u_irrSH[4]*n.y*n.x+u_irrSH[5]*n.y*n.z+u_irrSH[6]*(3.0*n.z*n.z-1.0)+u_irrSH[7]*(n.z*n.x)+u_irrSH[8]*(n.x*n.x-n.y*n.y));}vec3 decoRGBE(vec4 r){if(r.a!=0.){r*=255.;float e=pow(2.,r.a-128.-8.);return vec3(r.r*e,r.g*e,r.b*e);}return vec3(0);}void main(){vec3 sh=diffuseSH(normalize(pos))*.05;outColor=vec4(toneMapACES(sh),1);\n#ifdef HAS_ENV_MAP\noutColor=vec4(toneMapACES(decoRGBE(texture(env,pos,0.))*1.5),1);\n#endif\n}";

    let glsl = {
        basic: {
            vs: basic_vs,
            fs: basic_fs,
        },
        stylize: {
            vs: stylize_vs,
            fs: stylize_fs,
        },
        stylize2: {
            vs: stylize2_vs,
            fs: stylize2_fs,
        },
        vignetting: {
            vs: vignetting_vs,
            fs: vignetting_fs,
        },
        line: {
            vs: line_vs,
            fs: line_fs,
        },
        ray: {
            vs: ray_vs,
            fs: ray_fs,
        },
        ray_comb: {
            vs: ray_comb_vs,
            fs: ray_comb_fs,
        },
        background: {
            fs: background_fs,
        },
    };

    class Shader {
        constructor(vertCode = glsl.basic.vs, fragCode = glsl.basic.fs, macros = {}) {
            this.isDirty = true; // Shader sources status
            this.vertexSource = vertCode;
            this.fragmentSource = fragCode;
            this.macros = macros;
        }
        static clone(shader) {
            let temp = new Shader(shader.vertexSource, shader.fragmentSource);
            temp.macros = Object.assign({}, shader.macros);
            return temp;
        }
        static buildProgram(shader, ctx) {
            shader.isDirty = false;
            // if(!this.isDirty) return;
            // If current program needs recompile
            shader.ctx = ctx;
            // prepare macros
            this.macros = '';
            for (let macro in shader.macros) {
                this.macros += `\n#define ${macro} ${shader.macros[macro]}\n`;
            }
            // if WebGL shader is already exist, then dispose them
            if (shader.vertex) { // Vertex shader
                shader.ctx.deleteShader(shader.vertex);
            }
            shader.vertex = Shader.compileShader(shader.ctx, shader.ctx.VERTEX_SHADER, shader.vertexSource.replace('#include <macros>', this.macros));
            if (shader.fragment) { // Fragment shader
                shader.ctx.deleteShader(shader.fragment);
            }
            shader.fragment = Shader.compileShader(shader.ctx, shader.ctx.FRAGMENT_SHADER, shader.fragmentSource.replace('#include <macros>', this.macros));
            if (!shader.vertex || !shader.fragment) {
                return;
            }
            if (shader.program) { // Shader Program
                shader.ctx.deleteProgram(shader.program);
            }
            shader.program = Shader.createShaderProgram(shader.ctx, shader.vertex, shader.fragment);
            // Pickup details
            shader.attributes = Shader.pickupActiveAttributes(shader.ctx, shader.program);
            shader.uniforms = Shader.pickupActiveUniforms(shader.ctx, shader.program);
        }
        static pickupActiveAttributes(ctx, shader) {
            const amount = ctx.getProgramParameter(shader, ctx.ACTIVE_ATTRIBUTES);
            let attributes = {};
            for (let i = 0; i < amount; i++) {
                const { name } = ctx.getActiveAttrib(shader, i);
                const location = ctx.getAttribLocation(shader, name);
                attributes[name] = location;
            }
            return attributes;
        }
        static pickupActiveUniforms(gl, shader) {
            const amount = gl.getProgramParameter(shader, gl.ACTIVE_UNIFORMS);
            let uniforms = {};
            for (let i = 0; i < amount; i++) {
                const { name, type } = gl.getActiveUniform(shader, i);
                const location = gl.getUniformLocation(shader, name);
                const setter = UniformInfo.getUnifSetter(type);
                let length = gl[setter].length;
                if (length == 0) { // prototype was modified by debugging tools
                    length = UniformInfo.getUnifArgLenght(type);
                }
                uniforms[name] = new UniformInfo(location, type, setter, length);
            }
            return uniforms;
        }
        static compileShader(gl, type, code) {
            let shader = gl.createShader(type);
            gl.shaderSource(shader, code);
            gl.compileShader(shader);
            if (gl.getShaderParameter(shader, gl.COMPILE_STATUS) === true) {
                return shader;
            }
            console.log(code);
            console.warn(gl.getShaderInfoLog(shader));
            gl.deleteShader(shader);
        }
        static createShaderProgram(gl, vertexShader, fragmentShader) {
            let program = gl.createProgram();
            gl.attachShader(program, vertexShader);
            gl.attachShader(program, fragmentShader);
            gl.linkProgram(program);
            if (gl.getProgramParameter(program, gl.LINK_STATUS)) {
                return program;
            }
            console.warn(gl.getProgramInfoLog(program));
            // Dispose
            gl.deleteProgram(program);
            gl.deleteShader(vertexShader);
            gl.deleteShader(fragmentShader);
        }
    }
    Shader.macros = ''; // Reduce GC?
    class UniformInfo {
        constructor(location, type, setter, argLength) {
            this.location = location;
            this.type = type;
            this.setter = setter;
            this.argLength = argLength;
        }
        static getUnifSetter(type) {
            switch (type) {
                case WebGLRenderingContext.FLOAT:
                    return 'uniform1f';
                case WebGLRenderingContext.FLOAT_VEC2:
                    return 'uniform2fv';
                case WebGLRenderingContext.FLOAT_VEC3:
                    return 'uniform3fv';
                case WebGLRenderingContext.FLOAT_VEC4:
                    return 'uniform4f';
                case WebGLRenderingContext.INT:
                    return 'uniform1i';
                case WebGLRenderingContext.INT_VEC2:
                    return 'uniform2i';
                case WebGLRenderingContext.INT_VEC3:
                    return 'uniform3i';
                case WebGLRenderingContext.INT_VEC4:
                    return 'uniform4i';
                // case WebGLRenderingContext.BOOL:
                //     return WebGLRenderingContext.uniform1f;
                // case WebGLRenderingContext.BOOL_VEC2:
                //     return WebGLRenderingContext.uniform1f;
                // case WebGLRenderingContext.BOOL_VEC3:
                //     return WebGLRenderingContext.uniform1f;
                // case WebGLRenderingContext.BOOL_VEC4:
                //     return WebGLRenderingContext.uniform1f;
                case WebGLRenderingContext.FLOAT_MAT2:
                    return 'uniformMatrix2fv';
                case WebGLRenderingContext.FLOAT_MAT3:
                    return 'uniformMatrix3fv';
                case WebGLRenderingContext.FLOAT_MAT4:
                    return 'uniformMatrix4fv';
                case WebGLRenderingContext.SAMPLER_2D:
                    return 'uniform1i';
                case WebGLRenderingContext.SAMPLER_CUBE:
                    return 'uniform1i';
            }
        }
        static getUnifArgLenght(type) {
            switch (type) {
                case WebGLRenderingContext.FLOAT:
                case WebGLRenderingContext.FLOAT_VEC2:
                case WebGLRenderingContext.FLOAT_VEC3:
                case WebGLRenderingContext.FLOAT_VEC4:
                case WebGLRenderingContext.INT:
                case WebGLRenderingContext.INT_VEC2:
                case WebGLRenderingContext.INT_VEC3:
                case WebGLRenderingContext.INT_VEC4:
                case WebGLRenderingContext.SAMPLER_2D:
                case WebGLRenderingContext.SAMPLER_CUBE:
                    return 2;
                // case WebGLRenderingContext.BOOL:
                // case WebGLRenderingContext.BOOL_VEC2:
                // case WebGLRenderingContext.BOOL_VEC3:
                // case WebGLRenderingContext.BOOL_VEC4:
                case WebGLRenderingContext.FLOAT_MAT2:
                case WebGLRenderingContext.FLOAT_MAT3:
                case WebGLRenderingContext.FLOAT_MAT4:
                    return 3; // (location, transpose, value)
            }
        }
    }

    var RenderQueue;
    (function (RenderQueue) {
        RenderQueue[RenderQueue["Opaque"] = 0] = "Opaque";
        RenderQueue[RenderQueue["Blend"] = 1] = "Blend";
    })(RenderQueue || (RenderQueue = {}));
    class Material {
        constructor(shader, name = null, doubleSided = false) {
            this.isDirty = true;
            // textures: Texture[] = [];
            this.textures = new Map();
            this.queue = RenderQueue.Opaque;
            this.uniforms = {};
            this.ref = 0; // Reference counting
            this.shader = Shader.clone(shader);
            this.name = name;
            if (name)
                this.shader.macros['SHADER_NAME'] = name;
            this.doubleSided = doubleSided;
            Material.pool.push(this);
        }
        static clone(mat) {
            return new Material(mat.shader, mat.name, mat.doubleSided);
        }
        static useMaterial(mat, ctx) {
            if (mat.shader.isDirty) {
                // Update Shader
                Shader.buildProgram(mat.shader, ctx);
            }
            ctx.useProgram(mat.shader.program);
        }
        static setUniform(mat, key, value) {
            if (mat.uniforms[key] == null) {
                mat.uniforms[key] = new Uniform();
            }
            mat.uniforms[key].value = value;
            mat.uniforms[key].isDirty = true;
            mat.isDirty = true;
        }
        static updateUniform(mat) {
            const { shader } = mat;
            const gl = shader.ctx;
            for (let k in mat.uniforms) {
                const uni = mat.uniforms[k];
                if (uni.value != null && uni.isDirty) {
                    uni.isDirty = false;
                    const info = shader.uniforms[k];
                    if (info == null) ;
                    else {
                        if (info.argLength == 3) {
                            gl[info.setter](info.location, false, uni.value);
                        }
                        else {
                            gl[info.setter](info.location, uni.value);
                        }
                    }
                }
            }
            mat.isDirty = false;
        }
        static bindAllTextures(mat, ctx, force = false) {
            for (let [, [channel, tex]] of mat.textures) {
                Texture.bindTexture(ctx, tex, channel);
                // Material.setUniform(mat, uniform, channel);
                if (tex.isDirty || force) {
                    tex.isDirty = false;
                }
            }
        }
        static unbindAllTextures(mat, ctx) {
            for (let [, [channel, tex]] of mat.textures) {
                Texture.unbindTexture(ctx, tex, channel);
            }
        }
        static setTexture(mat, name, tex) {
            let channel;
            if (mat.textures.has(name)) {
                channel = mat.textures.get(name)[0];
            }
            else {
                channel = mat.textures.size;
            }
            // console.warn(`Set ${mat.name} texture '${name}' to ${channel}`);
            mat.textures.set(name, [channel, tex]);
            Material.setUniform(mat, name, channel);
            mat.isDirty = true;
            // tex.isDirty = true;
        }
    }
    Material.pool = [];
    Material.SHADER_PATH = 'res/shader/';
    class Uniform {
        constructor() {
            this.value = null; // empty texture channel must be null
            this.isDirty = false;
        }
    }

    class EntityMgr {
        static create(name = null, pure = false) {
            this.hasNewMember = true;
            let gameObject = document.createElement(this.entityTag);
            if (name) {
                gameObject.dataset.name = name;
                gameObject.textContent = name;
            }
            gameObject.components = {};
            if (this.getDefaultComponent && !pure)
                this.addComponent(gameObject, this.getDefaultComponent());
            // Alias
            gameObject['addComponent'] = (comp) => this.addComponent(gameObject, comp);
            // Debug envent
            gameObject.addEventListener('pointerdown', e => {
                console.log('\t|-' + gameObject.dataset.name);
                console.log(gameObject.components);
                let trans = gameObject.components.Transform;
                // toggle visible
                if (trans != null) {
                    trans.isVisible = !trans.isVisible;
                }
                e.stopPropagation();
            });
            return gameObject;
        }
        static clone(entity) {
            let temp = this.create(entity.dataset.name, true);
            this.addComponent(temp, this.cloneMethods['_Transform'](entity.components.Transform));
            for (let comp in entity.components) {
                if (this.cloneMethods[comp]) {
                    this.addComponent(temp, this.cloneMethods[comp](entity.components[comp]));
                }
            }
            for (let i = 0; i < entity.childElementCount; i++) {
                temp.appendChild(this.clone(entity.children[i]));
            }
            return temp;
        }
        static find(selector, root = document) {
            let nodes = Array.from(root.querySelectorAll(selector)); // convert NodeList to Array
            return nodes;
        }
        static getComponents(componentName, root = document) {
            return this.find(`${this.entityTag}[${componentName.toLowerCase()}]`, root).map(({ components }) => components[componentName]);
        }
        static getEntites(deps, root = document) {
            return this.find(`${this.entityTag}[${deps.join('][')}]`, root);
        }
        static addComponent(entity, component) {
            this.hasNewMember = true;
            let componentName = component.constructor.name;
            entity.components[componentName] = component;
            entity.setAttribute(componentName, '');
            component.entity = entity;
            return component;
        }
    }
    EntityMgr.entityTag = 'ash-entity';
    EntityMgr.hasNewMember = false;
    EntityMgr.cloneMethods = {};

    class ComponentSystem {
    }

    class System {
        static loop() {
            for (let name in this.sysQueue) {
                let sys = this.sysQueue[name];
                if (EntityMgr.hasNewMember || sys.group.length == 0) {
                    sys.group = EntityMgr.getEntites(sys.depends);
                }
                sys.onUpdate(this.deltaTime);
            }
            EntityMgr.hasNewMember = false;
            this.deltaTime = (Date.now() - this.lastTime) / 1000;
            this.lastTime = Date.now();
            if (!this.isStoped)
                requestAnimationFrame(this.loop.bind(this));
        }
        static start() {
            if (!this.isStoped)
                return;
            this.isStoped = false;
            this.loop();
        }
        static stop() {
            this.isStoped = true;
        }
        static registSystem(system) {
            this.sysQueue[system.depends.toString()] = system;
        }
        static getSystem(system) {
            return this.sysQueue[system.depends.toString()];
        }
        static removeSystem(system) {
            this.sysQueue[system.depends.toString()] = null;
        }
    }
    System.lastTime = 0;
    System.deltaTime = 0;
    System.isStoped = true;
    System.sysQueue = {};
    System.start();

    class MeshRenderer {
        constructor(screen, mesh, material) {
            this.materials = [];
            this.isDirty = true;
            if (screen != null)
                this.SID = screen.id;
            this.mesh = mesh;
            // specify the length of each attribute, considering the vertices color could be or vec4
            // FIXME:
            for (let att of mesh.attributes) {
                material.shader.macros[`${att.attribute}_SIZE_${att.size}`] = '';
            }
            MeshRendererSystem.attachMaterial(this, material);
        }
        static clone(source) {
            let mr = new MeshRenderer(null, source.mesh);
            mr.SID = source.SID;
            for (let mat of source.materials) {
                MeshRendererSystem.attachMaterial(mr, mat);
            }
            return mr;
        }
    }
    EntityMgr.cloneMethods['MeshRenderer'] = MeshRenderer.clone;
    class MeshRendererSystem extends ComponentSystem {
        constructor() {
            super(...arguments);
            this.group = [];
            this.depends = [
                MeshRenderer.name
            ];
            // According those discussion below, having actors draw themselves is not a good design
            // https://gamedev.stackexchange.com/questions/50531/entity-component-based-engine-rendering-separation-from-logic
            // https://gamedev.stackexchange.com/questions/14133/should-actors-in-a-game-be-responsible-for-drawing-themselves/14138#14138
        }
        onUpdate(deltaTime) {
            // Before render
            for (let id in Screen.list) {
                let screen = Screen.list[id];
                if (screen.filters.length) {
                    screen.capture.bind();
                    screen.setViewport(screen.capture.width, screen.capture.height);
                }
                screen.clear();
            }
            for (let { components } of this.group) {
                MeshRendererSystem.render(components.MeshRenderer, RenderQueue.Opaque);
            }
            for (let { components } of this.group) {
                // TODO: handle multiple transparent objects
                const mr = components.MeshRenderer;
                MeshRendererSystem.render(components.MeshRenderer, RenderQueue.Blend);
            }
            // After render
            for (let id in Screen.list) {
                let screen = Screen.list[id];
                screen.gl.depthFunc(WebGL2RenderingContext.ALWAYS);
                screen.gl.disable(WebGL2RenderingContext.BLEND);
                // post effects
                for (let [i, ft] of screen.filters.entries()) {
                    if (ft.renderToScreen) {
                        // Render to screen
                        ft.bind(null);
                        screen.setViewport();
                    }
                    else {
                        ft.bind();
                        screen.setViewport(ft.width, ft.height);
                    }
                    if (ft.onRender)
                        ft.onRender(deltaTime);
                    MeshRendererSystem.render(ft.meshRender);
                }
                screen.gl.enable(WebGL2RenderingContext.BLEND);
                screen.gl.depthFunc(WebGL2RenderingContext.LESS);
                // // Render to screen
                // let lastft = screen.filters[screen.filters.length-1];
                // lastft.bind(null);
                // screen.setViewport();
                // MeshRendererSystem.render(lastft.meshRender);
            }
        }
        static useMaterial(mr, index) {
            Material.useMaterial(mr.materials[index], Screen.list[mr.SID].gl);
        }
        static attachMaterial(mr, mat) {
            if (mr.SID == null || mat == null)
                return;
            mat.ref++;
            mr.materials.push(mat);
            this.useMaterial(mr, 0);
            Material.updateUniform(mat); // the first time this material get context
            this.updateVAO(mr);
        }
        static bindVAO(mr, vao) {
            if (Screen.platform == 'iOS') {
                Mesh.bindAccessorsVBO(mr.mesh, Screen.list[mr.SID].gl, mr.materials[0].shader.attributes);
            }
            else {
                Screen.list[mr.SID].gl.bindVertexArray(vao);
            }
        }
        static updateVAO(mr) {
            if (mr.vao) {
                Screen.list[mr.SID].gl.deleteVertexArray(mr.vao);
            }
            mr.vao = Screen.list[mr.SID].gl.createVertexArray();
            this.bindVAO(mr, mr.vao);
            Mesh.bindAccessorsVBO(mr.mesh, Screen.list[mr.SID].gl, mr.materials[0].shader.attributes);
            this.bindVAO(mr, null);
        }
        static updateMaterial(target) {
            if (target.materials[0].isDirty) {
                Material.updateUniform(target.materials[0]);
            }
        }
        static render(target, queue = RenderQueue.Opaque) {
            let screen = Screen.list[target.SID];
            let { gl, mainCamera } = screen;
            // Enable material
            let idShader = 0;
            const currentMat = target.materials[idShader];
            if (currentMat.queue != queue)
                return;
            let needsUpdateTexture = currentMat.shader.isDirty;
            this.useMaterial(target, idShader);
            if (currentMat.doubleSided) {
                gl.disable(gl.CULL_FACE);
            }
            else {
                gl.enable(gl.CULL_FACE);
            }
            if (target.entity) {
                if (!target.entity.components.Transform.isVisible)
                    return;
                let trans = target.entity.components.Transform;
                if (mainCamera) {
                    Material.setUniform(currentMat, 'VP', mainCamera.vp);
                    Material.setUniform(currentMat, 'u_Camera', mainCamera.entity.components.Transform.worldPos);
                }
                Material.setUniform(currentMat, 'M', trans.worldMatrix);
                Material.setUniform(currentMat, 'nM', trans.worldNormalMatrix);
                if (trans.jointsMatrices) {
                    Material.setUniform(currentMat, 'jointMat[0]', trans.jointsMatrices);
                }
            }
            // Update uniforms of material
            this.updateMaterial(target);
            // Bind all textures
            Material.bindAllTextures(currentMat, gl, needsUpdateTexture);
            // Bind Mesh
            this.bindVAO(target, target.vao); // Bind VAO
            // Drawcall
            Mesh.drawcall(target.mesh, gl);
            // Clean texture channels
            // Material.unbindAllTextures(currentMat, gl);
        }
    }
    System.registSystem(new MeshRendererSystem());

    // Post effect
    class Filter {
        constructor(screen, shader, width = screen.width, height = screen.height, floatTex = false) {
            this.color = [];
            this.depth = [];
            this.renderToScreen = true;
            this.onRender = null;
            this.useFloatTexture = false;
            this.ctx = screen.gl;
            this.screen = screen;
            this.width = width;
            this.height = height;
            // TODO:
            this.useFloatTexture = true;
            // Create framebuffer
            this.buffer = this.ctx.createFramebuffer();
            this.output = this.attachTexture();
            this.mesh = new fill();
            shader.macros['screenSize'] = `vec2(${screen.width}, ${screen.height})`;
            this.material = new Material(shader);
            this.meshRender = new MeshRenderer(screen, this.mesh, this.material);
        }
        clone(screen = this.screen) {
            return new Filter(screen, Shader.clone(this.material.shader), this.width, this.height);
        }
        setInput(tex, channel = 'base') {
            this.input = tex;
            Material.setTexture(this.material, channel, tex);
            this.material.isDirty = true;
        }
        bind(target = this.buffer) {
            this.ctx.bindFramebuffer(WebGL2RenderingContext.FRAMEBUFFER, target);
        }
        attachTexture() {
            this.bind();
            let color = new Texture(null, Filter.sampleColor, this.width, this.height);
            if (this.useFloatTexture) {
                color.format = WebGL2RenderingContext.RGBA;
                color.internalformat = WebGL2RenderingContext.RGBA32F;
                color.type = WebGL2RenderingContext.FLOAT;
            }
            Texture.createTexture(this.ctx, color);
            this.ctx.framebufferTexture2D(Filter.FRAMEBUFFER, Filter.COLOR_ATTACH_BASE + this.color.length, color.glType, color.sampler.texture, color.level);
            this.color.push(color);
            let depth = new Texture(null, Filter.sampleDepth, this.width, this.height);
            depth.internalformat = WebGL2RenderingContext.DEPTH_COMPONENT24;
            depth.format = WebGL2RenderingContext.DEPTH_COMPONENT;
            depth.type = WebGL2RenderingContext.UNSIGNED_INT;
            Texture.createTexture(this.ctx, depth);
            this.ctx.framebufferTexture2D(Filter.FRAMEBUFFER, Filter.DEPTH_ATTACHMENT, depth.glType, depth.sampler.texture, depth.level);
            this.depth.push(depth);
            this.bind(null);
            return color;
        }
    }
    Filter.sampleColor = {
        magFilter: WebGL2RenderingContext.LINEAR,
        minFilter: WebGL2RenderingContext.LINEAR,
        wrapS: WebGL2RenderingContext.REPEAT,
        wrapT: WebGL2RenderingContext.REPEAT,
    };
    Filter.sampleDepth = {
        magFilter: WebGL2RenderingContext.NEAREST,
        minFilter: WebGL2RenderingContext.NEAREST,
        wrapS: WebGL2RenderingContext.REPEAT,
        wrapT: WebGL2RenderingContext.REPEAT,
    };
    Filter.COLOR_ATTACH_BASE = WebGL2RenderingContext.COLOR_ATTACHMENT0;
    Filter.DEPTH_ATTACHMENT = WebGL2RenderingContext.DEPTH_ATTACHMENT;
    Filter.FRAMEBUFFER = WebGL2RenderingContext.FRAMEBUFFER;
    class fill extends Mesh {
        constructor() {
            let vert = new Float32Array([
                -1, 3, 0, -1, -1, 0, 3, -1, 0
            ]);
            let vbo = new bufferView(vert.buffer, {
                byteOffset: vert.byteOffset,
                byteLength: vert.byteLength,
                byteStride: 3 * 4,
                target: WebGL2RenderingContext.ARRAY_BUFFER
            });
            let position = new Accessor({
                bufferView: vbo,
                componentType: WebGL2RenderingContext.FLOAT,
                byteOffset: 0,
                type: "VEC3",
                count: 3
            }, 'POSITION');
            super([position]);
        }
    }

    class Screen {
        constructor(selector) {
            this.filters = [];
            this.output = null;
            this.bgColor = [1, 1, 1, 1];
            this.id = selector;
            // Detect device
            if (navigator.userAgent.indexOf('iPhone') != -1 || navigator.userAgent.indexOf('iPad') != -1) {
                Screen.platform = 'iOS';
            }
            this.canvas = document.querySelector(selector);
            if (!this.canvas) {
                console.error('Canvas not found!');
                return;
            }
            this.gl = this.canvas.getContext('webgl2');
            if (!this.gl) {
                console.error('Get Context Failed');
                alert('Your browser do not support WebGL2');
                return;
            }
            // Regist current screen
            Screen.list[selector] = this;
            this.gl.enable(this.gl.DEPTH_TEST);
            this.gl.enable(this.gl.BLEND);
            this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
            // this.ext = this.gl.getExtension('WEBGL_draw_buffers');
            this.gl.getExtension('OES_texture_float');
            this.gl.getExtension('OES_texture_float_linear');
            this.gl.getExtension('OES_texture_half_float');
            this.gl.getExtension("EXT_color_buffer_float"); // Framebuffer
            this.setScreenSize(); // initial - full screen
            // initial capture
            // this.pow2width = nearestPow2(this.width);
            // this.pow2height = nearestPow2(this.height);
            this.capture = new Filter(this, new Shader());
            this.capture.renderToScreen = false;
            // Bloom.initFilters(this)
            // this.attachFilter(new Vignetting(this));
        }
        setScreenSize(width = window.innerWidth, height = window.innerHeight) {
            let { devicePixelRatio } = window;
            console.log(devicePixelRatio);
            this.canvas.setAttribute('width', width * devicePixelRatio + '');
            this.canvas.setAttribute('height', height * devicePixelRatio + '');
            this.canvas.style.width = width + 'px';
            this.canvas.style.height = height + 'px';
            this.width = width * devicePixelRatio;
            this.height = height * devicePixelRatio;
            this.ratio = devicePixelRatio;
            this.setViewport();
        }
        setViewport(width = this.width, height = this.height) {
            this.gl.viewport(0, 0, width, height);
        }
        clear(r = this.bgColor[0], g = this.bgColor[1], b = this.bgColor[2], a = this.bgColor[3], mode = this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT) {
            this.gl.clearColor(r, g, b, a);
            this.gl.clear(mode);
        }
        attachFilter(ft) {
            if (this.output == null) {
                // filter head
                ft.setInput(this.capture.output);
            }
            else {
                // Attach to the filter chain
                this.output.renderToScreen = false;
                ft.setInput(this.output.output);
            }
            this.filters.push(ft);
            this.output = ft;
        }
        deleteFilter(index) {
            let target = this.filters[index];
            if (!target) {
                console.error('Filter does not exist!');
                return;
            }
            let prev = this.filters[index - 1] || this.capture;
            let next = this.filters[index + 1];
            if (next) {
                next.setInput(prev.output);
            }
            else {
                prev.renderToScreen = true;
            }
            this.filters.splice(index, 1);
            this.output = this.filters[this.filters.length - 1];
        }
    }
    Screen.list = {};
    Screen.platform = 'unknown';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    class Transform {
        constructor() {
            this.worldPos = fromValues$2(0, 0, 0);
            this.translate = fromValues$2(0, 0, 0);
            this.rotate = fromValues$2(0, 0, 0);
            this.scale = fromValues$2(1, 1, 1);
            this.quaternion = fromValues$3(0, 0, 0, 1);
            // RTS
            this.localMatrix = create$1();
            this.worldMatrix = create$1();
            this.worldInverseMatrix = create$1();
            this.worldNormalMatrix = create$1();
            this.isVisible = true;
            this.isDirty = false;
            // RTS
            identity$1(this.localMatrix);
            identity$1(this.worldMatrix);
        }
        static clone(source) {
            let trans = new Transform();
            copy$2(trans.translate, source.translate);
            copy$2(trans.rotate, source.rotate);
            copy$2(trans.scale, source.scale);
            copy$3(trans.quaternion, source.quaternion);
            return trans;
        }
    }
    EntityMgr.getDefaultComponent = () => new Transform();
    EntityMgr.cloneMethods['_Transform'] = Transform.clone;
    class TransformSystem extends ComponentSystem {
        constructor() {
            super(...arguments);
            this.group = [];
            this.depends = [Transform.name];
        }
        onUpdate() {
            for (let { components } of this.group) {
                // if(trans.isDirty)
                TransformSystem.updateMatrix(components.Transform);
            }
        }
        static decomposeMatrix(trans, mat = trans.localMatrix) {
            // https://math.stackexchange.com/questions/237369/given-this-transformation-matrix-how-do-i-decompose-it-into-translation-rotati
            // Get scaling
            set$2(trans.translate, mat[0], mat[1], mat[2]); // temp
            let sx = len(trans.translate);
            set$2(trans.translate, mat[4], mat[5], mat[6]); // temp
            let sy = len(trans.translate);
            set$2(trans.translate, mat[8], mat[9], mat[10]); // temp
            let sz = len(trans.translate);
            set$2(trans.scale, sx, sy, sz);
            if (determinant$1(mat) < 0) {
                sx = -sx;
            }
            // Get translation
            set$2(trans.translate, mat[12], mat[13], mat[14]);
            mat[12] = mat[13] = mat[14] = 0;
            // Get rotation
            mat[0] /= sx;
            mat[1] /= sx;
            mat[2] /= sx;
            mat[4] /= sy;
            mat[5] /= sy;
            mat[6] /= sy;
            mat[8] /= sz;
            mat[9] /= sz;
            mat[10] /= sz;
            getRotation(trans.quaternion, mat);
        }
        static updateMatrix(trans) {
            trans.isDirty = false;
            // Calculate local matrix
            fromRotationTranslationScale(trans.localMatrix, trans.quaternion, trans.translate, trans.scale);
            invert$1(trans.worldInverseMatrix, trans.worldMatrix);
            transpose$1(trans.worldNormalMatrix, trans.worldInverseMatrix);
            // Calculate world matrix
            let parent = trans.entity.parentElement;
            if (parent != null && parent.components) {
                let world = parent.components.Transform;
                // if(world.isDirty) {
                //     this.updateMatrix(world);
                // }
                // Update world matrix
                mul$1(trans.worldMatrix, world.worldMatrix, trans.localMatrix);
                // Update world position
                transformMat4(trans.worldPos, trans.translate, trans.worldMatrix);
            }
            else { // if current node is the root of world
                copy$1(trans.worldMatrix, trans.localMatrix);
            }
        }
    }
    System.registSystem(new TransformSystem());
    // (!) Circular dependency: src/ECS/system.ts -> src/ECS/entityMgr.ts -> src/transform.ts -> src/ECS/system.ts

    class Skin {
        constructor() {
            // Inverse Bind pose Matrices
            this.ibm = [];
            this.jointMat = [];
        }
    }
    class SkinSystem extends ComponentSystem {
        constructor() {
            super(...arguments);
            this.group = [];
            this.depends = [
                Skin.name,
            ];
        }
        onUpdate() {
            for (let { components } of this.group) {
                let skin = components.Skin;
                // global transform of node that the mesh ss attached to
                let trans = components.Transform;
                for (let [i, joint] of skin.joints.entries()) {
                    // A. Canceled root bone's world matrix, recalculate in vertex shader
                    mul$1(skin.jointMat[i], trans.worldInverseMatrix, joint.worldMatrix);
                    mul$1(skin.jointMat[i], skin.jointMat[i], skin.ibm[i]);
                    // B. Apply root bone's world matrix in it each bone matrix
                    // mat4.mul(skin.jointMat[i], joint.worldMatrix, skin.ibm[i]);
                }
                // if(!skin.materials) {
                //     skin.materials = [];
                //     let materials: any = trans.entity.parentElement.querySelectorAll('ash-entity[Material]');
                //     for(let entity of materials) {
                //         let mat = entity.components.Material as Material;
                //         // mat.shader.macros['HAS_SKINS'] = '';
                //         mat.shader.macros['JOINT_AMOUNT'] = Math.min(skin.jointMat.length, 200);
                //         mat.shader.isDirty = true;
                //         skin.materials.push(mat);
                //     }
                // }
                // update matrices
                // for(let mat of skin.materials) {
                //     Material.setUniform(mat, 'jointMat[0]', skin.outputMat);
                // }
                // let materials: any = trans.entity.querySelectorAll('Material');
                // for(let mat of materials) {
                //     Material.setUniform(mat, 'jointMat[0]', skin.outputMat);
                // }
            }
        }
        ;
    }
    System.registSystem(new SkinSystem());

    class Animation {
        constructor() {
            this.channels = [];
        }
        static attachChannel(anim, chan) {
            anim.channels.push(chan);
            this.totalTime = Math.max(this.totalTime, chan.endTime);
        }
    }
    Animation.totalTime = 0;
    class AnimationChannel {
        constructor(pTarget, timeline, keyframe) {
            this.isLoop = true;
            this.pause = false;
            this.currentTime = 0;
            this.startTime = 0;
            this.endTime = 0;
            this.totalTime = 0;
            this.step = 0;
            this.speed = 1;
            this.channel = pTarget;
            this.timeline = Accessor.newFloat32Array(timeline);
            this.endTime = this.timeline[this.timeline.length - 1];
            this.keyframe = Accessor.getFloat32Blocks(keyframe);
            if (this.timeline.length != 1) {
                this.startTime = this.timeline[0];
            }
            else {
                this.currentTime = this.endTime;
            }
        }
    }
    class AnimationSystem extends ComponentSystem {
        constructor() {
            super(...arguments);
            this.group = [];
            this.depends = [
                Animation.name,
            ];
        }
        reset(anim) {
            anim.step = 0;
            anim.currentTime = 0;
        }
        static step(anim) {
            let rigLength = anim.channel.length;
            let prevKey = anim.step;
            let nextKey = prevKey + 1;
            let prevTime, prevFrame, nextTime, nextFrame;
            if (anim.timeline.length == 1) { // Single frame
                nextKey = 0;
                prevTime = 0;
                anim.pause = true;
            }
            else {
                prevTime = anim.timeline[prevKey];
                prevFrame = anim.keyframe[prevKey];
            }
            nextTime = anim.timeline[nextKey];
            nextFrame = anim.keyframe[nextKey];
            let scopeTime = nextTime - prevTime;
            // Confirm
            if (anim.currentTime < prevTime || anim.currentTime > nextTime) {
                console.error('Wrong step!', anim.currentTime, prevTime, nextTime);
                console.log(anim.timeline);
                return;
            }
            let interpolationValue = scopeTime
                ? (anim.currentTime - prevTime) / scopeTime
                : 1;
            switch (rigLength) {
                case 4:
                    slerp(anim.channel, prevFrame || this.defaultQuat, nextFrame, interpolationValue);
                    break;
                case 3:
                    lerp(anim.channel, prevFrame || this.defaultVec3, nextFrame, interpolationValue);
                    break;
            }
        }
        playStep(anim, dt) {
            if (!anim.pause) {
                if (anim.currentTime > Animation.totalTime) {
                    this.reset(anim);
                    if (!anim.isLoop) {
                        anim.pause = true;
                        // execute the last frame even already missed?
                        // anim.currentTime = anim.endTime;
                        console.log('stop');
                    }
                    return;
                }
                while (anim.currentTime > anim.timeline[anim.step + 1]) {
                    anim.step++;
                }
                if (anim.currentTime > anim.startTime && anim.currentTime <= anim.endTime) {
                    AnimationSystem.step(anim);
                }
                anim.currentTime += dt * anim.speed;
            }
        }
        onUpdate(dt) {
            for (let { components } of this.group) {
                if (dt > 0.016)
                    dt = 0.016;
                let anim = components.Animation;
                for (let channel of anim.channels) {
                    this.playStep(channel, dt);
                }
            }
        }
        ;
    }
    AnimationSystem.defaultQuat = create$4();
    AnimationSystem.defaultVec3 = create$2();
    System.registSystem(new AnimationSystem());

    class gltfScene {
        constructor(gltf) {
            this.scene = EntityMgr.create('scene');
            this.gltf = gltf;
            // Materials
            // set default material if materials does not exist
            if (!gltf.materials) {
                gltf.materials = [{ name: 'Default_Material' }];
            }
            gltf.materials = gltf.materials.map(config => {
                let mat = new Material(gltf.commonShader, config.name, config.doubleSided);
                console.log(config);
                this.detectConfig(mat, config);
                Material.setTexture(mat, 'brdfLUT', gltf.brdfLUT);
                if (gltf.hasEnvmap) {
                    mat.shader.macros['HAS_ENV_MAP'] = '';
                    Material.setTexture(mat, 'env', gltf.envmap);
                    if (gltf.diffmap) {
                        mat.shader.macros['HAS_DIFFENV_MAP'] = '';
                        Material.setTexture(mat, 'diffenv', gltf.diffmap);
                    }
                }
                // if(gltf.skins) {
                //     mat.shader.macros['HAS_SKINS'] = '';
                // }
                return mat;
            });
            // Set up all Vertexes
            gltf.accessors = gltf.accessors.map(acc => {
                acc.bufferView = gltf.bufferViews[acc.bufferView];
                let attr = new Accessor(acc);
                return attr;
            });
            // Create mesh
            gltf.meshes = gltf.meshes.map(mesh => {
                return mesh.primitives.map(meshData => {
                    let { attributes, targets } = meshData;
                    // Pick up attributes
                    let accessors = [];
                    for (let attr in attributes) {
                        let acc = gltf.accessors[attributes[attr]];
                        acc.attribute = attr; // Set attribute name
                        accessors.push(acc);
                    }
                    // Triangles
                    let ebo = gltf.accessors[meshData.indices];
                    let mf = new Mesh(accessors, ebo, meshData.mode);
                    if (attributes.TANGENT == null && attributes.TEXCOORD_0 != null) {
                        console.warn('Using computed tagent!');
                        Mesh.preComputeTangent(mf);
                    }
                    if (attributes.NORMAL == null) {
                        console.warn('Using computed normal!');
                        Mesh.preComputeNormal(mf);
                    }
                    let mat = gltf.materials[meshData.material || 0];
                    if (attributes.JOINTS_0 != null) {
                        mat.shader.macros['HAS_SKINS'] = '';
                    }
                    // Morph targets
                    if (targets) {
                        mat.shader.macros['HAS_MORPH_TARGETS'] = '';
                        Material.setUniform(mat, 'weights', new Float32Array([0.5]));
                        for (let target of targets) {
                            for (let tar in target) {
                                let acc = gltf.accessors[target[tar]];
                                acc.attribute = 'TAR_' + tar;
                                mf.attributes.push(acc);
                            }
                        }
                    }
                    return [mf, mat];
                });
            });
        }
        assemble() {
            return __awaiter(this, void 0, void 0, function* () {
                // Create entity instance for each node
                let gltf = this.gltf;
                let { scene, scenes, nodes, skins, animations } = gltf;
                this.entities = gltf.nodes.map((node, index) => this.createEntity(node, index));
                if (skins) {
                    skins = skins.map(skin => {
                        skin.joints = skin.joints.map(jointIndex => this.entities[jointIndex].components.Transform);
                        if (skin.entity == null) {
                            return;
                        }
                        let skinComp = new Skin();
                        // Set up releated materials
                        skinComp.materials = skin.materials;
                        skinComp.joints = skin.joints;
                        let acc = gltf.accessors[skin.inverseBindMatrices];
                        skinComp.ibm = Accessor.getFloat32Blocks(acc);
                        skinComp.outputMat = new Float32Array(acc.count * acc.size);
                        skinComp.jointMat = Accessor.getSubChunks(acc, skinComp.outputMat);
                        // https://github.com/KhronosGroup/glTF/issues/1270
                        // https://github.com/KhronosGroup/glTF/pull/1195
                        // for (let mat of skin.materials) {
                        //     mat.shader.macros['JOINT_AMOUNT'] = Math.min(skin.joints.length, 200);
                        //     mat.shader.isDirty = true;
                        // }
                        for (let trans of skin.transforms) {
                            trans.jointsMatrices = skinComp.outputMat;
                            let mat = trans.entity.components.Material;
                            mat.shader.macros['JOINT_AMOUNT'] = Math.min(skin.joints.length, 200);
                        }
                        if (skin.entity)
                            skin.entity.addComponent(skinComp);
                        return skinComp;
                    });
                }
                if (animations) {
                    for (let { channels, samplers } of animations) {
                        for (let { sampler, target } of channels) {
                            let e = this.entities[target.node];
                            let trans = e.components.Transform;
                            let mat = e.components.Material;
                            let controlChannel;
                            switch (target.path) {
                                case 'translation':
                                    controlChannel = trans.translate;
                                    break;
                                case 'rotation':
                                    controlChannel = trans.quaternion;
                                    break;
                                case 'scale':
                                    controlChannel = trans.scale;
                                    break;
                            }
                            if (controlChannel != null) {
                                let { input, interpolation, output } = samplers[sampler];
                                let timeline = gltf.accessors[input];
                                let keyframe = gltf.accessors[output];
                                if (e.components.Animation == null) {
                                    e.addComponent(new Animation());
                                }
                                let anim = e.components.Animation;
                                Animation.attachChannel(anim, new AnimationChannel(controlChannel, timeline, keyframe));
                                // console.log(anim);
                            }
                        }
                    }
                }
                // assemble scene tree
                let roots = scenes[scene || 0].nodes;
                for (let r of roots) {
                    let root = this.parseNode(r, nodes);
                    this.scene.appendChild(root);
                }
                console.log(this);
                return this;
            });
        }
        waitEntity(node, index) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(this.createEntity(node, index));
                }, 0);
            });
        }
        detectTexture(mat, texName, texInfo) {
            let { index, texCoord } = texInfo;
            let gltf = this.gltf;
            if (index != null) { // common texture
                Material.setTexture(mat, texName, gltf.textures[index]);
                // Multi UV
                if (texCoord) { // > 0
                    mat.shader.macros[`${texName}_uv`] = `uv${texCoord}`;
                }
            }
        }
        detectConfig(mat, config) {
            let shader = mat.shader;
            for (let key in config) {
                let value = config[key];
                // assueme current property is an texture info
                this.detectTexture(mat, key, value);
                switch (key) {
                    // Textures
                    case 'normalTexture':
                        shader.macros['HAS_NORMAL_MAP'] = '';
                        break;
                    case 'occlusionTexture':
                        shader.macros['HAS_AO_MAP'] = '';
                        break;
                    case 'baseColorTexture':
                        shader.macros['HAS_BASECOLOR_MAP'] = '';
                        break;
                    case 'metallicRoughnessTexture':
                        shader.macros['HAS_METALLIC_ROUGHNESS_MAP'] = '';
                        break;
                    case 'emissiveTexture':
                        shader.macros['HAS_EMISSIVE_MAP'] = '';
                        break;
                    // Factors - pbrMetallicRoughness
                    case 'baseColorFactor':
                        shader.macros['BASECOLOR_FACTOR'] = `vec4(${value.join(',')})`;
                        break;
                    case 'metallicFactor':
                        shader.macros['METALLIC_FACTOR'] = `float(${value})`;
                        break;
                    case 'roughnessFactor':
                        shader.macros['ROUGHNESS_FACTOR'] = `float(${value})`;
                        break;
                    // Alpha Blend Mode
                    case 'alphaMode':
                        shader.macros[value] = '';
                        if (value != 'OPAQUE') {
                            mat.queue = RenderQueue.Blend;
                        }
                        break;
                    case 'alphaCutoff':
                        shader.macros['ALPHA_CUTOFF'] = `float(${value})`;
                        break;
                    case 'pbrMetallicRoughness':
                        this.detectConfig(mat, value);
                        break;
                }
            }
        }
        createEntity(node, index) {
            let { mesh, name, matrix, rotation, scale, translation, skin, camera } = node;
            name = name || 'node_' + index;
            let entity = EntityMgr.create(name);
            let trans = entity.components.Transform;
            if (matrix != null) {
                set$1(trans.localMatrix, ...matrix);
                TransformSystem.decomposeMatrix(trans);
            }
            else {
                if (rotation != null) {
                    set$3(trans.quaternion, ...rotation);
                }
                if (scale != null) {
                    set$2(trans.scale, ...scale);
                }
                if (translation != null) {
                    set$2(trans.translate, ...translation);
                }
            }
            TransformSystem.updateMatrix(trans);
            let transCache = [];
            // let matCache = [];
            if (mesh != null) {
                let renderTarget = entity;
                let meshChunk = this.gltf.meshes[mesh];
                let hasSubnode = meshChunk.length - 1;
                for (let [i, meshData] of meshChunk.entries()) {
                    let [mf, mat] = meshData;
                    if (hasSubnode) {
                        renderTarget = entity.appendChild(EntityMgr.create('subNode_' + i));
                    }
                    renderTarget.addComponent(mf);
                    renderTarget.addComponent(mat);
                    transCache.push(renderTarget.components.Transform);
                    // matCache.push(mat);
                }
            }
            if (skin != null) {
                this.gltf.skins[skin].entity = entity;
                if (!this.gltf.skins[skin].transforms) {
                    this.gltf.skins[skin].transforms = [];
                }
                this.gltf.skins[skin].transforms.push(...transCache);
                // this.gltf.skins[skin].materials = matCache;
            }
            if (camera != null) {
                entity.addComponent(this.gltf.cameras[camera]);
            }
            return entity;
        }
        parseNode(nodeIndex, nodeList) {
            let node = nodeList[nodeIndex];
            let entity = this.entities[nodeIndex];
            if (node.children) {
                for (let child of node.children) {
                    entity.appendChild(this.parseNode(child, nodeList));
                }
            }
            return entity;
        }
    }

    class Camera {
        constructor(aspect = 1, fov = 45, near = 0.1, far = 1000) {
            this.isDirty = true;
            this.aspect = aspect;
            this.fov = fov;
            this.near = near;
            this.far = far;
            this.projection = create$1();
            this.view = create$1();
            this.vp = create$1();
            this.up = fromValues$2(0, 1, 0);
            this.lookAt = create$2();
            Camera.updateProjectionMatrix(this);
        }
        static updateProjectionMatrix(cam) {
            perspective(cam.projection, cam.fov * Math.PI / 180.0, cam.aspect, cam.near, cam.far);
        }
        static updateViewMatrix(cam) {
            let trans = cam.entity.components.Transform;
            lookAt(cam.view, trans.translate, cam.lookAt, cam.up);
            mul$1(cam.view, cam.view, trans.worldInverseMatrix);
            mul$1(cam.vp, cam.projection, cam.view);
        }
    }
    class CameraSystem extends ComponentSystem {
        constructor() {
            super(...arguments);
            this.group = [];
            this.depends = [
                Camera.name
            ];
        }
        onUpdate() {
            for (let { components } of this.group) {
                let camera = components.Camera;
                // let trans = components.Transform as Transform;
                // if(camera.isDirty) {
                Camera.updateViewMatrix(camera);
                // TODO: multiple scenes with multiple cameras
                // let meshRenderers = EntityMgr.getComponents<MeshRenderer>(MeshRenderer.name);
                // for(let mr of meshRenderers) {
                //     Material.setUniform(mr.materials[0], 'P', camera.projection);
                //     Material.setUniform(mr.materials[0], 'V', camera.view);
                //     Material.setUniform(mr.materials[0], 'u_Camera', trans.worldPos);
                // }
                // camera.isDirty = false;
                // }
            }
        }
    }
    System.registSystem(new CameraSystem());

    class Asset {
        static addTask() {
            this.totalTask++;
            if (this.taskObserve)
                this.taskObserve(this.finishedTask, this.totalTask);
        }
        ;
        static finishTask() {
            this.finishedTask++;
            if (this.taskObserve)
                this.taskObserve(this.finishedTask, this.totalTask);
        }
        ;
        static loadImage(url) {
            return new Promise((resolve, reject) => {
                this.addTask();
                let image = new Image();
                image.crossOrigin = "anonymous";
                image.src = url;
                image.onload = () => {
                    resolve(image);
                    this.finishTask();
                };
            });
        }
        static loadBufferImage(buffer, mimeType) {
            return new Promise((resolve, reject) => {
                var blob = new Blob([buffer], { type: mimeType });
                var url = URL.createObjectURL(blob);
                let image = new Image();
                image.src = url;
                image.onload = () => {
                    resolve(image);
                };
            });
        }
        static adjustDataUri(root, uri) {
            return uri.substr(0, 5) == "data:" ? uri : root + uri;
        }
        static glbParse(path) {
            return __awaiter(this, void 0, void 0, function* () {
                let json, bin = [];
                let glb = yield this.loadBuffer(path);
                let offset = 0;
                // HEADER
                let header = new Int32Array(glb, offset, 3);
                offset += 3 * 4;
                let [magic, version, length] = header;
                if (magic != this.glbMagic) {
                    console.error('Magic number incorrect! - ' + header[0]);
                    return;
                }
                while (offset < length) {
                    let [chunkLength, chunkType] = new Int32Array(glb, offset, 2);
                    offset += 2 * 4;
                    let chunkData = glb.slice(offset, offset + chunkLength);
                    switch (chunkType) {
                        // JSON
                        case 0x4E4F534A:
                            json = JSON.parse(this.decoder.decode(chunkData));
                            break;
                        // BIN
                        case 0x004E4942:
                            bin.push(chunkData);
                            break;
                    }
                    offset += chunkLength;
                }
                return {
                    json: json,
                    bin: bin
                };
            });
        }
        static loadGLTF(path, screen, envmap, diffmap, shader) {
            return __awaiter(this, void 0, void 0, function* () {
                let gltf;
                // parse current path
                let root = path.split('/');
                let [filename, format] = root.pop().split('.');
                root = root.join('/') + '/';
                if (format == 'glb') {
                    let glb = yield this.glbParse(path);
                    gltf = glb.json;
                    gltf.buffers = glb.bin;
                    //  BufferViews
                    gltf.bufferViews = gltf.bufferViews.map(bv => new bufferView(gltf.buffers[bv.buffer], bv));
                    if (gltf.images) {
                        gltf.images = yield Promise.all(gltf.images.map(i => this.loadBufferImage(gltf.bufferViews[i.bufferView].dataView, i.mimeType)));
                    }
                }
                else if (format == 'gltf') {
                    // Load gltf
                    gltf = yield (yield fetch(path)).json();
                    // Download buffers
                    gltf.buffers = yield Promise.all(gltf.buffers.map(({ uri }) => this.loadBuffer(this.adjustDataUri(root, uri))));
                    //  BufferViews
                    gltf.bufferViews = gltf.bufferViews.map(bv => new bufferView(gltf.buffers[bv.buffer], bv));
                    // then download images
                    if (gltf.images) {
                        gltf.images = yield Promise.all(gltf.images.map(({ uri }) => this.loadImage(this.adjustDataUri(root, uri))));
                    }
                }
                else {
                    console.error('Wrong file!');
                    return;
                }
                // Camera components
                if (gltf.cameras) {
                    gltf.cameras = gltf.cameras.map(cam => {
                        if (cam.perspective) {
                            // NOTE: Infinite perspective camera is not support yet
                            let { aspectRatio, yfov, znear, zfar } = cam.perspective;
                            let camera = new Camera(screen.width / screen.height, yfov * 180 / Math.PI, znear, zfar);
                            camera.name = cam.name;
                            return camera;
                        }
                    });
                }
                // Textures
                if (gltf.textures) {
                    gltf.textures = gltf.textures.map(tex => {
                        let { source, sampler } = tex;
                        let currentSampler;
                        if (gltf.samplers != null)
                            currentSampler = gltf.samplers[sampler];
                        let texture = new Texture(gltf.images[source], currentSampler);
                        return texture;
                    });
                }
                // Load shader
                gltf.commonShader = shader || Screen.platform == 'iOS'
                    ? new Shader(glsl.stylize.vs, glsl.stylize.fs)
                    : new Shader(glsl.stylize2.vs, glsl.stylize2.fs);
                // Load brdfLUT
                if (this.brdfLUT === undefined) {
                    const brdfurl = 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Viewer/master/assets/images/brdfLUT.png';
                    this.brdfLUT = yield this.loadTexture(brdfurl, { minFilter: WebGL2RenderingContext.LINEAR });
                }
                gltf.brdfLUT = this.brdfLUT;
                if (envmap != null) {
                    gltf.hasEnvmap = true;
                    gltf.envmap = envmap;
                    gltf.diffmap = diffmap;
                }
                else {
                    gltf.hasEnvmap = false;
                }
                // Parse scene
                let { scene } = yield new gltfScene(gltf).assemble();
                // Create meshRenders
                // filter mesh & material which meshRenderer required
                let renderTargets = EntityMgr.getEntites([Mesh.name, Material.name], scene);
                for (let entity of renderTargets) {
                    let mesh = entity.components.Mesh;
                    let material = entity.components.Material;
                    if (material.name == 'outline') {
                        entity.components.Transform.isVisible = false;
                    }
                    entity.addComponent(new MeshRenderer(screen, mesh, material));
                }
                return scene;
            });
        }
        static loadBuffer(bufferPath) {
            return __awaiter(this, void 0, void 0, function* () {
                this.addTask();
                let buffer = yield (yield fetch(bufferPath)).arrayBuffer();
                this.finishTask();
                return buffer;
            });
        }
        static LoadShaderProgram(url) {
            return __awaiter(this, void 0, void 0, function* () {
                url = Material.SHADER_PATH + url;
                let vertPath = url + '.vs.glsl';
                let fragPath = url + '.fs.glsl';
                let [vert, frag] = yield Promise.all([vertPath, fragPath].map(path => fetch(path).then(e => e.text())));
                // console.log(vert);
                // console.log(frag);
                return new Shader(vert, frag);
            });
        }
        static LoadMaterial(matName) {
            return __awaiter(this, void 0, void 0, function* () {
                this.addTask();
                let shader = yield this.LoadShaderProgram(matName);
                this.finishTask();
                return new Material(shader);
            });
        }
        static HDRParse(raw) {
            const data = new Uint8Array(raw);
            let p = 0;
            while (!(data[p] == 10 && data[p + 1] == 10)) {
                p++;
            }
            let info = this.decoder.decode(data.subarray(0, p)).split('\n');
            if (info[0] != '#?RADIANCE') {
                console.table(info);
            }
            p += 2;
            const size_start = p;
            while (data[++p] != 10) {
            }
            let size = this.decoder.decode(data.subarray(size_start, p)).split(' ');
            // let buffer = raw.slice(p+1);
            let rgbeData = data.subarray(p + 1);
            size[1] *= 1;
            size[3] *= 1;
            const total = size[1] * size[3];
            let scanline_num = size[1];
            let scanline_width = size[3];
            // let buffer = new Float32Array(total * 3);
            let buffer = new Uint8Array(total * 4);
            let ptr = 0;
            if (total * 4 != rgbeData.length) {
                const rle_start = Date.now();
                // console.error('RLE encoding!');
                // 4 channels
                for (let y = 0; y < scanline_num; y++) {
                    let flag = rgbeData.subarray(ptr, ptr + 4);
                    ptr += 4;
                    if (flag[0] != 2 || flag[1] != 2) {
                        console.log('this file is not run length encoded');
                    }
                    else {
                        // const scanline_buf = [[], [], [], []];
                        const scanline_buf = [
                            new Uint8Array(scanline_width),
                            new Uint8Array(scanline_width),
                            new Uint8Array(scanline_width),
                            new Uint8Array(scanline_width),
                        ];
                        for (let ch = 0; ch < 4; ch++) {
                            let line_p = 0;
                            const line = scanline_buf[ch];
                            while (line_p < scanline_width) {
                                // while(line.length < scanline_width) {
                                let count = 0;
                                let data = rgbeData.subarray(ptr, ptr + 2);
                                ptr += 2;
                                if (data[0] > 128) {
                                    count = data[0] - 128;
                                    while (count--)
                                        line[line_p++] = data[1];
                                    // line.push(data[1]);
                                }
                                else {
                                    count = data[0] - 1;
                                    line[line_p++] = data[1];
                                    // line.push(data[1]);
                                    while (count--)
                                        line[line_p++] = rgbeData.subarray(ptr, ++ptr)[0];
                                    // line.push(rgbeData.subarray(ptr, ++ptr)[0])
                                }
                            }
                        }
                        for (let x = 0; x < scanline_width; x++) {
                            // const [r, g, b, e] = scanline_buf[0][1];
                            const pixel = buffer.subarray((y * scanline_width + x) * 4, (y * scanline_width + (x + 1)) * 4);
                            pixel[0] = scanline_buf[0][x];
                            pixel[1] = scanline_buf[1][x];
                            pixel[2] = scanline_buf[2][x];
                            pixel[3] = scanline_buf[3][x];
                        }
                    }
                }
                console.log(`RLE decoding cost ${Date.now() - rle_start}ms`);
            }
            else {
                for (let x = 0; x < total; x++) {
                    const [r, g, b, e] = rgbeData.subarray(x * 4, (x + 1) * 4);
                    const pixel = buffer.subarray(x * 4, (x + 1) * 4);
                    pixel[0] = r;
                    pixel[1] = g;
                    pixel[2] = b;
                    pixel[3] = e;
                    // if(e != 0) {
                    //     pixel[0] = r * Math.pow(2, e - 128 - 8);
                    //     pixel[1] = g * Math.pow(2, e - 128 - 8);
                    //     pixel[2] = b * Math.pow(2, e - 128 - 8);
                    // }
                }
            }
            return {
                size,
                buffer,
                decodeRGBE: () => {
                    debugger;
                    const rgb = new Float32Array(total * 3);
                    for (let x = 0; x < total; x++) {
                        const [r, g, b, e] = buffer.subarray(x * 4, (x + 1) * 4);
                        const pixel = rgb.subarray(x * 3, (x + 1) * 3);
                        if (e != 0) {
                            pixel[0] = r * Math.pow(2, e - 128 - 8);
                            pixel[1] = g * Math.pow(2, e - 128 - 8);
                            pixel[2] = b * Math.pow(2, e - 128 - 8);
                        }
                    }
                    return { size, buffer, rgb };
                }
            };
        }
        static loadCubeimg(folder, format = 'jpg') {
            return __awaiter(this, void 0, void 0, function* () {
                return yield Promise.all(this.cubemapOrder.map(name => this.loadImage(folder + name + format)));
            });
        }
        static loadCubemap(folder, format = 'jpg') {
            return __awaiter(this, void 0, void 0, function* () {
                let rawImages;
                if (format == 'hdr') {
                    rawImages = yield Promise.all(this.cubemapOrder.map(name => fetch(folder + name + format)));
                    rawImages = yield Promise.all(rawImages.map(raw => raw.arrayBuffer()));
                }
                else {
                    rawImages = yield this.loadCubeimg(folder, format);
                }
                let tex = new Texture(rawImages, {
                    magFilter: WebGL2RenderingContext.LINEAR,
                    minFilter: WebGL2RenderingContext.LINEAR_MIPMAP_LINEAR,
                    wrapS: WebGL2RenderingContext.CLAMP_TO_EDGE,
                    wrapT: WebGL2RenderingContext.CLAMP_TO_EDGE,
                });
                if (format == 'hdr') {
                    // Parse
                    let s;
                    tex.data = rawImages.map(raw => {
                        const { size, buffer } = this.HDRParse(raw);
                        s = size;
                        return buffer;
                    });
                    tex.height = s[1];
                    tex.width = s[3];
                    // tex.format = WebGL2RenderingContext.RGB;
                    // tex.internalformat = WebGL2RenderingContext.RGB32F;
                    // tex.type = WebGL2RenderingContext.FLOAT;
                    // // tex.internalformat = WebGL2RenderingContext.RGB16F;
                    // // tex.type = WebGL2RenderingContext.HALF_FLOAT;
                    tex.glType = WebGL2RenderingContext.TEXTURE_CUBE_MAP;
                    tex.image = null;
                    tex.isDirty = true;
                }
                return tex;
            });
        }
        static loadTexture(url, option) {
            return __awaiter(this, void 0, void 0, function* () {
                const format = url.split('.').pop();
                if (format == 'hdr') {
                    let raw = yield (yield fetch(url)).arrayBuffer();
                    const { size, rgb } = this.HDRParse(raw).decodeRGBE();
                    const tex = new Texture(null, {
                        magFilter: WebGL2RenderingContext.LINEAR,
                        minFilter: WebGL2RenderingContext.LINEAR,
                        wrapS: WebGL2RenderingContext.CLAMP_TO_EDGE,
                        wrapT: WebGL2RenderingContext.CLAMP_TO_EDGE,
                    });
                    tex.data = rgb;
                    tex.height = size[1];
                    tex.width = size[3];
                    tex.format = WebGL2RenderingContext.RGB;
                    tex.internalformat = WebGL2RenderingContext.RGB32F;
                    tex.type = WebGL2RenderingContext.FLOAT;
                    tex.image = null;
                    tex.isDirty = true;
                    return tex;
                }
                else {
                    let image = yield this.loadImage(url);
                    return new Texture(image, option);
                }
            });
        }
    }
    // static load(url, type: XMLHttpRequestResponseType = 'json') {
    //     return new Promise((resolve, reject) => {
    //         let xhr = new XMLHttpRequest();
    //         xhr.open('GET', url);
    //         xhr.responseType = type;
    //         xhr.onload = function () {
    //             if (this.status >= 200 && this.status < 300) {
    //                 resolve(xhr.response);
    //             } else {
    //                 reject(xhr.statusText);
    //             }
    //         }
    //         xhr.onerror = function () {
    //             reject(xhr.statusText);
    //         }
    //         xhr.send();
    //     });
    // }
    // Analyze
    Asset.totalTask = 0;
    Asset.finishedTask = 0;
    Asset.taskObserve = null;
    Asset.glbMagic = 0x46546C67;
    Asset.decoder = new TextDecoder();
    Asset.cubemapOrder = [
        'posx.',
        'negx.',
        'posy.',
        'negy.',
        'posz.',
        'negz.',
    ];

    class QuadMesh extends Mesh {
        constructor() {
            let meshVBO = new Float32Array([
                -1, -1, 0, 0, 0, 0, 0, 1,
                1, -1, 0, 1, 0, 0, 0, 1,
                1, 1, 0, 1, 1, 0, 0, 1,
                -1, 1, 0, 0, 1, 0, 0, 1
            ]);
            let meshEBO = new Uint16Array([
                0, 1, 2,
                0, 2, 3
            ]);
            let vbo = new bufferView(meshVBO.buffer, {
                byteOffset: meshVBO.byteOffset,
                byteLength: meshVBO.byteLength,
                byteStride: 8 * 4,
                target: WebGL2RenderingContext.ARRAY_BUFFER
            });
            let ebo = new bufferView(meshEBO.buffer, {
                byteOffset: meshEBO.byteOffset,
                byteLength: meshEBO.byteLength,
                byteStride: 0,
                target: WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER
            });
            let position = new Accessor({
                bufferView: vbo,
                componentType: WebGL2RenderingContext.FLOAT,
                byteOffset: 0,
                type: "VEC3",
                count: 4
            }, 'POSITION');
            let uv = new Accessor({
                bufferView: vbo,
                componentType: WebGL2RenderingContext.FLOAT,
                byteOffset: 3 * 4,
                type: "VEC2",
                count: 4
            }, 'TEXCOORD_0');
            let normal = new Accessor({
                bufferView: vbo,
                componentType: WebGL2RenderingContext.FLOAT,
                byteOffset: 5 * 4,
                type: "VEC3",
                count: 4
            }, 'NORMAL');
            let indices = new Accessor({
                bufferView: ebo,
                componentType: WebGL2RenderingContext.UNSIGNED_SHORT,
                byteOffset: 0,
                type: "SCALAR",
                count: 6
            });
            super([position, uv, normal], indices);
        }
    }

    class BoxMesh extends Mesh {
        constructor(x = 1, y = 1, z = 1) {
            x /= 2;
            y /= 2;
            z /= 2;
            let meshVBO = new Float32Array([
                //x x
                // \/\
                //  x x
                x, y, z,
                x, -y, z,
                x, y, -z,
                x, -y, -z,
                -x, y, z,
                -x, -y, z,
                -x, y, -z,
                -x, -y, -z,
            ]);
            let meshEBO = new Uint16Array([
                0, 1, 2,
                2, 1, 3,
                6, 7, 4,
                4, 7, 5,
                6, 4, 2,
                2, 4, 0,
                5, 7, 1,
                1, 7, 3,
                4, 5, 0,
                0, 5, 1,
                2, 3, 6,
                6, 3, 7,
            ]);
            let vbo = new bufferView(meshVBO.buffer, {
                byteOffset: meshVBO.byteOffset,
                byteLength: meshVBO.byteLength,
                byteStride: 3 * 4,
                target: WebGL2RenderingContext.ARRAY_BUFFER
            });
            let ebo = new bufferView(meshEBO.buffer, {
                byteOffset: meshEBO.byteOffset,
                byteLength: meshEBO.byteLength,
                byteStride: 0,
                target: WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER
            });
            let position = new Accessor({
                bufferView: vbo,
                componentType: WebGL2RenderingContext.FLOAT,
                byteOffset: 0,
                type: "VEC3",
                count: 8
            }, 'POSITION');
            // TODO:
            // let uv = new Accessor({
            //     bufferView: vbo,
            //     componentType: WebGL2RenderingContext.FLOAT,
            //     byteOffset: 3 * 4,
            //     type: "VEC2",
            //     count: 4
            // }, 'TEXCOORD_0');
            // let normal = new Accessor({
            //     bufferView: vbo,
            //     componentType: WebGL2RenderingContext.FLOAT,
            //     byteOffset: 5 * 4,
            //     type: "VEC3",
            //     count: 4
            // }, 'NORMAL');
            let indices = new Accessor({
                bufferView: ebo,
                componentType: WebGL2RenderingContext.UNSIGNED_SHORT,
                byteOffset: 0,
                type: "SCALAR",
                count: meshEBO.length
            });
            super([position], indices, WebGL2RenderingContext.LINES);
        }
    }

    // Real-Time Glow: https://developer.nvidia.com/gpugems/GPUGems/gpugems_ch21.html
    class Bloom {
        static initFilters(screen, threshold = 0.7, radius = 1, intensity = 1) {
            let macro;
            // threshold filter
            macro = {
                THRESHOLD: threshold
            };
            let thresholdFilter = new Filter(screen, new Shader(threshold_vs, threshold_fs, macro));
            // Two pass gaussian blur
            // let width = screen.width / screen.ratio;
            // let height = screen.height /screen.ratio;
            let width = screen.width;
            let height = screen.height;
            let pass = [];
            radius = 1.0 * screen.ratio;
            let core = 3;
            intensity = 2.0;
            // while (width > 60 || height > 60) {
            while (core-- && width > 32 && height > 32) {
                const nw = Math.floor(width * 0.5);
                const nh = Math.floor(height * 0.5);
                pass.push(new Filter(screen, new Shader(blurvs, blurfs, {
                    OFFSET: `vec2(${radius / nw}, 0)`,
                    // Addition macros:
                    iResolution: `vec2(${width}, ${height})`,
                    oResolution: `vec2(${nw}, ${nh})`,
                }), width = nw, height = nh));
                pass.push(new Filter(screen, new Shader(blurvs, blurfs, {
                    OFFSET: `vec2(0, ${radius / nh})`,
                    // Addition macros:
                    iResolution: `vec2(${width}, ${height})`,
                    oResolution: `vec2(${nw}, ${nh})`,
                }), width = nw, height = nh));
            }
            // Combiand
            macro = {
                BLOOM_INTENSITY: `float(${intensity})`
            };
            let comb = new Filter(screen, new Shader(combine_vs, combine_fs, macro));
            if (screen.output) {
                comb.setInput(screen.output.output, 'originTex');
            }
            else {
                comb.setInput(screen.capture.output, 'originTex');
            }
            // Assemble
            // The first stage must be attach to screen
            screen.attachFilter(thresholdFilter);
            // screen.attachFilter(blur1);
            // screen.attachFilter(blur2);
            for (let p of pass) {
                screen.attachFilter(p);
                console.log(p.width, p.height);
            }
            screen.attachFilter(comb);
        }
    }
    let threshold_vs = `
attribute vec3 POSITION;

void main() {
  gl_Position = vec4(POSITION, 1);
}
`;
    let threshold_fs = `
precision highp float;
#include <macros>
uniform sampler2D base;

void main() {
    vec2 uv = gl_FragCoord.xy / screenSize;
    vec4 color = texture2D(base, uv);
    float brightness = dot(color.rgb, vec3(0.2126, 0.7152, 0.0722));
    if(brightness < THRESHOLD) {
        color.r = color.g = color.b = color.a = 0.0;
        // discard;
    }
    gl_FragColor = color;
}
`;
    let blurvs = `
attribute vec3 POSITION;

void main(){
    gl_Position=vec4(POSITION,1);
}
`;
    let blurfs = `
#define PI 3.1415926535898
precision highp float;
uniform sampler2D base;

vec2 uv;

vec4 blur9() {
    vec4 color = vec4(0);
    vec2 direction = OFFSET;
    vec2 off1 = vec2(1.3846153846) * direction;
    vec2 off2 = vec2(3.2307692308) * direction;
    color += texture2D(base, uv) * 0.2270270270;
    color += texture2D(base, uv + off1) * 0.3162162162;
    color += texture2D(base, uv - off1) * 0.3162162162;
    color += texture2D(base, uv + off2) * 0.0702702703;
    color += texture2D(base, uv - off2) * 0.0702702703;
    return color;
}
vec4 gaussianBlur() {
    vec2 offset = OFFSET;
    float weight[5];
    weight[0] = 0.227027;
    weight[1] = 0.1945946;
    weight[2] = 0.1216216;
    weight[3] = 0.054054;
    weight[4] = 0.016216;
    vec4 color = vec4(0);
    for(int i = 0; i < 5; i++) {
        color += texture2D(base, uv + offset * float(i+1) ) * weight[i];
        color += texture2D(base, uv + offset * float(-i-1) ) * weight[i];
    }
    return color;
}

float random(vec3 scale, float seed) {
    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);
}

// https://redcamel.github.io/RedGL2/example/postEffect/blur/RedPostEffect_BlurX.html

vec4 noiseblur() {
    vec4 finalColor = vec4(0);
    vec2 delta;
    float total = 0.0;
    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);
    delta = OFFSET;
    for (float t = -10.0; t <= 10.0; t++) {
        float percent = (t + offset - 0.5) / 10.0;
        float weight = 1.0 - abs(percent);
        vec4 sample = texture2D(base, uv + delta * percent);
        sample.rgb *= sample.a;
        finalColor += sample * weight;
        total += weight;
    }
    finalColor /= total;
    return finalColor;
}

void main() {
    uv = gl_FragCoord.xy / oResolution;
    // gl_FragColor = gaussianBlur();
    // gl_FragColor = noiseblur();
    gl_FragColor = blur9();
    // gl_FragColor = vec4(mod(uv, 1.), 0, 1);
}
`;
    let combine_vs = `
attribute vec3 POSITION;

void main() {
  gl_Position = vec4(POSITION, 1);
}
`;
    let combine_fs = `
precision highp float;
#include <macros>
uniform sampler2D base;
uniform sampler2D originTex;

void main() {
    vec2 uv = gl_FragCoord.xy / screenSize;
    vec4 origin = texture2D(originTex, uv);
    vec4 addition = texture2D(base, uv) * vec4(vec3(BLOOM_INTENSITY),0);
    gl_FragColor = origin + addition;
}
`;

    class Vignetting extends Filter {
        constructor(screen, factor = 0.4, hardness = 1) {
            super(screen, new Shader(vig_vs, vig_fs, {
                FACTOR: `float(${factor})`,
                HARDNESS: `float(${hardness})`,
                // Addition macros:
                iResolution: `vec2(${screen.width * screen.ratio}, ${screen.height * screen.ratio})`,
                oResolution: `vec2(${screen.width * screen.ratio}, ${screen.height * screen.ratio})`,
            }));
        }
    }
    let vig_vs = glsl.vignetting.vs;
    let vig_fs = glsl.vignetting.fs;

    class OrbitControl {
        constructor(screen, target, pitch = 90, yaw = 90, speed = 0.01, damping = 0.92) {
            this.movement = create$2();
            this.unprojectMatrix = create$1();
            this.X = fromValues$2(1, 0, 0);
            this.Y = fromValues$2(0, 1, 0);
            this.Z = fromValues$2(0, 0, 1);
            this.vx = 0;
            this.vy = 0;
            this.vz = 0;
            // Damping stuff
            this.vyaw = 0;
            this.vpitch = 0;
            this.vscale = 0;
            this.threshold = 0.001;
            this.moveHandler = (e) => {
                let { movementX, movementY, buttons } = e;
                if (buttons == 2) ;
                else { // Rotate
                    let deltaX = movementX * this.speed;
                    let deltaY = -movementY * this.speed;
                    this.vpitch += deltaY;
                    this.vyaw += deltaX;
                }
                // OrbitControlSystem.updatePosition(this);
            };
            this.touchHandler = (() => {
                let lastX, lastY;
                return (e) => {
                    let { pageX, pageY } = e.touches[0];
                    if (lastX || lastY) {
                        let dX = pageX - lastX;
                        let dY = pageY - lastY;
                        this.vpitch += -dY * this.speed;
                        this.vyaw += dX * this.speed;
                    }
                    lastY = pageY;
                    lastX = pageX;
                };
            });
            this.scrollHandler = ({ deltaY }) => {
                // vec3.scaleAndAdd(this.trans.translate, this.trans.translate, this.direction, deltaY);
                this.vscale += deltaY * this.speed * 0.01;
                // OrbitControlSystem.updatePosition(this);
            };
            this.orientationHandler = (e) => {
                // if (this.ctr_initial_m) {
                //     const delX = e.gamma - this.ctr.x;
                //     const delY = e.beta - this.ctr.y;
                //     vx -= delX * 0.09;
                //     vy -= delY * 0.09;
                // } else {
                //     this.ctr_initial_m = true;
                // }
                // this.ctr.x = e.gamma;
                // this.ctr.y = e.beta;
                if (!this.lastalpha || !this.lastbeta) {
                    this.lastalpha = e.alpha;
                    this.lastbeta = e.beta;
                }
                let dalpha = e.alpha - this.lastalpha;
                let dbeta = e.beta - this.lastbeta;
                // this.vpitch += dbeta * this.speed;
                // this.vyaw += dgamma * this.speed;
                this.pitch = this.lastbeta + dbeta * 0.1;
                this.yaw = this.lastalpha + dalpha * 0.1;
                // this.pitch = e.beta;
                // this.yaw = e.alpha;
            };
            this.pitch = pitch;
            this.yaw = yaw;
            this.speed = speed;
            this.damping = damping;
            this.camera = target.components.Camera;
            this.trans = target.components.Transform;
            this.distance = distance(this.trans.translate, this.camera.lookAt);
            // EntityMgr.addComponent(target, this);
            // Regist current camera as main camera (backward compatibility)
            screen.mainCamera = this.camera;
            OrbitControl.bindEvents(screen.canvas, this);
            OrbitControlSystem.updatePosition(this);
        }
        static bindEvents(screen, controler) {
            // screen.oncontextmenu = () => false;
            screen.addEventListener('mousedown', () => {
                screen.addEventListener('mousemove', controler.moveHandler);
            });
            screen.addEventListener('mouseup', () => {
                screen.removeEventListener('mousemove', controler.moveHandler);
            });
            screen.addEventListener('wheel', controler.scrollHandler);
            // Mobile device
            screen.addEventListener('touchstart', () => {
                let handler = controler.touchHandler();
                screen.addEventListener('touchmove', handler);
                screen.addEventListener('touchend', () => {
                    screen.removeEventListener('touchmove', handler);
                });
            });
            screen.addEventListener('wheel', controler.scrollHandler);
            // try {
            //     window.addEventListener("deviceorientation", controler.orientationHandler, false);
            // } catch (e) {
            //     console.log(e);
            // }
        }
    }
    class OrbitControlSystem extends ComponentSystem {
        constructor() {
            super(...arguments);
            this.group = [];
            this.depends = [
                OrbitControl.name
            ];
        }
        onUpdate() {
            for (let { components } of this.group) {
                OrbitControlSystem.updatePosition(components.OrbitControl);
            }
        }
        static updatePosition(ctr) {
            if (Math.abs(ctr.vyaw) > ctr.threshold) {
                ctr.yaw += ctr.vyaw;
                ctr.vyaw *= ctr.damping;
            }
            if (Math.abs(ctr.vpitch) > ctr.threshold) {
                ctr.pitch += ctr.vpitch;
                ctr.vpitch *= ctr.damping;
            }
            if (Math.abs(ctr.vscale) > ctr.threshold) {
                ctr.distance += ctr.vscale;
                ctr.distance = Math.max(ctr.distance, 1.0);
                ctr.vscale *= ctr.damping;
            }
            ctr.pitch = Math.min(180, Math.max(0.01, ctr.pitch));
            // https://github.com/t01y/WebGL_Learning/blob/PBR/scripts/canvas.js#L752
            ctr.trans.translate[0] = ctr.camera.lookAt[0] + ctr.distance * Math.sin(ctr.pitch / 180 * Math.PI) * Math.cos(ctr.yaw / 180 * Math.PI);
            ctr.trans.translate[1] = ctr.camera.lookAt[1] + ctr.distance * Math.cos(ctr.pitch / 180 * Math.PI);
            ctr.trans.translate[2] = ctr.camera.lookAt[2] + ctr.distance * Math.sin(ctr.pitch / 180 * Math.PI) * Math.sin(ctr.yaw / 180 * Math.PI);
            ctr.camera.isDirty = true;
            // TODO: enhance
            TransformSystem.updateMatrix(ctr.trans);
        }
    }
    System.registSystem(new OrbitControlSystem());

    class aabb {
        constructor(maxX = 0, maxY = 0, maxZ = 0, minX = 0, minY = 0, minZ = 0) {
            this.max = create$2();
            this.min = create$2();
            this._center = create$2();
            set$2(this.max, maxX, maxY, maxZ);
            set$2(this.min, minX, minY, minZ);
        }
        pointInsert(x, y, z) {
            if (x > this.max[0] || x < this.min[0])
                return false;
            if (y > this.max[1] || y < this.min[1])
                return false;
            if (z > this.max[2] || z < this.min[2])
                return false;
            return true;
        }
        pointInsertX(x) {
            if (x > this.max[0] || x < this.min[0])
                return false;
            return true;
        }
        pointInsertY(y) {
            if (y > this.max[1] || y < this.min[1])
                return false;
            return true;
        }
        pointInsertZ(z) {
            if (z > this.max[2] || z < this.min[2])
                return false;
            return true;
        }
        isCross(box) {
            if (!this.pointInsertX(box.max[0]) && !this.pointInsertX(box.min[0]))
                return false;
            if (!this.pointInsertY(box.max[1]) && !this.pointInsertY(box.min[1]))
                return false;
            if (!this.pointInsertZ(box.max[2]) && !this.pointInsertZ(box.min[2]))
                return false;
            return true;
        }
        update() {
        }
        reset() {
            set$2(this.max, 0, 0, 0);
            set$2(this.min, 0, 0, 0);
        }
        get visible() {
            return this._isVisible;
        }
        set visible(status) {
            this._isVisible = status;
            if (status) {
                if (!this.agent) {
                    this.agent = this.entity.appendChild(EntityMgr.create('aabb'));
                    const size = create$2();
                    sub$2(size, this.max, this.min);
                    const mesh = this.createMesh();
                    const mr = new MeshRenderer(this.screen, mesh, aabb.mat);
                    this.agent.addComponent(mr);
                }
            }
        }
        createMesh() {
            const x = this.max[0];
            const y = this.max[1];
            const z = this.max[2];
            const x2 = this.min[0];
            const y2 = this.min[1];
            const z2 = this.min[2];
            let meshVBO = new Float32Array([
                //x x
                // \/\
                //  x x
                x, y, z,
                x, y2, z,
                x, y, z2,
                x, y2, z2,
                x2, y, z,
                x2, y2, z,
                x2, y, z2,
                x2, y2, z2,
            ]);
            let meshEBO = new Uint16Array([
                0, 1, 2,
                2, 1, 3,
                6, 7, 4,
                4, 7, 5,
                6, 4, 2,
                2, 4, 0,
                5, 7, 1,
                1, 7, 3,
                4, 5, 0,
                0, 5, 1,
                2, 3, 6,
                6, 3, 7,
            ]);
            let vbo = new bufferView(meshVBO.buffer, {
                byteOffset: meshVBO.byteOffset,
                byteLength: meshVBO.byteLength,
                byteStride: 3 * 4,
                target: WebGL2RenderingContext.ARRAY_BUFFER
            });
            let ebo = new bufferView(meshEBO.buffer, {
                byteOffset: meshEBO.byteOffset,
                byteLength: meshEBO.byteLength,
                byteStride: 0,
                target: WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER
            });
            let position = new Accessor({
                bufferView: vbo,
                componentType: WebGL2RenderingContext.FLOAT,
                byteOffset: 0,
                type: "VEC3",
                count: 8
            }, 'POSITION');
            let indices = new Accessor({
                bufferView: ebo,
                componentType: WebGL2RenderingContext.UNSIGNED_SHORT,
                byteOffset: 0,
                type: "SCALAR",
                count: meshEBO.length
            });
            return new Mesh([position], indices, WebGL2RenderingContext.LINES);
        }
        append(x, y, z) {
            this.max[0] = Math.max(this.max[0], x);
            this.max[1] = Math.max(this.max[1], y);
            this.max[2] = Math.max(this.max[2], z);
            this.min[0] = Math.min(this.min[0], x);
            this.min[1] = Math.min(this.min[1], y);
            this.min[2] = Math.min(this.min[2], z);
        }
        get center() {
            return this._center;
        }
    }
    aabb.mat = new Material(new Shader(glsl.line.vs, glsl.line.fs));

    class octree {
        constructor(mesh, screen) {
            this.maxLength = 200;
            this.temp = new aabb();
            this.screen = screen;
            if (!mesh) {
                console.error('Mesh not found!');
                return;
            }
            this.entity = mesh['entity'];
            this.data = mesh.data;
            this.pos = this.data.POSITION;
            this.face = mesh.indices.data;
            let root = new node();
            root.bound = new aabb();
            root.bound.entity = this.entity;
            root.bound.screen = this.screen;
            // Generate triangle indices
            let triangleList = [];
            for (let i = 0, l = this.face.length / 3; i < l; i++) {
                triangleList.push(i);
                // initial aabb
                let f = i * 3, p;
                p = this.pos[this.face[f++]];
                root.bound.append(p[0], p[1], p[2]);
                p = this.pos[this.face[f++]];
                root.bound.append(p[0], p[1], p[2]);
                p = this.pos[this.face[f++]];
                root.bound.append(p[0], p[1], p[2]);
            }
            root.bound.visible = true;
            this.tree = this.buildNode(null, triangleList, root.bound);
            // display
            // this.visible(tree);
        }
        visible(n = this.tree) {
            if (!n || n.data.length < this.maxLength)
                return;
            n.bound.visible = true;
            for (let c of n.child) {
                this.visible(c);
            }
        }
        trangleIntersection(face, box) {
            // AABB for current triangle
            this.temp.reset();
            let f = face * 3, p;
            p = this.pos[this.face[f++]];
            this.temp.append(p[0], p[1], p[2]);
            p = this.pos[this.face[f++]];
            this.temp.append(p[0], p[1], p[2]);
            p = this.pos[this.face[f++]];
            this.temp.append(p[0], p[1], p[2]);
            return box.isCross(this.temp);
        }
        buildNode(pre, triangleList, bound) {
            let n = new node();
            n.bound = bound;
            bound.entity = this.entity;
            bound.screen = this.screen;
            n.data = triangleList;
            if (!triangleList)
                return null;
            if (triangleList.length < this.maxLength) {
                n.data = triangleList;
                return n;
            }
            const { max } = bound;
            const { min } = bound;
            // Split space
            let midX = (max[0] - min[0]) / 2 + min[0];
            let midY = (max[1] - min[1]) / 2 + min[1];
            let midZ = (max[2] - min[2]) / 2 + min[2];
            let chunks = [
                // [max, min]
                // Top
                new aabb(max[0], max[1], max[2], midX, midY, midZ),
                new aabb(max[0], max[1], midZ, midX, midY, min[2]),
                new aabb(midX, max[1], midZ, min[0], midY, min[2]),
                new aabb(midX, max[1], max[2], min[0], midY, midZ),
                // Bottom
                new aabb(max[0], midY, max[2], midX, min[1], midZ),
                new aabb(max[0], midY, midZ, midX, min[1], min[2]),
                new aabb(midX, midY, midZ, min[0], min[1], min[2]),
                new aabb(midX, midY, max[2], min[0], min[1], midZ),
            ];
            for (let chunk of chunks) {
                let list = [];
                for (let f of triangleList) {
                    if (this.trangleIntersection(f, chunk))
                        list.push(f);
                }
                if (pre && list.length && list.length == pre.data.length) {
                    n.child.push(null);
                    break;
                }
                n.child.push(this.buildNode(n, list, chunk));
            }
            return n;
        }
    }
    class node {
        constructor() {
            this.data = [];
            this.child = [];
        }
    }

    class AABB {
        constructor() {
            this.max = create$2();
            this.min = create$2();
            this.isDefault = true;
            this._center = create$2();
            this.isDirty = false;
            this._isVisible = false;
        }
        get center() {
            if (this.isDirty)
                this.updateCenter();
            return this._center;
        }
        updateCenter() {
            if (this.isDefault)
                return console.error('AABB is incorrect!');
            this._center[0] = this.min[0] + (this.max[0] - this.min[0]) * 0.5;
            this._center[1] = this.min[1] + (this.max[1] - this.min[1]) * 0.5;
            this._center[2] = this.min[2] + (this.max[2] - this.min[2]) * 0.5;
            this.isDirty = false;
        }
        update(p) {
            this.isDirty = true;
            if (this.isDefault) {
                this.max[0] = p[0];
                this.max[1] = p[1];
                this.max[2] = p[2];
                this.min[0] = p[0];
                this.min[1] = p[1];
                this.min[2] = p[2];
                this.isDefault = false;
                return;
            }
            this.max[0] = Math.max(this.max[0], p[0]);
            this.max[1] = Math.max(this.max[1], p[1]);
            this.max[2] = Math.max(this.max[2], p[2]);
            this.min[0] = Math.min(this.min[0], p[0]);
            this.min[1] = Math.min(this.min[1], p[1]);
            this.min[2] = Math.min(this.min[2], p[2]);
        }
        get visible() {
            return this._isVisible;
        }
        set visible(status) {
            this._isVisible = status;
            if (status) {
                if (!this.agent) {
                    this.agent = this.root.appendChild(EntityMgr.create('aabb'));
                    const mesh = this.createMesh();
                    const mr = new MeshRenderer(this.screen, mesh, AABB.mat);
                    this.agent.addComponent(mr);
                }
            }
        }
        createMesh() {
            const x = this.max[0];
            const y = this.max[1];
            const z = this.max[2];
            const x2 = this.min[0];
            const y2 = this.min[1];
            const z2 = this.min[2];
            let meshVBO = new Float32Array([
                //x x
                // \/\
                //  x x
                x, y, z,
                x, y2, z,
                x, y, z2,
                x, y2, z2,
                x2, y, z,
                x2, y2, z,
                x2, y, z2,
                x2, y2, z2,
            ]);
            let meshEBO = new Uint16Array([
                0, 1, 5, 4,
                0, 2, 6, 4,
                4, 5, 7, 6,
                7, 3, 1, 3, 2
            ]);
            let vbo = new bufferView(meshVBO.buffer, {
                byteOffset: meshVBO.byteOffset,
                byteLength: meshVBO.byteLength,
                byteStride: 3 * 4,
                target: WebGL2RenderingContext.ARRAY_BUFFER
            });
            let ebo = new bufferView(meshEBO.buffer, {
                byteOffset: meshEBO.byteOffset,
                byteLength: meshEBO.byteLength,
                byteStride: 0,
                target: WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER
            });
            let position = new Accessor({
                bufferView: vbo,
                componentType: WebGL2RenderingContext.FLOAT,
                byteOffset: 0,
                type: "VEC3",
                count: 8
            }, 'POSITION');
            let indices = new Accessor({
                bufferView: ebo,
                componentType: WebGL2RenderingContext.UNSIGNED_SHORT,
                byteOffset: 0,
                type: "SCALAR",
                count: meshEBO.length
            });
            // return new Mesh([position], indices);
            return new Mesh([position], indices, WebGL2RenderingContext.LINE_LOOP);
        }
    }
    AABB.mat = new Material(new Shader(glsl.line.vs, glsl.line.fs));
    class BVHNode {
        constructor() {
            this.bounds = new AABB();
            this.isLeaf = false;
            this.index = -1;
            this.mat = -1;
        }
        get raw() {
            return new Float32Array(6);
        }
        static hitable(ray, bounds) {
        }
    }
    class trianglePrimitive {
        constructor() {
            this.bounds = new AABB();
        }
    }
    class DataTexture {
        constructor(texSize = 2048, chunkTexels = 1) {
            const totalTexel = texSize * texSize;
            const totalChunks = totalTexel / chunkTexels;
            const chunkOffset = chunkTexels * 4;
            const raw = new Float32Array(totalTexel * 4);
            const chunks = [];
            for (let i = 0; i < totalChunks; i++) {
                chunks[i] = raw.subarray(i * chunkOffset, (i + 1) * chunkOffset);
            }
            const tex = new Texture(null, {
                magFilter: WebGL2RenderingContext.LINEAR,
                minFilter: WebGL2RenderingContext.LINEAR,
                wrapS: WebGL2RenderingContext.CLAMP_TO_EDGE,
                wrapT: WebGL2RenderingContext.CLAMP_TO_EDGE,
            });
            tex.data = raw;
            tex.height = texSize;
            tex.width = texSize;
            tex.format = WebGL2RenderingContext.RGBA;
            tex.internalformat = WebGL2RenderingContext.RGBA32F;
            tex.type = WebGL2RenderingContext.FLOAT;
            tex.isDirty = true;
            this.raw = raw;
            this.chunks = chunks;
            this.tex = tex;
        }
    }
    class BVHManager {
        constructor(texSize = 2048) {
            this.nodeList = [];
            this.matMap = new Map();
            this._size = create$2();
            // const LBVHTexture = BVHManager.createDataTex(texSize, 2);
            this.LBVHTexture = new DataTexture(texSize, 2);
            this.LBVH = this.LBVHTexture.raw;
            this.LBVH_nodes = this.LBVHTexture.chunks;
            // R-G-B-A-R-G-B-A
            // X-Y-Z-_-X-Y-Z-P
        }
        // Generate bounds of triangles, mind GC!
        genBounds(triangles, size = triangles.length, materialOffset) {
            const boxList = [];
            // [[x, y, z] * 3, ...]
            let anchor = 0;
            for (let i = 0; i < size;) {
                // [offset, index]
                if (anchor < materialOffset.length - 1 && i >= materialOffset[anchor + 1][0]) {
                    anchor++;
                }
                const box = new trianglePrimitive();
                box.mat = materialOffset[anchor][1]; // Count From 0
                box.index = i * 2; // Offset of the first vertex
                // box.index = i;  // Offset of the first vertex
                box.bounds.update(triangles[i++]);
                box.bounds.update(triangles[i++]);
                box.bounds.update(triangles[i++]);
                boxList.push(box);
            }
            console.log("Materials: " + this.matMap);
            return boxList;
        }
        materialsHandler(mats) {
            let params = '';
            let route = `
        if(mat < -.5) {
            continue;
        }`;
            let tasks = [];
            for (const [name, [i, mt]] of mats) {
                // Textures
                const tex = mt.textures;
                // baseColorTexture
                let base = `
            float scale = 100.;
            float fact = step(.0, sin(iuv.x * scale)*sin(iuv.y * scale));
            albedo = vec3(1) * clamp(fact, .2, 1.);
            // albedo = sRGBtoLINEAR(texture(ground, iuv * 15.)).rgb;
`;
                if (tex.has('baseColorTexture')) {
                    params += `
uniform sampler2D baseColorTexture_${i};
`;
                    base = `albedo = sRGBtoLINEAR(texture(baseColorTexture_${i}, iuv)).rgb;`;
                    tasks.push(m => {
                        Material.setTexture(m, `baseColorTexture_${i}`, tex.get('baseColorTexture')[1]);
                    });
                }
                // metallicRoughnessTexture
                let rm = `
            vec3 rm = vec3(0, .2, .5);
            metal = clamp(rm.b, 0.0, 1.0);
            roughness = clamp(rm.g, 0.04, 1.0);
            `;
                if (tex.has('metallicRoughnessTexture')) {
                    params += `
uniform sampler2D metallicRoughnessTexture_${i};
`;
                    rm = `
                vec3 rm = texture(metallicRoughnessTexture_${i}, iuv).rgb;
                metal = clamp(rm.b, 0.0, 1.0);
                roughness = clamp(rm.g, 0.04, 1.0);
`;
                    tasks.push(m => {
                        Material.setTexture(m, `metallicRoughnessTexture_${i}`, tex.get('metallicRoughnessTexture')[1]);
                    });
                }
                // emissiveTexture
                let em = '';
                if (tex.has('emissiveTexture')) {
                    params += `
uniform sampler2D emissiveTexture_${i};
`;
                    em = `
                vec3 em = sRGBtoLINEAR(texture(emissiveTexture_${i}, iuv)).rgb;
                if(dot(em, em) > .01)
                    return em;
`;
                    tasks.push(m => {
                        Material.setTexture(m, `emissiveTexture_${i}`, tex.get('emissiveTexture')[1]);
                    });
                }
                route += `
            else if(mat < ${i}.5) { // NOTE: ${name}
                ${base}
                ${rm}
                ${em}
            }`;
            }
            const init = m => {
                for (let t of tasks)
                    t(m);
            };
            return { params, route, init };
        }
        buildBVH(meshes) {
            const d = Date.now();
            let materialList = [];
            // ? x-y-z-x y-z-x-y z-x
            const triangleTexture = new DataTexture(2048, 2);
            let offset = 0;
            // Reduce GC
            const wpos = create$2(); // World position
            const wnor = create$3(); // World position
            for (let m of meshes) {
                // Collect materials
                const mt = m['entity'].components.Material;
                let mtIndex = -1;
                if (this.matMap.has(mt.name)) {
                    [mtIndex] = this.matMap.get(mt.name);
                }
                else {
                    // New material
                    mtIndex = this.matMap.size;
                    this.matMap.set(mt.name, [this.matMap.size, mt]);
                }
                materialList.push([offset, mtIndex]);
                let trans = m['entity'].components.Transform;
                let data = m.data;
                let pos = data.POSITION;
                let normal = data.NORMAL;
                let uv = data.TEXCOORD_0;
                let face = m.indices.data;
                for (let i = 0; i < face.length; i++) {
                    // Per vertex
                    // R G B A - R G B A - R G B A - R G B A - R G B A - R G B A
                    //[x y z u 1 n n n v] [x y z u 2 n n n v] [x y z u 3 n n n v]
                    const cur = triangleTexture.chunks[offset++];
                    const vertex = pos[face[i]];
                    transformMat4(wpos, vertex, trans.worldMatrix);
                    cur.set(wpos);
                    // cur[3] = 1;
                    if (normal) {
                        const n = normal[face[i]];
                        set$3(wnor, n[0], n[1], n[2], 0);
                        transformMat4$1(wnor, wnor, trans.worldNormalMatrix);
                        normalize(wnor, wnor);
                        cur.set(wnor, 4);
                    }
                    if (uv) {
                        cur[3] = uv[face[i]][0];
                        cur[7] = uv[face[i]][1];
                    }
                }
            }
            const primitives = this.genBounds(triangleTexture.chunks, offset, materialList);
            const root = this.root = this.splitBVH(primitives);
            const LBVH = this.fillLBVH(root, this.LBVHTexture);
            const matHandler = this.materialsHandler(this.matMap);
            console.log(`Build BVH cost ${Date.now() - d}ms`);
            return { LBVH, triangleTexture, primitives, matHandler };
        }
        splitBVH(prim) {
            if (prim.length == 0) // Empty branch
                return null;
            const node = new BVHNode();
            // Calculate current AABB
            for (let p of prim) {
                node.bounds.update(p.bounds.max);
                node.bounds.update(p.bounds.min);
            }
            // TODO:
            if (prim.length < 2) {
                node.isLeaf = true;
                node.index = prim[0].index;
                node.mat = prim[0].mat;
                return node;
            }
            // Compare and find the longest axis
            const size = this._size;
            sub$2(size, node.bounds.max, node.bounds.min);
            let axis = size.indexOf(Math.max(size[0], size[1], size[2]));
            // if(size[axis] > 0) {}
            let left = [];
            let right = [];
            let c = 3;
            while (c-- && (left.length == 0 || right.length == 0)) {
                // const middle = node.bounds.min[axis] + size[axis] / 2;
                // const middle = node.bounds.min[axis%3] + size[axis%3] / 2;
                const middle = node.bounds.center[axis % 3];
                // Reset
                left = [];
                right = [];
                // FIXME:
                for (let p of prim) {
                    if (p.bounds.center[axis] < middle) {
                        left.push(p);
                    }
                    else {
                        right.push(p);
                    }
                }
                axis++;
                if (c == 0) {
                    // FIXME:
                    const m = Math.ceil(prim.length / 2);
                    // if(m < 6) {
                    // left = prim.slice(0, 1);
                    // right = prim.slice(m, m+1);
                    // } else {
                    left = prim.slice(0, m);
                    right = prim.slice(m);
                    // }
                    // left = [prim[0]];
                    // right = [prim[1]];
                }
            }
            if (left.length == 0 && right.length == 0) {
                // Impossible, unless prim is empty
                debugger;
            }
            if (left.length == 0) {
                // Make sure left branch is allways exist, even one of them is empty
                const cache = left; // []
                left = right;
                right = cache;
            }
            node.left = this.splitBVH(left);
            node.right = this.splitBVH(right);
            return node;
        }
        // Test
        static createTree(deep) {
            let root = new BVHNode();
            if (deep--) {
                root.left = this.createTree(deep);
                root.right = this.createTree(deep);
            }
            else {
                root.isLeaf = true;
            }
            return root;
        }
        fillLBVH(root, LBVH) {
            LBVH.raw.fill(0);
            BVHManager.fillLinearNode(root, LBVH.chunks);
            return LBVH;
        }
        // Create LBVH
        static fillLinearNode(root, mem, index = 0) {
            let right = root.right
                ? index + 1 // (*)incase right branch is exist but left is null
                : -1; // right branch is empty
            if (root.left) {
                // Append left branch behind current node
                right = this.fillLinearNode(root.left, mem, index + 1);
            }
            // Fill curretn node
            // root.index = right;
            // mem[index++] = [root, right, root.isLeaf];
            mem[index].set(root.bounds.min);
            mem[index].set(root.bounds.max, 4);
            // TODO: Obj
            if (root.isLeaf) {
                // Leaf node
                mem[index][3] = root.mat;
            }
            else {
                mem[index][3] = right;
            }
            mem[index][7] = root.index;
            index++;
            if (root.right) {
                // Append right branch
                index = this.fillLinearNode(root.right, mem, right);
            }
            return index;
        }
    }

    const version = '0.3.1';
    // export { Example } from "./example";

    exports.AABB = AABB;
    exports.Accessor = Accessor;
    exports.Animation = Animation;
    exports.AnimationChannel = AnimationChannel;
    exports.Asset = Asset;
    exports.BVHManager = BVHManager;
    exports.Bloom = Bloom;
    exports.BoxMesh = BoxMesh;
    exports.Camera = Camera;
    exports.ComponentSystem = ComponentSystem;
    exports.EntityMgr = EntityMgr;
    exports.Filter = Filter;
    exports.Material = Material;
    exports.Mesh = Mesh;
    exports.MeshRenderer = MeshRenderer;
    exports.OrbitControl = OrbitControl;
    exports.QuadMesh = QuadMesh;
    exports.Screen = Screen;
    exports.Shader = Shader;
    exports.Skin = Skin;
    exports.System = System;
    exports.Texture = Texture;
    exports.Transform = Transform;
    exports.UniformInfo = UniformInfo;
    exports.Vignetting = Vignetting;
    exports.bufferView = bufferView;
    exports.glsl = glsl;
    exports.mat3 = mat3;
    exports.mat4 = mat4;
    exports.octree = octree;
    exports.quat = quat;
    exports.vec2 = vec2;
    exports.vec3 = vec3;
    exports.vec4 = vec4;
    exports.version = version;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
