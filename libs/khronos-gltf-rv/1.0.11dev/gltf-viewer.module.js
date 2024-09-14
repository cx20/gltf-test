/**
 * Bundle of @khronosgroup/gltf-viewer
 * Generated: 2024-09-15
 * Version: 1.0.11
 * License: Apache-2.0
 * Dependencies:
 * 
 * gl-matrix -- 3.4.3 -- MIT
 * Copyright (c) 2015-2021, Brandon Jones, Colin MacKenzie IV.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 * jpeg-js -- 0.4.4 -- BSD-3-Clause
 * Copyright (c) 2014, Eugene Ware
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 * notice, this list of conditions and the following disclaimer in the
 * documentation and/or other materials provided with the distribution.
 * 3. Neither the name of Eugene Ware nor the names of its contributors
 * may be used to endorse or promote products derived from this software
 * without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY EUGENE WARE ''AS IS'' AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL EUGENE WARE BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 * 
 * 
 * iobuffer -- 5.3.2 -- MIT
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 Michaël Zasso
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * 
 * 
 * pako -- 2.1.0 -- (MIT AND Zlib)
 * (The MIT License)
 *
 * Copyright (C) 2014-2017 by Vitaly Puzrin and Andrei Tuputcyn
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 * 
 * fast-png -- 6.2.0 -- MIT
 * MIT License
 *
 * Copyright (c) 2015 Michaël Zasso
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 * 
 * json-ptr -- 3.1.1 -- MIT
 * Copyright (c) 2011-2021 Phillip Clark
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * Common utilities
 * @module glMatrix
 */
// Configuration Constants
var EPSILON = 0.000001;
var ARRAY_TYPE = typeof Float32Array !== 'undefined' ? Float32Array : Array;
if (!Math.hypot) Math.hypot = function () {
  var y = 0,
      i = arguments.length;

  while (i--) {
    y += arguments[i] * arguments[i];
  }

  return Math.sqrt(y);
};

/**
 * 3x3 Matrix
 * @module mat3
 */

/**
 * Creates a new identity mat3
 *
 * @returns {mat3} a new 3x3 matrix
 */

function create$4() {
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
 * @param {ReadonlyMat4} a   the source 4x4 matrix
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
 * Multiplies two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @returns {mat3} out
 */

function multiply$1(out, a, b) {
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
 * 4x4 Matrix<br>Format: column-major, when typed out it looks like row-major<br>The matrices are being post multiplied.
 * @module mat4
 */

/**
 * Creates a new identity mat4
 *
 * @returns {mat4} a new 4x4 matrix
 */

function create$3() {
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
 * @param {ReadonlyMat4} a matrix to clone
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
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */

function identity(out) {
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
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */

function transpose(out, a) {
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
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */

function invert(out, a) {
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
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

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
 * Calculates the determinant of a mat4
 *
 * @param {ReadonlyMat4} a the source matrix
 * @returns {Number} determinant of a
 */

function determinant(a) {
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
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
}
/**
 * Multiplies two mat4s
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @returns {mat4} out
 */

function multiply(out, a, b) {
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
      a33 = a[15]; // Cache only the current line of the second matrix

  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[4];
  b1 = b[5];
  b2 = b[6];
  b3 = b[7];
  out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[8];
  b1 = b[9];
  b2 = b[10];
  b3 = b[11];
  out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[12];
  b1 = b[13];
  b2 = b[14];
  b3 = b[15];
  out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  return out;
}
/**
 * Rotates a matrix by the given angle around the Y axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
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
  } // Perform axis-specific matrix multiplication


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
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

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
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

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
 * Returns the translation vector component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslation,
 *  the returned vector will be the same as the translation vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive translation component
 * @param  {ReadonlyMat4} mat Matrix to be decomposed (input)
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
 * @param  {ReadonlyMat4} mat Matrix to be decomposed (input)
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
  out[0] = Math.hypot(m11, m12, m13);
  out[1] = Math.hypot(m21, m22, m23);
  out[2] = Math.hypot(m31, m32, m33);
  return out;
}
/**
 * Returns a quaternion representing the rotational component
 *  of a transformation matrix. If a matrix is built with
 *  fromRotationTranslation, the returned quaternion will be the
 *  same as the quaternion originally supplied.
 * @param {quat} out Quaternion to receive the rotation component
 * @param {ReadonlyMat4} mat Matrix to be decomposed (input)
 * @return {quat} out
 */

function getRotation(out, mat) {
  var scaling = new ARRAY_TYPE(3);
  getScaling(scaling, mat);
  var is1 = 1 / scaling[0];
  var is2 = 1 / scaling[1];
  var is3 = 1 / scaling[2];
  var sm11 = mat[0] * is1;
  var sm12 = mat[1] * is2;
  var sm13 = mat[2] * is3;
  var sm21 = mat[4] * is1;
  var sm22 = mat[5] * is2;
  var sm23 = mat[6] * is3;
  var sm31 = mat[8] * is1;
  var sm32 = mat[9] * is2;
  var sm33 = mat[10] * is3;
  var trace = sm11 + sm22 + sm33;
  var S = 0;

  if (trace > 0) {
    S = Math.sqrt(trace + 1.0) * 2;
    out[3] = 0.25 * S;
    out[0] = (sm23 - sm32) / S;
    out[1] = (sm31 - sm13) / S;
    out[2] = (sm12 - sm21) / S;
  } else if (sm11 > sm22 && sm11 > sm33) {
    S = Math.sqrt(1.0 + sm11 - sm22 - sm33) * 2;
    out[3] = (sm23 - sm32) / S;
    out[0] = 0.25 * S;
    out[1] = (sm12 + sm21) / S;
    out[2] = (sm31 + sm13) / S;
  } else if (sm22 > sm33) {
    S = Math.sqrt(1.0 + sm22 - sm11 - sm33) * 2;
    out[3] = (sm31 - sm13) / S;
    out[0] = (sm12 + sm21) / S;
    out[1] = 0.25 * S;
    out[2] = (sm23 + sm32) / S;
  } else {
    S = Math.sqrt(1.0 + sm33 - sm11 - sm22) * 2;
    out[3] = (sm12 - sm21) / S;
    out[0] = (sm31 + sm13) / S;
    out[1] = (sm23 + sm32) / S;
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
 * @param {ReadonlyVec3} v Translation vector
 * @param {ReadonlyVec3} s Scaling vector
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
 * Generates a perspective projection matrix with the given bounds.
 * The near/far clip planes correspond to a normalized device coordinate Z range of [-1, 1],
 * which matches WebGL/OpenGL's clip volume.
 * Passing null/undefined/no value for far will generate infinite projection matrix.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum, can be null or Infinity
 * @returns {mat4} out
 */

function perspectiveNO(out, fovy, aspect, near, far) {
  var f = 1.0 / Math.tan(fovy / 2),
      nf;
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
 * Alias for {@link mat4.perspectiveNO}
 * @function
 */

var perspective = perspectiveNO;
/**
 * Generates a look-at matrix with the given eye position, focal point, and up axis.
 * If you want a matrix that actually makes an object look at another object, you should use targetTo instead.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {ReadonlyVec3} eye Position of the viewer
 * @param {ReadonlyVec3} center Point the viewer is looking at
 * @param {ReadonlyVec3} up vec3 pointing up
 * @returns {mat4} out
 */

function lookAt(out, eye, center, up) {
  var x0, x1, x2, y0, y1, y2, z0, z1, z2, len;
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
    return identity(out);
  }

  z0 = eyex - centerx;
  z1 = eyey - centery;
  z2 = eyez - centerz;
  len = 1 / Math.hypot(z0, z1, z2);
  z0 *= len;
  z1 *= len;
  z2 *= len;
  x0 = upy * z2 - upz * z1;
  x1 = upz * z0 - upx * z2;
  x2 = upx * z1 - upy * z0;
  len = Math.hypot(x0, x1, x2);

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
  len = Math.hypot(y0, y1, y2);

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
 * Alias for {@link mat4.multiply}
 * @function
 */

var mul = multiply;

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
 * @param {ReadonlyVec3} a vector to clone
 * @returns {vec3} a new 3D vector
 */

function clone(a) {
  var out = new ARRAY_TYPE(3);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}
/**
 * Calculates the length of a vec3
 *
 * @param {ReadonlyVec3} a vector to calculate length of
 * @returns {Number} length of a
 */

function length(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return Math.hypot(x, y, z);
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
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  return out;
}
/**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  return out;
}
/**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */

function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  return out;
}
/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} distance between a and b
 */

function distance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return Math.hypot(x, y, z);
}
/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to normalize
 * @returns {vec3} out
 */

function normalize$2(out, a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var len = x * x + y * y + z * z;

  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
  }

  out[0] = a[0] * len;
  out[1] = a[1] * len;
  out[2] = a[2] * len;
  return out;
}
/**
 * Calculates the dot product of two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} dot product of a and b
 */

function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
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
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to transform
 * @param {ReadonlyMat4} m matrix to transform with
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
 * Transforms the vec3 with a quat
 * Can also be used for dual quaternions. (Multiply it with the real part)
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to transform
 * @param {ReadonlyQuat} q quaternion to transform with
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
      z = a[2]; // var qvec = [qx, qy, qz];
  // var uv = vec3.cross([], qvec, a);

  var uvx = qy * z - qz * y,
      uvy = qz * x - qx * z,
      uvz = qx * y - qy * x; // var uuv = vec3.cross([], qvec, uv);

  var uuvx = qy * uvz - qz * uvy,
      uuvy = qz * uvx - qx * uvz,
      uuvz = qx * uvy - qy * uvx; // vec3.scale(uv, uv, 2 * w);

  var w2 = qw * 2;
  uvx *= w2;
  uvy *= w2;
  uvz *= w2; // vec3.scale(uuv, uuv, 2);

  uuvx *= 2;
  uuvy *= 2;
  uuvz *= 2; // return vec3.add(out, a, vec3.add(out, uv, uuv));

  out[0] = x + uvx + uuvx;
  out[1] = y + uvy + uuvy;
  out[2] = z + uvz + uuvz;
  return out;
}
/**
 * Alias for {@link vec3.subtract}
 * @function
 */

var sub = subtract;
/**
 * Alias for {@link vec3.length}
 * @function
 */

var len = length;
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

(function () {
  var vec = create$2();
  return function (a, stride, offset, count, fn, arg) {
    var i, l;

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
      vec[0] = a[i];
      vec[1] = a[i + 1];
      vec[2] = a[i + 2];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
      a[i + 2] = vec[2];
    }

    return a;
  };
})();

/**
 * 4 Dimensional Vector
 * @module vec4
 */

/**
 * Creates a new, empty vec4
 *
 * @returns {vec4} a new 4D vector
 */

function create$1() {
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
 * Creates a new vec4 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} a new 4D vector
 */

function fromValues$1(x, y, z, w) {
  var out = new ARRAY_TYPE(4);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}
/**
 * Normalize a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to normalize
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
  }

  out[0] = x * len;
  out[1] = y * len;
  out[2] = z * len;
  out[3] = w * len;
  return out;
}
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

(function () {
  var vec = create$1();
  return function (a, stride, offset, count, fn, arg) {
    var i, l;

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
      vec[0] = a[i];
      vec[1] = a[i + 1];
      vec[2] = a[i + 2];
      vec[3] = a[i + 3];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
      a[i + 2] = vec[2];
      a[i + 3] = vec[3];
    }

    return a;
  };
})();

/**
 * Quaternion
 * @module quat
 */

/**
 * Creates a new identity quat
 *
 * @returns {quat} a new quaternion
 */

function create() {
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
 * Sets a quat from the given angle and rotation axis,
 * then returns it.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyVec3} axis the axis around which to rotate
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
 * Performs a spherical linear interpolation between two quat
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
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
  var omega, cosom, sinom, scale0, scale1; // calc cosine

  cosom = ax * bx + ay * by + az * bz + aw * bw; // adjust signs (if necessary)

  if (cosom < 0.0) {
    cosom = -cosom;
    bx = -bx;
    by = -by;
    bz = -bz;
    bw = -bw;
  } // calculate coefficients


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
  } // calculate final values


  out[0] = scale0 * ax + scale1 * bx;
  out[1] = scale0 * ay + scale1 * by;
  out[2] = scale0 * az + scale1 * bz;
  out[3] = scale0 * aw + scale1 * bw;
  return out;
}
/**
 * Creates a quaternion from the given 3x3 rotation matrix.
 *
 * NOTE: The resultant quaternion is not normalized, so you should be sure
 * to renormalize the quaternion yourself where necessary.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyMat3} m rotation matrix
 * @returns {quat} out
 * @function
 */

function fromMat3(out, m) {
  // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
  // article "Quaternion Calculus and Fast Animation".
  var fTrace = m[0] + m[4] + m[8];
  var fRoot;

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
 * Creates a new quat initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} a new quaternion
 * @function
 */

var fromValues = fromValues$1;
/**
 * Normalize a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quaternion to normalize
 * @returns {quat} out
 * @function
 */

var normalize = normalize$1;
/**
 * Sets a quaternion to represent the shortest rotation from one
 * vector to another.
 *
 * Both vectors are assumed to be unit length.
 *
 * @param {quat} out the receiving quaternion.
 * @param {ReadonlyVec3} a the initial vector
 * @param {ReadonlyVec3} b the destination vector
 * @returns {quat} out
 */

(function () {
  var tmpvec3 = create$2();
  var xUnitVec3 = fromValues$2(1, 0, 0);
  var yUnitVec3 = fromValues$2(0, 1, 0);
  return function (out, a, b) {
    var dot$1 = dot(a, b);

    if (dot$1 < -0.999999) {
      cross(tmpvec3, xUnitVec3, a);
      if (len(tmpvec3) < 0.000001) cross(tmpvec3, yUnitVec3, a);
      normalize$2(tmpvec3, tmpvec3);
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
      return normalize(out, out);
    }
  };
})();
/**
 * Performs a spherical linear interpolation with two control points
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @param {ReadonlyQuat} c the third operand
 * @param {ReadonlyQuat} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 */

(function () {
  var temp1 = create();
  var temp2 = create();
  return function (out, a, b, c, d, t) {
    slerp(temp1, a, d, t);
    slerp(temp2, b, c, t);
    slerp(out, temp1, temp2, 2 * t * (1 - t));
    return out;
  };
})();
/**
 * Sets the specified quaternion with values corresponding to the given
 * axes. Each axis is a vec3 and is expected to be unit length and
 * perpendicular to all other specified axes.
 *
 * @param {ReadonlyVec3} view  the vector representing the viewing direction
 * @param {ReadonlyVec3} right the vector representing the local "right" direction
 * @param {ReadonlyVec3} up    the vector representing the local "up" direction
 * @returns {quat} out
 */

(function () {
  var matr = create$4();
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
    return normalize(out, fromMat3(out, matr));
  };
})();

class AnimatableProperty {
    constructor(value) {
        this.restValue = value;
        this.animatedValue = null;
    }

    restAt(value) {
        this.restValue = value;
    }

    animate(value) {
        this.animatedValue = value;
    }

    rest() {
        this.animatedValue = null;
    }

    value() {
        return this.animatedValue ?? this.restValue;
    }

    isDefined() {
        return this.restValue !== undefined;
    }
}

function jsToGl(array) {
    if (array === undefined) {
        return undefined;
    }
    let tensor = new ARRAY_TYPE(array.length);

    for (let i = 0; i < array.length; ++i) {
        tensor[i] = array[i];
    }

    return tensor;
}

function jsToGlSlice(array, offset, stride) {
    let tensor = new ARRAY_TYPE(stride);

    for (let i = 0; i < stride; ++i) {
        tensor[i] = array[offset + i];
    }

    return tensor;
}

function initGlForMembers(gltfObj, gltf, webGlContext) {
    for (const name of Object.keys(gltfObj)) {
        const member = gltfObj[name];

        if (member === undefined) {
            continue;
        }
        if (member.initGl !== undefined) {
            member.initGl(gltf, webGlContext);
        }
        if (Array.isArray(member)) {
            for (const element of member) {
                if (element !== null && element !== undefined && element.initGl !== undefined) {
                    element.initGl(gltf, webGlContext);
                }
            }
        }
    }
}

function objectsFromJsons(jsonObjects, GltfType) {
    if (jsonObjects === undefined) {
        return [];
    }

    const objects = [];
    for (const jsonObject of jsonObjects) {
        objects.push(objectFromJson(jsonObject, GltfType));
    }
    return objects;
}

function objectFromJson(jsonObject, GltfType) {
    const object = new GltfType();
    object.fromJson(jsonObject);
    return object;
}

function fromKeys(target, jsonObj, ignore = []) {
    for (let k of Object.keys(jsonObj)) {
        if (ignore && ignore.find(function (elem) { return elem == k; }) !== undefined) {
            continue; // skip
        }

        let normalizedK = k.replace("^@", "");
        target[normalizedK] = structuredClone(jsonObj[k]);
    }
}

function stringHash(str, seed = 0) {
    let hash = seed;
    if (str.length === 0) return hash;
    for (let i = 0; i < str.length; i++) {
        let chr = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}

function clamp(number, min, max) {
    return Math.min(Math.max(number, min), max);
}

function getIsGlb(filename) {
    return getExtension(filename) == "glb";
}

function getExtension(filename) {
    const split = filename.toLowerCase().split(".");
    if (split.length == 1) {
        return undefined;
    }
    return split[split.length - 1];
}

function getContainingFolder(filePath) {
    return filePath.substring(0, filePath.lastIndexOf("/") + 1);
}

// marker interface used to for parsing the uniforms
class UniformStruct { }

class AnimationTimer {
    constructor() {
        this.startTime = 0;
        this.paused = true;
        this.fixedTime = null;
        this.pausedTime = 0;
    }

    elapsedSec() {
        if (this.paused) {
            return this.pausedTime / 1000;
        }
        else {
            return this.fixedTime || (new Date().getTime() - this.startTime) / 1000;
        }
    }

    toggle() {
        if (this.paused) {
            this.unpause();
        }
        else {
            this.pause();
        }
    }

    start() {
        this.startTime = new Date().getTime();
        this.paused = false;
    }

    pause() {
        this.pausedTime = new Date().getTime() - this.startTime;
        this.paused = true;
    }

    unpause() {
        this.startTime += new Date().getTime() - this.startTime - this.pausedTime;
        this.paused = false;
    }

    reset() {
        if (!this.paused) {
            // Animation is running.
            this.startTime = new Date().getTime();
        }
        else {
            this.startTime = 0;
        }
        this.pausedTime = 0;
    }

    setFixedTime(timeInSec) {
        this.paused = false;
        this.fixedTime = timeInSec;
    }
}

// base class for all gltf objects
class GltfObject
{
    constructor()
    {
        this.extensions = undefined;
        this.extras = undefined;
        this.animatedPropertyObjects = {};
        if (this.constructor.animatedProperties === undefined)
        {
            throw new Error("animatedProperties is not defined for " + this.constructor.name);
        }
        for (const prop of this.constructor.animatedProperties)
        {
            this.animatedPropertyObjects[prop] = new AnimatableProperty(undefined);
            Object.defineProperty(this, prop, {
                get: function() { return this.animatedPropertyObjects[prop].value(); },
                set: function(value) { this.animatedPropertyObjects[prop].restAt(value); }
            });
        }
    }
    
    static animatedProperties = undefined;

    fromJson(json)
    {
        fromKeys(this, json);
    }

    initGl(gltf, webGlContext)
    {
        initGlForMembers(this, gltf, webGlContext);
    }
}

class gltfCamera extends GltfObject
{
    static animatedProperties = [];
    constructor()
    {
        super();
        this.name = undefined;
        this.node = undefined;
        this.type = "perspective";
        this.perspective = new PerspectiveCamera();
        this.orthographic = new OrthographicCamera();
    }

    fromJson(json)
    {
        super.fromJson(json);

        if (json.perspective !== undefined)
        {
            this.perspective = new PerspectiveCamera();
            this.perspective.fromJson(json.perspective);
        }
        if (json.orthographic !== undefined)
        {
            this.orthographic = new OrthographicCamera();
            this.orthographic.fromJson(json.orthographic);
        }
    }

    initGl(gltf, webGlContext)
    {
        super.initGl(gltf, webGlContext);

        let cameraIndex = undefined;
        for (let i = 0; i < gltf.nodes.length; i++)
        {
            cameraIndex = gltf.nodes[i].camera;
            if (cameraIndex === undefined)
            {
                continue;
            }

            if (gltf.cameras[cameraIndex] === this)
            {
                this.node = i;
                break;
            }
        }

        // cameraIndex stays undefined if camera is not assigned to any node
        if(this.node === undefined && cameraIndex !== undefined)
        {
            console.error("Invalid node for camera " + cameraIndex);
        }
    }

    sortPrimitivesByDepth(gltf, drawables)
    {
        // Precompute the distances to avoid their computation during sorting.
        for (const drawable of drawables)
        {
            const modelView = create$3();
            multiply(modelView, this.getViewMatrix(gltf), drawable.node.worldTransform);

            // Transform primitive centroid to find the primitive's depth.
            const pos = transformMat4(create$2(), clone(drawable.primitive.centroid), modelView);

            drawable.depth = pos[2];
        }

        // 1. Remove primitives that are behind the camera.
        //    --> They will never be visible and it is cheap to discard them here.
        // 2. Sort primitives so that the furthest nodes are rendered first.
        //    This is required for correct transparency rendering.
        return drawables
            .sort((a, b) => a.depth - b.depth);
    }

    getProjectionMatrix(aspectRatio)
    {
        const projection = create$3();

        if (this.type === "perspective")
        {
            perspective(
                projection,
                this.perspective.yfov,
                this.perspective.aspectRatio ?? aspectRatio,
                this.perspective.znear,
                this.perspective.zfar
            );
        }
        else if (this.type === "orthographic")
        {
            const znear = this.orthographic.znear;
            const zfar = this.orthographic.zfar;
            projection[0]  = 1.0 / this.orthographic.xmag;
            projection[5]  = 1.0 / this.orthographic.ymag;
            projection[10] = 2.0 / (znear - zfar);
            projection[14] = (zfar + znear) / (znear - zfar);
        }

        return projection;
    }

    getViewMatrix(gltf)
    {
        let result = create$3();
        invert(result, this.getTransformMatrix(gltf));
        return result;
    }

    getTarget(gltf)
    {
        const target = create$2();
        const position = this.getPosition(gltf);
        const lookDirection = this.getLookDirection(gltf);
        add(target, lookDirection, position);
        return target;
    }

    getPosition(gltf)
    {
        const position = create$2();
        const node = this.getNode(gltf);
        getTranslation(position, node.worldTransform);
        return position;
    }

    getLookDirection(gltf)
    {
        const direction = create$2();
        const rotation = this.getRotation(gltf);
        transformQuat(direction, fromValues$2(0, 0, -1), rotation);
        return direction;
    }

    getRotation(gltf)
    {
        const rotation = create();
        const node = this.getNode(gltf);
        getRotation(rotation, node.worldTransform);
        return rotation;
    }

    getNode(gltf)
    {
        return gltf.nodes[this.node];
    }

    getTransformMatrix(gltf)
    {
        const node = this.getNode(gltf);
        if (node !== undefined && node.worldTransform !== undefined)
        {
            return node.worldTransform;
        }
        return create$3();

    }

    // Returns a JSON object describing the user camera's current values.
    getDescription(gltf)
    {
        const asset = {
            "generator": "gltf-sample-renderer",
            "version": "2.0"
        };

        const camera = {
            "type": this.type
        };

        if (this.name !== undefined)
        {
            camera["name"] = this.name;
        }

        if (this.type === "perspective")
        {
            camera["perspective"] = {};
            if (this.perspective.aspectRatio)
            {
                camera["perspective"]["aspectRatio"] = this.perspective.aspectRatio;
            }
            camera["perspective"]["yfov"] = this.perspective.yfov;
            if (this.perspective.zfar && this.perspective.zfar != Infinity)
            {
                camera["perspective"]["zfar"] = this.perspective.zfar;
            }
            camera["perspective"]["znear"] = this.perspective.znear;
        }
        else if (this.type === "orthographic")
        {
            camera["orthographic"] = {};
            camera["orthographic"]["xmag"] = this.orthographic.xmag;
            camera["orthographic"]["ymag"] = this.orthographic.ymag;
            camera["orthographic"]["zfar"] = this.orthographic.zfar;
            camera["orthographic"]["znear"] = this.orthographic.znear;
        }

        const mat = this.getTransformMatrix(gltf);

        const node = {
            "camera": 0,
            "matrix": [mat[0], mat[1], mat[2], mat[3],
                mat[4], mat[5], mat[6], mat[7],
                mat[8], mat[9], mat[10], mat[11],
                mat[12], mat[13], mat[14], mat[15]]
        };

        if (this.node !== undefined && gltf.nodes[this.node].name !== undefined)
        {
            node["name"] = gltf.nodes[this.node].name;
        }

        return {
            "asset": asset,
            "cameras": [camera],
            "nodes": [node]
        };
    }
}

class PerspectiveCamera extends GltfObject
{
    static animatedProperties = [
        "yfov",
        "aspectRatio",
        "znear",
        "zfar"
    ];
    constructor() {
        super();
        this.yfov = 45 * Math.PI / 180;
        this.aspectRatio = undefined;
        this.znear = 0.01;
        this.zfar = Infinity;
    }
}

class OrthographicCamera extends GltfObject
{
    static animatedProperties = [
        "xmag",
        "ymag",
        "znear",
        "zfar"
    ];
    constructor() {
        super();
        this.xmag = 1;
        this.ymag = 1;
        this.znear = 0.01;
        this.zfar = Infinity;
    }
}

const ImageMimeType = {JPEG: "image/jpeg", PNG: "image/png", WEBP: "image/webp", HDR: "image/vnd.radiance", KTX2: "image/ktx2", GLTEXTURE: "image/texture"};

let GL = undefined;

class gltfWebGl
{
    constructor(context)
    {
        this.context = context;
        if(GL === undefined)
        {
            GL = context;
        }
    }

    loadWebGlExtensions()
    {
        let EXT_texture_filter_anisotropic = this.context.getExtension("EXT_texture_filter_anisotropic");
        if (EXT_texture_filter_anisotropic)
        {
            this.context.anisotropy = EXT_texture_filter_anisotropic.TEXTURE_MAX_ANISOTROPY_EXT;
            this.context.maxAnisotropy = this.context.getParameter(EXT_texture_filter_anisotropic.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
            this.context.supports_EXT_texture_filter_anisotropic = true;
        }
        else
        {
            console.warn("Anisotropic filtering is not supported");
            this.context.supports_EXT_texture_filter_anisotropic = false;
        }
    }

    setTexture(loc, gltf, textureInfo, texSlot)
    {
        if (loc === null)
        {
            return false;
        }

        let gltfTex = gltf.textures[textureInfo.index];

        if (gltfTex === undefined)
        {
            return false;
        }

        const image = gltf.images[gltfTex.source];
        if (image === undefined)
        {
            return false;
        }

        if (gltfTex.glTexture === undefined)
        {
            if (image.mimeType === ImageMimeType.KTX2 ||
                image.mimeType === ImageMimeType.GLTEXTURE)
            {
                // these image resources are directly loaded to a GPU resource by resource loader
                gltfTex.glTexture = image.image;
            }
            else
            {
                // other images will be uploaded in a later step
                gltfTex.glTexture = this.context.createTexture();
            }
        }

        this.context.activeTexture(GL.TEXTURE0 + texSlot);
        this.context.bindTexture(gltfTex.type, gltfTex.glTexture);

        this.context.uniform1i(loc, texSlot);

        if (!gltfTex.initialized)
        {
            const gltfSampler = gltf.samplers[gltfTex.sampler];

            if (gltfSampler === undefined)
            {
                console.warn("Sampler is undefined for texture: " + textureInfo.index);
                return false;
            }

            this.context.pixelStorei(GL.UNPACK_FLIP_Y_WEBGL, false);

            // upload images that are not directly loaded as GPU resource
            if (image.mimeType === ImageMimeType.PNG ||
                image.mimeType === ImageMimeType.JPEG ||
                image.mimeType === ImageMimeType.WEBP ||
                image.mimeType === ImageMimeType.HDR)
            {
                // the check `GL.SRGB8_ALPHA8 === undefined` is needed as at the moment node-gles does not define the full format enum
                const internalformat = (textureInfo.linear || GL.SRGB8_ALPHA8 === undefined) ? GL.RGBA : GL.SRGB8_ALPHA8;
                this.context.texImage2D(image.type, image.miplevel, internalformat, GL.RGBA, GL.UNSIGNED_BYTE, image.image);
            }

            this.setSampler(gltfSampler, gltfTex.type, textureInfo.generateMips);

            if (textureInfo.generateMips)
            {
                switch (gltfSampler.minFilter)
                {
                case GL.NEAREST_MIPMAP_NEAREST:
                case GL.NEAREST_MIPMAP_LINEAR:
                case GL.LINEAR_MIPMAP_NEAREST:
                case GL.LINEAR_MIPMAP_LINEAR:
                    this.context.generateMipmap(gltfTex.type);
                    break;
                }
            }

            gltfTex.initialized = true;
        }

        return gltfTex.initialized;
    }

    setIndices(gltf, accessorIndex)
    {
        let gltfAccessor = gltf.accessors[accessorIndex];

        if (gltfAccessor.glBuffer === undefined)
        {
            gltfAccessor.glBuffer = this.context.createBuffer();

            let data = gltfAccessor.getTypedView(gltf);

            if (data === undefined)
            {
                return false;
            }

            this.context.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, gltfAccessor.glBuffer);
            this.context.bufferData(GL.ELEMENT_ARRAY_BUFFER, data, GL.STATIC_DRAW);
        }
        else
        {
            this.context.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, gltfAccessor.glBuffer);
        }

        return true;
    }

    enableAttribute(gltf, attributeLocation, gltfAccessor)
    {
        if (attributeLocation === null)
        {
            console.warn("Tried to access unknown attribute");
            return false;
        }

        if (gltfAccessor.glBuffer === undefined)
        {
            gltfAccessor.glBuffer = this.context.createBuffer();

            let data = gltfAccessor.getTypedView(gltf);

            if (data === undefined)
            {
                return false;
            }

            this.context.bindBuffer(GL.ARRAY_BUFFER, gltfAccessor.glBuffer);
            this.context.bufferData(GL.ARRAY_BUFFER, data, GL.STATIC_DRAW);
        }
        else
        {
            this.context.bindBuffer(GL.ARRAY_BUFFER, gltfAccessor.glBuffer);
        }

        this.context.vertexAttribPointer(attributeLocation, gltfAccessor.getComponentCount(gltfAccessor.type), gltfAccessor.componentType, gltfAccessor.normalized, gltfAccessor.byteStride(gltf), 0);
        this.context.enableVertexAttribArray(attributeLocation);

        return true;
    }

    compileShader(shaderIdentifier, isVert, shaderSource)
    {
        const shader = this.context.createShader(isVert ? GL.VERTEX_SHADER : GL.FRAGMENT_SHADER);
        this.context.shaderSource(shader, shaderSource);
        this.context.compileShader(shader);
        const compiled = this.context.getShaderParameter(shader, GL.COMPILE_STATUS);

        if (!compiled)
        {
            // output surrounding source code
            let info = "";
            const messages = this.context.getShaderInfoLog(shader).split("\n");
            for(const message of messages)
            {
                
                const matches = message.match(/(WARNING|ERROR): ([0-9]*):([0-9]*):(.*)/i);
                if (matches && matches.length == 5)
                {
                    const lineNumber = parseInt(matches[3]) - 1;
                    const lines = shaderSource.split("\n");

                    info += `${matches[1]}: ${shaderIdentifier}+includes:${lineNumber}: ${matches[4]}`;

                    for(let i = Math.max(0, lineNumber - 2); i < Math.min(lines.length, lineNumber + 3); i++)
                    {
                        if (lineNumber === i)
                        {
                            info += "->";
                        }
                        info += "\t" + lines[i] + "\n";
                    }
                }
                else
                {
                    info += message + "\n";
                }
            }

            throw new Error("Could not compile WebGL program '" + shaderIdentifier + "': " + info);
        }

        return shader;
    }

    linkProgram(vertex, fragment)
    {
        let program = this.context.createProgram();
        this.context.attachShader(program, vertex);
        this.context.attachShader(program, fragment);
        this.context.linkProgram(program);

        if (!this.context.getProgramParameter(program, GL.LINK_STATUS))
        {
            var info = this.context.getProgramInfoLog(program);
            throw new Error('Could not link WebGL program. \n\n' + info);
        }

        return program;
    }

    //https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants
    setSampler(gltfSamplerObj, type, generateMipmaps) // TEXTURE_2D
    {
        if (generateMipmaps)
        {
            this.context.texParameteri(type, GL.TEXTURE_WRAP_S, gltfSamplerObj.wrapS);
            this.context.texParameteri(type, GL.TEXTURE_WRAP_T, gltfSamplerObj.wrapT);
        }
        else
        {
            this.context.texParameteri(type, GL.TEXTURE_WRAP_S, GL.CLAMP_TO_EDGE);
            this.context.texParameteri(type, GL.TEXTURE_WRAP_T, GL.CLAMP_TO_EDGE);
        }

        // If not mip-mapped, force to non-mip-mapped sampler.
        if (!generateMipmaps && (gltfSamplerObj.minFilter != GL.NEAREST) && (gltfSamplerObj.minFilter != GL.LINEAR))
        {
            if ((gltfSamplerObj.minFilter == GL.NEAREST_MIPMAP_NEAREST) || (gltfSamplerObj.minFilter == GL.NEAREST_MIPMAP_LINEAR))
            {
                this.context.texParameteri(type, GL.TEXTURE_MIN_FILTER, GL.NEAREST);
            }
            else
            {
                this.context.texParameteri(type, GL.TEXTURE_MIN_FILTER, GL.LINEAR);
            }
        }
        else
        {
            this.context.texParameteri(type, GL.TEXTURE_MIN_FILTER, gltfSamplerObj.minFilter);
        }
        this.context.texParameteri(type, GL.TEXTURE_MAG_FILTER, gltfSamplerObj.magFilter);

        if (this.context.supports_EXT_texture_filter_anisotropic)
        {
            if ((gltfSamplerObj.magFilter !==  GL.NEAREST) 
                && (gltfSamplerObj.minFilter ===  GL.NEAREST_MIPMAP_LINEAR || gltfSamplerObj.minFilter ===  GL.LINEAR_MIPMAP_LINEAR ))
            {
                this.context.texParameterf(type, this.context.anisotropy, this.context.maxAnisotropy); // => 16xAF
            }
        }
    }
}

/* globals WebGl */


class gltfAccessor extends GltfObject
{
    static animatedProperties = [];
    constructor()
    {
        super();
        this.bufferView = undefined;
        this.byteOffset = 0;
        this.componentType = undefined;
        this.normalized = false;
        this.count = undefined;
        this.type = undefined;
        this.max = undefined;
        this.min = undefined;
        this.sparse = undefined;
        this.name = undefined;

        // non gltf
        this.glBuffer = undefined;
        this.typedView = undefined;
        this.filteredView = undefined;
        this.normalizedFilteredView = undefined;
        this.normalizedTypedView = undefined;
    }

    // getTypedView provides a view to the accessors data in form of
    // a TypedArray. This data can directly be passed to vertexAttribPointer
    getTypedView(gltf)
    {
        if (this.typedView !== undefined)
        {
            return this.typedView;
        }

        if (this.bufferView !== undefined)
        {
            const bufferView = gltf.bufferViews[this.bufferView];
            const buffer = gltf.buffers[bufferView.buffer];
            const byteOffset = this.byteOffset + bufferView.byteOffset;

            const componentSize = this.getComponentSize(this.componentType);
            let componentCount = this.getComponentCount(this.type);

            let arrayLength = 0;
            if(bufferView.byteStride !== 0)
            {
                if (componentSize !== 0)
                {
                    arrayLength = bufferView.byteStride / componentSize * (this.count - 1) + componentCount;
                }
                else
                {
                    console.warn("Invalid component type in accessor '" + (this.name ? this.name : "") + "'");
                }
            }
            else
            {
                arrayLength = this.count * componentCount;
            }

            if (arrayLength * componentSize > buffer.buffer.byteLength - byteOffset)
            {
                arrayLength = (buffer.buffer.byteLength - byteOffset) / componentSize;
                console.warn("Count in accessor '" + (this.name ? this.name : "") + "' is too large.");
            }

            switch (this.componentType)
            {
            case GL.BYTE:
                this.typedView = new Int8Array(buffer.buffer, byteOffset, arrayLength);
                break;
            case GL.UNSIGNED_BYTE:
                this.typedView = new Uint8Array(buffer.buffer, byteOffset, arrayLength);
                break;
            case GL.SHORT:
                this.typedView = new Int16Array(buffer.buffer, byteOffset, arrayLength);
                break;
            case GL.UNSIGNED_SHORT:
                this.typedView = new Uint16Array(buffer.buffer, byteOffset, arrayLength);
                break;
            case GL.UNSIGNED_INT:
                this.typedView = new Uint32Array(buffer.buffer, byteOffset, arrayLength);
                break;
            case GL.FLOAT:
                this.typedView = new Float32Array(buffer.buffer, byteOffset, arrayLength);
                break;
            }
        }
        else
        {
            this.typedView = this.createView();
        }

        if (this.sparse !== undefined)
        {
            this.applySparse(gltf, this.typedView);
        }

        return this.typedView;
    }

    // getNormalizedTypedView provides an alternative view to the accessors data,
    // where quantized data is already normalized. This is useful if the data is not passed
    // to vertexAttribPointer but used immediately (like e.g. animations)
    getNormalizedTypedView(gltf)
    {
        if(this.normalizedTypedView !== undefined)
        {
            return this.normalizedTypedView;
        }

        const typedView = this.getTypedView(gltf);
        this.normalizedTypedView = this.normalized ? gltfAccessor.dequantize(typedView, this.componentType) : typedView;
        return this.normalizedTypedView;
    }

    // getDeinterlacedView provides a view to the accessors data in form of
    // a TypedArray. In contrast to getTypedView, getDeinterlacedView deinterlaces
    // data, i.e. stripping padding and unrelated components from the array. It then
    // only contains the data of the accessor
    getDeinterlacedView(gltf)
    {
        if (this.filteredView !== undefined)
        {
            return this.filteredView;
        }

        if (this.bufferView !== undefined)
        {
            const bufferView = gltf.bufferViews[this.bufferView];
            const buffer = gltf.buffers[bufferView.buffer];
            const byteOffset = this.byteOffset + bufferView.byteOffset;

            const componentSize = this.getComponentSize(this.componentType);
            const componentCount = this.getComponentCount(this.type);
            const arrayLength = this.count * componentCount;

            let stride = bufferView.byteStride !== 0 ? bufferView.byteStride : componentCount * componentSize;
            let dv = new DataView(buffer.buffer, byteOffset, this.count * stride);

            let func = 'getFloat32';
            switch (this.componentType)
            {
            case GL.BYTE:
                this.filteredView = new Int8Array(arrayLength);
                func = 'getInt8';
                break;
            case GL.UNSIGNED_BYTE:
                this.filteredView = new Uint8Array(arrayLength);
                func = 'getUint8';
                break;
            case GL.SHORT:
                this.filteredView = new Int16Array(arrayLength);
                func = 'getInt16';
                break;
            case GL.UNSIGNED_SHORT:
                this.filteredView = new Uint16Array(arrayLength);
                func = 'getUint16';
                break;
            case GL.UNSIGNED_INT:
                this.filteredView = new Uint32Array(arrayLength);
                func = 'getUint32';
                break;
            case GL.FLOAT:
                this.filteredView = new Float32Array(arrayLength);
                func = 'getFloat32';
                break;
            }

            for(let i = 0; i < arrayLength; ++i)
            {
                let offset = Math.floor(i/componentCount) * stride + (i % componentCount) * componentSize;
                this.filteredView[i] = dv[func](offset, true);
            }
        }
        else
        {
            this.filteredView = this.createView();
        }

        if (this.sparse !== undefined)
        {
            this.applySparse(gltf, this.filteredView);
        }

        return this.filteredView;
    }

    createView()
    {
        const size = this.count * this.getComponentCount(this.type);
        if (this.componentType == GL.BYTE) return new Int8Array(size);
        if (this.componentType == GL.UNSIGNED_BYTE) return new Uint8Array(size);
        if (this.componentType == GL.SHORT) return new Int16Array(size);
        if (this.componentType == GL.UNSIGNED_SHORT) return new Uint16Array(size);
        if (this.componentType == GL.UNSIGNED_INT) return new Uint32Array(size);
        if (this.componentType == GL.FLOAT) return new Float32Array(size);
        return undefined;
    }

    // getNormalizedDeinterlacedView provides an alternative view to the accessors data,
    // where quantized data is already normalized. This is useful if the data is not passed
    // to vertexAttribPointer but used immediately (like e.g. animations)
    getNormalizedDeinterlacedView(gltf)
    {
        if(this.normalizedFilteredView !== undefined)
        {
            return this.normalizedFilteredView;
        }

        const filteredView = this.getDeinterlacedView(gltf);
        this.normalizedFilteredView = this.normalized ? gltfAccessor.dequantize(filteredView, this.componentType) : filteredView;
        return this.normalizedFilteredView;
    }

    byteStride(gltf)
    {
        return gltf.bufferViews[this.bufferView]?.byteStride ??
            gltf.bufferViews[this.sparse?.values.bufferView]?.byteStride ??
            0;
    }

    applySparse(gltf, view)
    {
        // Gather indices.

        const indicesBufferView = gltf.bufferViews[this.sparse.indices.bufferView];
        const indicesBuffer = gltf.buffers[indicesBufferView.buffer];
        const indicesByteOffset = (this.sparse.indices.byteOffset ?? 0) + (indicesBufferView.byteOffset ?? 0);

        const indicesComponentSize = this.getComponentSize(this.sparse.indices.componentType);
        let indicesComponentCount = 1;

        if(indicesBufferView.byteStride !== 0)
        {
            indicesComponentCount = indicesBufferView.byteStride / indicesComponentSize;
        }

        const indicesArrayLength = this.sparse.count * indicesComponentCount;

        let indicesTypedView;
        switch (this.sparse.indices.componentType)
        {
        case GL.UNSIGNED_BYTE:
            indicesTypedView = new Uint8Array(indicesBuffer.buffer, indicesByteOffset, indicesArrayLength);
            break;
        case GL.UNSIGNED_SHORT:
            indicesTypedView = new Uint16Array(indicesBuffer.buffer, indicesByteOffset, indicesArrayLength);
            break;
        case GL.UNSIGNED_INT:
            indicesTypedView = new Uint32Array(indicesBuffer.buffer, indicesByteOffset, indicesArrayLength);
            break;
        }

        // Gather values.

        const valuesBufferView = gltf.bufferViews[this.sparse.values.bufferView];
        const valuesBuffer = gltf.buffers[valuesBufferView.buffer];
        const valuesByteOffset = (this.sparse.values.byteOffset ?? 0) + (valuesBufferView.byteOffset ?? 0);

        const valuesComponentSize = this.getComponentSize(this.componentType);
        let valuesComponentCount = this.getComponentCount(this.type);

        if(valuesBufferView.byteStride !== 0)
        {
            valuesComponentCount = valuesBufferView.byteStride / valuesComponentSize;
        }

        const valuesArrayLength = this.sparse.count * valuesComponentCount;

        let valuesTypedView;
        switch (this.componentType)
        {
        case GL.BYTE:
            valuesTypedView = new Int8Array(valuesBuffer.buffer, valuesByteOffset, valuesArrayLength);
            break;
        case GL.UNSIGNED_BYTE:
            valuesTypedView = new Uint8Array(valuesBuffer.buffer, valuesByteOffset, valuesArrayLength);
            break;
        case GL.SHORT:
            valuesTypedView = new Int16Array(valuesBuffer.buffer, valuesByteOffset, valuesArrayLength);
            break;
        case GL.UNSIGNED_SHORT:
            valuesTypedView = new Uint16Array(valuesBuffer.buffer, valuesByteOffset, valuesArrayLength);
            break;
        case GL.UNSIGNED_INT:
            valuesTypedView = new Uint32Array(valuesBuffer.buffer, valuesByteOffset, valuesArrayLength);
            break;
        case GL.FLOAT:
            valuesTypedView = new Float32Array(valuesBuffer.buffer, valuesByteOffset, valuesArrayLength);
            break;
        }

        // Overwrite values.

        for(let i = 0; i < this.sparse.count; ++i)
        {
            for(let k = 0; k < valuesComponentCount; ++k)
            {
                view[indicesTypedView[i] * valuesComponentCount + k] = valuesTypedView[i * valuesComponentCount + k];
            }
        }
    }

    // dequantize can be used to perform the normalization from WebGL2 vertexAttribPointer explicitly
    // https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_mesh_quantization/README.md#encoding-quantized-data
    static dequantize(typedArray, componentType)
    {
        switch (componentType)
        {
        case GL.BYTE:
            return new Float32Array(typedArray).map(c => Math.max(c / 127.0, -1.0));
        case GL.UNSIGNED_BYTE:
            return new Float32Array(typedArray).map(c => c / 255.0);
        case GL.SHORT:
            return new Float32Array(typedArray).map(c => Math.max(c / 32767.0, -1.0));
        case GL.UNSIGNED_SHORT:
            return new Float32Array(typedArray).map(c => c / 65535.0);
        default:
            return typedArray;
        }
    }

    getComponentCount(type)
    {
        return CompononentCount.get(type);
    }

    getComponentSize(componentType)
    {
        switch (componentType)
        {
        case GL.BYTE:
        case GL.UNSIGNED_BYTE:
            return 1;
        case GL.SHORT:
        case GL.UNSIGNED_SHORT:
            return 2;
        case GL.UNSIGNED_INT:
        case GL.FLOAT:
            return 4;
        default:
            return 0;
        }
    }

    destroy()
    {
        if (this.glBuffer !== undefined)
        {
            // TODO: this breaks the dependency direction
            WebGl.context.deleteBuffer(this.glBuffer);
        }

        this.glBuffer = undefined;
    }
}

const CompononentCount = new Map(
    [
        ["SCALAR", 1],
        ["VEC2", 2],
        ["VEC3", 3],
        ["VEC4", 4],
        ["MAT2", 4],
        ["MAT3", 9],
        ["MAT4", 16]
    ]
);

function getSceneExtents(gltf, sceneIndex, outMin, outMax)
{
    for (const i of [0, 1, 2])
    {
        outMin[i] = Number.POSITIVE_INFINITY;
        outMax[i] = Number.NEGATIVE_INFINITY;
    }

    const scene = gltf.scenes[sceneIndex];

    let nodeIndices = scene.nodes.slice();
    while(nodeIndices.length > 0)
    {
        const node = gltf.nodes[nodeIndices.pop()];
        nodeIndices = nodeIndices.concat(node.children);

        if (node.mesh === undefined)
        {
            continue;
        }

        const mesh = gltf.meshes[node.mesh];
        if (mesh.primitives === undefined)
        {
            continue;
        }

        for (const primitive of mesh.primitives)
        {
            const attribute = primitive.glAttributes.find(a => a.attribute == "POSITION");
            if (attribute === undefined)
            {
                continue;
            }

            const accessor = gltf.accessors[attribute.accessor];
            const assetMin = create$2();
            const assetMax = create$2();
            getExtentsFromAccessor(accessor, node.worldTransform, assetMin, assetMax);

            for (const i of [0, 1, 2])
            {
                outMin[i] = Math.min(outMin[i], assetMin[i]);
                outMax[i] = Math.max(outMax[i], assetMax[i]);
            }
        }
    }
}

function getExtentsFromAccessor(accessor, worldTransform, outMin, outMax)
{
    let min = jsToGl(accessor.min);
    let max = jsToGl(accessor.max);
    
    if (accessor.normalized) {
        min = gltfAccessor.dequantize(min, accessor.componentType);
        max = gltfAccessor.dequantize(max, accessor.componentType);
    }

    // Construct all eight corners from min and max values
    let boxVertices = [
        fromValues$2(min[0], min[1], min[2]),
        fromValues$2(min[0], min[1], max[2]),
        fromValues$2(min[0], max[1], min[2]),
        fromValues$2(min[0], max[1], max[2]),

        fromValues$2(max[0], min[1], min[2]),
        fromValues$2(max[0], min[1], max[2]),
        fromValues$2(max[0], max[1], min[2]),
        fromValues$2(max[0], max[1], max[2])];


    // Transform all bounding box vertices
    for(let i in boxVertices) { 
        transformMat4(boxVertices[i], boxVertices[i], worldTransform); 
    }

    // Create new (axis-aligned) bounding box out of transformed bounding box
    const boxMin = clone(boxVertices[0]); // initialize
    const boxMax = clone(boxVertices[0]);

    for(let i in boxVertices) {
        for (const component of [0, 1, 2]) {
            boxMin[component] = Math.min(boxMin[component], boxVertices[i][component]);
            boxMax[component] = Math.max(boxMax[component], boxVertices[i][component]);
        }
    }

    const center = create$2();
    add(center, boxMax, boxMin);
    scale(center, center, 0.5);

    const centerToSurface = create$2();
    sub(centerToSurface, boxMax, center);

    const radius = length(centerToSurface);

    for (const i of [0, 1, 2])
    {
        outMin[i] = center[i] - radius;
        outMax[i] = center[i] + radius;
    }
}

const PanSpeedDenominator = 3500;
const MaxNearFarRatio = 10000;

class UserCamera extends gltfCamera
{
    /**
     * Create a new user camera.
     */
    constructor()
    {
        super();

        this.transform = create$3();
        this.rotAroundY = 0;
        this.rotAroundX = 0;
        this.distance = 1;
        this.baseDistance = 1.0;
        this.zoomExponent = 5.0;
        this.zoomFactor = 0.01;
        this.orbitSpeed = 1 / 180;
        this.panSpeed = 1;
        this.sceneExtents = {
            min: create$2(),
            max: create$2()
        };
    }

    getTransformMatrix()
    {
        return this.transform;
    }

    /**
     * Sets the vertical FoV of the user camera.
     * @param {number} yfov 
     */
    setVerticalFoV(yfov)
    {
        this.perspective.yfov = yfov;
    }

    /**
     * Returns the current position of the user camera as a vec3.
     */
    getPosition()
    {
        let pos = create$2();
        getTranslation(pos, this.transform);
        return pos;
    }

    /**
     * Returns the current rotation of the user camera as quat.
     */
    getRotation()
    {
        let rot = create();
        getRotation(rot, this.transform);
        return rot;
    }

    /**
     * Returns the normalized direction the user camera looks at as vec3.
     */
    getLookDirection()
    {
        let dir = [-this.transform[8], -this.transform[9], -this.transform[10]];
        normalize$2(dir, dir);
        return dir;
    }

    /**
     * Returns the current target the camera looks at as vec3.
     * This multiplies the viewing direction with the distance.
     * For distance 0 the normalized viewing direction is used.
     */
    getTarget()
    {
        const target = create$2();
        const position = this.getPosition();
        let lookDirection = this.getLookDirection();
        if (this.distance != 0 && this.distance != 1)
        {
            lookDirection = lookDirection.map(x => x * this.distance);
        }
        add(target, lookDirection, position);
        return target;
    }

    /**
     * Look from user camera to target.
     * This changes the transformation of the user camera.
     * @param {vec3} from 
     * @param {vec3} to 
     */
    lookAt(from, to)
    {
        this.transform = create$3();
        lookAt(this.transform, from, to, fromValues$2(0, 1, 0));
    }

    /**
     * Sets the position of the user camera.
     * @param {vec3} position 
     */
    setPosition(position)
    {
        this.transform[12] = position[0];
        this.transform[13] = position[1];
        this.transform[14] = position[2];
    }

    /**
     * This rotates the user camera towards the target and sets the position of the user camera
     * according to the current distance.
     * @param {vec3} target 
     */
    setTarget(target)
    {
        let pos = create$2();
        getTranslation(pos, this.transform);
        this.transform = create$3();
        lookAt(this.transform, pos, target, fromValues$2(0, 1, 0));
        this.setDistanceFromTarget(this.distance, target);
    }

    /**
     * Sets the rotation of the camera.
     * Yaw and pitch in euler angles (degrees).
     * @param {number} yaw 
     * @param {number} pitch 
     */
    setRotation(yaw, pitch)
    {
        const tmpPos = this.getPosition();
        let mat4x = create$3();
        let mat4y = create$3();
        fromXRotation(mat4x, pitch);
        fromYRotation(mat4y, yaw);
        this.transform = mat4y;
        this.setPosition(tmpPos);
        multiply(this.transform, this.transform, mat4x);
    }

    /**
     * Transforms the user camera to look at a target from a specfic distance using the current rotation.
     * This will only change the position of the user camera, not the rotation.
     * Use this function to set the distance.
     * @param {number} distance 
     * @param {vec3} target 
     */
    setDistanceFromTarget(distance, target)
    {
        const lookDirection = this.getLookDirection();
        const distVec = lookDirection.map(x => x * -distance);
        let pos = create$2();
        add(pos, target, distVec);
        this.setPosition(pos);
        this.distance = distance;
    }

    /**
     * Zoom exponentially according to this.zoomFactor and this.zoomExponent.
     * The default zoomFactor provides good zoom speed for values from [-1,1].
     * @param {number} value 
     */
    zoomBy(value)
    {
        let target = this.getTarget();

        // zoom exponentially
        let zoomDistance = Math.pow(this.distance / this.baseDistance, 1.0 / this.zoomExponent);
        zoomDistance += this.zoomFactor * value;
        zoomDistance = Math.max(zoomDistance, 0.0001);
        this.distance = Math.pow(zoomDistance, this.zoomExponent) * this.baseDistance;

        this.setDistanceFromTarget(this.distance, target);
        this.fitCameraPlanesToExtents(this.sceneExtents.min, this.sceneExtents.max);
    }

    /**
     * Orbit around the target.
     * x and y should be in radient and are added to the current rotation.
     * The rotation around the x-axis is limited to 180 degree.
     * The axes are inverted: e.g. if y is positive the camera will look further down.
     * @param {number} x 
     * @param {number} y 
     */
    orbit(x, y)
    {
        const target = this.getTarget();
        const rotAroundXMax = Math.PI / 2 - 0.01;
        this.rotAroundY += (-x * this.orbitSpeed);
        this.rotAroundX += (-y * this.orbitSpeed);
        this.rotAroundX = clamp(this.rotAroundX, -rotAroundXMax, rotAroundXMax);
        this.setRotation(this.rotAroundY, this.rotAroundX);
        this.setDistanceFromTarget(this.distance, target);
    }

    /**
     * Pan the user camera.
     * The axes are inverted: e.g. if y is positive the camera will move down.
     * @param {number} x 
     * @param {number} y 
     */
    pan(x, y)
    {
        const right = fromValues$2(this.transform[0], this.transform[1], this.transform[2]);
        normalize$2(right, right);
        scale(right, right, -x * this.panSpeed * (this.distance / this.baseDistance));

        const up = fromValues$2(this.transform[4], this.transform[5], this.transform[6]);
        normalize$2(up, up);
        scale(up, up, -y * this.panSpeed * (this.distance / this.baseDistance));

        let pos = this.getPosition();

        add(pos, pos, up);
        add(pos, pos, right);

        this.setPosition(pos);
    }

    fitPanSpeedToScene(min, max)
    {
        const longestDistance = distance(min, max);
        this.panSpeed = longestDistance / PanSpeedDenominator;
    }

    reset()
    {
        this.transform = create$3();
        this.rotAroundX = 0;
        this.rotAroundY = 0;
        this.fitDistanceToExtents(this.sceneExtents.min, this.sceneExtents.max);
        this.fitCameraTargetToExtents(this.sceneExtents.min, this.sceneExtents.max);
    }

    /**
     * Calculates a camera position which looks at the center of the scene from an appropriate distance.
     * This calculates near and far plane as well.
     * @param {Gltf} gltf 
     * @param {number} sceneIndex 
     */
    resetView(gltf, sceneIndex)
    {
        if(gltf === undefined)
        {
            return;
        }

        this.transform = create$3();
        this.rotAroundX = 0;
        this.rotAroundY = 0;
        getSceneExtents(gltf, sceneIndex, this.sceneExtents.min, this.sceneExtents.max);
        this.fitDistanceToExtents(this.sceneExtents.min, this.sceneExtents.max);
        this.fitCameraTargetToExtents(this.sceneExtents.min, this.sceneExtents.max);

        this.fitPanSpeedToScene(this.sceneExtents.min, this.sceneExtents.max);
        this.fitCameraPlanesToExtents(this.sceneExtents.min, this.sceneExtents.max);

    }

    /**
     * Fit view to updated canvas size without changing rotation if distance is incorrect
     * @param {Gltf} gltf 
     * @param {number} sceneIndex 
     */
    fitViewToScene(gltf, sceneIndex)
    {
        if(gltf === undefined)
        {
            return;
        }

        this.transform = create$3();
        getSceneExtents(gltf, sceneIndex, this.sceneExtents.min, this.sceneExtents.max);
        this.fitDistanceToExtents(this.sceneExtents.min, this.sceneExtents.max);
        this.fitCameraTargetToExtents(this.sceneExtents.min, this.sceneExtents.max);

        this.fitPanSpeedToScene(this.sceneExtents.min, this.sceneExtents.max);
        this.fitCameraPlanesToExtents(this.sceneExtents.min, this.sceneExtents.max);

    }

    fitDistanceToExtents(min, max)
    {
        const maxAxisLength = Math.max(max[0] - min[0], max[1] - min[1]);
        const yfov = this.perspective.yfov;
        const xfov = this.perspective.yfov * (this.perspective.aspectRatio ?? 1);

        const yZoom = maxAxisLength / 2 / Math.tan(yfov / 2);
        const xZoom = maxAxisLength / 2 / Math.tan(xfov / 2);

        this.distance = Math.max(xZoom, yZoom);
        this.baseDistance = this.distance;
    }

    fitCameraTargetToExtents(min, max)
    {
        let target = [0,0,0];
        for (const i of [0, 1, 2])
        {
            target[i] = (max[i] + min[i]) / 2;
        }
        this.setRotation(this.rotAroundY, this.rotAroundX);
        this.setDistanceFromTarget(this.distance, target);
    }

    fitCameraPlanesToExtents(min, max)
    {
        // depends only on scene min/max and the camera distance

        // Manually increase scene extent just for the camera planes to avoid camera clipping in most situations.
        const longestDistance = 10 * distance(min, max);
        let zNear = this.distance - (longestDistance * 0.6);
        let zFar = this.distance + (longestDistance * 0.6);

        // minimum near plane value needs to depend on far plane value to avoid z fighting or too large near planes
        zNear = Math.max(zNear, zFar / MaxNearFarRatio);

        this.perspective.znear = zNear;
        this.perspective.zfar = zFar;
    }
}

/**
 * GltfState containing a state for visualization in GltfView
 */
class GltfState
{
    /**
     * GltfState represents all state that can be visualized in a view. You could have
     * multiple GltfStates configured and switch between them on demand.
     * @param {*} view GltfView to which this state belongs
     */
    constructor(view)
    {
        /** loaded gltf data @see ResourceLoader.loadGltf */
        this.gltf = undefined;
        /** loaded environment data @see ResourceLoader.loadEnvironment */
        this.environment = undefined;
        /** user camera @see UserCamera, convenient camera controls */
        this.userCamera = new UserCamera();
        /** gltf scene that is visible in the view */
        this.sceneIndex = 0;
        /**
         * index of the camera that is used to render the view. a
         * value of 'undefined' enables the user camera
         */
        this.cameraIndex = undefined;
        /** indices of active animations */
        this.animationIndices = [];
        /** animation timer allows to control the animation time */
        this.animationTimer = new AnimationTimer();
        /** KHR_materials_variants */
        this.variant = undefined;

        /** parameters used to configure the rendering */
        this.renderingParameters = {
            /** morphing between vertices */
            morphing: true,
            /** skin / skeleton */
            skinning: true,

            enabledExtensions: {
                /** KHR_materials_clearcoat */
                KHR_materials_clearcoat: true,
                /** KHR_materials_sheen */
                KHR_materials_sheen: true,
                /** KHR_materials_transmission */
                KHR_materials_transmission: true,
                /** KHR_materials_volume */
                KHR_materials_volume: true,
                /** KHR_materials_ior makes the index of refraction configurable */
                KHR_materials_ior: true,
                /** KHR_materials_specular allows configuring specular color (f0 color) and amount of specular reflection */
                KHR_materials_specular: true,
                /** KHR_materials_iridescence adds a thin-film iridescence effect */
                KHR_materials_iridescence: true,
                KHR_materials_diffuse_transmission: true,
                /** KHR_materials_anisotropy defines microfacet grooves in the surface, stretching the specular reflection on the surface */
                KHR_materials_anisotropy: true,
                /** KHR_materials_dispersion defines configuring the strength of the angular separation of colors (chromatic abberation)*/
                KHR_materials_dispersion: true,
                KHR_materials_emissive_strength: true,
            },
            /** clear color expressed as list of ints in the range [0, 255] */
            clearColor: [58, 64, 74, 255],
            /** exposure factor */
            exposure: 1.0,
            /** KHR_lights_punctual */
            usePunctual: true,
            /** image based lighting */
            useIBL: true,
            /** image based lighting intensity */
            iblIntensity: 1.0,
            /** render the environment map in the background */
            renderEnvironmentMap: true,
            /** apply blur to the background environment map */
            blurEnvironmentMap: true,
            /** which tonemap to use, use KHR_PBR_NEUTRAL for best color reproduction */
            toneMap: GltfState.ToneMaps.KHR_PBR_NEUTRAL,
            /** render some debug output channes, such as for example the normals */
            debugOutput: GltfState.DebugOutput.NONE,
            /**
             * By default the front face of the environment is +Z (90)
             * Front faces:
             * +X = 0
             * +Z = 90
             * -X = 180
             * -Z = 270
             */
            environmentRotation: 90.0,
            /** If this is set to true, directional lights will be generated if IBL is disabled */
            useDirectionalLightsWithDisabledIBL: false,
            /** MSAA used for cases which are not handled by the browser (e.g. Transmission)*/
            internalMSAA: 4
        };

        // retain a reference to the view with which the state was created, so that it can be validated
        this._view = view;
    }
}

/**
 * ToneMaps enum for the different tonemappings that are supported
 * by gltf sample viewer
*/
GltfState.ToneMaps = {
    /** Khronos PBR neutral tone mapping, see https://github.com/KhronosGroup/ToneMapping, https://modelviewer.dev/examples/tone-mapping */
    KHR_PBR_NEUTRAL: "Khronos PBR Neutral",
    /** ACES sRGB RRT+ODT implementation for 3D Commerce based on Stephen Hill's implementation with a exposure factor of 1.0 / 0.6 */
    ACES_HILL_EXPOSURE_BOOST: "ACES Filmic Tone Mapping (Hill - Exposure Boost)",
    /** fast implementation of the ACES sRGB RRT+ODT based on Krzysztof Narkowicz' implementation*/
    ACES_NARKOWICZ: "ACES Filmic Tone Mapping (Narkowicz)",
    /** more accurate implementation of the ACES sRGB RRT+ODT based on Stephen Hill's implementation*/
    ACES_HILL: "ACES Filmic Tone Mapping (Hill)",
    /** Linear mapping, clamped at 1.0 per channel */
    NONE: "None (Linear mapping, clamped at 1.0)",
};

/**
 * DebugOutput enum for selecting debug output channels
 * such as "NORMAL"
 */
GltfState.DebugOutput = {
    /** standard rendering - debug output is disabled */
    NONE: "None",

    /** generic debug outputs */
    generic: {
        /** output the texture coordinates 0 */
        UV_COORDS_0: "Texture Coordinates 0",
        /** output the texture coordinates 1 */
        UV_COORDS_1: "Texture Coordinates 1",
        /** output the world space normals (i.e. with TBN applied) */
        NORMAL: "Normal Texture",
        /** output the normal from the TBN*/
        GEOMETRYNORMAL: "Geometry Normal",
        /** output the tangent from the TBN*/
        TANGENT: "Geometry Tangent",
        /** output the bitangent from the TBN */
        BITANGENT: "Geometry Bitangent",
        /** output the world space normals (i.e. with TBN applied) */
        WORLDSPACENORMAL: "Shading Normal",
        /** output the alpha value */
        ALPHA: "Alpha",
        /** output the occlusion value */
        OCCLUSION: "Occlusion",
        /** output the emissive value */
        EMISSIVE: "Emissive",
    },

    /** metallic roughness */
    mr: {
        /** output the base color value */
        BASECOLOR: "Base Color",
        /** output the metallic value from pbr metallic roughness */
        METALLIC: "Metallic",
        /** output the roughness value from pbr metallic roughness */
        ROUGHNESS: "Roughness",
    },

    /** KHR_materials_clearcoat */
    clearcoat: {
        /** output the clear coat strength */
        CLEARCOAT_FACTOR: "ClearCoat Strength",
        /** output the clear coat roughness */
        CLEARCOAT_ROUGHNESS: "ClearCoat Roughness",
        /** output the clear coat normal */
        CLEARCOAT_NORMAL: "ClearCoat Normal",
    },

    /** KHR_materials_sheen */
    sheen: {
        /** output the sheen color*/
        SHEEN_COLOR: "Sheen Color",
        /** output the sheen roughness*/
        SHEEN_ROUGHNESS: "Sheen Roughness",
    },

    /** KHR_materials_specular */
    specular: {
        /** output the specular strength*/
        SPECULAR_FACTOR: "Specular Strength",
        /** output the specular color*/
        SPECULAR_COLOR: "Specular Color",
    },

    /** KHR_materials_transmission */
    transmission: {
        /** output the transmission strength*/
        TRANSMISSION_FACTOR: "Transmission Strength",
        /** output the volume thickness*/
        VOLUME_THICKNESS: "Volume Thickness",
    },

    /** KHR_materials_diffuse_tranmission */
    diffuseTransmission: {
        /** output the diffuse tranmission strength */
        DIFFUSE_TRANSMISSION_FACTOR: "Diffuse Transmission Strength",
        /** output the diffuse tranmission color factor */
        DIFFUSE_TRANSMISSION_COLOR_FACTOR: "Diffuse Transmission Color",
    },

    /** KHR_materials_iridescence */
    iridescence: {
        /** output the iridescence strength*/
        IRIDESCENCE_FACTOR: "Iridescence Strength",
        /** output the iridescence thickness*/
        IRIDESCENCE_THICKNESS: "Iridescence Thickness",
    },

    /** KHR_materials_anisotropy */
    anisotropy: {
        /** output the anisotropic strength*/
        ANISOTROPIC_STRENGTH: "Anisotropic Strength",
        /** output final direction as defined by the anisotropyTexture and rotation*/
        ANISOTROPIC_DIRECTION: "Anisotropic Direction",
    },
};

class gltfShader
{
    constructor(program, hash, gl)
    {
        this.program = program;
        this.hash = hash;
        this.uniforms = new Map();
        this.attributes = new Map();
        this.unknownAttributes = [];
        this.unknownUniforms = [];
        this.gl = gl;

        if(this.program !== undefined)
        {
            const uniformCount = this.gl.context.getProgramParameter(this.program, GL.ACTIVE_UNIFORMS);
            for(let i = 0; i < uniformCount; ++i)
            {
                const info = this.gl.context.getActiveUniform(this.program, i);
                const loc = this.gl.context.getUniformLocation(this.program, info.name);
                this.uniforms.set(info.name, {type: info.type, loc: loc});
            }

            const attribCount = this.gl.context.getProgramParameter(this.program, GL.ACTIVE_ATTRIBUTES);
            for(let i = 0; i < attribCount; ++i)
            {
                const info = this.gl.context.getActiveAttrib(this.program, i);
                const loc = this.gl.context.getAttribLocation(this.program, info.name);
                this.attributes.set(info.name, loc);
            }
        }
    }

    destroy()
    {
        if (this.program !== undefined)
        {
            this.deleteProgram(this.program);
        }

        this.program = undefined;
    }

    getAttributeLocation(name)
    {
        const loc = this.attributes.get(name);
        if (loc === undefined)
        {
            if (this.unknownAttributes.find(n => n === name) === undefined)
            {
                console.log("Attribute '%s' does not exist", name);
                this.unknownAttributes.push(name);
            }
            return -1;
        }
        return loc;
    }

    getUniformLocation(name)
    {
        const uniform = this.uniforms.get(name);
        if (uniform === undefined)
        {
            if (this.unknownUniforms.find(n => n === name) === undefined)
            {
                this.unknownUniforms.push(name);
            }
            return null;
        }
        return uniform.loc;
    }

    updateUniform(objectName, object, log = false)
    {
        if (object === undefined) {
            if(log) {
                console.log("update uniform: object undefined");
            }
            return;
        }
        if (object instanceof UniformStruct)
        {
            this.updateUniformStruct(objectName, object, log);
        }
        else if (Array.isArray(object))
        {
            this.updateUniformArray(objectName, object, log);
        }
        else
        {
            this.updateUniformValue(objectName, object, log);
        }
    }

    updateUniformArray(arrayName, array, log)
    {
        if(array[0] instanceof UniformStruct)
        {
            for (let i = 0; i < array.length; ++i)
            {
                let element = array[i];
                let uniformName = arrayName + "[" + i + "]";
                this.updateUniform(uniformName, element, log);
            }
        }else {
            let uniformName = arrayName + "[0]";

            let flat = [];

            if(Array.isArray(array[0]) || array[0].length !== undefined)
            {
                for (let i = 0; i < array.length; ++i)
                {
                    flat.push.apply(flat, Array.from(array[i]));
                }
            }
            else
            {
                flat = array;
            }

            if(flat.length === 0)
            {
                console.error("Failed to flatten uniform array " + uniformName);
                return;
            }

            this.updateUniformValue(uniformName, flat, log);
        }
    }

    updateUniformStruct(structName, object, log)
    {
        let memberNames = Object.keys(object);
        for (let memberName of memberNames)
        {
            let uniformName = structName + "." + memberName;
            this.updateUniform(uniformName, object[memberName], log);
        }
    }

    // upload the values of a uniform with the given name using type resolve to get correct function call
    updateUniformValue(uniformName, value, log)
    {
        const uniform = this.uniforms.get(uniformName);

        if(uniform !== undefined)
        {
            switch (uniform.type) {
            case GL.FLOAT:
            {
                if(Array.isArray(value) || value instanceof Float32Array)
                {
                    this.gl.context.uniform1fv(uniform.loc, value);
                }else {
                    this.gl.context.uniform1f(uniform.loc, value);
                }
                break;
            }
            case GL.FLOAT_VEC2: this.gl.context.uniform2fv(uniform.loc, value); break;
            case GL.FLOAT_VEC3: this.gl.context.uniform3fv(uniform.loc, value); break;
            case GL.FLOAT_VEC4: this.gl.context.uniform4fv(uniform.loc, value); break;

            case GL.INT:
            {
                if(Array.isArray(value) || value instanceof Uint32Array || value instanceof Int32Array)
                {
                    this.gl.context.uniform1iv(uniform.loc, value);
                }else {
                    this.gl.context.uniform1i(uniform.loc, value);
                }
                break;
            }
            case GL.INT_VEC2: this.gl.context.uniform2iv(uniform.loc, value); break;
            case GL.INT_VEC3: this.gl.context.uniform3iv(uniform.loc, value); break;
            case GL.INT_VEC4: this.gl.context.uniform4iv(uniform.loc, value); break;

            case GL.FLOAT_MAT2: this.gl.context.uniformMatrix2fv(uniform.loc, false, value); break;
            case GL.FLOAT_MAT3: this.gl.context.uniformMatrix3fv(uniform.loc, false, value); break;
            case GL.FLOAT_MAT4: this.gl.context.uniformMatrix4fv(uniform.loc, false, value); break;
            }
        }
        else if(log)
        {
            console.warn("Unkown uniform: " + uniformName);
        }
    }
}

// THis class generates and caches the shader source text for a given permutation
class ShaderCache
{
    constructor(sources, gl)
    {
        this.sources  = sources; // shader name -> source code
        this.shaders  = new Map(); // name & permutations hashed -> compiled shader
        this.programs = new Map(); // (vertex shader, fragment shader) -> program
        this.gl = gl;

        // resovle / expande sources (TODO: break include cycles)
        for (let [key, src] of this.sources)
        {
            let changed = false;
            for (let [includeName, includeSource] of this.sources)
            {
                //var pattern = RegExp(/#include</ + includeName + />/);
                const pattern = "#include <" + includeName + ">";

                if(src.includes(pattern))
                {
                    // only replace the first occurance
                    src = src.replace(pattern, includeSource);

                    // remove the others
                    while (src.includes(pattern))
                    {
                        src = src.replace(pattern, "");
                    }

                    changed = true;
                }
            }

            if(changed)
            {
                this.sources.set(key, src);
            }
        }
    }

    destroy()
    {
        for (let [, shader] of this.shaders.entries())
        {
            this.gl.context.deleteShader(shader);
            shader = undefined;
        }

        this.shaders.clear();

        for (let [, program] of this.programs)
        {
            program.destroy();
        }

        this.programs.clear();
    }

    // example args: "pbr.vert", ["NORMALS", "TANGENTS"]
    selectShader(shaderIdentifier, permutationDefines)
    {
        // first check shaders for the exact permutation
        // if not present, check sources and compile it
        // if not present, return null object

        const src = this.sources.get(shaderIdentifier);
        if(src === undefined)
        {
            console.log("Shader source for " + shaderIdentifier + " not found");
            return null;
        }

        const isVert = shaderIdentifier.endsWith(".vert");
        let hash = stringHash(shaderIdentifier);

        // console.log(shaderIdentifier);

        let defines = "#version 300 es\n";
        for(let define of permutationDefines)
        {
            // console.log(define);
            hash ^= stringHash(define);
            defines += "#define " + define + "\n";
        }

        let shader = this.shaders.get(hash);

        if(shader === undefined)
        {
            // console.log(defines);
            // compile this variant
            shader = this.gl.compileShader(shaderIdentifier, isVert, defines + src);
            this.shaders.set(hash, shader);
        }

        return hash;
    }

    getShaderProgram(vertexShaderHash, fragmentShaderHash)
    {
        // just use a long string for this (the javascript engine should be fast enough with comparing this)
        const hash = String(vertexShaderHash) + "," + String(fragmentShaderHash);

        let program = this.programs.get(hash);

        if (program) // program already linked
        {
            return program;
        }
        else // link this shader program type!
        {
            let linkedProg = this.gl.linkProgram(this.shaders.get(vertexShaderHash), this.shaders.get(fragmentShaderHash));
            if(linkedProg)
            {
                let program = new gltfShader(linkedProg, hash, this.gl);
                this.programs.set(hash, program);
                return program;
            }
        }

        return undefined;
    }
}

class EnvironmentRenderer
{
    constructor(webgl)
    {
        const gl = webgl.context;

        this.indexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([
            1, 2, 0,
            2, 3, 0,
            6, 2, 1,
            1, 5, 6,
            6, 5, 4,
            4, 7, 6,
            6, 3, 2,
            7, 3, 6,
            3, 7, 0,
            7, 4, 0,
            5, 1, 0,
            4, 5, 0
        ]), gl.STATIC_DRAW);

        this.vertexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
            -1, -1, -1,
            1, -1, -1,
            1,  1, -1,
            -1,  1, -1,
            -1, -1,  1,
            1, -1,  1,
            1,  1,  1,
            -1,  1,  1
        ]), gl.STATIC_DRAW);
    }

    drawEnvironmentMap(webGl, viewProjectionMatrix, state, shaderCache, fragDefines)
    {
        if (state.environment == undefined || state.renderingParameters.renderEnvironmentMap == false)
        {
            return;
        }

        const gl = webGl.context;

        const vertShader = shaderCache.selectShader("cubemap.vert", []);
        const fragShader = shaderCache.selectShader("cubemap.frag", fragDefines);
        const shader = shaderCache.getShaderProgram(vertShader, fragShader);

        gl.useProgram(shader.program);
        webGl.setTexture(shader.getUniformLocation("u_GGXEnvSampler"), state.environment, state.environment.specularEnvMap, 0);
        shader.updateUniform("u_MipCount", state.environment.mipCount);
        shader.updateUniform("u_EnvBlurNormalized", state.renderingParameters.blurEnvironmentMap ? 0.6 : 0.0);

        const envIntensity = state.renderingParameters.iblIntensity * state.environment.iblIntensityScale;
        shader.updateUniform("u_EnvIntensity", envIntensity, true);

        shader.updateUniform("u_ViewProjectionMatrix", viewProjectionMatrix);
        shader.updateUniform("u_Exposure", state.renderingParameters.exposure, false);

        let rotMatrix4 = create$3();
        rotateY(rotMatrix4, rotMatrix4,  state.renderingParameters.environmentRotation / 180.0 * Math.PI);
        let rotMatrix3 = create$4();
        fromMat4(rotMatrix3, rotMatrix4);
        shader.updateUniform("u_EnvRotation", rotMatrix3);

        gl.frontFace(gl.CCW);
        gl.enable(gl.CULL_FACE);
        gl.disable(gl.BLEND);
        gl.disable(gl.DEPTH_TEST);

        const positionAttributeLocation = shader.getAttributeLocation("a_position");
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
        gl.vertexAttribPointer(positionAttributeLocation, 3, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(positionAttributeLocation);
        gl.drawElements(gl.TRIANGLES, 36, gl.UNSIGNED_SHORT, 0);

        gl.enable(gl.DEPTH_TEST);
    }
}

var pbrShader = "precision highp float;\n#define GLSLIFY 1\n#include <tonemapping.glsl>\n#include <textures.glsl>\n#include <functions.glsl>\n#include <brdf.glsl>\n#include <punctual.glsl>\n#include <ibl.glsl>\n#include <material_info.glsl>\n#ifdef MATERIAL_IRIDESCENCE\n#include <iridescence.glsl>\n#endif\nout vec4 g_finalColor;void main(){vec4 baseColor=getBaseColor();\n#if ALPHAMODE == ALPHAMODE_OPAQUE\nbaseColor.a=1.0;\n#endif\nvec3 color=vec3(0);vec3 v=normalize(u_Camera-v_Position);NormalInfo normalInfo=getNormalInfo(v);vec3 n=normalInfo.n;vec3 t=normalInfo.t;vec3 b=normalInfo.b;float NdotV=clampedDot(n,v);float TdotV=clampedDot(t,v);float BdotV=clampedDot(b,v);MaterialInfo materialInfo;materialInfo.baseColor=baseColor.rgb;materialInfo.ior=1.5;materialInfo.f0_dielectric=vec3(0.04);materialInfo.specularWeight=1.0;materialInfo.f90=vec3(1.0);materialInfo.f90_dielectric=materialInfo.f90;\n#if DEBUG == DEBUG_METALLIC_ROUGHNESS\n#undef MATERIAL_IRIDESCENCE\n#endif\n#ifdef MATERIAL_IOR\nmaterialInfo=getIorInfo(materialInfo);\n#endif\n#ifdef MATERIAL_SPECULARGLOSSINESS\nmaterialInfo=getSpecularGlossinessInfo(materialInfo);\n#endif\n#ifdef MATERIAL_METALLICROUGHNESS\nmaterialInfo=getMetallicRoughnessInfo(materialInfo);\n#endif\n#ifdef MATERIAL_SHEEN\nmaterialInfo=getSheenInfo(materialInfo);\n#endif\n#ifdef MATERIAL_CLEARCOAT\nmaterialInfo=getClearCoatInfo(materialInfo,normalInfo);\n#endif\n#ifdef MATERIAL_SPECULAR\nmaterialInfo=getSpecularInfo(materialInfo);\n#endif\n#ifdef MATERIAL_TRANSMISSION\nmaterialInfo=getTransmissionInfo(materialInfo);\n#endif\n#ifdef MATERIAL_VOLUME\nmaterialInfo=getVolumeInfo(materialInfo);\n#endif\n#ifdef MATERIAL_IRIDESCENCE\nmaterialInfo=getIridescenceInfo(materialInfo);\n#endif\n#ifdef MATERIAL_DIFFUSE_TRANSMISSION\nmaterialInfo=getDiffuseTransmissionInfo(materialInfo);\n#endif\n#ifdef MATERIAL_ANISOTROPY\nmaterialInfo=getAnisotropyInfo(materialInfo,normalInfo);\n#endif\nmaterialInfo.perceptualRoughness=clamp(materialInfo.perceptualRoughness,0.0,1.0);materialInfo.metallic=clamp(materialInfo.metallic,0.0,1.0);materialInfo.alphaRoughness=materialInfo.perceptualRoughness*materialInfo.perceptualRoughness;vec3 f_specular_dielectric=vec3(0.0);vec3 f_specular_metal=vec3(0.0);vec3 f_diffuse=vec3(0.0);vec3 f_dielectric_brdf_ibl=vec3(0.0);vec3 f_metal_brdf_ibl=vec3(0.0);vec3 f_emissive=vec3(0.0);vec3 clearcoat_brdf=vec3(0.0);vec3 f_sheen=vec3(0.0);vec3 f_specular_transmission=vec3(0.0);vec3 f_diffuse_transmission=vec3(0.0);float clearcoatFactor=0.0;vec3 clearcoatFresnel=vec3(0);float albedoSheenScaling=1.0;float diffuseTransmissionThickness=1.0;\n#ifdef MATERIAL_IRIDESCENCE\nvec3 iridescenceFresnel_dielectric=evalIridescence(1.0,materialInfo.iridescenceIor,NdotV,materialInfo.iridescenceThickness,materialInfo.f0_dielectric);vec3 iridescenceFresnel_metallic=evalIridescence(1.0,materialInfo.iridescenceIor,NdotV,materialInfo.iridescenceThickness,baseColor.rgb);if(materialInfo.iridescenceThickness==0.0){materialInfo.iridescenceFactor=0.0;}\n#endif\n#ifdef MATERIAL_DIFFUSE_TRANSMISSION\n#ifdef MATERIAL_VOLUME\ndiffuseTransmissionThickness=materialInfo.thickness*(length(vec3(u_ModelMatrix[0].xyz))+length(vec3(u_ModelMatrix[1].xyz))+length(vec3(u_ModelMatrix[2].xyz)))/3.0;\n#endif\n#endif\n#ifdef MATERIAL_CLEARCOAT\nclearcoatFactor=materialInfo.clearcoatFactor;clearcoatFresnel=F_Schlick(materialInfo.clearcoatF0,materialInfo.clearcoatF90,clampedDot(materialInfo.clearcoatNormal,v));\n#endif\n#ifdef USE_IBL\nf_diffuse=getDiffuseLight(n)*baseColor.rgb;\n#ifdef MATERIAL_DIFFUSE_TRANSMISSION\nvec3 diffuseTransmissionIBL=getDiffuseLight(-n)*materialInfo.diffuseTransmissionColorFactor;\n#ifdef MATERIAL_VOLUME\ndiffuseTransmissionIBL=applyVolumeAttenuation(diffuseTransmissionIBL,diffuseTransmissionThickness,materialInfo.attenuationColor,materialInfo.attenuationDistance);\n#endif\nf_diffuse=mix(f_diffuse,diffuseTransmissionIBL,materialInfo.diffuseTransmissionFactor);\n#endif\n#if defined(MATERIAL_TRANSMISSION)\nf_specular_transmission=getIBLVolumeRefraction(n,v,materialInfo.perceptualRoughness,baseColor.rgb,materialInfo.f0_dielectric,materialInfo.f90,v_Position,u_ModelMatrix,u_ViewMatrix,u_ProjectionMatrix,materialInfo.ior,materialInfo.thickness,materialInfo.attenuationColor,materialInfo.attenuationDistance,materialInfo.dispersion);f_diffuse=mix(f_diffuse,f_specular_transmission,materialInfo.transmissionFactor);\n#endif\n#ifdef MATERIAL_ANISOTROPY\nf_specular_metal=getIBLRadianceAnisotropy(n,v,materialInfo.perceptualRoughness,materialInfo.anisotropyStrength,materialInfo.anisotropicB);f_specular_dielectric=f_specular_metal;\n#else\nf_specular_metal=getIBLRadianceGGX(n,v,materialInfo.perceptualRoughness);f_specular_dielectric=f_specular_metal;\n#endif\nvec3 f_metal_fresnel_ibl=getIBLGGXFresnel(n,v,materialInfo.perceptualRoughness,baseColor.rgb,1.0);f_metal_brdf_ibl=f_metal_fresnel_ibl*f_specular_metal;vec3 f_dielectric_fresnel_ibl=getIBLGGXFresnel(n,v,materialInfo.perceptualRoughness,materialInfo.f0_dielectric,materialInfo.specularWeight);f_dielectric_brdf_ibl=mix(f_diffuse,f_specular_dielectric,f_dielectric_fresnel_ibl);\n#ifdef MATERIAL_IRIDESCENCE\nf_metal_brdf_ibl=mix(f_metal_brdf_ibl,f_specular_metal*iridescenceFresnel_metallic,materialInfo.iridescenceFactor);f_dielectric_brdf_ibl=mix(f_dielectric_brdf_ibl,rgb_mix(f_diffuse,f_specular_dielectric,iridescenceFresnel_dielectric),materialInfo.iridescenceFactor);\n#endif\n#ifdef MATERIAL_CLEARCOAT\nclearcoat_brdf=getIBLRadianceGGX(materialInfo.clearcoatNormal,v,materialInfo.clearcoatRoughness);\n#endif\n#ifdef MATERIAL_SHEEN\nf_sheen=getIBLRadianceCharlie(n,v,materialInfo.sheenRoughnessFactor,materialInfo.sheenColorFactor);albedoSheenScaling=1.0-max3(materialInfo.sheenColorFactor)*albedoSheenScalingLUT(NdotV,materialInfo.sheenRoughnessFactor);\n#endif\ncolor=mix(f_dielectric_brdf_ibl,f_metal_brdf_ibl,materialInfo.metallic);color=f_sheen+color*albedoSheenScaling;color=mix(color,clearcoat_brdf,clearcoatFactor*clearcoatFresnel);\n#ifdef HAS_OCCLUSION_MAP\nfloat ao=1.0;ao=texture(u_OcclusionSampler,getOcclusionUV()).r;color=color*(1.0+u_OcclusionStrength*(ao-1.0));\n#endif\n#endif\nf_diffuse=vec3(0.0);f_specular_dielectric=vec3(0.0);f_specular_metal=vec3(0.0);vec3 f_dielectric_brdf=vec3(0.0);vec3 f_metal_brdf=vec3(0.0);\n#ifdef USE_PUNCTUAL\nfor(int i=0;i<LIGHT_COUNT;++i){Light light=u_Lights[i];vec3 pointToLight;if(light.type!=LightType_Directional){pointToLight=light.position-v_Position;}else{pointToLight=-light.direction;}vec3 l=normalize(pointToLight);vec3 h=normalize(l+v);float NdotL=clampedDot(n,l);float NdotV=clampedDot(n,v);float NdotH=clampedDot(n,h);float LdotH=clampedDot(l,h);float VdotH=clampedDot(v,h);vec3 dielectric_fresnel=F_Schlick(materialInfo.f0_dielectric*materialInfo.specularWeight,materialInfo.f90_dielectric,abs(VdotH));vec3 metal_fresnel=F_Schlick(baseColor.rgb,vec3(1.0),abs(VdotH));vec3 lightIntensity=getLighIntensity(light,pointToLight);vec3 l_diffuse=lightIntensity*NdotL*BRDF_lambertian(baseColor.rgb);vec3 l_specular_dielectric=vec3(0.0);vec3 l_specular_metal=vec3(0.0);vec3 l_dielectric_brdf=vec3(0.0);vec3 l_metal_brdf=vec3(0.0);vec3 l_clearcoat_brdf=vec3(0.0);vec3 l_sheen=vec3(0.0);float l_albedoSheenScaling=1.0;\n#ifdef MATERIAL_DIFFUSE_TRANSMISSION\nvec3 diffuse_btdf=lightIntensity*clampedDot(-n,l)*BRDF_lambertian(materialInfo.diffuseTransmissionColorFactor);\n#ifdef MATERIAL_VOLUME\ndiffuse_btdf=applyVolumeAttenuation(diffuse_btdf,diffuseTransmissionThickness,materialInfo.attenuationColor,materialInfo.attenuationDistance);\n#endif\nl_diffuse=mix(l_diffuse,diffuse_btdf,materialInfo.diffuseTransmissionFactor);\n#endif\n#ifdef MATERIAL_TRANSMISSION\nvec3 transmissionRay=getVolumeTransmissionRay(n,v,materialInfo.thickness,materialInfo.ior,u_ModelMatrix);pointToLight-=transmissionRay;l=normalize(pointToLight);vec3 transmittedLight=lightIntensity*getPunctualRadianceTransmission(n,v,l,materialInfo.alphaRoughness,materialInfo.f0_dielectric,materialInfo.f90,baseColor.rgb,materialInfo.ior);\n#ifdef MATERIAL_VOLUME\ntransmittedLight=applyVolumeAttenuation(transmittedLight,length(transmissionRay),materialInfo.attenuationColor,materialInfo.attenuationDistance);\n#endif\nl_diffuse=mix(l_diffuse,transmittedLight,materialInfo.transmissionFactor);\n#endif\nvec3 intensity=getLighIntensity(light,pointToLight);\n#ifdef MATERIAL_ANISOTROPY\nl_specular_metal=intensity*NdotL*BRDF_specularGGXAnisotropy(materialInfo.alphaRoughness,materialInfo.anisotropyStrength,n,v,l,h,materialInfo.anisotropicT,materialInfo.anisotropicB);l_specular_dielectric=l_specular_metal;\n#else\nl_specular_metal=intensity*NdotL*BRDF_specularGGX(materialInfo.alphaRoughness,NdotL,NdotV,NdotH);l_specular_dielectric=l_specular_metal;\n#endif\nl_metal_brdf=metal_fresnel*l_specular_metal;l_dielectric_brdf=mix(l_diffuse,l_specular_dielectric,dielectric_fresnel);\n#ifdef MATERIAL_IRIDESCENCE\nl_metal_brdf=mix(l_metal_brdf,l_specular_metal*iridescenceFresnel_metallic,materialInfo.iridescenceFactor);l_dielectric_brdf=mix(l_dielectric_brdf,rgb_mix(l_diffuse,l_specular_dielectric,iridescenceFresnel_dielectric),materialInfo.iridescenceFactor);\n#endif\n#ifdef MATERIAL_CLEARCOAT\nl_clearcoat_brdf=intensity*getPunctualRadianceClearCoat(materialInfo.clearcoatNormal,v,l,h,VdotH,materialInfo.clearcoatF0,materialInfo.clearcoatF90,materialInfo.clearcoatRoughness);\n#endif\n#ifdef MATERIAL_SHEEN\nl_sheen=intensity*getPunctualRadianceSheen(materialInfo.sheenColorFactor,materialInfo.sheenRoughnessFactor,NdotL,NdotV,NdotH);l_albedoSheenScaling=min(1.0-max3(materialInfo.sheenColorFactor)*albedoSheenScalingLUT(NdotV,materialInfo.sheenRoughnessFactor),1.0-max3(materialInfo.sheenColorFactor)*albedoSheenScalingLUT(NdotL,materialInfo.sheenRoughnessFactor));\n#endif\nvec3 l_color=mix(l_dielectric_brdf,l_metal_brdf,materialInfo.metallic);l_color=l_sheen+l_color*l_albedoSheenScaling;l_color=mix(l_color,l_clearcoat_brdf,clearcoatFactor*clearcoatFresnel);color+=l_color;}\n#endif\nf_emissive=u_EmissiveFactor;\n#ifdef MATERIAL_EMISSIVE_STRENGTH\nf_emissive*=u_EmissiveStrength;\n#endif\n#ifdef HAS_EMISSIVE_MAP\nf_emissive*=texture(u_EmissiveSampler,getEmissiveUV()).rgb;\n#endif\n#ifdef MATERIAL_UNLIT\ncolor=baseColor.rgb;\n#elif defined(NOT_TRIANGLE) && !defined(HAS_NORMAL_VEC3)\ncolor=f_emissive+baseColor.rgb;\n#else\ncolor=f_emissive*(1.0-clearcoatFactor*clearcoatFresnel)+color;\n#endif\n#if DEBUG == DEBUG_NONE\n#if ALPHAMODE == ALPHAMODE_MASK\nif(baseColor.a<u_AlphaCutoff){discard;}baseColor.a=1.0;\n#endif\n#ifdef LINEAR_OUTPUT\ng_finalColor=vec4(color.rgb,baseColor.a);\n#else\ng_finalColor=vec4(toneMap(color),baseColor.a);\n#endif\n#else\ng_finalColor=vec4(1.0);{float frequency=0.02;float gray=0.9;vec2 v1=step(0.5,fract(frequency*gl_FragCoord.xy));vec2 v2=step(0.5,vec2(1.0)-fract(frequency*gl_FragCoord.xy));g_finalColor.rgb*=gray+v1.x*v1.y+v2.x*v2.y;}\n#endif\n#if DEBUG == DEBUG_UV_0 && defined(HAS_TEXCOORD_0_VEC2)\ng_finalColor.rgb=vec3(v_texcoord_0,0);\n#endif\n#if DEBUG == DEBUG_UV_1 && defined(HAS_TEXCOORD_1_VEC2)\ng_finalColor.rgb=vec3(v_texcoord_1,0);\n#endif\n#if DEBUG == DEBUG_NORMAL_TEXTURE && defined(HAS_NORMAL_MAP)\ng_finalColor.rgb=(normalInfo.ntex+1.0)/2.0;\n#endif\n#if DEBUG == DEBUG_NORMAL_SHADING\ng_finalColor.rgb=(n+1.0)/2.0;\n#endif\n#if DEBUG == DEBUG_NORMAL_GEOMETRY\ng_finalColor.rgb=(normalInfo.ng+1.0)/2.0;\n#endif\n#if DEBUG == DEBUG_TANGENT\ng_finalColor.rgb=(normalInfo.t+1.0)/2.0;\n#endif\n#if DEBUG == DEBUG_BITANGENT\ng_finalColor.rgb=(normalInfo.b+1.0)/2.0;\n#endif\n#if DEBUG == DEBUG_ALPHA\ng_finalColor.rgb=vec3(baseColor.a);\n#endif\n#if DEBUG == DEBUG_OCCLUSION && defined(HAS_OCCLUSION_MAP)\ng_finalColor.rgb=vec3(ao);\n#endif\n#if DEBUG == DEBUG_EMISSIVE\ng_finalColor.rgb=linearTosRGB(f_emissive);\n#endif\n#ifdef MATERIAL_METALLICROUGHNESS\n#if DEBUG == DEBUG_METALLIC\ng_finalColor.rgb=vec3(materialInfo.metallic);\n#endif\n#if DEBUG == DEBUG_ROUGHNESS\ng_finalColor.rgb=vec3(materialInfo.perceptualRoughness);\n#endif\n#if DEBUG == DEBUG_BASE_COLOR\ng_finalColor.rgb=linearTosRGB(materialInfo.baseColor);\n#endif\n#endif\n#ifdef MATERIAL_CLEARCOAT\n#if DEBUG == DEBUG_CLEARCOAT_FACTOR\ng_finalColor.rgb=vec3(materialInfo.clearcoatFactor);\n#endif\n#if DEBUG == DEBUG_CLEARCOAT_ROUGHNESS\ng_finalColor.rgb=vec3(materialInfo.clearcoatRoughness);\n#endif\n#if DEBUG == DEBUG_CLEARCOAT_NORMAL\ng_finalColor.rgb=(materialInfo.clearcoatNormal+vec3(1))/2.0;\n#endif\n#endif\n#ifdef MATERIAL_SHEEN\n#if DEBUG == DEBUG_SHEEN_COLOR\ng_finalColor.rgb=materialInfo.sheenColorFactor;\n#endif\n#if DEBUG == DEBUG_SHEEN_ROUGHNESS\ng_finalColor.rgb=vec3(materialInfo.sheenRoughnessFactor);\n#endif\n#endif\n#ifdef MATERIAL_SPECULAR\n#if DEBUG == DEBUG_SPECULAR_FACTOR\ng_finalColor.rgb=vec3(materialInfo.specularWeight);\n#endif\n#if DEBUG == DEBUG_SPECULAR_COLOR\nvec3 specularTexture=vec3(1.0);\n#ifdef HAS_SPECULAR_COLOR_MAP\nspecularTexture.rgb=texture(u_SpecularColorSampler,getSpecularColorUV()).rgb;\n#endif\ng_finalColor.rgb=u_KHR_materials_specular_specularColorFactor*specularTexture.rgb;\n#endif\n#endif\n#ifdef MATERIAL_TRANSMISSION\n#if DEBUG == DEBUG_TRANSMISSION_FACTOR\ng_finalColor.rgb=vec3(materialInfo.transmissionFactor);\n#endif\n#endif\n#ifdef MATERIAL_VOLUME\n#if DEBUG == DEBUG_VOLUME_THICKNESS\ng_finalColor.rgb=vec3(materialInfo.thickness/u_ThicknessFactor);\n#endif\n#endif\n#ifdef MATERIAL_IRIDESCENCE\n#if DEBUG == DEBUG_IRIDESCENCE_FACTOR\ng_finalColor.rgb=vec3(materialInfo.iridescenceFactor);\n#endif\n#if DEBUG == DEBUG_IRIDESCENCE_THICKNESS\ng_finalColor.rgb=vec3(materialInfo.iridescenceThickness/1200.0);\n#endif\n#endif\n#ifdef MATERIAL_ANISOTROPY\n#if DEBUG == DEBUG_ANISOTROPIC_STRENGTH\ng_finalColor.rgb=vec3(materialInfo.anisotropyStrength);\n#endif\n#if DEBUG == DEBUG_ANISOTROPIC_DIRECTION\nvec2 direction=vec2(1.0,0.0);\n#ifdef HAS_ANISOTROPY_MAP\ndirection=texture(u_AnisotropySampler,getAnisotropyUV()).xy;direction=direction*2.0-vec2(1.0);\n#endif\nvec2 directionRotation=u_Anisotropy.xy;mat2 rotationMatrix=mat2(directionRotation.x,directionRotation.y,-directionRotation.y,directionRotation.x);direction=(direction+vec2(1.0))*0.5;g_finalColor.rgb=vec3(direction,0.0);\n#endif\n#endif\n#ifdef MATERIAL_DIFFUSE_TRANSMISSION\n#if DEBUG == DEBUG_DIFFUSE_TRANSMISSION_FACTOR\ng_finalColor.rgb=linearTosRGB(vec3(materialInfo.diffuseTransmissionFactor));\n#endif\n#if DEBUG == DEBUG_DIFFUSE_TRANSMISSION_COLOR_FACTOR\ng_finalColor.rgb=linearTosRGB(materialInfo.diffuseTransmissionColorFactor);\n#endif\n#endif\n}"; // eslint-disable-line

var brdfShader = "#define GLSLIFY 1\nvec3 F_Schlick(vec3 f0,vec3 f90,float VdotH){return f0+(f90-f0)*pow(clamp(1.0-VdotH,0.0,1.0),5.0);}float F_Schlick(float f0,float f90,float VdotH){float x=clamp(1.0-VdotH,0.0,1.0);float x2=x*x;float x5=x*x2*x2;return f0+(f90-f0)*x5;}float F_Schlick(float f0,float VdotH){float f90=1.0;return F_Schlick(f0,f90,VdotH);}vec3 F_Schlick(vec3 f0,float f90,float VdotH){float x=clamp(1.0-VdotH,0.0,1.0);float x2=x*x;float x5=x*x2*x2;return f0+(f90-f0)*x5;}vec3 F_Schlick(vec3 f0,float VdotH){float f90=1.0;return F_Schlick(f0,f90,VdotH);}vec3 Schlick_to_F0(vec3 f,vec3 f90,float VdotH){float x=clamp(1.0-VdotH,0.0,1.0);float x2=x*x;float x5=clamp(x*x2*x2,0.0,0.9999);return(f-f90*x5)/(1.0-x5);}float Schlick_to_F0(float f,float f90,float VdotH){float x=clamp(1.0-VdotH,0.0,1.0);float x2=x*x;float x5=clamp(x*x2*x2,0.0,0.9999);return(f-f90*x5)/(1.0-x5);}vec3 Schlick_to_F0(vec3 f,float VdotH){return Schlick_to_F0(f,vec3(1.0),VdotH);}float Schlick_to_F0(float f,float VdotH){return Schlick_to_F0(f,1.0,VdotH);}float V_GGX(float NdotL,float NdotV,float alphaRoughness){float alphaRoughnessSq=alphaRoughness*alphaRoughness;float GGXV=NdotL*sqrt(NdotV*NdotV*(1.0-alphaRoughnessSq)+alphaRoughnessSq);float GGXL=NdotV*sqrt(NdotL*NdotL*(1.0-alphaRoughnessSq)+alphaRoughnessSq);float GGX=GGXV+GGXL;if(GGX>0.0){return 0.5/GGX;}return 0.0;}float D_GGX(float NdotH,float alphaRoughness){float alphaRoughnessSq=alphaRoughness*alphaRoughness;float f=(NdotH*NdotH)*(alphaRoughnessSq-1.0)+1.0;return alphaRoughnessSq/(M_PI*f*f);}float lambdaSheenNumericHelper(float x,float alphaG){float oneMinusAlphaSq=(1.0-alphaG)*(1.0-alphaG);float a=mix(21.5473,25.3245,oneMinusAlphaSq);float b=mix(3.82987,3.32435,oneMinusAlphaSq);float c=mix(0.19823,0.16801,oneMinusAlphaSq);float d=mix(-1.97760,-1.27393,oneMinusAlphaSq);float e=mix(-4.32054,-4.85967,oneMinusAlphaSq);return a/(1.0+b*pow(x,c))+d*x+e;}float lambdaSheen(float cosTheta,float alphaG){if(abs(cosTheta)<0.5){return exp(lambdaSheenNumericHelper(cosTheta,alphaG));}else{return exp(2.0*lambdaSheenNumericHelper(0.5,alphaG)-lambdaSheenNumericHelper(1.0-cosTheta,alphaG));}}float V_Sheen(float NdotL,float NdotV,float sheenRoughness){sheenRoughness=max(sheenRoughness,0.000001);float alphaG=sheenRoughness*sheenRoughness;return clamp(1.0/((1.0+lambdaSheen(NdotV,alphaG)+lambdaSheen(NdotL,alphaG))*(4.0*NdotV*NdotL)),0.0,1.0);}float D_Charlie(float sheenRoughness,float NdotH){sheenRoughness=max(sheenRoughness,0.000001);float alphaG=sheenRoughness*sheenRoughness;float invR=1.0/alphaG;float cos2h=NdotH*NdotH;float sin2h=1.0-cos2h;return(2.0+invR)*pow(sin2h,invR*0.5)/(2.0*M_PI);}vec3 BRDF_lambertian(vec3 diffuseColor){return(diffuseColor/M_PI);}vec3 BRDF_specularGGX(float alphaRoughness,float NdotL,float NdotV,float NdotH){float Vis=V_GGX(NdotL,NdotV,alphaRoughness);float D=D_GGX(NdotH,alphaRoughness);return vec3(Vis*D);}\n#ifdef MATERIAL_ANISOTROPY\nfloat D_GGX_anisotropic(float NdotH,float TdotH,float BdotH,float anisotropy,float at,float ab){float a2=at*ab;vec3 f=vec3(ab*TdotH,at*BdotH,a2*NdotH);float w2=a2/dot(f,f);return a2*w2*w2/M_PI;}float V_GGX_anisotropic(float NdotL,float NdotV,float BdotV,float TdotV,float TdotL,float BdotL,float at,float ab){float GGXV=NdotL*length(vec3(at*TdotV,ab*BdotV,NdotV));float GGXL=NdotV*length(vec3(at*TdotL,ab*BdotL,NdotL));float v=0.5/(GGXV+GGXL);return clamp(v,0.0,1.0);}vec3 BRDF_specularGGXAnisotropy(float alphaRoughness,float anisotropy,vec3 n,vec3 v,vec3 l,vec3 h,vec3 t,vec3 b){float at=mix(alphaRoughness,1.0,anisotropy*anisotropy);float ab=clamp(alphaRoughness,0.001,1.0);float NdotL=clamp(dot(n,l),0.0,1.0);float NdotH=clamp(dot(n,h),0.001,1.0);float NdotV=dot(n,v);float V=V_GGX_anisotropic(NdotL,NdotV,dot(b,v),dot(t,v),dot(t,l),dot(b,l),at,ab);float D=D_GGX_anisotropic(NdotH,dot(t,h),dot(b,h),anisotropy,at,ab);return vec3(V*D);}\n#endif\nvec3 BRDF_specularSheen(vec3 sheenColor,float sheenRoughness,float NdotL,float NdotV,float NdotH){float sheenDistribution=D_Charlie(sheenRoughness,NdotH);float sheenVisibility=V_Sheen(NdotL,NdotV,sheenRoughness);return sheenColor*sheenDistribution*sheenVisibility;}"; // eslint-disable-line

var iridescenceShader = "#define GLSLIFY 1\nconst mat3 XYZ_TO_REC709=mat3(3.2404542,-0.9692660,0.0556434,-1.5371385,1.8760108,-0.2040259,-0.4985314,0.0415560,1.0572252);vec3 Fresnel0ToIor(vec3 fresnel0){vec3 sqrtF0=sqrt(fresnel0);return(vec3(1.0)+sqrtF0)/(vec3(1.0)-sqrtF0);}vec3 IorToFresnel0(vec3 transmittedIor,float incidentIor){return sq((transmittedIor-vec3(incidentIor))/(transmittedIor+vec3(incidentIor)));}float IorToFresnel0(float transmittedIor,float incidentIor){return sq((transmittedIor-incidentIor)/(transmittedIor+incidentIor));}vec3 evalSensitivity(float OPD,vec3 shift){float phase=2.0*M_PI*OPD*1.0e-9;vec3 val=vec3(5.4856e-13,4.4201e-13,5.2481e-13);vec3 pos=vec3(1.6810e+06,1.7953e+06,2.2084e+06);vec3 var=vec3(4.3278e+09,9.3046e+09,6.6121e+09);vec3 xyz=val*sqrt(2.0*M_PI*var)*cos(pos*phase+shift)*exp(-sq(phase)*var);xyz.x+=9.7470e-14*sqrt(2.0*M_PI*4.5282e+09)*cos(2.2399e+06*phase+shift[0])*exp(-4.5282e+09*sq(phase));xyz/=1.0685e-7;vec3 srgb=XYZ_TO_REC709*xyz;return srgb;}vec3 evalIridescence(float outsideIOR,float eta2,float cosTheta1,float thinFilmThickness,vec3 baseF0){vec3 I;float iridescenceIor=mix(outsideIOR,eta2,smoothstep(0.0,0.03,thinFilmThickness));float sinTheta2Sq=sq(outsideIOR/iridescenceIor)*(1.0-sq(cosTheta1));float cosTheta2Sq=1.0-sinTheta2Sq;if(cosTheta2Sq<0.0){return vec3(1.0);}float cosTheta2=sqrt(cosTheta2Sq);float R0=IorToFresnel0(iridescenceIor,outsideIOR);float R12=F_Schlick(R0,cosTheta1);float R21=R12;float T121=1.0-R12;float phi12=0.0;if(iridescenceIor<outsideIOR)phi12=M_PI;float phi21=M_PI-phi12;vec3 baseIOR=Fresnel0ToIor(clamp(baseF0,0.0,0.9999));vec3 R1=IorToFresnel0(baseIOR,iridescenceIor);vec3 R23=F_Schlick(R1,cosTheta2);vec3 phi23=vec3(0.0);if(baseIOR[0]<iridescenceIor)phi23[0]=M_PI;if(baseIOR[1]<iridescenceIor)phi23[1]=M_PI;if(baseIOR[2]<iridescenceIor)phi23[2]=M_PI;float OPD=2.0*iridescenceIor*thinFilmThickness*cosTheta2;vec3 phi=vec3(phi21)+phi23;vec3 R123=clamp(R12*R23,1e-5,0.9999);vec3 r123=sqrt(R123);vec3 Rs=sq(T121)*R23/(vec3(1.0)-R123);vec3 C0=R12+Rs;I=C0;vec3 Cm=Rs-T121;for(int m=1;m<=2;++m){Cm*=r123;vec3 Sm=2.0*evalSensitivity(float(m)*OPD,float(m)*phi);I+=Cm*Sm;}return max(I,vec3(0.0));}"; // eslint-disable-line

var materialInfoShader = "#define GLSLIFY 1\nuniform float u_MetallicFactor;uniform float u_RoughnessFactor;uniform vec4 u_BaseColorFactor;uniform vec3 u_SpecularFactor;uniform vec4 u_DiffuseFactor;uniform float u_GlossinessFactor;uniform float u_SheenRoughnessFactor;uniform vec3 u_SheenColorFactor;uniform float u_ClearcoatFactor;uniform float u_ClearcoatRoughnessFactor;uniform vec3 u_KHR_materials_specular_specularColorFactor;uniform float u_KHR_materials_specular_specularFactor;uniform float u_TransmissionFactor;uniform float u_ThicknessFactor;uniform vec3 u_AttenuationColor;uniform float u_AttenuationDistance;uniform float u_IridescenceFactor;uniform float u_IridescenceIor;uniform float u_IridescenceThicknessMinimum;uniform float u_IridescenceThicknessMaximum;uniform float u_DiffuseTransmissionFactor;uniform vec3 u_DiffuseTransmissionColorFactor;uniform float u_EmissiveStrength;uniform float u_Ior;uniform vec3 u_Anisotropy;uniform float u_Dispersion;uniform float u_AlphaCutoff;uniform vec3 u_Camera;\n#ifdef MATERIAL_TRANSMISSION\nuniform ivec2 u_ScreenSize;\n#endif\nuniform mat4 u_ModelMatrix;uniform mat4 u_ViewMatrix;uniform mat4 u_ProjectionMatrix;struct MaterialInfo{float ior;float perceptualRoughness;vec3 f0_dielectric;float alphaRoughness;float fresnel_w;vec3 f90;vec3 f90_dielectric;float metallic;vec3 baseColor;float sheenRoughnessFactor;vec3 sheenColorFactor;vec3 clearcoatF0;vec3 clearcoatF90;float clearcoatFactor;vec3 clearcoatNormal;float clearcoatRoughness;float specularWeight;float transmissionFactor;float thickness;vec3 attenuationColor;float attenuationDistance;float iridescenceFactor;float iridescenceIor;float iridescenceThickness;float diffuseTransmissionFactor;vec3 diffuseTransmissionColorFactor;vec3 anisotropicT;vec3 anisotropicB;float anisotropyStrength;float dispersion;};NormalInfo getNormalInfo(vec3 v){vec2 UV=getNormalUV();vec2 uv_dx=dFdx(UV);vec2 uv_dy=dFdy(UV);if(length(uv_dx)<=1e-2){uv_dx=vec2(1.0,0.0);}if(length(uv_dy)<=1e-2){uv_dy=vec2(0.0,1.0);}vec3 t_=(uv_dy.t*dFdx(v_Position)-uv_dx.t*dFdy(v_Position))/(uv_dx.s*uv_dy.t-uv_dy.s*uv_dx.t);vec3 n,t,b,ng;\n#ifdef HAS_NORMAL_VEC3\n#ifdef HAS_TANGENT_VEC4\nt=normalize(v_TBN[0]);b=normalize(v_TBN[1]);ng=normalize(v_TBN[2]);\n#else\nng=normalize(v_Normal);t=normalize(t_-ng*dot(ng,t_));b=cross(ng,t);\n#endif\n#else\nng=normalize(cross(dFdx(v_Position),dFdy(v_Position)));t=normalize(t_-ng*dot(ng,t_));b=cross(ng,t);\n#endif\n#ifndef NOT_TRIANGLE\nif(gl_FrontFacing==false){t*=-1.0;b*=-1.0;ng*=-1.0;}\n#endif\nNormalInfo info;info.ng=ng;\n#ifdef HAS_NORMAL_MAP\ninfo.ntex=texture(u_NormalSampler,UV).rgb*2.0-vec3(1.0);info.ntex*=vec3(u_NormalScale,u_NormalScale,1.0);info.ntex=normalize(info.ntex);info.n=normalize(mat3(t,b,ng)*info.ntex);\n#else\ninfo.n=ng;\n#endif\ninfo.t=t;info.b=b;return info;}\n#ifdef MATERIAL_CLEARCOAT\nvec3 getClearcoatNormal(NormalInfo normalInfo){\n#ifdef HAS_CLEARCOAT_NORMAL_MAP\nvec3 n=texture(u_ClearcoatNormalSampler,getClearcoatNormalUV()).rgb*2.0-vec3(1.0);n*=vec3(u_ClearcoatNormalScale,u_ClearcoatNormalScale,1.0);n=mat3(normalInfo.t,normalInfo.b,normalInfo.ng)*normalize(n);return n;\n#else\nreturn normalInfo.ng;\n#endif\n}\n#endif\nvec4 getBaseColor(){vec4 baseColor=vec4(1);\n#if defined(MATERIAL_SPECULARGLOSSINESS)\nbaseColor=u_DiffuseFactor;\n#elif defined(MATERIAL_METALLICROUGHNESS)\nbaseColor=u_BaseColorFactor;\n#endif\n#if defined(MATERIAL_SPECULARGLOSSINESS) && defined(HAS_DIFFUSE_MAP)\nbaseColor*=texture(u_DiffuseSampler,getDiffuseUV());\n#elif defined(MATERIAL_METALLICROUGHNESS) && defined(HAS_BASE_COLOR_MAP)\nbaseColor*=texture(u_BaseColorSampler,getBaseColorUV());\n#endif\nreturn baseColor*getVertexColor();}\n#ifdef MATERIAL_SPECULARGLOSSINESS\nMaterialInfo getSpecularGlossinessInfo(MaterialInfo info){info.f0_dielectric=u_SpecularFactor;info.perceptualRoughness=u_GlossinessFactor;\n#ifdef HAS_SPECULAR_GLOSSINESS_MAP\nvec4 sgSample=texture(u_SpecularGlossinessSampler,getSpecularGlossinessUV());info.perceptualRoughness*=sgSample.a;info.f0_dielectric*=sgSample.rgb;\n#endif\ninfo.perceptualRoughness=1.0-info.perceptualRoughness;return info;}\n#endif\n#ifdef MATERIAL_METALLICROUGHNESS\nMaterialInfo getMetallicRoughnessInfo(MaterialInfo info){info.metallic=u_MetallicFactor;info.perceptualRoughness=u_RoughnessFactor;\n#ifdef HAS_METALLIC_ROUGHNESS_MAP\nvec4 mrSample=texture(u_MetallicRoughnessSampler,getMetallicRoughnessUV());info.perceptualRoughness*=mrSample.g;info.metallic*=mrSample.b;\n#endif\nreturn info;}\n#endif\n#ifdef MATERIAL_SHEEN\nMaterialInfo getSheenInfo(MaterialInfo info){info.sheenColorFactor=u_SheenColorFactor;info.sheenRoughnessFactor=u_SheenRoughnessFactor;\n#ifdef HAS_SHEEN_COLOR_MAP\nvec4 sheenColorSample=texture(u_SheenColorSampler,getSheenColorUV());info.sheenColorFactor*=sheenColorSample.rgb;\n#endif\n#ifdef HAS_SHEEN_ROUGHNESS_MAP\nvec4 sheenRoughnessSample=texture(u_SheenRoughnessSampler,getSheenRoughnessUV());info.sheenRoughnessFactor*=sheenRoughnessSample.a;\n#endif\nreturn info;}\n#endif\n#ifdef MATERIAL_SPECULAR\nMaterialInfo getSpecularInfo(MaterialInfo info){vec4 specularTexture=vec4(1.0);\n#ifdef HAS_SPECULAR_MAP\nspecularTexture.a=texture(u_SpecularSampler,getSpecularUV()).a;\n#endif\n#ifdef HAS_SPECULAR_COLOR_MAP\nspecularTexture.rgb=texture(u_SpecularColorSampler,getSpecularColorUV()).rgb;\n#endif\ninfo.f0_dielectric=min(info.f0_dielectric*u_KHR_materials_specular_specularColorFactor*specularTexture.rgb,vec3(1.0));info.specularWeight=u_KHR_materials_specular_specularFactor*specularTexture.a;info.f90_dielectric=vec3(info.specularWeight);return info;}\n#endif\n#ifdef MATERIAL_TRANSMISSION\nMaterialInfo getTransmissionInfo(MaterialInfo info){info.transmissionFactor=u_TransmissionFactor;\n#ifdef HAS_TRANSMISSION_MAP\nvec4 transmissionSample=texture(u_TransmissionSampler,getTransmissionUV());info.transmissionFactor*=transmissionSample.r;\n#endif\n#ifdef MATERIAL_DISPERSION\ninfo.dispersion=u_Dispersion;\n#else\ninfo.dispersion=0.0;\n#endif\nreturn info;}\n#endif\n#ifdef MATERIAL_VOLUME\nMaterialInfo getVolumeInfo(MaterialInfo info){info.thickness=u_ThicknessFactor;info.attenuationColor=u_AttenuationColor;info.attenuationDistance=u_AttenuationDistance;\n#ifdef HAS_THICKNESS_MAP\nvec4 thicknessSample=texture(u_ThicknessSampler,getThicknessUV());info.thickness*=thicknessSample.g;\n#endif\nreturn info;}\n#endif\n#ifdef MATERIAL_IRIDESCENCE\nMaterialInfo getIridescenceInfo(MaterialInfo info){info.iridescenceFactor=u_IridescenceFactor;info.iridescenceIor=u_IridescenceIor;info.iridescenceThickness=u_IridescenceThicknessMaximum;\n#ifdef HAS_IRIDESCENCE_MAP\ninfo.iridescenceFactor*=texture(u_IridescenceSampler,getIridescenceUV()).r;\n#endif\n#ifdef HAS_IRIDESCENCE_THICKNESS_MAP\nfloat thicknessSampled=texture(u_IridescenceThicknessSampler,getIridescenceThicknessUV()).g;float thickness=mix(u_IridescenceThicknessMinimum,u_IridescenceThicknessMaximum,thicknessSampled);info.iridescenceThickness=thickness;\n#endif\nreturn info;}\n#endif\n#ifdef MATERIAL_DIFFUSE_TRANSMISSION\nMaterialInfo getDiffuseTransmissionInfo(MaterialInfo info){info.diffuseTransmissionFactor=u_DiffuseTransmissionFactor;info.diffuseTransmissionColorFactor=u_DiffuseTransmissionColorFactor;\n#ifdef HAS_DIFFUSE_TRANSMISSION_MAP\ninfo.diffuseTransmissionFactor*=texture(u_DiffuseTransmissionSampler,getDiffuseTransmissionUV()).a;\n#endif\n#ifdef HAS_DIFFUSE_TRANSMISSION_COLOR_MAP\ninfo.diffuseTransmissionColorFactor*=texture(u_DiffuseTransmissionColorSampler,getDiffuseTransmissionColorUV()).rgb;\n#endif\nreturn info;}\n#endif\n#ifdef MATERIAL_CLEARCOAT\nMaterialInfo getClearCoatInfo(MaterialInfo info,NormalInfo normalInfo){info.clearcoatFactor=u_ClearcoatFactor;info.clearcoatRoughness=u_ClearcoatRoughnessFactor;info.clearcoatF0=vec3(pow((info.ior-1.0)/(info.ior+1.0),2.0));info.clearcoatF90=vec3(1.0);\n#ifdef HAS_CLEARCOAT_MAP\nvec4 clearcoatSample=texture(u_ClearcoatSampler,getClearcoatUV());info.clearcoatFactor*=clearcoatSample.r;\n#endif\n#ifdef HAS_CLEARCOAT_ROUGHNESS_MAP\nvec4 clearcoatSampleRoughness=texture(u_ClearcoatRoughnessSampler,getClearcoatRoughnessUV());info.clearcoatRoughness*=clearcoatSampleRoughness.g;\n#endif\ninfo.clearcoatNormal=getClearcoatNormal(normalInfo);info.clearcoatRoughness=clamp(info.clearcoatRoughness,0.0,1.0);return info;}\n#endif\n#ifdef MATERIAL_IOR\nMaterialInfo getIorInfo(MaterialInfo info){info.f0_dielectric=vec3(pow((u_Ior-1.0)/(u_Ior+1.0),2.0));info.ior=u_Ior;return info;}\n#endif\n#ifdef MATERIAL_ANISOTROPY\nMaterialInfo getAnisotropyInfo(MaterialInfo info,NormalInfo normalInfo){vec2 direction=vec2(1.0,0.0);float strengthFactor=1.0;\n#ifdef HAS_ANISOTROPY_MAP\nvec3 anisotropySample=texture(u_AnisotropySampler,getAnisotropyUV()).xyz;direction=anisotropySample.xy*2.0-vec2(1.0);strengthFactor=anisotropySample.z;\n#endif\nvec2 directionRotation=u_Anisotropy.xy;mat2 rotationMatrix=mat2(directionRotation.x,directionRotation.y,-directionRotation.y,directionRotation.x);direction=rotationMatrix*direction.xy;info.anisotropicT=mat3(normalInfo.t,normalInfo.b,normalInfo.n)*normalize(vec3(direction,0.0));info.anisotropicB=cross(normalInfo.ng,info.anisotropicT);info.anisotropyStrength=clamp(u_Anisotropy.z*strengthFactor,0.0,1.0);return info;}\n#endif\nfloat albedoSheenScalingLUT(float NdotV,float sheenRoughnessFactor){return texture(u_SheenELUT,vec2(NdotV,sheenRoughnessFactor)).r;}"; // eslint-disable-line

var iblShader = "#define GLSLIFY 1\nuniform float u_EnvIntensity;vec3 getDiffuseLight(vec3 n){vec4 textureSample=texture(u_LambertianEnvSampler,u_EnvRotation*n);textureSample.rgb*=u_EnvIntensity;return textureSample.rgb;}vec4 getSpecularSample(vec3 reflection,float lod){vec4 textureSample=textureLod(u_GGXEnvSampler,u_EnvRotation*reflection,lod);textureSample.rgb*=u_EnvIntensity;return textureSample;}vec4 getSheenSample(vec3 reflection,float lod){vec4 textureSample=textureLod(u_CharlieEnvSampler,u_EnvRotation*reflection,lod);textureSample.rgb*=u_EnvIntensity;return textureSample;}vec3 getIBLGGXFresnel(vec3 n,vec3 v,float roughness,vec3 F0,float specularWeight){float NdotV=clampedDot(n,v);vec2 brdfSamplePoint=clamp(vec2(NdotV,roughness),vec2(0.0,0.0),vec2(1.0,1.0));vec2 f_ab=texture(u_GGXLUT,brdfSamplePoint).rg;vec3 Fr=max(vec3(1.0-roughness),F0)-F0;vec3 k_S=F0+Fr*pow(1.0-NdotV,5.0);vec3 FssEss=specularWeight*(k_S*f_ab.x+f_ab.y);float Ems=(1.0-(f_ab.x+f_ab.y));vec3 F_avg=specularWeight*(F0+(1.0-F0)/21.0);vec3 FmsEms=Ems*FssEss*F_avg/(1.0-F_avg*Ems);return FssEss+FmsEms;}vec3 getIBLRadianceGGX(vec3 n,vec3 v,float roughness){float NdotV=clampedDot(n,v);float lod=roughness*float(u_MipCount-1);vec3 reflection=normalize(reflect(-v,n));vec4 specularSample=getSpecularSample(reflection,lod);vec3 specularLight=specularSample.rgb;return specularLight;}\n#ifdef MATERIAL_TRANSMISSION\nvec3 getTransmissionSample(vec2 fragCoord,float roughness,float ior){float framebufferLod=log2(float(u_TransmissionFramebufferSize.x))*applyIorToRoughness(roughness,ior);vec3 transmittedLight=textureLod(u_TransmissionFramebufferSampler,fragCoord.xy,framebufferLod).rgb;return transmittedLight;}\n#endif\n#ifdef MATERIAL_TRANSMISSION\nvec3 getIBLVolumeRefraction(vec3 n,vec3 v,float perceptualRoughness,vec3 baseColor,vec3 f0,vec3 f90,vec3 position,mat4 modelMatrix,mat4 viewMatrix,mat4 projMatrix,float ior,float thickness,vec3 attenuationColor,float attenuationDistance,float dispersion){\n#ifdef MATERIAL_DISPERSION\nfloat halfSpread=(ior-1.0)*0.025*dispersion;vec3 iors=vec3(ior-halfSpread,ior,ior+halfSpread);vec3 transmittedLight;float transmissionRayLength;for(int i=0;i<3;i++){vec3 transmissionRay=getVolumeTransmissionRay(n,v,thickness,iors[i],modelMatrix);transmissionRayLength=length(transmissionRay);vec3 refractedRayExit=position+transmissionRay;vec4 ndcPos=projMatrix*viewMatrix*vec4(refractedRayExit,1.0);vec2 refractionCoords=ndcPos.xy/ndcPos.w;refractionCoords+=1.0;refractionCoords/=2.0;transmittedLight[i]=getTransmissionSample(refractionCoords,perceptualRoughness,iors[i])[i];}\n#else\nvec3 transmissionRay=getVolumeTransmissionRay(n,v,thickness,ior,modelMatrix);float transmissionRayLength=length(transmissionRay);vec3 refractedRayExit=position+transmissionRay;vec4 ndcPos=projMatrix*viewMatrix*vec4(refractedRayExit,1.0);vec2 refractionCoords=ndcPos.xy/ndcPos.w;refractionCoords+=1.0;refractionCoords/=2.0;vec3 transmittedLight=getTransmissionSample(refractionCoords,perceptualRoughness,ior);\n#endif\nvec3 attenuatedColor=applyVolumeAttenuation(transmittedLight,transmissionRayLength,attenuationColor,attenuationDistance);float NdotV=clampedDot(n,v);vec2 brdfSamplePoint=clamp(vec2(NdotV,perceptualRoughness),vec2(0.0,0.0),vec2(1.0,1.0));vec2 brdf=texture(u_GGXLUT,brdfSamplePoint).rg;vec3 specularColor=f0*brdf.x+f90*brdf.y;return(1.0-specularColor)*attenuatedColor*baseColor;}\n#endif\n#ifdef MATERIAL_ANISOTROPY\nvec3 getIBLRadianceAnisotropy(vec3 n,vec3 v,float roughness,float anisotropy,vec3 anisotropyDirection){float NdotV=clampedDot(n,v);float tangentRoughness=mix(roughness,1.0,anisotropy*anisotropy);vec3 anisotropicTangent=cross(anisotropyDirection,v);vec3 anisotropicNormal=cross(anisotropicTangent,anisotropyDirection);float bendFactor=1.0-anisotropy*(1.0-roughness);float bendFactorPow4=bendFactor*bendFactor*bendFactor*bendFactor;vec3 bentNormal=normalize(mix(anisotropicNormal,n,bendFactorPow4));float lod=roughness*float(u_MipCount-1);vec3 reflection=normalize(reflect(-v,bentNormal));vec4 specularSample=getSpecularSample(reflection,lod);vec3 specularLight=specularSample.rgb;return specularLight;}\n#endif\nvec3 getIBLRadianceCharlie(vec3 n,vec3 v,float sheenRoughness,vec3 sheenColor){float NdotV=clampedDot(n,v);float lod=sheenRoughness*float(u_MipCount-1);vec3 reflection=normalize(reflect(-v,n));vec2 brdfSamplePoint=clamp(vec2(NdotV,sheenRoughness),vec2(0.0,0.0),vec2(1.0,1.0));float brdf=texture(u_CharlieLUT,brdfSamplePoint).b;vec4 sheenSample=getSheenSample(reflection,lod);vec3 sheenLight=sheenSample.rgb;return sheenLight*sheenColor*brdf;}"; // eslint-disable-line

var punctualShader = "#define GLSLIFY 1\nstruct Light{vec3 direction;float range;vec3 color;float intensity;vec3 position;float innerConeCos;float outerConeCos;int type;};const int LightType_Directional=0;const int LightType_Point=1;const int LightType_Spot=2;\n#ifdef USE_PUNCTUAL\nuniform Light u_Lights[LIGHT_COUNT+1];\n#endif\nfloat getRangeAttenuation(float range,float distance){if(range<=0.0){return 1.0/pow(distance,2.0);}return max(min(1.0-pow(distance/range,4.0),1.0),0.0)/pow(distance,2.0);}float getSpotAttenuation(vec3 pointToLight,vec3 spotDirection,float outerConeCos,float innerConeCos){float actualCos=dot(normalize(spotDirection),normalize(-pointToLight));if(actualCos>outerConeCos){if(actualCos<innerConeCos){float angularAttenuation=(actualCos-outerConeCos)/(innerConeCos-outerConeCos);return angularAttenuation*angularAttenuation;}return 1.0;}return 0.0;}vec3 getLighIntensity(Light light,vec3 pointToLight){float rangeAttenuation=1.0;float spotAttenuation=1.0;if(light.type!=LightType_Directional){rangeAttenuation=getRangeAttenuation(light.range,length(pointToLight));}if(light.type==LightType_Spot){spotAttenuation=getSpotAttenuation(pointToLight,light.direction,light.outerConeCos,light.innerConeCos);}return rangeAttenuation*spotAttenuation*light.intensity*light.color;}vec3 getPunctualRadianceTransmission(vec3 normal,vec3 view,vec3 pointToLight,float alphaRoughness,vec3 f0,vec3 f90,vec3 baseColor,float ior){float transmissionRougness=applyIorToRoughness(alphaRoughness,ior);vec3 n=normalize(normal);vec3 v=normalize(view);vec3 l=normalize(pointToLight);vec3 l_mirror=normalize(l+2.0*n*dot(-l,n));vec3 h=normalize(l_mirror+v);float D=D_GGX(clamp(dot(n,h),0.0,1.0),transmissionRougness);vec3 F=F_Schlick(f0,f90,clamp(dot(v,h),0.0,1.0));float Vis=V_GGX(clamp(dot(n,l_mirror),0.0,1.0),clamp(dot(n,v),0.0,1.0),transmissionRougness);return(1.0-F)*baseColor*D*Vis;}vec3 getPunctualRadianceClearCoat(vec3 clearcoatNormal,vec3 v,vec3 l,vec3 h,float VdotH,vec3 f0,vec3 f90,float clearcoatRoughness){float NdotL=clampedDot(clearcoatNormal,l);float NdotV=clampedDot(clearcoatNormal,v);float NdotH=clampedDot(clearcoatNormal,h);return NdotL*BRDF_specularGGX(clearcoatRoughness*clearcoatRoughness,NdotL,NdotV,NdotH);}vec3 getPunctualRadianceSheen(vec3 sheenColor,float sheenRoughness,float NdotL,float NdotV,float NdotH){return NdotL*BRDF_specularSheen(sheenColor,sheenRoughness,NdotL,NdotV,NdotH);}vec3 applyVolumeAttenuation(vec3 radiance,float transmissionDistance,vec3 attenuationColor,float attenuationDistance){if(attenuationDistance==0.0){return radiance;}else{vec3 transmittance=pow(attenuationColor,vec3(transmissionDistance/attenuationDistance));return transmittance*radiance;}}vec3 getVolumeTransmissionRay(vec3 n,vec3 v,float thickness,float ior,mat4 modelMatrix){vec3 refractionVector=refract(-v,normalize(n),1.0/ior);vec3 modelScale;modelScale.x=length(vec3(modelMatrix[0].xyz));modelScale.y=length(vec3(modelMatrix[1].xyz));modelScale.z=length(vec3(modelMatrix[2].xyz));return normalize(refractionVector)*thickness*modelScale;}"; // eslint-disable-line

var primitiveShader = "#define GLSLIFY 1\n#include <animation.glsl>\nuniform mat4 u_ViewProjectionMatrix;uniform mat4 u_ModelMatrix;uniform mat4 u_NormalMatrix;in vec3 a_position;out vec3 v_Position;\n#ifdef HAS_NORMAL_VEC3\nin vec3 a_normal;\n#endif\n#ifdef HAS_NORMAL_VEC3\n#ifdef HAS_TANGENT_VEC4\nin vec4 a_tangent;out mat3 v_TBN;\n#else\nout vec3 v_Normal;\n#endif\n#endif\n#ifdef HAS_TEXCOORD_0_VEC2\nin vec2 a_texcoord_0;\n#endif\n#ifdef HAS_TEXCOORD_1_VEC2\nin vec2 a_texcoord_1;\n#endif\nout vec2 v_texcoord_0;out vec2 v_texcoord_1;\n#ifdef HAS_COLOR_0_VEC3\nin vec3 a_color_0;out vec3 v_Color;\n#endif\n#ifdef HAS_COLOR_0_VEC4\nin vec4 a_color_0;out vec4 v_Color;\n#endif\nvec4 getPosition(){vec4 pos=vec4(a_position,1.0);\n#ifdef USE_MORPHING\npos+=getTargetPosition(gl_VertexID);\n#endif\n#ifdef USE_SKINNING\npos=getSkinningMatrix()*pos;\n#endif\nreturn pos;}\n#ifdef HAS_NORMAL_VEC3\nvec3 getNormal(){vec3 normal=a_normal;\n#ifdef USE_MORPHING\nnormal+=getTargetNormal(gl_VertexID);\n#endif\n#ifdef USE_SKINNING\nnormal=mat3(getSkinningNormalMatrix())*normal;\n#endif\nreturn normalize(normal);}\n#endif\n#ifdef HAS_NORMAL_VEC3\n#ifdef HAS_TANGENT_VEC4\nvec3 getTangent(){vec3 tangent=a_tangent.xyz;\n#ifdef USE_MORPHING\ntangent+=getTargetTangent(gl_VertexID);\n#endif\n#ifdef USE_SKINNING\ntangent=mat3(getSkinningMatrix())*tangent;\n#endif\nreturn normalize(tangent);}\n#endif\n#endif\nvoid main(){gl_PointSize=1.0f;vec4 pos=u_ModelMatrix*getPosition();v_Position=vec3(pos.xyz)/pos.w;\n#ifdef HAS_NORMAL_VEC3\n#ifdef HAS_TANGENT_VEC4\nvec3 tangent=getTangent();vec3 normalW=normalize(vec3(u_NormalMatrix*vec4(getNormal(),0.0)));vec3 tangentW=normalize(vec3(u_ModelMatrix*vec4(tangent,0.0)));vec3 bitangentW=cross(normalW,tangentW)*a_tangent.w;v_TBN=mat3(tangentW,bitangentW,normalW);\n#else\nv_Normal=normalize(vec3(u_NormalMatrix*vec4(getNormal(),0.0)));\n#endif\n#endif\nv_texcoord_0=vec2(0.0,0.0);v_texcoord_1=vec2(0.0,0.0);\n#ifdef HAS_TEXCOORD_0_VEC2\nv_texcoord_0=a_texcoord_0;\n#endif\n#ifdef HAS_TEXCOORD_1_VEC2\nv_texcoord_1=a_texcoord_1;\n#endif\n#ifdef USE_MORPHING\nv_texcoord_0+=getTargetTexCoord0(gl_VertexID);v_texcoord_1+=getTargetTexCoord1(gl_VertexID);\n#endif\n#if defined(HAS_COLOR_0_VEC3)\nv_Color=a_color_0;\n#if defined(USE_MORPHING)\nv_Color=clamp(v_Color+getTargetColor0(gl_VertexID).xyz,0.0f,1.0f);\n#endif\n#endif\n#if defined(HAS_COLOR_0_VEC4)\nv_Color=a_color_0;\n#if defined(USE_MORPHING)\nv_Color=clamp(v_Color+getTargetColor0(gl_VertexID),0.0f,1.0f);\n#endif\n#endif\ngl_Position=u_ViewProjectionMatrix*pos;}"; // eslint-disable-line

var texturesShader = "#define GLSLIFY 1\nuniform int u_MipCount;uniform samplerCube u_LambertianEnvSampler;uniform samplerCube u_GGXEnvSampler;uniform sampler2D u_GGXLUT;uniform samplerCube u_CharlieEnvSampler;uniform sampler2D u_CharlieLUT;uniform sampler2D u_SheenELUT;uniform mat3 u_EnvRotation;uniform sampler2D u_NormalSampler;uniform float u_NormalScale;uniform int u_NormalUVSet;uniform mat3 u_NormalUVTransform;uniform vec3 u_EmissiveFactor;uniform sampler2D u_EmissiveSampler;uniform int u_EmissiveUVSet;uniform mat3 u_EmissiveUVTransform;uniform sampler2D u_OcclusionSampler;uniform int u_OcclusionUVSet;uniform float u_OcclusionStrength;uniform mat3 u_OcclusionUVTransform;in vec2 v_texcoord_0;in vec2 v_texcoord_1;vec2 getNormalUV(){vec3 uv=vec3(u_NormalUVSet<1 ? v_texcoord_0 : v_texcoord_1,1.0);\n#ifdef HAS_NORMAL_UV_TRANSFORM\nuv=u_NormalUVTransform*uv;\n#endif\nreturn uv.xy;}vec2 getEmissiveUV(){vec3 uv=vec3(u_EmissiveUVSet<1 ? v_texcoord_0 : v_texcoord_1,1.0);\n#ifdef HAS_EMISSIVE_UV_TRANSFORM\nuv=u_EmissiveUVTransform*uv;\n#endif\nreturn uv.xy;}vec2 getOcclusionUV(){vec3 uv=vec3(u_OcclusionUVSet<1 ? v_texcoord_0 : v_texcoord_1,1.0);\n#ifdef HAS_OCCLUSION_UV_TRANSFORM\nuv=u_OcclusionUVTransform*uv;\n#endif\nreturn uv.xy;}\n#ifdef MATERIAL_METALLICROUGHNESS\nuniform sampler2D u_BaseColorSampler;uniform int u_BaseColorUVSet;uniform mat3 u_BaseColorUVTransform;uniform sampler2D u_MetallicRoughnessSampler;uniform int u_MetallicRoughnessUVSet;uniform mat3 u_MetallicRoughnessUVTransform;vec2 getBaseColorUV(){vec3 uv=vec3(u_BaseColorUVSet<1 ? v_texcoord_0 : v_texcoord_1,1.0);\n#ifdef HAS_BASECOLOR_UV_TRANSFORM\nuv=u_BaseColorUVTransform*uv;\n#endif\nreturn uv.xy;}vec2 getMetallicRoughnessUV(){vec3 uv=vec3(u_MetallicRoughnessUVSet<1 ? v_texcoord_0 : v_texcoord_1,1.0);\n#ifdef HAS_METALLICROUGHNESS_UV_TRANSFORM\nuv=u_MetallicRoughnessUVTransform*uv;\n#endif\nreturn uv.xy;}\n#endif\n#ifdef MATERIAL_SPECULARGLOSSINESS\nuniform sampler2D u_DiffuseSampler;uniform int u_DiffuseUVSet;uniform mat3 u_DiffuseUVTransform;uniform sampler2D u_SpecularGlossinessSampler;uniform int u_SpecularGlossinessUVSet;uniform mat3 u_SpecularGlossinessUVTransform;vec2 getSpecularGlossinessUV(){vec3 uv=vec3(u_SpecularGlossinessUVSet<1 ? v_texcoord_0 : v_texcoord_1,1.0);\n#ifdef HAS_SPECULARGLOSSINESS_UV_TRANSFORM\nuv=u_SpecularGlossinessUVTransform*uv;\n#endif\nreturn uv.xy;}vec2 getDiffuseUV(){vec3 uv=vec3(u_DiffuseUVSet<1 ? v_texcoord_0 : v_texcoord_1,1.0);\n#ifdef HAS_DIFFUSE_UV_TRANSFORM\nuv=u_DiffuseUVTransform*uv;\n#endif\nreturn uv.xy;}\n#endif\n#ifdef MATERIAL_CLEARCOAT\nuniform sampler2D u_ClearcoatSampler;uniform int u_ClearcoatUVSet;uniform mat3 u_ClearcoatUVTransform;uniform sampler2D u_ClearcoatRoughnessSampler;uniform int u_ClearcoatRoughnessUVSet;uniform mat3 u_ClearcoatRoughnessUVTransform;uniform sampler2D u_ClearcoatNormalSampler;uniform int u_ClearcoatNormalUVSet;uniform mat3 u_ClearcoatNormalUVTransform;uniform float u_ClearcoatNormalScale;vec2 getClearcoatUV(){vec3 uv=vec3(u_ClearcoatUVSet<1 ? v_texcoord_0 : v_texcoord_1,1.0);\n#ifdef HAS_CLEARCOAT_UV_TRANSFORM\nuv=u_ClearcoatUVTransform*uv;\n#endif\nreturn uv.xy;}vec2 getClearcoatRoughnessUV(){vec3 uv=vec3(u_ClearcoatRoughnessUVSet<1 ? v_texcoord_0 : v_texcoord_1,1.0);\n#ifdef HAS_CLEARCOATROUGHNESS_UV_TRANSFORM\nuv=u_ClearcoatRoughnessUVTransform*uv;\n#endif\nreturn uv.xy;}vec2 getClearcoatNormalUV(){vec3 uv=vec3(u_ClearcoatNormalUVSet<1 ? v_texcoord_0 : v_texcoord_1,1.0);\n#ifdef HAS_CLEARCOATNORMAL_UV_TRANSFORM\nuv=u_ClearcoatNormalUVTransform*uv;\n#endif\nreturn uv.xy;}\n#endif\n#ifdef MATERIAL_SHEEN\nuniform sampler2D u_SheenColorSampler;uniform int u_SheenColorUVSet;uniform mat3 u_SheenColorUVTransform;uniform sampler2D u_SheenRoughnessSampler;uniform int u_SheenRoughnessUVSet;uniform mat3 u_SheenRoughnessUVTransform;vec2 getSheenColorUV(){vec3 uv=vec3(u_SheenColorUVSet<1 ? v_texcoord_0 : v_texcoord_1,1.0);\n#ifdef HAS_SHEENCOLOR_UV_TRANSFORM\nuv=u_SheenColorUVTransform*uv;\n#endif\nreturn uv.xy;}vec2 getSheenRoughnessUV(){vec3 uv=vec3(u_SheenRoughnessUVSet<1 ? v_texcoord_0 : v_texcoord_1,1.0);\n#ifdef HAS_SHEENROUGHNESS_UV_TRANSFORM\nuv=u_SheenRoughnessUVTransform*uv;\n#endif\nreturn uv.xy;}\n#endif\n#ifdef MATERIAL_SPECULAR\nuniform sampler2D u_SpecularSampler;uniform int u_SpecularUVSet;uniform mat3 u_SpecularUVTransform;uniform sampler2D u_SpecularColorSampler;uniform int u_SpecularColorUVSet;uniform mat3 u_SpecularColorUVTransform;vec2 getSpecularUV(){vec3 uv=vec3(u_SpecularUVSet<1 ? v_texcoord_0 : v_texcoord_1,1.0);\n#ifdef HAS_SPECULAR_UV_TRANSFORM\nuv=u_SpecularUVTransform*uv;\n#endif\nreturn uv.xy;}vec2 getSpecularColorUV(){vec3 uv=vec3(u_SpecularColorUVSet<1 ? v_texcoord_0 : v_texcoord_1,1.0);\n#ifdef HAS_SPECULARCOLOR_UV_TRANSFORM\nuv=u_SpecularColorUVTransform*uv;\n#endif\nreturn uv.xy;}\n#endif\n#ifdef MATERIAL_TRANSMISSION\nuniform sampler2D u_TransmissionSampler;uniform int u_TransmissionUVSet;uniform mat3 u_TransmissionUVTransform;uniform sampler2D u_TransmissionFramebufferSampler;uniform ivec2 u_TransmissionFramebufferSize;vec2 getTransmissionUV(){vec3 uv=vec3(u_TransmissionUVSet<1 ? v_texcoord_0 : v_texcoord_1,1.0);\n#ifdef HAS_TRANSMISSION_UV_TRANSFORM\nuv=u_TransmissionUVTransform*uv;\n#endif\nreturn uv.xy;}\n#endif\n#ifdef MATERIAL_VOLUME\nuniform sampler2D u_ThicknessSampler;uniform int u_ThicknessUVSet;uniform mat3 u_ThicknessUVTransform;vec2 getThicknessUV(){vec3 uv=vec3(u_ThicknessUVSet<1 ? v_texcoord_0 : v_texcoord_1,1.0);\n#ifdef HAS_THICKNESS_UV_TRANSFORM\nuv=u_ThicknessUVTransform*uv;\n#endif\nreturn uv.xy;}\n#endif\n#ifdef MATERIAL_IRIDESCENCE\nuniform sampler2D u_IridescenceSampler;uniform int u_IridescenceUVSet;uniform mat3 u_IridescenceUVTransform;uniform sampler2D u_IridescenceThicknessSampler;uniform int u_IridescenceThicknessUVSet;uniform mat3 u_IridescenceThicknessUVTransform;vec2 getIridescenceUV(){vec3 uv=vec3(u_IridescenceUVSet<1 ? v_texcoord_0 : v_texcoord_1,1.0);\n#ifdef HAS_IRIDESCENCE_UV_TRANSFORM\nuv=u_IridescenceUVTransform*uv;\n#endif\nreturn uv.xy;}vec2 getIridescenceThicknessUV(){vec3 uv=vec3(u_IridescenceThicknessUVSet<1 ? v_texcoord_0 : v_texcoord_1,1.0);\n#ifdef HAS_IRIDESCENCETHICKNESS_UV_TRANSFORM\nuv=u_IridescenceThicknessUVTransform*uv;\n#endif\nreturn uv.xy;}\n#endif\n#ifdef MATERIAL_DIFFUSE_TRANSMISSION\nuniform sampler2D u_DiffuseTransmissionSampler;uniform int u_DiffuseTransmissionUVSet;uniform mat3 u_DiffuseTransmissionUVTransform;uniform sampler2D u_DiffuseTransmissionColorSampler;uniform int u_DiffuseTransmissionColorUVSet;uniform mat3 u_DiffuseTransmissionColorUVTransform;vec2 getDiffuseTransmissionUV(){vec3 uv=vec3(u_DiffuseTransmissionUVSet<1 ? v_texcoord_0 : v_texcoord_1,1.0);\n#ifdef HAS_DIFFUSETRANSMISSION_UV_TRANSFORM\nuv=u_DiffuseTransmissionUVTransform*uv;\n#endif\nreturn uv.xy;}vec2 getDiffuseTransmissionColorUV(){vec3 uv=vec3(u_DiffuseTransmissionColorUVSet<1 ? v_texcoord_0 : v_texcoord_1,1.0);\n#ifdef HAS_DIFFUSETRANSMISSIONCOLOR_UV_TRANSFORM\nuv=u_DiffuseTransmissionColorUVTransform*uv;\n#endif\nreturn uv.xy;}\n#endif\n#ifdef MATERIAL_ANISOTROPY\nuniform sampler2D u_AnisotropySampler;uniform int u_AnisotropyUVSet;uniform mat3 u_AnisotropyUVTransform;vec2 getAnisotropyUV(){vec3 uv=vec3(u_AnisotropyUVSet<1 ? v_texcoord_0 : v_texcoord_1,1.0);\n#ifdef HAS_ANISOTROPY_UV_TRANSFORM\nuv=u_AnisotropyUVTransform*uv;\n#endif\nreturn uv.xy;}\n#endif\n"; // eslint-disable-line

var tonemappingShader = "#define GLSLIFY 1\nuniform float u_Exposure;const float GAMMA=2.2;const float INV_GAMMA=1.0/GAMMA;const mat3 ACESInputMat=mat3(0.59719,0.07600,0.02840,0.35458,0.90834,0.13383,0.04823,0.01566,0.83777);const mat3 ACESOutputMat=mat3(1.60475,-0.10208,-0.00327,-0.53108,1.10813,-0.07276,-0.07367,-0.00605,1.07602);vec3 linearTosRGB(vec3 color){return pow(color,vec3(INV_GAMMA));}vec3 sRGBToLinear(vec3 srgbIn){return vec3(pow(srgbIn.xyz,vec3(GAMMA)));}vec4 sRGBToLinear(vec4 srgbIn){return vec4(sRGBToLinear(srgbIn.xyz),srgbIn.w);}vec3 toneMapACES_Narkowicz(vec3 color){const float A=2.51;const float B=0.03;const float C=2.43;const float D=0.59;const float E=0.14;return clamp((color*(A*color+B))/(color*(C*color+D)+E),0.0,1.0);}vec3 RRTAndODTFit(vec3 color){vec3 a=color*(color+0.0245786)-0.000090537;vec3 b=color*(0.983729*color+0.4329510)+0.238081;return a/b;}vec3 toneMapACES_Hill(vec3 color){color=ACESInputMat*color;color=RRTAndODTFit(color);color=ACESOutputMat*color;color=clamp(color,0.0,1.0);return color;}\n#ifdef TONEMAP_KHR_PBR_NEUTRAL\nvec3 toneMap_KhronosPbrNeutral(vec3 color){const float startCompression=0.8-0.04;const float desaturation=0.15;float x=min(color.r,min(color.g,color.b));float offset=x<0.08 ? x-6.25*x*x : 0.04;color-=offset;float peak=max(color.r,max(color.g,color.b));if(peak<startCompression)return color;const float d=1.-startCompression;float newPeak=1.-d*d/(peak+d-startCompression);color*=newPeak/peak;float g=1.-1./(desaturation*(peak-newPeak)+1.);return mix(color,newPeak*vec3(1,1,1),g);}\n#endif\nvec3 toneMap(vec3 color){color*=u_Exposure;\n#ifdef TONEMAP_ACES_NARKOWICZ\ncolor=toneMapACES_Narkowicz(color);\n#endif\n#ifdef TONEMAP_ACES_HILL\ncolor=toneMapACES_Hill(color);\n#endif\n#ifdef TONEMAP_ACES_HILL_EXPOSURE_BOOST\ncolor/=0.6;color=toneMapACES_Hill(color);\n#endif\n#ifdef TONEMAP_KHR_PBR_NEUTRAL\ncolor=toneMap_KhronosPbrNeutral(color);\n#endif\nreturn linearTosRGB(color);}"; // eslint-disable-line

var shaderFunctions = "#define GLSLIFY 1\nconst float M_PI=3.141592653589793;in vec3 v_Position;\n#ifdef HAS_NORMAL_VEC3\n#ifdef HAS_TANGENT_VEC4\nin mat3 v_TBN;\n#else\nin vec3 v_Normal;\n#endif\n#endif\n#ifdef HAS_COLOR_0_VEC3\nin vec3 v_Color;\n#endif\n#ifdef HAS_COLOR_0_VEC4\nin vec4 v_Color;\n#endif\nvec4 getVertexColor(){vec4 color=vec4(1.0);\n#ifdef HAS_COLOR_0_VEC3\ncolor.rgb=v_Color.rgb;\n#endif\n#ifdef HAS_COLOR_0_VEC4\ncolor=v_Color;\n#endif\nreturn color;}struct NormalInfo{vec3 ng;vec3 t;vec3 b;vec3 n;vec3 ntex;};float clampedDot(vec3 x,vec3 y){return clamp(dot(x,y),0.0,1.0);}float max3(vec3 v){return max(max(v.x,v.y),v.z);}float sq(float t){return t*t;}vec2 sq(vec2 t){return t*t;}vec3 sq(vec3 t){return t*t;}vec4 sq(vec4 t){return t*t;}float applyIorToRoughness(float roughness,float ior){return roughness*clamp(ior*2.0-2.0,0.0,1.0);}vec3 rgb_mix(vec3 base,vec3 layer,vec3 rgb_alpha){float rgb_alpha_max=max(rgb_alpha.r,max(rgb_alpha.g,rgb_alpha.b));return(1.0-rgb_alpha_max)*base+rgb_alpha*layer;}"; // eslint-disable-line

var animationShader = "#define GLSLIFY 1\n#ifdef HAS_MORPH_TARGETS\nuniform highp sampler2DArray u_MorphTargetsSampler;\n#endif\n#ifdef USE_MORPHING\nuniform float u_morphWeights[WEIGHT_COUNT];\n#endif\n#ifdef HAS_JOINTS_0_VEC4\nin vec4 a_joints_0;\n#endif\n#ifdef HAS_JOINTS_1_VEC4\nin vec4 a_joints_1;\n#endif\n#ifdef HAS_WEIGHTS_0_VEC4\nin vec4 a_weights_0;\n#endif\n#ifdef HAS_WEIGHTS_1_VEC4\nin vec4 a_weights_1;\n#endif\n#ifdef USE_SKINNING\nuniform sampler2D u_jointsSampler;\n#endif\n#ifdef USE_SKINNING\nmat4 getMatrixFromTexture(sampler2D s,int index){mat4 result=mat4(1);int texSize=textureSize(s,0)[0];int pixelIndex=index*4;for(int i=0;i<4;++i){int x=(pixelIndex+i)% texSize;int y=(pixelIndex+i-x)/texSize;result[i]=texelFetch(s,ivec2(x,y),0);}return result;}mat4 getSkinningMatrix(){mat4 skin=mat4(0);\n#if defined(HAS_WEIGHTS_0_VEC4) && defined(HAS_JOINTS_0_VEC4)\nskin+=a_weights_0.x*getMatrixFromTexture(u_jointsSampler,int(a_joints_0.x)*2)+a_weights_0.y*getMatrixFromTexture(u_jointsSampler,int(a_joints_0.y)*2)+a_weights_0.z*getMatrixFromTexture(u_jointsSampler,int(a_joints_0.z)*2)+a_weights_0.w*getMatrixFromTexture(u_jointsSampler,int(a_joints_0.w)*2);\n#endif\n#if defined(HAS_WEIGHTS_1_VEC4) && defined(HAS_JOINTS_1_VEC4)\nskin+=a_weights_1.x*getMatrixFromTexture(u_jointsSampler,int(a_joints_1.x)*2)+a_weights_1.y*getMatrixFromTexture(u_jointsSampler,int(a_joints_1.y)*2)+a_weights_1.z*getMatrixFromTexture(u_jointsSampler,int(a_joints_1.z)*2)+a_weights_1.w*getMatrixFromTexture(u_jointsSampler,int(a_joints_1.w)*2);\n#endif\nif(skin==mat4(0)){return mat4(1);}return skin;}mat4 getSkinningNormalMatrix(){mat4 skin=mat4(0);\n#if defined(HAS_WEIGHTS_0_VEC4) && defined(HAS_JOINTS_0_VEC4)\nskin+=a_weights_0.x*getMatrixFromTexture(u_jointsSampler,int(a_joints_0.x)*2+1)+a_weights_0.y*getMatrixFromTexture(u_jointsSampler,int(a_joints_0.y)*2+1)+a_weights_0.z*getMatrixFromTexture(u_jointsSampler,int(a_joints_0.z)*2+1)+a_weights_0.w*getMatrixFromTexture(u_jointsSampler,int(a_joints_0.w)*2+1);\n#endif\n#if defined(HAS_WEIGHTS_1_VEC4) && defined(HAS_JOINTS_1_VEC4)\nskin+=a_weights_1.x*getMatrixFromTexture(u_jointsSampler,int(a_joints_1.x)*2+1)+a_weights_1.y*getMatrixFromTexture(u_jointsSampler,int(a_joints_1.y)*2+1)+a_weights_1.z*getMatrixFromTexture(u_jointsSampler,int(a_joints_1.z)*2+1)+a_weights_1.w*getMatrixFromTexture(u_jointsSampler,int(a_joints_1.w)*2+1);\n#endif\nif(skin==mat4(0)){return mat4(1);}return skin;}\n#endif\n#ifdef USE_MORPHING\n#ifdef HAS_MORPH_TARGETS\nvec4 getDisplacement(int vertexID,int targetIndex,int texSize){int x=vertexID % texSize;int y=(vertexID-x)/texSize;return texelFetch(u_MorphTargetsSampler,ivec3(x,y,targetIndex),0);}\n#endif\nvec4 getTargetPosition(int vertexID){vec4 pos=vec4(0);\n#ifdef HAS_MORPH_TARGET_POSITION\nint texSize=textureSize(u_MorphTargetsSampler,0)[0];for(int i=0;i<WEIGHT_COUNT;i++){vec4 displacement=getDisplacement(vertexID,MORPH_TARGET_POSITION_OFFSET+i,texSize);pos+=u_morphWeights[i]*displacement;}\n#endif\nreturn pos;}vec3 getTargetNormal(int vertexID){vec3 normal=vec3(0);\n#ifdef HAS_MORPH_TARGET_NORMAL\nint texSize=textureSize(u_MorphTargetsSampler,0)[0];for(int i=0;i<WEIGHT_COUNT;i++){vec3 displacement=getDisplacement(vertexID,MORPH_TARGET_NORMAL_OFFSET+i,texSize).xyz;normal+=u_morphWeights[i]*displacement;}\n#endif\nreturn normal;}vec3 getTargetTangent(int vertexID){vec3 tangent=vec3(0);\n#ifdef HAS_MORPH_TARGET_TANGENT\nint texSize=textureSize(u_MorphTargetsSampler,0)[0];for(int i=0;i<WEIGHT_COUNT;i++){vec3 displacement=getDisplacement(vertexID,MORPH_TARGET_TANGENT_OFFSET+i,texSize).xyz;tangent+=u_morphWeights[i]*displacement;}\n#endif\nreturn tangent;}vec2 getTargetTexCoord0(int vertexID){vec2 uv=vec2(0);\n#ifdef HAS_MORPH_TARGET_TEXCOORD_0\nint texSize=textureSize(u_MorphTargetsSampler,0)[0];for(int i=0;i<WEIGHT_COUNT;i++){vec2 displacement=getDisplacement(vertexID,MORPH_TARGET_TEXCOORD_0_OFFSET+i,texSize).xy;uv+=u_morphWeights[i]*displacement;}\n#endif\nreturn uv;}vec2 getTargetTexCoord1(int vertexID){vec2 uv=vec2(0);\n#ifdef HAS_MORPH_TARGET_TEXCOORD_1\nint texSize=textureSize(u_MorphTargetsSampler,0)[0];for(int i=0;i<WEIGHT_COUNT;i++){vec2 displacement=getDisplacement(vertexID,MORPH_TARGET_TEXCOORD_1_OFFSET+i,texSize).xy;uv+=u_morphWeights[i]*displacement;}\n#endif\nreturn uv;}vec4 getTargetColor0(int vertexID){vec4 color=vec4(0);\n#ifdef HAS_MORPH_TARGET_COLOR_0\nint texSize=textureSize(u_MorphTargetsSampler,0)[0];for(int i=0;i<WEIGHT_COUNT;i++){vec4 displacement=getDisplacement(vertexID,MORPH_TARGET_COLOR_0_OFFSET+i,texSize);color+=u_morphWeights[i]*displacement;}\n#endif\nreturn color;}\n#endif\n"; // eslint-disable-line

var cubemapVertShader = "#define GLSLIFY 1\nuniform mat4 u_ViewProjectionMatrix;uniform mat3 u_EnvRotation;in vec3 a_position;out vec3 v_TexCoords;void main(){v_TexCoords=u_EnvRotation*a_position;mat4 mat=u_ViewProjectionMatrix;mat[3]=vec4(0.0,0.0,0.0,0.1);vec4 pos=mat*vec4(a_position,1.0);gl_Position=pos.xyww;}"; // eslint-disable-line

var cubemapFragShader = "precision highp float;\n#define GLSLIFY 1\n#include <tonemapping.glsl>\nuniform float u_EnvIntensity;uniform float u_EnvBlurNormalized;uniform int u_MipCount;uniform samplerCube u_GGXEnvSampler;out vec4 FragColor;in vec3 v_TexCoords;void main(){vec4 color=textureLod(u_GGXEnvSampler,v_TexCoords,u_EnvBlurNormalized*float(u_MipCount-1));color.rgb*=u_EnvIntensity;color.a=1.0;\n#ifdef LINEAR_OUTPUT\nFragColor=color.rgba;\n#else\nFragColor=vec4(toneMap(color.rgb),color.a);\n#endif\n}"; // eslint-disable-line

class gltfLight extends GltfObject
{
    static animatedProperties = ["color", "intensity", "range"];
    constructor()
    {
        super();
        this.name = undefined;
        this.type = "directional";
        this.color = [1, 1, 1];
        this.intensity = 1;
        this.range = -1;
        this.spot = new gltfLightSpot();

        // Used to override direction from node
        this.direction = undefined;
    }

    fromJson(json)
    {
        super.fromJson(json);
        if (json.spot !== undefined)
        {
            this.spot = new gltfLightSpot();
            this.spot.fromJson(json.spot);
        }
    }

    toUniform(node)
    {
        const matrix = node?.worldTransform ?? identity;

        // To extract a correct rotation, the scaling component must be eliminated.
        var scale = fromValues$2(1, 1, 1);
        getScaling(scale, matrix);
        const mn = create$3();
        for(const col of [0, 1, 2])
        {
            mn[col] = matrix[col] / scale[0];
            mn[col + 4] = matrix[col + 4] / scale[1];
            mn[col + 8] = matrix[col + 8] / scale[2];
        }
        var rotation = create();
        getRotation(rotation, mn);
        normalize(rotation, rotation);

        const uLight = new UniformLight();

        const alongNegativeZ = fromValues$2(0, 0, -1);
        transformQuat(uLight.direction, alongNegativeZ, rotation);

        var translation = fromValues$2(0, 0, 0);
        getTranslation(translation, matrix);
        uLight.position = translation;

        if (this.direction !== undefined)
        {
            uLight.direction = this.direction;
        }

        uLight.range = this.range;
        uLight.color = jsToGl(this.color);
        uLight.intensity = this.intensity;

        uLight.innerConeCos = Math.cos(this.spot.innerConeAngle);
        uLight.outerConeCos = Math.cos(this.spot.outerConeAngle);

        switch(this.type)
        {
        case "spot":
            uLight.type = Type_Spot;
            break;
        case "point":
            uLight.type = Type_Point;
            break;
        case "directional":
        default:
            uLight.type = Type_Directional;
            break;
        }

        return uLight;
    }
}

const Type_Directional = 0;
const Type_Point = 1;
const Type_Spot = 2;

class UniformLight extends UniformStruct
{
    constructor()
    {
        super();

        const defaultDirection = fromValues$2(-0.7399, -0.6428, -0.1983);
        this.direction = defaultDirection;
        this.range = -1;

        this.color = jsToGl([1, 1, 1]);
        this.intensity = 1;

        this.position = jsToGl([0, 0, 0]);
        this.innerConeCos = 0.0;

        this.outerConeCos = Math.PI / 4;
        this.type = Type_Directional;
    }
}

class gltfLightSpot extends GltfObject
{
    static animatedProperties = ["innerConeAngle", "outerConeAngle"];
    constructor()
    {
        super();
        this.innerConeAngle = 0;
        this.outerConeAngle = Math.PI / 4;
    }
}

class gltfRenderer
{
    constructor(context)
    {
        this.shader = undefined; // current shader

        this.currentWidth = 0;
        this.currentHeight = 0;

        this.webGl = new gltfWebGl(context);
        this.initialized = false;
        this.samples = 4;

        // create render target for non transmission materials
        this.opaqueRenderTexture = 0;
        this.opaqueFramebuffer = 0;
        this.opaqueDepthTexture = 0;
        this.opaqueFramebufferWidth = 1024;
        this.opaqueFramebufferHeight = 1024;

        const shaderSources = new Map();
        shaderSources.set("primitive.vert", primitiveShader);
        shaderSources.set("pbr.frag", pbrShader);
        shaderSources.set("material_info.glsl", materialInfoShader);
        shaderSources.set("brdf.glsl", brdfShader);
        shaderSources.set("iridescence.glsl", iridescenceShader);
        shaderSources.set("ibl.glsl", iblShader);
        shaderSources.set("punctual.glsl", punctualShader);
        shaderSources.set("tonemapping.glsl", tonemappingShader);
        shaderSources.set("textures.glsl", texturesShader);
        shaderSources.set("functions.glsl", shaderFunctions);
        shaderSources.set("animation.glsl", animationShader);
        shaderSources.set("cubemap.vert", cubemapVertShader);
        shaderSources.set("cubemap.frag", cubemapFragShader);

        this.shaderCache = new ShaderCache(shaderSources, this.webGl);

        this.webGl.loadWebGlExtensions();

        this.visibleLights = [];

        this.viewMatrix = create$3();
        this.projMatrix = create$3();
        this.viewProjectionMatrix = create$3();

        this.currentCameraPosition = create$2();

        this.lightKey = new gltfLight();
        this.lightFill = new gltfLight();
        this.lightFill.intensity = 0.5;
        const quatKey = fromValues(
            -0.3535534,
            -0.353553385,
            -0.146446586,
            0.8535534);
        const quatFill = fromValues(
            -0.8535534,
            0.146446645,
            -0.353553325,
            -0.353553444);
        this.lightKey.direction = create$2();
        this.lightFill.direction = create$2();
        transformQuat(this.lightKey.direction, [0, 0, -1], quatKey);
        transformQuat(this.lightFill.direction, [0, 0, -1], quatFill);
    }

    /////////////////////////////////////////////////////////////////////
    // Render glTF scene graph
    /////////////////////////////////////////////////////////////////////

    // app state
    init(state)
    {
        const context = this.webGl.context;
        const maxSamples = context.getParameter(context.MAX_SAMPLES);
        const samples = state.internalMSAA < maxSamples ? state.internalMSAA : maxSamples;
        if (!this.initialized){

            context.pixelStorei(GL.UNPACK_COLORSPACE_CONVERSION_WEBGL, GL.NONE);
            context.enable(GL.DEPTH_TEST);
            context.depthFunc(GL.LEQUAL);
            context.colorMask(true, true, true, true);
            context.clearDepth(1.0);

            this.opaqueRenderTexture = context.createTexture();
            context.bindTexture(context.TEXTURE_2D, this.opaqueRenderTexture);
            context.texParameteri(context.TEXTURE_2D, context.TEXTURE_MIN_FILTER, context.LINEAR_MIPMAP_LINEAR);
            context.texParameteri(context.TEXTURE_2D, context.TEXTURE_WRAP_S, context.CLAMP_TO_EDGE);
            context.texParameteri(context.TEXTURE_2D, context.TEXTURE_WRAP_T, context.CLAMP_TO_EDGE);
            context.texParameteri(context.TEXTURE_2D, context.TEXTURE_MAG_FILTER, context.NEAREST);
            context.texImage2D(context.TEXTURE_2D, 0, context.RGBA, this.opaqueFramebufferWidth, this.opaqueFramebufferHeight, 0, context.RGBA, context.UNSIGNED_BYTE, null);
            context.bindTexture(context.TEXTURE_2D, null);

            this.opaqueDepthTexture = context.createTexture();
            context.bindTexture(context.TEXTURE_2D, this.opaqueDepthTexture);
            context.texParameteri(context.TEXTURE_2D, context.TEXTURE_MIN_FILTER, context.NEAREST);
            context.texParameteri(context.TEXTURE_2D, context.TEXTURE_WRAP_S, context.CLAMP_TO_EDGE);
            context.texParameteri(context.TEXTURE_2D, context.TEXTURE_WRAP_T, context.CLAMP_TO_EDGE);
            context.texParameteri(context.TEXTURE_2D, context.TEXTURE_MAG_FILTER, context.NEAREST);
            context.texImage2D( context.TEXTURE_2D, 0, context.DEPTH_COMPONENT16, this.opaqueFramebufferWidth, this.opaqueFramebufferHeight, 0, context.DEPTH_COMPONENT, context.UNSIGNED_SHORT, null);
            context.bindTexture(context.TEXTURE_2D, null);


            this.colorRenderBuffer = context.createRenderbuffer();
            context.bindRenderbuffer(context.RENDERBUFFER, this.colorRenderBuffer);
            context.renderbufferStorageMultisample( context.RENDERBUFFER, samples, context.RGBA8,  this.opaqueFramebufferWidth, this.opaqueFramebufferHeight);

            this.depthRenderBuffer = context.createRenderbuffer();
            context.bindRenderbuffer(context.RENDERBUFFER, this.depthRenderBuffer);
            context.renderbufferStorageMultisample( context.RENDERBUFFER,
                samples,
                context.DEPTH_COMPONENT16, 
                this.opaqueFramebufferWidth,
                this.opaqueFramebufferHeight);

            this.samples = samples;

            this.opaqueFramebufferMSAA = context.createFramebuffer();
            context.bindFramebuffer(context.FRAMEBUFFER, this.opaqueFramebufferMSAA);
            context.framebufferRenderbuffer(context.FRAMEBUFFER, context.COLOR_ATTACHMENT0, context.RENDERBUFFER, this.colorRenderBuffer);
            context.framebufferRenderbuffer(context.FRAMEBUFFER, context.DEPTH_ATTACHMENT, context.RENDERBUFFER, this.depthRenderBuffer);


            this.opaqueFramebuffer = context.createFramebuffer();
            context.bindFramebuffer(context.FRAMEBUFFER, this.opaqueFramebuffer);
            context.framebufferTexture2D(context.FRAMEBUFFER, context.COLOR_ATTACHMENT0, context.TEXTURE_2D, this.opaqueRenderTexture, 0);
            context.framebufferTexture2D(context.FRAMEBUFFER, context.DEPTH_ATTACHMENT, context.TEXTURE_2D, this.opaqueDepthTexture, 0);
            context.viewport(0, 0, this.opaqueFramebufferWidth, this.opaqueFramebufferHeight);
            context.bindFramebuffer(context.FRAMEBUFFER, null);

            this.initialized = true;

            this.environmentRenderer = new EnvironmentRenderer(this.webGl);
        }
        else {
            if (this.samples != samples)
            {
                this.samples = samples;
                context.bindRenderbuffer(context.RENDERBUFFER, this.colorRenderBuffer);
                context.renderbufferStorageMultisample( context.RENDERBUFFER,
                    samples,
                    context.RGBA8, 
                    this.opaqueFramebufferWidth,
                    this.opaqueFramebufferHeight);
                
                context.bindRenderbuffer(context.RENDERBUFFER, this.depthRenderBuffer);
                context.renderbufferStorageMultisample( context.RENDERBUFFER,
                    samples,
                    context.DEPTH_COMPONENT16, 
                    this.opaqueFramebufferWidth,
                    this.opaqueFramebufferHeight);
            }
        }
    }

    resize(width, height)
    {
        if (this.currentWidth !== width || this.currentHeight !== height)
        {
            this.currentHeight = height;
            this.currentWidth = width;
            this.webGl.context.viewport(0, 0, width, height);
        }
    }

    // frame state
    clearFrame(clearColor)
    {
        this.webGl.context.bindFramebuffer(this.webGl.context.FRAMEBUFFER, null);
        this.webGl.context.clearColor(...clearColor);
        this.webGl.context.clear(GL.COLOR_BUFFER_BIT | GL.DEPTH_BUFFER_BIT);
        this.webGl.context.bindFramebuffer(this.webGl.context.FRAMEBUFFER, this.opaqueFramebuffer);
        this.webGl.context.clearColor(...clearColor);
        this.webGl.context.clear(GL.COLOR_BUFFER_BIT | GL.DEPTH_BUFFER_BIT);
        this.webGl.context.bindFramebuffer(this.webGl.context.FRAMEBUFFER, null);
        this.webGl.context.bindFramebuffer(this.webGl.context.FRAMEBUFFER, this.opaqueFramebufferMSAA);
        this.webGl.context.clearColor(...clearColor);
        this.webGl.context.clear(GL.COLOR_BUFFER_BIT | GL.DEPTH_BUFFER_BIT);
        this.webGl.context.bindFramebuffer(this.webGl.context.FRAMEBUFFER, null);
    }

    prepareScene(state, scene) {
        this.nodes = scene.gatherNodes(state.gltf);

        // collect drawables by essentially zipping primitives (for geometry and material)
        // and nodes for the transform
        const drawables = this.nodes
            .filter(node => node.mesh !== undefined)
            .reduce((acc, node) => acc.concat(state.gltf.meshes[node.mesh].primitives.map( primitive => {
                return  {node: node, primitive: primitive};
            })), [])
            .filter(({primitive}) => primitive.material !== undefined);

        // opaque drawables don't need sorting
        this.opaqueDrawables = drawables
            .filter(({primitive}) => state.gltf.materials[primitive.material].alphaMode !== "BLEND"
                && (state.gltf.materials[primitive.material].extensions === undefined
                    || state.gltf.materials[primitive.material].extensions.KHR_materials_transmission === undefined));

        // transparent drawables need sorting before they can be drawn
        this.transparentDrawables = drawables
            .filter(({primitive}) => state.gltf.materials[primitive.material].alphaMode === "BLEND"
                && (state.gltf.materials[primitive.material].extensions === undefined
                    || state.gltf.materials[primitive.material].extensions.KHR_materials_transmission === undefined));

        this.transmissionDrawables = drawables
            .filter(({primitive}) => state.gltf.materials[primitive.material].extensions !== undefined
                && state.gltf.materials[primitive.material].extensions.KHR_materials_transmission !== undefined);
    }

    // render complete gltf scene with given camera
    drawScene(state, scene)
    {
        if (this.preparedScene !== scene) {
            this.prepareScene(state, scene);
            this.preparedScene = scene;
        }

        let currentCamera = undefined;

        if (state.cameraIndex === undefined)
        {
            currentCamera = state.userCamera;
            currentCamera.perspective.aspectRatio = this.currentWidth / this.currentHeight;
        }
        else
        {
            currentCamera = state.gltf.cameras[state.cameraIndex];
        }

        let aspectHeight = this.currentHeight;
        let aspectWidth = this.currentWidth;
        let aspectOffsetX = 0;
        let aspectOffsetY = 0;
        const currentAspectRatio = aspectWidth / aspectHeight;
        if (currentCamera.type === "perspective") {
            if (currentCamera.perspective.aspectRatio) {
                if (currentCamera.perspective.aspectRatio > currentAspectRatio) {
                    aspectHeight = aspectWidth * 1 / currentCamera.perspective.aspectRatio;
                } else {
                    aspectWidth = aspectHeight * currentCamera.perspective.aspectRatio;
                }
            }
        } else {
            const orthoAspect = currentCamera.orthographic.xmag / currentCamera.orthographic.ymag;
            if (orthoAspect > currentAspectRatio) {
                aspectHeight = aspectWidth * 1 / orthoAspect;
            } else {
                aspectWidth = aspectHeight * orthoAspect;
            }
        }
        if (aspectHeight < this.currentHeight) {
            aspectOffsetY = (this.currentHeight - aspectHeight) / 2;
        }
        if (aspectWidth < this.currentWidth) {
            aspectOffsetX = (this.currentWidth - aspectWidth) / 2;
        }

        this.projMatrix = currentCamera.getProjectionMatrix(currentAspectRatio);
        this.viewMatrix = currentCamera.getViewMatrix(state.gltf);
        this.currentCameraPosition = currentCamera.getPosition(state.gltf);

        this.visibleLights = this.getVisibleLights(state.gltf, scene.nodes);
        if (this.visibleLights.length === 0 && !state.renderingParameters.useIBL &&
            state.renderingParameters.useDirectionalLightsWithDisabledIBL)
        {
            this.visibleLights.push([null, this.lightKey]);
            this.visibleLights.push([null, this.lightFill]);
        }

        multiply(this.viewProjectionMatrix, this.projMatrix, this.viewMatrix);

        // Update skins.
        for (const node of this.nodes)
        {
            if (node.mesh !== undefined && node.skin !== undefined)
            {
                this.updateSkin(state, node);
            }
        }

        // If any transmissive drawables are present, render all opaque and transparent drawables into a separate framebuffer.
        if (this.transmissionDrawables.length > 0) {
            // Render transmission sample texture
            this.webGl.context.bindFramebuffer(this.webGl.context.FRAMEBUFFER, this.opaqueFramebufferMSAA);
            this.webGl.context.viewport(0, 0, this.opaqueFramebufferWidth, this.opaqueFramebufferHeight);

            // Render environment for the transmission background
            this.environmentRenderer.drawEnvironmentMap(this.webGl, this.viewProjectionMatrix, state, this.shaderCache, ["LINEAR_OUTPUT 1"]);

            for (const drawable of this.opaqueDrawables)
            {
                let renderpassConfiguration = {};
                renderpassConfiguration.linearOutput = true;
                this.drawPrimitive(state, renderpassConfiguration, drawable.primitive, drawable.node, this.viewProjectionMatrix);
            }

            this.transparentDrawables = currentCamera.sortPrimitivesByDepth(state.gltf, this.transparentDrawables);
            for (const drawable of this.transparentDrawables)
            {
                let renderpassConfiguration = {};
                renderpassConfiguration.linearOutput = true;
                this.drawPrimitive(state, renderpassConfiguration, drawable.primitive, drawable.node, this.viewProjectionMatrix);
            }

            // "blit" the multisampled opaque texture into the color buffer, which adds antialiasing
            this.webGl.context.bindFramebuffer(this.webGl.context.READ_FRAMEBUFFER, this.opaqueFramebufferMSAA);
            this.webGl.context.bindFramebuffer(this.webGl.context.DRAW_FRAMEBUFFER, this.opaqueFramebuffer);
            this.webGl.context.blitFramebuffer(0, 0, this.opaqueFramebufferWidth, this.opaqueFramebufferHeight, 0, 0, this.opaqueFramebufferWidth, this.opaqueFramebufferHeight, this.webGl.context.COLOR_BUFFER_BIT, this.webGl.context.NEAREST);

            // Create Framebuffer Mipmaps
            this.webGl.context.bindTexture(this.webGl.context.TEXTURE_2D, this.opaqueRenderTexture);

            this.webGl.context.generateMipmap(this.webGl.context.TEXTURE_2D);
        }

        // Render to canvas
        this.webGl.context.bindFramebuffer(this.webGl.context.FRAMEBUFFER, null);
        this.webGl.context.viewport(aspectOffsetX, aspectOffsetY,  aspectWidth, aspectHeight);

        // Render environment
        const fragDefines = [];
        this.pushFragParameterDefines(fragDefines, state);
        this.environmentRenderer.drawEnvironmentMap(this.webGl, this.viewProjectionMatrix, state, this.shaderCache, fragDefines);

        for (const drawable of this.opaqueDrawables)
        {  
            let renderpassConfiguration = {};
            renderpassConfiguration.linearOutput = false;
            this.drawPrimitive(state, renderpassConfiguration, drawable.primitive, drawable.node, this.viewProjectionMatrix);
        }

        // filter materials with transmission extension
        this.transmissionDrawables = currentCamera.sortPrimitivesByDepth(state.gltf, this.transmissionDrawables);
        for (const drawable of this.transmissionDrawables.filter((a) => a.depth <= 0))
        {
            let renderpassConfiguration = {};
            renderpassConfiguration.linearOutput = false;
            this.drawPrimitive(state, renderpassConfiguration, drawable.primitive, drawable.node, this.viewProjectionMatrix, this.opaqueRenderTexture);
        }


        this.transparentDrawables = currentCamera.sortPrimitivesByDepth(state.gltf, this.transparentDrawables);
        for (const drawable of this.transparentDrawables.filter((a) => a.depth <= 0))
        {
            let renderpassConfiguration = {};
            renderpassConfiguration.linearOutput = false;
            this.drawPrimitive(state, renderpassConfiguration, drawable.primitive, drawable.node, this.viewProjectionMatrix);
        }
    }

    // vertices with given material
    drawPrimitive(state, renderpassConfiguration, primitive, node, viewProjectionMatrix, transmissionSampleTexture)
    {
        if (primitive.skip) return;

        let material;
        if(primitive.mappings !== undefined && state.variant != "default")
        {
            const names = state.gltf.variants.map(obj => obj.name);
            const idx = names.indexOf(state.variant);
            let materialIdx = primitive.material;
            primitive.mappings.forEach(element => {
                if(element.variants.indexOf(idx) >= 0)
                {
                    materialIdx = element.material;
                }
            });
            material = state.gltf.materials[materialIdx];
        }
        else
        {
            material = state.gltf.materials[primitive.material];
        }

        //select shader permutation, compile and link program.

        let vertDefines = [];
        this.pushVertParameterDefines(vertDefines, state.renderingParameters, state.gltf, node, primitive);
        vertDefines = primitive.defines.concat(vertDefines);

        let fragDefines = material.getDefines(state.renderingParameters).concat(vertDefines);
        if (renderpassConfiguration.linearOutput)
        {
            fragDefines.push("LINEAR_OUTPUT 1");
        }
        // POINTS, LINES, LINE_LOOP, LINE_STRIP
        if (primitive.mode < 4) {
            fragDefines.push("NOT_TRIANGLE 1");
            if (primitive.attributes?.NORMAL !== undefined && primitive.attributes?.TANGENT === undefined) {
                //Points or Lines with NORMAL but without TANGENT attributes SHOULD be rendered with standard lighting but ignoring any normal textures on the material.
                fragDefines = fragDefines.filter(e => e !== "HAS_NORMAL_MAP 1" && e !== "HAS_CLEARCOAT_NORMAL_MAP 1");
            }
        }
        this.pushFragParameterDefines(fragDefines, state);
        
        const fragmentHash = this.shaderCache.selectShader("pbr.frag", fragDefines);
        const vertexHash = this.shaderCache.selectShader("primitive.vert", vertDefines);

        if (fragmentHash && vertexHash)
        {
            this.shader = this.shaderCache.getShaderProgram(fragmentHash, vertexHash);
        }

        if (this.shader === undefined)
        {
            return;
        }

        this.webGl.context.useProgram(this.shader.program);

        if (state.renderingParameters.usePunctual)
        {
            this.applyLights();
        }

        // update model dependant matrices once per node
        this.shader.updateUniform("u_ViewProjectionMatrix", viewProjectionMatrix);
        this.shader.updateUniform("u_ModelMatrix", node.worldTransform);
        this.shader.updateUniform("u_NormalMatrix", node.normalMatrix, false);
        this.shader.updateUniform("u_Exposure", state.renderingParameters.exposure, false);
        this.shader.updateUniform("u_Camera", this.currentCameraPosition, false);

        this.updateAnimationUniforms(state, node, primitive);

        if (determinant(node.worldTransform) < 0.0)
        {
            this.webGl.context.frontFace(GL.CW);
        }
        else
        {
            this.webGl.context.frontFace(GL.CCW);
        }

        if (material.doubleSided)
        {
            this.webGl.context.disable(GL.CULL_FACE);
        }
        else
        {
            this.webGl.context.enable(GL.CULL_FACE);
        }

        if (material.alphaMode === 'BLEND')
        {
            this.webGl.context.enable(GL.BLEND);
            this.webGl.context.blendFuncSeparate(GL.SRC_ALPHA, GL.ONE_MINUS_SRC_ALPHA, GL.ONE, GL.ONE_MINUS_SRC_ALPHA);
            this.webGl.context.blendEquation(GL.FUNC_ADD);
        }
        else
        {
            this.webGl.context.disable(GL.BLEND);
        }

        const drawIndexed = primitive.indices !== undefined;
        if (drawIndexed)
        {
            if (!this.webGl.setIndices(state.gltf, primitive.indices))
            {
                return;
            }
        }

        let vertexCount = 0;
        for (const attribute of primitive.glAttributes)
        {
            const gltfAccessor = state.gltf.accessors[attribute.accessor];
            vertexCount = gltfAccessor.count;

            const location = this.shader.getAttributeLocation(attribute.name);
            if (location === null)
            {
                continue; // only skip this attribute
            }
            if (!this.webGl.enableAttribute(state.gltf, location, gltfAccessor))
            {
                return; // skip this primitive
            }
        }

        // Update material uniforms

        material.updateTextureTransforms(this.shader);

        this.shader.updateUniform("u_EmissiveFactor", jsToGl(material.emissiveFactor));
        this.shader.updateUniform("u_AlphaCutoff", material.alphaCutoff);

        this.shader.updateUniform("u_NormalScale", material.normalTexture?.scale);
        this.shader.updateUniform("u_NormalUVSet", material.normalTexture?.texCoord);

        this.shader.updateUniform("u_OcclusionStrength", material.occlusionTexture?.strength);
        this.shader.updateUniform("u_OcclusionUVSet", material.occlusionTexture?.texCoord);

        this.shader.updateUniform("u_EmissiveUVSet", material.emissiveTexture?.texCoord);

        this.shader.updateUniform("u_BaseColorUVSet", material.pbrMetallicRoughness?.baseColorTexture?.texCoord);
        
        this.shader.updateUniform("u_MetallicRoughnessUVSet", material.pbrMetallicRoughness?.metallicRoughnessTexture?.texCoord);
        this.shader.updateUniform("u_MetallicFactor", material.pbrMetallicRoughness?.metallicFactor);
        this.shader.updateUniform("u_RoughnessFactor", material.pbrMetallicRoughness?.roughnessFactor);
        this.shader.updateUniform("u_BaseColorFactor", jsToGl(material.pbrMetallicRoughness?.baseColorFactor));

        this.shader.updateUniform("u_AnisotropyUVSet", material.extensions?.KHR_materials_anisotropy?.anisotropyTexture?.texCoord);

        const factor = material.extensions?.KHR_materials_anisotropy?.anisotropyStrength;
        const rotation = material.extensions?.KHR_materials_anisotropy?.anisotropyRotation;
        const anisotropy =  fromValues$2(Math.cos(rotation ?? 0), Math.sin(rotation ?? 0), factor ?? 0.0);
        this.shader.updateUniform("u_Anisotropy", anisotropy);

        this.shader.updateUniform("u_ClearcoatFactor", material.extensions?.KHR_materials_clearcoat?.clearcoatFactor);
        this.shader.updateUniform("u_ClearcoatRoughnessFactor", material.extensions?.KHR_materials_clearcoat?.clearcoatRoughnessFactor);
        this.shader.updateUniform("u_ClearcoatUVSet", material.extensions?.KHR_materials_clearcoat?.clearcoatTexture?.texCoord);
        this.shader.updateUniform("u_ClearcoatRoughnessUVSet", material.extensions?.KHR_materials_clearcoat?.clearcoatRoughnessTexture?.texCoord);
        this.shader.updateUniform("u_ClearcoatNormalUVSet", material.extensions?.KHR_materials_clearcoat?.clearcoatNormalTexture?.texCoord);
        this.shader.updateUniform("u_ClearcoatNormalScale", material.extensions?.KHR_materials_clearcoat?.clearcoatNormalTexture?.scale);

        this.shader.updateUniform("u_Dispersion", material.extensions?.KHR_materials_dispersion?.dispersion);

        this.shader.updateUniform("u_EmissiveStrength", material.extensions?.KHR_materials_emissive_strength?.emissiveStrength);

        this.shader.updateUniform("u_Ior", material.extensions?.KHR_materials_ior?.ior);

        this.shader.updateUniform("u_IridescenceFactor", material.extensions?.KHR_materials_iridescence?.iridescenceFactor);
        this.shader.updateUniform("u_IridescenceIor", material.extensions?.KHR_materials_iridescence?.iridescenceIor);
        this.shader.updateUniform("u_IridescenceThicknessMaximum", material.extensions?.KHR_materials_iridescence?.iridescenceThicknessMaximum);
        this.shader.updateUniform("u_IridescenceUVSet", material.extensions?.KHR_materials_iridescence?.iridescenceTexture?.texCoord);
        this.shader.updateUniform("u_IridescenceThicknessUVSet", material.extensions?.KHR_materials_iridescence?.iridescenceThicknessTexture?.texCoord);
        this.shader.updateUniform("u_IridescenceThicknessMinimum", material.extensions?.KHR_materials_iridescence?.iridescenceThicknessMinimum);

        this.shader.updateUniform("u_SheenRoughnessFactor", material.extensions?.KHR_materials_sheen?.sheenRoughnessFactor);
        this.shader.updateUniform("u_SheenColorFactor", jsToGl(material.extensions?.KHR_materials_sheen?.sheenColorFactor));
        this.shader.updateUniform("u_SheenRoughnessUVSet", material.extensions?.KHR_materials_sheen?.sheenRoughnessTexture?.texCoord);
        this.shader.updateUniform("u_SheenColorUVSet", material.extensions?.KHR_materials_sheen?.sheenColorTexture?.texCoord);
        
        this.shader.updateUniform("u_KHR_materials_specular_specularColorFactor", jsToGl(material.extensions?.KHR_materials_specular?.specularColorFactor));
        this.shader.updateUniform("u_KHR_materials_specular_specularFactor", material.extensions?.KHR_materials_specular?.specularFactor);
        this.shader.updateUniform("u_SpecularUVSet", material.extensions?.KHR_materials_specular?.specularTexture?.texCoord);
        this.shader.updateUniform("u_SpecularColorUVSet", material.extensions?.KHR_materials_specular?.specularColorTexture?.texCoord);

        this.shader.updateUniform("u_TransmissionFactor", material.extensions?.KHR_materials_transmission?.transmissionFactor);
        this.shader.updateUniform("u_TransmissionUVSet", material.extensions?.KHR_materials_transmission?.transmissionTexture?.texCoord);

        this.shader.updateUniform("u_AttenuationColor", jsToGl(material.extensions?.KHR_materials_volume?.attenuationColor));
        this.shader.updateUniform("u_AttenuationDistance", material.extensions?.KHR_materials_volume?.attenuationDistance);
        this.shader.updateUniform("u_ThicknessFactor", material.extensions?.KHR_materials_volume?.thicknessFactor);
        this.shader.updateUniform("u_ThicknessUVSet", material.extensions?.KHR_materials_volume?.thicknessTexture?.texCoord);

        this.shader.updateUniform("u_DiffuseTransmissionFactor", material.extensions?.KHR_materials_diffuse_transmission?.diffuseTransmissionFactor);
        this.shader.updateUniform("u_DiffuseTransmissionColorFactor", jsToGl(material.extensions?.KHR_materials_diffuse_transmission?.diffuseTransmissionColorFactor));
        this.shader.updateUniform("u_DiffuseTransmissionUVSet", material.extensions?.KHR_materials_diffuse_transmission?.diffuseTransmissionTexture?.texCoord);
        this.shader.updateUniform("u_DiffuseTransmissionColorUVSet", material.extensions?.KHR_materials_diffuse_transmission?.diffuseTransmissionColorTexture?.texCoord);

        this.shader.updateUniform("u_DiffuseFactor", jsToGl(material.extensions?.KHR_materials_pbrSpecularGlossiness?.diffuseFactor));
        this.shader.updateUniform("u_SpecularFactor", jsToGl(material.extensions?.KHR_materials_pbrSpecularGlossiness?.specularFactor));
        this.shader.updateUniform("u_GlossinessFactor", material.extensions?.KHR_materials_pbrSpecularGlossiness?.glossinessFactor);
        this.shader.updateUniform("u_SpecularGlossinessUVSet", material.extensions?.KHR_materials_pbrSpecularGlossiness?.specularGlossinessTexture?.texCoord);
        this.shader.updateUniform("u_DiffuseUVSet", material.extensions?.KHR_materials_pbrSpecularGlossiness?.diffuseTexture?.texCoord);

        let textureIndex = 0;
        for (; textureIndex < material.textures.length; ++textureIndex)
        {
            let info = material.textures[textureIndex];
            const location = this.shader.getUniformLocation(info.samplerName);
            if (!this.webGl.setTexture(location, state.gltf, info, textureIndex))
            {
                continue;
            }
        }

        // set the morph target texture
        if (primitive.morphTargetTextureInfo !== undefined) 
        {
            const location = this.shader.getUniformLocation(primitive.morphTargetTextureInfo.samplerName);
            this.webGl.setTexture(location, state.gltf, primitive.morphTargetTextureInfo, textureIndex); // binds texture and sampler
            textureIndex++;
        }

        // set the joints texture
        if (state.renderingParameters.skinning && node.skin !== undefined && primitive.hasWeights && primitive.hasJoints) 
        {
            const skin = state.gltf.skins[node.skin];
            const location = this.shader.getUniformLocation(skin.jointTextureInfo.samplerName);
            this.webGl.setTexture(location, state.gltf, skin.jointTextureInfo, textureIndex); // binds texture and sampler
            textureIndex++;
        }

        let textureCount = textureIndex;
        if (state.renderingParameters.useIBL && state.environment !== undefined)
        {
            textureCount = this.applyEnvironmentMap(state, textureCount);
        }

        if (state.environment !== undefined)
        {
            this.webGl.setTexture(this.shader.getUniformLocation("u_SheenELUT"), state.environment, state.environment.sheenELUT, textureCount++);
        }

        if(transmissionSampleTexture !== undefined && state.renderingParameters.useIBL
                    && state.environment && state.renderingParameters.enabledExtensions.KHR_materials_transmission)
        {
            this.webGl.context.activeTexture(GL.TEXTURE0 + textureCount);
            this.webGl.context.bindTexture(this.webGl.context.TEXTURE_2D, this.opaqueRenderTexture);
            this.webGl.context.uniform1i(this.shader.getUniformLocation("u_TransmissionFramebufferSampler"), textureCount);
            textureCount++;

            this.webGl.context.uniform2i(this.shader.getUniformLocation("u_TransmissionFramebufferSize"), this.opaqueFramebufferWidth, this.opaqueFramebufferHeight);

            this.webGl.context.uniformMatrix4fv(this.shader.getUniformLocation("u_ModelMatrix"),false, node.worldTransform);
            this.webGl.context.uniformMatrix4fv(this.shader.getUniformLocation("u_ViewMatrix"),false, this.viewMatrix);
            this.webGl.context.uniformMatrix4fv(this.shader.getUniformLocation("u_ProjectionMatrix"),false, this.projMatrix);
        }

        if (drawIndexed)
        {
            const indexAccessor = state.gltf.accessors[primitive.indices];
            this.webGl.context.drawElements(primitive.mode, indexAccessor.count, indexAccessor.componentType, 0);
        }
        else
        {
            this.webGl.context.drawArrays(primitive.mode, 0, vertexCount);
        }

        for (const attribute of primitive.glAttributes)
        {
            const location = this.shader.getAttributeLocation(attribute.name);
            if (location === null)
            {
                continue; // skip this attribute
            }
            this.webGl.context.disableVertexAttribArray(location);
        }
    }

    /// Compute a list of lights instantiated by one or more nodes as a list of node-light tuples.
    getVisibleLights(gltf, nodes)
    {
        let nodeLights = [];

        for (const nodeIndex of nodes) {
            const node = gltf.nodes[nodeIndex];

            if (node.children !== undefined) {
                nodeLights = nodeLights.concat(this.getVisibleLights(gltf, node.children));
            }

            const lightIndex = node.extensions?.KHR_lights_punctual?.light;
            if (lightIndex === undefined) {
                continue;
            }
            const light = gltf.lights[lightIndex];
            nodeLights.push([node, light]);
        }

        return nodeLights;
    }

    updateSkin(state, node)
    {
        if (state.renderingParameters.skinning && state.gltf.skins !== undefined)
        {
            const skin = state.gltf.skins[node.skin];
            skin.computeJoints(state.gltf, node, this.webGl.context);
        }
    }

    pushVertParameterDefines(vertDefines, parameters, gltf, node, primitive)
    {
        // skinning
        if (parameters.skinning && node.skin !== undefined && primitive.hasWeights && primitive.hasJoints)
        {
            vertDefines.push("USE_SKINNING 1");
        }

        // morphing
        if (parameters.morphing && node.mesh !== undefined && primitive.targets.length > 0)
        {
            const weights = node.getWeights(gltf);
            if (weights !== undefined && weights.length > 0)
            {
                vertDefines.push("USE_MORPHING 1");
                vertDefines.push("WEIGHT_COUNT " + weights.length);
            }
        }
    }

    updateAnimationUniforms(state, node, primitive)
    {
        if (state.renderingParameters.morphing && node.mesh !== undefined && primitive.targets.length > 0)
        {
            const weights = node.getWeights(state.gltf);
            if (weights !== undefined && weights.length > 0)
            {
                this.shader.updateUniformArray("u_morphWeights", weights);
            }
        }
    }

    pushFragParameterDefines(fragDefines, state)
    {
        if (state.renderingParameters.usePunctual)
        {
            fragDefines.push("USE_PUNCTUAL 1");
            fragDefines.push(`LIGHT_COUNT ${this.visibleLights.length}`);
        }

        if (state.renderingParameters.useIBL && state.environment)
        {
            fragDefines.push("USE_IBL 1");
        }

        switch (state.renderingParameters.toneMap)
        {
        case (GltfState.ToneMaps.KHR_PBR_NEUTRAL):
            fragDefines.push("TONEMAP_KHR_PBR_NEUTRAL 1");
            break;
        case (GltfState.ToneMaps.ACES_NARKOWICZ):
            fragDefines.push("TONEMAP_ACES_NARKOWICZ 1");
            break;
        case (GltfState.ToneMaps.ACES_HILL):
            fragDefines.push("TONEMAP_ACES_HILL 1");
            break;
        case (GltfState.ToneMaps.ACES_HILL_EXPOSURE_BOOST):
            fragDefines.push("TONEMAP_ACES_HILL_EXPOSURE_BOOST 1");
            break;
        case (GltfState.ToneMaps.NONE):
        }

        let debugOutputMapping = [
            {debugOutput: GltfState.DebugOutput.NONE, shaderDefine: "DEBUG_NONE"},
            
            {debugOutput: GltfState.DebugOutput.generic.WORLDSPACENORMAL, shaderDefine: "DEBUG_NORMAL_SHADING"},
            {debugOutput: GltfState.DebugOutput.generic.NORMAL, shaderDefine: "DEBUG_NORMAL_TEXTURE"},
            {debugOutput: GltfState.DebugOutput.generic.GEOMETRYNORMAL, shaderDefine: "DEBUG_NORMAL_GEOMETRY"},
            {debugOutput: GltfState.DebugOutput.generic.TANGENT, shaderDefine: "DEBUG_TANGENT"},
            {debugOutput: GltfState.DebugOutput.generic.BITANGENT, shaderDefine: "DEBUG_BITANGENT"},
            {debugOutput: GltfState.DebugOutput.generic.ALPHA, shaderDefine: "DEBUG_ALPHA"},
            {debugOutput: GltfState.DebugOutput.generic.UV_COORDS_0, shaderDefine: "DEBUG_UV_0"},
            {debugOutput: GltfState.DebugOutput.generic.UV_COORDS_1, shaderDefine: "DEBUG_UV_1"},
            {debugOutput: GltfState.DebugOutput.generic.OCCLUSION, shaderDefine: "DEBUG_OCCLUSION"},
            {debugOutput: GltfState.DebugOutput.generic.EMISSIVE, shaderDefine: "DEBUG_EMISSIVE"},

            {debugOutput: GltfState.DebugOutput.mr.METALLIC_ROUGHNESS, shaderDefine: "DEBUG_METALLIC_ROUGHNESS"},
            {debugOutput: GltfState.DebugOutput.mr.BASECOLOR, shaderDefine: "DEBUG_BASE_COLOR"},
            {debugOutput: GltfState.DebugOutput.mr.ROUGHNESS, shaderDefine: "DEBUG_ROUGHNESS"},
            {debugOutput: GltfState.DebugOutput.mr.METALLIC, shaderDefine: "DEBUG_METALLIC"},
            
            {debugOutput: GltfState.DebugOutput.clearcoat.CLEARCOAT, shaderDefine: "DEBUG_CLEARCOAT"},
            {debugOutput: GltfState.DebugOutput.clearcoat.CLEARCOAT_FACTOR, shaderDefine: "DEBUG_CLEARCOAT_FACTOR"},
            {debugOutput: GltfState.DebugOutput.clearcoat.CLEARCOAT_ROUGHNESS, shaderDefine: "DEBUG_CLEARCOAT_ROUGHNESS"},
            {debugOutput: GltfState.DebugOutput.clearcoat.CLEARCOAT_NORMAL, shaderDefine: "DEBUG_CLEARCOAT_NORMAL"},
            
            {debugOutput: GltfState.DebugOutput.sheen.SHEEN, shaderDefine: "DEBUG_SHEEN"},
            {debugOutput: GltfState.DebugOutput.sheen.SHEEN_COLOR, shaderDefine: "DEBUG_SHEEN_COLOR"},
            {debugOutput: GltfState.DebugOutput.sheen.SHEEN_ROUGHNESS, shaderDefine: "DEBUG_SHEEN_ROUGHNESS"},

            {debugOutput: GltfState.DebugOutput.specular.SPECULAR, shaderDefine: "DEBUG_SPECULAR"},
            {debugOutput: GltfState.DebugOutput.specular.SPECULAR_FACTOR, shaderDefine: "DEBUG_SPECULAR_FACTOR"},
            {debugOutput: GltfState.DebugOutput.specular.SPECULAR_COLOR, shaderDefine: "DEBUG_SPECULAR_COLOR"},

            {debugOutput: GltfState.DebugOutput.transmission.TRANSMISSION_VOLUME, shaderDefine: "DEBUG_TRANSMISSION_VOLUME"},
            {debugOutput: GltfState.DebugOutput.transmission.TRANSMISSION_FACTOR, shaderDefine: "DEBUG_TRANSMISSION_FACTOR"},
            {debugOutput: GltfState.DebugOutput.transmission.VOLUME_THICKNESS, shaderDefine: "DEBUG_VOLUME_THICKNESS"},

            {debugOutput: GltfState.DebugOutput.diffuseTransmission.DIFFUSE_TRANSMISSION, shaderDefine: "DEBUG_DIFFUSE_TRANSMISSION"},
            {debugOutput: GltfState.DebugOutput.diffuseTransmission.DIFFUSE_TRANSMISSION_FACTOR, shaderDefine: "DEBUG_DIFFUSE_TRANSMISSION_FACTOR"},
            {debugOutput: GltfState.DebugOutput.diffuseTransmission.DIFFUSE_TRANSMISSION_COLOR_FACTOR, shaderDefine: "DEBUG_DIFFUSE_TRANSMISSION_COLOR_FACTOR"},

            {debugOutput: GltfState.DebugOutput.iridescence.IRIDESCENCE, shaderDefine: "DEBUG_IRIDESCENCE"},
            {debugOutput: GltfState.DebugOutput.iridescence.IRIDESCENCE_FACTOR, shaderDefine: "DEBUG_IRIDESCENCE_FACTOR"},
            {debugOutput: GltfState.DebugOutput.iridescence.IRIDESCENCE_THICKNESS, shaderDefine: "DEBUG_IRIDESCENCE_THICKNESS"},

            {debugOutput: GltfState.DebugOutput.anisotropy.ANISOTROPIC_STRENGTH, shaderDefine: "DEBUG_ANISOTROPIC_STRENGTH"},
            {debugOutput: GltfState.DebugOutput.anisotropy.ANISOTROPIC_DIRECTION, shaderDefine: "DEBUG_ANISOTROPIC_DIRECTION"},
        ];

        let mappingCount = 0;
        let mappingFound = false;
        for (let mapping of debugOutputMapping) {
            fragDefines.push(mapping.shaderDefine+" "+mappingCount++);
            if(state.renderingParameters.debugOutput == mapping.debugOutput){
                fragDefines.push("DEBUG "+mapping.shaderDefine);
                mappingFound = true;
            }
        }

        if(mappingFound == false) { // fallback
            fragDefines.push("DEBUG DEBUG_NONE");
        }

    }

    applyLights()
    {
        const uniforms = [];
        for (const [node, light] of this.visibleLights)
        {
            uniforms.push(light.toUniform(node));
        }
        if (uniforms.length > 0)
        {
            this.shader.updateUniform("u_Lights", uniforms);
        }
    }

    applyEnvironmentMap(state, texSlotOffset)
    {
        const environment = state.environment;
        this.webGl.setTexture(this.shader.getUniformLocation("u_LambertianEnvSampler"), environment, environment.diffuseEnvMap, texSlotOffset++);

        this.webGl.setTexture(this.shader.getUniformLocation("u_GGXEnvSampler"), environment, environment.specularEnvMap, texSlotOffset++);
        this.webGl.setTexture(this.shader.getUniformLocation("u_GGXLUT"), environment, environment.lut, texSlotOffset++);

        this.webGl.setTexture(this.shader.getUniformLocation("u_CharlieEnvSampler"), environment, environment.sheenEnvMap, texSlotOffset++);
        this.webGl.setTexture(this.shader.getUniformLocation("u_CharlieLUT"), environment, environment.sheenLUT, texSlotOffset++);

        this.shader.updateUniform("u_MipCount", environment.mipCount);

        let rotMatrix4 = create$3();
        rotateY(rotMatrix4, rotMatrix4,  state.renderingParameters.environmentRotation / 180.0 * Math.PI);
        let rotMatrix3 = create$4();
        fromMat4(rotMatrix3, rotMatrix4);
        this.shader.updateUniform("u_EnvRotation", rotMatrix3);

        const envIntensity = state.renderingParameters.iblIntensity * state.environment.iblIntensityScale;
        this.shader.updateUniform("u_EnvIntensity", envIntensity);

        return texSlotOffset;
    }

    destroy()
    {
        this.shaderCache.destroy();
    }
}

class gltfBuffer extends GltfObject
{
    static animatedProperties = [];
    constructor()
    {
        super();
        this.uri = undefined;
        this.byteLength = undefined;
        this.name = undefined;

        // non gltf
        this.buffer = undefined; // raw data blob
    }

    load(gltf, additionalFiles = undefined)
    {
        if (this.buffer !== undefined)
        {
            console.error("buffer has already been loaded");
            return;
        }

        const self = this;
        return new Promise(function(resolve)
        {
            if (!self.setBufferFromFiles(additionalFiles, resolve) &&
                !self.setBufferFromUri(gltf, resolve))
            {
                resolve();
            }
        });
    }

    setBufferFromUri(gltf, callback)
    {
        if (this.uri === undefined)
        {
            return false;
        }

        fetch(getContainingFolder(gltf.path) + this.uri)
            .then(response => response.arrayBuffer())
            .then(buffer => {
                this.buffer = buffer;
                callback();
            });

        return true;
    }

    setBufferFromFiles(files, callback)
    {
        if (this.uri === undefined || files === undefined)
        {
            return false;
        }

        const foundFile = files.find(file => file[1].name === this.uri || file[1].fullPath === this.uri);

        if (foundFile === undefined)
        {
            return false;
        }

        const self = this;
        const reader = new FileReader();
        reader.onloadend = function(event)
        {
            self.buffer = event.target.result;
            callback();
        };
        reader.readAsArrayBuffer(foundFile[1]);

        return true;
    }
}

class gltfBufferView extends GltfObject
{
    static animatedProperties = [];
    constructor()
    {
        super();
        this.buffer = undefined;
        this.byteOffset = 0;
        this.byteLength = undefined;
        this.byteStride = 0;
        this.target = undefined;
        this.name = undefined;
    }
}

class AsyncFileReader
{
    static async readAsArrayBuffer(path) {
        return new Promise( (resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsArrayBuffer(path);
        });
    }

    static async readAsText(path) {
        return new Promise( (resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsText(path);
        });
    }

    static async readAsDataURL(path) {
        return new Promise( (resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(path);
        });
    }
}

var encoder$1 = {exports: {}};

/*
  Copyright (c) 2008, Adobe Systems Incorporated
  All rights reserved.

  Redistribution and use in source and binary forms, with or without 
  modification, are permitted provided that the following conditions are
  met:

  * Redistributions of source code must retain the above copyright notice, 
    this list of conditions and the following disclaimer.
  
  * Redistributions in binary form must reproduce the above copyright
    notice, this list of conditions and the following disclaimer in the 
    documentation and/or other materials provided with the distribution.
  
  * Neither the name of Adobe Systems Incorporated nor the names of its 
    contributors may be used to endorse or promote products derived from 
    this software without specific prior written permission.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
  IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
  THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
  PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR 
  CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
  PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
  SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

(function (module) {

	function JPEGEncoder(quality) {
		var ffloor = Math.floor;
		var YTable = new Array(64);
		var UVTable = new Array(64);
		var fdtbl_Y = new Array(64);
		var fdtbl_UV = new Array(64);
		var YDC_HT;
		var UVDC_HT;
		var YAC_HT;
		var UVAC_HT;
		
		var bitcode = new Array(65535);
		var category = new Array(65535);
		var outputfDCTQuant = new Array(64);
		var DU = new Array(64);
		var byteout = [];
		var bytenew = 0;
		var bytepos = 7;
		
		var YDU = new Array(64);
		var UDU = new Array(64);
		var VDU = new Array(64);
		var clt = new Array(256);
		var RGB_YUV_TABLE = new Array(2048);
		var currentQuality;
		
		var ZigZag = [
				 0, 1, 5, 6,14,15,27,28,
				 2, 4, 7,13,16,26,29,42,
				 3, 8,12,17,25,30,41,43,
				 9,11,18,24,31,40,44,53,
				10,19,23,32,39,45,52,54,
				20,22,33,38,46,51,55,60,
				21,34,37,47,50,56,59,61,
				35,36,48,49,57,58,62,63
			];
		
		var std_dc_luminance_nrcodes = [0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0];
		var std_dc_luminance_values = [0,1,2,3,4,5,6,7,8,9,10,11];
		var std_ac_luminance_nrcodes = [0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,0x7d];
		var std_ac_luminance_values = [
				0x01,0x02,0x03,0x00,0x04,0x11,0x05,0x12,
				0x21,0x31,0x41,0x06,0x13,0x51,0x61,0x07,
				0x22,0x71,0x14,0x32,0x81,0x91,0xa1,0x08,
				0x23,0x42,0xb1,0xc1,0x15,0x52,0xd1,0xf0,
				0x24,0x33,0x62,0x72,0x82,0x09,0x0a,0x16,
				0x17,0x18,0x19,0x1a,0x25,0x26,0x27,0x28,
				0x29,0x2a,0x34,0x35,0x36,0x37,0x38,0x39,
				0x3a,0x43,0x44,0x45,0x46,0x47,0x48,0x49,
				0x4a,0x53,0x54,0x55,0x56,0x57,0x58,0x59,
				0x5a,0x63,0x64,0x65,0x66,0x67,0x68,0x69,
				0x6a,0x73,0x74,0x75,0x76,0x77,0x78,0x79,
				0x7a,0x83,0x84,0x85,0x86,0x87,0x88,0x89,
				0x8a,0x92,0x93,0x94,0x95,0x96,0x97,0x98,
				0x99,0x9a,0xa2,0xa3,0xa4,0xa5,0xa6,0xa7,
				0xa8,0xa9,0xaa,0xb2,0xb3,0xb4,0xb5,0xb6,
				0xb7,0xb8,0xb9,0xba,0xc2,0xc3,0xc4,0xc5,
				0xc6,0xc7,0xc8,0xc9,0xca,0xd2,0xd3,0xd4,
				0xd5,0xd6,0xd7,0xd8,0xd9,0xda,0xe1,0xe2,
				0xe3,0xe4,0xe5,0xe6,0xe7,0xe8,0xe9,0xea,
				0xf1,0xf2,0xf3,0xf4,0xf5,0xf6,0xf7,0xf8,
				0xf9,0xfa
			];
		
		var std_dc_chrominance_nrcodes = [0,0,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0];
		var std_dc_chrominance_values = [0,1,2,3,4,5,6,7,8,9,10,11];
		var std_ac_chrominance_nrcodes = [0,0,2,1,2,4,4,3,4,7,5,4,4,0,1,2,0x77];
		var std_ac_chrominance_values = [
				0x00,0x01,0x02,0x03,0x11,0x04,0x05,0x21,
				0x31,0x06,0x12,0x41,0x51,0x07,0x61,0x71,
				0x13,0x22,0x32,0x81,0x08,0x14,0x42,0x91,
				0xa1,0xb1,0xc1,0x09,0x23,0x33,0x52,0xf0,
				0x15,0x62,0x72,0xd1,0x0a,0x16,0x24,0x34,
				0xe1,0x25,0xf1,0x17,0x18,0x19,0x1a,0x26,
				0x27,0x28,0x29,0x2a,0x35,0x36,0x37,0x38,
				0x39,0x3a,0x43,0x44,0x45,0x46,0x47,0x48,
				0x49,0x4a,0x53,0x54,0x55,0x56,0x57,0x58,
				0x59,0x5a,0x63,0x64,0x65,0x66,0x67,0x68,
				0x69,0x6a,0x73,0x74,0x75,0x76,0x77,0x78,
				0x79,0x7a,0x82,0x83,0x84,0x85,0x86,0x87,
				0x88,0x89,0x8a,0x92,0x93,0x94,0x95,0x96,
				0x97,0x98,0x99,0x9a,0xa2,0xa3,0xa4,0xa5,
				0xa6,0xa7,0xa8,0xa9,0xaa,0xb2,0xb3,0xb4,
				0xb5,0xb6,0xb7,0xb8,0xb9,0xba,0xc2,0xc3,
				0xc4,0xc5,0xc6,0xc7,0xc8,0xc9,0xca,0xd2,
				0xd3,0xd4,0xd5,0xd6,0xd7,0xd8,0xd9,0xda,
				0xe2,0xe3,0xe4,0xe5,0xe6,0xe7,0xe8,0xe9,
				0xea,0xf2,0xf3,0xf4,0xf5,0xf6,0xf7,0xf8,
				0xf9,0xfa
			];
		
		function initQuantTables(sf){
				var YQT = [
					16, 11, 10, 16, 24, 40, 51, 61,
					12, 12, 14, 19, 26, 58, 60, 55,
					14, 13, 16, 24, 40, 57, 69, 56,
					14, 17, 22, 29, 51, 87, 80, 62,
					18, 22, 37, 56, 68,109,103, 77,
					24, 35, 55, 64, 81,104,113, 92,
					49, 64, 78, 87,103,121,120,101,
					72, 92, 95, 98,112,100,103, 99
				];
				
				for (var i = 0; i < 64; i++) {
					var t = ffloor((YQT[i]*sf+50)/100);
					if (t < 1) {
						t = 1;
					} else if (t > 255) {
						t = 255;
					}
					YTable[ZigZag[i]] = t;
				}
				var UVQT = [
					17, 18, 24, 47, 99, 99, 99, 99,
					18, 21, 26, 66, 99, 99, 99, 99,
					24, 26, 56, 99, 99, 99, 99, 99,
					47, 66, 99, 99, 99, 99, 99, 99,
					99, 99, 99, 99, 99, 99, 99, 99,
					99, 99, 99, 99, 99, 99, 99, 99,
					99, 99, 99, 99, 99, 99, 99, 99,
					99, 99, 99, 99, 99, 99, 99, 99
				];
				for (var j = 0; j < 64; j++) {
					var u = ffloor((UVQT[j]*sf+50)/100);
					if (u < 1) {
						u = 1;
					} else if (u > 255) {
						u = 255;
					}
					UVTable[ZigZag[j]] = u;
				}
				var aasf = [
					1.0, 1.387039845, 1.306562965, 1.175875602,
					1.0, 0.785694958, 0.541196100, 0.275899379
				];
				var k = 0;
				for (var row = 0; row < 8; row++)
				{
					for (var col = 0; col < 8; col++)
					{
						fdtbl_Y[k]  = (1.0 / (YTable [ZigZag[k]] * aasf[row] * aasf[col] * 8.0));
						fdtbl_UV[k] = (1.0 / (UVTable[ZigZag[k]] * aasf[row] * aasf[col] * 8.0));
						k++;
					}
				}
			}
			
			function computeHuffmanTbl(nrcodes, std_table){
				var codevalue = 0;
				var pos_in_table = 0;
				var HT = new Array();
				for (var k = 1; k <= 16; k++) {
					for (var j = 1; j <= nrcodes[k]; j++) {
						HT[std_table[pos_in_table]] = [];
						HT[std_table[pos_in_table]][0] = codevalue;
						HT[std_table[pos_in_table]][1] = k;
						pos_in_table++;
						codevalue++;
					}
					codevalue*=2;
				}
				return HT;
			}
			
			function initHuffmanTbl()
			{
				YDC_HT = computeHuffmanTbl(std_dc_luminance_nrcodes,std_dc_luminance_values);
				UVDC_HT = computeHuffmanTbl(std_dc_chrominance_nrcodes,std_dc_chrominance_values);
				YAC_HT = computeHuffmanTbl(std_ac_luminance_nrcodes,std_ac_luminance_values);
				UVAC_HT = computeHuffmanTbl(std_ac_chrominance_nrcodes,std_ac_chrominance_values);
			}
		
			function initCategoryNumber()
			{
				var nrlower = 1;
				var nrupper = 2;
				for (var cat = 1; cat <= 15; cat++) {
					//Positive numbers
					for (var nr = nrlower; nr<nrupper; nr++) {
						category[32767+nr] = cat;
						bitcode[32767+nr] = [];
						bitcode[32767+nr][1] = cat;
						bitcode[32767+nr][0] = nr;
					}
					//Negative numbers
					for (var nrneg =-(nrupper-1); nrneg<=-nrlower; nrneg++) {
						category[32767+nrneg] = cat;
						bitcode[32767+nrneg] = [];
						bitcode[32767+nrneg][1] = cat;
						bitcode[32767+nrneg][0] = nrupper-1+nrneg;
					}
					nrlower <<= 1;
					nrupper <<= 1;
				}
			}
			
			function initRGBYUVTable() {
				for(var i = 0; i < 256;i++) {
					RGB_YUV_TABLE[i]      		=  19595 * i;
					RGB_YUV_TABLE[(i+ 256)>>0] 	=  38470 * i;
					RGB_YUV_TABLE[(i+ 512)>>0] 	=   7471 * i + 0x8000;
					RGB_YUV_TABLE[(i+ 768)>>0] 	= -11059 * i;
					RGB_YUV_TABLE[(i+1024)>>0] 	= -21709 * i;
					RGB_YUV_TABLE[(i+1280)>>0] 	=  32768 * i + 0x807FFF;
					RGB_YUV_TABLE[(i+1536)>>0] 	= -27439 * i;
					RGB_YUV_TABLE[(i+1792)>>0] 	= - 5329 * i;
				}
			}
			
			// IO functions
			function writeBits(bs)
			{
				var value = bs[0];
				var posval = bs[1]-1;
				while ( posval >= 0 ) {
					if (value & (1 << posval) ) {
						bytenew |= (1 << bytepos);
					}
					posval--;
					bytepos--;
					if (bytepos < 0) {
						if (bytenew == 0xFF) {
							writeByte(0xFF);
							writeByte(0);
						}
						else {
							writeByte(bytenew);
						}
						bytepos=7;
						bytenew=0;
					}
				}
			}
		
			function writeByte(value)
			{
				//byteout.push(clt[value]); // write char directly instead of converting later
	      byteout.push(value);
			}
		
			function writeWord(value)
			{
				writeByte((value>>8)&0xFF);
				writeByte((value   )&0xFF);
			}
			
			// DCT & quantization core
			function fDCTQuant(data, fdtbl)
			{
				var d0, d1, d2, d3, d4, d5, d6, d7;
				/* Pass 1: process rows. */
				var dataOff=0;
				var i;
				var I8 = 8;
				var I64 = 64;
				for (i=0; i<I8; ++i)
				{
					d0 = data[dataOff];
					d1 = data[dataOff+1];
					d2 = data[dataOff+2];
					d3 = data[dataOff+3];
					d4 = data[dataOff+4];
					d5 = data[dataOff+5];
					d6 = data[dataOff+6];
					d7 = data[dataOff+7];
					
					var tmp0 = d0 + d7;
					var tmp7 = d0 - d7;
					var tmp1 = d1 + d6;
					var tmp6 = d1 - d6;
					var tmp2 = d2 + d5;
					var tmp5 = d2 - d5;
					var tmp3 = d3 + d4;
					var tmp4 = d3 - d4;
		
					/* Even part */
					var tmp10 = tmp0 + tmp3;	/* phase 2 */
					var tmp13 = tmp0 - tmp3;
					var tmp11 = tmp1 + tmp2;
					var tmp12 = tmp1 - tmp2;
		
					data[dataOff] = tmp10 + tmp11; /* phase 3 */
					data[dataOff+4] = tmp10 - tmp11;
		
					var z1 = (tmp12 + tmp13) * 0.707106781; /* c4 */
					data[dataOff+2] = tmp13 + z1; /* phase 5 */
					data[dataOff+6] = tmp13 - z1;
		
					/* Odd part */
					tmp10 = tmp4 + tmp5; /* phase 2 */
					tmp11 = tmp5 + tmp6;
					tmp12 = tmp6 + tmp7;
		
					/* The rotator is modified from fig 4-8 to avoid extra negations. */
					var z5 = (tmp10 - tmp12) * 0.382683433; /* c6 */
					var z2 = 0.541196100 * tmp10 + z5; /* c2-c6 */
					var z4 = 1.306562965 * tmp12 + z5; /* c2+c6 */
					var z3 = tmp11 * 0.707106781; /* c4 */
		
					var z11 = tmp7 + z3;	/* phase 5 */
					var z13 = tmp7 - z3;
		
					data[dataOff+5] = z13 + z2;	/* phase 6 */
					data[dataOff+3] = z13 - z2;
					data[dataOff+1] = z11 + z4;
					data[dataOff+7] = z11 - z4;
		
					dataOff += 8; /* advance pointer to next row */
				}
		
				/* Pass 2: process columns. */
				dataOff = 0;
				for (i=0; i<I8; ++i)
				{
					d0 = data[dataOff];
					d1 = data[dataOff + 8];
					d2 = data[dataOff + 16];
					d3 = data[dataOff + 24];
					d4 = data[dataOff + 32];
					d5 = data[dataOff + 40];
					d6 = data[dataOff + 48];
					d7 = data[dataOff + 56];
					
					var tmp0p2 = d0 + d7;
					var tmp7p2 = d0 - d7;
					var tmp1p2 = d1 + d6;
					var tmp6p2 = d1 - d6;
					var tmp2p2 = d2 + d5;
					var tmp5p2 = d2 - d5;
					var tmp3p2 = d3 + d4;
					var tmp4p2 = d3 - d4;
		
					/* Even part */
					var tmp10p2 = tmp0p2 + tmp3p2;	/* phase 2 */
					var tmp13p2 = tmp0p2 - tmp3p2;
					var tmp11p2 = tmp1p2 + tmp2p2;
					var tmp12p2 = tmp1p2 - tmp2p2;
		
					data[dataOff] = tmp10p2 + tmp11p2; /* phase 3 */
					data[dataOff+32] = tmp10p2 - tmp11p2;
		
					var z1p2 = (tmp12p2 + tmp13p2) * 0.707106781; /* c4 */
					data[dataOff+16] = tmp13p2 + z1p2; /* phase 5 */
					data[dataOff+48] = tmp13p2 - z1p2;
		
					/* Odd part */
					tmp10p2 = tmp4p2 + tmp5p2; /* phase 2 */
					tmp11p2 = tmp5p2 + tmp6p2;
					tmp12p2 = tmp6p2 + tmp7p2;
		
					/* The rotator is modified from fig 4-8 to avoid extra negations. */
					var z5p2 = (tmp10p2 - tmp12p2) * 0.382683433; /* c6 */
					var z2p2 = 0.541196100 * tmp10p2 + z5p2; /* c2-c6 */
					var z4p2 = 1.306562965 * tmp12p2 + z5p2; /* c2+c6 */
					var z3p2 = tmp11p2 * 0.707106781; /* c4 */
		
					var z11p2 = tmp7p2 + z3p2;	/* phase 5 */
					var z13p2 = tmp7p2 - z3p2;
		
					data[dataOff+40] = z13p2 + z2p2; /* phase 6 */
					data[dataOff+24] = z13p2 - z2p2;
					data[dataOff+ 8] = z11p2 + z4p2;
					data[dataOff+56] = z11p2 - z4p2;
		
					dataOff++; /* advance pointer to next column */
				}
		
				// Quantize/descale the coefficients
				var fDCTQuant;
				for (i=0; i<I64; ++i)
				{
					// Apply the quantization and scaling factor & Round to nearest integer
					fDCTQuant = data[i]*fdtbl[i];
					outputfDCTQuant[i] = (fDCTQuant > 0.0) ? ((fDCTQuant + 0.5)|0) : ((fDCTQuant - 0.5)|0);
					//outputfDCTQuant[i] = fround(fDCTQuant);

				}
				return outputfDCTQuant;
			}
			
			function writeAPP0()
			{
				writeWord(0xFFE0); // marker
				writeWord(16); // length
				writeByte(0x4A); // J
				writeByte(0x46); // F
				writeByte(0x49); // I
				writeByte(0x46); // F
				writeByte(0); // = "JFIF",'\0'
				writeByte(1); // versionhi
				writeByte(1); // versionlo
				writeByte(0); // xyunits
				writeWord(1); // xdensity
				writeWord(1); // ydensity
				writeByte(0); // thumbnwidth
				writeByte(0); // thumbnheight
			}

			function writeAPP1(exifBuffer) {
				if (!exifBuffer) return;

				writeWord(0xFFE1); // APP1 marker

				if (exifBuffer[0] === 0x45 &&
						exifBuffer[1] === 0x78 &&
						exifBuffer[2] === 0x69 &&
						exifBuffer[3] === 0x66) {
					// Buffer already starts with EXIF, just use it directly
					writeWord(exifBuffer.length + 2); // length is buffer + length itself!
				} else {
					// Buffer doesn't start with EXIF, write it for them
					writeWord(exifBuffer.length + 5 + 2); // length is buffer + EXIF\0 + length itself!
					writeByte(0x45); // E
					writeByte(0x78); // X
					writeByte(0x69); // I
					writeByte(0x66); // F
					writeByte(0); // = "EXIF",'\0'
				}

				for (var i = 0; i < exifBuffer.length; i++) {
					writeByte(exifBuffer[i]);
				}
			}

			function writeSOF0(width, height)
			{
				writeWord(0xFFC0); // marker
				writeWord(17);   // length, truecolor YUV JPG
				writeByte(8);    // precision
				writeWord(height);
				writeWord(width);
				writeByte(3);    // nrofcomponents
				writeByte(1);    // IdY
				writeByte(0x11); // HVY
				writeByte(0);    // QTY
				writeByte(2);    // IdU
				writeByte(0x11); // HVU
				writeByte(1);    // QTU
				writeByte(3);    // IdV
				writeByte(0x11); // HVV
				writeByte(1);    // QTV
			}
		
			function writeDQT()
			{
				writeWord(0xFFDB); // marker
				writeWord(132);	   // length
				writeByte(0);
				for (var i=0; i<64; i++) {
					writeByte(YTable[i]);
				}
				writeByte(1);
				for (var j=0; j<64; j++) {
					writeByte(UVTable[j]);
				}
			}
		
			function writeDHT()
			{
				writeWord(0xFFC4); // marker
				writeWord(0x01A2); // length
		
				writeByte(0); // HTYDCinfo
				for (var i=0; i<16; i++) {
					writeByte(std_dc_luminance_nrcodes[i+1]);
				}
				for (var j=0; j<=11; j++) {
					writeByte(std_dc_luminance_values[j]);
				}
		
				writeByte(0x10); // HTYACinfo
				for (var k=0; k<16; k++) {
					writeByte(std_ac_luminance_nrcodes[k+1]);
				}
				for (var l=0; l<=161; l++) {
					writeByte(std_ac_luminance_values[l]);
				}
		
				writeByte(1); // HTUDCinfo
				for (var m=0; m<16; m++) {
					writeByte(std_dc_chrominance_nrcodes[m+1]);
				}
				for (var n=0; n<=11; n++) {
					writeByte(std_dc_chrominance_values[n]);
				}
		
				writeByte(0x11); // HTUACinfo
				for (var o=0; o<16; o++) {
					writeByte(std_ac_chrominance_nrcodes[o+1]);
				}
				for (var p=0; p<=161; p++) {
					writeByte(std_ac_chrominance_values[p]);
				}
			}
			
			function writeCOM(comments)
			{
				if (typeof comments === "undefined" || comments.constructor !== Array) return;
				comments.forEach(e => {
					if (typeof e !== "string") return;
					writeWord(0xFFFE); // marker
					var l = e.length;
					writeWord(l + 2); // length itself as well
					var i;
					for (i = 0; i < l; i++)
						writeByte(e.charCodeAt(i));
				});
			}
		
			function writeSOS()
			{
				writeWord(0xFFDA); // marker
				writeWord(12); // length
				writeByte(3); // nrofcomponents
				writeByte(1); // IdY
				writeByte(0); // HTY
				writeByte(2); // IdU
				writeByte(0x11); // HTU
				writeByte(3); // IdV
				writeByte(0x11); // HTV
				writeByte(0); // Ss
				writeByte(0x3f); // Se
				writeByte(0); // Bf
			}
			
			function processDU(CDU, fdtbl, DC, HTDC, HTAC){
				var EOB = HTAC[0x00];
				var M16zeroes = HTAC[0xF0];
				var pos;
				var I16 = 16;
				var I63 = 63;
				var I64 = 64;
				var DU_DCT = fDCTQuant(CDU, fdtbl);
				//ZigZag reorder
				for (var j=0;j<I64;++j) {
					DU[ZigZag[j]]=DU_DCT[j];
				}
				var Diff = DU[0] - DC; DC = DU[0];
				//Encode DC
				if (Diff==0) {
					writeBits(HTDC[0]); // Diff might be 0
				} else {
					pos = 32767+Diff;
					writeBits(HTDC[category[pos]]);
					writeBits(bitcode[pos]);
				}
				//Encode ACs
				var end0pos = 63; // was const... which is crazy
				for (; (end0pos>0)&&(DU[end0pos]==0); end0pos--) {}				//end0pos = first element in reverse order !=0
				if ( end0pos == 0) {
					writeBits(EOB);
					return DC;
				}
				var i = 1;
				var lng;
				while ( i <= end0pos ) {
					var startpos = i;
					for (; (DU[i]==0) && (i<=end0pos); ++i) {}
					var nrzeroes = i-startpos;
					if ( nrzeroes >= I16 ) {
						lng = nrzeroes>>4;
						for (var nrmarker=1; nrmarker <= lng; ++nrmarker)
							writeBits(M16zeroes);
						nrzeroes = nrzeroes&0xF;
					}
					pos = 32767+DU[i];
					writeBits(HTAC[(nrzeroes<<4)+category[pos]]);
					writeBits(bitcode[pos]);
					i++;
				}
				if ( end0pos != I63 ) {
					writeBits(EOB);
				}
				return DC;
			}

			function initCharLookupTable(){
				var sfcc = String.fromCharCode;
				for(var i=0; i < 256; i++){ ///// ACHTUNG // 255
					clt[i] = sfcc(i);
				}
			}
			
			this.encode = function(image,quality) // image data object
			{
				new Date().getTime();
				
				if(quality) setQuality(quality);
				
				// Initialize bit writer
				byteout = new Array();
				bytenew=0;
				bytepos=7;
		
				// Add JPEG headers
				writeWord(0xFFD8); // SOI
				writeAPP0();
				writeCOM(image.comments);
				writeAPP1(image.exifBuffer);
				writeDQT();
				writeSOF0(image.width,image.height);
				writeDHT();
				writeSOS();

		
				// Encode 8x8 macroblocks
				var DCY=0;
				var DCU=0;
				var DCV=0;
				
				bytenew=0;
				bytepos=7;
				
				
				this.encode.displayName = "_encode_";

				var imageData = image.data;
				var width = image.width;
				var height = image.height;

				var quadWidth = width*4;
				
				var x, y = 0;
				var r, g, b;
				var start,p, col,row,pos;
				while(y < height){
					x = 0;
					while(x < quadWidth){
					start = quadWidth * y + x;
					p = start;
					col = -1;
					row = 0;
					
					for(pos=0; pos < 64; pos++){
						row = pos >> 3;// /8
						col = ( pos & 7 ) * 4; // %8
						p = start + ( row * quadWidth ) + col;		
						
						if(y+row >= height){ // padding bottom
							p-= (quadWidth*(y+1+row-height));
						}

						if(x+col >= quadWidth){ // padding right	
							p-= ((x+col) - quadWidth +4);
						}
						
						r = imageData[ p++ ];
						g = imageData[ p++ ];
						b = imageData[ p++ ];
						
						
						/* // calculate YUV values dynamically
						YDU[pos]=((( 0.29900)*r+( 0.58700)*g+( 0.11400)*b))-128; //-0x80
						UDU[pos]=(((-0.16874)*r+(-0.33126)*g+( 0.50000)*b));
						VDU[pos]=((( 0.50000)*r+(-0.41869)*g+(-0.08131)*b));
						*/
						
						// use lookup table (slightly faster)
						YDU[pos] = ((RGB_YUV_TABLE[r]             + RGB_YUV_TABLE[(g +  256)>>0] + RGB_YUV_TABLE[(b +  512)>>0]) >> 16)-128;
						UDU[pos] = ((RGB_YUV_TABLE[(r +  768)>>0] + RGB_YUV_TABLE[(g + 1024)>>0] + RGB_YUV_TABLE[(b + 1280)>>0]) >> 16)-128;
						VDU[pos] = ((RGB_YUV_TABLE[(r + 1280)>>0] + RGB_YUV_TABLE[(g + 1536)>>0] + RGB_YUV_TABLE[(b + 1792)>>0]) >> 16)-128;

					}
					
					DCY = processDU(YDU, fdtbl_Y, DCY, YDC_HT, YAC_HT);
					DCU = processDU(UDU, fdtbl_UV, DCU, UVDC_HT, UVAC_HT);
					DCV = processDU(VDU, fdtbl_UV, DCV, UVDC_HT, UVAC_HT);
					x+=32;
					}
					y+=8;
				}
				
				
				////////////////////////////////////////////////////////////////
		
				// Do the bit alignment of the EOI marker
				if ( bytepos >= 0 ) {
					var fillbits = [];
					fillbits[1] = bytepos+1;
					fillbits[0] = (1<<(bytepos+1))-1;
					writeBits(fillbits);
				}
		
				writeWord(0xFFD9); //EOI
	      return Buffer.from(byteout);
		};
		
		function setQuality(quality){
			if (quality <= 0) {
				quality = 1;
			}
			if (quality > 100) {
				quality = 100;
			}
			
			if(currentQuality == quality) return // don't recalc if unchanged
			
			var sf = 0;
			if (quality < 50) {
				sf = Math.floor(5000 / quality);
			} else {
				sf = Math.floor(200 - quality*2);
			}
			
			initQuantTables(sf);
			currentQuality = quality;
			//console.log('Quality set to: '+quality +'%');
		}
		
		function init(){
			var time_start = new Date().getTime();
			if(!quality) quality = 50;
			// Create tables
			initCharLookupTable();
			initHuffmanTbl();
			initCategoryNumber();
			initRGBYUVTable();
			
			setQuality(quality);
			new Date().getTime() - time_start;
	    	//console.log('Initialization '+ duration + 'ms');
		}
		
		init();
		
	}
	{
		module.exports = encode;
	}

	function encode(imgData, qu) {
	  if (typeof qu === 'undefined') qu = 50;
	  var encoder = new JPEGEncoder(qu);
		var data = encoder.encode(imgData, qu);
	  return {
	    data: data,
	    width: imgData.width,
	    height: imgData.height,
	  };
	}
} (encoder$1));

var encoderExports = encoder$1.exports;

var decoder = {exports: {}};

/* -*- tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- /
/* vim: set shiftwidth=2 tabstop=2 autoindent cindent expandtab: */

(function (module) {
	/*
	   Copyright 2011 notmasteryet

	   Licensed under the Apache License, Version 2.0 (the "License");
	   you may not use this file except in compliance with the License.
	   You may obtain a copy of the License at

	       http://www.apache.org/licenses/LICENSE-2.0

	   Unless required by applicable law or agreed to in writing, software
	   distributed under the License is distributed on an "AS IS" BASIS,
	   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	   See the License for the specific language governing permissions and
	   limitations under the License.
	*/

	// - The JPEG specification can be found in the ITU CCITT Recommendation T.81
	//   (www.w3.org/Graphics/JPEG/itu-t81.pdf)
	// - The JFIF specification can be found in the JPEG File Interchange Format
	//   (www.w3.org/Graphics/JPEG/jfif3.pdf)
	// - The Adobe Application-Specific JPEG markers in the Supporting the DCT Filters
	//   in PostScript Level 2, Technical Note #5116
	//   (partners.adobe.com/public/developer/en/ps/sdk/5116.DCT_Filter.pdf)

	var JpegImage = (function jpegImage() {
	  var dctZigZag = new Int32Array([
	     0,
	     1,  8,
	    16,  9,  2,
	     3, 10, 17, 24,
	    32, 25, 18, 11, 4,
	     5, 12, 19, 26, 33, 40,
	    48, 41, 34, 27, 20, 13,  6,
	     7, 14, 21, 28, 35, 42, 49, 56,
	    57, 50, 43, 36, 29, 22, 15,
	    23, 30, 37, 44, 51, 58,
	    59, 52, 45, 38, 31,
	    39, 46, 53, 60,
	    61, 54, 47,
	    55, 62,
	    63
	  ]);

	  var dctCos1  =  4017;   // cos(pi/16)
	  var dctSin1  =   799;   // sin(pi/16)
	  var dctCos3  =  3406;   // cos(3*pi/16)
	  var dctSin3  =  2276;   // sin(3*pi/16)
	  var dctCos6  =  1567;   // cos(6*pi/16)
	  var dctSin6  =  3784;   // sin(6*pi/16)
	  var dctSqrt2 =  5793;   // sqrt(2)
	  var dctSqrt1d2 = 2896;  // sqrt(2) / 2

	  function constructor() {
	  }

	  function buildHuffmanTable(codeLengths, values) {
	    var k = 0, code = [], i, j, length = 16;
	    while (length > 0 && !codeLengths[length - 1])
	      length--;
	    code.push({children: [], index: 0});
	    var p = code[0], q;
	    for (i = 0; i < length; i++) {
	      for (j = 0; j < codeLengths[i]; j++) {
	        p = code.pop();
	        p.children[p.index] = values[k];
	        while (p.index > 0) {
	          if (code.length === 0)
	            throw new Error('Could not recreate Huffman Table');
	          p = code.pop();
	        }
	        p.index++;
	        code.push(p);
	        while (code.length <= i) {
	          code.push(q = {children: [], index: 0});
	          p.children[p.index] = q.children;
	          p = q;
	        }
	        k++;
	      }
	      if (i + 1 < length) {
	        // p here points to last code
	        code.push(q = {children: [], index: 0});
	        p.children[p.index] = q.children;
	        p = q;
	      }
	    }
	    return code[0].children;
	  }

	  function decodeScan(data, offset,
	                      frame, components, resetInterval,
	                      spectralStart, spectralEnd,
	                      successivePrev, successive, opts) {
	    frame.precision;
	    frame.samplesPerLine;
	    frame.scanLines;
	    var mcusPerLine = frame.mcusPerLine;
	    var progressive = frame.progressive;
	    frame.maxH; frame.maxV;

	    var startOffset = offset, bitsData = 0, bitsCount = 0;
	    function readBit() {
	      if (bitsCount > 0) {
	        bitsCount--;
	        return (bitsData >> bitsCount) & 1;
	      }
	      bitsData = data[offset++];
	      if (bitsData == 0xFF) {
	        var nextByte = data[offset++];
	        if (nextByte) {
	          throw new Error("unexpected marker: " + ((bitsData << 8) | nextByte).toString(16));
	        }
	        // unstuff 0
	      }
	      bitsCount = 7;
	      return bitsData >>> 7;
	    }
	    function decodeHuffman(tree) {
	      var node = tree, bit;
	      while ((bit = readBit()) !== null) {
	        node = node[bit];
	        if (typeof node === 'number')
	          return node;
	        if (typeof node !== 'object')
	          throw new Error("invalid huffman sequence");
	      }
	      return null;
	    }
	    function receive(length) {
	      var n = 0;
	      while (length > 0) {
	        var bit = readBit();
	        if (bit === null) return;
	        n = (n << 1) | bit;
	        length--;
	      }
	      return n;
	    }
	    function receiveAndExtend(length) {
	      var n = receive(length);
	      if (n >= 1 << (length - 1))
	        return n;
	      return n + (-1 << length) + 1;
	    }
	    function decodeBaseline(component, zz) {
	      var t = decodeHuffman(component.huffmanTableDC);
	      var diff = t === 0 ? 0 : receiveAndExtend(t);
	      zz[0]= (component.pred += diff);
	      var k = 1;
	      while (k < 64) {
	        var rs = decodeHuffman(component.huffmanTableAC);
	        var s = rs & 15, r = rs >> 4;
	        if (s === 0) {
	          if (r < 15)
	            break;
	          k += 16;
	          continue;
	        }
	        k += r;
	        var z = dctZigZag[k];
	        zz[z] = receiveAndExtend(s);
	        k++;
	      }
	    }
	    function decodeDCFirst(component, zz) {
	      var t = decodeHuffman(component.huffmanTableDC);
	      var diff = t === 0 ? 0 : (receiveAndExtend(t) << successive);
	      zz[0] = (component.pred += diff);
	    }
	    function decodeDCSuccessive(component, zz) {
	      zz[0] |= readBit() << successive;
	    }
	    var eobrun = 0;
	    function decodeACFirst(component, zz) {
	      if (eobrun > 0) {
	        eobrun--;
	        return;
	      }
	      var k = spectralStart, e = spectralEnd;
	      while (k <= e) {
	        var rs = decodeHuffman(component.huffmanTableAC);
	        var s = rs & 15, r = rs >> 4;
	        if (s === 0) {
	          if (r < 15) {
	            eobrun = receive(r) + (1 << r) - 1;
	            break;
	          }
	          k += 16;
	          continue;
	        }
	        k += r;
	        var z = dctZigZag[k];
	        zz[z] = receiveAndExtend(s) * (1 << successive);
	        k++;
	      }
	    }
	    var successiveACState = 0, successiveACNextValue;
	    function decodeACSuccessive(component, zz) {
	      var k = spectralStart, e = spectralEnd, r = 0;
	      while (k <= e) {
	        var z = dctZigZag[k];
	        var direction = zz[z] < 0 ? -1 : 1;
	        switch (successiveACState) {
	        case 0: // initial state
	          var rs = decodeHuffman(component.huffmanTableAC);
	          var s = rs & 15, r = rs >> 4;
	          if (s === 0) {
	            if (r < 15) {
	              eobrun = receive(r) + (1 << r);
	              successiveACState = 4;
	            } else {
	              r = 16;
	              successiveACState = 1;
	            }
	          } else {
	            if (s !== 1)
	              throw new Error("invalid ACn encoding");
	            successiveACNextValue = receiveAndExtend(s);
	            successiveACState = r ? 2 : 3;
	          }
	          continue;
	        case 1: // skipping r zero items
	        case 2:
	          if (zz[z])
	            zz[z] += (readBit() << successive) * direction;
	          else {
	            r--;
	            if (r === 0)
	              successiveACState = successiveACState == 2 ? 3 : 0;
	          }
	          break;
	        case 3: // set value for a zero item
	          if (zz[z])
	            zz[z] += (readBit() << successive) * direction;
	          else {
	            zz[z] = successiveACNextValue << successive;
	            successiveACState = 0;
	          }
	          break;
	        case 4: // eob
	          if (zz[z])
	            zz[z] += (readBit() << successive) * direction;
	          break;
	        }
	        k++;
	      }
	      if (successiveACState === 4) {
	        eobrun--;
	        if (eobrun === 0)
	          successiveACState = 0;
	      }
	    }
	    function decodeMcu(component, decode, mcu, row, col) {
	      var mcuRow = (mcu / mcusPerLine) | 0;
	      var mcuCol = mcu % mcusPerLine;
	      var blockRow = mcuRow * component.v + row;
	      var blockCol = mcuCol * component.h + col;
	      // If the block is missing and we're in tolerant mode, just skip it.
	      if (component.blocks[blockRow] === undefined && opts.tolerantDecoding)
	        return;
	      decode(component, component.blocks[blockRow][blockCol]);
	    }
	    function decodeBlock(component, decode, mcu) {
	      var blockRow = (mcu / component.blocksPerLine) | 0;
	      var blockCol = mcu % component.blocksPerLine;
	      // If the block is missing and we're in tolerant mode, just skip it.
	      if (component.blocks[blockRow] === undefined && opts.tolerantDecoding)
	        return;
	      decode(component, component.blocks[blockRow][blockCol]);
	    }

	    var componentsLength = components.length;
	    var component, i, j, k, n;
	    var decodeFn;
	    if (progressive) {
	      if (spectralStart === 0)
	        decodeFn = successivePrev === 0 ? decodeDCFirst : decodeDCSuccessive;
	      else
	        decodeFn = successivePrev === 0 ? decodeACFirst : decodeACSuccessive;
	    } else {
	      decodeFn = decodeBaseline;
	    }

	    var mcu = 0, marker;
	    var mcuExpected;
	    if (componentsLength == 1) {
	      mcuExpected = components[0].blocksPerLine * components[0].blocksPerColumn;
	    } else {
	      mcuExpected = mcusPerLine * frame.mcusPerColumn;
	    }
	    if (!resetInterval) resetInterval = mcuExpected;

	    var h, v;
	    while (mcu < mcuExpected) {
	      // reset interval stuff
	      for (i = 0; i < componentsLength; i++)
	        components[i].pred = 0;
	      eobrun = 0;

	      if (componentsLength == 1) {
	        component = components[0];
	        for (n = 0; n < resetInterval; n++) {
	          decodeBlock(component, decodeFn, mcu);
	          mcu++;
	        }
	      } else {
	        for (n = 0; n < resetInterval; n++) {
	          for (i = 0; i < componentsLength; i++) {
	            component = components[i];
	            h = component.h;
	            v = component.v;
	            for (j = 0; j < v; j++) {
	              for (k = 0; k < h; k++) {
	                decodeMcu(component, decodeFn, mcu, j, k);
	              }
	            }
	          }
	          mcu++;

	          // If we've reached our expected MCU's, stop decoding
	          if (mcu === mcuExpected) break;
	        }
	      }

	      if (mcu === mcuExpected) {
	        // Skip trailing bytes at the end of the scan - until we reach the next marker
	        do {
	          if (data[offset] === 0xFF) {
	            if (data[offset + 1] !== 0x00) {
	              break;
	            }
	          }
	          offset += 1;
	        } while (offset < data.length - 2);
	      }

	      // find marker
	      bitsCount = 0;
	      marker = (data[offset] << 8) | data[offset + 1];
	      if (marker < 0xFF00) {
	        throw new Error("marker was not found");
	      }

	      if (marker >= 0xFFD0 && marker <= 0xFFD7) { // RSTx
	        offset += 2;
	      }
	      else
	        break;
	    }

	    return offset - startOffset;
	  }

	  function buildComponentData(frame, component) {
	    var lines = [];
	    var blocksPerLine = component.blocksPerLine;
	    var blocksPerColumn = component.blocksPerColumn;
	    var samplesPerLine = blocksPerLine << 3;
	    // Only 1 used per invocation of this function and garbage collected after invocation, so no need to account for its memory footprint.
	    var R = new Int32Array(64), r = new Uint8Array(64);

	    // A port of poppler's IDCT method which in turn is taken from:
	    //   Christoph Loeffler, Adriaan Ligtenberg, George S. Moschytz,
	    //   "Practical Fast 1-D DCT Algorithms with 11 Multiplications",
	    //   IEEE Intl. Conf. on Acoustics, Speech & Signal Processing, 1989,
	    //   988-991.
	    function quantizeAndInverse(zz, dataOut, dataIn) {
	      var qt = component.quantizationTable;
	      var v0, v1, v2, v3, v4, v5, v6, v7, t;
	      var p = dataIn;
	      var i;

	      // dequant
	      for (i = 0; i < 64; i++)
	        p[i] = zz[i] * qt[i];

	      // inverse DCT on rows
	      for (i = 0; i < 8; ++i) {
	        var row = 8 * i;

	        // check for all-zero AC coefficients
	        if (p[1 + row] == 0 && p[2 + row] == 0 && p[3 + row] == 0 &&
	            p[4 + row] == 0 && p[5 + row] == 0 && p[6 + row] == 0 &&
	            p[7 + row] == 0) {
	          t = (dctSqrt2 * p[0 + row] + 512) >> 10;
	          p[0 + row] = t;
	          p[1 + row] = t;
	          p[2 + row] = t;
	          p[3 + row] = t;
	          p[4 + row] = t;
	          p[5 + row] = t;
	          p[6 + row] = t;
	          p[7 + row] = t;
	          continue;
	        }

	        // stage 4
	        v0 = (dctSqrt2 * p[0 + row] + 128) >> 8;
	        v1 = (dctSqrt2 * p[4 + row] + 128) >> 8;
	        v2 = p[2 + row];
	        v3 = p[6 + row];
	        v4 = (dctSqrt1d2 * (p[1 + row] - p[7 + row]) + 128) >> 8;
	        v7 = (dctSqrt1d2 * (p[1 + row] + p[7 + row]) + 128) >> 8;
	        v5 = p[3 + row] << 4;
	        v6 = p[5 + row] << 4;

	        // stage 3
	        t = (v0 - v1+ 1) >> 1;
	        v0 = (v0 + v1 + 1) >> 1;
	        v1 = t;
	        t = (v2 * dctSin6 + v3 * dctCos6 + 128) >> 8;
	        v2 = (v2 * dctCos6 - v3 * dctSin6 + 128) >> 8;
	        v3 = t;
	        t = (v4 - v6 + 1) >> 1;
	        v4 = (v4 + v6 + 1) >> 1;
	        v6 = t;
	        t = (v7 + v5 + 1) >> 1;
	        v5 = (v7 - v5 + 1) >> 1;
	        v7 = t;

	        // stage 2
	        t = (v0 - v3 + 1) >> 1;
	        v0 = (v0 + v3 + 1) >> 1;
	        v3 = t;
	        t = (v1 - v2 + 1) >> 1;
	        v1 = (v1 + v2 + 1) >> 1;
	        v2 = t;
	        t = (v4 * dctSin3 + v7 * dctCos3 + 2048) >> 12;
	        v4 = (v4 * dctCos3 - v7 * dctSin3 + 2048) >> 12;
	        v7 = t;
	        t = (v5 * dctSin1 + v6 * dctCos1 + 2048) >> 12;
	        v5 = (v5 * dctCos1 - v6 * dctSin1 + 2048) >> 12;
	        v6 = t;

	        // stage 1
	        p[0 + row] = v0 + v7;
	        p[7 + row] = v0 - v7;
	        p[1 + row] = v1 + v6;
	        p[6 + row] = v1 - v6;
	        p[2 + row] = v2 + v5;
	        p[5 + row] = v2 - v5;
	        p[3 + row] = v3 + v4;
	        p[4 + row] = v3 - v4;
	      }

	      // inverse DCT on columns
	      for (i = 0; i < 8; ++i) {
	        var col = i;

	        // check for all-zero AC coefficients
	        if (p[1*8 + col] == 0 && p[2*8 + col] == 0 && p[3*8 + col] == 0 &&
	            p[4*8 + col] == 0 && p[5*8 + col] == 0 && p[6*8 + col] == 0 &&
	            p[7*8 + col] == 0) {
	          t = (dctSqrt2 * dataIn[i+0] + 8192) >> 14;
	          p[0*8 + col] = t;
	          p[1*8 + col] = t;
	          p[2*8 + col] = t;
	          p[3*8 + col] = t;
	          p[4*8 + col] = t;
	          p[5*8 + col] = t;
	          p[6*8 + col] = t;
	          p[7*8 + col] = t;
	          continue;
	        }

	        // stage 4
	        v0 = (dctSqrt2 * p[0*8 + col] + 2048) >> 12;
	        v1 = (dctSqrt2 * p[4*8 + col] + 2048) >> 12;
	        v2 = p[2*8 + col];
	        v3 = p[6*8 + col];
	        v4 = (dctSqrt1d2 * (p[1*8 + col] - p[7*8 + col]) + 2048) >> 12;
	        v7 = (dctSqrt1d2 * (p[1*8 + col] + p[7*8 + col]) + 2048) >> 12;
	        v5 = p[3*8 + col];
	        v6 = p[5*8 + col];

	        // stage 3
	        t = (v0 - v1 + 1) >> 1;
	        v0 = (v0 + v1 + 1) >> 1;
	        v1 = t;
	        t = (v2 * dctSin6 + v3 * dctCos6 + 2048) >> 12;
	        v2 = (v2 * dctCos6 - v3 * dctSin6 + 2048) >> 12;
	        v3 = t;
	        t = (v4 - v6 + 1) >> 1;
	        v4 = (v4 + v6 + 1) >> 1;
	        v6 = t;
	        t = (v7 + v5 + 1) >> 1;
	        v5 = (v7 - v5 + 1) >> 1;
	        v7 = t;

	        // stage 2
	        t = (v0 - v3 + 1) >> 1;
	        v0 = (v0 + v3 + 1) >> 1;
	        v3 = t;
	        t = (v1 - v2 + 1) >> 1;
	        v1 = (v1 + v2 + 1) >> 1;
	        v2 = t;
	        t = (v4 * dctSin3 + v7 * dctCos3 + 2048) >> 12;
	        v4 = (v4 * dctCos3 - v7 * dctSin3 + 2048) >> 12;
	        v7 = t;
	        t = (v5 * dctSin1 + v6 * dctCos1 + 2048) >> 12;
	        v5 = (v5 * dctCos1 - v6 * dctSin1 + 2048) >> 12;
	        v6 = t;

	        // stage 1
	        p[0*8 + col] = v0 + v7;
	        p[7*8 + col] = v0 - v7;
	        p[1*8 + col] = v1 + v6;
	        p[6*8 + col] = v1 - v6;
	        p[2*8 + col] = v2 + v5;
	        p[5*8 + col] = v2 - v5;
	        p[3*8 + col] = v3 + v4;
	        p[4*8 + col] = v3 - v4;
	      }

	      // convert to 8-bit integers
	      for (i = 0; i < 64; ++i) {
	        var sample = 128 + ((p[i] + 8) >> 4);
	        dataOut[i] = sample < 0 ? 0 : sample > 0xFF ? 0xFF : sample;
	      }
	    }

	    requestMemoryAllocation(samplesPerLine * blocksPerColumn * 8);

	    var i, j;
	    for (var blockRow = 0; blockRow < blocksPerColumn; blockRow++) {
	      var scanLine = blockRow << 3;
	      for (i = 0; i < 8; i++)
	        lines.push(new Uint8Array(samplesPerLine));
	      for (var blockCol = 0; blockCol < blocksPerLine; blockCol++) {
	        quantizeAndInverse(component.blocks[blockRow][blockCol], r, R);

	        var offset = 0, sample = blockCol << 3;
	        for (j = 0; j < 8; j++) {
	          var line = lines[scanLine + j];
	          for (i = 0; i < 8; i++)
	            line[sample + i] = r[offset++];
	        }
	      }
	    }
	    return lines;
	  }

	  function clampTo8bit(a) {
	    return a < 0 ? 0 : a > 255 ? 255 : a;
	  }

	  constructor.prototype = {
	    load: function load(path) {
	      var xhr = new XMLHttpRequest();
	      xhr.open("GET", path, true);
	      xhr.responseType = "arraybuffer";
	      xhr.onload = (function() {
	        // TODO catch parse error
	        var data = new Uint8Array(xhr.response || xhr.mozResponseArrayBuffer);
	        this.parse(data);
	        if (this.onload)
	          this.onload();
	      }).bind(this);
	      xhr.send(null);
	    },
	    parse: function parse(data) {
	      var maxResolutionInPixels = this.opts.maxResolutionInMP * 1000 * 1000;
	      var offset = 0; data.length;
	      function readUint16() {
	        var value = (data[offset] << 8) | data[offset + 1];
	        offset += 2;
	        return value;
	      }
	      function readDataBlock() {
	        var length = readUint16();
	        var array = data.subarray(offset, offset + length - 2);
	        offset += array.length;
	        return array;
	      }
	      function prepareComponents(frame) {
	        // According to the JPEG standard, the sampling factor must be between 1 and 4
	        // See https://github.com/libjpeg-turbo/libjpeg-turbo/blob/9abeff46d87bd201a952e276f3e4339556a403a3/libjpeg.txt#L1138-L1146
	        var maxH = 1, maxV = 1;
	        var component, componentId;
	        for (componentId in frame.components) {
	          if (frame.components.hasOwnProperty(componentId)) {
	            component = frame.components[componentId];
	            if (maxH < component.h) maxH = component.h;
	            if (maxV < component.v) maxV = component.v;
	          }
	        }
	        var mcusPerLine = Math.ceil(frame.samplesPerLine / 8 / maxH);
	        var mcusPerColumn = Math.ceil(frame.scanLines / 8 / maxV);
	        for (componentId in frame.components) {
	          if (frame.components.hasOwnProperty(componentId)) {
	            component = frame.components[componentId];
	            var blocksPerLine = Math.ceil(Math.ceil(frame.samplesPerLine / 8) * component.h / maxH);
	            var blocksPerColumn = Math.ceil(Math.ceil(frame.scanLines  / 8) * component.v / maxV);
	            var blocksPerLineForMcu = mcusPerLine * component.h;
	            var blocksPerColumnForMcu = mcusPerColumn * component.v;
	            var blocksToAllocate = blocksPerColumnForMcu * blocksPerLineForMcu;
	            var blocks = [];

	            // Each block is a Int32Array of length 64 (4 x 64 = 256 bytes)
	            requestMemoryAllocation(blocksToAllocate * 256);

	            for (var i = 0; i < blocksPerColumnForMcu; i++) {
	              var row = [];
	              for (var j = 0; j < blocksPerLineForMcu; j++)
	                row.push(new Int32Array(64));
	              blocks.push(row);
	            }
	            component.blocksPerLine = blocksPerLine;
	            component.blocksPerColumn = blocksPerColumn;
	            component.blocks = blocks;
	          }
	        }
	        frame.maxH = maxH;
	        frame.maxV = maxV;
	        frame.mcusPerLine = mcusPerLine;
	        frame.mcusPerColumn = mcusPerColumn;
	      }
	      var jfif = null;
	      var adobe = null;
	      var frame, resetInterval;
	      var quantizationTables = [], frames = [];
	      var huffmanTablesAC = [], huffmanTablesDC = [];
	      var fileMarker = readUint16();
	      var malformedDataOffset = -1;
	      this.comments = [];
	      if (fileMarker != 0xFFD8) { // SOI (Start of Image)
	        throw new Error("SOI not found");
	      }

	      fileMarker = readUint16();
	      while (fileMarker != 0xFFD9) { // EOI (End of image)
	        var i, j;
	        switch(fileMarker) {
	          case 0xFF00: break;
	          case 0xFFE0: // APP0 (Application Specific)
	          case 0xFFE1: // APP1
	          case 0xFFE2: // APP2
	          case 0xFFE3: // APP3
	          case 0xFFE4: // APP4
	          case 0xFFE5: // APP5
	          case 0xFFE6: // APP6
	          case 0xFFE7: // APP7
	          case 0xFFE8: // APP8
	          case 0xFFE9: // APP9
	          case 0xFFEA: // APP10
	          case 0xFFEB: // APP11
	          case 0xFFEC: // APP12
	          case 0xFFED: // APP13
	          case 0xFFEE: // APP14
	          case 0xFFEF: // APP15
	          case 0xFFFE: // COM (Comment)
	            var appData = readDataBlock();

	            if (fileMarker === 0xFFFE) {
	              var comment = String.fromCharCode.apply(null, appData);
	              this.comments.push(comment);
	            }

	            if (fileMarker === 0xFFE0) {
	              if (appData[0] === 0x4A && appData[1] === 0x46 && appData[2] === 0x49 &&
	                appData[3] === 0x46 && appData[4] === 0) { // 'JFIF\x00'
	                jfif = {
	                  version: { major: appData[5], minor: appData[6] },
	                  densityUnits: appData[7],
	                  xDensity: (appData[8] << 8) | appData[9],
	                  yDensity: (appData[10] << 8) | appData[11],
	                  thumbWidth: appData[12],
	                  thumbHeight: appData[13],
	                  thumbData: appData.subarray(14, 14 + 3 * appData[12] * appData[13])
	                };
	              }
	            }
	            // TODO APP1 - Exif
	            if (fileMarker === 0xFFE1) {
	              if (appData[0] === 0x45 &&
	                appData[1] === 0x78 &&
	                appData[2] === 0x69 &&
	                appData[3] === 0x66 &&
	                appData[4] === 0) { // 'EXIF\x00'
	                this.exifBuffer = appData.subarray(5, appData.length);
	              }
	            }

	            if (fileMarker === 0xFFEE) {
	              if (appData[0] === 0x41 && appData[1] === 0x64 && appData[2] === 0x6F &&
	                appData[3] === 0x62 && appData[4] === 0x65 && appData[5] === 0) { // 'Adobe\x00'
	                adobe = {
	                  version: appData[6],
	                  flags0: (appData[7] << 8) | appData[8],
	                  flags1: (appData[9] << 8) | appData[10],
	                  transformCode: appData[11]
	                };
	              }
	            }
	            break;

	          case 0xFFDB: // DQT (Define Quantization Tables)
	            var quantizationTablesLength = readUint16();
	            var quantizationTablesEnd = quantizationTablesLength + offset - 2;
	            while (offset < quantizationTablesEnd) {
	              var quantizationTableSpec = data[offset++];
	              requestMemoryAllocation(64 * 4);
	              var tableData = new Int32Array(64);
	              if ((quantizationTableSpec >> 4) === 0) { // 8 bit values
	                for (j = 0; j < 64; j++) {
	                  var z = dctZigZag[j];
	                  tableData[z] = data[offset++];
	                }
	              } else if ((quantizationTableSpec >> 4) === 1) { //16 bit
	                for (j = 0; j < 64; j++) {
	                  var z = dctZigZag[j];
	                  tableData[z] = readUint16();
	                }
	              } else
	                throw new Error("DQT: invalid table spec");
	              quantizationTables[quantizationTableSpec & 15] = tableData;
	            }
	            break;

	          case 0xFFC0: // SOF0 (Start of Frame, Baseline DCT)
	          case 0xFFC1: // SOF1 (Start of Frame, Extended DCT)
	          case 0xFFC2: // SOF2 (Start of Frame, Progressive DCT)
	            readUint16(); // skip data length
	            frame = {};
	            frame.extended = (fileMarker === 0xFFC1);
	            frame.progressive = (fileMarker === 0xFFC2);
	            frame.precision = data[offset++];
	            frame.scanLines = readUint16();
	            frame.samplesPerLine = readUint16();
	            frame.components = {};
	            frame.componentsOrder = [];

	            var pixelsInFrame = frame.scanLines * frame.samplesPerLine;
	            if (pixelsInFrame > maxResolutionInPixels) {
	              var exceededAmount = Math.ceil((pixelsInFrame - maxResolutionInPixels) / 1e6);
	              throw new Error(`maxResolutionInMP limit exceeded by ${exceededAmount}MP`);
	            }

	            var componentsCount = data[offset++], componentId;
	            for (i = 0; i < componentsCount; i++) {
	              componentId = data[offset];
	              var h = data[offset + 1] >> 4;
	              var v = data[offset + 1] & 15;
	              var qId = data[offset + 2];

	              if ( h <= 0 || v <= 0 ) {
	                throw new Error('Invalid sampling factor, expected values above 0');
	              }

	              frame.componentsOrder.push(componentId);
	              frame.components[componentId] = {
	                h: h,
	                v: v,
	                quantizationIdx: qId
	              };
	              offset += 3;
	            }
	            prepareComponents(frame);
	            frames.push(frame);
	            break;

	          case 0xFFC4: // DHT (Define Huffman Tables)
	            var huffmanLength = readUint16();
	            for (i = 2; i < huffmanLength;) {
	              var huffmanTableSpec = data[offset++];
	              var codeLengths = new Uint8Array(16);
	              var codeLengthSum = 0;
	              for (j = 0; j < 16; j++, offset++) {
	                codeLengthSum += (codeLengths[j] = data[offset]);
	              }
	              requestMemoryAllocation(16 + codeLengthSum);
	              var huffmanValues = new Uint8Array(codeLengthSum);
	              for (j = 0; j < codeLengthSum; j++, offset++)
	                huffmanValues[j] = data[offset];
	              i += 17 + codeLengthSum;

	              ((huffmanTableSpec >> 4) === 0 ?
	                huffmanTablesDC : huffmanTablesAC)[huffmanTableSpec & 15] =
	                buildHuffmanTable(codeLengths, huffmanValues);
	            }
	            break;

	          case 0xFFDD: // DRI (Define Restart Interval)
	            readUint16(); // skip data length
	            resetInterval = readUint16();
	            break;

	          case 0xFFDC: // Number of Lines marker
	            readUint16(); // skip data length
	            readUint16(); // Ignore this data since it represents the image height
	            break;
	            
	          case 0xFFDA: // SOS (Start of Scan)
	            readUint16();
	            var selectorsCount = data[offset++];
	            var components = [], component;
	            for (i = 0; i < selectorsCount; i++) {
	              component = frame.components[data[offset++]];
	              var tableSpec = data[offset++];
	              component.huffmanTableDC = huffmanTablesDC[tableSpec >> 4];
	              component.huffmanTableAC = huffmanTablesAC[tableSpec & 15];
	              components.push(component);
	            }
	            var spectralStart = data[offset++];
	            var spectralEnd = data[offset++];
	            var successiveApproximation = data[offset++];
	            var processed = decodeScan(data, offset,
	              frame, components, resetInterval,
	              spectralStart, spectralEnd,
	              successiveApproximation >> 4, successiveApproximation & 15, this.opts);
	            offset += processed;
	            break;

	          case 0xFFFF: // Fill bytes
	            if (data[offset] !== 0xFF) { // Avoid skipping a valid marker.
	              offset--;
	            }
	            break;
	          default:
	            if (data[offset - 3] == 0xFF &&
	                data[offset - 2] >= 0xC0 && data[offset - 2] <= 0xFE) {
	              // could be incorrect encoding -- last 0xFF byte of the previous
	              // block was eaten by the encoder
	              offset -= 3;
	              break;
	            }
	            else if (fileMarker === 0xE0 || fileMarker == 0xE1) {
	              // Recover from malformed APP1 markers popular in some phone models.
	              // See https://github.com/eugeneware/jpeg-js/issues/82
	              if (malformedDataOffset !== -1) {
	                throw new Error(`first unknown JPEG marker at offset ${malformedDataOffset.toString(16)}, second unknown JPEG marker ${fileMarker.toString(16)} at offset ${(offset - 1).toString(16)}`);
	              }
	              malformedDataOffset = offset - 1;
	              const nextOffset = readUint16();
	              if (data[offset + nextOffset - 2] === 0xFF) {
	                offset += nextOffset - 2;
	                break;
	              }
	            }
	            throw new Error("unknown JPEG marker " + fileMarker.toString(16));
	        }
	        fileMarker = readUint16();
	      }
	      if (frames.length != 1)
	        throw new Error("only single frame JPEGs supported");

	      // set each frame's components quantization table
	      for (var i = 0; i < frames.length; i++) {
	        var cp = frames[i].components;
	        for (var j in cp) {
	          cp[j].quantizationTable = quantizationTables[cp[j].quantizationIdx];
	          delete cp[j].quantizationIdx;
	        }
	      }

	      this.width = frame.samplesPerLine;
	      this.height = frame.scanLines;
	      this.jfif = jfif;
	      this.adobe = adobe;
	      this.components = [];
	      for (var i = 0; i < frame.componentsOrder.length; i++) {
	        var component = frame.components[frame.componentsOrder[i]];
	        this.components.push({
	          lines: buildComponentData(frame, component),
	          scaleX: component.h / frame.maxH,
	          scaleY: component.v / frame.maxV
	        });
	      }
	    },
	    getData: function getData(width, height) {
	      var scaleX = this.width / width, scaleY = this.height / height;

	      var component1, component2, component3, component4;
	      var component1Line, component2Line, component3Line, component4Line;
	      var x, y;
	      var offset = 0;
	      var Y, Cb, Cr, K, C, M, Ye, R, G, B;
	      var colorTransform;
	      var dataLength = width * height * this.components.length;
	      requestMemoryAllocation(dataLength);
	      var data = new Uint8Array(dataLength);
	      switch (this.components.length) {
	        case 1:
	          component1 = this.components[0];
	          for (y = 0; y < height; y++) {
	            component1Line = component1.lines[0 | (y * component1.scaleY * scaleY)];
	            for (x = 0; x < width; x++) {
	              Y = component1Line[0 | (x * component1.scaleX * scaleX)];

	              data[offset++] = Y;
	            }
	          }
	          break;
	        case 2:
	          // PDF might compress two component data in custom colorspace
	          component1 = this.components[0];
	          component2 = this.components[1];
	          for (y = 0; y < height; y++) {
	            component1Line = component1.lines[0 | (y * component1.scaleY * scaleY)];
	            component2Line = component2.lines[0 | (y * component2.scaleY * scaleY)];
	            for (x = 0; x < width; x++) {
	              Y = component1Line[0 | (x * component1.scaleX * scaleX)];
	              data[offset++] = Y;
	              Y = component2Line[0 | (x * component2.scaleX * scaleX)];
	              data[offset++] = Y;
	            }
	          }
	          break;
	        case 3:
	          // The default transform for three components is true
	          colorTransform = true;
	          // The adobe transform marker overrides any previous setting
	          if (this.adobe && this.adobe.transformCode)
	            colorTransform = true;
	          else if (typeof this.opts.colorTransform !== 'undefined')
	            colorTransform = !!this.opts.colorTransform;

	          component1 = this.components[0];
	          component2 = this.components[1];
	          component3 = this.components[2];
	          for (y = 0; y < height; y++) {
	            component1Line = component1.lines[0 | (y * component1.scaleY * scaleY)];
	            component2Line = component2.lines[0 | (y * component2.scaleY * scaleY)];
	            component3Line = component3.lines[0 | (y * component3.scaleY * scaleY)];
	            for (x = 0; x < width; x++) {
	              if (!colorTransform) {
	                R = component1Line[0 | (x * component1.scaleX * scaleX)];
	                G = component2Line[0 | (x * component2.scaleX * scaleX)];
	                B = component3Line[0 | (x * component3.scaleX * scaleX)];
	              } else {
	                Y = component1Line[0 | (x * component1.scaleX * scaleX)];
	                Cb = component2Line[0 | (x * component2.scaleX * scaleX)];
	                Cr = component3Line[0 | (x * component3.scaleX * scaleX)];

	                R = clampTo8bit(Y + 1.402 * (Cr - 128));
	                G = clampTo8bit(Y - 0.3441363 * (Cb - 128) - 0.71413636 * (Cr - 128));
	                B = clampTo8bit(Y + 1.772 * (Cb - 128));
	              }

	              data[offset++] = R;
	              data[offset++] = G;
	              data[offset++] = B;
	            }
	          }
	          break;
	        case 4:
	          if (!this.adobe)
	            throw new Error('Unsupported color mode (4 components)');
	          // The default transform for four components is false
	          colorTransform = false;
	          // The adobe transform marker overrides any previous setting
	          if (this.adobe && this.adobe.transformCode)
	            colorTransform = true;
	          else if (typeof this.opts.colorTransform !== 'undefined')
	            colorTransform = !!this.opts.colorTransform;

	          component1 = this.components[0];
	          component2 = this.components[1];
	          component3 = this.components[2];
	          component4 = this.components[3];
	          for (y = 0; y < height; y++) {
	            component1Line = component1.lines[0 | (y * component1.scaleY * scaleY)];
	            component2Line = component2.lines[0 | (y * component2.scaleY * scaleY)];
	            component3Line = component3.lines[0 | (y * component3.scaleY * scaleY)];
	            component4Line = component4.lines[0 | (y * component4.scaleY * scaleY)];
	            for (x = 0; x < width; x++) {
	              if (!colorTransform) {
	                C = component1Line[0 | (x * component1.scaleX * scaleX)];
	                M = component2Line[0 | (x * component2.scaleX * scaleX)];
	                Ye = component3Line[0 | (x * component3.scaleX * scaleX)];
	                K = component4Line[0 | (x * component4.scaleX * scaleX)];
	              } else {
	                Y = component1Line[0 | (x * component1.scaleX * scaleX)];
	                Cb = component2Line[0 | (x * component2.scaleX * scaleX)];
	                Cr = component3Line[0 | (x * component3.scaleX * scaleX)];
	                K = component4Line[0 | (x * component4.scaleX * scaleX)];

	                C = 255 - clampTo8bit(Y + 1.402 * (Cr - 128));
	                M = 255 - clampTo8bit(Y - 0.3441363 * (Cb - 128) - 0.71413636 * (Cr - 128));
	                Ye = 255 - clampTo8bit(Y + 1.772 * (Cb - 128));
	              }
	              data[offset++] = 255-C;
	              data[offset++] = 255-M;
	              data[offset++] = 255-Ye;
	              data[offset++] = 255-K;
	            }
	          }
	          break;
	        default:
	          throw new Error('Unsupported color mode');
	      }
	      return data;
	    },
	    copyToImageData: function copyToImageData(imageData, formatAsRGBA) {
	      var width = imageData.width, height = imageData.height;
	      var imageDataArray = imageData.data;
	      var data = this.getData(width, height);
	      var i = 0, j = 0, x, y;
	      var Y, K, C, M, R, G, B;
	      switch (this.components.length) {
	        case 1:
	          for (y = 0; y < height; y++) {
	            for (x = 0; x < width; x++) {
	              Y = data[i++];

	              imageDataArray[j++] = Y;
	              imageDataArray[j++] = Y;
	              imageDataArray[j++] = Y;
	              if (formatAsRGBA) {
	                imageDataArray[j++] = 255;
	              }
	            }
	          }
	          break;
	        case 3:
	          for (y = 0; y < height; y++) {
	            for (x = 0; x < width; x++) {
	              R = data[i++];
	              G = data[i++];
	              B = data[i++];

	              imageDataArray[j++] = R;
	              imageDataArray[j++] = G;
	              imageDataArray[j++] = B;
	              if (formatAsRGBA) {
	                imageDataArray[j++] = 255;
	              }
	            }
	          }
	          break;
	        case 4:
	          for (y = 0; y < height; y++) {
	            for (x = 0; x < width; x++) {
	              C = data[i++];
	              M = data[i++];
	              Y = data[i++];
	              K = data[i++];

	              R = 255 - clampTo8bit(C * (1 - K / 255) + K);
	              G = 255 - clampTo8bit(M * (1 - K / 255) + K);
	              B = 255 - clampTo8bit(Y * (1 - K / 255) + K);

	              imageDataArray[j++] = R;
	              imageDataArray[j++] = G;
	              imageDataArray[j++] = B;
	              if (formatAsRGBA) {
	                imageDataArray[j++] = 255;
	              }
	            }
	          }
	          break;
	        default:
	          throw new Error('Unsupported color mode');
	      }
	    }
	  };


	  // We cap the amount of memory used by jpeg-js to avoid unexpected OOMs from untrusted content.
	  var totalBytesAllocated = 0;
	  var maxMemoryUsageBytes = 0;
	  function requestMemoryAllocation(increaseAmount = 0) {
	    var totalMemoryImpactBytes = totalBytesAllocated + increaseAmount;
	    if (totalMemoryImpactBytes > maxMemoryUsageBytes) {
	      var exceededAmount = Math.ceil((totalMemoryImpactBytes - maxMemoryUsageBytes) / 1024 / 1024);
	      throw new Error(`maxMemoryUsageInMB limit exceeded by at least ${exceededAmount}MB`);
	    }

	    totalBytesAllocated = totalMemoryImpactBytes;
	  }

	  constructor.resetMaxMemoryUsage = function (maxMemoryUsageBytes_) {
	    totalBytesAllocated = 0;
	    maxMemoryUsageBytes = maxMemoryUsageBytes_;
	  };

	  constructor.getBytesAllocated = function () {
	    return totalBytesAllocated;
	  };

	  constructor.requestMemoryAllocation = requestMemoryAllocation;

	  return constructor;
	})();

	{
		module.exports = decode;
	}

	function decode(jpegData, userOpts = {}) {
	  var defaultOpts = {
	    // "undefined" means "Choose whether to transform colors based on the image’s color model."
	    colorTransform: undefined,
	    useTArray: false,
	    formatAsRGBA: true,
	    tolerantDecoding: true,
	    maxResolutionInMP: 100, // Don't decode more than 100 megapixels
	    maxMemoryUsageInMB: 512, // Don't decode if memory footprint is more than 512MB
	  };

	  var opts = {...defaultOpts, ...userOpts};
	  var arr = new Uint8Array(jpegData);
	  var decoder = new JpegImage();
	  decoder.opts = opts;
	  // If this constructor ever supports async decoding this will need to be done differently.
	  // Until then, treating as singleton limit is fine.
	  JpegImage.resetMaxMemoryUsage(opts.maxMemoryUsageInMB * 1024 * 1024);
	  decoder.parse(arr);

	  var channels = (opts.formatAsRGBA) ? 4 : 3;
	  var bytesNeeded = decoder.width * decoder.height * channels;
	  try {
	    JpegImage.requestMemoryAllocation(bytesNeeded);
	    var image = {
	      width: decoder.width,
	      height: decoder.height,
	      exifBuffer: decoder.exifBuffer,
	      data: opts.useTArray ?
	        new Uint8Array(bytesNeeded) :
	        Buffer.alloc(bytesNeeded)
	    };
	    if(decoder.comments.length > 0) {
	      image["comments"] = decoder.comments;
	    }
	  } catch (err) {
	    if (err instanceof RangeError) {
	      throw new Error("Could not allocate enough memory for the image. " +
	                      "Required: " + bytesNeeded);
	    } 
	    
	    if (err instanceof ReferenceError) {
	      if (err.message === "Buffer is not defined") {
	        throw new Error("Buffer is not globally defined in this environment. " +
	                        "Consider setting useTArray to true");
	      }
	    }
	    throw err;
	  }

	  decoder.copyToImageData(image, opts.formatAsRGBA);

	  return image;
	} 
} (decoder));

var decoderExports = decoder.exports;

var encode$1 = encoderExports,
    decode$1 = decoderExports;

var jpegJs = {
  encode: encode$1,
  decode: decode$1
};

/*
 * Copyright 2017 Sam Thorogood. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
(function (scope) {
    // fail early
    if (scope['TextEncoder'] && scope['TextDecoder']) {
        return false;
    }
    /**
     * @constructor
     * @param {string=} utfLabel
     */
    function FastTextEncoder(utfLabel = 'utf-8') {
        if (utfLabel !== 'utf-8') {
            throw new RangeError(`Failed to construct 'TextEncoder': The encoding label provided ('${utfLabel}') is invalid.`);
        }
    }
    Object.defineProperty(FastTextEncoder.prototype, 'encoding', {
        value: 'utf-8',
    });
    /**
     * @param {string} string
     * @param {{stream: boolean}=} options
     * @return {!Uint8Array}
     */
    FastTextEncoder.prototype.encode = function (string, options = { stream: false }) {
        if (options.stream) {
            throw new Error(`Failed to encode: the 'stream' option is unsupported.`);
        }
        let pos = 0;
        const len = string.length;
        let at = 0; // output position
        let tlen = Math.max(32, len + (len >> 1) + 7); // 1.5x size
        let target = new Uint8Array((tlen >> 3) << 3); // ... but at 8 byte offset
        while (pos < len) {
            let value = string.charCodeAt(pos++);
            if (value >= 0xd800 && value <= 0xdbff) {
                // high surrogate
                if (pos < len) {
                    const extra = string.charCodeAt(pos);
                    if ((extra & 0xfc00) === 0xdc00) {
                        ++pos;
                        value = ((value & 0x3ff) << 10) + (extra & 0x3ff) + 0x10000;
                    }
                }
                if (value >= 0xd800 && value <= 0xdbff) {
                    continue; // drop lone surrogate
                }
            }
            // expand the buffer if we couldn't write 4 bytes
            if (at + 4 > target.length) {
                tlen += 8; // minimum extra
                tlen *= 1.0 + (pos / string.length) * 2; // take 2x the remaining
                tlen = (tlen >> 3) << 3; // 8 byte offset
                const update = new Uint8Array(tlen);
                update.set(target);
                target = update;
            }
            if ((value & 0xffffff80) === 0) {
                // 1-byte
                target[at++] = value; // ASCII
                continue;
            }
            else if ((value & 0xfffff800) === 0) {
                // 2-byte
                target[at++] = ((value >> 6) & 0x1f) | 0xc0;
            }
            else if ((value & 0xffff0000) === 0) {
                // 3-byte
                target[at++] = ((value >> 12) & 0x0f) | 0xe0;
                target[at++] = ((value >> 6) & 0x3f) | 0x80;
            }
            else if ((value & 0xffe00000) === 0) {
                // 4-byte
                target[at++] = ((value >> 18) & 0x07) | 0xf0;
                target[at++] = ((value >> 12) & 0x3f) | 0x80;
                target[at++] = ((value >> 6) & 0x3f) | 0x80;
            }
            else {
                // FIXME: do we care
                continue;
            }
            target[at++] = (value & 0x3f) | 0x80;
        }
        return target.slice(0, at);
    };
    /**
     * @constructor
     * @param {string=} utfLabel
     * @param {{fatal: boolean}=} options
     */
    function FastTextDecoder(utfLabel = 'utf-8', options = { fatal: false }) {
        if (utfLabel !== 'utf-8') {
            throw new RangeError(`Failed to construct 'TextDecoder': The encoding label provided ('${utfLabel}') is invalid.`);
        }
        if (options.fatal) {
            throw new Error(`Failed to construct 'TextDecoder': the 'fatal' option is unsupported.`);
        }
    }
    Object.defineProperty(FastTextDecoder.prototype, 'encoding', {
        value: 'utf-8',
    });
    Object.defineProperty(FastTextDecoder.prototype, 'fatal', { value: false });
    Object.defineProperty(FastTextDecoder.prototype, 'ignoreBOM', {
        value: false,
    });
    /**
     * @param {(!ArrayBuffer|!ArrayBufferView)} buffer
     * @param {{stream: boolean}=} options
     */
    FastTextDecoder.prototype.decode = function (buffer, options = { stream: false }) {
        if (options['stream']) {
            throw new Error(`Failed to decode: the 'stream' option is unsupported.`);
        }
        const bytes = new Uint8Array(buffer);
        let pos = 0;
        const len = bytes.length;
        const out = [];
        while (pos < len) {
            const byte1 = bytes[pos++];
            if (byte1 === 0) {
                break; // NULL
            }
            if ((byte1 & 0x80) === 0) {
                // 1-byte
                out.push(byte1);
            }
            else if ((byte1 & 0xe0) === 0xc0) {
                // 2-byte
                const byte2 = bytes[pos++] & 0x3f;
                out.push(((byte1 & 0x1f) << 6) | byte2);
            }
            else if ((byte1 & 0xf0) === 0xe0) {
                const byte2 = bytes[pos++] & 0x3f;
                const byte3 = bytes[pos++] & 0x3f;
                out.push(((byte1 & 0x1f) << 12) | (byte2 << 6) | byte3);
            }
            else if ((byte1 & 0xf8) === 0xf0) {
                const byte2 = bytes[pos++] & 0x3f;
                const byte3 = bytes[pos++] & 0x3f;
                const byte4 = bytes[pos++] & 0x3f;
                // this can be > 0xffff, so possibly generate surrogates
                let codepoint = ((byte1 & 0x07) << 0x12) | (byte2 << 0x0c) | (byte3 << 0x06) | byte4;
                if (codepoint > 0xffff) {
                    // codepoint &= ~0x10000;
                    codepoint -= 0x10000;
                    out.push(((codepoint >>> 10) & 0x3ff) | 0xd800);
                    codepoint = 0xdc00 | (codepoint & 0x3ff);
                }
                out.push(codepoint);
            }
            else ;
        }
        return String.fromCharCode.apply(null, out);
    };
    scope['TextEncoder'] = FastTextEncoder;
    scope['TextDecoder'] = FastTextDecoder;
})(typeof window !== 'undefined'
    ? window
    : typeof self !== 'undefined'
        ? self
        : undefined);

// eslint-disable-next-line import/no-unassigned-import
function decode(bytes, encoding = 'utf8') {
    const decoder = new TextDecoder(encoding);
    return decoder.decode(bytes);
}
const encoder = new TextEncoder();
function encode(str) {
    return encoder.encode(str);
}

const defaultByteLength = 1024 * 8;
const hostBigEndian = (() => {
    const array = new Uint8Array(4);
    const view = new Uint32Array(array.buffer);
    return !((view[0] = 1) & array[0]);
})();
const typedArrays = {
    int8: globalThis.Int8Array,
    uint8: globalThis.Uint8Array,
    int16: globalThis.Int16Array,
    uint16: globalThis.Uint16Array,
    int32: globalThis.Int32Array,
    uint32: globalThis.Uint32Array,
    uint64: globalThis.BigUint64Array,
    int64: globalThis.BigInt64Array,
    float32: globalThis.Float32Array,
    float64: globalThis.Float64Array,
};
class IOBuffer {
    /**
     * @param data - The data to construct the IOBuffer with.
     * If data is a number, it will be the new buffer's length<br>
     * If data is `undefined`, the buffer will be initialized with a default length of 8Kb<br>
     * If data is an ArrayBuffer, SharedArrayBuffer, an ArrayBufferView (Typed Array), an IOBuffer instance,
     * or a Node.js Buffer, a view will be created over the underlying ArrayBuffer.
     * @param options
     */
    constructor(data = defaultByteLength, options = {}) {
        let dataIsGiven = false;
        if (typeof data === 'number') {
            data = new ArrayBuffer(data);
        }
        else {
            dataIsGiven = true;
            this.lastWrittenByte = data.byteLength;
        }
        const offset = options.offset ? options.offset >>> 0 : 0;
        const byteLength = data.byteLength - offset;
        let dvOffset = offset;
        if (ArrayBuffer.isView(data) || data instanceof IOBuffer) {
            if (data.byteLength !== data.buffer.byteLength) {
                dvOffset = data.byteOffset + offset;
            }
            data = data.buffer;
        }
        if (dataIsGiven) {
            this.lastWrittenByte = byteLength;
        }
        else {
            this.lastWrittenByte = 0;
        }
        this.buffer = data;
        this.length = byteLength;
        this.byteLength = byteLength;
        this.byteOffset = dvOffset;
        this.offset = 0;
        this.littleEndian = true;
        this._data = new DataView(this.buffer, dvOffset, byteLength);
        this._mark = 0;
        this._marks = [];
    }
    /**
     * Checks if the memory allocated to the buffer is sufficient to store more
     * bytes after the offset.
     * @param byteLength - The needed memory in bytes.
     * @returns `true` if there is sufficient space and `false` otherwise.
     */
    available(byteLength = 1) {
        return this.offset + byteLength <= this.length;
    }
    /**
     * Check if little-endian mode is used for reading and writing multi-byte
     * values.
     * @returns `true` if little-endian mode is used, `false` otherwise.
     */
    isLittleEndian() {
        return this.littleEndian;
    }
    /**
     * Set little-endian mode for reading and writing multi-byte values.
     */
    setLittleEndian() {
        this.littleEndian = true;
        return this;
    }
    /**
     * Check if big-endian mode is used for reading and writing multi-byte values.
     * @returns `true` if big-endian mode is used, `false` otherwise.
     */
    isBigEndian() {
        return !this.littleEndian;
    }
    /**
     * Switches to big-endian mode for reading and writing multi-byte values.
     */
    setBigEndian() {
        this.littleEndian = false;
        return this;
    }
    /**
     * Move the pointer n bytes forward.
     * @param n - Number of bytes to skip.
     */
    skip(n = 1) {
        this.offset += n;
        return this;
    }
    /**
     * Move the pointer n bytes backward.
     * @param n - Number of bytes to move back.
     */
    back(n = 1) {
        this.offset -= n;
        return this;
    }
    /**
     * Move the pointer to the given offset.
     * @param offset
     */
    seek(offset) {
        this.offset = offset;
        return this;
    }
    /**
     * Store the current pointer offset.
     * @see {@link IOBuffer#reset}
     */
    mark() {
        this._mark = this.offset;
        return this;
    }
    /**
     * Move the pointer back to the last pointer offset set by mark.
     * @see {@link IOBuffer#mark}
     */
    reset() {
        this.offset = this._mark;
        return this;
    }
    /**
     * Push the current pointer offset to the mark stack.
     * @see {@link IOBuffer#popMark}
     */
    pushMark() {
        this._marks.push(this.offset);
        return this;
    }
    /**
     * Pop the last pointer offset from the mark stack, and set the current
     * pointer offset to the popped value.
     * @see {@link IOBuffer#pushMark}
     */
    popMark() {
        const offset = this._marks.pop();
        if (offset === undefined) {
            throw new Error('Mark stack empty');
        }
        this.seek(offset);
        return this;
    }
    /**
     * Move the pointer offset back to 0.
     */
    rewind() {
        this.offset = 0;
        return this;
    }
    /**
     * Make sure the buffer has sufficient memory to write a given byteLength at
     * the current pointer offset.
     * If the buffer's memory is insufficient, this method will create a new
     * buffer (a copy) with a length that is twice (byteLength + current offset).
     * @param byteLength
     */
    ensureAvailable(byteLength = 1) {
        if (!this.available(byteLength)) {
            const lengthNeeded = this.offset + byteLength;
            const newLength = lengthNeeded * 2;
            const newArray = new Uint8Array(newLength);
            newArray.set(new Uint8Array(this.buffer));
            this.buffer = newArray.buffer;
            this.length = this.byteLength = newLength;
            this._data = new DataView(this.buffer);
        }
        return this;
    }
    /**
     * Read a byte and return false if the byte's value is 0, or true otherwise.
     * Moves pointer forward by one byte.
     */
    readBoolean() {
        return this.readUint8() !== 0;
    }
    /**
     * Read a signed 8-bit integer and move pointer forward by 1 byte.
     */
    readInt8() {
        return this._data.getInt8(this.offset++);
    }
    /**
     * Read an unsigned 8-bit integer and move pointer forward by 1 byte.
     */
    readUint8() {
        return this._data.getUint8(this.offset++);
    }
    /**
     * Alias for {@link IOBuffer#readUint8}.
     */
    readByte() {
        return this.readUint8();
    }
    /**
     * Read `n` bytes and move pointer forward by `n` bytes.
     */
    readBytes(n = 1) {
        return this.readArray(n, 'uint8');
    }
    /**
     * Creates an array of corresponding to the type `type` and size `size`.
     * For example type `uint8` will create a `Uint8Array`.
     * @param size - size of the resulting array
     * @param type - number type of elements to read
     */
    readArray(size, type) {
        const bytes = typedArrays[type].BYTES_PER_ELEMENT * size;
        const offset = this.byteOffset + this.offset;
        const slice = this.buffer.slice(offset, offset + bytes);
        if (this.littleEndian === hostBigEndian &&
            type !== 'uint8' &&
            type !== 'int8') {
            const slice = new Uint8Array(this.buffer.slice(offset, offset + bytes));
            slice.reverse();
            const returnArray = new typedArrays[type](slice.buffer);
            this.offset += bytes;
            returnArray.reverse();
            return returnArray;
        }
        const returnArray = new typedArrays[type](slice);
        this.offset += bytes;
        return returnArray;
    }
    /**
     * Read a 16-bit signed integer and move pointer forward by 2 bytes.
     */
    readInt16() {
        const value = this._data.getInt16(this.offset, this.littleEndian);
        this.offset += 2;
        return value;
    }
    /**
     * Read a 16-bit unsigned integer and move pointer forward by 2 bytes.
     */
    readUint16() {
        const value = this._data.getUint16(this.offset, this.littleEndian);
        this.offset += 2;
        return value;
    }
    /**
     * Read a 32-bit signed integer and move pointer forward by 4 bytes.
     */
    readInt32() {
        const value = this._data.getInt32(this.offset, this.littleEndian);
        this.offset += 4;
        return value;
    }
    /**
     * Read a 32-bit unsigned integer and move pointer forward by 4 bytes.
     */
    readUint32() {
        const value = this._data.getUint32(this.offset, this.littleEndian);
        this.offset += 4;
        return value;
    }
    /**
     * Read a 32-bit floating number and move pointer forward by 4 bytes.
     */
    readFloat32() {
        const value = this._data.getFloat32(this.offset, this.littleEndian);
        this.offset += 4;
        return value;
    }
    /**
     * Read a 64-bit floating number and move pointer forward by 8 bytes.
     */
    readFloat64() {
        const value = this._data.getFloat64(this.offset, this.littleEndian);
        this.offset += 8;
        return value;
    }
    /**
     * Read a 64-bit signed integer number and move pointer forward by 8 bytes.
     */
    readBigInt64() {
        const value = this._data.getBigInt64(this.offset, this.littleEndian);
        this.offset += 8;
        return value;
    }
    /**
     * Read a 64-bit unsigned integer number and move pointer forward by 8 bytes.
     */
    readBigUint64() {
        const value = this._data.getBigUint64(this.offset, this.littleEndian);
        this.offset += 8;
        return value;
    }
    /**
     * Read a 1-byte ASCII character and move pointer forward by 1 byte.
     */
    readChar() {
        return String.fromCharCode(this.readInt8());
    }
    /**
     * Read `n` 1-byte ASCII characters and move pointer forward by `n` bytes.
     */
    readChars(n = 1) {
        let result = '';
        for (let i = 0; i < n; i++) {
            result += this.readChar();
        }
        return result;
    }
    /**
     * Read the next `n` bytes, return a UTF-8 decoded string and move pointer
     * forward by `n` bytes.
     */
    readUtf8(n = 1) {
        return decode(this.readBytes(n));
    }
    /**
     * Read the next `n` bytes, return a string decoded with `encoding` and move pointer
     * forward by `n` bytes.
     * If no encoding is passed, the function is equivalent to @see {@link IOBuffer#readUtf8}
     */
    decodeText(n = 1, encoding = 'utf-8') {
        return decode(this.readBytes(n), encoding);
    }
    /**
     * Write 0xff if the passed value is truthy, 0x00 otherwise and move pointer
     * forward by 1 byte.
     */
    writeBoolean(value) {
        this.writeUint8(value ? 0xff : 0x00);
        return this;
    }
    /**
     * Write `value` as an 8-bit signed integer and move pointer forward by 1 byte.
     */
    writeInt8(value) {
        this.ensureAvailable(1);
        this._data.setInt8(this.offset++, value);
        this._updateLastWrittenByte();
        return this;
    }
    /**
     * Write `value` as an 8-bit unsigned integer and move pointer forward by 1
     * byte.
     */
    writeUint8(value) {
        this.ensureAvailable(1);
        this._data.setUint8(this.offset++, value);
        this._updateLastWrittenByte();
        return this;
    }
    /**
     * An alias for {@link IOBuffer#writeUint8}.
     */
    writeByte(value) {
        return this.writeUint8(value);
    }
    /**
     * Write all elements of `bytes` as uint8 values and move pointer forward by
     * `bytes.length` bytes.
     */
    writeBytes(bytes) {
        this.ensureAvailable(bytes.length);
        for (let i = 0; i < bytes.length; i++) {
            this._data.setUint8(this.offset++, bytes[i]);
        }
        this._updateLastWrittenByte();
        return this;
    }
    /**
     * Write `value` as a 16-bit signed integer and move pointer forward by 2
     * bytes.
     */
    writeInt16(value) {
        this.ensureAvailable(2);
        this._data.setInt16(this.offset, value, this.littleEndian);
        this.offset += 2;
        this._updateLastWrittenByte();
        return this;
    }
    /**
     * Write `value` as a 16-bit unsigned integer and move pointer forward by 2
     * bytes.
     */
    writeUint16(value) {
        this.ensureAvailable(2);
        this._data.setUint16(this.offset, value, this.littleEndian);
        this.offset += 2;
        this._updateLastWrittenByte();
        return this;
    }
    /**
     * Write `value` as a 32-bit signed integer and move pointer forward by 4
     * bytes.
     */
    writeInt32(value) {
        this.ensureAvailable(4);
        this._data.setInt32(this.offset, value, this.littleEndian);
        this.offset += 4;
        this._updateLastWrittenByte();
        return this;
    }
    /**
     * Write `value` as a 32-bit unsigned integer and move pointer forward by 4
     * bytes.
     */
    writeUint32(value) {
        this.ensureAvailable(4);
        this._data.setUint32(this.offset, value, this.littleEndian);
        this.offset += 4;
        this._updateLastWrittenByte();
        return this;
    }
    /**
     * Write `value` as a 32-bit floating number and move pointer forward by 4
     * bytes.
     */
    writeFloat32(value) {
        this.ensureAvailable(4);
        this._data.setFloat32(this.offset, value, this.littleEndian);
        this.offset += 4;
        this._updateLastWrittenByte();
        return this;
    }
    /**
     * Write `value` as a 64-bit floating number and move pointer forward by 8
     * bytes.
     */
    writeFloat64(value) {
        this.ensureAvailable(8);
        this._data.setFloat64(this.offset, value, this.littleEndian);
        this.offset += 8;
        this._updateLastWrittenByte();
        return this;
    }
    /**
     * Write `value` as a 64-bit signed bigint and move pointer forward by 8
     * bytes.
     */
    writeBigInt64(value) {
        this.ensureAvailable(8);
        this._data.setBigInt64(this.offset, value, this.littleEndian);
        this.offset += 8;
        this._updateLastWrittenByte();
        return this;
    }
    /**
     * Write `value` as a 64-bit unsigned bigint and move pointer forward by 8
     * bytes.
     */
    writeBigUint64(value) {
        this.ensureAvailable(8);
        this._data.setBigUint64(this.offset, value, this.littleEndian);
        this.offset += 8;
        this._updateLastWrittenByte();
        return this;
    }
    /**
     * Write the charCode of `str`'s first character as an 8-bit unsigned integer
     * and move pointer forward by 1 byte.
     */
    writeChar(str) {
        return this.writeUint8(str.charCodeAt(0));
    }
    /**
     * Write the charCodes of all `str`'s characters as 8-bit unsigned integers
     * and move pointer forward by `str.length` bytes.
     */
    writeChars(str) {
        for (let i = 0; i < str.length; i++) {
            this.writeUint8(str.charCodeAt(i));
        }
        return this;
    }
    /**
     * UTF-8 encode and write `str` to the current pointer offset and move pointer
     * forward according to the encoded length.
     */
    writeUtf8(str) {
        return this.writeBytes(encode(str));
    }
    /**
     * Export a Uint8Array view of the internal buffer.
     * The view starts at the byte offset and its length
     * is calculated to stop at the last written byte or the original length.
     */
    toArray() {
        return new Uint8Array(this.buffer, this.byteOffset, this.lastWrittenByte);
    }
    /**
     * Update the last written byte offset
     * @private
     */
    _updateLastWrittenByte() {
        if (this.offset > this.lastWrittenByte) {
            this.lastWrittenByte = this.offset;
        }
    }
}

/*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */
// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

/* eslint-disable space-unary-ops */

/* Public constants ==========================================================*/
/* ===========================================================================*/


//const Z_FILTERED          = 1;
//const Z_HUFFMAN_ONLY      = 2;
//const Z_RLE               = 3;
const Z_FIXED$1               = 4;
//const Z_DEFAULT_STRATEGY  = 0;

/* Possible values of the data_type field (though see inflate()) */
const Z_BINARY              = 0;
const Z_TEXT                = 1;
//const Z_ASCII             = 1; // = Z_TEXT
const Z_UNKNOWN$1             = 2;

/*============================================================================*/


function zero$1(buf) { let len = buf.length; while (--len >= 0) { buf[len] = 0; } }

// From zutil.h

const STORED_BLOCK = 0;
const STATIC_TREES = 1;
const DYN_TREES    = 2;
/* The three kinds of block type */

const MIN_MATCH$1    = 3;
const MAX_MATCH$1    = 258;
/* The minimum and maximum match lengths */

// From deflate.h
/* ===========================================================================
 * Internal compression state.
 */

const LENGTH_CODES$1  = 29;
/* number of length codes, not counting the special END_BLOCK code */

const LITERALS$1      = 256;
/* number of literal bytes 0..255 */

const L_CODES$1       = LITERALS$1 + 1 + LENGTH_CODES$1;
/* number of Literal or Length codes, including the END_BLOCK code */

const D_CODES$1       = 30;
/* number of distance codes */

const BL_CODES$1      = 19;
/* number of codes used to transfer the bit lengths */

const HEAP_SIZE$1     = 2 * L_CODES$1 + 1;
/* maximum heap size */

const MAX_BITS$1      = 15;
/* All codes must not exceed MAX_BITS bits */

const Buf_size      = 16;
/* size of bit buffer in bi_buf */


/* ===========================================================================
 * Constants
 */

const MAX_BL_BITS = 7;
/* Bit length codes must not exceed MAX_BL_BITS bits */

const END_BLOCK   = 256;
/* end of block literal code */

const REP_3_6     = 16;
/* repeat previous bit length 3-6 times (2 bits of repeat count) */

const REPZ_3_10   = 17;
/* repeat a zero length 3-10 times  (3 bits of repeat count) */

const REPZ_11_138 = 18;
/* repeat a zero length 11-138 times  (7 bits of repeat count) */

/* eslint-disable comma-spacing,array-bracket-spacing */
const extra_lbits =   /* extra bits for each length code */
  new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]);

const extra_dbits =   /* extra bits for each distance code */
  new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]);

const extra_blbits =  /* extra bits for each bit length code */
  new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]);

const bl_order =
  new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);
/* eslint-enable comma-spacing,array-bracket-spacing */

/* The lengths of the bit length codes are sent in order of decreasing
 * probability, to avoid transmitting the lengths for unused bit length codes.
 */

/* ===========================================================================
 * Local data. These are initialized only once.
 */

// We pre-fill arrays with 0 to avoid uninitialized gaps

const DIST_CODE_LEN = 512; /* see definition of array dist_code below */

// !!!! Use flat array instead of structure, Freq = i*2, Len = i*2+1
const static_ltree  = new Array((L_CODES$1 + 2) * 2);
zero$1(static_ltree);
/* The static literal tree. Since the bit lengths are imposed, there is no
 * need for the L_CODES extra codes used during heap construction. However
 * The codes 286 and 287 are needed to build a canonical tree (see _tr_init
 * below).
 */

const static_dtree  = new Array(D_CODES$1 * 2);
zero$1(static_dtree);
/* The static distance tree. (Actually a trivial tree since all codes use
 * 5 bits.)
 */

const _dist_code    = new Array(DIST_CODE_LEN);
zero$1(_dist_code);
/* Distance codes. The first 256 values correspond to the distances
 * 3 .. 258, the last 256 values correspond to the top 8 bits of
 * the 15 bit distances.
 */

const _length_code  = new Array(MAX_MATCH$1 - MIN_MATCH$1 + 1);
zero$1(_length_code);
/* length code for each normalized match length (0 == MIN_MATCH) */

const base_length   = new Array(LENGTH_CODES$1);
zero$1(base_length);
/* First normalized length for each code (0 = MIN_MATCH) */

const base_dist     = new Array(D_CODES$1);
zero$1(base_dist);
/* First normalized distance for each code (0 = distance of 1) */


function StaticTreeDesc(static_tree, extra_bits, extra_base, elems, max_length) {

  this.static_tree  = static_tree;  /* static tree or NULL */
  this.extra_bits   = extra_bits;   /* extra bits for each code or NULL */
  this.extra_base   = extra_base;   /* base index for extra_bits */
  this.elems        = elems;        /* max number of elements in the tree */
  this.max_length   = max_length;   /* max bit length for the codes */

  // show if `static_tree` has data or dummy - needed for monomorphic objects
  this.has_stree    = static_tree && static_tree.length;
}


let static_l_desc;
let static_d_desc;
let static_bl_desc;


function TreeDesc(dyn_tree, stat_desc) {
  this.dyn_tree = dyn_tree;     /* the dynamic tree */
  this.max_code = 0;            /* largest code with non zero frequency */
  this.stat_desc = stat_desc;   /* the corresponding static tree */
}



const d_code = (dist) => {

  return dist < 256 ? _dist_code[dist] : _dist_code[256 + (dist >>> 7)];
};


/* ===========================================================================
 * Output a short LSB first on the stream.
 * IN assertion: there is enough room in pendingBuf.
 */
const put_short = (s, w) => {
//    put_byte(s, (uch)((w) & 0xff));
//    put_byte(s, (uch)((ush)(w) >> 8));
  s.pending_buf[s.pending++] = (w) & 0xff;
  s.pending_buf[s.pending++] = (w >>> 8) & 0xff;
};


/* ===========================================================================
 * Send a value on a given number of bits.
 * IN assertion: length <= 16 and value fits in length bits.
 */
const send_bits = (s, value, length) => {

  if (s.bi_valid > (Buf_size - length)) {
    s.bi_buf |= (value << s.bi_valid) & 0xffff;
    put_short(s, s.bi_buf);
    s.bi_buf = value >> (Buf_size - s.bi_valid);
    s.bi_valid += length - Buf_size;
  } else {
    s.bi_buf |= (value << s.bi_valid) & 0xffff;
    s.bi_valid += length;
  }
};


const send_code = (s, c, tree) => {

  send_bits(s, tree[c * 2]/*.Code*/, tree[c * 2 + 1]/*.Len*/);
};


/* ===========================================================================
 * Reverse the first len bits of a code, using straightforward code (a faster
 * method would use a table)
 * IN assertion: 1 <= len <= 15
 */
const bi_reverse = (code, len) => {

  let res = 0;
  do {
    res |= code & 1;
    code >>>= 1;
    res <<= 1;
  } while (--len > 0);
  return res >>> 1;
};


/* ===========================================================================
 * Flush the bit buffer, keeping at most 7 bits in it.
 */
const bi_flush = (s) => {

  if (s.bi_valid === 16) {
    put_short(s, s.bi_buf);
    s.bi_buf = 0;
    s.bi_valid = 0;

  } else if (s.bi_valid >= 8) {
    s.pending_buf[s.pending++] = s.bi_buf & 0xff;
    s.bi_buf >>= 8;
    s.bi_valid -= 8;
  }
};


/* ===========================================================================
 * Compute the optimal bit lengths for a tree and update the total bit length
 * for the current block.
 * IN assertion: the fields freq and dad are set, heap[heap_max] and
 *    above are the tree nodes sorted by increasing frequency.
 * OUT assertions: the field len is set to the optimal bit length, the
 *     array bl_count contains the frequencies for each bit length.
 *     The length opt_len is updated; static_len is also updated if stree is
 *     not null.
 */
const gen_bitlen = (s, desc) => {
//    deflate_state *s;
//    tree_desc *desc;    /* the tree descriptor */

  const tree            = desc.dyn_tree;
  const max_code        = desc.max_code;
  const stree           = desc.stat_desc.static_tree;
  const has_stree       = desc.stat_desc.has_stree;
  const extra           = desc.stat_desc.extra_bits;
  const base            = desc.stat_desc.extra_base;
  const max_length      = desc.stat_desc.max_length;
  let h;              /* heap index */
  let n, m;           /* iterate over the tree elements */
  let bits;           /* bit length */
  let xbits;          /* extra bits */
  let f;              /* frequency */
  let overflow = 0;   /* number of elements with bit length too large */

  for (bits = 0; bits <= MAX_BITS$1; bits++) {
    s.bl_count[bits] = 0;
  }

  /* In a first pass, compute the optimal bit lengths (which may
   * overflow in the case of the bit length tree).
   */
  tree[s.heap[s.heap_max] * 2 + 1]/*.Len*/ = 0; /* root of the heap */

  for (h = s.heap_max + 1; h < HEAP_SIZE$1; h++) {
    n = s.heap[h];
    bits = tree[tree[n * 2 + 1]/*.Dad*/ * 2 + 1]/*.Len*/ + 1;
    if (bits > max_length) {
      bits = max_length;
      overflow++;
    }
    tree[n * 2 + 1]/*.Len*/ = bits;
    /* We overwrite tree[n].Dad which is no longer needed */

    if (n > max_code) { continue; } /* not a leaf node */

    s.bl_count[bits]++;
    xbits = 0;
    if (n >= base) {
      xbits = extra[n - base];
    }
    f = tree[n * 2]/*.Freq*/;
    s.opt_len += f * (bits + xbits);
    if (has_stree) {
      s.static_len += f * (stree[n * 2 + 1]/*.Len*/ + xbits);
    }
  }
  if (overflow === 0) { return; }

  // Tracev((stderr,"\nbit length overflow\n"));
  /* This happens for example on obj2 and pic of the Calgary corpus */

  /* Find the first bit length which could increase: */
  do {
    bits = max_length - 1;
    while (s.bl_count[bits] === 0) { bits--; }
    s.bl_count[bits]--;      /* move one leaf down the tree */
    s.bl_count[bits + 1] += 2; /* move one overflow item as its brother */
    s.bl_count[max_length]--;
    /* The brother of the overflow item also moves one step up,
     * but this does not affect bl_count[max_length]
     */
    overflow -= 2;
  } while (overflow > 0);

  /* Now recompute all bit lengths, scanning in increasing frequency.
   * h is still equal to HEAP_SIZE. (It is simpler to reconstruct all
   * lengths instead of fixing only the wrong ones. This idea is taken
   * from 'ar' written by Haruhiko Okumura.)
   */
  for (bits = max_length; bits !== 0; bits--) {
    n = s.bl_count[bits];
    while (n !== 0) {
      m = s.heap[--h];
      if (m > max_code) { continue; }
      if (tree[m * 2 + 1]/*.Len*/ !== bits) {
        // Tracev((stderr,"code %d bits %d->%d\n", m, tree[m].Len, bits));
        s.opt_len += (bits - tree[m * 2 + 1]/*.Len*/) * tree[m * 2]/*.Freq*/;
        tree[m * 2 + 1]/*.Len*/ = bits;
      }
      n--;
    }
  }
};


/* ===========================================================================
 * Generate the codes for a given tree and bit counts (which need not be
 * optimal).
 * IN assertion: the array bl_count contains the bit length statistics for
 * the given tree and the field len is set for all tree elements.
 * OUT assertion: the field code is set for all tree elements of non
 *     zero code length.
 */
const gen_codes = (tree, max_code, bl_count) => {
//    ct_data *tree;             /* the tree to decorate */
//    int max_code;              /* largest code with non zero frequency */
//    ushf *bl_count;            /* number of codes at each bit length */

  const next_code = new Array(MAX_BITS$1 + 1); /* next code value for each bit length */
  let code = 0;              /* running code value */
  let bits;                  /* bit index */
  let n;                     /* code index */

  /* The distribution counts are first used to generate the code values
   * without bit reversal.
   */
  for (bits = 1; bits <= MAX_BITS$1; bits++) {
    code = (code + bl_count[bits - 1]) << 1;
    next_code[bits] = code;
  }
  /* Check that the bit counts in bl_count are consistent. The last code
   * must be all ones.
   */
  //Assert (code + bl_count[MAX_BITS]-1 == (1<<MAX_BITS)-1,
  //        "inconsistent bit counts");
  //Tracev((stderr,"\ngen_codes: max_code %d ", max_code));

  for (n = 0;  n <= max_code; n++) {
    let len = tree[n * 2 + 1]/*.Len*/;
    if (len === 0) { continue; }
    /* Now reverse the bits */
    tree[n * 2]/*.Code*/ = bi_reverse(next_code[len]++, len);

    //Tracecv(tree != static_ltree, (stderr,"\nn %3d %c l %2d c %4x (%x) ",
    //     n, (isgraph(n) ? n : ' '), len, tree[n].Code, next_code[len]-1));
  }
};


/* ===========================================================================
 * Initialize the various 'constant' tables.
 */
const tr_static_init = () => {

  let n;        /* iterates over tree elements */
  let bits;     /* bit counter */
  let length;   /* length value */
  let code;     /* code value */
  let dist;     /* distance index */
  const bl_count = new Array(MAX_BITS$1 + 1);
  /* number of codes at each bit length for an optimal tree */

  // do check in _tr_init()
  //if (static_init_done) return;

  /* For some embedded targets, global variables are not initialized: */
/*#ifdef NO_INIT_GLOBAL_POINTERS
  static_l_desc.static_tree = static_ltree;
  static_l_desc.extra_bits = extra_lbits;
  static_d_desc.static_tree = static_dtree;
  static_d_desc.extra_bits = extra_dbits;
  static_bl_desc.extra_bits = extra_blbits;
#endif*/

  /* Initialize the mapping length (0..255) -> length code (0..28) */
  length = 0;
  for (code = 0; code < LENGTH_CODES$1 - 1; code++) {
    base_length[code] = length;
    for (n = 0; n < (1 << extra_lbits[code]); n++) {
      _length_code[length++] = code;
    }
  }
  //Assert (length == 256, "tr_static_init: length != 256");
  /* Note that the length 255 (match length 258) can be represented
   * in two different ways: code 284 + 5 bits or code 285, so we
   * overwrite length_code[255] to use the best encoding:
   */
  _length_code[length - 1] = code;

  /* Initialize the mapping dist (0..32K) -> dist code (0..29) */
  dist = 0;
  for (code = 0; code < 16; code++) {
    base_dist[code] = dist;
    for (n = 0; n < (1 << extra_dbits[code]); n++) {
      _dist_code[dist++] = code;
    }
  }
  //Assert (dist == 256, "tr_static_init: dist != 256");
  dist >>= 7; /* from now on, all distances are divided by 128 */
  for (; code < D_CODES$1; code++) {
    base_dist[code] = dist << 7;
    for (n = 0; n < (1 << (extra_dbits[code] - 7)); n++) {
      _dist_code[256 + dist++] = code;
    }
  }
  //Assert (dist == 256, "tr_static_init: 256+dist != 512");

  /* Construct the codes of the static literal tree */
  for (bits = 0; bits <= MAX_BITS$1; bits++) {
    bl_count[bits] = 0;
  }

  n = 0;
  while (n <= 143) {
    static_ltree[n * 2 + 1]/*.Len*/ = 8;
    n++;
    bl_count[8]++;
  }
  while (n <= 255) {
    static_ltree[n * 2 + 1]/*.Len*/ = 9;
    n++;
    bl_count[9]++;
  }
  while (n <= 279) {
    static_ltree[n * 2 + 1]/*.Len*/ = 7;
    n++;
    bl_count[7]++;
  }
  while (n <= 287) {
    static_ltree[n * 2 + 1]/*.Len*/ = 8;
    n++;
    bl_count[8]++;
  }
  /* Codes 286 and 287 do not exist, but we must include them in the
   * tree construction to get a canonical Huffman tree (longest code
   * all ones)
   */
  gen_codes(static_ltree, L_CODES$1 + 1, bl_count);

  /* The static distance tree is trivial: */
  for (n = 0; n < D_CODES$1; n++) {
    static_dtree[n * 2 + 1]/*.Len*/ = 5;
    static_dtree[n * 2]/*.Code*/ = bi_reverse(n, 5);
  }

  // Now data ready and we can init static trees
  static_l_desc = new StaticTreeDesc(static_ltree, extra_lbits, LITERALS$1 + 1, L_CODES$1, MAX_BITS$1);
  static_d_desc = new StaticTreeDesc(static_dtree, extra_dbits, 0,          D_CODES$1, MAX_BITS$1);
  static_bl_desc = new StaticTreeDesc(new Array(0), extra_blbits, 0,         BL_CODES$1, MAX_BL_BITS);

  //static_init_done = true;
};


/* ===========================================================================
 * Initialize a new block.
 */
const init_block = (s) => {

  let n; /* iterates over tree elements */

  /* Initialize the trees. */
  for (n = 0; n < L_CODES$1;  n++) { s.dyn_ltree[n * 2]/*.Freq*/ = 0; }
  for (n = 0; n < D_CODES$1;  n++) { s.dyn_dtree[n * 2]/*.Freq*/ = 0; }
  for (n = 0; n < BL_CODES$1; n++) { s.bl_tree[n * 2]/*.Freq*/ = 0; }

  s.dyn_ltree[END_BLOCK * 2]/*.Freq*/ = 1;
  s.opt_len = s.static_len = 0;
  s.sym_next = s.matches = 0;
};


/* ===========================================================================
 * Flush the bit buffer and align the output on a byte boundary
 */
const bi_windup = (s) =>
{
  if (s.bi_valid > 8) {
    put_short(s, s.bi_buf);
  } else if (s.bi_valid > 0) {
    //put_byte(s, (Byte)s->bi_buf);
    s.pending_buf[s.pending++] = s.bi_buf;
  }
  s.bi_buf = 0;
  s.bi_valid = 0;
};

/* ===========================================================================
 * Compares to subtrees, using the tree depth as tie breaker when
 * the subtrees have equal frequency. This minimizes the worst case length.
 */
const smaller = (tree, n, m, depth) => {

  const _n2 = n * 2;
  const _m2 = m * 2;
  return (tree[_n2]/*.Freq*/ < tree[_m2]/*.Freq*/ ||
         (tree[_n2]/*.Freq*/ === tree[_m2]/*.Freq*/ && depth[n] <= depth[m]));
};

/* ===========================================================================
 * Restore the heap property by moving down the tree starting at node k,
 * exchanging a node with the smallest of its two sons if necessary, stopping
 * when the heap property is re-established (each father smaller than its
 * two sons).
 */
const pqdownheap = (s, tree, k) => {
//    deflate_state *s;
//    ct_data *tree;  /* the tree to restore */
//    int k;               /* node to move down */

  const v = s.heap[k];
  let j = k << 1;  /* left son of k */
  while (j <= s.heap_len) {
    /* Set j to the smallest of the two sons: */
    if (j < s.heap_len &&
      smaller(tree, s.heap[j + 1], s.heap[j], s.depth)) {
      j++;
    }
    /* Exit if v is smaller than both sons */
    if (smaller(tree, v, s.heap[j], s.depth)) { break; }

    /* Exchange v with the smallest son */
    s.heap[k] = s.heap[j];
    k = j;

    /* And continue down the tree, setting j to the left son of k */
    j <<= 1;
  }
  s.heap[k] = v;
};


// inlined manually
// const SMALLEST = 1;

/* ===========================================================================
 * Send the block data compressed using the given Huffman trees
 */
const compress_block = (s, ltree, dtree) => {
//    deflate_state *s;
//    const ct_data *ltree; /* literal tree */
//    const ct_data *dtree; /* distance tree */

  let dist;           /* distance of matched string */
  let lc;             /* match length or unmatched char (if dist == 0) */
  let sx = 0;         /* running index in sym_buf */
  let code;           /* the code to send */
  let extra;          /* number of extra bits to send */

  if (s.sym_next !== 0) {
    do {
      dist = s.pending_buf[s.sym_buf + sx++] & 0xff;
      dist += (s.pending_buf[s.sym_buf + sx++] & 0xff) << 8;
      lc = s.pending_buf[s.sym_buf + sx++];
      if (dist === 0) {
        send_code(s, lc, ltree); /* send a literal byte */
        //Tracecv(isgraph(lc), (stderr," '%c' ", lc));
      } else {
        /* Here, lc is the match length - MIN_MATCH */
        code = _length_code[lc];
        send_code(s, code + LITERALS$1 + 1, ltree); /* send the length code */
        extra = extra_lbits[code];
        if (extra !== 0) {
          lc -= base_length[code];
          send_bits(s, lc, extra);       /* send the extra length bits */
        }
        dist--; /* dist is now the match distance - 1 */
        code = d_code(dist);
        //Assert (code < D_CODES, "bad d_code");

        send_code(s, code, dtree);       /* send the distance code */
        extra = extra_dbits[code];
        if (extra !== 0) {
          dist -= base_dist[code];
          send_bits(s, dist, extra);   /* send the extra distance bits */
        }
      } /* literal or match pair ? */

      /* Check that the overlay between pending_buf and sym_buf is ok: */
      //Assert(s->pending < s->lit_bufsize + sx, "pendingBuf overflow");

    } while (sx < s.sym_next);
  }

  send_code(s, END_BLOCK, ltree);
};


/* ===========================================================================
 * Construct one Huffman tree and assigns the code bit strings and lengths.
 * Update the total bit length for the current block.
 * IN assertion: the field freq is set for all tree elements.
 * OUT assertions: the fields len and code are set to the optimal bit length
 *     and corresponding code. The length opt_len is updated; static_len is
 *     also updated if stree is not null. The field max_code is set.
 */
const build_tree = (s, desc) => {
//    deflate_state *s;
//    tree_desc *desc; /* the tree descriptor */

  const tree     = desc.dyn_tree;
  const stree    = desc.stat_desc.static_tree;
  const has_stree = desc.stat_desc.has_stree;
  const elems    = desc.stat_desc.elems;
  let n, m;          /* iterate over heap elements */
  let max_code = -1; /* largest code with non zero frequency */
  let node;          /* new node being created */

  /* Construct the initial heap, with least frequent element in
   * heap[SMALLEST]. The sons of heap[n] are heap[2*n] and heap[2*n+1].
   * heap[0] is not used.
   */
  s.heap_len = 0;
  s.heap_max = HEAP_SIZE$1;

  for (n = 0; n < elems; n++) {
    if (tree[n * 2]/*.Freq*/ !== 0) {
      s.heap[++s.heap_len] = max_code = n;
      s.depth[n] = 0;

    } else {
      tree[n * 2 + 1]/*.Len*/ = 0;
    }
  }

  /* The pkzip format requires that at least one distance code exists,
   * and that at least one bit should be sent even if there is only one
   * possible code. So to avoid special checks later on we force at least
   * two codes of non zero frequency.
   */
  while (s.heap_len < 2) {
    node = s.heap[++s.heap_len] = (max_code < 2 ? ++max_code : 0);
    tree[node * 2]/*.Freq*/ = 1;
    s.depth[node] = 0;
    s.opt_len--;

    if (has_stree) {
      s.static_len -= stree[node * 2 + 1]/*.Len*/;
    }
    /* node is 0 or 1 so it does not have extra bits */
  }
  desc.max_code = max_code;

  /* The elements heap[heap_len/2+1 .. heap_len] are leaves of the tree,
   * establish sub-heaps of increasing lengths:
   */
  for (n = (s.heap_len >> 1/*int /2*/); n >= 1; n--) { pqdownheap(s, tree, n); }

  /* Construct the Huffman tree by repeatedly combining the least two
   * frequent nodes.
   */
  node = elems;              /* next internal node of the tree */
  do {
    //pqremove(s, tree, n);  /* n = node of least frequency */
    /*** pqremove ***/
    n = s.heap[1/*SMALLEST*/];
    s.heap[1/*SMALLEST*/] = s.heap[s.heap_len--];
    pqdownheap(s, tree, 1/*SMALLEST*/);
    /***/

    m = s.heap[1/*SMALLEST*/]; /* m = node of next least frequency */

    s.heap[--s.heap_max] = n; /* keep the nodes sorted by frequency */
    s.heap[--s.heap_max] = m;

    /* Create a new node father of n and m */
    tree[node * 2]/*.Freq*/ = tree[n * 2]/*.Freq*/ + tree[m * 2]/*.Freq*/;
    s.depth[node] = (s.depth[n] >= s.depth[m] ? s.depth[n] : s.depth[m]) + 1;
    tree[n * 2 + 1]/*.Dad*/ = tree[m * 2 + 1]/*.Dad*/ = node;

    /* and insert the new node in the heap */
    s.heap[1/*SMALLEST*/] = node++;
    pqdownheap(s, tree, 1/*SMALLEST*/);

  } while (s.heap_len >= 2);

  s.heap[--s.heap_max] = s.heap[1/*SMALLEST*/];

  /* At this point, the fields freq and dad are set. We can now
   * generate the bit lengths.
   */
  gen_bitlen(s, desc);

  /* The field len is now set, we can generate the bit codes */
  gen_codes(tree, max_code, s.bl_count);
};


/* ===========================================================================
 * Scan a literal or distance tree to determine the frequencies of the codes
 * in the bit length tree.
 */
const scan_tree = (s, tree, max_code) => {
//    deflate_state *s;
//    ct_data *tree;   /* the tree to be scanned */
//    int max_code;    /* and its largest code of non zero frequency */

  let n;                     /* iterates over all tree elements */
  let prevlen = -1;          /* last emitted length */
  let curlen;                /* length of current code */

  let nextlen = tree[0 * 2 + 1]/*.Len*/; /* length of next code */

  let count = 0;             /* repeat count of the current code */
  let max_count = 7;         /* max repeat count */
  let min_count = 4;         /* min repeat count */

  if (nextlen === 0) {
    max_count = 138;
    min_count = 3;
  }
  tree[(max_code + 1) * 2 + 1]/*.Len*/ = 0xffff; /* guard */

  for (n = 0; n <= max_code; n++) {
    curlen = nextlen;
    nextlen = tree[(n + 1) * 2 + 1]/*.Len*/;

    if (++count < max_count && curlen === nextlen) {
      continue;

    } else if (count < min_count) {
      s.bl_tree[curlen * 2]/*.Freq*/ += count;

    } else if (curlen !== 0) {

      if (curlen !== prevlen) { s.bl_tree[curlen * 2]/*.Freq*/++; }
      s.bl_tree[REP_3_6 * 2]/*.Freq*/++;

    } else if (count <= 10) {
      s.bl_tree[REPZ_3_10 * 2]/*.Freq*/++;

    } else {
      s.bl_tree[REPZ_11_138 * 2]/*.Freq*/++;
    }

    count = 0;
    prevlen = curlen;

    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;

    } else if (curlen === nextlen) {
      max_count = 6;
      min_count = 3;

    } else {
      max_count = 7;
      min_count = 4;
    }
  }
};


/* ===========================================================================
 * Send a literal or distance tree in compressed form, using the codes in
 * bl_tree.
 */
const send_tree = (s, tree, max_code) => {
//    deflate_state *s;
//    ct_data *tree; /* the tree to be scanned */
//    int max_code;       /* and its largest code of non zero frequency */

  let n;                     /* iterates over all tree elements */
  let prevlen = -1;          /* last emitted length */
  let curlen;                /* length of current code */

  let nextlen = tree[0 * 2 + 1]/*.Len*/; /* length of next code */

  let count = 0;             /* repeat count of the current code */
  let max_count = 7;         /* max repeat count */
  let min_count = 4;         /* min repeat count */

  /* tree[max_code+1].Len = -1; */  /* guard already set */
  if (nextlen === 0) {
    max_count = 138;
    min_count = 3;
  }

  for (n = 0; n <= max_code; n++) {
    curlen = nextlen;
    nextlen = tree[(n + 1) * 2 + 1]/*.Len*/;

    if (++count < max_count && curlen === nextlen) {
      continue;

    } else if (count < min_count) {
      do { send_code(s, curlen, s.bl_tree); } while (--count !== 0);

    } else if (curlen !== 0) {
      if (curlen !== prevlen) {
        send_code(s, curlen, s.bl_tree);
        count--;
      }
      //Assert(count >= 3 && count <= 6, " 3_6?");
      send_code(s, REP_3_6, s.bl_tree);
      send_bits(s, count - 3, 2);

    } else if (count <= 10) {
      send_code(s, REPZ_3_10, s.bl_tree);
      send_bits(s, count - 3, 3);

    } else {
      send_code(s, REPZ_11_138, s.bl_tree);
      send_bits(s, count - 11, 7);
    }

    count = 0;
    prevlen = curlen;
    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;

    } else if (curlen === nextlen) {
      max_count = 6;
      min_count = 3;

    } else {
      max_count = 7;
      min_count = 4;
    }
  }
};


/* ===========================================================================
 * Construct the Huffman tree for the bit lengths and return the index in
 * bl_order of the last bit length code to send.
 */
const build_bl_tree = (s) => {

  let max_blindex;  /* index of last bit length code of non zero freq */

  /* Determine the bit length frequencies for literal and distance trees */
  scan_tree(s, s.dyn_ltree, s.l_desc.max_code);
  scan_tree(s, s.dyn_dtree, s.d_desc.max_code);

  /* Build the bit length tree: */
  build_tree(s, s.bl_desc);
  /* opt_len now includes the length of the tree representations, except
   * the lengths of the bit lengths codes and the 5+5+4 bits for the counts.
   */

  /* Determine the number of bit length codes to send. The pkzip format
   * requires that at least 4 bit length codes be sent. (appnote.txt says
   * 3 but the actual value used is 4.)
   */
  for (max_blindex = BL_CODES$1 - 1; max_blindex >= 3; max_blindex--) {
    if (s.bl_tree[bl_order[max_blindex] * 2 + 1]/*.Len*/ !== 0) {
      break;
    }
  }
  /* Update opt_len to include the bit length tree and counts */
  s.opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4;
  //Tracev((stderr, "\ndyn trees: dyn %ld, stat %ld",
  //        s->opt_len, s->static_len));

  return max_blindex;
};


/* ===========================================================================
 * Send the header for a block using dynamic Huffman trees: the counts, the
 * lengths of the bit length codes, the literal tree and the distance tree.
 * IN assertion: lcodes >= 257, dcodes >= 1, blcodes >= 4.
 */
const send_all_trees = (s, lcodes, dcodes, blcodes) => {
//    deflate_state *s;
//    int lcodes, dcodes, blcodes; /* number of codes for each tree */

  let rank;                    /* index in bl_order */

  //Assert (lcodes >= 257 && dcodes >= 1 && blcodes >= 4, "not enough codes");
  //Assert (lcodes <= L_CODES && dcodes <= D_CODES && blcodes <= BL_CODES,
  //        "too many codes");
  //Tracev((stderr, "\nbl counts: "));
  send_bits(s, lcodes - 257, 5); /* not +255 as stated in appnote.txt */
  send_bits(s, dcodes - 1,   5);
  send_bits(s, blcodes - 4,  4); /* not -3 as stated in appnote.txt */
  for (rank = 0; rank < blcodes; rank++) {
    //Tracev((stderr, "\nbl code %2d ", bl_order[rank]));
    send_bits(s, s.bl_tree[bl_order[rank] * 2 + 1]/*.Len*/, 3);
  }
  //Tracev((stderr, "\nbl tree: sent %ld", s->bits_sent));

  send_tree(s, s.dyn_ltree, lcodes - 1); /* literal tree */
  //Tracev((stderr, "\nlit tree: sent %ld", s->bits_sent));

  send_tree(s, s.dyn_dtree, dcodes - 1); /* distance tree */
  //Tracev((stderr, "\ndist tree: sent %ld", s->bits_sent));
};


/* ===========================================================================
 * Check if the data type is TEXT or BINARY, using the following algorithm:
 * - TEXT if the two conditions below are satisfied:
 *    a) There are no non-portable control characters belonging to the
 *       "block list" (0..6, 14..25, 28..31).
 *    b) There is at least one printable character belonging to the
 *       "allow list" (9 {TAB}, 10 {LF}, 13 {CR}, 32..255).
 * - BINARY otherwise.
 * - The following partially-portable control characters form a
 *   "gray list" that is ignored in this detection algorithm:
 *   (7 {BEL}, 8 {BS}, 11 {VT}, 12 {FF}, 26 {SUB}, 27 {ESC}).
 * IN assertion: the fields Freq of dyn_ltree are set.
 */
const detect_data_type = (s) => {
  /* block_mask is the bit mask of block-listed bytes
   * set bits 0..6, 14..25, and 28..31
   * 0xf3ffc07f = binary 11110011111111111100000001111111
   */
  let block_mask = 0xf3ffc07f;
  let n;

  /* Check for non-textual ("block-listed") bytes. */
  for (n = 0; n <= 31; n++, block_mask >>>= 1) {
    if ((block_mask & 1) && (s.dyn_ltree[n * 2]/*.Freq*/ !== 0)) {
      return Z_BINARY;
    }
  }

  /* Check for textual ("allow-listed") bytes. */
  if (s.dyn_ltree[9 * 2]/*.Freq*/ !== 0 || s.dyn_ltree[10 * 2]/*.Freq*/ !== 0 ||
      s.dyn_ltree[13 * 2]/*.Freq*/ !== 0) {
    return Z_TEXT;
  }
  for (n = 32; n < LITERALS$1; n++) {
    if (s.dyn_ltree[n * 2]/*.Freq*/ !== 0) {
      return Z_TEXT;
    }
  }

  /* There are no "block-listed" or "allow-listed" bytes:
   * this stream either is empty or has tolerated ("gray-listed") bytes only.
   */
  return Z_BINARY;
};


let static_init_done = false;

/* ===========================================================================
 * Initialize the tree data structures for a new zlib stream.
 */
const _tr_init$1 = (s) =>
{

  if (!static_init_done) {
    tr_static_init();
    static_init_done = true;
  }

  s.l_desc  = new TreeDesc(s.dyn_ltree, static_l_desc);
  s.d_desc  = new TreeDesc(s.dyn_dtree, static_d_desc);
  s.bl_desc = new TreeDesc(s.bl_tree, static_bl_desc);

  s.bi_buf = 0;
  s.bi_valid = 0;

  /* Initialize the first block of the first file: */
  init_block(s);
};


/* ===========================================================================
 * Send a stored block
 */
const _tr_stored_block$1 = (s, buf, stored_len, last) => {
//DeflateState *s;
//charf *buf;       /* input block */
//ulg stored_len;   /* length of input block */
//int last;         /* one if this is the last block for a file */

  send_bits(s, (STORED_BLOCK << 1) + (last ? 1 : 0), 3);    /* send block type */
  bi_windup(s);        /* align on byte boundary */
  put_short(s, stored_len);
  put_short(s, ~stored_len);
  if (stored_len) {
    s.pending_buf.set(s.window.subarray(buf, buf + stored_len), s.pending);
  }
  s.pending += stored_len;
};


/* ===========================================================================
 * Send one empty static block to give enough lookahead for inflate.
 * This takes 10 bits, of which 7 may remain in the bit buffer.
 */
const _tr_align$1 = (s) => {
  send_bits(s, STATIC_TREES << 1, 3);
  send_code(s, END_BLOCK, static_ltree);
  bi_flush(s);
};


/* ===========================================================================
 * Determine the best encoding for the current block: dynamic trees, static
 * trees or store, and write out the encoded block.
 */
const _tr_flush_block$1 = (s, buf, stored_len, last) => {
//DeflateState *s;
//charf *buf;       /* input block, or NULL if too old */
//ulg stored_len;   /* length of input block */
//int last;         /* one if this is the last block for a file */

  let opt_lenb, static_lenb;  /* opt_len and static_len in bytes */
  let max_blindex = 0;        /* index of last bit length code of non zero freq */

  /* Build the Huffman trees unless a stored block is forced */
  if (s.level > 0) {

    /* Check if the file is binary or text */
    if (s.strm.data_type === Z_UNKNOWN$1) {
      s.strm.data_type = detect_data_type(s);
    }

    /* Construct the literal and distance trees */
    build_tree(s, s.l_desc);
    // Tracev((stderr, "\nlit data: dyn %ld, stat %ld", s->opt_len,
    //        s->static_len));

    build_tree(s, s.d_desc);
    // Tracev((stderr, "\ndist data: dyn %ld, stat %ld", s->opt_len,
    //        s->static_len));
    /* At this point, opt_len and static_len are the total bit lengths of
     * the compressed block data, excluding the tree representations.
     */

    /* Build the bit length tree for the above two trees, and get the index
     * in bl_order of the last bit length code to send.
     */
    max_blindex = build_bl_tree(s);

    /* Determine the best encoding. Compute the block lengths in bytes. */
    opt_lenb = (s.opt_len + 3 + 7) >>> 3;
    static_lenb = (s.static_len + 3 + 7) >>> 3;

    // Tracev((stderr, "\nopt %lu(%lu) stat %lu(%lu) stored %lu lit %u ",
    //        opt_lenb, s->opt_len, static_lenb, s->static_len, stored_len,
    //        s->sym_next / 3));

    if (static_lenb <= opt_lenb) { opt_lenb = static_lenb; }

  } else {
    // Assert(buf != (char*)0, "lost buf");
    opt_lenb = static_lenb = stored_len + 5; /* force a stored block */
  }

  if ((stored_len + 4 <= opt_lenb) && (buf !== -1)) {
    /* 4: two words for the lengths */

    /* The test buf != NULL is only necessary if LIT_BUFSIZE > WSIZE.
     * Otherwise we can't have processed more than WSIZE input bytes since
     * the last block flush, because compression would have been
     * successful. If LIT_BUFSIZE <= WSIZE, it is never too late to
     * transform a block into a stored block.
     */
    _tr_stored_block$1(s, buf, stored_len, last);

  } else if (s.strategy === Z_FIXED$1 || static_lenb === opt_lenb) {

    send_bits(s, (STATIC_TREES << 1) + (last ? 1 : 0), 3);
    compress_block(s, static_ltree, static_dtree);

  } else {
    send_bits(s, (DYN_TREES << 1) + (last ? 1 : 0), 3);
    send_all_trees(s, s.l_desc.max_code + 1, s.d_desc.max_code + 1, max_blindex + 1);
    compress_block(s, s.dyn_ltree, s.dyn_dtree);
  }
  // Assert (s->compressed_len == s->bits_sent, "bad compressed size");
  /* The above check is made mod 2^32, for files larger than 512 MB
   * and uLong implemented on 32 bits.
   */
  init_block(s);

  if (last) {
    bi_windup(s);
  }
  // Tracev((stderr,"\ncomprlen %lu(%lu) ", s->compressed_len>>3,
  //       s->compressed_len-7*last));
};

/* ===========================================================================
 * Save the match info and tally the frequency counts. Return true if
 * the current block must be flushed.
 */
const _tr_tally$1 = (s, dist, lc) => {
//    deflate_state *s;
//    unsigned dist;  /* distance of matched string */
//    unsigned lc;    /* match length-MIN_MATCH or unmatched char (if dist==0) */

  s.pending_buf[s.sym_buf + s.sym_next++] = dist;
  s.pending_buf[s.sym_buf + s.sym_next++] = dist >> 8;
  s.pending_buf[s.sym_buf + s.sym_next++] = lc;
  if (dist === 0) {
    /* lc is the unmatched char */
    s.dyn_ltree[lc * 2]/*.Freq*/++;
  } else {
    s.matches++;
    /* Here, lc is the match length - MIN_MATCH */
    dist--;             /* dist = match distance - 1 */
    //Assert((ush)dist < (ush)MAX_DIST(s) &&
    //       (ush)lc <= (ush)(MAX_MATCH-MIN_MATCH) &&
    //       (ush)d_code(dist) < (ush)D_CODES,  "_tr_tally: bad match");

    s.dyn_ltree[(_length_code[lc] + LITERALS$1 + 1) * 2]/*.Freq*/++;
    s.dyn_dtree[d_code(dist) * 2]/*.Freq*/++;
  }

  return (s.sym_next === s.sym_end);
};

var _tr_init_1  = _tr_init$1;
var _tr_stored_block_1 = _tr_stored_block$1;
var _tr_flush_block_1  = _tr_flush_block$1;
var _tr_tally_1 = _tr_tally$1;
var _tr_align_1 = _tr_align$1;

var trees = {
	_tr_init: _tr_init_1,
	_tr_stored_block: _tr_stored_block_1,
	_tr_flush_block: _tr_flush_block_1,
	_tr_tally: _tr_tally_1,
	_tr_align: _tr_align_1
};

// Note: adler32 takes 12% for level 0 and 2% for level 6.
// It isn't worth it to make additional optimizations as in original.
// Small size is preferable.

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

const adler32 = (adler, buf, len, pos) => {
  let s1 = (adler & 0xffff) |0,
      s2 = ((adler >>> 16) & 0xffff) |0,
      n = 0;

  while (len !== 0) {
    // Set limit ~ twice less than 5552, to keep
    // s2 in 31-bits, because we force signed ints.
    // in other case %= will fail.
    n = len > 2000 ? 2000 : len;
    len -= n;

    do {
      s1 = (s1 + buf[pos++]) |0;
      s2 = (s2 + s1) |0;
    } while (--n);

    s1 %= 65521;
    s2 %= 65521;
  }

  return (s1 | (s2 << 16)) |0;
};


var adler32_1 = adler32;

// Note: we can't get significant speed boost here.
// So write code to minimize size - no pregenerated tables
// and array tools dependencies.

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

// Use ordinary array, since untyped makes no boost here
const makeTable = () => {
  let c, table = [];

  for (var n = 0; n < 256; n++) {
    c = n;
    for (var k = 0; k < 8; k++) {
      c = ((c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1));
    }
    table[n] = c;
  }

  return table;
};

// Create table on load. Just 255 signed longs. Not a problem.
const crcTable$1 = new Uint32Array(makeTable());


const crc32 = (crc, buf, len, pos) => {
  const t = crcTable$1;
  const end = pos + len;

  crc ^= -1;

  for (let i = pos; i < end; i++) {
    crc = (crc >>> 8) ^ t[(crc ^ buf[i]) & 0xFF];
  }

  return (crc ^ (-1)); // >>> 0;
};


var crc32_1 = crc32;

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

var messages = {
  2:      'need dictionary',     /* Z_NEED_DICT       2  */
  1:      'stream end',          /* Z_STREAM_END      1  */
  0:      '',                    /* Z_OK              0  */
  '-1':   'file error',          /* Z_ERRNO         (-1) */
  '-2':   'stream error',        /* Z_STREAM_ERROR  (-2) */
  '-3':   'data error',          /* Z_DATA_ERROR    (-3) */
  '-4':   'insufficient memory', /* Z_MEM_ERROR     (-4) */
  '-5':   'buffer error',        /* Z_BUF_ERROR     (-5) */
  '-6':   'incompatible version' /* Z_VERSION_ERROR (-6) */
};

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

var constants$2 = {

  /* Allowed flush values; see deflate() and inflate() below for details */
  Z_NO_FLUSH:         0,
  Z_PARTIAL_FLUSH:    1,
  Z_SYNC_FLUSH:       2,
  Z_FULL_FLUSH:       3,
  Z_FINISH:           4,
  Z_BLOCK:            5,
  Z_TREES:            6,

  /* Return codes for the compression/decompression functions. Negative values
  * are errors, positive values are used for special but normal events.
  */
  Z_OK:               0,
  Z_STREAM_END:       1,
  Z_NEED_DICT:        2,
  Z_ERRNO:           -1,
  Z_STREAM_ERROR:    -2,
  Z_DATA_ERROR:      -3,
  Z_MEM_ERROR:       -4,
  Z_BUF_ERROR:       -5,
  //Z_VERSION_ERROR: -6,

  /* compression levels */
  Z_NO_COMPRESSION:         0,
  Z_BEST_SPEED:             1,
  Z_BEST_COMPRESSION:       9,
  Z_DEFAULT_COMPRESSION:   -1,


  Z_FILTERED:               1,
  Z_HUFFMAN_ONLY:           2,
  Z_RLE:                    3,
  Z_FIXED:                  4,
  Z_DEFAULT_STRATEGY:       0,

  /* Possible values of the data_type field (though see inflate()) */
  Z_BINARY:                 0,
  Z_TEXT:                   1,
  //Z_ASCII:                1, // = Z_TEXT (deprecated)
  Z_UNKNOWN:                2,

  /* The deflate compression method */
  Z_DEFLATED:               8
  //Z_NULL:                 null // Use -1 or null inline, depending on var type
};

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

const { _tr_init, _tr_stored_block, _tr_flush_block, _tr_tally, _tr_align } = trees;




/* Public constants ==========================================================*/
/* ===========================================================================*/

const {
  Z_NO_FLUSH: Z_NO_FLUSH$2, Z_PARTIAL_FLUSH, Z_FULL_FLUSH: Z_FULL_FLUSH$1, Z_FINISH: Z_FINISH$3, Z_BLOCK: Z_BLOCK$1,
  Z_OK: Z_OK$3, Z_STREAM_END: Z_STREAM_END$3, Z_STREAM_ERROR: Z_STREAM_ERROR$2, Z_DATA_ERROR: Z_DATA_ERROR$2, Z_BUF_ERROR: Z_BUF_ERROR$1,
  Z_DEFAULT_COMPRESSION: Z_DEFAULT_COMPRESSION$1,
  Z_FILTERED, Z_HUFFMAN_ONLY, Z_RLE, Z_FIXED, Z_DEFAULT_STRATEGY: Z_DEFAULT_STRATEGY$1,
  Z_UNKNOWN,
  Z_DEFLATED: Z_DEFLATED$2
} = constants$2;

/*============================================================================*/


const MAX_MEM_LEVEL = 9;
/* Maximum value for memLevel in deflateInit2 */
const MAX_WBITS$1 = 15;
/* 32K LZ77 window */
const DEF_MEM_LEVEL = 8;


const LENGTH_CODES  = 29;
/* number of length codes, not counting the special END_BLOCK code */
const LITERALS      = 256;
/* number of literal bytes 0..255 */
const L_CODES       = LITERALS + 1 + LENGTH_CODES;
/* number of Literal or Length codes, including the END_BLOCK code */
const D_CODES       = 30;
/* number of distance codes */
const BL_CODES      = 19;
/* number of codes used to transfer the bit lengths */
const HEAP_SIZE     = 2 * L_CODES + 1;
/* maximum heap size */
const MAX_BITS  = 15;
/* All codes must not exceed MAX_BITS bits */

const MIN_MATCH = 3;
const MAX_MATCH = 258;
const MIN_LOOKAHEAD = (MAX_MATCH + MIN_MATCH + 1);

const PRESET_DICT = 0x20;

const INIT_STATE    =  42;    /* zlib header -> BUSY_STATE */
//#ifdef GZIP
const GZIP_STATE    =  57;    /* gzip header -> BUSY_STATE | EXTRA_STATE */
//#endif
const EXTRA_STATE   =  69;    /* gzip extra block -> NAME_STATE */
const NAME_STATE    =  73;    /* gzip file name -> COMMENT_STATE */
const COMMENT_STATE =  91;    /* gzip comment -> HCRC_STATE */
const HCRC_STATE    = 103;    /* gzip header CRC -> BUSY_STATE */
const BUSY_STATE    = 113;    /* deflate -> FINISH_STATE */
const FINISH_STATE  = 666;    /* stream complete */

const BS_NEED_MORE      = 1; /* block not completed, need more input or more output */
const BS_BLOCK_DONE     = 2; /* block flush performed */
const BS_FINISH_STARTED = 3; /* finish started, need only more output at next deflate */
const BS_FINISH_DONE    = 4; /* finish done, accept no more input or output */

const OS_CODE = 0x03; // Unix :) . Don't detect, use this default.

const err = (strm, errorCode) => {
  strm.msg = messages[errorCode];
  return errorCode;
};

const rank = (f) => {
  return ((f) * 2) - ((f) > 4 ? 9 : 0);
};

const zero = (buf) => {
  let len = buf.length; while (--len >= 0) { buf[len] = 0; }
};

/* ===========================================================================
 * Slide the hash table when sliding the window down (could be avoided with 32
 * bit values at the expense of memory usage). We slide even when level == 0 to
 * keep the hash table consistent if we switch back to level > 0 later.
 */
const slide_hash = (s) => {
  let n, m;
  let p;
  let wsize = s.w_size;

  n = s.hash_size;
  p = n;
  do {
    m = s.head[--p];
    s.head[p] = (m >= wsize ? m - wsize : 0);
  } while (--n);
  n = wsize;
//#ifndef FASTEST
  p = n;
  do {
    m = s.prev[--p];
    s.prev[p] = (m >= wsize ? m - wsize : 0);
    /* If n is not on any hash chain, prev[n] is garbage but
     * its value will never be used.
     */
  } while (--n);
//#endif
};

/* eslint-disable new-cap */
let HASH_ZLIB = (s, prev, data) => ((prev << s.hash_shift) ^ data) & s.hash_mask;
// This hash causes less collisions, https://github.com/nodeca/pako/issues/135
// But breaks binary compatibility
//let HASH_FAST = (s, prev, data) => ((prev << 8) + (prev >> 8) + (data << 4)) & s.hash_mask;
let HASH = HASH_ZLIB;


/* =========================================================================
 * Flush as much pending output as possible. All deflate() output, except for
 * some deflate_stored() output, goes through this function so some
 * applications may wish to modify it to avoid allocating a large
 * strm->next_out buffer and copying into it. (See also read_buf()).
 */
const flush_pending = (strm) => {
  const s = strm.state;

  //_tr_flush_bits(s);
  let len = s.pending;
  if (len > strm.avail_out) {
    len = strm.avail_out;
  }
  if (len === 0) { return; }

  strm.output.set(s.pending_buf.subarray(s.pending_out, s.pending_out + len), strm.next_out);
  strm.next_out  += len;
  s.pending_out  += len;
  strm.total_out += len;
  strm.avail_out -= len;
  s.pending      -= len;
  if (s.pending === 0) {
    s.pending_out = 0;
  }
};


const flush_block_only = (s, last) => {
  _tr_flush_block(s, (s.block_start >= 0 ? s.block_start : -1), s.strstart - s.block_start, last);
  s.block_start = s.strstart;
  flush_pending(s.strm);
};


const put_byte = (s, b) => {
  s.pending_buf[s.pending++] = b;
};


/* =========================================================================
 * Put a short in the pending buffer. The 16-bit value is put in MSB order.
 * IN assertion: the stream state is correct and there is enough room in
 * pending_buf.
 */
const putShortMSB = (s, b) => {

  //  put_byte(s, (Byte)(b >> 8));
//  put_byte(s, (Byte)(b & 0xff));
  s.pending_buf[s.pending++] = (b >>> 8) & 0xff;
  s.pending_buf[s.pending++] = b & 0xff;
};


/* ===========================================================================
 * Read a new buffer from the current input stream, update the adler32
 * and total number of bytes read.  All deflate() input goes through
 * this function so some applications may wish to modify it to avoid
 * allocating a large strm->input buffer and copying from it.
 * (See also flush_pending()).
 */
const read_buf = (strm, buf, start, size) => {

  let len = strm.avail_in;

  if (len > size) { len = size; }
  if (len === 0) { return 0; }

  strm.avail_in -= len;

  // zmemcpy(buf, strm->next_in, len);
  buf.set(strm.input.subarray(strm.next_in, strm.next_in + len), start);
  if (strm.state.wrap === 1) {
    strm.adler = adler32_1(strm.adler, buf, len, start);
  }

  else if (strm.state.wrap === 2) {
    strm.adler = crc32_1(strm.adler, buf, len, start);
  }

  strm.next_in += len;
  strm.total_in += len;

  return len;
};


/* ===========================================================================
 * Set match_start to the longest match starting at the given string and
 * return its length. Matches shorter or equal to prev_length are discarded,
 * in which case the result is equal to prev_length and match_start is
 * garbage.
 * IN assertions: cur_match is the head of the hash chain for the current
 *   string (strstart) and its distance is <= MAX_DIST, and prev_length >= 1
 * OUT assertion: the match length is not greater than s->lookahead.
 */
const longest_match = (s, cur_match) => {

  let chain_length = s.max_chain_length;      /* max hash chain length */
  let scan = s.strstart; /* current string */
  let match;                       /* matched string */
  let len;                           /* length of current match */
  let best_len = s.prev_length;              /* best match length so far */
  let nice_match = s.nice_match;             /* stop if match long enough */
  const limit = (s.strstart > (s.w_size - MIN_LOOKAHEAD)) ?
      s.strstart - (s.w_size - MIN_LOOKAHEAD) : 0/*NIL*/;

  const _win = s.window; // shortcut

  const wmask = s.w_mask;
  const prev  = s.prev;

  /* Stop when cur_match becomes <= limit. To simplify the code,
   * we prevent matches with the string of window index 0.
   */

  const strend = s.strstart + MAX_MATCH;
  let scan_end1  = _win[scan + best_len - 1];
  let scan_end   = _win[scan + best_len];

  /* The code is optimized for HASH_BITS >= 8 and MAX_MATCH-2 multiple of 16.
   * It is easy to get rid of this optimization if necessary.
   */
  // Assert(s->hash_bits >= 8 && MAX_MATCH == 258, "Code too clever");

  /* Do not waste too much time if we already have a good match: */
  if (s.prev_length >= s.good_match) {
    chain_length >>= 2;
  }
  /* Do not look for matches beyond the end of the input. This is necessary
   * to make deflate deterministic.
   */
  if (nice_match > s.lookahead) { nice_match = s.lookahead; }

  // Assert((ulg)s->strstart <= s->window_size-MIN_LOOKAHEAD, "need lookahead");

  do {
    // Assert(cur_match < s->strstart, "no future");
    match = cur_match;

    /* Skip to next match if the match length cannot increase
     * or if the match length is less than 2.  Note that the checks below
     * for insufficient lookahead only occur occasionally for performance
     * reasons.  Therefore uninitialized memory will be accessed, and
     * conditional jumps will be made that depend on those values.
     * However the length of the match is limited to the lookahead, so
     * the output of deflate is not affected by the uninitialized values.
     */

    if (_win[match + best_len]     !== scan_end  ||
        _win[match + best_len - 1] !== scan_end1 ||
        _win[match]                !== _win[scan] ||
        _win[++match]              !== _win[scan + 1]) {
      continue;
    }

    /* The check at best_len-1 can be removed because it will be made
     * again later. (This heuristic is not always a win.)
     * It is not necessary to compare scan[2] and match[2] since they
     * are always equal when the other bytes match, given that
     * the hash keys are equal and that HASH_BITS >= 8.
     */
    scan += 2;
    match++;
    // Assert(*scan == *match, "match[2]?");

    /* We check for insufficient lookahead only every 8th comparison;
     * the 256th check will be made at strstart+258.
     */
    do {
      /*jshint noempty:false*/
    } while (_win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             scan < strend);

    // Assert(scan <= s->window+(unsigned)(s->window_size-1), "wild scan");

    len = MAX_MATCH - (strend - scan);
    scan = strend - MAX_MATCH;

    if (len > best_len) {
      s.match_start = cur_match;
      best_len = len;
      if (len >= nice_match) {
        break;
      }
      scan_end1  = _win[scan + best_len - 1];
      scan_end   = _win[scan + best_len];
    }
  } while ((cur_match = prev[cur_match & wmask]) > limit && --chain_length !== 0);

  if (best_len <= s.lookahead) {
    return best_len;
  }
  return s.lookahead;
};


/* ===========================================================================
 * Fill the window when the lookahead becomes insufficient.
 * Updates strstart and lookahead.
 *
 * IN assertion: lookahead < MIN_LOOKAHEAD
 * OUT assertions: strstart <= window_size-MIN_LOOKAHEAD
 *    At least one byte has been read, or avail_in == 0; reads are
 *    performed for at least two bytes (required for the zip translate_eol
 *    option -- not supported here).
 */
const fill_window = (s) => {

  const _w_size = s.w_size;
  let n, more, str;

  //Assert(s->lookahead < MIN_LOOKAHEAD, "already enough lookahead");

  do {
    more = s.window_size - s.lookahead - s.strstart;

    // JS ints have 32 bit, block below not needed
    /* Deal with !@#$% 64K limit: */
    //if (sizeof(int) <= 2) {
    //    if (more == 0 && s->strstart == 0 && s->lookahead == 0) {
    //        more = wsize;
    //
    //  } else if (more == (unsigned)(-1)) {
    //        /* Very unlikely, but possible on 16 bit machine if
    //         * strstart == 0 && lookahead == 1 (input done a byte at time)
    //         */
    //        more--;
    //    }
    //}


    /* If the window is almost full and there is insufficient lookahead,
     * move the upper half to the lower one to make room in the upper half.
     */
    if (s.strstart >= _w_size + (_w_size - MIN_LOOKAHEAD)) {

      s.window.set(s.window.subarray(_w_size, _w_size + _w_size - more), 0);
      s.match_start -= _w_size;
      s.strstart -= _w_size;
      /* we now have strstart >= MAX_DIST */
      s.block_start -= _w_size;
      if (s.insert > s.strstart) {
        s.insert = s.strstart;
      }
      slide_hash(s);
      more += _w_size;
    }
    if (s.strm.avail_in === 0) {
      break;
    }

    /* If there was no sliding:
     *    strstart <= WSIZE+MAX_DIST-1 && lookahead <= MIN_LOOKAHEAD - 1 &&
     *    more == window_size - lookahead - strstart
     * => more >= window_size - (MIN_LOOKAHEAD-1 + WSIZE + MAX_DIST-1)
     * => more >= window_size - 2*WSIZE + 2
     * In the BIG_MEM or MMAP case (not yet supported),
     *   window_size == input_size + MIN_LOOKAHEAD  &&
     *   strstart + s->lookahead <= input_size => more >= MIN_LOOKAHEAD.
     * Otherwise, window_size == 2*WSIZE so more >= 2.
     * If there was sliding, more >= WSIZE. So in all cases, more >= 2.
     */
    //Assert(more >= 2, "more < 2");
    n = read_buf(s.strm, s.window, s.strstart + s.lookahead, more);
    s.lookahead += n;

    /* Initialize the hash value now that we have some input: */
    if (s.lookahead + s.insert >= MIN_MATCH) {
      str = s.strstart - s.insert;
      s.ins_h = s.window[str];

      /* UPDATE_HASH(s, s->ins_h, s->window[str + 1]); */
      s.ins_h = HASH(s, s.ins_h, s.window[str + 1]);
//#if MIN_MATCH != 3
//        Call update_hash() MIN_MATCH-3 more times
//#endif
      while (s.insert) {
        /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */
        s.ins_h = HASH(s, s.ins_h, s.window[str + MIN_MATCH - 1]);

        s.prev[str & s.w_mask] = s.head[s.ins_h];
        s.head[s.ins_h] = str;
        str++;
        s.insert--;
        if (s.lookahead + s.insert < MIN_MATCH) {
          break;
        }
      }
    }
    /* If the whole input has less than MIN_MATCH bytes, ins_h is garbage,
     * but this is not important since only literal bytes will be emitted.
     */

  } while (s.lookahead < MIN_LOOKAHEAD && s.strm.avail_in !== 0);

  /* If the WIN_INIT bytes after the end of the current data have never been
   * written, then zero those bytes in order to avoid memory check reports of
   * the use of uninitialized (or uninitialised as Julian writes) bytes by
   * the longest match routines.  Update the high water mark for the next
   * time through here.  WIN_INIT is set to MAX_MATCH since the longest match
   * routines allow scanning to strstart + MAX_MATCH, ignoring lookahead.
   */
//  if (s.high_water < s.window_size) {
//    const curr = s.strstart + s.lookahead;
//    let init = 0;
//
//    if (s.high_water < curr) {
//      /* Previous high water mark below current data -- zero WIN_INIT
//       * bytes or up to end of window, whichever is less.
//       */
//      init = s.window_size - curr;
//      if (init > WIN_INIT)
//        init = WIN_INIT;
//      zmemzero(s->window + curr, (unsigned)init);
//      s->high_water = curr + init;
//    }
//    else if (s->high_water < (ulg)curr + WIN_INIT) {
//      /* High water mark at or above current data, but below current data
//       * plus WIN_INIT -- zero out to current data plus WIN_INIT, or up
//       * to end of window, whichever is less.
//       */
//      init = (ulg)curr + WIN_INIT - s->high_water;
//      if (init > s->window_size - s->high_water)
//        init = s->window_size - s->high_water;
//      zmemzero(s->window + s->high_water, (unsigned)init);
//      s->high_water += init;
//    }
//  }
//
//  Assert((ulg)s->strstart <= s->window_size - MIN_LOOKAHEAD,
//    "not enough room for search");
};

/* ===========================================================================
 * Copy without compression as much as possible from the input stream, return
 * the current block state.
 *
 * In case deflateParams() is used to later switch to a non-zero compression
 * level, s->matches (otherwise unused when storing) keeps track of the number
 * of hash table slides to perform. If s->matches is 1, then one hash table
 * slide will be done when switching. If s->matches is 2, the maximum value
 * allowed here, then the hash table will be cleared, since two or more slides
 * is the same as a clear.
 *
 * deflate_stored() is written to minimize the number of times an input byte is
 * copied. It is most efficient with large input and output buffers, which
 * maximizes the opportunites to have a single copy from next_in to next_out.
 */
const deflate_stored = (s, flush) => {

  /* Smallest worthy block size when not flushing or finishing. By default
   * this is 32K. This can be as small as 507 bytes for memLevel == 1. For
   * large input and output buffers, the stored block size will be larger.
   */
  let min_block = s.pending_buf_size - 5 > s.w_size ? s.w_size : s.pending_buf_size - 5;

  /* Copy as many min_block or larger stored blocks directly to next_out as
   * possible. If flushing, copy the remaining available input to next_out as
   * stored blocks, if there is enough space.
   */
  let len, left, have, last = 0;
  let used = s.strm.avail_in;
  do {
    /* Set len to the maximum size block that we can copy directly with the
     * available input data and output space. Set left to how much of that
     * would be copied from what's left in the window.
     */
    len = 65535/* MAX_STORED */;     /* maximum deflate stored block length */
    have = (s.bi_valid + 42) >> 3;     /* number of header bytes */
    if (s.strm.avail_out < have) {         /* need room for header */
      break;
    }
      /* maximum stored block length that will fit in avail_out: */
    have = s.strm.avail_out - have;
    left = s.strstart - s.block_start;  /* bytes left in window */
    if (len > left + s.strm.avail_in) {
      len = left + s.strm.avail_in;   /* limit len to the input */
    }
    if (len > have) {
      len = have;             /* limit len to the output */
    }

    /* If the stored block would be less than min_block in length, or if
     * unable to copy all of the available input when flushing, then try
     * copying to the window and the pending buffer instead. Also don't
     * write an empty block when flushing -- deflate() does that.
     */
    if (len < min_block && ((len === 0 && flush !== Z_FINISH$3) ||
                        flush === Z_NO_FLUSH$2 ||
                        len !== left + s.strm.avail_in)) {
      break;
    }

    /* Make a dummy stored block in pending to get the header bytes,
     * including any pending bits. This also updates the debugging counts.
     */
    last = flush === Z_FINISH$3 && len === left + s.strm.avail_in ? 1 : 0;
    _tr_stored_block(s, 0, 0, last);

    /* Replace the lengths in the dummy stored block with len. */
    s.pending_buf[s.pending - 4] = len;
    s.pending_buf[s.pending - 3] = len >> 8;
    s.pending_buf[s.pending - 2] = ~len;
    s.pending_buf[s.pending - 1] = ~len >> 8;

    /* Write the stored block header bytes. */
    flush_pending(s.strm);

//#ifdef ZLIB_DEBUG
//    /* Update debugging counts for the data about to be copied. */
//    s->compressed_len += len << 3;
//    s->bits_sent += len << 3;
//#endif

    /* Copy uncompressed bytes from the window to next_out. */
    if (left) {
      if (left > len) {
        left = len;
      }
      //zmemcpy(s->strm->next_out, s->window + s->block_start, left);
      s.strm.output.set(s.window.subarray(s.block_start, s.block_start + left), s.strm.next_out);
      s.strm.next_out += left;
      s.strm.avail_out -= left;
      s.strm.total_out += left;
      s.block_start += left;
      len -= left;
    }

    /* Copy uncompressed bytes directly from next_in to next_out, updating
     * the check value.
     */
    if (len) {
      read_buf(s.strm, s.strm.output, s.strm.next_out, len);
      s.strm.next_out += len;
      s.strm.avail_out -= len;
      s.strm.total_out += len;
    }
  } while (last === 0);

  /* Update the sliding window with the last s->w_size bytes of the copied
   * data, or append all of the copied data to the existing window if less
   * than s->w_size bytes were copied. Also update the number of bytes to
   * insert in the hash tables, in the event that deflateParams() switches to
   * a non-zero compression level.
   */
  used -= s.strm.avail_in;    /* number of input bytes directly copied */
  if (used) {
    /* If any input was used, then no unused input remains in the window,
     * therefore s->block_start == s->strstart.
     */
    if (used >= s.w_size) {  /* supplant the previous history */
      s.matches = 2;     /* clear hash */
      //zmemcpy(s->window, s->strm->next_in - s->w_size, s->w_size);
      s.window.set(s.strm.input.subarray(s.strm.next_in - s.w_size, s.strm.next_in), 0);
      s.strstart = s.w_size;
      s.insert = s.strstart;
    }
    else {
      if (s.window_size - s.strstart <= used) {
        /* Slide the window down. */
        s.strstart -= s.w_size;
        //zmemcpy(s->window, s->window + s->w_size, s->strstart);
        s.window.set(s.window.subarray(s.w_size, s.w_size + s.strstart), 0);
        if (s.matches < 2) {
          s.matches++;   /* add a pending slide_hash() */
        }
        if (s.insert > s.strstart) {
          s.insert = s.strstart;
        }
      }
      //zmemcpy(s->window + s->strstart, s->strm->next_in - used, used);
      s.window.set(s.strm.input.subarray(s.strm.next_in - used, s.strm.next_in), s.strstart);
      s.strstart += used;
      s.insert += used > s.w_size - s.insert ? s.w_size - s.insert : used;
    }
    s.block_start = s.strstart;
  }
  if (s.high_water < s.strstart) {
    s.high_water = s.strstart;
  }

  /* If the last block was written to next_out, then done. */
  if (last) {
    return BS_FINISH_DONE;
  }

  /* If flushing and all input has been consumed, then done. */
  if (flush !== Z_NO_FLUSH$2 && flush !== Z_FINISH$3 &&
    s.strm.avail_in === 0 && s.strstart === s.block_start) {
    return BS_BLOCK_DONE;
  }

  /* Fill the window with any remaining input. */
  have = s.window_size - s.strstart;
  if (s.strm.avail_in > have && s.block_start >= s.w_size) {
    /* Slide the window down. */
    s.block_start -= s.w_size;
    s.strstart -= s.w_size;
    //zmemcpy(s->window, s->window + s->w_size, s->strstart);
    s.window.set(s.window.subarray(s.w_size, s.w_size + s.strstart), 0);
    if (s.matches < 2) {
      s.matches++;       /* add a pending slide_hash() */
    }
    have += s.w_size;      /* more space now */
    if (s.insert > s.strstart) {
      s.insert = s.strstart;
    }
  }
  if (have > s.strm.avail_in) {
    have = s.strm.avail_in;
  }
  if (have) {
    read_buf(s.strm, s.window, s.strstart, have);
    s.strstart += have;
    s.insert += have > s.w_size - s.insert ? s.w_size - s.insert : have;
  }
  if (s.high_water < s.strstart) {
    s.high_water = s.strstart;
  }

  /* There was not enough avail_out to write a complete worthy or flushed
   * stored block to next_out. Write a stored block to pending instead, if we
   * have enough input for a worthy block, or if flushing and there is enough
   * room for the remaining input as a stored block in the pending buffer.
   */
  have = (s.bi_valid + 42) >> 3;     /* number of header bytes */
    /* maximum stored block length that will fit in pending: */
  have = s.pending_buf_size - have > 65535/* MAX_STORED */ ? 65535/* MAX_STORED */ : s.pending_buf_size - have;
  min_block = have > s.w_size ? s.w_size : have;
  left = s.strstart - s.block_start;
  if (left >= min_block ||
     ((left || flush === Z_FINISH$3) && flush !== Z_NO_FLUSH$2 &&
     s.strm.avail_in === 0 && left <= have)) {
    len = left > have ? have : left;
    last = flush === Z_FINISH$3 && s.strm.avail_in === 0 &&
         len === left ? 1 : 0;
    _tr_stored_block(s, s.block_start, len, last);
    s.block_start += len;
    flush_pending(s.strm);
  }

  /* We've done all we can with the available input and output. */
  return last ? BS_FINISH_STARTED : BS_NEED_MORE;
};


/* ===========================================================================
 * Compress as much as possible from the input stream, return the current
 * block state.
 * This function does not perform lazy evaluation of matches and inserts
 * new strings in the dictionary only for unmatched strings or for short
 * matches. It is used only for the fast compression options.
 */
const deflate_fast = (s, flush) => {

  let hash_head;        /* head of the hash chain */
  let bflush;           /* set if current block must be flushed */

  for (;;) {
    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the next match, plus MIN_MATCH bytes to insert the
     * string following the next match.
     */
    if (s.lookahead < MIN_LOOKAHEAD) {
      fill_window(s);
      if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH$2) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) {
        break; /* flush the current block */
      }
    }

    /* Insert the string window[strstart .. strstart+2] in the
     * dictionary, and set hash_head to the head of the hash chain:
     */
    hash_head = 0/*NIL*/;
    if (s.lookahead >= MIN_MATCH) {
      /*** INSERT_STRING(s, s.strstart, hash_head); ***/
      s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH - 1]);
      hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
      s.head[s.ins_h] = s.strstart;
      /***/
    }

    /* Find the longest match, discarding those <= prev_length.
     * At this point we have always match_length < MIN_MATCH
     */
    if (hash_head !== 0/*NIL*/ && ((s.strstart - hash_head) <= (s.w_size - MIN_LOOKAHEAD))) {
      /* To simplify the code, we prevent matches with the string
       * of window index 0 (in particular we have to avoid a match
       * of the string with itself at the start of the input file).
       */
      s.match_length = longest_match(s, hash_head);
      /* longest_match() sets match_start */
    }
    if (s.match_length >= MIN_MATCH) {
      // check_match(s, s.strstart, s.match_start, s.match_length); // for debug only

      /*** _tr_tally_dist(s, s.strstart - s.match_start,
                     s.match_length - MIN_MATCH, bflush); ***/
      bflush = _tr_tally(s, s.strstart - s.match_start, s.match_length - MIN_MATCH);

      s.lookahead -= s.match_length;

      /* Insert new strings in the hash table only if the match length
       * is not too large. This saves time but degrades compression.
       */
      if (s.match_length <= s.max_lazy_match/*max_insert_length*/ && s.lookahead >= MIN_MATCH) {
        s.match_length--; /* string at strstart already in table */
        do {
          s.strstart++;
          /*** INSERT_STRING(s, s.strstart, hash_head); ***/
          s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH - 1]);
          hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = s.strstart;
          /***/
          /* strstart never exceeds WSIZE-MAX_MATCH, so there are
           * always MIN_MATCH bytes ahead.
           */
        } while (--s.match_length !== 0);
        s.strstart++;
      } else
      {
        s.strstart += s.match_length;
        s.match_length = 0;
        s.ins_h = s.window[s.strstart];
        /* UPDATE_HASH(s, s.ins_h, s.window[s.strstart+1]); */
        s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + 1]);

//#if MIN_MATCH != 3
//                Call UPDATE_HASH() MIN_MATCH-3 more times
//#endif
        /* If lookahead < MIN_MATCH, ins_h is garbage, but it does not
         * matter since it will be recomputed at next deflate call.
         */
      }
    } else {
      /* No match, output a literal byte */
      //Tracevv((stderr,"%c", s.window[s.strstart]));
      /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
      bflush = _tr_tally(s, 0, s.window[s.strstart]);

      s.lookahead--;
      s.strstart++;
    }
    if (bflush) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }
  s.insert = ((s.strstart < (MIN_MATCH - 1)) ? s.strstart : MIN_MATCH - 1);
  if (flush === Z_FINISH$3) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.sym_next) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }
  return BS_BLOCK_DONE;
};

/* ===========================================================================
 * Same as above, but achieves better compression. We use a lazy
 * evaluation for matches: a match is finally adopted only if there is
 * no better match at the next window position.
 */
const deflate_slow = (s, flush) => {

  let hash_head;          /* head of hash chain */
  let bflush;              /* set if current block must be flushed */

  let max_insert;

  /* Process the input block. */
  for (;;) {
    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the next match, plus MIN_MATCH bytes to insert the
     * string following the next match.
     */
    if (s.lookahead < MIN_LOOKAHEAD) {
      fill_window(s);
      if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH$2) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) { break; } /* flush the current block */
    }

    /* Insert the string window[strstart .. strstart+2] in the
     * dictionary, and set hash_head to the head of the hash chain:
     */
    hash_head = 0/*NIL*/;
    if (s.lookahead >= MIN_MATCH) {
      /*** INSERT_STRING(s, s.strstart, hash_head); ***/
      s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH - 1]);
      hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
      s.head[s.ins_h] = s.strstart;
      /***/
    }

    /* Find the longest match, discarding those <= prev_length.
     */
    s.prev_length = s.match_length;
    s.prev_match = s.match_start;
    s.match_length = MIN_MATCH - 1;

    if (hash_head !== 0/*NIL*/ && s.prev_length < s.max_lazy_match &&
        s.strstart - hash_head <= (s.w_size - MIN_LOOKAHEAD)/*MAX_DIST(s)*/) {
      /* To simplify the code, we prevent matches with the string
       * of window index 0 (in particular we have to avoid a match
       * of the string with itself at the start of the input file).
       */
      s.match_length = longest_match(s, hash_head);
      /* longest_match() sets match_start */

      if (s.match_length <= 5 &&
         (s.strategy === Z_FILTERED || (s.match_length === MIN_MATCH && s.strstart - s.match_start > 4096/*TOO_FAR*/))) {

        /* If prev_match is also MIN_MATCH, match_start is garbage
         * but we will ignore the current match anyway.
         */
        s.match_length = MIN_MATCH - 1;
      }
    }
    /* If there was a match at the previous step and the current
     * match is not better, output the previous match:
     */
    if (s.prev_length >= MIN_MATCH && s.match_length <= s.prev_length) {
      max_insert = s.strstart + s.lookahead - MIN_MATCH;
      /* Do not insert strings in hash table beyond this. */

      //check_match(s, s.strstart-1, s.prev_match, s.prev_length);

      /***_tr_tally_dist(s, s.strstart - 1 - s.prev_match,
                     s.prev_length - MIN_MATCH, bflush);***/
      bflush = _tr_tally(s, s.strstart - 1 - s.prev_match, s.prev_length - MIN_MATCH);
      /* Insert in hash table all strings up to the end of the match.
       * strstart-1 and strstart are already inserted. If there is not
       * enough lookahead, the last two strings are not inserted in
       * the hash table.
       */
      s.lookahead -= s.prev_length - 1;
      s.prev_length -= 2;
      do {
        if (++s.strstart <= max_insert) {
          /*** INSERT_STRING(s, s.strstart, hash_head); ***/
          s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH - 1]);
          hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = s.strstart;
          /***/
        }
      } while (--s.prev_length !== 0);
      s.match_available = 0;
      s.match_length = MIN_MATCH - 1;
      s.strstart++;

      if (bflush) {
        /*** FLUSH_BLOCK(s, 0); ***/
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
        /***/
      }

    } else if (s.match_available) {
      /* If there was no match at the previous position, output a
       * single literal. If there was a match but the current match
       * is longer, truncate the previous match to a single literal.
       */
      //Tracevv((stderr,"%c", s->window[s->strstart-1]));
      /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/
      bflush = _tr_tally(s, 0, s.window[s.strstart - 1]);

      if (bflush) {
        /*** FLUSH_BLOCK_ONLY(s, 0) ***/
        flush_block_only(s, false);
        /***/
      }
      s.strstart++;
      s.lookahead--;
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
    } else {
      /* There is no previous match to compare with, wait for
       * the next step to decide.
       */
      s.match_available = 1;
      s.strstart++;
      s.lookahead--;
    }
  }
  //Assert (flush != Z_NO_FLUSH, "no flush?");
  if (s.match_available) {
    //Tracevv((stderr,"%c", s->window[s->strstart-1]));
    /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/
    bflush = _tr_tally(s, 0, s.window[s.strstart - 1]);

    s.match_available = 0;
  }
  s.insert = s.strstart < MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1;
  if (flush === Z_FINISH$3) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.sym_next) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }

  return BS_BLOCK_DONE;
};


/* ===========================================================================
 * For Z_RLE, simply look for runs of bytes, generate matches only of distance
 * one.  Do not maintain a hash table.  (It will be regenerated if this run of
 * deflate switches away from Z_RLE.)
 */
const deflate_rle = (s, flush) => {

  let bflush;            /* set if current block must be flushed */
  let prev;              /* byte at distance one to match */
  let scan, strend;      /* scan goes up to strend for length of run */

  const _win = s.window;

  for (;;) {
    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the longest run, plus one for the unrolled loop.
     */
    if (s.lookahead <= MAX_MATCH) {
      fill_window(s);
      if (s.lookahead <= MAX_MATCH && flush === Z_NO_FLUSH$2) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) { break; } /* flush the current block */
    }

    /* See how many times the previous byte repeats */
    s.match_length = 0;
    if (s.lookahead >= MIN_MATCH && s.strstart > 0) {
      scan = s.strstart - 1;
      prev = _win[scan];
      if (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan]) {
        strend = s.strstart + MAX_MATCH;
        do {
          /*jshint noempty:false*/
        } while (prev === _win[++scan] && prev === _win[++scan] &&
                 prev === _win[++scan] && prev === _win[++scan] &&
                 prev === _win[++scan] && prev === _win[++scan] &&
                 prev === _win[++scan] && prev === _win[++scan] &&
                 scan < strend);
        s.match_length = MAX_MATCH - (strend - scan);
        if (s.match_length > s.lookahead) {
          s.match_length = s.lookahead;
        }
      }
      //Assert(scan <= s->window+(uInt)(s->window_size-1), "wild scan");
    }

    /* Emit match if have run of MIN_MATCH or longer, else emit literal */
    if (s.match_length >= MIN_MATCH) {
      //check_match(s, s.strstart, s.strstart - 1, s.match_length);

      /*** _tr_tally_dist(s, 1, s.match_length - MIN_MATCH, bflush); ***/
      bflush = _tr_tally(s, 1, s.match_length - MIN_MATCH);

      s.lookahead -= s.match_length;
      s.strstart += s.match_length;
      s.match_length = 0;
    } else {
      /* No match, output a literal byte */
      //Tracevv((stderr,"%c", s->window[s->strstart]));
      /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
      bflush = _tr_tally(s, 0, s.window[s.strstart]);

      s.lookahead--;
      s.strstart++;
    }
    if (bflush) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }
  s.insert = 0;
  if (flush === Z_FINISH$3) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.sym_next) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }
  return BS_BLOCK_DONE;
};

/* ===========================================================================
 * For Z_HUFFMAN_ONLY, do not look for matches.  Do not maintain a hash table.
 * (It will be regenerated if this run of deflate switches away from Huffman.)
 */
const deflate_huff = (s, flush) => {

  let bflush;             /* set if current block must be flushed */

  for (;;) {
    /* Make sure that we have a literal to write. */
    if (s.lookahead === 0) {
      fill_window(s);
      if (s.lookahead === 0) {
        if (flush === Z_NO_FLUSH$2) {
          return BS_NEED_MORE;
        }
        break;      /* flush the current block */
      }
    }

    /* Output a literal byte */
    s.match_length = 0;
    //Tracevv((stderr,"%c", s->window[s->strstart]));
    /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
    bflush = _tr_tally(s, 0, s.window[s.strstart]);
    s.lookahead--;
    s.strstart++;
    if (bflush) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }
  s.insert = 0;
  if (flush === Z_FINISH$3) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.sym_next) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }
  return BS_BLOCK_DONE;
};

/* Values for max_lazy_match, good_match and max_chain_length, depending on
 * the desired pack level (0..9). The values given below have been tuned to
 * exclude worst case performance for pathological files. Better values may be
 * found for specific files.
 */
function Config(good_length, max_lazy, nice_length, max_chain, func) {

  this.good_length = good_length;
  this.max_lazy = max_lazy;
  this.nice_length = nice_length;
  this.max_chain = max_chain;
  this.func = func;
}

const configuration_table = [
  /*      good lazy nice chain */
  new Config(0, 0, 0, 0, deflate_stored),          /* 0 store only */
  new Config(4, 4, 8, 4, deflate_fast),            /* 1 max speed, no lazy matches */
  new Config(4, 5, 16, 8, deflate_fast),           /* 2 */
  new Config(4, 6, 32, 32, deflate_fast),          /* 3 */

  new Config(4, 4, 16, 16, deflate_slow),          /* 4 lazy matches */
  new Config(8, 16, 32, 32, deflate_slow),         /* 5 */
  new Config(8, 16, 128, 128, deflate_slow),       /* 6 */
  new Config(8, 32, 128, 256, deflate_slow),       /* 7 */
  new Config(32, 128, 258, 1024, deflate_slow),    /* 8 */
  new Config(32, 258, 258, 4096, deflate_slow)     /* 9 max compression */
];


/* ===========================================================================
 * Initialize the "longest match" routines for a new zlib stream
 */
const lm_init = (s) => {

  s.window_size = 2 * s.w_size;

  /*** CLEAR_HASH(s); ***/
  zero(s.head); // Fill with NIL (= 0);

  /* Set the default configuration parameters:
   */
  s.max_lazy_match = configuration_table[s.level].max_lazy;
  s.good_match = configuration_table[s.level].good_length;
  s.nice_match = configuration_table[s.level].nice_length;
  s.max_chain_length = configuration_table[s.level].max_chain;

  s.strstart = 0;
  s.block_start = 0;
  s.lookahead = 0;
  s.insert = 0;
  s.match_length = s.prev_length = MIN_MATCH - 1;
  s.match_available = 0;
  s.ins_h = 0;
};


function DeflateState() {
  this.strm = null;            /* pointer back to this zlib stream */
  this.status = 0;            /* as the name implies */
  this.pending_buf = null;      /* output still pending */
  this.pending_buf_size = 0;  /* size of pending_buf */
  this.pending_out = 0;       /* next pending byte to output to the stream */
  this.pending = 0;           /* nb of bytes in the pending buffer */
  this.wrap = 0;              /* bit 0 true for zlib, bit 1 true for gzip */
  this.gzhead = null;         /* gzip header information to write */
  this.gzindex = 0;           /* where in extra, name, or comment */
  this.method = Z_DEFLATED$2; /* can only be DEFLATED */
  this.last_flush = -1;   /* value of flush param for previous deflate call */

  this.w_size = 0;  /* LZ77 window size (32K by default) */
  this.w_bits = 0;  /* log2(w_size)  (8..16) */
  this.w_mask = 0;  /* w_size - 1 */

  this.window = null;
  /* Sliding window. Input bytes are read into the second half of the window,
   * and move to the first half later to keep a dictionary of at least wSize
   * bytes. With this organization, matches are limited to a distance of
   * wSize-MAX_MATCH bytes, but this ensures that IO is always
   * performed with a length multiple of the block size.
   */

  this.window_size = 0;
  /* Actual size of window: 2*wSize, except when the user input buffer
   * is directly used as sliding window.
   */

  this.prev = null;
  /* Link to older string with same hash index. To limit the size of this
   * array to 64K, this link is maintained only for the last 32K strings.
   * An index in this array is thus a window index modulo 32K.
   */

  this.head = null;   /* Heads of the hash chains or NIL. */

  this.ins_h = 0;       /* hash index of string to be inserted */
  this.hash_size = 0;   /* number of elements in hash table */
  this.hash_bits = 0;   /* log2(hash_size) */
  this.hash_mask = 0;   /* hash_size-1 */

  this.hash_shift = 0;
  /* Number of bits by which ins_h must be shifted at each input
   * step. It must be such that after MIN_MATCH steps, the oldest
   * byte no longer takes part in the hash key, that is:
   *   hash_shift * MIN_MATCH >= hash_bits
   */

  this.block_start = 0;
  /* Window position at the beginning of the current output block. Gets
   * negative when the window is moved backwards.
   */

  this.match_length = 0;      /* length of best match */
  this.prev_match = 0;        /* previous match */
  this.match_available = 0;   /* set if previous match exists */
  this.strstart = 0;          /* start of string to insert */
  this.match_start = 0;       /* start of matching string */
  this.lookahead = 0;         /* number of valid bytes ahead in window */

  this.prev_length = 0;
  /* Length of the best match at previous step. Matches not greater than this
   * are discarded. This is used in the lazy match evaluation.
   */

  this.max_chain_length = 0;
  /* To speed up deflation, hash chains are never searched beyond this
   * length.  A higher limit improves compression ratio but degrades the
   * speed.
   */

  this.max_lazy_match = 0;
  /* Attempt to find a better match only when the current match is strictly
   * smaller than this value. This mechanism is used only for compression
   * levels >= 4.
   */
  // That's alias to max_lazy_match, don't use directly
  //this.max_insert_length = 0;
  /* Insert new strings in the hash table only if the match length is not
   * greater than this length. This saves time but degrades compression.
   * max_insert_length is used only for compression levels <= 3.
   */

  this.level = 0;     /* compression level (1..9) */
  this.strategy = 0;  /* favor or force Huffman coding*/

  this.good_match = 0;
  /* Use a faster search when the previous match is longer than this */

  this.nice_match = 0; /* Stop searching when current match exceeds this */

              /* used by trees.c: */

  /* Didn't use ct_data typedef below to suppress compiler warning */

  // struct ct_data_s dyn_ltree[HEAP_SIZE];   /* literal and length tree */
  // struct ct_data_s dyn_dtree[2*D_CODES+1]; /* distance tree */
  // struct ct_data_s bl_tree[2*BL_CODES+1];  /* Huffman tree for bit lengths */

  // Use flat array of DOUBLE size, with interleaved fata,
  // because JS does not support effective
  this.dyn_ltree  = new Uint16Array(HEAP_SIZE * 2);
  this.dyn_dtree  = new Uint16Array((2 * D_CODES + 1) * 2);
  this.bl_tree    = new Uint16Array((2 * BL_CODES + 1) * 2);
  zero(this.dyn_ltree);
  zero(this.dyn_dtree);
  zero(this.bl_tree);

  this.l_desc   = null;         /* desc. for literal tree */
  this.d_desc   = null;         /* desc. for distance tree */
  this.bl_desc  = null;         /* desc. for bit length tree */

  //ush bl_count[MAX_BITS+1];
  this.bl_count = new Uint16Array(MAX_BITS + 1);
  /* number of codes at each bit length for an optimal tree */

  //int heap[2*L_CODES+1];      /* heap used to build the Huffman trees */
  this.heap = new Uint16Array(2 * L_CODES + 1);  /* heap used to build the Huffman trees */
  zero(this.heap);

  this.heap_len = 0;               /* number of elements in the heap */
  this.heap_max = 0;               /* element of largest frequency */
  /* The sons of heap[n] are heap[2*n] and heap[2*n+1]. heap[0] is not used.
   * The same heap array is used to build all trees.
   */

  this.depth = new Uint16Array(2 * L_CODES + 1); //uch depth[2*L_CODES+1];
  zero(this.depth);
  /* Depth of each subtree used as tie breaker for trees of equal frequency
   */

  this.sym_buf = 0;        /* buffer for distances and literals/lengths */

  this.lit_bufsize = 0;
  /* Size of match buffer for literals/lengths.  There are 4 reasons for
   * limiting lit_bufsize to 64K:
   *   - frequencies can be kept in 16 bit counters
   *   - if compression is not successful for the first block, all input
   *     data is still in the window so we can still emit a stored block even
   *     when input comes from standard input.  (This can also be done for
   *     all blocks if lit_bufsize is not greater than 32K.)
   *   - if compression is not successful for a file smaller than 64K, we can
   *     even emit a stored file instead of a stored block (saving 5 bytes).
   *     This is applicable only for zip (not gzip or zlib).
   *   - creating new Huffman trees less frequently may not provide fast
   *     adaptation to changes in the input data statistics. (Take for
   *     example a binary file with poorly compressible code followed by
   *     a highly compressible string table.) Smaller buffer sizes give
   *     fast adaptation but have of course the overhead of transmitting
   *     trees more frequently.
   *   - I can't count above 4
   */

  this.sym_next = 0;      /* running index in sym_buf */
  this.sym_end = 0;       /* symbol table full when sym_next reaches this */

  this.opt_len = 0;       /* bit length of current block with optimal trees */
  this.static_len = 0;    /* bit length of current block with static trees */
  this.matches = 0;       /* number of string matches in current block */
  this.insert = 0;        /* bytes at end of window left to insert */


  this.bi_buf = 0;
  /* Output buffer. bits are inserted starting at the bottom (least
   * significant bits).
   */
  this.bi_valid = 0;
  /* Number of valid bits in bi_buf.  All bits above the last valid bit
   * are always zero.
   */

  // Used for window memory init. We safely ignore it for JS. That makes
  // sense only for pointers and memory check tools.
  //this.high_water = 0;
  /* High water mark offset in window for initialized bytes -- bytes above
   * this are set to zero in order to avoid memory check warnings when
   * longest match routines access bytes past the input.  This is then
   * updated to the new high water mark.
   */
}


/* =========================================================================
 * Check for a valid deflate stream state. Return 0 if ok, 1 if not.
 */
const deflateStateCheck = (strm) => {

  if (!strm) {
    return 1;
  }
  const s = strm.state;
  if (!s || s.strm !== strm || (s.status !== INIT_STATE &&
//#ifdef GZIP
                                s.status !== GZIP_STATE &&
//#endif
                                s.status !== EXTRA_STATE &&
                                s.status !== NAME_STATE &&
                                s.status !== COMMENT_STATE &&
                                s.status !== HCRC_STATE &&
                                s.status !== BUSY_STATE &&
                                s.status !== FINISH_STATE)) {
    return 1;
  }
  return 0;
};


const deflateResetKeep = (strm) => {

  if (deflateStateCheck(strm)) {
    return err(strm, Z_STREAM_ERROR$2);
  }

  strm.total_in = strm.total_out = 0;
  strm.data_type = Z_UNKNOWN;

  const s = strm.state;
  s.pending = 0;
  s.pending_out = 0;

  if (s.wrap < 0) {
    s.wrap = -s.wrap;
    /* was made negative by deflate(..., Z_FINISH); */
  }
  s.status =
//#ifdef GZIP
    s.wrap === 2 ? GZIP_STATE :
//#endif
    s.wrap ? INIT_STATE : BUSY_STATE;
  strm.adler = (s.wrap === 2) ?
    0  // crc32(0, Z_NULL, 0)
  :
    1; // adler32(0, Z_NULL, 0)
  s.last_flush = -2;
  _tr_init(s);
  return Z_OK$3;
};


const deflateReset = (strm) => {

  const ret = deflateResetKeep(strm);
  if (ret === Z_OK$3) {
    lm_init(strm.state);
  }
  return ret;
};


const deflateSetHeader = (strm, head) => {

  if (deflateStateCheck(strm) || strm.state.wrap !== 2) {
    return Z_STREAM_ERROR$2;
  }
  strm.state.gzhead = head;
  return Z_OK$3;
};


const deflateInit2 = (strm, level, method, windowBits, memLevel, strategy) => {

  if (!strm) { // === Z_NULL
    return Z_STREAM_ERROR$2;
  }
  let wrap = 1;

  if (level === Z_DEFAULT_COMPRESSION$1) {
    level = 6;
  }

  if (windowBits < 0) { /* suppress zlib wrapper */
    wrap = 0;
    windowBits = -windowBits;
  }

  else if (windowBits > 15) {
    wrap = 2;           /* write gzip wrapper instead */
    windowBits -= 16;
  }


  if (memLevel < 1 || memLevel > MAX_MEM_LEVEL || method !== Z_DEFLATED$2 ||
    windowBits < 8 || windowBits > 15 || level < 0 || level > 9 ||
    strategy < 0 || strategy > Z_FIXED || (windowBits === 8 && wrap !== 1)) {
    return err(strm, Z_STREAM_ERROR$2);
  }


  if (windowBits === 8) {
    windowBits = 9;
  }
  /* until 256-byte window bug fixed */

  const s = new DeflateState();

  strm.state = s;
  s.strm = strm;
  s.status = INIT_STATE;     /* to pass state test in deflateReset() */

  s.wrap = wrap;
  s.gzhead = null;
  s.w_bits = windowBits;
  s.w_size = 1 << s.w_bits;
  s.w_mask = s.w_size - 1;

  s.hash_bits = memLevel + 7;
  s.hash_size = 1 << s.hash_bits;
  s.hash_mask = s.hash_size - 1;
  s.hash_shift = ~~((s.hash_bits + MIN_MATCH - 1) / MIN_MATCH);

  s.window = new Uint8Array(s.w_size * 2);
  s.head = new Uint16Array(s.hash_size);
  s.prev = new Uint16Array(s.w_size);

  // Don't need mem init magic for JS.
  //s.high_water = 0;  /* nothing written to s->window yet */

  s.lit_bufsize = 1 << (memLevel + 6); /* 16K elements by default */

  /* We overlay pending_buf and sym_buf. This works since the average size
   * for length/distance pairs over any compressed block is assured to be 31
   * bits or less.
   *
   * Analysis: The longest fixed codes are a length code of 8 bits plus 5
   * extra bits, for lengths 131 to 257. The longest fixed distance codes are
   * 5 bits plus 13 extra bits, for distances 16385 to 32768. The longest
   * possible fixed-codes length/distance pair is then 31 bits total.
   *
   * sym_buf starts one-fourth of the way into pending_buf. So there are
   * three bytes in sym_buf for every four bytes in pending_buf. Each symbol
   * in sym_buf is three bytes -- two for the distance and one for the
   * literal/length. As each symbol is consumed, the pointer to the next
   * sym_buf value to read moves forward three bytes. From that symbol, up to
   * 31 bits are written to pending_buf. The closest the written pending_buf
   * bits gets to the next sym_buf symbol to read is just before the last
   * code is written. At that time, 31*(n-2) bits have been written, just
   * after 24*(n-2) bits have been consumed from sym_buf. sym_buf starts at
   * 8*n bits into pending_buf. (Note that the symbol buffer fills when n-1
   * symbols are written.) The closest the writing gets to what is unread is
   * then n+14 bits. Here n is lit_bufsize, which is 16384 by default, and
   * can range from 128 to 32768.
   *
   * Therefore, at a minimum, there are 142 bits of space between what is
   * written and what is read in the overlain buffers, so the symbols cannot
   * be overwritten by the compressed data. That space is actually 139 bits,
   * due to the three-bit fixed-code block header.
   *
   * That covers the case where either Z_FIXED is specified, forcing fixed
   * codes, or when the use of fixed codes is chosen, because that choice
   * results in a smaller compressed block than dynamic codes. That latter
   * condition then assures that the above analysis also covers all dynamic
   * blocks. A dynamic-code block will only be chosen to be emitted if it has
   * fewer bits than a fixed-code block would for the same set of symbols.
   * Therefore its average symbol length is assured to be less than 31. So
   * the compressed data for a dynamic block also cannot overwrite the
   * symbols from which it is being constructed.
   */

  s.pending_buf_size = s.lit_bufsize * 4;
  s.pending_buf = new Uint8Array(s.pending_buf_size);

  // It is offset from `s.pending_buf` (size is `s.lit_bufsize * 2`)
  //s->sym_buf = s->pending_buf + s->lit_bufsize;
  s.sym_buf = s.lit_bufsize;

  //s->sym_end = (s->lit_bufsize - 1) * 3;
  s.sym_end = (s.lit_bufsize - 1) * 3;
  /* We avoid equality with lit_bufsize*3 because of wraparound at 64K
   * on 16 bit machines and because stored blocks are restricted to
   * 64K-1 bytes.
   */

  s.level = level;
  s.strategy = strategy;
  s.method = method;

  return deflateReset(strm);
};

const deflateInit = (strm, level) => {

  return deflateInit2(strm, level, Z_DEFLATED$2, MAX_WBITS$1, DEF_MEM_LEVEL, Z_DEFAULT_STRATEGY$1);
};


/* ========================================================================= */
const deflate$2 = (strm, flush) => {

  if (deflateStateCheck(strm) || flush > Z_BLOCK$1 || flush < 0) {
    return strm ? err(strm, Z_STREAM_ERROR$2) : Z_STREAM_ERROR$2;
  }

  const s = strm.state;

  if (!strm.output ||
      (strm.avail_in !== 0 && !strm.input) ||
      (s.status === FINISH_STATE && flush !== Z_FINISH$3)) {
    return err(strm, (strm.avail_out === 0) ? Z_BUF_ERROR$1 : Z_STREAM_ERROR$2);
  }

  const old_flush = s.last_flush;
  s.last_flush = flush;

  /* Flush as much pending output as possible */
  if (s.pending !== 0) {
    flush_pending(strm);
    if (strm.avail_out === 0) {
      /* Since avail_out is 0, deflate will be called again with
       * more output space, but possibly with both pending and
       * avail_in equal to zero. There won't be anything to do,
       * but this is not an error situation so make sure we
       * return OK instead of BUF_ERROR at next call of deflate:
       */
      s.last_flush = -1;
      return Z_OK$3;
    }

    /* Make sure there is something to do and avoid duplicate consecutive
     * flushes. For repeated and useless calls with Z_FINISH, we keep
     * returning Z_STREAM_END instead of Z_BUF_ERROR.
     */
  } else if (strm.avail_in === 0 && rank(flush) <= rank(old_flush) &&
    flush !== Z_FINISH$3) {
    return err(strm, Z_BUF_ERROR$1);
  }

  /* User must not provide more input after the first FINISH: */
  if (s.status === FINISH_STATE && strm.avail_in !== 0) {
    return err(strm, Z_BUF_ERROR$1);
  }

  /* Write the header */
  if (s.status === INIT_STATE && s.wrap === 0) {
    s.status = BUSY_STATE;
  }
  if (s.status === INIT_STATE) {
    /* zlib header */
    let header = (Z_DEFLATED$2 + ((s.w_bits - 8) << 4)) << 8;
    let level_flags = -1;

    if (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2) {
      level_flags = 0;
    } else if (s.level < 6) {
      level_flags = 1;
    } else if (s.level === 6) {
      level_flags = 2;
    } else {
      level_flags = 3;
    }
    header |= (level_flags << 6);
    if (s.strstart !== 0) { header |= PRESET_DICT; }
    header += 31 - (header % 31);

    putShortMSB(s, header);

    /* Save the adler32 of the preset dictionary: */
    if (s.strstart !== 0) {
      putShortMSB(s, strm.adler >>> 16);
      putShortMSB(s, strm.adler & 0xffff);
    }
    strm.adler = 1; // adler32(0L, Z_NULL, 0);
    s.status = BUSY_STATE;

    /* Compression must start with an empty pending buffer */
    flush_pending(strm);
    if (s.pending !== 0) {
      s.last_flush = -1;
      return Z_OK$3;
    }
  }
//#ifdef GZIP
  if (s.status === GZIP_STATE) {
    /* gzip header */
    strm.adler = 0;  //crc32(0L, Z_NULL, 0);
    put_byte(s, 31);
    put_byte(s, 139);
    put_byte(s, 8);
    if (!s.gzhead) { // s->gzhead == Z_NULL
      put_byte(s, 0);
      put_byte(s, 0);
      put_byte(s, 0);
      put_byte(s, 0);
      put_byte(s, 0);
      put_byte(s, s.level === 9 ? 2 :
                  (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ?
                   4 : 0));
      put_byte(s, OS_CODE);
      s.status = BUSY_STATE;

      /* Compression must start with an empty pending buffer */
      flush_pending(strm);
      if (s.pending !== 0) {
        s.last_flush = -1;
        return Z_OK$3;
      }
    }
    else {
      put_byte(s, (s.gzhead.text ? 1 : 0) +
                  (s.gzhead.hcrc ? 2 : 0) +
                  (!s.gzhead.extra ? 0 : 4) +
                  (!s.gzhead.name ? 0 : 8) +
                  (!s.gzhead.comment ? 0 : 16)
      );
      put_byte(s, s.gzhead.time & 0xff);
      put_byte(s, (s.gzhead.time >> 8) & 0xff);
      put_byte(s, (s.gzhead.time >> 16) & 0xff);
      put_byte(s, (s.gzhead.time >> 24) & 0xff);
      put_byte(s, s.level === 9 ? 2 :
                  (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ?
                   4 : 0));
      put_byte(s, s.gzhead.os & 0xff);
      if (s.gzhead.extra && s.gzhead.extra.length) {
        put_byte(s, s.gzhead.extra.length & 0xff);
        put_byte(s, (s.gzhead.extra.length >> 8) & 0xff);
      }
      if (s.gzhead.hcrc) {
        strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending, 0);
      }
      s.gzindex = 0;
      s.status = EXTRA_STATE;
    }
  }
  if (s.status === EXTRA_STATE) {
    if (s.gzhead.extra/* != Z_NULL*/) {
      let beg = s.pending;   /* start of bytes to update crc */
      let left = (s.gzhead.extra.length & 0xffff) - s.gzindex;
      while (s.pending + left > s.pending_buf_size) {
        let copy = s.pending_buf_size - s.pending;
        // zmemcpy(s.pending_buf + s.pending,
        //    s.gzhead.extra + s.gzindex, copy);
        s.pending_buf.set(s.gzhead.extra.subarray(s.gzindex, s.gzindex + copy), s.pending);
        s.pending = s.pending_buf_size;
        //--- HCRC_UPDATE(beg) ---//
        if (s.gzhead.hcrc && s.pending > beg) {
          strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
        }
        //---//
        s.gzindex += copy;
        flush_pending(strm);
        if (s.pending !== 0) {
          s.last_flush = -1;
          return Z_OK$3;
        }
        beg = 0;
        left -= copy;
      }
      // JS specific: s.gzhead.extra may be TypedArray or Array for backward compatibility
      //              TypedArray.slice and TypedArray.from don't exist in IE10-IE11
      let gzhead_extra = new Uint8Array(s.gzhead.extra);
      // zmemcpy(s->pending_buf + s->pending,
      //     s->gzhead->extra + s->gzindex, left);
      s.pending_buf.set(gzhead_extra.subarray(s.gzindex, s.gzindex + left), s.pending);
      s.pending += left;
      //--- HCRC_UPDATE(beg) ---//
      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      //---//
      s.gzindex = 0;
    }
    s.status = NAME_STATE;
  }
  if (s.status === NAME_STATE) {
    if (s.gzhead.name/* != Z_NULL*/) {
      let beg = s.pending;   /* start of bytes to update crc */
      let val;
      do {
        if (s.pending === s.pending_buf_size) {
          //--- HCRC_UPDATE(beg) ---//
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          //---//
          flush_pending(strm);
          if (s.pending !== 0) {
            s.last_flush = -1;
            return Z_OK$3;
          }
          beg = 0;
        }
        // JS specific: little magic to add zero terminator to end of string
        if (s.gzindex < s.gzhead.name.length) {
          val = s.gzhead.name.charCodeAt(s.gzindex++) & 0xff;
        } else {
          val = 0;
        }
        put_byte(s, val);
      } while (val !== 0);
      //--- HCRC_UPDATE(beg) ---//
      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      //---//
      s.gzindex = 0;
    }
    s.status = COMMENT_STATE;
  }
  if (s.status === COMMENT_STATE) {
    if (s.gzhead.comment/* != Z_NULL*/) {
      let beg = s.pending;   /* start of bytes to update crc */
      let val;
      do {
        if (s.pending === s.pending_buf_size) {
          //--- HCRC_UPDATE(beg) ---//
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          //---//
          flush_pending(strm);
          if (s.pending !== 0) {
            s.last_flush = -1;
            return Z_OK$3;
          }
          beg = 0;
        }
        // JS specific: little magic to add zero terminator to end of string
        if (s.gzindex < s.gzhead.comment.length) {
          val = s.gzhead.comment.charCodeAt(s.gzindex++) & 0xff;
        } else {
          val = 0;
        }
        put_byte(s, val);
      } while (val !== 0);
      //--- HCRC_UPDATE(beg) ---//
      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      //---//
    }
    s.status = HCRC_STATE;
  }
  if (s.status === HCRC_STATE) {
    if (s.gzhead.hcrc) {
      if (s.pending + 2 > s.pending_buf_size) {
        flush_pending(strm);
        if (s.pending !== 0) {
          s.last_flush = -1;
          return Z_OK$3;
        }
      }
      put_byte(s, strm.adler & 0xff);
      put_byte(s, (strm.adler >> 8) & 0xff);
      strm.adler = 0; //crc32(0L, Z_NULL, 0);
    }
    s.status = BUSY_STATE;

    /* Compression must start with an empty pending buffer */
    flush_pending(strm);
    if (s.pending !== 0) {
      s.last_flush = -1;
      return Z_OK$3;
    }
  }
//#endif

  /* Start a new block or continue the current one.
   */
  if (strm.avail_in !== 0 || s.lookahead !== 0 ||
    (flush !== Z_NO_FLUSH$2 && s.status !== FINISH_STATE)) {
    let bstate = s.level === 0 ? deflate_stored(s, flush) :
                 s.strategy === Z_HUFFMAN_ONLY ? deflate_huff(s, flush) :
                 s.strategy === Z_RLE ? deflate_rle(s, flush) :
                 configuration_table[s.level].func(s, flush);

    if (bstate === BS_FINISH_STARTED || bstate === BS_FINISH_DONE) {
      s.status = FINISH_STATE;
    }
    if (bstate === BS_NEED_MORE || bstate === BS_FINISH_STARTED) {
      if (strm.avail_out === 0) {
        s.last_flush = -1;
        /* avoid BUF_ERROR next call, see above */
      }
      return Z_OK$3;
      /* If flush != Z_NO_FLUSH && avail_out == 0, the next call
       * of deflate should use the same flush parameter to make sure
       * that the flush is complete. So we don't have to output an
       * empty block here, this will be done at next call. This also
       * ensures that for a very small output buffer, we emit at most
       * one empty block.
       */
    }
    if (bstate === BS_BLOCK_DONE) {
      if (flush === Z_PARTIAL_FLUSH) {
        _tr_align(s);
      }
      else if (flush !== Z_BLOCK$1) { /* FULL_FLUSH or SYNC_FLUSH */

        _tr_stored_block(s, 0, 0, false);
        /* For a full flush, this empty block will be recognized
         * as a special marker by inflate_sync().
         */
        if (flush === Z_FULL_FLUSH$1) {
          /*** CLEAR_HASH(s); ***/             /* forget history */
          zero(s.head); // Fill with NIL (= 0);

          if (s.lookahead === 0) {
            s.strstart = 0;
            s.block_start = 0;
            s.insert = 0;
          }
        }
      }
      flush_pending(strm);
      if (strm.avail_out === 0) {
        s.last_flush = -1; /* avoid BUF_ERROR at next call, see above */
        return Z_OK$3;
      }
    }
  }

  if (flush !== Z_FINISH$3) { return Z_OK$3; }
  if (s.wrap <= 0) { return Z_STREAM_END$3; }

  /* Write the trailer */
  if (s.wrap === 2) {
    put_byte(s, strm.adler & 0xff);
    put_byte(s, (strm.adler >> 8) & 0xff);
    put_byte(s, (strm.adler >> 16) & 0xff);
    put_byte(s, (strm.adler >> 24) & 0xff);
    put_byte(s, strm.total_in & 0xff);
    put_byte(s, (strm.total_in >> 8) & 0xff);
    put_byte(s, (strm.total_in >> 16) & 0xff);
    put_byte(s, (strm.total_in >> 24) & 0xff);
  }
  else
  {
    putShortMSB(s, strm.adler >>> 16);
    putShortMSB(s, strm.adler & 0xffff);
  }

  flush_pending(strm);
  /* If avail_out is zero, the application will call deflate again
   * to flush the rest.
   */
  if (s.wrap > 0) { s.wrap = -s.wrap; }
  /* write the trailer only once! */
  return s.pending !== 0 ? Z_OK$3 : Z_STREAM_END$3;
};


const deflateEnd = (strm) => {

  if (deflateStateCheck(strm)) {
    return Z_STREAM_ERROR$2;
  }

  const status = strm.state.status;

  strm.state = null;

  return status === BUSY_STATE ? err(strm, Z_DATA_ERROR$2) : Z_OK$3;
};


/* =========================================================================
 * Initializes the compression dictionary from the given byte
 * sequence without producing any compressed output.
 */
const deflateSetDictionary = (strm, dictionary) => {

  let dictLength = dictionary.length;

  if (deflateStateCheck(strm)) {
    return Z_STREAM_ERROR$2;
  }

  const s = strm.state;
  const wrap = s.wrap;

  if (wrap === 2 || (wrap === 1 && s.status !== INIT_STATE) || s.lookahead) {
    return Z_STREAM_ERROR$2;
  }

  /* when using zlib wrappers, compute Adler-32 for provided dictionary */
  if (wrap === 1) {
    /* adler32(strm->adler, dictionary, dictLength); */
    strm.adler = adler32_1(strm.adler, dictionary, dictLength, 0);
  }

  s.wrap = 0;   /* avoid computing Adler-32 in read_buf */

  /* if dictionary would fill window, just replace the history */
  if (dictLength >= s.w_size) {
    if (wrap === 0) {            /* already empty otherwise */
      /*** CLEAR_HASH(s); ***/
      zero(s.head); // Fill with NIL (= 0);
      s.strstart = 0;
      s.block_start = 0;
      s.insert = 0;
    }
    /* use the tail */
    // dictionary = dictionary.slice(dictLength - s.w_size);
    let tmpDict = new Uint8Array(s.w_size);
    tmpDict.set(dictionary.subarray(dictLength - s.w_size, dictLength), 0);
    dictionary = tmpDict;
    dictLength = s.w_size;
  }
  /* insert dictionary into window and hash */
  const avail = strm.avail_in;
  const next = strm.next_in;
  const input = strm.input;
  strm.avail_in = dictLength;
  strm.next_in = 0;
  strm.input = dictionary;
  fill_window(s);
  while (s.lookahead >= MIN_MATCH) {
    let str = s.strstart;
    let n = s.lookahead - (MIN_MATCH - 1);
    do {
      /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */
      s.ins_h = HASH(s, s.ins_h, s.window[str + MIN_MATCH - 1]);

      s.prev[str & s.w_mask] = s.head[s.ins_h];

      s.head[s.ins_h] = str;
      str++;
    } while (--n);
    s.strstart = str;
    s.lookahead = MIN_MATCH - 1;
    fill_window(s);
  }
  s.strstart += s.lookahead;
  s.block_start = s.strstart;
  s.insert = s.lookahead;
  s.lookahead = 0;
  s.match_length = s.prev_length = MIN_MATCH - 1;
  s.match_available = 0;
  strm.next_in = next;
  strm.input = input;
  strm.avail_in = avail;
  s.wrap = wrap;
  return Z_OK$3;
};


var deflateInit_1 = deflateInit;
var deflateInit2_1 = deflateInit2;
var deflateReset_1 = deflateReset;
var deflateResetKeep_1 = deflateResetKeep;
var deflateSetHeader_1 = deflateSetHeader;
var deflate_2$1 = deflate$2;
var deflateEnd_1 = deflateEnd;
var deflateSetDictionary_1 = deflateSetDictionary;
var deflateInfo = 'pako deflate (from Nodeca project)';

/* Not implemented
module.exports.deflateBound = deflateBound;
module.exports.deflateCopy = deflateCopy;
module.exports.deflateGetDictionary = deflateGetDictionary;
module.exports.deflateParams = deflateParams;
module.exports.deflatePending = deflatePending;
module.exports.deflatePrime = deflatePrime;
module.exports.deflateTune = deflateTune;
*/

var deflate_1$2 = {
	deflateInit: deflateInit_1,
	deflateInit2: deflateInit2_1,
	deflateReset: deflateReset_1,
	deflateResetKeep: deflateResetKeep_1,
	deflateSetHeader: deflateSetHeader_1,
	deflate: deflate_2$1,
	deflateEnd: deflateEnd_1,
	deflateSetDictionary: deflateSetDictionary_1,
	deflateInfo: deflateInfo
};

const _has = (obj, key) => {
  return Object.prototype.hasOwnProperty.call(obj, key);
};

var assign = function (obj /*from1, from2, from3, ...*/) {
  const sources = Array.prototype.slice.call(arguments, 1);
  while (sources.length) {
    const source = sources.shift();
    if (!source) { continue; }

    if (typeof source !== 'object') {
      throw new TypeError(source + 'must be non-object');
    }

    for (const p in source) {
      if (_has(source, p)) {
        obj[p] = source[p];
      }
    }
  }

  return obj;
};


// Join array of chunks to single array.
var flattenChunks = (chunks) => {
  // calculate data length
  let len = 0;

  for (let i = 0, l = chunks.length; i < l; i++) {
    len += chunks[i].length;
  }

  // join chunks
  const result = new Uint8Array(len);

  for (let i = 0, pos = 0, l = chunks.length; i < l; i++) {
    let chunk = chunks[i];
    result.set(chunk, pos);
    pos += chunk.length;
  }

  return result;
};

var common = {
	assign: assign,
	flattenChunks: flattenChunks
};

// String encode/decode helpers


// Quick check if we can use fast array to bin string conversion
//
// - apply(Array) can fail on Android 2.2
// - apply(Uint8Array) can fail on iOS 5.1 Safari
//
let STR_APPLY_UIA_OK = true;

try { String.fromCharCode.apply(null, new Uint8Array(1)); } catch (__) { STR_APPLY_UIA_OK = false; }


// Table with utf8 lengths (calculated by first byte of sequence)
// Note, that 5 & 6-byte values and some 4-byte values can not be represented in JS,
// because max possible codepoint is 0x10ffff
const _utf8len = new Uint8Array(256);
for (let q = 0; q < 256; q++) {
  _utf8len[q] = (q >= 252 ? 6 : q >= 248 ? 5 : q >= 240 ? 4 : q >= 224 ? 3 : q >= 192 ? 2 : 1);
}
_utf8len[254] = _utf8len[254] = 1; // Invalid sequence start


// convert string to array (typed, when possible)
var string2buf = (str) => {
  if (typeof TextEncoder === 'function' && TextEncoder.prototype.encode) {
    return new TextEncoder().encode(str);
  }

  let buf, c, c2, m_pos, i, str_len = str.length, buf_len = 0;

  // count binary size
  for (m_pos = 0; m_pos < str_len; m_pos++) {
    c = str.charCodeAt(m_pos);
    if ((c & 0xfc00) === 0xd800 && (m_pos + 1 < str_len)) {
      c2 = str.charCodeAt(m_pos + 1);
      if ((c2 & 0xfc00) === 0xdc00) {
        c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
        m_pos++;
      }
    }
    buf_len += c < 0x80 ? 1 : c < 0x800 ? 2 : c < 0x10000 ? 3 : 4;
  }

  // allocate buffer
  buf = new Uint8Array(buf_len);

  // convert
  for (i = 0, m_pos = 0; i < buf_len; m_pos++) {
    c = str.charCodeAt(m_pos);
    if ((c & 0xfc00) === 0xd800 && (m_pos + 1 < str_len)) {
      c2 = str.charCodeAt(m_pos + 1);
      if ((c2 & 0xfc00) === 0xdc00) {
        c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
        m_pos++;
      }
    }
    if (c < 0x80) {
      /* one byte */
      buf[i++] = c;
    } else if (c < 0x800) {
      /* two bytes */
      buf[i++] = 0xC0 | (c >>> 6);
      buf[i++] = 0x80 | (c & 0x3f);
    } else if (c < 0x10000) {
      /* three bytes */
      buf[i++] = 0xE0 | (c >>> 12);
      buf[i++] = 0x80 | (c >>> 6 & 0x3f);
      buf[i++] = 0x80 | (c & 0x3f);
    } else {
      /* four bytes */
      buf[i++] = 0xf0 | (c >>> 18);
      buf[i++] = 0x80 | (c >>> 12 & 0x3f);
      buf[i++] = 0x80 | (c >>> 6 & 0x3f);
      buf[i++] = 0x80 | (c & 0x3f);
    }
  }

  return buf;
};

// Helper
const buf2binstring = (buf, len) => {
  // On Chrome, the arguments in a function call that are allowed is `65534`.
  // If the length of the buffer is smaller than that, we can use this optimization,
  // otherwise we will take a slower path.
  if (len < 65534) {
    if (buf.subarray && STR_APPLY_UIA_OK) {
      return String.fromCharCode.apply(null, buf.length === len ? buf : buf.subarray(0, len));
    }
  }

  let result = '';
  for (let i = 0; i < len; i++) {
    result += String.fromCharCode(buf[i]);
  }
  return result;
};


// convert array to string
var buf2string = (buf, max) => {
  const len = max || buf.length;

  if (typeof TextDecoder === 'function' && TextDecoder.prototype.decode) {
    return new TextDecoder().decode(buf.subarray(0, max));
  }

  let i, out;

  // Reserve max possible length (2 words per char)
  // NB: by unknown reasons, Array is significantly faster for
  //     String.fromCharCode.apply than Uint16Array.
  const utf16buf = new Array(len * 2);

  for (out = 0, i = 0; i < len;) {
    let c = buf[i++];
    // quick process ascii
    if (c < 0x80) { utf16buf[out++] = c; continue; }

    let c_len = _utf8len[c];
    // skip 5 & 6 byte codes
    if (c_len > 4) { utf16buf[out++] = 0xfffd; i += c_len - 1; continue; }

    // apply mask on first byte
    c &= c_len === 2 ? 0x1f : c_len === 3 ? 0x0f : 0x07;
    // join the rest
    while (c_len > 1 && i < len) {
      c = (c << 6) | (buf[i++] & 0x3f);
      c_len--;
    }

    // terminated by end of string?
    if (c_len > 1) { utf16buf[out++] = 0xfffd; continue; }

    if (c < 0x10000) {
      utf16buf[out++] = c;
    } else {
      c -= 0x10000;
      utf16buf[out++] = 0xd800 | ((c >> 10) & 0x3ff);
      utf16buf[out++] = 0xdc00 | (c & 0x3ff);
    }
  }

  return buf2binstring(utf16buf, out);
};


// Calculate max possible position in utf8 buffer,
// that will not break sequence. If that's not possible
// - (very small limits) return max size as is.
//
// buf[] - utf8 bytes array
// max   - length limit (mandatory);
var utf8border = (buf, max) => {

  max = max || buf.length;
  if (max > buf.length) { max = buf.length; }

  // go back from last position, until start of sequence found
  let pos = max - 1;
  while (pos >= 0 && (buf[pos] & 0xC0) === 0x80) { pos--; }

  // Very small and broken sequence,
  // return max, because we should return something anyway.
  if (pos < 0) { return max; }

  // If we came to start of buffer - that means buffer is too small,
  // return max too.
  if (pos === 0) { return max; }

  return (pos + _utf8len[buf[pos]] > max) ? pos : max;
};

var strings = {
	string2buf: string2buf,
	buf2string: buf2string,
	utf8border: utf8border
};

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

function ZStream() {
  /* next input byte */
  this.input = null; // JS specific, because we have no pointers
  this.next_in = 0;
  /* number of bytes available at input */
  this.avail_in = 0;
  /* total number of input bytes read so far */
  this.total_in = 0;
  /* next output byte should be put there */
  this.output = null; // JS specific, because we have no pointers
  this.next_out = 0;
  /* remaining free space at output */
  this.avail_out = 0;
  /* total number of bytes output so far */
  this.total_out = 0;
  /* last error message, NULL if no error */
  this.msg = ''/*Z_NULL*/;
  /* not visible by applications */
  this.state = null;
  /* best guess about the data type: binary or text */
  this.data_type = 2/*Z_UNKNOWN*/;
  /* adler32 value of the uncompressed data */
  this.adler = 0;
}

var zstream = ZStream;

const toString$1 = Object.prototype.toString;

/* Public constants ==========================================================*/
/* ===========================================================================*/

const {
  Z_NO_FLUSH: Z_NO_FLUSH$1, Z_SYNC_FLUSH, Z_FULL_FLUSH, Z_FINISH: Z_FINISH$2,
  Z_OK: Z_OK$2, Z_STREAM_END: Z_STREAM_END$2,
  Z_DEFAULT_COMPRESSION,
  Z_DEFAULT_STRATEGY,
  Z_DEFLATED: Z_DEFLATED$1
} = constants$2;

/* ===========================================================================*/


/**
 * class Deflate
 *
 * Generic JS-style wrapper for zlib calls. If you don't need
 * streaming behaviour - use more simple functions: [[deflate]],
 * [[deflateRaw]] and [[gzip]].
 **/

/* internal
 * Deflate.chunks -> Array
 *
 * Chunks of output data, if [[Deflate#onData]] not overridden.
 **/

/**
 * Deflate.result -> Uint8Array
 *
 * Compressed result, generated by default [[Deflate#onData]]
 * and [[Deflate#onEnd]] handlers. Filled after you push last chunk
 * (call [[Deflate#push]] with `Z_FINISH` / `true` param).
 **/

/**
 * Deflate.err -> Number
 *
 * Error code after deflate finished. 0 (Z_OK) on success.
 * You will not need it in real life, because deflate errors
 * are possible only on wrong options or bad `onData` / `onEnd`
 * custom handlers.
 **/

/**
 * Deflate.msg -> String
 *
 * Error message, if [[Deflate.err]] != 0
 **/


/**
 * new Deflate(options)
 * - options (Object): zlib deflate options.
 *
 * Creates new deflator instance with specified params. Throws exception
 * on bad params. Supported options:
 *
 * - `level`
 * - `windowBits`
 * - `memLevel`
 * - `strategy`
 * - `dictionary`
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Additional options, for internal needs:
 *
 * - `chunkSize` - size of generated data chunks (16K by default)
 * - `raw` (Boolean) - do raw deflate
 * - `gzip` (Boolean) - create gzip wrapper
 * - `header` (Object) - custom header for gzip
 *   - `text` (Boolean) - true if compressed data believed to be text
 *   - `time` (Number) - modification time, unix timestamp
 *   - `os` (Number) - operation system code
 *   - `extra` (Array) - array of bytes with extra data (max 65536)
 *   - `name` (String) - file name (binary string)
 *   - `comment` (String) - comment (binary string)
 *   - `hcrc` (Boolean) - true if header crc should be added
 *
 * ##### Example:
 *
 * ```javascript
 * const pako = require('pako')
 *   , chunk1 = new Uint8Array([1,2,3,4,5,6,7,8,9])
 *   , chunk2 = new Uint8Array([10,11,12,13,14,15,16,17,18,19]);
 *
 * const deflate = new pako.Deflate({ level: 3});
 *
 * deflate.push(chunk1, false);
 * deflate.push(chunk2, true);  // true -> last chunk
 *
 * if (deflate.err) { throw new Error(deflate.err); }
 *
 * console.log(deflate.result);
 * ```
 **/
function Deflate$1(options) {
  this.options = common.assign({
    level: Z_DEFAULT_COMPRESSION,
    method: Z_DEFLATED$1,
    chunkSize: 16384,
    windowBits: 15,
    memLevel: 8,
    strategy: Z_DEFAULT_STRATEGY
  }, options || {});

  let opt = this.options;

  if (opt.raw && (opt.windowBits > 0)) {
    opt.windowBits = -opt.windowBits;
  }

  else if (opt.gzip && (opt.windowBits > 0) && (opt.windowBits < 16)) {
    opt.windowBits += 16;
  }

  this.err    = 0;      // error code, if happens (0 = Z_OK)
  this.msg    = '';     // error message
  this.ended  = false;  // used to avoid multiple onEnd() calls
  this.chunks = [];     // chunks of compressed data

  this.strm = new zstream();
  this.strm.avail_out = 0;

  let status = deflate_1$2.deflateInit2(
    this.strm,
    opt.level,
    opt.method,
    opt.windowBits,
    opt.memLevel,
    opt.strategy
  );

  if (status !== Z_OK$2) {
    throw new Error(messages[status]);
  }

  if (opt.header) {
    deflate_1$2.deflateSetHeader(this.strm, opt.header);
  }

  if (opt.dictionary) {
    let dict;
    // Convert data if needed
    if (typeof opt.dictionary === 'string') {
      // If we need to compress text, change encoding to utf8.
      dict = strings.string2buf(opt.dictionary);
    } else if (toString$1.call(opt.dictionary) === '[object ArrayBuffer]') {
      dict = new Uint8Array(opt.dictionary);
    } else {
      dict = opt.dictionary;
    }

    status = deflate_1$2.deflateSetDictionary(this.strm, dict);

    if (status !== Z_OK$2) {
      throw new Error(messages[status]);
    }

    this._dict_set = true;
  }
}

/**
 * Deflate#push(data[, flush_mode]) -> Boolean
 * - data (Uint8Array|ArrayBuffer|String): input data. Strings will be
 *   converted to utf8 byte sequence.
 * - flush_mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE modes.
 *   See constants. Skipped or `false` means Z_NO_FLUSH, `true` means Z_FINISH.
 *
 * Sends input data to deflate pipe, generating [[Deflate#onData]] calls with
 * new compressed chunks. Returns `true` on success. The last data block must
 * have `flush_mode` Z_FINISH (or `true`). That will flush internal pending
 * buffers and call [[Deflate#onEnd]].
 *
 * On fail call [[Deflate#onEnd]] with error code and return false.
 *
 * ##### Example
 *
 * ```javascript
 * push(chunk, false); // push one of data chunks
 * ...
 * push(chunk, true);  // push last chunk
 * ```
 **/
Deflate$1.prototype.push = function (data, flush_mode) {
  const strm = this.strm;
  const chunkSize = this.options.chunkSize;
  let status, _flush_mode;

  if (this.ended) { return false; }

  if (flush_mode === ~~flush_mode) _flush_mode = flush_mode;
  else _flush_mode = flush_mode === true ? Z_FINISH$2 : Z_NO_FLUSH$1;

  // Convert data if needed
  if (typeof data === 'string') {
    // If we need to compress text, change encoding to utf8.
    strm.input = strings.string2buf(data);
  } else if (toString$1.call(data) === '[object ArrayBuffer]') {
    strm.input = new Uint8Array(data);
  } else {
    strm.input = data;
  }

  strm.next_in = 0;
  strm.avail_in = strm.input.length;

  for (;;) {
    if (strm.avail_out === 0) {
      strm.output = new Uint8Array(chunkSize);
      strm.next_out = 0;
      strm.avail_out = chunkSize;
    }

    // Make sure avail_out > 6 to avoid repeating markers
    if ((_flush_mode === Z_SYNC_FLUSH || _flush_mode === Z_FULL_FLUSH) && strm.avail_out <= 6) {
      this.onData(strm.output.subarray(0, strm.next_out));
      strm.avail_out = 0;
      continue;
    }

    status = deflate_1$2.deflate(strm, _flush_mode);

    // Ended => flush and finish
    if (status === Z_STREAM_END$2) {
      if (strm.next_out > 0) {
        this.onData(strm.output.subarray(0, strm.next_out));
      }
      status = deflate_1$2.deflateEnd(this.strm);
      this.onEnd(status);
      this.ended = true;
      return status === Z_OK$2;
    }

    // Flush if out buffer full
    if (strm.avail_out === 0) {
      this.onData(strm.output);
      continue;
    }

    // Flush if requested and has data
    if (_flush_mode > 0 && strm.next_out > 0) {
      this.onData(strm.output.subarray(0, strm.next_out));
      strm.avail_out = 0;
      continue;
    }

    if (strm.avail_in === 0) break;
  }

  return true;
};


/**
 * Deflate#onData(chunk) -> Void
 * - chunk (Uint8Array): output data.
 *
 * By default, stores data blocks in `chunks[]` property and glue
 * those in `onEnd`. Override this handler, if you need another behaviour.
 **/
Deflate$1.prototype.onData = function (chunk) {
  this.chunks.push(chunk);
};


/**
 * Deflate#onEnd(status) -> Void
 * - status (Number): deflate status. 0 (Z_OK) on success,
 *   other if not.
 *
 * Called once after you tell deflate that the input stream is
 * complete (Z_FINISH). By default - join collected chunks,
 * free memory and fill `results` / `err` properties.
 **/
Deflate$1.prototype.onEnd = function (status) {
  // On success - join
  if (status === Z_OK$2) {
    this.result = common.flattenChunks(this.chunks);
  }
  this.chunks = [];
  this.err = status;
  this.msg = this.strm.msg;
};

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

// See state defs from inflate.js
const BAD$1 = 16209;       /* got a data error -- remain here until reset */
const TYPE$1 = 16191;      /* i: waiting for type bits, including last-flag bit */

/*
   Decode literal, length, and distance codes and write out the resulting
   literal and match bytes until either not enough input or output is
   available, an end-of-block is encountered, or a data error is encountered.
   When large enough input and output buffers are supplied to inflate(), for
   example, a 16K input buffer and a 64K output buffer, more than 95% of the
   inflate execution time is spent in this routine.

   Entry assumptions:

        state.mode === LEN
        strm.avail_in >= 6
        strm.avail_out >= 258
        start >= strm.avail_out
        state.bits < 8

   On return, state.mode is one of:

        LEN -- ran out of enough output space or enough available input
        TYPE -- reached end of block code, inflate() to interpret next block
        BAD -- error in block data

   Notes:

    - The maximum input bits used by a length/distance pair is 15 bits for the
      length code, 5 bits for the length extra, 15 bits for the distance code,
      and 13 bits for the distance extra.  This totals 48 bits, or six bytes.
      Therefore if strm.avail_in >= 6, then there is enough input to avoid
      checking for available input while decoding.

    - The maximum bytes that a single length/distance pair can output is 258
      bytes, which is the maximum length that can be coded.  inflate_fast()
      requires strm.avail_out >= 258 for each loop to avoid checking for
      output space.
 */
var inffast = function inflate_fast(strm, start) {
  let _in;                    /* local strm.input */
  let last;                   /* have enough input while in < last */
  let _out;                   /* local strm.output */
  let beg;                    /* inflate()'s initial strm.output */
  let end;                    /* while out < end, enough space available */
//#ifdef INFLATE_STRICT
  let dmax;                   /* maximum distance from zlib header */
//#endif
  let wsize;                  /* window size or zero if not using window */
  let whave;                  /* valid bytes in the window */
  let wnext;                  /* window write index */
  // Use `s_window` instead `window`, avoid conflict with instrumentation tools
  let s_window;               /* allocated sliding window, if wsize != 0 */
  let hold;                   /* local strm.hold */
  let bits;                   /* local strm.bits */
  let lcode;                  /* local strm.lencode */
  let dcode;                  /* local strm.distcode */
  let lmask;                  /* mask for first level of length codes */
  let dmask;                  /* mask for first level of distance codes */
  let here;                   /* retrieved table entry */
  let op;                     /* code bits, operation, extra bits, or */
                              /*  window position, window bytes to copy */
  let len;                    /* match length, unused bytes */
  let dist;                   /* match distance */
  let from;                   /* where to copy match from */
  let from_source;


  let input, output; // JS specific, because we have no pointers

  /* copy state to local variables */
  const state = strm.state;
  //here = state.here;
  _in = strm.next_in;
  input = strm.input;
  last = _in + (strm.avail_in - 5);
  _out = strm.next_out;
  output = strm.output;
  beg = _out - (start - strm.avail_out);
  end = _out + (strm.avail_out - 257);
//#ifdef INFLATE_STRICT
  dmax = state.dmax;
//#endif
  wsize = state.wsize;
  whave = state.whave;
  wnext = state.wnext;
  s_window = state.window;
  hold = state.hold;
  bits = state.bits;
  lcode = state.lencode;
  dcode = state.distcode;
  lmask = (1 << state.lenbits) - 1;
  dmask = (1 << state.distbits) - 1;


  /* decode literals and length/distances until end-of-block or not enough
     input data or output space */

  top:
  do {
    if (bits < 15) {
      hold += input[_in++] << bits;
      bits += 8;
      hold += input[_in++] << bits;
      bits += 8;
    }

    here = lcode[hold & lmask];

    dolen:
    for (;;) { // Goto emulation
      op = here >>> 24/*here.bits*/;
      hold >>>= op;
      bits -= op;
      op = (here >>> 16) & 0xff/*here.op*/;
      if (op === 0) {                          /* literal */
        //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
        //        "inflate:         literal '%c'\n" :
        //        "inflate:         literal 0x%02x\n", here.val));
        output[_out++] = here & 0xffff/*here.val*/;
      }
      else if (op & 16) {                     /* length base */
        len = here & 0xffff/*here.val*/;
        op &= 15;                           /* number of extra bits */
        if (op) {
          if (bits < op) {
            hold += input[_in++] << bits;
            bits += 8;
          }
          len += hold & ((1 << op) - 1);
          hold >>>= op;
          bits -= op;
        }
        //Tracevv((stderr, "inflate:         length %u\n", len));
        if (bits < 15) {
          hold += input[_in++] << bits;
          bits += 8;
          hold += input[_in++] << bits;
          bits += 8;
        }
        here = dcode[hold & dmask];

        dodist:
        for (;;) { // goto emulation
          op = here >>> 24/*here.bits*/;
          hold >>>= op;
          bits -= op;
          op = (here >>> 16) & 0xff/*here.op*/;

          if (op & 16) {                      /* distance base */
            dist = here & 0xffff/*here.val*/;
            op &= 15;                       /* number of extra bits */
            if (bits < op) {
              hold += input[_in++] << bits;
              bits += 8;
              if (bits < op) {
                hold += input[_in++] << bits;
                bits += 8;
              }
            }
            dist += hold & ((1 << op) - 1);
//#ifdef INFLATE_STRICT
            if (dist > dmax) {
              strm.msg = 'invalid distance too far back';
              state.mode = BAD$1;
              break top;
            }
//#endif
            hold >>>= op;
            bits -= op;
            //Tracevv((stderr, "inflate:         distance %u\n", dist));
            op = _out - beg;                /* max distance in output */
            if (dist > op) {                /* see if copy from window */
              op = dist - op;               /* distance back in window */
              if (op > whave) {
                if (state.sane) {
                  strm.msg = 'invalid distance too far back';
                  state.mode = BAD$1;
                  break top;
                }

// (!) This block is disabled in zlib defaults,
// don't enable it for binary compatibility
//#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
//                if (len <= op - whave) {
//                  do {
//                    output[_out++] = 0;
//                  } while (--len);
//                  continue top;
//                }
//                len -= op - whave;
//                do {
//                  output[_out++] = 0;
//                } while (--op > whave);
//                if (op === 0) {
//                  from = _out - dist;
//                  do {
//                    output[_out++] = output[from++];
//                  } while (--len);
//                  continue top;
//                }
//#endif
              }
              from = 0; // window index
              from_source = s_window;
              if (wnext === 0) {           /* very common case */
                from += wsize - op;
                if (op < len) {         /* some from window */
                  len -= op;
                  do {
                    output[_out++] = s_window[from++];
                  } while (--op);
                  from = _out - dist;  /* rest from output */
                  from_source = output;
                }
              }
              else if (wnext < op) {      /* wrap around window */
                from += wsize + wnext - op;
                op -= wnext;
                if (op < len) {         /* some from end of window */
                  len -= op;
                  do {
                    output[_out++] = s_window[from++];
                  } while (--op);
                  from = 0;
                  if (wnext < len) {  /* some from start of window */
                    op = wnext;
                    len -= op;
                    do {
                      output[_out++] = s_window[from++];
                    } while (--op);
                    from = _out - dist;      /* rest from output */
                    from_source = output;
                  }
                }
              }
              else {                      /* contiguous in window */
                from += wnext - op;
                if (op < len) {         /* some from window */
                  len -= op;
                  do {
                    output[_out++] = s_window[from++];
                  } while (--op);
                  from = _out - dist;  /* rest from output */
                  from_source = output;
                }
              }
              while (len > 2) {
                output[_out++] = from_source[from++];
                output[_out++] = from_source[from++];
                output[_out++] = from_source[from++];
                len -= 3;
              }
              if (len) {
                output[_out++] = from_source[from++];
                if (len > 1) {
                  output[_out++] = from_source[from++];
                }
              }
            }
            else {
              from = _out - dist;          /* copy direct from output */
              do {                        /* minimum length is three */
                output[_out++] = output[from++];
                output[_out++] = output[from++];
                output[_out++] = output[from++];
                len -= 3;
              } while (len > 2);
              if (len) {
                output[_out++] = output[from++];
                if (len > 1) {
                  output[_out++] = output[from++];
                }
              }
            }
          }
          else if ((op & 64) === 0) {          /* 2nd level distance code */
            here = dcode[(here & 0xffff)/*here.val*/ + (hold & ((1 << op) - 1))];
            continue dodist;
          }
          else {
            strm.msg = 'invalid distance code';
            state.mode = BAD$1;
            break top;
          }

          break; // need to emulate goto via "continue"
        }
      }
      else if ((op & 64) === 0) {              /* 2nd level length code */
        here = lcode[(here & 0xffff)/*here.val*/ + (hold & ((1 << op) - 1))];
        continue dolen;
      }
      else if (op & 32) {                     /* end-of-block */
        //Tracevv((stderr, "inflate:         end of block\n"));
        state.mode = TYPE$1;
        break top;
      }
      else {
        strm.msg = 'invalid literal/length code';
        state.mode = BAD$1;
        break top;
      }

      break; // need to emulate goto via "continue"
    }
  } while (_in < last && _out < end);

  /* return unused bytes (on entry, bits < 8, so in won't go too far back) */
  len = bits >> 3;
  _in -= len;
  bits -= len << 3;
  hold &= (1 << bits) - 1;

  /* update state and return */
  strm.next_in = _in;
  strm.next_out = _out;
  strm.avail_in = (_in < last ? 5 + (last - _in) : 5 - (_in - last));
  strm.avail_out = (_out < end ? 257 + (end - _out) : 257 - (_out - end));
  state.hold = hold;
  state.bits = bits;
  return;
};

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

const MAXBITS = 15;
const ENOUGH_LENS$1 = 852;
const ENOUGH_DISTS$1 = 592;
//const ENOUGH = (ENOUGH_LENS+ENOUGH_DISTS);

const CODES$1 = 0;
const LENS$1 = 1;
const DISTS$1 = 2;

const lbase = new Uint16Array([ /* Length codes 257..285 base */
  3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31,
  35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0
]);

const lext = new Uint8Array([ /* Length codes 257..285 extra */
  16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18,
  19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78
]);

const dbase = new Uint16Array([ /* Distance codes 0..29 base */
  1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193,
  257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145,
  8193, 12289, 16385, 24577, 0, 0
]);

const dext = new Uint8Array([ /* Distance codes 0..29 extra */
  16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22,
  23, 23, 24, 24, 25, 25, 26, 26, 27, 27,
  28, 28, 29, 29, 64, 64
]);

const inflate_table = (type, lens, lens_index, codes, table, table_index, work, opts) =>
{
  const bits = opts.bits;
      //here = opts.here; /* table entry for duplication */

  let len = 0;               /* a code's length in bits */
  let sym = 0;               /* index of code symbols */
  let min = 0, max = 0;          /* minimum and maximum code lengths */
  let root = 0;              /* number of index bits for root table */
  let curr = 0;              /* number of index bits for current table */
  let drop = 0;              /* code bits to drop for sub-table */
  let left = 0;                   /* number of prefix codes available */
  let used = 0;              /* code entries in table used */
  let huff = 0;              /* Huffman code */
  let incr;              /* for incrementing code, index */
  let fill;              /* index for replicating entries */
  let low;               /* low bits for current root entry */
  let mask;              /* mask for low root bits */
  let next;             /* next available space in table */
  let base = null;     /* base value table to use */
//  let shoextra;    /* extra bits table to use */
  let match;                  /* use base and extra for symbol >= match */
  const count = new Uint16Array(MAXBITS + 1); //[MAXBITS+1];    /* number of codes of each length */
  const offs = new Uint16Array(MAXBITS + 1); //[MAXBITS+1];     /* offsets in table for each length */
  let extra = null;

  let here_bits, here_op, here_val;

  /*
   Process a set of code lengths to create a canonical Huffman code.  The
   code lengths are lens[0..codes-1].  Each length corresponds to the
   symbols 0..codes-1.  The Huffman code is generated by first sorting the
   symbols by length from short to long, and retaining the symbol order
   for codes with equal lengths.  Then the code starts with all zero bits
   for the first code of the shortest length, and the codes are integer
   increments for the same length, and zeros are appended as the length
   increases.  For the deflate format, these bits are stored backwards
   from their more natural integer increment ordering, and so when the
   decoding tables are built in the large loop below, the integer codes
   are incremented backwards.

   This routine assumes, but does not check, that all of the entries in
   lens[] are in the range 0..MAXBITS.  The caller must assure this.
   1..MAXBITS is interpreted as that code length.  zero means that that
   symbol does not occur in this code.

   The codes are sorted by computing a count of codes for each length,
   creating from that a table of starting indices for each length in the
   sorted table, and then entering the symbols in order in the sorted
   table.  The sorted table is work[], with that space being provided by
   the caller.

   The length counts are used for other purposes as well, i.e. finding
   the minimum and maximum length codes, determining if there are any
   codes at all, checking for a valid set of lengths, and looking ahead
   at length counts to determine sub-table sizes when building the
   decoding tables.
   */

  /* accumulate lengths for codes (assumes lens[] all in 0..MAXBITS) */
  for (len = 0; len <= MAXBITS; len++) {
    count[len] = 0;
  }
  for (sym = 0; sym < codes; sym++) {
    count[lens[lens_index + sym]]++;
  }

  /* bound code lengths, force root to be within code lengths */
  root = bits;
  for (max = MAXBITS; max >= 1; max--) {
    if (count[max] !== 0) { break; }
  }
  if (root > max) {
    root = max;
  }
  if (max === 0) {                     /* no symbols to code at all */
    //table.op[opts.table_index] = 64;  //here.op = (var char)64;    /* invalid code marker */
    //table.bits[opts.table_index] = 1;   //here.bits = (var char)1;
    //table.val[opts.table_index++] = 0;   //here.val = (var short)0;
    table[table_index++] = (1 << 24) | (64 << 16) | 0;


    //table.op[opts.table_index] = 64;
    //table.bits[opts.table_index] = 1;
    //table.val[opts.table_index++] = 0;
    table[table_index++] = (1 << 24) | (64 << 16) | 0;

    opts.bits = 1;
    return 0;     /* no symbols, but wait for decoding to report error */
  }
  for (min = 1; min < max; min++) {
    if (count[min] !== 0) { break; }
  }
  if (root < min) {
    root = min;
  }

  /* check for an over-subscribed or incomplete set of lengths */
  left = 1;
  for (len = 1; len <= MAXBITS; len++) {
    left <<= 1;
    left -= count[len];
    if (left < 0) {
      return -1;
    }        /* over-subscribed */
  }
  if (left > 0 && (type === CODES$1 || max !== 1)) {
    return -1;                      /* incomplete set */
  }

  /* generate offsets into symbol table for each length for sorting */
  offs[1] = 0;
  for (len = 1; len < MAXBITS; len++) {
    offs[len + 1] = offs[len] + count[len];
  }

  /* sort symbols by length, by symbol order within each length */
  for (sym = 0; sym < codes; sym++) {
    if (lens[lens_index + sym] !== 0) {
      work[offs[lens[lens_index + sym]]++] = sym;
    }
  }

  /*
   Create and fill in decoding tables.  In this loop, the table being
   filled is at next and has curr index bits.  The code being used is huff
   with length len.  That code is converted to an index by dropping drop
   bits off of the bottom.  For codes where len is less than drop + curr,
   those top drop + curr - len bits are incremented through all values to
   fill the table with replicated entries.

   root is the number of index bits for the root table.  When len exceeds
   root, sub-tables are created pointed to by the root entry with an index
   of the low root bits of huff.  This is saved in low to check for when a
   new sub-table should be started.  drop is zero when the root table is
   being filled, and drop is root when sub-tables are being filled.

   When a new sub-table is needed, it is necessary to look ahead in the
   code lengths to determine what size sub-table is needed.  The length
   counts are used for this, and so count[] is decremented as codes are
   entered in the tables.

   used keeps track of how many table entries have been allocated from the
   provided *table space.  It is checked for LENS and DIST tables against
   the constants ENOUGH_LENS and ENOUGH_DISTS to guard against changes in
   the initial root table size constants.  See the comments in inftrees.h
   for more information.

   sym increments through all symbols, and the loop terminates when
   all codes of length max, i.e. all codes, have been processed.  This
   routine permits incomplete codes, so another loop after this one fills
   in the rest of the decoding tables with invalid code markers.
   */

  /* set up for code type */
  // poor man optimization - use if-else instead of switch,
  // to avoid deopts in old v8
  if (type === CODES$1) {
    base = extra = work;    /* dummy value--not used */
    match = 20;

  } else if (type === LENS$1) {
    base = lbase;
    extra = lext;
    match = 257;

  } else {                    /* DISTS */
    base = dbase;
    extra = dext;
    match = 0;
  }

  /* initialize opts for loop */
  huff = 0;                   /* starting code */
  sym = 0;                    /* starting code symbol */
  len = min;                  /* starting code length */
  next = table_index;              /* current table to fill in */
  curr = root;                /* current table index bits */
  drop = 0;                   /* current bits to drop from code for index */
  low = -1;                   /* trigger new sub-table when len > root */
  used = 1 << root;          /* use root table entries */
  mask = used - 1;            /* mask for comparing low */

  /* check available table space */
  if ((type === LENS$1 && used > ENOUGH_LENS$1) ||
    (type === DISTS$1 && used > ENOUGH_DISTS$1)) {
    return 1;
  }

  /* process all codes and make table entries */
  for (;;) {
    /* create table entry */
    here_bits = len - drop;
    if (work[sym] + 1 < match) {
      here_op = 0;
      here_val = work[sym];
    }
    else if (work[sym] >= match) {
      here_op = extra[work[sym] - match];
      here_val = base[work[sym] - match];
    }
    else {
      here_op = 32 + 64;         /* end of block */
      here_val = 0;
    }

    /* replicate for those indices with low len bits equal to huff */
    incr = 1 << (len - drop);
    fill = 1 << curr;
    min = fill;                 /* save offset to next table */
    do {
      fill -= incr;
      table[next + (huff >> drop) + fill] = (here_bits << 24) | (here_op << 16) | here_val |0;
    } while (fill !== 0);

    /* backwards increment the len-bit code huff */
    incr = 1 << (len - 1);
    while (huff & incr) {
      incr >>= 1;
    }
    if (incr !== 0) {
      huff &= incr - 1;
      huff += incr;
    } else {
      huff = 0;
    }

    /* go to next symbol, update count, len */
    sym++;
    if (--count[len] === 0) {
      if (len === max) { break; }
      len = lens[lens_index + work[sym]];
    }

    /* create new sub-table if needed */
    if (len > root && (huff & mask) !== low) {
      /* if first time, transition to sub-tables */
      if (drop === 0) {
        drop = root;
      }

      /* increment past last table */
      next += min;            /* here min is 1 << curr */

      /* determine length of next table */
      curr = len - drop;
      left = 1 << curr;
      while (curr + drop < max) {
        left -= count[curr + drop];
        if (left <= 0) { break; }
        curr++;
        left <<= 1;
      }

      /* check for enough space */
      used += 1 << curr;
      if ((type === LENS$1 && used > ENOUGH_LENS$1) ||
        (type === DISTS$1 && used > ENOUGH_DISTS$1)) {
        return 1;
      }

      /* point entry in root table to sub-table */
      low = huff & mask;
      /*table.op[low] = curr;
      table.bits[low] = root;
      table.val[low] = next - opts.table_index;*/
      table[low] = (root << 24) | (curr << 16) | (next - table_index) |0;
    }
  }

  /* fill in remaining table entry if code is incomplete (guaranteed to have
   at most one remaining entry, since if the code is incomplete, the
   maximum code length that was allowed to get this far is one bit) */
  if (huff !== 0) {
    //table.op[next + huff] = 64;            /* invalid code marker */
    //table.bits[next + huff] = len - drop;
    //table.val[next + huff] = 0;
    table[next + huff] = ((len - drop) << 24) | (64 << 16) |0;
  }

  /* set return parameters */
  //opts.table_index += used;
  opts.bits = root;
  return 0;
};


var inftrees = inflate_table;

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.






const CODES = 0;
const LENS = 1;
const DISTS = 2;

/* Public constants ==========================================================*/
/* ===========================================================================*/

const {
  Z_FINISH: Z_FINISH$1, Z_BLOCK, Z_TREES,
  Z_OK: Z_OK$1, Z_STREAM_END: Z_STREAM_END$1, Z_NEED_DICT: Z_NEED_DICT$1, Z_STREAM_ERROR: Z_STREAM_ERROR$1, Z_DATA_ERROR: Z_DATA_ERROR$1, Z_MEM_ERROR: Z_MEM_ERROR$1, Z_BUF_ERROR,
  Z_DEFLATED
} = constants$2;


/* STATES ====================================================================*/
/* ===========================================================================*/


const    HEAD = 16180;       /* i: waiting for magic header */
const    FLAGS = 16181;      /* i: waiting for method and flags (gzip) */
const    TIME = 16182;       /* i: waiting for modification time (gzip) */
const    OS = 16183;         /* i: waiting for extra flags and operating system (gzip) */
const    EXLEN = 16184;      /* i: waiting for extra length (gzip) */
const    EXTRA = 16185;      /* i: waiting for extra bytes (gzip) */
const    NAME = 16186;       /* i: waiting for end of file name (gzip) */
const    COMMENT = 16187;    /* i: waiting for end of comment (gzip) */
const    HCRC = 16188;       /* i: waiting for header crc (gzip) */
const    DICTID = 16189;    /* i: waiting for dictionary check value */
const    DICT = 16190;      /* waiting for inflateSetDictionary() call */
const        TYPE = 16191;      /* i: waiting for type bits, including last-flag bit */
const        TYPEDO = 16192;    /* i: same, but skip check to exit inflate on new block */
const        STORED = 16193;    /* i: waiting for stored size (length and complement) */
const        COPY_ = 16194;     /* i/o: same as COPY below, but only first time in */
const        COPY = 16195;      /* i/o: waiting for input or output to copy stored block */
const        TABLE = 16196;     /* i: waiting for dynamic block table lengths */
const        LENLENS = 16197;   /* i: waiting for code length code lengths */
const        CODELENS = 16198;  /* i: waiting for length/lit and distance code lengths */
const            LEN_ = 16199;      /* i: same as LEN below, but only first time in */
const            LEN = 16200;       /* i: waiting for length/lit/eob code */
const            LENEXT = 16201;    /* i: waiting for length extra bits */
const            DIST = 16202;      /* i: waiting for distance code */
const            DISTEXT = 16203;   /* i: waiting for distance extra bits */
const            MATCH = 16204;     /* o: waiting for output space to copy string */
const            LIT = 16205;       /* o: waiting for output space to write literal */
const    CHECK = 16206;     /* i: waiting for 32-bit check value */
const    LENGTH = 16207;    /* i: waiting for 32-bit length (gzip) */
const    DONE = 16208;      /* finished check, done -- remain here until reset */
const    BAD = 16209;       /* got a data error -- remain here until reset */
const    MEM = 16210;       /* got an inflate() memory error -- remain here until reset */
const    SYNC = 16211;      /* looking for synchronization bytes to restart inflate() */

/* ===========================================================================*/



const ENOUGH_LENS = 852;
const ENOUGH_DISTS = 592;
//const ENOUGH =  (ENOUGH_LENS+ENOUGH_DISTS);

const MAX_WBITS = 15;
/* 32K LZ77 window */
const DEF_WBITS = MAX_WBITS;


const zswap32 = (q) => {

  return  (((q >>> 24) & 0xff) +
          ((q >>> 8) & 0xff00) +
          ((q & 0xff00) << 8) +
          ((q & 0xff) << 24));
};


function InflateState() {
  this.strm = null;           /* pointer back to this zlib stream */
  this.mode = 0;              /* current inflate mode */
  this.last = false;          /* true if processing last block */
  this.wrap = 0;              /* bit 0 true for zlib, bit 1 true for gzip,
                                 bit 2 true to validate check value */
  this.havedict = false;      /* true if dictionary provided */
  this.flags = 0;             /* gzip header method and flags (0 if zlib), or
                                 -1 if raw or no header yet */
  this.dmax = 0;              /* zlib header max distance (INFLATE_STRICT) */
  this.check = 0;             /* protected copy of check value */
  this.total = 0;             /* protected copy of output count */
  // TODO: may be {}
  this.head = null;           /* where to save gzip header information */

  /* sliding window */
  this.wbits = 0;             /* log base 2 of requested window size */
  this.wsize = 0;             /* window size or zero if not using window */
  this.whave = 0;             /* valid bytes in the window */
  this.wnext = 0;             /* window write index */
  this.window = null;         /* allocated sliding window, if needed */

  /* bit accumulator */
  this.hold = 0;              /* input bit accumulator */
  this.bits = 0;              /* number of bits in "in" */

  /* for string and stored block copying */
  this.length = 0;            /* literal or length of data to copy */
  this.offset = 0;            /* distance back to copy string from */

  /* for table and code decoding */
  this.extra = 0;             /* extra bits needed */

  /* fixed and dynamic code tables */
  this.lencode = null;          /* starting table for length/literal codes */
  this.distcode = null;         /* starting table for distance codes */
  this.lenbits = 0;           /* index bits for lencode */
  this.distbits = 0;          /* index bits for distcode */

  /* dynamic table building */
  this.ncode = 0;             /* number of code length code lengths */
  this.nlen = 0;              /* number of length code lengths */
  this.ndist = 0;             /* number of distance code lengths */
  this.have = 0;              /* number of code lengths in lens[] */
  this.next = null;              /* next available space in codes[] */

  this.lens = new Uint16Array(320); /* temporary storage for code lengths */
  this.work = new Uint16Array(288); /* work area for code table building */

  /*
   because we don't have pointers in js, we use lencode and distcode directly
   as buffers so we don't need codes
  */
  //this.codes = new Int32Array(ENOUGH);       /* space for code tables */
  this.lendyn = null;              /* dynamic table for length/literal codes (JS specific) */
  this.distdyn = null;             /* dynamic table for distance codes (JS specific) */
  this.sane = 0;                   /* if false, allow invalid distance too far */
  this.back = 0;                   /* bits back of last unprocessed length/lit */
  this.was = 0;                    /* initial length of match */
}


const inflateStateCheck = (strm) => {

  if (!strm) {
    return 1;
  }
  const state = strm.state;
  if (!state || state.strm !== strm ||
    state.mode < HEAD || state.mode > SYNC) {
    return 1;
  }
  return 0;
};


const inflateResetKeep = (strm) => {

  if (inflateStateCheck(strm)) { return Z_STREAM_ERROR$1; }
  const state = strm.state;
  strm.total_in = strm.total_out = state.total = 0;
  strm.msg = ''; /*Z_NULL*/
  if (state.wrap) {       /* to support ill-conceived Java test suite */
    strm.adler = state.wrap & 1;
  }
  state.mode = HEAD;
  state.last = 0;
  state.havedict = 0;
  state.flags = -1;
  state.dmax = 32768;
  state.head = null/*Z_NULL*/;
  state.hold = 0;
  state.bits = 0;
  //state.lencode = state.distcode = state.next = state.codes;
  state.lencode = state.lendyn = new Int32Array(ENOUGH_LENS);
  state.distcode = state.distdyn = new Int32Array(ENOUGH_DISTS);

  state.sane = 1;
  state.back = -1;
  //Tracev((stderr, "inflate: reset\n"));
  return Z_OK$1;
};


const inflateReset = (strm) => {

  if (inflateStateCheck(strm)) { return Z_STREAM_ERROR$1; }
  const state = strm.state;
  state.wsize = 0;
  state.whave = 0;
  state.wnext = 0;
  return inflateResetKeep(strm);

};


const inflateReset2 = (strm, windowBits) => {
  let wrap;

  /* get the state */
  if (inflateStateCheck(strm)) { return Z_STREAM_ERROR$1; }
  const state = strm.state;

  /* extract wrap request from windowBits parameter */
  if (windowBits < 0) {
    wrap = 0;
    windowBits = -windowBits;
  }
  else {
    wrap = (windowBits >> 4) + 5;
    if (windowBits < 48) {
      windowBits &= 15;
    }
  }

  /* set number of window bits, free window if different */
  if (windowBits && (windowBits < 8 || windowBits > 15)) {
    return Z_STREAM_ERROR$1;
  }
  if (state.window !== null && state.wbits !== windowBits) {
    state.window = null;
  }

  /* update state and reset the rest of it */
  state.wrap = wrap;
  state.wbits = windowBits;
  return inflateReset(strm);
};


const inflateInit2 = (strm, windowBits) => {

  if (!strm) { return Z_STREAM_ERROR$1; }
  //strm.msg = Z_NULL;                 /* in case we return an error */

  const state = new InflateState();

  //if (state === Z_NULL) return Z_MEM_ERROR;
  //Tracev((stderr, "inflate: allocated\n"));
  strm.state = state;
  state.strm = strm;
  state.window = null/*Z_NULL*/;
  state.mode = HEAD;     /* to pass state test in inflateReset2() */
  const ret = inflateReset2(strm, windowBits);
  if (ret !== Z_OK$1) {
    strm.state = null/*Z_NULL*/;
  }
  return ret;
};


const inflateInit = (strm) => {

  return inflateInit2(strm, DEF_WBITS);
};


/*
 Return state with length and distance decoding tables and index sizes set to
 fixed code decoding.  Normally this returns fixed tables from inffixed.h.
 If BUILDFIXED is defined, then instead this routine builds the tables the
 first time it's called, and returns those tables the first time and
 thereafter.  This reduces the size of the code by about 2K bytes, in
 exchange for a little execution time.  However, BUILDFIXED should not be
 used for threaded applications, since the rewriting of the tables and virgin
 may not be thread-safe.
 */
let virgin = true;

let lenfix, distfix; // We have no pointers in JS, so keep tables separate


const fixedtables = (state) => {

  /* build fixed huffman tables if first call (may not be thread safe) */
  if (virgin) {
    lenfix = new Int32Array(512);
    distfix = new Int32Array(32);

    /* literal/length table */
    let sym = 0;
    while (sym < 144) { state.lens[sym++] = 8; }
    while (sym < 256) { state.lens[sym++] = 9; }
    while (sym < 280) { state.lens[sym++] = 7; }
    while (sym < 288) { state.lens[sym++] = 8; }

    inftrees(LENS,  state.lens, 0, 288, lenfix,   0, state.work, { bits: 9 });

    /* distance table */
    sym = 0;
    while (sym < 32) { state.lens[sym++] = 5; }

    inftrees(DISTS, state.lens, 0, 32,   distfix, 0, state.work, { bits: 5 });

    /* do this just once */
    virgin = false;
  }

  state.lencode = lenfix;
  state.lenbits = 9;
  state.distcode = distfix;
  state.distbits = 5;
};


/*
 Update the window with the last wsize (normally 32K) bytes written before
 returning.  If window does not exist yet, create it.  This is only called
 when a window is already in use, or when output has been written during this
 inflate call, but the end of the deflate stream has not been reached yet.
 It is also called to create a window for dictionary data when a dictionary
 is loaded.

 Providing output buffers larger than 32K to inflate() should provide a speed
 advantage, since only the last 32K of output is copied to the sliding window
 upon return from inflate(), and since all distances after the first 32K of
 output will fall in the output data, making match copies simpler and faster.
 The advantage may be dependent on the size of the processor's data caches.
 */
const updatewindow = (strm, src, end, copy) => {

  let dist;
  const state = strm.state;

  /* if it hasn't been done already, allocate space for the window */
  if (state.window === null) {
    state.wsize = 1 << state.wbits;
    state.wnext = 0;
    state.whave = 0;

    state.window = new Uint8Array(state.wsize);
  }

  /* copy state->wsize or less output bytes into the circular window */
  if (copy >= state.wsize) {
    state.window.set(src.subarray(end - state.wsize, end), 0);
    state.wnext = 0;
    state.whave = state.wsize;
  }
  else {
    dist = state.wsize - state.wnext;
    if (dist > copy) {
      dist = copy;
    }
    //zmemcpy(state->window + state->wnext, end - copy, dist);
    state.window.set(src.subarray(end - copy, end - copy + dist), state.wnext);
    copy -= dist;
    if (copy) {
      //zmemcpy(state->window, end - copy, copy);
      state.window.set(src.subarray(end - copy, end), 0);
      state.wnext = copy;
      state.whave = state.wsize;
    }
    else {
      state.wnext += dist;
      if (state.wnext === state.wsize) { state.wnext = 0; }
      if (state.whave < state.wsize) { state.whave += dist; }
    }
  }
  return 0;
};


const inflate$2 = (strm, flush) => {

  let state;
  let input, output;          // input/output buffers
  let next;                   /* next input INDEX */
  let put;                    /* next output INDEX */
  let have, left;             /* available input and output */
  let hold;                   /* bit buffer */
  let bits;                   /* bits in bit buffer */
  let _in, _out;              /* save starting available input and output */
  let copy;                   /* number of stored or match bytes to copy */
  let from;                   /* where to copy match bytes from */
  let from_source;
  let here = 0;               /* current decoding table entry */
  let here_bits, here_op, here_val; // paked "here" denormalized (JS specific)
  //let last;                   /* parent table entry */
  let last_bits, last_op, last_val; // paked "last" denormalized (JS specific)
  let len;                    /* length to copy for repeats, bits to drop */
  let ret;                    /* return code */
  const hbuf = new Uint8Array(4);    /* buffer for gzip header crc calculation */
  let opts;

  let n; // temporary variable for NEED_BITS

  const order = /* permutation of code lengths */
    new Uint8Array([ 16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15 ]);


  if (inflateStateCheck(strm) || !strm.output ||
      (!strm.input && strm.avail_in !== 0)) {
    return Z_STREAM_ERROR$1;
  }

  state = strm.state;
  if (state.mode === TYPE) { state.mode = TYPEDO; }    /* skip check */


  //--- LOAD() ---
  put = strm.next_out;
  output = strm.output;
  left = strm.avail_out;
  next = strm.next_in;
  input = strm.input;
  have = strm.avail_in;
  hold = state.hold;
  bits = state.bits;
  //---

  _in = have;
  _out = left;
  ret = Z_OK$1;

  inf_leave: // goto emulation
  for (;;) {
    switch (state.mode) {
      case HEAD:
        if (state.wrap === 0) {
          state.mode = TYPEDO;
          break;
        }
        //=== NEEDBITS(16);
        while (bits < 16) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if ((state.wrap & 2) && hold === 0x8b1f) {  /* gzip header */
          if (state.wbits === 0) {
            state.wbits = 15;
          }
          state.check = 0/*crc32(0L, Z_NULL, 0)*/;
          //=== CRC2(state.check, hold);
          hbuf[0] = hold & 0xff;
          hbuf[1] = (hold >>> 8) & 0xff;
          state.check = crc32_1(state.check, hbuf, 2, 0);
          //===//

          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
          state.mode = FLAGS;
          break;
        }
        if (state.head) {
          state.head.done = false;
        }
        if (!(state.wrap & 1) ||   /* check if zlib header allowed */
          (((hold & 0xff)/*BITS(8)*/ << 8) + (hold >> 8)) % 31) {
          strm.msg = 'incorrect header check';
          state.mode = BAD;
          break;
        }
        if ((hold & 0x0f)/*BITS(4)*/ !== Z_DEFLATED) {
          strm.msg = 'unknown compression method';
          state.mode = BAD;
          break;
        }
        //--- DROPBITS(4) ---//
        hold >>>= 4;
        bits -= 4;
        //---//
        len = (hold & 0x0f)/*BITS(4)*/ + 8;
        if (state.wbits === 0) {
          state.wbits = len;
        }
        if (len > 15 || len > state.wbits) {
          strm.msg = 'invalid window size';
          state.mode = BAD;
          break;
        }

        // !!! pako patch. Force use `options.windowBits` if passed.
        // Required to always use max window size by default.
        state.dmax = 1 << state.wbits;
        //state.dmax = 1 << len;

        state.flags = 0;               /* indicate zlib header */
        //Tracev((stderr, "inflate:   zlib header ok\n"));
        strm.adler = state.check = 1/*adler32(0L, Z_NULL, 0)*/;
        state.mode = hold & 0x200 ? DICTID : TYPE;
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        break;
      case FLAGS:
        //=== NEEDBITS(16); */
        while (bits < 16) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.flags = hold;
        if ((state.flags & 0xff) !== Z_DEFLATED) {
          strm.msg = 'unknown compression method';
          state.mode = BAD;
          break;
        }
        if (state.flags & 0xe000) {
          strm.msg = 'unknown header flags set';
          state.mode = BAD;
          break;
        }
        if (state.head) {
          state.head.text = ((hold >> 8) & 1);
        }
        if ((state.flags & 0x0200) && (state.wrap & 4)) {
          //=== CRC2(state.check, hold);
          hbuf[0] = hold & 0xff;
          hbuf[1] = (hold >>> 8) & 0xff;
          state.check = crc32_1(state.check, hbuf, 2, 0);
          //===//
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = TIME;
        /* falls through */
      case TIME:
        //=== NEEDBITS(32); */
        while (bits < 32) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if (state.head) {
          state.head.time = hold;
        }
        if ((state.flags & 0x0200) && (state.wrap & 4)) {
          //=== CRC4(state.check, hold)
          hbuf[0] = hold & 0xff;
          hbuf[1] = (hold >>> 8) & 0xff;
          hbuf[2] = (hold >>> 16) & 0xff;
          hbuf[3] = (hold >>> 24) & 0xff;
          state.check = crc32_1(state.check, hbuf, 4, 0);
          //===
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = OS;
        /* falls through */
      case OS:
        //=== NEEDBITS(16); */
        while (bits < 16) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if (state.head) {
          state.head.xflags = (hold & 0xff);
          state.head.os = (hold >> 8);
        }
        if ((state.flags & 0x0200) && (state.wrap & 4)) {
          //=== CRC2(state.check, hold);
          hbuf[0] = hold & 0xff;
          hbuf[1] = (hold >>> 8) & 0xff;
          state.check = crc32_1(state.check, hbuf, 2, 0);
          //===//
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = EXLEN;
        /* falls through */
      case EXLEN:
        if (state.flags & 0x0400) {
          //=== NEEDBITS(16); */
          while (bits < 16) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          state.length = hold;
          if (state.head) {
            state.head.extra_len = hold;
          }
          if ((state.flags & 0x0200) && (state.wrap & 4)) {
            //=== CRC2(state.check, hold);
            hbuf[0] = hold & 0xff;
            hbuf[1] = (hold >>> 8) & 0xff;
            state.check = crc32_1(state.check, hbuf, 2, 0);
            //===//
          }
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
        }
        else if (state.head) {
          state.head.extra = null/*Z_NULL*/;
        }
        state.mode = EXTRA;
        /* falls through */
      case EXTRA:
        if (state.flags & 0x0400) {
          copy = state.length;
          if (copy > have) { copy = have; }
          if (copy) {
            if (state.head) {
              len = state.head.extra_len - state.length;
              if (!state.head.extra) {
                // Use untyped array for more convenient processing later
                state.head.extra = new Uint8Array(state.head.extra_len);
              }
              state.head.extra.set(
                input.subarray(
                  next,
                  // extra field is limited to 65536 bytes
                  // - no need for additional size check
                  next + copy
                ),
                /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
                len
              );
              //zmemcpy(state.head.extra + len, next,
              //        len + copy > state.head.extra_max ?
              //        state.head.extra_max - len : copy);
            }
            if ((state.flags & 0x0200) && (state.wrap & 4)) {
              state.check = crc32_1(state.check, input, copy, next);
            }
            have -= copy;
            next += copy;
            state.length -= copy;
          }
          if (state.length) { break inf_leave; }
        }
        state.length = 0;
        state.mode = NAME;
        /* falls through */
      case NAME:
        if (state.flags & 0x0800) {
          if (have === 0) { break inf_leave; }
          copy = 0;
          do {
            // TODO: 2 or 1 bytes?
            len = input[next + copy++];
            /* use constant limit because in js we should not preallocate memory */
            if (state.head && len &&
                (state.length < 65536 /*state.head.name_max*/)) {
              state.head.name += String.fromCharCode(len);
            }
          } while (len && copy < have);

          if ((state.flags & 0x0200) && (state.wrap & 4)) {
            state.check = crc32_1(state.check, input, copy, next);
          }
          have -= copy;
          next += copy;
          if (len) { break inf_leave; }
        }
        else if (state.head) {
          state.head.name = null;
        }
        state.length = 0;
        state.mode = COMMENT;
        /* falls through */
      case COMMENT:
        if (state.flags & 0x1000) {
          if (have === 0) { break inf_leave; }
          copy = 0;
          do {
            len = input[next + copy++];
            /* use constant limit because in js we should not preallocate memory */
            if (state.head && len &&
                (state.length < 65536 /*state.head.comm_max*/)) {
              state.head.comment += String.fromCharCode(len);
            }
          } while (len && copy < have);
          if ((state.flags & 0x0200) && (state.wrap & 4)) {
            state.check = crc32_1(state.check, input, copy, next);
          }
          have -= copy;
          next += copy;
          if (len) { break inf_leave; }
        }
        else if (state.head) {
          state.head.comment = null;
        }
        state.mode = HCRC;
        /* falls through */
      case HCRC:
        if (state.flags & 0x0200) {
          //=== NEEDBITS(16); */
          while (bits < 16) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          if ((state.wrap & 4) && hold !== (state.check & 0xffff)) {
            strm.msg = 'header crc mismatch';
            state.mode = BAD;
            break;
          }
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
        }
        if (state.head) {
          state.head.hcrc = ((state.flags >> 9) & 1);
          state.head.done = true;
        }
        strm.adler = state.check = 0;
        state.mode = TYPE;
        break;
      case DICTID:
        //=== NEEDBITS(32); */
        while (bits < 32) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        strm.adler = state.check = zswap32(hold);
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = DICT;
        /* falls through */
      case DICT:
        if (state.havedict === 0) {
          //--- RESTORE() ---
          strm.next_out = put;
          strm.avail_out = left;
          strm.next_in = next;
          strm.avail_in = have;
          state.hold = hold;
          state.bits = bits;
          //---
          return Z_NEED_DICT$1;
        }
        strm.adler = state.check = 1/*adler32(0L, Z_NULL, 0)*/;
        state.mode = TYPE;
        /* falls through */
      case TYPE:
        if (flush === Z_BLOCK || flush === Z_TREES) { break inf_leave; }
        /* falls through */
      case TYPEDO:
        if (state.last) {
          //--- BYTEBITS() ---//
          hold >>>= bits & 7;
          bits -= bits & 7;
          //---//
          state.mode = CHECK;
          break;
        }
        //=== NEEDBITS(3); */
        while (bits < 3) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.last = (hold & 0x01)/*BITS(1)*/;
        //--- DROPBITS(1) ---//
        hold >>>= 1;
        bits -= 1;
        //---//

        switch ((hold & 0x03)/*BITS(2)*/) {
          case 0:                             /* stored block */
            //Tracev((stderr, "inflate:     stored block%s\n",
            //        state.last ? " (last)" : ""));
            state.mode = STORED;
            break;
          case 1:                             /* fixed block */
            fixedtables(state);
            //Tracev((stderr, "inflate:     fixed codes block%s\n",
            //        state.last ? " (last)" : ""));
            state.mode = LEN_;             /* decode codes */
            if (flush === Z_TREES) {
              //--- DROPBITS(2) ---//
              hold >>>= 2;
              bits -= 2;
              //---//
              break inf_leave;
            }
            break;
          case 2:                             /* dynamic block */
            //Tracev((stderr, "inflate:     dynamic codes block%s\n",
            //        state.last ? " (last)" : ""));
            state.mode = TABLE;
            break;
          case 3:
            strm.msg = 'invalid block type';
            state.mode = BAD;
        }
        //--- DROPBITS(2) ---//
        hold >>>= 2;
        bits -= 2;
        //---//
        break;
      case STORED:
        //--- BYTEBITS() ---// /* go to byte boundary */
        hold >>>= bits & 7;
        bits -= bits & 7;
        //---//
        //=== NEEDBITS(32); */
        while (bits < 32) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if ((hold & 0xffff) !== ((hold >>> 16) ^ 0xffff)) {
          strm.msg = 'invalid stored block lengths';
          state.mode = BAD;
          break;
        }
        state.length = hold & 0xffff;
        //Tracev((stderr, "inflate:       stored length %u\n",
        //        state.length));
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = COPY_;
        if (flush === Z_TREES) { break inf_leave; }
        /* falls through */
      case COPY_:
        state.mode = COPY;
        /* falls through */
      case COPY:
        copy = state.length;
        if (copy) {
          if (copy > have) { copy = have; }
          if (copy > left) { copy = left; }
          if (copy === 0) { break inf_leave; }
          //--- zmemcpy(put, next, copy); ---
          output.set(input.subarray(next, next + copy), put);
          //---//
          have -= copy;
          next += copy;
          left -= copy;
          put += copy;
          state.length -= copy;
          break;
        }
        //Tracev((stderr, "inflate:       stored end\n"));
        state.mode = TYPE;
        break;
      case TABLE:
        //=== NEEDBITS(14); */
        while (bits < 14) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.nlen = (hold & 0x1f)/*BITS(5)*/ + 257;
        //--- DROPBITS(5) ---//
        hold >>>= 5;
        bits -= 5;
        //---//
        state.ndist = (hold & 0x1f)/*BITS(5)*/ + 1;
        //--- DROPBITS(5) ---//
        hold >>>= 5;
        bits -= 5;
        //---//
        state.ncode = (hold & 0x0f)/*BITS(4)*/ + 4;
        //--- DROPBITS(4) ---//
        hold >>>= 4;
        bits -= 4;
        //---//
//#ifndef PKZIP_BUG_WORKAROUND
        if (state.nlen > 286 || state.ndist > 30) {
          strm.msg = 'too many length or distance symbols';
          state.mode = BAD;
          break;
        }
//#endif
        //Tracev((stderr, "inflate:       table sizes ok\n"));
        state.have = 0;
        state.mode = LENLENS;
        /* falls through */
      case LENLENS:
        while (state.have < state.ncode) {
          //=== NEEDBITS(3);
          while (bits < 3) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          state.lens[order[state.have++]] = (hold & 0x07);//BITS(3);
          //--- DROPBITS(3) ---//
          hold >>>= 3;
          bits -= 3;
          //---//
        }
        while (state.have < 19) {
          state.lens[order[state.have++]] = 0;
        }
        // We have separate tables & no pointers. 2 commented lines below not needed.
        //state.next = state.codes;
        //state.lencode = state.next;
        // Switch to use dynamic table
        state.lencode = state.lendyn;
        state.lenbits = 7;

        opts = { bits: state.lenbits };
        ret = inftrees(CODES, state.lens, 0, 19, state.lencode, 0, state.work, opts);
        state.lenbits = opts.bits;

        if (ret) {
          strm.msg = 'invalid code lengths set';
          state.mode = BAD;
          break;
        }
        //Tracev((stderr, "inflate:       code lengths ok\n"));
        state.have = 0;
        state.mode = CODELENS;
        /* falls through */
      case CODELENS:
        while (state.have < state.nlen + state.ndist) {
          for (;;) {
            here = state.lencode[hold & ((1 << state.lenbits) - 1)];/*BITS(state.lenbits)*/
            here_bits = here >>> 24;
            here_op = (here >>> 16) & 0xff;
            here_val = here & 0xffff;

            if ((here_bits) <= bits) { break; }
            //--- PULLBYTE() ---//
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
            //---//
          }
          if (here_val < 16) {
            //--- DROPBITS(here.bits) ---//
            hold >>>= here_bits;
            bits -= here_bits;
            //---//
            state.lens[state.have++] = here_val;
          }
          else {
            if (here_val === 16) {
              //=== NEEDBITS(here.bits + 2);
              n = here_bits + 2;
              while (bits < n) {
                if (have === 0) { break inf_leave; }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              //--- DROPBITS(here.bits) ---//
              hold >>>= here_bits;
              bits -= here_bits;
              //---//
              if (state.have === 0) {
                strm.msg = 'invalid bit length repeat';
                state.mode = BAD;
                break;
              }
              len = state.lens[state.have - 1];
              copy = 3 + (hold & 0x03);//BITS(2);
              //--- DROPBITS(2) ---//
              hold >>>= 2;
              bits -= 2;
              //---//
            }
            else if (here_val === 17) {
              //=== NEEDBITS(here.bits + 3);
              n = here_bits + 3;
              while (bits < n) {
                if (have === 0) { break inf_leave; }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              //--- DROPBITS(here.bits) ---//
              hold >>>= here_bits;
              bits -= here_bits;
              //---//
              len = 0;
              copy = 3 + (hold & 0x07);//BITS(3);
              //--- DROPBITS(3) ---//
              hold >>>= 3;
              bits -= 3;
              //---//
            }
            else {
              //=== NEEDBITS(here.bits + 7);
              n = here_bits + 7;
              while (bits < n) {
                if (have === 0) { break inf_leave; }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              //--- DROPBITS(here.bits) ---//
              hold >>>= here_bits;
              bits -= here_bits;
              //---//
              len = 0;
              copy = 11 + (hold & 0x7f);//BITS(7);
              //--- DROPBITS(7) ---//
              hold >>>= 7;
              bits -= 7;
              //---//
            }
            if (state.have + copy > state.nlen + state.ndist) {
              strm.msg = 'invalid bit length repeat';
              state.mode = BAD;
              break;
            }
            while (copy--) {
              state.lens[state.have++] = len;
            }
          }
        }

        /* handle error breaks in while */
        if (state.mode === BAD) { break; }

        /* check for end-of-block code (better have one) */
        if (state.lens[256] === 0) {
          strm.msg = 'invalid code -- missing end-of-block';
          state.mode = BAD;
          break;
        }

        /* build code tables -- note: do not change the lenbits or distbits
           values here (9 and 6) without reading the comments in inftrees.h
           concerning the ENOUGH constants, which depend on those values */
        state.lenbits = 9;

        opts = { bits: state.lenbits };
        ret = inftrees(LENS, state.lens, 0, state.nlen, state.lencode, 0, state.work, opts);
        // We have separate tables & no pointers. 2 commented lines below not needed.
        // state.next_index = opts.table_index;
        state.lenbits = opts.bits;
        // state.lencode = state.next;

        if (ret) {
          strm.msg = 'invalid literal/lengths set';
          state.mode = BAD;
          break;
        }

        state.distbits = 6;
        //state.distcode.copy(state.codes);
        // Switch to use dynamic table
        state.distcode = state.distdyn;
        opts = { bits: state.distbits };
        ret = inftrees(DISTS, state.lens, state.nlen, state.ndist, state.distcode, 0, state.work, opts);
        // We have separate tables & no pointers. 2 commented lines below not needed.
        // state.next_index = opts.table_index;
        state.distbits = opts.bits;
        // state.distcode = state.next;

        if (ret) {
          strm.msg = 'invalid distances set';
          state.mode = BAD;
          break;
        }
        //Tracev((stderr, 'inflate:       codes ok\n'));
        state.mode = LEN_;
        if (flush === Z_TREES) { break inf_leave; }
        /* falls through */
      case LEN_:
        state.mode = LEN;
        /* falls through */
      case LEN:
        if (have >= 6 && left >= 258) {
          //--- RESTORE() ---
          strm.next_out = put;
          strm.avail_out = left;
          strm.next_in = next;
          strm.avail_in = have;
          state.hold = hold;
          state.bits = bits;
          //---
          inffast(strm, _out);
          //--- LOAD() ---
          put = strm.next_out;
          output = strm.output;
          left = strm.avail_out;
          next = strm.next_in;
          input = strm.input;
          have = strm.avail_in;
          hold = state.hold;
          bits = state.bits;
          //---

          if (state.mode === TYPE) {
            state.back = -1;
          }
          break;
        }
        state.back = 0;
        for (;;) {
          here = state.lencode[hold & ((1 << state.lenbits) - 1)];  /*BITS(state.lenbits)*/
          here_bits = here >>> 24;
          here_op = (here >>> 16) & 0xff;
          here_val = here & 0xffff;

          if (here_bits <= bits) { break; }
          //--- PULLBYTE() ---//
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
          //---//
        }
        if (here_op && (here_op & 0xf0) === 0) {
          last_bits = here_bits;
          last_op = here_op;
          last_val = here_val;
          for (;;) {
            here = state.lencode[last_val +
                    ((hold & ((1 << (last_bits + last_op)) - 1))/*BITS(last.bits + last.op)*/ >> last_bits)];
            here_bits = here >>> 24;
            here_op = (here >>> 16) & 0xff;
            here_val = here & 0xffff;

            if ((last_bits + here_bits) <= bits) { break; }
            //--- PULLBYTE() ---//
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
            //---//
          }
          //--- DROPBITS(last.bits) ---//
          hold >>>= last_bits;
          bits -= last_bits;
          //---//
          state.back += last_bits;
        }
        //--- DROPBITS(here.bits) ---//
        hold >>>= here_bits;
        bits -= here_bits;
        //---//
        state.back += here_bits;
        state.length = here_val;
        if (here_op === 0) {
          //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
          //        "inflate:         literal '%c'\n" :
          //        "inflate:         literal 0x%02x\n", here.val));
          state.mode = LIT;
          break;
        }
        if (here_op & 32) {
          //Tracevv((stderr, "inflate:         end of block\n"));
          state.back = -1;
          state.mode = TYPE;
          break;
        }
        if (here_op & 64) {
          strm.msg = 'invalid literal/length code';
          state.mode = BAD;
          break;
        }
        state.extra = here_op & 15;
        state.mode = LENEXT;
        /* falls through */
      case LENEXT:
        if (state.extra) {
          //=== NEEDBITS(state.extra);
          n = state.extra;
          while (bits < n) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          state.length += hold & ((1 << state.extra) - 1)/*BITS(state.extra)*/;
          //--- DROPBITS(state.extra) ---//
          hold >>>= state.extra;
          bits -= state.extra;
          //---//
          state.back += state.extra;
        }
        //Tracevv((stderr, "inflate:         length %u\n", state.length));
        state.was = state.length;
        state.mode = DIST;
        /* falls through */
      case DIST:
        for (;;) {
          here = state.distcode[hold & ((1 << state.distbits) - 1)];/*BITS(state.distbits)*/
          here_bits = here >>> 24;
          here_op = (here >>> 16) & 0xff;
          here_val = here & 0xffff;

          if ((here_bits) <= bits) { break; }
          //--- PULLBYTE() ---//
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
          //---//
        }
        if ((here_op & 0xf0) === 0) {
          last_bits = here_bits;
          last_op = here_op;
          last_val = here_val;
          for (;;) {
            here = state.distcode[last_val +
                    ((hold & ((1 << (last_bits + last_op)) - 1))/*BITS(last.bits + last.op)*/ >> last_bits)];
            here_bits = here >>> 24;
            here_op = (here >>> 16) & 0xff;
            here_val = here & 0xffff;

            if ((last_bits + here_bits) <= bits) { break; }
            //--- PULLBYTE() ---//
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
            //---//
          }
          //--- DROPBITS(last.bits) ---//
          hold >>>= last_bits;
          bits -= last_bits;
          //---//
          state.back += last_bits;
        }
        //--- DROPBITS(here.bits) ---//
        hold >>>= here_bits;
        bits -= here_bits;
        //---//
        state.back += here_bits;
        if (here_op & 64) {
          strm.msg = 'invalid distance code';
          state.mode = BAD;
          break;
        }
        state.offset = here_val;
        state.extra = (here_op) & 15;
        state.mode = DISTEXT;
        /* falls through */
      case DISTEXT:
        if (state.extra) {
          //=== NEEDBITS(state.extra);
          n = state.extra;
          while (bits < n) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          state.offset += hold & ((1 << state.extra) - 1)/*BITS(state.extra)*/;
          //--- DROPBITS(state.extra) ---//
          hold >>>= state.extra;
          bits -= state.extra;
          //---//
          state.back += state.extra;
        }
//#ifdef INFLATE_STRICT
        if (state.offset > state.dmax) {
          strm.msg = 'invalid distance too far back';
          state.mode = BAD;
          break;
        }
//#endif
        //Tracevv((stderr, "inflate:         distance %u\n", state.offset));
        state.mode = MATCH;
        /* falls through */
      case MATCH:
        if (left === 0) { break inf_leave; }
        copy = _out - left;
        if (state.offset > copy) {         /* copy from window */
          copy = state.offset - copy;
          if (copy > state.whave) {
            if (state.sane) {
              strm.msg = 'invalid distance too far back';
              state.mode = BAD;
              break;
            }
// (!) This block is disabled in zlib defaults,
// don't enable it for binary compatibility
//#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
//          Trace((stderr, "inflate.c too far\n"));
//          copy -= state.whave;
//          if (copy > state.length) { copy = state.length; }
//          if (copy > left) { copy = left; }
//          left -= copy;
//          state.length -= copy;
//          do {
//            output[put++] = 0;
//          } while (--copy);
//          if (state.length === 0) { state.mode = LEN; }
//          break;
//#endif
          }
          if (copy > state.wnext) {
            copy -= state.wnext;
            from = state.wsize - copy;
          }
          else {
            from = state.wnext - copy;
          }
          if (copy > state.length) { copy = state.length; }
          from_source = state.window;
        }
        else {                              /* copy from output */
          from_source = output;
          from = put - state.offset;
          copy = state.length;
        }
        if (copy > left) { copy = left; }
        left -= copy;
        state.length -= copy;
        do {
          output[put++] = from_source[from++];
        } while (--copy);
        if (state.length === 0) { state.mode = LEN; }
        break;
      case LIT:
        if (left === 0) { break inf_leave; }
        output[put++] = state.length;
        left--;
        state.mode = LEN;
        break;
      case CHECK:
        if (state.wrap) {
          //=== NEEDBITS(32);
          while (bits < 32) {
            if (have === 0) { break inf_leave; }
            have--;
            // Use '|' instead of '+' to make sure that result is signed
            hold |= input[next++] << bits;
            bits += 8;
          }
          //===//
          _out -= left;
          strm.total_out += _out;
          state.total += _out;
          if ((state.wrap & 4) && _out) {
            strm.adler = state.check =
                /*UPDATE_CHECK(state.check, put - _out, _out);*/
                (state.flags ? crc32_1(state.check, output, _out, put - _out) : adler32_1(state.check, output, _out, put - _out));

          }
          _out = left;
          // NB: crc32 stored as signed 32-bit int, zswap32 returns signed too
          if ((state.wrap & 4) && (state.flags ? hold : zswap32(hold)) !== state.check) {
            strm.msg = 'incorrect data check';
            state.mode = BAD;
            break;
          }
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
          //Tracev((stderr, "inflate:   check matches trailer\n"));
        }
        state.mode = LENGTH;
        /* falls through */
      case LENGTH:
        if (state.wrap && state.flags) {
          //=== NEEDBITS(32);
          while (bits < 32) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          if ((state.wrap & 4) && hold !== (state.total & 0xffffffff)) {
            strm.msg = 'incorrect length check';
            state.mode = BAD;
            break;
          }
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
          //Tracev((stderr, "inflate:   length matches trailer\n"));
        }
        state.mode = DONE;
        /* falls through */
      case DONE:
        ret = Z_STREAM_END$1;
        break inf_leave;
      case BAD:
        ret = Z_DATA_ERROR$1;
        break inf_leave;
      case MEM:
        return Z_MEM_ERROR$1;
      case SYNC:
        /* falls through */
      default:
        return Z_STREAM_ERROR$1;
    }
  }

  // inf_leave <- here is real place for "goto inf_leave", emulated via "break inf_leave"

  /*
     Return from inflate(), updating the total counts and the check value.
     If there was no progress during the inflate() call, return a buffer
     error.  Call updatewindow() to create and/or update the window state.
     Note: a memory error from inflate() is non-recoverable.
   */

  //--- RESTORE() ---
  strm.next_out = put;
  strm.avail_out = left;
  strm.next_in = next;
  strm.avail_in = have;
  state.hold = hold;
  state.bits = bits;
  //---

  if (state.wsize || (_out !== strm.avail_out && state.mode < BAD &&
                      (state.mode < CHECK || flush !== Z_FINISH$1))) {
    if (updatewindow(strm, strm.output, strm.next_out, _out - strm.avail_out)) ;
  }
  _in -= strm.avail_in;
  _out -= strm.avail_out;
  strm.total_in += _in;
  strm.total_out += _out;
  state.total += _out;
  if ((state.wrap & 4) && _out) {
    strm.adler = state.check = /*UPDATE_CHECK(state.check, strm.next_out - _out, _out);*/
      (state.flags ? crc32_1(state.check, output, _out, strm.next_out - _out) : adler32_1(state.check, output, _out, strm.next_out - _out));
  }
  strm.data_type = state.bits + (state.last ? 64 : 0) +
                    (state.mode === TYPE ? 128 : 0) +
                    (state.mode === LEN_ || state.mode === COPY_ ? 256 : 0);
  if (((_in === 0 && _out === 0) || flush === Z_FINISH$1) && ret === Z_OK$1) {
    ret = Z_BUF_ERROR;
  }
  return ret;
};


const inflateEnd = (strm) => {

  if (inflateStateCheck(strm)) {
    return Z_STREAM_ERROR$1;
  }

  let state = strm.state;
  if (state.window) {
    state.window = null;
  }
  strm.state = null;
  return Z_OK$1;
};


const inflateGetHeader = (strm, head) => {

  /* check state */
  if (inflateStateCheck(strm)) { return Z_STREAM_ERROR$1; }
  const state = strm.state;
  if ((state.wrap & 2) === 0) { return Z_STREAM_ERROR$1; }

  /* save header structure */
  state.head = head;
  head.done = false;
  return Z_OK$1;
};


const inflateSetDictionary = (strm, dictionary) => {
  const dictLength = dictionary.length;

  let state;
  let dictid;
  let ret;

  /* check state */
  if (inflateStateCheck(strm)) { return Z_STREAM_ERROR$1; }
  state = strm.state;

  if (state.wrap !== 0 && state.mode !== DICT) {
    return Z_STREAM_ERROR$1;
  }

  /* check for correct dictionary identifier */
  if (state.mode === DICT) {
    dictid = 1; /* adler32(0, null, 0)*/
    /* dictid = adler32(dictid, dictionary, dictLength); */
    dictid = adler32_1(dictid, dictionary, dictLength, 0);
    if (dictid !== state.check) {
      return Z_DATA_ERROR$1;
    }
  }
  /* copy dictionary to window using updatewindow(), which will amend the
   existing dictionary if appropriate */
  ret = updatewindow(strm, dictionary, dictLength, dictLength);
  if (ret) {
    state.mode = MEM;
    return Z_MEM_ERROR$1;
  }
  state.havedict = 1;
  // Tracev((stderr, "inflate:   dictionary set\n"));
  return Z_OK$1;
};


var inflateReset_1 = inflateReset;
var inflateReset2_1 = inflateReset2;
var inflateResetKeep_1 = inflateResetKeep;
var inflateInit_1 = inflateInit;
var inflateInit2_1 = inflateInit2;
var inflate_2$1 = inflate$2;
var inflateEnd_1 = inflateEnd;
var inflateGetHeader_1 = inflateGetHeader;
var inflateSetDictionary_1 = inflateSetDictionary;
var inflateInfo = 'pako inflate (from Nodeca project)';

/* Not implemented
module.exports.inflateCodesUsed = inflateCodesUsed;
module.exports.inflateCopy = inflateCopy;
module.exports.inflateGetDictionary = inflateGetDictionary;
module.exports.inflateMark = inflateMark;
module.exports.inflatePrime = inflatePrime;
module.exports.inflateSync = inflateSync;
module.exports.inflateSyncPoint = inflateSyncPoint;
module.exports.inflateUndermine = inflateUndermine;
module.exports.inflateValidate = inflateValidate;
*/

var inflate_1$2 = {
	inflateReset: inflateReset_1,
	inflateReset2: inflateReset2_1,
	inflateResetKeep: inflateResetKeep_1,
	inflateInit: inflateInit_1,
	inflateInit2: inflateInit2_1,
	inflate: inflate_2$1,
	inflateEnd: inflateEnd_1,
	inflateGetHeader: inflateGetHeader_1,
	inflateSetDictionary: inflateSetDictionary_1,
	inflateInfo: inflateInfo
};

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

function GZheader() {
  /* true if compressed data believed to be text */
  this.text       = 0;
  /* modification time */
  this.time       = 0;
  /* extra flags (not used when writing a gzip file) */
  this.xflags     = 0;
  /* operating system */
  this.os         = 0;
  /* pointer to extra field or Z_NULL if none */
  this.extra      = null;
  /* extra field length (valid if extra != Z_NULL) */
  this.extra_len  = 0; // Actually, we don't need it in JS,
                       // but leave for few code modifications

  //
  // Setup limits is not necessary because in js we should not preallocate memory
  // for inflate use constant limit in 65536 bytes
  //

  /* space at extra (only when reading header) */
  // this.extra_max  = 0;
  /* pointer to zero-terminated file name or Z_NULL */
  this.name       = '';
  /* space at name (only when reading header) */
  // this.name_max   = 0;
  /* pointer to zero-terminated comment or Z_NULL */
  this.comment    = '';
  /* space at comment (only when reading header) */
  // this.comm_max   = 0;
  /* true if there was or will be a header crc */
  this.hcrc       = 0;
  /* true when done reading gzip header (not used when writing a gzip file) */
  this.done       = false;
}

var gzheader = GZheader;

const toString = Object.prototype.toString;

/* Public constants ==========================================================*/
/* ===========================================================================*/

const {
  Z_NO_FLUSH, Z_FINISH,
  Z_OK, Z_STREAM_END, Z_NEED_DICT, Z_STREAM_ERROR, Z_DATA_ERROR, Z_MEM_ERROR
} = constants$2;

/* ===========================================================================*/


/**
 * class Inflate
 *
 * Generic JS-style wrapper for zlib calls. If you don't need
 * streaming behaviour - use more simple functions: [[inflate]]
 * and [[inflateRaw]].
 **/

/* internal
 * inflate.chunks -> Array
 *
 * Chunks of output data, if [[Inflate#onData]] not overridden.
 **/

/**
 * Inflate.result -> Uint8Array|String
 *
 * Uncompressed result, generated by default [[Inflate#onData]]
 * and [[Inflate#onEnd]] handlers. Filled after you push last chunk
 * (call [[Inflate#push]] with `Z_FINISH` / `true` param).
 **/

/**
 * Inflate.err -> Number
 *
 * Error code after inflate finished. 0 (Z_OK) on success.
 * Should be checked if broken data possible.
 **/

/**
 * Inflate.msg -> String
 *
 * Error message, if [[Inflate.err]] != 0
 **/


/**
 * new Inflate(options)
 * - options (Object): zlib inflate options.
 *
 * Creates new inflator instance with specified params. Throws exception
 * on bad params. Supported options:
 *
 * - `windowBits`
 * - `dictionary`
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Additional options, for internal needs:
 *
 * - `chunkSize` - size of generated data chunks (16K by default)
 * - `raw` (Boolean) - do raw inflate
 * - `to` (String) - if equal to 'string', then result will be converted
 *   from utf8 to utf16 (javascript) string. When string output requested,
 *   chunk length can differ from `chunkSize`, depending on content.
 *
 * By default, when no options set, autodetect deflate/gzip data format via
 * wrapper header.
 *
 * ##### Example:
 *
 * ```javascript
 * const pako = require('pako')
 * const chunk1 = new Uint8Array([1,2,3,4,5,6,7,8,9])
 * const chunk2 = new Uint8Array([10,11,12,13,14,15,16,17,18,19]);
 *
 * const inflate = new pako.Inflate({ level: 3});
 *
 * inflate.push(chunk1, false);
 * inflate.push(chunk2, true);  // true -> last chunk
 *
 * if (inflate.err) { throw new Error(inflate.err); }
 *
 * console.log(inflate.result);
 * ```
 **/
function Inflate$1(options) {
  this.options = common.assign({
    chunkSize: 1024 * 64,
    windowBits: 15,
    to: ''
  }, options || {});

  const opt = this.options;

  // Force window size for `raw` data, if not set directly,
  // because we have no header for autodetect.
  if (opt.raw && (opt.windowBits >= 0) && (opt.windowBits < 16)) {
    opt.windowBits = -opt.windowBits;
    if (opt.windowBits === 0) { opt.windowBits = -15; }
  }

  // If `windowBits` not defined (and mode not raw) - set autodetect flag for gzip/deflate
  if ((opt.windowBits >= 0) && (opt.windowBits < 16) &&
      !(options && options.windowBits)) {
    opt.windowBits += 32;
  }

  // Gzip header has no info about windows size, we can do autodetect only
  // for deflate. So, if window size not set, force it to max when gzip possible
  if ((opt.windowBits > 15) && (opt.windowBits < 48)) {
    // bit 3 (16) -> gzipped data
    // bit 4 (32) -> autodetect gzip/deflate
    if ((opt.windowBits & 15) === 0) {
      opt.windowBits |= 15;
    }
  }

  this.err    = 0;      // error code, if happens (0 = Z_OK)
  this.msg    = '';     // error message
  this.ended  = false;  // used to avoid multiple onEnd() calls
  this.chunks = [];     // chunks of compressed data

  this.strm   = new zstream();
  this.strm.avail_out = 0;

  let status  = inflate_1$2.inflateInit2(
    this.strm,
    opt.windowBits
  );

  if (status !== Z_OK) {
    throw new Error(messages[status]);
  }

  this.header = new gzheader();

  inflate_1$2.inflateGetHeader(this.strm, this.header);

  // Setup dictionary
  if (opt.dictionary) {
    // Convert data if needed
    if (typeof opt.dictionary === 'string') {
      opt.dictionary = strings.string2buf(opt.dictionary);
    } else if (toString.call(opt.dictionary) === '[object ArrayBuffer]') {
      opt.dictionary = new Uint8Array(opt.dictionary);
    }
    if (opt.raw) { //In raw mode we need to set the dictionary early
      status = inflate_1$2.inflateSetDictionary(this.strm, opt.dictionary);
      if (status !== Z_OK) {
        throw new Error(messages[status]);
      }
    }
  }
}

/**
 * Inflate#push(data[, flush_mode]) -> Boolean
 * - data (Uint8Array|ArrayBuffer): input data
 * - flush_mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE
 *   flush modes. See constants. Skipped or `false` means Z_NO_FLUSH,
 *   `true` means Z_FINISH.
 *
 * Sends input data to inflate pipe, generating [[Inflate#onData]] calls with
 * new output chunks. Returns `true` on success. If end of stream detected,
 * [[Inflate#onEnd]] will be called.
 *
 * `flush_mode` is not needed for normal operation, because end of stream
 * detected automatically. You may try to use it for advanced things, but
 * this functionality was not tested.
 *
 * On fail call [[Inflate#onEnd]] with error code and return false.
 *
 * ##### Example
 *
 * ```javascript
 * push(chunk, false); // push one of data chunks
 * ...
 * push(chunk, true);  // push last chunk
 * ```
 **/
Inflate$1.prototype.push = function (data, flush_mode) {
  const strm = this.strm;
  const chunkSize = this.options.chunkSize;
  const dictionary = this.options.dictionary;
  let status, _flush_mode, last_avail_out;

  if (this.ended) return false;

  if (flush_mode === ~~flush_mode) _flush_mode = flush_mode;
  else _flush_mode = flush_mode === true ? Z_FINISH : Z_NO_FLUSH;

  // Convert data if needed
  if (toString.call(data) === '[object ArrayBuffer]') {
    strm.input = new Uint8Array(data);
  } else {
    strm.input = data;
  }

  strm.next_in = 0;
  strm.avail_in = strm.input.length;

  for (;;) {
    if (strm.avail_out === 0) {
      strm.output = new Uint8Array(chunkSize);
      strm.next_out = 0;
      strm.avail_out = chunkSize;
    }

    status = inflate_1$2.inflate(strm, _flush_mode);

    if (status === Z_NEED_DICT && dictionary) {
      status = inflate_1$2.inflateSetDictionary(strm, dictionary);

      if (status === Z_OK) {
        status = inflate_1$2.inflate(strm, _flush_mode);
      } else if (status === Z_DATA_ERROR) {
        // Replace code with more verbose
        status = Z_NEED_DICT;
      }
    }

    // Skip snyc markers if more data follows and not raw mode
    while (strm.avail_in > 0 &&
           status === Z_STREAM_END &&
           strm.state.wrap > 0 &&
           data[strm.next_in] !== 0)
    {
      inflate_1$2.inflateReset(strm);
      status = inflate_1$2.inflate(strm, _flush_mode);
    }

    switch (status) {
      case Z_STREAM_ERROR:
      case Z_DATA_ERROR:
      case Z_NEED_DICT:
      case Z_MEM_ERROR:
        this.onEnd(status);
        this.ended = true;
        return false;
    }

    // Remember real `avail_out` value, because we may patch out buffer content
    // to align utf8 strings boundaries.
    last_avail_out = strm.avail_out;

    if (strm.next_out) {
      if (strm.avail_out === 0 || status === Z_STREAM_END) {

        if (this.options.to === 'string') {

          let next_out_utf8 = strings.utf8border(strm.output, strm.next_out);

          let tail = strm.next_out - next_out_utf8;
          let utf8str = strings.buf2string(strm.output, next_out_utf8);

          // move tail & realign counters
          strm.next_out = tail;
          strm.avail_out = chunkSize - tail;
          if (tail) strm.output.set(strm.output.subarray(next_out_utf8, next_out_utf8 + tail), 0);

          this.onData(utf8str);

        } else {
          this.onData(strm.output.length === strm.next_out ? strm.output : strm.output.subarray(0, strm.next_out));
        }
      }
    }

    // Must repeat iteration if out buffer is full
    if (status === Z_OK && last_avail_out === 0) continue;

    // Finalize if end of stream reached.
    if (status === Z_STREAM_END) {
      status = inflate_1$2.inflateEnd(this.strm);
      this.onEnd(status);
      this.ended = true;
      return true;
    }

    if (strm.avail_in === 0) break;
  }

  return true;
};


/**
 * Inflate#onData(chunk) -> Void
 * - chunk (Uint8Array|String): output data. When string output requested,
 *   each chunk will be string.
 *
 * By default, stores data blocks in `chunks[]` property and glue
 * those in `onEnd`. Override this handler, if you need another behaviour.
 **/
Inflate$1.prototype.onData = function (chunk) {
  this.chunks.push(chunk);
};


/**
 * Inflate#onEnd(status) -> Void
 * - status (Number): inflate status. 0 (Z_OK) on success,
 *   other if not.
 *
 * Called either after you tell inflate that the input stream is
 * complete (Z_FINISH). By default - join collected chunks,
 * free memory and fill `results` / `err` properties.
 **/
Inflate$1.prototype.onEnd = function (status) {
  // On success - join
  if (status === Z_OK) {
    if (this.options.to === 'string') {
      this.result = this.chunks.join('');
    } else {
      this.result = common.flattenChunks(this.chunks);
    }
  }
  this.chunks = [];
  this.err = status;
  this.msg = this.strm.msg;
};


/**
 * inflate(data[, options]) -> Uint8Array|String
 * - data (Uint8Array|ArrayBuffer): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * Decompress `data` with inflate/ungzip and `options`. Autodetect
 * format via wrapper header by default. That's why we don't provide
 * separate `ungzip` method.
 *
 * Supported options are:
 *
 * - windowBits
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information.
 *
 * Sugar (options):
 *
 * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
 *   negative windowBits implicitly.
 * - `to` (String) - if equal to 'string', then result will be converted
 *   from utf8 to utf16 (javascript) string. When string output requested,
 *   chunk length can differ from `chunkSize`, depending on content.
 *
 *
 * ##### Example:
 *
 * ```javascript
 * const pako = require('pako');
 * const input = pako.deflate(new Uint8Array([1,2,3,4,5,6,7,8,9]));
 * let output;
 *
 * try {
 *   output = pako.inflate(input);
 * } catch (err) {
 *   console.log(err);
 * }
 * ```
 **/
function inflate$1(input, options) {
  const inflator = new Inflate$1(options);

  inflator.push(input);

  // That will never happens, if you don't cheat with options :)
  if (inflator.err) throw inflator.msg || messages[inflator.err];

  return inflator.result;
}


/**
 * inflateRaw(data[, options]) -> Uint8Array|String
 * - data (Uint8Array|ArrayBuffer): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * The same as [[inflate]], but creates raw data, without wrapper
 * (header and adler32 crc).
 **/
function inflateRaw$1(input, options) {
  options = options || {};
  options.raw = true;
  return inflate$1(input, options);
}


/**
 * ungzip(data[, options]) -> Uint8Array|String
 * - data (Uint8Array|ArrayBuffer): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * Just shortcut to [[inflate]], because it autodetects format
 * by header.content. Done for convenience.
 **/


var Inflate_1$1 = Inflate$1;
var inflate_2 = inflate$1;
var inflateRaw_1$1 = inflateRaw$1;
var ungzip$1 = inflate$1;
var constants = constants$2;

var inflate_1$1 = {
	Inflate: Inflate_1$1,
	inflate: inflate_2,
	inflateRaw: inflateRaw_1$1,
	ungzip: ungzip$1,
	constants: constants
};

const { Inflate, inflate, inflateRaw, ungzip } = inflate_1$1;
var Inflate_1 = Inflate;
var inflate_1 = inflate;

const pngSignature = [137, 80, 78, 71, 13, 10, 26, 10];
const crcTable = [];
for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
        if (c & 1) {
            c = 0xedb88320 ^ (c >>> 1);
        }
        else {
            c = c >>> 1;
        }
    }
    crcTable[n] = c;
}
const initialCrc = 0xffffffff;
function updateCrc(currentCrc, data, length) {
    let c = currentCrc;
    for (let n = 0; n < length; n++) {
        c = crcTable[(c ^ data[n]) & 0xff] ^ (c >>> 8);
    }
    return c;
}
function crc(data, length) {
    return (updateCrc(initialCrc, data, length) ^ initialCrc) >>> 0;
}

var ColorType;
(function (ColorType) {
    ColorType[ColorType["UNKNOWN"] = -1] = "UNKNOWN";
    ColorType[ColorType["GREYSCALE"] = 0] = "GREYSCALE";
    ColorType[ColorType["TRUECOLOUR"] = 2] = "TRUECOLOUR";
    ColorType[ColorType["INDEXED_COLOUR"] = 3] = "INDEXED_COLOUR";
    ColorType[ColorType["GREYSCALE_ALPHA"] = 4] = "GREYSCALE_ALPHA";
    ColorType[ColorType["TRUECOLOUR_ALPHA"] = 6] = "TRUECOLOUR_ALPHA";
})(ColorType || (ColorType = {}));
var CompressionMethod;
(function (CompressionMethod) {
    CompressionMethod[CompressionMethod["UNKNOWN"] = -1] = "UNKNOWN";
    CompressionMethod[CompressionMethod["DEFLATE"] = 0] = "DEFLATE";
})(CompressionMethod || (CompressionMethod = {}));
var FilterMethod;
(function (FilterMethod) {
    FilterMethod[FilterMethod["UNKNOWN"] = -1] = "UNKNOWN";
    FilterMethod[FilterMethod["ADAPTIVE"] = 0] = "ADAPTIVE";
})(FilterMethod || (FilterMethod = {}));
var InterlaceMethod;
(function (InterlaceMethod) {
    InterlaceMethod[InterlaceMethod["UNKNOWN"] = -1] = "UNKNOWN";
    InterlaceMethod[InterlaceMethod["NO_INTERLACE"] = 0] = "NO_INTERLACE";
    InterlaceMethod[InterlaceMethod["ADAM7"] = 1] = "ADAM7";
})(InterlaceMethod || (InterlaceMethod = {}));

const empty = new Uint8Array(0);
const NULL = '\0';
const uint16 = new Uint16Array([0x00ff]);
const uint8 = new Uint8Array(uint16.buffer);
const osIsLittleEndian = uint8[0] === 0xff;
class PngDecoder extends IOBuffer {
    constructor(data, options = {}) {
        super(data);
        const { checkCrc = false } = options;
        this._checkCrc = checkCrc;
        this._inflator = new Inflate_1();
        this._png = {
            width: -1,
            height: -1,
            channels: -1,
            data: new Uint8Array(0),
            depth: 1,
            text: {},
        };
        this._end = false;
        this._hasPalette = false;
        this._palette = [];
        this._hasTransparency = false;
        this._transparency = new Uint16Array(0);
        this._compressionMethod = CompressionMethod.UNKNOWN;
        this._filterMethod = FilterMethod.UNKNOWN;
        this._interlaceMethod = InterlaceMethod.UNKNOWN;
        this._colorType = ColorType.UNKNOWN;
        // PNG is always big endian
        // https://www.w3.org/TR/PNG/#7Integers-and-byte-order
        this.setBigEndian();
    }
    decode() {
        this.decodeSignature();
        while (!this._end) {
            this.decodeChunk();
        }
        this.decodeImage();
        return this._png;
    }
    // https://www.w3.org/TR/PNG/#5PNG-file-signature
    decodeSignature() {
        for (let i = 0; i < pngSignature.length; i++) {
            if (this.readUint8() !== pngSignature[i]) {
                throw new Error(`wrong PNG signature. Byte at ${i} should be ${pngSignature[i]}.`);
            }
        }
    }
    // https://www.w3.org/TR/PNG/#5Chunk-layout
    decodeChunk() {
        const length = this.readUint32();
        const type = this.readChars(4);
        const offset = this.offset;
        switch (type) {
            // 11.2 Critical chunks
            case 'IHDR': // 11.2.2 IHDR Image header
                this.decodeIHDR();
                break;
            case 'PLTE': // 11.2.3 PLTE Palette
                this.decodePLTE(length);
                break;
            case 'IDAT': // 11.2.4 IDAT Image data
                this.decodeIDAT(length);
                break;
            case 'IEND': // 11.2.5 IEND Image trailer
                this._end = true;
                break;
            // 11.3 Ancillary chunks
            case 'tRNS': // 11.3.2.1 tRNS Transparency
                this.decodetRNS(length);
                break;
            case 'iCCP': // 11.3.3.3 iCCP Embedded ICC profile
                this.decodeiCCP(length);
                break;
            case 'tEXt': // 11.3.4.3 tEXt Textual data
                this.decodetEXt(length);
                break;
            case 'pHYs': // 11.3.5.3 pHYs Physical pixel dimensions
                this.decodepHYs();
                break;
            default:
                this.skip(length);
                break;
        }
        if (this.offset - offset !== length) {
            throw new Error(`Length mismatch while decoding chunk ${type}`);
        }
        if (this._checkCrc) {
            const expectedCrc = this.readUint32();
            const crcLength = length + 4; // includes type
            const actualCrc = crc(new Uint8Array(this.buffer, this.byteOffset + this.offset - crcLength - 4, crcLength), crcLength); // "- 4" because we already advanced by reading the CRC
            if (actualCrc !== expectedCrc) {
                throw new Error(`CRC mismatch for chunk ${type}. Expected ${expectedCrc}, found ${actualCrc}`);
            }
        }
        else {
            this.skip(4);
        }
    }
    // https://www.w3.org/TR/PNG/#11IHDR
    decodeIHDR() {
        const image = this._png;
        image.width = this.readUint32();
        image.height = this.readUint32();
        image.depth = checkBitDepth(this.readUint8());
        const colorType = this.readUint8();
        this._colorType = colorType;
        let channels;
        switch (colorType) {
            case ColorType.GREYSCALE:
                channels = 1;
                break;
            case ColorType.TRUECOLOUR:
                channels = 3;
                break;
            case ColorType.INDEXED_COLOUR:
                channels = 1;
                break;
            case ColorType.GREYSCALE_ALPHA:
                channels = 2;
                break;
            case ColorType.TRUECOLOUR_ALPHA:
                channels = 4;
                break;
            default:
                throw new Error(`Unknown color type: ${colorType}`);
        }
        this._png.channels = channels;
        this._compressionMethod = this.readUint8();
        if (this._compressionMethod !== CompressionMethod.DEFLATE) {
            throw new Error(`Unsupported compression method: ${this._compressionMethod}`);
        }
        this._filterMethod = this.readUint8();
        this._interlaceMethod = this.readUint8();
    }
    // https://www.w3.org/TR/PNG/#11PLTE
    decodePLTE(length) {
        if (length % 3 !== 0) {
            throw new RangeError(`PLTE field length must be a multiple of 3. Got ${length}`);
        }
        const l = length / 3;
        this._hasPalette = true;
        const palette = [];
        this._palette = palette;
        for (let i = 0; i < l; i++) {
            palette.push([this.readUint8(), this.readUint8(), this.readUint8()]);
        }
    }
    // https://www.w3.org/TR/PNG/#11IDAT
    decodeIDAT(length) {
        this._inflator.push(new Uint8Array(this.buffer, this.offset + this.byteOffset, length));
        this.skip(length);
    }
    // https://www.w3.org/TR/PNG/#11tRNS
    decodetRNS(length) {
        switch (this._colorType) {
            case ColorType.GREYSCALE:
            case ColorType.TRUECOLOUR: {
                if (length % 2 !== 0) {
                    throw new RangeError(`tRNS chunk length must be a multiple of 2. Got ${length}`);
                }
                if (length / 2 > this._png.width * this._png.height) {
                    throw new Error(`tRNS chunk contains more alpha values than there are pixels (${length / 2} vs ${this._png.width * this._png.height})`);
                }
                this._hasTransparency = true;
                this._transparency = new Uint16Array(length / 2);
                for (let i = 0; i < length / 2; i++) {
                    this._transparency[i] = this.readUint16();
                }
                break;
            }
            case ColorType.INDEXED_COLOUR: {
                if (length > this._palette.length) {
                    throw new Error(`tRNS chunk contains more alpha values than there are palette colors (${length} vs ${this._palette.length})`);
                }
                let i = 0;
                for (; i < length; i++) {
                    const alpha = this.readByte();
                    this._palette[i].push(alpha);
                }
                for (; i < this._palette.length; i++) {
                    this._palette[i].push(255);
                }
                break;
            }
            default: {
                throw new Error(`tRNS chunk is not supported for color type ${this._colorType}`);
            }
        }
    }
    // https://www.w3.org/TR/PNG/#11iCCP
    decodeiCCP(length) {
        let name = '';
        let char;
        while ((char = this.readChar()) !== NULL) {
            name += char;
        }
        const compressionMethod = this.readUint8();
        if (compressionMethod !== CompressionMethod.DEFLATE) {
            throw new Error(`Unsupported iCCP compression method: ${compressionMethod}`);
        }
        const compressedProfile = this.readBytes(length - name.length - 2);
        this._png.iccEmbeddedProfile = {
            name,
            profile: inflate_1(compressedProfile),
        };
    }
    // https://www.w3.org/TR/PNG/#11tEXt
    decodetEXt(length) {
        let keyword = '';
        let char;
        while ((char = this.readChar()) !== NULL) {
            keyword += char;
        }
        this._png.text[keyword] = this.readChars(length - keyword.length - 1);
    }
    // https://www.w3.org/TR/PNG/#11pHYs
    decodepHYs() {
        const ppuX = this.readUint32();
        const ppuY = this.readUint32();
        const unitSpecifier = this.readByte();
        this._png.resolution = { x: ppuX, y: ppuY, unit: unitSpecifier };
    }
    decodeImage() {
        if (this._inflator.err) {
            throw new Error(`Error while decompressing the data: ${this._inflator.err}`);
        }
        const data = this._inflator.result;
        if (this._filterMethod !== FilterMethod.ADAPTIVE) {
            throw new Error(`Filter method ${this._filterMethod} not supported`);
        }
        if (this._interlaceMethod === InterlaceMethod.NO_INTERLACE) {
            this.decodeInterlaceNull(data);
        }
        else {
            throw new Error(`Interlace method ${this._interlaceMethod} not supported`);
        }
    }
    decodeInterlaceNull(data) {
        const height = this._png.height;
        const bytesPerPixel = (this._png.channels * this._png.depth) / 8;
        const bytesPerLine = this._png.width * bytesPerPixel;
        const newData = new Uint8Array(this._png.height * bytesPerLine);
        let prevLine = empty;
        let offset = 0;
        let currentLine;
        let newLine;
        for (let i = 0; i < height; i++) {
            currentLine = data.subarray(offset + 1, offset + 1 + bytesPerLine);
            newLine = newData.subarray(i * bytesPerLine, (i + 1) * bytesPerLine);
            switch (data[offset]) {
                case 0:
                    unfilterNone(currentLine, newLine, bytesPerLine);
                    break;
                case 1:
                    unfilterSub(currentLine, newLine, bytesPerLine, bytesPerPixel);
                    break;
                case 2:
                    unfilterUp(currentLine, newLine, prevLine, bytesPerLine);
                    break;
                case 3:
                    unfilterAverage(currentLine, newLine, prevLine, bytesPerLine, bytesPerPixel);
                    break;
                case 4:
                    unfilterPaeth(currentLine, newLine, prevLine, bytesPerLine, bytesPerPixel);
                    break;
                default:
                    throw new Error(`Unsupported filter: ${data[offset]}`);
            }
            prevLine = newLine;
            offset += bytesPerLine + 1;
        }
        if (this._hasPalette) {
            this._png.palette = this._palette;
        }
        if (this._hasTransparency) {
            this._png.transparency = this._transparency;
        }
        if (this._png.depth === 16) {
            const uint16Data = new Uint16Array(newData.buffer);
            if (osIsLittleEndian) {
                for (let k = 0; k < uint16Data.length; k++) {
                    // PNG is always big endian. Swap the bytes.
                    uint16Data[k] = swap16(uint16Data[k]);
                }
            }
            this._png.data = uint16Data;
        }
        else {
            this._png.data = newData;
        }
    }
}
function unfilterNone(currentLine, newLine, bytesPerLine) {
    for (let i = 0; i < bytesPerLine; i++) {
        newLine[i] = currentLine[i];
    }
}
function unfilterSub(currentLine, newLine, bytesPerLine, bytesPerPixel) {
    let i = 0;
    for (; i < bytesPerPixel; i++) {
        // just copy first bytes
        newLine[i] = currentLine[i];
    }
    for (; i < bytesPerLine; i++) {
        newLine[i] = (currentLine[i] + newLine[i - bytesPerPixel]) & 0xff;
    }
}
function unfilterUp(currentLine, newLine, prevLine, bytesPerLine) {
    let i = 0;
    if (prevLine.length === 0) {
        // just copy bytes for first line
        for (; i < bytesPerLine; i++) {
            newLine[i] = currentLine[i];
        }
    }
    else {
        for (; i < bytesPerLine; i++) {
            newLine[i] = (currentLine[i] + prevLine[i]) & 0xff;
        }
    }
}
function unfilterAverage(currentLine, newLine, prevLine, bytesPerLine, bytesPerPixel) {
    let i = 0;
    if (prevLine.length === 0) {
        for (; i < bytesPerPixel; i++) {
            newLine[i] = currentLine[i];
        }
        for (; i < bytesPerLine; i++) {
            newLine[i] = (currentLine[i] + (newLine[i - bytesPerPixel] >> 1)) & 0xff;
        }
    }
    else {
        for (; i < bytesPerPixel; i++) {
            newLine[i] = (currentLine[i] + (prevLine[i] >> 1)) & 0xff;
        }
        for (; i < bytesPerLine; i++) {
            newLine[i] =
                (currentLine[i] + ((newLine[i - bytesPerPixel] + prevLine[i]) >> 1)) &
                    0xff;
        }
    }
}
function unfilterPaeth(currentLine, newLine, prevLine, bytesPerLine, bytesPerPixel) {
    let i = 0;
    if (prevLine.length === 0) {
        for (; i < bytesPerPixel; i++) {
            newLine[i] = currentLine[i];
        }
        for (; i < bytesPerLine; i++) {
            newLine[i] = (currentLine[i] + newLine[i - bytesPerPixel]) & 0xff;
        }
    }
    else {
        for (; i < bytesPerPixel; i++) {
            newLine[i] = (currentLine[i] + prevLine[i]) & 0xff;
        }
        for (; i < bytesPerLine; i++) {
            newLine[i] =
                (currentLine[i] +
                    paethPredictor(newLine[i - bytesPerPixel], prevLine[i], prevLine[i - bytesPerPixel])) &
                    0xff;
        }
    }
}
function paethPredictor(a, b, c) {
    const p = a + b - c;
    const pa = Math.abs(p - a);
    const pb = Math.abs(p - b);
    const pc = Math.abs(p - c);
    if (pa <= pb && pa <= pc)
        return a;
    else if (pb <= pc)
        return b;
    else
        return c;
}
function swap16(val) {
    return ((val & 0xff) << 8) | ((val >> 8) & 0xff);
}
function checkBitDepth(value) {
    if (value !== 1 &&
        value !== 2 &&
        value !== 4 &&
        value !== 8 &&
        value !== 16) {
        throw new Error(`invalid bit depth: ${value}`);
    }
    return value;
}

var ResolutionUnitSpecifier;
(function (ResolutionUnitSpecifier) {
    /**
     * Unit is unknown
     */
    ResolutionUnitSpecifier[ResolutionUnitSpecifier["UNKNOWN"] = 0] = "UNKNOWN";
    /**
     * Unit is the metre
     */
    ResolutionUnitSpecifier[ResolutionUnitSpecifier["METRE"] = 1] = "METRE";
})(ResolutionUnitSpecifier || (ResolutionUnitSpecifier = {}));

function decodePng(data, options) {
    const decoder = new PngDecoder(data, options);
    return decoder.decode();
}

class gltfImage extends GltfObject
{
    static animatedProperties = [];
    constructor(
        uri = undefined,
        type = GL.TEXTURE_2D,
        miplevel = 0,
        bufferView = undefined,
        name = undefined,
        mimeType = undefined,
        image = undefined)
    {
        super();
        this.uri = uri;
        this.bufferView = bufferView;
        this.mimeType = mimeType;
        this.image = image; // javascript image
        this.name = name;
        this.type = type; // nonstandard
        this.miplevel = miplevel; // nonstandard
    }

    resolveRelativePath(basePath)
    {
        if (typeof this.uri === 'string' || this.uri instanceof String) {
            if (this.uri.startsWith('./')) {
                this.uri = this.uri.substring(2);
            }
            this.uri = basePath + this.uri;
        }
    }

    async load(gltf, additionalFiles = undefined)
    {
        if (this.image !== undefined)
        {
            if (this.mimeType !== ImageMimeType.GLTEXTURE)
            {
                console.error("image has already been loaded");
            }
            return;
        }

        if (!await this.setImageFromBufferView(gltf) &&
            !await this.setImageFromFiles(gltf, additionalFiles) &&
            !await this.setImageFromUri(gltf))
        {
            return;
        }

        return;
    }

    static loadHTMLImage(url)
    {
        return new Promise( (resolve, reject) => {
            const image = new Image();
            image.addEventListener('load', () => resolve(image) );
            image.addEventListener('error', reject);
            image.src = url;
            image.crossOrigin = "";
        });
    }

    setMimetypeFromFilename(filename)
    {

        let extension = getExtension(filename);
        if(extension == "ktx2" || extension == "ktx")
        {
            this.mimeType = ImageMimeType.KTX2;
        }
        else if(extension == "jpg" || extension == "jpeg")
        {
            this.mimeType = ImageMimeType.JPEG;
        }
        else if(extension == "png" )
        {
            this.mimeType = ImageMimeType.PNG;
        }
        else if(extension == "webp" )
        {
            this.mimeType = ImageMimeType.WEBP;
        }
        else
        {
            console.warn("MimeType not defined");
            // assume jpeg encoding as best guess
            this.mimeType = ImageMimeType.JPEG;
        }

    }

    async setImageFromUri(gltf)
    {
        if (this.uri === undefined)
        {
            return false;
        }
        if (this.mimeType === undefined)
        {
            this.setMimetypeFromFilename(this.uri);
        }

        if(this.mimeType === ImageMimeType.KTX2)
        {
            if (gltf.ktxDecoder !== undefined)
            {
                this.image = await gltf.ktxDecoder.loadKtxFromUri(this.uri);
            }
            else
            {
                console.warn('Loading of ktx images failed: KtxDecoder not initalized');
            }
        }
        else if (typeof(Image) !== 'undefined' && (this.mimeType === ImageMimeType.JPEG || this.mimeType === ImageMimeType.PNG || this.mimeType === ImageMimeType.WEBP))
        {
            this.image = await gltfImage.loadHTMLImage(this.uri).catch( (error) => {
                console.error(error);
            });
        }
        else if(this.mimeType === ImageMimeType.JPEG && this.uri instanceof ArrayBuffer)
        {
            this.image = jpegJs.decode(this.uri, {useTArray: true});
        }
        else if(this.mimeType === ImageMimeType.PNG && this.uri instanceof ArrayBuffer)
        {
            this.image = decodePng(this.uri);
        }
        else
        {
            console.error("Unsupported image type " + this.mimeType);
            return false;
        }

        return true;
    }

    async setImageFromBufferView(gltf)
    {
        const view = gltf.bufferViews[this.bufferView];
        if (view === undefined)
        {
            return false;
        }

        const buffer = gltf.buffers[view.buffer].buffer;
        const array = new Uint8Array(buffer, view.byteOffset, view.byteLength);
        if (this.mimeType === ImageMimeType.KTX2)
        {
            if (gltf.ktxDecoder !== undefined)
            {
                this.image = await gltf.ktxDecoder.loadKtxFromBuffer(array);
            }
            else
            {
                console.warn('Loading of ktx images failed: KtxDecoder not initalized');
            }
        }
        else if(typeof(Image) !== 'undefined' && (this.mimeType === ImageMimeType.JPEG || this.mimeType === ImageMimeType.PNG || this.mimeType === ImageMimeType.WEBP))
        {
            const blob = new Blob([array], { "type": this.mimeType });
            const objectURL = URL.createObjectURL(blob);
            this.image = await gltfImage.loadHTMLImage(objectURL).catch( () => {
                console.error("Could not load image from buffer view");
            });
        }
        else if(this.mimeType === ImageMimeType.JPEG)
        {
            this.image = jpegJs.decode(array, {useTArray: true});
        }
        else if(this.mimeType === ImageMimeType.PNG)
        {
            this.image = decodePng(array);
        }
        else
        {
            console.error("Unsupported image type " + this.mimeType);
            return false;
        }

        return true;
    }

    async setImageFromFiles(gltf, files)
    {
        if (this.uri === undefined || files === undefined)
        {
            return false;
        }

        let foundFile = files.find(file => {
            if (file[0] == "/" + this.uri) {
                return true;
            }
        });

        if (foundFile === undefined)
        {
            return false;
        }

        if (this.mimeType === undefined)
        {
            this.setMimetypeFromFilename(foundFile[0]);
        }


        if(this.mimeType === ImageMimeType.KTX2)
        {
            if (gltf.ktxDecoder !== undefined)
            {
                const data = new Uint8Array(await foundFile[1].arrayBuffer());
                this.image = await gltf.ktxDecoder.loadKtxFromBuffer(data);
            }
            else
            {
                console.warn('Loading of ktx images failed: KtxDecoder not initalized');
            }
        }
        else if (typeof(Image) !== 'undefined' && (this.mimeType === ImageMimeType.JPEG || this.mimeType === ImageMimeType.PNG || this.mimeType === ImageMimeType.WEBP))
        {
            const imageData = await AsyncFileReader.readAsDataURL(foundFile[1]).catch( () => {
                console.error("Could not load image with FileReader");
            });
            this.image = await gltfImage.loadHTMLImage(imageData).catch( () => {
                console.error("Could not create image from FileReader image data");
            });
        }
        else
        {
            console.error("Unsupported image type " + this.mimeType);
            return false;
        }


        return true;
    }
}

// https://github.com/KhronosGroup/glTF/blob/khr_ktx2_ibl/extensions/2.0/Khronos/KHR_lights_image_based/schema/imageBasedLight.schema.json

class ImageBasedLight extends GltfObject
{
    static animatedProperties = [];
    constructor()
    {
        super();
        this.rotation = jsToGl([0, 0, 0, 1]);
        this.brightnessFactor = 1;
        this.brightnessOffset = 0;
        this.specularEnvironmentTexture = undefined;
        this.diffuseEnvironmentTexture = undefined;
        this.sheenEnvironmentTexture = undefined;

        // non-gltf
        this.levelCount = 1;
    }

    fromJson(jsonIBL)
    {
        super.fromJson(jsonIBL);

        if(jsonIBL.extensions !== undefined)
        {
            this.fromJsonExtensions(jsonIBL.extensions);
        }
    }

    fromJsonExtensions(extensions)
    {
        if (extensions.KHR_materials_sheen !== undefined)
        {
            this.sheenEnvironmentTexture = extensions.KHR_materials_sheen.sheenEnvironmentTexture;
        }
    }

    initGl(gltf)
    {
        if (this.diffuseEnvironmentTexture !== undefined)
        {
            const textureObject = gltf.textures[this.diffuseEnvironmentTexture];
            textureObject.type = GL.TEXTURE_CUBE_MAP;
        }
        if (this.specularEnvironmentTexture !== undefined)
        {
            const textureObject = gltf.textures[this.specularEnvironmentTexture];
            textureObject.type = GL.TEXTURE_CUBE_MAP;

            const imageObject = gltf.images[textureObject.source];
            this.levelCount = imageObject.image.levelCount;
        }
        if(this.sheenEnvironmentTexture !== undefined)
        {
            const textureObject = gltf.textures[this.sheenEnvironmentTexture];
            textureObject.type = GL.TEXTURE_CUBE_MAP;

            const imageObject = gltf.images[textureObject.source];
            if (this.levelCount !== imageObject.image.levelCount)
            {
                console.error("Specular and sheen do not have same level count");
            }
        }
    }
}

/* globals WebGl */


class gltfTexture extends GltfObject
{
    static animatedProperties = [];
    constructor(sampler = undefined, source = undefined, type = GL.TEXTURE_2D)
    {
        super();
        this.sampler = sampler; // index to gltfSampler, default sampler ?
        this.source = source; // index to gltfImage

        // non gltf
        this.glTexture = undefined;
        this.type = type;
        this.initialized = false;
        this.mipLevelCount = 0;
    }

    initGl(gltf, webGlContext)
    {
        if (this.sampler === undefined)
        {
            this.sampler = gltf.samplers.length - 1;
        }

        initGlForMembers(this, gltf, webGlContext);
    }

    fromJson(jsonTexture)
    {
        super.fromJson(jsonTexture);
        if (jsonTexture.extensions !== undefined &&
            jsonTexture.extensions.EXT_texture_webp !== undefined &&
            jsonTexture.extensions.EXT_texture_webp.source !== undefined)
        {
            this.source = jsonTexture.extensions.EXT_texture_webp.source;
        }
        if (jsonTexture.extensions !== undefined &&
            jsonTexture.extensions.KHR_texture_basisu !== undefined &&
            jsonTexture.extensions.KHR_texture_basisu.source !== undefined)
        {
            this.source = jsonTexture.extensions.KHR_texture_basisu.source;
        }
    }

    destroy()
    {
        if (this.glTexture !== undefined)
        {
            // TODO: this breaks the dependency direction
            WebGl.context.deleteTexture(this.glTexture);
        }

        this.glTexture = undefined;
    }
}

class gltfTextureInfo extends GltfObject
{
    static animatedProperties = ["strength", "scale"];
    constructor(index = undefined, texCoord = 0, linear = true, samplerName = "", generateMips = true) // linear by default
    {
        super();
        this.index = index; // reference to gltfTexture
        this.texCoord = texCoord; // which UV set to use
        this.linear = linear;
        this.samplerName = samplerName;
        this.strength = 1.0; // occlusion
        this.scale = 1.0; // normal
        this.generateMips = generateMips;

        this.extensions = undefined;
    }

    initGl(gltf, webGlContext)
    {
        initGlForMembers(this, gltf, webGlContext);
    }

    fromJson(jsonTextureInfo)
    {
        fromKeys(this, jsonTextureInfo);

        if (jsonTextureInfo?.extensions?.KHR_texture_transform !== undefined)
        {
            this.extensions.KHR_texture_transform = new KHR_texture_transform();
            this.extensions.KHR_texture_transform.fromJson(jsonTextureInfo.extensions.KHR_texture_transform);
        }
    }
}

class KHR_texture_transform extends GltfObject {
    static animatedProperties = ["offset", "scale", "rotation"];
    constructor() {
        super();
        this.offset = [0, 0];
        this.scale = [1, 1];
        this.rotation = 0;
    }
}

class gltfMaterial extends GltfObject
{
    static animatedProperties = ["alphaCutoff", "emissiveFactor"];
    constructor()
    {
        super();
        this.name = undefined;
        this.pbrMetallicRoughness = new PbrMetallicRoughness();
        this.normalTexture = undefined;
        this.occlusionTexture = undefined;
        this.emissiveTexture = undefined;
        this.emissiveFactor = fromValues$2(0, 0, 0);
        this.alphaMode = "OPAQUE";
        this.alphaCutoff = 0.5;
        this.doubleSided = false;

        // pbr next extension toggles
        this.hasClearcoat = false;
        this.hasSheen = false;
        this.hasTransmission = false;
        this.hasDiffuseTransmission = false;
        this.hasIOR = false;
        this.hasEmissiveStrength = false;
        this.hasVolume = false;
        this.hasIridescence = false;
        this.hasAnisotropy = false;
        this.hasDispersion = false;

        // non gltf properties
        this.type = "unlit";
        this.textures = [];
        this.textureTransforms = [];
        this.defines = [];
    }

    static createDefault()
    {
        const defaultMaterial = new gltfMaterial();
        defaultMaterial.type = "MR";
        defaultMaterial.name = "Default Material";
        defaultMaterial.defines.push("MATERIAL_METALLICROUGHNESS 1");

        return defaultMaterial;
    }

    getDefines(renderingParameters)
    {
        const defines = Array.from(this.defines);

        if (this.hasClearcoat && renderingParameters.enabledExtensions.KHR_materials_clearcoat)
        {
            defines.push("MATERIAL_CLEARCOAT 1");
        }
        if (this.hasSheen && renderingParameters.enabledExtensions.KHR_materials_sheen)
        {
            defines.push("MATERIAL_SHEEN 1");
        }
        if (this.hasTransmission && renderingParameters.enabledExtensions.KHR_materials_transmission)
        {
            defines.push("MATERIAL_TRANSMISSION 1");
        }
        if(this.hasDiffuseTransmission && renderingParameters.enabledExtensions.KHR_materials_diffuse_transmission)
        {
            defines.push("MATERIAL_DIFFUSE_TRANSMISSION 1");
        }
        if (this.hasVolume && renderingParameters.enabledExtensions.KHR_materials_volume)
        {
            defines.push("MATERIAL_VOLUME 1");
        }
        if(this.hasIOR && renderingParameters.enabledExtensions.KHR_materials_ior)
        {
            defines.push("MATERIAL_IOR 1");
        }
        if(this.hasSpecular && renderingParameters.enabledExtensions.KHR_materials_specular)
        {
            defines.push("MATERIAL_SPECULAR 1");
        }
        if(this.hasIridescence && renderingParameters.enabledExtensions.KHR_materials_iridescence)
        {
            defines.push("MATERIAL_IRIDESCENCE 1");
        }
        if(this.hasEmissiveStrength && renderingParameters.enabledExtensions.KHR_materials_emissive_strength)
        {
            defines.push("MATERIAL_EMISSIVE_STRENGTH 1");
        }
        if(this.hasAnisotropy && renderingParameters.enabledExtensions.KHR_materials_anisotropy)
        {
            defines.push("MATERIAL_ANISOTROPY 1");
        }
        if(this.hasDispersion && renderingParameters.enabledExtensions.KHR_materials_dispersion)
        {
            defines.push("MATERIAL_DISPERSION 1");
        }

        return defines;
    }

    updateTextureTransforms(shader)
    {
        for (const { key, uv } of this.textureTransforms) {
            let rotation = create$4();
            let scale = create$4();
            let translation = create$4();

            if (uv.rotation !== undefined)
            {
                const s =  Math.sin(uv.rotation);
                const c =  Math.cos(uv.rotation);
                rotation = jsToGl([
                    c, -s, 0.0,
                    s, c, 0.0,
                    0.0, 0.0, 1.0]);
            }

            if (uv.scale !== undefined)
            {
                scale = jsToGl([
                    uv.scale[0], 0, 0, 
                    0, uv.scale[1], 0, 
                    0, 0, 1
                ]);
            }

            if (uv.offset !== undefined)
            {
                translation = jsToGl([
                    1, 0, 0, 
                    0, 1, 0, 
                    uv.offset[0], uv.offset[1], 1
                ]);
            }

            let uvMatrix = create$4();
            multiply$1(uvMatrix, translation, rotation);
            multiply$1(uvMatrix, uvMatrix, scale);
            shader.updateUniform("u_" + key + "UVTransform", jsToGl(uvMatrix));
        }
    }

    parseTextureInfoExtensions(textureInfo, textureKey)
    {
        if (textureInfo.extensions?.KHR_texture_transform === undefined)
        {
            return;
        }

        const uv = textureInfo.extensions.KHR_texture_transform;

        this.textureTransforms.push({
            key: textureKey,
            uv: uv
        });

        if(uv.texCoord !== undefined)
        {
            textureInfo.texCoord = uv.texCoord;
        }

        this.defines.push("HAS_" + textureKey.toUpperCase() + "_UV_TRANSFORM 1");
    }

    initGl(gltf, webGlContext)
    {
        if (this.normalTexture !== undefined)
        {
            this.normalTexture.samplerName = "u_NormalSampler";
            this.parseTextureInfoExtensions(this.normalTexture, "Normal");
            this.textures.push(this.normalTexture);
            this.defines.push("HAS_NORMAL_MAP 1");
        }

        if (this.occlusionTexture !== undefined)
        {
            this.occlusionTexture.samplerName = "u_OcclusionSampler";
            this.parseTextureInfoExtensions(this.occlusionTexture, "Occlusion");
            this.textures.push(this.occlusionTexture);
            this.defines.push("HAS_OCCLUSION_MAP 1");
        }

        if (this.emissiveTexture !== undefined)
        {
            this.emissiveTexture.samplerName = "u_EmissiveSampler";
            this.parseTextureInfoExtensions(this.emissiveTexture, "Emissive");
            this.textures.push(this.emissiveTexture);
            this.defines.push("HAS_EMISSIVE_MAP 1");
        }

        if (this.pbrMetallicRoughness.baseColorTexture !== undefined)
        {
            this.pbrMetallicRoughness.baseColorTexture.samplerName = "u_BaseColorSampler";
            this.parseTextureInfoExtensions(this.pbrMetallicRoughness.baseColorTexture, "BaseColor");
            this.textures.push(this.pbrMetallicRoughness.baseColorTexture);
            this.defines.push("HAS_BASE_COLOR_MAP 1");
        }

        if (this.pbrMetallicRoughness.metallicRoughnessTexture !== undefined)
        {
            this.pbrMetallicRoughness.metallicRoughnessTexture.samplerName = "u_MetallicRoughnessSampler";
            this.parseTextureInfoExtensions(this.pbrMetallicRoughness.metallicRoughnessTexture, "MetallicRoughness");
            this.textures.push(this.pbrMetallicRoughness.metallicRoughnessTexture);
            this.defines.push("HAS_METALLIC_ROUGHNESS_MAP 1");
        }

        if (this.extensions?.KHR_materials_pbrSpecularGlossiness?.diffuseTexture !== undefined)
        {
            const diffuseTexture = this.extensions.KHR_materials_pbrSpecularGlossiness.diffuseTexture;
            diffuseTexture.samplerName = "u_DiffuseSampler";
            this.parseTextureInfoExtensions(diffuseTexture, "Diffuse");
            this.textures.push(diffuseTexture);
            this.defines.push("HAS_DIFFUSE_MAP 1");
        }

        if (this.extensions?.KHR_materials_pbrSpecularGlossiness?.specularGlossinessTexture !== undefined)
        {
            const specularGlossinessTexture = this.extensions.KHR_materials_pbrSpecularGlossiness.specularGlossinessTexture;
            specularGlossinessTexture.samplerName = "u_SpecularGlossinessSampler";
            this.parseTextureInfoExtensions(specularGlossinessTexture, "SpecularGlossiness");
            this.textures.push(specularGlossinessTexture);
            this.defines.push("HAS_SPECULAR_GLOSSINESS_MAP 1");
        }

        this.defines.push("ALPHAMODE_OPAQUE 0");
        this.defines.push("ALPHAMODE_MASK 1");
        this.defines.push("ALPHAMODE_BLEND 2");
        if(this.alphaMode === 'MASK') // only set cutoff value for mask material
        {
            this.defines.push("ALPHAMODE ALPHAMODE_MASK");
        }
        else if (this.alphaMode === 'OPAQUE')
        {
            this.defines.push("ALPHAMODE ALPHAMODE_OPAQUE");
        }
        else
        {
            this.defines.push("ALPHAMODE ALPHAMODE_BLEND");
        }

        // if we have SG, we prefer SG (best practice) but if we have neither objects we use MR default values
        if (this.type !== "SG")
        {
            this.defines.push("MATERIAL_METALLICROUGHNESS 1");
        }

        if (this.extensions !== undefined)
        {
            if (this.extensions.KHR_materials_unlit !== undefined)
            {
                this.defines.push("MATERIAL_UNLIT 1");
            }

            if (this.extensions.KHR_materials_pbrSpecularGlossiness !== undefined)
            {
                this.defines.push("MATERIAL_SPECULARGLOSSINESS 1");
            }

            // Clearcoat is part of the default metallic-roughness shader
            if(this.extensions.KHR_materials_clearcoat !== undefined)
            {
                this.hasClearcoat = true;

                const clearcoatTexture = this.extensions.KHR_materials_clearcoat.clearcoatTexture;
                if (clearcoatTexture !== undefined)
                {
                    clearcoatTexture.samplerName = "u_ClearcoatSampler";
                    this.parseTextureInfoExtensions(clearcoatTexture, "Clearcoat");
                    this.textures.push(clearcoatTexture);
                    this.defines.push("HAS_CLEARCOAT_MAP 1");
                }

                const clearcoatRoughnessTexture = this.extensions.KHR_materials_clearcoat.clearcoatRoughnessTexture;
                if (clearcoatRoughnessTexture !== undefined)
                {
                    clearcoatRoughnessTexture.samplerName = "u_ClearcoatRoughnessSampler";
                    this.parseTextureInfoExtensions(clearcoatRoughnessTexture, "ClearcoatRoughness");
                    this.textures.push(clearcoatRoughnessTexture);
                    this.defines.push("HAS_CLEARCOAT_ROUGHNESS_MAP 1");
                }

                const clearcoatNormalTexture = this.extensions.KHR_materials_clearcoat.clearcoatNormalTexture;
                if (clearcoatNormalTexture !== undefined)
                {
                    clearcoatNormalTexture.samplerName = "u_ClearcoatNormalSampler";
                    this.parseTextureInfoExtensions(clearcoatNormalTexture, "ClearcoatNormal");
                    this.textures.push(clearcoatNormalTexture);
                    this.defines.push("HAS_CLEARCOAT_NORMAL_MAP 1");
                }
            }

            // Sheen material extension
            // https://github.com/sebavan/glTF/tree/KHR_materials_sheen/extensions/2.0/Khronos/KHR_materials_sheen
            if(this.extensions.KHR_materials_sheen !== undefined)
            {
                this.hasSheen = true;
     
                if (this.extensions.KHR_materials_sheen.sheenRoughnessTexture !== undefined)
                {
                    this.extensions.KHR_materials_sheen.sheenRoughnessTexture.samplerName = "u_SheenRoughnessSampler";
                    this.parseTextureInfoExtensions(this.extensions.KHR_materials_sheen.sheenRoughnessTexture, "SheenRoughness");
                    this.textures.push(this.extensions.KHR_materials_sheen.sheenRoughnessTexture);
                    this.defines.push("HAS_SHEEN_ROUGHNESS_MAP 1");
                }
                
                const sheenColorTexture = this.extensions.KHR_materials_sheen.sheenColorTexture;
                if (sheenColorTexture !== undefined)
                {
                    sheenColorTexture.samplerName = "u_SheenColorSampler";
                    this.parseTextureInfoExtensions(sheenColorTexture, "SheenColor");
                    sheenColorTexture.linear = false;
                    this.textures.push(sheenColorTexture);
                    this.defines.push("HAS_SHEEN_COLOR_MAP 1");
                }
            }

            // KHR Extension: Specular
            if (this.extensions.KHR_materials_specular !== undefined)
            {
                this.hasSpecular = true;

                if (this.extensions.KHR_materials_specular?.specularTexture !== undefined)
                {
                    this.extensions.KHR_materials_specular.specularTexture.samplerName = "u_SpecularSampler";
                    this.parseTextureInfoExtensions(this.extensions?.KHR_materials_specular?.specularTexture, "Specular");
                    this.textures.push(this.extensions?.KHR_materials_specular?.specularTexture);
                    this.defines.push("HAS_SPECULAR_MAP 1");
                }

                if (this.extensions.KHR_materials_specular?.specularColorTexture !== undefined)
                {
                    this.extensions.KHR_materials_specular.specularColorTexture.samplerName = "u_SpecularColorSampler";
                    this.parseTextureInfoExtensions(this.extensions?.KHR_materials_specular.specularColorTexture, "SpecularColor");
                    this.extensions.KHR_materials_specular.specularColorTexture.linear = false;
                    this.textures.push(this.extensions.KHR_materials_specular.specularColorTexture);
                    this.defines.push("HAS_SPECULAR_COLOR_MAP 1");
                }
            }

            // KHR Extension: Emissive strength
            if (this.extensions.KHR_materials_emissive_strength !== undefined)
            {
                this.hasEmissiveStrength = true;
            }

            // KHR Extension: Transmission
            if (this.extensions.KHR_materials_transmission !== undefined)
            {
                this.hasTransmission = true;

                if (this.extensions?.KHR_materials_transmission?.transmissionTexture !== undefined)
                {
                    this.extensions.KHR_materials_transmission.transmissionTexture.samplerName = "u_TransmissionSampler";
                    this.parseTextureInfoExtensions(this.extensions?.KHR_materials_transmission?.transmissionTexture, "Transmission");
                    this.textures.push(this.extensions?.KHR_materials_transmission?.transmissionTexture);
                    this.defines.push("HAS_TRANSMISSION_MAP 1");
                }
            }

            // KHR Extension: Diffuse Transmission
            if(this.extensions.KHR_materials_diffuse_transmission !== undefined)
            {
                const extension = this.extensions.KHR_materials_diffuse_transmission;

                this.hasDiffuseTransmission = true;

                if (extension.diffuseTransmissionTexture !== undefined)
                {
                    extension.diffuseTransmissionTexture.samplerName = "u_DiffuseTransmissionSampler";
                    this.parseTextureInfoExtensions(extension.diffuseTransmissionTexture, "DiffuseTransmission");
                    this.textures.push(extension.diffuseTransmissionTexture);
                    this.defines.push("HAS_DIFFUSE_TRANSMISSION_MAP 1");
                }

                if (extension.diffuseTransmissionColorTexture !== undefined)
                {
                    extension.diffuseTransmissionColorTexture.samplerName = "u_DiffuseTransmissionColorSampler";
                    this.parseTextureInfoExtensions(extension.diffuseTransmissionColorTexture, "DiffuseTransmissionColor");
                    this.textures.push(extension.diffuseTransmissionColorTexture);
                    this.defines.push("HAS_DIFFUSE_TRANSMISSION_COLOR_MAP 1");
                }
            }

            // KHR Extension: IOR
            //https://github.com/DassaultSystemes-Technology/glTF/tree/KHR_materials_ior/extensions/2.0/Khronos/KHR_materials_ior
            if (this.extensions.KHR_materials_ior !== undefined)
            {
                this.hasIOR = true;
            }

            // KHR Extension: Volume
            if (this.extensions.KHR_materials_volume !== undefined)
            {
                this.hasVolume = true;

                if (this.extensions?.KHR_materials_volume?.thicknessTexture !== undefined)
                {
                    this.extensions.KHR_materials_volume.thicknessTexture.samplerName = "u_ThicknessSampler";
                    this.parseTextureInfoExtensions(this.extensions.KHR_materials_volume.thicknessTexture, "Thickness");
                    this.textures.push(this.extensions.KHR_materials_volume.thicknessTexture);
                    this.defines.push("HAS_THICKNESS_MAP 1");
                }
            }

            // KHR Extension: Iridescence
            // See https://github.com/ux3d/glTF/tree/extensions/KHR_materials_iridescence/extensions/2.0/Khronos/KHR_materials_iridescence
            if(this.extensions.KHR_materials_iridescence !== undefined)
            {
                this.hasIridescence = true;

                const extension = this.extensions.KHR_materials_iridescence;

                if (extension.iridescenceTexture !== undefined)
                {
                    extension.iridescenceTexture.samplerName = "u_IridescenceSampler";
                    this.parseTextureInfoExtensions(extension.iridescenceTexture, "Iridescence");
                    this.textures.push(extension.iridescenceTexture);
                    this.defines.push("HAS_IRIDESCENCE_MAP 1");
                }

                if (extension.iridescenceThicknessTexture !== undefined)
                {
                    extension.iridescenceThicknessTexture.samplerName = "u_IridescenceThicknessSampler";
                    this.parseTextureInfoExtensions(extension.iridescenceThicknessTexture, "IridescenceThickness");
                    this.textures.push(extension.iridescenceThicknessTexture);
                    this.defines.push("HAS_IRIDESCENCE_THICKNESS_MAP 1");
                }
            }

            // KHR Extension: Anisotropy
            // See https://github.com/KhronosGroup/glTF/tree/main/extensions/2.0/Khronos/KHR_materials_anisotropy
            if(this.extensions.KHR_materials_anisotropy !== undefined)
            {
                this.hasAnisotropy = true;

                const anisotropyTexture = this.extensions.KHR_materials_anisotropy.anisotropyTexture;

                if (anisotropyTexture !== undefined)
                {
                    anisotropyTexture.samplerName = "u_AnisotropySampler";
                    this.parseTextureInfoExtensions(anisotropyTexture, "Anisotropy");
                    this.textures.push(anisotropyTexture);
                    this.defines.push("HAS_ANISOTROPY_MAP 1");
                }
            }

            // KHR Extension: Dispersion
            // See https://github.com/KhronosGroup/glTF/tree/main/extensions/2.0/Khronos/KHR_materials_dispersion
            if (this.extensions.KHR_materials_dispersion !== undefined)
            {
                this.hasDispersion = true;
            }
        }

        initGlForMembers(this, gltf, webGlContext);
    }

    fromJson(jsonMaterial)
    {
        super.fromJson(jsonMaterial);

        if (jsonMaterial.normalTexture !== undefined)
        {
            const normalTexture = new gltfTextureInfo();
            normalTexture.fromJson(jsonMaterial.normalTexture);
            this.normalTexture = normalTexture;
        }

        if (jsonMaterial.occlusionTexture !== undefined)
        {
            const occlusionTexture = new gltfTextureInfo();
            occlusionTexture.fromJson(jsonMaterial.occlusionTexture);
            this.occlusionTexture = occlusionTexture;
        }

        if (jsonMaterial.emissiveTexture !== undefined)
        {
            const emissiveTexture = new gltfTextureInfo(undefined, 0, false);
            emissiveTexture.fromJson(jsonMaterial.emissiveTexture);
            this.emissiveTexture = emissiveTexture;
        }

        if(jsonMaterial.extensions !== undefined)
        {
            this.fromJsonMaterialExtensions(jsonMaterial.extensions);
        }
        this.pbrMetallicRoughness = new PbrMetallicRoughness();
        if (jsonMaterial.pbrMetallicRoughness !== undefined && this.type !== "SG")
        {
            this.type = "MR";
            this.pbrMetallicRoughness.fromJson(jsonMaterial.pbrMetallicRoughness);
        }
    }

    fromJsonMaterialExtensions(jsonExtensions)
    {
        if (jsonExtensions.KHR_materials_pbrSpecularGlossiness !== undefined)
        {
            this.type = "SG";
            this.extensions.KHR_materials_pbrSpecularGlossiness = new KHR_materials_pbrSpecularGlossiness();
            this.extensions.KHR_materials_pbrSpecularGlossiness.fromJson(jsonExtensions.KHR_materials_pbrSpecularGlossiness);
        }

        if(jsonExtensions.KHR_materials_unlit !== undefined)
        {
            this.type = "unlit";
        }

        if(jsonExtensions.KHR_materials_clearcoat !== undefined)
        {
            this.extensions.KHR_materials_clearcoat = new KHR_materials_clearcoat();
            this.extensions.KHR_materials_clearcoat.fromJson(jsonExtensions.KHR_materials_clearcoat);
        }

        if(jsonExtensions.KHR_materials_sheen !== undefined)
        {
            this.extensions.KHR_materials_sheen = new KHR_materials_sheen();
            this.extensions.KHR_materials_sheen.fromJson(jsonExtensions.KHR_materials_sheen);
        }

        if(jsonExtensions.KHR_materials_transmission !== undefined)
        {
            this.extensions.KHR_materials_transmission = new KHR_materials_transmission();
            this.extensions.KHR_materials_transmission.fromJson(jsonExtensions.KHR_materials_transmission);
        }

        if(jsonExtensions.KHR_materials_diffuse_transmission !== undefined)
        {
            this.extensions.KHR_materials_diffuse_transmission = new KHR_materials_diffuse_transmission();
            this.extensions.KHR_materials_diffuse_transmission.fromJson(jsonExtensions.KHR_materials_diffuse_transmission);
        }

        if(jsonExtensions.KHR_materials_specular !== undefined)
        {
            this.extensions.KHR_materials_specular = new KHR_materials_specular();
            this.extensions.KHR_materials_specular.fromJson(jsonExtensions.KHR_materials_specular);
        }

        if(jsonExtensions.KHR_materials_volume !== undefined)
        {
            this.extensions.KHR_materials_volume = new KHR_materials_volume();
            this.extensions.KHR_materials_volume.fromJson(jsonExtensions.KHR_materials_volume);
        }

        if(jsonExtensions.KHR_materials_iridescence !== undefined)
        {
            this.extensions.KHR_materials_iridescence = new KHR_materials_iridescence();
            this.extensions.KHR_materials_iridescence.fromJson(jsonExtensions.KHR_materials_iridescence);
        }

        if(jsonExtensions.KHR_materials_anisotropy !== undefined)
        {
            this.extensions.KHR_materials_anisotropy = new KHR_materials_anisotropy();
            this.extensions.KHR_materials_anisotropy.fromJson(jsonExtensions.KHR_materials_anisotropy);
        }
        
        if(jsonExtensions.KHR_materials_emissive_strength !== undefined)
        {
            this.extensions.KHR_materials_emissive_strength = new KHR_materials_emissive_strength();
            this.extensions.KHR_materials_emissive_strength.fromJson(jsonExtensions.KHR_materials_emissive_strength);
        }

        if(jsonExtensions.KHR_materials_dispersion !== undefined) {
            this.extensions.KHR_materials_dispersion = new KHR_materials_dispersion();
            this.extensions.KHR_materials_dispersion.fromJson(jsonExtensions.KHR_materials_dispersion);
        }

        if(jsonExtensions.KHR_materials_ior !== undefined) {
            this.extensions.KHR_materials_ior = new KHR_materials_ior();
            this.extensions.KHR_materials_ior.fromJson(jsonExtensions.KHR_materials_ior);
        }
    }
}

class PbrMetallicRoughness extends GltfObject {
    static animatedProperties = ["baseColorFactor", "metallicFactor", "roughnessFactor"];
    constructor()
    {
        super();
        this.baseColorFactor = fromValues$1(1, 1, 1, 1);
        this.baseColorTexture = undefined;
        this.metallicFactor = 1;
        this.roughnessFactor = 1;
        this.metallicRoughnessTexture = undefined;
    }

    fromJson(json) {
        super.fromJson(json);
        if (json.baseColorTexture !== undefined)
        {
            const baseColorTexture = new gltfTextureInfo(undefined, 0, false);
            baseColorTexture.fromJson(json.baseColorTexture);
            this.baseColorTexture = baseColorTexture;
        }

        if (json.metallicRoughnessTexture !== undefined)
        {
            const metallicRoughnessTexture = new gltfTextureInfo();
            metallicRoughnessTexture.fromJson(json.metallicRoughnessTexture);
            this.metallicRoughnessTexture = metallicRoughnessTexture;
        }
    }
}

class KHR_materials_anisotropy extends GltfObject {
    static animatedProperties = ["anisotropyStrength", "anisotropyRotation"];
    constructor()
    {
        super();
        this.anisotropyStrength = 0;
        this.anisotropyRotation = 0;
        this.anisotropyTexture = undefined;
    }

    fromJson(json) {
        super.fromJson(json);
        if (json.anisotropyTexture !== undefined)
        {
            const anisotropyTexture = new gltfTextureInfo();
            anisotropyTexture.fromJson(json.anisotropyTexture);
            this.anisotropyTexture = anisotropyTexture;
        }
    }
}

class KHR_materials_clearcoat extends GltfObject {
    static animatedProperties = ["clearcoatFactor", "clearcoatRoughnessFactor"];
    constructor()
    {
        super();
        this.clearcoatFactor = 0;
        this.clearcoatTexture = undefined;
        this.clearcoatRoughnessFactor = 0;
        this.clearcoatRoughnessTexture = undefined;
        this.clearcoatNormalTexture = undefined;
    }

    fromJson(jsonClearcoat) {
        super.fromJson(jsonClearcoat);
        if(jsonClearcoat.clearcoatTexture !== undefined)
        {
            const clearcoatTexture = new gltfTextureInfo();
            clearcoatTexture.fromJson(jsonClearcoat.clearcoatTexture);
            this.clearcoatTexture = clearcoatTexture;
        }

        if(jsonClearcoat.clearcoatRoughnessTexture !== undefined)
        {
            const clearcoatRoughnessTexture =  new gltfTextureInfo();
            clearcoatRoughnessTexture.fromJson(jsonClearcoat.clearcoatRoughnessTexture);
            this.clearcoatRoughnessTexture = clearcoatRoughnessTexture;
        }

        if(jsonClearcoat.clearcoatNormalTexture !== undefined)
        {
            const clearcoatNormalTexture =  new gltfTextureInfo();
            clearcoatNormalTexture.fromJson(jsonClearcoat.clearcoatNormalTexture);
            this.clearcoatNormalTexture = clearcoatNormalTexture;
        }
    }
}

class KHR_materials_dispersion extends GltfObject {
    static animatedProperties = ["dispersion"];
    constructor()
    {
        super();
        this.dispersion = 0;
    }
}

class KHR_materials_emissive_strength extends GltfObject {
    static animatedProperties = ["emissiveStrength"];
    constructor()
    {
        super();
        this.emissiveStrength = 1.0;
    }
}

class KHR_materials_ior extends GltfObject {
    static animatedProperties = ["ior"];
    constructor()
    {
        super();
        this.ior = 1.5;
    }
}

class KHR_materials_iridescence extends GltfObject {
    static animatedProperties = ["iridescenceFactor", "iridescenceIor", "iridescenceThicknessMinimum", "iridescenceThicknessMaximum"];
    constructor()
    {
        super();
        this.iridescenceFactor = 0;
        this.iridescenceIor = 1.3;
        this.iridescenceThicknessMinimum = 100;
        this.iridescenceThicknessMaximum = 400;
        this.iridescenceTexture = undefined;
        this.iridescenceThicknessTexture = undefined;
    }

    fromJson(jsonIridescence) {
        super.fromJson(jsonIridescence);
        if(jsonIridescence.iridescenceTexture !== undefined)
        {
            const iridescenceTexture = new gltfTextureInfo();
            iridescenceTexture.fromJson(jsonIridescence.iridescenceTexture);
            this.iridescenceTexture = iridescenceTexture;
        }

        if(jsonIridescence.iridescenceThicknessTexture !== undefined)
        {
            const iridescenceThicknessTexture = new gltfTextureInfo();
            iridescenceThicknessTexture.fromJson(jsonIridescence.iridescenceThicknessTexture);
            this.iridescenceThicknessTexture = iridescenceThicknessTexture;
        }
    }
}

class KHR_materials_sheen extends GltfObject {
    static animatedProperties = ["sheenRoughnessFactor", "sheenColorFactor"];
    constructor()
    {
        super();
        this.sheenRoughnessFactor = 0;
        this.sheenColorFactor = fromValues$2(0, 0, 0);
        this.sheenColorTexture = undefined;
        this.sheenRoughnessTexture = undefined;
    }

    fromJson(jsonSheen) {
        super.fromJson(jsonSheen);
        if(jsonSheen.sheenColorTexture !== undefined)
        {
            const sheenColorTexture = new gltfTextureInfo();
            sheenColorTexture.fromJson(jsonSheen.sheenColorTexture);
            this.sheenColorTexture = sheenColorTexture;
        }

        if(jsonSheen.sheenRoughnessTexture !== undefined)
        {
            const sheenRoughnessTexture = new gltfTextureInfo();
            sheenRoughnessTexture.fromJson(jsonSheen.sheenRoughnessTexture);
            this.sheenRoughnessTexture = sheenRoughnessTexture;
        }
    }
}

class KHR_materials_specular extends GltfObject {
    static animatedProperties = ["specularFactor", "specularColorFactor"];
    constructor()
    {
        super();
        this.specularFactor = 1;
        this.specularColorFactor = fromValues$2(1, 1, 1);
        this.specularTexture = undefined;
        this.specularColorTexture = undefined;
    }

    fromJson(jsonSpecular) {
        super.fromJson(jsonSpecular);
        if(jsonSpecular.specularTexture !== undefined)
        {
            const specularTexture = new gltfTextureInfo();
            specularTexture.fromJson(jsonSpecular.specularTexture);
            this.specularTexture = specularTexture;
        }

        if(jsonSpecular.specularColorTexture !== undefined)
        {
            const specularColorTexture = new gltfTextureInfo();
            specularColorTexture.fromJson(jsonSpecular.specularColorTexture);
            this.specularColorTexture = specularColorTexture;
        }
    }
}

class KHR_materials_transmission extends GltfObject {
    static animatedProperties = ["transmissionFactor"];
    constructor()
    {
        super();
        this.transmissionFactor = 0;
        this.transmissionTexture = undefined;
    }

    fromJson(jsonTransmission) {
        super.fromJson(jsonTransmission);
        if(jsonTransmission.transmissionTexture !== undefined)
        {
            const transmissionTexture = new gltfTextureInfo();
            transmissionTexture.fromJson(jsonTransmission.transmissionTexture);
            this.transmissionTexture = transmissionTexture;
        }
    }
}

class KHR_materials_volume extends GltfObject {
    static animatedProperties = ["thicknessFactor", "attenuationDistance", "attenuationColor"];
    constructor()
    {
        super();
        this.thicknessFactor = 0;
        this.thicknessTexture = undefined;
        this.attenuationDistance = 0; // 0 means infinite distance
        this.attenuationColor = fromValues$2(1, 1, 1);
    }

    fromJson(jsonVolume) {
        super.fromJson(jsonVolume);
        if(jsonVolume.thicknessTexture !== undefined)
        {
            const thicknessTexture = new gltfTextureInfo();
            thicknessTexture.fromJson(jsonVolume.thicknessTexture);
            this.thicknessTexture = thicknessTexture;
        }
    }
}

class KHR_materials_diffuse_transmission extends GltfObject {

    //TODO: define animated properties
    static animatedProperties = [];
    constructor()
    {
        super();
        this.diffuseTransmissionFactor = 0;
        this.diffuseTransmissionColorFactor = fromValues$2(1, 1, 1);
        this.diffuseTransmissionTexture = undefined;
        this.diffuseTransmissionColorTexture = undefined;
    }

    fromJson(jsonDiffuseTransmission) {
        super.fromJson(jsonDiffuseTransmission);
        if(jsonDiffuseTransmission.diffuseTransmissionTexture !== undefined)
        {
            const diffuseTransmissionTexture = new gltfTextureInfo();
            diffuseTransmissionTexture.fromJson(jsonDiffuseTransmission.diffuseTransmissionTexture);
            this.diffuseTransmissionTexture = diffuseTransmissionTexture;
        }

        if(jsonDiffuseTransmission.diffuseTransmissionColorTexture !== undefined)
        {
            const diffuseTransmissionColorTexture = new gltfTextureInfo();
            diffuseTransmissionColorTexture.fromJson(jsonDiffuseTransmission.diffuseTransmissionColorTexture);
            this.diffuseTransmissionColorTexture = diffuseTransmissionColorTexture;
        }
    }
}

class KHR_materials_pbrSpecularGlossiness extends GltfObject {
    static animatedProperties = [];
    constructor()
    {
        super();
        this.diffuseFactor = fromValues$1(1, 1, 1, 1);
        this.diffuseTexture = undefined;
        this.specularFactor = fromValues$2(1, 1, 1);
        this.specularGlossinessTexture = undefined;
        this.glossinessFactor = 1;
    }

    fromJson(jsonSpecularGlossiness) {
        super.fromJson(jsonSpecularGlossiness);
        if(jsonSpecularGlossiness.diffuseTexture !== undefined)
        {
            const diffuseTexture = new gltfTextureInfo();
            diffuseTexture.fromJson(jsonSpecularGlossiness.diffuseTexture);
            this.diffuseTexture = diffuseTexture;
        }

        if(jsonSpecularGlossiness.specularGlossinessTexture !== undefined)
        {
            const specularGlossinessTexture = new gltfTextureInfo();
            specularGlossinessTexture.fromJson(jsonSpecularGlossiness.specularGlossinessTexture);
            this.specularGlossinessTexture = specularGlossinessTexture;
        }
    }
}

class gltfSampler extends GltfObject
{
    static animatedProperties = [];
    constructor(
        magFilter = GL.LINEAR,
        minFilter = GL.LINEAR_MIPMAP_LINEAR,
        wrapS = GL.REPEAT,
        wrapT = GL.REPEAT)
    {
        super();
        this.magFilter = magFilter;
        this.minFilter = minFilter;
        this.wrapS = wrapS;
        this.wrapT = wrapT;
        this.name = undefined;
    }

    static createDefault()
    {
        return new gltfSampler();
    }
}

/* globals DracoDecoderModule */

class DracoDecoder {

    constructor(dracoLib) {
        if (!DracoDecoder.instance && dracoLib === undefined)
        {
            if (DracoDecoderModule === undefined)
            {
                console.error('Failed to initalize DracoDecoder: draco library undefined');
                return undefined;
            }
            else
            {
                dracoLib = DracoDecoderModule;
            }
        }
        if (!DracoDecoder.instance)
        {
            DracoDecoder.instance = this;
            this.module = null;

            this.initializingPromise = new Promise(resolve => {
                let dracoDecoderType = {};
                dracoDecoderType['onModuleLoaded'] = dracoDecoderModule => {
                    this.module = dracoDecoderModule;
                    resolve();
                };
                dracoLib(dracoDecoderType);
            });
        }
        return DracoDecoder.instance;
    }

    async ready() {
        await this.initializingPromise;
        Object.freeze(DracoDecoder.instance);
    }

}

let wasm;

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

const heap = new Array(32).fill(undefined);

heap.push(undefined, null, true, false);

let heap_next = heap.length;

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

function getObject(idx) { return heap[idx]; }

function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

let cachegetFloat32Memory0 = null;
function getFloat32Memory0() {
    if (cachegetFloat32Memory0 === null || cachegetFloat32Memory0.buffer !== wasm.memory.buffer) {
        cachegetFloat32Memory0 = new Float32Array(wasm.memory.buffer);
    }
    return cachegetFloat32Memory0;
}

let WASM_VECTOR_LEN = 0;

function passArrayF32ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 4);
    getFloat32Memory0().set(arg, ptr / 4);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}

let cachegetInt32Memory0 = null;
function getInt32Memory0() {
    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== wasm.memory.buffer) {
        cachegetInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachegetInt32Memory0;
}

function getArrayF32FromWasm0(ptr, len) {
    return getFloat32Memory0().subarray(ptr / 4, ptr / 4 + len);
}
/**
* Generates vertex tangents for the given position/normal/texcoord attributes.
* @param {Float32Array} position
* @param {Float32Array} normal
* @param {Float32Array} texcoord
* @returns {Float32Array}
*/
function generateTangents(position, normal, texcoord) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        var ptr0 = passArrayF32ToWasm0(position, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ptr1 = passArrayF32ToWasm0(normal, wasm.__wbindgen_malloc);
        var len1 = WASM_VECTOR_LEN;
        var ptr2 = passArrayF32ToWasm0(texcoord, wasm.__wbindgen_malloc);
        var len2 = WASM_VECTOR_LEN;
        wasm.generateTangents(retptr, ptr0, len0, ptr1, len1, ptr2, len2);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v3 = getArrayF32FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 4);
        return v3;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

async function load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);

            } catch (e) {
                if (module.headers.get('Content-Type') != 'application/wasm') {
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                } else {
                    throw e;
                }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);

    } else {
        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };

        } else {
            return instance;
        }
    }
}

async function init(input) {
    if (typeof input === 'undefined') {
        input = new URL('mikktspace_bg.wasm', import.meta.url);
    }
    const imports = {};
    imports.wbg = {};
    imports.wbg.__wbindgen_string_new = function(arg0, arg1) {
        var ret = getStringFromWasm0(arg0, arg1);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_rethrow = function(arg0) {
        throw takeObject(arg0);
    };

    if (typeof input === 'string' || (typeof Request === 'function' && input instanceof Request) || (typeof URL === 'function' && input instanceof URL)) {
        input = fetch(input);
    }



    const { instance, module } = await load(await input, imports);

    wasm = instance.exports;
    init.__wbindgen_wasm_module = module;

    return wasm;
}

class gltfPrimitive extends GltfObject
{
    static animatedProperties = [];
    constructor()
    {
        super();
        this.attributes = {};
        this.targets = [];
        this.indices = undefined;
        this.material = undefined;
        this.mode = GL.TRIANGLES;

        // non gltf
        this.glAttributes = [];
        this.morphTargetTextureInfo = undefined;
        this.defines = [];
        this.skip = true;
        this.hasWeights = false;
        this.hasJoints = false;
        this.hasNormals = false;
        this.hasTangents = false;
        this.hasTexcoord = false;
        this.hasColor = false;

        // The primitive centroid is used for depth sorting.
        this.centroid = undefined;
    }

    initGl(gltf, webGlContext)
    {
        // Use the default glTF material.
        if (this.material === undefined)
        {
            this.material = gltf.materials.length - 1;
        }

        initGlForMembers(this, gltf, webGlContext);

        const maxAttributes = webGlContext.getParameter(GL.MAX_VERTEX_ATTRIBS);

        // https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#meshes

        if (this.extensions !== undefined)
        {
            // Decode Draco compressed mesh:
            if (this.extensions.KHR_draco_mesh_compression !== undefined)
            {
                const dracoDecoder = new DracoDecoder();
                if (dracoDecoder !== undefined && Object.isFrozen(dracoDecoder))
                {
                    let dracoGeometry = this.decodeDracoBufferToIntermediate(
                        this.extensions.KHR_draco_mesh_compression, gltf);
                    this.copyDataFromDecodedGeometry(gltf, dracoGeometry, this.attributes);
                }
                else
                {
                    console.warn('Failed to load draco compressed mesh: DracoDecoder not initialized');
                }
            }
        }

        // Generate tangents with Mikktspace which needs normals and texcoords as inputs for triangles
        if (this.attributes.TANGENT === undefined && this.attributes.NORMAL && this.attributes.TEXCOORD_0 && this.mode > 3)
        {
            console.info("Generating tangents using the MikkTSpace algorithm.");
            console.time("Tangent generation");
            this.unweld(gltf);
            this.generateTangents(gltf);
            console.timeEnd("Tangent generation");
        }

        // VERTEX ATTRIBUTES
        for (const attribute of Object.keys(this.attributes))
        {
            if(this.glAttributes.length >= maxAttributes)
            {
                console.error("To many vertex attributes for this primitive, skipping " + attribute);
                break;
            }

            const idx = this.attributes[attribute];
            this.glAttributes.push({ attribute: attribute, name: "a_" + attribute.toLowerCase(), accessor: idx });
            this.defines.push(`HAS_${attribute}_${gltf.accessors[idx].type} 1`);
            switch (attribute)
            {
            case "POSITION":
                this.skip = false;
                break;
            case "NORMAL":
                this.hasNormals = true;
                break;
            case "TANGENT":
                this.hasTangents = true;
                break;
            case "TEXCOORD_0":
                this.hasTexcoord = true;
                break;
            case "TEXCOORD_1":
                this.hasTexcoord = true;
                break;
            case "COLOR_0":
                this.hasColor = true;
                break;
            case "JOINTS_0":
                this.hasJoints = true;
                break;
            case "WEIGHTS_0":
                this.hasWeights = true;
                break;
            case "JOINTS_1":
                this.hasJoints = true;
                break;
            case "WEIGHTS_1":
                this.hasWeights = true;
                break;
            default:
                console.log("Unknown attribute: " + attribute);
            }
        }

        // MORPH TARGETS
        if (this.targets !== undefined && this.targets.length > 0)
        {
            const max2DTextureSize = Math.pow(webGlContext.getParameter(GL.MAX_TEXTURE_SIZE), 2);
            const maxTextureArraySize = webGlContext.getParameter(GL.MAX_ARRAY_TEXTURE_LAYERS);
            // Check which attributes are affected by morph targets and
            // define offsets for the attributes in the morph target texture.
            const attributeOffsets = {};
            let attributeOffset = 0;

            // Gather used attributes from all targets (some targets might
            // use more attributes than others)
            const attributes = Array.from(this.targets.reduce((acc, target) => {
                Object.keys(target).map(val => acc.add(val));
                return acc;
            }, new Set()));

            const vertexCount = gltf.accessors[this.attributes[attributes[0]]].count;
            this.defines.push(`NUM_VERTICIES ${vertexCount}`);
            let targetCount = this.targets.length;
            if (targetCount * attributes.length > maxTextureArraySize)
            {
                targetCount = Math.floor(maxTextureArraySize / attributes.length);
                console.warn(`Morph targets exceed texture size limit. Only ${targetCount} of ${this.targets.length} are used.`);
            }

            for (const attribute of attributes)
            {
                // Add morph target defines
                this.defines.push(`HAS_MORPH_TARGET_${attribute} 1`);
                this.defines.push(`MORPH_TARGET_${attribute}_OFFSET ${attributeOffset}`);
                // Store the attribute offset so that later the
                // morph target texture can be assembled.
                attributeOffsets[attribute] = attributeOffset;
                attributeOffset += targetCount;
            }
            this.defines.push("HAS_MORPH_TARGETS 1");

            if (vertexCount <= max2DTextureSize) {
                // Allocate the texture buffer. Note that all target attributes must be vec3 types and
                // all must have the same vertex count as the primitives other attributes.
                const width = Math.ceil(Math.sqrt(vertexCount));
                const singleTextureSize = Math.pow(width, 2) * 4;
                const morphTargetTextureArray = new Float32Array(singleTextureSize * targetCount * attributes.length);

                // Now assemble the texture from the accessors.
                for (let i = 0; i < targetCount; ++i)
                {
                    let target = this.targets[i];
                    for (let [attributeName, offsetRef] of Object.entries(attributeOffsets)){
                        if (target[attributeName] != undefined) {
                            const accessor = gltf.accessors[target[attributeName]];
                            const offset = offsetRef * singleTextureSize;
                            if (accessor.componentType != GL.FLOAT && accessor.normalized == false){
                                console.warn("Unsupported component type for morph targets");
                                attributeOffsets[attributeName] = offsetRef + 1;
                                continue;
                            }
                            const data = accessor.getNormalizedDeinterlacedView(gltf);
                            switch(accessor.type)
                            {
                            case "VEC2":
                            case "VEC3":
                            {
                                // Add padding to fit vec2/vec3 into rgba
                                let paddingOffset = 0;
                                let accessorOffset = 0;
                                const componentCount = accessor.getComponentCount(accessor.type);
                                for (let j = 0; j < accessor.count; ++j) {
                                    morphTargetTextureArray.set(data.subarray(accessorOffset, accessorOffset + componentCount), offset + paddingOffset);
                                    paddingOffset += 4;
                                    accessorOffset += componentCount;
                                }
                                break;
                            }
                            case "VEC4":
                                morphTargetTextureArray.set(data, offset);
                                break;
                            default:
                                console.warn("Unsupported attribute type for morph targets");
                                break;
                            }
                        }
                        attributeOffsets[attributeName] = offsetRef + 1;
                    }
                }


                // Add the morph target texture.
                // We have to create a WebGL2 texture as the format of the
                // morph target texture has to be explicitly specified
                // (gltf image would assume uint8).
                let texture = webGlContext.createTexture();
                webGlContext.bindTexture( webGlContext.TEXTURE_2D_ARRAY, texture);
                // Set texture format and upload data.
                let internalFormat = webGlContext.RGBA32F;
                let format = webGlContext.RGBA;
                let type = webGlContext.FLOAT;
                let data = morphTargetTextureArray;
                webGlContext.texImage3D(
                    webGlContext.TEXTURE_2D_ARRAY,
                    0, //level
                    internalFormat,
                    width,
                    width,
                    targetCount * attributes.length, //Layer count
                    0, //border
                    format,
                    type,
                    data);
                // Ensure mipmapping is disabled and the sampler is configured correctly.
                webGlContext.texParameteri( GL.TEXTURE_2D_ARRAY,  GL.TEXTURE_WRAP_S,  GL.CLAMP_TO_EDGE);
                webGlContext.texParameteri( GL.TEXTURE_2D_ARRAY,  GL.TEXTURE_WRAP_T,  GL.CLAMP_TO_EDGE);
                webGlContext.texParameteri( GL.TEXTURE_2D_ARRAY,  GL.TEXTURE_MIN_FILTER,  GL.NEAREST);
                webGlContext.texParameteri( GL.TEXTURE_2D_ARRAY,  GL.TEXTURE_MAG_FILTER,  GL.NEAREST);

                // Now we add the morph target texture as a gltf texture info resource, so that
                // we can just call webGl.setTexture(..., gltfTextureInfo, ...) in the renderer.
                const morphTargetImage = new gltfImage(
                    undefined, // uri
                    GL.TEXTURE_2D_ARRAY, // type
                    0, // mip level
                    undefined, // buffer view
                    undefined, // name
                    ImageMimeType.GLTEXTURE, // mimeType
                    texture // image
                );
                gltf.images.push(morphTargetImage);

                gltf.samplers.push(new gltfSampler(GL.NEAREST, GL.NEAREST, GL.CLAMP_TO_EDGE, GL.CLAMP_TO_EDGE, undefined));

                const morphTargetTexture = new gltfTexture(
                    gltf.samplers.length - 1,
                    gltf.images.length - 1,
                    GL.TEXTURE_2D_ARRAY);
                // The webgl texture is already initialized -> this flag informs
                // webgl.setTexture about this.
                morphTargetTexture.initialized = true;

                gltf.textures.push(morphTargetTexture);

                this.morphTargetTextureInfo = new gltfTextureInfo(gltf.textures.length - 1, 0, true);
                this.morphTargetTextureInfo.samplerName = "u_MorphTargetsSampler";
                this.morphTargetTextureInfo.generateMips = false;
            } else {
                console.warn("Mesh of Morph targets too big. Cannot apply morphing.");
            }
        }

        this.computeCentroid(gltf);
    }

    computeCentroid(gltf)
    {
        const positionsAccessor = gltf.accessors[this.attributes.POSITION];
        const positions = positionsAccessor.getNormalizedTypedView(gltf);

        if(this.indices !== undefined)
        {
            // Primitive has indices.

            const indicesAccessor = gltf.accessors[this.indices];

            const indices = indicesAccessor.getTypedView(gltf);

            const acc = new Float32Array(3);

            for(let i = 0; i < indices.length; i++) {
                const offset = 3 * indices[i];
                acc[0] += positions[offset];
                acc[1] += positions[offset + 1];
                acc[2] += positions[offset + 2];
            }

            const centroid = new Float32Array([
                acc[0] / indices.length,
                acc[1] / indices.length,
                acc[2] / indices.length,
            ]);

            this.centroid = centroid;
        }
        else
        {
            // Primitive does not have indices.

            const acc = new Float32Array(3);

            for(let i = 0; i < positions.length; i += 3) {
                acc[0] += positions[i];
                acc[1] += positions[i + 1];
                acc[2] += positions[i + 2];
            }

            const positionVectors = positions.length / 3;

            const centroid = new Float32Array([
                acc[0] / positionVectors,
                acc[1] / positionVectors,
                acc[2] / positionVectors,
            ]);

            this.centroid = centroid;
        }
    }

    fromJson(jsonPrimitive)
    {
        super.fromJson(jsonPrimitive);

        if(jsonPrimitive.extensions !== undefined)
        {
            this.fromJsonPrimitiveExtensions(jsonPrimitive.extensions);
        }
    }

    fromJsonPrimitiveExtensions(jsonExtensions)
    {
        if(jsonExtensions.KHR_materials_variants !== undefined)
        {
            this.fromJsonVariants(jsonExtensions.KHR_materials_variants);
        }
    }

    fromJsonVariants(jsonVariants)
    {
        if(jsonVariants.mappings !== undefined)
        {
            this.mappings = jsonVariants.mappings;
        }
    }

    copyDataFromDecodedGeometry(gltf, dracoGeometry, primitiveAttributes)
    {
        // indices
        let indexBuffer = dracoGeometry.index.array;
        if (this.indices !== undefined){
            this.loadBufferIntoGltf(indexBuffer, gltf, this.indices, 34963,
                "index buffer view");
        }

        // Position
        if(dracoGeometry.attributes.POSITION !== undefined)
        {
            let positionBuffer = this.loadArrayIntoArrayBuffer(dracoGeometry.attributes.POSITION.array,
                dracoGeometry.attributes.POSITION.componentType);
            this.loadBufferIntoGltf(positionBuffer, gltf, primitiveAttributes["POSITION"], 34962,
                "position buffer view");
        }

        // Normal
        if(dracoGeometry.attributes.NORMAL !== undefined)
        {
            let normalBuffer = this.loadArrayIntoArrayBuffer(dracoGeometry.attributes.NORMAL.array,
                dracoGeometry.attributes.NORMAL.componentType);
            this.loadBufferIntoGltf(normalBuffer, gltf, primitiveAttributes["NORMAL"], 34962,
                "normal buffer view");
        }

        // TEXCOORD_0
        if(dracoGeometry.attributes.TEXCOORD_0 !== undefined)
        {
            let uvBuffer = this.loadArrayIntoArrayBuffer(dracoGeometry.attributes.TEXCOORD_0.array,
                dracoGeometry.attributes.TEXCOORD_0.componentType);
            this.loadBufferIntoGltf(uvBuffer, gltf, primitiveAttributes["TEXCOORD_0"], 34962,
                "TEXCOORD_0 buffer view");
        }

        // TEXCOORD_1
        if(dracoGeometry.attributes.TEXCOORD_1 !== undefined)
        {
            let uvBuffer = this.loadArrayIntoArrayBuffer(dracoGeometry.attributes.TEXCOORD_1.array,
                dracoGeometry.attributes.TEXCOORD_1.componentType);
            this.loadBufferIntoGltf(uvBuffer, gltf, primitiveAttributes["TEXCOORD_1"], 34962,
                "TEXCOORD_1 buffer view");
        }

        // Tangent
        if(dracoGeometry.attributes.TANGENT !== undefined)
        {
            let tangentBuffer = this.loadArrayIntoArrayBuffer(dracoGeometry.attributes.TANGENT.array,
                dracoGeometry.attributes.TANGENT.componentType);
            this.loadBufferIntoGltf(tangentBuffer, gltf, primitiveAttributes["TANGENT"], 34962,
                "Tangent buffer view");
        }

        // Color
        if(dracoGeometry.attributes.COLOR_0 !== undefined)
        {
            let colorBuffer = this.loadArrayIntoArrayBuffer(dracoGeometry.attributes.COLOR_0.array,
                dracoGeometry.attributes.COLOR_0.componentType);
            this.loadBufferIntoGltf(colorBuffer, gltf, primitiveAttributes["COLOR_0"], 34962,
                "color buffer view");
        }

        // JOINTS_0
        if(dracoGeometry.attributes.JOINTS_0 !== undefined)
        {
            let jointsBuffer = this.loadArrayIntoArrayBuffer(dracoGeometry.attributes.JOINTS_0.array,
                dracoGeometry.attributes.JOINTS_0.componentType);
            this.loadBufferIntoGltf(jointsBuffer, gltf, primitiveAttributes["JOINTS_0"], 34963,
                "JOINTS_0 buffer view");
        }

        // WEIGHTS_0
        if(dracoGeometry.attributes.WEIGHTS_0 !== undefined)
        {
            let weightsBuffer = this.loadArrayIntoArrayBuffer(dracoGeometry.attributes.WEIGHTS_0.array,
                dracoGeometry.attributes.WEIGHTS_0.componentType);
            this.loadBufferIntoGltf(weightsBuffer, gltf, primitiveAttributes["WEIGHTS_0"], 34963,
                "WEIGHTS_0 buffer view");
        }

        // JOINTS_1
        if(dracoGeometry.attributes.JOINTS_1 !== undefined)
        {
            let jointsBuffer = this.loadArrayIntoArrayBuffer(dracoGeometry.attributes.JOINTS_1.array,
                dracoGeometry.attributes.JOINTS_1.componentType);
            this.loadBufferIntoGltf(jointsBuffer, gltf, primitiveAttributes["JOINTS_1"], 34963,
                "JOINTS_1 buffer view");
        }

        // WEIGHTS_1
        if(dracoGeometry.attributes.WEIGHTS_1 !== undefined)
        {
            let weightsBuffer = this.loadArrayIntoArrayBuffer(dracoGeometry.attributes.WEIGHTS_1.array,
                dracoGeometry.attributes.WEIGHTS_1.componentType);
            this.loadBufferIntoGltf(weightsBuffer, gltf, primitiveAttributes["WEIGHTS_1"], 34963,
                "WEIGHTS_1 buffer view");
        }
    }

    loadBufferIntoGltf(buffer, gltf, gltfAccessorIndex, gltfBufferViewTarget, gltfBufferViewName)
    {
        const gltfBufferObj = new gltfBuffer();
        gltfBufferObj.byteLength = buffer.byteLength;
        gltfBufferObj.buffer = buffer;
        gltf.buffers.push(gltfBufferObj);

        const gltfBufferViewObj = new gltfBufferView();
        gltfBufferViewObj.buffer = gltf.buffers.length - 1;
        gltfBufferViewObj.byteLength = buffer.byteLength;
        if(gltfBufferViewName !== undefined)
        {
            gltfBufferViewObj.name = gltfBufferViewName;
        }
        gltfBufferViewObj.target = gltfBufferViewTarget;
        gltf.bufferViews.push(gltfBufferViewObj);

        gltf.accessors[gltfAccessorIndex].byteOffset = 0;
        gltf.accessors[gltfAccessorIndex].bufferView = gltf.bufferViews.length - 1;
    }

    loadArrayIntoArrayBuffer(arrayData, componentType)
    {
        let arrayBuffer;
        switch (componentType)
        {
        case "Int8Array":
            arrayBuffer = new ArrayBuffer(arrayData.length);
            new Int8Array(arrayBuffer).set(arrayData);
            break;
        case "Uint8Array":
            arrayBuffer = new ArrayBuffer(arrayData.length);
            new Uint8Array(arrayBuffer).set(arrayData);
            break;
        case "Int16Array":
            arrayBuffer = new ArrayBuffer(arrayData.length * 2);
            new Int16Array(arrayBuffer).set(arrayData);
            break;
        case "Uint16Array":
            arrayBuffer = new ArrayBuffer(arrayData.length * 2);
            new Uint16Array(arrayBuffer).set(arrayData);
            break;
        case "Int32Array":
            arrayBuffer = new ArrayBuffer(arrayData.length * 4);
            new Int32Array(arrayBuffer).set(arrayData);
            break;
        case "Uint32Array":
            arrayBuffer = new ArrayBuffer(arrayData.length * 4);
            new Uint32Array(arrayBuffer).set(arrayData);
            break;
        default:
        case "Float32Array":
            arrayBuffer = new ArrayBuffer(arrayData.length * 4);
            new Float32Array(arrayBuffer).set(arrayData);
            break;
        }

        return arrayBuffer;
    }

    decodeDracoBufferToIntermediate(dracoExtension, gltf)
    {
        let dracoBufferViewIDX = dracoExtension.bufferView;

        const origGltfDrBufViewObj = gltf.bufferViews[dracoBufferViewIDX];
        const origGltfDracoBuffer = gltf.buffers[origGltfDrBufViewObj.buffer];

        const totalBuffer = new Int8Array( origGltfDracoBuffer.buffer );
        const actualBuffer = totalBuffer.slice(origGltfDrBufViewObj.byteOffset,
            origGltfDrBufViewObj.byteOffset + origGltfDrBufViewObj.byteLength);

        // decode draco buffer to geometry intermediate
        let dracoDecoder = new DracoDecoder();
        let draco = dracoDecoder.module;
        let decoder = new draco.Decoder();
        let decoderBuffer = new draco.DecoderBuffer();
        decoderBuffer.Init(actualBuffer, origGltfDrBufViewObj.byteLength);
        let geometry = this.decodeGeometry( draco, decoder, decoderBuffer, dracoExtension.attributes, gltf );

        draco.destroy(decoderBuffer);

        return geometry;
    }

    getDracoArrayTypeFromComponentType(componentType)
    {
        switch (componentType)
        {
        case GL.BYTE:
            return "Int8Array";
        case GL.UNSIGNED_BYTE:
            return "Uint8Array";
        case GL.SHORT:
            return "Int16Array";
        case GL.UNSIGNED_SHORT:
            return "Uint16Array";
        case GL.INT:
            return "Int32Array";
        case GL.UNSIGNED_INT:
            return "Uint32Array";
        case GL.FLOAT:
            return "Float32Array";
        default:
            return "Float32Array";
        }
    }

    decodeGeometry(draco, decoder, decoderBuffer, gltfDracoAttributes, gltf) {
        let dracoGeometry;
        let decodingStatus;

        // decode mesh in draco decoder
        let geometryType = decoder.GetEncodedGeometryType( decoderBuffer );
        if ( geometryType === draco.TRIANGULAR_MESH ) {
            dracoGeometry = new draco.Mesh();
            decodingStatus = decoder.DecodeBufferToMesh( decoderBuffer, dracoGeometry );
        }
        else
        {
            throw new Error( 'DRACOLoader: Unexpected geometry type.' );
        }

        if ( ! decodingStatus.ok() || dracoGeometry.ptr === 0 ) {
            throw new Error( 'DRACOLoader: Decoding failed: ' + decodingStatus.error_msg() );
        }

        let geometry = { index: null, attributes: {} };
        let vertexCount = dracoGeometry.num_points();

        // Gather all vertex attributes.
        for(let dracoAttr in gltfDracoAttributes)
        {
            let componentType = GL.BYTE;
            let accessotVertexCount;
            // find gltf accessor for this draco attribute
            for (const [key, value] of Object.entries(this.attributes))
            {
                if(key === dracoAttr)
                {
                    componentType = gltf.accessors[value].componentType;
                    accessotVertexCount = gltf.accessors[value].count;
                    break;
                }
            }

            // check if vertex count matches
            if(vertexCount !== accessotVertexCount)
            {
                throw new Error(`DRACOLoader: Accessor vertex count ${accessotVertexCount} does not match draco decoder vertex count  ${vertexCount}`);
            }
            componentType = this.getDracoArrayTypeFromComponentType(componentType);

            let dracoAttribute = decoder.GetAttributeByUniqueId( dracoGeometry, gltfDracoAttributes[dracoAttr]);
            var tmpObj = this.decodeAttribute( draco, decoder,
                dracoGeometry, dracoAttr, dracoAttribute, componentType);
            geometry.attributes[tmpObj.name] = tmpObj;
        }

        // Add index buffer
        if ( geometryType === draco.TRIANGULAR_MESH ) {

            // Generate mesh faces.
            let numFaces = dracoGeometry.num_faces();
            let numIndices = numFaces * 3;
            let dataSize = numIndices * 4;
            let ptr = draco._malloc( dataSize );
            decoder.GetTrianglesUInt32Array( dracoGeometry, dataSize, ptr );
            let index = new Uint32Array( draco.HEAPU32.buffer, ptr, numIndices ).slice();
            draco._free( ptr );

            geometry.index = { array: index, itemSize: 1 };

        }

        draco.destroy( dracoGeometry );
        return geometry;
    }

    decodeAttribute( draco, decoder, dracoGeometry, attributeName, attribute, attributeType) {
        let numComponents = attribute.num_components();
        let numPoints = dracoGeometry.num_points();
        let numValues = numPoints * numComponents;

        let ptr;
        let array;

        let dataSize;
        switch ( attributeType ) {
        case "Float32Array":
            dataSize = numValues * 4;
            ptr = draco._malloc( dataSize );
            decoder.GetAttributeDataArrayForAllPoints( dracoGeometry, attribute, draco.DT_FLOAT32, dataSize, ptr );
            array = new Float32Array( draco.HEAPF32.buffer, ptr, numValues ).slice();
            draco._free( ptr );
            break;

        case "Int8Array":
            ptr = draco._malloc( numValues );
            decoder.GetAttributeDataArrayForAllPoints( dracoGeometry, attribute, draco.DT_INT8, numValues, ptr );
            array = new Int8Array( draco.HEAP8.buffer, ptr, numValues ).slice();
            draco._free( ptr );
            break;

        case "Int16Array":
            dataSize = numValues * 2;
            ptr = draco._malloc( dataSize );
            decoder.GetAttributeDataArrayForAllPoints( dracoGeometry, attribute, draco.DT_INT16, dataSize, ptr );
            array = new Int16Array( draco.HEAP16.buffer, ptr, numValues ).slice();
            draco._free( ptr );
            break;

        case "Int32Array":
            dataSize = numValues * 4;
            ptr = draco._malloc( dataSize );
            decoder.GetAttributeDataArrayForAllPoints( dracoGeometry, attribute, draco.DT_INT32, dataSize, ptr );
            array = new Int32Array( draco.HEAP32.buffer, ptr, numValues ).slice();
            draco._free( ptr );
            break;

        case "Uint8Array":
            ptr = draco._malloc( numValues );
            decoder.GetAttributeDataArrayForAllPoints( dracoGeometry, attribute, draco.DT_UINT8, numValues, ptr );
            array = new Uint8Array( draco.HEAPU8.buffer, ptr, numValues ).slice();
            draco._free( ptr );
            break;

        case "Uint16Array":
            dataSize = numValues * 2;
            ptr = draco._malloc( dataSize );
            decoder.GetAttributeDataArrayForAllPoints( dracoGeometry, attribute, draco.DT_UINT16, dataSize, ptr );
            array = new Uint16Array( draco.HEAPU16.buffer, ptr, numValues ).slice();
            draco._free( ptr );
            break;

        case "Uint32Array":
            dataSize = numValues * 4;
            ptr = draco._malloc( dataSize );
            decoder.GetAttributeDataArrayForAllPoints( dracoGeometry, attribute, draco.DT_UINT32, dataSize, ptr );
            array = new Uint32Array( draco.HEAPU32.buffer, ptr, numValues ).slice();
            draco._free( ptr );
            break;

        default:
            throw new Error( 'DRACOLoader: Unexpected attribute type.' );
        }

        return {
            name: attributeName,
            array: array,
            itemSize: numComponents,
            componentType: attributeType
        };

    }

    /**
     * Unwelds this primitive, i.e. applies the index mapping.
     * This is required for generating tangents using the MikkTSpace algorithm,
     * because the same vertex might be mapped to different tangents.
     * @param {*} gltf The glTF document.
     */
    unweld(gltf) {
        // Unwelding is an idempotent operation.
        if (this.indices === undefined) {
            return;
        }

        const indices = gltf.accessors[this.indices].getTypedView(gltf);

        // Unweld attributes:
        for (const [attribute, accessorIndex] of Object.entries(this.attributes)) {
            this.attributes[attribute] = this.unweldAccessor(gltf, gltf.accessors[accessorIndex], indices);
        }

        // Unweld morph targets:
        for (const target of this.targets) {
            for (const [attribute, accessorIndex] of Object.entries(target)) {
                target[attribute] = this.unweldAccessor(gltf, gltf.accessors[accessorIndex], indices);
            }
        }

        // Dipose the indices:
        this.indices = undefined;
    }

    /**
     * Unwelds a single accessor. Used by {@link unweld}.
     * @param {*} gltf The glTF document.
     * @param {*} accessor The accessor to unweld.
     * @param {*} typedIndexView A typed view of the indices.
     * @returns A new accessor index containing the unwelded attribute.
     */
    unweldAccessor(gltf, accessor, typedIndexView) {
        const componentCount = accessor.getComponentCount(accessor.type);

        const weldedAttribute = accessor.getDeinterlacedView(gltf);
        // Create new array with same type as weldedAttribute
        const unweldedAttribute = new weldedAttribute.constructor(gltf.accessors[this.indices].count * componentCount);

        // Apply the index mapping.
        for (let i = 0; i < typedIndexView.length; i++) {
            for (let j = 0; j < componentCount; j++) {
                unweldedAttribute[i * componentCount + j] = weldedAttribute[typedIndexView[i] * componentCount + j];
            }
        }

        // Create a new buffer and buffer view for the unwelded attribute:
        const unweldedBuffer = new gltfBuffer();
        unweldedBuffer.byteLength = unweldedAttribute.byteLength;
        unweldedBuffer.buffer = unweldedAttribute.buffer;
        gltf.buffers.push(unweldedBuffer);

        const unweldedBufferView = new gltfBufferView();
        unweldedBufferView.buffer = gltf.buffers.length - 1;
        unweldedBufferView.byteLength = unweldedAttribute.byteLength;
        unweldedBufferView.target = GL.ARRAY_BUFFER;
        gltf.bufferViews.push(unweldedBufferView);

        // Create a new accessor for the unwelded attribute:
        const unweldedAccessor = new gltfAccessor();
        unweldedAccessor.bufferView = gltf.bufferViews.length - 1;
        unweldedAccessor.byteOffset = 0;
        unweldedAccessor.count = typedIndexView.length;
        unweldedAccessor.type = accessor.type;
        unweldedAccessor.componentType = accessor.componentType;
        unweldedAccessor.min = accessor.min;
        unweldedAccessor.max = accessor.max;
        unweldedAccessor.normalized = accessor.normalized;
        gltf.accessors.push(unweldedAccessor);

        // Update the primitive to use the unwelded attribute:
        return gltf.accessors.length - 1;
    }

    generateTangents(gltf) {
        if(this.attributes.NORMAL === undefined || this.attributes.TEXCOORD_0 === undefined)
        {
            return;
        }

        const positions = gltf.accessors[this.attributes.POSITION].getTypedView(gltf);
        const normals = gltf.accessors[this.attributes.NORMAL].getTypedView(gltf);
        const texcoords = gltf.accessors[this.attributes.TEXCOORD_0].getTypedView(gltf);

        const tangents = generateTangents(positions, normals, texcoords);

        // convert coordinate system handedness to respect output format of MikkTSpace
        for (let idx = 0; idx < tangents.length; idx += 4) {
            tangents[idx+3] = -tangents[idx+3]; // Flip w-channel
        }

        // Create a new buffer and buffer view for the tangents:
        const tangentBuffer = new gltfBuffer();
        tangentBuffer.byteLength = tangents.byteLength;
        tangentBuffer.buffer = tangents.buffer;
        gltf.buffers.push(tangentBuffer);

        const tangentBufferView = new gltfBufferView();
        tangentBufferView.buffer = gltf.buffers.length - 1;
        tangentBufferView.byteLength = tangents.byteLength;
        tangentBufferView.target = GL.ARRAY_BUFFER;
        gltf.bufferViews.push(tangentBufferView);

        // Create a new accessor for the tangents:
        const tangentAccessor = new gltfAccessor();
        tangentAccessor.bufferView = gltf.bufferViews.length - 1;
        tangentAccessor.byteOffset = 0;
        tangentAccessor.count = tangents.length / 4;
        tangentAccessor.type = "VEC4";
        tangentAccessor.componentType = GL.FLOAT;

        // Update the primitive to use the tangents:
        this.attributes.TANGENT = gltf.accessors.length;
        gltf.accessors.push(tangentAccessor);

    }
}

class gltfMesh extends GltfObject
{
    static animatedProperties = ["weights"];
    constructor()
    {
        super();
        this.primitives = [];
        this.name = undefined;
        this.weights = undefined;
    }

    fromJson(jsonMesh)
    {
        super.fromJson(jsonMesh);

        if (jsonMesh.name !== undefined)
        {
            this.name = jsonMesh.name;
        }

        this.primitives = objectsFromJsons(jsonMesh.primitives, gltfPrimitive);
    }
}

// contain:
// transform
// child indices (reference to scene array of nodes)

class gltfNode extends GltfObject
{
    static animatedProperties = [
        "rotation",
        "scale",
        "translation",
        "weights"
    ];
    constructor()
    {
        super();
        this.camera = undefined;
        this.children = [];
        this.matrix = undefined;
        this.rotation = jsToGl([0, 0, 0, 1]);
        this.scale = jsToGl([1, 1, 1]);
        this.translation = jsToGl([0, 0, 0]);
        this.name = undefined;
        this.mesh = undefined;
        this.skin = undefined;
        this.weights = undefined;

        // non gltf
        this.worldTransform = create$3();
        this.inverseWorldTransform = create$3();
        this.normalMatrix = create$3();
        this.light = undefined;
    }

    fromJson(jsonNode) {
        super.fromJson(jsonNode);
        if (jsonNode.matrix !== undefined) {
            this.applyMatrix(jsonNode.matrix);
        }
    }

    getWeights(gltf)
    {
        if (this.weights !== undefined && this.weights.length > 0) {
            return this.weights;
        }
        else {
            return gltf.meshes[this.mesh].weights;
        }
    }

    applyMatrix(matrixData)
    {
        this.matrix = jsToGl(matrixData);

        getScaling(this.scale, this.matrix);

        // To extract a correct rotation, the scaling component must be eliminated.
        const mn = create$3();
        for(const col of [0, 1, 2])
        {
            mn[col] = this.matrix[col] / this.scale[0];
            mn[col + 4] = this.matrix[col + 4] / this.scale[1];
            mn[col + 8] = this.matrix[col + 8] / this.scale[2];
        }
        getRotation(this.rotation, mn);
        normalize(this.rotation, this.rotation);

        getTranslation(this.translation, this.matrix);
    }

    getLocalTransform()
    {
        return fromRotationTranslationScale(
            create$3(),
            this.rotation,
            this.translation,
            this.scale
        );
    }
}

class gltfScene extends GltfObject
{
    static animatedProperties = [];
    constructor(nodes = [], name = undefined)
    {
        super();
        this.nodes = nodes;
        this.name = name;

        // non gltf
        this.imageBasedLight = undefined;
    }

    initGl(gltf, webGlContext)
    {
        super.initGl(gltf, webGlContext);

        if (this.extensions !== undefined &&
            this.extensions.KHR_lights_image_based !== undefined)
        {
            const index = this.extensions.KHR_lights_image_based.imageBasedLight;
            this.imageBasedLight = gltf.imageBasedLights[index];
        }
    }

    applyTransformHierarchy(gltf, rootTransform = create$3())
    {
        function applyTransform(gltf, node, parentTransform)
        {
            multiply(node.worldTransform, parentTransform, node.getLocalTransform());
            invert(node.inverseWorldTransform, node.worldTransform);
            transpose(node.normalMatrix, node.inverseWorldTransform);

            for (const child of node.children)
            {
                applyTransform(gltf, gltf.nodes[child], node.worldTransform);
            }
        }

        for (const node of this.nodes)
        {
            applyTransform(gltf, gltf.nodes[node], rootTransform);
        }
    }

    gatherNodes(gltf)
    {
        const nodes = [];

        function gatherNode(nodeIndex)
        {
            const node = gltf.nodes[nodeIndex];
            nodes.push(node);

            // recurse into children
            for(const child of node.children)
            {
                gatherNode(child);
            }
        }

        for (const node of this.nodes)
        {
            gatherNode(node);
        }

        return nodes;
    }

    includesNode(gltf, nodeIndex)
    {
        let children = [...this.nodes];
        while(children.length > 0)
        {
            const childIndex = children.pop();

            if (childIndex === nodeIndex)
            {
                return true;
            }

            children = children.concat(gltf.nodes[childIndex].children);
        }

        return false;
    }
}

class gltfAsset extends GltfObject
{
    static animatedProperties = [];
    constructor()
    {
        super();
        this.copyright = undefined;
        this.generator = undefined;
        this.version = undefined;
        this.minVersion = undefined;
    }
}

class gltfAnimationChannel extends GltfObject
{
    static animatedProperties = [];
    constructor()
    {
        super();
        this.target = undefined;
        this.sampler = undefined;
    }

    fromJson(jsonChannel)
    {
        super.fromJson(jsonChannel);
        this.target = objectFromJson(jsonChannel.target, gltfAnimationTarget);
    }
}

class gltfAnimationTarget extends GltfObject
{
    static animatedProperties = [];
    constructor()
    {
        super();
        this.node = undefined;
        this.path = undefined;
    }
}

const InterpolationPath =
{
    TRANSLATION: "translation",
    ROTATION: "rotation",
    SCALE: "scale",
    WEIGHTS: "weights",
    POINTER: "pointer",
};

class gltfAnimationSampler extends GltfObject
{
    static animatedProperties = [];
    constructor()
    {
        super();
        this.input = undefined;
        this.interpolation = InterpolationModes.LINEAR;
        this.output = undefined;
    }
}

const InterpolationModes =
{
    LINEAR: "LINEAR",
    STEP: "STEP",
    CUBICSPLINE: "CUBICSPLINE"
};

class gltfInterpolator
{
    constructor()
    {
        this.prevKey = 0;
        this.prevT = 0.0;
    }

    slerpQuat(q1, q2, t)
    {
        const qn1 = create();
        const qn2 = create();

        normalize(qn1, q1);
        normalize(qn2, q2);

        const quatResult = create();

        slerp(quatResult, qn1, qn2, t);
        normalize(quatResult, quatResult);

        return quatResult;
    }

    step(prevKey, output, stride)
    {
        const result = new ARRAY_TYPE(stride);

        for(let i = 0; i < stride; ++i)
        {
            result[i] = output[prevKey * stride + i];
        }

        return result;
    }

    linear(prevKey, nextKey, output, t, stride)
    {
        const result = new ARRAY_TYPE(stride);

        for(let i = 0; i < stride; ++i)
        {
            result[i] = output[prevKey * stride + i] * (1-t) + output[nextKey * stride + i] * t;
        }

        return result;
    }

    cubicSpline(prevKey, nextKey, output, keyDelta, t, stride)
    {
        // stride: Count of components (4 in a quaternion).
        // Scale by 3, because each output entry consist of two tangents and one data-point.
        const prevIndex = prevKey * stride * 3;
        const nextIndex = nextKey * stride * 3;
        const A = 0;
        const V = 1 * stride;
        const B = 2 * stride;

        const result = new ARRAY_TYPE(stride);
        const tSq = t ** 2;
        const tCub = t ** 3;

        // We assume that the components in output are laid out like this: in-tangent, point, out-tangent.
        // https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#appendix-c-spline-interpolation
        for(let i = 0; i < stride; ++i)
        {
            const v0 = output[prevIndex + i + V];
            const a = keyDelta * output[nextIndex + i + A];
            const b = keyDelta * output[prevIndex + i + B];
            const v1 = output[nextIndex + i + V];

            result[i] = ((2*tCub - 3*tSq + 1) * v0) + ((tCub - 2*tSq + t) * b) + ((-2*tCub + 3*tSq) * v1) + ((tCub - tSq) * a);
        }

        return result;
    }

    resetKey()
    {
        this.prevKey = 0;
    }

    interpolate(gltf, channel, sampler, t, stride, maxTime)
    {
        if(t === undefined)
        {
            return undefined;
        }

        const input = gltf.accessors[sampler.input].getNormalizedDeinterlacedView(gltf);
        const output = gltf.accessors[sampler.output].getNormalizedDeinterlacedView(gltf);

        if(output.length === stride) // no interpolation for single keyFrame animations
        {
            return jsToGlSlice(output, 0, stride);
        }

        // Wrap t around, so the animation loops.
        // Make sure that t is never earlier than the first keyframe and never later then the last keyframe.
        t = t % maxTime;
        t = clamp(t, input[0], input[input.length - 1]);

        if (this.prevT > t)
        {
            this.prevKey = 0;
        }

        this.prevT = t;

        // Find next keyframe: min{ t of input | t > prevKey }
        let nextKey = null;
        for (let i = this.prevKey; i < input.length; ++i)
        {
            if (t <= input[i])
            {
                nextKey = clamp(i, 1, input.length - 1);
                break;
            }
        }
        this.prevKey = clamp(nextKey - 1, 0, nextKey);

        const keyDelta = input[nextKey] - input[this.prevKey];

        // Normalize t: [t0, t1] -> [0, 1]
        const tn = (t - input[this.prevKey]) / keyDelta;

        if(channel.target.path === InterpolationPath.ROTATION)
        {

            if(InterpolationModes.CUBICSPLINE === sampler.interpolation)
            {
                // GLTF requires cubic spline interpolation for quaternions.
                // https://github.com/KhronosGroup/glTF/issues/1386
                const result = this.cubicSpline(this.prevKey, nextKey, output, keyDelta, tn, 4);
                normalize(result, result);
                return result;
            }
            else if(sampler.interpolation === InterpolationModes.LINEAR)
            {
                const q0 = this.getQuat(output, this.prevKey);
                const q1 = this.getQuat(output, nextKey);
                return this.slerpQuat(q0, q1, tn);
            }
            else if(sampler.interpolation === InterpolationModes.STEP)
            {
                return this.getQuat(output, this.prevKey);
            }

        }

        switch(sampler.interpolation)
        {
        case InterpolationModes.STEP:
            return this.step(this.prevKey, output, stride);
        case InterpolationModes.CUBICSPLINE:
            return this.cubicSpline(this.prevKey, nextKey, output, keyDelta, tn, stride);
        default:
            return this.linear(this.prevKey, nextKey, output, tn, stride);
        }
    }

    getQuat(output, index)
    {
        const x = output[4 * index];
        const y = output[4 * index + 1];
        const z = output[4 * index + 2];
        const w = output[4 * index + 3];
        return fromValues(x, y, z, w);
    }
}

function replace(source, find, repl) {
    let res = '';
    let rem = source;
    let beg = 0;
    let end = -1;
    while ((end = rem.indexOf(find)) > -1) {
        res += source.substring(beg, beg + end) + repl;
        rem = rem.substring(end + find.length, rem.length);
        beg += end + find.length;
    }
    if (rem.length > 0) {
        res += source.substring(source.length - rem.length, source.length);
    }
    return res;
}
function decodeFragmentSegments(segments) {
    let i = -1;
    const len = segments.length;
    const res = new Array(len);
    while (++i < len) {
        if (typeof segments[i] === 'string') {
            res[i] = replace(replace(decodeURIComponent(segments[i]), '~1', '/'), '~0', '~');
        }
        else {
            res[i] = segments[i];
        }
    }
    return res;
}
function encodeFragmentSegments(segments) {
    let i = -1;
    const len = segments.length;
    const res = new Array(len);
    while (++i < len) {
        if (typeof segments[i] === 'string') {
            res[i] = encodeURIComponent(replace(replace(segments[i], '~', '~0'), '/', '~1'));
        }
        else {
            res[i] = segments[i];
        }
    }
    return res;
}
function decodePointerSegments(segments) {
    let i = -1;
    const len = segments.length;
    const res = new Array(len);
    while (++i < len) {
        if (typeof segments[i] === 'string') {
            res[i] = replace(replace(segments[i], '~1', '/'), '~0', '~');
        }
        else {
            res[i] = segments[i];
        }
    }
    return res;
}
function encodePointerSegments(segments) {
    let i = -1;
    const len = segments.length;
    const res = new Array(len);
    while (++i < len) {
        if (typeof segments[i] === 'string') {
            res[i] = replace(replace(segments[i], '~', '~0'), '/', '~1');
        }
        else {
            res[i] = segments[i];
        }
    }
    return res;
}
function decodePointer(ptr) {
    if (typeof ptr !== 'string') {
        throw new TypeError('Invalid type: JSON Pointers are represented as strings.');
    }
    if (ptr.length === 0) {
        return [];
    }
    if (ptr[0] !== '/') {
        throw new ReferenceError('Invalid JSON Pointer syntax. Non-empty pointer must begin with a solidus `/`.');
    }
    return decodePointerSegments(ptr.substring(1).split('/'));
}
function encodePointer(path) {
    if (!path || (path && !Array.isArray(path))) {
        throw new TypeError('Invalid type: path must be an array of segments.');
    }
    if (path.length === 0) {
        return '';
    }
    return '/'.concat(encodePointerSegments(path).join('/'));
}
function decodeUriFragmentIdentifier(ptr) {
    if (typeof ptr !== 'string') {
        throw new TypeError('Invalid type: JSON Pointers are represented as strings.');
    }
    if (ptr.length === 0 || ptr[0] !== '#') {
        throw new ReferenceError('Invalid JSON Pointer syntax; URI fragment identifiers must begin with a hash.');
    }
    if (ptr.length === 1) {
        return [];
    }
    if (ptr[1] !== '/') {
        throw new ReferenceError('Invalid JSON Pointer syntax.');
    }
    return decodeFragmentSegments(ptr.substring(2).split('/'));
}
function encodeUriFragmentIdentifier(path) {
    if (!path || (path && !Array.isArray(path))) {
        throw new TypeError('Invalid type: path must be an array of segments.');
    }
    if (path.length === 0) {
        return '#';
    }
    return '#/'.concat(encodeFragmentSegments(path).join('/'));
}
const InvalidRelativePointerError = 'Invalid Relative JSON Pointer syntax. Relative pointer must begin with a non-negative integer, followed by either the number sign (#), or a JSON Pointer.';
function decodeRelativePointer(ptr) {
    if (typeof ptr !== 'string') {
        throw new TypeError('Invalid type: Relative JSON Pointers are represented as strings.');
    }
    if (ptr.length === 0) {
        // https://tools.ietf.org/id/draft-handrews-relative-json-pointer-00.html#rfc.section.3
        throw new ReferenceError(InvalidRelativePointerError);
    }
    const segments = ptr.split('/');
    let first = segments[0];
    // It is a name reference; strip the hash.
    if (first[first.length - 1] == '#') {
        if (segments.length > 1) {
            throw new ReferenceError(InvalidRelativePointerError);
        }
        first = first.substr(0, first.length - 1);
    }
    let i = -1;
    const len = first.length;
    while (++i < len) {
        if (first[i] < '0' || first[i] > '9') {
            throw new ReferenceError(InvalidRelativePointerError);
        }
    }
    const path = decodePointerSegments(segments.slice(1));
    path.unshift(segments[0]);
    return path;
}
function toArrayIndexReference(arr, idx) {
    if (typeof idx === 'number')
        return idx;
    const len = idx.length;
    if (!len)
        return -1;
    let cursor = 0;
    if (len === 1 && idx[0] === '-') {
        if (!Array.isArray(arr)) {
            return 0;
        }
        return arr.length;
    }
    while (++cursor < len) {
        if (idx[cursor] < '0' || idx[cursor] > '9') {
            return -1;
        }
    }
    return parseInt(idx, 10);
}
function compilePointerDereference(path) {
    let body = "if (typeof(it) !== 'undefined'";
    if (path.length === 0) {
        return (it) => it;
    }
    body = path.reduce((body, _, i) => {
        return (body +
            "\n\t&& it !== null && typeof((it = it['" +
            replace(replace(path[i] + '', '\\', '\\\\'), "'", "\\'") +
            "'])) !== 'undefined'");
    }, "if (typeof(it) !== 'undefined'");
    body = body + ') {\n\treturn it;\n }';
    // eslint-disable-next-line no-new-func
    return new Function('it', body);
}
function setValueAtPath(target, val, path, force = false) {
    if (path.length === 0) {
        throw new Error('Cannot set the root object; assign it directly.');
    }
    if (typeof target === 'undefined') {
        throw new TypeError('Cannot set values on undefined');
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let it = target;
    const len = path.length;
    const end = path.length - 1;
    let step;
    let cursor = -1;
    let rem;
    let p;
    while (++cursor < len) {
        step = path[cursor];
        if (typeof step !== 'string' && typeof step !== 'number') {
            throw new TypeError('PathSegments must be a string or a number.');
        }
        if (
        // Reconsider this strategy. It disallows legitimate structures on
        // non - objects, or more precisely, on objects not derived from a class
        // or constructor function.
        step === '__proto__' ||
            step === 'constructor' ||
            step === 'prototype') {
            throw new Error('Attempted prototype pollution disallowed.');
        }
        if (Array.isArray(it)) {
            if (step === '-' && cursor === end) {
                it.push(val);
                return undefined;
            }
            p = toArrayIndexReference(it, step);
            if (it.length > p) {
                if (cursor === end) {
                    rem = it[p];
                    it[p] = val;
                    break;
                }
                it = it[p];
            }
            else if (cursor === end && p === it.length) {
                if (force) {
                    it.push(val);
                    return undefined;
                }
            }
            else if (force) {
                it = it[p] = cursor === end ? val : {};
            }
        }
        else {
            if (typeof it[step] === 'undefined') {
                if (force) {
                    if (cursor === end) {
                        it[step] = val;
                        return undefined;
                    }
                    // if the next step is an array index, this step should be an array.
                    const n = Number(path[cursor + 1]);
                    if (Number.isInteger(n) &&
                        toArrayIndexReference(it[step], n) !== -1) {
                        it = it[step] = [];
                        continue;
                    }
                    it = it[step] = {};
                    continue;
                }
                return undefined;
            }
            if (cursor === end) {
                rem = it[step];
                it[step] = val;
                break;
            }
            it = it[step];
        }
    }
    return rem;
}
function unsetValueAtPath(target, path) {
    if (path.length === 0) {
        throw new Error('Cannot unset the root object; assign it directly.');
    }
    if (typeof target === 'undefined') {
        throw new TypeError('Cannot unset values on undefined');
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let it = target;
    const len = path.length;
    const end = path.length - 1;
    let step;
    let cursor = -1;
    let rem;
    let p;
    while (++cursor < len) {
        step = path[cursor];
        if (typeof step !== 'string' && typeof step !== 'number') {
            throw new TypeError('PathSegments must be a string or a number.');
        }
        if (step === '__proto__' ||
            step === 'constructor' ||
            step === 'prototype') {
            throw new Error('Attempted prototype pollution disallowed.');
        }
        if (Array.isArray(it)) {
            p = toArrayIndexReference(it, step);
            if (p >= it.length)
                return undefined;
            if (cursor === end) {
                rem = it[p];
                delete it[p];
                break;
            }
            it = it[p];
        }
        else {
            if (typeof it[step] === 'undefined') {
                return undefined;
            }
            if (cursor === end) {
                rem = it[step];
                delete it[step];
                break;
            }
            it = it[step];
        }
    }
    return rem;
}
function looksLikeFragment(ptr) {
    return typeof ptr === 'string' && ptr.length > 0 && ptr[0] === '#';
}
function pickDecoder(ptr) {
    return looksLikeFragment(ptr) ? decodeUriFragmentIdentifier : decodePointer;
}
function decodePtrInit(ptr) {
    return Array.isArray(ptr)
        ? ptr.slice(0)
        : pickDecoder(ptr)(ptr);
}

/**
 * Determines if the value is an object (not null)
 * @param value the value
 * @returns true if the value is a non-null object; otherwise false.
 *
 * @hidden
 */
function isObject(value) {
    return typeof value === 'object' && value !== null;
}
/** @hidden */
function shouldDescend(obj) {
    return isObject(obj) && !JsonReference.isReference(obj);
}
/** @hidden */
function descendingVisit(target, visitor, encoder) {
    const distinctObjects = new Map();
    const q = [{ obj: target, path: [] }];
    while (q.length) {
        const { obj, path } = q.shift();
        visitor(encoder(path), obj);
        if (shouldDescend(obj)) {
            distinctObjects.set(obj, new JsonPointer(encodeUriFragmentIdentifier(path)));
            if (!Array.isArray(obj)) {
                const keys = Object.keys(obj);
                const len = keys.length;
                let i = -1;
                while (++i < len) {
                    const it = obj[keys[i]];
                    if (isObject(it) && distinctObjects.has(it)) {
                        q.push({
                            obj: new JsonReference(distinctObjects.get(it)),
                            path: path.concat(keys[i]),
                        });
                    }
                    else {
                        q.push({
                            obj: it,
                            path: path.concat(keys[i]),
                        });
                    }
                }
            }
            else {
                // handleArray
                let j = -1;
                const len = obj.length;
                while (++j < len) {
                    const it = obj[j];
                    if (isObject(it) && distinctObjects.has(it)) {
                        q.push({
                            obj: new JsonReference(distinctObjects.get(it)),
                            path: path.concat([j + '']),
                        });
                    }
                    else {
                        q.push({
                            obj: it,
                            path: path.concat([j + '']),
                        });
                    }
                }
            }
        }
    }
}
/** @hidden */
const $ptr = Symbol('pointer');
/** @hidden */
const $frg = Symbol('fragmentId');
/** @hidden */
const $get = Symbol('getter');
/**
 * Represents a JSON Pointer, capable of getting and setting the value on target
 * objects at the pointer's location.
 *
 * While there are static variants for most operations, our recommendation is
 * to use the instance level methods, which enables you avoid repeated
 * compiling/emitting transient accessors. Take a look at the speed comparisons
 * for our justification.
 *
 * In most cases, you should create and reuse instances of JsonPointer within
 * scope that makes sense for your app. We often create constants for frequently
 * used pointers, but your use case may vary.
 *
 * The following is a contrived example showing a function that uses pointers to
 * deal with changes in the structure of data (a version independent function):
 *
 * ```ts
 * import { JsonPointer } from 'json-ptr';
 *
 * export type SupportedVersion = '1.0' | '1.1';
 *
 * interface PrimaryGuestNamePointers {
 *   name: JsonPointer;
 *   surname: JsonPointer;
 *   honorific: JsonPointer;
 * }
 * const versions: Record<SupportedVersion, PrimaryGuestNamePointers> = {
 *   '1.0': {
 *     name: JsonPointer.create('/guests/0/name'),
 *     surname: JsonPointer.create('/guests/0/surname'),
 *     honorific: JsonPointer.create('/guests/0/honorific'),
 *   },
 *   '1.1': {
 *     name: JsonPointer.create('/primary/primaryGuest/name'),
 *     surname: JsonPointer.create('/primary/primaryGuest/surname'),
 *     honorific: JsonPointer.create('/primary/primaryGuest/honorific'),
 *   }
 * };
 *
 * interface Reservation extends Record<string, unknown> {
 *   version?: SupportedVersion;
 * }
 *
 * function primaryGuestName(reservation: Reservation): string {
 *   const pointers = versions[reservation.version || '1.0'];
 *   const name = pointers.name.get(reservation) as string;
 *   const surname = pointers.surname.get(reservation) as string;
 *   const honorific = pointers.honorific.get(reservation) as string;
 *   const names: string[] = [];
 *   if (honorific) names.push(honorific);
 *   if (name) names.push(name);
 *   if (surname) names.push(surname);
 *   return names.join(' ');
 * }
 *
 * // The original layout of a reservation (only the parts relevant to our example)
 * const reservationV1: Reservation = {
 *   guests: [{
 *     name: 'Wilbur',
 *     surname: 'Finkle',
 *     honorific: 'Mr.'
 *   }, {
 *     name: 'Wanda',
 *     surname: 'Finkle',
 *     honorific: 'Mrs.'
 *   }, {
 *     name: 'Wilma',
 *     surname: 'Finkle',
 *     honorific: 'Miss',
 *     child: true,
 *     age: 12
 *   }]
 *   // ...
 * };
 *
 * // The new layout of a reservation (only the parts relevant to our example)
 * const reservationV1_1: Reservation = {
 *   version: '1.1',
 *   primary: {
 *     primaryGuest: {
 *       name: 'Wilbur',
 *       surname: 'Finkle',
 *       honorific: 'Mr.'
 *     },
 *     additionalGuests: [{
 *       name: 'Wanda',
 *       surname: 'Finkle',
 *       honorific: 'Mrs.'
 *     }, {
 *       name: 'Wilma',
 *       surname: 'Finkle',
 *       honorific: 'Miss',
 *       child: true,
 *       age: 12
 *     }]
 *     // ...
 *   }
 *   // ...
 * };
 *
 * console.log(primaryGuestName(reservationV1));
 * console.log(primaryGuestName(reservationV1_1));
 *
 * ```
 *
 * There are many uses for pointers.
 */
class JsonPointer {
    /**
     * Creates a new instance.
     * @param ptr a string representation of a JSON Pointer, or a decoded array of path segments.
     */
    constructor(ptr) {
        this.path = decodePtrInit(ptr);
    }
    /**
     * Factory function that creates a JsonPointer instance.
     *
     * ```ts
     * const ptr = JsonPointer.create('/deeply/nested/data/0/here');
     * ```
     * _or_
     * ```ts
     * const ptr = JsonPointer.create(['deeply', 'nested', 'data', 0, 'here']);
     * ```
     * @param pointer the pointer or path.
     */
    static create(pointer) {
        return new JsonPointer(pointer);
    }
    /**
     * Determines if the specified `target`'s object graph has a value at the `pointer`'s location.
     *
     * ```ts
     * const target = {
     *   first: 'second',
     *   third: ['fourth', 'fifth', { sixth: 'seventh' }],
     *   eighth: 'ninth'
     * };
     *
     * console.log(JsonPointer.has(target, '/third/0'));
     * // true
     * console.log(JsonPointer.has(target, '/tenth'));
     * // false
     * ```
     *
     * @param target the target of the operation
     * @param pointer the pointer or path
     */
    static has(target, pointer) {
        if (typeof pointer === 'string' || Array.isArray(pointer)) {
            pointer = new JsonPointer(pointer);
        }
        return pointer.has(target);
    }
    /**
     * Gets the `target` object's value at the `pointer`'s location.
     *
     * ```ts
     * const target = {
     *   first: 'second',
     *   third: ['fourth', 'fifth', { sixth: 'seventh' }],
     *   eighth: 'ninth'
     * };
     *
     * console.log(JsonPointer.get(target, '/third/2/sixth'));
     * // seventh
     * console.log(JsonPointer.get(target, '/tenth'));
     * // undefined
     * ```
     *
     * @param target the target of the operation
     * @param pointer the pointer or path.
     */
    static get(target, pointer) {
        if (typeof pointer === 'string' || Array.isArray(pointer)) {
            pointer = new JsonPointer(pointer);
        }
        return pointer.get(target);
    }
    /**
     * Sets the `target` object's value, as specified, at the `pointer`'s location.
     *
     * ```ts
     * const target = {
     *   first: 'second',
     *   third: ['fourth', 'fifth', { sixth: 'seventh' }],
     *   eighth: 'ninth'
     * };
     *
     * console.log(JsonPointer.set(target, '/third/2/sixth', 'tenth'));
     * // seventh
     * console.log(JsonPointer.set(target, '/tenth', 'eleventh', true));
     * // undefined
     * console.log(JSON.stringify(target, null, ' '));
     * // {
     * // "first": "second",
     * // "third": [
     * //  "fourth",
     * //  "fifth",
     * //  {
     * //   "sixth": "tenth"
     * //  }
     * // ],
     * // "eighth": "ninth",
     * // "tenth": "eleventh"
     * // }
     * ```
     *
     * @param target the target of the operation
     * @param pointer the pointer or path
     * @param val a value to write into the object graph at the specified pointer location
     * @param force indications whether the operation should force the pointer's location into existence in the object graph.
     *
     * @returns the prior value at the pointer's location in the object graph.
     */
    static set(target, pointer, val, force = false) {
        if (typeof pointer === 'string' || Array.isArray(pointer)) {
            pointer = new JsonPointer(pointer);
        }
        return pointer.set(target, val, force);
    }
    /**
     * Removes the `target` object's value at the `pointer`'s location.
     *
     * ```ts
     * const target = {
     *   first: 'second',
     *   third: ['fourth', 'fifth', { sixth: 'seventh' }],
     *   eighth: 'ninth'
     * };
     *
     * console.log(JsonPointer.unset(target, '/third/2/sixth'));
     * // seventh
     * console.log(JsonPointer.unset(target, '/tenth'));
     * // undefined
     * console.log(JSON.stringify(target, null, ' '));
     * // {
     * // "first": "second",
     * // "third": [
     * //  "fourth",
     * //  "fifth",
     * //  {}
     * // ],
     * // "eighth": "ninth",
     * // }
     * ```
     * @param target the target of the operation
     * @param pointer the pointer or path
     *
     * @returns the value that was removed from the object graph.
     */
    static unset(target, pointer) {
        if (typeof pointer === 'string' || Array.isArray(pointer)) {
            pointer = new JsonPointer(pointer);
        }
        return pointer.unset(target);
    }
    /**
     * Decodes the specified pointer into path segments.
     * @param pointer a string representation of a JSON Pointer
     */
    static decode(pointer) {
        return pickDecoder(pointer)(pointer);
    }
    /**
     * Evaluates the target's object graph, calling the specified visitor for every unique pointer location discovered while walking the graph.
     * @param target the target of the operation
     * @param visitor a callback function invoked for each unique pointer location in the object graph
     * @param fragmentId indicates whether the visitor should receive fragment identifiers or regular pointers
     */
    static visit(target, visitor, fragmentId = false) {
        descendingVisit(target, visitor, fragmentId ? encodeUriFragmentIdentifier : encodePointer);
    }
    /**
     * Evaluates the target's object graph, returning a [[JsonStringPointerListItem]] for each location in the graph.
     * @param target the target of the operation
     */
    static listPointers(target) {
        const res = [];
        descendingVisit(target, (pointer, value) => {
            res.push({ pointer, value });
        }, encodePointer);
        return res;
    }
    /**
     * Evaluates the target's object graph, returning a [[UriFragmentIdentifierPointerListItem]] for each location in the graph.
     * @param target the target of the operation
     */
    static listFragmentIds(target) {
        const res = [];
        descendingVisit(target, (fragmentId, value) => {
            res.push({ fragmentId, value });
        }, encodeUriFragmentIdentifier);
        return res;
    }
    /**
     * Evaluates the target's object graph, returning a Record&lt;Pointer, unknown> populated with pointers and the corresponding values from the graph.
     * @param target the target of the operation
     * @param fragmentId indicates whether the results are populated with fragment identifiers rather than regular pointers
     */
    static flatten(target, fragmentId = false) {
        const res = {};
        descendingVisit(target, (p, v) => {
            res[p] = v;
        }, fragmentId ? encodeUriFragmentIdentifier : encodePointer);
        return res;
    }
    /**
     * Evaluates the target's object graph, returning a Map&lt;Pointer,unknown>  populated with pointers and the corresponding values form the graph.
     * @param target the target of the operation
     * @param fragmentId indicates whether the results are populated with fragment identifiers rather than regular pointers
     */
    static map(target, fragmentId = false) {
        const res = new Map();
        descendingVisit(target, res.set.bind(res), fragmentId ? encodeUriFragmentIdentifier : encodePointer);
        return res;
    }
    /**
     * Gets the target object's value at the pointer's location.
     * @param target the target of the operation
     */
    get(target) {
        if (!this[$get]) {
            this[$get] = compilePointerDereference(this.path);
        }
        return this[$get](target);
    }
    /**
     * Sets the target object's value, as specified, at the pointer's location.
     *
     * If any part of the pointer's path does not exist, the operation aborts
     * without modification, unless the caller indicates that pointer's location
     * should be created.
     *
     * @param target the target of the operation
     * @param value the value to set
     * @param force indicates whether the pointer's location should be created if it doesn't already exist.
     */
    set(target, value, force = false) {
        return setValueAtPath(target, value, this.path, force);
    }
    /**
     * Removes the target object's value at the pointer's location.
     * @param target the target of the operation
     *
     * @returns the value that was removed from the object graph.
     */
    unset(target) {
        return unsetValueAtPath(target, this.path);
    }
    /**
     * Determines if the specified target's object graph has a value at the pointer's location.
     * @param target the target of the operation
     */
    has(target) {
        return typeof this.get(target) !== 'undefined';
    }
    /**
     * Gets the value in the object graph that is the parent of the pointer location.
     * @param target the target of the operation
     */
    parent(target) {
        const p = this.path;
        if (p.length == 1)
            return undefined;
        const parent = new JsonPointer(p.slice(0, p.length - 1));
        return parent.get(target);
    }
    /**
     * Creates a new JsonPointer instance, pointing to the specified relative location in the object graph.
     * @param ptr the relative pointer (relative to this)
     * @returns A new instance that points to the relative location.
     */
    relative(ptr) {
        const p = this.path;
        const decoded = decodeRelativePointer(ptr);
        const n = parseInt(decoded[0]);
        if (n > p.length)
            throw new Error('Relative location does not exist.');
        const r = p.slice(0, p.length - n).concat(decoded.slice(1));
        if (decoded[0][decoded[0].length - 1] == '#') {
            // It references the path segment/name, not the value
            const name = r[r.length - 1];
            throw new Error(`We won't compile a pointer that will always return '${name}'. Use JsonPointer.rel(target, ptr) instead.`);
        }
        return new JsonPointer(r);
    }
    /**
     * Resolves the specified relative pointer path against the specified target object, and gets the target object's value at the relative pointer's location.
     * @param target the target of the operation
     * @param ptr the relative pointer (relative to this)
     * @returns the value at the relative pointer's resolved path; otherwise undefined.
     */
    rel(target, ptr) {
        const p = this.path;
        const decoded = decodeRelativePointer(ptr);
        const n = parseInt(decoded[0]);
        if (n > p.length) {
            // out of bounds
            return undefined;
        }
        const r = p.slice(0, p.length - n).concat(decoded.slice(1));
        const other = new JsonPointer(r);
        if (decoded[0][decoded[0].length - 1] == '#') {
            // It references the path segment/name, not the value
            const name = r[r.length - 1];
            const parent = other.parent(target);
            return Array.isArray(parent) ? parseInt(name, 10) : name;
        }
        return other.get(target);
    }
    /**
     * Creates a new instance by concatenating the specified pointer's path onto this pointer's path.
     * @param ptr the string representation of a pointer, it's decoded path, or an instance of JsonPointer indicating the additional path to concatenate onto the pointer.
     */
    concat(ptr) {
        return new JsonPointer(this.path.concat(ptr instanceof JsonPointer ? ptr.path : decodePtrInit(ptr)));
    }
    /**
     * This pointer's JSON Pointer encoded string representation.
     */
    get pointer() {
        if (this[$ptr] === undefined) {
            this[$ptr] = encodePointer(this.path);
        }
        return this[$ptr];
    }
    /**
     * This pointer's URI fragment identifier encoded string representation.
     */
    get uriFragmentIdentifier() {
        if (!this[$frg]) {
            this[$frg] = encodeUriFragmentIdentifier(this.path);
        }
        return this[$frg];
    }
    /**
     * Emits the JSON Pointer encoded string representation.
     */
    toString() {
        return this.pointer;
    }
}
/** @hidden */
const $pointer = Symbol('pointer');
/**
 * A reference to a location in an object graph.
 *
 * This type is used by this module to break cycles in an object graph and to
 * reference locations that have already been visited when enumerating pointers.
 */
class JsonReference {
    /**
     * Creates a new instance.
     * @param pointer a JSON Pointer for the reference.
     */
    constructor(pointer) {
        this[$pointer] =
            pointer instanceof JsonPointer ? pointer : new JsonPointer(pointer);
        this.$ref = this[$pointer].uriFragmentIdentifier;
    }
    /**
     * Determines if the specified `candidate` is a JsonReference.
     * @param candidate the candidate
     */
    static isReference(candidate) {
        if (!candidate)
            return false;
        const ref = candidate;
        return typeof ref.$ref === 'string' && typeof ref.resolve === 'function';
    }
    /**
     * Resolves the reference against the `target` object, returning the value at
     * the referenced pointer's location.
     * @param target the target object
     */
    resolve(target) {
        return this[$pointer].get(target);
    }
    /**
     * Gets the reference's pointer.
     */
    pointer() {
        return this[$pointer];
    }
    /**
     * Gets the reference pointer's string representation (a URI fragment identifier).
     */
    toString() {
        return this.$ref;
    }
}

class gltfAnimation extends GltfObject
{
    static animatedProperties = [];
    constructor()
    {
        super();
        this.channels = [];
        this.samplers = [];
        this.name = '';

        // not gltf
        this.interpolators = [];
        this.maxTime = 0;
        this.disjointAnimations = [];

        this.errors = [];
    }

    fromJson(jsonAnimation)
    {
        super.fromJson(jsonAnimation);

        this.channels = objectsFromJsons(jsonAnimation.channels, gltfAnimationChannel);
        this.samplers = objectsFromJsons(jsonAnimation.samplers, gltfAnimationSampler);
        this.name = jsonAnimation.name;

        if(this.channels === undefined)
        {
            console.error("No channel data found for skin");
            return;
        }

        for(let i = 0; i < this.channels.length; ++i)
        {
            this.interpolators.push(new gltfInterpolator());
        }
    }

    // advance the animation, if totalTime is undefined, the animation is deactivated
    advance(gltf, totalTime)
    {
        if(this.channels === undefined)
        {
            return;
        }

        if(this.maxTime == 0)
        {
            for(let i = 0; i < this.channels.length; ++i)
            {
                const channel = this.channels[i];
                const sampler = this.samplers[channel.sampler];
                const input = gltf.accessors[sampler.input].getDeinterlacedView(gltf);
                const max = input[input.length - 1];
                if(max > this.maxTime)
                {
                    this.maxTime = max;
                }
            }
        }

        for(let i = 0; i < this.interpolators.length; ++i)
        {
            const channel = this.channels[i];
            const sampler = this.samplers[channel.sampler];
            const interpolator = this.interpolators[i];

            let property = null;
            switch(channel.target.path)
            {
            case InterpolationPath.TRANSLATION:
                property = `/nodes/${channel.target.node}/translation`;
                break;
            case InterpolationPath.ROTATION:
                property = `/nodes/${channel.target.node}/rotation`;
                break;
            case InterpolationPath.SCALE:
                property = `/nodes/${channel.target.node}/scale`;
                break;
            case InterpolationPath.WEIGHTS:
                if (gltf.nodes[channel.target.node].weights !== undefined) {
                    property = `/nodes/${channel.target.node}/weights`;
                } else {
                    property = `/meshes/${gltf.nodes[channel.target.node].mesh}/weights`;
                }
                break;
            case InterpolationPath.POINTER:
                property = channel.target.extensions.KHR_animation_pointer.pointer;
                break;
            }

            if (property != null) {
                if (property.startsWith("/extensions/KHR_lights_punctual/")) {
                    const suffix = property.substring("/extensions/KHR_lights_punctual/".length);
                    property = "/" + suffix;
                }
                let jsonPointer = JsonPointer.create(property);
                let parentObject = jsonPointer.parent(gltf);
                let back = jsonPointer.path.at(-1);
                let animatedArrayElement = undefined;
                if (Array.isArray(parentObject)) {
                    animatedArrayElement = Number(back);
                    jsonPointer = JsonPointer.create(jsonPointer.path.slice(0, -1));
                    parentObject = jsonPointer.parent(gltf);
                    back = jsonPointer.path.at(-1);
                }
                let animatedProperty = undefined;
                if (parentObject.animatedPropertyObjects && back in parentObject.animatedPropertyObjects) {
                    animatedProperty = parentObject.animatedPropertyObjects[back];
                }
                if (animatedProperty === undefined || !(animatedProperty instanceof AnimatableProperty)) {
                    if (!this.errors.includes(property)) {
                        console.warn(`Cannot animate ${property}`);
                        this.errors.push(property);
                    }
                    continue;
                }
                if (animatedProperty.restValue === undefined) {
                    continue;
                }

                let stride = animatedProperty.restValue?.length ?? 1;
                if (animatedArrayElement !== undefined) {
                    stride = animatedProperty.restValue[animatedArrayElement]?.length ?? 1;
                }
                
                const interpolant = interpolator.interpolate(gltf, channel, sampler, totalTime, stride, this.maxTime);
                if (interpolant === undefined) {
                    animatedProperty.rest();
                    continue;
                }
                // The interpolator will always return a `Float32Array`, even if the animated value is a scalar.
                // For the renderer it's not a problem because uploading a single-element array is the same as uploading a scalar to a uniform.
                // However, it becomes a problem if we use the animated value for further computation and assume is stays a scalar.
                // Thus we explicitly convert the animated value back to a scalar if the interpolant is a single-element array.
                if (animatedArrayElement !== undefined) {
                    const array = animatedProperty.value();
                    if (interpolant.length == 1) {
                        array[animatedArrayElement] = interpolant[0];
                    }
                    else {
                        array[animatedArrayElement] = interpolant;
                    }
                    animatedProperty.animate(array);
                } else {
                    if (interpolant.length == 1) {
                        animatedProperty.animate(interpolant[0]);
                    }
                    else {
                        animatedProperty.animate(interpolant);
                    }
                }
            }
        }
    }
}

class gltfSkin extends GltfObject
{
    static animatedProperties = [];
    constructor()
    {
        super();

        this.name = "";
        this.inverseBindMatrices = undefined;
        this.joints = [];
        this.skeleton = undefined;

        // not gltf
        this.jointTextureInfo = undefined;
        this.jointWebGlTexture = undefined;
    }

    initGl(gltf, webGlContext)
    {
        this.jointWebGlTexture = webGlContext.createTexture();
        webGlContext.bindTexture( webGlContext.TEXTURE_2D, this.jointWebGlTexture);

        // Ensure mipmapping is disabled and the sampler is configured correctly.
        webGlContext.texParameteri( GL.TEXTURE_2D,  GL.TEXTURE_WRAP_S,  GL.CLAMP_TO_EDGE);
        webGlContext.texParameteri( GL.TEXTURE_2D,  GL.TEXTURE_WRAP_T,  GL.CLAMP_TO_EDGE);
        webGlContext.texParameteri( GL.TEXTURE_2D,  GL.TEXTURE_WRAP_R,  GL.CLAMP_TO_EDGE);
        webGlContext.texParameteri( GL.TEXTURE_2D,  GL.TEXTURE_MIN_FILTER,  GL.NEAREST);
        webGlContext.texParameteri( GL.TEXTURE_2D,  GL.TEXTURE_MAG_FILTER,  GL.NEAREST);
        
        // Now we add the joints texture as a gltf texture info resource, so that 
        // we can just call webGl.setTexture(..., gltfTextureInfo, ...) in the renderer.
        const jointsImage = new gltfImage(
            undefined, // uri
            GL.TEXTURE_2D, // type
            0, // mip level
            undefined, // buffer view
            undefined, // name
            ImageMimeType.GLTEXTURE, // mimeType
            this.jointWebGlTexture // image
        );
        gltf.images.push(jointsImage);

        gltf.samplers.push(new gltfSampler(GL.NEAREST, GL.NEAREST, GL.CLAMP_TO_EDGE, GL.CLAMP_TO_EDGE, undefined));

        const jointsTexture = new gltfTexture(
            gltf.samplers.length - 1,
            gltf.images.length - 1,
            GL.TEXTURE_2D);
        // The webgl texture is already initialized -> this flag informs
        // webgl.setTexture about this.
        jointsTexture.initialized = true;

        gltf.textures.push(jointsTexture);

        this.jointTextureInfo = new gltfTextureInfo(gltf.textures.length - 1, 0, true);
        this.jointTextureInfo.samplerName = "u_jointsSampler";
        this.jointTextureInfo.generateMips = false;
    }

    computeJoints(gltf, parentNode, webGlContext)
    {
        let ibmAccessor = null;
        if (this.inverseBindMatrices !== undefined) {
            ibmAccessor = gltf.accessors[this.inverseBindMatrices].getDeinterlacedView(gltf);
        }

        this.jointMatrices = [];
        this.jointNormalMatrices = [];

        const width = Math.ceil(Math.sqrt(this.joints.length * 8));
        let textureData = new Float32Array(Math.pow(width, 2) * 4);

        let i = 0;
        for(const joint of this.joints)
        {
            const node = gltf.nodes[joint];

            let jointMatrix = clone$1(node.worldTransform);

            if (ibmAccessor !== null) {
                let ibm = jsToGlSlice(ibmAccessor, i * 16, 16);
                mul(jointMatrix, jointMatrix, ibm);
                mul(jointMatrix, parentNode.inverseWorldTransform, jointMatrix);
            }

            let normalMatrix = create$3();
            invert(normalMatrix, jointMatrix);
            transpose(normalMatrix, normalMatrix);
            
            textureData.set(jointMatrix, i * 32);
            textureData.set(normalMatrix, i * 32 + 16);
            ++i;
        }

        webGlContext.bindTexture( webGlContext.TEXTURE_2D, this.jointWebGlTexture);
        // Set texture format and upload data.
        let internalFormat = webGlContext.RGBA32F;
        let format = webGlContext.RGBA;
        let type = webGlContext.FLOAT;
        let data = textureData;
        webGlContext.texImage2D(
            webGlContext.TEXTURE_2D,
            0, //level
            internalFormat,
            width,
            width,
            0, //border
            format,
            type,
            data);
    }
}

class gltfVariant extends GltfObject
{
    static animatedProperties = [];
    constructor()
    {
        super();
        this.name = undefined;
    }

    fromJson(jsonVariant)
    {
        if(jsonVariant.name !== undefined)
        {
            this.name = jsonVariant.name;
        }
    }
}

const allowedExtensions = [
    "KHR_animation_pointer",
    "KHR_draco_mesh_compression",
    "KHR_lights_image_based",
    "KHR_lights_punctual",
    "KHR_materials_anisotropy",
    "KHR_materials_clearcoat",
    "KHR_materials_dispersion",
    "KHR_materials_emissive_strength",
    "KHR_materials_ior",
    "KHR_materials_iridescence",
    "KHR_materials_pbrSpecularGlossiness",
    "KHR_materials_sheen",
    "KHR_materials_specular",
    "KHR_materials_transmission",
    "KHR_materials_unlit",
    "KHR_materials_variants",
    "KHR_materials_volume",
    "KHR_mesh_quantization",
    "KHR_texture_basisu",
    "KHR_texture_transform",
    "KHR_xmp_json_ld",
    "EXT_texture_webp",
];

class glTF extends GltfObject
{
    static animatedProperties = [];
    constructor(file)
    {
        super();
        this.asset = undefined;
        this.accessors = [];
        this.nodes = [];
        this.scene = undefined; // the default scene to show.
        this.scenes = [];
        this.cameras = [];
        this.lights = [];
        this.imageBasedLights = [];
        this.textures = [];
        this.images = [];
        this.samplers = [];
        this.meshes = [];
        this.buffers = [];
        this.bufferViews = [];
        this.materials = [];
        this.animations = [];
        this.skins = [];
        this.path = file;
    }

    initGl(webGlContext)
    {
        initGlForMembers(this, this, webGlContext);
    }

    fromJson(json)
    {
        super.fromJson(json);

        for (const extensionName of json.extensionsRequired ?? []) {
            if (!allowedExtensions.includes(extensionName)) {
                throw new Error("Unsupported extension: " + extensionName);
            }
        }

        this.asset = objectFromJson(json.asset, gltfAsset);
        this.cameras = objectsFromJsons(json.cameras, gltfCamera);
        this.accessors = objectsFromJsons(json.accessors, gltfAccessor);
        this.meshes = objectsFromJsons(json.meshes, gltfMesh);
        this.samplers = objectsFromJsons(json.samplers, gltfSampler);
        this.materials = objectsFromJsons(json.materials, gltfMaterial);
        this.buffers = objectsFromJsons(json.buffers, gltfBuffer);
        this.bufferViews = objectsFromJsons(json.bufferViews, gltfBufferView);
        this.scenes = objectsFromJsons(json.scenes, gltfScene);
        this.textures = objectsFromJsons(json.textures, gltfTexture);
        this.nodes = objectsFromJsons(json.nodes, gltfNode);
        this.lights = objectsFromJsons(getJsonLightsFromExtensions(json.extensions), gltfLight);
        this.imageBasedLights = objectsFromJsons(getJsonIBLsFromExtensions(json.extensions), ImageBasedLight);
        this.images = objectsFromJsons(json.images, gltfImage);
        this.animations = objectsFromJsons(json.animations, gltfAnimation);
        this.skins = objectsFromJsons(json.skins, gltfSkin);
        this.variants = objectsFromJsons(getJsonVariantsFromExtension(json.extensions), gltfVariant);
        this.variants = enforceVariantsUniqueness(this.variants);

        this.materials.push(gltfMaterial.createDefault());
        this.samplers.push(gltfSampler.createDefault());

        if (json.scenes !== undefined)
        {
            if (json.scene === undefined && json.scenes.length > 0)
            {
                this.scene = 0;
            }
            else
            {
                this.scene = json.scene;
            }
        }

        this.computeDisjointAnimations();
    }

    // Computes indices of animations which are disjoint and can be played simultaneously.
    computeDisjointAnimations()
    {
        for (let i = 0; i < this.animations.length; i++)
        {
            this.animations[i].disjointAnimations = [];

            for (let k = 0; k < this.animations.length; k++)
            {
                if (i == k)
                {
                    continue;
                }

                let isDisjoint = true;
                for (const iChannel of this.animations[i].channels)
                {
                    const getAnimationProperty = function (channel, nodes){ 
                     
                        let property = null;
                        switch(channel.target.path)
                        {
                        case "translation":
                            property = `/nodes/${channel.target.node}/translation`;
                            break;
                        case "rotation":
                            property = `/nodes/${channel.target.node}/rotation`;
                            break;
                        case "scale":
                            property = `/nodes/${channel.target.node}/scale`;
                            break;
                        case "weights":
                            if (nodes[channel.target.node].weights !== undefined) {
                                property = `/nodes/${channel.target.node}/weights`;
                            } else {
                                property = `/meshes/${nodes[channel.target.node].mesh}/weights`;
                            }
                            break;
                        case "pointer":
                            property = channel.target.extensions.KHR_animation_pointer.pointer;
                            break;
                        }
                        return property;
                    };
                    const iProperty = getAnimationProperty(iChannel, this.nodes);
                    for (const kChannel of this.animations[k].channels)
                    {
                        const kProperty = getAnimationProperty(kChannel, this.nodes);
                        if (iProperty === kProperty)
                        {
                            isDisjoint = false;
                            break;
                        }
                    }
                }

                if (isDisjoint)
                {
                    this.animations[i].disjointAnimations.push(k);
                }
            }
        }
    }

    nonDisjointAnimations(animationIndices)
    {
        const animations = this.animations;
        const nonDisjointAnimations = [];

        for (let i = 0; i < animations.length; i++)
        {
            let isDisjoint = true;
            for (const k of animationIndices)
            {
                if (i == k)
                {
                    continue;
                }

                if (!animations[k].disjointAnimations.includes(i))
                {
                    isDisjoint = false;
                }
            }

            if (!isDisjoint)
            {
                nonDisjointAnimations.push(i);
            }
        }

        return nonDisjointAnimations;
    }
}

function getJsonLightsFromExtensions(extensions)
{
    if (extensions === undefined)
    {
        return [];
    }
    if (extensions.KHR_lights_punctual === undefined)
    {
        return [];
    }
    return extensions.KHR_lights_punctual.lights;
}

function getJsonIBLsFromExtensions(extensions)
{
    if (extensions === undefined)
    {
        return [];
    }
    if (extensions.KHR_lights_image_based === undefined)
    {
        return [];
    }
    return extensions.KHR_lights_image_based.imageBasedLights;
}

function getJsonVariantsFromExtension(extensions)
{
    if (extensions === undefined)
    {
        return [];
    }
    if (extensions.KHR_materials_variants === undefined)
    {
        return [];
    }
    return extensions.KHR_materials_variants.variants;
}

function enforceVariantsUniqueness(variants)
{
    for(let i=0;i<variants.length;i++)
    {
        const name = variants[i].name;
        for(let j=i+1;j<variants.length;j++)
        {
            if(variants[j].name == name)
            {
                variants[j].name += "0";  // Add random character to duplicates
            }
        }
    }


    return variants;
}

class GlbParser
{
    constructor(data)
    {
        this.data = data;
        this.glbHeaderInts = 3;
        this.glbChunkHeaderInts = 2;
        this.glbMagic = 0x46546C67;
        this.glbVersion = 2;
        this.jsonChunkType = 0x4E4F534A;
        this.binaryChunkType = 0x004E4942;
    }

    extractGlbData()
    {
        const glbInfo = this.getCheckedGlbInfo();
        if (glbInfo === undefined)
        {
            return undefined;
        }

        let json = undefined;
        let buffers = [];
        const chunkInfos = this.getAllChunkInfos();
        for (let chunkInfo of chunkInfos)
        {
            if (chunkInfo.type == this.jsonChunkType && !json)
            {
                json = this.getJsonFromChunk(chunkInfo);
            }
            else if (chunkInfo.type == this.binaryChunkType)
            {
                buffers.push(this.getBufferFromChunk(chunkInfo));
            }
        }

        return { json: json, buffers: buffers };
    }

    getCheckedGlbInfo()
    {
        const header = new Uint32Array(this.data, 0, this.glbHeaderInts);
        const magic = header[0];
        const version = header[1];
        const length = header[2];

        if (!this.checkEquality(magic, this.glbMagic, "glb magic") ||
            !this.checkEquality(version, this.glbVersion, "glb header version") ||
            !this.checkEquality(length, this.data.byteLength, "glb byte length"))
        {
            return undefined;
        }

        return { "magic": magic, "version": version, "length": length };
    }

    getAllChunkInfos()
    {
        let infos = [];
        let chunkStart = this.glbHeaderInts * 4;
        while (chunkStart < this.data.byteLength)
        {
            const chunkInfo = this.getChunkInfo(chunkStart);
            infos.push(chunkInfo);
            chunkStart += chunkInfo.length + this.glbChunkHeaderInts * 4;
        }
        return infos;
    }

    getChunkInfo(headerStart)
    {
        const header = new Uint32Array(this.data, headerStart, this.glbChunkHeaderInts);
        const chunkStart = headerStart + this.glbChunkHeaderInts * 4;
        const chunkLength = header[0];
        const chunkType = header[1];
        return { "start": chunkStart, "length": chunkLength, "type": chunkType };
    }

    getJsonFromChunk(chunkInfo)
    {
        const chunkLength = chunkInfo.length;
        const jsonStart = (this.glbHeaderInts + this.glbChunkHeaderInts) * 4;
        const jsonSlice = new Uint8Array(this.data, jsonStart, chunkLength);
        const stringBuffer = new TextDecoder("utf-8").decode(jsonSlice);
        return JSON.parse(stringBuffer);
    }

    getBufferFromChunk(chunkInfo)
    {
        return this.data.slice(chunkInfo.start, chunkInfo.start + chunkInfo.length);
    }

    checkEquality(actual, expected, name)
    {
        if (actual == expected)
        {
            return true;
        }

        console.error("Found invalid/unsupported " + name + ", expected: " + expected + ", but was: " + actual);
        return false;
    }
}

class gltfLoader
{
    static async load(gltf, webGlContext, appendix = undefined)
    {
        const buffers = gltfLoader.getBuffers(appendix);
        const additionalFiles = gltfLoader.getAdditionalFiles(appendix);

        const buffersPromise = gltfLoader.loadBuffers(gltf, buffers, additionalFiles);

        await buffersPromise; // images might be stored in the buffers
        const imagesPromise = gltfLoader.loadImages(gltf, additionalFiles);

        return await Promise.all([buffersPromise, imagesPromise])
            .then(() => gltf.initGl(webGlContext));
    }

    static unload(gltf)
    {
        for (let image of gltf.images)
        {
            image.image = undefined;
        }
        gltf.images = [];

        for (let texture of gltf.textures)
        {
            texture.destroy();
        }
        gltf.textures = [];

        for (let accessor of gltf.accessors)
        {
            accessor.destroy();
        }
        gltf.accessors = [];
    }

    static getBuffers(appendix)
    {
        return gltfLoader.getTypedAppendix(appendix, ArrayBuffer);
    }

    static getAdditionalFiles(appendix)
    {
        if(typeof(File) !== 'undefined')
        {
            return gltfLoader.getTypedAppendix(appendix, File);
        }
        else
        {
            return;
        }
    }

    static getTypedAppendix(appendix, Type)
    {
        if (appendix && appendix.length > 0)
        {
            if (appendix[0] instanceof Type || appendix[0][1] instanceof Type)
            {
                return appendix;
            }
        }
    }

    static loadBuffers(gltf, buffers, additionalFiles)
    {
        const promises = [];

        if (buffers !== undefined && buffers[0] !== undefined) //GLB
        {
            //There is only one buffer for the glb binary data 
            //see https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#glb-file-format-specification
            if (buffers.length > 1)
            {
                console.warn("Too many buffer chunks in GLB file. Only one or zero allowed");
            }

            gltf.buffers[0].buffer = buffers[0];
            for (let i = 1; i < gltf.buffers.length; ++i)
            {
                promises.push(gltf.buffers[i].load(gltf, additionalFiles));
            }
        }
        else
        {
            for (const buffer of gltf.buffers)
            {
                promises.push(buffer.load(gltf, additionalFiles));
            }
        }
        return Promise.all(promises);
    }

    static loadImages(gltf, additionalFiles)
    {
        const imagePromises = [];
        for (let image of gltf.images)
        {
            imagePromises.push(image.load(gltf, additionalFiles));
        }
        return Promise.all(imagePromises);
    }
}

var iblFiltering = "precision mediump float;\n#define GLSLIFY 1\n#define MATH_PI 3.1415926535897932384626433832795\nuniform samplerCube uCubeMap;const int cLambertian=0;const int cGGX=1;const int cCharlie=2;uniform float u_roughness;uniform int u_sampleCount;uniform int u_width;uniform float u_lodBias;uniform int u_distribution;uniform int u_currentFace;uniform int u_isGeneratingLUT;uniform int u_floatTexture;uniform float u_intensityScale;in vec2 texCoord;out vec4 fragmentColor;vec3 uvToXYZ(int face,vec2 uv){if(face==0)return vec3(1.f,uv.y,-uv.x);else if(face==1)return vec3(-1.f,uv.y,uv.x);else if(face==2)return vec3(+uv.x,-1.f,+uv.y);else if(face==3)return vec3(+uv.x,1.f,-uv.y);else if(face==4)return vec3(+uv.x,uv.y,1.f);else{return vec3(-uv.x,+uv.y,-1.f);}}vec2 dirToUV(vec3 dir){return vec2(0.5f+0.5f*atan(dir.z,dir.x)/MATH_PI,1.f-acos(dir.y)/MATH_PI);}float saturate(float v){return clamp(v,0.0f,1.0f);}float radicalInverse_VdC(uint bits){bits=(bits<<16u)|(bits>>16u);bits=((bits&0x55555555u)<<1u)|((bits&0xAAAAAAAAu)>>1u);bits=((bits&0x33333333u)<<2u)|((bits&0xCCCCCCCCu)>>2u);bits=((bits&0x0F0F0F0Fu)<<4u)|((bits&0xF0F0F0F0u)>>4u);bits=((bits&0x00FF00FFu)<<8u)|((bits&0xFF00FF00u)>>8u);return float(bits)*2.3283064365386963e-10;}vec2 hammersley2d(int i,int N){return vec2(float(i)/float(N),radicalInverse_VdC(uint(i)));}mat3 generateTBN(vec3 normal){vec3 bitangent=vec3(0.0,1.0,0.0);float NdotUp=dot(normal,vec3(0.0,1.0,0.0));float epsilon=0.0000001;if(1.0-abs(NdotUp)<=epsilon){if(NdotUp>0.0){bitangent=vec3(0.0,0.0,1.0);}else{bitangent=vec3(0.0,0.0,-1.0);}}vec3 tangent=normalize(cross(bitangent,normal));bitangent=cross(normal,tangent);return mat3(tangent,bitangent,normal);}struct MicrofacetDistributionSample{float pdf;float cosTheta;float sinTheta;float phi;};float D_GGX(float NdotH,float roughness){float a=NdotH*roughness;float k=roughness/(1.0-NdotH*NdotH+a*a);return k*k*(1.0/MATH_PI);}MicrofacetDistributionSample GGX(vec2 xi,float roughness){MicrofacetDistributionSample ggx;float alpha=roughness*roughness;ggx.cosTheta=saturate(sqrt((1.0-xi.y)/(1.0+(alpha*alpha-1.0)*xi.y)));ggx.sinTheta=sqrt(1.0-ggx.cosTheta*ggx.cosTheta);ggx.phi=2.0*MATH_PI*xi.x;ggx.pdf=D_GGX(ggx.cosTheta,alpha);ggx.pdf/=4.0;return ggx;}float D_Ashikhmin(float NdotH,float roughness){float alpha=roughness*roughness;float a2=alpha*alpha;float cos2h=NdotH*NdotH;float sin2h=1.0-cos2h;float sin4h=sin2h*sin2h;float cot2=-cos2h/(a2*sin2h);return 1.0/(MATH_PI*(4.0*a2+1.0)*sin4h)*(4.0*exp(cot2)+sin4h);}float D_Charlie(float sheenRoughness,float NdotH){sheenRoughness=max(sheenRoughness,0.000001);float invR=1.0/sheenRoughness;float cos2h=NdotH*NdotH;float sin2h=1.0-cos2h;return(2.0+invR)*pow(sin2h,invR*0.5)/(2.0*MATH_PI);}MicrofacetDistributionSample Charlie(vec2 xi,float roughness){MicrofacetDistributionSample charlie;float alpha=roughness*roughness;charlie.sinTheta=pow(xi.y,alpha/(2.0*alpha+1.0));charlie.cosTheta=sqrt(1.0-charlie.sinTheta*charlie.sinTheta);charlie.phi=2.0*MATH_PI*xi.x;charlie.pdf=D_Charlie(alpha,charlie.cosTheta);charlie.pdf/=4.0;return charlie;}MicrofacetDistributionSample Lambertian(vec2 xi,float roughness){MicrofacetDistributionSample lambertian;lambertian.cosTheta=sqrt(1.0-xi.y);lambertian.sinTheta=sqrt(xi.y);lambertian.phi=2.0*MATH_PI*xi.x;lambertian.pdf=lambertian.cosTheta/MATH_PI;return lambertian;}vec4 getImportanceSample(int sampleIndex,vec3 N,float roughness){vec2 xi=hammersley2d(sampleIndex,u_sampleCount);MicrofacetDistributionSample importanceSample;if(u_distribution==cLambertian){importanceSample=Lambertian(xi,roughness);}else if(u_distribution==cGGX){importanceSample=GGX(xi,roughness);}else if(u_distribution==cCharlie){importanceSample=Charlie(xi,roughness);}vec3 localSpaceDirection=normalize(vec3(importanceSample.sinTheta*cos(importanceSample.phi),importanceSample.sinTheta*sin(importanceSample.phi),importanceSample.cosTheta));mat3 TBN=generateTBN(N);vec3 direction=TBN*localSpaceDirection;return vec4(direction,importanceSample.pdf);}float computeLod(float pdf){float lod=0.5*log2(6.0*float(u_width)*float(u_width)/(float(u_sampleCount)*pdf));return lod;}vec3 filterColor(vec3 N){vec3 color=vec3(0.f);float weight=0.0f;for(int i=0;i<u_sampleCount;++i){vec4 importanceSample=getImportanceSample(i,N,u_roughness);vec3 H=vec3(importanceSample.xyz);float pdf=importanceSample.w;float lod=computeLod(pdf);lod+=u_lodBias;if(u_distribution==cLambertian){vec3 lambertian=textureLod(uCubeMap,H,lod).rgb*u_intensityScale;color+=lambertian;}else if(u_distribution==cGGX||u_distribution==cCharlie){vec3 V=N;vec3 L=normalize(reflect(-V,H));float NdotL=dot(N,L);if(NdotL>0.0){if(u_roughness==0.0){lod=u_lodBias;}vec3 sampleColor=textureLod(uCubeMap,L,lod).rgb*u_intensityScale;color+=sampleColor*NdotL;weight+=NdotL;}}}if(weight!=0.0f){color/=weight;}else{color/=float(u_sampleCount);}return color.rgb;}float V_SmithGGXCorrelated(float NoV,float NoL,float roughness){float a2=pow(roughness,4.0);float GGXV=NoL*sqrt(NoV*NoV*(1.0-a2)+a2);float GGXL=NoV*sqrt(NoL*NoL*(1.0-a2)+a2);return 0.5/(GGXV+GGXL);}float V_Ashikhmin(float NdotL,float NdotV){return clamp(1.0/(4.0*(NdotL+NdotV-NdotL*NdotV)),0.0,1.0);}vec3 LUT(float NdotV,float roughness){vec3 V=vec3(sqrt(1.0-NdotV*NdotV),0.0,NdotV);vec3 N=vec3(0.0,0.0,1.0);float A=0.0;float B=0.0;float C=0.0;for(int i=0;i<u_sampleCount;++i){vec4 importanceSample=getImportanceSample(i,N,roughness);vec3 H=importanceSample.xyz;vec3 L=normalize(reflect(-V,H));float NdotL=saturate(L.z);float NdotH=saturate(H.z);float VdotH=saturate(dot(V,H));if(NdotL>0.0){if(u_distribution==cGGX){float V_pdf=V_SmithGGXCorrelated(NdotV,NdotL,roughness)*VdotH*NdotL/NdotH;float Fc=pow(1.0-VdotH,5.0);A+=(1.0-Fc)*V_pdf;B+=Fc*V_pdf;C+=0.0;}if(u_distribution==cCharlie){float sheenDistribution=D_Charlie(roughness,NdotH);float sheenVisibility=V_Ashikhmin(NdotL,NdotV);A+=0.0;B+=0.0;C+=sheenVisibility*sheenDistribution*NdotL*VdotH;}}}return vec3(4.0*A,4.0*B,4.0*2.0*MATH_PI*C)/float(u_sampleCount);}void main(){vec3 color=vec3(0);if(u_isGeneratingLUT==0){vec2 newUV=texCoord;newUV=newUV*2.0-1.0;vec3 scan=uvToXYZ(u_currentFace,newUV);vec3 direction=normalize(scan);direction.y=-direction.y;color=filterColor(direction);}else{color=LUT(texCoord.x,texCoord.y);fragmentColor.rgb=color;fragmentColor.a=1.0;return;}fragmentColor.a=1.0;if(u_floatTexture==0){float maxV=max(max(color.r,color.g),color.b);color/=u_intensityScale;color=clamp(color,0.0f,1.0f);}fragmentColor.rgb=color;}"; // eslint-disable-line

var panoramaToCubeMap = "#define MATH_PI 3.1415926535897932384626433832795\n#define MATH_INV_PI (1.0 / MATH_PI)\nprecision highp float;\n#define GLSLIFY 1\nin vec2 texCoord;out vec4 fragmentColor;uniform int u_currentFace;uniform sampler2D u_inputTexture;uniform sampler2D u_panorama;vec3 uvToXYZ(int face,vec2 uv){if(face==0)return vec3(1.f,uv.y,-uv.x);else if(face==1)return vec3(-1.f,uv.y,uv.x);else if(face==2)return vec3(+uv.x,-1.f,+uv.y);else if(face==3)return vec3(+uv.x,1.f,-uv.y);else if(face==4)return vec3(+uv.x,uv.y,1.f);else{return vec3(-uv.x,+uv.y,-1.f);}}vec2 dirToUV(vec3 dir){return vec2(0.5f+0.5f*atan(dir.z,dir.x)/MATH_PI,1.f-acos(dir.y)/MATH_PI);}vec3 panoramaToCubeMap(int face,vec2 texCoord){vec2 texCoordNew=texCoord*2.0-1.0;vec3 scan=uvToXYZ(face,texCoordNew);vec3 direction=normalize(scan);vec2 src=dirToUV(direction);return texture(u_panorama,src).rgb;}void main(void){fragmentColor=vec4(0.0,0.0,0.0,1.0);fragmentColor.rgb=panoramaToCubeMap(u_currentFace,texCoord);}"; // eslint-disable-line

var debugOutput = "precision highp float;\n#define GLSLIFY 1\nin vec2 texCoord;out vec4 fragmentColor;uniform int u_currentFace;uniform samplerCube u_inputTexture;vec3 uvToXYZ(int face,vec2 uv){if(face==0)return vec3(1.f,uv.y,-uv.x);else if(face==1)return vec3(-1.f,uv.y,uv.x);else if(face==2)return vec3(+uv.x,-1.f,+uv.y);else if(face==3)return vec3(+uv.x,1.f,-uv.y);else if(face==4)return vec3(+uv.x,uv.y,1.f);else{return vec3(-uv.x,+uv.y,-1.f);}}void main(void){fragmentColor=vec4(texCoord.x*10.0,0.0,texCoord.y*10.0,1.0);vec2 newUV=texCoord;newUV=newUV*2.0-1.0;vec4 textureColor=vec4(0.0,0.0,0.0,1.0);vec3 direction=normalize(uvToXYZ(u_currentFace,newUV.xy));textureColor=textureLod(u_inputTexture,direction,1.0);if(texCoord.x>0.1){fragmentColor=textureColor;}if(texCoord.y>0.1){fragmentColor=textureColor;}}"; // eslint-disable-line

var fullscreenShader = "precision highp float;\n#define GLSLIFY 1\nout vec2 texCoord;void main(void){float x=float((gl_VertexID&1)<<2);float y=float((gl_VertexID&2)<<1);texCoord.x=x*0.5;texCoord.y=y*0.5;gl_Position=vec4(x-1.0,y-1.0,0,1);}"; // eslint-disable-line

class iblSampler
{
    constructor(view)
    {
        this.gl = view.context;

        this.textureSize = 256;
        this.ggxSampleCount = 1024;
        this.lambertianSampleCount = 2048;
        this.sheenSamplCount = 64;
        this.lodBias = 0.0;
        this.lowestMipLevel = 4;
        this.lutResolution = 1024;

        this.scaleValue = 1.0;

        this.mipmapCount = undefined;

        this.lambertianTextureID = undefined;
        this.ggxTextureID = undefined;
        this.sheenTextureID = undefined;

        this.ggxLutTextureID = undefined;
        this.charlieLutTextureID = undefined;

        this.inputTextureID = undefined;
        this.cubemapTextureID = undefined;
        this.framebuffer = undefined;

        this.supportedFormat = "BYTE";

        const shaderSources = new Map();

        shaderSources.set("fullscreen.vert", fullscreenShader);
        shaderSources.set("panorama_to_cubemap.frag", panoramaToCubeMap);
        shaderSources.set("ibl_filtering.frag", iblFiltering);
        shaderSources.set("debug.frag", debugOutput);

        this.shaderCache = new ShaderCache(shaderSources, view.renderer.webGl);
    }

    
    prepareTextureData(image)
    {
        let texture =  {
            internalFormat: this.gl.RGB32F,
            format:this.gl.RGB,
            type: this.gl.FLOAT,
            data:undefined 
        };

        // Reset scaling of hdrs 
        this.scaleValue = 1.0;

        if(this.supportedFormat == "BYTE")
        {
            texture.internalFormat = this.internalFormat();
            texture.format = this.gl.RGBA;
            texture.type = this.type();

            const numPixels = image.dataFloat.length / 3;

            let max_value = 0.0;
            let clamped_sum = 0.0;
            let diff_sum = 0.0;

            for(let i = 0, src = 0, dst = 0; i < numPixels; ++i, src += 3, dst += 4)
            {
                let max_component = Math.max(image.dataFloat[src+0], image.dataFloat[src+1], image.dataFloat[src+2]);
                if(max_component > 1.0) {
                    diff_sum += max_component-1.0;
                }
                clamped_sum += Math.max(max_component, 1.0);

                max_value =  Math.max(max_component, max_value);
            }

            let scaleFactor = 1.0;  
            if(clamped_sum > 1.0) {
                // Apply global scale factor to compensate for intensity lost when clamping
                scaleFactor = (clamped_sum+diff_sum)/clamped_sum;
            }

            if(max_value > 1.0){
                console.warn("Environment light intensity cannot be displayed correctly on this device");
            }
           
            texture.data = new Uint8Array(numPixels * 4);
            for(let i = 0, src = 0, dst = 0; i < numPixels; ++i, src += 3, dst += 4)
            {
                // copy the pixels and pad the alpha channel
                texture.data[dst+0] = Math.min((image.dataFloat[src+0])*255, 255);
                texture.data[dst+1] = Math.min((image.dataFloat[src+1])*255, 255);
                texture.data[dst+2] = Math.min((image.dataFloat[src+2])*255, 255);
                texture.data[dst+3] = 0;
            }

            this.scaleValue =  scaleFactor;
            return texture;
        }

        if (image.dataFloat instanceof Float32Array && typeof(this.gl.RGB32F) !== 'undefined')
        {
            texture.internalFormat = this.gl.RGB32F;
            texture.format = this.gl.RGB;
            texture.type = this.gl.FLOAT;
            texture.data = image.dataFloat;
            return texture;
        }

        if (image.dataFloat instanceof Float32Array)
        {
            // workaround for node-gles not supporting RGB32F -> conver to RGBA32F
            texture.internalFormat = this.gl.RGBA32F;
            texture.format = this.gl.RGBA;
            texture.type = this.gl.FLOAT;

            const numPixels = image.dataFloat.length / 3;
            texture.data = new Float32Array(numPixels * 4);
            for(let i = 0, src = 0, dst = 0; i < numPixels; ++i, src += 3, dst += 4)
            {
                // copy the pixels and pad the alpha channel
                texture.data[dst] = image.dataFloat[src];
                texture.data[dst+1] = image.dataFloat[src+1];
                texture.data[dst+2] = image.dataFloat[src+2];
                texture.data[dst+3] = 0;
            }
            return texture;
        }

        if (typeof(Image) !== 'undefined' && image instanceof Image)
        {
            texture.internalFormat = this.gl.RGBA;
            texture.format = this.gl.RGBA;
            texture.type = this.gl.UNSIGNED_BYTE;
            texture.data = image;
            return texture;
        }

        console.error("loadTextureHDR failed, unsupported HDR image");


    }

    loadTextureHDR(image)
    {
        let texture = this.prepareTextureData(image);
       
        const textureID = this.gl.createTexture();
        this.gl.bindTexture(this.gl.TEXTURE_2D, textureID);      

        this.gl.texImage2D(
            this.gl.TEXTURE_2D,
            0,
            texture.internalFormat,
            image.width,
            image.height,
            0,
            texture.format,
            texture.type,
            texture.data
        );

        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.MIRRORED_REPEAT);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.MIRRORED_REPEAT);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR);

        return textureID;
    }

    internalFormat()
    {
        if(this.supportedFormat == "FLOAT") return  this.gl.RGBA32F;
        if(this.supportedFormat == "HALF_FLOAT") return  this.gl.RGBA16F;
        if(this.supportedFormat == "BYTE") return  this.gl.RGBA8;
        return this.gl.RGBA8; // Fallback
    }

    type()
    {
        if(this.supportedFormat == "FLOAT") return  this.gl.FLOAT;
        if(this.supportedFormat == "HALF_FLOAT") return  this.gl.HALF_FLOAT;
        if(this.supportedFormat == "BYTE") return  this.gl.UNSIGNED_BYTE;
        return this.gl.UNSIGNED_BYTE; // Fallback
    }

    createCubemapTexture(withMipmaps)
    {
        const targetTexture =  this.gl.createTexture();
        this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP, targetTexture);

        for(let i = 0; i < 6; ++i)
        {
            this.gl.texImage2D(
                this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + i,
                0,
                this.internalFormat(),
                this.textureSize,
                this.textureSize,
                0,
                this.gl.RGBA,
                this.type(),
                null
            );
        }

        if(withMipmaps)
        {
            this.gl.texParameteri(this.gl.TEXTURE_CUBE_MAP, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR_MIPMAP_LINEAR);
        }
        else
        {
            this.gl.texParameteri(this.gl.TEXTURE_CUBE_MAP, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR);
        }

        this.gl.texParameteri(this.gl.TEXTURE_CUBE_MAP, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR);
        this.gl.texParameteri(this.gl.TEXTURE_CUBE_MAP, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
        this.gl.texParameteri(this.gl.TEXTURE_CUBE_MAP, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);

        return targetTexture;
    }

    createLutTexture()
    {
        const targetTexture = this.gl.createTexture();
        this.gl.bindTexture(this.gl.TEXTURE_2D, targetTexture);

        this.gl.texImage2D(
            this.gl.TEXTURE_2D,
            0,
            this.internalFormat(),
            this.lutResolution,
            this.lutResolution,
            0,
            this.gl.RGBA,
            this.type(),
            null
        );

        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);

        return targetTexture;
    }

    init(panoramaImage)
    {
        if (this.gl.getExtension("EXT_color_buffer_float") && this.gl.getExtension("OES_texture_float_linear"))
        {
            this.supportedFormat = "FLOAT";  
        } 
        else
        {
            console.warn("Floating point textures are not supported");
            this.supportedFormat = "BYTE";
        }

        this.inputTextureID = this.loadTextureHDR(panoramaImage);

        this.cubemapTextureID = this.createCubemapTexture(true);

        this.framebuffer = this.gl.createFramebuffer();

        this.lambertianTextureID = this.createCubemapTexture(false);
        this.ggxTextureID = this.createCubemapTexture(true);
        this.sheenTextureID = this.createCubemapTexture(true);


        this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP, this.ggxTextureID);
        this.gl.generateMipmap(this.gl.TEXTURE_CUBE_MAP);

        this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP, this.sheenTextureID);
        this.gl.generateMipmap(this.gl.TEXTURE_CUBE_MAP);

        this.mipmapLevels = Math.floor(Math.log2(this.textureSize))+1 - this.lowestMipLevel;
    }

    filterAll()
    {
        this.panoramaToCubeMap();
        this.cubeMapToLambertian();
        this.cubeMapToGGX();
        this.cubeMapToSheen();

        this.sampleGGXLut();
        this.sampleCharlieLut();

        this.gl.bindFramebuffer( this.gl.FRAMEBUFFER, null);
    }

    panoramaToCubeMap()
    {
        for(let i = 0; i < 6; ++i)
        {
            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.framebuffer);
            this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0, this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, this.cubemapTextureID, 0);

            this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP, this.cubemapTextureID);

            this.gl.viewport(0, 0, this.textureSize, this.textureSize);

            this.gl.clearColor(1.0, 0.0, 0.0, 0.0);
            this.gl.clear(this.gl.COLOR_BUFFER_BIT| this.gl.DEPTH_BUFFER_BIT);

            const vertexHash = this.shaderCache.selectShader("fullscreen.vert", []);
            const fragmentHash = this.shaderCache.selectShader("panorama_to_cubemap.frag", []);

            const shader = this.shaderCache.getShaderProgram(fragmentHash, vertexHash);
            this.gl.useProgram(shader.program);

            //  TEXTURE0 = active.
            this.gl.activeTexture(this.gl.TEXTURE0+0);

            // Bind texture ID to active texture
            this.gl.bindTexture(this.gl.TEXTURE_2D, this.inputTextureID);

            // map shader uniform to texture unit (TEXTURE0)
            const location = this.gl.getUniformLocation(shader.program,"u_panorama");
            this.gl.uniform1i(location, 0); // texture unit 0 (TEXTURE0)

            shader.updateUniform("u_currentFace", i);

            //fullscreen triangle
            this.gl.drawArrays(this.gl.TRIANGLES, 0, 3);
        }

        this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP, this.cubemapTextureID);
        this.gl.generateMipmap(this.gl.TEXTURE_CUBE_MAP);

    }


    applyFilter(
        distribution,
        roughness,
        targetMipLevel,
        targetTexture,
        sampleCount,
        lodBias = 0.0)
    {
        const currentTextureSize = this.textureSize >> targetMipLevel;

        for(let i = 0; i < 6; ++i)
        {
            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.framebuffer);
            this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0, this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, targetTexture, targetMipLevel);

            this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP, targetTexture);

            this.gl.viewport(0, 0, currentTextureSize, currentTextureSize);

            this.gl.clearColor(1.0, 0.0, 0.0, 0.0);
            this.gl.clear(this.gl.COLOR_BUFFER_BIT| this.gl.DEPTH_BUFFER_BIT);

            const vertexHash = this.shaderCache.selectShader("fullscreen.vert", []);
            const fragmentHash = this.shaderCache.selectShader("ibl_filtering.frag", []);

            const shader = this.shaderCache.getShaderProgram(fragmentHash, vertexHash);
            this.gl.useProgram(shader.program);

            //  TEXTURE0 = active.
            this.gl.activeTexture(this.gl.TEXTURE0);

            // Bind texture ID to active texture
            this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP, this.cubemapTextureID);

            // map shader uniform to texture unit (TEXTURE0)
            const location = this.gl.getUniformLocation(shader.program,"u_cubemapTexture");
            this.gl.uniform1i(location, 0); // texture unit 0

            shader.updateUniform("u_roughness", roughness);
            shader.updateUniform("u_sampleCount", sampleCount);
            shader.updateUniform("u_width", this.textureSize);
            shader.updateUniform("u_lodBias", lodBias);
            shader.updateUniform("u_distribution", distribution);
            shader.updateUniform("u_currentFace", i);
            shader.updateUniform("u_isGeneratingLUT", 0);
            if(this.supportedFormat === "BYTE") {
                shader.updateUniform("u_floatTexture", 0);
            } else {
                shader.updateUniform("u_floatTexture", 1);
            }
            shader.updateUniform("u_intensityScale", this.scaleValue);

            //fullscreen triangle
            this.gl.drawArrays(this.gl.TRIANGLES, 0, 3);
        }

    }

    cubeMapToLambertian()
    {
        this.applyFilter(
            0,
            0.0,
            0,
            this.lambertianTextureID,
            this.lambertianSampleCount);
    }


    cubeMapToGGX()
    {
        for(let currentMipLevel = 0; currentMipLevel <= this.mipmapLevels; ++currentMipLevel)
        {
            const roughness = (currentMipLevel) / (this.mipmapLevels - 1);
            this.applyFilter(
                1,
                roughness,
                currentMipLevel,
                this.ggxTextureID,
                this.ggxSampleCount);
        }
    }

    cubeMapToSheen()
    {
        for(let currentMipLevel = 0; currentMipLevel <= this.mipmapLevels; ++currentMipLevel)
        {
            const roughness = (currentMipLevel) / (this.mipmapLevels - 1);
            this.applyFilter(
                2,
                roughness,
                currentMipLevel,
                this.sheenTextureID,
                this.sheenSamplCount);
        }
    }

    sampleLut(distribution, targetTexture, currentTextureSize)
    {
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.framebuffer);
        this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0, this.gl.TEXTURE_2D, targetTexture, 0);

        this.gl.bindTexture(this.gl.TEXTURE_2D, targetTexture);

        this.gl.viewport(0, 0, currentTextureSize, currentTextureSize);

        this.gl.clearColor(1.0, 0.0, 0.0, 0.0);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT| this.gl.DEPTH_BUFFER_BIT);

        const vertexHash = this.shaderCache.selectShader("fullscreen.vert", []);
        const fragmentHash = this.shaderCache.selectShader("ibl_filtering.frag", []);

        const shader = this.shaderCache.getShaderProgram(fragmentHash, vertexHash);
        this.gl.useProgram(shader.program);


        //  TEXTURE0 = active.
        this.gl.activeTexture(this.gl.TEXTURE0+0);

        // Bind texture ID to active texture
        this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP, this.cubemapTextureID);

        // map shader uniform to texture unit (TEXTURE0)
        const location = this.gl.getUniformLocation(shader.program,"u_cubemapTexture");
        this.gl.uniform1i(location, 0); // texture unit 0


        shader.updateUniform("u_roughness", 0.0);
        shader.updateUniform("u_sampleCount", 512);
        shader.updateUniform("u_width", 0.0);
        shader.updateUniform("u_lodBias", 0.0);
        shader.updateUniform("u_distribution", distribution);
        shader.updateUniform("u_currentFace", 0);
        shader.updateUniform("u_isGeneratingLUT", 1);

        //fullscreen triangle
        this.gl.drawArrays(this.gl.TRIANGLES, 0, 3);
    }

    sampleGGXLut()
    {
        this.ggxLutTextureID = this.createLutTexture();
        this.sampleLut(1, this.ggxLutTextureID, this.lutResolution);
    }

    sampleCharlieLut()
    {
        this.charlieLutTextureID = this.createLutTexture();
        this.sampleLut(2, this.charlieLutTextureID, this.lutResolution);
    }

    destroy()
    {
        this.shaderCache.destroy();
    }
}

/* globals LIBKTX */

class KtxDecoder {

    constructor (context, externalKtxlib) {
        this.gl = context;
        this.libktx = null;
        if (context !== undefined)
        {
            if (externalKtxlib === undefined && LIBKTX !== undefined)
            {
                externalKtxlib = LIBKTX;
            }
            if (externalKtxlib !== undefined)
            {
                this.initializied = this.init(context, externalKtxlib);
            }
            else
            {
                console.error('Failed to initalize KTXDecoder: ktx library undefined');
                return undefined;
            }
        }
        else
        {
            console.error('Failed to initalize KTXDecoder: WebGL context undefined');
            return undefined;
        }
    }

    async init(context, externalKtxlib) {
        this.libktx = await externalKtxlib({preinitializedWebGLContext: context});
        this.libktx.GL.makeContextCurrent(this.libktx.GL.createContext(null, { majorVersion: 2.0 }));
    }

    transcode(ktexture) {
        if (ktexture.needsTranscoding) {
            let format;

            let astcSupported = false;
            let etcSupported = false;
            let dxtSupported = false;
            let bptcSupported = false;
            let pvrtcSupported = false;

            astcSupported = !!this.gl.getExtension('WEBGL_compressed_texture_astc');
            etcSupported = !!this.gl.getExtension('WEBGL_compressed_texture_etc1');
            dxtSupported = !!this.gl.getExtension('WEBGL_compressed_texture_s3tc');
            bptcSupported = !!this.gl.getExtension('EXT_texture_compression_bptc');

            pvrtcSupported = !!(this.gl.getExtension('WEBGL_compressed_texture_pvrtc')) || !!(this.gl.getExtension('WEBKIT_WEBGL_compressed_texture_pvrtc'));

            if (astcSupported) {
                format = this.libktx.TranscodeTarget.ASTC_4x4_RGBA;
            } else if (bptcSupported) {
                format = this.libktx.TranscodeTarget.BC7_RGBA;
            } else if (dxtSupported) {
                format = this.libktx.TranscodeTarget.BC1_OR_3;
            } else if (pvrtcSupported) {
                format = this.libktx.TranscodeTarget.PVRTC1_4_RGBA;
            } else if (etcSupported) {
                format = this.libktx.TranscodeTarget.ETC;
            } else {
                format = this.libktx.TranscodeTarget.RGBA8888;
            }
            if (ktexture.transcodeBasis(format, 0) != this.libktx.ErrorCode.SUCCESS) {
                console.warn('Texture transcode failed. See console for details.');
            }
        }
    }

    async loadKtxFromUri(uri) {
        await this.initializied;
        const response = await fetch(uri);
        const data = new Uint8Array(await response.arrayBuffer());
        const texture = new this.libktx.ktxTexture(data);
        this.transcode(texture);
        let uploadResult = texture.glUpload();
        if (uploadResult.texture == null)
        {
            console.error("Could not load KTX data");
            return undefined;
        }
        uploadResult.texture.levels = Math.log2(texture.baseWidth);
        return uploadResult.texture;
    }

    async loadKtxFromBuffer(data) {
        await this.initializied;
        const texture = new this.libktx.ktxTexture(data);
        this.transcode(texture);
        const uploadResult = texture.glUpload();
        if (uploadResult.texture == null)
        {
            console.error("Could not load KTX data");
            return undefined;
        }
        return uploadResult.texture;
    }
}

/**
 * hdrpng.js - Original code from Enki https://enkimute.github.io/hdrpng.js/
 *
 * Refactored and simplified.
 */


function _rgbeToFloat(buffer)
{
    const length = buffer.byteLength >> 2;
    const result = new Float32Array(length * 3);

    for (let i = 0; i < length; i++)
    {
        const s = Math.pow(2, buffer[i * 4 + 3] - (128 + 8));

        result[i * 3] = buffer[i * 4] * s;
        result[i * 3 + 1] = buffer[i * 4 + 1] * s;
        result[i * 3 + 2] = buffer[i * 4 + 2] * s;
    }
    return result;
}

async function loadHDR(buffer)
{
    let header = '';
    let pos = 0;
    const d8 = buffer;
    let format = undefined;
    // read header.
    while (!header.match(/\n\n[^\n]+\n/g) && pos < d8.length) header += String.fromCharCode(d8[pos++]);
    // check format.
    format = header.match(/FORMAT=(.*)$/m);
    if (format.length < 2)
    {
        return undefined;
    }
    format = format[1];
    if (format != '32-bit_rle_rgbe') return console.warn('unknown format : ' + format), this.onerror();
    // parse resolution
    let rez = header.split(/\n/).reverse();
    if (rez.length < 2)
    {
        return undefined;
    }
    rez = rez[1].split(' ');
    if (rez.length < 4)
    {
        return undefined;
    }
    const width = rez[3] * 1, height = rez[1] * 1;
    // Create image.
    const img = new Uint8Array(width * height * 4);
    let ipos = 0;
    // Read all scanlines
    for (let j = 0; j < height; j++)
    {
        const scanline = [];

        let rgbe = d8.slice(pos, pos += 4);
        const isNewRLE = (rgbe[0] == 2 && rgbe[1] == 2 && rgbe[2] == ((width >> 8) & 0xFF) && rgbe[3] == (width & 0xFF));

        if (isNewRLE && (width >= 8) && (width < 32768))
        {
            for (let i = 0; i < 4; i++)
            {
                let ptr = i * width;
                const ptr_end = (i + 1) * width;
                let buf = undefined;
                let count = undefined;
                while (ptr < ptr_end)
                {
                    buf = d8.slice(pos, pos += 2);
                    if (buf[0] > 128)
                    {
                        count = buf[0] - 128;
                        while (count-- > 0) scanline[ptr++] = buf[1];
                    }
                    else
                    {
                        count = buf[0] - 1;
                        scanline[ptr++] = buf[1];
                        while (count-- > 0) scanline[ptr++] = d8[pos++];
                    }
                }
            }

            for (let i = 0; i < width; i++)
            {
                img[ipos++] = scanline[i + 0 * width];
                img[ipos++] = scanline[i + 1 * width];
                img[ipos++] = scanline[i + 2 * width];
                img[ipos++] = scanline[i + 3 * width];
            }
        }
        else
        {
            pos -= 4;

            for (let i = 0; i < width; i++)
            {
                rgbe = d8.slice(pos, pos += 4);

                img[ipos++] = rgbe[0];
                img[ipos++] = rgbe[1];
                img[ipos++] = rgbe[2];
                img[ipos++] = rgbe[3];
            }
        }
    }

    const imageFloatBuffer = _rgbeToFloat(img);

    return {
        dataFloat: imageFloatBuffer,
        width: width,
        height: height
    };
}

/**
 * ResourceLoader can be used to load resources for the GltfState
 * that are then used to display the loaded data with GltfView
 */
class ResourceLoader
{
    /**
     * ResourceLoader class that provides an interface to load resources into
     * the view. Typically this is created with GltfView.createResourceLoader()
     * You cannot share resource loaders between GltfViews as some of the resources
     * are allocated directly on the WebGl2 Context
     * @param {Object} view the GltfView for which the resources are loaded
     * @param {String} libPath path to the lib folder. This can be used to find the WASM files if sample viewer is repackaged
     */
    constructor(view, libPath = "./libs/")
    {
        this.view = view;
        this.libPath = libPath;
    }

    /**
     * loadGltf asynchroneously and create resources for rendering
     * @param {(String | ArrayBuffer | File)} gltfFile the .gltf or .glb file either as path or as preloaded resource. In node.js environments, only ArrayBuffer types are accepted.
     * @param {File[]} [externalFiles] additional files containing resources that are referenced in the gltf
     * @returns {Promise} a promise that fulfills when the gltf file was loaded
     */
    async loadGltf(gltfFile, externalFiles)
    {
        let isGlb = undefined;
        let buffers = undefined;
        let json = undefined;
        let data = undefined;
        let filename = "";
        if (typeof gltfFile === "string")
        {
            isGlb = getIsGlb(gltfFile);
            const response = await fetch(gltfFile);
            json = data = await (isGlb ? response.arrayBuffer() : response.json());
            filename = gltfFile;
        }
        else if (gltfFile instanceof ArrayBuffer)
        {
            isGlb = externalFiles === undefined;
            if (isGlb)
            {
                data = gltfFile;
            }
            else
            {
                console.error("Only .glb files can be loaded from an array buffer");
            }
        }
        else if (Array.isArray(gltfFile) && typeof(File) !== 'undefined' && gltfFile[1] instanceof File)
        {
            let fileContent = gltfFile[1];
            filename = gltfFile[1].name;
            isGlb = getIsGlb(filename);
            if (isGlb)
            {
                data = await AsyncFileReader.readAsArrayBuffer(fileContent);
            }
            else
            {
                data = await AsyncFileReader.readAsText(fileContent);
                json = JSON.parse(data);
                buffers = externalFiles;
            }
        }
        else
        {
            console.error("Passed invalid type to loadGltf " + typeof (gltfFile));
        }

        if (isGlb)
        {
            const glbParser = new GlbParser(data);
            const glb = glbParser.extractGlbData();
            json = glb.json;
            buffers = glb.buffers;
        }

        const gltf = new glTF(filename);
        gltf.ktxDecoder = this.view.ktxDecoder;
        //Make sure draco decoder instance is ready
        gltf.fromJson(json);

        // because the gltf image paths are not relative
        // to the gltf, we have to resolve all image paths before that
        for (const image of gltf.images)
        {
            image.resolveRelativePath(getContainingFolder(gltf.path));
        }
        await init(`${this.libPath}mikktspace_bg.wasm`);
        await gltfLoader.load(gltf, this.view.context, buffers);

        return gltf;
    }

    /**
     * loadEnvironment asynchroneously, run IBL sampling and create resources for rendering
     * @param {(String | ArrayBuffer | File)} environmentFile the .hdr file either as path or resource
     * @param {Object} [lutFiles] object containing paths or resources for the environment look up textures. Keys are lut_ggx_file, lut_charlie_file and lut_sheen_E_file
     * @returns {Promise} a promise that fulfills when the environment file was loaded
     */
    async loadEnvironment(environmentFile, lutFiles)
    {
        let image = undefined;
        if (typeof environmentFile === "string")
        {
            let response = await fetch(environmentFile);
            image = await loadHDR(new Uint8Array(await response.arrayBuffer()));
        }
        else if (environmentFile instanceof ArrayBuffer)
        {
            image = await loadHDR(new Uint8Array(environmentFile));
        }
        else if (typeof (File) !== 'undefined' && environmentFile instanceof File)
        {
            const imageData = await AsyncFileReader.readAsArrayBuffer(environmentFile).catch(() =>
            {
                console.error("Could not load image with FileReader");
            });
            image = await loadHDR(new Uint8Array(imageData));
        }
        else
        {
            console.error("Passed invalid type to loadEnvironment " + typeof (gltfFile));
        }
        if (image === undefined)
        {
            return undefined;
        }
        return _loadEnvironmentFromPanorama(image, this.view, lutFiles);
    }

    /**
     * initKtxLib must be called before loading gltf files with ktx2 assets
     * @param {Object} [externalKtxLib] external ktx library (for example from a CDN)
     */
    initKtxLib(externalKtxLib)
    {
        this.view.ktxDecoder = new KtxDecoder(this.view.context, externalKtxLib);
    }

    /**
     * initDracoLib must be called before loading gltf files with draco meshes
     * @param {*} [externalDracoLib] external draco library (for example from a CDN)
     */
    async initDracoLib(externalDracoLib)
    {
        const dracoDecoder = new DracoDecoder(externalDracoLib);
        if (dracoDecoder !== undefined)
        {
            await dracoDecoder.ready();
        }
    }
}

async function _loadEnvironmentFromPanorama(imageHDR, view, luts)
{
    // The environment uses the same type of samplers, textures and images as used in the glTF class
    // so we just use it as a template
    const environment = new glTF();

    //
    // Prepare samplers.
    //

    let samplerIdx = environment.samplers.length;

    environment.samplers.push(new gltfSampler(GL.LINEAR, GL.LINEAR, GL.CLAMP_TO_EDGE, GL.CLAMP_TO_EDGE, "DiffuseCubeMapSampler"));
    const diffuseCubeSamplerIdx = samplerIdx++;

    environment.samplers.push(new gltfSampler(GL.LINEAR, GL.LINEAR_MIPMAP_LINEAR, GL.CLAMP_TO_EDGE, GL.CLAMP_TO_EDGE, "SpecularCubeMapSampler"));
    const specularCubeSamplerIdx = samplerIdx++;

    environment.samplers.push(new gltfSampler(GL.LINEAR, GL.LINEAR_MIPMAP_LINEAR, GL.CLAMP_TO_EDGE, GL.CLAMP_TO_EDGE, "SheenCubeMapSampler"));
    const sheenCubeSamplerIdx = samplerIdx++;

    environment.samplers.push(new gltfSampler(GL.LINEAR, GL.LINEAR, GL.CLAMP_TO_EDGE, GL.CLAMP_TO_EDGE, "LUTSampler"));
    const lutSamplerIdx = samplerIdx++;

    //
    // Prepare images and textures.
    //

    let imageIdx = environment.images.length;

    let environmentFiltering = new iblSampler(view);

    environmentFiltering.init(imageHDR);
    environmentFiltering.filterAll();

    // Diffuse

    const diffuseGltfImage = new gltfImage(
        undefined,
        GL.TEXTURE_CUBE_MAP,
        0,
        undefined,
        "Diffuse",
        ImageMimeType.GLTEXTURE,
        environmentFiltering.lambertianTextureID
    );

    environment.images.push(diffuseGltfImage);

    const diffuseTexture = new gltfTexture(
        diffuseCubeSamplerIdx,
        [imageIdx++],
        GL.TEXTURE_CUBE_MAP);
    diffuseTexture.initialized = true; // iblsampler has already initialized the texture

    environment.textures.push(diffuseTexture);

    environment.diffuseEnvMap = new gltfTextureInfo(environment.textures.length - 1, 0, true);
    environment.diffuseEnvMap.generateMips = false;



    // Specular
    const specularGltfImage = new gltfImage(
        undefined,
        GL.TEXTURE_CUBE_MAP,
        0,
        undefined,
        "Specular",
        ImageMimeType.GLTEXTURE,
        environmentFiltering.ggxTextureID
    );

    environment.images.push(specularGltfImage);

    const specularTexture = new gltfTexture(
        specularCubeSamplerIdx,
        [imageIdx++],
        GL.TEXTURE_CUBE_MAP);
    specularTexture.initialized = true; // iblsampler has already initialized the texture

    environment.textures.push(specularTexture);

    environment.specularEnvMap = new gltfTextureInfo(environment.textures.length - 1, 0, true);
    environment.specularEnvMap.generateMips = false;


    // Sheen
    const sheenGltfImage = new gltfImage(
        undefined,
        GL.TEXTURE_CUBE_MAP,
        0,
        undefined,
        "Sheen",
        ImageMimeType.GLTEXTURE,
        environmentFiltering.sheenTextureID
    );

    environment.images.push(sheenGltfImage);

    const sheenTexture = new gltfTexture(
        sheenCubeSamplerIdx,
        [imageIdx++],
        GL.TEXTURE_CUBE_MAP);
    sheenTexture.initialized = true; // iblsampler has already initialized the texture

    environment.textures.push(sheenTexture);

    environment.sheenEnvMap = new gltfTextureInfo(environment.textures.length - 1, 0, true);
    environment.sheenEnvMap.generateMips = false;

    /*
        // Diffuse

        const lambertian = new gltfImage(filteredEnvironmentsDirectoryPath + "/lambertian/diffuse.ktx2", GL.TEXTURE_CUBE_MAP);
        lambertian.mimeType = ImageMimeType.KTX2;
        environment.images.push(lambertian);
        environment.textures.push(new gltfTexture(diffuseCubeSamplerIdx, [imageIdx++], GL.TEXTURE_CUBE_MAP));
        environment.diffuseEnvMap = new gltfTextureInfo(environment.textures.length - 1, 0, true);
        environment.diffuseEnvMap.generateMips = false;

        // Specular

        const specular = new gltfImage(filteredEnvironmentsDirectoryPath + "/ggx/specular.ktx2", GL.TEXTURE_CUBE_MAP);
        specular.mimeType = ImageMimeType.KTX2;
        environment.images.push(specular);
        environment.textures.push(new gltfTexture(specularCubeSamplerIdx, [imageIdx++], GL.TEXTURE_CUBE_MAP));
        environment.specularEnvMap = new gltfTextureInfo(environment.textures.length - 1, 0, true);
        environment.specularEnvMap.generateMips = false;

        const specularImage = environment.images[environment.textures[environment.textures.length - 1].source];

        // Sheen

        const sheen = new gltfImage(filteredEnvironmentsDirectoryPath + "/charlie/sheen.ktx2", GL.TEXTURE_CUBE_MAP);
        sheen.mimeType = ImageMimeType.KTX2;
        environment.images.push(sheen);
        environment.textures.push(new gltfTexture(sheenCubeSamplerIdx, [imageIdx++], GL.TEXTURE_CUBE_MAP));
        environment.sheenEnvMap = new gltfTextureInfo(environment.textures.length - 1, 0, true);
        environment.sheenEnvMap.generateMips = false;*/

    //
    // Look Up Tables.
    //

    // GGX

    if (luts === undefined)
    {
        luts = {
            lut_sheen_E_file: "assets/images/lut_sheen_E.png",
        };
    }

    environment.images.push(new gltfImage(
        undefined,
        GL.TEXTURE_2D,
        0,
        undefined,
        undefined,
        ImageMimeType.GLTEXTURE,
        environmentFiltering.ggxLutTextureID));
    const lutTexture = new gltfTexture(lutSamplerIdx, [imageIdx++], GL.TEXTURE_2D);
    lutTexture.initialized = true; // iblsampler has already initialized the texture
    environment.textures.push(lutTexture);

    environment.lut = new gltfTextureInfo(environment.textures.length - 1, 0 , true);
    environment.lut.generateMips = false;

    // Sheen
    // Charlie
    environment.images.push(new gltfImage(
        undefined,
        GL.TEXTURE_2D,
        0,
        undefined,
        undefined,
        ImageMimeType.GLTEXTURE,
        environmentFiltering.charlieLutTextureID));
    const charlieLut = new gltfTexture(lutSamplerIdx, [imageIdx++], GL.TEXTURE_2D);
    charlieLut.initialized = true; // iblsampler has already initialized the texture
    environment.textures.push(charlieLut);

    environment.sheenLUT = new gltfTextureInfo(environment.textures.length - 1, 0, true);
    environment.sheenLUT.generateMips = false;

    // Sheen E LUT

    environment.images.push(new gltfImage(luts.lut_sheen_E_file, GL.TEXTURE_2D, 0, undefined, undefined, ImageMimeType.PNG));
    const sheenELut = new gltfTexture(lutSamplerIdx, [imageIdx++], GL.TEXTURE_2D);
    sheenELut.initialized = true; // iblsampler has already initialized the texture
    environment.textures.push(sheenELut);

    environment.sheenELUT = new gltfTextureInfo(environment.textures.length - 1);
    environment.sheenELUT.generateMips = false;

    await gltfLoader.loadImages(environment);

    environment.initGl(view.context);

    environment.mipCount = environmentFiltering.mipmapLevels;
    environment.iblIntensityScale = environmentFiltering.scaleValue;

    return environment;
}

/**
 * GltfView represents a view on a gltf, e.g. in a canvas
 */
class GltfView
{
    /**
     * GltfView representing one WebGl 2.0 context or in other words one
     * 3D rendering of the Gltf.
     * You can create multiple views for example when multiple canvases should
     * be shown on the same webpage.
     * @param {*} context WebGl 2.0 context. Get it from a canvas with `canvas.getContext("webgl2")`
     */
    constructor(context)
    {
        this.context = context;
        this.renderer = new gltfRenderer(this.context);
    }

    /**
     * createState constructs a new GltfState for the GltfView. The resources
     * referenced in a gltf state can directly be stored as resources on the WebGL
     * context of GltfView, therefore GltfStates cannot not be shared between
     * GltfViews.
     * @returns {GltfState} GltfState
     */
    createState()
    {
        return new GltfState(this);
    }

    /**
     * createResourceLoader creates a resource loader with which glTFs and
     * environments can be loaded for the view
     * @param {Object} [externalDracoLib] optional object of an external Draco library, e.g. from a CDN
     * @param {Object} [externalKtxLib] optional object of an external KTX library, e.g. from a CDN
     * @param {string} [libPath] optional path to the libraries. Used to define the path to the WASM files on repackaging
     * @returns {ResourceLoader} ResourceLoader
     */
    createResourceLoader(externalDracoLib = undefined, externalKtxLib = undefined, libPath = undefined)
    {
        let resourceLoader = new ResourceLoader(this, libPath);
        resourceLoader.initKtxLib(externalKtxLib);
        resourceLoader.initDracoLib(externalDracoLib);
        return resourceLoader;
    }

    /**
     * renderFrame to the context's default frame buffer
     * Call this function in the javascript animation update loop for continuous rendering to a canvas
     * @param {*} state GltfState that is be used for rendering
     * @param {*} width of the viewport
     * @param {*} height of the viewport
     */
    renderFrame(state, width, height)
    {
        this.renderer.init(state);
        this._animate(state);

        this.renderer.resize(width, height);

        this.renderer.clearFrame(state.renderingParameters.clearColor);

        if(state.gltf === undefined)
        {
            return;
        }

        const scene = state.gltf.scenes[state.sceneIndex];

        if(scene === undefined)
        {
            return;
        }

        scene.applyTransformHierarchy(state.gltf);

        this.renderer.drawScene(state, scene);
    }

    /**
     * gatherStatistics collects information about the GltfState such as the number of
     * rendered meshes or triangles
     * @param {*} state GltfState about which the statistics should be collected
     * @returns {Object} an object containing statistics information
     */
    gatherStatistics(state)
    {
        if(state.gltf === undefined)
        {
            return;
        }

        // gather information from the active scene
        const scene = state.gltf.scenes[state.sceneIndex];
        if (scene === undefined)
        {
            return {
                meshCount: 0,
                faceCount: 0,
                opaqueMaterialsCount: 0,
                transparentMaterialsCount: 0};
        }
        const nodes = scene.gatherNodes(state.gltf);
        const activeMeshes = nodes.filter(node => node.mesh !== undefined).map(node => state.gltf.meshes[node.mesh]);
        const activePrimitives = activeMeshes
            .reduce((acc, mesh) => acc.concat(mesh.primitives), [])
            .filter(primitive => primitive.material !== undefined);
        const activeMaterials = [... new Set(activePrimitives.map(primitive => state.gltf.materials[primitive.material]))];
        const opaqueMaterials = activeMaterials.filter(material => material.alphaMode !== "BLEND");
        const transparentMaterials = activeMaterials.filter(material => material.alphaMode === "BLEND");
        const faceCount = activePrimitives
            .map(primitive => {
                let vertexCount = 0;
                if (primitive.indices !== undefined) {
                    vertexCount = state.gltf.accessors[primitive.indices].count;
                }
                else {
                    vertexCount = state.gltf.accessors[primitive.attributes["POSITION"]].count;
                }
                if (vertexCount === 0) {
                    return 0;
                }

                // convert vertex count to point, line or triangle count
                switch (primitive.mode) {
                case GL.POINTS:
                    return vertexCount;
                case GL.LINES:
                    return vertexCount / 2;
                case GL.LINE_LOOP:
                    return vertexCount;
                case GL.LINE_STRIP:
                    return vertexCount - 1;
                case GL.TRIANGLES:
                    return vertexCount / 3;
                case GL.TRIANGLE_STRIP:
                case GL.TRIANGLE_FAN:
                    return vertexCount - 2;
                }
            })
            .reduce((acc, faceCount) => acc + faceCount);

        // assemble statistics object
        return {
            meshCount: activeMeshes.length,
            faceCount: faceCount,
            opaqueMaterialsCount: opaqueMaterials.length,
            transparentMaterialsCount: transparentMaterials.length
        };
    }

    _animate(state)
    {
        if(state.gltf === undefined)
        {
            return;
        }

        if(state.gltf.animations !== undefined && state.animationIndices !== undefined)
        {
            const disabledAnimations = state.gltf.animations.filter( (anim, index) => {
                return false === state.animationIndices.includes(index);
            });

            for(const disabledAnimation of disabledAnimations)
            {
                disabledAnimation.advance(state.gltf, undefined);
            }

            const t = state.animationTimer.elapsedSec();

            const animations = state.animationIndices.map(index => {
                return state.gltf.animations[index];
            }).filter(animation => animation !== undefined);

            for(const animation of animations)
            {
                animation.advance(state.gltf, t);
            }
        }
    }
}

export { GltfState, GltfView, ResourceLoader };
//# sourceMappingURL=gltf-viewer.module.js.map
